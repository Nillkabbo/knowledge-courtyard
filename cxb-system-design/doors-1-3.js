// doors-1-3.js — Cloud X Berry Series Book 5: The System Blueprint
// Source: System Design playlist (6 videos)
const doors = [];

doors.push({
  num: 1,
  icon: "📐",
  color: "#60a5fa",
  name: "নীতির ভিত্তি",
  subtitle: "System Design Principles in 4 Minutes",
  tech: "Scalability, reliability, security, performance, maintainability, cost, flexibility, modularity",
  spirit: "উসুল — নিয়মের ভিত্তিতে ফারায়েজ",
  secret: "সিস্টেম ডিজাইনের আট নীতি আসলে আটটা প্রশ্ন: বাড়লে কী হবে? ভাঙলে কী হবে? চুরি হলে? ধীর হলে? বদলাতে হলে? দাম বাড়লে? — প্রতিটা প্রশ্নের উত্তরই একেকটা নীতি।",
  recall: {
    q: "Scalability আর reliability-র পার্থক্য নিজের ভাষায় বলো।",
    qen: "Explain scalability vs reliability in your own words.",
    a: "Scalability = বেড়ে যাওয়ার সাথে তাল মিলানো — ইউজার/ডেটা হাজারগুণ হলেও সিস্টেম ধীর বা ভাঙবে না (upgrade অথবা আরও মেশিন যোগ)। Reliability = ভাঙা সত্ত্বেও চালু থাকা — সার্ভার নামলে, নেট কাটলে backup/failover/recovery-তে সেবা চলতে থাকে। একটা বৃদ্ধি-প্রশ্ন, আরেকটা বিপর্যয়-প্রশ্ন।",
    aen: "Scalability = keeping up with growth (upgrade or add machines). Reliability = staying up through failure (backups, failover, recovery). One is a growth question; the other a disaster question."
  },
  story: `<p class="scene-setting">"সিস্টেমটা ঠিকমতো ডিজাইন করো" — কথাটার মানে আসলে কী? রিয়েল প্রজেক্টে কিছু এক জায়গায় থাকে না: ইউজার বাড়ে, ডেটা ফুলে ওঠে, রিকোয়ারমেন্ট বদলায় — আর যা কাল সকালে চলতো, সেটাই কাল সন্ধ্যায় ভাঙে। শিক্ষকের ভিডিও এই জায়গা থেকে শুরু: নীতি মানে থিওরি নয়, জটিল হয়ে ওঠা সিস্টেমে পরিষ্কার ভাবার উপায়।</p>
<p class="scene-setting en">"Design the system properly" — what does that actually mean? In real projects nothing stays still: users grow, data swells, requirements change. Principles are not theory — they are ways to think clearly when systems get complicated.</p>
<div class="code-block">ডিজাইনের ৮ নীতি — ৮ প্রশ্নে:

১. SCALABILITY — বাড়লে?
   ছোট ইউজারে নিখুঁত, হাজারে এলেই ক্র্যাশ —
   তো নকশা এমন যে প্রয়োজনে বড় হওয়া যায়।

২. RELIABILITY — ভাঙলে?
   সার্ভার নামবেই নামবে; প্রশ্ন পুরো থামবে নাকি
   backup/failover-এ মসৃণ সামলাবে।

৩. SECURITY — চুরির মুখে?
   প্রতিটা সিস্টেমেই মূল্যবান ডেটা; encryption,
   access-control — সঠিক মানুষ, সঠিক জিনিস।

৪. PERFORMANCE — ধীর হলে?
   ইউজার অপেক্ষা করে না, চলে যায়;
   bottleneck আগে ধরো — অ্যাপ, নেট, DB যেখানেই।

৫. MAINTAINABILITY — বদলাতে হলে?
   সিস্টেম কখনো শেষ হয় না; বোঝা কঠিন কোডে
   প্রতিটা পরিবর্তন ঝুঁকি।

৬. COST — দাম মাপা?
   সার্ভার-স্টোরেজ-ট্রান্সফার সব টাকা;
   শক্তিশালী কিন্তু চালানো-অসম্ভব সিস্টেম বোকামি।

৭-৮. FLEXIBILITY + MODULARITY —
   রিকোয়ারমেন্ট বদলাবেই; শক্ত সিস্টেমে ছোট
   বদলেও সব ভাঙে। মডিউলে ভাগ করো —
   এক অংশ বদলাও, বাকি সব শান্ত।</div>
<div class="callout tip"><span class="co-icon">📐</span><div><strong>শিক্ষকের মূল কথা:</strong> এই আটটা নীতি পরীক্ষার প্রশ্ন নয় — <strong>প্রতিটা ডিজাইন-সিদ্ধান্তের ছাঁকনি</strong>। নতুন কোনো আর্কিটেকচার দেখলে একে একে জিজ্ঞেস করো: এটা বাড়লে কী হবে? ভাঙলে? দাম কত? — উত্তরগুলোই নকশার আসল রিপোর্ট-কার্ড।</div></div>
<div class="secret-box">📐 আট নীতি মানে আট প্রশ্ন — বাড়লে, ভাঙলে, চুরি, ধীর, বদল, দাম, নমনীয়তা, ভাগ; প্রশ্ন করতে জানলেই ডিজাইন শেখা।</div>`,
  senior: {
    title: "ডিজাইন নীতি — দ্রুত গাইড",
    body: "<p><strong>৮ নীতি:</strong> scalability (বৃদ্ধি-সামলানো), reliability (বিপর্যয়-সামলানো), security (encryption+access control), performance (bottleneck আগে-ধরা), maintainability (বদল নিরাপদ রাখা), cost (ক্ষমতা-বনাম-খরচ ভারসাম্য), flexibility+modularity (বদলে না-ভাঙা ভাগ)। <strong>ব্যবহার:</strong> প্রতিটা ডিজাইন-সিদ্ধান্তকে এই আট প্রশ্নে ছেঁকে দেখো।</p>"
  }
});

doors.push({
  num: 2,
  icon: "🏗️",
  color: "#60a5fa",
  name: "স্কেলের ইট",
  subtitle: "System Design Finally Makes Sense",
  tech: "Client-server → load balancer → cache → SQL/NoSQL → microservices → sync/async messaging",
  spirit: "বন্যান — ইটে ইট বাঁধা, ধাপে ধাপে",
  secret: "স্কেলের গল্প একটাই সিঁড়ি — এক সার্ভার ফেল করলো LB, বারবার-পড়া ডেটা কষ্ট দিলো cache, ডেটা যখন বিশাল SQL+NoSQL দুই হাত, কোড যখন দৈত্য microservices, আর সেবার গলায় গলায় জোড় sync-এর বিপদে async।",
  recall: {
    q: "Load balancer, cache আর microservices — প্রত্যেকে কোন সমস্যার উত্তর?",
    qen: "Which problem does each solve: load balancer, cache, microservices?",
    a: "Load balancer = এক সার্ভারের বটলনেক — ট্রাফিক কয়েক সার্ভারে ভাগ, একটা মরলে বাকিরা চালায় (দোকানের একাধিক কাউন্টার)। Cache = বারবার-চাওয়া ডেটা প্রতিবার DB থেকে টানার দামিনা — in-memory-তে রেখে তাৎক্ষণিক ফেরত (দায়: freshness/consistency)। Microservices = এক-দৈত্য-কোডবেসে দল পরস্পরকে আটকায় — সেবা-ভাগে প্রত্যেকে স্বাধীন ডেভেলপ/ডিপ্লয়/স্কেল।",
    aen: "LB solves the single-server bottleneck; cache solves repeated expensive reads; microservices solve the monolith where teams block each other."
  },
  story: `<p class="scene-setting">প্রায় সব সিস্টেমের গল্প একই দিয়ে শুরু — client-server। তারপর ইউজার আসে, আর সাথে নিয়ে আসে সমস্যার সিঁড়ি। শিক্ষকের এই ভিডিওটা প্লেলিস্টের মেরুদণ্ড: প্রতিটা বিল্ডিং ব্লক কেন এলো, তার আগের ধাপের যন্ত্রণা ব্যাখ্যা করে।</p>
<p class="scene-setting en">Nearly every system starts the same way — client-server. Then users arrive, bringing a ladder of problems. This video is the playlist's backbone: each building block explained by the pain of the step before it.</p>
<div class="diagram">
<div class="diag-title">স্কেলের সিঁড়ি — শিক্ষকের চিত্র</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="15" y="25" width="100" height="60" rx="10"/>
  <text class="lbl" x="65" y="50" text-anchor="middle">CLIENT</text>
  <text class="lbl-sm" x="65" y="70" text-anchor="middle">ব্রাউজার/অ্যাপ</text>
  <rect class="cell-hot" x="135" y="25" width="105" height="60" rx="10"/>
  <text class="lbl-hot" x="187" y="50" text-anchor="middle">LOAD BALANCER</text>
  <text class="lbl-sm" x="187" y="70" text-anchor="middle">ট্রাফিক-বাটকার</text>
  <rect class="cell" x="260" y="10" width="90" height="42" rx="10"/>
  <text class="lbl-sm" x="305" y="30" text-anchor="middle">সার্ভার ১</text>
  <rect class="cell" x="260" y="60" width="90" height="42" rx="10"/>
  <text class="lbl-sm" x="305" y="80" text-anchor="middle">সার্ভার ২</text>
  <rect class="cell-cyan" x="370" y="25" width="85" height="60" rx="10"/>
  <text class="lbl-cyan" x="412" y="50" text-anchor="middle">CACHE</text>
  <text class="lbl-sm" x="412" y="70" text-anchor="middle">দ্রুত-স্মৃতি</text>
  <rect class="cell-leaf" x="475" y="25" width="70" height="60" rx="10"/>
  <text class="lbl-leaf" x="510" y="50" text-anchor="middle">DB</text>
  <text class="lbl-sm" x="510" y="70" text-anchor="middle">SQL+NoSQL</text>
  <text class="lbl-sm" x="280" y="125" text-anchor="middle">আর ভেতরে পেছনে: MICROSERVICES — users/payments/notifications আলাদা সেবা</text>
  <text class="lbl-sm" x="280" y="150" text-anchor="middle">সেবা-সেবার কথা: sync (সহজ, বিপদপূর্ণ — বিলম্ব পুরো সিস্টেমে ছড়ায়)</text>
  <text class="lbl-sm" x="280" y="175" text-anchor="middle">বনাম async-মেসেজিং (সারির ভার, বিলম্ব সহনীয়, সিস্টেম স্বাধীন)</text>
</svg>
<div class="diag-cap">প্রতিটা ব্লক আসে আগেরটার যন্ত্রণা মেটাতে — সিঁড়ি ভাঙলে কোথায় দাঁড়িয়ে আছ সেটাই বলে দেয়।</div>
</div>
<div class="code-block">ধাপে ধাপে যন্ত্রণা ও প্রতিকার:

১. এক সার্ভারে থাকলে — রিকোয়েস্ট জমে,
   রেসপন্স ধীর, ফেলিওর বাড়ে
   → LOAD BALANCER: সামনে বসে ট্রাফিক ভাগ;
     একজন নামলে সুস্থদের কাছে রুট
     (দোকানে এক কাউন্টারে লাইনের বদলে কয়েকটা)

২. কয়েক সার্ভারেও একই ডেটা বারবার DB
   থেকে টানা — দামি
   → CACHE: ঘন-চাওয়া ডেটা in-memory-তে;
     সোশ্যাল অ্যাপ খুললেই কনটেন্ট হাজির —
     পেছনে সেটাই cache। দায়: টাটকা রাখা
     (freshness, consistency)

৩. ডেটা নিজেই যখন পাহাড় —
   SQL: স্ট্রাকচার্ড, শক্ত-consistency
        (অ্যাকাউন্ট, লেনদেন)
   NoSQL: নমনীয়, অনুভূমিক-স্কেল
   বাস্তবে দুটোই পাশাপাশি — যার কাজ তার ডেটা

৪. কোডবেস যখন দৈত্য — পরিবর্তন ধীর,
   ডিপ্লয় ঝুঁকি, দলে-দলে অবরোধ
   → MICROSERVICES: users/payments/
     notifications আলাদা সেবা; আলাদা
     ডেভেলপ-ডিপ্লয়-স্কেল

৫. সেবার মধ্যে কথা — SYNC: সহজ কিন্তু
   বোতাম-বিপদ; এক সেবার বিলম্ব পুরো
   শৃঙ্খলে ধসা টানে
   → ASYNC মেসেজিং: সারিতে রেখে আলাদা
     চলা — একজন ধীর হলে সিস্টেম থামে না</div>
<div class="secret-box">🏗️ প্রতিটা ব্লক আগের ধাপের যন্ত্রণার উত্তর — সিঁড়ির ধাপ না চিনলে সিঁড়ি বোঝা যায় না।</div>`,
  senior: {
    title: "বিল্ডিং ব্লক — দ্রুত গাইড",
    body: "<p><strong>সিঁড়ি:</strong> client-server → LB (ট্রাফিক-ভাগ+health-routing) → cache (ঘন-ডেটা in-memory; freshness-দায়) → SQL+NoSQL মিশ্র (structured-consistent বনাম flexible-h scalable) → microservices (সেবা-ভাগ, স্বাধীন ডেভেলপ/ডিপ্লয়) → sync-এর cascade-বিপদ → async-মেসেজিং (queue, আলাদা-চলা)। <strong>নিয়ম:</strong> প্রতিটা কম্পোনেন্টকে জিজ্ঞেস করো — সে কোন যন্ত্রণা মেটাচ্ছে?</p>"
  }
});

doors.push({
  num: 3,
  icon: "🌍",
  color: "#60a5fa",
  name: "প্রোডাকশনের ময়দান",
  subtitle: "Why Code Works Locally but Fails for Real Users",
  tech: "Production reality: unpredictable users, environment gaps, scale/concurrency, real data messiness",
  spirit: "তাগলিয়া — পরীক্ষার ময়দানে জ্ঞানের হাজিরা",
  secret: "works on my machine মানে কোড ভালো কিন্তু জগৎ অন্যরকম — ইউজার অপ্রত্যাশিত, এনভায়রনমেন্ট আলাদা, লোড হাজারগুণ, ডেটা অগোছালো; প্রোডাকশন কোডের আসল পরীক্ষক।",
  recall: {
    q: "'It works on my machine'-এর পেছনে অন্তত তিনটা আলাদা কারণ কী?",
    qen: "Name three distinct causes behind 'it works on my machine'.",
    a: "১) ইউজার-অপ্রত্যাশিত: রিয়েল ব্যবহারকারী এমন ডেটা-ঢোকান ও এমন পথে চলে যা কোনো টেস্ট-কেস ভাবেনি। ২) এনভায়রনমেন্ট-ফারাক: OS, লাইব্রেরি-ভার্সন, কনফিগ, ডেটার আকার, নেটওয়ার্ক-লেটেন্সি — লোকাল আর প্রোডাকশন দুই জগৎ। ৩) স্কেল/কনকারেন্সি: লোকালে একবার ক্লিক, প্রোডাকশনে হাজারো মানুষ একসাথে — DB-চাপ, মেমরি, লকিং সব বদলে যায়।",
    aen: "1) Unpredictable users and data no test case imagined. 2) Environment gaps — OS, library versions, configs, data size, latency. 3) Scale and concurrency — thousands of simultaneous users change database pressure, memory, and locking behavior."
  },
  story: `<p class="scene-setting">প্রতিটা ডেভেলপারের জীবনে একদিন আসে: কোড লোকালে নিখুঁত, টেস্ট সবুজ, ডিপ্লয় করলে — বাগ-রিপোর্ট, পারফরম্যান্স-সমস্যা, অ্যালার্টের বন্যা। আর সেই চিরকালের লাইনটা ভেসে ওঠে: "it works on my machine"। শিক্ষক ব্যাখ্যা করেন — কথাটা বোকামি নয়, একটা গভীর সত্যের সংকেত।</p>
<p class="scene-setting en">Every developer's day comes: code perfect locally, tests green, deploy — then bug reports, performance issues, firing alerts. And the eternal line: "it works on my machine". The teacher explains — it is not stupidity; it signals a deep truth.</p>
<div class="code-block">প্রোডাকশন = যেখানে কোড আর শুধু কোড থাকে না:
  রিয়েল ইউজার, রিয়েল ডেটা, রিয়েল ট্রাফিক,
  রিয়েল বিজনেস-প্রভাব নির্ভর করছে তার উপর।

কেন লোকাল আর প্রোডাকশন দুই জগৎ:

১. ইউজার অপ্রত্যাশিত
   ডেভে তুমি ধরে নিয়েছো কীভাবে ব্যবহার
   হবে; রিয়েল ইউজার সেই স্ক্রিপ্ট পড়ে না —
   অদ্ভুত ইনপুট, ভাবা-না-পথ, edge-case
   যা কোনো টেস্ট-সিনারিও ঢেকেনি।
   সেরা টেস্ট-ডেটাও রিয়েল-ডেটার
   অগোছালো বৈচিত্র্যের কাছাকাছি যায় না।

২. এনভায়রনমেন্ট আলাদা জগৎ
   তোমার মেশিন: নির্দিষ্ট OS, নির্দিষ্ট
   ডেটাবেস-ভার্সন, সামান্য ডেটা, শূন্য ট্রাফিক।
   প্রোডাকশন: ভিন্ন OS/কনফিগ, বিশাল
   ডেটাসেট, নেটওয়ার্ক-লেটেন্সি, হাজারো
   একসাথে-ইউজার। লাইব্রেরি-ভার্সনের ছোট্ট
   ফারকও আচরণ বদলে দেয়।

৩. স্কেল আর কনকারেন্সি
   লোকালে বাটন ক্লিক করলে একটা রিকোয়েস্ট;
   প্রোডাকশনে সেই বাটনে হাজারো আঙুল
   একসাথে — কনকারেন্সি, DB-চাপ, মেমরি,
   লকিং, পারফরম্যান্স সবই অন্যরকম খেলা।</div>
<div class="callout tip"><span class="co-icon">🌍</span><div><strong>দরজার সেতু:</strong> দরজা ১-এর নীতিগুলো এখানে রক্তমাংস পায় — reliability নীতির জন্ম এখানকার ফেলিওরে, performance-এর জন্ম বটলনেকে, scalability-র জন্ম সেই হাজার-আঙুলের ক্লিকে। <strong>প্রোডাকশনকে ভয় পেয়ো না — তাকে বুঝে ডিজাইন করো; পরের দরজায় ঠিক সেটাই করবে WhatsApp।</strong></div></div>
<div class="secret-box">🌍 মেশিনে কোড চলে, জগতে সিস্টেম — ইউজার, এনভায়রনমেন্ট, স্কেল: তিন ফাঁক বুঝলেই প্রোডাকশন প্রিয় হয়ে ওঠে।</div>`,
  senior: {
    title: "প্রোডাকশন-গ্যাপ — দ্রুত গাইড",
    body: "<p><strong>তিন ফাঁক:</strong> ইউজার-অপ্রত্যাশিত (edge-case, অগোছালো-ডেটা), এনভায়রনমেন্ট-ফারাক (OS/ভার্সন/কনফিগ/ডেটা-আকার/লেটেন্সি), স্কেল-কনকারেন্সি (হাজারো-একসাথে-ইউজার → DB-চাপ/মেমরি/লকিং)। <strong>মন্ত্র:</strong> প্রোডাকশন = রিয়েল ইউজার+ডেটা+ট্রাফিক+বিজনেস-নির্ভরতা; ডিজাইন শুরু করো এই বাস্তবতা থেকেই — লোকাল-সবুজ তার শুরু মাত্র।</p>"
  }
});
