// ════════════════════════════════════════
// DSA BAZAAR — DOORS 13-16
// 13. Two Pointers & Sliding Window
// 14. Greedy Algorithms
// 15. Dynamic Programming
// 16. Backtracking
// ════════════════════════════════════════

// ── DOOR 13: TWO POINTERS / SLIDING WINDOW ──
doors.push({
  num:13, icon:"📏", color:"#f06292", name:"ক্যালিগ্রাফারের মাপকাঠি",
  subtitle:"The Calligrapher's Ruler", tech:"Two Pointers & Sliding Window",
  spirit:"ইজতিমা — meeting/convergence, from Quran 62:9 (gather together)",
  secret:"দুটো pointer দিয়ে এক চলনে O(n)। Nested loop নয় — স্লাইডিং উইন্ডো।",
  recall:{
    q:"ক্যালিগ্রাফার কেন একটানা লেখেন না, একটা মাপকাঠি সরিয়ে সরিয়ে?",
    qen:"Why doesn't the calligrapher write continuously, but slides a ruler?",
    a:"কারণ মাপকাঠি একটা 'উইন্ডো' তৈরি করে — নির্দিষ্ট অংশ দেখা যায়। সরালে নতুন অংশ দেখা যায়। Two pointers = দুটো প্রান্ত, sliding window = একটা চলমান বাক্স। O(n)-এ পুরো স্ট্রিং প্রক্রিয়া করা যায়।",
    aen:"Because the ruler creates a 'window' — a specific portion is visible. Sliding reveals new portions. Two pointers = two ends, sliding window = a moving box. The whole string processed in O(n)."
  },
  story:`
<p class="scene-setting">ত্রয়োদশ দোকান। ক্যালিগ্রাফারের কামরা। কালির গন্ধ, নরম কাগজ, জানালার আলো। উস্তাদ নুর কাজ করছেন — হাতে বাঁশের কলম, সামনে একটা বিশাল কাগজে আরবি ক্যালিগ্রাফি। কিন্তু তিনি একটানা লেখেন না। একটা মাপকাঠি রাখেন, তার মধ্যে লেখেন, তারপর মাপকাঠি সরান — পরের অংশ। উইন্ডো সরে যায়, লেখা এগোয়।</p>
<p class="scene-setting en">The thirteenth shop. The Calligrapher's chamber. Smell of ink, soft paper, window light. Ustad Noor works — bamboo pen in hand, a vast sheet of Arabic calligraphy before him. But he doesn't write continuously. He places a ruler, writes within it, then slides the ruler — the next section. The window moves, the writing advances.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> নুর nested loop দিয়ে ১ লাখ উপাদানের sorted array-তে two-sum খুঁজতে গেলেন — O(n²) = ১০ বিলিয়ন তুলনা। ৮৯ সেকেন্ড। তারপর two-pointer technique — বাঁ ও ডান pointer, O(n) = মাত্র ১ লাখ ধাপ। ০.০১ সেকেন্ড। ৯,০০০ গুণ দ্রুত।</div></div>

<div class="dialogue">পাথর বিভাজক শিখিয়েছিলেন — ভাগ করো, জোড়ো। কিন্তু আমি বলি — কখনো ভাগ করতে হয় না। কখনো শুধু দুটো হাত লাগে — একটা শুরুতে, একটা শেষে। দুটো একসাথে চলে — O(n)-এ পুরো কাজ শেষ। কোনো recursion নেই, কোনো sort নেই — শুধু দুটো pointer।</div>
<div class="dialogue en">"The stone splitter taught — divide, combine. But I say — sometimes no division is needed. Sometimes just two hands — one at the start, one at the end. Both move together — the whole work done in O(n). No recursion, no sort — just two pointers."</div>

<div class="diagram">
  <div class="diag-title">Sliding Window — চলমান বাক্স</div>
  <svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg">
    ${[3,7,2,9,1,5,8,4,6,2].map((v,i)=>`
    <rect class="cell" x="${30+i*52}" y="50" width="46" height="34" rx="5"/>
    <text class="lbl-sm" x="${53+i*52}" y="70">${v}</text>
    `).join('')}
    <!-- window 1 highlight -->
    <rect x="82" y="46" width="150" height="42" rx="6" fill="none" stroke="#f06292" stroke-width="2.5" stroke-dasharray="4,3"/>
    <text class="lbl-sm" x="157" y="40" fill="#f06292">window [7,2,9]</text>
    <!-- window 2 -->
    <rect x="238" y="46" width="150" height="42" rx="6" fill="none" stroke="#f0c14b" stroke-width="2.5" stroke-dasharray="4,3"/>
    <text class="lbl-sm" x="313" y="110" fill="#f0c14b">slide → [1,5,8]</text>
    <line class="edge-hot" x1="200" y1="100" x2="240" y2="100"/>
    <text class="lbl-sm" x="280" y="140" text-anchor="middle">বাক্স সরাও — পুরোনো বেরোয় (বাঁয়ে), নতুন ঢোকে (ডানে)। প্রতিটা উপাদান একবারই ছুঁয়ে যায় → O(n)।</text>
  </svg>
</div>

<div class="dialogue">Two pointers — দুটো নির্দেশক। একটা শুরু থেকে, একটা শেষ থেকে। অথবা দুটোই শুরু থেকে, কিন্তু আলাদা গতিতে। Sorted array-তে দুটো সংখ্যা খুঁজছো যাদের যোগ = target? বাঁ প্রান্ত আর ডান প্রান্ত ধরো। ছোট? বাঁ সরাও। বড়? ডান সরাও। O(n)। Nested loop নয় — O(n²) নয়।</div>
<div class="dialogue en">"Two pointers — two indicators. One from the start, one from the end. Or both from the start, but different speeds. Finding two numbers that sum to target in a sorted array? Left end and right end. Too small? Move left. Too big? Move right. O(n). Not nested loops — not O(n²)."</div>

<div class="dialogue">Sliding window — একটা চলমান বাক্স। বাক্সের ভেতরে নির্দিষ্ট সংখ্যক উপাদান। বাক্স সরলে — পুরনো বেরোয়, নতুন ঢোকে। Text chunking-এ লাগে — একটা নির্দিষ্ট window-এ টোকেন ধরে, window সরাও। Moving average — গত ৭ দিনের গড়। প্রতিদিন window সরে — পুরনো দিন বেরোয়, নতুন ঢোকে।</div>
<div class="dialogue en">"Sliding window — a moving box. Inside the box: a fixed number of elements. Slide the box — old exits, new enters. Used in text chunking — hold tokens in a fixed window, slide. Moving average — the last 7 days' mean. Each day the window slides — old day exits, new enters."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Token chunking — বড় টেক্সটকে ছোট ছোট অংশে ভাগ করা। প্রতিটা chunk-এ overlap দেওয়া — sliding window। Streaming data — real-time আসা ডেটা প্রক্রিয়া করা। কোনো সময় পুরো ডেটা মেমোরিতে রাখা যায় না — window দিয়ে অংশে অংশে। LLM inference-এও এই ধারণা — context window সীমিত (৮k, ১২৮k টোকেন), তাই পুরোনো টোকেন "truncate" করতে হয়। কিছু model (Mistral, Longformer) সরাসরি sliding-window attention ব্যবহার করে — প্রতিটা টোকেন শুধু কাছাকাছি একটা fixed window-এর টোকেন দেখে, পুরো sequence নয় — এতে attention-এর O(n²) খরচ কমে O(n·w)-তে।</div>
<div class="dialogue en">"You're an AI engineer. Token chunking — dividing large text into smaller pieces. Overlap between chunks — sliding window. Streaming data — processing data arriving in real-time. Sometimes the whole dataset can't fit in memory — process by windows. This shows up in LLM inference too — the context window is finite (8k, 128k tokens), so old tokens must be 'truncated'. Some models (Mistral, Longformer) use sliding-window attention directly — each token attends only to a fixed nearby window, not the whole sequence — cutting attention cost from O(n²) to O(n·w)."</div>

<div class="code-block"># ── STEP 1: Two-pointer technique ──
# Two pointers move through an array from different directions.
# Reduces O(n²) brute force to O(n).

# PATTERN 1: Opposite directions (start + end)
def two_sum_sorted(arr, target):
    """Find pair that sums to target. Sorted array only."""
    left, right = 0, len(arr) - 1
    while left &lt; right:
        current = arr[left] + arr[right]
        if current == target:
            return (left, right)
        elif current &lt; target:
            left += 1    # need bigger → move right
        else:
            right -= 1   # need smaller → move left
    return None

arr = [1, 3, 5, 7, 9, 11]
print(two_sum_sorted(arr, 14))  # (1, 5) → 3 + 11 = 14
# O(n) instead of O(n²) brute force!

# PATTERN 2: Same direction (fast + slow)
def remove_duplicates(arr):
    """Remove duplicates in-place using two pointers."""
    if not arr:
        return 0
    slow = 0  # position for next unique element
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    return slow + 1

arr = [1, 1, 2, 2, 3, 4, 4, 5]
length = remove_duplicates(arr)
print(arr[:length])  # [1, 2, 3, 4, 5]</div>

<div class="code-block"># ── STEP 2: Sliding window — fixed size ──
# A "window" of fixed size slides across the array.
# Don't recompute from scratch — update incrementally.

# Maximum sum of k consecutive elements:
def max_subarray_sum(arr, k):
    """Find max sum of any k consecutive elements — O(n)."""
    # Initial window:
    window_sum = sum(arr[:k])
    max_sum = window_sum

    # Slide the window:
    for i in range(k, len(arr)):
        # Add new element, remove old element
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)

    return max_sum

arr = [2, 1, 5, 1, 3, 2]
print(max_subarray_sum(arr, 3))  # 9 (5+1+3)

# Without sliding window: O(n*k) — recalculate each time
# With sliding window: O(n) — each element visited twice max

# Moving average using sliding window:
def moving_average(arr, k):
    """Calculate moving average with window k."""
    result = []
    window_sum = sum(arr[:k])
    result.append(window_sum / k)

    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        result.append(window_sum / k)

    return result

print(moving_average([1, 2, 3, 4, 5], 3))
# [2.0, 3.0, 4.0]</div>

<div class="code-block"># ── STEP 3: Sliding window — variable size ──
# Window grows/shrinks based on conditions.

# Longest substring without repeating characters:
def longest_unique_substring(s):
    """Find length of longest substring with all unique chars."""
    seen = {}  # char → last index
    left = 0
    max_len = 0

    for right, char in enumerate(s):
        if char in seen and seen[char] &gt;= left:
            left = seen[char] + 1  # shrink from left
        seen[char] = right
        max_len = max(max_len, right - left + 1)

    return max_len

print(longest_unique_substring("abcabcbb"))  # 3 ("abc")
print(longest_unique_substring("bbbbb"))     # 1 ("b")

# Minimum window substring (harder):
def min_window(s, t):
    """Find smallest substring of s containing all chars of t."""
    from collections import Counter
    need = Counter(t)
    missing = len(t)
    left = start = end = 0

    for right, char in enumerate(s, 1):
        if need[char] &gt; 0:
            missing -= 1
        need[char] -= 1

        if missing == 0:  # found valid window
            while left &lt; right and need[s[left]] &lt; 0:
                need[s[left]] += 1
                left += 1
            if end == 0 or right - left &lt; end - start:
                start, end = left, right
            need[s[left]] += 1
            missing += 1
            left += 1

    return s[start:end]

print(min_window("ADOBECODEBANC", "ABC"))  # "BANC"</div>

<div class="code-block"># ── STEP 4: Real-world sliding window — text chunking ──
# In RAG (Retrieval Augmented Generation), we chunk text
# with OVERLAP so context isn't lost at boundaries.

def chunk_text(text, chunk_size=100, overlap=20):
    """Split text into overlapping chunks for RAG."""
    words = text.split()
    chunks = []

    start = 0
    while start &lt; len(words):
        end = start + chunk_size
        chunk = " ".join(words[start:end])
        chunks.append(chunk)
        start += chunk_size - overlap  # overlap by 20 words

    return chunks

text = " ".join(["word"] * 250)  # 250 words
chunks = chunk_text(text, chunk_size=100, overlap=20)
print(f"Chunks: {len(chunks)}")  # 3 chunks
# Chunk 1: words 0-99
# Chunk 2: words 80-179 (20 word overlap with chunk 1)
# Chunk 3: words 160-249 (20 word overlap with chunk 2)

# The overlap ensures that a sentence spanning a chunk boundary
# appears in BOTH chunks — the embedding captures it fully.</div>

<div class="code-block"># ── STEP 5: Three pointers and fast/slow ──
# Floyd's cycle detection (tortoise and hare):
def has_cycle(head):
    """Detect cycle in linked list using fast/slow pointers."""
    slow = fast = head
    while fast and fast.next:
        slow = slow.next          # moves 1 step
        fast = fast.next.next     # moves 2 steps
        if slow == fast:
            return True           # they meet = cycle!
    return False

# Three-way partition (Dutch national flag):
def sort_colors(nums):
    """Sort 0s, 1s, 2s in-place — three pointers."""
    low, mid, high = 0, 0, len(nums) - 1
    while mid &lt;= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1

nums = [2, 0, 1, 2, 0, 1]
sort_colors(nums)
print(nums)  # [0, 0, 1, 1, 2, 2]</div>

<div class="code-block"># ── STEP 6: Pattern recognition guide ──
# How to spot when to use two pointers or sliding window:

# TWO POINTERS (opposite ends):
# ✅ Sorted array + find pair/triplet
# ✅ Palindrome check
# ✅ Container with most water
# Signal: "sorted" + "pair" → think two pointers

# TWO POINTERS (same direction):
# ✅ Remove duplicates
# ✅ Remove element
# ✅ Move zeros to end
# Signal: "in-place" + "modify array" → think fast/slow

# SLIDING WINDOW (fixed):
# ✅ Max/min sum of k consecutive
# ✅ Moving average
# ✅ Contains specific pattern of length k
# Signal: "consecutive" + "k elements" → fixed window

# SLIDING WINDOW (variable):
# ✅ Longest substring without repeat
# ✅ Minimum window substring
# ✅ Longest subarray with sum ≤ K
# Signal: "longest/shortest" + "contiguous" + "condition"

# TEMPLATE for sliding window:
# def sliding_window(s):
#     left = 0
#     for right in range(len(s)):
#         # expand: add s[right]
#         while window_invalid:
#             # shrink: remove s[left]
#             left += 1
#         # update answer

# COMPLEXITY:
# Two pointers: O(n) time, O(1) space
# Sliding window: O(n) time (each element visited 2x max)</div>

<div class="dialogue">তাদাব্বুর — গভীর চিন্তা। কুরআনে আল্লাহ বারবার বলেছেন — "চিন্তা করো না?" (৪৭:২৪)। তাদাব্বুর মানে একটা অংশে থামা, গভীরে যাওয়া, তারপর পরের অংশে। Sliding window-এর মতো — একটা অংশ দেখো, বুঝো, তারপর সরাও। পুরো কুরআন একবারে নয় — অংশে অংশে। প্রতিটা অংশে থামো, চিন্তা করো, তারপর এগোও।</div>
<div class="dialogue en">"Tadabbur — deep contemplation. Allah repeatedly says in the Quran — 'Will you not reflect?' (47:24). Tadabbur means pausing at a portion, going deep, then moving to the next. Like a sliding window — see a section, understand, then slide. Not the whole Quran at once — portion by portion. Pause at each, reflect, then advance."</div>

<div class="secret-box">📏 দুটো pointer দিয়ে এক চলনে O(n)। Nested loop নয় — স্লাইডিং উইন্ডো।</div>`,
  senior:{
    title:"Two Pointers চেনার উপায়",
    body:`
    <p><strong>লক্ষণ ১:</strong> Sorted array + pair/triplet খুঁজছো → Two pointers (start + end)।</p>
    <p><strong>লক্ষণ ২:</strong> Contiguous subarray/substring নিয়ে কাজ → Sliding window।</p>
    <p><strong>লক্ষণ ৩:</strong> "Fast and slow" — cycle detection, middle of linked list → দুটো pointer আলাদা গতিতে।</p>
    <p><strong>Senior trap:</strong> Nested loop দেখলে থামো। কি two pointers দিয়ে O(n) করা যায়? এটাই সিনিয়র চিন্তার পার্থক্য — brute force নয়, efficient pattern।</p>`
  },
  exercise:{
    hint:"Sliding window দিয়ে text chunking — RAG-এর মতো!",
    starterCode:`# ক্যালিগ্রাফারের মাপকাঠি — Sliding Window
def chunk_text(text, chunk_size=5, overlap=2):
    """টেক্সটকে overlapping chunks-এ ভাগ করি"""
    words = text.split()
    chunks = []
    start = 0
    while start < len(words):
        end = start + chunk_size
        chunk = ' '.join(words[start:end])
        chunks.append(chunk)
        step = chunk_size - overlap
        if step <= 0:
            step = 1
        start += step
    return chunks

sample_text = """
Artificial intelligence transforms how we build software.
Engineers must understand data structures algorithms and system design.
RAG combines retrieval and generation for accurate answers.
""".strip()

chunks = chunk_text(sample_text, chunk_size=6, overlap=2)
print(f"মোট {len(chunks)} chunk:")
for i, chunk in enumerate(chunks):
    print(f"Chunk {i+1}: \"{chunk}\"")
    print()

# BONUS: Two pointer — sorted array-তে target sum
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current = arr[left] + arr[right]
        if current == target:
            return (left, right)
        elif current < target:
            left += 1
        else:
            right -= 1
    return None

print(f"two_sum_sorted([1,3,5,7,9,11,13], 16) = {two_sum_sorted([1,3,5,7,9,11,13], 16)}")
`
  }
});

// ── DOOR 14: GREEDY ALGORITHMS ──
doors.push({
  num:14, icon:"🧣", color:"#e91e63", name:"রেশম ব্যবসায়ীর ক্যারাভান",
  subtitle:"The Silk Merchant's Caravan", tech:"Greedy Algorithms",
  spirit:"খায়রান — choosing the best, from Quran 33:6 (preferring what is higher)",
  secret:"Greedy = প্রতিটা ধাপে সেরা স্থানীয় পছন্দ। সহজ, দ্রুত — কিন্তু সবসময় সর্বোত্তম নয়। কখন কাজ করে? optimal substructure + greedy choice property।",
  recall:{
    q:"রেশম ব্যবসায়ী কেন প্রতিটা শহরে সেরা চুক্তিই করেন, পুরো যাত্রার পরিকল্পনা নয়?",
    qen:"Why does the silk merchant take the best deal at each city, not plan the whole journey?",
    a:"কারণ কিছু সমস্যায় প্রতিটা স্থানীয় সেরা পছন্দ একসাথে সার্বজনীন সেরা দেয়। একে greedy বলে। কিন্তু সব সমস্যায় নয় — কখনো স্থানীয় সেরা সার্বজনীন খারাপ দেয়। কখন কাজ করে সেটাই জ্ঞান।",
    aen:"Because in some problems, the best local choice at each step yields the global best. This is greedy. But not all problems — sometimes local best gives global worst. Knowing when is the skill."
  },
  story:`
<p class="scene-setting">চতুর্দশ দোকান। রেশম ব্যবসায়ীর ক্যারাভান। রেশমের চকচকে গাঁথুনি, দূর শহরের সুবাস, উটের ঘণ্টা। হাজি করিম দাঁড়িয়ে আছেন — পাশে মানচিত্র, সামনে পাঁচটা শহরের চুক্তির খাতা। তিনি পুরো যাত্রা পরিকল্পনা করেন না। প্রতিটা শহরে যা সেরা মনে হয়, তাই করেন। "কিছু বাজারে," তিনি বলেন, "প্রতিটা স্থানীয় সেরা পুরো যাত্রাকে সেরা বানায়। কিন্তু সব বাজারে নয়। সেই পার্থক্য জানাই কারিগরি।"</p>
<p class="scene-setting en">The fourteenth shop. The silk merchant's caravan. Shimmer of silk, scent of distant cities, bells of camels. Haji Karim stands — a map beside him, ledger of deals with five cities. He doesn't plan the whole journey. At each city, he does what seems best. 'In some markets,' he says, 'the best local choice makes the whole journey best. But not all markets. Knowing that difference is the craft.'</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> করিম প্রথমে greedy দিয়ে coin change সমাধান করতে গেলেন — coins [1, 3, 4], target 6। Greedy: 4+1+1 = ৩ coins। কিন্তু optimal: 3+3 = ২ coins! Greedy ভুল। করিম শিখলেন — greedy সবসময় optimal নয়। কখন DP দরকার — সেই চেনা দরকার।</div></div>

<div class="dialogue">ক্যালিগ্রাফার শিখিয়েছিলেন — দুটো হাতে এক চলনে। কিন্তু আমি বলি — কখনো এক হাতেই সিদ্ধান্ত। প্রতিটা ধাপে যা এখন সেরা, তাই বেছো। পেছনের দিকে না ভাবো, সামনের পুরো পথ না ভাবো — শুধু এই মুহূর্তের সেরা। একে greedy বলে। সহজ, দ্রুত, স্থানীয়।</div>
<div class="dialogue en">"The calligrapher taught — two hands in one pass. But I say — sometimes one hand decides. At each step, choose what's best right now. Don't think back, don't think of the whole path ahead — just this moment's best. This is greedy. Simple, fast, local."</div>

<div class="diagram">
  <div class="diag-title">Activity Selection — Greedy কাজ করে যখন</div>
  <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
    <text class="lbl-sm" x="20" y="20" fill="#f0c14b">সময়রেখা →  কাজগুলো শেষের সময় অনুযায়ী সাজাও, প্রতিটা বেছো যা আগে শেষ</text>
    ${[ [1,3],[2,5],[4,6],[6,7],[5,9],[8,10] ].map((a,i)=>`
    <rect class="cell" x="${30+a[0]*40}" y="${45+i*22}" width="${(a[1]-a[0])*40}" height="16" rx="3"/>
    <text class="lbl-sm" x="${35+a[0]*40}" y="${56+i*22}">কাজ${i+1} [${a[0]}-${a[1]}]</text>
    `).join('')}
    <!-- greedy picks highlighted: (1,3),(4,6),(6,7),(8,10) — earliest-finish-first selection -->
    <rect x="68" y="43" width="84" height="20" rx="3" fill="none" stroke="#52c41a" stroke-width="2.5"/>
    <rect x="188" y="87" width="84" height="20" rx="3" fill="none" stroke="#52c41a" stroke-width="2.5"/>
    <rect x="268" y="109" width="44" height="20" rx="3" fill="none" stroke="#52c41a" stroke-width="2.5"/>
    <rect x="348" y="153" width="84" height="20" rx="3" fill="none" stroke="#52c41a" stroke-width="2.5"/>
    <text class="lbl-sm" x="450" y="100" fill="#52c41a">✓ greedy: ৪ কাজ</text>
    <text class="lbl-sm" x="280" y="185" text-anchor="middle">প্রতিটা ধাপে "যেটা আগে শেষ" বেছো → সর্বোচ্চ কাজ। (Greedy = optimal এই সমস্যায়।)</text>
  </svg>
</div>

<div class="dialogue">কিন্তু সাবধান — greedy সবসময় কাজ করে না। মুদ্রা সমস্যা ভাবো। তুমি ৪০ টাকা দিতে চাও, মুদ্রা [২৫, ১০, ৫, ১]। Greedy: ২৫ + ১০ + ৫ ✓। কিন্তু মুদ্রা যদি [২৫, ২৪, ১] হয়, আর তুমি ৪৮ দিতে চাও? Greedy: ২৫ + ২৩টা ১ = ২৪টা মুদ্রা। সর্বোত্তম: ২টা ২৪ = ২টা মুদ্রা। Greedy হেরে গেছে। কবে কাজ করে কবে নয় — সেটাই জ্ঞান।</div>
<div class="dialogue en">"But beware — greedy doesn't always work. Consider the coin problem. You want to make 40, coins [25,10,5,1]. Greedy: 25+10+5 ✓. But if coins are [25,24,1], and you want 48? Greedy: 25 + 23 ones = 24 coins. Optimal: 2 twenty-fours = 2 coins. Greedy lost. When it works and when it doesn't — that's the knowledge."</div>

<div class="code-block"># ── STEP 1: What is greedy? ──
# Greedy = at each step, pick the LOCALLY BEST option.
# No backtracking, no reconsidering. Fast, but not always optimal.

# COIN CHANGE (greedy approach):
def greedy_coin_change(amount, coins):
    """Pick largest coin first. Works for standard coin sets."""
    coins = sorted(coins, reverse=True)
    result = []
    for coin in coins:
        while amount &gt;= coin:
            result.append(coin)
            amount -= coin
    return result if amount == 0 else None

# US coins: 25, 10, 5, 1
print(greedy_coin_change(67, [25, 10, 5, 1]))
# [25, 25, 10, 5, 1, 1] — optimal!

# BUT greedy CAN FAIL with weird coin sets:
# coins = [1, 3, 4], amount = 6
# Greedy: 4 + 1 + 1 = 3 coins
# Optimal: 3 + 3 = 2 coins!
# This is when you need Dynamic Programming instead.</div>

<div class="code-block"># ── STEP 2: Activity selection ──
# Classic greedy: schedule maximum non-overlapping activities.

def activity_selection(activities):
    """
    Select max non-overlapping activities.
    activities = [(start, end), ...]
    Greedy: pick activity that ENDS earliest.
    """
    # Sort by end time
    activities.sort(key=lambda x: x[1])

    selected = [activities[0]]
    for start, end in activities[1:]:
        if start &gt;= selected[-1][1]:  # starts after last selected ends
            selected.append((start, end))

    return selected

activities = [(1, 3), (2, 5), (3, 6), (6, 7), (5, 8)]
result = activity_selection(activities)
print(result)  # [(1, 3), (3, 6), (6, 7)] — 3 activities
# PROVEN OPTIMAL — greedy works here!</div>

<div class="code-block"># ── STEP 3: Huffman coding ──
# Compress data by giving frequent chars SHORT codes.
# This is how gzip, JPEG, MP3 compression work.

import heapq
from collections import Counter

class HuffmanNode:
    def __init__(self, char=None, freq=0):
        self.char = char
        self.freq = freq
        self.left = self.right = None

def build_huffman_tree(text):
    """Build Huffman tree for compression."""
    freq = Counter(text)
    heap = []
    for char, count in freq.items():
        heapq.heappush(heap, (count, id(HuffmanNode(char, count)), HuffmanNode(char, count)))

    while len(heap) &gt; 1:
        f1, _, left = heapq.heappop(heap)
        f2, _, right = heapq.heappop(heap)
        merged = HuffmanNode(freq=f1 + f2)
        merged.left = left
        merged.right = right
        heapq.heappush(heap, (merged.freq, id(merged), merged))

    return heap[0][2] if heap else None

# Build codes from tree:
def build_codes(root, prefix="", codes=None):
    if codes is None:
        codes = {}
    if root:
        if root.char:
            codes[root.char] = prefix
        build_codes(root.left, prefix + "0", codes)
        build_codes(root.right, prefix + "1", codes)
    return codes

# Usage:
text = "aaabbc"
tree = build_huffman_tree(text)
codes = build_codes(tree)
print(codes)
# {'a': '0', 'b': '10', 'c': '110'} (frequent chars get shorter codes)</div>

<div class="code-block"># ── STEP 4: Greedy vs DP — the key difference ──
# GREEDY: make ONE choice, never reconsider
# DP: try ALL choices, remember the best

# Fractional Knapsack (greedy works):
def fractional_knapsack(capacity, items):
    """Can take FRACTIONS of items. Greedy = optimal."""
    # items = [(value, weight), ...]
    items.sort(key=lambda x: x[0]/x[1], reverse=True)
    total_value = 0
    for value, weight in items:
        if capacity &gt;= weight:
            total_value += value
            capacity -= weight
        else:
            total_value += value * (capacity / weight)
            break
    return total_value

print(fractional_knapsack(50, [(60, 10), (100, 20), (120, 30)]))
# 240.0 — take all of item 1+2, and 2/3 of item 3

# 0/1 Knapsack (greedy FAILS, need DP):
def knapsack_01(capacity, weights, values, n):
    """Cannot take fractions. Must use DP."""
    if n == 0 or capacity == 0:
        return 0
    if weights[n-1] &gt; capacity:
        return knapsack_01(capacity, weights, values, n-1)
    else:
        take = values[n-1] + knapsack_01(capacity - weights[n-1], weights, values, n-1)
        skip = knapsack_01(capacity, weights, values, n-1)
        return max(take, skip)

print(knapsack_01(50, [10, 20, 30], [60, 100, 120], 3))
# 220 — take items 2+3 (DP finds the optimal)</div>

<div class="code-block"># ── STEP 5: When greedy is proven optimal ──
# Greedy works when these two properties hold:

# 1. GREEDY CHOICE PROPERTY:
#    A locally optimal choice is part of the globally optimal solution.

# 2. OPTIMAL SUBSTRUCTURE:
#    The optimal solution to the problem contains
#    optimal solutions to sub-problems.

# PROVEN GREEDY ALGORITHMS:
# ✅ Activity selection (earliest finish time)
# ✅ Huffman coding (merge least frequent)
# ✅ Dijkstra (shortest path, non-negative weights)
# ✅ Kruskal/Prim MST (cheapest edge first)
# ✅ Fractional knapsack (best value/weight ratio)

# GREEDY FAILS ON:
# ❌ 0/1 knapsack (can't take fractions)
# ❌ Coin change with weird denominations
# ❌ Traveling salesman (local ≠ global optimum)
# ❌ Longest path (local choices can mislead)

# HOW TO TEST: brute force small inputs, compare with greedy:
def test_greedy():
    """Verify greedy gives same result as brute force."""
    for amount in range(1, 20):
        greedy_result = greedy_coin_change(amount, [1, 3, 4])
        # Compare with DP optimal...
        if greedy_result and len(greedy_result) != optimal:
            print(f"Greedy fails at {amount}!")</div>

<div class="code-block"># ── STEP 6: Greedy in real systems ──
# Greedy algorithms power many production systems:

# 1. LLM TOKEN GENERATION (greedy decoding):
#   At each step, pick the token with highest probability.
#   Fast but may miss globally better sequences.
#   (Beam search improves this by keeping k candidates)

# 2. CPU SCHEDULING:
#   Shortest Job First (SJF) — greedy, minimizes average wait time

# 3. NETWORK ROUTING:
#   Dijkstra/BGP — shortest path by picking nearest unvisited

# 4. DATA COMPRESSION:
#   Huffman coding — merge least frequent nodes first

# 5. RAG (Retrieval):
#   Top-k retrieval — pick the k most similar documents
#   (greedy selection by relevance score)

# 6. CLUSTERING SEEDING:
#   K-means++ — greedily pick farthest points as initial centroids

# DECISION GUIDE:
# ┌─────────────────────┬──────────────┬────────────────┐
# │ If...               │ Use          │ Example        │
# ├─────────────────────┼──────────────┼────────────────┤
# │ Local best = global │ Greedy       │ Activity sel.  │
# │ Need to try all     │ DP           │ 0/1 knapsack   │
# │ Can take fractions  │ Greedy       │ Frac. knapsack │
# │ Need exact sequence │ Backtracking │ Permutations   │
# └─────────────────────┴──────────────┴────────────────┘

# SUMMARY:
# Greedy: O(n log n) — sort + one pass
# DP: O(n²) or O(n*W) — remember all sub-problems
# When in doubt: brute force small cases, compare!</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Greedy লুকিয়ে আছে সবখানে। LLM token generation-এ greedy decoding — প্রতিটা ধাপে সবচেয়ে সম্ভাব্য পরবর্তী টোকেন বেছো (logits-এর argmax)। দ্রুত, কিন্তু local optimum — পুরো বাক্যের সেরা সম্ভাবনা মিস হতে পারে। তাই beam search — একসাথে কয়েকটা candidate path সমান্তরাল রাখো, শেষে সেরাটা বেছো। Beam search আসলে "বহু-পথ greedy" — pure greedy আর brute-force search-এর মাঝামাঝি। Huffman — embedding বা টোকেন compression। Dijkstra — knowledge graph-এ সবচেয়ে সম্পর্কিত পথ। Top-k greedy — RAG-এ সেরা k doc বেছো। Clustering seeding — প্রতিটা ধাপে সবচেয়ে দূরের point বেছো। সহজ, দ্রুত, এবং প্রায়ই "যথেষ্ট ভালো"।</div>
<div class="dialogue en">"You're an AI engineer. Greedy hides everywhere. LLM token generation uses greedy decoding — pick the most probable next token at each step (argmax of logits). Fast, but a local optimum — the best full-sentence probability can be missed. So beam search — keep several candidate paths in parallel, pick the best at the end. Beam search is really 'multi-path greedy' — a middle ground between pure greedy and brute-force search. Huffman — embedding or token compression. Dijkstra — most related path in knowledge graphs. Top-k greedy — pick the best k docs in RAG. Clustering seeding — at each step pick the farthest point. Simple, fast, and often 'good enough'."</div>

<div class="dialogue">সাʿআহ — মুহূর্ত, সুযোগ। কুরআনে আল্লাহ বলেন — "তোমাদের কাছে যা আছে তা শেষ হয়ে যাবে, আর আল্লাহর কাছে যা আছে তা স্থায়ী।" (১৬:৯৬)। কিন্তু সাথে সাথে সতর্কতা — আল্লাহ তাড়াহুড়ো পছন্দ করেন না (৮৭:১৯ এর প্রেক্ষিতে, "তাড়াহুড়ো শয়তানের কাজ")। Greedy হলো সাʿআহ-এর ছায়া — মুহূর্তের সেরা ধরো। কিন্তু অন্ধ তাড়া নয় — প্রথমে জানো, এই সমস্যায় কি স্থানীয় সেরা সার্বজনীন সেরা দেয়?</div>
<div class="dialogue en">"Saʿah — moment, opportunity. Allah says — 'What you have runs out, what is with Allah remains.' (16:96). But also caution — haste is not loved (the saying goes, 'haste is from Satan'). Greedy is the shadow of saʿah — seize the moment's best. But not blind haste — first know, does this problem reward local best with global best?"</div>

<div class="secret-box">🧣 Greedy = প্রতিটা ধাপে সেরা স্থানীয় পছন্দ। সহজ, দ্রুত — কিন্তু সবসময় সর্বোত্তম নয়।</div>`,
  senior:{
    title:"Greedy চেনার দুটো প্রমাণযোগ্য শর্ত",
    body:`
    <p>Greedy তখনই সর্বোত্তম যখন দুটো বৈশিষ্ট্য থাকে:</p>
    <p><strong>১. Greedy choice property:</strong> স্থানীয় সেরা পছন্দ সার্বজনীন সেরা সমাধানের অংশ। অর্থাৎ পেছনে ফিরে বদলানোর দরকার নেই।</p>
    <p><strong>২. Optimal substructure:</strong> বড় সমস্যার সর্বোত্তম সমাধান ছোট সমস্যার সর্বোত্তম সমাধান ধারণ করে। (এটা DP-র সাথে শেয়ার্ড।)</p>
    <p><strong>Senior test:</strong> সন্দেহ হলে — ছোট ইনপুট brute-force করে greedy ফল তুলনা করো। মিললে সম্ভবত ঠিক। না মিললে DP লাগে।</p>
    <p><strong>Common trap:</strong> "Sort + greedy" সবসময় কাজ করে না। কোন ক্রমে সাজাবে সেটাই মূল। activity selection — শেষের সময় অনুযায়ী। job scheduling — deadline অনুযায়ী।</p>`
  },
  exercise:{
    hint:"Greedy coin change লেখো — তারপর এমন ইনপুট খুঁজো যেখানে greedy হেরে যায়!",
    starterCode:`# রেশম ব্যবসায়ীর ক্যারাভান — Greedy Coin Change
def greedy_coin_change(amount, coins):
    """প্রতিটা ধাপে সবচেয়ে বড় মুদ্রা বেছো।
    কিছু মুদ্রা-সেটে optimal, কিছুতে নয়!"""
    coins = sorted(coins, reverse=True)
    result = []
    for coin in coins:
        while amount >= coin:
            result.append(coin)
            amount -= coin
    return result if amount == 0 else None

# মার্কিন মুদ্রা — greedy optimal
print("৪০ সেন্ট:", greedy_coin_change(40, [25, 10, 5, 1]))
# → [25, 10, 5] (৩টা মুদ্রা — সর্বোত্তম)

# বিজোড় মুদ্রা — greedy হেরে যায়!
print("৪৮ টাকা [25,24,1] দিয়ে:", greedy_coin_change(48, [25, 24, 1]))
# → [25, 1, 1, 1, ...(২৩টা 1)] = ২৪টা মুদ্রা
# কিন্তু সর্বোত্তম: [24, 24] = মাত্র ২টা!

print("\n🎯 শিক্ষা: greedy সবসময় optimal নয়। কখন DP (Door 15) লাগে বুঝতে হবে।")

# BONUS: Activity selection (greedy optimal এখানে!)
def activity_selection(activities):
    """activities = [(start, end), ...]. সর্বোচ্চ কাজ বেছো।"""
    activities = sorted(activities, key=lambda x: x[1])  # end time
    selected = []
    last_end = 0
    for start, end in activities:
        if start >= last_end:
            selected.append((start, end))
            last_end = end
    return selected

acts = [(1,3),(2,5),(4,6),(6,7),(5,9),(8,10)]
print("\nActivity selection:", activity_selection(acts))
`
  }
});

// ── DOOR 15: DYNAMIC PROGRAMMING ──
doors.push({
  num:15, icon:"🌱", color:"#52c41a", name:"মালির ধাপ",
  subtitle:"The Gardener's Terraces", tech:"Dynamic Programming",
  spirit:"লাইফ — layered building, from Quran 24:29 (layers of understanding unfold)",
  secret:"DP = overlapping subproblems + optimal substructure। ছোট সমস্যা সমাধান করো, মনে রাখো, বড়টা বানাও। Greedy-র যমজ — কিন্তু মনে রাখে।",
  recall:{
    q:"মালি কেন প্রতিটা ধাপে নতুন করে বীজ বোনেন না, আগের ফসল ব্যবহার করেন?",
    qen:"Why doesn't the gardener plant new seeds each terrace, but uses previous harvest?",
    a:"কারণ প্রতিটা ধাপের ফসল আগের ধাপের উপর নির্ভর করে। আগের ফল মনে রাখলে (memoize) বারবার কাজ করতে হয় না। DP = স্মৃতি দিয়ে দক্ষতা।",
    aen:"Because each terrace's harvest depends on the previous. If you remember previous results (memoize), you don't repeat work. DP = efficiency through memory."
  },
  story:`
<p class="scene-setting">পঞ্চদশ দোকান। পাহাড়ের ঢালে ধাপে ধাপে বাগান — terrace farming। মাটির গন্ধ, সেচের শব্দ, সবুজের স্তর। মালি বশির কাজ করছেন — বয়স্ক, পিঠ বাঁকা, কিন্তু প্রতিটা ধাপে নিখুঁত। তাঁর বাগান একটা সিঁড়ির মতো — প্রতিটা ধাপ আগের ধাপের উপর ভর করে দাঁড়িয়ে। উপরের ফসল নিচের ফসলের উপর নির্ভরশীল।</p>
<p class="scene-setting en">The fifteenth shop. Terraced gardens on a hillside — terrace farming. Smell of soil, sound of irrigation, layers of green. Mali Bashir works — elderly, back bent, but precise at every step. His garden is like a staircase — each terrace rests on the one below. The upper harvest depends on the lower.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> বশির প্রথমে naive recursion দিয়ে Fibonacci(35) গণনা করতে গেলেন। ২৯ মিলিয়ন কল! ৫৮ সেকেন্ড। তারপর memoization যোগ করলেন — প্রতিটা সংখ্যা একবারই গণনা। ৩৫ কল। ০.০০১ সেকেন্ড। ৫৮,০০০ গুণ দ্রুত। এটাই DP-র ক্ষমতা।</div></div>

<div class="dialogue">রেশম ব্যবসায়ী শিখিয়েছিলেন — প্রতিটা ধাপে সেরা বেছো। কিন্তু আমি বলি — কখনো সেরা বেছে যথেষ্ট নয়। কখনো একই ছোট সমস্যা বারবার আসে। আর প্রতিটা ধাপের উত্তর আগের ধাপের উপর দাঁড়ায়। তখন মনে রাখা দরকার — নাহলে বারবার একই কাজ। এটাই Dynamic Programming।</div>
<div class="dialogue en">"The silk merchant taught — pick the best at each step. But I say — sometimes picking the best isn't enough. Sometimes the same small problem recurs. And each step's answer stands on the previous. Then memory is needed — or the same work repeats. This is Dynamic Programming."</div>

<div class="dialogue">ফাইবোনাচ্চি সংখ্যা জানো? ১, ১, ২, ৩, ৫, ৮, ১৩... প্রতিটা সংখ্যা আগের দুটোর যোগফল। সাধারণ recursion-এ (Door 2) একই সংখ্যা বারবার গণনা হয় — O(2ⁿ)। কিন্তু যদি মনে রাখো? প্রতিটা একবারই গণনা — O(n)। এটাই memoization। মনে রাখা = সময় বাঁচানো।</div>
<div class="dialogue en">"You know Fibonacci numbers? 1, 1, 2, 3, 5, 8, 13... Each is the sum of the previous two. Naive recursion (Door 2) recalculates the same numbers — O(2ⁿ). But if you remember? Each computed once — O(n). This is memoization. Remembering = saving time."</div>

<div class="diagram">
  <div class="diag-title">DP Table — Fibonacci, ছোট থেকে বড়</div>
  <svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg">
    ${[0,1,1,2,3,5,8,13,21,34].map((v,i)=>`
    <rect class="${i<2?'node-leaf':'cell-good'}" x="${30+i*52}" y="40" width="46" height="40" rx="5" style="${i>=2?'fill:rgba(82,196,26,.2);stroke:#52c41a':''}"/>
    <text class="lbl-sm" x="${53+i*52}" y="55">fib(${i})</text>
    <text class="lbl" x="${53+i*52}" y="72" style="font-size:13px">${v}</text>
    `).join('')}
    <text class="lbl-sm" x="53" y="105" text-anchor="start" fill="#9a93b8">বাঁ থেকে ডান →</text>
    <text class="lbl-sm" x="280" y="105" text-anchor="middle" fill="#52c41a">প্রতিটা আগের দুটোর যোগ = O(n), একবারই গণনা</text>
    <text class="lbl-sm" x="280" y="128" text-anchor="middle">নেওয়া-রূপ (top-down recursion + cache) বা দেওয়া-রূপ (bottom-up table) — দুটোই DP।</text>
  </svg>
</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Edit distance — দুটো শব্দ কতটা আলাদা? DP দিয়ে গণনা। এটা fuzzy matching-এ লাগে — ইউজার "recieve" লিখলে "receive" সাজেস্ট করো। Viterbi algorithm — HMM-এ সবচেয়ে সম্ভাব্য অনুক্রম খোঁজা, DP-ই। Reinforcement learning-এ value iteration — DP। Agent memoization — আগের সিদ্ধান্ত মনে রেখে নতুন সিদ্ধান্ত।</div>
<div class="dialogue en">"You're an AI engineer. Edit distance — how different are two words? Computed with DP. This is used in fuzzy matching — user types 'recieve', suggest 'receive'. Viterbi algorithm — finding the most likely sequence in HMMs, that's DP. Value iteration in RL — DP. Agent memoization — remembering past decisions for new ones."</div>

<div class="code-block"># ── STEP 1: What is Dynamic Programming? ──
# DP = solve each sub-problem ONCE, remember the answer.
# Two requirements:
# 1. Overlapping sub-problems (same sub-problem repeats)
# 2. Optimal substructure (big answer = combination of small answers)

# FIBONACCI — the classic DP example:

# Naive recursion: O(2^n) — same values recalculated!
def fib_naive(n):
    if n &lt;= 1:
        return n
    return fib_naive(n - 1) + fib_naive(n - 2)

# fib_naive(35) takes ~3 seconds. fib_naive(50) = impossible.
# Why? fib(5) calls fib(4)+fib(3), fib(4) calls fib(3)+fib(2)...
# fib(3) is calculated REPEATEDLY!

# MEMOIZATION (top-down): O(n) — cache results!
def fib_memo(n, cache=None):
    if cache is None:
        cache = {}
    if n in cache:
        return cache[n]
    if n &lt;= 1:
        return n
    cache[n] = fib_memo(n - 1, cache) + fib_memo(n - 2, cache)
    return cache[n]

print(fib_memo(100))  # 354224848179261915075 — instant!

# Or use functools.lru_cache:
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_cached(n):
    if n &lt;= 1:
        return n
    return fib_cached(n - 1) + fib_cached(n - 2)

print(fib_cached(100))  # instant!</div>

<div class="code-block"># ── STEP 2: Bottom-up DP (tabulation) ──
# Instead of recursion + cache, build UP from base cases.

# Bottom-up Fibonacci: O(n) time, O(n) space
def fib_bottom_up(n):
    """Build from 0 upward."""
    if n &lt;= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

print(fib_bottom_up(10))  # 55

# Space-optimized: O(1) space
def fib_optimized(n):
    """Only keep last two values."""
    if n &lt;= 1:
        return n
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr

print(fib_optimized(100))  # 354224848179261915075

# TOP-DOWN vs BOTTOM-UP:
# ┌──────────────┬──────────────────┬──────────────────┐
# │ Aspect       │ Memoization      │ Tabulation       │
# ├──────────────┼──────────────────┼──────────────────┤
# │ Direction    │ Top-down         │ Bottom-up        │
# │ Approach     │ Recursive        │ Iterative        │
# │ Space        │ O(n) stack+cache │ O(n) table       │
# │ Readability  │ More natural     │ More structured  │
# │ Speed        │ Slightly slower  │ Faster           │
# └──────────────┴──────────────────┴──────────────────┘</div>

<div class="code-block"># ── STEP 3: Coin change (DP) ──
# When greedy fails, DP finds the optimal solution.

def coin_change(amount, coins):
    """
    Minimum coins needed to make amount.
    DP approach — works for ANY coin set.
    """
    # dp[i] = min coins to make amount i
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0 coins to make amount 0

    for i in range(1, amount + 1):
        for coin in coins:
            if coin &lt;= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1

# Standard coins — greedy also works here:
print(coin_change(67, [25, 10, 5, 1]))  # 6 coins

# Weird coins — greedy FAILS, DP finds optimal:
print(coin_change(6, [1, 3, 4]))  # 2 (3+3, not 4+1+1)

# HOW IT WORKS:
# dp[0] = 0  (base case)
# dp[1] = dp[1-1] + 1 = 1     (use 1)
# dp[2] = dp[2-1] + 1 = 2     (1+1)
# dp[3] = dp[3-3] + 1 = 1     (use 3!)
# dp[4] = min(dp[4-1]+1, dp[4-3]+1, dp[4-4]+1) = 1
# dp[5] = min(dp[5-1]+1, dp[5-3]+1, dp[5-4]+1) = 2
# dp[6] = min(dp[6-1]+1, dp[6-3]+1, dp[6-4]+1) = 2 (3+3)</div>

<div class="code-block"># ── STEP 4: 0/1 Knapsack ──
# Classic DP problem. Can't take fractions — must use DP.

def knapsack(capacity, weights, values):
    """
    0/1 Knapsack — take or leave each item.
    dp[i][w] = max value using first i items, capacity w.
    """
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] &lt;= w:
                # Choice: take or skip this item
                take = values[i - 1] + dp[i - 1][w - weights[i - 1]]
                skip = dp[i - 1][w]
                dp[i][w] = max(take, skip)
            else:
                dp[i][w] = dp[i - 1][w]  # can't take, skip

    return dp[n][capacity]

values = [60, 100, 120]
weights = [10, 20, 30]
capacity = 50

print(knapsack(capacity, weights, values))  # 220 (items 2+3)

# THE DP TABLE:
#       w=0  w=10  w=20  w=30  w=40  w=50
# i=0    0     0     0     0     0     0
# i=1    0    60    60    60    60    60   (item1: val=60, wt=10)
# i=2    0    60   100   160   160   160   (item2: val=100, wt=20)
# i=3    0    60   100   160   180   220   (item3: val=120, wt=30)
# Answer: dp[3][50] = 220</div>

<div class="code-block"># ── STEP 5: Edit distance (Levenshtein) ──
# How many operations to transform s1 into s2?
# Operations: insert, delete, replace

def edit_distance(s1, s2):
    """
    Minimum edits to transform s1 into s2.
    Used in: spell check, DNA alignment, fuzzy matching.
    """
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Base cases
    for i in range(m + 1):
        dp[i][0] = i  # delete all chars from s1
    for j in range(n + 1):
        dp[0][j] = j  # insert all chars of s2

    # Fill the table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]  # match, no cost
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],      # delete from s1
                    dp[i][j - 1],      # insert into s1
                    dp[i - 1][j - 1]   # replace
                )

    return dp[m][n]

print(edit_distance("cat", "cut"))        # 1 (replace a→u)
print(edit_distance("sunday", "saturday"))  # 3
print(edit_distance("kitten", "sitting"))   # 3

# Used in:
# - Spell checkers (suggest corrections)
# - DNA sequence alignment
# - Fuzzy string matching in search
# - Plagiarism detection</div>

<div class="code-block"># ── STEP 6: DP patterns and when to use ──
# COMMON DP PATTERNS:

# 1. FIBONACCI-LIKE (1D DP):
# - Climbing stairs: dp[i] = dp[i-1] + dp[i-2]
# - House robber: max(dp[i-1], dp[i-2] + nums[i])

# 2. GRID PATHS (2D DP):
# - Unique paths in grid
# - Minimum path sum

# 3. KNAPSACK-LIKE:
# - 0/1 knapsack, subset sum, partition equal subset sum

# 4. STRING DP:
# - Edit distance, longest common subsequence
# - Longest palindromic substring

# 5. INTERVAL DP:
# - Matrix chain multiplication
# - Burst balloons

# DP TEMPLATE:
# 1. Define dp[i] or dp[i][j] — what does it represent?
# 2. Base cases — smallest sub-problems
# 3. Recurrence — how to build bigger from smaller
# 4. Order of computation — small to big
# 5. Answer — where is the final result?

# ┌──────────────────────┬───────────┬────────────────────┐
# │ Problem              │ Pattern   │ Complexity         │
# ├──────────────────────┼───────────┼────────────────────┤
# │ Fibonacci            │ 1D DP     │ O(n)               │
# │ Coin change          │ 1D DP     │ O(amount × coins)  │
# │ 0/1 Knapsack         │ 2D DP     │ O(n × capacity)    │
# │ Edit distance        │ 2D DP     │ O(m × n)           │
# │ Longest common subseq│ 2D DP     │ O(m × n)           │
# │ Longest increasing   │ 1D DP     │ O(n²) or O(n log n)│
# └──────────────────────┴───────────┴────────────────────┘
#
# DP vs GREEDY vs BACKTRACKING:
# DP: overlapping subproblems + optimal substructure
# Greedy: local best = global best (no reconsidering)
# Backtracking: try all options, undo if stuck</div>

<div class="dialogue">দারাজাত — স্তর। কুরআনে আল্লাহ বলেন — "তাদের জন্য রয়েছে স্তরসমূহ।" (৬:১৩২)। প্রতিটা স্তর আগের স্তরের চেয়ে উঁচু। কেউ এক লাফে শীর্ষে যায় না — ধাপে ধাপে। DP-ও তেমনি — বড় উত্তর ছোট উত্তরের স্তরে স্তরে গঠন। ধৈর্য আর স্মৃতি দিয়ে।</div>
<div class="dialogue en">"Darajat — degrees/levels. Allah says — 'For them are degrees.' (6:132). Each level higher than the last. No one leaps to the summit in one jump — step by step. DP is the same — the big answer built from small answers, level by level. With patience and memory."</div>

<div class="secret-box">🌱 DP = overlapping subproblems + optimal substructure। ছোট সমস্যা সমাধান করো, মনে রাখো, বড়টা বানাও।</div>`,
  senior:{
    title:"DP চেনার দুটো লক্ষণ (আর Greedy থেকে পার্থক্য)",
    body:`
    <p><strong>১. Overlapping subproblems:</strong> একই ছোট সমস্যা বারবার আসে। Fibonacci-তে <code>fib(3)</code> কয়েকবার গণনা হয়। Greedy-তে এটা হয় না — প্রতিটা ধাপ একবারই।</p>
    <p><strong>২. Optimal substructure:</strong> বড় সমস্যার সর্বোত্তম সমাধান ছোট সমস্যার সর্বোত্তম সমাধান থেকে গঠিত। (এটা Greedy-র সাথে শেয়ার্ড — Door 14।)</p>
    <p>দুটোই থাকলে DP। শুধু ২ থাকলে Greedy-ও চলতে পারে (দ্রুত)।</p>
    <p><strong>Top-down (memoization):</strong> recursive + cache। পড়তে সহজ। <strong>Bottom-up (tabulation):</strong> iterative, small→big। দ্রুত। Production-এ সাধারণত bottom-up।</p>
    <p><strong>Senior test:</strong> 0/1 knapsack → DP। Fractional knapsack → Greedy। একই নাম, ভিন্ন সমাধান!</p>`
  },
  exercise:{
    hint:"Fibonacci তিনভাবে — naive বনাম memoized বনাম bottom-up। পার্থক্য দেখো!",
    starterCode:`# মালির ধাপ — Dynamic Programming
# Fibonacci: naive vs memoized vs bottom-up
import time

def fib_naive(n):
    if n <= 1: return n
    return fib_naive(n-1) + fib_naive(n-2)   # O(2^n)

memo = {}
def fib_memo(n):
    if n <= 1: return n
    if n in memo: return memo[n]
    memo[n] = fib_memo(n-1) + fib_memo(n-2)
    return memo[n]                            # O(n)

def fib_bottom_up(n):
    if n <= 1: return n
    dp = [0]*(n+1); dp[1] = 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]                              # O(n), সবচেয়ে দ্রুত

n = 30
t1=time.time(); r1=fib_naive(n); tn=time.time()-t1
t2=time.time(); r2=fib_memo(n); tm=time.time()-t2
t3=time.time(); r3=fib_bottom_up(n); tb=time.time()-t3

print(f"Fibonacci({n}) = {r1}")
print(f"Naive:       {tn:.4f}s  (O(2^n))")
print(f"Memoized:    {tm:.6f}s  (O(n))")
print(f"Bottom-up:   {tb:.6f}s  (O(n))")
print(f"\nMemoized কত গুণ দ্রুত? {tn/tm:.0f}x!")

# BONUS: n=40 চেষ্টা করো — naive কত সময় নেয় দেখো!
`
  }
});

// ── DOOR 16: BACKTRACKING ──
doors.push({
  num:16, icon:"🧭", color:"#9c27b0", name:"অলিগলির পথিকের সুতো",
  subtitle:"The Alley Explorer's Thread", tech:"Backtracking",
  spirit:"সা'য় — striving/effort, from Quran 53:39 (man has only what he strives for)",
  secret:"Backtracking = recursion + ফেরা। একটা পথ বেছো, শেষ পর্যন্ত যাও, মৃত প্রান্তে পৌঁছালে ফিরে এসে অন্য পথ চেষ্টা করো। সব সমাধান খুঁজতে শক্তিশালী।",
  recall:{
    q:"অলিগলির পথিক কেন সুতো ব্যবহার করেন — শুধু স্মৃতি নয়?",
    qen:"Why does the alley explorer use a thread — not just memory?",
    a:"কারণ মৃত প্রান্তে পৌঁছালে ফিরে আসতে হয়। সুতো ধরে ফেরা সহজ — শেষ সিদ্ধান্ত বাতিল করো, আগেরটায় ফিরো, অন্য শাখা চেষ্টা করো। এটাই backtracking — recursion যা ফিরে আসে যখন পথ মৃত।",
    aen:"Because dead ends require return. Following the thread back is easy — undo the last choice, return to the previous, try another branch. This is backtracking — recursion that returns when the path is dead."
  },
  story:`
<p class="scene-setting">ষোড়শ দোকান। অলিগলির পথিকের সুতো। পুরনো শহরের গোলকধাঁধা — সরু অলিগলি, কয়েকটা মৃত প্রান্তে শেষ। রহিম দাঁড়িয়ে আছেন — হাতে এক গোছা সুতো, প্রবেশদ্বারে এক প্রান্ত বাঁধা। তিনি এগোন, প্রতিটা মোড়ে সুতো ছাড়েন। মৃত প্রান্ত? সুতো ধরে ফিরে আসেন — শেষ মোড়ে, অন্য শাখা চেষ্টা করেন। এভাবে তিনি পুরো গোলকধাঁধা ম্যাপ করেন।</p>
<p class="scene-setting en">The sixteenth shop. The alley explorer's thread. A maze of the old city — narrow alleys, some ending in dead ends. Rahim stands — a ball of thread, one end tied at the entrance. He walks forward, releasing thread at each turn. Dead end? He follows the thread back — to the last turn, tries another branch. Thus he maps the whole maze.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> রহিম প্রথমে pruning ছাড়াই N-Queens সমাধান করতে গেলেন। N=8 হলে ৮! = ৪০,৩২০ permutation। কিন্তু প্রতিটা পথ শেষ পর্যন্ত যাচাই। প্রুনিং ছাড়া অনেক ধীর। তারপর constraint যোগ করলেন — প্রতিটা ধাপে যাচাই করো, আক্রমণে আছে কিনা। ভুল শাখা কেটে ফেলো। সময় ৪০,৩২০ থেকে মাত্র ৯২টা valid solution।</div></div>

<div class="dialogue">মালি শিখিয়েছিলেন — ধাপে ধাপে উত্তর বানাও, মনে রাখো। কিন্তু আমি বলি — কখনো উত্তর নেই, শুধু পছন্দ। অনেক পছন্দ। প্রতিটা চেষ্টা করতে হয়। কিন্তু অন্ধভাবে নয় — পছন্দ করো, এগোও, মৃত প্রান্তে ফিরে এসো, অন্য চেষ্টা করো। এটাই backtracking। recursion যা মনে রাখে কীভাবে ফিরে আসতে হয়।</div>
<div class="dialogue en">"The gardener taught — build the answer step by step, remember. But I say — sometimes there's no answer, only choices. Many choices. Each must be tried. But not blindly — choose, advance, retreat at dead ends, try another. This is backtracking. Recursion that remembers how to return."</div>

<div class="diagram">
  <div class="diag-title">N-Queens — প্রতিটা বাছাই, মৃত প্রান্তে ফেরা</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <!-- 4x4 board -->
    ${Array.from({length:4},(_,r)=>Array.from({length:4},(_,c)=>{
      const dark = (r+c)%2===0;
      return `<rect x="${160+c*40}" y="${20+r*40}" width="40" height="40" fill="${dark?'rgba(240,193,75,.08)':'rgba(54,214,231,.05)'}" stroke="#6b6588" stroke-width=".5"/>`;
    })).join('')}
    <!-- queens in a valid arrangement: cols [1,3,0,2] -->
    ${[[0,1],[1,3],[2,0],[3,2]].map(([r,c])=>`
    <text class="q-mark" x="${180+c*40}" y="${50+r*40}" fill="#f0c14b">♛</text>
    `).join('')}
    <text class="lbl-sm" x="240" y="195" text-anchor="middle" fill="#52c41a">সমাধান: প্রতিটা সারিতে ১টা, একে অপরকে আক্রমণ করে না।</text>

    <!-- backtrack tree on left -->
    <text class="lbl-sm" x="80" y="20" fill="#f06292">পথ বৃক্ষ</text>
    <circle class="node" cx="80" cy="40" r="12"/><text class="lbl-sm" x="80" y="43">∅</text>
    <circle class="node-hot" cx="50" cy="85" r="10"/><text class="lbl-sm" x="50" y="88" style="font-size:8px">Q0</text>
    <circle class="node-cyan" cx="110" cy="85" r="10"/><text class="lbl-sm" x="110" y="88" style="font-size:8px">Q1</text>
    <circle class="node-leaf" cx="80" cy="130" r="10"/><text class="lbl-sm" x="80" y="133" style="font-size:8px">Q2</text>
    <line class="edge" x1="74" y1="50" x2="54" y2="78"/>
    <line class="edge" x1="86" y1="50" x2="106" y2="78"/>
    <line class="edge-cyan" x1="110" y1="95" x2="84" y2="124"/>
    <text class="lbl-sm" x="50" y="155" fill="#ff6b35">মৃত ✗</text>
    <text class="lbl-sm" x="110" y="155" fill="#36d6e7">এগো ✓</text>
    <text class="lbl-sm" x="80" y="178" text-anchor="middle">সিদ্ধান্ত বাছো → যাচাই → ভালো হলে গভীরে, নাহলে ফিরো।</text>
  </svg>
</div>

<div class="dialogue">তিন ধাপ। Choose — একটা পছন্দ করো। Explore — সেই পছন্দ নিয়ে এগোও (recursion)। Un-choose — যদি মৃত প্রান্তে পৌঁছাও, পছন্দটা বাতিল করো, ফিরে এসো। এই তিন ধাপেই N-Queens, Sudoku, permutations, combinations — সব। গোলকধাঁধা সমাধান, সমাধান গণনা, সব সমাধান খুঁজি।</div>
<div class="dialogue en">"Three steps. Choose — make a choice. Explore — advance with that choice (recursion). Un-choose — if you hit a dead end, undo the choice, return. In these three steps: N-Queens, Sudoku, permutations, combinations — all. Solve mazes, count solutions, find all solutions."</div>

<div class="code-block"># ── STEP 1: What is backtracking? ──
# Backtracking = try a choice, explore, if stuck UNDO and try another.
# It's systematic trial-and-error with pruning.

# The three-step template:
# 1. CHOOSE: make a choice
# 2. EXPLORE: recurse with that choice
# 3. UN-CHOOSE: undo the choice (backtrack!)

# Simplest example — generate all permutations:
def permutations(nums):
    """Generate all orderings of nums."""
    result = []

    def backtrack(path, remaining):
        # BASE CASE: no more choices → we have a full permutation
        if not remaining:
            result.append(path[:])  # save a COPY
            return

        # Try each remaining number
        for i in range(len(remaining)):
            path.append(remaining[i])                      # 1. CHOOSE
            backtrack(path, remaining[:i] + remaining[i+1:])  # 2. EXPLORE
            path.pop()                                      # 3. UN-CHOOSE

    backtrack([], nums)
    return result

print(permutations([1, 2, 3]))
# [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
# 3! = 6 permutations</div>

<div class="code-block"># ── STEP 2: Combinations and subsets ──
# Subsets — all possible selections:
def subsets(nums):
    """Generate all subsets (the power set)."""
    result = []

    def backtrack(start, path):
        result.append(path[:])  # every path is a valid subset
        for i in range(start, len(nums)):
            path.append(nums[i])       # CHOOSE
            backtrack(i + 1, path)     # EXPLORE (i+1: no reuse)
            path.pop()                 # UN-CHOOSE

    backtrack(0, [])
    return result

print(subsets([1, 2, 3]))
# [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
# 2³ = 8 subsets

# Combinations — choose k from n:
def combine(n, k):
    """Generate all ways to choose k items from 1..n."""
    result = []

    def backtrack(start, path):
        if len(path) == k:     # BASE CASE: chosen k items
            result.append(path[:])
            return
        for i in range(start, n + 1):
            path.append(i)        # CHOOSE
            backtrack(i + 1, path)  # EXPLORE
            path.pop()            # UN-CHOOSE

    backtrack(1, [])
    return result

print(combine(4, 2))
# [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
# C(4,2) = 6 combinations</div>

<div class="code-block"># ── STEP 3: N-Queens ──
# Place N queens on an NxN board so none attack each other.

def solve_n_queens(n):
    """Place N queens so none can attack each other."""
    result = []

    def is_safe(board, row, col):
        # Check column and both diagonals
        for prev_row in range(row):
            if board[prev_row] == col:
                return False
            if abs(board[prev_row] - col) == row - prev_row:
                return False
        return True

    def backtrack(row, board):
        if row == n:  # all queens placed!
            result.append(board[:])
            return
        for col in range(n):
            if is_safe(board, row, col):
                board[row] = col     # CHOOSE
                backtrack(row + 1, board)  # EXPLORE
                board[row] = -1      # UN-CHOOSE (implicit)

    backtrack(0, [-1] * n)
    return result

solutions = solve_n_queens(4)
print(f"4-Queens: {len(solutions)} solutions")  # 2 solutions
# 8-Queens has 92 solutions!</div>

<div class="code-block"># ── STEP 4: Word search in grid ──
# Find a word in a 2D grid by moving to adjacent cells.

def exist(board, word):
    """Check if word exists in the grid (adjacent moves only)."""
    rows, cols = len(board), len(board[0])

    def backtrack(r, c, index):
        if index == len(word):  # found the whole word!
            return True

        if (r &lt; 0 or r &gt;= rows or c &lt; 0 or c &gt;= cols
                or board[r][c] != word[index]):
            return False

        # Mark as visited (CHOOSE)
        temp, board[r][c] = board[r][c], "#"

        # Try all 4 directions (EXPLORE)
        found = (backtrack(r + 1, c, index + 1) or
                 backtrack(r - 1, c, index + 1) or
                 backtrack(r, c + 1, index + 1) or
                 backtrack(r, c - 1, index + 1))

        # UN-CHOOSE (restore)
        board[r][c] = temp
        return found

    for r in range(rows):
        for c in range(cols):
            if board[r][c] == word[0] and backtrack(r, c, 0):
                return True
    return False

board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
]
print(exist(board, "ABCCED"))  # True
print(exist(board, "SEE"))     # True
print(exist(board, "ABCB"))    # False</div>

<div class="code-block"># ── STEP 5: Pruning — the key to efficiency ──
# Pruning = cutting off branches that can't lead to a solution.
# This is what makes backtracking feasible (vs pure brute force).

# Sudoku solver with pruning:
def solve_sudoku(board):
    """Solve Sudoku using backtracking with constraint pruning."""
    def is_valid(board, row, col, num):
        # Check row, column, and 3x3 box
        for i in range(9):
            if board[row][i] == num or board[i][col] == num:
                return False
        box_r, box_c = 3 * (row // 3), 3 * (col // 3)
        for r in range(box_r, box_r + 3):
            for c in range(box_c, box_c + 3):
                if board[r][c] == num:
                    return False
        return True

    def solve():
        for r in range(9):
            for c in range(9):
                if board[r][c] == 0:  # empty cell
                    for num in range(1, 10):
                        if is_valid(board, r, c, num):
                            board[r][c] = num    # CHOOSE
                            if solve():           # EXPLORE
                                return True
                            board[r][c] = 0       # UN-CHOOSE
                    return False  # no valid number → backtrack
        return True  # all cells filled!

    solve()
    return board

# PRUNING saves massive time:
# Without pruning: 9^81 possibilities (astronomical!)
# With pruning: most branches cut early → solves in milliseconds</div>

<div class="code-block"># ── STEP 6: When to use backtracking ──
# Backtracking is for EXHAUSTIVE SEARCH with constraints.

# USE BACKTRACKING WHEN:
# ✅ "Find ALL solutions" (permutations, combinations)
# ✅ Constraint satisfaction (Sudoku, N-Queens)
# ✅ Need to search a decision tree
# ✅ Optimization with small search space

# DON'T USE BACKTRACKING WHEN:
# ❌ Search space is too large (use DP or greedy instead)
# ❌ Only need one optimal solution (use greedy/DP)
# ❌ Problem has optimal substructure (use DP)

# BACKTRACKING vs DP vs GREEDY:
# ┌──────────────┬──────────────────────────────────┐
# │ Approach     │ When to use                      │
# ├──────────────┼──────────────────────────────────┤
# │ Greedy       │ Local best = global best         │
# │ DP           │ Overlapping subproblems          │
# │ Backtracking │ All solutions / constraint search│
# │ Brute force  │ Nothing else works               │
# └──────────────┴──────────────────────────────────┘

# COMPLEXITY:
# Permutations: O(n!)
# Combinations: O(C(n,k) × k)
# N-Queens: O(n!) with pruning
# Sudoku: O(9^empty_cells) worst, much less with pruning

# THE BACKTRACKING TEMPLATE:
# def backtrack(path, choices):
#     if is_goal(path):
#         result.append(path[:])
#         return
#     for choice in choices:
#         if is_valid(choice):     # PRUNE: skip invalid
#             path.append(choice)  # CHOOSE
#             backtrack(path, next_choices)  # EXPLORE
#             path.pop()           # UN-CHOOSE

# Real-world: constraint solving, puzzle games,
# scheduling, resource allocation, NAS (neural architecture search)</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Backtracking লুকিয়ে আছে অনেক জায়গায়। Constraint satisfaction — scheduling, resource allocation। Hyperparameter search — প্রতিটা সংমিশ্রণ চেষ্টা (বুদ্ধিমান প্রুনিং সহ)। Combinatorial optimization — feature selection, model architecture search। Game tree search — minimax সহ backtrack। Prompt combinatorics — কোন tool sequence কাজ করবে? সব চেষ্টা নয় — বুদ্ধিমান প্রুনিং।</div>
<div class="dialogue en">"You're an AI engineer. Backtracking hides in many places. Constraint satisfaction — scheduling, resource allocation. Hyperparameter search — try combinations with smart pruning. Combinatorial optimization — feature selection, architecture search. Game tree search — minimax with backtracking. Prompt combinatorics — which tool sequence works? Not all — smart pruning."</div>

<div class="dialogue">রুজুʿ — ফিরে আসা, প্রত্যাবর্তন। কুরআনে বারবার আল্লাহ বলেছেন — "তওবা করো, ফিরে এসো।" (২:২২২ এবং অন্যান্য)। তওবা মানে শুধু অনুশোচনা নয় — পথ থেকে ফিরে আসা, নতুন পথে যাওয়া। backtracking সেই রুজুʿ-এর ছায়া — ভুল পছন্দ থেকে ফিরে আসা, সঠিক শাখায় যাওয়া। যে ফিরে আসতে পারে সে গোলকধাঁধা জয় করে।</div>
<div class="dialogue en">"Rujuʿ — returning, retreating. Allah repeatedly says in the Quran — 'repent, return.' (2:222 and elsewhere). Tawbah is not just regret — it's returning from a path, taking a new one. Backtracking is the shadow of rujuʿ — returning from a wrong choice, going to the right branch. Who can return can conquer the maze."</div>

<div class="secret-box">🧭 Backtracking = recursion + ফেরা। একটা পথ বেছো, মৃত প্রান্তে ফিরো, অন্য পথ চেষ্টা করো।</div>`,
  senior:{
    title:"Backtracking — দ্রুত করার কৌশল (Pruning)",
    body:`
    <p><strong>1. Pruning early:</strong> যত শীঘ্র সম্ভব মৃত শাখা কেটে ফেলো। N-Queens-এ — রানি রাখার আগেই চেক করো আক্রান্ত হবে কি না। না হলে বসাওই না। এতে সময় কয়েক গুণ কমে।</p>
    <p><strong>2. Order matters:</strong> কোন পছন্দ আগে চেষ্টা করবে তা গুরুত্বপূর্ণ। সম্ভাবনার ক্রমে সাজাও — most constrained first (constraint propagation)।</p>
    <p><strong>3. Symmetry breaking:</strong> প্রতিসম সমাধান একবারই গণনা করো। N-Queens-এ আয়না/ঘূর্ণন প্রতিসম বাদ দাও।</p>
    <p><strong>4. Memoization যোগ করো:</strong> একই অবস্থায় এলে মনে রাখো — এটাকে DP-তে রূপান্তর করে (Door 15 এর সাথে মিলিত)।</p>
    <p><strong>Senior warning:</strong> backtracking exponential O(b^d) — গভীর বা চওড়া গাছে বিস্ফোরণ। বাস্তবে প্রুনিং বা heuristic সহ (A*, branch-and-bound) লাগে।</p>`
  },
  exercise:{
    hint:"Permutations জেনারেট করো backtracking দিয়ে — choose/explore/un-choose!",
    starterCode:`# অলিগলির পথিকের সুতো — Backtracking
# Permutations: তিন ধাপ — choose, explore, un-choose

def permutations(nums):
    """সব permutation জেনারেট করো"""
    result = []
    def backtrack(path, remaining):
        # base case: সব ব্যবহার হয়ে গেছে
        if not remaining:
            result.append(path[:])    # অনুলিপি রাখো!
            return
        for i in range(len(remaining)):
            path.append(remaining[i])              # CHOOSE
            backtrack(path, remaining[:i] + remaining[i+1:])  # EXPLORE
            path.pop()                              # UN-CHOOSE

    backtrack([], nums)
    return result

result = permutations([1, 2, 3])
print(f"মোট {len(result)} permutation:")
for p in result:
    print(f"  {p}")

# BONUS: N-Queens চেষ্টা করো (৪x৪ বোর্ডে ২টা সমাধান আছে)
def n_queens(n):
    solutions = []
    def is_safe(board, row, col):
        for r in range(row):
            if board[r] == col or \
               abs(board[r] - col) == row - r:
                return False
        return True
    def solve(row, board):
        if row == n:
            solutions.append(board[:])
            return
        for col in range(n):
            if is_safe(board, row, col):
                board.append(col)
                solve(row + 1, board)
                board.pop()
    solve(0, [])
    return solutions

sols = n_queens(4)
print(f"\n৪-Queens: {len(sols)} সমাধান")
for s in sols:
    print(f"  রানির কলাম: {s}")
`
  }
});
