// doors-1-5.js — Cloud X Berry Series Book 1: The Senior Developer's Code
// Source: "7 Coding Laws of Senior Developer" (Cloud X Berry)
const doors = [];

doors.push({
  num: 1,
  icon: "⚖️",
  color: "#f97316",
  name: "সাত কোডিং বিধি",
  subtitle: "7 Coding Laws of Senior Developer",
  tech: "Main path clarity, meaningful names, boundaries, small functions, error handling, comments, consistency",
  spirit: "ইহসান — কাজ এমনভাবে করা যেন দেখার মতো",
  secret: "সিনিয়র কোড জটিল করে না — মূল পথটা সহজ রাখে, নাম দেয় অর্থবহ, আর বাইরের জগৎকে সীমানার আড়ালে রাখে।",
  recall: {
    q: "নেস্টেড কন্ডিশনের সমস্যা কী এবং সিনিয়র ইঞ্জিনিয়ার কী করেন?",
    qen: "What is the problem with nested conditions and what do senior engineers do?",
    a: "প্রতিটি শর্ত আগেই যাচাই করে ভুল হলে সাথে সাথে return করেন (guard clauses) — মূল কাজটা তিন স্তর গভীরে চাপা পড়ে না।",
    aen: "They check each condition up front and return immediately when wrong (guard clauses) — the main operation stays visible."
  },
  story: `<p class="scene-setting">প্রথম চাকরি, প্রথম সপ্তাহ। পুরনো কোডবেসে তোমার প্রথম পুল-রিকোয়েস্ট — আর মিটিং-রুমে সবার সামনে রিভিউ চলছে: ইউজার আছে কিনা, অ্যাক্টিভ কিনা, পারমিশন আছে কিনা — শর্তের ভেতরে শর্ত, তার ভেতরে আরেক শর্ত, আসল কাজটা তিন স্তর নিচে চাপা। কোড চলে। কিন্তু রুমের নীরবতায় তোমার কান জ্বলছে। সিনিয়র ইঞ্জিনিয়ার <strong>কামরুল ভাই</strong> স্ক্রিন থেকে চোখ তুললেন — হাতে চায়ের দাগে ছাপানো পুরনো মগ, কীবোর্ডের অতি-ব্যবহৃত Ctrl-বোতামের অক্ষর আর নেই।</p>
<p class="scene-setting en">First job, first week, first pull request — reviewed in front of the room: user exists, is active, has permission — condition inside condition inside condition, the real work buried three levels deep. The code runs. In the silence your ears burn. Senior engineer Kamrul looks up — a mug stained tea-brown, the lettering worn off his over-used Ctrl key.</p>
<p class="scene-setting">সবাই ভাবছিল তোমার আজ বিচার হবে। কামরুল ভাই তোমার হাত ধরে নিয়ে গেলেন চা-টেবিলে — গরম চায়ের ভাপ মুখে লাগছে, পুরনো কার্পেটের ভ্যাপসা গন্ধ। তারপর হেসে বললেন: <em>আমার প্রথম পিআর-ও এমনই ছিল — রিভিউয়ার সাত পাতা কমেন্ট লিখেছিলেন, আমি রাতে ঘুমাইনি।</em> তোমার বুক থেকে একটা পাথর নেমে গেলো।</p>
<div class="dialogue">কামরুল ভাই: সিনিয়র হওয়ার প্রথম স্বীকৃতি এখানেই, ভাই: আরেকটা ভাষা শেখা নয় — কোডকে <strong>বোঝা সহজ, বদলানো সহজ, ভাঙা কঠিন</strong> করা। আমরা বেশি জটিল কোড লিখি না। অনেক সময় উল্টোটা করি।</div>
<div class="dialogue en">Kamrul: seniority's first admission is right here — not another language, but making code easier to understand, easier to change, harder to break. We don't write more complicated code. Often we do the opposite.</div>
<div class="code-block">BILL ১ — মূল পথ সহজ রাখো (Keep the main path easy to follow)

❌ পুরনো পথ — প্রতিটি শর্ত আগেরটার ভেতরে:
if user exists:
    if user is active:
        if has permission:
            perform action   ← ৩ স্তর নিচে

✅ সিনিয়র পথ — প্রতিটি শর্ত আগেই, ভুলে return:
if not user exists: return
if not active: return
if not permission: return
perform action          ← এখন দেখা যায়

ধারণা: নেস্টেড কোড একেবারে বাদ দিতে হবে না —
গুরুত্বপূর্ণ পথটা সহজে অনুসরণ করা যায়, সেটাই লক্ষ্য।</div>
<div class="code-block">BILL ২ — নাম দাও অর্থ দিয়ে (Name things by meaning)

❌ data, result, item — এগুলো কী? অন্য কোথাও তাকাতে হয়।
✅ pending_order, process_order() — নাম নিজেই বলে দেয়।

ভালো নাম = কোডবেস বোঝার ডিটেকটিভ-কাজ কমায়।
সবকিছুর দীর্ঘ নাম লাগে না — গুরুত্বপূর্ণ ধারণাগুলো স্পষ্ট হলেই হলো।</div>
<div class="code-block">BILL ৩ — বাইরের সিস্টেমকে সীমানার আড়ালে রাখো
(Keep external systems behind a boundary)

অ্যাপ পেমেন্ট প্রোভাইডার, ইমেইল সার্ভিস, থার্ড-পার্টি API নিয়ে কথা বলে।
সিনিয়র ইঞ্জিনিয়ার এই যোগাযোগগুলো একটা সীমানার (boundary) আড়ালে রাখেন —
বাকি কোড জানে না কার সাথে কথা হচ্ছে, শুধু জানে কী চাইছে।</div>
<div class="callout tip"><span class="co-icon">🎬</span><div><strong>কামরুল ভাইয়ের ভিজ্যুয়াল:</strong> প্রথম উদাহরণে শর্তগুলো একটার ভেতরে একটা গুঁজানো — আসল অপারেশন পর্দার তিন স্তর নিচে। দ্বিতীয় উদাহরণে প্রতিটি চেক উপরে উঠে আসে, ভুল হলে সাথে সাথে return — মূল কাজ সবার সামনে।</div></div>
<div class="verse">কামরুল ভাই চায়ের শেষ ঢোক শেষে বললেন: <em>আমার উস্তাদ বলতেন — কাজ সেটাই যেটা তোমার না-থাকলেও চলে।</em> রাসূল (সা.)-এর সুন্নাহতেও এই ইহসান: কাজ এমনভাবে করো যেন দেখছে — কারণ দেখছেন। কোডের ইহসান: পরের পাঠকের মুখ দেখে না লিখে, এমন লেখো যেন পরের পাঠক তোমাকে খুঁজতেই না পারে।</div>
<div class="secret-box">⚖️ মূল পথ সহজ রাখো — কারণ পড়ুয়া কোডই বদলানো যায়, ভাঙা কঠিন।</div>`,
  senior: {
    title: "সিনিয়র কোডিং আইন ১-৩ — দ্রুত গাইড",
    body: "<p>১. <strong>Guard clauses</strong> — শর্ত আগে যাচাই, ভুলে return; মূল কাজ উপরে থাকে। ২. <strong>অর্থবহ নাম</strong> — data/result নয়, pending_order/process_order। ৩. <strong>Boundary</strong> — পেমেন্ট/ইমেইল/থার্ড-পার্টি কল এক জায়গায় আটকে রাখো, বাকি কোড অন্ধ রাখো না — ওই এক জায়গায় পরিবর্তন এলে পুরো অ্যাপ ভাঙে না।</p>"
  }
});

doors.push({
  num: 2,
  icon: "🏛️",
  color: "#f97316",
  name: "আট API বিধি",
  subtitle: "8 API Laws of Senior Backend Developer",
  tech: "Resource-first URLs, predictable structure, HTTP method semantics, status codes, error contracts, versioning",
  spirit: "মীযান — ন্যায্য মাপ, প্রত্যাশিত আচরণ",
  secret: "URL চিনায় কী (resource), HTTP মেথড বলে কী করবে (operation) — ক্লায়েন্ট যেন ডকুমেন্টেশন ছাড়াই অনুমান করতে পারে, সেটাই ভালো API।",
  recall: {
    q: "REST API-তে URL আর HTTP মেথডের দায়িত্ব কী?",
    qen: "What are the roles of URL vs HTTP method in REST?",
    a: "URL শনাক্ত করে resource-কে (users, orders), HTTP মেথড বর্ণনা করে operation (GET retrieve, POST create, PUT replace, DELETE remove)।",
    aen: "URL identifies the resource (users, orders); the HTTP method describes the operation (GET retrieve, POST create, PUT replace, DELETE remove)."
  },
  story: `<p class="scene-setting">তিন মাস পর। তোমার প্রথম বড় দায়িত্ব: কোম্পানির নতুন API-র নকশা। তুমি এন্ডপয়েন্ট দাঁড় করালে — get_users, create_order, delete_product — কাজ করে, ডেমো দিলে, সবাই খুশি। এরপর ক্লায়েন্ট-টিমের মিটিংয়ে প্রথম ধাক্কা: অন্য টিমের ডেভেলপাররা বারবার ডকুমেন্ট খুলছে, ভুল এন্ডপয়েন্টে ঢুকছে, স্ট্যাটাস-কোড নিয়ে অনুমান করছে। তোমার API কাজ করছে, কিন্তু কেউ <em>অনুমান</em> করতে পারছে না। তখনই হেড অফ আর্কিটেকচার <strong>রুকসানা ম্যাডাম</strong> নেমে এলেন — শাড়ির আঁচলে খাতার কলম গোঁজা, চোখে ছিমছাম ফ্রেমের চশমা, হাতে বহু-বছর-ধরে-খাতায়-আঁকা URL-নকশার সংগ্রহ।</p>
<p class="scene-setting en">Three months later: your first big assignment — designing the company's new API. You shipped get_users, create_order, delete_product; it works, demo passed, everyone happy. Then the client-team meeting: developers keep opening docs, hitting wrong endpoints, guessing status codes. Your API works — but nobody can predict it. Down comes the head of architecture, Ruksana — a pen tucked in her sari's anchal, neat glasses, years of URL sketches in her notebook.</p>
<p class="scene-setting">তিনি তোমার এন্ডপয়েন্ট-তালিকা দেখে চুপ করে রইলেন, তারপর আস্তে করে বললেন — <em>তুমি দরজায় নাম লিখেছ, দরজার ওপরে নয়।</em> তুমি হতভম্ব। উনি বোর্ডের সামনে গিয়ে দুটো কলাম আঁকলেন: এক পাশে তোমার get_users, অন্য পাশে শুধু /users — আর নিচে GET POST PUT DELETE।</p>
<div class="dialogue">রুকসানা ম্যাডাম: বাবা, তোমার ভুল এন্ডপয়েন্টে নয় — চিন্তায়। তুমি ভাবো URL অ্যাকশন বর্ণনা করে। কিন্তু HTTP নিজেই তো অ্যাকশনের ভাষা — GET, POST, PUT, DELETE। URL যদি কাজ বলে, মেথড কী বলবে? <strong>URL চিনাবে কাকে, মেথড বলবে কী করতে।</strong></div>
<div class="dialogue en">Your mistake is not in endpoints — it is in thinking. You believe the URL describes the action. But HTTP itself is the language of actions. If the URL does the verb's job, what is the verb for? The URL identifies; the method operates.</div>
<div class="code-block">BILL ১ — Resource ঘিরে ডিজাইন করো, অ্যাকশন ঘিরে নয়

❌ get_users, create_order, delete_product (URL = অ্যাকশন)
✅ /users  /orders  /products (URL = resource)
   + GET / POST / DELETE বলে দেয় কী করবে

একই resource একাধিক অপারেশন সাপোর্ট করে —
নতুন অ্যাকশনের জন্য নতুন URL লাগে না।</div>
<div class="code-block">BILL ২ — URL পূর্বানুমানযোগ্য রাখো

এক API-এ user, অন্যটায় customers, তৃতীয়টায় customer_profiles?
→ প্রত্যেক ডেভেলপারকে তোমার নামকরণ-নিয়ম মুখস্থ করতে হবে।

নিয়ম: কালেকশন = বহুবচন resource (users, orders, products)
     নির্দিষ্ট resource = আইডেন্টিফায়ার দিয়ে (/users/42)
কোন কনভেনশন বেছে নিলে তা সবখানে এক রাখো —
consistency > নিখুঁত কনভেনশন।</div>
<div class="code-block">BILL ৩ — HTTP মেথড তার উদ্দেশ্যে ব্যবহার করো

GET    → ডেটা আনবে (নিরাপদ, বদলাবে না)
POST   → নতুন কিছু তৈরি করবে
PUT    → পুরোটা বদলাবে (replace)
PATCH  → অংশ বদলাবে
DELETE → মুছবে

এক API-তে আপডেটে POST, অন্যটায় PUT, তৃতীয়টায় PATCH?
→ ক্লায়েন্টকে HTTP-এর বদলে তোমার নিজস্ব নিয়ম শিখতে হবে।</div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্কতা:</strong> কেউ action=delete টাইপ query parameter দিয়ে GET-এ ডিলিট করায় — HTTP মেথড আর আসল কাজের মিল থাকে না। দায়িত্ব ভাগ করে রাখো: <strong>path চিনায়, query নির্দিষ্ট করে, মেথড অপারেশন বর্ণনা করে।</strong></div></div>
<div class="code-block">BILL ৪ — স্ট্যাটাস কোড গুরুত্বপূর্ণ
200 OK · 201 Created · 400 ভুল রিকোয়েস্ট · 401 অননুমোদিত ·
404 নেই · 409 কনফ্লিক্ট · 500 সার্ভার ভাঙা

BILL ৫ — এরর-ও চুক্তিবদ্ধ করো
এরর রেসপন্সে থাকুক: কোড, মেসেজ, কোন ফিল্ডে সমস্যা।
ভ্যালিডেশন এররে বলো কোন ফিল্ডে মনোযোগ দিতে হবে —
ক্লায়েন্ট যেন অনুমান না করে অপেক্ষা করে।

BILL ৬ — সব পাথে চাপিয়ে দিও না
ফিল্টার/সার্চ/সর্টিং → query parameters (?category=...&sort=...)
path শনাক্ত করে, query নির্দিষ্ট করে।

BILL ৭ — পরিবর্তনে সাবধানী হওয়া
optional ফিল্ড যোগ = ভাঙার না।
আচরণ বদলানো/সরানো = breaking change → ভার্সনিং লাগে
(URL/header এ version — একটা predictabl পথ দাও)।

BILL ৮ — ফরম্যাট consistent রাখো
created_at vs createdAt vs CreatedAt — তিনটাই "ঠিক",
কিন্তু প্রতিটা ক্লায়েন্টকে মনে রাখতে হয় কোনটা কোথায়।
এক JSON স্টাইল, এক এরর-স্ট্রাকচার, এক pagination-নিয়ম।</div>
<div class="callout tip"><span class="co-icon">🎯</span><div><strong>রুকসানা ম্যাডামের মূল কথা:</strong> API ভালো হয় GET/POST/PUT/DELETE মানার জন্যে নয় — ক্লায়েন্ট যখন <strong>ডকুমেন্টেশন বারবার না দেখেও</strong> বুঝে যায় কীভাবে কাজ করে। এন্ডপয়েন্ট দাঁড় করানো দিয়ে শুরু কোরো না — <strong>প্যাটার্ন ডিফাইন করা দিয়ে শুরু করো।</strong></div></div>
<div class="verse">রুকসানা ম্যাডাম বোর্ড মুছতে মুছতে বললেন: <em>নকশা মানে নিজের বুদ্ধি দেখানো নয় — পরের মানুষের অনুমানকে সম্মান করা।</em> এ তো সেই পুরনো মীযান-নীতি: ওজনে প্রতারণা কোরো না — কারণ ন্যায্য মাপই মানুষের আস্থা বাঁচায়। API-ও তেমনি: predictable আচরণই তার আস্থা; ক্লায়েন্ট যখন অনুমান করে আর অনুমানটা ঠিক পায় — সেটাই নকশার ন্যায়।</div>
<div class="secret-box">🏛️ URL চিনায় কী, মেথড বলে কী করতে — এই ভাগ ভাঙলে API নিজেই নিজের ডকুমেন্টেশন।</div>`,
  senior: {
    title: "৮ API আইন — দ্রুত গাইড",
    body: "<p>১. Resource-first URL (<code>/orders</code>, <code>get_orders</code> নয়)। ২. Consistent naming — এক কনভেনশন সবখানে। ৩. HTTP মেথডের আসল মানে মানো (GET নিরাপদ, PUT replace, PATCH আংশিক)। ৪. সঠিক স্ট্যাটাস কোড। ৫. Structured এরর (কোড+মেসেজ+ফিল্ড)। ৬. ফিল্টারিং query-তে, path-এ নয়। ৭. Breaking change = versioning; optional add = safe। ৮. এক ফরম্যাট সর্বত্র। <strong>বোনাস:</strong> এন্ডপয়েন্ট আগে নয়, প্যাটার্ন আগে।</p>"
  }
});

doors.push({
  num: 3,
  icon: "🔗",
  color: "#f97316",
  name: "URL বনাম URI",
  subtitle: "URL vs URI: The Most Confused Topic Finally Makes Sense",
  tech: "URI (identifier) ⊃ URL (locator) + URN (name); API addressing",
  spirit: "নাম ও ঠিকানা — শিকারি (নাম) বনাম রাস্তার ঠিকানা (অবস্থান)",
  secret: "প্রতিটা URL একটা URI, কিন্তু প্রতিটা URI URL নয় — URI শিনায়, URL বলে কোথায় পাবে।",
  recall: {
    q: "URL আর URN-এর মধ্যে পার্থক্য কী? দুটোই কী ধরনের URI?",
    qen: "Difference between URL and URN? Both are what type of URI?",
    a: "URL = অবস্থান + প্রোটোকল (কোথায়, কীভাবে পাবে); URN = শাশ্বত নাম (ISBN-এর মতো, অবস্থান বলে না)। দুটোই URI — শিকারির দুই রকম উপায়।",
    aen: "URL = location + protocol (where, how to get it); URN = persistent name (like ISBN, no location). Both are URIs — two ways of identifying."
  },
  story: `<p class="scene-setting">রুকসানা ম্যাডামের নকশা-পাঠের পর তুমি ডকুমেন্টেশন লিখতে বসেছ। আর প্রথম লাইনেই আটকে গেছ: এক জায়গায় লিখেছ URL, অন্য জায়গায় URI — দুটোই কি এক? স্ট্যাক-ওভারফ্লোতে পড়লে তিন রকম উত্তর, তিনটাই আত্মবিশ্বাসী। হতাশ হয়ে তুমি ল্যাপটপ গুটিয়ে চায়ের দোকানে — আর সেখানেই পাশের টেবিলে বসা মানুষটা যেন তোমার মুখ দেখেই বুঝে গেলো।</p>
<p class="scene-setting en">Writing docs after Ruksana's lesson, you freeze at line one: URL in one place, URI in another — same thing? Stack Overflow gives three confident, contradictory answers. You fold the laptop and walk to the tea shop — where the man at the next table reads your face instantly.</p>
<p class="scene-setting"><strong>মাস্টার ইদ্রিস</strong> — শহরের পুরনো ডাকঘরের সর্দার; চল্লিশ বছর ধরে হাজারো চিঠি বাছাই করেছেন, বাঁ হাতের কনুইয়ের নিচে কালির স্থায়ী ছাপ, আঙুলে সবসময় একটা পুরনো রাবার-ব্যান্ড ঘোরানো। তিনি ডাকঘরেই থাকেন যেখানে প্রতিটা চিঠির দুটো পরিচয়: নাম, আর ঠিকানা। তোমার প্রশ্ন শুনে চায়ের কাপ নামিয়ে রেখে হাসলেন: <em>বাবা, এই প্রশ্নটা আমি চল্লিশ বছর ধরে হাতে-হাতে সমাধান করছি।</em></p>
<p class="scene-setting en">Master Idris — the old post office's head sorter; forty years of letters, an ink stain permanent under his left elbow, an old rubber band always rolling on his finger. In his post office every letter carries two identities: a name, and an address. Hearing your question he sets down his cup and smiles: this one I have been solving by hand for forty years.</p>
<div class="dialogue">ইদ্রিস চাচা: ভেবে দেখো — আমার কাছে প্রতিদিন দুই রকম চিঠি আসে। এক রকমে ঠিকানা লেখা: এই বাড়ি, এই রাস্তা, এই শহর — চিঠি ওখানেই পৌঁছাবে। আরেক রকমে শুধু নাম-নম্বর: ISBN ধরনের — বইটা চেনা যায়, কিন্তু সে কোথায় আছে নাম-নম্বর বলে না। প্রথমটা ঠিকানা, দ্বিতীয়টা শুধু নাম। দুটোই কিন্তু এক কাজ করে — <strong>শিনায়</strong>।</div>
<div class="dialogue en">Think — two kinds of letters reach me daily. One carries an address: this house, this street, this city — the letter will arrive there. The other carries only a name-number, ISBN-like — the book is identified, but where it lives, the number does not say. The first is an address; the second, only a name. Both do one job: they identify.</div>
<p class="scene-setting">তোমার চোখের সামনে যেন ঝকঝক করে ওঠে পুরো ডাক-বিভাগ: শিনানোর ছাতা এক, তার নিচে দুই প্রকার — ঠিকানাওয়ালা, আর নামওয়ালা। তুমি ন্যাপকিনে ছবিটা এঁকে ফেললে।</p>
<div class="diagram">
<div class="diag-title">URI-র জগৎ — ইদ্রিস চাচার ডাক-বিভাগ</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="15" y="20" width="530" height="200" rx="14"/>
  <text class="lbl" x="280" y="48" text-anchor="middle">URI — যা কিছু শিনায় (Identifier)</text>
  <rect class="cell-hot" x="40" y="70" width="235" height="120" rx="10"/>
  <text class="lbl-hot" x="157" y="98" text-anchor="middle">URL — Locator</text>
  <text class="lbl-sm" x="157" y="122" text-anchor="middle">কোথায় + কীভাবে</text>
  <text class="lbl-sm" x="157" y="142" text-anchor="middle">https://api.site.com</text>
  <text class="lbl-sm" x="157" y="162" text-anchor="middle">/customers/42</text>
  <rect class="cell-cyan" x="285" y="70" width="235" height="120" rx="10"/>
  <text class="lbl-cyan" x="402" y="98" text-anchor="middle">URN — Name</text>
  <text class="lbl-sm" x="402" y="122" text-anchor="middle">শাশ্বত নাম, অবস্থান নয়</text>
  <text class="lbl-sm" x="402" y="142" text-anchor="middle">urn:isbn:0-395-36341-1</text>
  <text class="lbl-sm" x="402" y="162" text-anchor="middle">(বইয়ের ISBN)</text>
</svg>
<div class="diag-cap">প্রতিটা URL একটা URI (কারণ এটাও শিনায়) — কিন্তু প্রতিটা URI URL নয়।</div>
</div>
<div class="code-block">সহজ হিসাব:
URI  = শিকারির ছাতা (general category)
URL  = ছাতার ভেতরের এক প্রকার — ঠিকানা দেয়
URN  = ছাতার ভেতরের আরেক প্রকার — নাম দেয়

উদাহরণ (ISBN):
একটা বইয়ের ISBN বইটাকে শিনায় — কিন্তু কম্পিউটারকে
কোথায় আছে বলে না, নেটওয়ার্কে কীভাবে আনবে তাও না।
শিনায় নাম দিয়ে, অবস্থান দিয়ে না → এটা URN-এর কাছাকাছি।</div>
<div class="verse">ইদ্রিস চাচা উঠতে উঠতে বললেন: <em>চল্লিশ বছরে শিখেছি — চিঠি হারায় না ঠিকানায়, হারায় পরিচয়ে। নাম ঠিক রাখো, ঠিকানা বদলাবে — চিঠি এতদিনও পৌঁছাবে।</em> আর এ তো সেই চিরন্তন সত্য: আসমানের নিচে সব বদলায়, চেনার সূত্রটা অটল থাকে। URN সেই অটল নাম — বাজারে বইটা কোন তাকে গেলো জানা নেই, কিন্তু ISBN ধরলেই সে এক।</div>
<div class="callout tip"><span class="co-icon">🛠️</span><div><strong>সফটওয়্যারে কোথায় দেখবে:</strong> API এন্ডপয়েন্ট + query parameter — পুরো স্ট্রিংটাই URI। যেমন <code>https://api.site.com/customers?active=true</code> — এটা একটা URI (আর যেহেতু অবস্থান বলে দিচ্ছে, URL-ও)। এই কারণেই দুই ডেভেলপার দুই নামে ডেকেও দুজনেই ঠিক ছিল — ইদ্রিস চাচার ভাষায়: একজন ঠিকানা বলছিল, একজন শিনানো।</div></div>
<div class="secret-box">🔗 URI শিনায়; URL বলে কোথায় — তাই সব URL হলো URI, সব URI URL নয়।</div>`,
  senior: {
    title: "URL vs URI — দ্রুত গাইড",
    body: "<p><strong>URI</strong> = Uniform Resource <em>Identifier</em> (বৃহত্তর)। <strong>URL</strong> = Locator (অবস্থান + প্রোটোকল)। <strong>URN</strong> = Name (ISBN-এর মতো শাশ্বত নাম)। সম্পর্ক: URL ⊂ URI, URN ⊂ URI। API এন্ডপয়েন্ট সাধারণত দুটোই — শিনায় (URI) এবং ঠিকানা দেয় (URL)। কথায় কথায় সবাই URL বলে, ডকুমেন্টে URI দেখলে অবাক হয়ো না।</p>"
  }
});

doors.push({
  num: 4,
  icon: "🧭",
  color: "#f97316",
  name: "২০৩০-এর ছয় নিয়ম",
  subtitle: "6 Survival Rules for Your Career by 2030",
  tech: "Task automation vs job loss, WEF 2025 projections (170M created / 92M displaced), adaptability strategy",
  spirit: "তাকওয়া — আগাম প্রস্তুতি, অনিশ্চয়তায় বিচক্ষণতা",
  secret: "AI কাজের ধরন বদলাচ্ছে, কেবল চাকরি খাচ্ছে না — নিরাপদ ক্যারিয়ার মানে AI-ছোঁয়া-না-লাগা চাকরি খোঁজা নয়, বদলে যাওয়ার ক্ষমতা তৈরি করা।",
  recall: {
    q: "WEF Future of Jobs 2025 অনুযায়ী ২০৩০ পর্যন্ত কত নতুন চাকরি তৈরি আর কত সরে যেতে পারে?",
    qen: "Per WEF Future of Jobs 2025, how many jobs created vs displaced by 2030?",
    a: "প্রায় ১৭ কোটি (170M) নতুন চাকরি তৈরি হতে পারে, প্রায় ৯ কোটি (92M) সরে যেতে পারে — নিট বৃদ্ধি ~৭৮ মিলিয়ন। এগুলো অনুমান, নিশ্চয়তা নয়।",
    aen: "~170M new jobs could be created, ~92M displaced — net +78M. These are projections, not guarantees."
  },
  story: `<p class="scene-setting">রাত পোহাচ্ছে। ল্যাপটপে WEF-র রিপোর্টের ট্যাব খোলা, LinkedIn-এ ছুটছে "AI সব চাকরি খাচ্ছে" পোস্টের ভিড়। তুমি বিছানায় শুয়ে সিলিংয়ের দিকে তাকিয়ে ভাবছ — পাঁচ বছর পর কোথায় থাকবো? আমার ক্যারিয়ার কি টিকবে? ঘুম আসছে না, বুকের ভেতর ছ্যাঁত করে উঠছে। সকালে হাঁটতে বেরিয়ে গ্রামের পথে দাঁড়িয়ে রইলে এক বিবির সামনে — যিনি প্রতিদিন ভোরের আলোয় জমির খুঁটিনাটি দেখেন।</p>
<p class="scene-setting en">Night breaking, the WEF report open in a tab, LinkedIn flooding with AI-will-eat-all-jobs posts. Lying in bed you stare at the ceiling — where will I be in five years? Will my career survive? No sleep, a sting in the chest. On the morning walk you stop before a woman who inspects her land at dawn every day.</p>
<p class="scene-setting"><strong>বিবি শিরিন</strong> — পারিবারিক খামারের চালক; উরুর কাছে গামছা বেঁধে ক্ষেতে নামেন, হাতের তালু মাটির সাথে স্থায়ীভাবে লেগে যাওয়া কাদার দাগ, শীত-গ্রীষ্ম নির্বিশেষে ভোরের আজানের পর জমিনে। তুমি তোমার ভয় ঢাললে উনি হেসে ফেললেন: <em>ভাই, তোমার ওই ভয়টা আমার বাবারও ছিল — ট্রাক্টর এলে চাষির দিন শেষ বলে।</em></p>
<p class="scene-setting en">Bibi Shirin — steward of the family farm; a gamchha tied at her thigh, mud stains permanently mapped on her palms, on the land after dawn prayer in every season. You pour out your fear; she laughs: your fear was my father's too — that the tractor would end the farmer's days.</p>
<div class="dialogue">বিবি শিরিন: ট্রাক্টর এলো। হাল-বলদ গেলো, ঠিকই। কিন্তু চাষি গেলো না — চাষি হাল বদলালো। যে ট্রাক্টর চালাতে শিখলো সে-ই আজ দুই একর থেকে পঞ্চাশ একরে। আর যে হালের খামচায় জড়িয়ে রইলো? ইতিহাস। যন্ত্র কাজ বদলায়, কর্মীকে নয় — কর্মী বদলাতে না-চাইলে তবেই যন্ত্র তাকে টেকে দেয়।</div>
<div class="dialogue en">The tractor came. The plough and oxen went — true. But the farmer did not go; the farmer changed ploughs. Whoever learned to drive farms fifty acres today from two. Whoever clutched the old plough is history. Machines change work, not workers — only a worker who refuses to change is ended by the machine.</div>
<div class="code-block">RULE ১ — AI বদলাচ্ছে কাজ (task), কেবল চাকরি নয়
AI/রোবট/ডিজিটাল টুল রুটিন কাজ স্বয়ংক্রিয় করছে —
সাথে নতুন সুযোগ তৈরি করছে: AI, সফটওয়্যার, ডেটা, সাইবার সিকিউরিটি।
AI-ই একমাত্র শক্তি নয় — জনসংখ্যা বার্ধক্য (হেলথকেয়ার চাহিদা),
সাসটেইনেবল এনার্জি ট্রানজিশন — সব মিলে ভবিষ্যৎ গড়ছে।

RULE ২ — রুটিন কাজ বেশি ঝুঁকিতে
ডেটা এন্ট্রি, রুটিন অ্যাডমিন, কিছু ব্যাংকিং কাজ, ক্যাশিয়ার —
predictable প্রসেস, মেশিন ভালোভাবে পারে।
শিক্ষা: চাকরির টাইটেল নয়, কাজের ধরনই ঝুঁকি ঠিক করে।

RULE ৩ — নতুন সুযোগও বাড়ছে
WEF Future of Jobs 2025: ২০৩০ নাগাদ
~১৭০ মিলিয়ন নতুন চাকরি তৈরি হতে পারে, ~৯২ মিলিয়ন সরে যেতে পারে।
নিট ~+৭৮ মিলিয়ন। সবচেয়ে দ্রুত বর্ধনশীল: big data, AI/ML,
সফটওয়্যার ডেভেলপমেন্ট, সাইবার সিকিউরিটি।

RULE ৪ — শুধু AI-জব খুঁজো না
AI-ই একমাত্র ভবিষ্যৎ নয়। যে কাজে judgment, সৃজনশীলতা,
problem-solving, যোগাযোগ, গভীর দক্ষতা লাগে —
সেগুলোর দিকে মনোযোগ দাও।

RULE ৫ — ১০০ মানুষের হিসাব
বিশ্বের কর্মীশক্তি যদি ১০০ মানুষ হয় —
WEF বলে: ৫৯ জনের ২০৩০-এর মধ্যে প্রশিক্ষণ লাগবে।

RULE ৬ — সবচেয়ে নিরাপদ কৌশল
এমন চাকরি খোঁজা নয় যেটায় AI কখনো ছোঁবে না (ক্রমে অসম্ভব) —
বরং এমন ক্যারিয়ার গড়া যেখানে তুমি বদলে যেতে পারো:
টেকনোলজি শেখো + মানবিক দক্ষতা + একটা ইন্ডাস্ট্রিতে গভীরতা +
শেখা চালিয়ে যাও।</div>
<div class="verse">বিবি শিরিন জমির দিকে তাকিয়ে বললেন: <em>আমরা তো বীজ বুনি, ফসলের নিশ্চয়তা দিই না — ঝড় আসবে, কীট আসবে; তবু প্রতি মৌসুমে বুনি। তাকওয়া মানে ভয় নয়, প্রস্তুতি।</em> আর কুরআনেও তাই বলা: <em>মানুষের জন্য তা-ই আছে সে যার চেষ্টা করে</em> (নাজম ৫৩:৩৯) — ফসল আল্লাহর, বুনন তোমার। ক্যারিয়ারও সেই খেত: ঝড়ের (AI-র) ভবিষ্যদ্বাণী থামানো যায় না, কিন্তু বীজ-বদল আর মাটি-জ্ঞান তোমার হাতে।</div>
<div class="callout info"><span class="co-icon">💡</span><div><strong>বিবি শিরিনের শেষ কথা:</strong> ভবিষ্যৎ সম্ভবত \"মানুষ বনাম AI\" নয় — <strong>কারা AI কত ভালোভাবে ব্যবহার করতে পারে, সাথে AI-র পক্ষে সহজে প্রতিস্থাপন-যোগ্য নয় এমন দক্ষতা আনতে পারে</strong> — সেই যুদ্ধ। বদলে যাওয়ার এই ক্ষমতাই সবচেয়ে দামি ক্যারিয়ার-স্কিল।</div></div>
<div class="secret-box">🧭 AI-নিরাপদ চাকরি খোঁজো না — বদল-সক্ষম ক্যারিয়ার গড়ো।</div>`,
  senior: {
    title: "২০৩০ ক্যারিয়ার নিয়ম — দ্রুত গাইড",
    body: "<p>১. Task বদলাচ্ছে, পুরো job নয়। ২. রুটিন কাজ = বেশি ঝুঁকি; judgment/সৃজনশীলতা = কম। ৩. WEF 2025: +170M / −92M (নিট +78M) — projection, guarantee নয়। ৪. শুধু AI টার্গেট কোরো না। ৫. ১০০ জনে ৫৯ জনের retraining লাগবে। ৬. কৌশল: টেক + মানবিক দক্ষতা + ইন্ডাস্ট্রি-গভীরতা + আজীবন শেখা।</p>"
  }
});

doors.push({
  num: 5,
  icon: "📚",
  color: "#f97316",
  name: "দশ বইয়ের তাক",
  subtitle: "10 Programming Books That Turn Coders Into Software Engineers",
  tech: "Career-stage reading map: fundamentals → design → architecture (Code Complete → DDIA)",
  spirit: "সাহাবাদের সঙ্গ — অভিজ্ঞদের সান্নিধ্যে শেখা",
  secret: "সব বই একসাথে পড়ার দরকার নেই — যে স্টেজে আছো সেই বই বেছে নাও; লক্ষ্য ভাষা নয়, চিন্তার ধরন বদলানো।",
  recall: {
    q: "ক্যারিয়ারের কোন স্টেজে কোন ধরনের বই পড়া উচিত (শিক্ষকের পরামর্শ)?",
    qen: "Which book types at which career stage (teacher's advice)?",
    a: "শুরুতে fundamentals + mindset (Code Complete, Pragmatic Programmer) → বাড়তে থাকলে design + refactoring (Clean Code, Refactoring) → সিনিয়র লক্ষ্যে architecture + distributed systems (DDIA)।",
    aen: "Start: fundamentals + mindset → growth: design + refactoring → senior target: architecture + distributed systems."
  },
  story: `<p class="scene-setting">বিবি শিরিনের কথা মনে পড়ার কয়েকদিন পরেই তুমি অনলাইন বুকস্টোরে ঢুকলে "best programming books" সার্চ করতে — আর পেলে ৫০টা রিকমেন্ডেশনের জঙ্গল। কোনটা আগে? কোনটা এখন দরকার নেই? কার্টে সাতটা বই, ইনডিসিশনে রাত। পরদিন অফিসের কাছে পুরনো বইয়ের দোকানে গিয়ে দাঁড়ালে — ভেজা পুরনো কাগজের গন্ধ, উপরে-নিচে কাঠের তাক। কাউন্টারে বসা মানুষটি বইয়ের পাতা ঝেড়ে কাগজ কাটছেন।</p>
<p class="scene-setting en">Days after Shirin's words you search best programming books — and get a jungle of fifty recommendations. Which first? Which not yet? Seven books in the cart, a night of indecision. Next day, at the old bookshop near the office — the smell of aged paper, wooden shelves floor to ceiling — a man at the counter trims a book's pages with a paper knife.</p>
<p class="scene-setting"><strong>অধ্যাপক নাজির</strong> — অবসরপ্রাপ্ত কম্পিউটার-সায়েন্স শিক্ষক, এখন ছোট্ট দোকানে বই আর পাঠক মিলিয়ে দেন; ডান কানের ওপর চশমা চড়িয়ে, কোটের পকেটে সবসময় একটা লাল কারি কলম, আঙুলের ডগায় কাগজের খোঁচা-দাগ। তোমার কার্টের তালিকা দেখে উনি মৃদু হাসলেন: <em>সাতটা একসাথে? বাবা, বই ওজন নয় যে একসাথে বইলে মাংসপেশি হবে — বই ওষুধ, সময়মতো নির্দিষ্ট ডোজ।</em></p>
<p class="scene-setting en">Professor Nazir — a retired computer-science teacher who now matches books to readers in a small shop; glasses pushed up over his right ear, a red fountain pen always in his coat pocket, paper-cut marks on his fingertips. Seeing your cart he smiles gently: seven at once? Books are not weights that become muscle when carried together — books are medicine, timed and specific in dose.</p>
<div class="dialogue">অধ্যাপক নাজির: আমি ত্রিশ বছর পড়িয়েছি, বিশ বছর বই বেচছি — একই ভুল দেখেছি সবার: সবাই তাকের সবচেয়ে ভারী বইটা প্রথমে তোলে। ভারী বই তোলা কসরত নয়, বাবা — সময়মতো না-পড়া ভারী বই মানুষকে পড়াই ছাড়িয়ে দেয়। আমি তোমাকে তাক দেখাবো, ক্রম তুমি বেছো।</div>
<div class="dialogue en">Thirty years teaching, twenty selling books — the same mistake everywhere: everyone lifts the heaviest book first. Lifting heavy books is not exercise; a heavy book read at the wrong time makes people quit reading. I will show you the shelf; you choose the order.</div>
<div class="code-block">১০ → ৬ (foundations ও design):
১০. Code Complete — Steve McConnell
    সফটওয়্যার কনস্ট্রাকশন: debugging, organization, naming —
    শুরুর দিকের fundamentals গড়ার জায়গা।
 ৯. Building Microservices — Sam Newman
    সিস্টেম ভাগ করা, সার্ভিস-যোগাযোগ, টিম-স্ট্রাকচার।
 ৮. Clean Code — Robert C. Martin
    পাঠযোগ্যতার বিখ্যাত বই — সবচেয়ে বেশি আলোচিত-সমালোচিতও।
 ৭. Refactoring — Martin Fowler
    কাজ করা কোড নিরাপদে উন্নত করার শিল্প।
 ৬. Introduction to Algorithms (CLRS) — Cormen et al.
    অ্যালগরিদমের রেফারেন্স-ভাণ্ডার।
 ৫. The Mythical Man-Month — Frederick Brooks
    সফটওয়্যার প্রজেক্ট-ম্যানেজমেন্টের চিরকালীন সত্য।

৫ → ১ (mindset থেকে architecture):
 ৪. Design Patterns — Gamma, Helm, Johnson, Vlissides
    পুনরাবৃত্ত ডিজাইন-সমস্যার প্রমাণিত সমাধান।
 ৩. Structure & Interpretation of Computer Programs — Abelson/Sussman
    প্রোগ্রামিং-চিন্তার গোড়া।
 ২. A Philosophy of Software Design — John Ousterhout
    একটাই মূল আইডিয়া: complexity কমাও।
    Clean Code-স্টাইল চিন্তার বিকল্প হিসেবে জনপ্রিয়।
 ১. Designing Data-Intensive Applications — Martin Kleppmann
    আধুনিক ইঞ্জিনিয়ারিং-এর সবচেয়ে গুরুত্বপূর্ণ বইগুলোর একটা:
    স্কেল, ফেইলিওর, কম্পোনেন্ট-ইন্টারঅ্যাকশন — সিস্টেমের ভেতরটা।</div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>অধ্যাপক নাজিরের সতর্কতা:</strong> সবগুলো একসাথে পড়তে গিয়ে ডুবে যেও না। <strong>যেখানে আছো সেখান থেকে বেছে নাও</strong> — শুরু? fundamentals + mindset। বাড়ছো? design + refactoring। সিনিয়র লক্ষ্যে? architecture + distributed systems।</div></div>
<div class="verse">অধ্যাপক নাজির মুড়ি দিতে দিতে বললেন: <em>আমার দোকানে হাজার বই, কিন্তু প্রতিটা পাঠকের জন্য ঠিক একটাই আছে আজকের জন্য।</em> আর এ তো সাহাবাদের সোহবতেরই নিয়ম — আল্লাহর রাসূল (সা.) প্রত্যেক সাথীকে তার অবস্থা বুঝে দাওয়া করতেন, সবাইকে এক পাঠ্য নয়। বই-ও সোহবত: লেখক তোমার সাথে বসে আছেন — শুধু ক্রমটা তোমার নিজের হালে নাও।</div>
<div class="secret-box">📚 বই বদলায় না কী পড়ছো — বদলায় কীভাবে ভাবছো; ভাবনা বদলালে প্রোগ্রামিংয়ের বাকি সব পরিষ্কার হয়।</div>`,
  senior: {
    title: "১০ বই — স্টেজ-ভিত্তিক মানচিত্র",
    body: "<p><strong>শুরু:</strong> Code Complete, Pragmatic Programmer, Clean Code। <strong>মধ্য:</strong> Refactoring, Design Patterns, Philosophy of Software Design। <strong>সিনিয়র-পথ:</strong> Building Microservices, DDIA। <strong>চিরসবুজ:</strong> Mythical Man-Month, SICP, CLRS। একসাথে সব নয় — স্টেজ মিলিয়ে একটা করে।</p>"
  }
});



