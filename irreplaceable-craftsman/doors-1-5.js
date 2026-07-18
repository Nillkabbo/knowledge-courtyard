// ════════════════════════════════════════
// অবিচ্ছেয্য কারিগর — DOORS 1-5
// Irreplaceable Engineer: Value → Systems Thinking
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: THE OBSOLESCENCE TRAP ══
doors.push({
  num:1, icon:"🍂", color:"#f87171", name:"পচনশীল উপাদান",
  subtitle:"The Obsolescence Trap", tech:"Why Value Decreases Over Time",
  spirit:"ফানা — অস্থায়িত্ব, ক্ষয়",
  secret:"Framework শেখো → ৩ বছরে পুরনো। Principle শেখো → প্রতি বছর বেশি মূল্যবান। যে পচনশীল উপাদানে মূল্য দেয়, সে ফানার শিকার। যে চিরস্থায়ীতে মূল্য দেয়, সে বাকা। ফানা — যা শেষ হয়। বাকা — যা থাকে।",
  recall:{
    q:"প্রথম দরজায় কারিগর কেন পচে গেল?",
    qen:"Why did the craftsman rot away?",
    a:"কারণ সে পচনশীল উপাদানে মূল্য দিয়েছিল — framework, tools। এগুলো বদলায়। Principle বদলায় না। ফানা = যা শেষ হয়। যে ফানায় মূল্য দেয়, সে পচে যায়।",
    aen:"Because they invested in perishable material — frameworks, tools. These change. Principles don't. Fana = what ends. One who invests in fana, perishes."
  },
  story:`<p class="scene-setting">প্রথম দরজা। একটা পরিত্যক্ত কারখানা। ধুলো, মাকড়সার জাল, ভাঙা মনিটর। দেয়ালে পোস্টার: jQuery, Angular.js, Flash, Backbone — সব এক সময়ের সবচেয়ে চাহিদার প্রযুক্তি। এখন কেউ মনে রাখে না। একটা বৃদ্ধ কারিগর জহির বসে আছেন, হাতে একটা পুরোনো বই: Mastering jQuery UI। তিনি ১০ বছর শিখেছেন, নিখুঁত হয়েছেন। এখন কেউ তাকে চায় না।</p>
<p class="scene-setting en">The first door. An abandoned workshop. Dust, cobwebs, broken monitors. Posters on walls: jQuery, Angular.js, Flash, Backbone — once the most in-demand technologies. Now forgotten. An old craftsman Zahir sits, holding a book: Mastering jQuery UI. He spent 10 years learning, perfecting. Now nobody wants him.</p>

<div class="dialogue">তুমি একটা প্রশ্ন করো — কেন এমন হলো? জহির চোখ তুলে তাকালেন। তুমি ভাবলে তিনি তার চাকরি হারিয়েছেন কারণ তিনি খারাপ ছিলেন। কিন্তু তিনি ছিলেন সেরা। jQuery-তে কেউ তাকে ছাড়তে পারত না। সমস্যা দক্ষতায় নয় — উপাদানে। তিনি এমন কিছুতে দশ বছর মূল্য দিয়েছেন যা পচনশীল। যা অবশ্যই শেষ হবে। এটাই অবচয় ফাঁদ — obsolescence trap।</div>
<div class="dialogue en">You ask — why did this happen? Zahir looked up. You think he lost his job because he was bad. But he was the best. Nobody could beat him in jQuery. The problem wasn't skill — it was material. He invested ten years in something perishable. Something that was bound to end. This is the obsolescence trap.</div>

<table class="kv-table"><tr><th>🍂 Perishable (মূল্য কমে)</th><th>🌳 Permanent (মূল্য বাড়ে)</th></tr>
<tr><td>নির্দিষ্ট framework (jQuery, Angular, Flash)</td><td>First principles (কম্পিউটার কীভাবে চলে)</td></tr>
<tr><td>নির্দিষ্ট tool/API (versioned, deprecated)</td><td>Systems thinking (cause-effect chains)</td></tr>
<tr><td>Syntax মুখস্থ, boilerplate, CRUD scaffolding</td><td>Problem decomposition + communication</td></tr>
<tr><td>Platform-specific tricks</td><td>Business understanding + pattern recognition</td></tr>
<tr><td>"মুখস্থ করা যায়" — যা AI পারে</td><td>Judgment ও accountability — কী বানানো উচিত, দায়ী কে</td></tr>
<tr><td class="hl">Curve: HIGH → ০ (৩-৫ বছরে)</td><td class="hl">Curve: LOW → দশকের পর দশক compounds</td></tr></table>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>২০২৬ acceleration:</strong> AI agents (Claude Code, Cursor, Devin) নিজেরাই decide করতে পারে কী কোড লিখবে, কোন abstraction ব্যবহার করবে। যে কাজ AI পারে, সেটা perishable — আর তার value আরও দ্রুত কমছে। জহিরের গল্প: ১০ বছরের jQuery mastery → ০ value।</div></div>

<div class="callout info"><span class="co-icon">🧭</span><div><strong>নতুন প্রশ্ন:</strong> "যখন AI execute করতে পারে, তুমি কী করো যা AI পারে না?" AI পারে না — কোন সমস্যা আদৌ সমাধান দরকার, কোন trade-off গ্রহণযোগ্য, ভুল হলে কে দায়ী, আর কখন "না" বলতে হবে। <strong>Job = executing code → AI তোমাকে replace করে। Job = judging what to build → AI তোমাকে amplify করে।</strong></div></div>

<div class="callout tip"><span class="co-icon">🧪</span><div><strong>The test — নিজেকে জিজ্ঞেস করো:</strong> এই দক্ষতা কি ১০ বছর পরে মূল্যবান থাকবে? Tool হারিয়ে গেলে কী থাকে? আমি TOOL শিখছি নাকি PRINCIPLE? AI কি এটা ২ বছরে পারবে?</div></div>

<div class="dialogue">ফানা — impermanence, annihilation, that which passes away। সুফি ঐতিহ্যে ফানা হলো সেই অবস্থা যেখানে অহংকার, দক্ষতা, পরিচয় — সব ক্ষয় হয়। জহিরের jQuery দক্ষতা ফানার শিকার হয়েছে। কিন্তু ফানার বিপরীত হলো বাকা — permanence, eternity, that which remains। যে কারিগর নিজের দক্ষতাকে ফানা থেকে বাকায় স্থানান্তর করে, সে অবিচ্ছেয্য হয়। ফানা থেকে বাকা — এটাই এই বইয়ের যাত্রা।</div>
<div class="dialogue en">"Fana — impermanence, annihilation, that which passes away. In Sufi tradition, fana is the state where ego, skill, identity — all dissolve. Zahir's jQuery mastery fell victim to fana. But the opposite of fana is baqa — permanence, eternity, that which remains. The craftsman who transfers their investment from fana to baqa becomes irreplaceable. From fana to baqa — this is this book's journey."</div>`,
  senior:{
    title:"The Perishability Audit",
    body:`<p><strong>Right now, list your skills.</strong> Mark each as P (Perishable) or PE (Permanent):</p><p><strong>Perishable:</strong> Specific framework, specific API, syntax memorization, platform tricks, config knowledge</p><p><strong>Permanent:</strong> First principles, systems thinking, problem decomposition, communication, pattern recognition, curiosity, business understanding</p><p><strong>Rule:</strong> Aim for 70% permanent, 30% perishable. Most juniors are 90% perishable. That's why they're replaceable.</p><p><strong>Ask:</strong> If your main tool vanished tomorrow, what would remain? If the answer is "nothing" — you're in the obsolescence trap.</p>`
  }
});

// ══ DOOR 2: FIRST PRINCIPLES THINKING ══
doors.push({
  num:2, icon:"⚙️", color:"#a3e635", name:"মূল নীতি",
  subtitle:"First Principles Thinking", tech:"Reasoning from Fundamentals",
  spirit:"আকল — যুক্তি, বুদ্ধি, মৌলিক চিন্তা",
  secret:"প্রতিটা সমস্যাকে ভেঙে যাওয়া পর্যন্ত প্রশ্ন করো — যতক্ষণ না সবচেয়ে মৌলিক সত্যে পৌঁছও। তারপর সেখান থেকে উপরে উঠো। এটাই first principles। যে analogy দিয়ে চিন্তা করে, সে অন্ধ। যে মূল থেকে চিন্তা করে, সে আলো। আকল — মৌলিক চিন্তার নূর।",
  recall:{
    q:"দ্বিতীয় দরজায় কারিগর কেন ভাঙা যন্ত্র থেকে মূল খুঁজলেন?",
    qen:"Why did the craftsman find the root from the broken machine?",
    a:"কারণ প্রতিটা সমস্যাকে ভেঙে যাওয়া পর্যন্ত প্রশ্ন করো। সবচেয়ে মৌলিক সত্যে পৌঁছাও। তারপর সেখান থেকে উপরে উঠো। এটাই first principles। আকল — মৌলিক চিন্তা।",
    aen:"Because break every problem down until you reach the most fundamental truth. Then build up from there. This is first principles. Aql — fundamental reasoning."
  },
  story:`<p class="scene-setting">দ্বিতীয় দরজা। একটা ভাঙা যন্ত্র। কারিগর ইব্রাহিম চোখ বন্ধ করে যন্ত্রের প্রতিটা অংশ স্পর্শ করছেন। গিয়ার, চেইন, পাম্প, ভাল্ব। তুমি ভাবলে তিনি যন্ত্র ঠিক করছেন। কিন্তু তিনি একটাও টুল ধরেননি। তিনি শুধু প্রশ্ন করছেন — এই অংশটা কেন আছে? এর উদ্দেশ্য কী? কী ছাড়া এটা কাজ করবে না?</p>
<p class="scene-setting en">The second door. A broken machine. Craftsman Ibrahim touches each part with eyes closed. Gears, chains, pump, valve. You think he's fixing it. But he hasn't picked up a tool. He's only asking — why does this part exist? What's its purpose? Without what, it won't work?</p>

<div class="dialogue">তুমি জিজ্ঞেস করো — ভাঙা যন্ত্র ঠিক করছেন না কেন? ইব্রাহিম চোখ খুললেন। যন্ত্র ভাঙা, কিন্তু সমস্যা যন্ত্রে নয়। সমস্যা চিন্তায়। যিনি যন্ত্র বানিয়েছেন তিনি প্রতিটা অংশ একটা উদ্দেশ্য থেকে বানিয়েছেন। সেই উদ্দেশ্য না বুঝলে ঠিক করা অসম্ভব। প্রতিটা সমস্যাকে ভেঙে যাওয়া পর্যন্ত প্রশ্ন করো — এটাই first principles।</div>
<div class="dialogue en">"You ask — why aren't you fixing the broken machine? Ibrahim opened his eyes. The machine is broken, but the problem isn't the machine. It's the thinking. The builder made each part for a purpose. Without understanding that purpose, fixing is impossible. Break every problem down to its roots — this is first principles."</div>

<table class="kv-table"><tr><th>Analogy thinking (Junior)</th><th>First principles (Senior)</th></tr>
<tr><td>"আগে কীভাবে হয়েছে?"</td><td>"কেন এটা এভাবে হতে হবে?"</td></tr>
<tr><td>Copy + modify</td><td>মৌলিক পর্যন্ত ভাঙা, নতুন করে গড়া</td></tr>
<tr><td>Incremental (৫% better)</td><td>Revolutionary (১০x better)</td></tr>
<tr><td>Safe, expected</td><td>Risky, unexpected</td></tr></table>

<div class="callout tip"><span class="co-icon">🚀</span><div><strong>Musk-এর battery উদাহরণ:</strong> "Batteries cost $৬০০/kWh।" Analogy → মেনে নাও, ৫% discount খোঁজো। First principles → ব্যাটারি কী দিয়ে তৈরি? (cobalt, nickel, aluminum, carbon) এর বাজারমূল্য? (~$৮০/kWh) তাহলে কেন $৬০০? ভিন্নভাবে বানানো যায়? Tesla বানায় ~$১০০/kWh — <strong>৬x কম</strong>, শুধু মৌলিক থেকে ভেবে।</div></div>

<div class="callout info"><span class="co-icon">🔧</span><div><strong>Engineering-এ:</strong> Junior — "React ব্যবহার করবো কারণ সবাই করে।" Senior — "কী সমস্যা সমাধান করছি? সবচেয়ে সরল সমাধান কী? React কি ঠিক tool, নির্দিষ্ট কারণসহ?" · "Microservices কারণ Netflix করে" → "আমাদের কি সেই scale-সমস্যা আছে? না (৩ জনের টিম) → monolith ভালো।"</div></div>

<div class="callout tip"><span class="co-icon">5️⃣</span><div><strong>৫ Whys (Sakichi Toyoda):</strong> "Website slow" → DB ৩s/query → কোনো index নেই → কেউ query pattern দেখেনি → কোনো monitoring নেই → টিমে performance culture নেই। <strong>Root cause: culture, not database।</strong> Fix — monitoring + reviews, শুধু index নয়।</div></div>

<table class="kv-table"><tr><th>✅ First principles-এর লক্ষণ</th><th>❌ Analogy-তে আটকে থাকার লক্ষণ</th></tr>
<tr><td>WHY ব্যাখ্যা করতে পারো, শুধু HOW নয়</td><td>ব্যাখ্যা ছাড়া "best practice" বলো</td></tr>
<tr><td>অন্যদের মানা assumption প্রশ্ন করো</td><td>না বুঝে Stack Overflow কপি করো</td></tr>
<tr><td>tutorial ছাড়া নতুন কিছু বানাতে পারো</td><td>pattern না মিললে ঘাবড়ে যাও</td></tr>
<tr><td>জটিল সিস্টেম সরল করো</td><td>framework ছাড়া কাজ করতে পারো না</td></tr></table>

<div class="dialogue">আকল — intellect, reason, the faculty of understanding fundamental truths। কুরআনে আল্লাহ বলেন — "তারা কি চিন্তা করে না? তাদের মধ্যে আকল নেই?" আকল হলো অন্ধ অনুকরণের বিপরীত। যে আকল ব্যবহার করে, সে প্রশ্ন করে। যে অনুকরণ করে, সে অন্ধ। First principles thinking-ও আকল — প্রতিটা সমস্যাকে মৌলিক সত্য পর্যন্ত ভাঙা। যে আকল দিয়ে চিন্তা করে, সে মূল থেকে উপরে ওঠে। যে অন্ধভাবে অনুকরণ করে, সে কখনো মূল দেখে না।</div>
<div class="dialogue en">"Aql — intellect, reason, the faculty of understanding fundamental truths. Allah says — 'Do they not reflect? Have they no intellect?' Aql is the opposite of blind imitation. One who uses aql, questions. One who imitates, is blind. First principles thinking too is aql — breaking every problem to its fundamental truth. One who thinks with aql, builds up from the root. One who blindly imitates, never sees the root."</div>`,
  senior:{
    title:"First Principles — Daily Practice",
    body:`<p><strong>The 3-question test for every decision:</strong></p><p>১. WHY must this be done this way? (challenge the assumption)</p><p>২. What is this ACTUALLY made of? (break to fundamentals)</p><p>৩. Could I build this from scratch? (test your understanding)</p><p><strong>Daily exercise:</strong> Pick one thing you "just know" and ask why 5 times. You'll discover most of your knowledge is inherited analogy, not earned understanding.</p><p><strong>The senior's advantage:</strong> They don't know more tools — they understand more fundamentals. Give a senior a new tool and they master it in days, because they understand what the tool DOES at a fundamental level.</p>`
  }
});

// ══ DOOR 3: SYSTEMS THINKING ══
doors.push({
  num:3, icon:"🌊", color:"#22d3ee", name:"তরঙ্গের অধিকারী",
  subtitle:"Systems Thinking", tech:"Seeing Cause-Effect Chains",
  spirit:"কদর — পরিমাপ, নিয়তি, সংযোগ",
  secret:"একটা ফিক্স আরেকটা বাগ বানায়। একটা ফিচার আরেকটা জটিলতা। সিস্টেম চিন্তা না করলে প্রতিটা সমাধান নতুন সমস্যা। কারিগর পার্ট দেখে, স্থপতি সিস্টেম দেখে। কদর — প্রতিটা কাজের সংযোগ দেখা। যে সংযোগ দেখে, সে ভবিষ্যৎ দেখে।",
  recall:{
    q:"তৃতীয় দরজায় ঢেউ কেন সংযুক্ত?",
    qen:"Why are the waves connected?",
    a:"কারণ একটা ফিক্স আরেকটা বাগ বানায়। সিস্টেম চিন্তা ছাড়া প্রতিটা সমাধান নতুন সমস্যা। কারিগর পার্ট দেখে, স্থপতি সিস্টেম দেখে। কদর — প্রতিটা কাজের সংযোগ।",
    aen:"Because one fix creates another bug. Without systems thinking, every solution is a new problem. A craftsman sees parts, an architect sees systems. Qadar — seeing connections."
  },
  story:`<p class="scene-setting">তৃতীয় দরজা। একটা হ্রদ। কারিগর খাদিজা পাথর ফেলছেন — ঢেউ তৈরি হয়। ঢেউ ছড়ায়, অন্য পাড়ে আছড়ে পড়ে, ফিরে আসে। তুমি ভাবলে এটা শুধু পাথর ও ঢেউ। কিন্তু খাদিজা দেখছেন — পাথর → ঢেউ → প্রতিফলন → হ্রদের তলায় পলি সরে যায় → মাছের ডিম নষ্ট → মাছ কমে → জেলে ক্ষতিগ্রস্ত। একটা পাথর = একটা জীবন বদল।</p>
<p class="scene-setting en">The third door. A lake. Craftswoman Khadija throws a stone — ripples form. They spread, hit the far shore, return. You think it's just stone and ripple. But Khadija sees — stone → ripple → reflection → sediment shifts → fish eggs destroyed → fish decline → fishermen suffer. One stone = one life changed.</p>

<div class="dialogue">First principles বলেছিলেন — মূল খুঁজো। কিন্তু আমি বলি — মূল খুঁজলেও সংযোগ না দেখলে অর্ধেক। প্রতিটা সিদ্ধান্ত একটা পাথর। সিস্টেমে ঢেউ তৈরি করে। এই ঢেউ কোথায় যাবে? কাকে নাড়িয়ে দেবে? কোথায় ফিরে আসবে? সিস্টেম চিন্তা — প্রতিটা সিদ্ধান্তের ঢেউ দেখা।</div>
<div class="dialogue en">"First principles said — find the root. But I say — even finding the root is half without seeing connections. Every decision is a stone. It creates ripples in the system. Where will these ripples go? Who will they disturb? Where will they return? Systems thinking — seeing the ripples of every decision."</div>

<table class="kv-table"><tr><th>Linear thinking (Junior)</th><th>Systems thinking (Senior)</th></tr>
<tr><td>A → B (cause → effect)</td><td>A → B → C → D → back to A (feedback loop)</td></tr>
<tr><td>Fix the symptom</td><td>Fix the system</td></tr>
<tr><td>Optimize locally</td><td>Optimize globally</td></tr>
<tr><td>Short-term win</td><td>Long-term health</td></tr></table>

<div class="callout warn"><span class="co-icon">🌊</span><div><strong>Linear চিন্তার ট্র্যাজেডি:</strong> "API slow → Redis যোগ করো।" Linear: API fast, done! Systems: Redis → users বেশি করে → DB load বাড়ে → DB cache যোগ → দুই cache → consistency issue → race condition → data corruption → টিম ৪০% সময় cache bug-এ → velocity কমে → প্রতিযোগী দ্রুত ships → market হারায়। "Quick fix" হয়ে গেল existential threat।</div></div>

<div class="callout info"><span class="co-icon">🔁</span><div><strong>Feedback loops:</strong> ভালো কোড → maintain সহজ → দ্রুত feature → খুশি user → বেশি revenue → বেশি engineer → আরও ভালো কোড (reinforcing loop, compounds)। উল্টোটা = death spiral। Code quality একটা reinforcing loop — ছোট বিনিয়োগ বছরের পর বছর জমে।</div></div>

<table class="kv-table"><tr><th>সিদ্ধান্ত</th><th>১st effect</th><th>২nd/৩rd effects</th></tr>
<tr><td class="hl">Microservices</td><td>দ্রুত deploy</td><td>network জটিলতা → debugging hell → ধীর feature</td></tr>
<tr><td class="hl">Skip tests</td><td>দ্রুত ship</td><td>prod bug → রাত ২টার fix → burnout</td></tr>
<tr><td class="hl">Abstraction layer</td><td>পরিষ্কার কোড</td><td>indirection tax → trace কঠিন → ধীর onboarding</td></tr></table>

<div class="callout tip"><span class="co-icon">🎯</span><div><strong>Bottleneck focus (Theory of Constraints):</strong> প্রতিটা সিস্টেমে একটাই bottleneck; সেটা ছাড়া অন্য কিছু optimize করা = অপচয়। design(২d)→code(৩d)→test(৫d)→deploy(১d)-এ bottleneck হলো test। Coding দ্রুত করলে ১০% উন্নতি; testing দ্রুত করলে ২০%। <strong>আগে bottleneck খোঁজো।</strong> মনে রাখো Brooks' Law — "দেরি হওয়া প্রজেক্টে লোক যোগ করলে আরও দেরি হয়।"</div></div>

<div class="callout info"><span class="co-icon">🐜</span><div><strong>Emergence:</strong> একটা পিঁপড়া বোকা, কিন্তু পিঁপড়ার কলোনি বুদ্ধিমান; একটা neuron ভাবতে পারে না, মস্তিষ্ক পারে। সিস্টেমের এমন বৈশিষ্ট্য থাকে যা আলাদা অংশে নেই — তাই অংশ নয়, <strong>interaction</strong> পড়ো। Senior সবসময় জিজ্ঞেস করে: "And THEN what?"</div></div>

<div class="dialogue">কদর — measure, proportion, destiny। কুরআনে আল্লাহ বলেন — "সবকিছু আমরা একটা নির্ধারিত পরিমাপে সৃষ্টি করেছি।" (৫৪:৪৯)। কদর = প্রতিটা জিনিসের সংযোগ, পরিমাপ, প্রভাব। সিস্টেম চিন্তা-ও কদর — প্রতিটা সিদ্ধান্তের সংযোগ দেখা। যে কদর বোঝে, সে দেখে — একটা সিদ্ধান্ত কীভাবে পুরো সিস্টেমকে নাড়ায়। যে কদর বোঝে না, সে শুধু নিজের অংশ দেখে, বাকি সব অন্ধকার।</div>
<div class="dialogue en">"Qadar — measure, proportion, destiny. Allah says — 'We created all things in determined measure.' (54:49). Qadar = the connections, proportions, effects of everything. Systems thinking too is qadar — seeing the connections of every decision. One who understands qadar sees — how one decision shakes the whole system. One who doesn't, sees only their part, and the rest is darkness."</div>`,
  senior:{
    title:"Systems Thinking — Daily Questions",
    body:`<p><strong>Before any decision, ask:</strong></p><p>১. What happens FIRST? (immediate effect)</p><p>২. What happens THEN? (second-order effect)</p><p>৩. What happens AFTER THAT? (third-order, feedback loops)</p><p>৪. Where is the BOTTLENECK? (fix that first)</p><p>৫. What feedback loop am I creating? (reinforcing or balancing?)</p><p><strong>The senior's habit:</strong> Draw the system on paper/whiteboard before coding. Boxes, arrows, delays, bottlenecks. If you can't draw it, you don't understand it.</p>`
  }
});

// ══ DOOR 4: BUSINESS BRAIN ══
doors.push({
  num:4, icon:"💰", color:"#fbbf24", name:"মূল্যের দৃষ্টি",
  subtitle:"The Business Brain", tech:"Understanding Why Code Matters",
  spirit:"রিযিক — জীবিকা, সম্পদ, উপার্জন",
  secret:"কোড মূল্যবান নয়। কোড যা সমাধান করে, তা মূল্যবান। ইঞ্জিনিয়ার কোড দেখে, ব্যবসায়ী সমস্যা দেখে। অবিচ্ছেয্য ইঞ্জিনিয়ার উভয় দেখে। রিযিক — উপার্জন কোথা থেকে আসে, কেন আসে, কীভাবে বাড়ে। যে রিযিক বোঝে, সে শুধু কোড লেখে না — মূল্য তৈরি করে।",
  recall:{
    q:"চতুর্থ দরজায় কারিগর কেন কোড নয়, গ্রাহক গণনা করলেন?",
    qen:"Why count customers, not code?",
    a:"কারণ কোড মূল্যবান নয়। কোড যা সমাধান করে, তা মূল্যবান। অবিচ্ছেয্য ইঞ্জিনিয়ার উভয় দেখে — কোড ও মূল্য। রিযিক — উপার্জন কোথা থেকে আসে।",
    aen:"Because code isn't valuable. What code solves, that's valuable. The irreplaceable engineer sees both — code and value. Rizq — where revenue comes from."
  },
  story:`<p class="scene-setting">চতুর্থ দরজা। একটা বাজার। কারিগর আব্দুর রহমান কোড লিখছেন না — গ্রাহকের সাথে কথা বলছেন। তুমি অবাক। ইঞ্জিনিয়ার কেন বাজারে? আব্দুর রহমান হাসলেন। "আমি ২০ বছর কোড লিখেছি। কিন্তু একদিন বুঝলাম — আমার কোড কে কিনছে? কেন কিনছে? কোন সমস্যা সমাধান হচ্ছে? না জানলে আমি শুধু টাইপিস্ট, ইঞ্জিনিয়ার না।"</p>
<p class="scene-setting en">The fourth door. A marketplace. Craftsman Abdur Rahman isn't writing code — he's talking to customers. You're surprised. Why is an engineer in the market? Abdur Rahman smiled. "I wrote code for 20 years. But one day I understood — who buys my code? Why? What problem is solved? Without knowing, I'm just a typist, not an engineer."</p>

<div class="dialogue">সিস্টেম চিন্তা বলেছিলেন — সংযোগ দেখো। কিন্তু আমি বলি — সবচেয়ে গুরুত্বপূর্ণ সংযোগ কোড ও গ্রাহকের মধ্যে। গ্রাহক কেন টাকা দেয়? কোন সমস্যা সমাধান হয়? এটা না বুঝলে তুমি শুধু কোড লেখো — মূল্য তৈরি করো না। ব্যবসায়িক মস্তিষ্ক — কোড কেন গুরুত্বপূর্ণ, তা বোঝা।</div>
<div class="dialogue en">"Systems thinking said — see connections. But I say — the most important connection is between code and customer. Why does the customer pay? What problem is solved? Without understanding this, you just write code — you don't create value. Business brain — understanding why code matters."</div>

<div class="callout info"><span class="co-icon">🔗</span><div><strong>Value chain:</strong> Code → Feature → User-problem solved → User happy → User pays → Company revenue → Engineer paid → আরও কোড। যেকোনো link ভাঙলে chain ভেঙে পড়ে। Junior দেখে শুধু Code→Feature; senior দেখে পুরো chain; irreplaceable engineer chain-টা optimize করে।</div></div>

<table class="kv-table"><tr><th>৩টা সংখ্যা</th><th>মানে</th></tr>
<tr><td class="hl">CAC</td><td>একজন customer পেতে খরচ। CAC &gt; per-user revenue হলে business ব্যর্থ।</td></tr>
<tr><td class="hl">LTV</td><td>একজন customer থেকে জীবদ্দশায় আয়। LTV &gt; ৩× CAC = সুস্থ business।</td></tr>
<tr><td class="hl">MRR/ARR</td><td>মাসিক/বার্ষিক recurring revenue — কোম্পানির হৃদস্পন্দন।</td></tr></table>

<table class="kv-table"><tr><th>টেকনিক্যাল সিদ্ধান্ত</th><th>ব্যবসায়িক প্রভাব</th></tr>
<tr><td class="hl">দ্রুত page load</td><td>+৭% conversion → +$৫০K/mo (Amazon: ১০০ms = ১%)</td></tr>
<tr><td class="hl">৯৯.৯→৯৯.৯৯% uptime</td><td>outage রোধ = $১০০K/hr বাঁচানো</td></tr>
<tr><td class="hl">ভালো onboarding</td><td>-৩০% churn → +$২০K/mo</td></tr>
<tr><td class="hl">Test coverage ৪০→৮০%</td><td>-৫০% bug → +২ দিন velocity</td></tr>
<tr><td class="hl">Microservices</td><td>??? (হয়তো negative!)</td></tr></table>

<div class="callout warn"><span class="co-icon">⏳</span><div><strong>Opportunity cost:</strong> "২ সপ্তাহ refactor করবো?" Junior — "হ্যাঁ, কোড messy।" Senior — "২ সপ্তাহ refactor = ২ সপ্তাহ feature না-shipping। সেই feature-এর revenue/user-happiness কি refactor-এর চেয়ে বেশি? হলে refactor করো, না হলে কোরো না।" প্রতি ঘণ্টার opportunity cost আছে — "এটাই কি আমার সময়ের সর্বোচ্চ-মূল্যের ব্যবহার?"</div></div>

<div class="callout tip"><span class="co-icon">👥</span><div><strong>Users বোঝা (empathy multiplier):</strong> সপ্তাহে ১ জন user-এর সাথে কথা বলো — support ticket নয়, আসল ৩০ মিনিটের কথোপকথন; ৩ মাসের কোডিং-এর চেয়ে বেশি শিখবে। উদাহরণ: তুমি ভাবো user "advanced search filter" চায় → কথা বললে দেখা যায় তারা চায় "just find my stuff faster" — একটা সরল sort-ই যথেষ্ট ছিল।</div></div>

<div class="dialogue">রিযিক — provision, sustenance, livelihood। কুরআনে আল্লাহ বলেন — "আল্লাহ প্রতিটা জীবকে তার রিযিক দেন।" (১১:৬)। রিযিক = জীবিকা যা স্বয়ংক্রিয়ভাবে আসে — কিন্তু শর্ত হলো চেষ্টা। ব্যবসায়িক মস্তিষ্ক-ও রিযিকের বোধ — উপার্জন কোথা থেকে আসে, কেন আসে, কীভাবে বাড়ে। যে রিযিক বোঝে, সে শুধু কোড লেখে না — মূল্য তৈরি করে। যে না বোঝে, সে ধারক — উপার্জন তার হাত দিয়ে যায়, কিন্তু সে জানে না কেন।</div>
<div class="dialogue en">"Rizq — provision, sustenance, livelihood. Allah says — 'Allah provides for every living creature.' (11:6). Rizq = livelihood that comes — but the condition is effort. Business brain too is awareness of rizq — where revenue comes from, why, how it grows. One who understands rizq doesn't just write code — creates value. One who doesn't, is a container — revenue passes through their hands, but they don't know why."</div>`,
  senior:{
    title:"Business Brain — Quick Start",
    body:`<p><strong>Learn these terms THIS WEEK:</strong> CAC, LTV, MRR, churn rate, conversion rate, opportunity cost।</p><p><strong>Talk to ১ user/customer per week.</strong> Not support tickets — actual ৩০-min conversations। You'll learn more than ৩ months of coding।</p><p><strong>For every technical decision, ask:</strong> What's the business impact? How does this affect revenue, users, or velocity? If you can't answer, you're building in the dark।</p><p><strong>Understand your company's revenue model:</strong> SaaS subscription? Transaction fee? Advertising? The revenue model shapes every engineering priority।</p>`
  }
});

// ══ DOOR 5: PROBLEM FINDING ══
doors.push({
  num:5, icon:"🔍", color:"#a78bfa", name:"নীরব পর্যবেক্ষক",
  subtitle:"The Problem Finder", tech:"Finding Problems Before They Explode",
  spirit:"তালাশ — সন্ধান, অনুসন্ধান",
  secret:"সবাই সমাধান খুঁজছে। কিন্তু সঠিক সমস্যা খুঁজছে কে? সমাধান দ্রুত, সমস্যা ধীর। কিন্তু ভুল সমস্যা সমাধান = সময় নষ্ট। অবিচ্ছেয্য ইঞ্জিনিয়ার সমস্যা খুঁজে, তারপর সমাধান। তালাশ — সঠিক সমস্যা সন্ধান। যে তালাশ করে, সে আগে দেখে।",
  recall:{
    q:"পঞ্চম দরজায় কারিগর কেন নীরবে বসে থাকেন?",
    qen:"Why sit in silence?",
    a:"কারণ সবাই সমাধান খুঁজছে, সঠিক সমস্যা খুঁজছে কে? সমাধান দ্রুত, সমস্যা ধীর। ভুল সমস্যা সমাধান = সময় নষ্ট। তালাশ — সঠিক সমস্যা সন্ধান। যে তালাশ করে, সে আগে দেখে।",
    aen:"Because everyone seeks solutions, who seeks the right problem? Solutions are fast, problems are slow. Wrong problem solved = wasted time. Talash — finding the right problem."
  },
  story:`<p class="scene-setting">পঞ্চম দরজা। একটা নীরব কক্ষ। কারিগর মারইয়াম বসে আছেন — কিছু করছেন না। শুধু দেখছেন। চারপাশে অন্য কারিগররা দ্রুত কাজ করছে — সমাধান বানাচ্ছে, ফিক্স করছে, শিপ করছে। তুমি ভাবলে মারইয়াম অলস। কিন্তু তিনি সবচেয়ে গুরুত্বপূর্ণ কাজ করছেন — সমস্যা খুঁজছেন। সবাই সমাধান নিয়ে ব্যস্ত, কেউ সমস্যা নিয়ে ভাবছে না।</p>
<p class="scene-setting en">The fifth door. A silent room. Craftswoman Maryam sits — doing nothing. Just observing. Around her, other craftsmen work fast — building solutions, fixing, shipping. You think Maryam is lazy. But she's doing the most important work — finding problems. Everyone is busy with solutions, nobody is thinking about problems.</p>

<div class="dialogue">ব্যবসায়িক মস্তিষ্ক বলেছিলেন — কোড কেন গুরুত্বপূর্ণ তা বোঝো। কিন্তু আমি বলি — সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন: কোন সমস্যা সমাধান করবে? সবাই সমাধান নিয়ে ব্যস্ত। কিন্তু সঠিক সমস্যা খুঁজছে কে? ভুল সমস্যা সমাধান = সময়, টাকা, শক্তি নষ্ট। অবিচ্ছেয্য ইঞ্জিনিয়ার সমস্যা খুঁজে, তারপর সমাধান।</div>
<div class="dialogue en">"The business brain said — understand why code matters. But I say — the most important question: WHICH problem to solve? Everyone is busy with solutions. But who is finding the right problem? Wrong problem solved = wasted time, money, energy. The irreplaceable engineer finds problems first, then solves them."</div>

<table class="kv-table"><tr><th>স্তর</th><th>ভূমিকা</th><th>মূল্য</th></tr>
<tr><td class="hl">১. Code Writer</td><td>"বলো কী বানাতে, কোড করে দিই"</td><td>কম — AI-replaceable</td></tr>
<tr><td class="hl">২. Problem Solver</td><td>"সমস্যা দাও, সমাধান করি"</td><td>মাঝারি — useful</td></tr>
<tr><td class="hl">৩. Problem Finder</td><td>"যে সমস্যা তুমি জানতেই না, সেটা খুঁজে সমাধান করি"</td><td>সর্বোচ্চ — unique, irreplaceable</td></tr></table>

<div class="callout info"><span class="co-icon">🔍</span><div><strong>Problem finding দেখতে কেমন:</strong> "App slow" — Solver: profile → slow query → index → done (symptom fix)। Finder: কেন slow? → user একসাথে ৫০০ item load করে → কেন ৫০০? → pagination নেই → <strong>আসল সমস্যা pagination, slow query নয়</strong> → ১০x দ্রুত + কম server cost + সম্পর্কিত সমস্যাও ধরা পড়ে।</div></div>

<div class="callout tip"><span class="co-icon">🔮</span><div><strong>Anticipatory thinking:</strong> "মাসে ১০ user বাড়ছে → ৬ মাসে +৬০। DB ২০০ concurrent সামলায়, ২৫০-তে slow হবে → ৪ মাসে DB scaling লাগবে, এখনই প্রস্তুত করি।" Junior সমস্যায় react করে (firefighter), senior anticipate করে (architect), irreplaceable engineer prevent করে (oracle)।</div></div>

<table class="kv-table"><tr><th>সমস্যা</th><th>Impact</th><th>Urgency</th><th>করণীয়</th></tr>
<tr><td class="hl">User pay করতে পারছে না</td><td>HIGH ($)</td><td>HIGH</td><td>এখনই fix</td></tr>
<tr><td class="hl">Scalability wall</td><td>HIGH</td><td>MEDIUM</td><td>শীঘ্রই fix</td></tr>
<tr><td class="hl">Developer experience</td><td>MEDIUM</td><td>MEDIUM</td><td>সময় পেলে</td></tr>
<tr><td class="hl">কোড দেখতে খারাপ</td><td>LOW</td><td>LOW</td><td>পরে fix</td></tr></table>

<div class="callout tip"><span class="co-icon">📓</span><div><strong>Problem Journal:</strong> রোজ একটা সমস্যা লেখো যা লক্ষ্য করেছ (সমাধান নয়) — "user ৩ বার back চাপে → confusion", "onboarding step ৪-এ ৬০% drop-off"। সাপ্তাহিক review, top ৩ টিমকে দেখাও। তুমি হয়ে ওঠো সেই লোক যে সমস্যা <em>দেখে</em> — এটাই irreplaceable, কারণ বেশিরভাগ engineer THINK-এর চেয়ে CODE করতে বেশি পছন্দ করে।</div></div>

<div class="dialogue">তালাশ — search, seek, quest। কুরআনে আল্লাহ বলেন — "যারা আমার সন্ধানে চলে, আমি তাদের পথ দেখাই।" তালাশ শুধু সমাধানের নয় — সমস্যারও। প্রকৃত তালাশ হলো সঠিক সমস্যা খুঁজে বের করা, সমাধানের আগে। যে তালাশ করে, সে আগে দেখে — সমস্যা বড় হওয়ার আগেই। যে তালাশ করে না, সে অপেক্ষা করে — সমস্যা ফেটে পড়ার জন্য।</div>
<div class="dialogue en">"Talash — search, seek, quest. Allah says — 'Those who seek Me, I guide them.' Talash isn't just for solutions — it's for problems too. True talash is finding the right problem before the solution. One who seeks, sees early — before the problem grows. One who doesn't seek, waits — for the problem to explode."</div>`,
  senior:{
    title:"Become a Problem Finder — This Week",
    body:`<p><strong>Start a Problem Journal.</strong> Every day, write ONE problem you noticed (not solved — just noticed). User friction, code smell, team bottleneck, business gap — anything.</p><p><strong>Weekly review:</strong> Pick the top ৩. Present to team. "I noticed these problems. Here's priority. Can we fix?"</p><p><strong>The ৫-Why habit:</strong> For every bug, ask why ৫ times. You'll find root causes nobody else sees.</p><p><strong>Anticipate:</strong> Once a month, ask: "What will break in ৬ months if we keep growing?" Fix before it breaks.</p><p><strong>You become irreplaceable when you're the person who SEES problems before they become crises.</strong></p>`
  }
});
