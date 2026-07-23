#!/usr/bin/env node
/**
 * bump-fonts.js — one-shot accessibility pass across all 35 book stylesheets.
 *
 * Bumps font-size values UP to readable thresholds:
 *   - body / content text  → 0.875rem (14px, WCAG AA floor)
 *   - UI / Bengali text    → 0.8rem   (12.8px)
 *   - labels / badges      → 0.75rem  (12px)
 *   - tiny captions        → 0.7rem   (11.2px, decorative floor)
 *
 * Safety guarantees:
 *   - Only ever INCREASES a font-size; never decreases.
 *   - Only touches selectors listed in TARGETS below (exact substring match
 *     on the selector text), so unrelated rules are untouched.
 *   - NEVER touches values in px (SVG viewBox coordinates) or clamp() values
 *     (those are already responsive).
 *   - Leaves `code-editor` (dsa-bazaar textarea) alone — pre is correct there.
 *
 * Run:  node scripts/bump-fonts.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Each entry: [selector-substring-to-match, minimum-rem-target].
// A rule's font-size is bumped to `target` only if its current rem value is
// below the target. Categorised by purpose so the intent is documented.
const TARGETS = [
  // ── P0: CONTENT / reading text → 0.875rem ──
  ['.code-block',            0.875],  // code blocks (the densest surface)
  ['.cmp-card',              0.9],    // comparison card body (two-up, needs headroom)
  ['.kv-table',              0.875],  // tabular content
  ['.cheat-card .secret',    0.875],  // cheat-sheet body prose
  ['.tl-body',               0.875],  // timeline body
  ['.callout',               0.9],    // callout box content
  ['p.en',                   0.875],  // English translation paragraphs
  ['.dialogue.en',           0.875],
  ['.scene-setting.en',      0.875],  // English scene-setting
  ['.prologue-body p.en',    0.875],  // English prologue
  ['.recall-q.en',           0.875],
  ['.senior-insight p',      0.875],  // senior-insight body
  ['.real-example-body',     0.875],  // ai-engineering-game code example
  ['.scn-answer',            0.875],  // mi-driving scenario answer

  // ── P1: UI / Bengali interactive text → 0.8rem ──
  ['.hud-btn',               0.8],
  ['.door-tech',             0.78],
  ['.cheat-card .tech',      0.78],
  ['.door-lock-hint',        0.78],
  ['.door-subtitle',         0.78],
  ['.recall-toggle',         0.85],

  // ── P2: labels / badges → 0.75rem ──
  ['.hud-xp-text',           0.75],
  ['.door-num',              0.75],
  ['.secret-box .label',     0.75],
  ['.cmp-label',             0.75],
  ['.senior-insight .label', 0.75],
  ['.tl-when',               0.75],
  ['.kv-table th',           0.75],
  ['.sc-label',              0.75],
  ['.cheat-card .name',      0.8],
  ['.diag-cap',              0.75],
  ['.svg-caption',           0.75],
  ['.source-box .src-label', 0.72],
  ['.dia-title',             0.75],
  ['.sign-label',            0.75],
  ['.rt-caption',            0.75],
  ['.pavement-bar',          0.75],
  ['.real-example-lang',     0.72],
  ['.hud-level',             0.78],
  ['.story-progress',        0.78],
  ['.diag-title',            0.8],
  ['.legend',                0.75],
  // ── P2b: remaining small labels/captions (caught in 2nd pass) → 0.75rem ──
  ['.xp-label',              0.75],  // XP popup label
  ['.src-label',             0.75],  // source-box label (phd-journey, learn-to-learn)
  ['.jvs-label',             0.75],  // engineer-journey junior-vs-senior label
  ['.expert-insight .label', 0.75],  // engineer-journey
  ['.senior-lesson .label',  0.75],  // dsa-bazaar
  ['.fig-cap',               0.75],  // phd-journey svg caption
  ['.sign-title',            0.75],  // mi-driving sign title
  ['.real-example-note',     0.75],  // ai-engineering-game
  ['.playground-hint',       0.75],  // dsa-bazaar
  ['.py-status',             0.75],  // dsa-bazaar
  ['.scn-label',             0.75],  // mi-driving scenario label
  ['.en-jump',               0.75],  // mi-driving english jump link
  ['.hc-rule',               0.78],  // mi-driving hill-card rule text
  // ── P2c: final stragglers (3rd pass) → 0.75rem ──
  ['.real-example-lang',     0.75],  // ai-engineering-game code lang tag
  ['.src-box',               0.8],   // phd-journey source box body
  ['.door-card.next-door::before', 0.75],  // ai-engineering-game Bengali badge
  ['.door-card.completed::after',  0.75],  // ai-engineering-game Bengali badge
  ['.diagram-box',           0.8],   // mi-driving diagram box (was 0.74)
];

/** Parse "0.68rem" → 0.68. Returns null for px/clamp/unknown. */
function remValue(str) {
  const m = /^(\d*\.?\d+)rem$/.exec(str.trim());
  return m ? parseFloat(m[1]) : null;
}

/**
 * Rewrite a single CSS file. Splits on `selector{body}` blocks.
 * For each block whose selector matches a TARGET, bump font-size if needed.
 * Returns { changed: bool, bumps: string[] }.
 */
function processFile(filePath) {
  const orig = fs.readFileSync(filePath, 'utf8');
  const bumps = [];

  // Match selector + body. Selector is everything from line start (or after })
  // up to `{`. Body is everything up to the closing `}`.
  // Non-greedy body handles single-line minified rules fine.
  const out = orig.replace(/([^\n{}][^\n{}]*?)\{([^{}]*)\}/g, (full, sel, body) => {
    // Find font-size in this body.
    const fsMatch = /font-size:\s*([^;]+);/.exec(body);
    if (!fsMatch) return full;
    const current = fsMatch[1].trim();
    const cur = remValue(current);
    if (cur == null) return full;  // px/clamp → skip

    // Find the highest matching target for this selector.
    let target = null;
    for (const [needle, tgt] of TARGETS) {
      if (sel.includes(needle)) {
        if (target === null || tgt > target) target = tgt;
      }
    }
    if (target === null) return full;       // selector not in our list
    if (cur >= target) return full;          // already big enough — never decrease

    // Bump.
    const newFs = `font-size:${target}rem;`;
    const newBody = body.replace(/font-size:\s*[^;]+;/, newFs);
    bumps.push(`${current.trim()} → ${target}rem  in  ${sel.trim().slice(0, 50)}`);
    return `${sel}{${newBody}}`;
  });

  const changed = out !== orig;
  if (changed) fs.writeFileSync(filePath, out);
  return { changed, bumps };
}

// ── main ──
const dirs = fs.readdirSync(ROOT).filter(d =>
  fs.statSync(path.join(ROOT, d)).isDirectory() &&
  fs.existsSync(path.join(ROOT, d, 'style.css'))
).filter(d => !['scripts', '.zcode', 'node_modules'].includes(d));

let totalBumps = 0;
for (const dir of dirs.sort()) {
  const file = path.join(ROOT, dir, 'style.css');
  const { changed, bumps } = processFile(file);
  if (changed) {
    totalBumps += bumps.length;
    console.log(`✓ ${dir}: ${bumps.length} bump(s)`);
  }
}
console.log(`\nDone. ${totalBumps} font-size bumps across ${dirs.length} books.`);
