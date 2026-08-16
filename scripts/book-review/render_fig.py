#!/usr/bin/env python3
"""
render_fig.py — rasterise a book figure so an agent can actually LOOK at it.

    pip install --break-system-packages cairosvg pillow

    python3 scripts/book-review/render_fig.py silicon-workshop \
        "ওহমের নদী — এক নজরে তিন ভাই" /tmp/fig.png

    # contact sheet of several at once
    python3 scripts/book-review/render_fig.py silicon-workshop --sheet /tmp/sheet.png \
        "title one" "title two" "title three"

Why this exists: SVG defects (wires that miss their pins, labels lying across
lines, symbols pointing the wrong way) are close to invisible in source and
obvious in a picture. There is no browser in the sandbox, so this is the
substitute. It inlines the book's own CSS and <defs> so the render matches
what a reader sees.

Caveat: the sandbox usually has no Bengali font, so Bengali text renders as
boxes. That is fine — you are checking geometry, not typography. Latin text,
numbers and all shapes render correctly.
"""
import re, sys, os, glob


def _load(book):
    css_raw = open(os.path.join(book, 'style.css'), encoding='utf-8').read()
    m = re.search(r':root\{(.*?)\}', css_raw, re.S)
    vars_ = dict(re.findall(r'(--[\w-]+)\s*:\s*([^;]+);', m.group(1)))

    rules = []
    for r in re.finditer(r'\.story-text \.diagram svg ([^{]+)\{([^}]+)\}', css_raw):
        sel, body = r.group(1).strip(), r.group(2)
        for k, v in vars_.items():
            body = body.replace(f'var({k})', v.strip())
        body = re.sub(r'marker-end:url\(#[\w-]+\)', '', body)   # cairosvg: markers are flaky
        rules.append(f'{sel}{{{body}}}')
    css = '\n'.join(rules)

    defs = ''
    idx = os.path.join(book, 'index.html')
    if os.path.exists(idx):
        d = re.search(r'(<defs>.*?</defs>)', open(idx, encoding='utf-8').read(), re.S)
        if d:
            defs = d.group(1)
            for k, v in vars_.items():
                defs = defs.replace(f'var({k})', v.strip())
    bg = vars_.get('--bg-deep', '#0b1020').strip()
    return css, defs, bg


def render(book, title, out, scale=1.6):
    import cairosvg
    css, defs, bg = _load(book)
    key = '<div class="diag-title">' + title + '</div>'
    for f in sorted(glob.glob(os.path.join(book, 'doors-*.js'))):
        s = open(f, encoding='utf-8').read()
        i = s.find(key)
        if i < 0:
            continue
        a = s.find('<svg', i)
        b = s.find('</svg>', a) + 6
        svg = s[a:b]
        vb = re.search(r'viewBox="([^"]+)"', svg).group(1).split()
        W, H = float(vb[2]), float(vb[3])
        inner = svg[svg.find('>') + 1:-6]
        doc = (f'<svg xmlns="http://www.w3.org/2000/svg" '
               f'xmlns:xlink="http://www.w3.org/1999/xlink" '
               f'viewBox="{" ".join(vb)}" width="{W}" height="{H}">'
               f'<style>{css}\ntext{{font-family:sans-serif}}</style>'
               f'{defs}{inner}</svg>')
        doc = doc.replace('href="#sym', 'xlink:href="#sym')
        cairosvg.svg2png(bytestring=doc.encode(), write_to=out,
                         scale=scale, background_color=bg)
        return True
    return False


def sheet(book, titles, out, scale=1.6):
    from PIL import Image
    import tempfile
    ims = []
    for t in titles:
        p = tempfile.mktemp(suffix='.png')
        if render(book, t, p, scale):
            ims.append(Image.open(p))
        else:
            print(f'  ! not found: {t}')
    if not ims:
        return False
    W = max(i.width for i in ims)
    out_im = Image.new('RGB', (W, sum(i.height for i in ims)), (11, 16, 32))
    y = 0
    for i in ims:
        out_im.paste(i, (0, y)); y += i.height
    out_im.save(out)
    return True


if __name__ == '__main__':
    if len(sys.argv) < 4:
        sys.exit(__doc__)
    book = sys.argv[1]
    if sys.argv[2] == '--sheet':
        ok = sheet(book, sys.argv[4:], sys.argv[3])
    else:
        ok = render(book, sys.argv[2], sys.argv[3])
    print('rendered' if ok else 'NOT FOUND')
