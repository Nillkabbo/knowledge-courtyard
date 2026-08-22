// ════════════════════════════════════════
// Book 57 · ষাট ক্রেডিটের রিহলা — Doors 5–8
// ════════════════════════════════════════

// ── দরজা ৫ · যন্ত্রশালের কথা ──────────────────
doors.push({
  num: 5,
  icon: "🧰",
  color: "#7dd3fc",
  name: "যন্ত্রশালের কথা",
  subtitle: "The Instrument Shed — Analytics Software & Tools (BAN 5013)",
  tech: "Analytics Toolchain · Python/R · Pandas · Visualization · Spreadsheets → Code",
  spirit: "آلَة — আলাত: যন্ত্র; 'প্রত্যেক কাজের জন্য সুশৃঙ্খল যন্ত্র প্রস্তুত রাখা সুন্নাহ'",
  secret: "যন্ত্র বাছাই বিদ্যা নয় — প্রশ্ন বাছাই বিদ্যা। সঠিক প্রশ্ন যেকোনো যন্ত্রে উত্তর দেয়, ভুল প্রশ্ন কোনো যন্ত্রে নয়।",
  recall: {
    q: "Analytics-টুলচেইনের পাঁচটি ধাপ কী কী?",
    qen: "What are the five stages of the analytics toolchain?",
    a: "সংগ্রহ (collect) → পরিষ্কার (clean) → বিশ্লেষণ (analyze) → ভিজ্যুয়ালাইজ (visualize) → বয়ান (communicate)।",
    aen: "Collect → clean → analyze → visualize → communicate."
  },
  story: `<p class="scene-setting">কাফেলার সরাইয়ের পেছনে এক যন্ত্রশাল — কাঠমিস্ত্রির আরামখানা। র‍্যাকে ঝুলছে শত হাতিয়ার, প্রতিটির হাতলে পালিশ, প্রতিটির জায়গা নির্দিষ্ট। মাস্টার-কাঠমিস্ত্রি বলেন, "আগের রাতে আমি এক শিশির-কাঠ কেটেছি এই ছেনি দিয়ে। কিন্তু ছেনি কেনার আগে আমি প্রশ্ন করেছি — <strong>কাঠটা কী হবে?</strong> কব্জা বানাতে গিয়ে কেউ যদি রেঁদাই কেনে, দোষ রেঁদাইয়ের নয়, প্রশ্নের।" এই যন্ত্রশালের নাম BAN 5013 — Analytics Software & Tools।</p>
<p class="scene-setting en">Behind the caravanserai, an instrument shed — the carpenter's retreat. A hundred tools hang on racks, each handle polished, each place fixed. The master says, "Last night I cut a shisham board with this chisel. But before buying the chisel I asked — <strong>what will the wood become?</strong> If a man buys a saw to make a hinge, the fault is not the saw's but the question's." This shed is BAN 5013 — Analytics Software & Tools.</p>
<div class="dialogue"><strong>তুমি:</strong> মাস্টার, বাজারে তো শত টুল — Python, R, Tableau, Power BI, Excel, SAS... কোনটা শিখব?<br><strong>কাঠমিস্ত্রি:</strong> ভুল প্রশ্ন! আগে বলো — <strong>কী বানাবে?</strong> নদীর হিসাব (trend) চাই? গ্রাফ-যন্ত্র (matplotlib/Tableau)। ভবিষ্যদ্বাণী (forecast) চাই? পরিসংখ্যান-যন্ত্র (Python/R)। দ্রুত এক পাতার ছবি (quick view)? স্প্রেডশিট-ছুরি (Excel)। আমার সূত্র: <strong>যে যন্ত্র তোমার হাতে তার প্রশ্নের উত্তর দেয়, সেটাই আজকের শ্রেষ্ঠ যন্ত্র।</strong> আর মনে রেখো — হাতিয়ারের বিশেষজ্ঞ হওয়া আর কাঠের বিশেষজ্ঞ হওয়া এক নয়।<br><strong>তুমি:</strong> আমার তো Python আর Django-চেন জানা — সুবিধা কী?<br><strong>কাঠমিস্ত্রি:</strong> বিশাল সুবিধা! pandas তোমার ইতিমধ্যে-শেখা কাঠ: DataFrame = তোমার পুরনো SQL-টেবিল, groupby = তোমার পুরনো GROUP BY। BAN 5013-তে তুমি নতুন হাতিয়ার কিনবে না — পুরনো হাতিয়ারে নতুন প্রশ্ন করবে।</div>
<div class="dialogue en"><strong>You:</strong> Master, the bazaar has a hundred tools — Python, R, Tableau, Power BI, Excel, SAS... which do I learn?<br><strong>Carpenter:</strong> Wrong question! First tell me — <strong>what will you build?</strong> Trend of the river? A graph-instrument (matplotlib/Tableau). A forecast? A statistics-instrument (Python/R). A quick one-page picture? The spreadsheet-knife (Excel). My rule: <strong>whatever tool answers your question in your hand TODAY is the best tool today.</strong> And remember — being an expert on tools is not being an expert on wood.<br><strong>You:</strong> I already know Python and the Django chain — advantage?<br><strong>Carpenter:</strong> A huge one! pandas is wood you already know: a DataFrame is your old SQL table, groupby is your old GROUP BY. In BAN 5013 you won't buy new tools — you'll ask new questions with old tools.</div>
<table class="kv-table">
<tr><th>কাজ</th><th>যন্ত্র</th><th>তোমার ভাণ্ডারে</th></tr>
<tr><td class="hl">Collect / Store</td><td>SQL, APIs, scraping</td><td>✅ MySQL/PostgreSQL, Django ORM</td></tr>
<tr><td class="hl">Clean</td><td>pandas, OpenRefine</td><td>🟡 নতুন — কিন্তু SQL-মন কাজে লাগবে</td></tr>
<tr><td class="hl">Analyze</td><td>Python/R, statsmodels</td><td>✅ Python; 🟡 R = নতুন কিন্তু চেনা যুক্তি</td></tr>
<tr><td class="hl">Visualize</td><td>matplotlib, seaborn, Tableau</td><td>🟡 নতুন হাতিয়ার, পুরনো চোখ</td></tr>
<tr><td class="hl">Communicate</td><td>dashboards, reports</td><td>✅ তোমার রিপোর্ট-লেখা অভ্যাস</td></tr>
</table>
<div class="callout tip"><span class="co-icon">🧰</span><div><strong>টিপ:</strong> কোর্সে সম্ভবত R বা Tableau-তে টান পড়বে — ভয় নেই। যন্ত্র বদলালেও পাইপলাইন-যুক্তি (collect→clean→analyze→visualize→communicate) অটল। এই পাঁচ ধাপ একবার শিখলে যেকোনো যন্ত্রে বসে যাওয়া যায়।</div></div>
<div class="verse">وَأَعِدُّوا لَهُمْ — "প্রস্তুত রাখো..." (কুরআন ৮:৬০) — প্রস্তুতির মধ্যে যন্ত্রও, প্রশ্নও।</div>
<div class="secret-box">🧰 কাঠ দেখে যন্ত্র বেছো, যন্ত্র দেখে কাঠ নয় — প্রশ্ন দেখে টুলচেইন সাজাও: সংগ্রহ→পরিষ্কার→বিশ্লেষণ→দর্শন→বয়ান। পাঁচ ধাপ জানা মানে সব যন্ত্র জানা।</div>`,
  senior: {
    title: "BAN 5013 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> একটা CSV নামিয়ে pandas দিয়ে load→groupby→plot একবার হাতে-হাতে করো; R-এর ছোট্ট পরিচয় (ggplot2-র ধারণা) দেখে রাখো। <strong>কোর্সে:</strong> analytics-ওয়ার্কফ্লো, Python/R, ডেটা-ম্যানিপুলেশন, ড্যাশবোর্ড-টুল। <strong>Artifact:</strong> একটা end-to-end অ্যানালিটিক্স-রিপোর্ট/ড্যাশবোর্ড। <strong>ডিজার্টেশন-সেতু:</strong> ডিজার্টেশনের প্রতিটি টেবিল-ফিগার এই যন্ত্রশাল থেকেই আসবে — এই দরজায় যত নিখুঁত, রিপোর্টে তত শান্তি। <strong>ফাঁদ:</strong> টুল-হপিং (এ সপ্তাহ R, পরের সপ্তাহ Julia!) — এক যন্ত্রে গভীর হও, বাকিগুলো পরে নিজেই শেখা যায়।</p>`
  }
});
// END-DOORS-5-8

// ── দরজা ৬ · দরবারের ওজির ──────────────────
doors.push({
  num: 6,
  icon: "🏛️",
  color: "#7dd3fc",
  name: "দরবারের ওজির",
  subtitle: "The Court's Vizier — IT for Management (DIT 7043)",
  tech: "IT Strategy · Alignment · Business-IT Bridge · Decision Support · Governance",
  spirit: "شُورَى — শূরা: পরামর্শ; আয়োজন ও সিদ্ধান্তে পরামর্শের নীতি",
  secret: "প্রযুক্তি প্রশ্ন নয়, ব্যবসার প্রশ্ন — 'কোন সমস্যা?' না জিজ্ঞেস করা প্রযুক্তির সবচেয়ে বড় অপচয়।",
  recall: {
    q: "Business-IT Alignment কী এবং কেন গুরুত্বপূর্ণ?",
    qen: "What is Business-IT alignment and why does it matter?",
    a: "প্রতিটি IT-বিনিয়োগ ব্যবসার লক্ষ্যের সাথে সরাসরি জুড়ে থাকা — যাতে প্রযুক্তি খরচ না হয়ে কৌশল হয়।",
    aen: "Every IT investment maps directly to a business goal — so technology becomes strategy, not cost."
  },
  story: `<p class="scene-setting">সুলতানের দরবার। ডানে হাতে সেনাপতি, বাঁয়ে কোষাধ্যক্ষ, মাঝে সিংহাসনের ঠিক পাশে — ওজির। সুলতান বললেন, "পূর্ব সীমান্তে দুর্গ বানাব!" সেনাপতি তৎক্ষণাৎ ইট গোনা শুরু করলেন। কোষাধ্যক্ষ খরচের খাতা খুললেন। কিন্তু ওজির প্রশ্ন করলেন: "<strong>দুর্গটা কোন সমস্যার সমাধান?</strong> পূর্বে কি শত্রু এসেছে, নাকি বাণিজ্য-পথ রক্ষা চাই?" দরবার নীরব। সুলতান হাসলেন: "এই প্রশ্নটাই ওজিরের কাজ — আমার ইচ্ছাকে কৌশলে বদলানো।" DIT 7043 — IT for Management — সেই ওজিরের দরবার।</p>
<p class="scene-setting en">The Sultan's court. The general on the right, the treasurer on the left, and beside the throne — the vizier. The Sultan declared: "Build a fortress on the eastern border!" The general began counting bricks at once; the treasurer opened his ledger. But the vizier asked: "<strong>Which problem does this fortress solve?</strong> Has an enemy come from the east, or does the trade route need guarding?" The court fell silent. The Sultan smiled: "That question is the vizier's work — turning my wish into strategy." DIT 7043 — IT for Management — is that vizier's court.</p>
<div class="dialogue"><strong>তুমি:</strong> ওজির-সাহেব, আমি তো কোড লিখি — সিস্টেম বানাই। ম্যানেজমেন্ট শিখব কেন?<br><strong>ওজির:</strong> কারণ তুমি এতদিন সেনাপতি ছিলে — "বানাও!" বললেই বানাতে। এখন থেকে তুমি জিজ্ঞেস করবে: <strong>এই সিস্টেমটা কার কাজ সহজ করবে, কত টাকা বাঁচাবে, কোন ঝুঁকি কমাবে?</strong> মনে আছে? LedgerPilot-এ তুমি লিডার-বোর্ড বানিয়েছিলে — কেন? কারণ বিক্রয়-দলের মনোবল = ব্যবসার লক্ষ্য। ওই "কেন"-এর পথটাই DIT 7043। আর শূরা-নীতি শেখো: সিদ্ধান্তের আগে পরামর্শ — stakeholder-দের কথা না শুনলে সিস্টেম বানলেও কেউ ব্যবহার করবে না।<br><strong>তুমি:</strong> তাহলে কি কোড ছেড়ে দেব?<br><strong>ওজির:</strong> কখনোই না! বরং তুমিই সবচেয়ে বিপজ্জনক ওজির — যে ওজির নিজে তলোয়ার চালাতে জানে। কৌশল বুঝতে-পারা ইঞ্জিনিয়ার = দরবারের সবচেয়ে দুর্লভ রত্ন।</div>
<div class="dialogue en"><strong>You:</strong> Vizier, I write code — I build systems. Why learn management?<br><strong>Vizier:</strong> Because until now you were the general — "build it!" and you built. From now on you ask: <strong>whose work does this system ease, how much money does it save, which risk does it cut?</strong> Remember? You built a leaderboard in LedgerPilot — why? Because the sales team's morale = a business goal. That "why-path" is DIT 7043. And learn the shura principle: consult before deciding — build a system without hearing stakeholders and no one will use it.<br><strong>You:</strong> So I abandon code?<br><strong>Vizier:</strong> Never! You become the most dangerous vizier — one who can wield the sword himself. An engineer who reads strategy is the court's rarest treasure.</div>
<table class="kv-table">
<tr><th>সেনাপতির ভাষা (IT)</th><th>ওজিরের ভাষা (Business)</th></tr>
<tr><td class="hl">"নতুন সার্ভার চাই"</td><td>"ডাউনটাইম প্রতি ঘণ্টায় X টাকা খরচ করছে"</td></tr>
<tr><td class="hl">"রিফ্যাক্টর করতে হবে"</td><td>"নতুন ফিচারের গতি ৩ মাসে ২× হবে"</td></tr>
<tr><td class="hl">"এই ফ্রেমওয়ার্ক পুরনো"</td><td>"নিয়োগ-বাজারে এই স্ট্যাকের লোক পাওয়া কঠিন"</td></tr>
<tr><td class="hl">"আমরা Kubernetes নিতে পারি"</td><td>"৬ মাসের শেখা-খরচ বনাম স্কেল-সুবিধা — কোনটা জেতে?"</td></tr>
</table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফাঁদ-চেতনা:</strong> "প্রযুক্তি-প্রথম" চিন্তা — সর্বশেষ টুল কিনে তারপর ব্যবহার খোঁজা। ওজিরের নিয়ম: সমস্যা-প্রথম, তারপর প্রযুক্তি। উল্টোটা করলে দরবারে টুলের গুদাম, ব্যবসায় শূন্য হাত।</div></div>
<div class="verse">وَأَمْرُهُمْ شُورَى بَيْنَهُمْ — "তাদের কাজ পরস্পর পরামর্শে।" (কুরআন ৪২:৩৮)</div>
<div class="secret-box">🏛️ সেনাপতি বলে "কীভাবে", ওজির জিজ্ঞেস করে "কেন ও কী মূল্যে" — IT ম্যানেজমেন্ট মানে প্রতিটি প্রযুক্তি-সিদ্ধান্তকে ব্যবসার ভাষায় অনুবাদ করা। যে অনুবাদ জানে, সে-ই দরবারের রত্ন।</div>`,
  senior: {
    title: "DIT 7043 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> LedgerPilot/Ipractus-এর এক-পাতার "বিজনেস-কেস" লিখে রাখো: কী সমস্যা, কে ভোক্তা, কী মূল্য। <strong>কোর্সে:</strong> IT strategy, alignment মডেল, governance (COBIT/ITIL-ধারণা), ROI/TCO হিসাব, decision-support। <strong>Artifact:</strong> কোনো সংস্থার জন্য IT-strategy নথি/কেস-স্টাডি। <strong>ডিজার্টেশন-সেতু:</strong> ডিজার্টেশনের problem statement-এর বীজ এখানেই — বাস্তব সংস্থার সমস্যা + ব্যবসায়িক মূল্য = DIT-র আদর্শ গবেষণা-প্রশ্ন। <strong>ফাঁদ:</strong> বাজার-জার্গন মুখস্থ (synergy! digital transformation!) — পরীক্ষায় টিকে, দরবারে নয়; বিপরীত ভাষা-অনুবাদের অনুশীলনই আসল।</p>`
  }
});

// ── দরজা ৭ · ক্রয়-সরাইয়ের দালাল ──────────────────
doors.push({
  num: 7,
  icon: "📜",
  color: "#7dd3fc",
  name: "ক্রয়-সরাইয়ের দালাল",
  subtitle: "The Procurement Broker — IT Procurement Processes (DIT 7053)",
  tech: "Procurement · RFP/RFQ · Vendor Management · TCO · Contract & SLA",
  spirit: "وَفُوا بِالْعُقُودِ — 'চুক্তি পূরণ করো' (কুরআন ৫:১); আমানত-ভিত্তিক লেনদেন",
  secret: "কেনা মানে দাম দেওয়া নয় — ঝুঁকি, কাল, সেবা, প্রস্তাবনা মিলিয়ে চুক্তি বোনা। সস্তার লোভে কেনা দুর্গ বিক্রেতার হাতে থাকে।",
  recall: {
    q: "RFP আর RFQ-তে পার্থক্য কী?",
    qen: "What's the difference between an RFP and an RFQ?",
    a: "RFP = সমাধানের প্রস্তাব চাওয়া — সমস্যা দিই, তুমি পথ বলো; RFQ = নির্দিষ্ট জিনিসের দাম চাওয়া।",
    aen: "RFP = you state the problem, vendors propose solutions; RFQ = the item is fixed, only the price varies."
  },
  story: `<p class="scene-setting">সম্রাটের ক্রয়-সরাই। সামনে দুই বণিক: একজন কাগজ বেচছে, একজন ঘোড়া। মাঝে দাঁড়িয়ে দালাল — খাতায় শত সরবরাহকারীর নাম, দাম, সেবার ইতিহাস। রাজকোষ থেকে হুকুম এলো: "শত ঘোড়া চাই!" দালাল প্রশ্ন করলেন: "<strong>কেন চাই?</strong> যুদ্ধের জন্য না ডাক-ঘোড়ার জন্য? কবে চাই? কী শর্তে — যুদ্ধে ভাঙলে কে বদলে দেবে?" কোষাধ্যক্ষ বিরক্ত: "দামই বলো না!" দালাল হাসলেন: "দাম তো খাতার শেষ লাইন; চুক্তির প্রথম লাইন নয়।" এই সরাই DIT 7053 — IT Procurement Processes।</p>
<p class="scene-setting en">The Emperor's procurement lodge. Two merchants out front — one sells paper, one sells horses. Between them stands the broker — a ledger of a hundred suppliers, prices, service histories. The treasury decreed: "We need a hundred horses!" The broker asked: "<strong>Why?</strong> For war or for post-riders? By when? On what terms — if one breaks in battle, who replaces it?" The treasurer frowned: "Just tell me the price!" The broker smiled: "Price is the ledger's last line — not the contract's first." This lodge is DIT 7053 — IT Procurement Processes.</p>
<div class="dialogue"><strong>তুমি:</strong> দালাল-সাহেব, আমি তো ওপেন-সোর্সের লোক — Django, Vue, Postgres সব ফ্রি! Procurement শিখব কেন?<br><strong>দালাল:</strong> ফ্রি শব্দটার দাম হিসাব করেছ? "ফ্রি" মানে লাইসেন্স-ফ্রি, খরচ-মুক্ত নয় — তোমার বেতন, শেখার সময়, মেরামতের রাত = TCO (Total Cost of Ownership)। আর সত্যিকারের দুনিয়ায় সব ফ্রি নয়: ক্লাউড-বিল, সাপোর্ট-চুক্তি, লাইসেন্স-নবায়ন, নির্ভেজাল vendor lock-in। তুমি একদিন ওজির হলে (দরজা ৬!) সিদ্ধান্ত নেবে: বানাবো না কিনব? build-vs-buy — এই প্রশ্নের উত্তরই procurement-এর প্রাণ।<br><strong>তুমি:</strong> আর SLA জিনিসটা?<br><strong>দালাল:</strong> সেবার চুক্তি-দলিল: বিক্রেতা কত % সময় চালু থাকবে (uptime), ভাঙলে কত সময়ে সারাবে (response time), না পারলে কী শাস্তি (penalty)। মনে আছে তোমার DO সার্ভারের 503-রাত? SLA না থাকলে সেই রাতে তুমি কেবল চিৎকার করতে পারো; SLA থাকলে — ক্ষতিপূরণ দাবি করতে পারো।</div>
<div class="dialogue en"><strong>You:</strong> Broker, I'm an open-source man — Django, Vue, Postgres, all free! Why learn procurement?<br><strong>Broker:</strong> Have you priced the word "free"? Free means license-free, not cost-free — your salary, learning time, repair nights = TCO. And the real world isn't all free: cloud bills, support contracts, license renewals, pure vendor lock-in. The day you become vizier (Door 6!) you decide: build or buy? — that question is procurement's soul.<br><strong>You:</strong> And this SLA thing?<br><strong>Broker:</strong> The service contract: uptime %, repair speed, penalty for failure. Remember your DO server's 503-night? Without an SLA you could only shout; with one — you claim damages.</div>
<table class="kv-table">
<tr><th>দলিল</th><th>মানে</th><th>কখন</th></tr>
<tr><td class="hl">RFI</td><td>তথ্য চাও — বাজারে কী আছে</td><td>পথ অন্ধকার</td></tr>
<tr><td class="hl">RFP</td><td>প্রস্তাব চাও — সমস্যা দিই, পথ বলো</td><td>সমস্যা জানা, পথ নয়</td></tr>
<tr><td class="hl">RFQ</td><td>দাম চাও — জিনিস নির্দিষ্ট</td><td>পথ জানা, দাম নয়</td></tr>
<tr><td class="hl">SLA</td><td>সেবার শর্তনামা — uptime, response, penalty</td><td>চুক্তির পর, সম্পর্কের আয়ু</td></tr>
</table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফাঁদ-চেতনা:</strong> সস্তা দামে কেনা, কঠিন শর্তে বাঁধা — প্রথম বছর সস্তা, দ্বিতীয় বছর নবায়ন-দাম দ্বিগুণ। Vendor lock-in মানে এই: দুর্গ তোমার, চাবি বিক্রেতার কাছে।</div></div>
<div class="verse">وَفُوا بِالْعُقُودِ — "চুক্তিসমূহ পূরণ করো।" (কুরআন ৫:১)</div>
<div class="secret-box">📜 দাম দলিলের শেষ লাইন, প্রথম নয় — প্রয়োজন → RFI → RFP → RFQ → চুক্তি → SLA: এই সিঁড়ি ভালোবেসে নামলে কেনা জিনিস নয়, কেনা নিশ্চয়তা।</div>`,
  senior: {
    title: "DIT 7053 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> একবার নিজের স্ট্যাকের TCO হিসাব করো (লাইসেন্স $0 + শেখা-সময় + হোস্টিং + রক্ষণাবেক্ষণ); build-vs-buy-এর এক প্যারাগ্রাফ লিখে রাখো। <strong>কোর্সে:</strong> procurement lifecycle, RFP/RFQ লেখা, vendor evaluation, চুক্তি-আলোচনা, SLA, TCO/ROI। <strong>Artifact:</strong> একটা mock-RFP বা vendor-evaluation ম্যাট্রিক্স। <strong>ডিজার্টেশন-সেতু:</strong> SME-দের ক্লাউড-গ্রহণের procurement-সিদ্ধান্ত, বা open-source adoption-এর TCO-মডেল — দুটোই করণীয় গবেষণা-প্রশ্ন। <strong>ফাঁদ:</strong> কাগজ-কারিগরি (চুক্তির ভাষা না পড়ে সই করা) — ইঞ্জিনিয়ারদের ক্লাসিক ক্ষত; আইনি-শর্ত পড়াও প্রযুক্তি-দক্ষতা।</p>`
  }
});

// ── দরজা ৮ · কাফেলার নায়ক ──────────────────
doors.push({
  num: 8,
  icon: "🐪",
  color: "#7dd3fc",
  name: "কাফেলার নায়ক",
  subtitle: "The Caravan Captain — IT Project Management (DIT 7063)",
  tech: "Project Management · Scope-Time-Cost · WBS · Gantt · Risk Register · Agile vs Waterfall",
  spirit: "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ — 'আল্লাহ পছন্দ করেন, কেউ কাজ করলে তা নিখুঁতভাবে করে' (হাদিস, বায়হাকি)",
  secret: "প্রজেক্ট মানে তালিকা-রাস্তা নয় — ত্রিভুজের খেলা: স্কোপ-সময়-খরচের এক কোণ টানলে অন্য দুই কোণ চিৎকার করে।",
  recall: {
    q: "প্রজেক্ট-ম্যানেজমেন্টের ত্রিভুজ (triple constraint)-এর তিন কোণ কী?",
    qen: "What are the three corners of the project management triangle?",
    a: "Scope (কী কাজ), Time (কতদিন), Cost (কত খরচ) — একটা বদলালে অন্তত একটা বদলাতেই হয়।",
    aen: "Scope, Time, Cost — change one, at least one other must move."
  },
  story: `<p class="scene-setting">মক্কার পথে বিশাল হজ্জ-কাফেলা। সামনে পানি-বাহক, পেছনে চিকিৎসক, মাঝে শত মুসাফির। কাফেলার নায়কের হাতে এক চামড়ার খাতা: কোন সরাইয়ে রাত, কোন কুয়োতে পানি, কে অসুস্থ হলে কে পাহারা দেবে। এক তরুণ মুসাফির জিজ্ঞেস করলো, "নায়ক, আমরা কবে পৌঁছাবো?" নায়ক বললেন, "উত্তরটা তিনটা প্রশ্নের ভেতরে: <strong>কত মুসাফির (scope), কত দিন (time), কত উট (cost)</strong>। তিনটার একটাও না জেনে তারিখ বলা মানে মরুতে প্রতিশ্রুতি — বালির ওপর লেখা।" এই কাফেলার খাতাই DIT 7063 — IT Project Management।</p>
<p class="scene-setting en">On the road to Makkah, a vast Hajj caravan. Water-carriers in front, a physician at the rear, a hundred pilgrims between. In the captain's hand, a leather ledger: which caravanserai for the night, which well for water, who guards the sick. A young pilgrim asked, "Captain, when do we arrive?" The captain said, "The answer lives inside three questions: <strong>how many pilgrims (scope), how many days (time), how many camels (cost)</strong>. Naming a date without knowing all three is a promise in the desert — written on sand." This caravan's ledger is DIT 7063 — IT Project Management.</p>
<div class="dialogue"><strong>তুমি:</strong> নায়ক, আমি তো একাই সারাজীবন শিপ করেছি — রাতে কোড, সকালে ডেপ্লয়। এটাও প্রজেক্ট ম্যানেজমেন্ট না?<br><strong>কাফেলার নায়ক:</strong> এক-মুসাফিরের হাঁটা আর শত-মুসাফিরের কাফেলা এক নয়! একা হলে ত্রিভুজ তোমার মাথার ভেতরে; দল হলে তা টেবিলে বসে — তখন চাই WBS (কাজকে উটের বোঝার মত ভাগ), Gantt (কোন সরাই কোন রাতে), risk register (কোন পথে ডাকাত, কী করব যদি আসে)। তুমি কি কখনো scope creep-এ ভুগেছ? — বস বলল 'আরেকটা ছোট ফিচার', আর সেই 'ছোট' তিন সপ্তাহ খেলো? ওটাই ত্রিভুজের অভিশাপ: scope বাড়লো, কিন্তু time/cost কেউ বাড়ালো না।<br><strong>তুমি:</strong> তাহলে Agile না Waterfall?<br><strong>কাফেলার নায়ক:</strong> পথ চেনা হলে বড় কাফেলা সোজা চলে (Waterfall: ধাপে ধাপ, নথি-সহ); পথ অচেনা হলে ছোট দলে ভাগ হয়ে টহল দাও (Agile: স্প্রিন্টে স্প্রিন্টে, প্রতি দুই সপ্তাহে ভুল শুধরে নাও)। তোমার Ipractus-এর স্প্রিন্ট-রিৎম তো Agile-ই — এখন তার নাম-নামার্থ শিখে নাও। আর ইহসান-নীতি মনে রেখো: কাজ এমন করো যেন প্রতিটি ডেপ্লয় তোমার শেষ ডেপ্লয় — নিখুঁত।</div>
<div class="dialogue en"><strong>You:</strong> Captain, I've shipped solo all my life — code at night, deploy at dawn. Isn't that project management?<br><strong>Captain:</strong> One pilgrim walking is not a hundred-pilgrim caravan! Solo, the triangle lives in your head; with a team it sits on the table — then you need WBS (split work like camel-loads), Gantt (which inn which night), a risk register (which road has bandits, and the plan if they come). Ever suffered scope creep? — the boss said "one tiny feature," and that 'tiny' ate three weeks? That is the triangle's curse: scope grew, but time/cost never did.<br><strong>You:</strong> Then Agile or Waterfall?<br><strong>Captain:</strong> Known road → one big caravan marches straight (Waterfall: staged, documented); unknown road → split into scouting parties (Agile: sprint by sprint, correcting every two weeks). Your Ipractus sprint rhythm IS Agile — now learn its name and grammar. And keep the ihsan rule: work as if each deploy were your last — flawless.</div>
<table class="kv-table">
<tr><th>হাতিয়ার</th><th>কাফেলায়</th><th>তোমার প্রজেক্টে</th></tr>
<tr><td class="hl">WBS</td><td>বোঝা উটে ভাগ</td><td>এপিক → টাস্ক → সাবটাস্ক</td></tr>
<tr><td class="hl">Gantt</td><td>সরাই-তালিকা: কোন রাত কোথায়</td><td>টাইমলাইন, dependencies, critical path</td></tr>
<tr><td class="hl">Risk Register</td><td>ডাকাত-তালিকা + প্রতিকার</td><td>ঝুঁকি × সম্ভাবনা × পরিকল্পনা</td></tr>
<tr><td class="hl">Burndown</td><td>বাকি-মাইল খাতা</td><td>স্প্রিন্টের বাকি-পয়েন্ট গ্রাফ</td></tr>
</table>
<div class="callout tip"><span class="co-icon">🎯</span><div><strong>টিপ:</strong> DIT-র প্রতিটি কোর্স একটা মিনি-প্রজেক্ট — এই দরজার হাতিয়ারগুলো আজই ব্যবহার করো: নিজের ১৮-দরজার যাত্রাটাই একটা প্রজেক্ট! Scope = ৬০ ক্রেডিট, Time = সেমিস্টার-প্ল্যান, Cost = টিউশন+সময়। নিজের WBS এঁকে ফেলো।</div></div>
<div class="verse">وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ — "সাধ্যমত প্রস্তুতি রাখো।" (কুরআন ৮:৬০) — প্রস্তুতি = পরিকল্পনার ইবাদত।</div>
<div class="secret-box">🐪 ত্রিভুজ মনে রেখো: scope-time-cost — এক কোণ টানলে বাকি দুই কোণ চিৎকার করে; চিৎকার না শুনে যে তারিখ দেয়, সে বালিতে লেখে। WBS + Gantt + Risk Register = নায়কের তিন হাতিয়ার।</div>`,
  senior: {
    title: "DIT 7063 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> নিজের DIT-যাত্রার এক-পাতার WBS + সেমিস্টার-Gantt এঁকে ফেলো (উপরের টিপ); PMBOK-এর ৫ প্রসেস-গ্রুপের নামগুলো একবার পড়ে রাখো। <strong>কোর্সে:</strong> triple constraint, WBS, Gantt/critical path, risk register, Agile (Scrum) vs Waterfall, stakeholder-যোগাযোগ। <strong>Artifact:</strong> একটা সম্পূর্ণ প্রজেক্ট-প্ল্যান (চার্ট + risk register সহ)। <strong>ডিজার্টেশন-সেতু:</strong> ডিজার্টেশন নিজেই ১৮-ক্রেডিটের মেগা-প্রজেক্ট — এই দরজার হাতিয়ার ছাড়া DIT 9006/7016/7026 সামলানো কঠিন; অনেকের ABD (all-but-dissertation) অবস্থার শিকড় দুর্বল প্রজেক্ট-পরিকল্পনায়। <strong>ফাঁদ:</strong> টুল-পূজা (Jira-র সব ফিচার!) — মাস্টাররা খাতা দিয়েই কাফেলা চালান; পদ্ধতি মাথায় থাকলে টুল যেকোনোটা চলে।</p>`
  }
});
// END-DOORS-5-8
