doors.push({
  num: 6,
  icon: "🕊️",
  color: "#8b5cf6",
  name: "কবুতরের খোঁয়াড়",
  subtitle: "The Pigeonhole Principle",
  tech: "Pigeonhole Principle — Dirichlet (1834), hash collisions, birthday threshold, Monte Carlo verification",
  spirit: "হিসাব — গণনা, সীমাবদ্ধ স্থানে অধিক বস্তু",
  secret: "n+১টি কবুতর nটি খোঁয়াড়ে — অন্তত একটি খোঁয়াড়ে দুটি কবুতর। এটাই পিজিওনহোল নীতি — সহজ কিন্তু অসম্ভব ফল দেয়। ৩৬৭ জন মানুষে অন্তত দুজনের জন্মদিন মিলবে — কারণ ৩৬৬ দিন (leap year)।",
  recall: {
    q: " পিজিওনহোল নীতি কী? একটি বাস্তব প্রয়োগ দাও।",
    qen: "What is the Pigeonhole Principle? Give a real-world application.",
    a: "n+১টি বস্তু nটি বাক্সে হলে অন্তত একটি বাক্সে দুটি। প্রয়োগ: hash collision — ২³²+১টি key হলে collision অনিবার্য।",
    aen: "If n+1 objects go into n boxes, at least one box has 2. Application: hash collision — with 2^32+1 keys, collision is guaranteed."
  },
  story: `<p class="scene-setting">বার্লিন, ১৮৩৪। Peter Gustav Lejeune Dirichlet একটি সহজ কিন্তু শক্তিশালী নীতি লিখছেন। তার নাম দিলেন Schubfachprinzip — "ড্রয়ার নীতি।" সহজ ভাষায়: ১০টি মোজা ৯টি ড্রয়ারে রাখলে অন্তত একটি ড্রয়ারে দুটি মোজা। এটাই পিজিওনহোল নীতি — তুচ্ছ মনে হয় কিন্তু অসম্ভব ফল দেয়।</p>
<p class="scene-setting en">Berlin, 1834. Peter Gustav Lejeune Dirichlet writes a simple but powerful principle. He calls it Schubfachprinzip — "drawer principle." Simply: 10 socks in 9 drawers means at least one drawer has 2 socks. This is the pigeonhole principle — seems trivial but yields impossible results.</p>

<div class="dialogue"><strong>গণনা-কারিগর সাবির:</strong> নাদিয়া (Door ৫) তোমাকে গোনা শিখিয়েছেন। এখন দেখো — গোনা ছাড়াও একটি শক্তিশালী নীতি। ১৩ জন মানুষ এক ঘরে — অন্তত দুজনের জন্ম মাস একই! কারণ মাস ১২টি, মানুষ ১৩টি। প্রমাণ লাগে না — সরল যুক্তি। কিন্তু এই নীতি দিয়ে hash collision প্রমাণ করা যায় — ২³²+১টি key, ২³²টি bucket — collision অনিবার্য!</div>
<div class="dialogue en"><strong>Counting Artisan Sabir:</strong> Nadia (Door 5) taught you counting. Now see — a powerful principle beyond counting. 13 people in a room — at least two share a birth month! 12 months, 13 people. No proof needed — pure logic. But this principle proves hash collisions — 2^32+1 keys, 2^32 buckets — collision inevitable!</div>

<div class="callout info"><span class="co-icon">🕊️</span><div><strong>পিজিওনহোল নীতি (Dirichlet ১৮৩৪):</strong><br>
<strong>সহজ রূপ:</strong> n+১টি বস্তু nটি বাক্সে → কোনো না কোনো বাক্সে ≥ ২টি<br>
<strong>সাধারণ রূপ:</strong> Nটি বস্তু kটি বাক্সে → কোনো না কোনো বাক্সে ≥ ⌈N/k⌉টি<br><br>
<strong>বাস্তব প্রয়োগ:</strong><br>
৩৬৭ জন মানুষ → অন্তত দুজনের জন্মদিন মিলবে (৩৬৬ দিন)<br>
৫ জনের হাতে ৩টি আপেল → কেউ ২টি পেয়েছে<br>
MD5 hash (১২৮-bit) → ২¹²৮+১টি input হলে collision অনিবার্য</div></div>

<div class="code-block">— Python: পিজিওনহোল যাচাই —

  import random, hashlib

  # ১০০০০ এলোমেলো সংখ্যা, ৩২-bit hash
  seen = {}
  for i in range(100000):
      h = hash(str(i)) & 0xFFFFFFFF  # 32-bit
      if h in seen:
          print(f"Collision! '{seen[h]}' ও '{i}' → {h}")
          break
      seen[h] = i
  # ~৭৭০০০-এ collision — ২^১৬ ≈ ৬৫৫৩৬ তে শুরু
  # এটাই birthday threshold: √(2^32) ≈ 65536

  # Dirichlet-এর নীতি সহজে:
  def must_collide(n_objects, n_boxes):
      return n_objects > n_boxes  # সর্বদা True যদি n+1

  print(must_collide(367, 366))   # True — জন্মদিন মিলবে
  print(must_collide(2**128 + 1, 2**128))  # True — hash collision</div>

<div class="verse">وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং প্রতিটি কিছু আমরা একটি স্পষ্ট অভিলেখে গণনা করেছি।" — কুরআন ৩৬:১২</div>

<p class="scene-setting">"আহসায়নাহু" — আমরা গণনা করেছি। পিজিওনহোল নীতি সেই গণনার শক্তি — যখন বস্তুর সংখ্যা স্থানের চেয়ে বেশি, মিল অনিবার্য। হিসাব — প্রতিটি কিছু গণনায় ধরা আছে। কোনো কিছুই হারিয়ে যায় না।</p>
<p class="scene-setting en">"Ahsaynahu" — We have counted. The pigeonhole principle is the power of that counting — when objects exceed space, collision is inevitable. Hisab — everything is accounted for. Nothing is lost.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৬ (Cryptography) Door ৩ (Hash):</strong> hash collision = পিজিওনহোল! ২¹²৮+১টি input হলে MD5 collision অনিবার্য। Book ৪৯ (Probability) Door ৫: birthday paradox — এটাই পিজিওনহোল-এর সম্ভাবনা সংস্করণ।</div></div>

<div class="secret-box">🕊️ <strong>পিজিওনহোল: বেশি বস্তু, কম বাক্স — মিল অনিবার্য।</strong> সহজ নীতি কিন্তু অসম্ভব ফল। hash collision, birthday paradox, এমনকি সনাতন গণিতের উপপাদ্য — সব এর উপর নির্ভর। কিন্তু বস্তু শুধু বাক্সে থাকে না — তারা সংযুক্ত হয়। সেই সংযোগের জগত — পরের দরজায়।</div>`,
  senior: {
    title: "Pigeonhole Principle এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Dirichlet (1834)</td><td>Schubfachprinzip — ড্রয়ার নীতি</td></tr>
<tr><td class="hl">সহজ রূপ</td><td>n+১ বস্তু n বাক্সে → এক বাক্সে ≥২</td></tr>
<tr><td class="hl">সাধারণ রূপ</td><td>N বস্তু k বাক্সে → ⌈N/k⌉</td></tr>
<tr><td class="hl">Birthday Threshold</td><td>√N — collision শুরুর সীমা</td></tr>
<tr><td class="hl">Hash Collision</td><td>২³²+১ keys → নিশ্চিত collision</td></tr>
<tr><td class="hl">Birthday Paradox</td><td>২৩ জনে ৫০% — C(২৩,২)=২৫৩ জোড়া</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "🕸️",
  color: "#8b5cf6",
  name: "সংযোগের জাল",
  subtitle: "The Web of Connections",
  tech: "Graph Theory — Euler (1736 Königsberg), BFS/DFS, topological sort, DAG, networkx",
  spirit: "সিলসিলা — শৃঙ্খল, নোড থেকে নোডে সংযোগ",
  secret: "গ্রাফ = নোড + এজ। বন্ধুদের সমাজ, রাস্তার নকশা, ওয়েব পেজের লিংক — সব গ্রাফ। BFS দেখে প্রশস্ততা, DFS গভীরতা। Topological sort দেখে ক্রম। Euler প্রথম এটা করেছিলেন — কোনিগসবার্গের সেতু নিয়ে।",
  recall: {
    q: " BFS এবং DFS-এর পার্থক্য কী? DAG কী?",
    qen: "What is the difference between BFS and DFS? What is a DAG?",
    a: "BFS = প্রশস্ততা — প্রথমে কাছের সব নোড, তারপর দূরে। DFS = গভীরতা — এক শাখায় শেষ পর্যন্ত। DAG = Directed Acyclic Graph — কোনো চক্র নেই, topological sort সম্ভব।",
    aen: "BFS = breadth-first — visit all near nodes first. DFS = depth-first — go deep in one branch. DAG = Directed Acyclic Graph — no cycles, topological sort possible."
  },
  story: `<p class="scene-setting">কোনিগসবার্গ, ১৭৩৬। একটি নদী, দুটি দ্বীপ, সাতটি সেতু। প্রশ্ন: কোনো সেতু দুবার না পেরিয়ে সব সেতু পার হওয়া যায় কি? Leonhard Euler উত্তর দিলেন: না। কিন্তু তার প্রমাণ একটি নতুন গাণিতিক জগতের জন্ম দিল — গ্রাফ তত্ত্ব। নোড = স্থান, এজ = সেতু। এই সহজ মডেল থেকে — সামাজিক নেটওয়ার্ক, গুগলের PageRank, GPS রাস্তা — সব নির্মিত।</p>
<p class="scene-setting en">Königsberg, 1736. A river, two islands, seven bridges. Question: can you cross all bridges exactly once? Leonhard Euler answered: no. But his proof birthed a new mathematical world — graph theory. Nodes = places, edges = bridges. From this simple model — social networks, Google PageRank, GPS routes — all built.</p>

<div class="dialogue"><strong>জাল-নির্মাতা তামির:</strong> সাবির (Door ৬) তোমাকে গোনা শিখিয়েছেন। কিন্তু বস্তু শুধু বাক্সে থাকে না — তারা সংযুক্ত হয়! তোমার LedgerPilot-এ — ইউজার → অ্যাকাউন্ট → লেনদেন → ক্যাটেগরি। এটি একটি গ্রাফ! প্রতিটি টেবিল নোড, প্রতিটি foreign key এজ। BFS দিয়ে খুঁজো — এই ইউজারের সব লেনদেন কী? DFS দিয়ে গভীরে যাও — এই লেনদেন কোন ক্যাটেগরিতে?</div>
<div class="dialogue en"><strong>Web Builder Tamir:</strong> Sabir (Door 6) taught you counting. But objects don't just sit in boxes — they connect! Your LedgerPilot: User → Account → Transaction → Category. This is a graph! Every table a node, every foreign key an edge. BFS: find all transactions for a user. DFS: go deep — which category does this transaction belong to?</div>

<div class="code-block">— Python: Graph অপারেশন (networkx) —

  import networkx as nx

  G = nx.DiGraph()
  # LedgerPilot-এর গ্রাফ
  G.add_edge("User", "Account")         # foreign key
  G.add_edge("Account", "Transaction")
  G.add_edge("Transaction", "Category")
  G.add_edge("Category", "Budget")

  # Topological sort (DAG তে ক্রম)
  print(list(nx.topological_sort(G)))
  # [User, Account, Transaction, Category, Budget]

  # Cycle detect
  print(nx.is_directed_acyclic_graph(G))  # True — DAG ✅

  # BFS: User থেকে কী কী পৌঁছানো যায়?
  print(list(nx.bfs_tree(G, "User")))
  # [User, Account, Transaction, Category, Budget]

  # Euler-এর সমস্যা: Königsberg
  K = nx.MultiGraph()
  K.add_edges_from([("A","B"),("A","B"),("A","C"),
                    ("A","C"),("A","D"),("B","D"),("C","D")])
  print(nx.has_eulerian_path(K))  # False — Euler সঠিক ছিলেন!</div>

<div class="callout info"><span class="co-icon">🕸️</span><div><strong>গ্রাফের প্রকার:</strong><br>
<strong>Directed (তীরযুক্ত):</strong> এজের দিক আছে — A → B মানে A থেকে B<br>
<strong>Undirected (দিকহীন):</strong> দিক নেই — A — B উভয় দিক<br>
<strong>DAG:</strong> Directed + Acyclic — চক্র নেই → topological sort সম্ভব<br>
<strong>Tree:</strong> বিশেষ গ্রাফ — একটি root, কোনো চক্র নেই, প্রতিটি নোডে একটি পথ<br>
<strong>Complete:</strong> প্রতিটি নোড প্রতিটির সাথে সংযুক্ত — Kₙ</div></div>

<div class="verse">وَالَّذِينَ يَصِلُونَ مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং যারা সংযুক্ত রাখে যা আল্লাহ সংযুক্ত রাখতে নির্দেশ দিয়েছেন।" — কুরআন ১৩:২১</div>

<p class="scene-setting">সিলসিলা — শৃঙ্খল, সংযোগ। গ্রাফ তত্ত্ব সেই সংযোগের গণিত। নোড থেকে নোডে — এজ দিয়ে। রক্তের শিরা, নদীর শাখা, সামাজিক বন্ধুত্ব — সব গ্রাফ। আল্লাহ সংযোগ রক্ষার নির্দেশ দিয়েছেন — গ্রাফ তত্ত্ব সেই সংযোগের ভাষা দেয়।</p>
<p class="scene-setting en">Silsila — chain, connection. Graph theory is the mathematics of connection. Node to node — via edges. Blood vessels, river branches, social friendships — all graphs. Allah commands maintaining connections — graph theory gives the language for those connections.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ১৪ (Graph BFS/DFS):</strong> গ্রাফ ট্রাভার্সাল শিখেছিলে — এখন দেখো সেই একই কৌশল LedgerPilot-এ প্রতিদিন কাজ করছে! Book ৩৭ (Networks) Door ৩: রাউটিং = shortest path গ্রাফে। Book ৩৫ (Distributed) Door ৫: distributed consensus = গ্রাফ topology।</div></div>

<div class="secret-box">🕸️ <strong>গ্রাফ = সংযোগের জাল। নোড + এজ।</strong> Euler থেকে PageRank — সব গ্রাফ। কিন্তু গ্রাফে একটি সমস্যা থাকে — কিছু নোড একসাথে থাকতে পারে না। প্রতিবেশী আলাদা রঙ চায়। সেই সমস্যা — পরের দরজায়।</div>`,
  senior: {
    title: "Graph Theory এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Euler (1736)</td><td>কোনিগসবার্গ সেতু — গ্রাফ তত্ত্বের জন্ম</td></tr>
<tr><td class="hl">BFS</td><td>প্রশস্ততা — কাছের সব নোড আগে</td></tr>
<tr><td class="hl">DFS</td><td>গভীরতা — এক শাখায় শেষ পর্যন্ত</td></tr>
<tr><td class="hl">DAG</td><td>Directed Acyclic — topological sort</td></tr>
<tr><td class="hl">Tree</td><td>বিশেষ গ্রাফ — root, কোনো চক্র নেই</td></tr>
<tr><td class="hl">Degree</td><td>নোডের এজ সংখ্যা</td></tr>
<tr><td class="hl">Path</td><td>নোড থেকে নোডে রাস্তা</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "🎨",
  color: "#8b5cf6",
  name: "রঙের সমস্যা",
  subtitle: "The Coloring Problem",
  tech: "Graph Coloring — four color theorem (1976), chromatic number, Chaitin register allocation, map coloring",
  spirit: "তাফসিল — পৃথকীকরণ, প্রতিটি প্রতিবেশী আলাদা",
  secret: "গ্রাফ রঙ করো — প্রতিটি প্রতিবেশী আলাদা রঙে। যেকোনো মানচিত্র মাত্র ৪টি রঙে রাঙা যায় — four color theorem (১৯৭৬, প্রথম কম্পিউটার-প্রমাণিত উপপাদ্য)। কম্পাইলার এটা ব্যবহার করে — রেজিস্টার বরাদ্দে।",
  recall: {
    q: " Four Color Theorem কী? এটা কম্পাইলারে কীভাবে ব্যবহৃত হয়?",
    qen: "What is the Four Color Theorem? How is it used in compilers?",
    a: "যেকোনো মানচিত্র ৪ রঙে রাঙা যায় — প্রতিটি প্রতিবেশী আলাদা। কম্পাইলারে: প্রতিটি ভেরিয়েবল একটি নোড, একসাথে ব্যবহৃত হলে এজ। রঙ = রেজিস্টার। Chaitin (১৯৮১)।",
    aen: "Any map can be colored with 4 colors — adjacent regions differ. In compilers: variables are nodes, simultaneous use creates edges. Color = register. Chaitin (1981)."
  },
  story: `<p class="scene-setting">১৮৫২, লন্ডন। Francis Guthrie একটি মানচিত্র রাঙছেন। তিনি লক্ষ্য করলেন — ইংল্যান্ডের কাউন্টি মাত্র ৪টি রঙে রাঙা যায়। প্রতিটি প্রতিবেশী কাউন্টি আলাদা রঙে। তিনি প্রশ্ন করলেন: কি যেকোনো মানচিত্র ৪ রঙে সম্ভব? ১২৪ বছর ধরে এই প্রশ্ন অমীমাংসিত ছিল। তারপর ১৯৭৬-এ Appel ও Haken প্রমাণ করলেন — কম্পিউটার দিয়ে। ১৯৩৬টি কেস চেক করে। এটাই প্রথম উপপাদ্য যা মানুষ নয়, কম্পিউটার প্রমাণ করেছিল।</p>
<p class="scene-setting en">1852, London. Francis Guthrie colors a map. He notices England's counties need only 4 colors — each neighbor different. He asks: is 4 colors always enough? 124 years unsolved. Then 1976: Appel and Haken prove it — by computer. 1936 cases checked. The first theorem proven not by humans, but by machine.</p>

<div class="dialogue"><strong>রঙ-কারিগর লাবিব:</strong> তামির (Door ৭) তোমাকে গ্রাফ দিয়েছেন। এখন সেই গ্রাফে রঙ করো। কেন? কম্পাইলারে ভেবে দেখো — তোমার ১৬টি CPU রেজিস্টার, কিন্তু ১০০টি ভেরিয়েবল। কোন ভেরিয়েবল কোন রেজিস্টারে? একই সময়ে ব্যবহৃত হলে আলাদা রেজিস্টার দরকার। এটাই graph coloring! প্রতিটি ভেরিয়েবল নোড, একসাথে ব্যবহৃত হলে এজ। রঙের সংখ্যা = রেজিস্টার সংখ্যা। Chaitin ১৯৮১-এ এটা দেখিয়েছিলেন।</div>
<div class="dialogue en"><strong>Color Artisan Labib:</strong> Tamir (Door 7) gave you graphs. Now color them. Why? Think of compilers — 16 CPU registers, 100 variables. Which goes where? Simultaneous use needs separate registers. This IS graph coloring! Variables = nodes, conflict = edges. Number of colors = registers. Chaitin 1981.</div>

<div class="code-block">— Python: Graph Coloring —

  import networkx as nx

  # ভেরিয়েবল কনফ্লিক্ট গ্রাফ (যেগুলো একসাথে live)
  G = nx.Graph()
  G.add_edges_from([
      ("a", "b"), ("a", "c"),  # a ও b, a ও c একসাথে live
      ("b", "c"), ("b", "d"),
      ("c", "d"),
  ])

  # Greedy coloring (সবচেয়ে কম রঙ)
  coloring = nx.coloring.greedy_color(G, strategy="largest_first")
  print(coloring)
  # {'c': 0, 'b': 1, 'a': 2, 'd': 0}
  # ৩টি রঙ লাগলো (= ৩টি রেজিস্টার)

  # Chromatic number:
  print(max(coloring.values()) + 1)  # 3

  # Four Color Theorem: যেকোনো planar graph ≤ ৪
  planar = nx.random_geometric_graph(20, 0.3)
  coloring = nx.coloring.greedy_color(planar)
  print(max(coloring.values()) + 1)  # ≤ 4 (সাধারণত)</div>

<div class="verse">وَفِي خَلْقِكُمْ وَمَا يَبُثُّ مِن دَابَّةٍ آيَاتٌ لِّقَوْمٍ يُوقِنُونَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তোমাদের সৃষ্টিতে এবং যেসব জীব তিনি ছড়িয়েছেন তাতে নিদর্শন রয়েছে।" — কুরআন ৪৫:৪</div>

<p class="scene-setting">বৈচিত্র্য — প্রতিটি সৃষ্টি আলাদা, প্রতিটি রঙ ভিন্ন। গ্রাফ রঙও তেমন — প্রতিটি প্রতিবেশী আলাদা। তাফসিল — পৃথকীকরণ। প্রকৃতিতে বৈচিত্র্য একটি নিদর্শন। গণিতে সেই বৈচিত্র্যের সূত্র — ৪ রঙ যথেষ্ট।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৫ (Compilers) Door ৬ (Register Allocation):</strong> Chaitin-এর অ্যালগরিদম — graph coloring দিয়ে রেজিস্টার বরাদ্দ! এখন তুমি বোঝো সেই গণিত। Book ৪১ Door ৫ (P vs NP): graph coloring NP-complete — সবচেয়ে কম রঙ খুঁজা কঠিন।</div></div>

<div class="secret-box">🎨 <strong>রঙ করো — প্রতিবেশী আলাদা। ৪ রঙ যথেষ্ট।</strong> কম্পাইলার থেকে মানচিত্র — সব জায়গায় প্রযোজ্য। কিন্তু গ্রাফ শুধু সংযোগ নয় — কিছু সংখ্যা বিশেষ। কিছু সংখ্যা শুধু নিজে ও ১ দিয়ে ভাগ যায়। সেই সংখ্যার জগত — পরের দরজায়।</div>`,
  senior: {
    title: "Graph Coloring এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Four Color (1976)</td><td>যেকোনো মানচিত্র ৪ রঙে — Appel & Haken</td></tr>
<tr><td class="hl">Chromatic Number χ(G)</td><td>সবচেয়ে কম রঙের সংখ্যা</td></tr>
<tr><td class="hl">Greedy Algorithm</td><td>বড় নোড থেকে শুরু — সর্বদা ≤ সেরা + ১</td></tr>
<tr><td class="hl">Chaitin (1981)</td><td>রেজিস্টার বরাদ্দ = graph coloring</td></tr>
<tr><td class="hl">NP-complete</td><td>সবচেয়ে কম রঙ খুঁজা — কঠিন</td></tr>
<tr><td class="hl">Planar Graph</td><td>সর্বদা ≤ ৪ রঙ</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "🔢",
  color: "#8b5cf6",
  name: "সংখ্যার গহন",
  subtitle: "The Depths of Numbers",
  tech: "Number Theory — Euclid's primes (300 BCE), Fermat's Little Theorem, modular arithmetic, RSA foundation, GCD/LCM",
  spirit: "আদদ — চিরস্থায়ী, সংখ্যার অনন্ত গভীরতা",
  secret: "মৌলিক সংখ্যা = সংখ্যার পরমাণু। প্রতিটি সংখ্যা মৌলিকের গুণফল। Euclid প্রমাণ করেছিলেন — মৌলিকের সংখ্যা অসীম। Fermat দেখিয়েছিলেন a^(p-১) ≡ ১ (mod p)। এই সূত্র RSA-এর ভিত্তি — তোমার HTTPS।",
  recall: {
    q: " মৌলিক সংখ্যা কী? অসীম প্রমাণ করো। Fermat-এর সূত্র কী?",
    qen: "What are prime numbers? Prove they are infinite. What is Fermat's theorem?",
    a: "মৌলিক = শুধু ১ ও নিজে দিয়ে ভাগ যায়। অসীম: ধরো সসীম, সবগুলোর গুণফল + ১ — এটিও মৌলিক বা মৌলিক উপাদান। Fermat: a^(p-১) ≡ ১ (mod p), p মৌলিক হলে।",
    aen: "Prime = divisible only by 1 and itself. Infinite: assume finite, multiply all + 1 — new prime factor. Fermat: a^(p-1) ≡ 1 (mod p) when p is prime."
  },
  story: `<p class="scene-setting">আলেকজান্দ্রিয়া, ৩০০ খ্রিস্টপূর্ব। ইউক্লিড (যিনি Door ৩-এ √২ প্রমাণ করেছেন) এবার একটি ভিন্ন প্রশ্ন নিয়ে আছেন। মৌলিক সংখ্যা কত? সসীম নাকি অসীম? তার প্রমাণ একটি অমর সৌন্দর্য: ধরে নাও সসীম। সব মৌলিকের গুণফল নাও, তাতে ১ যোগ করো। এই নতুন সংখ্যা — কোনো মৌলিক দিয়ে ভাগ যায় না! তাই নতুন মৌলিক আছে। অন্তর্বিরোধ। অসীম।</p>
<p class="scene-setting en">Alexandria, 300 BCE. Euclid (who proved √2 irrational in Door 3) now asks: how many primes? Finite or infinite? His proof is immortal beauty: assume finite. Multiply all primes, add 1. This new number is divisible by no existing prime! So a new prime exists. Contradiction. Infinite.</p>

<div class="dialogue"><strong>সংখ্যা-জ্ঞানী আরমান:</strong> লাবিব (Door ৮) তোমাকে রঙ শিখিয়েছেন। এখন সংখ্যার গভীরে যাও। মৌলিক সংখ্যা — ২, ৩, ৫, ৭, ১১, ১৩... কোনো প্যাটার্ন নেই। কিন্তু এরাই সবকিছুর ভিত্তি। ৬০ = ২² × ৩ × ৫। প্রতিটি সংখ্যা মৌলিকে ভাঙা যায় — Fundamental Theorem of Arithmetic। আর Fermat-এর সূত্র: ৭ মৌলিক হলে, ২⁶ = ৬৪, ৬৪ mod ৭ = ১। এই সহজ সত্যই তোমার RSA এনক্রিপশন চালায়!</div>
<div class="dialogue en"><strong>Number Knower Arman:</strong> Labib (Door 8) taught you coloring. Now go deeper into numbers. Primes — 2, 3, 5, 7, 11, 13... No pattern. But they are the foundation. 60 = 2² × 3 × 5. Every number breaks into primes — Fundamental Theorem. And Fermat: if 7 is prime, 2⁶ = 64, 64 mod 7 = 1. This simple truth powers your RSA encryption!</div>

<div class="code-block">— Python: Number Theory —

  from math import gcd
  from sympy import isprime, factorint, nextprime

  # মৌলিক সংখ্যা যাচাই
  print(isprime(17))      # True
  print(isprime(15))      # False — ৩×৫

  # উৎপাদকে বিভক্ত
  print(factorint(360))   # {2: 3, 3: 2, 5: 1} → ২³×৩²×৫

  # GCD (Euclidean algorithm)
  print(gcd(48, 18))      # 6

  # Modular arithmetic:
  print(pow(2, 6, 7))     # 1 — Fermat! (৭ মৌলিক)
  print(pow(3, 10, 11))   # 1 — Fermat! (১১ মৌলিক)

  # RSA-এর ভিত্তি:
  # p, q মৌলিক → n = p×q
  # φ(n) = (p-1)(q-1)
  # e নির্বাচন → d = e^(-1) mod φ(n)
  # encrypt: c = m^e mod n
  # decrypt: m = c^d mod n
  # এটাই Book ৪৬ (Cryptography) Door ১!</div>

<div class="callout info"><span class="co-icon">🔢</span><div><strong>Fundamental Theorem of Arithmetic:</strong> প্রতিটি সংখ্যা > ১ কে মৌলিক উৎপাদকে অদ্বিতীয়ভাবে বিভক্ত করা যায়। ২৪ = ২³ × ৩। একমাত্র একটি উপায়। এটাই সংখ্যার ডিএনএ।<br><br>
<strong>Fermat's Little Theorem (১৬৪০):</strong> p মৌলিক হলে, a^(p-১) ≡ ১ (mod p)। এটা RSA-এর গাণিতিক ভিত্তি। বিশাল সংখ্যার মৌলিক যাচাইও এটা দিয়ে।</div></div>

<div class="verse">إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আমরা প্রতিটি কিছু সুনির্দিষ্ট পরিমাণে সৃষ্টি করেছি।" — কুরআন ৫৪:৪৯</div>

<p class="scene-setting">"কদর" — নির্দিষ্ট পরিমাণ। প্রতিটি সংখ্যার একটি অদ্বিতীয় মৌলিক গঠন — সেই কদর। ৬০ = ২²×৩×৫ — অন্যভাবে নয়। সংখ্যার জগতে প্রতিটি জিনিসের একটি নির্দিষ্ট সত্য আছে। আদদ — চিরস্থায়ী। মৌলিক সংখ্যা অসীম, কিন্তু প্রতিটি অদ্বিতীয়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৬ (Cryptography) Door ১ (RSA):</strong> RSA = মৌলিক সংখ্যার উপর নির্মিত! Fermat-এর সূত্র ছাড়া RSA অসম্ভব। Book ৪১ Door ৪ (P vs NP): মৌলিক যাচাই = P, কিন্তু উৎপাদকে বিভক্ত = অজানা।</div></div>

<div class="secret-box">🔢 <strong>মৌলিক = সংখ্যার পরমাণু। অসীম। অদ্বিতীয় গঠন।</strong> Euclid থেকে Fermat — ২০০০ বছরের গবেষণা। এই সত্য ছাড়া RSA নেই, HTTPS নেই, ইন্টারনেট নেই। এখন নয়টি দরজা পেরিয়েছো — শেষ দরজায় সব মেলাও।</div>`,
  senior: {
    title: "Number Theory এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Euclid (~৩০০ BCE)</td><td>মৌলিক অসীম — contradiction দিয়ে প্রমাণ</td></tr>
<tr><td class="hl">Fundamental Theorem</td><td>প্রতিটি সংখ্যা অদ্বিতীয় মৌলিক গুণফল</td></tr>
<tr><td class="hl">Fermat (১৬৪০)</td><td>a^(p-১) ≡ ১ (mod p)</td></tr>
<tr><td class="hl">GCD</td><td>Euclidean algorithm</td></tr>
<tr><td class="hl">Modular Arithmetic</td><td>(a mod n) — ঘড়ির গণিত</td></tr>
<tr><td class="hl">RSA</td><td>Fermat-এর সূত্রের প্রয়োগ</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🌟",
  color: "#8b5cf6",
  name: "সব সত্যের সমন্বয়",
  subtitle: "The Synthesis of All Truths",
  tech: "Synthesis — how logic, proofs, sets, combinatorics, graphs, and numbers form the foundation of all computing",
  spirit: "হিকমাহ — প্রয়োগিক জ্ঞান, সব সত্যের একত্র দৃষ্টি",
  secret: "নয়টি দরজা, নয়জন শিক্ষক, একটি সত্য — ডিসক্রিট গণিত ছাড়া কম্পিউটার বিজ্ঞান অসম্ভব। if/else থেকে RSA পর্যন্ত — সবকিছুর ভিত্তি এই ছয়টি স্তম্ভ।",
  recall: {
    q: " ডিসক্রিট গণিতের ছয়টি স্তম্ভ কী কী? কম্পিউটিংয়ে কেন দরকার?",
    qen: "What are the six pillars of discrete math? Why are they essential for computing?",
    a: "লজিক (if/else), প্রমাণ (correctness), সেট (ডেটাবেস), কম্বিনেটরিক্স (সম্ভাবনা), গ্রাফ (নেটওয়ার্ক), সংখ্যা তত্ত্ব (ক্রিপ্টো)। কম্পিউটার = ডিসক্রিট মেশিন।",
    aen: "Logic (if/else), proofs (correctness), sets (databases), combinatorics (probability), graphs (networks), number theory (crypto). Computers are discrete machines."
  },
  story: `<p class="scene-setting">তুমি এখন নয়টি দরজা পেরিয়েছো। প্রতিটি দরজায় একজন শিক্ষক একটি কৌশল দিয়েছেন। এখন সব একসাথে মেলাও। একটি কম্পিউটার প্রোগ্রাম লিখতে হবে। প্রতিটি দরজার শিক্ষক আসবে, তার কৌশল দেবে। এটাই সমন্বয় — নয়টি যন্ত্র একসাথে বাজে।</p>
<p class="scene-setting en">You have passed nine doors. Each teacher gave you one technique. Now combine them all. Write a computer program. Each door's teacher appears, offering their technique. This is synthesis — nine instruments playing together.</p>

<div class="callout info"><span class="co-icon">🌟</span><div><strong>সম্পূর্ণ ডিসক্রিট গণিত — নয় দরজার সমন্বয়:</strong><br>
<strong>Door ১ — ইদ্রিস (Logic):</strong> if/else, De Morgan — প্রতিটি সিদ্ধান্ত<br>
<strong>Door ২ — ইউসুফ (Induction):</strong> recursion, loop correctness<br>
<strong>Door ৩ — জাইদ (Contradiction):</strong> অসম্ভব প্রমাণ, halting problem<br>
<strong>Door ৪ — রিয়াদ (Sets):</strong> ডেটাবেস, SQL UNION/INTERSECT<br>
<strong>Door ৫ — নাদিয়া (Combinatorics):</strong> hash collision, password শক্তি<br>
<strong>Door ৬ — সাবির (Pigeonhole):</strong> collision অনিবার্য প্রমাণ<br>
<strong>Door ৭ — তামির (Graphs):</strong> নেটওয়ার্ক, PageRank, রাউটিং<br>
<strong>Door ৮ — লাবিব (Coloring):</strong> রেজিস্টার বরাদ্দ, scheduling<br>
<strong>Door ৯ — আরমান (Numbers):</strong> RSA, এনক্রিপশন, মৌলিক</div></div>

<div class="code-block">— একটি Django অ্যাপে সব ডিসক্রিট গণিত —

  # Door ১ (Logic): if/else ও De Morgan
  if not (user.is_staff and user.is_active):
      # ≡ user.is_staff == False OR user.is_active == False

  # Door ৪ (Sets): QuerySet = সেট অপারেশন
  active_users = User.objects.filter(is_active=True)
  staff = User.objects.filter(is_staff=True)
  both = active_users & staff  # intersection

  # Door ৫ (Combinatorics): password শক্তি
  # ৮-অক্ষর password, ৬২ অক্ষর → ৬২⁸ ≈ ২১৮ ট্রিলিয়ন

  # Door ৭ (Graph): foreign key = গ্রাফ এজ
  # User → Account → Transaction → Category

  # Door ৯ (Number Theory): RSA সার্টিফিকেট
  # HTTPS সংযোগে p×q মৌলিক গুণফল</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">শিক্ষক</div></div>
<div class="stat-card"><div class="sc-num">৬</div><div class="sc-label">স্তম্ভ</div></div>
<div class="stat-card"><div class="sc-num">২০০০+</div><div class="sc-label">বছরের গবেষণা</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">প্রয়োগ</div></div>
</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">নূর — আলো। ডিসক্রিট গণিত হলো সেই আলো যা প্রতিটি কম্পিউটার প্রোগ্রামকে দৃশ্যমান করে। বাইরে থেকে একটি অ্যাপ সহজ মনে হয় — কিন্তু ভেতরে চলছে এক বিশাল ডিসক্রিট সত্যের সমন্বয়। ইদ্রিসের লজিক, ইউসুফের ইনডাকশন, রিয়াদের সেট, নাদিয়ার গোনা, তামিরের গ্রাফ, আরমানের সংখ্যা — সব একসাথে। একটি সার্ভার চালু হওয়া — ২০০০ বছরের গবেষণার ফল।</p>
<p class="scene-setting en">Nur — light. Discrete mathematics is the light that makes every computer program visible. Outside, an app seems simple — but inside runs a vast orchestration of discrete truth. Idris's logic, Yusuf's induction, Riyad's sets, Nadia's counting, Tamir's graphs, Arman's numbers — all at once. A server starting up — the fruit of 2000 years of research.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ৩০ (Math for ML) → calculus ও linear algebra। Book ৪১ (Theory of Computation) → automata, টুরিং মেশিন। Book ৪৬ (Cryptography) → RSA, number theory-এর প্রয়োগ। Book ৪৫ (Compilers) → graph coloring, রেজিস্টার। Book ৩৯ (Databases) → SQL = সেট অপারেশন। এই বই সবার ভিত্তি।</div></div>

<div class="checklist">
<li>⚖️ De Morgan-এর নিয়ম Python-এ যাচাই করো</li>
<li>🁢 Σi = n(n+১)/২ induction দিয়ে প্রমাণ করো</li>
<li>🔍 √২ অমূলদ contradiction দিয়ে প্রমাণ করো</li>
<li>⊇ পাওয়ার সেট বের করো: {a,b,c}</li>
<li>🎲 ৫০ জনে birthday collision সম্ভাবনা হিসাও</li>
<li>🕸️ networkx দিয়ে একটি DAG বানাও</li>
<li>🔢 প্রথম ১০০টি মৌলিক সংখ্যা বের করো</li>
<li>📖 "Discrete Mathematics and Its Applications" — Rosen পড়ো</li>
</div>

<div class="secret-box">🌟 <strong>ডিসক্রিট গণিত = কম্পিউটিংয়ের আলো।</strong> নয়টি দরজা, নয়জন শিক্ষক, একটি সত্য। প্রতিটি if/else একটি সত্য সারণি। প্রতিটি ডেটাবেস একটি সেট। প্রতিটি নেটওয়ার্ক একটি গ্রাফ। প্রতিটি এনক্রিপশন মৌলিক সংখ্যা। এখন তুমি জানো — শুধু কীভাবে নয়, কেন। কেন if/else কাজ করে। কেন hash collision অনিবার্য। কেন চার রঙ যথেষ্ট। কেন মৌলিক অসীম। এটাই হিকমাহ — সত্যের একত্র দৃষ্টি।</div>`,
  senior: {
    title: "সম্পূর্ণ ডিসক্রিট গণিত এক নজরে",
    body: `<table class="kv-table"><tr><th>স্তম্ভ</th><th>কী</th><th>দরজা</th></tr>
<tr><td class="hl">Logic</td><td>সত্য সারণি, De Morgan</td><td>১</td></tr>
<tr><td class="hl">Proofs</td><td>Induction, Contradiction</td><td>২, ৩</td></tr>
<tr><td class="hl">Sets</td><td>Union, Intersection, Power Set</td><td>৪</td></tr>
<tr><td class="hl">Combinatorics</td><td>P(n,k), C(n,k), Birthday</td><td>৫</td></tr>
<tr><td class="hl">Pigeonhole</td><td>Collision অনিবার্য</td><td>৬</td></tr>
<tr><td class="hl">Graphs</td><td>BFS, DFS, DAG, Euler</td><td>৭</td></tr>
<tr><td class="hl">Coloring</td><td>4-color, Register allocation</td><td>৮</td></tr>
<tr><td class="hl">Number Theory</td><td>Primes, Fermat, RSA</td><td>৯</td></tr>
<tr><td class="hl">Synthesis</td><td>সব একসাথে</td><td>১০</td></tr></table>`
  }
});
