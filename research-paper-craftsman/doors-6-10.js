// ════════════════════════════════════════
// গবেষণার কারিগর — DOORS 6-10
// Research Paper: Writing → Building → Synthesis
// Cross-references Book 24, 8, 23
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

<div class="code-block">PAPER ARCHITECTURE — How to Write Each Section:

SIMON PEYTON JONES' ADVICE (Microsoft Research):
  "Writing the paper IS the research. You think 
   you know, but until you write it, you don't."
  
  His method:
    ১. Write the OUTLINE first (not the content)
    ২. Each section: ৩-৫ bullet points
    ৩. Fill in SLOWLY, section by section
    ৪. Iterate: write → review → rewrite
    ৫. Submit when you'd be embarrassed NOT to

THE OUTLINE (before any prose):

  ┌──────────────────────────────────────────────┐
  │ TITLE (working): [10-20 words, descriptive]   │
  ├──────────────────────────────────────────────┤
  │ ABSTRACT:                                     │
  │   - Problem: [1 sentence]                     │
  │   - Method: [1 sentence]                      │
  │   - Result: [1 sentence]                      │
  │   - Impact: [1 sentence]                      │
  ├──────────────────────────────────────────────┤
  │ ১. INTRODUCTION (1.5 pages)                   │
  │   1.1 Context: [what's the domain?]           │
  │   1.2 Problem: [what's broken?]               │
  │   1.3 Existing approaches: [what's been done?]│
  │   1.4 Gap: [what's missing?]                  │
  │   1.5 This paper: [what WE do]                │
  │   1.6 Contributions: [3-4 bullet points]      │
  ├──────────────────────────────────────────────┤
  │ ২. RELATED WORK (0.5-1 page)                  │
  │   - Group by APPROACH (not by paper)          │
  │   - Show how YOUR work differs                │
  ├──────────────────────────────────────────────┤
  │ ৩. METHODS (2-3 pages)                        │
  │   3.1 Overview: [high-level architecture]     │
  │   3.2 [Component 1]: [detail]                 │
  │   3.3 [Component 2]: [detail]                 │
  │   3.4 Training/Setup: [parameters]            │
  ├──────────────────────────────────────────────┤
  │ ৪. RESULTS (2-3 pages)                        │
  │   4.1 Experimental setup: [datasets, metrics] │
  │   4.2 Main results: [table + analysis]        │
  │   4.3 Ablation study: [what each part does]   │
  │   4.4 Analysis: [why does it work?]           │
  ├──────────────────────────────────────────────┤
  │ ৫. DISCUSSION (0.5-1 page)                    │
  │   - What do results MEAN?                     │
  │   - Limitations                               │
  │   - Future work                               │
  ├──────────────────────────────────────────────┤
  │ ৬. CONCLUSION (0.25 page)                     │
  │   - Summary in 3-5 sentences                  │
  └──────────────────────────────────────────────┘

SECTION-BY-SECTION WRITING GUIDE:

INTRODUCTION — The Funnel:
  
  Wide → Narrow → Your contribution
  
  Start: "Document AI has revolutionized..."
  Middle: "However, OCR for [specific] remains..."
  Narrow: "Prior work [A, B] addressed X but..."
  Your work: "In this paper, we propose..."
  Contributions: "Our contributions are: (1)... (2)... (3)..."
  
  Key: the LAST paragraph of Introduction 
    should list your contributions explicitly
    → reviewers SCAN for this

METHODS — The Recipe:
  
  Write like a COOKBOOK — someone should be able 
  to reproduce from your Methods alone.
  
  Include:
    → Architecture diagram (Figure ১)
    → Mathematical formulation (if applicable)
    → Hyperparameters (table)
    → Training details (hardware, time, optimizer)
    → Data preprocessing steps
  
  Don't include:
    → Implementation details (that's in the code)
    → Trivial steps ("we used Python")
  
  Key: if a reader can't REPRODUCE → Methods fails

RESULTS — The Evidence:
  
  Lead with FIGURES and TABLES.
  Text supports the visuals, not vice versa.
  
  Each result:
    ১. What did you measure? (metric)
    ২. What was the result? (number)
    ৩. What does it mean? (interpretation)
    ৪. Why? (analysis)
  
  Always include:
    → Comparison with baselines (Table)
    → Main result figure (the "money figure")
    → Ablation study (removing components)
    → Error analysis (where does it fail?)

DISCUSSION — The Interpretation:
  
  This is where you show MATURITY:
    → "Our method works well on X but fails on Y"
    → "This suggests that Z is important"
    → "A limitation is that we assumed W"
    → "Future work could explore V"
  
  NEVER skip limitations — reviewers will find them
    anyway. If YOU point them out first → you look
    thoughtful. If reviewers find them → you look
    careless.

WRITING ORDER (NOT start-to-finish!):

  ┌────────────────┬────────────────────────────┐
  │ Write Order     │ Why                        │
  ├────────────────┼────────────────────────────┤
  │ ১. Figures/Tables│ They tell the story       │
  │ ২. Methods       │ You know this best        │
  │ ৩. Results       │ Around the figures        │
  │ ৪. Discussion    │ Interpret results         │
  │ ৫. Introduction  │ Now you know the story    │
  │ ৬. Abstract      │ Summary of everything     │
  │ ৭. Conclusion    │ Final summary             │
  │ ৮. Related Work  │ Last (needs full context) │
  │ ৯. Title         │ Final polish              │
  └────────────────┴────────────────────────────┘

  Most beginners: write intro first → rewrite ৫ times
  Experienced: write methods first → intro last
    → intro is easier when you know the whole story</div>

<div class="dialogue">বিনা — building, construction, architecture। কুরআনে আল্লাহ বলেন — "যিনি সৃষ্টি করেছেন এবং নিয়মে বেঁধেছেন।" (৮৭:২)। নিয়মে বাঁধা = বিনা। পত্র নির্মাণও বিনা — নিয়মে বাঁধা। প্রতিটা সেকশনের নির্দিষ্ট কাজ। প্রতিটা প্যারাগ্রাফের নির্দিষ্ট স্থান। যে বিনা করে, সে নিখুঁত। যে অগোছালো লেখে, সে বিভ্রান্ত করে। Simon Peyton Jones বলেন — writing IS research। কারণ লেখার সময় তুমি বোঝো — কোথায় তোমার গবেষণার ঘাটতি। বিনা — স্থাপত্যের শিল্প।</div>
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

<div class="dialogue">পত্রের নকশা বলেছিলেন — প্রতিটা সেকশনের কাজ। কিন্তু আমি বলি — নকশা পূরণ করার সময় ভয় আসবে। কী লেখব? কেমন লেখব? ইউসুফ বলেন — শুধু লেখো। খারাপ হলে হবে। কিন্তু খালি পাতা = কিছু নয়। খারাপ খসড়া = সম্পাদনার উপাদান। জ্ঞানের কারিগর (Book ২৪, Door ৮) বলেছিলেন — writing IS thinking। লেখার সময় তুমি ভাবো। ভাবার সময় তুমি বুঝো। কলম চালাও।</div>
<div class="dialogue en">"Paper architecture said — each section's job. But I say — filling the outline brings fear. What to write? How to write? Yusuf says — just write. Bad is fine. But blank page = nothing. Bad draft = material for editing. The Knowledge Craftsman (Book 24, Door 8) said — writing IS thinking. While writing, you think. While thinking, you understand. Move the pen."</div>

<div class="code-block">WRITING THE PAPER — From Outline to Draft:

THE WRITING PROCESS (Stephen King, Lamott, Graham):

  Draft ১: SHITTY (just get words on page)
    → don't edit while writing
    → don't worry about grammar, flow, citations
    → goal: FILL THE OUTLINE
    → time: ১-২ weeks
  
  Draft ২: STRUCTURAL (fix the argument)
    → does each section flow logically?
    → does each paragraph have ONE main point?
    → are claims supported by evidence?
    → reorder paragraphs if needed
    → time: ১ week
  
  Draft ৩: LINE EDIT (fix the sentences)
    → each sentence clear and concise
    → no passive voice (usually)
    → no unnecessary words
    → "very", "really", "actually" → DELETE
    → time: ৩-৫ days
  
  Draft ৪: POLISH (final pass)
    → read ALOUD (catches awkward phrasing)
    → check every figure/table reference
    → verify every citation
    → spell-check, grammar-check
    → time: ২-৩ days

TOOLS FOR PAPER WRITING:

  ┌──────────────┬──────────────────────────────┐
  │ Tool          │ Purpose                      │
  ├──────────────┼──────────────────────────────┤
  │ Overleaf      │ Collaborative LaTeX editing  │
  │ (online)      │ (most CS/ML papers use this) │
  ├──────────────┼──────────────────────────────┤
  │ LaTeX         │ Typesetting system            │
  │ (local)       │ Professional formatting       │
  ├──────────────┼──────────────────────────────┤
  │ Zotero        │ Reference management (free)   │
  │               │ Auto-generates bibliography   │
  ├──────────────┼──────────────────────────────┤
  │ Mendeley      │ Reference management + PDF    │
  │               │ annotation                   │
  ├──────────────┼──────────────────────────────┤
  │ Google Docs   │ Early drafts (collaborative)  │
  │               │ Then export to LaTeX          │
  ├──────────────┼──────────────────────────────┤
  │ Grammarly     │ Grammar/style checking        │
  ├──────────────┼──────────────────────────────┤
  │ matplotlib    │ Python figure generation      │
  │ /seaborn      │ (for results plots)           │
  ├──────────────┼──────────────────────────────┤
  │ draw.io       │ Architecture diagrams         │
  │ /excalidraw   │ (for Methods figures)         │
  ├──────────────┼──────────────────────────────┤
  │ tables        │ Use booktabs LaTeX package    │
  │               │ (professional-looking tables) │
  └──────────────┴──────────────────────────────┘

FIGURES — The Most Important Part:

  Figures communicate MORE than text.
  Reviewers look at figures FIRST.
  
  Figure types you need:
    ১. Architecture diagram (Figure ১)
       → overview of your method
       → clear boxes, arrows, labels
       → should make sense ALONE (without text)
    
    ২. Main results (Figure/Table ২)
       → comparison with baselines
       → bold the BEST numbers
       → show statistical significance
    
    ৩. Ablation study (Table ৩)
       → remove each component → show impact
       → proves EACH part contributes
    
    ৪. Qualitative examples (Figure ৩)
       → show actual outputs
       → "look, our method works on THESE examples"
  
  Rules:
    → use vector graphics (PDF, SVG) NOT raster
    → readable at ১০০% zoom (font size ≥ ৮pt)
    → consistent color scheme
    → caption tells the WHOLE story
    → "Figure ১: Our method processes [X] by [Y]. 
       The [Z] component achieves [result]."

CITATIONS — The Knowledge Chain:

  Zotero workflow:
    ১. Save papers to Zotero (browser extension)
    ২. In Overleaf/LaTeX, use \\cite{key}
    ৩. Zotero generates .bib file automatically
    ৪. LaTeX formats bibliography automatically
  
  Citation rules:
    → cite the ORIGINAL source, not a textbook
    → cite RECENT work (shows you're current)
    → cite YOUR PRIOR work (if applicable)
    → don't over-cite (৩০-৬০ refs for ৮-page paper)
    → don't under-cite (reviewers will notice)
  
  Self-citation: ১-৩ max (more = suspicious)

THE FEAR OF THE BLANK PAGE:

  Stephen King: "The scariest moment is always 
    just BEFORE you start."
  
  Solution: start with the EASIEST section
    → Methods (you know this best)
    → or Results (you have the data)
    → NEVER start with Introduction (hardest)
  
  Paul Graham: "Writing and thinking are the 
    same thing. If you can't write, you're not 
    thinking clearly."
  
  Anne Lamott: "Write it badly. Write it really 
    badly. You can fix bad writing. You can't fix 
    a blank page."</div>

<div class="dialogue">কলম — pen, the instrument of knowledge। কুরআনে আল্লাহ বলেন — "যিনি কলমের মাধ্যমে শিখিয়েছেন।" (৯৬:৪)। কলম জ্ঞানের হাতিয়ার। জ্ঞানের কারিগর (Book ২৪) বলেছিলেন — লেখা = চিন্তা। এখন আমি বলি — গবেষণাপত্র লেখা = গবেষণা। লেখার সময় তুমি বোঝো — কোথায় গবেষণার ঘাটতি। কলম চালাও। ভুল হলে হবে। খালি পাতা রাখো না। কলম — জ্ঞানের স্থায়ী হাতিয়ার।</div>
<div class="dialogue en">"Qalam — pen, the instrument of knowledge. Allah says — 'Who taught by the pen.' (96:4). The pen is the tool of knowledge. The Knowledge Craftsman (Book 24) said — writing = thinking. Now I say — writing a research paper = research. While writing, you discover gaps. Move the pen. Mistakes are fine. Don't leave the page blank. Qalam — the permanent tool of knowledge."</div>`,
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

<div class="dialogue">Draft writer বলেছিলেন — লেখো, খসড়া। কিন্তু আমি বলি — লেখার পরে আসল পরীক্ষা — peer review। Reviewer কঠোর হবেন। কিন্তু মনে রাখো — human psychology book (Book ২৩) বলেছিলেন — সমালোচনা = প্রতিক্রিয়া, উন্নতির সুযোগ। Reviewer comment = আক্রমণ নয়, উন্নতির পরামর্শ। মুহাসাবা — সমালোচনা গ্রহণ, সম্মানজনক উত্তর, উন্নতি।</div>
<div class="dialogue en">"The draft writer said — write, draft. But I say — after writing comes the real test — peer review. Reviewers will be harsh. But remember — the human psychology book (Book 23) said — criticism = feedback, opportunity to improve. Reviewer comments = not attacks, advice for improvement. Muhasabah — accepting criticism, responding respectfully, improving."</div>

<div class="code-block">PEER REVIEW — The Gauntlet:

THE PUBLICATION CYCLE:

  Submit → Editor Desk Review → 
    → Send to Reviewers (২-৪) → 
    → Wait (১-৬ months) →
    → Decision:
       ✓ Accept (rare, <৫%)
       ✓ Minor Revision (good, ২০%)
       ✓ Major Revision (common, ৪০%)
       ✗ Reject (common, ৩৫%)
    → Revise (if revision) →
    → Resubmit →
    → Second review →
    → Accept →
    → Camera-ready →
    → Published!

DECISION TYPES:

  ┌────────────────────┬──────────────────────────────┐
  │ Decision            │ What It Means                │
  ├────────────────────┼──────────────────────────────┤
  │ Accept as-is        │ Miracle. Celebrate.          │
  │ Minor Revision      │ Close. Fix typos, small      │
  │                     │ issues. ১-২ weeks.           │
  │ Major Revision      │ Very good. Significant work  │
  │                     │ needed but they want it.     │
  │                     │ ১-৩ months.                  │
  │ Reject & Resubmit   │ Rejected but invited to      │
  │                     │ resubmit as new paper.       │
  │ Reject              │ Not accepted. Try elsewhere. │
  └────────────────────┴──────────────────────────────┘

  KEY: Major Revision ≠ failure
       It means: "We want this paper, but it needs work"
       This is the MOST COMMON path to publication.

RESPONDING TO REVIEWERS:

  The Response Letter is AS IMPORTANT as the paper.
  
  Structure:
    ১. Thank the reviewer (always)
    ২. Quote the comment
    ৩. Your response
    ৪. What you changed (with page/line numbers)
  
  Tone: RESPECTFUL ALWAYS
    ❌ "The reviewer is wrong"
    ✅ "We appreciate this concern. However, 
       [evidence] suggests..."
    
    ❌ "This is obvious"
    ✅ "We have clarified this in Section X"
    
    ❌ "We disagree"
    ✅ "We understand the reviewer's perspective. 
       In our context, [explanation]. We have added 
       a note about this limitation."
  
  If reviewer asks for new experiments:
    → if feasible: DO THEM
    → if not: explain why, offer alternative
    → NEVER ignore a comment

THE REVISION TIMELINE:

  Day ১-২: Read all comments. Process emotionally.
    (yes, it hurts. Take ২ days to feel it.)
  
  Day ৩-৫: Plan revisions. Categorize comments:
    → Category A: easy fixes (typos, clarifications)
    → Category B: medium (new analysis, figure changes)
    → Category C: hard (new experiments, major rewrite)
  
  Day ৬-৩০: Execute revisions.
    → Start with A (quick wins, builds momentum)
    → Then B
    → Then C (most time)
  
  Day ৩১-৩৩: Write response letter.
    → address EVERY comment
    → be specific (page X, line Y)
    → be grateful
  
  Day ৩৪: Resubmit.

CHOOSING WHERE TO SUBMIT:

  ┌──────────────────┬──────────────────────────────┐
  │ Venue             │ Acceptance Rate              │
  ├──────────────────┼──────────────────────────────┤
  │ Top conf (NeurIPS)│ ~২০-২৫%                      │
  │ Top journal       │ ~১৫-২০%                      │
  │ Mid conference    │ ~৩০%                         │
  │ Mid journal       │ ~২৫%                         │
  │ Workshop          │ ~৪০-৫০%                      │
  │ arXiv (preprint)  │ ১০০% (no review)             │
  └──────────────────┴──────────────────────────────┘

  Strategy for first paper:
    ১. arXiv preprint (establish priority, get feedback)
    ২. Workshop (lower bar, good experience)
    ৩. Mid conference/journal (realistic)
    ৪. THEN aim for top venues

REJECTION = NOT FAILURE:

  Famous rejected papers:
    → Google's original PageRank paper was rejected
    → Nobel Prize-winning CRISPR papers faced rejection
    → "The payoff would be small" — reviewer of 
       TCP/IP (the protocol that runs the internet)
  
  Rejection means: try elsewhere, or revise.
  It does NOT mean: your research is worthless.
  
  "Papers are like swords. They get sharper 
   with each strike of the reviewer's hammer."</div>

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

<div class="code-block">USING PAPERS — The Three Connections:

১. CITATION (Acknowledgment)
  
  Citing = giving credit where due.
  NOT citing = plagiarism (academic death sentence).
  
  When to cite:
    → using their method → cite
    → using their dataset → cite
    → their idea inspired yours → cite
    → comparing with their results → cite
    → "Prior work [X] showed..." → cite X
  
  Citation styles:
    → \\cite{author২০২৩} in LaTeX
    → APA, IEEE, ACM formats
    → Zotero handles formatting automatically
  
  Golden rule: OVER-cite, never under-cite.
    → better to cite unnecessarily than plagiarize
    → reviewers check for missing citations
    → missing a key reference → instant reject

২. EXTENSION (Building On)
  
  This is how science ADVANCES:
    Paper A proposes method X
    Paper B extends X for domain Y
    Paper C improves X's accuracy
    Paper D combines X with method Z
  
  YOUR paper should:
    → clearly state what's from prior work
    → clearly state what's YOUR contribution
    → "Building on [A], we propose [B] which adds..."
  
  Types of extension:
    a. DOMAIN TRANSFER
       → "Method X works on English. We apply to Bengali."
       → legitimate IF the transfer is non-trivial
       → show WHY it needed adaptation
    
    b. METHOD IMPROVEMENT  
       → "Method X has limitation Y. We fix Y."
       → show COMPARISON with original X
       → show MEASURABLE improvement
    
    c. COMBINATION
       → "Method A does X. Method B does Y.
          We combine A+B to do X+Y."
       → show NEITHER alone works as well
    
    d. SCALE
       → "Method X was tested on ১০০ items.
          We test on ১০,০০০."
       → legitimate IF scale reveals new insights

৩. REPRODUCTION (Verification)
  
  The highest form of respect: REPRODUCE their work.
  
  "I ran your method on your data with your code.
   Here's what I found."
  
  Why reproduce?
    → catches errors (replication crisis!)
    → builds trust in the method
    → positions YOU as an expert
    → publication-worthy (reproduction papers exist)
  
  Reproduction paper structure:
    → "We reproduce [X]'s results..."
    → "Our results match/differ from original..."
    → "We identify [discrepancy]..."
    → "This suggests [insight]..."
  
  The ML reproduction workflow:
    ১. Clone their repo
    ২. Run on their data (exactly as described)
    ৩. Compare numbers with their reported results
    ৪. If match: method is reproducible ✓
    ৫. If differ: investigate WHY (seed? data? bug?)
    ৬. Run on YOUR data (domain transfer test)
    ৭. Document everything → becomes YOUR paper

THE RESEARCH CYCLE (your place in it):

  ┌──────────────────────────────────────────────┐
  │ THE KNOWLEDGE CHAIN                           │
  │                                               │
  │  [Paper A] → [Paper B] → [Paper C] → [YOU]   │
  │     ↓           ↓           ↓        ↓       │
  │  method X   improved X   applied X  extend X │
  │     ↓           ↓           ↓        ↓       │
  │  [Paper E] ← [Paper D] ← [YOUR PAPER] ←──────┘
  │     ↓
  │  future work builds on YOU
  │                                               │
  │  You are both:                                │
  │  → STANDING ON prior work (cite)              │
  │  → LEAVING GROUND for future work (contribute)│
  └──────────────────────────────────────────────┘

PRACTICAL: TURNING READING INTO BUILDING

  When you read a paper with engineering intent:
  
    ১. Read Methods → understand the approach
    ২. Find code → clone, run
    ৩. Test on YOUR data → does it work?
    ৪. Identify limitation → what doesn't work?
    ৫. Propose fix → how to improve?
    ৬. Implement fix → code + experiments
    ৭. Compare → original vs your improvement
    ৮. Write paper → "We improve [X] by [Y]"
  
  This is a COMPLETE research arc from reading ONE paper.
  One paper → one idea → one experiment → one paper.
  The cycle continues.</div>

<div class="dialogue">সিলসিলা — chain, connection, linkage। কুরআনে আল্লাহ বলেন — "তোমরা সবাই আল্লাহর রশি দৃঢ়ভাবে ধরো, একসাথে।" (৩:১০৩)। একসাথে = সিলসিলা। research-ও সিলসিলা — জ্ঞানের শৃঙ্খল। প্রতিটা paper আগের paper-এর সাথে সংযুক্ত। তুমি নতুন লিঙ্ক — পুরোনো সংযুক্ত, নতুন সৃষ্টি, ভবিষ্যতের জন্য ছেড়ে যাও। যে সিলসিলা ভাঙে (plagiarism), সে বিচ্ছিন্ন হয়। যে সিলসিলা মানে (cite), সে সম্মানিত হয়। যে সিলসিলা বাড়ায় (extend), সে সৃষ্টি করে। সিলসিলা — জ্ঞানের শৃঙ্খলে নিজের যোগ।</div>
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

<div class="code-block">COMPLETE RESEARCH WORKFLOW — The Synthesis:

┌──────────────────────────────────────────────────┐
│ THE RESEARCH ARCHITECT'S STACK                    │
├──────────────────────────────────────────────────┤
│                                                    │
│  PHASE ১: READ (Doors ১-৪)                       │
│  ├── Paper anatomy: IMRaD structure               │
│  ├── Engineer's read: extract code + methods      │
│  ├── Scientist's eye: verify claims               │
│  └── PhD reader: find gaps in the field           │
│                                                    │
│  PHASE ২: DISCOVER (Door ৫)                      │
│  ├── From gaps → research questions               │
│  ├── FINER test: feasible, interesting, novel?    │
│  └── Choose ONE question to pursue                │
│                                                    │
│  PHASE ৩: BUILD (Doors ৬-৭)                      │
│  ├── Outline: IMRaD blueprint                     │
│  ├── Methods: implement your approach             │
│  ├── Experiments: run, measure, ablate            │
│  └── Draft: shitty first → polished final         │
│                                                    │
│  PHASE ৪: PUBLISH (Door ৮)                        │
│  ├── Submit to venue (conference/journal)         │
│  ├── Peer review: accept, revise, resubmit        │
│  ├── Response letter: respectful, thorough        │
│  └── Camera-ready → published                     │
│                                                    │
│  PHASE ৫: CONNECT (Door ৯)                        │
│  ├── Cite properly (silsila)                      │
│  ├── Release code + data (open science)           │
│  ├── Others build on YOUR work                    │
│  └── You are now part of the chain                │
│                                                    │
└──────────────────────────────────────────────────┘

THE CROSS-BOOK SYNTHESIS:

  This book connects to ALL previous books:
  
  ┌──────────────┬────────────────────────────────┐
  │ Book         │ Connection to Research Papers  │
  ├──────────────┼────────────────────────────────┤
  │ Book ৮ (PhD) │ Research paper = PhD currency  │
  │              │ Papers = your academic value   │
  ├──────────────┼────────────────────────────────┤
  │ Book ২৩      │ Power dynamics in peer review  │
  │ (Psych)      │ Reviewer = power; stay calm    │
  ├──────────────┼────────────────────────────────┤
  │ Book ২৪      │ Adler, Luhmann, Feynman →      │
  │ (Knowledge)  │ applied to research papers     │
  │              │ Zettelkasten for lit review    │
  ├──────────────┼────────────────────────────────┤
  │ Book ৭       │ Deep analysis = Feynman +      │
  │ (Learn)      │ critical reading combined      │
  ├──────────────┼────────────────────────────────┤
  │ Book ২২      │ Timeless value: research       │
  │ (Irreplaceable│ skills compound over years    │
  │  Engineer)   │ Publication record = assets    │
  └──────────────┴────────────────────────────────┘

THE RESEARCH TOOLKIT:

  ┌──────────────┬──────────────────────────────┐
  │ Function      │ Tool                         │
  ├──────────────┼──────────────────────────────┤
  │ Find papers   │ Google Scholar, arXiv        │
  │ Manage refs   │ Zotero (free)                │
  │ Visualize     │ Connected Papers             │
  │ Code          │ Papers With Code, GitHub     │
  │ Write         │ Overleaf (LaTeX)             │
  │ Figures       │ matplotlib, draw.io          │
  │ Notes         │ Obsidian (Zettelkasten)      │
  │ Stats         │ Python (scipy, statsmodels)  │
  │ Preprints     │ arXiv                        │
  │ Collaboration │ Overleaf, Google Docs        │
  └──────────────┴──────────────────────────────┘

YOUR FIRST PAPER — 90-DAY PLAN:

  Week ১-২: Read ৫-২০ papers (Door ৪)
    → identify subfield landscape
    → find ৩ gaps
  
  Week ৩: Formulate research question (Door ৫)
    → FINER test
    → choose ONE question
  
  Week ৪-৬: Implement + experiment (Door ৬-৭)
    → code your method
    → run experiments
    → ablation study
    → create figures
  
  Week ৭-৮: Write first draft (Door ৭)
    → Methods first, then Results, then Discussion
    → Introduction and Abstract LAST
    → get feedback from advisor/peers
  
  Week ৯: Revise (Door ৬-৭)
    → structural edit
    → line edit
    → polish
  
  Week ১০: Submit (Door ৮)
    → arXiv preprint
    → submit to venue
  
  Week ১১-১২: Wait, then revise based on reviews
    → response letter
    → resubmit
  
  Week ১৩: PUBLISHED.
    → you are now a researcher.

THE FINAL PRINCIPLE:

  Reading papers makes you INFORMED.
  Analyzing papers makes you CRITICAL.
  Writing papers makes you a CONTRIBUTOR.
  Building on papers makes you a RESEARCHER.
  
  The progression:
    Consumer → Reader → Analyzer → Writer → Builder → Architect
  
  You started this book as a consumer.
  You finish as an architect.
  
  The knowledge chain is infinite.
  You are now a link in it.
  
  হিকমাহ — applied knowledge. Not just knowing — DOING.
  Not just reading — CREATING.
  Not just consuming — CONTRIBUTING.
  
  This is the research paper craftsman.</div>

<div class="verse">"তিনি মানুষকে শিখিয়েছেন কলমের মাধ্যমে। মানুষকে শিখিয়েছেন যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>গবেষণাপত্র = জ্ঞানের সম্প্রসারণ। তুমি পড়ো, বোঝো, যাচাই করো, প্রশ্ন করো, গবেষণা করো, লেখো, প্রকাশ করো। তোমার পত্র পরে কেউ পড়বে, সংযুক্ত করবে, প্রসারিত করবে। এটাই জ্ঞানের শৃঙ্খল — প্রতিটা প্রজন্ম আগের কাঁধে দাঁড়ায়। তুমি এখন সেই শৃঙ্খলে একটি লিঙ্ক। হিকমাহ — প্রয়োগকৃত জ্ঞান। যে প্রয়োগ করে, সে জানে। যে জানে, সে সৃষ্টি করে। যে সৃষ্টি করে, সে অবিচ্ছেয্য।</div>

<div class="secret-box"><div class="label">দশম দরজা — সমন্বয়</div><div class="text">🚀 Research Architect = Read + Verify + Question + Write + Publish + Connect।<br><small>তুমি এখন consumer নয় — contributor। জ্ঞানের শৃঙ্খলে তোমার নিজের লিঙ্ক। হিকমাহ — প্রয়োগকৃত জ্ঞান।</small></div></div>`
});
