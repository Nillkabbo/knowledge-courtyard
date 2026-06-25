# জ্ঞানের প্রাঙ্গণ — The Learning Courtyard

An interactive bilingual (Bengali/English) learning library built with the Seven Doors Method. Six books, 54 chapters, 5400 XP — covering AI engineering, data structures, engineering mindset, system design, meta-learning, and interview preparation.

## 📚 The Six Books

| # | Book | Topic | Chapters |
|---|------|-------|----------|
| 🤖 1 | **Twelve Doors of AI Engineering** (কৃত্রিম বুদ্ধিমত্তার বারোটি দরজা) | LLMs, prompting, RAG, embeddings, fine-tuning, agents, multimodal | 12 |
| 🧮 2 | **The Bazaar of Algorithms** (অ্যালগরিদমের বাজার) | Data structures & algorithms with live Python (Pyodide) | 8 |
| 🏛️ 3 | **Court of the Grand Muhandis** (মহাকারিগরের দরবার) | Engineer mindset: Hello World → Senior | 10 |
| 🏙️ 4 | **The City Builder's Codex** (নগরী নির্মাণের দস্তাবেজ) | System design: load balancing, caching, databases, CAP, resilience | 8 |
| 🌱 5 | **The Seed of Learning** (শিক্ষার বীজ) | Meta-learning: how to learn (growth mindset, spaced repetition, Feynman) | 8 |
| ⚔️ 6 | **The Arena of Trials** (পরীক্ষার ময়দান) | Interview preparation: resume, STAR, coding patterns, negotiation | 8 |

## 🎮 Play

Visit the live site: **[https://nillkabbo.github.io/knowledge-courtyard/](https://nillkabbo.github.io/knowledge-courtyard/)**

Or run locally:
```bash
cd knowledge-courtyard
python3 -m http.server 8740
# Open http://localhost:8740/
```

## ✨ Features

- **Seven Doors Method** — each concept taught through story, metaphor, sacred analogue, and recall challenge
- **Bilingual** — Bengali primary, English secondary
- **Progressive unlocking** — chapters unlock sequentially with XP and rank progression
- **Cheat sheets** — collect one-line secrets from each chapter
- **Synthesized audio** — Web Audio API sound effects, no audio files
- **Particle effects** — CSS/Canvas animations
- **Progress saving** — localStorage persistence
- **Live Python** — DSA book includes Pyodide-powered code execution
- **Zero dependencies** — pure HTML/CSS/JS, no build step, no frameworks

## 🏗️ Architecture

Each book is a self-contained multi-file project:

```
game-folder/
├── index.html      ← Structure & screens
├── style.css       ← All styling
├── engine.js       ← Game logic: XP, ranks, particles, sound, save/load
├── doors-1-N.js    ← Story content (split for atomic writes)
└── doors-N-M.js    ← More story content
```

The root `index.html` is the hub — the courtyard that connects all six books.

## 📖 Pedagogy

Built on the **Seven Doors Method** — 11 moves for making concepts permanent:

1. **Embody, don't define** — concepts are shown through story, not listed
2. **Isomorphic metaphor** — each concept maps to a physical analogy
3. **Sacred analogue** — Islamic/cultural connections that are structurally isomorphic
4. **Teacher as person** — named characters with physical signatures
5. **Failure-first** — show the wrong way before the right way
6. **Sensory immersion** — smell, sound, touch, not just sight
7. **Compress to one line** — each chapter ends with a memorable secret
8. **Cross-door synthesis** — later chapters reference earlier teachers

## License

MIT — free to learn, share, and build upon.
