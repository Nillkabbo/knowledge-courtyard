#!/usr/bin/env python3
"""
audit.py — mechanical pre-pass for a knowledge-courtyard book review.

    python3 scripts/book-review/audit.py silicon-workshop
    python3 scripts/book-review/audit.py silicon-workshop --json > findings.json

Finds everything a machine can find, so the human/agent reviewer spends its
attention on the things only judgement can catch (physics, pedagogy, gaps).

Checks:
  1  JS parses (node --check) and all doors load with required fields
  2  Structural drift — element counts per door vs. the book's own mode
  3  HTML tag balance inside each story
  4  Unescaped < or > inside code-blocks
  5  SVG: viewBox overflow, hidden orphans, zero-size/zero-length shapes,
     undefined CSS classes, hardcoded colours, missing <defs> for markers
  6  SVG: wire endpoints that stop short of what they should touch
  7  Bengali numerals inside identifiers / part numbers / hex literals
  8  Cross-references ("দরজা N" / "Door N") pointing outside the book
  9  Duplicate verse blocks and spirit-vs-verse citation mismatches
 10  Repeated near-verbatim passages across doors

Exit code is 0 always; this is a reporting tool, not a gate.
"""
import re, sys, json, glob, os, subprocess, collections, math

BN = '০১২৩৪৫৬৭৮৯'
BN2A = str.maketrans(BN, '0123456789')


def bn_to_int(s):
    try:
        return int(s.translate(BN2A))
    except ValueError:
        return None


# ── loading ──────────────────────────────────────────────────────────────
def door_files(book):
    return sorted(glob.glob(os.path.join(book, 'doors-*.js')),
                  key=lambda p: int(re.search(r'doors-(\d+)', p).group(1)))


def split_doors(book):
    """[(num, file, body_text)] — body is the raw source of one door object."""
    out = []
    for f in door_files(book):
        s = open(f, encoding='utf-8').read()
        parts = re.split(r'\n\s*num:\s*(\d+)\s*,', s)   # books differ in spacing
        for i in range(1, len(parts), 2):
            out.append((int(parts[i]), f, parts[i + 1]))
    return sorted(out)


def story_of(body):
    a = body.find('story:`')
    b = body.find('`,\n  senior')
    return body[a + 7:b] if a >= 0 and b > a else body


def svgs_of(text):
    return re.findall(r'<svg[^>]*>.*?</svg>', text, re.S)


# ── 1. parse + load ──────────────────────────────────────────────────────
def check_parse(book, F):
    for f in door_files(book) + [os.path.join(book, 'engine.js')]:
        if not os.path.exists(f):
            continue
        r = subprocess.run(['node', '--check', f], capture_output=True, text=True)
        if r.returncode:
            F('parse', f, r.stderr.strip().split('\n')[0])


REQUIRED = ['icon', 'color', 'name', 'subtitle', 'tech', 'secret',
            'recall', 'story']   # 'num' is the split key, always present


def check_fields(doors, F):
    nums = [n for n, _, _ in doors]
    if nums != list(range(1, len(nums) + 1)):
        F('fields', '-', f'door numbers not 1..N contiguous: {nums}')
    for n, f, body in doors:
        for k in REQUIRED:
            if not re.search(rf'\b{k}\s*:', body):
                F('fields', f'door {n}', f'missing field: {k}')


# ── 2. structural drift ──────────────────────────────────────────────────
ELEMENTS = {
    'diagram':   r'<div class="diagram"',
    'code-block': r'<div class="code-block"',
    'warn':      r'class="callout warn"',
    'verse':     r'<div class="verse"',
    'photo':     r'class="photo-frame"',
    'secret':    r'class="secret-box"',
    'stat-grid': r'class="stat-grid"',
    'dialogue':  r'<div class="dialogue">',
}


def check_structure(doors, F):
    counts = {k: [] for k in ELEMENTS}
    for n, _, body in doors:
        s = story_of(body)
        for k, pat in ELEMENTS.items():
            counts[k].append(len(re.findall(pat, s)))
    for k, vals in counts.items():
        if not vals:
            continue
        mode = collections.Counter(vals).most_common(1)[0][0]
        for (n, _, _), v in zip(doors, vals):
            if v != mode:
                F('structure', f'door {n}',
                  f'{k}: {v} (every other door has {mode})')


def check_en_mirror(doors, F):
    for n, _, body in doors:
        s = story_of(body)
        for cls in ('scene-setting', 'dialogue'):
            bn = len(re.findall(rf'<(?:p|div) class="{cls}">', s))
            en = len(re.findall(rf'<(?:p|div) class="{cls} en">', s))
            if bn != en:
                F('bilingual', f'door {n}',
                  f'{cls}: {bn} Bengali vs {en} English — unmirrored')


# ── 3/4. HTML hygiene ────────────────────────────────────────────────────
VOID = {'img', 'br', 'hr', 'line', 'rect', 'circle', 'path', 'text', 'svg',
        'ellipse', 'polygon', 'use', 'input', 'meta', 'link', 'marker', 'stop'}


def check_html(doors, F):
    for n, _, body in doors:
        s = re.sub(r'<svg.*?</svg>', '', story_of(body), flags=re.S)
        c = collections.Counter()
        for close, name, self_ in re.findall(r'<(/?)([a-zA-Z]+)[^>]*?(/?)>', s):
            if name.lower() in VOID or self_ == '/':
                continue
            c[name.lower()] += -1 if close else 1
        bad = {k: v for k, v in c.items() if v}
        if bad:
            F('html', f'door {n}', f'unbalanced tags: {bad}')


def check_code_escaping(doors, F):
    for n, _, body in doors:
        for blk in re.findall(r'<div class="code-block">(.*?)</div>',
                              story_of(body), re.S):
            for m in re.finditer(r'<(?!/?(code|strong|em|br|span)\b)', blk):
                F('html', f'door {n}',
                  f'unescaped "<" in code-block near: '
                  f'{blk[max(0,m.start()-25):m.start()+25]!r}')


# ── 5/6. SVG ─────────────────────────────────────────────────────────────
def css_classes(book):
    css = open(os.path.join(book, 'style.css'), encoding='utf-8').read()
    return set(re.findall(r'svg\s+\.([\w-]+)', css)), css


def defined_ids(book):
    ids = set()
    for f in ['index.html'] + [os.path.basename(x) for x in door_files(book)]:
        p = os.path.join(book, f)
        if os.path.exists(p):
            ids |= set(re.findall(r'<(?:g|marker|symbol|linearGradient|radialGradient)\s+id="([\w-]+)"',
                                  open(p, encoding='utf-8').read()))
    return ids


NUM = r'-?\d+(?:\.\d+)?'


def check_svg(book, doors, F):
    known, css = css_classes(book)
    ids = defined_ids(book)
    refs = set(re.findall(r'url\(#([\w-]+)\)', css))
    for r in sorted(refs - ids):
        F('svg-global', 'style.css',
          f'CSS references #{r} but no <defs> anywhere defines it '
          f'— every element using it renders without that effect')

    for n, _, body in doors:
        s = story_of(body)
        titles = re.findall(r'<div class="diag-title">(.*?)</div>', s)
        for idx, svg in enumerate(svgs_of(s)):
            tag = f'door {n} fig {idx+1}' + (f' "{titles[idx][:34]}"' if idx < len(titles) else '')
            vb = re.search(r'viewBox="([^"]+)"', svg)
            if not vb:
                F('svg', tag, 'no viewBox'); continue
            _, _, W, H = [float(x) for x in vb.group(1).split()]

            if 'visibility="hidden"' in svg:
                F('svg', tag, f'{svg.count(chr(34)+"hidden"+chr(34))} hidden orphan element(s) '
                              '— dead markup, and sometimes load-bearing')

            for c in re.findall(r'class="([^"]+)"', svg):
                for cl in c.split():
                    if cl not in known and not cl.startswith('sym'):
                        F('svg', tag, f'class "{cl}" not defined in style.css')

            for col in re.findall(r'(?:fill|stroke)="(#[0-9a-fA-F]{3,8})"', svg):
                F('svg', tag, f'hardcoded colour {col} bypasses the CSS variables')

            for href in re.findall(r'href="#([\w-]+)"', svg):
                if href not in ids:
                    F('svg', tag, f'<use href="#{href}"> — symbol not defined')

            # geometry: anything outside the viewBox
            for m in re.finditer(r'<rect[^>]*x="(' + NUM + r')"[^>]*y="(' + NUM +
                                 r')"[^>]*width="(' + NUM + r')"[^>]*height="(' + NUM + r')"', svg):
                x, y, w, h = map(float, m.groups())
                if x < 0 or y < 0 or x + w > W + .5 or y + h > H + .5:
                    F('svg', tag, f'rect {x},{y} {w}×{h} outside viewBox {W}×{H}')
                if w <= 0 or h <= 0:
                    F('svg', tag, f'zero-size rect at {x},{y}')
            for m in re.finditer(r'<line[^>]*x1="(' + NUM + r')"[^>]*y1="(' + NUM +
                                 r')"[^>]*x2="(' + NUM + r')"[^>]*y2="(' + NUM + r')"', svg):
                x1, y1, x2, y2 = map(float, m.groups())
                if (x1, y1) == (x2, y2):
                    F('svg', tag, f'zero-length line at {x1},{y1}')
                for x, y in ((x1, y1), (x2, y2)):
                    if not (-.5 <= x <= W + .5 and -.5 <= y <= H + .5):
                        F('svg', tag, f'line endpoint {x},{y} outside viewBox')
            for m in re.finditer(r'<text[^>]*\by="(' + NUM + r')"', svg):
                y = float(m.group(1))
                if y < 11:
                    F('svg', tag, f'text baseline y={y} — ascenders clip at the top edge')
                if y > H - 2:
                    F('svg', tag, f'text baseline y={y} below viewBox height {H} — clipped')

            # text-anchor trap: .lbl* default to middle
            for m in re.finditer(r'<text class="(lbl[\w-]*)"[^>]*x="(' + NUM + r')"[^>]*>([^<]{18,})</text>', svg):
                cls, x, txt = m.group(1), float(m.group(2)), m.group(3)
                if 'lbl-left' in cls or 'lbl-right' in cls or 'text-anchor' in m.group(0):
                    continue
                est = len(txt) * 6.0
                if x - est / 2 < -.5:
                    F('svg', tag, f'centred label spills past the left edge '
                                  f'(x={x}, ~{est:.0f}px wide): {txt[:30]!r} '
                                  f'— add class lbl-left')
                if x + est / 2 > W + .5:
                    F('svg', tag, f'centred label spills past the right edge '
                                  f'(x={x}, ~{est:.0f}px wide): {txt[:30]!r}')


# ── 7. Bengali numerals where ASCII belongs ──────────────────────────────
def check_numerals(book, F):
    pat = re.compile(r'[A-Za-z0-9_' + BN + r']+')
    unit = re.compile(r'^[' + BN + r'.]+[A-Za-z]+$')   # ৯V, ১৬MHz — fine
    seen = collections.Counter()
    for f in door_files(book):
        for t in pat.findall(open(f, encoding='utf-8').read()):
            if any(c in BN for c in t) and any(c.isascii() and c.isalpha() for c in t):
                if not unit.match(t):
                    seen[t] += 1
    for t, c in seen.most_common():
        F('numerals', '-', f'{t}  ×{c} — identifier/part-number/literal '
                           f'should be ASCII (prose numbers stay Bengali)')


# ── 8. cross-references ──────────────────────────────────────────────────
def check_xrefs(doors, F):
    N = len(doors)
    for n, _, body in doors:
        for m in re.finditer(r'(?:দরজা|Door)\s*([' + BN + r'\d]+)', story_of(body)):
            t = bn_to_int(m.group(1))
            if t is None:
                continue
            if not (1 <= t <= N):
                F('xref', f'door {n}', f'points at door {t}, book has {N}')


# ── 9. verses ────────────────────────────────────────────────────────────
def _covers(cited, printed):
    """Does any spirit citation cover the printed ref? '27:29-30' covers 27:30."""
    ps, pv = bn_to_int(printed.group(1)), bn_to_int(printed.group(2))
    for c in cited:
        m = re.match(r'([' + BN + r'\d]+):([' + BN + r'\d]+)(?:-([' + BN + r'\d]+))?', c)
        if not m:
            continue
        cs, lo = bn_to_int(m.group(1)), bn_to_int(m.group(2))
        hi = bn_to_int(m.group(3)) if m.group(3) else lo
        if cs == ps and lo is not None and hi is not None and lo <= pv <= hi:
            return True
    return False


def check_verses(doors, F):
    seen = {}
    for n, _, body in doors:
        s = story_of(body)
        for ar, ref in re.findall(r'verse-arabic">(.*?)</div>.*?verse-ref">(.*?)</div>', s, re.S):
            key = ar.strip()[:40]
            if key in seen:
                F('verse', f'door {n}', f'verse block duplicated from door {seen[key]}: {ref}')
            seen[key] = n
            sp = re.search(r'spirit:"(.*?)"', body)
            if sp:
                cited = set(re.findall(r'[' + BN + r'\d]+:[' + BN + r'\d\-]+', sp.group(1)))
                printed = re.search(r'([' + BN + r'\d]+):([' + BN + r'\d]+)', ref)
                if cited and printed and not _covers(cited, printed):
                    F('verse', f'door {n}',
                      f'spirit cites {sorted(cited)} but the verse block prints '
                      f'{printed.group(0)}')


# ── 10. repetition ───────────────────────────────────────────────────────
def check_repetition(doors, F, ngram=12):
    idx = collections.defaultdict(set)
    for n, _, body in doors:
        s = re.sub(r'<[^>]+>', ' ', story_of(body))
        w = s.split()
        for i in range(len(w) - ngram):
            idx[' '.join(w[i:i + ngram])].add(n)
    hits = collections.Counter()
    for g, ds in idx.items():
        if len(ds) > 1:
            hits[tuple(sorted(ds))] += 1
    for pair, c in hits.most_common(8):
        if c >= 2:
            F('repetition', f'doors {list(pair)}',
              f'{c} shared {ngram}-word runs — check for copy-paste padding')


# ── main ─────────────────────────────────────────────────────────────────
def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    book = sys.argv[1].rstrip('/')
    as_json = '--json' in sys.argv
    findings = []

    def F(kind, where, msg):
        findings.append({'kind': kind, 'where': where, 'msg': msg})

    doors = split_doors(book)
    if not doors:
        sys.exit(f'audit: no doors parsed in {book} — check the doors-*.js format')
    check_parse(book, F)
    check_fields(doors, F)
    check_structure(doors, F)
    check_en_mirror(doors, F)
    check_html(doors, F)
    check_code_escaping(doors, F)
    check_svg(book, doors, F)
    check_numerals(book, F)
    check_xrefs(doors, F)
    check_verses(doors, F)
    check_repetition(doors, F)

    if as_json:
        print(json.dumps(findings, ensure_ascii=False, indent=1))
        return
    print(f'\n{book} — {len(doors)} doors, {len(findings)} mechanical findings\n')
    for kind in ['parse', 'fields', 'structure', 'bilingual', 'html',
                 'svg-global', 'svg', 'numerals', 'xref', 'verse', 'repetition']:
        rows = [f for f in findings if f['kind'] == kind]
        if not rows:
            continue
        print(f'── {kind.upper()} ({len(rows)})')
        for r in rows[:60]:
            print(f'   {r["where"]:<34} {r["msg"]}')
        if len(rows) > 60:
            print(f'   … {len(rows)-60} more')
        print()


if __name__ == '__main__':
    main()
