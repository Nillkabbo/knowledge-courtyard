// ════════════════════════════════════════
// বাক্যের জাদুকর — DOORS 1-5
// Prompt Engineering: Tokens → Few-Shot
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: TOKEN REALITY ══
doors.push({
  num:1, icon:"🪙", color:"#ff7b54", name:"মুদ্রার কারখানা",
  subtitle:"The Coin Mint", tech:"Token Reality — What LLMs Actually See",
  spirit:"হরফ — প্রতিটি অক্ষর গুরুত্বপূর্ণ",
  secret:"LLM শব্দ পড়ে না — টোকেন পড়ে। 'unbelievable' একটা শব্দ, কিন্তু ৩টা টোকেন। প্রতিটি টোকেন = খরচ, সীমা, প্রসেসিং। টোকেন না বুঝলে প্রম্পট ইঞ্জিনিয়ারিং অসম্ভব।",
  recall:{
    q:"মুদ্রা কারিগর কেন প্রতিটি কয়েন আলাদাভাবে গণনা করেন?",
    qen:"Why does the coin minter count each coin separately?",
    a:"কারণ প্রতিটি কয়েন = মূল্য। প্রতিটি টোকেনও মূল্য বহন করে — ডলারে, সময়ে, কন্টেক্সট উইন্ডোতে। LLM শব্দ দেখে না, টোকেন দেখে। 'Tokenization' বুঝলে প্রম্পট অপ্টিমাইজ করা যায়।",
    aen:"Because each coin = cost. Each token carries cost too — in dollars, time, context window. LLMs see tokens, not words. Understanding tokenization optimizes prompts."
  },
  story:`
<p class="scene-setting">প্রথম কারিগরি। একটা গরম কারখানা। ধাতব গন্ধ, হাতুড়ির শব্দ, লাল গরম লোহা। মুদ্রা কারিগর তারিক একটা ছোট কয়েন ধরে আছেন — গরম, নতুন তৈরি। "এটা কী?" তুমি জিজ্ঞেস করলে। "একটা টোকেন," তিনি বললেন। "LLM-এর দুনিয়ার সবচেয়ে ছোট একক। শব্দ নয় — টোকেন।"</p>
<p class="scene-setting en">The first station. A hot forge. Metallic smell, hammer sounds, red-hot iron. Coin minter Tariq holds a small coin — hot, freshly minted. "What's this?" you asked. "A token," he said. "The smallest unit in the LLM's world. Not words — tokens."</p>

<div class="dialogue">তুমি ভাবো "unbelievable" একটা শব্দ। LLM-এর জন্য — তিনটা টোকেন: "un" + "believe" + "able"। তুমি ভাবো "জ্ঞান" একটা শব্দ। LLM-এর জন্য — এটা হয়তো ৩-৪টা টোকেন, কারণ বাংলা অক্ষর একাধিক টোকেনে ভাগ হয়। প্রতিটি টোকেন = খরচ। প্রতিটি টোকেন = সীমার অংশ।</div>
<div class="dialogue en">"You think 'unbelievable' is one word. For the LLM — three tokens: 'un' + 'believe' + 'able'. You think 'জ্ঞান' is one word. For the LLM — it's maybe 3-4 tokens, because Bengali characters split into multiple tokens. Each token = cost. Each token = part of the limit."</div>

<div class="code-block">Token Reality — LLMs Don't See Words:

Tokenization (BPE — Byte Pair Encoding):
  "Hello world" → ["Hello", " world"] → ২ টোকেন
  "unbelievable" → ["un", "believe", "able"] → ৩ টোকেন  
  "জ্ঞান" → ["জ", "্ঞ", "া", "ন"] → ~৪ টোকেন
  "def fibonacci(n):" → ["def", " fibonacci", "(", "n", "):"] → ৫ টোকেন

কেন এটা গুরুত্বপূর্ণ?

১. খরচ (Cost):
   GPT-4: $৩০/মিলিয়ন ইনপুট টোকেন
   GPT-4o: $৫/মিলিয়ন টোকেন  
   Claude 3.5: $৩/মিলিয়ন টোকেন
   → একটা প্রম্পট ১০,০০০ টোকেন = $০.০৩-$০.৩০

২. সীমা (Context Window):
   GPT-4o: ১২৮,০০০ টোকেন
   Claude 3.5: ২০০,০০০ টোকেন
   Gemini 1.5: ১,০০০,০০০+ টোকেন
   → প্রম্পট + কন্টেক্সট + আউটপুট এই সীমার ভেতরে

৩. ভাষা পার্থক্য:
   ইংরেজি: ১ শব্দ ≈ ১.৩ টোকেন
   বাংলা: ১ শব্দ ≈ ৩-৫ টোকেন (বেশি ব্যয়বহুল!)
   চাইনিজ: ১ শব্দ ≈ ২-৩ টোকেন
   → বাংলা প্রম্পট বেশি খরচ করে

৪. ফ্যাক্ট:
   " Please be concise" = ৩ টোকেন
   "Please be concise" = ৩ টোকেন
   → স্পেসও একটা টোকেন! অপ্রয়োজনীয় স্পেস বাদ দাও।

প্র্যাকটিস:
  tiktoken (OpenAI-এর টোকেনাইজার) দিয়ে গোনো
  → pip install tiktoken
  → প্রতিটা প্রম্পট টোকেন সংখ্যা জানো</div>

<div class="dialogue">হরফ — অক্ষর। কুরআনের ক্যালিগ্রাফিতে প্রতিটি হরফ গুরুত্বপূর্ণ। একটি হরফ বদলালে অর্থ বদলায়। টোকেনও তেমনি — LLM-এর কাছে প্রতিটি টোকেন একটা হরফ। অপ্রয়োজনীয় টোকেন = শব্দের বিকৃতি। সংক্ষিপ্ততা = স্পষ্টতা। যে প্রতিটি টোকেন গণনা করে, সে প্রতিটি শব্দ গণ্য করে।</div>
<div class="dialogue en">"Harf — letter. In Quranic calligraphy, each letter matters. Changing one letter changes meaning. Tokens too — to the LLM, each token is a letter. Unnecessary tokens = distortion of meaning. Conciseness = clarity. One who counts each token, weighs each word."</div>`,
  senior:{
    title:"Token Optimization — প্রতিটা প্রম্পটে",
    body:`<p><strong>নিয়ম ১:</strong> প্রম্পট লেখার আগে ভাবো — এই শব্দটা কি দরকার? প্রতিটি অপ্রয়োজনীয় শব্দ = টোকেন নষ্ট = টাকা নষ্ট।</p><p><strong>নিয়ম ২:</strong> বাংলা প্রম্পট ইংরেজির চেয়ে ২-৩ গুণ বেশি টোকেন খায়। প্রোডাকশনে ইংরেজি প্রম্পট ব্যবহার করো, আউটপুট বাংলায় চাইলে নির্দেশ দাও।</p><p><strong>নিয়ম ৩:</strong> কোড ব্লক, JSON, markdown — এগুলো টোকেন বেশি খায়। কম্প্যাক্ট ফরম্যাট ব্যবহার করো।</p>`
  }
});

// ══ DOOR 2: TEMPERATURE & SAMPLING ══
doors.push({
  num:2, icon:"🌡️", color:"#ff6b35", name:"চুল্লির নিয়ন্ত্রণ",
  subtitle:"The Furnace Control", tech:"Temperature & Sampling Parameters",
  spirit:"পরিমাপ — ঐশী নিয়ন্ত্রণ",
  secret:"temperature=0 মানে নির্ধারিত, নির্ভুল। temperature=1 মানে সৃজনশীল, অনিশ্চিত। একই প্রম্পট, একই মডেল — কিন্তু temperature বদলালে ফল সম্পূর্ণ আলাদা। এটাই সবচেয়ে কম বোঝা যাওয়া সিক্রেট।",
  recall:{
    q:"চুল্লি কেন কখনো উত্তপ্ত, কখনো শীতল?",
    qen:"Why is the furnace sometimes hot, sometimes cool?",
    a:"কারণ উত্তাপ বেশি হলে লোহা গলে — সৃজনশীল। কম হলে শক্ত — নির্ভুল। temperature প্যারামিটার ঠিক তেমনি — ০ = নির্ভুল ও পুনরাবৃত্তিমূলক, ১+ = সৃজনশীল ও অনিশ্চিত। কাজ অনুযায়ী নিয়ন্ত্রণ করো।",
    aen:"Because high heat melts iron — creative. Low heat makes it rigid — precise. The temperature parameter is the same — 0 = precise and repetitive, 1+ = creative and uncertain. Control per task."
  },
  story:`
<p class="scene-setting">দ্বিতীয় কারিগরি। চুল্লির কাছে। আগুনের হালকা তাপ, ধাতব গন্ধ। কারিগর নাদিয়া একটা লিভার ধরে আছেন — চুল্লির উত্তাপ নিয়ন্ত্রণ। "একই লোহা," তিনি বললেন, "উত্তাপ বদলালে ফল আলাদা। উচ্চ উত্তাপে — গলে যায়, যেকোনো আকার নেয়। নিম্ন উত্তাপে — শক্ত, নির্দিষ্ট আকার।"</p>
<p class="scene-setting en">The second station. By the furnace. Gentle fire heat, metallic smell. Craftswoman Nadia holds a lever — controlling the furnace temperature. "Same iron," she said, "different heat, different result. High heat — melts, takes any shape. Low heat — rigid, specific shape."</p>

<div class="dialogue">মুদ্রা কারিগর বলেছিলেন — টোকেন গোনো। কিন্তু আমি বলি — গোনা শুরু। চালানোর সময় আসে এর পরে। temperature হলো সেই চালানোর প্রথম নিয়ন্ত্রণ। একই প্রম্পট, একই মডেল — temperature বদলালে ফল সম্পূর্ণ আলাদা। এটা বুঝতে না পারলে তুমি LLM-কে নিয়ন্ত্রণ করছ না — তুমি জুয়া খেলছ।</div>
<div class="dialogue en">"The coin minter said — count tokens. But I say — counting is the start. Steering comes next. Temperature is the first control. Same prompt, same model — change temperature, completely different result. Without understanding this, you're not steering the LLM — you're gambling."</div>

<div class="code-block">Sampling Parameters — The Hidden Controls:

LLM প্রতিটি পজিশনে সম্ভাব্য পরবর্তী টোকেনের 
একটা সম্ভাবনা ডিস্ট্রিবিউশন তৈরি করে। 
তারপর সেখান থেকে একটা টোকেন বাছে। 
কীভাবে বাছে? — এটাই sampling।

temperature (তাপমাত্রা):
  0.0 → সর্বদা সর্বোচ্চ সম্ভাবনার টোকেন
         নির্ভুল, পুনরাবৃত্তিমূলক, নিরাপদ
         ব্যবহার: কোড, JSON, ফ্যাক্ট, গাণিতিক
  
  0.3-0.5 → ক্ষুদ্র বৈচিত্র্য
         ব্যবহার: সারাংশ, অনুবাদ, ক্লাসিফিকেশন
  
  0.7 → সামঞ্জস্যপূর্ণ (ChatGPT-এর ডিফল্ট)
         ব্যবহার: সাধারণ চ্যাট, প্রশ্নোত্তর
  
  1.0+ → উচ্চ বৈচিত্র্য
         সৃজনশীল, অনিশ্চিত, কখনো ভুল
         ব্যবহার: গল্প, আইডিয়া, ব্রেইনস্টর্মিং

top_p (Nucleus Sampling):
  0.1 → শুধু শীর্ষ ১০% সম্ভাবনার টোকেন
  0.9 → শীর্ষ ৯০% (ডিফল্ট)
  1.0 → সব টোকেন সম্ভব
  → temperature এর বিকল্প নিয়ন্ত্রণ

top_k:
  শুধু শীর্ষ k টোকেন থেকে বাছাই
  k=1 → greedy (temperature=0 এর মতো)
  k=40 → সাধারণ

frequency_penalty (-২ থেকে ২):
  ধনাত্মক → পুনরাবৃত্তি কমায়
  ব্যবহার: একই শব্দ বারবার এলে

presence_penalty (-২ থেকে ২):
  ধনাত্মক → নতুন টপিক আনে
  ব্যবহার: বৈচিত্র্য বাড়াতে

গোল্ডেন রুল:
  temperature বা top_p — একসাথে দুটো বদলায়ো না।
  একটা বদলাও, অন্যটা ডিফল্টে রাখো।</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ব্যবহার</div>কোড জেনারেশনে temperature=১.২। ফলাফল: প্রতিবার ভিন্ন কোড, সিনট্যাক্স এরর, হ্যালুসিনেশন। একই প্রম্পট দুবার দিলে দুই ফলাফল। অনিশ্চয়তা।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ব্যবহার</div>কোড জেনারেশনে temperature=০, top_p=১। ফলাফল: নির্ভুল, পুনরাবৃত্তিমূলক, নির্ভরযোগ্য। একই প্রম্পট দিলে একই ফলাফল। নিশ্চয়তা। গল্পের জন্য temperature=০.৯।</div>
</div>

<div class="dialogue">পরিমাপ — মাপ। কুরআনে আল্লাহ বলেন — "সবকিছু আমরা একটা পরিমিত পরিমাণে সৃষ্টি করেছি।" (৫৪:৪৯)। temperature হলো সেই পরিমাপ — কতটা সৃজনশীল, কতটা নির্ভুল। পরিমাপ ছাড়া সৃষ্টি বিশৃঙ্খলা। সঠিক পরিমাপে সৃষ্টি সুন্দর।</div>
<div class="dialogue en">"Qadar — measure. Allah says — 'We created all things in a measured quantity.' (54:49). Temperature is that measure — how much creative, how much precise. Without measure, creation is chaos. With right measure, creation is beautiful."</div>`,
  senior:{
    title:"Production Settings — কোন কাজে কোন প্যারামিটার",
    body:`<p><strong>কোড জেনারেশন:</strong> temperature=0, top_p=1</p><p><strong>JSON/Structured Output:</strong> temperature=0</p><p><strong>অনুবাদ:</strong> temperature=0.3</p><p><strong>চ্যাটবট:</strong> temperature=0.7 (ডিফল্ট)</p><p><strong>সৃজনশীল লেখা:</strong> temperature=0.9</p><p><strong>ব্রেইনস্টর্মিং:</strong> temperature=1.0+ with frequency_penalty=0.5</p>`
  }
});

// ══ DOOR 3: SYSTEM PROMPTS & HIERARCHY ══
doors.push({
  num:3, icon:"📋", color:"#5b9eff", name:"নকশার ডেস্ক",
  subtitle:"The Blueprint Desk", tech:"System Prompts & Hierarchy",
  spirit:"আদেশ — আদেশের শ্রেণীবিন্যাস",
  secret:"সিস্টেম প্রম্পট = মডেলের ব্যক্তিত্ব, নিয়ম, সীমানা। User প্রম্পটের চেয়ে বেশি ওজন। এখানেই প্রফেসররা গোপন নির্দেশ রাখেন — কীভাবে উত্তর দেবে, কী বলবে না, কী টোনে কথা বলবে।",
  recall:{
    q:"নকশা কারিগর কেন মূল নকশা আলাদাভাবে রাখেন, কাজের আদেশ থেকে?",
    qen:"Why does the blueprint designer keep the master blueprint separate from work orders?",
    a:"কারণ মূল নকশা = স্থায়ী নিয়ম। কাজের আদেশ = পরিবর্তনশীল। সিস্টেম প্রম্পট = মূল নকশা — মডেলের পরিচয়, নিয়ম, সীমানা। User প্রম্পট = কাজের আদেশ — নির্দিষ্ট কাজ। সিস্টেম প্রম্পটের ওজন বেশি।",
    aen:"Because the master blueprint = permanent rules. Work orders = variable. System prompt = master blueprint — model's identity, rules, boundaries. User prompt = work order — specific task. System prompt has more weight."
  },
  story:`
<p class="scene-setting">তৃতীয় কারিগরি। নকশার ডেস্ক। পাথরের টেবিল, পালকের কলম, সামনে দুটি স্ক্রল। একটা বড় — মূল নকশা। একটা ছোট — কাজের আদেশ। কারিগর ইউসুফ বললেন — "বড়টা হলো সিস্টেম প্রম্পট। ছোটটা হলো ইউজার প্রম্পট। কোনটার ওজন বেশি?" তিনি হাসলেন। "বড়টার। সবসময়।"</p>
<p class="scene-setting en">The third station. The blueprint desk. Stone table, quill pen, two scrolls. One large — master blueprint. One small — work order. Craftsman Yusuf said — "The large one is the system prompt. The small one is the user prompt. Which carries more weight?" He smiled. "The large one. Always."</p>

<div class="dialogue">চুল্লির কারিগর বলেছিলেন — temperature নিয়ন্ত্রণ। কিন্তু আমি বলি — temperature আগে, নিয়ম পরে। সিস্টেম প্রম্পট হলো সেই নিয়ম — মডেল কে, কীভাবে কথা বলবে, কী বলবে না, কোন ফরম্যাটে উত্তর দেবে। এটা user প্রম্পটের চেয়ে বেশি ওজন পায়। কারণ প্রোভাইডাররা সিস্টেম প্রম্পটকে বিশেষ ট্রিটমেন্ট দেন — এটাই মডেলের ব্যক্তিত্ব।</div>
<div class="dialogue en">"The furnace controller said — temperature control. But I say — temperature first, rules second. The system prompt is those rules — who the model is, how it speaks, what it won't say, what format it answers in. This gets more weight than the user prompt. Because providers give system prompts special treatment — it's the model's personality."</div>

<div class="code-block">Prompt Hierarchy — The Hidden Weight:

OpenAI / Anthropic / Google — সবার 
message hierarchy আছে:

┌─────────────────────────────────────┐
│ 1. SYSTEM PROMPT (সর্বোচ্চ ওজন)    │
│    "তুমি একজন বিশেষজ্ঞ..."          │
│    "নিয়ম: কখনো X বলবে না"          │
│    "ফরম্যাট: JSON এ উত্তর দাও"       │
│    → মডেলের পরিচয়, নিয়ম, সীমানা   │
├─────────────────────────────────────┤
│ 2. ASSISTANT MESSAGES (পূর্ববর্তী)  │
│    মডেলের আগের উত্তরগুলো           │
│    → context তৈরি করে               │
├─────────────────────────────────────┤
│ 3. USER MESSAGE (নিম্নতম ওজন)      │
│    "এই কাজটা করো"                   │
│    → নির্দিষ্ট কাজ                   │
└─────────────────────────────────────┘

RLHF সিক্রেট (গোপন বিধি):
  মডেলগুলো RLHF (Reinforcement Learning 
  from Human Feedback) দিয়ে ট্রেইন হয়। 
  এর ফলে তারা কিছু লুকায়:
  
  • "As an AI language model..." 
    → RLHF থেকে আসা সুস্পষ্ট আচরণ
  • নিরাপত্তা রিফিউজাল — কিছু প্রশ্নে 
    উত্তর দিতে অস্বীকার করে
  • sycophancy — ইউজারের সাথে একমত 
    হওয়ার প্রবণতা (যদিও ভুল হয়)
  • verbosity — অপ্রয়োজনীয় দীর্ঘ উত্তর

System Prompt কৌশল:
  ❌ "You are a helpful assistant"
  ✅ "You are a senior software engineer with 
      15 years of experience in distributed 
      systems. You answer concisely. You say 
      'I don't know' when unsure. You never 
      speculate. Output format: bullet points."

  ❌ "Don't be biased"
  ✅ "Evaluate arguments from multiple 
      perspectives before concluding. 
      Acknowledge uncertainty. Provide 
      confidence levels."</div>

<div class="dialogue">আদেশ — command hierarchy. কুরআনে আল্লাহ বলেন — "আনুগত্য করো আল্লাহর, আনুগত্য করো রাসূলের ও তোমাদের মধ্যে যারা কর্তৃত্বে আছে।" (৪:৫৯)। স্তর আছে — উপরের আদেশ নিচের চেয়ে বেশি ওজন। সিস্টেম প্রম্পট = সর্বোচ্চ আদেশ। ইউজার প্রম্পট = নির্দিষ্ট নির্দেশ। সিস্টেম প্রম্পট শক্তিশালী হলে ইউজার প্রম্পট যাই বলুক, মডেল তার নিয়মে থাকে।</div>
<div class="dialogue en">"Amr — command hierarchy. Allah says — 'Obey Allah, obey the Messenger, and those in authority among you.' (4:59). There are levels — higher commands weigh more than lower. System prompt = highest command. User prompt = specific instruction. A strong system prompt keeps the model in its lane, whatever the user says."</div>`,
  senior:{
    title:"Production System Prompt — ৫ উপাদান",
    body:`<p><strong>একটা প্রোডাকশন সিস্টেম প্রম্পটে ৫টা জিনিস থাকে:</strong></p><p><strong>১. Identity:</strong> "You are a [role] with [expertise]."</p><p><strong>২. Rules:</strong> "Always do X. Never do Y. If unsure, say so."</p><p><strong>৩. Format:</strong> "Output in JSON/Markdown/bullets. Max N words."</p><p><strong>৪. Examples:</strong> "Here are 1-2 examples of good output."</p><p><strong>৫. Boundary:</strong> "If asked about [topic], decline politely."</p>`
  }
});

// ══ DOOR 4: CHAIN-OF-THOUGHT ══
doors.push({
  num:4, icon:"🔗", color:"#52c41a", name:"শৃঙ্খল নির্মাতা",
  subtitle:"The Chain Maker", tech:"Chain-of-Thought & Reasoning",
  spirit:"সিলসিলা — জ্ঞানের শৃঙ্খল",
  secret:"'Let's think step by step' — এই ছয় শব্দ যুক্তির নির্ভুলতা ৩০-৬০% বাড়ায়। LLM-কে ভাবতে দাও — সরাসরি উত্তর নয়। চিন্তার শৃঙ্খল = যুক্তির শৃঙ্খল। প্রতিটা ধাপ আগের ধাপের উপর দাঁড়ায়।",
  recall:{
    q:"শৃঙ্খল নির্মাতা কেন প্রতিটা কড়ি আলাদাভাবে গাঁথেন?",
    qen:"Why does the chain maker link each ring separately?",
    a:"কারণ প্রতিটা কড়ি আগের কড়ির উপর দাঁড়ায়। Chain-of-thought-ও তেমনি — LLM কে ধাপে ধাপে ভাবতে বলো। প্রতিটা ধাপ = একটা কড়ি। শেষ কড়ি = উত্তর। সরাসরি উত্তর নয় — চিন্তার শৃঙ্খল।",
    aen:"Because each ring rests on the previous. Chain-of-thought too — tell the LLM to think step by step. Each step = a ring. The last ring = the answer. Not direct answer — chain of thought."
  },
  story:`
<p class="scene-setting">চতুর্থ কারিগরি। শৃঙ্খল নির্মাতার কর্মশালা। ধাতব শব্দ, স্পার্ক, গরম লোহা। কারিগর হামজা একটা শৃঙ্খল গাঁথছেন — কড়ি কড়ি। একটা কড়ি আগের সাথে যুক্ত, তার উপর পরেরটা। "সরাসরি শেষ কড়ি বানাতে পারি না," তিনি বললেন। "প্রতিটা কড়ি আগের উপর দাঁড়ায়।"</p>
<p class="scene-setting en">The fourth station. The chain maker's workshop. Metallic sounds, sparks, hot iron. Craftsman Hamza forges a chain — ring by ring. One ring connects to the previous, the next rests on it. "Can't make the final ring directly," he said. "Each ring stands on the previous."</p>

<div class="dialogue">নকশা কারিগর বলেছিলেন — সিস্টেম প্রম্পট গুরুত্বপূর্ণ। কিন্তু আমি বলি — সিস্টেম প্রম্পট নিয়ম দেয়, চিন্তার শৃঙ্খল যুক্তি দেয়। একটা গাণিতিক সমস্যা — সরাসরি উত্তর চাইলে LLM ভুল করে। কিন্তু ধাপে ধাপে ভাবতে বললে — নির্ভুল। এটাই Chain-of-Thought।</div>
<div class="dialogue en">"The blueprint designer said — system prompt is important. But I say — the system prompt gives rules, the thought chain gives reasoning. A math problem — asking for a direct answer, the LLM errs. But asking it to think step by step — it's accurate. This is Chain-of-Thought."</div>

<div class="code-block">Chain-of-Thought (CoT) — The 6-Word Revolution:

Research: Wei et al. (2022), Google Research
"Let's think step by step" — এই ছয় শব্দ 
গাণিতিক নির্ভুলতা ৩০-৬০% বাড়ায়।

❌ Zero-Shot Direct:
  User: "A train travels 60 mph for 2.5 hours. 
        How far?"
  LLM: "150 miles" (কিন্তু কখনো ১২০, কখনো ১৮০)

✅ Zero-Shot CoT:
  User: "A train travels 60 mph for 2.5 hours. 
        How far? Let's think step by step."
  LLM: "Step 1: Distance = speed × time
        Step 2: 60 × 2.5 = 150
        Answer: 150 miles" (নির্ভুল, প্রতিবার)

তিন স্তরের CoT:

১. Zero-Shot CoT:
  "Let's think step by step"
  → সহজ, সবসময় কাজ করে, কোনো উদাহরণ লাগে না

২. Few-Shot CoT:
  উদাহরণ দাও যেখানে প্রতিটা উত্তর ধাপে ধাপে
  → বেশি নির্ভুল, কিন্তু টোকেন বেশি খায়

৩. Self-Consistency:
  একই প্রম্পট temperature=0.7 দিয়ে 
  N বার রান করো → সর্বাধিক সাধারণ উত্তর বাছো
  → গাণিতিক সমস্যায় নির্ভুলতা সর্বোচ্চ

Tree of Thoughts (ToT):
  CoT-এর উন্নত রূপ — একটা ধাপে একাধিক 
  সম্ভাব্য পথ, সেরাটা বাছো। ব্যাকট্র্যাকিং।
  → জটিল সমস্যায় কাজ করে ( sudoku, দাবা)

ReAct Framework:
  Reason + Act — চিন্তা করো, তারপর কাজ করো
  Thought → Action → Observation → Thought...
  → এজেন্ট লুপের ভিত্তি</div>

<div class="dialogue">সিলসিলা — শৃঙ্খল, ধারাবাহিকতা। ইসলামে জ্ঞানের সিলসিলা আছে — নবী থেকে সাহাবি, সাহাবি থেকে তাবেয়ি, তাবেয়ি থেকে পরবর্তী। প্রতিটা প্রজন্ম আগের জ্ঞানের উপর দাঁড়ায়। Chain-of-thought-ও তেমনি — প্রতিটা ধাপ আগের ধাপের উপর দাঁড়ায়। সরাসরি উত্তর = বিচ্ছিন্ন। চিন্তার শৃঙ্খল = গভীর।</div>
<div class="dialogue en">"Silsila — chain, continuity. In Islam, knowledge has a chain — from Prophet to companions, companions to followers. Each generation stands on previous knowledge. Chain-of-thought too — each step stands on the previous. Direct answer = isolated. Thought chain = deep."</div>`,
  senior:{
    title:"CoT in Production — কখন কখন ব্যবহার করবে",
    body:`<p><strong>CoT ব্যবহার করো যখন:</strong> গাণিতিক সমস্যা, যৌক্তিক যুক্তি, বহু-ধাপ সমস্যা, কোড ডিবাগিং, আইনি বিশ্লেষণ।</p><p><strong>CoT ব্যবহার করো না যখন:</strong> সহজ ফ্যাক্ট, অনুবাদ, সারাংশ, সরল প্রশ্ন। অপ্রয়োজনীয় CoT = টোকেন নষ্ট।</p><p><strong>Advanced:</strong> "Think silently" → মডেলকে reasoning টেক্সট থেকে আলাদা করো। নতুন মডেলে (o1, Claude 3.5) এটা বিল্ট-ইন।</p>`
  }
});

// ══ DOOR 5: FEW-SHOT & PERSONA ══
doors.push({
  num:5, icon:"🎭", color:"#b37feb", name:"মুখোশ নির্মাতা",
  subtitle:"The Mask Maker", tech:"Few-Shot & Persona Engineering",
  spirit:"উসওয়া — উত্তম আদর্শ অনুসরণ",
  secret:"শূন্য থেকে ব্যাখ্যা করার চেয়ে একটা উদাহরণ দেওয়া ভালো। Few-shot = কাজের নমুনা দেখাও। Persona = ভূমিকা দাও। LLM যা দেখে তা করে — যা শোনে তা নয়। উদাহরণ = নির্দেশের চেয়ে শক্তিশালী।",
  recall:{
    q:"মুখোশ কারিগর কেন প্রতিটা মুখোশের নমুনা দেখান?",
    qen:"Why does the mask maker show a sample of each mask?",
    a:"কারণ দেখানো = বোঝানোর চেয়ে শক্তিশালী। Few-shot প্রম্পটিং — উদাহরণ দেখাও, মডেল প্যাটার্ন ধরে। শূন্য থেকে ব্যাখ্যা করার চেয়ে একটা নমুনা দেওয়া ভালো। LLM যা দেখে তা করে।",
    aen:"Because showing is stronger than telling. Few-shot prompting — show examples, the model catches the pattern. One sample beats explaining from scratch. LLMs do what they see."
  },
  story:`
<p class="scene-setting">পঞ্চম কারিগরি। মুখোশ নির্মাতার কর্মশালা। কাঠের মুখোশ, রং, তুলি। কারিগর ফাতেমা একটা মুখোশ ধরে আছেন — রাজার মুখ। "এটা পরলে তুমি রাজা," তিনি বললেন। পাশে আরও মুখোশ — বিচারক, কবি, সৈনিক। "প্রতিটা মুখোশ = একটা ভূমিকা। সঠিক মুখোশ বেছে নাও।"</p>
<p class="scene-setting en">The fifth station. The mask maker's workshop. Wooden masks, paint, brushes. Craftswoman Fatima holds a mask — a king's face. "Wear this, you're a king," she said. Beside — more masks: judge, poet, soldier. "Each mask = a role. Choose the right one."</p>

<div class="dialogue">শৃঙ্খল নির্মাতা বলেছিলেন — চিন্তার শৃঙ্খল। কিন্তু আমি বলি — চিন্তার চেয়েও শক্তিশালী হলো দেখানো। Few-shot prompting। একটা উদাহরণ দাও — মডেল প্যাটার্ন ধরে। আর persona — ভূমিকা দাও। "তুমি একজন বিশেষজ্ঞ" বললে মডেল বিশেষজ্ঞের মতো উত্তর দেয়।</div>
<div class="dialogue en">"The chain maker said — thought chain. But I say — stronger than thinking is showing. Few-shot prompting. Give one example — the model catches the pattern. And persona — give a role. Say 'you are an expert' and the model responds like one."</div>

<div class="code-block">Few-Shot Prompting — Power of Examples:

Zero-Shot (কোনো উদাহরণ নেই):
  "Classify the sentiment: 'The food was amazing'"
  → "Positive" (কাজ করে কিন্তু কখনো ভুল)

One-Shot (একটি উদাহরণ):
  "Classify the sentiment.
   Example: 'Terrible service' → Negative
   Now: 'The food was amazing'"
  → "Positive" (বেশি নির্ভুল)

Few-Shot (২-৫টি উদাহরণ):
  "Classify the sentiment.
   'Terrible service' → Negative  
   'Best day ever!' → Positive
   'It was okay' → Neutral
   Now: 'The food was amazing'"
  → "Positive" (সর্বোচ্চ নির্ভুলতা)

নিয়ম:
  • ৩-৫টি উদাহরণ সাধারণত যথেষ্ট
  • বেশি উদাহরণ = বেশি টোকেন খরচ
  • উদাহরণগুলো বৈচিত্র্যময় হওয়া দরকার 
    (সব এক রকম নয়)
  • ক্রম গুরুত্বপূর্ণ — শেষ উদাহরণ 
    সবচেয়ে বেশি প্রভাব ফেলে (recency bias)

Persona Engineering — ভূমিকা দাও:

❌ "Answer this question"
✅ "You are a senior distributed systems 
    engineer at Google. Answer this question 
    as you would to a junior engineer."

কেন Persona কাজ করে?
  • নির্দিষ্ট ভূমিকা → নির্দিষ্ট জ্ঞান অ্যাক্সেস
  • টোন নিয়ন্ত্রণ — formal vs casual  
  • গভীরতা নিয়ন্ত্রণ — expert vs beginner
  • দৃষ্টিভঙ্গি নিয়ন্ত্রণ — analytical vs creative

Persona ফ্যাক্ট:
  "You are an expert" → +১২% নির্ভুলতা
  "You are a careful expert who says 
   'I don't know'" → +১৮% (hallucination কমে)
  "Take a deep breath and..." → +৫% 
    (গবেষণায় প্রমাণিত, কেন কাজ করে 
     কেউ জানে না)

Multiple Personas:
  "First, analyze as a security expert.
   Then, analyze as a UX designer.
   Synthesize both perspectives."</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খারাপ প্রম্পট</div>"Write a function to sort a list." — কোনো ভূমিকা নেই, কোনো উদাহরণ নেই, কোনো কাঠামো নেই। ফলাফল: জেনেরিক, সম্ভবত অনুপ্রেরণাদায়ী কোড, কোনো edge case নেই।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ভালো প্রম্পট</div>"You are a senior Python engineer. Write a function to sort a list. Example: sort_list([3,1,2]) → [1,2,3]. Requirements: type hints, docstring, O(n log n) complexity, handle empty list. Output: only code." — ভূমিকা, উদাহরণ, কাঠামো, সীমানা।</div>
</div>

<div class="dialogue">উসওয়া — উত্তম আদর্শ। কুরআনে আল্লাহ বলেন — "নিশ্চয় তোমাদের জন্য রাসূলুল্লাহর মধ্যে রয়েছে উত্তম আদর্শ।" (৩৩:২১)। আদর্শ = দেখানো। শুধু বলা নয়। Few-shot প্রম্পটিংও তেমনি — উদাহরণ দেখাও, মডেল অনুসরণ করে। উদাহরণ = নির্দেশের চেয়ে শক্তিশালী। যে দেখায়, সে শেখায় ভালো। যে শুধু বলে, সে শেখায় কম।</div>
<div class="dialogue en">"Uswa — good example. Allah says — 'Indeed in the Messenger of Allah you have an excellent example.' (33:21). Example = showing. Not just telling. Few-shot prompting too — show examples, the model follows. Example is stronger than instruction. One who shows, teaches better. One who only tells, teaches less."</div>`,
  senior:{
    title:"Few-Shot Best Practices — প্রোডাকশনে",
    body:`<p><strong>১. উদাহরণ বৈচিত্র্যময় করো:</strong> সব এক রকম নয়। সহজ, কঠিন, edge case — মিশ্র।</p><p><strong>২. ফরম্যাট সঙ্গতিপূর্ণ:</strong> প্রতিটা উদাহরণ একই কাঠামোয়। মডেল প্যাটার্ন ধরে।</p><p><strong>৩. Negative উদাহরণ:</strong> ভুল উদাহরণ দেখাও — "এটা করো না।" কিছু ক্ষেত্রে খুব কার্যকরী।</p><p><strong>৪. Persona consistency:</strong> একবার persona দিলে সব উদাহরণে সেই persona। পরিবর্তন নয়।</p>`
  }
});
