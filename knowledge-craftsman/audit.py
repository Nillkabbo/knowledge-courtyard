import re

def skip_string(src, j, quote):
    j += 1
    while j < len(src):
        if src[j] == '\\':
            j += 2
            continue
        if src[j] == quote:
            return j
        j += 1
    return j

for fn in ['doors-1-5.js', 'doors-6-10.js', 'doors-11-13.js']:
    src = open(fn).read()
    for m in re.finditer(r'doors\.push\(\{', src):
        start = m.start()
        i = src.index('{', m.start())
        depth = 0
        j = i
        while j < len(src):
            c = src[j]
            if c == '`':
                j = skip_string(src, j, '`')
            elif c == '"':
                j = skip_string(src, j, '"')
            elif c == "'":
                j = skip_string(src, j, "'")
            elif c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    break
            j += 1
        block = src[start:j + 1]
        line = src[:start].count('\n') + 1
        num = re.search(r'num:\s*(\d+)', block)
        if 'senior' in block:
            sm = re.search(r'senior\s*:\s*\{', block)
            inner = block[sm.end():]
            title = re.search(r'title\s*:\s*["`]([^"`]{0,60})', inner)
            bodym = re.search(r'body\s*:\s*`', inner)
            bodylen = 0
            if bodym:
                k = bodym.end()
                while k < len(inner):
                    if inner[k] == '\\':
                        k += 2
                        continue
                    if inner[k] == '`':
                        break
                    k += 1
                bodylen = k - bodym.end()
            t = title.group(1) if title else 'MISSING'
            print(f"{fn}:{line} door {num.group(1) if num else '?'} senior title={t!r} bodylen={bodylen}")
        else:
            print(f"{fn}:{line} door {num.group(1) if num else '?'} NO SENIOR")
