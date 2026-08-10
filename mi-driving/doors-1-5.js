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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Speeding in School Zone:</strong> Driver did 35mph in a 25mph school zone — $200 ticket + 3 points. Fix: always slow down near schools.</div></div>


<div class="code-block">MICHIGAN GRADUATED DRIVER LICENSING (GDL) — ৩ ধাপ:

# — — — — — — — — — — — — — — — — — — — — — —
ধাপ ১: SEGMENT 1 DRIVER EDUCATION (বয়স ১৪ বছর ৮ মাস+)
# — — — — — — — — — — — — — — — — — — — — — —

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

# — — — — — — — — — — — — — — — — — — — — — —
ধাপ ২: LEARNER LICENSE (বয়স ১৪ বছর ৯ মাস+)
# — — — — — — — — — — — — — — — — — — — — — —

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

# — — — — — — — — — — — — — — — — — — — — — —
ধাপ ৩: SEGMENT 2 DRIVER EDUCATION
# — — — — — — — — — — — — — — — — — — — — — —

পূর্বশর্ত:
  ✦ Learner License ছিল কমপক্ষে ৩ মাস
  ✦ কমপক্ষে ৩০ ঘণ্টা supervised driving সম্পন্ন
  ✦ কোনো crash বা violation নেই

Segment 2 Course:
  📚 ৬ ঘণ্টা classroom instruction only
  (no behind-the-wheel)

# — — — — — — — — — — — — — — — — — — — — — —
ধাপ ৪: LEVEL 2 PROVISIONAL LICENSE (বয়স ১৬+)
# — — — — — — — — — — — — — — — — — — — — — —

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

# — — — — — — — — — — — — — — — — — — — — — —
ধাপ ৫: LEVEL 3 FULL LICENSE (বয়স ১৭+)
# — — — — — — — — — — — — — — — — — — — — — —

পূর্বশর্ত:
  ✦ Level 2 ছিল কমপক্ষে ৬ মাস
  ✦ বয়স ১৭ বছর
  ✦ কোনো crash বা violation নেই

  → Automatic upgrade to Level 3 Full License
  → সব restrictions তুলে নেওয়া হয়
  → তুমি এখন full licensed driver!

# — — — — — — — — — — — — — — — — — — — — — —
বয়স্কদের জন্য (১৮+ বছর):
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ GDL প্রযোজ্য নয় — driver's ed বাধ্যতামূলক নয়
  ✦ SOS office-এ vision test + knowledge test দাও
  ✦ পাশ করলে Temporary Instruction Permit (TIP)
    পাবে — ফি $25, ১৮০ দিন valid
  ✦ TIP নিয়ে কমপক্ষে ৩০ দিন supervised practice
    করতে হবে (licensed adult সাথে)
  ✦ তারপর road test — SOS নয়, approved third-party
    testing business-এ (ফি আলাদা, ~$50-100)
  ✦ পাশ করলে certificate নিয়ে SOS office-এ যাও
    → license ফি $25 → full license!

# — — — — — — — — — — — — — — — — — — — — — —
💵 REALISTIC COSTS (মোটামুটি হিসাব):
# — — — — — — — — — — — — — — — — — — — — — —

  Driver's Ed Segment 1 (teen): ~$300-500 (private)
  TIP / Learner permit fee: $25
  Road test (third-party): ~$50-100 (unregulated,
    জায়গাভেদে ভিন্ন — weekend-এ বেশি হতে পারে)
  Original license fee: $25</div>

<div class="rt-image">
<svg viewBox="0 0 460 250" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="250" fill="#111" rx="8"/>
<text x="230" y="22" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">🛣️ GDL JOURNEY — একই রাস্তা, তিনটা ধাপ</text>
<!-- road -->
<rect x="0" y="150" width="460" height="60" fill="#2a2a2a"/>
<line x1="0" y1="180" x2="460" y2="180" stroke="#f1c40f" stroke-width="3" stroke-dasharray="18,14" opacity=".7"/>
<!-- milestone signs -->
<rect x="52" y="96" width="4" height="54" fill="#8a6d3b"/><rect x="22" y="72" width="66" height="28" rx="4" fill="#27ae60"/><text x="55" y="84" text-anchor="middle" fill="#fff" font-size="8" font-weight="900">LEVEL 1</text><text x="55" y="95" text-anchor="middle" fill="#fff" font-size="10">১৪ বছর ৯ মাস</text>
<rect x="222" y="96" width="4" height="54" fill="#8a6d3b"/><rect x="192" y="72" width="66" height="28" rx="4" fill="#2980b9"/><text x="225" y="84" text-anchor="middle" fill="#fff" font-size="8" font-weight="900">LEVEL 2</text><text x="225" y="95" text-anchor="middle" fill="#fff" font-size="10">১৬ বছর</text>
<rect x="392" y="96" width="4" height="54" fill="#8a6d3b"/><rect x="362" y="72" width="66" height="28" rx="4" fill="#f39c12"/><text x="395" y="84" text-anchor="middle" fill="#fff" font-size="8" font-weight="900">LEVEL 3</text><text x="395" y="95" text-anchor="middle" fill="#333" font-size="10">১৭ বছর — FULL</text>
<!-- CAR 1: learner with adult -->
<g transform="translate(14,158)">
<rect x="0" y="0" width="82" height="30" rx="9" fill="#27ae60"/>
<rect x="12" y="4" width="58" height="14" rx="4" fill="#0e4429"/>
<circle cx="28" cy="12" r="6" fill="#ffd8a8"/><text x="28" y="15" text-anchor="middle" font-size="8">🧑</text>
<circle cx="54" cy="12" r="6" fill="#ffd8a8"/><text x="54" y="15" text-anchor="middle" font-size="8">🧔</text>
<circle cx="18" cy="32" r="7" fill="#000"/><circle cx="64" cy="32" r="7" fill="#000"/>
<rect x="66" y="-12" width="16" height="14" rx="2" fill="#fff"/><text x="74" y="-1" text-anchor="middle" fill="#c62828" font-size="11" font-weight="900">L</text>
</g>
<text x="55" y="216" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">২১+ adult পাশে বাধ্যতামূলক</text>
<text x="55" y="227" text-anchor="middle" fill="#7bed9f" font-size="7.5">একা চালানো নিষেধ · ৫০ ঘণ্টা practice</text>
<!-- CAR 2: alone + restrictions -->
<g transform="translate(184,158)">
<rect x="0" y="0" width="82" height="30" rx="9" fill="#2980b9"/>
<rect x="12" y="4" width="58" height="14" rx="4" fill="#0b3a5c"/>
<circle cx="28" cy="12" r="6" fill="#ffd8a8"/><text x="28" y="15" text-anchor="middle" font-size="8">🧑</text>
<circle cx="18" cy="32" r="7" fill="#000"/><circle cx="64" cy="32" r="7" fill="#000"/>
</g>
<text x="225" y="216" text-anchor="middle" fill="#74b9ff" font-size="7.5" font-weight="700">একা ✓ — কিন্তু 🌙 রাত ১০টা-৫টা নিষেধ*</text>
<text x="225" y="227" text-anchor="middle" fill="#74b9ff" font-size="7.5">২১-এর কম বয়সী passenger: মাত্র ১ জন</text>
<!-- CAR 3: full -->
<g transform="translate(354,158)">
<rect x="0" y="0" width="82" height="30" rx="9" fill="#f39c12"/>
<rect x="12" y="4" width="58" height="14" rx="4" fill="#7a4d00"/>
<circle cx="28" cy="12" r="6" fill="#ffd8a8"/><text x="28" y="15" text-anchor="middle" font-size="8">🧑</text>
<circle cx="18" cy="32" r="7" fill="#000"/><circle cx="64" cy="32" r="7" fill="#000"/>
<text x="74" y="-4" text-anchor="middle" font-size="12">✅</text>
</g>
<text x="395" y="216" text-anchor="middle" fill="#ffeaa7" font-size="7.5" font-weight="700">সব restriction শেষ</text>
<text x="395" y="227" text-anchor="middle" fill="#ffeaa7" font-size="7.5">Full licensed driver!</text>
<!-- arrows between -->
<path d="M 104 172 L 176 172" stroke="#666" stroke-width="2.5" marker-end="url(#gdlA)"/>
<path d="M 274 172 L 346 172" stroke="#666" stroke-width="2.5" marker-end="url(#gdlA)"/>
<defs><marker id="gdlA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#666"/></marker></defs>
<text x="140" y="164" text-anchor="middle" fill="#888" font-size="6.5">Seg 2 + ৫০ ঘণ্টা</text>
<text x="140" y="145" text-anchor="middle" fill="#888" font-size="6.5">+ Road Test</text>
<text x="310" y="164" text-anchor="middle" fill="#888" font-size="6.5">৬ মাস clean</text>
<text x="310" y="145" text-anchor="middle" fill="#888" font-size="6.5">record</text>
<text x="230" y="243" text-anchor="middle" fill="#777" font-size="10">*রাতের exception: work/school/religious activity বা parent সাথে থাকলে</text>
</svg>
<div class="rt-caption">তিনটা গাড়ি, তিনটা স্বাধীনতার স্তর — প্রতিটা ধাপে restriction কমে, দায়িত্ব বাড়ে</div>
</div>

<div class="dialogue">"একটা জিনিস মনে রাখো," কর্মকর্তা বললেন। "Knowledge test — সেটাই তোমার লেখিত পরীক্ষা। ৫০টা প্রশ্ন, দুই ভাগে: ২৫টা ট্রাফিক সাইন নিয়ে, ২৫টা ট্রাফিক নিয়ম নিয়ে। প্রতিটা ভাগে আলাদাভাবে কমপক্ষে ২০টা (৮০%) সঠিক করতে হবে — শুধু মোট ৪০/৫০ হলেই চলবে না, দুই ভাগেই আলাদা পাশ করতে হবে। এই বই তোমাকে প্রস্তুত করবে।"</div>
<div class="dialogue en">"One thing to remember," the officer said. "The knowledge test — that's your written exam. 50 questions, split into two sections: 25 on traffic signs, 25 on traffic rules. You need at least 20 correct (80%) in EACH section separately — 40/50 overall isn't enough if one section falls short. This book will prepare you."</div>

<div class="code-block">🏢 SOS OFFICE-এ যাওয়ার দিন — ব্যবহারিক প্রস্তুতি
# — — — — — — — — — — — — — — — — — — — — — —

  📄 সাথে যা নেবে:
  ✦ Identity: birth certificate বা valid passport
  ✦ Social Security proof (SSN card/W-2)
  ✦ Michigan residency-র ২টা প্রমাণ
    (utility bill, lease, bank statement...)
  ✦ Under 18 হলে: parent/guardian সাথে + সই
  💡 আগে online appointment নিলে লাইন বাঁচে

  👁️ VISION TEST — যা মাপা হয়:
  ✦ কমপক্ষে 20/40 acuity (এক বা দুই চোখে)
  ✦ Peripheral vision কমপক্ষে 110°
  ✦ চশমা/লেন্স দিয়ে পাশ করলে → license-এ
    "corrective lenses" restriction লেখা হবে —
    মানে চশমা ছাড়া চালানো বেআইনি

  💻 ONLINE KNOWLEDGE TEST (নতুন সুবিধা):
  ✦ ১৮+ আবেদনকারীরা এখন SOS-এর মাধ্যমে
    online-এও knowledge test দিতে পারে —
    ঘরে বসে! (SOS website-এ বিস্তারিত)

  😰 FAIL করলে কী হয়? — কিছুই ভয়ংকর না:
  ✦ আবার দেওয়া যায় — অপেক্ষা সামান্য
  ✦ যে section fail, শুধু সেটাই আবার
  ✦ বেশিরভাগ মানুষ ২য় বারে পাশ করে
  ✦ Fail = তথ্য: কোন টপিক দুর্বল, সেটা পড়ো</div>

<div class="code-block">KNOWLEDGE TEST কমন প্রশ্ন — প্রস্তুতি:

❓ প্রশ্ন: Michigan-এ learner license-এর জন্য 
   ন্যূনতম বয়স কত?
✅ উত্তর: ১৪ বছর ৮ মাস (Segment 1 শুরুর জন্য)

❓ প্রশ্ন: Knowledge test-এ কতটা প্রশ্ন,
   কতটা পাশ করতে হবে?
✅ উত্তর: ৫০টা প্রশ্ন — ২৫টা সাইন + ২৫টা নিয়ম,
   দুইটা ভাগ আলাদাভাবে স্কোর হয়। প্রতি ভাগে
   কমপক্ষে ২০টা (৮০%) সঠিক করতে হবে — একটা
   ভাগে কম হলে পুরো টেস্ট fail, শুধু সেই ভাগ
   আবার দিতে হয়।

❓ প্রশ্ন: Level 1 Learner License-এ চালানোর 
   শর্ত কী?
✅ উত্তর: ২১+ বছরের licensed adult সাথে বসে 
   থাকতে হবে। একা নিষেধ।

❓ প্রশ্ন: Supervised driving কত ঘণ্টা দরকার?
✅ উত্তর: কমপক্ষে ৫০ ঘণ্টা (১০ ঘণ্টা রাতে)

❓ প্রশ্ন: Level 2 Provisional License-এ রাতে
   চালানোর নিয়ম কী?
✅ উত্তর: রাত ১০টা — ভোর ৫টা পর্যন্ত নিষেধ
   (work/school/religious exception ছাড়া)

❓ প্রশ্ন: ১৮+ বয়স্ক হলে TIP নিয়ে কতদিন
   practice করতে হবে road test-এর আগে?
✅ উত্তর: কমপক্ষে ৩০ দিন supervised practice।

❓ প্রশ্ন: Michigan-এ road test কে নেয়?
✅ উত্তর: SOS নয় — SOS-approved third-party
   driver testing business। পাশ করলে certificate
   নিয়ে SOS-এ গিয়ে license নিতে হয়।</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — রাত ১০:৩০, কাজ শেষে</div>
<div class="scn-question">❓ তোমার Level 2 Provisional License। তুমি Meijer-এ part-time কাজ করো, শিফট শেষ রাত ১০:১৫-তে। বাসা ২০ মিনিট দূরে। রাত ১০টার পর তো চালানো নিষেধ — তুমি কি আইন ভাঙছ?</div>
<div class="scn-answer">✅ না। কাজ থেকে সরাসরি বাসায় ফেরা night restriction-এর exception — work, school, religious activity-র জন্য যাতায়াত বৈধ।</div>
<div class="scn-explain">কিন্তু সাবধান: কাজ শেষে বন্ধুর বাসায় আড্ডা দিয়ে ১১টায় ফিরলে সেটা আর exception নয়। Route-ও হতে হবে যুক্তিসঙ্গত — কাজ থেকে বাসা, ঘোরাঘুরি নয়। Pay stub বা work schedule সাথে রাখা ভালো।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — বন্ধুরা লিফট চায়</div>
<div class="scn-question">❓ তুমি ১৬, Level 2 license, স্কুল ছুটির পর। তিন বন্ধু (সবাই ১৭) বলছে — "চল, mall-এ নামিয়ে দে!" তুমি কি নিতে পারবে?</div>
<div class="scn-answer">✅ না। Level 2-তে ২১ বছরের কম বয়সী মাত্র ১ জন passenger নেওয়া যায় (immediate family ছাড়া)। তিনজন = violation।</div>
<div class="scn-explain">এটা শুধু নিয়ম নয় — গবেষণায় দেখা গেছে teen driver-এর গাড়িতে প্রতিটা teen passenger যোগ হলে crash ঝুঁকি লাফিয়ে বাড়ে। একজনকে নাও, বাকিদের না বলো — "আমার license-এ নিষেধ" বলাটাই যথেষ্ট।</div>
</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 1: Licensing

  GDL (under 18): Segment 1 driver's ed (age 14y8m)
  → Level 1 Learner License (14y9m): drive ONLY
  with licensed adult 21+; 50 hrs supervised
  practice (10 at night) → Segment 2 → Level 2
  Provisional (16): solo, but no driving 10pm-5am
  (except work/school/religious or with parent)
  and max 1 passenger under 21 (non-family) →
  Level 3 Full (17, after 6 clean months).

  Adults 18+: no driver's ed required. Vision +
  knowledge test at SOS → Temporary Instruction
  Permit ($25, valid 180 days) → 30+ days
  supervised practice → road test at a third-party
  tester (~$50-100) → certificate to SOS →
  license ($25).

  Knowledge test: 50 questions in 2 sections —
  25 signs + 25 rules. Need 20/25 (80%) in EACH
  section separately. Fail one = retake only that
  section. Vision standard: 20/40, 110° peripheral.
  Bring: identity proof, SSN, 2* Michigan residency
  proofs; parent if under 18.</div>

<div class="secret-box">📄 Michigan GDL: ৩ ধাপ — Segment 1 (১৪y ৮m) → Learner License (১৪y ৯m+) → Segment 2 → Level 2 Provisional (১৬+) → Level 3 Full (১৭+)। Knowledge test: ৫০ প্রশ্ন (২৫ সাইন + ২৫ নিয়ম), প্রতি ভাগে ২০+ পাশ (৮০%) — আলাদাভাবে।</div>`
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

<div class="sign-item"><svg viewBox="0 0 80 72" width="64" height="58"><path d="M16,0 L64,0 L80,16 L80,72 L0,72 L0,16 Z" fill="#fdd835" stroke="#222" stroke-width="2"/><text x="40" y="26" text-anchor="middle" font-size="10">🚸</text><text x="40" y="48" text-anchor="middle" fill="#222" font-family="Arial,sans-serif" font-weight="700" font-size="10">SCHOOL</text></svg><div class="sign-label">🟡 <strong>SCHOOL ZONE</strong><br>২৫ mph</div></div>

<div class="sign-item"><svg viewBox="0 0 80 80" width="60" height="60"><rect x="2" y="2" width="76" height="76" rx="3" fill="#c62828" stroke="#fff" stroke-width="3"/><rect x="18" y="36" width="44" height="8" fill="#fff"/></svg><div class="sign-label">🟥 <strong>DO NOT ENTER</strong><br>এই রাস্তায় নয়</div></div>

<div class="sign-item"><svg viewBox="0 0 80 80" width="58" height="58"><circle cx="40" cy="40" r="36" fill="#c62828" stroke="#fff" stroke-width="3"/><text x="40" y="50" text-anchor="middle" font-size="24">↰</text><line x1="14" y1="66" x2="66" y2="14" stroke="#fff" stroke-width="5"/></svg><div class="sign-label">🚫 <strong>NO LEFT TURN</strong><br>নিষেধাজ্ঞা</div></div>

<div class="sign-item"><svg viewBox="0 0 100 100" width="68" height="68"><polygon points="50,4 96,50 50,96 4,50" fill="#e67e22" stroke="#222" stroke-width="3"/><text x="50" y="60" text-anchor="middle" font-size="24">🚧</text></svg><div class="sign-label">🟠 <strong>CONSTRUCTION</strong><br>দ্বিগুণ জরিমানা</div></div>

<div class="sign-item"><svg viewBox="0 0 80 50" width="60" height="38"><rect x="1" y="1" width="78" height="48" rx="2" fill="#27ae60"/><text x="40" y="22" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-weight="700" font-size="8">EXIT</text><text x="40" y="40" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-weight="900" font-size="16">12</text></svg><div class="sign-label">🟢 <strong>GUIDE</strong><br>দিক নির্দেশনা</div></div>

<div class="sign-item"><svg viewBox="0 0 80 50" width="60" height="38"><rect x="1" y="1" width="78" height="48" rx="2" fill="#2980b9"/><text x="40" y="36" text-anchor="middle" fill="#fff" font-size="22">🏥</text></svg><div class="sign-label">🔵 <strong>SERVICES</strong><br>হাসপাতাল, গ্যাস</div></div>

<div class="sign-item"><svg viewBox="0 0 100 70" width="76" height="54"><polygon points="4,35 96,4 96,66" fill="#fdd835" stroke="#222" stroke-width="2"/><text x="62" y="30" text-anchor="middle" fill="#222" font-family="Arial,sans-serif" font-weight="900" font-size="9">NO</text><text x="62" y="42" text-anchor="middle" fill="#222" font-family="Arial,sans-serif" font-weight="900" font-size="8">PASSING</text><text x="62" y="54" text-anchor="middle" fill="#222" font-family="Arial,sans-serif" font-weight="900" font-size="8">ZONE</text></svg><div class="sign-label">🔶 <strong>PENNANT</strong><br>রাস্তার বাম পাশে!</div></div>

<div class="sign-item"><svg viewBox="0 0 100 100" width="70" height="70"><g transform="rotate(45 50 50)"><rect x="42" y="2" width="16" height="96" rx="2" fill="#fff" stroke="#222" stroke-width="1.5"/></g><g transform="rotate(-45 50 50)"><rect x="42" y="2" width="16" height="96" rx="2" fill="#fff" stroke="#222" stroke-width="1.5"/></g><text x="26" y="38" text-anchor="middle" fill="#222" font-size="8" font-weight="900" transform="rotate(-45 26 34)">RAILROAD</text><text x="74" y="38" text-anchor="middle" fill="#222" font-size="8" font-weight="900" transform="rotate(45 74 34)">CROSSING</text></svg><div class="sign-label">✕ <strong>CROSSBUCK</strong><br>YIELD-এর মতো আচরণ</div></div>

<div class="sign-item"><svg viewBox="0 0 100 60" width="76" height="46"><rect x="2" y="2" width="96" height="56" rx="3" fill="#c62828" stroke="#fff" stroke-width="3"/><text x="50" y="26" text-anchor="middle" fill="#fff" font-family="Arial Black,sans-serif" font-weight="900" font-size="14">WRONG</text><text x="50" y="46" text-anchor="middle" fill="#fff" font-family="Arial Black,sans-serif" font-weight="900" font-size="14">WAY</text></svg><div class="sign-label">🟥 <strong>WRONG WAY</strong><br>উল্টো দিকে ঢুকেছ!</div></div>

<div class="sign-item"><svg viewBox="0 0 110 45" width="84" height="34"><rect x="2" y="2" width="106" height="41" rx="3" fill="#1a1a1a" stroke="#fff" stroke-width="2"/><polygon points="10,22 34,8 34,17 100,17 100,27 34,27 34,36" fill="#fff"/></svg><div class="sign-label">⬛ <strong>ONE WAY</strong><br>শুধু তীরের দিকে</div></div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Texting While Driving:</strong> Driver texted 'omw' — rear-ended a stopped car at 45mph. Totaled both cars. Fix: phone on Do Not Disturb.</div></div>


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
  পেন্টাগন হলুদ → ২৫ mph, শিশু সতর্ক

⭐ SPECIAL SHAPES (পরীক্ষায় খুব আসে!):
  PENNANT (ত্রিভুজ, পাশে শোয়ানো) → NO PASSING ZONE
    → একমাত্র সাইন যেটা রাস্তার বাম পাশে থাকে!
  CROSSBUCK (X আকৃতি) → RAILROAD CROSSING
    → YIELD sign-এর মতো আচরণ করো
  WRONG WAY (লাল আয়ত) → তুমি উল্টো দিকে!
    → সামনে যেও না — নিরাপদে ঘুরে বের হও
  ONE WAY (কালো/সাদা তীর) → শুধু তীরের দিকে চালাও</div>

<div class="rt-image">
<svg viewBox="0 0 460 260" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="260" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">🛣️ বাস্তব রাস্তায় সাইন কোথায় বসে — M-52-এ এক মাইল</text>
<!-- road with curve: straight then bends up-right -->
<path d="M 0 190 L 260 190 Q 330 190 370 150 L 460 60" fill="none" stroke="#2a2a2a" stroke-width="52" stroke-linecap="butt"/>
<path d="M 0 190 L 260 190 Q 330 190 370 150 L 460 60" fill="none" stroke="#f1c40f" stroke-width="2.5" stroke-dasharray="16,12" opacity=".65"/>
<!-- your car -->
<g transform="translate(28,176)">
<rect x="0" y="0" width="52" height="26" rx="8" fill="#2ecc71"/>
<rect x="8" y="4" width="36" height="11" rx="3" fill="#0e4429"/>
<circle cx="12" cy="28" r="6" fill="#000"/><circle cx="40" cy="28" r="6" fill="#000"/>
</g>
<text x="54" y="234" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">তুমি — ৫৫ mph</text>
<!-- SIGN 1: warning diamond (curve ahead) posted BEFORE curve -->
<rect x="146" y="118" width="4" height="46" fill="#8a6d3b"/>
<g transform="rotate(45 148 100)"><rect x="130" y="82" width="36" height="36" rx="3" fill="#fdd835" stroke="#222" stroke-width="2"/></g>
<path d="M 140 108 Q 148 92 158 96" fill="none" stroke="#222" stroke-width="3.5" marker-end="url(#sgA)"/>
<defs><marker id="sgA" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#222"/></marker></defs>
<text x="148" y="52" text-anchor="middle" fill="#fdd835" font-size="8" font-weight="900">🟡 WARNING</text>
<text x="148" y="63" text-anchor="middle" fill="#fdd835" font-size="10">"সামনে বাঁক" — বাঁকের</text>
<text x="148" y="73" text-anchor="middle" fill="#fdd835" font-size="10">~৭৫০ ফুট আগে বসে!</text>
<!-- SIGN 2: advisory speed under warning -->
<rect x="196" y="128" width="4" height="36" fill="#8a6d3b"/>
<rect x="182" y="102" width="32" height="26" rx="2" fill="#fdd835" stroke="#222" stroke-width="1.5"/>
<text x="198" y="120" text-anchor="middle" fill="#222" font-size="12" font-weight="900">35</text>
<text x="198" y="238" text-anchor="middle" fill="#f8c471" font-size="10">advisory speed —</text>
<text x="198" y="248" text-anchor="middle" fill="#f8c471" font-size="10">বাঁকের নিরাপদ গতি</text>
<!-- the curve arrow marker on road -->
<text x="330" y="178" text-anchor="middle" fill="#fff" font-size="14" opacity=".8">⤴</text>
<text x="316" y="222" text-anchor="middle" fill="#aaa" font-size="7.5">এটাই সেই বাঁক — সাইন</text>
<text x="316" y="232" text-anchor="middle" fill="#aaa" font-size="7.5">তোমাকে আগেই বলেছিল</text>
<!-- SIGN 3: regulatory speed limit AFTER curve -->
<rect x="404" y="70" width="4" height="40" fill="#8a6d3b"/>
<rect x="390" y="34" width="32" height="38" rx="2" fill="#fff" stroke="#222" stroke-width="1.5"/>
<text x="406" y="46" text-anchor="middle" fill="#222" font-size="5.5" font-weight="700">SPEED</text>
<text x="406" y="53" text-anchor="middle" fill="#222" font-size="5.5" font-weight="700">LIMIT</text>
<text x="406" y="68" text-anchor="middle" fill="#222" font-size="13" font-weight="900">55</text>
<text x="380" y="22" text-anchor="middle" fill="#fff" font-size="8" font-weight="900">⬜ REGULATORY</text>
<text x="380" y="32" text-anchor="middle" fill="#ccc" font-size="10">এখান থেকে আইন — ৫৫</text>
</svg>
<div class="rt-caption">মূল concept: 🟡 warning সাইন বিপদের আগে বসে (প্রস্তুতির সময় দেয়), ⬜ regulatory সাইন যেখানে বসে সেখান থেকেই আইন। হলুদ "35" = advisory (পরামর্শ), সাদা "55" = আইন</div>
</div>

<div class="sign-gallery">
<div class="sign-item"><svg viewBox="0 0 90 96" width="64" height="68"><path d="M 45 4 Q 70 4 86 12 Q 86 50 72 72 Q 60 88 45 92 Q 30 88 18 72 Q 4 50 4 12 Q 20 4 45 4 Z" fill="#1d4e9e" stroke="#fff" stroke-width="3"/><path d="M 45 4 Q 70 4 86 12 L 86 26 L 4 26 L 4 12 Q 20 4 45 4 Z" fill="#c62828"/><text x="45" y="21" text-anchor="middle" fill="#fff" font-size="9" font-weight="900">INTERSTATE</text><text x="45" y="66" text-anchor="middle" fill="#fff" font-size="26" font-weight="900">75</text></svg><div class="sign-label">🛡️ <strong>INTERSTATE</strong><br>I-75 — জাতীয় freeway</div></div>

<div class="sign-item"><svg viewBox="0 0 90 90" width="62" height="62"><path d="M 12 8 L 78 8 Q 84 30 78 52 Q 70 74 45 84 Q 20 74 12 52 Q 6 30 12 8 Z" fill="#fff" stroke="#222" stroke-width="3"/><text x="45" y="58" text-anchor="middle" fill="#222" font-size="26" font-weight="900">23</text></svg><div class="sign-label">⬜ <strong>US ROUTE</strong><br>US-23 — জাতীয় রুট</div></div>

<div class="sign-item"><svg viewBox="0 0 90 90" width="62" height="62"><rect x="10" y="10" width="70" height="70" rx="6" fill="#fff" stroke="#222" stroke-width="3" transform="rotate(45 45 45)"/><text x="45" y="40" text-anchor="middle" fill="#222" font-size="14" font-weight="900">M</text><text x="45" y="62" text-anchor="middle" fill="#222" font-size="18" font-weight="900">52</text></svg><div class="sign-label">◇ <strong>MICHIGAN ROUTE</strong><br>M-52 — রাজ্য রুট</div></div>

<div class="sign-item"><svg viewBox="0 0 90 90" width="62" height="62"><polygon points="45,6 84,45 45,84 6,45" fill="#ccff00" stroke="#222" stroke-width="3"/><text x="45" y="56" text-anchor="middle" font-size="22">🚸</text></svg><div class="sign-label">💚 <strong>FLUORESCENT</strong><br>নতুন school/pedestrian রং</div></div>
</div>

<div class="code-block">🗺️ ROUTE MARKERS — GPS বলার আগেই চিনে ফেলো:

  🛡️ নীল-লাল shield = INTERSTATE (I-75, I-94, I-696)
     → জাতীয় freeway। জোড় সংখ্যা = পূর্ব-পশ্চিম,
       বিজোড় = উত্তর-দক্ষিণ। ৩ digit (I-696) = লুপ/bypass
  ⬜ সাদা shield = US ROUTE (US-23, US-131)
  ◇ সাদা হীরা "M" = MICHIGAN STATE ROUTE (M-52, M-59)
     → শুধু Michigan-এর নিজস্ব — অন্য রাজ্যে নেই!
  💚 FLUORESCENT হলুদ-সবুজ = নতুন standard —
     school zone ও pedestrian সাইনে হলুদের বদলে
     ধীরে ধীরে এটাই আসছে। অর্থ একই: মানুষ, সতর্ক।</div>

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

❓ সবুজ আয়ত সাইন কী শ্রেণী?
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
✅ সর্বোচ্চ ৫৫ mph — এর বেশি অবৈধ

❓ Pennant (শোয়ানো ত্রিভুজ) সাইন কী?
✅ NO PASSING ZONE — একমাত্র সাইন যা রাস্তার
   বাম পাশে বসানো হয়।

❓ Crossbuck (X) সাইনে কী করবে?
✅ Railroad crossing — YIELD-এর মতো আচরণ করো,
   ট্রেন থাকলে থামো।

❓ WRONG WAY সাইন দেখলে?
✅ তুমি উল্টো দিকে ঢুকেছ — সামনে যেও না,
   নিরাপদে থামো ও ঘুরে বের হও।</div>

<div class="sign-gallery">
<div class="sign-item"><svg viewBox="0 0 120 120" width="100" height="100"><polygon points="36,4 84,4 116,36 116,84 84,116 36,116 4,84 4,36" fill="#c62828" stroke="#fff" stroke-width="5"/><text x="60" y="68" text-anchor="middle" fill="#fff" font-family="Arial Black,sans-serif" font-weight="900" font-size="28">STOP</text></svg><div class="sign-label">🛑 <strong>STOP SIGN</strong> — Octagon + Red<br>সম্পূর্ণ থামো, ৩ সেকেন্ড গোনো</div></div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Snowy Night</div>
<div class="scn-question">❓ তুমি রাতে চালাচ্ছো। বরফের ঝড়। একটা সাইন দেখা যাচ্ছে কিন্তু বরফে ঢাকা — শুধু আকার দেখা যাচ্ছে অষ্টভুজ। তুমি কী করবে?</div>
<div class="scn-answer">✅ সম্পূর্ণ থামো। আকার থেকে চিনেছ — STOP sign।</div>
<div class="scn-explain">এটাই আকারের শক্তি — বরফে লেখা না পড়লেও আকার থেকে বোঝা যায়। অষ্টভুজ শুধু STOP sign-এই ব্যবহার হয়। কোনো অন্য সাইনে নয়।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — I-696 Construction Zone</div>
<div class="scn-question">❓ গ্রীষ্মের বিকেল, I-696-এ। সামনে কমলা হীরা সাইন: "ROAD WORK AHEAD", তারপর "LEFT LANE CLOSED 1/2 MILE"। ট্রাফিক ঘন। তুমি বাম লেনে। কী করবে?</div>
<div class="scn-answer">✅ Signal দিয়ে আগেভাগে ডান লেনে merge করো (অথবা zipper merge — বন্ধ হওয়ার পয়েন্টে একটার-পর-একটা)। গতি কমাও। Worker থাকলে বিশেষ সতর্ক।</div>
<div class="scn-explain">Michigan-এ "construction season" একটা বাস্তবতা — গ্রীষ্মে সব হাইওয়েতে কমলা সাইন। মনে রাখো: work zone-এ জরিমানা দ্বিগুণ, আর worker আহত করলে $7,500 পর্যন্ত fine + ১৫ বছর পর্যন্ত জেল। কমলা মানেই — ধীরে, ধৈর্য।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — Two-Lane Road, ধীর ট্রাক</div>
<div class="scn-question">❓ তুমি M-52-এর মতো two-lane রাস্তায়। সামনে ধীর ট্রাক্টর। বাম পাশে রাস্তার ধারে হলুদ pennant সাইন দেখলে। পাস করবে?</div>
<div class="scn-answer">✅ না। Pennant = NO PASSING ZONE শুরু। সামনে hill বা curve আছে — oncoming দেখা যায় না। Zone শেষ না হওয়া পর্যন্ত ধৈর্য ধরো।</div>
<div class="scn-explain">Pennant-ই একমাত্র সাইন যা রাস্তার বাম পাশে থাকে — কারণ passing-এর সময় তোমার চোখ বাম দিকেই থাকে। সাথে রাস্তায় সলিড হলুদ লাইনও শুরু হবে। দুটোই একই কথা বলছে: এখানে ওভারটেক = মৃত্যুঝুঁকি।</div>
</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 2: Traffic Signs

  Shape + color = meaning, no reading needed:
  Red octagon = STOP (only sign with 8 sides).
  Inverted red triangle = YIELD. Yellow diamond =
  warning (posted BEFORE the hazard). Orange
  diamond = construction (fines double). White
  rectangle = regulatory (the law from that point).
  Green rectangle = guide/destination. Blue =
  services (gas, hospital). Brown = recreation.
  Yellow pentagon = school zone.

  Special shapes: sideways pennant = NO PASSING
  ZONE (the only sign on the LEFT side of the
  road). X crossbuck = railroad (treat as YIELD).
  Red WRONG WAY = you're against traffic — stop,
  turn around safely. Black/white arrow = ONE WAY.

  Route markers: blue-red shield = Interstate
  (even# = E-W, odd# = N-S, 3 digits = loop).
  White shield = US route. White diamond M =
  Michigan state route. Fluorescent yellow-green =
  new school/pedestrian color, same meaning.

  Yellow speed number = advisory (recommended);
  white SPEED LIMIT = law.</div>

<div class="secret-box">🚦 আকার + রঙ = সাইনের পরিচয়। অষ্টভুজ লাল = STOP, উল্টানো ত্রিভুজ = YIELD, হীরা হলুদ = warning, হীরা কমলা = construction, আয়ত সবুজ = guide। লেখা পড়ার দরকার নেই — আকার দেখেই বুঝে ফেলো।</div>`
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Running a Red Light:</strong> Driver tried to beat yellow — T-boned pedestrian in crosswalk. Fix: yellow = prepare to stop.</div></div>


<div class="code-block">TRAFFIC SIGNALS — COMPLETE GUIDE
# — — — — — — — — — — — — — — — — — — — — — —

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

# — — — — — — — — — — — — — — — — — — — — — —
FLASHING SIGNALS
# — — — — — — — — — — — — — — — — — — — — — —

🟡 FLASHING YELLOW (জ্বলছে-নিভছে হলুদ)
  → ধীরে করো, সতর্ক হও, যাও

🔴 FLASHING RED (জ্বলছে-নিভছে লাল)
  → STOP sign-এর মতো আচরণ করো
  → সম্পূর্ণ থামো, তারপর নিরাপদে যাও

# — — — — — — — — — — — — — — — — — — — — — —
ARROW SIGNALS (তীর চিহ্ন)
# — — — — — — — — — — — — — — — — — — — — — —

🟢➡️ GREEN ARROW = সেই দিকে যাও — protected turn
  → Oncoming traffic থাকে না (লাল তাদের)
  → নিরাপদে মোড় নাও

🟡➡️ STEADY YELLOW ARROW = protected turn শেষ হচ্ছে
  → থামার প্রস্তুতি

🟡⚡ FLASHING YELLOW ARROW (Michigan-এ খুব কমন!)
  → বাম মোড় নিতে পারো — কিন্তু PROTECTED নয়
  → Oncoming traffic + পেডেস্ট্রিয়ানকে YIELD
    করে তারপর মোড় নাও
  → MDOT পুরনো flashing red left-turn signal
    বদলে এগুলো বসাচ্ছে — accident কমে
  💡 মনে রাখো: flashing yellow arrow ≠ green
    arrow। Green = protected, flashing yellow
    = yield করে যাও।

🔴➡️ RED ARROW = সেই দিকে মোড় নেওয়া নিষেধ
  ❌ যদি না সাইন অনুমতি দেয়

# — — — — — — — — — — — — — — — — — — — — — —
LANE SIGNALS (হাইওয়ে লেন নিয়ন্ত্রণ)
# — — — — — — — — — — — — — — — — — — — — — —

🟢 GREEN ✓ = এই লেন খোলা — ব্যবহার করো
🟡 YELLOW ✕ = এই লেন বন্ধ হচ্ছে — বেরিয়ে যাও
🔴 RED ✕ = এই লেন বন্ধ — ঢুকো না

# — — — — — — — — — — — — — — — — — — — — — —
🚶 PEDESTRIAN SIGNALS (পথচারী সিগন্যাল)
# — — — — — — — — — — — — — — — — — — — — — —

  🚶 WALK / সাদা হাঁটা-মানুষ
    → পার হওয়া শুরু করতে পারো
  ✋ FLASHING হাত (কমলা)
    → শুরু কোরো না! শুরু করে থাকলে —
      দ্রুত শেষ করো
  ✋ STEADY হাত (কমলা)
    → পার হওয়া নিষেধ
  ⏱️ COUNTDOWN (15...14...13)
    → বাকি সময় — হিসাব করে সিদ্ধান্ত

  💡 Driver হিসেবে: WALK জ্বলা মানে পথচারী
     আসছে — মোড়ের আগে তাদের দিক দেখো

# — — — — — — — — — — — — — — — — — — — — — —
⚫ DARK SIGNAL (সিগন্যাল সম্পূর্ণ বন্ধ/অন্ধকার)
# — — — — — — — — — — — — — — — — — — — — — —

  → বিদ্যুৎ নেই = 4-WAY STOP হিসেবে আচরণ করো
  → সম্পূর্ণ থামো, ক্রম মেনে যাও
  → Michigan ঝড়ে খুব কমন — মুখস্থ রাখো!</div>

<div class="code-block">PAVEMENT MARKINGS — সড়ক দাগ
# — — — — — — — — — — — — — — — — — — — — — —

🟡 YELLOW LINES = ট্রাফিক ভাগ করে (opposite direction)
# — — — — — — — — — — — — — — — — — — — — — —

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
# — — — — — — — — — — — — — — — — — — — — — —

  ━━━━━━━━ সলিড সাদা লাইন
    → লেন পরিবর্তন নিরুৎসাহিত
    → (যেমন expressway লেন সেপারেটর)

  - - - - - ড্যাশড সাদা লাইন
    → লেন পরিবর্তন করতে পারো — নিরাপদ হলে

  ━━━━━━━━ সলিড সাদা (চওড়া)
    → রাস্তার কিনারা — shoulder line
    → এই লাইনের ডানে চালাবে না (বাইরে)

# — — — — — — — — — — — — — — — — — — — — — —
SPECIAL MARKINGS
# — — — — — — — — — — — — — — — — — — — — — —

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

<div class="rt-image">
<svg viewBox="0 0 460 300" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="300" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">🚥 বাস্তব intersection — সব marking একসাথে (top view)</text>
<!-- vertical road (you travel bottom→top) -->
<rect x="150" y="28" width="160" height="272" fill="#2a2a2a"/>
<!-- horizontal cross road -->
<rect x="0" y="110" width="460" height="80" fill="#2a2a2a"/>
<!-- intersection box slightly darker -->
<rect x="150" y="110" width="160" height="80" fill="#333"/>
<!-- your side (below intersection): double yellow center + lane split -->
<line x1="228" y1="196" x2="228" y2="300" stroke="#f1c40f" stroke-width="3"/>
<line x1="234" y1="196" x2="234" y2="300" stroke="#f1c40f" stroke-width="3"/>
<!-- white dashed between your through lane and left-turn lane -->
<line x1="272" y1="196" x2="272" y2="300" stroke="#eee" stroke-width="2" stroke-dasharray="10,8" opacity=".6"/>
<!-- oncoming side above -->
<line x1="228" y1="28" x2="228" y2="104" stroke="#f1c40f" stroke-width="3"/>
<line x1="234" y1="28" x2="234" y2="104" stroke="#f1c40f" stroke-width="3"/>
<!-- STOP LINE (wide white) on your approach -->
<rect x="238" y="196" width="70" height="7" fill="#fff"/>
<!-- crosswalk stripes on your approach -->
<g fill="#fff" opacity=".85">
<rect x="240" y="176" width="9" height="14"/><rect x="254" y="176" width="9" height="14"/><rect x="268" y="176" width="9" height="14"/><rect x="282" y="176" width="9" height="14"/><rect x="296" y="176" width="9" height="14"/>
</g>
<!-- pedestrian in crosswalk -->
<text x="286" y="188" font-size="12">🚶</text>
<!-- left turn arrow painted in left lane -->
<text x="252" y="248" text-anchor="middle" fill="#fff" font-size="16" opacity=".8">↰</text>
<!-- your car in left-turn lane behind stop line -->
<g transform="translate(240,254)">
<rect x="0" y="0" width="26" height="44" rx="7" fill="#2ecc71"/>
<rect x="4" y="7" width="18" height="12" rx="3" fill="#0e4429"/>
</g>
<text x="253" y="310" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700"> </text>
<!-- through car right lane -->
<g transform="translate(280,240)">
<rect x="0" y="0" width="26" height="44" rx="7" fill="#3498db"/>
<rect x="4" y="7" width="18" height="12" rx="3" fill="#0b3a5c"/>
</g>
<!-- oncoming car coming down -->
<g transform="translate(190,40)">
<rect x="0" y="0" width="26" height="44" rx="7" fill="#e74c3c"/>
<rect x="4" y="25" width="18" height="12" rx="3" fill="#8e2020"/>
</g>
<text x="203" y="96" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">oncoming —</text>
<text x="203" y="106" text-anchor="middle" fill="#ff8a80" font-size="7.5" font-weight="700">একে yield করো!</text>
<!-- signal head with flashing yellow arrow -->
<rect x="320" y="128" width="26" height="58" rx="6" fill="#1a1a1a" stroke="#555" stroke-width="2"/>
<circle cx="333" cy="140" r="8" fill="#333"/>
<circle cx="333" cy="157" r="8" fill="#f1c40f"><animate attributeName="opacity" values="1;.15;1" dur="1s" repeatCount="indefinite"/></circle>
<text x="333" y="161" text-anchor="middle" fill="#7a5c00" font-size="9" font-weight="900">↰</text>
<circle cx="333" cy="174" r="8" fill="#333"/>
<text x="388" y="140" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="900">FLASHING</text>
<text x="388" y="150" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="900">YELLOW ARROW</text>
<text x="388" y="161" text-anchor="middle" fill="#ccc" font-size="10">বাম মোড় যায় — কিন্তু</text>
<text x="388" y="171" text-anchor="middle" fill="#ccc" font-size="10">oncoming+🚶 কে yield</text>
<!-- callout labels -->
<path d="M 100 210 L 224 210" stroke="#f1c40f" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="58" y="206" text-anchor="middle" fill="#f1c40f" font-size="7.5" font-weight="700">ডাবল হলুদ =</text>
<text x="58" y="216" text-anchor="middle" fill="#f1c40f" font-size="7.5">opposite traffic ভাগ</text>
<path d="M 100 232 L 268 232" stroke="#eee" stroke-width="1.5" stroke-dasharray="3,3" opacity=".6"/>
<text x="58" y="230" text-anchor="middle" fill="#ddd" font-size="7.5" font-weight="700">ড্যাশড সাদা =</text>
<text x="58" y="240" text-anchor="middle" fill="#ddd" font-size="7.5">একই দিকের লেন</text>
<path d="M 356 200 L 312 200" stroke="#fff" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="398" y="197" text-anchor="middle" fill="#fff" font-size="7.5" font-weight="700">STOP LINE — এখানেই</text>
<text x="398" y="207" text-anchor="middle" fill="#fff" font-size="7.5">থামো, crosswalk-এ নয়</text>
<path d="M 356 226 L 330 186" stroke="#fff" stroke-width="1.5" stroke-dasharray="3,3" opacity=".7"/>
<text x="398" y="228" text-anchor="middle" fill="#ccc" font-size="7.5" font-weight="700">CROSSWALK — 🚶 থাকলে</text>
<text x="398" y="238" text-anchor="middle" fill="#ccc" font-size="7.5">wait, সবসময় অগ্রাধিকার</text>
<text x="253" y="294" text-anchor="middle" fill="#7bed9f" font-size="7.5" font-weight="700">তুমি — বাম মোড়ের অপেক্ষায়</text>
</svg>
<div class="rt-caption">এক ছবিতে পুরো অধ্যায়: stop line-এ থামো → crosswalk-এর 🚶 আগে → flashing yellow arrow-এ oncoming (লাল গাড়ি) পরিষ্কার হলে তবেই বাম মোড়</div>
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
✅ Protected turn — সেই দিকে নিরাপদে যাও।

❓ Flashing yellow arrow দেখলে কী করবে?
✅ বাম মোড় নিতে পারো — কিন্তু oncoming traffic
   ও পেডেস্ট্রিয়ানকে yield করে। Protected নয়!</div>

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Flashing Yellow Arrow</div>
<div class="scn-question">❓ তুমি বাম মোড়ের লেনে। সিগন্যালে flashing yellow arrow জ্বলছে। বিপরীত দিক থেকে গাড়ি আসছে। তুমি কি মোড় নেবে?</div>
<div class="scn-answer">✅ অপেক্ষা করো। Flashing yellow arrow মানে মোড় অনুমোদিত কিন্তু protected নয় — oncoming traffic পরিষ্কার হলে তবে যাও।</div>
<div class="scn-explain">অনেকে flashing yellow arrow-কে green arrow ভেবে ভুল করে — এটা Michigan-এ left-turn crash-এর বড় কারণ। Green arrow = oncoming থেমে আছে। Flashing yellow = oncoming চলছে, তুমি yield করো।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — ঝড়ে Signal মৃত</div>
<div class="scn-question">❓ আগস্টের ঝড়ে বিদ্যুৎ গেছে। Gratiot Avenue-র একটা ব্যস্ত intersection-এ ট্রাফিক লাইট সম্পূর্ণ অন্ধকার — কোনো আলোই জ্বলছে না। কী করবে?</div>
<div class="scn-answer">✅ Dark signal = 4-way STOP হিসেবে আচরণ করো। সম্পূর্ণ থামো, যে আগে থেমেছে সে আগে যায়, টাই হলে ডান দিক প্রথম।</div>
<div class="scn-explain">Michigan-এ ঝড়ে signal outage খুবই কমন। অনেক driver না থেমে বেরিয়ে যায় — এ থেকেই crash। মনে রাখো: no light = all-way stop। আর কেউ না থামলেও তুমি থামো — নিয়ম জানা তোমার দায়িত্ব, অন্যেরটা নয়।</div>
</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 3: Signals & Markings

  Green = go when clear (yield to pedestrians and,
  on left turns, oncoming traffic). Yellow = prepare
  to stop — stop if safe, never accelerate to beat
  it. Red = complete stop at the stop line. Right
  turn on red: legal in Michigan after a full stop,
  unless posted NO TURN ON RED.

  Flashing red = treat as STOP sign. Flashing
  yellow = slow, proceed with caution. FLASHING
  YELLOW ARROW = left turn allowed but NOT
  protected — yield to oncoming and pedestrians
  (green arrow = protected). Red arrow = no turn.
  Dark/dead signal (power outage) = all-way stop.

  Pedestrian signals: WALK = start crossing;
  flashing hand = don't start (finish if started);
  steady hand = don't cross; countdown = seconds left.

  Markings: yellow lines separate OPPOSITE
  directions, white lines separate SAME direction.
  Solid = don't cross; dashed = may cross when
  safe. Double solid yellow = no passing either
  way. Wide solid white = stop line — stop there,
  not in the crosswalk. Crosswalk: pedestrians
  always have right-of-way.</div>

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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Driving Without Insurance:</strong> Pulled over, no proof of insurance. Car impounded, $500 fine. Fix: keep insurance card in car.</div></div>


<div class="code-block">RIGHT-OF-WAY — COMPLETE RULES
# — — — — — — — — — — — — — — — — — — — — — —

🛑 4-WAY STOP (চার-মুখী STOP)
# — — — — — — — — — — — — — — — — — — — — — —

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

# — — — — — — — — — — — — — — — — — — — — — —
🚦 UNCONTROLLED INTERSECTION (কোনো সাইন/সিগন্যাল নেই)
# — — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: ডান দিক থেকে আসা গাড়িকে অগ্রাধিকার দাও
    → Yield to traffic on the right

# — — — — — — — — — — — — — — — — — — — — — —
🔀 T-INTERSECTION (টি-মোড়)
# — — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: শেষ হয়ে যাওয়া রাস্তার গাড়ি (T-এর পা)
    through রাস্তার সব ট্রাফিককে yield করবে
    → Through road always has right-of-way

# — — — — — — — — — — — — — — — — — — — — — —
🏠 DRIVEWAY / PRIVATE ROAD / PARKING LOT
# — — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: driveway, গলি, parking lot বা private
    road থেকে public রাস্তায় ঢুকলে — সবাইকে
    yield: sidewalk-এর পথচারী, cyclist, রাস্তার
    সব গাড়ি
    → Entering from private property = yield to ALL
  💡 Sidewalk পার হওয়ার আগে আলাদা করে থামো

# — — — — — — — — — — — — — — — — — — — — — —
🔄 ROUNDABOUT (গোলচক্কর)
# — — — — — — — — — — — — — — — — — — — — — —

  নিয়ম ১: প্রবেশ করার আগে YIELD
    → Yield to traffic already IN the roundabout

  নিয়ম ২: বাম দিকে ঘুরো (counterclockwise)
    → Always go counterclockwise

  নিয়ম ৩: ভেতরে গতি = ১৫-২০ mph
    → Slow speed inside

  নিয়ম ৪: বের হওয়ার আগে signal দাও
    → Use right turn signal to exit

# — — — — — — — — — — — — — — — — — — — — — —
↩️ LEFT TURN (বাম মোড়)
# — — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: বাম মোড় নিলে oncoming (বিপরীত দিকের) 
    traffic কে অগ্রাধিকার দাও
    → Yield to oncoming traffic

  সবুজ আলো (solid, no arrow): 
    → বাম মোড় নিতে পারো কিন্তু oncoming কে দাও

  সবুজ তীর (green arrow):
    → Protected — oncoming লাল। নিরাপদে যাও।

# — — — — — — — — — — — — — — — — — — — — — —
🚶 PEDESTRIANS (পথচারী)
# — — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: পেডেস্ট্রিয়ান সবসময় অগ্রাধিকার পায়
    → Pedestrians ALWAYS have right-of-way

  • ক্রসওয়াকে কেউ থাকলে — থামো
  • ক্রসওয়াকে কেউ দাঁড়িয়ে থাকলেও — থামো
  • school zone-এ বিশেষ সতর্ক
  • blind/person with cane বা guide dog — সবসময়

# — — — — — — — — — — — — — — — — — — — — — —
🚑 EMERGENCY VEHICLES (জরুরি গাড়ি)
# — — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: জরুরি গাড়ি (police, fire, ambulance) 
    সাইরেন/লাইট নিয়ে আসলে — ডানে সরে যাও থামো
    → Pull over to the right and stop

  • সাইরেন শুনলে ডানে সরে যাও
  • জংশনে থাকলে জংশন পার হও, তারপর ডানে
  • বিপরীত দিকে থাকলেও সতর্ক হও

# — — — — — — — — — — — — — — — — — — — — — —
🚌 SCHOOL BUS
# — — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: স্কুল বাসে লাল আলো জ্বললে + STOP 
    arm বের হলে — উভয় দিক থেকে থামো
    → Stop from BOTH directions

  • হলুদ আলো জ্বলছে — ধীরে করো, থামার প্রস্তুতি
  • লাল আলো + STOP arm — সম্পূর্ণ থামো
  • বাস আবার চললে তবে তুমি যাও
  • ভুল করলে: $৫০০+ জরিমানা + license points

# — — — — — — — — — — — — — — — — — — — — — —
🚜 FUNERAL PROCESSION
# — — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: Funeral procession কে অগ্রাধিকার দাও
    → Yield to funeral processions
    → Headlight জ্বলা গাড়িগুলো

# — — — — — — — — — — — — — — — — — — — — — —
↩️ U-TURN RULES (ইউ-টার্ন)
# — — — — — — — — — — — — — — — — — — — — — —

  নিয়ম: Business district-এ U-turn সম্পূর্ণ নিষেধ
    → Prohibited in business districts
  অন্য জায়গায়: নিরাপদে করা যায় — যদি অন্য
    ট্রাফিকের ক্ষতি না করে এবং clear visibility থাকে
    → Elsewhere: only if safe and doesn't interfere
      with traffic
  ❌ Curve, hilltop, intersection কাছে, "NO U-TURN"
    সাইন থাকলে — নিষেধ

# — — — — — — — — — — — — — — — — — — — — — —
🔀 MICHIGAN LEFT (মিশিগান লেফট / Indirect Left)
# — — — — — — — — — — — — — — — — — — — — — —

  Michigan-এর নিজস্ব বৈশিষ্ট্য! বড় divided highway
  intersection-এ প্রায়ই directly বাম মোড় নেওয়া যায় না।

  পদ্ধতি:
  ১. সোজা যাও, intersection পার হও
  ২. কিছুদূর পর median crossover / U-turn lane
     পাবে
  ৩. সেখানে U-turn নাও — বিপরীত দিকের ট্রাফিককে
     yield করে
  ৪. এখন উল্টো দিকে ফিরে এসে ডানে মোড় নাও
     (right turn on red সহ, যদি সাইন অনুমতি দেয়)

  💡 উদ্দেশ্য: বড় intersection-এ left-turn accident
     কমানো এবং ট্রাফিক flow বাড়ানো
  ⚠️ "U-TURN" বা "LEFT TURN PROHIBITED — USE
     U-TURN" সাইন দেখলে বুঝবে এখানে Michigan Left
     ব্যবহার করতে হবে

# — — — — — — — — — — — — — — — — — — — — — —
🛣️ CENTER TWO-WAY LEFT-TURN LANE (মাঝের বাম-মোড় লেন)
# — — — — — — — — — — — — — — — — — — — — — —

  চেনার উপায়: রাস্তার মাঝে হলুদ ড্যাশড লাইনে ঘেরা
  একটা লেন, উভয় দিক থেকে ব্যবহার হয়

  নিয়ম:
  ✦ শুধু বাম মোড় নেওয়ার প্রস্তুতির জন্য ব্যবহার করো
  ✦ মোড় নেওয়ার ঠিক আগে "reasonable" দূরত্ব পর্যন্ত
    এই লেনে চলতে পারো
  ❌ Right turn-এর জন্য ব্যবহার নিষেধ
  ❌ Roadway-তে merge করার লেন হিসেবে ব্যবহার নিষেধ
  ❌ এই লেন দিয়ে সাধারণ driving বা passing নিষেধ</div>

<div class="rt-image">
<svg viewBox="0 0 460 270" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="270" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">🔀 MICHIGAN LEFT — Telegraph Rd-এ বাম মোড় (top view)</text>
<!-- divided highway horizontal: two roadways with median -->
<rect x="0" y="60" width="460" height="62" fill="#2a2a2a"/>
<rect x="0" y="152" width="460" height="62" fill="#2a2a2a"/>
<!-- median -->
<rect x="0" y="122" width="460" height="30" fill="#1e3a1e"/>
<!-- median crossover opening -->
<rect x="330" y="122" width="56" height="30" fill="#2a2a2a"/>
<text x="358" y="118" text-anchor="middle" fill="#7bed9f" font-size="10" font-weight="700">MEDIAN CROSSOVER</text>
<!-- lane dashes -->
<line x1="0" y1="91" x2="460" y2="91" stroke="#eee" stroke-width="2" stroke-dasharray="12,10" opacity=".4"/>
<line x1="0" y1="183" x2="460" y2="183" stroke="#eee" stroke-width="2" stroke-dasharray="12,10" opacity=".4"/>
<!-- cross street vertical at left -->
<rect x="80" y="0" width="60" height="270" fill="#2a2a2a"/>
<rect x="80" y="122" width="60" height="30" fill="#333"/>
<text x="110" y="12" text-anchor="middle" fill="#888" font-size="10">CROSS STREET</text>
<!-- NO LEFT TURN sign at intersection -->
<circle cx="158" cy="42" r="15" fill="#fff" stroke="#c62828" stroke-width="3"/>
<text x="158" y="48" text-anchor="middle" font-size="13">↰</text>
<line x1="147" y1="53" x2="169" y2="31" stroke="#c62828" stroke-width="4"/>
<text x="158" y="70" text-anchor="middle" fill="#ff8a80" font-size="10" font-weight="700">NO LEFT!</text>
<!-- your car path: eastbound bottom roadway, wants to go north on cross street -->
<!-- step 1: pass intersection going east (right) -->
<g transform="translate(30,188)">
<rect x="0" y="0" width="44" height="22" rx="7" fill="#2ecc71"/>
<rect x="7" y="3" width="30" height="10" rx="3" fill="#0e4429"/>
</g>
<text x="52" y="226" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">তুমি</text>
<!-- path arrows: 1 go straight past intersection -->
<path d="M 80 199 L 330 199" fill="none" stroke="#2ecc71" stroke-width="3" stroke-dasharray="7,5" marker-end="url(#mlA)"/>
<text x="230" y="230" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="700">১. Intersection সোজা পার হও</text>
<!-- 2: U-turn through crossover -->
<path d="M 340 199 Q 372 199 372 137 Q 372 75 340 75" fill="none" stroke="#f1c40f" stroke-width="3" stroke-dasharray="7,5" marker-end="url(#mlB)"/>
<text x="416" y="140" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">২. Crossover-এ</text>
<text x="416" y="150" text-anchor="middle" fill="#f1c40f" font-size="8" font-weight="700">U-turn (yield!)</text>
<!-- 3: back west, right turn north -->
<path d="M 330 75 L 145 75 Q 122 75 122 50 L 122 14" fill="none" stroke="#74b9ff" stroke-width="3" stroke-dasharray="7,5" marker-end="url(#mlC)"/>
<text x="238" y="52" text-anchor="middle" fill="#74b9ff" font-size="8" font-weight="700">৩. ফিরে এসে ডানে মোড় — গন্তব্যে!</text>
<defs>
<marker id="mlA" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2ecc71"/></marker>
<marker id="mlB" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#f1c40f"/></marker>
<marker id="mlC" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#74b9ff"/></marker>
</defs>
<!-- oncoming car in westbound roadway to yield to -->
<g transform="translate(230,66)">
<rect x="0" y="0" width="44" height="22" rx="7" fill="#e74c3c"/>
<rect x="7" y="9" width="30" height="10" rx="3" fill="#8e2020"/>
</g>
<text x="252" y="105" text-anchor="middle" fill="#ff8a80" font-size="10" font-weight="700">U-turn-এর আগে এদের yield করো</text>
<text x="230" y="255" text-anchor="middle" fill="#888" font-size="8">যেটা মনে হয় ঘুরপথ, সেটাই আসলে দ্রুত ও নিরাপদ — left-turn head-on crash সম্পূর্ণ বাদ</text>
</svg>
<div class="rt-caption">Michigan Left তিন ধাপে: সোজা পার → median crossover-এ U-turn (oncoming-কে yield) → ফিরে এসে ডানে মোড়। Metro Detroit-এ প্রতিদিনের বাস্তবতা</div>
</div>

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
<circle cx="100" cy="50" r="8" fill="#3498db"/><text x="93" y="54" font-size="10" fill="#fff">A</text>
<circle cx="150" cy="100" r="8" fill="#e74c3c"/><text x="143" y="104" font-size="10" fill="#fff">B</text>
<circle cx="100" cy="150" r="8" fill="#2ecc71"/><text x="93" y="154" font-size="10" fill="#fff">C</text>
<circle cx="50" cy="100" r="8" fill="#f39c12"/><text x="43" y="104" font-size="10" fill="#fff">D</text>
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
<text x="75" y="60" font-size="10" fill="#e74c3c" font-weight="900">YIELD</text>
<!-- Labels -->
<text x="93" y="12" fill="#999" font-size="10">ENTER</text>
<text x="93" y="196" fill="#999" font-size="10">EXIT</text>
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

<div class="scenario-box">
<div class="scn-label">🎭 COMPLEX SCENARIO — Michigan Left (Telegraph Road)</div>
<div class="scn-question">❓ তুমি Telegraph Road-এর মতো একটা divided highway-তে। GPS বলছে বামে মোড় নাও, কিন্তু intersection-এ "NO LEFT TURN — USE U-TURN" সাইন। কী করবে?</div>
<div class="scn-answer">✅ Michigan Left! সোজা intersection পার হও (বা ডানে মোড় নাও), সামনে median crossover-এ গিয়ে U-turn নাও, তারপর ফিরে এসে ডানে মোড় নাও।</div>
<div class="scn-explain">Metro Detroit-এর বড় রাস্তায় (Telegraph, Woodward, 8 Mile) এটা প্রতিদিনের ঘটনা। Crossover-এ ঢোকার আগে বাম signal দাও, ভেতরে অপেক্ষারত গাড়ির পেছনে দাঁড়াও, oncoming পরিষ্কার হলে U-turn সম্পন্ন করো। রোড টেস্টে না আসলেও বাস্তব Michigan ড্রাইভিংয়ে অপরিহার্য।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — "যাও যাও" বলে হাত নাড়ছে</div>
<div class="scn-question">❓ Residential এলাকায় 4-way stop। তুমি আর আরেকটা গাড়ি প্রায় একসাথে থেমেছ — সে তোমার বামে, মানে নিয়মমতো তুমি আগে। কিন্তু সে হাত নেড়ে তোমাকে "যাও" বলছে, আবার গাড়িটাও একটু একটু এগোচ্ছে। কী করবে?</div>
<div class="scn-answer">✅ Eye contact করো, সে সত্যিই থেমে থাকলে ধীরে, সতর্কভাবে যাও। কিন্তু সে এগোতে থাকলে — থামো, তাকে যেতে দাও। নিয়ম বলে তুমি আগে, বাস্তবতা বলে নিরাপত্তা আগে।</div>
<div class="scn-explain">বাস্তব রাস্তায় সবাই নিয়ম মানে না — কেউ ভুলে যায়, কেউ তাড়াহুড়ো করে। Right-of-way "নেওয়ার" জিনিস নয়, "দেওয়ার" জিনিস। Crash হলে "কিন্তু আমার অগ্রাধিকার ছিল" বলে লাভ নেই। Defensive driving-এর মূলমন্ত্র: predictable হও, সন্দেহ হলে yield করো।</div>
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
✅ Yield করো — অগ্রাধিকার দাও।

❓ U-turn কোথায় সম্পূর্ণ নিষেধ?
✅ Business district-এ। অন্যত্র নিরাপদ হলে করা যায়।

❓ "Michigan Left" কী?
✅ Divided highway-তে directly বাম মোড়ের বদলে সোজা
   গিয়ে median-এ U-turn নিয়ে তারপর ডানে মোড় নেওয়া।

❓ Center two-way left-turn লেন কীসের জন্য?
✅ শুধু বাম মোড়ের প্রস্তুতির জন্য — merge বা right
   turn-এর জন্য নয়।</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 4: Right-of-Way

  4-way stop: first to stop goes first; tie =
  car on the RIGHT goes; opposite + same time =
  straight before turning; in doubt = yield.
  Uncontrolled intersection: yield to the right.
  T-intersection: through road has right-of-way.
  From driveway/private property: yield to ALL —
  sidewalk pedestrians, cyclists, all traffic.

  Left turns: yield to oncoming (solid green);
  green arrow = protected. Roundabout: yield to
  traffic already inside, go counterclockwise,
  15-20 mph, signal right to exit.

  Pedestrians ALWAYS have right-of-way — marked
  or unmarked crosswalk. Emergency vehicles
  (siren/lights): pull right and stop; clear the
  intersection first if you're in it. School bus
  with red lights + stop arm: BOTH directions
  stop — unless a physical median divides the
  road (then only the bus's side stops). Painted
  lines are NOT a divider. Yield to funeral
  processions (headlights + purple flags).

  U-turns: illegal in business districts;
  elsewhere only when safe. MICHIGAN LEFT: where
  direct left is banned on divided roads — go
  straight/right, U-turn at the median crossover,
  then right. Center two-way left-turn lane: for
  left-turn prep only — never for through driving,
  merging, or right turns.</div>

<div class="secret-box">🛑 অগ্রাধিকার: 4-way stop-এ যে আগে থামে সে আগে যায়। টাই হলে ডান দিক প্রথম। বাম মোড়ে oncoming কে yield। Roundabout-এ ভেতরের গাড়ি প্রথম। স্কুল বাস লাল = উভয় দিক থামো। পেডেস্ট্রিয়ান সবসময় প্রথম। Michigan Left: direct left নিষেধ হলে median U-turn ব্যবহার করো। Center turn লেন শুধু left-turn prep-এর জন্য।</div>`
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — DUI Checkpoint:</strong> 2 beers, thought fine — BAC 0.09. License suspended 6 months. Fix: one drink = wait one hour.</div></div>


<div class="code-block">MICHIGAN SPEED LIMITS — সম্পূর্ণ তালিকা
# — — — — — — — — — — — — — — — — — — — — — —

🚗 MICHIGAN SPEED LIMITS (default যদি সাইন না থাকে):

  🏘️ Residential / Business District: 25 mph
  🚸 School Zone: সাইনে লেখা গতি — সাধারণত
     school hours-এ বা "WHEN CHILDREN ARE
     PRESENT" / flashing light জ্বললে কার্যকর
  🛣️ County/Local Road: 55 mph
  🛤️ Freeway/Expressway: 70 mph (সাধারণ)
     কিছু rural freeway-তে 75 mph (সাইন দেখো)
     urban এলাকায় 55-65 mph হতে পারে
  🚚 Trucks: 65 mph (freeway-তে)

  ⚠️ সবসময় posted সাইন অনুসরণ করো
  ⚠️ সাইনের গতি সর্বোচ্চ — কখনো minimum নয়

# — — — — — — — — — — — — — — — — — — — — — —
⚠️ BASIC SPEED LAW (সবচেয়ে গুরুত্বপূর্ণ)
# — — — — — — — — — — — — — — — — — — — — — —

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

# — — — — — — — — — — — — — — — — — — — — — —
🚨 TOO FAST / TOO SLOW — উভয়ই বেআইনি
# — — — — — — — — — — — — — — — — — — — — — —

  ❌ খুব দ্রুত: accident risk, ticket, points
  ❌ খুব ধীরে: traffic block, rear-end risk
     → minimum speed highway-এ আছে
     → খুব ধীরে চালালেও ticket

  💡 নিয়ম: traffic flow-এর সাথে চালাও
     কিন্তু speed limit পার করো না</div>

<div class="code-block">PARKING RULES — কোথায় পার্ক করবে, কোথায় নয়
# — — — — — — — — — — — — — — — — — — — — — —
💺 SEATBELT LAW (সিটবেল্ট আইন)
# — — — — — — — — — — — — — — — — — — — — — —

  ✦ ALL passengers সিটবেল্ট পরতে বাধ্য (front + back)
  ✦ PRIMARY enforcement — police শুধু সিটবেল্ট 
    না পরা দেখে থামাতে পারে
  ✦ Driver দায়ী — passenger না পরলে driver-এর fine
  ✦ Child (under 8 / under 4'9") = car seat বা booster
  ✦ Child (under 4) = rear-facing বা forward-facing 
    car seat (age/weight অনুযায়ী)

# — — — — — — — — — — — — — — — — — — — — — —
🚫 NO PARKING (পার্ক করা নিষেদ্ধ):
# — — — — — — — — — — — — — — — — — — — — — —

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
# — — — — — — — — — — — — — — — — — — — — — —

  ✓ কার্বের ১ ফুটের মধ্যে (parallel parking)
  ✓ Downhill: চাকা কার্বের দিকে ঘুরাও (→right)
  ✓ Uphill: চাকা কার্ব থেকে দূরে ঘুরাও (→left)
  ✓ No curb + downhill: চাকা ডানে ঘুরাও
  ✓ Parking brake টানো
  ✓ গিয়ার Park (automatic) / Reverse (manual)
  ✓ ট্রাফিকের দিকে মুখ করে পার্ক করো —
    রাস্তার উল্টো পাশে গিয়ে বিপরীতমুখী
    পার্ক করা বেআইনি (facing traffic = ticket)

❄️ WINTER PARKING (শীতের নিয়ম):
# — — — — — — — — — — — — — — — — — — — — — —

  ✗ অনেক শহরে snow emergency ঘোষণা হলে
    নির্দিষ্ট রাস্তায় পার্ক নিষেধ — plow-এর জন্য
  ✗ কিছু শহরে রাত ২টা-৬টা রাস্তায় পার্ক নিষেধ
    (শীতকালে সবসময়)
  💡 নতুন এলাকায় সাইন পড়ো — tow + জরিমানা
    দুটোই হয়। শহরের website-এ নিয়ম থাকে

♿ DISABLED PARKING:
# — — — — — — — — — — — — — — — — — — — — — —

  ✗ Disabled spot-এ permit ছাড়া পার্ক নিষেধ
  ✗ $৫০০ পর্যন্ত জরিমানা
  ✗ Disabled placard বা plate লাগবে
  ✗ Family member এরও নিজের placard লাগে</div>

<div class="rt-image">
<svg viewBox="0 0 460 240" width="100%" style="max-width:490px">
<rect x="0" y="0" width="460" height="240" fill="#111" rx="8"/>
<text x="230" y="20" text-anchor="middle" fill="#f1c40f" font-size="12" font-weight="900">🅿️ এক রাস্তায় সব দূরত্ব — কোথায় পার্ক করা যায়?</text>
<!-- street -->
<rect x="0" y="70" width="460" height="70" fill="#2a2a2a"/>
<line x1="0" y1="74" x2="460" y2="74" stroke="#f1c40f" stroke-width="2" stroke-dasharray="12,10" opacity=".4"/>
<!-- curb + sidewalk -->
<rect x="0" y="140" width="460" height="8" fill="#555"/>
<rect x="0" y="148" width="460" height="92" fill="#1c1c1c"/>
<!-- RAILROAD at far left -->
<rect x="18" y="60" width="14" height="90" fill="#333"/>
<line x1="18" y1="66" x2="32" y2="66" stroke="#888" stroke-width="3"/><line x1="18" y1="82" x2="32" y2="82" stroke="#888" stroke-width="3"/><line x1="18" y1="98" x2="32" y2="98" stroke="#888" stroke-width="3"/><line x1="18" y1="114" x2="32" y2="114" stroke="#888" stroke-width="3"/><line x1="18" y1="130" x2="32" y2="130" stroke="#888" stroke-width="3"/>
<text x="25" y="52" text-anchor="middle" font-size="11">🚂</text>
<!-- red zone 50ft from railroad -->
<rect x="32" y="141" width="88" height="7" fill="#e74c3c"/>
<text x="76" y="162" text-anchor="middle" fill="#ff8a80" font-size="9" font-weight="900">৫০ ft</text>
<text x="76" y="173" text-anchor="middle" fill="#ff8a80" font-size="10">railroad থেকে</text>
<!-- GREEN legal spot 1 with parked car -->
<rect x="120" y="141" width="66" height="7" fill="#2ecc71"/>
<g transform="translate(124,116)">
<rect x="0" y="0" width="56" height="24" rx="7" fill="#3498db"/>
<rect x="9" y="4" width="38" height="10" rx="3" fill="#0b3a5c"/>
<circle cx="13" cy="26" r="6" fill="#000"/><circle cx="43" cy="26" r="6" fill="#000"/>
</g>
<text x="152" y="162" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">✅ OK</text>
<text x="152" y="173" text-anchor="middle" fill="#7bed9f" font-size="10">curb-এর ১২ ইঞ্চির মধ্যে</text>
<!-- FIRE HYDRANT -->
<rect x="192" y="141" width="66" height="7" fill="#e74c3c"/>
<g transform="translate(218,112)"><rect x="0" y="8" width="14" height="20" rx="3" fill="#c62828"/><rect x="3" y="2" width="8" height="8" rx="2" fill="#c62828"/><rect x="-4" y="12" width="6" height="6" rx="1" fill="#c62828"/><rect x="12" y="12" width="6" height="6" rx="1" fill="#c62828"/></g>
<text x="225" y="162" text-anchor="middle" fill="#ff8a80" font-size="9" font-weight="900">১৫ ft</text>
<text x="225" y="173" text-anchor="middle" fill="#ff8a80" font-size="10">hydrant-এর দুই পাশে</text>
<!-- GREEN legal spot 2 -->
<rect x="258" y="141" width="44" height="7" fill="#2ecc71"/>
<text x="280" y="162" text-anchor="middle" fill="#7bed9f" font-size="8" font-weight="900">✅ OK</text>
<!-- CROSSWALK -->
<g fill="#fff" opacity=".85"><rect x="306" y="76" width="8" height="62"/><rect x="320" y="76" width="8" height="62"/><rect x="334" y="76" width="8" height="62"/></g>
<text x="324" y="62" text-anchor="middle" font-size="11">🚶</text>
<rect x="302" y="141" width="48" height="7" fill="#e74c3c"/>
<text x="326" y="162" text-anchor="middle" fill="#ff8a80" font-size="9" font-weight="900">২০ ft</text>
<text x="326" y="173" text-anchor="middle" fill="#ff8a80" font-size="10">crosswalk থেকে</text>
<!-- STOP SIGN at right corner -->
<rect x="418" y="90" width="4" height="58" fill="#8a6d3b"/>
<polygon points="408,58 432,58 442,68 442,92 432,102 408,102 398,92 398,68" fill="#c62828" stroke="#fff" stroke-width="2"/>
<text x="420" y="85" text-anchor="middle" fill="#fff" font-size="9" font-weight="900">STOP</text>
<rect x="350" y="141" width="100" height="7" fill="#e74c3c"/>
<text x="400" y="162" text-anchor="middle" fill="#ff8a80" font-size="9" font-weight="900">৩০ ft</text>
<text x="400" y="173" text-anchor="middle" fill="#ff8a80" font-size="10">STOP sign থেকে</text>
<!-- memory aid -->
<text x="230" y="200" text-anchor="middle" fill="#f1c40f" font-size="9" font-weight="700">মনে রাখার কৌশল: সংখ্যা বাড়ে বিপদের সাথে —</text>
<text x="230" y="214" text-anchor="middle" fill="#ccc" font-size="8.5">hydrant ১৫ &lt; crosswalk ২০ &lt; stop sign ৩০ &lt; railroad ৫০</text>
<text x="230" y="228" text-anchor="middle" fill="#888" font-size="7.5">🔴 লাল curb অংশ = পার্ক নিষেধ | 🟢 সবুজ = বৈধ জায়গা</text>
</svg>
<div class="rt-caption">একটা বাস্তব block-এ চারটা দূরত্বের নিয়ম — নীল গাড়িটা একমাত্র বৈধ জায়গায় দাঁড়িয়ে</div>
</div>

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

❓ Freeway/expressway-এ default speed limit?
✅ ৭০ mph (কিছু rural freeway-তে ৭৫,
   urban-এ ৫৫-৬৫ — সবসময় posted সাইন দেখো)।

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

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — বিকেল ৩টা, স্কুলের সামনে</div>
<div class="scn-question">❓ তুমি একটা elementary school-এর পাশ দিয়ে যাচ্ছ। সাইনে: "SPEED LIMIT 25 WHEN FLASHING" — এবং হলুদ আলো জ্বলছে-নিভছে। রাস্তা ফাঁকা, কোনো বাচ্চা দেখা যাচ্ছে না। স্বাভাবিক limit ৪৫। কত গতিতে যাবে?</div>
<div class="scn-answer">✅ ২৫ mph। Beacon জ্বলছে = school zone limit কার্যকর — বাচ্চা দেখা যাক বা না যাক।</div>
<div class="scn-explain">"বাচ্চা তো নেই" — এই যুক্তি আদালতে চলে না, আর বাস্তবেও না: বাচ্চারা parked গাড়ির ফাঁক থেকে হঠাৎ বেরোয়। School zone-এ violation-এ জরিমানাও বাড়ানো। Flashing beacon দেখলেই পা গ্যাস থেকে সরাও — এটা reflex বানিয়ে ফেলো।</div>
</div>

<div class="scenario-box">
<div class="scn-label">🎭 REAL ROAD SCENARIO — সবাই ৮০-তে চলছে</div>
<div class="scn-question">❓ I-75-এ speed limit ৭০। কিন্তু আশেপাশের সব গাড়ি ৭৮-৮২ mph-এ চলছে। তুমি ৭০-এ চললে সবাই তোমাকে ওভারটেক করছে, পেছনে গাড়ি জমছে। কী করবে?</div>
<div class="scn-answer">✅ ডান লেনে সরে যাও এবং limit-এ (বা কাছাকাছি) চালাও। "সবাই করছে" speeding-এর আইনি অজুহাত নয় — ধরা পড়লে ticket তোমার।</div>
<div class="scn-explain">বাস্তবতা: traffic flow-এর সাথে বড় গতি-পার্থক্যও বিপজ্জনক। সমাধান হলো লেন নির্বাচন — ধীর ট্রাফিক ডান লেনে, বাম লেন passing-এর জন্য। বাম লেনে ৭০-এ বসে থাকা = রাস্তার সবচেয়ে বিরক্তিকর (এবং ঝুঁকিপূর্ণ) গাড়ি হওয়া।</div>
</div>

<div class="code-block">🇬🇧 ENGLISH SUMMARY — Chapter 5: Speed & Parking

  Default limits: residential/business 25 mph;
  school zone as posted (when children present /
  beacon flashing); county roads 55; freeways 70
  (75 on some rural stretches, 55-65 urban);
  trucks 65. BASIC SPEED LAW: drive at a careful,
  prudent speed for conditions — 55 in a snowstorm
  can be a ticket even if the limit is 55. Too
  slow is also illegal (minimum speeds on
  freeways). Construction zones: fines double.

  No parking within: 15 ft of a fire hydrant,
  20 ft of a crosswalk, 30 ft of a STOP sign/
  signal, 50 ft of a railroad crossing, 20 ft of
  a fire station entrance. Never on sidewalks,
  in bike lanes, or in disabled spots without a
  permit (up to $500). Park within 12 inches of
  the curb, facing the direction of traffic —
  parking against traffic is illegal.

  Hill parking: downhill = wheels toward the
  curb (right); uphill = wheels away from curb
  (left); no curb = wheels toward the shoulder
  (right). Always set the parking brake. Watch
  for winter/snow-emergency parking bans.

  Seatbelts: everyone, front and back — primary
  enforcement. Under 8 or under 4'9" = car seat
  or booster.</div>

<div class="secret-box">🅿️ Speed: residential 25, highway 70, school 25 mph। Basic speed law: condition অনুযায়ী চালাও। Parking: fire hydrant 15ft, crosswalk 20ft, stop sign 30ft, railroad 50ft দূরে। Downhill = চাকা ডানে, uphill = চাকা বামে। Construction = double fine!</div>`
});

// === MORE DOORS HERE ===
