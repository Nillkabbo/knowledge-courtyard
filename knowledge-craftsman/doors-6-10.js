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

<div class="code-block">READING RESEARCH PAPERS — The 3-Pass Method (Keshav, 2007):

THE IMRaD STRUCTURE (know the terrain):

  Most papers follow IMRaD:
  
  I — Introduction (WHY this research matters)
  M — Methods (HOW they did it)
  R — Results (WHAT they found)
  a — and
  D — Discussion (WHAT it means)
  
  + Abstract (summary at top)
  + Conclusion (summary at bottom)
  + References (other papers they used)

PASS ১: THE BIRD'S-EYE VIEW (5-10 min)

  Goal: decide if this paper is worth reading
  
  Read ONLY:
    ১. Title
    ২. Abstract
    ৩. Introduction (first ২-৩ paragraphs)
    ৪. Section/Subsection headings (DON'T read content)
    ৫. Conclusion
    ৬. References (skim — do they cite papers you know?)
    ৭. "Is this paper worth my time?"
  
  After Pass ১, you should know:
    → type of paper (measurement, algorithm, theory?)
    → theoretical basis (what field?)
    → main contribution (what's new?)
    → relevance to YOU
  
  Keshav's ৫ Cs (what to extract):
    ১. Category (what type?)
    ২. Context (what field, what prior work?)
    ৩. Correctness (do the claims seem valid?)
    ৪. Contributions (what's new?)
    ৫. Clarity (is it well-written?)
  
  DECISION: worth full reading? → Pass ২
             not worth? → discard

PASS ২: THE GRASP (1 hour)

  Goal: understand the paper's content
  
  Read the FULL paper but:
    → IGNORE proofs, derivations, details
    → focus on figures, tables, diagrams
    → mark unread references for later
  
  Key actions:
    ১. Look at ALL figures/tables carefully
       (they often tell the whole story)
    ২. Note unfamiliar terms → look them up
    ৩. Mark references to read later
  
  After Pass ২, you should:
    → summarize the paper to a colleague
    → identify the STRONG claims
    → identify the WEAK points
    → understand how they proved their claims
  
  DECISION: need deep understanding? → Pass ৩
             enough for now? → take notes → done

PASS ৩: THE DEEP DIVE (4-5 hours)

  Goal: VIRTUALLY RE-IMPLEMENT the paper
  
  Method:
    → based on assumptions → re-create the work
    → compare your re-creation with the actual paper
    → identify hidden assumptions
    → identify missing citations
    → find strengths AND weaknesses
  
  This is what PhD students and researchers do
    for papers in their subfield
  
  After Pass ৩, you should be able to:
    → reconstruct the entire structure from memory
    → identify strong and weak points SPECIFICALLY
    → suggest improvements
    → compare with competing work
    → tell if the paper is reproducible

WHERE TO FIND PAPERS:

  ┌──────────────────┬────────────────────────┐
  │ Source            │ Best For               │
  ├──────────────────┼────────────────────────┤
  │ Google Scholar    │ everything (start here)│
  │ arXiv.org         │ CS, physics, math      │
  │ Semantic Scholar  │ AI/ML, semantic search │
  │ PubMed            │ medical, life sciences │
  │ IEEE Xplore       │ electrical, computing  │
  │ ACM Digital Lib   │ computer science       │
  │ Connected Papers  │ finding related papers │
  └──────────────────┴────────────────────────┘

CITATION TRACING (building a reading list):

  ১. Start with ONE good paper (survey/review)
  ২. Read its references → find older foundational work
  ৩. Use Google Scholar "Cited by" → find newer work
  ৪. Build a tree: foundational → current
  ৫. Read ৫-২০ papers in a subfield → you're current
  
  Andrew Ng's advice (Stanford):
    → read ৫-২০ papers = good understanding of subfield
    → read ৫০-১০০ papers = very thorough understanding
    → "Don't read every word. Read strategically."</div>

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

<div class="code-block">CRITICAL ANALYSIS — The Critical Eye:

THE REPLICATION CRISIS:

  ┌──────────────────┬────────────────────────────┐
  │ Field             │ Replication Rate            │
  ├──────────────────┼────────────────────────────┤
  │ Psychology (সামাজিক)│ ~৩৬% replicate (OSC, 2015) │
  │ Psychology (জ্ঞানী) │ ~৭৭% replicate             │
  │ Medicine (preclinical│ ~২৫% replicate (Begley, 2012)│
  │ Economics         │ ~৬০% replicate (Camerer, 2016)│
  │ Chemistry         │ ~৬০% replicate               │
  └──────────────────┴────────────────────────────┘

  What went wrong?
    → p-hacking: trying many analyses, reporting
       only the significant one
    → publication bias: journals prefer "exciting"
       positive results, reject null findings
    → small sample sizes: too few participants
    → selective reporting: cherry-picking data
    → HARKing: Hypothesizing After Results are Known
       (making up the hypothesis after seeing data)

THE ৭ QUESTIONS OF CRITICAL READING:

  When reading ANY paper, ask:

  ১. SAMPLE SIZE — How many participants/samples?
     → n < ৩০ per group: suspicious
     → n = ৩০-১০০: preliminary
     → n > ১০০: reasonable
     → n > ১০০০: strong
     → "Underpowered" studies can't detect real effects

  ২. METHODOLOGY — Is the design sound?
     → RCT (randomized controlled trial): gold standard
     → Correlation: NOT causation!
     → Self-report: biased (people lie to themselves)
     → "We surveyed students" → NOT generalizable to
       all humans

  ৩. EFFECT SIZE — How big is the effect?
     → p-value < ০.০৫ but effect size tiny?
     → "statistically significant" ≠ practically meaningful
     → Example: "this drug reduces headaches by ০.২%"
       (statistically significant but USELESS)
     → Always look at effect size (Cohen's d, r)

  ৪. P-HACKING — Did they test many hypotheses?
     → ২০ analyses → ১ significant → report only that
     → pre-registration (checking if they declared
       hypotheses BEFORE data) = good sign
     → "exploratory analysis" = possible p-hacking

  ৫. CONFLICTS OF INTEREST — Who funded it?
     → "Coca-Cola funded study: soda is healthy"
     → pharmaceutical company funding drug research
     → ALWAYS check the "Acknowledgments" and 
       "Conflicts of Interest" sections
     → industry-funded studies are ৩-৪x more likely
       to favor the sponsor (Lundh et al., 2012)

  ৬. REPLICATION — Has anyone reproduced this?
     → search "[paper title] replication"
     → if NO replication exists → treat as preliminary
     → if FAILED replication → discount
     → if REPLICATED → stronger evidence

  ৭. ALTERNATIVE EXPLANATIONS — What else could explain this?
     → "Students who sleep more get better grades"
     → Alternative: wealthier students sleep better
       AND have better resources → confound!
     → Always ask: what ELSE could cause this result?

RED FLAGS (suspicious papers):

  ❌ " groundbreaking" / "revolutionary" in abstract
  ❌ No mention of limitations
  ❌ Tiny sample but huge claims
  ❌ No pre-registration
  ❌ Industry-funded with pro-industry results
  ❌ No effect size reported (only p-values)
  ❌ "Further research needed" = "we're not sure"
  ❌ Authors have no track record in the field

GREEN FLAGS (trustworthy papers):

  ✅ Pre-registered hypothesis
  ✅ Large, diverse sample
  ✅ Reports effect sizes + confidence intervals
  ✅ Discusses limitations honestly
  ✅ Independent funding
  ✅ Replicated by other groups
  ✅ Authors are experts in the specific field
  ✅ Data and code publicly available (open science)

THE HIERARCHY OF EVIDENCE:

  Strongest ← Meta-analysis (combines many studies)
             ← Systematic review
             ← RCT (randomized controlled trial)
             ← Cohort study
             ← Case-control study
             ← Cross-sectional survey
             ← Case study / expert opinion
  Weakest   ← Animal study / in vitro</div>

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

<div class="code-block">WRITING IS THINKING — The Cognitive Science:

WHY WRITING = THINKING:

  Paul Graham (essay "Writing, Briefly", 2007):
    "Writing is a more exact mode of thinking 
     than talking. When you write, you have to 
     figure out what you mean."
  
  The cognitive reason:
    → Thinking is MESSY — ideas branch, loop, contradict
    → Writing FORCES linear structure
    → You must CHOOSE what comes first, second, third
    → You must CONNECT ideas logically
    → You can't hand-wave — words must follow words
  
  → "I know what I want to say, I just can't 
     express it" = you DON'T know what you want to say
  → If you can't write it clearly, you don't 
     understand it (Feynman principle)

THREE TYPES OF WRITING (for knowledge workers):

১. WRITING TO THINK (private)
  → journals, drafts, notes to yourself
  → exploring ideas, finding connections
  → NOT for anyone else — for YOU
  → messy, unstructured, stream of consciousness
  → Zettelkasten permanent notes (Door ৩) = this

২. WRITING TO UNDERSTAND (educational)
  → summaries, explanations, Feynman notes
  → explaining something to learn it
  → teaching as learning
  → blog posts, documentation, tutorials

৩. WRITING TO COMMUNICATE (public)
  → polished essays, papers, books
  → structured, edited, refined
  → for an AUDIENCE
  → this is where Door ২ (Adler) and Door ৩ 
    (Luhmann) combine → output

THE WRITING-FIRST APPROACH (Paul Graham):

  Graham's method:
    ১. Start writing BEFORE you know what you think
    ২. The ACT of writing reveals what you think
    ৩. Write badly first → then fix it
    ৪. "An essay is not an essay you write. It's 
       an essay you REWRITE."
  
  → most people wait until they "know enough"
  → you NEVER know enough until you start writing
  → writing IS the process of knowing

THE DAILY WRITING PRACTICE:

  ┌──────────────────────────────────────┐
  │ Morning Pages (Julia Cameron, 1992): │
  │ → ৩ pages, longhand, first thing      │
  │ → no editing, no structure            │
  │ → clears mental fog                   │
  │ → captures subconscious ideas         │
  ├──────────────────────────────────────┤
  │ Daily Note (Zettelkasten):            │
  │ → ১-৩ permanent notes per day         │
  │ → one idea per note                   │
  │ → in your own words                   │
  │ → linked to existing notes            │
  ├──────────────────────────────────────┤
  │ Weekly Synthesis:                     │
  │ → review week's notes                 │
  │ → find unexpected connections         │
  │ → write ১ paragraph synthesizing      │
  │ → this paragraph may become a blog    │
  └──────────────────────────────────────┘

WRITING AS RETENTION (the science):

  Writing something in your OWN words:
    → forces deeper processing (Craik & Lockhart, 1972)
    → "levels of processing" theory: 
       shallow (copying) → deep (rephrasing)
    → rephrasing = your brain builds new neural pathways
    → copying = no new pathways
  
  Wright (Roosevelt University, 2011):
    → note-taking group: ৩৪% better retention
    → note-taking + review: ৫০% better
    → note-taking + review + testing: ৬২% better

THE WRITING → READING FEEDBACK LOOP:

  Better writers = better readers
  Better readers = better writers
  
  Why? Writing teaches you what GOOD structure looks like.
  When you read after writing regularly:
    → you NOTICE structure (not just content)
    → you APPRECIATE good transitions
    → you SPOT weak arguments (your own writing 
       has taught you what weak looks like)
  
  → Adler's analytical reading (Door ২) becomes
    NATURAL after you've tried to write analytically</div>

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

<div class="code-block">SYNTOPICAL READING — The Highest Level (Adler Level 4):

THE METHOD (Adler & Van Doren, 1972):

  Step ১: CREATE A BIBLIOGRAPHY
    → choose your TOPIC (a question, not just a word)
    → find the BEST ৫-১০ books on it
    → use: Amazon reviews, Goodreads, expert recommendations,
       bibliographies of books you already value
    → inspectional-read (Door ২) ALL of them first
    
  Step ২: IDENTIFY THE KEY QUESTIONS
    → what QUESTIONS are all these books trying to answer?
    → "What is intelligence?" → 
       Sub-questions: Is it genetic? Can it be trained?
       Is there one type or many? How to measure?
    
  Step ৩: DEFINE THE ISSUES
    → where do authors DISAGREE?
    → Gardner: multiple intelligences (৮ types)
    → Spearman: one general intelligence (g-factor)
    → Sternberg: triarchic (৩ types)
    → these DISAGREEMENTS = the issues
    
  Step ৪: ANALYZE THE DISCUSSION
    → map agreements AND disagreements
    → don't take sides yet — UNDERSTAND all positions
    → "Author A says X because [evidence]. Author B 
       says Y because [different evidence]."
    
  Step ৫: FORM YOUR OWN SYNTHESIS
    → only AFTER understanding all positions
    → "Based on all sources, I believe [your view]
       because [your reasoning], while acknowledging
       [counterargument] has merit because [reason]."
    → THIS is original thought — not copying one author

SYNTOPICAL EXAMPLE — "What is the best diet?":

  Books to read:
    ১. "The China Study" (Campbell) — plant-based
    ২. "Why We Get Fat" (Taubes) — low-carb
    ৩. "In Defense of Food" (Pollan) — whole foods
    ৪. "The Big Fat Surprise" (Teicholz) — fat is fine
    ৫. "How Not to Die" (Greger) — plant-based, evidence-based
  
  Issues:
    → Is saturated fat harmful? (Campbell: yes, Teicholz: no)
    → Are carbs the problem? (Taubes: yes, Greger: no)
    → What ALL agree: whole foods > processed foods
  
  Your synthesis:
    "All sources agree on one thing: avoid ultra-processed
     foods. Beyond that, evidence is mixed. The best 
     approach is likely: whole foods, mostly plants,
     adequate protein, minimal added sugar. 
     Individual variation matters."
  
  → you didn't just believe ONE author
  → you synthesized ৫ → arrived at YOUR OWN conclusion
  → this is what PhD students, researchers, 
     great writers do

SYNTOPICAL READING + ZETTELKASTEN:

  This is where it ALL comes together:
  
  ১. Read ৫ books syntopically
  ২. Take Zettelkasten notes from EACH
  ৩. Create LINKS between notes from different books
  ৪. The links reveal SYNTHESIS naturally
  ৫. Your permanent notes BECOME the synthesis
  
  Luhmann's Zettelkasten was EXACTLY this:
    → notes from ৭০+ books, all linked
    → when he wanted to write about "power"
    → he pulled all "power" notes from different sources
    → the synthesis was already IN the links

THE TRANSITION FROM READER TO CREATOR:

  Elementary reader: consumes content
  Inspectional reader: selects wisely
  Analytical reader: understands deeply
  Syntopical reader: CREATES new knowledge
  
  → at Level ৪, you're not just learning
  → you're CREATING understanding that didn't 
    exist before
  → this is what every book, paper, essay IS:
    someone's syntopical synthesis</div>

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

<div class="code-block">THE SECOND BRAIN — Complete Architecture:

┌──────────────────────────────────────────────────┐
│ TIAGO FORTE'S CODE METHOD (2022):                 │
│                                                    │
│  C — CAPTURE (what resonates)                      │
│  → highlights, quotes, ideas                       │
│  → DON'T organize yet — just capture               │
│  → from: books, articles, podcasts, conversations  │
│                                                    │
│  O — ORGANIZE (by actionability)                   │
│  → PARA: Projects, Areas, Resources, Archives      │
│  → NOT by topic — by "will I use this?"            │
│  → active projects need active notes               │
│                                                    │
│  D — DISTILL (find the essence)                    │
│  → progressive summarization:                      │
│    original → bold key points → highlight          │
│    best → ৩-sentence summary                       │
│  → each layer MORE useful, LESS work to read       │
│                                                    │
│  E — EXPRESS (create from the system)              │
│  → write blog, essay, paper, book                  │
│  → teach, present, build                           │
│  → the system OUTPUTS — you don't write from scratch│
│                                                    │
└──────────────────────────────────────────────────┘

THE COMPLETE READING-THINKING-WRITING SYSTEM:

  ┌──────────────────────────────────────┐
  │ STEP ১: CAPTURE                       │
  │ → Read actively (Adler Level ২-৪)     │
  │ → Highlight what resonates            │
  │ → Write fleeting notes (Zettelkasten) │
  │ → Source: Ebbinghaus fix              │
  ├──────────────────────────────────────┤
  │ STEP ২: PROCESS                       │
  │ → Convert to literature notes         │
  │ → Write permanent notes (atomic)      │
  │ → Link to existing notes              │
  │ → Feynman test: can I explain simply? │
  ├──────────────────────────────────────┤
  │ STEP ৩: ORGANIZE                      │
  │ → PARA method (Forte)                 │
  │ → Projects: active work               │
  │ → Areas: ongoing interests            │
  │ → Resources: reference material       │
  │ → Archives: completed/inactive        │
  ├──────────────────────────────────────┤
  │ STEP ৪: DISTILL                       │
  │ → Progressive summarization           │
  │ → bold key points → highlight best    │
  │ → → ৩-sentence summary                │
  │ → each note becomes MORE useful       │
  ├──────────────────────────────────────┤
  │ STEP ৫: SYNTHESIZE                    │
  │ → Syntopical reading across sources   │
  │ → Follow links between notes          │
  │ → Find unexpected connections         │
  │ → New ideas EMERGE from the network   │
  ├──────────────────────────────────────┤
  │ STEP ৬: EXPRESS                       │
  │ → Write: blog, essay, paper, book     │
  │ → Teach: explain to others            │
  │ → Build: create from the knowledge    │
  │ → The system does the work            │
  └──────────────────────────────────────┘

TOOLS:

  ┌────────────┬──────────────────────────────┐
  │ Function    │ Tool                         │
  ├────────────┼──────────────────────────────┤
  │ Notes/PKM   │ Obsidian (free, local)       │
  │             │ Notion (cloud, databases)    │
  │             │ Roam Research (daily notes)  │
  ├────────────┼──────────────────────────────┤
  │ Reading     │ Kindle (highlights export)   │
  │             │ Readwise (syncs highlights)  │
  │             │ Pocket (save articles)       │
  ├────────────┼──────────────────────────────┤
  │ Papers      │ Zotero (free reference mgr)  │
  │             │ Mendeley (Elsevier)         │
  ├────────────┼──────────────────────────────┤
  │ Spaced Rep  │ Anki (free, open-source)     │
  │             │ RemNote (notes + SR)         │
  └────────────┴──────────────────────────────┘

THE NINE MASTERS — One System:

  ┌──────────────┬────────────────────────────────┐
  │ Master       │ Their Contribution to Your System│
  ├──────────────┼────────────────────────────────┤
  │ Ebbinghaus   │ WHY: you forget ৯০% → fix it  │
  │ (1885)       │                                │
  ├──────────────┼────────────────────────────────┤
  │ Adler        │ HOW: read in ৪ levels          │
  │ (1940/1972)  │                                │
  ├──────────────┼────────────────────────────────┤
  │ Luhmann      │ STORE: Zettelkasten (atomic    │
  │ (1952-1998)  │ linked notes)                  │
  ├──────────────┼────────────────────────────────┤
  │ Feynman      │ TEST: explain it simply        │
  │ (1918-1988)  │                                │
  ├──────────────┼────────────────────────────────┤
  │ Keshav       │ PAPERS: ৩-pass method           │
  │ (2007)       │                                │
  ├──────────────┼────────────────────────────────┤
  │ Musk/Gates/  │ HABIT: read daily, broadly     │
  │ Munger/Naval │                                │
  ├──────────────┼────────────────────────────────┤
  │ Roediger &   │ RETAIN: testing effect         │
  │ Karpicke     │ (self-test > re-read)          │
  │ (2006)       │                                │
  ├──────────────┼────────────────────────────────┤
  │ Ahrens       │ WORKFLOW: smart notes →        │
  │ (2017)       │ permanent notes                │
  ├──────────────┼────────────────────────────────┤
  │ Forte        │ SYSTEM: CODE + PARA            │
  │ (2022)       │ (complete second brain)        │
  └──────────────┴────────────────────────────────┘

THE FINAL PRINCIPLE:

  Your biological brain is for:
    → CREATING ideas
    → CONNECTING ideas
    → JUDGING quality
    → DECIDING direction
  
  NOT for:
    → STORING information (that's what notes are for)
    → REMEMBERING details (that's what review is for)
    → ORGANIZING files (that's what systems are for)
  
  David Allen (GTD): "Your mind is for having ideas,
    not holding them."
  
  Tiago Forte: "Build a second brain so your first
    brain can do what it does best: think."
  
  → CAPTURE everything that resonates
  → ORGANIZE it so you can find it
  → DISTILL it so you can understand it
  → EXPRESS it so others can benefit
  
  This is the craftsman of knowledge.</div>

<div class="verse">"তিনি মানুষকে শিখিয়েছেন কলমের মাধ্যমে। মানুষকে শিখিয়েছেন যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>পড়ো, ভাবো, লেখো — এটাই জ্ঞানের ত্রিমূর্তি। পড়া ছাড়া জ্ঞান আসে না। ভাবা ছাড়া জ্ঞান গভীর হয় না। লেখা ছাড়া জ্ঞান স্থায়ী হয় না। এই তিনের সংযোগ = হিকমাহ — প্রজ্ঞা, প্রয়োগকৃত জ্ঞান। যে পড়ে, সে জানে। যে ভাবে, সে বোঝে। যে লেখে, সে সৃষ্টি করে। যে সৃষ্টি করে, সে অবিচ্ছেয্য। এটাই জ্ঞানের কারিগর — পড়া থেকে সৃষ্টি।</div>

<div class="secret-box"><div class="label">দশম দরজা — সমন্বয়</div><div class="text">🏛️ জ্ঞান কারিগর = Capture + Organize + Distill + Express + Synthesize।<br><small>পড়ো (Adler), নোট নাও (Luhmann), পরীক্ষা করো (Feynman), সংযুক্ত করো (Syntopical), সৃষ্টি করো (Express)। মস্তিষ্ক সৃষ্টির জন্য, সংরক্ষণের জন্য নয়।</small></div></div>`
});
