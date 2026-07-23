doors.push({
  num: 6,
  icon: "🌐",
  color: "#2dd4bf",
  name: "বিকল্প জগত",
  subtitle: "The Alternative World",
  tech: "NoSQL — key-value (Redis), document (MongoDB), column-family (Cassandra), graph (Neo4j), CAP tradeoffs, BASE",
  spirit: "তাবাকা — বিভিন্ন স্তরে বিভিন্ন গঠন, এক আকার সবার জন্য নয়",
  secret: "NoSQL = relational নয়। প্রতিটি ধরনের ডেটার জন্য আলাদা গঠন। key-value, document, column, graph — বেছে নাও যা তোমার দরকার।",
  recall: {
    q: " NoSQL-এর ৪টি প্রধান ধরন কী কী?",
    qen: "What are the 4 main types of NoSQL databases?",
    a: "১. Key-value (Redis), ২. Document (MongoDB), ৩. Column-family (Cassandra), ৪. Graph (Neo4j)।",
    aen: "1. Key-value (Redis), 2. Document (MongoDB), 3. Column-family (Cassandra), 4. Graph (Neo4j)."
  },
  story: `<p class="scene-setting">তুমি একটি টুলবক্স খুললে। ভেতরে হাতুড়ি, স্ক্রুড্রাইভার, প্লায়ার, রেঞ্চ। প্রতিটি যন্ত্র একটি নির্দিষ্ট কাজের জন্য। একটি হাতুড়ি দিয়ে স্ক্রু টাইট করা যায় না। ডাটাবেসও তেমন — relational (SQL) একটি শক্তিশালী হাতুড়ি, কিন্তু সব কাজের জন্য সেরা নয়। কিছু কাজের জন্য আলাদা যন্ত্র দরকার — NoSQL।</p>
<p class="scene-setting en">You open a toolbox. Inside: hammer, screwdriver, pliers, wrench. Each tool for a specific job. You can't tighten a screw with a hammer. Databases too — relational (SQL) is a powerful hammer, but not best for everything. Some jobs need different tools — NoSQL.</p>

<div class="callout info"><span class="co-icon">📋</span><div><strong>NoSQL ধরনভেদ:</strong><br>
<strong>Key-Value (Redis, DynamoDB):</strong> সবচেয়ে সহজ — একটি key, একটি value। অত্যন্ত দ্রুত। Cache, session, counter।<br>
<strong>Document (MongoDB, CouchDB):</strong> JSON-এর মতো document। প্রতিটি record একটি tree। schema-less — নমনীয়। Blog post, user profile, catalog।<br>
<strong>Column-Family (Cassandra, HBase):</strong> কলাম-ভিত্তিক। বিশাল পরিমাণ ডেটা, write-heavy। IoT, time-series, log।<br>
<strong>Graph (Neo4j, Amazon Neptune):</strong> নোড ও edge। সম্পর্ক বিশ্লেষণে সেরা। Social network, recommendation, fraud detection।</div></div>

<div class="compare">
<div class="cmp-card cmp-good"><div class="cmp-label">✅ SQL</div>Structured, ACID, relational, JOIN, complex queries। সব ডেটা টেবিলে।</div>
<div class="cmp-card cmp-bad"><div class="cmp-label">🌐 NoSQL</div>Flexible, BASE, horizontal scaling, type-specific। সব ডেটা এক আকার নয়।</div>
</div>

<div class="callout info"><span class="co-icon">⚖️</span><div><strong>BASE vs ACID (NoSQL-এর দর্শন):</strong><br>
<strong>B — Basically Available:</strong> সিস্টেম সর্বদা available, partial failure সহ্য করে<br>
<strong>S — Soft State:</strong> সিস্টেমের অবস্থা external input ছাড়া বদলাতে পারে<br>
<strong>E — Eventually Consistent:</strong> শেষ পর্যন্ত consistent — কিন্তু এই মুহূর্তে নাও হতে পারে<br>
এটাই NoSQL-এর tradeoff: শক্তিশালী consistency ছেড়ে availability ও scalability নাও।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>CAP Theorem (Brewer ২০০০):</strong> Distributed system-এ তিনটির মধ্যে মাত্র দুটি থাকতে পারে:<br>
<strong>C — Consistency:</strong> সব নোড একই ডেটা দেখায়<br>
<strong>A — Availability:</strong> প্রতিটি request উত্তর পায়<br>
<strong>P — Partition Tolerance:</strong> নেটওয়ার্ক বিভাজন সহ্য করে<br>
Partition হলে (এবং হবে) — C বা A বেছে নাও। Cassandra = AP, MongoDB = CP।</div></div>

<div class="verse">وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং মানুষের জন্য তা ছাড়া আর কিছু নেই যা সে চেষ্টা করে।" — কুরআন ৫৩:৩৯</div>

<p class="scene-setting">এই আয়াত বলে — প্রতিটি কাজের জন্য উপযুক্ত প্রচেষ্টা দরকার। NoSQL-ও তেমন — প্রতিটি ধরনের ডেটার জন্য উপযুক্ত গঠন। এক আকার সবার জন্য নয়। Redis cache-এর জন্য, MongoDB document-এর জন্য, Neo4j relationship-এর জন্য। সঠিক টুল বেছে নাও।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> Microservices — প্রতিটি service-এর জন্য আলাদা database। Book ৩৫ (ডিস্ট্রিবিউটেড) Door ৩: CAP theorem deep dive। Book ১০ (RAG) Door ৩: Vector DB — NoSQL-এর নতুন ধরন।</div></div>

<div class="secret-box">🌐 <strong>NoSQL = বিকল্প টুলবক্স।</strong> Key-value (দ্রুত), Document (নমনীয়), Column (বিশাল), Graph (সম্পর্ক)। BASE দর্শন, CAP tradeoff। কিন্তু একটি মেশিনে থাকলে সব সীমাবদ্ধ। যখন মিলিয়ন ব্যবহারকারী, হাজার সার্ভার — ডেটা বিভক্ত করতে হয়। সেই যাত্রা আসবে পরের দরজায় — distributed databases।</div>`,
  senior: {
    title: "NoSQL এক নজরে",
    body: `<table class="kv-table"><tr><th>ধরন</th><th>উদাহরণ</th><th>সেরা ব্যবহার</th></tr>
<tr><td class="hl">Key-Value</td><td>Redis, DynamoDB</td><td>Cache, session, counter</td></tr>
<tr><td class="hl">Document</td><td>MongoDB, CouchDB</td><td>User profile, blog, catalog</td></tr>
<tr><td class="hl">Column-Family</td><td>Cassandra, HBase</td><td>Time-series, IoT, write-heavy</td></tr>
<tr><td class="hl">Graph</td><td>Neo4j, Neptune</td><td>Social network, recommendation</td></tr>
<tr><td class="hl">BASE</td><td colspan="2">Basically Available, Soft State, Eventually Consistent</td></tr>
<tr><td class="hl">CAP</td><td colspan="2">Consistency OR Availability (when partitioned)</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "🌍",
  color: "#2dd4bf",
  name: "বিতরণ স্থপতি",
  subtitle: "The Distribution Architect",
  tech: "Distributed Databases — replication (master-slave, master-master), sharding/partitioning, consistency models, convergence",
  spirit: "সিলসিলা — শৃঙ্খল, একাধিক নোডে ডেটা ছড়িয়ে যাওয়া",
  secret: "Sharding = ডেটা ভাগ করো (প্রতিটি সার্ভারে আলাদা অংশ)। Replication = ডেটা কপি করো (প্রতিটি সার্ভারে পুরো কপি)। উভয়ে স্কেল করে।",
  recall: {
    q: " Sharding এবং Replication-এর পার্থক্য কী?",
    qen: "What is the difference between sharding and replication?",
    a: "Sharding = ডেটা ভাগ (প্রতিটি সার্ভারে আলাদা অংশ)। Replication = ডেটা কপি (প্রতিটি সার্ভারে পুরো কপি)।",
    aen: "Sharding = split data (each server has different part). Replication = copy data (each server has full copy)."
  },
  story: `<p class="scene-setting">তোমার একটি বইয়ের দোকান। ১০ লক্ষ বই। একটি স্টোরে সব রাখলে — ভিড়, ধীর, একজন কর্মী হাজার গ্রাহক সামলাতে পারে না। দুটি সমাধান: প্রথম — প্রতিটি স্টোরে সব বইয়ের কপি রাখো, গ্রাহক যে স্টোরেই যাক পাবে (replication)। দ্বিতীয় — প্রতিটি স্টোরে আলাদা বই — স্টোর A-তে A-F, স্টোর B-তে G-M (sharding)। উভয়েই স্কেল করে।</p>
<p class="scene-setting en">You have a bookstore. 1 million books. One store can't hold them all — crowded, slow, one worker can't serve thousands. Two solutions: first — copy all books to each store, customer gets them anywhere (replication). Second — different books per store — store A has A-F, store B has G-M (sharding). Both scale.</p>

<div class="callout info"><span class="co-icon">📋</span><div><strong>Replication (প্রতিলিপি):</strong><br>
<strong>Master-Slave (Primary-Replica):</strong> একটি master write নেয়, একাধিক replica read দেয়। read scaling।<br>
<strong>Master-Master (Multi-Master):</strong> একাধিক master write নেয়। conflict resolution দরকার। complex।<br>
<strong>Synchronous:</strong> master write করে, replica confirm করে, তারপর success। নিরাপদ কিন্তু ধীর।<br>
<strong>Asynchronous:</strong> master write করে, success, replica পরে আপডেট হয়। দ্রুত কিন্তু risk।</div></div>

<div class="callout info"><span class="co-icon">✂️</span><div><strong>Sharding (Horizontal Partitioning):</strong><br>
<strong>Range-based:</strong> id ১-১০০০০ → shard 1, ১০০০১-২০০০০ → shard 2<br>
<strong>Hash-based:</strong> hash(user_id) % N → কোন shard? সমানভাবে ছড়ায়।<br>
<strong>Directory-based:</strong> একটি lookup table — কোন ডেটা কোন shard-এ।<br>
<strong>Geo-based:</strong> ভৌগলিক — Asian users → Asia shard, US users → US shard।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Sharding সমস্যা:</strong><br>
<strong>Hot Spot:</strong> একটি shard-এ সব ট্রাফিক — অন্যগুলো খালি।<br>
<strong>Resharding:</strong> shard সংখ্যা বদলাতে হলে — সব ডেটা move। ব্যয়বহুল।<br>
<strong>Cross-shard Query:</strong> JOIN যদি একাধিক shard-এ হয় — ধীর ও জটিল।<br>
<strong>Transaction:</strong> একাধিক shard-এ transaction — distributed ACID, কঠিন।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>Consistency Models:</strong><br>
<strong>Strong Consistency:</strong> write হওয়ার সাথে সাথে সব নোডে দেখা যায়। ধীর, কিন্তু নিরাপদ।<br>
<strong>Eventual Consistency:</strong> শেষ পর্যন্ত সব নোডে দেখা যাবে। দ্রুত, কিন্তু কিছুক্ষণ পুরোনো ডেটা।<br>
<strong>Read-your-writes:</strong> তুমি write করলে তুমি পরের read-এ নিজের write দেখবে।<br>
<strong>Causal Consistency:</strong> কার্যকারণ সম্পর্ক মানা হয় — A → B হলে B কখনো A-র আগে দেখা যাবে না।</div></div>

<div class="verse">وَاللَّهُ خَلَقَ كُلَّ دَابَّةٍ مِن مَّاءٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ প্রতিটি জীবকে সৃষ্টি করেছেন পানি থেকে।" — কুরআন ২৪:৪৫</div>

<p class="scene-setting">এই আয়াতে জীবের বিস্তারের কথা বলা হয়েছে। Distributed database-ও তেমন — একটি মেশিনে সব রাখা সম্ভব নয়। ডেটা বিস্তৃত করতে হয় — replication ও sharding দিয়ে। প্রতিটি নোড একটি জীব — নিজস্ব ক্ষমতা, কিন্তু সব মিলে একটি সিস্টেম।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস) Door ৬:</strong> Amazon Dynamo — sharding + replication একসাথে। Door ৩: CAP theorem। Book ৪: Database scaling — read replica, sharding।</div></div>

<div class="secret-box">🌍 <strong>Distributed = একাধিক নোডে ডেটা।</strong> Replication (কপি) + Sharding (ভাগ)। Master-slave, consistency models। কিন্তু এত স্তরে ডেটা ছড়িয়ে গেলে — query কীভাবে সঠিক নোডে যায়? কে ঠিক করে কোন plan সেরা? সেই সমাধান আসবে পরের দরজায় — query optimization।</div>`,
  senior: {
    title: "Distributed Databases এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Replication</td><td>ডেটা কপি — read scaling, high availability</td></tr>
<tr><td class="hl">Master-Slave</td><td>1 master (write) + N replicas (read)</td></tr>
<tr><td class="hl">Sharding</td><td>ডেটা ভাগ — write scaling, horizontal</td></tr>
<tr><td class="hl">Hash Sharding</td><td>hash(key) % N — সমান বণ্টন</td></tr>
<tr><td class="hl">Strong Consistency</td><td>write → সাথে সাথে visible সব নোডে</td></tr>
<tr><td class="hl">Eventual Consistency</td><td>write → শেষ পর্যন্ত visible — দ্রুত</td></tr>
<tr><td class="hl">Hot Spot</td><td>এক shard-ে সব ট্রাফিক</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "⚡",
  color: "#2dd4bf",
  name: "অপ্টিমাইজার",
  subtitle: "The Optimizer",
  tech: "Query Optimization — cost-based optimizer, execution plans, join strategies (nested loop, hash, merge), Selinger 1979",
  spirit: "হিকমাহ — প্রজ্ঞা, একাধিক পথের মধ্যে সেরা বেছে নেওয়া",
  secret: "Query Optimizer = GPS। একাধিক রাস্তা আছে — optimizer খুঁজে বের করে সবচেয়ে দ্রুত কোনটি। তুমি কী চাও বলো, কীভাবে পাবে সেটা optimizer সামলাবে।",
  recall: {
    q: " Cost-Based Optimizer কীভাবে কাজ করে?",
    qen: "How does a Cost-Based Optimizer work?",
    a: "একাধিক execution plan বিবেচনা করে, প্রতিটির cost (CPU, I/O) অনুমান করে, সবচেয়ে কম cost-এর plan বেছে নেয়।",
    aen: "Considers multiple execution plans, estimates cost (CPU, I/O) for each, selects the lowest-cost plan."
  },
  story: `<p class="scene-setting">তুমি GPS দিয়ে গন্তব্যে যাচ্ছো। GPS তিনটি রাস্তা দেখায় — হাইওয়ে (দ্রুত কিন্তু দীর্ঘ), শর্টকাট (ছোট কিন্তু ট্রাফিক), রিং রোড (বেশি দূর কিন্তু smooth)। GPS ট্রাফিক, দূরত্ব, সময় হিসাব করে সেরা রাস্তা বেছে নেয়। ডাটাবেসের Query Optimizer ঠিক তেমন — একাধিক পথ বিবেচনা করে, cost হিসাব করে, সেরা plan বেছে নেয়।</p>
<p class="scene-setting en">You're navigating with GPS. It shows three routes — highway (fast but long), shortcut (short but traffic), ring road (longer but smooth). GPS calculates traffic, distance, time, picks the best. The Query Optimizer works similarly — considers multiple paths, calculates cost, selects the best plan.</p>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>Query Optimization Steps:</strong><br>
১. <strong>Parse:</strong> SQL text → parse tree (syntax check)<br>
২. <strong>Logical Plan:</strong> parse tree → relational algebra (relational ops)<br>
৩. <strong>Physical Plan:</strong> relational ops → actual algorithms (scan, join, sort)<br>
৪. <strong>Cost Estimation:</strong> প্রতিটি plan-এর cost অনুমান (statistics থেকে)<br>
৫. <strong>Plan Selection:</strong> সর্বনিম্ন cost-এর plan বেছে নাও</div></div>

<div class="callout info"><span class="co-icon">🔀</span><div><strong>Join Strategies:</strong><br>
<strong>Nested Loop Join:</strong> প্রতিটি বাঁ সারির জন্য ডান টেবিলে খোঁজো। O(n×m)। ছোট টেবিলে OK।<br>
<strong>Hash Join:</strong> বাঁ টেবিলে hash table তৈরি, ডান টেবিল probe। O(n+m)। বড় টেবিলে সেরা।<br>
<strong>Merge Join:</strong> উভয় টেবিল sorted, একসাথে merge। O(n+m)। sorted data-তে দ্রুত।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Selinger Optimization (১৯৭৯):</strong> Patricia Selinger IBM-এ ১৯৭৯ সালে cost-based optimization-এর ভিত্তি স্থাপন করেছিলেন। তার পেপার "Access Path Selection in a Relational Database Management System" — এটি System R (IBM-এর প্রথম relational DB) এর জন্য ছিল। আজ প্রতিটি modern database MySQL, PostgreSQL, Oracle — Selinger-এর কাঠামো ব্যবহার করে।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Statistics — Optimizer-এর জ্বালানি:</strong><br>
Optimizer সিদ্ধান্ত নিতে statistics ব্যবহার করে —<br>
<strong>Table size:</strong> কতটা সারি<br>
<strong>Distribution:</strong> প্রতিটি value কতবার আছে (histogram)<br>
<strong>Index cardinality:</strong> কতটা অনন্য মান<br>
<strong>Selectivity:</strong> WHERE clause কতটা ফিল্টার করে<br>
সঠিক statistics = সঠিক plan। ভুল statistics = ভুল plan = slow query। ANALYZE TABLE দিয়ে update করো।</div></div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>Common Optimization Patterns:</strong><br>
<strong>Index hint:</strong> FORCE INDEX — optimizer-কে বাধ্য করো নির্দিষ্ট index ব্যবহার করতে<br>
<strong>Query rewrite:</strong> subquery → JOIN, DISTINCT → GROUP BY<br>
<strong>Partition pruning:</strong> শুধু প্রয়োজনীয় partition পড়ো<br>
<strong>Materialized view:</strong> complex query-র ফল আগেই সংরক্ষণ</div></div>

<div class="verse">إِنَّ مَعَ الْعُسْرِ يُسْرًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই কষ্টের সাথেই রয়েছে স্বস্তি।" — কুরআন ৯৪:৬</div>

<p class="scene-setting">এই আয়াত বলে — কষ্টের পরে স্বস্তি আছে। Query optimization-ও তেমন — প্রথমে ধীর query একটি সমস্যা (কষ্ট), কিন্তু EXPLAIN দিয়ে বিশ্লেষণ, index যোগ, rewrite — দ্রুত query (স্বস্তি)। প্রতিটি সমস্যার সমাধান আছে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> N+1 query problem — Django ORM-এ common। select_related/prefetch_related = optimization। Book ৩৩ (Critical Thinking): Performance debugging = systematic analysis।</div></div>

<div class="secret-box">⚡ <strong>Optimizer = ডাটাবেসের GPS।</strong> Cost-based, statistics-driven। Selinger ১৯৭৯ থেকে আজ পর্যন্ত। কিন্তু optimization শুধু OLTP-এর (transactions) জন্য নয়। যখন মিলিয়ন সারি analyze করতে হয় — reporting, dashboard, ML training — সেখানে দরকার ভিন্ন স্থাপত্য। সেই যাত্রা আসবে পরের দরজায় — data warehousing।</div>`,
  senior: {
    title: "Query Optimization এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Cost-Based Optimizer</td><td>একাধিক plan → সর্বনিম্ন cost বেছে নেয়</td></tr>
<tr><td class="hl">Nested Loop Join</td><td>O(n×m) — ছোট টেবিলে</td></tr>
<tr><td class="hl">Hash Join</td><td>O(n+m) — বড় টেবিলে সেরা</td></tr>
<tr><td class="hl">Merge Join</td><td>O(n+m) — sorted data-তে</td></tr>
<tr><td class="hl">Selinger ১৯৭৯</td><td>Cost-based optimization-এর ভিত্তি</td></tr>
<tr><td class="hl">Statistics</td><td>histogram, cardinality, selectivity</td></tr>
<tr><td class="hl">EXPLAIN</td><td>execution plan দেখায়</td></tr>
<tr><td class="hl">ANALYZE</td><td>statistics update</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "📈",
  color: "#2dd4bf",
  name: "জ্ঞানের ভাণ্ডার",
  subtitle: "The Knowledge Repository",
  tech: "Data Warehousing — Inmon (1990), Kimball (1996), OLAP vs OLTP, star schema, snowflake, ETL, columnar storage",
  spirit: "হিকমাহ — প্রজ্ঞা, কাঁচামাল থেকে অন্তর্দৃষ্টি তৈরি",
  secret: "Data Warehouse = একটি পৃথক বিশ্লেষণ ডাটাবেস। OLTP = দ্রুত transaction (INSERT/UPDATE)। OLAP = বিশাল query (SUM/COUNT over millions)। দুটি ভিন্ন কাজ, দুটি ভিন্ন স্থাপত্য।",
  recall: {
    q: " OLTP এবং OLAP-এর পার্থক্য কী?",
    qen: "What is the difference between OLTP and OLAP?",
    a: "OLTP = operational, short transactions, INSERT/UPDATE (MySQL app)। OLAP = analytical, large aggregations over millions of rows (data warehouse)।",
    aen: "OLTP = operational, short transactions (MySQL app). OLAP = analytical, large aggregations (data warehouse)."
  },
  story: `<p class="scene-setting">তোমার একটি দোকান। প্রতিদিন হাজার হাজার transaction — বিক্রি, ক্রয়, রিফান্ড। এটি OLTP — fast, short, operational। কিন্তু মাস শেষে তুমি একটি প্রশ্ন করো — "গত ৬ মাসে কোন পণ্য সবচেয়ে বেশি বিক্রি হয়েছে, কোন শাখায়, কোন মাসে?" এটি OLAP — বিশাল query, মিলিয়ন সারি aggregate। OLTP-তে এই query চালালে দোকান আটকে যায়! তাই দরকার একটি পৃথক গুদাম — data warehouse।</p>
<p class="scene-setting en">You have a shop. Thousands of daily transactions — sales, purchases, refunds. This is OLTP — fast, short, operational. But month-end you ask — "Which product sold most in 6 months, which branch, which month?" This is OLAP — massive query, aggregating millions of rows. Running this on OLTP would freeze the shop! So you need a separate warehouse — data warehouse.</p>

<div class="callout info"><span class="co-icon">📊</span><div><strong>OLTP vs OLAP:</strong><br>
<strong>OLTP:</strong> INSERT, UPDATE, DELETE। short, frequent। normalized। row-based। MySQL, PostgreSQL।<br>
<strong>OLAP:</strong> SELECT, aggregate। long, infrequent। denormalized। column-based। Snowflake, BigQuery, Redshift।</div></div>

<div class="callout info"><span class="co-icon">⭐</span><div><strong>Star Schema (Kimball ১৯৯৬):</strong><br>
<center>একটি fact table (বিক্রয়) + একাধিক dimension table (পণ্য, সময়, শাখা)।</center><br>
<strong>Fact Table:</strong> পরিমাপযোগ্য ডেটা — amount, quantity। বিশাল, বিলিয়ন সারি।<br>
<strong>Dimension Table:</strong> context — product_name, month_name, branch_city। ছোট, ধীরে বদলায়।<br>
<strong>Star:</strong> fact কেন্দ্রে, dimension চারপাশে — তারার মতো।</div></div>

<div class="callout info"><span class="co-icon">❄️</span><div><strong>Snowflake Schema:</strong> Star + dimension-ও normalized। বেশি efficient storage কিন্তু বেশি JOIN। Star সহজ, Snowflake কম্প্যাক্ট।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>ETL (Extract, Transform, Load):</strong><br>
<strong>Extract:</strong> OLTP থেকে ডেটা টানো (MySQL → staging)<br>
<strong>Transform:</strong> পরিষ্কার করো, join করো, aggregate করো, denormalize করো<br>
<strong>Load:</strong> data warehouse-এ রাখো (BigQuery, Redshift)<br>
প্রতি রাতে বা real-time (CDC — Change Data Capture)</div></div>

<div class="callout info"><span class="co-icon">📋</span><div><strong>Columnar Storage:</strong><br>
Row-based (OLTP): (id, name, age, city) সারি বাঁচায়। একটি সারি পড়ো → দ্রুত।<br>
Column-based (OLAP): প্রতিটি কলাম আলাদাভাবে বাঁচায়। SUM(age) → শুধু age কলাম পড়ো। মিলিয়ন সারিতেও দ্রুত। কম্প্রেশন ভালো — একই ধরনের ডেটা একসাথে।</div></div>

<div class="verse">إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই এতে বুদ্ধিমানদের জন্য নিদর্শন রয়েছে।" — কুরআন ৩:১৯০</div>

<p class="scene-setting">এই আয়াত বলে — প্রতিটি তথ্যে বুদ্ধিমানদের জন্য নিদর্শন আছে। Data warehouse-ও তেমন — কাঁচামাল (OLTP ডেটা) থেকে অন্তর্দৃষ্টি (analytics) তৈরি। বিলিয়ন ট্রানজেকশন থেকে একটি সত্য: "শীতে কফি বেশি বিক্রি হয়।" এটাই data-থেকে-জ্ঞানের যাত্রা।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> Reporting system — data warehouse এর উপরে। Book ৩৪ (Statistics): A/B testing — analytics data থেকে। LedgerPilot: reporting/dashboard = OLAP queries।</div></div>

<div class="secret-box">📈 <strong>Data Warehouse = জ্ঞানের ভাণ্ডার।</strong> OLTP (operational) থেকে OLAP (analytical) আলাদা। Star schema, columnar storage, ETL pipeline। Inmon-Kimball দুই দর্শন। এখন তুমি সব স্তর জানো — relational model থেকে data warehouse পর্যন্ত। সময় এসেছে সব একত্রিত করার — একটি query-র সম্পূর্ণ যাত্রা।</div>`,
  senior: {
    title: "Data Warehousing এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">OLTP</td><td>operational — INSERT/UPDATE, short, frequent</td></tr>
<tr><td class="hl">OLAP</td><td>analytical — aggregate, long, infrequent</td></tr>
<tr><td class="hl">Star Schema</td><td>Kimball 1996 — fact table + dimension tables</td></tr>
<tr><td class="hl">Snowflake</td><td>Star + normalized dimensions</td></tr>
<tr><td class="hl">ETL</td><td>Extract → Transform → Load</td></tr>
<tr><td class="hl">Columnar</td><td>column-based storage — aggregation-এ সেরা</td></tr>
<tr><td class="hl">Inmon</td><td>top-down — normalized warehouse</td></tr>
<tr><td class="hl">Kimball</td><td>bottom-up — dimensional marts</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🏛️",
  color: "#2dd4bf",
  name: "উপাত্তের গুরু",
  subtitle: "The Synthesis",
  tech: "One Query's Complete Journey — SQL text to result, through parser, optimizer, executor, storage, index, transaction",
  spirit: "তাওহিদ — একত্ব, সব স্তর এক ডাটাবেসের অংশ",
  secret: "তুমি যখন SELECT * FROM users WHERE email = 'test@test.com' লেখো — নয়টি দরজা একসাথে কাজ করে। একটি query-র ভেতর পুরো ডাটাবেস।",
  recall: {
    q: " একটি SQL query-র প্রথম ধাপ কী?",
    qen: "What is the first step of a SQL query?",
    a: "Parse — SQL text কে parse tree-তে রূপান্তর করা হয়। syntax check হয়। তারপর optimizer সেরা plan বেছে নেয়।",
    aen: "Parse — SQL text is converted into a parse tree. Syntax is checked. Then the optimizer selects the best plan."
  },
  story: `<p class="scene-setting">তুমি ব্রাউজারে Django admin-এ লগইন করলে। ব্যাকএন্ডে একটি query ছুটলো: SELECT * FROM users WHERE email = 'admin@test.com'। মাত্র ২ মিলিসেকেন্ড। কিন্তু এই ২ms-এ কী ঘটে? চলো, একটি query-র সম্পূর্ণ যাত্রা দেখি — নয়টি দরজার মধ্য দিয়ে।</p>
<p class="scene-setting en">You log into Django admin. Backend fires a query: SELECT * FROM users WHERE email = 'admin@test.com'. Only 2 milliseconds. But what happens in these 2ms? Let's follow one query's complete journey — through nine doors.</p>

<div class="callout info"><span class="co-icon">📝</span><div><strong>ধাপ ১ — Parse (দরজা ২):</strong><br>
SQL text → parse tree। Syntax check — বানান ঠিক? কমা ঠিক?<br>
SELECT, FROM, WHERE — প্রতিটি keyword চেনা যায়।</div></div>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>ধাপ ২ — Optimize (দরজা ৮):</strong><br>
Optimizer একাধিক plan বিবেচনা করে:<br>
Plan A: full table scan — ১০ লক্ষ সারি → ১০০০ms<br>
Plan B: email index lookup → ৩-৪ tree step → ১ms<br>
Cost: Plan B < Plan A। Plan B বেছে নাও।</div></div>

<div class="callout info"><span class="co-icon">🗂️</span><div><strong>ধাপ ৩ — Index Lookup (দরজা ৩):</strong><br>
email index-এ B-tree traverse। root → internal → leaf। leaf-এ pointer: row ৪৫২৩।</div></div>

<div class="callout info"><span class="co-icon">🔐</span><div><strong>ধাপ ৪ — Transaction Check (দরজা ৪):</strong><br>
এই সারিতে কেউ লিখছে কি? MVCC চেক। যদি অন্য transaction লিখছে — পুরোনো version দেখাও। readers block না।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>ধাপ ৫ — Storage Read (দরজা ১ + ৭):</strong><br>
row ৪৫২৩ ডিস্কের কোথায়? page table দেখো। page ৪২, offset ২৩। OS kernel ডিস্ক থেকে page পড়ে। buffer pool-এ cache করে।</div></div>

<div class="callout info"><span class="co-icon">🌍</span><div><strong>ধাপ ৬ — Distributed Check (দরজা ৭):</strong><br>
যদি sharded database হয় — hash(email) % N → কোন shard? সেই shard-এ query পাঠাও।</div></div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>ধাপ ৭ — Schema Check (দরজা ৫):</strong><br>
result-এ প্রতিটি column সঠিক type? constraint মানা? normalized — একটি tuple, সব attribute সঠিক।</div></div>

<div class="callout info"><span class="co-icon">📤</span><div><strong>ধাপ ৮ — Return Result:</strong><br>
সারি পাওয়া গেছে: (id: ১, email: 'admin@test.com', name: 'Admin', role: 'superuser')। ব্রাউজারে পাঠাও। ব্যবহারকারী লগইন সফল।<br>
<strong>মোট সময়:</strong> ~২ms। ১০ লক্ষ সারির মধ্যে সঠিক সারি খুঁজে বের করা।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">DB subsystems</div></div>
<div class="stat-card"><div class="sc-num">৩-৪</div><div class="sc-label">B-tree steps</div></div>
<div class="stat-card"><div class="sc-num">~২ms</div><div class="sc-label">মোট সময়</div></div>
<div class="stat-card"><div class="sc-num">১০ লক্ষ</div><div class="sc-label">সারি স্ক্যান ছাড়া</div></div>
</div>

<div class="callout info"><span class="co-icon">📡</span><div><strong>একটি query-র দৃষ্টিকোণ থেকে:</strong><br>
তুমি (query) ডাটাবেসে প্রবেশ করো → parser তোমাকে বোঝে → optimizer তোমার রাস্তা ঠিক করে → index তোমাকে দ্রুত নিয়ে যায় → storage থেকে ডেটা আসে → transaction নিশ্চিত করে consistency → result ফিরে যায়। নয়টি দরজা — এক query।</div></div>

<div class="verse">وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তাঁর কাছেই রয়েছে অদৃশ্যের চাবিকাঠি, যা তিনি ছাড়া কেউ জানে না।" — কুরআন ৬:৫৯</div>

<p class="scene-setting">এই আয়াত বলে — আল্লাহর কাছে সব তথ্যের চাবি আছে। ডাটাবেসও তেমন — প্রতিটি তথ্যের একটি চাবি (index) আছে যা দিয়ে সেটি খুঁজে পাওয়া যায়। Codd-এর ১৯৭০ সালের relational model থেকে আজকের distributed, NoSQL, data warehouse — ৫৫ বছরের যাত্রা। এবং তুমি এখন প্রতিটি স্তর বোঝো।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ২ (DSA) — B-tree, hash, heap সব database index-এ ব্যবহৃত। Book ৪ (সিস্টেম ডিজাইন) — database সিস্টেম ডিজাইনের কেন্দ্র। Book ৩৫ (ডিস্ট্রিবিউটেড) — CAP, replication, sharding। Book ৩৭ (Networks) — DB connection protocol। Book ৩৮ (OS) — disk I/O, buffer pool, file system। LedgerPilot MySQL + Ipractus PostgreSQL — প্রতিদিন এই যন্ত্র ব্যবহার করছো।</div></div>

<div class="checklist">
<li>📊 <code>EXPLAIN SELECT ...</code> — query plan দেখো</li>
<li>📊 <code>SHOW INDEX FROM table</code> — index তালিকা</li>
<li>🔍 <code>ANALYZE TABLE table</code> — statistics update</li>
<li>📖 "Designing Data-Intensive Applications" (Kleppmann) — সেরা DB book</li>
<li>🔧 Django: <code>print(queryset.query)</code> — ORM SQL দেখো</li>
<li>🔧 PostgreSQL: <code>pg_stat_statements</code> — slow query analysis</li>
</div>

<div class="secret-box">🏛️ <strong>উপাত্তের ভল্ট = নয়টি দরজার সমষ্টি।</strong> Relational Model (দরজা ১) → SQL (দরজা ২) → Indexing (দরজা ৩) → ACID (দরজা ৪) → Normalization (দরজা ৫) → NoSQL (দরজা ৬) → Distributed (দরজা ৭) → Optimization (দরজা ৮) → Data Warehouse (দরজা ৯)। Codd-এর ১৯৭০ সালের relational model থেকে আজকের distributed, NoSQL, columnar warehouse — ৫৫ বছরের যাত্রা। এবং তুমি এখন প্রতিটি স্তর বোঝো। LedgerPilot MySQL, Ipractus PostgreSQL — এখন তুমি জানো সেগুলোর ভেতরে কী চলছে। এটাই উপাত্তের ভল্ট — সারি থেকে অর্থ, query থেকে জ্ঞান।</div>`,
  senior: {
    title: "One Query's Complete Journey",
    body: `<table class="kv-table"><tr><th>ধাপ</th><th>কী ঘটে</th><th>সাবসিস্টেম</th></tr>
<tr><td class="hl">১. Parse</td><td>SQL → parse tree</td><td>Parser</td></tr>
<tr><td class="hl">২. Optimize</td><td>best plan বেছে নাও</td><td>Optimizer</td></tr>
<tr><td class="hl">৩. Index Lookup</td><td>B-tree traverse</td><td>Index engine</td></tr>
<tr><td class="hl">৪. Transaction</td><td>MVCC visibility check</td><td>Transaction manager</td></tr>
<tr><td class="hl">৫. Storage Read</td><td>page → buffer pool</td><td>Storage engine</td></tr>
<tr><td class="hl">৬. Distributed</td><td>shard routing</td><td>Distribution layer</td></tr>
<tr><td class="hl">৭. Schema</td><td>type + constraint check</td><td>Catalog</td></tr>
<tr><td class="hl">৮. Return</td><td>result → client</td><td>Protocol</td></tr></table>
<p style="margin-top:1rem"><strong>মোট সময়:</strong> ~২ms | <strong>সাবসিস্টেম:</strong> ৯টি | <strong>B-tree steps:</strong> ৩-৪</p>`
  }
});
