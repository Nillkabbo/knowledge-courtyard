// ════════════════════════════════════════
// জ্ঞানের জাল — DOORS 1-5
// Knowledge Web: Silos → Insight Forge
// Cross-references all 25+ books
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: SILOS KILL ══
doors.push({
  num:1, icon:"🧩", color:"#06b6d4", name:"বিচ্ছিন্ন দ্বীপের কক্ষ",
  subtitle:"The Island City", tech:"Why Isolated Knowledge Is Fragile",
  spirit:"আয়ত — নিদর্শন, প্রতীকি সংযোগ",
  secret:"বিচ্ছিন্ন জ্ঞান = ভাঙা পাজলের টুকরো। সুন্দর কিন্তু অকেজো। Munger বলেন — এক মডেলে আটকে থাকা = এক হাতুড়ি দিয়ে সব সমস্যায়। সংযুক্ত জ্ঞান = পাজল বসানো। প্রতিটা টুকরো অন্যের সাথে যুক্ত। আয়ত — কুরআনে আল্লাহ বলেন, প্রতিটা জিনিসে নিদর্শন আছে। নিদর্শন আলাদা নয় — সংযুক্ত। সংযোগ না দেখলে নিদর্শন অর্থহীন।",
  recall:{
    q:"বিচ্ছিন্ন জ্ঞান কেন ভঙ্গুর?",
    qen:"Why is isolated knowledge fragile?",
    a:"কারণ বিচ্ছিন্ন জ্ঞান অন্য জ্ঞানের সাথে সংযুক্ত নয়। Munger: এক মডেলে আটকে = এক হাতুড়ি। সংযুক্ত জ্ঞান = পাজল। আয়ত — নিদর্শন সংযুক্ত।",
    aen:"Because isolated knowledge isn't connected to other knowledge. Munger: stuck in one model = one hammer. Connected knowledge = puzzle. Ayat — signs are connected."
  },
  story:`<p class="scene-setting">স্থপতি ইদ্রিস তোমাকে একটা শহরে নিয়ে গেলেন। কিন্তু অদ্ভুত শহর — কোনো রাস্তা নেই। প্রতিটা বাড়ি একটা দ্বীপের মতো — চারদিকে পরিখা। প্রতিটা বাড়িতে একটা করে গুণ: একটা বাড়িতে শুধু পাথর, আরেকটাতে শুধু কাঠ, আরেকটাতে শুধু লোহা। প্রচুর সম্পদ — কিন্তু কেউ কিছু বানাতে পারে না। কারণ কোনো রাস্তা নেই। সম্পদ বিচ্ছিন্ন। "এটাই তোমার মস্তিষ্ক," ইদ্রিস বললেন।</p>
<p class="scene-setting en">Architect Idris took you to a city. But a strange city — no roads. Each house is an island — surrounded by a moat. Each house has one resource: one has only stone, another only wood, another only iron. Abundant resources — but nothing can be built. Because no roads connect them. Resources are isolated. "This is your brain," Idris said.</p>

<div class="dialogue">তুমি ২৭টা বই পড়েছ। ২৭টা বাড়ি। কিন্তু কোনো রাস্তা নেই। RAG শিখেছ (Book ১০), কিন্তু human psychology-এর (Book ২৪) সাথে সংযুক্ত করোনি। Prompt engineering (Book ৭) শিখেছ, কিন্তু research paper reading-এর (Book ২৭) সাথে যুক্ত করোনি। System design (Book ৪) জানো, কিন্তু fine-tuning-এর (Book ১১) সাথে সংযুক্ত করোনি। প্রতিটা বই একটা দ্বীপ। সম্পদ আছে — কিন্তু সেতু নেই।</div>
<div class="dialogue en">"You've read 27 books. 27 houses. But no roads. You learned RAG (Book 10), but didn't connect it to human psychology (Book 24). You learned prompt engineering (Book 7), but didn't link it to research paper reading (Book 27). You know system design (Book 4), but haven't connected it to fine-tuning (Book 11). Each book is an island. Resources exist — but no bridges."</div>

<div class="callout warn"><span class="co-icon">🧩</span><div><strong>Silo সমস্যা:</strong> বিচ্ছিন্ন জ্ঞান = আলাদা বিন্দু, মাঝে কোনো রেখা নেই। যখন সমস্যায় RAG + Psychology একসাথে লাগে, silo-মন শুধু বিন্দু দেখে, পথ দেখে না। সংযুক্ত জ্ঞানে বিন্দুর মাঝে রেখা = <em>understanding</em>; যত বেশি রেখা, তত গভীর বোঝা।</div></div>
<div class="callout info"><span class="co-icon">🔨</span><div><strong>Munger-এর "man with a hammer":</strong> "যার কাছে শুধু হাতুড়ি, তার কাছে সব সমস্যা পেরেক।" শুধু deep learning জানলে সব সমস্যা = neural net; শুধু system design জানলে সব = architecture। সমাধান — বহু ক্ষেত্রের মডেল নিয়ে <strong>latticework</strong> (দ্বার ৩)।</div></div>
<div class="callout tip"><span class="co-icon">🕸️</span><div><strong>তোমার ২৭টা বই এখনো যথেষ্ট নয় (yet):</strong> বিচ্ছিন্ন থাকলে সেগুলো শুধু <em>information</em> দিয়েছে, understanding বা সৃষ্টির ক্ষমতা নয়। সংযুক্ত করলে একই ২৭টা বই হয়ে ওঠে <strong>knowledge web</strong> — যেকোনো ডোমেইন combine করে নতুন সমাধান তৈরি করা যায়। (Hawkins 2004: বুদ্ধিমত্তা = সংযোগের ঘনত্ব; Doidge 2007: প্রতিটা নতুন neuron-সংযোগই শেখা।)</div></div>
<table class="kv-table"><tr><th>পরের দরজাগুলো</th><th>সংযোগের হাতিয়ার</th></tr>
<tr><td class="hl">দ্বার ২</td><td>Analogical reasoning (Gentner) — "X যেমন Y"</td></tr>
<tr><td class="hl">দ্বার ৩</td><td>Mental models latticework (Munger)</td></tr>
<tr><td class="hl">দ্বার ৪</td><td>Gap finding — "কোন সংযোগ missing?"</td></tr>
<tr><td class="hl">দ্বার ৫</td><td>Insight (Kounios & Beeman) — দূরবর্তী ধারণা জোড়া লাগা</td></tr></table>

<div class="dialogue">আয়ত — sign, symbol, evidence। কুরআনে আল্লাহ বলেন — "আমি প্রতিটি জিনিসে নিদর্শন রেখেছি যারা চিন্তা করে।" নিদর্শন আলাদা নয় — সংযুক্ত। একটা পাতা একটা নিদর্শন। কিন্তু পাতা + ফুল + ফল + শিকড় = একটা গাছ। গাছ + মাটি + পানি + সূর্য = একটা বাস্তুতন্ত্র। প্রতিটা স্তর আগের স্তরের সাথে সংযুক্ত। আলাদা নিদর্শন দেখা = সংযোগ না দেখা। সংযুক্ত নিদর্শন দেখা = আয়ত বোঝা। এটাই জ্ঞানের জাল।</div>
<div class="dialogue en">"Ayat — sign, symbol, evidence. Allah says — 'In everything We have placed signs for those who reflect.' Signs aren't separate — they're connected. A leaf is a sign. But leaf + flower + fruit + root = a tree. Tree + soil + water + sun = an ecosystem. Each layer connects to the previous. Seeing signs separately = not seeing connections. Seeing connected signs = understanding ayat. This is the knowledge web."</div>

<div class="svg-diagram"><svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Idea network diagram">
  <defs>
    <radialGradient id="d1node" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#67e8f9"/><stop offset="100%" stop-color="#06b6d4"/>
    </radialGradient>
  </defs>
  <line x1="120" y1="70" x2="290" y2="125" stroke="#3dd6c4" stroke-width="1.5" opacity="0.55"/>
  <line x1="290" y1="125" x2="450" y2="60" stroke="#3dd6c4" stroke-width="1.5" opacity="0.55"/>
  <line x1="290" y1="125" x2="460" y2="190" stroke="#3dd6c4" stroke-width="1.5" opacity="0.55"/>
  <line x1="120" y1="70" x2="150" y2="200" stroke="#3dd6c4" stroke-width="1.5" opacity="0.35" stroke-dasharray="4 4"/>
  <line x1="450" y1="60" x2="460" y2="190" stroke="#3dd6c4" stroke-width="1.5" opacity="0.35" stroke-dasharray="4 4"/>
  <circle cx="120" cy="70" r="22" fill="url(#d1node)"/>
  <circle cx="290" cy="125" r="30" fill="url(#d1node)"/>
  <circle cx="450" cy="60" r="22" fill="url(#d1node)"/>
  <circle cx="460" cy="190" r="20" fill="url(#d1node)"/>
  <circle cx="150" cy="200" r="16" fill="url(#d1node)" opacity="0.6"/>
  <text x="120" y="76" text-anchor="middle" font-size="11" fill="#0a1a1f" font-weight="700">RAG</text>
  <text x="290" y="131" text-anchor="middle" font-size="12" fill="#0a1a1f" font-weight="700">জ্ঞান</text>
  <text x="450" y="66" text-anchor="middle" font-size="11" fill="#0a1a1f" font-weight="700">Psy</text>
  <text x="460" y="196" text-anchor="middle" font-size="10" fill="#0a1a1f" font-weight="700">Sys</text>
  <text x="150" y="206" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">?</text>
  <text x="290" y="240" text-anchor="middle" font-size="11" fill="#fbbf24" font-weight="700">নোড = জ্ঞান · রেখা = সংযোগ</text>
</svg></div><div class="svg-caption">ধারণার জাল — বিচ্ছিন্ন বিন্দু থেকে সংযুক্ত নেটওয়ার্ক</div>

<div class="callout tip"><span class="co-icon">📋</span><div>— Idea Network Audit —
  silo_mind  = [RAG, Psychology, Systems]   # আলাদা বিন্দু
  web_mind   = silo_mind + edges(RAG→Psy, Psy→Sys, RAG→Sys)
  # যত বেশি edge, তত গভীর বোঝা
  def connect(a, b): return "কীভাবে " + a + " ও " + b + " সম্পর্কিত?"
  for pair in pairs(books): ask connect(pair)  # missing edge = gap</div></div>`,
  senior:{
    title:"তোমার বিচ্ছিন্ন দ্বীপগুলো খুঁজে নাও — Find Your Disconnected Islands",
    body:`<p><strong>এখনই তোমার জ্ঞান যাচাই করো — Audit your knowledge right now:</strong></p><p><em>তোমার ৫টা বই থেকে ৫টা জিনিস লেখো যা তুমি শিখেছ। প্রতিটা জোড়ার জন্য জিজ্ঞেস করো — "X কীভাবে Y-এর সাথে সংযুক্ত?" যদি সংযোগ খুঁজে না পাও — সেটাই gap।</em></p><p>১. List 5 things you learned from different books (e.g., Zettelkasten from Book 26, learned helplessness from Book 24, first principles from Book 23).</p><p>২. For EACH pair, ask: "How does X connect to Y?"</p><p>৩. If you can't find a connection — that's a missing bridge. You have two islands with no road.</p><p><strong>Example connections you should be able to make:</strong></p><p>- Book 24 (helplessness) + Book 26 (Feynman) = "If you have learned helplessness about math, Feynman technique can break it because it forces you to explain simply — revealing that the gap is small."</p><p>- Book 10 (RAG) + Book 23 (systems thinking) = "RAG is a system with feedback loops — the retrieval quality affects generation quality, which affects user trust, which affects usage."</p><p>- Book 5 (spaced repetition) + Book 27 (reading papers) = "Use spaced repetition for key paper findings — review your paper notes at 1 day, 7 days, 30 days."</p><p><strong>If you can make 10+ such connections — you're building a web. If fewer than 5 — you're in silos.</strong></p>`
  }
});

// ══ DOOR 2: ANALOGICAL REASONING ══
doors.push({
  num:2, icon:"🌉", color:"#67e8f9", name:"সেতু নির্মাতার কক্ষ",
  subtitle:"The Bridge Builder", tech:"Analogical Reasoning (Gentner, 1983; Holyoak)",
  spirit:"সিলসিলা — সংযোগ, শৃঙ্খল",
  secret:"Gentner (১৯৮৩) দেখালেন — মানুষ কীভাবে নতুন ধারণা বোঝে? পুরোনো ধারণার সাথে মিলিয়ে। এটাই structure-mapping theory। মস্তিষ্ক বলে — 'X যেমন, Y-ও তেমন।' কিন্তু কোথায় মিল, কোথায় অমিল? সেটাই analogy-এর শিল্প। Hofstadter বলেন — analogy IS cognition। সিলসিলা — সংযোগের সেতু।",
  recall:{
    q:"Gentner-র structure-mapping theory কী?",
    qen:"What is Gentner's structure-mapping theory?",
    a:"মানুষ নতুন ধারণা বোঝে পুরোনোর সাথে মিলিয়ে। X যেমন, Y-ও তেমন। কোথায় মিল, কোথায় অমিল — সেটাই analogy। Gentner (১৯৮৩)। সিলসিলা — সেতু।",
    aen:"Humans understand new concepts by mapping them to known ones. X is like Y. What maps, what doesn't — that's analogy. Gentner (1983). Silsila — bridge."
  },
  story:`<p class="scene-setting">কারিগর সাবরিনা তোমাকে একটা নতুন ধারণা বোঝাতে চান — কিন্তু তুমি বুঝতে পারছ না। তিনি থামলেন। "ঠামো," বললেন। "তুমি Zettelkasten জানো?" (Book ২৬)। হ্যাঁ। "Zettelkasten হলো একটা গ্রন্থাগার যেখানে প্রতিটা বই একে অপরের সাথে সংযুক্ত।" হ্যাঁ। "একটা neural network-ও তেমনি — প্রতিটা neuron একে অপরের সাথে সংযুক্ত। গ্রন্থাগারের মতো।" হ্যাঁ! বুঝলে! "এটাই analogy," সাবরিনা বললেন। "Zettelkasten = bridge। তুমি যা জানো তার সাথে নতুন ধারণা সংযুক্ত করো।"</p>
<p class="scene-setting en">Craftswoman Sabrina wants to explain a new concept — but you don't understand. She stopped. "Wait," she said. "Do you know Zettelkasten?" (Book 26). Yes. "Zettelkasten is a library where every book connects to every other." Yes. "A neural network is the same — every neuron connects to every other. Like a library." Yes! You understood! "That's analogy," Sabrina said. "Zettelkasten = bridge. You connect the new concept to what you already know."</p>

<div class="dialogue">সিলো বলেছিলেন — বিচ্ছিন্ন জ্ঞান ভঙ্গুর। কিন্তু আমি বলি — সংযুক্ত করার প্রথম সরঞ্জাম হলো analogy। তুমি যা জানো, তার সাথে নতুনকে মিলিয়ে। Gentner (১৯৮৩) এর নাম — structure-mapping theory। মস্তিষ্ক বলে — 'এটা ওটার মতো।' কিন্তু ভালো analogy শুধু মিল নয় — মিল এবং অমিল দেখায়। Zettelkasten এবং neural network অনেকটা এক — কিন্তু Zettelkasten-এ backpropagation নেই। সেখানেই অমিল।</div>
<div class="dialogue en">"Silos said — isolated knowledge is fragile. But I say — the first tool of connection is analogy. You map the new to the known. Gentner (1983) calls it structure-mapping theory. The brain says — 'this is like that.' But a good analogy doesn't just show similarity — it shows where the similarity ENDS. Zettelkasten and neural networks are alike — but Zettelkasten has no backpropagation. That's where they differ."</div>

<div class="callout info"><span class="co-icon">🌉</span><div><strong>Gentner-এর structure-mapping (1983):</strong> মানুষ নতুন ধারণা বোঝে পরিচিত ডোমেইন (source) থেকে গঠন (target)-এ ম্যাপ করে। "পরমাণু সৌরজগতের মতো" — sun↔nucleus, planet↔electron; চেহারা নয়, <em>সম্পর্ক</em> ম্যাপ হয়।</div></div>
<table class="kv-table"><tr><th>✅ ভালো analogy</th><th>❌ খারাপ analogy</th></tr>
<tr><td>Relational match (একই গঠন)</td><td>শুধু surface match (দেখতে এক, আসলে নয়)</td></tr>
<tr><td>Predictive power (নতুন কিছু অনুমান করা যায়)</td><td>over-extended (যেখানে কাজ করে না সেখানেও টানা)</td></tr>
<tr><td>Known limits (কোথায় ভাঙে জানা)</td><td>misleading (গুরুত্বপূর্ণ পার্থক্য লুকায়)</td></tr></table>
<div class="callout tip"><span class="co-icon">🧠</span><div><strong>Hofstadter:</strong> "Analogy IS the core of cognition" — প্রতিটা চিন্তাই একটা analogy ("এই পরিস্থিতি ওটার মতো")। categorization = analogy ("এটা কি chair?" = "আগে দেখা chair-এর মতো?")। <strong>Holyoak (Gick & Holyoak, 1980):</strong> Duncker-এর radiation problem — যারা "বিভক্ত সেনা দিয়ে দুর্গ আক্রমণ"-এর analogy দেখেছিল, তারা ৩x বেশি সমাধান করত।</div></div>
<table class="kv-table"><tr><th>Source (জানা)</th><th>Target (নতুন)</th></tr>
<tr><td class="hl">Immune system (bio)</td><td>Computer security — adaptive firewall, threat DB</td></tr>
<tr><td class="hl">Evolution (bio)</td><td>Code refactoring — mutation+selection, fitness</td></tr>
<tr><td class="hl">Garden (Book 5)</td><td>ML training — data prep, architecture, tuning, pruning</td></tr>
<tr><td class="hl">Learned helplessness (Book 24)</td><td>Imposter syndrome — "I can't"; cure: small wins</td></tr>
<tr><td class="hl">RAG retrieval (Book 12)</td><td>Human memory — associative recall, working memory, false memory</td></tr></table>
<div class="callout tip"><span class="co-icon">🔁</span><div><strong>দৈনিক analogy exercise:</strong> নতুন কিছু শিখলে — ① "এটা কীসের মতো?" ② কী ম্যাপ হয় (গঠন)? ③ কী ম্যাপ হয় না (সীমা)? ④ analogy থেকে আর কী সত্য হতে পারে? ⑤ test করো। (Einstein: "আলো train-এর মতো হলে? gravity trampoline-এর মতো হলে?" Polya 1945: "এই সমস্যা কি sorting/search/graph-এর মতো?")</div></div>

<div class="dialogue">সিলসিলা — chain, connection, linkage। কুরআনে আল্লাহ বলেন — "তোমরা সবাই আল্লাহর রশি দৃঢ়ভাবে ধরো, একসাথে"। একসাথে = সিলসিলা। analogy-ও সিলসিলা — এক জ্ঞানের সাথে আরেকটার সংযোগ। সংযোগের মাধ্যমে নতুন ধারণা বোঝা যায়। Gentner দেখালেন — মানুষের মস্তিষ্ক এভাবেই কাজ করে। পুরোনোর সাথে নতুনকে মিলিয়ে। যে সিলসিলা বানায়, সে বোঝে। যে বিচ্ছিন্ন রাখে, সে ভুলে যায়।</div>
<div class="dialogue en">"Silsila — chain, connection. Allah says — 'Hold fast to the rope of Allah, all together.' Together = silsila. Analogy too — connecting one knowledge to another. Through connection, new concepts become understandable. Gentner showed — this is how the brain works. Mapping the new to the known. One who builds silsila, understands. One who isolates, forgets."</div>

<div class="verse">"তোমরা সবাই আল্লাহর রশি দৃঢ়ভাবে ধরো, একসাথে।"<br>— কুরআন ৩:১০৩</div>

<div class="svg-diagram"><svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Analogy structure mapping">
  <rect x="40" y="50" width="200" height="150" rx="10" fill="rgba(6,182,212,0.10)" stroke="#06b6d4" stroke-width="1.5"/>
  <rect x="340" y="50" width="200" height="150" rx="10" fill="rgba(103,232,249,0.10)" stroke="#67e8f9" stroke-width="1.5"/>
  <text x="140" y="42" text-anchor="middle" font-size="13" fill="#fbbf24" font-weight="700">Zettelkasten (জানা)</text>
  <text x="440" y="42" text-anchor="middle" font-size="13" fill="#fbbf24" font-weight="700">Neural Net (নতুন)</text>
  <circle cx="100" cy="90" r="14" fill="#06b6d4"/><text x="100" y="95" text-anchor="middle" font-size="9" fill="#0a1a1f">নোট</text>
  <circle cx="180" cy="90" r="14" fill="#06b6d4"/><text x="180" y="95" text-anchor="middle" font-size="9" fill="#0a1a1f">নোট</text>
  <circle cx="140" cy="160" r="14" fill="#06b6d4"/><text x="140" y="165" text-anchor="middle" font-size="9" fill="#0a1a1f">নোট</text>
  <line x1="100" y1="90" x2="180" y2="90" stroke="#3dd6c4" stroke-width="1.5"/>
  <line x1="100" y1="90" x2="140" y2="160" stroke="#3dd6c4" stroke-width="1.5"/>
  <line x1="180" y1="90" x2="140" y2="160" stroke="#3dd6c4" stroke-width="1.5"/>
  <circle cx="400" cy="90" r="14" fill="#67e8f9"/><text x="400" y="95" text-anchor="middle" font-size="9" fill="#0a1a1f">n</text>
  <circle cx="480" cy="90" r="14" fill="#67e8f9"/><text x="480" y="95" text-anchor="middle" font-size="9" fill="#0a1a1f">n</text>
  <circle cx="440" cy="160" r="14" fill="#67e8f9"/><text x="440" y="165" text-anchor="middle" font-size="9" fill="#0a1a1f">n</text>
  <line x1="400" y1="90" x2="480" y2="90" stroke="#3dd6c4" stroke-width="1.5"/>
  <line x1="400" y1="90" x2="440" y2="160" stroke="#3dd6c4" stroke-width="1.5"/>
  <line x1="480" y1="90" x2="440" y2="160" stroke="#3dd6c4" stroke-width="1.5"/>
  <path d="M 240 90 Q 290 60 340 90" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5 3"/>
  <path d="M 240 160 Q 290 200 340 160" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="290" y="135" text-anchor="middle" font-size="11" fill="#fbbf24" font-weight="700">ম্যাপ</text>
  <text x="290" y="232" text-anchor="middle" font-size="10" fill="#3dd6c4">↔ গঠন মেলে · ⚠ backprop নেই = সীমা</text>
</svg></div><div class="svg-caption">উপমা — Gentner-এর structure-mapping: জানা → নতুন</div>

<div class="callout tip"><span class="co-icon">📋</span><div>— Analogy Builder —
  known = "Zettelkasten"      # nodes + links
  new   = "Neural Network"    # nodes + links
  def analogy(known, new):
      maps    = match_structure(known, new)  # কোথায় মিল
      breaks  = find_limits(known, new)       # কোথায় অমিল
      return maps, breaks
  # Zettelkasten ↔ NeuralNet: দুটোই node+edge জাল
  # ⚠ সীমা: Zettelkasten-এ backprop নেই</div></div>`,
  senior:{
    title:"প্রতিদিন analogy বানাও — Build Analogies Daily",
    body:`<p><strong>প্রতিটি নতুন ধারণার জন্য এটা করো — For every new concept:</strong></p><p><em>১. জিজ্ঞেস করো — "এটা কীর মতো?" ২. কাঠামো মিলিয়ে দেখো। ৩. সীমা খুঁজে বের করো — কোথায় analogy ভাঙে।</em></p><p>১. <strong>"What is this LIKE?"</strong> — Find a known concept from a DIFFERENT field that has similar structure.</p><p>২. <strong>Map the structure</strong> — What parts correspond? What relationships correspond?</p><p>৩. <strong>Find the LIMITS</strong> — Where does the analogy break? This is just as important as where it works.</p><p><strong>Examples across your library:</strong></p><p>- "RAG hallucination (Book 10) is like false memory in psychology (Book 24) — both fill gaps with plausible but wrong information."</p><p>- "Zettelkasten (Book 26) is like a neural network — nodes and connections. But Zettelkasten has no learning algorithm."</p><p>- "Growth mindset (Book 24) is like fine-tuning (Book 11) — both update weights based on feedback."</p><p>- "Peer review (Book 27) is like adversarial training (Book 13) — both improve through challenge."</p><p><strong>5+ analogies per day = your brain becomes a connection machine.</strong></p>`
  }
});

// ══ DOOR 3: MENTAL MODELS LATTICEWORK ══
doors.push({
  num:3, icon:"🕸️", color:"#06b6d4", name:"জাল নির্মাতার কক্ষ",
  subtitle:"The Web Weaver", tech:"Mental Models Latticework (Munger)",
  spirit:"হিকমাহ — প্রজ্ঞা, প্রয়োগকৃত জ্ঞান",
  secret:"Munger বলেন — প্রতিটা ক্ষেত্র থেকে বড় ধারণা বের করো। সেগুলো একসাথে বুনো। এটাই latticework। physics থেকে compound interest, biology থেকে evolution, psychology থেকে bias। প্রতিটা মডেল একটা সুতো। সুতোগুলো একসাথে = জাল। সমস্যা এলে জালের একাধিক মডেল প্রয়োগ করো। হিকমাহ — প্রয়োগকৃত জ্ঞান।",
  recall:{
    q:"Munger-এর latticework কীভাবে কাজ করে?",
    qen:"How does Munger's latticework work?",
    a:"প্রতিটা ক্ষেত্রের বড় ধারণা বের করো। একসাথে বুনো = latticework। compound interest, evolution, bias — একসাথে। সমস্যা এলে একাধিক মডেল প্রয়োগ। হিকমাহ।",
    aen:"Extract big ideas from each field. Weave them together = latticework. Compound interest, evolution, bias — together. Apply multiple models to problems. Hikmah."
  },
  story:`<p class="scene-setting">কারিগর তালহা একটা বিশাল তাঁতের সামনে দাঁড়িয়ে আছেন। শত শত রঙিন সুতো — প্রতিটা একটা মডেল। লাল সুতো = physics। সবুজ = biology। নীল = psychology। হলুদ = economics। কালো = math। তিনি সুতোগুলো একসাথে বুনছেন — একটা বিশাল জাল। "প্রতিটা সুতো একটা ক্ষেত্রের বড় ধারণা," তিনি বললেন। "compound interest। critical mass। opportunity cost। cognitive bias। natural selection। entropy। regression to the mean। এগুলো আলাদা নয় — একসাথে বুনলে একটা জাল তৈরি হয়। যে জাল বানায়, সে যেকোনো সমস্যা দেখে বুঝতে পারে — কোন মডেল প্রয়োগ করতে হবে।"</p>
<p class="scene-setting en">Craftsman Talha stands before a vast loom. Hundreds of colored threads — each a model. Red = physics. Green = biology. Blue = psychology. Yellow = economics. Black = math. He weaves them together — a vast web. "Each thread is a field's big idea," he said. "Compound interest. Critical mass. Opportunity cost. Cognitive bias. Natural selection. Entropy. Regression to the mean. These aren't separate — woven together they form a web. One who weaves, sees any problem and knows which model to apply."</p>

<div class="dialogue">analogy বলেছিলেন — এক জ্ঞানের সাথে আরেকটার সংযোগ। কিন্তু আমি বলি — সংযোগ শুধু জোড়ায় নয়। শত শত মডেল একসাথে বুনো। Munger-এর latticework। Munger বলেন — 'প্রতিটা ক্ষেত্রের বড় ধারণা শেখো। একসাথে বুনো। সমস্যা এলে একাধিক মডেল প্রয়োগ করো।' Munger (২০০৭, "Poor Charlie's Almanack")-এ বলেছেন — ~১০০টা মডেল যথেষ্ট। physics, math, biology, psychology, economics — প্রতিটার বড় ধারণা।</div>
<div class="dialogue en">"Analogy said — connecting one knowledge to another. But I say — connections aren't just pairs. Weave hundreds of models together. Munger's latticework. He says — 'learn the big ideas from each field. Weave them. When a problem comes, apply multiple models.' Munger (2007, Poor Charlie's Almanack) says ~100 models suffice. Physics, math, biology, psychology, economics — the big ideas from each."</div>

<div class="callout info"><span class="co-icon">🕸️</span><div><strong>Munger-এর latticework:</strong> "মাথায় মডেল থাকতে হবে, আর নিজের অভিজ্ঞতা সেই মডেলের জালে সাজাতে হবে।" ১ মডেল = এক হাতুড়ি; ৫ = মোটামুটি; ২০ = ভালো চিন্তক; ~১০০ = জ্ঞানী। "বড় শাস্ত্রের বড় idea জানো ও নিয়মিত ব্যবহার করো — সবগুলো, কয়েকটা নয়।"</div></div>
<table class="kv-table"><tr><th>শাস্ত্র</th><th>মূল mental model</th></tr>
<tr><td class="hl">Physics</td><td>critical mass, inertia, entropy, feedback loop, tipping point</td></tr>
<tr><td class="hl">Biology</td><td>evolution, adaptation, symbiosis, homeostasis</td></tr>
<tr><td class="hl">Psychology</td><td>cognitive bias, social proof, anchoring, loss aversion (Book 24)</td></tr>
<tr><td class="hl">Economics</td><td>opportunity cost, compound interest, sunk cost, externality</td></tr>
<tr><td class="hl">Math</td><td>probability, regression to mean, power laws, sampling</td></tr>
<tr><td class="hl">Engineering/CS</td><td>bottleneck (Book 4), redundancy, abstraction, caching, recursion</td></tr></table>
<div class="callout tip"><span class="co-icon">🎯</span><div><strong>একাধিক মডেল একসাথে:</strong> সমস্যায় এক মডেল নয়, ৩-৫টা একসাথে প্রয়োগ করো। "PhD করব?" → opportunity cost + compound interest + sunk cost (MSIS-এ বিনিয়োগ করেছি বলে নয়!) + growth mindset + regression to mean + social proof + entropy। কোনো একটা মডেল উত্তর দেয় না — সিদ্ধান্ত তাদের ছেদবিন্দু থেকে আসে।</div></div>
<div class="callout info"><span class="co-icon">🔨</span><div><strong>Latticework গড়ার উপায়:</strong> ① প্রতিটা বই থেকে ৩-৫ core model বের করো ("নীতি → উৎস → প্রয়োগ")। ② সাপ্তাহিক — ভিন্ন বইয়ের মডেলের মধ্যে link খোঁজো (growth mindset + fine-tuning = দুটোই feedback-এ weight update)। ③ দৈনিক — সিদ্ধান্তে "কোন ৩+ মডেল খাটে?" ④ মাসিক — কোন মডেল/সংযোগ সবচেয়ে কাজের, prune করো।</div></div>

<div class="svg-diagram"><svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mental models latticework network">
  <defs>
    <radialGradient id="d3node" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7dd3fc"/><stop offset="100%" stop-color="#22d3ee"/>
    </radialGradient>
    <radialGradient id="d3core" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#22c55e"/>
    </radialGradient>
  </defs>
  <line x1="120" y1="60" x2="220" y2="120" stroke="#3dd6c4" stroke-width="1.5" opacity="0.6"/>
  <line x1="220" y1="120" x2="120" y2="190" stroke="#3dd6c4" stroke-width="1.5" opacity="0.6"/>
  <line x1="120" y1="60" x2="120" y2="190" stroke="#3dd6c4" stroke-width="1.5" opacity="0.4"/>
  <line x1="220" y1="120" x2="350" y2="120" stroke="#fbbf24" stroke-width="2" opacity="0.7"/>
  <line x1="350" y1="120" x2="450" y2="60" stroke="#3dd6c4" stroke-width="1.5" opacity="0.6"/>
  <line x1="350" y1="120" x2="450" y2="190" stroke="#3dd6c4" stroke-width="1.5" opacity="0.6"/>
  <line x1="450" y1="60" x2="450" y2="190" stroke="#3dd6c4" stroke-width="1.5" opacity="0.4"/>
  <line x1="120" y1="60" x2="350" y2="120" stroke="#3dd6c4" stroke-width="1" opacity="0.3" stroke-dasharray="3 4"/>
  <line x1="120" y1="190" x2="350" y2="120" stroke="#3dd6c4" stroke-width="1" opacity="0.3" stroke-dasharray="3 4"/>
  <circle cx="120" cy="60" r="20" fill="url(#d3node)"/>
  <circle cx="220" cy="120" r="18" fill="url(#d3node)"/>
  <circle cx="120" cy="190" r="18" fill="url(#d3node)"/>
  <circle cx="350" cy="120" r="28" fill="url(#d3core)"/>
  <circle cx="450" cy="60" r="20" fill="url(#d3node)"/>
  <circle cx="450" cy="190" r="18" fill="url(#d3node)"/>
  <text x="120" y="65" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">Physics</text>
  <text x="220" y="125" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">Bio</text>
  <text x="120" y="195" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">Psych</text>
  <text x="350" y="126" text-anchor="middle" font-size="10" fill="#0a1a1f" font-weight="700">জাল</text>
  <text x="450" y="65" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">Econ</text>
  <text x="450" y="195" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">Math</text>
  <text x="290" y="240" text-anchor="middle" font-size="11" fill="#fbbf24" font-weight="700">প্রতিটা মডেল একটা সুতো · একসাথে বুনলে জাল</text>
</svg></div><div class="svg-caption">মানসিক মডেলের জাল — Munger-এর latticework: বহু ক্ষেত্রের সুতো একসাথে বোনা</div>

<div class="dialogue">হিকমাহ — wisdom, applied knowledge। কুরআনে আল্লাহ বলেন — "যাকে হিকমাহ দেওয়া হয়েছে, তাকে প্রচুর কল্যাণ দেওয়া হয়েছে"। হিকমাহ শুধু জ্ঞান নয় — প্রয়োগকৃত জ্ঞান। Munger-এর latticework-ও হিকমাহ — জ্ঞান সংগ্রহ নয়, সংযুক্ত জ্ঞান প্রয়োগ। যে একটা মডেল জানে, সে জানে। যে শতটা সংযুক্ত মডেল প্রয়োগ করে, সে হিকমাহ অর্জন করে। হিকমাহ = সংযুক্ত জ্ঞানের প্রয়োগ।</div>
<div class="dialogue en">"Hikmah — wisdom, applied knowledge. Allah says — 'Whoever is given hikmah has been given much good.' Hikmah is not just knowledge — it's APPLIED knowledge. Munger's latticework too is hikmah — not collecting knowledge, but applying connected knowledge. One who knows one model, knows. One who applies 100 connected models, attains hikmah. Hikmah = the application of connected knowledge."</div>

<div class="verse">"যাকে হিকমাহ দেওয়া হয়েছে, তাকে প্রচুর কল্যাণ দেওয়া হয়েছে।"<br>— কুরআন ২:২৬৯</div>`,
  senior:{
    title:"এই মাসে তোমার Latticework বানাও — Build Your Latticework",
    body:`<p><strong>তোমার ২৭টা বইয়ের প্রতিটি থেকে ৩-৫টা মডেল বের করো।</strong> <em>"নীতি → উৎস → প্রয়োগ" হিসেবে লেখো।</em></p><p>Extract 3-5 models from each book. Write as: "Principle → Source → Application." Write them as: "Principle → Source → Application."</p><p><strong>Example:</strong></p><p>- Book 24: "Learned helplessness is reversible through small wins" → applies to any area where you feel stuck.</p><p>- Book 5: "Spaced repetition exploits the forgetting curve" → applies to retaining ANY knowledge.</p><p>- Book 4: "A system's bottleneck determines its throughput" → applies to your career, your project, your life.</p><p><strong>Then find connections:</strong> "Book 24's learned helplessness + Book 5's spaced repetition = small daily reviews break helplessness by proving you CAN remember and learn."</p><p><strong>Goal: 50+ models extracted, 20+ connections found by end of month.</strong> This is your starter latticework.</p>`
  }
});

// ══ DOOR 4: KNOWLEDGE GAP METHODOLOGY ══
doors.push({
  num:4, icon:"🎯", color:"#67e8f9", name:"শূন্যস্থান সন্ধানী",
  subtitle:"The Gap Finder", tech:"Knowledge Gap Identification Methodology",
  spirit:"তালাশ — সন্ধান",
  secret:"সবচেয়ে বিপজ্জনক অজ্ঞতা — যা তুমি জানো না তা জানো না। Rumsfeld-এর 'unknown unknowns'। কিন্তু systematic gap finding আছে। Feynman technique (Book ২৬) একটা উপায় — ব্যাখ্যা করার চেষ্টা করো, যেখানে আটকাও সেই gap। আরেকটা — একটা মডেল নাও, প্রয়োগ করো, কোথায় ভাঙে সেটা gap। তালাশ — সচেতন সন্ধান।",
  recall:{
    q:"Knowledge gap কীভাবে খুঁজবে?",
    qen:"How to find knowledge gaps?",
    a:"Feynman technique — ব্যাখ্যা করো, যেখানে আটকাও সেই gap। মডেল প্রয়োগ — কোথায় ভাঙে সেই gap। বইয়ের দরজার মধ্যে missing সংযোগ — সেই gap। তালাশ।",
    aen:"Feynman technique — explain, where stuck is the gap. Apply a model — where it breaks is the gap. Missing connections between books — that's a gap. Talash."
  },
  story:`<p class="scene-setting">কারিগর ফারহান তোমাকে একটা বড় পর্দার সামনে দাঁড় করালেন। পর্দায় তোমার ২৭টা বইয়ের নাম — নকশার মতো সাজানো। কিন্তু কিছু জায়গায় ফাঁকা। "এই ফাঁকাগুলো কী?" তুমি জিজ্ঞেস করলে। "তোমার knowledge gap," ফারহান বললেন। "তুমি RAG জানো (Book ১০), Prompt Engineering জানো (Book ৭)। কিন্তু এগুলোর মধ্যে সংযোগ কী? সেটা তুমি জানো না। সেই gap। আর সবচেয়ে বিপজ্জনক — তুমি জানো না যে তুমি জানো না।"</p>
<p class="scene-setting en">Craftsman Farhan stood you before a large screen. Your 27 books displayed like a map. But some spots are blank. "What are these blanks?" you asked. "Your knowledge gaps," Farhan said. "You know RAG (Book 10), prompt engineering (Book 7). But what's the connection between them? You don't know. That's a gap. And most dangerous — you don't know that you don't know."</p>

<div class="dialogue">latticework বলেছিলেন — মডেল সংযুক্ত করো। কিন্তু আমি বলি — সংযোগের আগে খুঁজে বের করো কোথায় ফাঁকা। gap। জ্ঞানের কারিগর (Book ২৬, Door ৪) Feynman technique শিখিয়েছে — সহজ করে ব্যাখ্যা করো, যেখানে আটকাও সেই gap। PhD পাঠক (Book ২৭, Door ৪) gap finding শিখিয়েছে — research-এ কী missing। এখন আমি শেখাবো — একটা বইয়ের জ্ঞান আরেকটার সাথে কীভাবে সংযুক্ত করবে, এবং কোথায় gap।</div>
<div class="dialogue en">"The latticework said — connect models. But I say — before connecting, find where it's blank. The gap. The Knowledge Craftsman (Book 26, Door 4) taught the Feynman technique — explain simply, where stuck is the gap. The PhD reader (Book 27, Door 4) taught gap finding in research — what's missing. Now I'll teach — how to connect one book's knowledge to another, and where the gaps are."</div>

<table class="kv-table"><tr><th>Gap-এর ধরন</th><th>বর্ণনা ও সমাধান</th></tr>
<tr><td class="hl">১. Within-book</td><td>"বই পড়েছি, দ্বার ৬ বুঝিনি" → re-read, Feynman, Zettelkasten</td></tr>
<tr><td class="hl">২. Between-books</td><td>"A ও B জানি, সংযোগ দেখি না" → এই বই (দ্বার ২-৩)</td></tr>
<tr><td class="hl">৩. Missing-book</td><td>"আমার বইগুলো [topic X] cover করে না" → নতুন বই পড়ো</td></tr>
<tr><td class="hl">৪. Unknown-unknown</td><td>"জানি না যে জানি না" → exposure, discomfort, test</td></tr></table>
<div class="callout info"><span class="co-icon">🧪</span><div><strong>Gap খোঁজার টেস্ট:</strong> <strong>Feynman gap</strong> — সহজ করে ব্যাখ্যা করো, যেখানে আটকাও সেই gap। <strong>Connection gap</strong> — প্রতি বই-জোড়ায় "X কীভাবে Y-এর সাথে যুক্ত?"; না পারলে gap। <strong>Application gap</strong> — বইয়ের জ্ঞান বাস্তব সমস্যায় প্রয়োগ করো, যেখানে ভাঙে সেই assumption/gap ("আমি একটা system হিসেবে — আমার bottleneck কী?")।</div></div>
<table class="kv-table"><tr><th>DIKW স্তর</th><th>কী</th></tr>
<tr><td class="hl">Wisdom</td><td>সংযুক্ত জ্ঞান দিয়ে সিদ্ধান্ত (Book 23 এখানে লক্ষ্য)</td></tr>
<tr><td class="hl">Knowledge</td><td>information সংযুক্ত করে understanding (এই বই এখানে লক্ষ্য)</td></tr>
<tr><td class="hl">Information</td><td>data + context</td></tr>
<tr><td class="hl">Data</td><td>raw facts</td></tr></table>
<div class="callout tip"><span class="co-icon">🎯</span><div><strong>Practical gap-finding:</strong> ① <strong>Book pair matrix</strong> — ৫ বই নাও, ১০ জোড়ার প্রতিটায় এক বাক্যে সংযোগ; যেখানে পারো না = সবচেয়ে বড় gap। ② <strong>Real-world test</strong> — একটা current সমস্যায় কোন বই ও মডেল খাটে, কীভাবে combine হয়? ③ <strong>"What's missing" scan</strong> — কোন topic (statistics? finance? negotiation?) cover হয়নি? বেশিরভাগ মানুষ Data→Information-এ থামে; আসল gap Information→Knowledge (সংযোগ)।</div></div>

<div class="svg-diagram"><svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Knowledge gap finding diagram">
  <defs>
    <radialGradient id="d4node" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7dd3fc"/><stop offset="100%" stop-color="#22d3ee"/>
    </radialGradient>
  </defs>
  <circle cx="100" cy="80" r="20" fill="url(#d4node)"/>
  <circle cx="100" cy="180" r="20" fill="url(#d4node)"/>
  <circle cx="260" cy="125" r="22" fill="url(#d4node)"/>
  <circle cx="480" cy="80" r="20" fill="url(#d4node)"/>
  <circle cx="480" cy="180" r="20" fill="url(#d4node)"/>
  <line x1="100" y1="80" x2="260" y2="125" stroke="#3dd6c4" stroke-width="1.5" opacity="0.6"/>
  <line x1="100" y1="180" x2="260" y2="125" stroke="#3dd6c4" stroke-width="1.5" opacity="0.6"/>
  <line x1="480" y1="80" x2="260" y2="125" stroke="#3dd6c4" stroke-width="1.5" opacity="0.6"/>
  <line x1="480" y1="180" x2="260" y2="125" stroke="#3dd6c4" stroke-width="1.5" opacity="0.6"/>
  <line x1="100" y1="80" x2="100" y2="180" stroke="#3dd6c4" stroke-width="1" opacity="0.3" stroke-dasharray="3 4"/>
  <line x1="480" y1="80" x2="480" y2="180" stroke="#3dd6c4" stroke-width="1" opacity="0.3" stroke-dasharray="3 4"/>
  <line x1="100" y1="80" x2="480" y2="80" stroke="#fbbf24" stroke-width="2" opacity="0.8" stroke-dasharray="6 4"/>
  <line x1="100" y1="180" x2="480" y2="180" stroke="#fbbf24" stroke-width="2" opacity="0.8" stroke-dasharray="6 4"/>
  <text x="100" y="85" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">RAG</text>
  <text x="100" y="185" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">Sys</text>
  <text x="260" y="130" text-anchor="middle" font-size="10" fill="#0a1a1f" font-weight="700">তুমি</text>
  <text x="480" y="85" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">Psy</text>
  <text x="480" y="185" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">Prompt</text>
  <text x="290" y="50" text-anchor="middle" font-size="12" fill="#fbbf24" font-weight="700">⚠ ফাঁকা = gap</text>
  <text x="290" y="225" text-anchor="middle" font-size="9" fill="#fcd34d">ভাঙা সুতো = missing connection</text>
  <text x="290" y="240" text-anchor="middle" font-size="11" fill="#fbbf24" font-weight="700">দূরবর্তী বইয়ের মধ্যে missing সংযোগ = gap</text>
</svg></div><div class="svg-caption">শূন্যস্থান সন্ধান — কোন সংযোগ missing? ভাঙা সুতোই তোমার সবচেয়ে বড় gap</div>

<div class="dialogue">তালাশ — search, seeking। কুরআনে আল্লাহ বলেন — "যারা সৎপথে পরিচালিত হয়, আমি তাদের আরও বৃদ্ধি দেই।" তালাশ শুধু নতুন জ্ঞান খোঁজা নয় — নিজের জ্ঞানের ফাঁক খোঁজা। যে তালাশ করে, সে gap খুঁজে পায়। যে gap খুঁজে পায়, সে পূরণ করে। যে পূরণ করে, সে বাড়ে। সবচেয়ে বিপজ্জনক অবস্থা — ভাবা 'আমি সব জানি'। কারণ তখন তালাশ বন্ধ হয়। gap অদৃশ্য হয়। জ্ঞান স্থবির হয়।</div>
<div class="dialogue en">"Talash — search, seeking. Allah says — 'Those who are guided, We increase them in guidance.' Talash isn't just seeking new knowledge — it's seeking gaps in your existing knowledge. One who seeks, finds gaps. One who finds gaps, fills them. One who fills, grows. The most dangerous state — thinking 'I know everything.' Because then seeking stops. Gaps become invisible. Knowledge stagnates."</div>`,
  senior:{
    title:"এখনই তোমার Gap খুঁজে নাও — Find Your Gaps",
    body:`<p><strong>বইয়ের জোড়া ম্যাট্রিক্স ব্যায়াম — Book Pair Matrix:</strong></p><p><em>৫টা বই বেছে নাও। প্রতিটি জোড়ার জন্য একটা করে সংযোগের বাক্য লেখো। যে জোড়ায় পারবে না — সেই তোমার সবচেয়ে বড় gap।</em></p><p>Pick 5 books from your library. For each of the 10 possible pairs, write ONE sentence connecting them.</p><p><strong>Example pairs:</strong></p><p>- Book 5 (Meta-learning) + Book 11 (Fine-tuning) = "Fine-tuning IS meta-learning for models — updating weights based on feedback, like humans updating understanding through practice."</p><p>- Book 7 (Prompt Eng) + Book 24 (Psychology) = "Prompt engineering IS applied psychology — you're manipulating attention and instruction-following, same principles as Cialdini's influence."</p><p>- Book 14 (LLMOps) + Book 23 (Irreplaceable) = "LLMOps monitoring principles apply to career monitoring — observe, detect drift, respond quickly."</p><p><strong>Pairs where you CAN'T write a connecting sentence = your biggest gaps. Write those down. Those are your learning priorities.</strong></p>`
  }
});

// ══ DOOR 5: THE INSIGHT FORGE ══
doors.push({
  num:5, icon:"💡", color:"#06b6d4", name:"অন্তর্দৃষ্টির কারখানা",
  subtitle:"The Insight Forge", tech:"Aha Moment Science (Kounios & Beeman, 2009)",
  spirit:"ইলহাম — ঐশী অনুপ্রেরণা, হঠাৎ জ্ঞান",
  secret:"Kounios ও Beeman (২০০৯) fMRI দিয়ে দেখলেন — 'aha' moment একটা শব্দ নয়, মস্তিষ্কের একটা সত্যিকারের ঘটনা। right temporal lobe-এ sudden burst of gamma waves। এটা তখন ঘটে যখন মস্তিষ্ক দুটো দূরবর্তী ধারণা সংযুক্ত করে। insight = connection। ইলহাম — হঠাৎ জ্ঞান, যা সংযোগ থেকে আসে।",
  recall:{
    q:"insight বা 'aha' moment মস্তিষ্কে কীভাবে ঘটে?",
    qen:"How does insight or 'aha' moment happen in the brain?",
    a:"Kounios ও Beeman (২০০৯): right temporal lobe-এ gamma wave burst। দুটো দূরবর্তী ধারণা সংযুক্ত হলে ঘটে। insight = connection। ইলহাম।",
    aen:"Kounios & Beeman (2009): gamma wave burst in right temporal lobe. Happens when two distant concepts connect. Insight = connection. Ilham."
  },
  story:`<p class="scene-setting">তুমি একটা সমস্যা নিয়ে ভাবছ — ঘণ্টা ধরে। কোনো সমাধান নেই। হতাশ। তুমি হাঁটতে বের হলে। গোসল করলে। ঘুমাতে গেলে। হঠাৎ — FLASH! সমাধান এসে গেল। কোথা থেকে? তুমি তো আর ভাবছিলে না! কারিগর খাদিজা হাসলেন। "এটাই insight," তিনি বললেন। "তোমার মস্তিষ্ক বিশ্রামের সময় কাজ করেছে। দুটো দূরবর্তী ধারণা — যা তুমি চেতনভাবে সংযুক্ত করতে পারোনি — অবচেতন সংযুক্ত করেছে। এটাই insight। ইলহাম।"</p>
<p class="scene-setting en">You're thinking about a problem — for hours. No solution. Frustrated. You go for a walk. Take a shower. Go to sleep. Suddenly — FLASH! The solution arrived. From where? You weren't even thinking! Craftswoman Khadija laughed. "That's insight," she said. "Your brain worked during rest. Two distant concepts — that your conscious mind couldn't connect — your unconscious connected. This is insight. Ilham."</p>

<div class="dialogue">gap finder বলেছিলেন — ফাঁক খোঁজো। কিন্তু আমি বলি — ফাঁক পূরণের সবচেয়ে শক্তিশালী উপায় insight। তুমি চেতনভাবে সংযুক্ত করতে পারো না — কিন্তু তোমার মস্তিষ্ক পারে। ঘুমানো, হাঁটা, গোসল — এই সময়ে মস্তিষ্ক সংযুক্ত করে। Kounios ও Beeman দেখালেন — insight এলোমেলো নয়। এটা মস্তিষ্কের একটা নির্দিষ্ট প্রক্রিয়া। default mode network। gamma waves। ইলহাম — হঠাৎ জ্ঞান।</div>
<div class="dialogue en">"The gap finder said — find the gaps. But I say — the most powerful way to fill gaps is insight. You can't consciously connect — but your brain can. Sleeping, walking, showering — during these times the brain connects. Kounios & Beeman showed — insight isn't random. It's a specific brain process. Default mode network. Gamma waves. Ilham — sudden knowledge."</div>

<div class="callout info"><span class="co-icon">💡</span><div><strong>Kounios & Beeman (2009):</strong> EEG+fMRI-তে দেখা গেল "aha!" মস্তিষ্কের সত্যিকারের ঘটনা — right anterior superior temporal gyrus-এ ~৪০Hz gamma-wave burst (~৩০০ ms), তার আগে একটা "brain blink" (মস্তিষ্ক ক্ষণিকের জন্য ভেতরে ফেরে)। এটা ঘটে যখন দুটো দূরবর্তী ধারণা জোড়া লাগে।</div></div>
<table class="kv-table"><tr><th>Analysis (যুক্তি)</th><th>Insight (aha!)</th></tr>
<tr><td>left hemisphere, ধাপে ধাপে</td><td>right hemisphere, হঠাৎ, holistic</td></tr>
<tr><td>সচেতন প্রচেষ্টা, alpha wave</td><td>অবচেতন, gamma-wave burst</td></tr>
<tr><td>কাজের মতো লাগে</td><td>প্রকাশ/revelation-এর মতো লাগে</td></tr></table>
<div class="callout tip"><span class="co-icon">🧘</span><div><strong>Default Mode Network (Raichle, 2001):</strong> মস্তিষ্কের "resting state" — daydream, গোসল, হাঁটা, ঘুমানোর সময় সক্রিয়; এই সময়েই দূরবর্তী স্মৃতি ও অস্বাভাবিক association জোড়া লাগে। focused thinking বন্ধ করলেই DMN দায়িত্ব নেয় ও সচেতনভাবে যা পারোনি তা <em>insight</em> হিসেবে দেয়। এজন্যই shower/walk-এ idea আসে।</div></div>
<div class="callout info"><span class="co-icon">🔁</span><div><strong>Insight-এর ৪ ধাপ (Wallas, 1926 — brain imaging-এ নিশ্চিত):</strong> Preparation (গভীরভাবে চিন্তা, raw material লোড) → Incubation (ছেড়ে দাও, অসম্পর্কিত কিছু করো) → Illumination (হঠাৎ aha, সাথে সাথে লিখে রাখো) → Verification (insight নিশ্চিত মনে হয় কিন্তু ভুল হতে পারে — বাস্তবে test করো)।</div></div>
<div class="callout tip"><span class="co-icon">🕸️</span><div><strong>Insight ও তোমার ২৭ বই:</strong> insight দূরবর্তী ধারণা জোড়ে — তোমার ২৭টা বই-ই সেই "দূরবর্তী" ডোমেইন। বিশ্রামে DMN এদের প্রক্রিয়া করে সচেতন-মন-এর মিস-করা সংযোগ খুঁজে দেয়। যেমন: "RAG hallucination (Book 10) ~ human false memory (Book 24) — দুটোই retrieval-gap plausible-কিন্তু-ভুল তথ্যে ভরাট করে; তাই RAG eval (Book 16)-এ false memory-র মতো test করা উচিত।" এই সংযোগ linear thinking-এ পাওয়া যেত না — এটাই Knowledge Web।</div></div>

<div class="svg-diagram"><svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Insight aha moment diagram">
  <defs>
    <radialGradient id="d5left" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7dd3fc"/><stop offset="100%" stop-color="#22d3ee"/>
    </radialGradient>
    <radialGradient id="d5right" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#22c55e"/>
    </radialGradient>
    <radialGradient id="d5flash" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fcd34d"/><stop offset="100%" stop-color="#fbbf24"/>
    </radialGradient>
  </defs>
  <circle cx="90" cy="125" r="28" fill="url(#d5left)"/>
  <circle cx="490" cy="125" r="28" fill="url(#d5right)"/>
  <text x="90" y="130" text-anchor="middle" font-size="10" fill="#0a1a1f" font-weight="700">RAG</text>
  <text x="490" y="130" text-anchor="middle" font-size="9" fill="#0a1a1f" font-weight="700">Psy</text>
  <path d="M 118 125 Q 200 60 280 105" fill="none" stroke="#3dd6c4" stroke-width="1.5" opacity="0.4" stroke-dasharray="4 4"/>
  <path d="M 462 125 Q 380 60 300 105" fill="none" stroke="#3dd6c4" stroke-width="1.5" opacity="0.4" stroke-dasharray="4 4"/>
  <path d="M 118 125 Q 200 190 280 145" fill="none" stroke="#3dd6c4" stroke-width="1.5" opacity="0.4" stroke-dasharray="4 4"/>
  <path d="M 462 125 Q 380 190 300 145" fill="none" stroke="#3dd6c4" stroke-width="1.5" opacity="0.4" stroke-dasharray="4 4"/>
  <polygon points="280,80 295,115 332,115 302,138 314,174 280,152 246,174 258,138 228,115 265,115" fill="url(#d5flash)" opacity="0.9"/>
  <text x="290" y="128" text-anchor="middle" font-size="14" fill="#0a1a1f" font-weight="900">!</text>
  <text x="90" y="180" text-anchor="middle" font-size="8" fill="#9290a8">দূরবর্তী ধারণা</text>
  <text x="490" y="180" text-anchor="middle" font-size="8" fill="#9290a8">দূরবর্তী ধারণা</text>
  <text x="290" y="210" text-anchor="middle" font-size="9" fill="#fcd34d">gamma wave burst ~৪০Hz · right temporal lobe</text>
  <text x="290" y="240" text-anchor="middle" font-size="11" fill="#fbbf24" font-weight="700">দুটো দূরবর্তী ধারণা জোড়া লাগলে = insight</text>
</svg></div><div class="svg-caption">অন্তর্দৃষ্টির কারখানা — দূরবর্তী ধারণার হঠাৎ সংযোগ, aha! মুহূর্ত</div>

<div class="dialogue">ইলহাম — divine inspiration, sudden knowledge। ইসলামী ঐতিহ্যে ইলহাম হলো এমন জ্ঞান যা হঠাৎ আসে — চেষ্টা ছাড়া। নবীগণ ইলহাম পেতেন। কিন্তু সাধারণ মানুষও insight পায় — যখন তারা গভীরভাবে চিন্তা করে, তারপর ছেড়ে দেয়। মস্তিষ্ক বিশ্রামে সংযুক্ত করে। ইলহাম। Kounios ও Beeman দেখালেন — এটা মস্তিষ্কের প্রক্রিয়া। default mode network। gamma waves। ইলহাম এলোমেলো নয় — এটা প্রস্তুতির ফল। যে গভীরভাবে চিন্তা করে, তারপর ছাড়ে — তার মস্তিষ্ক সংযুক্ত করে। ইলহাম।</div>
<div class="dialogue en">"Ilham — divine inspiration, sudden knowledge. In Islamic tradition, ilham is knowledge that arrives suddenly — without effort. Prophets received ilham. But ordinary people too get insight — when they think deeply, then let go. The brain connects during rest. Ilham. Kounios & Beeman showed — it's a brain process. Default mode network. Gamma waves. Ilham isn't random — it's the fruit of preparation. One who thinks deeply, then releases — their brain connects. Ilham."</div>`,
  senior:{
    title:"Insight-এর পরিবেশ তৈরি করো — Create Conditions for Insight",
    body:`<p><strong>৪-ধাপের insight প্রোটোকল — The 4-step protocol:</strong></p><p><em>১. প্রস্তুতি: গভীরভাবে চিন্তা করো। ২. ইনকিউবেশন: ছেড়ে দাও — হাঁটো, ঘুমাও। ৩. Insight: হঠাৎ আসবে — লিখে রাখো। ৪. যাচাই: সত্যি কি না দেখো।</em></p><p>১. <strong>Preparation:</strong> Study the problem deeply. Load all information into your brain. Read relevant books. This gives your brain raw material to connect.</p><p>২. <strong>Incubation:</strong> STOP. Go for a walk. Take a shower. Sleep. Do something completely unrelated. Your Default Mode Network activates and connects distant ideas.</p><p>৩. <strong>Insight:</strong> The "aha!" arrives unexpectedly. Write it down IMMEDIATELY — it fades fast.</p><p>৪. <strong>Verification:</strong> Insights feel certain but can be wrong. Test against reality.</p><p><strong>Daily insight habits:</strong> Keep a notebook by your bed. Take walking breaks. Don't fill every idle moment with your phone — let your mind wander. Boredom IS the incubation state.</p>`
  }
});
