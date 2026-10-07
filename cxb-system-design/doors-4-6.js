// doors-4-6.js — Cloud X Berry Series Book 5: The System Blueprint
// Doors 4-6 (continued from doors-1-3.js — no const redeclaration)

doors.push({
  num: 4,
  icon: "💬",
  color: "#60a5fa",
  name: "কোটি মেসেজের কেস-স্টাডি",
  subtitle: "How WhatsApp Delivers Billions of Messages Instantly",
  tech: "WebSocket long-lived connections, connection manager (Redis), message store (Cassandra/DynamoDB), tick acknowledgements, offline queue",
  spirit: "মিসাল — একটা জীবন্ত উদাহরণে সব নীতির হাজিরা",
  secret: "WhatsApp-এর জাদু এক যন্ত্র নয় — WebSocket-এর স্থায়ী দরজা, connection manager-এর জীবন্ত ডিরেক্টরি, distributed DB-র লেখার-সাগর, আর টিক-চিহ্নের স্পষ্ট স্বীকৃতি-চেইন।",
  recall: {
    q: "একটা মেসেজ পাঠানোর পর ডেলিভারি হওয়া পর্যন্ত ভেতরে ভেতরে কী কী ধাপ ঘটে?",
    qen: "Walk the path of one message from send to delivery.",
    a: "১) প্রেরকের ফোন → তার chat সার্ভার (WebSocket সংযোগে)। ২) আগে স্টোর — message service Cassandra/DynamoDB-তে লেখে (msg ID, sender, receiver, conversation, timestamp)। ৩) Chat সার্ভার connection manager (Redis) জিজ্ঞেস করে — প্রাপক কোন সার্ভারে যুক্ত? ৪) অনলাইন হলে সরাসরি সেই সার্ভারে ফরওয়ার্ড → WebSocket-এ ঠেলে দেওয়া। ৫) প্রাপক-ডিভাইস পেলে acknowledgement — এক টিক (সার্ভারে পৌঁছেছে) → দুই টিক (ডিভাইসে পৌঁছেছে) → নীল (পড়া হয়েছে)। অফলাইন হলে সারিতে জমা, অনলাইনেই ডেলিভারি।",
    aen: "Sender's phone → chat server (WebSocket) → store in Cassandra/DynamoDB → ask connection manager (Redis) which server holds the recipient → forward → push over WebSocket → ticks acknowledge server-receipt, device-receipt, read. Offline: queued until online."
  },
  story: `<p class="scene-setting">এতদিন নীতি আর ইট জোড়া হলো — এবার একটা জীবন্ত দালান। পর্দার সামনে WhatsApp সরল: টাইপ করো, পাঠাও, টিক আসে। পর্দার পেছনে? কোটি কোটি মেসেজ, মুহূর্তে-ডেলিভারি, সঠিক ক্রম — শিক্ষকের কেস-স্টাডিতে প্রতিটা টুকরো জায়গামতো বসে যায়।</p>
<p class="scene-setting en">Principles and bricks are done — now a living building. On screen WhatsApp looks simple: type, send, tick. Behind the curtain: billions of messages, instant delivery, correct order. In this case study every piece clicks into place.</p>
<div class="diagram">
<div class="diag-title">এক মেসেজের যাত্রা — শিক্ষকের চিত্র</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L0,10 L10,5 z" fill="#60a5fa"/></marker>
  </defs>
  <rect class="cell" x="15" y="60" width="95" height="50" rx="10"/>
  <text class="lbl" x="62" y="82" text-anchor="middle">প্রেরক</text>
  <text class="lbl-sm" x="62" y="100" text-anchor="middle">ফোন</text>
  <rect class="cell-hot" x="140" y="60" width="100" height="50" rx="10"/>
  <text class="lbl-hot" x="190" y="82" text-anchor="middle">CHAT SRV ৫</text>
  <text class="lbl-sm" x="190" y="100" text-anchor="middle">WebSocket</text>
  <rect class="cell-cyan" x="270" y="15" width="115" height="42" rx="10"/>
  <text class="lbl-cyan" x="327" y="36" text-anchor="middle">MESSAGE STORE</text>
  <text class="lbl-sm" x="327" y="51" text-anchor="middle">Cassandra/DynamoDB</text>
  <rect class="cell-cyan" x="270" y="70" width="115" height="42" rx="10"/>
  <text class="lbl-cyan" x="327" y="91" text-anchor="middle">CONN MANAGER</text>
  <text class="lbl-sm" x="327" y="106" text-anchor="middle">Redis-ডিরেক্টরি</text>
  <rect class="cell-hot" x="415" y="60" width="100" height="50" rx="10"/>
  <text class="lbl-hot" x="465" y="82" text-anchor="middle">CHAT SRV ৮</text>
  <text class="lbl-sm" x="465" y="100" text-anchor="middle">প্রাপকের সার্ভার</text>
  <rect class="cell-leaf" x="520" y="60" width="30" height="50" rx="10"/>
  <text class="lbl-leaf" x="535" y="82" text-anchor="middle">প্রা</text>
  <text class="lbl-sm" x="535" y="98" text-anchor="middle">পক</text>
  <line class="edge" x1="110" y1="85" x2="138" y2="85" marker-end="url(#arrowB)"/>
  <line class="edge" x1="240" y1="75" x2="268" y2="40" marker-end="url(#arrowB)"/>
  <line class="edge" x1="240" y1="92" x2="268" y2="92" marker-end="url(#arrowB)"/>
  <line class="edge" x1="385" y1="91" x2="413" y2="88" marker-end="url(#arrowB)"/>
  <line class="edge" x1="515" y1="85" x2="518" y2="85" marker-end="url(#arrowB)"/>
  <text class="lbl-sm" x="280" y="150" text-anchor="middle">১ টিক = সার্ভারে পৌঁছেছে · ২ টিক = ডিভাইসে পৌঁছেছে · নীল = পড়া হয়েছে</text>
  <text class="lbl-sm" x="280" y="175" text-anchor="middle">প্রাপক অফলাইন? মেসেজ সারিতে — অনলাইনে উঠলেই ডেলিভারি</text>
  <text class="lbl-sm" x="280" y="205" text-anchor="middle">ক্রম-রক্ষা: প্রতি কথোপকথনে sequence number/timestamp</text>
  <text class="lbl-sm" x="280" y="228" text-anchor="middle">লেখার-সাগর: distributed DB কোটি লেখা কয়েক মেশিনে ভাগ করে সামলায়</text>
</svg>
<div class="diag-cap">Connection manager মেসেজ রাখে না — শুধু জানে কে কোথায় যুক্ত; সেটাই যথেষ্ট।</div>
</div>
<div class="code-block">ডিজাইন-লক্ষ্য তিনটা, সমাধানও তিন স্তম্ভ:

লক্ষ্য: দ্রুত মেসেজ · সিস্টেম সবসময় লাইভ ·
        ক্রম এলোমেলো নয়

১. WEBSOCKET — স্থায়ী দুই-মুখো দরজা
   HTTP-র প্রশ্ন-উত্তরে সার্ভার ঠেলতে
   পারে না; WebSocket-এ দুই পাশই যখন-
   খুশি পাঠায়। তাই মেসেজ আসে সাথে সাথে —
   রিফ্রেশের অপেক্ষা নেই। অঞ্চলভর্তি অনেক
   chat সার্ভার, প্রত্যেক সক্রিয় ইউজার একটার
   সাথে যুক্ত।

২. CONNECTION MANAGER — জীবন্ত ডিরেক্টরি
   কে কোন সার্ভারে আছে — এই ম্যাপ Redis-এর
   মতো in-memory ক্যাশে; মেসেজ রাখে না,
   শুধু ঠিকানা জানে। (দরজা ২-এর cache-ই
   এখানে নায়কের ভূমিকায়!)

৩. DISTRIBUTED STORE — লেখার সাগর
   Cassandra/DynamoDB-জাতীয় ডেটাবেস
   কোটি লেখা অনেক মেশিনে ভাগ করে টানে;
   ক্রম রক্ষা পায় প্রতি-কথোপকথনের
   sequence/timestamp-এ।</div>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>আগের দরজার হাজিরা:</strong> দরজা ২-এর প্রতিটা ইট এখানে কাজে নেমেছে — WebSocket (দ্রুততা), Redis-cache (ডিরেক্টরি), distributed DB (স্কেল), সারি (অফলাইন-সহনশীলতা)। <strong>কেস-স্টাডি মানেই নতুন জিনিস নয় — পুরনো ইটের নতুন সাজসজ্জা; সেটাই চেনার চোখ।</strong></div></div>
<div class="secret-box">💬 এক মেসেজের পেছনে চার স্তম্ভ — স্থায়ী দরজা, জীবন্ত ডিরেক্টরি, লেখার সাগর, স্পষ্ট টিক; কেস-স্টাডিতে ইটগুলো সবার আগে চোখে পড়ে।</div>`,
  senior: {
    title: "WhatsApp ডিজাইন — দ্রুত গাইড",
    body: "<p><strong>ফ্লো:</strong> WebSocket (long-lived, push-সক্ষম; বহু chat সার্ভার) → store-first (msg/sender/receiver/conv/timestamp → Cassandra/DynamoDB উচ্চ-লেখা-স্কেল) → connection manager (Redis: user→server ম্যাপ, মেসেজ নয়) → প্রাপক-সার্ভারে forward → push। <strong>ACK-চেইন:</strong> ১-টিক সার্ভার, ২-টিক ডিভাইস, নীল পড়া; অফলাইন = queue। <strong>ক্রম:</strong> per-conversation sequence/timestamp। পাঠ: প্রতিটা উপাদান আগের দরজার পরিচিত ইট।</p>"
  }
});

doors.push({
  num: 5,
  icon: "🚦",
  color: "#60a5fa",
  name: "তিন রক্ষীর ফারাক",
  subtitle: "Reverse Proxy vs Load Balancer vs API Gateway",
  tech: "Reverse proxy (front desk), load balancer (traffic distribution), API gateway (unified API entry: routing, auth, rate-limit)",
  spirit: "তাফরিক — একরকম দেখতে, কাজে আলাদা",
  secret: "তিনজনই ক্লায়েন্ট আর ব্যাকএন্ডের মাঝে বসে — কিন্তু প্রশ্ন তিনটা আলাদা: রিভার্স প্রক্সি লুকায়, লোড ব্যালান্সার ভাগ করে, API গেটওয়ে শাসন করে।",
  recall: {
    q: "একই মাঝে-বসা তিন কম্পোনেন্ট — কোনটা কোন সমস্যার উত্তর?",
    qen: "All three sit in the middle — which problem does each solve?",
    a: "Reverse Proxy: সার্ভারগুলোকে জনসমক্ষে না দেখিয়ে একটাই প্রকাশ্য মুখ (এপার্টমেন্টের রিসেপশন; + TLS-সমাপ্তি, ক্যাশিং, কম্প্রেশন)। Load Balancer: একই অ্যাপের একাধিক কপি জুড়ে ট্রাফিক ভাগ + unhealthy বাদ। API Gateway: সব API-র এক দরজা — রাউটিং, auth, rate-limit, রেসপন্স-ট্রান্সফর্ম। বাস্তবে একটার ভেতরে আরেকটার গুণ থাকে — Nginx তিনটাই পারে; প্রশ্ন কী করাচ্ছো তার উপর নাম।",
    aen: "Reverse proxy hides servers behind one public face (plus TLS termination, caching). Load balancer distributes traffic across identical copies. API gateway is the governed single entry for APIs — routing, auth, rate limits. In practice tools overlap; name by the job."
  },
  story: `<p class="scene-setting">সিস্টেম ডিজাইনের সবচেয়ে বিভ্রান্তিকর ত্রয়ী — তিনজনেই ক্লায়েন্টের রিকোয়েস্ট নিয়ে ব্যাকএন্ডে পাঠায়। তাহলে তিনটা কেন? শিক্ষকের উপায়: একই ই-কমার্স অ্যাপে তিন রকম বিপদ দেখান — আর প্রতিটা বিপদের নায়ক আলাদা।</p>
<p class="scene-setting en">The most confusing trio in system design — all three take client requests and forward them. Why three? The teacher shows one e-commerce app facing three different problems, each with a different hero.</p>
<div class="code-block">১. REVERSE PROXY — ভবনের রিসেপশন
সমস্যা: ব্যাকএন্ড সার্ভার সরাসরি ইন্টারনেটে
        দেখা যাচ্ছে — বিপদ।
সমাধান: সবার সামনে একটাই প্রকাশ্য মুখ;
        ভেতরে কটা সার্ভার, কোথায় — কেউ জানে না।
        (Nginx সবচেয়ে পরিচিত মুখ।)
বোনাস-ক্ষমতা: TLS-সমাপ্তি (এনক্রিপশন এখানেই
        খোলা), রেসপন্স-ক্যাশিং, কম্প্রেশন,
        সার্ভিস-ভেদে রাউটিং।

২. LOAD BALANCER — ট্রাফিকের বাটকার
সমস্যা: এক সার্ভারে হাজারো ইউজার — ডুবছে;
        তুমি দিলে ৪টা অনুরূপ সার্ভার।
        এখন কে কার রিকোয়েস্ট নেবে?
সমাধান: LB সামনে বসে ভাগ করে দেয়;
        একটা অসুস্থ হলে বাকিদের কাছে ঘোরায়।
        (দরজা ২-এর পুরনো বন্ধুর পূর্ণ পরিচয়।)

৩. API GATEWAY — সব API-র এক দরজা
সমস্যা: মাইক্রোসার্ভিসে যুগে শত সেবা —
        ক্লায়েন্ট কি শত ঠিকানা মুখস্থ করবে?
সমাধান: একটাই প্রবেশপথ; ভেতরে রাউটিং,
        auth-যাচাই, rate-limit, রেসপন্স-রূপান্তর —
        সব শাসন এক জায়গায়।</div>
<div class="diagram">
<div class="diag-title">তিন রক্ষীর স্তর — শিক্ষকের চিত্র</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
  <text class="lbl" x="70" y="30" text-anchor="middle">ক্লায়েন্ট</text>
  <rect class="cell-hot" x="140" y="12" width="115" height="40" rx="10"/>
  <text class="lbl-hot" x="197" y="30" text-anchor="middle">REVERSE PROXY</text>
  <text class="lbl-sm" x="197" y="46" text-anchor="middle">এক প্রকাশ্য মুখ</text>
  <rect class="cell-cyan" x="140" y="72" width="115" height="40" rx="10"/>
  <text class="lbl-cyan" x="197" y="90" text-anchor="middle">LOAD BALANCER</text>
  <text class="lbl-sm" x="197" y="106" text-anchor="middle">ট্রাফিক-ভাগ</text>
  <rect class="cell-leaf" x="140" y="132" width="115" height="40" rx="10"/>
  <text class="lbl-leaf" x="197" y="150" text-anchor="middle">API GATEWAY</text>
  <text class="lbl-sm" x="197" y="166" text-anchor="middle">শাসনের দরজা</text>
  <line class="edge" x1="100" y1="25" x2="138" y2="25"/>
  <line class="edge" x1="255" y1="32" x2="320" y2="32"/>
  <rect class="cell" x="320" y="12" width="90" height="40" rx="10"/>
  <text class="lbl-sm" x="365" y="36" text-anchor="middle">সার্ভার-দল</text>
  <rect class="cell" x="320" y="72" width="90" height="40" rx="10"/>
  <text class="lbl-sm" x="365" y="96" text-anchor="middle">অনুরূপ কপি</text>
  <rect class="cell" x="320" y="132" width="90" height="40" rx="10"/>
  <text class="lbl-sm" x="365" y="156" text-anchor="middle">মাইক্রো-সেবা</text>
  <text class="lbl-sm" x="465" y="90" text-anchor="middle">তিনটাই মাঝে বসে —</text>
  <text class="lbl-sm" x="465" y="110" text-anchor="middle">প্রশ্ন করে নাম চেনো:</text>
  <text class="lbl-sm" x="465" y="130" text-anchor="middle">লুকায়? ভাগ করে? শাসন করে?</text>
</svg>
<div class="diag-cap">বাস্তব জগতে ওভারল্যাপ আছে (Nginx তিন টুপিই পরে) — নাম নয়, কাজটাই কম্পোনেন্টের পরিচয়।</div>
</div>
<div class="secret-box">🚦 তিন রক্ষী তিন প্রশ্নের উত্তর — রিভার্স প্রক্সি লুকায়, ব্যালান্সার ভাগ করে, গেটওয়ে শাসন করে; কাজ চিনলেই নাম চেনা।</div>`,
  senior: {
    title: "Proxy/LB/Gateway — দ্রুত গাইড",
    body: "<p><strong>Reverse proxy:</strong> এক প্রকাশ্য মুখে সার্ভার-লুকানো + TLS-সমাপ্তি/ক্যাশ/কম্প্রেশন (Nginx)। <strong>LB:</strong> অনুরূপ-কপি জুড়ে ট্রাফিক-ভাগ + health-check। <strong>API Gateway:</strong> সব API-র এক দরজা — রাউটিং, auth, rate-limit, ট্রান্সফর্ম। <strong>বাস্তবতা:</strong> টুল-ওভারল্যাপ স্বাভাবিক; কম্পোনেন্ট চেনো সমাধান-করা-সমস্যা দিয়ে, নাম দিয়ে নয়। প্রশ্ন-ছাঁকনি: লুকাচ্ছে, ভাগ করছে, না শাসন করছে?</p>"
  }
});

doors.push({
  num: 6,
  icon: "🔭",
  color: "#bfdbfe",
  name: "দৃশ্যমানতার ভাষা",
  subtitle: "OpenTelemetry Finally Makes Sense — পূর্ণ যাত্রার সমাপ্তি",
  tech: "Metrics, logs, traces; observability; vendor-neutral telemetry standard (OTel); instrumentation → collector → backend",
  spirit: "মুহাসাবা — ভেতরের হিসাব বাইরে আনা",
  secret: "Observability মানে অন্ধকার ঘরে বাতি — metrics (সংখ্যা-নজর), logs (ঘটনার ডায়েরি), traces (এক রিকোয়েস্টের পূর্ণ যাত্রা); আর OpenTelemetry সেই বাতির নির্ভেন্ডর ভাষা — একবার বসাও, যেকোনো প্ল্যাটফর্মে পাঠাও।",
  recall: {
    q: "Metrics, logs, traces — তিনটার আলাদা কাজ কী? OTel vendor-নিরপেক্ষ হওয়ায় লাভ কী?",
    qen: "What does each of metrics/logs/traces do? Why does vendor-neutral OTel matter?",
    a: "Metrics = সময়-ধরে-নেওয়া সংখ্যা (CPU, রিকোয়েস্ট-হার, error-হার, latency) — কীভাবে আচরণ করছে; Logs = নির্দিষ্ট ঘটনার বিস্তারিত (DB-কানেকশন টাইমআউট, সার্ভিস-ফেল) — কী ঘটলো; Traces = এক রিকোয়েস্টের সেবা-থেকে-সেবা যাত্রা ধাপে-ধাপে-সময়সহ — কোথায় আটকালো। OTel লাভ: instrumentation একবার লেখো (স্ট্যান্ডার্ড SDK/collector), backend বদলালে কোড বদলাতে হয় না — vendor lock-in শেষ।",
    aen: "Metrics = numbers over time (how it behaves); logs = detailed events (what happened); traces = one request's journey with timings (where it got stuck). OTel = write instrumentation once, swap backends without touching code."
  },
  story: `<p class="scene-setting">শেষ দরজায় একটা প্রশ্ন: তোমার অ্যাপের ভেতরে এখন কী চলছে? বড় সিস্টেমের ভেতরটা অন্ধকার ঘর — আর সেই ঘরে বাতি জ্বালানোর নাম observability। শিক্ষকের শেষ ভিডিও শেখায় বাতির তিন রকম আলো, আর সেই আলো যে ভাষায় বেরোয় — সেটার নাম OpenTelemetry।</p>
<p class="scene-setting en">The final door asks: what is happening inside your app right now? A large system is a dark room; observability is lighting it. The last video teaches three kinds of light — and the language they speak: OpenTelemetry.</p>
<div class="code-block">টেলিমেট্রির তিন আলো:

METRICS — সংখ্যার নজর
  সময় ধরে মাপ: CPU, মেমরি, request-rate,
  error-rate, API-র সাড়া-সময়।
  প্রশ্ন: সিস্টেম কেমন আচরণ করছে?

LOGS — ঘটনার ডায়েরি
  নির্দিষ্ট ঘটনার বিস্তারিত: DB-কানেকশন
  টাইমআউট হলো, সার্ভিস ফেল করলো।
  প্রশ্ন: ঠিক কী ঘটলো?

TRACES — যাত্রার মানচিত্র
  এক রিকোয়েস্ট পার হয় gateway →
  catalog → cart → ডেটাবেস;
  trace দেখায় পুরো পথ, প্রতি ধাপের সময়।
  প্রশ্ন: কোথায় আটকালো?

তিনটা মিলেই observability —
অন্ধকার ঘরে তিন দিকের বাতি।</div>
<div class="code-block">OPENTELEMETRY (OTel) — কেন আরেকটা টুল?

সমস্যা: তোমার রিটেইল-অ্যাপে catalog, cart,
checkout, order — সব সার্ভিস থেকে metrics/
logs/traces সংগ্রহ করতে হবে।

পথ ১: নির্দিষ্ট vendor-এর SDK সব সার্ভিসে
  বসাও। কাজ চলে — এক বছর পরে vendor
  বদলালে? প্রতিটা সার্ভিসের কোড ছুঁতে হবে।

পথ ২ (OTel): ওপেন-সোর্স স্ট্যান্ডার্ড —
  একভাবে জেনারেট, একভাবে সংগ্রহ, একভাবে
  এক্সপোর্ট; backend যেটাই হোক।
  vendor বদলালে কনফিগ বদলাও — কোড নয়।

ফ্লো: instrumentation (তোমার কোডে স্ট্যান্ডার্ড
SDK) → Collector (টেলিমেট্রি জমা-প্রক্রিয়াকরণ)
→ Backend (যেকোনো বিশ্লেষণ-প্ল্যাটফর্ম)</div>
<div class="callout tip"><span class="co-icon">🏁</span><div><strong>সিরিজের সেতুবন্ধন, শেষ দরজায়:</strong> দরজা ৩-এ প্রোডাকশনের অজানা জগৎ, দরজা ৪-এ কোটি-মেসেজের কেস — দুটোই অন্ধকার ছাড়া অসম্ভব; observability সেই আলো। আর AI-বইয়ের (Atlas) LangSmith-পাঠ মনে আছে? Run আর trace — সেই একই ভাবনা এখানে পুরো সিস্টেমে। <strong>ছয় দরজা পেরিয়ে তুমি এখন নীলনকশা পড়তে পারো, বানাতে পারো, আর চালানোর সময় ভেতরটাও দেখতে পারো।</strong></div></div>
<div class="secret-box">🔭 অন্ধকার সিস্টেমে তিন বাতি — সংখ্যা, ডায়েরি, যাত্রা-মানচিত্র; আর OTel সেই বাতির সর্বজনীন ভাষা — একবার বসাও, সব প্ল্যাটফর্মে যায়।</div>`,
  senior: {
    title: "Observability + OTel — দ্রুত গাইড",
    body: "<p><strong>তিন আলো:</strong> metrics (সময়-সিরিজ সংখ্যা — আচরণ), logs (ঘটনার খতিয়ান — কী হলো), traces (request-এর সেবা-জুড়ে যাত্রা+সময় — কোথায় আটকালো)। <strong>OTel:</strong> vendor-নিরপেক্ষ ওপেন-স্ট্যান্ডার্ড — instrumentation (SDK) → Collector → যেকোনো backend; vendor-বদলে কোড-ছোঁয়া নেই। <strong>নিয়ম:</strong> তিন আলোই লাগবে — metrics বলে কিছু একটা গেছে, logs বলে কী, traces বলে কোথায়।</p>"
  }
});
