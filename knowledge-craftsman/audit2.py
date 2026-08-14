import re, json

files = ['doors-1-5.js', 'doors-6-10.js', 'doors-11-13.js']
report = {}

for fn in files:
    src = open(fn).read()
    lines = src.split('\n')
    orphans = []
    for idx, line in enumerate(lines, 1):
        # dialogue lines ending with </div></div>
        if re.search(r'<div class="dialogue[^"]*">', line) and line.rstrip().endswith('</div></div>'):
            # count div opens/closes in this line
            opens = len(re.findall(r'<div\b', line))
            closes = len(re.findall(r'</div>', line))
            orphans.append((idx, opens, closes, line.strip()[:70]))
    # verse citations
    verses = []
    for idx, line in enumerate(lines, 1):
        for m in re.finditer(r'(কুরআন|Quran|সূরা|Surah)[^<>\n]{0,80}?(\d+:\d+)', line):
            verses.append((idx, m.group(0)))
    report[fn] = {'orphans': orphans, 'verses': verses}

for fn, r in report.items():
    print(f"=== {fn} ===")
    print(f"dialogue orphan-closer lines: {len(r['orphans'])}")
    for idx, o, c, txt in r['orphans']:
        print(f"  L{idx} opens={o} closes={c} :: {txt}")
    print(f"verse citations: {len(r['verses'])}")
    for idx, v in r['verses']:
        print(f"  L{idx}: {v}")
    print()

print("TOTAL orphans:", sum(len(r['orphans']) for r in report.values()))
print("TOTAL verses:", sum(len(r['verses']) for r in report.values()))
