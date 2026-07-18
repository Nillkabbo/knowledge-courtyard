# জ্ঞানের প্রাঙ্গণ — The Learning Courtyard

An interactive bilingual (Bengali/English) learning library built with the Seven Doors Method. **29 books, 305 chapters, 30,500 XP** — covering AI engineering, data structures, system design, LLM deep dives, research craft, career mindset, and more.

## 📚 The 29 Books

### 🏛️ Core Six (Books 1–6) — the foundation

| # | Book | Topic | Chapters |
|---|------|-------|----------|
| 🤖 1 | **Twenty-Seven Doors of AI Engineering** | LLMs, prompting, RAG, embeddings, fine-tuning, agents, MCP, multimodal | 27 |
| 🧮 2 | **The Bazaar of Algorithms** | Data structures & algorithms with live Python (Pyodide) | 11 |
| 🏛️ 3 | **Court of the Grand Muhandis** | Engineer mindset: Hello World → Senior (incl. estimation) | 11 |
| 🏙️ 4 | **The City Builder's Codex** | System design: load balancing, caching, databases, CDN, indexing, CAP, resilience | 10 |
| 🌱 5 | **The Seed of Learning** | Meta-learning: how to learn (growth mindset, spaced repetition, Feynman, sleep) | 9 |
| ⚔️ 6 | **The Arena of Trials** | Interview preparation: resume, STAR, coding patterns, negotiation | 8 |

### 🧬 AI Deep Dives (Books 7–19) — 13 books on modern LLM engineering

| # | Book | Topic |
|---|------|-------|
| 🔥 7 | **The Word Weaver's Forge** | Prompt & Context Engineering (incl. prompt caching) |
| 🧠 8 | **The Anatomy Chamber** | LLM Architecture (transformers, attention, MoE) |
| 📜 9 | **The Canvas Manager's Table** | Context Engineering (Lost in the Middle, chunking, reranking) |
| 🌊 10 | **The Infinite Well** | RAG Mastery (Late Chunking, Contextual Retrieval, Agentic RAG) |
| 🔧 11 | **The Perfectionist's Forge** | Fine-tuning (LoRA/QLoRA, GRPO, DoRA, DPO/PPO) |
| 🤖 12 | **The Agent's Genesis** | AI Agents (ReAct, planning, multi-agent, code agents) |
| 🛡️ 13 | **The Fortress of Guardrails** | LLM Security (injection, red-teaming, NeMo/Guardrails AI) |
| ⚓ 14 | **The LLMOps Harbor** | LLMOps (vLLM, PagedAttention, monitoring, cost optimization) |
| 🌈 15 | **The Synesthete's Atelier** | Multimodal AI (ViT/CLIP, diffusion, VLMs, video) |
| 📏 16 | **The Measurement Chamber** | LLM Evals (LLM-as-judge, RAGAS, benchmarks, contamination) |
| ⚡ 17 | **The Optimization Forge** | Inference Optimization (KV cache, quantization, speculative decoding) |
| 📐 18 | **The Geometry Chamber** | Embeddings (BGE, OpenAI, Matryoshka, vector search) |
| 🔌 19 | **The Connection Chamber** | Tools & MCP (function calling, Model Context Protocol) |

### 🌳 Growth & Research (Books 20–28) — 9 books on research, career, and craft

| # | Book | Topic |
|---|------|-------|
| 🏔️ 20 | **The Pilgrimage of Research** | PhD Journey (funding, SOP, cold-emailing, life) |
| 🌱 21 | **The First Question** | Researcher Mindset (curiosity, Bloom's, persistence) |
| 🧭 22 | **The CS Archipelago** | CS Domain Ocean (AI/ML, systems, security, theory, quantum) |
| 🛡️ 23 | **The Irreplaceable Craftsman** | Career & AI obsolescence (permanent vs perishable skills) |
| 🧠 24 | **The Mirror of the Mind** | Human Psychology (Cialdini, learned helplessness, biases) |
| 🔮 25 | **The Council of Deep Knowledge** | The Art of Deep Learning (meta-learning, 20h/10000h, feedback) |
| 📖 26 | **The Knowledge Craftsman** | Reading/Thinking/Writing (Zettelkasten, Feynman, Adler) |
| ✍️ 27 | **The Paper Architect** | Research Paper Read/Write (IMRaD, Keshav, peer review) |
| 🕸️ 28 | **The Knowledge Web** | Knowledge Connection Capstone (connects all books) |

### 🚗 Extras (Book 29)

| # | Book | Topic |
|---|------|-------|
| 🚗 29 | **The Michigan Driving Guide** | Complete MI driver's handbook (GDL, road rules, OWI) |

## 🎮 Play

Visit the live site: **[https://nillkabbo.github.io/knowledge-courtyard/](https://nillkabbo.github.io/knowledge-courtyard/)**

Or run locally:
```bash
cd knowledge-courtyard
python3 -m http.server 8740
# Open http://localhost:8740/
```

## ✨ Features

- **Category filter tabs** — filter the courtyard by Core Six / AI Deep Dives / Growth & Research / Extras
- **Seven Doors Method** — each concept taught through story, metaphor, sacred analogue, and recall challenge
- **Bilingual** — Bengali primary, English secondary throughout
- **Progressive unlocking** — chapters unlock sequentially with XP and rank progression
- **Cheat sheets** — collect one-line secrets from each chapter
- **Live Python** — DSA book includes Pyodide-powered code execution (run real Python in-browser)
- **Synthesized audio** — Web Audio API sound effects, no audio files
- **Particle effects** — CSS/Canvas animations
- **Progress saving** — localStorage persistence (per-book, survives reloads)
- **Zero dependencies** — pure HTML/CSS/JS, no build step, no frameworks

## 🏗️ Architecture

Each book is a self-contained multi-file project:

```
book-folder/
├── index.html      ← Structure & screens
├── style.css       ← All styling
├── engine.js       ← Game logic: XP, ranks, particles, sound, save/load
├── doors-1-N.js    ← Story content (split for atomic writes)
└── doors-N-M.js    ← More story content
```

The root `index.html` is the hub — the courtyard with filter tabs that connects all 29 books.

## 📖 Pedagogy — the Seven Doors Method

Each chapter teaches one concept through 11 moves that make it permanent:

1. **Embody, don't define** — concepts shown through story, not listed
2. **Isomorphic metaphor** — each concept maps to a physical analogy
3. **Sacred analogue** — Islamic/cultural connections that are structurally isomorphic
4. **Teacher as person** — named characters with physical signatures
5. **Failure-first** — show the wrong way before the right way
6. **Sensory immersion** — smell, sound, touch, not just sight
7. **Compress to one line** — each chapter ends with a memorable secret
8. **Cross-door synthesis** — later chapters reference earlier teachers
9. **Recall challenge** — bilingual Q&A to test retention
10. **Senior lesson** — concrete, actionable next step
11. **Spirit word** — a single Arabic/Bengali concept anchoring the lesson

## License

MIT — free to learn, share, and build upon.
