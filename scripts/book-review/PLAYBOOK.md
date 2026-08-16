# Book Review Playbook — knowledge-courtyard

**Purpose.** Take one book in this repo from "written" to "correct, clear, and complete." This document is the whole method: what to do, in what order, with which tools, and how to know you're done. Hand it to an agent along with a book folder name and it should be able to run the whole thing.

**Audience.** An agent (or person) who has not seen this repo before.

---

## 0. What a book is

Every book is one folder. They all share the same architecture:

```
<book>/
  index.html      shell: title screen, prologue, map, story screen, complete screen
  engine.js       XP/ranks/localStorage/screen routing/deep-link (?door=N)
  style.css       the whole visual system, including SVG diagram classes
  doors-1-4.js    the content — an array of door objects
  doors-5-8.js    (split points and door counts vary: 10, 13, 16…)
  photos/         optional real component photos
  study/          optional extra material
```

Each **door** is a chapter, and is a JS object pushed onto a shared `doors` array:

| field | what it is |
|---|---|
| `num, icon, color` | map-card identity |
| `name, subtitle` | Bengali title, English subtitle |
| `tech` | the technical payload of the chapter, as a one-line summary |
| `spirit` | the thematic/Quranic anchor |
| `secret` | the one-sentence takeaway shown on the cheatsheet |
| `recall` | `{q, qen, a, aen}` — the retrieval-practice question |
| `story` | **the chapter itself**: a long HTML string |
| `senior` | `{title, body}` — the closing checklist |

Inside `story`, books use a fixed vocabulary of block types. Learn it before editing:

`scene-setting` (+ `.en` twin) · `dialogue` (+ `.en` twin) · `callout warn` (the "ব্যর্থতা আগে" failure-first box) · `callout info` · `callout build` (the incremental-project thread) · `stat-grid` / `stat-card` · `code-block` · `diagram` (`diag-title` + inline `<svg>` + `diag-cap`) · `photo-frame` · `verse` · `secret-box` · `checklist`.

**The single most important structural fact:** a well-formed book uses the *same* set of blocks in the *same* counts in *every* door. Deviation is almost always an accident, and the audit script detects it by taking the book's own mode as the spec.

---

## 1. Setup

```bash
cd <repo root>                      # the folder containing books.json
pip install --break-system-packages cairosvg pillow
node --version                      # needed for --check
```

Three tools live in `scripts/book-review/`:

| tool | what it does |
|---|---|
| `audit.py` | mechanical pre-pass — finds everything a machine can find |
| `figtool.py` | replace one figure by its title, safely |
| `render_fig.py` | rasterise a figure to PNG so you can **look** at it |

```bash
python3 scripts/book-review/audit.py <book>
python3 scripts/book-review/audit.py <book> --json > /tmp/findings.json
python3 scripts/book-review/figtool.py <book>            # list all figures
python3 scripts/book-review/render_fig.py <book> "<diag-title>" /tmp/f.png
python3 scripts/book-review/render_fig.py <book> --sheet /tmp/s.png "t1" "t2" "t3"
```

Commit before you start. `git` in this sandbox sometimes leaves stale `.git/*.lock` files after a background gc; if a commit fails with "Another git process seems to be running," delete the `.lock` files and retry. The commit usually landed anyway — check `git log` before re-running.

---

## 2. The method, in order

The ordering is not arbitrary. Correctness first, because everything downstream inherits from it; visuals before new content, because new content needs the diagram vocabulary to exist.

### Stage 0 — Read the book. All of it.

Do not skip this and do not skim. The mechanical audit finds defects; only reading finds *wrongness*. Read every door's `story` end to end. While reading, keep four lists:

1. **Technical claims** — every formula, constant, register name, date, attribution.
2. **Narrative state** — who the characters are, what's been built so far, what was promised.
3. **Gaps** — things a competent practitioner would expect and that aren't here.
4. **Pedagogical order** — does each door earn the next one?

Parallelise if the book is large: subagents are good at *continuity* auditing (characters, cross-references, repetition, structural counts) and at *geometric* SVG auditing. Do not delegate the domain-correctness pass — that's the part that needs expertise and is the whole point.

### Stage 1 — Correctness

Run `audit.py` first; it hands you the mechanical half for free. Then apply domain judgement to everything it can't see:

- **Verify every formula and code snippet by hand.** Recompute the arithmetic. Check register bit-patterns against the actual datasheet. Confirm units. This is where the real bugs are — in Book 56 an ADC prescaler was `/64` when the comment said `/128`, silently degrading resolution, and a PWM frequency was off by 2×.
- **Confirm the code targets the hardware the book says it does.** Cross-check every API against the platform. A book can commit to one chip in door 8 and teach a different chip's registers in doors 9–12 without any single line looking wrong.
- **Web-verify anything you are not certain of.** Dates, attributions, current API behaviour. Prefer primary sources. Record what you checked.
- **Reconcile numbers that appear more than once.** Pick one scenario per topic and propagate it. Copy-paste of a *result* onto a different *input* is the most common arithmetic bug in these books.
- **ASCII rule.** Prose numbers stay in Bengali; part numbers, register names, hex/binary literals, pin names, and anything a reader would type or search for must be ASCII. `UBRR০` does not compile and `IRLZ৪৪N` cannot be searched. `audit.py` lists every offender; build an explicit replacement map rather than a blanket transliteration, and re-run the audit to confirm only quantity+unit tokens (৯V, ১৬MHz) remain.
- **References.** Fix cross-references that point at the wrong door, duplicate verse blocks, and `spirit`-vs-printed-verse mismatches.
- **Typos and transliteration.** Collect them into one scripted pass with an explicit list; never regex-guess Bengali.

### Stage 2 — Architectural contradictions

Distinct from Stage 1 because the fix is usually *narrative*, not technical. If the book contradicts itself about something structural — which chip, which topology, which sensor — resolve it by making the tension explicit and teaching it, rather than by silently deleting one side. A contradiction that survived writing is usually a place where the author knew two true things; the fix is to say both and explain when each applies.

### Stage 3 — Visuals

**First, three global fixes.** These are cheap and book-wide:

1. **Check that every `url(#id)` in `style.css` resolves.** These books reference arrowhead markers on `.edge-hot` / `.edge-cyan` / `.edge-amber`. If no `<defs>` block exists, *every directed arrow in the book renders as a plain line* and nobody notices. Book 56 had 49 of them. `audit.py` reports this as `svg-global`.
2. **Add `.lbl-left` / `.lbl-right`.** The `.lbl*` classes all set `text-anchor:middle`. Any left-aligned list placed at a left-hand x renders centred on that point and spills out of its box — often off the viewBox entirely.
3. **Delete every `visibility="hidden"` element.** They are dead markup. Check what you deleted: in Book 56 the hidden elements in one figure were the circuit's only return path, so removing them exposed a genuinely open circuit that had to be rebuilt.

**Then the symbol library.** If the book teaches anything physical, its diagrams are probably labelled block-boxes rather than real schematics — a resistor as a rectangle, a transistor as a box with "NPN" in it. A reader cannot learn to read real diagrams from these. Build one `<defs>` block, inlined in `index.html`, holding proper symbols, and redraw against it.

The convention that makes this work (already implemented for Book 56 — copy it):

> Every two-terminal symbol places terminal 1 at local `(0,0)` and terminal 2 on the `+x` axis. Wires therefore always land on a real lead, and `transform="translate(x,y) rotate(90)"` pivots about the first terminal.
>
> Outlines carry `fill="none"` and no `stroke`; filled parts use `fill="currentColor"`. Both `stroke` and `color` are inherited properties, so they pass through `<use>` cleanly and a single class on the `<use>` recolours the whole symbol. Never hardcode a colour.

**Then redraw, in tiers:**

- **Tier 1 — true schematics.** Any figure that depicts a circuit. These are the ones where geometry errors are also *pedagogical* errors.
- **Tier 2 — waveforms and timing,** with real axes, units and gridlines.
- **Tier 3 — new figures** for content you're adding in Stage 5.
- **Tier 4 — mechanical fixes** to everything else: labels off their wires, close the small gaps, unclip text, replace hardcoded colours.

**Look at every figure you touch.** This is not optional. There is no browser in the sandbox, so use `render_fig.py`, and read the PNG. Bengali glyphs render as boxes because the sandbox has no Bengali font — ignore that; you are checking geometry. Wires that miss their pins by 10px, a τ marker 28px off its curve, a pull-up on the wrong node: all invisible in source, all obvious in a picture. Two of Book 56's twelve redraws turned out to have *wiring* errors that the original text described correctly — nobody had ever looked at the figure.

**Also check photos match their door's topic.** Reused and mismatched photos are common.

### Stage 4 — The project thread

Many of these books run an incremental build (`callout build`, "নির্মাণ-পর্ব N") across all doors. Read all N in order as a single document and check that the artifact stays one artifact: same requirements, same components, same power source, same cadence. Drift is normal and easy to fix; the strongest repair is to add the requirements list as a figure in door 1 and reprint it ticked in the final door, which makes future drift impossible.

### Stage 5 — Missing knowledge

Ask what a *complete* treatment needs that isn't here, and rank by how often the absence will actually hurt a reader. Two heuristics that found the biggest gaps in Book 56:

- **What does the book's own setting promise that it never delivers?** Book 56 opens in a soldering workshop, mentions solder smell in four doors, and never teaches soldering.
- **What sits between two things the book does teach?** It taught voltage dividers and it taught reading them with an ADC, but not the loading effect between them — the single most common beginner failure at exactly that junction.

Also routinely missing: safety (mains, batteries), the layer beneath the abstraction the book starts at, calibration, and the practitioner's error-handling reality.

### Stage 6 — Apparatus

What turns a text into a course: per-door exercises with a bill of materials, a glossary of the book's coined terms, a troubleshooting appendix (build it from the failure-first callouts already written), and more assessment than one question per door.

---

## 3. Invariants — do not break these

Check after every editing session:

```bash
cd <repo root>
for f in <book>/doors-*.js <book>/engine.js; do node --check $f || echo "FAIL $f"; done
python3 scripts/book-review/audit.py <book>
```

1. **Every `doors-*.js` parses.** A syntax error blanks the whole book.
2. **All doors load with all fields.** The engine reads `door.recall`, `door.senior`, `door.secret` without guarding.
3. **HTML inside `story` stays balanced.** It's injected with `innerHTML`.
4. **`<` and `>` inside `code-block` stay escaped** as `&lt;` / `&gt;`. C code full of `1<<5` and `#include <avr/io.h>` will silently eat the rest of the block otherwise.
5. **Backticks and `${` never appear unescaped inside `story`** — it's a template literal.
6. **Element counts per door stay uniform** unless you deliberately change all of them.
7. **`engine.js` assumptions hold:** `doors` is a single global array assembled by load order in `index.html`; XP/rank thresholds and `MAX_XP` are sized to the door count; `SAVE_KEY` is per-book (check it isn't a copy-paste from another book — Book 56's still says `knowledgeCraftsman_v2`).

---

## 4. Deliverables and commit style

Produce `<book>/REVIEW.md` **before editing**: findings ranked by severity, with a staged fix plan. It is the artifact the user approves and the thing a later agent reads to pick up where you stopped. Keep a status block at the top listing which stages are done and their commit hashes.

Commit per stage, not per file. Write the *why* in the message — these commits are the book's engineering record:

```
Book NN review pass 1: correctness

- Door 12: ADC prescaler /64 -> /128 (250kHz exceeded the 200kHz
  accuracy limit; now the 125kHz the comment claimed)
- Door 4: battery arithmetic reconciled — 0.12mA MCU-only is 694 days,
  not 75; whole-system 1.1mA -> 75 days used consistently
...
```

---

## 5. Known false positives in `audit.py`

Judgement still required. The script is deliberately noisy rather than silent:

- **Label-width estimates are ±15%** (no Bengali font to measure with). Treat "spills past the edge" as *go look at it*, not as proven.
- **Multi-ayah citations** like `২৭:২৯-৩০` covering a printed `২৭:৩০` are correct; the script understands ranges but not every citation style.
- **Repetition hits** are often deliberate callbacks. Read before cutting.
- **`bilingual` findings** may reflect a deliberate policy (most of these books mirror only scene-setting and dialogue). Decide the policy once, then apply it.
- **Structural drift** is judged against the book's own mode, so a book that is uniformly missing something reports clean. Read the door list yourself.

---

## 6. Current state — Book 56 (`silicon-workshop`)

The reference implementation. Its `REVIEW.md` has the full findings.

| stage | status |
|---|---|
| 0 · read | done |
| 1 · correctness | **done** — `d674538` |
| 2 · AVR/ESP32 seam | **not started** — see §1.1 of REVIEW.md; recommended fix is option A (name both chips, add "same idea, other chip" boxes to doors 9–12) |
| 3 · visuals | **partly done** — `9247c8b`. Globals + 35-symbol library + 12 Tier-1 schematics done. Tier 2 (waveforms), Tier 4 (~24 mechanical fixes), and the 5 mismatched photos remain |
| 4 · build thread | not started — §2.1 |
| 5 · missing knowledge | not started — §4, eleven items ranked |
| 6 · apparatus | not started — §4.12 |

The symbol library in `silicon-workshop/index.html` is book-agnostic. Copy the `<defs>` block and the `.sym*` / `.wire*` / `.flow*` / `.lbl-left` CSS into any other book that needs schematics.

---

## 7. Doing this to a book you don't know

The method assumes domain expertise in the book's subject. If you don't have it, get it before Stage 1 — read the primary sources for the claims you're checking, not secondary summaries. An audit that only catches typos while passing over a wrong register value is worse than no audit, because it produces false confidence.

And a bias worth naming: these books are good. The failure mode of a review pass is not missing defects, it's flattening the voice while fixing them. Preserve the metaphors, the characters, the failure-first structure, the bilingual rhythm. When a fix and the voice conflict, find the version of the fix that the voice would have written — in Book 56 the buck-versus-LDO contradiction became a mentor drawing a red line through the student's choice, which is both the correction and a better scene than either original version.
