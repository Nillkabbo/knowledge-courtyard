// ════════════════════════════════════════
// কায়িক সাধনা — DOORS 1-5
// Fine-tuning: Decision → LoRA
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: WHEN TO FINE-TUNE ══
doors.push({
  num:1, icon:"⚖️", color:"#f97316", name:"নির্বাচনের কক্ষ",
  subtitle:"The Chamber of Choice", tech:"When to Fine-Tune vs RAG vs Prompt",
  spirit:"হিকমাহ — সঠিক সিদ্ধান্তের প্রজ্ঞা",
  secret:"Fine-tuning সবসময় দরকার নয়। নতুন জ্ঞান = RAG। নতুন ফরম্যাট/শৈলী = prompting বা few-shot। নতুন আচরণ/দক্ষতা = fine-tuning। ভুল সিদ্ধান্ত = সময়, টাকা, ক্ষমতা নষ্ট। সঠিক সিদ্ধান্ত = হিকমাহ।",
  recall:{
    q:"কারিগর কেন প্রতিটা কাজের জন্য আলাদা হাতুড়ি ব্যবহার করেন?",
    qen:"Why does the craftsman use different hammers for different tasks?",
    a:"কারণ প্রতিটা কাজের সরঞ্জাম আলাদা। Fine-tuning-ও একটা সরঞ্জাম — সব সমস্যার সমাধান নয়। নতুন তথ্য = RAG। নতুন শৈলী = prompting। নতুন দক্ষতা = fine-tuning। সঠিক সরঞ্জাম বেছে নাও।",
    aen:"Because each task needs different tools. Fine-tuning is a tool — not the solution to everything. New info = RAG. New style = prompting. New skill = fine-tuning. Choose the right tool."
  },
  story:`
<p class="scene-setting">প্রথম ক্ষেত্র। একটা সরঞ্জাম কক্ষ। দেয়ালে নানা হাতুড়ি — বড়, ছোট, ভারী, হালকা। প্রতিটার নিচে লেবেল — কোন কাজের জন্য। প্রধান কারিগর উস্তাদ রহিম বললেন — "এই ঘরে তিনটি মূল সরঞ্জাম। Prompting — হালকা হাতুড়ি। RAG — মাঝারি। Fine-tuning — ভারী। প্রতিটা কাজে সঠিক সরঞ্জাম। ভুল হাতুড়ি = কাজ নষ্ট।"</p>
<p class="scene-setting en">The first chamber. A tool room. Various hammers on walls — large, small, heavy, light. Each labeled — for which task. Chief craftsman Ustad Rahim said — "This room has three main tools. Prompting — light hammer. RAG — medium. Fine-tuning — heavy. Right tool for each task. Wrong hammer = ruined work."</p>

<div class="dialogue">RAG Mastery বইয়ে তুমি শিখেছ — retrieval দিয়ে জ্ঞান যোগ করো। Prompt Engineering-এ শিখেছ — শব্দ দিয়ে মডেল চালাও। কিন্তু এখন একটা নতুন প্রশ্ন। কখন এগুলো যথেষ্ট নয়? কখন মডেলকে নিজে বদলাতে হয়? এটাই fine-tuning। কিন্তু সব সমস্যার সমাধান নয়।</div>
<div class="dialogue en">"In the RAG Mastery book you learned — add knowledge through retrieval. In Prompt Engineering — steer the model with words. But now a new question. When are these insufficient? When must the model itself change? This is fine-tuning. But not the solution to every problem."</div>

<div class="code-block">Three Tools — Three Problems:

┌──────────────────────────────────────────────┐
│ PROBLEM TYPE 1: নতুন জ্ঞান (New Knowledge)  │
│ "আমার কোম্পানির নীতিমালা কী?"               │
│ "এই ডকুমেন্ট অনুযায়ী উত্তর দাও"              │
│                                              │
│ ✅ সমাধান: RAG                               │
│ ❌ Fine-tuning কেন নয়: জ্ঞান বদলায়,         │
│    মডেলের ওজন নয়। নতুন ডকুমেন্ট এলে আবার   │
│    fine-tune? অপ্র্যাক্টিক্যাল।              │
│ ❌ Prompting কেন নয়: context window পূর্ণ    │
│    হবে বিশাল নীতিমালা দিলে।                  │
├──────────────────────────────────────────────┤
│ PROBLEM TYPE 2: নতুন শৈলী (New Style/Format)│
│ "JSON আউটপুট দাও, সবসময়"                    │
│ "শুধু বাংলায় উত্তর দাও"                      │
│ "প্রতিটা উত্তরে citation দাও"                │
│                                              │
│ ✅ সমাধান: Prompting / System Prompt         │
│ ✅ বা Few-Shot examples                       │
│ ⚠️ Fine-tuning: কাজ করে কিন্তু ব্যয়বহুল      │
│    যদি prompting-এ কাজ করে।                  │
├──────────────────────────────────────────────┤
│ PROBLEM TYPE 3: নতুন দক্ষতা (New Skill)     │
│ "মডেল আমার ডোমেইনের প্রশ্নে ভুল করছে"        │
│ "নির্দিষ্ট প্যাটার্নে উত্তর দিতে হবে"         │
│ "ল্যাটেন্সি কমাতে হবে — ছোট মডেল বড়         │
│  মডেলের মতো কাজ করুক"                       │
│                                              │
│ ✅ সমাধান: Fine-tuning                        │
│ → মডেলের ওজন বদলায় → আচরণ বদলায়            │
│ → নির্দিষ্ট ডোমেইনে বিশেষজ্ঞ                 │
│ → ছোট মডেল বড় মডেলের কাছাকাছি               │
└──────────────────────────────────────────────┘

DECISION TREE:

  নতুন তথ্য যোগ করতে চাও?
  ├── YES → RAG (৯০% ক্ষেত্রে)
  └── NO ↓
  
  শুধু ফরম্যাট/শৈলী বদলাতে চাও?
  ├── YES → Prompting / Few-Shot (৮০% ক্ষেত্রে)
  └── NO ↓
  
  মডেল নির্দিষ্ট ডোমেইনে দুর্বল?
  ├── YES → Fine-tuning ✅
  └── কি ছোট মডেল দিয়ে বড় মডেলের কাজ?
       └── YES → Fine-tuning (distillation) ✅

FINE-TUNING USE CASES (যখন সত্যিই দরকার):

  ✅ ডোমেইন বিশেষায়ন:
     Medical LLM, Legal LLM, Code LLM
     → সাধারণ মডেল ডোমেইনে দুর্বল
  
  ✅ Latency/Cost:
     ৭B fine-tuned ≈ ৭০B general
     → ছোট মডেল fine-tune করে বড় মডেলের 
       কাজ করানো — ১০x সস্তা
  
  ✅ Consistent behavior:
     প্রতিটা উত্তরে নির্দিষ্ট ফরম্যাট
     → prompting-এ কখনো কখনো ভুল করে
     → fine-tuning-এ consistent

  ✅ Tone/Personality:
     ব্র্যান্ড ভয়েস, কাস্টম পার্সোনালিটি</div>

<div class="dialogue">হিকমাহ — প্রজ্ঞা, সঠিক সিদ্ধান্ত। কুরআনে আল্লাহ বলেন — "যাকে হিকমাহ দিয়েছেন, তাকে প্রচুর কল্যাণ দিয়েছেন।" (২:২৬৯)। হিকমাহ হলো — সঠিক সময়ে সঠিক সরঞ্জাম বেছে নেওয়া। সব সমস্যায় fine-tuning নয়, সব সমস্যায় RAG নয়। প্রতিটা সমস্যা বুঝে সিদ্ধান্ত নাও। এটাই হিকমাহ।</div>
<div class="dialogue en">"Hikmah — wisdom, right decision. Allah says — 'Whoever is given wisdom, has been given much good.' (2:269). Hikmah is — choosing the right tool at the right time. Not fine-tuning for every problem, not RAG for every problem. Understand each problem, then decide. This is hikmah."</div>`,
  senior:{
    title:"Self-Assessment — Fine-tuning দরকার কি?",
    body:`<p><strong>প্রশ্ন ১:</strong> সমস্যা কি নতুন তথ্য? → RAG</p><p><strong>প্রশ্ন ২:</strong> সমস্যা কি শুধু ফরম্যাট/শৈলী? → Prompting</p><p><strong>প্রশ্ন ৩:</strong> মডেল কি ডোমেইনে দুর্বল, prompting-এ ঠিক হচ্ছে না? → Fine-tuning</p><p><strong>প্রশ্ন ৪:</strong> Latency/cost কমাতে ছোট মডেল দরকার? → Fine-tuning (distillation)</p><p><strong>Rule of thumb:</strong> আগে prompting চেষ্টা করো → RAG চেষ্টা করো → শেষে fine-tuning। ৯০% সমস্যা প্রথম দুটোতে সমাধান হয়।</p>`
  }
});

// ══ DOOR 2: DATASET CURATION ══
doors.push({
  num:2, icon:"📊", color:"#5b9eff", name:"উপাদান কক্ষ",
  subtitle:"The Materials Chamber", tech:"Dataset Curation & Preparation",
  spirit:"তাযকিয়া — পরিশীলন, পরিশুদ্ধি",
  secret:"Fine-tuning-এর ৮০% সময় ডেটায়। খারাপ ডেটা = খারাপ মডেল। ভালো ডেটা = ভালো মডেল। ১০০টি নিখুঁত example > ১০,০০০টি আবর্জনা। Quality > Quantity। এটাই fine-tuning-এর সবচেয়ে গুরুত্বপূর্ণ সত্য।",
  recall:{
    q:"উপাদান কক্ষে কেন কাঁচামাল যাচাই করে তারপর ব্যবহার করা হয়?",
    qen:"Why is raw material verified before use in the materials chamber?",
    a:"কারণ কাঁচামালের গুণমান = পণ্যের গুণমান। Fine-tuning ডেটাও তেমনি — খারাপ example মডেল খারাপ বানায়। ১০০টি নিখুঁত example ১০,০০০টি আবর্জনার চেয়ে ভালো। Quality > Quantity।",
    aen:"Because raw material quality = product quality. Fine-tuning data too — bad examples make bad models. 100 perfect examples beat 10,000 garbage ones. Quality > Quantity."
  },
  story:`
<p class="scene-setting">দ্বিতীয় ক্ষেত্র। উপাদান কক্ষ। বস্তা ভর্তি লোহা, কয়লা, বালি। কিন্তু প্রতিটা বস্তা যাচাই করা হয় — বিশুদ্ধ? মিশ্রণ আছে? কারিগর সাকিনা একটা বস্তা খুললেন — ভেতরে মাটি মেশানো। "এটা বাদ," তিনি বললেন। "একটা মেশানো কণা পুরো তলোয়ার নষ্ট করে।"</p>
<p class="scene-setting en">The second chamber. Materials room. Sacks of iron, coal, sand. But each sack is verified — pure? Mixed? Craftswoman Sakina opened a sack — dirt mixed in. "Discard," she said. "One mixed grain ruins the entire sword."</p>

<div class="dialogue">নির্বাচনের কক্ষ বলেছিলেন — সঠিক সরঞ্জাম বেছে নাও। কিন্তু আমি বলি — fine-tuning বেছে নিলেই শেষ নয়। উপাদান দরকার — ডেটা। আর ডেটা হলো fine-tuning-এর সবচেয়ে গুরুত্বপূর্ণ অংশ। ৮০% সময় ডেটায়। খারাপ ডেটা = খারাপ মডেল। প্রতিটা example যাচাই করো।</div>
<div class="dialogue en">"The choice chamber said — choose the right tool. But I say — choosing fine-tuning isn't the end. You need material — data. And data is the most important part of fine-tuning. 80% of time on data. Bad data = bad model. Verify every example."</div>

<div class="code-block">Dataset Curation — Quality > Quantity:

THE GOLDEN RULE:
  ১০০ high-quality examples 
  > ১০,০০০ mediocre examples
  > ১০০,০০০ noisy examples

  "Garbage In, Garbage Out" — কিন্তু fine-tuning-এ
  এটা আরও তীব্র: "Slightly-off In, Permanently-off Out"

DATA FORMAT (SFT — Supervised Fine-Tuning):

  ┌─────────────────────────────────────────┐
  │ প্রতিটি example একটি conversation:       │
  │                                         │
  │ {                                       │
  │   "messages": [                         │
  │     {"role": "system",                  │
  │      "content": "You are a medical      │
  │       assistant..."},                   │
  │     {"role": "user",                    │
  │      "content": "What is diabetes?"},   │
  │     {"role": "assistant",               │
  │      "content": "Diabetes is a chronic  │
  │       condition..."}                    │
  │   ]                                     │
  │ }                                       │
  └─────────────────────────────────────────┘

  OpenAI: JSONL format (JSON Lines)
  HuggingFace: conversational dataset format
  Generic: instruction-response pairs

DATASET CREATION — ৫ উৎস:

১. HUMAN-AUTHORED (সবচেয়ে ভালো, সবচেয়ে ব্যয়বহুল)
  • Domain expert লেখেন প্রতিটি response
  • ৫০০-৫০০০ examples — যথেষ্ট
  • Quality: ★★★★★
  • Cost: $৫-৫০ per example

২. DISTILLATION (বড় মডেল থেকে)
  • GPT-4/Claude দিয়ে response বানাও
  • তারপর ছোট মডেল fine-tune করো
  • Quality: ★★★★ (মাঝে মাঝে ভুল)
  • Cost: $০.০১-০.১০ per example
  • ⚠️ License check! OpenAI output fine-tune-এ 
    নিষিদ্ধ হতে পারে

৩. REAL USER DATA
  • Production logs থেকে ভালো কথোপকথন
  • Human review + edit
  • Quality: ★★★★ (realistic)
  • Cost: review time

৪. SYNTHETIC AUGMENTATION
  • কয়েকটি seed examples → LLM দিয়ে বাড়াও
  • Self-instruct, Evol-Instruct
  • Quality: ★★★ (needs filtering)
  • Cost: low

৫. PUBLIC DATASETS
  • HuggingFace datasets, Dolly, OASST
  • Quality: ★★★ (variable)
  • Cost: free
  • ⚠️ License check

DATASET QUALITY CHECKLIST:

  ☐ প্রতিটি response সঠিক? (fact check)
  ☐ প্রতিটি response ভালো লেখা? (fluency)
  ☐ প্রতিটি response কাঙ্ক্ষিত ফরম্যাটে?
  ☐ Diverse? (সব এক রকম নয়)
  ☐ No harmful/biased content?
  ☐ No contradictory examples?
  ☐ Train/test split আছে? (৯০/১০)

DATASET SIZE GUIDELINE:
  ┌──────────────────┬────────────────────┐
  │ Task Complexity  │ Minimum Examples   │
  ├──────────────────┼────────────────────┤
  │ Simple format    │ ১০০-৫০০            │
  │ Domain adapt     │ ৫০০-৫,০০০          │
  │ Complex reasoning│ ৫,০০০-৫০,০০০      │
  │ Full behavior    │ ৫০,০০০+            │
  └──────────────────┴────────────────────┘</div>

<div class="dialogue">তাযকিয়া — purification, refinement। কুরআনে আল্লাহ বলেন — "সফল সেই ব্যক্তি যে নিজেকে পরিশুদ্ধ করে।" (৯১:৯)। Fine-tuning-এর ডেটাও পরিশুদ্ধ হতে হয়। প্রতিটি example যাচাই, প্রতিটি response নিখুঁত। অশুদ্ধ ডেটা = অশুদ্ধ মডেল। শুদ্ধ ডেটা = শুদ্ধ মডেল। তাযকিয়া ছাড়া fine-tuning = বিপদ।</div>
<div class="dialogue en">"Tazkiyah — purification, refinement. Allah says — 'Successful is the one who purifies themselves.' (91:9). Fine-tuning data must be purified too. Every example verified, every response perfect. Impure data = impure model. Pure data = pure model. Without tazkiyah, fine-tuning = danger."</div>`,
  senior:{
    title:"Dataset Strategy — আজই শুরু",
    body:`<p><strong>Start small:</strong> ১০০টি hand-crafted examples। দেখো fine-tuning কাজ করে কি না।</p><p><strong>Augment:</strong> ভালো হলে → distillation বা augmentation দিয়ে ১০০০-৫০০০-এ বাড়াও।</p><p><strong>Filter:</strong> LLM দিয়ে প্রতিটি example quality score করো। কম স্কোর বাদ দাও।</p><p><strong>Eval set:</strong> সবসময় ১০% আলাদা রাখো — training-এ ব্যবহার করো না।</p>`
  }
});

// ══ DOOR 3: LoRA ══
doors.push({
  num:3, icon:"🔧", color:"#52c41a", name:"LoRA কক্ষ",
  subtitle:"The LoRA Chamber", tech:"LoRA — Low-Rank Adaptation",
  spirit:"কায়সর — সৃজনশীল সংযোজন",
  secret:"Full fine-tuning = সব প্যারামিটার বদলাও। LoRA = শুধু একটা ছোট 'adapter' যোগ করো। ১% প্যারামিটার, ৯৯% কম মেমরি, প্রায় একই ফল। এটাই fine-tuning-এর বিপ্লব।",
  recall:{
    q:"কারিগর কেন পুরো তলোয়ার নয়, শুধু ধার বদলান?",
    qen:"Why does the craftsman change only the edge, not the whole sword?",
    a:"কারণ ধারই মূল। বাকি অংশ স্থির। LoRA-ও তেমনি — পুরো মডেল নয়, শুধু একটা ছোট adapter। ১% প্যারামিটার বদলায়, ৯৯% স্থির। ফল প্রায় একই। কিন্তু মেমরি ও সময় ১০x কম।",
    aen:"Because the edge is what matters. The rest stays fixed. LoRA too — not the whole model, just a small adapter. Changes 1% of parameters, 99% frozen. Result nearly the same. But memory and time 10x less."
  },
  story:`
<p class="scene-setting">তৃতীয় ক্ষেত্র। LoRA কক্ষ। কারিগর দাউদ একটা তলোয়ারের ধার পরিবর্তন করছেন — পুরো তলোয়ার নয়, শুধু ধার। "পুরো তলোয়ার বানালে কয়েক দিন," তিনি বললেন। "শুধু ধার বদলালে কয়েক ঘণ্টা। কিন্তু কাটার ক্ষমতা প্রায় একই। এটাই LoRA।"</p>
<p class="scene-setting en">The third chamber. LoRA room. Craftsman Dawud modifies a sword's edge — not the whole sword, just the edge. "Making the whole sword takes days," he said. "Changing just the edge takes hours. But cutting power is nearly the same. This is LoRA."</p>

<div class="dialogue">উপাদান কক্ষ বলেছিলেন — ডেটা গুরুত্বপূর্ণ। কিন্তু আমি বলি — ডেটা থাকলে কীভাবে fine-tune করবে? Full fine-tuning সব প্যারামিটার বদলায় — ৭B মডেলে ৭B গ্রেডিয়েন্ট। বিশাল GPU দরকার। কিন্তু LoRA? ১% প্যারামিটার। একটা consumer GPU-তে চলে।</div>
<div class="dialogue en">"The materials chamber said — data is important. But I say — with data, how do you fine-tune? Full fine-tuning changes all parameters — 7B model needs 7B gradients. Huge GPU needed. But LoRA? 1% of parameters. Runs on a consumer GPU."</div>

<div class="code-block">LoRA — Low-Rank Adaptation:

THE PROBLEM WITH FULL FINE-TUNING:
  ৭B parameter model
  → ৭B gradients per step  
  → প্রতিটি gradient = ৪ bytes (fp32)
  → ২৮ GB GPU memory (শুধু gradients)
  → + model weights (১৪ GB)
  → + optimizer state (২৮ GB)
  → Total: ~৭০ GB GPU = multiple A100s
  
  → অপ্র্যাক্টিক্যাল for most people

LoRA SOLUTION (Hu et al., 2021):

  Key insight: Weight updates একটা 
  low-rank matrix-এ প্রকাশ করা যায়।

  Original: W (full weight matrix)
  LoRA: W + ΔW where ΔW = A × B
    A: (d × r) — small matrix
    B: (r × d) — small matrix  
    r = rank (সাধারণত ৮-৬৪)

  ┌─────────────────────────────────┐
  │ Full W: ৪০৯৬ × ৪০৯৬            │
  │ = ১৬,৭৭৭,২১৬ parameters        │
  │                                 │
  │ LoRA A×B (r=৮):                 │
  │ A: ৪০৯৬ × ৮ = ৩২,৭৬৮           │
  │ B: ৮ × ৪০৯৬ = ৩২,৭৬৮           │
  │ Total: ৬৫,৫৩৬ parameters       │
  │                                 │
  │ Reduction: ৯৯.৬%!              │
  └─────────────────────────────────┘

LoRA TRAINING:
  • Freeze original weights W
  • Train only A and B (tiny!)
  • At inference: W_effective = W + A×B
  
  → Original model unchanged
  → LoRA adapter = few MB (not GB!)
  → Multiple LoRA adapters = multiple 
    "personalities" on one base model

LoRA HYPERPARAMETERS:
  
  rank (r): ৮-৬৪
    → ছোট = কম প্যারামিটার, কম নমনীয়তা
    → বড় = বেশি প্যারামিটার, বেশি নমনীয়তা
    → start with ১৬, adjust
  
  alpha: সাধারণত ২×rank
    → scaling factor for the adapter
  
  target_modules: কোন layers-এ LoRA?
    → q_proj, v_proj (attention) — সবচেয়ে সাধারণ
    → all-linear (সব linear layers) — বেশি নমনীয়
  
  dropout: ০.০৫-০.১
    → regularization

MEMORY COMPARISON:
  ┌─────────────────┬──────────┬───────────┐
  │ Method          │ GPU RAM  │ Disk Size │
  ├─────────────────┼──────────┼───────────┤
  │ Full FT (৭B)    │ ~৭০ GB   │ ১৪ GB     │
  │ LoRA (৭B, r=১৬) │ ~১০ GB   │ ২০ MB!    │
  │ QLoRA (৭B)      │ ~৬ GB    │ ২০ MB     │
  └─────────────────┴──────────┴───────────┘

  → LoRA = single consumer GPU (RTX ৪০৯০)
  → QLoRA = even smaller GPU possible

LoRA QUALITY:
  LoRA ≈ ৯৫-৯৯% of full fine-tuning quality
  → বেশিরভাগ কাজে পার্থক্য নগণ্য
  → খুব সূক্ষ্ম domain adaptation-এ পার্থক্য 
    হতে পারে

TOOLS:
  PEFT (HuggingFace) → LoRA implementation
  Unsloth → ২x faster LoRA training
  Axolotl → easy fine-tuning scripts
  LLaMA-Factory → web UI for LoRA</div>

<div class="dialogue">কায়সর — creative addition, skillful craft। কুরআনে আল্লাহ বলেন — "আমি মানুষকে সৃষ্টি করেছি সেরা কাঠামোয়।" (৯৫:৪)। প্রতিটি সৃষ্টি নিখুঁত কাঠামো। LoRA-ও একটি নিখুঁত কাঠামো — সব না বদলে সবচেয়ে গুরুত্বপূর্ণ অংশ বদলানো। কম পরিশ্রম, বেশি ফল। এটাই কায়সর — শিল্পীর সৃজনশীলতা।</div>
<div class="dialogue en">"Kaysar — creative addition, skillful craft. Allah says — 'We created man in the best stature.' (95:4). Each creation is perfect structure. LoRA too is a perfect structure — changing not everything, but the most important part. Less effort, more result. This is kaysar — the artisan's creativity."</div>`,
  senior:{
    title:"LoRA Training — প্রথম চেষ্টা",
    body:`<p><strong>Model:</strong> Llama 3.1 8B বা Mistral 7B (open, capable)।</p><p><strong>GPU:</strong> RTX 4090 (24GB) বা A10G (24GB)। Colab Pro-এ ট্রাই করো।</p><p><strong>Library:</strong> Unsloth (fastest) বা PEFT (standard)।</p><p><strong>Config:</strong> rank=16, alpha=32, target=q_proj+v_proj, lr=2e-4, epochs=3, batch_size=4, gradient_accumulation=4।</p><p><strong>Data:</strong> 500-5000 examples, JSONL format।</p><p><strong>Time:</strong> 1-3 hours on single GPU।</p>`
  }
});

// ══ DOOR 4: QLoRA ══
doors.push({
  num:4, icon:"⚗️", color:"#b37feb", name:"QLoRA কক্ষ",
  subtitle:"The QLoRA Chamber", tech:"QLoRA — Quantized LoRA",
  spirit:"ইনসাফ — ন্যায্য ভারসাম্য",
  secret:"QLoRA = LoRA + 4-bit quantization। বেস মডেল 4-bit-এ compress করো, LoRA adapter 16-bit-এ train করো। ৭B মডেল ৬ GB RAM-এ! প্রায় কোনো পার্থক্য ছাড়া। এটাই fine-tuning গণতান্ত্রিক করেছে।",
  recall:{
    q:"QLoRA কক্ষে কেন কাঁচামাল চেপে ছোট করা হয়, তারপর কাজ করা হয়?",
    qen:"Why is material compressed in QLoRA chamber before working?",
    a:"কারণ চেপে ছোট করলে কম জায়গায় বেশি কাজ। QLoRA-ও তেমনি — বেস মডেল 4-bit-এ compress, LoRA adapter আলাদা। ৭B মডেল ৬ GB-এ। গুণমান প্রায় অপরিবর্তিত। এটাই QLoRA-এর জাদু।",
    aen:"Because compressing means more work in less space. QLoRA too — base model compressed to 4-bit, LoRA adapter separate. 7B model in 6 GB. Quality nearly unchanged. This is QLoRA's magic."
  },
  story:`
<p class="scene-setting">চতুর্থ ক্ষেত্র। QLoRA কক্ষ। কারিগর মারিয়াম একটা বিশাল লোহার খণ্ডকে চেপে ছোট করছেন — compress করছেন। "আগে এটা এক ঘর দখল করত," তিনি বললেন। "এখন এক হাতে। কিন্তু শক্তি প্রায় একই। কীভাবে? compress করেছি — অপ্রয়োজনীয় অংশ সরিয়ে।"</p>
<p class="scene-setting en">The fourth chamber. QLoRA room. Craftswoman Mariam compresses a massive iron block — squeezing it smaller. "This used to fill a room," she said. "Now fits in one hand. But strength nearly the same. How? Compressed — removed unnecessary parts."</p>

<div class="dialogue">LoRA কক্ষ বলেছিলেন — ১% প্যারামিটার train করো। কিন্তু আমি বলি — LoRA-তেও বেস মডেল 16-bit-এ দরকার। ৭B মডেল = ১৪ GB। এখনো বড় GPU দরকার। QLoRA সেটাও কমিয়ে দেয় — 4-bit-এ compress করে। ৬ GB। consumer GPU-তে।</div>
<div class="dialogue en">"The LoRA chamber said — train 1% of parameters. But I say — LoRA still needs the base model in 16-bit. 7B model = 14 GB. Still a big GPU. QLoRA reduces even that — compressing to 4-bit. 6 GB. Consumer GPU."</div>

<div class="code-block">QLoRA — Fine-tuning for Everyone:

QUANTIZATION BASICS:
  fp32 (32-bit float): ৪ bytes per param
  fp16/bf16 (16-bit): ২ bytes per param
  int8 (8-bit): ১ byte per param
  nf4 (4-bit NormalFloat): ০.৫ byte per param

  ৭B model memory:
    fp32: ২৮ GB
    fp16: ১৪ GB  
    int8: ৭ GB
    nf4: ৩.৫ GB ← QLoRA uses this!

QLoRA PIPELINE (Dettmers et al., 2023):

  ┌─────────────────────────────────────────┐
  │ Step 1: Load base model in 4-bit (nf4)  │
  │   ৭B model → ৩.৫ GB                     │
  │   → frozen, not trained                 │
  ├─────────────────────────────────────────┤
  │ Step 2: Add LoRA adapters in 16-bit     │
  │   small A×B matrices                    │
  │   → trainable                           │
  ├─────────────────────────────────────────┤
  │ Step 3: Forward pass                    │
  │   4-bit weights → dequantize → compute  │
  │   gradients flow to LoRA only           │
  ├─────────────────────────────────────────┤
  │ Step 4: Backward pass                   │
  │   Only LoRA A×B updated                 │
  │   Base stays 4-bit frozen               │
  └─────────────────────────────────────────┘

NF4 (NormalFloat 4-bit):
  → Standard quantization (uniform) সব 
    values-এ সমান spacing
  → nf4: neural network weights-এর 
    distribution অনুযায়ী spacing
  → weights সাধারণত normal/bell-shaped
  → nf4 এই distribution-এ optimize
  → কম তথ্য হ্রাস, কম precision loss

DOUBLE QUANTIZATION:
  → quantization constants-ও quantize করো!
  → additional ~০.৪ bits/param save
  → ছোট, কিন্তু প্রতিটা MB গুরুত্বপূর্ণ

PAGED OPTIMIZERS:
  → optimizer state GPU memory overflow হলে
    → CPU RAM-এ page করো
  → OOM (Out of Memory) error এড়ায়

QLoRA vs LoRA vs Full:
  ┌──────────┬──────────┬──────────┬──────────┐
  │ Metric   │ Full FT  │ LoRA     │ QLoRA    │
  ├──────────┼──────────┼──────────┼──────────┤
  │ ৭B GPU   │ ~৭০ GB   │ ~১০ GB   │ ~৬ GB    │
  │ ৭B Disk  │ ১৪ GB    │ ২০ MB    │ ২০ MB    │
  │ Quality  │ ১০০%     │ ৯৫-৯৯%   │ ৯৩-৯৮%  │
  │ Speed    │ ধীর      │ দ্রুত    │ মাঝারি   │
  │ GPU      │ A100×৪   │ RTX ৪০৯০ │ RTX ৩০৯০│
  └──────────┴──────────┴──────────┴──────────┘

QUALITY IMPACT:
  QLoRA ≈ ৯৩-৯৮% of full fine-tuning
  → বেশিরভাগ কাজে পার্থক্য নগণ্য
  → খুব সূক্ষ্ম domain-এ সামান্য পার্থক্য

TRAINING WITH QLoRA:
  from transformers import AutoModelForCausalLM
  from peft import prepare_model_for_kbit_training
  
  model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-3.1-8B",
    load_in_4bit=True,        # nf4 quantization
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    device_map="auto"
  )
  model = prepare_model_for_kbit_training(model)
  # → add LoRA adapters → train!

DEMOCRATIZATION:
  QLoRA before: fine-tuning = big companies only
  QLoRA after: fine-tuning = anyone with a GPU
  → Colab Pro (T4, 16GB) = fine-tune 7B!
  → Consumer RTX 3090 (24GB) = fine-tune 13B!
  → This changed everything</div>

<div class="dialogue">ইনসাফ — justice, fairness, balance। কুরআনে আল্লাহ বলেন — "ন্যায্যতা কায়েম করো।" (৫:৮)। QLoRA হলো প্রযুক্তির ইনসাফ — fine-tuning এখন সবার জন্য, শুধু বড় কোম্পানির জন্য নয়। যে কেউ consumer GPU দিয়ে fine-tune করতে পারে। এটাই QLoRA-এর ইনসাফ — গণতন্ত্রের প্রসার।</div>
<div class="dialogue en">"Insaf — justice, fairness, balance. Allah says — 'Establish justice.' (5:8). QLoRA is technology's insaf — fine-tuning is now for everyone, not just big companies. Anyone with a consumer GPU can fine-tune. This is QLoRA's insaf — democratization."</div>`,
  senior:{
    title:"QLoRA Setup — সহজ শুরু",
    body:`<p><strong>Colab:</strong> Free T4 (16GB) — 7B model QLoRA training সম্ভব! Colab Pro আরও ভালো।</p><p><strong>Library:</strong> Unsloth — QLoRA-র জন্য 2x faster, less memory।</p><p><strong>Notebook:</strong> Unsloth-এর রেডিমেড Colab notebooks আছে। Copy → run → fine-tune।</p><p><strong>Quantization:</strong> nf4, compute_type=bf16, double_quant=True।</p><p><strong>Caution:</strong> 4-bit model-এ inference করাও যায়, কিন্তু সামান্য quality drop। সেরা ফল: train QLoRA → merge → 16-bit inference।</p>`
  }
});

// ══ DOOR 5: SFT vs DPO ══
doors.push({
  num:5, icon:"🧠", color:"#ff6b35", name:"প্রশিক্ষণ পদ্ধতির কক্ষ",
  subtitle:"The Training Method Chamber", tech:"SFT vs DPO vs PPO",
  spirit:"তরবিয়ত — পদ্ধতিগত শিক্ষা",
  secret:"Fine-tuning এক রকম নয়। SFT = সঠিক উত্তর দেখাও। DPO = ভালো/খারাপ উত্তর তুলনা করো। PPO = reward signal থেকে শেখো। প্রতিটা পদ্ধতির নিজস্ব সময়, ডেটা, ও ফল। সঠিক পদ্ধতি বেছে নাও।",
  recall:{
    q:"প্রশিক্ষণ কক্ষে কেন একাধিক পদ্ধতি আছে?",
    qen:"Why are there multiple training methods?",
    a:"কারণ প্রতিটা কাজের জন্য আলাদা পদ্ধতি। SFT = নকল করো। DPO = তুলনা করো। PPO = পুরস্কার থেকে শেখো। Fine-tuning-এও তেমনি — কাজ অনুযায়ী পদ্ধতি বেছে নাও। সব কাজে এক পদ্ধতি নয়।",
    aen:"Because different tasks need different methods. SFT = imitate. DPO = compare. PPO = learn from reward. In fine-tuning too — choose method per task. Not one method for all."
  },
  story:`
<p class="scene-setting">পঞ্চম ক্ষেত্র। প্রশিক্ষণ পদ্ধতির কক্ষ। তিনটি দরজা — একটায় শিক্ষার্থী নকল করছে (SFT), একটায় দুটি উত্তর তুলনা করছে (DPO), একটায় পরীক্ষক পুরস্কার দিচ্ছে (PPO)। প্রশিক্ষক উস্তাদ ইউসুফ বললেন — "তিন পদ্ধতি। প্রতিটি ভিন্ন। কাজ অনুযায়ী বেছে নাও।"</p>
<p class="scene-setting en">The fifth chamber. Training method room. Three doors — one shows a student imitating (SFT), one comparing two answers (DPO), one receiving rewards from examiner (PPO). Trainer Ustad Yusuf said — "Three methods. Each different. Choose per task."</p>

<div class="dialogue">QLoRA কক্ষ বলেছিলেন — কম মেমরিতে train করো। কিন্তু আমি বলি — train কীভাবে? শুধু একটা পদ্ধতি নয়। তিনটি। SFT — সবচেয়ে সাধারণ, সহজ। DPO — পছন্দ-ভিত্তিক, আধুনিক। PPO — RL-ভিত্তিক, জটিল। প্রতিটা পদ্ধতির ডেটা ও ফল আলাদা।</div>
<div class="dialogue en">"The QLoRA chamber said — train in less memory. But I say — how to train? Not just one method. Three. SFT — most common, simple. DPO — preference-based, modern. PPO — RL-based, complex. Each has different data and results."</div>

<div class="code-block">Training Methods — Three Paths:

╔══════════════════════════════════════════╗
║ ১. SFT (Supervised Fine-Tuning)          ║
║ "সঠিক উত্তর দেখাও, নকল করো"              ║
╠══════════════════════════════════════════╣
║                                          ║
║ Data: instruction → correct response     ║
║   {input: "Q", output: "correct A"}      ║
║                                          ║
║ Method: standard supervised learning     ║
║   loss = CrossEntropy(output, target)    ║
║                                          ║
║ ✅ সহজ, well-understood, fast            ║
║ ✅ সবচেয়ে সাধারণ fine-tuning             ║
║ ✅ ৯০% fine-tuning = SFT                 ║
║ ❌ "correct" উত্তর লেখা কষ্টকর             ║
║ ❌ একাধিক সঠিক উত্তর থাকলে সমস্যা         ║
║                                          ║
║ Use when: তোমার নির্দিষ্ট ফরম্যাট/শৈলী    ║
║ শেখাতে চাও                               ║
╠══════════════════════════════════════════╣
║ ২. DPO (Direct Preference Optimization)  ║
║ "দুটি উত্তর দাও — কোনটা ভালো?"            ║
╠══════════════════════════════════════════╣
║                                          ║
║ Data: prompt → chosen + rejected         ║
║   {prompt: "Q",                          ║
║    chosen: "better A",                   ║
║    rejected: "worse A"}                  ║
║                                          ║
║ Method: contrastive learning             ║
║   increase chosen prob, decrease rejected║
║   NO reward model needed!                ║
║                                          ║
║ ✅ RLHF-এর সরল বিকল্প                     ║
║ ✅ সহজে ডেটা তৈরি — তুলনা করা সহজ         ║
║ ✅ Stable, reproducible                  ║
║ ❌ chosen/rejected দুটোই দরকার            ║
║ ❌ quality depends on comparison data    ║
║                                          ║
║ Use when: quality/alignment উন্নত করতে  ║
║ চাও, এখনো SFT-এ কাজ করছে কিন্তু আরও     ║
║ ভালো চাও                                 ║
╠══════════════════════════════════════════╣
║ ৩. PPO (Proximal Policy Optimization)   ║
║ "reward model থেকে শেখো"                 ║
╠══════════════════════════════════════════╣
║                                          ║
║ Data: reward model (trained on rankings) ║
║ Method: RL — model generates → reward    ║
║   → update policy → repeat               ║
║                                          ║
║ ✅ সবচেয়ে flexible                       ║
║ ✅ ChatGPT এই পদ্ধতিতে trained            ║
║ ❌ জটিল — reward model train করা লাগে    ║
║ ❌ unstable — hyperparameter-sensitive   ║
║ ❌ ব্যয়বহুল — multiple models            ║
║                                          ║
║ Use when: production-grade alignment,    ║
║ সম্পদ আছে, team available                ║
╚══════════════════════════════════════════╝

RECOMMENDED PROGRESSION:
  Step 1: SFT (base behavior)
  → তোমার ডোমেইনে সাধারণ কাজ শেখাও
  
  Step 2: DPO (quality refinement)  
  → SFT model-কে আরও নিখুঁত করো
  
  Step 3: PPO (production alignment) [optional]
  → শুধু বড় প্রোজেক্টে, team সহ

COMPARISON:
  ┌────────┬────────┬────────┬────────┐
  │        │ SFT    │ DPO    │ PPO    │
  ├────────┼────────┼────────┼────────┤
  │ সহজতা  │ ★★★★★ │ ★★★★  │ ★★    │
  │ ডেটা   │ input  │ chosen │ reward │
  │        │ output │ reject │ model  │
  │ খরচ   │ $      │ $$     │ $$$$   │
  │ স্থিতি │ stable │ stable │ tricky │
  │ ফল    │ ভালো   │ উন্নত  │ সেরা   │
  └────────┴────────┴────────┴────────┘</div>

<div class="dialogue">তরবিয়ত — systematic education, training method। কুরআনে আল্লাহ বলেন — "পবিত্র করো তাদের, শিক্ষা দাও তাদের কিতাব ও প্রজ্ঞা।" (৬২:২)। শিক্ষার পদ্ধতি আলাদা — কেউ নকল করে শেখে, কেউ তুলনায়, কেউ পুরস্কারে। Fine-tuning-এও তেমনি — কাজ অনুযায়ী পদ্ধতি বেছে নাও। সঠিক পদ্ধতি = সঠিক ফল।</div>
<div class="dialogue en">"Tarbiyat — systematic education, training method. Allah says — 'Purify them, teach them the Book and wisdom.' (62:2). Education methods differ — some learn by imitation, some by comparison, some by reward. In fine-tuning too — choose method per task. Right method = right result."</div>`,
  senior:{
    title:"Method Selection — তোমার প্রজেক্টে",
    body:`<p><strong>প্রথম fine-tuning?</strong> → SFT। সহজ, well-documented, ৯০% ক্ষেত্রে যথেষ্ট।</p><p><strong>SFT ভালো কিন্তু আরও ভালো চাও?</strong> → DPO। SFT model-কে preference data দিয়ে refine করো।</p><p><strong>Production alignment?</strong> → PPO বা RLHF। কিন্তু জটিল, সম্পদ চায়। একা ট্রাই করবে না।</p><p><strong>2024-2025 trend:</strong> DPO SFT-এর পরে স্ট্যান্ডার্ড হচ্ছে। Llama 3, Zephyr, Mistral — DPO ব্যবহার করে।</p>`
  }
});
