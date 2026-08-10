// ════════════════════════════════════════
// DSA BAZAAR — DOORS 9-12
// 9. Graphs (BFS/DFS)   10. Union-Find
// 11. Sorting & Binary Search   12. Divide & Conquer
// ════════════════════════════════════════

// ── DOOR 9: GRAPHS (BFS / DFS) ──
doors.push({
  num:9, icon:"🧵", color:"#36d6e7", name:"তাঁতির তাঁত",
  subtitle:"The Weaver's Loom", tech:"Graphs (BFS / DFS)",
  spirit:"সিলসিলা — interconnected threads, from Quran 2:136 (the chain of prophets)",
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> জাইনাব BFS-এ <code>visited</code> set ভুলে গিয়েছিলেন। ফলাফল? একই নোড বারবার ভিজিট — infinite loop। ১০,০০০ নোডের graph-এ প্রোগ্রাম ক্র্যাশ। তারপর <code>visited</code> যোগ করলেন — প্রতিটা নোড একবারই দেখা হয়, O(V+E)। সমস্যা অ্যালগরিদমে নয় ছিল — একটা ছোট ভুলে পুরো সিস্টেম ক্র্যাশ। visited set ছাড়া graph traversal = আত্মহত্যা।</div></div>
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

<div class="code-block"># ── STEP 1: What is a graph? ──
# A graph is nodes (vertices) connected by edges.
# Unlike trees, graphs can have CYCLES and any connection pattern.

# Types of graphs:
# - Undirected: A-B means both connected (Facebook friends)
# - Directed: A→B means A points to B (Twitter follow)
# - Weighted: edges have costs (road distances, latency)
# - Unweighted: all edges equal

# Representing a graph in Python (adjacency list):
graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B"],
    "F": ["C"],
}

# A connects to B and C
# B connects to A, D, E
# etc.

# Using defaultdict for easy building:
from collections import defaultdict

graph2 = defaultdict(list)
graph2["A"].append("B")
graph2["A"].append("C")
graph2["B"].append("D")</div>

<div class="code-block"># ── STEP 2: BFS — Breadth-First Search ──
# BFS explores LEVEL by LEVEL (like ripples in water).
# Uses a QUEUE (FIFO).
# Finds SHORTEST PATH in unweighted graphs.

from collections import deque

def bfs(graph, start):
    """Visit all nodes level by level."""
    visited = set()
    queue = deque([start])
    order = []

    while queue:
        node = queue.popleft()      # FIFO — take from front
        if node not in visited:
            visited.add(node)
            order.append(node)
            queue.extend(graph[node])  # add neighbors

    return order

graph = {"A": ["B", "C"], "B": ["D", "E"], "C": ["F"],
         "D": [], "E": [], "F": []}

print(bfs(graph, "A"))  # ['A', 'B', 'C', 'D', 'E', 'F']

# BFS explores in layers:
# Layer 0: A (start)
# Layer 1: B, C (A's neighbors)
# Layer 2: D, E, F (B and C's neighbors)

# SHORTEST PATH with BFS:
def bfs_shortest_path(graph, start, target):
    """Find shortest path using BFS."""
    visited = set()
    queue = deque([(start, [start])])  # (node, path_so_far)

    while queue:
        node, path = queue.popleft()
        if node == target:
            return path  # shortest path found!
        if node not in visited:
            visited.add(node)
            for neighbor in graph[node]:
                queue.append((neighbor, path + [neighbor]))
    return None  # no path

print(bfs_shortest_path(graph, "A", "F"))
# ['A', 'C', 'F'] — shortest path!</div>

<div class="code-block"># ── STEP 3: DFS — Depth-First Search ──
# DFS goes DEEP first, then backtracks.
# Uses a STACK (LIFO) or recursion.

# Iterative DFS (using stack):
def dfs(graph, start):
    """Visit all nodes going deep first."""
    visited = set()
    stack = [start]
    order = []

    while stack:
        node = stack.pop()          # LIFO — take from top
        if node not in visited:
            visited.add(node)
            order.append(node)
            stack.extend(reversed(graph[node]))  # add neighbors

    return order

print(dfs(graph, "A"))  # ['A', 'C', 'F', 'B', 'E', 'D']

# Recursive DFS (cleaner):
def dfs_recursive(graph, node, visited=None):
    """DFS using recursion."""
    if visited is None:
        visited = set()
    visited.add(node)
    print(node, end=" ")
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)

dfs_recursive(graph, "A")  # A B D E C F

# DFS is used for:
# - Cycle detection
# - Topological sorting
# - Finding connected components
# - Maze solving
# - Path finding (not necessarily shortest)</div>

<div class="code-block"># ── STEP 4: BFS vs DFS — when to use which ──
# Both visit every node, but in different ORDER.

# ┌─────────────────┬──────────────────┬──────────────────────┐
# │ Characteristic  │ BFS              │ DFS                  │
# ├─────────────────┼──────────────────┼──────────────────────┤
# │ Data structure  │ Queue (FIFO)     │ Stack (LIFO)         │
# │ Exploration     │ Level by level   │ Deep, then backtrack │
# │ Shortest path   │ Yes (unweighted) │ No                   │
# │ Memory          │ O(width) — wide  │ O(depth) — deep      │
# │ Cycle detect    │ Possible         │ Easier with DFS      │
# │ Topological sort│ No               │ Yes                  │
# │ Best for        │ Shortest path    │ Exhaustive search    │
# └─────────────────┴──────────────────┴──────────────────────┘

# Real-world examples:
# BFS: "People you may know" (LinkedIn), shortest route (Google Maps)
# DFS: Dependency resolution, cycle detection, backtracking

# Cycle detection with DFS:
def has_cycle(graph):
    """Detect if directed graph has a cycle."""
    visited = set()
    rec_stack = set()

    def dfs(node):
        visited.add(node)
        rec_stack.add(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True  # back edge = cycle!
        rec_stack.remove(node)
        return False

    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    return False</div>

<div class="code-block"># ── STEP 5: Weighted graphs and Dijkstra ──
# When edges have COSTS (distances, time, money),
# use Dijkstra's algorithm for shortest path.

import heapq

def dijkstra(graph, start):
    """
    Find shortest distances from start to all nodes.
    graph = {node: [(neighbor, weight), ...]}
    """
    distances = {start: 0}
    pq = [(0, start)]  # (distance, node)

    while pq:
        dist, node = heapq.heappop(pq)

        for neighbor, weight in graph.get(node, []):
            new_dist = dist + weight
            if neighbor not in distances or new_dist &lt; distances[neighbor]:
                distances[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))

    return distances

# City distances:
cities = {
    "Dhaka": [("Chittagong", 250), ("Sylhet", 200)],
    "Chittagong": [("Dhaka", 250), ("CoxBazar", 150)],
    "Sylhet": [("Dhaka", 200)],
    "CoxBazar": [("Chittagong", 150)],
}

print(dijkstra(cities, "Dhaka"))
# {'Dhaka': 0, 'Chittagong': 250, 'Sylhet': 200, 'CoxBazar': 400}

# Dijkstra uses a HEAP (priority queue) to always process
# the closest unvisited node first.</div>

<div class="code-block"># ── STEP 6: Graph problems in interviews ──
# Common graph problems and their solutions:

# 1. NUMBER OF ISLANDS (grid as graph):
def num_islands(grid):
    """Count islands in a 2D grid (1=land, 0=water)."""
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r &lt; 0 or r &gt;= rows or c &lt; 0 or c &gt;= cols or grid[r][c] == "0":
            return
        grid[r][c] = "0"  # mark visited
        dfs(r+1, c)  # down
        dfs(r-1, c)  # up
        dfs(r, c+1)  # right
        dfs(r, c-1)  # left

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1":
                count += 1
                dfs(r, c)  # flood fill the island
    return count

# 2. CLONE A GRAPH:
def clone_graph(node):
    """Deep copy a graph."""
    if not node:
        return None
    visited = {}
    def dfs(original):
        if original in visited:
            return visited[original]
        clone = Node(original.val)
        visited[original] = clone
        for neighbor in original.neighbors:
            clone.neighbors.append(dfs(neighbor))
        return clone
    return dfs(node)

# 3. COURSE SCHEDULE (topological sort):
def can_finish(num_courses, prerequisites):
    """Can you finish all courses? (cycle detection)"""
    graph = defaultdict(list)
    for course, prereq in prerequisites:
        graph[course].append(prereq)
    return not has_cycle(graph)

# SUMMARY:
# BFS → shortest path, level traversal (queue)
# DFS → deep search, cycle detect, topo sort (stack/recursion)
# Dijkstra → weighted shortest path (heap)
# Grid problems → treat each cell as a graph node</div>

<div class="dialogue">ভাবো — Facebook। তোমার প্রোফাইল একটা node। তোমার বন্ধুরা আরেক node। তোমাদের সম্পর্ক হলো edge। "People You May Know" কীভাবে কাজ করে? BFS দিয়ে! প্রথমে তোমার সরাসরি বন্ধুদের দেখে (level 1), তারপর তাদের বন্ধুদের (level 2), তারপর আরও। স্তরে স্তরে ছড়ায় — পানির ঢেউয়ের মতো। আর এই সম্পর্কগুলো দুই ধরনের — Facebook ফ্রেন্ডশিপ হলো undirected (দুই পক্ষ সম্মত), Twitter/Instagram follow হলো directed (তুমি ফলো করো, সে নাও করে)।</div>
<div class="dialogue en">"Think — Facebook. Your profile is a node. Your friends are other nodes. Your relationship is an edge. How does 'People You May Know' work? With BFS! First it checks your direct friends (level 1), then friends of friends (level 2), then more. Spreading layer by layer — like water ripples. And these relationships come in two types — Facebook friendship is undirected (mutual), Twitter/Instagram follow is directed (you follow, they may not)."</div>

<div class="diagram">
  <div class="diag-title">Social Network — Undirected vs Directed Graph</div>
  <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
    <!-- LEFT: undirected (Facebook) -->
    <text class="lbl-sm" x="140" y="20" fill="#36d6e7">Facebook — Undirected (mutual)</text>
    <circle class="node-hot" cx="80" cy="60" r="18"/><text class="lbl" x="80" y="62">Rafid</text>
    <circle class="node" cx="200" cy="60" r="18"/><text class="lbl" x="200" y="62">Tanvir</text>
    <circle class="node" cx="80" cy="140" r="18"/><text class="lbl-sm" x="80" y="142">Sadia</text>
    <circle class="node" cx="200" cy="140" r="18"/><text class="lbl-sm" x="200" y="142">Karim</text>
    <!-- undirected edges (no arrows) -->
    <line class="edge" x1="98" y1="60" x2="182" y2="60"/>
    <line class="edge" x1="80" y1="78" x2="80" y2="122"/>
    <line class="edge" x1="200" y1="78" x2="200" y2="122"/>
    <line class="edge" x1="98" y1="140" x2="182" y2="140"/>
    <text class="lbl-sm" x="140" y="180" text-anchor="middle">↔ দুই পক্ষই connected (mutual friends)</text>

    <!-- RIGHT: directed (Twitter) -->
    <text class="lbl-sm" x="420" y="20" fill="#f0c14b">Twitter — Directed (one-way)</text>
    <circle class="node-hot" cx="360" cy="60" r="18"/><text class="lbl" x="360" y="62">Rafid</text>
    <circle class="node" cx="480" cy="60" r="18"/><text class="lbl" x="480" y="62">Tanvir</text>
    <circle class="node" cx="360" cy="140" r="18"/><text class="lbl-sm" x="360" y="142">Sadia</text>
    <circle class="node" cx="480" cy="140" r="18"/><text class="lbl-sm" x="480" y="142">Karim</text>
    <!-- directed edges (with arrows) -->
    <line class="edge-hot" x1="378" y1="55" x2="460" y2="55" marker-end="url(#arrowFire)"/>
    <line class="edge" x1="360" y1="78" x2="360" y2="122" marker-end="url(#arrowCyan)"/>
    <line class="edge" x1="480" y1="122" x2="480" y2="78" marker-end="url(#arrowCyan)"/>
    <text class="lbl-sm" x="420" y="180" text-anchor="middle">→ একমুখী (follow, not necessarily mutual)</text>
  </svg>
  <div class="diag-cap">Facebook friends = undirected edge। Twitter follows = directed arrow। Google Maps = weighted edge (distance, time)।</div>
</div>

<div class="dialogue">আর Google Maps! তুমি ঢাকা থেকে চট্টগ্রাম যাচ্ছ। ঢাকা একটা node, চট্টগ্রাম আরেক node। রাস্তাগুলো edge। কিন্তু শুধু edge নয় — প্রতিটা রাস্তায় একটা weight আছে। ঢাকা→চট্টগ্রাম সরাসরি ২৫০ কিমি, ৫ ঘণ্টা। ঢাকা→কুমিল্লা→চট্টগ্রাম ৩০০ কিমি কিন্তু ৪ ঘণ্টা। কোনটা বেছে নেবে? সবচেয়ে কম সময়ের পথ খুঁজতে — Dijkstra অ্যালগরিদম। এটা এক ধরনের greedy approach — প্রতিটা স্টেশনে গিয়ে সবচেয়ে সস্তা রাস্তা বেছে নেয়।</div>
<div class="dialogue en">"And Google Maps! You're going from Dhaka to Chittagong. Dhaka is one node, Chittagong another. The roads are edges. But not just edges — each road has a weight. Dhaka→Chittagong direct is 250 km, 5 hours. Dhaka→Comilla→Chittagong is 300 km but 4 hours. Which to choose? To find the shortest time path — Dijkstra's algorithm. It's a greedy approach — at each junction, it picks the cheapest known road."</div>

<div class="diagram">
  <div class="diag-title">Dijkstra — সবচেয়ে কম খরচের পথ (Relaxation)</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <!-- cities -->
    <circle class="node-hot" cx="80" cy="110" r="22"/><text class="lbl" x="80" y="113">ঢাকা</text>
    <circle class="node" cx="280" cy="60" r="20"/><text class="lbl-sm" x="280" y="62">নারা</text>
    <circle class="node" cx="280" cy="160" r="20"/><text class="lbl-sm" x="280" y="162">কুমি</text>
    <circle class="node-cyan" cx="480" cy="110" r="22"/><text class="lbl" x="480" y="113">চট্ট</text>

    <!-- edges with weights -->
    <line class="edge-hot" x1="100" y1="100" x2="262" y2="68" marker-end="url(#arrowFire)"/>
    <text class="lbl-sm" x="170" y="75" fill="#ff6b35">20km</text>
    <line class="edge" x1="100" y1="120" x2="262" y2="152" marker-end="url(#arrowCyan)"/>
    <text class="lbl-sm" x="170" y="145" fill="#36d6e7">100km</text>
    <line class="edge" x1="298" y1="70" x2="462" y2="100" marker-end="url(#arrowCyan)"/>
    <text class="lbl-sm" x="380" y="75" fill="#36d6e7">130km ❌</text>
    <line class="edge-good" x1="298" y1="150" x2="462" y2="120" marker-end="url(#arrowCyan)" style="stroke:#52c41a;stroke-width:2.5"/>
    <text class="lbl-sm" x="380" y="145" fill="#52c41a">50km ✅</text>

    <!-- relaxation note -->
    <text class="lbl-sm" x="280" y="200" text-anchor="middle">Relaxation: ঢাকা→কুমিল্লা (100km) → চট্টগ্রাম (50km) = 150km ✅</text>
    <text class="lbl-sm" x="280" y="215" text-anchor="middle" fill="#ff6b35">সরাসরি ঢাকা→নারায়ণগঞ্জ→চট্টগ্রাম (20+130=150km) — একই! কিন্তু সময়ে পার্থক্য।</text>
  </svg>
  <div class="diag-cap">Dijkstra প্রতিটা node-এ যে পরিচিত সবচেয়ে কম খরচ আপডেট করে — relaxation। Priority Queue (Min-Heap) দিয়ে পরবর্তী সস্তা নোড বেছে নেয়।</div>
</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার — graph তোমার সবকিছুতে। Knowledge graph: ধারণা আর তাদের সম্পর্ক। Agent workflow: এজেন্ট A → টুল B → এজেন্ট C — একটা DAG (directed acyclic graph)। RAG retrieval: প্রশ্ন থেকে সম্পর্কিত ডকুমেন্টে যাওয়া — graph traversal। সব সম্পর্ক, সব পথ।</div>
<div class="dialogue en">"You're an AI engineer — graphs are everywhere. Knowledge graphs: concepts and their relationships. Agent workflows: Agent A → Tool B → Agent C — a DAG. RAG retrieval: going from query to related documents — graph traversal. All relationships, all paths."</div>

<div class="dialogue">উম্মাহ — সম্প্রদায়। কুরআনে আল্লাহ বলেন — "নিশ্চয় এই তোমাদের উম্মাহ, একই উম্মাহ, আর আমি তোমাদের প্রতিপালক।" (২১:৯২)। প্রতিটা মানুষ একটা নোড, সম্পর্ক হলো edge। কেউ একা নয় — সবাই সংযুক্ত। Graph হলো সেই সংযোগের গাণিতিক রূপ — সম্পর্কের জাল।</div>
<div class="dialogue en">"Ummah — community. Allah says in the Quran — 'Indeed this, your religion [ummah], is one religion, and I am your Lord.' (21:92). Each person is a node, relationships are edges. No one is alone — all connected. The graph is the mathematical form of that connection — the web of relationships."</div>

<div class="secret-box">🧵 Graph = সম্পর্কের জাল। Adjacency list = প্রতিটা node তার প্রতিবেশী জানে। BFS = সবচেয়ে কাছের পথ।</div>`,
  senior:{
    title:"Adjacency List vs Matrix — কখন কোনটা?",
    body:`
    <p><strong>Adjacency List:</strong> <code>defaultdict(list)</code> — যখন graph sparse (বেশি নোড, কম edge)। মেমোরি কম লাগে। প্রতিটা node শুধু তার প্রতিবেশী রাখে।</p>
    <p><strong>Adjacency Matrix:</strong> <code>n*n</code> 2D array — যখন graph dense বা edge existence দ্রুত চেক করতে হয়। কিন্তু O(n²) মেমোরি।</p>
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
  spirit:"জামা — joining/gathering, from Quran 3:103 (hold fast together as one bond)",
  secret:"হাজার উপাদান — কে কোন গোত্রে? গোত্র এক হলে (union) আবার ভাঙতে পারবে না। Union-Find — union ও find, দুটোই প্রায় O(1) (path compression + union by rank একসাথে থাকলে — আসলে amortized O(α(n)))।",
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> শাফিক path compression ছাড়া naive union-find ব্যবহার করেছিলেন। ১ লাখ উপাদানে প্রতিটা <code>find()</code> O(n) — লম্বা শৃঙ্খল ধরে শেষ পর্যন্ত হাঁটা। ৫০,০০০ query-তে ১২ সেকেন্ড। তারপর path compression যোগ করলেন — প্রতিটা <code>find()</code> প্রায় O(1), amortized O(α(n))। একই কাজ ০.০৮ সেকেন্ডে। ১৫০ গুণ দ্রুত। একটা ছোট optimization কত বড় পার্থক্য আনে।</div></div>
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

<div class="code-block"># ── STEP 1: What is Union-Find? ──
# Union-Find (Disjoint Set Union) tracks CONNECTED GROUPS.
# Two operations:
# - find(x): which group does x belong to?
# - union(x, y): merge x's group with y's group

# Think of it like tribes merging:
# - Initially, each person is their own tribe
# - When two people connect, their tribes MERGE
# - find() tells you which tribe someone belongs to

# Simple implementation:
class UnionFind:
    """Track connected groups efficiently."""
    def __init__(self, n):
        # Each element starts as its own parent (own group)
        self.parent = list(range(n))

    def find(self, x):
        """Find which group x belongs to."""
        # Follow the chain to the root (group leader)
        while self.parent[x] != x:
            x = self.parent[x]
        return x

    def union(self, x, y):
        """Merge x's group with y's group."""
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x != root_y:
            self.parent[root_y] = root_x  # merge under root_x
            return True  # new connection
        return False  # already in same group

# Usage:
uf = UnionFind(5)  # 5 elements: 0,1,2,3,4 — each their own group
uf.union(0, 1)     # 0 and 1 are now connected
uf.union(2, 3)     # 2 and 3 are now connected
print(uf.find(0) == uf.find(1))  # True (same group)
print(uf.find(0) == uf.find(2))  # False (different groups)
uf.union(1, 2)     # now 0-1-2-3 are all connected
print(uf.find(0) == uf.find(3))  # True (same group now!)</div>

<div class="code-block"># ── STEP 2: Path compression optimization ──
# The naive find() follows a long chain. Path compression
# FLATTENS the tree — makes future queries O(1).

class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n  # for union by rank

    def find(self, x):
        """Find with PATH COMPRESSION — flatten the tree."""
        if self.parent[x] != x:
            # Recursively find root AND update parent to root
            self.parent[x] = self.find(self.parent[x])  # compress!
        return self.parent[x]

    def union(self, x, y):
        """Union by RANK — attach shorter tree under taller."""
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x == root_y:
            return False  # already same group (cycle in undirected graph)

        # Attach smaller rank tree under larger
        if self.rank[root_x] &lt; self.rank[root_y]:
            root_x, root_y = root_y, root_x
        self.parent[root_y] = root_x
        if self.rank[root_x] == self.rank[root_y]:
            self.rank[root_x] += 1
        return True

# With BOTH optimizations:
# find and union are amortized O(α(n)) ≈ O(1)
# α = inverse Ackermann function (never exceeds 4 for any practical n)</div>

<div class="code-block"># ── STEP 3: Cycle detection in undirected graphs ──
# Union-Find detects cycles: if union returns False, there's a cycle!

def has_cycle_undirected(n, edges):
    """Check if undirected graph has a cycle."""
    uf = UnionFind(n)
    for u, v in edges:
        if not uf.union(u, v):  # already connected = cycle!
            return True
    return False

# Graph: 0-1-2-0 (triangle = cycle)
edges = [(0, 1), (1, 2), (2, 0)]
print(has_cycle_undirected(3, edges))  # True

# Graph: 0-1-2 (no cycle)
edges2 = [(0, 1), (1, 2)]
print(has_cycle_undirected(3, edges2))  # False</div>

<div class="code-block"># ── STEP 4: Number of connected components ──
# "How many separate islands are there?"

def count_components(n, edges):
    """Count connected groups in a graph."""
    uf = UnionFind(n)
    for u, v in edges:
        uf.union(u, v)

    # Count unique roots (each root = one component)
    roots = set()
    for i in range(n):
        roots.add(uf.find(i))
    return len(roots)

# 5 nodes, edges connecting some:
# 0-1-2 (component 1), 3-4 (component 2)
edges = [(0, 1), (1, 2), (3, 4)]
print(count_components(5, edges))  # 2</div>

<div class="code-block"># ── STEP 5: Kruskal's Minimum Spanning Tree ──
# MST = connect all nodes with minimum total edge weight.
# Kruskal: sort edges by weight, add if no cycle (Union-Find!).

def kruskal_mst(n, edges):
    """
    Find Minimum Spanning Tree using Kruskal's algorithm.
    edges = [(weight, u, v), ...]
    Returns list of edges in the MST.
    """
    # Sort edges by weight (cheapest first)
    edges.sort()
    uf = UnionFind(n)
    mst = []

    for weight, u, v in edges:
        if uf.union(u, v):  # connects two different groups
            mst.append((weight, u, v))
            if len(mst) == n - 1:  # MST has n-1 edges
                break

    return mst

# Connect 4 cities with minimum road cost:
roads = [
    (10, 0, 1),  # road 0-1 costs 10
    (30, 0, 2),  # road 0-2 costs 30
    (20, 1, 2),  # road 1-2 costs 20
    (50, 2, 3),  # road 2-3 costs 50
    (40, 1, 3),  # road 1-3 costs 40
]

mst = kruskal_mst(4, roads)
print(mst)  # [(10,0,1), (20,1,2), (40,1,3)] — total cost 70
# Cheapest way to connect all 4 cities</div>

<div class="code-block"># ── STEP 6: Real-world Union-Find applications ──
# Union-Find appears in many real systems:

# 1. NETWORK CONNECTIVITY:
#   "Can node A reach node B?" → same component check

# 2. IMAGE SEGMENTATION:
#   Group similar pixels together → each group = one segment

# 3. ENTITY RESOLUTION (data engineering):
#   Are "J. Smith" and "John Smith" the same person?
#   If yes, union them → unique entities at the end

# 4. CLUSTERING:
#   Merge similar items → clusters emerge as connected components

# 5. DYNAMIC CONNECTIVITY:
#   Edges added over time, need to answer "are A and B connected?"

# 6. LEETCODE CLASSICS:
#   - Number of provinces (connected components)
#   - Accounts merge (entity resolution)
#   - Redundant connection (cycle detection)
#   - Min cost to connect all points (MST)

# WHEN NOT TO USE UNION-FIND:
# ❌ Need to SPLIT groups (Union-Find only merges)
# ❌ Need shortest PATH (use BFS/Dijkstra instead)
# ❌ Need the actual connections (use adjacency list)

# SUMMARY:
# find(x) → O(1) amortized — which group is x in?
# union(x,y) → O(1) amortized — merge two groups
# Perfect for: components, cycles, connectivity, MST</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার — Union-Find তোমার ডেটা পাইপলাইনেও লুকিয়ে থাকে। Entity resolution: দুই রেকর্ড কি একই ব্যক্তি? মিললে union করো — শেষে যে root গুলো বাঁচে, সেগুলোই আসল unique entity। Embedding clustering: দুই ভেক্টরের similarity থ্রেশহোল্ডের বেশি হলে union করো — connected components-ই হয়ে যায় cluster (single-linkage-এর দ্রুততম বাস্তবায়ন)। Streaming deduplication-এও একই কৌশল — নতুন রেকর্ড এলে শুধু union করো, পুরো ডেটাসেট আবার স্ক্যান করতে হয় না।</div>
<div class="dialogue en">"You're an AI engineer — union-find hides inside your data pipelines too. Entity resolution: are two records the same person? If they match, union them — the surviving roots are the unique entities. Embedding clustering: if two vectors' similarity crosses a threshold, union them — the connected components become the clusters (the fastest way to implement single-linkage clustering). The same trick works for streaming deduplication — when a new record arrives, just union it in, no need to rescan the whole dataset."</div>

<div class="dialogue">জামাত — দল, সম্প্রদায়। ইসলামে জামাতের গুরুত্ব অপরিসীম — "একজন আরেকজনের ভাই," "এক জামাতে থাকো।" গোত্র একবার যুক্ত হলে আলাদা হয় না — সম্প্রদায়ের বাঁধন শক্ত। Union-Find-এর সৌন্দর্য — একবার union, চিরস্থায়ী। find শুধু জিজ্ঞেস করে — তুমি কার সাথে যুক্ত?</div>
<div class="dialogue en">"Jamaat — group, community. In Islam, the community's importance is boundless — 'one is brother to another,' 'stay in the group.' Once clans join, they don't separate — the bond of community is strong. The beauty of union-find — once unioned, forever. Find only asks — who are you connected to?"</div>

<div class="secret-box">🏛️ হাজার উপাদান — কে কোন গোত্রে? Union-Find: union ও find, দুটোই প্রায় O(1) (path compression + union by rank)।</div>`,
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
  spirit:"তরতীব — arrangement/order, from the concept of divine cosmic ordering",
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> ইউসুফ অসাজানো ডেটায় binary search চালিয়েছিলেন। মাঝের value দেখে অর্ধেক বাদ দিচ্ছিলেন — কিন্তু ডেটা সাজানো নয়, তাই সঠিক উত্তর বাদ পড়ে গেছে। ভুল ফলাফল, কোনো error নয় — চুপচাপ ভুল। তারপর আগে <code>sorted()</code> দিয়ে সাজালেন, তারপর binary search। সাজানো না থাকলে binary search কাজ করে না — শুধু ভুল দেয়। সাজানো প্রথম, খোঁজা পরে।</div></div>
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
    <text class="lbl-sm" x="280" y="95" text-anchor="middle">৩ ধাপ লাগে: mid=16 (ছোট → ডানে যাও), mid=56 (বড় → বামে যাও), mid=23 ✓ পাওয়া গেছে!</text>
    <text class="lbl-sm" x="280" y="115" text-anchor="middle">১০২৪-এর মধ্যে খুঁজতে সর্বোচ্চ log₂(1024) = ১০ ধাপ।</text>
  </svg>
</div>

<div class="dialogue">কিন্তু শর্ত আছে — তালিকা সাজানো থাকতে হবে। সাজানো না থাকলে? একটা একটা করে দেখতে হবে — O(n)। সাজানো ক্ষমতা — এটাই sorting-এর মূল্য। একবার সাজাও, বারবার দ্রুত খোঁজো।</div>
<div class="dialogue en">"But there's a condition — the list must be sorted. Not sorted? Check one by one — O(n). Sorting is power — this is its price. Sort once, search fast forever."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। RAG-এ retrieved documents rank করতে হয় — relevance score অনুযায়ী sort। Hyperparameter tuning-এ range-এ binary search করা যায়। Log analysis — timestamp অনুযায়ী sort করে specific সময়ের event খুঁজি। Sorted data হলো ক্ষমতার ভিত্তি।</div>
<div class="dialogue en">"You're an AI engineer. In RAG, retrieved documents must be ranked — sorted by relevance score. In hyperparameter tuning, binary search across a range. In log analysis — sort by timestamp, then find specific events. Sorted data is the foundation of power."</div>

<div class="code-block"># ── STEP 1: Python's sorting ──
# Python's sorted() uses Timsort — O(n log n), very fast.
# It's a STABLE sort (equal elements keep their original order).

# Sort a list:
scores = [0.3, 0.9, 0.1, 0.7, 0.5]
sorted_scores = sorted(scores)                    # ascending
sorted_desc = sorted(scores, reverse=True)        # descending
print(sorted_scores)  # [0.1, 0.3, 0.5, 0.7, 0.9]
print(sorted_desc)    # [0.9, 0.7, 0.5, 0.3, 0.1]

# sorted() returns a NEW list (original unchanged):
print(scores)  # [0.3, 0.9, 0.1, 0.7, 0.5] — unchanged!

# .sort() modifies in-place (faster, no extra memory):
scores.sort()  # scores is now sorted in-place

# Sort with a KEY function (very common):
students = [
    {"name": "Fatima", "grade": 85},
    {"name": "Ahmed", "grade": 92},
    {"name": "Sara", "grade": 78},
]

# Sort by grade:
by_grade = sorted(students, key=lambda s: s["grade"])
print([s["name"] for s in by_grade])  # ['Sara', 'Fatima', 'Ahmed']

# Sort by name length:
by_name = sorted(students, key=lambda s: len(s["name"]))
print([s["name"] for s in by_name])  # ['Sara', 'Ahmed', 'Fatima']</div>

<div class="code-block"># ── STEP 2: Multi-criteria sorting ──
# Sort by multiple fields: (primary, secondary)

# Sort by grade DESC, then name ASC:
students = [
    {"name": "Fatima", "grade": 85},
    {"name": "Ahmed", "grade": 92},
    {"name": "Bob", "grade": 85},     # same grade as Fatima
    {"name": "Sara", "grade": 92},    # same grade as Ahmed
]

result = sorted(students, key=lambda s: (-s["grade"], s["name"]))
for s in result:
    print(f"  {s['name']}: {s['grade']}")
# Ahmed: 92      (grade desc, name asc)
# Sara: 92
# Bob: 85
# Fatima: 85

# Using operator.itemgetter (faster than lambda):
from operator import itemgetter
ranked = sorted(students, key=itemgetter("grade"))

# RAG example — sort documents by relevance score:
docs = [
    ("doc1", 0.45, "Python tutorial"),
    ("doc2", 0.92, "Python advanced"),
    ("doc3", 0.78, "Python basics"),
]
ranked_docs = sorted(docs, key=lambda d: d[1], reverse=True)
for doc in ranked_docs:
    print(f"  {doc[0]}: {doc[1]:.2f} - {doc[2]}")
# doc2: 0.92 - Python advanced
# doc3: 0.78 - Python basics
# doc1: 0.45 - Python tutorial</div>

<div class="code-block"># ── STEP 3: Binary search — the power of sorted data ──
# Binary search: find an item in a SORTED list in O(log n).
# Each step eliminates HALF the remaining items.

# Manual binary search:
def binary_search(arr, target):
    """Find target in sorted array — O(log n)."""
    left, right = 0, len(arr) - 1

    while left &lt;= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid        # found!
        elif arr[mid] &lt; target:
            left = mid + 1    # search right half
        else:
            right = mid - 1   # search left half

    return -1  # not found

sorted_list = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
print(binary_search(sorted_list, 7))   # 3 (index)
print(binary_search(sorted_list, 10))  # -1 (not found)

# WHY BINARY SEARCH IS FAST:
# 1000 items → 10 steps (log₂1000 ≈ 10)
# 1 million items → 20 steps
# 1 billion items → 30 steps!
# Compare with linear search: 1 billion items = 1 billion steps

# Python's bisect module (don't write your own!):
import bisect

sorted_list = [1, 3, 5, 7, 9, 11, 13]

# Find where to INSERT (maintaining sorted order):
idx = bisect.bisect_left(sorted_list, 7)
print(idx)  # 3 — 7 is at index 3

# Insert maintaining sort:
bisect.insort(sorted_list, 8)
print(sorted_list)  # [1, 3, 5, 7, 8, 9, 11, 13]</div>

<div class="code-block"># ── STEP 4: Sorting algorithms (for interviews) ──
# Know these for interviews — even though Python's sorted() is faster.

# BUBBLE SORT — O(n²), simple but slow:
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] &gt; arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort([5, 2, 8, 1, 9]))  # [1, 2, 5, 8, 9]

# MERGE SORT — O(n log n), stable, divide &amp; conquer:
def merge_sort(arr):
    if len(arr) &lt;= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i &lt; len(left) and j &lt; len(right):
        if left[i] &lt;= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([5, 2, 8, 1, 9]))  # [1, 2, 5, 8, 9]

# QUICK SORT — O(n log n) average, O(n²) worst:
def quick_sort(arr):
    if len(arr) &lt;= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x &lt; pivot]
    mid = [x for x in arr if x == pivot]
    right = [x for x in arr if x &gt; pivot]
    return quick_sort(left) + mid + quick_sort(right)

# ALGORITHM COMPARISON:
# ┌─────────────┬───────────┬──────────┬────────────┐
# │ Algorithm   │ Average   │ Worst    │ Stable?    │
# ├─────────────┼───────────┼──────────┼────────────┤
# │ Bubble      │ O(n²)     │ O(n²)    │ Yes        │
# │ Merge       │ O(n log n)│ O(n log n)│ Yes       │
# │ Quick       │ O(n log n)│ O(n²)    │ No         │
# │ Timsort     │ O(n log n)│ O(n log n)│ Yes       │
# └─────────────┴───────────┴──────────┴────────────┘
# Python uses Timsort — the best of merge sort + insertion sort</div>

<div class="code-block"># ── STEP 5: Binary search variations ──
# Binary search isn't just for finding exact values.
# It can find BOUNDARIES in sorted data.

import bisect

sorted_list = [1, 2, 2, 2, 3, 4, 5, 5, 6]

# bisect_left: leftmost position to insert (first 2):
print(bisect.bisect_left(sorted_list, 2))   # 1

# bisect_right: rightmost position (after last 2):
print(bisect.bisect_right(sorted_list, 2))  # 4

# Count occurrences of a value:
def count_occurrences(arr, target):
    """Count how many times target appears in sorted array."""
    left = bisect.bisect_left(arr, target)
    right = bisect.bisect_right(arr, target)
    return right - left

print(count_occurrences(sorted_list, 2))  # 3 (three 2's)
print(count_occurrences(sorted_list, 5))  # 2 (two 5's)

# BINARY SEARCH ON ANSWER (advanced pattern):
# "Find the minimum capacity such that..."
def binary_search_answer(low, high, check_fn):
    """Binary search on a range of possible answers."""
    while low &lt; high:
        mid = (low + high) // 2
        if check_fn(mid):
            high = mid
        else:
            low = mid + 1
    return low

# Example: min ship capacity to ship packages in D days
# check_fn(capacity) = can we ship all in D days with this capacity?</div>

<div class="code-block"># ── STEP 6: When to sort vs not ──
# Sorting costs O(n log n) — don't sort unnecessarily.

# SORT when:
# - Need to find items by value (binary search)
# - Need ranked/ordered output
# - Need median, percentiles
# - Preprocessing for repeated searches

# DON'T SORT when:
# - Only need min/max (use min()/max() — O(n))
# - Only need to check membership (use set/dict — O(1))
# - Only need one search (linear scan O(n) is fine)
# - Data is constantly changing (maintaining sort is expensive)

# Python sorting tricks:
# Reverse sort: sorted(arr, reverse=True)
# Sort tuples naturally: sorted([(3, 'b'), (1, 'a'), (2, 'c')])
#   → [(1, 'a'), (2, 'c'), (3, 'b')] — by first element

# Sort dictionary by value:
d = {"apple": 50, "banana": 20, "cherry": 70}
sorted_d = dict(sorted(d.items(), key=lambda x: x[1], reverse=True))
print(sorted_d)  # {'cherry': 70, 'apple': 50, 'banana': 20}

# PRACTICAL: Top-K with sorting:
scores = [("A", 85), ("B", 92), ("C", 78), ("D", 95), ("E", 65)]
top3 = sorted(scores, key=lambda x: x[1], reverse=True)[:3]
print(top3)  # [('D', 95), ('B', 92), ('A', 85)]
# Note: for large data, use heapq.nlargest instead</div>

<div class="dialogue">কিস্ত — ন্যায়বিচার। আল্লাহ বলেন — "হে ঈমানদারগণ, তোমরা আল্লাহর জন্য ন্যায়ের সাক্ষী হয়ে দৃঢ়ভাবে দাঁড়াও।" (৫:৮)। ন্যায়বিচার মানে প্রতিটা জিনিসকে তার সঠিক স্থানে রাখা। Sorting হলো সেই কিস্তের ছায়া — প্রতিটা উপাদানকে তার স্থানে। Binary search তখনই কাজ করে যখন কিস্ত প্রতিষ্ঠিত — যখন সবকিছু তার জায়গায়।</div>
<div class="dialogue en">"Qist — justice. Allah says — 'O you who have believed, be persistently standing firm for Allah, witnesses in justice.' (5:8). Justice means placing each thing in its correct position. Sorting is the shadow of qist — each element in its place. Binary search works only when qist is established — when everything is where it belongs."</div>

<div class="secret-box">📚 সাজানো তালিকায় খোঁজ = O(log n)। অসাজানো = O(n)। সাজানো = ক্ষমতা।</div>`,
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
  spirit:"ফার্ক — splitting/dividing, from the concept of dividing a great task into parts",
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> তারিক bubble sort দিয়ে ৫০,০০০ log entry সাজাতে গিয়েছিলেন — O(n²) = ২.৫ বিলিয়ন অপারেশন। ৪৭ সেকেন্ড, সার্ভার timeout। তারপর merge sort ব্যবহার করলেন — O(n log n) = মাত্র ৮ লাখ অপারেশন। একই ডেটা ০.৩ সেকেন্ডে। ১৫০ গুণ দ্রুত। বড় সমস্যায় O(n²) মৃত্যুদণ্ড — D&C জীবনদান।</div></div>
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

<div class="code-block"># ── STEP 1: What is Divide and Conquer? ──
# D&amp;C is a three-step strategy:
# 1. DIVIDE: break the problem into smaller sub-problems
# 2. CONQUER: solve each sub-problem recursively
# 3. COMBINE: merge the solutions

# Merge Sort is the classic D&amp;C example:

def merge_sort(arr):
    """Sort by dividing in half, sorting each, merging."""
    if len(arr) &lt;= 1:              # BASE CASE
        return arr
    mid = len(arr) // 2             # 1. DIVIDE
    left = merge_sort(arr[:mid])    # 2. CONQUER (recurse)
    right = merge_sort(arr[mid:])
    return merge(left, right)       # 3. COMBINE

def merge(a, b):
    """Merge two sorted lists into one — O(n)."""
    result = []
    i = j = 0
    while i &lt; len(a) and j &lt; len(b):
        if a[i] &lt;= b[j]:
            result.append(a[i]); i += 1
        else:
            result.append(b[j]); j += 1
    result.extend(a[i:])   # remaining items
    result.extend(b[j:])
    return result

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))
# [3, 9, 10, 27, 38, 43, 82]

# Visual breakdown:
# [38, 27, 43, 3, 9, 82, 10]
# → [38, 27, 43] and [3, 9, 82, 10]      DIVIDE
# → [38] [27, 43]  [3, 9] [82, 10]       DIVIDE more
# → [38] [27] [43]  [3] [9] [82] [10]    BASE CASE
# → [27, 38] [43]   [3, 9] [10, 82]      MERGE
# → [27, 38, 43]    [3, 9, 10, 82]       MERGE
# → [3, 9, 10, 27, 38, 43, 82]           FINAL MERGE</div>

<div class="code-block"># ── STEP 2: Why D&C gives O(n log n) ──
# At each level, merging costs O(n).
# There are O(log n) levels (we divide by 2 each time).
# Total: O(n) × O(log n) = O(n log n).

# This is the THEORETICAL LIMIT for comparison-based sorting.
# You can't sort faster than O(n log n) using only comparisons.

# Levels in merge sort for n=8:
# Level 0: 8 elements, merge cost = 8
# Level 1: two 4-element merges, cost = 4+4 = 8
# Level 2: four 2-element merges, cost = 2+2+2+2 = 8
# Level 3: base case (1 element each)
# Total: 8 × 3 = 24 operations = O(8 × log 8) = O(8 × 3)

# Compare:
# O(n²) for n=1,000,000: 1,000,000,000,000 operations
# O(n log n) for n=1,000,000: 20,000,000 operations
# That's 50,000x faster!</div>

<div class="code-block"># ── STEP 3: Quick Sort — D&C with partitioning ──
# Quick Sort divides differently: pick a PIVOT, split into less/greater.

def quick_sort(arr):
    """Sort by partitioning around a pivot."""
    if len(arr) &lt;= 1:
        return arr

    pivot = arr[len(arr) // 2]

    left = [x for x in arr if x &lt; pivot]    # smaller
    mid = [x for x in arr if x == pivot]      # equal
    right = [x for x in arr if x &gt; pivot]    # larger

    return quick_sort(left) + mid + quick_sort(right)

print(quick_sort([3, 6, 8, 10, 1, 2, 1]))
# [1, 1, 2, 3, 6, 8, 10]

# MERGE SORT vs QUICK SORT:
# ┌────────────┬────────────┬───────────┬────────┐
# │ Aspect     │ Merge Sort │ Quick Sort│        │
# ├────────────┼────────────┼───────────┼────────┤
# │ Divide by  │ splitting  │ pivot     │        │
# │ Worst case │ O(n log n) │ O(n²)     │        │
# │ Average    │ O(n log n) │ O(n log n)│        │
# │ In-place?  │ No (extra) │ Yes       │        │
# │ Stable?    │ Yes        │ No        │        │
# │ Best for   │ linked list│ arrays    │        │
# └────────────┴────────────┴───────────┴────────┘</div>

<div class="code-block"># ── STEP 4: Binary Search as D&C ──
# Binary search IS divide and conquer!
# DIVIDE: split the search space in half
# CONQUER: search only the relevant half
# COMBINE: trivial (just return the result)

def binary_search(arr, target):
    """D&C search: eliminate half each step."""
    left, right = 0, len(arr) - 1

    while left &lt;= right:
        mid = (left + right) // 2       # DIVIDE
        if arr[mid] == target:
            return mid                   # FOUND
        elif arr[mid] &lt; target:
            left = mid + 1              # CONQUER right half
        else:
            right = mid - 1             # CONQUER left half

    return -1

# Binary search on 1 billion items: only 30 comparisons!
# That's the power of dividing the problem.</div>

<div class="code-block"># ── STEP 5: D&C beyond sorting ──
# Divide and Conquer isn't just for sorting.
# Many problems benefit from this strategy.

# 1. MAXIMUM SUBARRAY (Kadane's alternative):
def max_subarray_dc(arr, low, high):
    """Find max subarray sum using D&C."""
    if low == high:
        return arr[low]

    mid = (low + high) // 2

    # Max in left half, right half, or crossing mid:
    left_max = max_subarray_dc(arr, low, mid)
    right_max = max_subarray_dc(arr, mid + 1, high)

    # Crossing sum:
    cross_left = float('-inf')
    total = 0
    for i in range(mid, low - 1, -1):
        total += arr[i]
        cross_left = max(cross_left, total)

    cross_right = float('-inf')
    total = 0
    for i in range(mid + 1, high + 1):
        total += arr[i]
        cross_right = max(cross_right, total)

    return max(left_max, right_max, cross_left + cross_right)

# 2. CLOSEST PAIR OF POINTS:
# Divide points by x-coordinate, find closest in each half,
# then check pairs straddling the dividing line.

# 3. MATRIX MULTIPLICATION (Strassen's):
# Standard: O(n³). Strassen's D&C: O(n^2.81).

# 4. FFT (Fast Fourier Transform):
# D&C enables O(n log n) Fourier transform.
# Used in signal processing, polynomial multiplication.</div>

<div class="code-block"># ── STEP 6: Simple sorting algorithms (for learning) ──
# These are O(n²) — too slow for production, but good for learning.

# BUBBLE SORT — swap adjacent pairs:
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] &gt; arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# SELECTION SORT — find min, put at front:
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] &lt; arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# INSERTION SORT — insert each element in correct position:
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j &gt;= 0 and arr[j] &gt; key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# When to use each:
# ┌─────────────────┬───────────┬──────────────────────────┐
# │ Algorithm       │ Time      │ When to use              │
# ├─────────────────┼───────────┼──────────────────────────┤
# │ Insertion sort  │ O(n²)     │ small/nearly sorted data │
# │ Bubble sort     │ O(n²)     │ learning only            │
# │ Selection sort  │ O(n²)     │ learning only            │
# │ Merge sort      │ O(n log n)│ stable sort needed       │
# │ Quick sort      │ O(n log n)│ general purpose          │
# │ Python sorted() │ O(n log n)│ ALWAYS — Timsort         │
# └─────────────────┴───────────┴──────────────────────────┘
# REALITY: In Python, just use sorted() or .sort(). Always.</div>

<div class="dialogue">কিন্তু merge sort আর quick sort — এগুলো advanced। শুরুতে চলো সহজ sorting গুলো দেখি, যেগুলো প্রতিদিনের জীবনে আমরা অজান্তেই করি।</div>
<div class="dialogue en">"But merge sort and quick sort are advanced. Let's start with the simpler sorts — ones we do unconsciously in daily life."</div>

<div class="diagram">
  <div class="diag-title">তিন Sort — এক পাস করে</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <!-- BUBBLE -->
    <text class="lbl-sm" x="20" y="22" fill="#36d6e7">Bubble: পাশে পাশে তুলনা, বড়→ডানে</text>
    ${[5,3,8,1].map((v,i)=>`
    <rect class="${i===0?'cell-hot':'cell'}" x="${30+i*60}" y="30" width="50" height="30" rx="4" style="${i===0?'fill:rgba(255,107,53,.2)':''}"/>
    <text class="lbl-sm" x="${55+i*60}" y="49">${v}</text>
    `).join('')}
    <text class="lbl-sm" x="280" y="75" text-anchor="middle" fill="#36d6e7">↔ swap → [3, 5, 8, 1] → ৮ ও ১ তুলনা → swap → [3, 5, 1, 8]</text>

    <!-- SELECTION -->
    <text class="lbl-sm" x="20" y="100" fill="#f0c14b">Selection: সবচেয়ে ছোট খুঁজে সামনে রাখো</text>
    ${[5,3,8,1].map((v,i)=>`
    <rect class="${v===1?'cell-good':'cell'}" x="${30+i*60}" y="108" width="50" height="30" rx="4" style="${v===1?'fill:rgba(82,196,26,.2)':''}"/>
    <text class="lbl-sm" x="${55+i*60}" y="127">${v}</text>
    `).join('')}
    <text class="lbl-sm" x="280" y="153" text-anchor="middle" fill="#f0c14b">১ সবচেয়ে ছোট → প্রথমে রাখো → [1, 5, 3, 8] → তারপর ৩...</text>

    <!-- INSERTION -->
    <text class="lbl-sm" x="20" y="178" fill="#52c41a">Insertion: সাজানো অংশে নতুনটা বসাও</text>
    ${[2,5,9,7].map((v,i)=>`
    <rect class="${i<3?'cell-good':'cell-hot'}" x="${30+i*60}" y="186" width="50" height="30" rx="4" style="${i<3?'fill:rgba(82,196,26,.15)':'fill:rgba(255,107,53,.2)'}"/>
    <text class="lbl-sm" x="${55+i*60}" y="205">${v}</text>
    `).join('')}
    <text class="lbl-sm" x="280" y="231" text-anchor="middle" fill="#52c41a">[2,5,9] সাজানো → ৭ কোথায়? ৫ আর ৯-এর মাঝে → [2, 5, 7, 9]</text>
  </svg>
  <div class="diag-cap">Bubble = swap swap swap। Selection = min খুঁজে সামনে। Insertion = সাজানো অংশে insert। তিনটাই O(n²), কিন্তু ভিন্ন চিন্তা।</div>
</div>

<div class="dialogue">তিনটাই O(n²)। কিন্তু D&C এলে খেলা বদলে যায় — O(n log n)। Merge sort আর quick sort হলো সেই পরবর্তী স্তর। রোমান সাম্রাজ্যের কৌশল — শত্রুর বিশাল সেনাকে ভাগ করো ছোট ছোট দলে, আলাদা আলাদা পরাস্ত করো, তারপর একত্রিত করো। এটাই divide and conquer।</div>
<div class="dialogue en">"All three are O(n²). But D&C changes the game — O(n log n). Merge sort and quick sort are that next level. The Roman Empire's strategy — split the enemy's vast army into small groups, defeat each separately, then unite. This is divide and conquer."</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। MapReduce — D&C এর বিশাল রূপ: map (ভাগ), reduce (জোড়ো)। Parallel training — ডেটা ভাগ করো GPU-তে, প্রতিটা গ্রেডিয়েন্ট বের করো, combine করো। Parallel merge sort — একাধিক কোরে একসাথে। বড় সমস্যা কখনো এক হাতে হয় না — ভাগ করো, জয় করো।</div>
<div class="dialogue en">"You're an AI engineer. MapReduce — D&C at vast scale: map (divide), reduce (combine). Parallel training — split data across GPUs, compute gradients each, combine. Parallel merge sort — across many cores. Big problems are never done by one hand — divide, conquer."</div>

<div class="dialogue">ফুরকান — যে বিভাজক, যে সত্যকে মিথ্যা থেকে আলাদা করে। আল্লাহ কুরআনকে ফুরকান বলেছেন — কারণ এটি আলাদা করে। পাথর বিভাজকও ফুরকানের ছায়া — বড়কে ছোট টুকরোয় বিভাজন, যাতে প্রতিটা সহজ হয়। সমস্যা বড় হলে ভয় নয় — ভাগ করো। প্রতিটা অংশ পরিষ্কার হয়।</div>
<div class="dialogue en">"Furqan — the divider, that which separates truth from falsehood. Allah called the Quran Furqan — because it separates. The stone splitter is the shadow of furqan — dividing the large into small pieces, so each becomes easy. A big problem is no fear — divide it. Each piece becomes clear."</div>

<div class="secret-box">⛏️ বড় সমস্যা ভাগ করো, আলাদে সমাধান করো, জোড়ো। তিন ধাপ: divide → conquer → combine। O(n log n)।</div>`,
  senior:{
    title:"Merge Sort বনাম Quick Sort — Senior Choice",
    body:`
    <p><strong>Merge sort:</strong> stable, <strong>O(n log n) worst-case</strong>, কিন্তু O(n) অতিরিক্ত মেমোরি। linked list sort-এ সেরা। "সবসময় দ্রুত" চাইলে merge sort।</p>
    <p><strong>Quick sort:</strong> in-place (গড়ে O(log n) স্ট্যাক), গড়ে দ্রুত (cache-friendly), কিন্তু pivot খারাপ হলে worst-case O(n²) সময় আর O(n) স্ট্যাক — দুটোই একসাথে খারাপ হয়। random/median-of-three pivot দিয়ে এড়াও। Python/Java-র ডিফল্ট sort এর উপর ভিত্তি করে।</p>
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
