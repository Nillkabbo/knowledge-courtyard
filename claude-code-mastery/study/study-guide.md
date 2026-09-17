# Claude Code Mastery: A Comprehensive Study Guide

This study guide provides a structured overview of Claude Code, an agentic coding tool developed by Anthropic. It synthesizes technical references, narrative analogies, and operational protocols to facilitate a deep understanding of terminal-based AI development.

---

## Part 1: Core Concepts and Themes

The study of Claude Code is centered on the transition from being a "typist" to becoming a "terminal craftsman." This mastery is built upon three pillars: **Context, Trust, and Verification.**

### I. The Three Pillars of the Workshop
1.  **Context (The Ledger and the River):** Managing what Claude knows at any given moment. This includes the persistent memory of `CLAUDE.md` and the ephemeral flow of the "context river" within a session.
2.  **Trust (The Keyring):** Determining the level of autonomy granted to the agent. This is managed through permission modes (`plan`, `default`, `acceptEdits`, `bypassPermissions`) and explicit allow/deny rules in `settings.json`.
3.  **Verification (The Proof):** Ensuring the accuracy of the agent's output through manual diff reviews, automated testing (`/verify`), and lifecycle hooks that enforce standards like linting.

### II. Model Selection (The Four Brothers)
Selecting the right tool for the task is essential for efficiency and cost-management.

| Model | Persona | Best Use Case |
| :--- | :--- | :--- |
| **Haiku** | The Sprinter | Typos, formatting, quick one-off questions. |
| **Sonnet** | The Reliable Default | Everyday features, bug fixes, code reviews. |
| **Opus** | The Heavy Lifter | Large-scale refactors, complex debugging, high-stakes changes. |
| **Fable** | The Philosopher | Hardest, longest-running tasks requiring deep reasoning. |

### III. The Memory Hierarchy
Claude Code utilizes a layered memory system to maintain project standards across sessions.
*   **Global (`~/.claude/CLAUDE.md`):** Personal preferences for all projects.
*   **Project (`./CLAUDE.md`):** Team-wide rules, build commands, and coding styles.
*   **Local (`CLAUDE.local.md`):** Machine-specific habits; typically git-ignored.
*   **Sub-folder:** Specific rules for monorepo packages or directories.

---

## Part 2: Short-Answer Practice Questions

**Q1: What is the specific command to start a Claude Code session for a one-off task without opening an interactive loop?**
**A:** Use `claude -p "your prompt"`. This is known as "print mode."

**Q2: Which file serves as the "Workshop Ledger" and is re-read from the disk even after a context compaction?**
**A:** `CLAUDE.md`.

**Q3: How many checkpoints does Claude Code keep in its session memory, and what is the command to return to a previous state?**
**A:** It keeps up to 100 checkpoints. Use the `/rewind` command (or press `Esc` twice on an empty prompt) to access the restore menu.

**Q4: What is the difference between `acceptEdits` mode and `bypassPermissions` mode?**
**A:** `acceptEdits` allows Claude to edit files without asking but still prompts for bash commands. `bypassPermissions` allows all actions (edits and commands) without prompts and should only be used in fenced environments like CI or sandboxes.

**Q5: In a `SKILL.md` file, what key-value pair in the YAML frontmatter prevents Claude from automatically invoking the skill?**
**A:** `disable-model-invocation: true`.

**Q6: What is the primary purpose of a "Subagent" in Claude Code?**
**A:** To perform heavy exploration or research in a separate context window, returning only a summary to the main session to prevent "flooding the river" (context exhaustion).

**Q7: Which command allows a user to watch all active background sessions on a single screen?**
**A:** `agent view`.

**Q8: How does a `PreToolUse` hook signal that a tool call should be blocked while providing a reason to the agent?**
**A:** The hook script should `exit 2` and write the reason to `stderr`. Alternatively, it can `exit 0` and return a JSON object with `permissionDecision: "deny"`.

**Q9: What syntax is used within a custom command or skill to inject the live output of a shell command into the prompt?**
**A:** Use the `!` prefix followed by the command in backticks, e.g., `!`git diff HEAD``.

**Q10: What is the function of the `--worktree` flag?**
**A:** It allows the user to start a Claude session in a separate git worktree and branch, enabling parallel feature development without file collisions.

---

## Part 3: Essay Prompts for Deeper Exploration

**Prompt 1: The Evolution of Context Management**
Discuss the "Context River" analogy. Explain the process of "compaction" and why it is necessary for long-running sessions. In your essay, contrast the roles of `CLAUDE.md`, `/compact`, and `/clear` in maintaining an efficient "Museum of Memory."

**Prompt 2: Designing the Automated Workshop**
Analyze the integration of Claude Code into a CI/CD pipeline using the "Night Factory" framework. Detail how headless mode (`claude -p`), JSON output formats, and limited permission modes create a secure yet autonomous environment for code auditing and linting.

**Prompt 3: The Ethics of Agency and the "Iron Vault"**
Claude Code is described as an "agentic" tool. Explore the security implications of granting an AI the ability to run bash commands and edit files. Evaluate the safeguards provided by `settings.json`, sandbox environments, and the "human-in-the-loop" verification requirement.

---

## Part 4: Glossary of Important Terms

*   **Agentic Loop:** The cycle where Claude reads, thinks, runs a tool, observes the result, and thinks again until a goal is met.
*   **Checkpoints:** Snapshots taken before every tool use (up to 100) that allow a user to restore code or conversation states.
*   **Compaction:** The automatic or manual process of summarizing old conversation history to free up space in the context window.
*   **Headless Mode:** Running Claude Code without an interactive UI, typically in scripts or CI/CD pipelines using `claude -p`.
*   **Hooks:** Automated callbacks (like `PreToolUse` or `PostToolUse`) that run local scripts at specific points in the agentic loop.
*   **MCP (Model Context Protocol):** An open protocol used to connect Claude to external tools and data sources like GitHub, Notion, or Slack.
*   **Output Style:** A customizable instruction set (stored in `.claude/output-styles/`) that dictates how Claude should frame its responses (e.g., "terse," "learning," or "diagrams-first").
*   **Plan Mode:** A non-destructive mode where Claude drafts a proposed set of changes for user review before any files are modified or commands are run.
*   **Plugin:** A distribution package containing a bundle of skills, agents, hooks, and MCP servers.
*   **Skill:** A specific set of instructions or "chapbook" stored in a `SKILL.md` file that Claude loads into memory only when relevant to the task.
*   **Statusline:** A customizable information strip at the bottom of the terminal that displays real-time data like current model, branch, or context usage.
*   **Worktree:** A git feature utilized by Claude Code to create isolated environments for concurrent tasks on different branches.