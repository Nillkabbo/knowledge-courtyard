// ════════════════════════════════════════
// দৃষ্টির ক্যানভাস — DOORS 1-5
// Context Engineering: Window → Retrieval
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: CONTEXT WINDOW ECONOMICS ══
doors.push({
  num:1, icon:"📜", color:"#2dd4bf", name:"ক্যানভাস ব্যবস্থাপকের টেবিল",
  subtitle:"The Canvas Manager's Table", tech:"Context Window Economics",
  spirit:"পরিমাণ — সীমিত স্থানের মিযান",
  secret:"Context window একটা ক্যানভাস — প্রতিটি টোকেন একটা রঙের দাগ। বড় ক্যানভাস = বেশি জায়গা, কিন্তু attention পাতলা হয়। ছোট ক্যানভাস = কম জায়গা, কিন্তু focus তীক্ষ্ণ। সঠিক পরিমাণ = সঠিক বোঝা।",
  recall:{
    q:"ক্যানভাস ব্যবস্থাপক কেন সব রং একসাথে ব্যবহার করেন না?",
    qen:"Why doesn't the canvas manager use all colors at once?",
    a:"কারণ অনেক রঙ একসাথে = বিশৃঙ্খলা। Context window-ও তেমনি — প্রতিটি টোকেন একটা রঙ। বেশি টোকেন = attention পাতলা। কম টোকেন = focus তীক্ষ্ণ। পরিমাণ গুরুত্বপূর্ণ।",
    aen:"Because too many colors at once = chaos. Context window too — each token is a color. More tokens = diluted attention. Fewer = sharp focus. Proportion matters."
  },
  story:`
<p class="scene-setting">প্রথম দৃষ্টি। একটা বড় টেবিল — উপরে নানা রঙের কালি, তুলি, পাতা। ক্যানভাস ব্যবস্থাপক রাইহান একটা ছোট ক্যানভাস ধরে আছেন। "বড় ক্যানভাস চাও?" তিনি জিজ্ঞেস করলেন। "হ্যাঁ!" তুমি বললে। তিনি একটা বিশাল ক্যানভাস খুললেন — দেয়াল সমান। "এখন একটা ছোট ছবি আঁকো।" তুমি আঁকলে। কিন্তু বড় ক্যানভাসে ছোট ছবি হারিয়ে গেল।</p>
<p class="scene-setting en">The first sight. A large table — various colored inks, brushes, paper. Canvas manager Raihan holds a small canvas. "Want a bigger canvas?" he asked. "Yes!" you said. He unrolled a massive canvas — wall-sized. "Now paint a small picture." You did. But on the huge canvas, the small picture got lost.</p>

<div class="dialogue">LLM Anatomy বইয়ে তুমি শিখেছ — attention কীভাবে কাজ করে। এখন আমি বলি — attention কোথায় কাজ করে? Context window-তে। এটাই তোমার ক্যানভাস। বড় হলে ভালো? সবসময় নয়। বড় ক্যানভাসে ছোট ছবি হারিয়ে যায়। বড় context-এ গুরুত্বপূর্ণ তথ্য হারিয়ে যায়।</div>
<div class="dialogue en">"In the LLM Anatomy book you learned how attention works. Now I say — where does attention work? In the context window. This is your canvas. Bigger is better? Not always. Small pictures get lost on big canvases. Important information gets lost in big contexts."</div>

<div class="code-block">Context Window Economics — The Canvas:

WINDOW SIZES (2024-2025):
  GPT-4o:        ১২৮,০০০ tokens  (~৯৬,০০০ words)
  Claude 3.5:    ২০০,০০০ tokens  (~১৫০,০০০ words)
  Gemini 1.5:    ১,০০০,০০০ tokens (~৭৫০,০০০ words)
  Llama 3.1:     ১২৮,০০০ tokens

ECONOMICS — প্রতি টোকেন খরচ:
  Input:  $১-১০ / million tokens
  Output: $৩-৩০ / million tokens
  
  Context full হলে:
  128K input tokens × $৫/M = $০.৬৪ per call
  → হাজার call = $৬৪০
  → লাখ call = $৬৪,০০০

THE ATTENTION DILUTION PROBLEM:

  ১০০ tokens → attention তীক্ষ্ণ
    প্রতিটি token প্রতিটি token-কে ভালো দেখে
  
  ১০,০০০ tokens → attention মাঝারি  
    কিছু token হারিয়ে যায়
  
  ১০০,০০০ tokens → attention পাতলা
    "Lost in the middle" — মাঝখানের 
    তথ্য হারিয়ে যায়

EMPIRICAL FINDING (Liu et al., 2023):
  ┌──────────────────────────────────┐
  │ Position in Context              │
  │                                  │
  │ শুরু  ████████████████  ৯০% সঠিক │
  │ মাঝে  ████░░░░░░░░░░██  ৫০% সঠিক │  
  │ শেষ  ████████████████  ৮৫% সঠিক │
  │                                  │
  │ → U-shaped performance curve     │
  │ → মাঝখানের তথ্য হারায়!           │
  └──────────────────────────────────┘

CONTEXT BUDGET FORMULA:
  Total Window = System Prompt + Few-Shot 
               + Retrieved Docs + Conversation 
               + User Query + Output Space
  
  উদাহরণ (128K window):
    System Prompt:    ৫০০ tokens
    Few-Shot:       ২,০০০ tokens  
    Retrieved Docs: ৫০,০০০ tokens
    Conversation:   ১০,০০০ tokens
    User Query:       ১০০ tokens
    Output Space:   ৬৫,৪০০ tokens
    ─────────────────────────────
    Total:         ১২৮,০০০ tokens

  → প্রতিটা অংশের budget সচেতনভাবে নির্ধারণ করো</div>

<div class="dialogue">পরিমাণ — measure, proportion. কুরআনে আল্লাহ বলেন — "সবকিছু আমরা একটা নির্ধারিত পরিমাণে সৃষ্টি করেছি।" (৫৪:৪৯)। Context window সেই নির্ধারিত পরিমাণ। অসীম নয়। প্রতিটি টোকেন একটি সম্পদ। যে পরিমাণ বোঝে, সে সঠিকভাবে বণ্টন করে। যে বুঝে না, সে সব ঢেলে দেয় — আর গুরুত্বপূর্ণ তথ্য হারিয়ে যায়।</div>
<div class="dialogue en">"Qadar — measure, proportion. Allah says — 'We created all things in a determined measure.' (54:49). The context window is that determined measure. Not infinite. Each token is a resource. One who understands proportion, distributes correctly. One who doesn't, dumps everything — and important information gets lost."</div>`,
  senior:{
    title:"Context Budget — প্রতিটা কলে হিসাব করো",
    body:`<p><strong>প্রোডাকশনে:</strong> প্রতিটা API কলে context budget ট্র্যাক করো।</p><p><strong>System prompt:</strong> ৫০০-১০০০ tokens। স্থির।</p><p><strong>RAG docs:</strong> ৫০-৭০% window। পরিবর্তনশীল।</p><p><strong>Conversation:</strong> ১০-২০%। পুরোনো কথা সারাংশ করো।</p><p><strong>Output:</strong> অন্তত ২০-৩০% রাখো। বেশি output = বেশি খরচ।</p><p><strong>Naming convention:</strong> প্রতিটা টুকরোর টোকেন সংখ্যা লগ করো।</p>`
  }
});

// ══ DOOR 2: LOST IN THE MIDDLE ══
doors.push({
  num:2, icon:"🧩", color:"#5b9eff", name:"মাঝখানের কক্ষ",
  subtitle:"The Middle Chamber", tech:"Lost in the Middle Phenomenon",
  spirit:"মাঝপথের বিভ্রম — অবহেলার ঝুঁকি",
  secret:"LLM শুরু আর শেষ মনে রাখে, মাঝখানে হারিয়ে ফেলে। এটা architecture-এর সীমাবদ্ধতা। গুরুত্বপূর্ণ তথ্য শুরুতে বা শেষে রাখো। মাঝখানে কম গুরুত্বপূর্ণ তথ্য। এটাই positioning strategy।",
  recall:{
    q:"ক্যানভাসে মাঝখানের ছবি কেন মনে রাখা কঠিন?",
    qen:"Why is the middle of the canvas hardest to remember?",
    a:"কারণ চোখ শুরু আর শেষে যায় — মাঝখানে এড়িয়ে যায়। LLM-এর attention-ও তেমনি — primacy (শুরু) আর recency (শেষ) effect। মাঝখানের তথ্য ৫০% পর্যন্ত হারিয়ে যেতে পারে। গুরুত্বপূর্ণ তথ্য প্রান্তে রাখো।",
    aen:"Because eyes go to start and end — skip the middle. LLM attention too — primacy and recency effects. Middle information can lose up to 50%. Put important info at edges."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দৃষ্টি। একটা অদ্ভুত কক্ষ — দেয়ালে ছবি সাজানো, কিন্তু ক্রম অদ্ভুত। প্রথম ছবি উজ্জ্বল, শেষের ছবিও উজ্জ্বল, কিন্তু মাঝখানের ছবিগুলো ফ্যাকাশে। কক্ষরক্ষক নাফিসা বললেন — "মানুষ যেমন শুরু আর শেষ মনে রাখে, মাঝখানে ভুলে যায় — LLM-ও তেমনি। এটাই lost in the middle।"</p>
<p class="scene-setting en">The second sight. A strange room — pictures on walls, but arranged oddly. First picture bright, last bright, but middle ones faded. Keeper Nafisa said — "As people remember beginnings and endings, forget middles — the LLM too. This is lost in the middle."</p>

<div class="dialogue">ক্যানভাস ব্যবস্থাপক বলেছিলেন — পরিমাণ গুরুত্বপূর্ণ। কিন্তু আমি বলি — পরিমাণের চেয়েও গুরুত্বপূর্ণ হলো অবস্থান। কোথায় বসাও। কারণ LLM শুরু আর শেষ দেখে, মাঝখানে হারায়। এটা শুধু তত্ত্ব নয় — গবেষণায় প্রমাণিত।</div>
<div class="dialogue en">"The canvas manager said — proportion matters. But I say — more important than proportion is position. Where you place. Because the LLM sees beginning and end, loses middle. This isn't just theory — proven in research."</div>

<div class="code-block">Lost in the Middle — The U-Curve:

RESEARCH: Liu et al. (2023) "Lost in the Middle"
  → Multi-document QA task
  → Fact placed at different positions
  → Accuracy measured

RESULT (U-shaped curve):

  Position     │ Accuracy
  ─────────────┼──────────
  ১ম (শুরু)    │ ৭২%
  ২য়          │ ৬৮%  
  ৩য়          │ ৬২%
  ...          │ ...
  মাঝখানে      │ ৪৮% ← সবচেয়ে খারাপ!
  ...          │ ...
  ৩য় শেষ      │ ৬৫%
  শেষ          │ ৭৩%

  → ২৫% accuracy drop শুরু থেকে মাঝখানে!
  → Position পরিবর্তন = ফল পরিবর্তন

WHY IT HAPPENS:

১. PRIMACY EFFECT
  শুরুর tokens পুরো sequence প্রভাবিত করে
  → attention প্রথম থেকে শেষ পর্যন্ত বিস্তৃত
  
২. RECENCY EFFECT  
  শেষের tokens সবচেয়ে কাছে — output এ সরাসরি
  → last few tokens = strongest influence
  
৩. ATTENTION DILUTION
  মাঝখানের tokens — অনেক প্রতিবেশী
  → attention "diluted" across many tokens
  → কোনো একটা বিশেষ token কম মনোযোগ পায়

POSITIONING STRATEGY:

  ┌─────────────────────────────────────┐
  │ TOP (primacy zone)                  │
  │ → System prompt                     │
  │ → Most important instructions       │
  │ → Critical constraints              │
  ├─────────────────────────────────────┤
  │ MIDDLE (danger zone)                │
  │ → Less critical context             │
  │ → Background info                   │
  │ → Supporting docs (lower priority)  │
  ├─────────────────────────────────────┤
  │ BOTTOM (recency zone)               │
  │ → User's actual question            │
  │ → Key retrieved documents           │
  │ → Final instruction/reminder        │
  └─────────────────────────────────────┘

PRACTICAL EXAMPLE:

  ❌ BAD ORDERING:
  [System: "Answer from docs"]
  [RAG doc 1: গুরুত্বপূর্ণ] ← মাঝখানে, হারায়
  [RAG doc 2: কম গুরুত্বপূর্ণ]
  [RAG doc 3: গুরুত্বপূর্ণ] ← মাঝখানে, হারায়
  [User: "What is X?"]

  ✅ GOOD ORDERING:
  [System: "Answer from docs"]
  [RAG doc 2: কম গুরুত্বপূর্ণ] ← মাঝে, OK
  [RAG doc 1: গুরুত্বপূর্ণ] ← শেষে, মনে থাকে
  [RAG doc 3: গুরুত্বপূর্ণ] ← শেষে, মনে থাকে
  [User: "What is X?"]
  [Final: "Base your answer ONLY on 
           the above docs"]</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ সব এক জায়গায়</div>১০টা ডকুমেন্ট র্যান্ডম ক্রমে ঢেলে দাও। গুরুত্বপূর্ণ ডকুমেন্ট মাঝখানে পড়েছে? ৫০% সম্ভবতা হারাবে। মডেল ভুল উত্তর দেবে কিন্তু আত্মবিশ্বাসে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সচেতন বিন্যাস</div>সব গুরুত্বপূর্ণ ডকুমেন্ট শেষে দাও। কম গুরুত্বপূর্ণ মাঝে। শুরুতে system instruction। মডেল সঠিক উত্তর দেবে। Position একটা engineering decision।</div>
</div>

<div class="dialogue">মাঝপথের বিভ্রম। কুরআনে আল্লাহ বলেন — "মাঝখানের অবস্থা সবচেয়ে কঠিন।" জীবনে মাঝবয়স কঠিন, পড়ার মাঝখানে মনোযোগ কম। LLM-ও তেমনি — মাঝখানে হারায়। কিন্তু যে জানে এই দুর্বলতা, সে কাজে লাগায় — গুরুত্বপূর্ণ তথ্য প্রান্তে রাখে। দুর্বলতা জানাই প্রথম শক্তি।</div>
<div class="dialogue en">"The middle illusion. Life's middle is hard, attention dips mid-reading. The LLM too — loses the middle. But one who knows this weakness, exploits it — puts important info at edges. Knowing the weakness is the first strength."</div>`,
  senior:{
    title:"Position Audit — তোমার প্রম্পট পরীক্ষা",
    body:`<p><strong>পরীক্ষা:</strong> একই ডকুমেন্ট তিন অবস্থানে রাখো (শুরু, মাঝ, শেষ)। উত্তরের নির্ভুলতা তুলনা করো। মাঝখানে সবচেয়ে কম।</p><p><strong>নিয়ম:</strong> RAG-এ retrieved docs relevance অনুযায়ী সাজাও — most relevant শেষে।</p><p><strong>নিয়ম:</strong> System prompt-এ গুরুত্বপূর্ণ নিয়ম দুইবার দাও — শুরুতে এবং শেষে।</p>`
  }
});

// ══ DOOR 3: CHUNKING ══
doors.push({
  num:3, icon:"✂️", color:"#ffc857", name:"কাঁটার কক্ষ",
  subtitle:"The Cutter's Chamber", tech:"Chunking Strategies",
  spirit:"বিভাজন — সঠিক টুকরোয় ভাঙা",
  secret:"ডকুমেন্ট না ভাঙলে RAG কাজ করে না। কিন্তু ভুল ভাঙলে আরও খারাপ। খুব ছোট = context হারায়। খুব বড় = noise বাড়ে। সঠিক chunk size, overlap, এবং boundary = সঠিক retrieval।",
  recall:{
    q:"কাঁটার কেন প্রতিটা টুকরো নির্দিষ্ট আকারে কাটেন?",
    qen:"Why does the cutter cut each piece to a specific size?",
    a:"কারণ খুব ছোট টুকরো = অর্থহীন। খুব বড় = পরিচালনা কঠিন। সঠিক আকার = সঠিক ব্যবহার। Chunking-ও তেমনি — ৫১২-১০২৪ টোকেন, ২০% overlap। সঠিক টুকরোয় ভাঙলে retrieval সঠিক হয়।",
    aen:"Because too small = meaningless. Too big = hard to handle. Right size = right use. Chunking too — 512-1024 tokens, 20% overlap. Right pieces make retrieval accurate."
  },
  story:`
<p class="scene-setting">তৃতীয় দৃষ্টি। কাঁটারের কক্ষ। বড় কাগজের রোল, কাঁটি, মাপকাঠি। কাঁটার ফারহান একটা বড় পাণ্ডুলিপি ধরে আছেন। "এটা একসাথে দেওয়া যাবে না," তিনি বললেন। "ভাঙতে হবে। কিন্তু কোথায় কাটব? যেখানে অর্থ শেষ, সেখানে। মাঝখানে নয়।"</p>
<p class="scene-setting en">The third sight. The cutter's room. Large paper rolls, scissors, measuring sticks. Cutter Farhan holds a massive manuscript. "Can't give this whole," he said. "Must cut. But where? Where meaning ends, not mid-sentence."</p>

<div class="dialogue">মাঝখানের কক্ষ বলেছিলেন — অবস্থান গুরুত্বপূর্ণ। কিন্তু আমি বলি — অবস্থানের আগে আসে বিভাজন। কীভাবে ভাঙবে? একটা ৫০০-পৃষ্ঠার ডকুমেন্ট সরাসরি LLM-কে দিলে — হারিয়ে যাবে। ভাঙতে হবে। কিন্তু সঠিকভাবে।</div>
<div class="dialogue en">"The middle chamber said — position matters. But I say — before position comes division. How to break? Give a 500-page doc to the LLM — it'll get lost. Must break it. But correctly."</div>

<div class="code-block">Chunking Strategies — How to Cut:

CHUNK SIZE — সোনালী অনুপাত:

  খুব ছোট (১০০-২০০ tokens):
    ❌ context হারায় — একটা বাক্য টুকরো
    ❌ অর্থ অসম্পূর্ণ  
    ✅ খুব নির্দিষ্ট প্রশ্নে ভালো
  
  মাঝারি (৫১২-১০২৪ tokens):
    ✅ সাধারণ সেরা — context ও precision ভারসাম্য
    ✅ একটা অনুচ্ছেদ বা কয়েকটা
    ✅ বেশিরভাগ RAG-এ ব্যবহৃত
  
  বড় (২০৪৮-৪০৯৬ tokens):
    ✅ জটিল যুক্তি, multi-paragraph context
    ❌ noise বেশি, relevance কম
  
  খুব বড় (৮১৯২+):
    ❌ একটা chapter — খুব বেশি noise
    ❌ retrieval precision কমে

OVERLAP — টুকরো ওভারল্যাপ:

  কেন overlap দরকার?
  → কাটার জায়গায় তথ্য হারাতে পারে
  → আগের টুকরোর শেষ = পরের টুকরোর শুরু
  → continuity বজায় থাকে

  সোনালী অনুপাত: ১০-২০% overlap
    ৫১২ token chunk + ১০২ overlap (২০%)
    → টুকরোর boundary-তে context হারায় না

CHUNKING METHODS:

১. FIXED-SIZE CHUNKING (সবচেয়ে সহজ)
   N tokens পরপর কাটো।
   ✅ সহজ, দ্রুত, deterministic
   ❌ বাক্য/অনুচ্ছেদ মাঝখানে কাটে
   → সাধারণ ব্যবহারে যথেষ্ট

২. SENTENCE-BOUNDARY CHUNKING
   বাক্যের শেষে কাটো (। ? !)
   ✅ অর্থ সংরক্ষিত
   ❌ বাক্যের দৈর্ঘ্য ভিন্ন — chunk size অসম
   → আইনি, চিকিৎসা docs

৩. PARAGRAPH-BOUNDARY CHUNKING  
   অনুচ্ছেদে কাটো
   ✅ সম্পূর্ণ ধারণা এক chunk-এ
   ❌ অনুচ্ছেদ বড় হলে সমস্যা
   → technical docs, papers

৪. SEMANTIC CHUNKING (advanced)
   অর্থ পরিবর্তনে কাটো
   → embedding similarity দেখো
   → similarity drop = নতুন chunk
   ✅ সবচেয়ে নির্ভুল
   ❌ ধীর, জটিল
   → গবেষণা, precision-critical

৫. DOCUMENT STRUCTURE CHUNKING
   markdown headers, HTML tags অনুযায়ী
   H1/H2/H3 = natural boundaries
   → docs, wikis, technical specs

METADATA — প্রতিটা chunk-এ ট্যাগ:
  {
    text: "...",
    source: "doc.pdf",
    page: 42,
    section: "3.2",  
    chunk_id: "doc_042_03",
    tokens: 487
  }
  → citation, filtering, debugging</div>

<div class="dialogue">বিভাজন — division, partition। কুরআনে আল্লাহ বলেন — "রমজান মাস, যে মাসে কুরআন নাজিল হয়েছে... পৃথক পৃথক রাতে।" (২:১৮৫)। কুরআন নাজিল হয়েছে খণ্ডে খণ্ডে — ২৩ বছরে, প্রাসঙ্গিক সময়ে। কিন্তু প্রতিটি খণ্ড সম্পূর্ণ অর্থ বহন করে। Chunking-ও তেমনি — সঠিক স্থানে কাটতে হয়, যাতে প্রতিটি টুকরো সম্পূর্ণ অর্থ বহন করে।</div>
<div class="dialogue en">"Vibhajan — division, partition. Allah says — 'Ramadan, the month in which the Quran was revealed... in separate nights.' (2:185). The Quran was revealed in pieces — over 23 years, at relevant times. But each piece carries complete meaning. Chunking too — cut at the right place, so each piece carries complete meaning."</div>`,
  senior:{
    title:"Chunking Audit — তোমার RAG-এ",
    body:`<p><strong>শুরু:</strong> ৫১২ টোকেন + ২০% overlap + sentence boundary। এটাই baseline।</p><p><strong>পরীক্ষা:</strong> একই ডকুমেন্ট তিনভাবে chunk করো (fixed, sentence, paragraph)। retrieval precision তুলনা করো।</p><p><strong>Advanced:</strong> semantic chunking — embedding similarity drop-এ কাটো। LangChain SemanticChunker, LlamaIndex SemanticSplitter।</p><p><strong>প্রোডাকশন:</strong> প্রতিটা chunk-এ metadata দাও — source, page, section। citation সহজ হয়।</p>`
  }
});

// ══ DOOR 4: RETRIEVAL ══
doors.push({
  num:4, icon:"🔍", color:"#52c41a", name:"অনুসন্ধানীর গ্রন্থাগার",
  subtitle:"The Searcher's Library", tech:"Retrieval Methods Deep Dive",
  spirit:"তালাশ — সঠিক তথ্য খোঁজা",
  secret:"শুধু embedding similarity দিয়ে retrieval করলে ৬০-৭০% সঠিক। BM25 + dense = ৮৫%+। Hybrid retrieval হলো সোনালী মান। Vector search একা যথেষ্ট নয় — keyword search লাগে।",
  recall:{
    q:"গ্রন্থাগারিক কেন শুধু একটা তালিকা নয়, দুটো ব্যবহার করেন?",
    qen:"Why does the librarian use two indexes, not one?",
    a:"কারণ একটা তালিকা দিয়ে সব বই পাওয়া যায় না। Dense search = অর্থ অনুযায়ী। Sparse/BM25 = keyword অনুযায়ী। দুটো মিলে = সব বই পাওয়া যায়। Hybrid retrieval।",
    aen:"Because one index can't find all books. Dense = by meaning. Sparse/BM25 = by keyword. Together = all books found. Hybrid retrieval."
  },
  story:`
<p class="scene-setting">চতুর্থ দৃষ্টি। একটা বিশাল গ্রন্থাগার। দুটো তালিকা — একটা বিষয় অনুযায়ী, একটা কীওয়ার্ড অনুযায়ী। গ্রন্থাগারিক সাবিহা বললেন — "শুধু বিষয় দিয়ে খুঁজলে কিছু বই মিস হয়। শুধু keyword দিয়ে খুঁজলে আরও মিস হয়। দুটো মিলে — সব পাওয়া যায়।"</p>
<p class="scene-setting en">The fourth sight. A vast library. Two indexes — one by subject, one by keyword. Librarian Sabiha said — "Searching by subject alone misses some books. By keyword alone misses more. Together — everything is found."</p>

<div class="dialogue">কাঁটার বলেছিলেন — সঠিক টুকরোয় ভাঙো। কিন্তু আমি বলি — ভাঙলে কী হবে যদি সঠিক টুকরো খুঁজে না পাও? Retrieval। এটাই RAG-এর হৃদপিণ্ড। ভুল টুকরো পেলে মডেল ভুল উত্তর দেবে — আত্মবিশ্বাসে।</div>
<div class="dialogue en">"The cutter said — break into right pieces. But I say — what good are pieces if you can't find the right one? Retrieval. This is RAG's heart. Wrong piece found, model gives wrong answer — confidently."</div>

<div class="code-block">Retrieval Methods — Finding the Right Piece:

৩ ধরনের Search:

১. DENSE (Semantic/Vector) SEARCH
  Query → embedding → cosine similarity 
  → top-k chunks
  
  ✅ অর্থ বোঝে — "machine learning" query 
     finds "ML", "artificial intelligence"
  ❌ নির্দিষ্ট keyword মিস করে — 
     "GPT-4" query doesn't find exact "GPT-4"
  ❌ proper nouns, IDs, codes-এ দুর্বল
  
  Models: OpenAI ada-002, BGE, E5, Cohere

২. SPARSE (Keyword/BM25) SEARCH
  Query → tokenized → TF-IDF scoring
  → top-k chunks
  
  ✅ নির্দিষ্ট keyword খুঁজে পায় — 
     "GPT-4" finds exact "GPT-4"
  ✅ proper nouns, code, IDs-এ শক্তিশালী
  ❌ অর্থ বোঝে না — "ML" query misses 
     "machine learning"
  
  Engines: Elasticsearch, Lucene, BM25

৩. HYBRID SEARCH (Production Standard)
  Dense + Sparse → merge scores → top-k
  
  ✅ অর্থ ও keyword দুটোই ধরে
  ✅ ৮৫-৯৫% retrieval accuracy
  ✅ Production RAG-এ standard
  
  Implementation:
    → Dense top-50 + Sparse top-50
    → Reciprocal Rank Fusion (RRF) merge
    → Final top-5

VECTOR DATABASES:
  Pinecone     → managed, easy, $$
  Weaviate     → open-source, hybrid built-in
  Qdrant       → fast, Rust-based, open
  Milvus       → scale, enterprise
  Chroma       → simple, local, prototyping
  pgvector     → PostgreSQL extension, simple

EMBEDDING OPTIMIZATION:

  Query Embedding ≠ Document Embedding
  
  কিছু model-এ আলাদা query/passage encoder:
    • BGE: query prefix "Represent this 
      sentence for searching relevant passages:"
    • E5: "query:" vs "passage:" prefix
    • Cohere: separate embed-english-v3 
      with search_type parameter

  → সঠিক prefix ব্যবহার করো — 
    naive embedding থেকে ১০-২০% উন্নতি

MULTI-VECTOR RETRIEVAL:
  একটা ডকুমেন্টের একাধিক representation:
    • Summary embedding (short)
    • Full text embedding (detailed)  
    • Section embeddings (granular)
  → বিভিন্ন query type-এ ভালো কভারেজ</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Dense-only</div>শুধু vector search। "BERT architecture" query করলে "transformer neural network" পাবে (অর্থ মিল), কিন্তু "BERT" নামের exact paper মিস করবে। ৬০-৭০% accuracy।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Hybrid</div>Dense + Sparse। "BERT architecture" query — অর্থ মিল (transformer papers) এবং exact keyword (BERT paper)। ৮৫-৯৫% accuracy। এটাই production standard।</div>
</div>

<div class="dialogue">তালাশ — search, seeking। কুরআনে আল্লাহ বলেন — "যারা আমার সন্ধানে চলে, আমি তাদের পথ দেখাই।" রিট্রিভাল হলো জ্ঞানের তালাশ। একটা পথ দিয়ে সব জ্ঞান পাওয়া যায় না — দুটো পথ লাগে। Dense (অর্থ) এবং Sparse (শব্দ)। দুটো মিলে = সম্পূর্ণ তালাশ।</div>
<div class="dialogue en">"Talash — search, seeking. Allah says — 'Those who seek Me, I guide them.' Retrieval is seeking knowledge. One path doesn't find all — two are needed. Dense (meaning) and Sparse (words). Together = complete search."</div>`,
  senior:{
    title:"Retrieval Pipeline — Production Setup",
    body:`<p><strong>Stack:</strong> Qdrant/Weaviate (hybrid) + BGE-large (dense) + BM25 (sparse) + RRF fusion।</p><p><strong>top-k:</strong> প্রথমে top-20 retrieve করো, তারপর reranker দিয়ে top-5 বাছো।</p><p><strong>Filtering:</strong> metadata filter দাও — source, date, category অনুযায়ী।</p><p><strong>Cache:</strong> একই query একাধিক বার? embedding cache করো। Redis।</p>`
  }
});

// ══ DOOR 5: RERANKING ══
doors.push({
  num:5, icon:"🏆", color:"#ff6b35", name:"বিচারকের কক্ষ",
  subtitle:"The Judge's Chamber", tech:"Reranking & Precision",
  spirit:"তারজিহ — প্রাধান্য দেওয়া",
  secret:"Retrieval top-20 এ সঠিক chunk আছে, কিন্তু সম্ভবত #১৫ নম্বরে। Reranker সঠিক chunk-কে #১ এ নিয়ে আসে। Cross-encoder > bi-encoder। Retrieval বিস্তৃত, reranking সূক্ষ্ম। দুটো স্তর = সর্বোচ্চ নির্ভুলতা।",
  recall:{
    q:"বিচারক কেন প্রথম তালিকা বাছাই করেন না, দ্বিতীয়বার যাচাই করেন?",
    qen:"Why does the judge not accept the first list, but reviews again?",
    a:"কারণ প্রথম তালিকা দ্রুত কিন্তু অনুমানমূলক। দ্বিতীয় যাচাই ধীর কিন্তু নির্ভুল। Retrieval = দ্রুত তালিকা। Reranking = সূক্ষ্ম যাচাই। দুটো স্তর = সর্বোচ্চ নির্ভুলতা।",
    aen:"Because the first list is fast but approximate. Second review is slow but precise. Retrieval = fast list. Reranking = fine review. Two stages = maximum accuracy."
  },
  story:`
<p class="scene-setting">পঞ্চম দৃষ্টি। বিচারকের কক্ষ। বিচারক আব্দুল্লাহ সামনে ২০টা নথি পেয়েছেন — retrieval থেকে। কিন্তু তিনি সব গ্রহণ করেন না। তিনি প্রতিটি পড়েন, তুলনা করেন, তারপর সেরা ৫টি বাছেন। "প্রথম তালিকা দ্রুত," তিনি বললেন। "কিন্তু আমার কাজ সূক্ষ্ম। প্রতিটি যাচাই করা।"</p>
<p class="scene-setting en">The fifth sight. The judge's chamber. Judge Abdullah has 20 documents before him — from retrieval. But he doesn't accept all. He reads each, compares, then picks the best 5. "The first list is fast," he said. "But my work is precise. Each verified."</p>

<div class="dialogue">অনুসন্ধানী বলেছিলেন — hybrid retrieval সঠিক। কিন্তু আমি বলি — retrieval শুধু শুরু। top-২০ retrieved-এ সঠিক chunk আছে, কিন্তু সম্ভবত #১৫ নম্বরে। আমার কাজ সেটাকে #১ এ আনা। এটাই reranking। দ্বি-স্তর প্রক্রিয়া — retrieval বিস্তৃত, reranking সূক্ষ্ম।</div>
<div class="dialogue en">"The searcher said — hybrid retrieval is right. But I say — retrieval is just the start. The correct chunk is in top-20, but maybe at #15. My job is to bring it to #1. This is reranking. Two-stage process — retrieval broad, reranking precise."</div>

<div class="code-block">Reranking — Two-Stage Retrieval:

WHY RERANKING IS NEEDED:

  Bi-Encoder (retrieval stage):
    Query → embedding
    Doc → embedding
    Score = cosine(query_emb, doc_emb)
    
    ✅ দ্রুত — pre-computed doc embeddings
    ✅ million docs-এ সার্চ সেকেন্ডে
    ❌ অনুমানমূলক — query ও doc আলাদা encoded
    
  Cross-Encoder (reranking stage):
    [Query, Doc] → together → score
    
    ✅ নির্ভুল — query ও doc একসাথে processed
    ✅ attention query-এর প্রতিটি শব্দ → 
       doc-এর প্রতিটি শব্দের সাথে
    ❌ ধীর — প্রতিটি query-doc pair আলাদা 
       forward pass
  
  সমাধান: দুটো স্তরে ব্যবহার

TWO-STAGE PIPELINE:

  Stage 1: RETRIEVAL (bi-encoder)
    বিশাল corpus → top-20 দ্রুত
    → বিস্তৃত কভারেজ, কম precision
    
         ↓
    
  Stage 2: RERANKING (cross-encoder)  
    top-20 → প্রতিটি query-doc pair score
    → top-5 সূক্ষ্ম
    → উচ্চ precision
    
    → সঠিক chunk #১৫ থেকে #১ এ!

RERANKER MODELS:
  Cohere Rerank 3 → API, সেরা quality
  BGE-Reranker-v2 → open, strong
  Jina Reranker → fast, good
  Cross-encoder MS-MARCO → MiniLM, free

EMPIRICAL IMPACT:
  Retrieval only (top-5):        ৬৫% accuracy
  Retrieval + Reranking (top-5): ৮৫%+ accuracy
  → ২০%+ improvement শুধু reranking থেকে!

LATENCY:
  Retrieval: ~৫০ms (100M docs)
  Reranking: ~১০০ms (20 pairs)
  Total: ~১৫০ms
  → acceptable for production

WHEN TO RERANK:
  ✅ সবসময় যদি precision গুরুত্বপূর্ণ
  ✅ বিশেষ করে ফ্যাক্ট-বেসড QA
  ✅ আইনি, চিকিৎসা, financial RAG
  ❌ সম্ভব না যদি latency অত্যন্ত গুরুত্বপূর্ণ</div>

<div class="dialogue">তারজিহ — প্রাধান্য দেওয়া, preference। ইসলামী আইনে তারজিহ হলো — একাধিক মতের মধ্যে সবচেয়ে শক্তিশালী প্রমাণ বাছা। Reranking-ও তেমনি — একাধিক chunk-এর মধ্যে সবচেয়ে প্রাসঙ্গিক বাছা। দ্রুত তালিকা (retrieval) দিয়ে শুরু, সূক্ষ্ম যাচাই (reranking) দিয়ে শেষ। দুটো স্তর = সর্বোচ্চ নির্ভুলতা।</div>
<div class="dialogue en">"Tarjih — giving preference. In Islamic law, tarjih is choosing the strongest evidence among multiple opinions. Reranking too — choosing the most relevant among multiple chunks. Start with a fast list (retrieval), end with fine review (reranking). Two stages = maximum accuracy."</div>`,
  senior:{
    title:"Reranking Stack — Production",
    body:`<p><strong>Cohere Rerank 3:</strong> API, সেরা quality, $২/১K calls।</p><p><strong>BGE-Reranker-v2:</strong> open-source, লোকাল, ফ্রি। HuggingFace থেকে।</p><p><strong>Pipeline:</strong> Hybrid retrieve top-20 → Rerank top-5 → LLM context।</p><p><strong>A/B test:</strong> একই query তে retrieval-only বনাম reranked — accuracy তুলনা করো। ২০%+ উন্নতি দেখবে।</p>`
  }
});
