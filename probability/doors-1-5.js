const doors = [];

doors.push({
  num: 1,
  icon: "🔄",
  color: "#8b5cf6",
  name: "বিশ্বাসের আপডেটার",
  subtitle: "The Belief Updater",
  tech: "Bayes Theorem — Bayes 1763, prior/posterior, base rate fallacy, evidence updating",
  spirit: "ইলম ইয়াকিন — জ্ঞানের নিশ্চয়তা, প্রমাণ দিয়ে বিশ্বাস আপডেট",
  secret: "Bayes: P(H|D) = P(D|H)·P(H)/P(D)। 99% accurate fraud test → শুধু 1% সত্যিকার fraud! কারণ healthy transactions এত বেশি যে false positive আধিক্য হয়। Base rate fallacy।",
  recall: {
    q: " Bayes theorem কী? Base rate fallacy কী?",
    qen: "What is Bayes theorem? What is the base rate fallacy?",
    a: "Bayes: P(H|D) = P(D|H)·P(H)/P(D)। Prior + evidence = posterior। Base rate fallacy: prior উপেক্ষা করা। 99% accurate test কিন্তু fraud rate 0.01% → বেশিরভাগ false positive।",
    aen: "Bayes: P(H|D) = P(D|H)·P(H)/P(D). Prior + evidence = posterior. Base rate fallacy: ignoring prior. 99% accurate test but 0.01% fraud rate → mostly false positives."
  },
  story: `<p class="scene-setting">Bayes theorem হল বিশ্বাস আপডেট করার গাণিতিক সূত্র। তুমি fraud detection model বানালে — 99% accurate! কিন্তু fraud rate 0.01% হলে, positive alert-এর সত্যিকার সম্ভাবনা শুধুমাত্র 1%! কারণ healthy transactions এত বেশি যে false positive আধিক্য হয়। এটাই base rate fallacy।</p>
<p class="scene-setting en">Bayes theorem is the mathematical formula for updating beliefs. You build a fraud detection model — 99% accurate! But if fraud rate is 0.01%, a positive alert has only a 1% chance of being real fraud! Because healthy transactions are so numerous that false positives dominate. This is the base rate fallacy.</p>

<div class="dialogue"><strong>বিশ্বাস-আপডেটকারী আলী:</strong> Reverend Thomas Bayes 1763 সালে একটি সূত্র আবিষ্কার করেন — মৃত্যুর পর প্রকাশিত। সূত্র: P(H|D) = P(D|H)·P(H)/P(D)। Prior বিশ্বাস P(H) + নতুন প্রমাণ P(D|H) = আপডেটেড বিশ্বাস P(H|D)। চিকিৎসক এটা ভুল বুঝে রোগীকে ভুল চিকিৎসা দেয়। Software engineer ভুল বুঝে false positive-এ ডুবে যায়। কিন্তু সঠিক বুঝলে — প্রতিটি পর্যবেক্ষণে বিশ্বাস নিখুঁত হয়।</div>
<div class="dialogue en"><strong>Belief Updater Ali:</strong> Reverend Thomas Bayes in 1763 discovered a formula — published posthumously. P(H|D) = P(D|H)·P(H)/P(D). Prior belief P(H) + new evidence P(D|H) = updated belief P(H|D). Doctors misunderstand this and mistreat patients. Software engineers misunderstand and drown in false positives. But understood correctly — every observation refines belief.</div>

<div class="code-block">— Python: Bayes Theorem —

  # Fraud detection example:
  # P(fraud) = 0.0001 (0.01% — base rate)
  # P(alert|fraud) = 0.99 (99% sensitive)
  # P(alert|not fraud) = 0.01 (10% false positive)

  P_fraud = 0.0001       # Prior
  P_not_fraud = 1 - P_fraud
  P_alert_given_fraud = 0.99
  P_alert_given_not = 0.01

  # Total probability of alert:
  P_alert = (P_alert_given_fraud * P_fraud +
             P_alert_given_not * P_not_fraud)
  # = 0.99*0.0001 + 0.01*0.9999 = 0.010098

  # Bayes: P(fraud|alert) = ?
  P_fraud_given_alert = (
      P_alert_given_fraud * P_fraud / P_alert
  )
  print(f"{P_fraud_given_alert:.4f}")  # 0.0098!
  # মাত্র 0.98% — 99% accurate test কিন্তু 99% false positive!

  — শিক্ষা: base rate উপেক্ষা করো না! —
  — Prior + Evidence = Posterior —</div>

<div class="verse">وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং যাদের জ্ঞান দেওয়া হয়েছে তারা মর্যাদায় উঁচুতে।" — কুরআন ৫৮:১১</div>

<p class="scene-setting">ইলম ইয়াকিন — জ্ঞানের নিশ্চয়তা। Bayes theorem সেই নিশ্চয়তার গাণিতিক রূপ। জ্ঞান স্থির নয় — প্রতিটি প্রমাণে আপডেট হয়। prior থেকে posterior। অজ্ঞতা থেকে জ্ঞান। যাদের জ্ঞান আছে তারা মর্যাদায় উঁচুতে — কারণ তারা সঠিকভাবে আপডেট করে।</p>
<p class="scene-setting en">Ilm Yaqeen — certainty of knowledge. Bayes theorem is the mathematical form of that certainty. Knowledge is not static — it updates with each piece of evidence. From prior to posterior. From ignorance to knowledge. Those with knowledge are elevated — because they update correctly.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৩ (Loom of Reason) Door ৫ (Bayesian):</strong> Bayesian reasoning শিখেছিলে — এখন গাণিতিক ভিত্তি! Book ৩৪ (Statistics) Door ৩: hypothesis testing = Bayes-এর বিপরীত।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrPB1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#a78bfa"/>
    </marker>
  </defs>
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔄 Bayes Theorem: বিশ্বাস আপডেট</text>
  <circle cx="180" cy="110" r="65" fill="#8b5cf6" fill-opacity="0.15" stroke="#8b5cf6" stroke-width="2.5"/>
  <text x="155" y="85" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">H</text>
  <text x="155" y="100" text-anchor="middle" fill="#a78bfa" font-size="10">Fraud</text>
  <circle cx="250" cy="110" r="65" fill="#22d3ee" fill-opacity="0.12" stroke="#22d3ee" stroke-width="2.5"/>
  <text x="280" y="85" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="900">D</text>
  <text x="280" y="100" text-anchor="middle" fill="#7dd3fc" font-size="10">Alert</text>
  <text x="215" y="115" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">H∩D</text>
  <rect x="15" y="195" width="250" height="40" rx="6" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="140" y="213" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">সূত্র</text>
  <text x="140" y="228" text-anchor="middle" fill="#e2e8f0" font-size="8">P(H|D) = P(D|H)·P(H) / P(D)</text>
  <rect x="290" y="195" width="275" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="427" y="213" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Prior + Evidence = Posterior</text>
  <text x="427" y="228" text-anchor="middle" fill="#4ade80" font-size="10">P(H) + P(D|H) → P(H|D)</text>
  <rect x="370" y="40" width="195" height="140" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="467" y="60" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">⚠️ Base Rate Fallacy</text>
  <text x="380" y="80" fill="#e2e8f0" font-size="8">99% accurate fraud test</text>
  <text x="380" y="97" fill="#e2e8f0" font-size="8">Fraud rate: 0.01% (base rate)</text>
  <text x="380" y="115" fill="#fcd34d" font-size="8">→ Alert এলে সত্যিকার fraud:</text>
  <text x="467" y="135" text-anchor="middle" fill="#f87171" font-size="14" font-weight="900">মাত্র 1%!</text>
  <text x="380" y="158" fill="#cbd5e1" font-size="10">কারণ healthy transaction এত বেশি</text>
  <text x="380" y="172" fill="#cbd5e1" font-size="10">যে false positive আধিক্য হয়</text>
  <line x1="215" y1="175" x2="370" y2="110" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>
</div>
<div class="svg-caption">চিত্র: Bayes Theorem — Prior বিশ্বাস P(H) এবং নতুন প্রমাণ P(D|H) থেকে আপডেটেড বিশ্বাস P(H|D) পাওয়া যায়। ৯৯% নিখুঁত fraud test-ও base rate উপেক্ষা করলে ভুল ফল দেয়।</div>

<div class="secret-box">🔄 <strong>Bayes = প্রমাণ দিয়ে বিশ্বাস আপডেট। Prior → Posterior।</strong> কিন্তু বহু ঘটনা একসাথে ঘটলে? গড় কী বলে? সেই উত্তর — expectation। পরের দরজায়।</div>`,
  senior: {
    title: "Bayes Theorem এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Bayes (1763)</td><td>P(H|D) = P(D|H)·P(H)/P(D)</td></tr>
<tr><td class="hl">Prior P(H)</td><td>প্রাথমিক বিশ্বাস</td></tr>
<tr><td class="hl">Posterior P(H|D)</td><td>আপডেটেড বিশ্বাস</td></tr>
<tr><td class="hl">Base Rate Fallacy</td><td>Prior উপেক্ষা</td></tr>
<tr><td class="hl">Evidence</td><td>নতুন পর্যবেক্ষণ</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "📊",
  color: "#8b5cf6",
  name: "গড়ের ভবিষ্যৎকথী",
  subtitle: "The Average Oracle",
  tech: "Expectation & Variance — E[X], Var(X), linearity of expectation, law of large numbers, Chebyshev",
  spirit: "মিজান — ভারসাম্য, গড় ও বিচ্যুতি",
  secret: "E[X] = গড় ফলাফল। Var(X) = কতটা ছড়ানো। Linearity: E[aX+bY] = aE[X]+bE[Y]। Law of Large Numbers: n→∞ হলে গড় → E[X]।",
  recall: {
    q: " E[X] ও Var(X) কী? Linearity of expectation কী?",
    qen: "What are E[X] and Var(X)? What is linearity of expectation?",
    a: "E[X] = গড় ফলাফল। Var(X) = গড় থেকে বিচ্যুতির বর্গ। Linearity: E[aX+bY] = aE[X]+bE[Y] — X, Y independent হওয়া দরকার না!",
    aen: "E[X] = average outcome. Var(X) = squared deviation from mean. Linearity: E[aX+bY] = aE[X]+bE[Y] — X, Y need not be independent!"
  },
  story: `<p class="scene-setting">আলী (Door ১) তোমাকে Bayes শিখিয়েছেন। এখন একটি সহজ প্রশ্ন — একটি ছক্কা পাশার গড় কত? ১, ২, ৩, ৪, ৫, ৬ — প্রতিটি সমান সম্ভাবনা। E[X] = (১+২+৩+৪+৫+৬)/৬ = ৩.৫। কিন্তু ৩.৫ কখনো আসে না! গড় একটি প্রত্যাশা — দীর্ঘে গড় এদিকে যায়। Law of Large Numbers: যত বেশি পাশা মারবে, গড় তত ৩.৫-এর কাছে।</p>
<p class="scene-setting en">Ali (Door 1) taught you Bayes. Now a simple question — what's the average of a die roll? 1, 2, 3, 4, 5, 6 — equal probability. E[X] = (1+2+3+4+5+6)/6 = 3.5. But 3.5 never comes up! The average is an expectation — over the long run, the mean approaches it. Law of Large Numbers: the more dice you roll, the closer the average gets to 3.5.</p>

<div class="dialogue"><strong>গড়-নির্ণয়কারী ফাতিমা:</strong> E[X] = Σ x·P(x)। প্রতিটি ফলাফল তার সম্ভাবনা দিয়ে গুণ, সব যোগ। Var(X) = E[(X-E[X])²] — গড় থেকে কতটা দূরে। সবচেয়ে সুন্দর ধারণা — linearity! E[X+Y] = E[X]+E[Y] — X ও Y independent হওয়ার দরকার নেই! দুটি পাশা মারলে গড় যোগফল = ৩.৫+৩.৫ = ৭। সবসময়। এটাই গাণিতিক জাদু।</div>
<div class="dialogue en"><strong>Average Determiner Fatima:</strong> E[X] = Σ x·P(x). Multiply each outcome by its probability, sum all. Var(X) = E[(X-E[X])²] — how far from mean. The most beautiful concept — linearity! E[X+Y] = E[X]+E[Y] — X and Y need not be independent! Two dice rolled, average sum = 3.5+3.5 = 7. Always. This is mathematical magic.</div>

<div class="code-block">— Python: Expectation ও Variance —

  import numpy as np

  # একটি fair die:
  outcomes = [1, 2, 3, 4, 5, 6]
  probs = [1/6] * 6

  # E[X] = Σ x · P(x)
  EX = sum(x * p for x, p in zip(outcomes, probs))
  print(f"E[X] = {EX}")  # 3.5

  # Var(X) = E[X²] - E[X]²
  EX2 = sum(x**2 * p for x, p in zip(outcomes, probs))
  VarX = EX2 - EX**2
  print(f"Var(X) = {VarX:.4f}")  # ~2.917

  # Law of Large Numbers যাচাই:
  rolls = np.random.randint(1, 7, size=100000)
  cumulative_mean = np.cumsum(rolls) / np.arange(1, len(rolls)+1)
  print(f"১০০০ রোলে গড়: {cumulative_mean[999]:.3f}")   # ~3.5
  print(f"১০০০০০ রোলে গড়: {cumulative_mean[-1]:.3f}")  # ~3.500

  # Linearity: দুটি পাশা
  two_dice = np.random.randint(1, 7, 100000) + \\
             np.random.randint(1, 7, 100000)
  print(f"দুটি পাশার যোগফল গড়: {two_dice.mean():.3f}")  # ~7.0
  # E[X+Y] = E[X] + E[Y] = 3.5 + 3.5 = 7.0 ✅</div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>গুরুত্বপূর্ণ সূত্র:</strong><br>
<strong>E[X] = Σ x·P(x):</strong> গড় ফলাফল<br>
<strong>Var(X) = E[X²] - E[X]²:</strong> ছড়ানোর মাপ<br>
<strong>Linearity:</strong> E[aX+bY] = aE[X]+bE[Y]<br>
<strong>Law of Large Numbers:</strong> গড় → E[X] যখন n → ∞<br>
<strong>Chebyshev:</strong> P(|X-E[X]| ≥ k) ≤ Var/k²</div></div>

<div class="verse">وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং প্রতিটি কিছু আমরা একটি স্পষ্ট অভিলেখে গণনা করেছি।" — কুরআন ৩৬:১২</div>

<p class="scene-setting">মিজান — ভারসাম্য। E[X] সেই ভারসাম্যের কেন্দ্র — গড়। Var(X) সেই ভারসাম্য থেকে কতটা বিচ্যুতি। প্রকৃতিতে সবকিছুর একটি গড় আছে — বৃষ্টির পরিমাণ, মানুষের উচ্চতা, পাশার ফল। গড় থেকে বিচ্যুতি প্রকৃতির নিয়ম। গণনা সব লেখা আছে।</p>
<p class="scene-setting en">Mizan — balance. E[X] is the center of that balance — the mean. Var(X) is the deviation from that balance. In nature, everything has a mean — rainfall, human height, die outcomes. Deviation from the mean is nature's law. Everything is counted and recorded.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৪ (Distributions):</strong> mean ও variance এর পূর্ণ আলোচনা। Book ৩৩ (Loom of Reason) Door ৪ (Fermi): estimation = expectation এর অনুমান।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">📊 গড় ও ছড়ানো: E[X] ও Var(X)</text>
  <rect x="30" y="40" width="180" height="180" rx="8" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="120" y="58" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">একটি fair পাশা</text>
  <circle cx="60" cy="85" r="13" fill="#22c55e" fill-opacity="0.2" stroke="#4ade80" stroke-width="1.5"/>
  <text x="60" y="89" text-anchor="middle" fill="#4ade80" font-size="9">1</text>
  <circle cx="95" cy="85" r="13" fill="#22c55e" fill-opacity="0.4" stroke="#4ade80" stroke-width="1.5"/>
  <text x="95" y="89" text-anchor="middle" fill="#4ade80" font-size="9">2</text>
  <circle cx="130" cy="85" r="13" fill="#22c55e" fill-opacity="0.6" stroke="#4ade80" stroke-width="1.5"/>
  <text x="130" y="89" text-anchor="middle" fill="#4ade80" font-size="9">3</text>
  <circle cx="165" cy="85" r="13" fill="#22c55e" fill-opacity="0.8" stroke="#4ade80" stroke-width="1.5"/>
  <text x="165" y="89" text-anchor="middle" fill="#4ade80" font-size="9">4</text>
  <circle cx="60" cy="125" r="13" fill="#22c55e" fill-opacity="1" stroke="#4ade80" stroke-width="1.5"/>
  <text x="60" y="129" text-anchor="middle" fill="#fff" font-size="9">5</text>
  <circle cx="95" cy="125" r="13" fill="#22c55e" fill-opacity="0.9" stroke="#4ade80" stroke-width="1.5"/>
  <text x="95" y="129" text-anchor="middle" fill="#fff" font-size="9">6</text>
  <text x="120" y="165" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">E[X] = (1+2+3+4+5+6)/6</text>
  <text x="120" y="182" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="900">= 3.5</text>
  <text x="120" y="200" text-anchor="middle" fill="#cbd5e1" font-size="10">গড় ফলাফল — কখনো ৩.৫ আসে না!</text>
  <text x="120" y="213" text-anchor="middle" fill="#cbd5e1" font-size="10">কিন্তু দীর্ঘে গড় এদিকে যায়</text>
  <rect x="240" y="40" width="160" height="180" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="320" y="58" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">দুটি পাশা (Linearity)</text>
  <text x="320" y="85" text-anchor="middle" fill="#e2e8f0" font-size="8">E[X+Y] = E[X]+E[Y]</text>
  <text x="320" y="105" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="900">= 3.5 + 3.5 = 7.0</text>
  <text x="320" y="128" text-anchor="middle" fill="#cbd5e1" font-size="10">X, Y independent হওয়া</text>
  <text x="320" y="140" text-anchor="middle" fill="#cbd5e1" font-size="10">দরকার নেই! সবসময় সত্য।</text>
  <text x="320" y="170" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="700">Var(X) = E[X²] − E[X]²</text>
  <text x="320" y="190" text-anchor="middle" fill="#fcd34d" font-size="8">≈ 2.917 (পাশার ছড়ানো)</text>
  <text x="320" y="208" text-anchor="middle" fill="#cbd5e1" font-size="10">গড় থেকে কতটা দূরে</text>
  <rect x="430" y="40" width="140" height="180" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="500" y="60" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Law of Large Numbers</text>
  <text x="500" y="85" text-anchor="middle" fill="#e2e8f0" font-size="10">n → ∞ হলে</text>
  <text x="500" y="100" text-anchor="middle" fill="#e2e8f0" font-size="10">গড় → E[X]</text>
  <line x1="450" y1="180" x2="550" y2="180" stroke="#64748b" stroke-width="1.5"/>
  <line x1="450" y1="120" x2="450" y2="180" stroke="#64748b" stroke-width="1.5"/>
  <text x="448" y="125" text-anchor="end" fill="#64748b" font-size="10">5</text>
  <path d="M 450,130 Q 470,135 480,165 Q 500,177 550,178" fill="none" stroke="#4ade80" stroke-width="2"/>
  <text x="500" y="200" text-anchor="middle" fill="#4ade80" font-size="10">গড় ৩.৫-এ কনভার্জ</text>
  <text x="500" y="213" text-anchor="middle" fill="#cbd5e1" font-size="10">Chebyshev: P(|X-μ|≥kσ) ≤ 1/k²</text>
</svg>
</div>
<div class="svg-caption">চিত্র: গড় E[X] = প্রত্যাশিত ফলাফল, Var(X) = গড় থেকে ছড়ানো। Linearity of expectation বলে E[X+Y] = E[X]+E[Y] — independent হওয়া দরকার নেই। Law of Large Numbers: যত বেশি চেষ্টা, গড় তত E[X]-এর কাছে।</div>

<div class="secret-box">📊 <strong>E[X] = গড়, Var(X) = ছড়ানো। Linearity = জাদু।</strong> কিন্তু গড় সব বলে না — কিছু বিতরণ একটি বিশেষ আকৃতি অনুসরণ করে। সেই আকৃতি — bell curve। পরের দরজায়।</div>`,
  senior: {
    title: "Expectation ও Variance এক নজরে",
    body: `<table class="kv-table"><tr><th>সূত্র</th><th>বিবরণ</th></tr>
<tr><td class="hl">E[X]</td><td>Σ x·P(x) — গড় ফলাফল</td></tr>
<tr><td class="hl">Var(X)</td><td>E[X²] - E[X]² — ছড়ানো</td></tr>
<tr><td class="hl">Linearity</td><td>E[aX+bY] = aE[X]+bE[Y]</td></tr>
<tr><td class="hl">Law of Large Numbers</td><td>গড় → E[X] যখন n → ∞</td></tr>
<tr><td class="hl">Chebyshev</td><td>P(|X-μ| ≥ kσ) ≤ 1/k²</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🔔",
  color: "#8b5cf6",
  name: "ঘণ্টা বক্ররেখার জাদু",
  subtitle: "The Bell Curve Magic",
  tech: "Normal Distribution — Gauss 1809, Central Limit Theorem, 68-95-99.7 rule, standard deviation, z-score",
  spirit: "সানিয়াহ — প্রকাশ, সবকিছু একটি কেন্দ্রে একত্র",
  secret: "Normal distribution: ঘণ্টা আকৃতি। μ কেন্দ্রে, σ প্রসারণ। 68% ডেটা μ±σ-এর মধ্যে। CLT: যেকোনো distribution-এর নমুনা গড় → normal! এটাই প্রকৃতির সবচেয়ে গুরুত্বপূর্ণ বিতরণ।",
  recall: {
    q: " Central Limit Theorem কী? 68-95-99.7 rule কী?",
    qen: "What is the Central Limit Theorem? What is the 68-95-99.7 rule?",
    a: "CLT: যেকোনো distribution থেকে নমুনা গড় → normal distribution। 68-95-99.7: μ±σ=৬৮%, μ±২σ=৯৫%, μ±৩σ=৯৯.৭%।",
    aen: "CLT: sample means from any distribution converge to normal. 68-95-99.7: μ±σ=68%, μ±2σ=95%, μ±3σ=99.7%."
  },
  story: `<p class="scene-setting">ফাতিমা (Door ২) তোমাকে গড় ও variance শিখিয়েছেন। এখন একটি গভীর সত্য — প্রকৃতিতে সবকিছু একটি ঘণ্টা আকৃতি অনুসরণ করে! মানুষের উচ্চতা, পরীক্ষার নম্বর, রক্তচাপ — সব কেন্দ্রে বেশি, দুই প্রান্তে কম। Gauss ১৮০৯ সালে এটা গাণিতিকভাবে দেখান। কিন্তু সবচেয়ে অদ্ভুত — Central Limit Theorem। যেকোনো বিতরণ থেকে নমুনা গড় নাও — সেটা normal হয়ে যায়!</p>
<p class="scene-setting en">Fatima (Door 2) taught you mean and variance. Now a deep truth — in nature, everything follows a bell shape! Human height, test scores, blood pressure — all concentrated at center, less at extremes. Gauss showed this mathematically in 1809. But most surprising — the Central Limit Theorem. Take sample means from ANY distribution — they become normal!</p>

<div class="dialogue"><strong>বক্ররেখা-যাজক ইউসুফ:</strong> Normal distribution: f(x) = (১/√(২πσ²))·e^(-(x-μ)²/(২σ²))। ভয় পেও না — শুধু মনে রাখো ঘণ্টা। μ = কেন্দ্র, σ = প্রসারণ। ৬৮-৯৫-৯৯.৭ নিয়ম: μ±σ এর মধ্যে ৬৮% ডেটা। μ±২σ = ৯৫%। μ±৩σ = ৯৯.৭%। মানুষের গড় উচ্চতা ৫'৭" (μ), σ = ৩"। তাহলে ৬৮% মানুষ ৫'৪" থেকে ৫'১০" এর মধ্যে। ৯৯.৭% ৪'১০" থেকে ৬'৪" এর মধ্যে।</div>
<div class="dialogue en"><strong>Curve Priest Yusuf:</strong> Normal distribution: the bell curve formula. Don't worry — just remember the bell. μ = center, σ = spread. 68-95-99.7 rule: 68% data within μ±σ. μ±2σ = 95%. μ±3σ = 99.7%. Human average height 5'7" (μ), σ = 3". Then 68% of people between 5'4" and 5'10". 99.7% between 4'10" and 6'4".</div>

<div class="code-block">— Python: Normal Distribution —

  import numpy as np
  import scipy.stats as stats

  mu, sigma = 175, 7   # উচ্চতা: গড় 175cm, σ=7
  height = np.random.normal(mu, sigma, 100000)

  # 68-95-99.7 যাচাই:
  within_1sigma = np.mean(np.abs(height - mu) <= sigma)
  within_2sigma = np.mean(np.abs(height - mu) <= 2*sigma)
  within_3sigma = np.mean(np.abs(height - mu) <= 3*sigma)
  print(f"μ±σ: {within_1sigma:.3f}")   # ~0.68 ✅
  print(f"μ±2σ: {within_2sigma:.3f}")  # ~0.95 ✅
  print(f"μ±3σ: {within_3sigma:.3f}")  # ~0.997 ✅

  # Z-score: কত σ দূরে?
  z = (190 - mu) / sigma   # (190-175)/7 = 2.14
  print(f"190cm-এর z-score: {z:.2f}")  # 2.14σ
  print(f"P(height > 190): {1 - stats.norm.cdf(z):.4f}")  # ~1.6%

  # Central Limit Theorem যাচাই:
  # uniform distribution থেকে নমুনা গড় → normal!
  sample_means = [
      np.random.uniform(0, 1, 100).mean()
      for _ in range(10000)
  ]
  # এটা uniform ছিল, কিন্তু গড় normal হয়ে গেছে!</div>

<div class="callout info"><span class="co-icon">🔔</span><div><strong>Normal Distribution বৈশিষ্ট্য:</strong><br>
<strong>Shape:</strong> ঘণ্টা — কেন্দ্রে বেশি, প্রান্তে কম<br>
<strong>μ (mean):</strong> কেন্দ্র<br>
<strong>σ (std dev):</strong> প্রসারণ<br>
<strong>68-95-99.7:</strong> μ±σ, μ±২σ, μ±৩σ<br>
<strong>Z-score:</strong> (x-μ)/σ — কত σ দূরে<br>
<strong>CLT:</strong> যেকোনো distribution → sample mean → normal</div></div>

<div class="verse">وَالْأَرْضِ وَمَا طَحَاهَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"পৃথিবী ও যিনি তাকে বিস্তৃত করেছেন।" — কুরআন ৯১:৬</div>

<p class="scene-setting">সানিয়াহ — প্রকাশ, বিস্তার। Normal distribution সেই প্রকাশের রূপ — সবকিছু একটি কেন্দ্রে একত্র হয়, তারপর বিস্তৃত হয়। প্রকৃতির সব পরিমাপ — উচ্চতা, ওজন, তাপমাত্রা — এই ঘণ্টা অনুসরণ করে। CLT আরও গভীর — যেকোনো বিতরণ থেকেই গড় এই আকৃতি ধারণ করে। এটাই প্রকৃতির গণিত।</p>
<p class="scene-setting en">Saniyah — manifestation, spreading. Normal distribution is the form of that manifestation — everything gathers at a center, then spreads. All natural measurements — height, weight, temperature — follow this bell. CLT goes deeper — the mean of ANY distribution takes this shape. This is nature's mathematics.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৪ (Distributions):</strong> normal, binomial, Poisson — সব বিতরণ। Book ৩৩ (Loom of Reason) Door ৫ (Bayesian): normal = prior হিসেবে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔔 Normal Distribution: ঘণ্টা বক্ররেখা</text>
  <rect x="20" y="40" width="360" height="170" rx="8" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="360" y2="180" stroke="#64748b" stroke-width="1.5"/>
  <path d="M 50,180 Q 120,180 160,140 Q 190,60 200,55 Q 210,60 240,140 Q 280,180 360,180" fill="#8b5cf6" fill-opacity="0.2" stroke="#a78bfa" stroke-width="2.5"/>
  <line x1="200" y1="55" x2="200" y2="180" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="200" y="50" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">μ</text>
  <line x1="140" y1="100" x2="140" y2="180" stroke="#22d3ee" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="260" y1="100" x2="260" y2="180" stroke="#22d3ee" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="140" y="195" text-anchor="middle" fill="#7dd3fc" font-size="10">μ−σ</text>
  <text x="200" y="195" text-anchor="middle" fill="#fcd34d" font-size="10">μ</text>
  <text x="260" y="195" text-anchor="middle" fill="#7dd3fc" font-size="10">μ+σ</text>
  <line x1="90" y1="140" x2="90" y2="180" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="310" y1="140" x2="310" y2="180" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="90" y="195" text-anchor="middle" fill="#4ade80" font-size="10">μ−2σ</text>
  <text x="310" y="195" text-anchor="middle" fill="#4ade80" font-size="10">μ+2σ</text>
  <rect x="60" y="120" width="280" height="15" fill="#22d3ee" fill-opacity="0.15"/>
  <text x="200" y="131" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">μ±σ: 68%</text>
  <rect x="90" y="143" width="220" height="12" fill="#22c55e" fill-opacity="0.15"/>
  <text x="200" y="152" text-anchor="middle" fill="#4ade80" font-size="10">μ±2σ: 95%</text>
  <text x="200" y="172" text-anchor="middle" fill="#f87171" font-size="10">μ±3σ: 99.7%</text>
  <rect x="400" y="40" width="170" height="100" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="485" y="60" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">68-95-99.7 নিয়ম</text>
  <text x="410" y="80" fill="#7dd3fc" font-size="8">μ±1σ → 68% ডেটা</text>
  <text x="410" y="97" fill="#4ade80" font-size="8">μ±2σ → 95% ডেটা</text>
  <text x="410" y="114" fill="#f87171" font-size="8">μ±3σ → 99.7% ডেটা</text>
  <text x="410" y="132" fill="#cbd5e1" font-size="10">Z-score = (x−μ)/σ</text>
  <rect x="400" y="150" width="170" height="60" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="485" y="170" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Central Limit Theorem</text>
  <text x="485" y="186" text-anchor="middle" fill="#e2e8f0" font-size="10">যেকোনো distribution</text>
  <text x="485" y="198" text-anchor="middle" fill="#e2e8f0" font-size="10">থেকে নমুনা গড়</text>
  <text x="485" y="210" text-anchor="middle" fill="#4ade80" font-size="10">→ normal হয়ে যায়!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Normal distribution — ঘণ্টা আকৃতি। μ কেন্দ্রে, σ প্রসারণ। 68-95-99.7 নিয়ম: μ±σ-এর মধ্যে ৬৮%, μ±2σ-এ ৯৫%, μ±3σ-এ ৯৯.৭%। CLT: যেকোনো বিতরণ থেকে নমুনা গড় normal হয়।</div>

<div class="secret-box">🔔 <strong>Normal = ঘণ্টা। CLT = যেকোনো থেকে normal। 68-95-99.7।</strong> কিন্তু কিছু ঘটনা স্মৃতিহীন — অতীত ভবিষ্যতকে প্রভাবিত করে না। সেই বিশেষ ক্ষেত্র — memoryless। পরের দরজায়।</div>`,
  senior: {
    title: "Normal Distribution এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Gauss (1809)</td><td>Normal distribution গাণিতিক রূপ</td></tr>
<tr><td class="hl">μ (mean)</td><td>কেন্দ্র</td></tr>
<tr><td class="hl">σ (std dev)</td><td>প্রসারণ</td></tr>
<tr><td class="hl">68-95-99.7</td><td>μ±σ, μ±২σ, μ±৩σ</td></tr>
<tr><td class="hl">Z-score</td><td>(x-μ)/σ</td></tr>
<tr><td class="hl">CLT</td><td>sample mean → normal</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "🎲",
  color: "#8b5cf6",
  name: "স্মৃতিহীন পথিক",
  subtitle: "The Memoryless Walker",
  tech: "Geometric & Exponential Distribution — memoryless property, hazard rate, waiting time, M/M/1 queue",
  spirit: "তাওয়াক্কুল — ভরসা, ফল আল্লাহর হাতে",
  secret: "Memoryless: P(X>s+t | X>s) = P(X>t)। অতীত ভবিষ্যতকে প্রভাবিত করে না! বাস ১০ মিনিট দেরি করেছে — পরের বাস এখনও একই সম্ভাবনায় আসে। Geometric = discrete, Exponential = continuous memoryless।",
  recall: {
    q: " Memoryless property কী? কোন দুটি distribution memoryless?",
    qen: "What is the memoryless property? Which two distributions are memoryless?",
    a: "P(X>s+t | X>s) = P(X>t)। Geometric (discrete) ও Exponential (continuous) — শুধু এই দুটি! অতীত প্রভাব ফেলে না।",
    aen: "P(X>s+t | X>s) = P(X>t). Geometric (discrete) and Exponential (continuous) — only these two! Past has no effect."
  },
  story: `<p class="scene-setting">ইউসুফ (Door ৩) তোমাকে normal distribution শিখিয়েছেন। এখন একটি অদ্ভুত ধারণা — memoryless। তুমি বাসের জন্য অপেক্ষা করছো। ১০ মিনিট হলো। সাধারণ চিন্তায় — বাস এখন বেশি সম্ভব! কিন্তু memoryless property বলে — না! বাস আসার সম্ভাবনা এখনও একই। অতীত ১০ মিনিট প্রভাব ফেলে না। এটাই exponential distribution।</p>
<p class="scene-setting en">Yusuf (Door 3) taught you normal distribution. Now a strange concept — memoryless. You wait for a bus. 10 minutes passed. Normally you'd think — the bus is more likely now! But memoryless property says — no! The probability of the bus arriving is the same. The past 10 minutes have no effect. This is exponential distribution.</p>

<div class="dialogue"><strong>স্মৃতিহীন-পথিক আমিন:</strong> Memoryless = অতীত প্রভাবহীন। P(X>২০ | X>১০) = P(X>১০)। বাস ১০ মিনিট দেরি করেছে? পরের বাস এখনও একই rate-এ আসে। Exponential: f(x) = λe^(-λx)। λ = rate (বাস প্রতি ঘণ্টায়)। Mean = ১/λ। Geometric = discrete version — কতবার চেষ্টা করলে প্রথম success? M/M/১ queue: Markovian arrival, Markovian service, ১ server।</div>
<div class="dialogue en"><strong>Memoryless Walker Amin:</strong> Memoryless = past has no effect. P(X>20 | X>10) = P(X>10). Bus 10 minutes late? Next bus arrives at the same rate. Exponential: f(x) = λe^(-λx). λ = rate. Mean = 1/λ. Geometric = discrete version — how many trials until first success? M/M/1 queue: Markovian arrival, Markovian service, 1 server.</div>

<div class="code-block">— Python: Memoryless Distribution —

  import numpy as np
  from scipy.stats import expon

  # Exponential: বাস প্রতি ১৫ মিনিটে (λ = 1/15)
  lam = 1/15  # rate
  mean_wait = 1/lam  # = 15 minutes

  # P(wait > 10)?
  p_over_10 = expon.sf(10, scale=mean_wait)
  print(f"P(X>10) = {p_over_10:.3f}")  # ~0.513

  # Memoryless যাচাই:
  # P(X>20 | X>10) = P(X>10)?
  p_over_20 = expon.sf(20, scale=mean_wait)
  conditional = p_over_20 / p_over_10  # P(X>20|X>10)
  print(f"P(X>20|X>10) = {conditional:.3f}")  # 0.513!
  print(f"P(X>10)      = {p_over_10:.3f}")    # 0.513!
  # একই! ✅ Memoryless proven!

  # Geometric: কতবার coin flip করলে first heads?
  from scipy.stats import geom
  p = 0.3  # heads probability
  print(f"Expected flips: {1/p:.1f}")  # 3.3
  print(f"P(first=3): {geom.pmf(3, p):.3f}")  # 0.147

  # M/M/1 Queue:
  arrival_rate = 2   # per minute
  service_rate = 3   # per minute
  rho = arrival_rate / service_rate  # utilization
  avg_wait = rho / (service_rate - arrival_rate)
  print(f"Avg wait: {avg_wait:.2f} min")  # 0.67</div>

<div class="callout info"><span class="co-icon">🎲</span><div><strong>Memoryless distributions:</strong><br>
<strong>Exponential (continuous):</strong> সময় পর্যন্ত অপেক্ষা — bus, server, radioactive decay<br>
<strong>Geometric (discrete):</strong> কতবার চেষ্টা — coin flip পর্যন্ত heads<br>
<strong>λ (rate):</strong> ঘটনার হার। Mean = ১/λ<br>
<strong>M/M/1 Queue:</strong> arrival = exponential, service = exponential<br>
<strong>Poisson Process:</strong> events per unit time = Poisson(λ)</div></div>

<div class="verse">قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"বলো, আমাদের কেবল তাই হবে যা আল্লাহ আমাদের জন্য লিখেছেন।" — কুরআন ৯:৫১</div>

<p class="scene-setting">তাওয়াক্কুল — ভরসা। Memoryless property সেই ভরসার গাণিতিক রূপ — অতীত ভবিষ্যতকে নির্ধারণ করে না। ফল আল্লাহর হাতে। বাস ১০ মিনিট দেরি — এর মানে এই নয় এখন বেশি সম্ভব। প্রতিটি মুহূর্ত নতুন — অতীত থেকে স্বাধীন। এটাই memoryless-এর দর্শন।</p>
<p class="scene-setting en">Tawakkul — trust. Memoryless property is the mathematical form of that trust — the past does not determine the future. Outcomes are in Allah's hands. Bus 10 minutes late — doesn't mean more likely now. Each moment is new — free from the past. This is the philosophy of memoryless.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৪ (Distributions):</strong> Poisson, exponential, geometric — সব বিতরণ। Book ৩৮ (OS) Door ৬ (Scheduler): queue theory = M/M/1।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎲 Memoryless: Exponential Distribution</text>
  <path d="M 30 200 Q 60 60 100 120 Q 140 170 200 195 Q 300 210 500 210" fill="none" stroke="#a855f7" stroke-width="2.5"/>
  <text x="380" y="200" fill="#c084fc" font-size="10">P(T &gt; t) = e^(-lambda*t)</text>
  <line x1="30" y1="210" x2="550" y2="210" stroke="#64748b" stroke-width="0.5"/>
  <line x1="30" y1="50" x2="30" y2="210" stroke="#64748b" stroke-width="0.5"/>
  <line x1="100" y1="120" x2="100" y2="210" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="100" y="225" text-anchor="middle" fill="#fcd34d" font-size="10">t=1 (63% happened)</text>
  <line x1="200" y1="195" x2="200" y2="210" stroke="#22d3ee" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="200" y="225" text-anchor="middle" fill="#7dd3fc" font-size="10">t=2 (86%)</text>
  <line x1="350" y1="205" x2="350" y2="210" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="350" y="225" text-anchor="middle" fill="#4ade80" font-size="10">t=5 (99%)</text>
  <text x="290" y="245" text-anchor="middle" fill="#94a3b8" font-size="10">Memoryless: P(T&gt;t+s | T&gt;t) = P(T&gt;s) — past doesn't matter!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Exponential distribution — স্মৃতিহীন। অতীত ভবিষ্যতকে প্রভাবিত করে না।</div>

<div class="secret-box">🎲 <strong>Memoryless = অতীত প্রভাবহীন। Exponential ও Geometric।</strong> কিন্তু একটি বিপদ লুকানো — বিরল ঘটনা। কখনো কখনো চরম ঘটনা ঘটে। সেই ঝুঁকি — tail risk। সেই পরের দরজায়।</div>`,
  senior: {
    title: "Memoryless Distributions এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Exponential</td><td>continuous memoryless — wait time</td></tr>
<tr><td class="hl">Geometric</td><td>discrete memoryless — trials to success</td></tr>
<tr><td class="hl">Memoryless</td><td>P(X>s+t|X>s) = P(X>t)</td></tr>
<tr><td class="hl">λ (rate)</td><td>Mean = 1/λ</td></tr>
<tr><td class="hl">M/M/1</td><td>exponential arrival + service queue</td></tr>
<tr><td class="hl">Poisson Process</td><td>events per time unit</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "🛡️",
  color: "#8b5cf6",
  name: "সূচকীয় ঢাল",
  subtitle: "The Exponential Shield",
  tech: "Concentration Inequalities — Markov, Chebyshev, Chernoff bound, tail risk, black swan events (Taleb)",
  spirit: "হিফযু — সুরক্ষা, বিরল কিন্তু বিধ্বংসী ঘটনা থেকে",
  secret: "Chebyshev: P(|X-μ|≥kσ) ≤ ১/k²। Markov: P(X≥a) ≤ E[X]/a। Chernoff: P(X≥(১+δ)μ) ≤ e^(-δ²μ/৩)। এই সূত্রগুলো বলে — বিরল ঘটনা কতটা বিরল। কিন্তু বিরল মানে অসম্ভব নয়!",
  recall: {
    q: " Chebyshev inequality কী? Tail risk কী?",
    qen: "What is Chebyshev's inequality? What is tail risk?",
    a: "Chebyshev: P(|X-μ|≥kσ) ≤ ১/k²। k=২ হলে ≤ ২৫%। Tail risk: বিরল কিন্তু বিধ্বংসী ঘটনা। Black Swan — অকল্পনীয় কিন্তু ঘটে।",
    aen: "Chebyshev: P(|X-μ|≥kσ) ≤ 1/k². k=2 → ≤25%. Tail risk: rare but devastating events. Black Swan — unimaginable but happens."
  },
  story: `<p class="scene-setting">আমিন (Door ৪) তোমাকে memoryless শিখিয়েছেন। কিন্তু একটি বিপদ — বিরল ঘটনা। সাধারণত সব ঠিক থাকে। কিন্তু মাঝে মাঝে — এমন কিছু ঘটে যা কেউ ভাবেনি। ২০০৮ financial crisis। COVID-19। Nassim Taleb একে বলেন Black Swan — বিরল, বিধ্বংসী, পরে বোঝা যায়। Concentration inequalities বলে — এই বিরল ঘটনা গাণিতিকভাবে কতটা বিরল।</p>
<p class="scene-setting en">Amin (Door 4) taught you memoryless. But a danger — rare events. Usually everything is fine. But sometimes — something happens that nobody imagined. 2008 financial crisis. COVID-19. Nassim Taleb calls them Black Swans — rare, devastating, understood in hindsight. Concentration inequalities tell us — mathematically how rare these events are.</p>

<div class="dialogue"><strong>ঝুঁকি-প্রহরী ওমর:</strong> Markov inequality: P(X≥a) ≤ E[X]/a। সবচেয়ে সহজ — শুধু E[X] লাগে। Chebyshev: P(|X-μ|≥kσ) ≤ ১/k²। কিছুটা শক্ত — Var লাগে। k=৩ হলে সর্বোচ্চ ১/৯ ≈ ১১%। কিন্তু normal-এ ৩σ = ০.৩%। Chebyshev conservative! Chernoff: সবচেয়ে শক্ত — exponential decay। Hoeffding: sample mean কতটা নির্ভরযোগ্য। এগুলো tail risk মাপে।</div>
<div class="dialogue en"><strong>Risk Guardian Umar:</strong> Markov inequality: P(X≥a) ≤ E[X]/a. Simplest — only needs E[X]. Chebyshev: P(|X-μ|≥kσ) ≤ 1/k². A bit stronger — needs Var. k=3 gives max 1/9 ≈ 11%. But for normal 3σ = 0.3%. Chebyshev is conservative! Chernoff: strongest — exponential decay. Hoeffding: how reliable is sample mean. These measure tail risk.</div>

<div class="code-block">— Python: Concentration Inequalities —

  import numpy as np

  # Markov: P(X>=a) <= E[X]/a
  EX = 10  # average loss $10
  a = 50   # threshold
  markov_bound = EX / a
  print(f"Markov: P(X>=50) <= {markov_bound:.2f}")  # 0.20

  # Chebyshev: P(|X-mu|>=k*sigma) <= 1/k^2
  for k in [2, 3, 4]:
      cheb = 1 / k**2
      print(f"Chebyshev k={k}: <= {cheb:.4f}")
  # k=2: 0.25, k=3: 0.111, k=4: 0.0625

  # Chernoff (coin flips):
  # P(>= 60 heads in 100 flips) when p=0.5
  from scipy.stats import binom
  exact = 1 - binom.cdf(59, 100, 0.5)
  print(f"Exact P(X>=60): {exact:.4f}")  # ~0.028
  # Chernoff: <= exp(-0.1^2 * 50 / 3) ≈ 0.044

  # Black Swan simulation:
  # 99% of days: +1. 1% of days: -200.
  returns = np.where(
      np.random.random(10000) < 0.99, 1, -200
  )
  cumulative = np.cumsum(returns)
  # বেশিরভাগ দিন লাভ, কিন্তু rare crash সব মুছে দেয়!</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Black Swan (Taleb 2007):</strong> বিরল, বিধ্বংসী, পরে বোঝা যায়। Normal distribution এই tail ধরে না! Financial crisis, pandemic, disaster — fat tail distribution। ৩σ তে বলে ০.৩% — কিন্তু বাস্তবে বেশি ঘটে। Power law: P(X) ~ 1/x^α। লম্বা tail — বিরল কিন্তু উপেক্ষা করা যায় না।</div></div>

<div class="verse">وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তুমি তার অনুসরণ করো না যার বিষয়ে তোমার জ্ঞান নেই।" — কুরআন ১৭:৩৬</div>

<p class="scene-setting">হিফযু — সুরক্ষা। Concentration inequalities সেই সুরক্ষার গাণিতিক রূপ — ঝুঁকির সীমা নির্ধারণ। কোন পরিমাণ নিরাপদ, কোন পরিমাণ বিপজ্জনক? Chebyshev, Chernoff — এই সীমা দেয়। কিন্তু সতর্কতা — গাণিতিক সীমা কখনো Black Swan ধরে না। যার বিষয়ে জ্ঞান নেই তার অনুসরণ করো না — অজানা ঝুঁকি উপেক্ষা করো না।</p>
<p class="scene-setting en">Hifz — protection. Concentration inequalities are the mathematical form of that protection — determining risk boundaries. What amount is safe, what is dangerous? Chebyshev, Chernoff — these give boundaries. But caution — mathematical bounds don't always catch Black Swans. Do not follow what you have no knowledge of — don't ignore unknown risks.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৮ (Causal Inference):</strong> tail risk ও confounding। Book ৩৩ (Loom of Reason) Door ৬ (Second-Order): unintended consequences = tail risk।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🛡️ Tail Risk: Normal vs Fat Tail</text>
  <path d="M 100 200 Q 200 60 290 60 Q 380 60 480 200" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <text x="380" y="100" fill="#4ade80" font-size="10">Normal (thin tail)</text>
  <path d="M 50 200 Q 150 80 290 70 Q 430 80 530 200" fill="none" stroke="#f87171" stroke-width="2.5"/>
  <text x="470" y="140" fill="#fca5a5" font-size="10">Fat tail (power law)</text>
  <line x1="30" y1="200" x2="550" y2="200" stroke="#64748b" stroke-width="0.5"/>
  <rect x="30" y="170" width="40" height="30" fill="#f87171" opacity="0.2"/>
  <rect x="510" y="170" width="40" height="30" fill="#f87171" opacity="0.2"/>
  <text x="50" y="220" text-anchor="middle" fill="#fca5a5" font-size="10">tail risk</text>
  <text x="530" y="220" text-anchor="middle" fill="#fca5a5" font-size="10">tail risk</text>
  <text x="290" y="230" text-anchor="middle" fill="#94a3b8" font-size="10">Chebyshev: P(|X-mu|&gt;k*sigma) &lt;= 1/k^2</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Normal (সরু tail) vs Fat tail (power law)। Black Swan = fat tail-এ বিধ্বংসী ঘটনা।</div>

<div class="secret-box">🛡️ <strong>Concentration = ঝুঁকির সীমা। Markov → Chebyshev → Chernoff।</strong> কিন্তু ঝুঁকি মাপলেই কি দূর হয়? না। ঝুঁকি নিয়ন্ত্রণ করতে হয় — simulation দিয়ে। সেই পরের দরজায়।</div>`,
  senior: {
    title: "Concentration Inequalities এক নজরে",
    body: `<table class="kv-table"><tr><th>সূত্র</th><th>বিবরণ</th></tr>
<tr><td class="hl">Markov</td><td>P(X≥a) ≤ E[X]/a</td></tr>
<tr><td class="hl">Chebyshev</td><td>P(|X-μ|≥kσ) ≤ 1/k²</td></tr>
<tr><td class="hl">Chernoff</td><td>P(X≥(1+δ)μ) ≤ e^(-δ²μ/3)</td></tr>
<tr><td class="hl">Hoeffding</td><td>sample mean reliability</td></tr>
<tr><td class="hl">Black Swan</td><td>rare, devastating, fat tail</td></tr>
<tr><td class="hl">Power Law</td><td>P(X) ~ 1/x^α — long tail</td></tr></table>`
  }
});
