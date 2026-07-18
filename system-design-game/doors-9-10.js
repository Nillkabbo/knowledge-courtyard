// ════════════════════════════════════════
// CITY BUILDER'S CODEX — DOORS 9-10
// CDN (Edge Caching) · Database Indexing
// ════════════════════════════════════════

// ── DOOR 9: CDN (CONTENT DELIVERY NETWORK) ──
doors.push({
  num:9, icon:"🌍", color:"#36d6e7", name:"বাজার বিতরণকারীর কেন্দ্র",
  subtitle:"The Market Distributor's Hub", tech:"CDN — Content Delivery Network & Edge Caching",
  spirit:"তাসরীফ — কাছে এগিয়ে যাওয়া",
  secret:"একটাই সেন্ট্রাল সার্ভার? প্রত্যেক ইউজার দূর থেকে আসে — ধীরে। CDN গোলাঘরের কপি বানায় বিশ্বের বহু জায়গায় — ইউজারের কাছে। কেন গোলাঘর রক্ষক যথেষ্ট নন? কারণ দূরত্ব = latency।",
  recall:{
    q:"বিতরণকারী কেন এক গোলাঘর রাখেন না, বরং বহু ছোট কেন্দ্র বানান?",
    qen:"Why does the distributor build many small hubs instead of one granary?",
    a:"কারণ এক গোলাঘর থেকে দূরের মানুষ অনেক সময়ে পৌঁছায়। ছোট কেন্দ্র ইউজারের কাছে — পণ্য দ্রুত। CDN-ও তেমনি — কন্টেন্ট বিশ্বের বহু edge-এ, ইউজারের কাছে। দূরত্ব = latency।",
    aen:"Because distant people take long to reach from one granary. Small hubs near users — goods arrive fast. A CDN too — content at many edges worldwide, near the user. Distance = latency."
  },
  story:`
<p class="scene-setting">নবম স্থান। বিতরণকারীর কেন্দ্র। বিশাল দেয়ালে বিশ্বের মানচিত্র — তাতে ছোট ছোট চিহ্ন, প্রতিটা এক একটা বাজার। মাঝখানে মূল গোলাঘর, আর চারপাশে অসংখ্য ছোট কেন্দ্র। বিতরণকারী তামিম বললেন — "গোলাঘর রক্ষক বলেছিলেন, পণ্য কাছে রাখো। কিন্তু আমি বলি — কাছে রাখলে দূরের মানুষ কী করবে? পণ্য ইউজারের কাছে হতে হবে।"</p>
<p class="scene-setting en">The ninth place. The distributor's hub. A vast world map on the wall — small marks on it, each a market. At the center, the main granary; all around, countless small hubs. Distributor Tamim said — "The granary keeper said, keep goods close. But I say — what use are close goods for distant people? Goods must be near the user."</p>

<div class="dialogue">গোলাঘর রক্ষক বলেছিলেন — cache বানাও, দ্রুত দাও। কিন্তু আমি বলি — cache শুধু সেন্ট্রাল সার্ভারে হলে, দূরের ইউজারের কাছে পৌঁছাতে সময় লাগে। latency। ব্রাজিলের ইউজার আমেরিকার সার্ভার থেকে ডেটা চাইলে — ২০০ms। প্রতিটা request এই দূরত্ব পাড়ি। এটাই CDN সমাধান করে।</div>
<div class="dialogue en">"The granary keeper said — build a cache, serve fast. But I say — if the cache sits only at the central server, reaching distant users takes time. Latency. A Brazilian user requesting data from a US server — 200ms. Every request pays this distance. The CDN solves this."</div>

<div class="code-block">CDN — Content Delivery Network:

THE LATENCY PROBLEM:
  light-এর গতিও সীমিত। আমেরিকা থেকে বাংলাদেশ:
    → physical distance ≈ ১৩,০০০ km
    → round-trip (fiber) ≈ ১৩০ms শুধু ভ্রমণে
    → + server processing, TLS handshake
    → total: ২০০-৪০০ms per request
  
  এক পেজে ৫০টা resource? ৫০ × ৩০০ms = catastrophe।

CDN SOLUTION — EDGE LOCATIONS (POPs):

  Origin server (তোমার মূল সার্ভার)
       ↓ কন্টেন্ট copy করে পাঠায়
  ┌─────────────────────────────────────┐
  │  Edge POP (Point of Presence)       │
  │  বিশ্বের শত শত জায়গায়              │
  │  প্রতিটা ইউজারের কাছে একটা            │
  └─────────────────────────────────────┘
  
  Cloudflare: ৩৩০+ cities, ১২০+ countries
  AWS CloudFront: ৬০০+ POPs
  Fastly: ৮০+ POPs, ultra-fast purge

  ইউজার request করে → DNS তাকে নিকটস্থ POP-এ পাঠায়
  → POP-এ cache hit হলে: <২০ms (local!)
  → cache miss হলে: origin থেকে আনে, cache করে, পরের বার দ্রুত

WHAT GOES ON A CDN (cache যোগ্য):
  ✅ Static assets — images, CSS, JS, fonts
  ✅ Videos / large file downloads (Netflix = CDN)
  ✅ API responses that don't change per-user
  ✅ HTML pages (cached with short TTL)
  ✅ Whole sites (Cloudflare can proxy everything)

WHAT DOES NOT (বা সাবধানে):
  ❌ Per-user personalized content (user dashboard)
  ❌ Authenticated API calls (unless token-aware caching)
  ❌ Real-time data (stock prices, chat)
  → তবে edge compute (Cloudflare Workers, Vercel Edge)
    এখন এগুলোও edge-এ চালাতে পারে

CACHE INVALIDATION — The Hard Part:

  অরিজিন পরিবর্তন হলে, edge cache-এ পুরোনো থাকে!
  → "stale" content ইউজার দেখে
  
  Strategies:
  ১. TTL (Time To Live):
     cache-এ থাকে নির্দিষ্ট সময় (যেমন ৬০ সেকেন্ড)
     → expire হলে আবার origin থেকে
     → সহজ, কিন্তু কিছু সময় stale থাকে
  
  ২. PURGE (manual/event-driven):
     অরিজিন আপডেট হলে CDN-কে বলো "এই URL মুছে দাও"
     → Cloudflare: instant purge
     → Fastly: <১৫০ms global purge
     → সঠিক, কিন্তু প্রতিটা update-এ API call
  
  ৩. Cache-Keys + Versioning:
     URL-এ version: app.v জেএস?v=1.2.3
     → নতুন version = নতুন URL = নতুন cache entry
     → পুরোনো অটো expire, ইউজার সবসময় fresh
     → best practice for static assets
  
  ৪. Stale-While-Revalidate (SWR):
     stale দাও তাৎক্ষণিক, background-এ fresh আনো
     → ইউজার দ্রুত response পায়, পরের বার fresh

PERFORMANCE GAINS (real numbers):
  
  ┌──────────────────────┬───────────┬───────────┐
  │ Metric               │ No CDN    │ With CDN  │
  ├──────────────────────┼───────────┼───────────┤
  │ Time to first byte   │ ৩০০ms     │ ৩০ms ✅   │
  │ Global consistency   │ varies    │ uniform ✅│
  │ Origin load          │ high      │ low ✅    │
  │ Cost (egress)        │ high      │ low ✅    │
  │ DDoS protection      │ manual    │ built-in ✅│
  └──────────────────────┴───────────┴───────────┘

EDGE COMPUTE (2024-26 trend):
  শুধু cache নয় — edge-এ কোড চালাও:
  → Cloudflare Workers (V8 isolates)
  → Vercel/Netlify Edge Functions
  → Deno Deploy
  → auth, redirects, A/B testing, personalization
  → sub-50ms globally, কোনো origin call না

CDN = SECURITY LAYER too:
  → DDoS absorption (বিশাল bandwidth)
  → WAF (Web Application Firewall) at edge
  → TLS termination (HTTPS cheaper for origin)
  → Bot filtering, rate limiting at edge
  → geographic blocking</div>

<div class="dialogue">তাসরীফ — কাছে এগিয়ে যাওয়া। কুরআনে আল্লাহ বলেন — "তোমাদের কাছে এসেছে আমার রসূল, স্পষ্ট প্রমাণ সহ।" (২:১০১)। জ্ঞান দূরে রাখলে কাজে লাগে না — কাছে আনতে হয়। CDN-ও তেমনি — কন্টেন্ট অরিজিনে নয়, ইউজারের কাছে। যে সেবা কাছে পৌঁছায়, সে সেবা সফল।</div>
<div class="dialogue en">"Tasreef — bringing close. Allah says — 'My messengers came to you with clear proofs.' (2:101). Knowledge kept distant serves no one — it must be brought near. The CDN too — content not at the origin, but near the user. Service that reaches close, succeeds."</div>`,
  senior:{
    title:"CDN in Production — Setup Checklist",
    body:`
    <p><strong>Static assets first:</strong> images/CSS/JS সব CDN-এ। এটাই সবচেয়ে সহজ জয়।</p>
    <p><strong>Cache headers ঠিক করো:</strong> <code>Cache-Control: public, max-age=31536000, immutable</code> — fingerprinted assets-এ।</p>
    <p><strong>HTML সাবধানে:</strong> short TTL (৬০-৩০০s) বা stale-while-revalidate। ইউজার fresh কন্টেন্ট পাবে কিন্তু দ্রুত।</p>
    <p><strong>Purge strategy:</strong> ডিপ্লয় করার সময় পুরোনো version URL বাদ দাও (fingerprint)। manual purge কম লাগবে।</p>
    <p><strong>Providers:</strong> Cloudflare (সস্তা, বিশাল network), CloudFront (AWS), Fastly (instant purge), Vercel (DX + edge)। শুরু: Cloudflare free tier।</p>`
  }
});

// ── DOOR 10: DATABASE INDEXING ──
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
  
  ডেটাবেস প্রতিটা row পড়ে — ১M rows = ১M reads
  → O(n), seconds
  → "full table scan"
  → production-এ unacceptable

THE SOLUTION (with index):
  
  CREATE INDEX idx_email ON users(email);
  
  ডেটাবেস B-tree বানায় email column-এ
  → binary search: ১M rows = ~২০ comparisons
  → O(log n), milliseconds
  → direct pointer to the row

INDEX TYPES:

১. B-TREE (default, most common)
   balanced tree — leaf-এ actual data pointers
   
   সব O(log n): =, <, >, BETWEEN, LIKE 'pre%' (prefix)
   → range queries পারে
   → sorted order পারে (ORDER BY)
   → PostgreSQL, MySQL InnoDB — ডিফল্ট এটাই
   
        [50]
       /      \
    [25]      [75]
    /  \      /  \
  [10][40] [60][90]

২. HASH INDEX
   hash function → bucket → pointer
   
   শুধু সমতা (=)। range (<, >) পারে না।
   → O(1) exact match
   → MEMORY-তে ভালো (Redis পুরোটাই এটা)
   → PostgreSQL: HASH index (crash-safe 10+ থেকে)

৩. GIN / GiST (PostgreSQL-specific)
   GIN (Generalized Inverted Index):
     → array, JSONB, full-text search
     → "কোন word কোন document-এ আছে?"
   GiST:
     → geometric, range, full-text
     → "এই point কোন polygon-এ?"

৪. COMPOSITE (multi-column) INDEX
   একাধিক column একসাথে
   CREATE INDEX idx ON users(country, city);
   → (country, city) query দ্রুত
   → (country) query ও দ্রুত (leftmost prefix)
   → কিন্তু (city) alone এ কাজ করবে না!
   → order matters

৫. PARTIAL INDEX
   শর্ত সহ index
   CREATE INDEX idx ON orders(status) WHERE status = 'pending';
   → শুধু pending rows — ছোট index, কম স্থান
   → যদি বেশি query এই শর্তে

৬. COVERING INDEX (Index-Only Scan)
   index-এ প্রশ্নের সব column রাখো
   → table-এ যেতেই হয় না — index থেকেই উত্তর
   → PostgreSQL: INCLUDE clause
   → fastest possible SELECT

THE COST OF INDEXES (no free lunch):

  ✅ SELECT দ্রুত হয়
  ❌ INSERT/UPDATE/DELETE ধীরে (index আপডেট)
  ❌ Disk space (index-ও জায়গা নেয়)
  ❌ অতিরিক্ত index = optimizer confused (বেছে নিতে পারে না)
  
  Rule of thumb:
    → OLTP (write-heavy): কম index, শুধু দরকারি
    → OLAP (read-heavy/reporting): বেশি index
    → প্রতিটা index প্রশ্ন করো: "এটা কি সত্যিই দরকার?"

WHEN TO INDEX (signals):
  ✅ WHERE clause-এ বারবার আসা column
  ✅ JOIN-এ ব্যবহৃত column (FK সবসময় index করো!)
  ✅ ORDER BY / GROUP BY column
  ✅ UNIQUE constraint (implicit index তৈরি হয়)
  
  ❌ খুব কম row (১০০ row-এ index ওভারহেড > benefit)
  ❌ বারবার বদলানো column (write cost)
  ❌ low cardinality (gender, boolean) — index বেছে নেয় না

EXPLAIN — সূচি কাজ করছে কি না যাচাই করো:

  EXPLAIN ANALYZE
  SELECT * FROM users WHERE email = 'x@y.com';
  
  → "Seq Scan" (bad) নাকি "Index Scan" (good)?
  → "Index Scan" = index ব্যবহৃত ✅
  → "Seq Scan" = full table scan ❌ → index দরকার
  → এটাই সবচেয়ে গুরুত্বপূর্ণ diagnostic টুল

COMMON PITFALLS:
  ১. Function on column kills index:
     WHERE LOWER(email) = 'x' — index কাজ করে না
     → functional index দাও: CREATE INDEX ON users(LOWER(email))
  
  ২. Type mismatch:
     WHERE phone = 12345 (phone string) — implicit cast, index ভাঙে
  
  ৩. OR clause-এ একপাশে index না থাকলে:
     WHERE a=1 OR b=2 — দুই পাশেই index দরকার
  
  ৪. LIKE '%suffix' — leading wildcard, index কাজ করে না
     → LIKE 'prefix%' কাজ করে
     → full-text search ব্যবহার করো

WHY THIS MATTERS FOR AI:
  → Vector DB-এ HNSW index (approximate nearest neighbor)
  → RAG retrieval সব index-এর উপর নির্ভর
  → pgvector: ivfflat / hnsw index
  → feature store lookup (per-user features)
  → প্রতিটা ML system একটা database স্পর্শ করে</div>

<div class="dialogue">ফিহরিস্ত — সূচি, দ্রুত খোঁজার মানচিত্র। কুরআন নাজিলের সময় সাহাবীরা সংকলন করতেন — কিন্তু সংকলনের পর সূচি ছাড়া কি খুঁজে পাওয়া যেত? ইসলামী ঐতিহ্যে ইলম-এর সংগ্রহ সবসময় সুসংগঠিত — অধ্যায়, বর্ণ, বিষয়। সূচি ছাড়া ইলম বিশৃঙ্খল। ডেটাবেসও — সূচি ছাড়া ধীর, বিশৃঙ্খল, অন্ধ।</div>
<div class="dialogue en">"Fihrist — index, the map of quick finding. When the Quran was revealed, the companions compiled it — but could it be found without an index? In Islamic tradition, the collection of ilm is always organized — by chapter, letter, topic. Without an index, ilm is chaos. The database too — without an index, slow, chaotic, blind."</div>`,
  senior:{
    title:"Index Audit — তোমার ডেটাবেসে",
    body:`
    <p><strong>Slow query? প্রথম ধাপ:</strong> <code>EXPLAIN ANALYZE</code> চালাও। Seq Scan দেখলে index দরকার।</p>
    <p><strong>Foreign keys:</strong> প্রতিটা FK-তে index দাও। JOIN ধীরে হয় নাহলে (PostgreSQL অটো index করে না)।</p>
    <p><strong>Composite index order:</strong> সবচেয়ে selective column আগে রাখো। <code>(country, city)</code> — country আগে কারণ সেটা বেশি narrow করে।</p>
    <p><strong>Vector search (AI):</strong> pgvector + HNSW index। ১M+ embeddings-এ milliseconds search। ivfflat সস্তা কিন্তু কম নিখুঁত।</p>
    <p><strong>Unused index মুছো:</strong> <code>pg_stat_user_indexes</code> দেখো — কোন index কখনো read হয়নি? সে শুধু write ধীরে করছে। মুছে ফেলো।</p>`
  }
});
