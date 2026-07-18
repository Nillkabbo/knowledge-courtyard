// ════════════════════════════════════════
// CITY BUILDER'S CODEX — DOORS 1-4
// System Design: Load Balancing → Databases
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: LOAD BALANCING ══
doors.push({
  num:1, icon:"🌐", color:"#ff6b35", name:"ফটক রক্ষকের প্রহরী",
  subtitle:"The Gate Keeper's Post", tech:"Load Balancing",
  spirit:"তওয়াফ — ঘুরে ঘুরে সবাই সমান",
  secret:"একটা সার্ভার ভাঙলে সব থেমে যায়। একাধিক সার্ভারে ভাগ করো, একটা ফটক দিয়ে পরিচালনা করো। Load Balancer = ট্রাফিকের প্রহরী।",
  recall:{
    q:"ফটক রক্ষক কেন সবাইকে এক দরজায় ঢুকতে দেন না?",
    qen:"Why doesn't the gate keeper let everyone through one door?",
    a:"কারণ এক দরজায় ভিড় হবে, ধাক্কা হবে, কেউ আহত হবে। একাধিক দরজায় ভাগ করলে সবাই দ্রুত ঢোকে। Load Balancer এটাই করে — ট্রাফিক একাধিক সার্ভারে ভাগ করে।",
    aen:"Because one door means crowding, pushing, injury. Multiple doors distribute the flow. A Load Balancer does this — distributes traffic across multiple servers."
  },
  story:`
<p class="scene-setting">প্রথম স্থান। একটা বিশাল নগরীর প্রধান ফটক। সকাল — হাজার মানুষ প্রবেশ করছে। একসাথে। ফটকে ধাক্কা, চিৎকার, কেউ পড়ে যাচ্ছে। দরোয়ান তামিম দাঁড়িয়ে আছেন — বিশাল দেহ, লাঠি হাতে, কিন্তু একাই পারছেন না। একটা দরজা, হাজার মানুষ।</p>
<p class="scene-setting en">The first place. A vast city's main gate. Morning — a thousand people entering. At once. Crowding, shouting, people falling. Gatekeeper Tamim stands — massive frame, staff in hand, but he can't manage alone. One door, a thousand people.</p>

<div class="dialogue">একটা দরজা — হাজার মানুষ। কেউ দ্রুত ঢুকতে পারছে না। একটা দরজা ভাঙলে — সব থেমে যাবে।</div>
<div class="dialogue en">"One door — a thousand people. No one enters quickly. If the door breaks — everything stops."</div>

<p>তামিম একটা সিদ্ধান্ত নিলেন। তিনি ফটকের পাশে আরও চারটা দরজা খুললেন। তারপর মানুষকে ভাগ করে দিলেন — প্রথম দল দরজা ১-এ, দ্বিতীয় দল দরজা ২-এ। হঠাৎ — প্রবাহ সহজ হলো। কেউ ধাক্কা খাচ্ছে না। সবাই দ্রুত ঢুকছে।</p>
<p class="en">Tamim made a decision. He opened four more doors beside the main gate. Then divided the people — first group to door 1, second group to door 2. Suddenly — the flow eased. No pushing. Everyone entered quickly.</p>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ একটা সার্ভার</div>সব ট্রাফিক এক সার্ভারে। সার্ভার ক্র্যাশ = সব ব্যবহারকারী ব্লক। কোনো fallback নেই। SPOF (Single Point of Failure)।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Load Balancer</div>ট্রাফিক একাধিক সার্ভারে ভাগ। একটা ক্র্যাশ করলে বাকিরা কাজ চালায়। ফটক স্বয়ংক্রিয়ভাবে সুস্থ সার্ভারে পাঠায়।</div>
</div>

<div class="code-block">Load Balancing Algorithms:

Round Robin (তওয়াফ):
  Request 1 → Server A
  Request 2 → Server B  
  Request 3 → Server C
  Request 4 → Server A (আবার শুরু)
  → সবাই সমান কাজ পায়

Least Connections:
  "কোন সার্ভারে সবচেয়ে কম চাপ?"
  → সেখানে পাঠাও
  → সবচেয়ে ব্যস্তকে এড়াও

IP Hash:
  একই ইউজার সবসময় একই সার্ভারে
  → session consistency

Health Checks:
  প্রতি ৫ সেকেন্ডে: "তুমি কি সুস্থ?"
  সুস্থ না হলে → ট্রাফিক বন্ধ
  সুস্থ হলে → ট্রাফিক চালু</div>

<div class="dialogue">কুরআনে আল্লাহ বলেন — "তোমরা এক জাতি, তোমরা সবাই সমান।" তওয়াফেও — সবাই ঘুরে, সবাই সমান দূরত্বে। কেউ এগিয়ে নয়, কেউ পিছিয়ে নয়। Round Robin লোড ব্যালেন্সিংও তেমনি — প্রতিটা সার্ভার সমান কাজ পায়। কেউ বেশি বোঝা বহন করে না, কেউ কম নয়। সমতা = স্থিতিশীলতা।</div>
<div class="dialogue en">"Allah says in the Quran — 'You are one nation, all equal.' In tawaf too — everyone circles, all at equal distance. No one ahead, no one behind. Round Robin load balancing is the same — each server gets equal work. No one carries more burden, no one less. Equality = stability."</div>`,
  senior:{
    title:"Layer 4 vs Layer 7 Load Balancing",
    body:`<p><strong>Layer 4 (Transport):</strong> TCP/UDP লেভেলে কাজ করে। দ্রুত, সহজ। শুধু IP + port দেখে। NAT, DSR।</p><p><strong>Layer 7 (Application):</strong> HTTP লেভেলে কাজ করে। বুদ্ধিমান — URL, header, cookie দেখে routing করে। বেশি শক্তিশালী কিন্তু বেশি খরচ।</p><p><strong>Senior choice:</strong> API gateway = Layer 7। TCP load balancing = Layer 4। Nginx, HAProxy উভয় পারে। AWS ALB = L7, NLB = L4।</p>`
  }
});

// ══ DOOR 2: CACHING ══
doors.push({
  num:2, icon:"💾", color:"#52c41a", name:"গোলাঘর সংরক্ষকের ভাণ্ডার",
  subtitle:"The Granary Keeper's Vault", tech:"Caching",
  spirit:"হাফসা — সংরক্ষণ, পরে ব্যবহারের জন্য",
  secret:"ডেটাবেস থেকে পড়া = ধীর। গোলাঘর থেকে পড়া = দ্রুত। Cache = প্রায়শই দরকারি জিনিস কাছে রাখা। কিন্তু পুরনো হতে পারে — eviction লাগে।",
  recall:{
    q:"গোলাঘর রক্ষক কেন প্রতিবার খেতে যান না, গোলাঘরে রাখেন?",
    qen:"Why does the granary keeper store grain instead of going to the field each time?",
    a:"কারণ খেতে যাওয়া দূর, ধীর, কষ্টকর। গোলাঘরে থাকলে কাছে, দ্রুত। কিন্তু শস্য পুরনো হয় — তাই নিয়মিত বদলাতে হয়। Cache-ও তেমনি — গোলাঘরের মতো।",
    aen:"Because going to the field is far, slow, painful. In the granary it's close, fast. But grain gets old — so rotate regularly. Cache is the same — like a granary."
  },
  story:`
<p class="scene-setting">দ্বিতীয় স্থান। নগরীর কেন্দ্রে একটা বিশাল গোলাঘর। পাথরের দেয়াল, শীতল ভেতর, সারিবদ্ধ মটরজাতীয় বস্তা। গোলাঘর রক্ষক রাবিয়া কাজ করছেন — প্রতিদিন সকালে খেত থেকে শস্য আনেন, গোলাঘরে সাজান, তারপর প্রতিটা পরিবারকে গোলাঘর থেকে দেন। খেতে যান না — গোলাঘরে থাকেন।</p>
<p class="scene-setting en">The second place. At the city's center, a vast granary. Stone walls, cool interior, sacks of grain in rows. Granary keeper Rabia works — each morning bringing grain from the field, storing it, then distributing to each family from the granary. She doesn't go to the field — stays at the granary.</p>

<div class="dialogue">ফটক রক্ষক বলেছিলেন — ট্রাফিক ভাগ করো। কিন্তু আমি বলি — ভাগ করলেও, যদি প্রতিটা অনুরোধ ডেটাবেস থেকে পড়তে হয় — ধীর। আমার কাজ হলো — যা প্রায়শই দরকার, তা কাছে রাখা। গোলাঘরের মতো।</div>
<div class="dialogue en">"The gate keeper said — distribute traffic. But I say — even distributed, if every request reads from the database — it's slow. My job is — keep what's frequently needed, close. Like a granary."</div>

<p>তুমি একটা API কল করলে — "ইউজার প্রোফাইল দাও।" সার্ভার ডেটাবেসে যায়, খুঁজে, আনে, ফেরত দেয়। ৫০ms। কিন্তু যদি একই প্রোফাইল এক দিনে ১০,০০০ বার চাওয়া হয়? ১০,০০০ বার ডেটাবেসে যাওয়া? না। একবার পড়ে cache-এ রাখো। পরের ৯,৯৯৯ বার — cache থেকে। ১ms। ৫০ গুণ দ্রুত।</p>
<p class="en">You make an API call — "give user profile." Server goes to DB, finds, returns. 50ms. But if the same profile is requested 10,000 times a day? 10,000 DB trips? No. Read once, store in cache. Next 9,999 times — from cache. 1ms. 50x faster.</p>

<div class="code-block">Cache Strategies — কোনটা কখন:

১. Cache-Aside (Lazy Loading):
   - চাও → cache-এ আছে? → দাও
   - না? → DB থেকে পড়ো → cache-এ রাখো → দাও
   - সহজ, সাধারণ। Redis + তোমার কোড।

২. Write-Through:
   - লেখো → cache + DB একসাথে
   - সবসময় fresh, কিন্তু লেখা ধীর

৩. Write-Behind:
   - লেখো → cache → পরে DB (async)
   - দ্রুত লেখা, কিন্তু ঝুঁকি

৪. Eviction (পুরনো বাদ):
   - LRU: সবচেয়ে বেশি দিন ব্যবহৃত হয়নি → বাদ
   - LFU: সবচেয়ে কম বার ব্যবহৃত → বাদ
   - TTL: নির্দিষ্ট সময় পরে স্বয়ংক্রিয় মুছে ফেলা</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Cache ছাড়া</div>প্রতিটা read = DB trip। DB হাঁপায়। latency বাড়ে। ইউজার অপেক্ষা করে। স্কেল করতে গেলে প্রথমেই ভাঙে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Cache সহিত</div>বারবার দরকারি ডেটা cache-এ। DB শান্ত। latency ১ms। কিন্তু — consistency ঝুঁকি। cache invalidation = কঠিন সমস্যা।</div>
</div>

<div class="dialogue">হাফসা (রা)— নবীজির (সা) স্ত্রী, কুরআনের প্রথম সংকলন সংরক্ষণ করেছিলেন। সংরক্ষণ মানে পরে ব্যবহারের জন্য কাছে রাখা। Cache-ও তেমনি — এখন দরকারি ডেটা কাছে রাখা যাতে পরে দ্রুত ব্যবহার করা যায়। কিন্তু হাফসা (রা) সংরক্ষণ করেছিলেন যাতে নতুন খলিফার সময় সঠিক কুরআন থাকে। Cache-ও সঠিক হতে হবে — নাহলে পুরনো ভুল ডেটা দেবে। Cache invalidation হলো হাফসার দায়িত্বের মতো — নিশ্চিত করা যা দেওয়া হচ্ছে তা সঠিক, পুরনো নয়।</div>
<div class="dialogue en">"Hafsa (RA) — the Prophet's wife, preserved the first compilation of the Quran. Preservation means keeping close for later use. Cache is the same — keeping frequently needed data close for fast access. But Hafsa preserved it so that in the next caliph's time, the correct Quran would exist. Cache too must be correct — otherwise it serves stale data. Cache invalidation is like Hafsa's responsibility — ensuring what's served is correct, not old."</div>`,
  senior:{
    title:"Cache Invalidation — সিস্টেম ডিজাইনের সবচেয়ে কঠিন সমস্যা",
    body:`<p>"ক্যাশে ইনভ্যালিডেশন কঠিন" — এটা শুধু মজা নয়, সত্যি। কখন cache বাদ দেবে?</p><p><strong>সহজ:</strong> TTL — ৫ মিনিট পরে মুছে যায়। সহজ কিন্তু পুরনো ডেটার ঝুঁকি।</p><p><strong>কঠিন:</strong> Write-through — লেখার সাথে সাথে cache আপডেট। সঠিক কিন্তু ধীর।</p><p><strong>বাস্তব:</strong> সাধারণ TTL + write-through মিশ্রণ। গুরুত্বপূর্ণ ডেটা = write-through, কম গুরুত্বপূর্ণ = TTL।</p>`
  }
});

// ══ DOOR 3: DATABASES ══
doors.push({
  num:3, icon:"📦", color:"#5b9eff", name:"সংরক্ষণাগারিকের গ্রন্থাগার",
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
<p class="scene-setting">তৃতীয় স্থান। একটা সুবিশাল সংরক্ষণাগার। দেয়ালে তাকে তাকে স্ক্রল, খাতা, পুথি। কিন্তু এই গ্রন্থাগারটি অন্যরকম — প্রতিটা কক্ষে ভিন্ন ধরনের সংরক্ষণ। এক কক্ষে সুসজ্জিত টেবিল — প্রতিটি সারিতে নির্দিষ্ট তথ্য, নির্দিষ্ট ক্রমে। অন্য কক্ষে ঢিলেঢালা বস্তা — প্রতিটিতে ভিন্ন জিনিস, কোনো নির্দিষ্ট ক্রম নেই। সংরক্ষণাগারিক জাইদ বলেন — "প্রতিটা ধরনের তথ্যের নিজস্ব ঘর দরকার।"</p>
<p class="scene-setting en">The third place. A vast archive. Shelves of scrolls, ledgers, manuscripts. But this library is different — each room stores differently. One room: organized tables — each row with specific data, specific order. Another room: loose sacks — each with different items, no fixed order. Archivist Zaid says — "Each type of data needs its own room."</p>

<div class="dialogue">গোলাঘর রক্ষক বলেছিলেন — প্রায়শই দরকারি জিনিস কাছে রাখো। কিন্তু সব তথ্য cache-এ রাখা যায় না। সব তথ্য একটা স্থায়ী ঘর দরকার। সেই ঘরই ডেটাবেস। কিন্তু কোন ঘর?</div>
<div class="dialogue en">"The granary keeper said — keep frequently needed things close. But not all data can live in cache. All data needs a permanent home. That home is the database. But which home?"</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">📊 SQL (Relational)</div>টেবিল, সারি, কলাম। কঠোর কাঠামো। ACID guarantee। JOIN, foreign key, transaction। ভালো: ইউজার, অর্ডার, পেমেন্ট — যেখানে সম্পর্ক গুরুত্বপূর্ণ।<br>PostgreSQL, MySQL</div>
<div class="cmp-card cmp-good"><div class="cmp-label">📄 NoSQL (Non-relational)</div>নমনীয় কাঠামো। JSON-এর মতো। Schema-less। horizontal scaling সহজ। ভালো: কন্টেন্ট, লগ, IoT — যেখানে কাঠামো বদলায়।<br>MongoDB, Cassandra, DynamoDB</div>
</div>

<div class="dialogue">কিন্তু একটা সমস্যা। যখন তথ্য বাড়ে — কোটি কোটি রেকর্ড — একটা সংরক্ষণাগারে রাখা যায় না। দুটো সমাধান: Sharding — ভাগ করা। Replication — অনুলিপি রাখা।</div>
<div class="dialogue en">"But one problem. When data grows — billions of records — one archive can't hold it. Two solutions: Sharding — splitting. Replication — copying."</div>

<div class="code-block">Scaling Databases:

Sharding (ভাগ করা):
  User A-M → Database 1
  User N-Z → Database 2
  → প্রতিটা DB ছোট, দ্রুত
  → কিন্তু cross-shard query কঠিন

Replication (অনুলিপি):
  Primary DB → লেখা এখানে
  Replica 1 → পড়া এখাম থেকে  
  Replica 2 → পড়া এখান থেকে
  → read throughput বাড়ে
  → একটা ক্র্যাশ করলে বাকিরা আছে

Primary-Replica: ১টা লেখে (Primary), বাকিরা পড়ে (Replica)
Multi-Primary: সবাই লেখে + পড়ে (ঝুঁকিশালী কিন্তু দ্রুত)
(পুরোনো নাম: Master-Slave — এখন Primary-Replica ব্যবহার করা হয়)</div>

<div class="dialogue">কুরআনের সংকলনও এভাবে হয়েছে। প্রথমে বিক্ষিপ্ত — হাড়ে, পাতায়, মুখস্থে। তারপে কাঠামো — সূরা ক্রম, আয়াত ক্রম। তারপে যাচাই — প্রতিটা আয়াত দুইজন সাক্ষীর মুখস্থের সাথে মিলিয়ে। তারপে বিতরণ — একাধিক অনুলিপি বিভিন্ন অঞ্চলে। SQL = কাঠামো (সূরা ক্রম)। ACID = যাচাই (সাক্ষী)। Replication = বিতরণ (অনুলিপি)। ডেটাবেস নকশা নতুন কিছু নয় — এটা জ্ঞান সংরক্ষণের প্রাচীন প্রজ্ঞা।</div>
<div class="dialogue en">"The compilation of the Quran happened this way. First scattered — on bone, leaf, memory. Then structured — surah order, ayah order. Then verified — each ayah cross-checked against two witnesses' memorization. Then distributed — multiple copies to different regions. SQL = structure (surah order). ACID = verification (witnesses). Replication = distribution (copies). Database design isn't new — it's the ancient wisdom of preserving knowledge."</div>`,
  senior:{
    title:"CAP Theorem পূর্বরূপ — ডেটাবেস বাছাই",
    body:`<p>ডেটাবেস বাছাই করার আগে বুঝো: <strong>CAP Theorem</strong> — Consistency, Availability, Partition tolerance। তিনটার মধ্যে দুটো পাবে, একটা বিসর্জন।</p><p><strong>SQL (PostgreSQL):</strong> Consistency + Partition tolerance (CP)। সঠিক ডেটা সবসময়। কিন্তু নেটওয়ার্ক ভাঙলে কিছু অনুরোধ ব্যর্থ।</p><p><strong>NoSQL (Cassandra):</strong> Availability + Partition tolerance (AP)। সবসময় উত্তর দেয়। কিন্তু কিছুক্ষণ পুরনো ডেটা (eventual consistency)।</p><p>আগে প্রয়োজন বুঝো, তারপর ডেটাবেস বাছো।</p>`
  }
});

// ══ DOOR 4: MESSAGE QUEUES ══
doors.push({
  num:4, icon:"📡", color:"#b37feb", name:"সংকেত প্রহরীর বুরুজ",
  subtitle:"The Signal Tower", tech:"Message Queues & Async Processing",
  spirit:"আযান — এক থেকে অনেকে, একই সংকেত",
  secret:"একসাথে করতে গেলে সব থেমে যায়। Queue-এ রাখো, আলাদাভাবে করো। Async = চাও → দাঁড়াও না → পরে ফল নাও। Decoupling = স্বাধীনতা।",
  recall:{
    q:"সংকেত প্রহরী কেন সবাইকে ডাকেন না, একটা আযান দেন?",
    qen:"Why does the signal watcher give one call (azan) instead of calling everyone individually?",
    a:"কারণ একে একে ডাকলে সময় লাগে, কেউ মিস হয়। আযান একবারে সবাই শোনে। Message Queue-ও তেমনি — একটা event একাধিক service পায়, একে অপরের সাথে কথা না বলেই। Decoupling।",
    aen:"Because calling individually takes time, someone gets missed. Azan — everyone hears at once. Message Queue too — one event reaches multiple services without them talking to each other. Decoupling."
  },
  story:`
<p class="scene-setting">চতুর্থ স্থান। নগরীর সর্বোচ্চ বুরুজ। উপরে মুয়াজ্জিন বিলাল দাঁড়িয়ে আছেন — হাতে কোনো যন্ত্র নেই, শুধু তাঁর কণ্ঠ। নিচে নগরী — হাজার ঘর, হাজার মানুষ। সবাইকে জানাতে হবে — "সময় হয়েছে।" একে একে ডাকলে দিন শেষ। কিন্তু তিনি একবার উঁচু কণ্ঠে আযান দিলেন — পুরো নগরী শুনল।</p>
<p class="scene-setting en">The fourth place. The city's tallest tower. Atop, Muazzin Bilal stands — no instrument, just his voice. Below — the city: thousands of homes, thousands of people. All must know — "The time has come." Calling individually — the day would end. But he raised his voice once in azan — the entire city heard.</p>

<div class="dialogue">সংরক্ষণাগারিক বলেছিলেন — তথ্যের নিজস্ব ঘর দরকার। কিন্তু আমি বলি — ঘর থাকলেও, এক ঘর থেকে আরেক ঘরে যোগাযোগ দরকার। আর সেই যোগাযোগ সরাসরি হবে না — মাঝখানে একটা বার্তাবাহক দরকার। যে নেবে, রাখবে, পৌঁছে দেবে। এটাই message queue।</div>
<div class="dialogue en">"The archivist said — data needs its own home. But I say — even with homes, rooms need to communicate. And that communication isn't direct — you need a messenger in between. Who takes, holds, delivers. This is the message queue."</div>

<p>তুমি একটা ছবি আপলোড করলে। কী হওয়া দরকার? ছবি resize, thumbnail বানানো, AI ট্যাগ করা, notification পাঠানো। সব একসাথে? ইউজার ৩০ সেকেন্ড অপেক্ষা করবে? না।</p>
<p class="en">You upload a photo. What should happen? Resize, thumbnail, AI tagging, notification. All at once? User waits 30 seconds? No.</p>

<div class="code-block">Async Processing — Message Queue:

User: "ছবি আপলোড করলাম"
  ↓
API: "ঠিক আছে, নিলাম" → queue-তে রাখো
  ↓ (ইউজার দাঁড়ায় না — ২০০ms)
  
Queue (Kafka/RabbitMQ/SQS):
  "photo.uploaded" event
     ↓                    ↓              ↓
Resize Service      AI Tagging      Notification
(নিজের গতিতে)     (নিজের গতিতে)  (নিজের গতিতে)

→ প্রতিটা service স্বাধীন
→ একটা ক্র্যাশ করলে বাকিরা কাজ করে
→ স্কেল করা সহজ — শুধু worker যোগ করো</div>

<div class="dialogue">আযান — একজন মুয়াজ্জিন, একবার কণ্ঠ, কিন্তু হাজার কান। মসজিদে যাওয়ার নির্দেশ একে একে দরকার নেই — একবার আযান, সবাই শোনে, প্রতেকে নিজ নিজ গতিতে আসে। Message queue-ও তেমনি — একটা event publish করো, একাধিক service subscribe করে। publisher জানে না কে listen করছে — সে শুধু বলে দেয়। এটাই pub/sub — publish/subscribe। আযান = প্রকাশ্য ঘোষণা। pub/sub = প্রকাশ্য event।</div>
<div class="dialogue en">"Azan — one muazzin, one voice, but thousands of ears. The call to prayer doesn't need individual summons — one azan, everyone hears, each comes at their own pace. Message queue too — publish one event, multiple services subscribe. The publisher doesn't know who's listening — just announces. This is pub/sub — publish/subscribe. Azan = public announcement. Pub/sub = public event."</div>`,
  senior:{
    title:"Kafka vs RabbitMQ vs SQS — কখন কোনটা?",
    body:`<p><strong>Kafka:</strong> স্ট্রিম, উচ্চ throughput, event sourcing। লগ হিসেবে কাজ করে — replay করা যায়। জটিল কিন্তু শক্তিশালী। Netflix, LinkedIn ব্যবহার করে।</p><p><strong>RabbitMQ:</strong> traditional message broker। routing সহজ, নির্ভরযোগ্য। task queue, work queue। মাঝারি জটিলতা।</p><p><strong>SQS (AWS):</strong> managed, serverless। সহজ, কোনো পরিচালনা নেই। কিন্তু vendor lock-in।</p><p><strong>নিয়ম:</strong> event streaming → Kafka। task distribution → RabbitMQ/SQS। সহজ শুরু → SQS।</p>`
  }
});
