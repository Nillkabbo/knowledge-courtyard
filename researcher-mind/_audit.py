import re, sys

for fn in ['doors-1-5.js', 'doors-6-10.js']:
    src = open(fn, encoding='utf-8').read()
    stories = re.findall(r'story:`(.*?)`\n\}\);', src, re.S)
    total_orphans = 0
    print(f"== {fn}: {len(stories)} stories")
    for si, story in enumerate(stories):
        opens = len(re.findall(r'<div\b', story))
        closes = len(re.findall(r'</div>', story))
        orphans = []
        for i, ln in enumerate(story.split('\n')):
            o = len(re.findall(r'<div\b', ln))
            c = len(re.findall(r'</div>', ln))
            if c > o:
                orphans.append((i + 1, o, c, ln.strip()[:60]))
        total_orphans += len(orphans)
        print(f" story#{si+1}: opens={opens} closes={closes} diff={closes-opens} orphan_lines={len(orphans)}")
        for a in orphans:
            print(f"   L{a[0]} o={a[1]} c={a[2]} | {a[3]}")
    print(f" TOTAL orphan lines: {total_orphans}")
