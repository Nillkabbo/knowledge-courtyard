// doors-5-7.js — Cloud X Berry Series Book 6: The Data Vault
// Doors 5-7 (continued from doors-1-4.js — no const redeclaration)

doors.push({
  num: 5,
  icon: "🧭",
  color: "#fbbf24",
  name: "অর্থ-খোঁজা ভাণ্ডার",
  subtitle: "Vector Database Will Finally Make Sense",
  tech: "Embeddings, semantic vs keyword search, similarity search, chunking, RAG flow",
  spirit: "মাআরিফা — শব্দ নয়, অর্থের সাদৃশ্য",
  secret: "Keyword search খোঁজে শব্দ, vector DB খোঁজে অর্থ — embedding model ডেটাকে সংখ্যার ভেক্টরে বদলায়, কাছাকাছি অর্থ = কাছাকাছি ভেক্টর; LLM লেখে, embedding model ভেক্টর বানায়, vector DB সেই ভেক্টর রেখে সাদৃশ্য-খোঁজা চালায়।",
  recall: {
    q: "Keyword search কোথায় ব্যর্থ হয় আর vector DB কীভাবে সমাধান করে? সার্চের আগে ডকুমেন্টের কী হয়?",
    qen: "Where does keyword search fail, how do vector DBs fix it, and what happens to documents before search?",
    a: "ব্যর্থতা: ইউজার জিজ্ঞেস করলো password reset, ডকুমে লেখা change account credentials — শব্দ মিললো না, অথচ অর্থ এক। সমাধান: embedding model টেক্সটকে ভেক্টরে (সংখ্যার তালিকা) বদলায় — কাছাকাছি অর্থ কাছাকাছি ভেক্টর দেয়; vector DB সেই ভেক্টর জমা রেখে similarity search চালায়। আগে-প্রস্তুতি: বড় ডকুমেন্ট ছোট chunk-এ ভাগ → প্রতিটা chunk-এর embedding → ভাণ্ডারে; সার্চ-সময়ে প্রশ্নের embedding বানিয়ে নিকটতম chunk-গুলো খোঁজা।",
    aen: "Keywords fail when words differ but meaning matches. Embedding models turn text into vectors where similar meanings sit close together; vector DBs store them and run similarity search. Documents are chunked, each chunk embedded, stored; queries are embedded and matched to nearest chunks."
  },
  story: `<p class="scene-setting">AI-যুগের সবচেয়ে ঘন ঘন শোনা তিন শব্দ — embeddings, RAG, vector database। শিক্ষক ধরিয়ে দেন সবচেয়ে সহজ উদাহরণে: তোমার কোম্পানির ডকুমেন্টেশনের উপর একটা AI chatbot — ইউজার জিজ্ঞেস করলো, password রিসেট করবো কীভাবে?</p>
<p class="scene-setting en">The three buzzwords of the AI era — embeddings, RAG, vector databases — explained through the simplest example: an AI chatbot over your company documentation.</p>
<div class="code-block">সমস্যা — শব্দ মিললো, অর্থ হারালো:
  প্রশ্ন: password reset কীভাবে?
  ডকুমে: steps to change your account credentials
  → keyword search খোঁজে reset/password শব্দ;
    ডকুমে সেই শব্দই নেই — ফল শূন্য,
    অথচ উত্তর ওখানেই ছিল।

EMBEDDING — অর্থের গণিত:
  embedding model (একটা বিশেষ AI মডেল) টেক্সট/
  ছবি/অডিওকে বদলায় সংখ্যার তালিকায় —
  vector। গণিত জানা লাগবে না, মনে রাখো একটাই
  নিয়ম: কাছাকাছি অর্থ → কাছাকাছি ভেক্টর।
  দুই বাক্য শব্দে আলাদা, অর্থে এক — তাদের
  ভেক্টর পাশাপাশি বসবে।

দায়-ভাগ (গুলিয়ো না):
  LLM → লেখে টেক্সট
  EMBEDDING MODEL → বানায় ভেক্টর
  VECTOR DB → রাখে ভেক্টর, চালায়
    similarity search

প্রস্তুতি-ধাপ (সার্চের অনেক আগে):
  হাজারো ডকুমেন্ট → ছোট CHUNK-এ ভাগ
    (পুরো ডকুমেন্টের এক embedding অর্থ
     হারায়; ছোট টুকরো অর্থ ধরে)
  → প্রতি chunk-এর embedding
  → ভাণ্ডারে সঞ্চয়

সার্চ-সময়:
  প্রশ্নের embedding → নিকটতম chunk-গুলো
  → (RAG-পথে) LLM-এর প্রসঙ্গ হিসেবে দেওয়া
  → উত্তর ডকুমেন্টের মাটিতে পা রেখে</div>
<div class="diagram">
<div class="diag-title">অর্থ-মানচিত্র — কাছাকাছি অর্থ, কাছাকাছি ভেক্টর</div>
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-hot" x="30" y="20" width="230" height="55" rx="10"/>
  <text class="lbl-hot" x="145" y="42" text-anchor="middle">how do I reset my password?</text>
  <text class="lbl-sm" x="145" y="62" text-anchor="middle">প্রশ্ন-ভেক্টর</text>
  <rect class="cell-cyan" x="30" y="90" width="230" height="55" rx="10"/>
  <text class="lbl-cyan" x="145" y="112" text-anchor="middle">change your account credentials</text>
  <text class="lbl-sm" x="145" y="132" text-anchor="middle">ডকুমেন্ট-ভেক্টর</text>
  <line class="edge" x1="145" y1="75" x2="145" y2="88"/>
  <text class="lbl-sm" x="145" y="84" text-anchor="middle">দূরত্ব ≈ শূন্য</text>
  <rect class="cell" x="320" y="50" width="210" height="55" rx="10"/>
  <text class="lbl-sm" x="425" y="72" text-anchor="middle">keyword search: শব্দ মিলে না → ফল নেই</text>
  <text class="lbl-sm" x="425" y="92" text-anchor="middle">vector search: অর্থ মিলে → সঠিক উত্তর</text>
</svg>
<div class="diag-cap">শব্দ নয়, অর্থের দূরত্ব — সেটাই vector সার্চের একমাত্র মুদ্রা।</div>
</div>
<div class="callout tip"><span class="co-icon">🧭</span><div><strong>সিরিস-সংযোগ:</strong> AI Agents Atlas-এর RAG-দরজা (D6) মনে আছে? এটা সেই পাঠের ভাণ্ডার-পাশ — VectorDB+RAG জুটির ডেটাবেস-অর্ধেক এখানে পূর্ণ হলো; আইন ৩ (কাজে কাজে ইঞ্জিন)-এর শেষ প্রধান উদাহরণও।</div></div>
<div class="secret-box">🧭 শব্দ মেলে না, অর্থ মেলে — embedding অর্থকে সংখ্যায় বসায়, vector DB কাছের অর্থ খুঁজে দেয়; LLM লেখে, embedder মাপে, ভাণ্ডার মনে রাখে।</div>`,
  senior: {
    title: "Vector DB — দ্রুত গাইড",
    body: "<p><strong>সমস্যা:</strong> keyword search শব্দ-মিলায়, অর্থ হারায়। <strong>সমাধান:</strong> embedding model → টেক্সট/ছবি/অডিও → ভেক্টর; কাছাকাছি অর্থ = কাছাকাছি ভেক্টর; vector DB ভেক্টর-সঞ্চয়+similarity search। <strong>পাইপলাইন:</strong> chunking → প্রতি-chunk embedding → সঞ্চয়; কোয়েরি-embedding → নিকটতম chunk → RAG-এ LLM-প্রসঙ্গ। <strong>দায়-ভাগ:</strong> LLM=লেখা, embedder=ভেক্টর, vectorDB=সাদৃশ্য-খোঁজা।</p>"
  }
});

doors.push({
  num: 6,
  icon: "🔎",
  color: "#fbbf24",
  name: "সার্চ-ইঞ্জিনের রাজধানী",
  subtitle: "Elasticsearch Will Finally Make Sense",
  tech: "Search index (not scan), relevance ranking, typo tolerance, autocomplete, filter+sort combos",
  spirit: "তাহকিক — খোঁজার আগে প্রস্তুতির বুদ্ধি",
  secret: "সাধারণ DB সার্চ-সময়ে লাইনে-লাইনে খোঁজে; Elasticsearch আগেই সূচি বানায় — বইয়ের index-এর মতো; তাই মিলিয়ন ডকুমেন্টে টাইপো-সহিষ্ণু, রেলেভ্যান্স-সাজানো, ফিল্টার-বাছাই ঝড়ের গতিতে।",
  recall: {
    q: "Elasticsearch-এর index বইয়ের index-এর সাথে মেলে কীভাবে? সাধারণ DB-সার্চের চেয়ে কী পাওয়া যায়?",
    qen: "How is an Elasticsearch index like a book index, and what do you gain over normal DB search?",
    a: "বইয়ে শব্দ খুঁজতে প্রতিটা পাতা উল্টানো ধীর — index পাতায় পাতায় শব্দের ঠিকানা আগেই সাজানো; Elasticsearch একই বুদ্ধি: ডেটা ঢোকার সময়েই search-oriented index বানায়, সার্চ-সময়ে স্ক্যান নয় সূচি-খোঁজা। লাভ: relevance ranking (কোন ফল আগে), typo tolerance (বানান-ভুলেও ফল), autocomplete (টাইপ-করা অবস্থায় প্রস্তাব), আর সার্চ+ফিল্টার+সর্ট মিলিয়ে চালানো (Sony headphones under 200)।",
    aen: "A book index lists where each word lives so you never scan pages; Elasticsearch builds search-oriented indexes at ingest time, so search reads the index, not the data. Gains: relevance ranking, typo tolerance, autocomplete, and search+filter+sort combos."
  },
  story: `<p class="scene-setting">লাখো প্রোডাক্টের দোকানে ইউজার টাইপ করলো wireless headphones — এবং আসল জগৎ সঙ্গে সঙ্গে প্রশ্ন ছুঁড়ে দেয়: বানান ভুল হলে? প্রতিশব্দ লিখলো (Bluetooth headset)? হাজার ম্যাচ পেলে কোনটা আগে? ব্র্যান্ড-দাম-ফিল্টার চাইলো? — সাধারণ DB-কোয়েরি এখানে ধীর ও বোবা; Elasticsearch এই জগতের রাজধানী।</p>
<p class="scene-setting en">A user types wireless headphones into a store of millions — and the real world immediately demands typo tolerance, synonyms, ranking, and filters. Normal queries are slow and mute here; Elasticsearch is the capital of this world.</p>
<div class="code-block">মূল বুদ্ধি — INDEX, SCAN নয়:
  বইয়ে শব্দ খোঁজা: পাতা-১ থেকে শেষ পর্যন্ত
    উল্টানো = ধীর; বইয়ের INDEX পাতায় আগেই
    শব্দ→পৃষ্ঠা সাজানো = মুহূর্ত।
  Elasticsearch-এর কাজকাল একই:
    ডেটা ঢোকার সময়েই search-oriented index
    প্রস্তুত করে রাখে; সার্চ-সময়ে কোটি
    ডকুমেন্ট স্ক্যান নয় — সূচি খোঁজে।
  এটাই distributed search & analytics
    engine-এর অর্থ: ইনডেক্স করো, তারপর
    দ্রুত খোঁজো ও বিশ্লেষণ করো।

এই প্রস্তুতি কী কী খোলে:
  RELEVANCE — wireless headphones-এ
    Apple AirPods, Sony headphones, Samsung
    Buds — কে আগে? প্রাসঙ্গিকতার ক্রম
  TYPO TOLERANCE — heaphones লিখলেও ফল
  AUTOCOMPLETE — টাইপ-করা অবস্থায়ই
    প্রস্তাব ভেসে ওঠে
  FILTER + SORT — Sony + under-200 বাছুন,
    দামে সাজান — সার্চের সাথেই</div>
<div class="callout tip"><span class="co-icon">🔎</span><div><strong>আইন-সংযোগ:</strong> দরজা ১-এর আইন ৫ — রেলেভ্যান্স-সার্চ সাধারণ DB-র ধৈর্যের বাইরে; এই দরজা সেই আইনের পূর্ণ পাঠ। আর লক্ষ করো — index-বানানোর বুদ্ধিটা বইয়ের index থেকে ধার করা: <strong>প্রস্তুতি আগে, প্রশ্ন পরে — দ্রুততার চিরায়ত সূত্র।</strong></div></div>
<div class="secret-box">🔎 সার্চের সময় খোঁজা নয়, আগে সাজানো — index বানাও, তারপর টাইপো-রেলেভ্যান্স-ফিল্টার সবই ঝড়ের গতিতে।</div>`,
  senior: {
    title: "Elasticsearch — দ্রুত গাইড",
    body: "<p><strong>মূল:</strong> ingest-সময়ে search-oriented index (বইয়ের index-অনুরূপ) → সার্চ-সময়ে স্ক্যান-নয়। <strong>ক্ষমতা:</strong> relevance ranking, typo tolerance, autocomplete, filter+sort-সংযোগ; distributed search & analytics। <strong>কখন:</strong> টেক্সট-সার্চ যখন মূল পণ্য (দোকান-সার্চ, লগ-সার্চ, বিশ্লেষণ) — আইন ৫-এর বাস্তব রূপ।</p>"
  }
});

doors.push({
  num: 7,
  icon: "📜",
  color: "#fde68a",
  name: "SQL-এর গোপন অস্ত্র",
  subtitle: "10 SQL Features That Can Replace 90% of Your Backend Code",
  tech: "Window functions, EXISTS, CTEs, and seven more backend-replacing features",
  spirit: "ইহসান — হাতিয়ারের পূর্ণ সত্যতায় কাজ",
  secret: "ব্যাকএন্ডে হাজার লাইন লেখার আগে SQL-কে জিজ্ঞেস করো — window function থেকে CTE, বিশেষ করে অ্যাগ্রিগেশন-তুলনা-অস্তিত্বের কাজ সে-ই করে ফেলে; ডেটার কাজ ডেটার ঘরে।",
  recall: {
    q: "Window function আর GROUP BY-র মূল পার্থক্য কী? EXISTS কোন ধরনের প্রশ্নের উত্তর?",
    qen: "Window function vs GROUP BY — the core difference? What question does EXISTS answer?",
    a: "GROUP BY সারিগুলোকে গুটিয়ে গ্রুপ-প্রতি এক সারি ফেরত দেয়; window function (PARTITION BY + ORDER BY) সারি গুটায় না — প্রতিটা সারি বর্তমানে থেকে যায়, তার পাশে চলমান-হিসাব (running total), র‍্যাংক (ROW_NUMBER/RANK), আগে-পরের সারির তুলনা (LAG/LEAD) বসে। EXISTS উত্তর দেয় অস্তিত্ব-প্রশ্নের — অন্তত একটা ম্যাচ আছে কি না (একটাও ticket দিয়েছে এমন customers), ডিটেইল নয় হ্যাঁ/না, মিললেই থেমে যায় — দ্রুত।",
    aen: "GROUP BY collapses rows into one per group; window functions keep every row and add running totals, rankings, and previous/next comparisons beside them. EXISTS answers existence questions — at least one match? — stopping at the first hit."
  },
  story: `<p class="scene-setting">ফিনালে দরজায় শিক্ষকের চ্যালেঞ্জ: ব্যাকএন্ড-কোডের ৯০% যে কাজ — হিসাব, তুলনা, অস্তিত্ব-পরীক্ষা, রূপান্তর — তার বড় অংশ SQL নিজেই করে দিতে পারে। দশটা ফিচারের প্রথম তিনটা শিক্ষক বিস্তারিত খোলেন; বাকি সাতটার সারমর্ম এক করে দেন — মূল পাঠ একটাই: ডেটার কাজ ডেটার ঘরে ফেরানো।</p>
<p class="scene-setting en">The final door's challenge: much of the 90% of backend code — calculations, comparisons, existence checks — SQL can do itself. Three features opened in detail, seven summarized, one lesson: let the data's work happen where the data lives.</p>
<div class="code-block">১. WINDOW FUNCTIONS — গুটানো নয়, পাশে হিসাব
  প্রশ্ন: প্রতিটা sale দেখাও, সাথে ওই প্রোডাক্টের
    চলমান মোট (running total)।
  GROUP BY পারবে না — সারি গুটিয়ে ফেলে;
  window function:
    PARTITION BY product_id — প্রতিটা প্রোডাক্টের
      আলাদা হিসাব-জানালা
    ORDER BY sale_date — জানালার ভেতরে ক্রম
  ফল: প্রতিটা সারি বাঁচিয়ে, পাশে নতুন হিসাব।
  আরও: ROW_NUMBER/RANK (র‍্যাংকিং),
    LAG/LEAD (আগের-পরের সারির সাথে তুলনা)।

২. EXISTS — অস্তিত্বের হ্যাঁ/না
  প্রশ্ন: অন্তত একটা support ticket দিয়েছে
    এমন customers কারা?
  ticket-এর ডিটেইল লাগে না — লাগে শুধু
    আছে-কি-না; EXISTS প্রথম ম্যাচেই থামে,
    অপ্রয়োজনীয় ডেটা টানে না।
  একই প্যাটার্ন: অর্ডার-দিয়েছে যারা, পেমেন্ট-
    করেছে যারা, রিভিউ-আছে যে প্রোডাক্টে।

৩. CTE (Common Table Expression) — নাম-দেওয়া মাঝপথ
  উদাহরণ: customer stats হিসাব করে সেই
    stats দিয়েই গ্রুপ বাছাই।
  CTE মাঝের ফলাফলকে নাম দেয় — একবার
    লেখো, কোয়েরির ভেতরে যত খুশি ব্যবহার;
    বারবার-কপি সাব-কোয়েরির মৃত্যু।

বাকি ৭-এর সারমর্ম (একই দর্শনের আরও অস্ত্র):
  অ্যাগ্রিগেশন+শর্ত (মাস-প্রতি বিক্রির সারি),
    conditional logic (CASE-ভিত্তিক রূপান্তর),
    date/time ফাংশন, string রূপান্তর,
    NULL-নিয়ন্ত্রণ (COALESCE-জাতীয়),
    JSON-হ্যান্ডলিং,Upsert-প্যাটার্ন —
  সবার সুর: ভাষার কোডে যা ডেটার কাজ,
    ডেটার ভাষাতেই সে কাজ হোক।</div>
<div class="callout tip"><span class="co-icon">🏁</span><div><strong>সিরিজের সমাপ্তি-পাঠ:</strong> দরজা ১ শিখিয়েছিল প্রশ্নের ক্রম, মাঝের দরজাগুলো ইঞ্জিনের রাজ্য — আর শেষ দরজা বলে: যে কাজ SQL-ই পারে, সেটা ব্যাকএন্ড-কোডে বহন করে আনা নয়। <strong>৭ দরজা পেরিয়ে তুমি এখন ভাণ্ডার-রাজ্যের মানচিত্র হাতে পেয়েছো — কোন ইঞ্জিন কোন কাজে, আর কোন কাজ ইঞ্জিনের ভেতরেই থাকা চাই।</strong></div></div>
<div class="secret-box">📜 ডেটার কাজ ডেটার ঘরে — window হিসাব গুটায় না, EXISTS অস্তিত্বে থামে, CTE মাঝপথকে নাম দেয়; বাকি সব একই সুরের ভিন্ন স্বর।</div>`,
  senior: {
    title: "১০ SQL ফিচার — দ্রুত গাইড",
    body: "<p><strong>Window:</strong> PARTITION BY+ORDER BY — সারি-অটুট running total/RANK/LAG-LEAD। <strong>EXISTS:</strong> অস্তিত্ব-হ্যাঁ/না, প্রথম-ম্যাচে-থামা। <strong>CTE:</strong> মধ্যবর্তী-ফল নামাঙ্কিত, পুনর্ব্যবহারযোগ্য। <strong>+৭:</strong> conditional/date/string/NULL/JSON/Upsert-প্যাটার্ন। <strong>মূল দর্শন:</strong> ব্যাকএন্ড-কোডের ৯০%-জাতীয় কাজ SQL-এ ফেরাও — নেটওয়ার্ক-রাউন্ডট্রিপ কমে, কোড সরল হয়, ডেটা নিজের ঘরে কাজ করে।</p>"
  }
});
