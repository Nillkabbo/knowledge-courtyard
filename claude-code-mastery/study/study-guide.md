# Study Guide: The Terminal Craftsman (Claude Code Mastery)

This study guide provides a comprehensive synthesis of the "17 Doors" of Claude Code mastery. It explores the technical implementation, philosophical underpinnings, and architectural strategies required to transition from a basic user to a "Terminal Craftsman" or "Architect."

---

## Part 1: Key Concepts and Core Themes

The source material organizes Claude Code mastery into three primary evolutionary stages: **Operating (Doors 1-10)**, **Building (Doors 11-14)**, and **Architecting (Doors 15-17)**. These stages are supported by three fundamental pillars: **Context**, **Trust**, and **Verification**.

### 1. The Three Pillars of Mastery
*   **Context:** Managing what the agent "knows." This includes project-specific rules in `CLAUDE.md`, the "Context River" (session history), and offloading heavy tasks to subagents to keep the main session "clean."
*   **Trust:** Defining the agent's boundaries. This is managed through permission modes (`default`, `acceptEdits`, `plan`), specific `allow/deny` rules in `settings.json`, and using appropriate models for specific risks.
*   **Verification:** The human's responsibility to audit the agent. This involves reviewing diffs, running tests, checking logs in the "Night Factory" (headless mode), and using hooks to automate validation.

### 2. Model Selection (The Brothers and the Grandfather)
Matching the task to the specific model is critical for efficiency and cost-effectiveness.

| Model | Role | Ideal Use Case |
| :--- | :--- | :--- |
| **Haiku** | The Sprinter | Quick questions, typos, mechanical edits, formatting. |
| **Sonnet** | The Reliable Default | Everyday features, bugs, reviews, and tests. |
| **Opus** | The Heavy Lifter | Large refactors, gnarly debugging, high-stakes changes. |
| **Fable** | The Grandfather | Deepest reasoning for the hardest, longest-running tasks. |

### 3. The Lifecycle of a Session (The Context River)
The "Context River" represents the agentic loop: **Read → Think → Act → Observe → Repeat**. 
*   **Compaction:** When the context window fills, older conversations are summarized. However, the `CLAUDE.md` file is always re-read fresh from the disk.
*   **Management Commands:** 
    *   `/context`: View current token usage and accumulated history.
    *   `/compact`: Manually summarize old history to free space.
    *   `/clear`: Empty the "river" for a fresh start.
    *   `/rewind`: Return to a previous checkpoint (only captures file edits, not terminal commands).

### 4. Customization and Automation
*   **Hooks:** Callbacks that trigger at specific points (e.g., `PreToolUse`, `PostToolUse`). They run in the user's process, not the agent's context.
*   **Subagents:** Independent context windows for heavy lifting (searching, log analysis) that return only a summary to the main session.
*   **Custom Commands:** Markdown files in `.claude/commands/` that transform long prompts into single slash-commands using `$ARGUMENTS`.

---

## Part 2: Short-Answer Practice Questions

**Q1: What is the primary difference between `claude` and `claude -p`?**
*   **Answer:** `claude` starts an interactive, conversational session (the "Workshop"). `claude -p` is "Print Mode," used for one-off questions or scripts where the answer is printed and the session ends immediately.

**Q2: Where should project-specific build commands and coding styles be stored to ensure Claude remembers them every session?**
*   **Answer:** In a `CLAUDE.md` file (or `.claude/CLAUDE.md`) at the project root.

**Q3: Describe the "additive" nature of the ledger system.**
*   **Answer:** Configuration files are concatenated from broadest to narrowest: User-level (`~/.claude/CLAUDE.md`), then Project-level (`./CLAUDE.md`), then Sub-folder level. None erase the others; they all load together.

**Q4: In the context of permissions, what does `bypassPermissions` represent, and where should it be used?**
*   **Answer:** It is the "Red Envelope" or "Master Key" that bypasses all prompts. It should only be used in controlled, fenced environments like CI/CD, sandboxes, or containers—never as a default on a personal machine.

**Q5: How do "Hooks" (Door 7) interact with the agent's context?**
*   **Answer:** They do not. Hooks run in the user's process, keeping the "river" clean while enforcing rules (like running Prettier after an edit) outside the conversation.

**Q6: What is the "Contract" of a Hook (Door 11)?**
*   **Answer:** A hook receives a JSON object via `stdin`. It responds via `exit codes` (0 to continue, 2 to block) and can optionally provide a JSON object on `stdout` for fine-grained control (e.g., `permissionDecision`).

**Q7: What is a "Worktree" in Claude Code (Door 15), and why is it used?**
*   **Answer:** Using `claude --worktree <name>` creates a separate git checkout and branch. This allows multiple features to be worked on simultaneously without "edit collisions" in the same file space.

**Q8: What are the three layers of the "Locksmith's" power (Door 5)?**
*   **Answer:** Rules (`allow/deny` lists in settings), Modes (character of the session, like `plan` or `acceptEdits`), and Timing (when the agent asks for permission).

---

## Part 3: Essay Prompts for Deeper Exploration

1.  **The Metaphor of the River:** The source context uses the "Buriganga River" and "Farida the Ferrywoman" to explain context management. Analyze how "compaction" and "clearing" serve as vital safety mechanisms in an agentic loop. Why is it dangerous for an apprentice to "carry too much cargo"?
2.  **The Ethics of the "Night Factory":** Headless mode and the Agent SDK allow for autonomous operations. Discuss the "Nadir Bhai" philosophy: why is the "diary" (logging) and "limited trust" (fenced runners) more important in the Night Factory than in the Day Workshop?
3.  **From Craftsman to Architect:** Door 17 describes the transition to becoming an Architect. Compare the programmatic control offered by the `can_use_tool` callback in the SDK to the manual permission prompts in the CLI. How does this shift change the responsibility of the developer?
4.  **The "Bloated Ledger" Warning:** Rahela Khatoon warns against "fattening the ledger." Explain the technical consequences of a bloated `CLAUDE.md`. How does including "obvious" information (like basic API docs) actually degrade the agent's performance?

---

## Part 4: Glossary of Important Terms

| Term | Technical Definition | Metaphoric Context |
| :--- | :--- | :--- |
| **Agentic Loop** | The recursive process where Claude reads, thinks, acts, and observes results until a goal is met. | The "Voyage" on the River. |
| **CLAUDE.md** | A markdown file acting as a persistent project memory and system prompt extension. | Rahela’s Workshop Ledger. |
| **Compaction** | The automated summarization of older messages in the context window to save space. | Unloading the boat before it sinks. |
| **Headless Mode** | Running Claude Code via CLI (`-p`) or SDK without an interactive UI. | The Night Factory. |
| **Hooks** | Lifecycle callbacks (scripts) triggered by events like `PreToolUse` or `PostToolUse`. | Mahmud the Watchman’s Bell. |
| **MCP** | Model Context Protocol; a standard for connecting Claude to external tools (Notion, DBs). | Ayesha’s Heirloom Ring. |
| **Permission Mode** | Settings (`plan`, `acceptEdits`, etc.) that determine how often Claude asks for authorization. | Belal the Locksmith’s Keys. |
| **Plugin** | A shippable bundle containing skills, hooks, agents, and MCP server configs. | Mostafa’s Wholesale Box. |
| **Prompt Injection** | A security risk where hostile instructions are hidden in external files or web content. | "Letters" in Rubina’s Vault. |
| **Sandbox** | A restricted environment (filesystem/network) where the agent can operate safely. | The Fenced Yard. |
| **Skill** | A specific set of technical instructions/methods loaded only when needed. | Ayesha’s Chapbook. |
| **Subagent** | A secondary agent instance with its own context window, used for delegated tasks. | Rafiq the Contractor. |
| **Worktree** | A separate git checkout used by Claude to work on features in isolation. | Shirin’s Separate Kitchens. |