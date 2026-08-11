doors.push({
  num: 6,
  icon: "🕊️",
  color: "#8b5cf6",
  name: "কবুতরের খোঁয়াড়",
  subtitle: "The Pigeonhole Principle",
  tech: "Pigeonhole Principle — Dirichlet (1834), hash collisions, birthday threshold, Monte Carlo verification",
  spirit: "হিসাব — গণনা, সীমাবদ্ধ স্থানে অধিক বস্তু",
  secret: "n+১টি কবুতর nটি খোঁয়াড়ে — অন্তত একটি খোঁয়াড়ে দুটি কবুতর। এটাই পিজিওনহোল নীতি — সহজ কিন্তু অসম্ভব ফল দেয়। ৩৬৭ জন মানুষে অন্তত দুজনের জন্মদিন মিলবে — কারণ ৩৬৬ দিন (leap year)।",
  recall: {
    q: " পিজিওনহোল নীতি কী? একটি বাস্তব প্রয়োগ দাও।",
    qen: "What is the Pigeonhole Principle? Give a real-world application.",
    a: "n+১টি বস্তু nটি বাক্সে হলে অন্তত একটি বাক্সে দুটি। প্রয়োগ: hash collision — ২³²+১টি key হলে collision অনিবার্য।",
    aen: "If n+1 objects go into n boxes, at least one box has 2. Application: hash collision — with 2^32+1 keys, collision is guaranteed."
  },
  story: `<p class="scene-setting">বার্লিন, ১৮৩৪। Peter Gustav Lejeune Dirichlet একটি সহজ কিন্তু শক্তিশালী নীতি লিখছেন। তার নাম দিলেন Schubfachprinzip — "ড্রয়ার নীতি।" সহজ ভাষায়: ১০টি মোজা ৯টি ড্রয়ারে রাখলে অন্তত একটি ড্রয়ারে দুটি মোজা। এটাই পিজিওনহোল নীতি — তুচ্ছ মনে হয় কিন্তু অসম্ভব ফল দেয়।</p>
<p class="scene-setting en">Berlin, 1834. Peter Gustav Lejeune Dirichlet writes a simple but powerful principle. He calls it Schubfachprinzip — "drawer principle." Simply: 10 socks in 9 drawers means at least one drawer has 2 socks. This is the pigeonhole principle — seems trivial but yields impossible results.</p>

<div class="dialogue"><strong>গণনা-কারিগর সাবির:</strong> নাদিয়া (Door ৫) তোমাকে গোনা শিখিয়েছেন। এখন দেখো — গোনা ছাড়াও একটি শক্তিশালী নীতি। ১৩ জন মানুষ এক ঘরে — অন্তত দুজনের জন্ম মাস একই! কারণ মাস ১২টি, মানুষ ১৩টি। প্রমাণ লাগে না — সরল যুক্তি। কিন্তু এই নীতি দিয়ে hash collision প্রমাণ করা যায় — ২³²+১টি key, ২³²টি bucket — collision অনিবার্য!</div>
<div class="dialogue en"><strong>Counting Artisan Sabir:</strong> Nadia (Door 5) taught you counting. Now see — a powerful principle beyond counting. 13 people in a room — at least two share a birth month! 12 months, 13 people. No proof needed — pure logic. But this principle proves hash collisions — 2^32+1 keys, 2^32 buckets — collision inevitable!</div>

<div class="callout info"><span class="co-icon">🕊️</span><div><strong>পিজিওনহোল নীতি (Dirichlet ১৮৩৪):</strong><br>
<strong>সহজ রূপ:</strong> n+১টি বস্তু nটি বাক্সে → কোনো না কোনো বাক্সে ≥ ২টি<br>
<strong>সাধারণ রূপ:</strong> Nটি বস্তু kটি বাক্সে → কোনো না কোনো বাক্সে ≥ ⌈N/k⌉টি<br><br>
<strong>বাস্তব প্রয়োগ:</strong><br>
৩৬৭ জন মানুষ → অন্তত দুজনের জন্মদিন মিলবে (৩৬৬ দিন)<br>
৫ জনের হাতে ৩টি আপেল → কেউ ২টি পেয়েছে<br>
MD5 hash (১২৮-bit) → ২¹²৮+১টি input হলে collision অনিবার্য</div></div>

<div class="code-block"># ── STEP 1: The Pigeonhole Principle ──
# If you have more pigeons than holes, at least two pigeons share a hole.

pigeonhole = """
THE PIGEONHOLE PRINCIPLE (Dirichlet's Principle):

SIMPLE FORM:
  If n items are put into m containers and n > m,
  then at least one container has 2+ items.

  Example: 367 people, 366 possible birthdays (including Feb 29)
  → At least 2 people share a birthday. Guaranteed.

GENERALIZED FORM:
  If n items in m containers:
  → At least one container has ⌈n/m⌉ items (ceiling)

  Example: 100 people, 12 months
  → At least ⌈100/12⌉ = 9 people born in the same month

WHY IT WORKS:
  Each container can hold at most ⌈n/m⌉ − 1 items without exceeding.
  Total: m × (⌈n/m⌉ − 1) < n
  → Contradiction! At least one must have ⌈n/m⌉.

THE PRINCIPLE IS "OBVIOUS" BUT POWERFUL:
  → Proves existence without finding the example
  → Non-constructive proof technique
  → Used in number theory, combinatorics, CS
"""

print(pigeonhole)

# PYTHON: Pigeonhole verification:
ph_code = """
# Pigeonhole: n items > m containers → collision guaranteed
def must_collide(n_objects, n_boxes):
    return n_objects > n_boxes

print(must_collide(367, 366))   # True — birthday collision
print(must_collide(13, 12))     # True — 13 people, 12 months
print(must_collide(5, 10))      # False — enough boxes

# Minimum in a container:
import math
def min_in_some_container(n, m):
    return math.ceil(n / m)

print(min_in_some_container(100, 12))  # 9 (at least 9 share a month)
print(min_in_some_container(1000, 10)) # 100
"""

print(ph_code)</div>

<div class="code-block"># ── STEP 2: Classic applications ──
# Surprising results from a simple principle.

applications = """
CLASSIC PIGEONHOLE APPLICATIONS:

1. BIRTHDAY PROBLEM:
   367 people → at least 2 share a birthday (366 possible days)

2. HAIR COUNT:
   Human head has at most ~150,000 hairs.
   Dhaka has 20+ million people.
   → At least 2 people in Dhaka have EXACT same number of hairs!
   (Without finding them — non-constructive proof)

3. SUM OF SUBSET:
   Given n+1 integers from {1, 2, ..., 2n}:
   → At least one pair sums to 2n+1
   → Pairs: (1,2n), (2,2n-1), ..., (n,n+1) → n pairs
   → n+1 numbers, n pairs → pigeonhole → two in same pair

4. DIVISIBLE SUBSEQUENCE:
   From any n integers, there's a consecutive subsequence
   whose sum is divisible by n.
   (Uses n remainders as pigeonholes)

5. MANHATTAN DISTANCE:
   5 points with integer coordinates on a grid:
   → At least one pair has midpoint with integer coordinates
   (4 parity combinations: (odd,odd), (odd,even), (even,odd), (even,even))

6. RAMSEY THEORY:
   In any party of 6 people:
   → At least 3 mutual friends OR 3 mutual strangers
   (Ramsey number R(3,3) = 6)
"""

print(applications)

# PYTHON: Subset sum divisible by n:
subset_code = """
# PROVE: any n+1 numbers from {1,...,2n} has a pair summing to 2n+1
import random

def has_complementary_pair(nums, target=2*len(nums)+1):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return (nums[i], nums[j])
    return None

# Test many random sets:
n = 10  # choose 11 numbers from {1,...,20}
for _ in range(1000):
    nums = random.sample(range(1, 2*n+1), n+1)
    pair = has_complementary_pair(nums, 2*n+1)
    assert pair is not None, f"FAILED: {nums}"
print("Pigeonhole verified: always find complementary pair ✅")

# Hair count example:
max_hairs = 150000
population = 20_000_000  # Dhaka
print(f"At least {population // max_hairs} people in Dhaka share exact hair count")
# At least 133 people share exact hair count!
"""

print(subset_code)</div>

<div class="code-block"># ── STEP 3: Hash collisions (CS application) ──
# The pigeonhole principle in action.

hash_collisions = """
HASH COLLISIONS (Pigeonhole in CS):

A hash function maps ARBITRARY input to FIXED-SIZE output.
  → Input space: infinite
  → Output space: 2^bits (finite)
  → Pigeonhole: collisions MUST exist!

COLLISION GUARANTEES:
  32-bit hash: 2^32 = 4.3 billion outputs
    → After ~65,536 inputs (2^16), 50% chance of collision
    → Birthday paradox: √(2^32) ≈ 65,536

  64-bit hash: 2^64 outputs
    → After ~4.3 billion inputs, 50% collision chance

  128-bit hash (MD5): 2^128 outputs
    → After ~2^64 inputs, 50% collision (impractical)
    → MD5 BROKEN: collisions found in seconds (structural weakness)

  256-bit hash (SHA-256): 2^256 outputs
    → Astronomically safe
    → Used in Bitcoin, TLS, digital signatures

THE BIRTHDAY BOUND:
  For n-bit hash: collision after ~2^(n/2) hashes
  → 32-bit: 2^16 ≈ 65K
  → 64-bit: 2^32 ≈ 4.3B
  → 128-bit: 2^64 ≈ 1.8×10^19 (practically unbreakable)
"""

print(hash_collisions)

# PYTHON: Hash collision simulation:
hash_code = """
import hashlib

# Find collision in truncated hash (8-bit for demo):
def find_collision_8bit():
    seen = {}  # hash → input
    for i in range(1000):
        h = hashlib.md5(str(i).encode()).digest()[0]  # first byte (0-255)
        if h in seen:
            return seen[h], i, h  # collision found!
        seen[h] = i
    return None

result = find_collision_8bit()
print(f"8-bit collision: inputs {result[0]} and {result[1]} both hash to {result[2]:08b}")
# Collision found in ~16 inputs (birthday: √256 = 16)

# Python's built-in hash():
# Find hash collision for integers:
seen = {}
for i in range(100000):
    h = hash(i) & 0xFFFFFFFF  # 32-bit
    if h in seen:
        print(f"Collision: {seen[h]} and {i} both hash to {h}")
        break
    seen[h] = i
"""

print(hash_code)</div>

<div class="code-block"># ── STEP 4: Ramsey theory ──
# Order emerges from chaos when n is large enough.

ramsey = """
RAMSEY THEORY:

"Complete disorder is impossible." — Ramsey

In any large enough structure, patterns are UNAVOIDABLE.

RAMSEY NUMBERS R(s, t):
  The minimum n such that any graph of n vertices contains:
  → a clique of size s, OR
  → an independent set of size t

CLASSIC: R(3, 3) = 6
  In any party of 6 people:
  → At least 3 mutual friends (all know each other), OR
  → At least 3 mutual strangers (none know each other)

  Proof: Pick any person P. P knows or doesn't know each of the other 5.
  → By pigeonhole: P knows ≥3 OR doesn't know ≥3.
  → If P knows 3: any two of those know each other → clique of 3 friends.
    Otherwise: those 3 are mutual strangers.

KNOWN RAMSEY NUMBERS:
  R(3,3) = 6
  R(4,4) = 18
  R(5,5) = between 43 and 48 (exact value UNKNOWN!)
  R(6,6) = between 102 and 165 (UNKNOWN!)

  "Imagine an alien force demands R(5,5) or they'll destroy Earth.
   We could find it in a year. If they demand R(6,6), prepare for war."
   — Paul Erdős

APPLICATIONS:
  → Network design (guaranteed substructures)
  → Combinatorics (pattern emergence)
  → Logic (unavoidable regularity)
"""

print(ramsey)

# PYTHON: Ramsey R(3,3) = 6 verification:
ramsey_code = """
import itertools
import random

def has_clique_or_independent_set(graph, n, k=3):
    \"\"\"Check if graph has clique or independent set of size k.\"\"\"
    nodes = list(range(n))
    for subset in itertools.combinations(nodes, k):
        # Check if clique (all connected):
        is_clique = all(graph[a][b] for a, b in itertools.combinations(subset, 2))
        if is_clique:
            return ("clique", subset)
        # Check if independent set (none connected):
        is_indep = all(not graph[a][b] for a, b in itertools.combinations(subset, 2))
        if is_indep:
            return ("independent", subset)
    return None

# Test: every 6-person party has 3 mutual friends or strangers
n = 6
for trial in range(10000):
    # Random graph: edge = friendship
    graph = [[False]*n for _ in range(n)]
    for i in range(n):
        for j in range(i+1, n):
            graph[i][j] = graph[j][i] = random.random() < 0.5

    result = has_clique_or_independent_set(graph, n)
    assert result is not None, "R(3,3) violated!"

print("R(3,3)=6 verified: always has 3-clique or 3-independent set ✅")
"""

print(ramsey_code)</div>

<div class="code-block"># ── STEP 5: Pigeonhole in algorithms ──
# The principle behind many correctness proofs.

algo_pigeonhole = """
PIGEONHOLE IN ALGORITHMS:

1. HASH TABLES:
  → Fixed-size table, variable input → collisions guaranteed
  → Load factor: n/m (items/slots)
  → Need collision resolution (chaining, open addressing)

2. BLOOM FILTERS:
  → Probabilistic data structure
  → Multiple hash functions into bit array
  → False positives possible (pigeonhole), no false negatives

3. COUNTING SORT (O(n+k)):
  → Works because keys are in limited range {0, ..., k}
  → Uses pigeonhole: each key has a "slot"
  → Faster than comparison sort when k = O(n)

4. CYCLE DETECTION:
  → Floyd's algorithm: in a sequence of n+1 values from {0,...,n}
  → Pigeonhole → at least one repeat → cycle exists

5. LOSSLESS COMPRESSION:
  → Can't compress ALL files (pigeonhole: 2^n files of size n,
    but only 2^0 + 2^1 + ... + 2^(n-1) < 2^n shorter files)
  → Some files MUST get larger or stay same size

6. PROBABILISTIC METHOD:
  → "If objects > containers, collision exists"
  → Used to prove existence in randomized algorithms

7. PERFECT HASHING:
  → Two-level hashing: first level distributes, second level avoids collisions
  → O(1) lookup guaranteed (no collisions in second level)
"""

print(algo_pigeonhole)

# PYTHON: Floyd's cycle detection:
floyd_code = """
# Floyd's Tortoise and Hare (cycle detection):
# If a linked list has n nodes, any path of n+1 steps must revisit a node.

def has_cycle(head):
    \"\"\"Detect cycle using Floyd's algorithm (O(1) space).\"\"\"
    slow = fast = head
    while fast and fast.next:
        slow = slow.next        # moves 1 step
        fast = fast.next.next   # moves 2 steps
        if slow == fast:        # they meet → cycle!
            return True
    return False

# Pigeonhole argument:
# After n+1 steps, at least one node visited twice → cycle.
# Floyd's finds it in O(n) time, O(1) space.
"""

print(floyd_code)</div>

<div class="code-block"># ── STEP 6: Pigeonhole best practices ──
# Apply the principle effectively.

best_practices = [
    "If n items > m containers → collision is guaranteed",
    "Generalized: at least ⌈n/m⌉ items in some container",
    "Birthday bound: √(2^n) hashes for 50% collision",
    "Hash collisions are UNAVOIDABLE (finite output space)",
    "Use SHA-256 for security (2^128 collision resistance)",
    "Ramsey theory: patterns emerge in large structures",
    "Counting sort works because keys have limited range",
    "Cycle detection: n+1 steps in n states → cycle",
    "Lossless compression can't work for all files",
    "Non-constructive: proves existence without finding",
    "Perfect hashing: two-level to eliminate collisions",
    "Population > attribute range → duplicates exist",
    "Erdős: R(5,5) solvable, R(6,6) very hard",
    "Bloom filters: false positives OK, false negatives not",
    "Pigeonhole is about COUNTING, not constructing",
]

print("PIGEONHOLE BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Principle        │ Result                          │
# ├──────────────────┼──────────────────────────────────┤
# │ n > m            │ At least 2 share a container    │
# │ ⌈n/m⌉            │ Min items in some container     │
# │ 2^16 hashes      │ 50% collision (32-bit)          │
# │ 2^32 hashes      │ 50% collision (64-bit)          │
# │ R(3,3) = 6       │ 3 friends or 3 strangers        │
# │ R(4,4) = 18      │ 4 friends or 4 strangers        │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="verse">وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং প্রতিটি কিছু আমরা একটি স্পষ্ট অভিলেখে গণনা করেছি।" — কুরআন ৩৬:১২</div>

<p class="scene-setting">"আহসায়নাহু" — আমরা গণনা করেছি। পিজিওনহোল নীতি সেই গণনার শক্তি — যখন বস্তুর সংখ্যা স্থানের চেয়ে বেশি, মিল অনিবার্য। হিসাব — প্রতিটি কিছু গণনায় ধরা আছে। কোনো কিছুই হারিয়ে যায় না।</p>
<p class="scene-setting en">"Ahsaynahu" — We have counted. The pigeonhole principle is the power of that counting — when objects exceed space, collision is inevitable. Hisab — everything is accounted for. Nothing is lost.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৬ (Cryptography) Door ৩ (Hash):</strong> hash collision = পিজিওনহোল! ২¹²৮+১টি input হলে MD5 collision অনিবার্য। Book ৪৯ (Probability) Door ৫: birthday paradox — এটাই পিজিওনহোল-এর সম্ভাবনা সংস্করণ।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🕊️ পিজিওনহোল নীতি: বেশি বস্তু, কম বাক্স</text>
  <rect x="30" y="45" width="70" height="70" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="65" y="62" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">খোঁয়াড় ১</text>
  <circle cx="50" cy="85" r="9" fill="#22d3ee" stroke="#7dd3fc" stroke-width="1.5"/>
  <circle cx="80" cy="95" r="9" fill="#f87171" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="65" y="130" text-anchor="middle" fill="#fca5a5" font-size="10">২টি! ≥ ⌈N/k⌉</text>
  <rect x="120" y="45" width="70" height="70" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="155" y="62" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">খোঁয়াড় ২</text>
  <circle cx="155" cy="90" r="9" fill="#22c55e" stroke="#4ade80" stroke-width="1.5"/>
  <text x="155" y="130" text-anchor="middle" fill="#4ade80" font-size="10">১টি</text>
  <rect x="210" y="45" width="70" height="70" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="245" y="62" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">খোঁয়াড় ৩</text>
  <circle cx="245" cy="90" r="9" fill="#fbbf24" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="245" y="130" text-anchor="middle" fill="#fcd34d" font-size="10">১টি</text>
  <rect x="30" y="155" width="430" height="28" rx="6" fill="#0f172a" stroke="#22c55e" stroke-width="1"/>
  <text x="245" y="173" text-anchor="middle" fill="#4ade80" font-size="8">৪টি কবুতর, ৩টি খোঁয়াড় → অন্তত এক খোঁয়াড়ে ২টি (Dirichlet 1834)</text>
  <rect x="320" y="40" width="245" height="100" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="442" y="60" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">বাস্তব প্রয়োগ</text>
  <text x="335" y="80" fill="#e2e8f0" font-size="8">• ৩৬৭ জন → ২ জনের জন্মদিন মিলবে</text>
  <text x="335" y="97" fill="#e2e8f0" font-size="8">• ১৩ জন → ২ জনের জন্ম মাস মিলবে</text>
  <text x="335" y="114" fill="#e2e8f0" font-size="8">• 2³²+1 keys → hash collision নিশ্চিত</text>
  <text x="335" y="131" fill="#fca5a5" font-size="8">• Birthday threshold: √N ~= collision</text>
  <rect x="30" y="195" width="535" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="297" y="213" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">সাধারণ রূপ: Nটি বস্তু kটি বাক্সে → কোনো বাক্সে অন্তত ⌈N/k⌉টি</text>
  <text x="297" y="228" text-anchor="middle" fill="#cbd5e1" font-size="10">সহজ নীতি কিন্তু অসম্ভব ফল — hash collision, birthday paradox, এমনকি গাণিতিক উপপাদ্য প্রমাণ</text>
</svg>
</div>
<div class="svg-caption">চিত্র: পিজিওনহোল নীতি — কবুতরের সংখ্যা খোঁয়াড়ের চেয়ে বেশি হলে অন্তত একটি খোঁয়াড়ে একাধিক কবুতর থাকবে। সহজ নীতি কিন্তু hash collision ও birthday paradox-এর ভিত্তি।</div>

<div class="secret-box">🕊️ <strong>পিজিওনহোল: বেশি বস্তু, কম বাক্স — মিল অনিবার্য।</strong> সহজ নীতি কিন্তু অসম্ভব ফল। hash collision, birthday paradox, এমনকি সনাতন গণিতের উপপাদ্য — সব এর উপর নির্ভর। কিন্তু বস্তু শুধু বাক্সে থাকে না — তারা সংযুক্ত হয়। সেই সংযোগের জগত — পরের দরজায়।</div>`,
  senior: {
    title: "Pigeonhole Principle এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Dirichlet (1834)</td><td>Schubfachprinzip — ড্রয়ার নীতি</td></tr>
<tr><td class="hl">সহজ রূপ</td><td>n+১ বস্তু n বাক্সে → এক বাক্সে ≥২</td></tr>
<tr><td class="hl">সাধারণ রূপ</td><td>N বস্তু k বাক্সে → ⌈N/k⌉</td></tr>
<tr><td class="hl">Birthday Threshold</td><td>√N — collision শুরুর সীমা</td></tr>
<tr><td class="hl">Hash Collision</td><td>২³²+১ keys → নিশ্চিত collision</td></tr>
<tr><td class="hl">Birthday Paradox</td><td>২৩ জনে ৫০% — C(২৩,২)=২৫৩ জোড়া</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "🕸️",
  color: "#8b5cf6",
  name: "সংযোগের জাল",
  subtitle: "The Web of Connections",
  tech: "Graph Theory — Euler (1736 Königsberg), BFS/DFS, topological sort, DAG, networkx",
  spirit: "সিলসিলা — শৃঙ্খল, নোড থেকে নোডে সংযোগ",
  secret: "গ্রাফ = নোড + এজ। বন্ধুদের সমাজ, রাস্তার নকশা, ওয়েব পেজের লিংক — সব গ্রাফ। BFS দেখে প্রশস্ততা, DFS গভীরতা। Topological sort দেখে ক্রম। Euler প্রথম এটা করেছিলেন — কোনিগসবার্গের সেতু নিয়ে।",
  recall: {
    q: " BFS এবং DFS-এর পার্থক্য কী? DAG কী?",
    qen: "What is the difference between BFS and DFS? What is a DAG?",
    a: "BFS = প্রশস্ততা — প্রথমে কাছের সব নোড, তারপর দূরে। DFS = গভীরতা — এক শাখায় শেষ পর্যন্ত। DAG = Directed Acyclic Graph — কোনো চক্র নেই, topological sort সম্ভব।",
    aen: "BFS = breadth-first — visit all near nodes first. DFS = depth-first — go deep in one branch. DAG = Directed Acyclic Graph — no cycles, topological sort possible."
  },
  story: `<p class="scene-setting">কোনিগসবার্গ, ১৭৩৬। একটি নদী, দুটি দ্বীপ, সাতটি সেতু। প্রশ্ন: কোনো সেতু দুবার না পেরিয়ে সব সেতু পার হওয়া যায় কি? Leonhard Euler উত্তর দিলেন: না। কিন্তু তার প্রমাণ একটি নতুন গাণিতিক জগতের জন্ম দিল — গ্রাফ তত্ত্ব। নোড = স্থান, এজ = সেতু। এই সহজ মডেল থেকে — সামাজিক নেটওয়ার্ক, গুগলের PageRank, GPS রাস্তা — সব নির্মিত।</p>
<p class="scene-setting en">Königsberg, 1736. A river, two islands, seven bridges. Question: can you cross all bridges exactly once? Leonhard Euler answered: no. But his proof birthed a new mathematical world — graph theory. Nodes = places, edges = bridges. From this simple model — social networks, Google PageRank, GPS routes — all built.</p>

<div class="dialogue"><strong>জাল-নির্মাতা তামির:</strong> সাবির (Door ৬) তোমাকে গোনা শিখিয়েছেন। কিন্তু বস্তু শুধু বাক্সে থাকে না — তারা সংযুক্ত হয়! তোমার LedgerPilot-এ — ইউজার → অ্যাকাউন্ট → লেনদেন → ক্যাটেগরি। এটি একটি গ্রাফ! প্রতিটি টেবিল নোড, প্রতিটি foreign key এজ। BFS দিয়ে খুঁজো — এই ইউজারের সব লেনদেন কী? DFS দিয়ে গভীরে যাও — এই লেনদেন কোন ক্যাটেগরিতে?</div>
<div class="dialogue en"><strong>Web Builder Tamir:</strong> Sabir (Door 6) taught you counting. But objects don't just sit in boxes — they connect! Your LedgerPilot: User → Account → Transaction → Category. This is a graph! Every table a node, every foreign key an edge. BFS: find all transactions for a user. DFS: go deep — which category does this transaction belong to?</div>

<div class="code-block"># ── STEP 1: Graph theory fundamentals ──
# Graphs model relationships — the most versatile data structure.

graph_basics = """
GRAPH THEORY:

A GRAPH G = (V, E) consists of:
  V = set of VERTICES (nodes)
  E = set of EDGES (connections between vertices)

EXAMPLE:
  G = ({A, B, C, D}, {(A,B), (B,C), (C,D), (A,D)})
  → 4 vertices, 4 edges

TYPES OF GRAPHS:
  UNDIRECTED: edges have no direction (A—B = B—A)
  DIRECTED (digraph): edges have direction (A→B ≠ B→A)
  WEIGHTED: edges have weights/costs (distance, time)
  UNWEIGHTED: all edges equal
  SIMPLE: no self-loops, no multi-edges
  MULTI: multiple edges between same pair
  CYCLIC: contains cycles
  ACYCLIC: no cycles (DAG = Directed Acyclic Graph)

GRAPH TERMINOLOGY:
  Degree: number of edges at a vertex
  Path: sequence of vertices connected by edges
  Cycle: path that starts and ends at same vertex
  Connected: path exists between any two vertices
  Component: maximal connected subgraph
  Complete graph (K_n): every vertex connected to every other

SPECIAL GRAPHS:
  TREE: connected, acyclic (n vertices, n−1 edges)
  BIPARTITE: vertices split into 2 groups, edges only between groups
  COMPLETE (K_n): every pair connected (|E| = n(n-1)/2)
  GRID: vertices on a 2D grid
"""

print(graph_basics)

# PYTHON: Graph basics with networkx:
graph_code = """
import networkx as nx

# Create a graph:
G = nx.Graph()
G.add_edges_from([('A','B'), ('B','C'), ('C','D'), ('A','D')])

print(f"Vertices: {list(G.nodes())}")     # [A, B, C, D]
print(f"Edges: {list(G.edges())}")         # [(A,B), (A,D), (B,C), (C,D)]
print(f"Degree of A: {G.degree('A')}")     # 2
print(f"Is connected: {nx.is_connected(G)}")  # True

# Directed graph:
DG = nx.DiGraph()
DG.add_edge('User', 'Account')
DG.add_edge('Account', 'Transaction')
print(f"Is DAG: {nx.is_directed_acyclic_graph(DG)}")  # True
"""

print(graph_code)</div>

<div class="code-block"># ── STEP 2: Graph representations ──
# How to store graphs in memory.

representations = """
GRAPH REPRESENTATIONS:

1. ADJACENCY MATRIX:
   n×n matrix where M[i][j] = 1 if edge (i,j) exists, else 0.
   → Space: O(n²)
   → Check edge: O(1)
   → Iterate neighbors: O(n)
   → Good for: dense graphs

   Example: A-B, B-C, C-D, A-D
       A  B  C  D
   A [  0  1  0  1 ]
   B [  1  0  1  0 ]
   C [  0  1  0  1 ]
   D [  1  0  1  0 ]

2. ADJACENCY LIST:
   Array of lists: adj[i] = list of neighbors of vertex i.
   → Space: O(V + E)
   → Check edge: O(degree)
   → Iterate neighbors: O(degree)
   → Good for: sparse graphs (most real graphs)

   Example:
   A: [B, D]
   B: [A, C]
   C: [B, D]
   D: [A, C]

3. EDGE LIST:
   List of (u, v) pairs.
   → Space: O(E)
   → Check edge: O(E)
   → Good for: algorithms that process edges (Kruskal's)

WHEN TO USE WHICH:
  Dense graph (E ≈ V²): adjacency matrix
  Sparse graph (E ≈ V): adjacency list (usually better)
  Edge-processing algorithms: edge list
"""

print(representations)

# PYTHON: All three representations:
repr_code = """
# 1. Adjacency matrix:
def adj_matrix(vertices, edges):
    n = len(vertices)
    idx = {v: i for i, v in enumerate(vertices)}
    M = [[0]*n for _ in range(n)]
    for u, v in edges:
        M[idx[u]][idx[v]] = 1
        M[idx[v]][idx[u]] = 1  # undirected
    return M

# 2. Adjacency list:
def adj_list(vertices, edges):
    adj = {v: [] for v in vertices}
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)  # undirected
    return adj

# 3. Edge list:
def edge_list(edges):
    return list(edges)

# Example:
V = ['A', 'B', 'C', 'D']
E = [('A','B'), ('B','C'), ('C','D'), ('A','D')]

print("Matrix:", adj_matrix(V, E))
print("List:", adj_list(V, E))
print("Edges:", edge_list(E))
"""

print(repr_code)</div>

<div class="code-block"># ── STEP 3: Graph traversal (BFS and DFS) ──
# Visit all vertices systematically.

traversal = """
GRAPH TRAVERSAL:

1. BREADTH-FIRST SEARCH (BFS):
   → Visit all neighbors at current depth before going deeper
   → Uses a QUEUE (FIFO)
   → Finds SHORTEST PATH in unweighted graphs
   → Time: O(V + E)

   BFS from A:
   Visit A → enqueue A
   Visit B, D (neighbors of A) → enqueue
   Visit C (neighbor of B) → enqueue
   Order: A, B, D, C

2. DEPTH-FIRST SEARCH (DFS):
   → Go as deep as possible, then backtrack
   → Uses a STACK (LIFO) or recursion
   → Good for: cycle detection, topological sort, connectivity
   → Time: O(V + E)

   DFS from A:
   Visit A → go to B → go to C → go to D → backtrack
   Order: A, B, C, D

WHEN TO USE WHICH:
  BFS: shortest path, level-order, closest neighbors
  DFS: cycle detection, topological sort, maze solving, connectivity

PYTHON (networkx):
  nx.bfs_edges(G, source)  # breadth-first
  nx.dfs_edges(G, source)  # depth-first
"""

print(traversal)

# PYTHON: BFS and DFS:
traversal_code = """
from collections import deque

# BFS (iterative, using queue):
def bfs(graph, start):
    visited = set()
    queue = deque([start])
    order = []

    while queue:
        vertex = queue.popleft()
        if vertex not in visited:
            visited.add(vertex)
            order.append(vertex)
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    queue.append(neighbor)
    return order

# DFS (recursive):
def dfs(graph, vertex, visited=None, order=None):
    if visited is None:
        visited = set()
        order = []
    visited.add(vertex)
    order.append(vertex)
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited, order)
    return order

# Example graph:
graph = {
    'A': ['B', 'D'],
    'B': ['A', 'C'],
    'C': ['B', 'D'],
    'D': ['A', 'C'],
}

print("BFS from A:", bfs(graph, 'A'))  # ['A', 'B', 'D', 'C']
print("DFS from A:", dfs(graph, 'A'))  # ['A', 'B', 'C', 'D']

# BFS finds shortest path (unweighted):
def shortest_path(graph, start, end):
    queue = deque([(start, [start])])
    visited = {start}
    while queue:
        vertex, path = queue.popleft()
        for neighbor in graph[vertex]:
            if neighbor == end:
                return path + [neighbor]
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    return None  # no path

print("Shortest A→C:", shortest_path(graph, 'A', 'C'))  # ['A', 'B', 'C']
"""

print(traversal_code)</div>

<div class="code-block"># ── STEP 4: Shortest path algorithms ──
# Find the shortest route between vertices.

shortest = """
SHORTEST PATH ALGORITHMS:

1. BFS (unweighted graphs):
   → O(V + E)
   → Finds shortest path when all edges have equal weight

2. DIJKSTRA'S ALGORITHM (non-negative weights):
   → O((V + E) log V) with priority queue
   → Finds shortest path from source to ALL vertices
   → Greedy: always pick nearest unvisited vertex
   → CANNOT handle negative weights

3. BELLMAN-FORD (handles negative weights):
   → O(V × E)
   → Can detect negative-weight cycles
   → Slower than Dijkstra but more general

4. FLOYD-WARSHALL (all pairs shortest path):
   → O(V³)
   → Finds shortest path between ALL pairs
   → Uses dynamic programming

5. A* SEARCH (heuristic):
   → O(E) typical (with good heuristic)
   → Uses heuristic to guide search toward goal
   → Used in GPS navigation, game AI

REAL-WORLD APPLICATIONS:
  → GPS Navigation (Google Maps): Dijkstra/A*
  → Network routing (OSPF): Dijkstra
  → Social networks (degrees of separation): BFS
  → Currency arbitrage: Bellman-Ford (negative cycles)
"""

print(shortest)

# PYTHON: Dijkstra's algorithm:
dijkstra_code = """
import heapq

def dijkstra(graph, start):
    \"\"\"Shortest paths from start to all vertices (non-negative weights).\"\"\"
    dist = {v: float('inf') for v in graph}
    dist[start] = 0
    pq = [(0, start)]  # (distance, vertex)
    visited = set()

    while pq:
        d, u = heapq.heappop(pq)
        if u in visited:
            continue
        visited.add(u)

        for v, weight in graph[u]:
            new_dist = d + weight
            if new_dist < dist[v]:
                dist[v] = new_dist
                heapq.heappush(pq, (new_dist, v))

    return dist

# Example: weighted graph (adjacency list with weights):
graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('A', 4), ('D', 3)],
    'C': [('A', 2), ('D', 5), ('B', 1)],
    'D': [('B', 3), ('C', 5)],
}

print(dijkstra(graph, 'A'))
# {'A': 0, 'C': 2, 'B': 3, 'D': 6}
# Shortest: A→C→B→D = 2+1+3 = 6
"""

print(dijkstra_code)</div>

<div class="code-block"># ── STEP 5: Important graph problems ──
# Classic problems you'll encounter.

problems = """
CLASSIC GRAPH PROBLEMS:

1. SHORTEST PATH:
   → Dijkstra (non-negative), Bellman-Ford (negative)
   → GPS navigation, network routing

2. MINIMUM SPANNING TREE (MST):
   → Connect all vertices with minimum total edge weight
   → Algorithms: Kruskal's, Prim's
   → Applications: network design, clustering

3. TOPOLOGICAL SORT (DAG only):
   → Order vertices so edges go left to right
   → Applications: task scheduling, dependency resolution
   → Build systems (Make, npm), course prerequisites

4. CYCLE DETECTION:
   → Does the graph have a cycle?
   → DFS-based: O(V+E)
   → Deadlock detection, dependency cycles

5. CONNECTIVITY:
   → Is the graph connected? How many components?
   → Union-Find data structure
   → Network reliability

6. MAX FLOW / MIN CUT:
   → Maximum flow from source to sink
   → Ford-Fulkerson algorithm
   → Applications: bipartite matching, network capacity

7. GRAPH COLORING:
   → Color vertices so no adjacent vertices share color
   → Chromatic number: minimum colors needed
   → Applications: register allocation, scheduling

8. TRAVELING SALESMAN (TSP):
   → Shortest tour visiting all vertices
   → NP-hard: no polynomial solution known
   → Heuristics: nearest neighbor, simulated annealing

9. EULERIAN PATH/CIRCUIT:
   → Path that uses every edge exactly once
   → Exists iff exactly 0 or 2 vertices have odd degree
   → Königsberg bridges problem (Euler, 1736)

10. HAMILTONIAN PATH/CYCLE:
    → Path that visits every vertex exactly once
    → NP-complete (much harder than Eulerian)
"""

print(problems)

# PYTHON: Topological sort + cycle detection:
topo_code = """
from collections import deque

def topological_sort(graph, n):
    \"\"\"Kahn's algorithm for topological sort (DAG only).\"\"\"
    # Calculate in-degrees:
    in_degree = {v: 0 for v in range(n)}
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1

    # Start with vertices having 0 in-degree:
    queue = deque([v for v in range(n) if in_degree[v] == 0])
    result = []

    while queue:
        u = queue.popleft()
        result.append(u)
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    if len(result) != n:
        return None  # cycle detected!
    return result

# Example: course prerequisites
# 0→1, 0→2, 1→3, 2→3 (take 0 before 1, etc.)
graph = {0: [1, 2], 1: [3], 2: [3], 3: []}
print("Topological order:", topological_sort(graph, 4))
# [0, 1, 2, 3] or [0, 2, 1, 3]
"""

print(topo_code)</div>

<div class="code-block"># ── STEP 6: Graphs in real systems ──
# Graphs are everywhere in computing.

real_world = """
GRAPHS IN REAL SYSTEMS:

1. SOCIAL NETWORKS:
   → Vertices: people, Edges: friendships
   → Algorithms: friend suggestions, communities, influence
   → Facebook: billions of vertices, trillions of edges

2. WEB GRAPH:
   → Vertices: web pages, Edges: hyperlinks
   → Google PageRank: rank pages by link structure
   → Billions of vertices

3. KNOWLEDGE GRAPHS:
   → Vertices: entities (people, places, concepts)
   → Edges: relationships (born_in, works_for)
   → Google Knowledge Graph, Wikipedia

4. COMPUTER NETWORKS:
   → Vertices: computers/routers, Edges: connections
   → Routing: shortest path (Dijkstra)
   → Network topology analysis

5. DATABASES (foreign keys):
   → Vertices: tables, Edges: foreign keys
   → Join optimization, dependency analysis
   → Django models form a graph

6. COMPILERS:
   → AST: abstract syntax tree (graph)
   → Control flow graph, data flow graph
   → Optimization passes operate on graphs

7. ML / NEURAL NETWORKS:
   → Neural network = weighted graph
   → Neurons = vertices, connections = edges
   → Backpropagation = graph traversal

8. DEPENDENCY MANAGEMENT:
   → npm/pip packages form a DAG
   → Topological sort for install order
   → Cycle detection for circular dependencies

9. MAPS / GPS:
   → Vertices: intersections, Edges: roads
   → Shortest path: Dijkstra/A*
   → Google Maps, Uber routing

10. RECOMMENDATION SYSTEMS:
    → Bipartite graph: users ↔ items
    → Collaborative filtering
    → Netflix, Amazon recommendations
"""

print(real_world)

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Algorithm        │ Use Case                        │
# ├──────────────────┼──────────────────────────────────┤
# │ BFS              │ Shortest path (unweighted)      │
# │ DFS              │ Cycle detection, connectivity   │
# │ Dijkstra         │ Shortest path (weighted)        │
# │ Bellman-Ford     │ Negative weights                │
# │ Floyd-Warshall   │ All pairs shortest path         │
# │ Kruskal/Prim     │ Minimum spanning tree           │
# │ Topological sort │ DAG ordering (dependencies)    │
# │ Union-Find       │ Connectivity, components        │
# │ A*               │ GPS, game AI (heuristic)       │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout info"><span class="co-icon">🕸️</span><div><strong>গ্রাফের প্রকার:</strong><br>
<strong>Directed (তীরযুক্ত):</strong> এজের দিক আছে — A → B মানে A থেকে B<br>
<strong>Undirected (দিকহীন):</strong> দিক নেই — A — B উভয় দিক<br>
<strong>DAG:</strong> Directed + Acyclic — চক্র নেই → topological sort সম্ভব<br>
<strong>Tree:</strong> বিশেষ গ্রাফ — একটি root, কোনো চক্র নেই, প্রতিটি নোডে একটি পথ<br>
<strong>Complete:</strong> প্রতিটি নোড প্রতিটির সাথে সংযুক্ত — Kₙ</div></div>

<div class="verse">وَالَّذِينَ يَصِلُونَ مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং যারা সংযুক্ত রাখে যা আল্লাহ সংযুক্ত রাখতে নির্দেশ দিয়েছেন।" — কুরআন ১৩:২১</div>

<p class="scene-setting">সিলসিলা — শৃঙ্খল, সংযোগ। গ্রাফ তত্ত্ব সেই সংযোগের গণিত। নোড থেকে নোডে — এজ দিয়ে। রক্তের শিরা, নদীর শাখা, সামাজিক বন্ধুত্ব — সব গ্রাফ। আল্লাহ সংযোগ রক্ষার নির্দেশ দিয়েছেন — গ্রাফ তত্ত্ব সেই সংযোগের ভাষা দেয়।</p>
<p class="scene-setting en">Silsila — chain, connection. Graph theory is the mathematics of connection. Node to node — via edges. Blood vessels, river branches, social friendships — all graphs. Allah commands maintaining connections — graph theory gives the language for those connections.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ১৪ (Graph BFS/DFS):</strong> গ্রাফ ট্রাভার্সাল শিখেছিলে — এখন দেখো সেই একই কৌশল LedgerPilot-এ প্রতিদিন কাজ করছে! Book ৩৭ (Networks) Door ৩: রাউটিং = shortest path গ্রাফে। Book ৩৫ (Distributed) Door ৫: distributed consensus = গ্রাফ topology।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrDM7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#a78bfa"/>
    </marker>
    <marker id="arrDM7b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
  </defs>
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🕸️ গ্রাফ: নোড ও এজের জাল</text>
  <circle cx="120" cy="80" r="20" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2.5"/>
  <text x="120" y="84" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">User</text>
  <circle cx="120" cy="170" r="20" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2.5"/>
  <text x="120" y="174" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">Account</text>
  <circle cx="260" cy="125" r="20" fill="#052e16" stroke="#22c55e" stroke-width="2.5"/>
  <text x="260" y="129" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Transaction</text>
  <circle cx="400" cy="80" r="20" fill="#fbbf24" fill-opacity="0.15" stroke="#fbbf24" stroke-width="2.5"/>
  <text x="400" y="84" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">Category</text>
  <circle cx="400" cy="170" r="20" fill="#8b5cf6" fill-opacity="0.15" stroke="#a855f7" stroke-width="2.5"/>
  <text x="400" y="174" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">Budget</text>
  <line x1="135" y1="92" x2="245" y2="118" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrDM7)"/>
  <line x1="135" y1="158" x2="245" y2="132" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrDM7b)"/>
  <line x1="278" y1="118" x2="382" y2="92" stroke="#4ade80" stroke-width="2" marker-end="url(#arrDM7)"/>
  <line x1="278" y1="132" x2="382" y2="158" stroke="#4ade80" stroke-width="2" marker-end="url(#arrDM7)"/>
  <line x1="415" y1="92" x2="415" y2="158" stroke="#c084fc" stroke-width="2" marker-end="url(#arrDM7)"/>
  <rect x="460" y="45" width="110" height="50" rx="6" fill="#0f172a" stroke="#22d3ee" stroke-width="1"/>
  <text x="515" y="63" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">BFS</text>
  <text x="515" y="78" text-anchor="middle" fill="#cbd5e1" font-size="10">প্রশস্ততা — সব</text>
  <text x="515" y="90" text-anchor="middle" fill="#cbd5e1" font-size="10">কাছের নোড আগে</text>
  <rect x="460" y="105" width="110" height="50" rx="6" fill="#0f172a" stroke="#a78bfa" stroke-width="1"/>
  <text x="515" y="123" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">DFS</text>
  <text x="515" y="138" text-anchor="middle" fill="#cbd5e1" font-size="10">গভীরতা — এক</text>
  <text x="515" y="150" text-anchor="middle" fill="#cbd5e1" font-size="10">শাখায় শেষ</text>
  <rect x="460" y="165" width="110" height="50" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="515" y="183" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">DAG + Topo Sort</text>
  <text x="515" y="198" text-anchor="middle" fill="#cbd5e1" font-size="10">কোনো চক্র নেই</text>
  <text x="515" y="210" text-anchor="middle" fill="#cbd5e1" font-size="10">→ ক্রম নির্ধারণ</text>
  <text x="190" y="225" text-anchor="middle" fill="#fbbf24" font-size="8">LedgerPilot: প্রতিটি foreign key = এজ → এটি একটি গ্রাফ!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: গ্রাফ তত্ত্ব — নোড (সত্তা) ও এজ (সম্পর্ক) দিয়ে সংযোগের জাল তৈরি। Euler (1736) থেকে PageRank পর্যন্ত। BFS প্রশস্ততায়, DFS গভীরতায় খুঁজে। DAG-এ topological sort সম্ভব।</div>

<div class="secret-box">🕸️ <strong>গ্রাফ = সংযোগের জাল। নোড + এজ।</strong> Euler থেকে PageRank — সব গ্রাফ। কিন্তু গ্রাফে একটি সমস্যা থাকে — কিছু নোড একসাথে থাকতে পারে না। প্রতিবেশী আলাদা রঙ চায়। সেই সমস্যা — পরের দরজায়।</div>`,
  senior: {
    title: "Graph Theory এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Euler (1736)</td><td>কোনিগসবার্গ সেতু — গ্রাফ তত্ত্বের জন্ম</td></tr>
<tr><td class="hl">BFS</td><td>প্রশস্ততা — কাছের সব নোড আগে</td></tr>
<tr><td class="hl">DFS</td><td>গভীরতা — এক শাখায় শেষ পর্যন্ত</td></tr>
<tr><td class="hl">DAG</td><td>Directed Acyclic — topological sort</td></tr>
<tr><td class="hl">Tree</td><td>বিশেষ গ্রাফ — root, কোনো চক্র নেই</td></tr>
<tr><td class="hl">Degree</td><td>নোডের এজ সংখ্যা</td></tr>
<tr><td class="hl">Path</td><td>নোড থেকে নোডে রাস্তা</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "🎨",
  color: "#8b5cf6",
  name: "রঙের সমস্যা",
  subtitle: "The Coloring Problem",
  tech: "Graph Coloring — four color theorem (1976), chromatic number, Chaitin register allocation, map coloring",
  spirit: "তাফসিল — পৃথকীকরণ, প্রতিটি প্রতিবেশী আলাদা",
  secret: "গ্রাফ রঙ করো — প্রতিটি প্রতিবেশী আলাদা রঙে। যেকোনো মানচিত্র মাত্র ৪টি রঙে রাঙা যায় — four color theorem (১৯৭৬, প্রথম কম্পিউটার-প্রমাণিত উপপাদ্য)। কম্পাইলার এটা ব্যবহার করে — রেজিস্টার বরাদ্দে।",
  recall: {
    q: " Four Color Theorem কী? এটা কম্পাইলারে কীভাবে ব্যবহৃত হয়?",
    qen: "What is the Four Color Theorem? How is it used in compilers?",
    a: "যেকোনো মানচিত্র ৪ রঙে রাঙা যায় — প্রতিটি প্রতিবেশী আলাদা। কম্পাইলারে: প্রতিটি ভেরিয়েবল একটি নোড, একসাথে ব্যবহৃত হলে এজ। রঙ = রেজিস্টার। Chaitin (১৯৮১)।",
    aen: "Any map can be colored with 4 colors — adjacent regions differ. In compilers: variables are nodes, simultaneous use creates edges. Color = register. Chaitin (1981)."
  },
  story: `<p class="scene-setting">১৮৫২, লন্ডন। Francis Guthrie একটি মানচিত্র রাঙছেন। তিনি লক্ষ্য করলেন — ইংল্যান্ডের কাউন্টি মাত্র ৪টি রঙে রাঙা যায়। প্রতিটি প্রতিবেশী কাউন্টি আলাদা রঙে। তিনি প্রশ্ন করলেন: কি যেকোনো মানচিত্র ৪ রঙে সম্ভব? ১২৪ বছর ধরে এই প্রশ্ন অমীমাংসিত ছিল। তারপর ১৯৭৬-এ Appel ও Haken প্রমাণ করলেন — কম্পিউটার দিয়ে। ১৯৩৬টি কেস চেক করে। এটাই প্রথম উপপাদ্য যা মানুষ নয়, কম্পিউটার প্রমাণ করেছিল।</p>
<p class="scene-setting en">1852, London. Francis Guthrie colors a map. He notices England's counties need only 4 colors — each neighbor different. He asks: is 4 colors always enough? 124 years unsolved. Then 1976: Appel and Haken prove it — by computer. 1936 cases checked. The first theorem proven not by humans, but by machine.</p>

<div class="dialogue"><strong>রঙ-কারিগর লাবিব:</strong> তামির (Door ৭) তোমাকে গ্রাফ দিয়েছেন। এখন সেই গ্রাফে রঙ করো। কেন? কম্পাইলারে ভেবে দেখো — তোমার ১৬টি CPU রেজিস্টার, কিন্তু ১০০টি ভেরিয়েবল। কোন ভেরিয়েবল কোন রেজিস্টারে? একই সময়ে ব্যবহৃত হলে আলাদা রেজিস্টার দরকার। এটাই graph coloring! প্রতিটি ভেরিয়েবল নোড, একসাথে ব্যবহৃত হলে এজ। রঙের সংখ্যা = রেজিস্টার সংখ্যা। Chaitin ১৯৮১-এ এটা দেখিয়েছিলেন।</div>
<div class="dialogue en"><strong>Color Artisan Labib:</strong> Tamir (Door 7) gave you graphs. Now color them. Why? Think of compilers — 16 CPU registers, 100 variables. Which goes where? Simultaneous use needs separate registers. This IS graph coloring! Variables = nodes, conflict = edges. Number of colors = registers. Chaitin 1981.</div>

<div class="code-block"># — Python: Graph Coloring —

  import networkx as nx

  # ভেরিয়েবল কনফ্লিক্ট গ্রাফ (যেগুলো একসাথে live)
  G = nx.Graph()
  G.add_edges_from([
      ("a", "b"), ("a", "c"),  # a ও b, a ও c একসাথে live
      ("b", "c"), ("b", "d"),
      ("c", "d"),
  ])

  # Greedy coloring (সবচেয়ে কম রঙ)
  coloring = nx.coloring.greedy_color(G, strategy="largest_first")
  print(coloring)
  # {'c': 0, 'b': 1, 'a': 2, 'd': 0}
  # ৩টি রঙ লাগলো (= ৩টি রেজিস্টার)

  # Chromatic number:
  print(max(coloring.values()) + 1)  # 3

  # Four Color Theorem: যেকোনো planar graph ≤ ৪
  planar = nx.random_geometric_graph(20, 0.3)
  coloring = nx.coloring.greedy_color(planar)
  print(max(coloring.values()) + 1)  # ≤ 4 (সাধারণত)</div>

<div class="verse">وَفِي خَلْقِكُمْ وَمَا يَبُثُّ مِن دَابَّةٍ آيَاتٌ لِّقَوْمٍ يُوقِنُونَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তোমাদের সৃষ্টিতে এবং যেসব জীব তিনি ছড়িয়েছেন তাতে নিদর্শন রয়েছে।" — কুরআন ৪৫:৪</div>

<p class="scene-setting">বৈচিত্র্য — প্রতিটি সৃষ্টি আলাদা, প্রতিটি রঙ ভিন্ন। গ্রাফ রঙও তেমন — প্রতিটি প্রতিবেশী আলাদা। তাফসিল — পৃথকীকরণ। প্রকৃতিতে বৈচিত্র্য একটি নিদর্শন। গণিতে সেই বৈচিত্র্যের সূত্র — ৪ রঙ যথেষ্ট।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৫ (Compilers) Door ৬ (Register Allocation):</strong> Chaitin-এর অ্যালগরিদম — graph coloring দিয়ে রেজিস্টার বরাদ্দ! এখন তুমি বোঝো সেই গণিত। Book ৪১ Door ৫ (P vs NP): graph coloring NP-complete — সবচেয়ে কম রঙ খুঁজা কঠিন।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎨 গ্রাফ রঙ: প্রতিবেশী আলাদা (৪ রঙ যথেষ্ট)</text>
  <path d="M 120,60 L 200,50 L 260,90 L 240,160 L 160,170 L 100,130 Z" fill="#8b5cf6" fill-opacity="0.3" stroke="#8b5cf6" stroke-width="2"/>
  <path d="M 260,90 L 340,70 L 400,110 L 380,170 L 240,160 Z" fill="#22d3ee" fill-opacity="0.3" stroke="#22d3ee" stroke-width="2"/>
  <path d="M 100,130 L 160,170 L 150,220 L 80,210 L 60,160 Z" fill="#22c55e" fill-opacity="0.3" stroke="#22c55e" stroke-width="2"/>
  <path d="M 160,170 L 240,160 L 250,220 L 150,220 Z" fill="#fbbf24" fill-opacity="0.3" stroke="#fbbf24" stroke-width="2"/>
  <path d="M 240,160 L 380,170 L 370,220 L 250,220 Z" fill="#f87171" fill-opacity="0.3" stroke="#f87171" stroke-width="2"/>
  <text x="170" y="110" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="900">R₁</text>
  <text x="320" y="120" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="900">R₂</text>
  <text x="105" y="185" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="900">R₃</text>
  <text x="200" y="195" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="900">R₄</text>
  <text x="310" y="195" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="900">R₅</text>
  <rect x="420" y="40" width="150" height="90" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="495" y="60" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">Four Color Theorem</text>
  <text x="495" y="78" text-anchor="middle" fill="#e2e8f0" font-size="8">(Appel &amp; Haken 1976)</text>
  <text x="430" y="98" fill="#cbd5e1" font-size="10">যেকোনো মানচিত্র</text>
  <text x="430" y="111" fill="#cbd5e1" font-size="10">≤ ৪ রঙে রাঙা যায়</text>
  <text x="430" y="124" fill="#4ade80" font-size="10">প্রতিটি প্রতিবেশী আলাদা ✓</text>
  <rect x="420" y="140" width="150" height="90" rx="8" fill="#0c4a6e" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="495" y="160" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">কম্পাইলার প্রয়োগ</text>
  <text x="430" y="180" fill="#cbd5e1" font-size="10">ভেরিয়েবল = নোড</text>
  <text x="430" y="193" fill="#cbd5e1" font-size="10">একসাথে live = এজ</text>
  <text x="430" y="206" fill="#7dd3fc" font-size="10">রঙ = রেজিস্টার</text>
  <text x="430" y="220" fill="#4ade80" font-size="10">Chaitin 1981</text>
  <text x="200" y="240" text-anchor="middle" fill="#fbbf24" font-size="10">প্রতিটি প্রতিবেশী অঞ্চল আলাদা রঙে — ৪ রঙ সর্বদা যথেষ্ট!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: গ্রাফ রঙ — প্রতিটি প্রতিবেশী আলাদা রঙে রাঙা। Four Color Theorem (১৯৭৬) বলে যেকোনো মানচিত্র ৪ রঙে সম্ভব। কম্পাইলারে রেজিস্টার বরাদ্দে এটি ব্যবহৃত (Chaitin ১৯৮১)।</div>

<div class="secret-box">🎨 <strong>রঙ করো — প্রতিবেশী আলাদা। ৪ রঙ যথেষ্ট।</strong> কম্পাইলার থেকে মানচিত্র — সব জায়গায় প্রযোজ্য। কিন্তু গ্রাফ শুধু সংযোগ নয় — কিছু সংখ্যা বিশেষ। কিছু সংখ্যা শুধু নিজে ও ১ দিয়ে ভাগ যায়। সেই সংখ্যার জগত — পরের দরজায়।</div>`,
  senior: {
    title: "Graph Coloring এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Four Color (1976)</td><td>যেকোনো মানচিত্র ৪ রঙে — Appel & Haken</td></tr>
<tr><td class="hl">Chromatic Number χ(G)</td><td>সবচেয়ে কম রঙের সংখ্যা</td></tr>
<tr><td class="hl">Greedy Algorithm</td><td>বড় নোড থেকে শুরু — সর্বদা ≤ সেরা + ১</td></tr>
<tr><td class="hl">Chaitin (1981)</td><td>রেজিস্টার বরাদ্দ = graph coloring</td></tr>
<tr><td class="hl">NP-complete</td><td>সবচেয়ে কম রঙ খুঁজা — কঠিন</td></tr>
<tr><td class="hl">Planar Graph</td><td>সর্বদা ≤ ৪ রঙ</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "🔢",
  color: "#8b5cf6",
  name: "সংখ্যার গহন",
  subtitle: "The Depths of Numbers",
  tech: "Number Theory — Euclid's primes (300 BCE), Fermat's Little Theorem, modular arithmetic, RSA foundation, GCD/LCM",
  spirit: "আদদ — চিরস্থায়ী, সংখ্যার অনন্ত গভীরতা",
  secret: "মৌলিক সংখ্যা = সংখ্যার পরমাণু। প্রতিটি সংখ্যা মৌলিকের গুণফল। Euclid প্রমাণ করেছিলেন — মৌলিকের সংখ্যা অসীম। Fermat দেখিয়েছিলেন a^(p-১) ≡ ১ (mod p)। এই সূত্র RSA-এর ভিত্তি — তোমার HTTPS।",
  recall: {
    q: " মৌলিক সংখ্যা কী? অসীম প্রমাণ করো। Fermat-এর সূত্র কী?",
    qen: "What are prime numbers? Prove they are infinite. What is Fermat's theorem?",
    a: "মৌলিক = শুধু ১ ও নিজে দিয়ে ভাগ যায়। অসীম: ধরো সসীম, সবগুলোর গুণফল + ১ — এটিও মৌলিক বা মৌলিক উপাদান। Fermat: a^(p-১) ≡ ১ (mod p), p মৌলিক হলে।",
    aen: "Prime = divisible only by 1 and itself. Infinite: assume finite, multiply all + 1 — new prime factor. Fermat: a^(p-1) ≡ 1 (mod p) when p is prime."
  },
  story: `<p class="scene-setting">আলেকজান্দ্রিয়া, ৩০০ খ্রিস্টপূর্ব। ইউক্লিড (যিনি Door ৩-এ √২ প্রমাণ করেছেন) এবার একটি ভিন্ন প্রশ্ন নিয়ে আছেন। মৌলিক সংখ্যা কত? সসীম নাকি অসীম? তার প্রমাণ একটি অমর সৌন্দর্য: ধরে নাও সসীম। সব মৌলিকের গুণফল নাও, তাতে ১ যোগ করো। এই নতুন সংখ্যা — কোনো মৌলিক দিয়ে ভাগ যায় না! তাই নতুন মৌলিক আছে। অন্তর্বিরোধ। অসীম।</p>
<p class="scene-setting en">Alexandria, 300 BCE. Euclid (who proved √2 irrational in Door 3) now asks: how many primes? Finite or infinite? His proof is immortal beauty: assume finite. Multiply all primes, add 1. This new number is divisible by no existing prime! So a new prime exists. Contradiction. Infinite.</p>

<div class="dialogue"><strong>সংখ্যা-জ্ঞানী আরমান:</strong> লাবিব (Door ৮) তোমাকে রঙ শিখিয়েছেন। এখন সংখ্যার গভীরে যাও। মৌলিক সংখ্যা — ২, ৩, ৫, ৭, ১১, ১৩... কোনো প্যাটার্ন নেই। কিন্তু এরাই সবকিছুর ভিত্তি। ৬০ = ২² * ৩ * ৫। প্রতিটি সংখ্যা মৌলিকে ভাঙা যায় — Fundamental Theorem of Arithmetic। আর Fermat-এর সূত্র: ৭ মৌলিক হলে, ২⁶ = ৬৪, ৬৪ mod ৭ = ১। এই সহজ সত্যই তোমার RSA এনক্রিপশন চালায়!</div>
<div class="dialogue en"><strong>Number Knower Arman:</strong> Labib (Door 8) taught you coloring. Now go deeper into numbers. Primes — 2, 3, 5, 7, 11, 13... No pattern. But they are the foundation. 60 = 2² * 3 * 5. Every number breaks into primes — Fundamental Theorem. And Fermat: if 7 is prime, 2⁶ = 64, 64 mod 7 = 1. This simple truth powers your RSA encryption!</div>

<div class="code-block"># — Python: Number Theory —

  from math import gcd
  from sympy import isprime, factorint, nextprime

  # মৌলিক সংখ্যা যাচাই
  print(isprime(17))      # True
  print(isprime(15))      # False — ৩*৫

  # উৎপাদকে বিভক্ত
  print(factorint(360))   # {2: 3, 3: 2, 5: 1} → ২³*৩²*৫

  # GCD (Euclidean algorithm)
  print(gcd(48, 18))      # 6

  # Modular arithmetic:
  print(pow(2, 6, 7))     # 1 — Fermat! (৭ মৌলিক)
  print(pow(3, 10, 11))   # 1 — Fermat! (১১ মৌলিক)

  # RSA-এর ভিত্তি:
  # p, q মৌলিক → n = p*q
  # φ(n) = (p-1)(q-1)
  # e নির্বাচন → d = e^(-1) mod φ(n)
  # encrypt: c = m^e mod n
  # decrypt: m = c^d mod n
  # এটাই Book ৪৬ (Cryptography) Door ১!</div>

<div class="callout info"><span class="co-icon">🔢</span><div><strong>Fundamental Theorem of Arithmetic:</strong> প্রতিটি সংখ্যা > ১ কে মৌলিক উৎপাদকে অদ্বিতীয়ভাবে বিভক্ত করা যায়। ২৪ = ২³ * ৩। একমাত্র একটি উপায়। এটাই সংখ্যার ডিএনএ।<br><br>
<strong>Fermat's Little Theorem (১৬৪০):</strong> p মৌলিক হলে, a^(p-১) ≡ ১ (mod p)। এটা RSA-এর গাণিতিক ভিত্তি। বিশাল সংখ্যার মৌলিক যাচাইও এটা দিয়ে।</div></div>

<div class="verse">إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আমরা প্রতিটি কিছু সুনির্দিষ্ট পরিমাণে সৃষ্টি করেছি।" — কুরআন ৫৪:৪৯</div>

<p class="scene-setting">"কদর" — নির্দিষ্ট পরিমাণ। প্রতিটি সংখ্যার একটি অদ্বিতীয় মৌলিক গঠন — সেই কদর। ৬০ = ২²*৩*৫ — অন্যভাবে নয়। সংখ্যার জগতে প্রতিটি জিনিসের একটি নির্দিষ্ট সত্য আছে। আদদ — চিরস্থায়ী। মৌলিক সংখ্যা অসীম, কিন্তু প্রতিটি অদ্বিতীয়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৬ (Cryptography) Door ১ (RSA):</strong> RSA = মৌলিক সংখ্যার উপর নির্মিত! Fermat-এর সূত্র ছাড়া RSA অসম্ভব। Book ৪১ Door ৪ (P vs NP): মৌলিক যাচাই = P, কিন্তু উৎপাদকে বিভক্ত = অজানা।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔢 Prime Numbers: Building Blocks of Integers</text>
  <rect x="20" y="55" width="260" height="170" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="150" y="78" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">Prime Factorization</text>
  <rect x="40" y="90" width="100" height="30" rx="5" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="90" y="110" text-anchor="middle" fill="#fcd34d" font-size="9">60</text>
  <line x1="90" y1="120" x2="60" y2="140" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="90" y1="120" x2="120" y2="140" stroke="#fbbf24" stroke-width="1.5"/>
  <rect x="35" y="140" width="50" height="25" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="60" y="157" text-anchor="middle" fill="#4ade80" font-size="8">2 * 30</text>
  <rect x="95" y="140" width="50" height="25" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="120" y="157" text-anchor="middle" fill="#7dd3fc" font-size="8">3 * 10</text>
  <line x1="120" y1="165" x2="100" y2="180" stroke="#22d3ee" stroke-width="1"/>
  <line x1="120" y1="165" x2="140" y2="180" stroke="#22d3ee" stroke-width="1"/>
  <rect x="80" y="180" width="40" height="20" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="100" y="193" text-anchor="middle" fill="#7dd3fc" font-size="10">2 * 5</text>
  <text x="150" y="205" text-anchor="middle" fill="#fcd34d" font-size="8">60 = 2²*3*5</text>
  <text x="150" y="220" text-anchor="middle" fill="#94a3b8" font-size="10">Fundamental Theorem of Arithmetic</text>
  <rect x="320" y="55" width="240" height="170" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="440" y="78" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">Why Primes Matter</text>
  <rect x="340" y="92" width="200" height="20" rx="3" fill="#450a0a" stroke="#f87171" stroke-width="1"/>
  <text x="440" y="106" text-anchor="middle" fill="#fca5a5" font-size="10">RSA: p * q = n (factoring hard!)</text>
  <rect x="340" y="120" width="200" height="20" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="440" y="134" text-anchor="middle" fill="#7dd3fc" font-size="10">Hash: prime modulus reduces collision</text>
  <rect x="340" y="148" width="200" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="440" y="162" text-anchor="middle" fill="#4ade80" font-size="10">Euclid: infinitely many primes</text>
  <text x="440" y="190" text-anchor="middle" fill="#94a3b8" font-size="10">Largest known: 2^82589933 - 1</text>
  <text x="440" y="205" text-anchor="middle" fill="#94a3b8" font-size="10">24.8 million digits!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Prime factorization tree — 60 = 2²*3*5। RSA এই উপর নির্ভর করে।</div>

<div class="secret-box">🔢 <strong>মৌলিক = সংখ্যার পরমাণু। অসীম। অদ্বিতীয় গঠন।</strong> Euclid থেকে Fermat — ২০০০ বছরের গবেষণা। এই সত্য ছাড়া RSA নেই, HTTPS নেই, ইন্টারনেট নেই। এখন নয়টি দরজা পেরিয়েছো — শেষ দরজায় সব মেলাও।</div>`,
  senior: {
    title: "Number Theory এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Euclid (~৩০০ BCE)</td><td>মৌলিক অসীম — contradiction দিয়ে প্রমাণ</td></tr>
<tr><td class="hl">Fundamental Theorem</td><td>প্রতিটি সংখ্যা অদ্বিতীয় মৌলিক গুণফল</td></tr>
<tr><td class="hl">Fermat (১৬৪০)</td><td>a^(p-১) ≡ ১ (mod p)</td></tr>
<tr><td class="hl">GCD</td><td>Euclidean algorithm</td></tr>
<tr><td class="hl">Modular Arithmetic</td><td>(a mod n) — ঘড়ির গণিত</td></tr>
<tr><td class="hl">RSA</td><td>Fermat-এর সূত্রের প্রয়োগ</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🌟",
  color: "#8b5cf6",
  name: "সব সত্যের সমন্বয়",
  subtitle: "The Synthesis of All Truths",
  tech: "Synthesis — how logic, proofs, sets, combinatorics, graphs, and numbers form the foundation of all computing",
  spirit: "হিকমাহ — প্রয়োগিক জ্ঞান, সব সত্যের একত্র দৃষ্টি",
  secret: "নয়টি দরজা, নয়জন শিক্ষক, একটি সত্য — ডিসক্রিট গণিত ছাড়া কম্পিউটার বিজ্ঞান অসম্ভব। if/else থেকে RSA পর্যন্ত — সবকিছুর ভিত্তি এই ছয়টি স্তম্ভ।",
  recall: {
    q: " ডিসক্রিট গণিতের ছয়টি স্তম্ভ কী কী? কম্পিউটিংয়ে কেন দরকার?",
    qen: "What are the six pillars of discrete math? Why are they essential for computing?",
    a: "লজিক (if/else), প্রমাণ (correctness), সেট (ডেটাবেস), কম্বিনেটরিক্স (সম্ভাবনা), গ্রাফ (নেটওয়ার্ক), সংখ্যা তত্ত্ব (ক্রিপ্টো)। কম্পিউটার = ডিসক্রিট মেশিন।",
    aen: "Logic (if/else), proofs (correctness), sets (databases), combinatorics (probability), graphs (networks), number theory (crypto). Computers are discrete machines."
  },
  story: `<p class="scene-setting">তুমি এখন নয়টি দরজা পেরিয়েছো। প্রতিটি দরজায় একজন শিক্ষক একটি কৌশল দিয়েছেন। এখন সব একসাথে মেলাও। একটি কম্পিউটার প্রোগ্রাম লিখতে হবে। প্রতিটি দরজার শিক্ষক আসবে, তার কৌশল দেবে। এটাই সমন্বয় — নয়টি যন্ত্র একসাথে বাজে।</p>
<p class="scene-setting en">You have passed nine doors. Each teacher gave you one technique. Now combine them all. Write a computer program. Each door's teacher appears, offering their technique. This is synthesis — nine instruments playing together.</p>

<div class="callout info"><span class="co-icon">🌟</span><div><strong>সম্পূর্ণ ডিসক্রিট গণিত — নয় দরজার সমন্বয়:</strong><br>
<strong>Door ১ — ইদ্রিস (Logic):</strong> if/else, De Morgan — প্রতিটি সিদ্ধান্ত<br>
<strong>Door ২ — ইউসুফ (Induction):</strong> recursion, loop correctness<br>
<strong>Door ৩ — জাইদ (Contradiction):</strong> অসম্ভব প্রমাণ, halting problem<br>
<strong>Door ৪ — রিয়াদ (Sets):</strong> ডেটাবেস, SQL UNION/INTERSECT<br>
<strong>Door ৫ — নাদিয়া (Combinatorics):</strong> hash collision, password শক্তি<br>
<strong>Door ৬ — সাবির (Pigeonhole):</strong> collision অনিবার্য প্রমাণ<br>
<strong>Door ৭ — তামির (Graphs):</strong> নেটওয়ার্ক, PageRank, রাউটিং<br>
<strong>Door ৮ — লাবিব (Coloring):</strong> রেজিস্টার বরাদ্দ, scheduling<br>
<strong>Door ৯ — আরমান (Numbers):</strong> RSA, এনক্রিপশন, মৌলিক</div></div>

<div class="code-block">— একটি Django অ্যাপে সব ডিসক্রিট গণিত —

  # Door ১ (Logic): if/else ও De Morgan
  if not (user.is_staff and user.is_active):
      # ≡ user.is_staff == False OR user.is_active == False

  # Door ৪ (Sets): QuerySet = সেট অপারেশন
  active_users = User.objects.filter(is_active=True)
  staff = User.objects.filter(is_staff=True)
  both = active_users & staff  # intersection

  # Door ৫ (Combinatorics): password শক্তি
  # ৮-অক্ষর password, ৬২ অক্ষর → ৬২⁸ ~= ২১৮ ট্রিলিয়ন

  # Door ৭ (Graph): foreign key = গ্রাফ এজ
  # User → Account → Transaction → Category

  # Door ৯ (Number Theory): RSA সার্টিফিকেট
  # HTTPS সংযোগে p*q মৌলিক গুণফল</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">শিক্ষক</div></div>
<div class="stat-card"><div class="sc-num">৬</div><div class="sc-label">স্তম্ভ</div></div>
<div class="stat-card"><div class="sc-num">২০০০+</div><div class="sc-label">বছরের গবেষণা</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">প্রয়োগ</div></div>
</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">নূর — আলো। ডিসক্রিট গণিত হলো সেই আলো যা প্রতিটি কম্পিউটার প্রোগ্রামকে দৃশ্যমান করে। বাইরে থেকে একটি অ্যাপ সহজ মনে হয় — কিন্তু ভেতরে চলছে এক বিশাল ডিসক্রিট সত্যের সমন্বয়। ইদ্রিসের লজিক, ইউসুফের ইনডাকশন, রিয়াদের সেট, নাদিয়ার গোনা, তামিরের গ্রাফ, আরমানের সংখ্যা — সব একসাথে। একটি সার্ভার চালু হওয়া — ২০০০ বছরের গবেষণার ফল।</p>
<p class="scene-setting en">Nur — light. Discrete mathematics is the light that makes every computer program visible. Outside, an app seems simple — but inside runs a vast orchestration of discrete truth. Idris's logic, Yusuf's induction, Riyad's sets, Nadia's counting, Tamir's graphs, Arman's numbers — all at once. A server starting up — the fruit of 2000 years of research.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ৩০ (Math for ML) → calculus ও linear algebra। Book ৪১ (Theory of Computation) → automata, টুরিং মেশিন। Book ৪৬ (Cryptography) → RSA, number theory-এর প্রয়োগ। Book ৪৫ (Compilers) → graph coloring, রেজিস্টার। Book ৩৯ (Databases) → SQL = সেট অপারেশন। এই বই সবার ভিত্তি।</div></div>

<div class="checklist">
<li>⚖️ De Morgan-এর নিয়ম Python-এ যাচাই করো</li>
<li>🁢 Σi = n(n+১)/২ induction দিয়ে প্রমাণ করো</li>
<li>🔍 √২ অমূলদ contradiction দিয়ে প্রমাণ করো</li>
<li>⊇ পাওয়ার সেট বের করো: {a,b,c}</li>
<li>🎲 ৫০ জনে birthday collision সম্ভাবনা হিসাও</li>
<li>🕸️ networkx দিয়ে একটি DAG বানাও</li>
<li>🔢 প্রথম ১০০টি মৌলিক সংখ্যা বের করো</li>
<li>📖 "Discrete Mathematics and Its Applications" — Rosen পড়ো</li>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🌟 Discrete Math: 9 Doors Unified</text>
  <rect x="180" y="50" width="220" height="35" rx="17" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">D1: Logic</text>
  <rect x="140" y="95" width="300" height="35" rx="17" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="117" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">D2-D3: Proof (Induction + Contradiction)</text>
  <rect x="100" y="140" width="380" height="35" rx="17" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="162" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">D4-D5: Sets + Combinatorics</text>
  <rect x="60" y="185" width="460" height="35" rx="17" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="290" y="207" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">D6-D9: Pigeonhole + Graphs + Coloring + Primes</text>
  <rect x="120" y="235" width="340" height="35" rx="17" fill="#052e16" stroke="#4ade80" stroke-width="2.5"/>
  <text x="290" y="257" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">HIKMAH: Applied Wisdom</text>
</svg>
</div>
<div class="svg-caption">চিত্র: নয়টি দরজা — Logic থেকে Hikmah পর্যন্ত একটি ভবন।</div>

<div class="secret-box">🌟 <strong>ডিসক্রিট গণিত = কম্পিউটিংয়ের আলো।</strong> নয়টি দরজা, নয়জন শিক্ষক, একটি সত্য। প্রতিটি if/else একটি সত্য সারণি। প্রতিটি ডেটাবেস একটি সেট। প্রতিটি নেটওয়ার্ক একটি গ্রাফ। প্রতিটি এনক্রিপশন মৌলিক সংখ্যা। এখন তুমি জানো — শুধু কীভাবে নয়, কেন। কেন if/else কাজ করে। কেন hash collision অনিবার্য। কেন চার রঙ যথেষ্ট। কেন মৌলিক অসীম। এটাই হিকমাহ — সত্যের একত্র দৃষ্টি।</div>`,
  senior: {
    title: "সম্পূর্ণ ডিসক্রিট গণিত এক নজরে",
    body: `<table class="kv-table"><tr><th>স্তম্ভ</th><th>কী</th><th>দরজা</th></tr>
<tr><td class="hl">Logic</td><td>সত্য সারণি, De Morgan</td><td>১</td></tr>
<tr><td class="hl">Proofs</td><td>Induction, Contradiction</td><td>২, ৩</td></tr>
<tr><td class="hl">Sets</td><td>Union, Intersection, Power Set</td><td>৪</td></tr>
<tr><td class="hl">Combinatorics</td><td>P(n,k), C(n,k), Birthday</td><td>৫</td></tr>
<tr><td class="hl">Pigeonhole</td><td>Collision অনিবার্য</td><td>৬</td></tr>
<tr><td class="hl">Graphs</td><td>BFS, DFS, DAG, Euler</td><td>৭</td></tr>
<tr><td class="hl">Coloring</td><td>4-color, Register allocation</td><td>৮</td></tr>
<tr><td class="hl">Number Theory</td><td>Primes, Fermat, RSA</td><td>৯</td></tr>
<tr><td class="hl">Synthesis</td><td>সব একসাথে</td><td>১০</td></tr></table>`
  }
});
