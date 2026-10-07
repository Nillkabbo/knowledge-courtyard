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
  story: `<p class="scene-setting">কল্পনা করো, তুমি একটা পুরনো কোডবেসে ঢুকেছ। একটা ফাংশন দেখছ — ইউজার আছে কিনা, অ্যাক্টিভ কিনা, পারমিশন আছে কিনা যাচাই করে। শর্তের ভেতরে শর্ত, তার ভেতরে আরেক শর্ত — আসল কাজটা তিন স্তর নিচে চাপা। কোড কাজ করে, কিন্তু পড়া যায় না।</p>
<p class="scene-setting en">You are inside an old codebase. A function checks: does the user exist, is the user active, do they have permission? Condition inside condition inside condition — the actual operation is buried three levels deep. The code works, but you cannot read it.</p>
<div class="dialogue">শিক্ষক বলেন — সিনিয়র হওয়ার প্রথম স্বীকৃতি এখানেই: আরেকটা ভাষা শেখা নয়, কোডকে <strong>বোঝা সহজ, বদলানো সহজ, ভাঙা কঠিন</strong> করা। অভিজ্ঞ ইঞ্জিনিয়াররা আরও জটিল কোড লেখেন না — অনেক ক্ষেত্রে উল্টোটা করেন।</div>
<div class="dialogue en">The teacher opens — the first admission of seniority is not another language: make code <strong>easier to understand, easier to change, harder to break</strong>. Experienced engineers do not write more complicated code. Often they do the opposite.</div>
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
<div class="callout tip"><span class="co-icon">🎬</span><div><strong>শিক্ষকের ভিজ্যুয়াল:</strong> প্রথম উদাহরণে শর্তগুলো একটার ভেতরে একটা গুঁজানো — আসল অপারেশন পর্দার তিন স্তর নিচে। দ্বিতীয় উদাহরণে প্রতিটি চেক উপরে উঠে আসে, ভুল হলে সাথে সাথে return — মূল কাজ সবার সামনে।</div></div>
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
  story: `<p class="scene-setting">ব্যাকএন্ড টিমের মিটিং। একজন বলছে — API-তে এন্ডপয়েন্ট দাঁড় করাইছি: get_users, create_order, delete_product। কাজ করে। কিন্তু সিনিয়র ইঞ্জিনিয়ার মাথা নাড়েন — URL যদি অ্যাকশন বর্ণনা করে, তাহলে HTTP মেথডের কাজ কী? HTTP নিজেই তো অ্যাকশন বর্ণনা করার জন্য বানানো।</p>
<p class="scene-setting en">Backend team meeting. Someone says — we built the endpoints: get_users, create_order, delete_product. It works. But the senior engineer shakes his head — if the URL describes the action, what is the HTTP method for? HTTP itself is already designed to describe actions.</p>
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
<div class="callout tip"><span class="co-icon">🎯</span><div><strong>শিক্ষকের মূল কথা:</strong> API ভালো হয় GET/POST/PUT/DELETE মানার জন্যে নয় — ক্লায়েন্ট যখন <strong>ডকুমেন্টেশন বারবার না দেখেও</strong> বুঝে যায় কীভাবে কাজ করে। এন্ডপয়েন্ট দাঁড় করানো দিয়ে শুরু কোরো না — <strong>প্যাটার্ন ডিফাইন করা দিয়ে শুরু করো।</strong></div></div>
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
  story: `<p class="scene-setting">API নিয়ে কাজ করলে দুটো শব্দ শোনো প্রায় একই অর্থে — URL আর URI। এক ডেভেলপার একে বলছে URL, আরেকজন সেই একই জিনিসকে বলছে URI। দ্বিধা এখানেই শুরু।</p>
<p class="scene-setting en">Working with APIs you hear two terms almost interchangeably — URL and URI. One developer calls it a URL, another calls the same thing a URI. The confusion starts here.</p>
<div class="dialogue">শিক্ষক সবচেয়ে সহজ করে দেন: <strong>URI হলো বৃহত্তর ধারণা, URL তার একটা নির্দিষ্ট প্রকার।</strong> URI = Uniform Resource Identifier — কাজ শুধু শিনানো: এই রিসোর্সটা এটা। ওয়েবপেজ, ছবি, API এন্ডপয়েন্ট, ফাইল — যাই হোক। URL = Uniform Resource Locator — এক ধাপ এগিয়ে: কোথায় অবস্থিত আর কীভাবে পাবে, দুটোই বলে।</div>
<div class="diagram">
<div class="diag-title">URI-র জগৎ — শিক্ষকের চিত্র</div>
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
<div class="callout tip"><span class="co-icon">🛠️</span><div><strong>সফটওয়্যারে কোথায় দেখবে:</strong> API এন্ডপয়েন্ট + query parameter — পুরো স্ট্রিংটাই URI। যেমন <code>https://api.site.com/customers?active=true</code> — এটা একটা URI (আর যেহেতু অবস্থান বলে দিচ্ছে, URL-ও)। এই কারণেই দুই ডেভেলপার দুই নামে ডেকেও দুজনেই ঠিক ছিল।</div></div>
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
  story: `<p class="scene-setting">রাত পোহাচ্ছে। একজন ডেভেলপার ভাবছে — AI-র যুগে আমার চাকরি কতটা নিরাপদ? কোড শিখব? AI ইঞ্জিনিয়ার হব? পাঁচ বছর পর কোন ক্যারিয়ার টিকবে? শিক্ষক ছয়টি সূত্রে উত্তর দেন।</p>
<p class="scene-setting en">Night is breaking. A developer wonders — how safe is my job in the AI era? Should I learn to code, become an AI engineer? Which careers survive five years from now? The teacher answers in six rules.</p>
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
<div class="callout info"><span class="co-icon">💡</span><div><strong>শিক্ষকের শেষ কথা:</strong> ভবিষ্যৎ সম্ভবত "মানুষ বনাম AI" নয় — <strong>কারা AI কত ভালোভাবে ব্যবহার করতে পারে, সাথে AI-র পক্ষে সহজে প্রতিস্থাপন-যোগ্য নয় এমন দক্ষতা আনতে পারে</strong> — সেই যুদ্ধ। বদলে যাওয়ার এই ক্ষমতাই সবচেয়ে দামি ক্যারিয়ার-স্কিল।</div></div>
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
  story: `<p class="scene-setting">"best programming books" সার্চ করলে ৫০টা রিকমেন্ডেশন — মাথা ঘুরে যায়। শিক্ষক ১০টা বই বেছে দিয়েছেন: ডেভেলপাররা বারবার রেকমেন্ড করে, আজও প্রাসঙ্গিক, আর ক্যারিয়ারের বিভিন্ন ধাপে কাজে লাগে।</p>
<p class="scene-setting en">Search "best programming books" and you get 50 recommendations — overwhelming. The teacher picked 10: consistently recommended, still relevant, useful at different career stages.</p>
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
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>শিক্ষকের সতর্কতা:</strong> সবগুলো একসাথে পড়তে গিয়ে ডুবে যেও না। <strong>যেখানে আছো সেখান থেকে বেছে নাও</strong> — শুরু? fundamentals + mindset। বাড়ছো? design + refactoring। সিনিয়র লক্ষ্যে? architecture + distributed systems।</div></div>
<div class="secret-box">📚 বই বদলায় না কী পড়ছো — বদলায় কীভাবে ভাবছো; ভাবনা বদলালে প্রোগ্রামিংয়ের বাকি সব পরিষ্কার হয়।</div>`,
  senior: {
    title: "১০ বই — স্টেজ-ভিত্তিক মানচিত্র",
    body: "<p><strong>শুরু:</strong> Code Complete, Pragmatic Programmer, Clean Code। <strong>মধ্য:</strong> Refactoring, Design Patterns, Philosophy of Software Design। <strong>সিনিয়র-পথ:</strong> Building Microservices, DDIA। <strong>চিরসবুজ:</strong> Mythical Man-Month, SICP, CLRS। একসাথে সব নয় — স্টেজ মিলিয়ে একটা করে।</p>"
  }
});



