// ════════════════════════════════════════
// CITY BUILDER'S CODEX — DOORS 5-8
// System Design: CAP → Observability
// ════════════════════════════════════════

// ══ DOOR 5: CAP THEOREM ══
doors.push({
  num:5, icon:"🛤️", color:"#ffc857", name:"চৌরাস্তার মানচিত্রকার",
  subtitle:"The Crossroads Cartographer", tech:"CAP Theorem & Consistency",
  spirit:"কিবলা — এক দিক বেছে নেওয়া",
  secret:"তিনটা গুণ — Consistency, Availability, Partition tolerance। তিনটে একসাথে অসম্ভব। দুটো পাবে, একটা বিসর্জন। পছন্দ তোমার।",
  recall:{
    q:"চৌরাস্তায় দাঁড়িয়ে তিন দিকে একসাথে যাওয়া যায় কি?",
    qen:"Standing at a crossroads, can you go three directions simultaneously?",
    a:"না। এক দিক বেছে নিতে হয়। CAP Theorem-ও তেমনি — Consistency, Availability, Partition tolerance — তিনটার মধ্যে দুটো পাবে, একটা বিসর্জন। কোন দুটো — সেই সিদ্ধান্তই তোমার সিস্টেমের চরিত্র।",
    aen:"No. You must choose one direction. CAP Theorem too — Consistency, Availability, Partition tolerance — you get two, sacrifice one. Which two — that defines your system's character."
  },
  story:`
<p class="scene-setting">পঞ্চম স্থান। একটা বিশাল চৌরাস্তা — চার দিকে চার রাস্তা। মাঝখানে একটা পাথরের স্তম্ভ, তাতে চার দিকের নাম। মানচিত্রকার ইসহাক দাঁড়িয়ে আছেন — হাতে কম্পাস, পাশে মানচিত্রের বই। একজন ভ্রমণকারী এসে জিজ্ঞেস করলেন — "আমি উত্তর আর পূর্ব দুটোই একসাথে যেতে চাই।" ইসহাক হাসলেন। "অসম্ভব। এক দিক বেছে নাও।"</p>
<p class="scene-setting en">The fifth place. A vast crossroads — four roads, four directions. In the center: a stone pillar with directional names. Cartographer Ishaq stands — compass in hand, map book at his side. A traveler asks — "I want to go north and east simultaneously." Ishaq smiled. "Impossible. Choose one."</p>

<div class="dialogue">সংকেত প্রহরী বলেছিলেন — এক event একাধিক সার্ভিসে পাঠাও। কিন্তু যখন একাধিক সার্ভিস একই ডেটা দেখে — সবসময় কি একই দেখে? যদি একটা সার্ভিস নতুন ডেটা পায়, আরেকটা পুরনো পায় — অমিল। এখানেই CAP Theorem — সবচেয়ে গুরুত্বপূর্ণ সিদ্ধান্ত।</div>
<div class="dialogue en">"The signal watcher said — one event to multiple services. But when multiple services see the same data — do they always see the same? If one gets new data, another gets old — mismatch. Here's the CAP Theorem — the most important decision."</div>

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

   ┌─────────────┐
   │ CAP Triangle│
   └─────────────┘
         C
        / \\
       /   \\
      A-----P
   
  বাস্তবে: P বাদ দেওয়া যায় না।
  তাই সিদ্ধান্ত: CP না AP?</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">🔴 CP — Consistency বেছে নাও</div>নেটওয়ার্ক ভাঙলে পুরনো ডেটা দেওয়ার চেয়ে উত্তর না দেওয়া ভালো। ব্যাংকিং, পেমেন্ট — ভুল উত্তর মানে টাকা হারালো।<br>PostgreSQL, MongoDB (strong), HBase</div>
<div class="cmp-card cmp-good"><div class="cmp-label">🟢 AP — Availability বেছে নাও</div>নেটওয়ার্ক ভাঙলেও উত্তর দাও — পুরনো হলেও। সোশ্যাল মিডিয়া ফিড — ১ সেকেন্ড পুরনো হলে কিছু যায় না। থামলে যায়।<br>Cassandra, DynamoDB, CouchDB</div>
</div>

<div class="dialogue">কিবলা — দিক। নামাজে এক কিবলা — কাবার দিক। কেউ উত্তর আর পূর্ব দুটো একসাথে মুখ করতে পারে না। এক দিক বেছে নিতে হয়। CAP Theorem-ও তেমনি — তুমি Consistency আর Availability দুটোই চাও। কিন্তু partition (নেটওয়ার্ক বিভাজন) হলে — একটা বিসর্জন দিতে হয়। কোনটা — সেটা তোমার কিবলা। তোমার সিস্টেমের চরিত্র সেই সিদ্ধান্তে।</div>
<div class="dialogue en">"Qibla — direction. In prayer, one qibla — toward the Kaaba. No one faces north and east simultaneously. You choose one direction. CAP Theorem is the same — you want both Consistency and Availability. But when partition (network split) happens — one must be sacrificed. Which — that's your qibla. Your system's character lies in that decision."</div>`,
  senior:{
    title:"Eventual Consistency — বাস্তবতা",
    body:`<p>বেশিরভাগ সিস্টেম AP বেছে নেয় — Availability + Partition tolerance। তাই eventual consistency — শেষ পর্যন্ত সবাই একমত হবে, কিন্তু একই মুহূর্তে নয়।</p><p><strong>উদাহরণ:</strong> Facebook like দিলে — তোমার বন্ধু দেখতে পাবে ২ সেকেন্ড পরে। সমস্যা নেই।</p><p><strong>কিন্তু ব্যাংকিং?</strong> একই টাকা দুই জায়গা থেকে তুলে দেখলে — consistency চাই। strong consistency।</p><p><strong>Senior সিদ্ধান্ত:</strong> প্রতিটা সার্ভিসের জন্য আলাদাভাবে ভাবো। সব এক করো না।</p>`
  }
});

// ══ DOOR 6: API GATEWAY & RATE LIMITING ══
doors.push({
  num:6, icon:"🚧", color:"#3dd6c4", name:"শুল্ক আদায়কের চৌকি",
  subtitle:"The Customs House", tech:"API Gateway & Rate Limiting",
  spirit:"মীকাত — হজ্জের সীমানা, নিয়ন্ত্রণের দরজা",
  secret:"প্রতিটা অনুরোধ সরাসরি সার্ভারে নয়। একটা চৌকি দিয়ে যাবে — authentication, rate limit, routing। API Gateway = নগরীর শুল্ক চৌকি।",
  recall:{
    q:"শুল্ক আদায়ক কেন সবাইকে সরাসরি শহরে ঢুকতে দেন না?",
    qen:"Why doesn't the customs collector let everyone enter the city directly?",
    a:"কারণ কে ঢুকছে যাচাই দরকার (auth), কতজন ঢুকছে নিয়ন্ত্রণ দরকার (rate limit), কে কোথায় যাবে নির্দেশ দরকার (routing)। API Gateway এসব করে — শহরের শুল্ক চৌকি।",
    aen:"Because you need to verify who enters (auth), control how many (rate limit), direct where they go (routing). API Gateway does all this — the city's customs checkpoint."
  },
  story:`
<p class="scene-setting">ষষ্ঠ স্থান। নগরীর প্রবেশপথে একটা শুল্ক চৌকি। প্রতিটা প্রবেশকারী এখানে থামে। শুল্ক আদায়ক আব্দুল্লাহ বসে আছেন — সামনে একটা বই, হাতে সিলের মোহর। প্রতিটা বণিক আসেন — "কে তুমি?" (authentication), "কত মাল?" (quota), "কোথায় যাবে?" (routing)। কেউ অতিরিক্ত মাল নিয়ে এলে আব্দুল্লাহ বলেন — "এত নয়। ফিরে যাও।" Rate limit।</p>
<p class="scene-setting en">The sixth place. At the city's entrance, a customs checkpoint. Every entrant stops here. Customs collector Abdullah sits — a book before him, a seal stamp in hand. Each merchant comes — "Who are you?" (authentication), "How much goods?" (quota), "Where to?" (routing). If someone brings excess, Abdullah says — "Not this much. Go back." Rate limit.</p>

<div class="dialogue">চৌরাস্তার মানচিত্রকার বলেছিলেন — প্রতিটা সিদ্ধান্তে আপস। কিন্তু আমি বলি — আপসের আগে নিয়ন্ত্রণ। কে ঢুকছে, কত ঢুকছে, কোথায় যাচ্ছে — এই তিন প্রশ্ন প্রতিটা অনুরোধে। এটাই API Gateway-এর কাজ।</div>
<div class="dialogue en">"The crossroads cartographer said — trade-offs in every decision. But I say — before trade-offs, control. Who enters, how much, where — these three questions for every request. This is the API Gateway's job."</div>

<div class="code-block">API Gateway — এক চৌকি, অনেক কাজ:

১. Authentication — "কে তুমি?"
   JWT verify, API key check → ভুল? 401

২. Rate Limiting — "কতবার?"
   ১০০ request/min → বেশি? 429 Too Many Requests
   Token bucket / Leaky bucket algorithm

৩. Routing — "কোথায়?"
   /api/users → User Service
   /api/orders → Order Service  
   /api/search → Search Service

৪. Transform — "কীভাবে?"
   Request/Response modification
   Version routing (v1, v2)

৫. Aggregation — "একসাথে"
   ১ কল → একাধিক service → ১ response</div>

<div class="dialogue">মীকাত — হজ্জের সীমানা। মক্কায় প্রবেশের আগে নির্দিষ্ট স্থানে থামতে হয় — ইহরাম পরতে হয়, নিয়ম মানতে হয়। সরাসরি কাবায় যাওয়া যায় না। API Gateway হলো সেই মীকাত — প্রতিটা অনুরোধ আগে এখানে থামে, নিয়ম মেনে নেয়, তারপর ভেতরে যায়। মীকাত ছাড়া হজ্জ হয় না। Gateway ছাড়া production API হয় না।</div>
<div class="dialogue en">"Miqat — the Hajj boundary. Before entering Mecca, you stop at designated points — wear ihram, follow rules. You can't go directly to the Kaaba. API Gateway is that miqat — every request stops here first, follows rules, then enters. Without miqat, no Hajj. Without gateway, no production API."</div>`,
  senior:{
    title:"Rate Limiting Algorithms — কোনটা কখন?",
    body:`<p><strong>Token Bucket:</strong> একটা বালতিতে token জমে। প্রতি request-এ একটা token খরচ। বালতি খালি? অস্বীকার। burst অনুমোদন।</p><p><strong>Leaky Bucket:</strong> একটা ছিদ্রযুক্ত বালতি। request ঢোকে, সমান গতিতে বের হয়। smooth rate।</p><p><strong>Fixed Window:</strong> প্রতি মিনিটে N request। সহজ কিন্তু boundary burst।</p><p><strong>Sliding Window:</strong> Fixed window + weighted — বেশি নির্ভুল।</p><p><strong>বাস্তব:</strong> Redis + token bucket = সবচেয়ে সাধারণ।</p>`
  }
});

// ══ DOOR 7: CIRCUIT BREAKER & RESILIENCE ══
doors.push({
  num:7, icon:"🔄", color:"#ff6b35", name:"ঝড় প্রহরীর বুরুজ",
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
<p class="scene-setting">সপ্তম স্থান। নগরীর প্রাচীরে একটা ঝড় প্রহরী বুরুজ। উপরে প্রহরী নূর দাঁড়িয়ে আছেন — চোখে দূরবীন, হাতে একটা শিঙা। নিচে নগরী — সব শান্ত। কিন্তু দূরে ঝড় আসছে। তিনি একটা নির্দিষ্ট পথ দিয়ে বাণিজ্য কাফেলা যাওয়ার কথা ভাবছিলেন। কিন্তু সেই পথে ধস নেমেছে। তিনি বারবার সেই পথে কাফেলা পাঠাবেন? না। তিনি বিকল্প পথ খুঁজছেন।</p>
<p class="scene-setting en">The seventh place. On the city wall, a storm watcher's tower. Watchman Noor stands atop — telescope at eye, horn in hand. Below — the city, all calm. But a storm approaches in the distance. He was planning to send a trade caravan via a specific route. But a landslide has blocked it. Will he send caravans there repeatedly? No. He's finding alternative routes.</p>

<div class="dialogue">শুল্ক আদায়ক বলেছিলেন — চৌকি দিয়ে নিয়ন্ত্রণ। কিন্তু আমি বলি — নিয়ন্ত্রণের পরে আসে স্থিতিস্থাপকতা। কারণ কোনো সিস্টেমই নিখুঁত নয়। সব কিছু একদিন বিকল হয়। প্রশ্ন হলো — বিকল হলে কী হবে?</p>
<div class="dialogue en">"The customs collector said — control through a checkpoint. But I say — after control comes resilience. Because no system is perfect. Everything fails eventually. The question is — what happens when it fails?"</div>

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
  Fallback — বিকল্প উত্তর (cache, default, degraded)
  Bulkhead — এক সার্ভিস ভাঙলে অন্যেরা সুরক্ষিত
  Timeout — চিরকাল অপেক্ষা নয়</div>

<div class="dialogue">সবর — ধৈর্য, অটলতা, বিপদে দৃঢ়তা। কুরআনে আল্লাহ বলেন — "নিশ্চয় আল্লাহ ধৈর্যশীলদের সাথে।" সবর মানে শুধু সহ্য করা নয় — বিপদে সঠিক সিদ্ধান্ত নেওয়া। ক্র্যাশ করা সার্ভিসে বারবার অনুরোধ পাঠানো = অধৈর্যতা। থামা, fallback দেওয়া, সুস্থ হওয়ার অপেক্ষা = সবর। Circuit Breaker হলো সবর-এর কোডে রূপ — থামো, অপেক্ষা করো, তারপর সতর্কতার সাথে আবার।</div>
<div class="dialogue en">"Sabr — patience, steadfastness, firmness in adversity. Allah says — 'Indeed, Allah is with the patient.' Sabr isn't just enduring — it's making the right decision in crisis. Sending repeated requests to a crashed service = impatience. Stopping, giving fallback, waiting for recovery = sabr. Circuit Breaker is sabr in code — stop, wait, then carefully resume."</div>`,
  senior:{
    title:"Cascading Failure — সবচেয়ে ভয়ংকর সমস্যা",
    body:`<p>একটা সার্ভিস ধীর হলে — সবাই অপেক্ষা করে। থ্রেড শেষ। পরের সার্ভিস থামে। চেইন রিঅ্যাকশনে সব পড়ে।</p><p><strong>সমাধান:</strong></p><p>১. <strong>Timeout</strong> — চিরকাল অপেক্ষা নয়। ৩ সেকেন্ড পরে থামো।</p><p>২. <strong>Circuit Breaker</strong> — বিকল সার্ভিসে বন্ধ।</p><p>৩. <strong>Bulkhead</strong> — প্রতিটা সার্ভিসের নিজস্ব রিসোর্স pool। একটা ভাঙলে অন্যেরা সুরক্ষিত।</p><p>৪. <strong>Graceful degradation</strong> — কিছু কাজ করো, সব নয়।</p>`
  }
});

// ══ DOOR 8: OBSERVABILITY ══
doors.push({
  num:8, icon:"📊", color:"#f06292", name:"নগর মানচিত্রকারের টেবিল",
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
<p class="scene-setting">অষ্টম স্থান। শেষ স্থান। নগরীর সর্বোচ্চ কক্ষ — মানচিত্রকারের টেবিল। প্রাচীরে বিশাল মানচিত্র — নগরীর প্রতিটা রাস্তা, প্রতিটা ফটক, প্রতিটা গোলাঘর দেখানো। কিন্তু এই মানচিত্র স্থির নয় — প্রতিটা অংশে সংখ্যা বদলাচ্ছে। এখানে লাল = ভিড়, সবুজ = খালি, হলুদ = সতর্কতা। মাস্টার সাবিত্রী বসে আছেন — চোখ চারদিকে, কান প্রতিটা খবরে।</p>
<p class="scene-setting en">The eighth place. The last place. The city's highest chamber — the mapmaker's table. On the wall: a vast map — every street, every gate, every granary shown. But this map isn't static — numbers change in each section. Red = crowded, green = clear, yellow = caution. Master Savitri sits — eyes everywhere, ears on every report.</p>

<div class="dialogue">ঝড় প্রহরী বলেছিলেন — বিকল হলে সবর করো। কিন্তু আমি বলি — বিকল হওয়ার আগে টের পাওয়া। আর বিকল হলে — কোথায়, কেন, কীভাবে — দেখতে পাওয়া। এটাই observability। অন্ধ হয়ে একটা নগরী চালানো যায় না।</div>
<div class="dialogue en">"The storm watcher said — be patient when things fail. But I say — detect failure BEFORE it happens. And when it fails — see where, why, how. This is observability. You can't run a city blind."</div>

<div class="code-block">Three Pillars of Observability:

১. LOGS — "কী হলো?"
   প্রতিটা event-এর লিখিত নথি।
   "User 123 logged in at 10:32"
   "Payment failed: card declined"
   ELK Stack, Grafana Loki, Datadog

২. METRICS — "কেমন আছে?"
   সংখ্যায় স্বাস্থ্যের ছবি।
   CPU: 45% | Memory: 2.1GB
   Request rate: 500/sec
   Error rate: 0.2%
   Latency p99: 120ms
   Prometheus, Grafana, CloudWatch

৩. TRACES — "কোথায় গেল?"
   একটা request-এর সম্পূর্ণ যাত্রা।
   User → API Gateway → Auth Service 
       → User Service → Database → Response
   প্রতিটা ধাপে কত সময়?
   Jaeger, OpenTelemetry, Zipkin</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অন্ধ সিস্টেম</div>"কাজ করছে মনে হয়।" বাগ এলে — console.log খুঁজি। প্রোডাকশনে কী হচ্ছে কেউ জানে না। রাত ২টায় ফোন — "সাইট কাজ করছে না।" অন্ধ।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Observable সিস্টেম</div>Dashboard-এ সব দেখা যায়। anomaly আগে ধরা যায়। বাগ এলে — trace দেখি, exact জায়গা বুঝি। alert স্বয়ংক্রিয়। দৃষ্টিসম্পন্ন।</div>
</div>

<div class="dialogue">মীযান — দাঁড়িপাল্লা, পরিমাপ। কুরআনে আল্লাহ বলেন — "আমি কায়িম করেছি মীযান।" প্রতিটা কিছুর একটা মাপ আছে। নগরী চালাতে হলে মাপতে হয় — কত মানুষ, কত খাদ্য, কত নিরাপত্তা। Observability হলো সেই মীযান — প্রতিটা request, প্রতিটা service, প্রতিটা error — সব মাপা, গণনা রাখা। অন্ধ হয়ে নয় — দৃষ্টি দিয়ে।</div>
<div class="dialogue en">"Mizan — the scale, measurement. Allah says — 'We established the scale.' Everything has a measure. To run a city you measure — how many people, how much food, how much security. Observability is that mizan — every request, every service, every error — all measured, recorded. Not blind — with sight."</div>

<div class="dialogue">আটটা স্থান পেরিয়েছ। ফটক রক্ষক বলেছিলেন — ভাগ করো। গোলাঘর রক্ষক বলেছিলেন — কাছে রাখো। সংরক্ষণাগারিক বলেছিলেন — সঠিক ঘর বাছো। সংকেত প্রহরী বলেছিলেন — বার্তাবাহক দাও। চৌরাস্তার মানচিত্রকার বলেছিলেন — আপস বেছে নাও। শুল্ক আদায়ক বলেছিলেন — নিয়ন্ত্রণ রাখো। ঝড় প্রহরী বলেছিলেন — বিকল হলে সবর করো। আর আমি বলি — সবকিছু মাপো। কিন্তু দুই স্থান এখনো বাকি — কাছে পৌঁছানোর ক্ষমতা (বিতরণকারী), আর দ্রুত খোঁজার জ্ঞান (কাতেবের সূচি)। এগুলো ছাড়া নগরী অসম্পূর্ণ।</div>
<div class="dialogue en">"You've passed eight places. The gate keeper said — distribute. The granary keeper said — keep close. The archivist said — choose the right home. The signal watcher said — use messengers. The crossroads cartographer said — choose trade-offs. The customs collector said — maintain control. The storm watcher said — be patient when things fail. And I say — measure everything. But two places remain — the power to reach near (the distributor), and the knowledge to find fast (the scribe's index). Without them, the city is incomplete."</div>

<div class="verse">"জেনে রাখো, আল্লাহর স্মরণেই হৃদয় প্রশান্তি পায়।"<br>— কুরআন ১৩:২৮<br><br>যন্ত্র প্রশান্তি দেয় না। নকশা প্রশান্তি দেয় না। কিন্তু একটা সুনকশিত সিস্টেম — যা সঠিকভাবে মাপা হয়, যথাযথভাবে নিয়ন্ত্রিত — সেটা ইউজারকে প্রশান্তি দেয়। আর সেই প্রশান্তি — সেবার প্রশান্তি।</div>

<div class="secret-box"><div class="label">অষ্টম স্থান — রহস্য</div><div class="text">📊 অন্ধ হয়ে চালানো = বিপদ। Logs, Metrics, Traces = দৃষ্টি।<br><small>Observability হলো মীযান — সব কিছু মাপা, গণনা রাখা। দেখা আগে, সংশোধন পরে।</small></div></div>`
});
