# Courtyard scripts

Two scripts keep the courtyard's data layer in sync. Both read from the single
source of truth: **`books.json`** at the repo root.

## The single-source rule

`books.json` is the only place book metadata lives. Adding a book is a 3-step
process — no editing of the search index or roadmap HTML by hand:

1. **Add an entry** to the `books` array in `books.json`:
   ```json
   { "n": 32, "folder": "my-new-book", "title_en": "...", "title_bn": "...",
     "icon": "📘", "category": "growth", "color": "game-32",
     "tag": "Book 32 · ...", "status": "live" }
   ```
2. **Drop the book folder** in the repo (`my-new-book/index.html`, `doors-*.js`, …).
   Then add a card for it in `index.html` so it appears on the shelf. (The card
   carries the rich bilingual description, so it stays hand-written.)
3. **(Optional) Add it to the roadmap**: add its number to the right phase in
   the `roadmap` array of `books.json`. The 🛣️ Reading Road tab updates itself.
4. **Rebuild the search index**:
   ```bash
   node scripts/build-search-index.js
   ```

That's it. The roadmap renderer, the search index, and the filter-tab counts all
pick up the new book automatically.

## `build-search-index.js`

```bash
node scripts/build-search-index.js
```

Walks every book in `books.json`, evaluates its `doors-*.js` files (they share a
global `doors` array across files, so they're concatenated and eval'd together),
extracts the searchable fields (`tech`, `name`, `subtitle`, `secret`, `recall`,
`story`), strips HTML, and writes `search-index.json`.

The hub fetches this JSON lazily on first search — never on page load.

**When to re-run:** after editing any book's chapter content, or after
adding/removing a book in `books.json`. The output is deterministic and
diff-friendly.

## `patch-engines-deeplink.py`

```bash
python3 scripts/patch-engines-deeplink.py
```

Appends a tiny `?door=N` deep-link hook to every `<book>/engine.js`. Idempotent
— re-running skips engines that already have the marker. Search results link to
`./<book>/?door=N` so a click opens the book straight at the matching chapter.

**When to re-run:** only when adding a new book whose engine doesn't yet have
the hook. The hook is self-contained, so existing engines don't need re-running.

## Field reference (`books.json`)

| Field | Meaning |
|---|---|
| `books[].n` | Book number (matches the `Book N` tag and the doors-*.js numbering) |
| `books[].folder` | Directory name — also the URL slug `./<folder>/index.html` |
| `books[].category` | `core` \| `ai` \| `growth` \| `extras` — which filter-tab group |
| `books[].status` | `live` (on the shelf) \| `stub` (under development) \| `hidden` (skip entirely) |
| `roadmap[].phase` | 0–N phase number; rendered as a labeled group |
| `roadmap[].label` | Optional override label (e.g. `"Extra"`); default is `Phase N` |
| `roadmap[].parallel` | `true` flags phases meant to run alongside the main track |
| `roadmap[].books[]` | Book numbers in reading order; or `{book, role, why}` objects |
| `roadmap[].books[].role` | `keystone` \| `parallel` \| `finale` \| `plain` (visual styling) |
| `roadmap[].books[].why` | One-line rationale shown under the step |
