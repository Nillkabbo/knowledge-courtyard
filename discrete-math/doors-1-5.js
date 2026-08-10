const doors = [];

doors.push({
  num: 1,
  icon: "⚖️",
  color: "#8b5cf6",
  name: "সত্যের ভাষা",
  subtitle: "The Language of Truth",
  tech: "Propositional Logic — Aristotle (350 BCE), De Morgan (1847), Boolean algebra, truth tables, implications",
  spirit: "সিদ্ক — সত্য, প্রতিটি যুক্তির ভিত্তি",
  secret: "প্রতিটি if/else একটি যৌক্তিক সমীকরণ। De Morgan-এর নিয়ম: NOT(A AND B) = NOT A OR NOT B। তুমি Django QuerySet-এ প্রতিদিন এটা ব্যবহার করছ — অজান্তেই।",
  recall: {
    q: " De Morgan-এর নিয়ম কী? একটি বাস্তব উদাহরণ দাও।",
    qen: "What is De Morgan's Law? Give a real-world example.",
    a: "NOT(A AND B) = NOT A OR NOT B। Django-তে: exclude(is_staff=True, is_active=True) ≡ filter(Q(is_staff=False) | Q(is_active=False))।",
    aen: "NOT(A AND B) = NOT A OR NOT B. In Django: exclude(a=True, b=True) ≡ filter(Q(a=False) | Q(b=False))."
  },
  story: `<p class="scene-setting">এথেন্স, ৩৫০ খ্রিস্টপূর্ব। একটি ছায়ায় ঢাকা বারান্দায় একজন বৃদ্ধ পায়চারি করছেন। তার দাড়ি সাদা, চোখে তীক্ষ্ণতা — অন্ধকারেও সত্য খুঁজে বের করার মতো। তিনি হলেন অ্যারিস্টটল। তার হাতে একটি মোমবাতি — প্রতীকী, কারণ তিনি যে জিনিস আবিষ্কার করছেন তা আলো: যুক্তির ভাষা। "প্রতিটি বাক্য হয় সত্য হয় মিথ্যা," তিনি বলেন। "মাঝামাঝি কিছু নেই।" এটাই প্রোপোজিশনাল লজিক — সত্যের বীজগণিত।</p>
<p class="scene-setting en">Athens, 350 BCE. A covered colonnade. An old man paces — white beard, sharp eyes that find truth even in darkness. He is Aristotle. In his hand a candle — symbolic, for what he discovers is light itself: the language of logic. "Every statement is either true or false," he declares. "Nothing in between." This is propositional logic — the algebra of truth.</p>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু আমি তো প্রতিদিন if/else লিখি। এটা কি সেই একই জিনিস?</div>
<div class="dialogue en"><strong>You:</strong> But I write if/else every day. Is this the same thing?</div>

<div class="dialogue"><strong>সত্য-রক্ষক ইদ্রিস:</strong> হ্যাঁ — আর তুমি অজান্তেই De Morgan-এর নিয়ম প্রতিদিন প্রয়োগ করছ। তোমার Django QuerySet: exclude(is_staff=True, is_active=True)। এটা মানে NOT(staff AND active)। কিন্তু De Morgan বলেন — এটা একই যে NOT staff OR NOT active। দুই রাস্তা, এক ফল। এটাই লজিকের জাদু — একই সত্যকে দুই রূপে দেখা।</div>
<div class="dialogue en"><strong>Truth Keeper Idris:</strong> Yes — and you unknowingly apply De Morgan's Law every day. Your Django exclude(is_staff=True, is_active=True) means NOT(staff AND active). De Morgan proved this equals NOT staff OR NOT active. Two paths, one truth. This is the magic of logic — the same truth seen in two forms.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>প্রোপোজিশনাল লজিকের সত্য সারণি:</strong><br>
<strong>P</strong> → একটি সত্য/মিথ্যা বাক্য<br>
<strong>¬P</strong> → উল্টা (negation): P সত্য হলে ¬P মিথ্যা<br>
<strong>P ∧ Q</strong> → AND: দুটোই সত্য হলেই সত্য<br>
<strong>P ∨ Q</strong> → OR: যেকোনো একটা সত্য হলে সত্য<br>
<strong>P → Q</strong> → IMPLIES: P সত্য হলে Q-ও সত্য হতে হবে</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚖️ De Morgan's Laws: The Hidden Rules of if/else</text>

  <!-- Truth Table -->
  <rect x="20" y="50" width="250" height="190" rx="10" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="700">Truth Table</text>
  <rect x="30" y="82" width="40" height="20" rx="3" fill="#1e3a5f" stroke="#8b5cf6" stroke-width="1"/>
  <text x="50" y="96" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">P</text>
  <rect x="72" y="82" width="40" height="20" rx="3" fill="#1e3a5f" stroke="#8b5cf6" stroke-width="1"/>
  <text x="92" y="96" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">Q</text>
  <rect x="114" y="82" width="70" height="20" rx="3" fill="#1e3a5f" stroke="#8b5cf6" stroke-width="1"/>
  <text x="149" y="96" text-anchor="middle" fill="#a78bfa" font-size="10">¬(P∧Q)</text>
  <rect x="186" y="82" width="70" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="221" y="96" text-anchor="middle" fill="#4ade80" font-size="10">¬P∨¬Q</text>

  <text x="50" y="115" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="92" y="115" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="149" y="115" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="221" y="115" text-anchor="middle" fill="#4ade80" font-size="8">F ✓</text>
  <text x="50" y="135" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="92" y="135" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="149" y="135" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="221" y="135" text-anchor="middle" fill="#4ade80" font-size="8">T ✓</text>
  <text x="50" y="155" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="92" y="155" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="149" y="155" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="221" y="155" text-anchor="middle" fill="#4ade80" font-size="8">T ✓</text>
  <text x="50" y="175" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="92" y="175" text-anchor="middle" fill="#cbd5e1" font-size="8">F</text>
  <text x="149" y="175" text-anchor="middle" fill="#cbd5e1" font-size="8">T</text>
  <text x="221" y="175" text-anchor="middle" fill="#4ade80" font-size="8">T ✓</text>

  <text x="145" y="205" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Columns match → Equivalent! ✅</text>
  <text x="145" y="225" text-anchor="middle" fill="#64748b" font-size="10" font-style="italic">All 4 rows: ¬(P∧Q) = ¬P∨¬Q</text>

  <!-- Django Example -->
  <rect x="290" y="50" width="270" height="190" rx="10" fill="#0c4a6e" stroke="#fbbf24" stroke-width="2"/>
  <text x="425" y="72" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="700">🐍 Django Example</text>
  <rect x="305" y="85" width="240" height="28" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
  <text x="425" y="103" text-anchor="middle" fill="#fcd34d" font-size="10" font-family="monospace">User.objects.exclude(is_staff=True,</text>
  <rect x="305" y="116" width="240" height="22" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
  <text x="425" y="131" text-anchor="middle" fill="#fcd34d" font-size="10" font-family="monospace">    is_active=True)</text>
  <text x="425" y="152" text-anchor="middle" fill="#7dd3fc" font-size="10">≡ (De Morgan's!)</text>
  <rect x="305" y="160" width="240" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="425" y="175" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">User.objects.filter(</text>
  <rect x="305" y="183" width="240" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="425" y="198" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">  Q(is_staff=False) | Q(is_active=False))</text>
  <text x="425" y="222" text-anchor="middle" fill="#4ade80" font-size="10">Same result! De Morgan proven in code ✅</text>

  <rect x="60" y="260" width="460" height="40" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="280" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="600">💡 Logic simplification = fewer gates, faster circuits, cleaner code</text>
  <text x="290" y="294" text-anchor="middle" fill="#64748b" font-size="10">In hardware: fewer logic gates = smaller chip, less power, cheaper manufacturing</text>
</svg>
</div>
<div class="svg-caption">চিত্র: De Morgan's Law — truth table প্রমাণ করে ¬(P∧Q) ≡ ¬P∨¬Q। Django QuerySet-এ তুমি অজান্তেই এটা ব্যবহার করছ।</div>

<div class="code-block">— Python: De Morgan-এর নিয়ম যাচাই —

  P, Q = True, False
  left  = not (P and Q)      # ¬(P ∧ Q)
  right = (not P) or (not Q) # ¬P ∨ ¬Q
  print(left == right)       # True — De Morgan প্রমাণিত!

  # সব ৪ সম্ভাবনায় যাচাই (exhaustive truth table)
  for P in (True, False):
      for Q in (True, False):
          dm = (not (P and Q)) == ((not P) or (not Q))
          print(f"P={P!s:5} Q={Q!s:5} → {dm}")
  # সব row → True ✅

  # Django QuerySet-এ De Morgan:
  # exclude(is_staff=True, is_active=True)       ← NOT(A AND B)
  # filter(Q(is_staff=False) | Q(is_active=False)) ← NOT A OR NOT B
  # দুটো QuerySet একই ইউজার রিটার্ন করে!</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Implication-এর ফাঁদ:</strong> P → Q (যদি P তবে Q) শুধু তখনই মিথ্যা যখন P সত্য কিন্তু Q মিথ্যা। P মিথ্যা হলে — Q যাই হোক — P → Q সত্য! একে "vacuous truth" বলে। "যদি সূর্য পশ্চিমে ওঠে, তবে আমি রাজা" — সত্য! কারণ সূর্য পশ্চিমে ওঠে না।</div></div>

<div class="verse">قُلِ اللَّهُ يُلْقِي الْحَقَّ وَهُوَ الَّذِي يُفْرِعُهُ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"বলো, আল্লাহ সত্য নিক্ষেপ করেন — এবং তিনিই তা প্রতিষ্ঠিত করেন।" — কুরআন ১০:৮২</div>

<p class="scene-setting">সিদ্ক — সত্য। অ্যারিস্টটল যুক্তির ভাষা আবিষ্কার করেছিলেন — কিন্তু সত্য তার আগে থেকেই ছিল। প্রতিটি সত্য সারণি — AND, OR, NOT — একটি প্রতিফলন। De Morgan ১৮৪৭ সালে দেখালেন যে সত্য রূপ বদলায় কিন্তু মান বদলায় না। একই সত্য — দুই রূপে।</p>
<p class="scene-setting en">Sidq — truthfulness. Aristotle discovered the language of logic — but truth existed before. Every truth table — AND, OR, NOT — is a reflection. De Morgan in 1847 showed that truth changes form but not value. The same truth — in two forms.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৩ (Loom of Reason) Door ১:</strong> মানসিক মডেল শিখেছিলে — সেই মডেলের ভিত্তিই প্রোপোজিশনাল লজিক। Book ৪১ (Clockwork of Thought) Door ১: অটোমেটা — প্রতিটি logic gate একটি finite automaton।</div></div>

<div class="secret-box">⚖️ <strong>লজিক = সত্যের বীজগণিত।</strong> De Morgan: NOT(A AND B) = NOT A OR NOT B। তুমি প্রতিদিন এটা ব্যবহার করছ — Django-তে, if/else-এ, সার্কিটে। কিন্তু সত্য শুধু যুক্তি নয় — একটি জীবন্ত জিনিস। পরের দরজায় — সত্যকে প্রমাণ করার সবচেয়ে শক্তিশালী অস্ত্র: গাণিতিক আরোহ।</div>`,
  senior: {
    title: "Propositional Logic এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Aristotle (৩৫০ BCE)</td><td>প্রোপোজিশনাল লজিকের জনক</td></tr>
<tr><td class="hl">De Morgan (১৮৪৭)</td><td>¬(P∧Q) = ¬P∨¬Q · ¬(P∨Q) = ¬P∧¬Q</td></tr>
<tr><td class="hl">AND (∧)</td><td>দুটোই সত্য হলেই সত্য</td></tr>
<tr><td class="hl">OR (∨)</td><td>যেকোনো একটা সত্য হলে সত্য</td></tr>
<tr><td class="hl">NOT (¬)</td><td>উল্টে দাও</td></tr>
<tr><td class="hl">IMPLIES (→)</td><td>শুধু P=T, Q=F হলে মিথ্যা</td></tr>
<tr><td class="hl">Vacuous Truth</td><td>P=F হলে P→Q সর্বদা সত্য</td></tr>
<tr><td class="hl">Django QuerySet</td><td>exclude(a,b) ≡ filter(¬a | ¬b) — De Morgan!</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "🁢",
  color: "#8b5cf6",
  name: "ডোমিনোর প্রভাব",
  subtitle: "The Domino Effect",
  tech: "Mathematical Induction — base case + inductive step, strong vs weak induction, structural induction",
  spirit: "আমানত — আস্থা, একটি থেকে অনন্ত পর্যন্ত বিশ্বাসের শৃঙ্খল",
  secret: "ইনডাকশন = ডোমিনো। দুটি প্রমাণ: base case (প্রথমটা পড়ে) + inductive step (প্রতিটি পরেরটাকে ফেলে)। এই দুটো থেকে গাণিতিকভাবে অনুসরণ করে — সব পড়বে।",
  recall: {
    q: " গাণিতিক ইনডাকশনের দুটি ধাপ কী?",
    qen: "What are the two steps of mathematical induction?",
    a: "১. Base case: P(০) সত্য। ২. Inductive step: যদি P(k) সত্য হয়, তবে P(k+১) সত্য। এই দুটো থেকে P(n) সকল n-এর জন্য সত্য।",
    aen: "1. Base case: P(0) is true. 2. Inductive step: if P(k) is true, then P(k+1) is true. Together these prove P(n) for all n."
  },
  story: `<p class="scene-setting">তুমি একটি ঘরে দাঁড়িয়ে আছো। মেঝেতে হাজার ডোমিনো — একটার পর একটা সারিবদ্ধ। তুমি জানো যে প্রথমটা হালকা ধাক্কা দিলে সব পড়বে। কিন্তু কেন? প্রথমটা পড়ে দ্বিতীয়টাকে ধাক্কা দেয়। দ্বিতীয়টা তৃতীয়টাকে। এভাবে — ধাপে ধাপে। এটাই গাণিতিক ইনডাকশন — সীমিত থেকে অসীমের প্রমাণ।</p>
<p class="scene-setting en">You stand in a room. A thousand dominoes line the floor. You know the first push will topple them all. But why? The first falls and pushes the second. The second pushes the third. Step by step — this is mathematical induction — proving the infinite from the finite.</p>

<div class="dialogue"><strong>ডোমিনো কারিগর ইউসুফ:</strong> বলো — ১ থেকে n পর্যন্ত যোগ করলে কত? ১+২+৩+...+n। তুমি হয়তো n(n+১)/২ জানো। কিন্তু প্রমাণ কোথায়? ব্রুট ফোর্স চলবে না — n অসীম হতে পারে। ইনডাকশন দাও: base case — n=১ তে ১(২)/২ = ১ ✓। Inductive step — ধরো k পর্যন্ত সূত্র সত্য। তবে k+১ পর্যন্ত? (k+১)(k+২)/২। k পর্যন্ত যোগফলে (k+১) যোগ করো — সূত্র মিলে যায়! দুটি প্রমাণে — অসীম সত্য।</div>
<div class="dialogue en"><strong>Domino Craftsman Yusuf:</strong> Tell me — what is 1+2+3+...+n? You know the formula n(n+1)/2. But proof? Brute force won't work — n can be infinite. Induction: base case — n=1 gives 1(2)/2 = 1 ✓. Inductive step — assume formula holds for k. Then for k+1? Add (k+1) to the sum — formula matches! Two proofs — infinite truth.</div>

<div class="callout info"><span class="co-icon">🁢</span><div><strong>গাণিতিক ইনডাকশনের কাঠামো:</strong><br>
<strong>থিওরেম:</strong> প্রতিটি ধনাত্মক পূর্ণসংখ্যা n-এর জন্য P(n) সত্য।<br>
<strong>ধাপ ১ — Base Case:</strong> P(১) সত্য প্রমাণ করো।<br>
<strong>ধাপ ২ — Inductive Step:</strong> ধরো P(k) সত্য (inductive hypothesis)। এ থেকে প্রমাণ করো P(k+১) সত্য।<br>
<strong>সিদ্ধান্ত:</strong> ∴ সকল n-এর জন্য P(n) সত্য।</div></div>

<div class="code-block">— Python: ইনডাকশন যাচাই —
  # সূত্র: Σi = n(n+1)/2
  # ব্রুট ফোর্স vs সূত্র:
  for n in range(1, 20):
      brute = sum(range(1, n+1))       # ১+২+...+n
      formula = n * (n+1) // 2          # n(n+1)/2
      assert brute == formula, f"ব্যর্থ n={n}"
  print("সব n-এর জন্য মিলেছে ✅")

  # Strong induction: শুধু P(k) নয়, সব P(১)...P(k) ধরে নাও
  # Fibonacci: F(n) = F(n-1) + F(n-2)
  # Strong induction দরকার — কারণ দুটো আগের মান লাগে</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফাঁদ — Base Case ভুল:</strong> অনেকে inductive step প্রমাণ করে base case ভুলে যায়। "সকল সংখ্যা সমান" — inductive step কাজ করে কিন্তু base case ভুল! n=১ তে পরীক্ষা না করলে মিথ্যা সত্য হয়ে যায়। Base case = ভিত্তি — ভিত্তি না থাকলে ভবন দাঁড়ায় না।</div></div>

<div class="verse">وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং বলো, তোমরা কাজ করো — আল্লাহ তোমাদের কাজ দেখবেন।" — কুরআন ৯:১০৫</div>

<p class="scene-setting">"আমাল" — কাজ, ধাপে ধাপে। ইনডাকশনও তেমন — প্রতিটি ধাপ পূর্ববর্তীর উপর নির্মিত। প্রথম ধাপ নিশ্চিত (base case) — তারপর প্রতিটি ধাপ পরেরটিকে বহন করে (inductive step)। একটি থেকে অনন্ত — আস্থার শৃঙ্খল। আমানত।</p>
<p class="scene-setting en">"Amal" — work, step by step. Induction is the same — each step built on the previous. First step certain (base case) — then each step carries the next (inductive step). One to infinity — a chain of trust. Amanah.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ৩ (Recursion):</strong> প্রতিটি recursive ফাংশন = ইনডাকশন! Base case = termination। Recursive call = inductive step। factorial(0) = 1 (base), factorial(n) = n * factorial(n-1) (step)। সত্য-রক্ষক ইদ্রিস (Door ১) তোমাকে লজিক দিয়েছেন — এখন ইউসুফ দেখাচ্ছেন সেই লজিক কীভাবে অসীমকে ছুঁয়ে যায়।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrDM2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#a78bfa"/>
    </marker>
  </defs>
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🁢 গাণিতিক ইনডাকশন: ডোমিনো প্রমাণ</text>
  <rect x="15" y="42" width="130" height="48" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="80" y="62" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">ধাপ ১: Base Case</text>
  <text x="80" y="78" text-anchor="middle" fill="#4ade80" font-size="8">P(1) সত্য প্রমাণ করো</text>
  <line x1="150" y1="66" x2="185" y2="66" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrDM2)"/>
  <rect x="190" y="42" width="160" height="48" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="270" y="62" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">ধাপ ২: Inductive Step</text>
  <text x="270" y="78" text-anchor="middle" fill="#a78bfa" font-size="8">P(k) সত্য → P(k+1) সত্য</text>
  <line x1="355" y1="66" x2="390" y2="66" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrDM2)"/>
  <rect x="395" y="42" width="170" height="48" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="480" y="62" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">∴ সকল n-এর জন্য</text>
  <text x="480" y="78" text-anchor="middle" fill="#4ade80" font-size="8">P(n) সত্য ✓</text>
  <rect x="35" y="120" width="26" height="65" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="2" transform="rotate(12 48 152)"/>
  <text x="48" y="130" text-anchor="middle" fill="#4ade80" font-size="10" transform="rotate(12 48 130)">P(1)</text>
  <rect x="78" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="91" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(2)</text>
  <rect x="121" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="134" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(3)</text>
  <rect x="164" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="177" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(4)</text>
  <text x="210" y="155" text-anchor="middle" fill="#64748b" font-size="14">...</text>
  <rect x="232" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="245" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(k)</text>
  <rect x="275" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="288" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(k+1)</text>
  <text x="318" y="155" text-anchor="middle" fill="#64748b" font-size="14">...</text>
  <rect x="340" y="118" width="26" height="65" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="353" y="128" text-anchor="middle" fill="#a78bfa" font-size="10">P(n)</text>
  <rect x="400" y="115" width="165" height="75" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="482" y="135" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">ক্লাসিক উদাহরণ</text>
  <text x="482" y="153" text-anchor="middle" fill="#e2e8f0" font-size="9">1+2+...+n = n(n+1)/2</text>
  <text x="482" y="170" text-anchor="middle" fill="#cbd5e1" font-size="10">n=1: 1(2)/2 = 1 ✓</text>
  <text x="482" y="183" text-anchor="middle" fill="#cbd5e1" font-size="10">k→k+1: সূত্র মেলে ✓</text>
  <rect x="15" y="208" width="550" height="28" rx="6" fill="#0f172a" stroke="#8b5cf6" stroke-width="1"/>
  <text x="290" y="226" text-anchor="middle" fill="#a78bfa" font-size="8">💡 দুটি ধাপ প্রমাণ করো — অসীম সত্য গাণিতিকভাবে নিশ্চিত! Recursion = induction in code.</text>
</svg>
</div>
<div class="svg-caption">চিত্র: গাণিতিক ইনডাকশন — Base Case (প্রথম ডোমিনো পড়ে) ও Inductive Step (প্রতিটি পরের ডোমিনো ফেলে) থেকে সব ডোমিনো পড়ে। দুটি ধাপে অসীম সত্য প্রমাণ।</div>

<div class="secret-box">🁢 <strong>ইনডাকশন = ডোমিনোর গাণিতিক প্রমাণ।</strong> দুটি ধাপ — ভিত্তি ও ধাপ। এক থেকে অসীম। কিন্তু কী যদি সত্যকে প্রমাণ করার সরাসরি উপায় না থাকে? কী যদি সত্যকে তার বিপরীত থেকে প্রমাণ করতে হয়? সেই যাত্রা — পরের দরজায়।</div>`,
  senior: {
    title: "Mathematical Induction এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Base Case</td><td>P(১) সত্য — প্রথম ডোমিনো</td></tr>
<tr><td class="hl">Inductive Step</td><td>P(k) → P(k+১) — প্রতিটি পরের ডোমিনো</td></tr>
<tr><td class="hl">Weak Induction</td><td>শুধু P(k) ধরে নাও</td></tr>
<tr><td class="hl">Strong Induction</td><td>P(১) থেকে P(k) সব ধরে নাও</td></tr>
<tr><td class="hl">Structural Induction</td><td>গাছ/recursive structure-এ</td></tr>
<tr><td class="hl">Σi = n(n+১)/২</td><td>ক্লাসিক উদাহরণ</td></tr>
<tr><td class="hl">Recursion</td><td>base case + recursive call = ইনডাকশন</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🔍",
  color: "#8b5cf6",
  name: "বিপরীত থেকে সত্য",
  subtitle: "Truth from the Opposite",
  tech: "Proof by Contradiction — Euclid (√2 irrational, ~300 BCE), contrapositive, proof by exhaustion",
  spirit: "বুরহান — প্রমাণ, অসম্ভব থেকে সম্ভব প্রমাণ",
  secret: "অসম্ভব ধরে নাও, তারপর দেখাও যে অসম্ভব। যদি বিপরীত অসম্ভব হয়, তবে মূল সত্য। এটাই কন্ট্রাডিকশন — চিৎ করে সত্যকে ধরা।",
  recall: {
    q: " √২ অমূলদ প্রমাণ করো contradiction দিয়ে।",
    qen: "Prove √2 is irrational using contradiction.",
    a: "ধরো √২ = p/q (মূলদ, সরল ভগ্নাংশ)। তবে p² = ২q² — p² জোড়, তাই p জোড়। p=২k → ৪k²=২q² → q²=২k² — q জোড়। কিন্তু p ও q উভয় জোড় হলে ভগ্নাংশ সরল নয়! অন্তর্বিরোধ।",
    aen: "Assume √2 = p/q (simplified). Then p²=2q² — p is even. p=2k → q²=2k² — q is also even. But both even contradicts simplified fraction! ∴ √2 is irrational."
  },
  story: `<p class="scene-setting">আলেকজান্দ্রিয়া, ৩০০ খ্রিস্টপূর্ব। একটি সাদা চকের উপর একটি সমীকরণ: √২ = p/q। ইউক্লিড জানতেন এটা ভুল। কিন্তু সরাসরি প্রমাণ কঠিন। তার উপায়? ধরে নাও সত্য — তারপর দেখাও এটা অসম্ভব। যদি বিপরীত অসম্ভব হয়, মূল সত্য হতে বাধ্য। এটাই কন্ট্রাডিকশন — অন্ধকার থেকে আলো বের করা।</p>
<p class="scene-setting en">Alexandria, 300 BCE. On white chalk: √2 = p/q. Euclid knew this was false. But direct proof is hard. His method? Assume true — then show it is impossible. If the opposite is impossible, the original must be true. This is contradiction — extracting light from darkness.</p>

<div class="dialogue"><strong>প্রমাণ-কারিগর জাইদ:</strong> ইউসুফ (Door ২) তোমাকে ইনডাকশন দিয়েছেন — ধাপে ধাপে। কিন্তু কিছু সত্য ধাপে প্রমাণ করা যায় না। সেগুলোকে উল্টে ধরতে হয়। √২ অমূলদ — এটা সরাসরি বলা কঠিন। কিন্তু ধরে নাও মূলদ। তাহলে p/q = √২, যেখানে p ও q সহমৌলিক। উভয়কে ২ দিয়ে ভাগ যায় না। কিন্তু গাণিতিকভাবে — উভয়কে ২ দিয়ে ভাগ যায়! অন্তর্বিরোধ। সহমৌলিক কিন্তু ভাগ যায়? অসম্ভব! তাই √২ মূলদ হতে পারে না।</div>
<div class="dialogue en"><strong>Proof Artisan Zaid:</strong> Yusuf (Door 2) gave you induction — step by step. But some truths cannot be proven stepwise. They must be flipped. √2 irrational — hard to say directly. But assume rational: p/q, coprime. Then p²=2q² — p even, q even. Coprime but both even? Impossible! ∴ √2 cannot be rational.</div>

<div class="code-block">— Python: √২ অমূলদ প্রমাণ যাচাই —

  # যদি √২ মূলদ হয়, p/q পাওয়া যাবে
  from math import isqrt

  def find_rational_sqrt2(max_q=1000000):
      for q in range(1, max_q):
          p = isqrt(2 * q * q)
          if p * p == 2 * q * q:
              return p, q   # পাওয়া গেছে!
      return None             # পাওয়া যায়নি → অমূলদ

  result = find_rational_sqrt2()
  print(result)  # None — কোনো p/q নেই!

  # প্রতিটি ভগ্নাংশ চেক:
  best = min(range(1,1000), key=lambda q:
      abs(2*q*q - isqrt(2*q*q)**2))
  print(f"Best: {isqrt(2*best**2)}/{best} = {isqrt(2*best**2)/best}")
  # 1414/1000 = 1.414 — কাছে, কিন্তু সমান নয়!</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>কন্ট্রাপোজিটিভ (Contrapositive):</strong> "P → Q" প্রমাণ করতে কঠিন? প্রমাণ করো "¬Q → ¬P"। এগুলো সমতুল্য! "যদি বৃষ্টি হয়, রাস্তা ভেজা" প্রমাণ করতে কঠিন? প্রমাণ করো: "রাস্তা শুকনো হলে বৃষ্টি হয়নি।" এটাই contrapositive — সমান কিন্তু সহজ।</div></div>

<div class="verse">بَلْ نَقْذِفُ بِالْحَقِّ عَلَى الْبَاطِلِ فَيَدْمَغُهُ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"বরং আমরা সত্যকে মিথ্যার উপর নিক্ষেপ করি, ফলে তা মিথ্যাকে চূর্ণ করে।" — কুরআন ২১:১৮</div>

<p class="scene-setting">"সত্যকে মিথ্যার উপর নিক্ষেপ" — এটাই কন্ট্রাডিকশন! মিথ্যা ধরে নাও, তারপর সত্য দিয়ে তাকে চূর্ণ করো। বুরহান — প্রমাণের শক্তি এখানে। সরাসরি নয়, বরং অন্তর্বিরোধ থেকে। মিথ্যা যে মিথ্যা — তা নিজেই প্রমাণ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৩ (Loom of Reason) Door ৫ (Bayesian):</strong> সত্য প্রমাণ করা = belief আপডেট। কন্ট্রাডিকশন একটি শক্তিশালী প্রমাণ কারণ এটা বিশ্বাসকে ১০০%-এ নিয়ে যায়। Book ৪১ Door ৩: টuring machine-এর halting problem-ও contradiction দিয়ে প্রমাণিত!</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrDM3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#a78bfa"/>
    </marker>
    <marker id="arrDM3r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#f87171"/>
    </marker>
    <marker id="arrDM3g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/>
    </marker>
  </defs>
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔍 কন্ট্রাডিকশন: বিপরীত থেকে সত্য</text>
  <rect x="20" y="40" width="150" height="45" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
  <text x="95" y="58" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">ধরো বিপরীত সত্য</text>
  <text x="95" y="74" text-anchor="middle" fill="#c084fc" font-size="8">√2 = p/q (মূলদ)</text>
  <line x1="95" y1="88" x2="95" y2="110" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrDM3)"/>
  <rect x="20" y="115" width="150" height="45" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="95" y="133" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">গাণিতিক ধাপ</text>
  <text x="95" y="149" text-anchor="middle" fill="#e2e8f0" font-size="8">p² = 2q²</text>
  <line x1="95" y1="163" x2="95" y2="185" stroke="#f87171" stroke-width="2" marker-end="url(#arrDM3r)"/>
  <rect x="15" y="190" width="160" height="45" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="95" y="208" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">⊥ অন্তর্বিরোধ!</text>
  <text x="95" y="224" text-anchor="middle" fill="#fca5a5" font-size="10">p ও q উভয় জোড় — সহমৌলিক নয়</text>
  <line x1="175" y1="212" x2="220" y2="115" stroke="#22c55e" stroke-width="2" marker-end="url(#arrDM3g)" stroke-dasharray="4,3"/>
  <rect x="225" y="90" width="170" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="310" y="110" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">∴ মূল সত্য</text>
  <text x="310" y="128" text-anchor="middle" fill="#4ade80" font-size="8">√2 অমূলদ ✓</text>
  <rect x="225" y="155" width="340" height="80" rx="8" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="395" y="175" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">কন্ট্রাপোজিটিভ: সমতুল্য প্রমাণ</text>
  <text x="395" y="195" text-anchor="middle" fill="#e2e8f0" font-size="8">P → Q প্রমাণ কঠিন?</text>
  <text x="395" y="210" text-anchor="middle" fill="#7dd3fc" font-size="8">প্রমাণ করো: ¬Q → ¬P (সমতুল্য!)</text>
  <text x="395" y="225" text-anchor="middle" fill="#cbd5e1" font-size="10">"রাস্তা শুকনো → বৃষ্টি হয়নি"</text>
  <rect x="410" y="40" width="155" height="40" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="487" y="58" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">বিখ্যাত প্রয়োগ</text>
  <text x="487" y="73" text-anchor="middle" fill="#cbd5e1" font-size="10">Turing Halting Problem</text>
</svg>
</div>
<div class="svg-caption">চিত্র: কন্ট্রাডিকশন পদ্ধতি — বিপরীত ধরে নাও, গাণিতিক ধাপে অন্তর্বিরোধ খুঁজে পাও, তাহলে মূল সত্য প্রমাণিত। √2 অমূলদ প্রমাণ এভাবেই করা হয়।</div>

<div class="secret-box">🔍 <strong>কন্ট্রাডিকশন = মিথ্যা থেকে সত্য বের করা।</strong> ধরে নাও বিপরীত → দেখাও অসম্ভব → মূল সত্য। ইউক্লিড এটা √২-এ করেছিলেন, টুরিং halting problem-এ করেছিলেন। এখন তুমি জানো দুটি প্রমাণ — ইনডাকশন ও কন্ট্রাডিকশন। পরের দরজায় — সত্যের সবচেয়ে পরিচিত ভিত্তি: সেট তত্ত্ব।</div>`,
  senior: {
    title: "Proof Techniques এক নজরে",
    body: `<table class="kv-table"><tr><th>কৌশল</th><th>কখন ব্যবহার</th></tr>
<tr><td class="hl">Direct Proof</td><td>সরাসরি — P থেকে Q</td></tr>
<tr><td class="hl">Contradiction</td><td>¬P ধরে নাও → অন্তর্বিরোধ</td></tr>
<tr><td class="hl">Contrapositive</td><td>¬Q → ¬P (সমতুল্য P → Q)</td></tr>
<tr><td class="hl">Exhaustion</td><td>সব কেস চেক করো (finite)</td></tr>
<tr><td class="hl">Euclid √২</td><td>p,q সহমৌলিক কিন্তু উভয় জোড় → contradiction</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "⊇",
  color: "#8b5cf6",
  name: "সমাহারের জগৎ",
  subtitle: "The World of Sets",
  tech: "Set Theory — Cantor (1874), union/intersection/difference, power set, cardinality, Cantor's diagonal argument",
  spirit: "জামা — সমাবেশ, সবকিছুর একত্র সংগ্রহ",
  secret: "সেট = একটি সংগ্রহ। Union (∪) যোগ করে, intersection (∩) মিল খুঁজে, difference (∖) বিয়োগ করে। কিন্তু সত্যিকারের বিস্ময় — কিছু অসীম অন্য অসীমের চেয়ে বড়। ক্যান্টর এটা প্রমাণ করেছিলেন।",
  recall: {
    q: " পাওয়ার সেট কী? |P(S)| কত?",
    qen: "What is a power set? What is |P(S)|?",
    a: "পাওয়ার সেট = সেটের সব উপসেটের সংগ্রহ। |S| = n হলে |P(S)| = ২ⁿ। যেমন {a,b} এর পাওয়ার সেট: ∅, {a}, {b}, {a,b} — ৪টি।",
    aen: "Power set = collection of all subsets. If |S| = n, then |P(S)| = 2ⁿ. E.g., {a,b} has power set: ∅, {a}, {b}, {a,b} — 4 elements."
  },
  story: `<p class="scene-setting">হ্যালে, জার্মানি, ১৮৭৪। Georg Cantor একটি বিপ্লবাত্মক চিন্তা নিয়ে বসে আছেন। অসীম — কি সব অসীম সমান? তার উত্তর: না! প্রাকৃতিক সংখ্যার সেট ℵ₀ (aleph-null) — কিন্তু বাস্তব সংখ্যার সেট ২^ℵ₀ — বড়! একই অসীম কিন্তু ভিন্ন আকার। গণিতজগত এই আবিষ্কারে কাঁপছে।</p>
<p class="scene-setting en">Halle, Germany, 1874. Georg Cantor contemplates a revolutionary idea. Infinity — are all infinities equal? His answer: No! Natural numbers have cardinality ℵ₀ (aleph-null) — but real numbers have 2^ℵ₀ — larger! Same infinity, different sizes. Mathematics trembles.</p>

<div class="dialogue"><strong>সমাবেশ কারিগর রিয়াদ:</strong> জাইদ (Door ৩) তোমাকে প্রমাণ দিয়েছেন। এখন দেখো প্রমাণের কাঠামো — সেট। একটি সেট একটি বাক্সের মতো। ভেতরে কিছু জিনিস। A = {১,২,৩}। দুটি বাক্সের মিল দেখতে চাও? Intersection: A ∩ B। সব জিনিস একসাথে? Union: A ∪ B। A-তে আছে কিন্তু B-তে নেই? Difference: A ∖ B। কিন্তু সবচেয়ে বিস্ময়কর — একটি সেটের সব উপসেট: পাওয়ার সেট। ৩টি উপাদানের সেটে ৮টি উপসেট। n উপাদানে ২ⁿ। সর্বদা বড়।</div>
<div class="dialogue en"><strong>Assembly Artisan Riyad:</strong> Zaid (Door 3) gave you proofs. Now see the structure of proof — sets. A set is like a box. A = {1,2,3}. Common elements? Intersection. All together? Union. In A but not B? Difference. Most surprising — power set: all subsets. 3 elements → 8 subsets. n elements → 2ⁿ. Always larger.</div>

<div class="code-block">— Python: সেট অপারেশন —

  A = {1, 2, 3, 4}
  B = {3, 4, 5, 6}

  print(A | B)    # Union: {1,2,3,4,5,6}  ← ∪
  print(A & B)    # Intersection: {3,4}   ← ∩
  print(A - B)    # Difference: {1,2}     ← ∖
  print(A ^ B)    # Symmetric diff: {1,2,5,6} ← △

  # পাওয়ার সেট:
  from itertools import chain, combinations
  def powerset(s):
      return list(chain.from_iterable(
          combinations(s, r) for r in range(len(s)+1)))

  print(powerset({1, 2}))
  # [(), (1,), (2,), (1, 2)] — ৪টি = ২²

  # ক্যান্টরের বিস্ময়: |P(ℕ)| > |ℕ|
  # প্রাকৃতিক সংখ্যা: ℵ₀
  # বাস্তব সংখ্যা: ২^ℵ₀ — বড়!
  # প্রমাণ: Cantor diagonal argument</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>রাসেলের প্যারাডক্স (১৯০১):</strong> "সেট যার ভেতরে এমন সব সেট আছে যারা নিজেদের ধারণ করে না।" এই সেট কি নিজেকে ধারণ করে? হ্যাঁ হলে — না। না হলে — হ্যাঁ। অন্তর্বিরোধ! এটা থেকে জন্ম নিল ZFC সেট তত্ত্ব — কঠোর ভিত্তি।</div></div>

<div class="verse">وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً ۖ نُّسْقِيكُم مِّمَّا فِي بُطُونِهِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তোমাদের জন্য গবাদি পশুতে শিক্ষা রয়েছে — আমরা তাদের পেটে যা আছে তা থেকে তোমাদের পান করাই।" — কুরআন ১৬:৬৬</div>

<p class="scene-setting">জামা — সমাবেশ। প্রতিটি গবাদি পশু একটি সেট — দুধ, মাংস, চামড়ার সমাবেশ। সমাবেশ থেকে নির্যাস। সেট তত্ত্বও তেমন — সংগ্রহ থেকে সত্য বের করা। ক্যান্টর দেখিয়েছিলেন — সংগ্রহের আকার ভিন্ন হতে পারে, এমনকি অসীম হলেও।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩০ (Architect's Compass) Door ২ (Sets):</strong> ভেক্টর ও সেট শিখেছিলে — এখানে সেট-এর গভীর তত্ত্ব। Book ৪১ (Clockwork of Thought) Door ১: ফর্মাল ভাষা = সেট অফ স্ট্রিং। Book ৩৯ (Databases) Door ২: SQL = সেট অপারেশন (UNION, INTERSECT)।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⊇ সেট অপারেশন: ভেন ডায়াগ্রাম</text>
  <circle cx="200" cy="120" r="70" fill="#8b5cf6" fill-opacity="0.15" stroke="#8b5cf6" stroke-width="2.5"/>
  <circle cx="320" cy="120" r="70" fill="#22d3ee" fill-opacity="0.15" stroke="#22d3ee" stroke-width="2.5"/>
  <text x="160" y="90" text-anchor="middle" fill="#a78bfa" font-size="14" font-weight="900">A</text>
  <text x="165" y="105" text-anchor="middle" fill="#a78bfa" font-size="8">{1, 2, 3, 4}</text>
  <text x="360" y="90" text-anchor="middle" fill="#7dd3fc" font-size="14" font-weight="900">B</text>
  <text x="365" y="105" text-anchor="middle" fill="#7dd3fc" font-size="8">{3, 4, 5, 6}</text>
  <text x="260" y="125" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">A ∩ B</text>
  <text x="260" y="140" text-anchor="middle" fill="#fcd34d" font-size="10">{3, 4}</text>
  <rect x="20" y="205" width="115" height="35" rx="6" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="77" y="220" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="700">A ∪ B (Union)</text>
  <text x="77" y="233" text-anchor="middle" fill="#cbd5e1" font-size="10">{1,2,3,4,5,6}</text>
  <rect x="145" y="205" width="115" height="35" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="202" y="220" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">A ∩ B (Intersection)</text>
  <text x="202" y="233" text-anchor="middle" fill="#4ade80" font-size="10">{3, 4}</text>
  <rect x="270" y="205" width="115" height="35" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="327" y="220" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">A ∖ B (Difference)</text>
  <text x="327" y="233" text-anchor="middle" fill="#fca5a5" font-size="10">{1, 2}</text>
  <rect x="395" y="205" width="170" height="35" rx="6" fill="#0c4a6e" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="480" y="220" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">পাওয়ার সেট: |P(S)| = 2ⁿ</text>
  <text x="480" y="233" text-anchor="middle" fill="#cbd5e1" font-size="10">{a,b} → ∅,{a},{b},{a,b} = 4</text>
  <rect x="415" y="45" width="150" height="140" rx="8" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="490" y="65" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">সমীকরণসমূহ</text>
  <text x="425" y="85" fill="#e2e8f0" font-size="8">|A∪B| = |A|+|B|−|A∩B|</text>
  <text x="425" y="105" fill="#4ade80" font-size="8">= 4 + 4 − 2 = 6</text>
  <text x="425" y="130" fill="#7dd3fc" font-size="8">|A△B| = |A∪B|−|A∩B|</text>
  <text x="425" y="148" fill="#4ade80" font-size="8">= 6 − 2 = 4</text>
  <text x="425" y="170" fill="#fcd34d" font-size="10">SQL: UNION, INTERSECT,</text>
  <text x="425" y="182" fill="#fcd34d" font-size="10">EXCEPT = সেট অপারেশন!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ভেন ডায়াগ্রামে সেট অপারেশন — Union (যোগ), Intersection (মিল), Difference (পার্থক্য)। পাওয়ার সেট সর্বদা বড়: |P(S)| = 2ⁿ। SQL-এ এগুলো UNION, INTERSECT, EXCEPT।</div>

<div class="secret-box">⊇ <strong>সেট = সংগ্রহের গাণিতিক ভিত্তি।</strong> ∪ যোগ, ∩ মিল, ∖ পার্থক্য। পাওয়ার সেট সর্বদা বড় (২ⁿ)। কিন্তু সংগ্রহ বড়তে গিয়ে একটি প্রশ্ন জন্ম নেয় — কতভাবে সাজানো যায়? সেই উত্তর — পরের দরজায়।</div>`,
  senior: {
    title: "Set Theory এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Cantor (1874)</td><td>সেট তত্ত্বের জনক</td></tr>
<tr><td class="hl">Union ∪</td><td>A ও B-এর সব উপাদান</td></tr>
<tr><td class="hl">Intersection ∩</td><td>শুধু মিল থাকা উপাদান</td></tr>
<tr><td class="hl">Difference ∖</td><td>A-তে আছে, B-তে নেই</td></tr>
<tr><td class="hl">Power Set P(S)</td><td>সব উপসেট — |P(S)| = ২ⁿ</td></tr>
<tr><td class="hl">ℵ₀ < ২^ℵ₀</td><td>অসীমের ভিন্ন আকার</td></tr>
<tr><td class="hl">Russell Paradox</td><td>সেট যা নিজেকে ধারণ করে না</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "🎲",
  color: "#8b5cf6",
  name: "সাজানোর শিল্প",
  subtitle: "The Art of Arrangement",
  tech: "Combinatorics — permutations P(n,k), combinations C(n,k), inclusion-exclusion, birthday paradox, Pascal's triangle",
  spirit: "তাদবির — ব্যবস্থা, কতভাবে সাজানো যায়",
  secret: "সাজানোর দুটি প্রশ্ন — ক্রম গুরুত্বপূর্ণ (permutation P) নাকি নয় (combination C)। P(n,k) = n!/(n-k)!। C(n,k) = n!/(k!(n-k)!)। এই সূত্র প্রতিদিন কাজে লাগে — password সম্ভাবনা থেকে hash collision পর্যন্ত।",
  recall: {
    q: " P(n,k) এবং C(n,k)-এর সূত্র কী? পার্থক্য কী?",
    qen: "What are the formulas for P(n,k) and C(n,k)? What is the difference?",
    a: "P(n,k) = n!/(n-k)! — ক্রম গুরুত্বপূর্ণ। C(n,k) = n!/(k!(n-k)!) — ক্রম গুরুত্বহীন। C = P/k! — কারণ k! ভাবে সাজানো যায়।",
    aen: "P(n,k) = n!/(n-k)! — order matters. C(n,k) = n!/(k!(n-k)!) — order does not matter. C = P / k! because there are k! orderings."
  },
  story: `<p class="scene-setting">তুমি একটি রেস্তোরাঁয়। মেনুতে ৫টি খাবার। তুমি ৩টি বাছছ। কতভাবে? যদি ক্রম গুরুত্বপূর্ণ — P(৫,৩) = ৬০। কিন্তু যদি ক্রম গুরুত্বহীন (শুধু কোন ৩টি বেছেছ) — C(৫,৩) = ১০। একই ৩টি খাবার কতভাবে সাজানো যায়? ৩! = ৬। তাই ৬০ ÷ ৬ = ১০। এটাই কম্বিনেটরিক্স — গোনার শিল্প।</p>
<p class="scene-setting en">At a restaurant. 5 items on the menu. You choose 3. How many ways? If order matters — P(5,3) = 60. If order does not matter — C(5,3) = 10. Same 3 items can be arranged 3! = 6 ways. So 60 ÷ 6 = 10. This is combinatorics — the art of counting.</p>

<div class="dialogue"><strong>ব্যবস্থাপক নাদিয়া:</strong> রিয়াদ (Door ৪) তোমাকে সেট দিয়েছেন। এখন দেখো — সেট থেকে কতভাবে বাছাই করা যায়। জন্মদিনের প্যারাডক্স শুনেছ? ২৩ জন মানুষ এক ঘরে — ৫০% সম্ভাবনা দুজনের জন্মদিন মিলবে! মনে হয় অসম্ভব? C(২৩,২) = ২৫৩ জোড়া — প্রতিটি জোড়ায় ১/৩৬৫ সম্ভাবনা। ২৫৩ জোড়ায় অন্তত একটি মিলবে — ৫০%+। এটাই inclusion-exclusion — সম্ভাবনা যোগ করা।</div>
<div class="dialogue en"><strong>Arranger Nadia:</strong> Riyad (Door 4) gave you sets. Now see — how many ways to choose from a set. Birthday paradox: 23 people in a room — 50% chance two share a birthday! Seems impossible? C(23,2) = 253 pairs — each pair has 1/365 chance. 253 pairs — at least one match likely. This is inclusion-exclusion.</div>

<div class="code-block">— Python: কম্বিনেটরিক্স —

  from math import comb, perm, factorial

  # Permutation: ক্রম গুরুত্বপূর্ণ
  print(perm(5, 3))   # 60 — ৫টি থেকে ৩টি সাজানো
  print(perm(5, 5))   # 120 — ৫! = সব পারমুটেশন

  # Combination: ক্রম গুরুত্বহীন
  print(comb(5, 3))   # 10 — ৫টি থেকে ৩টি বাছাই
  print(comb(10, 0))  # 1 — শূন্য সেট বাছাই

  # জন্মদিন প্যারাডক্স যাচাই:
  def birthday_prob(n):
      p_no_match = 1.0
      for i in range(n):
          p_no_match *= (365 - i) / 365
      return 1 - p_no_match

  print(birthday_prob(23))  # 0.507 — ৫০.৭%!
  print(birthday_prob(50))  # 0.970 — ৯৭%!
  print(birthday_prob(70))  # 0.999 — ৯৯.৯%!

  # hash collision: ৬৪-bit hash, কত কী-তে ৫০% collision?
  # C(n,2) / 2^64 ≈ 0.5 → n ≈ 2^32 ≈ ৪ বিলিয়ন</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Pascal-এর ত্রিভুজ:</strong> প্রতিটি সংখ্যা উপরের দুটির যোগফল। C(n,k) এর মান সরাসরি পড়ো। ১ ৩ ৩ ১ = C(৩,০), C(৩,১), C(৩,২), C(৩,৩)। এটাই (a+b)ⁿ এর সহগ — binomial theorem!</div></div>

<div class="verse">كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"প্রতিদিন তিনি কোনো না কোনো কাজে আছেন।" — কুরআন ৫৫:২৯</div>

<p class="scene-setting">প্রতিদিন অসংখ্য সম্ভাবনা — তাদবির। কতভাবে সাজানো যায়, কতভাবে বাছা যায়। কম্বিনেটরিক্স সেই সম্ভাবনা গোনার ভাষা। প্রতিটি পছন্দ একটি সম্ভাবনা — এবং প্রতিটি সম্ভাবনা গণনায় ধরা যায়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৯ (Probability) Door ১:</strong> সম্ভাবনা হিসাবে কম্বিনেটরিক্স ব্যবহৃত! Book ৪৬ (Cryptography) Door ৩: hash collision = birthday paradox। Book ৪৮ Door ৬: pigeonhole — অসংখ্য জিনিস কম বাক্সে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎲 Combinatorics: Permutations vs Combinations</text>
  <rect x="20" y="55" width="250" height="170" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="145" y="78" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">PERMUTATION (order matters)</text>
  <text x="145" y="100" text-anchor="middle" fill="#d8b4fe" font-size="8">ABC, ACB, BAC, BCA, CAB, CBA</text>
  <text x="145" y="120" text-anchor="middle" fill="#c084fc" font-size="10">P(n,k) = n! / (n-k)!</text>
  <rect x="35" y="135" width="60" height="25" rx="4" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="65" y="152" text-anchor="middle" fill="#c084fc" font-size="10">A B C</text>
  <rect x="100" y="135" width="60" height="25" rx="4" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="130" y="152" text-anchor="middle" fill="#c084fc" font-size="10">A C B</text>
  <rect x="165" y="135" width="60" height="25" rx="4" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="195" y="152" text-anchor="middle" fill="#c084fc" font-size="10">B A C</text>
  <text x="145" y="180" text-anchor="middle" fill="#d8b4fe" font-size="10">3! = 6 arrangements</text>
  <text x="145" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">Password strength: 8 chars</text>
  <text x="145" y="212" text-anchor="middle" fill="#94a3b8" font-size="10">= 62^8 = 218 trillion</text>
  <rect x="300" y="55" width="260" height="170" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="430" y="78" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">COMBINATION (order irrelevant)</text>
  <text x="430" y="100" text-anchor="middle" fill="#bae6fd" font-size="8">{A,B,C} = same as {C,B,A}</text>
  <text x="430" y="120" text-anchor="middle" fill="#7dd3fc" font-size="10">C(n,k) = n! / (k!(n-k)!)</text>
  <rect x="320" y="135" width="80" height="25" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="360" y="152" text-anchor="middle" fill="#7dd3fc" font-size="10">{A,B}</text>
  <rect x="410" y="135" width="80" height="25" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="450" y="152" text-anchor="middle" fill="#7dd3fc" font-size="10">{A,C}</text>
  <rect x="500" y="135" width="50" height="25" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="525" y="152" text-anchor="middle" fill="#7dd3fc" font-size="10">{B,C}</text>
  <text x="430" y="180" text-anchor="middle" fill="#bae6fd" font-size="10">C(3,2) = 3 unique pairs</text>
  <text x="430" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">Birthday paradox: C(23,2)</text>
  <text x="430" y="212" text-anchor="middle" fill="#94a3b8" font-size="10">= 253 pairs, 50% match</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Permutation (ক্রম গুরুত্বপূর্ণ) vs Combination (ক্রম অগ্রাহ্য)।</div>

<div class="secret-box">🎲 <strong>কম্বিনেটরিক্স = গোনার শিল্প।</strong> P(n,k) = ক্রম সহ, C(n,k) = ক্রম ছাড়া। জন্মদিন প্যারাডক্স, hash collision, password শক্তি — সব এর উপর নির্ভর। এখন প্রথম ৫টি দরজা শেষ — পরের অধ্যায়ে নতুন জগত।</div>`,
  senior: {
    title: "Combinatorics এক নজরে",
    body: `<table class="kv-table"><tr><th>সূত্র</th><th>বিবরণ</th></tr>
<tr><td class="hl">P(n,k) = n!/(n-k)!</td><td>Permutation — ক্রম গুরুত্বপূর্ণ</td></tr>
<tr><td class="hl">C(n,k) = n!/(k!(n-k)!)</td><td>Combination — ক্রম গুরুত্বহীন</td></tr>
<tr><td class="hl">n!</td><td>n এর ফ্যাক্টরিয়াল</td></tr>
<tr><td class="hl">Pascal Triangle</td><td>C(n,k) এর মান — binomial coefficients</td></tr>
<tr><td class="hl">Birthday Paradox</td><td>২৩ জনে ৫০% মিল — C(২৩,২)=২৫৩ জোড়া</td></tr>
<tr><td class="hl">Inclusion-Exclusion</td><td>|A∪B| = |A|+|B|−|A∩B|</td></tr></table>`
  }
});
