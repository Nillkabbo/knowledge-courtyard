import re
tot = 0
for fn in ['doors-1-5.js', 'doors-6-10.js', 'doors-11-13.js']:
    for i, l in enumerate(open(fn).read().split('\n'), 1):
        if re.search(r'<div class="dialogue[^"]*">', l) and l.rstrip().endswith('</div></div>'):
            o = len(re.findall(r'<div\b', l))
            c = len(re.findall(r'</div>', l))
            if o == 1 and c == 2:
                print(fn, i)
                tot += 1
print('remaining orphans:', tot)
