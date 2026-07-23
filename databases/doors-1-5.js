const doors = [];

doors.push({
  num: 1,
  icon: "📊",
  color: "#2dd4bf",
  name: "সারির জন্ম",
  subtitle: "The Birth of Tables",
  tech: "Relational Model — Codd (1970), tuples, relations, schemas, primary/foreign keys, mathematical foundation",
  spirit: "কিতাব — সংগঠিত রেকর্ড, প্রতিটি তথ্যের জন্য একটি নির্দিষ্ট স্থান",
  secret: "Relational Model = উপাত্তকে গাণিতিক সম্পর্কে (relation) সাজানো। Codd-এর অন্তর্দৃষ্টি: একটি টেবিল একটি সেট — এবং সেট তত্ত্ব প্রযোজ্য।",
  recall: {
    q: " Relational Model-এ relation কী?",
    qen: "What is a relation in the Relational Model?",
    a: "একটি টেবিল (table) — সারি (tuple/row) এবং কলাম (attribute) দ্বারা গঠিত। গাণিতিকভাবে একটি সেটের সাবসেট।",
    aen: "A table — composed of tuples (rows) and attributes (columns). Mathematically, a subset of a Cartesian product."
  },
  story: `<p class="scene-setting">১৯৭০ সাল। IBM San Jose Research Laboratory। Edgar F. Codd — একজন গণিতজ্ঞ ও কম্পিউটার বিজ্ঞানী — একটি পেপার লিখছেন। তার শিরোনাম: "A Relational Model of Data for Large Shared Data Banks." সেই সময় ডেটা সংরক্ষণ করা হতো hierarchical বা network model-এ — জটিল, অনমনীয়, প্রতিটি কুয়েরির জন্য নির্দিষ্ট পথ জানতে হতো। Codd একটি বিপ্লবী ধারণা দিলেন: ডেটাকে গাণিতিক টেবিল হিসেবে সাজাও। কোনো নির্দিষ্ট পথ নেই — তুমি যা চাও, তা relation থেকে গাণিতিকভাবে বের করে আনো।</p>
<p class="scene-setting en">1970. IBM San Jose Research Laboratory. Edgar F. Codd — a mathematician and computer scientist — is writing a paper. Its title: "A Relational Model of Data for Large Shared Data Banks." At that time, data was stored in hierarchical or network models — complex, rigid, requiring specific paths for each query. Codd gave a revolutionary idea: organize data as mathematical tables. No specific path — extract what you want from the relation mathematically.</p>

<div class="dialogue"><strong>সারি সংগঠক করিম:</strong> Codd একটি গাণিতিক সমীকরণ দেখলেন — ডেটা = relation (সম্পর্ক)। একটি relation হলো একটি সেটের সাবসেট: কয়েকটি attribute-এর Cartesian product-এর অংশ। সহজ ভাষায় — একটি টেবিল। সারি = tuple, কলাম = attribute। প্রতিটি tuple অনন্য (primary key দিয়ে)। টেবিলগুলো পরস্পরের সাথে সম্পর্কিত (foreign key দিয়ে)।</div>
<div class="dialogue en"><strong>Row Organizer Karim:</strong> Codd saw a mathematical equation — data = relation. A relation is a subset of a set: part of the Cartesian product of several attributes. Simply put — a table. Rows = tuples, columns = attributes. Each tuple is unique (via primary key). Tables relate to each other (via foreign keys).</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Relational Model-এর গঠন:</strong><br>
<strong>Relation (Table):</strong> একটি নামধারী টেবিল — যেমন "users"<br>
<strong>Attribute (Column):</strong> প্রতিটি কলামের একটি নাম ও type — name: VARCHAR, age: INT<br>
<strong>Tuple (Row):</strong> একটি সম্পূর্ণ রেকর্ড — (১, "Karim", ২৫)<br>
<strong>Domain:</strong> প্রতিটি attribute-এর গ্রহণযোগ্য মান — age: ০-১৫০<br>
<strong>Schema:</strong> পুরো টেবিলের সংজ্ঞা — কোন কলাম, কোন type</div></div>

<div class="callout info"><span class="co-icon">🔑</span><div><strong>Key Concepts:</strong><br>
<strong>Primary Key:</strong> প্রতিটি tuple-কে অনন্যভাবে চিহ্নিত করে — user_id<br>
<strong>Foreign Key:</strong> অন্য টেবিলের primary key-এর reference — order.user_id → users.user_id<br>
<strong>Candidate Key:</strong> যেকোনো attribute যা অনন্য — email-ও একটি candidate key<br>
<strong>Composite Key:</strong> একাধিক কলাম মিলে একটি key — (first_name, last_name, dob)</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Codd-এর Turing Award:</strong> ১৯৮১ সালে Codd Turing Award পেয়েছিলেন relational model-এর জন্য। তার ধারণা এত শক্তিশালী ছিল যা প্রতিটি modern database-এর ভিত্তি — MySQL, PostgreSQL, Oracle, SQL Server — সবাই Codd-এর relational model ব্যবহার করে। কিন্তু Codd এটাও বলেছিলেন: relational model-এর একটি সমস্যা আছে — যখন উপাত্ত অসংগতিপূর্ণ (inconsistent)। সেই সমাধান আসবে normalization দিয়ে।</div></div>

<div class="verse">وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তাঁর কাছেই রয়েছে অদৃশ্যের চাবিকাঠি, যা তিনি ছাড়া কেউ জানে না।" — কুরআন ৬:৫৯</div>

<p class="scene-setting">এই আয়াত বলে — আল্লাহর কাছে সব তথ্যের চাবি আছে। একটি relational database-ও তেমন — প্রতিটি তথ্যের একটি চাবি (key) আছে যা দিয়ে সেটি খুঁজে পাওয়া যায়। Primary key হলো সেই চাবি — প্রতিটি সারির অনন্য পরিচয়। Codd-এর অন্তর্দৃষ্টি ছিল: যদি প্রতিটি তথ্যের একটি চাবি থাকে, তাহলে যেকোনো তথ্য গাণিতিকভাবে খুঁজে পাওয়া যায়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন) Door ১৬:</strong> Database ও indexing-এর overview শিখেছিলে। এই বই সেই ভিত্তিকে গভীর করে। Book ৩৫ (ডিস্ট্রিবিউটেড): Distributed database — replication, sharding। LedgerPilot: MySQL = relational database, Ipractus: PostgreSQL = relational।</div></div>

<div class="secret-box">📊 <strong>Relational Model = উপাত্তের গাণিতিক সংগঠন।</strong> টেবিল = relation, সারি = tuple, কলাম = attribute। Primary key অনন্যতা দেয়, foreign key সম্পর্ক তৈরি করে। Codd-এর ১৯৭০ সালের ধারণা আজকের প্রতিটি database-এর ভিত্তি। কিন্তু টেবিল তৈরি করা এক জিনিস — তাতে প্রশ্ন করা আরেক জিনিস। সেই ভাষার নাম SQL। সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "Relational Model এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Relation</td><td>একটি টেবিল — tuples ও attributes দ্বারা গঠিত</td></tr>
<tr><td class="hl">Tuple</td><td>একটি সারি (row) — একটি সম্পূর্ণ রেকর্ড</td></tr>
<tr><td class="hl">Attribute</td><td>একটি কলাম (column) — নামধারী type</td></tr>
<tr><td class="hl">Primary Key</td><td>অনন্য চিহ্নকারী — প্রতিটি tuple-কে আলাদা করে</td></tr>
<tr><td class="hl">Foreign Key</td><td>অন্য টেবিলের reference — সম্পর্ক তৈরি করে</td></tr>
<tr><td class="hl">Schema</td><td>ডাটাবেসের কাঠামো — কোন টেবিল, কোন কলাম</td></tr>
<tr><td class="hl">Codd ১৯৭০</td><td>"A Relational Model of Data" — Turing Award ১৯৮১</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "💻",
  color: "#2dd4bf",
  name: "ভাষার স্থপতি",
  subtitle: "The Language Architect",
  tech: "SQL (Chamberlin-Boyce 1974, SEQUEL), CRUD operations, JOINs (inner, left, right, full), GROUP BY, subqueries, aggregates",
  spirit: "কালাম — বাক্য, ডাটাবেসের সাথে কথোপকথনের ভাষা",
  secret: "SQL = ডাটাবেসের সাথে কথা বলার ভাষা। তুমি যা চাও, তা বলো — SQL তা খুঁজে বের করে।",
  recall: {
    q: " INNER JOIN এবং LEFT JOIN-এর পার্থক্য কী?",
    qen: "What is the difference between INNER JOIN and LEFT JOIN?",
    a: "INNER JOIN = শুধু মিল আছে এমন সারি। LEFT JOIN = বাঁ টেবিলের সব সারি + ডানের মিল। মিল না থাকলে NULL।",
    aen: "INNER JOIN = only matching rows. LEFT JOIN = all left rows + matching right. No match = NULL."
  },
  story: `<p class="scene-setting">তুমি একটি গ্রন্থাগারিকের সামনে দাঁড়িয়ে আছো। তুমি বলো — "আমাকে ২০২৩ সালে লেখা সব বই দাও, লেখকের নাম সহ, যাদের দাম ৫০০ টাকার কম।" গ্রন্থাগারিক যদি এই ভাষা বোঝেন, তিনি সেকেন্ডে বই আনবেন। SQL হলো সেই ভাষা — ডাটাবেসের গ্রন্থাগারিকের সাথে কথা বলার ভাষা।</p>
<p class="scene-setting en">You're standing before a librarian. You say — "Give me all books written in 2023, with author names, priced under 500." If the librarian understands this language, they'll bring books in seconds. SQL is that language — the language for talking to the database librarian.</p>

<div class="callout info"><span class="co-icon">💻</span><div><strong>SQL CRUD Operations:</strong><br>
<strong>CREATE:</strong> INSERT INTO users (name, age) VALUES ('Karim', ২৫)<br>
<strong>READ:</strong> SELECT * FROM users WHERE age > ১৮<br>
<strong>UPDATE:</strong> UPDATE users SET age = ২৬ WHERE id = ১<br>
<strong>DELETE:</strong> DELETE FROM users WHERE id = ১</div></div>

<div class="callout info"><span class="co-icon">🔀</span><div><strong>JOIN Types:</strong><br>
<strong>INNER JOIN:</strong> শুধু মিল আছে এমন সারি — users JOIN orders ON users.id = orders.user_id<br>
<strong>LEFT JOIN:</strong> বাঁ টেবিলের সব + ডানে মিল — মিল না থাকলে NULL<br>
<strong>RIGHT JOIN:</strong> ডান টেবিলের সব + বাঁয়ে মিল<br>
<strong>FULL OUTER JOIN:</strong> উভয় টেবিলের সব সারি</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Aggregation & Grouping:</strong><br>
<strong>COUNT(), SUM(), AVG(), MIN(), MAX():</strong> একাধিক সারি থেকে একটি সারাংশ<br>
<strong>GROUP BY:</strong> একটি কলাম অনুসারে গোষ্ঠী করো — GROUP BY department<br>
<strong>HAVING:</strong> GROUP BY-এর পরে filter — HAVING COUNT(*) > ৫<br>
<strong>DISTINCT:</strong> অনন্য মান — SELECT DISTINCT city FROM users</div></div>

<div class="callout info"><span class="co-icon">🔧</span><div><strong>Subqueries:</strong> একটি query-র ভেতরে আরেকটি query।<br>
SELECT name FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > ১০০০)</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ইতিহাস:</strong> SQL তৈরি হয়েছিল ১৯৭৪ সালে Donald Chamberlin এবং Raymond Boyce দ্বারা IBM-এ। প্রথম নাম ছিল SEQUEL। পরে ট্রেডমার্ক সমস্যায় SQL হয়। আজ SQL একটি ANSI/ISO স্ট্যান্ডার্ড — কিন্তু প্রতিটি database (MySQL, PostgreSQL, Oracle) নিজস্ব dialect যোগ করে।</div></div>

<div class="verse">عَلَّمَهُ الْبَيَانَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তিনি তাকে শিখিয়েছেন স্পষ্ট ভাষা।" — কুরআন ৫৫:৪</div>

<p class="scene-setting">এই আয়াত স্পষ্ট ভাষার কথা বলে। SQL হলো ডাটাবেসের সাথে স্পষ্ট ভাষায় কথা বলার মাধ্যম। তুমি যা চাও সঠিকভাবে বলো — SQL সেটি ডাটাবেস থেকে বের করে আনে। এটাই declarative ভাষার শক্তি — তুমি কী চাও বলো, কীভাবে পাবে সেটা ডাটাবেস সামলাবে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>LedgerPilot:</strong> তুমি প্রতিদিন Django ORM ব্যবহার করছো — সেটি আসলে SQL generate করে। User.objects.filter(age__gt=১৮) → SELECT * FROM users WHERE age > ১৮। Book ৪ (সিস্টেম ডিজাইন): Database queries — performance depends on indexing।</div></div>

<div class="secret-box">💻 <strong>SQL = ডাটাবেসের ভাষা।</strong> SELECT পড়ো, INSERT লেখো, UPDATE বদলাও, DELETE মুছো। JOIN দিয়ে টেবিল যোগ করো, GROUP BY দিয়ে সারাংশ তৈরি করো। কিন্তু যখন মিলিয়ন মিলিয়ন সারি থাকে — SELECT * কতটা ধীর? সেই সমাধান আসবে পরের দরজায় — indexing।</div>`,
  senior: {
    title: "SQL এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">SELECT</td><td>ডেটা পড়ো — WHERE, ORDER BY, LIMIT</td></tr>
<tr><td class="hl">INSERT</td><td>নতুন সারি যোগ</td></tr>
<tr><td class="hl">UPDATE</td><td>বিদ্যমান সারি পরিবর্তন</td></tr>
<tr><td class="hl">DELETE</td><td>সারি মুছো</td></tr>
<tr><td class="hl">INNER JOIN</td><td>শুধু মিল আছে এমন সারি</td></tr>
<tr><td class="hl">LEFT JOIN</td><td>বাঁ টেবিলের সব + ডানে মিল</td></tr>
<tr><td class="hl">GROUP BY</td><td>কলাম অনুসারে গোষ্ঠী + aggregate</td></tr>
<tr><td class="hl">Subquery</td><td>query-র ভেতরে query</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🗂️",
  color: "#2dd4bf",
  name: "সূচক নির্মাতা",
  subtitle: "The Index Builder",
  tech: "Indexing — B-tree (Bayer-McCreight 1972), Hash index, composite index, covering index, EXPLAIN, query performance",
  spirit: "হিফয — সংরক্ষণ, তাড়াতাড়ি খুঁজে পাওয়ার জন্য সংগঠিত রাখা",
  secret: "Index = একটি বইয়ের সূচিপত্র। পুরো বই না পড়েই একটি নির্দিষ্ট বিষয় খুঁজে পাওয়া যায়। ডাটাবেসেও তেমন — index ছাড়া পুরো টেবিল পড়তে হয় (slow), index দিয়ে সরাসরি পাওয়া যায় (fast)।",
  recall: {
    q: " B-tree index কেন ব্যবহার হয় hash-এর বদলে?",
    qen: "Why use B-tree index instead of hash?",
    a: "B-tree range query সমর্থন করে (age > ১৮), hash শুধু exact match (id = ৫)। B-tree sorted order রাখে।",
    aen: "B-tree supports range queries (age > 18), hash only exact match (id = 5). B-tree maintains sorted order."
  },
  story: `<p class="scene-setting">তুমি একটি ১০০০ পৃষ্ঠার বই পড়ছো। একটি নির্দিষ্ট বিষয় খুঁজছো — "quantum entanglement।" দুটি উপায়: প্রথম — প্রতিটি পৃষ্ঠা ঘেঁটো (full table scan)। ঘণ্টা লাগবে। দ্বিতীয় — সূচিপত্র দেখো, "quantum" → পৃষ্ঠা ৪২৩। সরাসরি সেখানে যাও (index lookup)। সেকেন্ড। এটাই indexing — ডাটাবেসের সূচিপত্র।</p>
<p class="scene-setting en">You're reading a 1000-page book. Looking for a specific topic — "quantum entanglement." Two ways: first — flip through every page (full table scan). Hours. Second — check the index, "quantum" → page 423. Go directly there (index lookup). Seconds. This is indexing — the database's table of contents.</p>

<div class="callout info"><span class="co-icon">🌳</span><div><strong>B-Tree (Bayer-McCreight ১৯৭২):</strong><br>
সবচেয়ে সাধারণ index type। একটি balanced tree — প্রতিটি leaf node একই গভীরে।<br>
<strong>গঠন:</strong> root → internal nodes → leaf nodes (actual data pointers)<br>
<strong>সুবিধা:</strong> O(log n) lookup, range query সমর্থিত (BETWEEN, >, <)<br>
<strong>ব্যবহার:</strong> MySQL InnoDB, PostgreSQL — সব default index B-tree</div></div>

<div class="callout info"><span class="co-icon">#️⃣</span><div><strong>Hash Index:</strong><br>
একটি hash function দিয়ে key-কে একটি bucket-এ রাখে।<br>
<strong>সুবিধা:</strong> O(1) exact match — id = ৫<br>
<strong>অসুবিধা:</strong> range query সমর্থিত নয় — age > ১৮ কাজ করবে না</div></div>

<div class="callout info"><span class="co-icon">📋</span><div><strong>Index Types:</strong><br>
<strong>Primary Index:</strong> primary key-এর উপর — স্বয়ংক্রিয়ভাবে তৈরি<br>
<strong>Unique Index:</strong> অনন্য মান নিশ্চিত — email<br>
<strong>Composite Index:</strong> একাধিক কলাম — (first_name, last_name)<br>
<strong>Covering Index:</strong> query-র সব কলাম index-এ — table access লাগে না<br>
<strong>Partial Index:</strong> শর্ত সাপেক্ষে — WHERE active = true</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Index-এর মূল্য:</strong> Index = গতি, কিন্তু storage ও write খরচ। প্রতিটি index অতিরিক্ত সংরক্ষণ নেয়। প্রতিটি INSERT/UPDATE/DELETE-এ index-ও update করতে হয়। খুব বেশি index = slow writes। ভারসাম্য দরকার — প্রতিটি index justify করতে হবে।</div></div>

<div class="callout info"><span class="co-icon">🔍</span><div><strong>EXPLAIN — Query Plan:</strong><br>
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com'<br>
ডাটাবেস বলে — "আমি কীভাবে এই query execute করব।" কোন index ব্যবহার হচ্ছে? Full table scan নাকি index lookup? কতটা সারি স্ক্যান করবে? এটাই query optimization-এর প্রথম পদক্ষেপ।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Full Table Scan vs Index Lookup:</strong><br>
<strong>Full Scan:</strong> ১০ লক্ষ সারি পড়ো → ১০০০ms<br>
<strong>Index Lookup:</strong> B-tree traverse → ~৩-৪ ধাপ → ১ms<br>
<strong>১০০০x দ্রুত!</strong></div></div>

<div class="verse">وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং এতে প্রতিযোগীরা প্রতিযোগিতা করুক।" — কুরআন ৮৩:২৬</div>

<p class="scene-setting">এই আয়াত প্রতিযোগিতার কথা বলে। Indexing-ও একটি প্রতিযোগিতা — read speed বনাম write speed, storage বনাম performance। সঠিক index = দ্রুত query। ভুল index = wasted space ও slow writes। সঠিক ভারসাম্য খুঁজে বের করাই DBA-র কাজ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ১৬:</strong> Heap = priority queue — B-tree-এর মতো balanced structure। Book ২ Door ১৫: Binary search — B-tree হলো binary search-এর generalized রূপ। Book ৩৮ (OS) Door ৭: inode = filesystem index।</div></div>

<div class="secret-box">🗂️ <strong>Index = সূচিপত্র।</strong> B-tree (range), Hash (exact), Composite (multi-column)। EXPLAIN দিয়ে দেখো ডাটাবেস কীভাবে query execute করছে। কিন্তু index শুধু read দ্রুত করে। যখন একাধিক ব্যবহারকারী একসাথে লেখে? যখন half-complete transaction থাকে? সেই সমাধান আসবে পরের দরজায় — ACID transactions।</div>`,
  senior: {
    title: "Indexing এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">B-Tree</td><td>Bayer-McCreight ১৯৭২ — balanced, O(log n), range query</td></tr>
<tr><td class="hl">Hash Index</td><td>O(1) exact match, কোনো range নয়</td></tr>
<tr><td class="hl">Primary Index</td><td>Primary key — স্বয়ংক্রিয়</td></tr>
<tr><td class="hl">Composite Index</td><td>একাধিক কলাম — (col1, col2)</td></tr>
<tr><td class="hl">Covering Index</td><td>সব query column index-ে — table access নেই</td></tr>
<tr><td class="hl">EXPLAIN</td><td>query execution plan দেখায়</td></tr>
<tr><td class="hl">মূল্য</td><td>storage + slow writes — ভারসাম্য দরকার</td></tr>
<tr><td class="hl">Full Scan → Index</td><td>১০০০ms → ১ms = ১০০০x দ্রুত</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "🔐",
  color: "#2dd4bf",
  name: "লেনদেন প্রহরী",
  subtitle: "The Transaction Guardian",
  tech: "ACID — Atomicity, Consistency, Isolation, Durability (Haerder-Reuter 1983), COMMIT/ROLLBACK, isolation levels, MVCC, 2PL",
  spirit: "আমানত — আস্থা, লেনদেন নিরাপদে ও সম্পূর্ণভাবে সম্পন্ন",
  secret: "ACID = চারটি প্রতিশ্রুতি। Atomicity: সব বা কিছু না। Consistency: নিয়ম মানা। Isolation: একে অপরের থেকে স্বাধীন। Durability: স্থায়ী।",
  recall: {
    q: " ACID-এর A (Atomicity) কী?",
    qen: "What is the A (Atomicity) in ACID?",
    a: "একটি transaction-এর সব ধাপ সফল হবে, না হবে কিছুই না। অর্ধেক থাকবে না।",
    aen: "All steps of a transaction succeed, or none do. No half-states."
  },
  story: `<p class="scene-setting">তুমি একটি ব্যাংক থেকে টাকা পাঠাচ্ছো — ১০০০ টাকা। দুটি ধাপ: তোমার অ্যাকাউন্ট থেকে ১০০০ কমাও, বন্ধুর অ্যাকাউন্টে ১০০০ বাড়াও। কিন্তু যদি প্রথম ধাপের পরে বিদ্যুৎ যায়? তোমার টাকা কমেছে, বন্ধুর বাড়েনি — টাকা হারিয়ে গেল! এটাই ACID ছাড়া দুঃস্বপ্ন। Atomicity বলে — সব বা কিছু না। যদি সম্পূর্ণ না হয়, পুরোটা বাতিল (rollback)।</p>
<p class="scene-setting en">You're sending money from a bank — 1000 taka. Two steps: deduct 1000 from your account, add 1000 to friend's account. But what if power goes after step one? Your money deducted, friend's not added — money vanished! This is the nightmare without ACID. Atomicity says — all or nothing. If not complete, roll back entirely.</p>

<div class="callout info"><span class="co-icon">🔐</span><div><strong>ACID Properties (Haerder-Reuter ১৯৮৩):</strong><br>
<strong>A — Atomicity:</strong> সব বা কিছু না। COMMIT (সব সফল) বা ROLLBACK (সব বাতিল)। অর্ধেক অবস্থা নেই।<br>
<strong>C — Consistency:</strong> প্রতিটি transaction-এর পরে ডাটাবেস বৈধ অবস্থায় থাকে। constraints, triggers, cascades মানা হয়।<br>
<strong>I — Isolation:</strong> concurrent transactions একে অপরের প্রভাবিত করে না। যেন প্রতিটি একা চলছে।<br>
<strong>D — Durability:</strong> COMMIT হওয়ার পরে কোনো power failure, crash — ডেটা থাকবে। disk-এ write হয়েছে।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Isolation Levels ( weakest → strongest):</strong><br>
<strong>Read Uncommitted:</strong> সবচেয়ে দ্রুত কিন্তু নোংরা — অন্যের uncommitted ডেটা দেখা যায় (dirty read)<br>
<strong>Read Committed:</strong> শুধু committed ডেটা — PostgreSQL/SQL Server default<br>
<strong>Repeatable Read:</strong> একই transaction-এ পড়া ডেটা পরিবর্তন হবে না — MySQL default<br>
<strong>Serializable:</strong> সর্বোচ্চ isolation — যেন একটা সময়ে একটা transaction। ধীরতম।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Concurrency Anomalies:</strong><br>
<strong>Dirty Read:</strong> অন্যের uncommitted ডেটা পড়ছো — সে rollback করলে ভুল ডেটা!<br>
<strong>Non-Repeatable Read:</strong> একই সারি দুইবার পড়লে ভিন্ন মান — অন্য পরিবর্তন করেছে<br>
<strong>Phantom Read:</strong> নতুন সারি হঠাৎ দেখা যায় — অন্য INSERT করেছে<br>
<strong>Lost Update:</strong> দুটি transaction একই সারি বদলায় — একটির পরিবর্তন হারায়</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>MVCC (Multi-Version Concurrency Control):</strong><br>
আধুনিক database-গুলো (PostgreSQL, MySQL InnoDB) MVCC ব্যবহার করে। প্রতিটি transaction ডেটার একটি snapshot দেখে। কেউ লিখছে তবু পড়তে পারো — কারণ পুরোনো version আছে। "readers don't block writers, writers don't block readers।" এটাই PostgreSQL-এর গোপন অস্ত্র।</div></div>

<div class="verse">يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"হে মুমিনরা, তোমরা চুক্তি পূরণ করো।" — কুরআন ৫:১</div>

<p class="scene-setting">এই আয়াত চুক্তি পূরণের নির্দেশ দেয়। ACID হলো ডাটাবেসের চুক্তি — ব্যবহারকারীর সাথে প্রতিশ্রুতি। "তোমার ডেটা নিরাপদ। যদি সমস্যা হয়, সব বাতিল। যদি সফল হয়, চিরকাল থাকবে।" এই চুক্তি পূরণই ACID-এর কাজ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড) Door ৫:</strong> 2PC, Saga pattern — distributed ACID। Book ৪ (সিস্টেম ডিজাইন): Circuit Breaker — transaction failure recovery। LedgerPilot: Django transactions — transaction.atomic() = ACID wrapper।</div></div>

<div class="secret-box">🔐 <strong>ACID = লেনদেনের চার প্রতিশ্রুতি।</strong> Atomicity (সব বা কিছু না), Consistency (বৈধ অবস্থা), Isolation (স্বাধীন), Durability (চিরস্থায়ী)। MVCC দিয়ে concurrent transactions নিরাপদে চলে। কিন্তু ACID শুধু একটি মেশিনে। একাধিক মেশিনে ACID কঠিন — সেটা distributed transaction। সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "ACID Transactions এক নজরে",
    body: `<table class="kv-table"><tr><th>Property</th><th>প্রতিশ্রুতি</th></tr>
<tr><td class="hl">Atomicity</td><td>সব বা কিছু না — COMMIT/ROLLBACK</td></tr>
<tr><td class="hl">Consistency</td><td>constraints মানা — বৈধ অবস্থা</td></tr>
<tr><td class="hl">Isolation</td><td>concurrent transactions স্বাধীন</td></tr>
<tr><td class="hl">Durability</td><td>COMMIT = চিরস্থায়ী — crash-safe</td></tr>
<tr><td class="hl">Read Uncommitted</td><td>দ্রুত, dirty read সম্ভব</td></tr>
<tr><td class="hl">Read Committed</td><td>PostgreSQL/SQL Server default</td></tr>
<tr><td class="hl">Repeatable Read</td><td>MySQL default — stable reads</td></tr>
<tr><td class="hl">Serializable</td><td>সর্বোচ্চ isolation, ধীরতম</td></tr>
<tr><td class="hl">MVCC</td><td>multi-version — readers ও writers একসাথে</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "📐",
  color: "#2dd4bf",
  name: "শুদ্ধতার কারিগর",
  subtitle: "The Purity Craftsman",
  tech: "Normalization — Codd 1971, 1NF, 2NF, 3NF, BCNF (Boyce-Codd), denormalization tradeoffs, functional dependency",
  spirit: "তাযকিয়া — পরিশুদ্ধি, উপাত্ত থেকে অসংগতি ও পুনরাবৃত্তি দূর করা",
  secret: "Normalization = একটি টেবিলকে ভাগ করা যাতে কোনো পুনরাবৃত্তি না থাকে। প্রতিটি তথ্য একবারই সংরক্ষিত।",
  recall: {
    q: " 3NF-এর সংজ্ঞা কী?",
    qen: "What is the definition of 3NF?",
    a: "৩NF: প্রতিটি non-key attribute শুধু primary key-এর উপর নির্ভর করে, অন্য কোনো non-key attribute-এর উপর নয়। No transitive dependency।",
    aen: "3NF: every non-key attribute depends ONLY on the primary key, not on other non-key attributes. No transitive dependency."
  },
  story: `<p class="scene-setting">তোমার একটি টেবিল: (student_id, student_name, course_id, course_name, instructor)। এখানে সমস্যা আছে। "Database 101" কোর্সে ৫০ জন শিক্ষার্থী আছে। প্রতিটি সারিতে "Database 101" এবং "Dr. Ahmed" লেখা আছে — ৫০ বার! যদি Dr. Ahmed-এর নাম বদলাতে হয়, ৫০ সারি update করতে হবে। একটি ভুল হলে inconsistency। এটাই redundancy — একই তথ্য একাধিকবার।</p>
<p class="scene-setting en">You have a table: (student_id, student_name, course_id, course_name, instructor). There's a problem. "Database 101" course has 50 students. Each row has "Database 101" and "Dr. Ahmed" — 50 times! If Dr. Ahmed's name changes, update 50 rows. One mistake = inconsistency. This is redundancy — same information multiple times.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Normal Forms (Codd ১৯৭১):</strong><br>
<strong>1NF (First Normal Form):</strong> প্রতিটি সেল একটি মান (atomic)। কোনো repeating group নেই। list নয়, আলাদা সারি।<br>
<strong>2NF (Second Normal Form):</strong> 1NF + কোনো partial dependency নেই। composite key-এর অংশের উপর নির্ভর নয়।<br>
<strong>3NF (Third Normal Form):</strong> 2NF + কোনো transitive dependency নেই। non-key শুধু primary key-এর উপর নির্ভর করে।<br>
<strong>BCNF (Boyce-Codd Normal Form):</strong> 3NF-এর কঠোর সংস্করণ। প্রতিটি determinant একটি candidate key।</div></div>

<div class="callout info"><span class="co-icon">✂️</span><div><strong>টেবিল ভাগ করা (Decomposition):</strong><br>
আগের টেবিল ভাগ করো:<br>
students (student_id, student_name)<br>
courses (course_id, course_name, instructor)<br>
enrollments (student_id, course_id) — junction table<br>
এখন কোনো redundancy নেই। প্রতিটি তথ্য একবারই সংরক্ষিত। Update সহজ, consistent।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Denormalization (ইচ্ছাকৃত পুনরাবৃত্তি):</strong> কখনো কখনো normalization পর্যাপ্ত নয়। অনেক JOIN = slow query। Read-heavy system-এ ইচ্ছাকৃতভাবে redundancy যোগ করা হয় — denormalization। tradeoff: write complexity বনাম read speed। Data warehouse-গুলো সাধারণত denormalized।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Anomaly Types (সমস্যা যা normalization সমাধান করে):</strong><br>
<strong>Insertion Anomaly:</strong> নতুন course insert করতে চাও, কিন্তু কোনো student নেই — student_id NULL? সমস্যা!<br>
<strong>Update Anomaly:</strong> Dr. Ahmed-এর নাম ৫০ জায়গায় — সব update করতে হবে।<br>
<strong>Deletion Anomaly:</strong> শেষ শিক্ষার্থী delete করলে course-ও মুছে যায়!</div></div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">এই আয়াত আলোর কথা বলে — স্বচ্ছতা। Normalization-ও তেমন — ডেটাকে স্বচ্ছ ও সুসংগঠিত করে। প্রতিটি তথ্য একটি নির্দিষ্ট স্থানে, কোনো পুনরাবৃত্তি নেই। স্বচ্ছতা ও সঙ্গতি — এটাই normalization-এর লক্ষ্য।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> Database schema design — normalization-এর ব্যবহারিক প্রয়োগ। LedgerPilot: Django models — ForeignKey, ManyToMany = normalized relationships।</div></div>

<div class="secret-box">📐 <strong>Normalization = উপাত্তের পরিশুদ্ধি।</strong> 1NF → 2NF → 3NF → BCNF। প্রতিটি ধাপে redundancy কমে, consistency বাড়ে। কিন্তু কখনো খুব বেশি normalization = খুব বেশি JOIN = slow query। সেখানে আসে denormalization। কিন্তু relational database সব সমস্যার সমাধান নয়। কিছু ডেটা relational নয় — documents, graphs, key-value। সেই বিকল্প আসবে পরের দরজায় — NoSQL।</div>`,
  senior: {
    title: "Normalization এক নজরে",
    body: `<table class="kv-table"><tr><th>Normal Form</th><th>নিয়ম</th></tr>
<tr><td class="hl">1NF</td><td>atomic values, no repeating groups</td></tr>
<tr><td class="hl">2NF</td><td>1NF + no partial dependency on composite key</td></tr>
<tr><td class="hl">3NF</td><td>2NF + no transitive dependency</td></tr>
<tr><td class="hl">BCNF</td><td>3NF stricter — every determinant is a candidate key</td></tr>
<tr><td class="hl">Redundancy</td><td>একই তথ্য একাধিকবার — update anomaly</td></tr>
<tr><td class="hl">Decomposition</td><td>বড় টেবিল ভাগ করে ছোট টেবিলে</td></tr>
<tr><td class="hl">Denormalization</td><td>ইচ্ছাকৃত redundancy — read speed জন্য</td></tr></table>`
  }
});
