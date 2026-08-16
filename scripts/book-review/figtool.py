#!/usr/bin/env python3
"""
figtool.py — surgical replacement of one figure inside a book's doors-*.js.

Import it from a script run with the book folder as cwd, or pass book=:

    import sys; sys.path.insert(0, 'scripts/book-review')
    from figtool import replace_fig, set_cap, get_fig

    replace_fig("ওহমের নদী — এক নজরে তিন ভাই", '''<svg ...>...</svg>''')
    set_cap("ওহমের নদী — এক নজরে তিন ভাই", "নতুন ক্যাপশন…")

Figures are addressed by their <div class="diag-title"> text, which is unique
across a book — far safer than line numbers, which move under you.
"""
import glob, os


def _files(book='.'):
    return sorted(glob.glob(os.path.join(book, 'doors-*.js')))


def _find(title, book='.'):
    key = '<div class="diag-title">' + title + '</div>'
    for f in _files(book):
        s = open(f, encoding='utf-8').read()
        i = s.find(key)
        if i >= 0:
            return f, s, i
    raise SystemExit(f'figtool: no figure titled {title!r}')


def get_fig(title, book='.'):
    """Return the current <svg>…</svg> source for a figure."""
    _, s, i = _find(title, book)
    a = s.find('<svg', i)
    b = s.find('</svg>', a) + len('</svg>')
    return s[a:b]


def replace_fig(title, new_svg, book='.'):
    f, s, i = _find(title, book)
    a = s.find('<svg', i)
    b = s.find('</svg>', a) + len('</svg>')
    open(f, 'w', encoding='utf-8').write(s[:a] + new_svg.strip() + s[b:])
    return f


def set_cap(title, cap, book='.'):
    f, s, i = _find(title, book)
    a = s.find('<div class="diag-cap">', i)
    b = s.find('</div>', a)
    open(f, 'w', encoding='utf-8').write(
        s[:a] + '<div class="diag-cap">' + cap + s[b:])
    return f


def set_title(old, new, book='.'):
    f, s, i = _find(old, book)
    open(f, 'w', encoding='utf-8').write(
        s.replace('<div class="diag-title">' + old + '</div>',
                  '<div class="diag-title">' + new + '</div>'))
    return f


def list_figs(book='.'):
    import re
    out = []
    for f in _files(book):
        s = open(f, encoding='utf-8').read()
        parts = re.split(r'\n\s*num:\s*(\d+)\s*,', s)
        for j in range(1, len(parts), 2):
            for t in re.findall(r'<div class="diag-title">(.*?)</div>', parts[j + 1]):
                out.append((int(parts[j]), t))
    return sorted(out)


if __name__ == '__main__':
    import sys
    b = sys.argv[1] if len(sys.argv) > 1 else '.'
    for n, t in list_figs(b):
        print(f'{n:>3}  {t}')
