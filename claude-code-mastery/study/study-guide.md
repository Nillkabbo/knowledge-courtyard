# Claude Code: Comprehensive Study Guide

This study guide synthesizes the technical framework, operational strategies, and architectural principles of Claude Code, as detailed in the "Terminal Craftsman" series. It covers the system's foundational tools, memory management, security protocols, and advanced automation features.

---

## Part 1: Core Concepts and Architectures

### The Three Pillars of Mastery
The effectiveness of Claude Code relies on three central pillars:
1.  **Context:** Managing what the agent "knows" through documentation (CLAUDE.md), session management (`/clear`), and delegation (Subagents).
2.  **Trust:** Calibrating the agent's autonomy through permissions, operational modes (`plan`, `acceptEdits`), and environment isolation (sandboxing).
3.  **Verification:** Validating every output through diff reviews, test execution, and final proofs (hooks and `/verify`).

### The Model Hierarchy
Different tasks require different levels of intelligence and speed. Claude Code allows users to switch between models mid-session using the `/model` command.

| Model | Primary Use Case | Key Characteristics |
| :--- | :--- | :--- |
| **Sonnet** | Daily operations | Default model; reliable for features, bugs, and reviews. |
| **Opus** | High-stakes tasks | Powerful; used for large refactors and complex debugging. |
| **Haiku** | Speed and efficiency | Fastest; ideal for typos, formatting, and quick questions. |
| **Fable** | Deep reasoning | Most capable for hardest, long-running architectural tasks. |

### Memory and Context Management
Claude Code operates in an **Agentic Loop** (Think → Act → Observe → Think). Every word in this loop consumes the context window. 
*   **CLAUDE.md:** The "Workshop Ledger." Located at the project root, it stores persistent rules (build commands, code styles). It is re-read from disk even after context compaction.
*   **Compaction:** When the context "river" fills, Claude summarizes older parts of the conversation to save space. 
*   **Checkpoints:** The system takes snapshots before every turn (up to 100). Users can return to these using `/rewind`.

---

## Part 2: Configuration and Customization

### Operational Modes
Modes determine the level of permission Claude has to execute commands and edit files.

*   **Plan Mode:** (Toggle via `Shift+Tab`) Claude only reads and proposes a plan; it cannot edit or run commands.
*   **Default Mode:** Claude asks for permission before sensitive actions.
*   **AcceptEdits Mode:** Claude edits files freely but asks before running terminal commands.
*   **BypassPermissions Mode:** Full autonomy. Strictly recommended for fenced environments (CI/sandboxes).

### Hooks and Automation
Hooks are callbacks triggered at specific points in the agentic loop, allowing for process-level automation.
*   **PreToolUse:** Can block a tool call (e.g., preventing `rm -rf`).
*   **PostToolUse:** Runs after a tool completes (e.g., automatically running a linter after a file write).
*   **UserPromptSubmit:** Injects context or notes before the prompt is processed.

### Skills and Plugins
*   **Skills (`SKILL.md`):** Reusable instructions for specific workflows (e.g., a deployment guide). Unlike `CLAUDE.md`, the full body of a skill is only loaded into context when explicitly invoked.
*   **MCP (Model Context Protocol):** Allows Claude to connect to external services like Notion, GitHub, or Postgres databases.
*   **Plugins:** Bundles that package skills, agents, hooks, and MCP servers into a single distributable unit.

---

## Part 3: Short-Answer Practice Questions

**Q1: What is the primary difference between a "one-off task" and an "interactive session" in Claude Code?**
**A:** An interactive session is started with the `claude` command, allowing for a continuous conversation. A one-off task uses `claude -p "prompt"`, which prints the answer to the terminal and closes the session immediately.

**Q2: Where should project-specific build and test commands be stored so Claude remembers them in every session?**
**A:** They should be stored in a `CLAUDE.md` file at the project root (or within a `.claude/` directory).

**Q3: How does the `/compact` command assist in long-running sessions?**
**A:** It manually triggers the summarization of the current conversation history to free up space in the context window, preventing the "forgetting" of earlier instructions.

**Q4: In the context of security, what is the "red envelope" or `bypassPermissions` mode?**
**A:** It is a mode that allows Claude to skip all permission prompts. It should only be used in controlled, fenced environments like CI runners or sandboxes, as it poses a high risk to the local system if used improperly.

**Q5: What is the purpose of a "Subagent" (e.g., using `.claude/agents/*.md`)?**
**A:** Subagents handle heavy exploration or research tasks in separate context windows. They return only a summary to the main session, keeping the primary conversation "river" clean and focused.

**Q6: What command is used to see the current token usage and cost for a session?**
**A:** The `/usage` command.

**Q7: How can you inject live data (like the output of a shell command) into a Skill?**
**A:** By using the `!command` syntax (e.g., `!`git diff HEAD``) within the `SKILL.md` file.

**Q8: What is the purpose of the `claude --worktree` command?**
**A:** It allows for parallel work by opening a Claude session in a separate Git worktree and branch, preventing file edit collisions when working on multiple features simultaneously.

---

## Part 4: Essay Prompts for Deeper Exploration

1.  **The Evolution of the Developer-Agent Relationship:** Analyze the transition from "Typist" to "Architect" when using Claude Code. How do tools like `Plan Mode`, `CLAUDE.md`, and `Subagents` redefine the developer's role from writing code to designing the constraints and verification steps of a workshop?
2.  **Context as a Finite Resource:** Discuss the "River and Boat" metaphor for context management. Evaluate the trade-offs between a "bloated" `CLAUDE.md` and the use of "on-demand" `SKILL.md` files. Why is progressive disclosure essential for maintaining agent performance in large codebases?
3.  **Security in Agentic Systems:** Explore the implications of the "Throne" and "Keyring" concepts. How do the permission levels and the `can_use_tool` callback in the Agent SDK provide a framework for "measured trust"? Discuss the necessity of sandboxing when using `headless` modes in CI/CD pipelines.
4.  **The Lifecycle of a Professional Feature:** Outline the ideal workflow for developing a feature using Claude Code, from the initial `/init` of the ledger to the use of `gh pr create --fill` and the final `/verify`. How does this workflow ensure "Git history as the ultimate archive"?

---

## Part 5: Glossary of Important Terms

| Term | Definition |
| :--- | :--- |
| **Agentic Loop** | The repetitive cycle where the AI reads context, thinks, acts using a tool, observes the result, and repeats until the goal is met. |
| **Compaction** | The process of summarizing old dialogue in a session to fit within the model's context window limits. |
| **Context Window** | The total amount of information (tokens) the model can "see" and process at one time. |
| **Headless Mode** | Running Claude Code without an interactive UI, typically via `claude -p` for automation and CI/CD. |
| **Hook** | An automated callback (script or command) triggered by specific agent events like `PreToolUse` or `Stop`. |
| **MCP (Model Context Protocol)** | A standardized protocol allowing the agent to interface with external databases and applications. |
| **Permission Mode** | A setting (`plan`, `default`, `acceptEdits`, `bypass`) that dictates the level of human intervention required for agent actions. |
| **Print Mode (`-p`)** | A non-interactive execution of Claude that outputs the result directly to the terminal. |
| **Skill** | A markdown file (`SKILL.md`) containing specialized instructions and patterns that Claude loads only when needed. |
| **Statusline** | A customizable information bar at the bottom of the terminal session that can display model type, branch name, or context usage. |
| **Subagent** | A delegated Claude instance that runs in its own context window to perform side-tasks or research. |
| **Worktree** | A Git feature used by Claude to create separate physical directories for different branches, enabling collision-free parallel development. |