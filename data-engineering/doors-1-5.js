const doors = [];

// ═══════════════════════════════════════════
// DOOR 1 — Two Worlds (OLTP vs OLAP)
// ═══════════════════════════════════════════
doors.push({
  num: 1,
  icon: "🌍",
  color: "#0ea5e9",
  tagline: "দুই জগত — Two Worlds",
  name: "The Two Worlds",
  secret: "OLTP খুঁজে বের করে, OLAP যোগ করে। একই ডেটা, দুই ভিন্ন রূপ।",
  story: `<p class="scene-setting">তুমি একটা বিশাল অফিসে দাঁড়িয়ে আছ। বাঁ দিকে একটা ডেস্ক — সেখানে একজন কেরানি প্রতিটা ফাইল দ্রুত খুঁজে বের করে, আপডেট করে, ফের রাখে। এটাই OLTP — Online Transaction Processing। MySQL, PostgreSQL — তোমার LedgerPilot। ডান দিকে একটা বিশাল হল — সেখানে শত শত কেরানি একসাথে সব ফাইল পড়ে, গড় বের করে, রিপোর্ট তৈরি করে। এটাই OLAP — Online Analytical Processing।</p>
<p class="scene-setting en">You stand in a vast office. On the left, a clerk fetches, updates, and files single records rapidly — OLTP. On the right, hundreds of clerks read ALL files to calculate averages — OLAP. Same data, two opposite designs.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="10" y="10" width="275" height="300" rx="12" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
  <text x="147" y="35" text-anchor="middle" fill="#7dd3fc" font-size="13" font-weight="900">📝 OLTP (MySQL / PostgreSQL)</text>
  <rect x="25" y="55" width="120" height="35" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1"/>
  <text x="85" y="77" text-anchor="middle" fill="#93c5fd" font-size="10">Row 1: id,name,amt</text>
  <rect x="25" y="95" width="120" height="35" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1"/>
  <text x="85" y="117" text-anchor="middle" fill="#93c5fd" font-size="10">Row 2: id,name,amt</text>
  <rect x="25" y="135" width="120" height="35" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1"/>
  <text x="85" y="157" text-anchor="middle" fill="#93c5fd" font-size="10">Row 3: id,name,amt</text>
  <text x="147" y="195" text-anchor="middle" fill="#bae6fd" font-size="9">Row-based storage</text>
  <text x="147" y="215" text-anchor="middle" fill="#7dd3fc" font-size="9">⚡ Fast: WHERE id=42</text>
  <text x="147" y="232" text-anchor="middle" fill="#7dd3fc" font-size="9">⚡ Fast: UPDATE row</text>
  <text x="147" y="252" text-anchor="middle" fill="#f87171" font-size="9">🐢 Slow: SUM(all amounts)</text>
  <text x="147" y="272" text-anchor="middle" fill="#94a3b8" font-size="9">Normalized (3NF)</text>
  <text x="147" y="292" text-anchor="middle" fill="#60a5fa" font-size="9" font-weight="700">LedgerPilot MySQL</text>

  <rect x="295" y="10" width="275" height="300" rx="12" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="432" y="35" text-anchor="middle" fill="#86efac" font-size="13" font-weight="900">📊 OLAP (Parquet / Warehouse)</text>
  <rect x="315" y="55" width="70" height="130" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="350" y="75" text-anchor="middle" fill="#4ade80" font-size="9">id col</text>
  <rect x="390" y="55" width="70" height="130" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="425" y="75" text-anchor="middle" fill="#4ade80" font-size="9">name col</text>
  <rect x="465" y="55" width="90" height="130" rx="5" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
  <text x="510" y="75" text-anchor="middle" fill="#86efac" font-size="9" font-weight="700">amount col</text>
  <text x="510" y="110" text-anchor="middle" fill="#4ade80" font-size="20" font-weight="900">↓</text>
  <text x="510" y="140" text-anchor="middle" fill="#86efac" font-size="8">SUM()</text>
  <text x="510" y="160" text-anchor="middle" fill="#86efac" font-size="8">AVG()</text>
  <text x="432" y="215" text-anchor="middle" fill="#bbf7d0" font-size="9">Columnar storage</text>
  <text x="432" y="232" text-anchor="middle" fill="#4ade80" font-size="9">⚡ Fast: SUM(amount)</text>
  <text x="432" y="252" text-anchor="middle" fill="#f87171" font-size="9">🐢 Slow: single row lookup</text>
  <text x="432" y="272" text-anchor="middle" fill="#94a3b8" font-size="9">Denormalized (Star)</text>
  <text x="432" y="292" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Analytics Engine</text>
</svg>
</div>
<div class="svg-caption">চিত্র: OLTP = row-by-row (দ্রুত update), OLAP = column-by-column (দ্রুত aggregation)। একই ডেটা, দুই ভিন্ন layout।</div>

<div class="dialogue"><strong>ডেটা ইঞ্জিনিয়ার:</strong> LedgerPilot-এ তুমি MySQL ব্যবহার করো — কারণ তোমার দরকার দ্রুত transaction। একটা invoice তৈরি করো, payment update করো — সব row-level। কিন্তু যখন তুমি বলবে "গত ত্রৈমাসিকে প্রতিটা ক্যাটাগরির মোট আয় দেখাও" — MySQL কষ্ট করে লাখ লাখ row পড়বে। এখানেই OLAP দরকার। Columnar storage — Parquet — শুধু 'amount' কলাম পড়ে SUM করে। ১০x দ্রুত।</div>
<div class="dialogue en"><strong>Data Engineer:</strong> LedgerPilot uses MySQL — because you need fast transactions. Create invoice, update payment — all row-level. But when you say "show me total revenue per category last quarter" — MySQL reads millions of rows painfully. This is where OLAP is needed. Columnar storage — Parquet — reads only the 'amount' column. 10x faster.</div>`,
  recall: [
    { q: "LedgerPilot MySQL কোন ধরনের workload? (OLTP নাকি OLAP?)", a: "OLTP — কারণ দ্রুত row-level transaction দরকার (INSERT/UPDATE/DELETE)।" },
    { q: "OLAP কেন columnar storage ব্যবহার করে?", a: "কারণ analytics query সাধারণত কয়েকটা column পড়ে (যেমন SUM(amount))। Columnar layout-এ শুধু সেই column গুলো পড়া হয়, বাকি skip হয়।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 2 — The Horizontal Revolution (Parquet)
// ═══════════════════════════════════════════
doors.push({
  num: 2,
  icon: "📊",
  color: "#22c55e",
  tagline: "অনুভূমিক বিপ্লব — Sideways Revolution",
  name: "The Horizontal Revolution",
  secret: "Parquet ডেটাকে আনুভূমিক করে শুইয়ে দেয়। একই ডেটা ৯০% ছোট, ১০x দ্রুত।",
  story: `<p class="scene-setting">ভাবো — একটা বইয়ের তাক। সব বই উল্লম্বভাবে সাজানো (row-based)। একটা নির্দিষ্ট অধ্যায় পড়তে হলে প্রতিটা বই নামিয়ে খুলতে হয়। কিন্তু যদি সব বই আনুভূমিকভাবে সাজানো হয় — প্রতিটা স্তর একটা অধ্যায় — তাহলে শুধু সেই স্তরটা টেনে নিলেই হয়। এটাই Parquet।</p>
<p class="scene-setting en">Imagine a bookshelf. All books vertical (row-based). To read one chapter from each, you pull every book down. But if books are stacked horizontally — each layer is one chapter — you just slide out that layer. This is Parquet.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">📊 Parquet Magic: Column Pruning + Compression</text>

  <!-- CSV/Row -->
  <rect x="20" y="50" width="250" height="120" rx="8" fill="#7c2d12" stroke="#f97316" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#fdba74" font-size="12" font-weight="700">📄 CSV / MySQL (Row-based)</text>
  <rect x="35" y="85" width="220" height="20" rx="3" fill="#431407" stroke="#f97316" stroke-width="1"/>
  <text x="145" y="99" text-anchor="middle" fill="#fed7aa" font-size="8">id:1, name:Hasan, amount:5000, date:2026-07</text>
  <rect x="35" y="108" width="220" height="20" rx="3" fill="#431407" stroke="#f97316" stroke-width="1"/>
  <text x="145" y="122" text-anchor="middle" fill="#fed7aa" font-size="8">id:2, name:Rakib, amount:3200, date:2026-07</text>
  <rect x="35" y="131" width="220" height="20" rx="3" fill="#431407" stroke="#f97316" stroke-width="1"/>
  <text x="145" y="145" text-anchor="middle" fill="#fed7aa" font-size="8">id:3, name:Sadia, amount:8100, date:2026-06</text>
  <text x="145" y="162" text-anchor="middle" fill="#f87171" font-size="9">❌ SUM(amount)? Read ALL columns!</text>

  <!-- Parquet -->
  <rect x="290" y="50" width="270" height="120" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="425" y="72" text-anchor="middle" fill="#86efac" font-size="12" font-weight="700">📦 Parquet (Columnar)</text>
  <rect x="305" y="85" width="55" height="70" rx="3" fill="#14532d" stroke="#22c55e" stroke-width="1" opacity=".4"/>
  <text x="332" y="102" text-anchor="middle" fill="#4ade80" font-size="8">id</text>
  <rect x="365" y="85" width="65" height="70" rx="3" fill="#14532d" stroke="#22c55e" stroke-width="1" opacity=".4"/>
  <text x="397" y="102" text-anchor="middle" fill="#4ade80" font-size="8">name</text>
  <rect x="435" y="85" width="65" height="70" rx="3" fill="#059669" stroke="#4ade80" stroke-width="2.5"/>
  <text x="467" y="102" text-anchor="middle" fill="#86efac" font-size="8" font-weight="700">amount</text>
  <text x="467" y="118" text-anchor="middle" fill="#4ade80" font-size="7">5000</text>
  <text x="467" y="130" text-anchor="middle" fill="#4ade80" font-size="7">3200</text>
  <text x="467" y="142" text-anchor="middle" fill="#4ade80" font-size="7">8100</text>
  <text x="467" y="152" text-anchor="middle" fill="#86efac" font-size="6">→ SUM!</text>
  <rect x="505" y="85" width="45" height="70" rx="3" fill="#14532d" stroke="#22c55e" stroke-width="1" opacity=".4"/>
  <text x="527" y="102" text-anchor="middle" fill="#4ade80" font-size="8">date</text>
  <text x="425" y="162" text-anchor="middle" fill="#4ade80" font-size="9">✅ SUM(amount)? Read ONLY amount!</text>

  <!-- Compression techniques -->
  <text x="290" y="200" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="700">Compression Arsenal</text>
  <rect x="30" y="215" width="160" height="65" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="110" y="235" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">Dictionary Encoding</text>
  <text x="110" y="252" text-anchor="middle" fill="#fcd34d" font-size="9">"US","US","DE","US"</text>
  <text x="110" y="267" text-anchor="middle" fill="#fcd34d" font-size="9">→ {0,0,1,0}</text>

  <rect x="210" y="215" width="160" height="65" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="290" y="235" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">Run-Length (RLE)</text>
  <text x="290" y="252" text-anchor="middle" fill="#fcd34d" font-size="9">"US","US","US","US"</text>
  <text x="290" y="267" text-anchor="middle" fill="#fcd34d" font-size="9">→ US × 4</text>

  <rect x="390" y="215" width="160" height="65" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="470" y="235" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">Predicate Pushdown</text>
  <text x="470" y="252" text-anchor="middle" fill="#fcd34d" font-size="9">min/max per chunk</text>
  <text x="470" y="267" text-anchor="middle" fill="#fcd34d" font-size="9">→ skip entire blocks!</text>

  <rect x="80" y="295" width="420" height="45" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="315" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">ফলাফল: 70-90% smaller files · 10-100x faster analytics</text>
  <text x="290" y="330" text-anchor="middle" fill="#86efac" font-size="9">⚠️ কিন্তু immutable — update করতে গেলে পুরো file rewrite করতে হয়!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Row-based (CSV/MySQL) সব column পড়ে। Parquet শুধু দরকারি column পড়ে। Dictionary + RLE + predicate pushdown = ৯০% ছোট।</div>

<div class="dialogue"><strong>প্যাটারসন:</strong> (গল্প শুরু) আমি ডেভিড প্যাটারসন। ২০১৩ সালে Google আর Twitter মিলে Parquet তৈরি করল — সবচেয়ে সহজ আইডিয়া দিয়ে। ডেটাকে আনুভূমিক করে শুইয়ে দাও। প্রতিটা column আলাদা ফাইলে। একটা column-এ সব ডেটা একই টাইপের — তাই Dictionary Encoding দিয়ে বারবার আসা value-কে integer-এ রূপান্তর করা যায়। Run-Length Encoding দিয়ে পুনরাবৃত্তি সংকুচিত করা যায়। ফলাফল? ৯০% ছোট ফাইল।</div>`,
  recall: [
    { q: "Column Pruning কী?", a: "Query যখন শুধু কয়েকটা column চায়, Parquet বাকিগুলো একদম পড়ে না — ৮০-৯৫% I/O বাঁচে।" },
    { q: "Parquet কেন immutable?", a: "কলাম-ভিত্তিক layout এর জন্য একটি row আপডেট করতে গেলে পুরো ফাইল রিরাইট করতে হয়। এটি ডিজাইন অনুযায়ী — এটিই columnar অপ্টিমাইজেশনকে সক্ষম করে।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 3 — The Star Map (Star Schema)
// ═══════════════════════════════════════════
doors.push({
  num: 3,
  icon: "⭐",
  color: "#fbbf24",
  tagline: "নক্ষত্র মানচিত্র — The Star Map",
  name: "The Star Map",
  secret: "Star Schema = ৫-টেবিল JOIN কে আগেই সমতল (flatten) করে রাখা। দ্রুত query, সহজ BI।",
  story: `<p class="scene-setting">তুমি একটা রেস্তোরাঁয় আছ। মালিক জিজ্ঞেস করে — "গত মাসে কোন এলাকার কোন পণ্য সবচেয়ে বিক্রি হয়েছে?" স্বাভাবিক ডেটাবেসে এর উত্তর খুঁজতে হলে ৫-৬টা টেবিল JOIN করতে হবে। কিন্তু Star Schema-তে উত্তর এক ক্লিকে — কারণ JOIN গুলো আগেই সমতল করা আছে।</p>
<p class="scene-setting en">Star Schema pre-flattens complex joins at write time. The central fact table holds events. Dimension tables hold lookup data. Simple, fast queries for BI tools.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⭐ Star Schema — Fact + Dimensions</text>

  <!-- Fact Table (center) -->
  <rect x="200" y="130" width="180" height="100" rx="10" fill="#1e40af" stroke="#60a5fa" stroke-width="2.5"/>
  <text x="290" y="155" text-anchor="middle" fill="#dbeafe" font-size="13" font-weight="900">📋 Fact_Sales</text>
  <text x="290" y="173" text-anchor="middle" fill="#93c5fd" font-size="9">transaction_id</text>
  <text x="290" y="187" text-anchor="middle" fill="#93c5fd" font-size="9">product_id (FK)</text>
  <text x="290" y="201" text-anchor="middle" fill="#93c5fd" font-size="9">customer_id (FK)</text>
  <text x="290" y="215" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="700">amount: 5000</text>

  <!-- Dimension Tables -->
  <rect x="20" y="50" width="130" height="65" rx="8" fill="#581c87" stroke="#a855f7" stroke-width="1.5"/>
  <text x="85" y="72" text-anchor="middle" fill="#d8b4fe" font-size="11" font-weight="700">Dim_Product</text>
  <text x="85" y="88" text-anchor="middle" fill="#c084fc" font-size="8">product_id</text>
  <text x="85" y="100" text-anchor="middle" fill="#c084fc" font-size="8">name, category</text>

  <rect x="430" y="50" width="130" height="65" rx="8" fill="#581c87" stroke="#a855f7" stroke-width="1.5"/>
  <text x="495" y="72" text-anchor="middle" fill="#d8b4fe" font-size="11" font-weight="700">Dim_Customer</text>
  <text x="495" y="88" text-anchor="middle" fill="#c084fc" font-size="8">customer_id</text>
  <text x="495" y="100" text-anchor="middle" fill="#c084fc" font-size="8">name, region</text>

  <rect x="20" y="250" width="130" height="65" rx="8" fill="#581c87" stroke="#a855f7" stroke-width="1.5"/>
  <text x="85" y="272" text-anchor="middle" fill="#d8b4fe" font-size="11" font-weight="700">Dim_Date</text>
  <text x="85" y="288" text-anchor="middle" fill="#c084fc" font-size="8">date_id</text>
  <text x="85" y="300" text-anchor="middle" fill="#c084fc" font-size="8">year, month, day</text>

  <rect x="430" y="250" width="130" height="65" rx="8" fill="#581c87" stroke="#a855f7" stroke-width="1.5"/>
  <text x="495" y="272" text-anchor="middle" fill="#d8b4fe" font-size="11" font-weight="700">Dim_Store</text>
  <text x="495" y="288" text-anchor="middle" fill="#c084fc" font-size="8">store_id</text>
  <text x="495" y="300" text-anchor="middle" fill="#c084fc" font-size="8">location, type</text>

  <!-- Connection lines -->
  <line x1="150" y1="82" x2="200" y2="130" stroke="#64748b" stroke-width="1.5"/>
  <line x1="430" y1="82" x2="380" y2="130" stroke="#64748b" stroke-width="1.5"/>
  <line x1="150" y1="282" x2="200" y2="230" stroke="#64748b" stroke-width="1.5"/>
  <line x1="430" y1="282" x2="380" y2="230" stroke="#64748b" stroke-width="1.5"/>

  <text x="290" y="320" text-anchor="middle" fill="#94a3b8" font-size="9" font-style="italic">Fact = raw events (amounts, IDs). Dimensions = lookup caches (names, categories, regions).</text>
  <text x="290" y="335" text-anchor="middle" fill="#64748b" font-size="8">Kimball: bottom-up, fast time-to-value. Inmon: top-down, enterprise integrity. Modern = Hybrid.</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Star Schema — কেন্দ্রে Fact table (events), চারপাশে Dimension tables (lookup)। সহজ query, দ্রুত BI।</div>

<div class="dialogue"><strong>কিম্বল:</strong> আমি রাল্ফ কিম্বল। ১৯৯০-এর দশকে আমি একটা সহজ আইডিয়া নিয়ে এসেছিলাম — analytics ডেটাবেস স্বাভাবিক অ্যাপ ডেটাবেসের মতো নয়। অ্যাপ ডেটাবেসে ৫টা টেবিল JOIN করে একটা সহজ রিপোর্ট বানাতে হয়। কিন্তু analytics-এ? আমরা JOIN গুলো আগেই সমতল করে রাখি। কেন্দ্রে একটা Fact table — কাঁচা ঘটনা (transaction_id, amount, date)। চারপাশে Dimension tables — lookup ক্যাশ (product name, customer region)। এটাই Star Schema। ব্যবহারকারী একটা সহজ ২-টেবিল JOIN করে যে উত্তর চায় তা পায়।</div>`,
  recall: [
    { q: "Fact table আর Dimension table-এর পার্থক্য কী?", a: "Fact = কাঁচা ঘটনা/মেট্রিক (amount, quantity)। Dimension = lookup/প্রসঙ্গ (product name, customer region, date)।" },
    { q: "Kimball vs Inmon — পার্থক্য?", a: "Kimball = bottom-up, star schema data marts, fast time-to-value। Inmon = top-down, normalized enterprise warehouse, high integrity। Modern = Hybrid।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 4 — The Lazy Architect (Spark)
// ═══════════════════════════════════════════
doors.push({
  num: 4,
  icon: "⚡",
  color: "#f97316",
  tagline: "অলস স্থপতি — The Lazy Architect",
  name: "The Lazy Architect",
  secret: "Spark অলস — কোড লিখলে সাথে সাথে চালায় না। পুরো plan দেখে, তারপর সেরা রাস্তা বেছে নেয়।",
  story: `<p class="scene-setting">তুমি Django ORM জানো — <code>.filter()</code>, <code>.annotate()</code> চেইন করলে সাথে সাথে database query হয় না। শুধু logical query তৈরি হয়। <code>.list()</code> বা <code>.first()</code> না করলে কিছু চলে না। Spark ঠিক এভাবেই কাজ করে — কিন্তু হাজার হাজার machine-এ!</p>
<p class="scene-setting en">Spark works like Django ORM QueryBuilder. Transformations (filter, join, map) are lazy — they just build a logical plan. Only Actions (count, write, collect) trigger execution. Catalyst optimizer rewrites your plan for maximum efficiency.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚡ Spark Pipeline: Lazy → Catalyst → DAG</text>

  <!-- Transformations (lazy) -->
  <rect x="30" y="50" width="520" height="70" rx="10" fill="#1e293b" stroke="#f97316" stroke-width="2"/>
  <text x="290" y="70" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="700">Transformations (LAZY — nothing executes!)</text>
  <rect x="50" y="80" width="100" height="30" rx="5" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="1"/>
  <text x="100" y="99" text-anchor="middle" fill="#7dd3fc" font-size="9">read()</text>
  <text x="165" y="99" text-anchor="middle" fill="#64748b" font-size="9">→</text>
  <rect x="180" y="80" width="100" height="30" rx="5" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="1"/>
  <text x="230" y="99" text-anchor="middle" fill="#7dd3fc" font-size="9">filter()</text>
  <text x="295" y="99" text-anchor="middle" fill="#64748b" font-size="9">→</text>
  <rect x="310" y="80" width="100" height="30" rx="5" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="1"/>
  <text x="360" y="99" text-anchor="middle" fill="#7dd3fc" font-size="9">join()</text>
  <text x="425" y="99" text-anchor="middle" fill="#64748b" font-size="9">→</text>
  <rect x="440" y="80" width="100" height="30" rx="5" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="1"/>
  <text x="490" y="99" text-anchor="middle" fill="#7dd3fc" font-size="9">groupBy()</text>

  <!-- Catalyst -->
  <rect x="150" y="145" width="280" height="80" rx="10" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
  <text x="290" y="168" text-anchor="middle" fill="#c7d2fe" font-size="12" font-weight="900">🧠 Catalyst Optimizer</text>
  <text x="290" y="186" text-anchor="middle" fill="#a5b4fc" font-size="9">1. Analysis — resolve columns</text>
  <text x="290" y="200" text-anchor="middle" fill="#a5b4fc" font-size="9">2. Logical Optimization — push filters!</text>
  <text x="290" y="214" text-anchor="middle" fill="#a5b4fc" font-size="9">3. Physical Planning — choose join strategy</text>

  <line x1="290" y1="120" x2="290" y2="145" stroke="#818cf8" stroke-width="2" marker-end="url(#arrSpark)"/>
  <defs><marker id="arrSpark" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#818cf8"/></marker></defs>

  <text x="310" y="135" fill="#a5b4fc" font-size="8" font-style="italic">.write() triggers action!</text>

  <!-- DAG Execution -->
  <text x="290" y="250" text-anchor="middle" fill="#e2e8f0" font-size="11" font-weight="700">DAG Execution (compiled plan)</text>

  <rect x="30" y="265" width="155" height="55" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="107" y="285" text-anchor="middle" fill="#86efac" font-size="10" font-weight="700">Stage 1: Read + Filter</text>
  <text x="107" y="300" text-anchor="middle" fill="#4ade80" font-size="8">200 parallel tasks</text>
  <text x="107" y="312" text-anchor="middle" fill="#4ade80" font-size="8">(no shuffle needed)</text>

  <text x="200" y="295" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="700">SHUFFLE</text>
  <line x1="185" y1="292" x2="220" y2="292" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrRed)"/>
  <defs><marker id="arrRed" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ef4444"/></marker></defs>

  <rect x="225" y="265" width="155" height="55" rx="8" fill="#451a03" stroke="#f97316" stroke-width="1.5"/>
  <text x="302" y="285" text-anchor="middle" fill="#fdba74" font-size="10" font-weight="700">Stage 2: Join + GroupBy</text>
  <text x="302" y="300" text-anchor="middle" fill="#fb923c" font-size="8">200 parallel tasks</text>
  <text x="302" y="312" text-anchor="middle" fill="#fb923c" font-size="8">(network data move!)</text>

  <line x1="380" y1="292" x2="415" y2="292" stroke="#475569" stroke-width="1.5" marker-end="url(#arrSpark)"/>

  <rect x="420" y="265" width="135" height="55" rx="8" fill="#1e40af" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="487" y="285" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="700">Stage 3: Write</text>
  <text x="487" y="300" text-anchor="middle" fill="#60a5fa" font-size="8">Output → Parquet</text>

  <text x="290" y="355" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="700">⚠️ Shuffle = #1 performance killer (disk + network + serialization)</text>
  <text x="290" y="370" text-anchor="middle" fill="#4ade80" font-size="9">💡 Broadcast Join: ছোট table সবাইকে পাঠিয়ে shuffle এড়াও!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Spark = Lazy Transformations → Catalyst Optimizer (filter কে join এর আগে push করে) → DAG Stages (shuffle এ stage ভাগ হয়)।</div>

<div class="dialogue"><strong>স্পার্ক ইঞ্জিনিয়ার:</strong> ২০০৯ সালে UC Berkeley-তে Matei Zaharia Spark তৈরি করে। মূল আইডিয়া — in-memory computation + lazy evaluation। তুমি <code>filter()</code> আর <code>join()</code> লেখো। Spark সাথে সাথে কিছু করে না! সে শুধু logical plan বানায়। তারপর যখন <code>.write()</code> বা <code>.count()</code> করো — Catalyst Optimizer পুরো plan দেখে। তুমি filter কে join এর পরে লিখলেও Catalyst সেটাকে join এর আগে push করে দেয়! কম ডেটা shuffle হয়। দ্রুত চলে।</div>`,
  recall: [
    { q: "Spark-এ Transformation আর Action-এর পার্থক্য কী?", a: "Transformation (filter, join, map) = lazy — শুধু plan বানায়। Action (count, write, collect) = execution trigger করে।" },
    { q: "Catalyst Optimizer কী করে?", a: "পুরো pipeline দেখে optimize করে — filter কে join এর আগে push করে, column pruning করে, সেরা join strategy বেছে নেয়।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 5 — The Great Shuffle (Data Skew + Joins)
// ═══════════════════════════════════════════
doors.push({
  num: 5,
  icon: "🔀",
  color: "#ef4444",
  tagline: "মহান শাফল — The Great Shuffle",
  name: "The Great Shuffle",
  secret: "Spark-এ সব performance problem = shuffle। এটাই #1 killer। জানলে এড়াতে পারবে।",
  story: `<p class="scene-setting">ভাবো — ২০০ জন কর্মী একটা বিশাল কাজ করছে। ১৯৯ জন ১০ সেকেন্ডে শেষ করে। কিন্তু ১ জন ৩০ মিনিট নেয়! কেন? কারণ তার কাছে সব ডেটা চলে গেছে। এটাই data skew — Spark-এর সবচেয়ে বড় শত্রু।</p>
<p class="scene-setting en">199 tasks finish in 10 seconds. 1 task takes 30 minutes. Why? Data skew — one partition has vastly more data. The job is only as fast as its slowest task.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔀 Data Skew + Join Strategies</text>

  <!-- Skew visualization -->
  <text x="290" y="50" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700">❌ Data Skew — One partition dominates</text>
  <rect x="30" y="65" width="30" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="45" y="79" text-anchor="middle" fill="#4ade80" font-size="7">10s</text>
  <rect x="65" y="65" width="30" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="80" y="79" text-anchor="middle" fill="#4ade80" font-size="7">10s</text>
  <rect x="100" y="65" width="30" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="115" y="79" text-anchor="middle" fill="#4ade80" font-size="7">10s</text>
  <rect x="135" y="65" width="30" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="150" y="79" text-anchor="middle" fill="#4ade80" font-size="7">10s</text>
  <rect x="170" y="60" width="60" height="30" rx="3" fill="#7f1d1d" stroke="#ef4444" stroke-width="2.5"/>
  <text x="200" y="79" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">30 MIN!</text>
  <text x="245" y="79" fill="#fca5a5" font-size="9">← skew!</text>
  <text x="290" y="95" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">Job runtime = slowest task. 199 done, 1 stuck.</text>

  <!-- Fix: Salting -->
  <rect x="30" y="115" width="250" height="55" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="155" y="135" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Fix 1: Salting the join key</text>
  <text x="155" y="150" text-anchor="middle" fill="#fcd34d" font-size="8">key_1 → key_0, key_1, key_2...</text>
  <text x="155" y="162" text-anchor="middle" fill="#fcd34d" font-size="8">(split heavy key across partitions)</text>

  <!-- Fix: Broadcast Join -->
  <rect x="300" y="115" width="250" height="55" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="425" y="135" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Fix 2: Broadcast Join</text>
  <text x="425" y="150" text-anchor="middle" fill="#fcd34d" font-size="8">small table → ALL executors</text>
  <text x="425" y="162" text-anchor="middle" fill="#fcd34d" font-size="8">(zero shuffle! dimension tables)</text>

  <!-- Join Strategies Comparison -->
  <text x="290" y="200" text-anchor="middle" fill="#e2e8f0" font-size="11" font-weight="700">Spark Join Strategies</text>

  <rect x="30" y="215" width="160" height="110" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="110" y="235" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">✅ Broadcast Join</text>
  <text x="110" y="253" text-anchor="middle" fill="#86efac" font-size="9">Small table (&lt;100MB)</text>
  <text x="110" y="268" text-anchor="middle" fill="#86efac" font-size="9">→ copy to ALL nodes</text>
  <text x="110" y="283" text-anchor="middle" fill="#86efac" font-size="9">ZERO shuffle!</text>
  <text x="110" y="300" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">⭐ Best for Dim tables</text>
  <text x="110" y="315" text-anchor="middle" fill="#64748b" font-size="7">spark.sql.autoBroadcast</text>

  <rect x="210" y="215" width="160" height="110" rx="8" fill="#451a03" stroke="#f97316" stroke-width="2"/>
  <text x="290" y="235" text-anchor="middle" fill="#fb923c" font-size="11" font-weight="700">🔃 Sort-Merge Join</text>
  <text x="290" y="253" text-anchor="middle" fill="#fdba74" font-size="9">Both tables large</text>
  <text x="290" y="268" text-anchor="middle" fill="#fdba74" font-size="9">→ shuffle + sort both</text>
  <text x="290" y="283" text-anchor="middle" fill="#fdba74" font-size="9">→ merge matching keys</text>
  <text x="290" y="300" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="700">Default for big joins</text>
  <text x="290" y="315" text-anchor="middle" fill="#64748b" font-size="7">O(n log n) — expensive</text>

  <rect x="390" y="215" width="160" height="110" rx="8" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
  <text x="470" y="235" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="700">🧠 Shuffle Hash Join</text>
  <text x="470" y="253" text-anchor="middle" fill="#c7d2fe" font-size="9">One side moderate</text>
  <text x="470" y="268" text-anchor="middle" fill="#c7d2fe" font-size="9">→ shuffle, build hash</text>
  <text x="470" y="283" text-anchor="middle" fill="#c7d2fe" font-size="9">→ probe with other</text>
  <text x="470" y="300" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">Faster than sort-merge</text>
  <text x="470" y="315" text-anchor="middle" fill="#64748b" font-size="7">When one side fits memory</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Data skew = এক partition-এ সব ডেটা। Broadcast Join = shuffle ছাড়া। Sort-Merge = বড় টেবিলের জন্য।</div>

<div class="dialogue"><strong>সিনিয়র স্পার্ক ইঞ্জিনিয়ার:</strong> Spark-এ প্রতিটা performance problem-এর শেকড় একটাই — shuffle। যখন join বা groupBy করো, ডেটা executor-এর মধ্যে চলাচল করে। এতে disk write + network transfer + serialization — কম্পিউটারের সবচেয়ে ধীর তিনটা জিনিস! সমাধান? Broadcast Join। ছোট table (Dimension table) সব executor-কে পাঠিয়ে দাও — কোনো shuffle লাগবে না। <code>spark.sql.autoBroadcastJoinThreshold</code> বাড়াও ১০০-৫০০MB পর্যন্ত। এই একটা setting change বেশি shuffle এড়ায় যেকোনো optimization থেকে।</div>`,
  recall: [
    { q: "Shuffle কেন performance killer?", a: "Shuffle-এ disk I/O + network I/O + serialization লাগে — কম্পিউটারের সবচেয়ে ধীর তিনটা জিনিস। 200×200 task = সম্ভাব্য 40,000 network transfer!" },
    { q: "Broadcast Join কখন ব্যবহার করবে?", a: "যখন join-এর একপাশের table ছোট (&lt;100MB-1GB)। ছোট table সব executor-কে পাঠিয়ে দেওয়া হয় — shuffle একদম লাগে না।" },
  ]
});
