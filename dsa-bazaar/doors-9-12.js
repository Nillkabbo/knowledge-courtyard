// ════════════════════════════════════════
// DSA BAZAAR — DOORS 9-12
// 9. Graphs (BFS/DFS)   10. Union-Find
// 11. Sorting & Binary Search   12. Divide & Conquer
// ════════════════════════════════════════

// ── DOOR 9: GRAPHS (BFS / DFS) ──
doors.push({
  num:9, icon:"🧵", color:"#36d6e7", name:"তাঁতির তাঁত",
  subtitle:"The Weaver's Loom", tech:"Graphs (BFS / DFS)",
  secret:"Graph = সম্পর্কের জাল। Adjacency list = প্রতিটা node তার প্রতিবেশী জানে। BFS = সবচেয়ে কাছের পথ।",
  recall:{
    q:"তাঁতি কেন পুরো কাপড় একসাথে দেখেন না, একটা সুতো ধরে হাঁটেন?",
    qen:"Why does the weaver not look at the whole cloth at once, but walks one thread?",
    a:"কারণ সম্পর্ক একটা সুতো ধরে চললে বোঝা যায়। BFS সবচেয়ে কাছের পথ খুঁজে — স্তরে স্তরে। DFS গভীরে যায় — এক সুতোয় শেষ পর্যন্ত। দুটোই ওয়াকথ্রু — কিন্তু ভিন্ন কৌশলে।",
    aen:"Because relationships are understood by following one thread. BFS finds the closest path — layer by layer. DFS goes deep — one thread to the end. Both are traversals — but different strategies."
  },
  story:`
<p class="scene-setting">নবম দোকান। তাঁতির কারখানা। সুতোর খসখস, রঙের বালতি, তাঁতের ছন্দ। বেগম জাইনাব কাজ করছেন — হাজার সুতো একসাথে, কিন্তু প্রতিটা সুতো একটা নোড থেকে আরেকটায় যায়। কোনো সুতো একটাই গন্তব্যে যায়, কোনোটা শাখা প্রশাখায় ছড়ায়। তাঁতের কাপড় আসলে একটা graph — নোড আর edge-এর জাল।</p>
<p class="scene-setting en">The ninth shop. The Weaver's workshop. Rustle of thread, buckets of dye, rhythm of the loom. Begum Zainab works — thousands of threads together, but each thread goes from one node to another. Some threads go to one destination, some branch into tributaries. The cloth on the loom is actually a graph — a web of nodes and edges.</p>

<div class="dialogue">বংশবিদ বলেছিলেন — সম্পর্ক বৃক্ষের মতো, cycle নেই। কিন্তু আমি বলি — কখনো সম্পর্ক বৃক্ষ নয়, জাল। এক নোড থেকে অনেক শাখা, কোনোটা আবার ফিরে আসে। কোন সুতো ধরে যাবে? কোন পথ সবচেয়ে ছোট? এটাই graph-এর প্রশ্ন — সম্পর্ক আর পথ।</div>
<div class="dialogue en">"The genealogist said — relationships are a tree, no cycles. But I say — sometimes relationships aren't a tree, but a web. From one node, many branches, some returning. Which thread to follow? Which path is shortest? This is the graph's question — relationships and paths."</div>

<div class="diagram">
  <div class="diag-title">BFS বনাম DFS — একই গ্রাফ, দুই ভ্রমণ</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <!-- left graph BFS -->
    <text class="lbl-sm" x="140" y="20" fill="#52c41a" style="font-size:13px">BFS (queue) — স্তরে স্তরে</text>
    <circle class="node-hot" cx="140" cy="55" r="18"/><text class="lbl" x="140" y="56">A</text>
    <circle class="node-cyan" cx="80" cy="125" r="18"/><text class="lbl" x="80" y="126">B</text>
    <circle class="node-cyan" cx="200" cy="125" r="18"/><text class="lbl" x="200" y="126">C</text>
    <circle class="node-leaf" cx="50" cy="200" r="18"/><text class="lbl" x="50" y="201">D</text>
    <circle class="node-leaf" cx="140" cy="200" r="18"/><text class="lbl" x="140" y="201">E</text>
    <circle class="node-leaf" cx="230" cy="200" r="18"/><text class="lbl" x="230" y="201">F</text>
    <line class="edge" x1="140" y1="73" x2="80" y2="107"/>
    <line class="edge" x1="140" y1="73" x2="200" y2="107"/>
    <line class="edge" x1="80" y1="143" x2="50" y2="182"/>
    <line class="edge" x1="80" y1="143" x2="140" y2="182"/>
    <line class="edge" x1="200" y1="143" x2="140" y2="182"/>
    <line class="edge" x1="200" y1="143" x2="230" y2="182"/>
    <text class="lbl-sm" x="140" y="245" text-anchor="middle" fill="#52c41a">A → B,C → D,E,F</text>

    <!-- right graph DFS -->
    <text class="lbl-sm" x="420" y="20" fill="#f06292" style="font-size:13px">DFS (stack) — গভীরে গিয়ে ফেরা</text>
    <circle class="node-hot" cx="420" cy="55" r="18"/><text class="lbl" x="420" y="56">A</text>
    <circle class="node" cx="360" cy="125" r="18"/><text class="lbl" x="360" y="126">B</text>
    <circle class="node" cx="480" cy="125" r="18"/><text class="lbl" x="480" y="126">C</text>
    <circle class="node-cyan" cx="330" cy="200" r="18"/><text class="lbl" x="330" y="201">D</text>
    <circle class="node" cx="420" cy="200" r="18"/><text class="lbl" x="420" y="201">E</text>
    <circle class="node" cx="510" cy="200" r="18"/><text class="lbl" x="510" y="201">F</text>
    <line class="edge" x1="420" y1="73" x2="360" y2="107"/>
    <line class="edge" x1="420" y1="73" x2="480" y2="107"/>
    <line class="edge" x1="360" y1="143" x2="330" y2="182"/>
    <line class="edge" x1="360" y1="143" x2="420" y2="182"/>
    <line class="edge" x1="480" y1="143" x2="420" y2="182"/>
    <line class="edge" x1="480" y1="143" x2="510" y2="182"/>
    <text class="lbl-sm" x="420" y="245" text-anchor="middle" fill="#f06292">A → B → D → E → C → F</text>
  </svg>
  <div class="diag-cap">একই গ্রাফ, একই কোড — শুধু queue বদলে stack। দুই ভ্রমণ, দুই ফল।</div>
</div>

<div class="dialogue">Graph হলো নোড (node) আর সম্পর্ক (edge)-এর সংগ্রহ। প্রতিটা নোড জানে তার প্রতিবেশী কারা — একে বলে adjacency list। ঢাকা → [চট্টগ্রাম, খুলনা, সিলেট]। চট্টগ্রাম → [ঢাকা, কক্সবাজার]। এভাবে প্রতিটা শহর তার প্রতিবেশী জানে।</div>
<div class="dialogue en">"A graph is a collection of nodes and edges. Each node knows its neighbors — this is called an adjacency list. Dhaka → [Chittagong, Khulna, Sylhet]. Chittagong → [Dhaka, Cox's Bazar]. Each city knows its neighbors."</div>

<div class="dialogue">পথ খোঁজার দুটো উপায় — কাফেলা প্রধানের দুই নিয়ম (Door 5)। BFS — প্রথমে সব কাছের প্রতিবেশী দেখো, তারপর এক ধাপ দূরে, তারপর আরও। স্তরে স্তরে। queue দিয়ে। এটা সবচেয়ে কম ধাপের পথ দেয়। DFS — এক সুতো ধরে শেষ পর্যন্ত যাও, তারপর ফিরে এসে আরেকটা। stack দিয়ে। গভীরে যাওয়া।</div>
<div class="dialogue en">"Two ways to find paths — the caravan master's two rules (Door 5). BFS — first check all nearest neighbors, then one step further, then more. Layer by layer, with a queue. This gives the path with fewest steps. DFS — follow one thread to the end, then come back and try another, with a stack. Going deep."</div>

<div class="code-block">BFS — Shortest Path (unweighted graph):

from collections import deque, defaultdict

graph = defaultdict(list)
graph['A'] = ['B', 'C']
graph['B'] = ['A', 'D', 'E']
graph['C'] = ['A', 'F']

def bfs(graph, start, target):
    visited = set()
    queue = deque([(start, [start])])
    while queue:
        node, path = queue.popleft()    # FIFO
        if node == target:
            return path                  # shortest path!
        if node not in visited:
            visited.add(node)
            for neighbor in graph[node]:
                queue.append((neighbor, path + [neighbor]))
    return None

# একই কোড stack দিয়ে = DFS।
# queue (FIFO) → কাছের পথ। stack (LIFO) → গভীরে যাওয়া।</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার — graph তোমার সবকিছুতে। Knowledge graph: ধারণা আর তাদের সম্পর্ক। Agent workflow: এজেন্ট A → টুল B → এজেন্ট C — একটা DAG (directed acyclic graph)। RAG retrieval: প্রশ্ন থেকে সম্পর্কিত ডকুমেন্টে যাওয়া — graph traversal। সব সম্পর্ক, সব পথ।</div>
<div class="dialogue en">"You're an AI engineer — graphs are everywhere. Knowledge graphs: concepts and their relationships. Agent workflows: Agent A → Tool B → Agent C — a DAG. RAG retrieval: going from query to related documents — graph traversal. All relationships, all paths."</div>

<div class="dialogue">উম্মাহ — সম্প্রদায়। কুরআনে আল্লাহ বলেন — "এই উম্মাহ তোমাদের জন্য এক সম্প্রদায়।" (২:১৪৩)। প্রতিটা মানুষ একটা নোড, সম্পর্ক হলো edge। কেউ একা নয় — সবাই সংযুক্ত। Graph হলো সেই সংযোগের গাণিতিক রূপ — সম্পর্কের জাল।</div>
<div class="dialogue en">"Ummah — community. Allah says in the Quran — 'This community is one community for you.' (2:143). Each person is a node, relationships are edges. No one is alone — all connected. The graph is the mathematical form of that connection — the web of relationships."</div>`,
  senior:{
    title:"Adjacency List vs Matrix — কখন কোনটা?",
    body:`
    <p><strong>Adjacency List:</strong> <code>defaultdict(list)</code> — যখন graph sparse (বেশি নোড, কম edge)। মেমোরি কম লাগে। প্রতিটা node শুধু তার প্রতিবেশী রাখে।</p>
    <p><strong>Adjacency Matrix:</strong> <code>n×n</code> 2D array — যখন graph dense বা edge existence দ্রুত চেক করতে হয়। কিন্তু O(n²) মেমোরি।</p>
    <p><strong>Senior habit:</strong> ৯০% সময় adjacency list। <code>collections.defaultdict(list)</code> ব্যবহার করো — <code>graph[a].append(b)</code>। সহজ, পরিষ্কার, কার্যকর।</p>
    <p><strong>ভরযুক্ত গ্রাফ:</strong> weighted edge হলে neighbor এর সাথে weight রাখো: <code>graph[a].append((b, weight))</code>। তখন Dijkstra (Door 14 — Greedy) চালাও shortest path-এর জন্য।</p>`
  },
  exercise:{
    hint:"BFS দিয়ে shortest path খুঁজি — agent workflow simulation!",
    starterCode:`# তাঁতির তাঁত — BFS Shortest Path
from collections import deque, defaultdict

workflow = defaultdict(list)
workflow['start'] = ['fetch_data', 'validate']
workflow['fetch_data'] = ['preprocess']
workflow['validate'] = ['preprocess']
workflow['preprocess'] = ['model_inference']
workflow['model_inference'] = ['post_process', 'log']
workflow['post_process'] = ['response']
workflow['log'] = ['response']
workflow['response'] = []

def bfs_shortest_path(graph, start, target):
    visited = set()
    queue = deque([(start, [start])])
    while queue:
        current, path = queue.popleft()
        if current == target:
            return path
        if current not in visited:
            visited.add(current)
            for neighbor in graph[current]:
                if neighbor not in visited:
                    queue.append((neighbor, path + [neighbor]))
    return None

path = bfs_shortest_path(workflow, 'start', 'response')
if path:
    print(f"Agent workflow path ({len(path)} steps):")
    for i, step in enumerate(path):
        print(f"  Step {i}: {step}")
else:
    print("কোনো পথ নেই!")
`
  }
});

// ── DOOR 10: UNION-FIND (DISJOINT SET) ──
doors.push({
  num:10, icon:"🏛️", color:"#fb923c", name:"গোত্রপতির পরিষদ",
  subtitle:"The Clan Elder's Council", tech:"Union-Find (Disjoint Set Union)",
  secret:"হাজার উপাদান — কে কোন গোত্রে? গোত্র এক হলে (union) আবার ভাঙতে পারবে না। Union-Find — union ও find, দুটোই প্রায় O(1) (path compression সহ)।",
  recall:{
    q:"গোত্রপতি কীভাবে হাজার মানুষের মধ্যে দুজন একই গোত্রের কি না সাথে সাথে বলেন?",
    qen:"How does the clan elder instantly tell if two among thousands belong to the same clan?",
    a:"প্রতিটা মানুষ শুধু তার গোত্রপতির নাম জানে। গোত্রপতি পর্যন্ত পৌঁছাও — একই গোত্রপতি হলে একই গোত্র। union করলে এক গোত্রপতি অন্যের অধীনে যান। find আর union — প্রায় O(1)।",
    aen:"Each person knows only their clan elder's name. Reach the elder — same elder means same clan. On union, one elder goes under the other. Find and union — nearly O(1)."
  },
  story:`
<p class="scene-setting">দশম দোকান। গোত্রপতির পরিষদ। বড় গোল টেবিল, চারপাশে প্রবীণ গোত্রপতিরা। দেয়ালে গোত্রের নকশা — ছোট ছোট বৃত্ত, কয়েকটা এক বৃত্তে যুক্ত, কয়েকটা আলাদা। "জাল নয়," গোত্রপতি শাফিক বললেন, "বৃক্ষও নয়। গোত্র। প্রতিটা গোত্র একটা সেট — কেউ দুই গোত্রে থাকে না, গোত্র এক হলে আলাদা হয় না।"</p>
<p class="scene-setting en">The tenth shop. The clan elder's council. A large round table, senior elders around it. On the wall, clan diagrams — small circles, several joined into one, some separate. "Not a web," Elder Shafiq said, "not a tree either. A clan. Each clan is a set — no one belongs to two, once joined they don't separate."</p>

<div class="dialogue">তাঁতি বলেছিলেন — জাল, যেখানে পথ আছে। কিন্তু আমি বলি — কখনো পথ লাগে না। শুধু প্রশ্ন — দুজন কি একই গোত্রের? হ্যাঁ বা না। পথ খুঁজতে হয় না — শুধু গোত্রপতির নাম মেলাও। দ্রুত, সরল। এটাই গোত্রের কাঠামো — disjoint set।</div>
<div class="dialogue en">"The weaver said — a web, where paths matter. But I say — sometimes you don't need a path. Just the question — are two people of the same clan? Yes or no. No path-finding — just match the elder's name. Fast, simple. This is the clan's structure — the disjoint set."</div>

<div class="diagram">
  <div class="diag-title">Union-Find — Path Compression ও Union by Rank</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <text class="lbl-sm" x="140" y="20" fill="#ff6b35">আগে: লম্বা শৃঙ্খল — find O(n)</text>
    <circle class="node" cx="50" cy="180" r="16"/><text class="lbl-sm" x="50" y="182">A</text>
    <circle class="node" cx="110" cy="140" r="16"/><text class="lbl-sm" x="110" y="142">B</text>
    <circle class="node" cx="170" cy="100" r="16"/><text class="lbl-sm" x="170" y="102">C</text>
    <circle class="node-hot" cx="230" cy="60" r="16"/><text class="lbl-sm" x="230" y="62">D*</text>
    <line class="edge" x1="62" y1="172" x2="98" y2="148"/>
    <line class="edge" x1="122" y1="132" x2="158" y2="108"/>
    <line class="edge" x1="182" y1="92" x2="218" y2="68"/>

    <text class="lbl-sm" x="400" y="20" fill="#52c41a">পরে: চ্যাপটা — find O(1)</text>
    <circle class="node-hot" cx="400" cy="55" r="16"/><text class="lbl-sm" x="400" y="57">D*</text>
    <circle class="node-leaf" cx="330" cy="140" r="16"/><text class="lbl-sm" x="330" y="142">A</text>
    <circle class="node-leaf" cx="400" cy="140" r="16"/><text class="lbl-sm" x="400" y="142">B</text>
    <circle class="node-leaf" cx="470" cy="140" r="16"/><text class="lbl-sm" x="470" y="142">C</text>
    <line class="edge-cyan" x1="340" y1="126" x2="390" y2="68"/>
    <line class="edge-cyan" x1="400" y1="124" x2="400" y2="72"/>
    <line class="edge-cyan" x1="460" y1="126" x2="410" y2="68"/>

    <text class="lbl-sm" x="280" y="205" text-anchor="middle">path compression: find(A) চলাকালে A,B,C-কে সরাসরি root-এ বেঁধে দাও। পরের বার দ্রুত।</text>
  </svg>
</div>

<div class="code-block">Union-Find — Python Implementation:

  class UnionFind:
      def __init__(self, n):
          self.parent = list(range(n))
          self.rank = [0] * n

      def find(self, x):
          if self.parent[x] != x:
              self.parent[x] = self.find(self.parent[x])  # path compression
          return self.parent[x]

      def union(self, x, y):
          px, py = self.find(x), self.find(y)
          if px == py:
              return False          # একই সেটে ছিল — cycle!
          if self.rank[px] < self.rank[py]:
              px, py = py, px
          self.parent[py] = px      # union by rank
          if self.rank[px] == self.rank[py]:
              self.rank[px] += 1
          return True               # নতুন union হলো

  দুটো optimization একসাথে → amortized O(α(n)) ≈ O(1)
  (α = inverse Ackermann; α < 4 যতদিন n < 10^600)

WHEN TO USE UNION-FIND:
  ✅ Connected components (graph-এ কয়টা দ্বীপ?)
  ✅ Cycle detection (undirected graph-এ সাইকেল আছে?)
  ✅ Kruskal's MST (Minimum Spanning Tree)
  ✅ Dynamic connectivity (edge যোগ হচ্ছে ধীরে ধীরে)
  ✅ Image segmentation (পিক্সেল গোত্রে ভাগ)
  ✅ Clustering (HAC-এর single-linkage variant)

WHY "NO SPLIT":
  Union-Find শুধু জোড়ে — বিচ্ছেদ করতে পারে না।
  যদি edge মুছতে হয় → offline reverse trick
  (সব operation পেছন থেকে প্রশ্ন সাজাও — delete → union হয়ে যায়)।</div>

<div class="dialogue">জামাত — দল, সম্প্রদায়। ইসলামে জামাতের গুরুত্ব অপরিসীম — "একজন আরেকজনের ভাই," "এক জামাতে থাকো।" গোত্র একবার যুক্ত হলে আলাদা হয় না — সম্প্রদায়ের বাঁধন শক্ত। Union-Find-এর সৌন্দর্য — একবার union, চিরস্থায়ী। find শুধু জিজ্ঞেস করে — তুমি কার সাথে যুক্ত?</div>
<div class="dialogue en">"Jamaat — group, community. In Islam, the community's importance is boundless — 'one is brother to another,' 'stay in the group.' Once clans join, they don't separate — the bond of community is strong. The beauty of union-find — once unioned, forever. Find only asks — who are you connected to?"</div>`,
  senior:{
    title:"Union-Find in Practice",
    body:`
    <p><strong>Two optimizations সবসময় একসাথে:</strong> path compression + union by rank। একটা ছাড়লেই ধীরে যায়।</p>
    <p><strong>Number of islands</strong> (LeetCode 200): grid একটা একটা cell দেখো — '1' হলে union neighbors সাথে। শেষে কয়টা root বাকি = কয়টা দ্বীপ।</p>
    <p><strong>Cycle detect:</strong> edge একটা একটা যোগ করো। যদি <code>union()</code> <code>False</code> ফেরত দেয় — মানে দুই প্রান্ত আগেই এক সেটে ছিল → cycle!</p>
    <p><strong>Offline trick:</strong> যদি edge মুছতে হয় — সব operation পেছনের দিক থেকে প্রসেস করো।</p>`
  },
  exercise:{
    hint:"UnionFind class বানাও — path compression সহ। তারপর cycle detect করো!",
    starterCode:`# গোত্রপতির পরিষদ — Union-Find with Path Compression
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # compress!
        return self.parent[x]

    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return False
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        return True

def has_cycle(n, edges):
    """edges = [(0,1), (1,2), ...]. cycle আছে কি?"""
    uf = UnionFind(n)
    for u, v in edges:
        if not uf.union(u, v):
            return True
    return False

print(has_cycle(3, [(0,1), (1,2), (0,2)]))   # True (cycle)
print(has_cycle(3, [(0,1), (1,2)]))           # False (tree)
`
  }
});

// ── DOOR 11: SORTING & BINARY SEARCH ──
doors.push({
  num:11, icon:"📚", color:"#4a9eff", name:"গ্রন্থাগারিকের তালিকা",
  subtitle:"The Librarian's Catalog", tech:"Sorting & Binary Search",
  secret:"সাজানো তালিকায় খোঁজ = O(log n)। অসাজানো = O(n)। সাজানো = ক্ষমতা।",
  recall:{
    q:"গ্রন্থাগারিক হাজার বইয়ের মধ্যে কীভাবে এক সেকেন্ডে খুঁজে পান?",
    qen:"How does the librarian find one book among thousands in one second?",
    a:"বইগুলো সাজানো থাকে — alphabetically বা numerically। Binary search: মাঝে দেখো, অর্ধেক বাদ দাও, আবার মাঝে দেখো। প্রতি ধাপে অর্ধেক কমে। O(log n)।",
    aen:"Books are sorted — alphabetically or numerically. Binary search: check the middle, discard half, check the new middle. Halves each step. O(log n)."
  },
  story:`
<p class="scene-setting">একাদশ দোকান। একটা প্রাচীন গ্রন্থাগার। কাগজের সুবাস, চামড়ার বাঁধাই, সারিবদ্ধ তাক। কাতিব ইউসুফ দাঁড়িয়ে আছেন — লম্বা, কৃশকায়, চোখে ধৈর্য। তাঁর সামনে হাজার বই — কিন্তু সব সাজানো। Alphabetically। কোনো বই ছড়ানো নেই। প্রতিটা তাকে নির্দিষ্ট অক্ষর।</p>
<p class="scene-setting en">The eleventh shop. An ancient library. Scent of paper, leather bindings, ordered shelves. Katib Yusuf stands — tall, lean, patience in his eyes. Before him: thousands of books — but all sorted. Alphabetically. None scattered. Each shelf a specific letter.</p>

<div class="dialogue">বংশবিদ বলেছিলেন — বৃক্ষে খোঁজা যায়, O(log n)-এ। কিন্তু আমি বলি — বৃক্ষ লাগে না যদি তালিকা সাজানো থাকে। Binary search — মাঝে দেখো, অর্ধেক বাদ দাও, আবার মাঝে। প্রতি ধাপে অর্ধেক কমে। হাজার বইয়ের মধ্যে ১০ ধাপে। মিলিয়নে ২০ ধাপে। (জ্যোতির্বিদের O(log n) কথা মনে আছে?)</div>
<div class="dialogue en">"The genealogist said — trees give O(log n) search. But I say — no tree needed if the list is sorted. Binary search — check the middle, discard half, check again. Halves each step. A thousand books in 10 steps. A million in 20. (Remember the astrolabe maker's O(log n)?)"</div>

<div class="diagram">
  <div class="diag-title">Binary Search — প্রতি ধাপে অর্ধেক বাদ</div>
  <svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg">
    ${[2,5,8,12,16,23,38,56,72,91].map((v,i)=>`
    <rect class="${i===5?'node-hot':(i<5?'cell-good':'cell')}" x="${30+i*52}" y="30" width="46" height="34" rx="5" style="${i===5?'fill:rgba(255,107,53,.3);stroke:#ff6b35':(i<5?'fill:rgba(82,196,26,.15);stroke:#52c41a':'')}"/>
    <text class="lbl-sm" x="${53+i*52}" y="50">${v}</text>
    `).join('')}
    <text class="lbl-sm" x="53" y="20">✓ ছোট</text>
    <text class="lbl-sm" x="289" y="20" fill="#ff6b35">target = 23</text>
    <text class="lbl-sm" x="495" y="20">বাদ</text>
    <text class="lbl-sm" x="280" y="95" text-anchor="middle">ধাপ ১: mid=23 ✓ পাওয়া গেছে! (ভাগ্য ভালো। সাধারণত আরও কয়েক ধাপ।)</text>
    <text class="lbl-sm" x="280" y="115" text-anchor="middle">১০২৪-এর মধ্যে খুঁজতে সর্বোচ্চ log₂(1024) = ১০ ধাপ।</text>
  </svg>
</div>

<div class="dialogue">কিন্তু শর্ত আছে — তালিকা সাজানো থাকতে হবে। সাজানো না থাকলে? একটা একটা করে দেখতে হবে — O(n)। সাজানো ক্ষমতা — এটাই sorting-এর মূল্য। একবার সাজাও, বারবার দ্রুত খোঁজো।</div>
<div class="dialogue en">"But there's a condition — the list must be sorted. Not sorted? Check one by one — O(n). Sorting is power — this is its price. Sort once, search fast forever."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। RAG-এ retrieved documents rank করতে হয় — relevance score অনুযায়ী sort। Hyperparameter tuning-এ range-এ binary search করা যায়। Log analysis — timestamp অনুযায়ী sort করে specific সময়ের event খুঁজি। Sorted data হলো ক্ষমতার ভিত্তি।</div>
<div class="dialogue en">"You're an AI engineer. In RAG, retrieved documents must be ranked — sorted by relevance score. In hyperparameter tuning, binary search across a range. In log analysis — sort by timestamp, then find specific events. Sorted data is the foundation of power."</div>

<div class="code-block">Python Sorting & Binary Search:

# Python's sorted() uses Timsort — O(n log n)
scores = [0.3, 0.9, 0.1, 0.7, 0.5]
sorted_scores = sorted(scores, reverse=True)
# → [0.9, 0.7, 0.5, 0.3, 0.1]

# Sort by key (RAG ranking)
docs = [("doc1", 0.45), ("doc2", 0.92), ("doc3", 0.78)]
ranked = sorted(docs, key=lambda x: x[1], reverse=True)

# Binary Search (bisect module)
import bisect
sorted_list = [1, 3, 5, 7, 9, 11, 13]
idx = bisect.bisect_left(sorted_list, 7)  # → 3
# Found in O(log n)!</div>

<div class="dialogue">কিস্ত — ন্যায়বিচার। আল্লাহ বলেন — "তোমরা ন্যায়ের খাতায় দাঁড়াও।" (৫৫:৮)। ন্যায়বিচার মানে প্রতিটা জিনিসকে তার সঠিক স্থানে রাখা। Sorting হলো সেই কিস্তের ছায়া — প্রতিটা উপাদানকে তার স্থানে। Binary search তখনই কাজ করে যখন কিস্ত প্রতিষ্ঠিত — যখন সবকিছু তার জায়গায়।</div>
<div class="dialogue en">"Qist — justice. Allah says — 'Stand firmly for justice.' (55:8). Justice means placing each thing in its correct position. Sorting is the shadow of qist — each element in its place. Binary search works only when qist is established — when everything is where it belongs."</div>`,
  senior:{
    title:"Python Sorting — Senior Patterns",
    body:`
    <p><code>sorted()</code> নতুন list তৈরি করে। <code>.sort()</code> in-place। Memory-sensitive হলে <code>.sort()</code>।</p>
    <p><strong>Key function:</strong> <code>key=lambda x: (x.priority, x.name)</code> — multi-criteria sort। খুব শক্তিশালী।</p>
    <p><code>operator.itemgetter(1)</code> <code>lambda x: x[1]</code>-এর চেয়ে দ্রুত। Production code-এ ব্যবহার করো।</p>
    <p>Binary search-এর জন্য নিজে লেখো না — <code>bisect</code> module ব্যবহার করো। Tested, optimized, correct। (নিজে লিখলে off-by-one হয় — senior trap।)</p>`
  },
  exercise:{
    hint:"Binary search implement করো — তারপর bisect দিয়ে তুলনা করো!",
    starterCode:`# গ্রন্থাগারিকের তালিকা — Binary Search
def binary_search(arr, target):
    """সাজানো তালিকায় target খুঁজি — O(log n)"""
    left, right = 0, len(arr) - 1
    steps = 0
    while left <= right:
        steps += 1
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid, steps
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1, steps

sorted_docs = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
target = 70
index, steps = binary_search(sorted_docs, target)
print(f"{target} খুঁজছি...")
print(f"পাওয়া গেছে index {index}-এ, মাত্র {steps} ধাপে!")

linear_steps = sorted_docs.index(target) + 1
print(f"Linear search-এ লাগত: {linear_steps} ধাপ")

import bisect
print(f"bisect দিয়ে: index {bisect.bisect_left(sorted_docs, target)}")

# ১০০০টা সংখ্যার মধ্যে খুঁজে দেখো কত ধাপ লাগে!
big_list = list(range(0, 1000, 2))
idx, steps = binary_search(big_list, 500)
print(f"\\n১০০০-এর তালিকায় ৫০০ খুঁজতে ধাপ: {steps}")
`
  }
});

// ── DOOR 12: DIVIDE & CONQUER ──
doors.push({
  num:12, icon:"⛏️", color:"#8d6e63", name:"পাথর বিভাজকের পাহাড়",
  subtitle:"The Stone Splitter's Mountain", tech:"Divide & Conquer (Merge / Quick Sort)",
  secret:"বড় সমস্যা ভাগ করো, আলাদা সমাধান করো, জোড়ো। তিন ধাপ: divide → conquer → combine। O(n log n)।",
  recall:{
    q:"পাথর বিভাজক বিশাল পাহাড় কীভাবে সরান — এক হাতে নাকি টুকরো টুকরো করে?",
    qen:"How does the stone splitter move a vast mountain — all at once, or piece by piece?",
    a:"টুকরো টুকরো করে। পাহাড় ভাগ করো পাথরে, পাথর ভাগ করো নুড়িতে — যতক্ষণ না সরানো সহজ। তারপর সব সরাও। Divide and conquer — ভাগ করো, জয় করো, জোড়ো।",
    aen:"Piece by piece. Split the mountain into rocks, rocks into pebbles — until each is easy to move. Then move them all. Divide and conquer — split, solve, combine."
  },
  story:`
<p class="scene-setting">দ্বাদশ দোকান। পাথর বিভাজকের পাহাড়। বাইরে একটা বিশাল পাথরের স্তূপ — যেন একটা ছোট পর্বত। হাতুড়ির শব্দ, ধুলোর কুয়াশা, ঘর্মাক্ত শরীর। হাজি তারিক দাঁড়িয়ে আছেন — বিশাল হাতুড়ি হাতে, সামনে একটা বিশাল পাথর। তিনি একবারে সরান না। ভাঙেন — দুই ভাগে। তারপর প্রতিটা ভাগ আবার। যতক্ষণ না ছোট হয় — সরানো সহজ।</p>
<p class="scene-setting en">The twelfth shop. The stone splitter's mountain. Outside, a vast pile of stone — like a small mountain. Sound of hammers, dust haze, sweaty bodies. Haji Tariq stands — huge hammer in hand, a giant stone before him. He doesn't move it at once. He breaks it — into two. Then each half again. Until small enough to move easily.</p>

<div class="dialogue">গ্রন্থাগারিক শিখিয়েছিলেন — সাজাও, তারপর দ্রুত খোঁজো। কিন্তু আমি বলি — সাজানোর নিজে একটা বড় কাজ। বিশাল তালিকা সাজাতে হলে? একবারে নয়। ভাগ করো। অর্ধেক। তারপর অর্ধেক। যতক্ষণ না প্রতিটা টুকরো এত ছোট যে সাজানো সহজ। তারপর জোড়ো।</div>
<div class="dialogue en">"The librarian taught — sort, then search fast. But I say — sorting itself is big work. To sort a vast list? Not all at once. Divide it. Halve it. Then halve again. Until each piece is so small that sorting is easy. Then merge."</div>

<div class="diagram">
  <div class="diag-title">Merge Sort — ভাগ করো, তারপর জোড়ো</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <!-- divide phase -->
    <text class="lbl-sm" x="20" y="22" fill="#ff6b35">DIVIDE ↓</text>
    <rect class="cell-hot" x="180" y="20" width="200" height="26" rx="4"/>
    <text class="lbl-sm" x="280" y="37">[38, 27, 43, 3]</text>

    <rect class="cell" x="120" y="65" width="100" height="24" rx="4"/>
    <text class="lbl-sm" x="170" y="81">[38, 27]</text>
    <rect class="cell" x="260" y="65" width="100" height="24" rx="4"/>
    <text class="lbl-sm" x="310" y="81">[43, 3]</text>

    ${[38,27,43,3].map((v,i)=>`
    <rect class="node-leaf" x="${100+i*70}" y="110" width="46" height="22" rx="4"/>
    <text class="lbl-sm" x="${123+i*70}" y="125">${[38,27,43,3][i]}</text>
    `).join('')}

    <!-- merge phase -->
    <text class="lbl-sm" x="430" y="125" fill="#52c41a">CONQUER ↑</text>
    <rect class="cell-good" x="120" y="155" width="100" height="24" rx="4" style="fill:rgba(82,196,26,.2);stroke:#52c41a"/>
    <text class="lbl-sm" x="170" y="171">[27, 38]</text>
    <rect class="cell-good" x="260" y="155" width="100" height="24" rx="4" style="fill:rgba(82,196,26,.2);stroke:#52c41a"/>
    <text class="lbl-sm" x="310" y="171">[3, 43]</text>

    <rect class="cell-good" x="180" y="200" width="200" height="26" rx="4" style="fill:rgba(82,196,26,.3);stroke:#52c41a"/>
    <text class="lbl-sm" x="280" y="217">[3, 27, 38, 43] ✓</text>

    <text class="lbl-sm" x="280" y="248" text-anchor="middle">প্রতি স্তরে O(n) কাজ, log n স্তর → O(n log n)</text>
  </svg>
</div>

<div class="dialogue">তিন ধাপ। Divide — সমস্যা ভাগ করো ছোট টুকরোয়। Conquer — প্রতিটা টুকরো আলাদা সমাধান করো (সাধারণত recursion — Door 2)। Combine — সমাধানগুলো জোড়ো। এই তিন ধাপেই merge sort, quick sort, binary search, FFT — সব।</div>
<div class="dialogue en">"Three steps. Divide — split the problem into smaller pieces. Conquer — solve each piece separately (usually recursion — Door 2). Combine — join the solutions. In these three steps: merge sort, quick sort, binary search, FFT — all."</div>

<div class="code-block">Merge Sort — The D&C Classic:

def merge_sort(arr):
    if len(arr) <= 1:           # base case
        return arr
    mid = len(arr) // 2          # DIVIDE
    left = merge_sort(arr[:mid]) # CONQUER (recursion)
    right = merge_sort(arr[mid:])
    return merge(left, right)    # COMBINE

def merge(a, b):
    """দুই সাজানো list জোড়ো — O(n)"""
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            result.append(a[i]); i += 1
        else:
            result.append(b[j]); j += 1
    result.extend(a[i:])
    result.extend(b[j:])
    return result

merge_sort([38, 27, 43, 3, 9, 82, 10])
# → [3, 9, 10, 27, 38, 43, 82]

D&C FAMILY:
  • Merge sort — ভাগ করো, sort করো, merge করো। stable, O(n log n) সবসময়।
  • Quick sort — pivot বেছো, ছোট/বড় ভাগ করো, recursion। গড়ে O(n log n), worst O(n²)।
  • Binary search — অর্ধেক বাদ দাও। (Door 11 — আসলে এটাও D&C!)
  • Closest pair, Strassen matrix mult, FFT — সব D&C।

WHY O(n log n):
  প্রতি স্তরে O(n) combine কাজ। log n স্তর (প্রতি বার অর্ধেক)।
  O(n) × O(log n) = O(n log n)। এটাই comparison sort-এর তাত্ত্বিক সীমা।</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। MapReduce — D&C এর বিশাল রূপ: map (ভাগ), reduce (জোড়ো)। Parallel training — ডেটা ভাগ করো GPU-তে, প্রতিটা গ্রেডিয়েন্ট বের করো, combine করো। Parallel merge sort — একাধিক কোরে একসাথে। বড় সমস্যা কখনো এক হাতে হয় না — ভাগ করো, জয় করো।</div>
<div class="dialogue en">"You're an AI engineer. MapReduce — D&C at vast scale: map (divide), reduce (combine). Parallel training — split data across GPUs, compute gradients each, combine. Parallel merge sort — across many cores. Big problems are never done by one hand — divide, conquer."</div>

<div class="dialogue">ফুরকান — যে বিভাজক, যে সত্যকে মিথ্যা থেকে আলাদা করে। আল্লাহ কুরআনকে ফুরকান বলেছেন — কারণ এটি আলাদা করে। পাথর বিভাজকও ফুরকানের ছায়া — বড়কে ছোট টুকরোয় বিভাজন, যাতে প্রতিটা সহজ হয়। সমস্যা বড় হলে ভয় নয় — ভাগ করো। প্রতিটা অংশ পরিষ্কার হয়।</div>
<div class="dialogue en">"Furqan — the divider, that which separates truth from falsehood. Allah called the Quran Furqan — because it separates. The stone splitter is the shadow of furqan — dividing the large into small pieces, so each becomes easy. A big problem is no fear — divide it. Each piece becomes clear."</div>`,
  senior:{
    title:"Merge Sort বনাম Quick Sort — Senior Choice",
    body:`
    <p><strong>Merge sort:</strong> stable, <strong>O(n log n) worst-case</strong>, কিন্তু O(n) অতিরিক্ত মেমোরি। linked list sort-এ সেরা। "সবসময় দ্রুত" চাইলে merge sort।</p>
    <p><strong>Quick sort:</strong> in-place (O(log n) স্ট্যাক), গড়ে দ্রুত (cache-friendly), কিন্তু worst-case O(n²) যদি pivot খারাপ হয়। random/median-of-three pivot দিয়ে এড়াও। Python/Java-র ডিফল্ট sort এর উপর ভিত্তি করে।</p>
    <p><strong>বাস্তবে:</strong> Python <code>sorted()</code> = Timsort (merge+insertion হাইব্রিড), stable, O(n log n)। নিজে লেখা বাদ দাও — Timsort প্রায় সব ক্ষেত্রে সেরা।</p>
    <p><strong>সবচেয়ে গুরুত্বপূর্ণ:</strong> D&C একটা চিন্তাভাবনা — শুধু sorting নয়। যেকোনো বড় সমস্যা ভাগ করতে পারো কি না, সেটাই প্রশ্ন।</p>`
  },
  exercise:{
    hint:"merge_sort লেখো — তারপর bubble sort-এর সাথে ধাপ তুলনা করো!",
    starterCode:`# পাথর বিভাজকের পাহাড় — Merge Sort (D&C)
# ভাগ করো, sort করো, জোড়ো

def merge_sort(arr):
    """O(n log n) — divide and conquer"""
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(a, b):
    """দুই সাজানো list জোড়ো"""
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            result.append(a[i]); i += 1
        else:
            result.append(b[j]); j += 1
    result.extend(a[i:])
    result.extend(b[j:])
    return result

def bubble_sort(arr):
    """O(n²) — তুলনার জন্য"""
    arr = arr.copy()
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

import time, random
data = random.sample(range(1, 10000), 2000)

t1 = time.time(); r1 = merge_sort(data); tm = time.time() - t1
t2 = time.time(); r2 = bubble_sort(data); tb = time.time() - t2

print(f"নিশ্চিত একই ফল: {r1 == r2}")
print(f"Merge sort:  {tm:.4f}s  (O(n log n))")
print(f"Bubble sort: {tb:.4f}s  (O(n²))")
print(f"অনুপাত: {tb/tm:.0f}x দ্রুত")
`
  }
});
