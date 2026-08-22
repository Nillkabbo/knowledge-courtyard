// ════════════════════════════════════════
// Book 57 · ষাট ক্রেডিটের রিহলা — Doors 1–4
// ════════════════════════════════════════
const doors = [];

// ── দরজা ১ · প্রস্থানের সন্ধ্যা ──────────────────
doors.push({
  num: 1,
  icon: "🎒",
  color: "#5eead4",
  name: "প্রস্থানের সন্ধ্যা",
  subtitle: "The Evening of Departure — What You Have Signed Up For",
  tech: "DIT vs PhD · 60-Credit Map · Hybrid Rhythm",
  spirit: "رِحْلَة — রিহলা: জ্ঞানের উদ্দেশ্যে সফর",
  secret: "ষাট ক্রেডিট = সতেরো স্টেশন + এক মজলিস। মানচিত্র হাতে থাকলে পথ কখনো অন্ধকার নয়।",
  recall: {
    q: " Trine DIT-র ষাট ক্রেডিট তিন ভাগে কীভাবে ভাগ হয়েছে?",
    qen: "How are Trine DIT's sixty credits divided?",
    a: "৯টি কোর কোর্স (২৭ ক্রেডিট) + ৫টি রিসার্চ কোর্স (১৫ ক্রেডিট) + ৩টি এপ্লাইড-রিসার্চ কোর্স (১৮ ক্রেডিট) = ৬০।",
    aen: "9 core courses (27 cr) + 5 research courses (15 cr) + 3 applied-research courses (18 cr) = 60."
  },
  story: `<p class="scene-setting">১৩২৫ সালের জুন, টানজিয়ার। একুশ বছরের ইবনে বতুতা বাড়ির দরজায় দাঁড়িয়ে — পিঠে ঝুলি, হাতে কাফেলার তালিকা। তাঁর প্রথম কাজ কোনটি জানো? পথে বেরোনো নয় — <strong>রুট আঁকা।</strong> কোন শহরে কোন মাস্টার, কোন সরাইয়ে কত দিন, কোন পথে ডাকাত কম। পরের তিরিশ বছর এই কাগজটাই তাঁর আসল সঙ্গী। আজ তুমিও সেই সন্ধ্যায় দাঁড়িয়ে — Trine University-র Doctor of Information Technology-এ ভর্তি হয়েছ। প্রথম কাজ একই: মানচিত্রটা চিনে নেওয়া।</p>
<p class="scene-setting en">June 1325, Tangier. Twenty-one-year-old Ibn Battuta stands at his door — satchel on back, caravan manifest in hand. His first act? Not stepping out — <strong>drawing the route.</strong> Which master in which city, which caravanserai for how many nights, which road has fewer bandits. For thirty years that paper remained his true companion. Tonight you stand at that same threshold — enrolled in Trine University's Doctor of Information Technology. The first act is the same: know the map.</p>
<div class="dialogue"><strong>তুমি:</strong> ভাই, শুনলাম ডক্টরেট — কিন্তু DIT আর PhD-তে তফাতটা কী?<br><strong>মুসাফির-গাইড:</strong> ভালো প্রশ্ন — এই তফাতটাই তোমার পথের প্রথম মোড়। <strong>PhD</strong> গবেষক বানায়: নতুন তত্ত্ব আবিষ্কারের দিকে, অ্যাকাডেমিয়ার পথে। <strong>DIT</strong> বানায় <em>practitioner-scholar</em> — যে বাস্তব জগতের IT-সমস্যা গবেষণা দিয়ে সারায়। ইবনে বতুতার মতো ভাবো: PhD যেন কাগজে-কালমে মুনাজ্জিম; DIT যেন রাস্তা-ঘাট চেনা কাজি — বইও পড়ে, বাজারও চেনে।<br><strong>তুমি:</strong> তাহলে আমার পুরনো কাজ — Django, Vue, React, DevOps — এগুলো কি বাদ পড়ে যাবে?<br><strong>মুসাফির-গাইড:</strong> বাদ? বরং এগুলোই তোমার <strong>সানদ</strong> — যাত্রার আগের সনদপত্র! DIT-র পুরো ভাবনাই হলো অভিজ্ঞতাকে গবেষণায় বদলানো। তোমার LedgerPilot আর Ipractus — এই দুই কারিগরখানাই হবে ডিজার্টেশনের কাঁচামাল।</div>
<div class="dialogue en"><strong>You:</strong> I heard "doctorate" — but what's the difference between a DIT and a PhD?<br><strong>Guide:</strong> The first turn on your road. A <strong>PhD</strong> makes a researcher: new theory, the academic path. A <strong>DIT</strong> makes a <em>practitioner-scholar</em> — one who heals real-world IT problems with research. Think: the PhD is the astronomer with pen and paper; the DIT is the road-wise judge — reads books AND knows the bazaar.<br><strong>You:</strong> So my old work — Django, Vue, React, DevOps — discarded?<br><strong>Guide:</strong> Discarded? They are your <strong>ijazas</strong> — certificates earned before departure! The whole DIT idea is turning experience into research. Your LedgerPilot and Ipractus workshops become your dissertation's raw material.</div>
<table class="kv-table">
<tr><th>স্টেশন-গুচ্ছ</th><th>কোর্স</th><th>ক্রেডিট</th><th>তোমার যাত্রায় মানে</th></tr>
<tr><td class="hl">কোর-পর্ব (৯ কোর্স)</td><td>IS 5203, IS 5403, IS 5213, BAN 5013, DIT 7043–7083</td><td>২৭</td><td>নয় শহরে নয় মাস্টার — নেটওয়ার্ক থেকে পাইথন</td></tr>
<tr><td class="hl">রিসার্চ-পর্ব (৫ কোর্স)</td><td>RSH 7093, 8003, 8013, 8023, 8033</td><td>১৫</td><td>পরিসংখ্যান-দুর্গ ও চার মিনার — পরিসংখ্যান, সংখ্যা, মানুষ, নকশা, পদ্ধতি</td></tr>
<tr><td class="hl">অ্যাপ্লাইড-রিসার্চ ত্রয়ী (৩ কোর্স)</td><td>DIT 9006, 9016, 9026</td><td>১৮</td><td>প্রস্তাবনা → গবেষণা-প্রকল্প → সমাপ্তি</td></tr>
<tr><td class="hl">মজলিস (এই বইয়ের ১৮ নং দরজা)</td><td>—</td><td>—</td><td>৬টি program outcome — সেখানেই সব স্টেশন মিলবে</td></tr>
</table>
<div class="callout info"><span class="co-icon">🕐</span><div><strong>হাইব্রিড ছন্দ:</strong> এই প্রোগ্রাম hybrid — কোর্স অনলাইনে চলে, সেমিস্টারে residency মানে ক্যাম্পাসে হাজিরা। কাজ আর পড়া একসাথে — অর্থাৎ সপ্তাহের দিনে তুমি ইঞ্জিনিয়ার, সন্ধ্যায় গবেষক। F-1 hybrid মানে এই দ্বৈত-জীবনই তোমার নতুন স্বভাব।</div></div>
<div class="dialogue"><strong>তুমি:</strong> রাতের সেই টেবিলে বাবা জিজ্ঞেস করলেন — PhD না DIT, পার্থক্যটা আসলে কী?<br><strong>বাবা (প্রবীণ কাফেলা-নেতা):</strong> দুটোই ডক্টর, কিন্তু দুই দিকে মুখ করা। <strong>PhD-গবেষক জিজ্ঞেস করে "জানার সীমানা কোথায়?"</strong> — তাঁর ফল একটা নতুন তত্ত্ব, পরীক্ষাগার-জন্ম। <strong>DIT-গবেষক জিজ্ঞেস করে "অফিসের ব্যথা কোথায়?"</strong> — তাঁর ফল একটা কার্যকর সমাধান, কর্মক্ষেত্র-জন্ম। তুমি ১০ বছর সিস্টেম বানিয়েছ — তোমার প্রশ্নগুলো স্বাভাবিকভাবেই দ্বিতীয় জাতের। practitioner-scholar শব্দটার ওজন এখানেই: অনুশীলনকারীর হাত + পণ্ডিতের চোখ।<br><strong>তুমি:</strong> তাহলে কি তত্ত্ব শিখতে হবে না?<br><strong>বাবা:</strong> শিখবে — কিন্তু তত্ত্ব তোমার কাছে উপাদান, রাজধানী নয়। প্রতিটি তত্ত্ব জিজ্ঞেস করবে "আমাকে কোন বাস্তব সমস্যায় নামাবে?" — এই প্রশ্নটাই DIT-ছাত্রের নিশানা।</div>
<div class="dialogue en"><strong>You:</strong> At that night-table, father asked — PhD or DIT, what IS the difference?<br><strong>Father (elder caravan-leader):</strong> Both are doctorates, but facing two directions. <strong>The PhD-researcher asks "where is the frontier of knowledge?"</strong> — the fruit is new theory, laboratory-born. <strong>The DIT-researcher asks "where is the organization's pain?"</strong> — the fruit is a working solution, workplace-born. You have built systems for ten years; your questions are naturally of the second kind. That is the weight of "practitioner-scholar": a practitioner's hands + a scholar's eyes.<br><strong>You:</strong> So no theory?<br><strong>Father:</strong> You will learn it — but theory is your material, not your capital. Every theory will ask you "which real problem do you deploy me on?" — that question is the DIT student's compass.</div>
<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ডিগ্রি-সংগ্রাহক মন</div>৬০ ক্রেডিট = জমানোর জিনিস। কোর্স পার হলে ভুলে যাও; শেষে একটা সার্টিফিকেট, শূন্য প্রশ্ন। পাঁচ বছর পর হাতে যা থাকে: ট্রান্সক্রিপ্ট।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ প্রশ্ন-সংগ্রাহক মন</div>৬০ ক্রেডিট = ৬০টা প্রশ্ন-বীজ বোনার মাঠ। প্রতি কোর্সে অন্তত একটা "এটা আরও ভালোভাবে করা যেত" খাতায় লেখা। পাঁচ বছর পর হাতে যা থাকে: একটা পাকা গবেষণা-প্রশ্ন + তার উত্তরের গ্রন্থ।</div>
</div>
<div class="code-block">🗓️ হাইব্রিড-সপ্তাহের ছাঁচ (নিজের ক্যালেন্ডারে বসাও):
সোম–বৃহি  ২০:৩০–২২:০০  কাফেলা-সময় (কোর্স-পাঠ: ভিডিও → নোট → কুইজ)
শুক্র      ২১:০০–২২:৩০  সাপ্তাহিক-জমা (অ্যাসাইনমেন্ট জমা দেওয়ার রাত)
শনি      ০৯:০০–১৩:০০  শনি-ব্লক (গভীর-কাজ: প্রজেক্ট + লেখা + পরিবার-সময় পরে)
রবি      —            বিশ্রাম-দিন (পুড়ে-যাওয়া ঠেকানোর নিয়ম, লঙ্ঘন নয়)
নিয়ম: শনি-ব্লক কখনো সপ্তাহের কাজ-ব্যথা সারতে খরচ হবে না — সেটা রিহলার রাজধানী।</div>
<div class="stat-grid">
  <div class="stat-card"><div class="sc-num">৬০</div><div class="sc-label">ক্রেডিট — পাঁচ বছরের মাইল</div></div>
  <div class="stat-card"><div class="sc-num">১৭</div><div class="sc-label">কোর্স (৯+৫+৩)</div></div>
  <div class="stat-card"><div class="sc-num">১০</div><div class="sc-label">টার্ম (Fall 2026 → Spring 2031)</div></div>
  <div class="stat-card"><div class="sc-num">১</div><div class="sc-label">নিয়ম — প্রতি কোর্সে এক প্রশ্ন-বীজ</div></div>
</div>

<ul class="checklist"><li>ক্যাটালগ-পেজ বুকমার্ক করো; ৯+৫+৩ ভাগটা এক পাতায় হাতে-এঁকে দেওয়ালে টাঙাও</li><li>Academic calendar খুলে আগামী দুই residency-র তারিখ নিজের ক্যালেন্ডারে লিখো</li><li>প্রতিদিনের ৯০-মিনিট "কাফেলা-সময়" (রাত ৮:৩০–১০:০০) বরাদ্দ দাও — ছুটির দিনে শনি-ব্লক</li></ul><div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 5 (Seed of Learning — কীভাবে শিখলে থাকে, ৯ দরজা) রিহলা-ছন্দ বসানোর প্রথম সঙ্গী; আর Book 21 (Researcher’s Mind — ১০ দরজা) দেখাবে ছাত্র-মন থেকে গবেষক-মনে রূপান্তর কেমন দেখতে হয়।</div></div>
<div class="verse">وَقُل رَّبِّ زِدْنِي عِلْمًا — "বলো, হে আমার রব, আমার জ্ঞান বাড়িয়ে দাও।" (কুরআন ২০:১১৪)</div>
<div class="secret-box">🎒 মানচিত্র আগে, পা পরে — ৬০ ক্রেডিটের তিন-ভাগ রুট মুখস্থ করো, তারপর প্রথম স্টেশনে হাঁটো। কারণ যে মুসাফির পুরো মানচিত্র জানে, তার কাছে প্রতিটি স্টেশন = গন্তব্যের এক ধাপ, নিঃসঙ্গতা নয়।</div>`,
  senior: {
    title: "যাত্রার আগের রাত — করণীয় তালিকা",
    body: `<p><strong>প্রস্তুতি:</strong> ট্রান্সক্রিপ্ট, কোর্স-প্ল্যানার, ক্যাটালগ-বুকমার্ক রাখো; ৯+৫+৩ ভাগটা এক পাতায় এঁকে দেওয়ালে টাঙাও। <strong>Artifact (এই দরজার):</strong> নিজের হাতে-আঁকা রিহলা-মানচিত্র + residency-তারিখসহ দুই-সেমিস্টারের ক্যালেন্ডার। <strong>Hybrid বাস্তবতা:</strong> সপ্তাহে ২-৩ কোর্সের বরাদ্দ (work-night rhythm), residency-র তারিখ আগেই ক্যালেন্ডারে। <strong>তোমার ঝুলি:</strong> ১০+ বছরের full-stack + DevOps অভিজ্ঞতা — DIT-র আসল ক্যাপিটাল; practitioner-scholar মানে তোমার দিনের কাজই গবেষণার উপাদান। <strong>পুরো রিহলায় এই দরজার সেতু:</strong> প্রতিটি পরবর্তী স্টেশন এই মানচিত্রেরই একটা পথ — মানচিত্র হাতে থাকলে প্রতিটি কোর্সে "আমি কোথায়" প্রশ্নের উত্তর প্রস্তুত। <strong>ফাঁদ:</strong> "প্রথম সেমিস্টারে সব কোর্স নিয়ে নিই" — না; কাজ+পড়ার ভারসাম্য প্রথম টার্মেই বসাও।</p>`
  }
});

// ── দরজা ২ · পথরক্ষকের দলিল ──────────────────
doors.push({
  num: 2,
  icon: "🌐",
  color: "#5eead4",
  name: "পথরক্ষকের দলিল",
  subtitle: "The Road-Keeper's Register — Network Management (IS 5203)",
  tech: "Network Management · SNMP · Monitoring · QoS · FCAPS",
  spirit: "طَرِيق آمِين — তারিক-আমিন: নিরাপদ পথ",
  secret: "নেটওয়ার্ক ম্যানেজমেন্ট = FCAPS। যে রাস্তার হিসাব রাখে, তার রাস্তা কখনো পুরো অন্ধকার হয় না।",
  recall: {
    q: "FCAPS মডেলের পাঁচ দায়িত্ব কী কী?",
    qen: "What are the five duties of the FCAPS model?",
    a: "Fault (দোষ), Configuration (রূপ), Accounting (হিসাব), Performance (কর্মক্ষমতা), Security (নিরাপত্তা) — ISO মডেলের পাঁচ স্তম্ভ।",
    aen: "Fault, Configuration, Accounting, Performance, Security — the five pillars of the ISO model."
  },
  story: `<p class="scene-setting">মরু-পথের মোড়ে এক পথরক্ষকের কুঠির। বাইরে থেকে একটা কুঠির বেশি কিছু নয় — ভেতরে ঢুকো। দেয়ালে পুরো মরু-রুটের মানচিত্র: কোন কুয়ো শুকিয়েছে (fault), কোন পথ আজ বন্ধ (configuration), কোন কাফেলা কাল কত টন মাল টানলো (accounting), কোন রাস্তায় বালি জমে ধীর (performance), কোথায় ডাকাত দেখা গেছে (security)। পথরক্ষক বলেন — "আমি রাস্তা বানাইনি, আমি রাস্তার <strong>হিসাব</strong> রাখি। রাস্তা যেদিন নিজের হিসাব হারায়, সেদিনই কাফেলা হারায়।" এই কুঠিরই নাম IS 5203 — Network Management।</p>
<p class="scene-setting en">At a desert crossroads, a road-keeper's hut. From outside, just a hut — step in. On the wall, a map of the entire desert route: which well has dried (fault), which road is closed today (configuration), which caravan hauled how many tons yesterday (accounting), where sand slows the wheels (performance), where bandits were seen (security). The keeper says — "I don't build roads; I keep the road's <strong>ledger</strong>. The day the road loses its ledger, the caravans get lost." This hut is IS 5203 — Network Management.</p>
<div class="dialogue"><strong>তুমি:</strong> চাচা, আমি তো রাস্তা বানাই — সার্ভার, ডকার, UFW, লোড-ব্যালেন্সার। এখন শুধু হিসাব রাখব?<br><strong>পথরক্ষক:</strong> বানানো আর রাখা — দুটোই এক কাফেলার দুই লাগাম। তুমি ব্লেড ঘষো না, তবু ডকারের প্রতিটি কনটেইনার তোমার কুয়ো: কোনটা শুকাচ্ছে (container CPU 4.0-এর ওপরে গেলে 503!), কোন পথ বন্ধ (iptables DOCKER-USER), কে কত টানলো (bandwidth), কোথায় ডাকাত (port scan)। FCAPS শেখো — তোমার DO-সার্ভারগুলোর জন্য এর চেয়ে সুন্দর দলিল নেই।<br><strong>তুমি:</strong> এই হিসাব কি ডিজার্টেশনে কাজে লাগবে?<br><strong>পথরক্ষক:</strong> "মাল্টি-সার্ভার ডেপ্লয়মেন্টে SNMP-ভিত্তিক অ্যানোমালি ডিটেকশন" — শুনছো? তোমার প্রোডাকশন সার্ভারগুলোই ল্যাব।</div>
<div class="dialogue en"><strong>You:</strong> Uncle, I build roads — servers, Docker, UFW, load balancers. Now I only keep ledgers?<br><strong>Road-keeper:</strong> Building and keeping — two reins of one caravan. You may not shoe camels, but every Docker container is your well: which is drying (container CPU over 4.0 → 503!), which path is blocked (iptables DOCKER-USER), who hauled how much (bandwidth), where the bandits are (port scans). Learn FCAPS — there is no finer register for your DO servers.<br><strong>You:</strong> Will this ledger help my dissertation?<br><strong>Road-keeper:</strong> "SNMP-based anomaly detection in multi-server deployments" — hear that? Your production servers are your lab.</div>
<table class="kv-table">
<tr><th>FCAPS</th><th>মরু-কুঠির</th><th>নেটওয়ার্কের ভাষায়</th><th>তোমার সরঞ্জাম</th></tr>
<tr><td class="hl">F — Fault</td><td>শুকনো কুয়ো</td><td>লিংক ডাউন, ইন্টারফেস এরর</td><td>uptime চেক, log, alert স্ক্রিপ্ট</td></tr>
<tr><td class="hl">C — Configuration</td><td>আজকের বন্ধ পথ</td><td>রাউটার/সুইচ কনফিগ ব্যবস্থাপনা</td><td>Ansible, git-এ কনফিগ-রেপো</td></tr>
<tr><td class="hl">A — Accounting</td><td>কাফেলার মালপত্র</td><td>ট্রাফিক হিসাব, ব্যবহারের দলিল</td><td>NetFlow, vnStat</td></tr>
<tr><td class="hl">P — Performance</td><td>বালি-জমা ধীর রাস্তা</td><td>লেটেন্সি, জিটার, প্যাকেট-লস</td><td>ping, mtr, smokeping</td></tr>
<tr><td class="hl">S — Security</td><td>ডাকাতের খবর</td><td>আক্রমণ-সনাক্তকরণ, অ্যাক্সেস-নিয়ন্ত্রণ</td><td>UFW, fail2ban, TLS</td></tr>
</table>
<div class="callout tip"><span class="co-icon">🔧</span><div><strong>টিপ:</strong> FCAPS মুখস্থের বদলে চেনো: তোমার DO সার্ভারে <code>docker stats</code> = কুয়োর পানির লেভেল; <code>vnstat</code> = কাফেলার মালপত্র; <code>iptables -L</code> = বন্ধ-পথের তালিকা। যে টুল ব্যবহার করছ, সেটাই সেরা শিক্ষক।</div></div>
<div class="dialogue"><strong>তুমি:</strong> পথরক্ষক-সাহেব, FCAPS শুনলাম — কিন্তু বাস্তবে নেটওয়ার্ক-টিম তো সারাদিন আগুন নেভায়। শৃঙ্খলা কোথায়?<br><strong>পথরক্ষক:</strong> আগুন-নেভানো হলো Fault-এর একটা অংশ মাত্র — এবং সবচেয়ে দামি অংশ। আসল খেলা আগুন লাগার আগে: <strong>Configuration</strong> (কোন ডিভাইসে কোন সেটিং — লিখিত, সংস্করণ-সহ), <strong>Accounting</strong> (কে কত ব্যান্ডউইথ খেলো — বিল ও পরিকল্পনার ভিত্তি), <strong>Performance</strong> (লেটেন্সি-গল্প: গড় নয়, ৯৫তম-শতকরা দেখো), <strong>Security</strong> (কে ঢুকতে পারে, কে পারে না — লিখিত তালিকা)। পাঁচটার একটাও অবহেলা করলে বাকি চারটা মিলে রাত-জাগা উপহার দেয়।<br><strong>তুমি:</strong> SNMP আর টেলিমেট্রির তফাত?<br><strong>পথরক্ষক:</strong> SNMP হলো <strong>ডাকঘর</strong> — ম্যানেজার জিজ্ঞেস করে, এজেন্ট উত্তর দেয় (MIB-খাতার OID-পাতা থেকে)। টেলিমেট্রি হলো <strong>পাখি</strong> — ডিভাইস নিজেই নিরন্তর পাঠায়। পুরনো ডাকঘর এখনো দুনিয়ার অর্ধেক চালায়; নতুন পাখি মেঘ-যুগের। দুটোই চিনো — কোর্সে দুটোই আসবে।</div>
<div class="dialogue en"><strong>You:</strong> Road-keeper, I heard FCAPS — but real network teams fight fires all day. Where is the discipline?<br><strong>Road-keeper:</strong> Firefighting is one slice of Fault — the most expensive slice. The real game is before the fire: <strong>Configuration</strong> (which device holds which setting — documented, versioned), <strong>Accounting</strong> (who consumed what bandwidth — the basis for billing and planning), <strong>Performance</strong> (the latency story: not the mean, watch the 95th percentile), <strong>Security</strong> (who may enter, who may not — a written list). Neglect one of the five, and the other four gift you sleepless nights.<br><strong>You:</strong> SNMP vs telemetry?<br><strong>Road-keeper:</strong> SNMP is the <strong>post-office</strong> — the manager asks, the agent answers (from the MIB-ledger's OID pages). Telemetry is the <strong>bird</strong> — the device streams by itself. The old post-office still runs half the world; the new bird fits the cloud age. Know both — the course will test both.</div>
<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ আগুন-নেভানো নেটওয়ার্ক</div>"ডাউন হলো তো চিৎকার শুনলাম" — মনিটরিং নেই, কনফিগ-ব্যাকআপ নেই। প্রতিটি ঘটনায় সবাই অন্ধ, সমাধান = রিস্টার্ট। মেয়াদ শেষে কেউ বলতে পারে না কেন বারবার পড়ে।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ FCAPS-শৃঙ্খলা</div>বেসলাইন আছে (স্বাভাবিক দেখতে কেমন), অ্যালার্ট আছে (স্বাভাবিক ভাঙলেই ঘণ্টা), কনফিগ-সংস্করণ আছে (কে কখন কী বদলাল)। ঘটনা ঘটলে প্রশ্ন "কেন" — উত্তর লেজারে খোঁজা যায়।</div>
</div>
<div class="code-block">🔍 নিজের হাতে দেখো (ম্যাক/লিনাক্স টার্মিনালে):
ip route                     # নিজের রাউটিং-টেবিল: কোন পথে কোন নেটওয়ার্ক
netstat -r                   # একই কথা, পুরনো ছাঁচে
ping -c 4 8.8.8.8            # গেটওয়ে-হয়ে-বাইরে: RTT মিলিসেকেন্ডে
traceroute 8.8.8.8           # প্রতিটি পথহস্তের সিঁড়ি — কোথায় সময় যাচ্ছে
SNMP-জগতে (কোর্স-ল্যাবে):
snmpwalk -v2c -c public <ip> system   # ডিভাইসের MIB-খাতার system-অধ্যায় পাতো
টিপ: প্রতিটি আউটপুট কুইজ-নোটে আটকে রাখো — IS 5203-এর ল্যাব-রিপোর্টে সোনা হয়ে যাবে।</div>
<div class="stat-grid">
  <div class="stat-card"><div class="sc-num">৫</div><div class="sc-label">FCAPS স্তম্ভ</div></div>
  <div class="stat-card"><div class="sc-num">৭</div><div class="sc-label">OSI স্তর — রোগ-নির্ণয়ের সিঁড়ি</div></div>
  <div class="stat-card"><div class="sc-num">৩</div><div class="sc-label">TCP handshake — SYN·SYN-ACK·ACK</div></div>
  <div class="stat-card"><div class="sc-num">৯৫%</div><div class="sc-label">শতকরা — লেটেন্সির আসল গল্প (গড় নয়)</div></div>
</div>

<ul class="checklist"><li>নিজের রাউটারে routing table দেখো (<code>netstat -r</code> বা <code>ip route</code>) — কোন গেটওয়ে কোন পথে</li><li>Wireshark খুলে ৫ মিনিট ধরো — TCP 3-way handshake-এর SYN, SYN-ACK, ACK প্যাকেটগুলো নিজে চোখে চিনো</li><li>FCAPS-এর ৫ স্তর দিয়ে LedgerPilot-এর গত সপ্তাহের একটা ঘটনা (ধরো API-timeout) শ্রেণিবদ্ধ করো</li></ul><div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 37 (Web of Wires — OSI থেকে CDN, ১০ দরজা) এই স্টেশনের পূর্ণ মানচিত্র; IS 5203 চলাকালে সপ্তাহে এক দরজা খুললে ক্লাস-লেকচার দ্বিগুণ স্বচ্ছ লাগবে।</div></div>
<div class="verse">وَعَلَامَاتٍ وَبِالنَّجْمِ هُمْ يَهْتَدُونَ — "আর নক্ষত্র দিয়ে তারা পথ চেনে।" (কুরআন ১৬:১৬)</div>
<div class="secret-box">🌐 রাস্তা বানানো মানে কারিগর, রাস্তার হিসাব রাখা মানে পথরক্ষক — FCAPS হলো সেই দলিল। যে মুসাফির পথরক্ষকের দলিল পড়তে জানে, তার কাফেলা কখনো অকারণে থামে না।</div>`,
  senior: {
    title: "IS 5203 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> TCP/IP-র ব্যাসিক আর তোমার প্রোডাকশন-সার্ভারের টপোলজি এক পাতায় আঁকো; SNMP কী জিজ্ঞেস করলে বলতে পারো — এটুকুই যথেষ্ট। <strong>কোর্সে:</strong> FCAPS, SNMP/MIB, নেটওয়ার্ক মনিটরিং, QoS, ফল্ট-ম্যানেজমেন্ট প্রসেস। <strong>Artifact:</strong> একটা নেটওয়ার্ক-মনিটরিং প্ল্যান/রিপোর্ট। <strong>ডিজার্টেশন-সেতু:</strong> তোমার Ipractus LiveKit/WebRTC ইনফ্রা — রিয়েল-টাইম মিডিয়া ট্রাফিকের QoS-গবেষণার উর্বর মাঠ। <strong>ফাঁদ:</strong> মনিটরিং = "uptime দেখা" ভাবা; আসল প্রশ্ন হলো <em>কোন মেট্রিক কোন সিদ্ধান্ত বদলাবে</em> — সেটা না ভাবলে ড্যাশবোর্ডের সমুদ্রে ডুববে।</p>`
  }
});

// ── দরজা ৩ · দুর্গের প্রহরী ──────────────────
doors.push({
  num: 3,
  icon: "🛡️",
  color: "#5eead4",
  name: "দুর্গের প্রহরী",
  subtitle: "The Fortress Guard — Cybersecurity (IS 5403)",
  tech: "Cybersecurity · CIA Triad · Threat Modeling · Defense in Depth · Zero Trust",
  spirit: "حِصْن — হিসন: দুর্গ; রাসূল (সা.) বলেছেন, নিজের জিনিস রক্ষার দায়িত্ব প্রত্যেকের",
  secret: "নিরাপত্তা একটা দরজা নয়, পাঁচটা স্তর। আর সবচেয়ে ভঙ্গুর স্তর সবসময় মানুষ।",
  recall: {
    q: "CIA ত্রিভুজের তিন স্তম্ভ কী?",
    qen: "What are the three pillars of the CIA triad?",
    a: "Confidentiality (গোপনীয়তা), Integrity (অখণ্ডতা), Availability (প্রাপ্যতা)।",
    aen: "Confidentiality, Integrity, Availability."
  },
  story: `<p class="scene-setting">মরুর শেষ প্রান্তে এক দুর্গ — নয় মিনার, বাইরের পরিখা, পাথরের তিন স্তর। দুর্গের সরদার-প্রহরী বলেন, "আমার দুর্গ একটা দেয়াল নয়, একটা <strong>হিসাব</strong>। বাইরের পরিখা ডাকাত ঠেকায়, দ্বিতীয় প্রাচীর ঠেকায় যে-ডাকাত পরিখা পেরোলো, তৃতীয় স্তর ঠেকায় যে দ্বিতীয়টা ফাঁদ দিলো। তুমি কোনটা নিয়ে ভাববে? সবগুলো — কারণ যে দিন তুমি শুধু বাইরের দেয়াল নিয়ে ভাববে, সেদিন ভেতরের দরবার লুট হয়ে যাবে।" এই দুর্গের নাম IS 5403 — Cybersecurity।</p>
<p class="scene-setting en">At the desert's edge, a fortress — nine towers, a moat, three layers of stone. The captain says, "My fortress is not one wall; it is a <strong>ledger of walls</strong>. The moat stops the raider, the second wall stops the one who crossed the moat, the third stops whoever breached the second. Which do you think about? All of them — the day you only watch the outer wall, the inner court gets plundered." This fortress is IS 5403 — Cybersecurity.</p>
<div class="dialogue"><strong>তুমি:</strong> সরদার, আমার তো UFW আছে, তাহলে আমি সুরক্ষিত?<br><strong>সরদার-প্রহরী:</strong> এক প্রাচীরকে দুর্গ ভেবো না। UFW তোমার পরিখা। এর ভেতরে চাই: TLS (বার্তা-রহস্য), রোল-ভিত্তিক অ্যাক্সেস (কে কোন দরবারে যাবে), অডিট-লগ (কে কখন কোথায় গেলো), ব্যাকআপ (লুট হলে পুনরুদ্ধার), আর নিয়মিত প্যাচ (দুর্গের ফাটল মেরামত)। মনে আছে? ডকার তোমার UFW বাইপাস করে ফেলেছিল — তাই <code>iptables -A DOCKER-USER</code>। এটাই defense-in-depth-এর জীবন্ত পাঠ: <strong>এক স্তর ভাঙলে পরের স্তর আছে কি?</strong><br><strong>তুমি:</strong> তাহলে সব স্তর আমি নিজে বানাব?<br><strong>সরদার-প্রহরী:</strong> না — প্রথমে <strong>threat modeling</strong>: কে আক্রমণ করবে, কী চায়, কোন পথে আসবে। তারপর ওই পথে স্তর সাজাও। Zero Trust-এর সূত্র: "never trust, always verify" — দুর্গের ভেতরের চাকরও প্রতিদিন সিল-চেক খায়।</div>
<div class="dialogue en"><strong>You:</strong> Captain, I have UFW — am I secure?<br><strong>Captain:</strong> Never call one wall a fortress. UFW is your moat. Inside: TLS (sealed messages), role-based access, audit logs, backups, regular patches. Remember? Docker bypassed your UFW — hence <code>iptables -A DOCKER-USER</code>. That is defense-in-depth alive: <strong>if one layer breaks, is there another?</strong><br><strong>You:</strong> So I build every layer myself?<br><strong>Captain:</strong> No — first <strong>threat modeling</strong>: who attacks, what they want, which path. Then layer that path. Zero Trust: "never trust, always verify."</div>
<table class="kv-table">
<tr><th>CIA স্তম্ভ</th><th>দুর্গের ভাষায়</th><th>তোমার দুর্গে</th></tr>
<tr><td class="hl">Confidentiality</td><td>শুধু অনুমোদিত চোখ দেখে</td><td>ক্রিপ্টো, TLS, রোল-অ্যাক্সেস</td></tr>
<tr><td class="hl">Integrity</td><td>বার্তা পথে বদলায়নি</td><td>হ্যাশ, সিগনেচার, অডিট-লগ</td></tr>
<tr><td class="hl">Availability</td><td>দুর্গ দরজা খোলা থাকে প্রজাদের জন্য</td><td>রিডুন্ড্যান্সি, DDoS-সুরক্ষা, ব্যাকআপ</td></tr>
</table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফাঁদ-চেতনা:</strong> সবচেয়ে মজবুত প্রাচীরও কাজে লাগে না যদি দরওয়ান ঘুষ খায় — phishing ঠেকায় ফায়ারওয়াল নয়, প্রশিক্ষণ। মানুষ-স্তরটাই সবচেয়ে পাতলা।</div></div>
<div class="dialogue"><strong>তুমি:</strong> প্রহরী-সাহেব, STRIDE নামটা শুনেছি — কীভাবে হাঁটে?<br><strong>দুর্গ-প্রহরী:</strong> ছয় প্রশ্নের পায়ে-পায়ে হাঁটে, প্রতিটি সম্পদের গায়ে। ধরো তোমার LedgerPilot-লগইন: <strong>S</strong>poofing — কেউ কি অন্যের মুখোশ পরে ঢোকে? <strong>T</strong>ampering — চলার পথে কি প্যাকেট কেউ ছুঁয়ে বদলায়? <strong>R</strong>epudiation — কেউ কি কাজ করে বলবে "আমি করিনি"? <strong>I</strong>nformation disclosure — লগ-না-লগ কি পাসওয়ার্ড-হিন্ট ফাঁস করে? <strong>D</strong>enial — কেউ কি দরজা ভিড় করে আসল মুসাফির আটকাতে পারে? <strong>E</strong>levation — সাধারণ মুসাফির কি দুর্গের চাবি-ঘরে উঠতে পারে? প্রতিটির উত্তর থাকলে দুর্গের নকশা দাঁড়ায়।<br><strong>তুমি:</strong> Zero-trust কেন এত কথা?<br><strong>প্রহরী:</strong> পুরনো দুর্গ দেয়ালে বিশ্বাস করত — ভেতরে ঢুকলে সব-মুক্ত। আধুনিক দুর্গ কাউকে বিশ্বাস করে না, এমনকি ভেতরের চাকরকেও: <strong>প্রতিটি দরজায় পরিচয়-পত্র, প্রতিটি অনুরোধে যাচাই</strong>। কারণ আজকের চোর ভেতর থেকেও আসে — চুরি-যাওয়া ল্যাপটপ, পিশড অ্যাকাউন্ট। IS 5403-এর আধা আলোচনা এই দর্শনের যুদ্ধেই কাটবে।</div>
<div class="dialogue en"><strong>You:</strong> Guard, I have heard of STRIDE — how does it walk?<br><strong>Fortress-guard:</strong> On six question-feet, over every asset. Take your LedgerPilot login: <strong>S</strong>poofing — can anyone enter wearing another's mask? <strong>T</strong>ampering — can packets be altered in flight? <strong>R</strong>epudiation — can someone act then say "not me"? <strong>I</strong>nformation disclosure — do logs leak password hints? <strong>D</strong>enial — can someone crowd the door to block real travelers? <strong>E</strong>levation — can an ordinary traveler reach the key-room? With answers to each, the fortress design stands.<br><strong>You:</strong> Why so much talk of zero-trust?<br><strong>Guard:</strong> The old fortress trusted its wall — inside, all was free. The modern fortress trusts no one, not even its own staff: <strong>identity at every door, verification on every request.</strong> Because today's thief also comes from inside — a stolen laptop, a phished account. Half of IS 5403's debate lives in this war of philosophies.</div>
<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ প্রাচীর-মডেল (Perimeter)</div>ভেতরে ঢুকলেই আস্থা: একবার VPN-হলে সব সার্ভার খোলা। একটা পিশড অ্যাকাউন্ট = পুরো দুর্গের চাবি। দেয়াল যত উঁচু, ভেতরের অন্ধবিশ্বাস তত গভীর।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ শূন্য-আস্থা (Zero Trust)</div>প্রতিটি অনুরোধ: কে? কোথা থেকে? কী চায়? কেন? — যাচাই ছাড়া কিছু না। এক অ্যাকাউন্ট পড়লে বিস্ফোরণ এক কক্ষে সীমাবদ্ধ। খরচ বেশি, ভরসা কম — আজকের হিসাবে সস্তা।</div>
</div>
<div class="code-block">🛡️ কেস-স্টাডি: LedgerPilot-লগইন এন্ডপয়েন্টের কঠিনকরণ (হাতে-খাতায়):
[ ] রেট-লিমিট: ৫ ব্যর্থ চেষ্টায় ১৫ মিনিট তালা        → DoS+ব্রুট-ফোর্স দুই থামে
[ ] MFA: পাসওয়ার্ড + OTP/TOTP                      → পিশড পাসওয়ার্ড একা অচল
[ ] টোকেন-আয়ু: ১৫ মিনিট, রিফ্রেশ-ঘুরপথে           → চুরি-টোকেনের মেয়াদ ছোট
[ ] লগ: ব্যর্থ-লগইনও লেজারে, পাসওয়ার্ড-কখনো-না     → Repudiation-রোধ + ফাঁস-রোধ
[ ] অনুমতি: সাধারণ-ব্যবহারকারী ≠ অ্যাডমিন-প্যানেল   → Elevation-রোধ (সর্বনিম্ন-অনুমতি)
অনুশীলন: নিজের প্রজেক্টের যেকোনো এন্ডপয়েন্টে এই খাতা চালাও — ফাঁকা ঘর বের হলে সেটাই কোর্সের প্রথম পোর্টফোলিও-আইটেম।</div>
<div class="stat-grid">
  <div class="stat-card"><div class="sc-num">৬</div><div class="sc-label">STRIDE হুমকি-প্রশ্ন</div></div>
  <div class="stat-card"><div class="sc-num">৩</div><div class="sc-label">CIA ত্রিভুজ (গোপন·অখণ্ড·সহজলভ্য)</div></div>
  <div class="stat-card"><div class="sc-num">৫+</div><div class="sc-label">স্তর — defense-in-depth জাল</div></div>
  <div class="stat-card"><div class="sc-num">১</div><div class="sc-label">নীতি — সবচেয়ে কম অনুমতিই সবচেয়ে নিরাপদ</div></div>
</div>

<ul class="checklist"><li>নিজের ডিজিটাল-জীবনের এক পাতার threat model লেখো: কে আক্রমণ করতে পারে, কী চায়, কোন দরজা দিয়ে</li><li>LedgerPilot-এর যেকোনো একটা API-endpoint নাও — defense-in-depth অনুযায়ী তার সুরক্ষা-স্তর গুনো (auth? rate-limit? input-validation?)</li><li>Zero-trust নীতিতে নিজের বাসার "প্রাচীর-নিরাপত্তা" পুনঃনকশা করে দেখো — কোন তালা কেন থাকল, কোনটা ভাঙা</li></ul><div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 46 (Copper Fortress — symmetric থেকে TLS, ১০ দরজা) এই দুর্গের অস্ত্রাগার; IS 5403-এর প্রতিটি লেকচারের পরে সেই দরজাটা খুলে রাখো।</div></div>
<div class="verse">وَأَعِدُّوا لَهُمْ مَّا اسْتَطَعْتُم مِّن قُوَّةٍ — "তাদের বিরুদ্ধে সাধ্যমত শক্তি প্রস্তুত রাখো।" (কুরআন ৮:৬০)</div>
<div class="secret-box">🛡️ দুর্গ এক দেয়াল নয় — পরিখা, প্রাচীর, দরওয়ান, দলিল, ব্যাকআপ: স্তরে স্তরে পাহারা। এক স্তর ভাঙলে গোটা দুর্গ পড়ে না।</div>`,
  senior: {
    title: "IS 5403 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> এনক্রিপশন-হ্যাশিং পার্থক্য, TLS হ্যান্ডশেক-ধারণা, তোমার সার্ভারে কোন পোর্ট খোলা তার লিস্ট (<code>ss -tulpn</code>)। <strong>কোর্সে:</strong> CIA triad, threat modeling (STRIDE), defense in depth, Zero Trust, incident response, NIST framework। <strong>Artifact:</strong> কোনো এক সিস্টেমের নিরাপত্তা-মূল্যায়ন/হুমকি-মডেল। <strong>ডিজার্টেশন-সেতু:</strong> LedgerPilot-এর মতো ফিনট্যান্স-ডেটার জন্য Zero-Trust আর্কিটেকচার প্রস্তাবনা বা WebRTC-মিডিয়া স্ট্রিমের নিরাপত্তা-বিশ্লেষণ। <strong>ফাঁদ:</strong> টুল-সংগ্রহে মুগ্ধতা (আরেকটা স্ক্যানার!) — আসল দক্ষতা হলো <em>হুমকি ভেবে বের করা</em>, টুল চালানো নয়।</p>`
  }
});
// END-DOORS-1-4

// ── দরজা ৪ · স্রোত-গণনাকারীর দরবার ──────────────────
doors.push({
  num: 4,
  icon: "📊",
  color: "#5eead4",
  name: "স্রোত-গণনাকারীর দরবার",
  subtitle: "The Stream-Counter's Court — Data Science & Big Data (IS 5213)",
  tech: "Data Science · Big Data (5V) · Pipelines · Hadoop/Spark · Data Mining",
  spirit: "حِسَاب — হিসাব: হিসেব-নিকেশ, নির্ভুল গণনার নৈতিকতা",
  secret: "ডেটা মানে সংখ্যার স্তূপ নয় — মানুষের কাজের ছাপ। স্রোত বড় হলে গোডাউন নয়, নদী-বাঁধ চাই।",
  recall: {
    q: "Big Data-র ৫টি V কী কী?",
    qen: "What are the five V's of Big Data?",
    a: "Volume (আয়তন), Velocity (গতি), Variety (বৈচিত্র্য), Veracity (নির্ভরযোগ্যতা), Value (মূল্য)।",
    aen: "Volume, Velocity, Variety, Veracity, Value."
  },
  story: `<p class="scene-setting">নীল নদের পাড়ে বন্যা-গণনাকারীর দরবার — nilometer-এর পাথরে খোদাই করা মাপকাঠি, দেয়ালে শত বছরের জলের হিসাব। মাস্টার বলেন, "মিসরের সভ্যতা দাঁড়িয়ে আছে একটা প্রশ্নের ওপর: <strong>এবার বন্যা কত উঁচু হবে?</strong> প্রতি বছর পাথরে দাগ, প্রতি দাগ এক বছরের সাক্ষ্য। শত দাগ মিলে যে প্যাটার্ন, সেটাই আগামী বন্যার ভবিষ্যদ্বাণী।" একদিন এক বণিক এসে বললেন, "আমার কাছে শত বছরের হিসাব আছে, কিন্তু তা এত বড় যে এক পাতায় পড়া যায় না!" মাস্টার হাসলেন: "তাহলে পাতা বদলাও, পদ্ধতি নয়।" এই দরবারের নাম IS 5213 — Data Science & Big Data।</p>
<p class="scene-setting en">On the Nile's bank, a flood-counter's court — a nilometer's carved stone gauge, a hundred years of water records on the wall. The master says, "Egyptian civilization stands on one question: <strong>how high will this year's flood be?</strong> A mark on stone each year, each mark one year's testimony. The pattern across a hundred marks predicts the next flood." One day a merchant arrived: "I own a hundred years of records, but they're too big to read on one page!" The master smiled: "Then change the page, not the method." This court is IS 5213 — Data Science & Big Data.</p>
<div class="dialogue"><strong>তুমি:</strong> মাস্টার, আমি তো MySQL/PostgreSQL-এ লাখ রেকর্ড সামলাই — এটাই Big Data?<br><strong>নদী-গণনাকারী:</strong> সংখ্যায় নয়, <strong>প্রশ্নে</strong> বড়। যখন ডেটা এত দ্রুত আসে যে এক মেশিনের পাত্র ছোট পড়ে — তখনই বিগ। ৫V মনে রেখো: Volume (এক মেশিনে ধরে না), Velocity (প্রতি সেকেন্ডে হাজার সারি), Variety (লগ+ছবি+JSON+SQL একসাথে), Veracity (ভাঙা-বানো ডেটা), Value (কারণ ছাড়া স্তূপ = মরুভূমি)। তোমার LedgerPilot প্রতিদিন যে লেনদেন-নদী ট্র্যাক করে, Ipractus-এর কল-রেকর্ড প্রতি মিনিটে যে স্রোত বানায় — এগুলোই তোমার নীল নদ।<br><strong>তুমি:</strong> তাহলে স্রোত ধরার যন্ত্র কী?<br><strong>নদী-গণনাকারী:</strong> নদী যেমন বাঁধে ভাগ হয় — ডেটাও ভাগ হয় (Hadoop: এক স্রোত, হাজার পাত্র), আর মনে রেখো (Spark: মেমোরিতে গণনা, ডিস্কে নয়)। পাইপলাইন: সংগ্রহ → সংরক্ষণ → পরিষ্কার → বিশ্লেষণ → দর্শন। তোমার ETL-চেন তো এটাই ছিল!</div>
<div class="dialogue en"><strong>You:</strong> Master, I handle lakh-record tables in MySQL/PostgreSQL — is that Big Data?<br><strong>River-counter:</strong> Big is measured in the <strong>question</strong>, not the number. When data arrives so fast one machine's vessel is too small — that's big. Remember the 5 V's: Volume, Velocity, Variety, Veracity, Value. Your LedgerPilot's daily transaction river and Ipractus's per-minute call records — those are your Nile.<br><strong>You:</strong> So what machine catches the stream?<br><strong>River-counter:</strong> As a river splits at a dam — data splits too (Hadoop: one stream, a thousand vessels), and stays in memory (Spark: compute in RAM, not disk). The pipeline: collect → store → clean → analyze → visualize. Your ETL chain was exactly this!</div>
<table class="kv-table">
<tr><th>৫V</th><th>নীল নদের ভাষায়</th><th>তোমার দুনিয়ায়</th></tr>
<tr><td class="hl">Volume</td><td>শত বছরের জলের খাতা</td><td>টেরাবাইট-মাপের লেনদেন/লগ</td></tr>
<tr><td class="hl">Velocity</td><td>বন্যা-মৌসুমের স্রোত</td><td>প্রতি-সেকেন্ড ইভেন্ট, স্ট্রিমিং</td></tr>
<tr><td class="hl">Variety</td><td>মাপকাঠি + পাণ্ডুলিপি + মুখের কথা</td><td>SQL + JSON + লগ + মিডিয়া একসাথে</td></tr>
<tr><td class="hl">Veracity</td><td>ভাঙা পাথরে ভুল দাগ</td><td>missing value, বানোয়াট রেকর্ড</td></tr>
<tr><td class="hl">Value</td><td>ভবিষ্যদ্বাণী = ফসলের পরিকল্পনা</td><td>সিদ্ধান্ত বদলানো ইনসাইট</td></tr>
</table>
<div class="callout info"><span class="co-icon">🧭</span><div><strong>রিহলা-সেতু:</strong> এই দরজাটা তোমার লাইব্রেরির Book 44 (River of Data) আর Book 34 (Scale of Evidence) দিয়ে জুড়বে — সেখানে ডেটা-পাইপলাইন আর পরিসংখ্যানের গভীর পাঠ পাবে। IS 5213 শেষ করে সেই দরজাগুলো খুললে দ্বিগুণ লাভ।</div></div>
<div class="dialogue"><strong>তুমি:</strong> স্রোত-গণনাকারী, ব্যাচ আর স্ট্রিমের বাস্তব তফাত কোথায়?<br><strong>স্রোত-গণনাকারী:</strong> প্রশ্নটা করো — <strong>উত্তর কত তাড়াতাড়ি পুরনো হয়?</strong> মাসিক আর্থিক-রিপোর্টে এক ঘণ্টা দেরি কিছু না — ব্যাচ-নদী চলবে (রাতে জমা, সকালে মিল)। কিন্তু লাইভ-ক্লাসে কে ড্রপ করলো, সেটা ৩০ সেকেন্ড পরে জানা দরকার — স্ট্রিম-স্রোত (ঘটনা ঘটতেই যাত্রা)। Ipractus-এর কল-মেট্রিক স্ট্রিম; LedgerPilot-এর মাস-শেষের লাভ-ক্ষতি ব্যাচ। একই জগতে দুই নদী — ভুল নদীতে নামলে হয় অপচাশীল দ্রুততা, নয় মৃতপ্রায় ধীরতা।<br><strong>তুমি:</strong> ডেটা-লেক আর ওয়্যারহাউস?<br><strong>স্রোত-গণনাকারী:</strong> ওয়্যারহাউস = <strong>গুদাম</strong> — আগে থেকে সাজানো, গোনা, লেবেল-ওয়ালা; প্রশ্ন আসলে উত্তর দ্রুত। লেক = <strong>আস্ত নদী-জলাশয়</strong> — কাঁচা সব ঢালা, সস্তা, আকার-সীমা নেই; পরে মাছ ধরবে যখন প্রশ্ন আসবে। প্রতিষ্ঠান দুটোই রাখে: লেকে সম্ভাবনা, গুদামে নিশ্চয়তা।</div>
<div class="dialogue en"><strong>You:</strong> Stream-counter, where is the real batch-vs-stream difference?<br><strong>Stream-counter:</strong> Ask — <strong>how fast does the answer go stale?</strong> A monthly finance report doesn't mind an hour — the batch-river flows (collect at night, reconcile at dawn). But "who dropped from the live class" must be known in thirty seconds — the stream-current (moving the moment the event happens). Ipractus call-metrics are stream; LedgerPilot's month-end P&amp;L is batch. Two rivers in one world — board the wrong one and you get either wasteful speed or deadly slowness.<br><strong>You:</strong> Data lake vs warehouse?<br><strong>Stream-counter:</strong> The warehouse is the <strong>storehouse</strong> — pre-arranged, counted, labeled; answers come fast when questions arrive. The lake is the <strong>whole reservoir</strong> — everything raw poured in, cheap, no size-limit; you fish later when the question comes. Organizations keep both: possibility in the lake, certainty in the storehouse.</div>
<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ডেটা-জলাভূমি</div>সব ঢালা হয়েছে, কেউ জানে না কী কোথায়। কলামের নাম-অর্থ ভাগ্গে, মালিক অজানা, একই সত্যের তিন সংস্করণ। বিশ্লেষকের অর্ধেক জীবন "এই ফাইলটা কার?" জিজ্ঞাসায় কাটে।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ ক্যাটালগ-করা হ্রদ</div>প্রতিটি উৎসের নাম-মালিক-আপডেট-সময় লেখা; স্কিমা-অর্থ এক পাতায়; গুণমান-স্কোর দৃশ্যমান। জলাভূমি নয় — বাগান: যা চাও, পথ দেখায়।</div>
</div>
<div class="code-block">🐍 পাইপলাইন-অনুশীলন (pandas — নিজের CSV-তে চালাও):
import pandas as pd
df = pd.read_csv("ledger_transactions.csv")        # ১ উৎস: নদীর মুখ
df["date"] = pd.to_datetime(df["date"])            # ২ শুদ্ধি: গোনা-ছাঁচ
df = df.drop_duplicates(subset=["txn_id"])         #    দ্বৈত-ফোঁটা বাদ
monthly = (df.groupby(df["date"].dt.to_period("M"))["amount"]
             .agg(["sum", "mean", "count"]))       # ৩ সঞ্চয়: মাস-ভাঁড়ার
monthly.to_csv("monthly_summary.csv")              # ৪ বিতরণ: গুদামে তোলা
টিপ: IS 5213-এর অ্যাসাইনমেন্ট প্রায় এই ছাঁচেই — আগে নিজের ডেটায় চালিয়ে রাখো।</div>
<div class="stat-grid">
  <div class="stat-card"><div class="sc-num">৫</div><div class="sc-label">V — Volume·Velocity·Variety·Veracity·Value</div></div>
  <div class="stat-card"><div class="sc-num">৪</div><div class="sc-label">পাইপলাইন-ধাপ — উৎস→শুদ্ধি→সঞ্চয়→বিতরণ</div></div>
  <div class="stat-card"><div class="sc-num">২</div><div class="sc-label">নদী — ব্যাচ ও স্ট্রিম</div></div>
  <div class="stat-card"><div class="sc-num">১</div><div class="sc-label">প্রশ্ন — উত্তর কত দ্রুত পুরনো হয়?</div></div>
</div>

<ul class="checklist"><li>৫V (Volume, Velocity, Variety, Veracity, Value) দিয়ে LedgerPilot-এর লেনদেন-ডেটা শ্রেণীবদ্ধ করো — প্রতিটি V-এর জন্য এক বাক্য</li><li>নিজের কোনো একটা ডেটা-প্রবাহ চিত্রে আঁকো: উৎস → ভাণ্ডার → প্রক্রিয়া → বিশ্লেষণ → সিদ্ধান্ত</li><li>Hadoop বনাম Spark — কেন/কখন, নিজের ভাষায় ৩ লাইনে নোট করো</li></ul>
<div class="verse">إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ — "নিশ্চয়ই এতে নিদর্শন রয়েছে সেসব লোকের জন্য যারা চিন্তা করে।" (কুরআন ১৩:৩)</div>
<div class="secret-box">📊 ডেটা = মানুষের কাজের ছাপ, বিগ ডেটা = যে স্রোত এক পাত্রে ধরে না। নদীকে বাঁধে ভাগ করো (Hadoop), পাত্রে পাত্রে গণনা করো (Spark) — শেষে জিজ্ঞেস করো: এই হিসাব কার ফসল বাঁচাল?</div>`,
  senior: {
    title: "IS 5213 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> SQL তো আছেই; pandas-এ DataFrame লোড/গ্রুপ-বাই একবার হাতে করে ফেলো, আর 5V-ধারণাটা নিজের প্রোডাক্টের ডেটায় মেলাও। <strong>কোর্সে:</strong> ডেটা-র‍্যাংলিং, ডেটা-মাইনিং, Hadoop/Spark-এর ম্যাপ-রিডিউস-ধারণা, ভিজ্যুয়ালাইজেশন। <strong>Artifact:</strong> একটা ডেটা-পাইপলাইন ডিজাইন/বিশ্লেষণ-রিপোর্ট। <strong>ডিজার্টেশন-সেতু:</strong> LedgerPilot-এর লেনদেন-ডেটায় অ্যানোমালি-ডিটেকশন, বা Ipractus-এর কল-মেট্রিক্সে প্রেডিক্টিভ মডেল — দুটোই বাস্তব practitioner-scholar প্রশ্ন। <strong>ফাঁদ:</strong> টুল পূজা (আরেকটা ড্যাশবোর্ড!) — মনে রেখো, nilometer-এর মূল্য পাথরে নয়, <em>ভবিষ্যদ্বাণীতে</em>; তোমার মূল্যও টুলে নয়, প্রশ্নে।</p>`
  }
});
// END-DOORS-1-4
