// ════════════════════════════════════════
// DSA BAZAAR — DOORS 1-4
// 1. Big-O & Complexity   2. Recursion
// 3. Arrays & Tensors     4. Linked Lists
// ════════════════════════════════════════
const doors = [];

// ── DOOR 1: BIG-O & COMPLEXITY ANALYSIS ──
doors.push({
  num:1, icon:"🧭", color:"#f0c14b", name:"জ্যোতির্বিদের কক্ষ",
  subtitle:"The Astrolabe Maker's Chamber", tech:"Big-O & Complexity Analysis",
  spirit:"কদর — measure/proportion, from Quran 15:21 (We send it down in a known measure)",
  secret:"Big-O = ইনপুট বাড়লে কাজ কত দ্রুত বাড়ে। দ্রুততার সিঁড়ি: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)।",
  recall:{
    q:"জ্যোতির্বিদ কেন শুধু 'দ্রুত' বলেন না, বরং 'কীভাবে স্কেল করে' বলেন?",
    qen:"Why does the astrolabe maker say not just 'fast', but 'how it scales'?",
    a:"কারণ ছোট ইনপুটে সব অ্যালগরিদম দ্রুত। আসল প্রশ্ন — ইনপুট ১০ গুণ হলে কাজ কত গুণ হয়? O(n) হলে ১০ গুণ, O(n²) হলে ১০০ গুণ, O(2ⁿ) হলে বিস্ফোরণ। Big-O সেই স্কেল মাপে।",
    aen:"Because for small inputs every algorithm is fast. The real question — if input grows 10*, how much does work grow? O(n) → 10*, O(n²) → 100*, O(2ⁿ) → explosion. Big-O measures that scaling."
  },
  story:`
<p class="scene-setting">প্রথম দোকান। জ্যোতির্বিদের কক্ষ। পিতলের অ্যাস্ট্রোলেব, নক্ষত্র মানচিত্র, দেয়ালে ঘূর্ণায়মান গিয়ার। উস্তাদ ফাহিম দাঁড়িয়ে আছেন — হাতে একটা পিতলের যন্ত্র, চোখে তীক্ষ্ণতা। তিনি মাপেন। নক্ষত্রের দূরত্ব, গ্রহের কক্ষপথ, সময়ের গতি। "সবকিছু মাপা যায়," তিনি বলেন। "এমনকি চিন্তাও। তোমার অ্যালগরিদম কত দ্রুত? তবে সবচেয়ে গুরুত্বপূর্ণ — ইনপুট বাড়লে কত দ্রুত ধীর হয়?"</p>
<p class="scene-setting en">The first shop. The Astrolabe Maker's chamber. Brass astrolabes, star charts, rotating gears on the walls. Ustad Fahim stands — a brass instrument in hand, sharp eyes. He measures. Distance of stars, planetary orbits, the flow of time. "Everything can be measured," he says. "Even thought. How fast is your algorithm? But most important — as input grows, how fast does it slow?"</p>

<div class="dialogue">তুমি প্রোগ্রামার। কিন্তু একজন কারিগর আর একজন মাস্টার কারিগরের পার্থক্য কী? কারিগর বলে এটা কাজ করে। মাস্টার বলে এটা কাজ করে এবং ইনপুট দশ গুণ হলে এটা এত গুণ ধীর হবে। এই মাপই Big-O। চিন্তার মাপ।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> ফাহিম প্রথমে O(n²) sorting দিয়ে ১০,০০০ ডেটা সাজিয়েছিলেন। ১০০ ডেটায় চমৎকার। ১০,০০০-তে ৪৫ সেকেন্ড। ইউজার চলে গেলো। তারপর O(n log n) merge sort — একই ১০,০০০-তে ০.০৩ সেকেন্ড। ১,৫০০ গুণ দ্রুত। Big-O শুধু তত্ত্ব নয় — এটা বাজেট।</div></div>
<div class="dialogue en">"You're a programmer. But what separates a craftsman from a master craftsman? The craftsman says 'it works.' The master says 'it works — and if input grows tenfold, it slows by this much.' This measurement is Big-O. The measure of thought."</div>

<div class="dialogue">Big-O বলে শুধু দুটো কথা — সবচেয়ে খারাপ ক্ষেত্রে, ইনপুট বড় হলে, কাজ কীভাবে বাড়ে। স্থির অংশ বাদ দাও, ধ্রুবক গুণনীয়ক বাদ দাও — শুধু মূল আকৃতি রাখো। <code>3n² + 5n + 100</code> হলে শুধু <code>n²</code> দেখো। কারণ n বড় হলে বাকিগুলো তুচ্ছ। আকৃতিই গুরুত্বপূর্ণ, সঠিক সংখ্যা নয়।</div>
<div class="dialogue en">"Big-O says only two things — in the worst case, as input grows large, how does work grow. Drop the constants, drop the lower terms — keep only the shape. <code>3n² + 5n + 100</code> becomes just <code>n²</code>. Because when n is large, the rest is negligible. The shape matters, not the exact number."</div>

<div class="diagram">
  <div class="diag-title">দ্রুততার সিঁড়ি — The Ladder of Growth Rates</div>
  <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#6b6588"/></marker>
    </defs>
    <line class="axis" x1="50" y1="280" x2="540" y2="280" marker-end="url(#arrowG)"/>
    <line class="axis" x1="50" y1="280" x2="50" y2="20" marker-end="url(#arrowG)"/>
    <text class="axis-label" x="535" y="298">n (input size)</text>
    <text class="axis-label" x="20" y="25" transform="rotate(-90 20 25)">work</text>
    <line class="grid-line" x1="50" y1="230" x2="540" y2="230"/>
    <line class="grid-line" x1="50" y1="180" x2="540" y2="180"/>
    <line class="grid-line" x1="50" y1="130" x2="540" y2="130"/>
    <line class="grid-line" x1="50" y1="80" x2="540" y2="80"/>
    <!-- O(1) flat -->
    <path class="curve c1" d="M 50 250 L 520 250"/>
    <text class="lbl-sm" x="525" y="253" text-anchor="start">O(1)</text>
    <!-- O(log n) gentle -->
    <path class="curve clog" d="M 50 270 Q 200 240, 520 225"/>
    <text class="lbl-sm" x="525" y="228" text-anchor="start">O(log n)</text>
    <!-- O(n) linear -->
    <path class="curve cn" d="M 50 280 L 520 120"/>
    <text class="lbl-sm" x="525" y="123" text-anchor="start">O(n)</text>
    <!-- O(n log n) -->
    <path class="curve cnlog" d="M 50 280 Q 300 200, 520 70"/>
    <text class="lbl-sm" x="525" y="73" text-anchor="start">O(n log n)</text>
    <!-- O(n^2) -->
    <path class="curve cn2" d="M 50 280 Q 450 270, 520 45"/>
    <text class="lbl-sm" x="525" y="48" text-anchor="start">O(n²)</text>
    <!-- O(2^n) vertical-ish explosion -->
    <path class="curve c2n" d="M 50 280 C 380 279, 470 250, 490 30"/>
    <text class="lbl-sm" x="498" y="28" text-anchor="start">O(2ⁿ) 💥</text>
  </svg>
  <div class="legend">
    <span class="legend-item"><span class="legend-swatch" style="background:#52c41a"></span>constant</span>
    <span class="legend-item"><span class="legend-swatch" style="background:#36d6e7"></span>logarithmic</span>
    <span class="legend-item"><span class="legend-swatch" style="background:#f0c14b"></span>linear</span>
    <span class="legend-item"><span class="legend-swatch" style="background:#b37feb"></span>linearithmic</span>
    <span class="legend-item"><span class="legend-swatch" style="background:#f06292"></span>quadratic</span>
    <span class="legend-item"><span class="legend-swatch" style="background:#ff6b35"></span>exponential</span>
  </div>
</div>

<div class="code-block"># ── STEP 1: What is Big-O? ──
# Big-O measures HOW WORK GROWS as input grows.
# It answers: "if input doubles, does work double? quadruple? explode?"

# Example: searching a list of n items
# - Check each one by one → n operations → O(n)
# - Binary search (sorted) → log(n) operations → O(log n)

# Big-O focuses on the SHAPE, not exact numbers:
#   3n² + 5n + 100  →  O(n²)    (drop constants, keep dominant term)
#   2n + 50         →  O(n)
#   10              →  O(1)     (constant, doesn't grow with input)</div>

<div class="code-block"># ── STEP 2: The ladder of growth rates ──
# From fastest (best) to slowest (worst):

# O(1)        — constant:      array[5] access (same time regardless of size)
# O(log n)    — logarithmic:   binary search (halves each step)
# O(n)        — linear:        scanning a list once
# O(n log n)  — linearithmic:  good sorting (merge sort, quick sort)
# O(n²)       — quadratic:     nested loops (bubble sort, pair checking)
# O(2ⁿ)       — exponential:   naive Fibonacci recursion
# O(n!)       — factorial:     all permutations (brute traveling salesman)

# The KEY insight: O(n²) is 100x slower than O(n) when n=10
# But it's 10,000x slower when n=100. The gap GROWS.</div>

<div class="code-block"># ── STEP 3: Counting loops — the quick method ──
# How to estimate Big-O by looking at code:

# Single loop → O(n):
def sum_all(items):
    total = 0
    for item in items:      # one loop = n iterations
        total += item
    return total
# Big-O: O(n)

# Nested loops → O(n²):
def print_pairs(items):
    for i in items:          # n iterations
        for j in items:      # n iterations inside = n * n
            print(i, j)
# Big-O: O(n²)

# Halving loop → O(log n):
def binary_search(sorted_list, target):
    lo, hi = 0, len(sorted_list) - 1
    while lo &lt;= hi:          # halves each time
        mid = (lo + hi) // 2
        if sorted_list[mid] == target:
            return mid
        elif sorted_list[mid] &lt; target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
# Big-O: O(log n)</div>

<div class="code-block"># ── STEP 4: Feel the difference — O(n) vs O(n²) ──
import time

def sum_fast(n):
    """O(n) — single loop."""
    total = 0
    for i in range(n):
        total += i
    return total

def sum_slow(n):
    """O(n²) — nested loop doing the same work."""
    total = 0
    for i in range(n):
        for j in range(n):
            if i == j:
                total += i
    return total

# Compare timing:
for n in [1000, 2000, 4000]:
    t1 = time.time(); sum_fast(n); fast = time.time() - t1
    t2 = time.time(); sum_slow(n); slow = time.time() - t2
    print(f"n={n:>5}:  O(n)={fast:.5f}s   O(n²)={slow:.5f}s   ratio={slow/fast:.0f}x")

# n= 1000:  O(n)=0.00003s   O(n²)=0.02000s   ratio=667x
# n= 2000:  O(n)=0.00006s   O(n²)=0.08000s   ratio=1333x
# n= 4000:  O(n)=0.00012s   O(n²)=0.32000s   ratio=2667x
# When n doubles: O(n) doubles, O(n²) quadruples!</div>

<div class="code-block"># ── STEP 5: Space complexity ──
# Big-O measures TIME. Space complexity measures MEMORY.

def reverse_in_place(arr):
    """O(1) space — no extra memory used."""
    left, right = 0, len(arr) - 1
    while left &lt; right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr
# Time: O(n), Space: O(1) — done in-place

def reverse_copy(arr):
    """O(n) space — creates a new array."""
    return arr[::-1]  # creates new list of size n
# Time: O(n), Space: O(n) — extra memory

# Recursion uses stack space:
def factorial(n):
    if n &lt;= 1: return 1
    return n * factorial(n - 1)
# Time: O(n), Space: O(n) — n stack frames</div>

<div class="code-block"># ── STEP 6: Rules for simplifying ──
# Rule 1: Drop constants — O(2n) = O(n), O(500) = O(1)
# Rule 2: Drop lower terms — O(n² + n + 100) = O(n²)
# Rule 3: Different inputs = different variables:
#         O(a + b) for two arrays of different sizes
# Rule 4: Log base doesn't matter — O(log₂ n) = O(log₁₀ n) = O(log n)

# Worst case vs average vs best:
# Big-O usually means WORST CASE
#   - Binary search: worst O(log n), best O(1) (lucky middle)
#   - Quick sort: worst O(n²), average O(n log n)

# Python-specific amortized costs:
# list.append() → amortized O(1) (usually instant, occasionally resize)
# list[0] → O(1) (direct access)
# x in list → O(n) (must scan)
# x in set → O(1) (hash lookup)
# dict[key] → O(1) (hash lookup)
# list.sort() → O(n log n) (Timsort)</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। প্রতিটা পছন্দে Big-O ভাবো। Vector search — O(n) brute নাকি O(log n) HNSW? RAG retrieval — কত docs, কত ধাপ? LLM inference — O(n²) attention (n = token count) — তাই দীর্ঘ context দ্রুত ধীর। Sorting embeddings — O(n log n) কেন, O(n²) কেন নয়। সিনিয়র ইঞ্জিনিয়ার চিন্তেন স্কেলে, শুধু "এখন" নয়।</div>
<div class="dialogue en">"You're an AI engineer. Think Big-O at every choice. Vector search — O(n) brute or O(log n) HNSW? RAG retrieval — how many docs, how many steps? LLM inference — O(n²) attention (n = token count) — that's why long contexts slow fast. Sorting embeddings — O(n log n), not O(n²). Senior engineers think at scale, not just 'now'."</div>

<div class="dialogue">কদর — মাপ, পরিমাণ, মর্যাদা। কুরআনে আল্লাহ বলেন — "আর কোনো কিছুই নেই যার ভাণ্ডার আমার কাছে নেই, আর আমি তা কদর অনুযায়ী নামিয়ে দিই না।" (১৫:২১)। কদর — নিখুঁত মাপ। Big-O সেই কদরের ছায়া — কাজের সঠিক মাপ। যিনি মাপেন তিনিই রক্ষা করেন — অমাপা কাজ ধ্বংস ডেকে আনে।</div>
<div class="dialogue en">"Qadr — measure, proportion, worth. Allah says — 'There is nothing whose treasures are not with Us, and We send it down but in a known measure.' (15:21). Qadr — precise measure. Big-O is the shadow of qadr — the true measure of work. Whoever measures, preserves — unmeasured work invites ruin."</div>

<div class="secret-box">🧭 Big-O = চিন্তার কদর। ইনপুট বাড়লে কাজ কত দ্রুত বাড়ে — সেই মাপ। O(1) থেকে O(2ⁿ) — সিঁড়ির উপর থেকে নিচে।</div>`,
  senior:{
    title:"Big-O পড়ার চার নিয়ম — Senior Eye",
    body:`
    <p><strong>১. Loop গোনো:</strong> একটা loop O(n), দুটো সাজানো loop O(n²), অর্ধেক কাটা loop O(log n)।</p>
    <p><strong>২. ভিতরের কাজ দেখো:</strong> ভিতরে যদি O(log n) কাজ থাকে (যেমন binary search), তবে বাইরের loop সহ O(n log n)।</p>
    <p><strong>৩. স্পেস আলাদা:</strong> Time O(n) কিন্তু Space O(1) হতে পারে (in-place)। দুটোই মাপো। recursion প্রতিটা কলে স্ট্যাক খায় — O(depth) space।</p>
    <p><strong>৪. Amortized:</strong> Python <code>list.append()</code> সাধারণত O(1), কদাচিৎ resize হলে O(n) — কিন্তু amortized O(1)। "সবসময়" আর "গড়ে" আলাদা।</p>`
  },
  exercise:{
    hint:"দুটো algorithm একই কাজে চালাও — O(n) বনাম O(n²)। পার্থক্য দেখো!",
    starterCode:`# জ্যোতির্বিদের কক্ষ — Big-O অনুভব করা
# একই কাজ, দুই algorithm: O(n) বনাম O(n²)
import time

def sum_fast(n):
    """O(n) — একবার চলে যোগ"""
    total = 0
    for i in range(n):
        total += i
    return total

def sum_slow(n):
    """O(n²) — nested loop (একই উত্তর, ভুল পদ্ধতি)"""
    total = 0
    for i in range(n):
        for j in range(n):       # প্রতিটা i-এর জন্য পুরো n বার লুপ — n*n = O(n²)
            if i == j:            # শুধু মিলে গেলে যোগ করি (একই ফলাফল পেতে)
                total += i
    return total

# ছোট n — পার্থক্য দেখা যায় না
print("n=1000:")
print("  fast:", sum_fast(1000))

# বড় n — পার্থক্য স্পষ্ট (n² তাই বেশি বড় সংখ্যা দিলে ধীর হয়ে যাবে)
for n in [1_000, 2_000, 4_000]:
    t1 = time.time(); sum_fast(n); tf = time.time() - t1
    t2 = time.time(); sum_slow(n); ts = time.time() - t2
    print(f"n={n:>7}:  O(n)={tf:.5f}s   O(n²)={ts:.5f}s   অনুপাত={ts/tf:.1f}x")

# প্রশ্ন: n ১০ গুণ হলে O(n) কত গুণ ধীর হয়? O(n²)?
# (উত্তর: O(n) → ~10x, O(n²) → ~100x)
`
  }
});

// ── DOOR 2: RECURSION ──
doors.push({
  num:2, icon:"🌿", color:"#52c41a", name:"আরবেস্ক খোদাইকারীর দেয়াল",
  subtitle:"The Arabesque Carver's Wall", tech:"Recursion & Recursive Thinking",
  spirit:"তাওয়াক্কুল — trust in the process, from Quran 65:3 (whoever trusts, Allah is sufficient)",
  secret:"Recursion = ফাংশন নিজেকে ডাকে, ছোট সমস্যায়। দুটো অংশ: base case (থামো) + recursive case (নিজেকে ডাকো, ছোট করে)।",
  recall:{
    q:"আরবেস্ক খোদাইকারী কীভাবে একটা ছোট প্যাটার্ন থেকে বিশাল নকশা বানান?",
    qen:"How does the arabesque carver build a vast design from a small pattern?",
    a:"প্যাটার্নটা নিজের মধ্যে প্যাটার্ন ধারণ করে — একই আকৃতি, ছোট স্কেলে। বেস প্যাটার্ন থাকে (base case), তারপর নিজের অনুলিপি বসানো হয় (recursive case)। ফাংশনও তেমনি — ছোট ইনপুটে নিজেকে ডাকে।",
    aen:"The pattern contains a pattern within itself — same shape, smaller scale. A base pattern exists (base case), then copies of itself are placed (recursive case). A function does the same — calls itself on smaller input."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দোকান। আরবেস্ক খোদাইকারীর দেয়াল। পলেস্তারা থেকে উঠে আসা জ্যামিতিক নকশা — একটা তারকা, তার ভেতরে আরেকটা, তার ভেতরে আরও — অসীম পর্যন্ত মনে হয়, কিন্তু একটা বিন্দুতে থামে। উস্তাদ বিলাল হাতে ছুতার দিয়ে কাজ করছেন। "একই প্যাটার্ন," তিনি বলেন। "বারবার। প্রতিটা ছোট স্তরে। একটা শেষ আছে — তবে পর্যন্ত, একই রূপ।"</p>
<p class="scene-setting en">The second shop. The Arabesque Carver's wall. Geometric patterns rising from the plaster — a star, within it another, within it more — seemingly to infinity, but stopping at a point. Ustad Bilal works with a chisel. "One pattern," he says. "Repeated. Each smaller layer. There's an end — until then, the same form."</p>

<div class="dialogue">জ্যোতির্বিদ শিখিয়েছিলেন — মাপো, স্কেল ভাবো। আমি বলি — স্কেল ছোট হতে থাকলে একই সমস্যা বারবার আসে। একটা গাছের ডাল — ডাল থেকে ছোট ডাল, তার থেকে আরও ছোট। একই আকৃতি, ছোট স্কেল। একে recursion বলে — নিজের অনুলিপি, ছোট করে।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> বিলাল naive recursion দিয়ে fib(35) বের করতে গিয়েছিলেন। ২৯ মিলিয়ন+ কল, ৬ সেকেন্ড ধরে ঝুলে রইল। কারণ একই সমস্যা বারবার হিসাব হচ্ছিল। তারপর memoization (DP, দোকান ১৫) যোগ করলেন — মাত্র ৩৫টা কলে ০.০০১ সেকেন্ডে শেষ। হাজার গুণ দ্রুত। কারণ প্রতিটা উত্তর মনে রাখা হলো, পুনরায় হিসাব হলো না।</div></div>
<div class="dialogue en">"The astrolabe maker taught — measure, think of scale. I say — as scale shrinks, the same problem repeats. A tree's branch — from it a smaller branch, from that a smaller one. Same shape, smaller scale. This is recursion — a copy of itself, made smaller."</div>

<div class="dialogue">প্রতিটা recursion-এ দুটো অংশ থাকে। Base case — যেখানে থামো। ছোট থেকে ছোট, শেষ পর্যন্ত এসে থামতে হয়। Recursive case — নিজেকে ছোট ইনপুটে ডাকো। Factorial: 5! = 5 * 4!, আর 4! = 4 * 3!, ... 1! = 1 (base case)। প্রতিটা ধাপে সমস্যা ছোট হয় — একদিন base case-এ পৌঁছায়।</div>
<div class="dialogue en">"Every recursion has two parts. Base case — where you stop. Smaller and smaller, eventually you must halt. Recursive case — call yourself on smaller input. Factorial: 5! = 5 * 4!, and 4! = 4 * 3!, ... 1! = 1 (base case). Each step shrinks the problem — eventually reaching the base case."</div>

<div class="diagram">
  <div class="diag-title">factorial(4) — কল ট্রি ও রিটার্ন</div>
  <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowDn" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#9a93b8"/></marker>
      <marker id="arrowUp" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#f0c14b"/></marker>
    </defs>
    <!-- call chain downward -->
    <g class="lbl-sm" fill="#9a93b8">
      <text x="280" y="22" text-anchor="middle">fact(4) calls</text>
    </g>
    <rect class="node" x="240" y="30" width="80" height="32" rx="8"/>
    <text class="lbl" x="280" y="46">fact(4)</text>
    <line class="edge" x1="280" y1="62" x2="280" y2="82" marker-end="url(#arrowDn)"/>

    <rect class="node" x="240" y="84" width="80" height="32" rx="8"/>
    <text class="lbl" x="280" y="100">fact(3)</text>
    <line class="edge" x1="280" y1="116" x2="280" y2="136" marker-end="url(#arrowDn)"/>

    <rect class="node" x="240" y="138" width="80" height="32" rx="8"/>
    <text class="lbl" x="280" y="154">fact(2)</text>
    <line class="edge" x1="280" y1="170" x2="280" y2="190" marker-end="url(#arrowDn)"/>

    <rect class="node-hot" x="240" y="192" width="80" height="32" rx="8"/>
    <text class="lbl" x="280" y="208">fact(1)</text>
    <text class="lbl-sm" x="355" y="208" fill="#ff6b35">base case!</text>

    <!-- return chain -->
    <g>
      <text class="lbl-sm" x="120" y="208" fill="#f0c14b" text-anchor="middle">returns 1</text>
      <line class="edge-hot" x1="240" y1="208" x2="160" y2="208"/>
    </g>
    <text class="lbl-sm" x="120" y="154" fill="#f0c14b" text-anchor="middle">2*1 = 2</text>
    <line class="edge-hot" x1="240" y1="154" x2="160" y2="154"/>
    <text class="lbl-sm" x="120" y="100" fill="#f0c14b" text-anchor="middle">3*2 = 6</text>
    <line class="edge-hot" x1="240" y1="100" x2="160" y2="100"/>
    <text class="lbl-sm" x="120" y="46" fill="#f0c14b" text-anchor="middle">4*6 = 24</text>
    <line class="edge-hot" x1="240" y1="46" x2="160" y2="46"/>
    <text class="lbl-sm" x="280" y="265" text-anchor="middle">নিচে নামো (calls) · উপরে ফেরো (returns) — স্ট্যাকের দুই দিক</text>
  </svg>
  <div class="diag-cap">প্রতিটা কল স্ট্যাকে জমে — base case ছুঁয়ে উপরে ফেরে। গভীরতা = স্ট্যাক স্পেস।</div>
</div>

<div class="code-block"># ── STEP 1: What is recursion? ──
# Recursion = a function that calls ITSELF on a SMALLER version of the problem.

# The simplest recursion — countdown:
def countdown(n):
    print(n)
    if n &lt;= 0:          # BASE CASE — stop
        return
    countdown(n - 1)     # RECURSIVE CASE — call self with smaller input

countdown(3)
# 3
# 2
# 1
# 0

# Two essential parts:
# 1. BASE CASE — when to STOP (prevents infinite recursion)
# 2. RECURSIVE CASE — call yourself with SMALLER input

# If you forget the base case → infinite recursion → crash:
# RecursionError: maximum recursion depth exceeded</div>

<div class="code-block"># ── STEP 2: Factorial — the classic example ──
# n! = n × (n-1) × (n-2) × ... × 1
# Example: 5! = 5 × 4 × 3 × 2 × 1 = 120

# Recursive definition of factorial:
def factorial(n):
    """Calculate n! using recursion."""
    # Base case: 0! = 1, 1! = 1
    if n &lt;= 1:
        return 1
    # Recursive case: n! = n × (n-1)!
    return n * factorial(n - 1)

print(factorial(5))  # 120

# How it works (the call stack):
# factorial(5) → 5 * factorial(4)
#                    4 * factorial(3)
#                         3 * factorial(2)
#                              2 * factorial(1)
#                                   1  ← base case!
#                              2 * 1 = 2
#                         3 * 2 = 6
#                    4 * 6 = 24
# 5 * 24 = 120  ← final answer

# Each call waits for the smaller call to return.
# The answer builds up on the way BACK.</div>

<div class="code-block"># ── STEP 3: Recursion vs iteration ──
# Every recursion can be written as a loop. Which to use?

# Recursive factorial:
def factorial_recursive(n):
    if n &lt;= 1:
        return 1
    return n * factorial_recursive(n - 1)

# Iterative (loop) factorial:
def factorial_iterative(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

print(factorial_recursive(5))  # 120
print(factorial_iterative(5))  # 120

# Same result! But:
# - Iterative: O(1) space (no call stack)
# - Recursive: O(n) space (n stack frames)

# USE RECURSION when:
# - The problem is naturally recursive (trees, graphs, divide-and-conquer)
# - It makes the code CLEARER
# USE LOOPS when:
# - Simple counting or accumulation
# - Performance is critical (avoid stack overhead)
# - Input is large (avoid stack overflow)</div>

<div class="code-block"># ── STEP 4: Fibonacci — and why naive recursion is slow ──
# Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
# Each number = sum of previous two

# Naive recursion — EXPONENTIAL TIME O(2^n):
def fib_naive(n):
    if n &lt;= 1:
        return n
    return fib_naive(n - 1) + fib_naive(n - 2)

print(fib_naive(10))  # 55
# fib_naive(35) takes ~3 seconds! fib_naive(50) = impossible.

# The problem: same values calculated REPEATEDLY.
# fib(5) calls fib(4) + fib(3)
# fib(4) calls fib(3) + fib(2)  ← fib(3) calculated AGAIN!

# Fix: memoization (cache results):
def fib_memo(n, cache=None):
    if cache is None:
        cache = {}
    if n in cache:
        return cache[n]
    if n &lt;= 1:
        return n
    cache[n] = fib_memo(n - 1, cache) + fib_memo(n - 2, cache)
    return cache[n]

print(fib_memo(50))  # 12586269025 — instant!

# Or use functools.lru_cache:
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_cached(n):
    if n &lt;= 1:
        return n
    return fib_cached(n - 1) + fib_cached(n - 2)

print(fib_cached(100))  # instant!</div>

<div class="code-block"># ── STEP 5: Three recursion patterns ──
# Most recursive problems fall into 3 categories.

# Pattern 1: COUNTING / AGGREGATION
# Sum a list recursively:
def sum_list(items):
    if not items:          # base case: empty list
        return 0
    return items[0] + sum_list(items[1:])  # first + rest

print(sum_list([1, 2, 3, 4, 5]))  # 15

# Pattern 2: TREE / GRAPH TRAVERSAL
# Walk a nested structure (like JSON or file system):
def count_files(node):
    """Count files in a nested directory structure."""
    if isinstance(node, str):  # base case: it's a file
        return 1
    # recursive: it's a directory, count files in each child
    return sum(count_files(child) for child in node.values())

fs = {"home": {"docs": {"resume.pdf": ""}, "photos": {"cat.jpg": ""}}}
# count_files(fs) → 2 files

# Pattern 3: DIVIDE AND CONQUER
# Split problem in half, solve each, combine:
def merge_sort(arr):
    if len(arr) &lt;= 1:        # base case
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])    # sort left half
    right = merge_sort(arr[mid:])   # sort right half
    return merge(left, right)       # combine</div>

<div class="code-block"># ── STEP 6: Common pitfalls ──
# Pitfall 1: No base case → infinite recursion → crash
def bad_recursion(n):
    return bad_recursion(n)  # no base case! → RecursionError

# Pitfall 2: Base case never reached → input doesn't shrink
def bad_factorial(n):
    if n &lt; 0:
        return 1
    return n * bad_factorial(n)  # n never decreases! → crash

# Pitfall 3: Stack overflow — Python limits recursion to ~1000 depth
def deep_recursion(n):
    if n == 0:
        return 0
    return 1 + deep_recursion(n - 1)

# deep_recursion(500)   → works
# deep_recursion(2000)  → RecursionError!

# For deep recursion, convert to iteration:
def deep_iterative(n):
    count = 0
    for i in range(n):
        count += 1
    return count

# SUMMARY:
# ┌────────────────┬──────────────────────────────────┐
# │ Pattern        │ When to use                      │
# ├────────────────┼──────────────────────────────────┤
# │ Base case      │ ALWAYS — stops recursion         │
# │ Shrink input   │ n-1, n//2, items[1:]             │
# │ Counting       │ factorial, sum, fibonacci        │
# │ Tree walk      │ JSON, file system, AST           │
# │ Divide/conquer │ merge sort, binary search        │
# │ Memoization    │ when same subproblem repeats     │
# └────────────────┴──────────────────────────────────┘</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Recursion সবখানে। JSON ট্রি পরিভ্রমণ — nested অবজেক্ট। File system walk — ফোল্ডারের ভেতরে ফোল্ডার। AST (abstract syntax tree) — কোড পার্স করা। Tree search — minimax গেম AI। Backtracking (দোকান ১৬) — recursion + ফেরা। যে recursion বোঝে সে গাছ বোঝে, যে গাছ বোঝে সে অনেক সমস্যা বোঝে।</div>
<div class="dialogue en">"You're an AI engineer. Recursion is everywhere. JSON tree traversal — nested objects. File system walk — folders in folders. AST (abstract syntax tree) — parsing code. Tree search — minimax game AI. Backtracking (Door 16) — recursion + retreat. Who understands recursion understands trees; who understands trees understands many problems."</div>

<div class="dialogue">আর একটা উদাহরণ দাঁড় করাই — রাশিয়ান পুতুল, Matryoshka। একটা বড় পুতুল, খুললে ভেতরে ছোট একটা, তার ভেতরে আরও ছোট — এভাবে ছোট থেকে ছোট, শেষ পর্যন্ত একটা সবচেয়ে ছোট পুতুল যার ভেতরে আর কিছু নেই। সেটাই base case। বাকিগুলো recursive case — প্রতিটা ভেতরে আরেকটা ধারণ করে।</div>
<div class="dialogue en">"And here's another example — Russian nesting dolls, Matryoshka. A large doll, opened reveals a smaller one, within that an even smaller — each smaller than the last, until the tiniest doll that contains nothing more. That's the base case. The rest are recursive cases — each containing another within."</div>

<div class="diagram">
  <div class="diag-title">Matryoshka Dolls — Recursion-এর ছোঁয়া</div>
  <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
    <!-- 4 nesting dolls, decreasing in size, nested -->
    <ellipse class="node-hot" cx="280" cy="105" rx="75" ry="80" fill="rgba(255,107,53,.1)" stroke="#ff6b35" stroke-width="2"/>
    <text class="lbl" x="280" y="110" fill="#ff6b35">fact(5)</text>

    <ellipse class="node" cx="280" cy="110" rx="55" ry="60" fill="rgba(240,193,75,.1)" stroke="#f0c14b" stroke-width="2"/>
    <text class="lbl" x="280" y="115" fill="#f0c14b">fact(4)</text>

    <ellipse class="node-cyan" cx="280" cy="115" rx="38" ry="42" fill="rgba(54,214,231,.1)" stroke="#36d6e7" stroke-width="2"/>
    <text class="lbl-sm" x="280" y="120" fill="#36d6e7">fact(3)</text>

    <ellipse class="node-leaf" cx="280" cy="118" rx="24" ry="26" fill="rgba(82,196,26,.15)" stroke="#52c41a" stroke-width="2"/>
    <text class="lbl-sm" x="280" y="122" fill="#52c41a">fact(1)</text>

    <text class="lbl-sm" x="280" y="52" text-anchor="middle" fill="#9a93b8">বাইরের পুতুল = বড় সমস্যা</text>
    <text class="lbl-sm" x="280" y="182" text-anchor="middle" fill="#52c41a">ভেতরের সবচেয়ে ছোট = base case (আর খোলার মতো নেই)</text>

    <!-- side annotations -->
    <text class="lbl-sm" x="80" y="80" fill="#ff6b35">↔ খোলো → ছোট</text>
    <text class="lbl-sm" x="80" y="100" fill="#ff6b35">↔ recursive case</text>
    <text class="lbl-sm" x="440" y="80" fill="#52c41a">↔ থামো</text>
    <text class="lbl-sm" x="440" y="100" fill="#52c41a">↔ base case</text>
  </svg>
  <div class="diag-cap">প্রতিটা পুতুল একই আকৃতি, শুধু ছোট — recursion-এ প্রতিটা কল একই ফাংশন, শুধু ছোট ইনপুট।</div>
</div>

<div class="dialogue">তবে সাবধান — পুতুলের ভেতরে আর পুতুল থাকতে পারে, কিন্তু এটা অসীমে যেতে পারে না। ঠিক তেমনি recursion-এও base case না থাকলে সমস্যা অসীমভাবে ছোট হতে থাকে, কিন্তু কখনো থামে না — Stack Overflow। দুই আয়নার মাঝে দাঁড়ালে যেমন অসীম প্রতিবিম্ব দেখা যায়, কিন্তু একটা সময় আয়না ফাটে।</div>
<div class="dialogue en">"But beware — dolls within dolls can exist, but cannot go to infinity. Similarly, recursion without a base case makes the problem infinitely smaller but never stops — Stack Overflow. Like standing between two mirrors seeing endless reflections, until the glass cracks."</div>

<div class="dialogue">আয়াত — নিদর্শন। কুরআনে বারবার বলা হয়েছে — "আকাশ ও পৃথিবীর সৃষ্টিতে, নিজেদের সৃষ্টিতে... চিন্তা করো না?" প্রতিটা নিদর্শনের ভেতরে আরেকটা নিদর্শন — কোষের ভেতরে কোষ, পরমাণুর ভেতরে পরমাণু, সূর্যের চারপাশে গ্রহ, গ্রহের চারপাশে উপগ্রহ। একই কাঠামো — ছোট স্কেলে। আত্তুবুহ — ফিরে দেখা — recursion-এর ফেরার পথের মতো।</div>
<div class="dialogue en">"Ayah — a sign. The Quran repeats — 'In the creation of the heavens and earth, in your own creation... will you not reflect?' Within each sign, another sign — cell within cell, atom within atom, planets around a sun, moons around a planet. The same structure — at smaller scale. Recursive creation — like the return path of recursion."</div>

<div class="secret-box">🌿 Recursion = ফাংশন নিজেকে ডাকে, ছোট সমস্যায়। দুটো অংশ: base case (থামো) + recursive case (নিজেকে ডাকো, ছোট করে)।</div>`,
  senior:{
    title:"Recursion বনাম Iteration — Senior Choice",
    body:`
    <p><strong>পড়তে সহজ:</strong> recursion। গাছ, গ্রাফ, বিভাজন — recursion স্বাভাবিক। Tree traversal এক লাইনে লেখা যায়।</p>
    <p><strong>দক্ষতায়:</strong> iteration। প্রতিটা recursion কল স্ট্যাক খায় (memory + time)। Deep recursion মারাত্মক — Python <code>sys.setrecursionlimit</code>, কিন্তু সত্যিকারের fix হলো iterative।</p>
    <p><strong>Stack overflow থেকে বাঁচো:</strong> tail recursion (কিছু ভাষায় optimized), অথবা explicit stack দিয়ে iterative conversion।</p>
    <p><strong>Senior pattern:</strong> recursion দিয়ে চিন্তা করো (স্পষ্ট), তারপর production-এ iterative বা memoized DP তে রূপান্তর করো (দ্রুত)।</p>`
  },
  exercise:{
    hint:"factorial ও Fibonacci লেখো recursion দিয়ে — তারপর কল গোনো!",
    starterCode:`# আরবেস্ক খোদাইকারীর দেয়াল — Recursion
# factorial ও Fibonacci — কল গুনি

call_count = 0

def factorial(n):
    """Recursive factorial — প্রতিটা কল গুনছি"""
    global call_count
    call_count += 1
    if n <= 1:                    # base case
        return 1
    return n * factorial(n - 1)   # recursive case

print("factorial(5) =", factorial(5))
print(f"মোট কল: {call_count}")     # 5 (n=5,4,3,2,1 — প্রতিটা কল, base case-সহ)

# Fibonacci — naive recursion কত খারাপ?
fib_calls = 0
def fib(n):
    global fib_calls
    fib_calls += 1
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

for n in [5, 10, 20, 25]:
    fib_calls = 0
    result = fib(n)
    print(f"fib({n}) = {result}, কল সংখ্যা: {fib_calls}")

# প্রশ্ন: fib(20) কেন 21,000+ কল নেয় (ঠিক করে বললে ২১,৮৯১টি)?
# (কারণ একই সমস্যা বারবার গণনা হয় — O(2^n)।
#  এটাই DP (Door 15) কেন দরকার!)

# BONUS: একটা recursive sum লেখো — list-এর সব উপাদানের যোগ
def recursive_sum(lst):
    # base case: empty list → 0
    # recursive: lst[0] + recursive_sum(lst[1:])
    pass  # এখানে লেখো
`
  }
});

// ── DOOR 3: ARRAYS & TENSORS ──
doors.push({
  num:3, icon:"🧱", color:"#ff6b35", name:"টালি নির্মাতার কারখানা",
  subtitle:"The Tile Maker's Workshop", tech:"Arrays & Tensors",
  spirit:"নিজাম — order/arrangement, from Quran 73:20 (regular arrangement)",
  secret:"Array = ধারাবাহিক স্থান। O(1) অ্যাক্সেস। সব AI ডেটা শেষে টেনসর।",
  recall:{
    q:"টালি নির্মাতা কেন এক সারিতে সাজান, ছড়িয়ে নয়?",
    qen:"Why does the tile maker arrange tiles in a row, not scattered?",
    a:"কারণ ধারাবাহিক সাজানো থাকলে যেকোনো টালি সরাসরি চিহ্নিত করা যায় — O(1)। ছড়িয়ে থাকলে খুঁজতে হয় — O(n)। Array-র শক্তি এই ধারাবাহিকতায়।",
    aen:"Because contiguous arrangement lets any tile be addressed directly — O(1). Scattered requires searching — O(n). Array's power is in contiguity."
  },
  story:`
<p class="scene-setting">তৃতীয় দোকান। টালি নির্মাতার কারখানা। মাটির গন্ধ, চুল্লির উত্তাপ, সারিবদ্ধ টালির ঝনঝন। উস্তাদ কাসেম কাজ করছেন — মাটির তালিকে সারিবদ্ধ করে সাজাচ্ছেন। প্রতিটা টালির একটা ক্রম আছে — ০, ১, ২, ৩। তিনি বলেন, "এক সারিতে থাকলে যেকোনোটা সরাসরি পাওয়া যায়। ছড়িয়ে থাকলে খুঁজতে হয়।"</p>
<p class="scene-setting en">The third shop. The Tile Maker's Workshop. Smell of clay, heat from the kiln, the clink of arranged tiles. Ustad Kasem works — laying tiles in rows. Each has an index — 0, 1, 2, 3. He says: "In a row, any tile is found directly. Scattered, you must search."</p>

<div class="dialogue">আরবেস্ক খোদাইকারী শিখিয়েছিলেন — ছোট করে নিজেকে ডাকো। কিন্তু আমি বলি — সবচেয়ে সহজ কাঠামো আগে। এক সারি। ধারাবাহিক মেমোরিতে। প্রতিটা উপাদানের একটা ক্রম — index। "তৃতীয় টালি" বললেই সরাসরি সেই ঠিকানায় — এক ধাপে। একে বলে O(1) — ধ্রুবক সময়।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> কাসেম Python list দিয়ে ১ লাখ embedding নিয়ে matrix multiply করতে গিয়েছিলেন — ৪৭ সেকেন্ড। কারণ প্রতিটা উপাদান আলাদা Python object, মেমোরিতে ছড়িয়ে ছিটিয়ে। তারপর NumPy array দিয়ে একই কাজ — ধারাবাহিক মেমোরি, C-লেভেল vectorization — ০.১২ সেকেন্ড। ৪০০ গুণ দ্রুত। ধারাবাহিক মেমোরি শুধু সুবিধা নয়, কর্মক্ষমতার চাবি।</div></div>
<div class="dialogue en">"The arabesque carver taught — call yourself on smaller input. But I say — the simplest structure first. One row. Contiguous in memory. Each element has an index. Say 'third tile' — go directly to that address, one step. This is O(1) — constant time."</div>

<div class="diagram">
  <div class="diag-title">Array — ধারাবাহিক মেমোরি, সরাসরি অ্যাক্সেস</div>
  <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
    <!-- cells -->
    ${Array.from({length:6},(_,i)=>`
    <rect class="cell" x="${60+i*75}" y="70" width="65" height="60" rx="6"/>
    <text class="lbl" x="${92.5+i*75}" y="100">${[10,20,30,40,50,60][i]}</text>
    <text class="lbl-sm" x="${92.5+i*75}" y="58">[${i}]</text>
    `).join('')}
    <!-- memory address hint -->
    <text class="lbl-sm" x="92.5" y="150">addr 100</text>
    <text class="lbl-sm" x="167.5" y="150">104</text>
    <text class="lbl-sm" x="242.5" y="150">108</text>
    <text class="lbl-sm" x="317.5" y="150">112</text>
    <text class="lbl-sm" x="392.5" y="150">116</text>
    <text class="lbl-sm" x="467.5" y="150">120</text>
    <!-- direct access arrow -->
    <line class="edge-cyan" x1="317.5" y1="30" x2="317.5" y2="64"/>
    <text class="lbl-sm" x="317.5" y="22" fill="#36d6e7">arr[3] → addr 100 + 3*4 = 112</text>
    <text class="lbl-sm" x="280" y="182" text-anchor="middle">O(1) — index থেকে ঠিকানা গণনা: base + index * size</text>
  </svg>
  <div class="diag-cap">index * size যোগ করে ঠিকানা — তাই যেকোনো উপাদান এক ধাপে।</div>
</div>

<div class="dialogue">কিন্তু যদি টালিগুলো ছড়িয়ে থাকে? তাহলে প্রতিটা দেখে যেতে হবে — প্রথম, দ্বিতীয়, তৃতীয়... যত বেশি টালি, তত বেশি সময়। একে বলে O(n) — রৈখিক সময়। Array-র শক্তি ধারাবাহিকতায়। Linked list-এর দুর্বলতা — ছড়িয়ে থাকা।</div>
<div class="dialogue en">"But if tiles are scattered? Then you must check each — first, second, third... The more tiles, the more time. This is O(n) — linear time. Array's power is contiguity. Linked list's weakness — being scattered."</div>

<div class="dialogue">এখন শোনো — তুমি AI ইঞ্জিনিয়ার। তোমার প্রতিটা মডেলের ইনপুট কী? একটা ছবি — কিন্তু মেশিনের কাছে সেটা সংখ্যার একটা গ্রিড। 224*224 pixel, প্রতিটায় 3 রঙ (RGB)। সেটা একটা 3D array — tensor। একটা sentence — প্রতিটা টোকেন একটা embedding vector (শত শত সংখ্যা)। সব শেষে array।</div>
<div class="dialogue en">"Now listen — you're an AI engineer. What's every model's input? An image — but to the machine, it's a grid of numbers. 224*224 pixels, each with 3 colors (RGB). That's a 3D array — a tensor. A sentence — each token is an embedding vector (hundreds of numbers). Everything ends as arrays."</div>

<div class="code-block">Tensor Shapes in AI:

ছবি (Image):  [224, 224, 3]     → 3D tensor
বাক্য (Text):  [10, 768]         → 2D (10 tokens * 768 dims)
ব্যাচ (Batch): [32, 224, 224, 3] → 4D (32 images)

Index rules:
  data[0]      → 1st element (Python 0-indexed!)
  data[-1]     → last element
  data[1:4]    → elements 1,2,3 (exclusive end)
  data[::-1]   → reversed</div>

<div class="dialogue">ভাবো — সিনেমা হলের আসন। প্রতিটা আসনে একটা করে নম্বর — A1, A2, A3। তুমি যদি A5 আসনে বসতে চাও, তুমি A1 বা A2 দেখবে না। সরাসরি A5-এ যাবে। কারণ আসনগুলো সারিবদ্ধ, নম্বর দেওয়া। এটাই array-র শক্তি — O(1) অ্যাক্সেস। কিন্তু সমস্যা? ধরো একজন VIP অতিথিকে A3 আর A4-এর মাঝে বসাতে হবে। তাহলে A4 থেকে শেষ পর্যন্ত সবাইকে এক ঘর করে পিছিয়ে যেতে হবে। এটাই array-তে insert-এর খরচ — O(n)।</div>
<div class="dialogue en">"Think of cinema hall seats. Each seat has a number — A1, A2, A3. If you want to sit in A5, you don't check A1 or A2. You go straight to A5. Because seats are in a row, numbered. This is array's power — O(1) access. But the problem? If a VIP guest needs to sit between A3 and A4, everyone from A4 onwards must shift back one seat. This is the cost of insert in an array — O(n)."</div>

<div class="diagram">
  <div class="diag-title">সিনেমা হলের আসন — Insert-এর খরচ</div>
  <svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg">
    <!-- before insert -->
    <text class="lbl-sm" x="280" y="20" text-anchor="middle" fill="#f0c14b">আগে: ৫টা আসন</text>
    ${[0,1,2,3,4].map(i=>`
    <rect class="cell" x="${60+i*90}" y="30" width="78" height="36" rx="5"/>
    <text class="lbl-sm" x="${99+i*90}" y="52">A${i+1}</text>
    `).join('')}
    <text class="lbl-sm" x="${99+2*90}" y="22" fill="#ff6b35">↑ এখানে VIP</text>

    <!-- arrow -->
    <text class="lbl-sm" x="280" y="85" text-anchor="middle" fill="#36d6e7">⬇ VIP ঢোকাও → সবাই সরে যায়</text>

    <!-- after insert -->
    <text class="lbl-sm" x="280" y="105" text-anchor="middle" fill="#52c41a">পরে: VIP ঢুকেছে, সবাই ডানে সরেছে</text>
    ${[0,1,2,3,4,5].map((lbl,i)=>`
    <rect class="${lbl==='VIP'?'cell-hot':'cell'}" x="${30+i*80}" y="115" width="70" height="34" rx="5" style="${lbl==='VIP'?'fill:rgba(255,107,53,.25);stroke:#ff6b35':''}"/>
    <text class="lbl-sm" x="${65+i*80}" y="135" fill="${lbl==='VIP'?'#ff6b35':'#9a93b8'}">${lbl}</text>
    `).join('')}
  </svg>
  <div class="diag-cap">array-তে মাঝে ঢোকাতে হলে পরের সব উপাদান সরতে হয় — O(n)। Linked list-এ শুধু pointer বদলাও — O(1)।</div>
</div>

<div class="dialogue">কুরআনে আছে — "আর আমি সৃষ্টি করেছি সব কিছু এক নির্দিষ্ট পরিমাণে।" (৫৪:৪৯)। প্রতিটা জিনিসের একটা জায়গা আছে — একটা ক্রম আছে। Array সেই শৃঙ্খলার ছায়া — প্রতিটা উপাদানের একটা নির্দিষ্ট স্থান। জ্যোতির্বিদ মাপেন — আমি সাজাই।</div>
<div class="dialogue en">"The Quran says — 'And all things We created with a destined measure.' (54:49). Everything has its place — an order. The array is a shadow of that discipline — each element has a specific position. The astrolabe maker measures — I arrange."</div>

<div class="secret-box">🧱 Array = ধারাবাহিক স্থান। O(1) অ্যাক্সেস। সব AI ডেটা শেষে টেনসর।</div>`,
  senior:{
    title:"Python List vs NumPy Array — কখন কোনটা?",
    body:`
    <p><strong>Python list:</strong> সাধারণ কাজে ব্যবহার করো। মিশ্র টাইপ রাখতে পারে। কিন্তু ধীর — প্রতিটা আইটেম আলাদা object।</p>
    <p><strong>NumPy array:</strong> সংখ্যাত্মক কাজে ব্যবহার করো। একই টাইপ, ধারাবাহিক মেমোরি, 10-100x দ্রুত। AI-এ সবসময় NumPy বা PyTorch tensor।</p>
    <p><strong>Senior habit:</strong> <code>import numpy as np</code> — সংখ্যা নিয়ে কাজ করলে list ভুলে যাও।</p>`
  },
  exercise:{
    hint:"indexing, slicing, আর reverse করা অনুশীলন — কোড চালাও!",
    starterCode:`# টালি নির্মাতার কারখানা — Array Operations
# নিচের কোড পড়ো, চালাও, তারপর নিজে চেষ্টা করো

# একটা সাধারণ array (Python list)
tiles = [10, 20, 30, 40, 50, 60, 70, 80]

# TODO 1: তৃতীয় উপাদানটা প্রিন্ট করো (index 2)
print("Third tile:", tiles[2])  # এটা কী দেখাবে?

# TODO 2: শেষের উপাদানটা প্রিন্ট করো
# লিখো এখানে:

# TODO 3: প্রথম ৪টা উপাদান প্রিন্ট করো (slicing)
# লিখো এখানে:

# TODO 4: উল্টো ক্রমে প্রিন্ট করো
# লিখো এখানে:

# BONUS: একটা 2D grid বানাও (list of lists)
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
# grid[1][2] কী দেখাবে? চালিয়ে দেখো:
print("Grid center:", grid[1][1])
`
  }
});

// ── DOOR 4: LINKED LIST ──
doors.push({
  num:4, icon:"📿", color:"#36d6e7", name:"মুক্তোর মালার কারখানা",
  subtitle:"The Pearl Necklace Maker", tech:"Linked Lists (Singly, Doubly)",
  spirit:"সিলসিলা — chain, from Quran 3:103 (hold fast to the rope together)",
  secret:"Array = একসাথে সাজানো বাক্স। Linked list = এক একটা node, প্রতিটা পরেরটার ঠিকানা জানে। ঢোকাতে/বাদ দিতে O(1) — কিন্তু খুঁজতে O(n)।",
  recall:{
    q:"মুক্তোর মালা কেন মাঝখানে একটা মুক্তো ঢোকাতে পুরো মালা ভাঙতে হয় না?",
    qen:"Why can the pearl necklace maker insert a pearl in the middle without breaking the whole necklace?",
    a:"কারণ প্রতিটা মুক্তো শুধু তার পরের মুক্তোর সুতো ধরে। মাঝে একটা যোগ করতে — আগের সুতো ছেড়ে, নতুন মুক্তোর সুতো দুই পাশে জোড়ো। Array-তে সব সরাতে হয়, linked list-এ শুধু pointer বদলাও।",
    aen:"Because each pearl holds only the thread to the next. To insert in the middle — release the previous thread, tie the new pearl to both sides. In an array everything shifts; in a linked list, only pointers change."
  },
  story:`
<p class="scene-setting">চতুর্থ দোকান। মুক্তোর মালার কারখানা। মৃদু শব্দ — সুতো গলানো, মুক্তো গাঁথা। কারিগর নুসরাত একটা লম্বা মালা ধরে আছেন — প্রতিটা মুক্তো আলাদা, কিন্তু সুতো দিয়ে যুক্ত। "টালি নির্মাতা এক সারিতে সাজায়," তিনি বললেন। "আমি গাঁথি — এক একটা, প্রতিটা পরেরটার দিকে তাকায়।"</p>
<p class="scene-setting en">The fourth shop. The pearl necklace workshop. Soft sounds — threading, stringing pearls. Craftswoman Nusrat holds a long necklace — each pearl separate, but joined by thread. "The tile maker arranges in a row," she said. "I string — one by one, each looking to the next."</p>

<div class="dialogue">টালি নির্মাতা বলেছিলেন — array, সব একসাথে মেমরিতে। কিন্তু আমি বলি — সব কি একসাথে থাকে? মাঝে ঢোকাতে হলে পুরো সারি সরাতে হয়। আমার মালায়? একটা pointer বদলাও — নতুন মুক্তো বসে গেছে। ঢোকাতে O(1), বাদ দিতে O(1)।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> নুসরাত array দিয়ে ৫০,০০০ উপাদানের chat history ম্যানেজ করতে গিয়েছিলেন। মাঝে প্রতিটা message insert করতে গিয়ে গড়ে ২৫,০০০ উপাদান সরাতে হচ্ছিল — O(n) per insert। ব্যবহারকারীর জন্য অসহনীয় lag। তারপর doubly linked list ব্যবহার করলেন — শুধু pointer বদলে O(1)-এ insert। ৫০,০০০-এ যা ৮ সেকেন্ড নিত, এখন ০.০০২ সেকেন্ড।</div></div>
<div class="dialogue en">"The tile maker said — array, all together in memory. But I say — must everything sit together? To insert in the middle, the whole row shifts. In my necklace? Change one pointer — the new pearl sits in place. Insert O(1), delete O(1)."</div>

<div class="diagram">
  <div class="diag-title">Singly Linked List — Pointer দিয়ে গাঁথা</div>
  <svg viewBox="0 0 560 140" xmlns="http://www.w3.org/2000/svg">
    ${[0,1,2,3].map(i=>`
    <rect class="node-cyan" x="${30+i*130}" y="45" width="90" height="50" rx="8"/>
    <line x1="${30+i*130+60}" y1="45" x2="${30+i*130+60}" y2="95" stroke="#36d6e7" stroke-width="1" stroke-dasharray="3,2"/>
    <text class="lbl" x="${30+i*130+30}" y="72">A${i+1}</text>
    <text class="lbl-sm" x="${30+i*130+70}" y="72" fill="#36d6e7">next</text>
    `).join('')}
    <!-- arrows between -->
    ${[0,1,2].map(i=>`
    <line class="edge-cyan" x1="${30+i*130+90}" y1="70" x2="${30+(i+1)*130}" y2="70"/>
    `).join('')}
    <!-- final next to None -->
    <line class="edge" x1="510" y1="70" x2="530" y2="70"/>
    <text class="lbl-sm" x="545" y="73">None</text>
    <text class="lbl-sm" x="30" y="32" fill="#f0c14b">head</text>
    <line class="edge-hot" x1="45" y1="35" x2="45" y2="42"/>
    <text class="lbl-sm" x="280" y="125" text-anchor="middle">insert head: নতুন node, next = পুরোনো head → O(1)</text>
  </svg>
  <div class="diag-cap">প্রতিটা node শুধু পরের node-এর ঠিকানা জানে — ধারাবাহিক মেমরি লাগে না।</div>
</div>

<div class="dialogue">কিন্তু দাম আছে। টালি নির্মাতা যেকোনো বাক্সে সরাসরি যেতে পারেন — index দিলেই, O(1)। আমি? প্রথম মুক্তো থেকে শুরু, এক এক করে পরেরটায় যেতে হয় — শততম মুক্তো চাইলে ১০০ ধাপ। O(n)। সবকিছুরই দাম আছে।</div>
<div class="dialogue en">"But there's a price. The tile maker jumps to any box directly — give an index, O(1). Me? Start from the first pearl, step to the next one by one — the 100th pearl costs 100 steps. O(n). Everything has a price."</div>

<div class="code-block">Linked List — Three Variants:

১. SINGLY LINKED LIST
   প্রতিটা node শুধু পরেরটার pointer ধরে।

   [A] → [B] → [C] → [D] → None
    head                    tail

   • insert at head: O(1) — নতুন node, তার next = পুরোনো head
   • delete at head: O(1) — head = head.next
   • search/access: O(n) — শুরু থেকে হাঁটো
   • insert at tail: O(1) যদি tail pointer রাখো, নাহলে O(n)

২. DOUBLY LINKED LIST
   প্রতিটা node দুই pointer ধরে — prev ও next।

   None ← [A] ⇄ [B] ⇄ [C] ⇄ [D] → None

   • backward traversal পাবে (সিঙ্গলিতে নেই)
   • delete কোনো node: O(1) যদি node-এর reference থাকো
   • বেশি মেমরি (প্রতিটায় ২টা pointer)
   → LRU cache, browser history, text editor undo

৩. CIRCULAR LINKED LIST
   শেষ node প্রথম node-এ ফিরে যায়।
   → round-robin scheduling, music playlist repeat

ARRAY vs LINKED LIST — কখন কোনটা?

  # ──────────────────# ─────────────# ─────────────# 
  #  Operation        #  Array       #  Linked List # 
  # ──────────────────# ─────────────# ─────────────# 
  #  access (index)   #  O(1) ✅     #  O(n) ❌     # 
  #  insert head      #  O(n) ❌     #  O(1) ✅     # 
  #  insert tail      #  O(1)* ✅    #  O(1)* ✅    # 
  #  insert middle    #  O(n)        #  O(1)**      # 
  #  search           #  O(n)        #  O(n)        # 
  #  memory overhead  #  low         #  high (ptr)  # 
  #  cache locality   #  ভালো ✅     #  খারাপ ❌    # 
  # ──────────────────# ─────────────# ─────────────# 
  * amortized / tail pointer সহ  ** node-এর reference থাকলে

WHY CACHE LOCALITY MATTERS (the hidden cost):
  Array: সব পাশাপাশি মেমরিতে → CPU cache একসাথে এক block load করে
  Linked list: node গুলো ছড়ানো → প্রতিটা cache miss → 100x ধীরে
  → তাত্ত্বিকভাবে একই complexity, বাস্তবে array প্রায় সবসময় দ্রুত
  → আধুনিক truth: array (বা Python list) দিয়ে শুরু করো।
    linked list শুধু যখন সত্যিই head/tail insert প্রধান কাজ।

WHERE AI/ML USES LINKED LISTS:
  • LRU cache (doubly linked list + hash map = O(1) eviction)
  • Deque implementation (Python collections.deque)
  • Symbolic computation graphs (chain rule-এর জন্য পিছনে হাঁটা লাগে)
  • Tensor padding / variable-length sequences (RNN time steps)</div>

<div class="dialogue">সিলসিলা — শৃঙ্খল, সংযোগ। কুরআনে আল্লাহ বলেন — "তোমরা আল্লাহর রশি দৃঢ়ভাবে ধরো, সবাই একসাথে।" (৩:১০৩)। রশি না থাকলে মুক্তো ছড়িয়ে যায় — কিন্তু সংযুক্ত থাকলে এক মালা। Linked list-ও তেমনি — প্রতিটা node একটা pointer দিয়ে যুক্ত, ভাঙলে পুরো শৃঙ্খল ছিন্ন।</div>
<div class="dialogue en">"Silsila — chain, connection. Allah says — 'Hold fast to the rope of Allah, all together.' (3:103). Without the thread, pearls scatter — but joined, they form one necklace. The linked list too — each node connected by a pointer; break one, the whole chain severs."</div>

<div class="secret-box">📿 Array = একসাথে সাজানো বাক্স। Linked list = এক একটা node, প্রতিটা পরেরটার ঠিকানা জানে। ঢোকাতে/বাদ দিতে O(1) — কিন্তু খুঁজতে O(n)।</div>`,
  senior:{
    title:"When to ACTUALLY Use a Linked List",
    body:`
    <p><strong>৯০% ক্ষেত্রে:</strong> Python list (dynamic array) ব্যবহার করো। Cache locality-তে array জিতে যায়।</p>
    <p><strong>Linked list বেছে যখন:</strong> (১) প্রধান কাজ head/tail insert/delete, (২) তুমি জানো node-এর reference (search ছাড়া delete), (৩) LRU cache বানাচ্ছ।</p>
    <p><strong>Python trick:</strong> <code>collections.deque</code> — doubly linked list of blocks, O(1) দুই পাশে। list-এর চেয়ে ভালো queue/stack।</p>
    <p><strong>Interview tip:</strong> Two-pointer technique — slow + fast pointer। Cycle detect (Floyd), middle find, kth-from-end। এটাই linked list-এর সবচেয়ে common প্যাটার্ন।</p>`
  },
  exercise:{
    hint:"একটা singly linked list বানাও — head-এ insert আর print করার ফাংশন!",
    starterCode:`# মুক্তোর মালা — Singly Linked List
# প্রতিটা node পরেরটার pointer ধরে

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None   # পরের মুক্তোর ঠিকানা

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_head(self, value):
        """head-এ নতুন node যোগ করো — O(1)"""
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

    def print_list(self):
        """পুরো মালা দেখাও"""
        current = self.head
        values = []
        while current:
            values.append(str(current.value))
            current = current.next
        print(" → ".join(values) + " → None")

    def search(self, value):
        """value আছে কি? O(n)"""
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False

# পরীক্ষা করি!
necklace = LinkedList()
for pearl in ["C", "B", "A"]:   # head-ে যোগ, তাই উল্টো হবে
    necklace.insert_head(pearl)

necklace.print_list()              # A → B → C → None
print("B আছে?", necklace.search("B"))   # True
print("Z আছে?", necklace.search("Z"))   # False

# TODO: insert_tail ফাংশন লেখো
# (শেষে যোগ করতে গেলে পুরো list হাঁটতে হবে — O(n))
`
  }
});
