// ════════════════════════════════════════════════════════════
// ALGORITHM CRAFTSMAN — DOORS 11-15
// 11. Stacks/Queues: Query Parser + Crawler Frontier
// 12. Hash Maps: The Inverted Index (THE HEART)
// 13. Heaps: Top-K Results Ranking
// 14. Trees (BST): Sorted Term Dictionary
// 15. Trie: Autocomplete
// ════════════════════════════════════════════════════════════

// ── DOOR 11: STACKS & QUEUES — QUERY PARSER + CRAWLER FRONTIER ──
doors.push({
  num:11, icon:"📂", color:"#fbbf24", name:"তাক ও সারি",
  subtitle:"Stack and Line", tech:"Stacks & Queues — Query Bracket Parser + Crawler FIFO Frontier",
  spirit:"সাবর — patient ordering, from Quran 103:3 (enjoin patience)",
  secret:"Stack = bracket matching (query parser)। Queue = crawler frontier (FIFO)। Stack: শেষে রাখা প্রথম বেরোয় — ভাঙা-গড়া। Queue: যে আগে এসেছে সে আগে যায় — সুবিচার।",
  recall:{
    q:"কোয়েরি পার্সারে stack কেন, queue কেন নয়?",
    qen:"Why a stack for query parsing, not a queue?",
    a:"কারণ bracket matching-এ সবচেয়ে ভেতরের bracket আগে বন্ধ হয় — LIFO। ( a + ( b * c ) ) — ভেতরের () আগে, বাইরের () পরে। Stack এটাকে স্বাভাবিকভাবে হ্যান্ডেল করে। Queue হলে ভেতরের আগে নয়, প্রথমটা আগে — ভুল।",
    aen:"Because bracket matching closes inner brackets first — LIFO. ( a + ( b * c ) ) — inner () first, outer () last. Stack handles this naturally. Queue would process first-in-first — wrong."
  },
  story:`
<p class="scene-setting">একাদশ দিন। দুইজন এলেন — মালিক রুকুন (স্ট্যাক-মাস্টার) ও কাফেলা সরদার তারিক (কিউ-মাস্টার)। রুকুনের সামনে একটা উঁচু তাক — প্রতিটা থালা আগেরটার উপরে বসে। সবচেয়ে উপরের থালাটা আগে নামে। তারিকের সামনে একটা লম্বা সারি — কাফেলার মানুষ, যে আগে এসেছে সে আগে যায়। দুজনে দুরকম কাজ করেন — কিন্তু দুজনেই দরজার কারিগর।</p>
<p class="scene-setting en">Day eleven. Two arrive — Master Rukun (stack master) and Caravan Leader Tariq (queue master). Before Rukun: a tall stack of plates — each plate sits on the previous. The top plate comes off first. Before Tariq: a long line of people — whoever arrived first leaves first. Two different jobs — but both are door craftsmen.</p>

<div class="dialogue">রুকুন বললেন, একটা থালা তুলে। ইউজারের কোয়েরি: (algorithm OR (python AND sort))। এই কোয়েরিতে nested brackets আছে। আমার কাজ: প্রতিটা ( দেখলে থালায় রাখো। প্রতিটা ) দেখলে সবচেয়ে উপরের থালা নামাও। এটাই bracket matching — stack। ভুল হলে? থালা খালি হয়ে গেলে বা শেষে থালা বেঁচে থাকলে — unbalanced।</div>
<div class="dialogue en">Rukun said, lifting a plate. User query: (algorithm OR (python AND sort)). This query has nested brackets. My job: every ( I see, put a plate. Every ) I see, remove the top plate. This is bracket matching — a stack. Error? If plates run out or remain at the end — unbalanced.</div>

<div class="dialogue">তারিক বললেন, তার সারি দেখিয়ে। ক্রলার (Door ২)-এর recursion দেখেছো? কিন্তু recursion দিয়ে ক্রল করলে একটা branch-এ অনেক গভীরে চলে যাবে — বাকি branch-গুলো অপেক্ষা করবে। আমার উপায়: FIFO queue। প্রতিটা নতুন URL সারির শেষে যোগ করো। প্রতিটা fetch-এ সারির সামনে থেকে নাও। এটাই BFS — সব শাখা একসাথে এগোয়।</div>
<div class="dialogue en">Tariq said, showing his line. You saw the crawler (Door 2) with recursion? But recursion goes deep into one branch — other branches wait. My approach: FIFO queue. Each new URL joins the back. Each fetch takes from the front. This is BFS — all branches advance together.</div>

<div class="code-block"># stack_queue.py — Day 11: Query Parser (Stack) + Crawler Frontier (Queue)

# ── PART 1: STACK — Query Bracket Validator ──
def validate_query(query):
    """
    Check if query brackets are balanced using a stack.
    "(algorithm OR (python AND sort))" → valid
    "(algorithm OR python"              → invalid (unclosed)
    """
    stack = []
    pairs = {'(': ')', '[': ']', '{': '}'}

    for char in query:
        if char in pairs:  # opening bracket
            stack.append(char)
        elif char in pairs.values():  # closing bracket
            if not stack:
                return False  # closing bracket with empty stack
            top = stack.pop()
            if pairs[top] != char:
                return False  # mismatched bracket type

    return len(stack) == 0  # stack must be empty at end

# Test queries
queries = [
    "(algorithm OR (python AND sort))",     # valid
    "(algorithm OR python",                  # invalid — unclosed
    "((nested AND deep) OR wide)",           # valid
    ")reverse(",                             # invalid — closing first
]

for q in queries:
    valid = validate_query(q)
    print(f"  {'✅' if valid else '❌'} {q}")

# ── PART 2: QUEUE — Crawler BFS Frontier ──
from collections import deque

def crawl_bfs(start_url, web_graph, max_pages=10):
    """
    BFS crawler using a FIFO queue.
    Fairer than DFS — visits nearby pages before going deep.
    """
    queue = deque([start_url])
    visited = set()
    order = []

    while queue and len(visited) &lt; max_pages:
        url = queue.popleft()   # FIFO — front of queue
        if url in visited:
            continue

        visited.add(url)
        order.append(url)
        print(f"  📄 {url}")

        # Add all linked pages to back of queue
        for link in web_graph.get(url, []):
            if link not in visited:
                queue.append(link)

    return order

# Test BFS crawler
web = {
    'home':   ['about', 'blog', 'contact'],
    'about':  ['team', 'home'],
    'blog':   ['post1', 'post2'],
    'contact':['home'],
    'team':   ['about'],
    'post1':  ['blog'],
    'post2':  ['blog'],
}

print("\\nBFS crawl order:")
crawl_bfs('home', web)

# Output (BFS — breadth first, level by level):
#   📄 home
#   📄 about
#   📄 blog
#   📄 contact
#   📄 team
#   📄 post1
#   📄 post2

# Compare with DFS (Door 2) which would go:
#   home → about → team → blog → post1 → post2 → contact

# Output:
#   ✅ (algorithm OR (python AND sort))
#   ❌ (algorithm OR python
#   ✅ ((nested AND deep) OR wide)
#   ❌ )reverse(
#
# BFS crawl order:
#   📄 home, about, blog, contact, team, post1, post2</div>

<div class="dialogue">Book ২-এর কাফেলার সারি (Door ৫) stack ও queue শিখিয়েছিলেন — LIFO ও FIFO। এখন দেখলে সার্চ ইঞ্জিনে দুটোই দরকার: stack দিয়ে query validate করো, queue দিয়ে crawler BFS-এ চালাও। DFS (recursion, Door ২) গভীরে যায়, BFS (queue) প্রশস্ত হয়। সার্চ ইঞ্জিনে দুটোই ব্যবহৃত হয়।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> রুকুন প্রথমে query validation ছাড়াই সার্চ চালাতেন। ইউজার লিখলো (algorithm python — বন্ধনী খোলা, বন্ধ নয়। Parser crash। তারপর তিনি stack যোগ করলেন — ( দেখলে push, ) দেখলে pop। শেষে stack খালি? Valid। নয়? Error। একই নিয়ম HTML tag matching-এ কাজ করে।</div></div>

<div class="diagram">
  <div class="diag-title">Stack (LIFO) vs Queue (FIFO) — দুটো ভিন্ন নিয়ম</div>
  <svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrSQ" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6" fill="#f97316"/></marker></defs>
    <!-- Stack (left) -->
    <text x="120" y="25" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">Stack (LIFO)</text>
    <text x="120" y="40" text-anchor="middle" fill="#9a93b8" font-size="9">শেষে রাখা প্রথম বেরোয়</text>
    <!-- Stack base -->
    <rect x="60" y="200" width="120" height="25" rx="4" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1"/>
    <text x="120" y="217" text-anchor="middle" fill="#9a93b8" font-size="9">(</text>
    <rect x="60" y="170" width="120" height="25" rx="4" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
    <text x="120" y="187" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">( algorithm</text>
    <rect x="60" y="140" width="120" height="25" rx="4" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="2"/>
    <text x="120" y="157" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">( python AND</text>
    <!-- Push/pop arrows -->
    <line x1="200" y1="50" x2="185" y2="140" stroke="#52c41a" stroke-width="2" marker-end="url(#arrSQ)"/>
    <text x="210" y="60" fill="#52c41a" font-size="9" font-weight="bold">push (</text>
    <line x1="185" y1="140" x2="200" y2="50" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrSQ)" opacity="0.6"/>
    <text x="210" y="110" fill="#ef4444" font-size="9" font-weight="bold">pop → )</text>
    <!-- Queue (right) -->
    <text x="400" y="25" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="bold">Queue (FIFO)</text>
    <text x="400" y="40" text-anchor="middle" fill="#9a93b8" font-size="9">যে আগে এসেছে সে আগে যায়</text>
    <!-- Queue cells -->
    <rect x="320" y="120" width="50" height="30" rx="4" fill="rgba(34,211,238,0.15)" stroke="#22d3ee" stroke-width="1.5"/>
    <text x="345" y="140" text-anchor="middle" fill="#22d3ee" font-size="9" font-weight="bold">home</text>
    <rect x="370" y="120" width="50" height="30" rx="4" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" stroke-width="1"/>
    <text x="395" y="140" text-anchor="middle" fill="#22d3ee" font-size="9">about</text>
    <rect x="420" y="120" width="50" height="30" rx="4" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" stroke-width="1" opacity="0.7"/>
    <text x="445" y="140" text-anchor="middle" fill="#22d3ee" font-size="9">blog</text>
    <rect x="470" y="120" width="50" height="30" rx="4" fill="rgba(34,211,238,0.06)" stroke="#22d3ee" stroke-width="1" opacity="0.5"/>
    <text x="495" y="140" text-anchor="middle" fill="#9a93b8" font-size="9">+new</text>
    <!-- Enqueue (back) -->
    <line x1="520" y1="90" x2="500" y2="120" stroke="#52c41a" stroke-width="2" marker-end="url(#arrSQ)"/>
    <text x="510" y="85" fill="#52c41a" font-size="8" font-weight="bold">enqueue</text>
    <!-- Dequeue (front) -->
    <line x1="320" y1="150" x2="305" y2="175" stroke="#ef4444" stroke-width="2" marker-end="url(#arrSQ)"/>
    <text x="270" y="185" fill="#ef4444" font-size="8" font-weight="bold">dequeue</text>
    <!-- Labels -->
    <text x="345" y="165" text-anchor="middle" fill="#ef4444" font-size="8" font-weight="bold">FRONT</text>
    <text x="495" y="110" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">BACK</text>
    <!-- Use cases -->
    <rect x="20" y="210" width="250" height="50" rx="6" fill="rgba(251,191,36,0.06)" stroke="rgba(251,191,36,0.2)" stroke-width="1"/>
    <text x="30" y="227" fill="#fbbf24" font-size="9" font-weight="bold">Stack: query bracket matching</text>
    <text x="30" y="240" fill="#9a93b8" font-size="8">( → push, ) → pop → check balance</text>
    <text x="30" y="252" fill="#9a93b8" font-size="8">LIFO: সবচেয়ে ভেতরের bracket আগে বন্ধ</text>
    <rect x="290" y="210" width="250" height="50" rx="6" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.2)" stroke-width="1"/>
    <text x="300" y="227" fill="#22d3ee" font-size="9" font-weight="bold">Queue: crawler BFS frontier</text>
    <text x="300" y="240" fill="#9a93b8" font-size="8">home → about → blog → (fair order)</text>
    <text x="300" y="252" fill="#9a93b8" font-size="8">FIFO: সব page সমান সুযোগ পায়</text>
  </svg>
  <div class="diag-cap">Stack = থালার স্তূপ (LIFO), Queue = লাইন (FIFO)। সার্চ ইঞ্জিনে দুটোই জরুরি।</div>
</div>
<div class="dialogue en">Book 2 caravan line (Door 5) taught you stacks and queues — LIFO and FIFO. Now you see a search engine needs both: stack to validate queries, queue to run the crawler in BFS. DFS (recursion, Door 2) goes deep, BFS (queue) goes broad. Both are used in real search engines.</div>

<div class="secret-box">📂 Stack = query parser (bracket matching, LIFO)। Queue = crawler frontier (BFS, FIFO)। সার্চ ইঞ্জিনে দুটোই মৌলিক।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>কখন stack, কখন queue?</strong></p>
<table class="kv-table">
<tr><th>সমস্যা</th><th>Structure</th><th>কেন</th></tr>
<tr><td class="hl">Bracket matching</td><td>Stack</td><td>ভেতরের bracket আগে বন্ধ — LIFO</td></tr>
<tr><td class="hl">Crawler frontier</td><td>Queue</td><td>সব page সমান সুযোগ — FIFO</td></tr>
<tr><td class="hl">Undo/Redo</td><td>Stack</td><td>সাম্প্রতিক action আগে undo</td></tr>
<tr><td class="hl">Task scheduling</td><td>Queue</td><td>প্রথম-আসা প্রথম-কাজ</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book ৩৮ (Operating Systems) Door ৩-এ CPU scheduler দেখবে — ready queue-র বাস্তব প্রয়োগ। Book ৪৫ (Compilers) Door ২-এ shift-reduce parser দেখবে — stack-based parsing।</p>`
  }
});

// ── DOOR 12: HASH MAPS — THE INVERTED INDEX (THE HEART) ──
doors.push({
  num:12, icon:"🔑", color:"#fbbf24", name:"তালার ভাণ্ডার",
  subtitle:"The Locksmith's Vault", tech:"Hash Maps — The Inverted Index, Heart of Every Search Engine",
  spirit:"ফিহরিস্ত — catalog/index, the first library catalogs were built by Islamic scholars",
  secret:"Inverted index = hash map। key = term, value = posting list (Door ৪)। এটাই সার্চ ইঞ্জিনের হৃদপিণ্ড। O(1) lookup — কোন শব্দ কোন ডকুমেন্টে আছে। এটাই Google, Elasticsearch, Lucene-এর মূল।",
  recall:{
    q:"Inverted index কেন 'inverted'? সাধারণ index থেকে পার্থক্য কী?",
    qen:"Why is it called 'inverted' index? How is it different from a forward index?",
    a:"Forward index: doc_id → [word1, word2, ...] (কোন ডকুমেন্টে কোন শব্দ)। Inverted index: word → [doc1, doc2, ...] (কোন শব্দ কোন কোন ডকুমেন্টে)। 'Inverted' কারণ এটা forward index-কে উল্টে দেয়। সার্চে আমরা word থেকে doc খুঁজি, তাই inverted দরকার।",
    aen:"Forward index: doc_id to [words]. Inverted index: word to [doc_ids]. Inverted because it flips the forward index. In search, we look up docs by word, so inverted is what we need."
  },
  story:`
<p class="scene-setting">দ্বাদশ দিন। তালা নির্মাতা করিম এসে হাজির। সবচেয়ে গুরুত্বপূর্ণ দিন। তার সামনে হাজার হাজার চাবি — প্রতিটা চাবিতে একটা শব্দ খোদাই করা। প্রতিটা চাবি একটা বাক্স খোলে, আর সেই বাক্সে একটা মুক্তার মালা (posting list, Door ৪)। করিম বললেন — এটাই সার্চ ইঞ্জিনের হৃদপিণ্ড। ইনভার্টেড ইনডেক্স। তার হাতে একটা হাতুড়ি, চোখে গর্ব — কারণ তিনি জানেন, এই একটা ডেটা স্ট্রাকচার ছাড়া সার্চ ইঞ্জিন অসম্ভব।</p>
<p class="scene-setting en">Day twelve. Locksmith Karim arrives. The most important day. Before him: thousands of keys — each key engraved with a word. Each key opens a box, and inside each box: a pearl necklace (posting list, Door 4). Karim said — this is the heart of the search engine. The inverted index. In his hand: a hammer. In his eyes: pride — because he knows, without this one data structure, a search engine is impossible.</p>

<div class="dialogue">করিম বললেন, একটা চাবি তুলে। গ্রন্থাগারিক ফাতেমা (Door ৩) ডকুমেন্ট সাজিয়েছে। জুয়েলার মাহমুদ (Door ৪) posting list বানিয়েছে। কিন্তু সেগুলো কীভাবে খুঁজবো? ইউজার 'algorithm' লিখলে — কোন চাবি ঘুরাবো? আমার ভাণ্ডার: hash map। key = শব্দ, value = posting list। O(1) lookup। শব্দ দাও, চাবি ঘুরাও, বাক্স খোলো — ভেতরে কোন কোন ডকুমেন্টে এই শব্দ আছে।</div>
<div class="dialogue en">Karim said, lifting a key. Librarian Fatima (Door 3) stored the documents. Jeweler Mahmud (Door 4) built posting lists. But how do we find them? User types 'algorithm' — which key to turn? My vault: a hash map. Key = word, value = posting list. O(1) lookup. Give the word, turn the key, open the box — inside, which documents contain this word.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> করিম প্রথমে forward index বানিয়েছিলেন — doc_id থেকে word list। কিন্তু সার্চ করতে গিয়ে দেখলেন: প্রতিটা সার্চে পুরো ইনডেক্স scan করতে হয় — O(n)। ১০ লক্ষ ডকুমেন্ট হলে ১০ লক্ষ scan। তারপর তিনি উল্টে দিলেন — word থেকে doc_id। এটাই inverted index। এখন 'algorithm' খুঁজলে O(1)-এ চাবি পাও, তারপর posting list পাও।</div></div>

<div class="code-block"># inverted_index.py — Day 12: The Inverted Index (THE HEART)
# This is the single most important data structure in search.
# Lucene, Elasticsearch, Google — all use this.

class InvertedIndex:
    """
    The inverted index: term → posting list (doc IDs).
    Build it once from the corpus, then query it O(1) per term.
    """
    def __init__(self):
        self.index = {}  # hash map: term → list of doc_ids

    def build_from_corpus(self, corpus):
        """
        Build the inverted index from a document corpus.
        This is what happens when you 'index' a website.
        """
        for doc in corpus:
            doc_id = doc['id']
            # Tokenize: split content into words, lowercase, deduplicate
            words = set(doc['content'].lower().split())

            for word in words:
                if word not in self.index:
                    self.index[word] = []  # new posting list
                self.index[word].append(doc_id)  # add doc to posting list

        # Sort each posting list (for two-pointer AND queries in Door 5)
        for word in self.index:
            self.index[word].sort()

    def search(self, term):
        """O(1) lookup — the magic of hash maps."""
        return self.index.get(term.lower(), [])

    def search_and(self, terms):
        """AND query: docs containing ALL terms (uses Door 5 two-pointer)."""
        posting_lists = [self.search(t) for t in terms]
        if not posting_lists or not all(posting_lists):
            return []

        # Intersect all posting lists using two-pointer
        result = posting_lists[0]
        for pl in posting_lists[1:]:
            result = self._intersect(result, pl)
        return result

    def _intersect(self, list_a, list_b):
        """Two-pointer intersection from Door 5."""
        result, i, j = [], 0, 0
        while i &lt; len(list_a) and j &lt; len(list_b):
            if list_a[i] == list_b[j]:
                result.append(list_a[i])
                i += 1; j += 1
            elif list_a[i] &lt; list_b[j]:
                i += 1
            else:
                j += 1
        return result

# ══ BUILD THE SEARCH ENGINE ══
corpus = [
    {'id': 0, 'url': 'home.html', 'title': 'Home',
     'content': 'Welcome to our search engine tutorial about algorithms'},
    {'id': 1, 'url': 'about.html', 'title': 'About',
     'content': 'Learn about our team and mission to build great software'},
    {'id': 2, 'url': 'blog.html', 'title': 'Blog',
     'content': 'Read our latest posts on Python data structures and algorithms'},
]

index = InvertedIndex()
index.build_from_corpus(corpus)

# Single term search — O(1)!
print("Search 'algorithm':", index.search('algorithm'))
print("Search 'python':", index.search('python'))
print("Search 'missing':", index.search('missing'))

# AND query — uses two-pointer intersection!
print("\\nAND 'algorithms python':", index.search_and(['algorithms', 'python']))

# The complete inverted index:
print("\\nFull index:")
for term, docs in sorted(index.index.items()):
    print(f"  '{term}' → docs {docs}")

# Output:
# Search 'algorithm': [0]
# Search 'python': [2]
# Search 'missing': []
#
# AND 'algorithms python': [2]
#
# Full index:
#   'about' → docs [0, 1]
#   'algorithms' → docs [0, 2]
#   'build' → docs [1]
#   'data' → docs [2]
#   'engine' → docs [0]
#   'great' → docs [1]
#   ... (all unique words mapped to their docs)</div>

<div class="dialogue">Book ২-এর তালা নির্মাতার ভাণ্ডার (Door ৬) hash map শিখিয়েছিলেন — key → value, O(1) lookup। এখন দেখলে সার্চ ইঞ্জিনে এটা কেন সবচেয়ে গুরুত্বপূর্ণ? কারণ প্রতিটা সার্চ কোয়েরি এই hash map-ে আসে। term দাও → posting list পাও। এটাই inverted index। এটাই Lucene, Elasticsearch, Google-এর মূল ডেটা স্ট্রাকচার।</div>

<div class="diagram">
  <div class="diag-title">Inverted Index — The Heart of Search (Hash Map: term → posting list)</div>
  <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrIdx" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#f97316"/></marker></defs>
    <!-- Hash function -->
    <rect x="20" y="20" width="120" height="35" rx="6" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="80" y="42" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="bold">hash('algorithm')</text>
    <line x1="140" y1="37" x2="175" y2="37" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#arrIdx)"/>
    <!-- Bucket -->
    <rect x="180" y="15" width="140" height="45" rx="8" fill="rgba(249,115,22,0.08)" stroke="#f97316" stroke-width="1.5"/>
    <text x="250" y="35" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">bucket #42</text>
    <text x="250" y="50" text-anchor="middle" fill="#9a93b8" font-size="9">term: 'algorithm'</text>
    <!-- Arrow down to posting list -->
    <line x1="250" y1="60" x2="250" y2="90" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrIdx)"/>
    <!-- Posting list -->
    <text x="30" y="105" fill="#fbbf24" font-size="10" font-weight="bold">Posting List (sorted doc IDs):</text>
    <!-- Doc nodes -->
    <rect x="30" y="115" width="50" height="35" rx="5" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="1.5"/>
    <text x="55" y="137" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">doc 0</text>
    <line x1="80" y1="132" x2="100" y2="132" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrIdx)"/>
    <rect x="105" y="115" width="50" height="35" rx="5" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="1.5"/>
    <text x="130" y="137" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">doc 1</text>
    <line x1="155" y1="132" x2="175" y2="132" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrIdx)"/>
    <rect x="180" y="115" width="50" height="35" rx="5" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="1.5"/>
    <text x="205" y="137" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">doc 2</text>
    <!-- Other terms -->
    <line x1="250" y1="65" x2="400" y2="65" stroke="#a78bfa" stroke-width="1" opacity="0.3" stroke-dasharray="3,2"/>
    <rect x="400" y="15" width="140" height="45" rx="8" fill="rgba(34,211,238,0.06)" stroke="#22d3ee" stroke-width="1" opacity="0.6"/>
    <text x="470" y="35" text-anchor="middle" fill="#22d3ee" font-size="10">bucket #87</text>
    <text x="470" y="50" text-anchor="middle" fill="#9a93b8" font-size="9">term: 'python'</text>
    <line x1="470" y1="60" x2="470" y2="90" stroke="#22d3ee" stroke-width="1" opacity="0.4" marker-end="url(#arrIdx)"/>
    <rect x="420" y="115" width="50" height="35" rx="5" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" stroke-width="1.5"/>
    <text x="445" y="137" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="bold">doc 0</text>
    <line x1="470" y1="150" x2="470" y2="170" stroke="#22d3ee" stroke-width="1" opacity="0.4" marker-end="url(#arrIdx)"/>
    <rect x="420" y="175" width="50" height="35" rx="5" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" stroke-width="1.5"/>
    <text x="445" y="197" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="bold">doc 2</text>
    <!-- Lookup annotation -->
    <rect x="20" y="225" width="520" height="65" rx="8" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="35" y="245" fill="#52c41a" font-size="10" font-weight="bold">⚡ Lookup = O(1)</text>
    <text x="35" y="260" fill="#9a93b8" font-size="9">search('algorithm') → hash → bucket → posting list → [0, 1, 2]</text>
    <text x="35" y="275" fill="#9a93b8" font-size="9">search('python') → hash → bucket → posting list → [0, 2]</text>
  </svg>
  <div class="diag-cap">Inverted index: term → hash → bucket → sorted posting list। O(1) lookup। এটাই সার্চ ইঞ্জিনের হৃদপিণ্ড।</div>
</div>
<div class="dialogue en">Book 2 locksmith vault (Door 6) taught you hash maps — key to value, O(1) lookup. Now you see why this is the most important part of a search engine? Because every search query hits this hash map. Give a term, get a posting list. This IS the inverted index. This IS the core data structure of Lucene, Elasticsearch, and Google.</div>

<div class="secret-box">🔑 Inverted index = hash map: term → posting list। O(1) lookup। এটাই সার্চ ইঞ্জিনের হৃদপিণ্ড। বাকি সব এর চারপাশে ঘোরে।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>বাস্তব ইনভার্টেড ইনডেক্সে কী থাকে:</strong></p>
<table class="kv-table">
<tr><th>Component</th><th>Our Book</th><th>Real World</th></tr>
<tr><td class="hl">Term dict</td><td>Python dict</td><td>FST (Finite State Transducer)</td></tr>
<tr><td class="hl">Posting list</td><td>Python list</td><td>Compressed skip list</td></tr>
<tr><td class="hl">Per doc</td><td>doc_id only</td><td>doc_id + TF + positions + payload</td></tr>
<tr><td class="hl">Storage</td><td>RAM</td><td>Memory-mapped files (mmap)</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book ১০ (RAG Mastery) Door ৪-এ vector index দেখবে — inverted index-এর semantic সংস্করণ। Book ৩৯ (Databases) Door ৬-এ B+ tree index দেখবে — relational DB-তে একই ধারণা। Book ৪৪ (Data Engineering)-এ ETL pipeline দেখবে — কীভাবে ইনডেক্স batch build করা যায়।</p>`
  }
});

// ── DOOR 13: HEAPS — TOP-K RESULTS RANKING ──
doors.push({
  num:13, icon:"📊", color:"#fbbf24", name:"মসলা ব্যবসায়ীর তাক",
  subtitle:"The Spice Merchant's Shelves", tech:"Heaps & Priority Queues — Top-K Results Ranking",
  spirit:"তাফদীল — prioritization/ranking, the Quran ranks good deeds by merit",
  secret:"Top-K = min-heap of size K। প্রতিটা result-কে score করো, heap-এ রাখো। K-তলায় পৌঁছালে সবচেয়ে কম score-ওয়ালাকে বের করো। শেষে heap-এ সেরা Kটা থাকে। O(n log k) — পুরো sort O(n log n) নয়।",
  recall:{
    q:"Top-K তে full sort কেন নয়, heap কেন?",
    qen:"Why use a heap for Top-K instead of full sort?",
    a:"Full sort: O(n log n) — সব result sort করো, তারপর প্রথম K নাও। Heap: O(n log k) — শুধু K-সাইজের heap রাখো, প্রতিটা নতুন result-এ heap-এ ঢুকাও, ছোট গুলো বের করো। ১০০০ ফলাফলে top-10 হলে: O(1000 log 1000)=10000 vs O(1000 log 10)=3000। তিনগুণ দ্রুত।",
    aen:"Full sort: O(n log n) — sort everything, take first K. Heap: O(n log k) — keep a size-K heap, insert each result, evict the smallest. 1000 results, top-10: O(10000) vs O(3000). Three times faster."
  },
  story:`
<p class="scene-setting">ত্রয়োদশ দিন। মসলা ব্যবসায়ী সালেহ এসে হাজির। তার দোকানে শত শত মসলার বয়াম — কিন্তু সবচেয়ে দামি ১০টা বয়াম সবসময় সামনের তাকে। প্রতিটা বয়ামের গায়ে দাম লেখা। নতুন বয়াম এলে সালেহ তাকে দেখেন — সামনের তাকের সবচেয়ে সস্তা বয়ামের চেয়ে দামি? হ্যাঁ হলে বিনিময় করো। না হলে পিছনে রাখো। এটাই heap — সবচেয়ে কম গুরুত্বপূর্ণ সবসময় উপরে, যাতে সহজে বের করা যায়।</p>
<p class="scene-setting en">Day thirteen. Spice merchant Saleh arrives. His shop has hundreds of spice jars — but the 10 most expensive always sit on the front shelf. Each jar has a price tag. When a new jar arrives, Saleh checks — is it more expensive than the cheapest on the front shelf? If yes, swap. If no, put it in back. This is a heap — the least important always on top, for easy removal.</p>

<div class="code-block"># ranking.py — Day 13: Top-K Results Ranking with Min-Heap
# User searches "algorithm" → 1000 docs match.
# We need the TOP 10 — ranked by relevance score.
# Using a min-heap of size K = O(n log k), not O(n log n).

import heapq

def top_k_results(scored_docs, k=10):
    """
    Find top-K documents by relevance score.
    Uses a min-heap of size K — the smallest score sits on top.

    scored_docs: list of (score, doc_id)
    k: number of top results to keep
    """
    if k &lt;= 0:
        return []

    min_heap = []

    for score, doc_id in scored_docs:
        if len(min_heap) &lt; k:
            # Heap not full yet — just add
            heapq.heappush(min_heap, (score, doc_id))
        elif score &gt; min_heap[0][0]:
            # New score beats the smallest in heap — replace
            heapq.heapreplace(min_heap, (score, doc_id))

    # Sort the final K results by score (descending)
    return sorted(min_heap, key=lambda x: -x[0])

# Simulate: 1000 docs match, each with a relevance score
import random
random.seed(42)
scored_docs = [(random.uniform(0, 100), i) for i in range(1000)]

# Get top 10
top10 = top_k_results(scored_docs, k=10)
print("Top 10 Results:")
for rank, (score, doc_id) in enumerate(top10, 1):
    print(f"  #{rank}: doc {doc_id} (score: {score:.2f})")

# Complexity comparison:
# Full sort:     O(n log n)   = O(1000 * 10) = 10,000
# Heap (k=10):   O(n log k)   = O(1000 * 3)  = 3,000  ← 3x faster!
# Heap (k=10) with 1M docs:   O(1M * 3)      = 3M
# Full sort 1M:               O(1M * 20)     = 20M   ← 7x faster!

# Output (example):
# Top 10 Results:
#   #1: doc 753 (score: 99.72)
#   #2: doc 42 (score: 99.31)
#   #3: doc 621 (score: 98.85)
#   ...</div>

<div class="dialogue">Book ২-এর মসলা ব্যবসায়ীর তাক (Door ৭) heap শিখিয়েছিলেন — সবচেয়ে গুরুত্বপূর্ণ উপরে। এখন দেখলে সার্চ ইঞ্জিনে কেন? প্রতিটা সার্চে হাজার ফলাফল আসে — কিন্তু ইউজার শুধু প্রথম পাতাটা দেখে। top-10। Full sort করলে ধীর। Heap দিয়ে O(n log k) — শুধু K-সাইজের heap রাখো। সস্তা গুলো বের করো, দামি গুলো রাখো।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> সালেহ প্রথমে full sort করতেন — সব ফলাফল sort করো, প্রথম ১০টা দেখাও। ১ লক্ষ ফলাফল = O(n log n) = ১.৭ মিলিয়ন তুলনা। ২০০ms সীমা পার হয়ে গেলো। তারপর min-heap of size 10 ব্যবহার করলেন। O(n log 10) = O(n)। ১০ গুণ দ্রুত। কারণ শুধু ১০টা slot আপডেট করতে হয়, বাকি সব উপেক্ষা।</div></div>

<div class="diagram">
  <div class="diag-title">Min-Heap Top-K Ranking — Keep Best 3 Results</div>
  <svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
    <!-- Heap tree (min-heap, K=3) -->
    <text x="280" y="20" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Min-Heap (K=3) — root = weakest score</text>
    <!-- Root = smallest score (will be evicted first) -->
    <rect x="240" y="30" width="80" height="40" rx="6" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="2"/>
    <text x="280" y="48" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="bold">score: 42</text>
    <text x="280" y="62" text-anchor="middle" fill="#9a93b8" font-size="9">doc 7 ← weakest</text>
    <!-- Left child -->
    <line x1="260" y1="70" x2="180" y2="105" stroke="#f97316" stroke-width="1.5"/>
    <rect x="140" y="105" width="80" height="40" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="180" y="123" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">score: 78</text>
    <text x="180" y="137" text-anchor="middle" fill="#9a93b8" font-size="9">doc 3</text>
    <!-- Right child -->
    <line x1="300" y1="70" x2="380" y2="105" stroke="#f97316" stroke-width="1.5"/>
    <rect x="340" y="105" width="80" height="40" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="380" y="123" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">score: 95</text>
    <text x="380" y="137" text-anchor="middle" fill="#9a93b8" font-size="9">doc 1</text>
    <!-- New doc arrives -->
    <rect x="20" y="170" width="140" height="35" rx="6" fill="rgba(82,196,26,0.12)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="90" y="192" text-anchor="middle" fill="#52c41a" font-size="11" font-weight="bold">New: score 88 ✨</text>
    <line x1="160" y1="187" x2="240" y2="50" stroke="#52c41a" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrIdx)"/>
    <text x="190" y="120" fill="#52c41a" font-size="9" font-weight="bold">88 > 42</text>
    <text x="190" y="132" fill="#52c41a" font-size="8">replace root!</text>
    <!-- After replacement -->
    <rect x="420" y="170" width="150" height="70" rx="8" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="495" y="188" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">After heapreplace:</text>
    <text x="495" y="202" text-anchor="middle" fill="#9a93b8" font-size="8">Heap = {78, 88, 95}</text>
    <text x="495" y="216" text-anchor="middle" fill="#9a93b8" font-size="8">42 evicted</text>
    <text x="495" y="230" text-anchor="middle" fill="#fbbf24" font-size="8">O(n log k)</text>
  </svg>
  <div class="diag-cap">Min-heap root = সবচেয়ে কম score। নতুন score > root হলে replace। শেষে heap-এ সেরা Kটা।</div>
</div>
<div class="dialogue en">Book 2 spice merchant shelves (Door 7) taught you heaps — most important on top. Now you see why in a search engine? Every search returns thousands of results — but users only see the first page. top-10. Full sort is slow. Heap gives O(n log k) — keep a size-K heap. Evict the cheap, keep the valuable.</div>

<div class="secret-box">📊 Top-K = min-heap of size K। প্রতিটা result insert → সবচেয়ে কম score বের করো। O(n log k) — sort O(n log n) নয়।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>Relevance scoring (TF-IDF simplified):</strong></p>
<table class="kv-table">
<tr><th>Signal</th><th>Formula</th><th>কী মাপে</th></tr>
<tr><td class="hl">TF (term frequency)</td><td>count(term, doc)</td><td>শব্দটা কতবার এসেছে</td></tr>
<tr><td class="hl">IDF (inverse doc freq)</td><td>log(N / df(term))</td><td>শব্দটা কত বিরল</td></tr>
<tr><td class="hl">Score</td><td>TF × IDF</td><td>rarity × frequency</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book ১৮ (Embeddings) Door ৪-এ TF-IDF দেখবে — এখানে ranking score হিসেবে ব্যবহৃত। Book ১৬ (LLM Evals)-এ ranking metrics (NDCG, MRR) দেখবে — top-K quality কীভাবে মাপবে।</p>`
  }
});

// ── DOOR 14: TREES (BST) — SORTED TERM DICTIONARY ──
doors.push({
  num:14, icon:"🌳", color:"#fbbf24", name:"বংশবিদের স্ক্রল",
  subtitle:"The Genealogist's Tree", tech:"BST — Sorted Term Dictionary for O(log n) Term Lookup",
  spirit:"শুহাদা — witnesses/references, from Quran 2:282 (let witnesses be established)",
  secret:"Term dictionary = BST। প্রতিটা node-এ একটা term + posting list pointer। বাঁয়া ছোট, ডানা বড়। O(log n) lookup — hash map O(1) কিন্তু sorted iteration দেয় না। BST দুটোই দেয়: lookup + prefix range।",
  recall:{
    q:"Hash map O(1) হলে BST কেন দরকার?",
    qen:"If hash maps are O(1), why use a BST?",
    a:"কারণ hash map sorted iteration দেয় না। BST দেয়: সব term alphabetically সাজানো যায়, prefix search করা যায় ('algo' দিলে 'algorithm', 'algorithms', 'algorithmic' সব পাও)। আর range query — 'a' থেকে 'c' সব term। Hash map এটা পারে না।",
    aen:"Because hash maps do not support sorted iteration. BST does: all terms alphabetically, prefix search ('algo' gives 'algorithm', 'algorithms'), range queries ('a' to 'c'). Hash maps cannot do this."
  },
  story:`
<p class="scene-setting">চতুর্দশ দিন। বংশবিদ আব্দুল্লাহ এসে হাজির। তার হাতে একটা বিশাল স্ক্রল — গাছের ডালের মতো শাখা-প্রশাখায় ভরা। প্রতিটা শাখায় একটা নাম — একটা term। বাঁয়া শাখায় ছোট নাম, ডানা শাখায় বড় নাম। আব্দুল্লাহ বললেন — তালা নির্মাতা করিম (Door ১২) hash map বানিয়েছে, O(1) lookup। কিন্তু একটা সমস্যা: hash map-এ term গুলো এলোমেলো। আমার দরকার — sorted। alphabetically সাজানো। কারণ autocomplete (Door ১৫)-এ prefix খুঁজতে হয়।</p>
<p class="scene-setting en">Day fourteen. Genealogist Abdullah arrives. In his hand: a massive scroll — branching like a tree. Each branch holds a name — a term. Left branch: smaller names. Right branch: larger names. Abdullah said — Locksmith Karim (Door 12) built a hash map, O(1) lookup. But a problem: hash map terms are unordered. I need them sorted. Alphabetically arranged. Because autocomplete (Door 15) needs prefix search.</p>

<div class="code-block"># term_dict.py — Day 14: BST Term Dictionary
# A sorted tree of all terms in the index.
# O(log n) lookup + alphabetical iteration + prefix search.

class TermNode:
    def __init__(self, term, posting_list_ptr):
        self.term = term
        self.posting_ptr = posting_list_ptr  # pointer to posting list
        self.left = None
        self.right = None

class TermDictionary:
    """BST of terms — sorted, searchable, iterable."""
    def __init__(self):
        self.root = None

    def insert(self, term, posting_ptr):
        """Insert a term — O(log n) average."""
        if not self.root:
            self.root = TermNode(term, posting_ptr)
            return
        self._insert(self.root, term, posting_ptr)

    def _insert(self, node, term, posting_ptr):
        if term &lt; node.term:
            if node.left:
                self._insert(node.left, term, posting_ptr)
            else:
                node.left = TermNode(term, posting_ptr)
        elif term &gt; node.term:
            if node.right:
                self._insert(node.right, term, posting_ptr)
            else:
                node.right = TermNode(term, posting_ptr)
        # if equal, term already exists — skip

    def search(self, term):
        """O(log n) lookup."""
        return self._search(self.root, term)

    def _search(self, node, term):
        if not node:
            return None
        if term == node.term:
            return node.posting_ptr
        elif term &lt; node.term:
            return self._search(node.left, term)
        else:
            return self._search(node.right, term)

    def in_order(self):
        """Alphabetical iteration — in-order traversal."""
        result = []
        self._in_order(self.root, result)
        return result

    def _in_order(self, node, result):
        if node:
            self._in_order(node.left, result)
            result.append(node.term)
            self._in_order(node.right, result)

# Build term dictionary from our corpus
td = TermDictionary()
terms = [
    ('algorithm', 0), ('binary', 1), ('data', 2),
    ('heap', 3), ('python', 4), ('queue', 5),
    ('search', 6), ('sort', 7), ('stack', 8), ('tree', 9),
]
for term, ptr in terms:
    td.insert(term, ptr)

# O(log n) search
print("Search 'python':", td.search('python'))    # → 4
print("Search 'missing':", td.search('missing'))   # → None

# Alphabetical iteration (in-order traversal)
print("\\nAll terms (sorted):")
for t in td.in_order():
    print(f"  {t}")

# Output:
# Search 'python': 4
# Search 'missing': None
#
# All terms (sorted):
#   algorithm, binary, data, heap, python, queue, search, sort, stack, tree</div>

<div class="dialogue">Book ২-ের বংশবিদের স্ক্রল (Door ৮) BST শিখিয়েছিলেন — বাঁয়া ছোট, ডানা বড়। এখন দেখলে সার্চ ইঞ্জিনে কেন? Hash map O(1) কিন্তু sorted iteration পারে না। BST O(log n) কিন্তু alphabetical সাজানো দেয়। এটা autocomplete ও range query-র জন্য জরুরি।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> আব্দুল্লাহ প্রথমে unsorted list-এ term খুঁজতেন — linear scan। ১০ লক্ষ term-এ প্রতিটা সার্চে ১০ লক্ষ তুলনা। ৫০ms প্রতি কোয়েরি। তারপর BST বানালেন — O(log n) = মাত্র ২০ তুলনা। ৫০,০০০ গুণ দ্রুত। কিন্তু BST balanced না হলে worst case O(n) — তাই production-এ Red-Black tree বা B+ tree ব্যবহার হয়।</div></div>

<div class="diagram">
  <div class="diag-title">BST Term Dictionary — বাঁয়া ছোট, ডানা বড়, O(log n) Lookup</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrBST" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#f97316"/></marker></defs>
    <!-- Root: heap -->
    <circle cx="280" cy="30" r="22" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="2"/>
    <text x="280" y="35" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">heap</text>
    <!-- Left: binary -->
    <line x1="265" y1="48" x2="150" y2="90" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrBST)"/>
    <circle cx="140" cy="100" r="20" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" stroke-width="1.5"/>
    <text x="140" y="105" text-anchor="middle" fill="#22d3ee" font-size="10" font-weight="bold">binary</text>
    <!-- Right: queue -->
    <line x1="295" y1="48" x2="410" y2="90" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrBST)"/>
    <circle cx="420" cy="100" r="20" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
    <text x="420" y="105" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">queue</text>
    <!-- binary's children -->
    <line x1="125" y1="115" x2="80" y2="160" stroke="#f97316" stroke-width="1" opacity="0.6"/>
    <circle cx="70" cy="170" r="16" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="1"/>
    <text x="70" y="174" text-anchor="middle" fill="#a78bfa" font-size="9">algo</text>
    <line x1="155" y1="115" x2="190" y2="160" stroke="#f97316" stroke-width="1" opacity="0.6"/>
    <circle cx="200" cy="170" r="16" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="1"/>
    <text x="200" y="174" text-anchor="middle" fill="#a78bfa" font-size="9">data</text>
    <!-- queue's children -->
    <line x1="410" y1="115" x2="370" y2="160" stroke="#f97316" stroke-width="1" opacity="0.6"/>
    <circle cx="360" cy="170" r="16" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="1"/>
    <text x="360" y="174" text-anchor="middle" fill="#a78bfa" font-size="9">node</text>
    <line x1="435" y1="115" x2="470" y2="160" stroke="#f97316" stroke-width="1" opacity="0.6"/>
    <circle cx="480" cy="170" r="16" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="1"/>
    <text x="480" y="174" text-anchor="middle" fill="#a78bfa" font-size="9">tree</text>
    <!-- Search path -->
    <rect x="20" y="210" width="250" height="55" rx="6" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="30" y="228" fill="#52c41a" font-size="9" font-weight="bold">search('binary'):</text>
    <text x="30" y="242" fill="#9a93b8" font-size="8">heap → binary &lt; heap → go left</text>
    <text x="30" y="255" fill="#9a93b8" font-size="8">found! 2 comparisons (O(log n))</text>
    <rect x="290" y="210" width="250" height="55" rx="6" fill="rgba(167,139,250,0.06)" stroke="rgba(167,139,250,0.2)" stroke-width="1"/>
    <text x="300" y="228" fill="#a78bfa" font-size="9" font-weight="bold">in-order traversal:</text>
    <text x="300" y="242" fill="#9a93b8" font-size="8">algo → binary → data → heap → node</text>
    <text x="300" y="255" fill="#9a93b8" font-size="8">→ queue → tree (alphabetical!)</text>
  </svg>
  <div class="diag-cap">BST: বাঁয়া ছোট, ডানা বড়। In-order traversal = alphabetical। O(log n) search।</div>
</div>
<div class="dialogue en">Book 2 genealogist scroll (Door 8) taught you BST — left smaller, right larger. Now you see why? Hash map is O(1) but cannot iterate in order. BST is O(log n) but gives alphabetical arrangement. Essential for autocomplete and range queries.</div>

<div class="secret-box">🌳 Term dictionary = BST। O(log n) lookup + sorted iteration + prefix search। Hash map-এর পূরক।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>বাস্তবে BST এর চেয়ে উন্নত কাঠামো ব্যবহৃত হয়:</strong></p>
<table class="kv-table">
<tr><th>Structure</th><th>ব্যবহার</th><th>কেন</th></tr>
<tr><td class="hl">B+ Tree</td><td>Databases</td><td>Disk-optimized, wide fan-out</td></tr>
<tr><td class="hl">Red-Black Tree</td><td>Memory</td><td>Self-balancing, guaranteed O(log n)</td></tr>
<tr><td class="hl">FST</td><td>Lucene term dict</td><td>Compressed, prefix-shared</td></tr>
<tr><td class="hl">Trie</td><td>Autocomplete</td><td>Prefix search O(m)</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book ৩৯ (Databases) Door ৫-এ B+ tree দেখবে — BST-এর disk-optimized সংস্করণ। Book ৪৫ (Compilers) Door ৫-এ symbol table দেখবে — compiler-এর term dictionary।</p>`
  }
});

// ── DOOR 15: TRIE — AUTOCOMPLETE ──
doors.push({
  num:15, icon:"🔤", color:"#fbbf24", name:"অক্ষরের শাখা",
  subtitle:"The Letter Tree", tech:"Trie — Autocomplete for Search Suggestions",
  spirit:"তালাক্কী — receiving/learning letter by letter, gradual acquisition of knowledge",
  secret:"Trie = prefix tree। প্রতিটা node-এ একটা অক্ষর। 'algo' টাইপ করলে → 'algorithm', 'algorithms', 'algorithmic' সব suggestion। O(m) lookup (m = query length)। Hash map দিয়ে প্রতিটা node-এ children রাখো।",
  recall:{
    q:"Autocomplete-এ Trie কেন? BST বা hash map কেন নয়?",
    qen:"Why a Trie for autocomplete? Not BST or hash map?",
    a:"BST-এ prefix search করলে O(n) scan লাগে — সব term check করো। Hash map-এ prefix search অসম্ভব — 'algo' দিলে কোন term আছে জানা নেই। Trie-তে অক্ষর ধরে ধরে নামো — O(m), m = query দৈর্ঘ্য। তারপর বাকি শাখা গুলোই suggestion।",
    aen:"BST prefix search needs O(n) scan — check every term. Hash map cannot do prefix search at all. Trie: walk character by character — O(m). Then all branches below are suggestions."
  },
  story:`
<p class="scene-setting">পঞ্চদশ দিন। শিক্ষিকা রাবিয়া এসে হাজির। তার হাতে একটা ছোট গাছের মডেল — কিন্তু এই গাছের প্রতিটা শাখায় একটা অক্ষর। মূল থেকে শাখা বেরোয় — 'a', তার থেকে 'l', তার থেকে 'g', তার থেকে 'o'...। প্রতিটা পথ একটা শব্দ। রাবিয়া বললেন — ইউজার 'algo' লিখেছে। এই গাছে 'a' থেকে নামো, 'l', 'g', 'o' — এখন তোমার হাতে সব শাখা যেগুলো এই পথ থেকে বেরোয়: 'algorithm', 'algorithms', 'algorithmic'। এটাই autocomplete।</p>
<p class="scene-setting en">Day fifteen. Teacher Rabia arrives. In her hand: a small tree model — but each branch holds a letter. From root, branches emerge — 'a', then 'l', then 'g', then 'o'... Each path is a word. Rabia said — the user typed 'algo.' Walk down this tree: 'a' to 'l' to 'g' to 'o' — now all branches below are suggestions: 'algorithm', 'algorithms', 'algorithmic.' This is autocomplete.</p>

<div class="code-block"># autocomplete.py — Day 15: Trie for Autocomplete
# Type 'algo' → get suggestions: algorithm, algorithms, algorithmic.
# Trie: each node = one character. Children in a hash map.

class TrieNode:
    def __init__(self):
        self.children = {}   # char → TrieNode
        self.is_end = False  # is this a complete word?
        self.frequency = 0   # how often this term is searched

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word, frequency=1):
        """Insert a word into the trie — O(m)."""
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
        node.frequency = frequency

    def search(self, prefix):
        """Find all words starting with prefix — O(m + suggestions)."""
        # Walk to the prefix node
        node = self.root
        for char in prefix:
            if char not in node.children:
                return []  # prefix not found
            node = node.children[char]

        # Collect all words below this node
        suggestions = []
        self._collect(node, prefix, suggestions)
        return suggestions

    def _collect(self, node, prefix, results):
        """DFS to collect all complete words below this node."""
        if node.is_end:
            results.append((prefix, node.frequency))
        for char, child in node.children.items():
            self._collect(child, prefix + char, results)

    def autocomplete(self, prefix, top_k=5):
        """Get top-K suggestions sorted by frequency."""
        suggestions = self.search(prefix)
        # Sort by frequency (descending) — like Google does!
        suggestions.sort(key=lambda x: -x[1])
        return [word for word, freq in suggestions[:top_k]]

# Build the trie with search terms
trie = Trie()
terms = [
    ('algorithm', 1000), ('algorithms', 800),
    ('algorithmic', 300), ('binary search', 900),
    ('binary tree', 700), ('python', 5000),
    ('python sort', 2000), ('python list', 1800),
]
for word, freq in terms:
    trie.insert(word, freq)

# User types 'algo' → autocomplete!
print("Type 'algo':")
for suggestion in trie.autocomplete('algo'):
    print(f"  {suggestion}")

print("\\nType 'py':")
for suggestion in trie.autocomplete('py'):
    print(f"  {suggestion}")

# Output:
# Type 'algo':
#   algorithm
#   algorithms
#   algorithmic
#
# Type 'py':
#   python
#   python sort
#   python list

# ⏱️ Complexity:
#   Trie lookup for prefix: O(m) where m = prefix length
#   BST prefix search:      O(n) — must scan all terms
#   Hash map prefix search: IMPOSSIBLE — no way to find partial keys</div>

<div class="dialogue">Book ২-এর বংশবিদের স্ক্রল (Door ৮) Trie শিখিয়েছিলেন — অক্ষর ধরে ধরে শাখা। এখন দেখলে সার্চ ইঞ্জিনে এটা কেন? Google-ে টাইপ করো — suggestion আসে। সেটাই Trie। ইউজার প্রতিটা অক্ষর টাইপ করে, Trie-তে O(m)-এ prefix খুঁজো, বাকি শাখা গুলো suggestion। তারপর frequency দিয়ে rank করো — সবচেয়ে জনপ্রিয় suggestion আগে।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> রাবিয়া প্রথমে hash map দিয়ে autocomplete বানিয়েছিলেন। ইউজার 'algo' টাইপ করলো? সব possible word চেক করো — 'algorithm', 'algorithms', 'algorithmic'... কোনটা prefix ম্যাচ করে? প্রতিটা word-এ শুরু থেকে তুলনা। O(n × m)। ১ লক্ষ word-ে ৫০ms latency। Trie দিলে prefix থেকে শুরু — O(m)। ৫ms। ১০ গুণ দ্রুত।</div></div>

<div class="diagram">
  <div class="diag-title">Trie Autocomplete — 'algo' টাইপ করলে সব Suggestion</div>
  <svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg">
    <!-- Root -->
    <circle cx="80" cy="145" r="20" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" stroke-width="2"/>
    <text x="80" y="150" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="bold">root</text>
    <!-- a -->
    <line x1="100" y1="140" x2="150" y2="100" stroke="#f97316" stroke-width="1.5"/>
    <circle cx="165" cy="90" r="18" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="165" y="94" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">a</text>
    <!-- l -->
    <line x1="183" y1="88" x2="220" y2="65" stroke="#f97316" stroke-width="1.5"/>
    <circle cx="235" cy="58" r="18" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="235" y="62" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">l</text>
    <!-- g -->
    <line x1="253" y1="55" x2="290" y2="45" stroke="#f97316" stroke-width="1.5"/>
    <circle cx="305" cy="38" r="18" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="1.5"/>
    <text x="305" y="42" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">g</text>
    <!-- o (prefix end = 'algo') -->
    <line x1="323" y1="38" x2="360" y2="38" stroke="#f97316" stroke-width="1.5"/>
    <circle cx="375" cy="38" r="20" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="2.5"/>
    <text x="375" y="42" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">o</text>
    <!-- User types 'algo' -->
    <rect x="340" y="0" width="70" height="20" rx="4" fill="rgba(82,196,26,0.12)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="375" y="14" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">prefix</text>
    <!-- From 'o' three branches -->
    <!-- r-i-t-h-m (algorithm) -->
    <line x1="395" y1="35" x2="430" y2="25" stroke="#52c41a" stroke-width="1.5"/>
    <circle cx="440" cy="22" r="14" fill="rgba(82,196,26,0.1)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="440" y="26" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">r</text>
    <line x1="454" y1="22" x2="475" y2="22" stroke="#52c41a" stroke-width="1.5"/>
    <circle cx="485" cy="22" r="14" fill="rgba(82,196,26,0.1)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="485" y="26" text-anchor="middle" fill="#52c41a" font-size="10">i</text>
    <line x1="499" y1="22" x2="515" y2="22" stroke="#52c41a" stroke-width="1" opacity="0.5"/>
    <text x="510" y="26" fill="#52c41a" font-size="7" font-weight="bold">→ algorithm ✓</text>
    <!-- s (algorithms) -->
    <line x1="395" y1="42" x2="430" y2="55" stroke="#22d3ee" stroke-width="1.5"/>
    <circle cx="440" cy="58" r="14" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" stroke-width="1.5"/>
    <text x="440" y="62" text-anchor="middle" fill="#22d3ee" font-size="10" font-weight="bold">s</text>
    <text x="510" y="62" fill="#22d3ee" font-size="7" font-weight="bold">→ algorithms ✓</text>
    <!-- r-i-t-h-m-i-c (algorithmic) -->
    <line x1="395" y1="48" x2="430" y2="90" stroke="#a78bfa" stroke-width="1.5"/>
    <circle cx="440" cy="95" r="14" fill="rgba(167,139,250,0.1)" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="440" y="99" text-anchor="middle" fill="#a78bfa" font-size="10">r</text>
    <text x="510" y="99" fill="#a78bfa" font-size="7" font-weight="bold">→ algorithmic ✓</text>
    <!-- Other branches from root -->
    <line x1="100" y1="150" x2="150" y2="190" stroke="#f97316" stroke-width="1" opacity="0.3"/>
    <circle cx="165" cy="195" r="14" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/>
    <text x="165" y="199" text-anchor="middle" fill="#9a93b8" font-size="10">b</text>
    <line x1="100" y1="155" x2="150" y2="230" stroke="#f97316" stroke-width="1" opacity="0.3"/>
    <circle cx="165" cy="235" r="14" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/>
    <text x="165" y="239" text-anchor="middle" fill="#9a93b8" font-size="10">p</text>
    <!-- Search path -->
    <rect x="20" y="220" width="280" height="60" rx="8" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="35" y="240" fill="#52c41a" font-size="10" font-weight="bold">User types 'algo':</text>
    <text x="35" y="255" fill="#9a93b8" font-size="9">root → a → l → g → o (4 steps, O(m))</text>
    <text x="35" y="270" fill="#9a93b8" font-size="9">3 branches found: algorithm, algorithms, algorithmic</text>
  </svg>
  <div class="diag-cap">'algo' টাইপ → 4 ধাপে prefix node → নিচের সব শাখা = suggestion। O(m) lookup।</div>
</div>
<div class="dialogue en">Book 2 genealogist scroll (Door 8) taught you Trie — branching character by character. Now you see why? Type on Google — suggestions appear. That is a Trie. User types each character, Trie finds the prefix in O(m), remaining branches are suggestions. Then rank by frequency — most popular first.</div>

<div class="secret-box">🔤 Autocomplete = Trie। অক্ষর ধরে ধরে নামো, বাকি শাখা গুলো suggestion। O(m) lookup।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>Google-এর autocomplete algorithm (simplified):</strong></p>
<ul class="checklist">
<li>Prefix search — Trie-তে O(m) এ prefix খুঁজো</li>
<li>Frequency ranking — বেশি searched term আগে দেখাও</li>
<li>Personalization — ইউজারের location ও history থেকে boost</li>
<li>Freshness — trending term-কে temporary boost</li>
<li>Cache — popular prefix-গুলোর suggestion আগেই cache করো</li>
</ul>
<p><strong>Cross-ref:</strong> Book ৯ (Context Engineering) Door ৫-এ reranking দেখবে — autocomplete suggestion-গুলো rerank করার উন্নত পদ্ধতি। Book ৪৫ (Compilers) Door ৪-এ symbol table trie দেখবে — compiler-ও identifier autocomplete করে।</p>`
  }
});
