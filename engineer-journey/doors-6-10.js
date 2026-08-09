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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Fear of Breaking Things:</strong> Dev was afraid to push code — paralyzed by fear of bugs. Fix: you have tests, git, staging. Break, learn, fix.</div></div>


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

<div class="diagram">
<div class="diag-title">Search Space Narrowing — সন্দেহ থেকে সত্যে</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
  <text class="lbl-sm" x="80" y="38" style="font-size:9.5px">সমগ্র সিস্টেম</text>
  <rect class="node" x="20" y="50" width="120" height="100" rx="6"/>
  <text class="lbl-sm" x="80" y="103" style="font-size:9px">হাজার লাইন কোড</text>

  <text class="lbl-sm" x="298" y="80" style="font-size:16px;fill:var(--ink-mute)">→</text>

  <text class="lbl-sm" x="210" y="58" style="font-size:9.5px">Frontend বাদ</text>
  <rect class="node" x="150" y="70" width="120" height="70" rx="6"/>
  <text class="lbl-sm" x="210" y="108" style="font-size:9px">Backend + DB</text>

  <text class="lbl-sm" x="340" y="70" style="font-size:9.5px">DB বাদ</text>
  <rect class="node" x="280" y="82" width="120" height="46" rx="6"/>
  <text class="lbl-sm" x="340" y="108" style="font-size:9px">API Layer</text>

  <rect class="node-fire" x="410" y="93" width="130" height="24" rx="6"/>
  <text class="lbl-fire" x="475" y="109" style="font-size:9.5px">✓ Root Cause: 1 লাইন</text>
</svg>
<div class="diag-cap">প্রতিটা hypothesis-test সন্দেহের জায়গা ছোট করে — যতক্ষণ না একটাই কারণ বাকি থাকে। / Each hypothesis-test shrinks the suspect zone — until only one cause remains.</div>
</div>

<div class="dialogue">তাহকিক — গভীর তদন্ত, সত্য উন্মোচন। কুরআনে আল্লাহ বলেন — "যদি তোমরা জানতে না, তবে জিজ্ঞেস করো জ্ঞানীদের।" তাহকিক মানে সত্যের খোঁজ — অনুমানে থামা নয়। প্রতিটা bug-এ একটা সত্য লুকানো আছে। সেই সত্য বের করাই তদন্ত। "হয়তো এটা" বলে থেমে গেলে তুমি শিক্ষানবিশ। "প্রমাণ করি" বলে এগিয়ে গেলে তুমি সিনিয়র।</div>
<div class="dialogue en">"Tahqiq — deep investigation, revealing truth. Allah says in the Quran — 'If you don't know, ask those who know.' Tahqiq means searching for truth — not stopping at assumption. Every bug hides a truth. Finding it is investigation. If you stop at 'maybe this,' you're a junior. If you say 'let me prove it,' you're a senior."</div>`,
  senior:{
    title:"Debugging Anti-Patterns — যা করবে না",
    body:`
    <p><strong>❌ Random changes:</strong> "এটা চেষ্টা করি" — বারবার। সময় নষ্ট, root cause মিস।</p>
    <p><strong>❌ Blame:</strong> "এটা নিশ্চয় library-র bug" — প্রথমে নিজের কোড দেখো।</p>
    <p><strong>❌ Symptom fix:</strong> try-catch দিয়ে error ঢেকে দেওয়া। Bug আছে, শুধু চোখে দেখা যায় না।</p>
    <p><strong>❌ Fix and run:</strong> "কাজ করছে!" বলে চলে যাওয়া। কেন কাজ করলো সেটা না জেনে।</p>`
  },
  expert:{
    title:"Production Debugging — যেখানে Reproduce করা যায় না",
    body:`
    <p><strong>Observability > Debugging:</strong> লোকাল মেশিনে bug reproduce করা সহজ। কিন্তু production-এ ১০০টা সার্ভার, ১ মিলিয়ন request-এর মধ্যে একটায় সমস্যা — reproduce করা অসম্ভব। এক্সপার্ট আগে থেকেই observability বসান: structured logs, distributed traces (একটা request পুরো সিস্টেম জুড়ে ট্রেস করা), আর metrics — যাতে bug ঘটার সময়ই প্রমাণ ধরা পড়ে।</p>
    <p><strong>git bisect:</strong> "এই bug কবে এলো?" — মাঝে থেকে binary search করো commit history-তে। ১০০০ commit-এ ~১০ ধাপে culprit commit বের করা যায়, একটা একটা চেক করার বদলে।</p>
    <p><strong>Statistical debugging at scale:</strong> যখন এক request দিয়ে বোঝা যায় না, তখন pattern খোঁজো — "এই error শুধু mobile client-এ কেন?" "শুধু নির্দিষ্ট region-এ কেন?" — correlation থেকে hypothesis, তারপর causation প্রমাণ।</p>
    <p><strong>Blameless postmortem:</strong> বড় incident-এর পর এক্সপার্ট টিম "কে ভুল করলো" জিজ্ঞেস করে না — "সিস্টেম কেন এই ভুল সম্ভব করলো, আর কীভাবে আটকাবো" জিজ্ঞেস করে। 5 Whys আবার — কিন্তু এবার প্রক্রিয়ার উপর, ব্যক্তির উপর নয়।</p>`
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Not Using Version Control:</strong> Dev lost 3 days of work — no git, laptop crashed. Fix: commit early, commit often, push to remote.</div></div>


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

<div class="diagram">
<div class="diag-title">১০ : ১ — পড়া বনাম লেখা</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
  <line class="axis" x1="60" y1="170" x2="500" y2="170"/>
  <rect class="node-teal" x="160" y="36" width="110" height="134" rx="6"/>
  <text class="lbl-teal" x="215" y="26" style="font-size:12px">10x</text>
  <text class="lbl" x="215" y="105" style="font-size:11px">পড়া</text>
  <text class="lbl-sm" x="215" y="188" style="font-size:10px">Reading Code</text>

  <rect class="node" x="330" y="157" width="70" height="13" rx="4"/>
  <text class="lbl-sm" x="365" y="147" style="font-size:11px;fill:var(--ink-dim)">1x</text>
  <text class="lbl-sm" x="365" y="188" style="font-size:10px">Writing Code</text>
</svg>
<div class="diag-cap">সিনিয়র ইঞ্জিনিয়ার প্রতি লাইন লেখার আগে দশ লাইন পড়েন — কোডবেস, লাইব্রেরি, নিজের পুরনো কাজ। / Seniors read ten lines for every line they write — the codebase, the library, their own past work.</div>
</div>

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
  },
  expert:{
    title:"Code Archaeology — বড় Codebase-এ দ্রুত নেভিগেট করা",
    body:`
    <p><strong>git blame + git log:</strong> কোনো লাইন কেন এভাবে লেখা বোঝা না গেলে — <code>git blame</code> দিয়ে কে, কবে লিখেছে দেখো, তারপর commit message আর সংশ্লিষ্ট PR/ticket পড়ো। প্রায়ই "অদ্ভুত" কোডের একটা ইতিহাস আছে — কোনো production incident-এর ক্ষত।</p>
    <p><strong>Strategic reading, not linear:</strong> বিশাল codebase লাইন বাই লাইন পড়া অসম্ভব। এক্সপার্ট এন্ট্রি পয়েন্ট থেকে শুরু করে data flow অনুসরণ করেন, breadth-first — প্রথমে "কোন মডিউল কী করে" ম্যাপ তৈরি করেন, তারপর প্রয়োজনমতো গভীরে যান।</p>
    <p><strong>Review at scale:</strong> বড় টিমে একা প্রতিটা PR পড়া অসম্ভব — তাই এক্সপার্টরা static analysis (linters, type checkers) দিয়ে ছোট ভুল automate করেন, human review বাঁচান architecture আর business logic প্রশ্নের জন্য। মানুষ যা মেশিন পারে না তাই পড়ে।</p>
    <p><strong>Reading as mentorship:</strong> সিনিয়র/স্টাফ ইঞ্জিনিয়ারের সবচেয়ে বড় impact প্রায়ই নিজের কোড লেখায় নয় — অন্যের কোড পড়ে প্রশ্ন করায়, প্যাটার্ন শেখানোয়। কোড review হলো এক্সপার্টদের প্রধান শিক্ষণ মাধ্যম।</p>`
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Ignoring Code Reviews:</strong> Dev treated code review as criticism — got defensive. Fix: code review is a gift.</div></div>


<div class="diagram">
<div class="diag-title">Feynman Ladder — সরলতার দিকে নেমে যাওয়া</div>
<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
  <rect class="node" x="150" y="8" width="260" height="34" rx="6"/>
  <text class="lbl-sm" x="280" y="29" style="font-size:10px">Textbook সংজ্ঞা — জার্গনে ভরা</text>
  <line class="edge" x1="280" y1="42" x2="280" y2="58"/>
  <polygon class="arrowhead-teal" points="280,62 275,54 285,54"/>

  <rect class="node" x="150" y="62" width="260" height="34" rx="6"/>
  <text class="lbl-sm" x="280" y="83" style="font-size:10px">সহকর্মীকে বোঝানো — টেকনিক্যাল</text>
  <line class="edge" x1="280" y1="96" x2="280" y2="112"/>
  <polygon class="arrowhead-teal" points="280,116 275,108 285,108"/>

  <rect class="node" x="150" y="116" width="260" height="34" rx="6"/>
  <text class="lbl-sm" x="280" y="137" style="font-size:10px">জুনিয়রকে বোঝানো — উপমা দিয়ে</text>
  <line class="edge edge-gold" x1="280" y1="150" x2="280" y2="166"/>
  <polygon class="arrowhead-gold" points="280,170 275,162 285,162"/>

  <rect class="node-gold" x="130" y="170" width="300" height="36" rx="8"/>
  <text class="lbl-gold" x="280" y="192" style="font-size:10.5px">৫ বছরের শিশুকে বোঝানো — সহজ ভাষায়</text>
</svg>
<div class="diag-cap">যদি শেষ ধাপ না পারো, তুমি নিজেই বোঝোনি। / If you can't do the last step, you don't understand it yourself.</div>
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
  },
  expert:{
    title:"Writing RFCs ও Influence Without Authority",
    body:`
    <p><strong>Design Docs / RFCs:</strong> স্টাফ-লেভেল এক্সপার্ট মৌখিক আলোচনার আগে লেখেন — সমস্যা, বিকল্প সমাধান, trade-off, সুপারিশ। লেখা যুক্তি স্পষ্ট করে, আর অনেক মানুষ একসাথে asynchronously review করতে পারে। "লিখতে না পারলে, বুঝিনি" — কথার চেয়েও কঠিন পরীক্ষা।</p>
    <p><strong>Influence without authority:</strong> সিনিয়র/স্টাফ ইঞ্জিনিয়ার প্রায়ই আদেশ দেওয়ার position-এ থাকেন না, তবু দিক পরিবর্তন করাতে হয়। এটা হয় ডেটা দিয়ে (benchmark, incident history), গল্প দিয়ে (concrete example), আর বিশ্বাসযোগ্যতা তৈরি করে (আগে সঠিক প্রমাণিত হওয়া) — জোর করে নয়।</p>
    <p><strong>Communicating up vs down vs across:</strong> Executive-দের সাথে — impact ও ঝুঁকি, সংক্ষেপে। Junior-দের সাথে — প্রসঙ্গ ও ধৈর্য, শেখানোর মানসিকতায়। Peer-দের সাথে — trade-off ও বিকল্প, সমান পর্যায়ে বিতর্ক। একই বার্তা তিন ভাষায় বলতে জানা এক্সপার্টের চিহ্ন।</p>
    <p><strong>Disagree and commit:</strong> মতবিরোধ থাকতেই পারে — এক্সপার্ট জোরালোভাবে আপত্তি জানান, কিন্তু সিদ্ধান্ত হয়ে গেলে পূর্ণ শক্তিতে বাস্তবায়ন করেন। সিদ্ধান্তের পরও অসহযোগিতা করা টিমকে ধ্বংস করে।</p>`
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Premature Optimization:</strong> Dev optimized before measuring — a week on 0.01% improvement. Fix: profile first, optimize hot paths only.</div></div>


<div class="diagram">
<div class="diag-title">Traceability Chain — কোড থেকে ব্যবসায়িক ফলাফল</div>
<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="30" width="120" height="46" rx="7" style="fill:rgba(91,158,255,.14);stroke:var(--moon);stroke-width:2"/>
  <text class="lbl-sm" x="75" y="50" style="font-size:10px">কোড লাইন</text>
  <text class="lbl-sm" x="75" y="65" style="font-size:9px">function login()</text>

  <line class="edge" x1="135" y1="53" x2="151" y2="53"/>
  <polygon class="arrowhead-teal" points="157,53 148,48 148,58"/>
  <rect x="151" y="30" width="120" height="46" rx="7" style="fill:rgba(45,212,191,.14);stroke:var(--teal-bright);stroke-width:2"/>
  <text class="lbl-sm" x="211" y="50" style="font-size:10px">Feature</text>
  <text class="lbl-sm" x="211" y="65" style="font-size:9px">Login page</text>

  <line class="edge" x1="271" y1="53" x2="287" y2="53"/>
  <polygon class="arrowhead-teal" points="293,53 284,48 284,58"/>
  <rect x="287" y="30" width="130" height="46" rx="7" style="fill:rgba(255,152,0,.14);stroke:#ff9800;stroke-width:2"/>
  <text class="lbl-sm" x="352" y="50" style="font-size:9.5px">ইউজারের সমস্যা</text>
  <text class="lbl-sm" x="352" y="65" style="font-size:9px">দ্রুত ফিরে আসা</text>

  <line class="edge" x1="417" y1="53" x2="433" y2="53"/>
  <polygon class="arrowhead-teal" points="439,53 430,48 430,58"/>
  <rect x="433" y="24" width="112" height="58" rx="7" style="fill:rgba(82,196,26,.16);stroke:var(--leaf);stroke-width:2.5"/>
  <text class="lbl-leaf" x="489" y="47" style="font-size:9.5px">Business</text>
  <text class="lbl-leaf" x="489" y="61" style="font-size:9.5px">Metric</text>
  <text class="lbl-leaf" x="489" y="75" style="font-size:9.5px">Retention ↑</text>

  <text class="lbl-sm" x="280" y="112" style="font-size:9.5px">প্রতিটা লাইন এই চেইনে যুক্ত — না হলে "কেন" প্রশ্নের উত্তর নেই।</text>
</svg>
<div class="diag-cap">যে কোড এই চেইনের কোথাও যুক্ত হয় না — তার নিয়্যাত নেই। / Code that doesn't connect anywhere in this chain has no niyyah.</div>
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
  },
  expert:{
    title:"Prioritization Frameworks ও Cost of Delay",
    body:`
    <p><strong>RICE / ICE scoring:</strong> এক্সপার্ট গুরুত্ব অনুভূতি দিয়ে ঠিক করেন না — Reach (কত ইউজার), Impact (কতটা প্রভাব), Confidence (কতটা নিশ্চিত), Effort (কত কাজ) দিয়ে স্কোর করেন। RICE = (R×I×C)/E। এটা "কোনটা আগে করবো" বিতর্ককে ডেটা-ভিত্তিক করে।</p>
    <p><strong>Cost of Delay:</strong> শুধু "কাজ কত বড়" নয় — "না করলে প্রতি সপ্তাহে কত হারাচ্ছি" প্রশ্ন করো। একটা ছোট কিন্তু urgent fix (high cost of delay) একটা বড় কিন্তু non-urgent feature-এর চেয়ে আগে যাওয়া উচিত হতে পারে (CD3 = Cost of Delay ÷ Duration)।</p>
    <p><strong>North Star Metric:</strong> স্টাফ-লেভেল ইঞ্জিনিয়ার প্রতিটা প্রজেক্টকে একটা মূল মেট্রিকের (যেমন weekly active users, retention) সাথে যুক্ত করতে পারেন — যদি না পারেন, প্রশ্ন করেন এটা আদৌ করার দরকার আছে কিনা।</p>
    <p><strong>Saying no with data:</strong> "না" বলা কঠিন, বিশেষত stakeholder-কে। এক্সপার্ট ট্রেড-অফ দেখান — "এটা করলে X কাজ পিছিয়ে যাবে, যেটার cost of delay বেশি। আপনি কোনটা চান?" — সিদ্ধান্ত stakeholder-এর কাছে ফেরত দেওয়া, প্রত্যাখ্যান নয়, পুনর্বিন্যাস।</p>`
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Never Asking for Help:</strong> Dev spent 3 days on a problem a senior could solve in 10 minutes. Fix: 30-minute rule — if stuck, ask.</div></div>


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

<div class="diagram">
<div class="diag-title">ইহসানের বর্ণালী — Sloppy থেকে Over-engineered</div>
<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="debtGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e8704a"/>
      <stop offset="50%" stop-color="#f0c75e"/>
      <stop offset="100%" stop-color="#b37feb"/>
    </linearGradient>
  </defs>
  <rect x="40" y="70" width="480" height="20" rx="10" fill="url(#debtGrad)" opacity="0.85"/>

  <polygon points="280,40 270,58 290,58" fill="var(--gold-bright)"/>
  <text class="lbl-gold" x="280" y="32" style="font-size:10.5px">ইহসান — সঠিক মাত্রা</text>

  <text class="lbl-fire" x="80" y="112" style="font-size:9.5px">❌ Sloppy (Bad Debt)</text>
  <text class="lbl-purple" x="480" y="112" style="font-size:9.5px">❌ Over-engineered</text>

  <circle cx="170" cy="80" r="6" fill="var(--teal-bright)"/>
  <text class="lbl-teal" x="170" y="128" style="font-size:9px">Prototype UI</text>
  <text class="lbl-sm" x="170" y="140" style="font-size:8.5px">"যথেষ্ট ভালো" এখানে ঠিক</text>

  <circle cx="390" cy="80" r="6" fill="var(--gold-bright)"/>
  <text class="lbl-gold" x="390" y="128" style="font-size:9px">Core Payment Logic</text>
  <text class="lbl-sm" x="390" y="140" style="font-size:8.5px">এখানে প্রায়-নিখুঁত দরকার</text>
</svg>
<div class="diag-cap">প্রতিটা অংশের নিজস্ব সঠিক বিন্দু — সবখানে একই মান নয়। / Every part has its own right point — not one standard everywhere.</div>
</div>

<div class="dialogue">দশটা কক্ষ পেরিয়েছ। ভিত্তিপ্রস্তর থেকে গম্বুজ পর্যন্ত। প্রতিটা কক্ষে এক একজন মাস্টার। প্রতেকজন এক একটা নীতি দিয়ে গেছেন — first principles, decomposition, abstraction, trade-offs, resilience, debugging, reading, communication, business intent, আর pragmatism। কিন্তু সবচেয়ে গুরুত্বপূর্ণ কথা — কোনো একটা নীতি একা যথেষ্ট নয়। দশটার সমন্বয়ই সিনিয়র ইঞ্জিনিয়ার। যে শুধু decomposition জানে সে over-engineer করে। যে শুধু pragmatism জানে সে sloppy হয়। দশটার ভারসাম্যই প্রকৃত কারিগর। কিন্তু একটা কক্ষ বাকি — যেখানে এই সব নীতি বাস্তবে পরীক্ষা হয়। নকশার কক্ষ।</div>
<div class="dialogue en">"You've passed ten chambers. From foundation stone to dome. Each chamber had a master. Each gave a principle — first principles, decomposition, abstraction, trade-offs, resilience, debugging, reading, communication, business intent, and pragmatism. But the most important truth — no single principle alone suffices. The synthesis of all ten is the senior engineer. One who knows only decomposition over-engineers. One who knows only pragmatism becomes sloppy. The balance of ten is the true craftsman. But one chamber remains — where all these principles are tested in practice. The draftsman's chamber."</div>

<div class="dialogue">ইহসান — উৎকর্ষ, সৌন্দর্য, ভারসাম্য। নবীজি (সা) বলেছেন — "আল্লাহ তোমাদের জন্য লিখেছেন ইহসান — সব কিছুতে।" ইহসান মানে শুধু সুন্দর নয় — সঠিক মাত্রায় সুন্দর। অতিরিক্ত নয়, কম নয় — ঠিক যতটা দরকার। কোডেও ইহসান — নিখুঁত নয়, sloppy নয়, ঠিক যতটা দরকার ততটা ভালো। এটাই প্রকৌশলের সর্বোচ্চ স্তর — উৎকর্ষের ভারসাম্য।</div>
<div class="dialogue en">"Ihsan — excellence, beauty, balance. The Prophet (pbuh) said — 'Allah has prescribed ihsan for you — in everything.' Ihsan doesn't mean just beautiful — but beautiful in the right measure. Not excess, not less — exactly what's needed. In code too, ihsan — not perfect, not sloppy, exactly as good as needed. This is the highest level of engineering — the balance of excellence."</div>

<div class="verse">"যে ব্যক্তি এই পথে চলে সহজতা খোঁজে, আল্লাহ তার জন্য সহজ করেন।"<br>— নবীজি (সা)<br><br>প্রকৌশল কঠিন নয় — কিন্তু সহজও নয়। সঠিক পথে চললে আল্লাহ সহজ করেন। দশটা কক্ষ = দশটা দিশা। এই দিশায় চলো — সিনিয়র ইঞ্জিনিয়ার হওয়া গন্তব্য নয় — যাত্রা। প্রতিদিন এক ধাপ। প্রতিদিন এক শিক্ষা। প্রতিদিন এক ভুল — আর তার থেকে এক বোঝাপড়া।</div>

<div class="secret-box"><div class="label">দশম কক্ষ — রহস্য</div><div class="text">🏛️ নিখুঁত নয় — সঠিক মাত্রায় ভালো।<br><small>Technical debt সচেতনভাবে নাও, পরিকল্পিতভাবে শোধ করো। Core-এ নিখুঁত, prototype-ে যথেষ্ট। ইহসান = উৎকর্ষের ভারসাম্য।</small></div></div>`,
  senior:{
    title:"Technical Debt Ledger — ঋণ ট্র্যাক করার অভ্যাস",
    body:`
    <p><strong>লিখে রাখো:</strong> যখনই দ্রুত/নোংরা সমাধান নাও, একটা <code>// TODO(debt):</code> কমেন্ট বা ব্যাকলগ টিকেট বানাও — কেন, কী ঝুঁকি, কবে শোধ হবে।</p>
    <p><strong>প্রশ্ন করো — কোথায় নিখুঁত দরকার:</strong> Payment, Auth, ডেটা migration — এখানে ভুলের মূল্য বেশি, তাই সময় নাও। ফিচার prototype, internal tool, A/B test — এখানে "যথেষ্ট" যথেষ্ট।</p>
    <p><strong>নিয়মিত শোধ করো:</strong> প্রতি sprint-এ একটা ছোট অংশ debt-পরিশোধে দাও। সব ঋণ একসাথে শোধ করার অপেক্ষা করলে — কখনো হবে না।</p>`
  },
  expert:{
    title:"Debt Quadrant ও Evolutionary Architecture",
    body:`
    <p><strong>Martin Fowler-এর Debt Quadrant:</strong> Reckless vs Prudent, আর Deliberate vs Inadvertent — দুই অক্ষে চারটা ঘর। "Reckless + Inadvertent" (না জেনে খারাপ কোড) সবচেয়ে বিপজ্জনক। "Prudent + Deliberate" ("আমরা জানি এটা ঋণ, কিন্তু এখন দরকার") — এটাই স্বাস্থ্যকর ঋণ, দলগতভাবে নেওয়া সিদ্ধান্ত।</p>
    <p><strong>Interest rate মানসিকতা:</strong> প্রতিটা ঋণের একটা "সুদের হার" আছে — কিছু ঋণ ধীরে ধীরে খরচ বাড়ায় (একটা অপ্রয়োজনীয় ডিপেন্ডেন্সি), কিছু ঋণ exponentially খরচ বাড়ায় (ভুল ডেটা মডেল যার উপর সব কিছু নির্ভর করে)। উচ্চ-সুদের ঋণ আগে শোধ করো।</p>
    <p><strong>Evolutionary Architecture:</strong> "সঠিক মাত্রায় ভালো" এক জায়গায় স্থির থাকে না — সিস্টেম বাড়ার সাথে সাথে বদলায়। এক্সপার্ট architecture-কে "fitness function" দিয়ে টেস্ট করেন (performance, security, maintainability থ্রেশহোল্ড) — যাতে ধীরে ধীরে evolve করা যায়, একবারে বড় rewrite না করে।</p>
    <p><strong>Boy Scout Rule:</strong> "যে জায়গা পেলে, তার চেয়ে একটু পরিষ্কার রেখে যাও।" বড় refactor প্রায়ই অনুমোদন পায় না, কিন্তু ছোট ছোট উন্নতি প্রতিটা PR-এ — সময়ের সাথে কোডবেস স্বাস্থ্যবান রাখে।</p>`
  }
});

// ══ DOOR 11: ESTIMATION & PLANNING ══
doors.push({
  num:11, icon:"📐", color:"#5b9eff", name:"নকশার কক্ষ",
  subtitle:"The Draftsman's Chamber", tech:"Estimation, Planning & Risk Assessment",
  spirit:"তাদবির — পরিকল্পনা, প্রস্তুতি",
  secret:"কোড লেখা সহজ। কত সময় লাগবে — সেটাই কঠিন। সব কাজ ২x বেশি সময় নেয়। ভালো ইঞ্জিনিয়ার অনুমান করেন, আর সেই অনুমানে বাফার রাখেন। খারাপ ইঞ্জিনিয়ার আশাবাদী — আর দেরি করেন।",
  recall:{
    q:"নকশাকার কেন ইট গোনার আগে পুরো দালানের নকশা করেন?",
    qen:"Why does the draftsman design the whole building before counting bricks?",
    a:"কারণ নকশা ছাড়া ইট গোনা অর্থহীন — কত দরকার, কোথায়, কখন? নকশা = অনুমান। অনুমান নিখুঁত নয়, কিন্তু পরিকল্পনা ছাড়া কাজ বিপর্যয়। তাদবির — সচেতন প্রস্তুতি।",
    aen:"Because counting bricks without a design is meaningless — how many, where, when? Design = estimation. Estimates aren't perfect, but without planning, work is chaos. Tadbir — conscious preparation."
  },
  story:`
<p class="scene-setting">একাদশ কক্ষ। নকশার কক্ষ। বিশাল টেবিলে ছড়ানো নীলনকশা, স্কেল, কম্পাস, পুরোনো প্ল্যান। দেয়ালে অসম্পূর্ণ দালানের ছবি — কিছু অর্ধেক থেমে, কিছু বাজেটে ডুবে। নকশাকার ইউসুফ একটা প্ল্যান ধরে আছেন — তাতে দালানের প্রতিটা অংশের পাশে সময় ও মালের হিসাব। "গম্বুজের কক্ষে ইহসান শিখেছ," তিনি বললেন। "কিন্তু ইহসান শুধু কোডে নয় — পরিকল্পনায়ও।"</p>
<p class="scene-setting en">The eleventh chamber. The draftsman's chamber. A vast table covered in blueprints, scales, compasses, old plans. On the wall, pictures of unfinished buildings — some half-stopped, some drowned in budget. Draftsman Yusuf holds a plan — next to each part, the time and material cost. "In the dome chamber you learned ihsan," he said. "But ihsan isn't only in code — it's in planning too."</p>

<div class="dialogue">দশটা কক্ষে তুমি শিখেছ কীভাবে চিন্তা করতে, কীভাবে কোড লিখতে, কীভাবে যোগাযোগ করতে। কিন্তু একটা দক্ষতা বাকি — যা সিনিয়র ইঞ্জিনিয়ারকে জুনিয়র থেকে আলাদা করে। অনুমান। একটা কাজে কত সময় লাগবে? কী ঝুঁকি? কোন অংশ অজানা? এই প্রশ্নের উত্তর না জানলে — তুমি শিল্পী, কারিগর নও।</div>
<div class="dialogue en">"In ten chambers you learned how to think, how to code, how to communicate. But one skill remains — the one that separates senior from junior. Estimation. How long will a task take? What's the risk? Which parts are unknown? Without answers to these — you're an artist, not an engineer."</div>

<div class="diagram">
<div class="diag-title">PERT Three-Point Estimation</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
  <line class="axis" x1="40" y1="150" x2="520" y2="150"/>
  <path d="M100,110 Q180,60 260,40 Q340,60 420,85 Q460,100 480,110" fill="none" stroke="rgba(91,158,255,.35)" stroke-width="1.5" stroke-dasharray="3,3"/>

  <rect class="node-moon" x="100" y="110" width="60" height="40" rx="4"/>
  <text class="lbl-moon" x="130" y="100" style="font-size:10px">O = ২ দিন</text>
  <text class="lbl-sm" x="130" y="168" style="font-size:9px">Optimistic</text>

  <rect class="node-moon" x="260" y="40" width="60" height="110" rx="4" style="fill:rgba(91,158,255,.32)"/>
  <text class="lbl-moon" x="290" y="30" style="font-size:10px">M = ৪ দিন ×৪</text>
  <text class="lbl-sm" x="290" y="168" style="font-size:9px">Most Likely</text>

  <rect class="node-moon" x="420" y="85" width="60" height="65" rx="4"/>
  <text class="lbl-moon" x="450" y="75" style="font-size:10px">P = ৮ দিন</text>
  <text class="lbl-sm" x="450" y="168" style="font-size:9px">Pessimistic</text>

  <text class="lbl-gold" x="290" y="188" style="font-size:10.5px">Estimate = (2 + 4×4 + 8) / 6 ≈ ৪.৩ দিন</text>
</svg>
<div class="diag-cap">"Most Likely"-কে ৪ গুণ গুরুত্ব — একটা সংখ্যা নয়, একটা সম্ভাব্যতার বিতরণ। / "Most Likely" weighted 4x — not one number, a probability distribution.</div>
</div>

<div class="code-block">Estimation — The Senior Engineer's Hardest Skill:

WHY ESTIMATION IS HARD:
  কাজের মধ্যে অজানা অংশ থাকে।
  → অজানা = অনুমানের ভুল
  → ভুল = দেরি
  → দেরি = বাজেট ডুবি, আস্থা হারি

  Hofstadter's Law (Douglas Hofstadter):
  "একটা কাজ সবসময় তোমার ধারণার চেয়ে 
   বেশি সময় নেয় — এমনকি এই সত্য জানলেও।"
  → একটা recursive trap। জানলেও ভুল হয়।

THE OPTIMISM BIAS (কেন আমরা ভুল করি):
  • Planning Fallacy (Kahneman & Tversky):
    আমরা best-case scenario ধরি, typical case নয়।
  • নিজের কাজ সবসময় সহজ মনে হয়।
  • অন্যের কাজ? সেটা তো সহজই!
  • "integration একদিনে হবে" — কখনো হয় না।
  → উপায়: past data দিয়ে estimate করো, feeling নয়।

THREE-POINT ESTIMATION (PERT):
  একটা সংখ্যা নয় — তিনটা!
  
  O = Optimistic (সব ঠিক থাকলে)
  N = Most Likely (সাধারণত যা হয়)
  P = Pessimistic (সব ভাঙলে)
  
  Estimate = (O + ৪N + P) / ৬
  → N-এর ওজন বেশি (৪x), কারণ সেটাই সম্ভাব্য
  → চারদিক থেকে চিন্তা করো, শুধু best-case নয়

T-SHIRT SIZING (যখন সংখ্যা অসম্ভব):
  সব কাজে precise hours দেওয়া যায় না।
  
  XS  = < half day
  S   = half to ১ day
  M   = ১-৩ days
  L   = ৩-৫ days
  XL  = ১-২ weeks
  ?   = জানি না (সবচেয়ে সৎ উত্তর!)
  
  → বড় কাজে প্রথমে sizes দাও, পরে break down করে
    সঠিক সময় বের করো।
  → প্রতিটা "?" একটা spike (research task) দাবি করে।

THE BREAKDOWN RULE:
  যেকোনো কাজ যদি > ২ দিন মনে হয় — ভাঙো।
  
  বড় কাজ = ভুল estimate (অনেক unknown লুকানো)
  ছোট কাজ = সঠিক estimate (unknown সীমিত)
  
  → "Authentication system" = ২ সপ্তাহ? (ভুল ধারণা)
  → "Login API + signup API + password reset + 
     session management + tests" = আলাদা অনুমান, যোগ করো।
  
  এটাই decomposition door-এর শিক্ষা — estimation-এ প্রয়োগ।

BUFFER & CONTINGENCY:
  কাজের সময় আনুমানিক ৫ দিন?
  → ৫ দিন বলো না।
  → ৫ × ১.৫ = ৭.৫ দিন দাও (৫০% buffer)
  → বা: ৫ দিন + ২ দিন contingency = ৭ দিন
  
  Buffer কেন?
    → meetings, code review rounds, অপ্রত্যাশিত bugs
    → অন্য urgent কাজ interrupt করবে
    → onboarding, context switching
  
  ❌ "আমি ২ দিনে পারব" (overconfidence)
  ✅ "৫ দিন লাগতে পারে, worst case ৭" (realism)

RISK ASSESSMENT — কী ভাঙতে পারে?
  প্রতিটা প্ল্যানে ঝুঁকি চিহ্নিত করো:
  
  উচ্চ ঝুঁকি:
    • নতুন API/প্রযুক্তি (কখনো ব্যবহার করোনি)
    • Third-party dependency (অন্যের কোড/সার্ভিস)
    • পারফরম্যান্স requirement (scale অজানা)
    • Legacy code integration
  
  মধ্যম ঝুঁকি:
    • নতুন domain logic
    • Cross-team coordination
    • ডেটা migration
  
  কম ঝুঁকি:
    • CRUD endpoints
    • UI tweaks
    • পরিচিত refactor
  
  → উচ্চ ঝুঁকি কাজ আগে করো (যদি ব্যর্থ হয়, সময় আছে pivot করতে)
  → spike দিয়ে অজানা কমাও (research আগে, implementation পরে)

COMMUNICATING ESTIMATES (সিনিয়র skill):
  তুমি যা ভাবো না — তুমি যা বলো, তা-ই গুরুত্বপূর্ণ।
  
  ❌ "২ দিন" (একটা সংখ্যা — কোনো context নেই)
  ✅ "২ দিন optimistic, ৫ worst case। 
      সবচেয়ে বড় ঝুঁকি — auth integration অজানা।
      প্রথমে একটা spike (half day) দিয়ে অজানা কমাই।"
  
  → range দাও (optimistic - pessimistic)
  → assumptions বলো ("যদি API stable থাকে")
  → dependencies চিহ্নিত করো ("frontend প্রস্তুত থাকলে")
  → আত্মবিশ্বাসের মাত্রা বলো ("high/medium/low confidence")

AGILE ও STORY POINTS:
  অনেক টিম hours নয়, story points ব্যবহার করে।
  
  Story points = জটিলতা + প্রচেষ্টা + অনিশ্চয়তা
  → Fibonacci: ১, ২, ৩, ৫, ৮, ১৩ (গ্যাপ = অনিশ্চয়তা)
  → relative sizing (এই কাজ সেই কাজের চেয়ে বড় কি?)
  → velocity = প্রতি sprint-এ গড় points সম্পন্ন
  → points hours নয় — comparison tool।

ESTIMATION ANTI-PATTERNS:
  ❌ "আমি সারারাত করে পারব" — heroics, burnout path
  ❌ "পরে দেখা যাবে" — পরিকল্পনা না করা
  ❌ "এটা তো সহজ" — কাজ না ভেঙে অনুমান
  ❌ Stakeholder-কে যা শুনতে চায় তা বলা — people-pleasing
  ❌ আগের estimate ধরে রাখা যখন scope বদলে — অনড় থাকা

THE SENIOR'S HABIT:
  ১. কাজ ভাঙো (decomposition)
  ২. প্রতিটা টুকরোর অনুমান আলাদা করো
  ৩. অজানা চিহ্নিত করো → spike
  ৪. Range দাও (best-typical-worst)
  ৫. Buffer যোগ করো
  ৬. Assumptions ও risks পরিষ্কার করো
  ৭. সময়ে আপডেট দাও — পিছিয়ে গেলে আগেই বলো</div>

<div class="dialogue">তাদবির — পরিকল্পনা, প্রস্তুতি। কুরআনে আল্লাহ বলেন — "তোমরা তাদের বিরুদ্ধে যতটা শক্তি ও সামরিক প্রস্তুতি পারো তৈরি করে রাখো।" (৮:৬০)। সামরিক প্রস্তুতি শুধু অস্ত্র নয় — পরিকল্পনা। ইঞ্জিনিয়ারিং-এও তাদবির — কাজের পূর্বে চিন্তা, ঝুঁকি চিহ্নিতকরণ, বাফার রাখা। যে তাদবির করে, সে বিপদে নড়ে না। যে করে না, সে প্রতিটা সমস্যায় চমকে যায়।</div>
<div class="dialogue en">"Tadbir — planning, preparation. Allah says — 'Prepare against them whatever forces and preparedness you can.' (8:60). Preparedness isn't only weapons — it's planning. In engineering too, tadbir — thinking before work, identifying risk, keeping buffer. One who plans isn't shaken in trouble. One who doesn't, startles at every problem."</div>`,
  senior:{
    title:"Estimation Practice — তোমার পরবর্তী কাজ",
    body:`<p><strong>পরবর্তী task-এ এটা করো:</strong> কাজ ভাঙো ৩-৫ টুকরোয়। প্রতিটার জন্য optimistic + typical + pessimistic সময় লেখো। যোগ করো, তারপর ১.৫x করো।</p><p><strong>অজানা চিহ্নিত করো:</strong> প্রতিটা "?" একটা spike দাবি করে। আগে research, পরে implementation।</p><p><strong>স্টেকহোল্ডারকে বলো:</strong> range দাও, সংখ্যা নয়। "৩-৫ দিন, সবচেয়ে বড় ঝুঁকি অমুক।" আত্মবিশ্বাসের মাত্রা বলো।</p><p><strong>সবচেয়ে সৎ উত্তর:</strong> "জানি না, কিন্তু খুঁজে বের করছি।" এটা "২ দিন" বলার চেয়ে ১০x ভালো।</p><p><strong>ট্র্যাক করো:</strong> তোমার estimate বনাম actual time। ৩ মাস পর নিজের bias দেখো — সবসময় optimistic? বাফার বাড়াও।</p>`
  },
  expert:{
    title:"#NoEstimates, Monte Carlo, ও Flow Metrics",
    body:`
    <p><strong>Cone of Uncertainty:</strong> একটা প্রজেক্টের শুরুতে estimate ৪x ভুল হতে পারে (কখনো ০.২৫x থেকে ৪x রেঞ্জ)। যত এগোও, তথ্য বাড়ে, cone সরু হয়। এক্সপার্ট early-stage estimate-কে "commitment" নয়, "current best guess" হিসেবে উপস্থাপন করেন — আর নিয়মিত re-estimate করেন।</p>
    <p><strong>Monte Carlo Simulation:</strong> একটা সংখ্যা বা তিনটা পয়েন্টের বদলে — এক্সপার্ট টিম হাজার হাজার সম্ভাব্য সিমুলেশন চালান (past velocity data দিয়ে) আর একটা probability distribution পান: "৮৫% সম্ভাবনা ৬ সপ্তাহে শেষ হবে।" এটা single-point estimate-এর চেয়ে বেশি honest।</p>
    <p><strong>#NoEstimates আন্দোলন:</strong> কিছু এক্সপার্ট তর্ক করেন — story-point estimation সময় নষ্ট করে, নির্ভুলতা দেয় না। বদলে flow metrics ব্যবহার করেন — cycle time (একটা টাস্ক শুরু থেকে শেষ পর্যন্ত কত সময়), throughput (প্রতি সপ্তাহে কত টাস্ক শেষ) — historical data থেকে ভবিষ্যদ্বাণী, অনুমান থেকে নয়। এটা বিতর্কিত — প্রসঙ্গ অনুযায়ী কাজ করে, সব দলে নয়।</p>
    <p><strong>Capacity planning at scale:</strong> এক টিমের estimate সহজ, কিন্তু ১০টা টিম জুড়ে roadmap planning কঠিন — dependency, shared resource, cross-team blocking সব হিসাবে আনতে হয়। স্টাফ ইঞ্জিনিয়াররা এখানে critical path আর bottleneck খুঁজে বের করেন, শুধু নিজের টিমের কাজ নয়।</p>`
  }
});

