// ════════════════════════════════════════
// CITY BUILDER'S CODEX — DOORS 5-8
// 5. Communication Protocols  6. Message Queues
// 7. API Gateway  8. CDN
// ════════════════════════════════════════

// ══ DOOR 5: COMMUNICATION PROTOCOLS ══
doors.push({
  num:5, icon:"🐪", color:"#3dd6c4", name:"সরাইখানা প্রধানের চত্বর",
  subtitle:"The Caravanserai Master's Square", tech:"Communication Protocols (REST / gRPC / GraphQL / WebSocket)",
  spirit:"ওয়াসলা — সংযোগ, জোড়া লাগানো",
  secret:"মহল্লাগুলো (microservices) কথা বলবে কীভাবে? কখনো চিঠি (REST), কখনো দ্রুত কুরিয়ার (gRPC), কখনো ইচ্ছামাফিক অনুসন্ধান (GraphQL), কখনো অবিরত স্রোত (WebSocket)। সঠিক প্রোটোকল = সঠিক সংযোগ।",
  recall:{
    q:"সরাইখানা প্রধান কেন সব বার্তা একই পদ্ধতিতে পাঠান না?",
    qen:"Why doesn't the caravanserai master send all messages the same way?",
    a:"কারণ বিভিন্ন বার্তার বিভিন্ন প্রয়োজন। কিছু ধীর কিন্তু সহজ (REST), কিছু দ্রুত কঠোর (gRPC), কিছু সুনির্দিষ্ট (GraphQL), কিছু অবিরত (WebSocket)। প্রোটোকল বাছাই = সঠিক টুল সঠিক কাজে।",
    aen:"Because different messages have different needs. Some slow but easy (REST), some fast strict (gRPC), some precise (GraphQL), some continuous (WebSocket). Choosing the protocol = right tool for the job."
  },
  story:`
<p class="scene-setting">পঞ্চম স্থান। সরাইখানা প্রধানের চত্বর — নগরীর মোড়ে, চার মহল্লার মাঝখানে। হাজি ইউসুফ দাঁড়িয়ে আছেন — সামনে চার ধরনের কুরিয়ার: একজন ধীরগতির চিঠিওয়ালা, একজন দ্রুত অশ্বারোহী, একজন প্রশ্নকারী গোয়েন্দা, একজন সিগন্যাল-ম্যান। এক বণিক এলেন — "এই বার্তাটা পাঠাও।" ইউসুফ জিজ্ঞেস করলেন — "জরুরি? দূরবর্তী? উত্তর চাই? অবিরত?" প্রতিটা প্রশ্ন আলাদা কুরিয়ার বেছে নেয়।</p>
<p class="scene-setting en">The fifth place. The Caravanserai Master's square — at the city's crossroads, between four quarters. Haji Yusuf stands — four couriers before him: a slow letter-carrier, a fast horseman, an inquiring scout, a signalman. A merchant came — "Send this message." Yusuf asked — "Urgent? Distant? Need a reply? Continuous?" Each question chose a different courier.</p>

<div class="dialogue">মহল্লা স্থপতি শিখিয়েছিলেন — মহল্লায় ভাগ করো (microservices)। কিন্তু ভাগ করলে এক মহল্লা অন্যের সাথে কথা বলবে কীভাবে? এটাই আমার কাজ — সংযোগ। চার ধরনের সংযোগ, চার ধরনের প্রয়োজনে।</div>
<div class="dialogue en">"The quarter architect taught — divide into quarters (microservices). But once divided, how does one quarter speak to another? That's my job — connection. Four kinds of connection, for four kinds of needs."</div>

<div class="diagram">
  <div class="diag-title">চার প্রোটোকল — কখন কোনটা</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrT5" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#3dd6c4"/></marker>
    </defs>
    <!-- REST -->
    <rect class="cell-moon" x="25" y="40" width="125" height="80" rx="8"/>
    <text class="lbl-amber" x="87" y="60">REST</text>
    <text class="lbl-sm" x="87" y="78">HTTP / JSON</text>
    <text class="lbl-sm" x="87" y="95" style="font-size:9px">সহজ, পোর্টেবল</text>
    <text class="lbl-sm" x="87" y="108" style="font-size:9px">বাইরের API, web</text>
    <text class="lbl-sm" x="87" y="120" style="font-size:9px">টেক্সট = বড়</text>
    <!-- gRPC -->
    <rect class="cell-cyan" x="160" y="40" width="125" height="80" rx="8"/>
    <text class="lbl-cyan" x="222" y="60">gRPC</text>
    <text class="lbl-sm" x="222" y="78">HTTP/2 / protobuf</text>
    <text class="lbl-sm" x="222" y="95" style="font-size:9px">দ্রুত, বাইনারি</text>
    <text class="lbl-sm" x="222" y="108" style="font-size:9px">service-service</text>
    <text class="lbl-sm" x="222" y="120" style="font-size:9px">strict schema</text>
    <!-- GraphQL -->
    <rect class="cell-purple" x="295" y="40" width="125" height="80" rx="8"/>
    <text class="lbl-sm" x="357" y="60" fill="#b37feb" style="font-size:11px;font-weight:700">GraphQL</text>
    <text class="lbl-sm" x="357" y="78">এক endpoint</text>
    <text class="lbl-sm" x="357" y="95" style="font-size:9px">ইচ্ছামাফিক query</text>
    <text class="lbl-sm" x="357" y="108" style="font-size:9px">over/under-fetch নয়</text>
    <text class="lbl-sm" x="357" y="120" style="font-size:9px">mobile, জটিল UI</text>
    <!-- WebSocket -->
    <rect class="cell-hot" x="430" y="40" width="125" height="80" rx="8"/>
    <text class="lbl-hot" x="492" y="60">WebSocket</text>
    <text class="lbl-sm" x="492" y="78">TCP, দ্বিমুখী</text>
    <text class="lbl-sm" x="492" y="95" style="font-size:9px">অবিরত সংযোগ</text>
    <text class="lbl-sm" x="492" y="108" style="font-size:9px">চ্যাট, live, push</text>
    <text class="lbl-sm" x="492" y="120" style="font-size:9px">স্টেটফুল সার্ভার</text>
    <!-- decision flow -->
    <text class="lbl-sm" x="280" y="170" text-anchor="middle">বাইরে API → REST · ভেতরে service-service → gRPC</text>
    <text class="lbl-sm" x="280" y="190" text-anchor="middle">জটিল ক্লায়েন্ট → GraphQL · রিয়েলটাইম → WebSocket</text>
    <text class="lbl-sm" x="280" y="215" text-anchor="middle" fill="#9290a8">সব মিলিয়েও চলে — hybrid architecture সাধারণ</text>
  </svg>
</div>

<div class="code-block">Communication Protocols — The Four Couriers:

১. REST (Representational State Transfer)
   HTTP methods + JSON, stateless, resource-based
     GET    /users/123       → fetch (idempotent, cacheable)
     POST   /users           → create (non-idempotent)
     PUT    /users/123       → replace (idempotent)
     PATCH  /users/123       → partial update
     DELETE /users/123       → remove (idempotent)
   ✅ সহজ, ইউবিকুইটাস, ব্রাউজার-বান্ধব, stateless
   ❌ টেক্সট (JSON) = বড়, over-fetching (সব ডেটা)
   → বাইরের API, public endpoints, CRUD apps

২. gRPC (Google RPC)
   HTTP/2 + Protocol Buffers (binary)
     service UserService { rpc GetUser(Id) returns (User); }
   ✅ দ্রুত (binary, HTTP/2 multiplexing), strict schema, bidirectional streaming
   ❌ ব্রাউজারে কঠিন, schema compile করতে হয়, debugging কঠিন
   → service-service (ভেতরের), low-latency, polyglot microservices

৩. GraphQL
   এক POST /graphql endpoint, ক্লায়েন্ট query লেখে
     query { user(id:1) { name orders { total } } }
   ✅ ক্লায়েন্ট ঠিক যা চায় পায়, এক রাউন্ড-ট্রিপে অনেক ডেটা
   ❌ জটিল server, N+1 query সমস্যা, rate limiting কঠিন
   → mobile, জটিল UI, অনেক ক্লায়েন্ট ভ্যারিয়েন্ট

৪. WebSocket (ও SSE)
   এক TCP সংযোগ, দ্বিমুখী (full-duplex), অবিরত
     ws://server → সার্ভার যখন খুশি push করে
   ✅ রিয়েলটাইম, কম overhead, push notifications
   ❌ stateful সার্ভার (স্কেল কঠিন), ফায়ারওয়াল সমস্যা
   → চ্যাট, গেম, live update, collaborative editing

   SSE (Server-Sent Events) — সার্ভার → ক্লায়েন্ট একমুখী, HTTP উপর, সহজ
   → নিউজ ফিড, স্টক প্রাইস, LLM token streaming (ChatGPT এটা ব্যবহার করে!)

SYNCHRONOUS vs ASYNCHRONOUS (গুরুত্বপূর্ণ):
  SYNC (REST, gRPC): জিজ্ঞেস করো → উত্তরের জন্য অপেক্ষা করো
    → সহজ কিন্তু ব্লক করে। সার্ভিস ধীর হলে সব অপেক্ষা।
  ASYNC (Message Queue, Door 6): জিজ্ঞেস করো → উত্তর পরে নাও
    → ব্লক করে না। কিন্তু জটিল, eventual consistency।
  → আজকের সিস্টেম hybrid: কিছু sync, কিছু async।

IDEMPOTENCY (গুরুত্বপূর্ণ — Door 15 দেখো):
  GET, PUT, DELETE = idempotent (একই কল বারবার = একই ফল)
  POST = non-idempotent (দুইবার কল = দুটো অর্ডার!)
  → নেটওয়ার্ক retry হলে POST বিপদে — idempotency key দাও।</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। LLM API সব এই প্রোটোকলে চলে। OpenAI API = REST (সহজ)। LLM token streaming = SSE (ChatGPT যেমন টেক্সট ধীরে ধীরে দেখায়)। Inference service-এর ভেতরে = gRPC (দ্রুত, strict)। RAG agent orchestrator = sync + async মিশ্রণ। Vector DB client = gRPC। প্রতিটা সংযোগে সঠিক প্রোটোকল — এটাই আজকের AI infrastructure।</div>
<div class="dialogue en">"You're an AI engineer. LLM APIs all run on these protocols. OpenAI API = REST (simple). LLM token streaming = SSE (how ChatGPT shows text gradually). Inside inference service = gRPC (fast, strict). RAG agent orchestrator = mix of sync + async. Vector DB client = gRPC. The right protocol for each connection — this is today's AI infrastructure."</div>

<div class="dialogue">ওয়াসলা — সংযোগ, জোড়া লাগানো। কুরআনে আল্লাহ বলেন — "তোমরা আল্লাহর রশি দৃঢ়ভাবে ধরো, সবাই একসাথে।" (৩:১০৩)। রশি = সংযোগ। মহল্লা আলাদা, কিন্তু রশি ছাড়া এক নগরী নয়। Communication protocol সেই রশি — আলাদা service গুলোকে যুক্ত করে এক সিস্টেম বানায়। সংযোগ ছাড়া microservices ছড়ানো দ্বীপ — কেউ কারও কাছে পৌঁছাতে পারে না।</div>
<div class="dialogue en">"Wasla — connection, joining. Allah says — 'Hold fast to the rope of Allah, all together.' (3:103). Rope = connection. Quarters separate, but without the rope, not one city. The communication protocol is that rope — connecting separate services into one system. Without connection, microservices are scattered islands — no one reaches another."</div><div class="callout warn" data-door="5"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> Transaction failure: একটা bank app transfer — টাকা কমলো, প্রাপকের অ্যাকাউন্টে গেলো না। ACID violation। Atomicity = সব বা কিছু না।</div></div>

<div class="secret-box">🛡️ ACID: Atomicity, Consistency, Isolation, Durability। Transaction মানেই চারটাই।</div>
`,
  senior:{
    title:"Protocol Choice — Production Reality",
    body:`<p><strong>শুরু REST দিয়ে:</strong> ৯০% ক্ষেত্রে যথেষ্ট। ডকুমেন্টেশন (OpenAPI/Swagger), টেস্ট, debugging সব সহজ।</p><p><strong>gRPC যখন:</strong> (১) অনেক service-service কল একই ডেটাসেন্টারে, (২) protobuf schema টিম-জুড়ে contract হিসেবে কাজে লাগে, (৩) streaming দরকার।</p><p><strong>GraphQL সাবধানে:</strong> শক্তিশালী কিন্তু সার্ভার জটিল। DataLoader দিয়ে N+1 সমাধান করো, query cost analysis করো (খারাপ query সব ভাঙে)।</p><p><strong>Versioning:</strong> /v1/, /v2/ URL prefix — স্পষ্ট, কিন্তু URL দীর্ঘ হয়। Header-based versioning পরিষ্কার কিন্তু অস্পষ্ট। ব্রেকিং পরিবর্তন এড়াও — additive change করো।</p>`
  }
});

// ══ DOOR 6: MESSAGE QUEUES & ASYNC ══
doors.push({
  num:6, icon:"📡", color:"#b37feb", name:"সংকেত প্রহরীর বুরুজ",
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
<p class="scene-setting">ষষ্ঠ স্থান। নগরীর সর্বোচ্চ বুরুজ। উপরে মুয়াজ্জিন বিলাল দাঁড়িয়ে আছেন — হাতে কোনো যন্ত্র নেই, শুধু তাঁর কণ্ঠ। নিচে নগরী — হাজার ঘর, হাজার মানুষ। সবাইকে জানাতে হবে — "সময় হয়েছে।" একে একে ডাকলে দিন শেষ। কিন্তু তিনি একবার উঁচু কণ্ঠে আযান দিলেন — পুরো নগরী শুনল।</p>
<p class="scene-setting en">The sixth place. The city's tallest tower. Atop, Muazzin Bilal stands — no instrument, just his voice. Below — the city: thousands of homes, thousands of people. All must know — "The time has come." Calling individually — the day would end. But he raised his voice once in azan — the entire city heard.</p>

<div class="dialogue">সরাইখানা প্রধান শিখিয়েছিলেন — sync কীভাবে (REST, gRPC)। কিন্তু আমি বলি — কখনো sync যথেষ্ট নয়। কখনো এক সার্ভিস অনেক কাজ পাঠায়, আরেক সার্ভিস তার গতিতে করে। একে অপরের জন্য অপেক্ষা করে না। এটাই async — মাঝখানে একটা বার্তাবাহক।</div>
<div class="dialogue en">"The caravanserai master taught — how to sync (REST, gRPC). But I say — sometimes sync isn't enough. Sometimes one service sends much work, another does it at its own pace. They don't wait for each other. This is async — a messenger in between."</div>

<p>তুমি একটা ছবি আপলোড করলে। কী হওয়া দরকার? ছবি resize, thumbnail বানানো, AI ট্যাগ করা, notification পাঠানো। সব একসাথে? ইউজার ৩০ সেকেন্ড অপেক্ষা করবে? না। sync ভাঙলে সব পড়ে — একটা ধীর হলে সব ধীর।</p>
<p class="en">You upload a photo. What should happen? Resize, thumbnail, AI tagging, notification. All at once? User waits 30 seconds? No. If sync breaks — all fall; one slow, all slow.</p>

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
→ স্কেল করা সহজ — শুধু worker যোগ করো

DELIVERY SEMANTICS (গুরুত্বপূর্ণ — Door 15 দেখো):
  At-most-once: হয়তো পৌঁছাবে, হয়তো না (হারালে OK)
  At-least-once: অন্তত একবার, হয়তো দুইবার (idempotent লাগে)
  Exactly-once: ঠিক একবার (কঠিন! — সত্যিতে at-least + idempotent)

QUEUE PATTERNS:
 ১. Work Queue (task distribution):
    এক কাজ, অনেক worker-এর একজন নেয়
    → image processing, email send

 ২. Pub/Sub (broadcast):
    এক event, সব subscriber পায়
    → "user.created" → email, analytics, crm সব

 ৩. Event Sourcing:
    সব state change event হিসেবে লগ
    → audit, replay, time-travel debugging

 ৪. Dead Letter Queue (DLQ):
    বারবার ব্যর্থ বার্তা — আলাদা queue-এ
    → পরে তদন্ত, মূল queue পরিষ্কার

AT-LEAST-ONCE পৃথিবীতে (বাস্তবতা):
  নেটওয়ার্ক retry হয় → একই বার্তা দুইবার আসতে পারে
  → consumer idempotent হতে হবে (একই কাজ দুইবার = একবার)
  → idempotency key, dedup table (Door 15)</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Async processing AI infrastructure-এর মেরুদণ্ড। Batch inference job — sync API ঘণ্টার পর ঘণ্টা ব্লক করতে পারে না, তাই request queue-তে রাখো, "job_id ফেরত দাও, ফলাফল পরে নাও" (webhook বা polling)। Training pipeline orchestration — ডেটা প্রিপ্রসেসিং → training → evaluation → deployment, প্রতিটা স্টেজ শেষ হলে event পরেরটা trigger করে (Airflow, Kubeflow, বা কাস্টম queue)। নতুন মডেল রেডি হলে "model.trained" event — canary rollout, monitoring setup, registry update, একাধিক downstream একসাথে পায় (pub/sub)। GPU worker pool queue থেকে টাস্ক নেয় নিজের গতিতে — GPU ব্যস্ত থাকলে backpressure, queue বাড়ে, কমলে drain হয়। Failed training run বা corrupted batch? DLQ-তে যায় — silently হারায় না, পরে তদন্ত হয়।</div>
<div class="dialogue en">"You're an AI engineer. Async processing is the backbone of AI infrastructure. Batch inference jobs — a sync API can't block for hours, so queue the request, return a job_id, fetch the result later (webhook or polling). Training pipeline orchestration — data preprocessing → training → evaluation → deployment, each stage finishing triggers the next via an event (Airflow, Kubeflow, or a custom queue). When a new model is ready, a 'model.trained' event reaches multiple downstreams at once — canary rollout, monitoring setup, registry update (pub/sub). A GPU worker pool pulls tasks at its own pace — busy GPUs mean backpressure, the queue grows; free GPUs drain it. A failed training run or corrupted batch? Goes to the DLQ — not silently lost, investigated later."</div>

<div class="dialogue">আযান — একজন মুয়াজ্জিন, একবার কণ্ঠ, কিন্তু হাজার কান। মসজিদে যাওয়ার নির্দেশ একে একে দরকার নেই — একবার আযান, সবাই শোনে, প্রতেকে নিজ নিজ গতিতে আসে। কুরআনে আল্লাহ বলেন — "যখন জুমার দিন নামাজের জন্য আহ্বান করা হয়, তখন তোমরা আল্লাহর স্মরণের দিকে দ্রুত ধাবিত হও।" (৬২:৯)। একটাই আহ্বান, কিন্তু প্রত্যেকে নিজে সাড়া দেয় — কেউ কাউকে আলাদাভাবে ডাকে না। Message queue-ও তেমনি — একটা event publish করো, একাধিক service subscribe করে, প্রত্যেকে নিজ গতিতে সাড়া দেয়। publisher জানে না কে listen করছে — সে শুধু বলে দেয়। এটাই pub/sub। আযান = প্রকাশ্য ঘোষণা। pub/sub = প্রকাশ্য event।</div>
<div class="dialogue en">"Azan — one muazzin, one voice, but thousands of ears. The call to prayer doesn't need individual summons — one azan, everyone hears, each comes at their own pace. Allah says — 'When the call is proclaimed for prayer on the day of Jumu'ah (Friday), hasten to the remembrance of Allah.' (62:9). One call, but each responds on their own — no one is summoned individually. Message queue too — publish one event, multiple services subscribe, each responding at its own pace. The publisher doesn't know who's listening — just announces. This is pub/sub — publish/subscribe. Azan = public announcement. Pub/sub = public event."</div><div class="callout warn" data-door="6"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> Consensus failure: দুই node একসাথে leader হয়ে গেলো — split brain। দুই data। Merge conflict। Raft/Paxos ছাড়া split brain অসম্ভাব্য।</div></div>

<div class="secret-box">🛡️ Consensus = এক সিদ্ধান্ত, অনেক node। Raft, Paxos। Split brain প্রতিরোধ।</div>
`,
  senior:{
    title:"Kafka vs RabbitMQ vs SQS — কখন কোনটা?",
    body:`<p><strong>Kafka:</strong> স্ট্রিম, উচ্চ throughput, event sourcing। লগ হিসেবে কাজ করে — replay করা যায়। জটিল কিন্তু শক্তিশালী। Netflix, LinkedIn ব্যবহার করে।</p><p><strong>RabbitMQ:</strong> traditional message broker। routing সহজ, নির্ভরযোগ্য। task queue, work queue। মাঝারি জটিলতা।</p><p><strong>SQS (AWS):</strong> managed, serverless। সহজ, পরিচালনার দরকার নেই। কিন্তু vendor lock-in।</p><p><strong>নিয়ম:</strong> event streaming → Kafka। task distribution → RabbitMQ/SQS। সহজ শুরু → SQS।</p>`
  }
});

// ══ DOOR 7: API GATEWAY & RATE LIMITING ══
doors.push({
  num:7, icon:"🚧", color:"#3dd6c4", name:"শুল্ক আদায়কের চৌকি",
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
<p class="scene-setting">সপ্তম স্থান। নগরীর প্রবেশপথে একটা শুল্ক চৌকি। প্রতিটা প্রবেশকারী এখানে থামে। শুল্ক আদায়ক আব্দুল্লাহ বসে আছেন — সামনে একটা বই, হাতে সিলের মোহর। প্রতিটা বণিক আসেন — "কে তুমি?" (authentication), "কত মাল?" (quota), "কোথায় যাবে?" (routing)। কেউ অতিরিক্ত মাল নিয়ে এলে আব্দুল্লাহ বলেন — "এত নয়। ফিরে যাও।" Rate limit।</p>
<p class="scene-setting en">The seventh place. At the city's entrance, a customs checkpoint. Every entrant stops here. Customs collector Abdullah sits — a book before him, a seal stamp in hand. Each merchant comes — "Who are you?" (authentication), "How much goods?" (quota), "Where to?" (routing). If someone brings excess, Abdullah says — "Not this much. Go back." Rate limit.</p>

<div class="dialogue">সংকেত প্রহরী বলেছিলেন — async-এ সার্ভিস আলাদা। কিন্তু আমি বলি — আলাদা সার্ভিসেও এক চৌকি দরকার। কে ঢুকছে, কত ঢুকছে, কোথায় যাচ্ছে — এই তিন প্রশ্ন প্রতিটা অনুরোধে। এটাই API Gateway-এর কাজ।</div>
<div class="dialogue en">"The signal watcher said — async keeps services separate. But I say — even separate services need one checkpoint. Who enters, how much, where — these three questions for every request. This is the API Gateway's job."</div>

<div class="diagram">
  <div class="diag-title">Token Bucket বনাম Leaky Bucket — burst সামলানোর দুই কৌশল</div>
  <svg viewBox="0 0 560 215" xmlns="http://www.w3.org/2000/svg">
    <!-- TOKEN BUCKET -->
    <text class="lbl-cyan" x="130" y="20" text-anchor="middle">Token Bucket</text>
    <rect class="node-cyan" x="70" y="28" width="120" height="100" rx="10"/>
    <rect class="cell-cyan" x="82" y="40" width="22" height="22" rx="3"/>
    <rect class="cell-cyan" x="108" y="40" width="22" height="22" rx="3"/>
    <rect class="cell-cyan" x="134" y="40" width="22" height="22" rx="3"/>
    <rect class="cell-cyan" x="82" y="66" width="22" height="22" rx="3"/>
    <rect class="cell-cyan" x="108" y="66" width="22" height="22" rx="3"/>
    <rect class="cell-cyan" x="134" y="66" width="22" height="22" rx="3"/>
    <rect class="cell" x="82" y="92" width="22" height="22" rx="3"/>
    <rect class="cell" x="108" y="92" width="22" height="22" rx="3"/>
    <rect class="cell" x="134" y="92" width="22" height="22" rx="3"/>
    <line class="edge-cyan" x1="18" y1="78" x2="68" y2="78"/>
    <text class="lbl-sm" x="43" y="68" text-anchor="middle" style="font-size:9px">refill: +১ token/সময়ে</text>
    <line class="edge-cyan" x1="130" y1="130" x2="130" y2="158"/>
    <text class="lbl-sm" x="130" y="175" text-anchor="middle" style="font-size:10px">burst OK — জমানো token একসাথে খরচ</text>
    <!-- LEAKY BUCKET -->
    <text class="lbl-hot" x="420" y="20" text-anchor="middle">Leaky Bucket</text>
    <rect class="node-hot" x="360" y="28" width="120" height="100" rx="10"/>
    <line class="edge-hot" x1="392" y1="4" x2="400" y2="26"/>
    <line class="edge-hot" x1="420" y1="4" x2="420" y2="26"/>
    <line class="edge-hot" x1="448" y1="4" x2="440" y2="26"/>
    <text class="lbl-sm" x="420" y="42" text-anchor="middle" style="font-size:9px">burst request একসাথে ঢোকে</text>
    <circle class="ring" cx="420" cy="122" r="6"/>
    <line class="edge-hot" x1="420" y1="130" x2="420" y2="158"/>
    <text class="lbl-sm" x="420" y="175" text-anchor="middle" style="font-size:10px">সমান গতিতে বের হয় — burst শোষিত</text>
    <text class="lbl-sm" x="280" y="204" text-anchor="middle" fill="#9290a8" style="font-size:9px">একই burst ট্রাফিক — token bucket তাৎক্ষণিক পার করে দেয়, leaky bucket সবসময় সমান গতিতে ছাড়ে</text>
  </svg>
</div>

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
   Request/Response modifications
   Version routing (v1, v2)

৫. Aggregation — "একসাথে"
   ১ কল → একাধিক service → ১ response

৬. AuthZ (Authorization) — "কী করতে পারো?"
   Role-based access (admin? user?)
   Scope check (read? write?)</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। LLM API-এর সামনে gateway না থাকলে বিপদ। Rate limiting per-API-key করো — শুধু request গুনলে চলবে না, token গুনো (একটা কলে ১০০ token, আরেকটায় ১০,০০০ — খরচ সমান নয়)। Key management — OpenAI/Anthropic-এর আসল key কোনো downstream service নিজে রাখে না, gateway-এর মধ্য দিয়ে কল করে — centralized cost tracking, key leak হলে এক জায়গায় rotate। Model routing — /v1/chat কোন মডেলে যাবে (GPT-4, Claude, নিজস্ব fine-tuned) gateway ঠিক করে, মডেল ব্যর্থ হলে fallback করে। Guardrail layer — prompt injection ফিল্টার, PII redaction gateway-তে একবার বসালে প্রতিটা service আলাদা করে লিখতে হয় না। কিন্তু গুলিয়ো না — এসব gateway-এর কাজ, load balancer শুধু ট্রাফিক ছড়ায়, auth/rate-limit/routing decision নেয় না।</div>
<div class="dialogue en">"You're an AI engineer. Without a gateway in front of LLM APIs, trouble follows. Rate limit per API key — counting requests alone isn't enough, count tokens (one call costs 100 tokens, another 10,000 — not equal cost). Key management — no downstream service holds the real OpenAI/Anthropic key itself; it calls through the gateway — centralized cost tracking, one place to rotate if a key leaks. Model routing — the gateway decides which model /v1/chat goes to (GPT-4, Claude, your own fine-tune), and falls back if a model fails. Guardrail layer — prompt-injection filtering, PII redaction sit once at the gateway instead of being rewritten in every service. But don't confuse this with a load balancer — that just spreads traffic; it doesn't make auth/rate-limit/routing decisions."</div>

<div class="dialogue">মীকাত — হজ্জের সীমানা। মক্কায় প্রবেশের আগে নির্দিষ্ট স্থানে থামতে হয় — ইহরাম পরতে হয়, নিয়ম মানতে হয়। সরাসরি কাবায় যাওয়া যায় না। API Gateway হলো সেই মীকাত — প্রতিটা অনুরোধ আগে এখানে থামে, নিয়ম মেনে নেয়, তারপর ভেতরে যায়। মীকাত ছাড়া হজ্জ হয় না। Gateway ছাড়া production API হয় না।</div>
<div class="dialogue en">"Miqat — the Hajj boundary. Before entering Mecca, you stop at designated points — wear ihram, follow rules. You can't go directly to the Kaaba. API Gateway is that miqat — every request stops here first, follows rules, then enters. Without miqat, no Hajj. Without gateway, no production API."</div><div class="callout warn" data-door="7"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> Idempotency failure: payment API retry — দুই বার charge। Idempotency key ছিল না। Exactly-once = একবারই, retry হলেও।</div></div>

<div class="secret-box">🛡️ Idempotency = একই request দুইবার = একই ফলাফল। Payment-এ বাধ্যতামূলক।</div>
`,
  senior:{
    title:"Rate Limiting Algorithms — কোনটা কখন?",
    body:`<p><strong>Token Bucket:</strong> একটা বালতিতে token জমে। প্রতি request-এ একটা token খরচ। বালতি খালি? অস্বীকার। burst অনুমোদন।</p><p><strong>Leaky Bucket:</strong> একটা ছিদ্রযুক্ত বালতি। request ঢোকে, সমান গতিতে বের হয়। smooth rate।</p><p><strong>Fixed Window:</strong> প্রতি মিনিটে N request। সহজ কিন্তু boundary burst।</p><p><strong>Sliding Window:</strong> Fixed window + weighted — বেশি নির্ভুল।</p><p><strong>বাস্তব:</strong> Redis + token bucket = সবচেয়ে সাধারণ।</p>`
  }
});

// ══ DOOR 8: CDN (CONTENT DELIVERY NETWORK) ══
doors.push({
  num:8, icon:"🌍", color:"#36d6e7", name:"বাজার বিতরণকারীর কেন্দ্র",
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
<p class="scene-setting">অষ্টম স্থান। বিতরণকারীর কেন্দ্র। বিশাল দেয়ালে বিশ্বের মানচিত্র — তাতে ছোট ছোট চিহ্ন, প্রতিটা এক একটা বাজার। মাঝখানে মূল গোলাঘর, আর চারপাশে অসংখ্য ছোট কেন্দ্র। বিতরণকারী তামিম বললেন — "গোলাঘর রক্ষক বলেছিলেন, পণ্য কাছে রাখো। কিন্তু আমি বলি — কাছে রাখলে দূরের মানুষ কী করবে? পণ্য ইউজারের কাছে হতে হবে।"</p>
<p class="scene-setting en">The eighth place. The distributor's hub. A vast world map on the wall — small marks on it, each a market. At the center, the main granary; all around, countless small hubs. Distributor Tamim said — "The granary keeper said, keep goods close. But I say — what use are close goods for distant people? Goods must be near the user."</p>

<div class="dialogue">গোলাঘর রক্ষক বলেছিলেন — cache বানাও, দ্রুত দাও। কিন্তু আমি বলি — cache শুধু সেন্ট্রাল সার্ভারে হলে, দূরের ইউজারের কাছে পৌঁছাতে সময় লাগে। latency। ব্রাজিলের ইউজার আমেরিকার সার্ভার থেকে ডেটা চাইলে — ২০০ms। প্রতিটা request এই দূরত্ব পাড়ি। এটাই CDN সমাধান করে।</div>
<div class="dialogue en">"The granary keeper said — build a cache, serve fast. But I say — if the cache sits only at the central server, reaching distant users takes time. Latency. A Brazilian user requesting data from a US server — 200ms. Every request pays this distance. The CDN solves this."</div>

<div class="diagram">
  <div class="diag-title">CDN ছাড়া বনাম CDN সহ — একই দূরত্ব, ভিন্ন ফলাফল</div>
  <svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
    <!-- WITHOUT CDN -->
    <text class="lbl-hot" x="140" y="20" text-anchor="middle">CDN ছাড়া</text>
    <circle class="node" cx="35" cy="110" r="16"/>
    <text class="lbl-sm" x="35" y="112" text-anchor="middle" style="font-size:8px">User (BR)</text>
    <line class="edge-hot" x1="53" y1="110" x2="198" y2="110"/>
    <text class="lbl-hot" x="125" y="98" text-anchor="middle" style="font-size:10px">~২০০-৪০০ms</text>
    <rect class="node-purple" x="200" y="85" width="80" height="50" rx="8"/>
    <text class="lbl-sm" x="240" y="112" text-anchor="middle" style="font-size:9px">Origin (US)</text>
    <text class="lbl-sm" x="140" y="175" text-anchor="middle" style="font-size:9px">প্রতিটা request পুরো দূরত্ব পাড়ি দেয়</text>
    <!-- WITH CDN -->
    <text class="lbl-cyan" x="420" y="20" text-anchor="middle">CDN সহ</text>
    <circle class="node" cx="305" cy="140" r="14"/>
    <text class="lbl-sm" x="305" y="142" text-anchor="middle" style="font-size:8px">User (BR)</text>
    <line class="edge-cyan" x1="320" y1="140" x2="358" y2="140"/>
    <text class="lbl-cyan" x="338" y="128" text-anchor="middle" style="font-size:10px">~২০ms</text>
    <rect class="node-cyan" x="360" y="115" width="70" height="50" rx="8"/>
    <text class="lbl-sm" x="395" y="142" text-anchor="middle" style="font-size:9px">Edge POP (BR)</text>
    <line class="edge-amber" x1="430" y1="118" x2="475" y2="75" style="stroke-dasharray:4,3"/>
    <text class="lbl-sm" x="470" y="95" text-anchor="middle" style="font-size:8px">cache miss হলেই</text>
    <rect class="node-purple" x="470" y="45" width="60" height="35" rx="6"/>
    <text class="lbl-sm" x="500" y="66" text-anchor="middle" style="font-size:8px">Origin</text>
    <text class="lbl-sm" x="420" y="175" text-anchor="middle" style="font-size:9px">hit হলে origin ছোঁয়ারও দরকার নেই</text>
    <text class="lbl-sm" x="280" y="198" text-anchor="middle" fill="#9290a8" style="font-size:9px">একই ইউজার, একই কন্টেন্ট — দূরত্ব বদলালে latency-ও বদলে যায়</text>
  </svg>
</div>

<div class="code-block">CDN — Content Delivery Network:

THE LATENCY PROBLEM:
  light-এর গতিও সীমিত। আমেরিকা থেকে বাংলাদেশ:
    → physical distance ≈ ১৩,০০০ km
    → round-trip (fiber) ≈ ১৩০ms শুধু ভ্রমণে
    → + server processing, TLS handshake
    → total: ২০০-৪০০ms per request

CDN SOLUTION — EDGE LOCATIONS (POPs):
  Origin server → কন্টেন্ট copy করে পাঠায়
  → Edge POPs বিশ্বের শত শত জায়গায়
  → প্রতিটা ইউজারের কাছে একটা
  Cloudflare: ৩৩০+ cities, AWS CloudFront: ৬০০+ POPs

WHAT GOES ON A CDN:
  ✅ Static assets — images, CSS, JS, fonts
  ✅ Videos / large file downloads (Netflix = CDN)
  ✅ API responses that don't change per-user
  ❌ Per-user personalized content
  ❌ Authenticated API calls (সাবধানে)

EDGE COMPUTE (2024-26):
  Cloudflare Workers, Vercel Edge Functions
  → শুধু cache নয় — edge-এ কোড চালাও (auth check, A/B routing, personalization)
  → origin-এর কাছাকাছি নয়, ইউজারের কাছাকাছি চলে — সাধারণত sub-50ms, কিন্তু origin/API কল লাগলে সেই latency যোগ হয়

CDN = SECURITY LAYER too:
  → DDoS absorption (বিশাল bandwidth)
  → WAF, TLS termination, bot filtering</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। এখানে একটা ভুল খুব সাধারণ — CDN দিয়ে inference দ্রুত করা যায় ভাবা। যায় না। CDN কাজ করে static জিনিসে: ফ্রন্টএন্ড bundle (React/Next.js JS-CSS), model card ও ডকুমেন্টেশন পাতা, ডেমো ইমেজ, এমনকি বড় model weight ফাইল ডাউনলোড (deployment-এর সময় দ্রুত পৌঁছাতে)। কিন্তু live LLM response? না — প্রতিটা ইউজারের prompt আলাদা, cache করার মতো একই জিনিস নেই (হুবহু একই prompt বারবার এলে সেটা response cache/semantic cache, ভিন্ন layer, CDN edge caching নয়)। inference দ্রুত করতে দরকার compute কাছে আনা (একাধিক region-এ GPU deploy) — content কাছে আনা নয়। ব্যতিক্রম একটাই — সত্যিকারের static output (যেমন একটা fixed FAQ bot-এর common answer pre-computed) CDN-এ বসতে পারে। বাকি সব dynamic generation-এর জন্য CDN ভুল টুল।</div>
<div class="dialogue en">"You're an AI engineer. A common mistake here — thinking a CDN can speed up inference. It can't. A CDN handles static things: frontend bundles (React/Next.js JS-CSS), model card and doc pages, demo images, even large model-weight file downloads (for fast reach during deployment). But a live LLM response? No — every user's prompt differs, there's nothing identical to cache (if the exact same prompt does repeat, that's response/semantic caching — a different layer, not CDN edge caching). Speeding up inference means bringing compute closer (deploying GPUs across regions), not bringing content closer. One exception — genuinely static output (like a fixed FAQ bot's pre-computed common answers) can sit on a CDN. For everything else that's dynamically generated, a CDN is the wrong tool."</div>

<div class="dialogue">তাসরীফ — কাছে এগিয়ে যাওয়া। কুরআনে আল্লাহ বলেন — "তোমার পূর্বেও রসূলগণ স্পষ্ট প্রমাণসহ এসেছিলেন।" (৩:১৮৪)। প্রমাণ দূরে রাখলে কাজে লাগে না — কাছে পৌঁছাতে হয়। CDN-ও তেমনি — কন্টেন্ট অরিজিনে আটকে থাকলে চলে না, ইউজারের কাছে পৌঁছাতে হয়। যে সেবা কাছে পৌঁছায়, সে সেবা সফল।</div>
<div class="dialogue en">"Tasreef — bringing close. Allah says — 'Even before you, messengers came with clear proofs.' (3:184). Proof kept distant serves no one — it must reach people. The CDN too — content can't stay locked at the origin, it must reach the user. Service that reaches close, succeeds."</div><div class="callout warn" data-door="8"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> Consistent hashing failure: cache cluster node যোগ → পুরো hash পুনরায় হিসাব — ৮০% key move। Consistent hashing দিলে শুধু প্রতিবেশী move।</div></div>

<div class="secret-box">🛡️ Consistent hashing = node যোগ/বিয়োগে সবচেয়ে কম key move।</div>
`,
  senior:{
    title:"CDN in Production — Setup Checklist",
    body:`<p><strong>Static assets first:</strong> images/CSS/JS সব CDN-এ। এটাই সবচেয়ে সহজ জয়।</p><p><strong>Cache headers ঠিক করো:</strong> <code>Cache-Control: public, max-age=31536000, immutable</code> — fingerprinted assets-এ।</p><p><strong>Purge strategy:</strong> ডিপ্লয় করার সময় পুরোনো version URL বাদ দাও (fingerprint)।</p><p><strong>Providers:</strong> Cloudflare (সস্তা), CloudFront (AWS), Fastly (instant purge), Vercel (DX + edge)।</p>`
  }
});
