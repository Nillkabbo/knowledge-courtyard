// doors-1-4.js — Cloud X Berry Series Book 6: The Data Vault
// Source: Databases playlist (7 videos)
const doors = [];

doors.push({
  num: 1,
  icon: "⚖️",
  color: "#fbbf24",
  name: "সিনিয়রের সাত আইন",
  subtitle: "7 Database Laws of Senior Backend Developer",
  tech: "Query-first design, per-operation consistency, right engine per job, caching, search, analytics, evolution over perfection",
  spirit: "উসুল — টুলের আগে প্রশ্ন",
  secret: "ডেটাবেস বেছে নেওয়া আর ডেটা-আর্কিটেকচার ডিজাইন করা এক কথা নয় — সিনিয়ররা প্রথমে প্রশ্ন করে (অ্যাপ ডেটা দিয়ে কী করবে), তারপর ভাণ্ডার বাছে; আর শুরুতেই সব টুল নয় — প্রয়োজন এলে এক এক করে যোগ।",
  recall: {
    q: "ডেটাবেস বাছাইয়ের আগে সিনিয়র প্রথম যে কাজটা করেন সেটা কী? consistency-কে এক সেটিং ভাবার ভুলটা কোথায়?",
    qen: "What do seniors write down before choosing a database? Why is treating consistency as one setting a mistake?",
    a: "প্রথম কাজ: অ্যাপের গুরুত্বপূর্ণ reads/writes — অ্যাক্সেস-প্যাটার্ন লিখে ফেলা (কোন ডেটা কীভাবে চাওয়া হবে), শুধু ডেটা দেখে নয়। E-commerce-এর মতো সম্পর্ক-জোড়া কোয়েরিতে relational স্বাভাবিক; key-value দ্রুত-খোঁয়ায় ভিন্ন ইঞ্জিন। Consistency-ভুল: পুরো অ্যাপে এক সেটিং নয় — কোন operation-এ ভুল অসহনীয় (inventory, payment) আর কোথায় সামান্য পুরনো চলবে (recommendation), সেই বিজনেস-নিয়মে প্রতিটা অপারেশন আলাদা করে ভাবা।",
    aen: "Write the access patterns first — the important reads and writes — then choose. And consistency is per-operation, not one app-wide setting: inventory and payments must stay correct; recommendations can be slightly stale."
  },
  story: `<p class="scene-setting">"পরের অ্যাপে কোন ডেটাবেস?" — প্রায় সবাই ৫ সেকেন্ডে উত্তর দিতে পারে: Postgres, MongoDB, Dynamo... শিক্ষকের শুরুর কথাটাই সমস্যার মূল: <strong>অ্যাপ না বুঝে ডেটাবেস বেছে নেওয়া</strong>। ডেটাবেস বাছা আর ডেটা-আর্কিটেকচার ডিজাইন এক নয় — শুরু একটাতেই, প্রয়োজন এলে cache, search engine, analytic system যোগ হয়। এই ভিডিওটা সেই ৭টা আইনের খতিয়ান।</p>
<p class="scene-setting en">"Which database for the next app?" — everyone answers in 5 seconds. The teacher's opening line names the root problem: choosing before understanding the application. These are the seven laws.</p>
<div class="code-block">সিনিয়রের ৭ ডেটাবেস-আইন:

আইন ১ — শুরু কোয়েরি দিয়ে, ডেটা দিয়ে নয়
  ভুল প্রশ্ন: "কোন ডেটাবেসে এই ডেটা রাখব?"
  সঠিক প্রশ্ন: "অ্যাপ এই ডেটা দিয়ে কী করবে?"
  E-commerce: customers-orders-products-payments —
    সম্পর্ক জোড়া, নানাভাবে কোয়েরি → relational
    স্বাভাবিক ফিট
  অন্য সার্ভিস: "user 12345-এর সেশন দাও" —
    key জানা, সম্পর্ক লাগে না, দ্রুত ভ্যালু
    চাই → ভিন্ন অ্যাক্সেস-প্যাটার্ন
  কাজ: গুরুত্বপূর্ণ reads/writes আগে লিখো,
    ডেটাবেস বাছো প্যাটার্ন দেখে — ডেটা দেখে নয়।

আইন ২ — ডেটা ভুল হলে কী হয়?
  Consistency এক সেটিং নয়, বিজনেস-নিয়ম:
    recommendation একটু পুরনো? চলবে।
    সার্চ-রেজাল্ট ১ সেকেন্ড দেরি? চলবে।
    শেষ প্রোডাক্ট দুই কাস্টমার কিনে ফেললো?
    payment/account balance এলোমেলো? — বিপদ।
  প্রতিটা অপারেশন আলাদা জিজ্ঞেসা:
    কোনটা সবসময় শুদ্ধ থাকতেই হবে,
    কোনটা একটু পুরনো হলেও বাঁচে।

আইন ৩ — প্রতিটা কাজে সঠিক ইঞ্জিন
  এক ডেটাবেসে সব চাপ না চাপিয়ে ভাগ:
    ডকুমেন্ট, ক্যাশ, সার্চ, অ্যানালিটিক্স —
    প্রতিটার নিজস্ব সেরা-অস্ত্র।
  (পরের দরজাগুলো ঠিক এই ভাগেরই পরিচয়!)

আইন ৪-৭ — বাকি আইনের সারমর্ম:
  ক্যাশিং দিয়ে বারবার-পড়ার বোঝা কমাও
    (Redis দরজায় পূর্ণ পাঠ);
  সার্চ আলাদা শিল্প — রেলেভ্যান্স/টাইপো/
    ফিল্টার সাধারণ DB-র ধৈর্যের বাইরে
    (Elasticsearch দরজায়);
  অ্যানালিটিক্স-কোয়েরি লাইভ ট্রাফিকের
    পাশে বসিয়ে দুই-দুই জাহাজ ডোবাবে না —
    আলাদা ব্যবস্থা;
  আর নিখুঁত-প্রথম-দিনের পিছনে ছুটো না —
    শুরু সহজ, বিবর্তনে বাড়াও; সিনিয়র
    সিস্টেম ডিজাইন করে ব্যবহার দেখে।</div>
<div class="callout tip"><span class="co-icon">⚖️</span><div><strong>আইনের সার:</strong> টুল-তালিকা মুখস্থ করা নয়, <strong>প্রশ্নের ক্রম</strong> শেখা — কোয়েরি → consistency-নিয়ম → ইঞ্জিন-ভাগ → বিবর্তন। এই ক্রমে গেলে "কোন ডেটাবেস?" প্রশ্নের উত্তর নিজে থেকেই এসে দাঁড়ায়।</div></div>
<div class="secret-box">⚖️ আগে প্রশ্ন, পরে ভাণ্ডার — অ্যাক্সেস-প্যাটার্ন লেখো, প্রতি-অপারেশন consistency ভাবো, কাজে কাজে ইঞ্জিন ভাগ করো, শুরু সহজ রেখে বিবর্তনে বাড়াও।</div>`,
  senior: {
    title: "৭ ডেটাবেস-আইন — দ্রুত গাইড",
    body: "<p><strong>আইন:</strong> ১) অ্যাক্সেস-প্যাটার্ন আগে (reads/writes লিখো, ডেটা নয়) ২) consistency প্রতি-অপারেশন (inventory/payment শুদ্ধ-আবশ্যক; recommendation stale-tolerant) ৩) কাজভেদে ইঞ্জিন (document/cache/search/analytics) ৪) বারবার-পড়া ক্যাশে ৫) রেলেভ্যান্স-সার্চ আলাদা ইঞ্জিনে ৬) অ্যানালিটিক্স লাইভ-ট্রাফিক থেকে দূরে ৭) বিবর্তন > নিখুঁত-প্রথম-দিন। <strong>মন্ত্র:</strong> ডেটাবেস-বাছাই = ডেটা-আর্কিটেকচার-ডিজাইনের শেষ ধাপ, প্রথম নয়।</p>"
  }
});

doors.push({
  num: 2,
  icon: "🍃",
  color: "#fbbf24",
  name: "ডকুমেন্টের জগৎ",
  subtitle: "Learn MongoDB in 4 Minutes",
  tech: "Document model, BSON, collections vs tables, embedding vs referencing",
  spirit: "তাসাররুফ — সম্পর্ক ভেতরে রাখা না বাইরে রাখা",
  secret: "MongoDB-তে সারি নয় ডকুমেন্ট — JSON-এর মতো নমনীয়, ভেতরে nested object-array; আর সম্পর্ক মডেলের দুই পথ: embedding (সব একসাথে, এক পড়ায়) বনাম referencing (আলাদা রেখে দুইবার খোঁজা)।",
  recall: {
    q: "SQL-এর table/row-এর বদলে MongoDB-তে কী? Embedding আর referencing কখন কোনটা?",
    qen: "MongoDB's equivalents of table/row? When to embed vs reference?",
    a: "Table → collection, row → document, column-structure → নমনীয় schema (এক collection-এ ভিন্ন field চলে)। ডকুমেন্ট BSON-এ (binary JSON) থাকে, nested object/array একসাথে রাখে। Embedding: একসাথে পড়া হয়, এক-দরকারি ডেটা (order-এ shipping address) — এক কোয়েরিতে সব; বেশি ফুলে গেলে বা আলাদাভাবে বাড়লে সমস্যা। Referencing: ডেটা আলাদা collection-এ (customer আলাদা), দুই ধাপে খোঁজা — শেয়ার্ড/স্বাধীন-বর্ধনশীল ডেটায়।",
    aen: "Table→collection, row→document, flexible schema; BSON storage with nested structures. Embed for read-together, bounded data; reference for shared or independently growing data."
  },
  story: `<p class="scene-setting">Relational DB যুগ যুগ ধরে রাজত্ব করেছে — তাহলে MongoDB কেন? শিক্ষকের উত্তর: পার্থক্য মডেলিংয়ে। SQL-এ প্রতিটা টেবিলের কড়া schema, সারি সেই ছাঁচে গড়া; MongoDB-তে collection-এর ডকুমেন্টে ফিল্ড নিয়ম নমনীয় — আর এক ডকুমেন্টেই nested জগৎ বসে যায়।</p>
<p class="scene-setting en">Why MongoDB when relational databases ruled for decades? The difference is modeling: strict schemas versus flexible documents that can hold nested worlds.</p>
<div class="code-block">MongoDB-র ভাণ্ডার-বিন্যাস:

SQL                 MONGODB
database     →      database
table        →      collection
row          →      document
column-ছাঁচ  →      নমনীয় (এক collection-এ
                     ভিন্ন ফিল্ড-চলে)

ডকুমেন্ট = ডেটার মৌলিক একক
  name, email, phone-numbers[], preferences,
  address — সব একসাথে এক ডকুমেন্টে;
  JSON-এর মতোই পরিচিত গঠন।
  ভেতরে সংরক্ষণ: BSON — binary JSON,
    JSON-মডেল + অতিরিক্ত ডেটা-টাইপ।

সম্পর্কের দুই পথ (e-commerce: customer→orders):
১. EMBEDDING — ভেতরে গেঁথে দাও
     order-ডকুমেন্টে সেই-মুহূর্তের shipping
     address বসিয়ে দাও; এক পড়ায় সব
     হাজির — যা একসাথে চলে, একসাথে রাখো।
     সীমা: ডেটা ফুলে অসীম হলে বা আলাদা
     ডিমান্ডে বাড়লে ভুগবে।
২. REFERENCING — আলাদায় রাখো, ঠিকানা দাও
     customer আলাদা collection, order-এ
     customer-ID; দুই ধাপে জোড়া।
     উপযোগ: শেয়ার্ড বা স্বাধীন-বর্ধনশীল
     ডেটা — যা সবার সাথে সম্পর্কিত, তাকে
     হাজারবার কপি করো না।</div>
<div class="callout tip"><span class="co-icon">🍃</span><div><strong>দরজার সংযোগ:</strong> দরজা ১-এর আইন ১ এখানে কাজে নামে — "অ্যাপ ডেটা দিয়ে কী করবে?" একসাথে-পড়া হলে embed, আলাদা-বাড়ালে reference; MongoDB নেওয়া-না-নেওয়া তার পরের প্রশ্ন।</div></div>
<div class="secret-box">🍃 সারি নয়, ডকুমেন্ট — নমনীয় গঠন, BSON-ভাণ্ডার; একসাথে-পড়া ভেতরে (embed), স্বাধীন-বর্ধনশীল বাইরে (reference)।</div>`,
  senior: {
    title: "MongoDB — দ্রুত গাইড",
    body: "<p><strong>মডেল:</strong> database→collection→document (নমনীয় schema), BSON (binary JSON, অতিরিক্ত টাইপ), nested object/array এক ডকুমেন্টে। <strong>সম্পর্ক:</strong> embedding = একসাথে-পড়া/সীমিত-আকার (এক কোয়েরিতে সব); referencing = শেয়ার্ড/স্বাধীন-বৃদ্ধি (দুই-ধাপ জোড়া)। <strong>সিদ্ধান্ত-ছাঁকনি:</strong> অ্যাক্সেস-প্যাটার্ন (দরজা ১) → তারপর embed/reference।</p>"
  }
});

doors.push({
  num: 3,
  icon: "⚡",
  color: "#fbbf24",
  name: "বিদ্যুৎ-স্মৃতি",
  subtitle: "Learn Redis in 3 Minutes",
  tech: "In-memory store, caching layer, sessions, rate limiting, leaderboards/counters, data structures",
  spirit: "ইনফাক — দ্রুত পৌঁছানোর বিনিয়োগ",
  secret: "Redis মানে RAM-এ ভাণ্ডার — প্রথম পাঠে কপি রেখে দিলে পরের পাঠ মুহূর্তে; শুধু ক্যাশ নয় — সেশন, রেট-লিমিট, লিডারবোর্ড, কাউন্টারের রাজধানী।",
  recall: {
    q: "Redis কীভাবে ক্যাশ হিসেবে কাজ করে? ক্যাশ ছাড়া আর কোন কোন কাজে রাজা?",
    qen: "How does Redis cache, and what else is it king of?",
    a: "প্রথমবার ডেটা চাইলে DB থেকে এনে Redis-এ (RAM) কপি রাখা হয়; পরেরবার একই চাহিদায় DB-তে না গিয়ে Redis থেকে তাৎক্ষণিক — DB-চাপ কমে, RAM ডিস্কের চেয়ে অনেক দ্রুত। এছাড়া: সেশন-স্টোরেজ (লগইন-অবস্থা দ্রুত যাচাই), API রেট-লিমিটিং (১০০ req/min গোনা), গেমিং লিডারবোর্ড (রিয়েল-টাইম র‍্যাংকিং), কাউন্টার (লাইক/ভিউ/ফলোয়ার), রিয়েল-টাইম নোটিফিকেশন/চ্যাট। বিশেষত্ব: সব-কিছু টেক্সট নয় — list/set/zset-জাতীয় গঠন বোঝে।",
    aen: "First read copies data from the DB into RAM; later reads come instantly from Redis, cutting DB load. Beyond caching: sessions, rate limiting, leaderboards, counters, real-time features — with native data structures, not just text."
  },
  story: `<p class="scene-setting">ভাবো: তোমার সাইটে আজ হঠাৎ ১০ লাখ ভিজিটর — আর বেশিরভাগ চাইছে একই জিনিস: প্রোডাক্ট-পেজ, প্রোফাইল, ট্রেন্ডিং পোস্ট। Redis না থাকলে প্রতিটা রিকোয়েস্ট সোজা DB-তে — একই কোয়েরি বারবার, অ্যাপ ধীর, সবাই ক্ষুব্ধ। Redis এই গল্পের নায়ক।</p>
<p class="scene-setting en">A million visitors suddenly arrive, most asking for the same product pages and profiles. Without Redis every request hammers the database with repeated queries. Redis is the hero of this story.</p>
<div class="code-block">REDIS = IN-MEMORY ডেটা-স্টোর

ক্যাশ হিসেবে ফ্লো:
  প্রথম ইউজার: অ্যাপ → DB → ডেটা,
    সাথে সাথে Redis-এ কপি
  পরের ইউজার: অ্যাপ → Redis → তাৎক্ষণিক!
    (RAM = ডিস্কের চেয়ে অনেক দ্রুত)
  ফল: DB-র বারবার-কাজ শূন্যের কাছে,
    অ্যাপ ঝড়ের গতিতে।

ক্যাশের বাইরের রাজত্ব:
  SESSION STORAGE — লগইন-অবস্থা Redis-এ;
    প্রতি রিকোয়েস্টে DB-যাচাই নয়
  RATE LIMITING — API 100 req/min?
    Redis গুনে রাখে, সীমা ছুঁলে ব্লক
  LEADERBOARD — লাখো প্লেয়ারের র‍্যাংক
    রিয়েল-টাইম আপডেট, তাৎক্ষণিক টপ-লিস্ট
  COUNTER — লাইক/ভিউ/ফলোয়ার: প্রতি ক্লিকে
    দ্রুত বৃদ্ধি, DB-চাপ নেই
  REAL-TIME — নোটিফিকেশন, চ্যাট,
    লাইভ-অ্যাক্টিভিটি ফিড

গোপন শক্তি: সব সাদা-টেক্সট নয় —
  ডেটা-গঠন বোঝে (list, set, sorted-set...);
  তাই লিডারবোর্ডের মতো সাজানো-কাজ
  নিজেই করে ফেলে।</div>
<div class="callout tip"><span class="co-icon">⚡</span><div><strong>সিরিজের সংযোগ:</strong> System Design বইয়ের (দরজা ২) cache-ইটের পূর্ণ পরিচয় এখানে, আর WhatsApp-কেসের connection-manager-ও ছিল Redis-জাতীয়। <strong>এক ইট, অনেক দালানে জোড়া — সেটাই ভালো বিল্ডিং-ব্লকের পরিচয়।</strong></div></div>
<div class="secret-box">⚡ RAM-এ ভাণ্ডার — প্রথম পাঠে কপি, পরের পাঠ মুহূর্তে; ক্যাশ তার এক কাজ মাত্র — সেশন, রেট-লিমিট, র‍্যাংক, কাউন্টারে সে রাজা।</div>`,
  senior: {
    title: "Redis — দ্রুত গাইড",
    body: "<p><strong>প্রকৃতি:</strong> in-memory স্টোর (RAM-গতি), ক্যাশ-লেয়ার: DB→Redis-কপি→পরবর্তী-পাঠ-তাৎক্ষণিক। <strong>ব্যবহার:</strong> সেশন, রেট-লিমিটিং (গণনা+ব্লক), লিডারবোর্ড (sorted-set রিয়েল-টাইম), কাউন্টার (লাইক/ভিউ), রিয়েল-টাইম ফিচার। <strong>শক্তি:</strong> টেক্সট-নয়, ডেটা-স্ট্রাকচার-সচেতন (list/set/zset) — সাজানো-কাজ নিজে সামলায়। <strong>মনে রাখো:</strong> আইন ৪ (বারবার-পড়া ক্যাশে) এর বাস্তব রূপ।</p>"
  }
});

doors.push({
  num: 4,
  icon: "🆔",
  color: "#fbbf24",
  name: "ID-র রহস্য",
  subtitle: "Auto Increment vs UUID — Finally Makes Sense",
  tech: "Auto increment (small, sequential, needs central coordination) vs UUID (128-bit, independent generation, larger indexes)",
  spirit: "তাওয়াক্কুল — কেন্দ্রের ভরসা না নিজের স্বাধীনতা",
  secret: "এক DB হলে auto increment যথেষ্ট; দুই স্বাধীন সিস্টেম একসাথে ID বানালে সংঘর্ষ — তখনই UUID: ১২৮-বিট, কেন্দ্র-ছাড়া, কারো সাথে মেলে না; দাম বড় ইনডেক্স আর মানুষের পড়ার অসুবিধা।",
  recall: {
    q: "কোন পরিস্থিতিতে auto increment ভেঙে পড়ে, আর UUID সেই ফাঁক কীভাবে পূরণ করে? দাম কী?",
    qen: "When does auto increment break, how does UUID fill the gap, and at what cost?",
    a: "এক DB, এক অ্যাপ — auto increment নিখুঁত: DB নিজে পরের নম্বর দেয়, ছোট (int ৪ বাইট, UUID ১৬), মানুষ পড়তে পারে — support বললো, order 18427 টাইপ করে পাওয়া যায়, ফোনে পড়া যায়। ভাঙে যখন দুই স্বাধীন DB (US+Europe) আলাদাভাবে ID বানায় — দুজনই order 101 বানালো, সংঘর্ষ; মেটাতে রেঞ্জ-ভাগ/কেন্দ্রীয়-সার্ভিস/সিকোয়েন্স-সমন্বয় লাগে — সরলতা শেষ। UUID: ১২৮-বিট, যে-কোনো সিস্টেম স্বাধীনভাবে বানায়, সংঘর্ষ-প্রায়-অসম্ভব; দাম — ১৬ বাইট, বড় ইনডেক্স/স্টোরেজ-চাপ, ফোনে পড়া কঠিন।",
    aen: "One database: auto increment wins — small, readable, DB-assigned. Two independent databases both mint order 101: collision, forcing coordination. UUID: 128-bit, generated anywhere, collision-free — at the cost of 16 bytes, bigger indexes, unreadability."
  },
  story: `<p class="scene-setting">"UUID নাও, scalable সিস্টেমে ভালো" — সবাই বলে, কেউ বলে না কেন। শিক্ষক গল্প দিয়ে পরিষ্কার করেন: ছোট এক orders টেবিল দিয়ে শুরু, তারপর কোম্পানি বড় হয়, দুই মহাদেশে দুই DB — আর সেখানেই সরল সংখ্যাটা তার সীমা দেখায়।</p>
<p class="scene-setting en">"Use UUIDs, they're better for scale" — everyone says it, nobody says why. The teacher tells the story: one orders table, then two databases on two continents, where the simple number meets its limit.</p>
<div class="code-block">পর্ব ১ — AUTO INCREMENT: সরলতার রাজত্ব
  প্রতিটা নতুন order-এ DB দেয় পরের নম্বর:
    1, 2, 3, 4... অ্যাপ ভাবেই না।
  জিত: ছোট (int 4B / bigint 8B vs UUID 16B),
    ছোট ID → ছোট ইনডেক্স → কম স্টোরেজ-
    মেমরি চাপ; আর মানুষ-পড়া-যোগ্য —
    "order 18427 দেখো" বলা যায়, ফোনে
    পড়া যায়।

পর্ব ২ — বিপদ: দুই স্বাধীন রাজত্ব
  US-DB order 101 বানালো; Europe-DB-ও
  order 101 বানালো — দুই ভিন্ন order,
    একই ID! মার্জ-মুহূর্তে বিপর্যয়।
  উপায়গুলো (সবই কাজ করে, সবই জটিল):
    রেঞ্জ-ভাগ (US: ১-১০লাখ, EU: পরেরটা)
    কেন্দ্রীয় ID-ডিস্ট্রিবিউটর সার্ভিস
    সিকোয়েন্স-সমন্বয়
  পাঠ: একাধিক সিস্টেম স্বাধীনভাবে ID
    বানাতে শুরু করলেই সরল সংখ্যার
    সমন্বয়-দরকার জন্মায়।

পর্ব ৩ — UUID: স্বাধীনতার চাবি, দামসহ
  ১২৮-বিট আইডেন্টিফায়ার; যে-কোনো সিস্টেম
    যে-কোনো সময় নিজেই বানাতে পারে —
    কেন্দ্র নেই, সমন্বয় নেই, সংঘর্ষ
    ব্যবহারিকভাবে অসম্ভব।
  দাম: ১৬ বাইট → বড় ইনডেক্স, বেশি
    স্টোরেজ-মেমরি; র‍্যান্ডম-গোছ ইনডেক্স-
    লোকালিটিও নষ্ট করে; আর মানুষ?
    ফোনে পড়া অসম্ভব।</div>
<div class="callout warn"><span class="co-icon">🆔</span><div><strong>সিদ্ধান্তের ছাঁকনি:</strong> এক-DB-এক-অ্যাপ → auto increment যথেষ্ট, UUID বাড়াবাড়ি। একাধিক স্বাধীন-জেনারেটর (ডিস্ট্রিবিউটেড সিস্টেম, অফলাইন-ফার্স্ট, মাল্টি-রিজিয়ন) → UUID-র স্বাধীনতাই সাচ্চা স্কেল। মাঝপথের সমাধানও আছে (UUIDv7-জাতীয় সময়-সাজানো ID) — ছোট রহস্য, বড় নয়: <strong>প্রশ্ন "কে ID বানায়?" — উত্তরই পথ দেখায়।</strong></div></div>
<div class="secret-box">🆔 এক কেন্দ্রে সংখ্যা-সারি, বহু কেন্দ্রে স্ব-পরিচয় — auto increment সরলতা দেয়, UUID স্বাধীনতা; দাম দুটোই জানো।</div>`,
  senior: {
    title: "Auto Increment vs UUID — দ্রুত গাইড",
    body: "<p><strong>Auto increment:</strong> DB-অ্যাসাইন্ড, ছোট (4-8B), মানুষ-পাঠযোগ্য, ছোট-ইনডেক্স; এক-DB তে আদর্শ। <strong>ভাঁজ:</strong> বহু স্বাধীন জেনারেটরে সংঘর্ষ → রেঞ্জ/কেন্দ্রীয়-সার্ভিস/সমন্বয়-জটিলতা। <strong>UUID:</strong> ১২৮-বিট, কেন্দ্র-নিরপেক্ষ, সংঘর্ষ-মুক্ত; দাম ১৬B+বড়-ইনডেক্স+অপাঠ্য। <strong>ছাঁকনি:</strong> প্রশ্ন একটাই — কে ID বানাচ্ছে? একজন হলে সংখ্যা, অনেকে হলে UUID (বা সময়-সাজানো UUIDv7)।</p>"
  }
});
