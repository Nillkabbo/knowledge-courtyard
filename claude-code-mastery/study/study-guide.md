# Claude Code Mastery: The Terminal Craftsman Study Guide

This study guide provides a comprehensive overview of Claude Code, Anthropic’s agentic coding tool, based on the "Terminal Craftsman" series. It synthesizes technical precision with the narrative frameworks used to explain project memory, model selection, context management, and automation.

---

## I. Core Concepts and Architecture

The mastery of Claude Code is built upon three fundamental pillars: **Context, Trust, and Verification**. Understanding how these pillars interact allows a developer to design a robust "workshop" rather than merely typing prompts.

### 1. The Context Pillar (The Ledger and the River)
*   **The Ledger (`CLAUDE.md`):** This file acts as the project’s memory. It contains build commands, code styles, and architectural decisions. It is loaded at the start of every session as a user message and survives "compaction."
*   **The River (Context Window):** Every interaction (files read, command outputs, user prompts) flows into a context window. When this window fills, Claude performs "compaction," summarizing older parts of the conversation to make room for new data.

### 2. The Trust Pillar (The Keyring and Modes)
*   **Permissions:** Managed via `settings.json`, permissions define what Claude can do automatically (`allow`) and what it must never do (`deny`).
*   **Permission Modes:** These define the session's character:
    *   `plan`: Read-only; Claude drafts a plan but touches no files.
    *   `default`: Claude asks before every sensitive action.
    *   `acceptEdits`: Files can be edited without asking; commands still require permission.
    *   `bypassPermissions`: Full automation, intended only for fenced environments like CI/CD or sandboxes.

### 3. The Verification Pillar (The Watchman and the Table)
*   **Hooks:** These are lifecycle callbacks (e.g., `PreToolUse`, `PostToolUse`) that allow for automated checks, such as running a linter after every edit.
*   **Drafting Table (Plan Mode):** For complex tasks, the developer uses Plan Mode to review Claude’s logic before any code is executed.
*   **Git Integration:** Claude works alongside Git, creating commits and PRs. The "history" in the repository is the final source of truth.

---

## II. Technical Frameworks and Model Selection

### Model Families
Claude Code utilizes a family of models, each suited to specific tasks. Matching the task to the right model is essential for efficiency and cost-management.

| Model | Characteristic | Best Use Case |
| :--- | :--- | :--- |
| **Haiku** | Light and Fast | Typos, formatting, quick one-off questions. |
| **Sonnet** | Dependable Default | Everyday features, bugs, tests, and reviews. |
| **Opus** | Heavy/Bull-Strong | Large risky refactors, gnarly debugging. |
| **Fable** | Deepest Thinker | Hardest, longest-running architectural tasks. |

### Extension Mechanisms
There are three primary ways to extend Claude’s capabilities:

1.  **MCP (Model Context Protocol):** Connects Claude to external worlds like Notion, GitHub, or Postgres databases.
2.  **Skills (`SKILL.md`):** Permanent instructions for recurring tasks (e.g., deployment). Unlike the ledger, a skill’s full body is only loaded when invoked, saving context space.
3.  **Plugins:** A distribution unit that bundles skills, agents, hooks, and MCP servers into a single package for easy installation.

---

## III. Short-Answer Practice Questions

**Q1: What is the one-word command to start an interactive Claude Code session, and what flag is used for one-off tasks?**
**A:** Use `claude` to start an interactive session; use `claude -p` (print mode) for one-off tasks.

**Q2: In which file and location should you write rules that you want Claude to remember across all projects on your machine?**
**A:** Write them in the global user ledger at `~/.claude/CLAUDE.md`.

**Q3: If Claude begins to forget earlier parts of a long conversation, what command can you use to see the current token usage and context breakdown?**
**A:** Use the `/context` command.

**Q4: Which command allows you to jump back to a previous "checkpoint" in the session to undo a wrong turn?**
**A:** Use the `/rewind` command (or press Esc twice on an empty prompt).

**Q5: How do you define a custom slash command for your project?**
**A:** Create a Markdown file in `.claude/commands/[command-name].md`. The filename becomes the command (e.g., `/fix-issue`).

**Q6: What is the purpose of the `can_use_tool` callback in the Agent SDK?**
**A:** It acts as a "hand-lock," calling a custom function before every tool use to determine if the action is permitted (returning `true` or `false`).

**Q7: Which flag allows you to run a Claude session in a separate Git worktree to avoid collisions with your current branch?**
**A:** Use `claude --worktree [name]`.

**Q8: In a hook script, what exit code should be returned to block a tool call and provide a reason to Claude?**
**A:** Return `exit 2` and write the reason to `stderr`.

---

## IV. Essay Questions for Deeper Exploration

1.  **The Evolution of the Apprentice:** Discuss how the narrative of "Hasu the Mistri" and his apprentices reflects the transition from a manual coder to an "Information Architect" using Claude Code. How does the concept of "holding the hammer" change when the tool is an agentic AI?
2.  **Memory Management Strategies:** Compare and contrast the use of `CLAUDE.md`, `SKILL.md`, and Subagents. Under what specific architectural conditions would you choose to move information from the main project ledger into a dedicated Subagent?
3.  **The Ethics of Automated Trust:** Analyze the risks associated with `bypassPermissions` mode. How does the "Night Factory" (headless mode/CI) maintain security and accountability when a human is not present to approve individual actions?
4.  **Verification vs. Automation:** In the context of Door 20 (The Planner's Drafting Table), argue for the importance of human intervention in the AI workflow. Why is "Plan Mode" considered a pillar of mastery even as the AI becomes more capable?

---

## V. Glossary of Important Terms

*   **Agentic Loop:** The cycle where Claude reads, thinks, runs a tool, observes the result, and repeats until a goal is met.
*   **Compaction:** The process of summarizing the "Context River" once it reaches its limit, turning detailed conversation into a summary-ticket to save space.
*   **Headless Mode:** Running Claude without an interactive UI (using `claude -p`), typically for scripts or CI/CD pipelines.
*   **Hooks:** Automated callbacks triggered at specific lifecycle points, such as `PreToolUse` (before a tool runs) or `Stop` (when the agent finishes).
*   **MCP (Model Context Protocol):** An open-protocol "ring" or connection that allows Claude to securely access external data sources and tools.
*   **Print Mode (`-p`):** A non-interactive mode where Claude provides a single answer and exits, useful for piping data into other terminal tools.
*   **Progressive Disclosure:** A strategy used in `SKILL.md` where only the description is loaded initially, and the full instructions are only fetched when the skill is actually invoked.
*   **Subagent:** A "contractor" that runs in its own separate context window to perform heavy research or exploration, returning only a summary to the main session to keep the primary "river" clean.
*   **Worktree:** A Git feature used by Claude to create a separate physical folder for a specific task, allowing parallel work on different features without file conflicts.