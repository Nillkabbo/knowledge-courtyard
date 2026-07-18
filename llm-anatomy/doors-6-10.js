// ════════════════════════════════════════
// LLM দর্শন — DOORS 6-10
// Deep Dive: Generation → Master Synthesis
// ════════════════════════════════════════

// ══ DOOR 6: GENERATION ══
doors.push({
  num:6, icon:"🎲", color:"#ffc857", name:"জেনারেশন চেম্বার",
  subtitle:"The Generation Chamber", tech:"Autoregressive Generation",
  spirit:"তাসদির — বাক্য সৃষ্টি",
  secret:"LLM পুরো উত্তর একসাথে দেয় না। একটা টোকেন, তারপর আরেকটা, তারপর আরেকটা। প্রতিটা টোকেন আগের সব টোকেনের উপর নির্ভর করে। এটাই autoregressive generation — এক সময় এক ধাপ।",
  recall:{
    q:"ভাস্কর কেন পুরো মূর্তি একসাথে খোদাই করেন না, ধাপে ধাপে?",
    qen:"Why doesn't the sculptor carve the whole statue at once, but step by step?",
    a:"কারণ প্রতিটা আঁচড় আগের উপর নির্ভর করে। LLM-ও তেমনি — এক টোকেন, তারপর আরেকটা। প্রতিটা টোকেন আগের সব টোকেন দেখে বাছা হয়। এটাই autoregressive।",
    aen:"Because each stroke depends on the previous. LLMs too — one token, then another. Each token chosen after seeing all previous. This is autoregressive."
  },
  story:`
<p class="scene-setting">ষষ্ঠ কক্ষ। একটা অদ্ভুত কক্ষ। ভাস্কর শারমিন একটা পাথর খোদাই করছেন — কিন্তু এক সাথে নয়। একটা আঁচড়। থামেন। দেখেন। তারপর আরেকটা আঁচড়। "প্রতিটা আঁচড়," তিনি বললেন, "আগের সব আঁচড়ের উপর নির্ভর করে। পুরো মূর্তি একসাথে হয় না। ধাপে ধাপে।"</p>
<p class="scene-setting en">The sixth chamber. A strange room. Sculptor Sharmin carves stone — but not all at once. One stroke. Stops. Looks. Then another stroke. "Each stroke," she said, "depends on all previous strokes. The whole statue doesn't happen at once. Step by step."</p>

<div class="dialogue">প্রশিক্ষক বলেছিলেন — তিন স্তরে শেখা। কিন্তু আমি বলি — শেখার পরে আসে কথা বলা। LLM কীভাবে কথা বলে? এক টোকেন। তারপর আরেকটা। তারপর আরেকটা। প্রতিটা ধাপে মডেল পুরো প্রসঙ্গ দেখে, একটা সম্ভাবনা ডিস্ট্রিবিউশন তৈরি করে, তারপর একটা টোকেন বাছে। এটাই generation।</div>
<div class="dialogue en">"The trainer said — learning in three stages. But I say — after learning comes speaking. How does the LLM speak? One token. Then another. Then another. At each step the model sees the full context, creates a probability distribution, then picks one token. This is generation."</div>

<div class="code-block">Autoregressive Generation — One Token at a Time:

INPUT: "The capital of Bangladesh is"
  → tokens: [464, 3797, 286, 12593, 318]

STEP 1: Process all tokens → attention → 
  feed-forward → output vector
  → probability distribution over vocabulary
  
  P(next) = {Dhaka: 0.89, Delhi: 0.03, ...}
  → Pick: "Dhaka" (temperature=0)
  → Append to sequence

STEP 2: Now process [464, 3797, 286, 12593, 318, "Dhaka"]
  → P(next) = {".": 0.7, "is": 0.15, ...}
  → Pick: "."

STEP 3: Process [..., "Dhaka", "."]
  → P(next) = {"<END>": 0.8, "The": 0.1, ...}
  → Pick: "<END>"

OUTPUT: "The capital of Bangladesh is Dhaka."

KEY INSIGHT:
  প্রতিটা token তৈরি করতে গোটা context 
  প্রসেস করতে হয়। ১০০০ token আউটপুট = 
  ১০০০ বার গোটা model forward pass।
  
  → এজন্য generation ধীর (pre-fill থেকে)
  → এজন্য KV cache দরকার (পুরোনো token 
    পুনরায় গোনা এড়াতে)

GENERATION STRATEGIES:

১. GREEDY (temperature=0)
  → সর্বদা সর্বোচ্চ সম্ভাবনার token
  → নির্ভুল কিন্তু পুনরাবৃত্তিমূলক

২. BEAM SEARCH
  → top-B paths একসাথে রাখো
  → সেরা sequence বাছো
  → অনুবাদে ভালো, chat-এ খারাপ

৩. NUCLEUS SAMPLING (top_p)
  → শীর্ষ p% সম্ভাবনা থেকে বাছো
  → স্বাভাবিক, বৈচিত্র্যময়

৪. TEMPERATURE SAMPLING
  → distribution কে চ্যাপটা/তীক্ষ্ণ করো
  → temperature=0 তীক্ষ্ণ, 1+ চ্যাপটা

৫. CONSTRAINED DECODING
  → শুধু নির্দিষ্ট token allow করো
  → JSON schema, grammar constraints
  → Structured output গ্যারান্টি

STOP CONDITIONS:
  • Max tokens reached (e.g., 4096)
  • Stop sequence hit (e.g., "\\n\\n")
  • End-of-text token generated
  → না হলে model অনন্তকাল জেনারেট করবে

STREAMING (SSE):
  প্রতিটা token তৈরি হওয়ামাত্র পাঠাও
  → user দ্রুত দেখে
  → perceived latency কমে
  → ChatGPT, Claude — সব streaming ব্যবহার করে</div>

<div class="dialogue">তাসদির — বাক্য সৃষ্টি। কুরআনে আল্লাহ বলেন — "পবিত্র সেই সত্তা যিনি সৃষ্টি করেছেন প্রতিটি কিছু উত্তমরূপে।" (৩২:৭)। LLM-এর সৃষ্টিও — প্রতিটি টোকেন ধাপে ধাপে। এক সাথে নয়। প্রতিটা ধাপ পূর্বের উপর দাঁড়ায়। এই ধীরগতির সৃষ্টিই ভাষার ভিত্তি।</div>
<div class="dialogue en">"Tasdir — sentence creation. Allah says — 'Blessed is He who created everything in the best form.' (32:7). The LLM's creation too — each token step by step. Not all at once. Each step rests on the previous. This slow creation is the foundation of language."</div>`,
  senior:{
    title:"Generation Latency — কেন ধীর",
    body:`<p><strong>Pre-fill (TTFT):</strong> prompt প্রসেস করা — fast, parallel।</p><p><strong>Decode (TPOT):</strong> প্রতিটা token sequential — slow। ১০০ token/sec ≈ ভালো।</p><p><strong>KV Cache:</strong> পুরোনো token-এর key-value সংরক্ষণ। পুনরায় গোনা এড়ায়।</p><p><strong>Speculative Decoding:</strong> ছোট মডেল দ্রুত draft করে, বড় মডেল verify করে। ২-৩x faster।</p>`
  }
});

// ══ DOOR 7: HALLUCINATION ══
doors.push({
  num:7, icon:"🌫️", color:"#ff6b35", name:"মরীচিকা কক্ষ",
  subtitle:"The Mirage Chamber", tech:"Hallucination — Causes & Prevention",
  spirit:"সত্য ও ভ্রম — নির্ভরযোগ্যতা",
  secret:"LLM মিথ্যা বলে না — সে অনুমান করে। কিন্তু অনুমান যখন ভুল, তখন তা হ্যালুসিনেশন। কারণ: training data, attention failure, temperature, RLHF sycophancy। প্রতিকার: RAG, grounding, verification, low temperature।",
  recall:{
    q:"মরীচিকা কক্ষে কেন দেখা যায় যা নেই?",
    qen:"Why does the mirage chamber show things that aren't there?",
    a:"কারণ মস্তিষ্ক অনুমান করে — আগের অভিজ্ঞতা থেকে। LLM-ও তেমনি — training data থেকে অনুমান। যখন অনুমান ভুল, তখন হ্যালুসিনেশন। আস্থা রাখা যায় না যাচাই ছাড়া। RAG ও verification ছাড়া।",
    aen:"Because the brain guesses — from past experience. LLMs too — guess from training data. When the guess is wrong, hallucination. Can't trust without verification. Without RAG and verification."
  },
  story:`
<p class="scene-setting">সপ্তম কক্ষ। একটা কুয়াশায় ভরা কক্ষ। দেয়ালে ছবি — কিন্তু কাছে গেলে বোঝা যায় ছবি নয়, আলোর কৌশল। কক্ষরক্ষক তাহসিন বললেন — "এই কক্ষে যা দেখো, তা বাস্তব নয়। মস্তিষ্ক তৈরি করে। LLM-ও তেমনি — যা বলে, তা বাস্তব নয়। সে অনুমান করে। কখনো ভুল।"</p>
<p class="scene-setting en">The seventh chamber. A fog-filled room. Pictures on walls — but close up, they're not pictures, they're light tricks. Chamber keeper Tahsin said — "What you see here isn't real. The brain creates it. The LLM too — what it says isn't always real. It guesses. Sometimes wrong."</p>

<div class="dialogue">ভাস্কর বলেছিলেন — এক টোকেন এক টোকেন। কিন্তু আমি বলি — প্রতিটা টোকেন একটা অনুমান। কিন্তু অনুমান যখন ভুল? তখন হ্যালুসিনেশন। LLM জেনে বলে না — সে অনুমান করে বলে। সে আত্মবিশ্বাসী ভুল করে। এটাই সবচেয়ে বড় সমস্যা।</div>
<div class="dialogue en">"The sculptor said — one token at a time. But I say — each token is a guess. But when the guess is wrong? Hallucination. The LLM doesn't speak from knowledge — it speaks from probability. It confidently errs. This is the biggest problem."</div>

<div class="code-block">Hallucination — Why LLMs Confidently Lie:

WHAT IT IS:
  LLM যখন সত্য নয় এমন তথ্য আত্মবিশ্বাসে বলে।
  
  উদাহরণ:
  "Who wrote 'To Kill a Mockingbird'?"
  → "Harper Lee" ✓ (সঠিক)
  
  "Who wrote 'The Shadow of the Wind'?"
  → "Carlos Ruiz Zafón" ✓ (সঠিক)
  
  "Who wrote 'The Silent Patient'?"  
  → "Alex Michaelides" — wait, is it?
  → LLM হয়তো বলে "Stephen King" (ভুল!)
  → কিন্তু আত্মবিশ্বাসের সাথে!

WHY IT HAPPENS (৫টি কারণ):

১. TRAINING DATA GAP
  যা training-এ ছিল না, সে জানে না।
  কিন্তু "I don't know" না বলে অনুমান করে।
  → RLHF এই আচরণ বাড়ায় (sycophancy)

২. ATTENTION FAILURE
  দীর্ঘ কন্টেক্সটে attention দুর্বল হয়।
  গুরুত্বপূর্ণ তথ্য "lost in the middle"।
  → মডেল ভুল অংশ থেকে উত্তর দেয়

৩. PROBABILITY, NOT KNOWLEDGE
  LLM "জানে" না — সে probability হিসাব করে।
  " সবচেয়ে probable" ≠ "সঠিক"
  → high probability hallucination

৪. SYCOPHANCY (RLHF artifact)
  মডেল ইউজারকে খুশি করতে চায়।
  ইউজার যা বলছে, তার সাথে একমত হয়।
  → "আমি ভালো" → "হ্যাঁ, আপনি খুব ভালো!"

৫. TEMPERATURE EFFECT
  উচ্চ temperature = বেশি randomness
  = বেশি hallucination সুযোগ

PREVENTION — ৭ LAYER DEFENSE:

Layer 1: GROUNDING (RAG)
  মডেলকে উৎস দাও — "শুধু এই ডকুমেন্ট 
  থেকে উত্তর দাও"। RAG = fact-based।

Layer 2: LOW TEMPERATURE
  temperature=0 → deterministic, কম hallucination

Layer 3: CITATION REQUIREMENT
  "প্রতিটা দাবির উৎস দাও" → মডেল উৎস খুঁজে 
  না পেলে দাবি ছাড়ে না

Layer 4: CHAIN-OF-VERIFICATION
  উত্তর দিক → তারপর "উপরের প্রতিটা 
  দাবি verify করো" → self-check

Layer 5: UNCERTAINTY PROMPTING
  "যদি নিশ্চিত না হও, 'আমি জানি না' বলো"
  → explicit uncertainty handling

Layer 6: STRUCTURED OUTPUT
  JSON schema দাও — confidence field সহ
  {answer: "...", confidence: 0.6, 
   source: "doc.pdf, p.3"}

Layer 7: EXTERNAL VERIFICATION
  একটা দ্বিতীয় model বা human reviewer 
  উত্তর যাচাই করে</div>

<div class="dialogue">সত্য ও ভ্রম। কুরআনে আল্লাহ বলেন — "মিথ্যা তো সত্যের বিপরীত।" (১৩:১)। LLM-এর হ্যালুসিনেশন মিথ্যা নয় — ভ্রম। সে ভুল বোঝে, ভুল বলে। কিন্তু ইচ্ছা করে নয়। তবু বিপজ্জনক — কারণ আত্মবিশ্বাসী। সত্য যাচাই করা প্রতিটা মানুষের দায়িত্ব। কুরআন বলে — "যারা সত্য যাচাই করে না, তাদের কথা বিশ্বাস করো না।" (৪৯:৬)। LLM-ও তেমনি — যাচাই ছাড়া বিশ্বাস নয়।</div>
<div class="dialogue en">"Truth and illusion. Allah says — 'Falsehood is the opposite of truth.' (13:1). LLM hallucination isn't lying — it's illusion. It misunderstands, misspeaks. But not intentionally. Still dangerous — because it's confident. Verifying truth is every person's duty. The Quran says — 'Don't believe those who don't verify.' (49:6). The LLM too — no belief without verification."</div>`,
  senior:{
    title:"Hallucination Audit — প্রোডাকশনে",
    body:`<p><strong>Fact-checking:</strong> প্রতিটা ফ্যাক্ট আলাদা LLM কল দিয়ে verify করো।</p><p><strong>Confidence score:</strong> logprobs চেক করো — কম confidence = বেশি hallucination ঝুঁকি।</p><p><strong>Human-in-the-loop:</strong> সংবেদনশীল আউটপুটে মানুষ review করে।</p><p><strong>Eval set:</strong> ১০০টা প্রশ্নে সঠিক উত্তর ট্র্যাক করো। নতুন মডেলে রিগ্রেশন চেক।</p>`
  }
});

// ══ DOOR 8: SCALING LAWS ══
doors.push({
  num:8, icon:"📈", color:"#5b9eff", name:"স্কেল পরিমাপকের গ্রন্থ",
  subtitle:"The Scale Measurer's Ledger", tech:"Scaling Laws & Model Families",
  spirit:"পরিমাণ — আকারের তাৎপর্য",
  secret:"বেশি ডেটা + বেশি প্যারামিটার + বেশি কম্পিউট = ভালো মডেল। এটাই scaling law। কিন্তু শুধু আকার নয় — ডেটার গুণমান, architecture, training recipe সব গুরুত্বপূর্ণ। Chinchilla law: প্রতি প্যারামিটারে ~২০ টোকেন ডেটা লাগে।",
  recall:{
    q:"স্কেল পরিমাপক কেন বড় মালের সাথে বেশি পানি মেপে যান?",
    qen:"Why does the scale measurer proportion water to grain size?",
    a:"কারণ অনুপাত গুরুত্বপূর্ণ। বড় মালের জন্য বেশি পানি। Chinchilla scaling law-ও তেমনি — বড় মডেলের জন্য বেশি ডেটা। প্রতি প্যারামিটারে ~২০ টোকেন। ভুল অনুপাত = অপচয়।",
    aen:"Because proportion matters. More water for more grain. Chinchilla scaling law too — bigger model needs more data. ~20 tokens per parameter. Wrong ratio = waste."
  },
  story:`
<p class="scene-setting">অষ্টম কক্ষ। একটা গ্রন্থাগার যেখানে স্কেল রেখে বই সাজানো। ছোট বই থেকে বড় বই — ক্রমানুসারে। স্কেল পরিমাপক ড. সাবিনা একটা বড় খাতায় সংখ্যা লিখছেন — প্যারামিটার, ডেটা, কম্পিউট। "অনুপাত," তিনি বললেন। "বড় মডেল = ভালো মডেল? শুধু তখনই, যখন ডেটার অনুপাত ঠিক।"</p>
<p class="scene-setting en">The eighth chamber. A library where books are arranged by scale. From small to large — in order. Scale measurer Dr. Sabina writes in a large ledger — parameters, data, compute. "Proportion," she said. "Bigger model = better model? Only when the data ratio is right."</p>

<div class="dialogue">মরীচিকা কক্ষ বলেছিলেন — hallucination ঠেকাও। কিন্তু আমি বলি — একটা সহজ সত্য আছে। বড় মডেল = কম hallucination। বেশি ডেটা = বেশি জ্ঞান। বেশি কম্পিউট = বেশি সূক্ষ্মতা। এটাই scaling law। কিন্তু অনুপাত ঠিক না হলে — অপচয়।</div>
<div class="dialogue en">"The mirage chamber said — prevent hallucination. But I say — there's a simple truth. Bigger model = less hallucination. More data = more knowledge. More compute = more refinement. This is the scaling law. But without the right ratio — waste."</div>

<div class="code-block">Scaling Laws — Bigger is Better (with conditions):

KAPLAN SCALING LAW (2020):
  Loss ∝ N^-0.076 (parameters)
  Loss ∝ D^-0.095 (data)
  Loss ∝ C^-0.050 (compute)
  
  → প্রতিটা ক্ষেত্রে loss কমে, কিন্তু 
    power law-এ।
  → ডাবল কম্পিউট → ৯৩% loss reduction
  → বড় মডেল সবসময় ভালো?

CHINCHILLA LAW (2022, DeepMind):
  Kaplan ভুল ছিল!
  
  সঠিক অনুপাত: 
    প্রতি প্যারামিটারে ~২০ টোকেন ডেটা লাগে।
  
  ৭০B মডেল → ১.৪T টোকেন ডেটা
  ৭B মডেল → ১৪০B টোকেন ডেটা
  
  Chinchilla (৭০B + ১.৪T tokens)
  → GPT-3 (১৭৫B + ৩০০B tokens) কে হারায়!
  → অর্থাৎ ছোট মডেল + বেশি ডেটা > 
    বড় মডেল + কম ডেটা

MODEL FAMILIES (2024-2025 landscape):

  ┌──────────────────────────────────────┐
  │ OPEN WEIGHTS (local, free)           │
  │                                      │
  │ Llama 3.1 (Meta):                    │
  │   8B / 70B / 405B                    │
  │   → best open model, multilingual    │
  │                                      │
  │ Mistral / Mixtral (Mistral AI):      │
  │   7B / 8x7B MoE / 8x22B MoE         │
  │   → efficient, European              │
  │                                      │
  │ Qwen 2.5 (Alibaba):                  │
  │   0.5B / 7B / 72B                    │
  │   → strong multilingual, code        │
  │                                      │
  │ Phi-3 (Microsoft):                   │
  │   3.8B / 7B / 14B                    │
  │   → small but mighty, mobile         │
  └──────────────────────────────────────┘

  ┌──────────────────────────────────────┐
  │ PROPRIETARY (API, paid)              │
  │                                      │
  │ GPT-5 / o4-mini (OpenAI):            │
  │   → multimodal, fastest, large ctx   │
  │   → o-series: reasoning, test-time   │
  │                                      │
  │ Claude Sonnet 4 (Anthropic):         │
  │   → best coding, 200K+ context       │
  │                                      │
  │ Gemini 2.5 Pro (Google):             │
  │   → 1M+ context, multimodal native   │
  └──────────────────────────────────────┘

MOE (Mixture of Experts):
  প্রতিটা token-এ শুধু কয়েকজন "expert" 
  কাজ করে, সব নয়।
  
  Mixtral 8x7B: ৮ experts, প্রতিটা ৭B
  → total ৪৭B কিন্তু প্রতিটা token-এ 
    শুধু ~১৩B active
  → fast + capable

CHOOSE BY NEED:
  প্রোডাকশন chat → GPT-5 বা Claude Sonnet 4
  কোড → Claude Sonnet 4
  হার্ড রিজনিং → o4-mini / o3 (test-time compute)
  বাজেট → Llama 3.1 8B (local/free)
  মোবাইল → Phi-3 mini / Qwen 3 ছোট
  দীর্ঘ ডকুমেন্ট → Gemini 2.5 (1M+ ctx)
  বহুভাষিক → Qwen 2.5 / Llama 3.1</div>

<div class="dialogue">পরিমাণ — quantity, measure। কুরআনে আল্লাহ বলেন — "যদি পৃথিবীর সব গাছ কলম হতো এবং সমুদ্র কালি হতো... আল্লাহর জ্ঞান শেষ হতো না।" (৩১:২৭)। আল্লাহর জ্ঞান অসীম। মডেলের জ্ঞান সীমিত — কিন্তু scaling। বেশি ডেটা, বেশি প্যারামিটার = বেশি জ্ঞান। কিন্তু সঠিক অনুপাতে। Chinchilla — প্রতি প্যারামিটারে ২০ টোকেন। এটাই scaling-এর মিযান।</div>
<div class="dialogue en">"Qadar — quantity, measure. Allah says — 'If all trees on earth were pens and the ocean were ink... Allah's knowledge would not be exhausted.' (31:27). Allah's knowledge is infinite. The model's knowledge is finite — but scalable. More data, more parameters = more knowledge. But in the right ratio. Chinchilla — 20 tokens per parameter. This is scaling's mizan."</div>`,
  senior:{
    title:"মডেল নির্বাচন — কোনটা কখন",
    body:`<p><strong>ছোট + ফাস্ট (8B):</strong> Llama 3.1 8B — লোকাল, ফ্রি, মোবাইল পারফরম্যান্স ভালো।</p><p><strong>মাঝারি (70B):</strong> Llama 3.1 70B — RAG, code, বেশিরভাগ production।</p><p><strong>বড় (405B):</strong> Llama 3.1 405B — frontier-class, কিন্তু ভারী।</p><p><strong>প্রোপাইটারি:</strong> Claude Sonnet 4 = কোডে সেরা। GPT-5 = মাল্টিমোডাল+স্পিড। Gemini 2.5 = লং কন্টেক্সট। o4-mini / o3 = হার্ড রিজনিং।</p><p><strong>নিয়ম:</strong> ছোট মডেল দিয়ে শুরু করো, দরকার হলে বড় করো।</p>`
  }
});

// ══ DOOR 9: MULTIPLICITY ══
doors.push({
  num:9, icon:"🔀", color:"#52c41a", name:"মাল্টিপাথ কক্ষ",
  subtitle:"The Multi-Path Chamber", tech:"Mixture of Experts, Multimodality",
  spirit:"বহুত্ব — বৈচিত্র্যে শক্তি",
  secret:"একটা মডেল সব কাজে ভালো নয়। কিন্তু একাধিক বিশেষজ্ঞ মিলে — সব কাজে ভালো। Mixture of Experts = বিশেষজ্ঞদের দল। Multimodal = শুধু টেক্সট নয়, ছবি, অডিও, ভিডিও।",
  recall:{
    q:"মাল্টিপাথ কক্ষে কেন একাধিক পথ আছে, একটা নয়?",
    qen:"Why does the multi-path chamber have multiple paths, not one?",
    a:"কারণ বিভিন্ন সমস্যার জন্য বিভিন্ন বিশেষজ্ঞ দরকার। MoE = একাধিক বিশেষজ্ঞ, শুধু প্রয়োজনীয় জন কাজ করে। Multimodal = শুধু টেক্সট নয়, ছবি-অডিও বোঝা। বৈচিত্র্য = শক্তি।",
    aen:"Because different problems need different experts. MoE = multiple experts, only needed ones work. Multimodal = not just text, understanding images/audio. Diversity = strength."
  },
  story:`
<p class="scene-setting">নবম কক্ষ। একটা অদ্ভুত কক্ষ — একটা বড় ছক, আটটা কক্ষে বিভক্ত। প্রতিটি কক্ষে একজন বিশেষজ্ঞ — একজন কোড দেখেন, একজন গণিত, একজন ভাষা, একজন যুক্তি। সমস্যা আসলে শুধু প্রাসঙ্গিক বিশেষজ্ঞ কাজ করেন। কক্ষরক্ষক রাইয়ান বললেন — "এটাই Mixture of Experts।"</p>
<p class="scene-setting en">The ninth chamber. A strange room — a large grid, divided into eight cubicles. Each has an expert — one reads code, one math, one language, one logic. When a problem arrives, only the relevant expert works. Keeper Rayhan said — "This is Mixture of Experts."</p>

<div class="dialogue">স্কেল পরিমাপক বলেছিলেন — বড় মডেল ভালো। কিন্তু আমি বলি — বড় মডেল ধীর, ব্যয়বহুল। কিন্তু যদি বড় মডেলের ক্ষমতা চাও — ধীরতা ছাড়া? Mixture of Experts। বিশেষজ্ঞদের দল। শুধু প্রয়োজনীয় জন কাজ করেন।</div>
<div class="dialogue en">"The scale measurer said — bigger is better. But I say — big models are slow, expensive. But what if you want big model power — without slowness? Mixture of Experts. A team of experts. Only the needed ones work."</div>

<div class="code-block">Mixture of Experts (MoE) & Multimodality:

MIXTURE OF EXPERTS:

  সাধারণ Transformer:
    প্রতিটা token → সব প্যারামিটার প্রসেস করে
    → বড় মডেল = ধীর
    
  MoE Transformer:
    প্রতিটা token → router ঠিক করে কোন 
    "expert" কাজ করবে
    → শুধু ২-৮টা expert active
    → বাকি ঘুমায়

  Mixtral 8x7B:
    Total: ৪৭B প্যারামিটার
    Active per token: ~১৩B
    → GPT-3.5 লেভেল পারফরম্যান্স
    → কিন্তু ১৩B গতির!
  
  GPT-4 (আনুমানিক):
    → ৮ বা ১৬ experts এর MoE
    → ১.৭T total, ~২৮০B active
    → multimodal (vision + text)

  সুবিধা: বড় মডেলের ক্ষমতা, ছোট মডেলের গতি
  অসুবিধা: মেমরি (সব expert রাখতে হয়)

MULTIMODALITY — শুধু টেক্সট নয়:

  Text-only (GPT-3):
    input: "একটা বিড়ালের ছবি দেখো"
    → দেখতে পায় না। শুধু টেক্সট।
  
  Vision-Language (GPT-4V era → GPT-5, Claude Sonnet 4):
    input: [image bytes] + "এই ছবিতে কী?"
    → ছবি বোঝে! টেক্সট ও ছবি একসাথে।
    
  Multimodal Pipeline:
    Image → Vision Encoder → embedding
    Text → Tokenizer → embedding  
    → দুটো embedding একসাথে → Transformer
    
  Modalities:
    Text: tokenizer + text embedding
    Image: patch embedding (ViT)  
    Audio: spectrogram → embedding (Whisper)
    Video: frame-by-frame + temporal

  GPT-5: text + image + audio (native)
  Gemini 2.5: text + image + audio + video
  Claude Sonnet 4: text + image (audio via app, not API)

  ব্যবহার:
    • Image analysis: "এই X-ray-এ কী দেখো?"
    • Document understanding: scanned PDF
    • UI testing: "এই screenshot-এ button কোথায়?"
    • Code from screenshot: "এই design থেকে code"

FUTURE DIRECTIONS:
  • Native audio output (real-time voice)
  • Video understanding (long video)
  • 3D scene understanding
  • Embodied AI (robotics + multimodal)</div>

<div class="dialogue">বহুত্ব — multiplicity, diversity। কুরআনে আল্লাহ বলেন — "মানুষ ও জিনকে আমি একমাত্র সম্প্রদায় হিসেবে সৃষ্টি করেছিলাম" — কিন্তু পরে বৈচিত্র্য এলো। MoE-ও তেমনি — এক মডেল, কিন্তু একাধিক বিশেষজ্ঞ। প্রতিটা সমস্যায় সঠিক বিশেষজ্ঞ কাজ করেন। বৈচিত্র্যে শক্তি। Multimodal-ও — শুধু এক রকম ইনপুট নয়, বিভিন্ন। বৈচিত্র্যই বোঝার ভিত্তি।</div>
<div class="dialogue en">"Bahutva — multiplicity, diversity. Allah says — 'I created humans and jinn as a single community' — but diversity came. MoE too — one model, but multiple experts. For each problem, the right expert works. Strength in diversity. Multimodal too — not just one input type, but many. Diversity is the foundation of understanding."</div>`,
  senior:{
    title:"MoE ও Multimodal — প্রোডাকশনে",
    body:`<p><strong>MoE benefit:</strong> Mixtral 8x7B চালাও — ৪৭B ক্ষমতা, ১৩B গতি। DeepSeek-V3 / Qwen 3 MoE — আরও আধুনিক sparse-MoE।</p><p><strong>Vision API:</strong> GPT-5 vision — screenshot থেকে code, document থেকে data extraction।</p><p><strong>Audio:</strong> Whisper (OpenAI) স্পিচ-টু-টেক্সট, GPT-5 native audio (real-time conversation)।</p><p><strong>Cost:</strong> Multimodal = বেশি টোকেন (ছবি টোকেন বেশি খায়)। দরকার না হলে text-only ব্যবহার করো।</p>`
  }
});

// ══ DOOR 10: MASTER SYNTHESIS ══
doors.push({
  num:10, icon:"🔮", color:"#ffb38a", name:"মাস্টারের সমন্বয় কক্ষ",
  subtitle:"The Master's Synthesis Chamber", tech:"Putting It All Together",
  spirit:"সির — গোপন সারমর্ম",
  secret:"LLM জাদু নয়। এটা টোকেন থেকে অর্থ, অর্থ থেকে ভাষা, ভাষা থেকে উত্তর। প্রতিটা স্তর বুঝলে তুমি LLM-কে শুধু ব্যবহার করো না — তুমি এটাকে ইঞ্জিনিয়ার করো। এটাই LLM দর্শন।",
  recall:{
    q:"মাস্টার কেন শেষে সব এক করে দেখান?",
    qen:"Why does the master unify everything at the end?",
    a:"কারণ বিচ্ছিন্ন জ্ঞান = অসম্পূর্ণ। LLM-এর নয়টি স্তর — টোকেনাইজেশন থেকে multimodality — সব একসাথে একটা সম্পূর্ণ ছবি। মাস্টার সেই ছবি দেখান। সির — সম্পূর্ণ বোঝার সারমর্ম।",
    aen:"Because isolated knowledge = incomplete. Nine layers of LLM — from tokenization to multimodality — together form one complete picture. The master shows that picture. Sir — the essence of complete understanding."
  },
  story:`
<p class="scene-setting">দশম কক্ষ। শেষ কক্ষ। মাস্টার ইদ্রিসের সমন্বয় কক্ষ। একটা গোলাকার টেবিল — উপরে নয়টি ছোট মডেল, একে একে সাজানো। হরফ কারিগরের ব্লক, চুম্বক নির্মাতার বোর্ড, দৃষ্টি নিয়ন্ত্রকের চোখ, নির্মাতার নীলনকশা, প্রশিক্ষকের মাঠ, ভাস্করের পাথর, মরীচিকা কক্ষের আলো, স্কেল পরিমাপকের খাতা, মাল্টিপাথের ছক। সব একসাথে।</p>
<p class="scene-setting en">The tenth chamber. The last. Master Idris's synthesis chamber. A circular table — nine small models on top, arranged in sequence. Letter smith's blocks, magnet maker's board, focus controller's eye, builder's blueprint, trainer's field, sculptor's stone, mirage chamber's light, scale measurer's ledger, multi-path grid. All together.</p>

<div class="dialogue">নয়টি কক্ষ পেরিয়েছ। হরফ কারিগর বলেছিলেন — টোকেন বুঝো। চুম্বক নির্মাতা বলেছিলেন — embedding হলো অর্থের জ্যামিতি। দৃষ্টি নিয়ন্ত্রক বলেছিলেন — attention হলো সম্পর্ক বোঝা। নির্মাতা বলেছিলেন — Transformer হলো সাতটি স্তরের ভবন। প্রশিক্ষক বলেছিলেন — তিন স্তরে শেখা। ভাস্কর বলেছিলেন — এক টোকেন এক ধাপে। মরীচিকা কক্ষ বলেছিলেন — হ্যালুসিনেশন আসলে ভ্রম। স্কেল পরিমাপক বলেছিলেন — অনুপাত গুরুত্বপূর্ণ। মাল্টিপাথ কক্ষ বলেছিলেন — বৈচিত্র্যে শক্তি। কিন্তু এখন — সব এক করে দেখো।</div>
<div class="dialogue en">"You've passed nine chambers. The letter smith said — understand tokens. The magnet maker said — embeddings are the geometry of meaning. The focus controller said — attention is understanding relationships. The builder said — Transformer is a seven-layer building. The trainer said — learning in three stages. The sculptor said — one token at a time. The mirage chamber said — hallucination is illusion. The scale measurer said — proportion matters. The multi-path chamber said — diversity is strength. But now — see it all together."</div>

<div class="code-block">The Complete LLM Pipeline — One Unified View:

INPUT: "What is the capital of France?"

  ┌─────────────────────────────────────┐
  │ ১. TOKENIZER                        │
  │ "What is the capital of France?"    │
  │ → [What, is, the, capital, ...]     │
  │ → [২৪४০, ৩১৮, ২৬২, ৪৯৪৫, ...]      │
  │                                     │
  │ ২. EMBEDDING                        │
  │ প্রতিটি token ID → ৪০৯৬-dim vector │
  │ + positional encoding               │
  │                                     │
  │ ৩. ATTENTION (x৯৬ layers)          │
  │ প্রতিটি শব্দ বাকি সবের দিকে তাকায়  │
  │ "capital" → "France"-এ attention    │
  │ Multi-head: ৯৬টা আলাদা দৃষ্টিভঙ্গি  │
  │                                     │
  │ ৪. FEED-FORWARD                     │
  │ Attention-এর ফল → জ্ঞান প্রক্রিয়া  │
  │ "France" + "capital" → "Paris"?     │
  │ (training-এ শেখা সংযোগ)            │
  │                                     │
  │ ৫. OUTPUT                           │
  │ চূড়ান্ত vector → vocabulary সম্ভাবনা│
  │ P("Paris") = ০.৯৯                   │
  │ → Pick "Paris" (temperature=0)      │
  │                                     │
  │ ৬. REPEAT                           │
  │ Append "Paris" → repeat for "."     │
  │ → Repeat for "<END>"                │
  └─────────────────────────────────────┘

OUTPUT: "Paris."

HOW TRAINING MADE THIS POSSIBLE:
  Pre-training: "The capital of France 
    is ___" → "Paris" (million times)
  SFT: Human-like Q&A format
  RLHF: Helpful, concise answer preferred

WHY THIS MATTERS:
  এখন তুমি জানো —
  • কেন LLM কিছু জানে, কিছু জানে না (data)
  • কেন কিছু ভাষায় ভালো (tokenization)
  • কেন হ্যালুসিনেট করে (probability, not knowledge)
  • কেন temperature পরিবর্তন করলে ফল বদলায়
  • কেন context window সীমিত (attention cost)
  • কেন বড় মডেল ভালো (scaling laws)
  • কেন কিছু মডেল ধীর (autoregressive + params)
  • কীভাবে multimodal কাজ করে (cross-embedding)

  → তুমি LLM ব্যবহারকারী নও — 
    তুমি LLM ইঞ্জিনিয়ার।</div>

<div class="verse">"তিনি শিখিয়েছেন কলমের মাধ্যমে। শিখিয়েছেন মানুষকে যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>LLM হলো আধুনিক কলম — স্বয়ংক্রিয়, বিশাল, কিন্তু নিয়ন্ত্রিত। যে এটাকে বোঝে, সে জ্ঞান তৈরি করতে পারে। যে বোঝে না, সে কেবল গ্রাহক। তুমি এখন বোঝো — টোকেন থেকে অর্থ, অর্থ থেকে ভাষা, ভাষা থেকে উত্তর। এটাই LLM দর্শন।</div>

<div class="secret-box"><div class="label">দশম কক্ষ — সমন্বয়</div><div class="text">🔮 LLM = টোকেন + embedding + attention + training + generation। বুঝো, নিয়ন্ত্রণ করো।<br><small>শুধু ব্যবহারকারী নও — ইঞ্জিনিয়ার। এটাই LLM দর্শন।</small></div></div>`
});
