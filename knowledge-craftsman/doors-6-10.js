// ════════════════════════════════════════
// জ্ঞানের কারিগর — DOORS 6-10
// Research Papers → Second Brain Synthesis
// ════════════════════════════════════════

// ══ DOOR 6: READING PAPERS — BEGINNER ══
doors.push({
  num:6, icon:"📄", color:"#fcd34d", name:"পত্রের কক্ষ",
  subtitle:"The Paper Apprentice", tech:"3-Pass Method (Keshav, 2007)",
  spirit:"তালাশ — সন্ধান",
  secret:"S. Keshav (২০০৭) দেখালেন — research paper পড়া বই পড়ার মতো নয়। ৩টা পাস। প্রথম পাস: ৫ মিনিট, title/abstract/intro/conclusion। দ্বিতীয় পাস: ১ ঘণ্টা, পুরো পড়ো। তৃতীয় পাস: ৪-৫ ঘণ্টা, virtually re-implement। অধিকাংশ মানুষ প্রথম পাসেই হাল ছাড়ে। কিন্তু ৩টা পাস = গবেষকের মস্তিষ্ক।",
  recall:{
    q:"Keshav-র ৩-পাস পদ্ধতি কী?",
    qen:"What is Keshav's 3-pass method?",
    a:"প্রথম পাস: ৫ মিনিট (title/abstract/conclusion)। দ্বিতীয়: ১ ঘণ্টা (পুরো পড়ো)। তৃতীয়: ৪-৫ ঘণ্টা (re-implement)। Keshav (২০০৭)। ৩টা পাস = গবেষকের মস্তিষ্ক। তালাশ — সন্ধান।",
    aen:"Pass 1: 5 min (title/abstract/conclusion). Pass 2: 1 hour (full read). Pass 3: 4-5 hours (re-implement). Keshav (2007). 3 passes = researcher brain."
  },
  story:`<p class="scene-setting">২০০৭ সাল। ওয়াটারলু বিশ্ববিদ্যালয়। কম্পিউটার বিজ্ঞানী S. Keshav একটা সাধারণ সমস্যা দেখলেন — ছাত্ররা research paper পড়তে পারে না। তারা শুরু থেকে শেষ পর্যন্ত পড়ে, হাল ছাড়ে, কিছু বোঝে না। Keshav একটা পদ্ধতি লিখলেন — How to Read a Paper। ৩টা পাস। প্রতিটা পাসে একটা নির্দিষ্ট উদ্দেশ্য। পেপার পড়ার সবচেয়ে উদ্ধৃত গাইড। আজও।</p>
<p class="scene-setting en">2007. University of Waterloo. Computer scientist S. Keshav noticed a common problem — students can't read research papers. They read start to finish, give up, understand nothing. Keshav wrote a method — How to Read a Paper. 3 passes. Each pass has a specific purpose. The most cited guide to paper reading. Still today.</p>

<div class="dialogue">মহামানুষদের পড়া বলেছিলেন — Gates, Munger কীভাবে পড়েন। কিন্তু আমি বলি — সবচেয়ে কঠিন পড়া কোনটা? Research paper। কেন? কারণ paper সাধারণ মানুষের জন্য লেখা নয় — গবেষকদের জন্য। জার্গন, রেফারেন্স, গাণিতিক প্রমাণ। কিন্তু Keshav দেখালেন — ৩টা পাসে যেকোনো paper বোঝা যায়। শুরু থেকে শেষ নয় — স্তরে স্তরে।</div>
<div class="dialogue en">"Great minds said — how Gates, Munger read. But I say — what's the hardest reading? Research papers. Why? Because papers aren't written for general audiences — they're for researchers. Jargon, references, mathematical proofs. But Keshav showed — any paper can be understood in 3 passes. Not start to finish — in layers."</div>

<div class="callout info"><span class="co-icon">🧭</span><div><strong>IMRaD structure:</strong> Introduction (কেন গুরুত্বপূর্ণ) · Methods (কীভাবে করল) · Results (কী পেল) · Discussion (মানে কী) + Abstract (উপরে সারাংশ) + Conclusion (নিচে) + References।</div></div></div>

<div class="diagram">
  <div class="diag-title">Keshav ৩-পাস — ক্রমশ গভীর, ক্রমশ বেশি সময়</div></div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <line class="axis" x1="50" y1="190" x2="520" y2="190"/>
    <text class="lbl-sm" x="285" y="215" fill="#9290a8">সময় ও গভীরতা →</text>
    <!-- funnel: 3 widening layers -->
    <polygon points="60,70 180,70 170,120 70,120" class="cell-cyan" style="stroke:#3dd6c4"/>
    <text class="lbl-sm" x="120" y="90" fill="#3dd6c4" style="font-weight:700">Pass ১</text>
    <text class="lbl-sm" x="120" y="105" fill="#9290a8" style="font-size:9px">৫-১০ মিনিট</text>
    <text class="lbl-sm" x="120" y="135" fill="#5e5c74" style="font-size:9px">title/abstract/conclusion</text>

    <polygon points="70,120 170,120 230,160 110,160" class="cell-good" style="stroke:#52c41a"/>
    <text class="lbl-sm" x="170" y="138" fill="#52c41a" style="font-weight:700">Pass ২</text>
    <text class="lbl-sm" x="170" y="153" fill="#9290a8" style="font-size:9px">~১ ঘণ্টা</text>

    <polygon points="110,160 230,160 360,180 150,180" class="cell-hot" style="stroke:#ff6b35"/>
    <text class="lbl-sm" x="250" y="172" fill="#ff6b35" style="font-weight:700">Pass ৩ · ৪-৫ ঘণ্টা · re-implement</text>

    <!-- decision branch after pass 1 -->
    <text class="lbl-sm" x="440" y="80" fill="#fcd34d">সিদ্ধান্ত</text>
    <text class="lbl-sm" x="440" y="98" fill="#9290a8" style="font-size:9px">পুরো পড়ার যোগ্য?</text>
    <text class="lbl-sm" x="440" y="115" fill="#52c41a" style="font-size:9px">হ্যাঁ → Pass ২</text>
    <text class="lbl-sm" x="440" y="130" fill="#ff6b35" style="font-size:9px">না → পরের পেপার</text>
    <text class="lbl-sm" x="280" y="225" fill="#5e5c74" style="font-size:9px">Andrew Ng: ৫-২০ পেপার = ভালো বোঝা, ৫০-১০০ = খুব গভীর</text>
  </svg>
  <div class="diag-cap">৩টা পাস — প্রতিটা আগেরটার চেয়ে গভীর, বেশি সময়। প্রথম পাসে সিদ্ধান্ত নাও — পুরো পড়ার যোগ্য কিনা। না হলে পরের পেপার — সময় বাঁচাও। যোগ্য হলে গভীরে যাও।</div></div>
</div></div>

<div class="callout tip"><span class="co-icon">📋</span><div>Keshav ৩-পাস — paper পড়ার কৌশল:

  Pass ১ · ৫-১০ মিনিট (Bird's-eye)
    title, abstract, intro, heading, conclusion, references।
    Keshav-র ৫ Cs: Category, Context, Correctness,
    Contributions, Clarity।
    সিদ্ধান্ত: পুরো পড়ার যোগ্য?

  Pass ২ · ১ ঘণ্টা (Grasp)
    পুরো পড়ো কিন্তু proof/derivation বাদ।
    figure ও table-এ মন দাও (প্রায়ই পুরো গল্প)।
    সহকর্মীকে সারাংশ দিতে পারা উচিত।
    strong claim ও weak point চেনো।

  Pass ৩ · ৪-৫ ঘণ্টা (Deep dive)
    কার্যত re-implement — assumption ধরে
    কাজটা নিজে পুনর্গঠন করো।
    লুকানো assumption ও missing citation খোঁজো।
    স্মৃতি থেকে পুরো structure পুনর্গঠন করতে পারা উচিত।

  টুল: Zotero (ফ্রি) — প্রতিটা পেপার save, tag, note।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">২০০৭</div><div class="sc-label">Keshav-র "How to Read a Paper"</div></div></div>
<div class="stat-card"><div class="sc-num">৩ পাস</div><div class="sc-label">৫ মিনিট → ১ ঘণ্টা → ৪-৫ ঘণ্টা</div></div></div>
<div class="stat-card"><div class="sc-num">৫-২০</div><div class="sc-label">পেপার = ভালো বোঝা (Andrew Ng)</div></div></div>
<div class="stat-card"><div class="sc-num">৫০-১০০</div><div class="sc-label">পেপার = খুব গভীর</div></div></div>
</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ শুরু থেকে শেষ</div>পেপার একটা উপন্যাসের মতো শুরু থেকে শেষ পর্যন্ত পড়ো। জার্গনে আটকাও, গাণিতিক প্রমাণে হাল ছাড়ো, কিছুই বোঝো না। অধিকাংষ মানুষ এখানেই হারায় — "paper পড়া অসম্ভব।" ভুল — পদ্ধতি নেই বলে অসম্ভব।</div></div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ৩-পাস কৌশল</div>স্তরে স্তরে পড়ো। Pass ১-এ সিদ্ধান্ত নাও — যোগ্য কিনা। না হলে পরের পেপার (সময় বাঁচাও)। যোগ্য হলে Pass ২, তারপর প্রয়োজনে Pass ৩। ৩-পাস = গবেষকের মস্তিষ্ক। তালাশ — কৌশল দিয়ে সত্যের সন্ধান।</div></div>
</div></div>
<div class="timeline">
<div class="tl-step"><div class="tl-when">Pass ১ · ৫-১০ মিনিট</div><div class="tl-title">🦅 Bird\'s-eye</div><div class="tl-body">শুধু title, abstract, intro, heading, conclusion, references-এ চোখ। Keshav-র ৫ Cs — Category, Context, Correctness, Contributions, Clarity। সিদ্ধান্ত: পুরো পড়ার যোগ্য?</div></div></div>
<div class="tl-step"><div class="tl-when">Pass ২ · ১ ঘণ্টা</div><div class="tl-title">📊 Grasp</div><div class="tl-body">পুরো পড়ো কিন্তু proof/derivation বাদ; figure ও table-এ মন দাও (প্রায়ই পুরো গল্প বলে)। এরপর সহকর্মীকে সারাংশ দিতে পারা উচিত; strong claim ও weak point চেনো।</div></div></div>
<div class="tl-step"><div class="tl-when">Pass ৩ · ৪-৫ ঘণ্টা</div><div class="tl-title">🔬 Deep dive</div><div class="tl-body">কার্যত re-implement — assumption ধরে কাজটা নিজে পুনর্গঠন করো, লুকানো assumption ও missing citation খোঁজো। স্মৃতি থেকে পুরো structure পুনর্গঠন করতে পারা উচিত।</div></div></div>
</div></div>
<table class="kv-table"><tr><th>পেপার কোথায়</th><th>কীসের জন্য</th></tr>
<tr><td class="hl">Google Scholar</td><td>সব কিছু (এখান থেকে শুরু)</td></tr>
<tr><td class="hl">arXiv</td><td>CS, physics, math</td></tr>
<tr><td class="hl">Semantic Scholar</td><td>AI/ML, semantic search</td></tr>
<tr><td class="hl">PubMed</td><td>medical, life sciences</td></tr>
<tr><td class="hl">Connected Papers</td><td>সম্পর্কিত পেপার খোঁজা</td></tr></table>
<div class="callout tip"><span class="co-icon">🌳</span><div><strong>Citation tracing:</strong> একটা ভালো survey পেপার থেকে শুরু → এর references (পুরোনো ভিত্তি) + Scholar-এর "Cited by" (নতুন কাজ) → foundational→current একটা tree। Andrew Ng: ৫-২০ পেপার = ভালো বোঝা, ৫০-১০০ = খুব গভীর; "প্রতিটা শব্দ নয়, কৌশলে পড়ো।"</div></div></div>

<div class="dialogue">তালাশ — search, seeking। কুরআনে আল্লাহ বলেন — "যারা আমার সন্ধানে চলে, আমি তাদের পথ দেখাই।" পেপার পড়াও তালাশ — সত্যের সন্ধান। কিন্তু তালাশ অন্ধ নয় — কৌশল দিয়ে। Keshav-র ৩ পাস = কৌশল। প্রথম পাসে দেখো — কোথায় যেতে হবে। দ্বিতীয়ে যাও। তৃতীয়ে গভীরে যাও। যে তালাশ কৌশল দিয়ে করে, সে পায়। যে অন্ধভাবে পড়ে, সে হারায়।</div>
<div class="dialogue en">"Talash — search, seeking. Allah says — 'Those who seek Me, I guide them.' Paper reading too — seeking truth. But seeking isn't blind — with strategy. Keshav's 3 passes = strategy. First pass: see where to go. Second: go. Third: go deep. One who seeks with strategy, finds. One who reads blindly, gets lost."</div>`,
  senior:{
    title:"Read Your First Paper — This Week",
    body:`<p><strong>Go to arxiv.org or scholar.google.com.</strong> Search a topic you're interested in. Find a recent paper.</p><p><strong>Do Pass ১ (৫ min):</strong> Read title, abstract, intro, conclusion, section headings. Answer: what type of paper? what's new? is it worth more time?</p><p><strong>If yes, do Pass ২ (১ hour):</strong> Full read. Ignore math/proofs. Focus on figures and tables. Mark unknown terms. Summarize in ৩ sentences.</p><p><strong>For your field:</strong> Build a reading list of ৫-১০ papers. Start with a survey/review paper (search "survey" or "review" + your topic). Then follow its references.</p><p><strong>Reference manager:</strong> Download Zotero (free). Save every paper you read. Tag by topic. Take notes inside Zotero. This becomes your personal research library.</p>`
  }
});

// ══ DOOR 7: CRITICAL ANALYSIS ══
doors.push({
  num:7, icon:"🔬", color:"#f59e0b", name:"সমালোচকের চোখ",
  subtitle:"The Critical Eye", tech:"Critical Analysis + Replication Crisis",
  spirit:"তাহকিক — যাচাইকৃত সত্য",
  secret:"২০১৫ সালে Open Science Collaboration প্রকাশ করল — ৬০%+ psychology গবেষণা replicate করা যায় না। অর্থাৎ ৬০% গবেষণা সম্ভবত ভুল। কিন্তু অধিকাংশ মানুষ paper পড়েই বিশ্বাস করে। সমালোচনামূলক পাঠক প্রশ্ন করে — sample size? methodology? p-hacking? তাহকিক — যাচাই করে তারপর বিশ্বাস।",
  recall:{
    q:"Replication crisis কী এবং কেন গুরুত্বপূর্ণ?",
    qen:"What is the replication crisis and why does it matter?",
    a:"৬০%+ psychology গবেষণা replicate করা যায় না (২০১৫)। অর্থাৎ সম্ভবত ভুল। কিন্তু মানুষ paper পড়েই বিশ্বাস করে। সমালোচক প্রশ্ন করে — sample, method, p-hacking? তাহকিক — যাচাই তারপর বিশ্বাস।",
    aen:"60%+ psychology studies can't be replicated (2015). Probably wrong. But people believe papers. Critical reader asks — sample, method, p-hacking? Tahqiq — verify then believe."
  },
  story:`<p class="scene-setting">২০১৫ সাল। জার্নাল Science। একটা বোমা ফাটল। Open Science Collaboration — ২৭০ জন গবেষক মিলে ১০০টা psychology গবেষণা পুনরায় করলেন। ফলাফল? ৬০%+ গবেষণা replicate করা গেল না। অর্থাৎ — মূল গবেষণার ফলাফল আর পাওয়া গেল না। এর মানে — psychology-র বেশিরভাগ গবেষণা সম্ভবত ভুল বা অতিরঞ্জিত। এটাই replication crisis — এবং এটা psychology-তেই নয়, medicine, economics, সব ক্ষেত্রে।</p>
<p class="scene-setting en">2015. Journal Science. A bomb dropped. Open Science Collaboration — 270 researchers re-did 100 psychology studies. Result? 60%+ studies FAILED to replicate. Meaning — the original results couldn't be reproduced. This means — most psychology research is probably wrong or exaggerated. This is the replication crisis — and it's not just psychology: medicine, economics, all fields.</p>

<div class="dialogue">Keshav বলেছিলেন — ৩ পাসে পড়ো। কিন্তু আমি বলি — ৩ পাসে পড়লেও একটা প্রশ্ন থাকে — paper-টা কি সত্যি? অধিকাংশ মানুষ paper পড়েই বিশ্বাস করে — Science-এ প্রকাশিত, তাই সত্য। কিন্তু replication crisis বলে — ৬০% সম্ভবত ভুল। সমালোচকের চোখ দরকার — প্রতিটা claim যাচাই করো। তাহকিক — যাচাই করে তারপর বিশ্বাস।</div>
<div class="dialogue en">"Keshav said — read in 3 passes. But I say — even with 3 passes, one question remains — is the paper TRUE? Most people believe papers — published in Science, therefore true. But the replication crisis says — 60% are probably wrong. You need a critical eye — verify each claim. Tahqiq — verify then believe."</div>

<table class="kv-table"><tr><th>ক্ষেত্র</th><th>Replication rate</th></tr>
<tr><td class="hl">Psychology (সামাজিক)</td><td>~৩৬% (OSC, 2015)</td></tr>
<tr><td class="hl">Psychology (জ্ঞানীয়)</td><td>~৭৭%</td></tr>
<tr><td class="hl">Preclinical medicine</td><td>~১১-২৫% (Begley &amp; Ellis 2012; Prinz 2011)</td></tr>
<tr><td class="hl">Economics (experimental)</td><td>~৬১% (Camerer, 2016)</td></tr></table>
<div class="callout warn"><span class="co-icon">🧪</span><div><strong>কী ভুল হয়:</strong> p-hacking (বহু analysis, শুধু significant-টা report) · publication bias (journal "exciting" positive ফল চায়) · ছোট sample · selective reporting · HARKing (ফল দেখে তারপর hypothesis বানানো)।</div></div></div>
<div class="callout info"><span class="co-icon">🔍</span><div><strong>সমালোচনামূলক পড়ার ৭ প্রশ্ন:</strong> ① Sample size (n&lt;৩০/group সন্দেহজনক) ② Methodology (RCT gold standard; correlation ≠ causation) ③ Effect size ("statistically significant" ≠ অর্থপূর্ণ) ④ P-hacking (pre-registration = ভালো লক্ষণ) ⑤ Conflict of interest (industry-funded ৩-৪x বেশি sponsor-পক্ষে — Lundh 2012) ⑥ Replication (কেউ পুনরুৎপাদন করেছে?) ⑦ Alternative explanation (আর কী এই ফল ঘটাতে পারে?)।</div></div></div>
<table class="kv-table"><tr><th>🚩 Red flags</th><th>✅ Green flags</th></tr>
<tr><td>abstract-এ "groundbreaking/revolutionary"</td><td>pre-registered hypothesis</td></tr>
<tr><td>সীমাবদ্ধতার উল্লেখ নেই</td><td>বড়, বৈচিত্র্যময় sample</td></tr>
<tr><td>ছোট sample, বিশাল দাবি</td><td>effect size + confidence interval</td></tr>
<tr><td>শুধু p-value, effect size নেই</td><td>সততার সাথে limitation আলোচনা</td></tr>
<tr><td>industry-funded, pro-industry ফল</td><td>স্বাধীন funding, অন্যরা replicate করেছে; data/code public</td></tr></table>
<div class="callout tip"><span class="co-icon">🏛️</span><div><strong>Hierarchy of evidence (শক্তিশালী → দুর্বল):</strong> Meta-analysis → Systematic review → RCT → Cohort → Case-control → Cross-sectional survey → Case study/expert opinion → animal/in vitro।</div></div></div>

<div class="diagram">
  <div class="diag-title">Replication Crisis — কত গবেষণা আবার পাওয়া যায়?</div></div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <text class="lbl-sm" x="280" y="25" fill="#f59e0b">replication rate (যত বেশি = তত বিশ্বাসযোগ্য)</text>
    <!-- bars: field vs replication % -->
    ${[ ['সামাজিক Psych',36,100,'#ff6b35'], ['Cognitive Psych',77,80,'#52c41a'], ['Preclinical Med',18,140,'#ff6b35'], ['Experimental Econ',61,60,'#fcd34d'] ].map(s=>{
      const w = s[1]*3.2;
      return `<text class="lbl-sm" x="${150}" y="${s[3]+15}" fill="#e8e6f0" style="font-size:10px;text-anchor:end">${s[0]}</text><rect x="160" y="${s[3]+5}" width="320" height="18" class="cell" rx="3"/><rect x="160" y="${s[3]+5}" width="${w}" height="18" rx="3" style="fill:${s[2]}"/><text class="lbl-sm" x="${170+w}" y="${s[3]+18}" fill="${s[2]}" style="font-weight:700;text-anchor:start"> ${s[1]}%</text>`;
    }).join('')}
    <text class="lbl-sm" x="280" y="210" fill="#5e5c74">published মানে true নয় — তাহকিক (verify) করো প্রতিটা claim। ৬০%+ সম্ভবত ভুল।</text>
  </svg>
  <div class="diag-cap">replication rate ক্ষেত্রভেদে ভিন্ন। সামাজিক psychology ও preclinical medicine-এ সংকট গুরুতর (~৩৬%, ~১৮%)। published ≠ true — প্রতিটা claim যাচাই করো।</div></div>
</div></div>

<div class="callout tip"><span class="co-icon">📋</span><div>সমালোচনামূলক পড়ার ৭ প্রশ্ন — প্রতিটা পেপারে:

  ① Sample size — n&lt;৩০/group সন্দেহজনক
  ② Methodology — RCT gold standard; correlation ≠ causation
  ③ Effect size — "significant" ≠ অর্থপূর্ণ
  ④ P-hacking — pre-registration = ভালো লক্ষণ
  ⑤ Conflict of interest — industry-funded ৩-৪* বেশি
     sponsor-পক্ষে (Lundh 2012)
  ⑥ Replication — কেউ পুনরুৎপাদন করেছে?
  ⑦ Alternative explanation — আর কী এই ফল ঘটাতে পারে?

  Red flags: "groundbreaking" abstract, ছোট sample + বিশাল দাবি,
            শুধু p-value, effect size নেই, industry-funded।
  Green flags: pre-registered, বড় sample, effect size + CI,
              limitation আলোচনা, data/code public, replicated।</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অন্ধ বিশ্বাস</div>"Science/Nature-এ প্রকাশিত, তাই সত্য।" কিন্তু replication crisis বলে — ৬০%+ সম্ভবত ভুল বা অতিরঞ্জিত। p-hacking, publication bias, ছোট sample, industry funding — এসব প্রতিটা claim দুর্বল করে। যে পড়েই বিশ্বাস করে, সে প্রতারিত হয়।</div></div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ তাহকিক — যাচাই</div>"published = সম্ভাব্য সত্য, নিশ্চিত সত্য নয়।" প্রতিটা claim যাচাই করো — sample, method, funding, replication। কুরআন: "যাচাই না করে খবর বিশ্বাস করো না" (৪৯:৬)। যে তাহকিক করে, সে সত্য পায় — published-এর ভিড়ে সত্য আলাদা করে।</div></div>
</div></div>

<div class="dialogue">তাহকিক — verified truth, certainty through investigation। কুরআনে আল্লাহ বলেন — "তোমরা যাচাই না করে প্রতিটা খবর বিশ্বাস করো না।" (৪৯:৬)। তাহকিক = যাচাই করে তারপর গ্রহণ। পেপার পড়াও তাহকিক — প্রতিটা claim যাচাই করো। sample? method? funding? replication? যে তাহকিক করে, সে সত্য পায়। যে শুধু বিশ্বাস করে, সে প্রতারিত হয়। replication crisis আমাদের শেখায় — published মানে true নয়। তাহকিক করো।</div>
<div class="dialogue en">"Tahqiq — verified truth, certainty through investigation. Allah says — 'Do not accept any news without verification.' (49:6). Tahqiq = verify then accept. Paper reading too — verify each claim. Sample? Method? Funding? Replication? One who does tahqiq, finds truth. One who merely believes, is deceived. The replication crisis teaches — published does not mean true. Verify."</div>`,
  senior:{
    title:"Critical Analysis Checklist — Every Paper",
    body:`<p><strong>For EVERY paper you read, check:</strong></p><p>☐ Sample size: n=? (under 30 = preliminary)</p><p>☐ Methodology: RCT? Correlation? Self-report?</p><p>☐ Effect size: practical significance or just statistical?</p><p>☐ Funding source: check Acknowledgments + Conflicts</p><p>☐ Replication: has anyone reproduced this?</p><p>☐ Alternative explanations: what else could cause this?</p><p>☐ Limitations: does the paper admit its weaknesses?</p><p><strong>Rule:</strong> "Published in a top journal" does NOT mean "true." Always apply the 7 questions. The replication crisis proved that 60%+ of published findings don't hold up. Your job as a critical reader is to separate the 40% that do from the 60% that don't.</p>`
  }
});

// ══ DOOR 8: WRITING IS THINKING ══
doors.push({
  num:8, icon:"✍️", color:"#fcd34d", name:"চিন্তার কলম",
  subtitle:"Writing IS Thinking", tech:"Writing as Cognitive Tool",
  spirit:"কলম — লেখনী, জ্ঞানের হাতিয়ার",
  secret:"Paul Graham বলেন — writing IS thinking, not recording। যখন তুমি লেখো, তখন তোমার মস্তিষ্ক চিন্তা করতে বাধ্য হয়। অস্পষ্ট লেখা = অস্পষ্ট চিন্তা। স্পষ্ট লেখা = স্পষ্ট চিন্তা। কুরআন বলে — আল্লাহ কলমের মাধ্যমে শিখিয়েছেন। কলম = চিন্তার হাতিয়ার। যে লেখে, সে ভাবে। যে ভাবে, সে জানে।",
  recall:{
    q:"কেন লেখা = চিন্তা?",
    qen:"Why is writing = thinking?",
    a:"কারণ লেখার সময় মস্তিষ্ক চিন্তা করতে বাধ্য। অস্পষ্ট লেখা = অস্পষ্ট চিন্তা। স্পষ্ট লেখা = স্পষ্ট চিন্তা। Paul Graham। কলম = চিন্তার হাতিয়ার। যে লেখে, সে ভাবে।",
    aen:"Because writing forces the brain to think. Unclear writing = unclear thinking. Clear writing = clear thinking. Paul Graham. The pen = tool for thinking."
  },
  story:`<p class="scene-setting">Paul Graham — প্রবন্ধকার এবং Y Combinator-এর সহ-প্রতিষ্ঠাতা। তার প্রবন্ধ "Writing, Briefly" (২০০৭)-এ তিনি একটা সত্য বললেন — লেখা শুধু recording নয়। লেখা IS চিন্তা। তুমি যখন লেখো, তোমার মস্তিষ্ক বাধ্য হয় স্পষ্ট করতে। অস্পষ্ট ধারণা লেখার সময় স্পষ্ট হয় — বা ধ্বংস হয়। লেখা = চিন্তার পরীক্ষা।</p>
<p class="scene-setting en">Paul Graham — essayist and Y Combinator co-founder. In his essay "Writing, Briefly" (2007), he stated a truth — writing isn't recording. Writing IS thinking. When you write, your brain is forced to clarify. Unclear ideas become clear — or collapse. Writing = the test of thought.</p>

<div class="dialogue">Critical analysis বলেছিলেন — প্রতিটা claim যাচাই করো। কিন্তু আমি বলি — যাচাই করার সবচেয়ে ভালো উপায়? লেখো। যখন তুমি লেখো, তুমি বাধ্য হও প্রতিটা ধাপ স্পষ্ট করতে। মস্তিষ্কে ধোঁয়াশা — কাগজে স্পষ্ট হয় বা ধ্বংস হয়। এটাই লেখার শক্তি — চিন্তার পরীক্ষা।</div>
<div class="dialogue en">"Critical analysis said — verify each claim. But I say — the best way to verify? Write. When you write, you're forced to clarify each step. Foggy ideas in the brain — become clear on paper or collapse. This is the power of writing — the test of thought."</div>

<div class="callout info"><span class="co-icon">✍️</span><div><strong>কেন লেখা = চিন্তা (Paul Graham, "Writing, Briefly", 2007):</strong> "Writing is a more exact mode of thinking than talking।" চিন্তা এলোমেলো (branch, loop, contradict); লেখা <em>linear structure</em>-এ বাধ্য করে — কী আগে, কী পরে, কীভাবে যুক্ত। "জানি কিন্তু বলতে পারি না" = আসলে জানো না (Feynman-নীতি)।</div></div></div>
<table class="kv-table"><tr><th>লেখার ৩ ধরন</th><th>কী</th></tr>
<tr><td class="hl">Writing to think</td><td>private — journal, draft, Zettelkasten permanent note; idea explore করা</td></tr>
<tr><td class="hl">Writing to understand</td><td>summary, Feynman note, blog, tutorial — শেখার জন্য ব্যাখ্যা</td></tr>
<tr><td class="hl">Writing to communicate</td><td>polished essay, paper, বই — audience-এর জন্য</td></tr></table>
<div class="callout tip"><span class="co-icon">🌅</span><div><strong>Writing-first (Graham):</strong> কী ভাবছ জানার <em>আগেই</em> লেখা শুরু করো — লেখার কাজটাই প্রকাশ করে তুমি কী ভাবো। খারাপ করে লেখো, তারপর ঠিক করো ("essay হলো যা তুমি <em>rewrite</em> করো")। দৈনিক চর্চা: Morning Pages (Cameron, 1992 — ৩ পাতা longhand, edit নয়) · দৈনিক ১-৩ permanent note · সাপ্তাহিক synthesis।</div></div></div>
<div class="callout info"><span class="co-icon">🧠</span><div><strong>লেখা = retention:</strong> নিজের ভাষায় লেখা গভীর processing-এ বাধ্য করে (Craik &amp; Lockhart, 1972 — levels of processing: copying = shallow, rephrasing = deep, নতুন neural pathway গড়ে)। ভালো লেখক ভালো পাঠক হয় ও উল্টোটা — লেখা তোমাকে দেখায় ভালো structure ও দুর্বল যুক্তি কেমন।</div></div></div>

<div class="diagram">
  <div class="diag-title">লেখা = চিন্তার পরীক্ষা — ধোঁয়াশা স্পষ্ট হয় বা ধ্বংস</div></div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowAmberD8" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#fcd34d"/></marker>
    </defs>
    <!-- foggy brain -->
    <ellipse cx="110" cy="115" rx="55" ry="45" class="cell" style="fill:rgba(245,158,11,.08);stroke:#9290a8;stroke-dasharray:4,3"/>
    <text class="lbl-sm" x="110" y="100" fill="#9290a8">এলোমেলো চিন্তা</text>
    <text class="lbl-sm" x="110" y="118" fill="#9290a8" style="font-size:9px">branch, loop, contradict</text>
    <text class="lbl-sm" x="110" y="133" fill="#9290a8" style="font-size:9px">"জানি কিন্তু বলতে পারি না"</text>
    <!-- arrow to pen -->
    <line class="edge-amber" x1="170" y1="115" x2="240" y2="115" marker-end="url(#arrowAmberD8)"/>
    <rect class="cell-good" x="240" y="85" width="100" height="60" rx="8"/>
    <text class="lbl-sm" x="290" y="110" fill="#52c41a" style="font-weight:700">কলম</text>
    <text class="lbl-sm" x="290" y="128" fill="#9290a8" style="font-size:9px">linear structure-এ</text>
    <text class="lbl-sm" x="290" y="140" fill="#9290a8" style="font-size:9px">বাধ্য করে</text>
    <line class="edge-amber" x1="340" y1="115" x2="410" y2="115" marker-end="url(#arrowAmberD8)"/>
    <!-- result: two branches -->
    <rect class="cell-cyan" x="410" y="60" width="120" height="40" rx="8"/>
    <text class="lbl-sm" x="470" y="78" fill="#3dd6c4" style="font-weight:700">স্পষ্ট চিন্তা</text>
    <text class="lbl-sm" x="470" y="93" fill="#9290a8" style="font-size:9px">বুঝেছ (Feynman ✓)</text>
    <rect class="cell-hot" x="410" y="130" width="120" height="40" rx="8"/>
    <text class="lbl-sm" x="470" y="148" fill="#ff6b35" style="font-weight:700">ধ্বংস</text>
    <text class="lbl-sm" x="470" y="163" fill="#9290a8" style="font-size:9px">ধারণা ভাঙে — ফিরে যাও</text>
    <text class="lbl-sm" x="280" y="210" fill="#5e5c74">অস্পষ্ট লেখা = অস্পষ্ট চিন্তা। স্পষ্ট লেখা = স্পষ্ট চিন্তা। কলম = চিন্তার পরীক্ষা।</text>
  </svg>
  <div class="diag-cap">লেখা চিন্তাকে linear structure-এ বাধ্য করে — কী আগে, কী পরে, কীভাবে যুক্ত। ধোঁয়াশা স্পষ্ট হয় (বুঝেছ) বা ধ্বংস হয় (ফিরে যাও)। দুটোই জয় — কারণ এখন তুমি জানো কী বুঝেছ আর কী না।</div></div>
</div></div>

<div class="callout tip"><span class="co-icon">📋</span><div>লেখার ৩ ধরন — কোনটা কখন:

  WRITING TO THINK (private)
    journal, draft, Zettelkasten permanent note।
    idea explore করা। কাউকে দেখাবে না।

  WRITING TO UNDERSTAND (semi-public)
    summary, Feynman note, blog, tutorial।
    শেখার জন্য ব্যাখ্যা — Feynman technique-এর সাথে মিল।

  WRITING TO COMMUNICATE (public)
    polished essay, paper, বই। audience-এর জন্য।

  দৈনিক চর্চা:
    Morning Pages (Cameron 1992) — ৩ পাতা longhand, edit নয়।
    দৈনিক ১-৩ permanent note (Zettelkasten)।
    সাপ্তাহিক synthesis — ১টা unexpected connection।

  Graham: "কী ভাবছ জানার আগেই লেখা শুরু করো।
         লেখার কাজটাই প্রকাশ করে তুমি কী ভাবো।"</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">২০০৭</div><div class="sc-label">Paul Graham "Writing, Briefly"</div></div></div>
<div class="stat-card"><div class="sc-num">৩ পাতা</div><div class="sc-label">Morning Pages (Cameron 1992)</div></div></div>
<div class="stat-card"><div class="sc-num">৯৬:৪-৫</div><div class="sc-label">কুরআন — "কলমের মাধ্যমে শিখিয়েছেন"</div></div></div>
</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ মুখে ভাবা</div>"পড়েছি, বুঝেছি" — কিন্তু লিখতে বসলে কিছু আসে না। মস্তিষ্কে ধোঁয়াশা থাকে, কিন্তু linear structure নেই। "জানি কিন্তু বলতে পারি না" = আসলে জানো না (Feynman)। অস্পষ্ট চিন্তা অস্পষ্ট থেকে যায়।</div></div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ লিখে ভাবা</div>লেখা চিন্তাকে linear structure-এ বাধ্য করে। ধোঁয়াশা স্পষ্ট হয় বা ধ্বংস হয় — দুটোই জয়। কলম = চিন্তার হাতিয়ার (কুরআন ৯৬:৪-৫)। Graham: লেখা = চিন্তা, recording নয়। যে লেখে, সে ভাবে। যে ভাবে, সে জানে।</div></div>
</div></div>

<div class="dialogue">কলম — pen, the instrument of knowledge। কুরআনে আল্লাহ বলেন — "যিনি কলমের মাধ্যমে শিখিয়েছেন। মানুষকে শিখিয়েছেন যা সে জানত না।" (৯৬:৪-৫)। কলম = জ্ঞানের সর্বপ্রথম হাতিয়ার। আল্লাহ কলম দিয়ে শিখিয়েছেন — কথা দিয়ে নয়, কলম দিয়ে। কারণ কলম = চিন্তা। যে লেখে, সে ভাবে। যে ভাবে, সে শেখে। যে শেখে, সে জানে। কলম শুধু recording এর হাতিয়ার নয় — কলম চিন্তার হাতিয়ার। আল্লাহ কলমকে এত গুরুত্ব দিয়েছেন কারণ কলম দিয়ে চিন্তা স্থায়ী হয়। কথা উড়ে যায়, লেখা থাকে।</div>
<div class="dialogue en">"Qalam — pen, the instrument of knowledge. Allah says — 'Who taught by the pen. Taught man what he knew not.' (96:4-5). The pen = the first tool of knowledge. Allah taught with the pen — not with speech, with the pen. Because the pen = thinking. One who writes, thinks. One who thinks, learns. One who learns, knows. The pen is not just a recording tool — it is a thinking tool. Allah gave the pen such importance because through it, thought becomes permanent. Speech flies away, writing remains."</div>`,
  senior:{
    title:"Start Writing to Think — Today",
    body:`<p><strong>Morning pages (Julia Cameron):</strong> 3 pages, longhand, first thing in morning. No editing. No structure. Just write whatever comes. This clears mental fog and captures subconscious ideas.</p><p><strong>Daily Zettelkasten note:</strong> 1-3 permanent notes per day from what you read. One idea, your own words, linked to existing notes.</p><p><strong>Weekly synthesis:</strong> Review the week's notes. Find ONE connection you didn't expect. Write 1 paragraph about it. This paragraph may become a blog post, an essay, a chapter.</p><p><strong>Paul Graham's rule:</strong> Don't wait until you "know enough" to write. Start writing to DISCOVER what you think. The act of writing IS the understanding.</p><p><strong>The test:</strong> If you can't write 3 sentences about what you just read — you didn't understand it. Go back and read again. Then write.</p>`
  }
});

// ══ DOOR 9: SYNTOPICAL READING ══
doors.push({
  num:9, icon:"🔗", color:"#f59e0b", name:"সংশ্লেষকের কক্ষ",
  subtitle:"The Synthesizer", tech:"Syntopical Reading (Adler Level 4)",
  spirit:"সিলসিলা — সংযোগ, শৃঙ্খল",
  secret:"Syntopical reading = Adler-এর সর্বোচ্চ স্তর। একটা বই নয় — ৫-১০টা বই এক বিষয়ে পড়ো, তারপর সংশ্লেষণ করো। কোথায় তারা একমত? কোথায় অসম্মত? তোমার নিজের সিদ্ধান্ত কী? এটাই syntopical — সংযোগ থেকে সৃষ্টি। সিলসিলা — সংযুক্ত জ্ঞান।",
  recall:{
    q:"Syntopical reading কেন সর্বোচ্চ স্তর?",
    qen:"Why is syntopical reading the highest level?",
    a:"এক বই নয়, ৫-১০ বই এক বিষয়ে পড়ো, সংশ্লেষণ করো। একমত? অসম্মত? তোমার সিদ্ধান্ত? এটাই syntopical। Adler Level ৪। সিলসিলা — সংযুক্ত জ্ঞান।",
    aen:"Not one book, 5-10 books on one topic, synthesize. Agreements? Disagreements? Your decision? This is syntopical. Adler Level 4. Silsila — connected knowledge."
  },
  story:`<p class="scene-setting">তুমি একটা প্রশ্ন নিয়ে আছো — "স্মৃতি কীভাবে কাজ করে?" তুমি একটা বই পড়লে। ভালো। কিন্তু যদি ৫টা বই পড়ো? একটা বলে এক কথা, আরেকটা অন্য কথা। তুমি এখন দেখো — একমত কোথায়, অসম্মত কোথায়। তোমার নিজের সিদ্ধান্ত কী? এটাই syntopical reading — Adler-এর সর্বোচ্চ স্তর। পড়া শেষ নয় — সংশ্লেষণ শেষ।</p>
<p class="scene-setting en">You have a question — "how does memory work?" You read one book. Good. But what if you read 5? One says one thing, another says something else. Now you see — where they agree, where they disagree. What's YOUR conclusion? This is syntopical reading — Adler's highest level. Reading isn't the end — synthesis is.</p>

<div class="dialogue">লেখা = চিন্তা বলেছিলেন। কিন্তু আমি বলি — চিন্তা তখনই গভীর হয় যখন একাধিক দৃষ্টিভঙ্গি সংযুক্ত হয়। syntopical reading — ৫টা বই পড়ো এক বিষয়ে, তারপর সংযুক্ত করো। যে একটা বই পড়ে, সে একটা দৃষ্টিভঙ্গি পায়। যে ৫টা পড়ে, সে ৫টা দৃষ্টিভঙ্গি সংযুক্ত করে — সংশ্লেষণ। সিলসিলা — সংযুক্ত জ্ঞান।</div>
<div class="dialogue en">"Writing = thinking said. But I say — thinking deepens when multiple perspectives connect. Syntopical reading — read 5 books on one topic, then connect. One who reads one book gets one perspective. One who reads 5 connects 5 perspectives — synthesis. Silsila — connected knowledge."</div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">Step ১</div><div class="tl-title">📚 Bibliography</div><div class="tl-body">একটা <em>প্রশ্ন</em> বাছো (শুধু শব্দ নয়), সেরা ৫-১০ বই খোঁজো, সব inspectional-read করো।</div></div></div>
<div class="tl-step"><div class="tl-when">Step ২</div><div class="tl-title">❓ Key questions</div><div class="tl-body">এই বইগুলো কোন প্রশ্নের উত্তর খুঁজছে? উপ-প্রশ্নে ভাগ করো।</div></div></div>
<div class="tl-step"><div class="tl-when">Step ৩</div><div class="tl-title">⚔️ Issues</div><div class="tl-body">লেখকরা কোথায় দ্বিমত? (যেমন "intelligence কী?" — Gardner: multiple, Spearman: g-factor, Sternberg: triarchic)। এই মতভেদই issue।</div></div></div>
<div class="tl-step"><div class="tl-when">Step ৪</div><div class="tl-title">🗺️ Discussion</div><div class="tl-body">সব মত-অমত ম্যাপ করো; পক্ষ নেওয়ার আগে সব position বোঝো।</div></div></div>
<div class="tl-step"><div class="tl-when">Step ৫</div><div class="tl-title">🔮 Your synthesis</div><div class="tl-body">সব বোঝার পর <em>নিজের</em> মত — "সব উৎসের ভিত্তিতে আমি মনে করি X, কারণ..., তবে counterargument Y-এরও যুক্তি আছে কারণ..."। এটাই মৌলিক চিন্তা।</div></div></div>
</div></div>
<div class="callout info"><span class="co-icon">🔗</span><div><strong>Syntopical + Zettelkasten:</strong> ৫ বই syntopically পড়ো → প্রতিটা থেকে নোট → ভিন্ন বইয়ের নোটের মধ্যে link → link-ই synthesis প্রকাশ করে। Luhmann ঠিক এটাই করতেন — "power" নিয়ে লিখতে গিয়ে বিভিন্ন উৎসের সব "power" নোট টেনে আনতেন, synthesis আগে থেকেই link-এ ছিল।</div></div></div>
<div class="callout tip"><span class="co-icon">🎓</span><div><strong>পাঠক → স্রষ্টা:</strong> Elementary consumes → Inspectional selects → Analytical understands → <strong>Syntopical CREATES</strong> নতুন জ্ঞান যা আগে ছিল না। প্রতিটা বই/পেপার/প্রবন্ধ আসলে কারো syntopical synthesis।</div></div></div>

<div class="diagram">
  <div class="diag-title">Syntopical — ৫ বই সংযুক্ত করে নতুন সৃষ্টি</div></div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <!-- 5 books at top -->
    ${[ ['A',80],['B',180],['C',280],['D',380],['E',480] ].map(b=>`<rect class="cell-cyan" x="${b[1]-30}" y="40" width="60" height="40" rx="5"/><text class="lbl-sm" x="${b[1]}" y="65" fill="#3dd6c4" style="font-weight:700">বই ${b[0]}</text>`).join('')}
    <!-- converging lines to synthesis -->
    ${[80,180,280,380,480].map(x=>`<line class="edge" x1="${x}" y1="85" x2="280" y2="140" style="stroke:#fcd34d"/>`).join('')}
    <!-- synthesis node -->
    <rect class="cell-good" x="200" y="140" width="160" height="44" rx="8"/>
    <text class="lbl" x="280" y="162" fill="#52c41a">তোমার সংশ্লেষণ</text>
    <text class="lbl-sm" x="120" y="105" fill="#52c41a" style="font-size:9px">একমত</text>
    <text class="lbl-sm" x="440" y="105" fill="#ff6b35" style="font-size:9px">অসম্মত</text>
    <text class="lbl-sm" x="280" y="210" fill="#5e5c74">৫টা দৃষ্টিভঙ্গি সংযুক্ত → নতুন জ্ঞান যা আগে ছিল না। সিলসিলা — সংযুক্ত জ্ঞান।</text>
  </svg>
  <div class="diag-cap">একটা বই = এক দৃষ্টিভঙ্গি (সুতো)। ৫টা বই সংযুক্ত = জাল (সিলসিলা)। কোথায় একমত, কোথায় অসম্মত — সেই ম্যাপ থেকে তোমার নিজের সংশ্লেষণ জন্মায়। পাঠক → স্রষ্টা।</div></div>
</div></div>

<div class="callout tip"><span class="co-icon">📋</span><div>Syntopical Reading — ৫ ধাপ (Adler Level ৪):

  ১. BIBLIOGRAPHY
    একটা প্রশ্ন বাছো (শব্দ নয়)। সেরা ৫-১০ বই খোঁজো।
    সব inspectional-read করো (Door ২)।

  ২. KEY QUESTIONS
    বইগুলো কোন প্রশ্নের উত্তর খুঁজছে? উপ-প্রশ্নে ভাগ।

  ৩. ISSUES (মতভেদ)
    লেখকরা কোথায় দ্বিমত?
    (intelligence: Gardner multiple, Spearman g, Sternberg triarchic)
    এই মতভেদই issue।

  ৪. DISCUSSION
    সব মত-অমত ম্যাপ করো।
    পক্ষ নেওয়ার আগে সব position বোঝো।

  ৫. YOUR SYNTHESIS
    সব বোঝার পর নিজের মত —
    "সব উৎসের ভিত্তিতে আমি মনে করি X, কারণ...,
     তবে counterargument Y-এরও যুক্তি আছে কারণ..."
    এটাই মৌলিক চিন্তা।

  + Zettelkasten: ভিন্ন বইয়ের নোটের মধ্যে link →
    link-ই synthesis প্রকাশ করে (Luhmann)।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-১০</div><div class="sc-label">বই — এক বিষয়ে syntopical</div></div></div>
<div class="stat-card"><div class="sc-num">Level ৪</div><div class="sc-label">Adler-এর সর্বোচ্চ স্তর</div></div></div>
<div class="stat-card"><div class="sc-num">স্রষ্টা</div><div class="sc-label">পাঠক থেকে — নতুন জ্ঞান সৃষ্টি</div></div></div>
</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ এক বইয়ের দৃষ্টিভঙ্গি</div>একটা বই পড়ে সেটাই সত্য ভাবা — এক সুতো ধরে চলা। অন্য দৃষ্টিভঙ্গি অজানা, মতভেদ অদৃশ্য। যে এক বইয়ে আটকে, সে সেই লেখকের চিন্তা ধার করে বাঁচে — নিজের চিন্তা গড়ে না।</div></div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সংশ্লেষণ (সিলসিলা)</div>৫-১০ বই এক বিষয়ে পড়ো, মতভেদ ম্যাপ করো, নিজের সংশ্লেষণ গড়ো। সিলসিলা — সংযুক্ত জ্ঞান (কুরআন ৩:১০৩)। পাঠক → স্রষ্টা। PhD গবেষক, বড় লেখকরা যা করেন। নতুন জ্ঞান সৃষ্টি যা আগে ছিল না।</div></div>
</div></div>

<div class="dialogue">সিলসিলা — chain, connection, linkage। কুরআনে আল্লাহ বলেন — "তোমরা সবাই আল্লাহর রশি দৃঢ়ভাবে ধরো, একসাথে।" (৩:১০৩)। একসাথে = সিলসিলা। syntopical reading-ও সিলসিলা — একাধিক উৎস একসাথে সংযুক্ত। যে একটা বই পড়ে, সে একটা সুতো ধরে। যে পাঁচটা সংযুক্ত করে, সে একটা জাল বানায়। জাল শক্তিশালী, সুতো দুর্বল। সিলসিলা — সংযুক্ত জ্ঞান। যে সংযুক্ত করে, সে সৃষ্টি করে।</div>
<div class="dialogue en">"Silsila — chain, connection, linkage. Allah says — 'Hold fast to the rope of Allah, all together.' (3:103). Together = silsila. Syntopical reading too — multiple sources connected together. One who reads one book holds one thread. One who connects five builds a web. The web is strong, the thread is weak. Silsila — connected knowledge. One who connects, creates."</div>`,
  senior:{
    title:"Your First Syntopical Project",
    body:`<p><strong>Pick ONE question you care about.</strong> Example: "How do habits form?" or "What makes someone successful?" or "Is AI dangerous?"</p><p><strong>Find ৫ books on it.</strong> Use Amazon/Goodreads reviews. Inspectional-read all 5 first (Door ২). Maybe only ৩ are worth deep reading.</p><p><strong>Read analytically (Level ৩).</strong> Take Zettelkasten notes from each (Door ৩). Link notes across books.</p><p><strong>Map agreements + disagreements.</strong> Write: "All agree X. A and B disagree on Y because..."</p><p><strong>Write YOUR synthesis.</strong> 1-2 pages. "Based on all sources, here's what I believe, and here's why." This is your ORIGINAL THINKING. Nobody else has this exact view — it's yours.</p><p><strong>This is what researchers do.</strong> This is what PhD students do. This is what great writers do. Now it's what YOU do.</p>`
  }
});

// ══ DOOR 10: SECOND BRAIN SYNTHESIS ══
doors.push({
  num:10, icon:"🏛️", color:"#fcd34d", name:"জ্ঞানের স্থপতি",
  subtitle:"The Knowledge Architect", tech:"Second Brain (Tiago Forte, 2022) + Complete Synthesis",
  spirit:"হিকমাহ — প্রজ্ঞা, প্রয়োগকৃত জ্ঞান",
  secret:"নয়টি দরজা পেরিয়েছ। Ebbinghaus থেকে Luhmann, Adler থেকে Feynman, Keshav থেকে syntopical। সব একসাথে = second brain। Tiago Forte (২০২২) এর CODE পদ্ধতি — Capture, Organize, Distill, Express। তোমার মস্তিষ্ক সৃষ্টির জন্য, সংরক্ষণের জন্য নয়। Second brain = সংরক্ষণ। First brain = সৃষ্টি। হিকমাহ — প্রয়োগকৃত জ্ঞান।",
  recall:{
    q:"সব দরজার সারমর্ম কী?",
    qen:"What is the essence of all doors?",
    a:"Ebbinghaus থেকে Luhmann, Adler থেকে Feynman — সব একসাথে = second brain। মস্তিষ্ক সৃষ্টির জন্য, সংরক্ষণের জন্য নয়। CODE — Capture, Organize, Distill, Express। হিকমাহ — প্রয়োগকৃত জ্ঞান।",
    aen:"Ebbinghaus to Luhmann, Adler to Feynman — all together = second brain. Brain for creating, not storing. CODE. Hikmah — applied wisdom."
  },
  story:`<p class="scene-setting">দশম দরজা। শেষ। স্থপতি ইদ্রিস একটা বিশাল গ্রন্থাগারে দাঁড়িয়ে আছেন — কিন্তু বইয়ের তাক নয়, সংযুক্ত নোটের জাল। "তুমি নয় দরজা পেরিয়েছ," তিনি বললেন। "Ebbinghaus বলেছিলেন — ভুলে যাও। Adler বলেছিলেন — স্তরে স্তরে পড়ো। Luhmann বলেছিলেন — নোট নাও, সংযুক্ত করো। Feynman বলেছিলেন — সহজ করে ব্যাখ্যা করো। Keshav বলেছিলেন — ৩ পাসে পড়ো। Gates ও Munger বলেছিলেন — প্রতিদিন পড়ো। সব একসাথে = তোমার second brain। মস্তিষ্ক সংরক্ষণের জন্য নয় — সৃষ্টির জন্য।"</p>
<p class="scene-setting en">The tenth door. The last. Architect Idris stands in a vast library — not bookshelves, but a web of connected notes. "You've passed nine doors," he said. "Ebbinghaus said — you forget. Adler said — read in layers. Luhmann said — take notes, connect. Feynman said — explain simply. Keshav said — read in 3 passes. Gates and Munger said — read daily. All together = your second brain. The brain is not for storing — it's for creating."</p>

<table class="kv-table"><tr><th>CODE (Tiago Forte, 2022)</th><th>কী</th></tr>
<tr><td class="hl">Capture</td><td>যা resonates — highlight, quote, idea; এখনই organize নয়</td></tr>
<tr><td class="hl">Organize</td><td>PARA — Projects, Areas, Resources, Archives; topic নয়, "ব্যবহার করব কি?" অনুযায়ী</td></tr>
<tr><td class="hl">Distill</td><td>progressive summarization — original → bold → highlight → ৩-বাক্য সারাংশ</td></tr>
<tr><td class="hl">Express</td><td>blog/essay/paper/বই — system output দেয়, শূন্য থেকে লেখো না</td></tr></table>
<table class="kv-table"><tr><th>কাজ</th><th>টুল</th></tr>
<tr><td class="hl">Notes/PKM</td><td>Obsidian (free, local), Notion, Logseq</td></tr>
<tr><td class="hl">Reading</td><td>Kindle highlights, Readwise, Pocket</td></tr>
<tr><td class="hl">Papers</td><td>Zotero (free), Mendeley</td></tr>
<tr><td class="hl">Spaced rep</td><td>Anki (free), RemNote</td></tr></table>
<table class="kv-table"><tr><th>নয় মাস্টার</th><th>তোমার system-এ অবদান</th></tr>
<tr><td class="hl">Ebbinghaus (1885)</td><td>WHY — ৯০% ভুলে যাও, তাই ঠিক করো</td></tr>
<tr><td class="hl">Adler (1940/72)</td><td>HOW — ৪ স্তরে পড়া</td></tr>
<tr><td class="hl">Luhmann (1952-98)</td><td>STORE — Zettelkasten (atomic linked notes)</td></tr>
<tr><td class="hl">Feynman</td><td>TEST — সহজ করে ব্যাখ্যা করো</td></tr>
<tr><td class="hl">Keshav (2007)</td><td>PAPERS — ৩-pass method</td></tr>
<tr><td class="hl">Musk/Gates/Munger/Naval</td><td>HABIT — দৈনিক, বিস্তৃতভাবে পড়া</td></tr>
<tr><td class="hl">Roediger &amp; Karpicke (2006)</td><td>RETAIN — testing effect (self-test &gt; re-read)</td></tr>
<tr><td class="hl">Ahrens (2017)</td><td>WORKFLOW — smart notes → permanent notes</td></tr>
<tr><td class="hl">Forte (2022)</td><td>SYSTEM — CODE + PARA (second brain)</td></tr></table>
<div class="callout tip"><span class="co-icon">🏛️</span><div><strong>মূল নীতি:</strong> তোমার জৈবিক মস্তিষ্ক <em>idea তৈরি, সংযোগ, বিচার, সিদ্ধান্তের</em> জন্য — <em>তথ্য সংরক্ষণের</em> জন্য নয় (সেটা নোটের কাজ)। David Allen (GTD): "Your mind is for having ideas, not holding them।" Tiago Forte: "second brain বানাও যাতে first brain যা সবচেয়ে ভালো পারে — think — তাই করতে পারে।" Capture → Organize → Distill → Express। এটাই জ্ঞানের কারিগর।</div></div></div>

<div class="diagram">
  <div class="diag-title">Second Brain — CODE Pipeline (Tiago Forte, 2022)</div></div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowAmberD10" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#fcd34d"/></marker>
    </defs>
    <text class="lbl-sm" x="90" y="35" fill="#9290a8" style="font-size:9px">first brain</text>
    <text class="lbl-sm" x="470" y="35" fill="#9290a8" style="font-size:9px">second brain</text>
    <!-- 4 stages -->
    ${[ ['CAPTURE','highlight, quote, idea',70,'#5b9eff'], ['ORGANIZE','PARA — Projects/Areas/Resources',210,'#3dd6c4'], ['DISTILL','progressive summarization',350,'#fcd34d'], ['EXPRESS','blog/essay/paper — output',490,'#52c41a'] ].map(s=>`<rect x="${s[2]-60}" y="80" width="120" height="50" rx="8" style="fill:${s[3]}22;stroke:${s[3]}"/><text class="lbl-sm" x="${s[2]}" y="100" fill="${s[3]}" style="font-weight:700">${s[0]}</text><text class="lbl-sm" x="${s[2]}" y="118" fill="#9290a8" style="font-size:8px">${s[1]}</text>`).join('')}
    <line class="edge-amber" x1="130" y1="105" x2="150" y2="105" marker-end="url(#arrowAmberD10)"/>
    <line class="edge-amber" x1="270" y1="105" x2="290" y2="105" marker-end="url(#arrowAmberD10)"/>
    <line class="edge-amber" x1="410" y1="105" x2="430" y2="105" marker-end="url(#arrowAmberD10)"/>
    <!-- feedback loop back to capture -->
    <path class="edge" d="M 490 130 Q 490 180 280 180 Q 70 180 70 130" fill="none" style="stroke:#f59e0b;stroke-dasharray:4,3"/>
    <text class="lbl-sm" x="280" y="195" fill="#f59e0b" style="font-size:9px">Express → নতুন idea → আবার Capture (feedback loop)</text>
    <text class="lbl-sm" x="280" y="218" fill="#5e5c74">first brain = think (সৃষ্টি), second brain = store (সংরক্ষণ)। একসাথে = জ্ঞানের কারিগর।</text>
  </svg>
  <div class="diag-cap">মস্তিষ্ক সৃষ্টির জন্য, সংরক্ষণের জন্য নয়। Second brain (Capture→Organize→Distill→Express) সংরক্ষণ করে, যাতে first brain যা সবচেয়ে ভালো পারে — think — তাই করতে পারে। Express থেকে নতুন idea → আবার Capture।</div></div>
</div></div>

<div class="callout tip"><span class="co-icon">📋</span><div>Second Brain — ৯ মাস্টার, এক system:

  WHY     — Ebbinghaus (১৮৮৫): ৯০% ভুলে যাও
  HOW     — Adler (১৯৪০): ৪ স্তরে পড়া
  STORE   — Luhmann: Zettelkasten (atomic linked notes)
  TEST    — Feynman: সহজ করে ব্যাখ্যা
  PAPERS  — Keshav (২০০৭): ৩-pass method
  HABIT   — Musk/Gates/Munger/Naval: দৈনিক পড়া
  RETAIN  — Roediger &amp; Karpicke (২০০৬): testing effect
  WORKFLOW— Ahrens (২০১৭): smart → permanent notes
  SYSTEM  — Forte (২০২২): CODE + PARA (second brain)

  মূল নীতি (David Allen):
    "Your mind is for having ideas, not holding them."
    → first brain = think, second brain = store।

  টুলস্ট্যাক: Obsidian (notes) + Readwise (highlights)
              + Zotero (papers) + Anki (spaced rep)।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">CODE</div><div class="sc-label">Capture · Organize · Distill · Express (Forte 2022)</div></div></div>
<div class="stat-card"><div class="sc-num">PARA</div><div class="sc-label">Projects · Areas · Resources · Archives</div></div></div>
<div class="stat-card"><div class="sc-num">৯ মাস্টার</div><div class="sc-label">Ebbinghaus → Forte, এক system-এ</div></div></div>
<div class="stat-card"><div class="sc-num">হিকমাহ</div><div class="sc-label">প্রয়োগকৃত জ্ঞান — পড়া থেকে সৃষ্টি</div></div></div>
</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ মস্তিষ্কে গচ্ছিত</div>সব মনে রাখার চেষ্টা — কিন্তু Ebbinghaus বলেন ৯০% ভুলে যাবে। মস্তিষ্ক সংরক্ষণের জন্য নয় — তথ্যে ভরে গেলে think করতে পারে না। "মনে আছে" ভাবলেও প্রয়োগের সময় ফাঁকা। প্রথম দরজার ছিদ্র বালতি বারবার ফিরে আসে।</div></div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Second Brain</div>সংরক্ষণ second brain-এ (CODE + PARA), first brain সৃষ্টির জন্য মুক্ত। প্রতিটা দরজার পদ্ধতি — পড়া, নোট, পরীক্ষা, সংযোগ, সৃষ্টি — একসাথে গলে একটা system-এ। হিকমাহ — প্রয়োগকৃত জ্ঞান। যে সৃষ্টি করে, সে অবিচ্ছেয্য।</div></div>
</div></div>

<div class="verse">"তিনি মানুষকে শিখিয়েছেন কলমের মাধ্যমে। মানুষকে শিখিয়েছেন যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>পড়ো, ভাবো, লেখো — এটাই জ্ঞানের ত্রিমূর্তি। পড়া ছাড়া জ্ঞান আসে না। ভাবা ছাড়া জ্ঞান গভীর হয় না। লেখা ছাড়া জ্ঞান স্থায়ী হয় না। এই তিনের সংযোগ = হিকমাহ — প্রজ্ঞা, প্রয়োগকৃত জ্ঞান। যে পড়ে, সে জানে। যে ভাবে, সে বোঝে। যে লেখে, সে সৃষ্টি করে। যে সৃষ্টি করে, সে অবিচ্ছেয্য। এটাই জ্ঞানের কারিগর — পড়া থেকে সৃষ্টি।</div></div>

<div class="secret-box"><div class="label">দশম দরজা — সমন্বয়</div><div class="text">🏛️ জ্ঞান কারিগর = Capture + Organize + Distill + Express + Synthesize।<br><small>পড়ো (Adler), নোট নাও (Luhmann), পরীক্ষা করো (Feynman), সংযুক্ত করো (Syntopical), সৃষ্টি করো (Express)। মস্তিষ্ক সৃষ্টির জন্য, সংরক্ষণের জন্য নয়।</small></div></div>`,
  senior:{
    title:"Build Your Second Brain — ৪ সপ্তাহ পরিকল্পনা",
    body:`<p><strong>সপ্তাহ ১ — Capture:</strong> একটা টুল বাছো (Obsidian, ফ্রি)। এই সপ্তাহে পড়া/শোনার সব highlight, quote, idea সেখানে রাখো। organize করার চিন্তা কোরো না — শুধু capture।</p><p><strong>সপ্তাহ ২ — Organize:</strong> PARA প্রয়োগ করো — Projects (চলমান কাজ), Areas (দায়িত্ব), Resources (তথ্য), Archives (পুরোনো)। topic নয় — "কীভাবে ব্যবহার করব" অনুযায়ী সাজাও।</p><p><strong>সপ্তাহ ৩ — Distill:</strong> progressive summarization। প্রতিটা captured note-এ bold → highlight → ৩-বাক্য সারাংশ। Zettelkasten permanent note বানাও — এক idea, নিজের ভাষায়, linked।</p><p><strong>সপ্তাহ ৪ — Express:</strong> একটা ছোট output লেখো — blog post, thread, Feynman explanation। second brain থেকে টেনে লেখো, শূন্য থেকে নয়। এই output-ই পরীক্ষা — কী বুঝেছ তা প্রমাণ করে।</p><p><strong>মূল নীতি:</strong> মস্তিষ্ক সৃষ্টির জন্য, সংরক্ষণের জন্য নয়। Second brain বানাও — যাতে তুমি যা সবচেয়ে ভালো পারো (think, create), তাই করতে পারো। এটাই হিকমাহ — প্রয়োগকৃত জ্ঞান।</p>`
  }
});
