// ════════════════════════════════════════
// গবেষণার কারিগর — DOORS 6-10
// Research Paper: Writing → Building → Synthesis
// Cross-references Book 26, 20, 24
// ════════════════════════════════════════

// ══ DOOR 6: PAPER STRUCTURE & OUTLINE ══
doors.push({
  num:6, icon:"🏗️", color:"#a5b4fc", name:"পত্রের নকশা",
  subtitle:"The Architecture Builder", tech:"IMRaD Deep Dive for WRITING",
  spirit:"বিনা — স্থাপত্য, কাঠামো",
  secret:"Door ১-এ তুমি IMRaD পড়তে শিখেছ। এখন শেখো লিখতে। প্রতিটা সেকশনের নির্দিষ্ট কাজ আছে — Introduction: why? Methods: how? Results: what? Discussion: so what? Simon Peyton Jones: 'Writing is the LAMP of research — you don't understand until you write.' বিনা — স্থাপত্যের শিল্প।",
  recall:{
    q:"Paper লেখার আগে কী দরকার?",
    qen:"What do you need before writing?",
    a:"Outline। প্রতিটা সেকশনের নির্দিষ্ট কাজ। Intro: why? Methods: how? Results: what? Discussion: so what? Simon Peyton Jones — writing IS research। বিনা — স্থাপত্য।",
    aen:"Outline. Each section has a specific job. Intro: why? Methods: how? Results: what? Discussion: so what? Simon Peyton Jones — writing IS research. Bina — architecture."
  },
  story:`<p class="scene-setting">তুমি একটা research question পেয়েছ (Door ৫)। এখন কী? কারিগর সাবরিনা বললেন — নকশা। কোনো ভবন নকশা ছাড়া বানানো হয় না। কোনো paper-ও নকশা ছাড়া লেখা হয় না। প্রতিটা সেকশনের নির্দিষ্ট কাজ। প্রতিটা প্যারাগ্রাফের নির্দিষ্ট উদ্দেশ্য। Simon Peyton Jones (Microsoft Research) বলেন — পেপার লেখা গবেষণার অংশ, গবেষণার শেষে নয়। লেখার সময় তুমি বুঝতে পারো — কোথায় তোমার গবেষণার ঘাটতি।</p>
<p class="scene-setting en">You have a research question (Door 5). Now what? Craftswoman Sabrina said — architecture. No building is built without a blueprint. No paper is written without an outline. Each section has a specific job. Each paragraph has a specific purpose. Simon Peyton Jones (Microsoft Research) says — writing the paper IS part of the research, not the end. While writing, you discover gaps in your research.</p>

<div class="dialogue">Research question বলেছিলেন — সঠিক প্রশ্ন খোঁজো। কিন্তু আমি বলি — প্রশ্ন পেলেও কীভাবে পেপার লেখবে? নকশা ছাড়া। Door ১-এ তুমি IMRaD পড়তে শিখেছ। এখন শেখো লেখতে। প্রতিটা সেকশনের নির্দিষ্ট কাজ — যেমন ভবনের প্রতিটা তলার নির্দিষ্ট উদ্দেশ্য। বিনা — স্থাপত্যের শিল্প।</div>
<div class="dialogue en">"Research question said — find the right question. But I say — even with a question, how do you write the paper? Without a blueprint. In Door 1 you learned to read IMRaD. Now learn to write it. Each section has a specific job — like each floor of a building has a specific purpose. Bina — the art of architecture."</div>

<div class="callout info"><span class="co-icon">🏗️</span><div><strong>Simon Peyton Jones (Microsoft Research):</strong> "Writing the paper IS the research।" পদ্ধতি: আগে outline লেখো (content নয়) → প্রতি section-এ ৩-৫ bullet → ধীরে ভরাট → iterate। <em>Problem-এর প্রেমে পড়ো, solution-এর নয় — solution শুধু evidence।</em></div></div>
<table class="kv-table"><tr><th>Section (লেখার জন্য)</th><th>কাজ</th></tr>
<tr><td class="hl">Introduction (funnel)</td><td>Wide → Narrow → contribution; শেষ প্যারায় contribution explicit list (reviewer এটাই scan করে)</td></tr>
<tr><td class="hl">Methods (recipe)</td><td>cookbook-এর মতো — Methods থেকেই reproduce করা যাবে; diagram, hyperparameter, training</td></tr>
<tr><td class="hl">Results (evidence)</td><td>figure/table আগে; প্রতি ফল: কী মাপলে → সংখ্যা → মানে → কেন; baseline + ablation</td></tr>
<tr><td class="hl">Discussion (maturity)</td><td>"X-এ ভালো, Y-তে fail" — limitation লুকিও না; নিজে ধরলে thoughtful, reviewer ধরলে careless</td></tr></table>
<div class="callout tip"><span class="co-icon">🔀</span><div><strong>লেখার ক্রম (শুরু-থেকে-শেষ নয়):</strong> Figures → Methods (তুমি এটাই ভালো জানো) → Results → Discussion → Introduction (এখন পুরো গল্প জানো) → Abstract → Conclusion → Related Work → Title।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrRPC6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#a5b4fc"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f1428" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">পত্রের নকশা — IMRaD লেখার ক্রম (বিনা)</text>
<text x="290" y="40" text-anchor="middle" fill="#94a3b8" font-size="8">শুরু-থেকে-শেষ নয় — সহজ থেকে কঠিন</text>
<rect x="20" y="50" width="540" height="24" rx="5" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="40" y="66" fill="#a5b4fc" font-size="8" font-weight="bold">① Figures</text>
<text x="300" y="66" fill="#94a3b8" font-size="10">গল্প বলা চিত্র — reviewer আগে দেখে</text>
<line x1="290" y1="76" x2="290" y2="86" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC6)"/>
<rect x="20" y="88" width="540" height="24" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="40" y="104" fill="#fcd34d" font-size="8" font-weight="bold">② Methods</text>
<text x="300" y="104" fill="#94a3b8" font-size="10">তুমি এটাই ভালো জানো — recipe, spec</text>
<line x1="290" y1="114" x2="290" y2="124" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC6)"/>
<rect x="20" y="126" width="540" height="24" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="40" y="142" fill="#fcd34d" font-size="8" font-weight="bold">③ Results</text>
<text x="300" y="142" fill="#94a3b8" font-size="10">evidence — figure আগে, সংখ্যা পরে</text>
<line x1="290" y1="152" x2="290" y2="162" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC6)"/>
<rect x="20" y="164" width="540" height="24" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="40" y="180" fill="#fcd34d" font-size="8" font-weight="bold">④ Discussion</text>
<text x="300" y="180" fill="#94a3b8" font-size="10">so what? limitation লুকিও না</text>
<line x1="290" y1="190" x2="290" y2="198" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC6)"/>
<rect x="20" y="200" width="540" height="24" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="40" y="216" fill="#fcd34d" font-size="8" font-weight="bold">⑤ Introduction</text>
<text x="300" y="216" fill="#94a3b8" font-size="10">এখন পুরো গল্প জানো — funnel</text>
<rect x="20" y="228" width="540" height="16" rx="4" fill="#0d1526" stroke="#52c41a" stroke-width="1" stroke-dasharray="3,2"/>
<text x="290" y="239" text-anchor="middle" fill="#4ade80" font-size="10">Abstract → Conclusion → Related Work → Title (শেষে)</text>
</svg>
</div>
<div class="svg-caption">বিনা — লেখার ক্রম: figures থেকে title পর্যন্ত, স্থপতির নকশা</div>

<div class="verse">الَّذِي خَلَقَ فَسَوَّىٰ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"যিনি সৃষ্টি করেছেন এবং নিয়মে বেঁধেছেন।" — কুরআন ৮৭:২</div>
<div class="dialogue">বিনা — building, construction, architecture। নিয়মে বাঁধা = বিনা। পত্র নির্মাণও বিনা — নিয়মে বাঁধা। প্রতিটা সেকশনের নির্দিষ্ট কাজ। প্রতিটা প্যারাগ্রাফের নির্দিষ্ট স্থান। যে বিনা করে, সে নিখুঁত। যে অগোছালো লেখে, সে বিভ্রান্ত করে। Simon Peyton Jones বলেন — writing IS research। কারণ লেখার সময় তুমি বোঝো — কোথায় তোমার গবেষণার ঘাটতি। বিনা — স্থাপত্যের শিল্প।</div>
<div class="dialogue en">"Bina — building, construction, architecture. Allah says — 'Who created and proportioned.' (87:2). Proportioning = bina. Paper construction too — proportioned. Each section with its specific job. Each paragraph in its specific place. One who builds with bina, perfects. One who writes messily, confuses. Simon Peyton Jones says — writing IS research. Because while writing, you discover — where your research falls short. Bina — the art of architecture."</div>`,
  senior:{
    title:"Write Your Paper Outline — This Week",
    body:`<p><strong>Take your research question from Door 5. Create the outline:</strong></p><p>১. <strong>Title</strong> (working): 10-20 words, descriptive</p><p>২. <strong>Contributions</strong>: list 3 bullet points — what's NEW</p><p>৩. <strong>Introduction outline</strong>: context → problem → gap → your work</p><p>৪. <strong>Methods outline</strong>: architecture, components, training</p><p>৫. <strong>Results outline</strong>: what tables/figures will you need?</p><p>৬. <strong>Discussion outline</strong>: what limitations? future work?</p><p><strong>Simon Peyton Jones' rule:</strong> "Fall in love with the PROBLEM, not the solution. The paper is about the problem — the solution is just evidence."</p>`
  }
});

// ══ DOOR 7: WRITING THE PAPER ══
doors.push({
  num:7, icon:"✍️", color:"#818cf8", name:"প্রথম খসড়া",
  subtitle:"The Draft Writer", tech:"Drafting, Figures, LaTeX, References",
  spirit:"কলম — লেখনী",
  secret:"প্রথম খসড়া সবার জন্য খারাপ। Anne Lamott: 'shitty first drafts।' কিন্তু খারাপ খসড়া ভালো খসড়ার জন্ম দেয়। প্রতিটা খসড়া ভালো হয়। টুল: LaTeX, Overleaf, Zotero, GraphPad। কলম — জ্ঞানের হাতিয়ার। লেখো, সম্পাদনা করো, উন্নত করো।",
  recall:{
    q:"প্রথম খসড়া কেমন হওয়া উচিত?",
    qen:"How should the first draft be?",
    a:"খারাপ। Anne Lamott: shitty first drafts। কিন্তু খারাপ খসড়া ভালোর জন্ম দেয়। LaTeX, Overleaf, Zotero। লেখো, সম্পাদনা, উন্নত। কলম।",
    aen:"Bad. Anne Lamott: shitty first drafts. But bad drafts birth good ones. LaTeX, Overleaf, Zotero. Write, edit, improve. Qalam."
  },
  story:`<p class="scene-setting">নকশা তৈরি (Door ৬)। এখন লেখা। কারিগর ইউসুফ বললেন — ভয় পেও না। প্রথম খসড়া সবার জন্য খারাপ। Anne Lamott (১৯৯৫) তার বই Bird by Bird-এ লিখেছেন — shitty first drafts। প্রতিটা ভালো লেখা একটা খারাপ খসড়া থেকে শুরু। তুমি শুধু লেখো। সম্পাদনা পরে। উন্নতি আরও পরে। কলম চালাও — বন্ধ করো না।</p>
<p class="scene-setting en">Blueprint ready (Door 6). Now writing. Craftsman Yusuf said — don't be afraid. The first draft is bad for everyone. Anne Lamott (1995) wrote in Bird by Bird — shitty first drafts. Every good writing starts from a bad draft. You just write. Edit later. Improve even later. Move the pen — don't stop.</p>

<div class="dialogue">পত্রের নকশা বলেছিলেন — প্রতিটা সেকশনের কাজ। কিন্তু আমি বলি — নকশা পূরণ করার সময় ভয় আসবে। কী লেখব? কেমন লেখব? ইউসুফ বলেন — শুধু লেখো। খারাপ হলে হবে। কিন্তু খালি পাতা = কিছু নয়। খারাপ খসড়া = সম্পাদনার উপাদান। জ্ঞানের কারিগর (Book ২৬, Door ৮) বলেছিলেন — writing IS thinking। লেখার সময় তুমি ভাবো। ভাবার সময় তুমি বুঝো। কলম চালাও।</div>
<div class="dialogue en">"Paper architecture said — each section's job. But I say — filling the outline brings fear. What to write? How to write? Yusuf says — just write. Bad is fine. But blank page = nothing. Bad draft = material for editing. The Knowledge Craftsman (Book 26, Door 8) said — writing IS thinking. While writing, you think. While thinking, you understand. Move the pen."</div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">Draft ১ · ১-২ সপ্তাহ</div><div class="tl-title">💩 Shitty first draft</div><div class="tl-body">শুধু পাতায় শব্দ আনো; লেখার সময় edit নয়; লক্ষ্য — outline ভরাট (Anne Lamott)।</div></div>
<div class="tl-step"><div class="tl-when">Draft ২ · ১ সপ্তাহ</div><div class="tl-title">🧱 Structural</div><div class="tl-body">প্রতি section flow করে? প্রতি প্যারায় এক main point? claim-এর সমর্থন আছে?</div></div>
<div class="tl-step"><div class="tl-when">Draft ৩ · ৩-৫ দিন</div><div class="tl-title">✂️ Line edit</div><div class="tl-body">প্রতি বাক্য স্পষ্ট ও সংক্ষিপ্ত; "very/really/actually" মুছো।</div></div>
<div class="tl-step"><div class="tl-when">Draft ৪ · ২-৩ দিন</div><div class="tl-title">✨ Polish</div><div class="tl-body">জোরে পড়ো; প্রতিটা figure reference ও citation যাচাই।</div></div>
</div>
<table class="kv-table"><tr><th>টুল</th><th>কাজ</th></tr>
<tr><td class="hl">Overleaf</td><td>collaborative LaTeX (বেশিরভাগ CS/ML পেপার)</td></tr>
<tr><td class="hl">Zotero</td><td>free reference manager, auto bibliography</td></tr>
<tr><td class="hl">matplotlib/seaborn</td><td>results plot</td></tr>
<tr><td class="hl">draw.io / excalidraw</td><td>architecture diagram</td></tr></table>
<div class="callout warn"><span class="co-icon">🤖</span><div><strong>LLM-assisted writing (2024+):</strong> ✅ outline brainstorm, grammar polish, বাক্য সরল করা। ❌ গোটা পেপার LLM দিয়ে লেখা (hallucinated citation!), সংখ্যা/reference verify না করা। ⚠️ Nature/Science/IEEE-তে AI disclosure লাগে; LLM author হতে পারে না (ICMJE/Nature)। নিরাপদ — LLM শুধু polish/brainstorm-এ, সব content ও citation নিজে যাচাই করো।</div></div>
<div class="callout tip"><span class="co-icon">📊</span><div><strong>Figures = সবচেয়ে গুরুত্বপূর্ণ:</strong> reviewer আগে figure দেখে। architecture diagram (text ছাড়াই বোঝা যাবে), main results (best number bold), ablation, qualitative examples। vector graphics, font ≥৮pt, caption পুরো গল্প বলবে।</div></div>
<div class="callout info"><span class="co-icon">🔗</span><div><strong>Citations ও blank page:</strong> মূল source cite করো (textbook নয়), ৮-পাতায় ~৩০-৬০ ref, self-citation ১-৩ max। সহজতম section (Methods/Results) দিয়ে শুরু করো, Introduction দিয়ে নয়। "খারাপ করে লেখো — খারাপ লেখা ঠিক করা যায়, খালি পাতা যায় না।"</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrRPC7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#a5b4fc"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f1428" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">প্রথম খসড়া — চারটি ড্রাফট (কলম)</text>
<rect x="20" y="38" width="125" height="58" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="82" y="56" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Draft ১</text>
<text x="82" y="70" text-anchor="middle" fill="#94a3b8" font-size="10">১-২ সপ্তাহ</text>
<text x="82" y="84" text-anchor="middle" fill="#f06292" font-size="10">💩 shitty</text>
<text x="82" y="94" text-anchor="middle" fill="#94a3b8" font-size="10">outline ভরাট</text>
<rect x="155" y="38" width="125" height="58" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="217" y="56" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Draft ২</text>
<text x="217" y="70" text-anchor="middle" fill="#94a3b8" font-size="10">১ সপ্তাহ</text>
<text x="217" y="84" text-anchor="middle" fill="#fcd34d" font-size="10">🧱 structural</text>
<text x="217" y="94" text-anchor="middle" fill="#94a3b8" font-size="10">flow, claim</text>
<rect x="290" y="38" width="125" height="58" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="352" y="56" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Draft ৩</text>
<text x="352" y="70" text-anchor="middle" fill="#94a3b8" font-size="10">৩-৫ দিন</text>
<text x="352" y="84" text-anchor="middle" fill="#3dd6c4" font-size="10">✂️ line edit</text>
<text x="352" y="94" text-anchor="middle" fill="#94a3b8" font-size="10">প্রতি বাক্য</text>
<rect x="425" y="38" width="135" height="58" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="492" y="56" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Draft ৪</text>
<text x="492" y="70" text-anchor="middle" fill="#94a3b8" font-size="10">২-৩ দিন</text>
<text x="492" y="84" text-anchor="middle" fill="#4ade80" font-size="10">✨ polish</text>
<text x="492" y="94" text-anchor="middle" fill="#94a3b8" font-size="10">জোরে পড়ো</text>
<line x1="82" y1="98" x2="82" y2="112" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC7)"/>
<line x1="217" y1="98" x2="217" y2="112" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC7)"/>
<line x1="352" y1="98" x2="352" y2="112" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC7)"/>
<line x1="492" y1="98" x2="492" y2="112" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC7)"/>
<rect x="20" y="114" width="540" height="34" rx="6" fill="#0d1526" stroke="#52c41a" stroke-width="2"/>
<text x="290" y="130" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">Anne Lamott: "shitty first drafts"</text>
<text x="290" y="142" text-anchor="middle" fill="#94a3b8" font-size="10">খারাপ খসড়া = সম্পাদনার উপাদান · খালি পাতা = কিছু নয়</text>
<text x="290" y="168" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">টুল</text>
<rect x="40" y="176" width="125" height="28" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="102" y="194" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">Overleaf (LaTeX)</text>
<rect x="175" y="176" width="125" height="28" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="237" y="194" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">Zotero (refs)</text>
<rect x="310" y="176" width="125" height="28" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="372" y="194" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">matplotlib</text>
<rect x="445" y="176" width="115" height="28" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="502" y="194" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">draw.io</text>
<rect x="20" y="212" width="540" height="28" rx="5" fill="#0d1526" stroke="#f06292" stroke-width="1" stroke-dasharray="3,2"/>
<text x="290" y="227" text-anchor="middle" fill="#f06292" font-size="10">Methods দিয়ে শুরু করো, Introduction দিয়ে নয় — সহজ অংশ আগে</text>
<text x="290" y="236" text-anchor="middle" fill="#94a3b8" font-size="10">LLM ✅ polish/brainstorm · ❌ গোটা পেপার (hallucinated citation!)</text>
</svg>
</div>
<div class="svg-caption">কলম — চারটি ড্রাফট: shitty → structural → line edit → polish</div>

<div class="verse">الَّذِي عَلَّمَ بِالْقَلَمِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"যিনি কলমের মাধ্যমে শিখিয়েছেন।" — কুরআন ৯৬:৪</div>
<div class="dialogue">কলম — pen, the instrument of knowledge। কলম জ্ঞানের হাতিয়ার। জ্ঞানের কারিগর (Book ২৬) বলেছিলেন — লেখা = চিন্তা। এখন আমি বলি — গবেষণাপত্র লেখা = গবেষণা। লেখার সময় তুমি বোঝো — কোথায় গবেষণার ঘাটতি। কলম চালাও। ভুল হলে হবে। খালি পাতা রাখো না। কলম — জ্ঞানের স্থায়ী হাতিয়ার।</div>
<div class="dialogue en">"Qalam — pen, the instrument of knowledge. Allah says — 'Who taught by the pen.' (96:4). The pen is the tool of knowledge. The Knowledge Craftsman (Book 26) said — writing = thinking. Now I say — writing a research paper = research. While writing, you discover gaps. Move the pen. Mistakes are fine. Don't leave the page blank. Qalam — the permanent tool of knowledge."</div>`,
  senior:{
    title:"Write Your First Draft — This Month",
    body:`<p><strong>Start with Methods section</strong> (easiest — you know this best). Don't start with Introduction (hardest).</p><p><strong>Tool setup:</strong> Overleaf (free LaTeX), Zotero (free reference manager), matplotlib/seaborn for figures.</p><p><strong>Rule: shitty first draft.</strong> Don't edit while writing. Just get words on the page. Fill every section of the outline. Bad writing can be fixed. A blank page cannot.</p><p><strong>After first draft:</strong> Read aloud. Every sentence should be clear. Every figure should tell a story. Every claim should have a citation.</p><p><strong>Time: 2-3 weeks for first draft. 2-3 more weeks for revision. Then — submit.</strong></p>`
  }
});

// ══ DOOR 8: PEER REVIEW ══
doors.push({
  num:8, icon:"🔬", color:"#a5b4fc", name:"সমালোচকের কক্ষ",
  subtitle:"The Reviewer's Chamber", tech:"Peer Review, Revision, Response",
  spirit:"মুহাসাবা — হিসাব, যাচাই",
  secret:"Submit → wait → review → revise → resubmit। প্রথম submit-এ ৯০% paper reject হয়। স্বাভাবিক। কিন্তু যে হাল ছাড়ে না — সে publish করে। Reviewer comment = পরামর্শ, আক্রমণ নয়। প্রতিটা comment সম্মানজনকভাবে উত্তর দাও। মুহাসাবা — সমালোচনা গ্রহণ ও উত্তর।",
  recall:{
    q:"Peer review-এ কীভাবে বাঁচবে?",
    qen:"How to survive peer review?",
    a:"Submit → review → revise → resubmit। ৯০% প্রথমবার reject। স্বাভাবিক। যে হাল ছাড়ে না, সে publish করে। Reviewer = পরামর্শ, আক্রমণ নয়। প্রতিটা comment সম্মানজনক উত্তর। মুহাসাবা।",
    aen:"Submit → review → revise → resubmit. 90% rejected first time. Normal. One who doesn't give up, publishes. Reviewer = advice, not attack. Answer each comment respectfully. Muhasabah."
  },
  story:`<p class="scene-setting">তুমি paper submit করেছ। ৩ মাস অপেক্ষা। একদিন ইমেইল — Decision: Major Revision। হৃদপিণ্ড থমকে। কিন্তু কারিগর হাসান বললেন — এটাই স্বাভাবিক। ৯০% paper প্রথমবার reject বা major revision পায়। এটা ব্যর্থতা নয় — প্রক্রিয়া। Reviewer তোমার শত্রু নয় — তারা তোমার paper ভালো করতে চায়। প্রতিটা comment সম্মানের সাথে উত্তর দাও। যে ধৈর্য ধরে, সে publish করে।</p>
<p class="scene-setting en">You submitted your paper. 3 months waiting. One day email — Decision: Major Revision. Heart stops. But Craftsman Hasan said — this is normal. 90% of papers get rejected or major revision first time. This isn't failure — it's process. Reviewers aren't your enemy — they want to make your paper better. Answer each comment respectfully. One who is patient, publishes.</p>

<div class="dialogue">Draft writer বলেছিলেন — লেখো, খসড়া। কিন্তু আমি বলি — লেখার পরে আসল পরীক্ষা — peer review। Reviewer কঠোর হবেন। কিন্তু মনে রাখো — human psychology book (Book ২৪) বলেছিলেন — সমালোচনা = প্রতিক্রিয়া, উন্নতির সুযোগ। Reviewer comment = আক্রমণ নয়, উন্নতির পরামর্শ। মুহাসাবা — সমালোচনা গ্রহণ, সম্মানজনক উত্তর, উন্নতি।</div>
<div class="dialogue en">"The draft writer said — write, draft. But I say — after writing comes the real test — peer review. Reviewers will be harsh. But remember — the human psychology book (Book 24) said — criticism = feedback, opportunity to improve. Reviewer comments = not attacks, advice for improvement. Muhasabah — accepting criticism, responding respectfully, improving."</div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>Publication cycle:</strong> Submit → editor desk review → reviewers (২-৪) → wait (১-৬ মাস) → decision → revise → resubmit → second review → accept → camera-ready → published।</div></div>
<table class="kv-table"><tr><th>সিদ্ধান্ত</th><th>মানে</th></tr>
<tr><td class="hl">Accept as-is</td><td>অলৌকিক — উদযাপন করো</td></tr>
<tr><td class="hl">Minor revision (~২০%)</td><td>কাছাকাছি; typo/ছোট issue, ১-২ সপ্তাহ</td></tr>
<tr><td class="hl">Major revision (~৪০%)</td><td>খুব ভালো — তারা চায়, কাজ লাগবে (১-৩ মাস)। <strong>ব্যর্থতা নয়</strong> — প্রকাশনার সবচেয়ে সাধারণ পথ</td></tr>
<tr><td class="hl">Reject (~৩৫%)</td><td>অন্য venue-তে চেষ্টা করো</td></tr></table>
<div class="callout tip"><span class="co-icon">✉️</span><div><strong>Response letter (পেপারের মতোই গুরুত্বপূর্ণ):</strong> প্রতি comment — ধন্যবাদ → quote → উত্তর → কী বদলালে (page/line)। Tone সবসময় সম্মানজনক: "reviewer ভুল" নয়, "We appreciate this concern; however..."। কোনো comment উপেক্ষা কোরো না।</div></div>
<div class="callout info"><span class="co-icon">📅</span><div><strong>Revision timeline:</strong> Day 1-2 আবেগ process করো (কষ্ট হবে, স্বাভাবিক) · Day 3-5 comment ভাগ: A (সহজ)/B (মাঝারি)/C (কঠিন) · Day 6-30 A দিয়ে শুরু, তারপর B, C · Day 31-33 response letter · Day 34 resubmit।</div></div>
<table class="kv-table"><tr><th>Venue</th><th>Acceptance rate</th></tr>
<tr><td class="hl">Top conf (NeurIPS)</td><td>~২০-২৫%</td></tr>
<tr><td class="hl">Mid conf/journal</td><td>~২৫-৩০%</td></tr>
<tr><td class="hl">Workshop</td><td>~৪০-৫০%</td></tr>
<tr><td class="hl">arXiv (preprint)</td><td>১০০% (no review)</td></tr></table>
<div class="callout tip"><span class="co-icon">🗡️</span><div><strong>Rejection = ব্যর্থতা নয়:</strong> প্রথম পেপারের কৌশল — arXiv preprint → workshop → mid venue → top venue। (অনেক গুরুত্বপূর্ণ কাজ প্রথমে প্রত্যাখ্যাত হয়েছিল — সান্ত্বনা হিসেবে নাও, তথ্য হিসেবে নয়।) "পেপার তলোয়ারের মতো — reviewer-এর হাতুড়ির প্রতিটা আঘাতে ধারালো হয়।"</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrRPC8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#a5b4fc"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f1428" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">Peer Review — প্রকাশনার চক্র (মুহাসাবা)</text>
<rect x="20" y="36" width="100" height="26" rx="5" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="70" y="53" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Submit</text>
<line x1="120" y1="49" x2="134" y2="49" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC8)"/>
<rect x="136" y="36" width="100" height="26" rx="5" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="186" y="53" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Editor desk</text>
<line x1="236" y1="49" x2="250" y2="49" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC8)"/>
<rect x="252" y="36" width="100" height="26" rx="5" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="302" y="53" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Reviewers</text>
<line x1="352" y1="49" x2="366" y2="49" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC8)"/>
<rect x="368" y="36" width="100" height="26" rx="5" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="418" y="53" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Wait ১-৬ মা</text>
<line x1="468" y1="49" x2="482" y2="49" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC8)"/>
<rect x="484" y="36" width="76" height="26" rx="5" fill="#0d1526" stroke="#52c41a" stroke-width="2"/>
<text x="522" y="53" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">Decision</text>
<text x="290" y="78" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">সিদ্ধান্ত বিভাজন (~৯০% প্রথমবার নয়)</text>
<rect x="20" y="88" width="135" height="50" rx="6" fill="#1a2744" stroke="#52c41a" stroke-width="1.5"/>
<text x="87" y="104" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">Accept</text>
<text x="87" y="118" text-anchor="middle" fill="#94a3b8" font-size="10">~৫% অলৌকিক</text>
<text x="87" y="130" text-anchor="middle" fill="#94a3b8" font-size="10">উদযাপন করো</text>
<rect x="165" y="88" width="135" height="50" rx="6" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="232" y="104" text-anchor="middle" fill="#3dd6c4" font-size="8" font-weight="bold">Minor rev</text>
<text x="232" y="118" text-anchor="middle" fill="#94a3b8" font-size="10">~২০%</text>
<text x="232" y="130" text-anchor="middle" fill="#94a3b8" font-size="10">১-২ সপ্তাহ</text>
<rect x="310" y="88" width="135" height="50" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="377" y="104" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">Major rev</text>
<text x="377" y="118" text-anchor="middle" fill="#94a3b8" font-size="10">~৪০% খুব ভালো</text>
<text x="377" y="130" text-anchor="middle" fill="#94a3b8" font-size="10">১-৩ মাস</text>
<rect x="455" y="88" width="105" height="50" rx="6" fill="#1a2744" stroke="#f06292" stroke-width="1.5"/>
<text x="507" y="104" text-anchor="middle" fill="#f06292" font-size="8" font-weight="bold">Reject</text>
<text x="507" y="118" text-anchor="middle" fill="#94a3b8" font-size="10">~৩৫%</text>
<text x="507" y="130" text-anchor="middle" fill="#94a3b8" font-size="10">অন্য venue</text>
<line x1="377" y1="140" x2="377" y2="152" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC8)"/>
<rect x="120" y="154" width="340" height="30" rx="6" fill="#0d1526" stroke="#52c41a" stroke-width="2"/>
<text x="290" y="172" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">Revise → Response letter → Resubmit</text>
<text x="290" y="195" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">Response letter সূত্র</text>
<rect x="40" y="202" width="500" height="34" rx="5" fill="#0d1526" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
<text x="290" y="217" text-anchor="middle" fill="#fcd34d" font-size="10">ধন্যবাদ → comment quote → উত্তর → কী বদলালে (page/line)</text>
<text x="290" y="229" text-anchor="middle" fill="#94a3b8" font-size="10">Tone সবসময় সম্মানজনক — "We appreciate this concern; however..."</text>
</svg>
</div>
<div class="svg-caption">মুহাসাবা — submit থেকে accept পর্যন্ত, reviewer শত্রু নয় মুহাসাবাকারী</div>

<div class="dialogue">মুহাসাবা — self-examination, accountability, taking stock। ইসলামী ঐতিহ্যে মুহাসাবা হলো — নিজেকে যাচাই করা, আগে বিচার করা যাতে পরে বিচারিত না হতে হয়। Peer review-ও মুহাসাবা — তোমার কাজ যাচাই। যে মুহাসাবা গ্রহণ করে, সে উন্নতি করে। যে প্রতিরোধ করে, সে আটকে যায়। Reviewer = শত্রু নয়, মুহাসাবাকারী। প্রতিটা comment = উন্নতির সুযোগ। মুহাসাবা — সমালোচনা গ্রহণ ও উত্তরের গুণ।</div>
<div class="dialogue en">"Muhasabah — self-examination, accountability, taking stock. In Islamic tradition, muhasabah is examining yourself, judging yourself before being judged. Peer review too — verification of your work. One who accepts muhasabah, improves. One who resists, gets stuck. Reviewers = not enemies, accountants. Each comment = opportunity for improvement. Muhasabah — the virtue of accepting and responding to criticism."</div>`,
  senior:{
    title:"Peer Review Survival Guide",
    body:`<p><strong>When you get reviews back:</strong></p><p>১. Take ২ days to process emotionally. It WILL hurt. That's normal.</p><p>২. Categorize comments: A (easy), B (medium), C (hard). Start with A.</p><p>৩. Write response letter: quote every comment, respond respectfully, cite page/line changes.</p><p><strong>Golden rule of response letters:</strong> "We thank the reviewer for this insightful comment." Even when they're wrong. Even when it hurts. Respect earns respect.</p><p><strong>If rejected:</strong> It's not failure. Google's PageRank was rejected. Read the comments, improve, submit elsewhere. Every great paper was rejected somewhere.</p><p><strong>First paper strategy:</strong> arXiv preprint → workshop → mid venue → then aim high. Build confidence and track record gradually.</p>`
  }
});

// ══ DOOR 9: USING PAPERS IN YOUR WORK ══
doors.push({
  num:9, icon:"🔗", color:"#818cf8", name:"সেতু নির্মাতা",
  subtitle:"The Bridge Builder", tech:"Citation, Extension, Reproduction",
  spirit:"সিলসিলা — শৃঙ্খল, সংযোগ",
  secret:"Paper পড়ে শেষ নয় — সংযুক্ত করো। তিনভাবে: cite (স্বীকার), extend (প্রসার), reproduce (যাচাই)। যে cite করে, সে সম্মান দেয়। যে extend করে, সে নতুন জ্ঞান তৈরি করে। যে reproduce করে, সে সত্য যাচাই করে। সিলসিলা — জ্ঞানের শৃঙ্খলে নিজের যোগ।",
  recall:{
    q:"অন্যের paper কীভাবে নিজের কাজে ব্যবহার করবে?",
    qen:"How to use others' papers in your work?",
    a:"তিনভাবে: cite (স্বীকার), extend (প্রসার), reproduce (যাচাই)। Cite = সম্মান। Extend = নতুন জ্ঞান। Reproduce = সত্য যাচাই। সিলসিলা — শৃঙ্খলে যোগ।",
    aen:"Three ways: cite (acknowledge), extend (expand), reproduce (verify). Cite = honor. Extend = new knowledge. Reproduce = verify truth. Silsila — joining the chain."
  },
  story:`<p class="scene-setting">Paper লেখা শেখালেন (Doors ৬-৮)। কিন্তু কারিগর রুকইয়া বললেন — একটা কথা বাকি। তুমি শুধু নিজের paper লেখোনি শূন্য থেকে — তুমি অন্যের কাঁধে দাঁড়িয়ে আছ। তাদের কাজ স্বীকার করো (cite)। তাদের কাজ প্রসারিত করো (extend)। তাদের কাজ যাচাই করো (reproduce)। এটাই research-এর প্রকৃতি — একটা শৃঙ্খল। প্রতিটা paper আগের paper-এর উপর নির্মিত। তুমি শৃঙ্খলে নতুন লিঙ্ক।</p>
<p class="scene-setting en">You learned to write papers (Doors 6-8). But Craftswoman Ruqayya said — one thing remains. You don't write from scratch — you stand on others' shoulders. Acknowledge their work (cite). Extend their work (build on). Verify their work (reproduce). This is the nature of research — a chain. Each paper built on prior papers. You are a new link in the chain.</p>

<div class="dialogue">Peer review বলেছিলেন — সমালোচনা গ্রহণ করো। কিন্তু আমি বলি — সমালোচনা গ্রহণের পরে আসে সংযোগ। তুমি শুধু পড়ো না, লেখো না — তুমি সংযুক্ত করো। অন্যের কাজ স্বীকার, প্রসার, যাচাই। এটাই research-এর চক্র — পড়ো → বোঝো → সংযুক্ত করো → সৃষ্টি করো → পরের জন্য ছেড়ে যাও। সিলসিলা — জ্ঞানের শৃঙ্খলে নিজের যোগ।</div>
<div class="dialogue en">"Peer review said — accept criticism. But I say — after accepting criticism comes connection. You don't just read, write — you connect. Acknowledge, extend, verify others' work. This is the research cycle — read → understand → connect → create → leave for the next person. Silsila — joining the chain of knowledge."</div>

<table class="kv-table"><tr><th>৩ সংযোগ</th><th>কী</th></tr>
<tr><td class="hl">১. Citation (স্বীকার)</td><td>method/dataset/idea/তুলনা ব্যবহার করলে cite; না করলে plagiarism। over-cite করো — missing key reference = instant reject।</td></tr>
<tr><td class="hl">২. Extension (প্রসার)</td><td>domain transfer · method improvement · combination (A+B) · scale। স্পষ্ট করো কোনটা prior work, কোনটা তোমার contribution।</td></tr>
<tr><td class="hl">৩. Reproduction (যাচাই)</td><td>সর্বোচ্চ সম্মান — তাদের কোড/data-তে run করে মেলানো। error ধরে, trust গড়ে, expert বানায়; reproduction পেপারও প্রকাশযোগ্য।</td></tr></table>
<div class="callout info"><span class="co-icon">🔗</span><div><strong>জ্ঞানের শৃঙ্খল:</strong> [Paper A] → [Paper B] → [Paper C] → <strong>[তুমি]</strong> → ভবিষ্যতের কাজ তোমার উপর গড়ে। তুমি একই সাথে prior work-এর উপর দাঁড়িয়ে (cite) আর ভবিষ্যতের জন্য জমি ছেড়ে (contribute)।</div></div>
<div class="callout tip"><span class="co-icon">🌉</span><div><strong>একটা পেপার → একটা পেপার:</strong> Methods পড়ো → কোড clone/run → তোমার data-তে test → limitation → fix propose → implement → original বনাম তোমার তুলনা → পেপার ("We improve X by Y")। চক্র চলতে থাকে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrRPC9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#a5b4fc"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f1428" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">সেতু নির্মাতা — জ্ঞানের শৃঙ্খল (সিলসিলা)</text>
<rect x="20" y="40" width="110" height="40" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="75" y="58" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Paper A</text>
<text x="75" y="72" text-anchor="middle" fill="#94a3b8" font-size="10">foundational</text>
<line x1="130" y1="60" x2="164" y2="60" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC9)"/>
<rect x="166" y="40" width="110" height="40" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="221" y="58" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Paper B</text>
<text x="221" y="72" text-anchor="middle" fill="#94a3b8" font-size="10">extends A</text>
<line x1="276" y1="60" x2="310" y2="60" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC9)"/>
<rect x="312" y="40" width="110" height="40" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="367" y="58" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Paper C</text>
<text x="367" y="72" text-anchor="middle" fill="#94a3b8" font-size="10">extends B</text>
<line x1="422" y1="60" x2="456" y2="60" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC9)"/>
<rect x="458" y="40" width="102" height="40" rx="6" fill="#0d1526" stroke="#52c41a" stroke-width="2.5"/>
<text x="509" y="58" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">তুমি</text>
<text x="509" y="72" text-anchor="middle" fill="#4ade80" font-size="10">new link</text>
<text x="290" y="102" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">৩ সংযোগ — তুমি কোনটা করছ?</text>
<rect x="20" y="110" width="175" height="58" rx="6" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="107" y="128" text-anchor="middle" fill="#3dd6c4" font-size="9" font-weight="bold">① Cite</text>
<text x="107" y="142" text-anchor="middle" fill="#94a3b8" font-size="10">স্বীকার</text>
<text x="107" y="154" text-anchor="middle" fill="#94a3b8" font-size="10">method/idea ব্যবহার</text>
<text x="107" y="164" text-anchor="middle" fill="#f06292" font-size="10">না করলে = plagiarism</text>
<rect x="205" y="110" width="175" height="58" rx="6" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="292" y="128" text-anchor="middle" fill="#3dd6c4" font-size="9" font-weight="bold">② Extend</text>
<text x="292" y="142" text-anchor="middle" fill="#94a3b8" font-size="10">প্রসার</text>
<text x="292" y="154" text-anchor="middle" fill="#94a3b8" font-size="10">domain transfer</text>
<text x="292" y="164" text-anchor="middle" fill="#94a3b8" font-size="10">method improve · A+B</text>
<rect x="390" y="110" width="170" height="58" rx="6" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="475" y="128" text-anchor="middle" fill="#3dd6c4" font-size="9" font-weight="bold">③ Reproduce</text>
<text x="475" y="142" text-anchor="middle" fill="#94a3b8" font-size="10">যাচাই</text>
<text x="475" y="154" text-anchor="middle" fill="#94a3b8" font-size="10">কোড/data run করে</text>
<text x="475" y="164" text-anchor="middle" fill="#94a3b8" font-size="10">সর্বোচ্চ সম্মান</text>
<rect x="20" y="180" width="540" height="34" rx="6" fill="#0d1526" stroke="#52c41a" stroke-width="2"/>
<text x="290" y="196" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">চক্র: পড়ো → বোঝো → সংযুক্ত করো → সৃষ্টি করো → পরের জন্য ছেড়ে যাও</text>
<text x="290" y="208" text-anchor="middle" fill="#94a3b8" font-size="10">ভবিষ্যতের কাজ তোমার উপর গড়ে — তুমি শৃঙ্খলের অংশ</text>
<rect x="20" y="220" width="540" height="20" rx="4" fill="#0d1526" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
<text x="290" y="234" text-anchor="middle" fill="#fbbf24" font-size="10">কুরআন ৩:১০৩ — "আল্লাহর রশি দৃঢ়ভাবে ধরো, একসাথে" = সিলসিলা</text>
</svg>
</div>
<div class="svg-caption">সিলসিলা — cite, extend, reproduce: জ্ঞানের শৃঙ্খলে নিজের যোগ</div>

<div class="verse">وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তোমরা সবাই আল্লাহর রশি দৃঢ়ভাবে ধরো, একসাথে।" — কুরআন ৩:১০৩</div>
<div class="dialogue">সিলসিলা — chain, connection, linkage। একসাথে = সিলসিলা। research-ও সিলসিলা — জ্ঞানের শৃঙ্খল। প্রতিটা paper আগের paper-এর সাথে সংযুক্ত। তুমি নতুন লিঙ্ক — পুরোনো সংযুক্ত, নতুন সৃষ্টি, ভবিষ্যতের জন্য ছেড়ে যাও। যে সিলসিলা ভাঙে (plagiarism), সে বিচ্ছিন্ন হয়। যে সিলসিলা মানে (cite), সে সম্মানিত হয়। যে সিলসিলা বাড়ায় (extend), সে সৃষ্টি করে। সিলসিলা — জ্ঞানের শৃঙ্খলে নিজের যোগ।</div>
<div class="dialogue en">"Silsila — chain, connection, linkage. Allah says — 'Hold fast to the rope of Allah, all together.' (3:103). Together = silsila. Research too — a chain of knowledge. Each paper connected to prior papers. You are a new link — connecting the old, creating the new, leaving for the future. One who breaks the chain (plagiarism) is disconnected. One who honors the chain (cite) is respected. One who extends the chain (build on) creates. Silsila — joining the chain of knowledge."</div>`,
  senior:{
    title:"From Reading to Building — The Arc",
    body:`<p><strong>The complete research arc from ONE paper:</strong></p><p>১. Read paper (Keshav 3-pass)</p><p>২. Clone their code → run → verify</p><p>৩. Test on YOUR data → what works? what doesn't?</p><p>৪. Identify the limitation → this is your GAP</p><p>৫. Propose a fix → this is your CONTRIBUTION</p><p>৬. Implement → code + experiments</p><p>৭. Compare: original vs yours → this is your EVIDENCE</p><p>৮. Write paper → "We improve [X] by [Y] for [Z]"</p><p><strong>This is a COMPLETE paper from reading ONE paper.</strong> One paper → one idea → one experiment → one paper → the cycle continues. Every great researcher started this way.</p>`
  }
});

// ══ DOOR 10: SYNTHESIS ══
doors.push({
  num:10, icon:"🚀", color:"#a5b4fc", name:"গবেষণার স্থপতি",
  subtitle:"The Research Architect", tech:"Complete Research Workflow Synthesis",
  spirit:"হিকমাহ — প্রজ্ঞা, প্রয়োগকৃত জ্ঞান",
  secret:"নয়টি দরজা পেরিয়েছ। Anatomy → engineer → scientist → PhD → question → write → review → build → synthesize। সব একসাথে = গবেষক। তুমি এখন শুধু পাঠক নয় — স্রষ্টা। শুধু consumer নয় — contributor। জ্ঞানের শৃঙ্খলে তোমার নিজের লিঙ্ক। হিকমাহ — প্রয়োগকৃত জ্ঞান। যে প্রয়োগ করে, সে জানে।",
  senior:{
    title:"সম্পূর্ণ গবেষণা কর্মপ্রবাহ এক নজরে",
    body:`<table class="kv-table"><tr><th>দরজা</th><th>দক্ষতা</th><th>টুল</th></tr>
<tr><td class="hl">১-৩</td><td>পড়া</td><td>Anatomy · Keshav 3-pass · critical eye</td></tr>
<tr><td class="hl">৪-৫</td><td>প্রশ্ন</td><td>Gap matrix · FINER criteria</td></tr>
<tr><td class="hl">৬-৭</td><td>লেখা</td><td>IMRaD · figures-first draft</td></tr>
<tr><td class="hl">৮-৯</td><td>উন্নতি</td><td>Peer review · citation building</td></tr>
<tr><td class="hl">১০</td><td>সংশ্লেষণ</td><td>সব একসাথে = contributor</td></tr></table>`
  },
  recall:{
    q:"সব দরজার সারমর্ম কী?",
    qen:"What is the essence of all doors?",
    a:"Anatomy → read like engineer/scientist/PhD → question → write → review → build → synthesize। সব একসাথে = গবেষক। তুমি এখন স্রষ্টা। হিকমাহ — প্রয়োগকৃত জ্ঞান।",
    aen:"Anatomy → read like engineer/scientist/PhD → question → write → review → build → synthesize. All together = researcher. You are now a creator. Hikmah — applied knowledge."
  },
  story:`<p class="scene-setting">দশম দরজা। শেষ। স্থপতি ইদ্রিস একটা বিশাল কক্ষে দাঁড়িয়ে আছেন — দেয়ালে প্রতিটা দরজার সারমর্ম। "তুমি নয়টি দরজা পেরিয়েছ," তিনি বললেন। "Paper anatomy, engineer-এর পাঠ, scientist-এর চোখ, PhD-এর gap সন্ধান, research question, paper লেখা, peer review, অন্যের কাজের উপর নির্মাণ। সব একসাথে — তুমি এখন গবেষক। শুধু যে পড়ে, সে consumer। যে লেখে, সে contributor। তুমি এখন contributor।"</p>
<p class="scene-setting en">The tenth door. The last. Architect Idris stands in a vast chamber — each door's essence on the walls. "You've passed nine doors," he said. "Paper anatomy, the engineer's read, the scientist's eye, the PhD's gap-finding, research question, paper writing, peer review, building on others' work. All together — you are now a researcher. One who only reads is a consumer. One who writes is a contributor. You are now a contributor."</p>

<div class="dialogue">নয়টি দরজা পেরিয়েছ। Anatomy বলেছিলেন, পত্রের কাঠামো। Engineer বলেছিলেন, প্রয়োগ। Scientist বলেছিলেন, যাচাই। PhD বলেছিলেন, gap। Question বলেছিলেন, প্রশ্ন। Architecture বলেছিলেন, নকশা। Draft বলেছিলেন, লেখা। Review বলেছিলেন, সমালোচনা। Bridge বলেছিলেন, সংযোগ। এখন — সব একসাথে। তুমি এখন গবেষণার স্থপতি। শুধু পাঠক নয় — স্রষ্টা।</div>
<div class="dialogue en">"You've passed nine doors. Anatomy said, the paper's structure. Engineer said, application. Scientist said, verification. PhD said, gaps. Question said, asking. Architecture said, blueprint. Draft said, writing. Review said, criticism. Bridge said, connection. Now — all together. You are now a research architect. Not just a reader — a creator."</div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">Phase ১ · দ্বার ১-৪</div><div class="tl-title">📖 READ</div><div class="tl-body">Paper anatomy (IMRaD) · engineer read (code+method) · scientist eye (verify) · PhD reader (gap)।</div></div>
<div class="tl-step"><div class="tl-when">Phase ২ · দ্বার ৫</div><div class="tl-title">💡 DISCOVER</div><div class="tl-body">gap → research question; FINER test (Feasible, Interesting, Novel, Ethical, Relevant); একটা প্রশ্ন বাছো।</div></div>
<div class="tl-step"><div class="tl-when">Phase ৩ · দ্বার ৬-৭</div><div class="tl-title">🏗️ BUILD</div><div class="tl-body">IMRaD outline → implement → experiment (run, measure, ablate) → shitty first draft → polished final।</div></div>
<div class="tl-step"><div class="tl-when">Phase ৪ · দ্বার ৮</div><div class="tl-title">📤 PUBLISH</div><div class="tl-body">submit → peer review → respectful response letter → camera-ready।</div></div>
<div class="tl-step"><div class="tl-when">Phase ৫ · দ্বার ৯</div><div class="tl-title">🔗 CONNECT</div><div class="tl-body">সঠিক cite, code+data release, অন্যরা তোমার কাজের উপর গড়ে — তুমি শৃঙ্খলের অংশ।</div></div>
</div>
<table class="kv-table"><tr><th>কাজ</th><th>টুল</th></tr>
<tr><td class="hl">পেপার খোঁজা</td><td>Google Scholar, arXiv, Connected Papers</td></tr>
<tr><td class="hl">Reference</td><td>Zotero (free)</td></tr>
<tr><td class="hl">Code</td><td>Papers With Code, GitHub</td></tr>
<tr><td class="hl">লেখা / figure</td><td>Overleaf (LaTeX), matplotlib, draw.io</td></tr>
<tr><td class="hl">নোট / stats</td><td>Obsidian, Python (scipy)</td></tr></table>
<div class="callout info"><span class="co-icon">🗓️</span><div><strong>প্রথম পেপার — ৯০ দিনের প্ল্যান:</strong> সপ্তাহ ১-২ ৫-২০ পেপার, ৩ gap → সপ্তাহ ৩ research question (FINER) → সপ্তাহ ৪-৬ implement + experiment + ablation + figure → সপ্তাহ ৭-৮ first draft (Methods আগে, Intro/Abstract শেষে), feedback → সপ্তাহ ৯ revise → সপ্তাহ ১০ arXiv + submit → সপ্তাহ ১১-১৩ review-ভিত্তিক revise → প্রকাশিত।</div></div>
<div class="callout tip"><span class="co-icon">🚀</span><div><strong>অগ্রগতি:</strong> Consumer → Reader → Analyzer → Writer → Builder → <strong>Architect</strong>। পড়া <em>informed</em>, বিশ্লেষণ <em>critical</em>, লেখা <em>contributor</em>, নির্মাণ <em>researcher</em>। শুরু করেছিলে consumer হিসেবে, শেষ করছ architect হিসেবে। হিকমাহ — শুধু জানা নয়, DOING; শুধু consuming নয়, CONTRIBUTING।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrRPC10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#a5b4fc"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f1428" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">গবেষণার স্থপতি — সম্পূর্ণ প্রবাহ (হিকমাহ)</text>
<rect x="20" y="36" width="100" height="44" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="70" y="52" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Phase ১</text>
<text x="70" y="64" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">📖 READ</text>
<text x="70" y="75" text-anchor="middle" fill="#94a3b8" font-size="10">দ্বার ১-৪</text>
<line x1="120" y1="58" x2="134" y2="58" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC10)"/>
<rect x="136" y="36" width="100" height="44" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="186" y="52" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Phase ২</text>
<text x="186" y="64" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">💡 DISCOVER</text>
<text x="186" y="75" text-anchor="middle" fill="#94a3b8" font-size="10">দ্বার ৫</text>
<line x1="236" y1="58" x2="250" y2="58" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC10)"/>
<rect x="252" y="36" width="100" height="44" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="302" y="52" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Phase ৩</text>
<text x="302" y="64" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">🏗️ BUILD</text>
<text x="302" y="75" text-anchor="middle" fill="#94a3b8" font-size="10">দ্বার ৬-৭</text>
<line x1="352" y1="58" x2="366" y2="58" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC10)"/>
<rect x="368" y="36" width="100" height="44" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="418" y="52" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Phase ৪</text>
<text x="418" y="64" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">📤 PUBLISH</text>
<text x="418" y="75" text-anchor="middle" fill="#94a3b8" font-size="10">দ্বার ৮</text>
<line x1="468" y1="58" x2="482" y2="58" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC10)"/>
<rect x="484" y="36" width="76" height="44" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="522" y="52" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Phase ৫</text>
<text x="522" y="64" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">🔗 CONNECT</text>
<text x="522" y="75" text-anchor="middle" fill="#94a3b8" font-size="10">দ্বার ৯</text>
<text x="290" y="98" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">অগ্রগতির সিঁড়ি</text>
<rect x="30" y="108" width="520" height="20" rx="4" fill="#1a2744" stroke="#f06292" stroke-width="1"/>
<text x="290" y="121" text-anchor="middle" fill="#f06292" font-size="10">Consumer — শুধু পড়ে</text>
<rect x="60" y="130" width="460" height="20" rx="4" fill="#1a2744" stroke="#fbbf24" stroke-width="1"/>
<text x="290" y="143" text-anchor="middle" fill="#fcd34d" font-size="10">Reader → Analyzer — পড়ে, বিশ্লেষণ করে</text>
<rect x="90" y="152" width="400" height="20" rx="4" fill="#1a2744" stroke="#3dd6c4" stroke-width="1"/>
<text x="290" y="165" text-anchor="middle" fill="#3dd6c4" font-size="10">Writer → Builder — লেখে, নির্মাণ করে</text>
<rect x="120" y="174" width="340" height="24" rx="5" fill="#0d1526" stroke="#52c41a" stroke-width="2.5"/>
<text x="290" y="190" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">🚀 Architect — contributor, স্রষ্টা</text>
<rect x="20" y="204" width="540" height="34" rx="6" fill="#0d1526" stroke="#52c41a" stroke-width="2" stroke-dasharray="3,2"/>
<text x="290" y="219" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">হিকমাহ — প্রয়োগকৃত জ্ঞান: শুধু জানা নয়, DOING</text>
<text x="290" y="231" text-anchor="middle" fill="#94a3b8" font-size="10">শুধু consuming নয়, CONTRIBUTING — জ্ঞানের শৃঙ্খলে নিজের লিঙ্ক</text>
</svg>
</div>
<div class="svg-caption">হিকমাহ — দশটি দরজার সমন্বয়: Read → Discover → Build → Publish → Connect</div>

<div class="verse">"তিনি মানুষকে শিখিয়েছেন কলমের মাধ্যমে। মানুষকে শিখিয়েছেন যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>গবেষণাপত্র = জ্ঞানের সম্প্রসারণ। তুমি পড়ো, বোঝো, যাচাই করো, প্রশ্ন করো, গবেষণা করো, লেখো, প্রকাশ করো। তোমার পত্র পরে কেউ পড়বে, সংযুক্ত করবে, প্রসারিত করবে। এটাই জ্ঞানের শৃঙ্খল — প্রতিটা প্রজন্ম আগের কাঁধে দাঁড়ায়। তুমি এখন সেই শৃঙ্খলে একটি লিঙ্ক। হিকমাহ — প্রয়োগকৃত জ্ঞান। যে প্রয়োগ করে, সে জানে। যে জানে, সে সৃষ্টি করে। যে সৃষ্টি করে, সে অবিচ্ছেয্য।</div>

<div class="secret-box"><div class="label">দশম দরজা — সমন্বয়</div><div class="text">🚀 Research Architect = Read + Verify + Question + Write + Publish + Connect।<br><small>তুমি এখন consumer নয় — contributor। জ্ঞানের শৃঙ্খলে তোমার নিজের লিঙ্ক। হিকমাহ — প্রয়োগকৃত জ্ঞান।</small></div></div>`
});
