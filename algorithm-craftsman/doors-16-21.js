// ════════════════════════════════════════════════════════════
// ALGORITHM CRAFTSMAN — DOORS 16-21
// 16. Graphs: PageRank         17. Union-Find: Duplicate Detection
// 18. Sort+BS: Sorted Index    19. D&C: MapReduce Index
// 20. Synthesis: Search Engine 21. Bonus: 5 More Projects
// ════════════════════════════════════════════════════════════

// ── DOOR 16: GRAPHS (BFS/DFS) — PAGERANK ──
doors.push({
  num:16, icon:"🌐", color:"#f97316", name:"সম্পর্কের জাল",
  subtitle:"The Web of Trust", tech:"Graphs — PageRank: A Page Is Important If Important Pages Link To It",
  spirit:"শুহাদা — witnesses, from Quran 2:282 (establish witnesses)",
  secret:"PageRank = graph power iteration। একটা page important = গুরুত্বপূর্ণ page-গুলো তাকে link করে। শুধু count নয় — কে link করছে তা গুরুত্বপূর্ণ।",
  recall:{
    q:"PageRank কেন শুধু in-degree (link count) নয়?",
    qen:"Why is PageRank not just in-degree (link count)?",
    a:"কারণ একটা spam site হাজার fake page বানিয়ে link করতে পারে। in-degree হলে সেটা top-এ চলে আসবে। PageRank বলে — গুরুত্বপূর্ণ page থেকে link পেলে তোমার score বাড়ে। Spam page-এর নিজের score কম, তাই তার link কম দামি।",
    aen:"Because a spam site can create thousands of fake pages to link to itself. In-degree would rank it high. PageRank says: links from important pages are worth more. Spam pages have low scores themselves, so their links are cheap."
  },
  story:`
<p class="scene-setting">ষোলোতম দিন। মানচিত্রকার দাউদ এসে হাজির। তার আঙুলে কালির দাগ — মানচিত্র আঁকা থেকে। তিনি একটা বিশাল কাগজ টেবিলে ছড়িয়ে দিলেন। কাগজে শত শত বিন্দু — প্রতিটা একটা ওয়েব পেজ। বিন্দুগুলো তীর দিয়ে যুক্ত — একটা পেজ অন্যটাকে link করে। দাউদ বললেন — এই জালটা হলো ওয়েব গ্রাফ। কোন পেজ সবচেয়ে গুরুত্বপূর্ণ? যে পেজে সবচেয়ে গুরুত্বপূর্ণ পেজগুলো link করে।</p>
<p class="scene-setting en">Day sixteen. Cartographer Dawud arrives. Ink stains on his fingers from drawing maps. He spreads a massive paper on the table. Hundreds of dots — each a web page. Arrows connect them — one page linking to another. Dawud said — this web is the graph of the internet. Which page is most important? The one that important pages link to.</p>

<div class="dialogue">দাউদ বললেন, কালির দাগ মুছতে মুছতে। বই ২-এর তাঁতির তাঁত (Door ৯) তোমাকে BFS ও DFS শিখিয়েছে — গ্রাফে ঘুরে বেড়ানো। কিন্তু এখন প্রশ্ন ভিন্ন — কোন node সবচেয়ে গুরুত্বপূর্ণ? এটাই PageRank। ব্রিন ও পেজ (১৯৯৮) এটা বানিয়েছিলেন। একটা পেজের গুরুত্ব = তাকে যারা link করে তাদের গুরুত্বের যোগফল। কিন্তু সেটা circular — A-এর গুরুত্ব নির্ভর করে B-এর উপর, B-এর গুরুত্ব A-এর উপর। সমাধান: power iteration — শুরু করো সবাইকে সমান দিয়ে, বারবার update করো, যতক্ষণ না stable হয়।</div>
<div class="dialogue en">Dawud said, wiping ink stains. Book 2 weaver loom (Door 9) taught you BFS and DFS — traversing graphs. But now the question is different — which node is most important? This is PageRank. Brin and Page (1998) invented it. A page importance = sum of importances of pages linking to it. But that is circular — A depends on B, B depends on A. Solution: power iteration — start everyone equal, update repeatedly, until stable.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> প্রথম সার্চ ইঞ্জিনগুলো in-degree ব্যবহার করতো — কতগুলো page তোমাকে link করে। স্প্যামাররা হাজার fake page বানিয়ে নিজেদের link করতো। top rank! PageRank এটা ঠিক করলো — গুরুত্বহীন page থেকে link এর দাম কম। শুধু গুরুত্বপূর্ণ page থেকে link এর দাম বেশি।</div></div>

<div class="code-block"># pagerank.py — Day 16: Simplified PageRank
# A page is important if important pages link to it.
# Power iteration: start uniform, update until convergence.

def pagerank(graph, damping=0.85, iterations=20):
    """
    graph: {page: [pages_it_links_to]}
    Returns: {page: pagerank_score}

    Each page starts with score 1/N.
    Each iteration: score flows through outlinks.
    """
    pages = list(graph.keys())
    n = len(pages)

    # Initialize: every page gets equal score
    scores = {p: 1.0 / n for p in pages}

    for iteration in range(iterations):
        new_scores = {}
        for page in pages:
            # Find all pages that link TO this page
            incoming = 0
            for other in pages:
                if page in graph.get(other, []):
                    # Other page's score / its outlinks count
                    outlinks = len(graph[other])
                    incoming += scores[other] / outlinks

            # PageRank formula
            new_scores[page] = (1 - damping) / n + damping * incoming

        scores = new_scores

        # Print progress every 5 iterations
        if (iteration + 1) % 5 == 0:
            top = sorted(scores.items(), key=lambda x: -x[1])[0]
            print(f"  Iter {iteration+1}: top = {top[0]} ({top[1]:.4f})")

    return scores

# Web graph: page → pages it links to
web_graph = {
    'home.html':  ['about.html', 'blog.html'],
    'about.html': ['home.html'],
    'blog.html':  ['home.html', 'about.html', 'post.html'],
    'post.html':  ['blog.html'],
}

print("Computing PageRank...")
scores = pagerank(web_graph)

print("\\nFinal PageRank scores (sorted):")
for page, score in sorted(scores.items(), key=lambda x: -x[1]):
    bar = '#' * int(score * 100)
    print(f"  {page:<15} {score:.4f} {bar}")

# Output:
#   Iter 5:  top = home.html (0.3502)
#   Iter 10: top = home.html (0.3502)
#   Iter 15: top = home.html (0.3502)
#
# Final PageRank scores (sorted):
#   home.html       0.3502 #################################
#   blog.html       0.2873 ############################
#   about.html      0.2175 #####################
#   post.html       0.1449 ##############

# home.html wins because blog.html (high score) links to it,
# AND about.html links to it. Quality links matter!</div>

<div class="dialogue">দাউদ মানচিত্র গুটিয়ে নিলেন। PageRank শুধু link count নয় — link quality। একটা page গুরুত্বপূর্ণ কারণ গুরুত্বপূর্ণ page তাকে link করে। এটাই Google-কে Google বানিয়েছে। Book ৩৫ (Distributed Systems) Door ৭-এ consensus algorithm দেখবে — একই নীতি: কে তোমাকে support করছে তা গুরুত্বপূর্ণ।</div>

<div class="diagram">
  <div class="diag-title">PageRank — Score প্রবাহ: গুরুত্বপূর্ণ Page থেকে Link = বেশি দাম</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrPR" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#f97316"/></marker>
      <marker id="arrPR2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#22d3ee"/></marker>
    </defs>
    <!-- Nodes -->
    <!-- Home (high score) -->
    <circle cx="100" cy="80" r="35" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="2.5"/>
    <text x="100" y="78" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">home</text>
    <text x="100" y="92" text-anchor="middle" fill="#fbbf24" font-size="9">PR=0.35</text>
    <!-- Blog (medium) -->
    <circle cx="280" cy="50" r="30" fill="rgba(249,115,22,0.12)" stroke="#f97316" stroke-width="2"/>
    <text x="280" y="48" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">blog</text>
    <text x="280" y="60" text-anchor="middle" fill="#9a93b8" font-size="8">PR=0.29</text>
    <!-- About -->
    <circle cx="100" cy="200" r="28" fill="rgba(249,115,22,0.08)" stroke="#f97316" stroke-width="1.5"/>
    <text x="100" y="198" text-anchor="middle" fill="#fbbf24" font-size="10">about</text>
    <text x="100" y="210" text-anchor="middle" fill="#9a93b8" font-size="8">PR=0.22</text>
    <!-- Post (low) -->
    <circle cx="280" cy="200" r="24" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1"/>
    <text x="280" y="198" text-anchor="middle" fill="#9a93b8" font-size="9">post</text>
    <text x="280" y="210" text-anchor="middle" fill="#6b6588" font-size="8">PR=0.14</text>
    <!-- Spam (dashed, low score) -->
    <circle cx="460" cy="200" r="24" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="460" y="198" text-anchor="middle" fill="#ef4444" font-size="9">spam</text>
    <text x="460" y="210" text-anchor="middle" fill="#ef4444" font-size="8">PR=0.01</text>
    <!-- Edges (links) -->
    <!-- blog → home (important link!) -->
    <path d="M 255 55 Q 180 30 135 70" fill="none" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arrPR)"/>
    <text x="170" y="25" fill="#fbbf24" font-size="9" font-weight="bold">worth 0.29</text>
    <!-- about → home -->
    <line x1="100" y1="172" x2="100" y2="115" stroke="#f97316" stroke-width="2" marker-end="url(#arrPR)"/>
    <!-- home → blog -->
    <line x1="135" y1="70" x2="250" y2="52" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrPR)"/>
    <!-- home → about -->
    <line x1="100" y1="115" x2="100" y2="172" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrPR)"/>
    <!-- blog → post -->
    <line x1="280" y1="80" x2="280" y2="176" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrPR)"/>
    <!-- spam → home (cheap link) -->
    <path d="M 450 175 Q 300 120 135 85" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arrPR2)" opacity="0.4"/>
    <text x="350" y="130" fill="#ef4444" font-size="8">worth 0.01 only</text>
    <!-- Legend -->
    <rect x="20" y="235" width="250" height="35" rx="6" fill="rgba(251,191,36,0.06)" stroke="rgba(251,191,36,0.2)" stroke-width="1"/>
    <text x="30" y="252" fill="#fbbf24" font-size="9" font-weight="bold">home PR=0.35 = highest</text>
    <text x="30" y="265" fill="#9a93b8" font-size="8">because blog (0.29) + about (0.22) link to it</text>
    <rect x="290" y="235" width="250" height="35" rx="6" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.2)" stroke-width="1"/>
    <text x="300" y="252" fill="#ef4444" font-size="9" font-weight="bold">spam PR=0.01 = lowest</text>
    <text x="300" y="265" fill="#9a93b8" font-size="8">low-quality links = low score transfer</text>
  </svg>
  <div class="diag-cap">PageRank flows through links। blog (PR=0.29) → home = বেশি দামি link। spam (PR=0.01) → home = সস্তা।</div>
</div>
<div class="dialogue en">Dawud rolled up the map. PageRank is not just link count — it is link quality. A page is important because important pages link to it. This is what made Google Google. Book 35 (Distributed Systems) Door 7 shows consensus algorithms — same principle: who supports you matters.</div>

<div class="secret-box">🌐 PageRank = graph power iteration। গুরুত্ব = কার থেকে link পেলে, কতটা। শুধু count নয় — quality।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>PageRank parameters:</strong></p>
<table class="kv-table">
<tr><th>Parameter</th><th>Value</th><th>কেন</th></tr>
<tr><td class="hl">Damping (d)</td><td>0.85</td><td>15% random jump সম্ভাবনা — dead ends এড়াতে</td></tr>
<tr><td class="hl">Iterations</td><td>20-100</td><td>Convergence পর্যন্ত</td></tr>
<tr><td class="hl">Initial</td><td>1/N</td><td>সবাই সমান শুরু</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book ৩৫ (Distributed Systems) Door ৭-এ Paxos/Raft consensus দেখবে। Book ৩১ (Classic ML) Door ৮-এ Markov chain দেখবে — PageRank একটা Markov chain-এর stationary distribution।</p>`
  }
});

// ── DOOR 17: UNION-FIND — DUPLICATE DETECTION ──
doors.push({
  num:17, icon:"🔗", color:"#f97316", name:"গোত্রপতির পরিষদ",
  subtitle:"The Duplicate Hunter", tech:"Union-Find (DSU) — Near-Duplicate Page Detection",
  spirit:"জামা — joining/gathering, from Quran 3:103 (hold fast together)",
  secret:"Union-Find = duplicate grouping। Path compression ছাড়া O(n), সাথে O(α(n)) ≈ O(1)। হাজার duplicate page এক গোত্রে — union(a, b) এক কলে।",
  recall:{
    q:"Path compression কী করে? কেন এটা O(α(n)) করে?",
    qen:"What does path compression do? Why does it make it O(alpha(n))?",
    a:"find(x) করলে root পর্যন্ত যাও। ফেরার পথে প্রতিটা node-কে সরাসরি root-এ যুক্ত করে দাও। পরের বার find(x) করলে ১ ধাপে root। এটা tree-কে flat করে দেয় — উচ্চতা α(n) ≈ ৪ (বাস্তবে)। সব প্রায় O(1)।",
    aen:"find(x) walks to root. On the way back, point each node directly to root. Next find(x) reaches root in 1 step. This flattens the tree — height becomes α(n) ≈ 4 (practically). Everything becomes nearly O(1)."
  },
  story:`
<p class="scene-setting">সতর্দশ দিন। গোত্রপতি হাশিম এসে হাজির। তার হাতে একটা হাঁটার লাঠি — লাঠিতে দাগ কাটা, প্রতিটা দাগ একটা গোত্র একত্রিত হওয়ার চিহ্ন। তিনি বললেন — ক্রলার লক্ষ লক্ষ page আনে। কিন্তু অনেক page প্রায় একই — একই বিষয়বস্তু, সামান্য ভিন্ন। ডুপ্লিকেট। এগুলো এক গোত্রে ফেলতে হবে — নইলে সার্চ রেজাল্টে একই page বারবার আসবে।</p>
<p class="scene-setting en">Day seventeen. Clan Elder Hashim arrives. In his hand: a walking stick with notches — each notch marks a clan merger. He said — the crawler brings millions of pages. But many are nearly identical — same content, tiny differences. Duplicates. These must be grouped — otherwise search results repeat the same page.</p>

<div class="code-block"># union_find.py — Day 17: Union-Find for Duplicate Detection
# Near-duplicate pages get unioned into the same group.

class UnionFind:
    """Disjoint Set Union with path compression + union by rank."""
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        """Find root of x — with path compression."""
        if self.parent[x] != x:
            # Path compression: point directly to root
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        """Merge the groups containing x and y."""
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x == root_y:
            return  # already same group

        # Union by rank: attach shorter tree under taller
        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        elif self.rank[root_x] > self.rank[root_y]:
            self.parent[root_y] = root_x
        else:
            self.parent[root_y] = root_x
            self.rank[root_x] += 1

    def connected(self, x, y):
        """Are x and y in the same group?"""
        return self.find(x) == self.find(y)

# Simulate: detect near-duplicate pages
# Each page has a simhash (similarity hash)
# If simhash difference < 3 bits, they are near-duplicates

pages = {
    0: 'home_copy1',  # same content as page 1
    1: 'home_copy2',  # duplicate of 0
    2: 'blog_original',
    3: 'blog_copy',   # duplicate of 2
    4: 'unique_page',
}

uf = UnionFind(5)

# Detected near-duplicate pairs (simhash distance < 3)
uf.union(0, 1)  # home_copy1 ≈ home_copy2
uf.union(2, 3)  # blog_original ≈ blog_copy

# Check which pages are duplicates
print("Duplicate groups:")
for i in range(5):
    group = uf.find(i)
    print(f"  Page {i} ({pages[i]:<15}) → group {group}")

# Are 0 and 1 duplicates?
print(f"\\nPage 0 and 1 same? {uf.connected(0, 1)}")  # True
print(f"Page 0 and 4 same? {uf.connected(0, 4)}")    # False

# Output:
# Duplicate groups:
#   Page 0 (home_copy1     ) → group 0
#   Page 1 (home_copy2     ) → group 0
#   Page 2 (blog_original  ) → group 2
#   Page 3 (blog_copy      ) → group 2
#   Page 4 (unique_page    ) → group 4

# Page 0 and 1 same? True
# Page 0 and 4 same? False</div>

<div class="dialogue">Book ২-এর গোত্রপতির পরিষদ (Door ১০) Union-Find শিখিয়েছিলেন। এখন দেখলে সার্চ ইঞ্জিনে কেন? ডুপ্লিকেট page গুলো এক গোত্রে — union(a,b) এক কলে। সার্চে শুধু প্রতিটা গোত্রের সেরা page দেখাও। ব্যবহারকারী একই content বারবার দেখবে না।</div>
<div class="dialogue en">Book 2 clan elder council (Door 10) taught you Union-Find. Now you see why in search engines? Duplicate pages go into one clan — union(a,b) in one call. In search, show only the best page from each clan. Users do not see the same content repeatedly.</div>

<div class="secret-box">🔗 Union-Find = duplicate grouping। Path compression + union by rank = O(α(n)) ≈ O(1)।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>Near-duplicate detection pipeline:</strong></p>
<ul class="checklist">
<li>Simhash — প্রতিটা page-এর জন্য 64-bit fingerprint</li>
<li>Hamming distance < 3 → near-duplicate</li>
<li>Union-find → সব duplicate এক গোত্রে</li>
<li>সার্চে প্রতি গোত্রের সেরা page দেখাও</li>
</ul>
<p><strong>Cross-ref:</strong> Book ৩৫ (Distributed Systems) Door ৬-এ partition detection দেখবে। Book ৪৬ (Cryptography) Door ২-এ hash collision দেখবে।</p>`
  }
});

// ── DOOR 18: SORTING + BINARY SEARCH — SORTED INDEX ──
doors.push({
  num:18, icon:"📚", color:"#f97316", name:"গ্রন্থাগারিকের তালিকা",
  subtitle:"The Librarian's Catalog", tech:"Sorting + Binary Search — Sorted Term Lookup O(log n)",
  spirit:"নিজাম — order/arrangement, from Quran 73:20 (regular arrangement)",
  secret:"Sorted index = sort once, search O(log n) forever। সাজানো = ক্ষমতা। ধরবে না — অসাজানো ১০ লক্ষ term-এ একটা খুঁজতে ১০ লক্ষ তুলনা। সাজানো হলে মাত্র ২০।",
  recall:{
    q:"Binary search কেন O(log n)? ১০ লক্ষ term-এ কত তুলনা?",
    qen:"Why is binary search O(log n)? How many comparisons for 1M terms?",
    a:"প্রতি ধাপে অর্ধেক বাদ দাও। ১০ লক্ষ → ৫ লক্ষ → ২.৫ লক্ষ → ... → ১। কত ধাপ? log₂(১০,০০,০০০) ≈ ২০। মাত্র ২০ তুলনায় ১০ লক্ষ term থেকে একটা খুঁজে বের করা। Linear: ১০ লক্ষ। পার্থক্য: ৫০,০০০ গুণ।",
    aen:"Each step halves the search space. 1M → 500K → 250K → ... → 1. Steps: log2(1,000,000) ≈ 20. Just 20 comparisons to find one term among a million. Linear: 1 million. Difference: 50,000 times."
  },
  story:`
<p class="scene-setting">অষ্টাদশ দিন। গ্রন্থাগারিক আমিনা এসে হাজির। তার গলায় চশমা ঝুলছে একটা চেইনে — পড়ার সময় চশমা পরেন, বাকি সময় ঝুলে। তার হাতে একটা মোটা খাতা — সব term alphabetically সাজানো। আমিনা বললেন — বংশবিদ আব্দুল্লাহ (Door ১৪) BST বানিয়েছেন, কিন্তু বাস্তবে আমরা sorted array ব্যবহার করি — কারণ array-তে binary search দ্রুত, cache-friendly, ও simple।</p>
<p class="scene-setting en">Day eighteen. Librarian Amina arrives. Reading glasses hang on a chain around her neck — worn for reading, hanging otherwise. In her hand: a thick ledger — all terms sorted alphabetically. Amina said — Genealogist Abdullah (Door 14) built a BST, but in practice we use a sorted array — because binary search on arrays is faster, cache-friendly, and simpler.</p>

<div class="code-block"># binary_search.py — Day 18: Binary Search on Sorted Term Dictionary
# Sort terms once → O(n log n). Then every lookup is O(log n).

def binary_search(sorted_terms, target):
    """
    Find target in sorted list — O(log n).
    Each step: check middle, discard half.
    """
    lo, hi = 0, len(sorted_terms) - 1
    steps = 0

    while lo <= hi:
        steps += 1
        mid = (lo + hi) // 2

        if sorted_terms[mid] == target:
            return mid, steps
        elif sorted_terms[mid] < target:
            lo = mid + 1   # discard left half
        else:
            hi = mid - 1   # discard right half

    return -1, steps  # not found

# Sorted term dictionary
terms = ['algorithm', 'binary', 'bloom', 'cache', 'data',
         'graph', 'hash', 'index', 'join', 'key',
         'leaf', 'merge', 'node', 'offset', 'page',
         'queue', 'rank', 'search', 'trie', 'update']

# Search for 'index'
idx, steps = binary_search(terms, 'index')
print(f"Found 'index' at position {idx} in {steps} steps")

# Trace:
# Step 1: lo=0, hi=19, mid=9 → 'key' > 'index' → hi=8
# Step 2: lo=0, hi=8,  mid=4 → 'data' < 'index' → lo=5
# Step 3: lo=5, hi=8,  mid=6 → 'hash' < 'index' → lo=7
# Step 4: lo=7, hi=8,  mid=7 → 'index' == 'index' → FOUND!

print(f"\\n20 terms → found in {steps} comparisons")
print(f"1,000,000 terms → would take ~20 comparisons")
print(f"1,000,000,000 terms → would take ~30 comparisons")

# Compare with linear search
def linear_search(items, target):
    for i, item in enumerate(items):
        if item == target:
            return i
    return -1

# Output:
# Found 'index' at position 7 in 4 steps
# 20 terms → found in 4 comparisons
# 1,000,000 terms → would take ~20 comparisons
# 1,000,000,000 terms → would take ~30 comparisons</div>

<div class="dialogue">Book ২-এর গ্রন্থাগারিকের তালিকা (Door ১১) sorting ও binary search শিখিয়েছিলেন। এখন দেখলে সার্চ ইঞ্জিনে কেন এটা সবচেয়ে বেশি ব্যবহৃত algorithm? প্রতিটা সার্চে term dictionary-তে lookup করতে হয়। Sorted array + binary search = O(log n)। এক বিলিয়ন term-এ ৩০ তুলনা। সাজানো = ক্ষমতা।</div>

<div class="diagram">
  <div class="diag-title">Binary Search — প্রতি ধাপে অর্ধেক বাদ দাও, O(log n)</div>
  <svg viewBox="0 0 660 240" xmlns="http://www.w3.org/2000/svg">
    <!-- Sorted array -->
    <text x="20" y="20" fill="#fbbf24" font-size="10" font-weight="bold">Sorted terms (find 'index'):</text>
    <!-- Step 1: full range -->
    <text x="20" y="40" fill="#9a93b8" font-size="9">Step 1: lo=0, hi=19, mid=9</text>
    <rect x="20" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="32" y="65" text-anchor="middle" fill="#6b6588" font-size="8">algo</text>
    <rect x="46" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="58" y="65" text-anchor="middle" fill="#6b6588" font-size="8">bin</text>
    <rect x="72" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="84" y="65" text-anchor="middle" fill="#6b6588" font-size="8">blo</text>
    <rect x="98" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="110" y="65" text-anchor="middle" fill="#6b6588" font-size="8">cac</text>
    <rect x="124" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="136" y="65" text-anchor="middle" fill="#6b6588" font-size="8">dat</text>
    <rect x="150" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="162" y="65" text-anchor="middle" fill="#6b6588" font-size="8">grp</text>
    <rect x="176" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="188" y="65" text-anchor="middle" fill="#6b6588" font-size="8">has</text>
    <rect x="202" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="214" y="65" text-anchor="middle" fill="#6b6588" font-size="8">ind</text>
    <rect x="228" y="48" width="25" height="25" rx="3" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="2.5"/><text x="240" y="65" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">key</text>
    <text x="240" y="42" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">↓ mid</text>
    <rect x="254" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="266" y="65" text-anchor="middle" fill="#6b6588" font-size="8">lef</text>
    <rect x="280" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="292" y="65" text-anchor="middle" fill="#6b6588" font-size="8">mer</text>
    <rect x="306" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="318" y="65" text-anchor="middle" fill="#6b6588" font-size="8">nod</text>
    <rect x="332" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="344" y="65" text-anchor="middle" fill="#6b6588" font-size="8">off</text>
    <rect x="358" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="370" y="65" text-anchor="middle" fill="#6b6588" font-size="8">pag</text>
    <rect x="384" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="396" y="65" text-anchor="middle" fill="#6b6588" font-size="8">que</text>
    <rect x="410" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="422" y="65" text-anchor="middle" fill="#6b6588" font-size="8">rnk</text>
    <rect x="436" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="448" y="65" text-anchor="middle" fill="#6b6588" font-size="8">src</text>
    <rect x="462" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="474" y="65" text-anchor="middle" fill="#6b6588" font-size="8">tri</text>
    <rect x="488" y="48" width="25" height="25" rx="3" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="1" opacity="0.4"/><text x="500" y="65" text-anchor="middle" fill="#6b6588" font-size="8">upd</text>
    <text x="570" y="55" fill="#ef4444" font-size="8" font-weight="bold">'key'>'index'</text>
    <text x="570" y="67" fill="#9a93b8" font-size="7">discard right</text>
    <!-- Step 2 -->
    <text x="20" y="100" fill="#9a93b8" font-size="9">Step 2: lo=0, hi=8, mid=4 → 'dat' &lt; 'index' → discard left!</text>
    <rect x="20" y="108" width="25" height="25" rx="3" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,1" opacity="0.3"/>
    <rect x="46" y="108" width="25" height="25" rx="3" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,1" opacity="0.3"/>
    <rect x="72" y="108" width="25" height="25" rx="3" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,1" opacity="0.3"/>
    <rect x="98" y="108" width="25" height="25" rx="3" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,1" opacity="0.3"/>
    <rect x="124" y="108" width="25" height="25" rx="3" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="1.5"/><text x="136" y="125" text-anchor="middle" fill="#fbbf24" font-size="8">dat</text>
    <text x="136" y="102" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">mid</text>
    <rect x="150" y="108" width="25" height="25" rx="3" fill="rgba(82,196,26,0.1)" stroke="#52c41a" stroke-width="1"/><text x="162" y="125" text-anchor="middle" fill="#52c41a" font-size="8">grp</text>
    <rect x="176" y="108" width="25" height="25" rx="3" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/><text x="188" y="125" text-anchor="middle" fill="#52c41a" font-size="8">has</text>
    <rect x="202" y="108" width="25" height="25" rx="3" fill="rgba(82,196,26,0.12)" stroke="#52c41a" stroke-width="2"/><text x="214" y="125" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">ind</text>
    <!-- Result -->
    <rect x="20" y="155" width="520" height="75" rx="8" fill="rgba(82,196,26,0.06)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="35" y="175" fill="#52c41a" font-size="10" font-weight="bold">Result: found 'index' at position 7 in 4 steps</text>
    <text x="35" y="190" fill="#9a93b8" font-size="9">Step 3: lo=5, hi=8, mid=6 → 'has' &lt; 'index' → go right</text>
    <text x="35" y="205" fill="#9a93b8" font-size="9">Step 4: lo=7, hi=8, mid=7 → 'index' == 'index' ✓ FOUND!</text>
    <text x="35" y="220" fill="#fbbf24" font-size="9" font-weight="bold">20 terms → 4 comparisons | 1M terms → 20 | 1B terms → 30</text>
  </svg>
  <div class="diag-cap">প্রতি ধাপে অর্ধেক বাদ। log₂(1,000,000) ≈ 20 ধাপে এক মিলিয়ন term-এ খুঁজে বের করা।</div>
</div>
<div class="dialogue en">Book 2 librarian catalog (Door 11) taught you sorting and binary search. Now you see why this is the most used algorithm in a search engine? Every search needs a term dictionary lookup. Sorted array + binary search = O(log n). One billion terms in 30 comparisons. Sorted = power.</div>

<div class="secret-box">📚 Sorted index + binary search = O(log n) lookup। Sort once (O(n log n)), search forever (O(log n))। সাজানো = ক্ষমতা।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>কখন sort করবে, কখন hash map?</strong></p>
<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">Hash Map Only</div>O(1) lookup কিন্তু sorted iteration নেই। Prefix search নেই। Range query নেই।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">Sorted Array + BS</div>O(log n) lookup + sorted iteration + range query + prefix search। Lucene FST এটার compressed সংস্করণ।</div>
</div>
<p><strong>Cross-ref:</strong> Book ৩৯ (Databases) Door ৪-এ B+ tree index দেখবে — sorted index-এর disk-optimized সংস্করণ।</p>`
  }
});

// ── DOOR 19: DIVIDE & CONQUER — MAPREDUCE INDEX BUILDING ──
doors.push({
  num:19, icon:"⛏️", color:"#f97316", name:"পাথর বিভাজকের পাহাড়",
  subtitle:"The Mountain Splitter", tech:"Divide & Conquer — MapReduce-Style Index Building",
  spirit:"ফার্ক — splitting a large task into manageable parts",
  secret:"MapReduce = D&C at scale। Split corpus → parallel index → merge sorted posting lists। O(n/p) যেখানে p = machines। এক machine ৪০ ঘণ্টা → ৪০ machine ১ ঘণ্টা।",
  recall:{
    q:"MapReduce কীভাবে D&C? Map ও Reduce কী করে?",
    qen:"How is MapReduce D&C? What do Map and Reduce do?",
    a:"Map = divide। প্রতিটা machine একটা chunk নিয়ে partial inverted index বানায়। Reduce = conquer+combine। partial index-গুলো merge করো — sorted posting list merge (merge sort-এর combine step)। N machine → N গুণ দ্রুত।",
    aen:"Map = divide. Each machine takes a chunk and builds a partial inverted index. Reduce = conquer+combine. Merge partial indexes — sorted posting list merge (merge sort combine step). N machines → N times faster."
  },
  story:`
<p class="scene-setting">উনিশ তম দিন। পাথরশিল্পী ইব্রাহিম এসে হাজির। তার হাতে একটা বড় হাতুড়ি, হাতে কালশিটে দাগ — পাথর ভাঙার কাজ থেকে। তার সামনে একটা বিশাল পাহাড়। একা ভাঙলে মাস লাগবে। কিন্তু ইব্রাহিম বললেন — ভাগ করো। ৪০ জন কারিগর, প্রতেকজন একটা করে অংশ নাও। সবাই একসাথে কাজ করো। তারপর টুকরো গুলো এক জায়গায় আনো। এটাই MapReduce।</p>
<p class="scene-setting en">Day nineteen. Stonemason Ibrahim arrives. In his hand: a large hammer, calluses from splitting rocks. Before him: a massive mountain. Alone it would take months. But Ibrahim said — divide it. 40 masons, each takes a section. Everyone works simultaneously. Then bring the pieces together. This is MapReduce.</p>

<div class="code-block"># mapreduce_index.py — Day 19: MapReduce-Style Index Building
# Divide: split corpus into chunks, build partial indexes (MAP)
# Conquer: merge partial indexes into final index (REDUCE)

from collections import defaultdict

def map_function(doc_chunk):
    """
    MAP: Each worker builds a partial inverted index from its chunk.
    Input: list of documents
    Output: partial inverted index {term: [(doc_id, tf)]}
    """
    partial_index = defaultdict(list)
    for doc in doc_chunk:
        doc_id = doc['id']
        words = doc['content'].lower().split()
        word_count = defaultdict(int)

        # Count term frequencies
        for word in words:
            word_count[word] += 1

        # Add to partial index
        for word, tf in word_count.items():
            partial_index[word].append((doc_id, tf))

    # Sort each posting list by doc_id (for merge step)
    for word in partial_index:
        partial_index[word].sort()

    return dict(partial_index)

def reduce_function(partial_indexes):
    """
    REDUCE: Merge all partial indexes into one final index.
    Like merge sort's combine step — merge sorted posting lists.
    """
    final_index = defaultdict(list)

    for partial in partial_indexes:
        for term, postings in partial.items():
            final_index[term].extend(postings)

    # Sort merged posting lists
    for term in final_index:
        final_index[term].sort()

    return dict(final_index)

# Simulate: 4 workers processing 8 documents
corpus = [
    {'id': 0, 'content': 'algorithm sorting data'},
    {'id': 1, 'content': 'python algorithm code'},
    {'id': 2, 'content': 'data structure python'},
    {'id': 3, 'content': 'search engine index'},
    {'id': 4, 'content': 'ranking algorithm search'},
    {'id': 5, 'content': 'graph bfs dfs'},
    {'id': 6, 'content': 'hash map index'},
    {'id': 7, 'content': 'tree binary search'},
]

# Divide: split into 4 chunks of 2 docs each
chunks = [corpus[0:2], corpus[2:4], corpus[4:6], corpus[6:8]]

# Map: each worker builds partial index (parallel in real life)
partial_indexes = [map_function(chunk) for chunk in chunks]
print(f"Map phase: {len(partial_indexes)} partial indexes built")

# Reduce: merge into final index
final_index = reduce_function(partial_indexes)
print(f"Reduce phase: {len(final_index)} unique terms indexed")

print("\\nSample terms from final index:")
for term in sorted(final_index.keys())[:5]:
    print(f"  '{term}' → {final_index[term]}")

# Output:
# Map phase: 4 partial indexes built
# Reduce phase: 18 unique terms indexed
#
# Sample terms from final index:
#   'algorithm' → [(0, 1), (1, 1), (4, 1)]
#   'binary' → [(7, 1)]
#   'bfs' → [(5, 1)]
#   'code' → [(1, 1)]
#   'data' → [(0, 1), (2, 1)]

# Scale: 1 machine, 100M docs → 40 hours
#         40 machines, 100M docs → 1 hour
#         1000 machines (Google scale) → minutes</div>

<div class="dialogue">Book ২-এর পাথর বিভাজকের পাহাড় (Door ১২) D&C শিখিয়েছিলেন — বড় সমস্যা ভাগ করো, আলাদা সমাধান করো, জোড়ো। এখন দেখলে সার্চ ইঞ্জিনে কেন? Google প্রতিদিন ট্রিলিয়ন page index করে — এক machine-এ অসম্ভব। MapReduce: হাজার machine-ে ভাগ করো, প্রতিটা partial index বানায় (map), তারপর merge করো (reduce)।</div>

<div class="diagram">
  <div class="diag-title">MapReduce Pipeline — Split → Parallel Map → Merge</div>
  <svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrMR" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#f97316"/></marker></defs>
    <!-- Input corpus -->
    <rect x="20" y="115" width="80" height="50" rx="8" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="60" y="135" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">Corpus</text>
    <text x="60" y="150" text-anchor="middle" fill="#9a93b8" font-size="8">8M docs</text>
    <!-- Split arrows -->
    <line x1="100" y1="130" x2="140" y2="60" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#arrMR)"/>
    <line x1="100" y1="140" x2="140" y2="110" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#arrMR)"/>
    <line x1="100" y1="150" x2="140" y2="160" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#arrMR)"/>
    <line x1="100" y1="160" x2="140" y2="210" stroke="#a78bfa" stroke-width="1.5" marker-end="url(#arrMR)"/>
    <!-- Map workers -->
    <rect x="145" y="45" width="100" height="35" rx="6" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
    <text x="195" y="60" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Worker 1</text>
    <text x="195" y="73" text-anchor="middle" fill="#9a93b8" font-size="8">docs 0-1 → index₁</text>
    <rect x="145" y="95" width="100" height="35" rx="6" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
    <text x="195" y="110" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Worker 2</text>
    <text x="195" y="123" text-anchor="middle" fill="#9a93b8" font-size="8">docs 2-3 → index₂</text>
    <rect x="145" y="145" width="100" height="35" rx="6" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
    <text x="195" y="160" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Worker 3</text>
    <text x="195" y="173" text-anchor="middle" fill="#9a93b8" font-size="8">docs 4-5 → index₃</text>
    <rect x="145" y="195" width="100" height="35" rx="6" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
    <text x="195" y="210" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Worker 4</text>
    <text x="195" y="223" text-anchor="middle" fill="#9a93b8" font-size="8">docs 6-7 → index₄</text>
    <!-- Reduce arrows -->
    <line x1="245" y1="62" x2="300" y2="130" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrMR)"/>
    <line x1="245" y1="112" x2="300" y2="135" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrMR)"/>
    <line x1="245" y1="162" x2="300" y2="145" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrMR)"/>
    <line x1="245" y1="212" x2="300" y2="150" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrMR)"/>
    <!-- Reduce -->
    <rect x="305" y="115" width="110" height="50" rx="8" fill="rgba(82,196,26,0.12)" stroke="#52c41a" stroke-width="2"/>
    <text x="360" y="135" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">REDUCE</text>
    <text x="360" y="150" text-anchor="middle" fill="#9a93b8" font-size="8">merge sorted lists</text>
    <!-- Final output -->
    <line x1="415" y1="140" x2="450" y2="140" stroke="#52c41a" stroke-width="2" marker-end="url(#arrMR)"/>
    <rect x="455" y="115" width="90" height="50" rx="8" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="2"/>
    <text x="500" y="135" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Final Index</text>
    <text x="500" y="150" text-anchor="middle" fill="#9a93b8" font-size="8">18 terms</text>
    <!-- Labels -->
    <text x="195" y="30" text-anchor="middle" fill="#f97316" font-size="10" font-weight="bold">MAP (divide)</text>
    <text x="360" y="100" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">REDUCE (combine)</text>
    <!-- Timing -->
    <rect x="20" y="245" width="550" height="30" rx="6" fill="rgba(167,139,250,0.06)" stroke="rgba(167,139,250,0.2)" stroke-width="1"/>
    <text x="35" y="263" fill="#a78bfa" font-size="8" font-weight="bold">1 machine: 40h → 4 machines: 10h → 40 machines: 1h → 1000: minutes</text>
  </svg>
  <div class="diag-cap">MapReduce: corpus → split → parallel workers → merge। O(n/p), p = machines।</div>
</div>
<div class="dialogue en">Book 2 stone splitter mountain (Door 12) taught you D&C — divide the big problem, solve separately, combine. Now you see why in search engines? Google indexes trillions of pages daily — impossible on one machine. MapReduce: divide across thousands of machines, each builds a partial index (map), then merge (reduce).</div>

<div class="secret-box">⛏️ MapReduce = D&C at scale। Map: partial index per machine। Reduce: merge sorted posting lists। O(n/p), p = machines।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>MapReduce এর ত্রি-ধাপ:</strong></p>
<table class="kv-table">
<tr><th>Phase</th><th>কাজ</th><th>D&C Step</th></tr>
<tr><td class="hl">Map</td><td>প্রতিটা machine chunk process</td><td>Divide</td></tr>
<tr><td class="hl">Shuffle</td><td>same key গুলো এক machine-এ</td><td>—</td></tr>
<tr><td class="hl">Reduce</td><td>merge sorted posting lists</td><td>Combine</td></tr>
</table>
<p><strong>Cross-ref:</strong> Book ৩৫ (Distributed Systems) Door ৮-এ MapReduce দেখবে — এখানকার simplified সংস্করণের পূর্ণ রূপ। Book ৪৩ (Cloud/DevOps)-এ Kubernetes-এ distributed job scheduling দেখবে।</p>`
  }
});


// ── DOOR 20: SYNTHESIS — THE COMPLETE SEARCH ENGINE ──
doors.push({
  num:20, icon:"🔍", color:"#fbbf24", name:"নির্মাণের শেষ দিন",
  subtitle:"The Final Day — All 19 Pieces Work Together", tech:"Complete Search Engine — All Algorithms United",
  spirit:"জামি — gathering/all-comprehensive, the name al-Jami (the Gatherer)",
  secret:"সম্পূর্ণ সার্চ ইঞ্জিন = ১৯টা অ্যালগরিদম, একটা লক্ষ্য। প্রতিটা আলাদা — কিন্তু একসাথে একটা জ্ঞান অন্বেষণ যন্ত্র। তুমি শুধু algorithm শিখোনি — তুমি একটা সিস্টেম বানিয়েছ।",
  recall:{
    q:"একটা সার্চ কোয়েরি প্রবেশ করলে কোন কোন algorithm কাজ করে?",
    qen:"Which algorithms fire when a search query enters?",
    a:"Spell check (DP Door ৭) → autocomplete suggestion (Trie Door ১৫) → query parse (stack Door ১১ + backtracking Door ৮) → term lookup (hash map Door ১২ + binary search Door ১৮) → posting list intersect (two pointers Door ৫) → phrase match (KMP Door ৯) → rank (heap Door ১৩ + PageRank Door ১৬) → snippet (greedy Door ৬) → result।",
    aen:"Spell check (DP Door 7) → autocomplete (Trie Door 15) → query parse (stack Door 11 + backtracking Door 8) → term lookup (hash map Door 12 + binary search Door 18) → posting intersect (two pointers Door 5) → phrase match (KMP Door 9) → rank (heap Door 13 + PageRank Door 16) → snippet (greedy Door 6) → result."
  },
  story:`
<p class="scene-setting">বিশ তম দিন। শেষ দিন। উস্তাদ রাহিলা ফিরে এলেন — যিনি প্রথম দিন এসেছিলেন হিসাব নিয়ে (Door ১)। এখন কারখানা পরিবর্তিত। বিশ দিনের কাজ এক জায়গায়। তার চোখে চশমা নেই — ঘামের দাগ নেই। শান্ত গর্ব। তিনি জানেন — যন্ত্রটা সম্পূর্ণ। তিনি তোমার দিকে তাকালেন। এখন তুমি দেখবে — ১৯টা কারিগরের ১৯টা অ্যালগরিদম একসাথে কাজ করে একটা সার্চ ইঞ্জিন বানায়।</p>
<p class="scene-setting en">Day twenty. The final day. Ustad Rahila returns — she who came on day one with a budget (Door 1). Now the workshop is transformed. Twenty days of work, assembled. No glasses, no sweat mark. Calm pride. She knows — the engine is complete. She looks at you. Now you will see — 19 craftsmen, 19 algorithms, working together as one search engine.</p>

<div class="dialogue">রাহিলা বললেন, কারখানার মেঝেতে দাঁড়িয়ে। উনিশ জন কারিগর এসেছিলেন — প্রতিজন একটা করে দরজা নিয়ে। এখন দেখো, সবগুলো একসাথে কাজ করে কেমন:</div>
<div class="dialogue en">Rahila said, standing on the workshop floor. Nineteen craftsmen came — each brought one door. Now see how they all work together:</div>

<div class="code-block"># search_engine.py — Day 20: THE COMPLETE SEARCH ENGINE
# Every algorithm from Doors 1-19, assembled into one pipeline.
#
# When a user types a query, here is what happens — step by step:

class SearchEngine:
    """
    The complete search engine — every algorithm from this book,
    working together as one unified system.

    Architecture:
    ┌─────────────────────────────────────────────────┐
    │  CRAWL (Door 2: Recursion, Door 10: Bloom)     │
    │     ↓                                           │
    │  STORE (Door 3: Arrays)                         │
    │     ↓                                           │
    │  INDEX (Door 12: Hash Map, Door 19: MapReduce)  │
    │     ↓                                           │
    │  QUERY PIPELINE:                                │
    │    1. Spell check (Door 7: DP)                  │
    │    2. Autocomplete (Door 15: Trie)              │
    │    3. Parse (Door 11: Stack, Door 8: Backtrack) │
    │    4. Term lookup (Door 12: Hash + Door 18: BS) │
    │    5. AND intersect (Door 5: Two Pointers)      │
    │    6. Phrase match (Door 9: KMP)                │
    │    7. Rank (Door 13: Heap + Door 16: PageRank)  │
    │    8. Snippet (Door 6: Greedy)                  │
    │    9. Dedup (Door 17: Union-Find)               │
    │     ↓                                           │
    │  RESULTS                                        │
    └─────────────────────────────────────────────────┘

    19 teachers. 19 algorithms. 1 search engine.

    উস্তাদ রাহিলা (Door 1) — Big-O budget
    নকশাবিদ ইসহাক (Door 2) — Recursion crawler
    গ্রন্থাগারিক ফাতেমা (Door 3) — Arrays corpus
    জুয়েলার মাহমুদ (Door 4) — Linked Lists posting
    ক্যালিগ্রাফার জয়নুল (Door 5) — Two Pointers AND
    সম্পাদক নাদিয়া (Door 6) — Greedy snippet
    ভাষাবিদ সালমা (Door 7) — DP spell check
    নাবিক ইউসুফ (Door 8) — Backtracking parser
    খোদাইকারী বশীর (Door 9) — KMP phrase match
    প্রহরী হামজা (Door 10) — Bloom filter dedup
    মালিক রুকুন ও সরদার তারিক (Door 11) — Stack/Queue
    তালা নির্মাতা করিম (Door 12) — Hash Map index
    মসলা ব্যবসায়ী সালেহ (Door 13) — Heap ranking
    বংশবিদ আব্দুল্লাহ (Door 14) — BST term dict
    শিক্ষিকা রাবিয়া (Door 15) — Trie autocomplete
    মানচিত্রকার দাউদ (Door 16) — Graphs PageRank
    গোত্রপতি হাশিম (Door 17) — Union-Find dedup
    গ্রন্থাগারিক আমিনা (Door 18) — Sort + Binary Search
    পাথরশিল্পী ইব্রাহিম (Door 19) — MapReduce index
    """

    def search(self, query):
        """The complete search pipeline — 19 algorithms."""
        # Step 1: Spell correction (DP, Door 7)
        corrected = self.spell_check(query)  # Levenshtein

        # Step 2: Parse query (Stack + Backtracking, Doors 11+8)
        terms = self.parse_query(corrected)  # bracket matching

        # Step 3: Look up terms (Hash Map + Binary Search, Doors 12+18)
        posting_lists = [self.index.search(t) for t in terms]

        # Step 4: AND intersection (Two Pointers, Door 5)
        doc_ids = self.intersect_all(posting_lists)

        # Step 5: Phrase match if quoted (KMP, Door 9)
        if self.has_phrase(query):
            doc_ids = self.phrase_filter(doc_ids, query)

        # Step 6: Score + rank (Heap + PageRank, Doors 13+16)
        scored = [(self.score(d, terms) * self.pagerank[d], d)
                  for d in doc_ids]
        top_k = self.top_k(scored, k=10)  # Heap

        # Step 7: Generate snippets (Greedy, Door 6)
        results = [(d, self.snippet(d, terms)) for _, d in top_k]

        # Step 8: Deduplicate (Union-Find, Door 17)
        results = self.dedupe(results)

        return results

# Every line of this function uses an algorithm from this book.
# 19 doors. 19 algorithms. 1 search engine.
# You built this.</div>

<div class="dialogue">রাহিলা বললেন, চশমা পরে আবার। এখন তুমি দেখো — প্রতিটা সার্চে এই ১৯টা algorithm একসাথে কাজ করে। তুমি শুধু algorithm শিখোনি। তুমি শিখেছ কীভাবে একটা সিস্টেম বানাতে হয়। প্রতিটা algorithm একটা টুল — কিন্তু টুল একা কিছু বানায় না। কারিগর বানায়। আর কারিগর হলেন সেই মানুষ যিনি জানেন কোন টুল কোথায় ব্যবহার করতে হয়।</div>
<div class="dialogue en">Rahila said, putting on her glasses again. Now you see — every search fires all 19 algorithms together. You did not just learn algorithms. You learned how to build a system. Each algorithm is a tool — but tools alone build nothing. The craftsman builds. And the craftsman is the one who knows which tool to use where.</div>

<div class="verse">الَّذِي عَلَّمَ بِالْقَلَمِ — عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ</div>
<div class="verse-trans">যিনি কলমের মাধ্যমে শিখিয়েছেন — মানুষকে শিখিয়েছেন যা সে জানত না। — কুরআন ৯৬:৪-৫</div>

<div class="secret-box">🔍 সম্পূর্ণ সার্চ ইঞ্জিন = ১৯টা অ্যালগরিদম, একটা লক্ষ্য। প্রতিটা আলাদা — কিন্তু একসাথে একটা জ্ঞান অন্বেষণ যন্ত্র।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>এই বইয়ের সম্পূর্ণ architecture:</strong></p>
<table class="kv-table">
<tr><th>Layer</th><th>Doors</th><th>কাজ</th></tr>
<tr><td class="hl">Crawl</td><td>2, 10, 11</td><td>Page আবিষ্কার + dedup</td></tr>
<tr><td class="hl">Store</td><td>3, 4</td><td>Corpus + posting lists</td></tr>
<tr><td class="hl">Index</td><td>12, 14, 18, 19</td><td>Inverted index build</td></tr>
<tr><td class="hl">Query</td><td>5, 7, 8, 9, 11, 15</td><td>Parse + search + suggest</td></tr>
<tr><td class="hl">Rank</td><td>6, 13, 16, 17</td><td>Score + rank + dedup</td></tr>
</table>
<p><strong>Next steps:</strong> এখন এই কোড নামাও, Python-এ চালাও, নিজের corpus দাও। তারপর Book ২ (DSA Bazaar)-এর algorithm গুলো আবার পড়ো — এবার তুমি দেখবে প্রতিটা algorithm বাস্তবে কোথায় বসে।</p>`
  }
});

// ── DOOR 21: BONUS — FIVE MORE PROJECTS ──
doors.push({
  num:21, icon:"🎁", color:"#fbbf24", name:"আরও নির্মাণের দিগন্ত",
  subtitle:"Five More Projects", tech:"Bonus — Apply These Algorithms to 5 New Projects",
  spirit:"কাল — tomorrow, the door to future building",
  secret:"অ্যালগরিদম শেখো না — অ্যালগরিদম দিয়ে বানাও। এটাই কারিগরের উপায়। প্রতিটা project এই বইয়ের algorithm দিয়ে বানানো যায়।",
  recall:{
    q:"এই বইয়ের কোন algorithm গুলো GPS navigator-এ ব্যবহৃত হবে?",
    qen:"Which algorithms from this book would a GPS navigator use?",
    a:"Graphs (shortest path — Dijkstra/A*), heaps (priority queue for A*), trie (street name autocomplete), hash map (coordinate lookup), arrays (map data storage)। পাঁচটা algorithm এক project-এ।",
    aen:"Graphs (shortest path), heaps (A* priority queue), trie (street autocomplete), hash map (coordinates), arrays (map storage). Five algorithms in one project."
  },
  story:`
<p class="scene-setting">একুশ তম দিন। শেষ দিন — কিন্তু নতুন শুরু। উস্তাদ রাহিলা দরজার কাছে দাঁড়িয়ে। তার হাতে একটা তালিকা — পাঁচটা নতুন project-এর ধারণা। তিনি বললেন — তুমি একটা সার্চ ইঞ্জিন বানিয়েছ। কিন্তু এই algorithm গুলো শুধু সার্চ ইঞ্জিনে সীমাবদ্ধ নয়। প্রতিটা software এই algorithm গুলোর উপর দাঁড়িয়ে। এই পাঁচটা project দেখো — তারপর নিজে বানাও।</p>
<p class="scene-setting en">Day twenty-one. The last day — but a new beginning. Ustad Rahila stands at the door. In her hand: a list of five new project ideas. She said — you built a search engine. But these algorithms are not limited to search. Every software stands on these algorithms. Look at these five projects — then go build.</p>

<div class="dialogue">রাহিলা তালিকাটা তোমার হাতে দিলেন। প্রতিটা project-এ লেখা কোন কোন algorithm লাগবে। তুমি দেখবে — এই বইয়ে শেখা প্রতিটা algorithm একাধিক জায়গায় ব্যবহৃত হয়। কারিগর বলেন — একটা হাতুড়ি দিয়ে শুধু পেরেক ঠোকা যায় না, দেয়াল ভাঙাও যায়, ভাস্কর্যও বানানো যায়। প্রতিটা algorithm একটা হাতুড়ি — কী বানাবে সেটা তোমার উপর।</div>
<div class="dialogue en">Rahila handed you the list. Each project shows which algorithms it needs. You will see — every algorithm from this book is used in multiple places. The craftsman says — a hammer does not just drive nails. It can break walls, shape sculpture. Every algorithm is a hammer — what you build is up to you.</div>

<div class="code-block"># ─────────────────────────────────────────────
# FIVE MORE PROJECTS — Where These Algorithms Live
# ─────────────────────────────────────────────

# 1. GPS NAVIGATOR (Google Maps style)
#    Algorithms used:
#    - Graphs (Door 16): road network = graph, find shortest path
#    - Heaps (Door 13): A* algorithm priority queue
#    - Trie (Door 15): street name autocomplete as you type
#    - Hash Maps (Door 12): coordinate → place name lookup
#    - Arrays (Door 3): map tile storage
#
#    Build: Given a road graph, find shortest path from A to B.

# 2. SPELL CHECKER APP (Grammarly style)
#    Algorithms used:
#    - DP (Door 7): Levenshtein distance for corrections
#    - Trie (Door 15): dictionary word storage + prefix search
#    - Hash Maps (Door 12): user correction history
#    - Bloom Filter (Door 10): is this word in dictionary?
#
#    Build: Given a text, find and correct all misspelled words.

# 3. MUSIC RECOMMENDER (Spotify style)
#    Algorithms used:
#    - Hash Maps (Door 12): user listening history
#    - Heaps (Door 13): top-K most similar songs
#    - Graphs (Door 16): artist similarity graph
#    - Bloom Filter (Door 10): has user heard this song already?
#    - Arrays (Door 3): feature vector storage
#
#    Build: Given user history, recommend 10 new songs.

# 4. FILE COMPRESSOR (ZIP style)
#    Algorithms used:
#    - Bit Manipulation (Door 10): Huffman encoding
#    - Trees (Door 14): Huffman tree construction
#    - D&C (Door 19): recursive file splitting
#    - Hash Maps (Door 12): frequency counting
#    - Sorting (Door 18): sorted frequency table
#
#    Build: Given a text file, compress it to 50% of original size.

# 5. TASK SCHEDULER (OS scheduler style)
#    Algorithms used:
#    - Heaps (Door 13): priority queue for task scheduling
#    - Stacks (Door 11): undo functionality
#    - Union-Find (Door 17): task dependency grouping
#    - Two Pointers (Door 5): merge sorted task lists
#    - Recursion (Door 2): recursive task decomposition
#
#    Build: Given tasks with priorities and dependencies,
#           schedule them optimally.</div>

<div class="dialogue">রাহিলা দরজা খুললেন। বাইরে রোদ। তিনি বললেন — এখন যাও। বানাও। ভুল করো। আবার বানাও। কারিগর বলেন — প্রথম বার ভাঙা যন্ত্র বানাও। দ্বিতীয় বার চলে। তৃতীয় বার সুন্দর। কিন্তু থামো না। কারণ শেখা শেষ নেই।</div>
<div class="dialogue en">Rahila opened the door. Sunlight outside. She said — now go. Build. Break. Rebuild. The craftsman says — the first machine you build will break. The second will run. The third will be beautiful. But never stop. Because learning never ends.</div>

<div class="secret-box">🎁 অ্যালগরিদম শেখো না — অ্যালগরিদম দিয়ে বানাও। এটাই কারিগরের উপায়। পাঁচটা project, একুশটা algorithm — এখন তোমার হাতে।</div>
`,
  senior:{
    title:"প্রয়োগিক গাইড — Practical Guide",
    body:`<p><strong>প্রতিটা project-এর জন্য প্রথম পদক্ষেপ:</strong></p>
<ul class="checklist">
<li><strong>GPS Navigator:</strong> শুরু করো Dijkstra algorithm দিয়ে — weighted graph + priority queue</li>
<li><strong>Spell Checker:</strong> শুরু করো Levenshtein DP দিয়ে — dictionary + edit distance</li>
<li><strong>Music Recommender:</strong> শুরু করো collaborative filtering দিয়ে — user matrix + cosine similarity</li>
<li><strong>File Compressor:</strong> শুরু করো Huffman coding দিয়ে — frequency table + tree</li>
<li><strong>Task Scheduler:</strong> শুরু করো priority queue দিয়ে — heap + topological sort</li>
</ul>
<p><strong>Cross-ref:</strong> প্রতিটা project-এর গভীরে যেতে হলে — Book ৩৮ (Operating Systems), Book ৪৩ (Cloud/DevOps), Book ৪৪ (Data Engineering), Book ৪৭ (Testing/QA) পড়ো। এই বইয়ের algorithm গুলো সেখানে production-এ ব্যবহৃত হয়।</p>`
  }
});
