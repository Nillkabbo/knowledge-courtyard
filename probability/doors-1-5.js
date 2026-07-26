const doors = [];

// ═══════════════════════════════════════════
// DOOR 1 — The Belief Updater (Bayes)
// ═══════════════════════════════════════════
doors.push({
  num: 1,
  icon: "🔄",
  color: "#0ea5e9",
  tagline: "বিশ্বাসের আপডেটার — Belief Updater",
  name: "The Belief Updater",
  subtitle: "Bayes Theorem",
  tech: "Bayes · Prior · Posterior",
  secret: "Bayes: P(H|D) = P(D|H)·P(H)/P(D)। 99% accurate fraud test → only 1% real fraud! Base rate fallacy।",
  story: `<p class="scene-setting">Bayes theorem হল বিশ্বাস আপডেট করার গাণিতিক সূত্র। তুমি fraud detection model বানালে — 99% accurate! কিন্তু fraud rate 0.01% হলে, positive alert এর সত্যিকার সম্ভাবনা শুধুমাত্র 1%! কারণ healthy transactions এত বেশি যে false positive আধিক্য হয়। এটাই base rate fallacy। Bayes: <code>P(H|D) = P(D|H)·P(H)/P(D)</code>। Prior (পূর্বধারণা) + evidence (প্রমাণ) = posterior (আপডেটেড বিশ্বাস)। ডাক্তার এটা ভুল বুঝে রোগীকে ভুল চিকিৎসা দেয়। Software engineer ভুল বুঝে false positive এ ডুবে যায়।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔄 Bayes Theorem: The Belief Updater</text>

  <!-- Prior -->
  <rect x="20" y="50" width="160" height="100" rx="10" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="100" y="72" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">1. PRIOR P(H)</text>
  <text x="100" y="92" text-anchor="middle" fill="#bae6fd" font-size="8">Initial belief</text>
  <rect x="40" y="105" width="120" height="22" rx="4" fill="#1e293b" stroke="#0ea5e9" stroke-width="1"/>
  <text x="100" y="120" text-anchor="middle" fill="#7dd3fc" font-size="7" font-family="monospace">P(fraud) = 0.01%</text>
  <text x="100" y="140" text-anchor="middle" fill="#64748b" font-size="7">1 in 10,000 transactions</text>

  <!-- Evidence -->
  <rect x="210" y="50" width="160" height="100" rx="10" fill="#451a03" stroke="#f97316" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#fdba74" font-size="10" font-weight="700">2. EVIDENCE P(D|H)</text>
  <text x="290" y="92" text-anchor="middle" fill="#fb923c" font-size="8">New data arrives</text>
  <rect x="230" y="105" width="120" height="22" rx="4" fill="#1e293b" stroke="#f97316" stroke-width="1"/>
  <text x="290" y="120" text-anchor="middle" fill="#fdba74" font-size="7" font-family="monospace">Model: 99% accurate</text>
  <text x="290" y="140" text-anchor="middle" fill="#64748b" font-size="7">Alert fired! But...</text>

  <!-- Posterior -->
  <rect x="400" y="50" width="160" height="100" rx="10" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="480" y="72" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">3. POSTERIOR P(H|D)</text>
  <text x="480" y="92" text-anchor="middle" fill="#f87171" font-size="8">Updated belief</text>
  <rect x="420" y="105" width="120" height="22" rx="4" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="480" y="120" text-anchor="middle" fill="#fca5a5" font-size="7" font-family="monospace">P(fraud|alert) ≈ 1%!</text>
  <text x="480" y="140" text-anchor="middle" fill="#dc2626" font-size="7">⚠️ Not 99%! Base rate fallacy!</text>

  <!-- Arrows -->
  <text x="195" y="100" text-anchor="middle" fill="#475569" font-size="14">→</text>
  <text x="385" y="100" text-anchor="middle" fill="#475569" font-size="14">→</text>

  <!-- Calculation -->
  <rect x="40" y="170" width="500" height="55" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="188" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="700">P(fraud|alert) = P(alert|fraud)·P(fraud) / P(alert)</text>
  <text x="290" y="202" text-anchor="middle" fill="#cbd5e1" font-size="8">= (0.99 × 0.0001) / (0.99×0.0001 + 0.01×0.9999)</text>
  <text x="290" y="216" text-anchor="middle" fill="#dc2626" font-size="8" font-weight="700">= 0.000099 / 0.010098 ≈ 0.98% ← NOT 99%!</text>

  <rect x="120" y="245" width="340" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="290" y="265" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">💡 Fix: use Bayesian posterior, not raw model accuracy</text>
  <text x="290" y="280" text-anchor="middle" fill="#86efac" font-size="7">Adjust thresholds, enrich features, or use cost-sensitive learning</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Bayes Theorem — Prior (0.01% fraud) + Evidence (99% accurate test) → Posterior (only ~1% real fraud among alerts!)। Base rate fallacy প্রতিটা software engineer কে ধোঁকা দেয়।</div>

<div class="dialogue"><strong>রেভারেন্ড টমাস বেয়েস:</strong> আমি ১৮শ শতাব্দীতে এই সূত্র আবিষ্কার করেছিলাম। <code>P(H|D) = P(D|H)·P(H)/P(D)</code>। তুমি যখন fraud alert পাও, তোমার মস্তিষ্ক বলে '99% accurate model → 99% সত্যিকার fraud!' কিন্তু এটা ভুল! কারণ fraud এতই বিরল (0.01%) যে healthy transactions থেকে false positive এর সংখ্যা সত্যিকার fraud এর চেয়ে অনেক বেশি। Posterior = 1%, 99% নয়। এটাই base rate fallacy। LedgerPilot-এ fraud model এর threshold এই posterior এর উপর ভিত্তি করে সেট করতে হবে, raw accuracy এর উপর নয়।</div>`,
  recall: [
    { q: "Bayes theorem কী এবং কেন দরকার?", a: "P(H|D) = P(D|H)·P(H)/P(D)। Prior বিশ্বাসকে evidence দিয়ে আপডেট করে। ডাক্তারি পরীক্ষা, fraud detection, debugging — সব জায়গায় ভুল ধারণা ঠিক করে।" },
    { q: "Base rate fallacy কী?", a: "সত্যিকার prevalence (base rate) উপেক্ষা করে শুধু test accuracy তে ফোকাস করা। 99% accurate test ও 0.1% prevalence → positive test = শুধু 9% sick। Fraud detection-এ একই ভুল।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 2 — The Average Oracle (LLN)
// ═══════════════════════════════════════════
doors.push({
  num: 2,
  icon: "📊",
  color: "#22c55e",
  tagline: "গড়ের ভবিষ্যৎকথী — Average Oracle",
  name: "The Average Oracle",
  secret: "Law of Large Numbers: যত বেশি sample, average তত কাছে যায় true expected value এ।",
  story: `<p class="scene-setting">Law of Large Numbers (LLN) — যত বেশি বার experiment করবে, sample average তত বেশি কাছে যাবে true expected value এ। Weak law: convergence in probability। Strong law: almost sure convergence (probability 1)। LedgerPilot: যত বেশি transaction হবে, average fraud rate actual fraud rate এ converge করবে। A/B test: যত বেশি user, তত নির্ভুল comparison। কিন্তু gambler's fallacy ভুল — past outcome future কে affect করে না (memoryless)। ৫ বার head এসেছে বলে ৬ষ্ঠ বার tail আসার সম্ভাবনা বেশি নয় — এখনো 50%!</p>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> LLN-এর দুটো version: Weak (convergence in probability) আর Strong (almost sure convergence, probability 1)। প্রতিটা independent trial-এ average প্রত্যাশিত মানের দিকে যায়। LedgerPilot: প্রতিদিন ১০,০০০ transaction হলে, পরের দিনের fraud rate আজকের গড়ের কাছে থাকবে। A/B test: ১০০ user-এ শুধু noise, ১০,০০০ user-এ clear winner। কিন্তু মনে রাখো — regression to mean মানে "balancing" নয়। এটা শুধু মানে যে extreme events বিরল, তাই পরের event average হওয়ার সম্ভাবনাই বেশি। কোনো cosmic memory নেই!</div>`,
  recall: [
    { q: "Law of Large Numbers কী?", a: "যত বেশি independent trial, sample average তত বেশি converge করে true expected value এ। Weak (probability) vs Strong (almost sure)। A/B test, fraud rate estimation এর ভিত্তি।" },
    { q: "Gambler's fallacy কী এবং কেন ভুল?", a: "'৫ বার head এসেছে, এখন tail আসবে' — ভুল! Memoryless property: প্রতিটা trial independent। ষষ্ঠ বারও 50/50। Past outcome future কে affect করে না।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 3 — The Bell Curve Magic (CLT)
// ═══════════════════════════════════════════
doors.push({
  num: 3,
  icon: "🔔",
  color: "#a855f7",
  tagline: "ঘণ্টা বক্ররেখার জাদু — Bell Curve Magic",
  name: "The Bell Curve Magic",
  secret: "Central Limit Theorem: যেকোনো distribution-এর sample average Gaussian হয়ে যায়! এটাই anomaly detection-এর ভিত্তি।",
  story: `<p class="scene-setting">Central Limit Theorem (CLT) — পরিসংখ্যানের সবচেয়ে জাদুকরী উপপাদ্য। তোমার data যেমনই হোক — skewed, bimodal, heavy-tailed — sample average সবসময় Gaussian (bell curve) হয়ে যায়! শর্ত শুধু: finite mean আর variance। LedgerPilot: individual deposit wild (কয়েকজন whale, বাকি সব tiny)। কিন্তু daily average deposit = bell curve। 3-sigma rule: 99.7% দিন average ± 3σ এর ভেতরে। বাইরে গেলে anomaly! এটাই anomaly detection-এর পুরো ভিত্তি।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔔 Central Limit Theorem: Everything Becomes Gaussian</text>

  <!-- Original distribution (wild) -->
  <rect x="20" y="50" width="250" height="200" rx="10" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#fdba74" font-size="10" font-weight="700">Original Distribution (Wild!)</text>
  <text x="145" y="90" text-anchor="middle" fill="#fb923c" font-size="7">Individual deposits — NOT Gaussian</text>
  <!-- Wild bars -->
  <rect x="45" y="210" width="12" height="10" fill="#f97316"/>
  <rect x="60" y="180" width="12" height="40" fill="#f97316"/>
  <rect x="75" y="220" width="12" height="0" fill="#f97316"/>
  <rect x="90" y="220" width="12" height="0" fill="#f97316"/>
  <rect x="105" y="220" width="12" height="0" fill="#f97316"/>
  <rect x="120" y="195" width="12" height="25" fill="#f97316"/>
  <rect x="135" y="150" width="12" height="70" fill="#f97316"/>
  <rect x="150" y="220" width="12" height="0" fill="#f97316"/>
  <rect x="165" y="220" width="12" height="0" fill="#f97316"/>
  <rect x="180" y="210" width="12" height="10" fill="#f97316"/>
  <rect x="195" y="170" width="12" height="50" fill="#f97316"/>
  <rect x="210" y="140" width="12" height="80" fill="#dc2626"/>
  <rect x="225" y="220" width="12" height="0" fill="#f97316"/>
  <text x="145" y="240" text-anchor="middle" fill="#64748b" font-size="7">Whales ($) + tiny deposits = bimodal</text>

  <!-- Arrow -->
  <text x="290" y="150" text-anchor="middle" fill="#22c55e" font-size="20" font-weight="900">→</text>
  <text x="290" y="170" text-anchor="middle" fill="#4ade80" font-size="7">average!</text>

  <!-- After CLT (Gaussian) -->
  <rect x="310" y="50" width="250" height="200" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="435" y="72" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">After CLT (Magic!)</text>
  <text x="435" y="90" text-anchor="middle" fill="#d8b4fe" font-size="7">Daily average deposits → Gaussian!</text>
  <!-- Bell curve -->
  <path d="M 340 220 Q 380 220, 400 200 Q 420 160, 435 90 Q 450 160, 470 200 Q 490 220, 530 220" fill="none" stroke="#a855f7" stroke-width="2"/>
  <path d="M 340 220 Q 380 220, 400 200 Q 420 160, 435 90 Q 450 160, 470 200 Q 490 220, 530 220 L 340 220 Z" fill="rgba(168,85,247,0.1)"/>

  <!-- Sigma markers -->
  <line x1="395" y1="85" x2="395" y2="225" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="395" y="240" text-anchor="middle" fill="#64748b" font-size="7">μ-3σ</text>
  <line x1="415" y1="160" x2="415" y2="225" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="415" y="240" text-anchor="middle" fill="#64748b" font-size="7">μ-σ</text>
  <line x1="435" y1="90" x2="435" y2="225" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="435" y="240" text-anchor="middle" fill="#fbbf24" font-size="7">μ (mean)</text>
  <line x1="455" y1="160" x2="455" y2="225" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="455" y="240" text-anchor="middle" fill="#64748b" font-size="7">μ+σ</text>
  <line x1="475" y1="85" x2="475" y2="225" stroke="#dc2626" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="475" y="240" text-anchor="middle" fill="#dc2626" font-size="7">μ+3σ ⚠️</text>

  <text x="435" y="200" text-anchor="middle" fill="#a855f7" font-size="7">68% within ±1σ</text>
  <text x="435" y="212" text-anchor="middle" fill="#a855f7" font-size="7">99.7% within ±3σ</text>
</svg>
</div>
<div class="svg-caption">চিত্র: CLT — wild individual deposits (bimodal: whales + tiny) → daily average = perfect Gaussian bell curve। 3-sigma rule: 99.7% দিন average ± 3σ এর ভেতরে। বাইরে = anomaly alert!</div>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> CLT পরিসংখ্যানের সবচেয়ে জাদুকরী ফলাফল। Individual deposit: কয়েকজন whale (অনেক বড়), বাকি সব tiny। এটা Gaussian নয় — bimodal! কিন্তু যখন তুমি হাজার জনের daily average নাও, সেটা Gaussian হয়ে যায়। এটাই 3-sigma anomaly detection কে কাজ করায়। <code>P(|X - μ| > 3σ) < 0.3%</code>। যদি কোনো দিনের average deposit μ+3σ এর বাইরে যায় — alert! সম্ভবত কিছু ভুল হচ্ছে। CLT শুধু Gaussian-এর জন্য নয় — যেকোনো finite variance distribution-এর sample average-এর জন্য কাজ করে। এটাই এর জাদু।</div>`,
  recall: [
    { q: "Central Limit Theorem কী?", a: "যেকোনো distribution (finite mean+variance) থেকে sample নাও — average সবসময় Gaussian হয়, sample size বাড়ালে। Wild individual data ও average এ Gaussian হয়ে যায়।" },
    { q: "CLT কিভাবে anomaly detection এ ব্যবহৃত হয়?", a: "Daily average = Gaussian → 3-sigma rule: 99.7% দিন average ± 3σ এর ভেতরে। বাইরে গেলে anomaly alert। LedgerPilot-এ daily average deposit monitoring।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 4 — The Memoryless Walker (Markov Chains)
// ═══════════════════════════════════════════
doors.push({
  num: 4,
  icon: "🚶",
  color: "#f59e0b",
  tagline: "স্মৃতিহীন পথিক — Memoryless Walker",
  name: "The Memoryless Walker",
  secret: "Markov: next state depends only on current state। PageRank = stationary distribution!",
  story: `<p class="scene-setting">Markov chain — স্মৃতিহীন stochastic process। পরের state শুধু current state এর উপর নির্ভর করে, past এর উপর নয়। Transition matrix P তে প্রতিটা entry হল state transition probability। Stationary distribution π পাওয়া যায় <code>π = πP</code> সমাধান করে। Ergodicity (aperiodic + positive recurrent) থাকলে unique stationary distribution থাকে। Google PageRank = web surfing Markov chain এর stationary distribution। Credit rating (Good→Watch→Default) ও Markov chain। LedgerPilot: user behavior states (active → idle → churn) একটা Markov chain।</p>

<div class="dialogue"><strong>আন্দ্রেই মার্কভ:</strong> আমি ১৯০৬ সালে এই chain আবিষ্কার করেছিলাম। সবচেয়ে গুরুত্বপূর্ণ ধারণা — memoryless (Markov property)। পরের state শুধু current state এর উপর নির্ভর করে। Past এর কোনো ভূমিকা নেই। <code>π = πP</code> — একটা eigenvalue সমস্যা। সমাধান করলে stationary distribution পাওয়া যায়। Google PageRank এর পুরো ভিত্তি এটাই — web pages = states, links = transitions, stationary distribution = page importance। LedgerPilot-এ credit rating: Good (95% stay, 4% watch, 1% default), Watch (30% recover, 60% stay, 10% default), Default (absorbing)। Stationary distribution বলে দীর্ঘমেয়াদে পুরো portfolio কতটা risky।</div>`,
  recall: [
    { q: "Markov property কী?", a: "Next state depends only on current state, not on past history। Memoryless। P(X_{n+1} | X_n, X_{n-1}, ...) = P(X_{n+1} | X_n)।" },
    { q: "Stationary distribution কী এবং PageRank কিভাবে কাজ করে?", a: "π = πP। Long-term probability of being in each state। PageRank = web surfing Markov chain এর stationary distribution। যে pages বেশি visited, সেগুলো বেশি important।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 5 — The Exponential Shield (Concentration)
// ═══════════════════════════════════════════
doors.push({
  num: 5,
  icon: "🛡️",
  color: "#dc2626",
  tagline: "সূচকীয় ঢাল — Exponential Shield",
  name: "The Exponential Shield",
  secret: "Concentration inequalities: extreme events exponentially rare। Chernoff/Hoeffding → streaming algorithms সম্ভব।",
  story: `<p class="scene-setting">Concentration inequalities প্রমাণ করে — random variable তার expected value থেকে কত বেশি দূরে যেতে পারে। Hierarchy: Markov (weakest, শুধু E[X] ব্যবহার করে) → Chebyshev (variance ব্যবহার করে, P(|X-μ|≥a) ≤ σ²/a²) → Chernoff/Hoeffding (exponential! independent sums এর জন্য)। Chernoff বলে: deviation probability <code>e^(-nε²)</code> — exponentially small! এটাই streaming algorithm, HyperLogLog, randomized algorithm এর পুরো ভিত্তি। কারণ এটা গ্যারান্টি দেয় যে average অল্প sample তেই converge করবে।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🛡️ Concentration Inequality Hierarchy</text>

  <!-- Markov -->
  <rect x="30" y="50" width="150" height="80" rx="8" fill="#451a03" stroke="#f97316" stroke-width="2"/>
  <text x="105" y="72" text-anchor="middle" fill="#fdba74" font-size="10" font-weight="700">Markov (Weakest)</text>
  <text x="105" y="90" text-anchor="middle" fill="#fb923c" font-size="7">P(X≥a) ≤ E[X]/a</text>
  <text x="105" y="105" text-anchor="middle" fill="#64748b" font-size="6">Only uses expectation</text>
  <text x="105" y="120" text-anchor="middle" fill="#f97316" font-size="7">Sample: O(1/δ)</text>

  <!-- Chebyshev -->
  <rect x="215" y="50" width="150" height="80" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Chebyshev (Better)</text>
  <text x="290" y="90" text-anchor="middle" fill="#bae6fd" font-size="7">P(|X-μ|≥a) ≤ σ²/a²</text>
  <text x="290" y="105" text-anchor="middle" fill="#64748b" font-size="6">Uses variance</text>
  <text x="290" y="120" text-anchor="middle" fill="#0ea5e9" font-size="7">Sample: O(1/δ)</text>

  <!-- Chernoff/Hoeffding -->
  <rect x="400" y="50" width="150" height="80" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="3"/>
  <text x="475" y="72" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Chernoff/Hoeffding</text>
  <text x="475" y="90" text-anchor="middle" fill="#86efac" font-size="7">P(deviation) ≤ e^{-nε²}</text>
  <text x="475" y="105" text-anchor="middle" fill="#64748b" font-size="6">Exponential! Independent sums</text>
  <text x="475" y="120" text-anchor="middle" fill="#22c55e" font-size="7" font-weight="700">Sample: O(log(1/δ))!</text>

  <!-- Arrows -->
  <text x="197" y="95" text-anchor="middle" fill="#475569" font-size="14">→</text>
  <text x="382" y="95" text-anchor="middle" fill="#475569" font-size="14">→</text>
  <text x="197" y="108" text-anchor="middle" fill="#64748b" font-size="6">+ variance</text>
  <text x="382" y="108" text-anchor="middle" fill="#64748b" font-size="6">+ independence</text>

  <!-- Bottom: Why it matters -->
  <rect x="30" y="150" width="520" height="110" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="172" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">💡 Why Concentration Matters</text>
  <text x="50" y="195" fill="#cbd5e1" font-size="7">Chebyshev: want 99% confidence (δ=0.01)? Need n = O(1/δ) = 100 samples</text>
  <text x="50" y="210" fill="#4ade80" font-size="7">Chernoff: want 99% confidence (δ=0.01)? Need n = O(log(1/δ)) ≈ 5 samples!</text>
  <text x="50" y="225" fill="#fbbf24" font-size="7">→ Exponential improvement makes streaming algorithms (HyperLogLog, Bloom filters) possible</text>
  <text x="50" y="245" fill="#86efac" font-size="7">→ HyperLogLog: estimate 10⁹ unique items with 2% error using only 1.5KB!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Concentration Inequality Hierarchy — Markov (weakest) → Chebyshev (variance) → Chernoff/Hoeffding (exponential)। শেষেরটা O(log 1/δ) sample লাগে, O(1/δ) নয়। HyperLogLog সম্ভব এটা দিয়ে।</div>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> চিন্তা করো — তুমি একটা coin flip করছ। ১০০ বার flip করলে কত head? Expected = ৫০। কিন্তু কত deviate করতে পারে? Markov বলে: P(≥১০০) ≤ ৫০/১০০ = ৫০% — খুব দুর্বল! Chebyshev: σ²=২৫, P(|X-৫০|≥২৫) ≤ ২৫/৬২৫ = ৪% — ভালো। Chernoff: P(|X-৫০|≥২৫) ≤ e^{-100·0.25²} ≈ 0.002% — এক্সপোনেনশিয়াল! এটাই streaming algorithm কে সম্ভব করে। HyperLogLog: 10⁹ unique item গণনা 1.5KB তে — concentration inequality গ্যারান্টি দেয় যে estimate সঠিক হবে। প্রতিটা randomized algorithm এর পেছনে এই গণিত আছে।</div>`,
  recall: [
    { q: "Markov, Chebyshev, Chernoff এর মধ্যে পার্থক্য কী?", a: "Markov: শুধু E[X] (weakest)। Chebyshev: + variance। Chernoff/Hoeffding: + independence → exponential bound। Sample complexity: O(1/δ) → O(log(1/δ))।" },
    { q: "Concentration inequality কেন streaming algorithm এর জন্য গুরুত্বপূর্ণ?", a: "Exponential bound গ্যারান্টি দেয় যে অল্প sample তেই estimate সঠিক। HyperLogLog 10⁹ unique item 1.5KB তে count করে — এটা সম্ভব কারণ Chernoff bound deviation probability কে exponentially small করে।" },
  ]
});
