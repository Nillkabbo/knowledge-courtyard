const doors = [];

doors.push({
  num: 1,
  icon: "🧭",
  color: "#6366f1",
  name: "সেরা পথের সন্ধান",
  subtitle: "The Search for the Best Path",
  tech: "What IS Optimization? — Al-Khwarizmi (780-850), al-jabr, the mathematical search for minima/maxima",
  spirit: "ফাতহ — বিজয়, সেরা পথ খুঁজে পাওয়া",
  secret: "অপটিমাইজেশন = সম্ভাব্য সব পথের মধ্যে সেরাটি খুঁজে বের করা। প্রকৃতিতেও — আলো সবচেয়ে দ্রুত পথ ধরে, নদী সবচেয়ে নিচু পথ ধরে। গণিত এটাকে ভাষা দিয়েছে।",
  recall: {
    q: " অপটিমাইজেশন সমস্যার তিনটি উপাদান কী?",
    qen: "What are the three components of an optimization problem?",
    a: "১. উদ্দেশ্য ফাংশন (objective f) — কী কমাতে বা বাড়াতে হবে। ২. চলক (variables) — কী বদলানো যায়। ৩. শর্ত (constraints) — কোন সীমানার মধ্যে।",
    aen: "1. Objective function — what to minimize/maximize. 2. Variables — what to change. 3. Constraints — what boundaries to respect."
  },
  story: `<p class="scene-setting">বাগদাদ, ৮২০ সাল। হাউস অফ উইজডম। একজন মানুষ পার্চমেন্টের উপর লিখছেন। তার নাম — মুহাম্মদ ইবনে মুসা আল-খাওয়ারিজমি। তার বইয়ের শিরোনাম: "আল-কিতাব আল-মুখতাসার ফি হিসাব আল-জাবর ওয়াল-মুকাবালা।" "আল-জাবর" মানে "সম্পূর্ণতা" — ভাঙা অংশ জোড়া লাগানো। এই শব্দটি থেকে এসেছে "algebra।" আল-খাওয়ারিজমির লক্ষ্য ছিল সহজ — সমস্যার সেরা সমাধান খুঁজে বের করার একটি নিয়মতান্ত্রিক পদ্ধতি।</p>
<p class="scene-setting en">Baghdad, 820 CE. House of Wisdom. A man writes on parchment. His name — Muhammad ibn Musa al-Khwarizmi. His book's title includes "al-jabr" — meaning "completion" — the rejoining of broken parts. From this word came "algebra." His goal: a systematic method to find the best solution to problems.</p>

<div class="dialogue"><strong>দিকনির্দেশক আদম:</strong> তুমি যখন রাস্তার মোড়ে দাঁড়াও, তুমি একটি সিদ্ধান্ত নাও — ডানে না বাঁয়ে? তোমার লক্ষ্য — সবচেয়ে দ্রুত বাসায় পৌঁছানো। এটাই অপটিমাইজেশন — সম্ভাব্য সব পথের মধ্যে সেরাটি বেছে নেওয়া। আল-খাওয়ারিজমি এই সিদ্ধান্তকে গণিতে রূপ দিয়েছিলেন।</div>
<div class="dialogue en"><strong>Compass Adam:</strong> When you stand at a crossroads, you decide — left or right? Your goal — reach home fastest. This IS optimization — choosing the best among all possible paths. Al-Khwarizmi gave mathematical form to this decision.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>অপটিমাইজেশন সমস্যার তিনটি উপাদান:</strong><br>
<strong>১. উদ্দেশ্য ফাংশন (Objective Function f(x)):</strong> কী কমাতে বা বাড়াতে হবে? দূরত্ব, খরচ, সময়, loss।<br>
<strong>২. চলক (Decision Variables x):</strong> কী বদলানো যায়? রাস্তা, মূল্য, ওজন, weights।<br>
<strong>৩. শর্ত (Constraints):</strong> কোন সীমানার মধ্যে? বাজেট ≤ ১০০$, সময় ≤ ২৪ ঘণ্টা।</div></div>

<div class="code-block">— অপটিমাইজেশন সমস্যার গাণিতিক রূপ —

  minimize   f(x)         ← উদ্দেশ্য: f কমাও
  subject to g(x) ≤ 0     ← শর্ত: g-এর মধ্যে থাকো
             h(x) = 0     ← সমীকরণ শর্ত
             x ∈ ℝⁿ       ← চলক n-মাত্রিক

— উদাহরণ (ML-এ): —

  minimize   L(w, b) = Σ(yᵢ - ŷᵢ)²    ← loss (MSE)
  subject to ||w||² ≤ C               ← regularization
             w, b ∈ ℝ                  ← weights

— "minimize" ও "maximize" একই জিনিস —
  maximize f(x) = minimize -f(x)      ← চিহ্ন উল্টে দাও</div>

<div class="diagram">
<div class="diag-title">অপটিমাইজেশনের ল্যান্ডস্কেপ — পাহাড় ও উপত্যকা</div>
<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bowlGrad1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="rgba(99,102,241,.15)"/>
    <stop offset="100%" stop-color="rgba(99,102,241,.02)"/>
  </linearGradient>
</defs>
<!-- Convex landscape (bowl) -->
<path d="M 30,60 Q 150,20 280,100 Q 410,180 530,60 L 530,200 L 30,200 Z" fill="url(#bowlGrad1)" stroke="#6366f1" stroke-width="2"/>
<line x1="30" y1="200" x2="530" y2="200" stroke="#5e5c74" stroke-width="1"/>
<!-- Global minimum -->
<circle cx="280" cy="100" r="6" fill="#52c41a"/>
<text x="280" y="88" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">Global Min</text>
<text x="280" y="118" fill="#52c41a" font-size="8" text-anchor="middle">f(x*)</text>
<!-- Local minima -->
<circle cx="120" cy="48" r="4" fill="#ff6b35"/>
<text x="120" y="38" fill="#ff6b35" font-size="8" text-anchor="middle">Local Min</text>
<circle cx="440" cy="100" r="4" fill="#ff6b35"/>
<text x="440" y="118" fill="#ff6b35" font-size="8" text-anchor="middle">Local Min</text>
<!-- Arrow showing descent -->
<text x="180" y="60" fill="#a5b4fc" font-size="9" font-style="italic">→ ঢাল নিচে →</text>
</svg>
<div class="diag-cap">উতলা (convex): একটি ন্যূনতম — global · অ-উতলা (non-convex): অনেক ন্যূনতম — কিছু local</div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ব্রুট ফোর্স</div>সব সম্ভাব্য পথ চেক করো। সরল কিন্তু ধীর। ১০০ ভেরিয়েবলে — ১০০¹⁰⁰ সমাধান। মহাবিশ্বের চেয়ে বেশি পরমাণু।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ গ্রেডিয়েন্ট গাইডেড</div>ঢাল অনুসরণ করো — দ্রুত, কার্যকরী। প্রতিটি ধাপে প্রশ্ন: কোন দিকে সবচেয়ে নিচু? গ্রেডিয়েন্ট বলে দেয়।</div>
</div>

<div class="verse">وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং মানুষের জন্য তা ছাড়া আর কিছু নেই যা সে চেষ্টা করে।" — কুরআন ৫৩:৩৯</div>

<p class="scene-setting">এই আয়াত "সায়" — চেষ্টা, দৌড় — এর কথা বলে। অপটিমাইজেশনও তেমন — এটি চেষ্টার গণিত। কোন চেষ্টা? নির্দেশিত চেষ্টা — গ্রেডিয়েন্ট বলে দেয় কোন দিকে। অন্ধ চেষ্টা নয়, গাইডেড চেষ্টা। এটাই আল-খাওয়ারিজমির উত্তরাধিকার — সিস্টেমেটিক অনুসন্ধান।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩০ (Math for ML) Door ৬:</strong> ডেরিভেটিভ ও গ্রেডিয়েন্ট শিখেছিলে — সেই গ্রেডিয়েন্টই অপটিমাইজেশনের কম্পাস। Book ৩১ (Classic ML) Door ৩: লস ফাংশন দেখেছিলে — সেই লসই আমাদের উদ্দেশ্য ফাংশন। এই বই সেই সংযোগ পূর্ণ করে।</div></div>

<div class="secret-box">🧭 <strong>অপটিমাইজেশন = গাইডেড সন্ধান।</strong> তিনটি জিনিস দরকার — উদ্দেশ্য (কী কমাবে), চলক (কী বদলাবে), শর্ত (কোন সীমায়)। ব্রুট ফোর্স ধীর — গ্রেডিয়েন্ট দ্রুত। কিন্তু গ্রেডিয়েন্ট কীভাবে কাজ করে? পাহাড়ের ঢাল কীভাবে মাপা যায়? সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "অপটিমাইজেশন এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Al-Khwarizmi</td><td>৭৮০-৮৫০, বাগদাদ — algebra-এর জনক</td></tr>
<tr><td class="hl">Al-jabr</td><td>সম্পূর্ণতা — ভাঙা অংশ জোড়া লাগানো</td></tr>
<tr><td class="hl">Objective f(x)</td><td>যা কমাতে বা বাড়াতে হবে</td></tr>
<tr><td class="hl">Variables x</td><td>যা বদলানো যায়</td></tr>
<tr><td class="hl">Constraints</td><td>সীমানা — কোন শর্তের মধ্যে</td></tr>
<tr><td class="hl">Global vs Local Min</td><td>সবচেয়ে নিচু vs কাছের নিচু</td></tr>
<tr><td class="hl">Convex vs Non-convex</td><td>এক ন্যূনতম (সহজ) vs অনেক (কঠিন)</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "📐",
  color: "#6366f1",
  name: "উতলা বাটির রহস্য",
  subtitle: "The Mystery of the Convex Bowl",
  tech: "Convex Sets & Functions — Minkowski (1896), Jensen's Inequality (1906), why convex = easy",
  spirit: "কাওসার — সবচেয়ে পবিত্র ঝরনা, গ্লোবাল ন্যূনতম",
  secret: "উতলা (convex) বাটিতে একটাই নিচু বিন্দু — গ্লোবাল ন্যূনতম। স্থানীয় ন্যূনতম নেই — প্রতিটি নিচুই গ্লোবাল। কিন্তু অ-উতলা পাহাড়ে অনেক গর্ত — ভুল গর্তে আটকে যাওয়া যায়।",
  recall: {
    q: " উতলা ফাংশনের সংজ্ঞা কী? Jensen-এর অসমতা কী বলে?",
    qen: "What is the definition of a convex function? What does Jensen's inequality say?",
    a: "উতলা: f(λx + (1-λ)y) ≤ λf(x) + (1-λ)f(y)। Jensen: উতলা ফাংশনে ফাংশন-এর গড় ≤ গড়-এর ফাংশন।",
    aen: "Convex: the function of an average ≤ the average of the function values."
  },
  story: `<p class="scene-setting">জার্মানি, ১৮৯৬। কোনিগসবার্গ বিশ্ববিদ্যালয়। Hermann Minkowski জ্যামিতির উপর কাজ করছেন। তিনি একটি সহজ কিন্তু গভীর প্রশ্ন করেন — কোন ধরনের আকৃতির ভেতরে দুটি বিন্দুর সংযোগ রেখা সম্পূর্ণ ভেতরে থাকে? উত্তর: উতলা (convex) আকৃতি। বৃত্ত, উপবৃত্ত, বাটি — উতলা। চাঁদের ক্রিসেন্ট, তারা — অ-উতলা।</p>
<p class="scene-setting en">Germany, 1896. University of Königsberg. Hermann Minkowski works on geometry. He asks: what shapes contain the line between any two interior points? Answer: convex shapes. Circles, ellipses, bowls — convex. Crescents, stars — non-convex.</p>

<div class="dialogue"><strong>উতলা কারিগর সাফিয়া:</strong> ভাবো তুমি একটি বাটি ধরে আছো। বাটির ভেতরে একটি মার্বেল রাখো। যেকোনো জায়গায় ছাড়ো — সে সবসময় একই জায়গায় গিয়ে থামবে — সবচেয়ে নিচু বিন্দুতে। এটাই উতলা ফাংশনের জাদু। কোনো স্থানীয় ন্যূনতম নেই — সব রাস্তা একটি গন্তব্যে।</div>
<div class="dialogue en"><strong>Convex Artisan Safia:</strong> Hold a bowl. Place a marble inside. Release from anywhere — it always stops at the same spot — the lowest point. This is the magic of convex functions. No local minima — all roads lead to one destination.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>উতলা ফাংশনের সংজ্ঞা:</strong><br>
f উতলা যদি — যেকোনো দুটি বিন্দু x, y এবং ০ ≤ λ ≤ ১-এর জন্য:<br>
<strong>f(λx + (1-λ)y) ≤ λf(x) + (1-λ)f(y)</strong><br>
অর্থাৎ: দুটি বিন্দুর সংযোগ রেখা ফাংশনের উপরে বা সমানে থাকে।</div></div>

<div class="diagram">
<div class="diag-title">উতলা বনাম অ-উতলা — বাটি বনাম পাহাড়</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
<!-- LEFT: Convex bowl -->
<text x="130" y="20" fill="#52c41a" font-size="12" font-weight="700" text-anchor="middle">Convex (উতলা)</text>
<path d="M 30,60 Q 130,180 230,60" fill="none" stroke="#52c41a" stroke-width="2.5"/>
<!-- Chord connecting two points -->
<line x1="60" y1="120" x2="200" y2="120" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="130" y="113" fill="#a5b4fc" font-size="8" text-anchor="middle">জ্যা — বক্ররেখার উপরে</text>
<!-- Global min -->
<circle cx="130" cy="135" r="5" fill="#52c41a"/>
<text x="130" y="155" fill="#52c41a" font-size="9" font-weight="700" text-anchor="middle">★ global min</text>
<text x="130" y="170" fill="#9290a8" font-size="8" text-anchor="middle">একটাই ন্যূনতম</text>

<!-- RIGHT: Non-convex mountains -->
<text x="420" y="20" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle">Non-Convex (অ-উতলা)</text>
<path d="M 310,120 Q 340,40 380,110 Q 420,180 460,80 Q 500,20 530,100" fill="none" stroke="#ff6b35" stroke-width="2.5"/>
<circle cx="380" cy="110" r="4" fill="#ff6b35"/>
<text x="380" y="125" fill="#ff6b35" font-size="8" text-anchor="middle">local min</text>
<circle cx="460" cy="80" r="4" fill="#ff6b35"/>
<text x="470" y="72" fill="#ff6b35" font-size="8">local min</text>
<circle cx="420" cy="170" r="5" fill="#52c41a"/>
<text x="420" y="190" fill="#52c41a" font-size="9" font-weight="700" text-anchor="middle">★ global min</text>
<text x="420" y="205" fill="#9290a8" font-size="8" text-anchor="middle">অনেক গর্ত!</text>
</svg>
<div class="diag-cap">Convex: জ্যা বক্ররেখার উপরে — একটি ন্যূনতম · Non-convex: জ্যা নিচে যায় — একাধিক ন্যূনতম</div>
</div>

<div class="code-block">— উতলা ফাংশনের উদাহরণ —

  f(x) = x²              ← উতলা (parabola — সবচেয়ে সহজ)
  f(x) = eˣ              ← উতলা (exponential)
  f(x) = |x|             ← উতলা (absolute value)
  f(x) = -log(x)         ← উতলা (negative log — x > 0)
  f(x) = x⁴ - 3x²        ← অ-উতলা! (দুটি ন্যূনতম)

— Jensen-এর অসমতা (1906): —

  উতলা f-এর জন্য:
  f(λ₁x₁ + λ₂x₂ + ...) ≤ λ₁f(x₁) + λ₂f(x₂) + ...

  অর্থাৎ: f(গড়) ≤ গড় f

— বাস্তব উদাহরণ: —
  f(গড় উচ্চতা) ≤ গড় f(উচ্চতা)
  অর্থাৎ: গড় উচ্চতার বর্গ ≤ উচ্চতার বর্গের গড়
  (এটাই variance-এর সংজ্ঞা!)</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>কেন উতলা সহজ?</strong> উতলা সমস্যায় প্রতিটি লোকাল ন্যূনতমই গ্লোবাল ন্যূনতম। গ্রেডিয়েন্ট ডিসেন্ট গ্যারান্টিযুক্ত গ্লোবালে পৌঁছায়। অ-উতলায় লোকালে আটকে যেতে পারে। ML-এ: linear regression = উতলা (MSE loss), neural network = অ-উতলা (সব সমস্যার উৎস)।</div></div>

<div class="verse">وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং আমরা আকাশ থেকে নাজিল করেছি পবিত্র জল।" — কুরআন ২৫:৪৮</div>

<p class="scene-setting">পবিত্র জল — কাওসার। উতলা ফাংশনের ন্যূনতম বিন্দুও তেমন — একটি ঝরনা, যেখানে সব পথ এসে মেলে। কোনো বিভ্রম নেই — কোনো ভুল গন্তব্য নেই। উতলা জগতে তুমি হারিয়ে যাও না। কিন্তু বাস্তব দুনিয়া — নিউরাল নেটওয়ার্ক — অ-উতলা। সেখানে গর্তে আটকে যাওয়া যায়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩০ Door ৮ (Probability):</strong> Jensen-এর অসমতা প্রথম দেখেছিলে — E[f(X)] ≥ f(E[X])। এটাই উতলা ফাংশনের সংজ্ঞা! Book ৩১ Door ৩ (Linear Regression): MSE loss = উতলা — তাই গ্যারান্টিযুক্ত সমাধান।</div></div>

<div class="secret-box">📐 <strong>উতলা = জাদুর বাটি।</strong> একটি গ্লোবাল ন্যূনতম — গ্রেডিয়েন্ট ডিসেন্ট গ্যারান্টিযুক্ত সফল। কিন্তু জাদুর বাটি কীভাবে খুঁজে পাওয়া যায়? গ্রেডিয়েন্ট বলে দেয় ঢাল — কিন্তু কোন দিকে যাবে? সেই কৌশল আসবে পরের দরজায় — Cauchy-এর মহাআবিষ্কার।</div>`,
  senior: {
    title: "Convex Optimization এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Convex Set</td><td>দুটি বিন্দুর সংযোগ রেখা ভেতরে</td></tr>
<tr><td class="hl">Convex Function</td><td>f(λx+(1-λ)y) ≤ λf(x)+(1-λ)f(y)</td></tr>
<tr><td class="hl">Minkowski (1896)</td><td>উতলা জ্যামিতির জনক</td></tr>
<tr><td class="hl">Jensen (1906)</td><td>E[f(X)] ≥ f(E[X]) — উতলা অসমতা</td></tr>
<tr><td class="hl">Global = Local</td><td>উতলায় প্রতিটি local min = global min</td></tr>
<tr><td class="hl">x², eˣ, |x|, -log</td><td>উতলা ফাংশনের উদাহরণ</td></tr>
<tr><td class="hl">Linear Regression MSE</td><td>উতলা — গ্যারান্টিযুক্ত সমাধান</td></tr>
<tr><td class="hl">Neural Network Loss</td><td>অ-উতলা — লোকাল ন্যূনতমে আটকা</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "📉",
  color: "#6366f1",
  name: "ঢালু পথের অনুসরণ",
  subtitle: "Following the Slope",
  tech: "Gradient Descent — Cauchy (1847), learning rate, convergence proof, steepest descent",
  spirit: "হিদায়াত — পথ দেখানো, সবচেয়ে খাড়া ঢালের দিক",
  secret: "গ্রেডিয়েন্ট = সবচেয়ে খাড়া ঢালের দিক। নেতিবাচক গ্রেডিয়েন্ট অনুসরণ করো — সবচেয়ে দ্রুত নিচে। কিন্তু পদক্ষেপের আকার (learning rate) — খুব বড় = লাফ, খুব ছোট = ধীর।",
  recall: {
    q: " গ্রেডিয়েন্ট ডিসেন্টের আপডেট নিয়ম কী?",
    qen: "What is the gradient descent update rule?",
    a: "x_{t+1} = x_t - η · ∇f(x_t)। বর্তমান অবস্থান থেকে গ্রেডিয়েন্ট × লার্নিং রেট বিয়োগ করো।",
    aen: "x_{t+1} = x_t - η · ∇f(x_t). Subtract gradient × learning rate from current position."
  },
  story: `<p class="scene-setting">প্যারিস, ১৮৪৭। Augustin-Louis Cauchy ফরাসি একাডেমিতে একটি পেপার উপস্থাপন করছেন। তার প্রশ্ন সহজ কিন্তু বিপ্লবাত্মক — কোনো ফাংশনের ন্যূনতম বিন্দু কীভাবে খুঁজে বের করব? উত্তর: ঢাল মাপো, নিচের দিকে যাও। এটাই গ্রেডিয়েন্ট ডিসেন্ট — ১৭৭ বছর আগের একটি ধারণা যা আজকের প্রতিটি AI মডেলকে চালিত করে।</p>
<p class="scene-setting en">Paris, 1847. Augustin-Louis Cauchy presents a paper to the French Academy. His question: how to find the minimum of any function? Answer: measure the slope, go downhill. This is gradient descent — a 177-year-old idea that powers every modern AI model.</p>

<div class="dialogue"><strong>পথপ্রদর্শক ইব্রাহিম:</strong> তুমি পাহাড়ে দাঁড়িয়ে আছো, চোখ বাঁধা। কিন্তু তোমার পা ঢাল অনুভব করতে পারে। সবচেয়ে খাড়া নিচের দিকটা খুঁজো — সেটাই গ্রেডিয়েন্টের বিপরীত দিক। এক পা রাখো। আবার মাপো। আবার পা রাখো। প্রতিটি পা — একটি iteration। প্রতিটি পায়ের দৈর্ঘ্য — learning rate (η)।</div>
<div class="dialogue en"><strong>Guide Ibrahim:</strong> You stand on a hill, blindfolded. But your feet feel the slope. Find the steepest descent — that's the negative gradient direction. Take one step. Measure again. Step again. Each step — an iteration. Each step's length — the learning rate (η).</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>গ্রেডিয়েন্ট ডিসেন্ট আপডেট নিয়ম:</strong><br>
<strong>x_{t+1} = x_t - η · ∇f(x_t)</strong><br>
যেখানে:<br>
<strong>x_t</strong> = বর্তমান অবস্থান (বর্তমান weights)<br>
<strong>η (eta)</strong> = লার্নিং রেট (পদক্ষেপের আকার)<br>
<strong>∇f(x_t)</strong> = গ্রেডিয়েন্ট (ঢালের দিক ও মাত্রা)<br>
<strong>-</strong> = ঋণাত্মক — উপরের দিক নয়, নিচের দিকে যাও</div></div>

<div class="diagram">
<div class="diag-title">গ্রেডিয়েন্ট ডিসেন্ট — ধাপে ধাপে নিচে নামো</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bowlGrad3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="rgba(99,102,241,.12)"/>
    <stop offset="100%" stop-color="rgba(99,102,241,.02)"/>
  </linearGradient>
</defs>
<!-- Loss curve -->
<path d="M 30,30 Q 150,180 280,160 Q 410,140 530,30" fill="url(#bowlGrad3)" stroke="#6366f1" stroke-width="2.5"/>
<!-- Steps -->
<circle cx="80" cy="65" r="5" fill="#ff6b35"/>
<text x="85" y="58" fill="#ff6b35" font-size="9" font-weight="700">Start</text>
<circle cx="150" cy="140" r="4" fill="#fbbf24"/>
<text x="155" y="135" fill="#fbbf24" font-size="8">step 1</text>
<circle cx="220" cy="158" r="4" fill="#fbbf24"/>
<text x="225" y="152" fill="#fbbf24" font-size="8">step 2</text>
<circle cx="275" cy="160" r="4" fill="#fbbf24"/>
<text x="280" y="155" fill="#fbbf24" font-size="8">step 3</text>
<circle cx="280" cy="160" r="6" fill="#52c41a"/>
<text x="280" y="180" fill="#52c41a" font-size="9" font-weight="700" text-anchor="middle">★ Minimum</text>
<!-- Arrow -->
<path d="M 80,65 L 150,140 L 220,158 L 280,160" fill="none" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="3,3"/>
<!-- Learning rate annotations -->
<text x="380" y="40" fill="#9290a8" font-size="9">η খুব বড় → oscillation</text>
<text x="380" y="55" fill="#9290a8" font-size="9">η খুব ছোট → ধীর</text>
<text x="380" y="70" fill="#52c41a" font-size="9">η ঠিক → দ্রুত convergence</text>
</svg>
<div class="diag-cap">প্রতিটি ধাপে গ্রেডিয়েন্ট দিকে যাও · η খুব বড় হলে minimum পার হয়ে যাওয়া যায়</div>
</div>

<div class="code-block">— গ্রেডিয়েন্ট ডিসেন্ট Python-এ —

  # f(x) = x² এর ন্যূনতম খুঁজি
  x = 10.0           # শুরুর অবস্থান
  eta = 0.1          # learning rate
  for i in range(100):
      grad = 2 * x   # df/dx = 2x
      x = x - eta * grad   # update rule!
      print(f"step {i}: x={x:.4f}, f={x**2:.4f}")

  # Output:
  # step 0: x=8.0000,  f=64.00
  # step 1: x=6.4000,  f=40.96
  # step 2: x=5.1200,  f=26.21
  # ...
  # step 50: x=0.0001, f=0.00  ← converged!

— লার্নিং রেটের প্রভাব —
  η = 0.01  → ১০০০ ধাপ লাগে (ধীর কিন্তু নিরাপদ)
  η = 0.1   → ~৫০ ধাপ (ভারসাম্য)
  η = 1.0   → oscillation! (খুব বড় — লাফায়)
  η = 2.0   → divergence! (∞-এ যায়)</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Learning Rate বিপদ:</strong> খুব বড় η — minimum পার হয়ে oscillation বা divergence। খুব ছোট η — অনন্তকাল ধরে চলে। সেরা η — ফাংশনের বক্রতা (curvature) অনুসারে। কিন্তু বক্রতা কীভাবে মাপবে? সেই উত্তর আসবে পরের দরজায় — Newton-এর দ্বিতীয় ডেরিভেটিভ।</div></div>

<div class="verse">وَاهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আমাদের সরল পথ দেখাও।" — কুরআন ১:৬</div>

<p class="scene-setting">"সিরাত আল-মুস্তাকিম" — সরল পথ। গ্রেডিয়েন্ট ডিসেন্টও সেই সরল পথ খোঁজে — ন্যূনতমের দিকে সবচেয়ে সরাসরি রাস্তা। কিন্তু "সরল" মানে "সোজা" নয় — মানে "সঠিক দিক।" গ্রেডিয়েন্ট সঠিক দিক দেখায় — হিদায়াতের গাণিতিক রূপ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩০ Door ৬ (Calculus):</strong> ডেরিভেটিভ = ঢাল — সেই ঢালই গ্রেডিয়েন্ট। Book ৩৬ Door ৫ (Backpropagation): ব্যাকপ্রপ = চেইন রুল দিয়ে গ্রেডিয়েন্ট হিসাব করা — তারপর এই গ্রেডিয়েন্ট দিয়ে weights আপডেট।</div></div>

<div class="secret-box">📉 <strong>গ্রেডিয়েন্ট = হিদায়াত, লার্নিং রেট = পদক্ষেপ।</strong> ঋণাত্মক গ্রেডিয়েন্ট অনুসরণ করো — দ্রুততম নিচের পথ। কিন্তু গ্রেডিয়েন্ট শুধু ঢাল দেখায়, বক্রতা দেখায় না। পাহাড়ের আকৃতি কেমন — সেটা জানলে আরও বুদ্ধিদীপ্তভাবে নামা যায়। সেই জ্ঞান আসবে পরের দরজায় — Newton-এর দৃষ্টিভঙ্গি।</div>`,
  senior: {
    title: "Gradient Descent এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Cauchy (1847)</td><td>গ্রেডিয়েন্ট ডিসেন্টের জনক</td></tr>
<tr><td class="hl">Update Rule</td><td>x_{t+1} = x_t - η · ∇f(x_t)</td></tr>
<tr><td class="hl">Gradient ∇f</td><td>সবচেয়ে খাড়া ঢালের দিক</td></tr>
<tr><td class="hl">Learning Rate η</td><td>পদক্ষেপের আকার</td></tr>
<tr><td class="hl">η খুব বড়</td><td>Oscillation / divergence</td></tr>
<tr><td class="hl">η খুব ছোট</td><td>ধীর convergence</td></tr>
<tr><td class="hl">Convergence</td><td>উতলা ফাংশনে গ্যারান্টিযুক্ত</td></tr>
<tr><td class="hl">Backpropagation</td><td>চেইন রুল দিয়ে গ্রেডিয়েন্ট হিসাব</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "🔍",
  color: "#6366f1",
  name: "বক্রতার দৃষ্টি",
  subtitle: "Seeing the Curvature",
  tech: "Newton's Method — Newton (1669), Raphson (1690), second-order optimization, Hessian matrix",
  spirit: "বাসিরাহ — অন্তর্দৃষ্টি, ঢালের পেছনের আকৃতি দেখা",
  secret: "গ্রেডিয়েন্ট শুধু ঢাল দেখায়, Newton বক্রতা দেখায়। দ্বিতীয় ডেরিভেটিভ (Hessian) বলে — ঢাল কত দ্রুত বদলাচ্ছে। এটাই দ্বিতীয়-স্তর অপটিমাইজেশন — কম ধাপে নিচে।",
  recall: {
    q: " Newton-এর পদ্ধতিতে আপডেট নিয়ম কী? Hessian কী?",
    qen: "What is Newton's method update rule? What is the Hessian?",
    a: "x_{t+1} = x_t - H⁻¹∇f। H = Hessian = দ্বিতীয় ডেরিভেটিভের ম্যাট্রিক্স — বক্রতা। Newton প্রতি ধাপে দ্বিতীয়-ডিগ্রি সমীকরণ সমাধান করে।",
    aen: "x_{t+1} = x_t - H⁻¹∇f. H = Hessian = matrix of second derivatives. Newton solves a quadratic approximation each step."
  },
  story: `<p class="scene-setting">কেমব্রিজ, ১৬৬৯। Isaac Newton একটি সমীকরণ সমাধান করছেন। তার ধারণা — বক্ররেখাকে স্পর্শকন (tangent) দিয়ে প্রতিস্থাপন করো, স্পর্শকনের শূন্য বিন্দু খুঁজো। সেই বিন্দু থেকে আবার স্পর্শকন আঁকো। দ্রুত convergence — কিন্তু একটি দাম আছে। প্রতিটি ধাপে দ্বিতীয় ডেরিভেটিভ হিসাব করতে হয়।</p>
<p class="scene-setting en">Cambridge, 1669. Isaac Newton solves equations by replacing curves with tangents — find the tangent's root, draw a new tangent. Fast convergence — but at a cost: second derivatives must be computed each step.</p>

<div class="dialogue"><strong>দূরদর্শী নুসরাত:</strong> Cauchy-এর পদ্ধতিতে তুমি শুধু ঢাল দেখো — প্রথম ডেরিভেটিভ। Newton বলেন — ঢালের পরিবর্তনও দেখো! যদি ঢাল দ্রুত কমছে, তুমি নিচুর কাছে। বড় পদক্ষেপ নাও। যদি ঢাল ধীরে কমছে, দূরে এখনো। ছোট পদক্ষেপ। এটাই বক্রতা — দ্বিতীয় ডেরিভেটিভ।</div>
<div class="dialogue en"><strong>Farsighted Nusrat:</strong> Cauchy's method sees only slope — first derivative. Newton says: also see how slope changes! If slope drops fast, you're near the bottom — take big steps. If slope drops slowly, you're far — small steps. This is curvature — the second derivative.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Newton-এর পদ্ধতি:</strong><br>
<strong>x_{t+1} = x_t - H⁻¹ · ∇f(x_t)</strong><br>
যেখানে H = Hessian ম্যাট্রিক্স = ∇²f (দ্বিতীয় ডেরিভেটিভের ম্যাট্রিক্স)<br><br>
<strong>1D-তে (একটি চলক):</strong> x_{t+1} = x_t - f'(x)/f''(x)<br>
<strong>nD-তে (n চলক):</strong> H একটি n×n ম্যাট্রিক্স — প্রতিটি জোড়া চলকের মিথস্ক্রিয়া</div></div>

<div class="code-block">— Newton বনাম Gradient Descent —

  f(x) = x⁴ - 4x² + x  (অ-উতলা — ২টি ন্যূনতম)

  Gradient Descent (η=0.1):
    step 0: x=3.0, f'=29
    step 1: x=0.1, f'=-3.6   ← লাফ দিয়েছে
    step 50: x=-1.35, f'≈0   ← অনেক ধাপ

  Newton (স্বয়ংক্রিয় পদক্ষেপ):
    step 0: x=3.0, f'=29,  f''=104
    step 1: x=2.72, f'=22, f''=85  ← H⁻¹ পদক্ষেপ
    step 6: x=1.44, f'≈0           ← ৬ ধাপে converge!

  — সুবিধা: কম ধাপ (quadratic convergence) —
  — অসুবিধা: H⁻¹ হিসাব খরচ O(n³) —
    n=1M weights হলে H হলো 1M×1M ম্যাট্রিক্স! অসম্ভব —</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Newton-এর দুর্ভাগ্য:</strong> Hessian উল্টানো (inversion) অত্যন্ত ব্যয়বহুল। n=১০০০ weights হলে H = ১০০০×১০০০ ম্যাট্রিক্স — উল্টানো O(n³) = ১০⁹ operations। আধুনিক নিউরাল নেটে n = ১০⁹ — Hessian উল্টানো মহাবিশ্বের পরমাণুর চেয়ে বেশি operations। তাই ML-এ gradient descent-ই ব্যবহৃত হয় — কিন্তু quasi-Newton (L-BFGS) approximation করে।</div></div>

<div class="verse">إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আল্লাহ ন্যায়বিচার ও ইহসানের নির্দেশ দেন।" — কুরআন ১৬:৯০</div>

<p class="scene-setting">"আদল" — ন্যায়বিচার, ভারসাম্য। Newton-এর পদ্ধতিও ভারসাম্য খুঁজে — ঢাল ও বক্রতার মিলন। গ্রেডিয়েন্ট শুধু একটি দিক দেখে, Hessian দুটি — সম্পূর্ণ দৃষ্টি। কিন্তু সম্পূর্ণ দৃষ্টির দাম আছে। জ্ঞান সবসময় ব্যয়বহুল।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩০ Door ৭ (Linear Algebra):</strong> ম্যাট্রিক্স উল্টানো শিখেছিলে — H⁻¹ সেই কৌশল। Book ৩৬ Door ৪ (Attention): attention matrix — দ্বিতীয়-স্তর তথ্য। এখানে Hessian = loss landscape-এর জ্যামিতি।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔍 Newton vs Gradient Descent: Curvature Matters</text>
  <path d="M 50 200 Q 100 60 200 120 Q 300 180 400 100 Q 500 40 550 120" fill="none" stroke="#6366f1" stroke-width="2"/>
  <text x="470" y="55" fill="#a5b4fc" font-size="10">Loss landscape</text>
  <circle cx="150" cy="140" r="5" fill="#fbbf24"/>
  <text x="160" y="145" fill="#fcd34d" font-size="10">start</text>
  <circle cx="290" cy="165" r="5" fill="#22d3ee"/>
  <text x="300" y="170" fill="#7dd3fc" font-size="10">GD step</text>
  <circle cx="440" cy="55" r="5" fill="#22c55e"/>
  <text x="450" y="50" fill="#4ade80" font-size="10">Newton: jumps!</text>
  <path d="M 150 140 L 290 165" fill="none" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M 150 140 L 440 55" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="290" y="210" text-anchor="middle" fill="#94a3b8" font-size="10">GD: follows slope step by step (slow)</text>
  <text x="290" y="225" text-anchor="middle" fill="#94a3b8" font-size="10">Newton: uses curvature H^-1 to jump (fast but expensive)</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Newton-এর পদ্ধতি বক্রতা (Hessian) ব্যবহার করে বড় লাফ দেয়। GD ধীরে ধীরে নামে।</div>

<div class="secret-box">🔍 <strong>Newton = বক্রতার দৃষ্টি।</strong> H⁻¹∇f — ঢাল ও বক্রতা মিলিয়ে আদর্শ পদক্ষেপ। quadratic convergence — কয়েক ধাপে নিচে। কিন্তু H⁻¹ অত্যন্ত ব্যয়বহুল। বাস্তবে quasi-Newton (L-BFGS) approximation করে। কিন্তু এতদিন শুধু unconstrained — কোনো শর্ত ছাড়া। বাস্তব দুনিয়ায় শর্ত আছে — বাজেট, সময়, নিরাপত্তা। সেই সীমাবদ্ধ পৃথিবীতে কী হবে? আসবে পরের দরজায় — Lagrange-এর ভারসাম্য।</div>`,
  senior: {
    title: "Newton's Method এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Newton (1669)</td><td>টেঙ্জেন্ট লাইন দিয়ে root খোঁজা</td></tr>
<tr><td class="hl">Update Rule</td><td>x_{t+1} = x_t - H⁻¹∇f(x_t)</td></tr>
<tr><td class="hl">Hessian H</td><td>দ্বিতীয় ডেরিভেটিভের n×n ম্যাট্রিক্স</td></tr>
<tr><td class="hl">Quadratic Conv.</td><td>√(error) প্রতি ধাপ — দ্রুত</td></tr>
<tr><td class="hl">দুর্বলতা</td><td>H⁻¹ হিসাব O(n³) — বড় মডেলে অসম্ভব</td></tr>
<tr><td class="hl">L-BFGS</td><td>Quasi-Newton — H⁻¹ approximate করে</td></tr>
<tr><td class="hl">ML-এ ব্যবহার</td><td>ছোট মডেল — হ্যাঁ · বড় NN — না</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "⚖️",
  color: "#6366f1",
  name: "সীমার ভেতরে ভারসাম্য",
  subtitle: "Balance Within Limits",
  tech: "Constrained Optimization & Lagrangian — Lagrange (1788), KKT conditions (Karush 1939, Kuhn-Tucker 1951)",
  spirit: "মিজান — ভারসাম্য, শর্তের মধ্যে সেরা",
  secret: "Lagrangian = উদ্দেশ্য + λ × শর্ত। শর্তকে উদ্দেশ্যের সাথে মিলিয়ে দাও — সীমাবদ্ধ সমস্যা সীমাহীন হয়ে যায়। λ (Lagrange multiplier) = শর্তের ছাড় — কতটা শিথিল করলে উদ্দেশ্য কত বাড়ে।",
  recall: {
    q: " Lagrangian ফাংশন কী? KKT শর্ত কী বলে?",
    qen: "What is the Lagrangian function? What are KKT conditions?",
    a: "L(x,λ) = f(x) + λg(x)। KKT: প্রাথমিক শর্ত ∇f = -λ∇g, পরিপূরক শিথিলতা λg(x) = 0, দ্বৈত সম্ভাব্যতা λ ≥ 0।",
    aen: "L(x,λ) = f(x) + λg(x). KKT: stationarity, complementary slackness, dual feasibility."
  },
  story: `<p class="scene-setting">তুরিন, ১৭৮৮। Joseph-Louis Lagrange "Mécanique Analytique" লিখছেন। তার সমস্যা — একটি বস্তু শর্তের মধ্যে সরছে (যেমন দড়িতে বাঁধা)। কীভাবে তার গতি বর্ণনা করবে? Lagrange-এর উপায় — শর্তকে উদ্দেশ্যের সাথে যুক্ত করো। একটি নতুন ফাংশন তৈরি করো — Lagrangian। শর্ত শূন্য হলে সমস্যা নেই — শর্ত লঙ্ঘন হলে λ শাস্তি দেয়।</p>
<p class="scene-setting en">Turin, 1788. Joseph-Louis Lagrange writes "Mécanique Analytique." His problem: an object moves under constraints (tied to a rope). How to describe its motion? Lagrange's way — merge constraints into the objective. Create a new function — the Lagrangian.</p>

<div class="dialogue"><strong>ভারসাম্য রক্ষক জাকির:</strong> ভাবো তুমি একটি বক্সে আছো। বক্সের দেয়াল = শর্ত। তুমি সবচেয়ে আরামদায়ক জায়গা খুঁজছো — কিন্তু দেয়ালের ভেতরে। Lagrange বলেন — দেয়ালকে একটি স্প্রিং হিসেবে ভাবো। দেয়াল ছুঁলে স্প্রিং চাপ দেয়। সেই চাপ = Lagrange multiplier (λ)। যেখানে তোমার আরাম-এর চাপ ও স্প্রিং-এর চাপ সমান — সেই বিন্দুই সমাধান।</div>
<div class="dialogue en"><strong>Balance Keeper Zakir:</strong> Imagine you're in a box. Box walls = constraints. You seek the most comfortable spot — but inside the walls. Lagrange says: treat walls as springs. Touching a wall pushes back. That push = Lagrange multiplier (λ). Where your comfort-force equals spring-force — that's the solution.</div>

<div class="callout info"><span class="co-icon">⚖️</span><div><strong>Lagrangian পদ্ধতি:</strong><br>
<strong>সমস্যা:</strong> minimize f(x) subject to g(x) ≤ 0<br>
<strong>Lagrangian:</strong> L(x, λ) = f(x) + λ · g(x)<br>
যেখানে λ ≥ 0 = Lagrange multiplier (শর্তের "দাম")<br><br>
<strong>KKT শর্ত (Karush-Kuhn-Tucker, ১৯৫১):</strong><br>
১. Stationarity: ∇f + λ∇g = 0 (gradient balance)<br>
২. Primal feasibility: g(x) ≤ 0 (শর্ত মানা হয়েছে)<br>
৩. Dual feasibility: λ ≥ 0 (multiplier ঋণাত্মক নয়)<br>
৪. Complementary slackness: λ · g(x) = 0 (শর্ত সক্রিয় হলে λ > 0, নাহলে λ = 0)</div></div>

<div class="code-block">— বাস্তব উদাহরণ: SVM (Support Vector Machine) —

  সমস্যা: maximize margin = minimize ||w||²
  শর্ত: yᵢ(w·xᵢ + b) ≥ 1  (প্রতিটি ডেটা পয়েন্ট সঠিক পাশে)

  Lagrangian:
  L(w, b, α) = ½||w||² - Σ αᵢ[yᵢ(w·xᵢ + b) - 1]

  αᵢ = Lagrange multiplier প্রতিটি পয়েন্টের জন্য

  — চমকপ্রদ ফলাফল: —
    বেশিরভাগ αᵢ = 0  (সেই পয়েন্টগুলো শর্ত লঙ্ঘন করে না)
    কয়েকটি αᵢ > 0  (এগুলোই "support vectors"!)
    → শুধু কয়েকটি পয়েন্ট সিদ্ধান্ত নেয় — বাকি সব অপ্রয়োজনীয়

— বাস্তব জীবনে Lagrangian: —
  বাজেট ≤ ১০০$, সর্বোচ্চ খুশি → প্রতিটি ডলারের মূল্য = λ
  λ বেশি = টাকা কম, খুশি বেশি দরকার → বাজেট বাড়ালে খুশি বাড়ে</div>

<div class="callout info"><span class="co-icon">💡</span><div><strong>Lagrange Multiplier-এর অর্থ:</strong> λ = শর্ত এক একক শিথিল করলে উদ্দেশ্য কত বাড়ে। অর্থনীতিতে একে "shadow price" বলে। ML-এ: SVM-এ α = কোন ডেটা পয়েন্ট গুরুত্বপূর্ণ (support vector) তা নির্দেশ করে।</div></div>

<div class="verse">وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং আসমানকে উঁচু করেছেন এবং স্থাপন করেছেন মিজান (তুলা)।" — কুরআন ৫৫:৭</div>

<p class="scene-setting">মিজান — তুলা, ভারসাম্য। Lagrangian-এর λ সেই তুলার দন্ড — উদ্দেশ্য ও শর্তের মধ্যে ভারসাম্য স্থাপন করে। যেখানে দুটি বল সমান — সেই বিন্দুই সমাধান। এটাই সীমাবদ্ধ জগতে সেরা খোঁজার উপায়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩১ Door ৭ (SVM):</strong> SVM-এর পুরো গণিত Lagrangian dual-এর উপর নির্মিত! Support vectors = Lagrange multiplier যেখানে α > 0। এখন তুমি বোঝো কেন কয়েকটি পয়েন্টই যথেষ্ট।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚖️ Lagrangian: Objective + Constraint = Balance</text>
  <ellipse cx="290" cy="130" rx="200" ry="80" fill="none" stroke="#6366f1" stroke-width="2"/>
  <text x="290" y="100" text-anchor="middle" fill="#a5b4fc" font-size="10">Feasible region (constraints satisfied)</text>
  <circle cx="200" cy="120" r="6" fill="#fbbf24"/>
  <text x="215" y="118" fill="#fcd34d" font-size="10">min(f)</text>
  <circle cx="290" cy="130" r="6" fill="#22c55e"/>
  <text x="305" y="128" fill="#4ade80" font-size="10">optimal: L = f + lambda*g</text>
  <line x1="100" y1="80" x2="480" y2="180" stroke="#f87171" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="400" y="180" fill="#fca5a5" font-size="10">g(x) = 0 constraint</text>
  <text x="290" y="220" text-anchor="middle" fill="#94a3b8" font-size="10">KKT: nabla f + lambda * nabla g = 0 (gradient alignment)</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Lagrangian — উদ্দেশ্য ও শর্তের ভারসাম্য। KKT শর্ত সর্বোত্তম বিন্দু খুঁজে দেয়।</div>

<div class="secret-box">⚖️ <strong>Lagrangian = উদ্দেশ্য + λ × শর্ত।</strong> শর্তকে উদ্দেশ্যে মিলিয়ে দাও — সীমাবদ্ধ সমস্যা সীমাহীন হয়ে যায়। λ = শর্তের দাম। এতদিন পর্যন্ত তুমি শিখলে — উতলা বাটি (Door ২), ঢাল অনুসরণ (Door ৩), বক্রতা (Door ৪), ভারসাম্য (Door ৫)। কিন্তু সবই ডেটার পুরো সেট নিয়ে কাজ করে। বাস্তবে ডেটা বিশাল — কোটি কোটি পয়েন্ট। প্রতিটি ধাপে পুরো ডেটা দেখা অসম্ভব। কী করবে? আসবে পরের দরজায় — শব্দ দিয়ে সত্য খোঁজা।</div>`,
  senior: {
    title: "Constrained Optimization এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Lagrange (1788)</td><td>Mécanique Analytique — Lagrangian</td></tr>
<tr><td class="hl">Lagrangian</td><td>L(x,λ) = f(x) + λg(x)</td></tr>
<tr><td class="hl">Lagrange Mult. λ</td><td>শর্তের "দাম" — shadow price</td></tr>
<tr><td class="hl">KKT (1951)</td><td>৪টি শর্ত — optimality-এর চাবি</td></tr>
<tr><td class="hl">Complementary Slackness</td><td>λg(x) = 0 — শর্ত নিষ্ক্রিয় হলে λ = 0</td></tr>
<tr><td class="hl">SVM</td><td>পুরোপুরি Lagrangian dual-এ নির্মিত</td></tr>
<tr><td class="hl">Support Vectors</td><td>পয়েন্ট যেখানে α > 0 — সিদ্ধান্ত নেয়</td></tr></table>`
  }
});
