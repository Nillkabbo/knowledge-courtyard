#!/usr/bin/env python3
"""Seven Doors compliance fix for knowledge-craftsman (Task B + C)."""
import re

D = "/Users/md.rakibulhasan/knowledge-courtyard/knowledge-craftsman"

# ─── TASK B: strip orphaned trailing </div> on dialogue lines ───
def fix_orphans(fn):
    path = f"{D}/{fn}"
    lines = open(path).read().split("\n")
    fixed = 0
    for i, line in enumerate(lines):
        if (re.search(r'<div class="dialogue[^"]*">', line)
                and line.rstrip().endswith("</div></div>")):
            opens = len(re.findall(r"<div\b", line))
            closes = len(re.findall(r"</div>", line))
            if opens == 1 and closes == 2:  # verified orphan
                lines[i] = line.rstrip()[: -len("</div>")]
                fixed += 1
    open(path, "w").write("\n".join(lines))
    return fixed

total_b = 0
for fn in ["doors-1-5.js", "doors-6-10.js", "doors-11-13.js"]:
    n = fix_orphans(fn)
    total_b += n
    print(f"TASK B {fn}: stripped {n} orphan closers")
print(f"TASK B total: {total_b}")
assert total_b == 33, f"expected 33, got {total_b}"

# ─── TASK C: insert verse divs after the bn dialogue (inside template literal) ───
VERSE_BLOCKS = {
    "নিশ্চয় আমরা কুরআন নাজিল করেছি এবং নিশ্চয় আমরাই এর সংরক্ষক": (
        "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
        "নিশ্চয় আমরা কুরআন নাজিল করেছি এবং নিশ্চয় আমরাই এর সংরক্ষক।", "১৫:৯"),
    "তিনি মানুষকে শিখিয়েছেন বায়ান": (
        "خَلَقَ الْإِنْسَانَ ۝ عَلَّمَهُ الْبَيَانَ",
        "তিনি মানুষকে শিখিয়েছেন বায়ান — স্পষ্ট বাক্য।", "৫৫:৩-৪"),
    "তোমরা যাচাই না করে প্রতিটা খবর বিশ্বাস করো না": (
        "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا",
        "তোমরা যাচাই না করে প্রতিটা খবর বিশ্বাস করো না।", "৪৯:৬"),
    "যিনি কলমের মাধ্যমে শিখিয়েছেন": (
        "الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ",
        "যিনি কলমের মাধ্যমে শিখিয়েছেন। মানুষকে শিখিয়েছেন যা সে জানত না।", "৯৬:৪-৫"),
    "তোমরা সবাই আল্লাহর রশি দৃঢ়ভাবে ধরো": (
        "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا",
        "তোমরা সবাই আল্লাহর রশি দৃঢ়ভাবে ধরো, একসাথে।", "৩:১০৩"),
}

ATTR_STYLE = 'font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem'

def insert_verses(fn):
    path = f"{D}/{fn}"
    lines = open(path).read().split("\n")
    inserted = 0
    # iterate anchors in file order; collect insertions then apply bottom-up
    pend = []
    for anchor, (ar, bn, ref) in VERSE_BLOCKS.items():
        hit = next((i for i, l in enumerate(lines) if anchor in l and 'class="dialogue"' in l), None)
        if hit is None:
            continue
        window = "\n".join(lines[hit:hit + 3])
        if 'class="verse"' in window:
            continue
        block = (f'\n<div class="verse">{ar}</div>\n'
                 f'<div style="{ATTR_STYLE}">"{bn}" — কুরআন {ref}</div>')
        pend.append((hit + 1, block))  # right after bn dialogue, before en line
        inserted += 1
    for at, block in sorted(pend, reverse=True):
        lines.insert(at, block)
    open(path, "w").write("\n".join(lines))
    return inserted

total_c = 0
for fn in ["doors-1-5.js", "doors-6-10.js"]:
    n = insert_verses(fn)
    total_c += n
    print(f"TASK C {fn}: inserted {n} verse blocks")
print(f"TASK C total: {total_c}")

print("DONE")
