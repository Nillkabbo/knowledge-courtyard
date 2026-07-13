// ════════════════════════════════════════
// মিশিগান ড্রাইভিং গাইড — DOORS 1-5
// Michigan Driving Guide: License → Speed
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: GRADUATED DRIVER LICENSING ══
doors.push({
  num:1, icon:"📄", color:"#fbbf24", name:"লাইসেন্সের সিঁড়ি",
  subtitle:"The Licensing Ladder", tech:"Graduated Driver Licensing (GDL) System",
  secret:"Michigan-এ লাইসেন্স এক ধাপে হয় না। তিন ধাপে হয় — Segment 1 → Learner License → Segment 2 → Provisional License → Full License। প্রতিটা ধাপে নির্দিষ্ট বয়স, ঘণ্টা, এবং সময় লাগে। এই সিঁড়ি পার হলে তুমি full driver।",
  recall:{
    q:"GDL সিস্টেম কেন তিন ধাপে ভাগ করা হয়েছে?",
    qen:"Why is the GDL system divided into three steps?",
    a:"কারণ একদিনে কেউ নিরাপদ চালক হয় না। ধাপে ধাপে শিখতে হয়। প্রথমে supervised (কারো সাথে), তারপর alone (কিছু restriction সহ), তারপর full। এই পদ্ধতিতে accident rate কমে — বিশেষ করে কিশোর-কিশোরীদের মধ্যে।",
    aen:"Because nobody becomes a safe driver overnight. You learn step by step. First supervised (with someone), then alone (with restrictions), then full. This system reduces accident rates — especially among teens."
  },
  story:`
<p class="scene-setting">প্রথম অধ্যায়। তুমি Michigan Secretary of State (SOS) office-এ দাঁড়িয়ে। সামনে একটা কাউন্টার, পেছনে বসে আছেন একজন SOS কর্মকর্তা — পোশাকে সোনালি ব্যাজ। তাঁর হাতে একটা ফর্ম, মুখে পেশাদার হাসি। এসির ঠান্ডা বাতাস, কাগজের খসখস, দূরে কারো জুতোর শব্দ।</p>
<p class="scene-setting en">The first chapter. You stand at the Michigan Secretary of State (SOS) office. Before you: a counter, behind it an SOS officer — golden badge on uniform. A form in hand, professional smile. AC cold air, paper rustle, distant footsteps.</p>

<div class="dialogue">"Michigan-এ লাইসেন্স পাওয়া একটা সিঁড়ির মতো," কর্মকর্তা বললেন। "তিনটা ধাপ। প্রতিটা ধাপে তুমি আরও একটু বড় হও — একজন চালক হিসেবে। চলো, আমি তোমাকে পুরো সিঁড়ি দেখাই।"</div>
<div class="dialogue en">"Getting a license in Michigan is like a staircase," the officer said. "Three steps. At each step, you grow a little more — as a driver. Let me show you the whole staircase."</div>

<div class="code-block">MICHIGAN GRADUATED DRIVER LICENSING (GDL) — ৩ ধাপ:

— — — — — — — — — — — — — — — — — — — — — —
ধাপ ১: SEGMENT 1 DRIVER EDUCATION (বয়স ১৪ বছর ৮ মাস+)
— — — — — — — — — — — — — — — — — — — — — —

পূর্বশর্ত:
  ✦ বয়স কমপক্ষে ১৪ বছর ৮ মাস
  ✦ Parent/guardian consent
  ✦ Physical exam + vision test

Segment 1 Course (মাস্টার করতে হবে):
  📚 ২৪ ঘণ্টা classroom instruction
  🚗 ৬ ঘণ্টা behind-the-wheel driving
  👀 ৪ ঘণ্টা observation (অন্যকে চালাতে দেখা)

  → শেষে একটা written test পাশ করতে হবে
  → শেষে Segment 1 Certificate পাবে

— — — — — — — — — — — — — — — — — — — — — —
ধাপ ২: LEARNER LICENSE (বয়স ১৫+)
— — — — — — — — — — — — — — — — — — — — — —

Segment 1 শেষে SOS office-এ গিয়ে:
  ✦ Segment 1 Certificate জমা দাও
  ✦ Vision test দাও
  ✦ Knowledge test (written) দাও ← এটাই পারমিট পরীক্ষা!
  ✦ ফি দাও ($)

  → পাশ করলে Level 1 Learner License পাবে

LEARNER LICENSE RESTRICTIONS:
  ⚠️ শুধুমাত্র licensed adult (২১+ বছর) 
     সাথে বসে থাকলে চালাতে পারবে
  ⚠️ একা চালানো নিষেধ
  ⚠️ কমপক্ষে ৫০ ঘণ্টা supervised driving 
     (প্রতিটা weather + night condition-এ)
     parent এর সাথে করতে হবে
  ⚠️ crash-free + violation-free থাকতে হবে

— — — — — — — — — — — — — — — — — — — — — —
ধাপ ৩: SEGMENT 2 DRIVER EDUCATION
— — — — — — — — — — — — — — — — — — — — — —

পূর্বশর্ত:
  ✦ Learner License ছিল কমপক্ষে ৩ মাস
  ✦ কমপক্ষে ৩০ ঘণ্টা supervised driving সম্পন্ন
  ✦ কোনো crash বা violation নেই

Segment 2 Course:
  📚 ৬ ঘণ্টা classroom instruction only
  (no behind-the-wheel)

— — — — — — — — — — — — — — — — — — — — — —
ধাপ ৪: LEVEL 2 PROVISIONAL LICENSE (বয়স ১৬+)
— — — — — — — — — — — — — — — — — — — — — —

পূর্বশর্ত:
  ✦ Segment 2 সম্পন্ন
  ✦ কমপক্ষে ৫০ ঘণ্টা supervised driving 
     (১০ ঘণ্টা রাতে সহ)
  ✦ Learner License ছিল কমপক্ষে ৬ মাস
  ✦ কোনো crash বা violation নেই
  ✦ Road test (driving skills test) পাশ করো

  → পাশ করলে Level 2 Provisional License

LEVEL 2 RESTRICTIONS:
  ⚠️ একা চালাতে পারবে কিন্তু restrictions সহ
  ⚠️ রাত ১০টা — ভোর ৫টা পর্যন্ত চালানো নিষেধ
     (যদি না work/school/religious activity বা 
      parent/guardian সাথে থাকে)
  ⚠️ গাড়িতে ২১ বছরের কম বয়সী ১ জনের বেশি 
     passenger নিষেধ
     (exception: immediate family member বা 
      parent/guardian/licensed adult ২১+ সাথে থাকলে)

— — — — — — — — — — — — — — — — — — — — — —
ধাপ ৫: LEVEL 3 FULL LICENSE (বয়স ১৭+)
— — — — — — — — — — — — — — — — — — — — — —

পূর্বশর্ত:
  ✦ Level 2 ছিল কমপক্ষে ৬ মাস
  ✦ বয়স ১৭ বছর
  ✦ কোনো crash বা violation নেই

  → Automatic upgrade to Level 3 Full License
  → সব restrictions তুলে নেওয়া হয়
  → তুমি এখন full licensed driver!

— — — — — — — — — — — — — — — — — — — — — —
বয়স্কদের জন্য (১৮+ বছর):
— — — — — — — — — — — — — — — — — — — — — —

  ✦ GDL প্রযোজ্য নয়
  ✦ সরাসরি knowledge test + road test
  ✦ Temporary instruction permit নাও
  ✦ পাশ করলে সরাসরি full license</div>

<div class="dialogue">"একটা জিনিস মনে রাখো," কর্মকর্তা বললেন। "Knowledge test — সেটাই তোমার লেখিত পরীক্ষা। ৫০টা প্রশ্ন। ৪০টা পাশ করতে হবে (৮০%)। ট্রাফিক সাইন, সিগন্যাল, নিয়ম — সব থেকে। এই বই তোমাকে প্রস্তুত করবে।"</div>
<div class="dialogue en">"One thing to remember," the officer said. "The knowledge test — that's your written exam. 50 questions. Need 40 to pass (80%). Traffic signs, signals, rules — from everything. This book will prepare you."</div>

<div class="code-block">KNOWLEDGE TEST কমন প্রশ্ন — প্রস্তুতি:

❓ প্রশ্ন: Michigan-এ learner license-এর জন্য 
   ন্যূনতম বয়স কত?
✅ উত্তর: ১৪ বছর ৮ মাস (Segment 1 শুরুর জন্য)

❓ প্রশ্ন: Knowledge test-এ কতটা প্রশ্ন, 
   কতটা পাশ করতে হবে?
✅ উত্তর: ৫০টা প্রশ্ন, ৪০টা পাশ (৮০%)

❓ প্রশ্ন: Level 1 Learner License-এ চালানোর 
   শর্ত কী?
✅ উত্তর: ২১+ বছরের licensed adult সাথে বসে 
   থাকতে হবে। একা নিষেধ।

❓ প্রশ্ন: Supervised driving কত ঘণ্টা দরকার?
✅ উত্তর: কমপক্ষে ৫০ ঘণ্টা (১০ ঘণ্টা রাতে)

❓ প্রশ্ন: Level 2 Provisional License-এ রাতে 
   চালানোর নিয়ম কী?
✅ উত্তর: রাত ১০টা — ভোর ৫টা পর্যন্ত নিষেধ
   (work/school/religious exception ছাড়া)</div>

<div class="secret-box">📄 Michigan GDL: ৩ ধাপ — Segment 1 (১৪y ৮m) → Learner License (১৫+) → Segment 2 → Level 2 Provisional (১৬+) → Level 3 Full (১৭+)। Knowledge test: ৫০ প্রশ্ন, ৪০ পাশ (৮০%)।</div>`
});

// ══ DOOR 2: TRAFFIC SIGNS — SHAPES, COLORS, MEANINGS ══
doors.push({
  num:2, icon:"🚦", color:"#ef4444", name:"সাইনের ভাষা",
  subtitle:"The Language of Signs", tech:"Traffic Signs — Shapes, Colors, Meanings",
  secret:"সাইনের আকার আর রঙ দেখেই বুঝে ফেলো কী বলছে — লেখা পড়ার দরকার নেই। অষ্টভুজ লাল = STOP। ত্রিভুজ লাল = YIELD। হীরা হলুদ = warning। আয়ত সবুজ/সাদা = guide। রঙ + আকার = সাইনের পরিচয়।",
  recall:{
    q:"কেন সাইনের আকার আর রঙ দেখেই বোঝা যায়?",
    qen:"Why can you understand a sign just from its shape and color?",
    a:"কারণ প্রতিটা আকার আর রঙের নির্দিষ্ট অর্থ আছে। লাল অষ্টভুজ = STOP — দূর থেকেও চেনা যায়, বরফে ঢাকা থাকলেও আকার থেকে চেনা যায়। রঙ দেখে দ্রুত সিদ্ধান্ত নেওয়া যায় — লেখা পড়ার সময় নেই গাড়ি চালানোর সময়।",
    aen:"Because each shape and color has a specific meaning. Red octagon = STOP — recognizable from far, even covered in snow by shape. Color lets you decide fast — no time to read while driving."
  },
  story:`
<p class="scene-setting">দ্বিতীয় অধ্যায়। তুমি একটা রাস্তার মোড়ে দাঁড়িয়ে। চারদিকে নানা আকারের সাইন — লাল অষ্টভুজ, হলুদ হীরা, সাদা আয়ত, কমলা ত্রিভুজ। রাস্তার কিনারায় দাঁড়িয়ে আছেন একজন traffic instructor — কমলা ভেস্ট, ক্লিপবোর্ড হাতে, চোখে তীক্ষ্ণতা। গাড়ির ইঞ্জিনের শব্দ, বাতাসে ধুলো, দূরে হর্ন।</p>
<p class="scene-setting en">The second chapter. You stand at a street corner. Around you: signs of various shapes — red octagon, yellow diamond, white rectangle, orange triangle. At the roadside stands a traffic instructor — orange vest, clipboard in hand, sharp eyes. Engine sounds, dust in air, distant horn.</p>

<div class="dialogue">"সাইন পড়তে শেখো না — সাইন চিনতে শেখো," instructor বললেন। "গাড়ি চালানোর সময় তোমার কাছে সাইন পড়ার সময় নেই। আকার দেখে, রঙ দেখে সিদ্ধান্ত নাও। এটাই নিরাপদ।" তিনি প্রতিটা সাইন দেখিয়ে বললেন।</div>
<div class="dialogue en">"Don't learn to read signs — learn to recognize signs," the instructor said. "While driving, you don't have time to read. Decide from shape, from color. That's safe." He showed each sign.</div>

<div class="sign-gallery">
<div class="sign-item"><svg viewBox="0 0 120 120" width="80" height="80"><polygon points="36,4 84,4 116,36 116,84 84,116 36,116 4,84 4,36" fill="#c62828" stroke="#fff" stroke-width="5"/><polygon points="36,4 84,4 116,36 116,84 84,116 36,116 4,84 4,36" fill="none" stroke="#b71c1c" stroke-width="1"/><text x="60" y="52" text-anchor="middle" fill="#fff" font-family="Arial Black,sans-serif" font-weight="900" font-size="22" letter-spacing="1">STOP</text></svg><div class="sign-label">🔴 <strong>STOP</strong><br>সম্পূর্ণ থামো</div></div>

<div class="sign-item"><svg viewBox="0 0 100 90" width="76" height="68"><polygon points="50,5 95,82 5,82" fill="#c62828" stroke="#fff" stroke-width="4"/><polygon points="50,22 80,75 20,75" fill="#fff"/><text x="50" y="68" text-anchor="middle" fill="#c62828" font-family="Arial Black,sans-serif" font-weight="900" font-size="9">YIELD</text></svg><div class="sign-label">🔻 <strong>YIELD</strong><br>অন্যকে অগ্রাধিকার</div></div>

<div class="sign-item"><svg viewBox="0 0 80 96" width="60" height="72"><rect x="2" y="2" width="76" height="92" rx="3" fill="#fff" stroke="#222" stroke-width="2"/><text x="40" y="22" text-anchor="middle" fill="#222" font-family="Arial,sans-serif" font-weight="700" font-size="8">SPEED</text><text x="40" y="34" text-anchor="middle" fill="#222" font-family="Arial,sans-serif" font-weight="700" font-size="8">LIMIT</text><text x="40" y="68" text-anchor="middle" fill="#222" font-family="Arial,sans-serif" font-weight="900" font-size="32">55</text></svg><div class="sign-label">⬜ <strong>SPEED LIMIT</strong><br>সর্বোচ্চ ৫৫ mph</div></div>

<div class="sign-item"><svg viewBox="0 0 100 100" width="68" height="68"><polygon points="50,4 96,50 50,96 4,50" fill="#fdd835" stroke="#222" stroke-width="3"/><text x="50" y="60" text-anchor="middle" font-size="28">⚠️</text></svg><div class="sign-label">🟡 <strong>WARNING</strong><br>সতর্ক হও</div></div>

<div class="sign-item"><svg viewBox="0 0 80 72" width="64" height="58"><path d="M16,0 L64,0 L80,16 L80,72 L0,72 L0,16 Z" fill="#fdd835" stroke="#222" stroke-width="2"/><text x="40" y="26" text-anchor="middle" font-size="10">🚸</text><text x="40" y="48" text-anchor="middle" fill="#222" font-family="Arial,sans-serif" font-weight="700" font-size="6">SCHOOL</text></svg><div class="sign-label">🟡 <strong>SCHOOL ZONE</strong><br>২৫ mph</div></div>

<div class="sign-item"><svg viewBox="0 0 80 80" width="60" height="60"><rect x="2" y="2" width="76" height="76" rx="3" fill="#c62828" stroke="#fff" stroke-width="3"/><rect x="18" y="36" width="44" height="8" fill="#fff"/></svg><div class="sign-label">🟥 <strong>DO NOT ENTER</strong><br>এই রাস্তায় নয়</div></div>

<div class="sign-item"><svg viewBox="0 0 80 80" width="58" height="58"><circle cx="40" cy="40" r="36" fill="#c62828" stroke="#fff" stroke-width="3"/><text x="40" y="50" text-anchor="middle" font-size="24">↰</text><line x1="14" y1="66" x2="66" y2="14" stroke="#fff" stroke-width="5"/></svg><div class="sign-label">🚫 <strong>NO LEFT TURN</strong><br>নিষেধাজ্ঞা</div></div>

<div class="sign-item"><svg viewBox="0 0 100 100" width="68" height="68"><polygon points="50,4 96,50 50,96 4,50" fill="#e67e22" stroke="#222" stroke-width="3"/><text x="50" y="60" text-anchor="middle" font-size="24">🚧</text></svg><div class="sign-label">🟠 <strong>CONSTRUCTION</strong><br>দ্বিগুণ জরিমানা</div></div>

<div class="sign-item"><svg viewBox="0 0 80 50" width="60" height="38"><rect x="1" y="1" width="78" height="48" rx="2" fill="#27ae60"/><text x="40" y="22" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-weight="700" font-size="8">EXIT</text><text x="40" y="40" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-weight="900" font-size="16">12</text></svg><div class="sign-label">🟢 <strong>GUIDE</strong><br>দিক নির্দেশনা</div></div>

<div class="sign-item"><svg viewBox="0 0 80 50" width="60" height="38"><rect x="1" y="1" width="78" height="48" rx="2" fill="#2980b9"/><text x="40" y="36" text-anchor="middle" fill="#fff" font-size="22">🏥</text></svg><div class="sign-label">🔵 <strong>SERVICES</strong><br>হাসপাতাল, গ্যাস</div></div>
</div>

<div class="code-block">উপরের SVG সাইনগুলো মুখস্থ করো — আকার আর রঙ।

🔴 REGULATORY (আইনি):
  STOP (অষ্টভুজ লাল) → সম্পূর্ণ থামো, ৩ সেকেন্ড
  YIELD (ত্রিভুজ লাল) → অন্যকে অগ্রাধিকার দাও
  SPEED LIMIT (আয়ত সাদা) → সর্বোচ্চ গতি
  DO NOT ENTER (বর্গ লাল + সাদা দণ্ড) → ঢুকো না
  NO LEFT TURN (বৃত্ত লাল কাটা) → মোড় নিষেধ

🟡 WARNING (সতর্কতা):
  হীরা হলুদ → বাঁক, হরিণ, স্লিপারি, মার্জ, ঢাল
  পেডেস্ট্রিয়ান ক্রসিং → মানুষ রাস্তা পার হতে পারে

🟢 GUIDE (নির্দেশনা):
  আয়ত সবুজ → গন্তব্য, এক্সিট নম্বর
  আয়ত নীল → গ্যাস, হাসপাতাল, খাবার
  আয়ত বাদামি → পার্ক, রিক্রিয়েশন

🟠 CONSTRUCTION:
  হীরা কমলা → কাজ চলছে, দ্বিগুণ জরিমানা!
  কমলা ব্যারিকেড → রাস্তা বন্ধ

🚸 SCHOOL:
  পেন্টাগন হলুদ → ২৫ mph, শিশু সতর্ক</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল যা করবে না</div>STOP sign-এ ধীরে নামি (rolling stop) — এটা বেআইনি এবং বিপজ্জনক। সম্পূর্ণ থামতে হবে। চাকা যেন সম্পূর্ণ থামে। এটাকে California stop / Michigan stop বলে কথায় — কিন্তু আইন নয়। টেস্টে fail করবে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক যা করবে</div>STOP sign-এ সম্পূর্ণ থামো। চাকা স্থির। ৩ সেকেন্ড গণনা করো (one-thousand-one, one-thousand-two, one-thousand-three)। তারপর বাম-ডান-বাম দেখো। তারপর যাও। নিরাপদ।</div>
</div>

<div class="code-block">EXAM PATTERN QUESTIONS — Traffic Signs:

❓ লাল অষ্টভুজ (octagon) সাইন কী বোঝায়?
✅ STOP — সম্পূর্ণ থামো

❓ হলুদ হীরা (diamond) সাইন কী শ্রেণী?
✅ Warning sign — সতর্কতা

❓ উল্টানো ত্রিভুজ (triangle) লাল-সাদা সাইন কী?
✅ YIELD — অন্যকে অগ্রাধিকার দাও

❓ কমলা হীরা (diamond) সাইন কী বোঝায়?
✅ Construction zone — ধীরে চালাও, দ্বিগুণ জরিমানা

❓ সবুছে আয়ত সাইন কী শ্রেণী?
✅ Guide/information — দিক নির্দেশনা

❓ নীল আয়ত সাইন কী নির্দেশ করে?
✅ Services — গ্যাস, হাসপাতাল, খাবার

❓ বাদামি আয়ত সাইন কী?
✅ Recreation — পার্ক, historical site

❓ হলুদ পেন্টাগন (school shape) কী?
✅ School zone — ধীরে চালাও

❓ লাল বৃত্তে কাটা সাইন (circle) কী?
✅ Do Not / No — নিষেধাজ্ঞা

❓ "SPEED LIMIT 55" সাদা সাইন — কী মানে?
✅ সর্বোচ্চ ৫৫ mph — এর বেশি অবৈধ</div>

<div class="sign-gallery">
<div class="sign-item"><svg viewBox="0 0 120 120" width="100" height="100"><polygon points="36,4 84,4 116,36 116,84 84,116 36,116 4,84 4,36" fill="#c62828" stroke="#fff" stroke-width="5"/><text x="60" y="68" text-anchor="middle" fill="#fff" font-family="Arial Black,sans-serif" font-weight="900" font-size="28">STOP</text></svg><div class="sign-label">🛑 <strong>STOP SIGN</strong> — Octagon + Red<br>সম্পূর্ণ থামো, ৩ সেকেন্ড গোনো</div></div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Snowy Night</div>
<div class="scn-question">❓ তুমি রাতে চালাচ্ছো। বরফের ঝড়। একটা সাইন দেখা যাচ্ছে কিন্তু বরফে ঢাকা — শুধু আকার দেখা যাচ্ছে অষ্টভুজ। তুমি কী করবে?</div>
<div class="scn-answer">✅ সম্পূর্ণ থামো। আকার থেকে চিনেছ — STOP sign।</div>
<div class="scn-explain">এটাই আকারের শক্তি — বরফে লেখা না পড়লেও আকার থেকে বোঝা যায়। অষ্টভুজ শুধু STOP sign-এই ব্যবহার হয়। কোনো অন্য সাইনে নয়।</div>
</div>

<div class="secret-box">🚦 আকার + রঙ = সাইনের পরিচয়। অষ্টভুজ লাল = STOP, উল্টানো ত্রিভুজ = YIELD, হীরা হলুদ = warning, হীরা কমলা = construction, আয়ত সবুছে = guide। লেখা পড়ার দরকার নেই — আকার দেখেই বুঝে ফেলো।</div>`
});

// ══ DOOR 3: TRAFFIC SIGNALS & PAVEMENT MARKINGS ══
doors.push({
  num:3, icon:"🚥", color:"#22c55e", name:"আলোর নির্দেশ",
  subtitle:"The Command of Lights", tech:"Traffic Signals & Pavement Markings",
  secret:"ট্রাফিক লাইট শুধু লাল-হলুদ-সবুজ নয়। হলুদ মানে সতর্ক হও — থামার প্রস্তুতি। ফ্ল্যাশিং হলুদ = ধীরে যাও। ফ্ল্যাশিং লাল = STOP sign-এর মতো আচরণ করো। সড়ক দাগ — সলিড লাইন পার হওয়া নিষেধ, ড্যাশড লাইন পার হওয়া যায়।",
  recall:{
    q:"হলুদ আলো দেখলে কী করবে — থামবে না তাড়াতাড়ি যাবে?",
    qen:"What do you do at a yellow light — stop or rush through?",
    a:"হলুদ আলো মানে — থামার প্রস্তুতি নাও। যদি নিরাপদে থামতে পারো, থামো। যদি ইতিমধ্যে জংশনে ঢুকে পড়েছ, তবে যাও। কিন্তু তাড়াতাড়ি করে পার হওয়ার জন্য গ্যাস চাপা ঠিক নয়। হলুদ মানে সতর্ক, লাল মানে থামো।",
    aen:"Yellow light means — prepare to stop. If you can safely stop, stop. If you're already in the intersection, go. But speeding up to beat it is wrong. Yellow means caution, red means stop."
  },
  story:`
<p class="scene-setting">তৃতীয় অধ্যায়। তুমি একটা ট্রাফিক সিগন্যালের নিচে দাঁড়িয়ে। সামনে সড়ক — সাদা ও হলুদ দাগ, কিছু সলিড, কিছু ড্যাশড। পাশে দাঁড়িয়ে আছেন একজন driving examiner — কালো স্যুট, ক্লিপবোর্ডে চেকলিস্ট, চোখে পর্যবেক্ষণ। গাড়ির ব্রেকের শব্দ, এসির বাতাস, দূরে সাইরেন।</p>
<p class="scene-setting en">The third chapter. You stand under a traffic signal. Ahead: the road — white and yellow markings, some solid, some dashed. Beside you stands a driving examiner — black suit, checklist on clipboard, observation in eyes. Brake sounds, AC air, distant siren.</p>

<div class="dialogue">"সিগন্যাল শুধু লাল-সবুজ নয়," examiner বললেন। "প্রতিটা আলোর নির্দিষ্ট অর্থ আছে। আর রাস্তার দাগ — সেগুলো নীরব সাইন। প্রতিটা লাইন কিছু বলে। চলো শিখি।"</div>
<div class="dialogue en">"Signals aren't just red-green," the examiner said. "Each light has a specific meaning. And road markings — they're silent signs. Each line says something. Let's learn."</div>

<div class="sign-gallery">
<div class="sign-item"><svg viewBox="0 0 70 170" width="52" height="126"><rect x="8" y="4" width="54" height="162" rx="12" fill="#1a1a1a" stroke="#444" stroke-width="2"/><circle cx="35" cy="35" r="22" fill="#e74c3c"/><circle cx="35" cy="35" r="22" fill="url(#redglow)"/><defs><radialGradient id="redglow" cx="40%" cy="35%"><stop offset="0%" stop-color="#ff6b6b"/><stop offset="100%" stop-color="#c0392b"/></radialGradient></defs><circle cx="35" cy="85" r="22" fill="#333"/><circle cx="35" cy="135" r="22" fill="#333"/><text x="35" y="42" text-anchor="middle" fill="#fff" font-size="10" font-weight="900">STOP</text></svg><div class="sign-label">🔴 <strong>RED</strong><br>সম্পূর্ণ থামো</div></div>

<div class="sign-item"><svg viewBox="0 0 70 170" width="52" height="126"><rect x="8" y="4" width="54" height="162" rx="12" fill="#1a1a1a" stroke="#444" stroke-width="2"/><circle cx="35" cy="35" r="22" fill="#333"/><circle cx="35" cy="85" r="22" fill="url(#yelglow)"/><defs><radialGradient id="yelglow" cx="40%" cy="35%"><stop offset="0%" stop-color="#feca57"/><stop offset="100%" stop-color="#f1c40f"/></radialGradient></defs><circle cx="35" cy="135" r="22" fill="#333"/><text x="35" y="92" text-anchor="middle" fill="#8a7100" font-size="8" font-weight="900">CAUTION</text></svg><div class="sign-label">🟡 <strong>YELLOW</strong><br>থামার প্রস্তুতি</div></div>

<div class="sign-item"><svg viewBox="0 0 70 170" width="52" height="126"><rect x="8" y="4" width="54" height="162" rx="12" fill="#1a1a1a" stroke="#444" stroke-width="2"/><circle cx="35" cy="35" r="22" fill="#333"/><circle cx="35" cy="85" r="22" fill="#333"/><circle cx="35" cy="135" r="22" fill="url(#grnglow)"/><defs><radialGradient id="grnglow" cx="40%" cy="35%"><stop offset="0%" stop-color="#55efc4"/><stop offset="100%" stop-color="#27ae60"/></radialGradient></defs><text x="35" y="142" text-anchor="middle" fill="#004d00" font-size="10" font-weight="900">GO</text></svg><div class="sign-label">🟢 <strong>GREEN</strong><br>যাও — নিরাপদ হলে</div></div>
</div>

<div class="code-block">TRAFFIC SIGNALS — COMPLETE GUIDE
— — — — — — — — — — — — — — — — — — — — — —

🟢 GREEN LIGHT (সবুজ আলো)
  ✅ যাও — যদি রাস্তা পরিষ্কার থাকে
  ⚠️ জংশনে ঢোকার আগে বাম-ডান দেখো
  ⚠️ পেডেস্ট্রিয়ান থাকলে থামো
  ⚠️ বাম মোড় নিলে oncoming traffic কে 
     অগ্রাধিকার দাও

🟡 YELLOW LIGHT (হলুদ আলো)
  ⚠️ থামো — যদি নিরাপদে থামতে পারো
  ⚠️ যদি খুব কাছে, তবে যাও
  ❌ গ্যাস চেপে তাড়াতাড়ি করো না
  ❌ হলুদ দেখে accelerate করো না
  💡 হলুদ মানে — লাল আসছে, প্রস্তুত হও

🔴 RED LIGHT (লাল আলো)
  🛑 সম্পূর্ণ থামো
  🛑 STOP line এর আগে থামো
  🛑 জংশনে ঢুকো না
  ⚠️ Right turn on red — Michigan-এ যদি 
     কোনো সাইন না থাকে "NO TURN ON RED",
     তবে প্রথমে সম্পূর্ণ থামো, তারপর 
     নিরাপদ হলে ডানে মোড় নিতে পারো

🔴🟡 লাল+হলুদ একসাথে (কিছু সিগন্যালে)
  → সবুজ আসছে — প্রস্তুত হও, কিন্তু যাও না

— — — — — — — — — — — — — — — — — — — — — —
FLASHING SIGNALS
— — — — — — — — — — — — — — — — — — — — — —

🟡 FLASHING YELLOW (জ্বলছে-নিভছে হলুদ)
  → ধীরে করো, সতর্ক হও, যাও

🔴 FLASHING RED (জ্বলছে-নিভছে লাল)
  → STOP sign-এর মতো আচরণ করো
  → সম্পূর্ণ থামো, তারপর নিরাপদে যাও

🟢 FLASHING GREEN/ARROW (কিছু এলাকায়)
  → পেডেস্ট্রিয়ান crossing — সতর্ক হও

— — — — — — — — — — — — — — — — — — — — — —
ARROW SIGNALS (তীর চিহ্ন)
— — — — — — — — — — — — — — — — — — — — — —

🟢➡️ GREEN ARROW = সেই দিকে যাও — protected turn
  → Oncoming traffic থাকে না (লাল তাদের)
  → নিরাপদে মোড় নাও

🟡➡️ YELLOW ARROW = সেই দিকের protected turn 
  শেষ হচ্ছে
  → থামার প্রস্তুতি

🔴➡️ RED ARROW = সেই দিকে মোড় নেওয়া নিষেধ
  ❌ যদি না সাইন অনুমতি দেয়

— — — — — — — — — — — — — — — — — — — — — —
LANE SIGNALS (হাইওয়ে লেন নিয়ন্ত্রণ)
— — — — — — — — — — — — — — — — — — — — — —

🟢 GREEN ✓ = এই লেন খোলা — ব্যবহার করো
🟡 YELLOW ✕ = এই লেন বন্ধ হচ্ছে — বেরিয়ে যাও
🔴 RED ✕ = এই লেন বন্ধ — ঢুকো না</div>

<div class="code-block">PAVEMENT MARKINGS — সড়ক দাগ
— — — — — — — — — — — — — — — — — — — — — —

🟡 YELLOW LINES = ট্রাফিক ভাগ করে (opposite direction)
— — — — — — — — — — — — — — — — — — — — — —

  ━━━━━━━━ সলিড হলুদ ডাবল লাইন
    → দুই দিকের ট্রাফিক আলাদা
    → কোনো দিক থেকেই পার হওয়া নিষেধ
    → U-turn নিষেধ, পাস করা নিষেধ

  ━━━━━━━━ সলিড হলুদ সিঙ্গেল লাইন
    → এক দিক পার হওয়া নিষেধ (যে দিকে সলিড)
    → অন্য দিক পার হতে পারে যদি ড্যাশড হয়

  - - - - - ড্যাশড হলুদ লাইন
    → পার হওয়া যায় — নিরাপদ হলে পাস করো

⚪ WHITE LINES = একই দিকের লেন আলাদা করে
— — — — — — — — — — — — — — — — — — — — — —

  ━━━━━━━━ সলিড সাদা লাইন
    → লেন পরিবর্তন নিরুৎসাহিত
    → (যেমন expressway লেন সেপারেটর)

  - - - - - ড্যাশড সাদা লাইন
    → লেন পরিবর্তন করতে পারো — নিরাপদ হলে

  ━━━━━━━━ সলিড সাদা (চওড়া)
    → রাস্তার কিনারা — shoulder line
    → এই লাইনের ডানে চালাবে না (বাইরে)

— — — — — — — — — — — — — — — — — — — — — —
SPECIAL MARKINGS
— — — — — — — — — — — — — — — — — — — — — —

  ▓▓▓▓▓ PAINTED ISLAND (ত্রিভুজ এলাকা)
    → এখানে চালাবে না বা দাঁড়াবে না

  ⊥⊥⊥⊥⊥ STOP LINE (সলিড সাদা প্রশস্ত লাইন)
    → এই লাইনে থামো — সামনে নয়

  🚸 CROSSWALK (সাদা স্ট্রাইপ)
    → পেডেস্ট্রিয়ান পথ
    → এখানে থামো যদি কেউ থাকে
    → সবসময় পেডেস্ট্রিয়ান অগ্রাধিকার

  ↻ HOV LANE (Diamond symbol)
    → High-Occupancy Vehicle lane
    → ২+ জন থাকলে চালাতে পারবে</div>

<div class="sign-visual" style="white-space:normal;text-align:left">
<div class="sign-title" style="margin-bottom:.8rem">📏 PAVEMENT MARKINGS — Visual Reference</div>

<div style="margin:.6rem 0">
<div class="pm-double-yellow"></div>
<span style="font-size:.72rem;color:var(--ink-dim)">▔▔▔ ডাবল সলিড হলুদ — পার হওয়া নিষেধ (দুই দিক)</span>
</div>
<div style="margin:.6rem 0">
<div class="pm-solid-yellow"></div>
<span style="font-size:.72rem;color:var(--ink-dim)">─── সলিড হলুদ — এক দিক পার নিষেধ</span>
</div>
<div style="margin:.6rem 0">
<div class="pm-dashed-yellow"></div>
<span style="font-size:.72rem;color:var(--ink-dim)">- - - ড্যাশড হলুদ — পার হওয়া যায় (নিরাপদ হলে)</span>
</div>
<div style="margin:.6rem 0">
<div class="pm-solid-white"></div>
<span style="font-size:.72rem;color:var(--ink-dim)">─── সলিড সাদা — লেন পরিবর্তন নিরুৎসাহিত</span>
</div>
<div style="margin:.6rem 0">
<div class="pm-dashed-white"></div>
<span style="font-size:.72rem;color:var(--ink-dim)">- - - ড্যাশড সাদা — লেন পরিবর্তন করতে পারো</span>
</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Yellow Light Dilemma</div>
<div class="scn-question">❓ তুমি ৪৫ mph-এ চালাচ্ছো। সামনে হলুদ আলো। তুমি জংশন থেকে ~৫০ ফুট দূরে। পেছনে একটা গাড়ি খুব কাছে। কী করবে?</div>
<div class="scn-answer">✅ ধীরে, smoothly ব্রেক করো। থামো STOP line-এ।</div>
<div class="scn-explain">৫০ ফুট মানে তোমার থামার সময় আছে। পেছনের গাড়ি কাছে — তাই suddenly ব্রেক নয়, smoothly। হলুদ দেখে গ্যাস চাপাটা ঠিক নয় — লাল আসছে।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Flashing Lights</div>
<div class="scn-question">❓ রাত ২টায় তুমি একটা intersection-এ। কোনো গাড়ি নেই। তোমার সিগন্যাল ফ্ল্যাশিং লাল। অন্য দিকের সিগন্যাল ফ্ল্যাশিং হলুদ। কী করবে?</div>
<div class="scn-answer">✅ তুমি সম্পূর্ণ থামো (STOP sign-এর মতো)। অন্য দিক ধীরে যাবে (caution)। তুমি yield দাও।</div>
<div class="scn-explain">ফ্ল্যাশিং লাল = STOP sign। ফ্ল্যাশিং হলুদ = caution, যাও কিন্তু সতর্ক। তোমার লাল — তুমি থামো।</div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল</div>হলুদ আলো দেখে গ্যাস চাপো — যত দ্রুত সম্ভব পার হওয়ার চেষ্টা। এটা বিপজ্জনক। পেছনের গাড়ি ধাক্কা দিতে পারে, পেডেস্ট্রিয়ান থাকতে পারে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক</div>হলুদ আলো দেখে যদি নিরাপদে থামতে পারো (পেছনে গাড়ি খুব কাছে না থাকলে), ধীরে ব্রেক করো। যদি ইতিমধ্যে জংশনে ঢুকে থাকো, তবে নিরাপদে পার হও।</div>
</div>

<div class="code-block">EXAM PATTERN QUESTIONS — Signals & Markings:

❓ হলুদ আলো দেখলে কী করবে?
✅ থামার প্রস্তুতি নাও। যদি নিরাপদে থামতে 
   পারো, থামো।

❓ ফ্ল্যাশিং লাল আলো কীভাবে আচরণ করবে?
✅ STOP sign-এর মতো — সম্পূর্ণ থামো, তারপর যাও।

❓ ফ্ল্যাশিং হলুদ আলো কী করবে?
✅ ধীরে করো, সতর্ক হও, যাও।

❓ ডাবল সলিড হলুদ লাইন কী বোঝায়?
✅ কোনো দিক থেকেই পার হওয়া নিষেধ।

❓ ড্যাশড হলুদ লাইন কী?
✅ নিরাপদ হলে পার হওয়া যায় (পাস করা যায়)।

❓ সাদা লাইন কী নির্দেশ করে?
✅ একই দিকের লেন আলাদা করে।

❓ Michigan-এ right turn on red কি আইনি?
✅ হ্যাঁ — যদি "NO TURN ON RED" সাইন না থাকে।
   প্রথমে সম্পূর্ণ থামো, তারপর নিরাপদে যাও।

❓ ক্রসওয়াকে পেডেস্ট্রিয়ান থাকলে কী করবে?
✅ থামো। পেডেস্ট্রিয়ান সবসময় অগ্রাধিকার পায়।

❓ কাটা লাল (✕) লেন সিগন্যাল কী?
✅ সেই লেন বন্ধ — ঢুকো না।

❓ সবুজ তীর (green arrow) কী মানে?
✅ Protected turn — সেই দিকে নিরাপদে যাও।</div>

<div class="secret-box">🚥 হলুদ = থামার প্রস্তুতি, ফ্ল্যাশিং লাল = STOP sign-এর মতো। সলিড লাইন = পার হওয়া নিষেধ, ড্যাশড = পার হওয়া যায়। হলুদ = opposite direction, সাদা = same direction।</div>`
});

// ══ DOOR 4: RIGHT-OF-WAY RULES ══
doors.push({
  num:4, icon:"🛑", color:"#f97316", name:"অগ্রাধিকারের নিয়ম",
  subtitle:"The Rules of Right-of-Way", tech:"Intersections, 4-Way Stops, Roundabouts",
  secret:"অগ্রাধিকার কার? এই প্রশ্নে ভুল করলে accident। মূল নিয়ম: যে আগে থামে সে আগে যায় (4-way stop)। বাম মোড় নিলে oncoming traffic কে অগ্রাধিকার। Roundabout-এ ভেতরের গাড়ি প্রথম। পেডেস্ট্রিয়ান সবসময় প্রথম। সন্দেহ হলে — অন্যকে দাও।",
  recall:{
    q:"চার-মুখী STOP sign-এ একসাথে ৪টা গাড়ি থামলে কে আগে যাবে?",
    qen:"At a 4-way stop, 4 cars stop at the same time — who goes first?",
    a:"যে আগে থামে সে আগে যায়। একই সময়ে থামলে — ডান দিকের গাড়ি প্রথম। এটাই 4-way stop-এর নিয়ম। কখনো সন্দেহ হলে — অন্যকে অগ্রাধিকার দাও। একটু দেরি করা ভালো, accident করা খারাপ।",
    aen:"Whoever stops first goes first. Same time — the car on the right goes first. That's the 4-way stop rule. If unsure — yield to others. A little delay is better than an accident."
  },
  story:`
<p class="scene-setting">চতুর্থ অধ্যায়। তুমি একটা ৪-মুখী intersection-এ। চার দিকে STOP sign। চারটা গাড়ি — প্রতিটা দিক থেকে একটা। সবাই থামলো। এখন কে আগে যাবে? পাশে আছেন driving instructor — শান্ত কণ্ঠ, পরিষ্কার নির্দেশ। গাড়ির ইঞ্জিন idle, হালকা বাতাস, দূরে কারো রেডিও।</p>
<p class="scene-setting en">The fourth chapter. You're at a 4-way intersection. STOP signs on all sides. Four cars — one from each direction. All stopped. Who goes first? Beside you is the driving instructor — calm voice, clear directions. Engine idle, light breeze, distant radio.</p>

<div class="code-block">RIGHT-OF-WAY — COMPLETE RULES
— — — — — — — — — — — — — — — — — — — — — —

🛑 4-WAY STOP (চার-মুখী STOP)
— — — — — — — — — — — — — — — — — — — — — —

  নিয়ম ১: যে প্রথম থামে, সে প্রথম যায়
    → First to stop = first to go

  নিয়ম ২: একই সময়ে থামলে — ডান দিকের গাড়ি 
    প্রথম
    → Tie → yield to the car on your RIGHT

  নিয়ম ৩: বিপরীত দিক থেকে একই সময়ে — 
    সোজা যাওয়া গাড়ি প্রথম
    → Straight traffic before turning

  নিয়ম ৪: সন্দেহ হলে — অন্যকে দাও
    → When in doubt, yield

— — — — — — — — — — — — — — — — — — — — — —
🚦 UNCONTROLLED INTERSECTION (কোনো সাইন/সিগন্যাল নেই)
— — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: ডান দিক থেকে আসা গাড়িকে অগ্রাধিকার দাও
    → Yield to traffic on the right

— — — — — — — — — — — — — — — — — — — — — —
🔄 ROUNDABOUT (গোলচক্কর)
— — — — — — — — — — — — — — — — — — — — — —

  নিয়ম ১: প্রবেশ করার আগে YIELD
    → Yield to traffic already IN the roundabout

  নিয়ম ২: বাম দিকে ঘুরো (counterclockwise)
    → Always go counterclockwise

  নিয়ম ৩: ভেতরে গতি = ১৫-২০ mph
    → Slow speed inside

  নিয়ম ৪: বের হওয়ার আগে signal দাও
    → Use right turn signal to exit

— — — — — — — — — — — — — — — — — — — — — —
↩️ LEFT TURN (বাম মোড়)
— — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: বাম মোড় নিলে oncoming (বিপরীত দিকের) 
    traffic কে অগ্রাধিকার দাও
    → Yield to oncoming traffic

  সবুজ আলো (solid, no arrow): 
    → বাম মোড় নিতে পারো কিন্তু oncoming কে দাও

  সবুজ তীর (green arrow):
    → Protected — oncoming লাল। নিরাপদে যাও।

— — — — — — — — — — — — — — — — — — — — — —
🚶 PEDESTRIANS (পথচারী)
— — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: পেডেস্ট্রিয়ান সবসময় অগ্রাধিকার পায়
    → Pedestrians ALWAYS have right-of-way

  • ক্রসওয়াকে কেউ থাকলে — থামো
  • ক্রসওয়াকে কেউ দাঁড়িয়ে থাকলেও — থামো
  • school zone-এ বিশেষ সতর্ক
  • blind/person with cane বা guide dog — সবসময়

— — — — — — — — — — — — — — — — — — — — — —
🚑 EMERGENCY VEHICLES (জরুরি গাড়ি)
— — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: জরুরি গাড়ি (police, fire, ambulance) 
    সাইরেন/লাইট নিয়ে আসলে — ডানে সরে যাও থামো
    → Pull over to the right and stop

  • সাইরেন শুনলে ডানে সরে যাও
  • জংশনে থাকলে জংশন পার হও, তারপর ডানে
  • বিপরীত দিকে থাকলেও সতর্ক হও

— — — — — — — — — — — — — — — — — — — — — —
🚌 SCHOOL BUS
— — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: স্কুল বাসে লাল আলো জ্বললে + STOP 
    arm বের হলে — উভয় দিক থেকে থামো
    → Stop from BOTH directions

  • হলুদ আলো জ্বলছে — ধীরে করো, থামার প্রস্তুতি
  • লাল আলো + STOP arm — সম্পূর্ণ থামো
  • বাস আবার চললে তবে তুমি যাও
  • ভুল করলে: $৫০০+ জরিমানা + license points

— — — — — — — — — — — — — — — — — — — — — —
🚜 FUNERAL PROCESSION
— — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: Funeral procession কে অগ্রাধিকার দাও
    → Yield to funeral processions
    → Headlight জ্বলা গাড়িগুলো</div>

<div class="sign-gallery">
<div class="sign-item"><svg viewBox="0 0 200 200" width="180" height="180">
<!-- Road background -->
<rect x="80" y="0" width="40" height="200" fill="#2a2a2a"/>
<rect x="0" y="80" width="200" height="40" fill="#2a2a2a"/>
<!-- Lane lines -->
<line x1="100" y1="0" x2="100" y2="70" stroke="#f1c40f" stroke-width="2" stroke-dasharray="8,6"/>
<line x1="100" y1="130" x2="100" y2="200" stroke="#f1c40f" stroke-width="2" stroke-dasharray="8,6"/>
<line x1="0" y1="100" x2="70" y2="100" stroke="#f1c40f" stroke-width="2" stroke-dasharray="8,6"/>
<line x1="130" y1="100" x2="200" y2="100" stroke="#f1c40f" stroke-width="2" stroke-dasharray="8,6"/>
<!-- Center intersection -->
<rect x="80" y="80" width="40" height="40" fill="#333"/>
<!-- STOP signs at each corner -->
<text x="72" y="76" font-size="10" fill="#c62828" font-weight="900">STOP</text>
<text x="130" y="76" font-size="10" fill="#c62828" font-weight="900">STOP</text>
<text x="72" y="138" font-size="10" fill="#c62828" font-weight="900">STOP</text>
<text x="130" y="138" font-size="10" fill="#c62828" font-weight="900">STOP</text>
<!-- Cars -->
<circle cx="100" cy="50" r="8" fill="#3498db"/><text x="93" y="54" font-size="7" fill="#fff">A</text>
<circle cx="150" cy="100" r="8" fill="#e74c3c"/><text x="143" y="104" font-size="7" fill="#fff">B</text>
<circle cx="100" cy="150" r="8" fill="#2ecc71"/><text x="93" y="154" font-size="7" fill="#fff">C</text>
<circle cx="50" cy="100" r="8" fill="#f39c12"/><text x="43" y="104" font-size="7" fill="#fff">D</text>
<!-- Labels -->
<text x="92" y="14" fill="#999" font-size="8">N</text>
<text x="92" y="194" fill="#999" font-size="8">S</text>
<text x="186" y="104" fill="#999" font-size="8">E</text>
<text x="4" y="104" fill="#999" font-size="8">W</text>
</svg><div class="sign-label">🛑 <strong>4-WAY STOP</strong><br>A আগে থামলে → A আগে যায়<br>টাই হলে → ডান দিকের গাড়ি প্রথম</div></div>
</div>

<div class="sign-gallery">
<div class="sign-item"><svg viewBox="0 0 200 200" width="170" height="170">
<!-- Roads -->
<rect x="85" y="0" width="30" height="200" fill="#2a2a2a"/>
<rect x="0" y="85" width="200" height="30" fill="#2a2a2a"/>
<!-- Roundabout circle -->
<circle cx="100" cy="100" r="40" fill="#333" stroke="#666" stroke-width="3"/>
<circle cx="100" cy="100" r="15" fill="#444"/>
<!-- Arrows showing counterclockwise flow -->
<path d="M 130 80 A 35 35 0 0 0 100 65" fill="none" stroke="#3498db" stroke-width="2" marker-end="url(#arr)"/>
<path d="M 70 120 A 35 35 0 0 0 100 135" fill="none" stroke="#3498db" stroke-width="2" marker-end="url(#arr)"/>
<defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#3498db"/></marker></defs>
<!-- Cars already inside -->
<circle cx="135" cy="100" r="6" fill="#2ecc71"/>
<circle cx="100" cy="135" r="6" fill="#2ecc71"/>
<!-- Car waiting to enter -->
<circle cx="100" cy="65" r="6" fill="#e74c3c"/>
<!-- YIELD text -->
<text x="75" y="60" font-size="7" fill="#e74c3c" font-weight="900">YIELD</text>
<!-- Labels -->
<text x="93" y="12" fill="#999" font-size="7">ENTER</text>
<text x="93" y="196" fill="#999" font-size="7">EXIT</text>
</svg><div class="sign-label">🔄 <strong>ROUNDABOUT</strong><br>ভেতরের গাড়ি = priority<br>তুমি yield করে ঢুকো<br>counterclockwise ঘুরো</div></div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — School Bus on Divided Highway</div>
<div class="scn-question">❓ তুমি একটা divided highway-তে চালাচ্ছো (মাঝে concrete barrier)। বিপরীত দিকে একটা স্কুল বাস থামল — লাল আলো + STOP arm। তোমাকে থামতে হবে কি?</div>
<div class="scn-answer">✅ না। Divided highway-তে physical barrier থাকলে বিপরীত দিকের ট্রাফিক থামতে হয় না। শুধু সেই দিক থামে যে দিকে বাস।</div>
<div class="scn-explain">⚠️ কিন্তু সাবধান — শুধুমাত্র physical divider (concrete, grass strip, raised island) থাকলেই exception। Painted lines = NOT divided। Painted line-এ দুই দিক থামো।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Ambulance Behind You</div>
<div class="scn-question">❓ তুমি একটা intersection-এ দাঁড়িয়ে — লাল আলো। পেছন থেকে ambulance সাইরেন নিয়ে আসছে। তুমি লাল আলো। কী করবে?</div>
<div class="scn-answer">✅ লাল আলো হলেও — ambulance কে জায়গা দাও। ধীরে ডানে সরে যাও।</div>
<div class="scn-explain">Emergency vehicle সবসময় priority। লাল আলোতে থামা থাকলেও — ধীরে সরে যাও। তবে সাবধানে — oncoming traffic দেখো।</div>
</div>

<div class="code-block">EXAM PATTERN QUESTIONS — Right-of-Way:

❓ 4-way stop-এ একই সময়ে ২টা গাড়ি থামলে 
   কে আগে যাবে?
✅ ডান দিকের গাড়ি প্রথম যায়।

❓ কোনো সাইন ছাড়া intersection-এ কাকে 
   অগ্রাধিকার দেবে?
✅ ডান দিক থেকে আসা গাড়িকে।

❓ বাম মোড় নিলে কাকে yield করবে?
✅ Oncoming (বিপরীত দিকের) traffic কে।

❓ Roundabout-এ কাকে yield করবে?
✅ ভেতরে already থাকা গাড়িকে।

❓ স্কুল বাস লাল আলো + STOP arm দেখালে 
   কী করবে?
✅ উভয় দিক থেকে সম্পূর্ণ থামো।

❓ জরুরি গাড়ি (ambulance) সাইরেন নিয়ে 
   আসলে কী করবে?
✅ ডানে সরে যাও, থামো।

❓ ক্রসওয়াকে পেডেস্ট্রিয়ান দাঁড়িয়ে থাকলে?
✅ থামো। পেডেস্ট্রিয়ান সবসময় অগ্রাধিকার।

❓ সবুজ তীর (arrow) ছাড়া solid green আলোতে 
   বাম মোড় নিলে?
✅ Oncoming traffic কে yield করো।

❓ Funeral procession দেখলে কী করবে?
✅ Yield করো — অগ্রাধিকার দাও।</div>

<div class="secret-box">🛑 অগ্রাধিকার: 4-way stop-এ যে আগে থামে সে আগে যায়। টাই হলে ডান দিক প্রথম। বাম মোড়ে oncoming কে yield। Roundabout-এ ভেতরের গাড়ি প্রথম। স্কুল বাস লাল = উভয় দিক থামো। পেডেস্ট্রিয়ান সবসময় প্রথম।</div>`
});

// ══ DOOR 5: SPEED LIMITS & PARKING ══
doors.push({
  num:5, icon:"🅿️", color:"#3b82f6", name:"গতি ও পার্কিং",
  subtitle:"Speed & Parking", tech:"Michigan Speed Laws & Parking Rules",
  secret:"Michigan speed limits: residential 25 mph, city/business 25-35, highway 55-70, school zone 25। Basic rule: drive at a speed safe for conditions। Snow/rain-এ speed limit এর চেয়ে ধীরে চালানো আইনি। Parking: fire hydrant 15ft, crosswalk 20ft, stop sign 30ft, railroad 50ft দূরে।",
  recall:{
    q:"Speed limit 55 থাকলেও কি বরফের মধ্যে 55 mph চালানো আইনি?",
    qen:"If speed limit is 55, is it legal to drive 55 in snow?",
    a:"না। Basic speed law বলে — condition অনুযায়ী নিরাপদ গতিতে চালাও। বরফ, বৃষ্টি, কুয়াশা — এসবের সময় speed limit এর চেয়ে ধীরে চালানো প্রয়োজন। যদি 55 অনিরাপদ হয়, তবে ধীরে চালানো আইনি বাধ্যবাধকতা। অনিরাপদ গতি = ticket।",
    aen:"No. The basic speed law says — drive at a speed safe for conditions. Snow, rain, fog — you must drive below the speed limit if unsafe at the limit. If 55 is unsafe, driving slower is legally required. Unsafe speed = ticket."
  },
  story:`
<p class="scene-setting">পঞ্চম অধ্যায়। তুমি একটা স্কুল জোনের পাশে দাঁড়িয়ে। সাইনে লেখা: "SPEED LIMIT 25 — SCHOOL DAYS"। পাশে আছেন instructor — ক্লিপবোর্ড, শান্ত কণ্ঠ। বাচ্চাদের হাসাহাসির শব্দ, গাড়ির ইঞ্জিন, শীতের ঠান্ডা বাতাস।</p>
<p class="scene-setting en">The fifth chapter. You stand near a school zone. Sign reads: "SPEED LIMIT 25 — SCHOOL DAYS." Beside you is the instructor — clipboard, calm voice. Children's laughter, car engines, winter cold air.</p>

<div class="code-block">MICHIGAN SPEED LIMITS — সম্পূর্ণ তালিকা
— — — — — — — — — — — — — — — — — — — — — —

🚗 MICHIGAN SPEED LIMITS (default যদি সাইন না থাকে):

  🏘️ Residential / Business District: 25 mph
  🚸 School Zone: 25 mph (সাইন থাকলে)
  🛣️ County/Local Road: 55 mph
  🛤️ Highway/Expressway: 70 mph (rural)
                          65 mph (urban)
  🚚 Trucks: 60 mph (expressway)

  ⚠️ সবসময় posted সাইন অনুসরণ করো
  ⚠️ সাইনের গতি সর্বোচ্চ — কখনো minimum নয়

— — — — — — — — — — — — — — — — — — — — — —
⚠️ BASIC SPEED LAW (সবচেয়ে গুরুত্বপূর্ণ)
— — — — — — — — — — — — — — — — — — — — — —

  "Drive at a careful and prudent speed 
   for conditions"

  অর্থাৎ: weather, traffic, road condition 
  অনুযায়ী গতি ঠিক করো

  ❄️ Snow/Ice: speed limit এর অনেক কম
  🌧️ Rain: speed limit এর কিছু কম
  🌫️ Fog: খুব ধীরে
  🚦 Traffic: traffic অনুযায়ী
  🔨 Construction: সাইন অনুযায়ী (double fine!)

  → Speed limit 55 হলেও snow-এ 30 mph 
    আইনি হতে পারে

— — — — — — — — — — — — — — — — — — — — — —
🚨 TOO FAST / TOO SLOW — উভয়ই বেআইনি
— — — — — — — — — — — — — — — — — — — — — —

  ❌ খুব দ্রুত: accident risk, ticket, points
  ❌ খুব ধীরে: traffic block, rear-end risk
     → minimum speed highway-এ আছে
     → খুব ধীরে চালালেও ticket

  💡 নিয়ম: traffic flow-এর সাথে চালাও
     কিন্তু speed limit পার করো না</div>

<div class="code-block">PARKING RULES — কোথায় পার্ক করবে, কোথায় নয়
— — — — — — — — — — — — — — — — — — — — — —
💺 SEATBELT LAW (সিটবেল্ট আইন)
— — — — — — — — — — — — — — — — — — — — — —

  ✦ ALL passengers সিটবেল্ট পরতে বাধ্য (front + back)
  ✦ PRIMARY enforcement — police শুধু সিটবেল্ট 
    না পরা দেখে থামাতে পারে
  ✦ Driver দায়ী — passenger না পরলে driver-এর fine
  ✦ Child (under 8 / under 4'9") = car seat বা booster
  ✦ Child (under 4) = rear-facing বা forward-facing 
    car seat (age/weight অনুযায়ী)

— — — — — — — — — — — — — — — — — — — — — —
🚫 NO PARKING (পার্ক করা নিষেদ্ধ):
— — — — — — — — — — — — — — — — — — — — — —

  ✗ Fire hydrant থেকে ১৫ ফুটের মধ্যে
  ✗ Crosswalk এর উপর বা ২০ ফুটের মধ্যে
  ✗ STOP sign / YIELD sign থেকে ৩০ ফুটের মধ্যে
  ✗ Railroad track থেকে ৫০ ফুটের মধ্যে
  ✗ Fire station entrance থেকে ২০ ফুটের মধ্যে
  ✗ Sidewalk এর উপর
  ✗ Bicycle lane-এ
  ✗ "NO PARKING" সাইন এলাকায়
  ✗ Disabled parking (permit ছাড়া)
  ✗ Intersection-এ

🅿️ PARKING RULES (পার্ক করার নিয়ম):
— — — — — — — — — — — — — — — — — — — — — —

  ✓ কার্বের ১ ফুটের মধ্যে (parallel parking)
  ✓ Downhill: চাকা কার্বের দিকে ঘুরাও (→right)
  ✓ Uphill: চাকা কার্ব থেকে দূরে ঘুরাও (→left)
  ✓ No curb + downhill: চাকা ডানে ঘুরাও
  ✓ Parking brake টানো
  ✓ গিয়ার Park (automatic) / Reverse (manual)

♿ DISABLED PARKING:
— — — — — — — — — — — — — — — — — — — — — —

  ✗ Disabled spot-এ permit ছাড়া পার্ক নিষেধ
  ✗ $৫০০ পর্যন্ত জরিমানা
  ✗ Disabled placard বা plate লাগবে
  ✗ Family member এরও নিজের placard লাগে</div>

<div class="hill-park">
<div class="hill-card">
<div class="hc-label">UPHILL (with curb)</div>
<div class="hc-icon">⛰️⬆️🚗</div>
<div class="hc-rule">চাকা ← <strong>বামে</strong><br>(কার্ব থেকে দূরে)</div>
<div class="hc-trick">UP = উপর দেখো<br>চাকা কার্ব থেকে দূরে</div>
</div>
<div class="hill-card">
<div class="hc-label">DOWNHILL (with curb)</div>
<div class="hc-icon">🚗⬇️⛰️</div>
<div class="hc-rule">চাকা → <strong>ডানে</strong><br>(কার্বের দিকে)</div>
<div class="hc-trick">DOWN = নিচ দেখো<br>চাকা কার্বের দিকে</div>
</div>
<div class="hill-card">
<div class="hc-label">NO CURB (either)</div>
<div class="hc-icon">🚗➡️🚧</div>
<div class="hc-rule">চাকা → <strong>ডানে</strong><br>(shoulder দিকে)</div>
<div class="hc-trick">কার্ব নেই → ডানে<br>রাস্তা ছেড়ে যাবে</div>
</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Snow + Speed Limit</div>
<div class="scn-question">❓ Speed limit সাইনে লেখা ৫৫ mph। কিন্তু ভারী বরফ পড়ছে, visibility কম। তুমি ৫৫ mph-এ চালাচ্ছ। এটা কি আইনি?</div>
<div class="scn-answer">✅ না। Basic Speed Law বলে — condition অনুযায়ী নিরাপদ গতিতে চালাও। ৫৫ mph বরফে অনিরাপদ। Ticket পেতে পারো।</div>
<div class="scn-explain">Speed limit সর্বোচ্চ — কিন্তু condition-এর জন্য আইনি নয়। বরফে ২৫-৩০ mph বা তার কম নিরাপদ হতে পারে। Police "too fast for conditions" টিকিট দিতে পারে।</div>
</div>

<div class="code-block">EXAM PATTERN QUESTIONS — Speed & Parking:

❓ Michigan-এ residential area speed limit কত?
✅ ২৫ mph।

❓ School zone-এ speed limit কত?
✅ ২৫ mph (সাইন থাকলে)।

❓ Highway/expressway-এ default speed limit?
✅ ৭০ mph (rural), ৬৫ mph (urban)।

❓ Basic speed law কী বলে?
✅ Weather ও condition অনুযায়ী নিরাপদ 
   গতিতে চালাও। Speed limit সর্বোচ্চ, minimum নয়।

❓ Construction zone-এ অতিরিক্ত গতির জরিমানা?
✅ দ্বিগুণ জরিমানা (double fine)।

❓ Fire hydrant থেকে কত দূরে পার্ক করতে হবে?
✅ কমপক্ষে ১৫ ফুট দূরে।

❓ Crosswalk থেকে কত দূরে পার্ক?
✅ কমপক্ষে ২০ ফুট।

❓ STOP sign থেকে কত দূরে পার্ক?
✅ কমপক্ষে ৩০ ফুট।

❓ Railroad track থেকে কত দূরে পার্ক?
✅ কমপক্ষে ৫০ ফুট।

❓ Downhill পার্ক করলে চাকা কোন দিকে?
✅ কার্বের দিকে (ডানে) ঘুরাও।

❓ Uphill পার্ক করলে চাকা কোন দিকে?
✅ কার্ব থেকে দূরে (বামে) ঘুরাও।

❓ Disabled parking-এ পার্ক করলে জরিমানা?
✅ $৫০০ পর্যন্ত।

❓ Snow-এ speed limit 55 থাকলে কতে চালাবে?
✅ Condition অনুযায়ী — ধীরে, যতটা নিরাপদ।</div>

<div class="secret-box">🅿️ Speed: residential 25, highway 70, school 25 mph। Basic speed law: condition অনুযায়ী চালাও। Parking: fire hydrant 15ft, crosswalk 20ft, stop sign 30ft, railroad 50ft দূরে। Downhill = চাকা ডানে, uphill = চাকা বামে। Construction = double fine!</div>`
});

// === MORE DOORS HERE ===
