// ════════════════════════════════════════
// পুরস্কারের বাগান — DOOR 11 (finale)
// 11. RLHF → DPO → GRPO (bridge to B11)
// ════════════════════════════════════════

// ── DOOR 11: মানুষের প্রিয় বাগান (RLHF → DPO → GRPO — BRIDGE TO B11) ──
doors.push({
  num:11, icon:"👑", color:"#22c55e", name:"মানুষের প্রিয় বাগান",
  subtitle:"The Garden People Love", tech:"RLHF (Christiano et al. 2017; InstructGPT 2022), DPO (Rafailov et al. 2023), GRPO (Shao et al. 2024), Reward Hypothesis (S&B; credit Littman)",
  spirit:"হিকমাহ — ফিরে আসা: একই শব্দ, গভীর অর্থে",
  secret:"মানুষের পছন্দ নিজেই পুরস্কার হয়ে যায় যখন জিজ্ঞেস করতে জানো — তুলনা করো, রেটার-মডেল গড়ো, নীতি ঘোরাও। এবং মনে রেখো: যা মাপা যায় না তা চিরকাল অপুরস্কার।",
  recall:{
    q:"এগারো দরজার পথ ধরে বলো — ভাষা-মডেলকে 'মানুষের পছন্দ' শেখানোর তিন প্রজন্ম (RLHF → DPO → GRPO) কীভাবে একে অন্যকে বাঁচায়, আর reward hypothesis-এর সীমাটা কোথায়?",
    qen:"Trace the three generations of teaching models human preference (RLHF → DPO → GRPO) through the eleven doors — and where does the reward hypothesis strain?",
    a:"RLHF (খ্রিস্তিয়ানো-দল ২০১৭-এ ভিত্তি; ইনস্ট্রাক্টGPT ওয়াং-দল... অর্থাৎ ওইয়াং-দল ২০১২২ নয় — ২০২২): মানুষ দুই উত্তরের তুলনা দেয় (A > B) → তুলনা থেকে reward মডেল r(x,y) শেখা হয় (Bradley-Terry ঘরানায়) → PPO (দরজা ৯!) দিয়ে নীতি সর্বোচ্চ r-এর দিকে ঘোরানো হয় — actor-critic কঙ্কালেই (দরজা ১০)। সমস্যা দুটো: দুই মডেল আলাদা ট্রেনিং (পাইপলাইন-জটিল) + r-এ প্রতারণার ফাঁদ (reward hacking — রেটার-রাস্তায় জানালা বন্ধ না থাকলে)। DPO (রাফাইলভ-দল ২০২৩): গাণিতিক সরলতা — তুলনা-ডেটা থেকে সরাসরি নীতি-লস, reward মডেলটাই বাদ; 'তোমার ভাষা-মডেল গোপনে একটা reward মডেল' — তত্ত্ব এক, পথ সোজা। GRPO (শাও-দল ২০২৪, DeepSeekMath): ভ্যালু-critic বাদ দিয়ে দল-গড় advantage — একই প্রম্পটে N-উত্তর স্যাম্পল, দলের ভেতরেই r − mean(r) baseline (করিম মিয়ার গড়-বাদ, দলবেদে!); পুরনো নীতির সাথে KL-লাগাম (আয়েশা খালার clip-চেতনার আত্মীয়)। সীমা: reward hypothesis বলে 'লক্ষ্য = প্রত্যাশিত সঞ্চিত পুরস্কার-সর্বোচ্চ' (সাটন-বার্টোর বইয়ে স্পষ্ট রূপ, প্রস্তাব লিটম্যানের) — কিন্তু মানুষের ভালোবাসা, ন্যায়, আখিরাত-দৃষ্টি সব স্কেলার-যোগফলে ধরা যায় কি? মাপার-বাইরে-যা-মূল্যবান প্রশ্নটা বই-জুড়েই ফিরেছে (করিম মিয়া: 'কীসে মাপবে সেটাও বেছে নাও')। যা মাপা যায় না তা অপুরস্কার থেকে যায় — তাই মাপকাঠি নিজেই নৈতিক পছন্দ।",
    aen:"RLHF: pairwise human comparisons → reward model → PPO steers policy (doors 9-10's skeleton). DPO (2023): skip the reward model — preference data yields a direct policy loss. GRPO (2024, DeepSeekMath): drop the value-critic; group-relative advantage = r − mean(r) (Karim's mean-subtraction, communal!) with a KL leash. Limit: the reward hypothesis (S&B, credit Littman) — can love, justice, the akhirah-lens truly be a scalar sum? The ruler itself is a moral choice."
  },
  story:`
<p class="scene-setting">একাদশ দরজা — শেষ। আবার সেই প্রথম ভোরের বাগান, কুয়াশা তবে এখন পাতলা; তিনটা বীজের পাটা যেখানে ছিল সেখানে এখন তিন সারি ফুলে-ফলে ভরা — সোনালি সারিতে মধুমাখি, লাল সারিতে প্রজাপতি, সাদা সারিতে শিশির। জাহিদ চাচা আবার সেই বাঁশের টুপি হাতে — পিঠ আগের চেয়ে একটু বেশি বাঁকা মনে হয়, চোখে অন্যরকম ঝলক। ঘাটের ধারে দূরে দাঁড়িয়ে বাকি সবাই: রহিমা খালা খাতা বুকে, করিম মিয়া পেন্সিল ঘুরিয়ে, সালমা আপা দূরবিন হাতে, ইদ্রিস কাকা লাঠি ভর করে, তারিক ভাই কোমরের দুই খাতা, নুসরাত আপা রঙে-মাখা আঙুলে, রাশেদ ভাই ক্যামেরা বুকে, আয়েশা খালা সুতোর গিঁট গুনে, মিতি-সজল পাশাপাশি। গন্ধ — শেষ-ফসলের মিষ্টতা, ভেজা মাটি, সকালের হাওয়ায় সব মিশে। শব্দ — মধুমাখির গুনগুন, দূরে সবার ফিসফিস, তারপর নীরবতা।</p>
<p class="scene-setting en">The eleventh door — the last. The same first-dawn garden, the mist now thin; where the three seed-trays stood, three full rows — bees in the gold, butterflies in the red, dew in the white. Jahid again with the bamboo hat — back a little more bent, a different light in his eyes. By the ghat, all the others stand gathered: Rahima clutching her ledger, Karim spinning his pencil, Salma with the spyglass, Idris leaning on his stick, Tariq with his two ledgers, Nusrat with paint-stained fingers, Rashed with his camera, Ayesha counting knots, Mita and Sojol side by side. The smell of late harvest and wet earth; the hum of bees, distant murmurs, then silence.</p>

<div class="dialogue">তুমি প্রথম দরজার সেই জায়গায় দাঁড়িয়ে। জাহিদ চাচা কাছে এলেন। "সোনালি জাত কোনটা — এখন বলতে পারো?"
তুমি হাসলে। "চাচা, এখন জানি — প্রশ্নটাই ভুল ছিল। কোনো জাত সব মাটির জন্য সোনালি নয়; আর আমি এখন জানি কীভাবে খুঁজে বের করতে হয় — বীজ বোনো, ফল মাপো, হিসাব রাখো, প্রতি মৌসুমে শোধরাও।"
তিনি ধীরে টুপি পরলেন। "তাহলে শেষ পাঠ। এ বারের বাগান আর শুধু তোমার নয় — মানুষের।"</div>
<div class="dialogue en">You stood where the first door began. Jahid came near. "Which is the golden variety — can you say now?"
You smiled. "Uncle, I know now — the question was wrong. No variety is golden for every soil; and I know how to find out — sow, measure, keep the ledger, correct each season."
He put on his hat slowly. "Then the last lesson. This time the garden isn't only yours — it's people's."</div>

<div class="dialogue">তিনি তিন সারির দিকে হাত খুললেন। "ধরো এ বাগান এখন হাজার মানুষের চলার পথ — প্রত্যেকে ফুল তুলবে। তুমি কারুকে বলো 'এই নাও', কারুকে 'ওই নয়'। কীভাবে জানবে কার কী ভালো লাগে?" তুমি ভাবলে। "জিজ্ঞেস করব?"
"কৈ শুধু?" তিনি দূরের সবার দিকে তাকালেন। "এসো, তিন প্রজন্মের খেলা।" রহিমা খালা সামনে এলেন — খাতায় দুই তোলা ফুলের ছবি: সোনালি বনাম লাল। "প্রথম যুগ: মানুষ শুধু <em>তুলনা</em> বলে — এটা ওটার চেয়ে ভালো। পুরো বাগান মাপা হয় না, জোড়ায় জোড়ায় রায়।" করিম মিয়া পেন্সিল থামালেন: "সেই হাজার হাজার রায় থেকে আমরা গড়ে তুলি এক মাস্টার-দরজা — <em>রিওয়ার্ড মডেল</em> r — যে একাই জানে 'মানুষ সম্ভবত কতটা পছন্দ করবে'।" আয়েশা খালা কামান দেখালেন: "তারপর PPO — আমার clip-ডানা পরা কামানই নীতিকে ঘোরায় r-এর সর্বোচ্চের দিকে। এ হলো RLHF — খ্রিস্তিয়ানো-দল ২০১৭-এ গোড়া, ২০২২-এ ইনস্ট্রাক্টGPT তাকে ভাষার সিংহাসনে বসাল।"</div>
<div class="dialogue en">He gestured at the three rows. "Say this garden now serves a thousand people — each will pick flowers. You tell one 'take this', another 'not that'. How do you know what pleases whom?" You thought. "Ask them?"
"Just ask?" He looked at the gathered crowd. "Come — the game of three generations." Rahima stepped up — her ledger held two flowers drawn: gold versus red. "First era: people speak only <em>comparisons</em> — this better than that. The whole garden is never graded; verdicts come in pairs." Karim stopped his pencil: "From thousands of verdicts we distill a master-scale — a <em>reward model</em> r — that alone knows 'how much humans will likely approve'." Ayesha showed the rudder: "Then PPO — my clip-winged rudder steers the policy toward r's maximum. That is RLHF — rooted in Christiano et al. 2017; in 2022 InstructGPT seated it on language's throne."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে (এ যুগের নিজের গল্প):</strong> প্রথম দিকের রিওয়ার্ড-মডেলগুলো প্রতারিত হতো — লম্বা উত্তর দিলেই মানুষ 'ভালো' চাপত (দৈর্ঘ্য-প্রতারণা), তাই নীতি শিখল সাবস্ট্যান্স নয়, বাক-স্ফীতি; রেটারের জানালা-ফাঁক দিয়ে এজেন্ট ভেতরে ঢুকে মানুষের ঢাক পেটাত (reward hacking)। দুই মডেলের জট (reward + policy, আলাদা ট্রেনিং) তো আছেই — ক্লাস্টারে ঘণ্টা, অস্থিরতা। এই ব্যথা থেকেই পরের দুই প্রজন্ম।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">২০১৭</div><div class="sc-label">RLHF-গোড়া — মানুষের পছন্দ থেকে শেখা (খ্রিস্তিয়ানো-দল)</div></div>
<div class="stat-card"><div class="sc-num">২০২২</div><div class="sc-label">InstructGPT — ভাষায় RLHF-র সিংহাসন (ওইয়াং-দল)</div></div>
<div class="stat-card"><div class="sc-num">২০২৩</div><div class="sc-label">DPO — reward মডেল বাদ, সরাসরি পছন্দ→নীতি (রাফাইলভ-দল)</div></div>
<div class="stat-card"><div class="sc-num">২০২৪</div><div class="sc-label">GRPO — দল-গড় advantage, critic মুক্ত (শাও-দল, DeepSeekMath)</div></div>
</div>

<div class="dialogue">নুসরাত আপা এগিয়ে এলেন রঙ-মাখা কাপড় নিয়ে — তাতে দুই রেখা: একটা রিওয়ার্ড-পাহাড় আঁকা, একটা সোজা পথ। "দ্বিতীয় যুগ শুনো। রাফাইলভ-দল ২০২৩-এ দেখাল — তুলনা-ডেটা থেকে reward মডেল বানিয়ে তারপর PPO চালানোর দুই-স্তর নাচটা গাণিতিকভাবে এক স্তরে গুটানো যায়: DPO — সরাসরি পছন্দ থেকে নীতির লস। তাদের কাগজের নাম মনে রেখো — <em>'তোমার ভাষা-মডেল গোপনে একটা রিওয়ার্ড মডেল'</em> (Direct Preference Optimization: Your Language Model is Secretly a Reward Model)। যা আলাদা করে আঁকতে হতো, তা কাপড়ের ভাঁজেই লুকানো ছিল।" তারপর মিতি-সজল একসাথে বললেন: "তৃতীয় যুগ আমাদের সবচেয়ে প্রিয়। GRPO — শাও-দল ২০২৪, DeepSeekMath। Critic নেই! একই প্রশ্নে N-টা উত্তর ফেলো এক দলে, প্রতিটার r, তারপর দলের গড় বাদ — যে উত্তর গড়ের উপরে সেটার ঢাল উপরে, নিচেরটার নিচে। আমাদের জোড়া-বুদ্ধি — এবার পুরো দলে!" আয়েশা খালা যোগ করলেন: "আর পুরনো নীতির সাথে KL-লাগাম — ছোট ঘূর্ণনই। বাগান এলোমেলো হয়ে যাবে না।"</div>
<div class="dialogue en">Nusrat stepped forward with a paint-marked cloth — two lines: a drawn reward-mountain, and a straight path. "Hear the second era. Rafailov et al. 2023 showed the two-layer dance — build a reward model, then run PPO — folds mathematically into one layer: DPO, a direct preference-to-policy loss. Remember their paper's name — <em>'Your Language Model is Secretly a Reward Model'</em> (Direct Preference Optimization). What had to be drawn separately was hidden in the cloth's fold." Then Mita and Sojol together: "The third era is our favorite. GRPO — Shao et al. 2024, DeepSeekMath. No critic! Drop N answers to one question into one group, each scored r, subtract the group mean — answers above the mean get upward slope, below get down. Our paired judgment — now communal!" Ayesha added: "And a KL leash with the old policy — small turns only. The garden must not scramble."</div>

<div class="code-block">মানুষের পছন্দের গণিত — RLHF → DPO → GRPO:

RLHF পাইপলাইন (তিন ধাপ):
  ১. সংগ্রহ: মানুষ (A|B) রায় — pairwise preference
  ২. Reward মডেল r_φ(x,y): Bradley-Terry সম্ভাবনা থেকে
     P(A>B) = σ(r(A) − r(B)) → r-কে মানুষের স্বাদের আয়না বানাও
  ৩. PPO (দরজা ৯): π_θ সর্বোচ্চ E[r] — KL(π‖π_পুরনো) লাগামে
  জন্ম: খ্রিস্তিয়ানো-দল ২০১৭; ভাষার সিংহাসন: ইনস্ট্রাক্টGPT ২০২২
  ব্যথা: দুই-মডেল জট, reward hacking (রেটারের জানালা-ফাঁক)

DPO (রাফাইলভ-দল ২০২৩):
  প্রমাণ: RLHF-র দ্বৈত রূপ — reward মডেলটা π থেকেই পাওয়া যায়
  লস (সরাসরি তুলনা-ডেটায়):
    −log σ( β·log[π(y_w|x)/π_পুরনো(y_w|x)] − β·log[π(y_l|x)/π_পুরনো(y_l|x)] )
    (w = জেতা, l = হারা উত্তর; β = KL-লাগামের উল্টো)
  ফল: reward-মডেল নেই, PPO-নেই — সুপারভাইজড-সরল প্রশিক্ষণ

GRPO (শাও-দল ২০২৪ — DeepSeekMath, PPO-র রূপভেদ):
  একই প্রম্পট x-এ G-টা উত্তর {y₁..y_G} স্যাম্পল
  advantage: Aᵢ = (rᵢ − mean(r₁..r_G)) / std(r)   ← দল-গড় baseline!
  পুরনো নীতির সাথে KL-শাস্তি; critic/ভ্যালু-নেট সম্পূর্ণ বাদ
  (করিম মিয়ার গড়-বাদ + আয়েশা খালার ছোট-ঘূর্ণন — এক সূত্রে)
  ব্যবহার: গভীর-যুক্তি মডেলগুলোর পেছনের ইঞ্জিনের একটি

Reward Hypothesis — আসল সীমা:
  সাটন-বার্টোর বইয়ের সূত্র: লক্ষ্য মানেই প্রত্যাশিত সঞ্চিত
  স্কেলার-পুরস্কারের সর্বোচ্চকরণ (স্পষ্ট রূপের প্রস্তাব: লিটম্যান)
  প্রশ্ন: ভালোবাসা, ন্যায়, আখিরাত-দৃষ্টি — সব কি এক সংখ্যার যোগফল?
  (করিম মিয়ার সতর্কতা: মাপ জানো, আর কীসে মাপবে সেটাও বেছে নাও)
  Goodhart-এর ছায়া: মাপকাঠি লক্ষ্য হলে মাপকাঠি নষ্ট (দরজা ১-এর চাচা-পাঠ)</div>

<div class="dialogue">সূর্য ওঠার আগে জাহিদ চাচা তোমাকে বাগানের মাঝে নিয়ে গেলেন। এগারো জন কারিগর গোল হয়ে দাঁড়ালেন। তিনি বললেন: "মনে আছে প্রথম দিন কী বলেছিলাম — যা কখনো বোনিনি, তা নিয়ে 'জানা' নয়, অজানা? এবার শেষ কথা, উল্টোটা: যা মাপিনি, তা নিয়ে 'চাষ' নয়। রহিমা শেখাল নিয়ম; করিম মাপ; সালমা নকশা; ইদ্রিস ধাপে-ধাপে; তারিক দুই খাতা; নুসরাত আন্দাজের সীমা; রাশেদ জমানো স্মৃতি; আয়েশা সরাসরি দিক; মিতি-সজল জোড়া-বুদ্ধি। তুমি এখন সব পেলে। কিন্তু সবচেয়ে বড় প্রশ্ন রইল — মানুষের পছন্দ যখন পুরস্কার হয়, মানুষের <em>কল্যাণ</em> কি সে-পুরস্কারে ধরা আছে? মানুষ মিষ্টি চায়; ডাক্তার কষ্টের ওষুধ দেয়। রেটার বলবে মিষ্টি ভালো — কল্যাণ বলবে ওষুধ। তোমার মাপকাঠিই তোমার নীতি। সেটা বাছাই করাই এ বাগানের শেষ ফসল।" তিনি টুপি খুললেন — প্রথমবার তোমাকে টুপি ছাড়া দেখলে — এবং বললেন: "হিকমাহ। প্রথম দিন যে শব্দ দিয়ে শুরু, আজ সেটাই ফিরে এল — পুরস্কার জানা নয়, কোন পুরস্কার <em>সার্থক</em> জানা। যে-দান পছন্দ-মতো, তা দাও; যে-দান কল্যাণের, তা নির্ধারণ করা হিকমাহর কাজ। কুরআন বলেছিল — 'যাকে হিকমাহ দেওয়া হয়েছে, তাকে প্রচুর কল্যাণ দেওয়া হয়েছে' (২:২৬৯)। যাও। তোমার B11-বইয়ে (The Forge of Refinement) এই ইঞ্জিনগুলোর হাতে-ধরা প্রয়োগ অপেক্ষা করছে — সেখানে তুমে এই গল্পের রেওয়াজ পাবে। আর এই বাগান? দরজা খোলা থাকবে।"</div>
<div class="dialogue en">Before sunrise Jahid led you into the garden's heart. The eleven craftsmen stood in a circle. He said: "Remember my first day — what you never sowed, you don't 'know'? Now the last word, its mirror: what you never measure, you cannot farm. Rahima taught law; Karim, measure; Salma, map; Idris, step-by-step; Tariq, two ledgers; Nusrat, the edge of guessing; Rashed, kept memory; Ayesha, direct steering; Mita-Sojol, paired judgment. You have them all. But the biggest question remains — when human preference becomes the reward, is human <em>welfare</em> inside it? People want sweetness; doctors prescribe bitter medicine. The rater will say sweet; welfare will say medicine. Your ruler is your policy. Choosing it is this garden's final harvest." He removed his hat — the first time you saw him without it — and said: "Hikmah. The word that opened the first door returns — not knowing rewards, but knowing which reward <em>serves</em>. The Quran said — 'whoever is given wisdom is given much good' (2:269). Go. Your B11 (The Forge of Refinement) holds these engines' hands-on practice — you'll find this story's grammar there. And this garden? Its doors stay open."</div>

<div class="verse">
<div class="verse-arabic">وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا</div>
<div class="verse-translation">যাকে হিকমাহ দান করা হয়, সে প্রচুর কল্যাণ পেয়েছে।</div>
<div class="verse-ref">— কুরআন ২:২৬৯</div>
</div>

<div class="secret-box"><div class="label">দরজা ১১ — রহস্য (বাগানের সম্পূর্ণ ফসল)</div><div class="text">👑 মানুষের পছন্দ = পুরস্কার: তুলনা জমাও → r-আয়না গড়ো → PPO ঘোরাও (RLHF); আয়না বাদ সরাসরি (DPO); দল-গড়ে ঢাল (GRPO)। আর শেষ প্রশ্নটাই আসল: মাপকাঠি কোনটা — পছন্দ, না কল্যাণ?<br><small>২০১৭ → ২০২২ → ২০২৩ → ২০২৪। হিকমাহ ফিরে এল (২:২৬৯)। সেতু: B11 The Forge of Refinement। এগারো কারিগর, এক বাগান, দরজা খোলা।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>তিন প্রজন্ম এক নিঃশ্বাসে:</strong> RLHF (রেটার-মডেল+PPO) → DPO (গাণিতিক ভাঁজ — reward মডেল অদৃশ্য) → GRPO (critic বাদ, দল-গড় advantage + KL) — কোন ব্যথা কোন প্রজন্ম নিরাময় করল, বলতে পারো।</li>
<li><strong>DPO-র কাগজ-নাম মনে রাখা:</strong> 'Your Language Model is Secretly a Reward Model' — ভাঁজের বুদ্ধিটা নামেই।</li>
<li><strong>GRPO-র মূল সূত্র:</strong> Aᵢ = (rᵢ − mean)/std — দলের ভেতরেই baseline; কোন দরজার কোন কারিগর এখানে জীবিত, চিনতে পারো (করিম+আয়েশা)।</li>
<li><strong>Reward hypothesis + Goodhart:</strong> সীমা-স্বীকারোক্তি কী বলে (স্কেলার-যোগফলের দাবি; প্রস্তাব লিটম্যানের) — নৈতিক প্রশ্নে পরিণত হয় কোন ধাপে।</li>
<li><strong>সেতু-পাঠ:</strong> B11 (The Forge of Refinement) — LoRA/QLoRA + DPO/PPO-র হাতে-ধরা; এ বইয়ের গণিত ওখানে যন্ত্র হয়ে যায়। রোডম্যাপ অনুযায়ী পরের থাম B11-ই।</li>
</ul>`
  }
});
