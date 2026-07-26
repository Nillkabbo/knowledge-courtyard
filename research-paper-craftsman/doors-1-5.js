// ════════════════════════════════════════
// গবেষণার কারিগর — DOORS 1-5
// Research Paper: Anatomy → Reading Like PhD
// Cross-references Book 26 (Knowledge Craftsman)
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: PAPER ANATOMY ══
doors.push({
  num:1, icon:"📄", color:"#818cf8", name:"পত্রের শারীরস্থান",
  subtitle:"The Paper Anatomy", tech:"IMRaD Structure Deep Dive",
  spirit:"ফিহরিস্ত — মানচিত্র, সূচি",
  secret:"Research paper একটা জীব — প্রতিটা অংশের নির্দিষ্ট কাজ। Title (আইডেন্টিটি), Abstract (টিজিজার), Introduction (কেন), Methods (কীভাবে), Results (কী), Discussion (কী মানে), References (সংযোগ)। প্রতিটা অংশ আলাদা — সঠিক ক্রমে না পড়ে ধরা যায় না।",
  recall:{
    q:"IMRaD-এর প্রতিটা অংশ কী করে?",
    qen:"What does each IMRaD section do?",
    a:"Title (আইডেন্টিটি), Abstract (টিজিজার), Intro (কেন), Methods (কীভাবে), Results (কী পেল), Discussion (কী মানে)। প্রতিটা আলাদা কাজ। সঠিক ক্রমে না পড়লে সময় নষ্ট।",
    aen:"Title (identity), Abstract (teaser), Intro (why), Methods (how), Results (what), Discussion (what it means). Each does different work. Reading in wrong order wastes time."
  },
  story:`<p class="scene-setting">তুমি একটা paper হাতে পেলে। ২৫ পাতা। প্রথম পাতা থেকে পড়তে শুরু করলে — এক ঘণ্টা পর আটকে। কিন্তু কারিগর জাকেরিয়া বললেন — থামো। পত্র একটা জীব — প্রতিটা অংশের নির্দিষ্ট কাজ। তুমি সব অংশ একভাবে পড়ছ তাই আটকে যাচ্ছ। পত্র পড়ার নিয়ম — প্রতিটা অংশ আলাদাভাবে, নির্দিষ্ট উদ্দেশ্য নিয়ে।</p>
<p class="scene-setting en">You get a paper. 25 pages. You start from page one — stuck after an hour. But Craftsman Zakariya said — stop. A paper is a living thing — each part has a specific job. You're reading all parts the same way — that's why you're stuck. The rule — read each part separately, with a specific purpose.</p>

<div class="dialogue">জ্ঞানের কারিগর (Book ২৬) তোমাকে Adler-এর ৪ স্তর শিখিয়েছে। কিন্তু এখন আমি বলি — research paper একটা আলাদা জন্তু। বই নয়। প্রতিটা অংশ আলাদা কাজ করে। তুমি যদি প্রথম থেকে শেষ পর্যন্ত পড়ো — তুমি সব অংশ একভাবে দেখছ, কিন্তু প্রতিটা অংশ আলাদা নিয়মে কাজ করে। এটাই paper-এর শারীরস্থান — IMRaD।</div>
<div class="dialogue en">"The Knowledge Craftsman (Book 26) taught you Adler's 4 levels. But now I say — a research paper is a different beast. Not a book. Each part works differently. If you read start to finish — you're treating all parts the same, but each part follows its own rules. This is the paper's anatomy — IMRaD."</div>

<table class="kv-table"><tr><th>সেকশন</th><th>কাজ / কীভাবে পড়বে</th></tr>
<tr><td class="hl">Title</td><td>পরিচয়পত্র; আগে পড়ো — প্রাসঙ্গিক কিনা ঠিক করো</td></tr>
<tr><td class="hl">Abstract</td><td>পুরো পেপার ১৫০-২৫০ শব্দে; মন দিয়ে পড়ো — পুরো পেপার পড়ার যোগ্য?</td></tr>
<tr><td class="hl">Introduction</td><td>কেন এই গবেষণা; শেষ প্যারা = মূল contribution</td></tr>
<tr><td class="hl">Related Work</td><td>আগে কে কী করেছে; skim করে reading list বানাও</td></tr>
<tr><td class="hl">Methods</td><td>কীভাবে করল; ধীরে পড়ো — validity ও reproduction-এর জায়গা</td></tr>
<tr><td class="hl">Results</td><td>কী পেল; আগে figure দেখো (গল্প বলে), তারপর text</td></tr>
<tr><td class="hl">Discussion</td><td>মানে কী; interpretation, limitation, future work</td></tr>
<tr><td class="hl">Conclusion</td><td>abstract-এর সাথে মেলাও — না মিললে red flag</td></tr>
<tr><td class="hl">References</td><td>জ্ঞানের শৃঙ্খল; চেনা পেপার আছে? citation count = প্রভাব</td></tr></table>
<div class="callout info"><span class="co-icon">🔀</span><div><strong>পড়ার ক্রম উদ্দেশ্যভেদে (শুরু-থেকে-শেষ নয়):</strong> Beginner — Title→Abstract→Intro(skim)→Conclusion→Refs (৫ মিনিট)। Engineer — Abstract→Methods→Results(figures)→code link। Scientist — Abstract→Methods(deep)→Results→Discussion→stats। PhD — Abstract→Related Work→Intro→future work→Methods। Reviewer — Abstract→Conclusion→Methods→Results→Intro(শেষে)।</div></div>
<div class="callout tip"><span class="co-icon">📊</span><div><strong>Figures-first:</strong> বেশিরভাগ পেপারে figure-ই গল্প বলে (Fig 1 overview, Fig 2 "money figure", Fig 3 ablation)। আগে সব figure + caption পড়ো → "এরা কী গল্প বলছে?" → তারপর text। ভালো পেপারের figure text ছাড়াই দাঁড়াতে পারে; না পারলে দুর্বল পেপার।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrRPC1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#a5b4fc"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f1428" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">IMRaD — গবেষণাপত্রের শারীরস্থান</text>
<rect x="20" y="40" width="540" height="28" rx="5" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="290" y="58" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Title + Abstract — পরিচয় ও সারসংক্ষেপ</text>
<line x1="290" y1="70" x2="290" y2="84" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC1)"/>
<rect x="20" y="86" width="540" height="32" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="40" y="100" fill="#fcd34d" font-size="8" font-weight="bold">Introduction</text>
<text x="40" y="112" fill="#94a3b8" font-size="7">কেন? wide&amp;arrow;narrow&amp;arrow;contribution (funnel)</text>
<line x1="290" y1="120" x2="290" y2="134" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC1)"/>
<rect x="20" y="136" width="260" height="32" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="40" y="150" fill="#fcd34d" font-size="8" font-weight="bold">Methods</text>
<text x="40" y="162" fill="#94a3b8" font-size="7">কীভাবে? cookbook — reproduce যায় এমন</text>
<rect x="300" y="136" width="260" height="32" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="320" y="150" fill="#fcd34d" font-size="8" font-weight="bold">Results</text>
<text x="320" y="162" fill="#94a3b8" font-size="7">কী পেল? figure আগে, সংখ্যা পরে</text>
<line x1="150" y1="170" x2="150" y2="184" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC1)"/>
<line x1="430" y1="170" x2="430" y2="184" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrRPC1)"/>
<rect x="20" y="186" width="540" height="32" rx="5" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="40" y="200" fill="#fcd34d" font-size="8" font-weight="bold">Discussion / Conclusion</text>
<text x="40" y="212" fill="#94a3b8" font-size="7">তা মানে কী? interpretation, limitation, future work</text>
<rect x="20" y="226" width="540" height="18" rx="5" fill="#0d1526" stroke="#52c41a" stroke-width="1.5" stroke-dasharray="3,2"/>
<text x="290" y="239" text-anchor="middle" fill="#4ade80" font-size="7">References — জ্ঞানের শৃঙ্খল; প্রতিটা দাবির সংযোগ</text>
</svg>
</div>
<div class="svg-caption">IMRaD কাঠামো — প্রতিটা সেকশনের নির্দিষ্ট কাজ, সঠিক ক্রমে সাজানো</div>

<div class="code-block">Paper Anatomy — IMRaD Section Map:

TITLE (identity)
  - 10-20 words; descriptive; searchable
  - আগে পড়ো — relevant কিনা ঠিক করো

ABSTRACT (teaser, 150-250 words)
  - problem + method + key result + implication
  - মন দিয়ে পড়ো — পুরো পেপার পড়ার যোগ্য?

INTRODUCTION (why)
  - Wide context -&gt; Narrow gap -&gt; Contribution
  - শেষ প্যারা = explicit contribution list

METHODS (how)
  - cookbook: architecture, hyperparameters, data
  - একাই পড়ে reproduce করা যাবে এমন detail

RESULTS (what)
  - figure/table আগে; তারপর সংখ্যা ও মানে
  - baseline + ablation অবশ্যই

DISCUSSION (so what)
  - interpretation + limitation + future work
  - limitation লুকিও না

REFERENCES (chain)
  - প্রতিটা claim-এর সংযোগ; citation count = প্রভাব

READING ORDER (objective-based, NOT start-to-finish):
  Beginner : Title -&gt; Abstract -&gt; Intro(skim) -&gt; Conclusion
  Engineer : Abstract -&gt; Methods -&gt; Results(figures) -&gt; code
  Scientist: Abstract -&gt; Methods(deep) -&gt; Results -&gt; Discussion
  PhD      : Abstract -&gt; Related Work -&gt; Intro -&gt; future work
  Reviewer : Abstract -&gt; Conclusion -&gt; Methods -&gt; Intro(last)

FIGURES-FIRST RULE:
  পুরো পেপারের figure + caption আগে পড়ো
  -&gt; "এরা কী গল্প বলছে?"
  -&gt; ভালো পেপারের figure text ছাড়াই দাঁড়ায়</div>

<div class="dialogue">ফিহরিস্ত — index, catalog, map। কুরআনে আল্লাহ বলেন — "আমি প্রতিটা জিনিস বিস্তারিতভাবে ব্যাখ্যা করেছি।" (১৭:১২)। ব্যাখ্যা = ফিহরিস্ত — প্রতিটা জিনিসের নির্দিষ্ট স্থান। পত্রের শারীরস্থানও ফিহরিস্ত — প্রতিটা অংশের নির্দিষ্ট কাজ। যে ফিহরিস্ত জানে, সে দ্রুত খোঁজে। যে জানে না, সে অন্ধভাবে ঘুরে। ফিহরিস্ত — পত্রের মানচিত্র। মানচিত্র ছাড়া যাত্রা = পথহারা।</div>
<div class="dialogue en">"Fihrist — index, catalog, map. Allah says — 'We have explained everything in detail.' (17:12). Explanation = fihrist — each thing in its specific place. Paper anatomy too is fihrist — each part with its specific job. One who knows the fihrist, searches quickly. One who doesn't, wanders blindly. Fihrist — the paper's map. Journey without a map = lost."</div>`,
  senior:{
    title:"Paper Anatomy — Next Paper You Read",
    body:`<p><strong>Try this reading order instead of start-to-finish:</strong></p><p>১. Title + Abstract (২ min) — Is this relevant?</p><p>২. Look at ALL figures/tables (৩ min) — What story do they tell?</p><p>৩. Read last paragraph of Introduction (১ min) — What's the main contribution?</p><p>৪. Read Conclusion (২ min) — Does it match the abstract?</p><p>৫. Scan References (১ min) — Any papers you recognize?</p><p><strong>Only ৯ minutes.</strong> You now know more about this paper than 90% of people who "read" it start-to-finish and got lost. Now decide: worth deeper reading? If yes, go to Methods.</p>`
  }
});

// ══ DOOR 2: THE ENGINEER'S READ ══
doors.push({
  num:2, icon:"🔧", color:"#a5b4fc", name:"প্রকৌশলীর পাঠ",
  subtitle:"The Engineer's Read", tech:"Extracting Methods, Code, and Applications",
  spirit:"তালাশ — সন্ধান, খোঁজা",
  secret:"Engineer পড়ে শুধু জানার জন্য নয় — ব্যবহার করার জন্য। কোন method আমার প্রজেক্টে কাজে লাগবে? কোথায় কোড? কীভাবে সমাধান প্রয়োগ করব? ইঞ্জিনিয়ারের চোখ = প্রয়োগের চোখ। যে প্রয়োগ দেখে, সে বানায়। যে শুধু পড়ে, সে জানে।",
  recall:{
    q:"ইঞ্জিনিয়ার কীভাবে paper পড়ে?",
    qen:"How does an engineer read papers?",
    a:"প্রয়োগের জন্য। কোন method কাজে লাগবে? কোথায় কোড? কীভাবে প্রয়োগ করব? ইঞ্জিনিয়ারের চোখ = প্রয়োগের চোখ। তালাশ — সন্ধান।",
    aen:"For application. Which method is useful? Where's the code? How to apply? Engineer's eye = application eye. Talash — seeking."
  },
  story:`<p class="scene-setting">তুমি একজন ইঞ্জিনিয়ার। LedgerPilot প্রজেক্টে কাজ করছ। একটা সমস্যা — ডকুমেন্ট প্রসেসিংয়ে OCR ভুল করছে। তুমি Google Scholar-এ সার্চ করলে — "OCR error correction deep learning।" ৫০টা paper। কোনটা পড়বে? কোনটা ব্যবহার করবে? কারিগর আদনান বললেন — ইঞ্জিনিয়ার পড়ে জানার জন্য নয়। ব্যবহার করার জন্য। প্রতিটা paper-এ খোঁজো — কী ব্যবহার করতে পারি?</p>
<p class="scene-setting en">You're an engineer. Working on LedgerPilot. A problem — OCR is making errors in document processing. You search Google Scholar — "OCR error correction deep learning." 50 papers. Which to read? Which to use? Craftsman Adnan said — an engineer reads not to know. To USE. In each paper, search — what can I use?</p>

<div class="dialogue">Paper anatomy বলেছিলেন — প্রতিটা অংশের কাজ। কিন্তু আমি বলি — ইঞ্জিনিয়ার হিসেবে তোমার উদ্দেশ্য আলাদা। তুমি শুধু জানতে চাও না — তুমি ব্যবহার করতে চাও। কোন method আমার সমস্যায় কাজে লাগবে? কোথায় কোড? কোথায় dataset? কীভাবে আমার প্রজেক্টে প্রয়োগ করব? এটাই ইঞ্জিনিয়ারের পাঠ — প্রয়োগের চোখ।</div>
<div class="dialogue en">"Paper anatomy said — each part's job. But I say — as an engineer, your purpose is different. You don't just want to know — you want to USE. Which method applies to my problem? Where's the code? Where's the dataset? How do I apply it to my project? This is the engineer's read — the application eye."</div>

<table class="kv-table"><tr><th>Engineer জিজ্ঞেস করে</th><th>Scientist জিজ্ঞেস করে</th></tr>
<tr><td>এটা কি USE করতে পারি?</td><td>এটা কি VALID?</td></tr>
<tr><td>কত দ্রুত? কোড আছে? license?</td><td>কীভাবে মাপা হলো? কী data?</td></tr>
<tr><td>Deploy করতে পারি? production-ready?</td><td>replicate করা যায়? significant?</td></tr></table>
<div class="callout info"><span class="co-icon">🔧</span><div><strong>Engineer-এর protocol:</strong> ① আগে code/data খোঁজো (GitHub, Papers With Code, Hugging Face; কোড না থাকলে low priority)। ② Methods পড়ো spec-এর মতো (architecture, hyperparameter, GPU, dataset)। ③ Benchmark check — উন্নতি real না marginal? baseline fair? inference speed? ④ প্রযোজ্য হলে <em>তোমার</em> data-তে চালিয়ে reproduce করো। ⑤ core pattern বের করো — কোন অংশ adapt/combine করতে পারি?</div></div>
<div class="callout tip"><span class="co-icon">🐙</span><div><strong>Papers With Code (paperswithcode.com)</strong> = engineer-এর best friend: প্রতিটা পেপার + implementation, task-ভিত্তিক leaderboard, SOTA। Workflow: সমস্যা search → benchmark-এ sort → code/license/recency check → পেপার পড়ে method বোঝা → clone→run→adapt। শিল্প এভাবেই academic research ব্যবহার করে (Google BERT পড়ে→বানায়→deploy করে)।</div></div>
<div class="callout warn"><span class="co-icon">🚫</span><div><strong>কোড না থাকলে:</strong> Papers With Code-এ reproduction খোঁজো · GitHub-এ community implementation · পেপার থেকে নিজে implement (কঠিন কিন্তু মূল্যবান) · লেখককে email (অনেকে privately share করে) · পরের পেপার উন্নত করে কোড ছেড়েছে কিনা দেখো।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect x="0" y="0" width="580" height="250" fill="#0f1428" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">Engineer-এর Extraction Pipeline</text>
<rect x="20" y="40" width="520" height="30" rx="6" fill="#1a2744" stroke="#818cf8" stroke-width="1.5"/>
<text x="280" y="59" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">① Code / Data খোঁজো — GitHub, Papers With Code, Hugging Face</text>
<rect x="20" y="82" width="520" height="30" rx="6" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="280" y="101" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">② Methods = spec — architecture, hyperparameter, GPU, dataset</text>
<rect x="20" y="124" width="520" height="30" rx="6" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="280" y="143" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">③ Benchmark check — real নাকি marginal? baseline fair?</text>
<rect x="20" y="166" width="520" height="30" rx="6" fill="#1a2744" stroke="#3dd6c4" stroke-width="1.5"/>
<text x="280" y="185" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">④ তোমার data-তে reproduce — run করে verify করো</text>
<rect x="20" y="208" width="520" height="30" rx="6" fill="#0d1526" stroke="#52c41a" stroke-width="2"/>
<text x="280" y="227" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">⑤ core pattern — কোন অংশ adapt / combine করবে?</text>
</svg>
</div>
<div class="svg-caption">ইঞ্জিনিয়ারের পাঠপথ — কোড, spec, benchmark, প্রয়োগের চোখ</div>

<div class="code-block">Engineer Paper Note Template:

PAPER: [title, authors, venue, year]
REPO : [github URL]   LICENSE: [MIT/Apache/none]
DATA : [dataset name + size + access]

METHOD (as spec):
  architecture : [e.g., Transformer-XL, 12 layers]
  inputs       : [what goes in]
  outputs      : [what comes out]
  hyperparams  : [lr, batch, epochs, optimizer]
  hardware     : [GPU type, train time]
  key trick    : [the ONE idea that matters]

BENCHMARKS:
  metric        | this paper | prior SOTA | delta
  --------------|------------|------------|------
  accuracy      | 94.2       | 92.1       | +2.1
  latency (ms)  | 12         | 18         | -33%

APPLICABILITY TO MY PROJECT:
  - problem match? [yes/no/partial]
  - data match? [same domain? size?]
  - blockers? [license, compute, deps]

DECISION:
  [ ] USE — clone &amp; adapt
  [ ] PARTIAL — borrow idea X only
  [ ] SKIP — weak / not relevant

2-SENTENCE APPLICATION TEST:
  "This paper&apos;s [method] applies to my [project]
   by [specific change], giving me [expected benefit]."</div>

<div class="dialogue">তালাশ — search, seeking। কুরআনে আল্লাহ বলেন — "যারা আমার সন্ধানে চলে, আমি তাদের পথ দেখাই।" ইঞ্জিনিয়ারের পাঠও তালাশ — সমাধানের সন্ধান। কোন method, কোন code, কোন approach আমার সমস্যা সমাধান করবে? যে তালাশ করে, সে খোঁজে। যে অপেক্ষা করে, সে পায় না। ইঞ্জিনিয়ার = সমাধানের তালাশকারী।</div>
<div class="dialogue en">"Talash — search, seeking. Allah says — 'Those who seek Me, I guide them.' The engineer's read too is talash — seeking a solution. Which method, which code, which approach solves my problem? One who seeks, finds. One who waits, gets nothing. Engineer = solution seeker."</div>`,
  senior:{
    title:"Engineer's Paper Reading — This Week",
    body:`<p><strong>Find a paper relevant to your current project (LedgerPilot/Ipractus).</strong> Search Google Scholar or Papers With Code for a problem you're facing.</p><p><strong>Use the Engineer's Protocol:</strong></p><p>১. Check for code/GitHub link FIRST</p><p>২. Read Methods like a spec — architecture, hyperparameters, data</p><p>৩. Check benchmarks — is the improvement real?</p><p>৪. If code exists: clone, run on YOUR data</p><p>৫. Fill out the Engineer's Paper Note template</p><p><strong>The test:</strong> Can you explain in 2 sentences how to apply this paper's method to YOUR project? If yes — you read like an engineer. If no — go back to Methods.</p>`
  }
});

// ══ DOOR 3: THE SCIENTIST'S EYE ══
doors.push({
  num:3, icon:"🧪", color:"#818cf8", name:"বৈজ্ঞানিকের চোখ",
  subtitle:"The Scientist's Eye", tech:"Methodology, Statistics, Validity",
  spirit:"তাহকিক — যাচাইকৃত সত্য",
  secret:"বৈজ্ঞানিক পড়ে বিশ্বাস করার জন্য নয় — যাচাই করার জন্য। sample size? methodology? statistics? p-hacking? replication? জ্ঞানের কারিগর (Book ২৬) তোমাকে replication crisis শিখিয়েছে। এখন দেখো — কীভাবে প্রতিটা paper-এর প্রতিটা claim যাচাই করবে। তাহকিক — যাচাই তারপর বিশ্বাস।",
  recall:{
    q:"বৈজ্ঞানিক কীভাবে paper যাচাই করে?",
    qen:"How does a scientist verify a paper?",
    a:"বিশ্বাসের জন্য নয়, যাচাই করার জন্য। sample size, methodology, statistics, p-hacking, replication। প্রতিটা claim যাচাই। তাহকিক — যাচাই তারপর বিশ্বাস।",
    aen:"Not to believe, but to verify. Sample, method, stats, p-hacking, replication. Verify each claim. Tahqiq — verify then believe."
  },
  story:`<p class="scene-setting">ইঞ্জিনিয়ার বলেছিলেন — ব্যবহার করো। কিন্তু কারিগর খাদিজা বললেন — ব্যবহার করার আগে যাচাই করো। কারণ মনে রাখো — replication crisis। ৬০% paper সম্ভবত ভুল। তুমি যদি এমন একটা method ব্যবহার করো যা ভুল — তোমার প্রজেক্ট ভেঙে যাবে। তাই প্রথমে যাচাই। sample? method? statistics? বৈজ্ঞানিক পড়ে বিশ্বাসের জন্য নয় — যাচাইয়ের জন্য।</p>
<p class="scene-setting en">The engineer said — use it. But Craftswoman Khadija said — before using, verify. Because remember — the replication crisis. 60% of papers are probably wrong. If you use a method that's wrong — your project breaks. So verify first. Sample? Method? Statistics? A scientist reads not to believe — but to verify.</p>

<div class="dialogue">ইঞ্জিনিয়ারের পাঠ বলেছিলেন — প্রয়োগের চোখ। কিন্তু আমি বলি — প্রয়োগের আগে যাচাই। জ্ঞানের কারিগর (Book ২৬, Door ৭) তোমাকে replication crisis শিখিয়েছে। এখন আমি শেখাবো — কীভাবে প্রতিটা paper-ের প্রতিটা claim যাচাই করবে। বৈজ্ঞানিকের চোখ = যাচাইয়ের চোখ। তাহকিক — যাচাই করে তারপর গ্রহণ।</div>
<div class="dialogue en">"The engineer's read said — the application eye. But I say — before application, verification. The Knowledge Craftsman (Book 26, Door 7) taught you the replication crisis. Now I'll teach — how to verify each claim in each paper. The scientist's eye = the verification eye. Tahqiq — verify then accept."</div>

<table class="kv-table"><tr><th>Sample size</th><th>ব্যাখ্যা</th></tr>
<tr><td class="hl">n &lt; ১০</td><td>anecdote, science নয়</td></tr>
<tr><td class="hl">n ৩০-১০০</td><td>ছোট study</td></tr>
<tr><td class="hl">n ১০০-১০০০</td><td>যুক্তিসঙ্গত</td></tr>
<tr><td class="hl">n &gt; ১০,০০০</td><td>খুব শক্তিশালী</td></tr></table>
<div class="callout info"><span class="co-icon">🔬</span><div><strong>৭-পয়েন্ট verification:</strong> ① Sample size (ML: dataset কত বড়, কয়টা benchmark)। ② Methodology (RCT gold; ML: proper train/test split, test-set leakage নেই, test-set-এ tuning = cheating)। ③ Statistics (p&lt;০.০৫ কিন্তু effect size? variance? কয় বার run?)। ④ Baselines (SOTA-র সাথে তুলনা নাকি দুর্বল পুরোনো method?)। ⑤ Reproducibility (code/data/seed?)। ⑥ Limitations (সততার সাথে স্বীকার?)। ⑦ Funding/conflict।</div></div>
<div class="callout warn"><span class="co-icon">🚩</span><div><strong>RED FLAG:</strong> "p&lt;০.০৫" কিন্তু effect size নেই — বড় n-এ ০.১% উন্নতিও "significant" হতে পারে, কিন্তু অর্থহীন। "৯৯% accuracy" → কোন data-তে? "outperforms baselines" → কোন baseline, fair তুলনা? "Code coming soon" = সাধারণত আসে না।</div></div>
<table class="kv-table"><tr><th>দাবি</th><th>কী check করবে</th></tr>
<tr><td class="hl">"X% accuracy"</td><td>কোন data? কোন split?</td></tr>
<tr><td class="hl">"significant improvement"</td><td>effect size? variance? কয় run?</td></tr>
<tr><td class="hl">"state of the art"</td><td>কীসের সাথে তুলনা? কবে?</td></tr>
<tr><td class="hl">"real-time"</td><td>কোন hardware-এ?</td></tr></table>
<div class="callout tip"><span class="co-icon">⭐</span><div><strong>Trust level (১-৫):</strong> ৫ = সম্পূর্ণ বিশ্বাস, cite করব · ৪ = মোটামুটি, ছোট উদ্বেগ · ৩ = mixed, সতর্কতায় ব্যবহার · ২ = গুরুতর উদ্বেগ · ১ = বিশ্বাস কোরো না। শুধু ৪+ পেপারের method <em>ব্যবহার</em> করো — তোমার প্রজেক্ট যে গবেষণার উপর দাঁড়ায় তার মানের উপর নির্ভরশীল।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect x="0" y="0" width="580" height="250" fill="#0f1428" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">বৈজ্ঞানিকের যাচাই — ৭ পয়েন্ট</text>
<rect x="20" y="40" width="170" height="68" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="105" y="58" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">① Sample size</text>
<text x="105" y="74" text-anchor="middle" fill="#94a3b8" font-size="7">n&amp;lt;10 anecdote</text>
<text x="105" y="86" text-anchor="middle" fill="#94a3b8" font-size="7">n 100-1000 ok</text>
<text x="105" y="98" text-anchor="middle" fill="#94a3b8" font-size="7">n&amp;gt;10000 strong</text>
<rect x="205" y="40" width="170" height="68" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="290" y="58" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">② Methodology</text>
<text x="290" y="74" text-anchor="middle" fill="#94a3b8" font-size="7">RCT gold standard</text>
<text x="290" y="86" text-anchor="middle" fill="#94a3b8" font-size="7">train/test split ok?</text>
<text x="290" y="98" text-anchor="middle" fill="#94a3b8" font-size="7">test leakage = cheat</text>
<rect x="390" y="40" width="170" height="68" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="475" y="58" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">③ Statistics</text>
<text x="475" y="74" text-anchor="middle" fill="#94a3b8" font-size="7">p&amp;lt;0.05?</text>
<text x="475" y="86" text-anchor="middle" fill="#94a3b8" font-size="7">effect size? variance?</text>
<text x="475" y="98" text-anchor="middle" fill="#94a3b8" font-size="7">how many runs?</text>
<rect x="20" y="120" width="170" height="68" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="105" y="138" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">④ Baselines</text>
<text x="105" y="154" text-anchor="middle" fill="#94a3b8" font-size="7">SOTA সাথে তুলনা?</text>
<text x="105" y="166" text-anchor="middle" fill="#94a3b8" font-size="7">নাকি দুর্বল পুরোনো?</text>
<text x="105" y="178" text-anchor="middle" fill="#94a3b8" font-size="7">fair comparison?</text>
<rect x="205" y="120" width="170" height="68" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="290" y="138" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">⑤ Reproducibility</text>
<text x="290" y="154" text-anchor="middle" fill="#94a3b8" font-size="7">code/data/seed?</text>
<text x="290" y="166" text-anchor="middle" fill="#94a3b8" font-size="7">দেওয়া আছে?</text>
<text x="290" y="178" text-anchor="middle" fill="#94a3b8" font-size="7">reproduce করা যায়?</text>
<rect x="390" y="120" width="170" height="68" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="475" y="138" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">⑥ Limitations</text>
<text x="475" y="154" text-anchor="middle" fill="#94a3b8" font-size="7">সততার সাথে</text>
<text x="475" y="166" text-anchor="middle" fill="#94a3b8" font-size="7">স্বীকার করে?</text>
<text x="475" y="178" text-anchor="middle" fill="#94a3b8" font-size="7">future work?</text>
<rect x="20" y="200" width="540" height="38" rx="6" fill="#0d1526" stroke="#f06292" stroke-width="2"/>
<text x="290" y="216" text-anchor="middle" fill="#f06292" font-size="9" font-weight="bold">⑦ Funding / Conflict of interest</text>
<text x="290" y="230" text-anchor="middle" fill="#94a3b8" font-size="7">স্বাধীন? কোম্পানির টাকা? personal stake?</text>
</svg>
</div>
<div class="svg-caption">তাহকিক — প্রতিটা দাবি সাত মাপকাঠিতে যাচাই</div>

<div class="code-block">Scientist Verification Checklist (Trust 1-5):

PAPER: [title]                  TRUST: [ ] 1  [ ] 2  [ ] 3  [ ] 4  [ ] 5

[ ] SAMPLE SIZE adequate?
    - n = ___ (statistical power?)
    - dataset size / benchmark count (ML)

[ ] METHODOLOGY sound?
    - RCT / cohort / observational / ML benchmark
    - proper train/test split, NO test-set leakage
    - no tuning on test set (= cheating)

[ ] STATISTICS reported honestly?
    - p-value AND effect size AND variance
    - multiple seeds? mean +/- std?
    - big-n can make 0.1% "significant" - meaningless

[ ] BASELINES fair?
    - compared to current SOTA or weak old method?
    - same data, same hardware, same metric?

[ ] REPRODUCIBLE?
    - code + data + seeds available?
    - run on YOUR hardware gives same number?

[ ] LIMITATIONS honest?
    - do they admit what doesn&apos;t work?
    - scope clearly bounded?

[ ] FUNDING independent?
    - company funding the paper about its product?

RED FLAGS:
  "p&lt;0.05" but no effect size
  "99% accuracy" without specifying data/split
  "outperforms baselines" without naming them
  "real-time" without hardware
  "Code coming soon" = usually never

DECISION: only USE methods rated 4 or 5.
  3 or below -&gt; proceed with caution or find better paper.</div>

<div class="dialogue">তাহকিক — verified truth through investigation। কুরআনে আল্লাহ বলেন — "তোমরা যাচাই না করে প্রতিটা খবর বিশ্বাস করো না।" (৪৯:৬)। তাহকিক = যাচাই করে গ্রহণ। বৈজ্ঞানিকের চোখও তাহকিক — প্রতিটা claim যাচাই। sample? method? statistics? replication? যে তাহকিক করে, সে সত্য পায়। যে বিশ্বাস করে, সে প্রতারিত হয়। replication crisis আমাদের শেখায় — published মানে true নয়। তাহকিক করো।</div>
<div class="dialogue en">"Tahqiq — verified truth through investigation. Allah says — 'Do not accept any news without verification.' (49:6). Tahqiq = verify then accept. The scientist's eye too is tahqiq — verify each claim. Sample? Method? Statistics? Replication? One who does tahqiq, finds truth. One who believes blindly, is deceived. The replication crisis teaches — published does not mean true. Verify."</div>`,
  senior:{
    title:"Scientist's Verification — Every Paper",
    body:`<p><strong>For EVERY paper you plan to USE (not just read):</strong></p><p>☐ n=? (sample size adequate?)</p><p>☐ Methodology: proper train/test split? No leakage?</p><p>☐ Baselines: fair comparison with current SOTA?</p><p>☐ Statistics: effect size + variance reported?</p><p>☐ Reproducible: code/data available?</p><p>☐ Limitations: honestly discussed?</p><p>☐ Funding: independent?</p><p><strong>Assign a Trust Level (1-5).</strong> Only USE methods from papers you'd rate 4+. If 3 or below — proceed with caution or find a better paper. Your project depends on the quality of the research you build on.</p>`
  }
});

// ══ DOOR 4: THE PhD READER ══
doors.push({
  num:4, icon:"🎓", color:"#a5b4fc", name:"পিএইচডি পাঠক",
  subtitle:"The PhD Reader", tech:"Gap Finding, Literature Review, Position in Field",
  spirit:"সাফর — যাত্রা, পথচলা",
  secret:"PhD ছাত্র পড়ে শুধু জানার জন্য নয় — gap খোঁজার জন্য। কোথায় এই paper ফিল্ডে দাঁড়িয়ে? কী missing? কোন দিক খোলা? Andrew Ng বলেন — ৫-২০ paper পড়লে একটা subfield-এ current হওয়া যায়। সাফর — জ্ঞানের যাত্রায় নিজের স্থান খোঁজা।",
  recall:{
    q:"PhD ছাত্র কী খোঁজে?",
    qen:"What does a PhD student look for?",
    a:"Gap। কোথায় এই paper ফিল্ডে দাঁড়িয়ে? কী missing? কোন দিক খোলা? Andrew Ng — ৫-২০ paper পড়লে current হওয়া যায়। সাফর — যাত্রায় নিজের স্থান খোঁজা।",
    aen:"Gap. Where does this paper stand in the field? What's missing? What direction is open? Andrew Ng — 5-20 papers makes you current. Safar — finding your place in the journey."
  },
  story:`<p class="scene-setting">ইঞ্জিনিয়ার বলেছিলেন — ব্যবহার করো। বৈজ্ঞানিক বলেছিলেন — যাচাই করো। কিন্তু কারিগর তালহা — একজন PhD গবেষক — বললেন, আরও একটা দৃষ্টিভঙ্গি আছে। PhD ছাত্র পড়ে gap খোঁজার জন্য। কোথায় এই paper পুরো ফিল্ডে দাঁড়িয়ে? এর আগে কী হয়েছে? পরে কী হতে পারে? কী missing? এই দৃষ্টিভঙ্গি শুধু জানার নয় — সৃষ্টি করার। কারণ gap-ই গবেষণার জন্ম দেয়।</p>
<p class="scene-setting en">The engineer said — use it. The scientist said — verify it. But Craftsman Talha — a PhD researcher — said, there's another perspective. A PhD student reads to find gaps. Where does this paper stand in the whole field? What came before? What could come after? What's missing? This perspective isn't about knowing — it's about creating. Because gaps birth research.</p>

<div class="dialogue">বৈজ্ঞানিকের চোখ বলেছিলেন — যাচাই করো। কিন্তু আমি বলি — যাচাই করা শুরু। এর পরে আসে gap। প্রতিটা paper একটা পথের অংশ — কিন্তু পথ শেষ নয়। প্রতিটা paper-এর পরে নতুন প্রশ্ন জন্ম যায়। PhD ছাত্র সেই প্রশ্ন খোঁজে। Andrew Ng বলেন — ৫-২০ paper পড়লে একটা subfield-এ current হওয়া যায়। তুমি দেখো — পুরো landscape, কোথায় গ্যাপ, কোথায় তোমার contribution।</div>
<div class="dialogue en">"The scientist's eye said — verify. But I say — verification is the beginning. After that comes the gap. Each paper is part of a path — but the path isn't finished. Each paper births new questions. A PhD student seeks those questions. Andrew Ng says — read 5-20 papers to become current in a subfield. You see — the whole landscape, where the gaps are, where YOUR contribution fits."</div>

<div class="callout info"><span class="co-icon">🎓</span><div><strong>Andrew Ng (Stanford):</strong> "একটা নির্দিষ্ট area-তে ৫-২০ পেপার পড়লে ভালো বোঝা, ৫০-১০০ পড়লে খুব গভীর বোঝা।" তার ক্রম: Title+Abstract+Figures (৬০ সেকেন্ড) → Intro+Conclusion (৫ মিনিট) → Methods (প্রথমে proof বাদ) → References (পরে কী পড়ব)।</div></div>
<div class="timeline">
<div class="tl-step"><div class="tl-when">Step ১</div><div class="tl-title">📖 Survey দিয়ে শুরু</div><div class="tl-body">"[topic] survey/review" — পুরো field-এর ম্যাপ; আগে পড়লে landscape হাতে আসে।</div></div>
<div class="tl-step"><div class="tl-when">Step ২</div><div class="tl-title">🔗 Citation tracing</div><div class="tl-body">Backward (survey-এর references = foundational) + Forward (Scholar "Cited by" = সাম্প্রতিক)।</div></div>
<div class="tl-step"><div class="tl-when">Step ৩</div><div class="tl-title">🧩 Cluster চেনো</div><div class="tl-body">পেপার approach-অনুযায়ী দল বাঁধে (transformer-based / CNN-based / hybrid) — প্রতিটা cluster = এক approach।</div></div>
<div class="tl-step"><div class="tl-when">Step ৪</div><div class="tl-title">🎯 Edge খোঁজো</div><div class="tl-body">প্রতিটা cluster কী সমাধান করেনি? সাধারণ limitation কী? ৩+ পেপার "future work"-এ একই জিনিস বললে = আসল gap।</div></div>
</div>
<div class="callout tip"><span class="co-icon">💡</span><div><strong>Gap-finding প্রশ্ন:</strong> কেউ কী address করে না? সবাই কী <em>ধরে নেয় কিন্তু যাচাই করে না</em>? কোন trade-off কেউ explore করেনি? সবাই যে "future work" বলে? তোমার domain-এ কী কাজ করবে? (English→Bengali, image→document = বৈধ contribution)।</div></div>
<div class="callout info"><span class="co-icon">📝</span><div><strong>Literature review = তালিকা নয়, narrative:</strong> "প্রথম দিকের approach [A]-তে focus করত, কিন্তু [সমস্যা]-য় সীমিত। B [method] দিয়ে সমাধান করল, [ফল] পেল, তবু [limitation] থাকল। এটা [তোমার contribution]-এর সুযোগ দেখায়।" Approach-অনুযায়ী সাজাও, evolution দেখাও, consensus ও debate চিহ্নিত করো, gap দিয়ে শেষ করো।</div></div>
<table class="kv-table"><tr><th>AI paper tool (2024-26)</th><th>কাজ</th></tr>
<tr><td class="hl">Elicit</td><td>LLM literature review, পেপার জুড়ে Q&amp;A, extraction</td></tr>
<tr><td class="hl">Consensus</td><td>200M+ পেপারে search, প্রশ্নের পক্ষে/বিপক্ষে claim</td></tr>
<tr><td class="hl">NotebookLM</td><td>multi-PDF synthesis, source-grounded Q&amp;A</td></tr>
<tr><td class="hl">scite.ai</td><td>citation context — supporting/contradicting/mentioning</td></tr></table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Hybrid workflow:</strong> AI করে first-pass summary, claim extraction, related/contradicting work খোঁজা (Keshav Pass ১ ৫ সেকেন্ডে)। <em>তুমি করো</em> verification, deep reading (Pass ২-৩), credibility বিচার, hallucination ধরা। সবসময় source PDF যাচাই করো — AI ভুল বা অস্তিত্বহীন citation বানাতে পারে। এটাই Door 3-এর scientist's eye-এর আধুনিক রূপ।</div></div>

<div class="dialogue">সাফর — journey, travel, passage। কুরআনে আল্লাহ বলেন — "তোমরা পৃথিবীতে ভ্রমণ করো এবং দেখো।" (৩০:৪২)। সাফর = জ্ঞানের যাত্রা। PhD ছাত্রের পাঠও সাফর — একটা paper থেকে আরেকটায়, একটা ধারণা থেকে আরেকটায়। যাত্রার শেষে সে দেখে — পুরো landscape। কোথায় পথ গেছে, কোথায় থেমেছে, কোথায় নতুন পথ তৈরি করা যায়। সাফর — জ্ঞানের যাত্রায় নিজের স্থান খোঁজা।</div>
<div class="dialogue en">"Safar — journey, travel, passage. Allah says — 'Travel through the earth and observe.' (30:42). Safar = journey of knowledge. The PhD reader's read too is safar — from one paper to another, one idea to another. At journey's end they see — the whole landscape. Where the path went, where it stopped, where a new path can be made. Safar — finding your place in the journey of knowledge."</div>`,
  senior:{
    title:"Enter a Subfield — The 5-20 Paper Method",
    body:`<p><strong>Pick a subfield relevant to your work</strong> (e.g., "RAG evaluation methods" or "OCR for low-resource languages" or "Vue+Django authentication").</p><p><strong>Step ১:</strong> Google Scholar search "[topic] survey 2023/2024". Read the survey.</p><p><strong>Step ২:</strong> From the survey, identify the 5 most-cited papers. Read them (Keshav Pass 1+2).</p><p><strong>Step ৩:</strong> From their references (backward) and "Cited by" (forward), find 5-10 more.</p><p><strong>Step ৪:</strong> Now you have ~15 papers read. Write a 1-page summary:</p><p>- What's the problem?</p><p>- What approaches exist?</p><p>- What's the consensus?</p><p>- What's debated?</p><p>- <strong>WHAT'S THE GAP?</strong> (your potential contribution)</p><p><strong>You're now more current in this subfield than 95% of practitioners.</strong></p>`
  }
});

// ══ DOOR 5: FINDING YOUR RESEARCH QUESTION ══
doors.push({
  num:5, icon:"💡", color:"#818cf8", name:"গবেষণার প্রশ্ন",
  subtitle:"The Idea Generator", tech:"From Papers to Research Problem",
  spirit:"নিয়্যাত — উদ্দেশ্য, নিয়ত",
  secret:"গবেষণার সবচেয়ে কঠিন অংশ — উত্তর নয়, প্রশ্ন। ভালো প্রশ্ন = ভালো গবেষণা। খারাপ প্রশ্ন = সময় নষ্ট। gap থেকে প্রশ্ন জন্ম যায়। প্রশ্ন থেকে গবেষণা। নিয়্যাত — উদ্দেশ্য। যে সঠিক প্রশ্ন করে, সে সঠিক দিকে যায়।",
  recall:{
    q:"ভালো গবেষণার প্রশ্ন কোথা থেকে আসে?",
    qen:"Where do good research questions come from?",
    a:"gap থেকে। ভালো প্রশ্ন = ভালো গবেষণা। gap খোঁজো, প্রশ্ন ছাঁচো, উত্তর খোঁজো। নিয়্যাত — উদ্দেশ্য। সঠিক প্রশ্ন = সঠিক দিক।",
    aen:"From gaps. Good question = good research. Find gap, form question, seek answer. Niyyah — intention. Right question = right direction."
  },
  story:`<p class="scene-setting">PhD পাঠক বলেছিলেন — gap খোঁজো। কিন্তু কারিগর ফারহান বললেন — gap খুঁজে পাওয়া শুরু। এখন — সেই gap থেকে প্রশ্ন ছাঁচো। ভালো প্রশ্ন। কারণ গবেষণা = প্রশ্নের উত্তর খোঁজা। কিন্তু ভুল প্রশ্ন = ভুল গবেষণা। সঠিক প্রশ্ন = সঠিক গবেষণা। এটাই সবচেয়ে কঠিন — উত্তর খোঁজা নয়, প্রশ্ন করা।</p>
<p class="scene-setting en">The PhD reader said — find gaps. But Craftsman Farhan said — finding the gap is the beginning. Now — from that gap, form a question. A good question. Because research = seeking answers to questions. But wrong question = wrong research. Right question = right research. This is the hardest part — not finding answers, but asking questions.</p>

<div class="dialogue">PhD পাঠক বলেছিলেন — gap খোঁজো। কিন্তু আমি বলি — gap খুঁজে পাওয়া সাফরের মাঝপথ। বাকি অর্ধেক — gap থেকে প্রশ্ন ছাঁচো। ভালো প্রশ্ন। কারণ গবেষণা = প্রশ্নের উত্তর। ভুল প্রশ্ন = ভুল দিকে ৬ মাস। সঠিক প্রশ্ন = সঠিক দিকে ৬ মাস। পার্থক্য = সময়, শক্তি, মূল্য। নিয়্যাত — উদ্দেশ্য। যে সঠিক উদ্দেশ্য নিয়ে প্রশ্ন করে, সে সঠিক উত্তর পায়।</div>
<div class="dialogue en">"The PhD reader said — find gaps. But I say — finding the gap is halfway. The other half — form a question from the gap. A good question. Because research = answering questions. Wrong question = 6 months in wrong direction. Right question = 6 months in right direction. The difference = time, energy, value. Niyyah — intention. One who asks with right intention, gets right answers."</div>`,
  senior:{
    title:"Find Your Research Question — Exercise",
    body:`<p><strong>From your literature map (Door 4), identify ৩ gaps.</strong> For each, write:</p><p>১. The gap (what's missing?)</p><p>২. The question (how to fill it?)</p><p>৩. The FINER test: Is it Feasible? Interesting? Novel? Ethical? Relevant?</p><p><strong>Rank your ৩ questions.</strong> Pick the best one. This is your research question.</p><p><strong>Now you have what every great paper starts with:</strong> a question nobody has answered, that you can answer, that matters. The paper is just the documentation of finding the answer.</p>`
  }
});
