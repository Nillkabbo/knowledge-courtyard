// ════════════════════════════════════════
// গভীর জ্ঞানের সভা — DOORS 5-8
// Deep Learning: Knowledge×Action → Metacognition
// ════════════════════════════════════════

// ══ DOOR 5: KNOWLEDGE × ACTION = POWER ══
doors.push({
  num:5, icon:"⚡", color:"#ffc857", name:"সেতু নির্মাতার গিরিজ",
  subtitle:"The Bridge Builder's Span", tech:"Knowledge × Action = Power",
  spirit:"ঈমান + আমল — বিশ্বাস ও কাজ",
  secret:"জ্ঞান শক্তি নয়। জ্ঞান × কর্ম = শক্তি। গুণফল। যেকোনোটি শূন্য হলে ফলাফল শূন্য। পড়ে শেখা দ্রুত মুছে যায়; করে শেখা স্থায়ী।",
  recall:{
    q:"সেতু নির্মাতা কেন শুধু নকশা আঁকেন না, সেতু বানান?",
    qen:"Why doesn't the bridge builder just draw blueprints, but builds the bridge?",
    a:"কারণ নকশা কাগজে থাকে, সেতু নদীতে। জ্ঞান মাথায় থাকে, কর্ম দুনিয়ায়। নকশা আঁকলে কেউ পার হতে পারে না। সেতু বানালে পার হওয়া যায়। জ্ঞান × কর্ম = শক্তি। গুণফল, যোগফল নয়।",
    aen:"Because blueprints stay on paper, bridges span rivers. Knowledge stays in head, action lives in world. No one crosses a drawing. A bridge lets them cross. Knowledge × Action = Power. Product, not sum."
  },
  story:`
<p class="scene-setting">পঞ্চম আসন। একটা গিরিজের কিনারা। নিচে গভীর খাদ, সামনে একটা অসমাপ্ত সেতু — অর্ধেক পাকা, বাকি কাঠের। সেতু নির্মাতা নূহ উপরে দাঁড়িয়ে আছেন — বয়স্ক, হাতে হাতুড়ি, পরনে কাজের পোশাক। তাঁর পাশে একটা বই — সেতু নির্মাণের নকশায় ভরা। কিন্তু তিনি বই পড়ছেন না। তিনি সেতুতে কাজ করছেন।</p>
<p class="scene-setting en">The fifth seat. A cliff's edge. Below: a deep gorge, ahead: an unfinished bridge — half built, rest wooden. Bridge builder Nuh stands atop — elderly, hammer in hand, work clothes on. Beside him: a book full of bridge blueprints. But he's not reading. He's working on the bridge.</p>

<div class="dialogue">আয়না-কারিগর বলেছিলেন — ফিডব্যাক লুপ। কিন্তু আমি বলি — ফিডব্যাক কীসের উপর? কাজের উপর। কাজ না করলে ফিডব্যাক কীসে? ভিডিও বলেছে "জ্ঞান শক্তি।" আংশিক সত্য। জ্ঞান শক্তি নয় — জ্ঞান × কর্ম শক্তি। গুণফল। যোগফল নয়।</div>
<div class="dialogue en">"The mirror-maker said — feedback loop. But I say — feedback on what? On action. No action = no feedback. The video said 'knowledge is power.' Partial truth. Knowledge isn't power — knowledge × action is power. Product. Not sum."</div>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>"Knowledge is power" (Francis Bacon, 1597)</strong> — ১৭শ শতকে সত্য, তখন জ্ঞানই দুর্লভ ছিল। ২১শ শতকে অন্তত আংশিক ভুল: জ্ঞান এখন সস্তা (YouTube, Wikipedia, LLM), কিন্তু <em>execution</em> এখনো দুর্লভ — তার জন্য লাগে সাহস, অধ্যবসায়, ব্যর্থতা সহ্য।</div></div>
<table class="kv-table"><tr><th>Knowledge</th><th>Action</th><th>Power (গুণফল)</th></tr>
<tr><td>১০০</td><td>০</td><td>০</td></tr>
<tr><td>১০</td><td>১০</td><td>১০০</td></tr>
<tr><td>৫০</td><td>৫০</td><td>২৫০০</td></tr></table>
<div class="callout tip"><span class="co-icon">🧠</span><div><strong>প্রয়োগেই জ্ঞান গভীর হয়:</strong> Declarative memory (পড়ে শেখা) দ্রুত মুছে যায়; procedural memory (করে শেখা) স্থায়ী। পড়ো, তারপর করো — করা ছাড়া শেখা অসম্পূর্ণ।</div></div>

<div class="diagram">
  <div class="diag-title">Knowledge × Action = Power (গুণফল, যোগফল নয়)</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <!-- two axes: knowledge (x), action (y), area = power -->
    <line class="axis" x1="60" y1="180" x2="500" y2="180"/>
    <line class="axis" x1="60" y1="30" x2="60" y2="180"/>
    <text class="lbl-sm" x="280" y="208" fill="#9290a8">Knowledge →</text>
    <text class="lbl-sm" x="30" y="105" fill="#9290a8" transform="rotate(-90 30,105)">Action →</text>
    <!-- Case A: high knowledge, zero action = thin line (zero power) -->
    <rect class="cell-hot" x="60" y="178" width="380" height="4"/>
    <text class="lbl-sm" x="250" y="60" fill="#ff6b35">Knowledge=100, Action=0</text>
    <text class="lbl-hot" x="250" y="76">Power = 0</text>
    <!-- Case B: medium both = decent rectangle -->
    <rect class="cell-cyan" x="60" y="110" width="190" height="70" style="opacity:.7"/>
    <text class="lbl-sm" x="155" y="100" fill="#3dd6c4">K=50 × A=50 = 2500</text>
    <!-- Case C: both high = big area -->
    <rect class="cell-good" x="60" y="55" width="380" height="125" style="opacity:.35"/>
    <text class="lbl-sm" x="400" y="48" fill="#52c41a">K=100 × A=100</text>
    <text class="lbl-leaf" x="430" y="100">Power সর্বোচ্চ</text>
    <text class="lbl-sm" x="280" y="225" fill="#5e5c74">যেকোনোটি শূন্য হলে ফলাফল শূন্য — গুণফল, যোগফল নয়</text>
  </svg>
  <div class="diag-cap">জ্ঞান × কর্ম = শক্তি। এটি ক্ষেত্রফল (area) — গুণফল। যেকোনো একটি শূন্য হলে পুরোটাই শূন্য। ১০০ জ্ঞান + ০ কর্ম = ০। ৫০×৫০ = ২৫০০। ১০০×১০০ = সর্বোচ্চ।</div>
</div>

<div class="code-block">Knowledge × Action — প্রয়োগের নিয়ম:

  ২৪-ঘণ্টা নিয়ম:
    যা শিখছ, ২৪ ঘণ্টার মধ্যে প্রয়োগ না করলে
    declarative → procedural রূপান্তর হয় না। পড়া মুছে যায়।

  কোড শিখছ?   → সাথে সাথে একটা ফাংশন লেখো
  কনসেপ্ট?     → নিজের প্রজেক্টে কোথায় লাগবে ভাবো
  ডিজাইন প্যাটার্ন? → আজকের কোডে প্রয়োগ করো

  ⚠️ ফাঁদ: "আরও পড়ি, তারপর করব" — এটা কখনো করবে না।
     ১ টিউটোরিয়াল → সাথে সাথে প্রজেক্ট। এটাই নিয়ম।</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৫৯৭</div><div class="sc-label">"Knowledge is power" — Francis Bacon</div></div>
<div class="stat-card"><div class="sc-num">২৪ ঘণ্টা</div><div class="sc-label">প্রয়োগের সময়সীমা (procedural রূপান্তরের জন্য)</div></div>
<div class="stat-card"><div class="sc-num">procedural</div><div class="sc-label">করে শেখা memory — স্থায়ী</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ জ্ঞান সংগ্রহ</div>১০০টা টিউটোরিয়াল দেখো। ৫০টা বই পড়ো। ২০টা কোর্স করো। মনে হয় "অনেক জানি।" কিন্তু — কিছু বানাওনি। কোনো সমস্যা সমাধান করোনি। Knowledge=100, Action=0 → Power=0।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ জ্ঞান প্রয়োগ</div>১টা টিউটোরিয়াল দেখো → সাথে সাথে প্রজেক্ট বানাও। ভুল করো → ঠিক করো → শেখো। ছোট হলেও প্রতিদিন কিছু বানাও। Knowledge × Action = Power। প্রতিটা প্রজেক্ট = procedural memory।</div>
</div>

<div class="dialogue">ঈমান ও আমল — বিশ্বাস ও কাজ। কুরআনে বারবার এসেছে — "যারা ঈমান এনেছে এবং সৎকর্ম করেছে।" শুধু ঈমান নয়, শুধু আমল নয় — দুটোর গুণফল। ঈমান ছাড়া আমল গাছপাতা ছাড়া শেকড়। আমল ছাড়া ঈমান শেকড় ছাড়া গাছপাতা। জ্ঞানও তেমনি — কর্ম ছাড়া শুধু তথ্য, কর্মে রূপ না পেলে শক্তি নয়।</div>
<div class="dialogue en">"Iman and Amal — faith and action. The Quran repeatedly says — 'those who believed AND did righteous deeds.' Not just faith, not just action — the product. Faith without action is leaves without roots. Action without faith is roots without leaves. Knowledge too — without action it's just information, not power until it takes form."</div>`,
  senior:{
    title:"Apply Immediately — পড়ার সাথে সাথে",
    body:`<p><strong>নিয়ম:</strong> যা শিখছ, সাথে সাথে প্রয়োগ করো। বিলম্ব নয়।</p><p><strong>কোড শিখছ?</strong> → সাথে সাথে একটা ফাংশন লেখো।</p><p><strong>কনসেপ্ট শিখছ?</strong> → নিজের প্রজেক্টে কোথায় লাগবে ভাবো।</p><p><strong>ডিজাইন প্যাটার্ন?</strong> → আজকের কোডে প্রয়োগ করো।</p><p>২৪ ঘণ্টার মধ্যে প্রয়োগ না করলে — declarative memory থেকে procedural-এ রূপান্তর হয় না। পড়া মুছে যায়।</p>`
  }
});

// ══ DOOR 6: UNLEARN, LEARN, RELEARN ══
doors.push({
  num:6, icon:"🔄", color:"#ff6b35", name:"কুমারের চাকা",
  subtitle:"The Potter's Wheel", tech:"Unlearn, Learn, Relearn",
  spirit:"তওবা — শুরুতে ফিরে যাওয়া",
  secret:"আলভিন টফলার: ২১শ শতকের নিরক্ষর যারা পড়তে লিখতে পারে না নয় — যারা শিখতে, আনলেয়ার্ন করতে, রিলেয়ার্ন করতে পারে না। আনলেয়ার্ন সবচেয়ে কঠিন।",
  recall:{
    q:"কুমার কেন মাঝে মাঝে পুরো হাঁড়ি ভেঙে ফেলেন?",
    qen:"Why does the potter sometimes smash the entire pot?",
    a:"কারণ পুরোনো আকার ভুল হলে তা ঠিক করে প্রয়োজন নেই। ভাঙতে হবে। আনলেয়ার্ন — পুরোনো জ্ঞান বর্জন। এটাই সবচেয়ে কঠিন, কারণ মস্তিষ্ক পুরোনো পাথ ভাঙতে চায় না। কিন্তু নতুন বানাতে হলে পুরোনো ভাঙতেই হবে।",
    aen:"Because if the old shape is wrong, fixing it is pointless. Must break. Unlearn — discarding old knowledge. Hardest thing, because the brain resists breaking old paths. But new requires breaking old."
  },
  story:`
<p class="scene-setting">ষষ্ঠ আসন। একটা কুমারের ঘর। মাটির গন্ধ, চাকার আওয়াজ, ভেজা মাটির ঠান্ডা স্পর্শ। কুমার আদম চাকায় একটা হাঁড়ি বানাচ্ছেন — কিন্তু হঠাৎ থামলেন। হাঁড়িটা একটু বাঁকা। তিনি এটা ঠিক করার চেষ্টা করলেন না। তিনি পুরোটা চেপে গুঁড়িয়ে দিলেন মাটিতে। আবার শুরু।</p>
<p class="scene-setting en">The sixth seat. A potter's hut. Smell of clay, hum of the wheel, cold touch of wet earth. Potter Adam shapes a pot on the wheel — but suddenly stops. The pot is slightly crooked. He doesn't try to fix it. He crushes the whole thing back to clay. Starts again.</p>

<div class="dialogue">সেতু নির্মাতা বলেছিলেন — জ্ঞান × কর্ম। কিন্তু আমি বলি — কর্মের আগে আসে ভাঙা। পুরোনো ভুল ধারণা না ভাঙলে নতুন সঠিক ধারণা বসে না। আলভিন টফলার — ভবিষ্যৎ প্রভাবক। তিনি বলেছেন একটা গভীর কথা, যা ভিডিওর সবচেয়ে গুরুত্বপূর্ণ অংশ।</div>
<div class="dialogue en">"The bridge builder said — knowledge × action. But I say — before action comes breaking. Without breaking old wrong ideas, new correct ones don't take root. Alvin Toffler — futurist. He said something deep, the video's most important part."</div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>Alvin Toffler:</strong> "২১শ শতকের নিরক্ষর তারা নয় যারা পড়তে-লিখতে পারে না — বরং যারা <strong>LEARN, UNLEARN, ও RELEARN</strong> করতে পারে না।"</div></div>
<table class="kv-table"><tr><th>ধাপ</th><th>কী</th><th>ভিডিও?</th></tr>
<tr><td class="hl">Learn</td><td>নতুন জ্ঞান গ্রহণ</td><td>✅ বলেছে</td></tr>
<tr><td class="hl">Unlearn</td><td>পুরোনো জ্ঞান বর্জন — "fire together, wire together"; পুরোনো path ভাঙা শারীরিক ও আবেগগতভাবে কঠিন (পরিচয়ের অংশ)</td><td>⚠️ মিস করেছে</td></tr>
<tr><td class="hl">Relearn</td><td>নতুন করে শেখা</td><td>✅ বলেছে</td></tr></table>
<div class="callout tip"><span class="co-icon">⚙️</span><div><strong>Elon Musk-ের উদাহরণ:</strong> শক্তি "দ্রুত শেখা" নয় — <em>first-principles thinking</em>: সবচেয়ে মৌলিক সত্যে ভেঙে নতুন করে গড়া। এটা মূলত একটা unlearning কৌশলই।</div></div>

<div class="diagram">
  <div class="diag-title">Learn → Unlearn → Relearn — কুমারের চক্র</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowFireD6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#ff6b35"/></marker>
      <marker id="arrowLeafD6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#52c41a"/></marker>
    </defs>
    <!-- 3 nodes in a triangle -->
    ${[ ['LEARN\nনতুন গ্রহণ',140,60,'#3dd6c4'], ['UNLEARN\nপুরোনো ভাঙো',400,60,'#ff6b35'], ['RELEARN\nনতুন করে গড়ো',270,170,'#52c41a'] ].map(s=>`<rect x="${s[1]-70}" y="${s[2]-22}" width="140" height="44" rx="8" style="fill:${s[3]}22;stroke:${s[3]}"/><text class="lbl-sm" x="${s[1]}" y="${s[2]-3}" fill="${s[3]}" style="font-weight:700">${s[0].split('\\n')[0]}</text><text class="lbl-sm" x="${s[1]}" y="${s[2]+13}" fill="#9290a8" style="font-size:9px">${s[0].split('\\n')[1]}</text>`).join('')}
    <!-- cycle arrows: learn -> unlearn -> relearn -> learn -->
    <line class="edge-hot" x1="210" y1="60" x2="330" y2="60" marker-end="url(#arrowFireD6)"/>
    <text class="lbl-sm" x="270" y="50" fill="#ff6b35" style="font-size:9px">সবচেয়ে কঠিন</text>
    <line class="edge-hot" x1="370" y1="90" x2="310" y2="148" marker-end="url(#arrowFireD6)"/>
    <line class="edge-cyan" x1="225" y1="155" x2="175" y2="92" marker-end="url(#arrowLeafD6)"/>
    <text class="lbl-sm" x="280" y="210" fill="#5e5c74">tofu. আলভিন টফলার: ২১শ শতকের নিরক্ষর = যে learn, unlearn, relearn করতে পারে না</text>
  </svg>
  <div class="diag-cap">Unlearn সবচেয়ে কঠিন — মস্তিষ্ক পুরোনো path ভাঙতে চায় না, পরিচয়ের অংশ হয়ে যায়। কিন্তু নতুন বানাতে হলে পুরোনো ভাঙতেই হবে — কুমারের মতো হাঁড়ি গুঁড়িয়ে আবার শুরু।</div>
</div>

<div class="code-block">Unlearn, Learn, Relearn — নতুন ধারণায় ৪ প্রশ্ন:

  যখন নতুন কিছু শিখবে যা পুরোনো ধারণার বিপরীত:
    ১. "আমার পুরোনো ধারণা কী?"
    ২. "নতুন তথ্য কী বলছে?"
    ৩. "আমি কি প্রমাণের ভিত্তিতে পুরোনো ছাড়তে প্রস্তুত?"
    ৪. First-principles — সবচেয়ে মৌলিক সত্যে ভাঙো, নতুন করে গড়ো

  ⚠️ সবচেয়ে বড় বাধা: অহংকার।
     "আমি জানি" বললে শেখা বন্ধ।
     "আমি ভুল হতে পারি" বললে শেখা খোলা।</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ আটকে থাকা</div>"আমি জানি" — পুরোনো ধারণায় আঁকড়ে থাকা। নতুন প্রমাণ এলেও প্রত্যাখ্যান। এটাই unlearning-এর সবচেয়ে বড় বাধা — পরিচয়ের অংশ হয়ে যাওয়া ধারণা ছাড়া কঠিন। যে আটকে থাকে, সে বাড়ে না।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ভেঙে গড়া</div>"আমি ভুল হতে পারি" — প্রমাণের ভিত্তিতে পুরোনো ছাড়া। First-principles: সবচেয়ে মৌলিক সত্যে ভাঙো, নতুন করে গড়ো। কুমারের মতো বাঁকা হাঁড়ি গুঁড়িয়ে আবার শুরু। এটাই বৃদ্ধি।</div>
</div>

<div class="dialogue">তওবা — ফিরে যাওয়া। শুরুতে ফিরে যাওয়া। পুরোনো ভুল ছেড়ে নতুন সত্য গ্রহণ। কুরআনে আল্লাহ বলেন — "তওবা করো আল্লাহর কাছে।" তওবা মানে শুধু অনুশোচনা নয় — পুরোনো পথ ছেড়ে নতুন পথে যাওয়া। Unlearn। যে unlearn করতে পারে না, সে আটকে থাকে। যে unlearn করতে পারে, সে বাড়ে।</div>
<div class="dialogue en">"Tawbah — returning. Going back to the beginning. Leaving old errors and embracing new truth. Allah says — 'Turn to Allah in repentance.' Tawbah isn't just regret — it's leaving the old path for a new one. Unlearn. One who can't unlearn stays stuck. One who can, grows."</div>`,
  senior:{
    title:"Unlearning Practice — প্রতিটা নতুন ধারণায়",
    body:`<p><strong>যখন নতুন কিছু শিখবে যা পুরোনো ধারণার বিপরীত:</strong></p><p><strong>১.</strong> আগে জিজ্ঞেস করো — "আমার পুরোনো ধারণা কী?"</p><p><strong>২.</strong> "নতুন তথ্য কী বলছে?"</p><p><strong>৩.</strong> "আমি কি প্রমাণের ভিত্তিতে পুরোনো ছাড়তে প্রস্তুত?"</p><p><strong>৪.</strong> First-principles thinking — সবচেয়ে মৌলিক সত্যে ভাঙো, নতুন করে গড়ো।</p><p>অহংকারই unlearning-এর সবচেয়ে বড় বাধা। "আমি জানি" বললে শেখা বন্ধ। "আমি ভুল হতে পারি" বললে শেখা খোলা।</p>`
  }
});

// ══ DOOR 7: SPACED REPETITION + ACTIVE RECALL ══
doors.push({
  num:7, icon:"🌊", color:"#36d6e7", name:"জোয়ার পর্যবেক্ষকের পাথর",
  subtitle:"The Tide Watcher's Rock", tech:"Spaced Repetition + Active Recall",
  spirit:"ফিরে আসা সময় — বিরতিতে শক্তি",
  secret:"ভিডিও এই দুটো সম্পূর্ণ মিস করেছে। ২০ ঘণ্টা শিখলে এক সপ্তাহে ৭৫% ভুলে যাবে। Spaced repetition + active recall ছাড়া শেখা = বাল্কে পানি ঢালা।",
  recall:{
    q:"জোয়ার পর্যবেক্ষক কেন প্রতিদিন একই পাথরে আসেন, একবারে সব মাপেন না?",
    qen:"Why does the tide watcher come to the same rock daily, not measure everything at once?",
    a:"কারণ জোয়ার সময়ের সাথে বদলায়। মাপতে হয় বিরতিতে। মেমরিও তেমনি — একবারে শিখলে ভুলে যায়। সঠিক বিরতিতে ফিরে আসতে হয়। Spaced repetition। আর কেবল দেখা নয় — নিজে থেকে মনে করতে হয়। Active recall।",
    aen:"Because tides change over time. Must measure at intervals. Memory too — learning once means forgetting. Must return at right intervals. Spaced repetition. And not just seeing — retrieving from memory. Active recall."
  },
  story:`
<p class="scene-setting">সপ্তম আসন। একটা পাথরের উপর সমুদ্রের কিনারায়। বাতাস, লবণাক্ত গন্ধ, ঢেউয়ের শব্দ। জোয়ার পর্যবেক্ষক নূর একটা খাতায় লিখছেন — সময়, জলের উচ্চতা, ঢেউয়ের ধরন। কিন্তু তিনি এক দিনে সব মাপছেন না। প্রতিদিন আসেন, একই সময়ে, একই পাথরে।</p>
<p class="scene-setting en">The seventh seat. A rock by the sea. Wind, salty smell, sound of waves. Tide watcher Nur writes in a journal — time, water height, wave type. But he doesn't measure everything in one day. He comes daily, same time, same rock.</p>

<div class="dialogue">কুমার বলেছিলেন — unlearn, learn, relearn। কিন্তু আমি বলি — relearn করতে হবে সঠিক সময়ে। একবারে নয়। বিরতিতে। ভিডিও এখানে দুটো সবচেয়ে গুরুত্বপূর্ণ জিনিস সম্পূর্ণ মিস করেছে — spaced repetition আর active recall। এগুলো ছাড়া ২০ ঘণ্টা প্র্যাকটিস = বাল্কে পানি ঢালা।</div>
<div class="dialogue en">"The potter said — unlearn, learn, relearn. But I say — relearn must happen at the right time. Not all at once. At intervals. The video completely missed two of the most important things — spaced repetition and active recall. Without these, 20 hours of practice = pouring water into a sieve."</div>

<div class="callout warn"><span class="co-icon">📉</span><div><strong>Spaced repetition — Ebbinghaus forgetting curve:</strong> শেখার পর ১ ঘণ্টায় ~৫০%, ১ দিনে ~৭০%, ১ সপ্তাহে ~৭৫% ভুলে যাবে। ২০ ঘণ্টা শিখলে এক সপ্তাহে ৭৫% উধাও! সমাধান — বিরতিতে review: Day 1 → 3 → 7 → 16 → 35, প্রতিটা review তোমার ভুলে যাওয়ার ঠিক আগে।</div></div>
<div class="callout info"><span class="co-icon">🧩</span><div><strong>Active recall:</strong> পড়া = declarative (দ্রুত মুছে যায়); মনে করার চেষ্টা = procedural (স্থায়ী)। পড়ে মনে হয় "জানি" — কিন্তু বই বন্ধ করে খালি পাতায় লিখলে কিছুই আসে না। সমাধান — বই বন্ধ করে মনে করো: নিজেকে পরীক্ষা দাও · কাউকে শেখাও (Feynman) · খালি কাগজে মানচিত্র আঁকো।</div></div>
<div class="callout tip"><span class="co-icon">🛠️</span><div><strong>আজই শুরু:</strong> Anki (ফ্রি) — প্রতিটা কনসেপ্ট একটা card, অ্যালগরিদম তোমার forgetting curve মাপে। প্রতিটা পড়ার পর — বই বন্ধ, খালি পাতায় যা মনে আছে লেখো; যা মিস করো সেটাই তোমার গ্যাপ। এই দুটো ছাড়া দ্রুত শেখা = দ্রুত ভুলে যাওয়া।</div></div>

<div class="dialogue">কুরআনে আল্লাহ বলেন — "তোমরা কি এই উপদেশে বিস্ময় প্রকাশ করছ যে তোমাদেরকে স্মরণ করানো হচ্ছে? এবং তোমরা একে অস্বীকার করছ?" স্মরণ — বিরতিতে, বারবার, সক্রিয়ভাবে। কুরআনে একই কাহিনী বিভিন্ন সূরায় বিভিন্ন কোণ থেকে বলা হয়েছে — spaced repetition। আর শুধু শোনা নয় — নিজে চিন্তা করতে বলা হয়েছে — active recall। দুটোই আল্লাহ কুরআনে প্রয়োগ করেছেন।</div>
<div class="dialogue en">"Allah says — 'Do you wonder that a reminder has come to you? And you deny it?' Remembrance — at intervals, repeatedly, actively. The Quran tells the same story from different angles in different surahs — spaced repetition. And not just hearing — you're told to reflect yourself — active recall. Allah uses both in the Quran."</div>`,
  senior:{
    title:"দুটো টুল — আজই শুরু করো",
    body:`<p><strong>Spaced Repetition:</strong> Anki (ফ্রি) ইনস্টল করো। প্রতিটা নতুন কনসেপ্ট = একটা card। অ্যালগরিদম তোমার ভুলে যাওয়ার রেখা মাপে।</p><p><strong>Active Recall:</strong> প্রতিটা পড়ার পর — বই বন্ধ করো। খালি পাতায় যা মনে আছে লেখো। যা মিস করো — সে তোমার গ্যাপ।</p><p>এই দুটো ছাড়া দ্রুত শেখা = দ্রুত ভুলে যাওয়া। এই দুটো সহ = দ্রুত শেখা + স্থায়ী।</p>`
  }
});

// ══ DOOR 8: METACOGNITION ══
doors.push({
  num:8, icon:"🧠", color:"#c4b5fd", name:"মনের প্রহরীর চূড়া",
  subtitle:"The Mind Watcher's Peak", tech:"Metacognition",
  spirit:"মুরাকাবা — নিজেকে দেখা",
  secret:"সবচেয়ে গভীর দক্ষতা — নিজেকে প্রশ্ন করো: আমি কি সত্যিই শিখেছি? এই প্রশ্নটি করার ক্ষমতাই মেটাকগনিশন — চিন্তা সম্পর্কে চিন্তা করা। প্রহরী যে প্রহরীকে দেখে।",
  recall:{
    q:"প্রহরী কেন নিজেকেও পাহারা দেন?",
    qen:"Why does the watchman watch himself?",
    a:"কারণ যে নিজেকে দেখে না, সে নিজের ভুল ধরতে পারে না। মেটাকগনিশন — চিন্তা সম্পর্কে চিন্তা। নিজেকে প্রশ্ন করো — আমি কি সত্যিই শিখেছি? এই প্রশ্নটাই সবচেয়ে গভীর। যে এটা করতে পারে, সে নিজের শিক্ষার নিয়ন্ত্রক।",
    aen:"Because one who doesn't watch himself can't catch his own errors. Metacognition — thinking about thinking. 'Have I truly learned?' That question is the deepest. One who can do this controls their own learning."
  },
  story:`
<p class="scene-setting">অষ্টম আসন। শেষ আসন। পাহাড়ের সবচেয়ে উঁচু চূড়া। নিচে পুরো উপত্যকা দৃশ্যমান — বাতিঘর, তিন স্তম্ভ, হ্রদ, কর্মশালা, সেতু, কুমারের ঘর, জোয়ারের পাথর। মনের প্রহরী খিজির দাঁড়িয়ে আছেন — সবচেয়ে প্রাচীন, দাড়ি সাদা, চোখ কিন্তু তীক্ষ্ণ। তিনি উপত্যকা দেখছেন না। তিনি নিজের প্রতিফলন দেখছেন পাশের পুকুরে।</p>
<p class="scene-setting en">The eighth seat. The last seat. The mountain's highest peak. Below: the entire valley — lighthouse, three pillars, lake, workshop, bridge, potter's hut, tide rock. Mind watcher Khidr stands — most ancient, white beard, yet sharp eyes. He's not looking at the valley. He's looking at his own reflection in a pool beside.</p>

<div class="dialogue">জোয়ার পর্যবেক্ষক বলেছিলেন — বিরতিতে ফিরে আসো। কিন্তু আমি বলি — ফিরে আসার পরে নিজেকে জিজ্ঞেস করো — "আমি কি সত্যিই শিখেছি?" এটাই মেটাকগনিশন — সবচেয়ে গভীর স্তর। প্রহরী যে প্রহরীকে দেখে। চিন্তা সম্পর্কে চিন্তা করা।</div>
<div class="dialogue en">"The tide watcher said — return at intervals. But I say — after returning, ask yourself — 'Have I truly learned?' This is metacognition — the deepest layer. A watchman who watches the watchman. Thinking about thinking."</div>

<div class="dialogue">সাতজন প্রবীণ পেরিয়েছ। বাতিকর বলেছিলেন — মনোযোগ হলো মুদ্রা। মাইলফলক রক্ষক বলেছিলেন — তিন স্তরের যাত্রা। বরফ-ডুবুরি বলেছিলেন — বিভ্রম ভাঙো। আয়না-কারিগর বলেছিলেন — ফিডব্যাক নাও। সেতু নির্মাতা বলেছিলেন — জ্ঞান × কর্ম। কুমার বলেছিলেন — আনলেয়ার্ন, লার্ন, রিলেয়ার্ন। জোয়ার পর্যবেক্ষক বলেছিলেন — বিরতিতে ফিরে এসো, সক্রিয়ভাবে মনে করো। কিন্তু এই সবগুলোর উপরে — একটা দক্ষতা যা সবকিছু নিয়ন্ত্রণ করে — মেটাকগনিশন। নিজের চিন্তা সম্পর্কে সচেতন থাকা। "আমি কি সত্যিই শিখছি, নাকি শিখেছি বলে মনে করছি?"</div>
<div class="dialogue en">"You've passed seven elders. The lighthouse keeper said — attention is currency. The milestone guardian said — three levels of journey. The ice diver said — break the illusion. The mirror-maker said — get feedback. The bridge builder said — knowledge × action. The potter said — unlearn, learn, relearn. The tide watcher said — return at intervals, recall actively. But above all these — one skill that controls everything — metacognition. Awareness of your own thinking. 'Am I truly learning, or just believing I am?'"</div>

<div class="callout info"><span class="co-icon">🧠</span><div><strong>Metacognition</strong> = "চিন্তা সম্পর্কে চিন্তা" = "নিজের জ্ঞান সম্পর্কে সচেতন থাকা" — সব দক্ষতার উপরের master skill।</div></div>
<table class="kv-table"><tr><th>পর্যায়</th><th>প্রশ্ন</th></tr>
<tr><td class="hl">Planning</td><td>"আমি কী শিখতে যাচ্ছি? কেন?" — শেখার আগে লক্ষ্য স্পষ্ট</td></tr>
<tr><td class="hl">Monitoring</td><td>"আমি কি বুঝছি? কোথায় আটকাচ্ছি?" — শেখার সময় নিজেকে track</td></tr>
<tr><td class="hl">Evaluation</td><td>"আমি কি সত্যিই শিখেছি? কী মিস করেছি?" — শেখার পর যাচাই</td></tr></table>
<div class="callout tip"><span class="co-icon">🔁</span><div><strong>The cycle:</strong> Plan → Learn → Monitor → Adjust → Evaluate → Re-plan → deeper learning।</div></div>
<div class="callout warn"><span class="co-icon">🐢</span><div><strong>"দ্রুত"-এর অন্ধকার দিক:</strong> কিছু জিনিস ধীরেই শিখতে হয় — গভীর গাণিতিক অন্তর্দৃষ্টি, দার্শনিক চিন্তন, সৃজনশীল দক্ষতা। সব দ্রুত শেখা যায় না; জোর করলে পৃষ্ঠতলীয় জ্ঞান হয়।</div></div>

<div class="verse">"নিশ্চয় আসমান ও জমিনের সৃষ্টিতে, রাত ও দিনের পরিবর্তনে, জ্ঞানীদের জন্য নিদর্শন রয়েছে।"<br>— কুরআন ৩:১৯০<br><br>মেটাকগনিশন হলো সেই দৃষ্টি — যা নিজের চিন্তাকে দেখে, নিজের শেখাকে যাচাই করে, নিজের জ্ঞানের সীমা চেনে। যে এটা পেয়েছে, সে শিক্ষার স্রষ্টা — শিক্ষার্থী নয়।</div>

<div class="secret-box"><div class="label">অষ্টম আসন — রহস্য</div><div class="text">🧠 নিজের চিন্তা সম্পর্কে চিন্তা করো।<br><small>প্রতিটা শেখার সময় — "আমি কি সত্যিই শিখছি?" এই প্রশ্নটাই সবচেয়ে গভীর দক্ষতা। মুরাকাবা — নিজেকে দেখা।</small></div></div>`
});
