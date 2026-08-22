// ════════════════════════════════════════
// Book 57 · ষাট ক্রেডিটের রিহলা — Doors 9–12
// ════════════════════════════════════════

// ── দরজা ৯ · আবিষ্কারের বাজার ──────────────────
doors.push({
  num: 9,
  icon: "💡",
  color: "#7dd3fc",
  name: "আবিষ্কারের বাজার",
  subtitle: "The Bazaar of Invention — Innovation & Entrepreneurship (DIT 7073)",
  tech: "Innovation · Disruption (S-curve) · MVP · Pivot · Diffusion of Innovation",
  spirit: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ — 'মানুষ নিজেদের না বদলালে আল্লাহ অবস্থা বদলান না' (কুরআন ১৩:১১)",
  secret: "আইডিয়া সস্তা, কার্যকরণ দুর্লভ — আর বাজার কিনে আইডিয়া নয়, কষ্টের সমাধান।",
  recall: {
    q: "MVP (Minimum Viable Product)-র মূল উদ্দেশ্য কী?",
    qen: "What is the core purpose of an MVP?",
    a: "সবচেয়ে ছোট সংস্করণ দিয়ে সবচেয়ে দ্রুত শেখা — বিক্রি নয়, প্রকৃত চাহিদার প্রমাণ সংগ্রহ করা।",
    aen: "To learn fastest with the smallest version — gathering proof of real demand, not making sales."
  },
  story: `<p class="scene-setting">বাগদাদের প্রাচীন আবিষ্কার-বাজার। সারি সারি দোকান: একজন স্বর্ণ-পাত্রে জ্যোতির্বিদ্যার যন্ত্র বানাচ্ছে, একজন সস্তার কাগজে জল-ঘড়ি বানাচ্ছে। প্রথমজনের দোকানে ভিড়, দ্বিতীয়জনের ফাঁকা। তুমি জিজ্ঞেস করলে, "আসল পার্থক্য কোথায়?" পাশের বণিক হাসলেন: "প্রথমজন যন্ত্র বানায় <strong>মানুষের কষ্ট</strong> দেখে — কাজি সাহেব রাতে নামাজের সময় জানেন না, তাই জ্যোতির্বিদ্যার যন্ত্র। দ্বিতীয়জন বানায় <strong>নিজের আনন্দে</strong> — সুন্দর, কিন্তু কারুর কষ্ট সারে না।" বাজার কাউকে দয়া করে না; বাজার কষ্ট কেনে। এই বাজারের নাম DIT 7073 — Innovation & Entrepreneurship।</p>
<p class="scene-setting en">Baghdad's ancient bazaar of invention. Rows of shops: one builds astronomical instruments in gold vessels; another makes water-clocks from cheap paper. The first shop is crowded; the second is empty. You ask, "Where is the real difference?" A neighboring merchant smiles: "The first builds from <strong>people's pain</strong> — the qadi can't tell prayer time at night, hence the astrolabe. The second builds for <strong>his own joy</strong> — beautiful, but heals no one's pain." The bazaar pities no one; it buys pain relief. This bazaar is DIT 7073 — Innovation & Entrepreneurship.</p>
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
<ul class="checklist"><li>নিজের "কষ্ট-তালিকা" বানাও — দৈনন্দিন ৫টা বিরক্তি, যেগুলো সফটওয়্যার দিয়ে সারা যায়</li><li>একটা কষ্ট বেছে ৩ প্রশ্নের MVP-স্কেচ আঁকো: কার কষ্ট, ক্ষুদ্রতম সমাধান, সফলতার মাপ</li><li>S-curve এঁকে বলো — Ipractus কোথায় দাঁড়িয়ে, পরের বাঁক কোনটা?</li></ul><div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 28 (Knowledge Web — ১০ দরজা) আলাদা-আলাদা জ্ঞানের মিলনে নতুন উদ্ভাবন (Medici Effect) শেখায় — উদ্ভাবন-দরজার আসল ভিত্তি; সাথে Book 23 (Irreplaceable Craftsman)। DIT 7073-এর সঙ্গী।</div></div>
<div class="verse">إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ — "মানুষ নিজে না বদলালে..." (কুরআন ১৩:১১) — উদ্যোক্তাও নিজের অনুমান বদলাতে না পারলে বাজার তাকে বদলে দেয়।</div>
<div class="secret-box">💡 আইডিয়া মরুতে বাতাস — সবার মুখে আসে চলে যায়; কার্যকরণই কুয়ো খোঁড়া। MVP দিয়ে ছোট করে খোঁড়ো, পানির (চাহিদার) গভীরতা মাপো, তারপর বড় খনন।</div>`,
  senior: {
    title: "DIT 7073 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> LedgerPilot-এর প্রথম ৩টি বাস্তব ব্যবহারকারীর কষ্ট-বিবরণ এক পাতায় লিখো; Christensen-এর disruptive innovation-নিবন্ধটা একবার পড়ো। <strong>কোর্সে:</strong> innovation types, S-curve, MVP/pivot, diffusion (Rogers), business model canvas, funding-স্টেজ। <strong>Artifact:</strong> একটা ইনোভেশন-কেস বিশ্লেষণ বা নিজের venture-এর business model canvas। <strong>ডিজার্টেশন-সেতু:</strong> AI-ভিত্তিক পণ্যের adoption-barrier গবেষণা, বা SME-এ ডিজিটাল ইনোভেশন-প্রক্রিয়া — DIT-র সিগনেচার টপিক। <strong>ফাঁদ:</strong> নিজের আবিষ্কারে প্রেমে পড়া — প্রতিটি অনুমানকে প্রশ্ন করো; বাজার প্রেমের সাক্ষী দেয় না, আচরণের দেয়।</p>`
  }
});
// ── দরজা ১০ · তরুণ কারিগরের কর্মশালা ──────────────────
doors.push({
  num: 10,
  icon: "🐍",
  color: "#7dd3fc",
  name: "তরুণ কারিগরের কর্মশালা",
  subtitle: "The Young Craftsman's Workshop — Programming (DIT 7083)",
  tech: "Python · Data Structures · Algorithms · Clean Code · Testing Mindset",
  spirit: "أُوتِيَ زُبَيْرٌ فَصَاحَةَ القَوْل — স্পষ্ট-নিখুঁত বলের গুণ (হাদিস-ভিত্তিক আদর্শ: সংক্ষিপ্ততা + শুদ্ধতা)",
  secret: "কোড মানে কম্পিউটারকে দেওয়া নির্দেশ নয় — পরের পাঠকের জন্য লেখা চিঠি; কম্পিউটার শুধু মাঝপথের ডাকিয়া।",
  recall: {
    q: "List, Tuple, Dictionary-র মূল পার্থক্য এক লাইনে?",
    qen: "One-line difference between list, tuple, and dictionary?",
    a: "List = বদলানো যায় (mutable), ক্রম-আলো; Tuple = বদলানো যায় না (immutable), দ্রুত; Dict = চাবি→মান মানচিত্র, O(1) খোঁজ।",
    aen: "List = mutable, ordered; Tuple = immutable, faster; Dict = key→value map, O(1) lookup."
  },
  story: `<p class="scene-setting">সম্রাট আকবরের কারিগরখানার পেছনে তরুণদের আলাদা কর্মশালা — যেখানে শিক্ষানবিশরা প্রথম ছেনি ধরে। বয়স্ক উস্তাদ বলেন, "এখানে নিয়ম তিনটা। <strong>এক:</strong> আগে কাঠ বোঝো, পরে ছেনি — যে ডেটা-স্ট্রাকচার কোন কাজে, না জেনে কোড লিখো না। <strong>দুই:</strong> তোমার কাটা আয়নায় দেখো — নিজের কোড তিন মাস পরে নিজেই পড়তে এসো, বুঝবে না তো ফের লেখো। <strong>তিন:</strong> ভাঙা টুকরো যেন দুর্গের দেয়ালে না যায় — প্রতিটি টুকরোর পরীক্ষা (test) আগেই লেখো।" তুমি হাসলে — এই তিন নিয়মই তো তোমার দশ বছরের নিয়ম! হ্যাঁ, কিন্তু এখান থেকে তুমি সেগুলোর <strong>নাম</strong> শিখবে: data structure, readability, TDD। এই কর্মশালার নাম DIT 7083 — Programming।</p>
<p class="scene-setting en">Behind Akbar's atelier, a workshop for the young — where apprentices first hold a chisel. The elder master says, "Three rules here. <strong>One:</strong> know the wood before the chisel — never code without knowing which data structure fits which job. <strong>Two:</strong> look at your cut in a mirror — return to your own code after three months; rewrite what you can't read. <strong>Three:</strong> no broken piece enters the fortress wall — write each piece's test first." You smile — these are your ten-year rules! Yes, but here you learn their <strong>names</strong>: data structures, readability, TDD. This workshop is DIT 7083 — Programming.</p>
<div class="dialogue"><strong>তুমি:</strong> উস্তাদ, আমি তো Python-এ Django পুরো প্রোডাক্ট বানিয়েছি — এই কোর্সে কী শিখব?<br><strong>উস্তাদ:</strong> অহংকারটা রাখো পকেটে, কৌতূহলটা টেবিলে। তুমি framework-এ শিখেছ, এখন ভিত্তিতে শিখবে: কেন dict O(1)? (হ্যাশ-টেবিলের আয়না!) recursion কখন বিষ? (স্ট্যাক-ওভারফ্লো = দুর্গের সিঁড়ি ফুরোনো) O(n²) কোথায় ও(n log n)-এ বদলাবে? আর সবচেয়ে জরুরি — <strong>অ্যালগরিদমের যুক্তি গবেষণার ভাষায় বলতে শেখা।</strong> ডিজার্টেশনে তোমার পদ্ধতির pseudo-code লাগবে, complexity-বিশ্লেষণ লাগবে — কারিগরের হাত থেকে গবেষকের কলমে যাত্রা এই দরজা দিয়েই।<br><strong>তুমি:</strong> তাহলে এই দরজা সহজ?<br><strong>উস্তাদ:</strong> সহজ নয় — <em>পরিচিত</em>। বিপদ পরিচিত দরজাতেই: তাড়াতাড়ি ভেবে ফাঁকি দিলে গ্রেড যাবে, আর ডিজার্টেশনে pseudo-code-এ লজ্জা পাবে। ধীরে, নিখুঁতভাবে।</div>
<div class="dialogue en"><strong>You:</strong> Master, I've built whole products in Django — what's left to learn?<br><strong>Master:</strong> Keep the pride pocketed, curiosity on the table. You learned in frameworks; now learn in foundations: why is a dict O(1)? (a hash-table's mirror!) when is recursion poison? (stack overflow = the fortress stairs running out) where does O(n²) become O(n log n)? And most vital — <strong>learning to speak your algorithm's logic in research language.</strong> Your dissertation needs pseudo-code and complexity analysis — the craftsman's hand becomes the researcher's pen at this door.<br><strong>You:</strong> So this door is easy?<br><strong>Master:</strong> Not easy — <em>familiar</em>. Danger hides in familiar doors: rush and the grade drops; skip and your dissertation's pseudo-code shames you. Slowly, flawlessly.</div>
<table class="kv-table">
<tr><th>তোমার জানা (কারিগরের ভাষায়)</th><th>কোর্সের নাম (গবেষকের ভাষায়)</th></tr>
<tr><td class="hl">"dict দিয়ে দ্রুত খুঁজি"</td><td>Hash table, O(1) average lookup</td></tr>
<tr><td class="hl">"লুপ কমাই, কাজ ভাগ করি"</td><td>Divide & conquer, recursion, master theorem</td></tr>
<tr><td class="hl">"ফাংশন ছোট রাখি"</td><td>Single responsibility, clean code</td></tr>
<tr><td class="hl">"আগে পরীক্ষা, পরে রিলিজ"</td><td>TDD, unit testing, coverage</td></tr>
</table>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>রিহলা-সেতু:</strong> এই দরজা তোমার লাইব্রেরির Book 2 (Bazaar of Algorithms) আর Book 51 (Algorithm Craftsman) দিয়ে জুড়বে — সেখানে অ্যালগরিদমের গভীর ১৮+২১টি দরজা তৈরি করা আছে। DIT 7083 চলাকালে সপ্তাহে এক দরজা খুললে কোর্স দ্বিগুণ সহজ।</div></div>
<ul class="checklist"><li>একটা ছোট স্ক্রিপ্ট লেখো: CSV পড়ে ৩টা পরিসংখ্যান (গড়, সর্বোচ্চ, মধ্যমা) বের করে প্রিন্ট করবে</li><li>সেই স্ক্রিপ্টে ২টা টেস্ট লেখো — খালি ফাইল দিলে কী হয়, ভাঙা সারি দিলে কী</li><li>৩ মাস পর নিজেই যেন পড়তে পারো — ভেরিয়েবলের নাম বদলে রিফ্যাক্টর করো</li></ul>
<div class="verse">الَّذِي عَلَّمَ بِالْقَلَمِ — "যিনি শিখিয়েছেন কলমের মাধ্যমে।" (কুরআন ৯৬:৪) — কোডও কলম; নিখুঁত লেখার নৈতিকতা উভয়ের এক।</div>
<div class="secret-box">🐍 কারিগর বলে "চলে", গবেষক বলে "কেন চলে ও কত দ্রুত" — DIT 7083 তোমার হাতের দক্ষতাকে কলমের ভাষায় অনুবাদ করার দরজা। Pseudo-code + complexity = ডিজার্টেশনের প্রথম মূলধন।</div>`,
  senior: {
    title: "DIT 7083 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> নিজের পুরনো একটা Django-app দেখে বলো — কোন ফাংশন O(n²)? কোনটা refactor চায়? এই চোখই কোর্সের চোখ। <strong>কোর্সে:</strong> Python গভীরভাবে, ডেটা-স্ট্রাকচার (list/tuple/dict/set/heap), অ্যালগরিদম-বিশ্লেষণ (Big-O), recursion, sorting/searching, clean code, testing। <strong>Artifact:</strong> প্রোগ্রামিং-অ্যাসাইনমেন্ট/মিনি-প্রজেক্ট — সম্ভবত complexity-বিশ্লেষণসহ। <strong>ডিজার্টেশন-সেতু:</strong> প্রতিটি ডিজার্টেশন-মেথড সেকশনের কোড-বর্ণনা এই দরজার ভাষায় লেখা হবে। <strong>ফাঁদ:</strong> "জানি তো!" ভেবে অ্যাসাইনমেন্ট শেষ মুহূর্তে জমা — পরিচিতির অহংকার সবচেয়ে পুরনো ফাঁদ; প্রতিটি টপিককে নতুন চোখে পড়ো।</p>`
  }
});

// ── দরজা ১১ · পরিসংখ্যানের দুর্গ ──────────────────
doors.push({
  num: 11,
  icon: "📊",
  color: "#7dd3fc",
  name: "পরিসংখ্যানের দুর্গ",
  subtitle: "The Fortress of Statistics — Research Statistics for IT (RSH 7093)",
  tech: "Descriptive Statistics · Distributions · Central Limit Theorem · Correlation vs Causation · Regression · Stats Tooling (Python/R)",
  spirit: "مِيزَان — মিজান: ন্যায়ের পাল্লা; পরিসংখ্যান অনুমানের বিদ্যা নয়, মাপার বিদ্যা",
  secret: "গড় মানে সত্য নয় — মাপা মানে সত্য: প্রথমে বণ্টন দেখো (কেঁদে ওঠা? চ্যাপ্টা? লেজ-ওয়ালা?), তারপর বিশ্বাস করো।",
  recall: {
    q: "গড় (mean) আর মধ্যমা (median) কখন বিচ্ছিন্ন হয়ে যায় — আর সেটা কেন সতর্ক-সংকেত?",
    qen: "When do mean and median split apart — and why is that a warning sign?",
    a: "বণ্টন বিষম (skewed) হলে বা চরম-মান (outlier) থাকলে; বন্যার বছর গড়ের ভেতরে লুকিয়ে যায়, মধ্যমা না — তাই দুজনে আলাদা হলে ডেটা গভীরে দেখো।",
    aen: "When the distribution is skewed or outliers exist; the flood-year hides inside the mean but not the median — when they split, look deeper."
  },
  story: `<p class="scene-setting">কোর-নগরী পেরোতেই রিসার্চ-নগরীর গোড়ায় এক বিশাল দুর্গ — <strong>পরিমাপের দুর্গ</strong>। ভেতরে শস্যাগারে শত থলি, দেয়ালে হিসাবের ফলক, মাঝখানে বসে দুর্গের <strong>কোষাধ্যক্ষ</strong> — চোখে ঝাপসা, হাতে পাল্লা। তুমি প্রবেশ করতেই বললেন, "রিসার্চ-নগরীর মিনারে ওঠার আগে আমার দুর্গ পেরোতে হয়। কারণ যে মাপতে জানে না, তার সিদ্ধান্ত প্রাসাদ বালির ওপর।" এই দুর্গের নাম RSH 7093 — Research Statistics for Information Technology।</p>
<p class="scene-setting en">Leaving the core cities, at the very gate of the research city stands a vast fortress — <strong>the fortress of measurement</strong>. Granaries of a hundred sacks inside, tablets of accounts on the walls, and at the center the <strong>fortress treasurer</strong> — dim-eyed, scale in hand. As you enter he says, "Before the minarets of the research city, you pass my fortress. For whoever cannot measure builds his palace of decisions on sand." This fortress is RSH 7093 — Research Statistics for Information Technology.</p>
<div class="dialogue"><strong>কোষাধ্যক্ষ:</strong> আমার প্রথম বছরের গল্প শোনো। এক বছরের ফসলের <strong>গড়</strong> দেখে রাজকোষ লিখলেন — "মাঠ মোটামুটি ভালো।" কিন্তু গড়টা ছিল অর্ধেক অনাবৃষ্ট গ্রাম আর অর্ধেক বন্যা-গ্রামের মিলন — দুই পাশের কেউই "মোটামুটি" ছিল না। সেই শীতে <strong>দুর্ভিক্ষ</strong> নামলো। গড় সত্য বলেছিল, অথচ মিথ্যাও বলেছিল। তখন থেকে আমার দুর্গের প্রথম নিয়ম: <strong>গড়ের আগে বণ্টন দেখো</strong> — থলিগুলো সমান না অসমান, লেজ কোন দিকে।<br><strong>তুমি:</strong> আর মধ্যমা?<br><strong>কোষাধ্যক্ষ:</strong> মধ্যমা হলো থলির সারির ঠিক মাঝেরটা — বন্যার থলি তাকে টানতে পারে না। গড় আর মধ্যমা যেদিন দূরে সরে যায়, সেদিন ডেটা তোমাকে ডাকছে — "আমার ভেতরে গল্প আছে।"</div>
<div class="dialogue en"><strong>Treasurer:</strong> Hear my first year's story. The treasury read the season's <strong>mean</strong> harvest and wrote — "the fields are roughly fine." But that mean married half drought villages to half flood villages — neither side was "roughly fine." That winter, <strong>famine</strong> came. The mean had told the truth and a lie at once. Since then, my fortress's first rule: <strong>see the distribution before the mean</strong> — are the sacks equal or lopsided, which way does the tail lean?<br><strong>You:</strong> And the median?<br><strong>Treasurer:</strong> The median is the exact middle sack of the row — the flood-sack cannot drag it. The day mean and median drift apart, your data is calling you — "there is a story inside me."</div>
<table class="kv-table">
<tr><th>দুর্গের প্রকোষ্ঠ</th><th>ভেতরে কী</th><th>তোমার দুনিয়ায় কোথায়</th></tr>
<tr><td class="hl">বর্ণনামূলক পরিসংখ্যান</td><td>গড়, মধ্যমা, বিস্তার, পরিমিত ব্যবধান</td><td>LedgerPilot ড্যাশবোর্ডের প্রতিটি সার-সংখ্যা</td></tr>
<tr><td class="hl">বণ্টন</td><td>স্বাভাবিক বেল, বিষমতা, চরম-মান</td><td>লেটেন্সি, বিক্রি, লগ-ইভেন্ট — সবই বণ্টন</td></tr>
<tr><td class="hl">কেন্দ্রীয় সীমা উপপাদ্য</td><td>নমুনা-গড় ক্রমে স্বাভাবিক হয়</td><td>কেন জরিপে অল্প নমুনাতেই আস্থা হয়</td></tr>
<tr><td class="hl">সহসম্বন্ধ ≠ কারণ</td><td>মিথ্যা-সম্পর্ক, লুকানো তৃতীয় চলক</td><td>"ডেপ্লয়ের পর বাগ কম" — কারণ নাকি কাকতাল?</td></tr>
<tr><td class="hl">রিগ্রেশন</td><td>প্রবণতা-রেখা, ভবিষ্যদ্বাণীর ভিত্তি</td><td>ব্যবহার-পূর্বাভাস, বাজেট-মডেল</td></tr>
</table>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>রিহলা-সেতু:</strong> দরজা ১০-এর Python এখনই কাজে লাগবে — <code>df.describe()</code> মানে এই দুর্গের প্রথম প্রকোষ্ঠ। আর গভীরে যেতে চাইলে Book 49 (Dice of Destiny — সম্ভাবনা) ও Book 34 (Scale of Evidence — পরীক্ষামূলক প্রমাণ) এই দুর্গের দুই সিঁড়ি। RSH 7093 চলাকালে সেগুলো পাশে রাখো।</div></div>
<ul class="checklist"><li>নিজের ডেটাসেটে <code>df.describe()</code> চালাও — গড় আর মধ্যমা পাশাপাশি রেখে তুলনা-নোট লেখো</li><li>একটা histogram এঁকে বণ্টনের গল্প বলো — লেজ কোন দিকে, কেন</li><li>একটা মিথ্যা-সহসম্বন্ধ খুঁজে ব্যাখ্যা করো — কেন সম্পর্কটা কারণ নয় (লুকানো তৃতীয় চলক কী?)</li></ul>
<div class="verse">وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ — "তিনি আকাশ সমুচ্চিত করেছেন এবং স্থাপন করেছেন মিজান (পাল্লা)।" (কুরআন ৫৫:৭) — মাপার পাল্লা ছাড়া বাজার চলে না, গবেষণাও না; পরিসংখ্যান সেই মিজানেরই গণিত।</div>
<div class="secret-box">📊 গড় একা প্রাসাদ তোলে না — বণ্টন, মধ্যমা, বিস্তার মিলে তোলে; RSH 7093 পেরোলে তোমার হাতে রিসার্চ-মিনারের চাবি: মাপার ভাষা।</div>`,
  senior: {
    title: "RSH 7093 — ঢোকার আগে, বেরোনোর পর (কোর-পর্বের সমাপ্তি, রিসার্চের প্রথম দুর্গ)",
    body: `<p><strong>প্রস্তুতি:</strong> নিজের ডেটার একটা সেট (LedgerPilot-লেনদেন বা Ipractus-ব্যবহার) নিয়ে <code>df.describe()</code> চালাও; হিস্টোগ্রাম এঁকে বণ্টনের গড়-মধ্যমা মিলিয়ে দেখো। <strong>কোর্সে:</strong> descriptive statistics, probability distributions, central limit theorem, correlation, simple/multiple regression, statistical software (Python/R)। <strong>Artifact:</strong> নিজের ডেটাসেটের বর্ণনামূলক-বিশ্লেষণ রিপোর্ট (টেবিল + চিত্র সহ)। <strong>ডিজার্টেশন-সেতু:</strong> এপ্লাইড-রিসার্চ প্রকল্পের ফল-অধ্যায়ের প্রথম টেবিল এখানকারই বর্ণনামূলক সারণি; RSH 8003-এর অনুমান-পরীক্ষা এই ভিত্তির ওপরে দাঁড়ায়। <strong>ফাঁদ:</strong> (১) গড়-অন্ধতা — বণ্টন না দেখে গড়ে সিদ্ধান্ত; (২) সহসম্বন্ধকে কারণ ভাবা — ডেটা জোড়া দিলেই দায়িত্ব আসে না; (৩) নমুনা-পক্ষপাতকে গণিতের চাদরে ঢাকা — কুঁড়ে-নমুনা (convenience sample) দিয়ে কেন্দ্রীয় সীমা উপপাদ্য বাঁচে না। কোর-পর্ব এখানে শেষ — সামনে রিসার্চ-নগরীর চার মিনার।</p>`
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
  secret: "কোর্স-পর্ব শেখে তোমাকে 'উত্তর-জানা মানুষ' বানায়; রিসার্চ-দশক বানাবে 'প্রশ্ন-জানা মানুষ' — সেতুটা হলো নিজের ভেতরের কৌতূহল-মানচিত্র।",
  recall: {
    q: "কোর্স-পর্ব শেষে ডক্টরাল-ছাত্রের সবচেয়ে জরুরি 'অদৃশ্য' কাজ কী?",
    qen: "What is the most critical 'invisible' task after finishing coursework?",
    a: "গবেষণা-আগ্রহের মানচিত্র আঁকা ও উপদেষ্টা-সম্পর্ক গড়া — ক্লাসে কেউ এর গ্রেড দেয় না, কিন্তু ডিজার্টেশনের ভাগ্য এখানেই লেখা হয়।",
    aen: "Mapping your research interests and building the advisor relationship — nobody grades this, yet the dissertation's fate is written here."
  },
  story: `<p class="scene-setting">কাফেলা মরুর মাঝখানে এক পূর্ণিমা-রাতে থামলো। আগুনের চারপাশে মুসাফিররা বসে। ইবনে বতুতার রীতি বলে — প্রতি শহর ছাড়ার আগে সফরনামা: কী শিখলাম, কার কাছে, কোন পাণ্ডুলিপি কপি করলাম, কোন প্রশ্ন অমীমাংসিত রইল। তুমিও খাতা খুললে। পেছনে দশটি স্টেশন: নেটওয়ার্কের পথরক্ষক, দুর্গের প্রহরী, স্রোত-গণনাকারী... সামনে চারটি মিনার দেখা যাচ্ছে — রিসার্চের মিনার। কাফেলার সরদার বললেন, "যে মরুতে হাঁটে সে পানি বহন করে; যে <strong>গবেষণায়</strong> হাঁটে সে প্রশ্ন বহন করে। বলো তোমার তৃষ্ণা কোথায়?" তুমি ভাবলে — LedgerPilot-এর ছোট ব্যবসারা, Ipractus-এর শিক্ষক-ছাত্রের মিলন, AI-এর সাধারণ মানুষের কাছে পৌঁছানো... এই রাতের নাম দাও: <strong>ট্র্যাকশনের রাত</strong>। কোর-পর্বের সব স্মৃতি এখানে থেকে এক দিকে সাজবে — ডিজার্টেশনের দিকে।</p>
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
<li>কোর-পর্বের ৯টি স্টেশন থেকে ৩টি 'অমীমাংসিত প্রশ্ন' বের করো</li>
</ul>
<div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 21 (Researcher’s Mind — ১০ দরজা) ছাত্র-মন থেকে গবেষক-মনে রূপান্তরের পূর্ণ মানচিত্র; Book 26 (Knowledge Craftsman — ১৩ দরজা) প্রশ্ন-খাতা রাখার জায়গা থেকে নোট-ব্যবস্থা শেখায়। এই রাতের দুই সঙ্গী।</div></div>
<div class="verse">فَإِذَا فَرَغْتَ فَانصَبْ — "কাজ শেষ হলে পরের কষ্টে লেগে যাও।" (কুরআন ৯৪:৭) — কোর্স শেষ মানে বিশ্রাম নয়, দিক-বদল।</div>
<div class="secret-box">🌙 মরু-রাতের সমীকরণ: কৌতূহল × প্রস্তুতি × প্রয়োজন — তিন বৃত্তের ছেদেই ডিজার্টেশনের কুয়ো। প্রশ্ন-খাতা খুলে ফেলো; সামনে চার মিনার — পরের দরজায় প্রথমটি দেখবে।</div>`,
  senior: {
    title: "সেতু-স্টেশন — কোর্স-পর্ব থেকে রিসার্চ-দশকে",
    body: `<p><strong>এই দরজায় কোর্স নেই — এটা তোমার নিজের স্টেশন।</strong> Trine-এর hybrid-মডেলে কোর্স-পর্ব শেষে সাধারণত: comprehensive exam / portfolio + উপদেষ্টা-নিয়োগ + প্রস্তাবনার দিকে অগ্রসর হওয়া। <strong>প্রস্তুতি:</strong> প্রশ্ন-খাতা (প্রতিটি কোর্স থেকে অন্তত একটি "এটা আরও ভালোভাবে করা যেত"), অধ্যাপক-মানচিত্র (কে কী নিয়ে লেখেন), তিন-বৃত্ত বিশ্লেষণ (কৌতূহল × প্রস্তুতি × প্রয়োজন)। <strong>Artifact (এই দরজার):</strong> ৩-৫ পাতার গবেষণা-আগ্রহ-নথি — সম্ভাব্য ৩টি প্রশ্ন-দিক, প্রতিটির পাশে সম্ভাব্য committee-চেয়ারের নাম। <strong>রিহলায় সেতু:</strong> এই নথিটাই দরজা ১৭-এর প্রস্তাবনার কাঁচামাল — DIT 9006-এ ঢোকার আগে হাতে থাকবে। <strong>ফাঁদ:</strong> এই পর্যায়ে সবচেয়ে বড় ঝুঁকি 'কোর্সের স্বাচ্ছন্দ্যে' থেকে যাওয়া — গ্রেড-নির্ভরতা ক্রমে প্রশ্ন-নির্ভরতায় বদলাতে হয়, কেউ ঘোষণা দিয়ে দেবে না। হাইব্রিড-ছাত্র হিসেবে দূরত্ব তোমার শত্রু — রেসিডেন্সি-সময় সদ্ব্যবহার করো, সেমিস্টার-মাঝে ইমেইল-সম্পর্ক বাঁচিয়ে রাখো।</p>`
  }
});
// END-DOORS-9-12
