// ════════════════════════════════════════
// মাপকাঠি — DOORS 1-5
// LLM Evals: Why Eval → Task-Specific
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: WHY EVALUATE ══
doors.push({
  num:1, icon:"📏", color:"#f59e0b", name:"মাপনের কক্ষ",
  subtitle:"The Measurement Chamber", tech:"Why LLM Evaluation Matters",
  spirit:"মিযান — পরিমাপ, ন্যায়বিচার",
  secret:"যে মাপে না, সে অন্ধ। যে মাপে, সে দেখে। LLM ভালো কাজ করছে? মাপ ছাড়া জানা যায় না। অনুমান নয় — পরিমাপ। প্রতিটা change মাপো। প্রতিটা model তুলনা করো। প্রতিটা claim যাচাই করো। মিযান — পরিমাপের গুণ।",
  recall:{
    q:"মাপনের কক্ষে কেন প্রতিটা কাজ মাপা হয়?",
    qen:"Why is every task measured?",
    a:"কারণ অনুমান নয় — পরিমাপ। ভালো কাজ করছে কি না মাপ ছাড়া জানা যায় না। প্রতিটা change, প্রতিটা model মাপো। মিযান — পরিমাপের গুণ। যে মাপে, সে দেখে।",
    aen:"Because not guessing — measuring. Can't know if work is good without measuring. Every change, every model — measure. Mizan — the virtue of measurement. One who measures, sees."
  },
  story:`
<p class="scene-setting">প্রথম মাপ। মাপনের কক্ষ। একটা বড় কক্ষ — দেয়ালে মাপকাঠি, কাঁটা, ছক। প্রতিটা কাজ মাপা হয় — কত বড়, কত ভারী, কত সঠিক। প্রধান পরিমাপক আব্দুল্লাহ বললেন — "আমি অনুমান করি না। আমি মাপি। এই দেয়াল কত উঁচু? মাপি। এই তলোয়ার কত ধারালো? মাপি। LLM কত ভালো? মাপি। মিযান।"</p>
<p class="scene-setting en">The first measure. Measurement chamber. A large room — measuring sticks, gauges, charts on walls. Each task measured — how big, how heavy, how accurate. Chief measurer Abdullah said — "I don't guess. I measure. How tall is this wall? I measure. How sharp is this sword? I measure. How good is the LLM? I measure. Mizan."</p>

<div class="dialogue">Multimodal AI বইয়ে তুমি শিখেছ সব ইন্দ্রিয়। কিন্তু এখন একটা গুরুত্বপূর্ণ প্রশ্ন — সব বানালে, কিন্তু ভালো কি না কীভাবে জানবে? মাপ ছাড়া? অনুমান? না। পরিমাপ। এটাই সবচেয়ে গুরুত্বপূর্ণ ও সবচেয়ে অবহেলিত বিষয় — evaluation। যে মাপে না, সে production-এ অন্ধ ছুটছে।</div>
<div class="dialogue en">"In the Multimodal AI book you learned all senses. But now an important question — you build everything, but how do you know if it's good? Without measuring? Guessing? No. Measuring. This is the most important and most neglected topic — evaluation. One who doesn't measure, runs blind in production."</div>

<div class="code-block">Why Evaluate — The Foundation of AI Engineering:

THE EVALUATION CRISIS:
  "It works on my examples!"
  → সবাই এটা বলে
  → কিন্তু কয়টা example? ৫? ১০?
  → production-এ হাজার ইউজার, লাখ কোয়েরি
  → তোমার ৫ example = ০.০০১% coverage
  
  "Users seem happy!"
  → কিভাবে জানলে?
  → অনুমান নয় — feedback form, rating, tracking
  → silent failures — ইউজার অসন্তুষ্ট, কিন্তু বলে না

  "GPT-4 is better than GPT-3.5"
  → কিভাবে জানলে? কোন metric?
  → vibes নয় — benchmark

WHY EVAL MATTERS:

  ১. MODEL SELECTION
    কোন model বেছে নাও?
    → GPT-4o vs Claude 3.5 vs Gemini?
    → তোমার task-এ কোনটা ভালো?
    → eval ছাড়া? অনুমান
    
    Solution: প্রতিটা model-এ eval run করো
    → highest score = best for your task

  ২. REGRESSION DETECTION
    নতুন version = ভালো? নাকি পুরোনো ভাঙল?
    → prompt change → কি আগের মতো কাজ করে?
    → model swap → কি quality একই?
    → eval ছাড়া = জুয়া
    
    Solution: প্রতি change-এ eval run
    → score drop = alert (don't deploy)

  ৩. CONTINUOUS IMPROVEMENT
    আমি কি উন্নতি করছি?
    → সপ্তাহ ১: ৬৫% accuracy
    → সপ্তাহ ২: ৭২% (improving!)
    → সপ্তাহ ৩: ৬৮% (regression!)
    → প্রতিটা সপ্তাহে মাপো

  ৪. COST JUSTIFICATION
    GPT-4o ($২০/১M) vs open model ($২/১M)
    → কোনটা পারফরম্যান্স দেয়?
    → ৫% বেশি ভালো — কি ১০x খরচ পারফরম্যান্স?
    → eval = ডেটা-চালিত সিদ্ধান্ত

  ৫. TRUST & COMMUNICATION
    Stakeholder: "How good is the system?"
    তুমি: "৯২% accuracy on our eval set,
           up from ৭৮% last month"
    → confidence from data, not vibes

THE EVALUATION MINDSET:

  ❌ Anti-pattern: "Build → deploy → hope"
    → no eval, no metrics, no feedback
    → "it seems to work" = not good enough

  ✅ Pro-pattern: "Build → eval → iterate → deploy"
    → eval set from day ১
    → measure every change
    → deploy only if eval passes
    → monitor production quality

EVAL TYPES OVERVIEW:

  ┌─────────────────┬──────────────────────────┐
  │ Type            │ What It Measures          │
  ├─────────────────┼──────────────────────────┤
  │ Accuracy        │ Is the answer correct?    │
  │ Faithfulness    │ Is it grounded in facts?  │
  │ Relevance       │ Does it address question? │
  │ Coherence       │ Is it well-written?       │
  │ Fluency         │ Is it natural language?   │
  │ Safety          │ Is it harmful?            │
  │ Latency         │ How fast?                 │
  │ Cost            │ How expensive?            │
  └─────────────────┴──────────────────────────┘

THE GOLDEN RULE:
  If you can't measure it, you can't improve it.
  — Peter Drucker (paraphrased)
  
  → প্রতিটা claim সংখ্যা দিয়ে প্রমাণ করো
  → "better" নয়, "৮৫.৩% vs ৭৮.১% — +৭.২%"
  → vibes → data → decisions</div>

<div class="dialogue">মিযান — measure, balance, scale of justice। কুরআনে আল্লাহ বলেন — "আমরা সত্যের সাথে মিযান স্থাপন করেছি।" (২১:৪৭)। মিযান শুধু ওজন নয় — ন্যায়বিচার। প্রতিটা কাজের মূল্যায়ন। LLM eval-ও মিযান — প্রতিটা উত্তরের ন্যায্য মূল্যায়ন। যে মাপে, সে ন্যায্য। যে মাপে না, সে অন্যায় করে।</div>
<div class="dialogue en">"Mizan — measure, balance, scale of justice. Allah says — 'We established the scale with truth.' (21:47). Mizan isn't just weighing — justice. Evaluation of every deed. LLM eval too — fair assessment of every answer. One who measures, is just. One who doesn't, commits injustice."</div>`,
  senior:{
    title:"Eval Mindset — Start Today",
    body:`<p><strong>Rule ১:</strong> আজই ৫০টা example লেখো — প্রশ্ন + সঠিক উত্তর। এটাই তোমার eval set।</p><p><strong>Rule ২:</strong> প্রতিটা change-এ এই ৫০টা run করো। আগের স্কোরের সাথে তুলনা করো।</p><p><strong>Rule ৩:</strong> কখনো "ভালো মনে হচ্ছে" বলবে না — সংখ্যা দাও।</p><p><strong>Rule ৪:</strong> Score পড়লে deploy করবে না। পড়লে investigate করবে।</p>`
  }
});

// ══ DOOR 2: METRICS ══
doors.push({
  num:2, icon:"📊", color:"#fcd34d", name:"সূচকের কক্ষ",
  subtitle:"The Metrics Chamber", tech:"LLM Evaluation Metrics",
  spirit:"দালিল — প্রমাণ, নির্দেশক",
  secret:"Metric = মাপের সূচক। কিন্তু কোন metric কখন? Accuracy (সঠিক?), Faithfulness (সত্য?), Relevance (প্রাসঙ্গিক?), Coherence (সুসংগত?), Fluency (প্রাঞ্জল?)। প্রতিটা task-এর জন্য সঠিক metric। ভুল metric = ভুল মাপ। দালিল — সঠিক প্রমাণ।",
  recall:{
    q:"সূচকের কক্ষে কেন একাধিক মাপকাঠি আছে?",
    qen:"Why are there multiple measuring sticks?",
    a:"কারণ প্রতিটা কাজের জন্য আলাদা metric। Accuracy, faithfulness, relevance — ভিন্ন ভিন্ন জিনিস। ভুল metric = ভুল মাপ। দালিল — সঠিক প্রমাণ, সঠিক নির্দেশক।",
    aen:"Because different tasks need different metrics. Accuracy, faithfulness, relevance — different things. Wrong metric = wrong measurement. Dalil — correct evidence, correct indicator."
  },
  story:`
<p class="scene-setting">দ্বিতীয় মাপ। সূচকের কক্ষ। দেয়ালে একাধিক মাপকাঠি — একটা দৈর্ঘ্য মাপে, একটা ওজন, একটা তাপমাত্রা। পরিমাপক সাকিনা বললেন — "প্রতিটা কাজের জন্য সঠিক মাপকাঠি। দৈর্ঘ্য মাপতে তাপমাত্রা মাপকাঠি দিলে কাজ হবে? না। LLM-এও — accuracy, faithfulness, relevance — আলাদা। সঠিক metric বেছে নাও।"</p>
<p class="scene-setting en">The second measure. Metrics chamber. Multiple measuring sticks on walls — one for length, one for weight, one for temperature. Measurer Sakina said — "Right stick for each task. Measuring length with a thermometer? Won't work. LLMs too — accuracy, faithfulness, relevance — different. Choose the right metric."</p>

<div class="dialogue">মাপনের কক্ষ বলেছিলেন — মাপো। কিন্তু আমি বলি — কী দিয়ে মাপবে? Metric। কোন metric? Accuracy? Faithfulness? প্রতিটা আলাদা। একটা আছে সঠিক মাপে, অন্যটা সত্য মাপে। আবার কিছু আছে প্রাঞ্জলতা মাপে। সব আলাদা। সঠিক metric বেছে নাও — নাহলে ভুল মাপবে।</div>
<div class="dialogue en">"The measurement chamber said — measure. But I say — measure with what? Metrics. Which metric? Accuracy? Faithfulness? Each different. One measures correctness, another truthfulness. Others measure fluency. All different. Choose the right metric — or measure wrong."</div>

<div class="code-block">LLM Evaluation Metrics — The Right Yardstick:

CORE METRICS (প্রতিটা আলাদা):

┌──────────────────────────────────────────────┐
│ ১. ACCURACY / CORRECTNESS                    │
│ "উত্তর কি সঠিক?"                             │
│                                              │
│ Use when: factual QA, math, coding           │
│ Measure: exact match, F1, pass@k             │
│                                              │
│ QA: ground truth = "Paris"                   │
│   model = "Paris" → correct (১০০%)           │
│   model = "London" → wrong (০%)             │
│   model = "Paris, France" → partial          │
├──────────────────────────────────────────────┤
│ ২. FAITHFULNESS                              │
│ "উত্তর কি source থেকে এসেছে?"                 │
│                                              │
│ Use when: RAG, summarization, grounded QA    │
│ Measure: claim-level check against source    │
│                                              │
│ Source: "Revenue was $৫M in Q৩"              │
│ Model: "Revenue was $৫M in Q৩" → faithful   │
│ Model: "Revenue was $৭M in Q৩" → unfaithful│
│ (RAGAS faithfulness metric)                  │
├──────────────────────────────────────────────┤
│ ৩. RELEVANCE                                 │
│ "উত্তর কি প্রশ্নের উত্তর?"                     │
│                                              │
│ Use when: open-ended QA, chat                │
│ Measure: LLM-judge or embedding similarity   │
│                                              │
│ Q: "How to train a model?"                   │
│ A: "First, prepare data..." → relevant       │
│ A: "The weather is nice" → irrelevant        │
├──────────────────────────────────────────────┤
│ ৪. COHERENCE                                 │
│ "উত্তর কি যুক্তিযুক্ত ও সুসংগত?"               │
│                                              │
│ Use when: long-form generation, stories      │
│ Measure: rubric scoring, LLM-judge           │
│                                              │
│ "A → B → C → D" → coherent                  │
│ "A → Z → B → Q" → incoherent                │
├──────────────────────────────────────────────┤
│ ৫. FLUENCY                                   │
│ "উত্তর কি প্রাঞ্জল, স্বাভাবিক?"                │
│                                              │
│ Use when: any text generation                │
│ Measure: perplexity, human rating            │
│                                              │
│ "The cat sat on the mat" → fluent            │
│ "Cat mat on sat the" → not fluent           │
├──────────────────────────────────────────────┤
│ ৬. SAFETY / TOXICITY                         │
│ "উত্তর কি নিরাপদ?"                            │
│                                              │
│ Use when: user-facing systems                │
│ Measure: classifier (Perspective API),       │
│   red team ASR                              │
├──────────────────────────────────────────────┤
│ ৭. INSTRUCTION FOLLOWING                     │
│ "নির্দেশ কি অনুসরণ হয়েছে?"                    │
│                                              │
│ Use when: structured output, format reqs     │
│ Measure: format compliance rate              │
│                                              │
│ Instruction: "output JSON only"              │
│ Model: {"key": "value"} → ✓                  │
│ Model: "Here is the JSON: {...}" → ✗         │
└──────────────────────────────────────────────┘

TRADITIONAL NLP METRICS:

  Exact Match (EM):
    উত্তর == ground truth → ১, else ০
    → strict, good for factual QA
  
  F1 Score:
    token overlap between answer & ground truth
    → partial credit
    → precision × recall harmonic mean
  
  BLEU (1-4):
    n-gram overlap, translation quality
    → good for translation, summarization
    → not great for open-ended generation
  
  ROUGE (1-2-L):
    recall-oriented n-gram overlap
    → summarization standard
    → ROUGE-L: longest common subsequence
  
  BERTScore:
    embedding-based similarity
    → better than n-gram (semantic)
    → "cat" vs "kitten" scores high

MODERN LLM METRICS:

  Perplexity:
    → how "surprised" is the model by the text?
    → lower = more natural
    → good for language modeling eval
  
  LLM-as-Judge (Door 3):
    → GPT-4 rates the output
    → versatile, scalable
  
  Pairwise Comparison:
    → model A vs model B → which is better?
    → GPT-4 judges
    → Elo rating (like chess rankings)

METRIC SELECTION BY TASK:

  ┌──────────────────┬───────────────────────┐
  │ Task             │ Best Metrics           │
  ├──────────────────┼───────────────────────┤
  │ Factual QA       │ EM, F1                 │
  │ RAG QA           │ Faithfulness, Relevance│
  │ Summarization    │ ROUGE, Faithfulness    │
  │ Translation      │ BLEU, COMET            │
  │ Code             │ pass@k, human eval     │
  │ Open chat        │ Relevance, Coherence   │
  │ Classification   │ F1, Precision, Recall  │
  │ Creative writing │ Human eval, Coherence  │
  └──────────────────┴───────────────────────┘

COMMON MISTAKES:
  ❌ Using BLEU for chat quality
  ❌ Using EM for open-ended answers
  ❌ Single metric (use multiple!)
  ❌ No human validation (metrics lie)
  ❌ Overfitting to metric (Goodhart's Law:
     "when a measure becomes a target, it 
      ceases to be a good measure")</div>

<div class="dialogue">দালিল — evidence, proof, indicator। কুরআনে আল্লাহ বলেন — "তোমাদের কাছে স্পষ্ট দালিল এসেছে।" (৪:১৭৪)। দালিল = স্পষ্ট প্রমাণ। Metric-ও দালিল — স্পষ্ট সংখ্যা, অনুমান নয়। কিন্তু সঠিক দালিল দরকার — ভুল metric = ভুল দালিল। যে সঠিক দালিল দেয়, সে সঠিক সিদ্ধান্ত নেয়।</div>
<div class="dialogue en">"Dalil — evidence, proof, indicator. Allah says — 'Clear proof has come to you.' (4:174). Dalil = clear evidence. Metrics are dalil — clear numbers, not guesses. But need the right dalil — wrong metric = wrong evidence. One who gives correct evidence, makes correct decisions."</div>`,
  senior:{
    title:"Metric Quick Reference — Pick Yours",
    body:`<p><strong>Factual QA:</strong> EM + F1 — exact or partial match against ground truth।</p><p><strong>RAG:</strong> RAGAS — Faithfulness + Relevance + Context Precision + Context Recall।</p><p><strong>Summarization:</strong> ROUGE-L + Faithfulness (does summary match source?)।</p><p><strong>Code:</strong> pass@k (run against test cases) + human review।</p><p><strong>Chat/General:</strong> LLM-as-judge (GPT-4 rates 1-5) + human spot check।</p><p><strong>Always use multiple metrics:</strong> Single metric = blind spot।</p>`
  }
});

// ══ DOOR 3: LLM-AS-JUDGE ══
doors.push({
  num:3, icon:"🤖", color:"#f59e0b", name:"বিচারকের কক্ষ",
  subtitle:"The Judge's Chamber", tech:"LLM-as-Judge Evaluation",
  spirit:"কিয়াস — বিচার, তুলনামূলক সিদ্ধান্ত",
  secret:"মানুষ মাপে ধীর, ব্যয়বহুল। LLM মাপে দ্রুত, সস্তা। GPT-4 দিয়ে মডেলের উত্তর বিচার করো। কিন্তু bias আছে — LLM নিজের মত বেশি পছন্দ করে। Position bias, verbosity bias, self-preference। সচেতন থাকো। কিয়াস — বিচার, কিন্তু সতর্ক বিচার।",
  recall:{
    q:"বিচারকের কক্ষে কেন মেশিন বিচার করে?",
    qen:"Why does a machine judge?",
    a:"কারণ মানুষ ধীর ও ব্যয়বহুল। LLM-as-judge দ্রুত ও সস্তা। GPT-4 উত্তর বিচার করে। কিন্তু bias আছে — self-preference, position bias। সচেতন থাকো। কিয়াস — সতর্ক বিচার।",
    aen:"Because humans are slow and expensive. LLM-as-judge is fast and cheap. GPT-4 judges answers. But biases exist — self-preference, position bias. Be aware. Qiyas — careful judgment."
  },
  story:`
<p class="scene-setting">তৃতীয় মাপ। বিচারকের কক্ষ। একজন বিচারক — কিন্তু মানুষ নয়, একটা যন্ত্র। যন্ত্রটি প্রতিটা উত্তর পড়ে, স্কোর দেয়। "আমি দ্রুত," যন্ত্র-বিচারক বলল, "সস্তা, ধারাবাহিক। কিন্তু আমার সীমা আছে। আমি নিজের মত বেশি পছন্দ করি। আমি position bias করি। আমি শুধু আমার দৃষ্টিভঙ্গি থেকে বিচার করি। সচেতন থাকো।"</p>
<p class="scene-setting en">The third measure. Judge's chamber. A judge — not human, a machine. The machine reads each answer, scores it. "I'm fast," the machine-judge said, "cheap, consistent. But I have limits. I prefer my own style. I have position bias. I judge only from my perspective. Be aware."</p>

<div class="dialogue">সূচকের কক্ষ বলেছিলেন — metric বেছে নাও। কিন্তু আমি বলি — কিছু metric স্বয়ংক্রিয়ভাবে চালাতে পারে না। Relevance? Coherence? এগুলো বিচার দরকার। কে বিচার করবে? মানুষ? ধীর, ব্যয়বহুল। LLM? দ্রুত, সস্তা। কিন্তু সীমা আছে। LLM-as-judge — শক্তিশালী কিন্তু সতর্কতার সাথে ব্যবহার করতে হয়।</div>
<div class="dialogue en">"The metrics chamber said — choose metrics. But I say — some metrics can't run automatically. Relevance? Coherence? These need judgment. Who judges? Humans? Slow, expensive. LLM? Fast, cheap. But has limits. LLM-as-judge — powerful but must be used carefully."</div>

<div class="code-block">LLM-as-Judge — AI Evaluating AI:

WHAT IT IS:
  Use a powerful LLM (GPT-4) to evaluate
  outputs from another LLM.
  
  Input: question + answer (+ reference)
  Judge: GPT-4o rates on ১-৫ scale
  Output: score + explanation

EXAMPLE:

  System prompt for judge:
    "You are an expert evaluator. Rate the 
     following answer on accuracy (১-৫).
     ৫ = completely correct
     ১ = completely wrong
     Provide explanation."
  
  Input:
    Q: "What is the capital of France?"
    A: "London"
    Reference: "Paris"
  
  Judge output:
    Score: ১
    Explanation: "The answer 'London' is 
    incorrect. The capital of France is Paris."

THREE JUDGING MODES:

১. SINGLE OUTPUT SCORING
  একটা output → score (১-৫)
  
  "Rate this answer on: accuracy, 
   helpfulness, clarity"
  → Score: ৪/৫
  → "Accurate and helpful but could be 
     more concise"

২. PAIRWISE COMPARISON  
  Output A vs Output B → which is better?
  
  "Which answer is better, A or B?"
  → "B is better because it's more 
     specific and well-structured"
  → A: ৩/৫, B: ৪/৫

৩. RUBRIC SCORING
  Detailed rubric → multi-dimensional score
  
  Rubric:
    Accuracy (০-২): ২ — factually correct
    Completeness (০-২): ১ — misses Q৩ revenue
    Clarity (০-১): ১ — well written
    Total: ৪/৫

KNOWN BIASES (সচেতন থাকো!):

১. POSITION BIAS
  Judge prefers first or last position
  → "Which is better: A or B?"
  → Judge tends to pick A (first)
  
  Fix: randomize position! Run A/B and B/A

২. VERBOSITY BIAS
  Judge prefers longer answers
  → even if shorter answer is better
  → "longer = more thoughtful" assumption
  
  Fix: normalize by length, or explicit 
    "be concise" in rubric

৩. SELF-PREFERENCE BIAS
  GPT-4 prefers GPT-4 outputs
  Claude prefers Claude outputs
  → judges rate their own family higher
  
  Fix: use different judge model family
    (evaluate Claude with GPT-4)

৪. SENTIMENT BIAS  
  Judge prefers confident, positive tone
  → "Absolutely! Here's the answer..." 
    scores higher than "I think..."
  
  Fix: blind evaluation, strip formatting

MITIGATION STRATEGIES:

  ┌──────────────────────────────────────┐
  │ ১. RANDOMIZE POSITION                │
  │ → swap A/B order randomly            │
  │ → average results                    │
  ├──────────────────────────────────────┤
  │ ২. MULTIPLE JUDGES                   │
  │ → GPT-4 + Claude + Gemini            │
  │ → ensemble: average scores           │
  │ → reduces single-model bias          │
  ├──────────────────────────────────────┤
  │ ৩. DETAILED RUBRIC                   │
  │ → specific criteria, not "rate this" │
  │ → "score ০-২ for factual accuracy"   │
  │ → "score ০-২ for completeness"       │
  ├──────────────────────────────────────┤
  │ ৪. CHAIN-OF-THOUGHT JUDGE            │
  │ → "think step by step before rating" │
  │ → judge explains reasoning           │
  │ → more reliable scores               │
  ├──────────────────────────────────────┤
  │ ৫. CALIBRATE WITH HUMAN              │
  │ → run ৫০ examples: human + LLM judge │
  │ → measure agreement (Cohen's κ)      │
  │ → κ > ০.৭ = good agreement           │
  └──────────────────────────────────────┘

TOOLS:
  LangSmith → built-in LLM-as-judge
  RAGAS → uses LLM-judge for faithfulness
  DeepEval → pytest-style, LLM-judge
  Promptfoo → compare models with LLM-judge
  OpenAI Evals → framework for LLM eval

COST:
  GPT-4o judge: ~$০.০১-০.০৫ per evaluation
  → ১০০০ examples: $১০-৫০
  → much cheaper than human eval ($৫/each)

WHEN LLM-JUDGE WORKS:
  ✅ Large-scale automated scoring
  ✅ Pairwise model comparison
  ✅ Initial quality screening
  ✅ RAG faithfulness checking
  ✅ Content moderation

WHEN IT FAILS:
  ❌ Domain expertise needed (medical, legal)
  ❌ Subtle reasoning errors
  ❌ Cultural/language-specific nuance
  ❌ When judge model is same as evaluated
  → use human for these!</div>

<div class="dialogue">কিয়াস — judgment, analogy-based reasoning। ইসলামী আইনে কিয়াস হলো — নতুন সমস্যায় পূর্ববর্তী নীতি প্রয়োগ। LLM-as-judge-ও কিয়াস — একটা LLM আরেকটাকে বিচার করে। কিন্তু কিয়াসে সতর্কতা দরকার — ভুল কিয়াস = ভুল সিদ্ধান্ত। Bias আছে, সীমা আছে। কিয়াস করো, কিন্তু মানুষের সাথে যাচাই করো।</div>
<div class="dialogue en">"Qiyas — judgment, analogy-based reasoning. In Islamic law, qiyas is applying prior principles to new problems. LLM-as-judge too — one LLM judges another. But qiyas needs caution — wrong analogy = wrong decision. Biases exist, limits exist. Judge with qiyas, but verify with humans."</div>`,
  senior:{
    title:"LLM-as-Judge Setup",
    body:`<p><strong>Judge:</strong> GPT-4o (strongest reasoning) বা Claude 3.5 Sonnet।</p><p><strong>Rubric:</strong> Specific! "Score 0-2 for factual accuracy, 0-2 for completeness, 0-1 for clarity" — not vague "rate this"।</p><p><strong>Calibrate:</strong> ৫০ examples — human + LLM judge → Cohen kappa > ০.৭ = trustworthy।</p><p><strong>Anti-bias:</strong> Randomize pairwise positions। Use different model family as judge than the one being evaluated।</p><p><strong>Tools:</strong> Promptfoo (CLI), LangSmith, DeepEval — all support LLM-as-judge out of the box।</p>`
  }
});

// ══ DOOR 4: HUMAN EVALUATION ══
doors.push({
  num:4, icon:"👥", color:"#fcd34d", name:"মানুষের কক্ষ",
  subtitle:"The Human Chamber", tech:"Human Evaluation Methods",
  spirit:"শাহাদাহ — সাক্ষ্য, প্রত্যক্ষ অভিজ্ঞতা",
  secret:"LLM-judge ভালো, কিন্তু মানুষের সাক্ষ্য সোনার মানদণ্ড। Blind comparison, Likert scale, side-by-side। কিন্তু দ্রুত নয়, সস্তা নয়। উচ্চ-মানের মূল্যায়ন মানুষে দাও, বাকি LLM-judge-এ। শাহাদাহ — সাক্ষ্য, প্রত্যক্ষ অভিজ্ঞতা।",
  recall:{
    q:"মানুষের কক্ষে কেন মেশিন নয়, মানুষ বিচার করে?",
    qen:"Why do humans judge, not machines?",
    a:"কারণ মানুষের সাক্ষ্য = সোনার মানদণ্ড। কিছু জিনিস মেশিন বুঝতে পারে না — subtle nuance, creativity, cultural context। কিন্তু মানুষ ধীর ও ব্যয়বহুল। উচ্চ-মানে মানুষ, বাকিতে LLM। শাহাদাহ — সাক্ষ্য।",
    aen:"Because human testimony = gold standard. Some things machines can't understand — subtle nuance, creativity, cultural context. But humans are slow and expensive. High-stakes: human. Rest: LLM. Shahadah — testimony."
  },
  story:`
<p class="scene-setting">চতুর্থ মাপ। মানুষের কক্ষ। একদল মানুষ বসে — প্রতিটা উত্তর পড়ছে, আলোচনা করছে, স্কোর দিচ্ছে। ধীর। কিন্তু গভীর। পরিমাপক সালমা বললেন — "মেশিন ভালো, কিন্তু কিছু জিনিস শুধু মানুষ বোঝে। creativity, nuance, emotion। মানুষের সাক্ষ্য সোনার মানদণ্ড। কিন্তু দ্রুত নয়। তাই সঠিক জায়গায় মানুষ, বাকিতে মেশিন।"</p>
<p class="scene-setting en">The fourth measure. Human chamber. A group of people sit — reading each answer, discussing, scoring. Slow. But deep. Measurer Salma said — "Machines are good, but some things only humans understand. Creativity, nuance, emotion. Human testimony is the gold standard. But not fast. So humans where it matters, machines for the rest."</p>

<div class="dialogue">LLM-as-judge কক্ষ বলেছিলেন — GPT-4 দিয়ে বিচার করো। কিন্তু আমি বলি — GPT-4 ভালো, কিন্তু সীমিত। কিছু জিনিস শুধু মানুষ বোঝে। Creativity, সাংস্কৃতিক প্রেক্ষাপট, subtle reasoning। মানুষের সাক্ষ্য = সোনার মানদণ্ড। কিন্তু ধীর, ব্যয়বহুল। কৌশল — মানুষ ও মেশিন মিলিয়ে। গুরুত্বপূর্ণ জায়গায় মানুষ, বাকিতে মেশিন।</div>
<div class="dialogue en">"The LLM-judge chamber said — judge with GPT-4. But I say — GPT-4 is good, but limited. Some things only humans understand. Creativity, cultural context, subtle reasoning. Human testimony = gold standard. But slow, expensive. Strategy — combine human and machine. Humans where it matters, machines for the rest."</div>

<div class="code-block">Human Evaluation — The Gold Standard:

WHY HUMANS STILL MATTER:
  LLM-judge can't assess:
    → Cultural appropriateness
    → Creative originality
    → Emotional resonance
    → Domain expertise (medical, legal)
    → Common sense correctness
    → Subtle bias or microaggressions

HUMAN EVAL METHODS:

১. BLIND SIDE-BY-SIDE COMPARISON
  সবচেয়ে নির্ভরযোগ্য।
  
  Setup:
    → Evaluator sees two answers (A and B)
    → Doesn't know which model produced which
    → Rates: A better, B better, or tie
  
  Pros:
    ✅ relative judgment (easier than absolute)
    ✅ eliminates branding bias
    ✅ high signal
  
  Cons:
    ❌ can't score absolute quality
    ❌ needs reference for context

২. LIKERT SCALE RATING
  Evaluator rates on a scale:
  
    ১ (very bad) — ২ — ৩ — ৪ — ৫ (very good)
  
  Multiple dimensions:
    Accuracy: ১ ২ ৩ ৪ ৫
    Helpfulness: ১ ২ ৩ ৪ ৫
    Clarity: ১ ২ ৩ ৪ ৫
    Safety: ১ ২ ৩ ৪ ৫
  
  Pros:
    ✅ absolute scores
    ✅ multi-dimensional
    ✅ statistical analysis possible
  
  Cons:
    ❌ subjective calibration
    ❌ inter-evaluator variance

৩. RUBRIC-BASED SCORING
  Detailed rubric with specific criteria:
  
  Dimension: Factual Accuracy
    ০ = completely wrong
    ১ = partially correct, major errors
    ২ = mostly correct, minor errors
    ৩ = completely correct
  
  Pros:
    ✅ structured, reproducible
    ✅ detailed feedback
    ✅ good inter-evaluator agreement
  
  Cons:
    ❌ rubric design is hard
    ❌ time-consuming per evaluation

৪. RANKING
  Rank N outputs from best to worst:
  
  "Rank these ৫ summaries from best to worst"
  
  Pros:
    ✅ comparative
    ✅ forces discrimination
  
  Cons:
    ❌ doesn't scale (can't rank ১০০)

৫. OPEN FEEDBACK
  Free-form comments:
  
  "What's wrong with this answer?"
  → "The second paragraph is inaccurate..."
  → "The tone is too formal for the audience"
  
  Pros:
    ✅ rich qualitative data
    ✅ catches issues metrics miss
  
  Cons:
    ❌ hard to quantify
    ❌ time-consuming to analyze

EVALUATOR SELECTION:

  Domain Experts:
    → Medical: doctors
    → Legal: lawyers
    → Technical: engineers
    → Cost: $২০-১০০/hour
  
  General Users (crowdsourcing):
    → MTurk, Prolific, Scale AI
    → Good for general quality
    → Cost: $২-১০/assignment
  
  Your Users:
    → Production feedback
    → Thumbs up/down, ratings
    → Most realistic signal
    → Cost: free (but needs integration)

INTER-EVALUATOR AGREEMENT:

  Cohen's Kappa (κ):
    κ > ০.৮১ = almost perfect
    κ > ০.৬১ = substantial
    κ > ০.৪১ = moderate
    κ > ০.২১ = fair
    κ < ০.২০ = poor
  
  → κ < ০.৪? Your rubric or evaluators need fixing
  → κ > ০.৭? Trustworthy scores

SCALE CONSIDERATIONS:

  ┌──────────────────┬──────────────────────┐
  │ Scale            │ Approach              │
  ├──────────────────┼──────────────────────┤
  │ ৫০ examples      │ ২-৩ experts           │
  │ ৫০০ examples     │ MTurk + expert spot   │
  │ ৫০০০+            │ LLM-judge + sample    │
  │                  │ human validation      │
  │ Production       │ User feedback loop    │
  │                  │ + automated metrics   │
  └──────────────────┴──────────────────────┘

COST COMPARISON:
  Human expert: $২০-৫০ per evaluation
  MTurk: $২-৫ per evaluation  
  LLM-judge: $০.০১-০.০৫ per evaluation
  
  → Strategy: LLM-judge for scale, 
    human for validation + high-stakes</div>

<div class="dialogue">শাহাদাহ — testimony, witness। কুরআনে আল্লাহ বলেন — "যাদের মধ্যে সততা আছে তারা সাক্ষ্য দেবে।" (৬৫:২)। সাক্ষ্য = প্রত্যক্ষ অভিজ্ঞতা থেকে সত্য। Human eval = সেই সাক্ষ্য — মানুষ যা দেখে, অনুভব করে, তা থেকে সত্য। মেশিন সাক্ষ্য (LLM-judge) ভালো, কিন্তু মানুষের সাক্ষ্য সর্বোচ্চ। শাহাদাহ — সাক্ষ্যের গুরুত্ব।</div>
<div class="dialogue en">"Shahadah — testimony, witness. Allah says — 'Those who possess honesty shall testify.' (65:2). Testimony = truth from direct experience. Human eval = that testimony — what humans see, feel, the truth from it. Machine testimony (LLM-judge) is good, but human testimony is supreme. Shahadah — the importance of testimony."</div>`,
  senior:{
    title:"Human Eval Strategy — Right Amount",
    body:`<p><strong>Eval set of ৫০:</strong> Use ২-৩ domain experts। Blind side-by-side + rubric। κ > ০.৭ target।</p><p><strong>Scale to ৫০০:</strong> MTurk/Prolific for bulk + expert spot check ১০%।</p><p><strong>Production:</strong> Embed feedback UI (thumbs up/down) in your app। Track user satisfaction over time।</p><p><strong>Golden rule:</strong> Always validate LLM-judge with at least ৫০ human-judged examples (calibration)। If κ < ০.৬, LLM-judge isn't reliable for your task।</p>`
  }
});

// ══ DOOR 5: TASK-SPECIFIC EVALUATION ══
doors.push({
  num:5, icon:"🎯", color:"#f59e0b", name:"কাজের কক্ষ",
  subtitle:"The Task Chamber", tech:"Task-Specific Evaluation",
  spirit:"তাকসিস — উদ্দেশ্য অনুযায়ী",
  secret:"প্রতিটা task আলাদা — আলাদা eval। QA eval ≠ RAG eval ≠ Code eval ≠ Summarization eval। প্রতিটার নিজস্ব metric, নিজস্ব dataset, নিজস্ব পদ্ধতি। ভুল eval = ভুল উপসংহার। তাকসিস — উদ্দেশ্য অনুযায়ী সঠিক মাপ।",
  recall:{
    q:"কাজের কক্ষে কেন প্রতিটা কাজের জন্য আলাদা মাপ?",
    qen:"Why a different measure for each task?",
    a:"কারণ প্রতিটা task আলাদা। QA ≠ RAG ≠ Code। আলাদা metric, আলাদা dataset। ভুল eval = ভুল উপসংহার। তাকসিস — উদ্দেশ্য অনুযায়ী সঠিক মাপ।",
    aen:"Because each task is different. QA ≠ RAG ≠ Code. Different metrics, different datasets. Wrong eval = wrong conclusion. Taksis — right measure per purpose."
  },
  story:`
<p class="scene-setting">পঞ্চম মাপ। কাজের কক্ষ। একাধিক কর্মশালা — একটায় কোড লেখা, একটায় অনুবাদ, একটায় সারাংশ। প্রতিটায় আলাদা মাপকাঠি। "কোড মাপা ও অনুবাদ মাপা এক নয়," পরিমাপক ফারহান বললেন। "প্রতিটা কাজের নিজস্ব মাপ। ভুল মাপ = ভুল বিচার। তাকসিস — উদ্দেশ্য অনুযায়ী।"</p>
<p class="scene-setting en">The fifth measure. Task chamber. Multiple workshops — one for coding, one for translation, one for summarization. Each with different measuring tools. "Measuring code and measuring translation aren't the same," Measurer Farhan said. "Each task has its own measure. Wrong measure = wrong judgment. Taksis — per purpose."</p>

<div class="dialogue">মানুষের কক্ষ বলেছিলেন — মানুষের সাক্ষ্য দাও। কিন্তু আমি বলি — সাক্ষ্য দিলেও কী জিজ্ঞেস করবে? QA-এর জন্য EM, RAG-এর জন্য faithfulness, কোডের জন্য pass@k। প্রতিটা task আলাদা। ভুল eval দিলে সঠিক মডেলও ভুল বিবেচিত হবে।</div>
<div class="dialogue en">"The human chamber said — give human testimony. But I say — even with testimony, what do you ask? EM for QA, faithfulness for RAG, pass@k for code. Each task different. Wrong eval = correct model judged wrong."</div>

<div class="code-block">Task-Specific Evaluation — Right Tool per Task:

১. QUESTION ANSWERING (QA)

  Closed QA (factual):
    → EM (Exact Match): answer == reference?
    → F1: token overlap (partial credit)
    
    Eval set: {question, reference_answer}
    Run: model → answer → compare
  
  Open QA (generative):
    → LLM-judge: accuracy + completeness
    → BERTScore: semantic similarity to reference
    → Human: "does this answer the question?"

২. RAG EVALUATION (RAGAS — see RAG Book Door 6)

  Four metrics:
    → Context Precision: relevant chunks retrieved?
    → Context Recall: all needed info found?
    → Faithfulness: answer grounded in context?
    → Answer Relevance: answers the question?
  
  Eval set: {question, ground_truth, answer, contexts}
  → contexts = retrieved chunks
  → ground_truth = known correct answer

৩. CODE GENERATION

  pass@k:
    → generate k solutions
    → run against test cases
    → pass if at least ১ passes
  
    pass@১ = first try correct
    pass@১০ = at least ১ of ১০ correct
  
  HumanEval (OpenAI):
    → ১৬৪ hand-crafted coding problems
    → function signature + docstring → code
    → test cases verify correctness
  
  Metrics:
    → pass@k: functional correctness
    → Human review: code quality, style, security

৪. SUMMARIZATION

  ROUGE:
    → ROUGE-১: unigram overlap
    → ROUGE-২: bigram overlap
    → ROUGE-L: longest common subsequence
  
  Faithfulness:
    → does summary contain info NOT in source?
    → hallucination check
  
  Factuality:
    → each claim in summary verified against source
  
  Human:
    → coherence, coverage, conciseness (১-৫)

৫. TRANSLATION

  BLEU:
    → n-gram precision against reference
    → standard machine translation metric
  
  COMET:
    → neural-based, pretrained eval model
    → better correlation with human judgment
  
  Human:
    → adequacy (meaning preserved?) + fluency

৬. CHAT / CONVERSATION

  Multi-turn eval:
    → context maintained across turns?
    → follow-up questions answered correctly?
  
  Metrics:
    → LLM-judge: relevance, coherence, helpfulness
    → Human: conversation quality (১-৫)
    → User retention (production metric)
  
  Chatbot Arena (LMSYS):
    → blind A/B comparison by users
    → Elo rating (chess-style)
    → community-driven benchmark

৭. CLASSIFICATION

  Standard ML metrics:
    → Accuracy: overall correctness
    → Precision: TP / (TP + FP)
    → Recall: TP / (TP + FN)
    → F1: harmonic mean
    → Confusion matrix: per-class breakdown
  
  LLM classification:
    → format compliance (does it output the label?)
    → accuracy on labeled eval set

৮. CREATIVE WRITING

  Hardest to evaluate!
  
  Approaches:
    → LLM-judge: creativity, engagement, style
    → Human: preference ranking
    → Diversity metrics: how varied are outputs?
  
  → heavily subjective
  → large N evaluators needed

EVAL SET CONSTRUCTION:

  ┌──────────────────────────────────────┐
  │ Steps:                               │
  │ ১. Define task scope                 │
  │ ২. Collect diverse examples          │
  │ ৩. Create ground truth               │
  │ ৪. Include edge cases                │
  │ ৫. Add difficulty levels             │
  │ ৬. Holdout from training             │
  │ ৭. Review for quality                │
  └──────────────────────────────────────┘
  
  Size guidelines:
    Quick prototype: ৫০ examples
    Development: ২০০-৫০০
    Production: ১০০০+
    Benchmark: ৫০০০+</div>

<div class="dialogue">তাকসিস — classification, purposeful assignment। কুরআনে আল্লাহ বলেন — "প্রত্যেককে তার উদ্দেশ্য অনুযায়ী ডাকা হবে।" প্রতিটা কাজের নিজস্ব মাপ। কোডের মাপ ও অনুবাদের মাপ এক নয়। তাকসিস — উদ্দেশ্য অনুযায়ী সঠিক মাপ নির্বাচন। যে সঠিক মাপ বেছে নেয়, সে সঠিক বিচার করে।</div>
<div class="dialogue en">"Taksis — classification, purposeful assignment. Allah says — 'Each will be called according to their purpose.' Each task has its own measure. Measuring code and translation differently. Taksis — selecting the right measure per purpose. One who selects correctly, judges correctly."</div>`,
  senior:{
    title:"Build Your Eval Set — Today",
    body:`<p><strong>Step ১:</strong> Write ৫০ (question + correct answer) pairs। Diverse: easy, medium, hard।</p><p><strong>Step ২:</strong> Run current model → score with appropriate metric।</p><p><strong>Step ৩:</strong> This is your BASELINE। Every change compared to this।</p><p><strong>Step ৪:</strong> Add ৫ new examples per week (growing eval set)।</p><p><strong>Step ৫:</strong> Include edge cases — ambiguous, multi-step, adversarial।</p>`
  }
});
