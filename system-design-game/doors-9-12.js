// ════════════════════════════════════════
// CITY BUILDER'S CODEX — DOORS 9-12
// 9. Databases (SQL/NoSQL/Sharding)  10. Database Indexing
// 11. Replication & Partitioning [NEW]  12. CAP Theorem
// ════════════════════════════════════════

// ══ DOOR 9: DATABASES ══
doors.push({
  num:9, icon:"📦", color:"#5b9eff", name:"সংরক্ষণাগারিকের গ্রন্থাগার",
  subtitle:"The Archivist's Library", tech:"Databases: SQL vs NoSQL, Sharding, Replication",
  spirit:"কুরআনের সংকলন — কাঠামো, যাচাই, বিতরণ",
  secret:"এক ধরনের সংরক্ষণাগার সবার জন্য যথেষ্ট নয়। SQL = কাঠামোবদ্ধ, NoSQL = নমনীয়। Sharding = ভাগ করা। Replication = অনুলিপি।",
  recall:{
    q:"সংরক্ষণাগারিক কেন সব নথি এক কাঠামোতে রাখেন না?",
    qen:"Why doesn't the archivist store all documents in one format?",
    a:"কারণ বিভিন্ন ধরনের নথি বিভিন্ন কাঠামোতে ভালো থাকে। কিছু স্থির কাঠামোর (SQL), কিছু নমনীয় (NoSQL)। আবার বিশাল হলে ভাগ করতে হয় (sharding), অনুলিপি রাখতে হয় (replication)।",
    aen:"Because different documents need different structures. Some rigid (SQL), some flexible (NoSQL). When huge — split (sharding), copy (replication)."
  },
  story:`
<p class="scene-setting">নবম স্থান। একটা সুবিশাল সংরক্ষণাগার। দেয়ালে তাকে তাকে স্ক্রল, খাতা, পুথি। কিন্তু এই গ্রন্থাগারটি অন্যরকম — প্রতিটা কক্ষে ভিন্ন ধরনের সংরক্ষণ। এক কক্ষে সুসজ্জিত টেবিল — প্রতিটি সারিতে নির্দিষ্ট তথ্য, নির্দিষ্ট ক্রমে। অন্য কক্ষে ঢিলেঢালা বস্তা — প্রতিটিতে ভিন্ন জিনিস, কোনো নির্দিষ্ট ক্রম নেই। সংরক্ষণাগারিক জাইদ বলেন — "প্রতিটা ধরনের তথ্যের নিজস্ব ঘর দরকার।"</p>
<p class="scene-setting en">The ninth place. A vast archive. Shelves of scrolls, ledgers, manuscripts. But this library is different — each room stores differently. One room: organized tables — each row with specific data, specific order. Another room: loose sacks — each with different items, no fixed order. Archivist Zaid says — "Each type of data needs its own room."</p>

<div class="dialogue">বাজার বিতরণকারী বলেছিলেন — কাছে আনো (CDN)। কিন্তু সব তথ্য edge-এ রাখা যায় না। সব তথ্য একটা স্থায়ী ঘর দরকার। সেই ঘরই ডেটাবেস। কিন্তু কোন ঘর?</div>
<div class="dialogue en">"The distributor said — bring close (CDN). But not all data lives at the edge. All data needs a permanent home. That home is the database. But which home?"</div>

<div class="compare">
<div class="cmp-card cmp-neutral"><div class="cmp-label">📊 SQL (Relational)</div>টেবিল, সারি, কলাম। কঠোর কাঠামো। ACID guarantee। JOIN, foreign key, transaction। ভালো: ইউজার, অর্ডার, পেমেন্ট — যেখানে সম্পর্ক গুরুত্বপূর্ণ। আধুনিক SQL-ও horizontal scale করে (Citus, Vitess, CockroachDB) — scaling শুধু NoSQL-এর একচেটিয়া গুণ নয়।<br>PostgreSQL, MySQL</div>
<div class="cmp-card cmp-neutral"><div class="cmp-label">📄 NoSQL (Non-relational)</div>নমনীয় কাঠামো। JSON-এর মতো। Schema-less। horizontal scaling built-in ও সহজ। ভালো: কন্টেন্ট, লগ, IoT — যেখানে কাঠামো বদলায়।<br>MongoDB, Cassandra, DynamoDB</div>
</div>

<div class="dialogue">কিন্তু একটা সমস্যা। যখন তথ্য বাড়ে — কোটি কোটি রেকর্ড — একটা সংরক্ষণাগারে রাখা যায় না। দুটো সমাধান: Sharding — ভাগ করা। Replication — অনুলিপি রাখা। আমি ভাগ শিখাই, আমার ভাই আয়না গিল্ড (Door 11) অনুলিপি শেখাবেন।</div>
<div class="dialogue en">"But one problem. When data grows — billions of records — one archive can't hold it. Two solutions: Sharding — splitting. Replication — copying. I teach splitting; my sibling the Mirror Guild (Door 11) will teach copying."</div>

<div class="code-block">Scaling Databases:

Sharding (ভাগ করা):
  User A-M → Database 1
  User N-Z → Database 2
  → প্রতিটা DB ছোট, দ্রুত
  → কিন্তু cross-shard query কঠিন
  → shard key বাছাই গুরুত্বপূর্ণ (Door 11, 16)

Replication (অনুলিপি):
  Primary DB → লেখা এখানে
  Replica 1 → পড়া এখান থেকে
  → read throughput বাড়ে
  → একটা ক্র্যাশ করলে বাকিরা আছে

NOSQL FLAVORS (শুধু এক নয়):
  Document (MongoDB) — JSON, নমনীয় schema, nested
  Key-Value (Redis, DynamoDB) — সহজ, দ্রুত, O(1)
  Wide-Column (Cassandra) — বিশাল scale, time-series
  Graph (Neo4j) — সম্পর্ক, knowledge graph
  Vector (Pinecone, pgvector) — AI/embedding search!</div>

<div class="dialogue">কুরআনের সংকলনও এভাবে হয়েছে। প্রথমে বিক্ষিপ্ত — হাড়ে, পাতায়, মুখস্থে। তারপর কাঠামো — সূরা ক্রম, আয়াত ক্রম। তারপর যাচাই — প্রতিটা আয়াত দুইজন সাক্ষীর মুখস্থের সাথে মিলিয়ে। তারপর বিতরণ — একাধিক অনুলিপি বিভিন্ন অঞ্চলে। SQL = কাঠামো (সূরা ক্রম)। ACID = যাচাই (সাক্ষী)। Replication = বিতরণ (অনুলিপি)। ডেটাবেস নকশা নতুন কিছু নয় — এটা জ্ঞান সংরক্ষণের প্রাচীন প্রজ্ঞা।</div>
<div class="dialogue en">"The compilation of the Quran happened this way. First scattered — on bone, leaf, memory. Then structured — surah order, ayah order. Then verified — each ayah cross-checked against two witnesses' memorization. Then distributed — multiple copies to different regions. SQL = structure (surah order). ACID = verification (witnesses). Replication = distribution (copies). Database design isn't new — it's the ancient wisdom of preserving knowledge."</div>`,
  senior:{
    title:"CAP Theorem পূর্বরূপ — ডেটাবেস বাছাই",
    body:`<p>ডেটাবেস বাছাই করার আগে বুঝো: <strong>CAP Theorem</strong> — Consistency, Availability, Partition tolerance। বাস্তবে P (network partition) এড়ানো যায় না — তাই আসল প্রশ্ন তিনটার মধ্যে দুটো বাছাই নয়, বরং: partition ঘটলে Consistency রাখবে না Availability? (বিস্তারিত Door 12 — CAP)।</p><p><strong>SQL (একক PostgreSQL / sync replica-set):</strong> সাধারণত CP ধাঁচ বেছে নেয়। সঠিক ডেটা সবসময়। কিন্তু নেটওয়ার্ক ভাঙলে কিছু অনুরোধ ব্যর্থ।</p><p><strong>NoSQL (Cassandra):</strong> সাধারণত AP ধাঁচ বেছে নেয়। সবসময় উত্তর দেয়। কিন্তু কিছুক্ষণ পুরনো ডেটা (eventual consistency)।</p>`
  }
});

// ══ DOOR 10: DATABASE INDEXING ══
doors.push({
  num:10, icon:"🔖", color:"#f0c75e", name:"কাতেবের সূচি",
  subtitle:"The Scribe's Index", tech:"Database Indexing (B-Tree, Hash, When to Index)",
  spirit:"ফিহরিস্ত — সূচি, দ্রুত খোঁজার মানচিত্র",
  secret:"ডেটাবেস ধীরে? প্রথম কারণ — সূচি নেই। বইয়ের সূচি ছাড়া প্রতিটা পৃষ্ঠা ঘাঁটতে হয় — O(n)। সূচি থাকলে সরাসরি পৃষ্ঠায় — O(log n)। কিন্তু সূচির দাম আছে — লেখার সময়, স্থান।",
  recall:{
    q:"কাতেব কীভাবে বিশাল গ্রন্থে একটা শব্দ সাথে সাথে খুঁজে পান?",
    qen:"How does the scribe instantly find a word in a vast book?",
    a:"প্রতিটা পৃষ্ঠা ঘাঁটেন না। সূচিতে যান — বর্ণ অনুযায়ী — সরাসরি পৃষ্ঠায়। ডেটাবেস সূচিও তেমনি — B-tree দিয়ে O(log n) খোঁজে, O(n) নয়। কিন্তু প্রতিটা insert-এ সূচি আপডেট লাগে।",
    aen:"He doesn't scan every page. He goes to the index — alphabetically — straight to the page. A database index too — searches in O(log n) via B-tree, not O(n). But each insert must update the index."
  },
  story:`
<p class="scene-setting">দশম স্থান। কাতেবের কামরা। দেয়ালে বিশাল গ্রন্থাগার, প্রতিটা বইয়ের শেষে একটা সূচি — বর্ণানুক্রমিক। কাতেব ইদ্রিস একটা পুরোনো বই খুললেন। "একটা শব্দ খুঁজতে হলে," তিনি বললেন, "প্রতিটা পৃষ্ঠা ঘাঁটবে? এক মাস! কিন্তু সূচিতে গেলে — এক সেকেন্ড। সূচি ছাড়া বই অন্ধ। সূচি ছাড়া ডেটাবেসও অন্ধ।"</p>
<p class="scene-setting en">The tenth place. The scribe's chamber. A vast library on the walls, each book with an index at the end — alphabetical. Scribe Idris opened an old book. "To find a word," he said, "scan every page? A month! But with the index — one second. Without an index, a book is blind. Without an index, a database is blind too."</p>

<div class="dialogue">সংরক্ষণাগারিক বলেছিলেন — সঠিক ঘর বাছো (SQL/NoSQL)। কিন্তু আমি বলি — সঠিক ঘরেও সূচি না থাকলে কাজ হবে না। হাজার হাজার row-এ একটা ইউজার খুঁজতে ডেটাবেস প্রতিটা row পড়ে — sequential scan, O(n)। এক মিলিয়ন row? সেকেন্ডে শেষ। সূচি থাকলে — O(log n)। ২০ ধাপে শেষ।</div>
<div class="dialogue en">"The archivist said — choose the right home (SQL/NoSQL). But I say — even the right home fails without an index. To find one user among thousands, the database reads every row — sequential scan, O(n). A million rows? Done in seconds. With an index — O(log n). Done in 20 steps."</div>

<div class="code-block">Database Indexing — The Scribe's Wisdom:

THE PROBLEM (without index):
  SELECT * FROM users WHERE email = 'x@y.com';
  → full table scan, O(n), seconds
  → production-এ unacceptable

THE SOLUTION (with index):
  CREATE INDEX idx_email ON users(email);
  → B-tree বানায় email column-এ
  → binary search: ১M rows = ~২০ comparisons
  → O(log n), milliseconds

INDEX TYPES:
 ১. B-TREE (default) — balanced tree
    → =, <, >, BETWEEN, LIKE 'pre%'
    → range queries, ORDER BY পারে
 ২. HASH — hash → bucket → pointer
    → শুধু = (exact match), O(1)
    → range পারে না
 ৩. COMPOSITE — একাধিক column একসাথে
    CREATE INDEX idx ON users(country, city);
    → (country, city) query দ্রুত
    → (country) query ও দ্রুত (leftmost prefix)
    → কিন্তু (city) alone এ কাজ করবে না!
 ৪. PARTIAL — শর্ত সহ, ছোট ও দ্রুত
    CREATE INDEX idx_pending ON orders(status) WHERE status='pending';
 ৫. COVERING — query-র সব column index-এই আছে, তাই table-এ যাওয়ার দরকারই নেই
 ৬. GIN/GiST (PostgreSQL) — array, JSONB, full-text

THE COST (no free lunch):
  ✅ SELECT দ্রুত হয়
  ❌ INSERT/UPDATE/DELETE ধীরে (index আপডেট)
  ❌ Disk space
  ❌ অতিরিক্ত index = optimizer confused

EXPLAIN — সূচি কাজ করছে কি না:
  EXPLAIN ANALYZE SELECT ... WHERE email='x';
  → "Seq Scan" (bad) নাকি "Index Scan" (good)?

WHY THIS MATTERS FOR AI:
  → B-tree = exact/range match এর জন্য নিখুঁত (deterministic)
  → Vector DB-এ HNSW/IVF index — ভিন্ন গোত্র: ANN (Approximate
    Nearest Neighbor)। নিখুঁত নয়, সম্ভাব্য কাছের ফল, কিন্তু
    উচ্চ-মাত্রার embedding space-এ O(log n)-এর মতো দ্রুত
  → RAG retrieval সব index-এর উপর নির্ভর
  → pgvector: ivfflat / hnsw index
  → প্রতিটা ML system একটা database স্পর্শ করে</div>

<div class="dialogue">ফিহরিস্ত — সূচি, দ্রুত খোঁজার মানচিত্র। কুরআন নাজিলের সময় সাহাবীরা সংকলন করতেন — কিন্তু সংকলনের পর সূচি ছাড়া কি খুঁজে পাওয়া যেত? ইসলামী ঐতিহ্যে ইলম-এর সংগ্রহ সবসময় সুসংগঠিত — অধ্যায়, বর্ণ, বিষয়। সূচি ছাড়া ইলম বিশৃঙ্খল। ডেটাবেসও — সূচি ছাড়া ধীর, বিশৃঙ্খল, অন্ধ।</div>
<div class="dialogue en">"Fihrist — index, the map of quick finding. When the Quran was revealed, the companions compiled it — but could it be found without an index? In Islamic tradition, the collection of ilm is always organized — by chapter, letter, topic. Without an index, ilm is chaos. The database too — without an index, slow, chaotic, blind."</div>`,
  senior:{
    title:"Index Audit — তোমার ডেটাবেসে",
    body:`<p><strong>Slow query? প্রথম ধাপ:</strong> <code>EXPLAIN ANALYZE</code> চালাও। Seq Scan দেখলে index দরকার।</p><p><strong>Foreign keys:</strong> প্রতিটা FK-তে index দাও। JOIN ধীরে হয় নাহলে (PostgreSQL অটো index করে না)।</p><p><strong>Composite index order:</strong> equality-তে ব্যবহৃত column আগে, range/sort column পরে (leftmost prefix rule) — এবং সমান শর্তে সবচেয়ে selective column আগে রাখো।</p><p><strong>Vector search (AI):</strong> pgvector + HNSW index। ১M+ embeddings-এ milliseconds search।</p><p><strong>Unused index মুছো:</strong> <code>pg_stat_user_indexes</code> দেখো — কোন index কখনো read হয়নি? সে শুধু write ধীরে করছে। মুছে ফেলো।</p>`
  }
});

// ══ DOOR 11: REPLICATION & PARTITIONING ══
doors.push({
  num:11, icon:"🪞", color:"#36d6e7", name:"আয়না গিল্ডের প্রাসাদ",
  subtitle:"The Mirror Guild's Palace", tech:"Replication & Partitioning (Leader-based, Leaderless, Rebalancing)",
  spirit:"তাওয়াতুর — বহু স্বাধীন সূত্রে একই বার্তা, একই ছবি বহু আয়নায়",
  secret:"এক অনুলিপি নয় — বহু। কিন্তু কে লিখবে? এক নেতা (single-leader)? সবাই (multi-leader)? কেউ না (leaderless)? প্রতিটা পথে ভিন্ন ঝুঁকি। আর ভাগ করলে কে কোন অংশ পাবে — rebalancing কঠিন।",
  recall:{
    q:"আয়না গিল্ড কেন এক আয়না রাখে না, বহু আয়নায় একই ছবি প্রতিফলিত করে?",
    qen:"Why does the Mirror Guild keep many mirrors reflecting one image, not just one?",
    a:"কারণ এক আয়না ভাঙলে ছবি হারায়। বহু আয়নায় — এক ভাঙলে বাকিরা ধরে রাখে। কিন্তু বহু আয়নায় একই ছবি রাখা কঠিন — কে আগে দেখল? কে সর্বশেষ? এটাই replication lag।",
    aen:"Because if one mirror breaks, the image is lost. With many — one breaks, others hold it. But keeping the same image across many mirrors is hard — who saw first? who last? This is replication lag."
  },
  story:`
<p class="scene-setting">একাদশ স্থান। আয়না গিল্ডের প্রাসাদ। একটা বিশাল কক্ষ — চার দেয়ালে বিশাল বিশাল আয়না, প্রতিটি একই ছবি প্রতিফলিত করছে। গিল্ড মাস্টার রফিক দাঁড়িয়ে আছেন। এক শিষ্য জিজ্ঞেস করলেন — "এক আয়নাই তো যথেষ্ট। কেন এত?" রফিক একটা আয়না ভাঙলেন। ছবি হারালো না — বাকি আয়নাগুলো ধরে রাখল। "কিন্তু," তিনি বললেন, "এখন সমস্যা — কেউ নড়লে কোন আয়না আগে দেখায়?"</p>
<p class="scene-setting en">The eleventh place. The Mirror Guild's palace. A vast chamber — huge mirrors on all four walls, each reflecting the same image. Guild Master Rafiq stands. A student asked — "One mirror is enough. Why so many?" Rafiq broke one mirror. The image didn't vanish — the others held it. "But," he said, "now the problem — when someone moves, which mirror shows it first?"</p>

<div class="dialogue">কাতেব শিখিয়েছিলেন — সূচি দাও, দ্রুত খোঁজো। কিন্তু আমি বলি — সূচি দিলেও, এক ডেটাবেস ভাঙলে সব তথ্য হারায়। অনুলিপি দরকার। কিন্তু অনুলিপি এক কথা নয় — কে লিখবে, কে পড়বে, কখন মিলবে? এটাই replication-এর গভীর প্রশ্ন। পরের দোরে (CAP) দেখবে — এই প্রশ্নের আপস।</p>
<div class="dialogue en">"The scribe taught — add an index, search fast. But I say — even with an index, if one database breaks, all data is lost. Copies are needed. But copies aren't simple — who writes, who reads, when do they agree? This is replication's deep question. The next door (CAP) shows the trade-off."</div>

<div class="diagram">
  <div class="diag-title">তিন ধরনের Replication — কে লিখবে?</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrA11" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#ffc857"/></marker>
      <marker id="arrT11" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#3dd6c4"/></marker>
      <marker id="arrF11" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#ff6b35"/></marker>
    </defs>
    <!-- SINGLE-LEADER -->
    <text class="lbl-sm" x="93" y="22" fill="#ffc857" style="font-size:12px">SINGLE-LEADER</text>
    <rect class="node-hot" x="63" y="40" width="60" height="36" rx="6"/>
    <text class="lbl-sm" x="93" y="62">Leader</text>
    <text class="lbl-sm" x="93" y="92" style="font-size:9px">writes →</text>
    ${[0,1,2].map(i=>`<rect class="node" x="${43+i*45}" y="${108}" width="36" height="30" rx="5"/><text class="lbl-sm" x="${61+i*45}" y="127" style="font-size:9px">F${i+1}</text>`).join('')}
    ${[0,1,2].map(i=>`<line class="edge" x1="${93}" y1="76" x2="${61+i*45}" y2="108" marker-end="url(#arrA11)"/>`).join('')}
    <text class="lbl-sm" x="93" y="160" style="font-size:9px" fill="#52c41a">সহজ, strong</text>
    <text class="lbl-sm" x="93" y="174" style="font-size:9px" fill="#52c41a">consistency</text>
    <text class="lbl-sm" x="93" y="195" style="font-size:9px" fill="#ff6b35">leader ভাঙলে</text>
    <text class="lbl-sm" x="93" y="208" style="font-size:9px" fill="#ff6b35">failover দরকার</text>

    <!-- MULTI-LEADER -->
    <text class="lbl-sm" x="280" y="22" fill="#3dd6c4" style="font-size:12px">MULTI-LEADER</text>
    ${[0,1,2].map(i=>`<rect class="node-cyan" x="${220+i*60}" y="50" width="50" height="32" rx="5"/><text class="lbl-sm" x="${245+i*60}" y="70" style="font-size:9px">L${i+1}</text>`).join('')}
    <text class="lbl-sm" x="280" y="100" style="font-size:9px">সবাই write পারে</text>
    <line class="edge-cyan" x1="270" y1="66" x2="280" y2="66" marker-start="url(#arrT11)" marker-end="url(#arrT11)"/>
    <line class="edge-cyan" x1="330" y1="66" x2="340" y2="66" marker-start="url(#arrT11)" marker-end="url(#arrT11)"/>
    <text class="lbl-sm" x="280" y="160" style="font-size:9px" fill="#52c41a">multi-DC, fast</text>
    <text class="lbl-sm" x="280" y="174" style="font-size:9px" fill="#52c41a">writes</text>
    <text class="lbl-sm" x="280" y="195" style="font-size:9px" fill="#ff6b35">conflict resolve</text>
    <text class="lbl-sm" x="280" y="208" style="font-size:9px" fill="#ff6b35">কঠিন!</text>

    <!-- LEADERLESS -->
    <text class="lbl-sm" x="467" y="22" fill="#ff6b35" style="font-size:12px">LEADERLESS</text>
    ${[0,1,2,3].map((_,i)=>{const ang=i*90*Math.PI/180;const cx=467+Math.cos(ang)*40;const cy=80+Math.sin(ang)*40;return `<rect class="node-hot" x="${cx-22}" y="${cy-15}" width="44" height="30" rx="5"/><text class="lbl-sm" x="${cx}" y="${cy+1}" style="font-size:9px">N${i+1}</text>`;}).join('')}
    <text class="lbl-sm" x="467" y="80" style="font-size:9px">leader নেই</text>
    <text class="lbl-sm" x="467" y="160" style="font-size:9px" fill="#52c41a">high avail,</text>
    <text class="lbl-sm" x="467" y="174" style="font-size:9px" fill="#52c41a">no failover</text>
    <text class="lbl-sm" x="467" y="195" style="font-size:9px" fill="#ff6b35">quorum reads/</text>
    <text class="lbl-sm" x="467" y="208" style="font-size:9px" fill="#ff6b35">writes (W+R>N)</text>
    <text class="lbl-sm" x="280" y="232" text-anchor="middle">Postgres/MySQL = single-leader · Cassandra/DynamoDB = leaderless · multi-DC ছোট গ্রুপে</text>
  </svg>
</div>

<div class="code-block">Replication — Three Models:

১. SINGLE-LEADER (Primary-Replica)
   একটাই লেখে (leader), বাকিরা অনুলিপি (replica)
   → write: leader-এ যায় → replicas-এ copy
   → read: যেকোনো replica থেকে
   ✅ simple, strong consistency, no write conflicts
   ❌ leader ভাঙলে failover (নতুন leader বাছাই)
   ❌ write throughput সীমিত (এক নেতা)
   → PostgreSQL, MySQL, MongoDB (default)

২. MULTI-LEADER
   একাধিক নেতা, সবাই লেখে পারে
   → multi-datacenter: প্রতিটা DC-তে leader
   ✅ multi-DC performance, leader failure tolerant
   ❌ write conflict! (একই ডেটা দুই নেতায় বদলালে)
   ❌ conflict resolution: LWW, CRDT, custom logic
   → সাধারণত offline apps (mobile), multi-region

৩. LEADERLESS (Dynamo-style)
   কোনো leader নেই, সবাই সমান
   → write: একসাথে W টা node-এ (quorum)
   → read: একসাথে R টা node থেকে (quorum)
   → W + R > N হলে strong consistency (মোটামুটি)
   ✅ no failover, high availability, write throughput
   ❌ quorum math, eventual consistency, conflict
   → Cassandra, DynamoDB, Riak, Voldemort

REPLICATION LAG — the silent killer:
  write হলে replica-তে পৌঁছাতে সময় লাগে (ms-s)
  → "read-your-writes" ভঙ্গ: ইউজার লিখল, পড়ল — পুরোনো!
  → "monotonic reads" ভঙ্গ: সময় পিছিয়ে গেল
  → "consistent prefix reads" ভঙ্গ: ঘটনার ক্রম নষ্ট
  সমাধান: read-after-write একই session-এ leader-থেকে পড়ো

PARTITIONING / SHARDING (ভাগ করা):
  ডেটা অনেক বড় → এক node-এ রাখা যায় না → ভাগ

  ১. KEY-RANGE partitioning:
     ক্রমানুসারে — A-M shard 1, N-Z shard 2
     ✅ range query দ্রুত (একই shard-এ পড়ে)
     ❌ hotspot — সব লোক "A" দিয়ে হলে এক shard পোড়ে

  ২. HASH partitioning:
     hash(key) % N → shard
     ✅ সমান ভাগ, hotspot কম
     ❌ range query সব shard-এ যায় (ধীর)

  ৩. CONSISTENT HASHING (Door 16!) — সবচেয়ে ভালো
     ring-এ ছড়িয়ে, node যোগ/বাদে সামান্য ডেটা move

  SHARD KEY বাছাই — সবচেয়ে গুরুত্বপূর্ণ সিদ্ধান্ত:
    ✅ সমান ভাগ করে
    ✅ সাধারণ query এক shard-এ থাকে
    ❌ "user_id" ভালো (সমান), "country" খারাপ (hotspot)
    → একবার বাছাই → পরিবর্তন কঠিন! (resharding ভয়ংকর)

REBALANCING — node যোগ/বাদ করলে:
  ❌ সব ডেটা পুনরায় ভাগ → ভয়ংকর (downtime)
  ✅ consistent hashing — শুধু প্রতিবেশী ডেটা move
  ✅ fixed partitions আগেই (অনেক ছোট) → node তে assignment বদল
  ✅ automatic rebalancing — threshold অনুযায়ী</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Vector DB-এ replication সবখানে। Pinecone, Weaviate — leaderless, multi-AZ। Embedding বিশাল — partitioning আবশ্যক। RAG pipeline-এ "read-your-writes" ল্যাগ সমস্যা — ডকুমেন্ট আপলোড করলে, সাথে সাথে query করলে নাও পাবে! সমাধান: leader-থেকে পড়ো বা index refresh অপেক্ষা করো। Feature store — user_id দিয়ে shard করো, যাতে এক ইউজারের সব ফিচার এক shard-এ।</div>
<div class="dialogue en">"You're an AI engineer. Replication in vector DBs everywhere. Pinecone, Weaviate — leaderless, multi-AZ. Embeddings are huge — partitioning essential. In RAG pipelines, 'read-your-writes' lag is a real problem — upload a doc, query immediately, and it may not be found! Fix: read from leader or wait for index refresh. Feature store — shard by user_id so one user's features stay together."</div>

<div class="dialogue">তাওয়াতুর — বহু স্বাধীন সূত্র একই বার্তায় মিলে যাওয়া, যা মিথ্যার সম্ভাবনা উড়িয়ে দেয়। কুরআন সংরক্ষণের ইতিহাসে দুটো পদ্ধতি — কিতাব (লিখিত অনুলিপি) ও হিফয (মুখস্থ অনুলিপি)। এক নয়, বহু — প্রতিটা হাফিজ এক "replica", প্রতিটা মুসহাফ এক "replica"। কেউ ভুল করলে অন্যরা ধরে — cross-validation। এক অনুলিপি পুড়লে কুরআন হারায় না — বহু replica। replication-এর প্রজ্ঞা ইসলামী ঐতিহ্যে গভীরভাবে উপস্থিত — তাওয়াতুরের নীতি: redundancy সুরক্ষা, সম্প্রদায় = নির্ভরযোগ্যতা।</div>
<div class="dialogue en">"Tawatur — many independent sources converging on the same message, a convergence too improbable to be a lie. In the Quran's preservation history, two methods — kitab (written copies) and hifz (memorized copies). Not one, but many — each hafiz a 'replica', each mushaf a 'replica'. If one errs, others catch it — cross-validation. One copy burning doesn't lose the Quran — many replicas. Replication's wisdom runs deep in Islamic tradition — the principle of tawatur: redundancy as protection, community as reliability."</div>`,
  senior:{
    title:"Replication বাছাই — Production Cheat Sheet",
    body:`<p><strong>Single-leader শুরু করো:</strong> ৯৫% অ্যাপ এতে থাকে। PostgreSQL/MySQL — পরিচিত, tooling পরিপক্ব।</p><p><strong>Multi-leader যখন:</strong> multi-region active-active (দুই DC-তে সক্রিয় লেখা), offline-first mobile apps। conflict resolution না শিখলে ভয়ংকর।</p><p><strong>Leaderless যখন:</strong> massive write throughput (IoT, time-series, event log), multi-region, "always writeable" দরকার। Cassandra/DynamoDB।</p><p><strong>Quorum formula:</strong> N nodes, W write quorum, R read quorum। <strong>W + R > N</strong> → strong consistency (প্রতিটা read সর্বশেষ write দেখে)। W=R=N/2+1 সাধারণ।</p><p><strong>Shard key সাবধানে:</strong> একবার বাছাই → পরিবর্তন নরক। আগেই অনেক ছোট partition (মোটামুটি ১০x বেশি node-এর জন্য) বানাও, তারপর node-এ assignment বদলাও।</p>`
  }
});

// ══ DOOR 12: CAP THEOREM ══
doors.push({
  num:12, icon:"🛤️", color:"#ffc857", name:"চৌরাস্তার মানচিত্রকার",
  subtitle:"The Crossroads Cartographer", tech:"CAP Theorem & Consistency",
  spirit:"কিবলা — এক দিক বেছে নেওয়া",
  secret:"তিনটা গুণ — Consistency, Availability, Partition tolerance। তিনটে একসাথে অসম্ভব। কিন্তু বাস্তবে P (network partition) এড়ানো যায় না — তাই আসল প্রশ্ন তিনের মধ্যে দুই বাছাই নয়, বরং: partition ঘটলে C না A? পছন্দ তোমার।",
  recall:{
    q:"চৌরাস্তায় দাঁড়িয়ে তিন দিকে একসাথে যাওয়া যায় কি?",
    qen:"Standing at a crossroads, can you go three directions simultaneously?",
    a:"না। এক দিক বেছে নিতে হয়। CAP Theorem-ও তেমনি — কিন্তু বাস্তবে P (network partition) এড়ানো যায় না, তাই তৃতীয়টা সত্যিকারের ঐচ্ছিক বিকল্প নয়। আসল প্রশ্ন: partition ঘটলে তুমি Consistency রাখবে (CP) না Availability রাখবে (AP)? কোনটা — সেই সিদ্ধান্তই তোমার সিস্টেমের চরিত্র।",
    aen:"No. You must choose one direction. CAP Theorem is similar — but in practice P (network partition) can't be avoided, so the third option isn't really a free choice. The real question: when a partition happens, do you keep Consistency (CP) or Availability (AP)? That choice defines your system's character."
  },
  story:`
<p class="scene-setting">দ্বাদশ স্থান। একটা বিশাল চৌরাস্তা — চার দিকে চার রাস্তা। মাঝখানে একটা পাথরের স্তম্ভ, তাতে চার দিকের নাম। মানচিত্রকার ইসহাক দাঁড়িয়ে আছেন — হাতে কম্পাস, পাশে মানচিত্রের বই। একজন ভ্রমণকারী এসে জিজ্ঞেস করলেন — "আমি উত্তর আর পূর্ব দুটোই একসাথে যেতে চাই।" ইসহাক হাসলেন। "অসম্ভব। এক দিক বেছে নাও।"</p>
<p class="scene-setting en">The twelfth place. A vast crossroads — four roads, four directions. In the center: a stone pillar with directional names. Cartographer Ishaq stands — compass in hand, map book at his side. A traveler asks — "I want to go north and east simultaneously." Ishaq smiled. "Impossible. Choose one."</p>

<div class="dialogue">আয়না গিল্ড শিখিয়েছিলেন — বহু অনুলিপি, কিন্তু কে লিখবে প্রশ্ন। কিন্তু যখন একাধিক অনুলিপি একই ডেটা দেখে — সবসময় কি একই দেখে? যদি একটা নতুন ডেটা পায়, আরেকটা পুরনো পায় — অমিল। এখানেই CAP Theorem — সবচেয়ে গুরুত্বপূর্ণ সিদ্ধান্ত। এটা কেবল ডেটাবেস নয় — পুরো সিস্টেম ডিজাইনের কিবলা।</div>
<div class="dialogue en">"The Mirror Guild taught — many copies, but who writes is the question. But when multiple copies see the same data — do they always see the same? If one gets new data, another gets old — mismatch. Here's the CAP Theorem — the most important decision. Not just for databases — the qibla of all system design."</div>

<div class="code-block">CAP Theorem — তিন অসম্ভব গুণ:

C — Consistency (একমত)
  সব নোড একই ডেটা দেখে। একটা লিখলে
  সবাই সাথে সাথে দেখে। কেউ পিছিয়ে নয়।

A — Availability (উপস্থিতি)
  প্রতিটা অনুরোধে উত্তর মিলে।
  সিস্টেম থামে না। সবসময় দেয়।

P — Partition Tolerance (বিভাজন সহনশীলতা)
  নেটওয়ার্ক ভাঙলেও (পার্টিশন) সিস্টেম
  চলে। নোডগুলো যোগাযোগ হারালেও।

  বাস্তবে: P বাদ দেওয়া যায় না (নেটওয়ার্ক ভাঙেই)।
  তাই সিদ্ধান্ত: CP না AP?

CONSISTENCY MODELS (spectrum):
  STRONG (linearizable) — লেখার সাথে সাথে সবাই দেখে
    → ব্যাংক, payment
  EVENTUAL — শেষ পর্যন্ত সবাই দেখবে, কিন্তু দেরিতে
    → social feed, search index
  CAUSAL — causal ক্রম ধরা হয় (A কারণে B, তবে সবাই A আগে দেখে)
  READ-YOUR-WRITES — একই user তার write সবসময় দেখে
  MONOTONIC — time পিছিয়ে না
  → CAP "C" মানে strong, কিন্তু বাস্তবে spectrum!</div>

<div class="compare">
<div class="cmp-card cmp-neutral"><div class="cmp-label">🔒 CP — Consistency বেছে নাও</div>নেটওয়ার্ক ভাঙলে পুরনো ডেটা দেওয়ার চেয়ে উত্তর না দেওয়া ভালো। ব্যাংকিং, পেমেন্ট — ভুল উত্তর মানে টাকা হারালো।<br>PostgreSQL, MongoDB (strong), HBase, etcd</div>
<div class="cmp-card cmp-neutral"><div class="cmp-label">🌐 AP — Availability বেছে নাও</div>নেটওয়ার্ক ভাঙলেও উত্তর দাও — পুরনো হলেও। সোশ্যাল মিডিয়া ফিড — ১ সেকেন্ড পুরনো হলে কিছু যায় না। থামলে যায়।<br>Cassandra, DynamoDB, CouchDB</div>
</div>

<div class="dialogue">কিবলা — দিক। নামাজে এক কিবলা — কাবার দিক। কেউ উত্তর আর পূর্ব দুটো একসাথে মুখ করতে পারে না। এক দিক বেছে নিতে হয়। CAP Theorem-ও তেমনি — তুমি Consistency আর Availability দুটোই চাও। কিন্তু partition (নেটওয়ার্ক বিভাজন) হলে — একটা বিসর্জন দিতে হয়। কোনটা — সেটা তোমার কিবলা। তোমার সিস্টেমের চরিত্র সেই সিদ্ধান্তে।</div>
<div class="dialogue en">"Qibla — direction. In prayer, one qibla — toward the Kaaba. No one faces north and east simultaneously. You choose one direction. CAP Theorem is the same — you want both Consistency and Availability. But when partition (network split) happens — one must be sacrificed. Which — that's your qibla. Your system's character lies in that decision."</div>`,
  senior:{
    title:"Eventual Consistency — বাস্তবতা",
    body:`<p>বেশিরভাগ সিস্টেম AP বেছে নেয় — Availability + Partition tolerance। তাই eventual consistency — শেষ পর্যন্ত সবাই একমত হবে, কিন্তু একই মুহূর্তে নয়।</p><p><strong>উদাহরণ:</strong> Facebook like দিলে — তোমার বন্ধু দেখতে পাবে ২ সেকেন্ড পরে। সমস্যা নেই।</p><p><strong>কিন্তু ব্যাংকিং?</strong> একই টাকা দুই জায়গা থেকে তুলে দেখলে — consistency চাই। strong consistency।</p><p><strong>PACELC (CAP-এর সম্প্রসারণ):</strong> Partition হলে (P): Availability না Consistency (A/C)? Else — অর্থাৎ normal অবস্থায় (E): Latency না Consistency (L/C)? পার্টিশন নাই থাকুক, tradeoff থেকেই যায়।</p>`
  }
});
