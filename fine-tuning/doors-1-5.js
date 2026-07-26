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
<div class="dialogue en">"Hikmah — wisdom, right decision. Allah says — 'Whoever is given wisdom, has been given much good.' (2:269). Hikmah is — choosing the right tool at the right time. Not fine-tuning for every problem, not RAG for every problem. Understand each problem, then decide. This is hikmah."</div>

<div class="svg-diagram">
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px">
  <defs>
    <linearGradient id="ft1bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
    <marker id="ft1arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L8,5 L0,10 Z" fill="#7dd3fc"/></marker>
  </defs>
  <rect width="800" height="400" fill="url(#ft1bg)" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#22d3ee">Pre-training vs Fine-tuning</text>
  <text x="400" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">সাধারণ জ্ঞান থেকে নির্দিষ্ট দক্ষতা</text>
  <rect x="30" y="70" width="330" height="150" rx="10" fill="none" stroke="#4ade80" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="195" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#4ade80">&#9312; Pre-training</text>
  <text x="195" y="112" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#a7f3d0">Trillions of tokens</text>
  <text x="50" y="138" font-family="monospace" font-size="11" fill="#cbd5e1">&#8226; Books, web, code, papers</text>
  <text x="50" y="156" font-family="monospace" font-size="11" fill="#cbd5e1">&#8226; Next-token prediction</text>
  <text x="50" y="174" font-family="monospace" font-size="11" fill="#cbd5e1">&#8226; Weeks on GPU clusters</text>
  <text x="50" y="192" font-family="monospace" font-size="11" fill="#cbd5e1">&#8226; Learns language + world knowledge</text>
  <text x="50" y="210" font-family="monospace" font-size="11" fill="#fbbf24">Cost: $ millions</text>
  <rect x="440" y="70" width="330" height="150" rx="10" fill="none" stroke="#22d3ee" stroke-width="2"/>
  <text x="605" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#22d3ee">&#9313; Fine-tuning</text>
  <text x="605" y="112" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#7dd3fc">Hundreds to thousands of examples</text>
  <text x="460" y="138" font-family="monospace" font-size="11" fill="#cbd5e1">&#8226; Medical, legal, code examples</text>
  <text x="460" y="156" font-family="monospace" font-size="11" fill="#cbd5e1">&#8226; Supervised / preference learning</text>
  <text x="460" y="174" font-family="monospace" font-size="11" fill="#cbd5e1">&#8226; Hours on single GPU</text>
  <text x="460" y="192" font-family="monospace" font-size="11" fill="#cbd5e1">&#8226; Learns behavior + skill</text>
  <text x="460" y="210" font-family="monospace" font-size="11" fill="#fbbf24">Cost: $10 - $5000</text>
  <line x1="360" y1="145" x2="432" y2="145" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft1arr)"/>
  <text x="396" y="137" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#7dd3fc">adapt</text>
  <rect x="30" y="250" width="740" height="120" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="274" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#fbbf24">কখন কোন সরঞ্জাম? (হিকমাহ)</text>
  <line x1="400" y1="284" x2="400" y2="360" stroke="#334155" stroke-width="1"/>
  <text x="50" y="302" font-family="monospace" font-size="12" fill="#4ade80">&#8594; নতুন তথ্য = RAG</text>
  <text x="50" y="322" font-family="monospace" font-size="12" fill="#7dd3fc">&#8594; নতুন শৈলী/ফরম্যাট = Prompting</text>
  <text x="50" y="342" font-family="monospace" font-size="12" fill="#fbbf24">&#8594; নতুন দক্ষতা/আচরণ = Fine-tuning</text>
  <text x="420" y="302" font-family="monospace" font-size="11" fill="#94a3b8">Pre-train: জ্ঞান যোগ করে</text>
  <text x="420" y="322" font-family="monospace" font-size="11" fill="#94a3b8">Fine-tune: আচরণ বদলায়</text>
  <text x="420" y="342" font-family="monospace" font-size="11" fill="#94a3b8">৭B fine-tuned &#8776; বড় general</text>
  <text x="420" y="362" font-family="monospace" font-size="11" fill="#fcd34d">৯০% সমস্যা: RAG + Prompting</text>
</svg>
</div>

`,
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
<div class="dialogue en">"Tazkiyah — purification, refinement. Allah says — 'Successful is the one who purifies themselves.' (91:9). Fine-tuning data must be purified too. Every example verified, every response perfect. Impure data = impure model. Pure data = pure model. Without tazkiyah, fine-tuning = danger."</div>

<div class="svg-diagram">
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px">
  <defs>
    <linearGradient id="ft2bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
    <marker id="ft2arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L8,5 L0,10 Z" fill="#7dd3fc"/></marker>
  </defs>
  <rect width="800" height="400" fill="url(#ft2bg)" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#22d3ee">Dataset Preparation Pipeline</text>
  <text x="400" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">৮০% সময় ডেটায় — Quality &gt; Quantity</text>
  <rect x="20" y="70" width="160" height="80" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="100" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#4ade80">Human-authored</text>
  <text x="100" y="110" text-anchor="middle" font-family="monospace" font-size="10" fill="#a7f3d0">Best quality</text>
  <text x="100" y="126" text-anchor="middle" font-family="monospace" font-size="10" fill="#a7f3d0">$5-50/example</text>
  <text x="100" y="142" text-anchor="middle" font-family="monospace" font-size="10" fill="#fbbf24">★★★★★</text>
  <rect x="20" y="160" width="160" height="80" rx="8" fill="#1e293b" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="100" y="182" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#22d3ee">Distillation</text>
  <text x="100" y="200" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">GPT-4 &#8594; data</text>
  <text x="100" y="216" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">$0.01-0.10/ex</text>
  <text x="100" y="232" text-anchor="middle" font-family="monospace" font-size="10" fill="#fbbf24">★★★★</text>
  <rect x="20" y="250" width="160" height="80" rx="8" fill="#1e293b" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="100" y="272" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#7dd3fc">Synthetic/Public</text>
  <text x="100" y="290" text-anchor="middle" font-family="monospace" font-size="10" fill="#bae6fd">Self-instruct</text>
  <text x="100" y="306" text-anchor="middle" font-family="monospace" font-size="10" fill="#bae6fd">Dolly, OASST</text>
  <text x="100" y="322" text-anchor="middle" font-family="monospace" font-size="10" fill="#fbbf24">★★★</text>
  <line x1="180" y1="200" x2="270" y2="200" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft2arr)"/>
  <rect x="280" y="120" width="180" height="160" rx="10" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <text x="370" y="144" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#fbbf24">Cleaning &amp; Format</text>
  <text x="300" y="170" font-family="monospace" font-size="11" fill="#fcd34d">&#9745; Fact check</text>
  <text x="300" y="188" font-family="monospace" font-size="11" fill="#fcd34d">&#9745; Fluency check</text>
  <text x="300" y="206" font-family="monospace" font-size="11" fill="#fcd34d">&#9745; Format verify</text>
  <text x="300" y="224" font-family="monospace" font-size="11" fill="#fcd34d">&#9745; Diversity check</text>
  <text x="300" y="242" font-family="monospace" font-size="11" fill="#fcd34d">&#9745; Bias filter</text>
  <text x="300" y="260" font-family="monospace" font-size="11" fill="#fcd34d">&#9745; Deduplicate</text>
  <line x1="460" y1="200" x2="540" y2="200" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft2arr)"/>
  <rect x="550" y="70" width="230" height="110" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="665" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#4ade80">Train Set (৯০%)</text>
  <text x="570" y="118" font-family="monospace" font-size="11" fill="#a7f3d0">&#8226; Instruction-response pairs</text>
  <text x="570" y="136" font-family="monospace" font-size="11" fill="#a7f3d0">&#8226; JSONL / conversational</text>
  <text x="570" y="154" font-family="monospace" font-size="11" fill="#a7f3d0">&#8226; 100 - 50,000 examples</text>
  <text x="570" y="172" font-family="monospace" font-size="11" fill="#fbbf24">Quality &gt; Quantity!</text>
  <rect x="550" y="200" width="230" height="110" rx="10" fill="#1e293b" stroke="#22d3ee" stroke-width="2"/>
  <text x="665" y="224" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#22d3ee">Eval Set (১০%)</text>
  <text x="570" y="248" font-family="monospace" font-size="11" fill="#7dd3fc">&#8226; Holdout — never train on</text>
  <text x="570" y="266" font-family="monospace" font-size="11" fill="#7dd3fc">&#8226; Diverse, representative</text>
  <text x="570" y="284" font-family="monospace" font-size="11" fill="#7dd3fc">&#8226; 100 - 500 examples</text>
  <text x="570" y="302" font-family="monospace" font-size="11" fill="#fbbf24">Base vs Fine-tuned</text>
  <text x="400" y="380" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">তাযকিয়া — প্রতিটি example যাচাই, নিখুঁত করো</text>
</svg>
</div>

`,
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

LoRA VARIANTS (2023-2025):

  DoRA (Weight-Decomposed LoRA, Liu et al. 2024)
    → ওজনকে দুই ভাগে ভাঙে: magnitude + direction
    → শুধু direction-এ LoRA apply করে, magnitude আলাদা
    → LoRA-এর চেয়ে ভালো quality, একই memory cost
    → বিশেষ করে effective: higher rank-এ
    → "LoRA done right" — negligible cost overhead

  rsLoRA (rank-stabilized LoRA, Kalajdzievski 2023)
    → সমস্যা: বড় rank (r=128+) হলে LoRA unstable
    → সমাধান: scaling factor √(1/r) দিয়ে stabilize
    → বড় rank-এ stable training, ভালো convergence
    → সাধারণত r>64 হলে দরকার

  PiSSA (Principal Singular Values, 2024)
    → শুধু random init নয়, SVD দিয়ে init
    → প্রথম থেকেই ভালো starting point
    → দ্রুত convergence, কম data-এ ভালো ফল

  কোনটা ব্যবহার করবে?
    → সাধারণ কাজ: standard LoRA (r=16)
    → বেশি quality দরকার: DoRA
    → বড় rank দরকার (r=128+): rsLoRA
    → কম data, দ্রুত train: PiSSA

TOOLS:
  PEFT (HuggingFace) → LoRA + DoRA implementation
  Unsloth → ২x faster LoRA training
  Axolotl → easy fine-tuning scripts
  LLaMA-Factory → web UI for LoRA</div>

<div class="dialogue">কায়সর — creative addition, skillful craft। কুরআনে আল্লাহ বলেন — "আমি মানুষকে সৃষ্টি করেছি সেরা কাঠামোয়।" (৯৫:৪)। প্রতিটি সৃষ্টি নিখুঁত কাঠামো। LoRA-ও একটি নিখুঁত কাঠামো — সব না বদলে সবচেয়ে গুরুত্বপূর্ণ অংশ বদলানো। কম পরিশ্রম, বেশি ফল। এটাই কায়সর — শিল্পীর সৃজনশীলতা।</div>
<div class="dialogue en">"Kaysar — creative addition, skillful craft. Allah says — 'We created man in the best stature.' (95:4). Each creation is perfect structure. LoRA too is a perfect structure — changing not everything, but the most important part. Less effort, more result. This is kaysar — the artisan's creativity."</div>

<div class="svg-diagram">
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px">
  <defs>
    <linearGradient id="ft3bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#ft3bg)" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#22d3ee">LoRA — Low-Rank Adaptation</text>
  <text x="400" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">১% প্যারামিটার, ৯৯% কম মেমরি</text>
  <text x="400" y="88" text-anchor="middle" font-family="monospace" font-size="15" font-weight="700" fill="#fbbf24">W_effective = W + &#916;W &#160;&#160; where &#160;&#160; &#916;W = A &#215; B</text>
  <rect x="50" y="110" width="200" height="200" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <text x="150" y="134" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#94a3b8">W (frozen)</text>
  <text x="150" y="152" text-anchor="middle" font-family="monospace" font-size="11" fill="#cbd5e1">d &#215; d</text>
  <rect x="80" y="168" width="140" height="100" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="150" y="205" text-anchor="middle" font-family="monospace" font-size="28" fill="#475569">&#128274;</text>
  <text x="150" y="232" text-anchor="middle" font-family="monospace" font-size="11" fill="#64748b">4096 &#215; 4096</text>
  <text x="150" y="250" text-anchor="middle" font-family="monospace" font-size="11" fill="#64748b">16.7M params</text>
  <text x="150" y="290" text-anchor="middle" font-family="monospace" font-size="11" fill="#4ade80">FROZEN &#10003;</text>
  <text x="270" y="210" text-anchor="middle" font-family="monospace" font-size="24" fill="#fbbf24">+</text>
  <rect x="300" y="110" width="180" height="200" rx="10" fill="#1e293b" stroke="#22d3ee" stroke-width="2"/>
  <text x="390" y="134" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#22d3ee">A &#215; B (trainable)</text>
  <text x="390" y="152" text-anchor="middle" font-family="monospace" font-size="11" fill="#7dd3fc">d&#215;r &#160; and &#160; r&#215;d</text>
  <rect x="315" y="168" width="65" height="100" rx="4" fill="#0f172a" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="347" y="195" text-anchor="middle" font-family="monospace" font-size="16" fill="#22d3ee">A</text>
  <text x="347" y="225" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">4096&#215;8</text>
  <rect x="395" y="168" width="65" height="100" rx="4" fill="#0f172a" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="427" y="195" text-anchor="middle" font-family="monospace" font-size="16" fill="#22d3ee">B</text>
  <text x="427" y="225" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">8&#215;4096</text>
  <text x="390" y="255" text-anchor="middle" font-family="monospace" font-size="11" fill="#4ade80">r = 8</text>
  <text x="390" y="275" text-anchor="middle" font-family="monospace" font-size="11" fill="#fbbf24">65K params</text>
  <text x="390" y="295" text-anchor="middle" font-family="monospace" font-size="11" fill="#4ade80">TRAINABLE &#9889;</text>
  <text x="500" y="210" text-anchor="middle" font-family="monospace" font-size="20" fill="#fbbf24">=</text>
  <rect x="530" y="110" width="240" height="200" rx="10" fill="none" stroke="#4ade80" stroke-width="2.5"/>
  <text x="650" y="134" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#4ade80">W_effective</text>
  <text x="650" y="152" text-anchor="middle" font-family="monospace" font-size="11" fill="#a7f3d0">at inference</text>
  <text x="650" y="195" text-anchor="middle" font-family="monospace" font-size="22" fill="#4ade80">&#9889;</text>
  <text x="650" y="222" text-anchor="middle" font-family="monospace" font-size="13" fill="#a7f3d0">99.6% fewer</text>
  <text x="650" y="242" text-anchor="middle" font-family="monospace" font-size="13" fill="#a7f3d0">parameters!</text>
  <text x="650" y="270" text-anchor="middle" font-family="monospace" font-size="11" fill="#fbbf24">Adapter = 20 MB</text>
  <text x="650" y="290" text-anchor="middle" font-family="monospace" font-size="11" fill="#fbbf24">(not 14 GB!)</text>
  <rect x="30" y="330" width="740" height="55" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="354" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#fbbf24">rank (r)=8-64 &#160;&#160; alpha=2&#215;r &#160;&#160; target=q_proj,v_proj &#160;&#160; dropout=0.05</text>
  <text x="400" y="374" text-anchor="middle" font-family="monospace" font-size="11" fill="#94a3b8">Multiple LoRA adapters = multiple personalities on one base model</text>
</svg>
</div>

`,
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
<div class="dialogue en">"Insaf — justice, fairness, balance. Allah says — 'Establish justice.' (5:8). QLoRA is technology's insaf — fine-tuning is now for everyone, not just big companies. Anyone with a consumer GPU can fine-tune. This is QLoRA's insaf — democratization."</div>

<div class="svg-diagram">
<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px">
  <defs>
    <linearGradient id="ft4bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
    <marker id="ft4arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L8,5 L0,10 Z" fill="#7dd3fc"/></marker>
  </defs>
  <rect width="800" height="420" fill="url(#ft4bg)" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#22d3ee">QLoRA — Quantized LoRA (PEFT)</text>
  <text x="400" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">৭B মডেল ৬ GB RAM-ে — fine-tuning গণতান্ত্রিক</text>
  <text x="100" y="82" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#fbbf24">Memory per precision</text>
  <rect x="30" y="92" width="140" height="34" rx="6" fill="#1e293b" stroke="#64748b"/>
  <text x="100" y="114" text-anchor="middle" font-family="monospace" font-size="11" fill="#94a3b8">fp32: ২৮ GB</text>
  <rect x="30" y="130" width="140" height="34" rx="6" fill="#1e293b" stroke="#7dd3fc"/>
  <text x="100" y="152" text-anchor="middle" font-family="monospace" font-size="11" fill="#7dd3fc">fp16: ১৪ GB</text>
  <rect x="30" y="168" width="140" height="34" rx="6" fill="#1e293b" stroke="#22d3ee"/>
  <text x="100" y="190" text-anchor="middle" font-family="monospace" font-size="11" fill="#22d3ee">int8: ৭ GB</text>
  <rect x="30" y="206" width="140" height="34" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="100" y="228" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#4ade80">nf4: ৩.৫ GB &#9889;</text>
  <line x1="180" y1="166" x2="260" y2="166" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft4arr)"/>
  <rect x="270" y="92" width="280" height="150" rx="10" fill="#1e293b" stroke="#22d3ee" stroke-width="2"/>
  <text x="410" y="116" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#22d3ee">QLoRA Pipeline</text>
  <text x="290" y="142" font-family="monospace" font-size="11" fill="#7dd3fc">Step 1: Base model &#8594; 4-bit (nf4)</text>
  <text x="290" y="160" font-family="monospace" font-size="11" fill="#7dd3fc">Step 2: Add LoRA in 16-bit</text>
  <text x="290" y="178" font-family="monospace" font-size="11" fill="#7dd3fc">Step 3: Forward &#8594; dequantize</text>
  <text x="290" y="196" font-family="monospace" font-size="11" fill="#7dd3fc">Step 4: Backward &#8594; LoRA only</text>
  <text x="290" y="218" font-family="monospace" font-size="11" fill="#fbbf24">Base stays frozen 4-bit</text>
  <rect x="570" y="92" width="200" height="150" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="670" y="116" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#4ade80">QLoRA Innovations</text>
  <text x="590" y="142" font-family="monospace" font-size="11" fill="#a7f3d0">&#8226; nf4: info-optimal</text>
  <text x="590" y="160" font-family="monospace" font-size="11" fill="#a7f3d0">&#8226; Double quantization</text>
  <text x="590" y="178" font-family="monospace" font-size="11" fill="#a7f3d0">&#8226; Paged optimizers</text>
  <text x="590" y="196" font-family="monospace" font-size="11" fill="#a7f3d0">&#8226; &#8776; ৯৩-৯৮% quality</text>
  <text x="590" y="218" font-family="monospace" font-size="11" fill="#fbbf24">Colab T4 = ৭B train!</text>
  <rect x="30" y="270" width="740" height="130" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="294" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#fbbf24">Comparison Table — ৭B Model</text>
  <text x="60" y="318" font-family="monospace" font-size="11" fill="#94a3b8">Method</text>
  <text x="200" y="318" font-family="monospace" font-size="11" fill="#94a3b8">GPU RAM</text>
  <text x="320" y="318" font-family="monospace" font-size="11" fill="#94a3b8">Disk</text>
  <text x="420" y="318" font-family="monospace" font-size="11" fill="#94a3b8">Quality</text>
  <text x="540" y="318" font-family="monospace" font-size="11" fill="#94a3b8">GPU Type</text>
  <line x1="40" y1="326" x2="740" y2="326" stroke="#334155"/>
  <text x="60" y="344" font-family="monospace" font-size="11" fill="#94a3b8">Full FT</text>
  <text x="200" y="344" font-family="monospace" font-size="11" fill="#f87171">~৭০ GB</text>
  <text x="320" y="344" font-family="monospace" font-size="11" fill="#94a3b8">১৪ GB</text>
  <text x="420" y="344" font-family="monospace" font-size="11" fill="#4ade80">১০০%</text>
  <text x="540" y="344" font-family="monospace" font-size="11" fill="#94a3b8">A100 &#215;৪</text>
  <text x="60" y="362" font-family="monospace" font-size="11" fill="#94a3b8">LoRA</text>
  <text x="200" y="362" font-family="monospace" font-size="11" fill="#fbbf24">~১০ GB</text>
  <text x="320" y="362" font-family="monospace" font-size="11" fill="#94a3b8">২০ MB</text>
  <text x="420" y="362" font-family="monospace" font-size="11" fill="#4ade80">৯৫-৯৯%</text>
  <text x="540" y="362" font-family="monospace" font-size="11" fill="#94a3b8">RTX ৪০৯০</text>
  <text x="60" y="380" font-family="monospace" font-size="12" font-weight="700" fill="#22d3ee">QLoRA</text>
  <text x="200" y="380" font-family="monospace" font-size="12" font-weight="700" fill="#4ade80">~৬ GB &#9889;</text>
  <text x="320" y="380" font-family="monospace" font-size="12" font-weight="700" fill="#4ade80">২০ MB</text>
  <text x="420" y="380" font-family="monospace" font-size="12" font-weight="700" fill="#4ade80">৯৩-৯৮%</text>
  <text x="540" y="380" font-family="monospace" font-size="12" font-weight="700" fill="#4ade80">RTX ৩০৯০ &#10003;</text>
  <text x="400" y="408" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">ইনসাফ — fine-tuning এখন সবার জন্য</text>
</svg>
</div>

`,
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

৪. GRPO (Group Relative Policy Optimization)
  "PPO-এর সরল উত্তরসূরি — reward model ছাড়াই"
  DeepSeek (2024-2025), DeepSeek-R1 এ ব্যবহৃত

  সমস্যা: PPO-তে আলাদা reward model + value model
    দরকার — 4টা model একসাথে (policy, ref, reward,
    value)। জটিল, মেমরিতে ভারী, unstable।

  GRPO-এর সমাধান: value model বাদ দাও।
    → একটাই prompt থেকে GROUP of N outputs বানাও
      (G outputs, সাধারণত G=4 থেকে 64)
    → এই group-এর ভেতরে relative comparison করো
    → কোনটা ভালো/খারাপ? group baseline থেকে decide
    → reward model থেকে score, group mean দিয়ে normalize

  PPO vs GRPO:
    PPO:  policy + ref + reward + value = 4 models
    GRPO: policy + ref + reward       = 3 models
    → 1টা model কম, ~25% কম GPU memory
    → simpler, more stable
    → reasoning models (o1, DeepSeek-R1) এই পদ্ধতিতে
      chain-of-thought reasoning শেখায়

  ✅ PPO-এর চেয়ে সহজ, কম resource
  ✅ reasoning model training-এ standard (2025)
  ✅ DeepSeek-R1, o1-style models এ ব্যবহৃত
  ❌ এখনো active research — best practices evolving
  ❌ বড় compute দরকার (N outputs per prompt)

  বিশেষ উল্লেখ: reasoning model distillation
    → DeepSeek-R1 এর reasoning traces অন্য model-এ
      distill করা যায় (SFT-এ)
    → ছোট model (Llama-3-8B) এ R1-এর reasoning
      behavior শেখানো যায়
    → open-source reasoning boom (2025)

RECOMMENDED PROGRESSION:
  Step 1: SFT (base behavior)
  → তোমার ডোমেইনে সাধারণ কাজ শেখাও

  Step 2: DPO (quality refinement)
  → SFT model-কে আরও নিখুঁত করো

  Step 3: PPO বা GRPO (production alignment) [optional]
  → বড় প্রোজেক্টে। 2025+: GRPO PPO-এর চেয়ে preferred

COMPARISON:
  ┌────────┬────────┬────────┬────────┬────────┐
  │        │ SFT    │ DPO    │ PPO    │ GRPO   │
  ├────────┼────────┼────────┼────────┼────────┤
  │ সহজতা  │ ★★★★★ │ ★★★★  │ ★★    │ ★★★   │
  │ ডেটা   │ input  │ chosen │ reward │ reward │
  │        │ output │ reject │ model  │ + group│
  │ খরচ   │ $      │ $$     │ $$$$   │ $$$    │
  │ স্থিতি │ stable │ stable │ tricky │ stable │
  │ ফল    │ ভালো   │ উন্নত  │ সেরা   │ সেরা   │
  └────────┴────────┴────────┴────────┴────────┘

<div class="dialogue">তরবিয়ত — systematic education, training method। কুরআনে আল্লাহ বলেন — "পবিত্র করো তাদের, শিক্ষা দাও তাদের কিতাব ও প্রজ্ঞা।" (৬২:২)। শিক্ষার পদ্ধতি আলাদা — কেউ নকল করে শেখে, কেউ তুলনায়, কেউ পুরস্কারে। Fine-tuning-এও তেমনি — কাজ অনুযায়ী পদ্ধতি বেছে নাও। সঠিক পদ্ধতি = সঠিক ফল।</div>
<div class="dialogue en">"Tarbiyat — systematic education, training method. Allah says — 'Purify them, teach them the Book and wisdom.' (62:2). Education methods differ — some learn by imitation, some by comparison, some by reward. In fine-tuning too — choose method per task. Right method = right result."</div>

<div class="svg-diagram">
<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px">
  <defs>
    <linearGradient id="ft5bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
    <marker id="ft5arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L8,5 L0,10 Z" fill="#7dd3fc"/></marker>
  </defs>
  <rect width="800" height="450" fill="url(#ft5bg)" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#22d3ee">RLHF Pipeline — Instruction Tuning &#8594; Alignment</text>
  <text x="400" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">তরবিয়ত — পদ্ধতিগত শিক্ষা</text>
  <rect x="30" y="75" width="160" height="110" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="110" y="98" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#4ade80">Base LLM</text>
  <text x="110" y="118" text-anchor="middle" font-family="monospace" font-size="10" fill="#a7f3d0">Pre-trained</text>
  <text x="110" y="136" text-anchor="middle" font-family="monospace" font-size="10" fill="#a7f3d0">General purpose</text>
  <text x="110" y="158" text-anchor="middle" font-family="monospace" font-size="10" fill="#fbbf24">Llama, GPT base</text>
  <text x="110" y="176" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8">(no alignment)</text>
  <line x1="190" y1="130" x2="240" y2="130" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft5arr)"/>
  <rect x="250" y="75" width="170" height="110" rx="10" fill="#1e293b" stroke="#22d3ee" stroke-width="2"/>
  <text x="335" y="98" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#22d3ee">Step 1: SFT</text>
  <text x="335" y="118" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">Instruction tuning</text>
  <text x="335" y="138" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">{Q &#8594; correct A}</text>
  <text x="335" y="158" text-anchor="middle" font-family="monospace" font-size="10" fill="#fbbf24">CrossEntropy loss</text>
  <text x="335" y="176" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8">৯০% use cases</text>
  <line x1="420" y1="130" x2="470" y2="130" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft5arr)"/>
  <rect x="480" y="75" width="170" height="110" rx="10" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="565" y="98" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#fbbf24">Step 2: DPO</text>
  <text x="565" y="118" text-anchor="middle" font-family="monospace" font-size="10" fill="#fcd34d">Preference learning</text>
  <text x="565" y="138" text-anchor="middle" font-family="monospace" font-size="10" fill="#fcd34d">{Q, chosen, rejected}</text>
  <text x="565" y="158" text-anchor="middle" font-family="monospace" font-size="10" fill="#fbbf24">Contrastive loss</text>
  <text x="565" y="176" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8">No reward model</text>
  <line x1="650" y1="130" x2="700" y2="130" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft5arr)"/>
  <rect x="710" y="75" width="60" height="110" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2.5"/>
  <text x="740" y="108" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#4ade80">Aligned</text>
  <text x="740" y="128" text-anchor="middle" font-family="monospace" font-size="16" fill="#4ade80">&#9889;</text>
  <text x="740" y="150" text-anchor="middle" font-family="monospace" font-size="9" fill="#a7f3d0">ChatGPT-</text>
  <text x="740" y="164" text-anchor="middle" font-family="monospace" font-size="9" fill="#a7f3d0">style</text>
  <text x="400" y="215" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#fbbf24">Alternative: Full RLHF (PPO/GRPO)</text>
  <rect x="100" y="230" width="150" height="70" rx="8" fill="#1e293b" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="175" y="252" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#22d3ee">SFT Model</text>
  <text x="175" y="272" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">from Step 1</text>
  <text x="175" y="290" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8">(policy)</text>
  <line x1="250" y1="265" x2="290" y2="265" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#ft5arr)"/>
  <rect x="300" y="230" width="150" height="70" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="375" y="252" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#fbbf24">Reward Model</text>
  <text x="375" y="272" text-anchor="middle" font-family="monospace" font-size="10" fill="#fcd34d">trained on rankings</text>
  <text x="375" y="290" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8">scores outputs</text>
  <line x1="450" y1="265" x2="490" y2="265" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#ft5arr)"/>
  <rect x="500" y="230" width="150" height="70" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="575" y="252" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#4ade80">PPO / GRPO</text>
  <text x="575" y="272" text-anchor="middle" font-family="monospace" font-size="10" fill="#a7f3d0">optimize policy</text>
  <text x="575" y="290" text-anchor="middle" font-family="monospace" font-size="10" fill="#94a3b8">maximize reward</text>
  <line x1="650" y1="265" x2="690" y2="265" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#ft5arr)"/>
  <rect x="700" y="230" width="70" height="70" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2.5"/>
  <text x="735" y="260" text-anchor="middle" font-family="monospace" font-size="14" fill="#4ade80">&#9889;</text>
  <text x="735" y="280" text-anchor="middle" font-family="monospace" font-size="9" fill="#a7f3d0">RLHF</text>
  <rect x="30" y="325" width="740" height="105" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="348" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#fbbf24">Comparison</text>
  <text x="50" y="370" font-family="monospace" font-size="11" fill="#4ade80">SFT: সহজ, $, stable &#8594; ভালো (৯০% ক্ষেত্রে যথেষ্ট)</text>
  <text x="50" y="388" font-family="monospace" font-size="11" fill="#fbbf24">DPO: মাঝারি, $$, stable &#8594; উন্নত (preference refinement)</text>
  <text x="50" y="406" font-family="monospace" font-size="11" fill="#22d3ee">PPO: জটিল, $$$$, tricky &#8594; সেরা (ChatGPT পদ্ধতি)</text>
  <text x="50" y="424" font-family="monospace" font-size="11" fill="#7dd3fc">GRPO: নতুন, $$$, stable &#8594; সেরা (DeepSeek-R1, reasoning 2025)</text>
</svg>
</div>

`,
  senior:{
    title:"Method Selection — তোমার প্রজেক্টে",
    body:`<p><strong>প্রথম fine-tuning?</strong> → SFT। সহজ, well-documented, ৯০% ক্ষেত্রে যথেষ্ট।</p><p><strong>SFT ভালো কিন্তু আরও ভালো চাও?</strong> → DPO। SFT model-কে preference data দিয়ে refine করো।</p><p><strong>Production alignment?</strong> → PPO বা RLHF। কিন্তু জটিল, সম্পদ চায়। একা ট্রাই করবে না।</p><p><strong>Reasoning model বানাতে চাও (2025)?</strong> → GRPO (DeepSeek-R1 এর পদ্ধতি)। PPO-এর চেয়ে সহজ, value model লাগে না।</p><p><strong>2024-2025 trend:</strong> DPO SFT-এর পরে স্ট্যান্ডার্ড। GRPO reasoning model-এ standard (DeepSeek-R1, o1-style)।</p>`
  }
});
