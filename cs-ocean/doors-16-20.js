// ════════════════════════════════════════
// কম্পিউটার সায়েন্সের মহাসমুদ্র — DOORS 16-20
// Sea 7: Theory (D16) · Sea 8: Quantum (D17-D18) · Sea 9: Robotics (D19) · Sea 10: Synthesis (D20)
// ════════════════════════════════════════

// ══ DOOR 16: ALGORITHMS & COMPLEXITY ══
doors.push({
  num:16, icon:"📐", color:"#fbbf24", name:"তত্ত্বের চূড়া",
  subtitle:"The Peak of Theory", tech:"Algorithms & Complexity",
  spirit:"বুরহান — দলিল, নিশ্চিত প্রমাণ",
  secret:"Theory হলো CS-এর সবচেয়ে গভীর, সবচেয়ে গাণিতিক ডোমেইন — P vs NP, complexity, cryptography-র ভিত্তি, learning theory। কঠিন, কিন্তু যারা যায় তারা সবচেয়ে সম্মানিত। একবার প্রমাণিত theorem চিরন্তন — Euclid আজও সত্য। niche (কম ছাত্র, কম ভিড়), কিন্তু academic সম্মান সর্বোচ্চ। গণিত ভালোবাসলে যাও — কিন্তু শক্তিশালী হলে।",
  recall:{
    q:"ডেভিড কেন বললেন চূড়ায় পৌঁছাতে এক পা এক পা করে উঠতে হয়, কোনো shortcut নয়?",
    qen:"Why did David say reaching the peak requires stepping up one step at a time, no shortcuts?",
    a:"কারণ তত্ত্ব হলো এক পা এক পা করে উঠা — প্রতিটা ধাপ একটা উপপাদ্য, একটা প্রমাণ। কোনো shortcut নেই। প্রতিটা প্রমাণ শক্ত হতে হয় — দুর্বল প্রমাণ পড়ে যাওয়ার সিঁড়ি। গণিতের পথ ধীর, কিন্তু একবার চূড়ায় পৌঁছালে তুমি সবকিছু দেখো — সম্পূর্ণ দৃশ্যমান। একটা theorem যে একবার প্রমাণিত, তা চিরকাল সত্য। এটাই বুরহান।",
    aen:"Because theory is climbing step by step — each step a theorem, a proof. No shortcuts. Each proof must be solid — a weak proof is a falling stair. The mathematical path is slow, but once at the peak you see everything — the complete picture. A theorem once proven, is true forever. This is burhan."
  },
  story:`
<p class="scene-setting">ষোড়শ দরজা। ক্লারার ভাষার কারখানা পেরিয়ে তুমি একটা বিশাল পাথরের সিঁড়ির পাদদেশে — সিঁড়ি উপরে উঠে গেছে মেঘের ভেতরে, চূড়া দেখা যায় না। প্রতিটা ধাপে খোদাই করা সংখ্যা ও প্রতীক। সিঁড়ির কিনারায় দাঁড়িয়ে ডেভিড — লম্বা, রোগা, চশমা নাকে, হাতে একটা খাতা ভর্তি সমীকরণ ও একটা complexity chart, চোখে গভীরতা। ক্লারা পেছন থেকে ইশারায় বলছেন — এটা সবচেয়ে কঠিন চূড়া। উঁচু থেকে আসা ঠান্ডা বাতাস, পাথরের কঠিন স্পর্শ, দূরে বাজপাখির ডাক।</p>
<p class="scene-setting en">The sixteenth door. Past Clara's language workshop, you reach the foot of a vast stone staircase — it climbs into the clouds, the peak unseen. Each step carved with numbers and symbols. At the staircase's edge stands David — tall, thin, glasses on nose, a notebook full of equations and a complexity chart in hand, depth in his eyes. Clara gestures from behind — this is the hardest peak. Cold wind from above, the hard touch of stone, a distant eagle's cry.</p>

<div class="dialogue">ক্লারা বললেন, "আমি ভাষা বানাই, কিন্তু ডেভিড জিজ্ঞেস করেন — সেই ভাষায় লেখা কোড কত দ্রুত চলতে পারে? সর্বোচ্চ কত?" ডেভিড সিঁড়ির একটা ধাপে হাত বুলিয়ে দিলেন। "এই ধাপ — এটা একটা theorem। যত ওপরে যাবে, তত কঠিন theorem। কিন্তু প্রতিটা ধাপ আগের ধাপের উপর দাঁড়িয়ে। কোনো ধাপ বাদ দিলে পড়ে যাবে।" তিনি খাতাটা খুললেন — P, NP, PSPACE, EXPTIME লেখা চার্ট দেখালেন। "সব সমস্যা সমান নয়। কিছু সহজ (P), কিছু কঠিন (NP-hard)। sorting করা সহজ — কিন্তু সবচেয়ে দ্রুত sorting কী? সেটাই theory জিজ্ঞেস করে।"</div>
<div class="dialogue en">Clara said, "I make languages, but David asks — how fast can code written in that language run? At most how fast?" David stroked a step. "This step — it's a theorem. The higher you go, the harder. But each step stands on the previous. Skip one and you fall." He opened his notebook — showed a chart inscribed P, NP, PSPACE, EXPTIME. "Not all problems are equal. Some easy (P), some hard (NP-hard). Sorting is easy — but what's the fastest sorting? That's what theory asks."</div>

<div class="diagram">
  <div class="diag-title">Complexity Zoo — কোন সমস্যা কতটা কঠিন?</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowAmber16" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#fbbf24"/></marker>
    </defs>
    <!-- nested complexity classes (concentric) -->
    <ellipse cx="280" cy="120" rx="240" ry="80" class="cell" style="fill:none;stroke:#9290a8"/>
    <text class="lbl-sm" x="500" y="50" fill="#9290a8">EXPTIME</text>
    <ellipse cx="280" cy="125" rx="180" ry="60" class="cell-good" style="fill:none;stroke:#52c41a"/>
    <text class="lbl-sm" x="445" y="80" fill="#52c41a">PSPACE</text>
    <ellipse cx="280" cy="130" rx="130" ry="44" class="cell-hot" style="fill:none;stroke:#ff6b35"/>
    <text class="lbl-sm" x="400" y="105" fill="#ff6b35">NP</text>
    <ellipse cx="280" cy="132" rx="80" ry="28" class="cell-cyan" style="fill:none;stroke:#3dd6c4"/>
    <text class="lbl-sm" x="280" y="135" fill="#3dd6c4" style="font-weight:700">P</text>
    <text class="lbl-sm" x="280" y="148" fill="#5e5c74">sorting, shortest path</text>
    <!-- P vs NP question -->
    <text class="lbl-sm" x="280" y="200" fill="#fbbf24" style="font-weight:700">P = NP?  ←— হাজার বছরের প্রশ্ন, $১M prize</text>
    <text class="lbl-sm" x="280" y="218" fill="#5e5c74">NP: যাচাই সহজ (Sudoku), কিন্তু সমাধান কঠিন কি? P-র ভেতরে?</text>
  </svg>
  <div class="diag-cap">complexity class-গুলো nested — P (সহজতম) থেকে EXPTIME পর্যন্ত। P vs NP হলো CS-এর সবচেয়ে বড় open problem — হাজার বছরের সমস্যা, Clay Millennium Prize।</div>
</div>

<div class="code-block">Algorithms & Complexity — গবেষণার শাখাসমূহ:

১. ALGORITHM DESIGN
   - Graph, approximation, online, randomized
   - Streaming, sublinear, property testing
   - Smooth analysis, algorithm engineering

২. COMPLEXITY THEORY (গভীরতম)
   - P vs NP, circuit/communication complexity
   - PCP theorem, hardness of approximation
   - Fine-grained complexity (SETH, OMv)

৩. CRYPTO THEORY (Door 8 সাথে)
   - Provable security, reductions
   - Zero-knowledge, MPC, FHE foundations
   - Lattice crypto foundations (PQ — Door 18)

৪. LEARNING THEORY (Door 4 সাথে)
   - PAC learning, sample complexity
   - Online learning, regret bounds
   - Deep learning theory (why NN generalize?)

৫. ALGORITHMIC GAME THEORY
   - Mechanism design, auctions, matching
   - Price of anarchy, equilibrium computation
   - Fair division, social choice

৬. BEYOND WORST-CASE & APPLICATIONS
   - Average-case, smoothed analysis
   - Algorithms for ML, science (Door 20)
   - Quantum algorithms (Door 17)</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">📐 Algorithms</td><td>Approx, online, streaming, randomized</td><td>STOC, FOCS, SODA, ESA</td></tr>
<tr><td class="hl">🧮 Complexity</td><td>P vs NP, PCP, fine-grained, comm.</td><td>STOC, FOCS, CCC, ITCS</td></tr>
<tr><td class="hl">🔐 Crypto Theory</td><td>Provable, ZK, MPC, lattice</td><td>CRYPTO, TCC, EUROCRYPT</td></tr>
<tr><td class="hl">🤖 Learning Theory</td><td>PAC, online, DL theory</td><td>COLT, NeurIPS, ICML</td></tr>
<tr><td class="hl">🎮 AGT</td><td>Mechanism, auction, matching, fair</td><td>EC, STOC, WINE</td></tr>
<tr><td class="hl">🌌 Quantum algo</td><td>Shor, Grover, complexity (Door 17)</td><td>QIP, STOC, TQC</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৬-১০%</div><div class="sc-label">গ্রহণের হার (কম ছাত্র, কম ভিড়)</div></div>
<div class="stat-card"><div class="sc-num">$২০০M+</div><div class="sc-label">NSF theory ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$২০০-৫০০K+</div><div class="sc-label">quant finance (Jane St., RenTech, Two Sigma)</div></div>
<div class="stat-card"><div class="sc-num">সর্বোচ্চ</div><div class="sc-label">academic সম্মান, চিরন্তন প্রমাণ</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Theory = শুধু abstract math, কোনো practical value নেই। industry-তে কেউ theory চায় না।" ভুল। cryptography-র পুরো ভিত্তি (TLS, blockchain, PQ crypto) theory থেকে এসেছে। mechanism design = Google ad auction, matching = medical residency। quant finance theory গবেষকদের কাছে ছুটে আসে। P vs NP-র উত্তর পুরো ক্রিপ্টোগ্রাফি বদলে দেবে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"Theory হলো CS-এর মেরুদণ্ড — cryptography, ML, optimization-র ভিত্তি। কঠিন, কিন্তু একবার প্রমাণিত theorem চিরন্তন। niche, কিন্তু সম্মান সর্বোচ্চ, quant finance-তে সর্বোচ্চ বেতন। গণিত প্রিয়, abstract চিন্তা পছন্দ করলে — সেরা জায়গা। P vs NP = হাজার বছরের প্রশ্ন।"</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Reality check:</strong> theory গাণিতিক — pure coding নয়। গণিত (proof, abstract algebra, probability) শক্ত না হলে কঠিন। তুমি DSA Bazaar (Book 2) করেছ — algorithms পরিচিত, কিন্তু theory হলো algorithms-এর গভীরে যাওয়া, শুধু implement নয়। সত্যিই গণিত ভালোবাসলে যাও।</div></div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> fine-grained complexity (SETH-based lower bounds), DL theory (why over-parameterized generalize — double descent), algorithmic fairness theory, quantum complexity (Door 17), lattice crypto theory (PQ ভিত্তি), AGT in AI (LLM mechanism, ২০২৫)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ⚠️ সতর্কতার সাথে — pure theory গাণিতিক, তোমার developer পটভূমির সরাসরি প্রয়োগ নয়। ✅ গণিত (proof, abstract algebra) শক্ত হলে যাও · ✅ সবচেয়ে গভীর প্রশ্ন (P vs NP) নিয়ে ভাবতে চাইলে · ❌ গণিত দুর্বল বা কোডিং বেশি পছন্দ হলে এড়াও। 💡 learning theory (DL কেন কাজ করে) = theory + AI crossover, তোমার AI আগ্রহের সাথে মিলে।</div></div>

<div class="dialogue">"তোমার একটা সুবিধা আছে," ডেভিড বললেন। "তুমি DSA Bazaar (Book 2) করেছ — algorithms তোমার পরিচিত। কিন্তু theory হলো algorithms-এর গভীরে যাওয়া। তুমি জানো quicksort কীভাবে কাজ করে — কিন্তু theory জিজ্ঞেস করে: সবচেয়ে দ্রুত sorting কি সম্ভব? কেন? এই কেন-এর উত্তরই theory।" তিনি থামলেন। "তবে সত্যি বলতে — তুমি developer, কোডিং ভালোবাসো। pure theory তোমার জন্য নাও হতে পারে। কিন্তু learning theory — কেন deep learning কাজ করে — সেটা তোমার AI আগ্রহের সাথে মিলে। সেখানে যাও।"</div>
<div class="dialogue en">"You have an advantage," David said. "You've done DSA Bazaar (Book 2) — algorithms are familiar. But theory is going deeper into algorithms. You know how quicksort works — but theory asks: what's the fastest possible sorting? Why? The answer to that why is theory." He paused. "But honestly — you're a developer, you love coding. Pure theory may not be for you. But learning theory — why deep learning works — that fits your AI interest. Go there."</div>

<div class="dialogue">বুরহান — দলিল, নিশ্চিত প্রমাণ। কুরআনে আল্লাহ বলেন: "আমি প্রতিটা জিনিসের দলিল দিয়েছি।" তত্ত্ব হলো বুরহান — নিশ্চিত প্রমাণ। অন্যান্য ডোমেইনে তুমি experiment দিয়ে প্রমাণ করো — কিন্তু experiment ভুল হতে পারে। theory-তে তুমি proof দিয়ে প্রমাণ করো — proof চিরন্তন। একবার প্রমাণিত theorem কখনো বদলায় না। Euclid-এর theorem আজও সত্য, হাজার বছর পরেও সত্য। এটা বুরহান — নিশ্চিত জ্ঞান, চিরন্তন সত্য। যে বুরহান খোঁজে, সে চিরন্তন সত্য খোঁজে — আর সেটাই সবচেয়ে সম্মানিত যাত্রা।</div>
<div class="dialogue en">Burhan — proof, certain evidence. Allah says: "We have given proof for everything." Theory is burhan — certain proof. In other domains you prove by experiment — but experiments can be wrong. In theory you prove with proof — and proof is eternal. A proven theorem never changes. Euclid's theorem is true today, true in a thousand years. This is burhan — certain knowledge, eternal truth. One who seeks burhan, seeks eternal truth — and that is the most honored journey.</div>

<div class="secret-box">📐 Theory: CS-এর সবচেয়ে গভীর ডোমেইন। কঠিন, কিন্তু সবচেয়ে সম্মানিত। গণিত, প্রমাণ, complexity (P vs NP)। niche (৬-১০%), quant finance-তে সর্বোচ্চ বেতন। গণিত ভালোবাসলে যাও — তবে learning theory = theory+AI crossover, তোমার জন্য বেশি মানানসই।</div>`,
  senior:{
    title:"Theory PhD — গাণিতিক Path",
    body:`<p><strong>গণিত শক্ত হলেই যাও:</strong> pure theory (complexity, algorithms) গাণিতিক — abstract algebra, real analysis, probability শক্ত দরকার। সত্যিই গণিত ভালোবাসলে যাও, নাহলে এড়াও। 'Introduction to Algorithms' (CLRS) ও 'Computational Complexity' (Arora-Barak) দিয়ে self-test করো।</p><p><strong>Learning theory = theory+AI crossover:</strong> "DL কেন generalize করে?" — এটা সবচেয়ে বড় open theory question। double descent, NTK, implicit bias — এখানে theory ও AI মিলে। তোমার AI আগ্রহের সাথে মানানসই। COLT conference-এ লক্ষ্য করো।</p><p><strong>Quant finance = সর্বোচ্চ বেতন:</strong> Jane Street, Renaissance Technologies, Two Sigma, Citadel — theory গবেষকদের কাছে ছুটে আসে, $২০০K-৫০০K+ starting। তবে industry, academia নয় — research একই, culture আলাদা।</p><p><strong>AGT = applied theory:</strong> algorithmic game theory (auction, matching, mechanism) — Google/Meta ad system-এ সরাসরি প্রয়োগ। EC conference। economics + theory crossover, niche কিন্তু industry-প্রাসঙ্গিক।</p>`
  }
});

// ══ DOOR 17: QUANTUM COMPUTING (placeholder) ══
doors.push({
  num:17, icon:"⚛️", color:"#818cf8", name:"কোয়ান্টামের কণা",
  subtitle:"The Quantum Particle", tech:"Quantum Computing",
  spirit:"লাতাইফ — সূক্ষ্ম, অদৃশ্য কিন্তু সত্য",
  secret:"Quantum computing — Shor, Grover, VQE, error correction। ভবিষ্যতের ডোমেইন, এখন শুরু।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ১৭ — কোয়ান্টামের কণা। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 17 — the Quantum Particle. Full deep dive coming soon.</p>`
});

// ══ DOOR 18: POST-QUANTUM CRYPTO (placeholder) ══
doors.push({
  num:18, icon:"🔏", color:"#818cf8", name:"ভবিষ্যতের তালা",
  subtitle:"The Future Lock", tech:"Post-Quantum Cryptography",
  spirit:"আহসান — সুরক্ষিত রাখা, শক্তিশালী আমানত",
  secret:"Post-quantum crypto — lattice, code, hash-based signatures। কোয়ান্টাম আক্রমণের বিরুদ্ধে সুরক্ষা।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ১৮ — ভবিষ্যতের তালা। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 18 — the Future Lock. Full deep dive coming soon.</p>`
});

// ══ DOOR 19: ROBOTICS & AUTONOMOUS SYSTEMS (placeholder) ══
doors.push({
  num:19, icon:"🤖", color:"#f97316", name:"যন্ত্রের প্রাণ",
  subtitle:"The Soul of Machines", tech:"Robotics & Autonomous Systems",
  spirit:"আমানত — আস্থা, দায়িত্ব পালন",
  secret:"Robotics — perception, planning, control, autonomous vehicles, surgical robots। CS + ME + EE।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ১৯ — যন্ত্রের প্রাণ। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 19 — the Soul of Machines. Full deep dive coming soon.</p>`
});

// ══ DOOR 20: EMERGING + PHD SELECTION FRAMEWORK (placeholder) ══
doors.push({
  num:20, icon:"🧭", color:"#38bdf8", name:"নেভিগেটরের পছন্দ",
  subtitle:"The Navigator's Choice", tech:"Emerging Domains + PhD Selection Framework",
  spirit:"তাওফিক — সঠিক পথে চলা, আল্লাহর সাহায্য",
  secret:"Emerging domains (AI4Science, Climate, Edge AI, NeuroAI) + PhD selection framework: interest × strength × market × purpose।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ২০ — নেভিগেটরের পছন্দ। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 20 — the Navigator's Choice. Full deep dive coming soon.</p>`
});
