// ════════════════════════════════════════
// কম্পিউটার সায়েন্সের মহাসমুদ্র — DOORS 1-5
// The Ocean of Computer Science: AI → Data
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: AI / ML / NLP ══
doors.push({
  num:1, icon:"🧠", color:"#38bdf8", name:"কৃত্রিম বুদ্ধিমত্তার সমুদ্র",
  subtitle:"The Sea of Artificial Intelligence", tech:"AI, ML & NLP",
  spirit:"হিকমাহ — প্রজ্ঞা, গভীর জ্ঞান",
  secret:"AI/ML হলো CS গবেষণার সবচেয়ে বড় ডোমেইন — সবচেয়ে বেশি ফান্ডিং, সবচেয়ে বেশি কনফারেন্স, সবচেয়ে বেশি চাকরি। কিন্তু সবচেয়ে বেশি প্রতিযোগিতা। ১-৩% গ্রহণের হার। যদি তুমি AI-তে যেতে চাও, তবে তোমার প্রোফাইল সাধারণ থেকে অসাধারণ হতে হবে।",
  recall:{
    q:"আলেকজান্ডার কেন বললেন এই সমুদ্রে ডুব দিলে শ্বাস নিতে হয়?",
    qen:"Why did Alexander say diving in this sea requires holding your breath?",
    a:"কারণ AI/ML সবচেয়ে গভীর এবং সবচেয়ে ভিড়ের সমুদ্র। প্রতিটা বিশ্ববিদ্যালয়ে শত শত আবেদন আসে একটা আসনে। টিকতে হলে শ্বাস ধরে গভীরে যেতে হয় — অর্থাৎ প্রোফাইল এত শক্তিশালী হতে হবে যে তুমি ভিড়ে হারিয়ে যাও না।",
    aen:"Because AI/ML is the deepest and most crowded sea. Hundreds of applications for each seat. To survive, you hold your breath and go deep — meaning your profile must be so strong you don't get lost in the crowd."
  },
  story:`
<p class="scene-setting">প্রথম দরজা। তুমি একটা বিশাল সমুদ্রের কিনারায় দাঁড়িয়ে। জল গাঢ় নীল, ঢেউ উঁচু। দূরে দেখা যাচ্ছে শত শত নাবিক ডুব দিচ্ছে — কেউ মুক্তা নিয়ে ফিরছে, কেউ ফিরছে না। সমুদ্রের কিনারে বসে আছেন আলেকজান্ডার — বয়স্ক ডাইভার, চামড়ার পোশাক, হাতে একটা মুক্তা। লবণাক্ত বাতাস, সমুদ্রের গর্জন, ভেজা বালির গন্ধ।</p>
<p class="scene-setting en">The first door. You stand at the edge of a vast sea. Water deep blue, waves high. In the distance, hundreds of divers plunge — some return with pearls, some don't. At the shore sits Alexander — elderly diver, leather suit, a pearl in hand. Salty air, ocean roar, smell of wet sand.</p>

<div class="dialogue">আলেকজান্ডার তোমাকে দেখলেন। "এটা AI-এর সমুদ্র। সবচেয়ে বড়, সবচেয়ে গভীর, সবচেয়ে ধনী। কিন্তু সবচেয়ে বিপজ্জনক।" তিনি মুক্তাটা তোমার হাতে দিলেন। "এই মুক্তা — এটা একটা NeurIPS পেপার। একটা মুক্তা পেতে কয় ডুব লাগে? শত শত। কিন্তু যে পায়, সে রাতারাতি বিখ্যাত।"</div>
<div class="dialogue en">Alexander saw you. "This is the sea of AI. The largest, deepest, richest. But the most dangerous." He placed the pearl in your hand. "This pearl — it's a NeurIPS paper. How many dives for one pearl? Hundreds. But whoever gets one, becomes famous overnight."</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🔥 NLP</td><td>LLMs, transformers, translation, code gen</td><td>ACL, EMNLP, NAACL</td></tr>
<tr><td class="hl">🔥 Vision</td><td>Image/video, generation, medical, driving</td><td>CVPR, ICCV, ECCV</td></tr>
<tr><td class="hl">🔥 RL</td><td>Robotics, game agents, decision making</td><td>NeurIPS, ICML, ICLR</td></tr>
<tr><td class="hl">🟢 ML Theory</td><td>Generalization, optimization, fairness</td><td>COLT, NeurIPS, ICML</td></tr>
<tr><td class="hl">🟢 Multimodal</td><td>Vision+Language, audio+text</td><td>NeurIPS, CVPR, ACL</td></tr>
<tr><td class="hl">🔵 AI Safety</td><td>Robustness, interpretability, alignment</td><td>NeurIPS, ICML, ICLR</td></tr></table>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড় হয়েছে:</strong> Mechanistic Interpretability (circuit analysis, sparse autoencoders — Anthropic/OpenAI/DeepMind), AI Governance &amp; Policy (compute governance, frontier evals, EU AI Act, US EO — AIES, SaTML), red-teaming ও adversarial robustness, scaling laws ও emergence।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১-৩%</div><div class="sc-label">গ্রহণের হার (top programs)</div></div>
<div class="stat-card"><div class="sc-num">৩০০-৫০০</div><div class="sc-label">প্রতি আসনে আবেদন</div></div>
<div class="stat-card"><div class="sc-num">$2B+</div><div class="sc-label">বার্ষিক NSF AI ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$200-400K+</div><div class="sc-label">industry research বেতন</div></div>
</div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ LLM/NLP/vision-এ আগ্রহ · ✅ গণিত (linear algebra, probability) ভালোবাসো · ✅ তীব্র প্রতিযোগিতা সয় · ⚠️ প্রকাশনা না থাকলে কঠিন · ❌ গণিত দুর্বল হলে আরেকবার ভাবো।</div></div>

<div class="dialogue">"কিন্তু সাবধান," আলেকজান্ডার বললেন। "এই সমুদ্রে সবাই ডুব দিচ্ছে। AI এখন hype। সবাই LLM নিয়ে কাজ করছে। কিন্তু hype একদিন থামবে। যারা গভীরে যায় — foundation, theory, reasoning — তারাই টিকবে। যারা surface-এ ভাসে — prompt engineering, chatbot — তারা ভেসে যাবে। তোমার সিদ্ধান্ত: গভীরে যাবে নাকি surface-এ থাকবে?"</div>
<div class="dialogue en">"But beware," Alexander said. "Everyone dives here. AI is hype now. Everyone works on LLMs. But hype will end. Those who go deep — foundation, theory, reasoning — they survive. Those who float on surface — prompt engineering, chatbots — they drift away. Your decision: go deep or stay on surface?"</div>

<div class="dialogue">হিকমাহ — প্রজ্ঞা। কুরআনে আল্লাহ বলেন: যাকে হিকমাহ দেওয়া হয়েছে, তাকে প্রচুর কল্যাণ দেওয়া হয়েছে। AI গবেষণা হলো হিকমাহ — বুদ্ধিমত্তার গভীরে যাওয়া। শুধু টুল ব্যবহার নয়, বুঝতে হয় কীভাবে কাজ করে, কেন কাজ করে, কখন ভাঙে। AI-এর হিকমাহ হলো — foundation, theory, first principles। যে এই হিকমাহ চায়, সে AI-এর সমুদ্রে গভীরে যেতে পারে।</div>
<div class="dialogue en">Hikmah — wisdom. Allah says: whoever is given hikmah, has been given much good. AI research is hikmah — going to the depths of intelligence. Not just using tools, but understanding how they work, why, when they break. AI's hikmah is — foundation, theory, first principles. One who seeks this hikmah, can go deep into the sea of AI.</div>

<div class="secret-box">🧠 AI/ML: সবচেয়ে বড় সমুদ্র। সবচেয়ে বেশি ফান্ডিং, সবচেয়ে বেশি ক্যারিয়ার — কিন্তু সবচেয়ে বেশি প্রতিযোগিতা (১-৩%)। গভীরে যাও (theory, foundation) — surface-এ থেকো না (prompt, chatbot)।</div>`
});

// ══ DOOR 2: SYSTEMS & DISTRIBUTED COMPUTING ══
doors.push({
  num:2, icon:"🏗️", color:"#52c41a", name:"সিস্টেমসের ভিত্তি",
  subtitle:"The Foundation of Systems", tech:"Systems & Distributed Computing",
  spirit:"আরশ — ভিত্তি, সবকিছু যার উপর দাঁড়িয়ে",
  secret:"Systems হলো CS-এর ভিত্তি — AI থেকে cloud পর্যন্ত সবকিছু systems-এর উপর চলে। মাঝারি প্রতিযোগিতা, ভালো ফান্ডিং, স্থিতিশীল ক্যারিয়ার। AI-এর hype আসবে যাবে — কিন্তু systems চিরকাল থাকবে। যদি তুমি বানাতে ভালোবাসো, এটা তোমার ডোমেইন।",
  recall:{
    q:"মারিয়া কেন বললেন সিস্টেমস হলো মহাসমুদ্রের তলদেশ, ঢেউ নয়?",
    qen:"Why did Maria say systems is the ocean floor, not the waves?",
    a:"কারণ ঢেউ (AI hype) আসে যায়, কিন্তু তলদেশ (systems) সবসময় থাকে। AI, cloud, mobile, IoT — সব কিছু সিস্টেমসের উপর চলে। সিস্টেমস গবেষকরা ভিত্তি বানান, বাকিরা সেই ভিত্তিতে ঘর করেন। ভিত্তি ছাড়া কিছুই দাঁড়ায় না।",
    aen:"Because waves (AI hype) come and go, but the floor (systems) always remains. AI, cloud, mobile, IoT — everything runs on systems. Systems researchers build the foundation, others build houses on it. Without foundation, nothing stands."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দরজা। তুমি সমুদ্রের তলদেশে — গভীরে, শান্ত। উপরে ঢেউ দেখা যাচ্ছে কিন্তু এখানে নিস্তব্ধতা। বিশাল পাথরের স্তম্ভ দাঁড়িয়ে — প্রতিটা শত শত বছরের পুরনো। স্তম্ভের তলায় বসে আছেন মারিয়া — রক্ষকের পোশাক, হাতে পাথরের হাতুড়ি, মুখে শান্ত দৃঢ়তা। তাঁর চারপাশে ছড়ানো ব্লুপ্রিন্ট, টুলস, পাথরের টুকরো। ভেজা পাথরের গন্ধ, দূরে ভূমিকম্পের গর্জন, ঠান্ডা জলের স্পর্শ।</p>
<p class="scene-setting en">The second door. You're at the ocean floor — deep, calm. Above, waves are visible but here, silence. Vast stone pillars stand — each hundreds of years old. Beneath a pillar sits Maria — guardian's garb, stone hammer in hand, calm firmness on her face. Around her: blueprints, tools, stone fragments. Smell of wet stone, distant seismic groan, cold water touch.</p>

<div class="dialogue">মারিয়া তোমাকে দেখলেন। "আলেকজান্ডার তোমাকে AI-এর সমুদ্র দেখিয়েছেন। ভালো। কিন্তু AI চলে কীভাবে? সিস্টেমসের উপর। উপরের ঢেউ দেখে মুগ্ধ হইো না — তলদেশ দেখো।" তিনি একটা স্তম্ভে হাতুড়ি মারলেন। "এই স্তম্ভ — এটা একটা distributed system। এটা ছাড়া Google, Amazon, Facebook — কেউ চলতে পারে না।"</div>
<div class="dialogue en">Maria saw you. "Alexander showed you the sea of AI. Good. But how does AI run? On systems. Don't be awed by surface waves — look at the floor." She struck a pillar with her hammer. "This pillar — it's a distributed system. Without it, Google, Amazon, Facebook — none can function."</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🏗️ OS</td><td>Scheduling, memory, file systems, kernel, containers</td><td>SOSP, OSDI, ASPLOS</td></tr>
<tr><td class="hl">🏗️ Distributed</td><td>Consensus, replication, fault tolerance, cloud</td><td>SOSP, OSDI, NSDI, PODC</td></tr>
<tr><td class="hl">🏗️ Networks</td><td>Protocols, SDN, edge, 5G/6G, low-latency</td><td>SIGCOMM, NSDI, INFOCOM</td></tr>
<tr><td class="hl">🏗️ HPC</td><td>GPU computing, parallel programming, supercomputing</td><td>SC, ISC, PPoPP</td></tr>
<tr><td class="hl">🏗️ Databases</td><td>Query optimization, OLAP/OLTP, columnar stores</td><td>SIGMOD, VLDB, ICDE</td></tr>
<tr><td class="hl">🔵 MLSys</td><td>Training infra, serving, model compression, GPU scheduling</td><td>MLSys, OSDI, ASPLOS</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-৮%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">১০০-২০০</div><div class="sc-label">প্রতি আসনে আবেদন</div></div>
<div class="stat-card"><div class="sc-num">#২</div><div class="sc-label">AI-এর পরে সর্বাধিক funded</div></div>
<div class="stat-card"><div class="sc-num">$150-300K</div><div class="sc-label">industry বেতন</div></div>
</div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ বানাতে ভালোবাসো (distributed system, kernel, network) · ✅ C/C++/Rust ও low-level ভালো লাগে · ✅ AI-এর চেয়ে stable career চাও · ✅ backend/database অভিজ্ঞতা থাকলে বাড়তি সুবিধা। <strong>MLSys = AI + Systems</strong> এখন সবচেয়ে হট।</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Systems পুরনো — এখন AI যুগ। Systems-এ কেউ কাজ করে না।" ভুল। AI চলে কীভাবে? GPU clusters, distributed training, model serving — সব systems। ChatGPT চলে কীভাবে? পেছনে বিশাল systems infrastructure। Systems কখনো পুরনো হয় না।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"Systems হলো ভিত্তি। AI-এর সাফল্য systems-এর কারণে। ভালো systems গবেষক সবসময় দরকার। MLSys (systems for ML) এখন সবচেয়ে হট area — AI আর systems একসাথে।"</div>
</div>

<div class="dialogue">"তোমার একটা সুবিধা আছে," মারিয়া বললেন। "তুমি LedgerPilot বানিয়েছ — একটা সম্পূর্ণ সিস্টেম। Backend, database, API, frontend। তুমি জানো কীভাবে জিনিস বানায়। এই অভিজ্ঞতা AI গবেষকদের কাছে নেই — তারা শুধু model নিয়ে কাজ করেন। তুমি জানো end-to-end। এটা systems research-এ সুবিধা।"</div>
<div class="dialogue en">"You have an advantage," Maria said. "You built LedgerPilot — a complete system. Backend, database, API, frontend. You know how things are built. AI researchers often don't have this — they only work with models. You know end-to-end. That's an advantage in systems research."</div>

<div class="dialogue">আরশ — ভিত্তি। আল্লাহ বলেন: আল্লাহ সিজদার নিয়তে তোমাদের সৃষ্টি করেছেন, তোমাদের মেরুদণ্ডকে সোজা করেছেন। সবকিছুর একটা ভিত্তি আছে — আরশ ছাড়া কিছু দাঁড়ায় না। সিস্টেমস গবেষণা হলো ভিত্তি গড়া — এমন ভিত্তি যার উপর লাখ লাখ মানুষের কাজ চলে। Google, Amazon — সব ভিত্তির উপর। যে ভিত্তি গড়ে, সে স্রষ্টা। যে ভিত্তি ব্যবহার করে, সে ভোক্তা। গবেষক হলো স্রষ্টা।</div>
<div class="dialogue en">Arsh — foundation. Allah says: Allah created you to prostrate, made your spine straight. Everything has a foundation — without arsh, nothing stands. Systems research is building foundations — foundations on which millions of people's work runs. Google, Amazon — all on foundations. One who builds foundations, is a creator. One who uses foundations, is a consumer. A researcher is a creator.</div>

<div class="secret-box">🏗️ Systems: CS-এর ভিত্তি। AI থেকে cloud পর্যন্ত সব এর উপর। মাঝারি প্রতিযোগিতা (৫-৮%), ভালো ফান্ডিং, স্থিতিশীল ক্যারিয়ার। MLSys = AI + Systems = হট area।</div>`
});

// ══ DOOR 3: SECURITY & PRIVACY ══
doors.push({
  num:3, icon:"🛡️", color:"#ef4444", name:"নিরাপত্তার দুর্গ",
  subtitle:"The Fortress of Security", tech:"Security & Privacy",
  spirit:"হিফয — রক্ষা, সুরক্ষা, আমানত পালন",
  secret:"Security হলো চিরকালীন ডোমেইন — প্রতিটা নতুন প্রযুক্তিতে নতুন নিরাপত্তা সমস্যা। AI security, quantum cryptography, IoT security — সব হট। স্থিতিশীল ফান্ডিং, মাঝারি প্রতিযোগিতা, সরকারি+বেসরকারি উভয় ক্ষেত্রে ক্যারিয়ার। NSA, DARPA, Google, Microsoft — সবাই security গবেষক চায়।",
  recall:{
    q:"ওমর কেন বললেন দুর্গ নির্মাতা হতে হলে আগে আক্রমণকারী হতে হয়?",
    qen:"Why did Omar say to build a fortress you must first be an attacker?",
    a:"কারণ যে শুধু দেয়াল বানায় সে জানে না কোথায় ফাঁক। যে ভাঙে, সে জানে। Security গবেষণা হলো — ভাঙার শিল্প। তুমি system ভাঙতে শেখো, তারপর সেটা কীভাবে রক্ষা করবে ভাবো। Red team → blue team। আক্রমণই সেরা প্রতিরক্ষা।",
    aen:"Because one who only builds walls doesn't know where the gaps are. One who breaks, knows. Security research is — the art of breaking. You learn to break systems, then think how to protect them. Red team → blue team. Attack is the best defense."
  },
  story:`
<p class="scene-setting">তৃতীয় দরজা। একটা পাহাড়ের চূড়ায় বিশাল দুর্গ — কিন্তু দেয়ালে ফাটল, কোথাও ইট খসে পড়েছে। দুর্গের ভেতরে বসে আছেন ওমর — কালো পোশাক, হাতে একটা লুকানো ছুরি এবং একটা দেয়ালের ব্লুপ্রিন্ট। তাঁর মুখে সতর্কতা, চোখে কৌশল। পুরনো পাথরের গন্ধ, ধাতব অস্ত্রের ঝনঝন, দূরে নকশলের শব্দ।</p>
<p class="scene-setting en">The third door. Atop a mountain peak, a vast fortress — but cracked walls, bricks falling. Inside sits Omar — black garb, a hidden dagger and wall blueprint in hand. Caution on his face, strategy in his eyes. Smell of old stone, metallic clang of weapons, distant pickaxe sounds.</p>

<div class="dialogue">ওমর তোমাকে দেখলেন। "মারিয়া তোমাকে ভিত্তি দেখিয়েছেন। কিন্তু ভিত্তি নিরাপদ না হলে কিছুই কাজে লাগবে না।" তিনি দেয়ালের ফাটল দেখালেন। "দেখো — এই ফাটল। একজন attacker এই ফাটল দিয়ে ঢুকবে। আমি জানি কারণ আমি নিজে ছিলাম attacker।" তিনি ছুরি ঘুরিয়ে একটা দেয়ালে ঢুকিয়ে দেখালেন — কীভাবে ভাঙে।</div>
<div class="dialogue en">Omar saw you. "Maria showed you the foundation. But if the foundation isn't secure, nothing works." He showed the crack in the wall. "Look — this crack. An attacker enters through it. I know because I was an attacker myself." He twirled the dagger, showed how to break through a wall.</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🛡️ Systems Sec.</td><td>Intrusion detection, malware, DDoS, zero-days</td><td>S&amp;P, CCS, USENIX</td></tr>
<tr><td class="hl">🔐 Cryptography</td><td>Post-quantum, zero-knowledge, homomorphic, MPC</td><td>CRYPTO, EUROCRYPT</td></tr>
<tr><td class="hl">🤖 AI Security</td><td>Adversarial attacks, model stealing, LLM jailbreaks</td><td>USENIX, S&amp;P, NeurIPS</td></tr>
<tr><td class="hl">🔒 Privacy Tech</td><td>Differential privacy, federated learning</td><td>PETS, CCS, NDSS</td></tr>
<tr><td class="hl">🌐 Web/App Sec.</td><td>XSS, injection, API, smart-contract security</td><td>USENIX, CCS, NDSS</td></tr>
<tr><td class="hl">🟢 Usable Sec.</td><td>Human factors, phishing, authentication</td><td>SOUPS, USENIX, CCS</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-১০%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">$800M+</div><div class="sc-label">NSA/DARPA/NSF ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$150-350K</div><div class="sc-label">industry বেতন</div></div>
<div class="stat-card"><div class="sc-num">$200-500K</div><div class="sc-label">consulting</div></div>
</div>

<div class="callout warn"><span class="co-icon">⚖️</span><div><strong>Responsible disclosure:</strong> vulnerability পেলে সরাসরি প্রকাশ কোরো না — আগে কোম্পানিকে জানাও, সময় দাও, তারপর পেপার। এই নীতিবোধ ছাড়া security গবেষক বিপজ্জনক।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ ভাঙা আর বানানো একসাথে ভালোবাসো · ✅ crypto গণিত ভালো লাগে · ✅ government/clearance career চাও · ✅ real-world impact চাও। <strong>AI Security</strong> (LLM jailbreaks, adversarial attacks) সবচেয়ে হট emerging area।</div></div>

<div class="dialogue">"একটা কথা," ওমর বললেন। "Security গবেষণায় একটা unique challenge আছে — তুমি যা জানো, তা প্রকাশ করতে হয় সাবধানে। Responsible disclosure। তুমি একটা vulnerability খুঁজে পেলে — সরাসরি প্রকাশ করো না। প্রথমে কোম্পানিকে জানাও, সময় দাও, তারপর পেপার। এই নীতিবোধ ছাড়া security গবেষক বিপজ্জনক।"</div>
<div class="dialogue en">"One thing," Omar said. "Security research has a unique challenge — you must publish what you know carefully. Responsible disclosure. If you find a vulnerability — don't publish directly. First notify the company, give time, then paper. Without this ethics, a security researcher is dangerous."</div>

<div class="dialogue">হিফয — রক্ষা। কুরআনে আল্লাহ বলেন: আমি স্মরণ নাজিল করেছি এবং আমিই এর রক্ষক। হিফয মানে সুরক্ষা, পাহারা। Security গবেষণা হলো হিফয — মানুষের ডেটা, গোপনীয়তা, অধিকার রক্ষা করা। এটা আমানত। যে আমানত রক্ষা করে, সে বিশ্বস্ত। বিশ্বস্ত মানুষ আল্লাহও বিশ্বাস করেন। Security গবেষক হলো ডিজিটাল দুনিয়ার প্রহরী — যে অন্যের তথ্য রক্ষা করে, নিজের জ্ঞান দিয়ে। এটা বিশ্বাসের কাজ।</div>
<div class="dialogue en">Hifz — protection. Allah says: We have sent down the Reminder and We are its protector. Hifz means security, guarding. Security research is hifz — protecting people's data, privacy, rights. It's a trust. One who protects trust, is trustworthy. The trustworthy person, Allah trusts too. A security researcher is the guardian of the digital world — protecting others' information with their knowledge. This is work of trust.</div>

<div class="secret-box">🛡️ Security: চিরকালীন ডোমেইন। মাঝারি প্রতিযোগিতা (৫-১০%), সরকারি+বেসরকারি ফান্ডিং। AI Security = সবচেয়ে হট area। ভাঙা শেখো আগে, তারপর বানানো।</div>`
});

// ══ DOOR 4: DATA SCIENCE & DATABASES ══
doors.push({
  num:4, icon:"🗄️", color:"#fbbf24", name:"ডেটার খনি",
  subtitle:"The Mine of Data", tech:"Data Science & Databases",
  spirit:"কিতাব — রেকর্ড, লিখিত সংরক্ষণ",
  secret:"Data হলো নতুন তেল — কিন্তু খনি ছাড়া তেল কিছুই না। Database গবেষণা হলো সেই খনি গড়া। কম প্রতিযোগিতা, স্থিতিশীল ফান্ডিং, সর্বোচ্চ ক্যারিয়ার। প্রতিটা কোম্পানির database দরকার — Google থেকে LedgerPilot পর্যন্ত। তুমি LedgerPilot-এ MySQL ব্যবহার করো — এই ডোমেইন তোমার জন্য পরিচিত।",
  recall:{
    q:"লিলি কেন বললেন তেলের কূপ আর ডেটার স্টোর একই নিয়মে চলে?",
    qen:"Why did Lily say oil wells and data stores follow the same rules?",
    a:"কারণ তেল যেমন মাটির নিচে থাকে, ডেটাও স্টোরের নিচে। তেল তুলতে পাম্প দরকার, ডেটা তুলতে query দরকার। তেল পরিশোধন করতে হয়, ডেটা clean করতে হয়। উভয়ই অস্থায়ী — খনি ফুরোলে তেল ফুরায়, ডেটা নষ্ট হলে কিছু থাকে না। খনি রক্ষা = ডেটা রক্ষা।",
    aen:"Because oil is underground, data is under the store. Oil needs pumps, data needs queries. Oil needs refining, data needs cleaning. Both are perishable — when the mine runs dry, oil ends; when data is corrupted, nothing remains. Protecting the mine = protecting data."
  },
  story:`
<p class="scene-setting">চতুর্থ দরজা। একটা বিশাল ভূগর্ভস্থ প্রকোষ্ঠ — তাকে তাকে স্ফটিকের শেলফ, প্রতিটিতে জ্বলজ্বলে পাথর। পাথরগুলো ডেটা — কিছু নীল, কিছু সোনালি, কিছু লাল। মাঝখানে একটা টেবিলে বসে আছেন লিলি — চশমা নাকে, হাতে একটা ব্যাগ-অফ-স্টোনস, মুখে বিশ্লেষকের তীক্ষ্ণতা। স্ফটিকের ঝকঝকে গন্ধ, পাথরের ঠান্ডা স্পর্শ, দূরে জলের টুপটাপ।</p>
<p class="scene-setting en">The fourth door. A vast underground chamber — shelf after shelf of crystal, each holding glowing stones. The stones are data — some blue, some golden, some red. At a center table sits Lily — glasses on nose, a bag-of-stones in hand, analyst's sharpness on her face. Smell of crystal sparkle, cold touch of stone, distant water drip.</p>

<div class="dialogue">লিলি তোমাকে দেখলেন। "ওমর তোমাকে দুর্গ দেখিয়েছেন। কিন্তু দুর্গ কী রক্ষা করে? ডেটা। মানুষের তথ্য, কোম্পানির রেকর্ড, দেশের পরিসংখ্যান। এই সব ডেটা — নতুন তেল। কিন্তু তেল মাটির নিচে থাকলে কিছুই কাজে লাগে না। তুলতে হয়। পরিশোধন করতে হয়। ব্যবহার করতে হয়। সেটাই ডেটা সায়েন্স।"</div>
<div class="dialogue en">Lily saw you. "Omar showed you the fortress. But what does the fortress protect? Data. People's information, company records, national statistics. All this data — the new oil. But oil underground is useless. Must be extracted. Refined. Used. That's data science."</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🗄️ Database Systems</td><td>Query optimization, distributed DBs, HTAP, streaming</td><td>SIGMOD, VLDB, ICDE</td></tr>
<tr><td class="hl">📊 Data Mining</td><td>Pattern mining, anomaly detection, graph mining, recsys</td><td>KDD, ICDM, WSDM</td></tr>
<tr><td class="hl">📈 Big Data Systems</td><td>Spark, Flink, data lakes, ETL, real-time analytics</td><td>SIGMOD, VLDB</td></tr>
<tr><td class="hl">🔮 Statistical Learning</td><td>Bayesian, causal inference, time series, spatial</td><td>KDD, AISTATS, UAI</td></tr>
<tr><td class="hl">🌐 Web-Scale Data</td><td>Search indexing, web crawling, knowledge graphs</td><td>WWW, SIGMOD, WSDM</td></tr>
<tr><td class="hl">🟢 Data Viz</td><td>Interactive viz, dashboards, visual analytics</td><td>VIS, CHI, EuroVIS</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-৮%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">$300M+</div><div class="sc-label">NSF data ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$120-250K</div><div class="sc-label">industry বেতন</div></div>
<div class="stat-card"><div class="sc-num">সর্বোচ্চ</div><div class="sc-label">ক্যারিয়ার স্থিতিশীলতা</div></div>
</div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ SQL/ORM ও data modeling পরিচিত · ✅ backend engineering ভালোবাসো · ✅ ডেটা থেকে insight বের করতে ভালো লাগে · ✅ AI-এর চেয়ে স্থিতিশীল career চাও। প্রতিটা অ্যাপ ও প্রতিটা AI মডেল ডেটার উপর চলে — তাই চাহিদা কখনো ফুরায় না।</div></div>

<div class="dialogue">"আমি তোমাকে একটা গোপন কথা বলি," লিলি বললেন। "Database গবেষণা এখন 'বোরিং' মনে হতে পারে — কিন্তু এটাই সবচেয়ে stable। AI hype থামলে AI গবেষকদের কী হবে? কিন্তু database গবেষক সবসময় দরকার। প্রতিটা নতুন অ্যাপের ডেটা দরকার। প্রতিটা নতুন AI মডেলের training ডেটা দরকার। Database ছাড়া কিছুই চলে না।"</div>
<div class="dialogue en">"Let me tell you a secret," Lily said. "Database research may seem 'boring' now — but it's the most stable. When AI hype stops, what happens to AI researchers? But database researchers are always needed. Every new app needs data. Every new AI model needs training data. Without databases, nothing runs."</div>

<div class="dialogue">কিতাব — রেকর্ড, লিখিত সংরক্ষণ। কুরআনে আল্লাহ বলেন: প্রতিটা মানুষের আমল আমরা লিখে রাখি এক কিতাবে। ডেটা হলো সেই কিতাব — মানুষের কাজের রেকর্ড, ইতিহাস, সিদ্ধান্তের ভিত্তি। যে ডেটা সংরক্ষণ করে, সে ইতিহাস সংরক্ষণ করে। যে ডেটা বিশ্লেষণ করে, সে ভবিষ্যৎ দেখে। Database গবেষণা হলো — মানবজাতির স্মৃতি সংরক্ষণ করা। প্রতিটা রেকর্ড একটা আমল — সেটা হারিয়ে গেলে ইতিহাস হারায়।</div>
<div class="dialogue en">Kitab — record, written preservation. Allah says: We write every person's deeds in a book. Data is that book — the record of human actions, history, the basis of decisions. One who preserves data, preserves history. One who analyzes data, sees the future. Database research is — preserving the memory of humanity. Each record is a deed — if it's lost, history is lost.</div>

<div class="secret-box">🗄️ Data/Databases: নতুন তেল। কম প্রতিযোগিতা (৫-৮%), স্থিতিশীল ফান্ডিং, সর্বোচ্চ ক্যারিয়ার স্থিতিশীলতা। প্রতিটা কোম্পানির দরকার — Google থেকে LedgerPilot পর্যন্ত।</div>`
});

// ══ DOOR 5: HCI & ACCESSIBILITY ══
doors.push({
  num:5, icon:"👋", color:"#c084fc", name:"স্পর্শের সেতু",
  subtitle:"The Bridge of Touch", tech:"Human-Computer Interaction & Accessibility",
  spirit:"রহম — করুণা, অন্যের কষ্ট বোঝা",
  secret:"HCI হলো সবচেয়ে কম প্রতিযোগিতার ডোমেইন — কিন্তু সবচেয়ে বেশি প্রভাবশালী। প্রতিটা ইন্টারফেস, প্রতিটা অ্যাক্সেসিবিলিটি ফিচার — মানুষের জীবন বদলায়। তুমি Ipractus বানিয়েছ — React Native app। তুমি জানো কীভাবে ইউজার ইন্টারফেস বানায়। HCI গবেষণা হলো — সেই ইন্টারফেসকে আরও ভালো, আরও অন্তর্ভুক্তিমূলক করা।",
  recall:{
    q:"আয়েশা কেন বললেন সেতু শুধু দুই পাড় যোগ করে না, মানুষকে যোগ করে?",
    qen:"Why did Ayesha say a bridge doesn't just connect two banks, it connects people?",
    a:"কারণ একটা সেতু শুধু দুটো জায়গাকে যোগ করে না — দুটো দুনিয়াকে যোগ করে। HCI হলো সেই সেতু — কম্পিউটার আর মানুষের মাঝে। যে সেতু বানায়, সে মানুষকে কম্পিউটারের দুনিয়ায় নিয়ে যায়। কিন্তু সেতু যদি অ্যাক্সেসিবল না হয় — কেউ পার হতে পারবে না। অ্যাক্সেসিবিলিটি = সবার জন্য সেতু।",
    aen:"Because a bridge doesn't just connect two places — it connects two worlds. HCI is that bridge — between computer and human. One who builds the bridge, brings people into the digital world. But if the bridge isn't accessible — no one can cross. Accessibility = a bridge for everyone."
  },
  story:`
<p class="scene-setting">পঞ্চম দরজা। একটা নদীর উপর সুন্দর সেতু — কিন্তু একটু অদ্ভুত। সেতুর এক পাশে সিঁড়ি, অন্য পাশে র‍্যাম্প। কোথাও tactile paving, কোথাও audio signal। সেতুর মাঝখানে বসে আছেন আয়েশা — হাতে একটা ক্লে-মডেল, চোখে সহানুভূতি, মুখে কোমল হাসি। তাঁর পাশে ছড়ানো পেপার প্রোটোটাইপ, কালার স্যাম্পল, ইউজার টেস্টিং নোট। নদীর শব্দ, কাগজের খসখস, হালকা বাতাস।</p>
<p class="scene-setting en">The fifth door. A beautiful bridge over a river — but slightly strange. On one side stairs, the other a ramp. Tactile paving here, audio signal there. At the bridge's center sits Ayesha — a clay-model in hand, empathy in eyes, gentle smile on face. Beside her: paper prototypes, color samples, user testing notes. River sound, paper rustle, light breeze.</p>

<div class="dialogue">আয়েশা তোমাকে দেখলেন। "লিলি তোমাকে ডেটার খনি দেখিয়েছেন। কিন্তু খনি কার জন্য? মানুষের জন্য। আর মানুষ সেই খনির ডেটা কীভাবে পায়? ইন্টারফেসের মাধ্যমে।" তিনি সেতুর দিকে তাকালেন। "এই সেতু — এটাই HCI। কম্পিউটার এক দুনিয়া, মানুষ আরেক দুনিয়া। এই দুই দুনিয়ার মাঝে সেতু — সেটাই HCI গবেষণা।"</div>
<div class="dialogue en">Ayesha saw you. "Lily showed you the data mine. But for whom? For people. And how do people access that data? Through interfaces." She looked at the bridge. "This bridge — that's HCI. Computer is one world, human is another. The bridge between these two worlds — that's HCI research."</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">👋 Interaction</td><td>Touch, gesture, voice, gaze, AR/VR interaction</td><td>CHI, UIST, TEI</td></tr>
<tr><td class="hl">👥 CSCW</td><td>Collaboration tools, social media, remote work</td><td>CSCW, CHI, GROUP</td></tr>
<tr><td class="hl">🎨 Ubiquitous/Mobile</td><td>IoT interaction, wearables, mobile UX, context-aware</td><td>UbiComp, MobiCom, CHI</td></tr>
<tr><td class="hl">♿ Accessibility</td><td>Screen readers, motor/cognitive access, aging</td><td>ASSETS, CHI, W4A</td></tr>
<tr><td class="hl">🧠 BCI</td><td>EEG interaction, neural prosthetics, motor imagery</td><td>CHI, UIST, NeurIPS</td></tr>
<tr><td class="hl">🔵 AR/VR</td><td>Virtual environments, mixed reality, spatial</td><td>CHI, UIST, ISMAR</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৮-১২%</div><div class="sc-label">গ্রহণের হার (সবচেয়ে কম প্রতিযোগিতা)</div></div>
<div class="stat-card"><div class="sc-num">$200M+</div><div class="sc-label">NSF HCI ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$120-250K</div><div class="sc-label">UX researcher বেতন</div></div>
<div class="stat-card"><div class="sc-num">সর্বোচ্চ</div><div class="sc-label">মানব-প্রভাব</div></div>
</div>

<div class="callout info"><span class="co-icon">🔬</span><div>HCI-তে শুধু কোড নয় — <strong>মানুষ নিয়ে</strong> কাজ। User study, interview, observation, thematic analysis — qualitative + quantitative দুটোই দরকার। এই কারণেই এটি সবচেয়ে প্রভাবশালী: তুমি সরাসরি মানুষের জীবন স্পর্শ করো।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ ইউজার ইন্টারফেস বানানোর অভিজ্ঞতা আছে · ✅ মানুষকে বুঝতে ভালোবাসো · ✅ design ও psychology আগ্রহী করে · ✅ কম প্রতিযোগিতা + সরাসরি মানব-প্রভাব চাও।</div></div>

<div class="dialogue">"HCI-এর একটা বিশেষত্ব আছে," আয়েশা বললেন। "অন্যান্য ডোমেইনে তুমি শুধু কোড দিয়ে কাজ করো। HCI-তে তুমি মানুষকে নিয়ে কাজ করো। User study করো — মানুষকে দেখো, কথা বলো, বোঝো। এর জন্য qualitative research skills দরকার — interview, observation, thematic analysis। শুধু কোডিং নয়। কিন্তু এই কারণেই HCI গবেষণা সবচেয়ে প্রভাবশালী — তুমি সরাসরি মানুষের জীবন স্পর্শ করো।"</div>
<div class="dialogue en">"HCI has a uniqueness," Ayesha said. "In other domains, you work only with code. In HCI, you work with people. You do user studies — watch people, talk to them, understand them. This requires qualitative research skills — interview, observation, thematic analysis. Not just coding. But this is exactly why HCI research is most impactful — you directly touch people's lives."</div>

<div class="dialogue">রহম — করুণা। আল্লাহ বলেন: আমি তোমাদের মাঝে রহমত বানিয়েছি। HCI গবেষণা হলো রহম — অন্যের কষ্ট বোঝা। অন্ধ মানুষ কীভাবে কম্পিউটার ব্যবহার করে? প্রতিবন্ধী মানুষ কীভাবে অ্যাক্সেস করে? বৃদ্ধ মানুষ কীভাবে প্রযুক্তি ব্যবহার করে? এই প্রশ্ন করা = রহম। যে রহম করে, সে মানুষের জীবন সহজ করে। অ্যাক্সেসিবিলিটি গবেষণা হলো — প্রতিটা মানুষের জন্য প্রযুক্তি খোলা করা। এটা ন্যায্যতা, এটা ইনসাফ।</div>
<div class="dialogue en">Rahm — compassion. Allah says: We have placed mercy among you. HCI research is rahm — understanding others' pain. How does a blind person use a computer? How does a disabled person access it? How does an elderly person use technology? Asking these questions = rahm. One who is compassionate, makes people's lives easier. Accessibility research is — opening technology for every person. This is equity, this is justice.</div>

<div class="secret-box">👋 HCI: সবচেয়ে কম প্রতিযোগিতা (৮-১২%), সবচেয়ে বেশি human impact। UX research, accessibility, AR/VR। তোমার Ipractus অভিজ্ঞতা এখানে কাজে দেবে। কোডিং + মানুষ বোঝা — দুটোই দরকার।</div>`
});

// === MORE DOORS HERE ===
