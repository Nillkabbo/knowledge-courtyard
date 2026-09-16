# Terminal Craftsman: A Comprehensive Study Guide for Claude Code

This study guide is designed to provide a deep understanding of Claude Code, Anthropic’s agentic coding tool. It synthesizes the technical precision and metaphorical narratives of the "Terminal Craftsman" reference to help users master terminal-based AI interaction, project memory management, and advanced automation.

---

## Part 1: Core Concepts and Modules

### 1. Fundamentals and Installation
Claude Code is an agentic tool that understands codebases, writes code, executes git commands, and explains complex logic using natural language. 
*   **The "Hammer" (Terminal):** The primary interface.
*   **Installation:** Managed via Node.js (version 22+). 
    *   Command: `npm install -g @anthropic-ai/claude-code`
*   **Session Types:**
    *   **Interactive Session:** Started by typing `claude` in a project folder.
    *   **Print Mode:** Started with `claude -p "prompt"` for one-off tasks or scripts where the session does not remain open.
*   **Session Continuity:** Use `claude --continue` to return to the latest session or `claude --resume` to select from a list.

### 2. Project Memory: The Ledger (CLAUDE.md)
To ensure Claude remembers project-specific rules, build commands, and coding styles without being reminded every session, a `CLAUDE.md` file is used. It is loaded at the start of every session as a user message.

| Level | Location | Purpose |
| :--- | :--- | :--- |
| **Global/User** | `~/.claude/CLAUDE.md` | General personal preferences for all projects. |
| **Project Root** | `./CLAUDE.md` or `./.claude/CLAUDE.md` | Team-wide rules, build/test commands, and code styles. |
| **Local** | `./CLAUDE.local.md` | Individual habits/settings not committed to git. |
| **Sub-folder** | `path/to/folder/CLAUDE.md` | Specific rules for monorepos or modules. |

### 3. The Model Families
Claude Code utilizes different models based on the complexity and speed required for a task. Users can switch models mid-session using the `/model` command.

*   **Haiku:** For typos, formatting, and quick questions. High speed, low cost.
*   **Sonnet:** The dependable default for everyday features, bugs, tests, and reviews.
*   **Opus:** For high-stakes tasks, large refactors, and complex debugging.
*   **Fable:** The most capable model for the hardest, longest-running tasks.

### 4. Context Management and Compaction
As a session progresses, tool results and outputs fill the **Context River**. When the context window is full, the system performs **Compaction**, turning old conversations into summaries. 
*   **Checkpoints:** The system takes a checkpoint before every turn (up to 100). Use `/rewind` to return to a previous state.
*   **Manual Control:** 
    *   `/context`: View current token usage.
    *   `/compact`: Manually trigger compaction (can use `focus on [topic]`).
    *   `/clear`: Empty the context for a fresh start on a new task.

### 5. Permissions and Security
Trust is managed through permission modes and the `settings.json` file.
*   **Permission Modes:**
    *   `plan`: Read-only; Claude drafts a plan but cannot edit or run commands.
    *   `default`: Asks for permission for sensitive tasks.
    *   `acceptEdits`: Automatically accepts file edits but asks for terminal commands.
    *   `bypassPermissions`: Full automation (reserved for fenced environments/CI).
*   **Configuration:** Define `allow` or `deny` lists for specific Bash commands in `.claude/settings.json`.

### 6. Delegation and Extensions
*   **Subagents:** Independent agents that run in their own context windows to perform heavy research or demolition tasks without flooding the main session's memory.
*   **Hooks:** Callbacks that trigger at specific points (e.g., `PreToolUse`, `PostToolUse`). Useful for auto-formatting code after an edit.
*   **MCP (Model Context Protocol):** Connects Claude to external tools like Notion, GitHub, or Databases.
*   **Skills:** Reusable instructions or "chapbooks" stored in `.claude/skills/`. They use **Progressive Disclosure**, meaning the full content is only loaded when the skill is invoked.

---

## Part 2: Short-Answer Practice Questions

1.  **What is the command to start a one-off task in "print mode" where the answer is simply printed to the terminal?**
    *   *Answer:* `claude -p "your prompt"`
2.  **Where should you store project-wide build and test commands so Claude knows them in every session?**
    *   *Answer:* In the `CLAUDE.md` file at the project root.
3.  **Which model is recommended for large-scale, high-risk refactoring?**
    *   *Answer:* Opus (or Fable for the most difficult long-running tasks).
4.  **What does the `/compact` command do when used with a `focus` parameter?**
    *   *Answer:* It compresses the conversation into a summary while prioritizing the preservation of information related to the specified focus.
5.  **What is the difference between `/rewind` and standard Git commands?**
    *   *Answer:* `/rewind` restores file edits and conversation history within the Claude session (checkpoints), but it cannot undo Bash-command changes (like `rm` or `mv`) or remote events; Git is required for full version control.
6.  **How do you switch the intelligence level or reasoning depth for a task?**
    *   *Answer:* Use the `/effort` command (e.g., `/effort xhigh`).
7.  **Which configuration file is used to permanently allow or deny specific Bash commands?**
    *   *Answer:* `settings.json` (or `.claude/settings.json`).
8.  **What is the primary benefit of using a subagent for a codebase search?**
    *   *Answer:* It keeps the main session's context window clear by performing the search in a separate context and returning only a summary.
9.  **How do you prevent a Skill from being automatically triggered by Claude's reasoning?**
    *   *Answer:* Set `disable-model-invocation: true` in the SKILL.md frontmatter.
10. **What command allows you to see a live breakdown of token usage in your current session?**
    *   *Answer:* `/context` (or `/usage` for a breakdown by model and cost).

---

## Part 3: Essay Questions for Deeper Exploration

1.  **The Architecture of Memory:** Compare and contrast the roles of `CLAUDE.md`, the context window, and checkpoints in a long-term development project. How does a "Terminal Craftsman" balance these three to prevent AI hallucinations and "forgetting"?
2.  **Measured Trust in Automation:** Discuss the security implications of `permission-mode bypassPermissions`. In what scenarios is it appropriate to use, and what "fenced environments" should be established to prevent accidental system demolition?
3.  **The Hierarchy of Extensions:** Explain the functional differences between MCP Servers, Skills, and Plugins. If you were building a suite of tools for a team, how would you decide which functionality belongs in a Skill versus an MCP integration?
4.  **Agentic Loops and Verification:** Claude Code operates in an "Agentic Loop" (Read -> Think -> Act -> Observe). Analyze why human verification (using `plan` mode or `/verify`) remains a critical "pillar" of the workflow despite the tool's autonomy.
5.  **Multi-Agent Orchestration:** Explore the use of `claude --worktree` and `/bg` (background) sessions. How do these tools enable a developer to manage "Parallel Kitchens," and what are the best practices for merging these independent workstreams without collision?

---

## Part 4: Glossary of Important Terms

*   **Agentic Loop:** The continuous cycle where the AI reads the environment, plans an action, executes a tool, and observes the result until the goal is met.
*   **BypassPermissions:** A high-risk mode that allows Claude to execute all commands and edits without human intervention.
*   **Checkpoints:** Snapshots of the file state and conversation taken before each prompt, allowing the user to "undo" changes.
*   **Compaction:** The process of summarizing the context window to make room for new tokens once the limit is reached.
*   **Headless Mode:** Running Claude Code without an interactive UI, typically in CI/CD pipelines (via `claude -p`).
*   **Hooks:** Automated scripts that run at specific lifecycle events, such as `PreToolUse` (before a command) or `PostToolUse` (after an edit).
*   **MCP (Model Context Protocol):** An open protocol used to connect the AI agent to external data sources and tools.
*   **Print Mode (`-p`):** A non-interactive mode where Claude provides a single response and exits.
*   **Progressive Disclosure:** A design principle used in Skills where only the summary is loaded initially, and the full text is only "disclosed" if the skill is actually used.
*   **Subagent:** A secondary agent spawned to handle a specific, often data-heavy task in a separate memory space.
*   **Worktree:** A Git feature used by Claude to create separate physical directories for different branches, preventing file conflicts during parallel task execution.