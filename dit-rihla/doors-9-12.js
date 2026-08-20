// ════════════════════════════════════════
// Book 57 · ষাট ক্রেডিটের রিহলা — Doors 9–12
// ════════════════════════════════════════

// ── দরজা ৯ · আবিষ্কারের বাজার ──────────────────
doors.push({
  num: 9,
  icon: "💡",
  color: "#7dd3fc",
  name: "আবিষ্কারের বাজার",
  subtitle: "The Bazaar of Invention — Innovation & Entrepreneurship (DIT 6033)",
  tech: "Innovation · Disruption (S-curve) · MVP · Pivot · Diffusion of Innovation",
  spirit: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ — 'মানুষ নিজেদের না বদলালে আল্লাহ অবস্থা বদলান না' (কুরআন ১৩:১১)",
  secret: "আইডিয়া সস্তা, কার্যকরণ দুর্লভ — আর বাজার কিনে আইডিয়া নয়, কষ্টের সমাধান।",
  recall: {
    q: "MVP (Minimum Viable Product)-র মূল উদ্দেশ্য কী?",
    qen: "What is the core purpose of an MVP?",
    a: "সবচেয়ে ছোট সংস্করণ দিয়ে সবচেয়ে দ্রুত শেখা — বিক্রি নয়, প্রকৃত চাহিদার প্রমাণ সংগ্রহ করা।",
    aen: "To learn fastest with the smallest version — gathering proof of real demand, not making sales."
  },
  story: `<p class="scene-setting">বাগদাদের প্রাচীন আবিষ্কার-বাজার। সারি সারি দোকান: একজন স্বর্ণ-পাত্রে জ্যোতির্বিদ্যার যন্ত্র বানাচ্ছে, একজন সস্তার কাগজে জল-ঘড়ি বানাচ্ছে। প্রথমজনের দোকানে ভিড়, দ্বিতীয়জনের ফাঁকা। তুমি জিজ্ঞেস করলে, "আসল পার্থক্য কোথায়?" পাশের বণিক হাসলেন: "প্রথমজন যন্ত্র বানায় <strong>মানুষের কষ্ট</strong> দেখে — কাজি সাহেব রাতে নামাজের সময় জানেন না, তাই জ্যোতির্বিদ্যার যন্ত্র। দ্বিতীয়জন বানায় <strong>নিজের আনন্দে</strong> — সুন্দর, কিন্তু কারুর কষ্ট সারে না।" বাজার কাউকে দয়া করে না; বাজার কষ্ট কেনে। এই বাজারের নাম DIT 6033 — Innovation & Entrepreneurship।</p>
<p class="scene-setting en">Baghdad's ancient bazaar of invention. Rows of shops: one builds astronomical instruments in gold vessels; another makes water-clocks from cheap paper. The first shop is crowded; the second is empty. You ask, "Where is the real difference?" A neighboring merchant smiles: "The first builds from <strong>people's pain</strong> — the qadi can't tell prayer time at night, hence the astrolabe. The second builds for <strong>his own joy</strong> — beautiful, but heals no one's pain." The bazaar pities no one; it buys pain relief. This bazaar is DIT 6033 — Innovation & Entrepreneurship.</p>
<div class="dialogue"><strong>তুমি:</strong> মাস্টার, আমার তো LedgerPilot আছে — এটাই তো উদ্যোগ?<br><strong>বণিক:</strong> শুরু তো হয়েছে! কিন্তু প্রশ্ন তিনটা: (১) কার কষ্ট? (২) তারা আগে কী ব্যবহার করতো (তোমার প্রতিযোগী শুধু প্রোডাক্ট নয় <em>অভ্যাস</em>)? (৩) তারা কি টাকা দিতে রাজি? — এই তিনের উত্তর না জেনে বানানো প্রোডাক্ট = দ্বিতীয় দোকান। আর S-curve শেখো: প্রতিটি প্রযুক্তি ধীরে শুরু হয়, তারপর বিস্ফোরণ, তারপর ঢালু — তোমার AI-যুগের প্রতিটি টুল এই বক্ররেখায় বসে। বিপদ সেখানেই যেখানে ঢালুতে বসে থাকা কোম্পানি নতুন S ধরতে দেরি করে — মনে আছে Kodak?</div>
<div class="dialogue en"><strong>You:</strong> Master, I have LedgerPilot — isn't that entrepreneurship?<br><strong>Merchant:</strong> A start! But three questions: (1) Whose pain? (2) What did they use before (your rival isn't a product, it's a <em>habit</em>)? (3) Will they pay? — Build without these answers and you're the second shop. And learn the S-curve: every technology starts slow, explodes, then slopes down — every tool of your AI era rides this curve. The danger sits where a company resting on the slope delays grabbing the next S — remember Kodak?</div>
<table class="kv-table">
<tr><th>ধারণা</th><th>বাজারের ভাষায়</th><th>তোমার কাজে</th></tr>
<tr><td class="hl">MVP</td><td>ছোট দোকান-কাঠামো, এক পণ্য — চাহিদার পরীক্ষা</td><td>ফিচার-তালিকা নয়, এক কোর-মান — ২ সপ্তাহে বের করো</td></tr>
<tr><td class="hl">Pivot</td><td>দোকান না বদলে পণ্য বদল</td><td>ব্যবহারকারীর আচরণ পড়ে দিক-সংশোধন</td></tr>
<tr><td class="hl">S-curve</td><td>নতুন পণ্যের উত্থান-বিস্ফোরণ-পতন</td><td>কোন প্রযুক্তি কোন বিন্দুতে — বিনিয়োগ-চোখ</td></tr>
<tr><td class="hl">Diffusion</td><td>প্রথম ক্রেতারা → প্রধান ধারা</td><td>প্রথম ১০ ব্যবহারকারীর গভীর খোঁজ</td></tr>
</table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফাঁদ-চেতনা:</strong> "বিল্ড করো, ওরা আসবে" (build it and they will come) — ইতিহাসের সবচেয়ে ব্যয়বহুল প্রযুক্তি-মিথ। আগে কষ্ট-সাক্ষাৎকার, পরে কোড। দ্বিতীয় দোকানও সুন্দর ছিল।</div></div>
<div class="verse">إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ — "মানুষ নিজে না বদলালে..." (কুরআন ১৩:১১) — উদ্যোক্তাও নিজের অনুমান বদলাতে না পারলে বাজার তাকে বদলে দেয়।</div>
<div class="secret-box">💡 আইডিয়া মরুতে বাতাস — সবার মুখে আসে চলে যায়; কার্যকরণই কুয়ো খোঁড়া। MVP দিয়ে ছোট করে খোঁড়ো, পানির (চাহিদার) গভীরতা মাপো, তারপর বড় খনন।</div>`,
  senior: {
    title: "DIT 6033 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> LedgerPilot-এর প্রথম ৩টি বাস্তব ব্যবহারকারীর কষ্ট-বিবরণ এক পাতায় লিখো; Christensen-এর disruptive innovation-নিবন্ধটা একবার পড়ো। <strong>কোর্সে:</strong> innovation types, S-curve, MVP/pivot, diffusion (Rogers), business model canvas, funding-স্টেজ। <strong>Artifact:</strong> একটা ইনোভেশন-কেস বিশ্লেষণ বা নিজের venture-এর business model canvas। <strong>ডিজার্টেশন-সেতু:</strong> AI-ভিত্তিক পণ্যের adoption-barrier গবেষণা, বা SME-এ ডিজিটাল ইনোভেশন-প্রক্রিয়া — DIT-র সিগনেচার টপিক। <strong>ফাঁদ:</strong> নিজের আবিষ্কারে প্রেমে পড়া — প্রতিটি অনুমানকে প্রশ্ন করো; বাজার প্রেমের সাক্ষী দেয় না, আচরণের দেয়।</p>`
  }
});
// ── দরজা ১০ · তরুণ কারিগরের কর্মশালা ──────────────────
doors.push({
  num: 10,
  icon: "🐍",
  color: "#7dd3fc",
  name: "তরুণ কারিগরের কর্মশালা",
  subtitle: "The Young Craftsman's Workshop — Programming (DIT 6043)",
  tech: "Python · Data Structures · Algorithms · Clean Code · Testing Mindset",
  spirit: "أُوتِيَ زُبَيْرٌ فَصَاحَةَ القَوْل — স্পষ্ট-নিখুঁত বলের গুণ (হাদিস-ভিত্তিক আদর্শ: সংক্ষিপ্ততা + শুদ্ধতা)",
  secret: "কোড মানে কম্পিউটারকে দেওয়া নির্দেশ নয় — পরের পাঠকের জন্য লেখা চিঠি; কম্পিউটার শুধু মাঝপথের ডাকিয়া।",
  recall: {
    q: "List, Tuple, Dictionary-র মূল পার্থক্য এক লাইনে?",
    qen: "One-line difference between list, tuple, and dictionary?",
    a: "List = বদলানো যায় (mutable), ক্রম-আলো; Tuple = বদলানো যায় না (immutable), দ্রুত; Dict = চাবি→মান মানচিত্র, O(1) খোঁজ।",
    aen: "List = mutable, ordered; Tuple = immutable, faster; Dict = key→value map, O(1) lookup."
  },
  story: `<p class="scene-setting">সম্রাট আকবরের কারিগরখানার পেছনে তরুণদের আলাদা কর্মশালা — যেখানে শিক্ষানবিশরা প্রথম ছেনি ধরে। বয়স্ক উস্তাদ বলেন, "এখানে নিয়ম তিনটা। <strong>এক:</strong> আগে কাঠ বোঝো, পরে ছেনি — যে ডেটা-স্ট্রাকচার কোন কাজে, না জেনে কোড লিখো না। <strong>দুই:</strong> তোমার কাটা আয়নায় দেখো — নিজের কোড তিন মাস পরে নিজেই পড়তে এসো, বুঝবে না তো ফের লেখো। <strong>তিন:</strong> ভাঙা টুকরো যেন দুর্গের দেয়ালে না যায় — প্রতিটি টুকরোর পরীক্ষা (test) আগেই লেখো।" তুমি হাসলে — এই তিন নিয়মই তো তোমার দশ বছরের নিয়ম! হ্যাঁ, কিন্তু এখান থেকে তুমি সেগুলোর <strong>নাম</strong> শিখবে: data structure, readability, TDD। এই কর্মশালার নাম DIT 6043 — Programming।</p>
<p class="scene-setting en">Behind Akbar's atelier, a workshop for the young — where apprentices first hold a chisel. The elder master says, "Three rules here. <strong>One:</strong> know the wood before the chisel — never code without knowing which data structure fits which job. <strong>Two:</strong> look at your cut in a mirror — return to your own code after three months; rewrite what you can't read. <strong>Three:</strong> no broken piece enters the fortress wall — write each piece's test first." You smile — these are your ten-year rules! Yes, but here you learn their <strong>names</strong>: data structures, readability, TDD. This workshop is DIT 6043 — Programming.</p>
<div class="dialogue"><strong>তুমি:</strong> উস্তাদ, আমি তো Python-এ Django পুরো প্রোডাক্ট বানিয়েছি — এই কোর্সে কী শিখব?<br><strong>উস্তাদ:</strong> অহংকারটা রাখো পকেটে, কৌতূহলটা টেবিলে। তুমি framework-এ শিখেছ, এখন ভিত্তিতে শিখবে: কেন dict O(1)? (হ্যাশ-টেবিলের আয়না!) recursion কখন বিষ? (স্ট্যাক-ওভারফ্লো = দুর্গের সিঁড়ি ফুরোনো) O(n²) কোথায় ও(n log n)-এ বদলাবে? আর সবচেয়ে জরুরি — <strong>অ্যালগরিদমের যুক্তি গবেষণার ভাষায় বলতে শেখা।</strong> ডিজার্টেশনে তোমার পদ্ধতির pseudo-code লাগবে, complexity-বিশ্লেষণ লাগবে — কারিগরের হাত থেকে গবেষকের কলমে যাত্রা এই দরজা দিয়েই।<br><strong>তুমি:</strong> তাহলে এই দরজা সহজ?<br><strong>উস্তাদ:</strong> সহজ নয় — <em>পরিচিত</em>। বিপদ পরিচিত দরজাতেই: তাড়াতাড়ি ভেবে ফাঁকি দিলে গ্রেড যাবে, আর ডিজার্টেশনে pseudo-code-এ লজ্জা পাবে। ধীরে, নিখুঁতভাবে।</div>
<div class="dialogue en"><strong>You:</strong> Master, I've built whole products in Django — what's left to learn?<br><strong>Master:</strong> Keep the pride pocketed, curiosity on the table. You learned in frameworks; now learn in foundations: why is a dict O(1)? (a hash-table's mirror!) when is recursion poison? (stack overflow = the fortress stairs running out) where does O(n²) become O(n log n)? And most vital — <strong>learning to speak your algorithm's logic in research language.</strong> Your dissertation needs pseudo-code and complexity analysis — the craftsman's hand becomes the researcher's pen at this door.<br><strong>You:</strong> So this door is easy?<br><strong>Master:</strong> Not easy — <em>familiar</em>. Danger hides in familiar doors: rush and the grade drops; skip and your dissertation's pseudo-code shames you. Slowly, flawlessly.</div>
<table class="kv-table">
<tr><th>তোমার জানা (কারিগরের ভাষায়)</th><th>কোর্সের নাম (গবেষকের ভাষায়)</th></tr>
<tr><td class="hl">"dict দিয়ে দ্রুত খুঁজি"</td><td>Hash table, O(1) average lookup</td></tr>
<tr><td class="hl">"লুপ কমাই, কাজ ভাগ করি"</td><td>Divide & conquer, recursion, master theorem</td></tr>
<tr><td class="hl">"ফাংশন ছোট রাখি"</td><td>Single responsibility, clean code</td></tr>
<tr><td class="hl">"আগে পরীক্ষা, পরে রিলিজ"</td><td>TDD, unit testing, coverage</td></tr>
</table>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>রিহলা-সেতু:</strong> এই দরজা তোমার লাইব্রেরির Book 2 (Bazaar of Algorithms) আর Book 51 (Algorithm Craftsman) দিয়ে জুড়বে — সেখানে অ্যালগরিদমের গভীর ১৮+২১টি দরজা তৈরি করা আছে। DIT 6043 চলাকালে সপ্তাহে এক দরজা খুললে কোর্স দ্বিগুণ সহজ।</div></div>
<div class="verse">الَّذِي عَلَّمَ بِالْقَلَمِ — "যিনি শিখিয়েছেন কলমের মাধ্যমে।" (কুরআন ৯৬:৪) — কোডও কলম; নিখুঁত লেখার নৈতিকতা উভয়ের এক।</div>
<div class="secret-box">🐍 কারিগর বলে "চলে", গবেষক বলে "কেন চলে ও কত দ্রুত" — DIT 6043 তোমার হাতের দক্ষতাকে কলমের ভাষায় অনুবাদ করার দরজা। Pseudo-code + complexity = ডিজার্টেশনের প্রথম মূলধন।</div>`,
  senior: {
    title: "DIT 6043 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> নিজের পুরনো একটা Django-app দেখে বলো — কোন ফাংশন O(n²)? কোনটা refactor চায়? এই চোখই কোর্সের চোখ। <strong>কোর্সে:</strong> Python গভীরভাবে, ডেটা-স্ট্রাকচার (list/tuple/dict/set/heap), অ্যালগরিদম-বিশ্লেষণ (Big-O), recursion, sorting/searching, clean code, testing। <strong>Artifact:</strong> প্রোগ্রামিং-অ্যাসাইনমেন্ট/মিনি-প্রজেক্ট — সম্ভবত complexity-বিশ্লেষণসহ। <strong>ডিজার্টেশন-সেতু:</strong> প্রতিটি ডিজার্টেশন-মেথড সেকশনের কোড-বর্ণনা এই দরজার ভাষায় লেখা হবে। <strong>ফাঁদ:</strong> "জানি তো!" ভেবে অ্যাসাইনমেন্ট শেষ মুহূর্তে জমা — পরিচিতির অহংকার সবচেয়ে পুরনো ফাঁদ; প্রতিটি টপিককে নতুন চোখে পড়ো।</p>`
  }
});

// ── দরজা ১১ · যুক্তির জাদুঘর ──────────────────
doors.push({
  num: 11,
  icon: "🔢",
  color: "#7dd3fc",
  name: "যুক্তির জাদুঘর",
  subtitle: "The Museum of Logic — Discrete Mathematics (DIT 6053)",
  tech: "Discrete Math · Logic & Proofs · Sets · Combinatorics · Graph Theory · Relations",
  spirit: "عَقْل — আকল: বিবেক-যুক্তি; 'প্রথম আয়াত ইকরা, দ্বিতীয় আয়াত আল-কলম — পড়া ও যুক্তি এক সূত্রে'",
  secret: "সব কোডের নিচে একটাই শহর: যুক্তির শহর — সেট, সম্পর্ক, গণনা, গ্রাফ। শহরটা চেনা মানে সব ভাষা চেনা।",
  recall: {
    q: "Graph-তে Euler-path আর Hamiltonian-path-এর পার্থক্য এক লাইনে?",
    qen: "One-line difference between Euler and Hamiltonian paths?",
    a: "Euler = প্রতিটি <strong>প্রান্ত</strong> (edge) একবার; Hamiltonian = প্রতিটি <strong>শহর</strong> (vertex) একবার।",
    aen: "Euler = every EDGE once; Hamiltonian = every VERTEX once."
  },
  story: `<p class="scene-setting">সম্রাটের রাজধানীতে এক অদ্ভুত জাদুঘর — দেয়ালে নকশা নয়, <strong>সম্পর্কের মানচিত্র</strong>। কোন দালান কোন দালানের সাথে সেতু-যুক্ত, কোন পরিবার কার আত্মীয়, কোন বণিক কার ঋণী — সব বিন্দু আর রেখায়। জাদুঘরের কিউরেটর বলেন, "লোকে ভাবে এ খেলার ছবি; আসলে এ <strong>শহরের খাতা</strong>। কোনিগসবার্গের সাত সেতুর ধাঁধা থেকে যখন অয়লার প্রান্ত-গণনা করলেন, তখন গণিত সংখ্যা ছেড়ে <strong>সম্পর্কে</strong> চলে গেলো — আর তোমার প্রতিটি ডেটাবেস-স্কিমা, প্রতিটি নেটওয়ার্ক-টপোলজি তারই নাতি-নাতনি।" এই জাদুঘরের নাম DIT 6053 — Discrete Mathematics।</p>
<p class="scene-setting en">In the imperial capital, a strange museum — on its walls, not paintings but <strong>maps of relationships</strong>. Which building bridges to which, which family is kin to which, which merchant owes which — all dots and lines. The curator says, "People think these are game-diagrams; they are the <strong>city's ledger</strong>. When Euler counted edges in the Seven Bridges of Königsberg, mathematics left numbers for <strong>relations</strong> — and every database schema, every network topology you'll ever draw is its grandchild." This museum is DIT 6053 — Discrete Mathematics.</p>
<div class="dialogue"><strong>তুমি:</strong> কিউরেটর-সাহেব, আমি তো প্র্যাকটিক্যাল ইঞ্জিনিয়ার — সেট-থিওরি দিয়ে কী চালাবো?<br><strong>কিউরেটর:</strong> এই মুহূর্তেও চালাচ্ছ! SQL-এর <code>JOIN</code> = সেটের ছেদ (intersection); <code>WHERE id IN (...)</code> = সাবসেট; রিলেশনাল ডেটাবেসের আসল নামই <strong>relational</strong> — Codd সেট-থিওরি দিয়ে গোটা খাতাবহি উদ্ভাবন করেছিলেন। আর গ্রাফ? তোমার Ipractus-এর কল-রুটিং গ্রাফ, LedgerPilot-এর অ্যাকাউন্ট-চার্ট ট্রি, গোটা ইন্টারনেট — সব গ্রাফ। কম্বিনেটরিক্স? কোন কনফিগারেশন কতবার পরীক্ষা করতে হবে — টেস্টিং-এর বাজেটই কম্বিনেটরিক্স।<br><strong>তুমি:</strong> আর প্রুফ? ইঞ্জিনিয়ার তো প্রুফ পড়ে না...<br><strong>কিউরেটর:</strong> ইঞ্জিনিয়ার না পড়ে, গবেষক পড়ে — আর তুমি এখন গবেষক-পথে। ডিজার্টেশনে তুমি বলবে "আমার পদ্ধতি কাজ করে"; পরীক্ষক জিজ্ঞেস করবে "প্রমাণ?" — induction, contradiction, construction: এই তিন প্রুফ-অস্ত্রই তোমার ঢাল।</div>
<div class="dialogue en"><strong>You:</strong> Curator, I'm a practical engineer — what do I run with set theory?<br><strong>Curator:</strong> You're running it this instant! SQL <code>JOIN</code> = set intersection; <code>WHERE id IN (...)</code> = subset; the relational database is literally named <strong>relational</strong> — Codd invented the whole ledger with set theory. And graphs? Your Ipractus call-routing graph, LedgerPilot's chart of accounts tree, the entire internet — all graphs. Combinatorics? How many configurations must be tested — your testing budget IS combinatorics.<br><strong>You:</strong> And proofs? Engineers don't read proofs...<br><strong>Curator:</strong> Engineers don't; researchers do — and you're on the researcher's road now. In your dissertation you'll claim "my method works"; the examiner will ask "proof?" — induction, contradiction, construction: these three proof-weapons are your shield.</div>
<table class="kv-table">
<tr><th>জাদুঘরের কক্ষ</th><th>ভেতরে কী</th><th>তোমার দুনিয়ায় কোথায়</th></tr>
<tr><td class="hl">Logic & Proofs</td><td>সত্য-সারণি, induction, contradiction</td><td>"কেন কাজ করে" প্রমাণ, স্পেসিফিকেশন-যুক্তি</td></tr>
<tr><td class="hl">Sets & Relations</td><td>ইউনিয়ন, ছেদ, ফাংশন, ক্রম</td><td>SQL JOIN, ORM-relation, স্কিমা-ডিজাইন</td></tr>
<tr><td class="hl">Combinatorics</td><td>গণনা-নীতি, পারমুটেশন, pigeonhole</td><td>টেস্ট-কেস সংখ্যা, কনফিগ-স্পেস</td></tr>
<tr><td class="hl">Graph Theory</td><td>পথ, বৃক্ষ, রং, Euler/Hamilton</td><td>নেটওয়ার্ক, ডিপেন্ডেন্সি-গ্রাফ, রাউটিং</td></tr>
</table>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>রিহলা-সেতু:</strong> এই দরজা তোমার লাইব্রেরির Book 48 (Compass of Logic) আর Book 41 (Clockwork of Thought)-এর সহোদর — সেখানে লজিক-প্রুফ-কম্পিউটেবিলিটির গভীর যাত্রা আছে। কোর-দশক শেষে এই দরজায় দাঁড়িয়ে পেছনে তাকাও: নেটওয়ার্ক (D2), সিকিউরিটি (D3), ডেটা (D4), কোড (D10) — সবার নিচে এই শহর।</div></div>
<div class="verse">فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ — "তোমাদের রবের কোন নিয়ামত অস্বীকার করবে তোমরা উভয়ে?" (কুরআন ৫৫:১৩) — নিয়ামতের জবাব অস্বীকার নয়, যাচাই; যুক্তির আসল কাজ সত্যের সন্ধান।</div>
<div class="secret-box">🔢 সব সিস্টেমের নিচে এক শহর — সেট-সম্পর্ক-গণনা-গ্রাফ; SQL তার বাজার, নেটওয়ার্ক তার রাস্তা, প্রুফ তার আদালত। কোর-দশক শেষ — এখন রিসার্চের মিনারে ওঠার পালা।</div>`,
  senior: {
    title: "DIT 6053 — ঢোকার আগে, বেরোনোর পর (কোর-দশকের সমাপ্তি)",
    body: `<p><strong>প্রস্তুতি:</strong> SQL-এর একটা জটিল JOIN সেট-অপারেশন (∩, ∪, −) দিয়ে হাতে লেখো; Venn-চিত্র আঁকো — দৃশ্যমান হয়ে যাবে। <strong>কোর্সে:</strong> propositional/predicate logic, proof techniques, sets/relations/functions, combinatorics, graph theory, trees। <strong>Artifact:</strong> প্রুফ-সেট বা গ্রাফ-মডেলিং অ্যাসাইনমেন্ট। <strong>ডিজার্টেশন-সেতু:</strong> গবেষণা-প্রশ্নের সংজ্ঞা (population, sample, relation) সব এই ভাষায়; গ্রাফ-থিওরেটিক মডেল = শক্তিশালী ডিজার্টেশন-পদ্ধতি। <strong>ফাঁদ:</strong> "গণিত = হিসাব" ভাবা — ডিসক্রিট ম্যাথ হিসাবের নয়, <em>সম্পর্কের</em> গণিত; অঙ্কের ভয় নয়, প্রতীকের ভয়ে পিছিয়ো না। কোর-দশক (৩০ ক্রেডিট) এখানে শেষ — এখন কাফেলা রিসার্চ-মিনারে পৌঁছাবে।</p>`
  }
});

// ── দরজা ১২ · মরুর রাত্রি — হিসাব-নিকাশের স্টেশন ──────────────────
doors.push({
  num: 12,
  icon: "🌙",
  color: "#7dd3fc",
  name: "মরুর রাত্রি",
  subtitle: "The Desert Night — Mid-Journey Accounting (Core → Research Bridge)",
  tech: "Reflective Practice · Gap Analysis · Advising Relationship · Research Interest Mapping",
  spirit: "فَإِذَا فَرَغْتَ فَانصَبْ — 'কাজ শেষ হলে পরের কষ্টে লেগে যাও' (কুরআন ৯৪:৭); আর ইবনে বতুতার রীতি: প্রতি শহর ছাড়ার আগে সফরনামা লেখা",
  secret: "কোর্স-দশক শেখে তোমাকে 'উত্তর-জানা মানুষ' বানায়; রিসার্চ-দশক বানাবে 'প্রশ্ন-জানা মানুষ' — সেতুটা হলো নিজের ভেতরের কৌতূহল-মানচিত্র।",
  recall: {
    q: "কোর্স-পর্ব শেষে ডক্টরাল-ছাত্রের সবচেয়ে জরুরি 'অদৃশ্য' কাজ কী?",
    qen: "What is the most critical 'invisible' task after finishing coursework?",
    a: "গবেষণা-আগ্রহের মানচিত্র আঁকা ও উপদেষ্টা-সম্পর্ক গড়া — ক্লাসে কেউ এর গ্রেড দেয় না, কিন্তু ডিজার্টেশনের ভাগ্য এখানেই লেখা হয়।",
    aen: "Mapping your research interests and building the advisor relationship — nobody grades this, yet the dissertation's fate is written here."
  },
  story: `<p class="scene-setting">কাফেলা মরুর মাঝখানে এক পূর্ণিমা-রাতে থামলো। আগুনের চারপাশে মুসাফিররা বসে। ইবনে বতুতার রীতি বলে — প্রতি শহর ছাড়ার আগে সফরনামা: কী শিখলাম, কার কাছে, কোন পাণ্ডুলিপি কপি করলাম, কোন প্রশ্ন অমীমাংসিত রইল। তুমিও খাতা খুললে। পেছনে দশটি স্টেশন: নেটওয়ার্কের পথরক্ষক, দুর্গের প্রহরী, স্রোত-গণনাকারী... সামনে চারটি মিনার দেখা যাচ্ছে — রিসার্চের মিনার। কাফেলার সরদার বললেন, "যে মরুতে হাঁটে সে পানি বহন করে; যে <strong>গবেষণায়</strong> হাঁটে সে প্রশ্ন বহন করে। বলো তোমার তৃষ্ণা কোথায়?" তুমি ভাবলে — LedgerPilot-এর ছোট ব্যবসারা, Ipractus-এর শিক্ষক-ছাত্রের মিলন, AI-এর সাধারণ মানুষের কাছে পৌঁছানো... এই রাতের নাম দাও: <strong>ট্র্যাকশনের রাত</strong>। কোর-দশকের সব স্মৃতি এখানে থেকে এক দিকে সাজবে — ডিজার্টেশনের দিকে।</p>
<p class="scene-setting en">The caravan halts at full moon in mid-desert. Pilgrims sit around the fire. Ibn Battuta's rule — before leaving each city, write the safarnama: what I learned, from whom, which manuscript I copied, which question stayed unresolved. You open your ledger. Ten stations behind: the road-keeper, the fortress guard, the stream-counter... Four minarets ahead — the research minarets. The caravan elder says, "He who walks the desert carries water; he who walks <strong>research</strong> carries questions. Tell me — where is your thirst?" You think — LedgerPilot's small businesses, Ipractus's teacher-student meetings, AI reaching ordinary people... Name this night: <strong>the night of traction</strong>. Every memory of the core decade now reorganizes toward one direction — the dissertation.</p>
<div class="dialogue"><strong>তুমি:</strong> সরদার, আমার তো এখনো প্রশ্ন পাকা হয়নি — স্বাভাবিক তো?<br><strong>সরদার:</strong> শুধু স্বাভাবিক নয়, <strong>লক্ষণ-সম্মত</strong>। প্রশ্ন কখনো শুরুতে পাকা থাকে না — থাকে একগুচ্ছ কৌতূহল-বীজ। তিনটা অভ্যাস এখন থেকে: (১) <strong>প্রশ্ন-খাতা</strong> — প্রতিটি কোর্সে যখন 'এটা আরও ভালোভাবে করা যেত' মনে হয়, লিখে রাখো; (২) <strong>উপদেষ্টা-খোঁজ</strong> — কোন অধ্যাপক কোন প্রশ্নে কাজ করেন, তাঁদের পেপার পড়ো, রেসিডেন্সিতে কথা বলো; (৩) <strong>অনুপাত-পরীক্ষা</strong> — কৌতূহল × তোমার প্রস্তুতি × দুনিয়ার প্রয়োজন: তিন বৃত্তের ছেদ খোঁড়ো। এবং মনে রেখো — এই রাত থেকে গ্রেড নয়, <strong>প্রশ্নের গুণে</strong> তোমাকে মাপা হবে।</div>
<div class="dialogue en"><strong>You:</strong> Elder, my question isn't ripe yet — is that normal?<br><strong>Elder:</strong> Not just normal — <strong>symptomatic of health</strong>. Questions never start ripe; they start as a fistful of curiosity-seeds. Three habits from tonight: (1) a <strong>question ledger</strong> — every time a course makes you think 'this could be done better,' write it; (2) <strong>advisor-scouting</strong> — which professor works on which question; read their papers, talk at residencies; (3) the <strong>proportion test</strong> — curiosity × your preparation × the world's need: dig at the intersection of three circles. And remember — from this night, you're measured not by grades but by the quality of your questions.</div>
<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ কোর্স-মানসিকতায় আটকে থাকা</div>উত্তর খোঁজো → জমা দাও → গ্রেড নাও → ভুলে যাও। রিসার্চ-মিনারে এই মানসিকতা = ডিজার্টেশন-মরুতে পানিশূন্য পথিক।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ গবেষক-মানসিকতায় উত্তরণ</div>প্রশ্ন জমা রাখো → উত্তর পরীক্ষা করো → নতুন প্রশ্ন বানাও → শেয়ার করো। প্রতিটি কোর্স-নোট এখন সম্ভাব্য ডিজার্টেশনের উপাদান।</div>
</div>
<ul class="checklist">
<li>প্রশ্ন-খাতা শুরু করো — আজই, খালি তিনটা প্রশ্ন দিয়ে</li>
<li>প্রোগ্রামের অধ্যাপকদের গবেষণা-ক্ষেত্রের তালিকা বানাও</li>
<li>রেসিডেন্সি-সাক্ষাতের আগে ৩ পেপার পড়ে যাও</li>
<li>কোর-দশকের ১০টি স্টেশন থেকে ৩টি 'অমীমাংসিত প্রশ্ন' বের করো</li>
</ul>
<div class="verse">فَإِذَا فَرَغْتَ فَانصَبْ — "কাজ শেষ হলে পরের কষ্টে লেগে যাও।" (কুরআন ৯৪:৭) — কোর্স শেষ মানে বিশ্রাম নয়, দিক-বদল।</div>
<div class="secret-box">🌙 মরু-রাতের সমীকরণ: কৌতূহল × প্রস্তুতি × প্রয়োজন — তিন বৃত্তের ছেদেই ডিজার্টেশনের কুয়ো। প্রশ্ন-খাতা খুলে ফেলো; সামনে চার মিনার — পরের দরজায় প্রথমটি দেখবে।</div>`,
  senior: {
    title: "সেতু-স্টেশন — কোর্স-দশক থেকে রিসার্চ-দশকে",
    body: `<p><strong>এই দরজায় কোর্স নেই — এটা তোমার নিজের স্টেশন।</strong> Trine-এর hybrid-মডেলে কোর্স-পর্ব শেষে সাধারণত: comprehensive exam / portfolio + উপদেষ্টা-নিয়োগ + প্রস্তাবনার দিকে অগ্রসর হওয়া। <strong>এখনই করো:</strong> প্রশ্ন-খাতা, অধ্যাপক-মানচিত্র, তিন-বৃত্ত বিশ্লেষণ। <strong>সতর্কতা:</strong> এই পর্যায়ে সবচেয়ে বড় ঝুঁকি 'কোর্সের স্বাচ্ছন্দ্যে' থেকে যাওয়া — গ্রেড-নির্ভরতা ক্রমে প্রশ্ন-নির্ভরতায় বদলাতে হয়, কেউ ঘোষণা দিয়ে দেবে না। হাইব্রিড-ছাত্র হিসেবে দূরত্ব তোমার শত্রু — রেসিডেন্সি-সময় সদ্ব্যবহার করো, সেমিস্টার-মাঝে ইমেইল-সম্পর্ক বাঁচিয়ে রাখো।</p>`
  }
});
// END-DOORS-9-12
