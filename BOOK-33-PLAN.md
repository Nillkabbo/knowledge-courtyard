# Hermes Build Plan — Book 33: The Loom of Reason (যুক্তির তাঁত)

**Tag:** Book 33 · Critical Thinking & Problem Solving Deep Dive
**Folder:** `clear-thinking` · **Icon:** 🪡 · **Category:** `growth` · **Color:** `game-33` · **Status:** `live`
**Doors:** 10 · Files: `index.html`, `style.css`, `engine.js`, `doors-1-5.js`, `doors-6-10.js`

## Why this book (from library audit)

The growth track covers habits & brain physiology (Book 32), psychological defense (24), learning technique (5, 25, 26), and researcher mindset (21) — but "critical thinking" appears in exactly ONE door in the whole 32-book library (Book 21, Door 4). There is no coverage of mental models, formal logic/fallacies, Bayesian reasoning, decision-making, or systematic problem solving. Book 33 fills that hole and completes the mind trilogy: **24 protects the mind · 32 maintains the brain · 33 sharpens the thinking.**

## Non-negotiable format conventions (match sibling books EXACTLY)

Study `researcher-mind/` and `mind-mechanic/` before writing — copy their structure.

1. **Language:** Bilingual. Story prose primarily in Bengali (বাংলা) with English technical terms inline. Every door has English `subtitle`, `tech`, `qen`, `aen` fields.
2. **Door object schema** (each `doors.push({...})` in `doors-*.js`, shared global `doors` array across files):
   - `num`, `icon`, `color` (hex), `name` (Bengali chamber name), `subtitle` (English), `tech` (the actual concept taught)
   - `spirit`: a virtue word (Bengali/Arabic-flavored, e.g. "ইনসাফ — ন্যায়পরায়ণতা") tied to the door's lesson
   - `secret`: 3–5 sentence Bengali distillation of the core insight, ending by naming the spirit word
   - `recall`: `{q, qen, a, aen}` — one active-recall question + answer, both languages
   - `story`: HTML string. Opens with `<p class="scene-setting">`. A named craftsman/guide character teaches through narrative scenes (siblings use e.g. "কারিগর সাবরিনা"). Concrete examples, dialogue, worked demonstrations — not lecture prose. ~800–1500 words per door.
3. **engine.js / style.css / index.html:** copy from `researcher-mind/` (10-door book), update title, door-file script tags, and book number. Do not invent a new engine.
4. **Cross-references:** weave explicit "Book N" callbacks into the prose (this library's signature move). Required links: Book 21 (critical thinking door — this book expands it), Book 24 (biases — 33 is the offensive counterpart to 24's defense), Book 3 (first principles), Book 26 (Feynman/writing as thinking), Book 8/16 (use an AI-evaluation example at least once), Book 30 (probability primer, before the Bayes door).

## The 10 Doors

| # | tech | Core content |
|---|------|--------------|
| 1 | The Latticework of Mental Models | Munger's latticework; why one model = a man with a hammer; map vs territory; inventory of ~10 starter models |
| 2 | Logic & the Structure of Argument | Deduction vs induction vs abduction; premises/validity/soundness; syllogisms; spotting hidden premises |
| 3 | The Gallery of Fallacies | Ad hominem, strawman, false dilemma, slippery slope, motivated reasoning, Goodhart's law; steelmanning as antidote (link Book 24's bias list — fallacies are biases spoken aloud) |
| 4 | Bayesian Thinking | Priors, evidence, updating; base-rate neglect; medical-test worked example; "strong opinions, weakly held" (link Book 30 probability door) |
| 5 | First Principles & Inversion | Reasoning from ground truth vs analogy (link Book 3); Jacobi's "invert, always invert"; premortems; via negativa |
| 6 | Polya's How to Solve It | Understand → plan → execute → look back; problem restatement; working backwards; solving a smaller problem first — one full worked example |
| 7 | Fermi Estimation & Orders of Magnitude | Decomposition, bounding, sanity checks; estimating without data; calibration ("how often are your 90% guesses right?") |
| 8 | Decision-Making Under Uncertainty | Expected value; reversible vs irreversible (one-way/two-way doors); satisficing vs maximizing; regret minimization; decision journals |
| 9 | Second-Order Thinking & Systems | "And then what?"; feedback loops, incentives, unintended consequences (cobra effect); link Book 4 systems thinking + Book 23 |
| 10 | The Weaver's Loom — Synthesis | All 9 threads woven into one deliberate-thinking protocol; the character solves one hard real-life problem using every door; closes the 24–32–33 trilogy explicitly |

## Integration checklist (after doors are written)

1. Add entry to `books.json` → `books` array: `{ "n": 33, "folder": "clear-thinking", "title_en": "The Loom of Reason", "title_bn": "যুক্তির তাঁত", "icon": "🪡", "category": "growth", "color": "game-33", "tag": "Book 33 · Critical Thinking & Problem Solving Deep Dive", "status": "live" }`
2. Add a hand-written bilingual card for it in root `index.html` (copy a growth-card block, e.g. Book 21's).
3. Roadmap: add 33 to `books.json` roadmap **Phase 1** (Mindset & North Star), after Book 21; update `READING-ROADMAP.md` Phase 1 list with one line: reasoning toolkit before the technical phases.
4. Run `node scripts/build-search-index.js` from repo root.
5. Verify: open `clear-thinking/index.html` — all 10 doors render, recall Q&A toggles work, no console errors; search on hub finds "Bayesian".

## Quality bar

- Every door teaches ONE tool the reader can apply the same day; every story shows the tool used on a concrete problem before naming it.
- No door under 800 words of story; secrets must be quotable standalone.
- Bengali must read naturally (the library's voice is warm, bazaar/craftsman-fable register), never machine-translated stiffness.
