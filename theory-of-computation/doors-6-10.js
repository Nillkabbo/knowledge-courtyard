doors.push({
  num: 6,
  icon: "🌌",
  color: "#6366f1",
  name: "অসম্পূর্ণতার সত্য",
  subtitle: "Gödel's Incompleteness Theorems",
  tech: "Gödel's Incompleteness, Arithmetization, Self-Reference — Gödel (1931)",
  spirit: "কুরআন ১২:৭৬ — প্রত্যেক জ্ঞানীর উপরে রয়েছেন সর্বজ্ঞ",
  secret: "কোনো পর্যাপ্ত শক্তিশালী যুক্তিব্যবস্থা নিজেই নিজের সঠিকতা প্রমাণ করতে পারে না।",
  recall: {
    q: "Gödel-এর প্রথম অসম্পূর্ণতা উপপাদ্য কী বলে?",
    qen: "What does Gödel's First Incompleteness Theorem state?",
    a: "যেকোনো সামঞ্জস্যপূর্ণ এবং পর্যাপ্ত শক্তিশালী যুক্তিব্যবস্থায় এমন সত্য আছে যা প্রমাণ করা যায় না।",
    aen: "Any consistent, sufficiently powerful formal system contains true statements that cannot be proved within the system."
  },
  story: `<p class="scene-setting">তুমি একটা বিশাল মন্দিরে দাঁড়িয়ে আছ। দেয়ালে লেখা — সব সত্য এখানে লেখা আছে। প্রতিটি শিলালিপি একটি উপপাদ্য। তুমি ভাবো — যদি আমি পড়ি, আমি সব জানব। কিন্তু একটা ছোট্ট পাথরের উপর একটা বাক্য খোদাই করা: "এই কথাটি এই মন্দিরে প্রমাণ করা যায় না।" তুমি থামো। ভাবো। যদি এটা সত্য হয় — তাহলে এটা মন্দিরে লেখা আছে, কিন্তু প্রমাণ করা যায় না। যদি এটা মিথ্যা হয় — তাহলে মন্দিরে মিথ্যা লেখা আছে। যেকোনো উপায়ে — মন্দির অসম্পূর্ণ বা অসামঞ্জস্যপূর্ণ।</p>
<p class="scene-setting en">You stand in a vast temple. On the walls — all truths are written here. Each inscription is a theorem. You think — if I read, I will know all. But on a small stone, a sentence is carved: "This statement cannot be proved in this temple." You stop. You think. If it's true — it's written here, but cannot be proved. If it's false — the temple contains a falsehood. Either way — the temple is incomplete or inconsistent.</p>

<div class="dialogue"><strong>কার্ট গোডেল:</strong> (চশমার পিছনে গভীর চোখ) তুমি ভাবো — গণিত সম্পূর্ণ। Hilbert তো বলেছিলেন — প্রতিটি সত্য গাণিতিক বাক্য প্রমাণ করা যাবে। আমি ১৯৩১ সালে দেখালাম — না। যেকোনো সামঞ্জস্যপূর্ণ যুক্তিব্যবস্থা যা পাটিগণিত বর্ণনা করতে পারে, সেখানে এমন সত্য আছে যা প্রমাণ করা যায় না। সত্য আছে — কিন্তু প্রমাণ নেই।</div>
<div class="dialogue en"><strong>Kurt Gödel:</strong> (deep eyes behind glasses) You think — mathematics is complete. Hilbert said — every true mathematical statement can be proved. I showed in 1931 — no. Any consistent formal system that can describe arithmetic contains true statements that cannot be proved. Truth exists — but proof does not.</div>

<div class="code-block">
<strong>Gödel-এর প্রথম অসম্পূর্ণতা উপপাদ্য (১৯৩১):</strong>

যেকোনো সামঞ্জস্যপূর্ণ (consistent), কার্যকরভাবে উৎপাদনযোগ্য (effectively axiomatizable),
এবং পর্যাপ্ত শক্তিশালী (sufficiently powerful — অর্থাৎ পাটিগণিত এনকোড করতে পারে)
যুক্তিব্যবস্থায় (formal system F):

∃ G ∈ F যাতে:
• G সত্য (F-এর মডেলে সত্য)
• G F-তে প্রমাণযোগ্য নয় (¬G-ও F-তে প্রমাণযোগ্য নয়)

<strong>মূল কৌশল — Gödel Numbering:</strong>
প্রতিটি গাণিতিক বাক্যকে একটি অনন্য সংখ্যা দাও (Gödel number)।
তাহলে বাক্য সংখ্যার মতো আচরণ করতে পারে।
এবং বাক্য নিজের সম্পর্কে কথা বলতে পারে — self-reference।

Gödel একটি বাক্য G বানান যা বলে: "G প্রমাণযোগ্য নয়।"
এটা Epimenides paradox-এর গাণিতিক রূপ — "আমি মিথ্যা বলছি।"
কিন্তু Gödel এটাকে কঠোর গণিতে রূপ দেন।

<strong>দ্বিতীয় অসম্পূর্ণতা উপপাদ্য:</strong>
F-এর সামঞ্জস্য (consistency) নিজেই F-এর ভেতরে প্রমাণ করা যায় না।
অর্থাৎ — একটি সিস্টেম নিজেকে নির্ভরযোগ্য বলতে পারে না।
</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু এটা তো গণনার বাইরে! এটা গণিতের ভিত্তি নাড়িয়ে দিল!</div>
<div class="dialogue en"><strong>You:</strong> But this is beyond computation! It shook the foundations of mathematics!</div>

<div class="dialogue"><strong>গোডেল:</strong> (মাথা নাড়েন) হ্যাঁ। Hilbert-এর স্বপ্ন ভেঙে গেল। তিনি চেয়েছিলেন গণিতকে সম্পূর্ণ এবং সামঞ্জস্যপূর্ণ করতে। আমি দেখালাম — উভয় একসাথে সম্ভব নয়। কিন্তু মনে রাখো — টুরিং এই ফলাফলটিকে যন্ত্রের ভাষায় নিয়ে গেলেন। আমি দেখালাম — গণিতের সীমা। তিনি দেখালেন — গণনার সীমা। একই সত্য, দুই ভাষায়।</div>
<div class="dialogue en"><strong>Gödel:</strong> (nods) Yes. Hilbert's dream shattered. He wanted mathematics complete and consistent. I showed — both together are impossible. But remember — Turing translated this result into the language of machines. I showed the limits of mathematics. He showed the limits of computation. Same truth, two languages.</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Hilbert-এর স্বপ্ন</div><strong>Entscheidungsproblem (১৯২৮):</strong> প্রতিটি গাণিতিক সত্যের একটি আনুষ্ঠানিক প্রমাণ খুঁজে বের করার যন্ত্র তৈরি করা যাবে।<br>→ Gödel (১৯৩১): অসম্পূর্ণতা — কিছু সত্য প্রমাণযোগ্য নয়।<br>→ Turing (১৯৩৬): অসমাধানযোগ্যতা — কিছু সমস্যা গণনাযোগ্য নয়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ বাস্তবতা</div><strong>গণিত সম্পূর্ণ নয়, কিন্তু সামঞ্জস্যপূর্ণ।</strong><br>আমরা যা প্রমাণ করতে পারি, তা সত্য। কিন্তু সব সত্য আমরা প্রমাণ করতে পারি না।<br>এটি গণিতের দুর্বলতা নয় — এটি গণিতের সততা। গণিত নিজের সীমা স্বীকার করে।</div>
</div>

<div class="verse">
<strong>কার্ট ফ্রেডরিখ গোডেল (১৯০৬-১৯৭৮):</strong><br>
ব্রুন (অস্ট্রিয়া-হাঙ্গেরি সাম্রাজ্য, এখন চেকিয়ার ব্রনো) এ জন্ম। ভিয়েনা বিশ্ববিদ্যালয়ে গবেষণা।<br>
"Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme" (১৯৩১, Monatshefte für Mathematik und Physik)।<br><br>
এই paper-কে ২০শ শতকের সবচেয়ে গুরুত্বপূর্ণ গাণিতিক paper বলা হয়।<br>
গোডেল টুরিং-এর সাথে প্রিন্সটনে IAS-এ কাজ করেছেন (১৯৪০-এর দশকে)।<br>
তিনি আইনস্টাইনের ঘনিষ্ঠ বন্ধু ছিলেন — আইনস্টাইন বলতেন, প্রিন্সটনে যাওয়ার একমাত্র কারণ গোডেলের সাথে হাঁটা।<br>
তিনি প্যারানয়ায় ভুগতেন — ১৯৭৮ সালে অনাহারে মৃত্যু, কারণ তিনি বিশ্বাস করতেন কেউ তাকে বিষ দিচ্ছে।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> সত্য > প্রমাণ। কিছু সত্য প্রমাণের নাগালের বাইরে।<br>
<em>Truth > Proof. Some truths are beyond the reach of proof.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
কুরআন ১২:৭৬ — "ইউসুফ, তুমি আমাদের কাছে মহামূল্যবান।" — "নাহি, আমি জানি যা তোমরা জানো না।" — "প্রত্যেক জ্ঞানীর উপরে রয়েছেন সর্বজ্ঞ।" গোডেল গাণিতিকভাবে প্রমাণ করলেন — প্রতিটি জ্ঞানী সসীম। সর্বজ্ঞতা কোনো সসীম সিস্টেমে ধরা যায় না।
</div>
</div>`,
  senior: {
    title: "অসম্পূর্ণতা প্র্যাকটিস গাইড",
    body: `<p><strong>১. Self-reference বুঝো:</strong> "এই বাক্যটি মিথ্যা" — Epimenides/Liar paradox। গোডেল এটিকে গাণিতিক করেছেন।</p>
<p><strong>২. কোথায় ঘটে:</strong> যেকোনো সিস্টেম যা পাটিগণিত (Peano axioms) ধারণ করে। সাধারণ লজিক প্যাঁচ — না। কিন্তু পাটিগণিত+ — হ্যাঁ।</p>
<p><strong>৩. অন্তর্দৃষ্টি:</strong> যদি কোনো সিস্টেম নিজের সামঞ্জস্য প্রমাণ করে — সে অসামঞ্জস্যপূর্ণ (দ্বিতীয় উপপাদ্য)। অর্থাৎ নিজেকে বাঁচানোর দাবি নিজেই সন্দেহজনক।</p>
<p><strong>৪. প্রভাব:</strong> এটি AI-কেও প্রভাবিত করে — কোনো AI সিস্টেম নিজের সঠিকতা সম্পূর্ণভাবে যাচাই করতে পারে না। Lucas-Penrose argument: মানুষের চিন্তা গাণিতিকভাবে অসম্পূর্ণ, কিন্তু সচেতন।</p>`
  }
});

doors.push({
  num: 7,
  icon: "📊",
  color: "#a5b4fc",
  name: "মিলিয়ন ডলারের প্রশ্ন",
  subtitle: "P, NP, and the Million-Dollar Question",
  tech: "Complexity Classes P and NP, Cook-Levin Theorem — Cook (1971)",
  spirit: "সা'য় — সন্ধানের পরিশ্রম; চেনা সহজ, খোঁজা কঠিন",
  secret: "উত্তর যাচাই করা সহজ হতে পারে, কিন্তু উত্তর খুঁজে বের করা অসীম কঠিন — এটাই P vs NP।",
  recall: {
    q: "P এবং NP ক্লাসের পার্থক্য কী?",
    qen: "What is the difference between complexity classes P and NP?",
    a: "P = deterministic Turing Machine-এ polynomial সময়ে সমাধানযোগ্য। NP = polynomial সময়ে উত্তর যাচাইযোগ্য (বা nondeterministic TM-এ সমাধানযোগ্য)।",
    aen: "P = solvable in polynomial time by a deterministic TM. NP = verifiable in polynomial time (or solvable by a nondeterministic TM in polynomial time)."
  },
  story: `<p class="scene-setting">তুমি একটা সুদূর শহরে পৌঁছেছ। রাস্তায় একজন ব্যক্তি দাঁড়িয়ে — হাতে একটা সুদোকু। ৯×৯ গ্রিড। তুমি ভাবো — এটা তো সহজ, আমি পারি। কিন্তু সে বলে: "এই সুদোকুর সমাধান আছে কি না — শুধু বলো। সমাধান নয়, শুধু হ্যাঁ বা না।" তুমি চেষ্টা করো। এক ঘণ্টা। দুই ঘণ্টা। সমাধান করা কঠিন। কিন্তু যদি সে একটা পূরণ করা বোর্ড দেখায় — তুমি চোখের পলকে যাচাই করতে পারো! সত্যি কি না। এটাই NP-র আত্মা।</p>
<p class="scene-setting en">You arrive in a distant city. A man stands on the street — holding a Sudoku. 9×9 grid. You think — easy, I can do this. But he says: "Just tell me — does this Sudoku have a solution? Yes or no." You try. One hour. Two hours. Solving is hard. But if he shows you a filled board — you can verify it instantly! True or not. This is the soul of NP.</p>

<div class="dialogue"><strong>স্টিফেন কুক:</strong> তুমি একটা ধাঁধা পেয়েছ। সমাধান করতে কয়েক ঘণ্টা। কিন্তু উত্তর দেখলে যাচাই করতে কয়েক সেকেন্ড। এটাই P এবং NP-এর পার্থক্য। P হলো সেই সমস্যা যা দ্রুত সমাধান করা যায়। NP হলো সেই সমস্যা যার উত্তর দ্রুত যাচাই করা যায়। প্রশ্নটা হলো — উত্তর দ্রুত যাচাই করা গেলে, কি তাহলে দ্রুত সমাধানও করা যায়? এটাই P vs NP। এক মিলিয়ন ডলারের প্রশ্ন।</div>
<div class="dialogue en"><strong>Stephen Cook:</strong> You have a puzzle. Solving takes hours. But verifying an answer takes seconds. This is the difference between P and NP. P is problems that can be solved quickly. NP is problems whose answers can be verified quickly. The question is — if answers can be verified quickly, can they also be found quickly? This is P vs NP. A million-dollar question.</div>

<div class="code-block">
<strong>Complexity Classes — আনুষ্ঠানিক সংজ্ঞা:</strong>

<strong>Class P (Polynomial time):</strong>
সমস্যা সেট যা deterministic Turing Machine-এ polynomial সময়ে সমাধানযোগ্য।
উদাহরণ: sorting (O(n log n)), shortest path (O(V²)), matrix multiply (O(n³))
P-এর সমস্যা = "দ্রুত সমাধানযোগ্য"।

<strong>Class NP (Nondeterministic Polynomial time):</strong>
সমস্যা সেট যার উত্তর nondeterministic TM-এ polynomial সময়ে যাচাইযোগ্য।
সমতুল্য: উত্তর দেওয়া হলে deterministic TM-এ polynomial সময়ে যাচাইযোগ্য।
উদাহরণ: Sudoku (n×n), Boolean SAT, Traveling Salesman সিদ্ধান্ত সমস্যা
NP-এর সমস্যা = "দ্রুত যাচাইযোগ্য"।

<strong>Class NP-Complete:</strong>
NP-এর সবচেয়ে কঠিন সমস্যা। দুটি শর্ত:
১. সমস্যাটি NP-তে আছে
২. NP-এর প্রতিটি সমস্যা এটিতে polynomial সময়ে রূপান্তরযোগ্য (reduction)

<strong>Class NP-Hard:</strong>
অন্তত NP-এর সমান কঠিন, কিন্তু অবশ্যই NP-তে নাও থাকতে পারে।

<strong>সম্পর্ক:</strong> P ⊆ NP (সব P সমস্যা NP-তে আছে — দ্রুত সমাধান হলে দ্রুত যাচাইও হয়)
প্রশ্ন: P = NP? (খোলা প্রশ্ন — Clay Mathematics Institute $১,০০০,০০০ পুরস্কার)
</div>

<div class="dialogue"><strong>তুমি:</strong> (অবাক) যদি P = NP হয় — তাহলে কী হবে?</div>
<div class="dialogue en"><strong>You:</strong> (amazed) What happens if P = NP?</div>

<div class="dialogue"><strong>কুক:</strong> (গম্ভীর) যদি P = NP হয় — পৃথিবী বদলে যাবে। প্রতিটি সমস্যা যার উত্তর যাচাই করা যায়, সে দ্রুত সমাধানও করা যাবে। ক্রিপ্টোগ্রাফি ভেঙে পড়বে (RSA, AES — সব)। সব অসুস্থতা দ্রুত নিরাময় হবে (protein folding)। গাণিতিক প্রমাণ স্বয়ংক্রিয়ভাবে খুঁজে পাওয়া যাবে। AI সব জানবে। কিন্তু... আমি বিশ্বাস করি না। আমি মনে করি P ≠ NP। সন্ধান কঠিন — চেনা সহজ। এটাই মহাবিশ্বের সত্য।</div>
<div class="dialogue en"><strong>Cook:</strong> (grave) If P = NP — the world transforms. Every problem whose answer can be verified can be quickly solved. Cryptography breaks (RSA, AES — all). All diseases cured quickly (protein folding). Mathematical proofs found automatically. AI knows everything. But... I believe not. I think P ≠ NP. Seeking is hard — recognizing is easy. This is the universe's truth.</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">$১M</div><div class="sc-label">Clay Prize (২০০০)</div></div>
<div class="stat-card"><div class="sc-num">৭</div><div class="sc-label">Millennium Problems</div></div>
<div class="stat-card"><div class="sc-num">~৫০</div><div class="sc-label">বছর ধরে অমীমাংসিত</div></div>
</div>

<div class="verse">
<strong>স্টিফেন আর্থার কুক (জন্ম ১৯৩৯, বাফেলো, নিউইয়র্ক):</strong><br>
হার্ভার্ড বিশ্ববিদ্যালয়ে পিএইচডি, তারপর টরন্টো বিশ্ববিদ্যালয়ে অধ্যাপক।<br>
"The Complexity of Theorem-Proving Procedures" (১৯৭১, STOC) — Cook-Levin Theorem।<br>
এই paper-এ প্রথমবার NP-complete সমস্যা (Boolean SAT) সংজ্ঞায়িত করা হয়।<br>
১৯৮২ সালে Turing Award।<br><br>
Leonid Levin (জন্ম ১৯৪৮, ইউক্রেন) স্বাধীনভাবে একই ফলাফল আবিষ্কার করেন — ১৯৭১ সালে, কিন্তু সোভিয়েত ইউনিয়নে। তার paper ১৯৭৩ সালে প্রকাশিত হয়। তিনি বোস্টন বিশ্ববিদ্যালয়ে অধ্যাপক।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> চেনা সহজ — খোঁজা কঠিন। এটাই মহাবিশ্বের অসাম্যতা।<br>
<em>Recognizing is easy — finding is hard. This is the universe's asymmetry.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
সা'য় (সফা ও মারওয়ার মধ্যে দৌড়) শিক্ষা দেয় — সন্ধানে পরিশ্রম লাগে। হজ্জের একটি আস্তিত্ব এই — পরিশ্রম ছাড়া সত্য পাওয়া যায় না। P vs NP বলে — এটা গাণিতিক সত্য। উত্তর দ্রুত যাচাই করা NP, কিন্তু সন্ধান P-তে নাও থাকতে পারে।
</div>
</div>`,
  senior: {
    title: "P vs NP প্র্যাকটিস গাইড",
    body: `<p><strong>১. P সমস্যা চিনো:</strong> Sorting, BFS/DFS, matrix multiply — সব polynomial time।</p>
<p><strong>২. NP সমস্যা চিনো:</strong> Sudoku, SAT, TSP সিদ্ধান্ত, graph coloring, subset sum — উত্তর যাচাই সহজ, সমাধান কঠিন।</p>
<p><strong>৩. Reduction অনুশীলন:</strong> SAT → 3-SAT → Vertex Cover → Independent Set। প্রতিটি step-এ সমস্যা রূপান্তর।</p>
<p><strong>৪. বাস্তব প্রভাব:</strong> ক্রিপ্টোগ্রাফি P ≠ NP-এর উপর নির্ভর করে। যদি P = NP হয় — RSA ভেঙে যায়। প্রতিটি secure system অন্তর্নিহিতভাবে এই অনুমানের উপর দাঁড়িয়ে আছে।</p>`
  }
});

doors.push({
  num: 8,
  icon: "🔄",
  color: "#818cf8",
  name: "অনুবাদের শিল্প",
  subtitle: "NP-Completeness & Reductions",
  tech: "Karp Reductions, 21 NP-Complete Problems — Karp (1972)",
  spirit: "তাহলিল — জটিলকে সরলে রূপান্তর, অস্পষ্টকে স্পষ্টে",
  secret: "একটা সমস্যাকে অন্যটিতে রূপান্তর করো — যদি দ্বিতীয়টি সমাধানযোগ্য হয়, প্রথমটিও হবে।",
  recall: {
    q: "Polynomial-time reduction A ≤p B কী অর্থ?",
    qen: "What does polynomial-time reduction A ≤p B mean?",
    a: "A-কে B-তে polynomial সময়ে রূপান্তর করা যায়। B সমাধান করতে পারলে A-ও করা যায়। অর্থাৎ A, B-র চেয়ে কঠিন নয়।",
    aen: "A can be transformed to B in polynomial time. If B is solvable, so is A. So A is no harder than B."
  },
  story: `<p class="scene-setting">তুমি দুইজন দোভাষীকে দেখছ। একজন ফার্সি বলে, একজন তুর্কি। তারা একে অপরের ভাষা বোঝে না। কিন্তু মাঝখানে একজন অনুবাদক আছেন — তিনি ফার্সি থেকে আরবিতে, আরবি থেকে তুর্কিতে। এখন ফার্সি ভাষার যেকোনো বই তুর্কিতে অনুবাদ করা যায়। এটাই reduction — একটা সমস্যাকে অন্য ভাষায় রূপান্তর করা। যদি দ্বিতীয় ভাষায় সমাধান জানা থাকে — প্রথমটিও সমাধান হয়।</p>
<p class="scene-setting en">You watch two translators. One speaks Persian, one Turkish. They don't understand each other. But between them stands a translator — Persian to Arabic, Arabic to Turkish. Now any Persian book can be translated to Turkish. This is reduction — transforming one problem into another language. If the second language has a solution — the first is solved too.</p>

<div class="dialogue"><strong>রিচার্ড কার্প:</strong> কুক তোমাকে দেখিয়েছিলেন — SAT সবচেয়ে কঠিন NP সমস্যা। কিন্তু তারপর কী? আমি ভাবলাম — যদি SAT NP-complete হয়, তাহলে অন্য সমস্যাগুলোও NP-complete কি না, তা যাচাই করতে পারি। আমি ১৯৭২ সালে ২১টি সমস্যা বেছে নিলাম — প্রতিটি বাস্তব, প্রতিটি কঠিন — এবং দেখালাম প্রতিটি NP-complete। এর মানে — এই ২১টির যেকোনো একটি সমাধান করলে, সব NP সমস্যা সমাধান হয়।</div>
<div class="dialogue en"><strong>Richard Karp:</strong> Cook showed you — SAT is the hardest NP problem. But then what? I thought — if SAT is NP-complete, I can check whether other problems are too. In 1972 I chose 21 problems — each practical, each hard — and showed each is NP-complete. This means — solving any one of these 21 solves all NP problems.</div>

<div class="code-block">
<strong>Polynomial-Time Reduction (Karp Reduction):</strong>

A ≤p B (A, B-তে polynomial সময়ে reducible)

আনুষ্ঠানিকভাবে: একটি ফাংশন f: Σ* → Σ* আছে যা:
১. Polynomial সময়ে গণনাযোগ্য
২. x ∈ A ⟺ f(x) ∈ B

<strong>অর্থ:</strong>
• A-এর প্রতিটি ইনপুটকে B-এর ইনপুটে রূপান্তর করা যায় (দ্রুত)
• x-এর উত্তর "হ্যাঁ" হলে f(x)-এর উত্তরও "হ্যাঁ"
• x-এর উত্তর "না" হলে f(x)-এর উত্তরও "না"

<strong>ট্রানজিটিভিটি:</strong>
A ≤p B এবং B ≤p C → A ≤p C

<strong>NP-Complete প্রমাণের পদ্ধতি:</strong>
B NP-complete প্রমাণ করতে:
১. B ∈ NP দেখাও (উত্তর polynomial সময়ে যাচাইযোগ্য)
২. একটি পরিচিত NP-complete সমস্যা A বেছে নাও
৩. A ≤p B প্রমাণ করো (A-কে B-তে রূপান্তর করো)

<strong>Karp-এর ২১টি সমস্যা (১৯৭২) — কিছু উদাহরণ:</strong>
• SAT / 3-SAT (Boolean satisfiability)
• Clique (সবচেয়ে বড় সম্পূর্ণ সাবগ্রাফ)
• Vertex Cover (সর্বনিম্ন vertex যা সব edge cover করে)
• Hamiltonian Circuit (প্রতিটি vertex একবার ভ্রমণ)
• Traveling Salesman (সবচেয়ে ছোট ভ্রমণ)
• Graph Coloring (ন্যূনতম রঙে রঞ্জন)
• Subset Sum (উপসেট যা লক্ষ্য যোগফল দেয়)
• Knapsack (সর্বাধিক মূল্য, সীমিত ওজন)
• Integer Programming
</div>

<div class="dialogue"><strong>তুমি:</strong> (উত্তেজিত) এর মানে — এই ২১টির যেকোনো একটি দ্রুত সমাধান করলে, সব দ্রুত সমাধান হয়?</div>
<div class="dialogue en"><strong>You:</strong> (excited) This means — solving any one of these 21 quickly solves everything?</div>

<div class="dialogue"><strong>কার্প:</strong> হ্যাঁ। এবং এখন হাজারের বেশি সমস্যা NP-complete প্রমাণিত। Garey ও Johnson ১৯৭৯ সালে একটি বই লিখেছিলেন — "Computers and Intractability" — সেখানে ৩০০+ NP-complete সমস্যা। এখন সে সংখ্যা অনেক বেশি। পয়েন্ট হলো — একই সমস্যা, হাজার রূপে। একটি সমাধান — হাজার মুক্তি।</div>
<div class="dialogue en"><strong>Karp:</strong> Yes. And now thousands of problems are proven NP-complete. Garey and Johnson wrote a book in 1979 — "Computers and Intractability" — listing 300+ NP-complete problems. Now that number is much larger. The point — one problem, a thousand forms. One solution — a thousand liberations.</div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>Reduction এর ক্ষমতা:</strong> Reduction শুধু NP-complete প্রমাণের টুল নয় — এটি একটি সাধারণ সমস্যা সমাধানের কৌশল। নতুন সমস্যা পেলে ভাবো: এটা কি পরিচিত সমস্যায় রূপান্তর করা যায়? এটাই algorithm design-এর প্রথম প্রশ্ন — "what is this LIKE?" Book ৩৩ (Loom of Reason) এ আমরা দেখেছি — analogical reasoning গণিতেও কাজ করে।</div></div>

<div class="verse">
<strong>রিচার্ড ম্যানিং কার্প (জন্ম ১৯৩৫, বোস্টন):</strong><br>
হার্ভার্ড বিশ্ববিদ্যালয়ে পিএইচডি। IBM-এ কাজ, তারপর বার্কলে, ওয়াশিংটন।<br>
"Reducibility Among Combinatorial Problems" (১৯৭২, Complexity of Computer Computations)।<br>
এই paper-এ ২১টি NP-complete সমস্যা তালিকাভুক্ত করা হয় — এটি কম্পিউটার সায়েন্সের সবচেয়ে উদ্ধৃত paper-গুলোর একটি।<br>
১৯৮৫ সালে Turing Award।<br><br>
Garey ও Johnson: "Computers and Intractability: A Guide to the Theory of NP-Completeness" (১৯৭৯, W.H. Freeman) — এখনও স্ট্যান্ডার্ড রেফারেন্স। দুজনেই Bell Labs-এ কাজ করতেন।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> সব কঠিন সমস্যা — একই সমস্যার রূপ। একটি চাবি — হাজার তালা।<br>
<em>All hard problems — one problem in disguise. One key — a thousand locks.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
তাহলিল (লা ইলাহা ইল্লাল্লাহ — জটিলতাকে একেশ্বরবাদে রূপান্তর) শিক্ষা দেয় — সব জটিলতার নিচে একটি সরল সত্য। Reduction গাণিতিকভাবে দেখায় — হাজার সমস্যার নিচে একটি কাঠামো। SAT, TSP, Clique — একই সমস্যার মুখোশ।
</div>
</div>`,
  senior: {
    title: "Reduction প্র্যাকটিস গাইড",
    body: `<p><strong>১. প্রথম reduction অনুশীলন:</strong> 3-SAT ≤p Vertex Cover। প্রতিটি clause-এ একটি triangle vertex, literal vertex-এর সাথে সংযুক্ত।</p>
<p><strong>২. চেইন অনুশীলন:</strong> SAT → 3-SAT → Vertex Cover → Independent Set → Clique। প্রতিটি ধাপে রূপান্তর।</p>
<p><strong>৩. নতুন সমস্যা পেলে:</strong> প্রথমে ভাবো — এটা কোন পরিচিত NP-complete সমস্যার মতো? তারপর reduction খোঁজো।</p>
<p><strong>৪. বিপরীত দিক:</strong> reduction প্রমাণ করলে সমস্যা NP-complete। কিন্তু reduction না পেলে — সমস্যা P-তেও থাকতে পারে, NP-intermediate-ও হতে পারে।</p>`
  }
});

doors.push({
  num: 9,
  icon: "🎯",
  color: "#6366f1",
  name: "যখন নিখুঁত অসম্ভব",
  subtitle: "Approximation Algorithms & Heuristics",
  tech: "Approximation Ratio, PTAS, Heuristic Design — Garey & Johnson (1979)",
  spirit: "ইজতিহাদ — নিশ্চিততা অসম্ভব হলে সর্বোত্তম প্রচেষ্টা",
  secret: "যখন সঠিক উত্তর অসম্ভব, তখন কাছাকাছি উত্তরই বিজয় — কম্পিউটার সায়েন্সের বাস্তবতা।",
  recall: {
    q: "Approximation ratio কী? Vertex Cover-এর approximation ratio কত?",
    qen: "What is an approximation ratio? What is Vertex Cover's ratio?",
    a: "Approximation ratio = অ্যালগরিদমের উত্তর / সর্বোত্তম উত্তর। Vertex Cover-এ ২-approximation আছে।",
    aen: "Ratio = algorithm's answer / optimal answer. Vertex Cover has a 2-approximation."
  },
  story: `<p class="scene-setting">তুমি একটা কাঠখড়ের রান্নাঘরে দাঁড়িয়ে আছ। তোমাকে ১০০ জন অতিথির জন্য রান্না করতে হবে — ৩০ মিনিটে। কিন্তু নিখুঁত রান্নায় ৫ ঘণ্টা লাগে। তুমি কী করবে? হাল ছাড়বে? নাকি সেরা প্রচেষ্টা করবে — দ্রুত, কাছাকাছি, গ্রহণযোগ্য? এটাই approximation। নিখুঁত নয় — কিন্তু যথেষ্ট। সময়ের সীমাবদ্ধতা মেনে নিয়ে সেরা সম্ভব।</p>
<p class="scene-setting en">You stand in a rustic kitchen. You must cook for 100 guests — in 30 minutes. But perfect cooking takes 5 hours. What do you do? Give up? Or try your best — fast, close, acceptable? This is approximation. Not perfect — but sufficient. The best possible within time's constraint.</p>

<div class="dialogue"><strong>ডেভিড জনসন:</strong> (কথা বলছেন Garey-এর সাথে) তুমি NP-complete সমস্যা পেয়েছ। সঠিক সমাধান সময়ের সীমাবদ্ধতায় অসম্ভব। কিন্তু বাস্তবে তোমাকে কিছু একটা করতেই হবে। এখন কী? দুটো পথ: approximation algorithm — গ্যারান্টিযুক্ত কাছাকাছি উত্তর। অথবা heuristic — বাস্তবে কাজ করে, গ্যারান্টি নেই।</div>
<div class="dialogue en"><strong>David Johnson:</strong> (speaking with Garey) You have an NP-complete problem. Exact solution is impossible in time. But in practice, you must do something. Now what? Two paths: approximation algorithm — guaranteed near-optimal. Or heuristic — works in practice, no guarantee.</div>

<div class="code-block">
<strong>Approximation Algorithm — আনুষ্ঠানিক সংজ্ঞা:</strong>

একটি α-approximation algorithm A একটি সমস্যার জন্য:
• A polynomial সময়ে চলে
• A-এর উত্তর ≤ α × OPT (minimization সমস্যার জন্য)
  অথবা OPT ≤ α × A-এর উত্তর (maximization সমস্যার জন্য)

যেখানে OPT = সর্বোত্তম সমাধান, α ≥ ১

<strong>উদাহরণ — Vertex Cover ২-Approximation:</strong>
১. গ্রাফে একটি edge (u,v) বেছে নাও
২. u এবং v উভয়কে cover-এ যোগ করো
৩. এই vertices-এর সাথে যুক্ত সব edge মুছে ফেলো
৪. গ্রাফ খালি না হওয়া পর্যন্ত পুনরাবৃত্তি করো

কেন ২-approximation? প্রতিটি edge-এ আমরা ২টি vertex নিই।
কিন্তু optimal cover-এ অন্তত একটি vertex প্রতি edge-এ আছে।
তাই আমাদের cover ≤ ২ × OPT।

<strong>PTAS (Polynomial-Time Approximation Scheme):</strong>
একটি অ্যালগরিতম যা যেকোনো ε > ০-এর জন্য
(১+ε)-approximation দেয়, polynomial সময়ে।
কিছু সমস্যার PTAS আছে (যেমন Knapsack), কিছুর নেই।

<strong>যখন Approximation কঠিন:</strong>
TSP (সাধারণ ক্ষেত্রে) — কোনো constant approximation সম্ভব নয়!
(যদি না ত্রিভুজ অসমতা থাকে — তখন ৩/২-approximation আছে, Christofides ১৯৭৬)
</div>

<div class="dialogue"><strong>তুমি:</strong> তাহলে কি কখনো "ভালো কাছাকাছি" যথেষ্ট?</div>
<div class="dialogue en"><strong>You:</strong> So sometimes "good enough" is sufficient?</div>

<div class="dialogue"><strong>জনসন:</strong> বাস্তবে — প্রায় সবসময়! Google Maps তোমাকে সবচেয়ে ছোট রাস্তা দেয় — কিন্তু তা সর্বোত্তম কি না, কে জানে? এটা ভালো কাছাকাছি। Amazon তোমাকে সেরা পণ্য সুপারিশ করে — সর্বোত্তম কি না, কে জানে? ভালো কাছাকাছি। প্রকৃতি নিজেও এটা করে — protein folding সর্বোত্তম নয়, কাছাকাছি। কারণ নিখুঁত খুঁজতে গেলে সময় শেষ হয়ে যায়।</div>
<div class="dialogue en"><strong>Johnson:</strong> In practice — almost always! Google Maps gives you the shortest route — but is it optimal? Who knows? It's good enough. Amazon recommends the best product — is it truly optimal? Who knows? Good enough. Nature itself does this — protein folding isn't optimal, it's approximate. Because seeking perfection runs out of time.</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Exact (Brute Force)</div>সর্বোত্তম উত্তর — কিন্তু সময় সীমাহীন।<br>TSP: ২০ শহরে ৬০,০০,০০,০০,০০,০০,০০,০০,০০,০০,০০,০০,০০,০০,০০,০০০ routes।<br>মহাবিশ্বের বয়সেও সমাধান হবে না।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Approximation</div>কাছাকাছি উত্তর — polynomial সময়ে।<br>Christofides TSP: ১.৫× optimal — গ্যারান্টিযুক্ত।<br>মিনিটে সমাধান। বাস্তবে প্রায় সর্বোত্তম।</div>
</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>টিপ — Heuristic vs Approximation:</strong> Approximation algorithm-এর গ্যারান্টি আছে (ratio bound)। Heuristic-এর নেই — কিন্তু বাস্তবে ভালো কাজ করতে পারে। Genetic algorithm, simulated annealing, greedy — সব heuristic। কোনো গ্যারান্টি নেই, কিন্তু প্রায়ই সেরা।</div></div>

<div class="verse">
<strong>গ্যারে ও জনসন — "Computers and Intractability" (১৯৭৯):</strong><br>
মাইকেল গ্যারে এবং ডেভিড জনসন — দুজনেই Bell Labs-এ গবেষক।<br>
এই বইটি NP-completeness-এর স্ট্যান্ডার্ড রেফারেন্স — "the NP-completeness bible"।<br>
৩০০+ সমস্যার তালিকা, প্রতিটির complexity status।<br><br>
Nicos Christofides (১৯৪২-২০১৯) — সাইপ্রাসে জন্ম, Imperial College London-এ কাজ। ১৯৭৬ সালে TSP-এর জন্য ৩/২-approximation প্রকাশ করেন — যা ৪০+ বছর ধরে উন্নত করা যায়নি (২০২০-এ সামান্য উন্নতি এসেছে)।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> নিখুঁত অসম্ভব হলে, সেরা প্রচেষ্টাই বিজয়।<br>
<em>When perfection is impossible, best effort wins.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
ইজতিহাদ — ইসলামি আইনশাস্ত্রে যখন নিশ্চিত উত্তর নেই, পণ্ডিত সর্বোত্তম বিচার দেন। গণনায়ও তেমন — যখন সঠিক সমাধান অসম্ভব (NP-complete), approximation algorithm সর্বোত্তম প্রচেষ্টা দেয়। গ্যারান্টিযুক্ত সীমার মধ্যে — সবচেয়ে কাছে।
</div>
</div>`,
  senior: {
    title: "Approximation প্র্যাকটিস গাইড",
    body: `<p><strong>১. সহজ approximation:</strong> Vertex Cover ২-approximation — সবচেয়ে সহজ NP-complete approximation।</p>
<p><strong>২. greedy heuristic:</strong> অনেক সমস্যায় greedy ভালো কাজ করে — Set Cover log(n)-approximation, TSP nearest-neighbor।</p>
<p><strong>৩. PTAS চিনো:</strong> Knapsack-এ PTAS আছে — যেকোনো ε-এর জন্য (১+ε)-approximation, O(n^(1/ε)) সময়ে।</p>
<p><strong>৪. বাস্তব জগতে:</strong> Google PageRank, Netflix recommendation, Uber route — সব approximation/heuristic। বাস্তবে কেউ exact NP-complete সমাধান করে না।</p>`
  }
});

doors.push({
  num: 10,
  icon: "🧮",
  color: "#a5b4fc",
  name: "সব দরজার সংযোগ",
  subtitle: "Synthesis — The Clockwork of All Computation",
  tech: "Complete Synthesis: Automata → Turing → Limits → Complexity → Practice",
  spirit: "তাওহিদ — সব গণনার একতা, সব সীমার একত্র",
  secret: "গণনার তত্ত্ব শেখা মানে — কী সম্ভব, কী অসম্ভব, আর কেন — এই তিন প্রশ্নের উত্তর একসাথে দেখা।",
  recall: {
    q: "গণনার তত্ত্বের তিনটি মূল স্তম্ভ কী কী?",
    qen: "What are the three pillars of Theory of Computation?",
    a: "(১) গণনার মডেল (automata hierarchy), (২) গণনার সীমা (undecidability), (৩) গণনার খরচ (complexity)।",
    aen: "(1) Models of computation (automata hierarchy), (2) Limits of computation (undecidability), (3) Cost of computation (complexity)."
  },
  story: `<p class="scene-setting">তুমি একটা বিশাল প্রাঙ্গণে দাঁড়িয়ে আছ। চারপাশে দশটা দরজা — সব খোলা। প্রতিটি দরজায় একজন শিক্ষক দাঁড়িয়ে আছেন। ক্লিনি, রাবিন ও স্কট, চমস্কি, টুরিং, গোডেল, কুক, কার্প, জনসন — সবাই তোমার দিকে তাকিয়ে। একটা সিঁড়ি উপরে যায় — ছাদের উপরে, আকাশের নিচে। সেই সিঁড়ির উপরে একটা বিশাল যন্ত্র — একটা ঘড়ির মতো, কিন্তু দৃষ্টান্তমূলক। প্রতিটি গিয়ার একটি ধারণা। প্রতিটি হাত একটি সীমা। এটাই গণনার ঘড়ি — কম্পিউটার সায়েন্সের হৃদপিণ্ড।</p>
<p class="scene-setting en">You stand in a vast courtyard. Around you, ten doors — all open. At each door stands a teacher. Kleene, Rabin and Scott, Chomsky, Turing, Gödel, Cook, Karp, Johnson — all looking at you. A staircase leads upward — above the roof, beneath the sky. At its top, a vast machine — like a clock, but metaphorical. Each gear is an idea. Each hand is a limit. This is the clockwork of computation — the heart of computer science.</p>

<div class="diagram">
<div class="diag-title">The Chomsky Hierarchy — One Universe, Four Layers</div>
<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#818cf8"/></marker>
  </defs>
  <rect x="20" y="20" width="520" height="240" fill="rgba(99,102,241,0.03)" stroke="rgba(99,102,241,0.15)" rx="8"/>
  <rect x="40" y="200" width="480" height="40" fill="rgba(99,102,241,0.12)" stroke="#6366f1" stroke-width="1.5" rx="6"/>
  <text x="280" y="225" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="700">Type 3: Regular Languages (DFA/NFA)</text>
  <rect x="40" y="145" width="480" height="50" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5" rx="6"/>
  <text x="280" y="170" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="700">Type 2: Context-Free (PDA)</text>
  <rect x="40" y="90" width="480" height="50" fill="rgba(99,102,241,0.05)" stroke="#6366f1" stroke-width="1.5" rx="6"/>
  <text x="280" y="115" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="700">Type 1: Context-Sensitive (LBA)</text>
  <rect x="40" y="35" width="480" height="50" fill="rgba(99,102,241,0.03)" stroke="#6366f1" stroke-width="1.5" rx="6"/>
  <text x="280" y="60" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="700">Type 0: Recursively Enumerable (Turing Machine)</text>
  <line x1="280" y1="270" x2="280" y2="248" stroke="#818cf8" stroke-width="2" marker-end="url(#arr)"/>
  <text x="310" y="265" fill="#818cf8" font-size="10">স্মৃতি বাড়ে, ক্ষমতা বাড়ে</text>
</svg>
<div class="diag-cap">প্রতিটি স্তর নিচের স্তরকে ধারণ করে। উপরে = বেশি ক্ষমতা, বেশি স্মৃতি।</div>
</div>

<div class="dialogue"><strong>ক্লিনি:</strong> তুমি প্রথম দরজায় শিখেছিলে — সসীম অবস্থান দিয়ে অসীম প্যাটার্ন। আমার নিয়মিত ভাষা হলো সবচেয়ে সরল — কিন্তু এটাই ভিত্তি। প্রতিটি regex, প্রতিটি lexer, প্রতিটি protocol validator — আমার তত্ত্বের উপর দাঁড়িয়ে।</div>
<div class="dialogue en"><strong>Kleene:</strong> In the first door you learned — finite states recognizing infinite patterns. My regular languages are the simplest — but they are the foundation. Every regex, every lexer, every protocol validator — stands on my theory.</div>

<div class="dialogue"><strong>চমস্কি:</strong> আমি তোমাকে দেখিয়েছিলাম — স্তরে স্তরে অর্থ। আমার স্তরক্রম হলো কম্পিউটার সায়েন্সের মানচিত্র। প্রতিটি কম্পাইলার, প্রতিটি parser — আমার context-free grammar দিয়ে। এবং প্রতিটি ভাষা — প্রোগ্রামিং বা মানব — এই চার স্তরের কোনো একটিতে।</div>
<div class="dialogue en"><strong>Chomsky:</strong> I showed you — meaning in layers. My hierarchy is the map of computer science. Every compiler, every parser — with my context-free grammar. And every language — programming or human — belongs to one of these four levels.</div>

<div class="dialogue"><strong>টুরিং:</strong> আমি তোমাকে দেখিয়েছিলাম — সার্বজনীন যন্ত্র। একটা টেপ, একটা হেড, কিছু নিয়ম — এটাই সব গণনার ভিত্তি। তোমার ল্যাপটপ, তোমার ফোন, তোমার ক্লাউড সার্ভার — সব একটি Universal Turing Machine। কিন্তু আমি তোমাকে আরও দেখিয়েছিলাম — সীমা। Halting Problem। কিছু প্রশ্নের উত্তর নেই।</div>
<div class="dialogue en"><strong>Turing:</strong> I showed you — the universal machine. A tape, a head, some rules — the foundation of all computation. Your laptop, your phone, your cloud server — all Universal Turing Machines. But I also showed you — limits. The Halting Problem. Some questions have no answer.</div>

<div class="dialogue"><strong>গোডেল:</strong> এবং আমি টুরিং-এর আগেই দেখিয়েছিলাম — সত্য প্রমাণের চেয়ে বড়। কোনো পর্যাপ্ত শক্তিশালী যুক্তিব্যবস্থা নিজেই নিজের সঠিকতা প্রমাণ করতে পারে না। টুরিং এটাকে যন্ত্রে নামিয়ে আনলেন — আমি গণিতে রেখেছিলাম।</div>
<div class="dialogue en"><strong>Gödel:</strong> And I showed before Turing — truth is larger than proof. No sufficiently powerful formal system can prove its own consistency. Turing brought this to machines — I kept it in mathematics.</div>

<div class="dialogue"><strong>কুক ও কার্প:</strong> (একসাথে) আর আমরা দেখালাম — গণনার খরচ। সব সমস্যা সমান নয়। কিছু দ্রুত (P), কিছু যাচাইযোগ্য কিন্তু সমাধান কঠিন (NP)। এবং হাজার সমস্যা — একই কঠিনতার রূপ (NP-complete)। প্রশ্নটা এখনও খোলা — P = NP?</div>
<div class="dialogue en"><strong>Cook and Karp:</strong> (together) And we showed — the cost of computation. Not all problems are equal. Some fast (P), some verifiable but hard to solve (NP). And thousands of problems — one hardness in disguise (NP-complete). The question remains open — P = NP?</div>

<div class="code-block">
<strong>গণনার তত্ত্ব — এক নজরে (The Complete Cheat Sheet):</strong>

<strong>১. মডেল (What is computation?):</strong>
  DFA/NFA → সসীম স্মৃতি → Regular languages
  PDA → এক স্ট্যাক → Context-free languages
  Turing Machine → অসীম টেপ → সব গণনাযোগ্য ভাষা

<strong>২. সীমা (What CANNOT be computed?):</strong>
  Halting Problem → undecidable (Turing ১৯৩৬)
  Rice's Theorem → সব semantic property undecidable (Rice ১৯৫৩)
  Gödel → সত্য > প্রমাণ (Gödel ১৯৩১)

<strong>৩. খরচ (What is HARD to compute?):</strong>
  P → polynomial সমাধানযোগ্য
  NP → polynomial যাচাইযোগ্য
  NP-complete → NP-এর সবচেয়ে কঠিন
  P = NP? → খোলা প্রশ্ন ($১M)

<strong>৪. অনুশীলন (When exact is impossible):</strong>
  Approximation → গ্যারান্টিযুক্ত কাছাকাছি (α-ratio)
  Heuristic → বাস্তবে কাজ করে, গ্যারান্টি নেই
  PTAS → যেকোনো নির্ভুলতায়, polynomial সময়ে

<strong>৫. দর্শন (The Big Picture):</strong>
  গণনার তত্ত্ব শুধু গণিত নয় — এটি জ্ঞানতত্ত্ব।
  এটি বলে — কী জানা যায়, কী জানা যায় না, কী দ্রুত জানা যায়।
  এটি প্রতিটি PhD interview, প্রতিটি system design, প্রতিটি algorithm নকশার ভিত্তি।
</div>

<div class="callout info"><span class="co-icon">🔗</span><div><strong>Library Cross-References:</strong><br>
• <strong>Book ২ (DSA Bazaar):</strong> Big-O হলো complexity class-এর প্রথম ধাপ। P vs NP হলো Big-O-এর গভীর সত্য।<br>
• <strong>Book ৩৫ (Distributed Systems):</strong> FLP impossibility result (Fischer, Lynch, Paterson ১৯৮৫) হলো distributed halting problem — consensus সাধারণভাবে অসম্ভব।<br>
• <strong>Book ৩৮ (Operating Systems):</strong> Deadlock detection সাধারণভাবে undecidable (Coffman ১৯৭১)।<br>
• <strong>Book ৩৯ (Databases):</strong> Query optimization NP-hard — এজন্যই heuristic optimizer ব্যবহার হয়।<br>
• <strong>Book ৪০ (Software Engineering):</strong> Rice's Theorem বলে — কোনো compiler সব বাগ ধরতে পারে না। এটি টুলের দুর্বলতা নয়, গণনার সীমা।<br>
• <strong>Book ৩৩ (Loom of Reason):</strong> Reduction = analogical reasoning। Polya-র "what is this LIKE?" গণিতে প্রয়োগ।<br>
• <strong>Book ৩৪ (Scale of Evidence):</strong> বৈজ্ঞানিক প্রমাণ ও গাণিতিক প্রমাণ — দুটোই জ্ঞানের ভিত্তি। Gödel বলে — গাণিতিক প্রমাণেরও সীমা আছে।</div></div>

<div class="verse">
<strong>তাওহিদ — সমস্ত গণনার একতা:</strong><br><br>
ক্লিনি বলেছিলেন — প্যাটার্ন চেনো।<br>
রাবিন ও স্কট বলেছিলেন — একাধিক পথ, এক গন্তব্য।<br>
চমস্কি বলেছিলেন — স্তরে স্তরে গভীরে যাও।<br>
টুরিং বলেছিলেন — সব গণনা এক যন্ত্রে।<br>
গোডেল বলেছিলেন — সত্য প্রমাণের বাইরে।<br>
কুক বলেছিলেন — চেনা সহজ, খোঁজা কঠিন।<br>
কার্প বলেছিলেন — সব কঠিন সমস্যা এক।<br>
জনসন বলেছিলেন — নিখুঁত অসম্ভব হলেও চেষ্টা থামো না।<br><br>
এই নয়টি সত্য আলাদা নয় — একটি সত্যের নয়টি মুখ।<br>
গণনা এক — তার রূপ বহু। সীমা এক — তার দিক বহু।
</div>

<div class="secret-box">
<strong>🔑 চূড়ান্ত গোপন সত্য:</strong> গণনার তত্ত্ব শেখা মানে — কম্পিউটার সায়েন্সের আত্মা বোঝা।<br>
<em>Theory of computation is the soul of computer science.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
তাওহিদ — একত্ববাদ — শিক্ষা দেয় যে সবকিছুর নিচে একটি সত্য। গণনার তত্ত্বও তেমন — সব কম্পিউটার সায়েন্সের নিচে একটি কাঠামো। DFA থেকে Turing Machine, Halting Problem থেকে P vs NP — সব একটি সুতোয় গাঁথা। সেই সুতো ধরলে — সব দরজা খোলে।
</div>
</div>`,
  senior: {
    title: "পরবর্তী পদক্ষেপ",
    body: `<p><strong>১. আরও পড়ো:</strong> Michael Sipser, "Introduction to the Theory of Computation" (৩য় সংস্করণ) — সবচেয়ে পঠনযোগ্য পাঠ্যপুস্তক।</p>
<p><strong>২. Hopcroft, Motwani, Ullman:</strong> "Introduction to Automata Theory, Languages, and Computation" — ক্লাসিক রেফারেন্স।</p>
<p><strong>৩. Sanjeev Arora ও Boaz Barak:</strong> "Computational Complexity: A Modern Approach" — complexity theory-তে গভীরে যেতে।</p>
<p><strong>৪. PhD Interview প্রস্তুতি:</strong> "P vs NP ব্যাখ্যা করো" — এই বই পড়ে তুমি এখন পারবে। "Halting Problem কী?" — পারবে। "কেন কিছু সমস্যা undecidable?" — পারবে। এই তিনটি প্রশ্ন প্রায় প্রতিটি CS PhD interview-এ আসে।</p>`
  }
});
