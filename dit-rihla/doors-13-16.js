// ════════════════════════════════════════
// Book 57 · ষাট ক্রেডিটের রিহলা — Doors 13–16
// ════════════════════════════════════════

// ── দরজা ১৩ · সংখ্যার মিনার ──────────────────
doors.push({
  num: 13,
  icon: "📏",
  color: "#5eead4",
  name: "সংখ্যার মিনার",
  subtitle: "The Minaret of Numbers — Quantitative Research (RSH 8003)",
  tech: "Quantitative Methods · Hypothesis Testing · Descriptive & Inferential Stats · Significance · Effect Size",
  spirit: "الْقَسْطَاسُ الْمُسْتَقِيمُ — 'সরল দাঁড়িপাল্লা' (কুরআন ১৭:৩৫); মাপে ন্যায়ের শাসন",
  secret: "সংখ্যা নিজে থেকে সত্য বলে না — প্রশ্ন সাজানো থাকলে সংখ্যা সাক্ষী দেয়; নাহলে সংখ্যা মিথ্যে সাজায়।",
  recall: {
    q: "p-value আসলে কী বলে (এবং কী বলে না)?",
    qen: "What does a p-value actually say (and not say)?",
    a: "বলে: 'নাল-হাইপোথিসিস সত্য হলে এত বা তার চেয়ে চরম ফল পাওয়ার সম্ভাবনা'। বলে না: 'হাইপোথিসিস সত্য হওয়ার সম্ভাবনা', বা প্রভাবের আকার, বা গুরুত্ব।",
    aen: "It says: 'the probability of a result this extreme, if the null were true.' It does NOT say: the probability your hypothesis is true, effect size, or importance."
  },
  story: `<p class="scene-setting">কাফেলা রিসার্চ-শহরে পৌঁছালো। প্রথম মিনার সবচেয়ে লম্বা — গণিতজ্ঞদের মিনার। মুয়াজ্জিন নন, এখানে কাজ করেন <strong>মাপন-মুহতাসিব</strong> (market-inspector): বাজারের সব দাঁড়িপাল্লা তাঁর কাছে বিচার চায়। তুমি উঠে গেলে। মুহতাসিব বললেন, "নিচের বাজারে এক বণিক দাবি করছে — 'আমার নতুন বীজ পুরনোটার চেয়ে ভালো!' কতটা ভালো? ক'টি মাঠে ফলালে? কাকতালীয় নয় তো? আমার তিন প্রশ্নের উত্তর দাও: <strong>কী মাপব (variable), কাকে মাপব (sample), কীসের সাথে তুলনা (control)</strong>। এই তিনটি না থাকলে বণিকের দাবি গল্প, সংখ্যা সাজানো গল্প।" এই মিনারের নাম RSH 8003 — Quantitative Research।</p>
<p class="scene-setting en">The caravan reaches the research city. The first minaret is tallest — the mathematicians'. No muezzin here; a <strong>measuring muhtasib</strong> (market-inspector) works instead: every scale in the bazaar seeks his verdict. You climb up. The muhtasib says, "Below, a merchant claims — 'my new seed beats the old!' By how much? In how many fields? Not coincidence, is it? Answer my three questions: <strong>what to measure (variable), whom to measure (sample), compared to what (control)</strong>. Without these three, the merchant's claim is a story — a story dressed in numbers." This minaret is RSH 8003 — Quantitative Research.</p>
<div class="dialogue"><strong>তুমি:</strong> মুহতাসিব-সাহেব, আমি তো ডেটা-বিশ্লেষণ করি প্রতিদিন — Django-তে ORM-কোয়েরি, pandas-এ গ্রুপবাই। এই মিনারে নতুন কী?<br><strong>মুহতাসিব:</strong> ব্যবসায়ী-চোখ আর গবেষক-চোখের পার্থক্য একটাই: <strong>কাকতালীয়তার হিসাব</strong>। ব্যবসায়ী দেখে 'বিক্রি বেড়েছে', গবেষক জিজ্ঞেস করে 'শুধু এলোমেলোভাবেও কি এত বাড়তো?' — এই প্রশ্নের যন্ত্রই p-value, significance, confidence interval। আর তোমার ভুলটা আমি আগেই ধরেছি: 'significant' শব্দটা দেখেই লোকে ভাবে 'বিশাল প্রভাব' — না! significant মানে 'কাকতালীয় হওয়ার সম্ভাবনা কম', প্রভাব কত বড় তা বলে effect size। দশ হাজার নমুনায় তুচ্ছ পার্থক্যও 'significant' হয় — বাজারে সেই ফাঁদেই ভরা।<br><strong>তুমি:</strong> তাহলে কোন পরীক্ষা কবে?<br><strong>মুহতাসিব:</strong> প্রশ্নের আকৃতি দেখে: দুই দলের গড় তুলনা → t-test; তিনের বেশি → ANOVA; সম্পর্ক → correlation/regression; গণনা-ডেটা → chi-square। আগে প্রশ্ন, পরে যন্ত্র — যন্ত্র দেখে প্রশ্ন বানালে সেটা গবেষণা নয়, জাদুবিদ্যা।</div>
<div class="dialogue en"><strong>You:</strong> Muhtasib, I analyze data daily — Django ORM queries, pandas group-bys. What's new in this minaret?<br><strong>Muhtasib:</strong> One difference between merchant-eyes and researcher-eyes: <strong>accounting for coincidence</strong>. The merchant sees 'sales rose'; the researcher asks 'could they have risen this much by pure chance?' — p-value, significance, confidence interval are that question's instruments. And I've already caught your future error: seeing 'significant,' people think 'huge effect' — no! significant means 'unlikely to be coincidence'; effect size tells you how big. With ten thousand samples, a trivial difference turns 'significant' — the bazaar is full of that trap.<br><strong>You:</strong> Then which test, when?<br><strong>Muhtasib:</strong> By the question's shape: two group means → t-test; three or more → ANOVA; relationships → correlation/regression; count data → chi-square. Question first, instrument second — build the question from the instrument and it's not research, it's magic.</div>
<table class="kv-table">
<tr><th>প্রশ্নের আকৃতি</th><th>যন্ত্র</th><th>উদাহরণ (তোমার দুনিয়ায়)</th></tr>
<tr><td class="hl">দুই দলের গড় কি আলাদা?</td><td>t-test</td><td>নতুন UI-তে টাস্ক-সময় কমলো কি?</td></tr>
<tr><td class="hl">৩+ দলের গড়?</td><td>ANOVA</td><td>তিন প্রাইসিং-প্ল্যানে চার্ন-হার</td></tr>
<tr><td class="hl">দুই ভেরিয়েবল সম্পর্কিত?</td><td>Correlation / Regression</td><td>ব্যবহার-ঘনত্ব বনাম রিটেনশন</td></tr>
<tr><td class="hl">গণনা/শতাংশ তুলনা?</td><td>Chi-square</td><td>দুই দেশে পেমেন্ট-পদ্ধতির প্রকৃতি</td></tr>
</table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফাঁদ-চেতনা:</strong> p-hacking — উপাত্ত ঘেঁটে <em>পরে</em> হাইপোথিসিস বানানো (HARKing), বা significant না হওয়া পর্যন্ত পরীক্ষা চালানো। বৈজ্ঞানিক-প্রতিষ্ঠানের এই পাপ ডিজার্টেশনেও ঘটে — প্রশ্ন আগে, ডেটা পরে; লিখে রাখো কী পরীক্ষা করবে, তারপর দেখো।</div></div>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>রিহলা-সেতু:</strong> তোমার লাইব্রেরির Book 34 (Scale of Evidence) এই মিনারের পূর্ণ গভীরতা — Al-Kindi থেকে Pearl পর্যন্ত ১০ দরজা। RSH 8003 চলাকালে সেই বইটা পাশে রাখো।</div></div>
<div class="verse">وَزِنُوا بِالْقِسْطَاسِ الْمُسْتَقِيمِ — "সরল দাঁড়িপাল্লা দিয়ে মাপো।" (কুরআন ১৭:৩৫) — ন্যায়ের মাপ = সততার পরিসংখ্যান।</div>
<div class="secret-box">📏 সংখ্যা সাক্ষী, বিচারক নয় — প্রশ্ন সাজাও (variable-sample-control), কাকতালীয়তার হিসাব করো (p-value), প্রভাবের আকার মাপো (effect size)। Significant ≠ গুরুত্বপূর্ণ।</div>`,
  senior: {
    title: "RSH 8003 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> pandas-এ একটা গ্রুপবাই-বিশ্লেষণ নিজের ডেটায় চালিয়ে t-test-এর ধারণা দেখো; 'p-value কী নয়' সম্পর্কে American Statistical Association-এর বিবৃতিটা পড়ো। <strong>কোর্সে:</strong> descriptive stats, sampling, hypothesis testing, t-test/ANOVA/chi-square, regression, confidence intervals, effect size। <strong>Artifact:</strong> একটা ডেটা-সেটে সম্পূর্ণ বিশ্লেষণ-রিপোর্ট। <strong>ডিজার্টেশন-সেতু:</strong> quantitative ডিজার্টেশনের পুরো পদ্ধতি-অধ্যায় এই মিনারে শেখা যন্ত্রে তৈরি হবে। <strong>ফাঁদ:</strong> টুল-আগে-প্রশ্ন-পরে (SPSS-এর মেনু দেখে বিশ্লেষণ বাছাই) — প্রশ্ন যন্ত্রকে বেছে দেয়, উল্টোটা কখনো নয়।</p>`
  }
});

// ── দরজা ১৪ · কথার চায়ের দোকান ──────────────────
doors.push({
  num: 14,
  icon: "🫖",
  color: "#5eead4",
  name: "কথার চায়ের দোকান",
  subtitle: "The Tea-House of Stories — Qualitative Research (RSH 8013)",
  tech: "Qualitative Methods · Interviews · Thematic Analysis · Coding · Saturation · Trustworthiness · Triangulation",
  spirit: "تَقَبَّلَ اللهُ عَنْهُ — মুহাদ্দিসদের রীতি: 'কে শুনলে, কার কাছে, কতটা নির্ভরযোগ্য?' — সনদ-যাচাই = সূত্র-ত্রিভুজায়ন",
  secret: "সংখ্যা জিজ্ঞেস করে 'কত', গল্প জিজ্ঞেস করে 'কেন' — আর মানুষ 'কত' দিয়ে সিদ্ধান্ত নেয় না, 'কেন' দিয়ে নেয়।",
  recall: {
    q: "Qualitative গবেষণায় 'saturation' কী?",
    qen: "What is 'saturation' in qualitative research?",
    a: "যে বিন্দুতে নতুন সাক্ষাৎকার আর নতুন থিম দেয় না — একই ধারা ঘুরে ফিরে আসে; সেখানে নমুনা-সংগ্রহ থামানো যায়।",
    aen: "The point where new interviews stop yielding new themes — the patterns repeat; sampling can stop."
  },
  story: `<p class="scene-setting">রিসার্চ-শহরের দ্বিতীয় মিনার নয় — এক পুরোনো চায়ের দোকান। সামনে বসে এক <strong>মুহাদ্দিস-স্বভাবের বৃদ্ধ</strong>: জীবনে হাজার সাক্ষাৎকার নিয়েছেন, প্রতিটির খাতা আলাদা। দেয়ালে ঝোলানো তাঁর তিন নিয়ম: <strong>"কে বলল (সূত্র), কে শুনল (প্রেক্ষিত), আর কেউ কি একই কথা বলে (ত্রিভুজায়ন)"</strong>। তুমি চা নিতেই বললেন, "সংখ্যার মিনার থেকে এসেছ? ভালো। কিন্তু বলো — তোমার Ipractus-এ যে শিক্ষক ভিডিও-কলে ছাত্র হারায়, তার 'কত' মাপা যায়; কিন্তু <strong>কেন</strong> ছাত্র ফেরে না — সেটা কি কোনো দাঁড়িপাল্লা মাপবে? সে জানা যায় বসে বসে কথা বলে, গল্প শুনে, গল্পের ভেতরের ধারা খুঁজে।" এই দোকানের নাম RSH 8013 — Qualitative Research।</p>
<p class="scene-setting en">The research city's second tower isn't a minaret — it's an old tea-house. Seated out front, an <strong>elder of muhaddith temperament</strong>: a thousand interviews taken in his life, a separate ledger for each. Three rules hang on his wall: <strong>"Who said it (source), who heard it (context), does anyone else say it too (triangulation)"</strong>. As you take tea he says, "From the minaret of numbers? Good. But tell me — in your Ipractus, the teacher who loses students on video-calls: the 'how many' can be measured; but <strong>why</strong> students don't return — will any scale weigh that? That is learned by sitting, talking, listening to stories, finding the currents inside them." This tea-house is RSH 8013 — Qualitative Research.</p>
<div class="dialogue"><strong>তুমি:</strong> কিন্তু বাবা, গল্প তো সবাই ভিন্ন বলে — এর মধ্যে বিজ্ঞান কোথায়?<br><strong>মুহাদ্দিস-বৃদ্ধ:</strong> একটাই গল্প = মতামত। পঁচিশটা গল্প = উপাত্ত। পদ্ধতি তিনটা: (১) <strong>খোলা প্রশ্ন</strong> করো — 'বলো সেদিনটা কেমন ছিল', নয় 'ভালো ছিল তো?'; (২) <strong>কোডিং</strong> — প্রতিটি কথার টুকরোয় লেবেল লাগাও, লেবেলগুলো জমলে দেখবে কয়েকটা <strong>থিম</strong> (ধারা) বারবার ফিরছে; (৩) <strong>ত্রিভুজায়ন</strong> — এক সূত্রের কথা আরেক সূত্রে, আরেক পদ্ধতিতে, আরেক সময়ে পরীক্ষা করো। আমাদের পূর্বসূরিরা সনদ দিয়ে যা করতেন — 'অমুক শুনেছেন অমুকের কাছে, অমুক নির্ভরযোগ্য' — এটা তারই গবেষণা-রূপ। আর কখন থামবে? যখন নতুন সাক্ষাৎকারে আর নতুন ধারা আসে না — <strong>saturation</strong>। সেই মাপেই qualitative-এ 'পরিমাণ' আছে।<br><strong>তুমি:</strong> তাহলে সংখ্যার মিনার বৃথা?<br><strong>মুহাদ্দিস-বৃদ্ধ:</strong> (হেসে) মিনার আর চায়ের দোকান প্রতিদ্বন্দ্বী নয় — প্রতিবেশী! 'কতজন চলে যায়' মিনার বলবে; 'কেন যায়' এই দোকান বলবে; mixed-methods মানে দুই প্রতিবেশীর খাতা মিলিয়ে পড়া।</div>
<div class="dialogue en"><strong>You:</strong> But grandpa, everyone tells stories differently — where's the science?<br><strong>Elder:</strong> One story = opinion. Twenty-five stories = data. Three methods: (1) ask <strong>open questions</strong> — 'tell me about that day,' not 'it was good, right?'; (2) <strong>coding</strong> — label each fragment of speech; stacked, the labels reveal repeating <strong>themes</strong>; (3) <strong>triangulation</strong> — test one source's words against another source, another method, another time. What our predecessors did with isnad — 'so-and-so heard from so-and-so, who is reliable' — this is its research form. And when to stop? When new interviews yield no new currents — <strong>saturation</strong>. There lies qualitative 'quantity.'<br><strong>You:</strong> So the minaret of numbers is useless?<br><strong>Elder:</strong> (laughing) The minaret and the tea-house are not rivals — neighbors! 'How many leave' the minaret says; 'why they leave' this house says; mixed-methods means reading both neighbors' ledgers together.</div>
<table class="kv-table">
<tr><th>মিনার (Quantitative)</th><th>চায়ের দোকান (Qualitative)</th></tr>
<tr><td class="hl">প্রশ্ন: কত? কতজন?</td><td class="hl">প্রশ্ন: কেন? কেমন অনুভব?</td></tr>
<tr><td>নমুনা-আকার = শক্তি-হিসাব</td><td>নমুনা-শেষ = saturation</td></tr>
<tr><td>যন্ত্র: t-test, regression</td><td>যন্ত্র: coding, thematic analysis</td></tr>
<tr><td>বিশ্বাসযোগ্যতা: p-value, CI</td><td>বিশ্বাসযোগ্যতা: triangulation, member-checking</td></tr>
<tr><td>ফল: সংখ্যায় সম্পর্ক</td><td>ফল: শব্দে গভীর বোঝা</td></tr>
</table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফাঁদ-চেতনা:</strong> সাক্ষাৎকার নিয়ে 'আমার মনে হয় তারা এই বোধ করে' — গবেষকের অনুমান উপাত্ত নয়! প্রতিটি দাবির পাশে থাকবে সাক্ষাৎকারের উদ্ধৃতি (quote), নইলে থিম কাগজে-কলমে শুধু তোমার কল্পনা।</div></div>
<div class="verse">فَبِشِرْ عِبَادِ الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ — "তারা কথা শোনে, তার সরলটি গ্রহণ করে।" (কুরআন ৩৯:১৮) — শোনা এক ইবাদত, যদি তুমুহুর-সহ (সুনিবিড়ভাবে) শোনো।</div>
<div class="secret-box">🫖 সংখ্যা মাপে প্রশ্নের <em>আকার</em>, গল্প খোলে প্রশ্নের <em>গভীরতা</em> — খোলা প্রশ্ন → কোডিং → থিম → saturation → ত্রিভুজায়ন: মুহাদ্দিসের পাঁচ ধাপ, আজও সোনার মানের।</div>`,
  senior: {
    title: "RSH 8013 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> LedgerPilot-এর একজন ব্যবহারকারীর সাথে ১৫ মিনিটের খোলা-প্রশ্ন সাক্ষাৎকার নাও (রেকর্ড অনুমতি-সহ), পরে তিনটা কোড বের করো — এটাই প্রথম থিম-বীজ। <strong>কোর্সে:</strong> qualitative ডিজাইন (phenomenology/case study/grounded theory-ধারণা), সাক্ষাৎকার-পদ্ধতি, coding ও thematic analysis, saturation, trustworthiness, triangulation, নীতি (IRB/সম্মতি)। <strong>Artifact:</strong> কোডেড সাক্ষাৎকার-সেট + থিম-রিপোর্ট। <strong>ডিজার্টেশন-সেতু:</strong> IT-গবেষণায় qualitative শক্তিশালী পথ (SME-প্রযুক্তি গ্রহণ, ব্যবহারকারী-অভিজ্ঞতা); তোমার LedgerPilot/Ipractus-ক্ষেত্র এ জন্যই সোনার খনি। <strong>ফাঁদ:</strong> ইঞ্জিনিয়ার-অধৈর্য — 'কোথায় সংখ্যা?' প্রতিটি থিমের সমর্থনে quote-সংখ্যা রাখো (যেমন: ২৫-এর ১৭ জন একই বাধা বলেছে) — সেটাও এক মাপ।</p>`
  }
});

// ── দরজা ১৫ · স্থপতির প্রাসাদ ──────────────────
doors.push({
  num: 15,
  icon: "📐",
  color: "#5eead4",
  name: "স্থপতির প্রাসাদ",
  subtitle: "The Architect's Palace — Research Design (RSH 8023)",
  tech: "Research Design · Experimental/Quasi/Non-Experimental · Validity (Internal/External) · Sampling · IRB/Ethics",
  spirit: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ — 'মানুষকে সর্বোত্তম গড়নে সৃষ্টি' (কুরআন ৯৫:৪); গবেষণা-নকশাও সৃষ্টি — তাই নকশাবিদের নৈতিকতা",
  secret: "গবেষণা করার আগে গবেষণা 'বানাতে' হয় — প্রশ্ন, ডিজাইন, নমুনা, নীতি: চার স্তম্ভের কোনোটা দুর্বল হলে প্রাসাদ ফল বহন করবে না।",
  recall: {
    q: "Internal validity আর external validity-র পার্থক্য?",
    qen: "Difference between internal and external validity?",
    a: "Internal = ফল কি সত্যিই কারণের জন্য (ভেতরের সততা)? External = ফল কি অন্য মানুষ/জায়গায়ও খাটে (বাইরের সাধারণীকরণ)?",
    aen: "Internal = does the effect truly follow from the cause? External = does it generalize to other people, places, settings?"
  },
  story: `<p class="scene-setting">রিসার্চ-শহরের তৃতীয় স্টেশন এক স্থপতির প্রাসাদ — দেয়ালে শত নকশা, টেবিলে অসমাপ্ত এক নগর-পরিকল্পনা। প্রধান স্থপতি বলেন, "মিনারে তুমি যন্ত্র শিখেছ (RSH 8003), চায়ের দোকানে শোনা শিখেছ (RSH 8013)। এখন শিখবে <strong>গবেষণা নির্মাণ</strong> — কারণ যন্ত্র ভুল জায়গায় বসালে সুন্দর সংখ্যাও মিথ্যা প্রাসাদ তোলে। আমার চার প্রশ্ন: <strong>কী প্রশ্ন (question), কোন নকশা (design), কাদের নিয়ে (sample), কী নিয়মে (ethics)</strong>।" তিনি এক নকশা দেখালেন — কাকতালীয় ভেদ নির্মূলের চার রূপ: true-experimental (দল-বিভাজন যথেচ্ছ), quasi (প্রাকৃতিক দল), correlational (শুধু পর্যবেক্ষণ), আর qualitative বিন্যাস। প্রতিটির পাশে লাল কালিতে: <strong>ভাঙার জায়গা</strong> — history, maturation, selection-bias... "এগুলো আমাদের ভূমিকম্প; নকশা এমন যেন ভূমিকম্প-সহনশীল হয়।" এই প্রাসাদের নাম RSH 8023 — Research Design।</p>
<p class="scene-setting en">The research city's third station is an architect's palace — a hundred blueprints on the walls, an unfinished city-plan on the table. The chief architect says, "In the minaret you learned instruments (RSH 8003); in the tea-house, listening (RSH 8013). Now you learn <strong>research construction</strong> — for an instrument placed wrongly raises a beautiful palace of numbers upon lies. My four questions: <strong>what question, which design, on whom, under what rules (ethics)</strong>." He showed one blueprint — four forms of eliminating coincidence: true-experimental (random assignment), quasi (natural groups), correlational (observation only), and qualitative layouts. Beside each, in red ink: <strong>fracture points</strong> — history, maturation, selection-bias... "These are our earthquakes; the design must be quake-resistant." This palace is RSH 8023 — Research Design.</p>
<div class="dialogue"><strong>তুমি:</strong> স্থপতি-সাহেব, IT-গবেষণায় সাধারণত কোন নকশা?<br><strong>প্রধান স্থপতি:</strong> প্রশ্নের স্বভাব দেখো: 'নতুন টুল কি কাজে লাগায়?' → experimental/quasi (মাপা তুলনা); 'লোকে কেন গ্রহণ করে/করে না?' → survey/correlational বা qualitative; 'এক কোম্পানিতে কী ঘটল?' → case study। আর দুই চোখ সবসময় খোলা: <strong>internal validity</strong> (তোমার ফল নিজের পরীক্ষার ভেতরে টেকে কি?) আর <strong>external validity</strong> (অন্য জায়গায়ও টেকে কি?)। এক ল্যাবে দশ ছাত্রে প্রমাণিত UI-উন্নতি ঢাকার পাইলট-ব্যবসায় নাও চলতে পারে — এটাই external-এর শাস্তি।<br><strong>তুমি:</strong> আর নমুনা?<br><strong>প্রধান স্থপতি:</strong> probability-sample (যথেচ্ছ-টানা) = সাধারণীকরণের অনুমতি; convenience-sample (যারা হাতের কাছে) = সাবধানে বাউন্ডেড-দাবি। আর সব মানুষ-গবেষণার আগে <strong>IRB-অনুমতি ও সম্মতি-পত্র</strong> — প্রাসাদ যত সুন্দরই হোক, জবরদস্তির ভিতের ওপর চড়ে না।</div>
<div class="dialogue en"><strong>You:</strong> Architect, which design dominates IT research?<br><strong>Chief Architect:</strong> Follow the question's nature: 'Does the new tool work?' → experimental/quasi (measured comparison); 'Why do people adopt or resist?' → survey/correlational or qualitative; 'What happened in this one company?' → case study. Keep two eyes always open: <strong>internal validity</strong> (does your result hold inside your own study?) and <strong>external validity</strong> (does it hold elsewhere?). A UI improvement proven on ten students in one lab may not survive Dhaka pilot-businesses — that is external validity's verdict.<br><strong>You:</strong> And sampling?<br><strong>Chief Architect:</strong> Probability sampling (random draws) = license to generalize; convenience sampling (whoever's near) = carefully bounded claims. And before any human-subjects research: <strong>IRB approval and consent forms</strong> — however beautiful the palace, it may not stand on coerced foundations.</div>
<table class="kv-table">
<tr><th>নকশা</th><th>কখন</th><th>ভাঙার জায়গা (threats)</th></tr>
<tr><td class="hl">True Experimental</td><td>যথেচ্ছ দল-বিভাজন সম্ভব</td><td>ব্যয়, অনৈতিক নিয়ন্ত্রণ-বঞ্চনা</td></tr>
<tr><td class="hl">Quasi-Experimental</td><td>প্রাকৃতিক দল (ক্লাস/কোম্পানি)</td><td>selection-bias — দল তুল্য নয়</td></tr>
<tr><td class="hl">Correlational/Survey</td><td>হস্তক্ষেপ অসম্ভব/অনৈতিক</td><td>কারণ প্রমাণ করে না</td></tr>
<tr><td class="hl">Case Study</td><td>গভীর একক-প্রেক্ষিত</td><td>সাধারণীকরণ সীমিত</td></tr>
</table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফাঁদ-চেতনা:</strong> ডেটা আগে জমিয়ে রেখে পরে প্রশ্ন-ছাঁচে ঢালা — ফলে যা-ই আসুক 'উত্তর' বলে চালানো। নকশা-পূর্ব ডেটা = ভিত-পূর্ব ইট; স্থপতির প্রথম আঁকা হয় প্রশ্ন।</div></div>
<ul class="checklist">
<li>নিজের সম্ভাব্য ৩ ডিজার্টেশন-প্রশ্নের জন্য প্রতিটির সাথে নকশা-নাম লিখে রাখো</li>
<li>প্রতিটি নকশার 'ভাঙার জায়গা' আগে থেকে লিখে রাখো — পরীক্ষক জিজ্ঞেস করবেনই</li>
<li>Trine-এর IRB/ethics-প্রক্রিয়া এখন থেকেই জেনে রাখো</li>
</ul>
<div class="verse">وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ — "যার জ্ঞান নেই তার পিছু নিয়ো না।" (কুরআন ১৭:৩৬) — নকশা মানে জ্ঞানের সীমানা স্বীকার করা।</div>
<div class="secret-box">📐 গবেষণা প্রাসাদের চার স্তম্ভ: প্রশ্ন → নকশা → নমুনা → নীতি; দেয়ালের লাল-দাগ হলো validity-হুমকি — ভূমিকম্প-সহনশীল নকশাই ডিজার্টেশন বাঁচায়।</div>`,
  senior: {
    title: "RSH 8023 — ঢোকার আগে, বেরোনোর পর",
    body: `<p><strong>প্রস্তুতি:</strong> একটা প্রিন্ট করা গবেষণা-নথি নাও আর তার নকশা-সারণি আঁকো (design → sample → threats) — চোখ খুলবে। <strong>কোর্সে:</strong> experimental/quasi/correlational/qualitative ডিজাইন, validity-প্রকার, sampling, IRB/নীতি, G*Power-ধারণায় শক্তি-বিশ্লেষণ। <strong>Artifact:</strong> সম্পূর্ণ গবেষণা-পরিকল্পনা (প্রশ্ন+নকশা+নমুনা+নীতি+বিশ্লেষণ-পরিকল্পনা)। <strong>ডিজার্টেশন-সেতু:</strong> এই কোর্সের artifact-ই কার্যত প্রস্তাবনার খসড়া — DIT 7003/7006-এ সরাসরি ব্যবহার; সর্বোচ্চ মনোযোগে করো। <strong>ফাঁদ:</strong> 'আমার ডেটা তো আছে, নকশা পরে ভাবা যাবে' — ডিজার্টেশন-কমিটি প্রথম প্রশ্নেই ধরবে; নকশা পরে হলে সেটা গল্প, গবেষণা নয়।</p>`
  }
});

// ── দরজা ১৬ · গবেষণার তাঁত — একাডেমিক-লেখার কার্যশালা ──────────────────
doors.push({
  num: 16,
  icon: "🧵",
  color: "#5eead4",
  name: "গবেষণার তাঁত",
  subtitle: "The Loom of Research — Advanced Methodology & Academic Writing (RSH 8033)",
  tech: "Advanced Methods · Literature Review · Mixed Methods · Academic Writing · APA Style · Scholarly Voice",
  spirit: "الْعِلْمُ بِلَا عَمَلٍ كَالشَّجَرِ بِلَا ثَمَرٍ — 'কাজবিহীন জ্ঞান ফলবিহীন গাছের মত' (প্রবাদ); জ্ঞানের ফল = লিখিত সাক্ষ্য",
  secret: "গবেষণা 'করা' এবং গবেষণা 'লেখা' এক নয় — তাঁতে সুতো তুলে রাখা আর কাপড় বোনা আলাদা শিল্প; পিএইচডি-শহরে কাপড়ই মূল্য পায়।",
  recall: {
    q: "Literature review আর annotated bibliography-র পার্থক্য?",
    qen: "Difference between a literature review and an annotated bibliography?",
    a: "Annotated bibliography = সূত্র-তালিকা, প্রতিটির পাশে সারাংশ। Literature review = <strong>যুক্তিনির্মাণ</strong> — সূত্রগুলোকে থিম ধরে বুনে দেখানো কোথায় ফাঁক, কোথায় তোমার কাজ বসে।",
    aen: "Annotated bibliography = a source list with summaries. Literature review = argument-building — weaving sources by theme to reveal the gap your work fills."
  },
  story: `<p class="scene-setting">রিসার্চ-শহরের শেষ স্টেশন এক বিশাল তাঁত-কার্যশালা। মাস্টার-তাঁতিও বয়স্কা এক মহিলা — চোখে চশমা, হাতে কয়েক হাজার প্রবন্ধ বোনার ডাকসাইট। তাঁর তাঁতে তিন ধরনের সুতো: <strong>সাদা</strong> (তোমার প্রশ্ন), <strong>নীল</strong> (আগের গবেষণা), <strong>সোনালি</strong> (তোমার সংযোজন)। বললেন, "মিনার থেকে যন্ত্র আনো, দোকান থেকে শোনা, প্রাসাদ থেকে নকশা — কিন্তু কাপড় এই তাঁতেই বোনা হয়: <strong>শিরোনাম → সার-নির্যাস → ভূমিকা → পদ্ধতি → ফল → আলোচনা</strong>। আর মনে রেখো — কাপড় না বোনলে সুতোর কোনো দাম নেই; গবেষণা না লিখলে করার কোনো দাম নেই।" এই তাঁতের নাম RSH 8033 — Advanced Methodology।</p>
<p class="scene-setting en">The research city's last station is a vast loom-house. The master-weaver is an elderly woman — spectacles on her nose, thousands of articles woven in her time. Her loom takes three threads: <strong>white</strong> (your question), <strong>blue</strong> (prior research), <strong>gold</strong> (your contribution). She says, "Bring instruments from the minaret, listening from the tea-house, blueprints from the palace — but the cloth is woven here: <strong>title → abstract → introduction → methods → results → discussion</strong>. And remember — thread un-woven is worthless; research un-written never happened." This loom is RSH 8033 — Advanced Methodology.</p>
<div class="dialogue"><strong>তুমি:</strong> তাঁতি-দাদি, আমার ইঞ্জিনিয়ারিং-রিপোর্ট তো দারুণ হয় — README, ডকুমেন্টেশন... এই তাঁত কী নতুন শেখাবে?<br><strong>মাস্টার-তাঁতি:</strong> ইঞ্জিনিয়ারিং-লেখা বলে 'কী বানালাম, কীভাবে চালাবেন'। শিক্ষা-লেখা বলে 'কেন এই প্রশ্ন, কারা আগে কী বলেছে, আমার সংযোজন কোথায়, সীমাবদ্ধতা কী'। পার্থক্য একটাই: <strong>স্বর (voice)</strong> — তুমি আর 'ডেভেলপার রাকিব' নয়, 'গবেষক রাকিব'; তোমার প্রতিটি বাক্য স্বীকৃতি-দেনা শোধ করবে (citation), প্রতিটি দাবির পাশে প্রমাণ থাকবে। আর APA-রীতি শেখো — শিক্ষা-গবেষণার লেখার সরকারি পোশাক।<br><strong>তুমি:</strong> আর mixed methods?<br><strong>মাস্টার-তাঁতি:</strong> সাদা-নীল-সোনালি একসাথে! মিনারের সংখ্যা + দোকানের গল্প = একই প্রশ্নের দুই চোখ — quantitative বলে 'কত', qualitative বলে 'কেন', তুমি বলো পুরো গল্প। IT-গবেষণায় এটাই বর্তমানে সবচেয়ে সম্মানিত তাঁত।</div>
<div class="dialogue en"><strong>You:</strong> Grandmother-weaver, my engineering reports are excellent — READMEs, documentation... what does this loom teach anew?<br><strong>Master-Weaver:</strong> Engineering-writing says 'what I built, how to run it.' Scholarly-writing says 'why this question, who said what before, where my contribution sits, what the limits are.' One difference: <strong>voice</strong> — you are no longer 'developer Rakib' but 'researcher Rakib'; every sentence pays its citation-debt, every claim stands beside evidence. And learn APA style — scholarly writing's official dress.<br><strong>You:</strong> And mixed methods?<br><strong>Master-Weaver:</strong> White-blue-gold together! The minaret's numbers + the tea-house's stories = two eyes on one question — quantitative says 'how much,' qualitative says 'why,' you tell the whole story. In IT research this is today's most respected loom.</div>
<table class="kv-table">
<tr><th>তাঁতের অংশ (Paper)</th><th>কাজ</th><th>ইঞ্জিনিয়ার-অনুবাদ</th></tr>
<tr><td class="hl">Abstract</td><td>১৫০-২৫০ শব্দে পুরো কাপড়ের নকশা</td><td>README-র প্রথম প্যারা — কিন্তু ফল সহ</td></tr>
<tr><td class="hl">Introduction</td><td>সমস্যা + ফাঁক + প্রশ্ন</td><td>'Problem statement' কিন্তু সাহিত্য-প্রেক্ষিতসহ</td></tr>
<tr><td class="hl">Literature Review</td><td>থিম-ধরে আগের কাজের বুনন, ফাঁক-প্রদর্শন</td><td>'Related work' — কিন্তু যুক্তি-নির্মাণ, তালিকা নয়</td></tr>
<tr><td class="hl">Methods</td><td>পুনরায়-উৎপাদনযোগ্য পদ্ধতি-বর্ণনা</td><td>Setup/পরিবেশ-বর্ণনার কঠোর চাচা</td></tr>
<tr><td class="hl">Results & Discussion</td><td>সংখ্যা তারপর অর্থ — আলাদা করে</td><td>'Output' তারপর 'interpretation'</td></tr>
</table>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>রিহলা-সেতু:</strong> তোমার লাইব্রেরির Book 27 (Research Paper Craftsman — IMRaD, ৩-পাস পড়া) এবং Book 26 (Knowledge Craftsman — Zettelkasten নোট) এই তাঁতের দুই হাতিয়ার। RSH 8033 চলাকালে সেগুলো মুখস্থ থাকবে তো কোর্স বাতাসের মত লাগবে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফাঁদ-চেতনা:</strong> 'আমি ভালো লিখতে পারি' ভেবে খসড়া না দেখিয়ে জমা — academic writing আলাদা শিল্প; Trine-এর writing-center ব্যবহার করো, সহকর্মী-সমালোচনা (peer review) খাও, প্রতিটি খসড়া কমপক্ষে দুইবার ঘুরিয়ে লেখো।</div></div>
<div class="verse">اقْرَأْ وَرَبُّكَ الْأَكْرَمُ الَّذِي عَلَّمَ بِالْقَلَمِ — "পড়ো... যিনি শিখিয়েছেন কলমের মাধ্যমে।" (কুরআন ৯৬:৩-৪) — কলমের সম্মান কাপড় বোনার সম্মান।</div>
<div class="secret-box">🧵 গবেষণার ফল নয়, <em>লেখা</em> গবেষণার ফল — সাদা (প্রশ্ন) × নীল (সাহিত্য) × সোনালি (সংযোজন) সুতোয় বোনো IMRaD-কাপড়; voice বদলাও: developer → researcher। এই তাঁত পেরোলেই প্রস্তাবনার দরজা।</div>`,
  senior: {
    title: "RSH 8033 — ঢোকার আগে, বেরোনোর পর (রিসার্চ-পঞ্চয় সমাপ্তি)",
    body: `<p><strong>প্রস্তুতি:</strong> তোমার ক্ষেত্রের ৩টি পিয়ার-রিভিউ নথি বের করো, ৩-পাস পদ্ধতিতে পড়ো (Book 27), প্রত্যেকের থেকে থিম-সূত্র লেখো। <strong>কোর্সে:</strong> উন্নত গবেষণা-পদ্ধতি, mixed-methods ডিজাইন, literature review-লেখা, academic writing ও APA, scholarly voice, সম্ভবত নথি-বিশ্লেষণ অ্যাসাইনমেন্ট। <strong>Artifact:</strong> সাধারণত একটি সম্পূর্ণ গবেষণা-পরিকল্পনা বা খসড়া-নথি — এটাই DIT 7003/7006-এর সরাসরি বীজ। <strong>ডিজার্টেশন-সেতু:</strong> এই কোর্স শেষে তুমি প্রস্তাবনা লেখার সব উপকরণে সজ্জিত — পরের দুই দরজা সেটাই। <strong>ফাঁদ:</strong> 'পরে লিখব' — কোর্সের প্রতিটি লেখা-অ্যাসাইনমেন্টকে প্রস্তাবনার ইট বানাও; চতুর্থ মিনার শেষে সময় থাকবে না বললেই থাকবে।</p>`
  }
});
// END-DOORS-13-16
