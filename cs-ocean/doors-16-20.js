// ════════════════════════════════════════
// কম্পিউটার সায়েন্সের মহাসমুদ্র — DOORS 16-20
// Sea 7: Theory (D16) · Sea 8: Quantum (D17-D18) · Sea 9: Robotics (D19) · Sea 10: Synthesis (D20)
// ════════════════════════════════════════

// ══ DOOR 16: ALGORITHMS & COMPLEXITY ══
doors.push({
  num:16, icon:"📐", color:"#fbbf24", name:"তত্ত্বের চূড়া",
  subtitle:"The Peak of Theory", tech:"Algorithms & Complexity",
  spirit:"বুরহান — দলিল, নিশ্চিত প্রমাণ",
  secret:"Theory হলো CS-এর সবচেয়ে গভীর, সবচেয়ে গাণিতিক ডোমেইন — P vs NP, complexity, cryptography-র ভিত্তি, learning theory। কঠিন, কিন্তু যারা যায় তারা সবচেয়ে সম্মানিত। একবার প্রমাণিত theorem চিরন্তন — Euclid আজও সত্য। niche (কম ছাত্র, কম ভিড়), কিন্তু academic সম্মান সর্বোচ্চ। গণিত ভালোবাসলে যাও — কিন্তু শক্তিশালী হলে।",
  recall:{
    q:"ডেভিড কেন বললেন চূড়ায় পৌঁছাতে এক পা এক পা করে উঠতে হয়, কোনো shortcut নয়?",
    qen:"Why did David say reaching the peak requires stepping up one step at a time, no shortcuts?",
    a:"কারণ তত্ত্ব হলো এক পা এক পা করে উঠা — প্রতিটা ধাপ একটা উপপাদ্য, একটা প্রমাণ। কোনো shortcut নেই। প্রতিটা প্রমাণ শক্ত হতে হয় — দুর্বল প্রমাণ পড়ে যাওয়ার সিঁড়ি। গণিতের পথ ধীর, কিন্তু একবার চূড়ায় পৌঁছালে তুমি সবকিছু দেখো — সম্পূর্ণ দৃশ্যমান। একটা theorem যে একবার প্রমাণিত, তা চিরকাল সত্য। এটাই বুরহান।",
    aen:"Because theory is climbing step by step — each step a theorem, a proof. No shortcuts. Each proof must be solid — a weak proof is a falling stair. The mathematical path is slow, but once at the peak you see everything — the complete picture. A theorem once proven, is true forever. This is burhan."
  },
  story:`
<p class="scene-setting">ষোড়শ দরজা। ক্লারার ভাষার কারখানা পেরিয়ে তুমি একটা বিশাল পাথরের সিঁড়ির পাদদেশে — সিঁড়ি উপরে উঠে গেছে মেঘের ভেতরে, চূড়া দেখা যায় না। প্রতিটা ধাপে খোদাই করা সংখ্যা ও প্রতীক। সিঁড়ির কিনারায় দাঁড়িয়ে ডেভিড — লম্বা, রোগা, চশমা নাকে, হাতে একটা খাতা ভর্তি সমীকরণ ও একটা complexity chart, চোখে গভীরতা। ক্লারা পেছন থেকে ইশারায় বলছেন — এটা সবচেয়ে কঠিন চূড়া। উঁচু থেকে আসা ঠান্ডা বাতাস, পাথরের কঠিন স্পর্শ, দূরে বাজপাখির ডাক।</p>
<p class="scene-setting en">The sixteenth door. Past Clara's language workshop, you reach the foot of a vast stone staircase — it climbs into the clouds, the peak unseen. Each step carved with numbers and symbols. At the staircase's edge stands David — tall, thin, glasses on nose, a notebook full of equations and a complexity chart in hand, depth in his eyes. Clara gestures from behind — this is the hardest peak. Cold wind from above, the hard touch of stone, a distant eagle's cry.</p>

<div class="dialogue">ক্লারা বললেন, "আমি ভাষা বানাই, কিন্তু ডেভিড জিজ্ঞেস করেন — সেই ভাষায় লেখা কোড কত দ্রুত চলতে পারে? সর্বোচ্চ কত?" ডেভিড সিঁড়ির একটা ধাপে হাত বুলিয়ে দিলেন। "এই ধাপ — এটা একটা theorem। যত ওপরে যাবে, তত কঠিন theorem। কিন্তু প্রতিটা ধাপ আগের ধাপের উপর দাঁড়িয়ে। কোনো ধাপ বাদ দিলে পড়ে যাবে।" তিনি খাতাটা খুললেন — P, NP, PSPACE, EXPTIME লেখা চার্ট দেখালেন। "সব সমস্যা সমান নয়। কিছু সহজ (P), কিছু কঠিন (NP-hard)। sorting করা সহজ — কিন্তু সবচেয়ে দ্রুত sorting কী? সেটাই theory জিজ্ঞেস করে।"</div>
<div class="dialogue en">Clara said, "I make languages, but David asks — how fast can code written in that language run? At most how fast?" David stroked a step. "This step — it's a theorem. The higher you go, the harder. But each step stands on the previous. Skip one and you fall." He opened his notebook — showed a chart inscribed P, NP, PSPACE, EXPTIME. "Not all problems are equal. Some easy (P), some hard (NP-hard). Sorting is easy — but what's the fastest sorting? That's what theory asks."</div>

<div class="diagram">
  <div class="diag-title">Complexity Zoo — কোন সমস্যা কতটা কঠিন?</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowAmber16" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#fbbf24"/></marker>
    </defs>
    <!-- nested complexity classes (concentric) -->
    <ellipse cx="280" cy="120" rx="240" ry="80" class="cell" style="fill:none;stroke:#9290a8"/>
    <text class="lbl-sm" x="500" y="50" fill="#9290a8">EXPTIME</text>
    <ellipse cx="280" cy="125" rx="180" ry="60" class="cell-good" style="fill:none;stroke:#52c41a"/>
    <text class="lbl-sm" x="445" y="80" fill="#52c41a">PSPACE</text>
    <ellipse cx="280" cy="130" rx="130" ry="44" class="cell-hot" style="fill:none;stroke:#ff6b35"/>
    <text class="lbl-sm" x="400" y="105" fill="#ff6b35">NP</text>
    <ellipse cx="280" cy="132" rx="80" ry="28" class="cell-cyan" style="fill:none;stroke:#3dd6c4"/>
    <text class="lbl-sm" x="280" y="135" fill="#3dd6c4" style="font-weight:700">P</text>
    <text class="lbl-sm" x="280" y="148" fill="#5e5c74">sorting, shortest path</text>
    <!-- P vs NP question -->
    <text class="lbl-sm" x="280" y="200" fill="#fbbf24" style="font-weight:700">P = NP?  ←— হাজার বছরের প্রশ্ন, $১M prize</text>
    <text class="lbl-sm" x="280" y="218" fill="#5e5c74">NP: যাচাই সহজ (Sudoku), কিন্তু সমাধান কঠিন কি? P-র ভেতরে?</text>
  </svg>
  <div class="diag-cap">complexity class-গুলো nested — P (সহজতম) থেকে EXPTIME পর্যন্ত। P vs NP হলো CS-এর সবচেয়ে বড় open problem — হাজার বছরের সমস্যা, Clay Millennium Prize।</div>
</div>

<div class="code-block"># ── STEP 1: Algorithm design paradigms ──
# Four main approaches to designing algorithms:

# 1. DIVIDE AND CONQUER: split → solve → merge (merge sort, quick sort)
# 2. GREEDY: best local choice (Dijkstra, Huffman)
# 3. DYNAMIC PROGRAMMING: remember sub-problems (knapsack, edit distance)
# 4. BACKTRACKING: try all, undo if stuck (N-Queens, Sudoku)

# Analysis techniques:
# - Big-O (worst case)
# - Average case (expected time over random inputs)
# - Amortized (averaged over many operations)
# - Competitive (online vs offline)

# Randomized algorithms (use randomness for speed):
import random

def quicksort_randomized(arr):
    """Quick sort with random pivot — O(n log n) expected."""
    if len(arr) &lt;= 1:
        return arr
    pivot = random.choice(arr)
    left = [x for x in arr if x &lt; pivot]
    mid = [x for x in arr if x == pivot]
    right = [x for x in arr if x &gt; pivot]
    return quicksort_randomized(left) + mid + quicksort_randomized(right)

# Why randomization helps:
# Deterministic quick sort: O(n²) worst case (sorted input)
# Randomized quick sort: O(n log n) EXPECTED for ANY input
# No input can make it slow — randomness defeats adversarial inputs!</div>

<div class="code-block"># ── STEP 2: Complexity classes ──
# How hard is a problem? Complexity theory classifies problems.

# P: problems solvable in polynomial time (fast)
#    Examples: sorting, shortest path, matrix multiplication
#    O(n), O(n²), O(n³) — all polynomial

# NP: solutions can be VERIFIED in polynomial time
#    Examples: Sudoku (check is fast, solve might be slow)
#    If someone gives you a solution, you can verify it quickly.

# NP-COMPLETE: hardest problems in NP
#    Examples: SAT, Traveling Salesman, Knapsack
#    If you solve ONE NP-complete problem fast → ALL NP problems are fast
#    (This is the P vs NP question — $1 million prize!)

# NP-HARD: at least as hard as NP-complete
#    Examples: Halting problem, general chess

# EXP: exponential time problems
#    Examples: Generalized chess, some games

# ┌─────────────────┬───────────────────────────────────────┐
# │ Class           │ Examples                             │
# ├─────────────────┼───────────────────────────────────────┤
# │ P (easy)        │ Sorting, shortest path              │
# │ NP              │ Factoring, graph isomorphism        │
# │ NP-Complete     │ SAT, TSP, 3-coloring, knapsack     │
# │ NP-Hard         │ Halting problem                    │
# │ EXP             │ Generalized chess                   │
# │ Undecidable     │ Halting problem (can't solve ever)  │
# └─────────────────┴───────────────────────────────────────┘

# WHY THIS MATTERS:
# If P = NP: all cryptography breaks, optimization is easy
# If P ≠ NP (likely): some problems are fundamentally hard
# Understanding hardness tells you when to approximate</div>

<div class="code-block"># ── STEP 3: Approximation algorithms ──
# When exact solutions are too slow (NP-hard), approximate!

# Vertex cover approximation (2-approximation):
def approx_vertex_cover(edges, n):
    """
    Find a vertex cover at most 2x optimal.
    Guaranteed within factor 2 of the best solution.
    """
    cover = set()
    remaining = set(edges)

    while remaining:
        u, v = remaining.pop()  # pick any edge
        cover.add(u)  # add both endpoints
        cover.add(v)
        # Remove all edges covered by u or v:
        remaining = {(a, b) for (a, b) in remaining
                     if a not in cover and b not in cover}
    return cover

edges = [(0, 1), (1, 2), (2, 3), (3, 4)]
print(approx_vertex_cover(edges, 5))  # {0, 1, 2, 3} or similar

# Approximation ratios:
# 1-approx = exact (perfect)
# 2-approx = within 2x of optimal
# ln(n)-approx = within ln(n) of optimal

# Common approximation guarantees:
# ┌─────────────────────────┬──────────────┬──────────────┐
# │ Problem                 │ Approach     │ Ratio        │
# ├─────────────────────────┼──────────────┼──────────────┤
# │ Vertex cover            │ Greedy       │ 2            │
# │ Traveling salesman(M)   │ MST-based    │ 2            │
# │ Set cover               │ Greedy       │ ln(n)        │
# │ Knapsack (fractional)   │ Greedy       │ 1 (exact)   │
# │ Load balancing          │ Greedy       │ 1.5          │
# └─────────────────────────┴──────────────┴──────────────┘</div>

<div class="code-block"># ── STEP 4: Streaming algorithms ──
# Process MASSIVE data that doesn't fit in memory.
# Make ONE PASS, use minimal memory.

# Count distinct elements (HyperLogLog):
def count_distinct_approx(stream):
    """
    Approximate count of unique elements.
    Uses O(log(log(n))) space instead of O(n).
    """
    max_zeros = 0
    for item in stream:
        h = hash(item) &amp; 0xFFFFFFFF  # 32-bit hash
        zeros = 0
        while h &amp; 1 == 0:  # count trailing zeros
            zeros += 1
            h &gt;&gt;= 1
        max_zeros = max(max_zeros, zeros)
    return 2 ** max_zeros  # approximate count

stream = range(10000)  # 10000 unique elements
print(count_distinct_approx(stream))  # ~10000 (approximate)

# Famous streaming algorithms:
# ┌──────────────────────┬──────────────────────────────┐
# │ Algorithm            │ What it counts              │
# ├──────────────────────┼──────────────────────────────┤
# │ HyperLogLog          │ Distinct elements (~KB)     │
# │ Count-Min Sketch     │ Frequency of elements       │
# │ Bloom Filter         │ Membership (probabilistic)  │
# │ Reservoir Sampling   │ Random sample from stream   │
# │ Heavy Hitters        │ Frequent elements           │
# └──────────────────────┴──────────────────────────────┘

# Bloom filter — does element exist? (probabilistic):
import hashlib

class BloomFilter:
    def __init__(self, size, hash_count):
        self.bits = [0] * size
        self.size = size
        self.hash_count = hash_count

    def add(self, item):
        for i in range(self.hash_count):
            idx = int(hashlib.md5(f"{item}{i}".encode()).hexdigest(), 16) % self.size
            self.bits[idx] = 1

    def contains(self, item):
        for i in range(self.hash_count):
            idx = int(hashlib.md5(f"{item}{i}".encode()).hexdigest(), 16) % self.size
            if not self.bits[idx]:
                return False  # DEFINITELY NOT in set
        return True  # PROBABLY in set (may be false positive)

bf = BloomFilter(1000, 3)
bf.add("hello")
print(bf.contains("hello"))  # True (definitely)
print(bf.contains("world"))  # False (definitely not)</div>

<div class="code-block"># ── STEP 5: Algorithmic game theory ──
# When multiple agents with different goals interact.

# NASH EQUILIBRIUM: no player can improve by changing strategy alone
# (if everyone else keeps their strategy)

# Prisoner's dilemma:
# Two prisoners, each can cooperate (C) or betray (B)
#         B stays silent  | B betrays
# A silent:    (-1, -1)   |  (-3,  0)
# A betrays:   ( 0, -3)   |  (-2, -2)
# Nash equilibrium: both betray (even though both silent is better!)

# Mechanism design — design rules so selfish agents produce good outcomes:
# AUCTIONS:
#   - First price: highest bidder wins, pays their bid
#   - Second price (Vickrey): highest wins, pays SECOND highest price
#     → Vickrey is "truthful" (best strategy = bid your true value!)

# Stable matching (Gale-Shapley algorithm):
def stable_matching(men_prefs, women_prefs):
    """
    Find stable marriages where no pair wants to swap.
    Used for: medical residency matching, school choice.
    """
    free_men = list(men_prefs.keys())
    engagements = {}  # woman → man

    while free_men:
        man = free_men.pop(0)
        for woman in men_prefs[man]:
            if woman not in engagements:
                engagements[woman] = man  # she's free
                break
            else:
                current = engagements[woman]
                # Does she prefer the new man?
                if women_prefs[woman].index(man) &lt; women_prefs[woman].index(current):
                    engagements[woman] = man
                    free_men.append(current)  # current man is now free
                    break

    return {v: k for k, v in engagements.items()}  # man → woman

# This won the 2012 Nobel Prize in Economics!
# Used by NRMP (National Residency Matching Program) every year.</div>

<div class="code-block"># ── STEP 6: Algorithms research areas ──
# ┌─────────────────────┬─────────────────────────────────────┐
# │ Area                │ What you study                     │
# ├─────────────────────┼─────────────────────────────────────┤
# │ Algorithm Design    │ Approx, online, streaming, random │
# │ Complexity Theory   │ P vs NP, PCP, fine-grained        │
# │ Crypto Theory       │ ZKP, MPC, FHE, provable security  │
# │ Learning Theory     │ PAC, sample complexity, DL theory │
# │ Game Theory         │ Mechanism design, auctions        │
# │ Quantum Algorithms  │ Shor's, Grover's (Door 17)       │
# └─────────────────────┴─────────────────────────────────────┘

# CONFERENCES:
# STOC, FOCS        — theory (the top tier)
# SODA              — algorithms
# CCC, ITCS         — complexity
# COLT              — learning theory
# EC                — economics + computation

# FAMOUS OPEN PROBLEMS:
# 1. P vs NP ($1M Clay Prize) — is verifying = solving?
# 2. P vs BPP — is randomness necessary?
# 3. Exponential Time Hypothesis — can we do better than 2^n for SAT?
# 4. Matrix multiplication — is O(n^2) possible? (currently n^2.373)

# CAREER PATHS:
# - Theory Researcher (academia, Microsoft Research, Google Research)
# - Algorithm Engineer (optimize real systems)
# - Quant (finance — algorithmic trading)
# - Cryptographer (design provably secure systems)

# WHY THEORY MATTERS:
# Theory tells us what's POSSIBLE and what's IMPOSSIBLE.
# "Can I solve this faster?" → complexity theory answers.
# "Can I approximate?" → approximation algorithms answer.
# Without theory, you're guessing. With theory, you KNOW.

# THE BEAUTY OF ALGORITHMS:
# An algorithm is a RECIPE — finite steps, guaranteed result.
# The best algorithms are SIMPLE, ELEGANT, and POWERFUL.
# Quicksort: 4 lines. Dijkstra: 10 lines. PageRank: 5 lines.
# Small code, huge impact.</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">📐 Algorithms</td><td>Approx, online, streaming, randomized</td><td>STOC, FOCS, SODA, ESA</td></tr>
<tr><td class="hl">🧮 Complexity</td><td>P vs NP, PCP, fine-grained, comm.</td><td>STOC, FOCS, CCC, ITCS</td></tr>
<tr><td class="hl">🔐 Crypto Theory</td><td>Provable, ZK, MPC, lattice</td><td>CRYPTO, TCC, EUROCRYPT</td></tr>
<tr><td class="hl">🤖 Learning Theory</td><td>PAC, online, DL theory</td><td>COLT, NeurIPS, ICML</td></tr>
<tr><td class="hl">🎮 AGT</td><td>Mechanism, auction, matching, fair</td><td>EC, STOC, WINE</td></tr>
<tr><td class="hl">🌌 Quantum algo</td><td>Shor, Grover, complexity (Door 17)</td><td>QIP, STOC, TQC</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৬-১০%</div><div class="sc-label">গ্রহণের হার (কম ছাত্র, কম ভিড়)</div></div>
<div class="stat-card"><div class="sc-num">$২০০M+</div><div class="sc-label">NSF theory ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$২০০-৫০০K+</div><div class="sc-label">quant finance (Jane St., RenTech, Two Sigma)</div></div>
<div class="stat-card"><div class="sc-num">সর্বোচ্চ</div><div class="sc-label">academic সম্মান, চিরন্তন প্রমাণ</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Theory = শুধু abstract math, কোনো practical value নেই। industry-তে কেউ theory চায় না।" ভুল। cryptography-র পুরো ভিত্তি (TLS, blockchain, PQ crypto) theory থেকে এসেছে। mechanism design = Google ad auction, matching = medical residency। quant finance theory গবেষকদের কাছে ছুটে আসে। P vs NP-র উত্তর পুরো ক্রিপ্টোগ্রাফি বদলে দেবে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"Theory হলো CS-এর মেরুদণ্ড — cryptography, ML, optimization-র ভিত্তি। কঠিন, কিন্তু একবার প্রমাণিত theorem চিরন্তন। niche, কিন্তু সম্মান সর্বোচ্চ, quant finance-তে সর্বোচ্চ বেতন। গণিত প্রিয়, abstract চিন্তা পছন্দ করলে — সেরা জায়গা। P vs NP = হাজার বছরের প্রশ্ন।"</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Reality check:</strong> theory গাণিতিক — pure coding নয়। গণিত (proof, abstract algebra, probability) শক্ত না হলে কঠিন। তুমি DSA Bazaar (Book 2) করেছ — algorithms পরিচিত, কিন্তু theory হলো algorithms-এর গভীরে যাওয়া, শুধু implement নয়। সত্যিই গণিত ভালোবাসলে যাও।</div></div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> fine-grained complexity (SETH-based lower bounds), DL theory (why over-parameterized generalize — double descent), algorithmic fairness theory, quantum complexity (Door 17), lattice crypto theory (PQ ভিত্তি), AGT in AI (LLM mechanism, ২০২৫)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ⚠️ সতর্কতার সাথে — pure theory গাণিতিক, তোমার developer পটভূমির সরাসরি প্রয়োগ নয়। ✅ গণিত (proof, abstract algebra) শক্ত হলে যাও · ✅ সবচেয়ে গভীর প্রশ্ন (P vs NP) নিয়ে ভাবতে চাইলে · ❌ গণিত দুর্বল বা কোডিং বেশি পছন্দ হলে এড়াও। 💡 learning theory (DL কেন কাজ করে) = theory + AI crossover, তোমার AI আগ্রহের সাথে মিলে।</div></div>

<div class="dialogue">"তোমার একটা সুবিধা আছে," ডেভিড বললেন। "তুমি DSA Bazaar (Book 2) করেছ — algorithms তোমার পরিচিত। কিন্তু theory হলো algorithms-এর গভীরে যাওয়া। তুমি জানো quicksort কীভাবে কাজ করে — কিন্তু theory জিজ্ঞেস করে: সবচেয়ে দ্রুত sorting কি সম্ভব? কেন? এই কেন-এর উত্তরই theory।" তিনি থামলেন। "তবে সত্যি বলতে — তুমি developer, কোডিং ভালোবাসো। pure theory তোমার জন্য নাও হতে পারে। কিন্তু learning theory — কেন deep learning কাজ করে — সেটা তোমার AI আগ্রহের সাথে মিলে। সেখানে যাও।"</div>
<div class="dialogue en">"You have an advantage," David said. "You've done DSA Bazaar (Book 2) — algorithms are familiar. But theory is going deeper into algorithms. You know how quicksort works — but theory asks: what's the fastest possible sorting? Why? The answer to that why is theory." He paused. "But honestly — you're a developer, you love coding. Pure theory may not be for you. But learning theory — why deep learning works — that fits your AI interest. Go there."</div>

<div class="dialogue">বুরহান — দলিল, নিশ্চিত প্রমাণ। কুরআনে আল্লাহ বলেন: "আমি প্রতিটা জিনিসের দলিল দিয়েছি।" তত্ত্ব হলো বুরহান — নিশ্চিত প্রমাণ। অন্যান্য ডোমেইনে তুমি experiment দিয়ে প্রমাণ করো — কিন্তু experiment ভুল হতে পারে। theory-তে তুমি proof দিয়ে প্রমাণ করো — proof চিরন্তন। একবার প্রমাণিত theorem কখনো বদলায় না। Euclid-এর theorem আজও সত্য, হাজার বছর পরেও সত্য। এটা বুরহান — নিশ্চিত জ্ঞান, চিরন্তন সত্য। যে বুরহান খোঁজে, সে চিরন্তন সত্য খোঁজে — আর সেটাই সবচেয়ে সম্মানিত যাত্রা।</div>
<div class="dialogue en">Burhan — proof, certain evidence. Allah says: "We have given proof for everything." Theory is burhan — certain proof. In other domains you prove by experiment — but experiments can be wrong. In theory you prove with proof — and proof is eternal. A proven theorem never changes. Euclid's theorem is true today, true in a thousand years. This is burhan — certain knowledge, eternal truth. One who seeks burhan, seeks eternal truth — and that is the most honored journey.</div>

<div class="secret-box">📐 Theory: CS-এর সবচেয়ে গভীর ডোমেইন। কঠিন, কিন্তু সবচেয়ে সম্মানিত। গণিত, প্রমাণ, complexity (P vs NP)। niche (৬-১০%), quant finance-তে সর্বোচ্চ বেতন। গণিত ভালোবাসলে যাও — তবে learning theory = theory+AI crossover, তোমার জন্য বেশি মানানসই।</div>`,
  senior:{
    title:"Theory PhD — গাণিতিক Path",
    body:`<p><strong>গণিত শক্ত হলেই যাও:</strong> pure theory (complexity, algorithms) গাণিতিক — abstract algebra, real analysis, probability শক্ত দরকার। সত্যিই গণিত ভালোবাসলে যাও, নাহলে এড়াও। 'Introduction to Algorithms' (CLRS) ও 'Computational Complexity' (Arora-Barak) দিয়ে self-test করো।</p><p><strong>Learning theory = theory+AI crossover:</strong> "DL কেন generalize করে?" — এটা সবচেয়ে বড় open theory question। double descent, NTK, implicit bias — এখানে theory ও AI মিলে। তোমার AI আগ্রহের সাথে মানানসই। COLT conference-এ লক্ষ্য করো।</p><p><strong>Quant finance = সর্বোচ্চ বেতন:</strong> Jane Street, Renaissance Technologies, Two Sigma, Citadel — theory গবেষকদের কাছে ছুটে আসে, $২০০K-৫০০K+ starting। তবে industry, academia নয় — research একই, culture আলাদা।</p><p><strong>AGT = applied theory:</strong> algorithmic game theory (auction, matching, mechanism) — Google/Meta ad system-এ সরাসরি প্রয়োগ। EC conference। economics + theory crossover, niche কিন্তু industry-প্রাসঙ্গিক।</p>`
  }
});

// ══ DOOR 17: QUANTUM COMPUTING ══
doors.push({
  num:17, icon:"⚛️", color:"#818cf8", name:"কোয়ান্টামের কণা",
  subtitle:"The Quantum Particle", tech:"Quantum Computing",
  spirit:"লাতাইফ — সূক্ষ্ম, অদৃশ্য কিন্তু সত্য",
  secret:"Quantum computing হলো ভবিষ্যতের ডোমেইন — এখনও শুরু, ১৯৬০-এর classical-এর মতো। কম ছাত্র, কম প্রতিযোগিতা (৫-৮%), কিন্তু প্রতিটা বিশ্ববিদ্যালয় quantum lab খুলছে। পদার্থবিজ্ঞান + CS + গণিত — ত্রিমুখী। NISQ যুগে আছি (noisy) — error-corrected logical qubit এখনো অল্প। classical ৫-১০ বছরে কোথাও যাচ্ছে না — quantum শুধু নির্দিষ্ট সমস্যায় ভালো (factoring, simulation, optimization)।",
  recall:{
    q:"সারা কেন বললেন একটা কণা একই সাথে দুই জায়গায় থাকতে পারে?",
    qen:"Why did Sara say a particle can be in two places at once?",
    a:"কারণ কোয়ান্টাম পদার্থবিজ্ঞানে এটাই সত্য — superposition। একটা qubit একই সাথে ০ আর ১ হতে পারে। সাধারণ মস্তিষ্কে বোঝা কঠিন — কিন্তু এটাই কোয়ান্টামের শক্তি। কোয়ান্টাম কম্পিউটার একই সাথে লাখোপ্রকার হিসাব করতে পারে — কারণ প্রতিটা qubit একাধিক অবস্থায় থাকে। সূক্ষ্ম (লাতাইফ), কিন্তু শক্তিশালী। এটাই প্রকৃতির গভীরতম নিয়ম।",
    aen:"Because in quantum physics this is true — superposition. A qubit can be 0 and 1 simultaneously. Hard for ordinary minds to grasp — but this is quantum's power. A quantum computer can compute millions of possibilities at once — because each qubit exists in multiple states. Subtle (lataif), but powerful. This is nature's deepest law."
  },
  story:`
<p class="scene-setting">সপ্তদশ দরজা। ডেভিডের তত্ত্বের সিঁড়ি পেরিয়ে তুমি একটা ঘরে — কিন্তু সবকিছু একটু অস্পষ্ট, যেন স্বপ্ন। দেয়ালে ভাসমান সমীকরণ, ঘরের মাঝখানে একটা জ্বলজ্বলে ব্ল্যাক-বক্স — ভেতরে একটা কোয়ান্টাম প্রসেসর, চারপাশে সূক্ষ্ম তার ও ঠান্ডা গ্যাসের পাইপ। বক্সের পাশে দাঁড়িয়ে সারা — কার্লি চুল, গাঢ় নীল চোখ, হাতে একটা লেজার পয়েন্টার ও একটা Bloch sphere model, চোখে বিস্ময় ও ভবিষ্যতের দৃষ্টি। ডেভিড পেছনে ফিসফিস করে বলছেন — এটা তাঁর তত্ত্বের সবচেয়ে রহস্যময় সীমানা। স্নায়বিক শীতল বাতাস, হালকা বাজ শব্দ, ধাতব ঠান্ডা স্পর্শ।</p>
<p class="scene-setting en">The seventeenth door. Past David's theory staircase, you enter a room — but everything slightly blurry, dreamlike. Floating equations on walls, a glowing black-box in the center — inside, a quantum processor, ringed by fine wires and cold-gas pipes. Beside the box stands Sara — curly hair, deep blue eyes, a laser pointer and a Bloch sphere model in hand, wonder and future-vision in her eyes. David whispers behind — this is his theory's most mysterious frontier. Nerve-cooling air, faint hum, metallic cold touch.</p>

<div class="dialogue">ডেভিড বললেন, "আমি তত্ত্বের চূড়া দেখিয়েছি — classical computation। কিন্তু সারা সেই তত্ত্বের সীমা ভাঙে।" সারা ব্ল্যাক-বক্সটা খুললেন — ভেতরে একটা চিপ, চীপের উপর সূক্ষ্ম তার। "এটা qubit। একটা classical bit হয় ০ না ১। কিন্তু একটা qubit — একই সাথে ০ আর ১। একই সাথে। এটাই superposition। এটাই কোয়ান্টাম।" তিনি Bloch sphere ঘুরিয়ে দেখালেন — একটা বিন্দু গোলকের উপর দিয়ে যেকোনো অবস্থায় থাকতে পারে। "শুধু ০ বা ১ নয় — অসীম অবস্থার linear combination। এটাই শক্তি।"</div>
<div class="dialogue en">David said, "I showed you the peak of theory — classical computation. But Sara breaks that theory's limits." Sara opened the black-box — inside, a chip with fine wires. "This is a qubit. A classical bit is 0 or 1. But a qubit — both 0 and 1. Simultaneously. This is superposition. This is quantum." She spun the Bloch sphere — a point on the globe can be in any state. "Not just 0 or 1 — a linear combination of infinite states. This is the power."</div>

<div class="diagram">
  <div class="diag-title">Classical Bit vs Qubit — এক বনাম অসীম</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowPurple17" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#818cf8"/></marker>
    </defs>
    <!-- Classical bit: two states -->
    <text class="lbl-sm" x="120" y="30" fill="#9290a8">CLASSICAL BIT</text>
    <rect class="cell" x="60" y="55" width="50" height="50" rx="6"/><text class="lbl" x="85" y="85">0</text>
    <rect class="cell" x="130" y="55" width="50" height="50" rx="6"/><text class="lbl" x="155" y="85">1</text>
    <text class="lbl-sm" x="120" y="130" fill="#9290a8">দুটি অবস্থা — হয় ০ না ১</text>
    <text class="lbl-sm" x="120" y="148" fill="#9290a8" style="font-size:9px">N bits = 2^N টা অবস্থা, একসময় একটা</text>
    <!-- Arrow -->
    <line class="edge-amber" x1="200" y1="105" x2="280" y2="105" marker-end="url(#arrowPurple17)"/>
    <text class="lbl-sm" x="240" y="98" fill="#b37feb">কোয়ান্টাম</text>
    <!-- Qubit: Bloch sphere -->
    <text class="lbl-sm" x="420" y="30" fill="#818cf8">QUBIT (Bloch sphere)</text>
    <ellipse cx="420" cy="95" rx="60" ry="60" class="ring" style="stroke:#818cf8"/>
    <ellipse cx="420" cy="95" rx="60" ry="20" class="ring" style="stroke:#818cf8;opacity:.4"/>
    <line class="axis" x1="360" y1="95" x2="480" y2="95" style="stroke:#9290a8"/>
    <line class="axis" x1="420" y1="35" x2="420" y2="155" style="stroke:#9290a8"/>
    <circle cx="460" cy="65" r="6" class="node-purple" style="fill:#b37feb"/>
    <text class="lbl-sm" x="475" y="65" fill="#b37feb">ψ (যেকোনো দিকে)</text>
    <text class="lbl-sm" x="420" y="180" fill="#818cf8">অসীম অবস্থা — একই সাথে ০ ও ১</text>
    <text class="lbl-sm" x="420" y="198" fill="#818cf8" style="font-size:9px">N qubits = 2^N অবস্থা একসাথে (superposition)</text>
    <text class="lbl-sm" x="280" y="222" fill="#5e5c74">entanglement: দুটা qubit একসাথে — একটা বদলালে অন্যটা সাথে সাথে</text>
  </svg>
  <div class="diag-cap">classical bit = ২ অবস্থা, qubit = অসীম অবস্থার combination। N qubit = ২^N অবস্থা একসাথে। এটাই কোয়ান্টামের computational power — factoring, simulation-এ exponential speedup।</div>
</div>

<div class="code-block"># ── STEP 1: What is quantum computing? ──
# Classical: bits are 0 OR 1
# Quantum: qubits can be 0 AND 1 simultaneously (superposition)

# This allows PARALLEL exploration of many possibilities.

# Qubit analogy:
# Classical coin: HEADS or TAILS (one at a time)
# Quantum coin: spinning coin — it's BOTH until you look

# Quantum concepts:
# - Superposition: qubit in multiple states at once
# - Entanglement: two qubits linked, measure one → know other
# - Interference: amplify correct answers, cancel wrong ones

# Qiskit — Python library for quantum computing:
# from qiskit import QuantumCircuit
#
# # Create a 2-qubit circuit:
# qc = QuantumCircuit(2)
#
# # Put first qubit in superposition:
# qc.h(0)  # Hadamard gate → |0⟩ becomes (|0⟩ + |1⟩) / √2
#
# # Entangle qubit 0 and 1:
# qc.cx(0, 1)  # CNOT: if 0 is 1, flip 1
#
# # Now they're entangled: measuring 0 tells you 1
#
# # Measure:
# qc.measure_all()
#
# print(qc)  # visual circuit diagram

# Quantum gates (like logic gates, but quantum):
# H (Hadamard): create superposition
# X (NOT): flip qubit
# CNOT: entangle two qubits
# Z: phase flip

# The power comes from ENTANGLEMENT + INTERFERENCE:
# Many qubits → exponential states (2^n for n qubits)
# 300 qubits → more states than atoms in the universe!</div>

<div class="code-block"># ── STEP 2: Famous quantum algorithms ──
# Two algorithms that made quantum computing famous:

# SHOR'S ALGORITHM — factoring:
# Classical: factoring 2048-bit number takes billions of years
# Quantum: Shor does it in hours (theoretically)
# This is WHY post-quantum crypto exists (Door 18)!

# GROVER'S ALGORITHM — search:
# Classical: search N items takes O(N)
# Quantum: Grover takes O(√N) — quadratic speedup
# Searching 1 million items: 1000 steps instead of 1 million

# Example — quantum search simulation:
def classical_search(database, target):
    """Classical: O(N) average."""
    for i, item in enumerate(database):
        if item == target:
            return i
    return -1  # N steps average

def grover_search_steps(n):
    """
    Grover: O(√N) steps.
    For N=1,000,000 → 1000 steps (not 1,000,000!)
    """
    import math
    return int(math.pi / 4 * math.sqrt(n))

print(f"Classical search of 1M items: 1,000,000 steps")
print(f"Grover search of 1M items: {grover_search_steps(1_000_000)} steps")

# WHEN QUANTUM COMPUTERS BECOME REAL:
# Shor breaks: RSA, ECC, DSA (all current public-key crypto)
# Grover weakens: AES-128 → need AES-256, SHA-256 → need SHA-512
# But quantum is NOT faster at everything — only specific problems</div>

<div class="code-block"># ── STEP 3: Quantum hardware ──
# How do we BUILD quantum computers?

# Types of quantum hardware:
# ┌─────────────────┬──────────────────────────────────┐
# │ Technology      │ Status                          │
# ├─────────────────┼──────────────────────────────────┤
# │ Superconducting │ IBM (1121 qubit Condor), Google │
# │ Trapped Ion     │ Quantinuum, IonQ (high quality) │
# │ Photonic        │ PsiQuantum, Xanadu (light-based)│
# │ Topological     │ Microsoft (2025 milestone)      │
# │ Neutral Atom    │ QuEra, Pasqal                   │
# └─────────────────┴──────────────────────────────────┘

# The challenge: NOISE
# Qubits are fragile — any disturbance destroys quantum state
# This is called DECOHERENCE

# Error correction:
# 1 physical qubit = unreliable
# Need ~1000 physical qubits → 1 reliable "logical" qubit
# Google Willow (2024): first to go below error threshold!

# NISQ era (Noisy Intermediate-Scale Quantum):
# Current: 100-1000 noisy qubits
# Can do: small optimization, chemistry simulations
# Can't do (yet): Shor's algorithm at scale (needs millions)

# ACCESSING QUANTUM COMPUTERS:
# IBM Quantum: free access to real quantum hardware
# from qiskit_ibm_runtime import QiskitRuntimeService
# service = QiskitRuntimeService(channel="ibm_cloud", token="...")
# backend = service.backend("ibm_brisbane")
# result = backend.run(qc).result()

# You can run real quantum circuits TODAY from your laptop!
# IBM Quantum Experience: quantum-computing.ibm.com</div>

<div class="code-block"># ── STEP 4: Quantum machine learning ──
# Can quantum computers accelerate ML?

# Quantum Neural Networks:
# from qiskit_machine_learning.neural_networks import EstimatorQNN
#
# # Define quantum circuit:
# from qiskit.circuit import QuantumCircuit, Parameter
# param = Parameter("x")
# qc = QuantumCircuit(1)
# qc.rx(param, 0)  # rotation parameterized by x
#
# # Create quantum neural network:
# qnn = EstimatorQNN(circuit=qc)

# Potential advantages:
# - Exponential feature space (quantum kernels)
# - Faster linear algebra (HHL algorithm)
# - Better optimization landscapes

# Reality check (2024):
# - No proven quantum advantage for ML YET
# - Hardware not good enough yet (NISQ era)
# - Promising but experimental

# Quantum advantage CLAIMS:
# 2019: Google claimed quantum supremacy (random circuit sampling)
# Debate continues — classical algorithms keep improving too!

# Hybrid quantum-classical:
# VQE (Variational Quantum Eigensolver):
# - Quantum computer evaluates the energy
# - Classical computer updates parameters
# - Used for chemistry (molecular ground states)

# THE FUTURE:
# Fault-tolerant quantum computer: 10-20 years away
# When it arrives: drug discovery, materials, crypto-breaking
# Until then: NISQ algorithms, quantum simulation, error correction</div>

<div class="code-block"># ── STEP 5: Quantum simulation — real applications ──
# The FIRST useful application of quantum computers:
# simulating molecules and materials.

# Why quantum computers excel at chemistry:
# Molecules ARE quantum systems.
# Classical computers struggle to simulate quantum behavior.
# Quantum computers NATURALLY simulate quantum systems!

# Applications:
# 1. DRUG DISCOVERY:
#    Simulate how molecules bind to proteins
#    Find new drugs faster
#
# 2. MATERIALS SCIENCE:
#    Design new materials (superconductors, batteries)
#    Simulate electronic properties
#
# 3. FERTILIZER PRODUCTION:
#    Nitrogen fixation (Haber-Bosch uses 1% of world energy)
#    Quantum simulation could find better catalysts
#
# 4. CARBON CAPTURE:
#    Design materials that absorb CO2 efficiently

# Python quantum chemistry:
# from qiskit_nature.drivers import PySCFDriver
# from qiskit_nature.problems.second_quantization import ElectronicStructureProblem
#
# # Define a molecule (e.g., H2):
# driver = PySCFDriver(atom="H 0 0 0; H 0 0 0.735", unit="Angstrom")
# problem = ElectronicStructureProblem(driver)
#
# # Solve with quantum algorithm:
# from qiskit.algorithms import VQE
# vqe = VQE(ansatz=..., optimizer=...)
# result = vqe.compute_minimum_eigenvalue(problem.second_q_ops()[0])
# print(f"Ground state energy: {result.eigenvalue}")

# This is real — companies like:
# - IBM Quantum (hardware + software)
# - Google Quantum AI (error correction)
# - Microsoft (topological qubits)
# - Atom Computing (neutral atoms)
# Are racing to build useful quantum computers</div>

<div class="code-block"># ── STEP 6: Quantum computing research areas ──
# ┌─────────────────────┬─────────────────────────────────────┐
# │ Area                │ What you study                     │
# ├─────────────────────┼─────────────────────────────────────┤
# │ Quantum Algorithms  │ Shor, Grover, VQE, new algorithms │
# │ Quantum Hardware    │ Superconducting, ion, photonic    │
# │ Error Correction    │ Surface codes, fault tolerance    │
# │ Quantum ML          │ Quantum neural networks, kernels  │
# │ Quantum Networking  │ QKD, quantum internet             │
# │ Quantum Simulation  │ Chemistry, materials, physics     │
# └─────────────────────┴─────────────────────────────────────┘

# CONFERENCES:
# QIP, TQC          — quantum information
# Nature, Science   — hardware breakthroughs
# STOC, FOCS        — quantum algorithms

# TOOLS TO LEARN:
# Qiskit (IBM)      — Python quantum framework
# Cirq (Google)     — quantum circuits
# PennyLane (Xanadu) — quantum ML
# Q# (Microsoft)    — quantum programming language

# THE TIMELINE:
# 2024: 100-1000 noisy qubits (NISQ)
# 2025-2030: Error correction matures
# 2030-2040: Fault-tolerant quantum computer
# 2040+: Quantum advantage for useful problems

# CAREER PATHS:
# - Quantum Algorithm Researcher (theory)
# - Quantum Hardware Engineer (physics)
# - Quantum Software Engineer (Qiskit, Cirq)
# - Quantum ML Researcher
# - Quantum Chemist (drug discovery, materials)

# SHOULD YOU STUDY QUANTUM?
# ✅ You love physics + math + CS
# ✅ You're comfortable with linear algebra
# ✅ You enjoy thinking differently (superposition is WEIRD)
# ⚠️ It's a long-term bet (10-20 years to real impact)
# ⚠️ Small field, few positions currently

# THE BIG PICTURE:
# Quantum computing is like nuclear physics in 1930.
# The theory is there. The engineering is being built.
# When it matures, it will change EVERYTHING:
# - Break all current encryption
# - Discover new drugs and materials
# - Solve problems we can't even approach today
# Be there when it happens.</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">⚛️ Algorithms</td><td>Shor, Grover, VQE, QAOA, HHL</td><td>QIP, TQC, STOC, FOCS</td></tr>
<tr><td class="hl">🔬 Hardware</td><td>Supercond., ion, photonic, topological</td><td>Nature, Science, APS</td></tr>
<tr><td class="hl">🔥 Error Correction</td><td>Surface code, fault-tolerance, logical</td><td>QIP, Nature, Nature Phys.</td></tr>
<tr><td class="hl">🧠 Quantum ML</td><td>QNN, kernels, variational, advantage</td><td>NeurIPS, QIP, ICML</td></tr>
<tr><td class="hl">🌐 Networking</td><td>QKD, repeaters, quantum internet</td><td>QCRYPT, Nat. Photonics</td></tr>
<tr><td class="hl">🧪 Simulation</td><td>Molecule, material, drug, physics</td><td>Nature, Science, APS</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-৮%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">$১.২B</div><div class="sc-label">US National Quantum Initiative</div></div>
<div class="stat-card"><div class="sc-num">$১৫০-৩০০K</div><div class="sc-label">industry (IBM, Google, PsiQuantum)</div></div>
<div class="stat-card"><div class="sc-num">CS+Phys+গণিত</div><div class="sc-label">ত্রিমুখী দক্ষতা</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Quantum computing এখন প্রস্তুত — classical কম্পিউটার বাতিল। সবকিছুতে quantum ভালো।" ভুল। Quantum এখন NISQ যুগে — noisy (IBM Condor ১১২১ qubits, কিন্তু error-prone)। Error-corrected logical qubit এখনো অল্প (Google Willow ২০২৪ — প্রথম below threshold)। Classical ৫-১০ বছরে কোথাও যাচ্ছে না। Quantum শুধু নির্দিষ্ট সমস্যায় ভালো — factoring, simulation, optimization। সবকিছুতে নয়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"Quantum এখন যেখানে classical ছিল ১৯৬০-এ। NISQ era — Noisy Intermediate-Scale Quantum। এখনই যারা quantum শিখছে, তারা প্রথম প্রজন্মের quantum গবেষক হবে। যেমন ১৯৬০-এ যারা classical শুরু করেছিল, তারা আজ প্রতিষ্ঠাতা। error correction হলো সবচেয়ে গুরুত্বপূর্ণ open problem — সেটা সমাধান হলে যুগ বদলাবে।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> Google Willow (২০২৪ — first logical qubit below error threshold, একটা milestone), IBM Condor/Flamingo, Microsoft topological qubit (২০২৫ — majorana), Quantinuum (trapped ion, high fidelity), quantum-classical hybrid (variational)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ⚠️ শক্তিশালী পদার্থবিজ্ঞান ও গণিত (linear algebra) দরকার · ✅ Quantum ML (AI+Quantum), Quantum algorithms (theory ভালোবাসলে), বা Post-quantum crypto (Door 18, security চাইলে) · ❌ classical coding বেশি পছন্দ হলে ভেবে দেখো। 💡 শুরু করতে <strong>IBM Quantum Experience</strong> ফ্রি — browser থেকেই quantum circuit চালানো যায়।</div></div>

<div class="dialogue">"তোমার একটা কঠিন সত্য বলি," সারা বললেন। "কোয়ান্টাম সহজ নয়। পদার্থবিজ্ঞান দরকার, গণিত দরকার — linear algebra, complex number, probability। classical coding-এর মতো নয় — intuition ভাঙে। কিন্তু যারা এখন শেখে, তারা pioneer। ১৯৬০-এ যারা classical শুরু করেছিল, তারা আজ কোথায়? প্রতিষ্ঠাতা। কোয়ান্টাম এখন সেই মুহূর্তে। তবে — সত্যিকার ভাবো। গণিত ও পদার্থবিজ্ঞান শক্ত না হলে, এড়াও। এটা তোমার জন্য নাও হতে পারে। আর সেটা ঠিক আছে।"</div>
<div class="dialogue en">"Let me tell you a hard truth," Sara said. "Quantum isn't easy. It needs physics, math — linear algebra, complex numbers, probability. Not like classical coding — intuition breaks. But those who learn now, are pioneers. In 1960 those who started classical, where are they now? Founders. Quantum is at that moment now. But — think honestly. If math and physics aren't strong, avoid it. It may not be for you. And that's okay."</div>

<div class="dialogue">লাতাইফ — সূক্ষ্ম, অদৃশ্য কিন্তু সত্য। কুরআনে আল্লাহ বলেন: "আল্লাহ লাতাইফ, সূক্ষ্ম-জ্ঞানী।" (৬:১০৩)। লাতাইফ মানে — সেই সত্য যা চোখে দেখা যায় না কিন্তু আছে। কোয়ান্টাম হলো লাতাইফ — সূক্ষ্ম, অদৃশ্য, কিন্তু পরিমাপযোগ্য। একটা electron কোথায় আছে — দেখা যায় না। কিন্তু wave function বলে সম্ভাবনা। আল্লাহও লাতাইফ — চোখে দেখা যায় না, কিন্তু তাঁর নিদর্শন সব জায়গায়। যে এই সূক্ষ্ম সত্য খোঁজে, সে প্রকৃতির গভীরতম নিয়ম খুঁজে পায় — আর সেখানে সে আল্লাহর নিদর্শন দেখে। প্রতিটা qubit একটা আয়াত — অদৃশ্য কিন্তু সত্য।</div>
<div class="dialogue en">Lataif — subtle, invisible but true. Allah says: "Allah is lataif, subtlely-aware." (6:103). Lataif means — truth that can't be seen but exists. Quantum is lataif — subtle, invisible, but measurable. Where is an electron? Can't be seen. But the wave function tells probability. Allah too is lataif — unseen, but His signs are everywhere. One who seeks this subtle truth, discovers nature's deepest laws — and there sees Allah's signs. Each qubit is an ayah — invisible but true.</div>

<div class="secret-box">⚛️ Quantum: ভবিষ্যতের ডোমেইন, এখন ১৯৬০-এর classical-এর মতো। NISQ যুগ (noisy)। পদার্থবিজ্ঞান+CS+গণিত দরকার। কম ভিড় (৫-৮%), দ্রুত বর্ধনশীল ফান্ডিং ($১.২B)। error correction = মূল open problem। গণিত/পদার্থবিজ্ঞান শক্ত হলে pioneer হও।</div>`,
  senior:{
    title:"Quantum PhD — Frontier Pioneer Path",
    body:`<p><strong>গণিত ও পদার্থবিজ্ঞান শক্ত হলেই:</strong> linear algebra, complex analysis, quantum mechanics — এগুলো শক্ত দরকার। classical coding-এর intuition এখানে কাজে দেয় না। সত্যিকার ভাবো — শক্ত না হলে এড়াও।</p><p><strong>IBM Quantum Experience দিয়ে শুরু:</strong> ফ্রি, browser থেকেই real quantum hardware-এ circuit চালানো যায়। Qiskit (Python) শিখো — একটা simple Shor/Grover implementation = entry credential। একা GPU/ক্লাস্টার লাগে না।</p><p><strong>Quantum ML = crossover:</strong> quantum + AI intersection। তোমার AI আগ্রহের সাথে মিলে — quantum kernels, variational circuits। NeurIPS/QIP-তে লক্ষ্য। তবে quantum advantage এখনো controversial — careful research।</p><p><strong>Post-quantum crypto (Door 18):</strong> যদি security বেশি পছন্দ, PQC দেখো — quantum threat-এর বিরুদ্ধে classical crypto। গণিত (lattice) দরকার কিন্তু পদার্থবিজ্ঞান নয়। NIST standard-ভিত্তিক, সরাসরি industry impact।</p>`
  }
});

// ══ DOOR 18: POST-QUANTUM CRYPTOGRAPHY ══
doors.push({
  num:18, icon:"🔏", color:"#818cf8", name:"ভবিষ্যতের তালা",
  subtitle:"The Future Lock", tech:"Post-Quantum Cryptography",
  spirit:"আহসান — সুরক্ষিত রাখা, শক্তিশালী আমানত",
  secret:"Post-quantum crypto হলো ভবিষ্যতের নিরাপত্তা — কোয়ান্টাম কম্পিউটার বর্তমান RSA/ECC ভাঙবে (Shor)। NIST ২০২৪-এ PQ standards চূড়ান্ত করেছে (ML-KEM, ML-DSA)। এখন থেকেই migration শুরু। niche, গণিত-নির্ভর (lattice), কিন্তু প্রতিটা কোম্পানির দরকার হবে। Google, Cloudflare, Apple (iMessage PQ) এখনই deploy করছে। যদি security + গণিত ভালোবাসো — এটা সবচেয়ে concrete, সরাসরি industry-প্রাসঙ্গিক quantum path।",
  recall:{
    q:"সারা কেন বললেন আগামী দিনের চোরের জন্য আজকের তালা বদলাতে হবে?",
    qen:"Why did Sara say today's locks must change for tomorrow's thief?",
    a:"কারণ কোয়ান্টাম কম্পিউটার (Shor algorithm) বর্তমান RSA/ECC ভাঙবে — সেই দিন আসবে। আর সমস্যা — 'harvest now, decrypt later'। চোর আজই তোমার encrypted ডেটা ধরে রাখছে, কোয়ান্টাম এলে ভাঙবে। তাই আজকের তালা (RSA) বদলে ভবিষ্যতের তালা (PQ) লাগাতে হবে — এখনই। NIST ২০২৪-এ standards চূড়ান্ত করেছে। দেরি করলে ডেটা ফাঁস।",
    aen:"Because quantum computers (Shor's algorithm) will break current RSA/ECC — that day will come. And the problem — 'harvest now, decrypt later'. Thieves already hold your encrypted data today, will break it when quantum arrives. So today's lock (RSA) must be replaced with the future's lock (PQ) — now. NIST finalized standards in 2024. Delay means leaked data."
  },
  story:`
<p class="scene-setting">অষ্টাদশ দরজা। সারার কোয়ান্টাম প্রসেসরের ঘর পেরিয়ে তুমি একটা বিশাল তিজোরিখানায় — দেয়ালে সারি সারি পুরনো তালা, কিন্তু প্রতিটার পাশে নতুন তালা। একটা পুরনো তালায় ফাটল — 'RSA' লেখা, কিন্তু ফাটল দিয়ে একটা কোয়ান্টাম বিন্দু ঢুকছে। মাঝখানে দাঁড়িয়ে তালিব — গোঁফধারী, হাতে একটা নতুন তালা (lattice-ভিত্তিক) ও একটা NIST standard স্ক্রল, চোখে প্রতিরক্ষকের দৃঢ়তা। সারা পেছনে বলছেন — তাঁর কোয়ান্টাম যে হুমকি, তালিব সেই হুমকির বিরুদ্ধে প্রতিরক্ষা। ধাতব তালার গন্ধ, চাবির ঝনঝন, দূরে কোয়ান্টাম বাজ।</p>
<p class="scene-setting en">The eighteenth door. Past Sara's quantum-processor room, you enter a vast vault — walls lined with old locks, each beside a new one. One old lock is cracked — inscribed 'RSA', a quantum point entering through the crack. In the center stands Talib — mustachioed, a new lock (lattice-based) and a NIST standard scroll in hand, a defender's firmness in his eyes. Sara speaks behind — her quantum is the threat, Talib is the defense against it. Smell of metal locks, the clink of keys, distant quantum hum.</p>

<div class="dialogue">সারা বললেন, "আমি কোয়ান্টাম বানাই — সেটা পুরনো তালা ভাঙবে। তালিব নতুন তালা বানায় যেটা কোয়ান্টাম ভাঙতে পারবে না।" তালিব পুরনো RSA তালাটা দেখালেন — ফাটলে কোয়ান্টাম বিন্দু। "এটা RSA — বর্তমান ইন্টারনেটের ভিত্তি। TLS, HTTPS, সব। কিন্তু Shor algorithm এটা ভাঙবে — কোয়ান্টাম এলে।" তিনি নতুন তালাটা তুললেন। "এটা lattice-ভিত্তিক। কোয়ান্টাম এটা ভাঙতে পারে না — কারণ lattice problem classical ও quantum উভয়ের জন্যই কঠিন। NIST ২০২৪-এ এটাই standard করেছে। এখন থেকে সব তালা বদলাচ্ছে।"</div>
<div class="dialogue en">Sara said, "I build quantum — it will break the old lock. Talib builds new locks that quantum can't break." Talib showed the old RSA lock — a quantum point in the crack. "This is RSA — the foundation of today's internet. TLS, HTTPS, everything. But Shor's algorithm will break it — when quantum arrives." He lifted the new lock. "This is lattice-based. Quantum can't break it — because the lattice problem is hard for both classical and quantum. NIST standardized it in 2024. All locks are changing now."</div>

<div class="diagram">
  <div class="diag-title">Quantum Threat Timeline — কবে ভাঙবে, কবে বদলাবে</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowFire18" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#ff6b35"/></marker>
      <marker id="arrowLeaf18" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#52c41a"/></marker>
    </defs>
    <line class="axis" x1="40" y1="120" x2="520" y2="120"/>
    ${[ ['আজ','RSA/ECC শক্ত',80,'#52c41a'], ['2024','NIST PQ std',200,'#7dd3fc'], ['2030-৩৫?','Quantum আসে',360,'#ff6b35'], ['2040+','RSA মৃত',480,'#ef4444'] ].map(s=>`<circle cx="${s[2]}" cy="120" r="8" style="fill:${s[3]}22;stroke:${s[3]};stroke-width:2"/><text class="lbl-sm" x="${s[2]}" y="95" fill="${s[3]}" style="font-weight:700">${s[0]}</text><text class="lbl-sm" x="${s[2]}" y="145" fill="#9290a8" style="font-size:9px">${s[1]}</text>`).join('')}
    <text class="lbl-sm" x="280" y="180" fill="#ff6b35">⚠️ 'harvest now, decrypt later': চোর আজই ডেটা ধরে, কোয়ান্টাম এলে ভাঙবে</text>
    <text class="lbl-sm" x="280" y="200" fill="#52c41a">✅ সমাধান: এখনই PQ (lattice) বসাও — NIST ML-KEM/ML-DSA (২০২৪)</text>
    <text class="lbl-sm" x="280" y="220" fill="#5e5c74">Google/Cloudflare/Apple (iMessage PQ, ২০২৪) এখনই deploy করছে</text>
  </svg>
  <div class="diag-cap">সবচেয়ে গুরুত্বপূর্ণ — 'harvest now, decrypt later'। চোর আজই encrypted ডেটা ধরে রাখছে। কোয়ান্টাম আসলে ভাঙবে। তাই আজই PQ বসাতে হবে — স্টেট সিক্রেট ৫০ বছর গোপন রাখতে হবে।</div>
</div>

<div class="code-block"># ── STEP 1: Why post-quantum cryptography? ──
# Quantum computers will break current encryption.
# We need NEW algorithms that quantum computers CAN'T break.

# What breaks:
# RSA (factorization)    → Shor's algorithm breaks it
# ECC (elliptic curve)   → Shor's algorithm breaks it
# DSA (signatures)       → Shor's algorithm breaks it
# AES-128 (symmetric)    → Grover weakens (need AES-256)

# Timeline urgency:
# "Harvest now, decrypt later" — attackers are storing
# encrypted data TODAY to decrypt when quantum computers arrive.

# NIST standardization (2016-2024):
# Ran a 8-year competition to select post-quantum algorithms.
# Winners announced in 2024.

# Python PQC library (liboqs-python):
# from oqs import KeyEncapsulation, Signature
#
# # Generate PQ key pair (Kyber/ML-KEM):
# kem = KeyEncapsulation("ML-KEM-768")
# public_key = kem.generate_keypair()
#
# # Encapsulate (shared secret):
# ciphertext, shared_secret = kem.encap_secret(public_key)
#
# # Decapsulate (recover shared secret):
# recovered = kem.decap_secret(ciphertext)
# assert shared_secret == recovered  # same secret!

# The MIGRATION challenge:
# Every system on Earth uses RSA/ECC today.
# Moving to PQ crypto will take 10-15 years.
# Start planning NOW.</div>

<div class="code-block"># ── STEP 2: Lattice-based cryptography ──
# The NIST winner — based on hard lattice problems.

# LATTICE: a regular grid of points in n-dimensional space.
# Hard problem: find the SHORTEST vector in the lattice.
# (Easy to state, hard to solve — even for quantum computers!)

# ML-KEM (Kyber) — key encapsulation:
# Alice generates PQ public key.
# Bob uses it to create a shared secret (like Diffie-Hellman, but PQ-safe).

# ML-DSA (Dilithium) — digital signatures:
# Like RSA signatures, but PQ-safe.
# Larger keys/signatures than RSA, but faster.

# Comparison:
# ┌──────────┬──────────────┬──────────────┬──────────────┐
# │ Property │ RSA-2048     │ ECC-256      │ ML-KEM-768   │
# ├──────────┼──────────────┼──────────────┼──────────────┤
# │ Key size │ 256 bytes    │ 32 bytes     │ 1184 bytes   │
# │ Sig size │ 256 bytes    │ 64 bytes     │ 3309 bytes   │
# │ PQ-safe  │ No           │ No           │ Yes          │
# │ Speed    │ Fast         │ Very fast    │ Fast         │
# └──────────┴──────────────┴──────────────┴──────────────┘
# PQ keys are BIGGER, but security is future-proof.

# Fully Homomorphic Encryption (FHE):
# Compute on ENCRYPTED data without decrypting!
# # encrypted_result = encrypted_a + encrypted_b
# # decrypt(encrypted_result) = a + b
# # Server never sees the plaintext!

# FHE applications:
# - Medical AI on encrypted patient data
# - Financial analysis without revealing amounts
# - Cloud computing on sensitive data
# - Private ML inference

# Python FHE:
# import tenseal as ts
# context = ts.context(ts.SCHEME_TYPE.CKKS, poly_modulus_degree=8192)
# encrypted_data = ts.ckks_vector(context, [1, 2, 3, 4])
# encrypted_result = encrypted_data * 2 + 1  # compute on encrypted!
# result = encrypted_result.decrypt()  # [3, 5, 7, 9]</div>

<div class="code-block"># ── STEP 3: Hash-based and code-based crypto ──
# Conservative approaches that have survived decades of analysis.

# HASH-BASED (SPHINCS+):
# Uses ONLY hash functions (SHA-256, etc.)
# Very conservative — if hashes are secure, this is secure.
# Large signatures (50KB!) but proven secure.
# Good for: firmware signing, long-term archives.

# CODE-BASED (Classic McEliece):
# Based on error-correcting codes (from 1978!).
# Very large public keys (1MB) but very fast.
# Survived 45+ years of cryptanalysis.
# Good for: infrastructure that doesn't change often.

# COMPARISON OF APPROACHES:
# ┌──────────────┬──────────────┬────────────┬──────────────────┐
# │ Approach     │ Key size     │ Sig size   │ Confidence       │
# ├──────────────┼──────────────┼────────────┼──────────────────┤
# │ Lattice      │ Medium       │ Medium     │ Good (new)       │
# │ Hash-based   │ Small        │ Very large │ Very high (old)  │
# │ Code-based   │ Very large   │ Small      │ Very high (old)  │
# │ Multivariate │ Medium       │ Large      │ BROKEN (Rainbow) │
# │ Isogeny      │ Small        │ Medium     │ BROKEN (SIKE)    │
# └──────────────┴──────────────┴────────────┴──────────────────┘

# LESSON: Some PQ approaches were broken after NIST submission.
# Rainbow (multivariate) and SIKE (isogeny) were both broken.
# This is WHY the competition took 8 years — rigorous testing.

# Python hash-based signature simulation:
import hashlib

def lamport_sign(message, private_key):
    """Simplified Lamport one-time signature."""
    msg_hash = hashlib.sha256(message.encode()).hexdigest()
    signature = []
    for i, bit in enumerate(format(int(msg_hash, 16), '0256b')):
        signature.append(private_key[i][int(bit)])
    return signature
# Real SPHINCS+ is much more sophisticated, but same principle.</div>

<div class="code-block"># ── STEP 4: Migration strategy ──
# How organizations move from classical to post-quantum crypto.

# PHASE 1: ASSESS
# Find all places where RSA/ECC is used:
# - TLS certificates (HTTPS)
# - SSH keys
# - VPN protocols
# - Code signing
# - Document signing
# - Blockchain wallets

# PHASE 2: HYBRID (transition)
# Use BOTH classical AND PQ together:
# hybrid_key = classical_key + pq_key
# An attacker must break BOTH to compromise.
# This is the safest transition approach.

# Python hybrid key exchange:
def hybrid_key_exchange(classical_shared, pq_shared):
    """
    Combine classical and PQ shared secrets.
    Security = max(classical, PQ) — need to break both.
    """
    import hashlib
    combined = classical_shared + pq_shared
    return hashlib.sha3_256(combined).digest()

# PHASE 3: FULL PQ (eventually)
# Once PQ algorithms are battle-tested (10-15 years),
# remove classical algorithms entirely.

# Already happening:
# - Signal app: uses PQ key exchange (2023)
# - Apple iMessage: PQ encryption (PQ3, 2024)
# - Google Chrome: hybrid PQ TLS (2023)
# - AWS KMS: PQ support (2024)

# The migration is the BIGGEST crypto transition in history.
# Every system needs updating.</div>

<div class="code-block"># ── STEP 5: Side-channel resistance ──
# Even mathematically secure crypto can be broken by implementation.

# SIDE-CHANNEL ATTACKS:
# Attackers measure PHYSICAL properties during crypto operations:
# - Timing: how long does decryption take? (reveals key bits)
# - Power: power consumption varies with data
# - Electromagnetic: EM emanations leak information
# - Cache: CPU cache timing reveals secrets

# Constant-time code (prevent timing attacks):
# ❌ BAD (timing depends on secret):
def bad_compare(secret, guess):
    for i in range(len(secret)):
        if secret[i] != guess[i]:
            return False  # early exit → timing varies!
    return True

# ✅ GOOD (always same time):
def constant_time_compare(secret, guess):
    """Compare in constant time — no timing leakage."""
    result = 0
    for a, b in zip(secret, guess):
        result |= ord(a) ^ ord(b)  # XOR, no early exit
    return result == 0

# Use hmac.compare_digest() in production — it's constant-time.

# BLINDING (prevent timing attacks on RSA):
# Before RSA decryption, multiply by random blinding factor.
# This randomizes the operation time.

# HARDWARE ATTACKS:
# - Fault injection: cause computation errors to leak keys
# - Power analysis: measure power during crypto operations
# - Probing: physically read chip signals

# DEFENSE:
# - Constant-time algorithms
# - Blinding
# - Hardware security modules (HSM)
# - Secure enclaves (TEE, SGX)
# - Formal verification of implementations</div>

<div class="code-block"># ── STEP 6: PQC research areas ──
# ┌─────────────────────┬─────────────────────────────────────┐
# │ Area                │ What you study                     │
# ├─────────────────────┼─────────────────────────────────────┤
# │ Lattice Crypto      │ Kyber, Dilithium, FHE, LWE        │
# │ Hash-based          │ SPHINCS+, stateless signatures    │
# │ Code-based          │ McEliece, HQC                     │
# │ Migration           │ Hybrid, protocol design, testing  │
# │ Attacks             │ New attacks, side-channels        │
# │ FHE                 │ Practical homomorphic encryption  │
# └─────────────────────┴─────────────────────────────────────┘

# CONFERENCES:
# CRYPTO, EUROCRYPT      — top crypto theory
# PQCrypto               — post-quantum specific
# CCS, USENIX Security   — applied crypto
# CHES, TCHES            — hardware/crypto implementation

# TOOLS:
# liboqs / oqs-python    — PQ implementations
# Tenseal / OpenFHE      — homomorphic encryption
# OpenSSL 3.x+           — PQ support (hybrid mode)

# CAREER PATHS:
# - Cryptographer (design new PQ algorithms)
# - Security Engineer (migrate systems to PQ)
# - FHE Researcher (make encrypted computation practical)
# - Crypto Implementer (fast, secure implementations)

# THE URGENCY:
# Y2Q (Years to Quantum) is like Y2K but much bigger.
# When quantum computers can break RSA:
# - ALL encrypted traffic can be decrypted
# - ALL digital signatures can be forged
# - ALL blockchain wallets can be emptied
# This is why NIST rushed to standardize PQ algorithms.
# Every organization needs to prepare NOW.</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🔥 Lattice</td><td>ML-KEM/ML-DSA, FHE, LWE</td><td>CRYPTO, EUROCRYPT, PQCrypto</td></tr>
<tr><td class="hl">🔣 Code-based</td><td>McEliece, HQC, BIKE</td><td>PQCrypto, CRYPTO, IEEE-IT</td></tr>
<tr><td class="hl">#️⃣ Hash-based</td><td>SPHINCS+, stateless sig</td><td>PQCrypto, CRYPTO</td></tr>
<tr><td class="hl">⚡ Implementation</td><td>Hybrid, migration, side-channel</td><td>CCS, USENIX, CHES, TCHES</td></tr>
<tr><td class="hl">🔐 FHE</td><td>Lattice-based, practical (Zama)</td><td>CRYPTO, EUROCRYPT, CCS</td></tr>
<tr><td class="hl">🔍 Cryptanalysis</td><td>Attacks, parameters, security</td><td>CRYPTO, ASIACRYPT, PQCrypto</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-৮%</div><div class="sc-label">গ্রহণের হার (niche, গণিত-নির্ভর)</div></div>
<div class="stat-card"><div class="sc-num">NIST ২০২৪</div><div class="sc-label">ML-KEM/ML-DSA standard চূড়ান্ত</div></div>
<div class="stat-card"><div class="sc-num">$১৮০-৪০০K</div><div class="sc-label">industry (Google, Cloudflare, Zama, PQ-Shield)</div></div>
<div class="stat-card"><div class="sc-num">🔥 migration</div><div class="sc-label">প্রতিটা কোম্পানির দরকার — decade-long</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Quantum এখনো আসেনি, তাই PQC দরকার নেই। পরে ভাবা যাবে।" বিপজ্জনক ভুল। 'harvest now, decrypt later' — প্রতিপক্ষ আজই তোমার encrypted ডেটা ধরে রাখছে, কোয়ান্টাম এলে (৫-১৫ বছর) ভাঙবে। স্টেট সিক্রেট ৫০+ বছর গোপন রাখতে হয়। এখনই PQ না বসালে, আজকের গোপন ডেটা ভবিষ্যতে ফাঁসে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"PQC হলো ভবিষ্যতের নিরাপত্তা, আজই শুরু। NIST ২০২৪-এ standards চূড়ান্ত (ML-KEM/ML-DSA)। Google, Cloudflare, Apple (iMessage PQ) এখনই deploy করছে। lattice-ভিত্তিক — গণিত (linear algebra, number theory) দরকার, পদার্থবিজ্ঞান নয়। niche, কিন্তু decade-long migration = প্রতিটা কোম্পানির দরকার।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> NIST FIPS ২০৩/২০৪/২০৫ (ML-KEM, ML-DSA, SLH-DSA — চূড়ান্ত, আগস্ট ২০২৪), Apple iMessage PQ (PQ3, ২০২৪), Signal PQXDH, Google Chrome hybrid PQ-TLS, Zama FHE (practical, ২০২৫), Cloudflare PQ deployment telemetry।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ security (Door 8) + গণিত (linear algebra, number theory) ভালোবাসো · ✅ concrete, industry-প্রাসঙ্গিক (পদার্থবিজ্ঞান নয়) · ✅ decade-long migration = stable demand · ⚠️ niche, কিন্তু গাণিতিক · 💡 PQC implementation/migration = সবচেয়ে industry-friendly entry, তুমি developer — protocol migration কোড করতে পারো।</div></div>

<div class="dialogue">"তোমার জন্য একটা আকর্ষণীয় পথ," তালিব বললেন। "PQC গাণিতিক — lattice, কিন্তু পদার্থবিজ্ঞান নয়। আর implementation/migration — সেটা engineering। তুমি developer — TLS, protocol, network পরিচিত (Door 5, 6)। hybrid PQ-TLS বানানো, side-channel-resistant implementation — এগুলো তোমার skill। pure lattice theory কঠিন, কিন্তু implementation research তোমার জন্য উপযুক্ত। Google, Cloudflare এখন এই গবেষণা করছে — এবং প্রতিটা কোম্পানিকে দশকজুড়ে migration করতে হবে। স্থিতিশীল, গুরুত্বপূর্ণ, বাস্তব।"</div>
<div class="dialogue en">"An attractive path for you," Talib said. "PQC is mathematical — lattice, but not physics. And implementation/migration — that's engineering. You're a developer — TLS, protocols, networks (Door 5, 6) are familiar. Building hybrid PQ-TLS, side-channel-resistant implementation — these fit your skills. Pure lattice theory is hard, but implementation research suits you. Google, Cloudflare do this research now — and every company must migrate over a decade. Stable, important, real."</div>

<div class="dialogue">আহসান — সুরক্ষিত রাখা, শক্তিশালী আমানত। কুরআনে আল্লাহ বলেন: "যদি তোমরা (আমানত) রক্ষা করো, তবে তিনিও তোমাদের রক্ষা করবেন।" PQC গবেষণা হলো আহসান — মানুষের ডেটা সুরক্ষিত রাখা, শক্তিশালী তালা বানানো। বর্তমান তালা (RSA) ভবিষ্যতে ভাঙবে — দায়িত্ব হলো আগে থেকে নতুন তালা বসানো। এটাই আহসান — কেবল আজকের নয়, আগামীকালের নিরাপত্তা। যে আহসান করে, সে শুধু রক্ষা করে না — সুন্দরভাবে রক্ষা করে। ভবিষ্যতের প্রতি দায়িত্বশীলতা — এটাই গবেষকের আহসান।</div>
<div class="dialogue en">Ahsan — keeping secure, strong trust. Allah says: "If you guard (trusts), He will guard you." PQC research is ahsan — keeping people's data secure, building strong locks. Today's lock (RSA) will break tomorrow — the responsibility is to install new locks in advance. This is ahsan — not just today's security, but tomorrow's. One who does ahsan, doesn't just protect — protects beautifully. Responsibility toward the future — this is the researcher's ahsan.</div>

<div class="secret-box">🔏 Post-Quantum Crypto: ভবিষ্যতের নিরাপত্তা, আজই শুরু। NIST ২০২৪-এ standards চূড়ান্ত (ML-KEM/ML-DSA, lattice)। 'harvest now, decrypt later' হুমকি। গণিত (পদার্থবিজ্ঞান নয়)। implementation/migration = তোমার developer skill-এ উপযুক্ত, decade-long demand।</div>`,
  senior:{
    title:"PQC PhD — Concrete Quantum Path",
    body:`<p><strong>তোমার জন্য উপযুক্ত quantum path:</strong> pure quantum (Door 17) পদার্থবিজ্ঞান চায়, PQC শুধু গণিত (lattice, linear algebra)। আর implementation/migration — engineering, তোমার developer skill সরাসরি প্রযোজ্য। সবচেয়ে concrete quantum-সম্পর্কিত path।</p><p><strong>NIST standard implement করো:</strong> ML-KEM (Kyber), ML-DSA (Dilithium)-এর open-source implementation (liboqs, OpenSSL PQ) contribute করো। একটা side-channel-resistant implementation = CCS/CHES paper, high demand।</p><p><strong>Hybrid migration:</strong> classical + PQ hybrid TLS বানানো — Google, Cloudflare এখন এটাই করছে। protocol engineering + crypto = তোমার sweet spot। RFC draft, IETF contribution = real impact।</p><p><strong>FHE = adjacent hot field:</strong> fully homomorphic encryption (lattice-ভিত্তিক) — Zama (২০২৫) practical করছে। এনক্রিপ্টেড ডেটায় সরাসরি কাজ। গণিত-নির্ভর, কিন্তু industry বিলিয়ন ঢালছে। CCS/EUROCRYPT।</p>`
  }
});

// ══ DOOR 19: ROBOTICS & AUTONOMOUS SYSTEMS ══
doors.push({
  num:19, icon:"🤖", color:"#f97316", name:"যন্ত্রের প্রাণ",
  subtitle:"The Soul of Machines", tech:"Robotics & Autonomous Systems",
  spirit:"আমানত — আস্থা, জীবনের দায়িত্ব পালন",
  secret:"Robotics হলো যেখানে CS শরীর পায় — কোড বাস্তব জগতে চলে। মাঝারি প্রতিযোগিতা (৫-৮%), ভালো ফান্ডিং (DARPA $১B+, defense)। CS + ME + EE interdisciplinary। autonomous vehicles, drones, surgical robots, humanoid (Figure, Tesla Optimus)। hardware lab-নির্ভর, sim-to-real এখনো open। যে রোবট বানায়, সে মানুষের জীবনের আমানত বহন করে — ভুল হলে মানুষ মারা যায়। দায়িত্ব সর্বোচ্চ।",
  recall:{
    q:"কেভিন কেন বললেন রোবট একটা আমানত, শুধু মেশিন নয়?",
    qen:"Why did Kevin say a robot is a trust, not just a machine?",
    a:"কারণ রোবট যখন বাস্তব জগতে চলে, তখন তার আমানত থাকে — মানুষের নিরাপত্তা। একটা self-driving গাড়ি ভুল করলে মানুষ মারা যায়। একটা surgical robot ভুল করলে রোগীর ক্ষতি। রোবট গবেষণা শুধু কোড নয় — দায়িত্ব। যে রোবট বানায়, সে আমানত বহন করে — মানুষের জীবনের আমানত। এটাই আমানত — সর্বোচ্চ দায়িত্ব, সর্বোচ্চ বিশ্বাস।",
    aen:"Because when a robot moves in the real world, it carries a trust — people's safety. A self-driving car makes a mistake, people die. A surgical robot fails, patient harmed. Robot research isn't just code — it's responsibility. One who builds robots, carries a trust — the trust of human life. This is amanah — highest responsibility, highest trust."
  },
  story:`
<p class="scene-setting">একোনবিংশ দরজা। তালিবের তিজোরিখানা পেরিয়ে তুমি একটা বিশাল কর্মশালায় — সবুজ মেঝে, উপরে ঝুলছে রোবট হাত, মাঝে দাঁড়িয়ে একটা humanoid robot — অর্ধেক সম্পূর্ণ, ভেতরের তার দেখা যাচ্ছে। এক কোণায় একটা self-driving গাড়ির মডেল, অন্য কোণায় surgical arm। রোবটের পাশে দাঁড়িয়ে কেভিন — নীল কোট, হাতে একটা soldering iron ও একটা SLAM map, মুখে ঘন গোঁফ, চোখে নিবিড়তা। তালিব পেছনে ইশারায় বলছেন — এটা সব গবেষণার সবচেয়ে বাস্তব, সবচেয়ে দায়িত্বপূর্ণ সীমানা। মেশিনের হুম শব্দ, সার্ভো মোটরের ঝিঁঝিঁ, তারের পোড়া গন্ধ।</p>
<p class="scene-setting en">The nineteenth door. Past Talib's vault, you enter a vast workshop — green floor, robotic arms hanging above, in the center a humanoid robot — half-finished, inner wires visible. In one corner a self-driving car model, in another a surgical arm. Beside the robot stands Kevin — blue coat, a soldering iron and a SLAM map in hand, thick mustache, intensity in his eyes. Talib gestures behind — this is the most physical, most responsible frontier of all research. Machine hum, servo whine, smell of burnt wire.</p>

<div class="dialogue">তালিব বললেন, "আমি ভবিষ্যতের তালা বানাই, কেভিন ভবিষ্যতের শরীর বানায় — রোবট।" কেভিন humanoid robot-টার মাথায় হাত রাখলেন। "এই রোবট — এটা শুধু কোড নয়। এর মধ্যে perception আছে (Door 2 — vision), planning আছে (Door 3 — RL), control আছে। এটা বাস্তব জগতে চলে — ধাক্কা খায়, পড়ে, আবার ওঠে।" তিনি SLAM map দেখালেন — রোবট কীভাবে অজানা জায়গা ম্যাপ করে। "robotics হলো সব AI-এর সমন্বয় — vision, RL, planning — বাস্তব জগতে। এটাই CS যেখানে শরীর পায়।"</div>
<div class="dialogue en">Talib said, "I build the future's lock, Kevin builds the future's body — robots." Kevin placed his hand on the humanoid's head. "This robot — not just code. It has perception (Door 2 — vision), planning (Door 3 — RL), control. It moves in the real world — bumps, falls, gets up." He showed the SLAM map — how a robot maps unknown space. "Robotics is the synthesis of all AI — vision, RL, planning — in the real world. This is CS getting a body."</div>

<div class="diagram">
  <div class="diag-title">Robotics Stack — প্রতিটা স্তর এক AI-এর সমন্বয়</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowOrange19" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#f97316"/></marker>
    </defs>
    <text class="lbl-sm" x="280" y="22" fill="#7dd3fc">রোবট একটা stack — প্রতিটা স্তরে ভিন্ন AI</text>
    ${[ ['PERCEPTION','vision, SLAM, lidar (Door 2)',40,'#38bdf8'], ['PLANNING','path, trajectory (Door 3 RL)',100,'#52c41a'], ['CONTROL','MPC, PID, motor',160,'#f97316'], ['HARDWARE','actuator, sensor',210,'#9290a8'] ].map(s=>`<rect class="cell" x="100" y="${s[3]}" width="360" height="42" rx="8" style="stroke:${s[4]}"/><text class="lbl-sm" x="280" y="${s[3]+17}" fill="${s[4]}" style="font-weight:700">${s[0]}</text><text class="lbl-sm" x="280" y="${s[3]+32}" fill="#9290a8" style="font-size:9px">${s[1]}</text>`).join('')}
    <text class="lbl-sm" x="500" y="60" fill="#ff6b35">sim-to-real gap</text>
    <line class="edge-hot" x1="460" y1="100" x2="495" y2="65" style="stroke:#ff6b35"/>
    <text class="lbl-sm" x="280" y="225" fill="#5e5c74">সব AI এক জায়গায় — বাস্তব জগতে। ভুল = মানুষের ক্ষতি। আমানত সর্বোচ্চ।</text>
  </svg>
  <div class="diag-cap">robotics = perception + planning + control + hardware। সব AI-এর সমন্বয় বাস্তব জগতে। sim-to-real gap (সিমুলেটরে কাজ করলেও বাস্তবে কঠিন) এখনো মূল open problem। ভুল হলে মানুষের ক্ষতি — তাই আমানত সর্বোচ্চ।</div>
</div>

<div class="code-block"># ── STEP 1: What is robotics? ──
# Robotics = the intersection of MECHANICAL, ELECTRICAL, and SOFTWARE.
# A robot must: SENSE → THINK → ACT in the physical world.

# Robot components:
# - Sensors: cameras, lidar, IMU, encoders (where am I?)
# - Actuators: motors, servos, hydraulics (move!)
# - Controller: software that decides what to do
# - Body: physical structure

# Robot control loop (the fundamental loop):
# 1. SENSE: read sensors (where is the robot?)
# 2. PLAN: decide what to do (where to go?)
# 3. ACT: send commands to motors (move!)
# 4. Repeat at 100-1000 Hz

# Python robot control example:
import numpy as np

class SimpleRobot:
    """A 2D mobile robot simulation."""
    def __init__(self, x=0, y=0, theta=0):
        self.x = x           # position
        self.y = y
        self.theta = theta    # heading angle

    def sense(self):
        """Read sensors (simulated GPS + compass)."""
        return {
            "position": (self.x, self.y),
            "heading": self.theta
        }

    def move(self, velocity, angular_velocity, dt=0.1):
        """Move the robot (differential drive model)."""
        self.x += velocity * np.cos(self.theta) * dt
        self.y += velocity * np.sin(self.theta) * dt
        self.theta += angular_velocity * dt

    def navigate_to(self, target_x, target_y):
        """Simple navigation: turn toward target, move forward."""
        # Calculate angle to target:
        dx = target_x - self.x
        dy = target_y - self.y
        target_angle = np.arctan2(dy, dx)

        # Simple proportional control:
        angle_error = target_angle - self.theta
        angular_vel = 2.0 * angle_error  # P-controller

        # Move forward (slower when turning):
        forward_vel = 1.0 if abs(angle_error) &lt; 0.1 else 0.3

        self.move(forward_vel, angular_vel)

# This simple controller is the foundation of all robot navigation.</div>

<div class="code-block"># ── STEP 2: PID controller ──
# The most common control algorithm in robotics and industry.

# PID = Proportional + Integral + Derivative
# Used everywhere: drone stabilization, robot arms, car cruise control

class PIDController:
    """PID controller — the workhorse of control systems."""
    def __init__(self, kp=1.0, ki=0.0, kd=0.0):
        self.kp = kp  # Proportional: react to current error
        self.ki = ki  # Integral: eliminate steady-state error
        self.kd = kd  # Derivative: predict future error
        self.integral = 0
        self.prev_error = 0

    def compute(self, setpoint, current_value, dt=0.01):
        """Compute control output to reach setpoint."""
        error = setpoint - current_value

        # P: proportional to error
        p_term = self.kp * error

        # I: accumulate error over time
        self.integral += error * dt
        i_term = self.ki * self.integral

        # D: rate of change of error
        derivative = (error - self.prev_error) / dt
        d_term = self.kd * derivative

        self.prev_error = error

        return p_term + i_term + d_term

# Example: drone altitude control
altitude_pid = PIDController(kp=2.0, ki=0.5, kd=1.0)

current_alt = 0.0  # start at ground
target_alt = 10.0  # want to reach 10 meters

for _ in range(500):
    throttle = altitude_pid.compute(target_alt, current_alt)
    current_alt += throttle * 0.01  # simplified physics

print(f"Altitude: {current_alt:.1f}m")  # ~10.0m (reached target!)

# TUNING PID (the hard part):
# Too much P → oscillation
# Too much I → overshoot, slow response
# Too much D → noise sensitivity
# Real systems use auto-tuning or RL to find parameters</div>

<div class="code-block"># ── STEP 3: SLAM and state estimation ──
# SLAM: build a map AND locate yourself simultaneously.
# THE chicken-and-egg problem of robotics.

# Kalman Filter — the most important estimation algorithm:
class KalmanFilter1D:
    """Estimate true position from noisy measurements."""
    def __init__(self, initial_estimate, initial_uncertainty):
        self.estimate = initial_estimate
        self.uncertainty = initial_uncertainty

    def update(self, measurement, measurement_noise):
        """Combine prediction with measurement."""
        # Kalman gain (how much to trust measurement):
        kalman_gain = self.uncertainty / (self.uncertainty + measurement_noise)

        # Update estimate:
        self.estimate += kalman_gain * (measurement - self.estimate)

        # Update uncertainty:
        self.uncertainty *= (1 - kalman_gain)

        return self.estimate

# Example: tracking a robot's position with noisy GPS:
kf = KalmanFilter1D(initial_estimate=0, initial_uncertainty=10)

# GPS gives noisy readings: [0.1, -0.3, 0.5, 0.2, -0.1, 0.4]
gps_readings = [0.1, -0.3, 0.5, 0.2, -0.1, 0.4]

for reading in gps_readings:
    estimated_pos = kf.update(measurement=reading, measurement_noise=1.0)
    print(f"  GPS: {reading:.2f} → Estimated: {estimated_pos:.3f}")

# The filter SMOOTHS the noisy readings → more accurate position!

# Sensor fusion (combine multiple sensors):
# - GPS: accurate but slow (10Hz), no indoor
# - IMU: fast (1000Hz) but drifts over time
# - Vision: relative positioning, can be precise
# - Wheel encoders: odometry, accumulates error
# Kalman filter combines all → best estimate</div>

<div class="code-block"># ── STEP 4: Motion planning ──
# How does a robot find a path from A to B avoiding obstacles?

# A* pathfinding on a grid:
import heapq

def astar(grid, start, goal):
    """A* algorithm for robot path planning."""
    rows, cols = len(grid), len(grid[0])

    def heuristic(a, b):
        return abs(a[0] - b[0]) + abs(a[1] - b[1])  # Manhattan distance

    open_set = [(0, start)]
    came_from = {}
    g_score = {start: 0}

    while open_set:
        _, current = heapq.heappop(open_set)

        if current == goal:
            # Reconstruct path:
            path = [current]
            while current in came_from:
                current = came_from[current]
                path.append(current)
            return path[::-1]

        for dr, dc in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            neighbor = (current[0] + dr, current[1] + dc)
            if (0 &lt;= neighbor[0] &lt; rows and 0 &lt;= neighbor[1] &lt; cols
                    and grid[neighbor[0]][neighbor[1]] == 0):
                new_g = g_score[current] + 1
                if neighbor not in g_score or new_g &lt; g_score[neighbor]:
                    g_score[neighbor] = new_g
                    f = new_g + heuristic(neighbor, goal)
                    heapq.heappush(open_set, (f, neighbor))
                    came_from[neighbor] = current

    return None  # no path found

# Grid: 0=free, 1=obstacle
grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
]

path = astar(grid, (0, 0), (4, 4))
print(f"Path: {path}")
# [(0,0), (1,0), (2,0), (2,1), (2,2), ...]

# OTHER planning algorithms:
# - RRT (Rapidly-exploring Random Tree): good for high-dim spaces
# - RRT*: optimal version of RRT
# - Trajectory optimization: smooth, constraint-aware paths
# - MPC (Model Predictive Control): plan ahead, execute, replan</div>

<div class="code-block"># ── STEP 5: Autonomous vehicles ──
# Self-driving cars = robotics + AI + safety critical.

# The self-driving stack:
# 1. PERCEPTION: cameras, lidar, radar → detect objects
# 2. PREDICTION: what will pedestrians/cars do next?
# 3. PLANNING: choose safe path through traffic
# 4. CONTROL: steering, acceleration, braking

# Using ROS (Robot Operating System) in Python:
# import rclpy
# from sensor_msgs.msg import LaserScan
# from geometry_msgs.msg import Twist
#
# def callback(scan_data):
#     """Process lidar data and control robot."""
#     # Find closest obstacle:
#     min_distance = min(scan_data.ranges)
#
#     # If obstacle close, turn:
#     cmd = Twist()
#     if min_distance &lt; 1.0:
#         cmd.angular.z = 0.5  # turn
#         cmd.linear.x = 0.0   # stop
#     else:
#         cmd.linear.x = 0.5   # move forward
#
#     publisher.publish(cmd)

# AUTONOMOUS DRIVING LEVELS:
# Level 0: No automation (human drives)
# Level 1: Driver assist (cruise control)
# Level 2: Partial (Tesla Autopilot — hands on wheel)
# Level 3: Conditional (eyes off in specific conditions)
# Level 4: High (no human needed in geo-fenced area)
# Level 5: Full (anywhere, anytime) — not yet achieved

# Challenges:
# - Edge cases (unusual situations not in training data)
# - Weather (rain, snow, fog reduce sensor reliability)
# - Human behavior prediction (pedestrians are unpredictable)
# - Regulatory and ethical questions
# - The "long tail" of rare events</div>

<div class="code-block"># ── STEP 6: Robotics research areas ──
# ┌─────────────────────┬─────────────────────────────────────┐
# │ Area                │ What you study                     │
# ├─────────────────────┼─────────────────────────────────────┤
# │ Perception          │ Vision, SLAM, sensor fusion        │
# │ Planning/Control    │ Motion, MPC, RL policies          │
# │ Autonomous Vehicles │ Self-driving, drones              │
# │ Manipulation        │ Robotic arms, dexterous hands     │
# │ Humanoid Robots     │ Locomotion, whole-body control    │
# │ Medical Robotics    │ Surgery, prosthetics, rehab       │
# └─────────────────────┴─────────────────────────────────────┘

# CONFERENCES:
# ICRA, IROS         — top robotics conferences
# RSS                — robotics science and systems
# CoRL               — learning for control/robotics
# Humanoids          — humanoid robots

# HOT TOPICS (2024-2026):
# - Foundation models for robots (RT-2, OpenVLA)
# - Diffusion policies (learn complex manipulation)
# - Humanoid robots (Figure 02, Tesla Optimus, Unitree)
# - Sim-to-real transfer (train in sim, deploy in reality)
# - Dexterous manipulation (in-hand object manipulation)
# - LLM-guided planning (robots that understand language)

# TOOLS TO LEARN:
# ROS / ROS 2          — robot operating system
# PyBullet / Isaac Sim — physics simulation
# OpenCV / MediaPipe   — perception
# MoveIt               — motion planning framework
# Gazebo               — robot simulation

# CAREER PATHS:
# - Robotics Engineer (Boston Dynamics, Tesla, Figure)
# - Autonomous Vehicle Engineer (Waymo, Cruise, Zoox)
# - Research Scientist (robotics + ML labs)
# - Surgical Robotics (Intuitive Surgical, Vicarious Surgical)
# - Space Robotics (NASA JPL, SpaceX)

# THE FUTURE OF ROBOTICS:
# We're at the "GPT-3 moment" for robotics.
# Foundation models (vision-language-action) are making robots
# GENERAL — not task-specific.
# Within 10 years: humanoid robots in homes and factories.
# Within 20 years: robots doing most physical labor.

# THE GRAND CHALLENGE:
# Moravec's paradox: hard things are easy, easy things are hard.
# Chess? Easy for AI. Picking up a glass? Very hard.
# The physical world is messy, unpredictable, continuous.
# But that's exactly what makes robotics the most exciting field.</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">👁️ Perception</td><td>SLAM, vision, lidar, sensor fusion</td><td>ICRA, IROS, RSS, CVPR</td></tr>
<tr><td class="hl">🎮 Planning/Control</td><td>Motion, MPC, RL control, diffusion policy</td><td>ICRA, IROS, CoRL, RSS</td></tr>
<tr><td class="hl">🚗 Autonomous Vehicle</td><td>Self-driving, drone, prediction</td><td>ICRA, IV, IROS, NeurIPS</td></tr>
<tr><td class="hl">🦾 Manipulation</td><td>Arm, dexterous, soft, LfD</td><td>RSS, ICRA, IROS, CoRL</td></tr>
<tr><td class="hl">🔥🔥 Humanoid</td><td>Figure, Optimus, VLA, foundation model</td><td>CoRL, RSS, NeurIPS</td></tr>
<tr><td class="hl">🏥 Medical/Space</td><td>Surgical, prosthetics, space/underwater</td><td>ICRA, Hamlyn, MICCAI</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-৮%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">$১B+</div><div class="sc-label">DARPA + defense robotics ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$১৬০-৩৫০K</div><div class="sc-label">industry (Tesla, Boston Dynamics, Figure)</div></div>
<div class="stat-card"><div class="sc-num">🔥🔥 humanoid</div><div class="sc-label">next decade-র সবচেয়ে বড় bet</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Robotics = শুধু mechanical engineering, CS এখানে গৌণ।" ভুল। আজকের robotics হলো AI — perception (vision), planning (RL), foundation model (VLA)। Figure 02, Tesla Optimus — এগুলো AI কোম্পানি। Boston Dynamics-এর Atlas এখন learning-based। CS + ML ছাড়া আধুনিক robotics অসম্ভব। বিশুদ্ধ mechanical নয়, intelligence হলো মূল।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"Robotics হলো AI + mechanical + electrical — interdisciplinary। বাস্তব জগতে AI-এর প্রয়োগ। humanoid (Figure, Optimus) এখন frontier — foundation model দিয়ে রোবট শেখে। sim-to-real gap open problem। ভালো ফান্ডিং (DARPA), কিন্তু দায়িত্ব সর্বোচ্চ — ভুল হলে মানুষের ক্ষতি। আমানত পালন করো।"</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Reality check:</strong> robotics research hardware-নির্ভর — lab access (robot, sensor, testbed) জরুরি। sim-to-real gap বড় — সিমুলেটরে কাজ করলেও বাস্তবে transfer কঠিন। experiment ধীর, ব্যয়বহুল। তবে humanoid era (২০২৪-২৬) নতুন পুঁজি ও মনোযোগ এনেছে।</div></div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> humanoid robotics explosion (Figure 02, Tesla Optimus Gen 3, Unitree H1, ১X Neo, Apptronik), vision-language-action models (RT-2, OpenVLA, π0 — ২০২৪-২৫), diffusion policy, Waymo robotaxi expansion, sim-to-real via generative world models (Sora-ভিত্তিক)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ⚠️ সতর্কতার সাথে — hardware lab দরকার, শুধু কোডে চলে না। ✅ বাস্তব জগতে সরাসরি impact চাও · ✅ AI (vision, RL) + hardware মিলিয়ে কাজ · ⚠️ experiment ধীর ও ব্যয়বহুল · 💡 simulation research (Mujoco, Isaac Sim) = software-only entry, একা lab ছাড়া শুরু করা যায়।</div></div>

<div class="dialogue">"রোবট গবেষণায় একটা unique challenge আছে," কেভিন বললেন। "অন্য AI-তে ভুল হলে একটা chat ভুল উত্তর। কিন্তু রোবটে ভুল হলে — গাড়ি দুর্ঘটনা, সার্জারি ভুল, মানুষ আহত। এই কারণে robotics গবেষণায় safety সর্বোচ্চ। formal verification, robust control, fail-safe — এগুলো জরুরি। যে রোবট বানায়, সে শুধু engineer নয় — আমানতদার। মানুষের জীবনের আমানত। এটাই সবচেয়ে গুরুত্বপূর্ণ কথা — ভুলে গেলে বিপজ্জনক।"</div>
<div class="dialogue en">"Robot research has a unique challenge," Kevin said. "In other AI, an error means a wrong chat reply. But in robots — car crash, surgery error, people hurt. This is why safety is paramount in robotics research. Formal verification, robust control, fail-safe — these are essential. One who builds robots isn't just an engineer — is a trustee. The trust of human life. This is the most important thing — forgetting it is dangerous."</div>

<div class="dialogue">আমানত — আস্থা, জীবনের দায়িত্ব পালন। কুরআনে আল্লাহ বলেন: "নিশ্চয় আল্লাহ তোমাদের আমানত আদায় করতে বলেন।" (৪:৫৮)। রোবট গবেষণা হলো আমানত — মানুষের জীবনের আমানত। একটা self-driving গাড়ি বানালে — সেটা নিরাপদ হতে হবে। একটা surgical robot বানালে — সেটা নির্ভুল হতে হবে। যে আমানত পালন করে, সে বিশ্বস্ত। যে না করে, সে বিপজ্জনক। রোবট গবেষক হলো সে যে সবচেয়ে গুরুত্বপূর্ণ আমানত বহন করে — মানুষের নিরাপত্তা। এটাই সবচেয়ে দায়িত্বপূর্ণ গবেষণা, এবং সবচেয়ে সম্মানের।</div>
<div class="dialogue en">Amanah — trust, fulfilling life's responsibility. Allah says: "Allah commands you to deliver trusts." (4:58). Robot research is amanah — the trust of human life. Build a self-driving car — it must be safe. Build a surgical robot — it must be precise. One who keeps the trust, is trustworthy. One who doesn't, is dangerous. A robot researcher carries the most important trust — people's safety. This is the most responsible research, and the most honorable.</div>

<div class="secret-box">🤖 Robotics: CS যেখানে শরীর পায়। AI (vision+RL) + ME + EE। ভালো ফান্ডিং (DARPA), মাঝারি প্রতিযোগিতা (৫-৮%)। 🔥 humanoid (Figure, Optimus), VLA models। sim-to-real open problem। hardware lab দরকার। আমানত সর্বোচ্চ — ভুল হলে মানুষের ক্ষতি।</div>`,
  senior:{
    title:"Robotics PhD — Embodied Path",
    body:`<p><strong>Simulation research = software-only entry:</strong> MuJoCo, Isaac Sim, PyBullet — এগুলো দিয়ে sim-to-real, RL policy, manipulation research করা যায় lab ছাড়াই। একটা Isaac Sim environment + RL policy = CoRL/ICRA workshop paper, hardware ছাড়া।</p><p><strong>VLA models = current frontier:</strong> vision-language-action (RT-2, OpenVLA, π0) — LLM দিয়ে রোবট নিয়ন্ত্রণ। তোমার AI + ML background কাজে দেয়। একটা open-source VLA fine-tune = high-impact contribution (২০২৪-২৫ hottest)।</p><p><strong>Lab সহ PI খোঁজো:</strong> robotics একা চলে না — robot, sensor, testbed দরকার। MIT, CMU, Stanford, Berkeley, Georgia Tech — top robotics lab। industry (Boston Dynamics, Figure, Tesla) internship = সেরা entry, real hardware access।</p><p><strong>Safety research:</strong> robotics safety (formal verification, robust control, fail-safe) — niche, কিন্তু critical। SSS/ICRA safe-RL track। এটা তোমার 'আমানত' mindset-এর সাথে মিলে — safety = responsibility।</p>`
  }
});

// ══ DOOR 20: EMERGING + PHD SELECTION FRAMEWORK (CAPSTONE) ══
doors.push({
  num:20, icon:"🧭", color:"#38bdf8", name:"নেভিগেটরের পছন্দ",
  subtitle:"The Navigator's Choice", tech:"Emerging Domains + PhD Selection Framework",
  spirit:"তাওফিক — সঠিক পথে চলা, আল্লাহর সাহায্য",
  secret:"বিশটা দরজা পেরিয়েছ। এখন সিদ্ধান্ত: কোনটা তোমার? এই শেষ দরজায় দুটো জিনিষ — emerging domains (AI4Science, Climate, Edge AI, NeuroAI — যা এখন জন্ম নিচ্ছে) এবং একটা decision framework। চার প্রশ্নের উত্তর দাও — interest, strength, market, purpose — তোমার ডোমেইন পেয়ে যাবে। তোমার প্রোফাইলের জন্য: MLSys (D7) = primary, AI4SE (D15) = secondary, Database (D10) = safety। তাওফিক চাও — আল্লাহ সঠিক পথ দেখাবেন।",
  recall:{
    q:"নাভিদ কেন বললেন কম্পাস তোমাকে দিক দেখায়, কিন্তু হাঁটতে হয় তোমাকে?",
    qen:"Why did Navid say the compass shows direction, but you must walk?",
    a:"কারণ কম্পাস শুধু দিক দেখায় — সিদ্ধান্ত তোমার। কোন ডোমেইন সেরা — সেটা কম্পাস বলবে না। কম্পাস বলবে কোনটায় কী আছে (এই ২০ দরজা)। কিন্তু তুমি কোনটা বেছে নেবে — সেটা তোমার আগ্রহ, তোমার শক্তি, তোমার লক্ষ্যের উপর নির্ভর করে। কম্পাস তোমাকে দিক দেখাবে — হাঁটতে হবে তোমাকে। আর হাঁটতে হাঁটতে তাওফিক চাও — আল্লাহ পথ সহজ করবেন।",
    aen:"Because the compass only shows direction — the decision is yours. Which domain is best — the compass won't say. The compass tells what's in each (these 20 doors). But which you choose — depends on your interest, your strength, your goal. The compass shows direction — you must walk. And as you walk, seek tawfiq — Allah will ease the path."
  },
  story:`
<p class="scene-setting">বিংশ দরজা — শেষ। কেভিনের কর্মশালা পেরিয়ে তুমি একটা বিশাল মানচিত্রের টেবিলের সামনে — সব ডোমেইনের মানচিত্র ছড়ানো, বিশটা দরজার চিহ্ন। আগের উনিশজন শিক্ষক পেছনে দাঁড়িয়ে — প্রত্যেকে তাঁদের ডোমেইনের দিকে তাকিয়ে। আলেকজান্ডার, মারিয়া, ওমর, লিলি, আয়েশা, রবার্ট, ডেভিড, সারা, কেভিন — সব সাগরের রক্ষক। মানচিত্রের পাশে দাঁড়িয়ে নাভিদ — নেভিগেটরের পোশাক, হাতে একটা পিতলের কম্পাস, মুখে স্নিগ্ধ হাসি, চোখে অভিজ্ঞতা। সমুদ্রের লবণাক্ত বাতাস, কাগজের শুকনো শব্দ, দূরে গালের শব্দ।</p>
<p class="scene-setting en">The twentieth door — the last. Past Kevin's workshop, you stand before a vast map table — maps of all domains spread, marks for twenty doors. The previous nineteen teachers stand behind — each looking toward their domain. Alexander, Maria, Omar, Lily, Ayesha, Robert, David, Sara, Kevin — keepers of all seas. Beside the map stands Navid — navigator's garb, a brass compass in hand, gentle smile, experience in his eyes. Salty sea air, dry paper sound, distant gull cry.</p>

<div class="dialogue">নাভিদ তোমাকে দেখলেন। "তুমি উনিশটা ডোমেইন দেখলে। কিন্তু এখনো কিছু নতুন ডোমেইন বাকি — যেগুলো এখন জন্ম নিচ্ছে।" তিনি মানচিত্রের এক কোণা দেখালেন — সেখানে কোনো চিহ্ন নেই, শুধু সমুদ্র। "এই জায়গাগুলো — এখানে এখনো কেউ যায়নি। কিন্তু ভবিষ্যৎ এখানে। AI4Science, Climate, Edge AI, NeuroAI — এগুলো এখন জন্ম নিচ্ছে। তুমি যদি অগ্রিকে হতে চাও — এখানে যাও।" তিনি থামলেন। "কিন্তু এখন মূল প্রশ্ন — কোনটা তোমার?"</div>
<div class="dialogue en">Navid saw you. "You've seen nineteen domains. But there are still new domains — being born now." He showed a corner of the map — no marks, only sea. "These places — no one has gone yet. But the future is here. AI4Science, Climate, Edge AI, NeuroAI — being born now. If you want to be a pioneer — go here." He paused. "But now the main question — which is yours?"</div>

<table class="kv-table"><tr><th>Emerging ক্ষেত্র</th><th>বিষয় (CS + X)</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🔬 AI4Science</td><td>AlphaFold, GNoME (materials), AlphaProof (math), GraphCast (weather)</td><td>NeurIPS, ICML, Nature</td></tr>
<tr><td class="hl">🧬 Comp. Biology</td><td>Genomics, protein folding, drug discovery (CS+Biology, $৩০B+ pharma)</td><td>RECOMB, ISMB, Nature</td></tr>
<tr><td class="hl">🌍 Climate/Green</td><td>Carbon-aware computing, climate modeling, sustainable AI</td><td>ICML, NeurIPS, ASPLOS</td></tr>
<tr><td class="hl">⚖️ AI Ethics/Gov.</td><td>Fairness, bias, AI policy (CS+Philosophy+Law)</td><td>FAccT, AIES, CHI</td></tr>
<tr><td class="hl">📡 Edge AI/TinyML</td><td>On-device AI, compression, federated learning</td><td>MLSys, TinyML, MobiCom</td></tr>
<tr><td class="hl">🧠 NeuroAI</td><td>Spiking NNs, neuromorphic hardware (CS+Neuroscience)</td><td>NeurIPS, Cosyne, ICLR</td></tr>
<tr><td class="hl">🏥 Comp. Healthcare</td><td>AI diagnosis, clinical NLP, digital twins (CS+Medicine)</td><td>CHIL, ML4H, MICCAI</td></tr>
<tr><td class="hl">🌐 Web3/Decentralized</td><td>Blockchain, DAOs, ZK proofs (CS+Economics+Crypto)</td><td>CCS, USENIX, FC</td></tr></table>

<div class="callout info"><span class="co-icon">🏅</span><div><strong>মাইলফলক:</strong> ২০২৪-এর রসায়নে নোবেল গেল David Baker, Demis Hassabis ও John Jumper-এর হাতে — প্রোটিন ডিজাইন ও <strong>AlphaFold</strong>-এর জন্য। AlphaFold3 (২০২৪) এটাকে আরও এগিয়ে নিয়েছে। ২০২৪-এর পদার্থবিজ্ঞানে নোবেলও গেল Hopfield ও Hinton-এর হাতে — neural network ভিত্তি। AI4Science এখন CS-এর দ্রুততম বর্ধনশীল ক্রসিং।</div></div>

<div class="diagram">
  <div class="diag-title">PhD Selection — চার প্রশ্নের ছেদ</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowCyan20" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#3dd6c4"/></marker>
    </defs>
    <!-- 4 overlapping circles (Venn-like) -->
    <circle cx="200" cy="110" r="85" class="cell-cyan" style="fill:rgba(56,189,248,.12);stroke:#38bdf8"/>
    <circle cx="360" cy="110" r="85" class="cell-good" style="fill:rgba(82,196,26,.12);stroke:#52c41a"/>
    <circle cx="240" cy="170" r="85" class="cell-hot" style="fill:rgba(255,107,53,.10);stroke:#ff6b35"/>
    <circle cx="320" cy="170" r="85" class="cell-purple" style="fill:rgba(179,127,235,.10);stroke:#b37feb"/>
    <text class="lbl-sm" x="150" y="70" fill="#38bdf8" style="font-weight:700">INTEREST</text>
    <text class="lbl-sm" x="395" y="70" fill="#52c41a" style="font-weight:700">STRENGTH</text>
    <text class="lbl-sm" x="180" y="235" fill="#ff6b35" style="font-weight:700">MARKET</text>
    <text class="lbl-sm" x="350" y="235" fill="#b37feb" style="font-weight:700">PURPOSE</text>
    <!-- center intersection -->
    <text class="lbl" x="280" y="140" fill="#7dd3fc">তোমার ডোমেইন</text>
    <text class="lbl-sm" x="280" y="158" fill="#9290a8" style="font-size:9px">চারটির ছেদে</text>
  </svg>
  <div class="diag-cap">চার বৃত্তের ছেদ = তোমার ডোমেইন। শুধু একটা নয় — চারটাই মিলতে হবে। তবে সবচেয়ে গুরুত্বপূর্ণ চতুর্থ — purpose (কার কষ্ট কমবে)। সেটা ছাড়া বাকি তিনটি অর্থহীন।</div>
</div>

<div class="dialogue">"এখন মূল প্রশ্ন," নাভিদ বললেন। "কোন ডোমেইন তোমার?" তিনি কম্পাস তুলে তোমার হাতে দিলেন। "এই কম্পাস তোমাকে দিক দেবে — কিন্তু হাঁটতে হবে তোমাকে। নিজেকে চারটি প্রশ্ন করো। সৎভাবে। নিজের কাছে সৎ হও।"</div>
<div class="dialogue en">"Now the main question," Navid said. "Which domain is yours?" He lifted the compass, placed it in your hand. "This compass will show you direction — but you must walk. Ask yourself four questions. Honestly. Be honest with yourself."</div>

<div class="callout info"><span class="co-icon">①</span><div><strong>কী ভালোবাসো? (Interest)</strong> — কোন বিষয় পড়লে উত্তেজনা হয়? কোন পেপার পড়ে বুক ধুকধুক করে? ৫-৭ বছর ধৈর্য ধরে কাজ করতে হবে — ভালোবাসা ছাড়া সম্ভব নয়।</div></div>
<div class="code-block"># ── STEP 1: The domain selection formula ──
# Four factors combine to find your research domain:

# INTEREST × STRENGTH × MARKET × PURPOSE = YOUR DOMAIN

# If any factor is zero, the product is zero.

# Example scoring:
def score_domain(interest, strength, market, purpose):
    """
    Score a research domain from 1-10 on each factor.
    Final score = product (all must be present).
    """
    score = interest * strength * market * purpose
    max_possible = 10 * 10 * 10 * 10
    percentage = (score / max_possible) * 100
    return f"{percentage:.1f}%"

# Example: MLSys for a developer who likes AI:
print("MLSys:", score_domain(
    interest=8,    # likes systems + AI
    strength=9,    # strong developer
    market=9,      # very hot, funded
    purpose=7      # infrastructure helps many people
))  # 45.4%

# Example: Pure theory for someone weak in math:
print("Theory:", score_domain(
    interest=5,    # somewhat interesting
    strength=3,    # WEAK in math
    market=6,      # stable but niche
    purpose=6      # fundamental knowledge
))  # 5.4% (low because strength is low)

# The lesson: a weakness in ANY area drags down everything.</div>

<div class="code-block"># ── STEP 2: Self-assessment template ──
# Honest self-assessment is the foundation.

# Rate yourself 1-10 on each skill:
skills = {
    "math": 4,           # linear algebra, probability, proofs
    "coding": 9,         # Python, Django, Vue, system design
    "hardware": 3,       # electronics, robotics
    "writing": 7,        # papers, documentation
    "teaching": 8,       # explaining concepts
    "research": 5,       # reading papers, experimentation
    "collaboration": 7,  # working with teams
}

# Map skills to domains:
domain_match = {
    "MLSys":      skills["coding"] + skills["math"] + skills["research"],
    "AI4SE":      skills["coding"] + skills["research"],
    "Database":   skills["coding"] + skills["math"],
    "HCI":        skills["coding"] + skills["teaching"] + skills["writing"],
    "AI Security": skills["coding"] + skills["math"] + skills["research"],
    "Distributed": skills["coding"] + skills["math"] + skills["research"],
    "Theory":     skills["math"] + skills["research"],
    "Robotics":   skills["coding"] + skills["hardware"] + skills["math"],
}

# Sort by score:
for domain, score in sorted(domain_match.items(), key=lambda x: -x[1]):
    print(f"  {domain:15}: {score}/30")

# This data-driven approach helps you see where you naturally fit.</div>

<div class="code-block"># ── STEP 3: Market analysis ──
# Research the landscape before committing.

# Factors to research for each domain:
# 1. FUNDING: Is there money? (NSF, DARPA, industry)
# 2. COMPETITION: How many applicants per slot?
# 3. GROWTH: Is the field growing or shrinking?
# 4. CAREER: What jobs are available after PhD?

# Competition levels (acceptance rates):
domains = {
    "NLP/LLM":         {"rate": "1-3%",  "funding": "Very High", "note": "Most competitive"},
    "Computer Vision":  {"rate": "2-4%",  "funding": "High",      "note": "Very competitive"},
    "RL":              {"rate": "2-5%",  "funding": "High",      "note": "Competitive"},
    "MLSys":           {"rate": "3-6%",  "funding": "Very High", "note": "Growing fast"},
    "AI4SE":           {"rate": "5-8%",  "funding": "High",      "note": "Explosive growth"},
    "Systems/OS":      {"rate": "5-8%",  "funding": "Stable",    "note": "Niche, stable"},
    "Database":        {"rate": "6-10%", "funding": "Stable",    "note": "Always needed"},
    "HCI":             {"rate": "8-12%", "funding": "Moderate",  "note": "Low competition"},
    "Theory":          {"rate": "5-10%", "funding": "Moderate",  "note": "Math-heavy"},
    "Quantum":         {"rate": "5-10%", "funding": "Growing",   "note": "Physics-heavy"},
}

# Print summary:
for domain, info in sorted(domains.items(), key=lambda x: x[1]["rate"]):
    print(f"  {domain:20} | Admit: {info['rate']:6} | {info['note']}")

# LESSON: Lower competition = easier entry.
# MLSys and HCI have good admit rates AND are growing.</div>

<div class="code-block"># ── STEP 4: Purpose — the most important question ──
# "Whose pain will your research reduce?"

# This is the question that sustains you through 5-7 years of PhD.

# Examples of purpose-driven research:
purpose_examples = {
    "Medical AI": "Help doctors diagnose disease faster",
    "Accessibility": "Enable blind people to use computers",
    "Education AI": "Personalized learning for underserved students",
    "AI Safety": "Prevent AI from causing harm",
    "Climate Tech": "Use AI to fight climate change",
    "Development": "Technology for developing countries (Bangladesh!)",
    "Language Tech": "Bengali NLP — 300M speakers underserved",
}

# THE PURPOSE PYRAMID:
# ┌──────────────────┐
# │ World-changing   │  ← "cure cancer with AI" (rare, hard)
# ├──────────────────┤
# │ Community-serving │  ← "Bengali NLP for 300M people"
# ├──────────────────┤
# │ Knowledge-adding  │  ← "understand how attention works"
# ├──────────────────┤
# │ Self-advancing    │  ← "get a PhD for career" (weakest)
# └──────────────────┘

# The strongest purpose connects to REAL HUMAN NEED.

# Self-reflection questions:
questions = [
    "What problem in my community (Bangladesh) could AI solve?",
    "What knowledge gap frustrates me when I try to learn?",
    "If I had unlimited resources, what would I build?",
    "Whose life would be better if my research succeeds?",
    "What would I work on even if nobody paid me?",
]

for q in questions:
    print(f"  ❓ {q}")

# Write your answers honestly. This is your compass.</div>

<div class="code-block"># ── STEP 5: Practical next steps ──
# Once you've identified your domain, here's the action plan:

action_plan = {
    "0-3 months": [
        "Read 5 papers in your chosen domain (arxiv.org)",
        "Find professors at target schools who work in this area",
        "Start a small project (shows interest + ability)",
        "Join relevant Discord/Slack communities",
    ],
    "3-6 months": [
        "Implement a paper from scratch",
        "Write a blog post about what you learned",
        "Email professors (cold outreach with specific questions)",
        "Apply for REU (Research Experience for Undergrads)",
    ],
    "6-12 months": [
        "Get research experience (lab, internship, collaboration)",
        "Contribute to open-source in your domain",
        "Build a portfolio (GitHub with projects)",
        "Take advanced courses in the domain",
        "Prepare GRE (if needed) and application materials",
    ],
    "12-18 months": [
        "Apply to PhD programs (deadlines: December)",
        "Get strong recommendation letters",
        "Write a research statement (what you want to study)",
        "Apply for fellowships (NSF GRFP, NDSEG)",
    ],
}

for phase, tasks in action_plan.items():
    print(f"\n{phase}:")
    for task in tasks:
        print(f"  ☐ {task}")

# APPLICATION STRATEGY:
# - Apply to 8-12 programs (mix of reach, match, safety)
# - Research FIT is more important than ranking
# - Email professors BEFORE applying (show interest)
# - Strong rec letters > GRE scores
# - Your story: WHY this domain, WHY now, WHY you</div>

<div class="code-block"># ── STEP 6: Decision summary and the bigger picture ──
# FINAL DECISION FRAMEWORK:
#
# 1. PURPOSE: Whose pain will I reduce? (most important)
# 2. INTEREST: Will I love this for 5-7 years?
# 3. STRENGTH: Am I good at the required skills?
# 4. MARKET: Is there funding and career path?
#
# When all four align → that's your domain.

# ┌─────────────────┬──────────────────────────────────────┐
# │ Domain          │ Why it might fit YOU                │
# ├─────────────────┼──────────────────────────────────────┤
# │ MLSys (primary) │ Developer + AI, hot, less crowded  │
# │ AI4SE (secondary)│ SE + LLM, Copilot era, daily SE   │
# │ Database (safety)│ Stable, MySQL experience, always  │
# │ HCI (wildcard)  │ Ipractus UI, low competition, impact│
# │ AI Security     │ Fastest growing, developer entry   │
# └─────────────────┴──────────────────────────────────────┘

# REMEMBER:
# - PhD is a 5-7 year commitment — choose WISELY
# - Hype fades. Fundamentals remain. Choose DEPTH.
# - Your background (Django, Vue, MySQL, Docker) is an ASSET
# - Interdisciplinary work (AI+Systems, AI+SE) has LESS competition
# - The best research comes from CARING about the problem

# THE BIGGER PICTURE:
# "Knowledge is an amanah (trust)."
# Your PhD isn't just for you — it's for the people
# whose lives your research will improve.
#
# Whether it's:
# - Bengali NLP (300M speakers need it)
# - Medical AI (faster diagnosis)
# - Accessible technology (for the disabled)
# - Education technology (for underserved students)
#
# Choose where YOUR knowledge will do the most GOOD.
# That's the true purpose of research.

# FINAL ADVICE:
# 1. Start SMALL — implement one paper
# 2. Be PATIENT — research takes years
# 3. Find MENTORS — don't walk alone
# 4. Keep BUILDING — your projects ARE your research statement
# 5. Make DUA — ask Allah for tawfiq (right guidance)
#
# "My Lord, increase me in knowledge." — Quran 20:114</div>
<div class="callout info"><span class="co-icon">②</span><div><strong>কী পারো? (Strength)</strong> — গণিত ভালো → Theory/AI/Quantum · কোডিং ভালো → Systems/MLSys/SE/Data · মানুষ বোঝো → HCI/AI Ethics · হার্ডওয়্যার → Robotics। দুর্বল জায়গায় যেও না, শক্তিশালী জায়গায় যাও।</div></div>
<div class="callout info"><span class="co-icon">③</span><div><strong>কোথায় সুযোগ? (Market)</strong> — ফান্ডিং কোথায় বেশি, প্রতিযোগিতা কোথায় কম, ক্যারিয়ার ও ভবিষ্যৎ কোথায়? তোমার target বিশ্ববিদ্যালয়ে কোন ডোমেইন শক্তিশালী, কোন প্রফেসর?</div></div>
<div class="callout tip"><span class="co-icon">✦</span><div><strong>বোনাস — কোথায় purpose?</strong> কোন ডোমেইনে তোমার গবেষণা মানুষের কষ্ট কমাবে, ইনসাফ আনবে? জ্ঞান একটা আমানত — কোথায় সেটা সবচেয়ে ভালো ব্যবহার হবে? <strong>সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন।</strong></div></div>

<table class="kv-table"><tr><th>সুপারিশ</th><th>ডোমেইন</th><th>কেন</th></tr>
<tr><td class="hl">🥇 Primary</td><td>MLSys — AI + Systems (Door 7)</td><td>developer + AI দুটোই জানো — মিলন; হট, ফান্ডেড, AI-এর চেয়ে কম প্রতিযোগিতা (৩-৬%)</td></tr>
<tr><td class="hl">🥈 Secondary</td><td>AI4SE — SE + AI (Door 15)</td><td>প্রতিদিন SE করো; LLM দিয়ে কোড খুব হট (Copilot/Cursor/Devin)</td></tr>
<tr><td class="hl">🥉 Safety</td><td>Database / Data (Door 10)</td><td>সবচেয়ে stable, কম প্রতিযোগিতা, MySQL অভিজ্ঞতা কাজে দেবে; vector DB = AI crossover</td></tr>
<tr><td class="hl">🌿 Wildcard</td><td>AI Security (Door 9) বা HCI (Door 12)</td><td>AI sec = সবচেয়ে বর্ধনশীল, API দিয়ে entry; HCI = সবচেয়ে কম ভিড়, Ipractus UI সোনা</td></tr>
<tr><td class="hl">❌ সতর্কতা</td><td>Theory, Quantum (Door 16/17)</td><td>গণিত/পদার্থবিজ্ঞান শক্তিশালী না হলে এড়াও — তোমার developer পটভূমির সরাসরি প্রয়োগ নয়</td></tr></table>

<div class="callout tip"><span class="co-icon">🧭</span><div>এই সুপারিশ একটা starting point মাত্র — কম্পাস দিক দেখায়, হাঁটতে হবে তোমাকে। <strong>interest * strength * market * purpose</strong> মিলিয়ে নিজের সিদ্ধান্ত নাও। তবে সবচেয়ে গুরুত্বপূর্ণ — purpose। কার কষ্ট কমবে? সেটা ছাড়া বাকি তিনটি অর্থহীন।</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ডোমেইন বাছাইয়ে সাধারণ ভুল</div>"সবাই AI করছে, আমিও AI করব।" বা "Quantum হট, সেটাই করব।" — অন্যের সিদ্ধান্ত, অনুভূতি, hype-তে বেছে নেওয়া। ৫-৭ বছর পর হয়তো দেখবে — ভালোবাসো না, পারো না, বা purpose নেই। তখন ফেরা কঠিন। PhD সিদ্ধান্ত জীবনের সবচেয়ে গুরুত্বপূর্ণ — এটা hype বা অন্যের পথে নয়, নিজের প্রশ্নের উত্তরে হওয়া উচিত।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক উপায়</div>"চার প্রশ্ন সৎ হয়ে করি — interest, strength, market, purpose। তারপর ইস্তিখারা, তাওফিক চাই।" তোমার প্রোফাইলের জন্য: MLSys (developer+AI, কম ভিড়, হট) = primary। AI4SE (Copilot যুগ, developer অভিজ্ঞতা) = secondary। Database (stable, MySQL পরিচিত) = safety। কিন্তু চূড়ান্ত সিদ্ধান্ত — purpose + তাওফিক দিয়ে। আল্লাহ সেরাটা জানেন।</div>
</div>

<div class="dialogue">নাভিদ কম্পাস বন্ধ করলেন। "শেষ কথা। তুমি যেই ডোমেইন বেছে নাও — মনে রাখবে: গবেষক হওয়া মানে ডোমেইন বেছে নেওয়া নয়। গবেষক হওয়া মানে — সেই ডোমেইনে গভীরে যাওয়া, বছরের পর বছর, ধৈর্য ধরে। ডোমেইন শুধু শুরু। বাকিটা তোমার যাত্রা।" তিনি সব শিক্ষকের দিকে তাকালেন — উনিশজন হাসলেন, প্রত্যেকে তাঁদের সাগরের দিকে ইশারা করলেন। "তোমার কাছে এখন মানচিত্র আছে, কম্পাস আছে, উনিশজন শিক্ষকের আশীর্বাদ আছে। এখন তুমি প্রস্তুত।"</div>
<div class="dialogue en">Navid closed the compass. "Last word. Whatever domain you choose — remember: becoming a researcher doesn't mean choosing a domain. It means going deep in that domain, year after year, with patience. The domain is just the start. The rest is your journey." He looked at all the teachers — nineteen smiled, each gesturing toward their sea. "You now have the map, the compass, the blessing of nineteen teachers. Now you're ready."</div>

<div class="dialogue">তাওফিক — সঠিক পথে চলা, আল্লাহর সাহায্য। কুরআনে আল্লাহ বলেন: "যারা সৎপথে চলে, তিনি তাদের আরও সৎপথ দেন।" (১৯:৭৬)। তোমার ডোমেইন নির্বাচন করার পর — তাওফিক চাও। ইস্তিখারা করো। আল্লাহর কাছে সাহায্য চাও। কারণ তুমি যেটা ভালো মনে করো, সেটা হয়তো ভালো নয়। আল্লাহ যেটা ভালো জানেন, সেটা হয়তো তোমার কাছে অজানা। তাওফিক চাও — আল্লাহ তোমাকে সেই ডোমেইনে নিয়ে যাবেন যেখানে তোমার জ্ঞান সবচেয়ে বেশি কল্যাণ করবে। এটাই গবেষকের সর্বোচ্চ লক্ষ্য — জ্ঞান দিয়ে কল্যাণ। নাভিদ কম্পাস তোমার হাতে রাখলেন। হাঁটো — তাওফিক সঙ্গে থাকবে।</div>
<div class="dialogue en">Tawfiq — walking the right path, Allah's help. Allah says: "Those who walk the right path, He increases their guidance." (19:76). After choosing your domain — seek tawfiq. Do istikhara. Ask Allah for help. Because what you think is good may not be. What Allah knows is good may be unknown to you. Seek tawfiq — Allah will guide you to the domain where your knowledge brings the most good. This is the researcher's highest goal — knowledge for good. Navid placed the compass in your hand. Walk — tawfiq will accompany you.</div>

<div class="secret-box">🧭 তোমার সিদ্ধান্ত: interest + strength + market + purpose। চারটে মিলিয়ে বেছে নাও — কিন্তু purpose সবচেয়ে গুরুত্বপূর্ণ। তোমার প্রোফাইলের জন্য: MLSys (D7) = primary, AI4SE (D15) = secondary, Data (D10) = safety। তাওফিক চাও — আল্লাহ সঠিক পথ দেখাবেন।</div>`,
  senior:{
    title:"তোমার সিদ্ধান্ত — Senior Synthesis",
    body:`<p><strong>Primary: MLSys (Door 7) — গাণিতিকভাবে সেরা।</strong> developer + AI + AI-এর চেয়ে কম ভিড় (৩-৬%) + সবচেয়ে হট। তোমার LedgerPilot (end-to-end system) + AI আগ্রহ = সোনার মিলন। vLLM/CUDA শিখে শুরু করো। এটা তোমার সবচেয়ে বড় unfair advantage।</p><p><strong>Secondary: AI4SE (Door 15) — Copilot যুগে সবচেয়ে হট।</strong> তুমি developer — real code, real workflow জানো। SWE-bench, code agent (Devin-এর মতো) — এই গবেষণায় তোমার developer অভিজ্ঞতা direct data। GitHub/Anthropic/Cursor-এ hire করে।</p><p><strong>Safety: Database (Door 10) — সবচেয়ে secure।</strong> hype-proof, উচ্চ বেতন, প্রতিটা কোম্পানির দরকার। MySQL পরিচিত (LedgerPilot)। vector DB (RAG-এর ভিত্তি) = AI crossover, তোমার AI আগ্রহের সাথে মিলে। যদি primary না চলে, এটা fallback।</p><p><strong>সবচেয়ে গুরুত্বপূর্ণ — purpose + তাওফিক:</strong> চার প্রশ্ন মিলিয়ে সিদ্ধান্ত নাও, তারপর ইস্তিখারা করো। আল্লাহ তোমাকে সেই ডোমেইনে নিয়ে যাবেন যেখানে তোমার জ্ঞান সবচেয়ে কল্যাণ করবে। জ্ঞান একটা আমানত — কোথায় সেটা সবচেয়ে ভালো ব্যবহার হবে, সেটাই সঠিক সিদ্ধান্ত। এটাই গবেষকের সর্বোচ্চ লক্ষ্য।</p>`
  }
});
