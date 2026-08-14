// ════════════════════════════════════════
// গবেষণার তীর্থযাত্রা — DOORS 1-5
// PhD Journey: Decision → Funding
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: IS PHD RIGHT FOR YOU? ══
doors.push({
  num:1, icon:"🏔️", color:"#5eead4", name:"সন্ধিক্ষণের চৌরাস্তা",
  subtitle:"The Crossroads of Decision", tech:"Is PhD Right for You?",
  spirit:"হিজরত — পরিচিত জায়গা ছেড়ে অজানায় যাওয়া",
  secret:"PhD কোনো ডিগ্রি নয় — একটা জীবনধারা। ৫-৭ বছরের আজীবন সংকল্প। কেন তুমি এটা করতে চাও — সেই উত্তর ছাড়া শুরু করো না।",
  recall:{
    q:"তীর্থযাত্রী কেন যাত্রা শুরুর আগে থামে, নিজেকে প্রশ্ন করে?",
    qen:"Why does the pilgrim pause before starting, asking themselves questions?",
    a:"কারণ তীর্থযাত্রা দীর্ঘ — অর্ধেক পথে ফিরে এলে সব নষ্ট। PhD-ও তেমনি — ৫-৭ বছর। ভালো কারণ ছাড়া শুরু করলে মাঝপথে ভেঙে পড়বে। কেন চাও — সেটাই আসল প্রশ্ন।",
    aen:"Because pilgrimage is long — turning back midway wastes everything. PhD too — 5-7 years. Without a good reason, you'll break midway. Why you want it — that's the real question."
  },
  story:`
<p class="scene-setting">প্রথম স্থান। একটা চৌরাস্তা। চার দিকে চার রাস্তা — ইন্ডাস্ট্রি, স্টার্টআপ, মাস্টার্স, আর PhD। তুমি দাঁড়িয়ে আছো — কোন দিকে যাবে? একজন বয়স্ক তীর্থযাত্রী সালেহ পাশে এসে দাঁড়ালেন — লম্বা দাড়ি, হাতে লাঠি, চোখে শান্তি। "থামো," তিনি বললেন। "আগে ভাবো — কেন যেতে চাও?"</p>
<p class="scene-setting en">The first station. A crossroads. Four roads — industry, startup, master's, and PhD. You stand — which way? An elderly pilgrim Saleh comes beside — long beard, staff in hand, peace in eyes. "Stop," he said. "First think — why do you want to go?"</p>

<div class="dialogue">ইন্টারভিউ প্রস্তুতির মতো PhD-ও একটা যাত্রা — কিন্তু আরও দীর্ঘ, আরও গভীর, আরও একাকী। ৫-৭ বছর। তোমার জীবনের সেরা সময়। ভালো কারণ ছাড়া শুরু করলে মাঝপথে ভেঙে পড়বে। তাই আগে প্রশ্ন — কেন?</div>
<div class="dialogue en">"Like interview prep, PhD is a journey — but longer, deeper, more solitary. 5-7 years. The best years of your life. Without a good reason, you'll break midway. So first the question — why?"</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খারাপ কারণ</div>• "ভিসা বাড়ানোর জন্য" — PhD ভিসা এক্সটেনশনের টুল নয়<br>• "চাকরি না পেয়ে" — বেকারত্ব থেকে PhD বেরোবে না<br>• "সবাই করছে" — সবার পথ তোমার পথ নয়<br>• "ডিগ্রির জন্য" — শুধু ডিগ্রি চাইলে আরেকটা মাস্টার্স করো<br>• "সম্মানের জন্য" — 'ডক্টর' টাইটেল ৫ বছরের কষ্টের মূল্য নয়</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ভালো কারণ</div>• "একটা নির্দিষ্ট সমস্যা গভীরভাবে সমাধান করতে চাই"<br>• "রিসার্চ করতে ভালোবাসি" — অজানা খোঁজার আনন্দ<br>• "একাডেমিয়ায় ক্যারিয়ার চাই" — প্রফেসর হতে চাই<br>• "ইন্ডাস্ট্রি রিসার্চ ল্যাবে যেতে চাই" (Google AI, Microsoft Research)<br>• "নতুন জ্ঞান তৈরি করতে চাই" — শুধু ব্যবহার নয়, সৃষ্টি</div>
</div>

<table class="kv-table"><tr><th>মাপকাঠি</th><th>PhD</th><th>Industry</th></tr>
<tr><td class="hl">সময় / Time</td><td>৫-৭ বছর</td><td>যেকোনো সময় শুরু</td></tr>
<tr><td class="hl">আয় / Pay</td><td>$29-54K stipend</td><td>$120-200K+ salary</td></tr>
<tr><td class="hl">স্বাধীনতা / Autonomy</td><td>উচ্চ (নিজের প্রশ্ন)</td><td>কম (কোম্পানির লক্ষ্য)</td></tr>
<tr><td class="hl">আউটপুট / Output</td><td>পেপার, থিসিস, নতুন জ্ঞান</td><td>প্রোডাক্ট, রেভিনিউ</td></tr>
<tr><td class="hl">ব্যর্থতা / Failure</td><td>প্রতিদিন (রিসার্চ = ব্যর্থতা)</td><td>কম (প্রোডাক্ট শিপ হয়)</td></tr>
<tr><td class="hl">শেখার গভীরতা / Depth</td><td>সর্বোচ্চ</td><td>মাঝারি</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫.৮ বছর</div><div class="sc-label">CS PhD-এর গড় সময় (CGS)</div></div>
<div class="stat-card"><div class="sc-num">~৬০-৭০%</div><div class="sc-label">CS-এ completion rate (অন্য ফিল্ডে ~৫০%)</div></div>
<div class="stat-card"><div class="sc-num">৫৮,১৩১</div><div class="sc-label">২০২৪-এ US ডক্টরেট (NSF SED)</div></div>
<div class="stat-card"><div class="sc-num">≤৭৫%</div><div class="sc-label">সর্বোচ্চ completion (CGS: অনুকূল অবস্থাতেও)</div></div>
</div>

<div class="svg-fig">
<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PhD vs Industry divergence">
<line x1="40" y1="200" x2="600" y2="200" stroke="#5e5c74" stroke-width="1.5"/>
<line x1="40" y1="200" x2="40" y2="30" stroke="#5e5c74" stroke-width="1.5"/>
<text x="320" y="228" fill="#9290a8" font-size="12" text-anchor="middle">সময় (বছর) →</text>
<text x="20" y="115" fill="#9290a8" font-size="12" text-anchor="middle" transform="rotate(-90 20 115)">আয় / গভীরতা</text>
<path d="M40 190 C 160 170, 300 130, 600 60" fill="none" stroke="#7dd3fc" stroke-width="3"/>
<path d="M40 190 C 200 188, 340 185, 460 175 C 520 165, 560 110, 600 45" fill="none" stroke="#5eead4" stroke-width="3" stroke-dasharray="7 5"/>
<circle cx="460" cy="175" r="5" fill="#5eead4"/>
<text x="455" y="160" fill="#5eead4" font-size="11" text-anchor="middle">PhD শেষ (~বছর ৬)</text>
<text x="500" y="90" fill="#7dd3fc" font-size="12">Industry আয়</text>
<text x="540" y="30" fill="#5eead4" font-size="12">PhD পথ</text>
<text x="200" y="215" fill="#5e5c74" font-size="10">১</text><text x="330" y="215" fill="#5e5c74" font-size="10">৩</text><text x="460" y="215" fill="#5e5c74" font-size="10">৬</text><text x="580" y="215" fill="#5e5c74" font-size="10">১০</text>
</svg>
<div class="fig-cap">চিত্র: PhD-তে প্রথম ৫-৬ বছর আয় কম — কিন্তু এরপর research-lab পথ খুলে যায়। সিদ্ধান্তটা টাকার নয় — <em>কোন কাজ তোমাকে টানে</em> তার।</div>
</div>

<div class="src-box"><div class="src-label">যাচাইকৃত উৎস / Verified Sources</div>NSF Survey of Earned Doctorates 2024 (NSF 26-315): ২০২৪-এ ৫৮,১৩১ ডক্টরেট — ncses.nsf.gov · CGS PhD Completion Project: অনুকূল অবস্থাতেও ≤৭৫% completion; ছোট প্রোগ্রামে হার বেশি — phdcompletion.org · Evans et al., <em>Nature Biotechnology</em> 36, 282–284 (2018): ২,২৭৯ গ্র্যাড শিক্ষার্থীর জরিপে ৪১% মাঝারি-গুরুতর anxiety, ৩৯% depression (নমুনা self-selected — পরে সমালোচিতও হয়েছে, তবু সতর্কবার্তা স্পষ্ট)।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Reality check:</strong> ঝরে পড়ার বড় কারণ একাডেমিক দুর্বলতা নয় — advisor mismatch, ফান্ডিং শেষ হওয়া, আর mental health। PhD শিক্ষার্থীদের মধ্যে depression ও anxiety-র হার সাধারণ জনসংখ্যার চেয়ে অনেক বেশি (Evans et al., <em>Nature Biotechnology</em> 2018 — ৪১% মাঝারি-গুরুতর উদ্বেগ, ৩৯% বিষণ্নতা)। ভালো advisor আর ভালো fit — এই দুটোই টিকে থাকার আসল ভিত্তি।</div></div>

<div class="callout info"><span class="co-icon">🧭</span><div><strong>এক লাইনের প্রশ্ন:</strong> তুমি কি ৫-৭ বছর এমন একটা সমস্যা নিয়ে কাজ করতে প্রস্তুত — যার উত্তর হয়তো <em>নেই</em>, আর যা খোঁজার পথ কেউ তোমাকে দেখিয়ে দেবে না?</div></div>

<div class="dialogue">হিজরত — পরিচিত জায়গা ছেড়ে অজানায় যাওয়া। ইব্রাহিম (আ) যখন স্বীয় সম্প্রদায় ছেড়ে অজানা যাত্রা করলেন, তিনি জানতেন না গন্তব্য — কিন্তু জানতেন উদ্দেশ্য। PhD-ও তেমনি — তুমি ছাড়বে ইন্ডাস্ট্রির নিশ্চিত বেতন, কিন্তু পাবে জ্ঞানের গভীরতা। হিজরত করতে হবে — কিন্তু উদ্দেশ্য স্পষ্ট থাকতে হবে। "কেন?" — এই প্রশ্নের উত্তর ছাড়া হিজরত নয়, পলায়ন।</div>
<div class="dialogue en">"Hijrat — leaving the known for the unknown. When Ibrahim (AS) left his community for an unknown journey, he didn't know the destination — but he knew the purpose. PhD too — you'll leave industry's certain salary, but gain knowledge's depth. Hijrat is needed — but the purpose must be clear. Without an answer to 'why?' it's not hijrat, it's flight."</div>`,
  senior:{
    title:"Self-Assessment — ৫টা প্রশ্ন নিজেকে করো",
    body:`<p><strong>এই ৫টা প্রশ্নের উত্তর দাও নিজেকে:</strong></p><p><strong>১.</strong> আমি কি একটা নির্দিষ্ট রিসার্চ সমস্যা নিয়ে ভাবি?</p><p><strong>২.</strong> আমি কি অন্যের পেপার পড়ে উত্তেজনা অনুভব করি?</p><p><strong>৩.</strong> আমি কি একা কাজ করতে পারি — কয়েক মাস কোনো ফল ছাড়া?</p><p><strong>৪.</strong> আমি কি ৫-৭ বছর বিনিয়োগ করতে প্রস্তুত — ইন্ডাস্ট্রির বেতন ছাড়া?</p><p><strong>৫.</strong> আমার লক্ষ্য কি একাডেমিয়া বা রিসার্চ ল্যাব?</p><p>৪+ "হ্যাঁ" = PhD সফল হতে পারে। ৩ বা কম = আরেকটা মাস্টার্স বা ইন্ডাস্ট্রি রিসার্চ ভাবো।</p>`
  }
});

// ══ DOOR 2: PhD STRUCTURE & TIMELINE ══
doors.push({
  num:2, icon:"🗺️", color:"#7dd3fc", name:"মানচিত্রকারের গ্রন্থ",
  subtitle:"The Cartographer's Atlas", tech:"PhD Structure & Timeline",
  spirit:"সফর — যাত্রার স্তর",
  secret:"PhD একটা সরল পথ নয়। ৫-৭ বছরের ৪টি স্তর: Coursework → Qualifying Exam → Proposal → Defense। প্রতিটা স্তর আগের চেয়ে কঠিন।",
  recall:{
    q:"মানচিত্রকার কেন পুরো পথ আগে আঁকেন, ধাপে ধাপে?",
    qen:"Why does the cartographer draw the full path first, step by step?",
    a:"কারণ যাত্রীকে জানতে হবে কত স্তর আছে। PhD-ও তেমনি — Coursework, Qualifying, Proposal, Defense। প্রতিটা স্তর আলাদা চ্যালেঞ্জ। পুরো মানচিত্র না দেখলে মাঝপথে হারিয়ে যাবে।",
    aen:"Because the traveler needs to know how many stages exist. PhD too — Coursework, Qualifying, Proposal, Defense. Each stage is a different challenge. Without the full map, you'll get lost midway."
  },
  story:`
<p class="scene-setting">দ্বিতীয় স্থান। একটা বিশাল মানচিত্রের টেবিল। দেয়ালে প্রাচীন মানচিত্র, টেবিলে খোলা অ্যাটলাস। মানচিত্রকার ইদ্রিস বসে আছেন — মধ্যবয়সী, নিখুঁত হাত, চোখে নিপুণতা। "তোমার যাত্রার মানচিত্র," তিনি বললেন, পাঁচটা পর্বের একটা চিত্র খুলে দিলেন। "প্রতিটা পর্ব আগের চেয়ে কঠিন। কিন্তু প্রতিটা পর্ব শেষে তুমি আরও গভীরে।"</p>
<p class="scene-setting en">The second station. A vast map table. Ancient maps on walls, open atlas on table. Cartographer Idris sits — middle-aged, precise hands, expertise in eyes. "Your journey's map," he said, unrolling a picture of five stages. "Each stage harder than the last. But after each, you go deeper."</p>

<div class="dialogue">সন্ধিক্ষণে তীর্থযাত্রী বলেছিলেন — কেন। এখন আমি বলি — কী এবং কতদিন। PhD একটা সরল পথ নয়। এটা পাঁচটি স্তরের একটা দীর্ঘ যাত্রা। প্রতিটা স্তর একটা পরীক্ষা — শারীরিক নয়, মানসিক।</div>
<div class="dialogue en">"At the crossroads the pilgrim said — why. Now I say — what and how long. PhD isn't a straight path. It's a long journey of five stages. Each stage is a test — not physical, mental."</div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">বছর ১-২ · Coursework</div><div class="tl-title">📘 কোর্সওয়ার্ক</div><div class="tl-body">গভীর ক্লাস (ML, Systems, Theory), প্রজেক্ট ও পরীক্ষা — সাথে সাথে একটা রিসার্চ গ্রুপে ঢুকে যাও। <em>লক্ষ্য: জ্ঞানের ভিত্তি + একজন সম্ভাব্য advisor।</em></div></div>
<div class="tl-step"><div class="tl-when">বছর ২-৩ · Qualifying Exam</div><div class="tl-title">🎯 কোয়ালিফাইং পরীক্ষা</div><div class="tl-body">লিখিত + মৌখিক; এরিয়ার ৩০-৫০টা পেপার পড়ে আসতে হয়। পাশ = আনুষ্ঠানিক <strong>"PhD Candidate"</strong>। ফেল = মাস্টার্স নিয়ে বেরিয়ে যাওয়া। <em>লক্ষ্য: তুমি কি রিসার্চার হতে পারবে?</em></div></div>
<div class="tl-step"><div class="tl-when">বছর ৩-৪ · Proposal</div><div class="tl-title">🗺️ রিসার্চ প্রপোজাল</div><div class="tl-body">নিজের গবেষণার প্রশ্ন খোঁজা — সবচেয়ে কঠিন ধাপ। কমিটির সামনে পরিকল্পনা রক্ষা; প্রথম পেপার (NeurIPS, CVPR, SIGCOMM)। <em>লক্ষ্য: নতুন জ্ঞান তৈরি শুরু।</em></div></div>
<div class="tl-step"><div class="tl-when">বছর ৪-৫ · Deep Research</div><div class="tl-title">🔬 গভীর গবেষণা</div><div class="tl-body">এক্সপেরিমেন্ট → থিওরি → রাইটিং, বারবার। ব্যর্থতা স্বাভাবিক; negative result-ও ফলাফল। পেপারই তোমার "মুদ্রা"। <em>লক্ষ্য: একটা নতুন জ্ঞান প্রতিষ্ঠা।</em></div></div>
<div class="tl-step"><div class="tl-when">বছর ৫-৭ · Dissertation</div><div class="tl-title">👑 ডিসার্টেশন ও ডিফেন্স</div><div class="tl-body">১০০-২০০ পৃষ্ঠার থিসিস; কমিটি + বাইরের এক্সামিনারের সামনে ডিফেন্স। <em>লক্ষ্য: এই সমস্যায় তুমি এখন বিশ্বের অন্যতম বিশেষজ্ঞ।</em></div></div>
</div>

<div class="svg-fig">
<svg viewBox="0 0 660 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PhD stages overlap chart">
<text x="10" y="34" fill="#9290a8" font-size="11">Coursework</text><rect x="110" y="22" width="150" height="16" rx="8" fill="#7dd3fc" opacity=".85"/>
<text x="10" y="64" fill="#9290a8" font-size="11">Research</text><rect x="150" y="52" width="430" height="16" rx="8" fill="#5eead4" opacity=".75"/>
<text x="10" y="94" fill="#9290a8" font-size="11">Qualifying</text><rect x="230" y="82" width="60" height="16" rx="8" fill="#f0c75e" opacity=".9"/>
<text x="10" y="124" fill="#9290a8" font-size="11">Proposal</text><rect x="320" y="112" width="60" height="16" rx="8" fill="#ff6b35" opacity=".85"/>
<text x="10" y="154" fill="#9290a8" font-size="11">Dissertation</text><rect x="470" y="142" width="130" height="16" rx="8" fill="#b37feb" opacity=".85"/>
<line x1="110" y1="170" x2="610" y2="170" stroke="#5e5c74" stroke-width="1"/>
<text x="110" y="185" fill="#5e5c74" font-size="10">বছর ১</text><text x="270" y="185" fill="#5e5c74" font-size="10">বছর ৩</text><text x="430" y="185" fill="#5e5c74" font-size="10">বছর ৫</text><text x="580" y="185" fill="#5e5c74" font-size="10">বছর ৭</text>
</svg>
<div class="fig-cap">চিত্র: ধাপগুলো আসলে overlap করে — coursework চলতে চলতেই রিসার্চ শুরু হয়, আর রিসার্চ চলে শেষ পর্যন্ত। মাঝের রঙিন মাইলফলক তিনটিই "গেট"।</div>
</div>

<div class="callout tip"><span class="co-icon">💡</span><div>এই ধাপগুলো লিনিয়ার মনে হলেও বাস্তবে overlap করে — coursework চলাকালীনই রিসার্চ শুরু হয়, আর proposal-এর পরও নতুন দিক আসতে পারে। মানচিত্র আছে বলেই পথ সোজা নয় — কিন্তু হারিয়ে যাওয়া কম।</div></div>

<div class="dialogue">সফর — যাত্রা। কুরআনে আল্লাহ বলেন — "পৃথিবীতে ভ্রমণ করো এবং দেখো।" (৩:১৩৭) PhD একটা জ্ঞানের সফর। কিন্তু এই সফরের মানচিত্র জানা দরকার — কোথায় কী চ্যালেঞ্জ, কতদিন লাগবে। মানচিত্র ছাড়া সফর = হারিয়ে যাওয়া। মানচিত্র সহ = প্রস্তুত। প্রতিটা স্তর একটা মাইলফলক — স্তম্ভের মতো, পথের পাশে।</div>
<div class="dialogue en">"Safar — journey. Allah says — 'Travel through the earth and observe.' PhD is a journey of knowledge. But you need the map of this journey — what challenge where, how long. Without a map, travel = getting lost. With a map = prepared. Each stage is a milestone — like pillars, beside the path."</div>`,
  senior:{
    title:"R1 বনাম R2 বিশ্ববিদ্যালয় — পার্থক্য বুঝো (Carnegie 2025)",
    body:`<p><strong>২০২৫-এ Carnegie Classification নতুন সংজ্ঞা দিয়েছে:</strong></p><p><strong>R1 (Very High Research Spending & Doctorate Production):</strong> বছরে ≥$৫০M রিসার্চ ব্যয় + ≥৭০ ডক্টরেট। ২০২৫-এ ১৮৭টি প্রতিষ্ঠান R1 — MIT, Stanford, CMU, Berkeley, Georgia Tech, UIUC থেকে শুরু করে অনেক বড় স্টেট ইউনিভও। ফান্ডিং বেশি, কিন্তু শীর্ষগুলোতে ভর্তি অত্যন্ত প্রতিযোগিতামূলক।</p><p><strong>R2:</strong> ≥$৫M ব্যয় + ≥২০ ডক্টরেট। কম প্রতিযোগিতা, ফান্ডিং প্রোগ্রামভেদে।</p><p><strong>মনে রাখো:</strong> R1 এখন ১৮৭টি — সব R1 সমান নয়! CSRankings-এ <em>তোমার এরিয়ার</em> শক্তি দেখো, শুধু লেবেল নয়।</p><p><strong>তোমার কৌশল:</strong> ১০-১৫ অ্যাপ্লিকেশন — ৩-৪ reach (top R1), ৫-৬ match (mid R1/শক্ত R2), ২-৩ সেফটি।</p><p style="font-size:.72rem;opacity:.75">উৎস: Carnegie Classifications 2025 Research Activity Designations — carnegieclassifications.acenet.edu</p>`
  }
});

// ══ DOOR 3: FUNDING ══
doors.push({
  num:3, icon:"💰", color:"#52c41a", name:"বণিকের প্রস্তাব",
  subtitle:"The Merchant's Offer", tech:"Funding: RA, TA, Fellowship",
  spirit:"রিজিক — রিযিক আসমান থেকে, কিন্তু চেষ্টা তোমার",
  secret:"ফান্ডেড PhD-তে তুমি টিউশন দাও না। উল্টো পাও $25K-$45K বৃত্তি। RA = রিসার্চ করো, TA = পড়াও, Fellowship = শুধু পড়ো। ফান্ডিং ছাড়া PhD = আত্মহত্যা।",
  recall:{
    q:"বণিক কেন তীর্থযাত্রীকে টাকা দেয়, সাথে নেয়?",
    qen:"Why does the merchant fund the pilgrim, take them along?",
    a:"কারণ তীর্থযাত্রী বণিকের কাজে সাহায্য করে — রিসার্চ করে, পড়ায়। RA = রিসার্চ করো প্রফেসরের গ্রান্টে। TA = পড়াও আন্ডারগ্র্যাডকে। বিনিময়ে টিউশন মাফ + স্টাইপেন্ড। Fellowship = কোনো কাজ নেই, শুধু রিসার্চ।",
    aen:"Because the pilgrim helps the merchant's work — researches, teaches. RA = research on a professor's grant. TA = teach undergrads. In exchange: tuition waived + stipend. Fellowship = no work obligation, just research."
  },
  story:`
<p class="scene-setting">তৃতীয় স্থান। একটা বাজারের কিনারা। বণিক করিম একটা বসতে বসে আছেন — সামনে থলে ভর্তি স্বর্ণমুদ্রা। তীর্থযাত্রীরা আসছে, সাহায্য চাইছে। করিম বলছেন — "আমি ফ্রি টাকা দিই না। তুমি আমার কাজে সাহায্য করো — আমি তোমার যাত্রার খরচ দেব।" এটাই PhD ফান্ডিংয়ের মডেল।</p>
<p class="scene-setting en">The third station. A market edge. Merchant Karim sits on a rug — before him, pouches of gold coins. Pilgrims come, seek help. Karim says — "I don't give free money. You help my work — I fund your journey." This is the PhD funding model.</p>

<div class="dialogue">মানচিত্রকার বলেছিলেন — পাঁচটি স্তর। কিন্তু আমি বলি — স্তরগুলো পার হতে চাইলে একটা জিনিস লাগবে: অর্থ। PhD ফান্ডিং ছাড়া শুরু করা = আত্মহত্যা। $50K+ টিউশন প্রতি বছর? অসম্ভব। কিন্তু ফান্ডেড PhD? তুমি টিউশন দাও না। উল্টো পাও টাকা।</div>
<div class="dialogue en">"The cartographer said — five stages. But I say — crossing them requires one thing: money. Starting PhD without funding = financial suicide. $50K+ tuition per year? Impossible. But funded PhD? You don't pay tuition. You get paid."</div>

<table class="kv-table"><tr><th>ধরন</th><th>কী করো</th><th>স্টাইপেন্ড/মাস</th><th>টিউশন</th></tr>
<tr><td class="hl">RA<br><small>Research Asst.</small></td><td>প্রফেসরের গ্রান্টে রিসার্চ (~২০ ঘ/সপ্তাহ)</td><td>$২,০০০-৪,০০০</td><td>১০০% মাফ</td></tr>
<tr><td class="hl">TA<br><small>Teaching Asst.</small></td><td>আন্ডারগ্র্যাড পড়াও (~২০ ঘ/সপ্তাহ)</td><td>$১,৫০০-৩,০০০</td><td>১০০% মাফ</td></tr>
<tr><td class="hl">Fellowship<br><small>বৃত্তি</small></td><td>কোনো কাজ নেই — ১০০% রিসার্চ (NSF GRFP, NDSEG)</td><td>$২,৫০০-৫,০০০</td><td>১০০% মাফ</td></tr></table>

<div class="callout tip"><span class="co-icon">🏆</span><div><strong>ক্রম:</strong> Fellowship &gt; RA &gt; TA। RA সবচেয়ে কাঙ্ক্ষিত কারণ কাজটাই তোমার রিসার্চ (advisor-এর গ্রান্ট লাগে)। TA-তে টিচিং দক্ষতা বাড়ে কিন্তু রিসার্চের সময় কমে। Fellowship সবচেয়ে স্বাধীন কিন্তু সবচেয়ে প্রতিযোগিতামূলক।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">$29-54K</div><div class="sc-label">বার্ষিক স্টাইপেন্ড (টিউশন ছাড়া)</div></div>
<div class="stat-card"><div class="sc-num">$50-60K</div><div class="sc-label">টিউশন মাফের মূল্য/বছর</div></div>
<div class="stat-card"><div class="sc-num">$79-114K+</div><div class="sc-label">মোট প্যাকেজের মূল্য/বছর</div></div>
<div class="stat-card"><div class="sc-num">12+24 মাস</div><div class="sc-label">OPT + STEM OPT (CS)</div></div>
</div>

<div class="svg-fig">
<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Funded PhD package value">
<text x="320" y="20" fill="#e8e6f0" font-size="13" text-anchor="middle" font-weight="bold">ফান্ডেড PhD প্যাকেজ — বছরে আসল মূল্য</text>
<rect x="80" y="60" width="200" height="120" rx="10" fill="none" stroke="#5e5c74" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="180" y="125" fill="#9290a8" font-size="12" text-anchor="middle">আন-ফান্ডেড:</text>
<text x="180" y="145" fill="#ff6b35" font-size="14" text-anchor="middle" font-weight="bold">−$50-60K টিউশন</text>
<rect x="360" y="40" width="200" height="60" rx="10" fill="rgba(82,196,26,.18)" stroke="#52c41a"/>
<text x="460" y="65" fill="#52c41a" font-size="12" text-anchor="middle" font-weight="bold">টিউশন মাফ</text>
<text x="460" y="85" fill="#e8e6f0" font-size="12" text-anchor="middle">+$50-60K মূল্য</text>
<rect x="360" y="110" width="200" height="60" rx="10" fill="rgba(94,234,212,.15)" stroke="#5eead4"/>
<text x="460" y="135" fill="#5eead4" font-size="12" text-anchor="middle" font-weight="bold">স্টাইপেন্ড</text>
<text x="460" y="155" fill="#e8e6f0" font-size="12" text-anchor="middle">+$29-54K নগদ</text>
<text x="460" y="200" fill="#f0c75e" font-size="13" text-anchor="middle" font-weight="bold">= মোট $79-114K+/বছর</text>
<text x="180" y="200" fill="#5e5c74" font-size="11" text-anchor="middle">এই পথে যেও না</text>
</svg>
<div class="fig-cap">চিত্র: "ফান্ডেড" মানে শুধু ফ্রি নয় — তুমি <em>বেতনভুক্ত গবেষক</em>। এজন্যই নিয়ম: ফান্ডিং ছাড়া PhD-তে যেও না।</div>
</div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>যাচাই করো নিজে:</strong> <em>csstipendrankings.org</em> (stipend-ভিত্তিক CS র‍্যাঙ্কিং) আর <em>phdstipends.com</em> (আসল, self-reported সংখ্যা)। মনে রাখো COL — Bay Area-র $৪K ~= Midwest-এর $২.৫K জীবনযাত্রায়।</div></div>

<div class="callout warn"><span class="co-icon">🛂</span><div><strong>আন্তর্জাতিক ছাত্রদের জন্য — বড় আপডেট (জুলাই ২০২৬):</strong> DHS "Duration of Status" (D/S) বাতিলের নিয়ম <strong>চূড়ান্ত করেছে</strong> (final rule প্রকাশ: ১৭ জুলাই ২০২৬; কার্যকর: ১৫ সেপ্টেম্বর ২০২৬)। F-1 এখন সর্বোচ্চ <strong>৪ বছরের নির্দিষ্ট মেয়াদে</strong> অ্যাডমিট হবে — অথচ PhD লাগে ৫-৭ বছর! মানে মাঝপথে <strong>Extension of Stay</strong> আবেদন করতে হবে। Grace period-ও ৬০ → ৩০ দিনে নেমেছে। আতঙ্কের কিছু নেই — extension-এর পথ আছে — কিন্তু ভর্তি হওয়ার পর প্রথম দিন থেকেই DSO-র সাথে টাইমলাইন প্ল্যান করো। স্পাউস (F-2) কাজ করতে পারে না। স্টাইপেন্ডে ট্যাক্স প্রযোজ্য (ট্রিটি-ছাড় থাকতে পারে)।</div></div>

<div class="src-box"><div class="src-label">যাচাইকৃত উৎস / Verified Sources</div>NSF GRFP (NSF 25-547): বার্ষিক $৩৭,০০০ স্টাইপেন্ড + $১৬,০০০ Cost-of-Education, ৩ বছর — শুধু US citizen/national/green-card holder — nsf.gov · DHS Final Rule "Establishing a Fixed Time Period of Admission" — Federal Register, 17 July 2026 · স্টাইপেন্ড ডেটা: csstipendrankings.org, phdstipends.com (self-reported)।</div>

<div class="dialogue">রিযিক — জীবিকা। কুরআনে আল্লাহ বলেন — "পৃথিবীতে কোনো প্রাণী নেই যার রিযিক আল্লাহর দায়িত্বে নয়।" (১১:৬)। কিন্তু রিযিক চাইলে চেষ্টা করতে হয়। PhD ফান্ডিংও তেমনি — আল্লাহ দেবেন, কিন্তু তোমাকে প্রফেসরকে ইমেইল করতে হবে, গ্রান্ট খুঁজতে হবে, ফেলোশিপের জন্য আবেদন করতে হবে। চেষ্টা ছাড়া রিযিক আসে না।</div>
<div class="dialogue en">"Rizq — provision. Allah says — 'There is no creature on earth whose provision is not Allah's responsibility.' (11:6). But provision requires effort. PhD funding too — Allah provides, but you must email professors, seek grants, apply for fellowships. Without effort, provision doesn't come."</div>`,
  senior:{
    title:"ফান্ডেড প্রোগ্রাম খোঁজো — কোথায়?",
    body:`<p><strong>ফান্ডেড CS PhD প্রোগ্রাম খোঁজার উপায়:</strong></p><p><strong>১. CSRankings.org:</strong> CS বিভাগের রিসার্চ র‍্যাঙ্কিং। দেখো কোন বিভাগে কী ফান্ডিং আছে।</p><p><strong>２. প্রতিটা বিশ্ববিদ্যালয়ের "Financial Support" পেজ:</strong> অধিকাংশ R1 বিভাগ বলে "All admitted PhD students are fully funded."</p><p><strong>３. প্রফেসরের গ্রান্ট:</strong> NSF/NIH/DARPA গ্রান্ট থাকলে তাঁরা RA নিতে পারেন। হোমপেজে "Openings" বা "Join us" দেখো।</p><p><strong>৪. সরকারি ফেলোশিপ:</strong> NSF GRFP (নাগরিক বা পারমানেন্ট রেসিডেন্ট — আন্তর্জাতিক নয়), Ford Foundation। কিন্তু অনেক ইউনিভ নিজেদের ফেলোশিপ দেয় আন্তর্জাতিকদের।</p>`
  }
});

// ══ DOOR 4: CHOOSING RESEARCH AREA ══
doors.push({
  num:4, icon:"🎯", color:"#f0c75e", name:"দিকনির্দেশকের কম্পাস",
  subtitle:"The Guide's Compass", tech:"Choosing Your Research Area",
  spirit:"কিবলা — দিক খোঁজা",
  secret:"তোমার রিসার্চ এরিয়া শুধু তোমার ক্যারিয়ার নির্ধারণ করে না — তোমার জীবনের দিক নির্ধারণ করে। AI/ML হট, কিন্তু স্যাচুরেটেড। সিস্টেমস স্থিতিশীল। HCI কম প্রতিযোগিতামূলক। তোমার আগ্রহের সাথে মার্কেটের মিল খোঁজো।",
  recall:{
    q:"দিকনির্দেশক কেন একটা দিক বেছে নিতে বলেন, সব দিকে যেতে নয়?",
    qen:"Why does the guide tell you to choose one direction, not all?",
    a:"কারণ PhD একটা এরিয়াতে ৫-৭ বছর। সব দিকে যাওয়া যায় না। AI/ML, Systems, Security, HCI — প্রতিটার নিজস্ব চ্যালেঞ্জ। তোমার আগ্রহ আর সুযোগের মিল খোঁজো। কিবলা — একটা দিক।",
    aen:"Because PhD is 5-7 years in one area. Can't go all directions. AI/ML, Systems, Security, HCI — each has its own challenge. Match your interest with opportunity. Qibla — one direction."
  },
  story:`
<p class="scene-setting">চতুর্থ স্থান। একটা পাহাড়ি কুটির। দিকনির্দেশক তালহা হাতে একটা পিতলের কম্পাস নিয়ে বসে আছেন — বয়স্ক, শান্ত, চোখে অভিজ্ঞতা। সামনে একটা বড় মানচিত্র — তাতে রিসার্চ এরিয়ার দিক। "এই দিকে AI/ML," তিনি বললেন, "কিন্তু ভিড়। এই দিকে Security — স্থিতিশীল। এই দিকে HCI — কম ভিড়। তোমার কোন দিকে যেতে হবে?"</p>
<p class="scene-setting en">The fourth station. A mountain cabin. Guide Talha sits with a brass compass — elderly, calm, experienced eyes. Before him a large map — research area directions. "This way AI/ML," he said, "but crowded. This way Security — stable. This way HCI — less crowded. Which way do you need to go?"</p>

<div class="dialogue">বণিক বলেছিলেন — ফান্ডিং। কিন্তু আমি বলি — ফান্ডিং কোন এরিয়ায়? তোমার রিসার্চ এরিয়া শুধু তোমার ক্যারিয়ার নির্ধারণ করে না — তোমার জীবনের দিক নির্ধারণ করে। ভুল এরিয়া = ৫ বছর কষ্ট। সঠিক এরিয়া = ৫ বছর আনন্দ।</div>
<div class="dialogue en">"The merchant said — funding. But I say — funding for which area? Your research area doesn't just determine your career — it determines your life's direction. Wrong area = 5 years of suffering. Right area = 5 years of joy."</div>

<table class="kv-table"><tr><th>এরিয়া</th><th>উদাহরণ</th><th>প্রতিযোগিতা</th><th>ফান্ডিং</th></tr>
<tr><td class="hl">🔥 Hot</td><td>AI/ML, NLP, Vision, Robotics</td><td>সর্বোচ্চ (১-৩% গ্রহণ)</td><td>সর্বোচ্চ</td></tr>
<tr><td class="hl">🟢 Stable</td><td>Systems, Security, Networks, DB</td><td>মাঝারি</td><td>ভালো, স্থিতিশীল</td></tr>
<tr><td class="hl">🔵 Emerging</td><td>HCI, Quantum, CompBio, EdTech</td><td>কম</td><td>মাঝারি–বাড়ন্ত</td></tr>
<tr><td class="hl">🟣 Niche</td><td>Theory, PL/Compilers, SE</td><td>ছোট ল্যাব, নির্দিষ্ট</td><td>পরিবর্তনশীল</td></tr></table>

<div class="callout info"><span class="co-icon">🏛️</span><div><strong>শীর্ষ ল্যাব:</strong> AI/ML → Stanford AI, MIT CSAIL, CMU ML · Systems → Berkeley Sky/RISE, UW, CMU · HCI → CMU HCII, Georgia Tech, MIT Media Lab। কিন্তু নাম নয় — <em>প্রফেসরের সাম্প্রতিক পেপার</em> পড়ে ঠিক করো কোথায় ফিট।</div></div>

<div class="callout tip"><span class="co-icon">🎯</span><div><strong>প্রোফাইল-ভিত্তিক কৌশল:</strong> High-profile → AI/ML at R1 (reach)। Mid-profile → Systems/Security at R1 বা AI/ML at R2। Low-profile → Emerging/HCI at R2 বা niche এরিয়া, যেখানে ভিড় কম কিন্তু ভালো কাজের সুযোগ বেশি।</div></div>

<div class="svg-fig">
<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Interest skill opportunity venn">
<circle cx="270" cy="105" r="80" fill="rgba(94,234,212,.12)" stroke="#5eead4" stroke-width="1.5"/>
<circle cx="370" cy="105" r="80" fill="rgba(240,199,94,.12)" stroke="#f0c75e" stroke-width="1.5"/>
<circle cx="320" cy="180" r="80" fill="rgba(125,211,252,.12)" stroke="#7dd3fc" stroke-width="1.5"/>
<text x="235" y="75" fill="#5eead4" font-size="13" text-anchor="middle" font-weight="bold">আগ্রহ</text>
<text x="410" y="75" fill="#f0c75e" font-size="13" text-anchor="middle" font-weight="bold">দক্ষতা</text>
<text x="320" y="238" fill="#7dd3fc" font-size="13" text-anchor="middle" font-weight="bold">সুযোগ (ল্যাব+ফান্ডিং)</text>
<text x="320" y="130" fill="#ff6b35" font-size="14" text-anchor="middle" font-weight="bold">🎯</text>
<text x="320" y="150" fill="#e8e6f0" font-size="11" text-anchor="middle">তোমার এরিয়া</text>
<text x="90" y="120" fill="#5e5c74" font-size="10" text-anchor="middle">আগ্রহ আছে, দক্ষতা নেই</text>
<text x="90" y="134" fill="#5e5c74" font-size="10" text-anchor="middle">= আগে শেখো</text>
<text x="555" y="120" fill="#5e5c74" font-size="10" text-anchor="middle">দক্ষতা আছে, আগ্রহ নেই</text>
<text x="555" y="134" fill="#5e5c74" font-size="10" text-anchor="middle">= ৫ বছর টিকবে না</text>
</svg>
<div class="fig-cap">চিত্র: তিনটার ছেদবিন্দুই তোমার এরিয়া। দুটো মিললেও ৫-৭ বছরের জন্য যথেষ্ট নয়।</div>
</div>

<div class="callout warn"><span class="co-icon">⚖️</span><div><strong>Hot ≠ সহজ:</strong> AI/ML-এ ফান্ডিং বেশি কিন্তু গ্রহণ-হার সবচেয়ে কম আর প্রতিযোগীরা প্রকাশনা নিয়ে আসে। কম-ভিড় এরিয়ায় একই পরিশ্রমে তুমি দ্রুত "top student" হতে পারো — এটাই অনেক সময় স্মার্ট বাজি।</div></div>

<div class="dialogue">কিবলা — দিক। নামাজে এক কিবলা — কাবার দিক। PhD-তেও এক দিক — তোমার রিসার্চ এরিয়া। দিক ভুল হলে নামাজ হয় না। এরিয়া ভুল হলে PhD হয় না। কিন্তু কিবলা বেছে নেওয়া যায় না — নির্দিষ্ট। PhD এরিয়া বেছে নেওয়া যায় — কিন্তু সাবধানে। তোমার আগ্রহ, তোমার দক্ষতা, এবং মার্কেটের সুযোগ — তিনটির মিল খোঁজো।</div>
<div class="dialogue en">"Qibla — direction. In prayer, one qibla — toward the Kaaba. In PhD too, one direction — your research area. Wrong direction means no valid prayer. Wrong area means no PhD. But qibla is fixed — you can't choose it. PhD area you can choose — but carefully. Match your interest, your skill, and market opportunity."</div>`,
  senior:{
    title:"কীভাবে এরিয়া বেছে নেবে — ৩-ধাপ",
    body:`<p><strong>ধাপ ১: কী ভালোবাসো?</strong> কোন বিষয় পড়লে উত্তেজনা হয়? কোন সমস্যা নিয়ে ঘণ্টা ভাবতে পারো? সেটাই তোমার এরিয়া।</p><p><strong>ধাপ ২: কী পারো?</strong> গণিতে ভালো? AI/ML। কোডিং? Systems। মানুষ? HCI। তোমার দক্ষতা ম্যাচ করো।</p><p><strong>ধাপ ৩: কোথায় সুযোগ?</strong> CSRankings.org-এ গিয়ে দেখো কোন এরিয়ায় কোন প্রফেসর কাজ করছেন। ৩-৫ জন প্রফেসর বেছে নাও। তাঁদের পেপার পড়ো — ভালো লাগলে সেটাই তোমার এরিয়া।</p>`
  }
});

// ══ DOOR 5: SOP & APPLICATION ══
doors.push({
  num:5, icon:"📝", color:"#ff6b35", name:"পণ্ডিতের স্ক্রল",
  subtitle:"The Scholar's Scroll", tech:"SOP & Application Materials",
  spirit:"নিয়্যাত — কাগজে লেখা সংকল্প",
  secret:"SOP তোমার জীবনী নয় — তোমার গবেষণার নিয়ত। প্রতিটা বিশ্ববিদ্যালয়ের জন্য আলাদা। এক সাইজ ফিট অল নয়। রিসার্চ প্রশ্ন, কেন এই বিশ্ববিদ্যালয়, কেন এই প্রফেসর — স্পষ্ট।",
  recall:{
    q:"পণ্ডিত কেন প্রতিটা স্ক্রল আলাদাভাবে লেখেন?",
    qen:"Why does the scholar write each scroll separately?",
    a:"কারণ প্রতিটা বিশ্ববিদ্যালয় আলাদা। প্রতিটা প্রফেসরের গবেষণা আলাদা। এক SOP সবখানে পাঠালে বোঝা যায় তুমি আগ্রহী নও। প্রতিটার জন্য আলাদা — কেন এই বিশ্ববিদ্যালয়, কেন এই প্রফেসর।",
    aen:"Because each university is different. Each professor's research is different. Sending one SOP everywhere shows you're not interested. Each one separate — why this university, why this professor."
  },
  story:`
<p class="scene-setting">পঞ্চম স্থান। একটা শান্ত গ্রন্থাগার। পণ্ডিত আনোয়ার একটা স্ক্রল লিখছেন — কিন্তু সব বিশ্ববিদ্যালয়ের জন্য এক স্ক্রল নয়। প্রতিটার জন্য আলাদা। "কেন?" তুমি জিজ্ঞেস করলে। "কারণ প্রতিটা বিশ্ববিদ্যালয় আলাদা প্রশ্ন করে। আমি তাদের ভাষায় উত্তর দিই।"</p>
<p class="scene-setting en">The fifth station. A quiet library. Scholar Anwar writes a scroll — but not the same scroll for all universities. Each one separate. "Why?" you asked. "Because each university asks a different question. I answer in their language."</p>

<div class="dialogue">দিকনির্দেশক বলেছিলেন — এরিয়া বেছে নাও। কিন্তু আমি বলি — এরিয়া বেছে নেওয়ার পর সেটা কাগজে প্রকাশ করতে হয়। SOP — Statement of Purpose। এটা তোমার জীবনী নয়। এটা তোমার গবেষণার নিয়ত। কেন তুমি PhD করতে চাও, কী নিয়ে কাজ করতে চাও, কেন এই বিশ্ববিদ্যালয়।</div>
<div class="dialogue en">"The guide said — choose your area. But I say — after choosing, you must express it on paper. SOP — Statement of Purpose. This isn't your biography. It's your research intention. Why you want PhD, what you want to work on, why this university."</div>

<ul class="checklist">
<li><strong>SOP (১-২ পৃষ্ঠা)</strong> — কেন PhD, কোন রিসার্চ প্রশ্ন, কেন এই ইউনিভ/প্রফেসর, তোমার প্রস্তুতি। <em>সবচেয়ে গুরুত্বপূর্ণ; প্রতিটা ইউনিভের জন্য আলাদা।</em></li>
<li><strong>LOR — ৩টি</strong> — "ভালো ছাত্র" নয়, "গবেষক হবে" এমন চিঠি। অন্তত একটি যিনি তোমার গবেষণা/কাজ ঘনিষ্ঠভাবে জানেন।</li>
<li><strong>Transcripts</strong> — সব ডিগ্রি; GPA ৩.৫+ ভালো। কিছু ইউনিভে WES মূল্যায়ন লাগে।</li>
<li><strong>CV (একাডেমিক ফরম্যাট)</strong> — শিক্ষা, প্রজেক্ট, প্রকাশনা/প্রেজেন্টেশন, দক্ষতা।</li>
<li><strong>Writing sample / portfolio</strong> — কিছু প্রোগ্রামে; রিসার্চ পেপার বা টেকনিক্যাল রিপোর্ট।</li>
<li><strong>English proficiency (TOEFL/IELTS)</strong> — US ডিগ্রি থাকলে সাধারণত ওয়েভ হয়।</li>
<li><strong>Application fee</strong> — $৭৫-১২৫/ইউনিভ; অনেক জায়গায় fee waiver পাওয়া যায়।</li>
</ul>

<div class="callout warn"><span class="co-icon">📋</span><div><strong>GRE (২০২৬ আপডেট):</strong> ছবিটা মিশ্র — post-COVID "সবাই optional" trend আংশিক <em>উল্টে গেছে</em>। Top-50-এর একটা বড় অংশ PhD-তে GRE আবার require বা "strongly recommend" করছে; কেউ কেউ (যেমন UMinn CS) GRE <em>নেয়ই না</em>। তাই নিয়ম একটাই: <strong>প্রতিটা প্রোগ্রামের admissions পেজ নিজে যাচাই করো</strong> — অনুমান নয়। "Optional" মানে "গণনা হয় না" নয় — ভালো স্কোর থাকলে দাও।</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খারাপ SOP</div>"আমি ছোটবেলা থেকে কম্পিউটার ভালোবাসি। আমি ভালো ছাত্র ছিলাম। আমি কঠোর পরিশ্রমী। আমি আপনাদের বিশ্ববিদ্যালয়ে পড়তে চাই কারণ এটা ভালো।" — জেনেরিক। কোনো রিসার্চ প্রশ্ন নেই। কোনো প্রফেসরের নাম নেই। বাতিল।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ভালো SOP</div>"আমি LedgerPilot-এ কাজ করার সময় লক্ষ্য করেছি যে NACHA ফাইল জেনারেশনে LLM ভুল করে। আমি একটি RAG সিস্টেম বানিয়েছি যা ৪০% ভুল কমায়। এই অভিজ্ঞতা থেকে আমি গবেষণার প্রশ্ন পেলাম — কীভাবে structured output-এ LLM নির্ভরতা বাড়ানো যায়? আমি প্রফেসর X-এর গবেষণায় আগ্রহী কারণ তাঁর recent paper on constrained decoding আমার কাজের সাথে মেলে।" — নির্দিষ্ট। রিসার্চ প্রশ্ন আছে। প্রফেসরের নাম আছে। গৃহীত।</div>
</div>

<div class="svg-fig">
<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SOP anatomy">
<text x="320" y="20" fill="#e8e6f0" font-size="13" text-anchor="middle" font-weight="bold">SOP-এর শারীরস্থান — ১.৫ পৃষ্ঠা</text>
<rect x="120" y="34" width="400" height="34" rx="8" fill="rgba(255,107,53,.15)" stroke="#ff6b35"/><text x="320" y="56" fill="#ff6b35" font-size="12" text-anchor="middle">১. Hook — যে অভিজ্ঞতা প্রশ্ন জাগালো (২০%)</text>
<rect x="120" y="76" width="400" height="34" rx="8" fill="rgba(240,199,94,.15)" stroke="#f0c75e"/><text x="320" y="98" fill="#f0c75e" font-size="12" text-anchor="middle">২. Research Question — কী জানতে চাও (১৫%)</text>
<rect x="120" y="118" width="400" height="48" rx="8" fill="rgba(94,234,212,.15)" stroke="#5eead4"/><text x="320" y="140" fill="#5eead4" font-size="12" text-anchor="middle">৩. Preparation — প্রজেক্ট, কাজ, রিসার্চ (৩৫%)</text><text x="320" y="157" fill="#9290a8" font-size="10" text-anchor="middle">সবচেয়ে বড় অংশ — প্রমাণ, দাবি নয়</text>
<rect x="120" y="174" width="400" height="34" rx="8" fill="rgba(125,211,252,.15)" stroke="#7dd3fc"/><text x="320" y="196" fill="#7dd3fc" font-size="12" text-anchor="middle">৪. Fit — কেন এই ইউনিভ, কোন প্রফেসর, কোন পেপার (২০%)</text>
<rect x="120" y="216" width="400" height="28" rx="8" fill="rgba(179,127,235,.15)" stroke="#b37feb"/><text x="320" y="235" fill="#b37feb" font-size="12" text-anchor="middle">৫. Future — PhD-এর পরে কী (১০%)</text>
</svg>
<div class="fig-cap">চিত্র: ভাগগুলোর ওজন লক্ষ করো — জীবনী নয়, প্রস্তুতি ও ফিটই SOP-এর হৃদয়। ৪ নম্বর অংশ প্রতিটা ইউনিভের জন্য নতুন করে লেখো।</div>
</div>

<div class="dialogue">নিয়্যাত — সংকল্প। হজ্জের আগে নিয়ত — কেন তুমি যাচ্ছ। PhD-এর আগেও নিয়ত — SOP-তে লেখা। কেন? কী নিয়ে? কোথায়? নিয়ত স্পষ্ট না হলে হজ্জ হয় না। SOP স্পষ্ট না হলে অ্যাডমিশন হয় না। কমিটি শুধু তোমার নিয়ত পড়ে — তোমার মার্কশিট নয়। নিয়তই তোমার পরিচয়।</div>
<div class="dialogue en">"Niyyah — intention. Before Hajj, intention — why you're going. Before PhD, intention too — written in the SOP. Why? What? Where? Without clear intention, no Hajj. Without clear SOP, no admission. The committee reads your intention — not your transcript. Intention is your identity."</div>`,
  senior:{
    title:"SOP Formula — প্রতিটা ইউনিভের জন্য",
    body:`<p><strong>SOP কাঠামো (১.৫ পৃষ্ঠা):</strong></p><p><strong>১. Hook (১ প্যারা):</strong> একটা নির্দিষ্ট অভিজ্ঞতা যা তোমার রিসার্চ কিউরিওসিটি জাগিয়েছে।</p><p><strong>২. Research Question (১ প্যারা):</strong> তুমি কী উত্তর খুঁজতে চাও? নির্দিষ্ট প্রশ্ন।</p><p><strong>৩. Preparation (১-২ প্যারা):</strong> তোমার পূর্বের কাজ — LedgerPilot, প্রজেক্ট, কোনো রিসার্চ। কীভাবে তৈরি করেছে তোমাকে।</p><p><strong>৪. Fit (১ প্যারা):</strong> কেন এই বিশ্ববিদ্যালয়? কোন প্রফেসর? কোন ল্যাব? কোন পেপার? নির্দিষ্ট!</p><p><strong>৫. Future (১ প্যারা):</strong> PhD-এর পর কী? একাডেমিয়া? ইন্ডাস্ট্রি রিসার্চ?</p>`
  }
});
