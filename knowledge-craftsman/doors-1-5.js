// ════════════════════════════════════════
// জ্ঞানের কারিগর — DOORS 1-5
// Reading/Thinking/Writing: Why Reading Fails → How Great Minds Read
// All claims backed by named researchers and biographical sources
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: WHY MOST READING FAILS ══
doors.push({
  num:1, icon:"📖", color:"#f59e0b", name:"ছিদ্র বালতির কক্ষ",
  subtitle:"The Leaking Bucket", tech:"Why 90% of Reading Is Forgotten (Ebbinghaus, 1885)",
  spirit:"যাওয়া পানি — বহন কিন্তু ধরে রাখা নয়",
  secret:"Ebbinghaus (১৮৮৫) প্রমাণ করেছিলেন — পড়ার ২ সপ্তাহ পর ৯০% ভুলে যাই। চোখ দিয়ে দেখা = পানি বহন করা ছিদ্র বালতিতে। কিন্তু সমাধান আছে — active reading, note-taking, spaced repetition। পড়া শেষ নয় — ধরে রাখাই শুরু। যে ধরে রাখে, সে জানে। যে শুধু পড়ে, সে বহন করে।",
  recall:{
    q:"Ebbinghaus-র ভুলে যাওয়ার বক্ররেখা কী বলে?",
    qen:"What does Ebbinghaus forgetting curve say?",
    a:"২ সপ্তাহে ৯০% ভুলে যাই। Ebbinghaus (১৮৮৫)। চোখ দিয়ে পড়া = ছিদ্র বালতিতে পানি। সমাধান: active reading, note-taking, spaced repetition। ধরে রাখাই আসল কাজ।",
    aen:"90% forgotten in 2 weeks. Ebbinghaus (1885). Reading with eyes = water in leaking bucket. Fix: active reading, notes, spaced repetition. Retention is the real work."
  },
  story:`<p class="scene-setting">১৮৮৫ সাল। জার্মানি। মনোবিজ্ঞানী হারমান এবিংহাউস (Hermann Ebbinghaus) একটা অদ্ভুত পরীক্ষা করলেন। তিনি অর্থহীন শব্দের তালিকা মুখস্থ করে সময় ধরে কতটা ভুলে যান তা গণনা করলেন। ফলাফল স্তম্ভিত করা — ১ ঘণ্টায় ৫০% ভুলে গেলেন। ১ দিনে ৭০%। ১ সপ্তাহে ৮০%। ২ সপ্তাহে ৯০%। এটাই Ebbinghaus Forgetting Curve — মানুষের স্মৃতির সবচেয়ে নির্মম সত্য।</p>
<p class="scene-setting en">1885. Germany. Psychologist Hermann Ebbinghaus did a strange experiment. He memorized lists of meaningless syllables and tracked how much he forgot over time. The results were staggering — in 1 hour: 50% forgotten. In 1 day: 70%. In 1 week: 80%. In 2 weeks: 90%. This is the Ebbinghaus Forgetting Curve — the most brutal truth about human memory.</p>

<div class="dialogue">তুমি ভাবো — আমি তো বই পড়েছি! কিন্তু ২ সপ্তাহ পর কতটা মনে আছে? Ebbinghaus বলেন — ১০%। ৯০% গেছে। তুমি বই পড়েছ কিন্তু জ্ঞান ধরে রাখোনি। পানি বহন করেছ — ছিদ্র বালতিতে। এটাই প্যাসিভ রিডিং — চোখ চলে, মস্তিষ্ক ধরে না। কিন্তু সমাধান আছে। ছিদ্র বন্ধ করা যায়।</div>
<div class="dialogue en">"You think — I read the book! But how much remains after 2 weeks? Ebbinghaus says — 10%. 90% is gone. You read but didn't retain knowledge. You carried water — in a leaking bucket. This is passive reading — eyes move, brain doesn't hold. But there's a fix. The holes can be plugged."</div>

<div class="code-block">THE FORGETTING CURVE — ভুলে যাওয়ার বিজ্ঞান:

EBBINGHAUS FORGETTING CURVE (1885):

  ┌──────────┬────────────┬────────────┐
  │ Time     │ Retained   │ Forgotten  │
  ├──────────┼────────────┼────────────┤
  │ এখন      │ ১০০%       │ ০%         │
  │ ২০ মিনিট │ ৫৮%        │ ৪২%        │
  │ ১ ঘণ্টা  │ ৪৪%        │ ৫৬%        │
  │ ৯ ঘণ্টা  │ ৩৬%        │ ৬৪%        │
  │ ১ দিন    │ ৩৩%        │ ৬৭%        │
  │ ২ দিন    │ ২৮%        │ ৭২%        │
  │ ৬ দিন    │ ২৫%        │ ৭৫%        │
  │ ৩১ দিন   │ ২১%        │ ৭৯%        │
  └──────────┴────────────┴────────────┘

  → "I read a book last year" = effectively NEW again
  → unless you used retention techniques

PASSIVE vs ACTIVE READING:

  ┌────────────────────┬────────────────────────┐
  │ PASSIVE READING     │ ACTIVE READING          │
  │ (forgetting)        │ (retention)             │
  ├────────────────────┼────────────────────────┤
  │ eyes scan words     │ mind questions words    │
  │ "I read it"         │ "what did I learn?"     │
  │ no notes            │ notes after each section│
  │ never re-reads      │ spaced re-reads         │
  │ no connection to    │ connects to what they   │
  │ what they know      │ already know            │
  │ retention: ১০%      │ retention: ৭০-৯০%       │
  └────────────────────┴────────────────────────┘

THE FIX — Three Plugs for the Leaking Bucket:

১. ACTIVE ENGAGEMENT (Maryanne Wolf, 2018):
  
  Wolf's research on "deep reading circuits":
  → passive reading activates ONLY visual cortex
  → deep reading activates: visual + language +
    executive function + empathy + analysis
  → different brain networks entirely
  
  Deep reading requires:
    → QUESTIONING: "Is this true? Why?"
    → CONNECTING: "How does this relate to X?"
    → PREDICTING: "What comes next?"
    → EVALUATING: "Is the argument strong?"
  
  → passive reader = consumer
  → active reader = interrogator

২. SPACED REPETITION (Ebbinghaus's own solution):
  
  Ebbinghaus also discovered the fix:
    → review after ২০ min → retention jumps
    → review again after ১ day → retention jumps
    → review again after ১ week → near permanent
    
    Each review FLATTENS the forgetting curve
    → eventually: flat line (permanent memory)
  
  Applied to reading:
    → Day ১: read + take notes
    → Day ২: review notes (৫ min)
    → Day ৭: review + summarize (১০ min)
    → Day ৩০: review + teach someone (১৫ min)
    → Day ৯০: final review → permanent

৩. THE TESTING EFFECT (Roediger & Karpicke, 2006):
  
  Study: students read a text
    Group A: re-read ৩ times
    Group B: read once + took a test
  
  Result (১ week later):
    Group A (re-readers): ৪২% retention
    Group B (test-takers): ৫৬% retention
  
  → TESTING yourself beats RE-READING
  → force recall → brain strengthens memory
  → this is why notes + teaching > re-reading

THE READING RETENTION EQUATION:

  Retention = Comprehension × Engagement × Repetition
  
  Comprehension: understand WHAT you read (Door ২)
  Engagement: actively QUESTION while reading (Door ৪)
  Repetition: spaced REVIEW over time (Door ৩)
  
  If ANY factor = ০ → retention = ০
  
  Most readers: comprehension ✓, engagement ✗, repetition ✗
  → retention = comprehension × ০ × ০ = ০

THE GOAL:
  Not "I read ৫০ books this year"
  But "I deeply learned from ৫ books this year"
  
  Naval Ravikant: "Read fewer books, more carefully.
   Re-read the great ones ৫-১০ times."</div>

<div class="dialogue">যাওয়া পানি — pouring water, like water that flows through and leaves nothing। কুরআনে আল্লাহ বলেন — "তাদের উপমা এমন যেন তারা বৃষ্টিতে আচ্ছাদিত — কিন্তু কিছু নেই।" পড়াও তেমনি — চোখ দিয়ে পড়ে, মস্তিষ্কে কিছু থাকে না। যাওয়া পানি। কিন্তু কুরআন আরও বলে — "যারা জ্ঞান দেওয়া হয়েছে, তাদের অন্তর সত্যের জন্য পিপাসার্ত।" পিপাসা = গভীর পড়া। যে গভীর পড়ে, সে ধরে রাখে। যে শুধু চোখ চালায়, সে যাওয়া পানি। প্রথম দরজার সত্য — পড়া শেষ নয়, ধরে রাখাই শুরু।</div>
<div class="dialogue en">"Jaoa pani — pouring water, like water that flows through leaving nothing. Allah says — 'Their example is as if they were covered by rain — but have nothing.' Reading too — eyes read, brain holds nothing. Jaoa pani. But the Quran also says — 'Those given knowledge, their hearts thirst for truth.' Thirst = deep reading. One who reads deeply, retains. One who merely moves eyes, is jaoa pani. The first door's truth — reading is not the end, retention is the beginning."</div>`,
  senior:{
    title:"Stop Leaking — 3 Habits Today",
    body:`<p><strong>Right now, for the last book/article you read:</strong></p><p>১. Write ৩ things you remember WITHOUT looking. (Testing effect — this is harder than you think.)</p><p>২. If you can't remember ৩ — you were passive reading. That's the leaking bucket.</p><p><strong>Starting today:</strong></p><p>১. After every chapter: write ২-৩ sentences summarizing what you learned. (Active engagement)</p><p>২. Review those notes ২৪ hours later. Then ৭ days later. (Spaced repetition)</p><p>৩. Explain what you read to someone. If you can't explain it simply, you didn't understand it. (Feynman technique — Door ৪)</p><p><strong>Naval's rule:</strong> "Read fewer books, more carefully. Re-read the great ones 5-10 times."</p>`
  }
});

// ══ DOOR 2: ADLER'S FOUR LEVELS ══
doors.push({
  num:2, icon:"🔍", color:"#fcd34d", name:"চার স্তরের কক্ষ",
  subtitle:"The Four Levels", tech:"Adler's How to Read a Book (1940/1972)",
  spirit:"তারাবি — ধাপে ধাপে গভীরে যাওয়া",
  secret:"Mortimer Adler (১৯৪০) দেখালেন — পড়ার ৪ স্তর আছে। Elementary (শব্দ চেনা), Inspectional (৫ মিনিটে সারাংশ), Analytical (গভীর বিশ্লেষণ), Syntopical (একাধিক বইয়ের সংশ্লেষণ)। অধিকাংশ মানুষ শুধু ১ম স্তরে আটকে। সফল পাঠক ৪র্থ স্তরে পৌঁছায়। তারাবি — ধাপে ধাপে গভীরে।",
  recall:{
    q:"Adler-এর ৪ স্তর কী কী?",
    qen:"What are Adler's 4 levels?",
    a:"Elementary (শব্দ চেনা), Inspectional (৫ মিনিট সারাংশ), Analytical (গভীর বিশ্লেষণ), Syntopical (বহু বইয়ের সংশ্লেষণ)। Adler (১৯৪০)। অধিকাংশ ১ম স্তরে আটকে। সফল পাঠক ৪র্থে। তারাবি — ধাপে ধাপে।",
    aen:"Elementary (word recognition), Inspectional (5-min skim), Analytical (deep analysis), Syntopical (multi-book synthesis). Adler (1940). Most stuck at level 1. Successful readers reach level 4."
  },
  story:`<p class="scene-setting">১৯৪০ সাল। শিকাগো বিশ্ববিদ্যালয়। দার্শনিক মর্টিমার অ্যাডলার (Mortimer Adler) একটা বই প্রকাশ করলেন — How to Read a Book। সবাই হাসল — পড়তে শেখায় কে? কিন্তু Adler বললেন — তুমি যা করছ তা আসলে পড়া নয়। শব্দ চেনা। প্রকৃত পড়া ৪টা স্তরে। তুমি প্রথম স্তরে আটকে। ১৯৭২ সালে তিনি বইটা আপডেট করলেন — Charles Van Doren-এর সাথে। আজও এটা পড়ার পদ্ধতির বাইবেল।</p>
<p class="scene-setting en">1940. University of Chicago. Philosopher Mortimer Adler published a book — How to Read a Book. Everyone laughed — who needs to learn reading? But Adler said — what you're doing isn't reading. It's word recognition. True reading has 4 levels. You're stuck at the first. In 1972, he updated it with Charles Van Doren. It remains the bible of reading methodology today.</p>

<div class="dialogue">Ebbinghaus বলেছিলেন — কেন ভুলে যাই। Adler বলেন — কারণ তুমি আসলে পড়ছই না। তুমি শব্দ দেখছ। পড়ার ৪টা স্তর আছে — প্রতিটা আগেরটার চেয়ে গভীর। যে প্রথম স্তরে আটকে, সে বলে — আমি বই পড়েছি। কিন্তু সে শুধু শব্দ দেখেছে। যে চতুর্থ স্তরে পৌঁছায়, সে বইয়ের সাথে কথা বলে, প্রশ্ন করে, সংযুক্ত করে।</div>
<div class="dialogue en">"Ebbinghaus said — why we forget. Adler says — because you're not actually reading. You're seeing words. Reading has 4 levels — each deeper than the last. One stuck at level 1 says — I read the book. But they just saw words. One who reaches level 4 talks WITH the book, questions it, connects it."</div>

<div class="code-block">ADLER'S FOUR LEVELS OF READING:

LEVEL ১: ELEMENTARY (Basic Reading)
  → what you learn in school
  → "can you read the words?"
  → recognize letters, words, sentences
  → understand literal meaning
  
  Example: "The cat sat on the mat"
  → elementary reader: I understand the sentence
  → this is NOT reading — this is decoding
  
  Most people NEVER go beyond this level.
  They "read" books but are still at level ১.

LEVEL ২: INSPECTIONAL (Skimming / Systematic Skimming)
  → "what is this book ABOUT?"
  → ৫-১৫ minutes per book
  
  Adler's inspectional method:
    ১. Read TITLE + SUBTITLE → what's the scope?
    ২. Read PREFACE → author's purpose
    ৩. Study TABLE OF CONTENTS → structure
    ৪. Read PUBLISHER'S BLURB → positioning
    ৫. Check INDEX → key terms
    ৬. Read FIRST & LAST paragraphs of key chapters
    ৭. Read the LAST ২-৩ pages → author's conclusion
  
  Purpose: decide IF to read the full book
  → most books don't deserve full reading
  → inspectional reading saves MONTHS of life
  
  Rule: skim ১০ books to find ১ worth reading deeply

LEVEL ৩: ANALYTICAL (Deep Reading)
  → "what does this book MEAN?"
  → thorough, complete, active
  
  Adler's analytical method (৪ stages):
  
    Stage ১: STRUCTURE (what is it about?)
      → identify the main theme in ১ sentence
      → outline the book's structure
      → define the problem the author solves
    
    Stage ২: INTERPRETATION (what does it say?)
      → identify key TERMS (author's vocabulary)
      → grasp the main PROPOSITIONS (key sentences)
      → understand the ARGUMENT (how propositions connect)
    
    Stage ৩: CRITICISM (is it true?)
      → ONLY after you fully understand
      → "I understand but disagree" (valid)
      → "I don't understand" (not ready to disagree)
      
      Adler's ৪ ways to disagree:
        ১. "You are UNINFORMED" (missing evidence)
        ২. "You are MISINFORMED" (wrong evidence)
        ৩. "You are ILLOGICAL" (reasoning is flawed)
        ৪. "Your analysis is INCOMPLETE" 
           (missed something important)
      
      → NOT allowed: "I disagree because I feel X"
      → must provide SPECIFIC evidence
    
    Stage ৪: SYNTHESIS (how does it connect?)
      → how does this book relate to others?
      → what new questions does it raise?
      → this leads to Level ৪

LEVEL ৪: SYNTOPICAL (Multi-Book Synthesis)
  → "how do MULTIPLE books relate?"
  → the HIGHEST level of reading
  → reading SEVERAL books on ONE topic
    and SYNTHESIZING them
  
  Adler's syntopical method:
    ১. Create a BIBLIOGRAPHY (find the best books)
    ২. Inspectional-read ALL of them
    ৩. Identify the KEY QUESTIONS they answer
    ৪. Define the ISSUES (where authors disagree)
    ৫. Analyze the DISCUSSION (map agreements
       and disagreements)
    ৬. SYNTHESIZE (your own view from all sources)
  
  Example syntopical topic: "What is intelligence?"
    → read Gardner (multiple intelligences)
    → read Spearman (g-factor)
    → read Sternberg (triarchic)
    → read Gladwell (practical)
    → synthesize: what do they agree on? 
       disagree on? what's MY view?
  
  → this is what PhD students DO
  → this is what researchers DO
  → this is what great writers DO

THE PROGRESSION:
  
  Level ১ → ২: months of practice
  Level ২ → ৩: years of practice  
  Level ৩ → ৪: decade of practice
  
  BUT: you can START at Level ২ today
  → skim before you read
  → most books aren't worth Level ৩
  → save Level ৩ for the books that matter</div>

<div class="dialogue">তারাবি — gradual progression, like the tarawih prayer built in layers। রমজানে তারাবি ধীরে ধীরে গড়ে — প্রতিদিন একটু বেশি। পড়াও তেমনি — প্রতিটা স্তর ধীরে আসে। প্রথম স্তর = শিশু। দ্বিতীয় = কিশোর। তৃতীয় = প্রাপ্তবয়স্ক। চতুর্থ = প্রবীণ। কেউ রাতারাতি চতুর্থ স্তরে পৌঁছায় না। কিন্তু প্রতিটা ধাপে গভীরতা বাড়ে। Adler দেখালেন — পড়া একটা শিল্প, শিল্পে সময় লাগে। তারাবি — ধাপে ধাপে গভীরে।</div>
<div class="dialogue en">"Tarawi — gradual progression, like the tarawih prayer built in layers. In Ramadan, tarawih grows slowly — a bit more each day. Reading too — each level comes slowly. Level 1 = child. Level 2 = adolescent. Level 3 = adult. Level 4 = elder. Nobody reaches level 4 overnight. But depth grows at each step. Adler showed — reading is an art, art takes time. Tarawi — step by step deeper."</div>`,
  senior:{
    title:"Adler's Method — Try This Weekend",
    body:`<p><strong>Pick a book you've been meaning to read. Do this:</strong></p><p><strong>Step ১ (Level ২ — ১৫ min):</strong> Read title, subtitle, preface, TOC, index. Read first and last paragraph of each chapter. Read the final ৩ pages. Now answer: "What is this book about?" in ১ sentence.</p><p><strong>Step ২ (Decision):</strong> Based on your skim — is this book worth Level ৩ (full analytical reading)? If NO — you just saved ১০ hours. If YES — proceed.</p><p><strong>Step ৩ (Level ৩):</strong> Read slowly. After each chapter: (a) what's the main point in ১ sentence? (b) what are the key terms? (c) do I agree or disagree — and WHY (specifically)?</p><p><strong>Adler's golden rule:</strong> "Do not say 'I agree' or 'I disagree' until you can say 'I understand.'" Most disagreements come from misunderstanding, not genuine critique.</p>`
  }
});

// ══ DOOR 3: ZETTELKASTEN ══
doors.push({
  num:3, icon:"📝", color:"#f59e0b", name:"নোটের ভাণ্ডার",
  subtitle:"The Note Vault", tech:"Zettelkasten (Luhmann, 1952-1998)",
  spirit:"হিফজ — সংরক্ষণ, ধরে রাখা",
  secret:"Niklas Luhmann — জার্মান সমাজবিজ্ঞানী। ৪৬ বছরে ৯০,০০০ নোট কার্ড। ফল? ৭০+ বই, ৪০০+ প্রবন্ধ। কীভাবে? Zettelkasten — slip-box পদ্ধতি। প্রতিটা নোট atomic, সংযুক্ত, স্থায়ী। নোট = শুধু লেখা নয় — চিন্তার সংযোগ। যে সংযুক্ত করে, সে জ্ঞান গড়ে। যে শুধু পড়ে, সে ভুলে।",
  recall:{
    q:"Luhmann-এর Zettelkasten কেন এত শক্তিশালী?",
    qen:"Why is Luhmann's Zettelkasten so powerful?",
    a:"৯০,০০০ নোট → ৭০+ বই, ৪০০+ প্রবন্ধ। কারণ নোট atomic, সংযুক্ত, স্থায়ী। নোট = চিন্তার সংযোগ। যে সংযুক্ত করে, সে জ্ঞান গড়ে। হিফজ — সংরক্ষণ।",
    aen:"90,000 notes → 70+ books, 400+ articles. Because notes are atomic, linked, permanent. Notes = connections of thought. One who connects, builds knowledge. Hifz — preservation."
  },
  story:`<p class="scene-setting">১৯৫২ সাল। জার্মানি। একজন সরকারি কর্মচারী — নিকলাস লুহমান (Niklas Luhmann)। সন্ধ্যায় সমাজবিজ্ঞান পড়তেন। নোট নিতেন — কিন্তু সাধারণ নোট নয়। প্রতিটা নোট একটা ছোট কার্ডে। প্রতিটা কার্ডে একটা ধারণা। প্রতিটা কার্ড অন্য কার্ডের সাথে সংযুক্ত। ৪৬ বছর ধরে এই কাজ চলল। শেষে? ৯০,০০০ কার্ড। এই কার্ড থেকে ৭০+ বই, ৪০০+ প্রবন্ধ। তিনি অসাধারণ প্রায়োগিক সমাজবিজ্ঞানী হলেন — শুধু নোট কার্ড দিয়ে।</p>
<p class="scene-setting en">1952. Germany. A civil servant — Niklas Luhmann. In the evenings, he read sociology. He took notes — but not ordinary notes. Each note on a small card. Each card had ONE idea. Each card linked to other cards. This continued for 46 years. Result? 90,000 cards. From these cards: 70+ books, 400+ articles. He became one of the most productive sociologists ever — just from note cards.</p>

<div class="dialogue">Adler বলেছিলেন — ৪ স্তরে পড়ো। কিন্তু আমি বলি — পড়ে যা শিখলে, তা কোথায় রাখবে? মস্তিষ্কে? Ebbinghaus বলেন — ৯০% ভুলে যাবে। খাতায়? খাতা হারিয়ে যায়। Luhmann দেখালেন একটা সিস্টেম — Zettelkasten। নোট শুধু লেখা নয় — চিন্তার জাল। প্রতিটা নোট একটা নোড, প্রতিটা সংযোগ একটা সেতু। জাল বড় হয়, জ্ঞান গভীর হয়।</div>
<div class="dialogue en">"Adler said — read at 4 levels. But I say — once you learn, where do you store it? Brain? Ebbinghaus says — 90% forgotten. Notebook? Notebooks get lost. Luhmann showed a system — Zettelkasten. Notes aren't just writing — they're a web of thought. Each note a node, each connection a bridge. The web grows, knowledge deepens."</div>

<div class="code-block">ZETTELKASTEN — The Slip-Box System:

LUHMANN'S NUMBERS (validated by biographers):
  
  Duration: 1952-1998 (৪৬ years)
  Total cards: ~৯০,০০০
  Output: ৭০+ books, ৪০০+ scholarly articles
  Rate: roughly ৫-৬ cards per day
  
  His claim: "I don't think of myself 
    as creative. I just stand at the 
    machine and turn the crank."
  → the SYSTEM produced the creativity
  → not the person — the SLIP-BOX

THE ৩ TYPES OF NOTES (Sönke Ahrens, 2017):

১. FLEETING NOTES (temporary)
  → quick ideas while reading/living
  → throwaway quality
  → "interesting point about X"
  → review within ১-২ days → convert to 
    permanent or discard

২. LITERATURE NOTES (source-specific)
  → while reading a book/paper
  → brief summary of key points
  → written in YOUR OWN words (not copy!)
  → include source reference
  → "Luhmann (1984), p.১২: social systems 
    are communication networks, not persons"

৩. PERMANENT NOTES (the magic)
  → ONE idea per note (atomic)
  → written as if for publication
  → connected to existing notes (links)
  → in YOUR OWN words (full understanding)
  → dated and numbered
  
  Example permanent note:
    "2024-০৩-১৫ #learning #spaced-repetition
    Spaced repetition exploits the 
    forgetting curve. Each review 
    strengthens the memory trace.
    Links: [[Ebbinghaus 1885]], 
    [[testing effect 2006]]"

WHY ZETTELKASTEN WORKS:

  ┌──────────────────────────────────────┐
  │ TRADITIONAL NOTES                     │
  │ → written in notebooks                │
  │ → never looked at again               │
  │ → no connections between notes        │
  │ → by topic → topic-bound              │
  │ → LINEAR (list of facts)              │
  │ → output: nothing                     │
  ├──────────────────────────────────────┤
  │ ZETTELKASTEN                          │
  │ → each note is atomic (one idea)      │
  │ → notes LINKED to each other          │
  │ → cross-referenced                    │
  │ → by IDEA → topic-fluid               │
  │ → NETWORK (web of connections)        │
  │ → output: books, papers, insights     │
  └──────────────────────────────────────┘

  The KEY difference: CONNECTIONS
  
  A single note = one fact
  A network of notes = emergent ideas
  
  Luhmann's insight: creativity comes from
    UNEXPECTED CONNECTIONS between notes
    → note about "biology" connects to
      note about "economics" → new insight
    → he would follow links and discover
      connections he never planned

THE MODERN ZETTELKASTEN:

  Digital tools:
    → Obsidian (free, local, markdown) — সবচেয়ে জনপ্রিয়
    → Logseq (open-source, outliner)
    → Notion (database + linking)
    → Heptabase (object-based, visual cards)
    → Capacities / Tana (newer, typed objects)
    → Roam Research (cloud, daily notes — কিন্তু ২০২৪+
      এ জনপ্রিয়তা কমেছে)
    → Analog: physical index cards
      (Luhmann's original method)

  AI-assisted PKM (২০২৪-২০২৬):
    → Obsidian Smart Connections / Copilot —
      তোমার নোটের সাথে chat, auto-linked suggestions
    → Notion AI — summarize, draft, auto-fill
    → NotebookLM (Google) — multi-doc synthesis,
      source-grounded Q&A
    → Mem / Reflect — AI auto-organizes notes
    → ⚠️ সতর্কতা: AI মাঝে মাঝে ভুল সংযোগ বা
      অস্তিত্বহীন citation বানায়। verify করো।

  Best for beginners:
    → Obsidian (free, powerful, local)
    → start with ৩ types of notes
    → link EVERY new note to ১+ existing
    → review weekly: read random notes,
       find new connections

THE "HOW TO TAKE SMART NOTES" METHOD (Ahrens, 2017):

  Step ১: READ with pen in hand
    → write fleeting notes as you go
    → don't stop reading for long
  
  Step ২: REVIEW fleeting notes (same day)
    → convert to literature notes
    → write in your OWN words
    → include source
  
  Step ³: CREATE permanent notes (daily)
    → turn literature notes into 
      atomic permanent notes
    → one idea per note
    → link to ১+ existing notes
    → ask: "how does this connect?"
  
  Step ৪: DEVELOP ideas (weekly)
    → follow links between notes
    → build clusters of related ideas
    → these clusters become articles,
       chapters, books
  
  Step ৫: WRITE (the notes do the work)
    → assemble related notes
    → the ARGUMENT emerges from connections
    → you're not "writing from scratch"
    → you're assembling pre-thought ideas</div>

<div class="dialogue">হিফজ — preservation, memorization, the act of keeping। কুরআনে আল্লাহ বলেন — "নিশ্চয় আমরা কুরআন নাজিল করেছি এবং নিশ্চয় আমরাই এর সংরক্ষক।" (১৫:৯)। সংরক্ষণ = হিফজ। Zettelkasten-ও হিফজ — জ্ঞান সংরক্ষণ করা। কিন্তু শুধু সংরক্ষণ নয় — সংযুক্ত করা। যে হিফজ করে, সে ধরে রাখে। যে সংযুক্ত করে, সে গড়ে। Luhmann শুধু পড়েননি — তিনি হিফজ করেছেন, সংযুক্ত করেছেন, গড়েছেন। ৯০,০০০ নোট = একটা সংরক্ষিত জ্ঞানের মস্তিষ্ক। হিফজ — শুধু মুখস্থ নয়, সংযুক্ত সংরক্ষণ।</div>
<div class="dialogue en">"Hifz — preservation, memorization, the act of keeping. Allah says — 'We sent down the Quran and We are its preserver.' (15:9). Preservation = hifz. Zettelkasten too — preserving knowledge. But not just preserving — connecting. One who does hifz, retains. One who connects, builds. Luhmann didn't just read — he preserved, connected, built. 90,000 notes = a preserved knowledge brain. Hifz — not just memorization, connected preservation."</div>`,
  senior:{
    title:"Start Your Zettelkasten — Today",
    body:`<p><strong>Tool:</strong> Obsidian (free, obsidian.md) or analog index cards.</p><p><strong>Start with ৩ note types:</strong></p><p>১. <strong>Fleeting:</strong> Quick ideas while reading. Review within ২৪ hours.</p><p>২. <strong>Literature:</strong> Notes from what you read, in YOUR words, with source.</p><p>৩. <strong>Permanent:</strong> One atomic idea per note. Link to existing notes. Written as if for publication.</p><p><strong>The golden rule:</strong> Every new note MUST link to at least ১ existing note. This forces you to find connections — that's where insight lives.</p><p><strong>Luhmann's rate:</strong> ৫-৬ permanent notes per day. Even ১ per day = ৩৬৫ per year = a book's worth of ideas.</p>`
  }
});

// ══ DOOR 4: FEYNMAN TECHNIQUE ══
doors.push({
  num:4, icon:"🧠", color:"#fcd34d", name:"ফাইনম্যান কক্ষ",
  subtitle:"The Feynman Chamber", tech:"The Feynman Learning Technique",
  spirit:"বায়ান — স্পষ্ট বাক্য, প্রকাশ",
  secret:"রিচার্ড ফাইনম্যান (Richard Feynman) — নোবেলজয়ী পদার্থবিজ্ঞানী। তার শেখার পদ্ধতি: সহজ ভাষায় ব্যাখ্যা করো। যেখানে আটকাও — সেখানে তোমার ঘাটতি। ফিরে যাও, শেখো, আবার ব্যাখ্যা করো। যতক্ষণ না ১২ বছরের শিশু বুঝবে। এটাই ফাইনম্যান টেকনিক — বুঝতে না পারার অস্ত্র। বায়ান — স্পষ্ট বাক্যের নূর।",
  recall:{
    q:"ফাইনম্যান টেকনিকের ৪ ধাপ কী?",
    qen:"What are the 4 steps of the Feynman technique?",
    a:"১. সহজ ভাষায় ব্যাখ্যা করো (যেন শিশু বুঝবে)। ২. যেখানে আটকাও — সেই ঘাটতি। ৩. ফিরে যাও, শেখো। ৪. আবার ব্যাখ্যা করো, সরল করো। বায়ান — স্পষ্ট বাক্য।",
    aen:"1. Explain simply (as if to a child). 2. Where you get stuck — that's the gap. 3. Go back, learn. 4. Explain again, simplify. Bayan — clear speech."
  },
  story:`<p class="scene-setting">রিচার্ড ফাইনম্যান (Richard Feynman, 1918-1988) — নোবেলজয়ী পদার্থবিজ্ঞানী। কিন্তু তার আসল প্রতিভা শেখা নয় — শেখানো। Caltech-এ তার ছাত্ররা বলত — ফাইনম্যান যেকোনো জটিল ধারণা এত সহজ করে ব্যাখ্যা করত যে মনে হতো সেটা সহজই। কিন্তু ফাইনম্যান বলতেন — সহজ নয়। আমি নিজে বুঝি বলে সহজ করতে পারি। যে বোঝে না, সে জটিল করে। যে বোঝে, সে সহজ করে।</p>
<p class="scene-setting en">Richard Feynman (1918-1988) — Nobel Prize-winning physicist. But his real genius wasn't learning — it was teaching. At Caltech, students said — Feynman could explain any complex idea so simply it seemed easy. But Feynman said — it's not easy. I can make it simple because I understand it myself. One who doesn't understand, complicates. One who understands, simplifies.</p>

<div class="dialogue">Zettelkasten বলেছিলেন — নোট নাও, সংযুক্ত করো। কিন্তু আমি বলি — নোট নিলেও বুঝতে না পারলে কিছু হবে না। কীভাবে জানবে বুঝেছ কি না? ফাইনম্যান দেখালেন একটা পরীক্ষা — সহজ ভাষায় ব্যাখ্যা করো। যেখানে আটকাও, সেখানে তুমি বুঝতে পারোনি। এটাই ফাইনম্যান টেকনিক — বোঝার আসল পরীক্ষা।</div>
<div class="dialogue en">"Zettelkasten said — take notes, connect them. But I say — even with notes, if you don't understand, nothing happens. How do you know if you understand? Feynman showed a test — explain it simply. Where you get stuck, you don't understand. This is the Feynman technique — the real test of comprehension."</div>

<div class="code-block">THE FEYNMAN TECHNIQUE — The Test of Understanding:

THE ৪ STEPS:

  Step ১: CHOOSE A CONCEPT
    → pick something you "know"
    → write the concept name on a blank page
  
  Step ২: EXPLAIN IT SIMPLY
    → write an explanation as if for a ১২-year-old
    → no jargon, no technical terms
    → use analogies, everyday examples
    → if you MUST use a term, define it simply
  
    Example: "Quantum entanglement"
    → ❌ "two particles in a superposition state 
      where measurement collapses the wavefunction"
    → ✅ "imagine two magic coins. You flip one in 
      New York, it's heads. The other one in Tokyo 
      INSTANTLY becomes tails. They're connected 
      invisibly. Nobody knows why."
  
  Step ৩: IDENTIFY THE GAPS
    → where COULDN'T you explain simply?
    → where did you use jargon to hide?
    → where did you get stuck?
    
    → THESE are your knowledge gaps
    → "I know it" but "I can't explain it" = DON'T know it
  
  Step ৪: GO BACK AND LEARN
    → return to the source material
    → learn the gap specifically
    → come back and explain AGAIN
    → repeat until the whole concept flows simply

WHY THIS WORKS (cognitive science):

  The Illusion of Competence (Koriat & Bjork, 2005):
    → reading something and understanding it = 
      "I know this!" (false)
    → re-reading fluent text creates an ILLUSION
    → fluency of reading ≠ depth of understanding
  
  The Testing Effect (Roediger & Karpicke, 2006):
    → forcing yourself to GENERATE an explanation
      from scratch = ৩৩% better retention than 
      re-reading
    → the STRUGGLE to explain is the learning
  
  Metacognition (Flavell, 1979):
    → thinking about your own thinking
    → "do I actually know this?"
    → most people NEVER test themselves
    → Feynman technique = forced metacognition

FEYNMAN'S BIOGRAPHICAL EVIDENCE:

  James Gleick's biography "Genius" (1992):
    → Feynman's notebook method:
       "He would spend hours re-deriving results
        from scratch, in his own way."
    → NOT reading other people's derivations
    → BUILDING his own understanding
    
    → Feynman's Princeton notebook (PhD era):
       he re-derived ALL of physics from scratch
       → "I don't know what's the matter with 
          people — they don't learn by understanding.
          They learn by some other way — by rote 
          or something. Their knowledge is so fragile!"
  
  Bill Gates on Feynman:
    → Gates watched Feynman's ১৯৬৪ Cornell lectures
    → later bought the rights to distribute them
    → "He is the best teacher I never had"
    → Gates named his project "Project Tuva" after it

APPLICATION TO READING:

  After reading a chapter/book:
    ১. Close the book
    ২. Write a simple explanation of what you learned
    ৩. Where you get stuck → that's what you didn't learn
    ৪. Go back to those specific parts
    ৫. Repeat until you can explain it simply
  
  → This COMBINES with Zettelkasten (Door ৩):
    the permanent note IS a Feynman explanation
  
  → This COMBINES with Adler (Door ২):
    analytical reading requires you to explain
    the author's argument — in YOUR words

THE ULTIMATE TEST:
  
  "If you can't explain it simply, 
   you don't understand it well enough."
  — attributed to Einstein
   (originated from Feynman's principle)</div>

<div class="dialogue">বায়ান — clear speech, expression। কুরআনে আল্লাহ বলেন — "তিনি মানুষকে শিখিয়েছেন বায়ান — স্পষ্ট বাক্য।" (৫৫:৩-৪)। বায়ান হলো স্পষ্ট করে প্রকাশ করার ক্ষমতা — জটিলকে সহজ করা। ফাইনম্যান টেকনিক-ও বায়ান — যা বুঝেছ, তা স্পষ্ট করে প্রকাশ করো। যেখানে আটকাও, সেখানে ঘাটতি। যে বায়ান করতে পারে, সে বোঝে। যে পারে না, সে ভান করে। বায়ান — বোঝার আসল পরীক্ষা। কুরআনে বায়ান আল্লাহর নিয়ামত — কথা স্পষ্ট করার ক্ষমতা। ফাইনম্যান দেখালেন — যে স্পষ্ট করতে পারে, সে-ই জানে।</div>
<div class="dialogue en">"Bayan — clear speech, expression. Allah says — 'He taught man bayan — clear speech.' (55:3-4). Bayan is the ability to express clearly — making complex simple. The Feynman technique too is bayan — express clearly what you understand. Where you get stuck, there's the gap. One who can do bayan, understands. One who can't, pretends. Bayan — the real test of understanding. In the Quran, bayan is Allah's gift — the power to speak clearly. Feynman showed — one who can speak clearly, truly knows."</div>`,
  senior:{
    title:"Feynman Technique — Right Now",
    body:`<p><strong>Pick one thing you "know" from your field. Do this:</strong></p><p>১. Write the concept at the top of a blank page.</p><p>২. Explain it as if to a 12-year-old. No jargon. Use analogies.</p><p>৩. When you get stuck — STOP. That's your knowledge gap. Mark it.</p><p>৪. Go back to the source. Learn the gap. Come back.</p><p>৫. Repeat until the whole concept flows without hesitation.</p><p><strong>Combine with Zettelkasten:</strong> The permanent note you write IS a Feynman explanation. One idea, explained simply, in your own words. That's a permanent note that's also a test of understanding.</p><p><strong>The Feynman test for books:</strong> After finishing a book, write a 1-paragraph explanation of the WHOLE book as if explaining to a friend. If you can't — you didn't understand the book. Go back.</p>`
  }
});

// ══ DOOR 5: HOW GREAT MINDS READ ══
doors.push({
  num:5, icon:"⚡", color:"#f59e0b", name:"মহামানুষের পাঠ",
  subtitle:"How Great Minds Read", tech:"Reading Habits of Musk, Gates, Munger, Naval, Holiday",
  spirit:"আকল — প্রথম সূত্র, মৌলিক চিন্তা",
  secret:"Musk: প্রথম সূত্রের জন্য পড়েন। Gates: Think Week — বছরে ২ বার একা কুটিরে পড়েন। Munger: দৈনিক ৫+ ঘণ্টা, mental models গড়েন। Naval: যা ভালোবাসেন তা-ই পড়েন, ৫-১০ বার পুনরায়। Holiday: প্রতিটা বই থেকে নোট কার্ড। সবার একটা মিল — পড়া তাদের জীবনের অবিচ্ছেদ্য অংশ, বিনোদন নয়।",
  recall:{
    q:"Musk, Gates, Munger, Naval — তাদের পড়ার পদ্ধতিতে মিল কী?",
    qen:"What's common about how Musk, Gates, Munger, Naval read?",
    a:"Musk: প্রথম সূত্রের জন্য। Gates: Think Week। Munger: দৈনিক ৫+ ঘণ্টা। Naval: যা ভালোবাসেন, ৫-১০ বার। Holiday: নোট কার্ড। মিল — পড়া জীবনের অংশ, বিনোদন নয়। আকল — প্রথম সূত্র।",
    aen:"Musk: for first principles. Gates: Think Week. Munger: daily 5+ hours. Naval: what he loves, 5-10 times. Holiday: note cards. Common — reading is life, not entertainment."
  },
  story:`<p class="scene-setting">পাঁচটি ভিন্ন মানুষ। পাঁচটি ভিন্ন ক্ষেত্র। কিন্তু একটা মিল — তারা সবাই পাঠক। Elon Musk — SpaceX ও Tesla-এর প্রতিষ্ঠাতা। বলেন, আমি মূলত পড়ে শিখেছি। Bill Gates — Microsoft-এর প্রতিষ্ঠাতা। বছরে ৫০+ বই পড়েন। Charlie Munger — Berkshire Hathaway-এর সহ-প্রতিষ্ঠাতা। বলেন, আমি পাগলের মতো পড়ি। Naval Ravikant — উদ্যোক্তা ও দার্শনিক। বলেন, পড়াই শিখে শেখার একমাত্র উপায়। Ryan Holiday — লেখক। প্রতিটা বই থেকে নোট কার্ড। কীভাবে তারা পড়েন?</p>
<p class="scene-setting en">Five different people. Five different fields. But one common trait — they're all readers. Elon Musk — founder of SpaceX and Tesla. Says, I learned mainly through reading. Bill Gates — Microsoft founder. Reads 50+ books per year. Charlie Munger — Berkshire Hathaway. Says, I read obsessively. Naval Ravikant — entrepreneur and philosopher. Says, reading is the only way to learn to learn. Ryan Holiday — author. Note cards from every book. How do they read?</p>

<div class="dialogue">ফাইনম্যান বলেছিলেন — সহজ করে ব্যাখ্যা করো। কিন্তু আমি বলি — সহজ করার জন্য প্রথমে গভীরে যেতে হবে। গভীরে যাওয়ার উপায়? পড়া। কিন্তু কীভাবে? মহামানুষরা কীভাবে পড়েন? তাদের পদ্ধতি আমাদের শেখায় — পড়া শুধু সময় কাটানো নয়। পড়া জীবন গড়ার হাতিয়ার।</div>
<div class="dialogue en">"Feynman said — explain simply. But I say — to simplify, you must first go deep. How to go deep? Reading. But how? How do great minds read? Their methods teach us — reading isn't passing time. Reading is a tool for building a life."</div>

<div class="code-block">HOW GREAT MINDS READ — Biographical Evidence:

═══════════════════════════════════════
ELON MUSK — First Principles Reader
═══════════════════════════════════════

  Source: Ashlee Vance biography "Elon Musk" (2015),
           Walter Isaacson biography (2023)

  Reading habits:
    → age ৯: read entire Encyclopedia Britannica
    → childhood: read ১০+ hours/day (science fiction
      + non-fiction)
    → when starting SpaceX: read EVERY textbook on 
      rocket propulsion
    → when starting Tesla: read battery technology
      papers extensively
  
  METHOD: First Principles Reading
    → don't read opinions → read FUNDAMENTALS
    → textbooks > articles
    → primary sources > secondary
    → "I don't read what other people think.
       I read the FUNDAMENTAL science."
    
  Quote: "I think it's possible for ordinary people 
    to choose to be extraordinary. One way is to 
    read a lot."
  
  Insight: Musk reads to BUILD MENTAL MODELS of how
    things work fundamentally → then applies to 
    NEW domains

═══════════════════════════════════════
BILL GATES — Think Week Reader
═══════════════════════════════════════

  Source: gatesnotes.com, multiple interviews,
           Walter Isaacson (various articles)

  Reading habits:
    → reads ~৫০ books/year (~১/week)
    → annual "Think Weeks": ২ times/year, isolates
      in a cabin in Pacific Northwest
    → during Think Week: reads ১৫-২০ books/papers,
      takes extensive notes
    → no distractions — no family, no meetings
    → "I get to sit and read and take notes and 
       just THINK"
  
  METHOD: Deep Immersion + Note-Taking
    → reads with pen in hand
    → writes margin notes
    → synthesizes across multiple books
    → publishes reviews on gatesnotes.com
  
  Quote: "I really had a lot of dreams when I was 
    a kid, and I think a great deal of that grew 
    out of the fact that I had a chance to read a 
    lot."
  
  What he reads: biographies, science, public health,
    economics, climate change. Not much fiction.

═══════════════════════════════════════
CHARLIE MUNGER — Mental Models Builder
═══════════════════════════════════════

  Source: "Poor Charlie's Almanack" (2005),
           Berkshire Hathaway annual meetings

  Reading habits:
    → reads ৫+ hours/day (self-reported)
    → "In my whole life, I have known no wise 
       people who didn't read all the time — none, 
       zero."
    → partners called him "a book with two legs"
  
  METHOD: Mental Models Latticework
    → read ACROSS disciplines: physics, biology,
       psychology, economics, history, math
    → extract the BIG IDEAS from each discipline
    → build a LATTICEWORK of ~১০০ mental models
    → use these models to make decisions
  
  Mental models Munger used:
    → from physics: critical mass, tipping point
    → from biology: evolution, adaptation
    → from psychology: bias, social proof (Cialdini!)
    → from economics: opportunity cost, compound interest
  
  Quote: "You must know the big ideas in the big 
    disciplines and use them routinely — all of 
    them, not just a few. Most people are trained 
    in one model and try to use it for everything."
  
  Insight: the GOAL of reading is not information
    but MODELS you can apply to ANY problem.

═══════════════════════════════════════
NAVAL RAVIKANT — The Leverage Reader
═══════════════════════════════════════

  Source: "The Almanack of Naval Ravikant" 
           by Eric Jorgenson (2020), Naval's 
           tweets and podcast appearances

  Reading habits:
    → reads what he LOVES until he loves to read
    → re-reads great books ৫-১০ times
    → "I don't read to finish books. I read 
       to learn what I need."
    → prefers audiobooks + physical
  
  METHOD: Follow Curiosity, Re-read the Greats
    → don't force books — drop if not interesting
    → re-read books that changed your thinking
    → focus on FOUNDATIONAL books (philosophy,
       science, math)
    → avoid "business books" — read the SOURCE
  
  Quote: "Read what you love until you love to 
    read. The most important trick to be happy 
    is to realize that happiness is a skill you 
    develop."
  
  Key books Naval re-reads: 
    -> "Sapiens" (Harari)
    -> "The Beginning of Infinity" (Deutsch)
    -> "The Bed of Procrustes" (Taleb)
    -> "Meditations" (Marcus Aurelius)

═══════════════════════════════════════
RYAN HOLIDAY — The Notecard System
═══════════════════════════════════════

  Source: Ryan Holiday's blog, "Perennial 
           Seller" (2018), interviews

  Reading habits:
    → reads ~৫০-৬০ books/year
    → EVERY book: takes notes on physical 
       index cards (not digital!)
    → cards organized in wooden boxes by topic
    → system learned from Robert Greene 
       ("48 Laws of Power" author)
  
  METHOD: The Notecard System (from Robert Greene)
    → read with pen + index cards
    → write key passage + YOUR thoughts
    → one concept per card
    → file by TOPIC (not by book)
    → when writing: pull cards from multiple topics
    → this is LITERALLY a physical Zettelkasten!
  
  Holiday's output:
    → from this system: ১০+ bestselling books
    → "The cards ARE the book. I just arrange them."
  
  Quote: "Robert Greene reads ৩-৪ hundred books 
    per project. Takes notes on every one. The 
    note cards become the outline, the arguments, 
    the evidence. The book writes itself."</div>

<div class="dialogue">আকল — intellect, reason, the faculty of understanding fundamentals। কুরআনে আল্লাহ বলেন — "তারা কি চিন্তা করে না?" আকল হলো মৌলিক সত্য বোঝার ক্ষমতা। মহামানুষরা আকল দিয়ে পড়েন — শুধু তথ্য সংগ্রহ নয়। Musk: মৌলিক বিজ্ঞান থেকে শিখেন। Gates: Think Week-এ গভীরে যান। Munger: mental models গড়েন প্রতিটা ক্ষেত্র থেকে। Naval: যা ভালোবাসেন তা-ই পড়েন, বারবার। Holiday: প্রতিটা বই থেকে নোট কার্ড। সবার মিল — আকল দিয়ে পড়া, শুধু চোখ দিয়ে নয়।</div>
<div class="dialogue en">"Aql — intellect, reason, the faculty of understanding fundamentals. Allah says — 'Do they not reflect?' Aql is the ability to grasp fundamental truths. Great minds read with aql — not just gathering information. Musk: learns from fundamental science. Gates: goes deep in Think Week. Munger: builds mental models from every field. Naval: reads what he loves, repeatedly. Holiday: note cards from every book. All share — reading with intellect, not just with eyes."</div>`,
  senior:{
    title:"Choose Your Reading Archetype",
    body:`<p><strong>Which great reader are you most like? Which do you want to become?</strong></p><p><strong>Musk style:</strong> Read fundamentals and textbooks. Build mental models. Apply to new domains. → Best for: builders, engineers, entrepreneurs.</p><p><strong>Gates style:</strong> Read broadly. Schedule dedicated deep-reading time (even half a day). Take notes. Synthesize. → Best for: polymaths, leaders, investors.</p><p><strong>Munger style:</strong> Read across disciplines. Extract mental models. Read daily, 5+ hours. → Best for: decision-makers, analysts.</p><p><strong>Naval style:</strong> Read what you love. Re-read the greats 5-10 times. Don't force books. → Best for: self-directed learners, philosophers.</p><p><strong>Holiday style:</strong> Take physical note cards from every book. File by topic. Build a physical knowledge base. → Best for: writers, researchers.</p><p><strong>Mine recommendation:</strong> Start with Naval's approach (read what you love). Add Munger's discipline (daily reading). Add Holiday's note-taking. This is the starter kit.</p>`
  }
});
