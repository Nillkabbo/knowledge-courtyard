#!/usr/bin/env node
/**
 * build-search-index.js — builds search-index.json from the doors-*.js files.
 *
 * Why this exists: chapter content lives as JS source (each doors-*.js declares
 * `const doors=[]` and pushes objects). We can't fetch+JSON-parse it at runtime.
 * So we extract it ONCE here, strip HTML, keep only searchable fields, and emit
 * a compact JSON index that the hub fetches lazily on first search.
 *
 * The book list (folder, titles, category) is read from ../books.json — the
 * single source of truth shared with the roadmap renderer. Add a book there,
 * then re-run this script. No other edits needed for search.
 *
 * Run:  node scripts/build-search-index.js
 * Output: search-index.json
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MANIFEST = JSON.parse(fs.readFileSync(path.join(ROOT, 'books.json'), 'utf8'));
const BOOKS = MANIFEST.books.filter(b => b.status !== 'hidden');

/** Strip HTML tags + collapse whitespace. Leaves readable text for search. */
function stripHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')   // drop inline SVG (diagrams)
    .replace(/<[^>]+>/g, ' ')                   // strip tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Pull a clean snippet from the story body for preview + content search. */
function snippet(story, maxLen = 350) {
  const txt = stripHtml(story);
  if (txt.length <= maxLen) return txt;
  return txt.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}

// Extract the doors array for an entire book.
//
// The doors files are designed to load in order via <script> tags in the
// browser, where they share a global `doors`:
//   - The FIRST file declares `const doors = [];` and pushes some objects.
//   - SUBSEQUENT files just call `doors.push({...})` — they assume the global
//     already exists.
// So we can't eval files in isolation. Instead we concatenate ALL of a book's
// doors files (in natural sort order) into one source string, then eval it in
// a single function scope where `doors` is local.
function extractBookDoors(dir, files) {
  const combined = files.map(f => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n;\n');
  // Drop redundant `const doors = []` declarations after the first — combining
  // files this way would otherwise throw a duplicate-declaration SyntaxError.
  let firstDecl = true;
  const cleaned = combined.replace(/const\s+doors\s*=\s*\[\s*\]\s*;?/g, () => {
    if (firstDecl) { firstDecl = false; return 'const doors = [];'; }
    return '';
  });
  const fn = new Function(cleaned + '\nreturn typeof doors!=="undefined"?doors:[];');
  return fn() || [];
}

// Natural sort so doors-1-5 < doors-6-10 < doors-13-16 (not alphabetical).
function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function bookDoc(book) {
  const dir = path.join(ROOT, book.folder);
  if (!fs.existsSync(dir)) {
    console.warn(`  ⚠️  missing dir: ${book.folder} (listed in books.json but not on disk)`);
    return null;
  }
  const files = fs.readdirSync(dir)
    .filter(f => /^doors-.*\.js$/.test(f))
    .sort(naturalSort);
  if (files.length === 0) {
    console.warn(`  ⚠️  no doors files in: ${book.folder}`);
    return null;
  }
  let doors;
  try { doors = extractBookDoors(dir, files); }
  catch (e) {
    console.warn(`  ⚠️  failed to parse ${book.folder}: ${e.message}`);
    return null;
  }
  const chapters = [];
  for (const d of doors) {
    if (!d || typeof d !== 'object' || d.num == null) continue;
    const story = d.story || '';
    const recall = d.recall || {};
    chapters.push({
      n: Number(d.num),
      name_bn: d.name || '',
      name_en: d.subtitle || '',
      tech: d.tech || '',                          // the topic — highest signal
      spirit: d.spirit || '',
      secret: d.secret || '',                      // one-line essence
      rq: recall.q || '', rqen: recall.qen || '',
      ra: recall.a || '', raen: recall.aen || '',
      body: snippet(story, 350),                   // lightly-cleaned story text
    });
  }
  chapters.sort((a, b) => a.n - b.n);
  return {
    book: book.n,
    folder: book.folder,
    title_en: book.title_en,
    title_bn: book.title_bn,
    icon: book.icon,
    category: book.category,
    status: book.status || 'live',
    chapters
  };
}

// ── main ──
console.log('Building search index from books.json…');
const index = [];
for (const book of BOOKS) {
  const doc = bookDoc(book);
  if (!doc) continue;
  index.push(doc);
  const tag = book.status === 'stub' ? ' [stub]' : '';
  console.log(`  ✓ Book ${book.n}: ${doc.chapters.length} chapters — ${book.folder}${tag}`);
}

const out = {
  generated: new Date().toISOString().slice(0, 10),
  books: index.length,
  chapters: index.reduce((s, b) => s + b.chapters.length, 0),
  index,
};

const outPath = path.join(ROOT, 'search-index.json');
fs.writeFileSync(outPath, JSON.stringify(out));
const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
console.log(`\n✅ Wrote ${outPath} — ${out.books} books, ${out.chapters} chapters, ${kb} KB`);
