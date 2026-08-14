#!/usr/bin/env python3
import re, subprocess, json, sys

D = "/Users/md.rakibulhasan/knowledge-courtyard/knowledge-craftsman"
files = ["doors-1-5.js", "doors-6-10.js", "doors-11-13.js"]

js = ""
for f in files:
    js += open(f"{D}/{f}").read() + "\n"

r2 = subprocess.run(["node", "-e",
    f"global.doors=[];{js}\nrequire('fs').writeFileSync('{D}/doors_dump.json', JSON.stringify(doors))"],
    capture_output=True, text=True)
if r2.stderr:
    print("EVAL ERR", r2.stderr[:800]); sys.exit(1)

doors = json.load(open(f"{D}/doors_dump.json"))
print("doors loaded:", [d["num"] for d in doors])
for d in doors:
    print(d["num"], "senior:", bool(d.get("senior")), "spirit:", bool(d.get("spirit")),
          "qen:", bool(d.get("recall", {}).get("qen")))

VOID = {"br","hr","img","input","meta","link","area","base","col","embed","source","track","wbr","stop","circle","path","line","rect","text","use","polyline","polygon"}

def analyze(story):
    stack, orphans = [], []
    for m in re.finditer(r'<(/?)([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|\'[^\']*\'|[^>"\'])*)>', story):
        close, tag, attrs = m.group(1), m.group(2).lower(), m.group(3)
        if tag in VOID or attrs.rstrip().endswith("/"):
            continue
        if close:
            if stack and stack[-1][0] == tag:
                stack.pop()
            else:
                names = [t for t, _, _ in stack]
                if tag in names:
                    orphans.append(("MISNESTED", tag, m.start()))
                    while stack and stack[-1][0] != tag:
                        t, _, pos = stack.pop()
                        orphans.append(("UNCLOSED", t, pos))
                    if stack: stack.pop()
                else:
                    orphans.append(("ORPHAN-CLOSER", tag, m.start()))
        else:
            stack.append((tag, m.start()))
    for t, pos in stack:
        orphans.append(("UNCLOSED-OPEN", t, pos))
    return orphans

total = 0
for d in doors:
    orphans = analyze(d["story"])
    if orphans:
        total += len(orphans)
        print(f"door {d['num']}: {len(orphans)} issues: {orphans[:6]}")
print("TOTAL tag issues:", total)
