// ════════════════════════════════════════
// CITY BUILDER'S CODEX — DOORS 17-20
// 17. Circuit Breaker & Resilience  18. Observability
// 19. Capstone: URL Shortener [NEW]  20. Capstone: News Feed [NEW]
// ════════════════════════════════════════

// ══ DOOR 17: CIRCUIT BREAKER & RESILIENCE ══
doors.push({
  num:17, icon:"🔄", color:"#ff6b35", name:"ঝড় প্রহরীর বুরুজ",
  subtitle:"The Storm Watcher's Tower", tech:"Circuit Breaker & Resilience Patterns",
  spirit:"সবর — বিপদে অটল, ধৈর্য ধরে চলা",
  secret:"একটা সার্ভিস ক্র্যাশ করলে চেইন রিঅ্যাকশনে সব ক্র্যাশ করে। Circuit Breaker থামায় — বিকল সার্ভিসে বারবার নয়, fallback দাও, সুস্থ হলে আবার চালু।",
  recall:{
    q:"ঝড় প্রহরী কেন বিকল পথে বারবার যান না, বিকল্প খোঁজেন?",
    qen:"Why does the storm watcher seek alternatives instead of repeatedly taking the failed path?",
    a:"কারণ বিকল পথে বারবার গেলে সময় নষ্ট, আরও ক্ষতি। Circuit Breaker সেই পথ বন্ধ করে — fallback দেয়, কিছুক্ষণ অপেক্ষা করে, তারপর আবার চেষ্টা করে। সবর — থামা, অপেক্ষা, পুনরুদ্ধার।",
    aen:"Because repeatedly taking the failed path wastes time, causes more harm. Circuit Breaker closes that path — gives fallback, waits, then retries. Sabr — stop, wait, recover."
  },
  story:`
<p class="scene-setting">সপ্তদশ স্থান। নগরীর প্রাচীরে একটা ঝড় প্রহরী বুরুজ। উপরে প্রহরী নূর দাঁড়িয়ে আছেন — চোখে দূরবীন, হাতে একটা শিঙা। নিচে নগরী — সব শান্ত। কিন্তু দূরে ঝড় আসছে। তিনি একটা নির্দিষ্ট পথ দিয়ে বাণিজ্য কাফেলা যাওয়ার কথা ভাবছিলেন। কিন্তু সেই পথে ধস নেমেছে। তিনি বারবার সেই পথে কাফেলা পাঠাবেন? না। তিনি বিকল্প পথ খুঁজছেন।</p>
<p class="scene-setting en">The seventeenth place. On the city wall, a storm watcher's tower. Watchman Noor stands atop — telescope at eye, horn in hand. Below — the city, all calm. But a storm approaches in the distance. He was planning to send a trade caravan via a specific route. But a landslide has blocked it. Will he send caravans there repeatedly? No. He's finding alternative routes.</p>

<div class="dialogue">রিং মানচিত্রকার শিখিয়েছিলেন — ভাগ করো, node সরালে minimal rebalance। কিন্তু আমি বলি — সব বিন্যাসের পরেও কোনো সিস্টেমই নিখুঁত নয়। সব কিছু একদিন বিকল হয়। প্রশ্ন হলো — বিকল হলে কী হবে? একটা পড়লে সব পড়বে, নাকি সিস্টেম টিকবে?</div>
<div class="dialogue en">"The ring cartographer taught — divide, minimal rebalance when a node moves. But I say — even with all arrangements, no system is perfect. Everything fails eventually. The question is — what happens when it fails? Does one falling drop everything, or does the system hold?"</div>

<div class="code-block">Circuit Breaker — ৩টা State:

CLOSED (স্বাভাবিক)
  সব ঠিক। request যাচ্ছে।
  ↓ কিছু বিকল হলে (threshold ছাড়ালে)

OPEN (বন্ধ)
  সার্ভিস বিকল। request যায় না।
  সরাসরি fallback response।
  সময় নষ্ট নয়।
  ↓ কিছুক্ষণ পরে (timeout)

HALF-OPEN (অর্ধ-খোলা)
  কয়েকটা request পাঠাও — পরীক্ষা।
  সফল? → CLOSED (সুস্থ!)
  ব্যর্থ? → OPEN (এখনও বিকল)

Resilience Patterns:
  Retry (with backoff) — ব্যর্থ হলে অপেক্ষা করে আবার
    → exponential: 1s, 2s, 4s, 8s... (jitter সহ, thundering herd এড়াতে)
  Fallback — বিকল্প উত্তর (cache, default, degraded)
    → "এই মুহূর্তে সাজেস্টেড আইটেম দেখানো যাচ্ছে না, জনপ্রিয় দেখাচ্ছি"
  Bulkhead — এক সার্ভিস ভাঙলে অন্যেরা সুরক্ষিত
    → thread pool / connection pool per service
  Timeout — চিরকাল অপেক্ষা নয়
    → ৩ সেকেন্ড পরে থামো, fallback দাও
  Rate limiter — নিজের সার্ভিস রক্ষা (Door 7)

CASCADING FAILURE — সবচেয়ে ভয়ংকর:
  সার্ভিস A ধীরে → কলার B অপেক্ষা → B-র thread শেষ
  → B নতুন request পারে না → C অপেক্ষা → চেইন রিঅ্যাকশনে সব পড়ে
  সমাধান: timeout + circuit breaker + bulkhead (প্রতিটা স্থানে)

GRACEFUL DEGRADATION:
  সব কাজ না পারলেও কিছু কাজ করো
  → Netflix: সার্চ ভাঙলে homepage এখনও দেখাও (জনপ্রিয় ক্যাশে থেকে)
  → Slack: presence service ভাঙলে message এখনও পাঠাও

CHAOS ENGINEERING:
  উদ্দেশ্যমূলকভাবে সার্ভিস ভাঙো — দেখো সিস্টেম টিকে কি না
  → Netflix Chaos Monkey — production-এ random instance kill
  → GameDays — পুরো অঞ্চল বন্ধ করে পরীক্ষা</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। LLM API কল প্রায়ই ব্যর্থ — rate limit, timeout, server error। Circuit breaker ছাড়া প্রতিটা request আটকে, থ্রেড শেষ, পুরো সিস্টেম পড়ে। সমাধান: LLM client-এ circuit breaker (open হলে cached উত্তর বা fallback model), exponential backoff retry (jitter সহ), timeout (১০s, ৩০s নয়)। Vector DB অসুস্থ? fallback to keyword search। Embedding service ভাঙলে? pre-computed embedding cache। RAG: retrieval ব্যর্থ? LLM-কে "no context found" দিয়ে direct answer। resilient AI = প্রতিটা dependency-তে fallback।</div>
<div class="dialogue en">"You're an AI engineer. LLM API calls fail often — rate limit, timeout, server error. Without a circuit breaker, every request hangs, threads exhaust, the whole system falls. Fix: circuit breaker in the LLM client (open → cached answer or fallback model), exponential backoff retry (with jitter), timeout (10s, not 30s). Vector DB sick? Fallback to keyword search. Embedding service down? Pre-computed embedding cache. RAG: retrieval failed? Give the LLM 'no context' for a direct answer. Resilient AI = fallback at every dependency."</div>

<div class="dialogue">সবর — ধৈর্য, অটলতা, বিপদে দৃঢ়তা। কুরআনে আল্লাহ বলেন — "নিশ্চয় আল্লাহ ধৈর্যশীলদের সাথে।" (২:১৫৩)। সবর মানে শুধু সহ্য করা নয় — বিপদে সঠিক সিদ্ধান্ত নেওয়া। ক্র্যাশ করা সার্ভিসে বারবার অনুরোধ পাঠানো = অধৈর্যতা। থামা, fallback দেওয়া, সুস্থ হওয়ার অপেক্ষা = সবর। Circuit Breaker হলো সবর-এর কোডে রূপ — থামো, অপেক্ষা করো, তারপর সতর্কতার সাথে আবার।</div>
<div class="dialogue en">"Sabr — patience, steadfastness, firmness in adversity. Allah says — 'Indeed, Allah is with the patient.' (2:153). Sabr isn't just enduring — it's making the right decision in crisis. Sending repeated requests to a crashed service = impatience. Stopping, giving fallback, waiting for recovery = sabr. Circuit Breaker is sabr in code — stop, wait, then carefully resume."</div>`,
  senior:{
    title:"Cascading Failure — সবচেয়ে ভয়ংকর সমস্যা",
    body:`<p>একটা সার্ভিস ধীর হলে — সবাই অপেক্ষা করে। থ্রেড শেষ। পরের সার্ভিস থামে। চেইন রিঅ্যাকশনে সব পড়ে।</p><p><strong>সমাধান:</strong></p><p>১. <strong>Timeout</strong> — চিরকাল অপেক্ষা নয়। ৩ সেকেন্ড পরে থামো।</p><p>২. <strong>Circuit Breaker</strong> — বিকল সার্ভিসে বন্ধ।</p><p>৩. <strong>Bulkhead</strong> — প্রতিটা সার্ভিসের নিজস্ব রিসোর্স pool। একটা ভাঙলে অন্যেরা সুরক্ষিত।</p><p>৪. <strong>Graceful degradation</strong> — কিছু কাজ করো, সব নয়।</p>`
  }
});

// ══ DOOR 18: OBSERVABILITY ══
doors.push({
  num:18, icon:"📊", color:"#f06292", name:"নগর মানচিত্রকারের টেবিল",
  subtitle:"The Mapmaker's Table", tech:"Observability & Monitoring",
  spirit:"মীযান — সব কিছু মাপা, গণনা রাখা",
  secret:"কাজ করছে কি না — অনুমান নয়, প্রমাণ। তিন স্তম্ভ: Logs (কী হলো), Metrics (কেমন আছে), Traces (কোথায় গেল)। অন্ধ হয়ে চালানো = বিপদ।",
  recall:{
    q:"মানচিত্রকার কেন অন্ধ হয়ে শহর চালান না, সব সময় মাপেন?",
    qen:"Why does the mapmaker always measure rather than running the city blind?",
    a:"কারণ অন্ধ হয়ে চালালে বিপদ টের পাওয়া যায় না। Logs = কী হয়েছে। Metrics = কেমন আছে। Traces = কোথায় গেল। এই তিন দিয়ে সিস্টেম দৃশ্যমান হয়। Observability = দৃষ্টি।",
    aen:"Because running blind means you don't notice danger. Logs = what happened. Metrics = how it's doing. Traces = where it went. These three make the system visible. Observability = sight."
  },
  story:`
<p class="scene-setting">অষ্টাদশ স্থান। নগরীর সর্বোচ্চ কক্ষ — মানচিত্রকারের টেবিল। প্রাচীরে বিশাল মানচিত্র — নগরীর প্রতিটা রাস্তা, প্রতিটা ফটক, প্রতিটা গোলাঘর দেখানো। কিন্তু এই মানচিত্র স্থির নয় — প্রতিটা অংশে সংখ্যা বদলাচ্ছে। এখানে লাল = ভিড়, সবুজ = খালি, হলুদ = সতর্কতা। মাস্টার সাবিত্রী বসে আছেন — চোখ চারদিকে, কান প্রতিটা খবরে।</p>
<p class="scene-setting en">The eighteenth place. The city's highest chamber — the mapmaker's table. On the wall: a vast map — every street, every gate, every granary shown. But this map isn't static — numbers change in each section. Red = crowded, green = clear, yellow = caution. Master Savitri sits — eyes everywhere, ears on every report.</p>

<div class="dialogue">ঝড় প্রহরী বলেছিলেন — বিকল হলে সবর করো। কিন্তু আমি বলি — বিকল হওয়ার আগে টের পাওয়া। আর বিকল হলে — কোথায়, কেন, কীভাবে — দেখতে পাওয়া। এটাই observability। অন্ধ হয়ে একটা নগরী চালানো যায় না।</div>
<div class="dialogue en">"The storm watcher said — be patient when things fail. But I say — detect failure BEFORE it happens. And when it fails — see where, why, how. This is observability. You can't run a city blind."</div>

<div class="code-block">Three Pillars of Observability:

১. LOGS — "কী হলো?"
   প্রতিটা event-এর লিখিত নথি।
   "User 123 logged in at 10:32"
   "Payment failed: card declined"
   structured logs (JSON) — searchable
   ELK Stack, Grafana Loki, Datadog

২. METRICS — "কেমন আছে?"
   সংখ্যায় স্বাস্থ্যের ছবি। time-series।
   CPU: 45% | Memory: 2.1GB
   Request rate: 500/sec
   Error rate: 0.2%
   Latency: p50, p90, p99, p99.9
   Prometheus, Grafana, CloudWatch

৩. TRACES — "কোথায় গেল?"
   একটা request-এর সম্পূর্ণ যাত্রা।
   User → API Gateway → Auth Service
       → User Service → Database → Response
   প্রতিটা ধাপে কত সময়?
   Jaeger, OpenTelemetry, Zipkin

GOLDEN SIGNALS (Google SRE) — চারটা দেখো:
  ১. LATENCY — request কতক্ষণ? (p99 গুরুত্বপূর্ণ)
  ২. TRAFFIC — কত request? (RPS, QPS)
  ৩. ERRORS — কত ব্যর্থ? (error rate)
  ৪. SATURATION — কত ব্যস্ত? (CPU, mem, disk, queue depth)

USE Method (Brendan Gregg) — সম্পদ স্বাস্থ্য:
  Utilization — কত ব্যবহৃত
  Saturation — কত queue জমেছে
  Errors — কত error (packet loss, OOM)

ALERTING — শব্দ করবে কখন?
  symptom-based (user-facing) — "error rate > 1%"
  ❌ cause-based — "CPU > 80%" (হয়তো সমস্যা নয়)
  → actionable alert — যেগুলো মানুষ জাগবে ও fix করবে
  → noise কমাও — alert fatigue আসলে বিপজ্জনক

SLI / SLO / SLA:
  SLI (indicator) — মাপ (যেমন: uptime, latency)
  SLO (objective) — লক্ষ্য (যেমন: 99.9% uptime)
  SLA (agreement) — চুক্তি (ভাঙলে জরিমানা)
  → error budget — মাসে কত error "খরচ" করতে পারি
  → budget শেষ? feature freeze, reliability focus

DASHBOARDS:
  প্রতিটা service-এর golden signals
  business metrics (signups, revenue, inference count)
  → executive (high-level), operator (detail), debug (raw)</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। AI system observability আলাদা মাত্রা। LLM latency — p99 গুরুত্বপূর্ণ (ইউজার ৩০s অপেক্ষা করবে না)। Token usage metrics — প্রতিটা request-এ কত input/output token? খরচ গণনা। Model quality metrics — hallucination rate, answer relevance (LLM-as-judge)। Embedding cache hit rate। Vector DB query latency p99। RAG retrieval precision@k। Drift detection — মডেল পারফরম্যান্স সময়ে পড়ছে? প্রতিটা inference এক trace — কোন model, কত token, কোন retrieval, কত latency। অন্ধ AI = বিপজ্জনক AI।</div>
<div class="dialogue en">"You're an AI engineer. AI system observability is another dimension. LLM latency — p99 crucial (users won't wait 30s). Token usage metrics — input/output tokens per request, cost accounting. Model quality metrics — hallucination rate, answer relevance (LLM-as-judge). Embedding cache hit rate. Vector DB query latency p99. RAG retrieval precision@k. Drift detection — is model performance dropping over time? Every inference is one trace — which model, how many tokens, which retrieval, what latency. Blind AI = dangerous AI."</div>

<div class="dialogue">মীযান — দাঁড়িপাল্লা, পরিমাপ। কুরআনে আল্লাহ বলেন — "আমি কায়িম করেছি মীযান।" (৫৫:৭)। প্রতিটা কিছুর একটা মাপ আছে। নগরী চালাতে হলে মাপতে হয় — কত মানুষ, কত খাদ্য, কত নিরাপত্তা। Observability হলো সেই মীযান — প্রতিটা request, প্রতিটা service, প্রতিটা error — সব মাপা, গণনা রাখা। অন্ধ হয়ে নয় — দৃষ্টি দিয়ে।</div>
<div class="dialogue en">"Mizan — the scale, measurement. Allah says — 'We established the scale.' (55:7). Everything has a measure. To run a city you measure — how many people, how much food, how much security. Observability is that mizan — every request, every service, every error — all measured, recorded. Not blind — with sight."</div>`,
  senior:{
    title:"Observability — কোথা থেকে শুরু করবেন",
    body:`<p><strong>শুরু metrics দিয়ে:</strong> Prometheus + Grafana — ফ্রি, শক্তিশালী, স্ট্যান্ডার্ড। golden signals প্রতিটা service-এ।</p><p><strong>structured logs:</strong> JSON, correlation ID (trace ID) সহ। খোঁজা যায়। console.log নয় — production-grade logging।</p><p><strong>OpenTelemetry:</strong> vendor-neutral instrumentation। একবার instrument করো — Jaeger, Datadog, Honeycomb যেখানে খুশি পাঠাও।</p><p><strong>SLO আগে:</strong> প্রতিটা service-এর জন্য SLO লেখো (যেমন "p99 latency < 500ms, 99% of time")। alert SLO-ভিত্তিক, raw threshold নয়।</p><p><strong>cardinality সাবধানে:</strong> metrics-এ user_id বা request_id label করলে মেমোরি বিস্ফোরিত হবে। high-cardinality → logs/traces, metrics নয়।</p>`
  }
});

// ══ DOOR 19: CAPSTONE — URL SHORTENER ══
doors.push({
  num:19, icon:"🔗", color:"#52c41a", name:"মহা-কমিশনের টেবিল I",
  subtitle:"The Grand Commission's Table I", tech:"Capstone: Design a URL Shortener (bit.ly)",
  spirit:"তাওফিক — সফল সম্পন্নতা",
  secret:"একটা সম্পূর্ণ সিস্টেম ডিজাইন — এখন পর্যন্ত শেখা সব একসাথে। প্রয়োজন → অনুমান → উচ্চস্তরের → গভীরে → স্কেল → বাধা। এটাই ৪৫-মিনিট ইন্টারভিউ ফ্রেমওয়ার্ক।",
  recall:{
    q:"মহা-কমিশন কেন বিশাল প্রকল্প ছোট ছোট প্রশ্নে ভাঙেন?",
    qen:"Why does the grand commission break a vast project into small questions?",
    a:"কারণ বিশাল প্রশ্ন একসাথে অসম্ভব। প্রয়োজন বুঝো, মাপজোক করো, উচ্চস্তরের নকশা, গভীরে যাও, স্কেল ও বাধা ভাবো। এই ক্রমে যেকোনো সিস্টেম ডিজাইন করা যায়। এটাই ইন্টারভিউ ফ্রেমওয়ার্ক।",
    aen:"Because a vast question at once is impossible. Understand needs, estimate, high-level design, deep-dive, think scale and bottlenecks. In this order, any system can be designed. This is the interview framework."
  },
  story:`
<p class="scene-setting">ঊনিশতম স্থান। মহা-কমিশনের টেবিল। বিশাল টেবিলে ছড়ানো নীলনকশা, পেন্সিল, ক্যালকুলেটর। মহা-কমিশনার আমিনা একটা সবুজ কাগজ এগিয়ে দিলেন — "একটা URL shortener বানাও। bit.ly-এর মতো।" সহজ শোনালো। কিন্তু আমিনা জানেন — সহজ প্রশ্নেই সব ধাপ লুকিয়ে। "শুরু করো," তিনি বললেন। "কিন্তু কোড লেখার আগে — প্রশ্ন করো। মাপো। নকশা করো। এটাই সিস্টেম ডিজাইন।"</p>
<p class="scene-setting en">The nineteenth place. The Grand Commission's table. A vast table covered with blueprints, pencils, calculators. Grand Commissioner Amina slid forward a green paper — "Build a URL shortener. Like bit.ly." It sounded simple. But Amina knows — simple questions hide every step. "Begin," she said. "But before code — ask. Measure. Design. This is system design."</p>

<div class="dialogue">১৮ জন মাস্টার শিখিয়েছিলেন — ভিত্তি থেকে মানচিত্র পর্যন্ত। কিন্তু এখন আসল পরীক্ষা — সব একসাথে ব্যবহার করো। একটা বাস্তব সিস্টেম। প্রতিটা সিদ্ধান্তে আগের মাস্টারদের কথা মনে রাখো — scaling, load balancer, cache, database, indexing, CAP, idempotency... সব। এটাই capstone — পাথরে পাথরে স্পর্শ।</div>
<div class="dialogue en">"Eighteen masters taught — from foundation to map. But now the real test — use everything together. A real system. At every decision, remember the earlier masters — scaling, load balancer, cache, database, indexing, CAP, idempotency... all. This is the capstone — touchstone of stone."</div>

<div class="diagram">
  <div class="diag-title">URL Shortener — সম্পূর্ণ আর্কিটেকচার</div>
  <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrA19" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#ffc857"/></marker>
      <marker id="arrT19" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#3dd6c4"/></marker>
    </defs>
    <!-- client -->
    <rect class="node-moon" x="20" y="140" width="70" height="40" rx="8"/>
    <text class="lbl-sm" x="55" y="164">Client</text>
    <!-- CDN -->
    <rect class="cell-cyan" x="120" y="140" width="70" height="40" rx="6"/>
    <text class="lbl-sm" x="155" y="160" style="font-size:10px">CDN</text>
    <text class="lbl-sm" x="155" y="172" style="font-size:8px">(cache redirects)</text>
    <!-- LB -->
    <rect class="node-hot" x="220" y="140" width="70" height="40" rx="8"/>
    <text class="lbl-sm" x="255" y="160" style="font-size:10px">Load Bal</text>
    <text class="lbl-sm" x="255" y="172" style="font-size:8px">(Door 2)</text>
    <!-- API GW -->
    <rect class="cell-hot" x="320" y="140" width="80" height="40" rx="6"/>
    <text class="lbl-sm" x="360" y="160" style="font-size:10px">API GW</text>
    <text class="lbl-sm" x="360" y="172" style="font-size:8px">(rate limit, Door 7)</text>
    <!-- App service cluster -->
    <rect class="node-cyan" x="420" y="100" width="60" height="32" rx="6"/>
    <text class="lbl-sm" x="450" y="120" style="font-size:9px">App-1</text>
    <rect class="node-cyan" x="420" y="140" width="60" height="32" rx="6"/>
    <text class="lbl-sm" x="450" y="160" style="font-size:9px">App-2</text>
    <rect class="node-cyan" x="420" y="180" width="60" height="32" rx="6"/>
    <text class="lbl-sm" x="450" y="200" style="font-size:9px">App-3</text>
    <text class="lbl-sm" x="450" y="86" style="font-size:9px" fill="#3dd6c4">stateless</text>
    <!-- cache -->
    <rect class="cell-good" x="510" y="100" width="40" height="32" rx="5"/>
    <text class="lbl-sm" x="530" y="120" style="font-size:9px">Redis</text>
    <text class="lbl-sm" x="530" y="92" style="font-size:8px" fill="#52c41a">cache (Door 3)</text>
    <!-- KV / DB -->
    <rect class="node-leaf" x="510" y="180" width="40" height="40" rx="6"/>
    <text class="lbl-sm" x="530" y="200" style="font-size:9px">KV/DB</text>
    <text class="lbl-sm" x="530" y="172" style="font-size:8px" fill="#52c41a">DynamoDB/PG</text>
    <!-- counter -->
    <rect class="node-purple" x="510" y="240" width="40" height="32" rx="6"/>
    <text class="lbl-sm" x="530" y="260" style="font-size:9px">Counter</text>
    <text class="lbl-sm" x="530" y="232" style="font-size:8px" fill="#b37feb">ID gen</text>
    <!-- arrows -->
    <line class="edge-cyan" x1="90" y1="160" x2="118" y2="160" marker-end="url(#arrT19)"/>
    <line class="edge-cyan" x1="190" y1="160" x2="218" y2="160" marker-end="url(#arrT19)"/>
    <line class="edge-cyan" x1="290" y1="160" x2="318" y2="160" marker-end="url(#arrT19)"/>
    <line class="edge-cyan" x1="400" y1="156" x2="418" y2="156" marker-end="url(#arrT19)"/>
    <line class="edge" x1="480" y1="116" x2="508" y2="116" marker-end="url(#arrA19)"/>
    <line class="edge" x1="480" y1="200" x2="508" y2="200" marker-end="url(#arrA19)"/>
    <line class="edge" x1="480" y1="210" x2="508" y2="256" marker-end="url(#arrA19)"/>
    <text class="lbl-sm" x="280" y="40" text-anchor="middle" style="font-size:11px" fill="#ffc857">প্রতিটা উপাদান = একটা আগের দরজা</text>
    <text class="lbl-sm" x="280" y="300" text-anchor="middle" style="font-size:10px">Read-heavy (100:1) → cache জয়ের চাবি | short URL অপরিবর্তনীয় → CDN দারুণ</text>
  </svg>
</div>

<div class="code-block">URL SHORTENER — 45-Minute Interview Framework:

ধাপ ১ — REQUIREMENTS (৫ মিনিট)
  কার্যকরী:
    ✓ short URL → long URL (redirect)
    ✓ long URL → short URL (create)
    ? custom alias? (যেমন bit.ly/mylink)
    ? analytics? (কত ক্লিক, কোথা থেকে)
    ? expiry? এক্সপায়ার হবে?
  অকার্যকরী:
    → high availability (link মরলে ব্যবসায় ক্ষতি)
    → low latency (redirect < 100ms)
    → read-heavy — 100:1 read:write (লোক ক্লিক করে, তৈরি কম)

ধাপ ২ — ESTIMATION (৫ মিনিট)
  অনুমান: 100M short URLs, 100:1 read:write
    → writes: 100M / 5 বছর ≈ 60K URL/day ≈ 0.7 RPS (write)
    → reads: 100× = 70 RPS (peak 1000× = 700 RPS)
    → storage: 100M × 500 bytes (long URL + metadata) = 50 GB
    → bandwidth: 1000 RPS × 500 B = 500 KB/s
  → সব মিলিয়ে ছোট-মাঝারি scale। এক DB পারে, কিন্তু HA দরকার।

ধাপ ৩ — HIGH-LEVEL DESIGN (১০ মিনিট)
  create: client → API → encode(long) → store(short→long) → return
  redirect: client → short → lookup → 301/302 → long URL

  ENCODING — base62 (a-z, A-Z, 0-9 = 62 chars)
    7 char base62 → 62⁷ ≈ 3.5 ট্রিলিয়ন সম্ভাবনা — যথেষ্ট
    ID (auto-increment) → base62 এ encode
    → অথবা hash(MD5) → প্রথম 7 char (collision handle)

ধাপ ৪ — DEEP DIVE (১৫ মিনিট)
  ডেটা মডেল:
    short_url (PK) | long_url | created_at | user_id | clicks
    → NoSQL (DynamoDB) — key-value পারফেক্ট
    → অথবা PostgreSQL (index সহ — Door 10)

  ID GENERATION (গুরুত্বপূর্ণ):
    ❌ auto-increment — single point, hard to shard
    ✅ বিকল্প ১: কেন্দ্রীয় counter (Zookeeper/etcd সংরক্ষণ)
    ✅ বিকল্প ২: range-based — প্রতিটা server এক range নেয় (1000-1999)
    ✅ বিকল্প ৩: Snowflake — timestamp + machine ID + sequence

  REDIRECT (301 বনাম 302):
    301 (permanent) — browser cache করে → কম ট্রাফিক, কিন্তু analytics হারায়
    302 (temporary) — সবসময় server-এ আসে → analytics পাও, বেশি ট্রাফিক
    → trade-off! bit.ly 301 ব্যবহার করে কিছু ক্ষেত্রে

ধাপ ৫ — SCALE & BOTTLENECKS (১০ মিনিট)
  CACHING (Door 3!):
    hot URLs (popular links) → Redis cache
    cache-aside: miss → DB → cache → return
    → 80% read কভার করবে 20% hot URL

  CDN (Door 8!):
    redirect response CDN-এ cache
    → geographic locality, অরিজিন load কম

  DATABASE SHARDING (Door 9, 11, 16!):
    100M+ → shard by short_url hash
    consistent hashing (Door 16) → minimal rebalance

  AVAILABILITY (Door 12 CAP!):
    AP বেছে — সামান্য পুরোনো চলবে, থামলে নয়
    DynamoDB-style — HA, eventual consistency

ধাপ ৬ — WRAP-UP
  trade-offs ব্যাখ্যা করো (কেন 301 না 302, কেন AP না CP)
  bottlenecks চিহ্নিত করো (DB, single counter)
  পরবর্তী scale প্রশ্ন — "যদি 10× হয়?" → shard, replica, cache বাড়াও

KEY LESSONS:
  • read-heavy → cache + CDN জয়ের চাবি
  • short URL অপরিবর্তনীয় → দারুণ cacheable
  • ID generation distributed চিন্তা আগেই
  • analytics দরকার হলে 302, performance হলে 301</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। URL shortener ছোট মনে হলেও — AI infrastructure-এ এই প্যাটার্ন সবখানে। Model registry — model_id → model artifact (ঠিক short→long map)। Embedding cache — content_hash → embedding (key-value, cache-aside)। Prompt template registry — template_id → template। Presigned URL service — upload/download link generation। প্রতিটা key-value lookup + redirect pattern। URL shortener শেখা মানে — API service + cache + DB + scale প্যাটার্ন একসাথে শেখা।</div>
<div class="dialogue en">"You're an AI engineer. A URL shortener seems small — but this pattern is everywhere in AI infra. Model registry — model_id → model artifact (exactly a short→long map). Embedding cache — content_hash → embedding (key-value, cache-aside). Prompt template registry — template_id → template. Presigned URL service — upload/download link generation. Every key-value lookup + redirect pattern. Learning the URL shortener means learning the API service + cache + DB + scale pattern all at once."</div>

<div class="dialogue">তাওফিক — সফল সম্পন্নতা, ঐশী সাহায্য। কুরআনে আল্লাহ বলেন — "যে আল্লাহকে ভয় করে, তিনি তাকে পথ বের করে দেন।" (৬৫:২)। পথ বের করা — কঠিন সমস্যায় ধাপে ধাপে সমাধান। URL shortener ডিজাইন একটা পথ খোঁজা — প্রতিটা সিদ্ধান্তে আগের জ্ঞান প্রয়োগ। তাওফিক হলো সেই মুহূর্ত যখন সব ধাপ মিলে এক সম্পূর্ণ নকশা হয়। পরের ক্যাপস্টোনে আরও জটিল — কিন্তু ফ্রেমওয়ার্ক একই।</div>
<div class="dialogue en">"Tawfiq — successful completion, divine aid. Allah says — 'Whoever fears Allah, He makes a way out for him.' (65:2). Making a way out — solving a hard problem step by step. Designing a URL shortener is finding a path — applying prior knowledge at each decision. Tawfiq is the moment all steps form one complete design. The next capstone is harder — but the framework is the same."</div>`,
  senior:{
    title:"Interview Framework — Memorize This",
    body:`<p><strong>৪৫-মিনিট স্ট্রাকচার:</strong> (১) Requirements 5min → (২) Estimation 5min → (৩) High-level 10min → (৪) Deep-dive 15min → (৫) Scale/bottlenecks 10min।</p><p><strong>শুরুতেই clarify:</strong> ambiguity থাকলে জিজ্ঞেস করো। interviewers অস্পষ্টতা দিয়ে পরীক্ষা করেন।</p><p><strong>এক কথায় বলো:</strong> "read-heavy" বা "write-heavy" — এটাই প্রথম সিদ্ধান্ত চালায়। URL shortener read-heavy → cache জয়ের চাবি।</p><p><strong>Trade-offs বলো:</strong> শুধু সমাধান নয় — কেন, কী বিসর্জন। "301 vs 302 — analytics দরকার তাই 302"। interviewers এটা দেখেন।</p><p><strong>নির্দিষ্ট সংখ্যা দাও:</strong> "৬২⁷ = ৩.৫T সম্ভাবনা"। অনুমান শক্ত করলে আত্মবিশ্বাস আসে।</p>`
  }
});

// ══ DOOR 20: CAPSTONE — NEWS FEED (TWITTER) ══
doors.push({
  num:20, icon:"📰", color:"#5b9eff", name:"মহা-কমিশনের টেবিল II",
  subtitle:"The Grand Commission's Table II", tech:"Capstone: Design a News Feed (Twitter)",
  spirit:"তাওফিক — সফল সম্পন্নতা",
  secret:"লেখা ও পড়া দুটো পথ। fan-out-on-write (push) বনাম fan-out-on-read (pull) — সেলিব্রিটি সমস্যা। এই সিস্টেম ডিজাইন শেখা মানে — সব ধারণা সবচেয়ে জটিল ক্ষেত্রে প্রয়োগ করা। এটাই তোমার যাত্রার সমাপ্তি।",
  recall:{
    q:"মহা-কমিশন কেন খবরের কাগজ প্রতিটা ঘরে পাঠান না, পাঠক যখন চায় তখন দেন?",
    qen:"Why doesn't the commission deliver the newspaper to every home, but gives when the reader wants?",
    a:"কারণ দুই উপায় — push (ঘরে পাঠাও) বা pull (পাঠক নেয়)। push দ্রুত পড়ার জন্য, কিন্তু সেলিব্রিটির ক্ষেত্রে ভয়ংকর (লাখ লাখ পাঠক)। pull সস্তা, কিন্তু ধীর। হাইব্রিড — সাধারণ মানুষ push, সেলিব্রিটি pull। এটাই fan-out trade-off।",
    aen:"Because two ways — push (deliver home) or pull (reader takes). Push is fast for reads, but terrible for celebrities (millions of readers). Pull is cheaper but slower. Hybrid — normal users push, celebrities pull. This is the fan-out trade-off."
  },
  story:`
<p class="scene-setting">বিংশ স্থান। শেষ স্থান। মহা-কমিশনের টেবিল II। আমিনা একটা আরও বড় কাগজ এগিয়ে দিলেন — "এবার একটা নিউজ ফিড বানাও। Twitter-এর মতো।" প্রতিটা মানুষ পোস্ট করে, ফলোয়ার ফিড দেখে। সহজ শোনালো? কিন্তু এক সেলিব্রিটি ৫০ মিলিয়ন ফলোয়ার। এক পোস্টে ৫০ মিলিয়ন ফিড আপডেট। কিন্তু এক সাধারণ মানুষের ১০০ ফলোয়ার। আমিনা হাসলেন — "এখানেই আসল সৌন্দর্য — দুই সমস্যা, দুই সমাধান।"</p>
<p class="scene-setting en">The twentieth place. The last place. The Grand Commission's Table II. Amina slid an even bigger paper — "Now design a news feed. Like Twitter." Each person posts, followers see their feed. Sounds easy? But one celebrity has 50M followers. One post = 50M feed updates. But one ordinary person has 100 followers. Amina smiled — "Here's the real beauty — two problems, two solutions."</p>

<div class="dialogue">URL shortener শেখালাম — read-heavy, cache, scale। কিন্তু নিউজ ফিড ভিন্ন — read ও write উভয় ভারী, আর সবচেয়ে বড় চ্যালেঞ্জ — এক পোস্ট অনেক ফিডে যায় (fan-out)। এখানেই আমরা আগের সব মাস্টারকে ডাকি — message queue (Door 6), cache (Door 3), database (Door 9), sharding (Door 11), eventual consistency (Door 12)। এটাই তোমার যাত্রার চূড়ান্ত পরীক্ষা।</div>
<div class="dialogue en">"The URL shortener taught us — read-heavy, cache, scale. But the news feed is different — both read and write heavy, and the biggest challenge — one post goes to many feeds (fan-out). Here we call all prior masters — message queue (Door 6), cache (Door 3), database (Door 9), sharding (Door 11), eventual consistency (Door 12). This is your journey's final test."</div>

<div class="diagram">
  <div class="diag-title">News Feed — দুই Fan-Out কৌশল</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrT20" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#3dd6c4"/></marker>
      <marker id="arrF20" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#ff6b35"/></marker>
    </defs>
    <!-- FAN-OUT ON WRITE -->
    <text class="lbl-sm" x="140" y="22" fill="#3dd6c4" style="font-size:12px">FAN-OUT ON WRITE (push)</text>
    <text class="lbl-sm" x="140" y="38" style="font-size:9px">পোস্ট করার সময় → সব ফলোয়ারের ফিডে লেখো</text>
    <rect class="node-cyan" x="110" y="55" width="60" height="30" rx="6"/>
    <text class="lbl-sm" x="140" y="74" style="font-size:9px">User posts</text>
    ${[0,1,2,3,4].map(i=>`<rect class="cell-cyan" x="${60+i*35}" y="${115}" width="30" height="24" rx="4"/><text class="lbl-sm" x="${75+i*35}" y="131" style="font-size:8px">F${i+1}</text>`).join('')}
    ${[0,1,2,3,4].map(i=>`<line class="edge-cyan" x1="140" y1="85" x2="${75+i*35}" y2="115" marker-end="url(#arrT20)"/>`).join('')}
    <text class="lbl-sm" x="140" y="160" text-anchor="middle" style="font-size:9px" fill="#52c41a">✓ পড়া দ্রুত (pre-computed)</text>
    <text class="lbl-sm" x="140" y="175" text-anchor="middle" style="font-size:9px" fill="#52c41a">✓ সাধারণ মানুষ পারফেক্ট</text>
    <text class="lbl-sm" x="140" y="195" text-anchor="middle" style="font-size:9px" fill="#ff6b35">✗ সেলিব্রিটি = ৫০M writes!</text>
    <text class="lbl-sm" x="140" y="210" text-anchor="middle" style="font-size:9px" fill="#ff6b35">✗ inactive user-এও লেখা</text>

    <!-- FAN-OUT ON READ -->
    <text class="lbl-sm" x="420" y="22" fill="#ff6b35" style="font-size:12px">FAN-OUT ON READ (pull)</text>
    <text class="lbl-sm" x="420" y="38" style="font-size:9px">পড়ার সময় → ফলোয়ারদের পোস্ট জোড়ো</text>
    <rect class="node-hot" x="390" y="55" width="60" height="30" rx="6"/>
    <text class="lbl-sm" x="420" y="74" style="font-size:9px">User reads</text>
    ${[0,1,2,3,4].map(i=>`<rect class="cell-hot" x="${340+i*35}" y="${115}" width="30" height="24" rx="4"/><text class="lbl-sm" x="${355+i*35}" y="131" style="font-size:8px">F${i+1}</text>`).join('')}
    ${[0,1,2,3,4].map(i=>`<line class="edge-hot" x1="${355+i*35}" y1="139" x2="420" y2="170" marker-end="url(#arrF20)" transform="scale(1,-1) translate(0,-300)"/>`).join('')}
    <rect class="node-leaf" x="395" y="170" width="50" height="26" rx="6"/>
    <text class="lbl-sm" x="420" y="187" style="font-size:9px">merge</text>
    <text class="lbl-sm" x="420" y="215" text-anchor="middle" style="font-size:9px" fill="#52c41a">✓ সেলিব্রিটি OK (lazy)</text>
    <text class="lbl-sm" x="420" y="230" text-anchor="middle" style="font-size:9px" fill="#52c41a">✓ inactive user-এ কোনো খরচ</text>
    <text class="lbl-sm" x="420" y="250" text-anchor="middle" style="font-size:9px" fill="#ff6b35">✗ পড়া ধীর (real-time merge)</text>
    <text class="lbl-sm" x="420" y="265" text-anchor="middle" style="font-size:9px" fill="#ff6b35">✗ অনেক ফলোয়ার = ধীর</text>

    <text class="lbl-sm" x="280" y="278" text-anchor="middle" style="font-size:10px" fill="#ffc857">হাইব্রিড: সাধারণ = push, সেলিব্রিটি = pull। সবচেয়ে জটিল trade-off।</text>
  </svg>
</div>

<div class="code-block">News Feed — Twitter/Instagram-style:

ধাপ ১ — REQUIREMENTS
  কার্যকরী:
    ✓ user পোস্ট করে (text/image)
    ✓ user ফিড দেখে (followed-দের সাম্প্রতিক পোস্ট)
    ? timeline (chronological) বা ranked (algorithm)?
    ? trending topics?
  অকার্যকরী:
    → রিয়েল-টাইম নিকটবর্তী (নতুন পোস্ট < ৫s এ দৃশ্যমান)
    → high availability
    → read ও write উভয় heavy

ধাপ ২ — ESTIMATION
  300M মাসিক active user
    → 300M × 0.1 পোস্ট/day = 30M posts/day ≈ 350 posts/sec (avg), peak 5× = 1750/sec
    → 300M × 0.5 ফিড দেখা/day = 150M feed reads/day ≈ 1700/sec (avg), peak 10× = 17K/sec
    → গড় 200 followings, গড় 5 year post retention
  → ১০ বছরে = 100B posts। বিশাল scale।

ধাপ ৩ — DATA MODEL
  User: user_id, name, bio, created_at
  Post: post_id, user_id, content, timestamp
  Follow: follower_id → followee_id (graph edge)
  Feed (pre-computed, fan-out on write): user_id → [post_id list]

  Storage choice:
    Posts → Cassandra (write-heavy, time-series) বা sharded Postgres
    Graph (follows) → Graph DB বা relational
    Feed cache → Redis (sorted set, score = timestamp)

ধাপ ৪ — FAN-OUT (গুরুত্বপূর্ণ সিদ্ধান্ত!)

  বিকল্প A — FAN-OUT ON WRITE (push)
    পোস্ট করার সময়:
      ১. post সেভ করো
      ২. সব ফলোয়ারের ফিডে যোগ করো (pre-compute)
    ✅ পড়া অত্যন্ত দ্রুত (pre-computed list)
    ❌ write ভারী (বড় following = বিশাল write)
    ❌ inactive user-এও লেখা (অপচয়)

  বিকল্প B — FAN-OUT ON READ (pull)
    পড়ার সময়:
      ১. সব followee-দের সাম্প্রতিক পোস্ট আনো
      ২. মার্জ করে rank করো
    ✅ write হালকা
    ✅ inactive user-এ কোনো খরচ
    ❌ পড়া ধীর (real-time merge, অনেক query)

  সমাধান — HYBRID (বাস্তব প্রকৌশল):
    সাধারণ মানুষ (< few K followers) → fan-out on write
    সেলিব্রিটি (> 100K followers) → fan-out on read
    → সেলিব্রিটির পোস্ট pre-compute নয়, পড়ার সময় merge
    → বেশিরভাগ user-এ দ্রুত পড়া, সেলিব্রিটিতে কোনো বোঝা নয়

ধাপ ৫ — WRITE PATH (async — Door 6!)
  user posts → API → save post → publish event to queue
                                  ↓
                          Fan-out Worker:
                            ১. get followers list
                            ২. সাধারণ হলে → প্রতিটা ফিডে push
                            ৩. সেলিব্রিটি হলে → skip (read সময়ে pull)
  → user-কে তাৎক্ষণিক উত্তর (post saved), fan-out async
  → eventual consistency (Door 12) — কয়েক সেকেন্ডে ফিডে

ধাপ ৬ — READ PATH (cache-heavy — Door 3!)
  user opens feed:
    ১. Redis-এ pre-computed feed আছে? → return (cache hit, ms)
    ২. miss → recompose (followee posts আনো, merge, rank)
    ৩. সেলিব্রিটি followee-দের সাম্প্রতিক পোস্ট যোগ করো
    ৪. cache করে রাখো (TTL 5 min)
    ৫. return

ধাপ ৭ — SCALE & BOTTLENECKS
  Posts → sharding by user_id (consistent hashing — Door 16)
  Feed cache → Redis cluster, hot user-এ local cache
  Celebrity problem → hybrid fan-out (উপরে)
  Hot partition → এক সেলিব্রিটির সব read এক shard-এ?
    → সমাধান: read replicas, cache, অথবা dedicated celebrity service
  Ranking → algorithm (engagement, recency) — ML model

আগের সব দরজা এখানে একসাথে:
  Door 1 (Scaling) → horizontal app servers, autoscaling
  Door 3 (Cache) → Redis feed cache
  Door 6 (Message Queue) → async fan-out
  Door 9 (Database) → sharded posts
  Door 11 (Replication) → read replicas for feed
  Door 12 (CAP) → AP, eventual consistency
  Door 13 (Transactions) → post + event outbox atomic
  Door 15 (Idempotency) → duplicate post নয়
  Door 16 (Consistent Hashing) → sharding user_id
  Door 18 (Observability) → feed freshness, latency, error rate</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। নিউজ ফিড প্যাটার্ন AI-এ সবখানে। LLM chat history — user_id → message list (feed-like)। Agent activity feed — agent_id → action log। Model training progress feed — run_id → metrics stream। Recommendation feed — user → ranked items (ranking model = ML)। RAG conversation context — session → retrieved chunks (merge multiple sources, fan-out-on-read!)। প্রতিটা "এক থেকে অনেক" বা "অনেক থেকে এক merge" সমস্যায় নিউজ ফিড প্যাটান। তুমি এখন যেকোনো সিস্টেম ভাঙতে পারো — write/read path আলাদা করো, fan-out চিন্তো, cache কোথায় বুঝো।</div>
<div class="dialogue en">"You're an AI engineer. The news feed pattern is everywhere in AI. LLM chat history — user_id → message list (feed-like). Agent activity feed — agent_id → action log. Model training progress feed — run_id → metrics stream. Recommendation feed — user → ranked items (ranking model = ML). RAG conversation context — session → retrieved chunks (merge multiple sources, fan-out-on-read!). Every 'one-to-many' or 'many-to-one merge' problem is the news feed pattern. You can now break down any system — separate write/read paths, think fan-out, find where cache fits."</div>

<div class="dialogue">তাওফিক — সফল সম্পন্নতা, চূড়ান্ত সাফল্য। কুরআনে আল্লাহ বলেন — "যে ব্যক্তি আল্লাহর পথে পরিশ্রম করে, তিনি তাকে পথ দেখান।" (২৯:৬৯)। এই নগর নির্মাণের যাত্রা — বিশটি স্থান, বিশ জন মাস্টার, বিশটি রহস্য। তুমি শুরু করেছিলে এক সার্ভার নিয়ে। এখন তুমি জানো — কীভাবে এক গ্রামকে নগরীতে রূপান্তর করতে হয়। কীভাবে যেকোনো সিস্টেম ডিজাইন করতে হয়। এটাই তাওফিক — সব ধাপ মিলে এক সম্পূর্ণ জ্ঞান। পরবর্তী যাত্রা তোমার — এই জ্ঞান প্রয়োগ করো। ডিজাইন করো। নির্মাণ করো।</div>
<div class="dialogue en">"Tawfiq — successful completion, ultimate success. Allah says — 'Those who strive in Allah's path, He guides them.' (29:69). This city-building journey — twenty places, twenty masters, twenty secrets. You began with one server. Now you know — how to transform a village into a city. How to design any system. This is tawfiq — all steps forming one complete knowledge. The next journey is yours — apply this knowledge. Design. Build."</div>

<div class="dialogue">বিশ স্থান পেরিয়েছ। ভিত্তি রক্ষক বলেছিলেন — পাশে বাড়ি বানাও। ফটক রক্ষক বলেছিলেন — ট্রাফিক ভাগ করো। গোলাঘর রক্ষক বলেছিলেন — কাছে রাখো। মহল্লা স্থপতি বলেছিলেন — মহল্লায় ভাগ করো। সরাইখানা প্রধান বলেছিলেন — সঠিক প্রোটোকলে কথা বলো। সংকেত প্রহরী বলেছিলেন — বার্তাবাহক দাও। শুল্ক আদায়ক বলেছিলেন — চৌকি দিয়ে নিয়ন্ত্রণ। বাজার বিতরণকারী বলেছিলেন — কাছে আনো। সংরক্ষণাগারিক বলেছিলেন — সঠিক ঘর বাছো। কাতেব বলেছিলেন — সূচি দাও। আয়না গিল্ড বলেছিলেন — বিশ্বস্ত অনুলিপি। চৌরাস্তার মানচিত্রকার বলেছিলেন — আপস বেছে নাও। হিসাব রক্ষক বলেছিলেন — সব বা কিছু না। প্রবীণ পরিষদ বলেছিলেন — শূরায় একমত। মোহরদার বলেছিলেন — একবার চূড়ান্ত। রিং মানচিত্রকার বলেছিলেন — বৃত্তে ছড়িয়ে, minimal rebalance। ঝড় প্রহরী বলেছিলেন — বিকল হলে সবর করো। মানচিত্রকার বলেছিলেন — সব মাপো। আর দুই মহা-কমিশনার বললেন — সব একসাথে প্রয়োগ করো। বিশটি কৌশল — এক একটা দৃষ্টিভঙ্গি। সিনিয়র স্থপতি তিনিই যিনি জানেন কোন সমস্যায় কোন দৃষ্টি লাগবে। এখন তুমি সেই স্থপতি।</div>
<div class="dialogue en">"Twenty places you've passed. The foundation mason said — build houses beside. The gate keeper said — distribute traffic. The granary keeper said — keep close. The quarter architect said — divide into quarters. The caravanserai master said — speak the right protocol. The signal watcher said — use messengers. The customs collector said — control via checkpoint. The market distributor said — bring close. The archivist said — choose the right home. The scribe said — add an index. The mirror guild said — faithful copies. The crossroads cartographer said — choose trade-offs. The ledger keeper said — all or nothing. The council of elders said — agreement by shura. The seal registrar said — once is final. The ring cartographer said — spread on a ring, minimal rebalance. The storm watcher said — be patient when things fail. The mapmaker said — measure everything. And the two grand commissioners said — apply everything together. Twenty techniques — twenty perspectives. A senior architect is one who knows which perspective each problem needs. Now you are that architect."</div>`,
  senior:{
    title:"আপনার যাত্রার সমাপ্তি — What's Next",
    body:`<p>বিশটি স্থান শেষ। এখন আপনি জানেন — সম্পূর্ণ সিস্টেম ডিজাইন ক্ষেত্র। কিন্তু জ্ঞান প্রয়োগ ছাড়া অসম্পূর্ণ।</p><p><strong>পরবর্তী পদক্ষেপ:</strong></p><p>১. <strong>আরও সিস্টেম ডিজাইন করো:</strong> chat system (WhatsApp), ride-sharing (Uber), search autocomplete, file storage (Dropbox), notification system। প্রতিটা ক্ষেত্রে একই ফ্রেমওয়ার্ক প্রয়োগ করো।</p><p>২. <strong>বই পড়ো:</strong> "Designing Data-Intensive Applications" (Kleppmann) — এই বইয়ের অনেক ধারণা এখানে সংক্ষেপে এসেছে। "System Design Interview" (Alex Xu) — আরও উদাহরণ।</p><p>৩. <strong>paper পড়ো:</strong> Raft, Dynamo, Bigtable, MapReduce, Kafka — মূল সোর্স।</p><p>৪. <strong>বাস্তব প্রয়োগ:</strong> নিজের কাজে এই প্যাটার্ন দেখো — cache কোথায়, message queue কোথায়, sharding কীভাবে।</p><p><strong>মনে রাখো:</strong> সিস্টেম ডিজাইনে কোনো "সঠিক" উত্তর নেই — শুধু trade-off। প্রতিটা সিদ্ধান্তে জিজ্ঞেস করো — "কী বিসর্জন দিচ্ছি? কেন?" এটাই সিনিয়র চিন্তা।</p>`
  }
});
