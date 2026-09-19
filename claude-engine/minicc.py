#!/usr/bin/env python3
"""
minicc.py — a tiny, provider-agnostic coding agent (~250 lines).

Companion code for "The Claude Code Journey", Chapters 19–20.
It is deliberately small so you can read every line and see the same
skeleton that Claude Code, Codex CLI, Gemini CLI, Aider and friends share:

    system prompt + memory file + tool schemas
          |
          v
    [ model call ] --> text?  -> show it, stop if no tool calls
          |
          +--> tool calls? -> permission check -> run tool -> feed result back -> loop

Usage:
    pip install anthropic openai          # only the one(s) you use
    export ANTHROPIC_API_KEY=...          # or OPENAI_API_KEY / an Ollama server
    python minicc.py                      # Anthropic (default)
    python minicc.py --provider openai --model gpt-4.1
    python minicc.py --provider openai --base-url http://localhost:11434/v1 --model qwen2.5-coder
    python minicc.py -p "list the python files and summarise them"   # headless, one shot
"""
from __future__ import annotations

import argparse, fnmatch, glob as globlib, json, os, re, subprocess, sys
from dataclasses import dataclass, field

# ----------------------------------------------------------------------------
# 1. Neutral message format (provider-independent)
#    {"role":"user","content":str}
#    {"role":"assistant","content":str,"tool_calls":[{"id","name","args"}]}
#    {"role":"tool","tool_call_id":str,"name":str,"content":str}
# ----------------------------------------------------------------------------

@dataclass
class Turn:
    text: str
    tool_calls: list = field(default_factory=list)   # [{"id","name","args"}]
    usage: dict = field(default_factory=dict)


# ----------------------------------------------------------------------------
# 2. Tools: a JSON schema the model sees + a Python function we run
# ----------------------------------------------------------------------------

def _safe(path: str) -> str:
    full = os.path.realpath(path)
    if not full.startswith(os.path.realpath(os.getcwd())):
        raise PermissionError(f"{path} is outside the project directory")
    return full

def read_file(path: str, offset: int = 0, limit: int = 400) -> str:
    with open(_safe(path), encoding="utf-8", errors="replace") as f:
        lines = f.readlines()
    chunk = lines[offset: offset + limit]
    return "".join(f"{i + offset + 1:>5}\t{l}" for i, l in enumerate(chunk)) or "(empty file)"

def write_file(path: str, content: str) -> str:
    full = _safe(path)
    os.makedirs(os.path.dirname(full) or ".", exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    return f"wrote {len(content)} chars to {path}"

def edit_file(path: str, old: str, new: str) -> str:
    full = _safe(path)
    text = open(full, encoding="utf-8").read()
    n = text.count(old)
    if n != 1:   # the same rule Claude Code's Edit tool uses: the match must be unique
        return f"ERROR: expected exactly 1 match for old text, found {n}. Add more context."
    open(full, "w", encoding="utf-8").write(text.replace(old, new))
    return f"edited {path}"

def bash(command: str, timeout: int = 60) -> str:
    try:
        r = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=timeout)
    except subprocess.TimeoutExpired:
        return f"ERROR: timed out after {timeout}s"
    out = (r.stdout + r.stderr)[-8000:]     # truncate: tool output costs context
    return f"exit={r.returncode}\n{out}"

def glob_files(pattern: str) -> str:
    hits = [h for h in globlib.glob(pattern, recursive=True) if "/.git/" not in h]
    return "\n".join(sorted(hits)[:200]) or "(no matches)"

def grep(pattern: str, path_glob: str = "**/*") -> str:
    rx, out = re.compile(pattern), []
    for p in globlib.glob(path_glob, recursive=True):
        if os.path.isfile(p) and "/.git/" not in p:
            try:
                for i, line in enumerate(open(p, encoding="utf-8", errors="ignore"), 1):
                    if rx.search(line):
                        out.append(f"{p}:{i}:{line.rstrip()}")
            except OSError:
                pass
    return "\n".join(out[:200]) or "(no matches)"

TOOLS = {
    "read_file":  (read_file,  False, "Read a text file with line numbers.",
                   {"path": "string", "offset": "integer", "limit": "integer"}, ["path"]),
    "write_file": (write_file, True,  "Create or overwrite a file.",
                   {"path": "string", "content": "string"}, ["path", "content"]),
    "edit_file":  (edit_file,  True,  "Replace one unique occurrence of `old` with `new` in a file.",
                   {"path": "string", "old": "string", "new": "string"}, ["path", "old", "new"]),
    "bash":       (bash,       True,  "Run a shell command in the project directory.",
                   {"command": "string", "timeout": "integer"}, ["command"]),
    "glob":       (glob_files, False, "Find files by glob pattern, e.g. '**/*.py'.",
                   {"pattern": "string"}, ["pattern"]),
    "grep":       (grep,       False, "Search file contents with a regex.",
                   {"pattern": "string", "path_glob": "string"}, ["pattern"]),
}

def tool_schemas() -> list[dict]:
    """Neutral schema list: name, description, JSON-Schema parameters."""
    return [{
        "name": name,
        "description": desc,
        "parameters": {"type": "object",
                       "properties": {k: {"type": t} for k, t in props.items()},
                       "required": req},
    } for name, (_, _, desc, props, req) in TOOLS.items()]


# ----------------------------------------------------------------------------
# 3. Providers: translate neutral format <-> each vendor's wire format
# ----------------------------------------------------------------------------

class AnthropicProvider:
    def __init__(self, model: str):
        import anthropic
        self.client, self.model = anthropic.Anthropic(), model

    def chat(self, system: str, messages: list, tools: list) -> Turn:
        wire = []
        for m in messages:
            if m["role"] == "user":
                wire.append({"role": "user", "content": m["content"]})
            elif m["role"] == "assistant":
                blocks = [{"type": "text", "text": m["content"]}] if m["content"] else []
                blocks += [{"type": "tool_use", "id": c["id"], "name": c["name"], "input": c["args"]}
                           for c in m.get("tool_calls", [])]
                wire.append({"role": "assistant", "content": blocks})
            else:  # tool results travel inside a *user* message on Anthropic
                block = {"type": "tool_result", "tool_use_id": m["tool_call_id"], "content": m["content"]}
                if wire and wire[-1]["role"] == "user" and isinstance(wire[-1]["content"], list):
                    wire[-1]["content"].append(block)
                else:
                    wire.append({"role": "user", "content": [block]})
        resp = self.client.messages.create(
            model=self.model, max_tokens=8000,
            system=[{"type": "text", "text": system, "cache_control": {"type": "ephemeral"}}],
            tools=[{"name": t["name"], "description": t["description"], "input_schema": t["parameters"]}
                   for t in tools],
            messages=wire)
        text = "".join(b.text for b in resp.content if b.type == "text")
        calls = [{"id": b.id, "name": b.name, "args": b.input} for b in resp.content if b.type == "tool_use"]
        return Turn(text, calls, {"in": resp.usage.input_tokens, "out": resp.usage.output_tokens})


class OpenAICompatProvider:
    """Works with OpenAI and anything that speaks its Chat Completions API:
    Ollama, vLLM, LM Studio, Groq, OpenRouter, Together, DeepSeek, ..."""
    def __init__(self, model: str, base_url: str | None = None):
        from openai import OpenAI
        self.client = OpenAI(base_url=base_url, api_key=os.environ.get("OPENAI_API_KEY", "not-needed"))
        self.model = model

    def chat(self, system: str, messages: list, tools: list) -> Turn:
        wire = [{"role": "system", "content": system}]
        for m in messages:
            if m["role"] == "assistant":
                msg = {"role": "assistant", "content": m["content"] or None}
                if m.get("tool_calls"):
                    msg["tool_calls"] = [{"id": c["id"], "type": "function",
                                          "function": {"name": c["name"], "arguments": json.dumps(c["args"])}}
                                         for c in m["tool_calls"]]
                wire.append(msg)
            elif m["role"] == "tool":
                wire.append({"role": "tool", "tool_call_id": m["tool_call_id"], "content": m["content"]})
            else:
                wire.append(m)
        resp = self.client.chat.completions.create(
            model=self.model, messages=wire,
            tools=[{"type": "function", "function": t} for t in tools])
        msg = resp.choices[0].message
        calls = [{"id": c.id, "name": c.function.name, "args": json.loads(c.function.arguments or "{}")}
                 for c in (msg.tool_calls or [])]
        u = resp.usage
        return Turn(msg.content or "", calls, {"in": getattr(u, "prompt_tokens", 0), "out": getattr(u, "completion_tokens", 0)})


# ----------------------------------------------------------------------------
# 4. The harness: system prompt, memory, permissions, loop, compaction
# ----------------------------------------------------------------------------

SYSTEM = """You are minicc, a careful coding agent working in {cwd}.
Work in small verified steps: explore with glob/grep/read_file before editing,
prefer edit_file over rewriting whole files, run tests with bash after changes,
and finish with a short summary of what you changed and how you verified it.
"""

DENY = ["rm -rf /*", "git push*", "*curl*|*sh*"]   # tiny deny-list; real tools use rich rules

class Agent:
    def __init__(self, provider, yolo=False, max_turns=30, compact_at_chars=400_000):
        self.p, self.yolo, self.max_turns, self.compact_at = provider, yolo, max_turns, compact_at_chars
        self.messages: list[dict] = []
        self.system = SYSTEM.format(cwd=os.getcwd()) + self._memory()

    def _memory(self) -> str:
        for name in ("CLAUDE.md", "AGENTS.md", "MINICC.md"):     # same idea as CLAUDE.md
            if os.path.exists(name):
                return f"\n# Project memory ({name})\n" + open(name, encoding="utf-8").read()
        return ""

    def _allowed(self, name: str, args: dict) -> bool:
        fn, mutating, *_ = TOOLS[name]
        if name == "bash" and any(fnmatch.fnmatch(args.get("command", ""), d) for d in DENY):
            print(f"  ⛔ denied by rule: {args['command']}")
            return False
        if not mutating or self.yolo:
            return True
        ans = input(f"  ❓ allow {name}({json.dumps(args)[:160]})? [y/N] ").strip().lower()
        return ans == "y"

    def _compact(self):
        size = sum(len(json.dumps(m)) for m in self.messages)
        if size < self.compact_at or len(self.messages) < 6:
            return
        old, recent = self.messages[:-4], self.messages[-4:]
        while recent and recent[0]["role"] == "tool":        # never orphan a tool result
            old.append(recent.pop(0))
        summary = self.p.chat("Summarise this coding session: goals, decisions, files touched, open TODOs.",
                              [{"role": "user", "content": json.dumps(old)[-200_000:]}], []).text
        self.messages = [{"role": "user", "content": f"(Summary of earlier conversation)\n{summary}"},
                         {"role": "assistant", "content": "Understood, continuing."}] + recent
        print("  🗜  context compacted")

    def run(self, prompt: str) -> str:
        self.messages.append({"role": "user", "content": prompt})
        for _ in range(self.max_turns):
            self._compact()
            turn = self.p.chat(self.system, self.messages, tool_schemas())
            self.messages.append({"role": "assistant", "content": turn.text, "tool_calls": turn.tool_calls})
            if turn.text:
                print(f"\n🤖 {turn.text}")
            if not turn.tool_calls:                 # no tool call == the model thinks it is done
                return turn.text
            for call in turn.tool_calls:
                name, args = call["name"], call["args"]
                print(f"  🔧 {name} {json.dumps(args)[:120]}")
                if name not in TOOLS:
                    result = f"ERROR: unknown tool {name}"
                elif not self._allowed(name, args):
                    result = "ERROR: the user denied this action. Choose another approach or ask."
                else:
                    try:
                        result = TOOLS[name][0](**args)
                    except Exception as e:           # errors go back to the model, not up the stack
                        result = f"ERROR: {type(e).__name__}: {e}"
                self.messages.append({"role": "tool", "tool_call_id": call["id"], "name": name,
                                      "content": str(result)})
        return "(stopped: max turns reached)"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--provider", default="anthropic", choices=["anthropic", "openai"])
    ap.add_argument("--model", default=os.environ.get("MINICC_MODEL"))
    ap.add_argument("--base-url", default=None)
    ap.add_argument("-p", "--print", dest="prompt", help="headless: run one prompt and exit")
    ap.add_argument("--yolo", action="store_true", help="skip permission prompts (use in a sandbox!)")
    a = ap.parse_args()
    if a.provider == "anthropic":
        prov = AnthropicProvider(a.model or "claude-sonnet-4-5")
    else:
        prov = OpenAICompatProvider(a.model or "gpt-4.1", a.base_url)
    agent = Agent(prov, yolo=a.yolo)
    if a.prompt:
        agent.run(a.prompt)
        return
    print("minicc — type a task, /clear to reset, Ctrl-D to quit")
    while True:
        try:
            line = input("\n› ").strip()
        except EOFError:
            break
        if line == "/clear":
            agent.messages.clear(); print("  context cleared"); continue
        if line:
            agent.run(line)

if __name__ == "__main__":
    main()
