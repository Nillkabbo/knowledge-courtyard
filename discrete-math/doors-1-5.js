const doors = [];

// ═══════════════════════════════════════════
// DOOR 1 — The Language of Truth (Logic)
// ═══════════════════════════════════════════
doors.push({
  num: 1,
  icon: "⚖️",
  color: "#0ea5e9",
  tagline: "সত্যের ভাষা — Language of Truth",
  name: "The Language of Truth",
  secret: "De Morgan's Law: ¬(P ∧ Q) = ¬P ∨ ¬Q। তুমি Django QuerySet এ প্রতিদিন ব্যবহার করছ!",
  story: `<p class="scene-setting">তুমি প্রতিদিন <code>if/else</code> লেখো। কিন্তু propositional logic এর সাথে তোমার পরিচয় কতটুকু? De Morgan's Law — <code>¬(A ∧ B) = ¬A ∨ ¬B</code> — তুমি অজান্তেই ব্যবহার করছ। Django তে <code>exclude(is_staff=True, is_active=True)</code> আর <code>filter(Q(is_staff=False) | Q(is_active=False))</code> — একই জিনিস! De Morgan প্রমাণ করেছেন।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚖️ De Morgan's Laws: The Hidden Rules of if/else</text>

  <!-- Truth Table -->
  <rect x="20" y="50" width="250" height="190" rx="10" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="700">Truth Table</text>
  <!-- Headers -->
  <rect x="30" y="82" width="40" height="20" rx="3" fill="#1e3a5f" stroke="#0ea5e9" stroke-width="1"/>
  <text x="50" y="96" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">P</text>
  <rect x="72" y="82" width="40" height="20" rx="3" fill="#1e3a5f" stroke="#0ea5e9" stroke-width="1"/>
  <text x="92" y="96" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">Q</text>
  <rect x="114" y="82" width="70" height="20" rx="3" fill="#1e3a5f" stroke="#0ea5e9" stroke-width="1"/>
  <text x="149" y="96" text-anchor="middle" fill="#7dd3fc" font-size="7">¬(P∧Q)</text>
  <rect x="186" y="82" width="70" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="221" y="96" text-anchor="middle" fill="#4ade80" font-size="7">¬P∨¬Q</text>

  <!-- Row 1: T T -->
  <text x="50" y="115" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="92" y="115" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="149" y="115" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="221" y="115" text-anchor="middle" fill="#4ade80" font-size="8">F ✓</text>
  <!-- Row 2: T F -->
  <text x="50" y="135" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="92" y="135" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="149" y="135" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="221" y="135" text-anchor="middle" fill="#4ade80" font-size="8">T ✓</text>
  <!-- Row 3: F T -->
  <text x="50" y="155" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="92" y="155" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="149" y="155" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="221" y="155" text-anchor="middle" fill="#4ade80" font-size="8">T ✓</text>
  <!-- Row 4: F F -->
  <text x="50" y="175" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="92" y="175" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="149" y="175" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="221" y="175" text-anchor="middle" fill="#4ade80" font-size="8">T ✓</text>

  <text x="145" y="205" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Columns match → Equivalent! ✅</text>
  <text x="145" y="225" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">All 4 rows: ¬(P∧Q) = ¬P∨¬Q</text>

  <!-- Django Example -->
  <rect x="290" y="50" width="270" height="190" rx="10" fill="#0c4a6e" stroke="#fbbf24" stroke-width="2"/>
  <text x="425" y="72" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="700">🐍 Django Example</text>
  <rect x="305" y="85" width="240" height="28" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
  <text x="425" y="103" text-anchor="middle" fill="#fcd34d" font-size="7" font-family="monospace">User.objects.exclude(is_staff=True,</text>
  <rect x="305" y="116" width="240" height="22" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
  <text x="425" y="131" text-anchor="middle" fill="#fcd34d" font-size="7" font-family="monospace">    is_active=True)</text>
  <text x="425" y="152" text-anchor="middle" fill="#7dd3fc" font-size="10">≡ (De Morgan's!)</text>
  <rect x="305" y="160" width="240" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="425" y="175" text-anchor="middle" fill="#4ade80" font-size="7" font-family="monospace">User.objects.filter(</text>
  <rect x="305" y="183" width="240" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="425" y="198" text-anchor="middle" fill="#4ade80" font-size="7" font-family="monospace">  Q(is_staff=False) | Q(is_active=False))</text>
  <text x="425" y="222" text-anchor="middle" fill="#4ade80" font-size="7">Same result! De Morgan proven in code ✅</text>

  <!-- Bottom insight -->
  <rect x="60" y="260" width="460" height="40" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="280" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="600">💡 Logic simplification = fewer gates, faster circuits, cleaner code</text>
  <text x="290" y="294" text-anchor="middle" fill="#64748b" font-size="7">In hardware: fewer logic gates = smaller chip, less power, cheaper manufacturing</text>
</svg>
</div>
<div class="svg-caption">চিত্র: De Morgan's Law — truth table প্রমাণ করে ¬(P∧Q) ≡ ¬P∨¬Q। Django QuerySet এ তুমি অজান্তেই এটা ব্যবহার করছ।</div>

<div class="dialogue"><strong>অগাস্টাস ডি মরগান:</strong> আমি ১৯শ শতাব্দীতে প্রমাণ করেছিলাম — একটা AND এর negation OR হয়, আর একটা OR এর negation AND হয়। <code>¬(P ∧ Q) = ¬P ∨ ¬Q</code> এবং <code>¬(P ∨ Q) = ¬P ∧ ¬Q</code>। এটা শুধু তত্ত্ব নয় — তোমার Django QuerySet এ প্রতিদিন ঘটছে। <code>exclude(A, B)</code> মানে <code>NOT (A AND B)</code>, যা De Morgan অনুযায়ী <code>NOT A OR NOT B</code>। হার্ডওয়্যারে এটা আরও গুরুত্বপূর্ণ — logic minimize করলে gate কমে, chip ছোট, কম বিদ্যুৎ, সস্তা।</div>`,
  recall: [
    { q: "De Morgan's Law কী?", a: "¬(P ∧ Q) = ¬P ∨ ¬Q এবং ¬(P ∨ Q) = ¬P ∧ ¬Q। AND এর negation = OR of negations, vice versa। Django QuerySet exclude/filter এ প্রতিদিন ব্যবহৃত।" },
    { q: "Implication P → Q কখন false হয়?", a: "শুধুমাত্র যখন P = true এবং Q = false। বাকি সব ক্ষেত্রে true। 'Vacuous truth': P = false হলে P→Q সর্বদা true, তা Q যাই হোক।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 2 — The Domino Effect (Induction)
// ═══════════════════════════════════════════
doors.push({
  num: 2,
  icon: "🁢",
  color: "#fbbf24",
  tagline: "ডোমিনো প্রভাব — Domino Effect",
  name: "The Domino Effect",
  secret: "Induction = ডোমিনো। Base case (প্রথমটা পড়ে) + inductive step (প্রতিটা পরেরটাকে ফেলে) = সব পড়ে।",
  story: `<p class="scene-setting">Mathematical induction হল ডোমিনোর মতো। দুটো জিনিস প্রমাণ করো: (১) প্রথম ডোমিনো পড়ে (base case), (২) যদি k তম ডোমিনো পড়ে, তবে (k+1) তম ও পড়বে (inductive step)। এই দুটো থেকে গাণিতিকভাবে অনুসরণ করে যে সব ডোমিনো পড়বে। এটাই recursion এর ভিত্তি — base case + recursive call = সব input এ কাজ করবে।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrDom" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🁢 Mathematical Induction: The Domino Effect</text>

  <!-- Base case -->
  <rect x="20" y="50" width="200" height="100" rx="10" fill="#450a0a" stroke="#dc2626" stroke-width="2"/>
  <text x="120" y="72" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">1. BASE CASE</text>
  <text x="120" y="92" text-anchor="middle" fill="#fca5a5" font-size="8">Knock over first domino</text>
  <rect x="50" y="105" width="140" height="22" rx="4" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="120" y="120" text-anchor="middle" fill="#fca5a5" font-size="7" font-family="monospace">P(0) is true</text>
  <text x="120" y="140" text-anchor="middle" fill="#dc2626" font-size="7">e.g., factorial(0) = 1 ✅</text>

  <!-- Inductive step -->
  <rect x="240" y="50" width="200" height="100" rx="10" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="340" y="72" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">2. INDUCTIVE STEP</text>
  <text x="340" y="92" text-anchor="middle" fill="#86efac" font-size="8">k → k+1</text>
  <rect x="270" y="105" width="140" height="22" rx="4" fill="#1e293b" stroke="#22c55e" stroke-width="1"/>
  <text x="340" y="120" text-anchor="middle" fill="#86efac" font-size="7" font-family="monospace">P(k) → P(k+1)</text>
  <text x="340" y="140" text-anchor="middle" fill="#22c55e" font-size="7">If k works, k+1 works ✅</text>

  <line x1="220" y1="100" x2="240" y2="100" stroke="#475569" stroke-width="2" marker-end="url(#arrDom)"/>

  <!-- Conclusion -->
  <rect x="460" y="50" width="100" height="100" rx="10" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="510" y="72" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">∴ ALL TRUE</text>
  <text x="510" y="92" text-anchor="middle" fill="#d8b4fe" font-size="8">P(n) for all n</text>
  <text x="510" y="115" text-anchor="middle" fill="#c084fc" font-size="7">Every domino</text>
  <text x="510" y="130" text-anchor="middle" fill="#c084fc" font-size="7">falls! ✅</text>

  <line x1="440" y1="100" x2="460" y2="100" stroke="#475569" stroke-width="2" marker-end="url(#arrDom)"/>

  <!-- Dominoes -->
  <g transform="translate(40, 170)">
    <rect x="0" y="0" width="14" height="40" rx="2" fill="#dc2626" stroke="#f87171" stroke-width="1"/>
    <text x="7" y="52" text-anchor="middle" fill="#fca5a5" font-size="7">0</text>
    <rect x="20" y="0" width="14" height="40" rx="2" fill="#f97316" stroke="#fb923c" stroke-width="1"/>
    <text x="27" y="52" text-anchor="middle" fill="#fdba74" font-size="7">1</text>
    <rect x="40" y="0" width="14" height="40" rx="2" fill="#fbbf24" stroke="#fcd34d" stroke-width="1"/>
    <text x="47" y="52" text-anchor="middle" fill="#fcd34d" font-size="7">2</text>
    <rect x="60" y="0" width="14" height="40" rx="2" fill="#22c55e" stroke="#4ade80" stroke-width="1"/>
    <text x="67" y="52" text-anchor="middle" fill="#4ade80" font-size="7">3</text>
    <rect x="80" y="0" width="14" height="40" rx="2" fill="#0ea5e9" stroke="#7dd3fc" stroke-width="1"/>
    <text x="87" y="52" text-anchor="middle" fill="#7dd3fc" font-size="7">4</text>
    <rect x="100" y="0" width="14" height="40" rx="2" fill="#a855f7" stroke="#c084fc" stroke-width="1"/>
    <text x="107" y="52" text-anchor="middle" fill="#c084fc" font-size="7">5</text>
    <text x="130" y="25" fill="#64748b" font-size="10">⋯</text>
    <rect x="150" y="0" width="14" height="40" rx="2" fill="#64748b" stroke="#94a3b8" stroke-width="1"/>
    <text x="157" y="52" text-anchor="middle" fill="#94a3b8" font-size="7">k</text>
    <text x="175" y="25" fill="#64748b" font-size="10">⋯</text>
    <rect x="195" y="0" width="14" height="40" rx="2" fill="#64748b" stroke="#94a3b8" stroke-width="1"/>
    <text x="202" y="52" text-anchor="middle" fill="#94a3b8" font-size="7">n</text>
  </g>

  <text x="290" y="250" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="600">💡 Induction = Recursion in proof form. Same structure!</text>
  <text x="290" y="265" text-anchor="middle" fill="#64748b" font-size="7">factorial(n) = n * factorial(n-1) — base case(0)=1, inductive step=n*prev</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Induction = ডোমিনো। Base case (P(0) সত্য) + inductive step (P(k)→P(k+1)) = সব P(n) সত্য। Recursion এর সাথে একই গঠন।</div>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> Induction circular reasoning নয়! Base case anchor করে। তুমি P(k) assume করছ না — তুমি <code>P(k) → P(k+1)</code> প্রমাণ করছ একটা implication হিসেবে। প্রথম ডোমিনো পড়ে (base case), প্রতিটা পরেরটাকে ফেলে (inductive step) — তাই সব পড়ে। এটাই recursion এর ভিত্তি। <code>factorial(n)</code> — base: <code>factorial(0)=1</code>, step: <code>factorial(n) = n * factorial(n-1)</code>। Induction গ্যারান্টি দেয় যে সব input এ কাজ করবে। Big-O analysis — Master Theorem — সব induction এর উপর দাঁড়িয়ে!</div>`,
  recall: [
    { q: "Induction circular reasoning কেন নয়?", a: "Base case anchor করে। তুমি P(k) assume করছ না — তুমি P(k)→P(k+1) প্রমাণ করছ একটা implication হিসেবে। Base + step = সব সত্য।" },
    { q: "Induction আর recursion এর মধ্যে সম্পর্ক কী?", a: "একই গঠন। Base case = recursion এর base case। Inductive step = recursive call। Induction প্রমাণ করে recursion সব input এ কাজ করবে।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 3 — The Impossible Truth (Contradiction)
// ═══════════════════════════════════════════
doors.push({
  num: 3,
  icon: "🔄",
  color: "#a855f7",
  tagline: "অসম্ভব সত্য — Impossible Truth",
  name: "The Impossible Truth",
  secret: "Proof by contradiction: বিপরীত ধরে নাও, অসম্ভব পর্যন্ত পৌঁছাও → তোমার assumption ভুল!",
  story: `<p class="scene-setting">Proof by contradiction — সবচেয়ে শক্তিশালী proof technique। তুমি যা প্রমাণ করতে চাও তার বিপরীত ধরে নাও। তারপর logical steps এ এগিয়ে যাও যতক্ষণ না একটা অসম্ভব পরিস্থিতি (contradiction) তৈরি হয়। যেহেতু contradiction অসম্ভব, তোমার initial assumption ভুল হতে হবে। উদাহরণ: √2 অমূলদ (irrational) — ধরে নাও এটা মূলদ (rational = a/b), lowest terms এ। প্রমাণ করো যে দুটোই even — কিন্তু lowest terms এ দুটো even হতে পারে না! Contradiction!</p>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> Contradiction হল debugging এরও ভিত্তি। তুমি বলছ 'এই bug অসম্ভব!' ধরে নাও সেটা সম্ভব — কোথায় নিয়ম ভাঙছে? সেই point টাই bug। √2 অমূলদ প্রমাণ করতে ধরে নাও <code>√2 = a/b</code> (rational, lowest terms)। তাহলে <code>a² = 2b²</code> → a even → <code>a=2c</code> → <code>4c² = 2b²</code> → <code>b² = 2c²</code> → b ও even! কিন্তু lowest terms এ দুটোই even হতে পারে না! Contradiction! তাই √2 মূলদ হতে পারে না। Proof by contrapositive ও কাজ করে — P→Q এর পরিবর্তে ¬Q→¬P প্রমাণ করো। Logically equivalent কিন্তু সহজ হতে পারে।</div>`,
  recall: [
    { q: "Proof by contradiction কীভাবে কাজ করে?", a: "বিপরীত ধরে নাও (assume ¬P)। Logical steps এ যাও যতক্ষণ না contradiction (C ∧ ¬C)। যেহেতু contradiction অসম্ভব, assumption ভুল, P সত্য।" },
    { q: "Contrapositive কী এবং কেন ব্যবহার করবে?", a: "P→Q এর contrapositive হল ¬Q→¬P। Logically equivalent কিন্তু অনেক সময় সহজ প্রমাণ করা যায় — ¬Q থেকে শুরু করে ¬P পর্যন্ত যাও।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 4 — The Tower of Infinity (Set Theory)
// ═══════════════════════════════════════════
doors.push({
  num: 4,
  icon: "∞",
  color: "#f97316",
  tagline: "অসীমের সিঁড়ি — Tower of Infinity",
  name: "The Tower of Infinity",
  secret: "Cantor: ∞ এর চেয়ে বড় ∞ আছে। ℕ (countable) < ℝ (uncountable)। Diagonal argument!",
  story: `<p class="scene-setting">Georg Cantor প্রমাণ করেছিলেন — কিছু infinity অন্যটার চেয়ে বড়। Integer (ℕ) গুলো countable — তালিকা করা যায়। Real (ℝ) গুলো uncountable — কখনো তালিকা করা যায় না। Diagonal argument: একটা infinite list বানাও যেখানে প্রতিটা real number এর decimal আছে। Diagonal এর প্রতিটা digit flip করে একটা নতুন number বানাও — এই number টা তালিকার কোনো number এর সাথেই match করবে না! তাই তালিকা incomplete। ℝ uncountable। Cantor আরও প্রমাণ করেছেন — power set সবসময় সেট এর চেয়ে বড়: <code>|P(S)| > |S|</code>। অর্থাৎ অসীম সিঁড়ি — ℵ₀ < |P(ℕ)| < |P(P(ℕ))| < ...</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">∞ Cantor's Tower of Infinities</text>

  <!-- Tower -->
  <rect x="200" y="50" width="180" height="35" rx="5" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="290" y="68" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">|P(P(ℕ))| — power set of power set</text>
  <text x="290" y="80" text-anchor="middle" fill="#64748b" font-size="7">even bigger infinity...</text>

  <text x="290" y="98" text-anchor="middle" fill="#475569" font-size="10">↑ bigger</text>

  <rect x="210" y="105" width="160" height="35" rx="5" fill="#7c2d12" stroke="#f97316" stroke-width="2"/>
  <text x="290" y="123" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="700">|P(ℕ)| — power set of ℕ</text>
  <text x="290" y="135" text-anchor="middle" fill="#64748b" font-size="7">uncountable (same as |ℝ|)</text>

  <text x="290" y="153" text-anchor="middle" fill="#475569" font-size="10">↑ bigger</text>

  <rect x="225" y="160" width="130" height="35" rx="5" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="290" y="178" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">|ℝ| — real numbers</text>
  <text x="290" y="190" text-anchor="middle" fill="#64748b" font-size="7">uncountable (diagonal proof)</text>

  <text x="290" y="208" text-anchor="middle" fill="#475569" font-size="10">↑ bigger</text>

  <rect x="240" y="215" width="100" height="35" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="233" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">ℵ₀ = |ℕ| integers</text>
  <text x="290" y="245" text-anchor="middle" fill="#64748b" font-size="7">countable infinity (smallest)</text>

  <!-- Side note -->
  <rect x="20" y="50" width="160" height="120" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="100" y="72" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Diagonal Argument</text>
  <text x="100" y="92" text-anchor="middle" fill="#fcd34d" font-size="7">List all reals as decimals:</text>
  <text x="100" y="106" text-anchor="middle" fill="#cbd5e1" font-size="6" font-family="monospace">0.1 0 1 1 0...</text>
  <text x="100" y="118" text-anchor="middle" fill="#cbd5e1" font-size="6" font-family="monospace">0.0 1 1 0 1...</text>
  <text x="100" y="130" text-anchor="middle" fill="#cbd5e1" font-size="6" font-family="monospace">0.1 1 0 1 0...</text>
  <text x="100" y="145" text-anchor="middle" fill="#fbbf24" font-size="7" font-weight="700">Flip diagonal!</text>
  <text x="100" y="158" text-anchor="middle" fill="#22c55e" font-size="6" font-family="monospace">0.0 0 1... NOT on list!</text>

  <!-- B41 connection -->
  <rect x="420" y="50" width="140" height="120" rx="8" fill="#0f172a" stroke="#dc2626" stroke-width="1.5"/>
  <text x="490" y="72" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">B41 Connection</text>
  <text x="490" y="92" text-anchor="middle" fill="#fca5a5" font-size="7">Same diagonal argument</text>
  <text x="490" y="105" text-anchor="middle" fill="#fca5a5" font-size="7">used to prove:</text>
  <text x="490" y="122" text-anchor="middle" fill="#dc2626" font-size="8" font-weight="700">Halting Problem</text>
  <text x="490" y="135" text-anchor="middle" fill="#fca5a5" font-size="7">is UNDECIDABLE!</text>
  <text x="490" y="155" text-anchor="middle" fill="#64748b" font-size="6">Turing used Cantor's</text>
  <text x="490" y="165" text-anchor="middle" fill="#64748b" font-size="6">exact proof structure</text>

  <text x="290" y="275" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="600">💡 |P(S)| = 2^|S| — Power set is ALWAYS strictly bigger than the set</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Cantor এর Tower of Infinities — ℵ₀ (countable) < |ℝ| (uncountable) < |P(ℕ)| < ... Diagonal argument: flip diagonal bits → নতুন number যা list এ নেই।</div>

<div class="dialogue"><strong>গেয়র্গ কান্টর:</strong> আমি ১৮৭৪ সালে প্রমাণ করেছিলাম যে infinity এর ভিন্ন ভিন্ন size আছে। Integer (ℕ) গুলো countable — 1, 2, 3, ... তালিকা করা যায়। Rational (ℚ) ও countable! কিন্তু Real (ℝ) — uncountable! Diagonal argument: যেকোনো list বানাও, আমি diagonal flip করে এমন একটা number বানাব যা তালিকায় নেই। Power set theorem: <code>|P(S)| > |S|</code> সবসময়। অর্থাৎ ℵ₀ < |P(ℕ)| < |P(P(ℕ))| < ... অসীম সিঁড়ি! Turing আমার diagonal argument ব্যবহার করে Halting Problem undecidable প্রমাণ করেছেন — একই গণিত, ভিন্ন domain।</div>`,
  recall: [
    { q: "Cantor এর diagonal argument কী?", a: "যেকোনো infinite list বানাও। Diagonal এর প্রতিটা bit flip করে একটা নতুন number বানাও। এই number টা list এর কোনো number এর সাথেই match করবে না — তাই list incomplete। ℝ uncountable।" },
    { q: "|P(S)| এবং |S| এর সম্পর্ক কী?", a: "|P(S)| = 2^|S|, সবসময় |S| এর চেয়ে বড়। Cantor এর theorem। অর্থাৎ যেকোনো set এর power set আরও বড় infinity।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 5 — The Counting Codex (Combinatorics)
// ═══════════════════════════════════════════
doors.push({
  num: 5,
  icon: "🔢",
  color: "#22c55e",
  tagline: "গণনার দস্তাবেজ — Counting Codex",
  name: "The Counting Codex",
  secret: "Permutation = ক্রম গুরুত্বপূর্ণ। Combination = ক্রম গুরুত্বহীন। Pigeonhole = collision গ্যারান্টিড।",
  story: `<p class="scene-setting">Combinatorics শুধু counting নয় — এটা probability, Big-O, আর cryptography এর ভিত্তি। Permutation: কতভাবে সাজানো যায় (ক্রম গুরুত্বপূর্ণ)। <code>P(n,k) = n!/(n-k)!</code>। Combination: কতভাবে বাছাই করা যায় (ক্রম গুরুত্বহীন)। <code>C(n,k) = n!/(k!(n-k)!)</code>। Pigeonhole Principle: n item, k box, n > k → অন্তত এক box এ একাধিক item। Birthday paradox: ২৩ জনে ৫০% duplicate birthday! Hash collision গ্যারান্টিড।</p>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> Django তে permutation = URL routing (ক্রম গুরুত্বপূর্ণ, <code>/api/users/</code> ≠ <code>/users/api/</code>)। Combination = ManyToManyField (ট্যাগ <code>[Python, Django]</code> = <code>[Django, Python]</code>, ক্রম গুরুত্বহীন)। Pigeonhole: hash collision গ্যারান্টিড — infinite possible URL, finite hash output। Birthday paradox: ৩৬৫ day, ২৩ জন → ~৫০% duplicate। এটাই birthday attack এর ভিত্তি — কম key space এ collision খুঁজে বের করা। Inclusion-exclusion: |A∪B| = |A| + |B| - |A∩B|। Double counting এড়াতে intersection বাদ দাও।</div>`,
  recall: [
    { q: "Permutation আর Combination এর পার্থক্য কী?", a: "Permutation = ক্রম গুরুত্বপূর্ণ (P(n,k) = n!/(n-k)!)। Combination = ক্রম গুরুত্বহীন (C(n,k) = n!/k!(n-k)!)। URL path = permutation, ManyToMany tags = combination।" },
    { q: "Birthday paradox কী?", a: "৩৬৫ দিনে ২৩ জন মানুষ হলে ~৫০% সম্ভাবনা যে দুজনের birthday একই। Pigeonhole Principle এর পরিসংখ্যান। Hash collision এবং birthday attack এর ভিত্তি।" },
  ]
});
