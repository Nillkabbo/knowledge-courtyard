// ════════════════════════════════════════════════════════════
// ALGORITHM CRAFTSMAN — DOORS 1-5
// 1. Big-O: Performance Budget     2. Recursion: Web Crawler
// 3. Arrays: Document Corpus       4. Linked Lists: Posting Lists
// 5. Two Pointers: AND Query
// ════════════════════════════════════════════════════════════
const doors = [];

// ── DOOR 1: BIG-O — THE PERFORMANCE BUDGET ──
doors.push({
  num:1, icon:"⏱️", color:"#f97316", name:"নির্মাণের হিসাব",
  subtitle:"The Builder's Budget", tech:"Big-O — Why O(n²) Kills a Search Engine",
  spirit:"হিসাব — accounting, from Quran 17:14 (read your account)",
  secret:"Big-O শুধু তত্ত্ব নয় — এটা বাজেট। সার্চ ইঞ্জিনে O(n²) মানে ১০০ ডকুমেন্টে ১০,০০০ কাজ, ১০,০০০ ডকুমেন্টে ১০ কোটি। O(log n) মানে একই ১০,০০০-তে মাত্র ১৩ কাজ।",
  recall:{
    q:"সার্চ ইঞ্জিনে O(n²) কেন ধ্বংসাত্মক? একটা সংখ্যা দাও।",
    qen:"Why is O(n²) catastrophic for a search engine? Give a number.",
    a:"১০,০০০ ডকুমেন্টে O(n²) = ১০ কোটি অপারেশন। O(log n) একই ডকুমেন্টে মাত্র ১৩ অপারেশন। পার্থক্য: ৭৬,৯২,৩০৮ গুণ। এটাই Big-O-এর ক্ষমতা।",
    aen:"10,000 docs at O(n²) = 100 million operations. At O(log n) = just 13 operations. The difference: 7.6 million times faster. That is the power of Big-O."
  },
  story:`
<p class="scene-setting">প্রথম দিন। কারখানায় ঢুকেই গন্ধ পেলে — তপ্ত ধাতু, তেল, ঘাম। উস্তাদ রাহিলা দাঁড়িয়ে আছেন একটা বিশাল টেবিলের সামনে। টেবিলে শত শত পিতলের গিয়ার, স্প্রিং, স্ক্রু — সব ছড়ানো। তার হাতে একটা খাতা, খাতায় দাগানো সংখ্যা। তিনি হিসাব করেন। নির্মাণের আগে হিসাব — এটাই তার নিয়ম। চোখে একটা চশমা, যেটা নাকের ডগায় বসে আছে, কপালে ঘামের দাগ।</p>
<p class="scene-setting en">Day one. You enter the workshop — the smell hits first: hot metal, oil, sweat. Ustad Rahila stands before a massive table covered in hundreds of brass gears, springs, screws. In her hand: a ledger, numbers scrawled inside. She calculates. Before building, the accounting — this is her rule. Glasses perched on the tip of her nose, a sweat mark on her forehead.</p>

<div class="dialogue">"বসো," উস্তাদ রাহিলা বললেন, খাতাটা তোমার দিকে ঘুরিয়ে। "আমরা একটা জ্ঞান অন্বেষণ যন্ত্র বানাবো। সার্চ ইঞ্জিন। কিন্তু নির্মাণের আগে একটা প্রশ্ন — কত কাজ লাগবে?" খাতায় দেখলে দুটো কলাম। বাঁ দিকে: অ্যালগরিদম। ডান দিকে: কাজের সংখ্যা।</div>
<div class="dialogue en">"Sit," Ustad Rahila said, turning the ledger toward you. "We will build a Knowledge Search Engine. But before construction, one question — how much work will it take?" The ledger shows two columns. Left: algorithm. Right: number of operations.</div>

<div class="dialogue">"Book ২ (অ্যালগরিদমের বাজার)-এর জ্যোতির্বিদ ফাহিম তোমাকে Big-O শিখিয়েছিলেন — ইনপুট বাড়লে কাজ কত দ্রুত বাড়ে। কিন্তু এখন দেখো — এটা শুধু তত্ত্ব নয়। এটা আমাদের বাজেট। ভুল অ্যালগরিদম বেছেলে যন্ত্রটা চলবে না। শুধু ধীর নয় — থেমে যাবে।"</div>
<div class="dialogue en">"Book 2's astrolabe maker Fahim taught you Big-O — how work scales as input grows. But now see — this is not theory. This is our budget. Choose the wrong algorithm and the engine will not run. Not just slow — it will stop."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> উস্তাদ রাহিলা একটা গল্প বললেন। "প্রথম সার্চ ইঞ্জিন আমি বানিয়েছিলাম O(n²) দিয়ে। ১০০ ডকুমেন্টে চমৎকার কাজ করলো। ১,০০০ ডকুমেন্টে ধীর। ১০,০০০ ডকুমেন্টে — ক্র্যাশ। কিন্তু ১০,০০০ ডকুমেন্ট তো কিছুই না! Google-এ ১০ ট্রিলিয়ন। O(n²) হলে সেটা ১০²² কাজ — মহাবিশ্বের চেয়ে বেশি সময় লাগবে।"</div></div>

<div class="code-block"># search_engine.py — Day 1: Performance Budget
import time

# ❌ WRONG: O(n²) — linear scan through every doc for every query term
def search_slow(docs, query):
    results = []
    for doc in docs:           # n docs
        for word in query:     # m query terms
            if word in doc:    # O(n) per word → total O(n*m)
                results.append(doc)
    return results

# Test with different corpus sizes
for size in [100, 1000, 10000]:
    docs = ["the algorithm sorts data"] * size
    query = ["algorithm", "sorts"]

    start = time.time()
    search_slow(docs, query)
    elapsed = time.time() - start
    print(f"  {size:&gt;6} docs → {elapsed:.4f}s")

# Output:
#     100 docs → 0.0001s   ← instant
#   1,000 docs → 0.0045s   ← still fast
#  10,000 docs → 0.4502s   ← HALF A SECOND for 10k docs!
# 100,000 docs → 45.0000s  ← 45 seconds. User already left.</div>

<div class="diagram">
  <div class="diag-title">Big-O স্কেলিং তুলনা — The Scaling Disaster</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#6b6588"/></marker>
    </defs>
    <!-- Axes -->
    <line x1="50" y1="240" x2="540" y2="240" stroke="#6b6588" stroke-width="1.5" marker-end="url(#arrowG)"/>
    <line x1="50" y1="240" x2="50" y2="20" stroke="#6b6588" stroke-width="1.5" marker-end="url(#arrowG)"/>
    <text x="535" y="258" fill="#9a93b8" font-size="11" font-family="monospace">docs (n)</text>
    <text x="15" y="25" fill="#9a93b8" font-size="11" font-family="monospace" transform="rotate(-90 15 25)">time</text>
    <!-- O(n²) curve — exponential disaster -->
    <path d="M 50 240 Q 200 235 300 200 Q 380 160 420 100 Q 450 50 460 20" fill="none" stroke="#ef4444" stroke-width="2.5"/>
    <text x="460" y="35" fill="#ef4444" font-size="11" font-weight="bold">O(n²) ☠️</text>
    <!-- O(n log n) curve -->
    <path d="M 50 240 Q 180 220 300 170 Q 380 140 440 120" fill="none" stroke="#fbbf24" stroke-width="2"/>
    <text x="430" y="135" fill="#fbbf24" font-size="11" font-weight="bold">O(n log n)</text>
    <!-- O(n) line -->
    <line x1="50" y1="240" x2="440" y2="80" stroke="#22d3ee" stroke-width="2"/>
    <text x="420" y="75" fill="#22d3ee" font-size="11" font-weight="bold">O(n)</text>
    <!-- O(log n) — nearly flat -->
    <path d="M 50 240 Q 100 200 200 175 Q 300 162 440 155" fill="none" stroke="#52c41a" stroke-width="2.5"/>
    <text x="420" y="150" fill="#52c41a" font-size="11" font-weight="bold">O(log n) ✅</text>
    <!-- O(1) flat -->
    <line x1="50" y1="225" x2="480" y2="225" stroke="#a78bfa" stroke-width="2" stroke-dasharray="4,3"/>
    <text x="440" y="220" fill="#a78bfa" font-size="11" font-weight="bold">O(1)</text>
    <!-- Budget threshold -->
    <line x1="50" y1="180" x2="540" y2="180" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
    <text x="400" y="175" fill="#ef4444" font-size="9" opacity="0.7">200ms budget limit</text>
  </svg>
  <div class="diag-cap">O(n²) মানে একটা সীমায় বিস্ফোরণ। O(log n) মানে প্রায় flat — ১০ গুণ ডেটায় সামান্য বাড়ে।</div>
</div>

<div class="dialogue">"দেখলে?" রাহিলা খাতা বন্ধ করলেন। "O(n²) মানে শুধু 'ধীর' নয়। এর মানে — যন্ত্রটা একটা সীমা পার হলেই মরে। আমাদের লক্ষ্য: প্রতিটা অপারেশন O(log n) বা O(1) এ আনা। সেই জন্যই আমাদের ইনডেক্স দরকার, হিস্ট দরকার, ট্রি দরকার। প্রতিটা ডেটা স্ট্রাকচার একটা কারণে।"</div>
<div class="dialogue en">"See?" Rahila closed the ledger. "O(n²) does not mean 'slow.' It means the engine has a kill threshold — pass it, and the engine dies. Our goal: bring every operation to O(log n) or O(1). That is why we need an index, a heap, a tree. Every data structure exists for a reason."</div>

<div class="secret-box">⏱️ Big-O = নির্মাণের বাজেট — প্রতিটা অ্যালগরিদম একটা দাম চোকায়। O(n²) = দেউলিয়া। O(log n) = টিকে থাকা।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>সার্চ ইঞ্জিনে Big-O-এর ৩টি স্তর:</strong></p>
<table class="kv-table">
<tr><th>অপারেশন</th><th>ভালো</th><th>মন্দ</th></tr>
<tr><td class="hl">ইনডেক্স লুকআপ</td><td>O(1) hash</td><td>O(n) scan</td></tr>
<tr><td class="hl">Term খোঁজা</td><td>O(log n) BST</td><td>O(n) linear</td></tr>
<tr><td class="hl">Top-K র‍্যাঙ্ক</td><td>O(k log n) heap</td><td>O(n log n) full sort</td></tr>
</table>
<p><strong>নিয়ম:</strong> ইউজার ২০০ms-এর বেশি অপেক্ষা করে না। প্রতিটা কোয়েরি অবশ্যই ২০০ms-এর মধ্যে শেষ হতে হবে। এটাই তোমার বাজেট।</p>`
  }
});
// ── DOOR 2: RECURSION — THE WEB CRAWLER ──
doors.push({
  num:2, icon:"🕷️", color:"#f97316", name:"মাকড়সার জাল",
  subtitle:"The Spider's Web", tech:"Recursion — How a Crawler Discovers Pages",
  spirit:"তাওয়াক্কুল — trust the process, from Quran 65:3 (whoever trusts, Allah is sufficient)",
  secret:"Crawler = recursion in disguise. fetch(page) → extract(links) → for each link: fetch(link). Base case: already visited OR no more links. এটাই DFS — গভীরে যাও, শাখা শেষ হলে ফিরো।",
  recall:{
    q:"ক্রলার কখন থামে? Base case কী?",
    qen:"When does the crawler stop? What is the base case?",
    a:"দুটো base case: ১) পেজটা আগে visit করা হয়েছে (visited set-এ আছে), ২) পেজে আর নতুন link নেই। এই দুটো ছাড়া recursion চলতেই থাকবে — stack overflow পর্যন্ত।",
    aen:"Two base cases: 1) page already visited (in visited set), 2) no new links on the page. Without these, recursion runs forever — until stack overflow."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দিন। কারখানায় ঢুকে দেখলে — ছাদে একটা বিশাল মাকড়সার জাল। রোদের রেখা জালের মাধ্যমে ছড়ায় — এক বিন্দু থেকে ছয়, প্রতিটা থেকে আরও ছয়। মাস্টার নকশাবিদ ইসহাক দাঁড়িয়ে আছেন জালের নিচে, হাতে একটা সুতোর গোলা। তার আঙুলগুলো দ্রুত কাজ করে — একটা জায়গা থেকে সুতো ছড়ায়, নতুন বিন্দুতে পৌঁছায়, সেখান থেকে আবার নতুন সুতো। চোখে একটা দৃষ্টি — সে শুধু সুতো দেখে না, সে দেখে সম্পর্কের জাল।</p>
<p class="scene-setting en">Day two. You enter and see — a massive spider web spanning the workshop ceiling. Sunlight scatters through its threads, each node branching to six more, and each of those to six more. Master designer Ishaq stands beneath the web, a ball of thread in his hand. His fingers move fast — thread spreads from one point, reaches a new node, and from there new threads branch. His eyes see not just thread — he sees the web of relationships.</p>

<div class="dialogue">"সার্চ ইঞ্জিনের প্রথম সমস্যা," ইসহাক বললেন, সুতোর একটা প্রান্ত ধরে — "কোথায় কী আছে? ইন্টারনেট হলো এই জাল — বিলিয়ন পেজ, প্রতিটা পেজ আরেকটাকে link করে। কিন্তু কেউ এই পেজগুলো খুঁজে বের করবে কীভাবে?" তিনি একটা পেজ ধরলেন — একটা কাগজের টুকরো। "এই নাও, শুরুর পেজ। এখন দেখো — এই পেজে কতগুলো link আছে। প্রতিটা link একটা নতুন পেজের দিকে যায়। সেই পেজেও link আছে। সেই পেজেও... এটাই recursion।"</div>
<div class="dialogue en">"The search engine's first problem," Ishaq said, holding one end of a thread — "where is everything? The internet is this web — billions of pages, each linking to others. But who discovers them?" He picked up a page — a piece of paper. "Here, the starting page. Now see — this page has links. Each link leads to a new page. That page also has links. That page too... this is recursion."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> "প্রথম ক্রলার আমি লুপ দিয়ে বানিয়েছিলাম," ইসহাক স্বীকার করলেন। "while লুপ, queue-তে link রাখা, একটা একটা করে process করা। কাজ করলো — কিন্তু একই page-এ আবার আবার ঢুকে গেলো। ক্রলার একটা page-এ ঢুকে → link পেলো → সেই link-এ গেলো → সেখান থেকে আবার প্রথম page-এ ফিরে এলো → infinite loop। ক্রলার কখনো থামলো না। Server crash। কারণ: base case ভুলে গেছি।"</div></div>

<div class="code-block"># crawler.py — Day 2: Recursive Web Crawler
# The crawler fetches pages, extracts links, follows each link.
# This is DFS (depth-first search) on the web graph.

visited = set()  # CRITICAL: track visited pages (base case!)

def crawl(url, depth=0):
    # ── BASE CASES ──
    if url in visited:
        return []           # already seen — stop
    if depth &gt; 3:            # depth limit — prevent infinite recursion
        return []

    visited.add(url)
    print(f"{'  ' * depth}📄 Fetching: {url}")

    # ── RECURSIVE CASE ──
    # fetch page → extract links → recurse on each link
    links = extract_links(url)  # pretend this fetches the page

    pages_found = [url]
    for link in links:
        pages_found.extend(crawl(link, depth + 1))

    return pages_found

# Extract links from a fake page (in real life: HTTP request + HTML parser)
def extract_links(url):
    # Simulating: each page has links to other pages
    web = {
        'home.html':     ['about.html', 'blog.html', 'contact.html'],
        'about.html':    ['team.html', 'home.html'],
        'blog.html':     ['post1.html', 'post2.html', 'home.html'],
        'contact.html':  ['home.html'],
        'team.html':     ['about.html', 'home.html'],
        'post1.html':    ['blog.html'],
        'post2.html':    ['blog.html'],
    }
    return web.get(url, [])

# Run the crawler
all_pages = crawl('home.html')
print(f"\\n✅ Discovered {len(all_pages)} pages:")
for p in all_pages:
    print(f"   {p}")

# Output:
# 📄 Fetching: home.html
#   📄 Fetching: about.html
#     📄 Fetching: team.html
#   📄 Fetching: blog.html
#     📄 Fetching: post1.html
#     📄 Fetching: post2.html
#   📄 Fetching: contact.html
# ✅ Discovered 7 pages</div>

<div class="dialogue">"Book ২-এর আরবেস্ক খোদাইকারী (Door ২) recursion শিখিয়েছিলেন — base case + recursive case। এখন দেখলে? Base case ছাড়া crawler একটা infinite loop। কিন্তু সঠিক base case দিলে — সে পুরো ইন্টারনেট ম্যাপ করতে পারে। recursion শুধু ফাংশন নিজেকে ডাকে না — recursion হলো বিশ্বকে আবিষ্কার করার উপায়।"</div>

<div class="diagram">
  <div class="diag-title">Crawler Recursion Tree — DFS প্রতিটা Page-এ নামে</div>
  <svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg">
    <!-- Root -->
    <circle cx="280" cy="30" r="22" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="2"/>
    <text x="280" y="35" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">home</text>
    <!-- Level 1 -->
    <line x1="280" y1="52" x2="130" y2="100" stroke="#f97316" stroke-width="1.5" opacity="0.6"/>
    <line x1="280" y1="52" x2="280" y2="100" stroke="#f97316" stroke-width="1.5" opacity="0.6"/>
    <line x1="280" y1="52" x2="430" y2="100" stroke="#f97316" stroke-width="1.5" opacity="0.6"/>
    <circle cx="130" cy="115" r="20" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
    <text x="130" y="119" text-anchor="middle" fill="#fbbf24" font-size="9">about</text>
    <circle cx="280" cy="115" r="20" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
    <text x="280" y="119" text-anchor="middle" fill="#fbbf24" font-size="9">blog</text>
    <circle cx="430" cy="115" r="20" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
    <text x="430" y="119" text-anchor="middle" fill="#fbbf24" font-size="9">contact</text>
    <!-- Level 2 -->
    <line x1="130" y1="135" x2="80" y2="185" stroke="#f97316" stroke-width="1" opacity="0.4"/>
    <line x1="130" y1="135" x2="180" y2="185" stroke="#f97316" stroke-width="1" opacity="0.4"/>
    <line x1="280" y1="135" x2="230" y2="185" stroke="#f97316" stroke-width="1" opacity="0.4"/>
    <line x1="280" y1="135" x2="330" y2="185" stroke="#f97316" stroke-width="1" opacity="0.4"/>
    <circle cx="80" cy="200" r="18" fill="rgba(249,115,22,0.08)" stroke="#f97316" stroke-width="1"/>
    <text x="80" y="204" text-anchor="middle" fill="#9a93b8" font-size="8">team</text>
    <circle cx="180" cy="200" r="18" fill="rgba(239,68,68,0.08)" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="180" y="204" text-anchor="middle" fill="#ef4444" font-size="8">home 🔒</text>
    <circle cx="230" cy="200" r="18" fill="rgba(249,115,22,0.08)" stroke="#f97316" stroke-width="1"/>
    <text x="230" y="204" text-anchor="middle" fill="#9a93b8" font-size="8">post1</text>
    <circle cx="330" cy="200" r="18" fill="rgba(249,115,22,0.08)" stroke="#f97316" stroke-width="1"/>
    <text x="330" y="204" text-anchor="middle" fill="#9a93b8" font-size="8">post2</text>
    <!-- Visited annotation -->
    <rect x="15" y="245" width="250" height="35" rx="8" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.2)" stroke-width="1"/>
    <text x="25" y="262" fill="#ef4444" font-size="10" font-weight="bold">🔒 home = visited</text>
    <text x="25" y="275" fill="#9a93b8" font-size="9">Base case: url in visited → return []</text>
    <!-- Path annotation -->
    <rect x="290" y="245" width="250" height="35" rx="8" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="300" y="262" fill="#52c41a" font-size="10" font-weight="bold">✅ 7 pages discovered</text>
    <text x="300" y="275" fill="#9a93b8" font-size="9">Depth limit: 3 levels max</text>
  </svg>
  <div class="diag-cap">Crawler home → about → team (dead end) → blog → post1, post2 → contact। 🔒 = ইতিমধ্যে visited, base case।</div>
</div>
<div class="dialogue en">"Book 2's arabesque carver (Door 2) taught you recursion — base case + recursive case. Now see? Without a base case, the crawler is an infinite loop. But with the right base case — it can map the entire internet. Recursion is not just a function calling itself. It is how you discover the world."</div>

<div class="secret-box">🕷️ Crawler = recursion: fetch → extract → recurse. Base case = visited set. ছাড়া এটা চলতেই থাকবে।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>বাস্তব ক্রলারের ৩টি সুরক্ষা:</strong></p>
<ul class="checklist">
<li><strong>visited set</strong> — একই URL দুবার visit নয়</li>
<li><strong>depth limit</strong> — ৩-৫ স্তর পর্যন্ত, না হলে stack overflow</li>
<li><strong>rate limiting</strong> — একই server-এ সেকেন্ডে ১ request, না হলে ban</li>
</ul>
<p><strong>Cross-ref:</strong> Book ৩৫ (Distributed Systems) Door ৫-এ Lamport clock দেখবে — ক্রলার যখন distributed হয়, কে কোন page আগে fetch করেছে তা ঠিক করতে।</p>`
  }
});

// ── DOOR 3: ARRAYS — DOCUMENT CORPUS STORAGE ──
doors.push({
  num:3, icon:"📚", color:"#fb923c", name:"গ্রন্থাগারের তাক",
  subtitle:"The Library Shelves", tech:"Arrays — Storing the Document Corpus",
  spirit:"সাফায়া — arrangement/ordering, from Quran 73:20 (regular arrangement)",
  secret:"ডকুমেন্ট সংরক্ষণ = অ্যারে। O(1) access by index। কিন্তু insertion O(n) — মাঝে ঢুকালে সব সরাতে হয়। তাই dynamic list দরকার, সার্চ ইঞ্জিনে page append হয়।",
  recall:{
    q:"অ্যারেতে কেন O(1) access কিন্তু O(n) insertion?",
    qen:"Why O(1) access but O(n) insertion in an array?",
    a:"অ্যারে = ধারাবাহিক মেমোরি। index জানলে সরাসরি যাও (address + index * size)। কিন্তু মাঝে ঢুকাতে হলে পরের সব এলিমেন্ট এক ঘর ডানে সরাতে হয় — O(n)। তাই append সস্তা, insert দামি।",
    aen:"Array = contiguous memory. Known index = direct jump (address + index * size). But inserting in the middle requires shifting all later elements right — O(n). Append is cheap, insert is expensive."
  },
  story:`
<p class="scene-setting">তৃতীয় দিন। গ্রন্থাগারিক ফাতেমা কারখানায় এসে হাজির। তার সাথে একটা বইয়ের তাক — পাঁচটা তাক, প্রতিটায় ২০টা বই। প্রতিটা বই একটা ওয়েব পেজ। তার হাতে একটা খাতা — প্রতিটা বইয়ের নাম্বার লেখা। বই নাম্বার ৩? সে তাকিয়ে এক নিয়ে পেয়ে গেলো। বই নাম্বার ৪৭? তাক ধরে গুনে গুনে বের করতে হলো। তার চোখে ধৈর্য — কিন্তু চশমার পাশ দিয়ে একটা চিন্তার রেখা।</p>
<p class="scene-setting en">Day three. Librarian Fatima arrives at the workshop. She brings a bookshelf — five shelves, twenty books each. Each book is a web page. In her hand: a ledger with every book numbered. Book number 3? She glances and grabs it instantly. Book number 47? She has to count along the shelves. Her eyes hold patience — but a line of worry beside her glasses.</p>

<div class="dialogue">ক্রলার পেজ খুঁজে এনেছে, ফাতেমা বললেন, বইগুলো তাকে সাজাতে সাজাতে। এখন সেগুলো কোথায় রাখবো? এটাই আমার কাজ। আমি গ্রন্থাগারিক। আমার নিয়ম: প্রতিটা বই একটা নাম্বার পাবে — ০, ১, ২, ৩...। নাম্বার দিলে সরাসরি তাক থেকে নাও। O(1)। কিন্তু...</div>
<div class="dialogue en">The crawler found pages, Fatima said, arranging books on the shelf. Now where do we store them? That is my job. I am a librarian. My rule: each book gets a number — 0, 1, 2, 3... Given a number, grab it directly from the shelf. O(1). But...</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> ফাতেমা একটা সমস্যায় পড়লেন। আমি প্রথমে একটা সাধারণ অ্যারে বানালাম — ১০০টা স্লট। তারপর নতুন পেজ আসলো। কোথায় রাখবো? শেষে। কিন্তু যদি alphabetically সাজাতে হয়? মাঝে ঢুকাতে হলে — ৫০টা বই ডানে সরাও। ১০০,০০০ বই হলে ৫০,০০০ বই সরাও। O(n)। এটা চলবে না।</div></div>

<div class="code-block"># corpus.py — Day 3: Document Corpus Storage
# Each crawled page is stored in an array (list in Python).
# Direct index access = O(1). Insertion at end = O(1) amortized.

class DocumentCorpus:
    def __init__(self):
        self.docs = []          # the array (Python list)
        self.url_to_id = {}     # URL to doc ID (built in Door 12)

    def add_document(self, url, title, content):
        """Add a page to the corpus. Returns the doc ID."""
        doc_id = len(self.docs)  # next available slot
        self.docs.append({
            'id': doc_id,
            'url': url,
            'title': title,
            'content': content,
            'length': len(content.split())
        })
        return doc_id

    def get_document(self, doc_id):
        """O(1) access by index — direct memory address."""
        return self.docs[doc_id]

    def size(self):
        return len(self.docs)

# Usage:
corpus = DocumentCorpus()
corpus.add_document('home.html', 'Home',
    'Welcome to our search engine tutorial about algorithms')
corpus.add_document('about.html', 'About',
    'Learn about our team and mission to build great software')
corpus.add_document('blog.html', 'Blog',
    'Read our latest posts on Python data structures and algorithms')

print(f"Corpus: {corpus.size()} documents")
print(f"Doc 0: {corpus.get_document(0)['title']}")  # O(1) access!
print(f"Doc 2: {corpus.get_document(2)['title']}")  # O(1) access!

# Output:
# Corpus: 3 documents
# Doc 0: Home
# Doc 2: Blog</div>

<div class="dialogue">Book ২-এর টালি নির্মাতা (Door ৩) অ্যারে শিখিয়েছিলেন — ধারাবাহিক স্থান, O(1) access। এখন দেখলে কেন সার্চ ইঞ্জিনে অ্যারে দরকার? কারণ প্রতিটা doc একটা ID পায় — সেই ID দিয়ে সরাসরি access। কিন্তু insertion মাঝে নয় — শেষে। এটাই append-only corpus।</div>

<div class="diagram">
  <div class="diag-title">Array Memory Layout — O(1) Access vs O(n) Insert</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <!-- Array cells -->
    <rect x="40" y="30" width="80" height="55" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="80" y="55" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">Home</text>
    <text x="80" y="72" text-anchor="middle" fill="#9a93b8" font-size="9">id=0</text>
    <rect x="125" y="30" width="80" height="55" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="165" y="55" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">About</text>
    <text x="165" y="72" text-anchor="middle" fill="#9a93b8" font-size="9">id=1</text>
    <rect x="210" y="30" width="80" height="55" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="250" y="55" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">Blog</text>
    <text x="250" y="72" text-anchor="middle" fill="#9a93b8" font-size="9">id=2</text>
    <rect x="295" y="30" width="80" height="55" rx="6" fill="rgba(82,196,26,0.1)" stroke="#52c41a" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="335" y="55" text-anchor="middle" fill="#52c41a" font-size="11" font-weight="bold">+ New</text>
    <text x="335" y="72" text-anchor="middle" fill="#52c41a" font-size="9">append O(1)</text>
    <!-- Access arrow -->
    <line x1="165" y1="100" x2="165" y2="125" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrowTeal)"/>
    <defs><marker id="arrowTeal" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#22d3ee"/></marker></defs>
    <text x="200" y="120" fill="#22d3ee" font-size="10" font-weight="bold">get_document(1) → O(1)</text>
    <!-- Memory addresses -->
    <text x="80" y="150" text-anchor="middle" fill="#6b6588" font-size="8" font-family="monospace">0x100</text>
    <text x="165" y="150" text-anchor="middle" fill="#6b6588" font-size="8" font-family="monospace">0x180</text>
    <text x="250" y="150" text-anchor="middle" fill="#6b6588" font-size="8" font-family="monospace">0x200</text>
    <text x="335" y="150" text-anchor="middle" fill="#6b6588" font-size="8" font-family="monospace">0x280</text>
    <!-- Contiguous memory bar -->
    <rect x="40" y="160" width="335" height="8" rx="3" fill="url(#memGrad)"/>
    <defs><linearGradient id="memGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#52c41a"/></linearGradient></defs>
    <text x="207" y="185" text-anchor="middle" fill="#9a93b8" font-size="9">ধারাবাহিক মেমোরি — contiguous</text>
    <!-- Middle insert warning -->
    <rect x="40" y="210" width="490" height="40" rx="8" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.2)" stroke-width="1"/>
    <text x="55" y="228" fill="#ef4444" font-size="10" font-weight="bold">⚠️ Middle Insert = O(n)</text>
    <text x="55" y="242" fill="#9a93b8" font-size="9">মাঝে ঢুকালে পরের সব element ডানে সরাতে হয় — append-only হও</text>
  </svg>
  <div class="diag-cap">Array: index জানলে সরাসরি মেমোরি address (base + id * size)। O(1) read, O(1) append, O(n) insert।</div>
</div>
<div class="dialogue en">Book 2 tile maker (Door 3) taught you arrays — contiguous space, O(1) access. Now you see why search engines need arrays? Each doc gets an ID — direct access by ID. But never insert in the middle — always at the end. This is an append-only corpus.</div>

<div class="secret-box">📚 Corpus = append-only array। doc_id = array index। O(1) access, O(1) append, O(n) middle insert।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>কর্পাস ডিজাইনের নিয়ম:</strong></p>
<ul class="checklist">
<li>append-only — নতুন doc সবসময় শেষে যোগ করো</li>
<li>doc_id = array index — কখনো delete করো না, tombstone রেখো</li>
<li>content field-এ raw text রাখো — tokenization পরে (Door ১২)</li>
</ul>
<p><strong>Cross-ref:</strong> Book ৩৯ (Databases) Door ৩-এ columnar storage দেখবে — যখন corpus বড় হয়, content/title/url আলাদা column-এ যায়।</p>`
  }
});

// ── DOOR 4: LINKED LISTS — POSTING LISTS ──
doors.push({
  num:4, icon:"🔗", color:"#fb923c", name:"শৃঙ্খলের মালা",
  subtitle:"The Chain of Beads", tech:"Linked Lists — Posting Lists for Term-to-Doc Mapping",
  spirit:"সিলসিলা — chain, from Quran 3:103 (hold fast to the rope of Allah together)",
  secret:"Posting list = linked list of doc IDs। প্রতিটা node: doc_id + pointer to next। কেন linked list? কারণ terms-এ doc যোগ হতে থাকে — dynamic। Array হলে resize লাগবে। Linked list: O(1) append।",
  recall:{
    q:"পোস্টিং লিস্ট কেন linked list, অ্যারে কেন নয়?",
    qen:"Why is a posting list a linked list and not an array?",
    a:"কারণ নতুন doc যোগ হতে থাকে। অ্যারে হলে resize করতে হবে (O(n) copy)। Linked list-এ শেষে যোগ করো — O(1)। আর merge করা সহজ — AND query-তে দুটো posting list merge করা লাগে (Door ৫)।",
    aen:"Because new docs keep being added. Array needs resizing (O(n) copy). Linked list: append at tail — O(1). And merging is easy — AND queries need to merge two posting lists (Door 5)."
  },
  story:`
<p class="scene-setting">চতুর্থ দিন। জুয়েলার মাহমুদ এসে হাজির। তার হাতে একটা মুক্তার মালা — প্রতিটা মুক্তা একটা ছোট চাবির মতো, সুতো দিয়ে গাঁথা। প্রতিটা মুক্তা একটা ডকুমেন্ট, তিনি বললেন। এই মালাটা হলো algorithm শব্দের পোস্টিং লিস্ট — কোন কোন ডকুমেন্টে এই শব্দটা আছে। তিনি মালাটা ধরলেন — একটা মুক্তা, তারপর পরেরটা, তারপর পরেরটা। প্রতিটা মুক্তা পরেরটার দিকে ইশারা করে।</p>
<p class="scene-setting en">Day four. Jeweler Mahmud arrives. In his hand: a pearl necklace — each pearl like a small key, strung on thread. Each pearl is a document, he said. This necklace is the posting list for the word algorithm — which documents contain this word. He held the necklace — one pearl, then the next, then the next. Each pearl points to the one after it.</p>

<div class="dialogue">গ্রন্থাগারিক ফাতেমা (Door ৩) ডকুমেন্ট সাজিয়ে রেখেছেন। কিন্তু এখন সমস্যা — ইউজার algorithm লিখে সার্চ করলে কোন কোন ডকুমেন্টে এই শব্দ আছে, সেটা কীভাবে জানবো? মাহমুদ একটা মুক্তা ধরলেন। প্রতিটা শব্দের জন্য একটা মালা — চেইন। প্রতিটা node-এ doc_id। এটাই posting list।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> মাহমুদ প্রথমে অ্যারে দিয়ে চেষ্টা করেছিলেন — ১০০টা স্লট। নতুন doc আসলে মাঝে insert করতে হয়। কিন্তু অ্যারে resize = O(n) copy। ১ লক্ষ doc হলে প্রতিবার ১ লক্ষ copy। Server আটকে গেলো। সমাধান: linked list। শেষে append — O(1)। কোনো copy নেই।</div></div>
<div class="dialogue en">Librarian Fatima (Door 3) arranged the documents. But now the problem — when a user searches algorithm, how do we know which documents contain this word? Mahmud held up a pearl. For each word, a necklace — a chain. Each node holds a doc_id. This is the posting list.</div>

<div class="code-block"># posting_list.py — Day 4: Linked List Posting Lists
# Each term maps to a linked list of doc IDs that contain it.

class PostingNode:
    """One node in the posting list — a doc ID + pointer to next."""
    def __init__(self, doc_id):
        self.doc_id = doc_id
        self.next = None

class PostingList:
    """Linked list of doc IDs for a single term."""
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def add(self, doc_id):
        """Append a doc ID — O(1) at tail."""
        node = PostingNode(doc_id)
        if self.tail:
            self.tail.next = node
        else:
            self.head = node
        self.tail = node
        self.size += 1

    def to_list(self):
        """Convert to Python list for display — O(n)."""
        result = []
        node = self.head
        while node:
            result.append(node.doc_id)
            node = node.next
        return result

# Build posting lists for our corpus
# Term "algorithm" appears in docs 0, 1, 2
pl_algorithm = PostingList()
pl_algorithm.add(0)
pl_algorithm.add(1)
pl_algorithm.add(2)

# Term "python" appears in docs 0, 2
pl_python = PostingList()
pl_python.add(0)
pl_python.add(2)

print(f"'algorithm' to docs: {pl_algorithm.to_list()}")  # [0, 1, 2]
print(f"'python'   to docs: {pl_python.to_list()}")      # [0, 2]
print(f"'algorithm' appears in {pl_algorithm.size} docs")

# Output:
# 'algorithm' to docs: [0, 1, 2]
# 'python'   to docs: [0, 2]
# 'algorithm' appears in 3 docs</div>

<div class="dialogue">Book ২-এর মুক্তোর মালা কারিগর (Door ৪) linked list শিখিয়েছিলেন — প্রতিটা node পরেরটার ঠিকানা জানে। এখন দেখলে কেন? কারণ সার্চ ইঞ্জিনে প্রতিটা শব্দের জন্য একটা চেইন — কোন কোন page-এ এই শব্দ আছে। এটাই inverted index-এর মূল উপাদান। Door ১২-এ আমরা এটাকে hash map-এ বসাবো।</div>

<div class="diagram">
  <div class="diag-title">Linked List Posting List — প্রতিটা Node-এ Pointer</div>
  <svg viewBox="0 0 580 220" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#f97316"/></marker></defs>
    <!-- Term label -->
    <rect x="10" y="80" width="100" height="40" rx="8" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="60" y="105" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="bold">algorithm</text>
    <!-- Arrow to first node -->
    <line x1="110" y1="100" x2="145" y2="100" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#arrowOrange)"/>
    <!-- Node 1 -->
    <rect x="150" y="75" width="70" height="50" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <line x1="185" y1="75" x2="185" y2="125" stroke="#f97316" stroke-width="1" opacity="0.4"/>
    <text x="167" y="95" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">doc 0</text>
    <text x="205" y="95" text-anchor="middle" fill="#f97316" font-size="14">→</text>
    <text x="167" y="115" text-anchor="middle" fill="#9a93b8" font-size="8">data</text>
    <text x="205" y="115" text-anchor="middle" fill="#9a93b8" font-size="8">next</text>
    <!-- Arrow -->
    <line x1="225" y1="100" x2="260" y2="100" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrowOrange)"/>
    <!-- Node 2 -->
    <rect x="265" y="75" width="70" height="50" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <line x1="300" y1="75" x2="300" y2="125" stroke="#f97316" stroke-width="1" opacity="0.4"/>
    <text x="282" y="95" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">doc 1</text>
    <text x="320" y="95" text-anchor="middle" fill="#f97316" font-size="14">→</text>
    <text x="282" y="115" text-anchor="middle" fill="#9a93b8" font-size="8">data</text>
    <text x="320" y="115" text-anchor="middle" fill="#9a93b8" font-size="8">next</text>
    <!-- Arrow -->
    <line x1="340" y1="100" x2="375" y2="100" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrowOrange)"/>
    <!-- Node 3 -->
    <rect x="380" y="75" width="70" height="50" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <line x1="415" y1="75" x2="415" y2="125" stroke="#f97316" stroke-width="1" opacity="0.4"/>
    <text x="397" y="95" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">doc 2</text>
    <text x="435" y="95" text-anchor="middle" fill="#9a93b8" font-size="12">∅</text>
    <text x="397" y="115" text-anchor="middle" fill="#9a93b8" font-size="8">data</text>
    <text x="435" y="115" text-anchor="middle" fill="#9a93b8" font-size="8">null</text>
    <!-- Append annotation -->
    <rect x="150" y="155" width="300" height="40" rx="8" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="300" y="172" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">Append doc 3 = O(1)</text>
    <text x="300" y="186" text-anchor="middle" fill="#9a93b8" font-size="8">শেষ node-এর pointer আডজাস্ট</text>
  </svg>
  <div class="diag-cap">Posting list: term → [doc 0] → [doc 1] → [doc 2] → null। প্রতিটা node পরেরটার pointer ধরে। O(1) append।</div>
</div>
<div class="dialogue en">Book 2 pearl necklace maker (Door 4) taught you linked lists — each node knows the next address. Now you see why? Because in a search engine, each word has a chain — which pages contain it. This is the core element of the inverted index. In Door 12 we will put this into a hash map.</div>

<div class="secret-box">🔗 Posting list = linked list। term → node → node → node। প্রতিটা node-এ doc_id। O(1) append।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>পোস্টিং লিস্টের উন্নতি (পরের দরজাগুলোতে):</strong></p>
<table class="kv-table">
<tr><th>Feature</th><th>Door</th><th>উন্নতি</th></tr>
<tr><td class="hl">doc_id only</td><td>৪ (এই দরজা)</td><td>Basic linked list</td></tr>
<tr><td class="hl">+ term frequency</td><td>১৩</td><td>Ranking signal</td></tr>
<tr><td class="hl">+ position</td><td>৯</td><td>Phrase matching</td></tr>
<tr><td class="hl">gap encoding</td><td>১৮</td><td>Compression</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book ৩৫ (Distributed Systems)-এ Dynamo-style consistent hashing দেখবে — যখন posting list গুলো একাধিক server-এ ছড়ানো থাকে।</p>`
  }
});

// ── DOOR 5: TWO POINTERS — AND QUERY INTERSECTION ──
doors.push({
  num:5, icon:"🔀", color:"#fb923c", name:"দুই আঙুলের চাল",
  subtitle:"Two Fingers Walk", tech:"Two Pointers — Posting List Intersection for AND Queries",
  spirit:"ইজতিমা — gathering together, from Quran 62:9 (gather for remembrance)",
  secret:"AND query = posting list intersection। দুটো sorted list, দুটো pointer, একসাথে হাঁটো। match → save, advance both। no match → advance smaller। O(n+m) — nested loop O(n*m) নয়।",
  recall:{
    q:"AND query-তে কেন two pointer, nested loop কেন নয়?",
    qen:"Why two pointers for AND query, not nested loop?",
    a:"Posting lists sorted। দুটো pointer একসাথে হাঁটে — ছোটটা এগিয়ে যায়। match পেলে save। O(n+m) — কারণ প্রতিটা element সর্বোচ্চ একবার visit হয়। Nested loop হলে O(n*m) — প্রতিটা এলিমেন্ট বারবার চেক হয়।",
    aen:"Posting lists are sorted. Two pointers walk together — the smaller advances. On match, save. O(n+m) — each element visited at most once. Nested loop would be O(n*m) — every element checked repeatedly."
  },
  story:`
<p class="scene-setting">পঞ্চম দিন। ক্যালিগ্রাফার জয়নুল এসে হাজির। তার হাতে দুটো কাগজের স্ক্রল — একটায় লেখা algorithm শব্দের posting list, অন্যটায় python শব্দের। প্রতিটা স্ক্রলে doc ID গুলো সাজানো — ছোট থেকে বড়। তিনি বাঁ হাতের একটা আঙুল একটা স্ক্রলে রাখলেন, ডান হাতের একটা আঙুল অন্যটায়। ইউজার লিখেছে algorithm python — দুটো শব্দ। AND query। মানে যে যে ডকুমেন্টে দুটো শব্দই আছে, সেগুলো দেখাও।</p>
<p class="scene-setting en">Day five. Calligrapher Zainul arrives. In his hands: two paper scrolls — one lists the posting list for algorithm, the other for python. Each scroll has doc IDs sorted smallest to largest. He places one finger on each scroll. The user typed algorithm python — two words. AND query. Show documents that contain BOTH words.</p>

<div class="dialogue">ভুল উপায়, জয়নুল বললেন, একটা স্ক্রল ধরে। প্রতিটা doc-এর জন্য অন্য স্ক্রলে খুঁজো — nested loop। কাজ করবে, কিন্তু O(n*m)। ১০,০০০ * ১০,০০০ = ১০ কোটি তুলনা। তিনি মাথা নাড়লেন। আমার উপায়: দুটো আঙুল। বাঁ আঙুল algorithm লিস্টে, ডান আঙুল python লিস্টে। দুটোই sorted। একসাথে হাঁটো।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> জয়নুল প্রথমে nested loop দিয়ে AND query বানিয়েছিলেন। ১০,০০০ docs * ১০,০০০ docs = ১০ কোটি তুলনা। প্রতিটা সার্চে ৪৫ সেকেন্ড। ইউজার ২০০ms পরে চলে যায়। তারপর তিনি বুঝলেন — দুটো list-ই sorted। দুটো pointer একসাথে হাঁটালে O(n+m) হয়। ১০,০০০ + ১০,০০০ = ২০,০০০ তুলনা। ৫,০০০ গুণ দ্রুত।</div></div>
<div class="dialogue en">Wrong way, Zainul said, holding one scroll. For each doc, search the other scroll — nested loop. Works, but O(n*m). 10,000 * 10,000 = 100 million comparisons. He shook his head. My way: two fingers. Left on algorithm list, right on python list. Both sorted. Walk together.</div>

<div class="code-block"># query_and.py — Day 5: Two-Pointer AND Query Intersection
# User searches "algorithm python" -&gt; find docs containing BOTH terms.
# Both posting lists are sorted -&gt; two pointers merge in O(n+m).

def intersect(list_a, list_b):
    """
    Find documents in BOTH posting lists.
    Two-pointer walk: O(n + m), not O(n * m).

    list_a: [0, 1, 2, 5, 7]      &lt;- 'algorithm' docs
    list_b: [0, 2, 3, 5, 8]      &lt;- 'python' docs
    result: [0, 2, 5]             &lt;- docs with BOTH
    """
    result = []
    i, j = 0, 0  # two pointers

    while i &lt; len(list_a) and j &lt; len(list_b):
        if list_a[i] == list_b[j]:
            # MATCH — both lists have this doc
            result.append(list_a[i])
            i += 1
            j += 1
        elif list_a[i] &lt; list_b[j]:
            # list_a is behind — advance it
            i += 1
        else:
            # list_b is behind — advance it
            j += 1

    return result

# Posting lists from our corpus (Door 4)
docs_algorithm = [0, 1, 2]    # 'algorithm' appears in docs 0,1,2
docs_python   = [0, 2]        # 'python' appears in docs 0,2

# User searches: "algorithm python" (AND query)
results = intersect(docs_algorithm, docs_python)
print(f"algorithm AND python -&gt; docs: {results}")

# Trace the two-pointer walk:
# Step 1: i=0,j=0 -&gt; a[0]=0 == b[0]=0 -&gt; MATCH! result=[0], i=1,j=1
# Step 2: i=1,j=1 -&gt; a[1]=1 &lt;  b[1]=2 -&gt; advance i -&gt; i=2
# Step 3: i=2,j=1 -&gt; a[2]=2 == b[1]=2 -&gt; MATCH! result=[0,2], i=3,j=2
# Step 4: i=3 -&gt; out of bounds -&gt; done. result = [0, 2]

# Output:
# algorithm AND python -&gt; docs: [0, 2]

# Complexity: O(n + m) = O(3 + 2) = 5 comparisons
# vs nested loop: O(n * m) = O(3 * 2) = 6 comparisons
# With 10k docs each: O(20,000) vs O(100,000,000) — 5000x faster!</div>

<div class="dialogue">Book ২-এর ক্যালিগ্রাফারের মাপকাঠি (Door ১৩) two pointers শিখিয়েছিলেন। এখন দেখলে কেন সার্চ ইঞ্জিনে এটা জীবন বাঁচায়? AND query হলো সবচেয়ে কমন সার্চ — ইউজার দুটো শব্দ লেখে। প্রতিটা AND query O(n+m)-এ চলে — nested loop নয়।</div>

<div class="diagram">
  <div class="diag-title">Two-Pointer AND Query Walk — O(n+m) Intersection</div>
  <svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg">
    <!-- List A header -->
    <text x="30" y="30" fill="#fbbf24" font-size="11" font-weight="bold">'algorithm' → [0, 1, 2, 5, 7]</text>
    <!-- List A cells -->
    <rect x="30" y="40" width="45" height="35" rx="5" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="52" y="62" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">0</text>
    <rect x="80" y="40" width="45" height="35" rx="5" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="102" y="62" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">1</text>
    <rect x="130" y="40" width="45" height="35" rx="5" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="152" y="62" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">2</text>
    <rect x="180" y="40" width="45" height="35" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.5"/>
    <text x="202" y="62" text-anchor="middle" fill="#9a93b8" font-size="12">5</text>
    <rect x="230" y="40" width="45" height="35" rx="5" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.5"/>
    <text x="252" y="62" text-anchor="middle" fill="#9a93b8" font-size="12">7</text>
    <!-- Pointer i -->
    <text x="52" y="92" text-anchor="middle" fill="#22d3ee" font-size="11" font-weight="bold">↑ i</text>
    <!-- List B header -->
    <text x="30" y="120" fill="#22d3ee" font-size="11" font-weight="bold">'python' → [0, 2, 3, 5, 8]</text>
    <!-- List B cells -->
    <rect x="30" y="130" width="45" height="35" rx="5" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" stroke-width="1.5"/>
    <text x="52" y="152" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="bold">0</text>
    <rect x="80" y="130" width="45" height="35" rx="5" fill="rgba(34,211,238,0.06)" stroke="#22d3ee" stroke-width="1" opacity="0.5"/>
    <text x="102" y="152" text-anchor="middle" fill="#9a93b8" font-size="12">2</text>
    <rect x="130" y="130" width="45" height="35" rx="5" fill="rgba(34,211,238,0.06)" stroke="#22d3ee" stroke-width="1" opacity="0.5"/>
    <text x="152" y="152" text-anchor="middle" fill="#9a93b8" font-size="12">3</text>
    <rect x="180" y="130" width="45" height="35" rx="5" fill="rgba(34,211,238,0.06)" stroke="#22d3ee" stroke-width="1" opacity="0.5"/>
    <text x="202" y="152" text-anchor="middle" fill="#9a93b8" font-size="12">5</text>
    <rect x="230" y="130" width="45" height="35" rx="5" fill="rgba(34,211,238,0.06)" stroke="#22d3ee" stroke-width="1" opacity="0.5"/>
    <text x="252" y="152" text-anchor="middle" fill="#9a93b8" font-size="12">8</text>
    <!-- Pointer j -->
    <text x="52" y="182" text-anchor="middle" fill="#22d3ee" font-size="11" font-weight="bold">↑ j</text>
    <!-- Match highlight -->
    <rect x="25" y="35" width="55" height="135" rx="8" fill="none" stroke="#52c41a" stroke-width="2" stroke-dasharray="5,3"/>
    <text x="280" y="80" fill="#52c41a" font-size="11" font-weight="bold">← MATCH!</text>
    <text x="280" y="95" fill="#52c41a" font-size="9">a[0]==b[0] → save, advance both</text>
    <!-- Result -->
    <rect x="30" y="210" width="500" height="55" rx="8" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="45" y="230" fill="#52c41a" font-size="10" font-weight="bold">Result: [0, 2, 5]</text>
    <text x="45" y="247" fill="#9a93b8" font-size="8">Step1: 0==0 ✓ → Step2: 1&lt;2 i++ → Step3: 2==2 ✓</text>
    <text x="45" y="259" fill="#9a93b8" font-size="8">O(n+m) = 10 steps — vs O(n*m) = 25 steps</text>
  </svg>
  <div class="diag-cap">দুটো pointer একসাথে হাঁটে — ছোটটা এগোয়, match হলে save। O(n+m) — nested loop O(n*m) নয়।</div>
</div>
<div class="dialogue en">Book 2 calligrapher ruler (Door 13) taught you two pointers. Now you see why this saves lives in a search engine? AND query is the most common search — users type two words. Each AND query runs in O(n+m) — not nested loops.</div>

<div class="secret-box">🔀 AND query = two-pointer intersection। Sorted lists, দুটো pointer, O(n+m)। ছোটটা এগোয়, match হলে save।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>AND query-র তিন ধরন:</strong></p>
<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Nested Loop</div>O(n * m) — প্রতিটা a-এর জন্য পুরো b scan। ১০কে * ১০কে = ১০ কোটি।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Two Pointers</div>O(n + m) — sorted lists, দুটো pointer একসাথে হাঁটে। ১০কে + ১০কে = ২০ হাজার।</div>
</div>
<p><strong>Cross-ref:</strong> Book ৩৩ (Critical Thinking) Door ৬-এ Fermi estimation দেখবে — কেন O(n+m) vs O(n*m) পার্থক্য বাস্তবে গুরুত্বপূর্ণ তা অনুমান করতে।</p>`
  }
});
