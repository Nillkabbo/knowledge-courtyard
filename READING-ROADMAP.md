# 🗺️ The Reading Road — পড়ার পথ

> A **dependency-ordered** reading path through the courtyard's 33 books — not the shelf order (Books 1–33), but the order in which concepts actually build on each other. Built from a structural audit of every chapter's topic and the author's own cross-book references.

**Scale:** 33 visible books · ~377 chapters · ≈250 hrs.
**Pace:** 1 chapter/day → ~11 months · 2/day → ~5.5 months.

The hub courtyard now has a **🛣️ Reading Road** tab that shows this path interactively. This file is the long-form reference.

---

## How this order was built

Two kinds of evidence, both read directly from the chapter content:

1. **Topic audit** — every `tech:` field in every `doors-*.js` file across all 30 books, so each book's actual subject matter (not just its title) is known.
2. **Author's cross-references** — the explicit `Book N` mentions baked into the prose, plus the "you learned X — now I say Y" narrative handoffs that open many chapters.

These form a real dependency graph. The order below is a **topological sort** of that graph, with three deliberate overrides of shelf order:

| Book | Shelf # | Reading # | Reason |
|---|---|---|---|
| Knowledge Craftsman (26) | 26 | 1 | Meta-learning must precede everything. |
| Seed of Learning (5) | 5 | 2 | Same. |
| Anatomy (8) | 8 | 10 | Five downstream books need it — keystone. |
| **Embeddings (18)** | 18 | 11 | **Hardest reorder.** RAG / Context / Multimodal all need vector search; narrative put it too late. |
| Tools & MCP (19) | 19 | 14 | Agents depend on tools — lifted before agents. |
| Evals (16) | 16 | 18 | "Evals before ship" — placed at the ship boundary. |
| Knowledge Web (28) | 28 | 28 | Confirmed last — references 14 other books. |

**Completion note:** 29 of 30 books are complete. `math-for-ml` (Book 30, not yet on the hub) targets 10 doors but only has 4 written — it is referenced inline as a primer where relevant, not as a numbered stop.

---

## Phase 0 — Learn How to Learn *(do this first; it compounds)*

The single highest-leverage move. These books roughly double the retention of every book that follows.

- [ ] 📖 **Book 26 — The Knowledge Craftsman** (10 ch) · Ebbinghaus, Adler's 4 reading levels, Zettelkasten, Feynman, Keshav 3-pass, second-brain CODE
- [ ] 🌱 **Book 5 — The Seed of Learning** (9 ch) · growth mindset, spaced repetition, active recall, sleep
- [ ] 🔮 **Book 25 — The Council of Deep Knowledge** (8 ch) · 20h vs 10,000h, Dunning-Kruger, feedback loops, metacognition

## Phase 1 — Mindset & North Star

- [ ] 🌱 **Book 21 — The Researcher's Mind** (10 ch) · curiosity, question-crafting, intellectual humility
- [ ] 🛡️ **Book 23 — The Irreplaceable Craftsman** (10 ch) · permanent vs perishable skills, systems thinking
- [ ] 🧠 **Book 24 — The Throne of the Mind** (10 ch) · psychology, biases, Cialdini, learned helplessness
- [ ] 🧠 **Book 32 — The Brain Mechanic's Codex** (15 ch) · brain hacks, habits, sleep, state regulation — the daily operating system
- [ ] 🪡 **Book 33 — The Loom of Reason** (10 ch) · mental models, logic, Bayes, first principles, Polya, Fermi — the reasoning toolkit before the technical phases

## Phase 2 — The Map & the Engineer's Craft

- [ ] 🤖 **Book 1 — Twenty-Seven Doors of AI Engineering** (27 ch) · read *inspectionally* — it's the flyover of all 13 deep-dives
- [ ] 🏛️ **Book 3 — The Court of the Grand Muhandis** (11 ch) · first principles, abstraction, debugging — needed before system design
- [ ] 🔥 **Book 7 — The Word Weaver's Forge** (10 ch) · Prompt & Context Engineering — most immediately useful skill

## Phase 3 — What an LLM Actually Is *(the keystone)*

> ⚠️ **Math primer first.** Before this phase, skim the `math-for-ml` doors that exist (vectors, matrices, eigenvalues, probability). Its later doors (calculus, chain rule, backprop) are not yet written — flag where that bites below.

- [ ] 🧠 **Book 8 — The LLM Anatomy** (10 ch) · tokenization, attention, transformers, RLHF · **the keystone — 5 downstream books depend on it**

## Phase 4 — Meaning, Context & Retrieval

- [ ] 📐 **Book 18 — The Geometry of Meaning** (10 ch) · embeddings, vector search · *(lifted from shelf #18 — RAG/context/multimodal all need it)*
- [ ] 📜 **Book 9 — The Canvas of Sight** (10 ch) · chunking, reranking, Lost-in-the-Middle
- [ ] 🌊 **Book 10 — The Well of Knowledge** (10 ch) · RAG mastery — needs embeddings + context

## Phase 5 — Make the Model Act

- [ ] 🔌 **Book 19 — The Tool Forge** (10 ch) · function calling, MCP · *(hard prereq for agents)*
- [ ] 🤖 **Book 12 — The Autonomous Mind** (10 ch) · ReAct, planning, multi-agent · *(built on tools)*

## Phase 6 — Harden & Go Deep

- [ ] 🛡️ **Book 13 — The Fortress Guard** (10 ch) · prompt injection, red-teaming, guardrails
- [ ] 🔧 **Book 11 — The Forge of Refinement** (10 ch) · LoRA/QLoRA, DPO/PPO · *(Door 5 leans on calculus/backprop — the missing half of `math-for-ml`. Backfill if needed.)*

## Phase 7 — Measure, Accelerate, Operate, Extend

- [ ] 📏 **Book 16 — The Measure** (10 ch) · LLM-as-judge, RAGAS, benchmarks · **read before shipping anything from Phase 6**
- [ ] ⚡ **Book 17 — The Forged Edge** (10 ch) · KV cache, quantization, speculative decoding · *(needs anatomy — attention)*
- [ ] ⚓ **Book 14 — The Control Tower** (10 ch) · vLLM, PagedAttention, monitoring
- [ ] 🌈 **Book 15 — The Five Senses** (10 ch) · ViT/CLIP, diffusion, VLMs · *(needs anatomy + embeddings + RAG)*

## Phase 8 — General Systems Engineering *(run in parallel with Phases 4–7)*

- [ ] 🏙️ **Book 4 — The City Builder's Codex** (20 ch) · CAP, consensus, replication, idempotency · *(needs engineer mindset from Book 3; otherwise independent of the AI chain)*

## Phase 9 — Slow Parallel Track *(run alongside Phases 2–7, ~3 chapters/week)*

- [ ] 🧮 **Book 2 — The Bazaar of Algorithms** (18 ch) · Big-O → graphs → DP · *(Pyodide live Python)*

## Phase 10 — Research Track *(if grad-school / research bound)*

- [ ] ✍️ **Book 27 — The Research Paper Craftsman** (10 ch) · IMRaD, Keshav, peer review · *(needs psychology 24 + knowledge-craftsman 26 — both read by now)*
- [ ] 🧭 **Book 22 — The Ocean of Computer Science** (20 ch) · survey of 10 CS domains · *(references 8 other books — last among deep-dives)*
- [ ] 🏔️ **Book 20 — The Research Pilgrimage** (10 ch) · PhD funding, SOP, cold-emailing · *(read when seriously considering grad school)*

## Phase 11 — Synthesis & Career *(the finale)*

- [ ] ⚔️ **Book 6 — The Arena of Trials** (8 ch) · resume, STAR, negotiation · *(read when job-hunting)*
- [ ] 🕸️ **Book 28 — The Knowledge Web** (10 ch) · **the capstone — references 14 other books; its whole purpose is connecting them. Read dead last.**

## Extras *(anytime)*

- [ ] 🚗 **Book 29 — The Michigan Driving Guide** (11 ch)

---

## One-line summary of the logic

> **Learning-skills → mindset → AI survey → LLM internals → embeddings/context → RAG → tools → agents → security/finetune → evals/optimize/ops/multimodal → systems → DSA → research → capstone.**

## Three rules of thumb

1. **Never read a deep-dive before Book 8 (Anatomy).** Fine-tuning and optimization are gibberish without it.
2. **Book 16 (Evals) before you ship.** Pair it with whichever Phase 6–7 book you're building from.
3. **Book 28 (Knowledge Web) is the finale.** Its entire point is connecting the other 28 — reading it early spoils the synthesis.

## Known gaps (as of audit)

- **`math-for-ml` (Book 30)** — targets 10 doors, has 4 (vectors, matrices, eigenvalues, probability). Missing: statistics, calculus, chain rule, backprop, optimization, synthesis. Not yet linked from the hub. Priority to finish before Phase 6 (Fine-tuning) is reached smoothly.
