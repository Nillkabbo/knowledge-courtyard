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

<div class="code-block">Sliding Window — Token Chunking:

def chunk_text(text, chunk_size=100, overlap=20):
    """টেক্সটকে overlapping chunks-এ ভাগ করি"""
    words = text.split()
    chunks = []
    start = 0
    while start < len(words):
        end = start + chunk_size
        chunk = words[start:end]
        chunks.append(' '.join(chunk))
        start += chunk_size - overlap  # overlap!
    return chunks

# RAG-এ ব্যবহার:
# বড় ডকুমেন্ট → ছোট overlapping chunks →
# প্রতিটা chunk embedding → vector DB

TWO POINTERS — Two Sum (sorted array):

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
    return None   # O(n), প্রতিটা উপাদান একবার ছুঁয়ে</div>

<div class="dialogue">তাদাব্বুর — গভীর চিন্তা। কুরআনে আল্লাহ বারবার বলেছেন — "চিন্তা করো না?" (৪৭:২৪)। তাদাব্বুর মানে একটা অংশে থামা, গভীরে যাওয়া, তারপর পরের অংশে। Sliding window-এর মতো — একটা অংশ দেখো, বুঝো, তারপর সরাও। পুরো কুরআন একবারে নয় — অংশে অংশে। প্রতিটা অংশে থামো, চিন্তা করো, তারপর এগোও।</div>
<div class="dialogue en">"Tadabbur — deep contemplation. Allah repeatedly says in the Quran — 'Will you not reflect?' (47:24). Tadabbur means pausing at a portion, going deep, then moving to the next. Like a sliding window — see a section, understand, then slide. Not the whole Quran at once — portion by portion. Pause at each, reflect, then advance."</div>`,
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
print(f"মোট {len(chunks)} chunk:\n")
for i, chunk in enumerate(chunks):
    print(f"Chunk {i+1}: \\"{chunk}\\"")
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
  secret:"Greedy = প্রতিটা ধাপে সেরা স্থানীয় পছন্দ। সহজ, দ্রুত — কিন্তু সবসময় সর্বোত্তম নয়। কখন কাজ করে? optimal substructure + greedy choice property।",
  recall:{
    q:"রেশম ব্যবসায়ী কেন প্রতিটা শহরে সেরা চুক্তিই করেন, পুরো যাত্রার পরিকল্পনা নয়?",
    qen:"Why does the silk merchant take the best deal at each city, not plan the whole journey?",
    a:"কারণ কিছু সমস্যায় প্রতিটা স্থানীয় সেরা পছন্দ একসাথে সার্বজনীন সেরা দেয়। একে greedy বলে। কিন্তু সব সমস্যায় নয় — কখনো স্থানীয় সেরা সার্বজনীন খারাপ দেয়। কখন কাজ করে সেটাই জ্ঞান।",
    aen:"Because in some problems, the best local choice at each step yields the global best. This is greedy. But not all problems — sometimes local best gives global worst. Knowing when is the skill."
  },
  story:`
<p class="scene-setting">চতুর্দশ দোকান। রেশম ব্যবসায়ীর ক্যারাভান। রেশমের চকচকে গাঁথুনি, দূর শহরের সুবাস, উটের ঘণ্টা। হাজি করিম দাঁড়িয়ে আছেন — পাশে মানচিত্র, সামনে পাঁচটা শহরের চুক্তির খাতা। তিনি পুরো যাত্রা পরিকল্পনা করেন না। প্রতিটা শহরে যা সেরা মনে হয়, তাই করেন। "কিছু বাজারে," তিনি বলেন, "প্রতিটা স্থানীয় সেরা পুরো যাত্রাকে সেরা বানায়। কিন্তু সব বাজারে নয়। সেই পার্থক্য জানাই কারিগরি।"</p>
<p class="scene-setting en">The fourteenth shop. The silk merchant's caravan. Shimmer of silk, scent of distant cities, bells of camels. Haji Karim stands — a map beside him, ledger of deals with five cities. He doesn't plan the whole journey. At each city, he does what seems best. 'In some markets,' he says, 'the best local choice makes the whole journey best. But not all markets. Knowing that difference is the craft.'"</p>

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

<div class="code-block">Greedy — যেখানে কাজ করে (Proven Optimal):

  ১. Activity selection — সবচেয়ে কম কক্ষে সবচেয়ে বেশি কাজ।
     "যেটা আগে শেষ হয়" বেছো। প্রমাণিত সর্বোত্তম।

  ২. Huffman coding — কম ফ্রিকোয়েন্সির অক্ষর দীর্ঘ কোড।
     compression-এর ভিত্তি (gzip, JPEG)।

  ৩. Dijkstra (ভরযুক্ত graph shortest path) — Door 9 এর সম্প্রসারণ।
     প্রতিটা ধাপে সবচেয়ে কাছের unvisited node বেছো।
     (শর্ত: সব edge-এর ওজন অ-ঋণাত্মক হতে হবে — ঋণাত্মক ওজন থাকলে greedy choice ভেঙে পড়ে, তখন Bellman-Ford লাগে।)

  ৪. Kruskal/Prim MST — সবচেয়ে ছোট edge বেছো, cycle না হয় পর্যন্ত।
     (Union-Find লাগে — Door 10।)

  ৫. Fractional knapsack — আংশিকভাবে নেওয়া যায়। Greedy optimal।
     (0/1 knapsack হলে DP লাগে — Door 15!)

GREEDY vs DP — কোনটা?
  • যদি "প্রতিটা স্থানীয় সেরা = সার্বজনীন সেরা" প্রমাণ করা যায় → Greedy (দ্রুত)
  • যদি সাব-সমস্যার সমাধান মনে রাখতে হয় → DP (Door 15)
  • সন্দেহ হলে: brute force দিয়ে ছোট ইনপুটে যাচাই করো।</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Greedy লুকিয়ে আছে সবখানে। LLM token generation-এ greedy decoding — প্রতিটা ধাপে সবচেয়ে সম্ভাব্য পরবর্তী টোকেন বেছো (logits-এর argmax)। দ্রুত, কিন্তু local optimum — পুরো বাক্যের সেরা সম্ভাবনা মিস হতে পারে। তাই beam search — একসাথে কয়েকটা candidate path সমান্তরাল রাখো, শেষে সেরাটা বেছো। Beam search আসলে "বহু-পথ greedy" — pure greedy আর brute-force search-এর মাঝামাঝি। Huffman — embedding বা টোকেন compression। Dijkstra — knowledge graph-এ সবচেয়ে সম্পর্কিত পথ। Top-k greedy — RAG-এ সেরা k doc বেছো। Clustering seeding — প্রতিটা ধাপে সবচেয়ে দূরের point বেছো। সহজ, দ্রুত, এবং প্রায়ই "যথেষ্ট ভালো"।</div>
<div class="dialogue en">"You're an AI engineer. Greedy hides everywhere. LLM token generation uses greedy decoding — pick the most probable next token at each step (argmax of logits). Fast, but a local optimum — the best full-sentence probability can be missed. So beam search — keep several candidate paths in parallel, pick the best at the end. Beam search is really 'multi-path greedy' — a middle ground between pure greedy and brute-force search. Huffman — embedding or token compression. Dijkstra — most related path in knowledge graphs. Top-k greedy — pick the best k docs in RAG. Clustering seeding — at each step pick the farthest point. Simple, fast, and often 'good enough'."</div>

<div class="dialogue">সাʿআহ — মুহূর্ত, সুযোগ। কুরআনে আল্লাহ বলেন — "তোমাদের কাছে যা আছে তা শেষ হয়ে যাবে, আর আল্লাহর কাছে যা আছে তা স্থায়ী।" (১৬:৯৬)। কিন্তু সাথে সাথে সতর্কতা — আল্লাহ তাড়াহুড়ো পছন্দ করেন না (৮৭:১৯ এর প্রেক্ষিতে, "তাড়াহুড়ো শয়তানের কাজ")। Greedy হলো সাʿআহ-এর ছায়া — মুহূর্তের সেরা ধরো। কিন্তু অন্ধ তাড়া নয় — প্রথমে জানো, এই সমস্যায় কি স্থানীয় সেরা সার্বজনীন সেরা দেয়?</div>
<div class="dialogue en">"Saʿah — moment, opportunity. Allah says — 'What you have runs out, what is with Allah remains.' (16:96). But also caution — haste is not loved (the saying goes, 'haste is from Satan'). Greedy is the shadow of saʿah — seize the moment's best. But not blind haste — first know, does this problem reward local best with global best?"</div>`,
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

<div class="code-block">Edit Distance (Levenshtein) — DP Classic:

def edit_distance(s1, s2):
    m, n = len(s1), len(s2)
    # dp[i][j] = s1-এর প্রথম i অক্ষরকে
    #            s2-এর প্রথম j অক্ষরে রূপান্তরের খরচ
    dp = [[0]*(n+1) for _ in range(m+1)]

    for i in range(m+1): dp[i][0] = i  # delete all
    for j in range(n+1): dp[0][j] = j  # insert all

    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1]  # no cost
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],    # delete
                    dp[i][j-1],    # insert
                    dp[i-1][j-1]   # replace
                )
    return dp[m][n]

edit_distance("cat", "cut")  # → 1 (replace a→u)
edit_distance("sunday", "saturday")  # → 3</div>

<div class="dialogue">দারাজাত — স্তর। কুরআনে আল্লাহ বলেন — "তাদের জন্য রয়েছে স্তরসমূহ।" (৬:১৩২)। প্রতিটা স্তর আগের স্তরের চেয়ে উঁচু। কেউ এক লাফে শীর্ষে যায় না — ধাপে ধাপে। DP-ও তেমনি — বড় উত্তর ছোট উত্তরের স্তরে স্তরে গঠন। ধৈর্য আর স্মৃতি দিয়ে।</div>
<div class="dialogue en">"Darajat — degrees/levels. Allah says — 'For them are degrees.' (6:132). Each level higher than the last. No one leaps to the summit in one jump — step by step. DP is the same — the big answer built from small answers, level by level. With patience and memory."</div>`,
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
print(f"\\nMemoized কত গুণ দ্রুত? {tn/tm:.0f}x!")

# BONUS: n=40 চেষ্টা করো — naive কত সময় নেয় দেখো!
`
  }
});

// ── DOOR 16: BACKTRACKING ──
doors.push({
  num:16, icon:"🧭", color:"#9c27b0", name:"অলিগলির পথিকের সুতো",
  subtitle:"The Alley Explorer's Thread", tech:"Backtracking",
  secret:"Backtracking = recursion + ফেরা। একটা পথ বেছো, শেষ পর্যন্ত যাও, মৃত প্রান্তে পৌঁছালে ফিরে এসে অন্য পথ চেষ্টা করো। সব সমাধান খুঁজতে শক্তিশালী।",
  recall:{
    q:"অলিগলির পথিক কেন সুতো ব্যবহার করেন — শুধু স্মৃতি নয়?",
    qen:"Why does the alley explorer use a thread — not just memory?",
    a:"কারণ মৃত প্রান্তে পৌঁছালে ফিরে আসতে হয়। সুতো ধরে ফেরা সহজ — শেষ সিদ্ধান্ত বাতিল করো, আগেরটায় ফিরো, অন্য শাখা চেষ্টা করো। এটাই backtracking — recursion যা ফিরে আসে যখন পথ মৃত।",
    aen:"Because dead ends require return. Following the thread back is easy — undo the last choice, return to the previous, try another branch. This is backtracking — recursion that returns when the path is dead."
  },
  story:`
<p class="scene-setting">ষোড়শ দোকান। অলিগলির পথিকের সুতো। পুরনো শহরের গোলকধাঁধা — সরু অলিগলি, কয়েকটা মৃত প্রান্তে শেষ। রহিম দাঁড়িয়ে আছেন — হাতে এক গোছা সুতো, প্রবেশদ্বারে এক প্রান্ত বাঁধা। তিনি এগোন, প্রতিটা মোড়ে সুতো ছাড়েন। মৃত প্রান্ত? সুতো ধরে ফিরে আসেন — শেষ মোড়ে, অন্য শাখা চেষ্টা করেন। এভাবে তিনি পুরো গোলকধাঁধা ম্যাপ করেন।</p>
<p class="scene-setting en">The sixteenth shop. The alley explorer's thread. A maze of the old city — narrow alleys, some ending in dead ends. Rahim stands — a ball of thread in hand, one end tied at the entrance. He walks forward, releasing thread at each turn. Dead end? He follows the thread back — to the last turn, tries another branch. Thus he maps the whole maze.</p>

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

<div class="code-block">Backtracking Template — Choose, Explore, Un-choose:

def backtrack(path, choices):
    if is_goal(path):           # লক্ষ্য পৌঁছেছে?
        solutions.append(path[:])   # একটা অনুলিপি রাখো
        return
    for choice in choices:
        if is_valid(choice):        # এই পছন্দ বৈধ?
            path.append(choice)     # CHOOSE
            backtrack(path, new_choices)  # EXPLORE
            path.pop()              # UN-CHOOSE (ফিরে আসো)

# ক্লাসিক উদাহরণ — Permutations:
def permutations(nums):
    result = []
    def bt(path, remaining):
        if not remaining:
            result.append(path[:])
            return
        for i in range(len(remaining)):
            path.append(remaining[i])              # choose
            bt(path, remaining[:i] + remaining[i+1:])  # explore
            path.pop()                              # un-choose
    bt([], nums)
    return result

permutations([1,2,3])
# → [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

CLASSIC PROBLEMS:
  • N-Queens — NxN বোর্ডে N রানি, একে অপরকে আক্রমণ করে না
  • Sudoku solver — খালি কক্ষে সংখ্যা বসাও
  • Permutations / Combinations / Subsets
  • Word search — গ্রিডে শব্দ খোঁজো
  • Maze / pathfinding সব পথ খুঁজে
  • Graph coloring

WHEN TO REACH FOR BACKTRACKING:
  • "সব সমাধান গণনা করো" বা "যেকোনো একটা সমাধান"
  • constraints সহ পছন্দের গাছ
  • brute force কিন্তু বুদ্ধিমানের সাথে (প্রুনিং = dead branch কেটে ফেলা)</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Backtracking লুকিয়ে আছে অনেক জায়গায়। Constraint satisfaction — scheduling, resource allocation। Hyperparameter search — প্রতিটা সংমিশ্রণ চেষ্টা (বুদ্ধিমান প্রুনিং সহ)। Combinatorial optimization — feature selection, model architecture search। Game tree search — minimax সহ backtrack। Prompt combinatorics — কোন tool sequence কাজ করবে? সব চেষ্টা নয় — বুদ্ধিমান প্রুনিং।</div>
<div class="dialogue en">"You're an AI engineer. Backtracking hides in many places. Constraint satisfaction — scheduling, resource allocation. Hyperparameter search — try combinations with smart pruning. Combinatorial optimization — feature selection, architecture search. Game tree search — minimax with backtracking. Prompt combinatorics — which tool sequence works? Not all — smart pruning."</div>

<div class="dialogue">রুজুʿ — ফিরে আসা, প্রত্যাবর্তন। কুরআনে বারবার আল্লাহ বলেছেন — "তওবা করো, ফিরে এসো।" (২:২২২ এবং অন্যান্য)। তওবা মানে শুধু অনুশোচনা নয় — পথ থেকে ফিরে আসা, নতুন পথে যাওয়া। backtracking সেই রুজুʿ-এর ছায়া — ভুল পছন্দ থেকে ফিরে আসা, সঠিক শাখায় যাওয়া। যে ফিরে আসতে পারে সে গোলকধাঁধা জয় করে।</div>
<div class="dialogue en">"Rujuʿ — returning, retreating. Allah repeatedly says in the Quran — 'repent, return.' (2:222 and elsewhere). Tawbah is not just regret — it's returning from a path, taking a new one. Backtracking is the shadow of rujuʿ — returning from a wrong choice, going to the right branch. Who can return can conquer the maze."</div>`,
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
            if board[r] == col or \\
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
print(f"\\n৪-Queens: {len(sols)} সমাধান")
for s in sols:
    print(f"  রানির কলাম: {s}")
`
  }
});
