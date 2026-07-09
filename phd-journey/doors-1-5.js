// ════════════════════════════════════════
// গবেষণার তীর্থযাত্রা — DOORS 1-5
// PhD Journey: Decision → Funding
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: IS PHD RIGHT FOR YOU? ══
doors.push({
  num:1, icon:"🏔️", color:"#5eead4", name:"সন্ধিক্ষণের চৌরাস্তা",
  subtitle:"The Crossroads of Decision", tech:"Is PhD Right for You?",
  spirit:"হিজরত — পরিচিত জায়গা ছেড়ে অজানায় যাওয়া",
  secret:"PhD কোনো ডিগ্রি নয় — একটা জীবনধারা। ৫-৭ বছরের আজীবন সংকল্প। কেন তুমি এটা করতে চাও — সেই উত্তর ছাড়া শুরু করো না।",
  recall:{
    q:"তীর্থযাত্রী কেন যাত্রা শুরুর আগে থামে, নিজেকে প্রশ্ন করে?",
    qen:"Why does the pilgrim pause before starting, asking themselves questions?",
    a:"কারণ তীর্থযাত্রা দীর্ঘ — অর্ধেক পথে ফিরে এলে সব নষ্ট। PhD-ও তেমনি — ৫-৭ বছর। ভালো কারণ ছাড়া শুরু করলে মাঝপথে ভেঙে পড়বে। কেন চাও — সেটাই আসল প্রশ্ন।",
    aen:"Because pilgrimage is long — turning back midway wastes everything. PhD too — 5-7 years. Without a good reason, you'll break midway. Why you want it — that's the real question."
  },
  story:`
<p class="scene-setting">প্রথম স্থান। একটা চৌরাস্তা। চার দিকে চার রাস্তা — ইন্ডাস্ট্রি, স্টার্টআপ, মাস্টার্স, আর PhD। তুমি দাঁড়িয়ে আছো — কোন দিকে যাবে? একজন বয়স্ক তীর্থযাত্রী সালেহ পাশে এসে দাঁড়ালেন — লম্বা দাড়ি, হাতে লাঠি, চোখে শান্তি। "থামো," তিনি বললেন। "আগে ভাবো — কেন যেতে চাও?"</p>
<p class="scene-setting en">The first station. A crossroads. Four roads — industry, startup, master's, and PhD. You stand — which way? An elderly pilgrim Saleh comes beside — long beard, staff in hand, peace in eyes. "Stop," he said. "First think — why do you want to go?"</p>

<div class="dialogue">ইন্টারভিউ প্রস্তুতির মতো PhD-ও একটা যাত্রা — কিন্তু আরও দীর্ঘ, আরও গভীর, আরও একাকী। ৫-৭ বছর। তোমার জীবনের সেরা সময়। ভালো কারণ ছাড়া শুরু করলে মাঝপথে ভেঙে পড়বে। তাই আগে প্রশ্ন — কেন?</div>
<div class="dialogue en">"Like interview prep, PhD is a journey — but longer, deeper, more solitary. 5-7 years. The best years of your life. Without a good reason, you'll break midway. So first the question — why?"</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খারাপ কারণ</div>• "ভিসা বাড়ানোর জন্য" — PhD ভিসা এক্সটেনশনের টুল নয়<br>• "চাকরি না পেয়ে" — বেকারত্ব থেকে PhD বেরোবে না<br>• "সবাই করছে" — সবার পথ তোমার পথ নয়<br>• "ডিগ্রির জন্য" — শুধু ডিগ্রি চাইলে আরেকটা মাস্টার্স করো<br>• "সম্মানের জন্য" — 'ডক্টর' টাইটেল ৫ বছরের কষ্টের মূল্য নয়</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ভালো কারণ</div>• "একটা নির্দিষ্ট সমস্যা গভীরভাবে সমাধান করতে চাই"<br>• "রিসার্চ করতে ভালোবাসি" — অজানা খোঁজার আনন্দ<br>• "একাডেমিয়ায় ক্যারিয়ার চাই" — প্রফেসর হতে চাই<br>• "ইন্ডাস্ট্রি রিসার্চ ল্যাবে যেতে চাই" (Google AI, Microsoft Research)<br>• "নতুন জ্ঞান তৈরি করতে চাই" — শুধু ব্যবহার নয়, সৃষ্টি</div>
</div>

<div class="code-block">PhD vs Industry — সতঙ্গ তুলনা:

                    PhD              Industry
সময়                ৫-৭ বছর          প্রতি বছর
আয়                 $25-40K stipend  $100-200K salary
স্বাধীনতা           অনেক (নিজের রিসার্চ)  কম (কোম্পানির লক্ষ্য)
আউটপুট             পেপার, ডিসার্টেশন  প্রোডাক্ট, রেভিনিউ
একাকীত্ব            অনেক (নিজের সমস্যা)  কম (টিম)
ব্যর্থতা            সাধারণ (রিসার্চ = ব্যর্থতা)  কম (প্রোডাক্ট শিপ হয়)
শেখার গভীরতা        সর্বোচ্চ          মাঝারি

PhD Reality Check:
  • ৫০% PhD শিক্ষার্থী ডিগ্রি শেষ করতে পারে না (NSF data)
  • গড়ে ৫.৮ বছর লাগে CS PhD-তে (CGS data)
  • ডিপ্রেশন রেট PhD শিক্ষার্থীদের মধ্যে সাধারণ
  • কিন্তু — যারা শেষ করে, তাদের ৯০% বলে "এটা ছিল সঠিক"

প্রশ্ন: তুমি কি ৫-৭ বছর একটা সমস্যা নিয়ে 
কাজ করতে প্রস্তুত? যে সমস্যার উত্তর 
হয়তো নেই?</div>

<div class="dialogue">হিজরত — পরিচিত জায়গা ছেড়ে অজানায় যাওয়া। ইব্রাহিম (আ) যখন স্বীয় সম্প্রদায় ছেড়ে অজানা যাত্রা করলেন, তিনি জানতেন না গন্তব্য — কিন্তু জানতেন উদ্দেশ্য। PhD-ও তেমনি — তুমি ছাড়বে ইন্ডাস্ট্রির নিশ্চিত বেতন, কিন্তু পাবে জ্ঞানের গভীরতা। হিজরত করতে হবে — কিন্তু উদ্দেশ্য স্পষ্ট থাকতে হবে। "কেন?" — এই প্রশ্নের উত্তর ছাড়া হিজরত নয়, পলায়ন।</div>
<div class="dialogue en">"Hijrat — leaving the known for the unknown. When Ibrahim (AS) left his community for an unknown journey, he didn't know the destination — but he knew the purpose. PhD too — you'll leave industry's certain salary, but gain knowledge's depth. Hijrat is needed — but the purpose must be clear. Without an answer to 'why?' it's not hijrat, it's flight."</div>`,
  senior:{
    title:"Self-Assessment — ৫টা প্রশ্ন নিজেকে করো",
    body:`<p><strong>এই ৫টা প্রশ্নের উত্তর দাও নিজেকে:</strong></p><p><strong>১.</strong> আমি কি একটা নির্দিষ্ট রিসার্চ সমস্যা নিয়ে ভাবি?</p><p><strong>২.</strong> আমি কি অন্যের পেপার পড়ে উত্তেজনা অনুভব করি?</p><p><strong>৩.</strong> আমি কি একা কাজ করতে পারি — কয়েক মাস কোনো ফল ছাড়া?</p><p><strong>৪.</strong> আমি কি ৫-৭ বছর বিনিয়োগ করতে প্রস্তুত — ইন্ডাস্ট্রির বেতন ছাড়া?</p><p><strong>৫.</strong> আমার লক্ষ্য কি একাডেমিয়া বা রিসার্চ ল্যাব?</p><p>৪+ "হ্যাঁ" = PhD সফল হতে পারে। ৩ বা কম = আরেকটা মাস্টার্স বা ইন্ডাস্ট্রি রিসার্চ ভাবো।</p>`
  }
});

// ══ DOOR 2: PhD STRUCTURE & TIMELINE ══
doors.push({
  num:2, icon:"🗺️", color:"#7dd3fc", name:"মানচিত্রকারের গ্রন্থ",
  subtitle:"The Cartographer's Atlas", tech:"PhD Structure & Timeline",
  spirit:"সফর — যাত্রার স্তর",
  secret:"PhD একটা সরল পথ নয়। ৫-৭ বছরের ৪টি স্তর: Coursework → Qualifying Exam → Proposal → Defense। প্রতিটা স্তর আগের চেয়ে কঠিন।",
  recall:{
    q:"মানচিত্রকার কেন পুরো পথ আগে আঁকেন, ধাপে ধাপে?",
    qen:"Why does the cartographer draw the full path first, step by step?",
    a:"কারণ যাত্রীকে জানতে হবে কত স্তর আছে। PhD-ও তেমনি — Coursework, Qualifying, Proposal, Defense। প্রতিটা স্তর আলাদা চ্যালেঞ্জ। পুরো মানচিত্র না দেখলে মাঝপথে হারিয়ে যাবে।",
    aen:"Because the traveler needs to know how many stages exist. PhD too — Coursework, Qualifying, Proposal, Defense. Each stage is a different challenge. Without the full map, you'll get lost midway."
  },
  story:`
<p class="scene-setting">দ্বিতীয় স্থান। একটা বিশাল মানচিত্রের টেবিল। দেয়ালে প্রাচীন মানচিত্র, টেবিলে খোলা অ্যাটলাস। মানচিত্রকার ইদ্রিস বসে আছেন — মধ্যবয়সী, নিখুঁত হাত, চোখে নিপুণতা। "তোমার যাত্রার মানচিত্র," তিনি বললেন, পাঁচটা পর্বের একটা চিত্র খুলে দিলেন। "প্রতিটা পর্ব আগের চেয়ে কঠিন। কিন্তু প্রতিটা পর্ব শেষে তুমি আরও গভীরে।"</p>
<p class="scene-setting en">The second station. A vast map table. Ancient maps on walls, open atlas on table. Cartographer Idris sits — middle-aged, precise hands, expertise in eyes. "Your journey's map," he said, unrolling a picture of five stages. "Each stage harder than the last. But after each, you go deeper."</p>

<div class="dialogue">সন্ধিক্ষণে তীর্থযাত্রী বলেছিলেন — কেন। এখন আমি বলি — কী এবং কতদিন। PhD একটা সরল পথ নয়। এটা পাঁচটি স্তরের একটা দীর্ঘ যাত্রা। প্রতিটা স্তর একটা পরীক্ষা — শারীরিক নয়, মানসিক।</div>
<div class="dialogue en">"At the crossroads the pilgrim said — why. Now I say — what and how long. PhD isn't a straight path. It's a long journey of five stages. Each stage is a test — not physical, mental."</div>

<div class="code-block">PhD Structure — ৫টি স্তর (CS-এ গড়ে ৫-৭ বছর):

বছর ১-২: COURSEWORK (কোর্সওয়ার্ক)
  • গভীর ক্লাস — ML, Systems, Theory, ইত্যাদি
  • প্রতিটা ক্লাসে প্রজেক্ট, পেপার, পরীক্ষা
  • সাথে সাথে রিসার্চ গ্রুপে যোগ দাও
  → লক্ষ্য: জ্ঞানের ভিত্তি তৈরি

বছর ২-৩: QUALIFYING EXAM (কোয়ালিফাইং পরীক্ষা)
  • কয়েকদিনের লিখিত + মৌখিক পরীক্ষা
  • তোমার এরিয়ায় ৩০-৫০টা পেপার পড়ে আসতে হবে
  • কমিটি প্রশ্ন করে — তুমি কি যথেষ্ট জানো?
  • পাশ করলে → "PhD Candidate" (আনুষ্ঠানিকভাবে)
  • ফেল করলে → মাস্টার্স নিয়ে বের (সবচেয়ে ভয়ংকর)
  → লক্ষ্য: তুমি কি রিসার্চার হতে পারবে?

বছর ৩-৪: RESEARCH & PROPOSAL (প্রপোজাল)
  • নিজের গবেষণার প্রশ্ন খোঁজো — এটাই সবচেয়ে কঠিন
  • অ্যাডভাইজারের সাথে কাজ — কিন্তু দিক তোমার
  • প্রপোজাল ডিফেন্স: কমিটির সামনে তোমার গবেষণার 
    পরিকল্পনা রক্ষা করো
  • পেপার প্রকাশ — কনফারেন্সে (NeurIPS, CVPR, SIGCOMM)
  → লক্ষ্য: নতুন জ্ঞান তৈরি শুরু

বছর ৪-৫: DEEP RESEARCH (গভীর গবেষণা)
  • তোমার গবেষণার প্রশ্নের উত্তর খোঁজো
  • এক্সপেরিমেন্ট, থিওরি, রাইটিং — বারবার
  • ব্যর্থতা সাধারণ — রিসার্চ = ব্যর্থতা থেকে শেখা
  • পেপার প্রকাশ — এটাই তোমার "মুদ্রা"
  → লক্ষ্য: একটা নতুন জ্ঞান প্রতিষ্ঠিত করা

বছর ৫-৭: DISSERTATION & DEFENSE (ডিসার্টেশন)
  • ১০০-২০০ পৃষ্ঠার থিসিস — তোমার সম্পূর্ণ গবেষণা
  • ডিফেন্স: কমিটি + বাইরের এক্সামিনার
  • সবার সামনে তোমার কাজ উপস্থাপন
  • প্রশ্নের উত্তর দাও — গভীর, কঠিন
  → লক্ষ্য: তুমি এখন বিশ্বের অন্যতম 
    বিশেষজ্ঞ এই সমস্যায়</div>

<div class="dialogue">সফর — যাত্রা। কুরআনে আল্লাহ বলেন — "পৃথিবীতে ভ্রমণ করো এবং দেখো।" PhD একটা জ্ঞানের সফর। কিন্তু এই সফরের মানচিত্র জানা দরকার — কোথায় কী চ্যালেঞ্জ, কতদিন লাগবে। মানচিত্র ছাড়া সফর = হারিয়ে যাওয়া। মানচিত্র সহ = প্রস্তুত। প্রতিটা স্তর একটা মাইলফলক — স্তম্ভের মতো, পথের পাশে।</div>
<div class="dialogue en">"Safar — journey. Allah says — 'Travel through the earth and observe.' PhD is a journey of knowledge. But you need the map of this journey — what challenge where, how long. Without a map, travel = getting lost. With a map = prepared. Each stage is a milestone — like pillars, beside the path."</div>`,
  senior:{
    title:"R1 বনাম R2 বিশ্ববিদ্যালয় — পার্থক্য বুঝো",
    body:`<p><strong>R1 (Very High Research Activity):</strong> MIT, Stanford, CMU, Berkeley, Georgia Tech, UIUC। ফান্ডিং বেশি, রিসার্চ সুযোগ বেশি, কিন্তু ভর্তি অত্যন্ত প্রতিযোগিতামূলক (১-৫% গ্রহণের হার)।</p><p><strong>R2 (High Research Activity):</strong> ছোট স্টেট ইউনিভার্সিটি, কম প্রতিযোগিতা, কিন্তু ফান্ডিং কম হতে পারে।</p><p><strong>তোমার কৌশল:</strong> R1-এ রিচ (reach) করো, R2-তে সেফটি (safety) রাখো। ১০-১৫ অ্যাপ্লিকেশন দাও — ৩-৪ R1, ৫-৬ R2, ২-৩ সেফটি।</p>`
  }
});

// ══ DOOR 3: FUNDING ══
doors.push({
  num:3, icon:"💰", color:"#52c41a", name:"বণিকের প্রস্তাব",
  subtitle:"The Merchant's Offer", tech:"Funding: RA, TA, Fellowship",
  spirit:"রিজিক — রিযিক আসমান থেকে, কিন্তু চেষ্টা তোমার",
  secret:"ফান্ডেড PhD-তে তুমি টিউশন দাও না। উল্টো পাও $25K-$45K বৃত্তি। RA = রিসার্চ করো, TA = পড়াও, Fellowship = শুধু পড়ো। ফান্ডিং ছাড়া PhD = আত্মহত্যা।",
  recall:{
    q:"বণিক কেন তীর্থযাত্রীকে টাকা দেয়, সাথে নেয়?",
    qen:"Why does the merchant fund the pilgrim, take them along?",
    a:"কারণ তীর্থযাত্রী বণিকের কাজে সাহায্য করে — রিসার্চ করে, পড়ায়। RA = রিসার্চ করো প্রফেসরের গ্রান্টে। TA = পড়াও আন্ডারগ্র্যাডকে। বিনিময়ে টিউশন মাফ + স্টাইপেন্ড। Fellowship = কোনো কাজ নেই, শুধু রিসার্চ।",
    aen:"Because the pilgrim helps the merchant's work — researches, teaches. RA = research on a professor's grant. TA = teach undergrads. In exchange: tuition waived + stipend. Fellowship = no work obligation, just research."
  },
  story:`
<p class="scene-setting">তৃতীয় স্থান। একটা বাজারের কিনারা। বণিক করিম একটা বসতে বসে আছেন — সামনে থলে ভর্তি স্বর্ণমুদ্রা। তীর্থযাত্রীরা আসছে, সাহায্য চাইছে। করিম বলছেন — "আমি ফ্রি টাকা দিই না। তুমি আমার কাজে সাহায্য করো — আমি তোমার যাত্রার খরচ দেব।" এটাই PhD ফান্ডিংয়ের মডেল।</p>
<p class="scene-setting en">The third station. A market edge. Merchant Karim sits on a rug — before him, pouches of gold coins. Pilgrims come, seek help. Karim says — "I don't give free money. You help my work — I fund your journey." This is the PhD funding model.</p>

<div class="dialogue">মানচিত্রকার বলেছিলেন — পাঁচটি স্তর। কিন্তু আমি বলি — স্তরগুলো পার হতে চাইলে একটা জিনিস লাগবে: অর্থ। PhD ফান্ডিং ছাড়া শুরু করা = আত্মহত্যা। $50K+ টিউশন প্রতি বছর? অসম্ভব। কিন্তু ফান্ডেড PhD? তুমি টিউশন দাও না। উল্টো পাও টাকা।</div>
<div class="dialogue en">"The cartographer said — five stages. But I say — crossing them requires one thing: money. Starting PhD without funding = financial suicide. $50K+ tuition per year? Impossible. But funded PhD? You don't pay tuition. You get paid."</div>

<div class="code-block">PhD Funding — তিন ধরন:

┌────────────────────────────────────────┐
│ RA (Research Assistantship)           │
│                                        │
│ প্রফেসরের গবেষণায় কাজ করো            │
│ প্রফেসরের গ্রান্ট থেকে তোমার বেতন    │
│                                        │
│ টিউশন: ১০০% মাফ                       │
│ স্টাইপেন্ড: $২,০০০-৪,০০০/মাস         │
│ সময়: ২০ ঘণ্টা/সপ্তাহ রিসার্চে       │
│                                        │
│ → সবচেয়ে কাঙ্ক্ষিত — সাথে রিসার্চ   │
│ → অ্যাডভাইজারের গ্রান্ট লাগে          │
├────────────────────────────────────────┤
│ TA (Teaching Assistantship)            │
│                                        │
│ আন্ডারগ্র্যাড পড়াও                    │
│ বিভাগের টাকা থেকে তোমার বেতন         │
│                                        │
│ টিউশন: ১০০% মাফ                       │
│ স্টাইপেন্ড: $১,৫০০-৩,০০০/মাস         │
│ সময়: ২০ ঘণ্টা/সপ্তাহ টিচিং           │
│                                        │
│ → সাধারণ — কিছু বিভাগে শুধু TA       │
│ → টিচিং দক্ষতা বাড়ে                  │
├────────────────────────────────────────┤
│ FELLOWSHIP (বৃত্তি)                    │
│                                        │
│ কোনো কাজের বাধ্যবাধকতা নেই           │
│ বিশ্ববিদ্যালয় বা বাইরের সংস্থা দেয় │
│                                        │
│ টিউশন: ১০০% মাফ                       │
│ স্টাইপেন্ড: $২,৫০০-৫,০০০/মাস         │
│ সময়: ১০০% রিসার্চে                   │
│                                        │
│ → সবচেয়ে ভালো কিন্তু প্রতিযোগিতামূলক│
│ → NSF GRFP, NDSEG, ইউনিভ ফেলোশিপ     │
└────────────────────────────────────────┘

বাস্তব সংখ্যা (CS PhD, R1):
  • গড় স্টাইপেন্ড: $৩,০০০-৩,৫০০/মাস
  • বার্ষিক: $৩৬,০০০-৪২,০০০ (টিউশন ছাড়া)
  • টিউশন মাফ মূল্য: $৫০,০০০-৬০,০০০/বছর
  • মোট প্যাকেজ: $৮৬,০০০-১০২,০০০/বছর

আন্তর্জাতিক ছাত্রদের জন্য:
  • F-1 ভিসা — ফান্ডেড PhD-তে কোনো সমস্যা নেই
  • স্টাইপেন্ড থেকে ট্যাক্স কাটা হয় (F-1 তে কিছু 
    ছাড় আছে প্রথম কয়েক বছর)
  • স্পাউস (F-2) কাজ করতে পারে না — পরিবারের 
    ক্ষেত্রে কঠিন</div>

<div class="dialogue">রিযিক — জীবিকা। কুরআনে আল্লাহ বলেন — "পৃথিবীতে কোনো প্রাণী নেই যার রিযিক আল্লাহর দায়িত্বে নয়।" (১১:৬)। কিন্তু রিযিক চাইলে চেষ্টা করতে হয়। PhD ফান্ডিংও তেমনি — আল্লাহ দেবেন, কিন্তু তোমাকে প্রফেসরকে ইমেইল করতে হবে, গ্রান্ট খুঁজতে হবে, ফেলোশিপের জন্য আবেদন করতে হবে। চেষ্টা ছাড়া রিযিক আসে না।</div>
<div class="dialogue en">"Rizq — provision. Allah says — 'There is no creature on earth whose provision is not Allah's responsibility.' (11:6). But provision requires effort. PhD funding too — Allah provides, but you must email professors, seek grants, apply for fellowships. Without effort, provision doesn't come."</div>`,
  senior:{
    title:"ফান্ডেড প্রোগ্রাম খোঁজো — কোথায়?",
    body:`<p><strong>ফান্ডেড CS PhD প্রোগ্রাম খোঁজার উপায়:</strong></p><p><strong>১. CSRankings.org:</strong> CS বিভাগের রিসার্চ র‍্যাঙ্কিং। দেখো কোন বিভাগে কী ফান্ডিং আছে।</p><p><strong>２. প্রতিটা বিশ্ববিদ্যালয়ের "Financial Support" পেজ:</strong> অধিকাংশ R1 বিভাগ বলে "All admitted PhD students are fully funded."</p><p><strong>３. প্রফেসরের গ্রান্ট:</strong> NSF/NIH/DARPA গ্রান্ট থাকলে তাঁরা RA নিতে পারেন। হোমপেজে "Openings" বা "Join us" দেখো।</p><p><strong>৪. সরকারি ফেলোশিপ:</strong> NSF GRFP (নাগরিক বা পারমানেন্ট রেসিডেন্ট — আন্তর্জাতিক নয়), Ford Foundation। কিন্তু অনেক ইউনিভ নিজেদের ফেলোশিপ দেয় আন্তর্জাতিকদের।</p>`
  }
});

// ══ DOOR 4: CHOOSING RESEARCH AREA ══
doors.push({
  num:4, icon:"🎯", color:"#f0c75e", name:"দিকনির্দেশকের কম্পাস",
  subtitle:"The Guide's Compass", tech:"Choosing Your Research Area",
  spirit:"কিবলা — দিক খোঁজা",
  secret:"তোমার রিসার্চ এরিয়া শুধু তোমার ক্যারিয়ার নির্ধারণ করে না — তোমার জীবনের দিক নির্ধারণ করে। AI/ML হট, কিন্তু স্যাচুরেটেড। সিস্টেমস স্থিতিশীল। HCI কম প্রতিযোগিতামূলক। তোমার আগ্রহের সাথে মার্কেটের মিল খোঁজো।",
  recall:{
    q:"দিকনির্দেশক কেন একটা দিক বেছে নিতে বলেন, সব দিকে যেতে নয়?",
    qen:"Why does the guide tell you to choose one direction, not all?",
    a:"কারণ PhD একটা এরিয়াতে ৫-৭ বছর। সব দিকে যাওয়া যায় না। AI/ML, Systems, Security, HCI — প্রতিটার নিজস্ব চ্যালেঞ্জ। তোমার আগ্রহ আর সুযোগের মিল খোঁজো। কিবলা — একটা দিক।",
    aen:"Because PhD is 5-7 years in one area. Can't go all directions. AI/ML, Systems, Security, HCI — each has its own challenge. Match your interest with opportunity. Qibla — one direction."
  },
  story:`
<p class="scene-setting">চতুর্থ স্থান। একটা পাহাড়ি কুটির। দিকনির্দেশক তালহা হাতে একটা পিতলের কম্পাস নিয়ে বসে আছেন — বয়স্ক, শান্ত, চোখে অভিজ্ঞতা। সামনে একটা বড় মানচিত্র — তাতে রিসার্চ এরিয়ার দিক। "এই দিকে AI/ML," তিনি বললেন, "কিন্তু ভিড়। এই দিকে Security — স্থিতিশীল। এই দিকে HCI — কম ভিড়। তোমার কোন দিকে যেতে হবে?"</p>
<p class="scene-setting en">The fourth station. A mountain cabin. Guide Talha sits with a brass compass — elderly, calm, experienced eyes. Before him a large map — research area directions. "This way AI/ML," he said, "but crowded. This way Security — stable. This way HCI — less crowded. Which way do you need to go?"</p>

<div class="dialogue">বণিক বলেছিলেন — ফান্ডিং। কিন্তু আমি বলি — ফান্ডিং কোন এরিয়ায়? তোমার রিসার্চ এরিয়া শুধু তোমার ক্যারিয়ার নির্ধারণ করে না — তোমার জীবনের দিক নির্ধারণ করে। ভুল এরিয়া = ৫ বছর কষ্ট। সঠিক এরিয়া = ৫ বছর আনন্দ।</div>
<div class="dialogue en">"The merchant said — funding. But I say — funding for which area? Your research area doesn't just determine your career — it determines your life's direction. Wrong area = 5 years of suffering. Right area = 5 years of joy."</div>

<div class="code-block">CS Research Areas — ২০২৫ Landscape:

🔥 HOT (high demand, high competition):
  • AI/ML — LLMs, transformers, RL
    ল্যাব: Stanford AI, MIT CSAIL, CMU ML
    প্রতিযোগিতা: সর্বোচ্চ (১-৩% গ্রহণ)
    ফান্ডিং: সর্বোচ্চ
  • NLP — language models, translation
  • Computer Vision — image/video understanding
  • Robotics — autonomous systems

🟢 STABLE (consistent demand, moderate competition):
  • Systems — OS, distributed systems, cloud
    ল্যাব: Berkeley RISELab, CMU, UW
    প্রতিযোগিতা: মাঝারি
    ফান্ডিং: ভালো, স্থিতিশীল
  • Security — cryptography, privacy
  • Networks — protocols, edge computing
  • Databases — data systems

🔵 EMERGING (growing demand, lower competition):
  • HCI — human-computer interaction
    ল্যাব: CMU HCII, MIT, Georgia Tech
    প্রতিযোগিতা: কম
    ফান্ডিং: মাঝারি
  • Quantum Computing — quantum algorithms
  • Computational Biology — bioinformatics
  • EdTech — AI in education

🟣 NICHE (specialized, small labs):
  • Theory — algorithms, complexity
  • Programming Languages — compilers, verification
  • SE — software engineering research

কৌশল:
  • High-profile → AI/ML at R1 (reach)
  • Mid-profile → Systems/Security at R1 বা AI/ML at R2
  • Low-profile → HCI/Emerging at R2 বা niche areas</div>

<div class="dialogue">কিবলা — দিক। নামাজে এক কিবলা — কাবার দিক। PhD-তেও এক দিক — তোমার রিসার্চ এরিয়া। দিক ভুল হলে নামাজ হয় না। এরিয়া ভুল হলে PhD হয় না। কিন্তু কিবলা বেছে নেওয়া যায় না — নির্দিষ্ট। PhD এরিয়া বেছে নেওয়া যায় — কিন্তু সাবধানে। তোমার আগ্রহ, তোমার দক্ষতা, এবং মার্কেটের সুযোগ — তিনটির মিল খোঁজো।</div>
<div class="dialogue en">"Qibla — direction. In prayer, one qibla — toward the Kaaba. In PhD too, one direction — your research area. Wrong direction means no valid prayer. Wrong area means no PhD. But qibla is fixed — you can't choose it. PhD area you can choose — but carefully. Match your interest, your skill, and market opportunity."</div>`,
  senior:{
    title:"কীভাবে এরিয়া বেছে নেবে — ৩-ধাপ",
    body:`<p><strong>ধাপ ১: কী ভালোবাসো?</strong> কোন বিষয় পড়লে উত্তেজনা হয়? কোন সমস্যা নিয়ে ঘণ্টা ভাবতে পারো? সেটাই তোমার এরিয়া।</p><p><strong>ধাপ ২: কী পারো?</strong> গণিতে ভালো? AI/ML। কোডিং? Systems। মানুষ? HCI। তোমার দক্ষতা ম্যাচ করো।</p><p><strong>ধাপ ৩: কোথায় সুযোগ?</strong> CSRankings.org-এ গিয়ে দেখো কোন এরিয়ায় কোন প্রফেসর কাজ করছেন। ৩-৫ জন প্রফেসর বেছে নাও। তাঁদের পেপার পড়ো — ভালো লাগলে সেটাই তোমার এরিয়া।</p>`
  }
});

// ══ DOOR 5: SOP & APPLICATION ══
doors.push({
  num:5, icon:"📝", color:"#ff6b35", name:"পণ্ডিতের স্ক্রল",
  subtitle:"The Scholar's Scroll", tech:"SOP & Application Materials",
  spirit:"নিয়্যাত — কাগজে লেখা সংকল্প",
  secret:"SOP তোমার জীবনী নয় — তোমার গবেষণার নিয়ত। প্রতিটা বিশ্ববিদ্যালয়ের জন্য আলাদা। এক সাইজ ফিট অল নয়। রিসার্চ প্রশ্ন, কেন এই বিশ্ববিদ্যালয়, কেন এই প্রফেসর — স্পষ্ট।",
  recall:{
    q:"পণ্ডিত কেন প্রতিটা স্ক্রল আলাদাভাবে লেখেন?",
    qen:"Why does the scholar write each scroll separately?",
    a:"কারণ প্রতিটা বিশ্ববিদ্যালয় আলাদা। প্রতিটা প্রফেসরের গবেষণা আলাদা। এক SOP সবখানে পাঠালে বোঝা যায় তুমি আগ্রহী নও। প্রতিটার জন্য আলাদা — কেন এই বিশ্ববিদ্যালয়, কেন এই প্রফেসর।",
    aen:"Because each university is different. Each professor's research is different. Sending one SOP everywhere shows you're not interested. Each one separate — why this university, why this professor."
  },
  story:`
<p class="scene-setting">পঞ্চম স্থান। একটা শান্ত গ্রন্থাগার। পণ্ডিত আনোয়ার একটা স্ক্রল লিখছেন — কিন্তু সব বিশ্ববিদ্যালয়ের জন্য এক স্ক্রল নয়। প্রতিটার জন্য আলাদা। "কেন?" তুমি জিজ্ঞেস করলে। "কারণ প্রতিটা বিশ্ববিদ্যালয় আলাদা প্রশ্ন করে। আমি তাদের ভাষায় উত্তর দিই।"</p>
<p class="scene-setting en">The fifth station. A quiet library. Scholar Anwar writes a scroll — but not the same scroll for all universities. Each one separate. "Why?" you asked. "Because each university asks a different question. I answer in their language."</p>

<div class="dialogue">দিকনির্দেশক বলেছিলেন — এরিয়া বেছে নাও। কিন্তু আমি বলি — এরিয়া বেছে নেওয়ার পর সেটা কাগজে প্রকাশ করতে হয়। SOP — Statement of Purpose। এটা তোমার জীবনী নয়। এটা তোমার গবেষণার নিয়ত। কেন তুমি PhD করতে চাও, কী নিয়ে কাজ করতে চাও, কেন এই বিশ্ববিদ্যালয়।</div>
<div class="dialogue en">"The guide said — choose your area. But I say — after choosing, you must express it on paper. SOP — Statement of Purpose. This isn't your biography. It's your research intention. Why you want PhD, what you want to work on, why this university."</div>

<div class="code-block">PhD Application Materials — সম্পূর্ণ তালিকা:

১. SOP (Statement of Purpose) — ১-২ পৃষ্ঠা
   • কেন PhD?
   • কোন রিসার্চ প্রশ্ন?
   • কেন এই বিশ্ববিদ্যালয়? কেন এই প্রফেসর?
   • তোমার পূর্বের প্রস্তুতি
   → সবচেয়ে গুরুত্বপূর্ণ! প্রতিটা ইউনিভের জন্য আলাদা।

২. LOR (Letters of Recommendation) — ৩টি
   • একাডেমিক — যিনি তোমার কাজ জানেন
   • প্রফেশনাল — সুপারভাইজার, সিনিয়র
   • রিসার্চ (যদি থাকে) — গবেষণা অ্যাডভাইজার
   → "ভালো ছাত্র" নয় — "গবেষক হবে" এমন LOR দরকার

৩. Transcripts — সমস্ত ডিগ্রি
   • MSIS GPA — ৩.৫+ ভালো
   • Undergrad GPA
   → WES মূল্যায়ন কিছু ইউনিভে দরকার

৪. CV/Resume — একাডেমিক ফরম্যাট
   • শিক্ষা, কাজের অভিজ্ঞতা, প্রজেক্ট
   • প্রকাশনা (যদি থাকে), প্রেজেন্টেশন
   • দক্ষতা, টুলস, ভাষা

৫. Writing Sample / Portfolio
   • কিছু প্রোগ্রামে দরকার
   • রিসার্চ পেপার, টেকনিক্যাল রিপোর্ট

৬. English Proficiency (TOEFL/IELTS)
   • US ডিগ্রি থাকলে ওয়েভ হয় (তোমার ক্ষেত্রে লাগবে না)

৭. Application Fee — $৭৫-১২৫ প্রতি ইউনিভ
   • Fee waiver আছে অনেক ইউনিভে

⚠️ GRE: অনেক R1 বিভাগে এখন GRE 
   optional বা waived (Carnegie Mellon, 
   Berkeley, Georgia Tech সহ)</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খারাপ SOP</div>"আমি ছোটবেলা থেকে কম্পিউটার ভালোবাসি। আমি ভালো ছাত্র ছিলাম। আমি কঠোর পরিশ্রমী। আমি আপনাদের বিশ্ববিদ্যালয়ে পড়তে চাই কারণ এটা ভালো।" — জেনেরিক। কোনো রিসার্চ প্রশ্ন নেই। কোনো প্রফেসরের নাম নেই। বাতিল।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ভালো SOP</div>"আমি LedgerPilot-এ কাজ করার সময় লক্ষ্য করেছি যে NACHA ফাইল জেনারেশনে LLM ভুল করে। আমি একটি RAG সিস্টেম বানিয়েছি যা ৪০% ভুল কমায়। এই অভিজ্ঞতা থেকে আমি গবেষণার প্রশ্ন পেলাম — কীভাবে structured output-এ LLM নির্ভরতা বাড়ানো যায়? আমি প্রফেসর X-এর গবেষণায় আগ্রহী কারণ তাঁর recent paper on constrained decoding আমার কাজের সাথে মেলে।" — নির্দিষ্ট। রিসার্চ প্রশ্ন আছে। প্রফেসরের নাম আছে। গৃহীত।</div>
</div>

<div class="dialogue">নিয়্যাত — সংকল্প। হজ্জের আগে নিয়ত — কেন তুমি যাচ্ছ। PhD-এর আগেও নিয়ত — SOP-তে লেখা। কেন? কী নিয়ে? কোথায়? নিয়ত স্পষ্ট না হলে হজ্জ হয় না। SOP স্পষ্ট না হলে অ্যাডমিশন হয় না। কমিটি শুধু তোমার নিয়ত পড়ে — তোমার মার্কশিট নয়। নিয়তই তোমার পরিচয়।</div>
<div class="dialogue en">"Niyyah — intention. Before Hajj, intention — why you're going. Before PhD, intention too — written in the SOP. Why? What? Where? Without clear intention, no Hajj. Without clear SOP, no admission. The committee reads your intention — not your transcript. Intention is your identity."</div>`,
  senior:{
    title:"SOP Formula — প্রতিটা ইউনিভের জন্য",
    body:`<p><strong>SOP কাঠামো (১.৫ পৃষ্ঠা):</strong></p><p><strong>১. Hook (১ প্যারা):</strong> একটা নির্দিষ্ট অভিজ্ঞতা যা তোমার রিসার্চ কিউরিওসিটি জাগিয়েছে।</p><p><strong>২. Research Question (১ প্যারা):</strong> তুমি কী উত্তর খুঁজতে চাও? নির্দিষ্ট প্রশ্ন।</p><p><strong>৩. Preparation (১-২ প্যারা):</strong> তোমার পূর্বের কাজ — LedgerPilot, প্রজেক্ট, কোনো রিসার্চ। কীভাবে তৈরি করেছে তোমাকে।</p><p><strong>৪. Fit (১ প্যারা):</strong> কেন এই বিশ্ববিদ্যালয়? কোন প্রফেসর? কোন ল্যাব? কোন পেপার? নির্দিষ্ট!</p><p><strong>৫. Future (১ প্যারা):</strong> PhD-এর পর কী? একাডেমিয়া? ইন্ডাস্ট্রি রিসার্চ?</p>`
  }
});
