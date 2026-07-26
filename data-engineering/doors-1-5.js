const doors = [];

doors.push({
  num: 1,
  icon: "🌍",
  color: "#0ea5e9",
  name: "দুই জগতের সীমানা",
  subtitle: "The Boundary of Two Worlds",
  tech: "OLTP vs OLAP — transactional (MySQL, PostgreSQL) vs analytical (Snowflake, BigQuery), row vs columnar storage",
  spirit: "তাফসিল — পৃথকীকরণ, দুই ভিন্ন উদ্দেশ্যের জগত",
  secret: "OLTP খুঁজে বের করে (WHERE id=42), OLAP যোগ করে (SUM...GROUP BY)। একই ডেটা, দুই ভিন্ন রূপ। Row-based OLTP, columnar OLAP।",
  recall: {
    q: " OLTP ও OLAP-এর পার্থক্য কী? Row ও columnar storage-এর পার্থক্য?",
    qen: "What is the difference between OLTP and OLAP? Between row and columnar storage?",
    a: "OLTP = transactional (UPDATE, INSERT) — row-based। OLAP = analytical (SUM, GROUP BY) — columnar। LedgerPilot = OLTP, রিপোর্ট = OLAP।",
    aen: "OLTP = transactional (UPDATE, INSERT) — row-based. OLAP = analytical (SUM, GROUP BY) — columnar. LedgerPilot = OLTP, reports = OLAP."
  },
  story: `<p class="scene-setting">তুমি একটি বিশাল অফিসে দাঁড়িয়ে আছ। বাঁ দিকে একটা ডেস্ক — সেখানে একজন কেরানি প্রতিটা ফাইল দ্রুত খুঁজে বের করে, আপডেট করে, ফের রাখে। এটাই OLTP — Online Transaction Processing। MySQL, PostgreSQL — তোমার LedgerPilot। ডান দিকে একটা বিশাল হল — সেখানে শত শত কেরানি একসাথে সব ফাইল পড়ে, গড় বের করে, রিপোর্ট তৈরি করে। এটাই OLAP — Online Analytical Processing।</p>
<p class="scene-setting en">You stand in a vast office. On the left, a clerk fetches, updates, and files single records rapidly — OLTP. MySQL, PostgreSQL — your LedgerPilot. On the right, hundreds of clerks read ALL files to calculate averages — OLAP. Snowflake, BigQuery.</p>

<div class="dialogue"><strong>দুই-জগত-স্থপতি আব্বাস:</strong> OLTP ও OLAP দুটো ভিন্ন জগত। OLTP-তে তুমি একটি row খুঁজো — WHERE id=42। দ্রুত। Row-based storage — পুরো row একসাথে। কিন্তু SUM(amount) করতে চাইলে প্রতিটি row পড়তে হবে — ধীর! OLAP-তে columnar storage — শুধু amount column পড়ো, বাকি সব স্কিপ। দ্রুত aggregation! এটাই পার্থক্য — row ও columnar।</div>
<div class="dialogue en"><strong>Two-World Architect Abbas:</strong> OLTP and OLAP are different worlds. In OLTP, you find one row — WHERE id=42. Fast. Row-based storage — entire row together. But SUM(amount) means reading every row — slow! In OLAP, columnar storage — read only the amount column, skip everything else. Fast aggregation! This is the difference — row vs columnar.</div>

<div class="code-block">— OLTP vs OLAP দেখো —

  -- OLTP (MySQL / PostgreSQL): Single row
  SELECT * FROM transactions WHERE id = 42;
  -- ⚡ Fast — B-tree index lookup

  UPDATE accounts SET balance = balance - 500
  WHERE id = 'acc_123';
  -- ⚡ Fast — single row update

  -- OLAP (Snowflake / BigQuery): Aggregation
  SELECT category, SUM(amount), COUNT(*)
  FROM transactions
  WHERE date >= '2026-01-01'
  GROUP BY category
  ORDER BY sum DESC;
  -- 🐢 Row-based: প্রতিটি row পড়তে হবে
  -- ⚡ Columnar: শুধু amount + category column

  -- Columnar storage (Parquet):
  -- Row 1: id=1, name=Hasan, amount=5000
  -- Row 2: id=2, name=Rakib, amount=3200
  -- Columnar: [1,2], [Hasan,Rakib], [5000,3200]
  -- SUM(amount) = শুধু [5000,3200] পড়ো — বাকি skip!</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Row vs Columnar:</strong><br>
<strong>Row-based (OLTP):</strong> প্রতিটি row একসাথে সংরক্ষিত। UPDATE দ্রুত। SUM ধীর।<br>
<strong>Columnar (OLAP):</strong> প্রতিটি column আলাদাভাবে। SUM দ্রুত (শুধু সেই column)। UPDATE ধীর।<br>
<strong>Normalization:</strong> OLTP = 3NF (normalized)। OLAP = Star/Snowflake (denormalized)।<br>
<strong>ETL:</strong> OLTP → Extract → Transform → Load → OLAP</div></div>

<div class="verse">وَفِي ذَلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং এটিতে প্রতিযোগীরা প্রতিযোগিতা করুক।" — কুরআন ৮৩:২৬</div>

<p class="scene-setting">তাফসিল — পৃথকীকরণ। OLTP ও OLAP দুটো ভিন্ন উদ্দেশ্য — দুটো আলাদা জগত। একটি লেনদেনের জন্য (fast write), অন্যটি বিশ্লেষণের জন্য (fast read)। উভয়ের নিজস্ব শক্তি। একে অপরের প্রতিযোগী নয় — পরিপূরক।</p>
<p class="scene-setting en">Tafsil — separation. OLTP and OLAP have different purposes — two separate worlds. One for transactions (fast write), the other for analysis (fast read). Each has its own strength. Not competitors — complements.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৯ (Databases) Door ১ (Relational):</strong> normalization ও 3NF শিখেছিলে — OLTP সেই ভিত্তি। Book ৪৪ (Data Engineering) Door ৩: Star Schema = OLAP-এর denormalized কাঠামো।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrDE1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#22d3ee"/></marker></defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
  <text x="290" y="26" text-anchor="middle" fill="#7dd3fc" font-size="13" font-weight="bold">OLTP vs OLAP</text>
  <rect x="20" y="48" width="170" height="160" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="105" y="70" text-anchor="middle" fill="#22d3ee" font-size="11" font-weight="bold">OLTP (Row-based)</text>
  <rect x="35" y="82" width="140" height="16" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
  <text x="42" y="94" fill="#94a3b8" font-size="8">42 | Hasan | 5000</text>
  <rect x="35" y="100" width="140" height="16" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.2"/>
  <text x="42" y="112" fill="#7dd3fc" font-size="8">43 | Rakib | 3200</text>
  <rect x="35" y="118" width="140" height="16" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
  <text x="42" y="130" fill="#94a3b8" font-size="8">44 | Omar  | 7100</text>
  <text x="105" y="158" text-anchor="middle" fill="#4ade80" font-size="9">WHERE id=42</text>
  <text x="105" y="174" text-anchor="middle" fill="#4ade80" font-size="9">single row fast</text>
  <text x="105" y="194" text-anchor="middle" fill="#fbbf24" font-size="9">SUM? read all rows</text>
  <line x1="200" y1="128" x2="380" y2="128" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrDE1)"/>
  <text x="290" y="120" text-anchor="middle" fill="#7dd3fc" font-size="9">ETL</text>
  <rect x="390" y="48" width="170" height="160" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="475" y="70" text-anchor="middle" fill="#22d3ee" font-size="11" font-weight="bold">OLAP (Columnar)</text>
  <rect x="405" y="82" width="42" height="78" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
  <text x="426" y="96" text-anchor="middle" fill="#94a3b8" font-size="8">id</text>
  <text x="426" y="110" text-anchor="middle" fill="#64748b" font-size="7">42</text>
  <text x="426" y="122" text-anchor="middle" fill="#64748b" font-size="7">43</text>
  <rect x="452" y="82" width="60" height="78" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
  <text x="482" y="96" text-anchor="middle" fill="#94a3b8" font-size="8">name</text>
  <text x="482" y="110" text-anchor="middle" fill="#64748b" font-size="7">Hasan</text>
  <text x="482" y="122" text-anchor="middle" fill="#64748b" font-size="7">Rakib</text>
  <rect x="517" y="82" width="38" height="78" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="536" y="96" text-anchor="middle" fill="#22d3ee" font-size="7">amt</text>
  <text x="536" y="110" text-anchor="middle" fill="#7dd3fc" font-size="7">5000</text>
  <text x="536" y="122" text-anchor="middle" fill="#7dd3fc" font-size="7">3200</text>
  <text x="536" y="134" text-anchor="middle" fill="#7dd3fc" font-size="7">7100</text>
  <text x="475" y="182" text-anchor="middle" fill="#4ade80" font-size="9">SUM(amount)?</text>
  <text x="475" y="198" text-anchor="middle" fill="#4ade80" font-size="9">read 1 column only</text>
</svg>
</div>
<div class="svg-caption">OLTP = row-based (এক row দ্রুত), OLAP = columnar (aggregation দ্রুত)। একই ডেটা, দুই রূপ।</div>

<div class="secret-box">🌍 <strong>OLTP = row (transaction), OLAP = columnar (analysis)।</strong> একই ডেটা, দুই রূপ। কিন্তু OLAP-তে ডেটা কীভাবে সাজাবে? সেই কাঠামো — Parquet। পরের দরজায়।</div>`,
  senior: {
    title: "OLTP vs OLAP এক নজরে",
    body: `<table class="kv-table"><tr><th>বৈশিষ্ট্য</th><th>OLTP</th><th>OLAP</th></tr>
<tr><td class="hl">উদ্দেশ্য</td><td>Transaction</td><td>Analysis</td></tr>
<tr><td class="hl">Storage</td><td>Row-based</td><td>Columnar</td></tr>
<tr><td class="hl">Query</td><td>SELECT/UPDATE single</td><td>SUM/GROUP BY</td></tr>
<tr><td class="hl">DB</td><td>MySQL, PostgreSQL</td><td>Snowflake, BigQuery</td></tr>
<tr><td class="hl">Schema</td><td>3NF normalized</td><td>Star denormalized</td></tr>
<tr><td class="hl">Volume</td><td>GB</td><td>TB/PB</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "📦",
  color: "#0ea5e9",
  name: "অনুভূমিক বিপ্লব",
  subtitle: "The Sideways Revolution",
  tech: "Columnar Storage — Parquet (Twitter 2013), ORC, predicate pushdown, compression, vectorized execution",
  spirit: "ইকলাস — সংক্ষিপ্ততা, শুধু প্রয়োজনীয় রাখা",
  secret: "Parquet = columnar file format। শুধু প্রয়োজনীয় column পড়ে — বাকি skip। Predicate pushdown: WHERE condition file-এই apply। ১০x ছোট, ১০x দ্রুত।",
  recall: {
    q: " Parquet কী? Row-based CSV থেকে কেন ভালো?",
    qen: "What is Parquet? Why is it better than row-based CSV?",
    a: "Parquet = columnar format। শুধু প্রয়োজনীয় column পড়ে, বাকি skip। CSV সব column পড়ে। Predicate pushdown: WHERE file-এই filter। Compression ভালো।",
    aen: "Parquet = columnar format. Reads only needed columns, skips rest. CSV reads all columns. Predicate pushdown: filter at file level. Better compression."
  },
  story: `<p class="scene-setting">আব্বাস (Door ১) তোমাকে columnar storage-এর ধারণা দিয়েছেন। এখন দেখো সেই columnar storage-এর বাস্তব রূপ — Parquet। Twitter ২০১৩-এ এটা তৈরি করে। CSV ফাইলে প্রতিটি row একসাথে — কিন্তু Parquet-এ প্রতিটি column আলাদা। শুধু amount দরকার? শুধু amount column পড়ো — বাকি সব স্কিপ। ১০০টি column থেকে ৫টি দরকার? ৯৫% ডেটা না পড়েই কাজ হয়ে যায়!</p>
<p class="scene-setting en">Abbas (Door 1) gave you the concept of columnar storage. Now see its practical form — Parquet. Twitter created it in 2013. In CSV, each row is together — but in Parquet, each column is separate. Only need amount? Read only the amount column — skip everything else. 100 columns, need 5? 95% of data never read!</p>

<div class="dialogue"><strong>বিপ্লব-কারিগর তালহা:</strong> Parquet-এর শক্তি তিনটি: (১) Column pruning — শুধু প্রয়োজনীয় column। (২) Predicate pushdown — WHERE condition file-এই apply হয়, query engine-এ নয়। (৩) Compression — একই column-এ একই ধরনের ডেটা, তাই compression ভালো। dictionary encoding, run-length encoding। CSV-এর তুলনায় ১০x ছোট, ১০x দ্রুত।</div>
<div class="dialogue en"><strong>Revolution Artisan Talha:</strong> Parquet's power is threefold: (1) Column pruning — only needed columns. (2) Predicate pushdown — WHERE condition applied at file level, not query engine. (3) Compression — same type data in same column, so compression works well. Dictionary encoding, run-length encoding. 10x smaller than CSV, 10x faster.</div>

<div class="code-block">— Parquet vs CSV গতি তুলনা —

  import pyarrow.parquet as pq
  import pandas as pd

  # CSV লেখো (১০ মিলিয়ন row)
  df = pd.DataFrame({
      'id': range(10_000_000),
      'name': ['user_' + str(i) for i in range(10_000_000)],
      'amount': [i * 1.5 for i in range(10_000_000)],
  })
  df.to_csv('data.csv', index=False)        # ~250 MB

  # Parquet লেখো
  df.to_parquet('data.parquet')              # ~25 MB! (10x ছোট)

  # শুধু amount column পড়ো:
  csv_read = pd.read_csv('data.csv', usecols=['amount'])
  # ⏰ ৩.২s — সব row পড়ে, শুধু amount রাখে

  parquet_read = pq.read_table('data.parquet',
      columns=['amount']).to_pandas()
  # ⚡ ০.৩s! — শুধু amount column file থেকেই পড়ে

  # Predicate pushdown (DuckDB):
  SELECT SUM(amount) FROM 'data.parquet'
  WHERE amount > 5000000;
  -- file-এই filter — ৯৯% row skip!</div>

<div class="callout info"><span class="co-icon">📦</span><div><strong>Parquet compression techniques:</strong><br>
<strong>Dictionary Encoding:</strong> পুনরাবৃত্ত মান → একটি dictionary। "USD" ১০০০ বার? একটি entry।<br>
<strong>Run-Length Encoding:</strong> একই মান পরপর? ০,০,০,০,০ → RLE: (৫, ০)।<br>
<strong>Snappy/Zstd:</strong> general compression। Zstd = ভালো ratio + দ্রুত।<br>
<strong>Predicate Pushdown:</strong> WHERE condition file-এই apply — row না পড়েই filter।</div></div>

<div class="verse">وَمَا تَفْرُغُ مِن شَيْءٍ إِلَّا بِعِلْمٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তুমি কিছুই শূন্য করো না জ্ঞান ছাড়া।" — কুরআন ৬:৫৯ (প্যারাফ্রেজ)</div>

<p class="scene-setting">ইকলাস — সংক্ষিপ্ততা, শুধু প্রয়োজনীয় রাখা। Parquet সেই সংক্ষিপ্ততার রূপ — শুধু প্রয়োজনীয় column, বাকি স্কিপ। Compression দিয়ে ছোট, predicate pushdown দিয়ে দ্রুত। ডেটা ইঞ্জিনিয়ারিং-এ সবচেয়ে গুরুত্বপূর্ণ file format।</p>
<p class="scene-setting en">Ikhlas — conciseness, keeping only what's needed. Parquet is the form of that conciseness — only needed columns, skip the rest. Compression makes it small, predicate pushdown makes it fast. The most important file format in data engineering.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৯ (Databases) Door ৬ (Indexing):</strong> B-tree index ও columnar storage — ভিন্ন কিন্তু সম্পর্কিত। Book ৪৪ Door ৩: Star Schema = Parquet-এ সাজানো ডেটা।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
  <text x="290" y="26" text-anchor="middle" fill="#7dd3fc" font-size="13" font-weight="bold">CSV (Row) vs Parquet (Columnar)</text>
  <rect x="20" y="48" width="230" height="170" rx="8" fill="#1e3a5f" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="135" y="68" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">CSV — 250 MB</text>
  <rect x="35" y="80" width="200" height="14" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
  <text x="42" y="91" fill="#94a3b8" font-size="7">42,Hasan,5000</text>
  <rect x="35" y="96" width="200" height="14" fill="#1e3a5f" stroke="#475569" stroke-width="0.5"/>
  <text x="42" y="107" fill="#94a3b8" font-size="7">43,Rakib,3200</text>
  <rect x="35" y="112" width="200" height="14" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
  <text x="42" y="123" fill="#94a3b8" font-size="7">44,Omar,7100</text>
  <text x="135" y="150" text-anchor="middle" fill="#fbbf24" font-size="9">read amount?</text>
  <text x="135" y="166" text-anchor="middle" fill="#fbbf24" font-size="9">ALL columns parsed</text>
  <text x="135" y="186" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">3.2s</text>
  <text x="135" y="202" text-anchor="middle" fill="#64748b" font-size="8">10M rows</text>
  <rect x="330" y="48" width="230" height="170" rx="8" fill="#1e3a5f" stroke="#4ade80" stroke-width="1.5"/>
  <text x="445" y="68" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">Parquet — 25 MB</text>
  <rect x="345" y="80" width="55" height="60" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
  <text x="372" y="94" text-anchor="middle" fill="#94a3b8" font-size="7">id</text>
  <rect x="405" y="80" width="70" height="60" fill="#0f172a" stroke="#475569" stroke-width="0.5"/>
  <text x="440" y="94" text-anchor="middle" fill="#94a3b8" font-size="7">name</text>
  <rect x="480" y="80" width="65" height="60" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="512" y="94" text-anchor="middle" fill="#22d3ee" font-size="7">amount</text>
  <text x="512" y="108" text-anchor="middle" fill="#7dd3fc" font-size="7">5000</text>
  <text x="512" y="120" text-anchor="middle" fill="#7dd3fc" font-size="7">3200</text>
  <text x="512" y="132" text-anchor="middle" fill="#7dd3fc" font-size="7">7100</text>
  <text x="445" y="158" text-anchor="middle" fill="#4ade80" font-size="9">read amount?</text>
  <text x="445" y="174" text-anchor="middle" fill="#4ade80" font-size="9">1 column, skip rest</text>
  <text x="445" y="194" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">0.3s</text>
  <text x="445" y="208" text-anchor="middle" fill="#64748b" font-size="8">predicate pushdown</text>
</svg>
</div>
<div class="svg-caption">Parquet = columnar। শুধু প্রয়োজনীয় column পড়ে, বাকি skip — ১০x ছোট, ১০x দ্রুত।</div>

<div class="secret-box">📦 <strong>Parquet = columnar, compressed, fast।</strong> কিন্তু ডেটা কীভাবে সাজাবে যাতে বিশ্লেষণ সহজ হয়? Star Schema — সেই কাঠামো। পরের দরজায়।</div>`,
  senior: {
    title: "Columnar Storage এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Parquet (2013)</td><td>Twitter — columnar format</td></tr>
<tr><td class="hl">Column Pruning</td><td>শুধু প্রয়োজনীয় column পড়ো</td></tr>
<tr><td class="hl">Predicate Pushdown</td><td>WHERE file-এই filter</td></tr>
<tr><td class="hl">Dictionary Encoding</td><td>পুনরাবৃত্ত মান → dictionary</td></tr>
<tr><td class="hl">Compression</td><td>Snappy / Zstd</td></tr>
<tr><td class="hl">10x</td><td>CSV থেকে ছোট ও দ্রুত</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "⭐",
  color: "#0ea5e9",
  name: "নক্ষত্র মানচিত্র",
  subtitle: "The Star Map",
  tech: "Star Schema & Snowflake Schema — fact table, dimension tables, Kimball (1996), denormalization for analytics",
  spirit: "নাজম — নক্ষত্র, কেন্দ্রে সত্য ও চারপাশে বিবরণ",
  secret: "Star Schema: কেন্দ্রে fact table (লেনদেন), চারপাশে dimension table (বিবরণ)। তারার মতো আকৃতি। Kimball (১৯৯৬) — analytics-এর জন্য denormalized কাঠামো।",
  recall: {
    q: " Star Schema কী? Fact ও Dimension table-এর পার্থক্য?",
    qen: "What is a Star Schema? What is the difference between Fact and Dimension tables?",
    a: "Fact = সংখ্যাসূচক ডেটা (amount, quantity)। Dimension = বর্ণনামূলক (category, date, user)। Star: fact কেন্দ্রে, dimension চারপাশে।",
    aen: "Fact = numerical data (amount, quantity). Dimension = descriptive (category, date, user). Star: fact at center, dimensions around."
  },
  story: `<p class="scene-setting">তালহা (Door ২) তোমাকে Parquet শিখিয়েছেন। এখন সেই Parquet-এ ডেটা কীভাবে সাজাবে? Ralph Kimball ১৯৯৬ সালে একটি সুন্দর কাঠামো দিলেন — Star Schema। কেন্দ্রে একটি fact table — লেনদেনের সংখ্যা (amount, quantity)। চারপাশে dimension table — বিবরণ (কে, কখন, কোথায়, কী)। তারার আকৃতি। এক দৃষ্টিতে সব বোঝা যায়।</p>
<p class="scene-setting en">Talha (Door 2) taught you Parquet. Now how to organize data in that Parquet? Ralph Kimball in 1996 gave a beautiful structure — Star Schema. At the center, a fact table — transaction numbers (amount, quantity). Around it, dimension tables — descriptions (who, when, where, what). Star shape. Everything visible at a glance.</p>

<div class="dialogue"><strong>নক্ষত্র-মানচিত্রকার আয়েশা:</strong> Fact table-এ শুধু সংখ্যা ও foreign key। প্রতিটি transaction: amount=৫০০, user_id=৪২, category_id=৭, date_id=৩৬৫। Dimension table-এ বিবরণ: user_id=৪২ → name=Ali, city=Detroit। category_id=৭ → name=Food। date_id=৩৬৫ → ২০২৬-১২-৩১। JOIN করলে সব একসাথে। এটাই Star — কেন্দ্র থেকে শাখা। Snowflake = Star কিন্তু dimension-ও normalized।</div>
<div class="dialogue en"><strong>Star Cartographer Ayesha:</strong> Fact table has only numbers and foreign keys. Each transaction: amount=500, user_id=42, category_id=7, date_id=365. Dimension tables have descriptions: user_id=42 → name=Ali, city=Detroit. category_id=7 → name=Food. JOIN brings everything together. This is Star — center to branches. Snowflake = Star but dimensions also normalized.</div>

<div class="code-block">— Star Schema SQL —

  -- Fact table (কেন্দ্র)
  CREATE TABLE fact_transactions (
      transaction_id INT,
      user_key INT,         -- FK → dim_user
      category_key INT,     -- FK → dim_category
      date_key INT,         -- FK → dim_date
      amount DECIMAL(10,2),
      quantity INT
  );

  -- Dimension tables (চারপাশ)
  CREATE TABLE dim_user (
      user_key INT PRIMARY KEY,
      name VARCHAR,
      city VARCHAR,
      signup_date DATE
  );

  CREATE TABLE dim_category (
      category_key INT PRIMARY KEY,
      name VARCHAR,         -- 'Food', 'Transport'
      parent_category VARCHAR
  );

  CREATE TABLE dim_date (
      date_key INT PRIMARY KEY,  -- 20261231
      date_actual DATE,
      month VARCHAR,             -- 'December'
      quarter INT,               -- 4
      is_weekend BOOLEAN
  );

  -- Star JOIN — সব একসাথে:
  SELECT u.city, c.name, SUM(f.amount)
  FROM fact_transactions f
  JOIN dim_user u ON f.user_key = u.user_key
  JOIN dim_category c ON f.category_key = c.category_key
  JOIN dim_date d ON f.date_key = d.date_key
  WHERE d.quarter = 4
  GROUP BY u.city, c.name;
  -- ⚡ Columnar + Star = দ্রুত!</div>

<div class="callout info"><span class="co-icon">⭐</span><div><strong>Star vs Snowflake:</strong><br>
<strong>Star:</strong> Fact কেন্দ্রে, dimension চারপাশে — denormalized। JOIN কম, দ্রুত।<br>
<strong>Snowflake:</strong> Dimension-ও normalized (city → city_key → dim_city)। JOIN বেশি, কিন্তু storage কম।<br>
<strong>Kimball (1996):</strong> Star prefer করো — analytics-এ JOIN কম = দ্রুত।<br>
<strong>Slowly Changing Dimension (SCD):</strong> dimension বদলালে? Type 1 (overwrite), Type 2 (new row)।</div></div>

<div class="verse">وَالنَّجْمِ إِذَا هَوَى</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"শপথ নক্ষত্রের যখন তা অস্তমিত হয়।" — কুরআন ৫৩:১</div>

<p class="scene-setting">নাজম — নক্ষত্র। Star Schema সেই নক্ষত্রের কাঠামো — কেন্দ্রে fact (সত্য), চারপাশে dimension (বিবরণ)। নক্ষত্রের আকৃতিতে সাজানো — সহজ বোঝা, দ্রুত query। Kimball-এর দৃষ্টি — ডেটাকে তারার মতো সাজাও।</p>
<p class="scene-setting en">Najm — star. Star Schema is the structure of that star — fact (truth) at center, dimensions (descriptions) around. Arranged in star shape — easy understanding, fast queries. Kimball's vision — organize data like a star.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৯ (Databases) Door ২ (SQL):</strong> JOIN ও normalization শিখেছিলে — Star Schema সেই ধারণার বিপরীত (denormalized)। Book ৪৪ Door ১: OLTP normalized, OLAP denormalized।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrDE3" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#22d3ee"/></marker></defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
  <text x="290" y="24" text-anchor="middle" fill="#7dd3fc" font-size="13" font-weight="bold">Star Schema (Kimball 1996)</text>
  <rect x="235" y="100" width="110" height="50" rx="8" fill="#1e3a5f" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="120" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">FACT</text>
  <text x="290" y="135" text-anchor="middle" fill="#fcd34d" font-size="8">transactions</text>
  <text x="290" y="146" text-anchor="middle" fill="#94a3b8" font-size="7">amount, qty</text>
  <rect x="50" y="50" width="100" height="38" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="100" y="68" text-anchor="middle" fill="#22d3ee" font-size="9" font-weight="bold">dim_user</text>
  <text x="100" y="80" text-anchor="middle" fill="#7dd3fc" font-size="7">name, city</text>
  <rect x="430" y="50" width="100" height="38" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="480" y="68" text-anchor="middle" fill="#22d3ee" font-size="9" font-weight="bold">dim_category</text>
  <text x="480" y="80" text-anchor="middle" fill="#7dd3fc" font-size="7">Food, Transport</text>
  <rect x="50" y="160" width="100" height="38" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="100" y="178" text-anchor="middle" fill="#22d3ee" font-size="9" font-weight="bold">dim_date</text>
  <text x="100" y="190" text-anchor="middle" fill="#7dd3fc" font-size="7">month, quarter</text>
  <rect x="430" y="160" width="100" height="38" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="480" y="178" text-anchor="middle" fill="#22d3ee" font-size="9" font-weight="bold">dim_store</text>
  <text x="480" y="190" text-anchor="middle" fill="#7dd3fc" font-size="7">location</text>
  <line x1="150" y1="69" x2="235" y2="110" stroke="#22d3ee" stroke-width="1.2" marker-end="url(#arrDE3)"/>
  <line x1="430" y1="69" x2="345" y2="110" stroke="#22d3ee" stroke-width="1.2" marker-end="url(#arrDE3)"/>
  <line x1="150" y1="179" x2="235" y2="140" stroke="#22d3ee" stroke-width="1.2" marker-end="url(#arrDE3)"/>
  <line x1="430" y1="179" x2="345" y2="140" stroke="#22d3ee" stroke-width="1.2" marker-end="url(#arrDE3)"/>
  <text x="290" y="230" text-anchor="middle" fill="#64748b" font-size="8">কেন্দ্রে fact (সংখ্যা), চারপাশে dimension (বিবরণ) — denormalized</text>
</svg>
</div>
<div class="svg-caption">Star Schema — কেন্দ্রে fact table, চারপাশে dimension। JOIN কম, analytics দ্রুত।</div>

<div class="secret-box">⭐ <strong>Star Schema = fact কেন্দ্রে, dimension চারপাশে।</strong> কিন্তু ডেটা বিশাল হলে — এক মেশিনে চলবে না। কোটি কোটি row? Distributed processing দরকার। সেই ইঞ্জিন — Spark। পরের দরজায়।</div>`,
  senior: {
    title: "Star Schema এক নজরে",
    body: `<table class="kv-table"><tr><th>উপাদান</th><th>কী</th></tr>
<tr><td class="hl">Fact Table</td><td>সংখ্যা + foreign key (কেন্দ্র)</td></tr>
<tr><td class="hl">Dimension</td><td>বর্ণনা (user, category, date)</td></tr>
<tr><td class="hl">Kimball (1996)</td><td>The Data Warehouse Toolkit</td></tr>
<tr><td class="hl">Star</td><td>Denormalized — JOIN কম, দ্রুত</td></tr>
<tr><td class="hl">Snowflake</td><td>Normalized dimension — storage কম</td></tr>
<tr><td class="hl">SCD</td><td>Slowly Changing Dimension</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "⚡",
  color: "#0ea5e9",
  name: "অলস স্থপতি",
  subtitle: "The Lazy Architect",
  tech: "Apache Spark — RDD, DataFrame, lazy evaluation, DAG, Catalyst optimizer, Zaharia 2010 (UC Berkeley)",
  spirit: "আনা — বিলম্ব, শেষ মুহূর্ত পর্যন্ত অপেক্ষা",
  secret: "Spark = lazy evaluation। transform করা হয় না যতক্ষণ action না হয়। filter→join→groupBy শুধু DAG তৈরি করে — কোনো কাজ হয় না! collect() বা write() action হলে সব একসাথে হয়।",
  recall: {
    q: " Spark-এর lazy evaluation কী? Transform ও action-এর পার্থক্য?",
    qen: "What is Spark's lazy evaluation? Difference between transform and action?",
    a: "Transform (filter, join, groupBy) = DAG তৈরি, কোনো কাজ হয় না। Action (collect, write, count) = সব কাজ একসাথে হয়। Catalyst optimizer পুরো plan optimize করে।",
    aen: "Transform (filter, join, groupBy) = builds DAG, no work done. Action (collect, write, count) = all work done together. Catalyst optimizer optimizes entire plan."
  },
  story: `<p class="scene-setting">আয়েশা (Door ৩) তোমাকে Star Schema শিখিয়েছেন। কিন্তু ডেটা বিশাল — কোটি কোটি row। এক মেশিনে চলবে না। Matei Zaharia ২০১০ সালে UC Berkeley-তে একটি ইঞ্জিন তৈরি করলেন — Spark। এর সবচেয়ে বড় জাদু? Lazy evaluation। transform করা হয় না — শুধু plan তৈরি হয়। action হলে সব একসাথে optimize হয়ে চলে।</p>
<p class="scene-setting en">Ayesha (Door 3) taught you Star Schema. But data is massive — billions of rows. One machine won't work. Matei Zaharia in 2010 at UC Berkeley built an engine — Spark. Its biggest magic? Lazy evaluation. Transforms don't execute — only a plan is built. When action comes, everything is optimized and runs together.</p>

<div class="dialogue"><strong>অলস-স্থপতি জাইদ:</strong> আমি অলস — ইচ্ছাকৃতভাবে! filter করলে কোনো কাজ হয় না — শুধু DAG (Directed Acyclic Graph) একটি node যোগ হয়। join করলে আরেকটি node। groupBy আরেকটি। সব শুধু plan। তারপর action হলে — collect() বা write() — Catalyst optimizer পুরো plan দেখে, optimize করে, একসাথে চালায়। কম ডেটা shuffle, কম memory, বেশি দ্রুত।</div>
<div class="dialogue en"><strong>Lazy Architect Zaid:</strong> I'm lazy — intentionally! filter does nothing — just adds a DAG node. join adds another. groupBy another. All just a plan. Then action — collect() or write() — Catalyst optimizer sees the entire plan, optimizes, runs together. Less data shuffle, less memory, more speed.</div>

<div class="code-block">— PySpark: Lazy Evaluation —

  from pyspark.sql import SparkSession
  spark = SparkSession.builder.appName("demo").getOrCreate()

  df = spark.read.parquet("transactions.parquet")

  # TRANSFORMS — কোনো কাজ হয় না! শুধু DAG:
  filtered = df.filter(df.amount > 100)
  joined = filtered.join(dim_user, "user_key")
  grouped = joined.groupBy("city").sum("amount")
  sorted = grouped.orderBy("sum(amount)", ascending=False)

  # এখনও কোনো কাজ হয় নি! শুধু plan:
  sorted.explain()
  # == Optimized Logical Plan ==
  # Aggregate [city], [sum(amount)]
  #   Join user_key
  #     Filter amount > 100
  #       Relation transactions.parquet

  # ACTION — এখন সব কাজ হয়:
  result = sorted.collect()    # ⚡ সব একসাথে!
  # অথবা:
  sorted.write.parquet("output/")

  — DAG: filter → join → groupBy → sort → action —
  — Catalyst: পুরো plan optimize করে —</div>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>Spark উপাদান:</strong><br>
<strong>RDD:</strong> Resilient Distributed Dataset — fault-tolerant<br>
<strong>DataFrame:</strong> RDD + schema (SQL-like API)<br>
<strong>Catalyst Optimizer:</strong> logical → physical plan optimization<br>
<strong>Tungsten:</strong> memory management + code generation<br>
<strong>DAG:</strong> Directed Acyclic Graph — execution plan<br>
<strong>Driver:</strong> task schedule করে, Executor: কাজ করে</div></div>

<div class="verse">إِنَّ مَعَ الْعُسْرِ يُسْرًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই কষ্টের সাথে রয়েছে স্বস্তি।" — কুরআন ৯৪:৬</div>

<p class="scene-setting">আনা — বিলম্ব, শেষ মুহূর্ত পর্যন্ত অপেক্ষা। Spark-এর lazy evaluation সেই বিলম্বের শক্তি — সব তথ্য জোড়া লাগানোর পর optimize করে চালায়। অলস মনে হয় কিন্তু সবচেয়ে বুদ্ধিমান — কারণ পুরো দৃশ্য দেখে সিদ্ধান্ত নেয়। বিলম্ব থেকে দ্রুততা।</p>
<p class="scene-setting en">Ana — delay, waiting until the last moment. Spark's lazy evaluation is the power of that delay — it gathers all information, then optimizes and runs. Seems lazy but it's the wisest — because it sees the whole picture before deciding. From delay comes speed.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৮ (Discrete Math) Door ৭ (Graphs):</strong> DAG = Directed Acyclic Graph! Spark execution plan = DAG। Book ৩৫ (Distributed Systems) Door ৬: MapReduce → Spark বিবর্তন।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrDE4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#22d3ee"/></marker></defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
  <text x="290" y="26" text-anchor="middle" fill="#7dd3fc" font-size="13" font-weight="bold">Spark DAG — Lazy Evaluation</text>
  <rect x="20" y="105" width="80" height="40" rx="6" fill="#1e3a5f" stroke="#4ade80" stroke-width="1.5"/>
  <text x="60" y="122" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">read</text>
  <text x="60" y="135" text-anchor="middle" fill="#94a3b8" font-size="7">parquet</text>
  <rect x="130" y="105" width="80" height="40" rx="6" fill="#1e3a5f" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="170" y="122" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">filter</text>
  <text x="170" y="135" text-anchor="middle" fill="#94a3b8" font-size="7">transform</text>
  <rect x="240" y="105" width="80" height="40" rx="6" fill="#1e3a5f" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="280" y="122" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">join</text>
  <text x="280" y="135" text-anchor="middle" fill="#94a3b8" font-size="7">transform</text>
  <rect x="350" y="105" width="80" height="40" rx="6" fill="#1e3a5f" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="390" y="122" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">groupBy</text>
  <text x="390" y="135" text-anchor="middle" fill="#94a3b8" font-size="7">transform</text>
  <rect x="465" y="100" width="90" height="50" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="510" y="120" text-anchor="middle" fill="#22d3ee" font-size="9" font-weight="bold">collect()</text>
  <text x="510" y="135" text-anchor="middle" fill="#7dd3fc" font-size="8">ACTION!</text>
  <line x1="100" y1="125" x2="128" y2="125" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrDE4)"/>
  <line x1="210" y1="125" x2="238" y2="125" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrDE4)"/>
  <line x1="320" y1="125" x2="348" y2="125" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrDE4)"/>
  <line x1="430" y1="125" x2="463" y2="125" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrDE4)"/>
  <text x="170" y="95" text-anchor="middle" fill="#64748b" font-size="7">DAG node only</text>
  <text x="390" y="95" text-anchor="middle" fill="#64748b" font-size="7">no work yet</text>
  <text x="510" y="90" text-anchor="middle" fill="#22d3ee" font-size="8">Catalyst</text>
  <text x="510" y="170" text-anchor="middle" fill="#7dd3fc" font-size="8">optimizes all</text>
  <text x="290" y="205" text-anchor="middle" fill="#94a3b8" font-size="9">filter then join then groupBy = শুধু plan তৈরি</text>
  <text x="290" y="222" text-anchor="middle" fill="#4ade80" font-size="9">collect()/write() হলে সব একসাথে optimize হয়ে চলে</text>
</svg>
</div>
<div class="svg-caption">Spark lazy evaluation — transform শুধু DAG তৈরি করে, action হলে Catalyst সব একসাথে চালায়।</div>

<div class="secret-box">⚡ <strong>Spark = lazy evaluation + DAG + Catalyst।</strong> বিশাল ডেটা দ্রুত। কিন্তু একটি সমস্যা — shuffle। কোটি কোটি row-এর মধ্যে join করতে হলে ডেটা মেশিনে মেশিনে যায়। সেই যাত্রা — shuffle। পরের দরজায়।</div>`,
  senior: {
    title: "Apache Spark এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Zaharia (2010)</td><td>UC Berkeley — Spark</td></tr>
<tr><td class="hl">Lazy Eval</td><td>transform → DAG, action → execute</td></tr>
<tr><td class="hl">Catalyst</td><td>logical → physical plan optimization</td></tr>
<tr><td class="hl">DataFrame</td><td>RDD + schema — SQL API</td></tr>
<tr><td class="hl">Driver/Executor</td><td>schedule ও execute</td></tr>
<tr><td class="hl">Tungsten</td><td>memory management + codegen</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "🔀",
  color: "#0ea5e9",
  name: "মহান শাফল",
  subtitle: "The Great Shuffle",
  tech: "Spark Shuffle & Skew — partitioning, broadcast join, salting, data skew, repartition, coalesce",
  spirit: "কাসরা — বিভাজন, সঠিক ভাগে সঠিক পরিমাণ",
  secret: "Shuffle = ডেটা মেশিনে মেশিনে স্থানান্তর। সবচেয়ে ব্যয়বহুল operation! Broadcast join: ছোট table সব মেশিনে পাঠাও। Salting: একটি key-তে কোটি row হলে ভাগ করো।",
  recall: {
    q: " Shuffle কী? Broadcast join কীভাবে shuffle কমায়?",
    qen: "What is shuffle? How does broadcast join reduce shuffle?",
    a: "Shuffle = ডেটা মেশিনে মেশিনে transfer — সবচেয়ে ব্যয়বহুল। Broadcast join: ছোট table (< ১০MB) সব executor-এ পাঠাও → shuffle লাগে না।",
    aen: "Shuffle = data transfer between machines — most expensive. Broadcast join: small table (<10MB) sent to all executors → no shuffle needed."
  },
  story: `<p class="scene-setting">জাইদ (Door ৪) তোমাকে Spark শিখিয়েছেন। কিন্তু একটি সমস্যা — shuffle। JOIN বা GROUP BY করতে হলে ডেটা মেশিনে মেশিনে যেতে হয়। এটাই shuffle — সবচেয়ে ব্যয়বহুল operation। নেটওয়ার্কে কোটি কোটি row পাঠানো! কিন্তু একটি কৌশল — broadcast join। ছোট table সব মেশিনে আগেই পাঠাও। তাহলে shuffle লাগে না।</p>
<p class="scene-setting en">Zaid (Door 4) taught you Spark. But a problem — shuffle. JOIN or GROUP BY requires data moving between machines. This is shuffle — the most expensive operation. Sending billions of rows over the network! But a trick — broadcast join. Send the small table to all machines first. Then no shuffle needed.</p>

<div class="dialogue"><strong>বিভাজন-কারিগর খালিদ:</strong> Data skew — সবচেয়ে বড় সমস্যা। একটি key-তে কোটি row, অন্যগুলোতে শত। সেই এক executor-এ কোটি row — ধীর! সমাধান: salting। key-তে একটি এলোমেলো সংখ্যা যোগ করো — key_0, key_1, key_2। এখন সমানভাবে ভাগ। আর broadcast join: dim_user table (< ১০MB) সব মেশিনে পাঠাও — fact table shuffle হয় না।</div>
<div class="dialogue en"><strong>Partitioning Artisan Khalid:</strong> Data skew — the biggest problem. One key has a billion rows, others have hundreds. That one executor gets a billion — slow! Solution: salting. Add a random number to the key — key_0, key_1, key_2. Now evenly distributed. And broadcast join: send dim_user table (<10MB) to all machines — fact table doesn't shuffle.</div>

<div class="code-block">— PySpark: Shuffle ও Skew —

  from pyspark.sql.functions import broadcast, col, rand, concat, lit

  # ❌ BROADCAST JOIN ছাড়া — shuffle হয়!
  result = big_fact.join(dim_user, "user_key")
  # fact (১০০ GB) shuffle হয় নেটওয়ার্কে!

  # ✅ BROADCAST JOIN — shuffle নেই!
  result = big_fact.join(broadcast(dim_user), "user_key")
  # dim_user (৫ MB) সব executor-এ → fact shuffle হয় না!

  # Data Skew — এক key-তে কোটি row:
  # user_key=42 তে ৯০% row!

  # Salting — key ভাগ করো:
  fact_salted = big_fact.withColumn(
      "salted_key",
      concat(col("user_key"),
             lit("_"),
             (rand() * 10).cast("int"))
  )
  # user_key_42_0 ... user_key_42_9 — ১০ ভাগ!

  dim_exploded = dim_user.withColumn(
      "salted_key",
      concat(col("user_key"),
             lit("_"),
             lit("0"))  # সব salt version
  ).crossJoin(spark.range(10))

  # এখন join — সমানভাবে ভাগ!
  result = fact_salted.join(dim_exploded, "salted_key")

  — Repartition: partition সংখ্যা বদলাও —
  — Coalesce: partition কমাও (shuffle ছাড়া) —</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Data Skew Detection:</strong> যদি এক executor ৯০% সময় নেয় আর বাকি তাড়াতাড়ি শেষ করে — skew! Spark UI-তে task duration দেখো। এক task অনেক বেশি সময়? সেই partition-এ অতিরিক্ত ডেটা। Salting দিয়ে ভাগ করো।</div></div>

<div class="verse">وَقُطُوعٍ مِّنَ اللَّيْلِ فَسَلَّمٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং রাতের কিছু অংশে সালাম।" — কুরআন ২৫:৬৪ (প্যারাফ্রেজ: সঠিক বিভাজন)</div>

<p class="scene-setting">কাসরা — বিভাজন। Shuffle ও partition সেই বিভাজনের রূপ — সঠিক ভাগে সঠিক পরিমাণ। Skew হলে এক ভাগে অতিরিক্ত — অসুস্থতা। Salting দিয়ে সমান করো — সুস্থতা। Broadcast join দিয়ে shuffle এড়াও — দক্ষতা।</p>
<p class="scene-setting en">Qasra — division. Shuffle and partition are the form of that division — correct amount in correct parts. Skew means excess in one part — illness. Salting equalizes — health. Broadcast join avoids shuffle — efficiency.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (Distributed Systems) Door ৪ (Consistent Hashing):</strong> partitioning strategy। Book ৪৬ (Cryptography) Door ৩ (Hash): partition key = hash function।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrDE5" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#22d3ee"/></marker></defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
  <text x="290" y="24" text-anchor="middle" fill="#7dd3fc" font-size="13" font-weight="bold">Shuffle vs Broadcast Join</text>
  <text x="145" y="48" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Shuffle Join (expensive)</text>
  <rect x="30" y="60" width="60" height="55" rx="5" fill="#1e3a5f" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="60" y="78" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">fact</text>
  <text x="60" y="92" text-anchor="middle" fill="#fcd34d" font-size="7">100 GB</text>
  <text x="60" y="105" text-anchor="middle" fill="#94a3b8" font-size="7">shuffle!</text>
  <rect x="200" y="60" width="60" height="55" rx="5" fill="#1e3a5f" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="230" y="78" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">dim</text>
  <text x="230" y="92" text-anchor="middle" fill="#fcd34d" font-size="7">5 MB</text>
  <text x="230" y="105" text-anchor="middle" fill="#94a3b8" font-size="7">shuffle!</text>
  <line x1="90" y1="87" x2="145" y2="87" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrDE5)"/>
  <line x1="200" y1="87" x2="155" y2="87" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrDE5)"/>
  <rect x="110" y="130" width="70" height="30" rx="5" fill="#0f172a" stroke="#475569"/>
  <text x="145" y="150" text-anchor="middle" fill="#94a3b8" font-size="8">network</text>
  <text x="145" y="178" text-anchor="middle" fill="#fbbf24" font-size="9">slow</text>
  <text x="445" y="48" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Broadcast Join (no shuffle)</text>
  <rect x="330" y="60" width="60" height="55" rx="5" fill="#1e3a5f" stroke="#4ade80" stroke-width="1.2"/>
  <text x="360" y="78" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">fact</text>
  <text x="360" y="92" text-anchor="middle" fill="#4ade80" font-size="7">100 GB</text>
  <text x="360" y="105" text-anchor="middle" fill="#22d3ee" font-size="7">no move!</text>
  <rect x="500" y="60" width="55" height="55" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="527" y="78" text-anchor="middle" fill="#22d3ee" font-size="8" font-weight="bold">dim</text>
  <text x="527" y="92" text-anchor="middle" fill="#7dd3fc" font-size="7">5 MB</text>
  <text x="527" y="105" text-anchor="middle" fill="#7dd3fc" font-size="7">broadcast</text>
  <line x1="500" y1="87" x2="392" y2="87" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrDE5)"/>
  <rect x="330" y="135" width="60" height="25" rx="4" fill="#0f172a" stroke="#475569"/>
  <text x="360" y="152" text-anchor="middle" fill="#7dd3fc" font-size="7">executor</text>
  <rect x="425" y="135" width="60" height="25" rx="4" fill="#0f172a" stroke="#475569"/>
  <text x="455" y="152" text-anchor="middle" fill="#7dd3fc" font-size="7">executor</text>
  <text x="445" y="185" text-anchor="middle" fill="#4ade80" font-size="9">dim সব executor-এ</text>
  <text x="445" y="200" text-anchor="middle" fill="#4ade80" font-size="9">fast, no shuffle</text>
  <text x="290" y="230" text-anchor="middle" fill="#64748b" font-size="8">Data skew? salting দিয়ে key ভাগ করো (key_0, key_1 ...)</text>
</svg>
</div>
<div class="svg-caption">Shuffle = সবচেয়ে ব্যয়বহুল। Broadcast join ছোট table সব মেশিনে পাঠায় — shuffle লাগে না।</div>

<div class="secret-box">🔀 <strong>Shuffle = সবচেয়ে ব্যয়বহুল। Broadcast join ও salting দিয়ে কমাও।</strong> কিন্তু OLTP থেকে OLAP-এ ডেটা কীভাবে যাবে? প্রতিটি transaction real-time-এ? সেই প্রবাহ — CDC। পরের দরজায়।</div>`,
  senior: {
    title: "Shuffle & Skew এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Shuffle</td><td>ডেটা মেশিনে মেশিনে transfer — ব্যয়বহুল</td></tr>
<tr><td class="hl">Broadcast Join</td><td>ছোট table সব executor-এ</td></tr>
<tr><td class="hl">Salting</td><td>key + random → সমান ভাগ</td></tr>
<tr><td class="hl">Data Skew</td><td>এক key-তে অতিরিক্ত row</td></tr>
<tr><td class="hl">Repartition</td><td>partition সংখ্যা বদলাও</td></tr>
<tr><td class="hl">Coalesce</td><td>partition কমাও (shuffle ছাড়া)</td></tr></table>`
  }
});
