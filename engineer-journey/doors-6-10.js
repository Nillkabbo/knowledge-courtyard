// ════════════════════════════════════════
// COURT OF THE GRAND MUHANDIS — DOORS 6-10
// Mastery Phase: From Engineer to Senior
// ════════════════════════════════════════

// ════════════════════════════════════════
// DOOR 6: ROOT CAUSE DEBUGGING
// ════════════════════════════════════════
doors.push({
  num:6, icon:"🔍", color:"#f06292", name:"তদন্তকারীর কক্ষ",
  subtitle:"The Investigator's Chamber", tech:"Root Cause Debugging",
  spirit:"তাহকিক — গভীর তদন্ত, সত্য উন্মোচন",
  secret:"শিক্ষানবিশ bug খোঁজে। সিনিয়র সিস্টেম বোঝে যতক্ষণ না bug স্পষ্ট হয়ে যায়। অনুমান করো, প্রমাণ করো, ভুল প্রমাণ করো।",
  recall:{
    q:"তদন্তকারী কেন সরাসরি অপরাধী খোঁজেন না, বরং সাক্ষী সংগ্রহ করেন?",
    qen:"Why doesn't the investigator directly hunt the criminal, but gathers evidence first?",
    a:"কারণ সরাসরি খোঁজলে ভুল মানুষে গিয়ে পৌঁছানো যায়। সাক্ষী সংগ্রহ = log, trace, metric। তারপর hypothesis — 'এই কারণে হয়েছে।' তারপর প্রমাণ বা অপ্রমাণ। বিজ্ঞান, অনুমান নয়।",
    aen:"Because hunting directly leads to the wrong person. Gathering evidence = logs, traces, metrics. Then hypothesis — 'this is why.' Then prove or disprove. Science, not guessing."
  },
  story:`
<p class="scene-setting">ষষ্ঠ কক্ষ। একটা তদন্ত কক্ষ। দেয়ালে পিনবোর্ড, লাল সুতো দিয়ে সংযুক্ত সাক্ষী। মেঝেতে ছড়ানো নথি। মুফাত্তিশ আলী দাঁড়িয়ে আছেন — চোখে বিশ্লেষণের দৃষ্টি, হাতে একটা ম্যাগনিফাইং গ্লাস, পাশে একটা ফাটল দেওয়া স্তম্ভ। সবাই ভাবছে — ফাটলের কারণ বাইরের আঘাত। কিন্তু তিনি ভাবছেন — ভেতরের কাঠামো।</p>
<p class="scene-setting en">The sixth chamber. An investigation room. Pinboard on walls, witnesses connected by red thread. Documents scattered on the floor. Mufattish Ali stands — analytical gaze, magnifying glass in hand, beside a cracked pillar. Everyone assumes — the crack is from external impact. But he's thinking — internal structure.</p>

<div class="dialogue">ঝড়ের কারিগর বলেছিলেন — ভাঙা ধরেই ডিজাইন করো। কিন্তু আমি বলি — ভাঙা ধরেই তদন্ত করো। প্রতিটা bug একটা রহস্য। কিন্তু রহস্য সমাধানের দুটো উপায় — অনুমান, বা বিজ্ঞান। শিক্ষানবিশ অনুমান করে। সিনিয়র বিজ্ঞান করে।</div>
<div class="dialogue en">"The storm craftsman said — design for breakage. But I say — investigate for breakage. Every bug is a mystery. But solving mysteries has two approaches — guessing, or science. Juniors guess. Seniors do science."</div>

<div class="junior-vs-senior">
<div class="jvs-card jvs-junior">
<div class="jvs-label">👶 শিক্ষানবিশ</div>
"হয়তো এই লাইনে সমস্যা!" → র‍্যান্ডম পরিবর্তন → "কাজ করছে! হয়েছে!" → ৩ দিন পর আবার ভাঙে। কারণ root cause ঠিক করেনি — symptom ঢেকেছেন।
</div>
<div class="jvs-card jvs-senior">
<div class="jvs-label">🏛️ মহাকারিগর</div>
"সিস্টেমের কোন অংশ এটা করতে পারে?" → search space কমান → hypothesis তৈরি → hypothesis ভুল প্রমাণের চেষ্টা → যদি টিকে থাকে, root cause। স্থায়ী সমাধান।
</div>
</div>

<div class="code-block">The Scientific Debugging Method:

১. Reproduce — সমস্যা নির্ভরযোগ্যভাবে তৈরি করো
   (If you can't reproduce, you can't fix)

২. Narrow — কোথায় নয়, সেটা বাদ দাও
   "এটা frontend নয়" → বাদ
   "এটা DB নয়" → বাদ
   "এটা API layer" → ফোকাস

৩. Hypothesize — "আমি মনে করি X কারণে"
   "আমার ধারণা — race condition, কারণ
    এটা শুধু high traffic-এ হয়"

৪. Disprove — নিজের ধারণা ভুল প্রমাণের চেষ্টা
   "যদি race condition হয়, তাহলে lock 
    দিলে ঠিক হবে। দেখি... না, ঠিক হয়নি।
    ধারণা ভুল। নতুন ধারণা দরকার।"

৫. Root Cause — যে কারণটি বাদ যায় না
   সেটাই আসল কারণ। সেটাই ঠিক করো।</div>

<div class="dialogue">তাহকিক — গভীর তদন্ত, সত্য উন্মোচন। কুরআনে আল্লাহ বলেন — "যদি তোমরা জানতে না, তবে জিজ্ঞেস করো জ্ঞানীদের।" তাহকিক মানে সত্যের খোঁজ — অনুমানে থামা নয়। প্রতিটা bug-এ একটা সত্য লুকানো আছে। সেই সত্য বের করাই তদন্ত। "হয়তো এটা" বলে থেমে গেলে তুমি শিক্ষানবিশ। "প্রমাণ করি" বলে এগিয়ে গেলে তুমি সিনিয়র।</div>
<div class="dialogue en">"Tahqiq — deep investigation, revealing truth. Allah says in the Quran — 'If you don't know, ask those who know.' Tahqiq means searching for truth — not stopping at assumption. Every bug hides a truth. Finding it is investigation. If you stop at 'maybe this,' you're a junior. If you say 'let me prove it,' you're a senior."</div>`,
  senior:{
    title:"Debugging Anti-Patterns — যা করবে না",
    body:`
    <p><strong>❌ Random changes:</strong> "এটা চেষ্টা করি" — বারবার। সময় নষ্ট, root cause মিস।</p>
    <p><strong>❌ Blame:</strong> "এটা নিশ্চয় library-র bug" — প্রথমে নিজের কোড দেখো।</p>
    <p><strong>❌ Symptom fix:</strong> try-catch দিয়ে error ঢেকে দেওয়া। Bug আছে, শুধু চোখে দেখা যায় না।</p>
    <p><strong>❌ Fix and run:</strong> "কাজ করছে!" বলে চলে যাওয়া। কেন কাজ করলো সেটা না জেনে।</p>`
  }
});

// ════════════════════════════════════════
// DOOR 7: READING CODE
// ════════════════════════════════════════
doors.push({
  num:7, icon:"📖", color:"#2dd4bf", name:"পূর্বপুরুষের গ্রন্থাগার",
  subtitle:"The Ancestors' Library", tech:"Reading Code & Code Review",
  spirit:"তাদাব্বুর — গভীর চিন্তা, পূর্বের জ্ঞান বোঝা",
  secret:"সিনিয়র ইঞ্জিনিয়ার কোড লেখার চেয়ে কোড পড়ে বেশি। ১০:১ অনুপাত। পড়া ছাড়া ভালো লেখা যায় না।",
  recall:{
    q:"গ্রন্থপাল কেন নিজে লেখেন না, পুরনো বই পড়েন বেশি?",
    qen:"Why does the librarian read old books instead of writing new ones?",
    a:"কারণ পড়া ছাড়া ভালো লেখা যায় না। সিনিয়র ১০ গুণ বেশি পড়েন যতটা লেখেন। অন্যের কোড, নিজের কোড, লাইব্রেরির কোড — সব পড়েন। Code review হলো দুজনের একসাথে পড়া।",
    aen:"Because you can't write well without reading. Seniors read 10x more than they write. Others' code, own code, library code — all read. Code review is two people reading together."
  },
  story:`
<p class="scene-setting">সপ্তম কক্ষ। একটা সুবিশাল প্রাচীন গ্রন্থাগার। দেয়াল থেকে দেয়াল বই — পুরনো চামড়ার বাঁধাই, হাতে লেখা পাণ্ডুলিপি, মুদ্রিত কোডের কপি। গ্রন্থপাল হারুণ বসে আছেন — চশমা নাকে, একটা পুরনো কোডবেসের খাতা খোলা। তিনি লিখছেন না। পড়ছেন। লাইন বাই লাইন। মাঝে মাঝে থামেন, ভাবেন, নোট করেন।</p>
<p class="scene-setting en">The seventh chamber. A vast ancient library. Wall-to-wall books — old leather bindings, handwritten manuscripts, printed code copies. Librarian Harun sits — spectacles on nose, an old codebase notebook open. He's not writing. Reading. Line by line. Pausing, thinking, noting.</p>

<div class="dialogue">তদন্তকারী বলেছিলেন — bug খোঁজো বিজ্ঞান দিয়ে। কিন্তু আমি বলি — bug খোঁজার আগে কোড পড়তে পারা দরকার। তুমি যা পড়তে পারো না, তা ঠিক করতে পারো না। আর তুমি যা লেখো, তা অন্যকে পড়তে হবে। তাই পড়া = লেখার ভিত্তি।</div>
<div class="dialogue en">"The investigator said — find bugs with science. But I say — before finding bugs, you must be able to read code. You can't fix what you can't read. And what you write, others must read. So reading = the foundation of writing."</div>

<div class="junior-vs-senior">
<div class="jvs-card jvs-junior">
<div class="jvs-label">👶 শিক্ষানবিশ</div>
নিজের কোড লেখে, অন্যের কোড পড়ে না। Code review-তে "LGTM 👍" দেয়। স্ট্যান্ডার্ড লাইব্রেরির সোর্স কোড কখনো খোলে না।
</div>
<div class="jvs-card jvs-senior">
<div class="jvs-label">🏛️ মহাকারিগর</div>
দৈনিক অন্যের কোড পড়ে। Code review-তে গভীরভাবে প্রশ্ন করে। লাইব্রেরির সোর্স পড়ে বোঝে কীভাবে কাজ করে। পড়া = শেখার প্রধান উপায়।
</div>
</div>

<div class="code-block">How to Read Code (Effectively):

১. High-level first — পুরো কাঠামো বুঝো
   ফাইল লিস্ট → ক্লাস লিস্ট → ফাংশন লিস্ট
   
২. Entry point — কোথা থেকে শুরু হয়?
   main()? app.py? index.js?

৩. Follow the data — ডেটা কীভাবে প্রবাহিত হয়?
   input → transform → output

৪. Question everything — "কেন এভাবে?"
   শুধু কী নয় — কেন এভাবে লেখা হয়েছে?
   
৫. Code Review = দুজনে পড়া
   ❌ "LGTM 👍"
   ✅ "এখানে কেন mutable default? 
       এটা কি thread-safe?"
   ✅ "এই নামটা ভুল বোঝায় — 
       rename করা যায়?"</div>

<div class="dialogue">তাদাব্বুর — গভীর চিন্তা, পূর্বের জ্ঞানের গভীরে যাওয়া। কুরআনে আল্লাহ বলেন — "আল্লাহর বাণী পড়া হয় তোমাদের প্রতি, কিন্তু তোমরা তা থেকে মুখ ফিরিয়ে নাও?" তাদাব্বুর মানে শুধু পড়া নয় — গভীরে যাওয়া, প্রশ্ন করা, বোঝা। কোডও তেমনি — শুধু scan করা তাদাব্বুর নয়। থামো, ভাবো, প্রশ্ন করো — "কেন এভাবে? এটা কি সঠিক? এটা কি ভাঙতে পারে?" Code review হলো তাদাব্বুরের সামষ্টিক রূপ — একসাথে চিন্তা করা।</div>
<div class="dialogue en">"Tadabbur — deep contemplation, going deep into prior knowledge. Allah says — 'Are the verses of Allah recited to you, yet you turn away?' Tadabbur isn't just reading — it's going deep, questioning, understanding. Code too — just scanning isn't tadabbur. Pause, think, ask — 'Why this way? Is it correct? Could it break?' Code review is the collective form of tadabbur — thinking together."</div>`,
  senior:{
    title:"Code Review Checklist — প্রতিটা PR-এ",
    body:`
    <p><strong>১. কাজ করে কি?</strong> Logic বুঝো, শুধু syntax নয়।</p>
    <p><strong>২. পড়া যায় কি?</strong> ৬ মাস পরে তুমি বুঝবে? অন্য কেউ?</p>
    <p><strong>৩. Edge case?</strong> Empty input? null? Concurrent?</p>
    <p><strong>৪. টেস্ট?</strong> আছে? সঠিক? বা অতিরিক্ত?</p>
    <p><strong>৫. কেন?</strong> শুধু কী নয় — architecture প্রশ্ন করো।</p>`
  }
});

// ════════════════════════════════════════
// DOOR 8: COMMUNICATION & TEACHING
// ════════════════════════════════════════
doors.push({
  num:8, icon:"🗣️", color:"#ffd966", name:"পরিষদের কক্ষ",
  subtitle:"The Council Chamber", tech:"Communication & Teaching",
  spirit:"হিকমাহ — প্রজ্ঞা, সঠিক সময়ে সঠিক কথা",
  secret:"সিনিয়র ইঞ্জিনিয়ার কোডে সেরা নন — ব্যাখ্যা করতে সেরা। শান্তভাবে, গভীরভাবে, প্রসঙ্গ দিয়ে। 'জানি না' বলতে ভয় পায় না।",
  recall:{
    q:"পরামর্শদাতা কেন দ্রুত উত্তর দেন না, বরং প্রশ্ন করেন?",
    qen:"Why does the counselor ask questions instead of giving quick answers?",
    a:"কারণ দ্রুত উত্তর শেখায় না — চিন্তা বন্ধ করে। সিনিয়র বোঝেন — উত্তর দেওয়ার চেয়ে প্রশ্ন করে চিন্তা শেখানো বেশি কার্যকর। 'আমি জানি না' বলা দুর্বলতা নয় — সততা। সততা ছাড়া শেখানো যায় না।",
    aen:"Because quick answers don't teach — they stop thinking. Seniors know — asking questions that provoke thought is more effective than giving answers. Saying 'I don't know' isn't weakness — it's honesty. Without honesty, you can't teach."
  },
  story:`
<p class="scene-setting">অষ্টম কক্ষ। একটা গোলাকার পরিষদ কক্ষ। মাঝখানে একটা গোল টেবিল, চারদিকে চেয়ার। দেয়ালে সবার দিকে মুখ করা আয়না — যাতে কেউ লুকাতে না পারে। মুশিফা ফাতিমা বসে আছেন — শান্ত মুখ, ধীর কণ্ঠ, চোখে ধৈর্য। সামনে একজন তরুণ ইঞ্জিনিয়ার এসেছেন — হতাশ, "এই বাগ পাচ্ছি না!" মুশিফা ফাতিমা উত্তর দিলেন না। প্রশ্ন করলেন, "তুমি কোথায় পর্যন্ত খুঁজেছ?"</p>
<p class="scene-setting en">The eighth chamber. A circular council chamber. A round table in the center, chairs around. Mirrors on walls facing everyone — so no one can hide. Mushifa Fatima sits — calm face, slow voice, patient eyes. A young engineer has come — frustrated, "I can't find this bug!" Mushifa Fatima didn't answer. She asked, "Where have you looked so far?"</p>

<div class="dialogue">গ্রন্থপাল বলেছিলেন — পড়তে শেখো। কিন্তু আমি বলি — পড়ার পরে আসে বোঝানো। তুমি যা বুঝেছ, তা অন্যকে বোঝাতে না পারলে — তুমি সত্যিই বোঝোনি। Feynman Technique: যদি সহজ ভাষায় বোঝাতে না পারো, তুমি নিজে বোঝো না।</div>
<div class="dialogue en">"The librarian said — learn to read. But I say — after reading comes explaining. If you can't explain what you understand to others — you don't truly understand. Feynman Technique: if you can't explain it simply, you don't understand it yourself."</div>

<div class="junior-vs-senior">
<div class="jvs-card jvs-junior">
<div class="jvs-label">👶 মিড-লেভেল</div>
এক লাইনে উত্তর দেয়, চলে যায়। ভয় পায় — "যদি সে আরও প্রশ্ন করে? যদি আমি না জানি? বোকা লাগবে।" তাই প্রশ্ন এড়ায়। জ্ঞান লুকায়।
</div>
<div class="jvs-card jvs-senior">
<div class="jvs-label">🏛️ মহাকারিগর</div>
বসে, প্রসঙ্গ দেয়, ভিন্ন কোণ থেকে বোঝায়। "জানি না" বলে সাথে সাথে খুঁজে। প্রশ্ন এড়ায় না — প্রশ্ন চায়। কারণ শেখানোই শেখার সেরা উপায়।
</div>
</div>

<div class="dialogue">হিকমাহ — প্রজ্ঞা। শুধু জ্ঞান নয় — কখন কী বলবে, কীভাবে বলবে, কাকে বলবে — সেটাই হিকমাহ। কুরআনে আল্লাহ বলেন — "যাকে প্রজ্ঞা দেওয়া হয়েছে, তাকে প্রভূত কল্যাণ দেওয়া হয়েছে।" প্রজ্ঞা মানে কঠোর সত্য নয় — সঠিক সময়ে, সঠিক ভাষায়, সঠিক উদ্দেশ্যে কথা। সিনিয়র ইঞ্জিনিয়ার শুধু কোড জানেন না — তিনি জানেন কখন চুপ থাকতে হয়, কখন বলতে হয়, কীভাবে বলতে হয়।</div>
<div class="dialogue en">"Hikmah — wisdom. Not just knowledge — but when to say what, how to say it, to whom — that is hikmah. Allah says — 'Whoever is given wisdom has been given much good.' Wisdom isn't harsh truth — it's speaking at the right time, in the right language, with the right intent. A senior engineer doesn't just know code — they know when to stay silent, when to speak, how to speak."</div>`,
  senior:{
    title:"Communication Anti-Patterns — যা করবে না",
    body:`
    <p><strong>❌ "RTFM" — অবজ্ঞা:</strong> কেউ প্রশ্ন করলে অবজ্ঞা করো না। একদিন তুমিও শিক্ষানবিশ ছিলে।</p>
    <p><strong>❌ Knowledge hoarding:</strong> জ্ঞান লুকিয়ে রাখা নিজেকে গুরুত্বপূর্ণ রাখার চেষ্টা। সত্যিকারের গুরুত্ব = অন্যকে গড়ে তোলা।</p>
    <p><strong>❌ Jargon wall:</strong> কঠিন শব্দে ঢেকে দেওয়া যাতে সাধারণ মানুষ না বোঝে। সত্যিকারের বোঝা = সহজ ভাষায় বোঝানো।</p>
    <p><strong>✅ "জানি না, চলো দেখি" —</strong> এটাই সবচেয়ে শক্তিশালী বাক্য।</p>`
  }
});

// ════════════════════════════════════════
// DOOR 9: BUSINESS UNDERSTANDING
// ════════════════════════════════════════
doors.push({
  num:9, icon:"🎯", color:"#ff9800", name:"নিয়তের আয়না",
  subtitle:"The Mirror of Intent", tech:"Business Impact & Understanding the Why",
  spirit:"নিয়্যাত — উদ্দেশ্য, অভিপ্রায়",
  secret:"সিনিয়র 'কী বানাবো' জিজ্ঞেস করার আগে 'কেন বানাবো' জিজ্ঞেস করেন। প্রতিটা লাইন কোডের পেছনে একটা ব্যবসায়িক কারণ। উদ্দেশ্য ছাড়া কোড = অক্ষর সাজানো।",
  recall:{
    q:"দর্শক কেন কারিগরকে 'কী বানাবে' জিজ্ঞেস করার আগে 'কেন বানাবে' জিজ্ঞেস করেন?",
    qen:"Why does the observer ask 'why build' before 'what to build'?",
    a:"কারণ কেন ছাড়া কী অর্থহীন। সিনিয়র জানেন — প্রতিটা feature-এর পেছনে একটা সমস্যা, প্রতিটা সমস্যার পেছনে একটা মানুষ। উদ্দেশ্য বুঝলে সঠিক feature বোঝা যায়। উদ্দেশ্য না বুঝে feature বানালে — সুন্দর কিন্তু বেকার।",
    aen:"Because 'what' is meaningless without 'why.' The senior knows — behind every feature is a problem, behind every problem is a person. Understanding intent reveals the right feature. Building without intent — beautiful but useless."
  },
  story:`
<p class="scene-setting">নবম কক্ষ। একটা বিশাল আয়নার কক্ষ। কিন্তু এই আয়নাগুলো চেহারা দেখায় না — উদ্দেশ্য দেখায়। কেউ দাঁড়ালে আয়না দেখায় তার আসল কারণ। দারিশ আল-বাসির দাঁড়িয়ে আছেন — অন্ধ, কিন্তু সবচেয়ে বেশি দেখেন। তিনি চোখে দেখেন না — উদ্দেশ্যে দেখেন। তিনি প্রশ্ন করেন — "তুমি এটা কেন বানাতে চাও?"</p>
<p class="scene-setting en">The ninth chamber. A vast mirror room. But these mirrors don't show faces — they show intent. When someone stands before them, the mirror reveals their true reason. Darish al-Basir stands — blind, but sees the most. He doesn't see with eyes — he sees with intent. He asks — "Why do you want to build this?"</p>

<div class="dialogue">পরিষদ কারিগর বলেছিলেন — বোঝানো শেখো। কিন্তু আমি বলি — বোঝানোর আগে বুঝতে হয়। ব্যবসা বুঝতে হয়। ইউজার বুঝতে হয়। সমস্যা বুঝতে হয়। তুমি যা বানাচ্ছ, তার পেছনে একটা কারণ আছে। সেই কারণ না বুঝে কোড লিখলে — তুমি ইট বসাচ্ছ, কিন্তু কোথায় বসাচ্ছ জানো না।</div>
<div class="dialogue en">"The council craftsman said — learn to explain. But I say — before explaining, you must understand. Understand the business. Understand the user. Understand the problem. Behind what you build, there's a reason. Coding without understanding that reason — you're laying bricks, but don't know where."</div>

<div class="junior-vs-senior">
<div class="jvs-card jvs-junior">
<div class="jvs-label">👶 শিক্ষানবিশ</div>
"JIRA-তে লেখা — 'Login page বানাও।' আমি বানালাম। হয়েছে।" কেন দরকার, কার দরকার, কী সমস্যা সমাধান হবে — কিছু জিজ্ঞেস করে না। টিকেট মেশিন।
</div>
<div class="jvs-card jvs-senior">
<div class="jvs-label">🏛️ মহাকারিগর</div>
"এই feature-টা কেন দরকার? কোন ইউজারের কোন সমস্যা সমাধান হবে? আমরা কি এটা দিয়ে পরিমাপ করবো?" প্রশ্ন করে, বোঝে, তারপর কোড। কারণ উদ্দেশ্য ছাড়া কোড = বেকার শ্রম।
</div>
</div>

<div class="dialogue">নিয়্যাত — উদ্দেশ্য। নবীজি (সা) বলেছেন — "প্রতিটা কাজের ফল নিয়্যাতের উপর নির্ভর করে।" কোডও একটা কাজ। তার নিয়্যাত কী? কার সমস্যা সমাধান হচ্ছে? যদি নিয়্যাত স্পষ্ট না হয় — কোড সুন্দর হতে পারে, কিন্তু বেকার। সিনিয়র ইঞ্জিনিয়ার প্রতিটা PR-এ নিয়্যাত দেখেন — "এটা কেন? কার জন্য? কী হবে?" নিয়্যাত ছাড়া কোড = আমল ছাড়া ইবাদত — কোনো ফল নেই।</div>
<div class="dialogue en">"Niyyah — intention. The Prophet (pbuh) said — 'Every action is judged by its intention.' Code is an action. What is its niyyah? Whose problem is being solved? If the niyyah isn't clear — the code can be beautiful, but useless. A senior engineer checks niyyah in every PR — 'Why this? For whom? What will it achieve?' Code without niyyah = worship without devotion — no fruit."</div>`,
  senior:{
    title:"Business Acumen — প্রতিটা Feature-এ ৪ প্রশ্ন",
    body:`
    <p>প্রতিটা feature বানানোর আগে এই ৪ প্রশ্ন করো:</p>
    <p><strong>১. কোন সমস্যা সমাধান হবে?</strong> (What problem?)</p>
    <p><strong>২. কার সমস্যা?</strong> (Whose problem?)</p>
    <p><strong>৩. কীভাবে মাপবো সফলতা?</strong> (How to measure?)</p>
    <p><strong>৪. না করলে কী হয়?</strong> (What if we don't?)</p>
    <p>এই ৪ প্রশ্নের উত্তর না থাকলে — কোড লিখো না। আগে উত্তর খোঁজো।</p>`
  }
});

// ════════════════════════════════════════
// DOOR 10: TECHNICAL DEBT & PRAGMATISM
// ════════════════════════════════════════
doors.push({
  num:10, icon:"🏛️", color:"#f0c75e", name:"গম্বুজের কক্ষ",
  subtitle:"The Dome Chamber", tech:"Technical Debt & Pragmatic Excellence",
  spirit:"ইহসান — সুন্দরতায় উৎকর্ষ, ভারসাম্যে",
  secret:"সিনিয়র নিখুঁত কোড লেখেন না — সঠিক মাত্রায় ভালো কোড লেখেন। কখন ঋণ নিতে হয়, কখন শোধ করতে হয় — সেটাই প্রজ্ঞা। নিখুঁত = শিক্ষানবিশের অহংকার।",
  recall:{
    q:"মহাকারিগর কেন কিছু জায়গায় সাধারণ ইট ব্যবহার করেন, সবখানে মার্বেল নয়?",
    qen:"Why does the grand master use simple bricks in some places, not marble everywhere?",
    a:"কারণ প্রতিটা জায়গায় মার্বেল = সময় ও অর্থ নষ্ট, প্রজেক্ট কখনো শেষ হবে না। সিনিয়র জানেন — কোথায় নিখুঁত দরকার (core), কোথায় যথেষ্ট (good enough)। এটাই technical debt-এর প্রজ্ঞা — কখন ঋণ, কখন শোধ।",
    aen:"Because marble everywhere = wasted time and money, project never finishes. The senior knows — where perfection matters (core), where good enough suffices. This is the wisdom of technical debt — when to borrow, when to pay."
  },
  story:`
<p class="scene-setting">দশম কক্ষ। শেষ কক্ষ। একটা সুবিশাল গম্বুজের নিচে। মার্বেল খোদাই, সোনার ফ্রেম, কিন্তু — কিছু জায়গায় সাধারণ ইট, কিছু জায়গায় অসম্পূর্ণ কাজ। মহাকারিগর সিনান দাঁড়িয়ে আছেন — প্রাচীন, শান্ত, হাতে দুটো বাক্স। একটায় "নিখুঁত" লেখা, আরেকটায় "যথেষ্ট।" তিনি বলেন — "উভয়ের জায়গা আছে। প্রজ্ঞা হলো জানা — কোথায় কোনটা।"</p>
<p class="scene-setting en">The tenth chamber. The last chamber. Beneath a vast dome. Marble carvings, golden frames, but — simple bricks in some places, incomplete work in others. Grand Master Sinan stands — ancient, calm, two boxes in hand. One labeled "perfect," the other "good enough." He says — "Both have their place. Wisdom is knowing — which where."</p>

<div class="dialogue">নিয়তের কারিগর বলেছিলেন — উদ্দেশ্য বুঝো। কিন্তু আমি বলি — উদ্দেশ্য বুঝলেই যথেষ্ট নয়। নির্ভুল সময়ে নির্ভুল মাত্রায় কাজ করতে হয়। নয়টা কক্ষ পেরিয়েছ — প্রতিটা শিখিয়েছে এক একটা নীতি। কিন্তু সবচেয়ে গুরুত্বপূর্ণ নীতি এই — নিখুঁত হওয়া অসম্ভব। প্রশ্ন হলো — কতটা ভালো যথেষ্ট?</div>
<div class="dialogue en">"The intent craftsman said — understand purpose. But I say — understanding purpose isn't enough. You must work at the right level, at the right time. You've passed nine chambers — each teaching a principle. But the most important principle is this — perfection is impossible. The question is — how good is good enough?"</div>

<div class="junior-vs-senior">
<div class="jvs-card jvs-junior">
<div class="jvs-label">👶 দুই ধরনের শিক্ষানবিশ</div>
<strong>ধরন ১:</strong> সব কিছু দ্রুত, নোংরা কোড। "কাজ করছে!" Technical debt কখনো শোধ করে না। একদিন কোডবেস পচে যায়।<br><br>
<strong>ধরন ২:</strong> সব কিছু নিখুঁত। Over-engineering। একটা simple CRUD-এ ২০টা design pattern। প্রজেক্ট কখনো ship হয় না।
</div>
<div class="jvs-card jvs-senior">
<div class="jvs-label">🏛️ মহাকারিগর</div>
জানেন — core logic-এ নিখুঁত দরকার। UI prototype-এ "যথেষ্ট" যথেষ্ট। Technical debt সচেতনভাবে নেন — টিমের সাথে আলোচনা করেন, track করেন, পরিকল্পিতভাবে শোধ করেন। "নিখুঁত" নয় — "সঠিক মাত্রায় ভালো।"
</div>
</div>

<div class="code-block">Technical Debt — The Senior's Framework:

Good Debt (ইচ্ছাকৃত):
  • Prototype-এ দ্রুত ship করা
  • পরে refactor করার প্রতিশ্রুতি
  • TEAM-এর সাথে আলোচনা করে নেওয়া
  • লিখে রাখা — "এই কোড অস্থায়ী"

Bad Debt (অনিচ্ছাকৃত):
  • অজ্ঞতায় খারাপ কোড
  • কেউ জানে না দেনা আছে
  • কখনো শোধ হয় না
  • একদিন কোডবেস অচল

The Question:
  "এই দ্রুত কোড কি আমাকে ৩ মাসে 
   ৩ গুণ ধীর করবে? যদি হ্যাঁ — 
   ধীরে লেখো। যদি না — দ্রুত লেখো।"</div>

<div class="dialogue">দশটা কক্ষ পেরিয়েছ। ভিত্তিপ্রস্তর থেকে গম্বুজ পর্যন্ত। প্রতিটা কক্ষে এক একজন মাস্টার। প্রতেকজন এক একটা নীতি দিয়ে গেছেন — first principles, decomposition, abstraction, trade-offs, resilience, debugging, reading, communication, business intent, আর pragmatism। কিন্তু সবচেয়ে গুরুত্বপূর্ণ কথা — কোনো একটা নীতি একা যথেষ্ট নয়। দশটার সমন্বয়ই সিনিয়র ইঞ্জিনিয়ার। যে শুধু decomposition জানে সে over-engineer করে। যে শুধু pragmatism জানে সে sloppy হয়। দশটার ভারসাম্যই প্রকৃত কারিগর।</div>
<div class="dialogue en">"You've passed ten chambers. From foundation stone to dome. Each chamber had a master. Each gave a principle — first principles, decomposition, abstraction, trade-offs, resilience, debugging, reading, communication, business intent, and pragmatism. But the most important truth — no single principle alone suffices. The synthesis of all ten is the senior engineer. One who knows only decomposition over-engineers. One who knows only pragmatism becomes sloppy. The balance of ten is the true craftsman."</div>

<div class="dialogue">ইহসান — উৎকর্ষ, সৌন্দর্য, ভারসাম্য। নবীজি (সা) বলেছেন — "আল্লাহ তোমাদের জন্য লিখেছেন ইহসান — সব কিছুতে।" ইহসান মানে শুধু সুন্দর নয় — সঠিক মাত্রায় সুন্দর। অতিরিক্ত নয়, কম নয় — ঠিক যতটা দরকার। কোডেও ইহসান — নিখুঁত নয়, sloppy নয়, ঠিক যতটা দরকার ততটা ভালো। এটাই প্রকৌশলের সর্বোচ্চ স্তর — উৎকর্ষের ভারসাম্য।</div>
<div class="dialogue en">"Ihsan — excellence, beauty, balance. The Prophet (pbuh) said — 'Allah has prescribed ihsan for you — in everything.' Ihsan doesn't mean just beautiful — but beautiful in the right measure. Not excess, not less — exactly what's needed. In code too, ihsan — not perfect, not sloppy, exactly as good as needed. This is the highest level of engineering — the balance of excellence."</div>

<div class="verse">"যে ব্যক্তি এই পথে চলে সহজতা খোঁজে, আল্লাহ তার জন্য সহজ করেন।"<br>— নবীজি (সা)<br><br>প্রকৌশল কঠিন নয় — কিন্তু সহজও নয়। সঠিক পথে চললে আল্লাহ সহজ করেন। দশটা কক্ষ = দশটা দিশা। এই দিশায় চলো — সিনিয়র ইঞ্জিনিয়ার হওয়া গন্তব্য নয় — যাত্রা। প্রতিদিন এক ধাপ। প্রতিদিন এক শিক্ষা। প্রতিদিন এক ভুল — আর তার থেকে এক বোঝাপড়া।</div>

<div class="secret-box"><div class="label">দশম কক্ষ — রহস্য</div><div class="text">🏛️ নিখুঁত নয় — সঠিক মাত্রায় ভালো।<br><small>Technical debt সচেতনভাবে নাও, পরিকল্পিতভাবে শোধ করো। Core-এ নিখুঁত, prototype-এ যথেষ্ট। ইহসান = উৎকর্ষের ভারসাম্য।</small></div></div>`
});
