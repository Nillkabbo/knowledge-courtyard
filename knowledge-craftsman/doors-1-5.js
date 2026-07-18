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

<table class="kv-table"><tr><th>সময় (Ebbinghaus, 1885)</th><th>মনে থাকে</th><th>ভুলে যাই</th></tr>
<tr><td class="hl">এখন</td><td>১০০%</td><td>০%</td></tr>
<tr><td class="hl">১ ঘণ্টা</td><td>~৪৪%</td><td>~৫৬%</td></tr>
<tr><td class="hl">১ দিন</td><td>~৩৩%</td><td>~৬৭%</td></tr>
<tr><td class="hl">৬ দিন</td><td>~২৫%</td><td>~৭৫%</td></tr>
<tr><td class="hl">৩১ দিন</td><td>~২১%</td><td>~৭৯%</td></tr></table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> এই সঠিক শতাংশ প্রচলিত কিন্তু পুরোপুরি নির্ভরযোগ্য নয় — Ebbinghaus-এর গবেষণা ছিল N=১ (নিজের উপর), nonsense syllables দিয়ে। বাস্তব তথ্যে curve-এর আকৃতি ভিন্ন। তবে মূল নীতি — "ব্যবধানে না-পুনরাবৃত্তি করলে দ্রুত ভুলে যাই" — সুপ্রতিষ্ঠিত। "গত বছর একটা বই পড়েছি" = কার্যত নতুন করে পড়া, যদি না retention-কৌশল ব্যবহার করো।</div></div>

<table class="kv-table"><tr><th>Passive reading (ভুলে যাওয়া)</th><th>Active reading (ধরে রাখা)</th></tr>
<tr><td>চোখ শব্দ scan করে</td><td>মন শব্দ প্রশ্ন করে</td></tr>
<tr><td>নোট নেই, আর ফিরে দেখে না</td><td>প্রতি section-এ নোট, spaced re-read</td></tr>
<tr><td>যা জানে তার সাথে সংযোগ নেই</td><td>যা জানে তার সাথে যুক্ত করে</td></tr>
<tr><td>retention: ~১০%</td><td>retention: ~৭০-৯০%</td></tr></table>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>ছিদ্র বন্ধের ৩ উপায়:</strong> ① <strong>Active engagement</strong> (Maryanne Wolf, 2018 — deep reading আলাদা brain network জাগায়): প্রশ্ন করো, সংযোগ করো, মূল্যায়ন করো। ② <strong>Spaced repetition</strong>: Day 1 → 2 → 7 → 30 → 90 review, প্রতিবার forgetting curve সমতল হয়। ③ <strong>Testing effect</strong> (Roediger & Karpicke, 2006): re-read ৩ বার = ৪২% retention; একবার পড়ে test = ৫৬%। নিজেকে test করা re-read-কে হারায়।</div></div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>Retention = Comprehension × Engagement × Repetition</strong> — যেকোনো factor শূন্য হলে retention শূন্য। বেশিরভাগ পাঠকের comprehension ✓ কিন্তু engagement ✗ ও repetition ✗ → retention ০। লক্ষ্য "এ বছর ৫০ বই" নয়, "এ বছর ৫ বই থেকে গভীর শেখা।" (Naval: "কম বই পড়ো, বেশি যত্নে; ভালোগুলো ৫-১০ বার পুনরায় পড়ো।")</div></div>

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

<div class="timeline">
<div class="tl-step"><div class="tl-when">Level ১ · মাস</div><div class="tl-title">📗 Elementary</div><div class="tl-body">"শব্দ পড়তে পারো?" — অক্ষর/শব্দ চেনা, আক্ষরিক অর্থ। এটা decoding, reading নয়। বেশিরভাগ মানুষ এখানেই আটকে থাকে।</div></div>
<div class="tl-step"><div class="tl-when">Level ২ · ৫-১৫ মিনিট/বই</div><div class="tl-title">🔍 Inspectional (skim)</div><div class="tl-body">"বইটা কী নিয়ে?" — title/subtitle, preface, TOC, index, key অধ্যায়ের প্রথম-শেষ প্যারা, শেষ ২-৩ পাতা। উদ্দেশ্য: পুরো পড়ার যোগ্য কিনা ঠিক করা। <em>১০টা skim করে ১টা গভীর পড়ার মতো খোঁজো।</em></div></div>
<div class="tl-step"><div class="tl-when">Level ৩ · বছর</div><div class="tl-title">🧠 Analytical (গভীর)</div><div class="tl-body">"বইটার মানে কী?" — Structure (মূল থিম ১ বাক্যে) → Interpretation (key term ও proposition) → Criticism (বোঝার পরই দ্বিমত) → Synthesis। Adler-এর দ্বিমতের ৪ উপায়: uninformed / misinformed / illogical / incomplete — অনুভূতি নয়, নির্দিষ্ট প্রমাণ লাগে।</div></div>
<div class="tl-step"><div class="tl-when">Level ৪ · দশক</div><div class="tl-title">🕸️ Syntopical</div><div class="tl-body">"একাধিক বই কীভাবে সম্পর্কিত?" — সর্বোচ্চ স্তর। একই বিষয়ে বহু বই পড়ে সংশ্লেষণ (bibliography → skim সব → key প্রশ্ন → মতভেদ ম্যাপ → নিজের মত)। PhD/গবেষক/বড় লেখকরা যা করেন।</div></div>
</div>
<div class="callout tip"><span class="co-icon">📖</span><div><strong>আজই শুরু করতে পারো Level ২ থেকে</strong> — পড়ার আগে skim করো; বেশিরভাগ বই Level ৩-এর যোগ্য নয়, তাই গভীর পড়া রাখো সেই বইগুলোর জন্য যেগুলো সত্যিই গুরুত্বপূর্ণ। <strong>Adler-এর সোনালি নিয়ম:</strong> "'একমত/দ্বিমত' বোলো না যতক্ষণ না বলতে পারো 'আমি বুঝেছি।'"</div></div>

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

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৪৬ বছর</div><div class="sc-label">Luhmann-এর slip-box (1952-98)</div></div>
<div class="stat-card"><div class="sc-num">~৯০,০০০</div><div class="sc-label">নোট কার্ড</div></div>
<div class="stat-card"><div class="sc-num">৭০+</div><div class="sc-label">বই</div></div>
<div class="stat-card"><div class="sc-num">৪০০+</div><div class="sc-label">প্রবন্ধ</div></div>
</div>
<div class="callout info"><span class="co-icon">🗃️</span><div>Luhmann: "আমি নিজেকে creative মনে করি না — আমি শুধু machine-এর সামনে দাঁড়িয়ে হাতল ঘোরাই।" সৃজনশীলতা এসেছে <strong>সিস্টেম</strong> থেকে, ব্যক্তি থেকে নয়। দিনে ~৫-৬ card।</div></div>

<table class="kv-table"><tr><th>নোটের ৩ ধরন (Ahrens, 2017)</th><th>কী</th></tr>
<tr><td class="hl">Fleeting</td><td>পড়া/জীবনের সময় দ্রুত idea; ১-২ দিনে permanent-এ রূপান্তর বা বাদ</td></tr>
<tr><td class="hl">Literature</td><td>উৎস পড়ার সময় সংক্ষিপ্ত সারাংশ — <em>নিজের ভাষায়</em>, source-সহ</td></tr>
<tr><td class="hl">Permanent</td><td>এক নোটে এক idea (atomic), প্রকাশযোগ্য ভাষায়, বিদ্যমান নোটের সাথে link, dated</td></tr></table>

<table class="kv-table"><tr><th>সাধারণ নোট</th><th>Zettelkasten</th></tr>
<tr><td>খাতায় লেখা, আর দেখা হয় না</td><td>প্রতিটা নোট atomic (এক idea)</td></tr>
<tr><td>নোটের মধ্যে সংযোগ নেই</td><td>নোট পরস্পর linked, cross-referenced</td></tr>
<tr><td>topic-ভিত্তিক, linear (তথ্যের তালিকা)</td><td>idea-ভিত্তিক, network (সংযোগের জাল)</td></tr>
<tr><td>output: কিছুই না</td><td>output: বই, পেপার, insight</td></tr></table>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>মূল পার্থক্য = CONNECTIONS।</strong> একটা নোট = একটা fact; নোটের network = emergent idea। Luhmann-এর অন্তর্দৃষ্টি: সৃজনশীলতা আসে নোটের মধ্যে <em>অপ্রত্যাশিত</em> সংযোগ থেকে (biology-র নোট economics-এর নোটের সাথে জোড়া → নতুন insight)।</div></div>

<div class="callout info"><span class="co-icon">🛠️</span><div><strong>আধুনিক টুল:</strong> Obsidian (free, local, সবচেয়ে জনপ্রিয়), Logseq, Notion, Heptabase, Capacities/Tana। AI-PKM (2024-26): Obsidian Smart Connections/Copilot, Notion AI, NotebookLM (multi-doc synthesis)। ⚠️ AI ভুল সংযোগ বা অস্তিত্বহীন citation বানাতে পারে — verify করো। <strong>শুরু:</strong> প্রতিটা নতুন নোট অন্তত ১টা বিদ্যমান নোটের সাথে link করো — এখানেই insight।</div></div>

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

<div class="timeline">
<div class="tl-step"><div class="tl-when">ধাপ ১</div><div class="tl-title">✏️ Concept বাছো</div><div class="tl-body">যা "জানো" তা খালি পাতায় লেখো।</div></div>
<div class="tl-step"><div class="tl-when">ধাপ ২</div><div class="tl-title">🧒 সহজ করে ব্যাখ্যা</div><div class="tl-body">১২ বছরের শিশুকে বোঝাচ্ছ যেন — jargon নয়, analogy। যেমন quantum entanglement: "দুটো জাদুর কয়েন — একটা New York-এ heads হলে Tokyo-রটা তৎক্ষণাৎ tails।"</div></div>
<div class="tl-step"><div class="tl-when">ধাপ ৩</div><div class="tl-title">🕳️ গ্যাপ চিহ্নিত করো</div><div class="tl-body">যেখানে সহজে বলতে পারলে না, jargon দিয়ে লুকালে, আটকে গেলে — সেটাই তোমার ঘাটতি। "জানি কিন্তু বলতে পারি না" = জানো না।</div></div>
<div class="tl-step"><div class="tl-when">ধাপ ৪</div><div class="tl-title">🔁 ফিরে গিয়ে শেখো</div><div class="tl-body">উৎসে ফিরে সেই গ্যাপ শেখো, আবার ব্যাখ্যা করো — যতক্ষণ না পুরোটা সহজে বয়ে যায়।</div></div>
</div>
<div class="callout info"><span class="co-icon">🔬</span><div><strong>কেন কাজ করে:</strong> Illusion of competence (Koriat & Bjork, 2005) — সাবলীল পড়া বোঝার বিভ্রম দেয়। Testing effect (Roediger & Karpicke, 2006) — শূন্য থেকে ব্যাখ্যা তৈরি re-reading-এর চেয়ে ~৩৩% ভালো retention। Metacognition (Flavell, 1979) — নিজের জানা যাচাই; Feynman technique = বাধ্যতামূলক metacognition।</div></div>
<div class="callout tip"><span class="co-icon">💬</span><div><strong>জীবনী-প্রমাণ:</strong> Gleick-এর "Genius" (1992) — Feynman ঘণ্টার পর ঘণ্টা ফলাফল নিজে নতুন করে derive করতেন ("তাদের জ্ঞান এত ভঙ্গুর!")। Bill Gates: Feynman-এর 1964 Cornell lecture-এর distribution-স্বত্ব কিনে "Project Tuva" নাম দেন — "the best teacher I never had।" <em>("সহজে ব্যাখ্যা করতে না পারলে যথেষ্ট বোঝোনি" — প্রায়ই Einstein-কে দায়ী করা হয়, কিন্তু তার প্রমাণ নেই; নীতিটি তবু সঠিক, আর এটাই Feynman করতেন।)</em></div></div>

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

<table class="kv-table"><tr><th>মহামানুষ</th><th>পদ্ধতি</th><th>সূত্র</th></tr>
<tr><td class="hl">Elon Musk</td><td>First-principles reading — মৌলিক বিজ্ঞান/textbook; মতামত নয়, fundamentals; নতুন domain-এ mental model প্রয়োগ</td><td>Vance (2015), Isaacson (2023)</td></tr>
<tr><td class="hl">Bill Gates</td><td>~৫০ বই/বছর; বছরে ২ বার "Think Week" — কুটিরে একা, ১৫-২০ বই + নোট; margin note, gatesnotes-এ review</td><td>gatesnotes.com</td></tr>
<tr><td class="hl">Charlie Munger</td><td>দিনে ৫+ ঘণ্টা, বহু-শাস্ত্র; ~১০০ mental model-এর latticework (physics, biology, psychology, economics)</td><td>Poor Charlie's Almanack (2005)</td></tr>
<tr><td class="hl">Naval Ravikant</td><td>যা ভালোবাসো পড়ো; ভালো বই ৫-১০ বার পুনরায়; জোর করে শেষ কোরো না; foundational বই</td><td>Almanack of Naval (2020)</td></tr>
<tr><td class="hl">Ryan Holiday</td><td>ভৌত index-card system (Robert Greene থেকে) — key passage + নিজের ভাবনা, topic-অনুযায়ী box; কার্ডই বইয়ের outline</td><td>Holiday-র blog</td></tr></table>
<div class="callout info"><span class="co-icon">⚡</span><div><strong>সবার এক মিল:</strong> পড়া তাদের জীবনের অবিচ্ছেদ্য অংশ — বিনোদন নয়। তারা <em>আকল দিয়ে</em> পড়ে (তথ্য সংগ্রহ নয়, mental model গড়া) — Munger: "সব বড় শাস্ত্রের বড় idea জানো ও নিয়মিত ব্যবহার করো; বেশিরভাগ মানুষ এক model দিয়ে সব করতে চায়।"</div></div>
<div class="callout tip"><span class="co-icon">🎒</span><div><strong>Starter kit:</strong> Naval দিয়ে শুরু করো (যা ভালোবাসো পড়ো) → Munger-এর শৃঙ্খলা যোগ করো (দৈনিক পড়া) → Holiday-র নোট-টেকিং যোগ করো (topic-ভিত্তিক কার্ড)।</div></div>

<div class="dialogue">আকল — intellect, reason, the faculty of understanding fundamentals। কুরআনে আল্লাহ বলেন — "তারা কি চিন্তা করে না?" আকল হলো মৌলিক সত্য বোঝার ক্ষমতা। মহামানুষরা আকল দিয়ে পড়েন — শুধু তথ্য সংগ্রহ নয়। Musk: মৌলিক বিজ্ঞান থেকে শিখেন। Gates: Think Week-এ গভীরে যান। Munger: mental models গড়েন প্রতিটা ক্ষেত্র থেকে। Naval: যা ভালোবাসেন তা-ই পড়েন, বারবার। Holiday: প্রতিটা বই থেকে নোট কার্ড। সবার মিল — আকল দিয়ে পড়া, শুধু চোখ দিয়ে নয়।</div>
<div class="dialogue en">"Aql — intellect, reason, the faculty of understanding fundamentals. Allah says — 'Do they not reflect?' Aql is the ability to grasp fundamental truths. Great minds read with aql — not just gathering information. Musk: learns from fundamental science. Gates: goes deep in Think Week. Munger: builds mental models from every field. Naval: reads what he loves, repeatedly. Holiday: note cards from every book. All share — reading with intellect, not just with eyes."</div>`,
  senior:{
    title:"Choose Your Reading Archetype",
    body:`<p><strong>Which great reader are you most like? Which do you want to become?</strong></p><p><strong>Musk style:</strong> Read fundamentals and textbooks. Build mental models. Apply to new domains. → Best for: builders, engineers, entrepreneurs.</p><p><strong>Gates style:</strong> Read broadly. Schedule dedicated deep-reading time (even half a day). Take notes. Synthesize. → Best for: polymaths, leaders, investors.</p><p><strong>Munger style:</strong> Read across disciplines. Extract mental models. Read daily, 5+ hours. → Best for: decision-makers, analysts.</p><p><strong>Naval style:</strong> Read what you love. Re-read the greats 5-10 times. Don't force books. → Best for: self-directed learners, philosophers.</p><p><strong>Holiday style:</strong> Take physical note cards from every book. File by topic. Build a physical knowledge base. → Best for: writers, researchers.</p><p><strong>Mine recommendation:</strong> Start with Naval's approach (read what you love). Add Munger's discipline (daily reading). Add Holiday's note-taking. This is the starter kit.</p>`
  }
});
