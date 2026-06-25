// ════════════════════════════════════════
// DSA BAZAAR — DOORS 1-4
// ════════════════════════════════════════
const doors = [];

// ── DOOR 1: ARRAYS & TENSORS ──
doors.push({
  num:1, icon:"🧱", color:"#ff6b35", name:"টালি নির্মাতার কারখানা",
  subtitle:"The Tile Maker's Workshop", tech:"Arrays & Tensors",
  secret:"Array = ধারাবাহিক স্থান। O(1) অ্যাক্সেস। সব AI ডেটা শেষে টেনসর।",
  recall:{
    q:"টালি নির্মাতা কেন এক সারিতে সাজান, ছড়িয়ে নয়?",
    qen:"Why does the tile maker arrange tiles in a row, not scattered?",
    a:"কারণ ধারাবাহিক সাজানো থাকলে যেকোনো টালি সরাসরি চিহ্নিত করা যায় — O(1)। ছড়িয়ে থাকলে খুঁজতে হয় — O(n)। Array-র শক্তি এই ধারাবাহিকতায়।",
    aen:"Because contiguous arrangement lets any tile be addressed directly — O(1). Scattered requires searching — O(n). Array's power is in contiguity."
  },
  story:`
<p class="scene-setting">প্রথম দোকান। টালি নির্মাতার কারখানা। মাটির গন্ধ, চুল্লির উত্তাপ, সারিবদ্ধ টালির ঝনঝন। উস্তাদ কাসেম কাজ করছেন — মাটির তালিকে সারিবদ্ধ করে সাজাচ্ছেন। প্রতিটা টালির একটা ক্রম আছে — ০, ১, ২, ৩। তিনি বলেন, "এক সারিতে থাকলে যেকোনোটা সরাসরি পাওয়া যায়। ছড়িয়ে থাকলে খুঁজতে হয়।"</p>
<p class="scene-setting en">The first shop. The Tile Maker's Workshop. Smell of clay, heat from the kiln, the clink of arranged tiles. Ustad Kasem works — laying tiles in rows. Each has an index — 0, 1, 2, 3. He says: "In a row, any tile is found directly. Scattered, you must search."</p>

<div class="dialogue">এই টালিগুলো দেখো। এক সারিতে — মেমোরিতে একসাথে বসে। তাই আমি বলি 'তৃতীয় টালি' — সরাসরি চলে যাই সেই ঠিকানায়। এক ধাপে। একে বলে O(1) — ধ্রুবক সময়।</div>
<div class="dialogue en">"Look at these tiles. In a row — they sit together in memory. So when I say 'third tile' — I go directly to that address. One step. This is O(1) — constant time."</div>

<div class="dialogue">কিন্তু যদি টালিগুলো ছড়িয়ে থাকে? তাহলে প্রতিটা দেখে যেতে হবে — প্রথম, দ্বিতীয়, তৃতীয়... যত বেশি টালি, তত বেশি সময়। একে বলে O(n) — রৈখিক সময়। Array-র শক্তি ধারাবাহিকতায়। Linked list-এর দুর্বলতা — ছড়িয়ে থাকা।</div>
<div class="dialogue en">"But if tiles are scattered? Then you must check each — first, second, third... The more tiles, the more time. This is O(n) — linear time. Array's power is contiguity. Linked list's weakness — being scattered."</div>

<div class="dialogue">এখন শোনো — তুমি AI ইঞ্জিনিয়ার। তোমার প্রতিটা মডেলের ইনপুট কী? একটা ছবি — কিন্তু মেশিনের কাছে সেটা সংখ্যার একটা গ্রিড। 224×224 pixel, প্রতিটায় 3 রঙ (RGB)। সেটা একটা 3D array — tensor। একটা sentence — প্রতিটা টোকেন একটা embedding vector (শত শত সংখ্যা)। সব শেষে array।</div>
<div class="dialogue en">"Now listen — you're an AI engineer. What's every model's input? An image — but to the machine, it's a grid of numbers. 224×224 pixels, each with 3 colors (RGB). That's a 3D array — a tensor. A sentence — each token is an embedding vector (hundreds of numbers). Everything ends as arrays."</div>

<div class="code-block">Tensor Shapes in AI:

ছবি (Image):  [224, 224, 3]     → 3D tensor
বাক্য (Text):  [10, 768]         → 2D (10 tokens × 768 dims)
ব্যাচ (Batch): [32, 224, 224, 3] → 4D (32 images)

Index rules:
  data[0]      → 1st element (Python 0-indexed!)
  data[-1]     → last element
  data[1:4]    → elements 1,2,3 (exclusive end)
  data[::-1]   → reversed</div>

<div class="dialogue">কুরআনে আছে — "আর আমি সৃষ্টি করেছি সব কিছু এক নির্দিষ্ট পরিমাণে।" প্রতিটা জিনিসের একটা জায়গা আছে — একটা ক্রম আছে। Array সেই শৃঙ্খলার ছায়া — প্রতিটা উপাদানের একটা নির্দিষ্ট স্থান।</div>
<div class="dialogue en">"The Quran says — 'And We created all things in due measure.' Everything has its place — an order. The array is a shadow of that discipline — each element has a specific position."</div>`,
  senior:{
    title:"Python List vs NumPy Array — কখন কোনটা?",
    body:`
    <p><strong>Python list:</strong> সাধারণ কাজে ব্যবহার করো। মিশ্র টাইপ রাখতে পারে। কিন্তু ধীর — প্রতিটা আইটেম আলাদা object।</p>
    <p><strong>NumPy array:</strong> সংখ্যাত্মক কাজে ব্যবহার করো। একই টাইপ, ধারাবাহিক মেমোরি, 10-100x দ্রুত। AI-এ সবসময় NumPy বা PyTorch tensor।</p>
    <p><strong>Senior habit:</strong> <code>import numpy as np</code> — সংখ্যা নিয়ে কাজ করলে list ভুলে যাও।</p>`
  },
  exercise:{
    hint:"reshape, slice, আর indexing অনুশীলন — কোড চালাও!",
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

// ── DOOR 2: HASH MAPS ──
doors.push({
  num:2, icon:"🔑", color:"#52c41a", name:"তালা নির্মাতার ভাণ্ডার",
  subtitle:"The Locksmith's Vault", tech:"Hash Maps / Dictionaries",
  secret:"Hash map = চাবি → ঠিকানা → ধন। O(1) lookup। Caching-এর ভিত্তি।",
  recall:{
    q:"তালা নির্মাতা কীভাবে এক সেকেন্ডে সঠিক ধন খুঁজে পান?",
    qen:"How does the locksmith find the exact treasure in one second?",
    a:"কারণ চাবির একটা গাণিতিক মান আছে (hash) যা সরাসরি একটা বাক্সে নিয়ে যায়। খুঁজতে হয় না। O(1) lookup।",
    aen:"Because the key has a mathematical value (hash) that directly leads to a box. No searching. O(1) lookup."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দোকান। তালা নির্মাতার ভাণ্ডার। লোহার চাবির ঝনঝন, তেলের গন্ধ, সারিবদ্ধ ধাতব বাক্স। উস্তাদ ইদ্রিস দাঁড়িয়ে আছেন — হাতে একগুচ্ছ চাবি, সামনে শত শত বাক্স। প্রতিটা চাবি একটা নির্দিষ্ট বাক্স খোলে। কোনো খোঁজ নেই — চাবি দিয়েই সরাসরি।</p>
<p class="scene-setting en">The second shop. The Locksmith's Vault. Clink of iron keys, smell of oil, rows of metal boxes. Ustad Idris stands — keys in hand, hundreds of boxes before him. Each key opens one specific box. No searching — direct access.</p>

<div class="dialogue">টালি নির্মাতা বলেছিলেন — সারিতে থাকলে সরাসরি পাওয়া যায়, index দিয়ে। কিন্তু আমি বলি — index মনে রাখা কঠিন। আমি চাই নাম দিয়ে খুঁজি। "ইদ্রিসের ধন" বললেই — সরাসরি সেই বাক্সে যাই। কীভাবে? Hash।</div>
<div class="dialogue en">"The tile maker said — in a row, you find directly by index. But I say — indices are hard to remember. I want to search by name. Say 'Idris's treasure' — go directly to that box. How? Hashing."</div>

<div class="dialogue">Hash হলো একটা গাণিতিক ফাংশন — যেকোনো নাম (key) কে একটা সংখ্যায় রূপান্তর করে। সেই সংখ্যাটা বাক্সের ঠিকানা। "user_email" → hash → 47 → বাক্স 47। O(1)। খুঁজতে হয় না। এটাই Python dictionary-র কাজ।</div>
<div class="dialogue en">"Hash is a mathematical function — transforms any name (key) into a number. That number is the box's address. 'user_email' → hash → 47 → box 47. O(1). No searching. This is how Python dictionaries work."</div>

<div class="dialogue">কিন্তু সমস্যা আছে। দুটো ভিন্ন চাবি কখনো একই বাক্সে যেতে পারে — collision। যেমন "abc" আর "cba" হয়তো একই hash দেয়। সমাধান? বাক্সে একটা ছোট list রাখা — একই বাক্সে একাধিক জিনিস থাকতে পারে। সেটাকে বলে chaining।</div>
<div class="dialogue en">"But there's a problem. Two different keys may map to the same box — collision. 'abc' and 'cba' might have the same hash. Solution? Keep a small list in the box — multiple items per box. This is called chaining."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার — তুমি dict প্রতিদিন ব্যবহার করো। Caching: API response সেভ করা — key = request, value = response। পরের বার সরাসরি। Deduplication: একই embedding দুইবার সেভ না করা। Feature store: user_id → features। সব O(1) lookup।</div>
<div class="dialogue en">"You're an AI engineer — you use dicts daily. Caching: save API responses — key = request, value = response. Next time, direct hit. Deduplication: don't save the same embedding twice. Feature store: user_id → features. All O(1) lookup."</div>

<div class="code-block">Python Dict Patterns for AI:

# Basic cache
cache = {}
def get_embedding(text):
    if text in cache:          # O(1) check!
        return cache[text]
    emb = model.encode(text)   # expensive
    cache[text] = emb          # save
    return emb

# Counter (word frequency)
from collections import Counter
words = ["AI", "ML", "AI", "DL", "AI"]
freq = Counter(words)  # {"AI": 3, "ML": 1, "DL": 1}

# defaultdict (no KeyError)
from collections import defaultdict
graph = defaultdict(list)</div>

<div class="dialogue">মিযান — দাঁড়িপাল্লা। আল্লাহ বলেছেন — "আমরা কায়িম করেছি মিযান।" প্রতিটা কিছুর একটা নির্ভুল মান আছে। Hash function সেই মিযানের মতো — প্রতিটা key-কে তার সঠিক স্থানে রাখে। ভুল নেই — যদি hash ভালো হয়।</div>
<div class="dialogue en">"Mizan — the scale. Allah said — 'We established the balance.' Everything has a precise measure. The hash function is like that scale — placing each key in its correct position. No error — if the hash is good."</div>`,
  senior:{
    title:"Dict Internals — Senior Engineer কী জানে",
    body:`
    <p>Python dict তে ভর্তি হলে (load factor > 2/3) resize হয় — O(n) খরচ। তাই বড় dict বানানোর সময় <code>dict.fromkeys()</code> বা pre-size করলে ভালো।</p>
    <p><strong>Key constraint:</strong> key অবশ্যই hashable হতে হবে — immutable (str, int, tuple)। List কখনো key হতে পারে না। <code>frozenset</code> ব্যবহার করো set কে key করতে।</p>
    <p><code>collections.Counter</code>, <code>defaultdict</code>, <code>OrderedDict</code> — এগুলো dict-এর বিশেষ রূপ। সঠিক টুল বেছো।</p>`
  },
  exercise:{
    hint:"dict দিয়ে একটা সাধারণ cache বানাও — AI-এর caching pattern শিখো",
    starterCode:`# তালা নির্মাতার ভাণ্ডার — Hash Map Cache
# একটা সাধারণ LRU-style cache বানাচ্ছি

# TODO: একটা cache dict বানাও
cache = {}

def expensive_operation(n):
    """এই ফাংশন 'ভারী' — সিমুলেট করছি"""
    print(f"  গণনা হচ্ছে... computing for {n}")
    return n * n  # সাধারণ গুণ, কিন্তু ভাবো এটা API call

def smart_compute(n):
    # TODO: cache-এ আছে কিনা দেখো
    # থাকলে সরাসরি দাও (cache hit!)
    if n in cache:
        print(f"  ✅ Cache hit! {n} already computed")
        return cache[n]
    
    # না থাকলে গণনা করো আর cache-এ রাখো
    result = expensive_operation(n)
    cache[n] = result
    return result

# পরীক্ষা করি
print("প্রথমবার (cache miss):")
print(smart_compute(5))

print("\\nদ্বিতীয়বার (cache hit):")
print(smart_compute(5))

print("\\nনতুন সংখ্যা (cache miss):")
print(smart_compute(10))

# BONUS: cache-এ কয়টা আইটেম আছে?
print(f"\\nCache size: {len(cache)} আইটেম")
`
  }
});

// ── DOOR 3: HEAPS / PRIORITY QUEUES ──
doors.push({
  num:3, icon:"🌶️", color:"#faad14", name:"মসলা ব্যবসায়ীর তাক",
  subtitle:"The Spice Merchant's Shelves", tech:"Heaps & Priority Queues",
  secret:"Heap = সবসময় সবচেয়ে গুরুত্বপূর্ণ উপরে। Top-K retrieval-এর ভিত্তি।",
  recall:{
    q:"মসলা ব্যবসায়ী কেন সব বাক্স সাজান না, শুধু শীর্ষটা রাখেন?",
    qen:"Why doesn't the spice merchant sort all boxes, just keeps the top one?",
    a:"কারণ সম্পূর্ণ সাজানো O(n log n)। শুধু শীর্ষ রাখা O(log n)। Heap সবসময় সবচেয়ে গুরুত্বপূর্ণ উপাদান উপরে রাখে — O(1) দেখা, O(log n) বের করা।",
    aen:"Because full sorting is O(n log n). Keeping just the top is O(log n). Heap always keeps the most important element on top — O(1) peek, O(log n) extract."
  },
  story:`
<p class="scene-setting">তৃতীয় দোকান। মসলা ব্যবসায়ীর দোকান। শুকনো মরিচের ঝাঁঝ, জায়ফলের উষ্ণতা, জাভাত্রির তীক্ষ্ণতা। হাজি মুহতার দাঁড়িয়ে আছেন — সামনে কাঠের তাক, প্রতিটা তাকে মসলা, কিন্তু ক্রম অনুযায়ী নয়। শুধু একটা নিয়ম — সবচেয়ে ঝাঁঝালো মসলা সবসময় উপরে। বাকিগুলো যেখরে হোক। কিন্তু উপরেরটা সবসময় সেরা।</p>
<p class="scene-setting en">The third shop. The Spice Merchant's stall. The bite of dried chili, warmth of nutmeg, sharpness of mace. Haji Mukhtar stands — wooden shelves before him, spices on each, but not fully sorted. One rule only — the sharpest spice always on top. The rest wherever. But the top is always the best.</p>

<div class="dialogue">ভাণ্ডার নির্মাতা বলেছিলেন — নাম দিয়ে খোঁজা যায়, O(1)-এ। কিন্তু আমি বলি — কখনো নাম লাগে না। কখনো লাগে শুধু সেরাটা। সবচেয়ে ঝাঁঝালো মসলা কোনটা? সব নাম মনে রাখার দরকার নেই — শুধু উপরেরটা নাও।</div>
<div class="dialogue en">"The locksmith said — find by name in O(1). But I say — sometimes you don't need names. Sometimes you need only the best. Which spice is sharpest? No need to remember all names — just take the top."</div>

<div class="dialogue">একে বলে heap। একটা বিশেষ গাছের মতো বিন্যাস — parent সবসময় child-এর চেয়ে বড় (বা ছোট)। উপরে সবসময় সর্বোচ্চ (বা সর্বনিম্ন)। সব সাজানো নেই — শুধু এই নিয়ম। কিন্তু এই নিয়মেই সেরাটা O(1)-এ পাওয়া যায়, বের করা O(log n)-এ।</div>
<div class="dialogue en">"This is called a heap. A special tree-like arrangement — parent always greater (or smaller) than children. On top, always the max (or min). Not fully sorted — just this rule. But this rule gives the best in O(1), extraction in O(log n)."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার — এটা তোমার রোজকার। Vector search-এ তুমি হাজার হাজার embedding থেকে সেরা ৫টা চাও। সব সাজালে O(n log n)। কিন্তু heap দিয়ে O(n + k log n) — অনেক দ্রুত। Top-K retrieval। আবার beam search-এ LLM যখন পরবর্তী k টোকেন বিবেচনা করে — heap।</div>
<div class="dialogue en">"You're an AI engineer — this is your daily bread. In vector search, you want the best 5 from thousands of embeddings. Full sort is O(n log n). But with a heap: O(n + k log n) — much faster. Top-K retrieval. And in beam search, when an LLM considers the next k tokens — heap."</div>

<div class="code-block">Python heapq — Top-K Retrieval:

import heapq

scores = [0.92, 0.15, 0.78, 0.45, 0.99, 0.33, 0.67]
# সেরা ৩টা
top3 = heapq.nlargest(3, scores)
# → [0.99, 0.92, 0.78]

# সবচেয়ে কম ৩টা
bot3 = heapq.nsmallest(3, scores)
# → [0.15, 0.33, 0.45]

# RAG-এ: সেরা documents
docs = [("doc1", 0.95), ("doc2", 0.72), ("doc3", 0.88)]
# score অনুযায়ী সেরা ২টা
best = heapq.nlargest(2, docs, key=lambda x: x[1])</div>

<div class="dialogue">আফদাল — শ্রেষ্ঠ। কুরআনে আল্লাহ বলেন — "তোমরা সর্বোত্তম জাতি।" শ্রেষ্ঠ হওয়া শুধু ব্যক্তিগত নয় — দায়িত্ব। Heap-ও তেমনি — সবচেয়ে গুরুত্বপূর্ণকে উপরে রাখে, কিন্তু সেটা দায়িত্ব — সেরাটা আগে দিতে হবে। Priority মানে দায়িত্ব।</div>
<div class="dialogue en">"Afdal — the best. Allah says in the Quran — 'You are the best nation.' Being the best isn't just personal — it's responsibility. The heap is the same — it puts the most important on top, but that's a duty — the best must be served first. Priority means responsibility."</div>`,
  senior:{
    title:"heapq vs sorted — কখন কোনটা?",
    body:`
    <p><strong>N-এর সব k বের করা:</strong> <code>heapq.nlargest(k, data)</code> — যদি k ছোট হয়।</p>
    <p><strong>পুরো list সাজানো:</strong> <code>sorted(data)</code> — যদি সব দরকার হয়।</p>
    <p><strong>Streaming top-K:</strong> যদি ডেটা একটানা আসে — heap। <code>heapq.heappush()</code> / <code>heapq.heappop()</code>।</p>
    <p><strong>Senior trap:</strong> <code>heapq</code> min-heap। Max-heat চাইলে সংখ্যা উল্টো করো (<code>-x</code>) বা key হিসেবে tuple ব্যবহার করো।</p>`
  },
  exercise:{
    hint:"heapq দিয়ে top-K retrieval — RAG-এর মতো!",
    starterCode:`# মসলা ব্যবসায়ীর তাক — Top-K with heapq
import heapq

# ৭টা document-এর relevance scores (RAG scenario)
documents = [
    ("AI Basics", 0.45),
    ("LLM Guide", 0.92),
    ("RAG Tutorial", 0.88),
    ("Cooking Tips", 0.12),
    ("Python Tips", 0.67),
    ("Vector Search", 0.95),
    ("Old News", 0.05),
]

# TODO 1: সেরা ৩টা document বের করো
# heapq.nlargest ব্যবহার করো
# মনে রাখো: key=lambda x: x[1] (score অনুযায়ী)
top3 = heapq.nlargest(3, documents, key=lambda x: x[1])
print("সেরা ৩টা document (Top-3):")
for name, score in top3:
    print(f"  {name}: {score}")

# TODO 2: সবচেয়ে কম relevant ২টা বের করো
# heapq.nsmallest ব্যবহার করো
worst2 = heapq.nsmallest(2, documents, key=lambda x: x[1])
print("\nসবচেয়ে কম relevant:")
for name, score in worst2:
    print(f"  {name}: {score}")

# BONUS: একটা priority queue বানাও
# heapq.heappush আর heappop দিয়ে
pq = []
heapq.heappush(pq, (2, "medium priority"))
heapq.heappush(pq, (1, "high priority"))  
heapq.heappush(pq, (3, "low priority"))

print("\nPriority Queue (ক্রমানুসারে):")
while pq:
    priority, task = heapq.heappop(pq)
    print(f"  Priority {priority}: {task}")
`
  }
});

// ── DOOR 4: GRAPHS ──
doors.push({
  num:4, icon:"🧵", color:"#36d6e7", name:"তাঁতির তাঁত",
  subtitle:"The Weaver's Loom", tech:"Graphs (BFS / DFS)",
  secret:"Graph = সম্পর্কের জাল। Adjacency list = প্রতিটা node তার প্রতিবেশী জানে। BFS = সবচেয়ে কাছের পথ।",
  recall:{
    q:"তাঁতি কেন পুরো কাপড় একসাথে দেখেন না, একটা সুতো ধরে হাঁটেন?",
    qen:"Why does the weaver not look at the whole cloth at once, but walks one thread?",
    a:"কারণ সম্পর্ক একটা সুতো ধরে চললে বোঝা যায়। BFS সবচেয়ে কাছের পথ খুঁজে — স্তরে স্তরে। DFS গভীরে যায় — এক সুতোয় শেষ পর্যন্ত। দুটোই ওয়াকথ্রু — কিন্তু ভিন্ন কৌশলে।",
    aen:"Because relationships are understood by following one thread. BFS finds the closest path — layer by layer. DFS goes deep — one thread to the end. Both are traversals — but different strategies."
  },
  story:`
<p class="scene-setting">চতুর্থ দোকান। তাঁতির কারখানা। সুতোর খসখস, রঙের বালতি, তাঁতের ছন্দ। বেগম জাইনাব কাজ করছেন — হাজার সুতো একসাথে, কিন্তু প্রতিটা সুতো একটা নোড থেকে আরেকটায় যায়। কোনো সুতো একটাই গন্তব্যে যায়, কোনোটা শাখা প্রশাখায় ছড়ায়। তাঁতের কাপড় আসলে একটা graph — নোড আর edge-এর জাল।</p>
<p class="scene-setting en">The fourth shop. The Weaver's workshop. Rustle of thread, buckets of dye, rhythm of the loom. Begum Zainab works — thousands of threads together, but each thread goes from one node to another. Some threads go to one destination, some branch into tributaries. The cloth on the loom is actually a graph — a web of nodes and edges.</p>

<div class="dialogue">মসলা ব্যবসায়ী বলেছিলেন — সেরাটা উপরে রাখা যায়। কিন্তু আমি বলি — কখনো সেরা লাগে না। কখনো লাগে পথ। A থেকে B কীভাবে যাব? কোন সুতো ধরে? এটাই graph-এর প্রশ্ন — সম্পর্ক আর পথ।</div>
<div class="dialogue en">"The spice merchant said — the best can be kept on top. But I say — sometimes you don't need the best. Sometimes you need a path. How to get from A to B? Which thread to follow? This is the graph's question — relationships and paths."</div>

<div class="dialogue">Graph হলো নোড (node) আর সম্পর্ক (edge)-এর সংগ্রহ। প্রতিটা নোড জানে তার প্রতিবেশী কারা — একে বলে adjacency list। ঢাকা → [চট্টগ্রাম, খুলনা, সিলেট]। চট্টগ্রাম → [ঢাকা, কক্সবাজার]। এভাবে প্রতিটা শহর তার প্রতিবেশী জানে।</div>
<div class="dialogue en">"A graph is a collection of nodes and edges. Each node knows its neighbors — this is called an adjacency list. Dhaka → [Chittagong, Khulna, Sylhet]. Chittagong → [Dhaka, Cox's Bazar]. Each city knows its neighbors."</p>

<div class="dialogue">পথ খোঁজার দুটো উপায়। BFS — প্রথমে সব কাছের প্রতিবেশী দেখো, তারপর এক ধাপ দূরে, তারপর আরও। স্তরে স্তরে। এটা সবচেয়ে কম ধাপের পথ দেয়। DFS — এক সুতো ধরে শেষ পর্যন্ত যাও, তারপর ফিরে এসে আরেকটা। গভীরে যাওয়া।</div>
<div class="dialogue en">"Two ways to find paths. BFS — first check all nearest neighbors, then one step further, then more. Layer by layer. This gives the path with fewest steps. DFS — follow one thread to the end, then come back and try another. Going deep."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার — graph তোমার সবকিছুতে। Knowledge graph: ধারণা আর তাদের সম্পর্ক। Agent workflow: এজেন্ট A → টুল B → এজেন্ট C — একটা DAG (directed acyclic graph)। RAG retrieval: প্রশ্ন থেকে সম্পর্কিত ডকুমেন্টে যাওয়া — graph traversal। সব সম্পর্ক, সব পথ।</div>
<div class="dialogue en">"You're an AI engineer — graphs are everywhere. Knowledge graphs: concepts and their relationships. Agent workflows: Agent A → Tool B → Agent C — a DAG. RAG retrieval: going from query to related documents — graph traversal. All relationships, all paths."</div>

<div class="code-block">BFS — Shortest Path (Python):

from collections import deque, defaultdict

graph = defaultdict(list)
graph['A'] = ['B', 'C']
graph['B'] = ['A', 'D', 'E']
graph['C'] = ['A', 'F']
graph['D'] = ['B']
graph['E'] = ['B', 'F']
graph['F'] = ['C', 'E']

def bfs(start, target):
    visited = set()
    queue = deque([(start, [start])])
    
    while queue:
        node, path = queue.popleft()
        if node == target:
            return path  # shortest path!
        if node not in visited:
            visited.add(node)
            for neighbor in graph[node]:
                queue.append((neighbor, path + [neighbor]))
    return None</div>

<div class="dialogue">উম্মাহ — সম্প্রদায়। কুরআনে আল্লাহ বলেন — "এই উম্মাহ তোমাদের জন্য এক সম্প্রদায়।" প্রতিটা মানুষ একটা নোড, সম্পর্ক হলো edge। কেউ একা নয় — সবাই সংযুক্ত। Graph হলো সেই সংযোগের গাণিতিক রূপ — সম্পর্কের জাল।</div>
<div class="dialogue en">"Ummah — community. Allah says in the Quran — 'This community is one community for you.' Each person is a node, relationships are edges. No one is alone — all connected. The graph is the mathematical form of that connection — the web of relationships."</div>`,
  senior:{
    title:"Adjacency List vs Matrix — কখন কোনটা?",
    body:`
    <p><strong>Adjacency List:</strong> <code>defaultdict(list)</code> — যখন graph sparse (বেশি নোড, কম edge)। মেমোরি কম লাগে। প্রতিটা node শুধু তার প্রতিবেশী রাখে।</p>
    <p><strong>Adjacency Matrix:</strong> <code>n×n</code> 2D array — যখন graph dense বা edge existence দ্রুত চেক করতে হয়। কিন্তু O(n²) মেমোরি।</p>
    <p><strong>Senior habit:</strong> ৯০% সময় adjacency list। <code>collections.defaultdict(list)</code> ব্যবহার করো — <code>graph[a].append(b)</code>। সহজ, পরিষ্কার, কার্যকর।</p>`
  },
  exercise:{
    hint:"BFS দিয়ে shortest path খুঁজি — agent workflow simulation!",
    starterCode:`# তাঁতির তাঁত — BFS Shortest Path
from collections import deque, defaultdict

# একটা "agent workflow" graph
# প্রতিটা node একটা step, edge হলো dependency
workflow = defaultdict(list)
workflow['start'] = ['fetch_data', 'validate']
workflow['fetch_data'] = ['preprocess']
workflow['validate'] = ['preprocess']
workflow['preprocess'] = ['model_inference']
workflow['model_inference'] = ['post_process', 'log']
workflow['post_process'] = ['response']
workflow['log'] = ['response']
workflow['response'] = []  # final node

def bfs_shortest_path(graph, start, target):
    """BFS দিয়ে সবচেয়ে ছোট পথ খুঁজি"""
    visited = set()
    # queue-তে (node, path) রাখি
    queue = deque([(start, [start])])
    
    while queue:
        current, path = queue.popleft()
        
        if current == target:
            return path  # পথ পেয়েছি!
        
        if current not in visited:
            visited.add(current)
            for neighbor in graph[current]:
                if neighbor not in visited:
                    queue.append((neighbor, path + [neighbor]))
    
    return None  # পথ নেই

# TODO: 'start' থেকে 'response' পর্যন্ত সবচেয়ে ছোট পথ খুঁজি
path = bfs_shortest_path(workflow, 'start', 'response')

if path:
    print(f"Agent workflow path ({len(path)} steps):")
    for i, step in enumerate(path):
        print(f"  Step {i}: {step}")
else:
    print("কোনো পথ নেই!")

# BONUS: নিজে একটা graph বানাও আর BFS চালাও
`
  }
});
