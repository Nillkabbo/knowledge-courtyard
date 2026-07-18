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

<div class="code-block">PAPER ANATOMY — The IMRaD Structure:

THE PARTS OF A RESEARCH PAPER (in order of reading):

  ┌──────────────────┬──────────────────────────────────┐
  │ Section           │ What It Does / How to Read It    │
  ├──────────────────┼──────────────────────────────────┤
  │ ১. TITLE          │ Identity card. ১০-২০ words.      │
  │                   │ Should tell: what + how + domain│
  │                   │ Read FIRST. Decide if relevant. │
  │                   │ Keyword scan: is this my field? │
  ├──────────────────┼──────────────────────────────────┤
  │ ২. AUTHORS        │ Who did this? Track record?      │
  │                   │ Google Scholar their other work.│
  │                   │ Important: same author = same    │
  │                   │ research thread                  │
  ├──────────────────┼──────────────────────────────────┤
  │ ৩. ABSTRACT       │ The ENTIRE paper in ১৫০-২৫০     │
  │                   │ words. READ THIS CAREFULLY.      │
  │                   │ Should contain: problem, method,│
  │                   │ result, conclusion.              │
  │                   │ Decision: is the full paper      │
  │                   │ worth your time?                 │
  ├──────────────────┼──────────────────────────────────┤
  │ ৪. INTRODUCTION   │ WHY this research exists.        │
  │                   │ What gap in knowledge?           │
  │                   │ What prior work exists?          │
  │                   │ What's NEW about this paper?     │
  │                   │ Read: last paragraph = main      │
  │                   │ contribution (usually)           │
  ├──────────────────┼──────────────────────────────────┤
  │ ৫. RELATED WORK   │ WHO did what before.             │
  │                   │ Map of the field.                │
  │                   │ Skim → identify key papers       │
  │                   │ for your reading list            │
  ├──────────────────┼──────────────────────────────────┤
  │ ৬. METHODS        │ HOW they did it.                 │
  │                   │ Dataset, model, experiment       │
  │                   │ design, parameters.              │
  │                   │ This is where you judge validity│
  │                   │ Read SLOWLY. The most important  │
  │                   │ section for reproduction.        │
  ├──────────────────┼──────────────────────────────────┤
  │ ৭. RESULTS        │ WHAT they found.                 │
  │                   │ Tables, figures, graphs.         │
  │                   │ LOOK at figures FIRST (they tell│
  │                   │ the story).                      │
  │                   │ Then read the text for context.  │
  ├──────────────────┼──────────────────────────────────┤
  │ ৮. DISCUSSION     │ WHAT IT MEANS.                   │
  │                   │ Interpretation, implications,    │
  │                   │ limitations, future work.        │
  │                   │ Often the most opinionated part. │
  │                   │ Authors explain WHY results      │
  │                   │ matter.                          │
  ├──────────────────┼──────────────────────────────────┤
  │ ৯. CONCLUSION     │ Summary of contribution.         │
  │                   │ Read alongside abstract.         │
  │                   │ If they match → paper is honest. │
  │                   │ If they differ → red flag.       │
  ├──────────────────┼──────────────────────────────────┤
  │ ১০. REFERENCES    │ The knowledge chain.             │
  │                   │ Skim: do they cite papers you   │
  │                   │ know? Papers you should read?   │
  │                   │ Citation count = influence.      │
  └──────────────────┴──────────────────────────────────┘

THE READING ORDER (NOT start-to-finish!):

  Beginner reading order (Keshav Pass ১, ৫ min):
    Title → Abstract → Introduction (skim) → 
    Conclusion → References (scan)
  
  Engineer reading order (extract methods):
    Abstract → Methods → Results (figures) → 
    Conclusion → check for GitHub/code link
  
  Scientist reading order (judge validity):
    Abstract → Methods (deep) → Results → 
    Discussion → check stats → check limitations
  
  PhD reading order (find gap):
    Abstract → Related Work → Introduction → 
    Discussion (future work) → Methods → Results
  
  Reviewer reading order (judge paper):
    Abstract → Conclusion → Methods → Results →
    Introduction (last — is the motivation valid?)

THE FIGURES-FIRST STRATEGY:
  
  In most papers, FIGURES tell the story:
    → Figure ১: overview/architecture
    → Table ১: dataset statistics
    → Figure ২: main results (the "money figure")
    → Table ২: comparison with prior work
    → Figure ৩: ablation study (what each component does)
  
  Strategy:
    ১. Look at ALL figures/tables FIRST
    ২. Read their captions CAREFULLY
    ৩. Ask: "What story do these tell?"
    ৪. THEN read the text for details
  
  → This is what experienced researchers do
  → A good paper's figures should stand alone
  → If figures make no sense without text → poor paper</div>

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

<div class="code-block">THE ENGINEER'S READ — Reading for Application:

THE ENGINEER'S QUESTIONS (different from scientist):

  ┌────────────────────┬──────────────────────────────┐
  │ Engineer Asks       │ Scientist Asks                │
  ├────────────────────┼──────────────────────────────┤
  │ Can I USE this?     │ Is this VALID?                │
  │ How FAST is it?     │ How was it measured?          │
  │ What CODE exists?   │ What DATA was used?           │
  │ What LICENSE?       │ What are limitations?         │
  │ Can I DEPLOY this?  │ Can this be replicated?       │
  │ Production-ready?   │ Statistically significant?    │
  └────────────────────┴──────────────────────────────┘

THE ENGINEER'S READING PROTOCOL:

  Step ১: SCAN FOR CODE/DATA (first ২ min)
    → check paper for GitHub link
    → check Papers With Code (paperswithcode.com)
    → check Hugging Face for models
    → if NO code → lower priority (hard to reproduce)
  
  Step ২: READ METHODS LIKE A SPEC (১০ min)
    → Treat Methods section like technical documentation
    → Architecture: what layers? what components?
    → Hyperparameters: learning rate, batch size, epochs
    → Infrastructure: what GPU? how long to train?
    → Datasets: what data? can I get it?
  
  Step ৩: CHECK BENCHMARKS (৫ min)
    → Table comparing with other methods
    → Is the improvement significant or marginal?
    → Is the baseline fair? (comparing with old methods?)
    → Speed/accuracy tradeoff: how fast at inference?
  
  Step ৪: REPRODUCE IF APPLICABLE (১-৪ hours)
    → clone the repo
    → run on YOUR data (not just their data)
    → does it work outside the paper's setup?
    → document: what broke? what needed adjusting?
  
  Step ৫: EXTRACT THE PATTERN (ongoing)
    → what's the core idea I can adapt?
    → can I use PART of their method?
    → can I combine with something else?
    → what would work BETTER for my case?

PAPERS WITH CODE (paperswithcode.com):

  This is an engineer's best friend:
    → every paper + its implementation
    → benchmarks (leaderboards) for every task
    → "State of the Art" (SOTA) for each metric
  
  Engineer's workflow:
    ১. Go to Papers With Code → search your problem
    ২. Sort by benchmark performance
    ৩. Check: code available? license? recent?
    ৪. Read paper to understand method
    ৫. Clone code → run → adapt
  
  Example: "Document OCR correction"
    → Search → find ১৫ papers with code
    → Sort by accuracy on benchmark
    → Top ৩: read papers + check repos
    → Clone best one → run on LedgerPilot data
    → Adapt architecture for your use case

ENGINEER'S PAPER NOTE TEMPLATE:

  ┌──────────────────────────────────────┐
  │ PAPER: [title]                       │
  │ AUTHORS: [names]                     │
  │ DATE: [year]                         │
  ├──────────────────────────────────────┤
  │ PROBLEM: [what problem solves?]      │
  │ METHOD: [core approach, ২ sentences] │
  │ CODE: [GitHub link? License?]        │
  │ DATA: [dataset? available?]          │
  │ RESULTS: [key numbers]               │
  │ SPEED: [inference time?]             │
  ├──────────────────────────────────────┤
  │ CAN I USE THIS? [yes/no/maybe]       │
  │ HOW: [specific application plan]     │
  │ BLOCKERS: [what's missing?]          │
  │ NEXT STEP: [clone? adapt? combine?]  │
  └──────────────────────────────────────┘

THE ENGINEER'S PAPER PIPELINE (to project):

  Research Paper → Methods section → 
  Code repository → Run on test data →
  Evaluate on YOUR data → Adapt architecture →
  Integrate into project → Monitor in production
  
  This is how INDUSTRY uses academic research:
    → Google: reads BERT paper → builds BERT → deploys
    → Meta: reads papers → builds PyTorch → deploys
    → You: read OCR paper → adapt → LedgerPilot

WHEN PAPERS DON'T HAVE CODE:
  
  → Many papers DON'T release code
  → this is a red flag (reproducibility issue)
  → but sometimes you still want the method
  
  Options:
    ১. Search Papers With Code for a reproduction
    ২. Search GitHub for community implementations
    ৩. Implement from paper (hard but valuable)
    ৪. Contact authors (many will share code privately)
    ৫. Check if later papers improved and released code</div>

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

<div class="code-block">THE SCIENTIST'S EYE — Deep Verification:

THE ৭-POINT VERIFICATION CHECKLIST:

১. SAMPLE SIZE (n=?)
  
  ┌──────────────────┬────────────────────────────┐
  │ Sample Size       │ Interpretation              │
  ├──────────────────┼────────────────────────────┤
  │ n < ১০            │ anecdote, NOT science        │
  │ n ১০-৩০           │ pilot/preliminary            │
  │ n ৩০-১০০          │ small study                  │
  │ n ১০০-১০০০        │ reasonable                   │
  │ n > ১০০০          │ strong                       │
  │ n > ১০,০০০        │ very strong                  │
  │ n > ১০০,০০০       │ population-level             │
  └──────────────────┴────────────────────────────┘
  
  ML-specific: dataset size matters
    → "We tested on ৫০ images" → WEAK
    → "We tested on ImageNet (১.৪M images)" → STRONG
    → "We tested on ৩ benchmarks" → GOOD (cross-dataset)

২. METHODOLOGY (design)
  
  Gold standard: RCT (Randomized Controlled Trial)
    → randomly assign to groups
    → control group for comparison
    → blinded (single/double)
  
  ML papers: experiment design
    → train/test split (was it proper?)
    → cross-validation (k-fold?)
    → test set leakage (did they accidentally
       include test data in training?)
    → hyperparameter tuning on test set = CHEATING
  
  Common flaws:
    → "We achieved ৯৯% accuracy"
      → ON WHAT DATA? ON WHOSE BENCHMARK?
    → "Outperforms baselines"
      → WHICH BASELINES? OLD ONES? FAIR COMPARISON?
    → "Validated by experts"
      → HOW MANY EXPERTS? BLINDED? INTER-RATER RELIABILITY?

৩. STATISTICS (is it real or noise?)
  
  Key questions:
    → p-value: < ০.০৫ but what's the EFFECT SIZE?
    → confidence interval: wide CI = uncertain result
    → multiple comparisons correction (Bonferroni)?
    → is the improvement within MARGIN OF ERROR?
  
  ML-specific:
    → "X% improvement" → over what baseline? significant?
    → variance: did they run ৩ times? ৫? ১০?
    → error bars: are they shown? tight or wide?
    → statistical significance test (t-test, Wilcoxon)?
  
  RED FLAG: "p < ০.০৫" with NO effect size reported
    → statistically significant ≠ practically useful
    → ০.১% improvement can be "significant" with large n

৪. BASELINES (fair comparison?)
  
  Ask:
    → Did they compare with STATE-OF-THE-ART?
    → Or with OLD/weaker methods to look better?
    → Did they use the SAME data/preprocessing?
    → Did they tune baselines as carefully as their method?
  
  Common trick: "Our method beats [X from ২০১৮]"
    → but [Y from ২০২৩] is actually better
    → they cherry-picked weak baselines

৫. REPRODUCIBILITY (can I check?)
  
  Green flags:
    ✅ Code published (GitHub)
    ✅ Data publicly available
    ✅ Hyperparameters listed
    ✅ Random seeds mentioned
    ✅ Pre-registration (hypotheses declared beforehand)
  
  Red flags:
    ❌ "Code coming soon" (usually never comes)
    ❌ "Data available upon request" (barrier)
    ❌ Missing key hyperparameters
    ❌ No mention of random seeds
    ❌ No error bars / variance reported

৬. LIMITATIONS (honest self-assessment)
  
  → Does the paper ADMIT weaknesses?
  → "Our method works only on [specific case]"
  → "Performance degrades on [other case]"
  → No limitations section = suspicious
  → Good papers: detailed limitations
  → Bad papers: hide limitations

৭. FUNDING / CONFLICTS
  
  → Check Acknowledgments section
  → Check Conflicts of Interest
  → Industry-funded? Pro-industry results?
  → Not automatically wrong, but a factor

THE STATISTICS QUICK CHECK (for ML papers):

  ┌────────────────────┬──────────────────────────┐
  │ Claim              │ What to Check              │
  ├────────────────────┼──────────────────────────┤
  │ "X% accuracy"      │ On what data? Splits?     │
  │ "Significant       │ Effect size? Variance?    │
  │  improvement"      │ Number of runs?            │
  │ "State of the art" │ Compared with what? When? │
  │ "Scalable"         │ Tested at what scale?     │
  │ "Real-time"        │ On what hardware?         │
  │ "Robust"           │ To what perturbations?    │
  └────────────────────┴──────────────────────────┘

THE SCIENTIST'S PAPER NOTE TEMPLATE:

  ┌──────────────────────────────────────┐
  │ PAPER: [title]                       │
  ├──────────────────────────────────────┤
  │ SAMPLE SIZE: n=? adequate?           │
  │ METHODOLOGY: RCT? correlational?     │
  │ BASELINES: fair? current?            │
  │ STATISTICS: p-value? effect size?    │
  │ REPRODUCIBLE: code? data? seeds?     │
  │ LIMITATIONS: honest? hidden?         │
  │ FUNDING: independent? industry?      │
  ├──────────────────────────────────────┤
  │ TRUST LEVEL: [1-5]                   │
  │ ৫ = fully trust, would cite          │
  │ ৪ = mostly trust, minor concerns     │
  │ ৩ = mixed, use with caution          │
  │ ২ = significant concerns             │
  │ ১ = do not trust                     │
  ├──────────────────────────────────────┤
  │ WHY: [specific reasons]              │
  └──────────────────────────────────────┘</div>

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

<div class="code-block">THE PhD READER — Finding Gaps and Position:

ANDREW NG'S ADVICE (Stanford, CS229):

  "If you read ৫-২০ papers in a specific area, 
   you'll have a good understanding. 
   If you read ৫০-১০০, you'll have a very 
   thorough understanding."
  
  His reading strategy for ML papers:
    ১. Title + Abstract + Figures (৬০ sec)
    ২. Intro + Conclusion (৫ min)  
    ৩. Methods (skip proofs initially)
    ৪. References (which papers to read next?)
  
  Decision tree:
    → relevant? → read more
    → not relevant? → skip
    → foundational? → read deeply (Pass ৩)
    → incremental? → skim only

THE LITERATURE MAP (how PhD students think):

  ┌──────────────────────────────────────────┐
  │           THE FIELD LANDSCAPE              │
  │                                            │
  │  Paper A (২০১৮) ──── Paper B (২০১৯)       │
  │       │                    │               │
  │       │                    │               │
  │  Paper C (২০২০)      Paper D (২০২১)       │
  │       │                    │               │
  │       └──── Paper E (২০২২) ─┘              │
  │                    │                       │
  │               Paper F (২০২৩)               │
  │                    │                       │
  │               ??? GAP ???                   │
  │            (YOUR PAPER HERE)                │
  │                                            │
  └──────────────────────────────────────────┘
  
  Every paper builds on previous work.
  Your job: find WHERE the tree branches stop.
  That's your gap. That's your contribution.

HOW TO BUILD A LITERATURE MAP:

  Step ১: START WITH A SURVEY
    → search: "[topic] survey" or "[topic] review"
    → surveys map the ENTIRE field
    → read first → you have the landscape
  
  Step ২: CITATION TRACING
    → Backward: read the survey's references
       (foundational papers)
    → Forward: Google Scholar "Cited by" 
       (recent papers building on it)
  
  Step ৩: IDENTIFY CLUSTERS
    → papers group into approaches:
      "transformer-based" cluster
      "CNN-based" cluster  
      "hybrid" cluster
    → each cluster = one approach to the problem
  
  Step ৪: FIND THE EDGES
    → what has each cluster NOT solved?
    → what are common LIMITATIONS across clusters?
    → what do recent papers list as "future work"?
    → THESE ARE YOUR GAPS

THE GAP-FINDING QUESTIONS:

  After reading ১০+ papers in a subfield, ask:
  
  ১. What does NOBODY address?
    → "Nobody tests this on [language/domain]"
    → "Nobody measures [metric]"
    → "Nobody combines [approach A] with [approach B]"
  
  ২. What does everyone ASSUME but nobody tests?
    → "Everyone assumes [X] but nobody verified"
    → "Everyone uses [dataset] but it has [bias]"
  
  ৩. What's the TRADEOFF nobody has explored?
    → "Method A is fast but inaccurate. 
       Method B is accurate but slow.
       Nobody tried a middle ground."
  
  ৪. What's the "FUTURE WORK" everyone mentions?
    → read "Future Work" sections of ৫ papers
    → if ৩+ mention the same thing → it's a real gap
  
  ৫. What would make this work in YOUR DOMAIN?
    → "This works on English. Does it work on Bengali?"
    → "This works on images. Does it work on documents?"
    → Domain transfer = legitimate research contribution

THE LITERATURE REVIEW STRUCTURE:

  A literature review is NOT a list:
    ❌ "Paper A did X. Paper B did Y. Paper C did Z."
  
  A literature review IS a narrative:
    ✅ "Early approaches focused on [A], but were 
       limited by [problem]. B addressed this by [method],
       achieving [result]. However, [limitation] remained.
       C proposed [approach], which improved [metric] but
       introduced [new problem]. This suggests an opportunity
       to [YOUR CONTRIBUTION]."
  
  Structure:
    ১. Organize by APPROACH (not by paper)
    ২. Show EVOLUTION (how field progressed)
    ৩. Identify CONSENSUS (what everyone agrees)
    ৪. Identify DEBATE (where they disagree)
    ৫. End with THE GAP (your contribution)

WHERE TO FIND PAPERS:

  ┌────────────────────┬────────────────────────────┐
  │ Source              │ Best For                    │
  ├────────────────────┼────────────────────────────┤
  │ Google Scholar      │ everything (start here)     │
  │ arXiv.org           │ CS, physics, math, AI       │
  │ Semantic Scholar    │ AI-powered search           │
  │ Connected Papers    │ visualizing citation graph  │
  │ ResearchRabbit      │ discovering related papers  │
  │ Papers With Code    │ papers + implementations    │
  │ DBLP                │ CS bibliography             │
  │ IEEE Xplore         │ electrical, computing       │
  │ ACM Digital Library │ computer science            │
  │ PubMed              │ medical, life sciences      │
  └────────────────────┴────────────────────────────┘

AI-ASSISTED PAPER TOOLS (২০২৪-২০২৬):

  ┌──────────────────┬────────────────────────────────┐
  │ Tool              │ What it does                    │
  ├──────────────────┼────────────────────────────────┤
  │ Elicit            │ LLM literature review,          │
  │                   │ Q&A across papers, extraction   │
  │ Consensus         │ LLM search over 200M+ papers,   │
  │                   │ claims for/against a question   │
  │ NotebookLM        │ multi-PDF synthesis,            │
  │                   │ source-grounded Q&A (Google)    │
  │ scite.ai          │ citation context:               │
  │                   │ supporting/contradicting/mention│
  │ SciSpace / ChatPDF│ PDF Q&A, section extraction     │
  │ Inciteful         │ citation-graph building         │
  └──────────────────┴────────────────────────────────┘

  HOW TO USE THEM (hybrid workflow):
  
    AI does: first-pass summary, claim extraction,
             finding related/contradicting work
    তুমি করো: verification, deep reading (Keshav Pass ২-৩),
             judging credibility, spotting hallucination
    
    → AI Keshav Pass ১ করে ৫ সেকেন্ডে (summary)
    → কিন্তু Pass ২-৩ এখনো তোমার — verify, critique
    → সবসময় source PDF যাচাই করো — AI মাঝে মাঝে 
      ভুল বা অস্তিত্বহীন citation বানায়
    → এটাই Door 3-এর scientist's eye-এর আধুনিক রূপ

THE ৫-২০ PAPER READING SPREE:

  When entering a new subfield:
    ১. Find the most-cited survey (Google Scholar)
    ২. Read survey → identify ৫ key papers
    ৩. Read those ৫ (Keshav Pass ১+২)
    ৪. From their references → find ৫ more
    ৫. From "Cited by" → find ৫ recent
    ৬. Now you've read ~১৫ papers
    ৭. You're CURRENT in this subfield
    ৮. Write a ১-page summary of the landscape</div>

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
