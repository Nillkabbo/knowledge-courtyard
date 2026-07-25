// ═══════════════════════════════════════════
// DOOR 6 — The Secret Diary (CDC)
// ═══════════════════════════════════════════
doors.push({
  num: 6,
  icon: "📡",
  color: "#a855f7",
  tagline: "গোপন ডায়েরি — The Secret Diary",
  name: "The Secret Diary",
  secret: "Database-এর ভেতরে একটা গোপন ডায়েরি আছে — binlog। সে সব লিখে রাখে। CDC সেটা পড়ে।",
  story: `<p class="scene-setting">তোমার LedgerPilot MySQL-এর ভেতরে একটা গোপন ডায়েরি আছে — binlog। প্রতিটা INSERT, UPDATE, DELETE এই ডায়েরিতে লেখা হয়। কারণ কোনো কারণে DB crash করলে এই ডায়েরি দিয়ে recovery করা যায়। কিন্তু এই একই ডায়েরি পড়ে তুমি real-time data pipeline বানাতে পারো! এটাই CDC — Change Data Capture।</p>
<p class="scene-setting en">MySQL's binlog is a secret diary recording every change. CDC tools like Debezium read this diary directly — streaming every INSERT/UPDATE/DELETE to Kafka in real-time. No polling needed.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">📡 CDC: Query-Based vs Log-Based</text>

  <!-- Query-based (left) -->
  <rect x="10" y="45" width="275" height="280" rx="12" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
  <text x="147" y="68" text-anchor="middle" fill="#fdba74" font-size="12" font-weight="700">❌ Query-Based CDC</text>
  <rect x="25" y="85" width="245" height="35" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1"/>
  <text x="147" y="107" text-anchor="middle" fill="#93c5fd" font-size="9">SELECT * WHERE updated_at > X</text>
  <text x="147" y="138" text-anchor="middle" fill="#fb923c" font-size="9">⏱️ Latency: Minutes</text>
  <text x="147" y="156" text-anchor="middle" fill="#fb923c" font-size="9">🐌 Heavy load on production</text>
  <text x="147" y="174" text-anchor="middle" fill="#f87171" font-size="9">❌ Misses DELETE!</text>
  <text x="147" y="192" text-anchor="middle" fill="#f87171" font-size="9">❌ Misses intermediate changes</text>
  <text x="147" y="220" text-anchor="middle" fill="#94a3b8" font-size="9">Like checking mailbox</text>
  <text x="147" y="235" text-anchor="middle" fill="#94a3b8" font-size="9">every 5 minutes</text>
  <text x="147" y="265" text-anchor="middle" fill="#fcd34d" font-size="9">✅ Simple setup</text>
  <text x="147" y="280" text-anchor="middle" fill="#fcd34d" font-size="9">✅ Read-only access</text>
  <text x="147" y="300" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">Good for: simple batch sync</text>

  <!-- Log-based (right) -->
  <rect x="295" y="45" width="275" height="280" rx="12" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="432" y="68" text-anchor="middle" fill="#86efac" font-size="12" font-weight="700">✅ Log-Based CDC (Debezium)</text>
  <rect x="310" y="85" width="245" height="35" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="432" y="107" text-anchor="middle" fill="#4ade80" font-size="9">📖 Reads binlog / WAL directly</text>
  <text x="432" y="138" text-anchor="middle" fill="#4ade80" font-size="9">⚡ Latency: Sub-second</text>
  <text x="432" y="156" text-anchor="middle" fill="#4ade80" font-size="9">✅ Zero load on production</text>
  <text x="432" y="174" text-anchor="middle" fill="#4ade80" font-size="9">✅ Captures DELETE</text>
  <text x="432" y="192" text-anchor="middle" fill="#4ade80" font-size="9">✅ Preserves transaction order</text>
  <text x="432" y="220" text-anchor="middle" fill="#94a3b8" font-size="9">Like a doorbell — DB</text>
  <text x="432" y="235" text-anchor="middle" fill="#94a3b8" font-size="9">tells you instantly</text>
  <text x="432" y="265" text-anchor="middle" fill="#fca5a5" font-size="9">⚠️ Complex setup</text>
  <text x="432" y="280" text-anchor="middle" fill="#fca5a5" font-size="9">⚠️ Elevated DB privileges</text>
  <text x="432" y="300" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">Good for: real-time sync, streaming</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Query-based = poll করা (ধীর, DELETE মিস)। Log-based = binlog পড়া (দ্রুত, সম্পূর্ণ)। Debezium প্রতিটা event Kafka-তে পাঠায়।</div>

<div class="dialogue"><strong>ডেবেজিয়াম ইঞ্জিনিয়ার:</strong> তুমি LedgerPilot-এ একটা transaction delete করলে। Query-based CDC সেটা কখনো জানতে পারবে না — কারণ row আর নেই! কিন্তু binlog-এ লেখা আছে "DELETE FROM transactions WHERE id=42"। Debezium এই binlog সরাসরি পড়ে — প্রতিটা event মিলিসেকেন্ডে ধরে, Kafka-তে পাঠায়। Sub-second latency, production DB-তে শূন্য load।</div>`,
  recall: [
    { q: "Log-based CDC কেন DELETE ধরতে পারে কিন্তু query-based পারে না?", a: "Log-based binlog/WAL পড়ে যেখানে DELETE event লেখা থাকে। Query-based row poll করে — deleted row আর নেই!" },
    { q: "LedgerPilot-এ কখন CDC দরকার?", a: "যখন real-time analytics বা fraud detection দরকার। এখন cron-based export যথেষ্ট।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 7 — The Flowing River (Kafka)
// ═══════════════════════════════════════════
doors.push({
  num: 7,
  icon: "🌊",
  color: "#0ea5e9",
  tagline: "বহমান নদী — The Flowing River",
  name: "The Flowing River",
  secret: "Kafka = append-only log। Topic = নদী, partition = কুলুঙ্গি, consumer group = মাছুয়ারা।",
  story: `<p class="scene-setting">একটা নদী কল্পনা করো। পানি কখনো উল্টে ফেরে না — সবসময় সামনে বয়। নদীতে অনেকগুলো কুলুঙ্গি (partition) আছে — প্রতিটায় পানি আলাদাভাবে বয়। নদীর ধারে মাছুয়ারা (consumers) দাঁড়িয়ে আছে — প্রত্যেকে একটা কুলুঙ্গিতে মাছ ধরে। দুজন একই কুলুঙ্গিতে নয় — duplicate হবে না। এটাই Kafka।</p>
<p class="scene-setting en">Kafka is an append-only distributed log. Topics have partitions (lanes). Consumer groups split partitions — each partition read by exactly one consumer. Horizontal scaling without duplicates.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🌊 Kafka: Topic → Partitions → Consumer Group</text>

  <!-- Producer -->
  <rect x="20" y="55" width="80" height="40" rx="8" fill="#1e40af" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="60" y="80" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="700">Producer</text>

  <!-- Topic with 3 partitions -->
  <rect x="130" y="45" width="250" height="200" rx="10" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="255" y="65" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="700">📋 Topic: "transactions"</text>

  <rect x="145" y="75" width="220" height="45" rx="5" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="155" y="92" fill="#bae6fd" font-size="8">Partition 0:</text>
  <rect x="215" y="82" width="15" height="12" rx="2" fill="#0ea5e9" opacity=".6"/><text x="222" y="92" text-anchor="middle" fill="#e0f2fe" font-size="6">m1</text>
  <rect x="235" y="82" width="15" height="12" rx="2" fill="#0ea5e9" opacity=".6"/><text x="242" y="92" text-anchor="middle" fill="#e0f2fe" font-size="6">m4</text>
  <rect x="255" y="82" width="15" height="12" rx="2" fill="#0ea5e9" opacity=".6"/><text x="262" y="92" text-anchor="middle" fill="#e0f2fe" font-size="6">m7</text>
  <text x="155" y="112" fill="#64748b" font-size="7">offset: 0,1,2...</text>

  <rect x="145" y="125" width="220" height="45" rx="5" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="155" y="142" fill="#bae6fd" font-size="8">Partition 1:</text>
  <rect x="215" y="132" width="15" height="12" rx="2" fill="#0ea5e9" opacity=".6"/><text x="222" y="142" text-anchor="middle" fill="#e0f2fe" font-size="6">m2</text>
  <rect x="235" y="132" width="15" height="12" rx="2" fill="#0ea5e9" opacity=".6"/><text x="242" y="142" text-anchor="middle" fill="#e0f2fe" font-size="6">m5</text>
  <rect x="255" y="132" width="15" height="12" rx="2" fill="#0ea5e9" opacity=".6"/><text x="262" y="142" text-anchor="middle" fill="#e0f2fe" font-size="6">m8</text>

  <rect x="145" y="175" width="220" height="45" rx="5" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="155" y="192" fill="#bae6fd" font-size="8">Partition 2:</text>
  <rect x="215" y="182" width="15" height="12" rx="2" fill="#0ea5e9" opacity=".6"/><text x="222" y="192" text-anchor="middle" fill="#e0f2fe" font-size="6">m3</text>
  <rect x="235" y="182" width="15" height="12" rx="2" fill="#0ea5e9" opacity=".6"/><text x="242" y="192" text-anchor="middle" fill="#e0f2fe" font-size="6">m6</text>
  <rect x="255" y="182" width="15" height="12" rx="2" fill="#0ea5e9" opacity=".6"/><text x="262" y="192" text-anchor="middle" fill="#e0f2fe" font-size="6">m9</text>

  <text x="255" y="235" text-anchor="middle" fill="#38bdf8" font-size="8" font-style="italic">Ordering guaranteed WITHIN partition only!</text>

  <!-- Consumer Group -->
  <rect x="410" y="55" width="150" height="200" rx="10" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="485" y="75" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Consumer Group</text>
  <rect x="425" y="85" width="120" height="40" rx="6" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/>
  <text x="485" y="102" text-anchor="middle" fill="#86efac" font-size="9">Consumer A</text>
  <text x="485" y="115" text-anchor="middle" fill="#4ade80" font-size="7">← Partition 0</text>
  <rect x="425" y="130" width="120" height="40" rx="6" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/>
  <text x="485" y="147" text-anchor="middle" fill="#86efac" font-size="9">Consumer B</text>
  <text x="485" y="160" text-anchor="middle" fill="#4ade80" font-size="7">← Partition 1</text>
  <rect x="425" y="175" width="120" height="40" rx="6" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/>
  <text x="485" y="192" text-anchor="middle" fill="#86efac" font-size="9">Consumer C</text>
  <text x="485" y="205" text-anchor="middle" fill="#4ade80" font-size="7">← Partition 2</text>
  <text x="485" y="235" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">No duplicates!</text>

  <!-- Arrows -->
  <line x1="100" y1="75" x2="130" y2="75" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#arrK)"/>
  <defs><marker id="arrK" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#60a5fa"/></marker></defs>
  <line x1="365" y1="97" x2="425" y2="105" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrK2)"/>
  <line x1="365" y1="147" x2="425" y2="150" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrK2)"/>
  <line x1="365" y1="197" x2="425" y2="195" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrK2)"/>
  <defs><marker id="arrK2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#4ade80"/></marker></defs>

  <text x="290" y="280" text-anchor="middle" fill="#94a3b8" font-size="9">💡 If Consumer B dies → rebalance: Partition 1 reassigned to A or C. No data loss.</text>
  <text x="290" y="300" text-anchor="middle" fill="#64748b" font-size="8">Kafka 4.0+ uses KRaft mode (Raft consensus) — no ZooKeeper needed.</text>
  <text x="290" y="320" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">Kafka's append-only log = same concept as OS Write-Ahead Log (Book 38)!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Kafka Topic = ৩টা partition। Consumer Group = ৩টা consumer। প্রত্যেকে এক partition পড়ে — duplicate নয়। Consumer মরলে rebalance হয়।</div>

<div class="dialogue"><strong>কাফকা ইঞ্জিনিয়ার:</strong> LinkedIn ২০১১ সালে Kafka তৈরি করেছিল — একটা সহজ আইডিয়া দিয়ে। Append-only log। পানি নদীতে কখনো উল্টে ফেরে না — সবসময় সামনে বয়। একইভাবে Kafka-তে event কখনো মুছবে না বা পরিবর্তন করবে না। শুধু append। একটা Topic অনেকগুলো partition-এ ভাগ — প্রতিটায় ordering নিশ্চিত। Consumer Group-এর প্রত্যেক consumer একটা partition পড়ে — duplicate হবে না। কেউ মরলে rebalance হয় — partition অন্যকে দেওয়া হয়।</div>`,
  recall: [
    { q: "Kafka-তে ordering কোথায় guaranteed?", a: "শুধু একটা partition-এর ভেতরে। Across partitions নয়। তাই সম্পর্কিত events এক partition-এ রাখো (same key)।" },
    { q: "Consumer Group কী?", a: "একসাথে এক topic পড়া consumers-এর দল। প্রত্যেক partition ঠিক একজন consumer পড়ে — parallel processing, no duplicates।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 8 — The Assembly Line (dbt + ELT)
// ═══════════════════════════════════════════
doors.push({
  num: 8,
  icon: "🔧",
  color: "#fbbf24",
  tagline: "অ্যাসেম্বলি লাইন — The Assembly Line",
  name: "The Assembly Line",
  secret: "dbt = SQL-এর জন্য React। Modular, version-controlled, tested। ELT > ETL।",
  story: `<p class="scene-setting">একসময় transform হতো app server-এ — Python/Java দিয়ে। ETL: Extract → Transform (app) → Load। কিন্তু এখন warehouse-এ অনেক compute আছে। তাই ELT: Extract → Load (raw) → Transform (warehouse-এ)। dbt এই transformation পরিচালনা করে — version-controlled SQL, Jinja templating, testing। React component-এর মতো।</p>
<p class="scene-setting en">ELT replaced ETL. Load raw data first, transform inside the warehouse. dbt brings software engineering discipline to SQL: modularity, version control, testing, documentation.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔧 ETL vs ELT: Where Does Transformation Happen?</text>

  <!-- ETL (old) -->
  <rect x="10" y="45" width="275" height="130" rx="12" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
  <text x="147" y="68" text-anchor="middle" fill="#fdba74" font-size="12" font-weight="700">❌ ETL (Old Way)</text>
  <rect x="25" y="85" width="70" height="35" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1"/>
  <text x="60" y="107" text-anchor="middle" fill="#93c5fd" font-size="9">Extract</text>
  <line x1="95" y1="102" x2="110" y2="102" stroke="#64748b" stroke-width="1" marker-end="url(#arrE)"/>
  <defs><marker id="arrE" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/></marker></defs>
  <rect x="110" y="85" width="80" height="35" rx="6" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
  <text x="150" y="100" text-anchor="middle" fill="#fdba74" font-size="9" font-weight="700">Transform</text>
  <text x="150" y="112" text-anchor="middle" fill="#fb923c" font-size="7">app server</text>
  <line x1="190" y1="102" x2="205" y2="102" stroke="#64748b" stroke-width="1" marker-end="url(#arrE)"/>
  <rect x="205" y="85" width="65" height="35" rx="6" fill="#1e40af" stroke="#60a5fa" stroke-width="1"/>
  <text x="237" y="107" text-anchor="middle" fill="#93c5fd" font-size="9">Load</text>
  <text x="147" y="140" text-anchor="middle" fill="#f87171" font-size="9">⚠️ Python/Java does transform</text>
  <text x="147" y="155" text-anchor="middle" fill="#f87171" font-size="9">⚠️ Data leaves warehouse</text>

  <!-- ELT (new) -->
  <rect x="295" y="45" width="275" height="130" rx="12" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="432" y="68" text-anchor="middle" fill="#86efac" font-size="12" font-weight="700">✅ ELT (Modern Way)</text>
  <rect x="310" y="85" width="70" height="35" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1"/>
  <text x="345" y="107" text-anchor="middle" fill="#93c5fd" font-size="9">Extract</text>
  <line x1="380" y1="102" x2="395" y2="102" stroke="#64748b" stroke-width="1" marker-end="url(#arrE)"/>
  <rect x="395" y="85" width="65" height="35" rx="6" fill="#1e40af" stroke="#60a5fa" stroke-width="1"/>
  <text x="427" y="107" text-anchor="middle" fill="#93c5fd" font-size="9">Load</text>
  <line x1="460" y1="102" x2="475" y2="102" stroke="#64748b" stroke-width="1" marker-end="url(#arrE)"/>
  <rect x="475" y="85" width="80" height="35" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="515" y="100" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Transform</text>
  <text x="515" y="112" text-anchor="middle" fill="#4ade80" font-size="7">in warehouse!</text>
  <text x="432" y="140" text-anchor="middle" fill="#4ade80" font-size="9">✅ Warehouse does transform</text>
  <text x="432" y="155" text-anchor="middle" fill="#4ade80" font-size="9">✅ dbt: SQL + Git + tests</text>

  <!-- dbt workflow -->
  <text x="290" y="205" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="700">🏗️ dbt = React Components for SQL</text>
  <rect x="30" y="220" width="120" height="45" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="90" y="240" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="700">stg_customers</text>
  <text x="90" y="255" text-anchor="middle" fill="#fcd34d" font-size="7">SELECT * FROM raw</text>

  <rect x="170" y="220" width="120" height="45" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="230" y="240" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="700">stg_orders</text>
  <text x="230" y="255" text-anchor="middle" fill="#fcd34d" font-size="7">SELECT * FROM raw</text>

  <rect x="230" y="280" width="120" height="45" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
  <text x="290" y="300" text-anchor="middle" fill="#c7d2fe" font-size="9" font-weight="700">fct_sales</text>
  <text x="290" y="315" text-anchor="middle" fill="#a5b4fc" font-size="7">JOIN + aggregate</text>

  <line x1="90" y1="265" x2="250" y2="285" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="230" y1="265" x2="280" y2="285" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="290" y="275" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">dbt auto-detects dependency graph</text>

  <rect x="370" y="220" width="180" height="105" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="460" y="240" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">dbt Powers</text>
  <text x="460" y="258" text-anchor="middle" fill="#86efac" font-size="8">✅ Version control (Git)</text>
  <text x="460" y="272" text-anchor="middle" fill="#86efac" font-size="8">✅ Testing (not_null, unique)</text>
  <text x="460" y="286" text-anchor="middle" fill="#86efac" font-size="8">✅ Documentation auto-gen</text>
  <text x="460" y="300" text-anchor="middle" fill="#86efac" font-size="8">✅ Jinja templating</text>
  <text x="460" y="314" text-anchor="middle" fill="#86efac" font-size="8">✅ Dependency DAG</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ETL = transform app server-এ (ধীর)। ELT = transform warehouse-এ (দ্রুত)। dbt = modular SQL + Git + testing।</div>

<div class="dialogue"><strong>ডিবিটি ইঞ্জিনিয়ার:</strong> dbt = data build tool। তুমি SQL <code>SELECT</code> statement লেখো — Jinja template দিয়ে। dbt স্বয়ংক্রিয়ভাবে dependency graph বুঝে নেয়, কোন model আগে run করতে হবে সেটা ঠিক করে। Version control (Git), testing (not_null, unique), documentation — সব আছে। এটা SQL-এর জন্য React component architecture এর মতো।</div>`,
  recall: [
    { q: "ETL vs ELT — পার্থক্য কী?", a: "ETL = Extract → Transform (app server) → Load। ELT = Extract → Load (raw) → Transform (warehouse-এ)। Modern warehouse-এ compute বেশি তাই ELT সস্তা ও দ্রুত।" },
    { q: "dbt কী করে?", a: "Modular SQL SELECT statement লেখো (Jinja template সহ)। dbt dependency graph বানায়, version control + testing দেয়। React component-এর মতো।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 9 — The Lakehouse (Iceberg/Delta/Hudi)
// ═══════════════════════════════════════════
doors.push({
  num: 9,
  icon: "🏠",
  color: "#22c55e",
  tagline: "লেকহাউস — The Lakehouse",
  name: "The Lakehouse",
  secret: "Lake + House = সস্তা storage + warehouse feature। Iceberg/Delta দিয়ে ACID লেক-এ।",
  story: `<p class="scene-setting">একসময় দুটো জগত ছিল — Data Warehouse (দামি, fast, structured) আর Data Lake (সস্তা, slow, messy "data swamp")। ২০২০-এর দশকে এরা মিলে Lakehouse তৈরি করেছে। সস্তা object storage (S3/DO Spaces) এর উপর metadata layer (Iceberg/Delta) বসায় — ACID transaction, time travel, schema evolution।</p>
<p class="scene-setting en">Data Lake + Warehouse = Lakehouse. Cheap object storage + metadata layer (Iceberg/Delta/Hudi) = ACID, time travel, schema evolution without vendor lock-in.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🏠 Lakehouse: Cheap Storage + Metadata Layer</text>

  <!-- Compute Engines (top) -->
  <rect x="20" y="45" width="100" height="35" rx="6" fill="#1e40af" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="70" y="67" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="700">Spark</text>
  <rect x="130" y="45" width="100" height="35" rx="6" fill="#1e40af" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="180" y="67" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="700">Trino</text>
  <rect x="240" y="45" width="100" height="35" rx="6" fill="#1e40af" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="290" y="67" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="700">Snowflake</text>
  <rect x="350" y="45" width="100" height="35" rx="6" fill="#1e40af" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="400" y="67" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="700">DuckDB</text>
  <rect x="460" y="45" width="100" height="35" rx="6" fill="#1e40af" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="510" y="67" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="700">Flink</text>
  <text x="290" y="95" text-anchor="middle" fill="#64748b" font-size="8">Multiple engines read the SAME data — no vendor lock-in!</text>

  <!-- Metadata Layer -->
  <rect x="20" y="110" width="540" height="70" rx="10" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
  <text x="290" y="130" text-anchor="middle" fill="#c7d2fe" font-size="12" font-weight="900">📊 Metadata Layer (Iceberg / Delta / Hudi)</text>
  <text x="100" y="150" text-anchor="middle" fill="#a5b4fc" font-size="9">✅ ACID</text>
  <text x="200" y="150" text-anchor="middle" fill="#a5b4fc" font-size="9">✅ Time Travel</text>
  <text x="300" y="150" text-anchor="middle" fill="#a5b4fc" font-size="9">✅ Schema Evolution</text>
  <text x="410" y="150" text-anchor="middle" fill="#a5b4fc" font-size="9">✅ Concurrent Writers</text>
  <text x="510" y="150" text-anchor="middle" fill="#a5b4fc" font-size="9">✅ Predicate Pushdown</text>
  <text x="290" y="170" text-anchor="middle" fill="#818cf8" font-size="8">COW = rewrite file · MOR = append delta + merge at read</text>

  <!-- Storage Layer -->
  <rect x="20" y="195" width="540" height="60" rx="10" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="290" y="218" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="900">📦 Cheap Object Storage (S3 / DO Spaces / GCS)</text>
  <text x="290" y="238" text-anchor="middle" fill="#bae6fd" font-size="9">Parquet files · Immutable · $23/TB/month</text>

  <!-- Format comparison -->
  <rect x="30" y="270" width="160" height="55" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="1.5"/>
  <text x="110" y="290" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Apache Iceberg</text>
  <text x="110" y="305" text-anchor="middle" fill="#86efac" font-size="8">Hierarchical metadata</text>
  <text x="110" y="318" text-anchor="middle" fill="#86efac" font-size="8">Multi-engine ⭐</text>

  <rect x="210" y="270" width="160" height="55" rx="8" fill="#0f172a" stroke="#f97316" stroke-width="1.5"/>
  <text x="290" y="290" text-anchor="middle" fill="#fb923c" font-size="10" font-weight="700">Delta Lake</text>
  <text x="290" y="305" text-anchor="middle" fill="#fdba74" font-size="8">JSON transaction log</text>
  <text x="290" y="318" text-anchor="middle" fill="#fdba74" font-size="8">Spark-native</text>

  <rect x="390" y="270" width="160" height="55" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
  <text x="470" y="290" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">Apache Hudi</text>
  <text x="470" y="305" text-anchor="middle" fill="#d8b4fe" font-size="8">Record-level index</text>
  <text x="470" y="318" text-anchor="middle" fill="#d8b4fe" font-size="8">CDC / streaming ⭐</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Lakehouse = সস্তা storage (Parquet on S3) + metadata layer (Iceberg/Delta)। একই ডেটা Spark, Trino, Snowflake সবাই পড়ে।</div>

<div class="dialogue"><strong>লেকহাউস আর্কিটেক্ট:</strong> একসময় data lake ছিল "data swamp" — ফাইল আছে কিন্তু ACID নেই, concurrent write নেই, update পারবে না। Iceberg, Delta, Hudi এসে সমাধান করল — metadata layer বসিয়ে। Parquet ফাইল সস্তা storage-এ থাকে, metadata layer ACID আর time travel দেয়। আর সবচেয়ে বড় জিনিস — তুমি একই ডেটা Spark, Trino, Snowflake, DuckDB দিয়ে পড়তে পারো। Vendor lock-in নেই।</div>`,
  recall: [
    { q: "COW vs MOR পার্থক্য?", a: "COW (Copy-on-Write): update হলে পুরো file rewrite — read-fast, write-slow। MOR (Merge-on-Read): delta append করে, read-এ merge — write-fast, read-slow।" },
    { q: "LedgerPilot-এর জন্য কোন format?", a: "Apache Iceberg — multi-engine support (DuckDB + Spark + Trino সব পড়তে পারে), vendor-neutral।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 10 — The Architect's Vision (Full Stack)
// ═══════════════════════════════════════════
doors.push({
  num: 10,
  icon: "🏗️",
  color: "#e8c547",
  tagline: "স্থপতির দৃষ্টি — The Architect's Vision",
  name: "The Architect's Vision",
  secret: "LedgerPilot-এর জন্য: DuckDB + Parquet। কোনো cluster লাগবে না। সহজ, সস্তা, দ্রুত।",
  story: `<p class="scene-setting">তুমি এখন ৯টা দরজা পার হয়েছ। OLTP, OLAP, Parquet, Star Schema, Spark, shuffle, CDC, Kafka, dbt, Lakehouse — সব শিখেছ। এখন সব এক জায়গায় — LedgerPilot-এর জন্য কী করবে?</p>
<p class="scene-setting en">You've passed 9 doors. Now the practical synthesis: what does LedgerPilot actually need?</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🏗️ LedgerPilot Data Engineering Roadmap</text>

  <!-- Phase 1 -->
  <rect x="20" y="50" width="540" height="90" rx="10" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="700">Phase 1: NOW (DuckDB + Parquet)</text>
  <rect x="40" y="85" width="120" height="40" rx="6" fill="#0f172a" stroke="#22c55e" stroke-width="1"/>
  <text x="100" y="102" text-anchor="middle" fill="#86efac" font-size="9">MySQL</text>
  <text x="100" y="115" text-anchor="middle" fill="#4ade80" font-size="7">(transactions)</text>
  <text x="175" y="108" text-anchor="middle" fill="#64748b" font-size="8">Django cmd</text>
  <line x1="160" y1="105" x2="200" y2="105" stroke="#475569" stroke-width="1" marker-end="url(#arrA)"/>
  <defs><marker id="arrA" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
  <rect x="210" y="85" width="120" height="40" rx="6" fill="#0f172a" stroke="#22c55e" stroke-width="1"/>
  <text x="270" y="102" text-anchor="middle" fill="#86efac" font-size="9">Parquet</text>
  <text x="270" y="115" text-anchor="middle" fill="#4ade80" font-size="7">(DO Spaces)</text>
  <line x1="330" y1="105" x2="370" y2="105" stroke="#475569" stroke-width="1" marker-end="url(#arrA)"/>
  <rect x="380" y="85" width="120" height="40" rx="6" fill="#0f172a" stroke="#22c55e" stroke-width="1"/>
  <text x="440" y="102" text-anchor="middle" fill="#86efac" font-size="9">DuckDB</text>
  <text x="440" y="115" text-anchor="middle" fill="#4ade80" font-size="7">(SQL analytics)</text>
  <text x="290" y="132" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Cost: $0 extra · No cluster · Single droplet</text>

  <!-- Phase 2 -->
  <rect x="20" y="155" width="540" height="90" rx="10" fill="#451a03" stroke="#f97316" stroke-width="2"/>
  <text x="290" y="177" text-anchor="middle" fill="#fb923c" font-size="12" font-weight="700">Phase 2: 3-6 Months (CDC + Iceberg)</text>
  <rect x="40" y="190" width="100" height="40" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="1"/>
  <text x="90" y="207" text-anchor="middle" fill="#fdba74" font-size="9">MySQL binlog</text>
  <text x="90" y="220" text-anchor="middle" fill="#fb923c" font-size="7">(CDC source)</text>
  <line x1="140" y1="210" x2="175" y2="210" stroke="#475569" stroke-width="1" marker-end="url(#arrA)"/>
  <rect x="185" y="190" width="100" height="40" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="1"/>
  <text x="235" y="207" text-anchor="middle" fill="#fdba74" font-size="9">Debezium</text>
  <text x="235" y="220" text-anchor="middle" fill="#fb923c" font-size="7">(capture)</text>
  <line x1="285" y1="210" x2="320" y2="210" stroke="#475569" stroke-width="1" marker-end="url(#arrA)"/>
  <rect x="330" y="190" width="100" height="40" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="1"/>
  <text x="380" y="207" text-anchor="middle" fill="#fdba74" font-size="9">Kafka</text>
  <text x="380" y="220" text-anchor="middle" fill="#fb923c" font-size="7">(stream)</text>
  <line x1="430" y1="210" x2="465" y2="210" stroke="#475569" stroke-width="1" marker-end="url(#arrA)"/>
  <rect x="475" y="190" width="70" height="40" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="1"/>
  <text x="510" y="207" text-anchor="middle" fill="#fdba74" font-size="9">Iceberg</text>
  <text x="510" y="220" text-anchor="middle" fill="#fb923c" font-size="7">(lakehouse)</text>
  <text x="290" y="237" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="700">Cost: +$20-40/mo · Real-time sync · When transactions &gt; 1M</text>

  <!-- Phase 3 -->
  <rect x="20" y="260" width="540" height="80" rx="10" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
  <text x="290" y="282" text-anchor="middle" fill="#a5b4fc" font-size="12" font-weight="700">Phase 3: 6-12 Months (Full Lakehouse + dbt)</text>
  <text x="290" y="302" text-anchor="middle" fill="#c7d2fe" font-size="9">Multiple sources → Airbyte → Iceberg → dbt → Star Schema → BI (Metabase)</text>
  <text x="290" y="318" text-anchor="middle" fill="#818cf8" font-size="9">Cost: +$50-100/mo · Semantic layer · When multi-source analytics needed</text>
  <text x="290" y="335" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">⚠️ Spark এখনো দরকার নেই — DuckDB 100GB পর্যন্ত single server-এ চালাতে পারে!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: LedgerPilot Data Engineering Roadmap — Phase 1 (DuckDB+Parquet) → Phase 2 (CDC+Iceberg) → Phase 3 (Full Lakehouse+dbt)।</div>

<div class="dialogue"><strong>স্থপতি:</strong> তুমি এখন বোঝো — LedgerPilot-এর জন্য DuckDB যথেষ্ট। কোনো Spark cluster লাগবে না। Django management command দিয়ে daily Parquet export করো, DuckDB দিয়ে SQL analytics চালাও। যখন transactions ১ মিলিয়ন ছাড়বে, তখন Debezium + Iceberg। Spark এখনো দরকার নেই — DuckDB single server-এ ১০০GB পর্যন্ত চালাতে পারে। এটাই practical wisdom — সব সরঞ্জাম নয়, সঠিক সরঞ্জাম।</div>`,
  recall: [
    { q: "LedgerPilot-এর জন্য Phase 1 কী?", a: "Django management command → daily Parquet export → DuckDB SQL analytics। $0 extra cost, single droplet।" },
    { q: "কখন Spark দরকার?", a: "যখন DuckDB-এর single-server limit (100GB+) ছাড়বে, বা multi-node cluster দরকার। এখনো না।" },
  ]
});
