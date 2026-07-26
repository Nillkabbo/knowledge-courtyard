// ═══════════════════════════════════════════
// DOOR 6 — The Pigeon's Warning (Pigeonhole)
// ═══════════════════════════════════════════
doors.push({
  num: 6,
  icon: "🕊️",
  color: "#f472b6",
  tagline: "কবুতরের সতর্কবাণী — Pigeon's Warning",
  name: "The Pigeon's Warning",
  secret: "n item, k box, n > k → collision গ্যারান্টিড। Hash collision অনিবার্য!",
  story: `<p class="scene-setting">৩৬৭ জন মানুষ এক রুমে থাকলে অন্তত ২ জনের জন্মদিন একই! এই সহজ নীতিই Pigeonhole Principle। n item কে k box এ রাখলে, যদি n > k, তবে অন্তত এক box এ একাধিক item থাকবে। এটাই hash collision এর গাণিতিক ভিত্তি — infinite possible input, finite hash output। Birthday paradox: ৩৬৫ দিনে মাত্র ২৩ জনে ~৫০% duplicate birthday! এটাই birthday attack এর ভিত্তি — hash function এ collision খুঁজে বের করা।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🕊️ Pigeonhole Principle: Collision is Guaranteed</text>

  <!-- Pigeons -->
  <rect x="20" y="50" width="250" height="180" rx="10" fill="#831843" stroke="#ec4899" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#f9a8d4" font-size="10" font-weight="700">7 Pigeons (n=7)</text>
  <g transform="translate(40, 85)">
    <circle cx="0" cy="0" r="12" fill="#f472b6" stroke="#ec4899" stroke-width="1"/>
    <text x="0" y="3" text-anchor="middle" fill="#fff" font-size="8">🐦</text>
  </g>
  <g transform="translate(80, 85)">
    <circle cx="0" cy="0" r="12" fill="#f472b6" stroke="#ec4899" stroke-width="1"/>
    <text x="0" y="3" text-anchor="middle" fill="#fff" font-size="8">🐦</text>
  </g>
  <g transform="translate(120, 85)">
    <circle cx="0" cy="0" r="12" fill="#f472b6" stroke="#ec4899" stroke-width="1"/>
    <text x="0" y="3" text-anchor="middle" fill="#fff" font-size="8">🐦</text>
  </g>
  <g transform="translate(160, 85)">
    <circle cx="0" cy="0" r="12" fill="#f472b6" stroke="#ec4899" stroke-width="1"/>
    <text x="0" y="3" text-anchor="middle" fill="#fff" font-size="8">🐦</text>
  </g>
  <g transform="translate(200, 85)">
    <circle cx="0" cy="0" r="12" fill="#f472b6" stroke="#ec4899" stroke-width="1"/>
    <text x="0" y="3" text-anchor="middle" fill="#fff" font-size="8">🐦</text>
  </g>
  <g transform="translate(60, 120)">
    <circle cx="0" cy="0" r="12" fill="#f472b6" stroke="#ec4899" stroke-width="1"/>
    <text x="0" y="3" text-anchor="middle" fill="#fff" font-size="8">🐦</text>
  </g>
  <g transform="translate(100, 120)">
    <circle cx="0" cy="0" r="12" fill="#f472b6" stroke="#ec4899" stroke-width="1"/>
    <text x="0" y="3" text-anchor="middle" fill="#fff" font-size="8">🐦</text>
  </g>
  <text x="145" y="155" text-anchor="middle" fill="#f9a8d4" font-size="8">7 items, but only 5 boxes...</text>
  <rect x="40" y="170" width="210" height="22" rx="4" fill="#7f1d1d" stroke="#dc2626" stroke-width="1"/>
  <text x="145" y="185" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">At least 1 box MUST have 2+! ⚠️</text>
  <text x="145" y="210" text-anchor="middle" fill="#64748b" font-size="7">Hash: infinite inputs → finite outputs</text>
  <text x="145" y="222" text-anchor="middle" fill="#64748b" font-size="7">Collision is MATHEMATICALLY CERTAIN</text>

  <!-- Boxes -->
  <rect x="310" y="50" width="250" height="180" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="435" y="72" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">5 Pigeonholes (k=5)</text>
  <rect x="330" y="85" width="40" height="40" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="350" y="105" text-anchor="middle" fill="#f472b6" font-size="8">🐦🐦</text>
  <text x="350" y="120" text-anchor="middle" fill="#ec4899" font-size="6">COLLISION!</text>
  <rect x="380" y="85" width="40" height="40" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="400" y="108" text-anchor="middle" fill="#f472b6" font-size="8">🐦</text>
  <rect x="430" y="85" width="40" height="40" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="450" y="108" text-anchor="middle" fill="#f472b6" font-size="8">🐦</text>
  <rect x="480" y="85" width="40" height="40" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="500" y="108" text-anchor="middle" fill="#f472b6" font-size="8">🐦</text>
  <rect x="330" y="135" width="40" height="40" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="350" y="158" text-anchor="middle" fill="#f472b6" font-size="8">🐦</text>

  <rect x="330" y="185" width="190" height="28" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="425" y="203" text-anchor="middle" fill="#4ade80" font-size="7" font-weight="700">Birthday: 23 people → 50% match!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Pigeonhole Principle — ৭ pigeon, ৫ hole → অন্তত এক hole এ ২+ pigeon। Hash collision গ্যারান্টিড। Birthday paradox: ২৩ জনে ৫০% duplicate!</div>

<div class="code-block">🐍 Python: Pigeonhole Principle — Hash Collision ও Birthday Attack

# Pigeonhole: n item, k box; n > k → অন্তত এক box এ একাধিক item
def min_box_with_two(n_items, k_boxes):
    # ⌈n/k⌉ — সবচেয়ে ভরা box এ অন্তত এতটা item
    return -(-n_items // k_boxes)   # ceiling division

print("৭ pigeon, ৫ hole → max ≥", min_box_with_two(7, 5), "per hole")  # 2
print("৩৬৭ মানুষ, ৩৬৬ day → max ≥", min_box_with_two(367, 366), "share birthday")  # 2

# Hash collision: infinite possible input, finite output → collision গ্যারান্টিড
import hashlib
def show_collision(space_bits=8):
    space = 1 << space_bits   # 2^space_bits possible hashes
    print(f"  {space_bits}-bit hash: {space} possible outputs")
    # সবচেয়ে খারাপ ক্ষেত্রে space+1 input → pigeonhole → নিশ্চিত collision
    print(f"  {space+1} টা input → নিশ্চিত collision (pigeonhole)")

show_collision(8)   # 256 outputs, 257 inputs → collision
show_collision(16)  # 65536 outputs

# Birthday attack: √N এর কাছাকাছি input এ ~50% collision সম্ভাবনা
import math
def birthday_threshold(space_bits):
    n = 1 << space_bits
    # আনুমানিক threshold ≈ √(π/2 · n) ≈ 1.1774 · √n
    return int(math.sqrt(math.pi / 2 * n))

for bits in [16, 32, 64, 128]:
    t = birthday_threshold(bits)
    print(f"  {bits:3d}-bit space: ~{t:,} inputs → 50% collision")

# Birthday Paradox সিমুলেশন (Monte Carlo verify)
import random
def birthday_sim(n_people, trials=10000, days=365):
    hits = 0
    for _ in range(trials):
        bdays = [random.randrange(days) for _ in range(n_people)]
        if len(bdays) != len(set(bdays)): hits += 1
    return hits / trials

print(f"২৩ জনে duplicate birthday (simulated): {birthday_sim(23)*100:.1f}%")  # ~50%

# Django session ID collision ঝুঁকি (32-bit)
# 2^32 ≈ 4.3 billion; birthday threshold ≈ 77,000 → ৭৭ হাজার session এ ৫০% collision
print(f"Session ID 32-bit → 50% collision at ~{birthday_threshold(32):,} sessions")

# UUID4: 2^122 random bits → collision ব্যবহারিকভাবে অসম্ভব
print(f"UUID4 (122 bits) → 50% collision at ~{birthday_threshold(122):,}")
# এই সংখ্যা মহাবিশ্বের পরমাণুর চেয়ে বড় → UUID নিরাপদ</div>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> তোমার Django cache key hash করলে — infinite possible URL, finite hash output। Pigeonhole গ্যারান্টি দেয় — collision অনিবার্য! Birthday paradox বলে ২৩ জনে ৫০% duplicate birthday। এটাই birthday attack — hash function এ collision খুঁজে বের করা। UUID4 তে 2^122 possible value — collision প্রায় অসম্ভব। কিন্তু session ID (2^32) — ৭৭,০০০ session এ ৫০% collision! সবসময় বড় key space ব্যবহার করো।</div>`,
  recall: [
    { q: "Pigeonhole Principle কী?", a: "n item কে k box এ রাখলে, n > k হলে অন্তত এক box এ একাধিক item থাকবে। Hash collision এর গাণিতিক ভিত্তি।" },
    { q: "Birthday paradox কী এবং এটা কেন গুরুত্বপূর্ণ?", a: "৩৬৫ দিনে ২৩ জন → ~৫০% duplicate birthday। Birthday attack এর ভিত্তি — ছোট hash space এ collision দ্রুত ঘটে। সবসময় বড় key space (UUID4, SHA-256) ব্যবহার করো।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 7 — The Web of Connections (Graph Theory)
// ═══════════════════════════════════════════
doors.push({
  num: 7,
  icon: "🕸️",
  color: "#06b6d4",
  tagline: "সংযোগের জাল — Web of Connections",
  name: "The Web of Connections",
  secret: "Graph = vertices + edges। DAG = dependency ordering। Topological sort = build order।",
  story: `<p class="scene-setting">Graph theory শুধু diagram নয় — এটা binary relation এর গাণিতিক মডেল। Vertices (নোড) আর edges (সংযোগ) দিয়ে যেকোনো network মডেল করা যায়। Social network (User = vertex, Follow = edge), URL routing (Trie tree), Celery task dependency (DAG)। Directed Acyclic Graph (DAG) এ কোনো cycle নেই — topological sort দিয়ে valid execution order বের করা যায়। Spark আর Airflow তে DAG হল pipeline execution model। BFS আর DFS হল graph traversal algorithm — B2 (DSA) তে শেখা।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrG7" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#06b6d4"/></marker></defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🕸️ DAG: Transaction Dependency Graph</text>

  <!-- DAG Nodes -->
  <ellipse cx="100" cy="80" rx="45" ry="22" fill="#0c4a6e" stroke="#06b6d4" stroke-width="2"/>
  <text x="100" y="78" text-anchor="middle" fill="#67e8f9" font-size="8" font-weight="700">Create</text>
  <text x="100" y="90" text-anchor="middle" fill="#67e8f9" font-size="7">Account</text>

  <ellipse cx="250" cy="80" rx="45" ry="22" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="250" y="78" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Deposit</text>
  <text x="250" y="90" text-anchor="middle" fill="#4ade80" font-size="7">Funds</text>

  <ellipse cx="100" cy="160" rx="45" ry="22" fill="#451a03" stroke="#f97316" stroke-width="2"/>
  <text x="100" y="158" text-anchor="middle" fill="#fdba74" font-size="8" font-weight="700">Verify</text>
  <text x="100" y="170" text-anchor="middle" fill="#fdba74" font-size="7">KYC</text>

  <ellipse cx="250" cy="160" rx="45" ry="22" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="250" y="158" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">Create</text>
  <text x="250" y="170" text-anchor="middle" fill="#c084fc" font-size="7">Transaction</text>

  <ellipse cx="400" cy="120" rx="50" ry="22" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="400" y="118" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">Update</text>
  <text x="400" y="130" text-anchor="middle" fill="#fca5a5" font-size="7">Balance</text>

  <ellipse cx="510" cy="120" rx="45" ry="22" fill="#831843" stroke="#ec4899" stroke-width="2"/>
  <text x="510" y="118" text-anchor="middle" fill="#f9a8d4" font-size="8" font-weight="700">Send</text>
  <text x="510" y="130" text-anchor="middle" fill="#f9a8d4" font-size="7">Receipt</text>

  <!-- Edges -->
  <line x1="145" y1="80" x2="205" y2="80" stroke="#06b6d4" stroke-width="2" marker-end="url(#arrG7)"/>
  <line x1="100" y1="102" x2="100" y2="138" stroke="#06b6d4" stroke-width="2" marker-end="url(#arrG7)"/>
  <line x1="145" y1="160" x2="205" y2="160" stroke="#06b6d4" stroke-width="2" marker-end="url(#arrG7)"/>
  <line x1="250" y1="102" x2="250" y2="138" stroke="#06b6d4" stroke-width="2" marker-end="url(#arrG7)"/>
  <line x1="295" y1="80" x2="370" y2="110" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arrG7)"/>
  <line x1="295" y1="160" x2="370" y2="130" stroke="#06b6d4" stroke-width="1.5" marker-end="url(#arrG7)"/>
  <line x1="450" y1="120" x2="465" y2="120" stroke="#06b6d4" stroke-width="2" marker-end="url(#arrG7)"/>

  <!-- Topological Sort -->
  <rect x="30" y="210" width="520" height="55" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="228" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="700">Topological Sort (valid execution order):</text>
  <rect x="50" y="238" width="65" height="18" rx="3" fill="#0c4a6e" stroke="#06b6d4" stroke-width="1"/>
  <text x="82" y="251" text-anchor="middle" fill="#67e8f9" font-size="7">1. Account</text>
  <text x="125" y="250" fill="#475569" font-size="8">→</text>
  <rect x="140" y="238" width="55" height="18" rx="3" fill="#451a03" stroke="#f97316" stroke-width="1"/>
  <text x="167" y="251" text-anchor="middle" fill="#fdba74" font-size="7">2. KYC</text>
  <text x="205" y="250" fill="#475569" font-size="8">→</text>
  <rect x="220" y="238" width="65" height="18" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="252" y="251" text-anchor="middle" fill="#4ade80" font-size="7">3. Deposit</text>
  <text x="295" y="250" fill="#475569" font-size="8">→</text>
  <rect x="310" y="238" width="65" height="18" rx="3" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="342" y="251" text-anchor="middle" fill="#c084fc" font-size="7">4. Transact</text>
  <text x="385" y="250" fill="#475569" font-size="8">→</text>
  <rect x="400" y="238" width="65" height="18" rx="3" fill="#7f1d1d" stroke="#dc2626" stroke-width="1"/>
  <text x="432" y="251" text-anchor="middle" fill="#fca5a5" font-size="7">5. Update</text>
  <text x="475" y="250" fill="#475569" font-size="8">→</text>
  <rect x="490" y="238" width="55" height="18" rx="3" fill="#831843" stroke="#ec4899" stroke-width="1"/>
  <text x="517" y="251" text-anchor="middle" fill="#f9a8d4" font-size="7">6. Send</text>
</svg>
</div>
<div class="svg-caption">চিত্র: DAG — LedgerPilot transaction dependency graph। Topological sort দিয়ে valid execution order বের করা। Spark/Airflow তে এটাই pipeline model।</div>

<div class="code-block">🐍 Python: Graph Theory — DAG, Topological Sort (networkx)

import networkx as nx

# DAG তৈরি — LedgerPilot transaction pipeline
G = nx.DiGraph()
edges = [
    ('CreateAccount', 'DepositFunds'),
    ('CreateAccount', 'VerifyKYC'),
    ('VerifyKYC',     'CreateTransaction'),
    ('DepositFunds',  'CreateTransaction'),
    ('DepositFunds',  'UpdateBalance'),
    ('CreateTransaction', 'UpdateBalance'),
    ('UpdateBalance', 'SendReceipt'),
]
G.add_edges_from(edges)

print("Is DAG (cycle নেই)?", nx.is_directed_acyclic_graph(G))  # True
print("Vertices (nodes):", list(G.nodes()))
print("Edges:", list(G.edges()))
print("|V| =", G.number_of_nodes(), " |E| =", G.number_of_edges())

# Topological Sort — valid execution order (dependencies আগে)
topo = list(nx.topological_sort(G))
print("Topological order:", " → ".join(topo))
# CreateAccount → VerifyKYC → DepositFunds → CreateTransaction → UpdateBalance → SendReceipt

# Cycle থাকলে topological sort সম্ভব নয় — DependencyError!
G_bad = nx.DiGraph([('A','B'), ('B','C'), ('C','A')])  # A→B→C→A cycle
print("Has cycle?", not nx.is_directed_acyclic_graph(G_bad))  # True
try:
    list(nx.topological_sort(G_bad))
except nx.NetworkXUnfeasible as e:
    print("Cycle detected:", type(e).__name__)  # NetworkXUnfeasible

# In-degree: কতটা dependency এসে পৌঁছাচ্ছে
print("In-degree UpdateBalance:", G.in_degree('UpdateBalance'))  # 2 (Deposit+Transaction)
# Out-degree: কতটা নির্ভর করছে এটার উপর
print("Out-degree CreateAccount:", G.out_degree('CreateAccount'))  # 2

# BFS / DFS traversal — shortest path ও connectivity চেক
from collections import deque
def bfs_shortest_path(graph, start, goal):
    queue = deque([[start]])
    seen = {start}
    while queue:
        path = queue.popleft()
        if path[-1] == goal: return path
        for nxt in graph[path[-1]]:
            if nxt not in seen:
                seen.add(nxt); queue.append(path + [nxt])
    return None

adj = {n: list(G.successors(n)) for n in G.nodes()}
print("Shortest path CreateAccount → SendReceipt:")
print("  ", " → ".join(bfs_shortest_path(adj, 'CreateAccount', 'SendReceipt')))

# Indegree-0 source nodes (পাইলাইনের শুরু)
sources = [n for n in G.nodes() if G.in_degree(n) == 0]
sinks   = [n for n in G.nodes() if G.out_degree(n) == 0]
print("Sources (in-degree 0):", sources)  # ['CreateAccount']
print("Sinks (out-degree 0):", sinks)     # ['SendReceipt']</div>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> Graph = vertices + edges। Directed graph (digraph) = arrows সহ। DAG = directed, no cycles। Topological sort = valid order যেখানে প্রতিটা node তার dependencies এর পরে আসে। LedgerPilot এ: Account তৈরি → KYC verify → Deposit → Transaction → Balance update → Receipt। এই order ভাঙলে error! Spark (B44) আর Airflow (B43) তে DAG হল pipeline model। Compilers (B45) এ DAG = expression evaluation tree।</div>`,
  recall: [
    { q: "DAG কী এবং topological sort কেন দরকার?", a: "DAG = Directed Acyclic Graph (cycle নেই)। Topological sort = valid execution order যেখানে প্রতিটা node তার dependencies এর পরে। Build system, Spark pipeline, Celery task ordering।" },
    { q: "Graph theory কিভাবে software এ ব্যবহৃত হয়?", a: "Social network (User=vertex, Follow=edge), URL routing (Trie), task dependency (DAG), compiler AST (tree), database ER diagram। BFS/DFS/Dijkstra সব graph algorithm।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 8 — The Color Tournament (Graph Coloring)
// ═══════════════════════════════════════════
doors.push({
  num: 8,
  icon: "🎨",
  color: "#f59e0b",
  tagline: "রঙের প্রতিযোগিতা — Color Tournament",
  name: "The Color Tournament",
  secret: "Four Color Theorem: যেকোনো মানচিত্র ৪ রঙে রাঙানো যায়। Register allocation = graph coloring!",
  story: `<p class="scene-setting">Four Color Theorem (1976) — যেকোনো planar map কে ৪টা রঙে রাঙানো যায় যেন পাশাপাশি দুটো region এর রং আলাদা। প্রমাণে ১২০ বছর লেগেছে — প্রথম computer-assisted proof! Akamai এই principle দিয়ে ৬৫,০০০ সার্ভার ৮ wave এ deploy করে। Graph coloring এর আরেকটা বিশাল application — compiler register allocation। Variables = vertices, overlapping lifetimes = edges, registers = colors। Chromatic number = minimum colors needed।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎨 Graph Coloring: From Maps to Registers</text>

  <!-- Map coloring -->
  <rect x="20" y="50" width="250" height="200" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">Four Color Theorem (1976)</text>

  <!-- Regions -->
  <path d="M 50,90 L 120,90 L 120,140 L 50,140 Z" fill="#dc2626" stroke="#fff" stroke-width="1.5" opacity="0.7"/>
  <text x="85" y="118" text-anchor="middle" fill="#fff" font-size="7" font-weight="700">A</text>

  <path d="M 120,90 L 220,90 L 220,140 L 120,140 Z" fill="#22c55e" stroke="#fff" stroke-width="1.5" opacity="0.7"/>
  <text x="170" y="118" text-anchor="middle" fill="#fff" font-size="7" font-weight="700">B</text>

  <path d="M 50,140 L 120,140 L 120,210 L 50,210 Z" fill="#0ea5e9" stroke="#fff" stroke-width="1.5" opacity="0.7"/>
  <text x="85" y="178" text-anchor="middle" fill="#fff" font-size="7" font-weight="700">C</text>

  <path d="M 120,140 L 220,140 L 220,210 L 120,210 Z" fill="#fbbf24" stroke="#fff" stroke-width="1.5" opacity="0.7"/>
  <text x="170" y="178" text-anchor="middle" fill="#1e293b" font-size="7" font-weight="700">D</text>

  <text x="145" y="230" text-anchor="middle" fill="#fbbf24" font-size="7">4 colors suffice for ANY planar map!</text>

  <!-- Register allocation -->
  <rect x="310" y="50" width="250" height="200" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="435" y="72" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">Compiler Register Allocation</text>

  <!-- Variable graph -->
  <circle cx="360" cy="105" r="16" fill="#dc2626" stroke="#fff" stroke-width="1.5"/>
  <text x="360" y="108" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">x</text>

  <circle cx="430" cy="105" r="16" fill="#22c55e" stroke="#fff" stroke-width="1.5"/>
  <text x="430" y="108" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">y</text>

  <circle cx="500" cy="105" r="16" fill="#dc2626" stroke="#fff" stroke-width="1.5"/>
  <text x="500" y="108" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">z</text>

  <circle cx="395" cy="170" r="16" fill="#22c55e" stroke="#fff" stroke-width="1.5"/>
  <text x="395" y="173" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">w</text>

  <circle cx="465" cy="170" r="16" fill="#dc2626" stroke="#fff" stroke-width="1.5"/>
  <text x="465" y="173" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">v</text>

  <!-- Edges (overlapping lifetimes) -->
  <line x1="376" y1="105" x2="414" y2="105" stroke="#475569" stroke-width="2"/>
  <line x1="446" y1="105" x2="484" y2="105" stroke="#475569" stroke-width="2"/>
  <line x1="376" y1="115" x2="385" y2="155" stroke="#475569" stroke-width="2"/>
  <line x1="414" y1="115" x2="410" y2="155" stroke="#475569" stroke-width="2"/>
  <line x1="446" y1="115" x2="460" y2="155" stroke="#475569" stroke-width="2"/>
  <line x1="484" y1="115" x2="476" y2="155" stroke="#475569" stroke-width="2"/>
  <line x1="411" y1="170" x2="449" y2="170" stroke="#475569" stroke-width="2"/>

  <text x="435" y="210" text-anchor="middle" fill="#c084fc" font-size="7">x,z,v = Register R0 (red)</text>
  <text x="435" y="222" text-anchor="middle" fill="#4ade80" font-size="7">y,w = Register R1 (green)</text>
  <text x="435" y="238" text-anchor="middle" fill="#fbbf24" font-size="7">Chromatic number = 2 registers!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Graph Coloring — Four Color Theorem (মানচিত্র) আর Register Allocation (compiler)। Variables = vertices, overlap = edge, register = color।</div>

<div class="code-block">🐍 Python: Graph Coloring — Map Coloring ও Compiler Register Allocation

import networkx as nx

# Map coloring: adjacency graph থেকে chromatic number বের করা
# চারটি region A,B,C,D — A ও B পাশাপাশি, ইত্যাদি (conflict edges)
map_graph = nx.Graph()
map_graph.add_edges_from([('A','B'), ('A','C'), ('B','D'), ('C','D'), ('B','C')])
print("Map adjacency:", list(map_graph.edges()))

# Greedy graph coloring — chromatic number এর আসল মানের কাছাকাছি
coloring = nx.coloring.greedy_color(map_graph, strategy='largest_first')
print("Coloring:", coloring)  # {'B': 0, 'C': 1, 'A': 2, 'D': 2} → ৩ color
chromatic = max(coloring.values()) + 1
print("Chromatic number (greedy):", chromatic)  # ৩ color লাগছে এই map এ

# Four Color Theorem: যেকোনো planar graph ≤ ৪ color এ colorable
# Planar check + coloring
print("Is planar?", nx.check_planarity(map_graph)[0])  # True

# Register Allocation (Chaitin 1981): variables = vertices, overlap = edge
# দুটি variable একই সময়ে live হলে তাদের আলাদা register লাগে
reg_graph = nx.Graph()
# x,y,z,w,v — x,y overlap; y,z overlap; z,v overlap; w,v overlap; ইত্যাদি
reg_graph.add_edges_from([('x','y'), ('y','z'), ('z','v'), ('v','w'), ('x','w')])
regs = nx.coloring.greedy_color(reg_graph, strategy='largest_first')
print("\nRegister allocation:")
for var, color in sorted(regs.items()):
    print(f"  {var} → R{color}  (register)")
print("Min registers needed:", max(regs.values()) + 1)

# Akamai deploy wave example — conflict graph coloring দিয়ে batch
# ৬৫,০০০ সার্ভার, pairwise conflict থাকলে আলাদা wave
import random
random.seed(42)
servers = [f"s{i}" for i in range(20)]   # ছোট উদাহরণ
deploy_graph = nx.Graph()
for i in range(len(servers)):
    for j in range(i+1, len(servers)):
        if random.random() < 0.15:   # ১৫% conflict
            deploy_graph.add_edge(servers[i], servers[j])
waves = nx.coloring.greedy_color(deploy_graph, strategy='largest_first')
print(f"\n{len(servers)} সার্ভার → {max(waves.values())+1} deploy wave")
for w in sorted(set(waves.values())):
    batch = [s for s, c in waves.items() if c == w]
    print(f"  Wave {w}: {batch}")

# প্রতিটা wave এর সার্ভাররা একে অপরের সাথে conflict করে না → নিরাপদে deploy</div>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> Four Color Theorem — ১৮৫২ সালে conjecture, ১৯৭৬ সালে প্রমাণ! প্রথম computer-assisted proof — Appel আর Haken। Graph coloring এর সবচেয়ে বড় application হল compiler register allocation (B45)। Chaitin (1981): variables = vertices, overlapping lifetime = edge, register = color। Chromatic number = minimum registers needed। Akamai ৬৫,০০০ সার্ভার conflict graph coloring করে ৮ color → ৮ wave deploy! NP-complete কিন্তু heuristic দ্রুত।</div>`,
  recall: [
    { q: "Four Color Theorem কী?", a: "যেকোনো planar map কে ৪টা রঙে রাঙানো যায় যেন পাশাপাশি region এর রং আলাদা। ১৯৭৬ সালে প্রথম computer-assisted proof।" },
    { q: "Graph coloring কিভাবে register allocation এ ব্যবহৃত হয়?", a: "Variables = vertices, overlapping lifetimes = edges, registers = colors। Chromatic number = minimum registers needed। Chaitin 1981 — NP-complete কিন্তু heuristic কাজ করে।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 9 — The Clock Arithmetic (Modular)
// ═══════════════════════════════════════════
doors.push({
  num: 9,
  icon: "🕐",
  color: "#10b981",
  tagline: "ঘড়ির পাটিগণিত — Clock Arithmetic",
  name: "The Clock Arithmetic",
  secret: "Modular arithmetic শুধু % নয় — একটা সম্পূর্ণ algebraic ring (ℤₙ)। RSA এর ভিত্তি!",
  story: `<p class="scene-setting">Modular arithmetic শুধু <code>%</code> operator নয়। এটা একটা সম্পূর্ণ algebraic system — ring of integers modulo n (ℤₙ)। Addition, subtraction, multiplication, এমনকি multiplicative inverse! <code>1032 % 5 = 2</code> — round-robin task distribution। Euclidean algorithm (৬ষ্ঠ শতাব্দীর ভারতীয় 'kuttak') দিয়ে GCD বের করা যায় — RSA key generation এ ব্যবহৃত। Fermat এর Little Theorem আর Euler এর Totient function গ্যারান্টি দেয় যে RSA decryption কাজ করবে।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🕐 Modular Arithmetic → RSA Encryption</text>

  <!-- Clock -->
  <circle cx="120" cy="130" r="70" fill="#0f172a" stroke="#10b981" stroke-width="3"/>
  <text x="120" y="80" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">0</text>
  <text x="165" y="100" text-anchor="middle" fill="#6ee7b7" font-size="10">1</text>
  <text x="185" y="135" text-anchor="middle" fill="#6ee7b7" font-size="10">2</text>
  <text x="165" y="170" text-anchor="middle" fill="#6ee7b7" font-size="10">3</text>
  <text x="120" y="190" text-anchor="middle" fill="#6ee7b7" font-size="10">4</text>
  <text x="75" y="170" text-anchor="middle" fill="#6ee7b7" font-size="10">5</text>
  <text x="55" y="135" text-anchor="middle" fill="#6ee7b7" font-size="10">6</text>
  <text x="75" y="100" text-anchor="middle" fill="#6ee7b7" font-size="10">7</text>
  <text x="120" y="135" text-anchor="middle" fill="#10b981" font-size="9" font-weight="700">ℤ₈</text>
  <text x="120" y="230" text-anchor="middle" fill="#64748b" font-size="7">Numbers wrap around!</text>

  <!-- Sharding -->
  <rect x="220" y="50" width="150" height="80" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="295" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Django Sharding</text>
  <text x="295" y="92" text-anchor="middle" fill="#86efac" font-size="7" font-family="monospace">user_id % NUM_SHARDS</text>
  <text x="295" y="108" text-anchor="middle" fill="#86efac" font-size="7" font-family="monospace">1032 % 5 = 2 → shard #2</text>
  <text x="295" y="122" text-anchor="middle" fill="#64748b" font-size="6">Perfect round-robin distribution</text>

  <!-- GCD / Pulverizer -->
  <rect x="220" y="140" width="150" height="80" rx="8" fill="#451a03" stroke="#f97316" stroke-width="1.5"/>
  <text x="295" y="162" text-anchor="middle" fill="#fdba74" font-size="9" font-weight="700">Euclidean Algorithm</text>
  <text x="295" y="180" text-anchor="middle" fill="#fb923c" font-size="7" font-family="monospace">gcd(259, 70):</text>
  <text x="295" y="194" text-anchor="middle" fill="#fb923c" font-size="7" font-family="monospace">259 = 3×70 + 49</text>
  <text x="295" y="208" text-anchor="middle" fill="#fb923c" font-size="7" font-family="monospace">70 = 1×49 + 21 ...</text>
  <text x="295" y="218" text-anchor="middle" fill="#f97316" font-size="6">→ gcd = 7 (Pulverizer/kuttak)</text>

  <!-- RSA -->
  <rect x="390" y="50" width="170" height="170" rx="8" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="475" y="72" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">🔐 RSA Encryption</text>
  <text x="475" y="92" text-anchor="middle" fill="#fca5a5" font-size="7">1. Pick two large primes p, q</text>
  <text x="475" y="105" text-anchor="middle" fill="#fca5a5" font-size="7">2. n = p × q</text>
  <text x="475" y="118" text-anchor="middle" fill="#fca5a5" font-size="7">3. φ(n) = (p-1)(q-1)</text>
  <text x="475" y="131" text-anchor="middle" fill="#fca5a5" font-size="7">4. Choose e coprime to φ(n)</text>
  <text x="475" y="144" text-anchor="middle" fill="#fca5a5" font-size="7">5. d = e⁻¹ mod φ(n)</text>
  <text x="475" y="157" text-anchor="middle" fill="#fca5a5" font-size="7">   (Extended Euclidean!)</text>
  <line x1="410" y1="166" x2="540" y2="166" stroke="#dc2626" stroke-width="1"/>
  <text x="475" y="180" text-anchor="middle" fill="#fbbf24" font-size="7">Encrypt: c = m^e mod n</text>
  <text x="475" y="193" text-anchor="middle" fill="#4ade80" font-size="7">Decrypt: m = c^d mod n</text>
  <text x="475" y="210" text-anchor="middle" fill="#dc2626" font-size="6">Factor n = P → breakable!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Modular arithmetic — clock wrapping (ℤₙ) → sharding (user_id % N) → Euclidean algorithm (GCD/Pulverizer) → RSA encryption। সব সংযুক্ত!</div>

<div class="code-block">🐍 Python: Modular Arithmetic — Clock Math, GCD, ও RSA Encryption

# Modular arithmetic: ℤₙ ring — সব অপারেশন 'wrap around' করে
print("Clock ℤ₁₂: ৭+৮ =", (7 + 8) % 12)   # 3 — ৭ঘ পরে ৮ঘ = ৩ঘ (পরের দিন)
print("Django shard: 1032 % 5 =", 1032 % 5) # 2 → shard #2 (round-robin)

# ℤ₅ এর সম্পূর্ণ addition ও multiplication table
n = 5
print(f"ℤ_{n} addition table:")
for a in range(n):
    print(" ", [(a + b) % n for b in range(n)])
# ২টা column যোগ করে wrap করে — এটাই 'group' structure

# Euclidean Algorithm (Pulverizer/kuttak) — GCD বের করা
def gcd(a, b):
    # ৬ষ্ঠ শতাব্দীর ভারতীয় অ্যালগরিদম, recursion দিয়ে
    while b:
        a, b = b, a % b
    return a

print("gcd(259, 70) =", gcd(259, 70))   # 7
print("gcd(1071, 462) =", gcd(1071, 462))  # 21
# প্রতিটা ধাপ: 259 = 3·70 + 49 → 70 = 1·49 + 21 → 49 = 2·21 + 7 → 21 = 3·7 + 0

# Extended Euclidean — multiplicative inverse বের করে (RSA private key!)
def extended_gcd(a, b):
    if b == 0: return (a, 1, 0)
    g, x1, y1 = extended_gcd(b, a % b)
    return (g, y1, x1 - (a // b) * y1)

def mod_inverse(e, phi):
    # e⁻¹ mod φ(n) — RSA এর private key d
    g, x, _ = extended_gcd(e, phi)
    return x % phi if g == 1 else None

print("3⁻¹ mod 11 =", mod_inverse(3, 11))  # 4 (কারণ 3·4=12≡1 mod 11)

# Fermat's Little Theorem: a^(p-1) ≡ 1 (mod p), p prime
p = 17
for a in [2, 3, 5]:
    print(f"  {a}^{p-1} mod {p} = {pow(a, p-1, p)}")  # সব 1
# এটাই RSA decryption এর গ্যারান্টি!

# Mini RSA (educational — বাস্তবে বড় prime লাগে)
def rsa_demo():
    p, q = 61, 53                    # দুটো prime
    n = p * q                        # 3233 — public modulus
    phi = (p-1) * (q-1)              # 3120 — Euler totient
    e = 17                           # public exponent (coprime to φ)
    d = mod_inverse(e, phi)          # 2753 — private key

    msg = 42                         # plaintext (একটা সংখ্যা)
    cipher = pow(msg, e, n)          # encrypt: c = m^e mod n
    decrypted = pow(cipher, d, n)    # decrypt: m = c^d mod n

    print(f"  p={p}, q={q}, n={n}, φ={phi}")
    print(f"  public key:  (e={e}, n={n})")
    print(f"  private key: (d={d}, n={n})")
    print(f"  message={msg} → cipher={cipher} → decrypted={decrypted}")
    assert decrypted == msg, "RSA failed!"
    print("  RSA round-trip ✅")

rsa_demo()

# n কে factor করতে পারলে RSA ভেঙে যায়
print("Factor 3233 →", [(p, 3233//p) for p in range(2, 60) if 3233 % p == 0][0])
# (61, 53) — বাস্তবে n হল ~2048-bit → factor করা ব্যবহারিকভাবে অসম্ভব</div>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> Modular arithmetic শুধু <code>%</code> নয়। ℤₙ একটা সম্পূর্ণ ring — addition, multiplication, inverse সব কাজ করে। Euclidean algorithm — ভারতীয় নাম 'kuttak' (Pulverizer) — GCD বের করে। Extended version multiplicative inverse বের করে → এটাই RSA private key। Fermat এর Little Theorem: <code>a^(p-1) ≡ 1 (mod p)</code>। Euler এর totient: <code>a^φ(n) ≡ 1 (mod n)</code>। এই দুটো গ্যারান্টি দেয় RSA decryption কাজ করবে। HTTPS এর পুরো ভিত্তি!</div>`,
  recall: [
    { q: "Modular arithmetic কেন শুধু % নয়?", a: "ℤₙ একটা সম্পূর্ণ algebraic ring — addition, multiplication, inverse সব কাজ করে। RSA encryption এই ring এর properties এর উপর নির্ভর করে।" },
    { q: "Euclidean algorithm কিভাবে RSA তে ব্যবহৃত হয়?", a: "Extended Euclidean (Pulverizer/kuttak) GCD আর multiplicative inverse বের করে। Inverse টাই RSA private key। ৬ষ্ঠ শতাব্দীর ভারতীয় গণিত!" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 10 — The Compass Points (Master Theorem)
// ═══════════════════════════════════════════
doors.push({
  num: 10,
  icon: "🧭",
  color: "#8b5cf6",
  tagline: "কম্পাসের দিক — The Compass Points",
  name: "The Compass Points",
  secret: "Master Theorem: T(n) = aT(n/b) + f(n) → instant Big-O! Recurrence থেকে complexity।",
  story: `<p class="scene-setting">Master Theorem হল divide-and-conquer recurrence relation solver। <code>T(n) = aT(n/b) + f(n)</code> — a subproblems, n/b size, f(n) combine work। তিনটা case: (১) যদি f(n) ছোট হয় → <code>T(n) = Θ(n^(log_b a))</code>, (২) সমান হয় → <code>Θ(n^(log_b a) log n)</code>, (৩) f(n) বড় হয় → <code>Θ(f(n))</code>। Merge Sort: <code>T(n) = 2T(n/2) + O(n)</code> → Case 2 → <code>O(n log n)</code>! Binary Search: <code>T(n) = T(n/2) + O(1)</code> → <code>O(log n)</code>! এটাই B2 (DSA) এর Big-O analysis এর ভিত্তি। Generating functions ও recurrence solve করার আরেকটা tool — polynomial coefficient থেকে closed-form solution।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🧭 Master Theorem: Divide & Conquer Big-O</text>

  <!-- Formula -->
  <rect x="130" y="45" width="320" height="30" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="290" y="64" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700" font-family="monospace">T(n) = a·T(n/b) + f(n)</text>

  <!-- Three cases -->
  <rect x="30" y="95" width="160" height="85" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="110" y="115" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Case 1: f(n) smaller</text>
  <text x="110" y="135" text-anchor="middle" fill="#86efac" font-size="7">f(n) = O(n^(log_b a - ε))</text>
  <rect x="45" y="145" width="130" height="20" rx="3" fill="#1e293b" stroke="#22c55e" stroke-width="1"/>
  <text x="110" y="158" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">T(n) = Θ(n^(log_b a))</text>

  <rect x="210" y="95" width="160" height="85" rx="8" fill="#451a03" stroke="#f97316" stroke-width="2"/>
  <text x="290" y="115" text-anchor="middle" fill="#fdba74" font-size="9" font-weight="700">Case 2: f(n) equal</text>
  <text x="290" y="135" text-anchor="middle" fill="#fb923c" font-size="7">f(n) = Θ(n^(log_b a))</text>
  <rect x="225" y="145" width="130" height="20" rx="3" fill="#1e293b" stroke="#f97316" stroke-width="1"/>
  <text x="290" y="158" text-anchor="middle" fill="#fdba74" font-size="8" font-family="monospace">T(n) = Θ(n^c · log n)</text>

  <rect x="390" y="95" width="160" height="85" rx="8" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="470" y="115" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">Case 3: f(n) larger</text>
  <text x="470" y="135" text-anchor="middle" fill="#fca5a5" font-size="7">f(n) = Ω(n^(log_b a + ε))</text>
  <rect x="405" y="145" width="130" height="20" rx="3" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="470" y="158" text-anchor="middle" fill="#fca5a5" font-size="8" font-family="monospace">T(n) = Θ(f(n))</text>

  <!-- Examples -->
  <rect x="30" y="195" width="520" height="70" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="213" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="700">Examples</text>
  <rect x="45" y="222" width="150" height="18" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="120" y="235" text-anchor="middle" fill="#67e8f9" font-size="7" font-family="monospace">Merge: 2T(n/2)+n → O(n log n)</text>
  <rect x="215" y="222" width="150" height="18" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="290" y="235" text-anchor="middle" fill="#67e8f9" font-size="7" font-family="monospace">Binary: T(n/2)+1 → O(log n)</text>
  <rect x="385" y="222" width="150" height="18" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="460" y="235" text-anchor="middle" fill="#67e8f9" font-size="7" font-family="monospace">Strassen: 7T(n/2)+n² → O(n^2.81)</text>
  <text x="290" y="255" text-anchor="middle" fill="#64748b" font-size="7">Master Theorem = instant Big-O from recurrence relation!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Master Theorem — T(n) = aT(n/b) + f(n) থেকে instant Big-O। Merge Sort = O(n log n), Binary Search = O(log n), Strassen = O(n^2.81)।</div>

<div class="code-block">🐍 Python: Master Theorem — Divide & Conquer Recurrence → Big-O স্বয়ংক্রিয়

import math

# Master Theorem: T(n) = a·T(n/b) + f(n)
# তিনটি case, তুলনা করে f(n) vs n^(log_b a)
def master_theorem(a, b, f_exponent, n=1024):
    # f(n) ≈ n^f_exponent (polynomial assumption)
    critical = math.log(a) / math.log(b)   # log_b(a) — এটাই সীমারেখা
    print(f"  T(n) = {a}·T(n/{b}) + O(n^{f_exponent})")
    print(f"  log_{b}({a}) = {critical:.4f}, সীমা n^{critical:.4f}")

    eps = 0.001
    if f_exponent < critical - eps:
        case = 1
        result = f"Θ(n^{critical:.4f})  ≈  Θ(n^{round(critical,2)})"
    elif abs(f_exponent - critical) < eps:
        case = 2
        result = f"Θ(n^{critical:.4f} · log n)  ≈  Θ(n^{round(critical,2)} · log n)"
    else:
        case = 3
        result = f"Θ(n^{f_exponent})  (f আধিপত্য করে)"
    print(f"  → Case {case}: {result}\n")

print("=== Classic Algorithms ===")
master_theorem(a=2, b=2, f_exponent=1)   # Merge Sort
master_theorem(a=1, b=2, f_exponent=0)   # Binary Search
master_theorem(a=7, b=2, f_exponent=2)   # Strassen matrix multiply
master_theorem(a=4, b=2, f_exponent=1)   # কোনো কাল্পনিক D&C
master_theorem(a=2, b=2, f_exponent=2)   # '过度 work' case 3

# Empirical verification — সত্যিকারের রান টাইম মাপা
import time
def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    out, i = [], 0
    # merge step (O(n) work)
    while left and right:
        out.append(left.pop(0) if left[0] < right[0] else right.pop(0))
    return out + left + right

def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    steps = 0
    while lo <= hi:
        steps += 1
        mid = (lo + hi) // 2
        if arr[mid] == target: return steps
        elif arr[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return steps

# Doubling-ratio experiment: n ২x হলে সময় কতগুণ বাড়ে?
print("=== Empirical Big-O (doubling ratio) ===")
for size in [1000, 2000, 4000, 8000]:
    arr = list(range(size))
    t0 = time.perf_counter()
    merge_sort(arr.copy())
    dt = time.perf_counter() - t0
    bs_steps = binary_search(arr, size - 1)
    print(f"  n={size:5d}: merge={dt*1000:6.2f}ms, binary_search steps={bs_steps} (~log₂({size})={math.log2(size):.1f})")
# n ২x → merge_sort সময় ~২x (O(n log n)), binary search steps +১ (O(log n))

# Master Theorem দিয়ে Strassen এর উন্নতি দেখানো
print("\nStrassen: log₂(7) =", round(math.log2(7), 4), "< 3")
print("  স্ট্যান্ডার্ড matmul: O(n³) — Strassen: O(n^2.807) → বড় n এ দ্রুত")

# Recurrence tree: প্রতিটা স্তরে a বাচ্চা, গভীরতা log_b(n), মোট নোড n^(log_b a)
n = 1024
for name, (a, b) in [("Merge", (2,2)), ("Strassen", (7,2)), ("Karatsuba", (3,2))]:
    depth = math.log(n, b)
    leaves = a ** depth
    print(f"  {name:10s}: depth=log_{b}({n})={depth:.0f}, leaves={a}^{depth:.0f}={leaves:.0e}")</div>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> Master Theorem হল তোমার সব divide-and-conquer algorithm এর complexity calculator। Merge Sort: <code>2T(n/2) + O(n)</code> → Case 2 → <code>O(n log n)</code>। Binary Search: <code>T(n/2) + O(1)</code> → Case 1 → <code>O(log n)</code>। Strassen এর matrix multiply: <code>7T(n/2) + O(n²)</code> → Case 1 → <code>O(n^2.81)</code> — স্ট্যান্ডার্ড O(n³) এর চেয়ে দ্রুত! B2 (DSA) তে শেখা সব algorithm এর complexity এই theorem থেকে আসে। এটাই discrete math এর সবচেয়ে practical tool — induction + recurrence + logarithm এর সমন্বয়। Generating functions ও recurrence solve করে — polynomial এর coefficient থেকে closed-form solution।</div>

<p class="finale">🎉 <strong>তুমি যুক্তির কম্পাস জয় করেছ!</strong> Logic থেকে infinity, proof থেকে graph, modular arithmetic থেকে RSA — discrete math এর পুরো landscape তোমার। এটাই CS এর ভাষা। প্রতিটা if/else একটা proposition, প্রতিটা recursion একটা induction, প্রতিটা hash একটা pigeonhole। তুমি এখন গাণিতিকভাবে চিন্তা করতে পারো। 🎉</p>`,
  recall: [
    { q: "Master Theorem এর তিনটা case কী?", a: "T(n)=aT(n/b)+f(n): Case 1 (f ছোট) → Θ(n^(log_b a))। Case 2 (f সমান) → Θ(n^(log_b a) log n)। Case 3 (f বড়) → Θ(f(n))। Merge Sort = Case 2।" },
    { q: "Merge Sort এর Big-O Master Theorem দিয়ে কিভাবে?", a: "T(n) = 2T(n/2) + O(n)। a=2, b=2, f(n)=n। log_2(2)=1, f(n)=n^1 → Case 2 → O(n^1 · log n) = O(n log n)।" },
  ]
});
