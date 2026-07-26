// ════════════════════════════════════════
// কায়িক সাধনা — DOORS 6-10
// Fine-tuning: Eval → Production
// ════════════════════════════════════════

// ══ DOOR 6: EVALUATION ══
doors.push({
  num:6, icon:"📈", color:"#f0c75e", name:"মূল্যায়ন কক্ষ",
  subtitle:"The Evaluation Chamber", tech:"Fine-tuning Evaluation",
  spirit:"মুহাসাবা — যাচাই ও মূল্যায়ন",
  secret:"Fine-tune করলেই শেষ নয় — মাপতে হয়। Base বনাম fine-tuned। Task-specific metrics, human eval, LLM-as-judge, regression check। মাপ ছাড়া তুমি জানো না ভালো হয়েছে কি না। হয়তো খারাপ হয়েছে!",
  recall:{
    q:"মূল্যায়ন কক্ষে কেন প্রতিটা তলোয়ার পরীক্ষা করা হয়?",
    qen:"Why is each sword tested in the evaluation chamber?",
    a:"কারণ পরীক্ষা ছাড়া গুণমান জানা যায় না। Fine-tuned মডেলও তেমনি — পরীক্ষা ছাড়া তুমি জানো না ভালো হয়েছে কি না। হয়তো base থেকে খারাপ! Evaluation ছাড়া fine-tuning = অন্ধ নির্মাণ।",
    aen:"Because without testing, quality is unknown. Fine-tuned models too — without testing you don't know if it improved. Maybe worse than base! Evaluation is essential."
  },
  story:`
<p class="scene-setting">ষষ্ঠ ক্ষেত্র। মূল্যায়ন কক্ষ। প্রতিটা তলোয়ার পরীক্ষা — কট, নমন, টেকসইতা। মূল্যায়ক ড. হাসান বললেন — "fine-tune করলেই ভালো হবে কেন? পরীক্ষা করো। হয়তো ধার ভালো হয়েছে, কিন্তু নমন কমেছে। Trade-off। প্রতিটা মাপ গুরুত্বপূর্ণ।"</p>
<p class="scene-setting en">The sixth chamber. Evaluation room. Each sword tested — cutting, flexibility, durability. Evaluator Dr. Hasan said — "Why would fine-tuning always improve? Test. Maybe edge is better, but flexibility reduced. Trade-off. Each measure matters."</p>

<div class="dialogue">প্রশিক্ষণ পদ্ধতি বলেছিলেন — SFT, DPO, PPO। কিন্তু আমি বলি — train করার পরে মাপতে হয়। Fine-tuning ভালো হয়েছে কি না — কীভাবে জানবে? অনুমান নয়, পরিমাপ। Base বনাম fine-tuned — প্রতিটা মাপে তুলনা। হয়তো এক জায়গায় ভালো, আরেক জায়গায় খারাপ।</div>
<div class="dialogue en">"The training method said — SFT, DPO, PPO. But I say — after training, must measure. Has fine-tuning improved — how to know? Not guessing, measuring. Base vs fine-tuned — compare on each metric. Maybe better in one area, worse in another."</div>

<div class="code-block">Fine-tuning Evaluation — Measure Everything:

FOUR EVALUATION TYPES:

১. TASK-SPECIFIC METRICS
  তোমার নির্দিষ্ট কাজে কতটা ভালো?
  
  Classification: F1, precision, recall
  Generation: BLEU, ROUGE, BERTScore  
  Code: pass@k, functional correctness
  QA: exact match, F1
  Summarization: ROUGE, human rating
  
  Before: base model score
  After: fine-tuned score
  → Delta = improvement (hopefully positive!)

২. GENERAL CAPABILITY REGRESSION
  Fine-tuning এক জায়গায় ভালো, কিন্তু 
  অন্য জায়গায় খারাপ?
  
  → "Catastrophic forgetting" — base knowledge হারায়
  → MMLU, HellaSwag, GSM8K benchmarks
  → Compare base vs fine-tuned on general tasks
  → Regression > ৫% = সমস্যা!

৩. LLM-AS-JUDGE
  একটা বড় LLM (GPT-4) দিয়ে তুমার 
  fine-tuned model-এর output বিচার করো।
  
  Prompt: "Rate this response (1-5) on:
   - Accuracy
   - Helpfulness  
   - Clarity
   Response: [your model output]
   Reference: [ground truth]"
  
  → cheap, fast, scalable
  → biased (GPT-4 may prefer GPT-4 style)

৪. HUMAN EVALUATION
  সবচেয়ে নির্ভরযোগ্য, সবচেয়ে ব্যয়বহুল।
  
  Side-by-side: base vs fine-tuned
  → blind (evaluator doesn't know which)
  → rate on: accuracy, helpfulness, style
  → ৫০-১০০ examples, ২-৩ evaluators

EVALUATION PIPELINE:

  ┌──────────────────────────────────────┐
  │ ১. Create eval set (holdout ১০%)      │
  │    → ১০০-৫০০ examples                 │
  │    → diverse, representative          │
  ├──────────────────────────────────────┤
  │ ২. Run base model on eval set         │
  │    → baseline scores                  │
  ├──────────────────────────────────────┤
  │ ৩. Run fine-tuned on same eval set    │
  │    → new scores                       │
  ├──────────────────────────────────────┤
  │ ৪. Compare:                           │
  │    → task metric: improved?           │
  │    → general: regressed?              │
  │    → LLM-judge: preferred?            │
  │    → human: preferred?                │
  ├──────────────────────────────────────┤
  │ ５. Decision:                          │
  │    → task up + general stable = DEPLOY│
  │    → task up + general down = tune    │
  │    → task down = bad data/method      │
  └──────────────────────────────────────┘

COMMON PITFALLS:

  ❌ Testing on training data:
    → meaningless! model memorized
    → always holdout eval set
  
  ❌ Only task metric:
    → "accuracy ৯৫%!" but general 
      knowledge destroyed
  
  ❌ One eval run:
    → variance! run ৩-৫ times
    → average + stddev
  
  ❌ No baseline:
    → "৯০%!" — but base was ৮৮%?
    → improvement of ২% worth $X?

TOOLS:
  LM Evaluation Harness → standard benchmarks
  LangSmith → LangChain eval
  Weights & Biases → training metrics + eval
  Promptfoo → test suites for LLMs</div>

<div class="dialogue">মুহাসাবা — self-examination, evaluation। উমর (রা) বলেছেন — "নিজেকে বিচার করো আগে, তোমাকে বিচার করা হবে।" Fine-tuning-এও মুহাসাবা — মডেলকে বিচার করো deployment-এর আগে। Task metric ভালো? General capability stable? Human satisfied? বিচার ছাড়া deployment = আত্মবিশ্বাসের অন্ধ লাফ।</div>
<div class="dialogue en">"Muhasabah — self-examination, evaluation. Umar (RA) said — 'Judge yourselves before you are judged.' In fine-tuning, muhasabah too — judge the model before deployment. Task metric good? General capability stable? Human satisfied? Without judgment, deployment = a blind leap of confidence."</div>

<div class="svg-diagram">
<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px">
  <defs>
    <linearGradient id="ft6bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
    <marker id="ft6arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L8,5 L0,10 Z" fill="#7dd3fc"/></marker>
  </defs>
  <rect width="800" height="420" fill="url(#ft6bg)" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#22d3ee">Fine-tuning Evaluation Framework</text>
  <text x="400" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">মুহাসাবা — মাপ ছাড়া fine-tuning = অন্ধ নির্মাণ</text>
  <text x="120" y="82" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#fbbf24">Four Evaluation Types</text>
  <rect x="30" y="92" width="180" height="80" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="120" y="114" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#4ade80">&#9312; Task Metrics</text>
  <text x="120" y="134" text-anchor="middle" font-family="monospace" font-size="10" fill="#a7f3d0">F1, BLEU, ROUGE</text>
  <text x="120" y="150" text-anchor="middle" font-family="monospace" font-size="10" fill="#a7f3d0">pass@k, exact match</text>
  <text x="120" y="166" text-anchor="middle" font-family="monospace" font-size="10" fill="#fbbf24">base vs fine-tuned</text>
  <rect x="30" y="180" width="180" height="80" rx="8" fill="#1e293b" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="120" y="202" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#22d3ee">&#9313; Regression Check</text>
  <text x="120" y="222" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">MMLU, HellaSwag</text>
  <text x="120" y="238" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">GSM8K, general tasks</text>
  <text x="120" y="254" text-anchor="middle" font-family="monospace" font-size="10" fill="#fbbf24">drop &gt; ৫% = সমস্যা!</text>
  <rect x="30" y="268" width="180" height="80" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="120" y="290" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#fbbf24">&#9314; LLM-as-Judge</text>
  <text x="120" y="310" text-anchor="middle" font-family="monospace" font-size="10" fill="#fcd34d">GPT-4 rates output</text>
  <text x="120" y="326" text-anchor="middle" font-family="monospace" font-size="10" fill="#fcd34d">accuracy, helpfulness</text>
  <text x="120" y="342" text-anchor="middle" font-family="monospace" font-size="10" fill="#fbbf24">cheap, fast, scalable</text>
  <rect x="30" y="356" width="180" height="50" rx="8" fill="#1e293b" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="120" y="378" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#7dd3fc">&#9315; Human Eval</text>
  <text x="120" y="396" text-anchor="middle" font-family="monospace" font-size="10" fill="#bae6fd">blind side-by-side</text>
  <line x1="210" y1="210" x2="280" y2="210" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft6arr)"/>
  <rect x="290" y="92" width="480" height="220" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="530" y="116" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#fbbf24">Evaluation Pipeline</text>
  <rect x="310" y="130" width="440" height="28" rx="6" fill="#0f172a" stroke="#4ade80"/>
  <text x="530" y="148" text-anchor="middle" font-family="monospace" font-size="11" fill="#a7f3d0">১. Create eval set (holdout ১০%, ১০০-৫০০ examples)</text>
  <rect x="310" y="164" width="440" height="28" rx="6" fill="#0f172a" stroke="#22d3ee"/>
  <text x="530" y="182" text-anchor="middle" font-family="monospace" font-size="11" fill="#7dd3fc">২. Run base model &#8594; baseline scores</text>
  <rect x="310" y="198" width="440" height="28" rx="6" fill="#0f172a" stroke="#22d3ee"/>
  <text x="530" y="216" text-anchor="middle" font-family="monospace" font-size="11" fill="#7dd3fc">৩. Run fine-tuned &#8594; new scores</text>
  <rect x="310" y="232" width="440" height="28" rx="6" fill="#0f172a" stroke="#fbbf24"/>
  <text x="530" y="250" text-anchor="middle" font-family="monospace" font-size="11" fill="#fcd34d">৪. Compare: task &#8593;? general stable? judge prefers?</text>
  <rect x="310" y="266" width="440" height="36" rx="6" fill="#0f172a" stroke="#4ade80" stroke-width="2"/>
  <text x="530" y="289" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#4ade80">৫. Decision: task &#8593; + general stable = DEPLOY</text>
  <rect x="290" y="330" width="480" height="76" rx="10" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="530" y="352" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#f87171">Common Pitfalls &#9888;</text>
  <text x="310" y="372" font-family="monospace" font-size="10" fill="#fca5a5">&#10007; Testing on training data (meaningless!)</text>
  <text x="310" y="388" font-family="monospace" font-size="10" fill="#fca5a5">&#10007; Only task metric (general destroyed?)</text>
  <text x="550" y="372" font-family="monospace" font-size="10" fill="#fca5a5">&#10007; One eval run (variance!)</text>
  <text x="550" y="388" font-family="monospace" font-size="10" fill="#fca5a5">&#10007; No baseline (৯০%? base was ৮৮%)</text>
</svg>
</div>

`,
  senior:{
    title:"Eval Setup — Minimum Viable",
    body:`<p><strong>Minimum:</strong> ১০০ examples holdout eval set + task-specific metric + base comparison।</p><p><strong>Standard:</strong> + LLM-as-judge (GPT-4 rates ৫০ examples) + general benchmark (MMLU subset)।</p><p><strong>Production:</strong> + human eval (blind side-by-side, ২ evaluators) + regression test suite + A/B test in production।</p><p><strong>Decision threshold:</strong> task metric +৫%+ AND general regression <৩% = deploy।</p>`
  }
});

// ══ DOOR 7: CATASTROPHIC FORGETTING ══
doors.push({
  num:7, icon:"💔", color:"#f06292", name:"স্মৃতিহানির কক্ষ",
  subtitle:"The Amnesia Chamber", tech:"Catastrophic Forgetting",
  spirit:"হিফয — স্মৃতি সংরক্ষণ",
  secret:"Fine-tuning করলে মডেল নতুন শেখে — কিন্তু পুরোনো ভুলে যায়। এটাই catastrophic forgetting। General knowledge → domain-specific হয়, কিন্তু general ক্ষমতা হ্রাস। প্রতিকার: regular, replay, small learning rate, LoRA (freezes base)।",
  recall:{
    q:"স্মৃতিহানি কক্ষে কেন পুরোনো দক্ষতা হারায় নতুন শেখার সময়?",
    qen:"Why is old skill lost when learning new in the amnesia chamber?",
    a:"কারণ মস্তিষ্কের capacity সীমিত। নতুন শেখলে পুরোনো সংযোগ দুর্বল হয়। Fine-tuning-এও তেমনি — নতুন ডোমেইন শেখার সময় base knowledge হারায়। প্রতিকার: replay, small lr, LoRA। হিফয — স্মৃতি সংরক্ষণ।",
    aen:"Because brain capacity is limited. Learning new weakens old connections. Fine-tuning too — learning new domain loses base knowledge. Fix: replay, small lr, LoRA. Hifz — memory preservation."
  },
  story:`
<p class="scene-setting">সপ্তম ক্ষেত্র। স্মৃতিহানি কক্ষ। একটা অদ্ভুত দৃশ্য — কারিগর একটা নতুন কৌশল শিখছেন, কিন্তু সাথে সাথে একটা পুরোনো কৌশল ভুলে যাচ্ছেন। "এটাই সমস্যা," কারিগর ইয়াসমিন বললেন। "নতুন শেখা ভালো, কিন্তু পুরোনো হারালে সমস্যা। Fine-tuning-এ এটাই ঘটে।"</p>
<p class="scene-setting en">The seventh chamber. Amnesia room. A strange scene — a craftsman learns a new technique, but simultaneously forgets an old one. "This is the problem," craftswoman Yasmin said. "Learning new is good, but losing old is trouble. This happens in fine-tuning."</p>

<div class="dialogue">মূল্যায়ন কক্ষ বলেছিলেন — মাপতে হয়। কিন্তু আমি বলি — মাপলে যদি দেখো পুরোনো ক্ষমতা হারিয়েছে? Catastrophic forgetting। Fine-tuning-এর সবচেয়ে বড় ঝুঁকি। মডেল তোমার ডোমেইনে ভালো, কিন্তু সাধারণ প্রশ্নে খারাপ। এটা ঠেকাতে হয়।</div>
<div class="dialogue en">"The evaluation chamber said — must measure. But I say — what if measuring shows old capability lost? Catastrophic forgetting. Fine-tuning's biggest risk. The model is good in your domain, but bad at general questions. Must prevent this."</div>

<div class="code-block">Catastrophic Forgetting — The Dark Side:

WHAT IT IS:
  Base model: general capability (GPT-4 level)
  Fine-tune on medical data
  → Medical: ৯০% (great!)
  → General: ৬০% (was ৮৫% — ড্রপ!)
  → Math: ৫০% (was ৮০% — বড় ড্রপ!)
  → Code: ৬৫% (was ৮৫% — ড্রপ!)
  
  → The model "forgot" general knowledge!

WHY IT HAPPENS:
  Neural network weights = shared resource
  → same weights handle medical AND math AND code
  → fine-tune shifts weights for domain
  → general capabilities "overwritten"
  
  বিশেষ করে:
    • Full fine-tuning → সব weights shift
    • High learning rate → aggressive shift
    • Many epochs → overfit to domain

PREVENTION — ৫ STRATEGIES:

১. LoRA (Best Prevention!)
  → Base weights FROZEN
  → Only adapter weights change
  → Base knowledge preserved in frozen weights
  → Forgetting ৯০%+ reduced
  
  → এটাই LoRA-র সবচেয়ে বড় সুবিধা!

২. LOW LEARNING RATE
  → lr = ১e-৫ থেকে ৫e-৫ (খুব ছোট)
  → weights সামান্য shift → কম forgetting
  → Full FT-এ বিশেষ গুরুত্বপূর্ণ

৩. REPLAY (Experience Replay)
  Training-এ পুরোনো data মেশাও:
  
  batch: ৭৫% domain data + ২৫% general data
  → প্রতিটা step-এ মডেল domain + general দেখে
  → both reinforced
  
  General data: Alpaca, Dolly, বা OpenOrca
  → ছোট amount যথেষ্ট (২৫%)

৪. FEWER EPOCHS
  → ১-৩ epochs সাধারণত যথেষ্ট
  → বেশি epochs = বেশি forgetting
  → Early stopping: validation loss 
    বাড়তে শুরু করলে থামো

৫. REGULARIZATION
  → KL divergence: fine-tuned output ≈ base output
  → L2 penalty: weights base-এর কাছে থাকুক
  → "Elastic Weight Consolidation" (EWC)
  → গুরুত্বপূর্ণ weights কম shift হয়

MEASURING FORGETTING:
  
  Eval Set:
    ৫০% domain-specific questions
    ৫০% general questions (MMLU subset)
  
  Track:
    Domain score: should go UP
    General score: should stay FLAT
  
  If general drops > ৫%:
    → LoRA ব্যবহার করো (if full FT)
    → lr কমাও
    → replay যোগ করো
    → epochs কমাও</div>

<div class="dialogue">হিফয — preservation, memorization। কুরআনে আল্লাহ বলেন — "নিশ্চয় আমরা কুরআন নাজিল করেছি এবং নিশ্চয় আমরাই এর সংরক্ষক।" (১৫:৯)। কুরআন সংরক্ষিত — কোনো পরিবর্তন নেই। Fine-tuning-এও হিফয দরকার — পুরোনো জ্ঞান সংরক্ষণ। LoRA হলো সেই হিফযের টুল — base স্থির, adapter যোগ। পুরোনো ও নতুন একসাথে।</div>
<div class="dialogue en">"Hifz — preservation, memorization. Allah says — 'We sent down the Quran and We are its preserver.' (15:9). The Quran is preserved — no change. Fine-tuning needs hifz too — preserving old knowledge. LoRA is the tool of hifz — base frozen, adapter added. Old and new together."</div>

<div class="svg-diagram">
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px">
  <defs>
    <linearGradient id="ft7bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
    <marker id="ft7arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L8,5 L0,10 Z" fill="#f87171"/></marker>
  </defs>
  <rect width="800" height="400" fill="url(#ft7bg)" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#22d3ee">Catastrophic Forgetting</text>
  <text x="400" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">নতুন শেখার সময় পুরোনো জ্ঞান হারায় — হিফয দরকার</text>
  <rect x="30" y="70" width="350" height="150" rx="10" fill="#1e293b" stroke="#f87171" stroke-width="2"/>
  <text x="205" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#f87171">The Problem</text>
  <text x="205" y="112" text-anchor="middle" font-family="monospace" font-size="11" fill="#fca5a5">Fine-tune on medical data:</text>
  <rect x="50" y="122" width="310" height="24" rx="4" fill="#0f172a"/>
  <text x="60" y="138" font-family="monospace" font-size="10" fill="#4ade80">Medical: ৯০% &#8593; (was ৬০%)</text>
  <rect x="50" y="148" width="310" height="24" rx="4" fill="#0f172a"/>
  <text x="60" y="164" font-family="monospace" font-size="10" fill="#f87171">General: ৬০% &#8595; (was ৮৫%)</text>
  <rect x="50" y="174" width="310" height="24" rx="4" fill="#0f172a"/>
  <text x="60" y="190" font-family="monospace" font-size="10" fill="#f87171">Math: ৫০% &#8595; (was ৮০%)</text>
  <rect x="50" y="200" width="310" height="16" rx="4" fill="#0f172a"/>
  <text x="60" y="212" font-family="monospace" font-size="10" fill="#f87171">Code: ৬৫% &#8595; (was ৮৫%)</text>
  <line x1="380" y1="145" x2="440" y2="145" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft7arr)" transform="rotate(180 410 145)"/>
  <rect x="440" y="70" width="330" height="150" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="605" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#4ade80">Prevention Strategies</text>
  <text x="460" y="114" font-family="monospace" font-size="11" fill="#a7f3d0">&#9312; LoRA (best!) &#8594; base frozen</text>
  <text x="460" y="132" font-family="monospace" font-size="11" fill="#a7f3d0">&#9313; Low LR (1e-5 to 5e-5)</text>
  <text x="460" y="150" font-family="monospace" font-size="11" fill="#a7f3d0">&#9314; Replay (২৫% general data)</text>
  <text x="460" y="168" font-family="monospace" font-size="11" fill="#a7f3d0">&#9315; Few epochs (১-৩, early stop)</text>
  <text x="460" y="186" font-family="monospace" font-size="11" fill="#a7f3d0">&#9316; Regularization (KL, L2, EWC)</text>
  <text x="460" y="208" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#fbbf24">LoRA &#8594; ৯০%+ forgetting prevented</text>
  <rect x="30" y="240" width="740" height="145" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="262" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#fbbf24">Measuring &amp; Decision</text>
  <line x1="40" y1="270" x2="720" y2="270" stroke="#334155"/>
  <text x="50" y="288" font-family="monospace" font-size="11" fill="#94a3b8">Eval Set:</text>
  <text x="50" y="306" font-family="monospace" font-size="11" fill="#7dd3fc">&#8226; ৫০% domain questions</text>
  <text x="50" y="324" font-family="monospace" font-size="11" fill="#7dd3fc">&#8226; ৫০% general (MMLU subset)</text>
  <line x1="380" y1="278" x2="380" y2="370" stroke="#334155"/>
  <text x="400" y="288" font-family="monospace" font-size="11" fill="#94a3b8">If general drops &gt; ৫%:</text>
  <text x="400" y="306" font-family="monospace" font-size="11" fill="#fbbf24">&#8594; Use LoRA (if full FT)</text>
  <text x="400" y="324" font-family="monospace" font-size="11" fill="#fbbf24">&#8594; Lower learning rate</text>
  <text x="400" y="342" font-family="monospace" font-size="11" fill="#fbbf24">&#8594; Add replay data</text>
  <text x="400" y="360" font-family="monospace" font-size="11" fill="#fbbf24">&#8594; Reduce epochs</text>
</svg>
</div>

`,
  senior:{
    title:"Anti-Forgetting Checklist",
    body:`<p>☐ LoRA instead of full FT (৯০% forgetting prevented)</p><p>☐ Learning rate: 1e-5 to 5e-5 (not higher)</p><p>☐ Epochs: 1-3 max with early stopping</p><p>☐ Replay: 25% general data mixed in</p><p>☐ Eval: 50% domain + 50% general questions</p><p>☐ General regression threshold: <3% drop</p>`
  }
});

// ══ DOOR 8: DEPLOYMENT ══
doors.push({
  num:8, icon:"🚀", color:"#52c41a", name:"মোক্ষম কক্ষ",
  subtitle:"The Deployment Chamber", tech:"Fine-tuned Model Deployment",
  spirit:"ইখরাজ — প্রকাশ, মুক্তি",
  secret:"Fine-tune করা মডেল তো বানালে। এখন? Deploy করতে হয়। LoRA merge, quantization, serving (vLLM/TGI), API wrapping, monitoring। Production deployment = training-এর চেয়ে ভিন্ন চ্যালেঞ্জ। মডেল ভালো, কিন্তু serving খারাপ = ব্যবহারকারী হতাশ।",
  recall:{
    q:"মোক্ষম কক্ষে কেন তলোয়ার বানানোর পরেও কাজ আছে?",
    qen:"Why is there more work after the sword is made?",
    a:"কারণ বানানো = অর্ধেক। ব্যবহার করা = বাকি অর্ধেক। Deploy করতে হয় — merge, quantize, serve, monitor। Fine-tuned মডেলও তেমনি — train করার পর deploy করা আলাদা শিল্প।",
    aen:"Because making = half. Using = the other half. Must deploy — merge, quantize, serve, monitor. Fine-tuned models too — deploying after training is a different art."
  },
  story:`
<p class="scene-setting">অষ্টম ক্ষেত্র। মোক্ষম কক্ষ। বানানো তলোয়ার বাক্সে ভরছেন, মোড়ক দিচ্ছেন, লেবেল লাগাচ্ছেন। মোক্ষম কারিগর ফয়সাল বললেন — "বানানো শেষ। কিন্তু গ্রাহকের কাছে পৌঁছানো বাকি। প্যাকেজিং, পরিবহন, ব্যবহারের নির্দেশিকা। এটাও কারিগরের কাজ।"</p>
<p class="scene-setting en">The eighth chamber. Deployment room. Finished swords being boxed, wrapped, labeled. Deployment craftsman Faisal said — "Making is done. But reaching the customer remains. Packaging, transport, usage instructions. This too is the craftsman's job."</p>

<div class="dialogue">স্মৃতিহানি কক্ষ বলেছিলেন — forgetting এড়াও। কিন্তু আমি বলি — forgetting ঠেকালেও deploy করতে হয়। Fine-tuned মডেল ডিস্কে পড়ে থাকলে কেউ ব্যবহার করবে না। Deploy করো — API, serving, monitoring। Production = training-এর চেয়ে ভিন্ন চ্যালেঞ্জ।</div>
<div class="dialogue en">"The amnesia chamber said — avoid forgetting. But I say — even after preventing forgetting, must deploy. A fine-tuned model sitting on disk serves no one. Deploy — API, serving, monitoring. Production = a different challenge than training."</div>

<div class="code-block">Deployment — From Disk to Production:

STEP 1: MERGE LoRA (if applicable)
  LoRA adapter + base model → merged model
  
  from peft import PeftModel
  
  base = AutoModelForCausalLM.from_pretrained("base")
  model = PeftModel.from_pretrained(base, "./lora-adapter")
  merged = model.merge_and_unload()
  merged.save_pretrained("./merged-model")
  
  → now a standalone model, no adapter needed

STEP 2: QUANTIZATION (optional, for speed/memory)
  Merged model (16-bit) → 8-bit বা 4-bit
  
  Methods:
    AWQ (Activation-aware Weight Quantization)
    GPTQ (Generative Post-training Quantization)  
    GGUF (llama.cpp format, CPU/Mac)
  
  ৭B model: 14GB → 4GB (4-bit)
  → runs on CPU, Mac, small GPU

STEP 3: SERVING (Inference Engine)
  How to serve the model efficiently?
  
  ┌─────────────────┬──────────────────────────┐
  │ Engine          │ Best For                 │
  ├─────────────────┼────────────────────────┤
  │ vLLM            │ Production, high QPS     │
  │                 │ PagedAttention, fast     │
  │                 │ Top choice 2024          │
  ├─────────────────┼────────────────────────┤
  │ TGI (HuggingFace)│ Production, easy setup   │
  │                 │ Docker, HF ecosystem     │
  ├─────────────────┼────────────────────────┤
  │ Ollama          │ Local, Mac, single user  │
  │                 │ GGUF format              │
  ├─────────────────┼────────────────────────┤
  │ llama.cpp       │ CPU, Mac, minimal        │
  │                 │ GGUF, very lightweight   │
  ├─────────────────┼────────────────────────┤
  │ TGI Cloud       │ NoOps (HF Inference API) │
  │                 │ Pay per use              │
  └─────────────────┴────────────────────────┘

  vLLM Example:
    vllm serve ./merged-model \\
      --port 8000 \\
      --tensor-parallel-size 1 \\
      --max-model-len 8192
    
    → OpenAI-compatible API!

STEP 4: API WRAPPING
  vLLM/TGI → OpenAI-compatible endpoint
  
  POST /v1/chat/completions
  {
    "model": "my-finetuned-model",
    "messages": [...],
    "temperature": 0.3
  }
  
  → existing OpenAI client libraries work!
  → drop-in replacement

STEP 5: MONITORING
  Production metrics:
    • Latency (p50, p95, p99)
    • Throughput (tokens/sec)
    • Error rate
    • GPU utilization
    • User feedback (thumbs up/down)
    • Eval regression (daily eval set)

  Tools:
    Grafana + Prometheus → metrics
    LangSmith/Langfuse → LLM tracing
    Weights & Biases → model monitoring

STEP 6: ROLLBACK STRATEGY
  Fine-tuned model খারাপ কাজ করছে?
  
  → Version tagged: v1.0 (base), v1.1 (fine-tuned)
  → Instant rollback: switch API to v1.0
  → Blue-green deployment: two versions, switch
  
  → Always keep base as fallback!</div>

<div class="dialogue">ইখরাজ — release, deployment, putting forth। কুরআনে আল্লাহ বলেন — "যিনি সৃষ্টি করেছেন এবং নিয়মে বেঁধেছেন।" (৮৭:২)। সৃষ্টি শেষ নয় — deployment দরকার। নিয়মে বাঁধা = serving, API, monitoring। Fine-tuned মডেল বানানো = সৃষ্টি। Deploy করা = নিয়মে বাঁধা। দুটোই দরকার।</div>
<div class="dialogue en">"Ikhraj — release, deployment, putting forth. Allah says — 'Who created and proportioned.' (87:2). Creation isn't the end — deployment is needed. Proportioning = serving, API, monitoring. Building the fine-tuned model = creation. Deploying = proportioning. Both are needed."</div>

<div class="svg-diagram">
<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px">
  <defs>
    <linearGradient id="ft8bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
    <marker id="ft8arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L8,5 L0,10 Z" fill="#7dd3fc"/></marker>
  </defs>
  <rect width="800" height="420" fill="url(#ft8bg)" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#22d3ee">Deployment Pipeline — From Disk to Production</text>
  <text x="400" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">ইখরাজ — সৃষ্টি শেষ নয়, deployment দরকার</text>
  <rect x="20" y="72" width="140" height="90" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="90" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#4ade80">Merge LoRA</text>
  <text x="90" y="114" text-anchor="middle" font-family="monospace" font-size="9" fill="#a7f3d0">adapter + base</text>
  <text x="90" y="128" text-anchor="middle" font-family="monospace" font-size="9" fill="#a7f3d0">&#8594; merged model</text>
  <text x="90" y="146" text-anchor="middle" font-family="monospace" font-size="9" fill="#fbbf24">standalone</text>
  <line x1="160" y1="117" x2="200" y2="117" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft8arr)"/>
  <rect x="210" y="72" width="140" height="90" rx="8" fill="#1e293b" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="280" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#22d3ee">Quantize</text>
  <text x="280" y="114" text-anchor="middle" font-family="monospace" font-size="9" fill="#7dd3fc">16-bit &#8594; 4-bit</text>
  <text x="280" y="128" text-anchor="middle" font-family="monospace" font-size="9" fill="#7dd3fc">AWQ, GPTQ, GGUF</text>
  <text x="280" y="146" text-anchor="middle" font-family="monospace" font-size="9" fill="#fbbf24">14GB &#8594; 4GB</text>
  <line x1="350" y1="117" x2="390" y2="117" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft8arr)"/>
  <rect x="400" y="72" width="140" height="90" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="470" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#fbbf24">Serve</text>
  <text x="470" y="114" text-anchor="middle" font-family="monospace" font-size="9" fill="#fcd34d">vLLM (prod)</text>
  <text x="470" y="128" text-anchor="middle" font-family="monospace" font-size="9" fill="#fcd34d">TGI, Ollama</text>
  <text x="470" y="146" text-anchor="middle" font-family="monospace" font-size="9" fill="#fbbf24">OpenAI API</text>
  <line x1="540" y1="117" x2="580" y2="117" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft8arr)"/>
  <rect x="590" y="72" width="190" height="90" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="685" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#4ade80">Monitor &#38; Rollback</text>
  <text x="610" y="114" font-family="monospace" font-size="9" fill="#a7f3d0">&#8226; Latency p50/p95/p99</text>
  <text x="610" y="128" font-family="monospace" font-size="9" fill="#a7f3d0">&#8226; Throughput, errors</text>
  <text x="610" y="142" font-family="monospace" font-size="9" fill="#a7f3d0">&#8226; Version + rollback</text>
  <text x="610" y="156" font-family="monospace" font-size="9" fill="#fbbf24">Blue-green deploy</text>
  <text x="200" y="195" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#fbbf24">Serving Engine Comparison</text>
  <rect x="20" y="205" width="760" height="195" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="40" y="228" font-family="monospace" font-size="11" fill="#94a3b8">Engine</text>
  <text x="200" y="228" font-family="monospace" font-size="11" fill="#94a3b8">Best For</text>
  <text x="450" y="228" font-family="monospace" font-size="11" fill="#94a3b8">Key Feature</text>
  <text x="650" y="228" font-family="monospace" font-size="11" fill="#94a3b8">Scale</text>
  <line x1="30" y1="236" x2="770" y2="236" stroke="#334155"/>
  <text x="40" y="256" font-family="monospace" font-size="11" font-weight="700" fill="#4ade80">vLLM</text>
  <text x="200" y="256" font-family="monospace" font-size="11" fill="#cbd5e1">Production, high QPS</text>
  <text x="450" y="256" font-family="monospace" font-size="11" fill="#a7f3d0">PagedAttention, fast</text>
  <text x="650" y="256" font-family="monospace" font-size="11" fill="#fbbf24">Top choice 2024</text>
  <text x="40" y="278" font-family="monospace" font-size="11" fill="#22d3ee">TGI</text>
  <text x="200" y="278" font-family="monospace" font-size="11" fill="#cbd5e1">Production, easy setup</text>
  <text x="450" y="278" font-family="monospace" font-size="11" fill="#7dd3fc">Docker, HF ecosystem</text>
  <text x="650" y="278" font-family="monospace" font-size="11" fill="#94a3b8">Enterprise</text>
  <text x="40" y="300" font-family="monospace" font-size="11" fill="#7dd3fc">Ollama</text>
  <text x="200" y="300" font-family="monospace" font-size="11" fill="#cbd5e1">Local, Mac, single user</text>
  <text x="450" y="300" font-family="monospace" font-size="11" fill="#bae6fd">GGUF, very simple</text>
  <text x="650" y="300" font-family="monospace" font-size="11" fill="#94a3b8">Dev/local</text>
  <text x="40" y="322" font-family="monospace" font-size="11" fill="#94a3b8">llama.cpp</text>
  <text x="200" y="322" font-family="monospace" font-size="11" fill="#cbd5e1">CPU, Mac, minimal</text>
  <text x="450" y="322" font-family="monospace" font-size="11" fill="#cbd5e1">GGUF, lightweight</text>
  <text x="650" y="322" font-family="monospace" font-size="11" fill="#94a3b8">Edge/offline</text>
  <text x="40" y="344" font-family="monospace" font-size="11" fill="#fbbf24">HF Cloud</text>
  <text x="200" y="344" font-family="monospace" font-size="11" fill="#cbd5e1">NoOps managed</text>
  <text x="450" y="344" font-family="monospace" font-size="11" fill="#fcd34d">Pay per use</text>
  <text x="650" y="344" font-family="monospace" font-size="11" fill="#94a3b8">Quick start</text>
  <rect x="30" y="360" width="740" height="32" rx="6" fill="#0f172a" stroke="#4ade80"/>
  <text x="400" y="380" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#4ade80">vLLM: OpenAI-compatible API &#8594; POST /v1/chat/completions &#8594; drop-in replacement!</text>
</svg>
</div>

`,
  senior:{
    title:"Deployment Stack — Recommendation",
    body:`<p><strong>Local/Dev:</strong> Ollama — simplest. GGUF format, Mac/CPU।</p><p><strong>Production (single GPU):</strong> vLLM — fastest, OpenAI-compatible API, PagedAttention।</p><p><strong>Production (managed):</strong> Together AI, Anyscale, বা HF Inference Endpoints — no GPU management।</p><p><strong>Always:</strong> version tag + rollback strategy + health check endpoint + latency monitoring।</p>`
  }
});

// ══ DOOR 9: COST-BENEFIT ANALYSIS ══
doors.push({
  num:9, icon:"💰", color:"#ffc857", name:"মূল্যায়নের কক্ষ",
  subtitle:"The Valuation Chamber", tech:"Cost-Benefit of Fine-tuning",
  spirit:"মিযান — মূল্য ও উপযোগিতার ভারসাম্য",
  secret:"Fine-tuning সস্তা নয়। GPU, ডেটা, সময়, evaluation — সব খরচ। কিন্তু উপকারিতা? Latency কমে, cost কমে, quality বাড়ে। সঠিক হিসাব ছাড়া fine-tuning = অন্ধ বিনিয়োগ। মিযান করো — খরচ বনাম উপকার।",
  recall:{
    q:"মূল্যায়নের কক্ষে কেন প্রতিটা কাজের খরচ ও উপকার মাপা হয়?",
    qen:"Why is cost vs benefit measured for each task?",
    a:"কারণ বিনিয়োগ যুক্তিযুক্ত হতে হয়। Fine-tuning-ও একটা বিনিয়োগ — GPU, ডেটা, সময়। উপকার: latency কমে, quality বাড়ে। সঠিক হিসাব = সঠিক সিদ্ধান্ত। মিযান।",
    aen:"Because investment must be rational. Fine-tuning is an investment — GPU, data, time. Benefit: latency drops, quality rises. Right calculation = right decision. Mizan."
  },
  story:`
<p class="scene-setting">নবম ক্ষেত্র। মূল্যায়নের কক্ষ। ব্যবসায়ী আব্দুল্লাহ একটা বড় খাতা খুলে আছেন — উপরে খরচ, নিচে উপকার। "প্রতিটা fine-tuning একটা বিনিয়োগ," তিনি বললেন। "GPU ভাড়া, ডেটা তৈরি, সময়। কিন্তু উপকার কত? Latency কমলে ইউজার খুশি। Cost কমলে মুনাফা বাড়ে। হিসাব করো।"</p>
<p class="scene-setting en">The ninth chamber. Valuation room. Businessman Abdullah has a large ledger open — costs on top, benefits below. "Each fine-tuning is an investment," he said. "GPU rental, data preparation, time. But benefit how much? Lower latency = happy users. Lower cost = more profit. Calculate."</p>

<div class="dialogue">Deployment কক্ষ বলেছিলেন — deploy করো। কিন্তু আমি বলি — deploy করার আগে একটা প্রশ্ন। এটা কি টাকা দেবে? Fine-tuning সস্তা নয়। কিন্তু সঠিক হলে — বিনিয়োগের ১০x ফল। ভুল হলে — সব নষ্ট। হিসাব করো আগে।</div>
<div class="dialogue en">"The deployment chamber said — deploy. But I say — before deploying, a question. Will this pay off? Fine-tuning isn't cheap. But done right — 10x return on investment. Done wrong — all wasted. Calculate first."</div>

<div class="code-block">Cost-Benefit Analysis — Is Fine-tuning Worth It?

COSTS (একাধিক স্তরে):

  ┌────────────────────────────────────────────┐
  │ ONE-TIME COSTS                             │
  │                                            │
  │ Dataset Creation:                          │
  │   Human-authored: ৫০০ × $২০ = $১০,০০০     │
  │   Distillation: ৫০০০ × $০.০৫ = $২৫০       │
  │   Review/cleaning: ~$২,০০০                 │
  │                                            │
  │ Training Compute:                          │
  │   QLoRA ৭B, Colab Pro: $১০ (hours)        │
  │   LoRA ৭B, A100 ১x ৩h: $১০               │
  │   Full FT ৭B, A100 ৪x ১২h: $৮০০           │
  │   Full FT ৭০B, A100 ৮x ২৪h: $৫,০০০+       │
  │                                            │
  │ Evaluation:                                │
  │   LLM-as-judge: ~$৫০                       │
  │   Human eval: ৫০ × $৫ = $২৫০              │
  │                                            │
  │ Engineering time:                          │
  │   ১-২ weeks × $১০০/hr = $৪,০০০-৮,০০০     │
  ├────────────────────────────────────────────┤
  │ TOTAL ONE-TIME: $৬,০০০-২০,০০০ (QLoRA)     │
  │                $১০,০০০-৩০,০০০ (Full FT)    │
  └────────────────────────────────────────────┘

  ┌────────────────────────────────────────────┐
  │ RECURRING COSTS (monthly)                   │
  │                                            │
  │ Self-hosted inference:                     │
  │   A10G GPU ২৪/৭: ~$৩০০-৫০০/month          │
  │   A100 GPU ২৪/৭: ~$১,০০০-২,০০০/month      │
  │                                            │
  │ API-hosted (Together/Anyscale):            │
  │   Per-token: $০.০০০৫-০.০০২               │
  │   ১M queries/month × ২K tokens = $১-৪K    │
  └────────────────────────────────────────────┘

BENEFITS (যদি সঠিক হয়):

  ┌────────────────────────────────────────────┐
  │ COST SAVINGS                               │
  │                                            │
  │ Scenario: using GPT-4 for ১M queries/month│
  │   GPT-4o cost: $০.০৫/query × ১M = $৫০K/mo│
  │                                            │
  │ Fine-tuned ৭B (self-hosted):               │
  │   GPU: $৫০০/month                         │
  │   Savings: $৪৯,৫০০/month!                  │
  │   Payback: first month!                    │
  │                                            │
  │ এটা যদি কাজ করে — massive ROI             │
  ├────────────────────────────────────────────┤
  │ LATENCY IMPROVEMENT                        │
  │                                            │
  │ GPT-4o: ~৮০০ms response                   │
  │ Local ৭B: ~২০০ms response                 │
  │ → ৪x faster → better UX                    │
  │ → real-time apps possible                  │
  ├────────────────────────────────────────────┤
  │ PRIVACY/CONTROL                            │
  │                                            │
  │ সংবেদনশীল data (আইনি, চিকিৎসা):         │
  │   → cannot send to external API            │
  │   → must self-host                         │
  │   → fine-tuned local model = only option   │
  ├────────────────────────────────────────────┤
  │ QUALITY                                    │
  │                                            │
  │ Domain-specific accuracy:                  │
  │   GPT-4 general: ৭৫% on your domain       │
  │   Fine-tuned ৭B: ৮৫%+ on your domain      │
  │   → better than GPT-4 in your niche!       │
  └────────────────────────────────────────────┘

DECISION MATRIX:

  ব্যবহার ১M+ queries/month?
  ├── YES → Fine-tuning ROI massive ✅
  │        (self-hosted savings >> training cost)
  └── NO → কম queries → API (GPT-4/Claude) সস্তা
  
  সংবেদনশীল data?
  ├── YES → Must self-host → fine-tune ✅
  └── NO → API acceptable
  
  Latency critical (< ৫০০ms)?
  ├── YES → Local model → fine-tune ✅
  └── NO → API latency (~১s) acceptable
  
  Domain-specific behavior?
  ├── YES + prompting fails → Fine-tune ✅
  └── General is fine → API</div>

<div class="dialogue">মিযান — balance, scale, cost-benefit। কুরআনে আল্লাহ বলেন — "আমরা সত্যের সাথে মিযান স্থাপন করেছি।" (২১:৪৭)। প্রতিটা সিদ্ধান্তে মিযান — খরচ বনাম উপকার। Fine-tuning একটা বিনিয়োগ। সঠিক হিসাব ছাড়া বিনিয়োগ = জুয়া। সঠিক হিসাব সহ = প্রজ্ঞা।</div>
<div class="dialogue en">"Mizan — balance, scale, cost-benefit. Allah says — 'We established the scale with truth.' (21:47). Every decision needs mizan — cost vs benefit. Fine-tuning is an investment. Without proper calculation = gambling. With proper calculation = wisdom."</div>

<div class="svg-diagram">
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px">
  <defs>
    <linearGradient id="ft9bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
    <marker id="ft9arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L8,5 L0,10 Z" fill="#7dd3fc"/></marker>
  </defs>
  <rect width="800" height="400" fill="url(#ft9bg)" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#22d3ee">Cost-Benefit Analysis — Is Fine-tuning Worth It?</text>
  <text x="400" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">মিযান — খরচ বনাম উপকারের ভারসাম্য</text>
  <rect x="30" y="72" width="350" height="150" rx="10" fill="#1e293b" stroke="#f87171" stroke-width="2"/>
  <text x="205" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#f87171">Costs &#128176;</text>
  <text x="50" y="116" font-family="monospace" font-size="11" fill="#fca5a5">One-time:</text>
  <text x="60" y="134" font-family="monospace" font-size="10" fill="#fca5a5">Dataset: $২৫০-১০,০০০</text>
  <text x="60" y="150" font-family="monospace" font-size="10" fill="#fca5a5">Training: $১০-৫,০০০</text>
  <text x="60" y="166" font-family="monospace" font-size="10" fill="#fca5a5">Eval: $৫০-২৫০</text>
  <text x="60" y="182" font-family="monospace" font-size="10" fill="#fca5a5">Engineering: $৪-৮K</text>
  <text x="50" y="202" font-family="monospace" font-size="11" fill="#fca5a5">Recurring:</text>
  <text x="60" y="218" font-family="monospace" font-size="10" fill="#fca5a5">GPU hosting: $৩০০-২K/mo</text>
  <line x1="380" y1="147" x2="440" y2="147" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft9arr)"/>
  <rect x="450" y="72" width="320" height="150" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="610" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#4ade80">Benefits &#9889;</text>
  <text x="470" y="116" font-family="monospace" font-size="11" fill="#a7f3d0">Cost savings:</text>
  <text x="480" y="134" font-family="monospace" font-size="10" fill="#a7f3d0">GPT-4o: $৫০K/mo (১M queries)</text>
  <text x="480" y="150" font-family="monospace" font-size="10" fill="#a7f3d0">Self-hosted ৭B: $৫০০/mo</text>
  <text x="480" y="166" font-family="monospace" font-size="10" font-weight="700" fill="#4ade80">Savings: $৪৯,৫০০/mo!</text>
  <text x="470" y="188" font-family="monospace" font-size="10" fill="#a7f3d0">Latency: ৮০০ms &#8594; ২০০ms (৪x)</text>
  <text x="470" y="204" font-family="monospace" font-size="10" fill="#a7f3d0">Privacy: sensitive data local</text>
  <text x="470" y="218" font-family="monospace" font-size="10" fill="#a7f3d0">Quality: domain &#8593; ৭৫% &#8594; ৮৫%+</text>
  <rect x="30" y="240" width="740" height="145" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="262" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#fbbf24">Decision Matrix</text>
  <line x1="40" y1="270" x2="720" y2="270" stroke="#334155"/>
  <text x="50" y="290" font-family="monospace" font-size="11" fill="#94a3b8">১M+ queries/month?</text>
  <text x="280" y="290" font-family="monospace" font-size="11" font-weight="700" fill="#4ade80">&#8594; Fine-tune ✅ (massive ROI)</text>
  <text x="50" y="310" font-family="monospace" font-size="11" fill="#94a3b8">Sensitive data?</text>
  <text x="280" y="310" font-family="monospace" font-size="11" font-weight="700" fill="#4ade80">&#8594; Fine-tune ✅ (must self-host)</text>
  <text x="50" y="330" font-family="monospace" font-size="11" fill="#94a3b8">Latency critical (&lt; ৫০০ms)?</text>
  <text x="280" y="330" font-family="monospace" font-size="11" font-weight="700" fill="#4ade80">&#8594; Fine-tune ✅ (local model)</text>
  <text x="50" y="350" font-family="monospace" font-size="11" fill="#94a3b8">Few queries, general OK?</text>
  <text x="280" y="350" font-family="monospace" font-size="11" font-weight="700" fill="#f87171">&#8594; Stay with API (cheaper)</text>
  <text x="50" y="372" font-family="monospace" font-size="11" font-weight="700" fill="#fbbf24">Rule: API cost &gt; ৩&#215; self-hosted &#8594; fine-tune worth it (payback &lt; ৩ months)</text>
</svg>
</div>

`,
  senior:{
    title:"ROI Calculator — Quick Check",
    body:`<p><strong>Monthly API cost now:</strong> queries × avg_tokens × price_per_token</p><p><strong>Monthly self-hosted cost:</strong> GPU cost + maintenance</p><p><strong>If API cost > 3× self-hosted:</strong> → fine-tuning worth it (payback < 3 months)</p><p><strong>If API cost < self-hosted:</strong> → stay with API, don't fine-tune</p><p><strong>Special cases:</strong> privacy, latency, offline — always justify fine-tuning regardless of pure cost</p>`
  }
});

// ══ DOOR 10: SYNTHESIS ══
doors.push({
  num:10, icon:"🔥", color:"#f97316", name:"নিখুঁতির সমন্বয়",
  subtitle:"The Synthesis of Perfection", tech:"Complete Fine-tuning Mastery",
  spirit:"তাযকিয়া — সম্পূর্ণ পরিশীলন",
  secret:"নয়টি ক্ষেত্র পেরিয়েছ। When to fine-tune, dataset, LoRA, QLoRA, SFT/DPO, evaluation, forgetting, deployment, cost-benefit। সব একসাথে = fine-tuning mastery। এটাই নিখুঁতির সাধনা — সাধারণ মডেলকে তোমার কাজের জন্য নিখুঁত করা।",
  recall:{
    q:"নিখুঁতির সমন্বয় কক্ষে কেন সব একসাথে দেখানো হয়?",
    qen:"Why is everything shown together in the synthesis chamber?",
    a:"কারণ বিচ্ছিন্ন জ্ঞান = অসম্পূর্ণ। নয়টি ক্ষেত্র — decision থেকে deployment — সব একসাথে একটা সম্পূর্ণ প্রক্রিয়া। একটাও বাদ দিলে নিখুঁতি অসম্পূর্ণ। তাযকিয়া — সম্পূর্ণ পরিশীলন।",
    aen:"Because isolated knowledge = incomplete. Nine chambers — decision to deployment — together form one complete process. Missing one, perfection is incomplete. Tazkiyah — complete refinement."
  },
  story:`
<p class="scene-setting">দশম ক্ষেত্র। শেষ ক্ষেত্র। মাস্টার কারিগর ইদ্রিস দাঁড়িয়ে আছেন — সামনে নয়টি মডেল, একে একে সাজানো। নির্বাচনের কক্ষ থেকে মূল্যায়ন পর্যন্ত। "তুমি নয় ক্ষেত্র পেরিয়েছ," তিনি বললেন। "এখন সব একসাথে দেখো। একটা সম্পূর্ণ যাত্রা — সাধারণ মডেল থেকে নিখুঁত মডেল।"</p>
<p class="scene-setting en">The tenth chamber. The last. Master craftsman Idris stands — nine models before him, arranged in sequence. From choice chamber to valuation. "You've passed nine chambers," he said. "Now see all together. One complete journey — from general model to perfect model."</p>

<div class="dialogue">নয়টি ক্ষেত্র পেরিয়েছ। নির্বাচন বলেছিলেন — কখন fine-tune। উপাদান বলেছিলেন — ডেটা গুরুত্বপূর্ণ। LoRA বলেছিলেন — ১% প্যারামিটার। QLoRA বলেছিলেন — ৪-bit compress। প্রশিক্ষণ পদ্ধতি বলেছিলেন — SFT/DPO/PPO। মূল্যায়ন বলেছিলেন — মাপতে হয়। স্মৃতিহানি বলেছিলেন — forgetting এড়াও। মোক্ষম বলেছিলেন — deploy করো। মূল্যায়ন বলেছিলেন — খরচ বনাম উপকার। এখন — সব একসাথে।</div>
<div class="dialogue en">"You've passed nine chambers. Choice said — when to fine-tune. Materials said — data matters. LoRA said — 1% parameters. QLoRA said — 4-bit compress. Training method said — SFT/DPO/PPO. Evaluation said — must measure. Amnesia said — avoid forgetting. Deployment said — deploy. Valuation said — cost vs benefit. Now — all together."</div>

<div class="code-block">Complete Fine-tuning Pipeline — One View:

PHASE ১: DECISION (Door 1)
  Prompting → RAG → Fine-tuning?
  ├── Prompting works? → DONE
  ├── RAG works? → DONE  
  └── Fine-tune needed? → continue ↓

PHASE ২: DATA (Door 2)
  ১০০-৫০০০ high-quality examples
  ├── Human-authored (best, $$$)
  ├── Distillation (good, $)
  └── Real user data (realistic)
  → Format: instruction-response pairs
  → Holdout ১০% for eval

PHASE ৩: METHOD (Doors 3-5)
  ┌─────────────────────────────────────┐
  │ QLoRA (cheapest, consumer GPU)      │
  │   model: Llama 3.1 8B               │
  │   rank: 16, alpha: 32               │
  │   lr: 2e-4, epochs: 3               │
  │   GPU: RTX 3090/4090 বা Colab       │
  │   cost: ~$10                        │
  │   time: 1-3 hours                   │
  ├─────────────────────────────────────┤
  │ LoRA (balanced)                      │
  │   model: 7B-13B                     │
  │   GPU: A100 1x                      │
  │   cost: ~$50                        │
  ├─────────────────────────────────────┤
  │ Full FT (maximum quality)            │
  │   model: 7B-70B                     │
  │   GPU: A100 4-8x                    │
  │   cost: ~$800-5000                  │
  └─────────────────────────────────────┘
  
  Training method:
    SFT first → DPO if quality refinement needed

PHASE ৪: EVALUATION (Door 6)
  ├── Task metric: base vs fine-tuned
  ├── General regression: MMLU subset
  ├── LLM-as-judge: quality score
  └── Human eval: blind comparison
  → Decision: deploy? refine? discard?

PHASE ৫: ANTI-FORGETTING (Door 7)
  ├── LoRA (base frozen)
  ├── Low learning rate (1e-5 to 5e-5)
  ├── Replay (25% general data)
  └── Few epochs (1-3, early stop)

PHASE ৬: DEPLOYMENT (Door 8)
  ├── Merge LoRA → standalone model
  ├── Quantize (4-bit GGUF বা AWQ)
  ├── Serve (vLLM/TGI/Ollama)
  ├── API (OpenAI-compatible)
  └── Monitor (latency, quality, feedback)

PHASE ৭: COST-BENEFIT (Door 9)
  ├── Monthly savings vs monthly cost
  ├── Payback period
  └── ROI justification

THE COMPLETE JOURNEY:
  General LLM → YOUR domain expert
  GPT-4 → Your own ৭B that knows your domain
  $৫০K/month → $৫০০/month
  ৮০০ms → ২০০ms
  Generic → Personalized

  এটাই fine-tuning — সাধারণ মডেলকে 
  তোমার হাতের জন্য নিখুঁত করা।
  এটাই কায়িক সাধনা।</div>

<div class="verse">"যিনি সৃষ্টি করেছেন এবং নিয়মে বেঁধেছেন। যিনি পরিমাপ করেছেন এবং পথ দেখিয়েছেন।"<br>— কুরআন ৮৭:২-৩<br><br>Fine-tuning হলো সেই নিয়মে বাঁধা — সাধারণ মডেলকে নির্দিষ্ট কাজের জন্য নিয়মে বাঁধা। পরিমাপ করা — evaluation। পথ দেখানো — deployment। এটাই নিখুঁতির সাধনা।</div>

<div class="svg-diagram">
<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px">
  <defs>
    <linearGradient id="ft10bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
    <marker id="ft10arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L8,5 L0,10 Z" fill="#7dd3fc"/></marker>
  </defs>
  <rect width="800" height="460" fill="url(#ft10bg)" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="17" font-weight="700" fill="#22d3ee">Complete Fine-tuning Pipeline — The Synthesis</text>
  <text x="400" y="50" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">নয়টি ক্ষেত্র — এক সম্পূর্ণ যাত্রা</text>
  <rect x="30" y="68" width="740" height="36" rx="6" fill="#0f172a" stroke="#4ade80" stroke-width="2"/>
  <text x="400" y="90" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#4ade80">General LLM &#8594; YOUR Domain Expert &#160;&#160;|&#160;&#160; $৫০K/mo &#8594; $৫০০/mo &#160;&#160;|&#160;&#160; ৮০০ms &#8594; ২০০ms</text>
  <rect x="20" y="115" width="120" height="80" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="80" y="137" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#4ade80">Phase ১</text>
  <text x="80" y="155" text-anchor="middle" font-family="monospace" font-size="10" fill="#a7f3d0">Decision</text>
  <text x="80" y="171" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8">Prompt? RAG?</text>
  <text x="80" y="185" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8">FT needed?</text>
  <line x1="140" y1="155" x2="170" y2="155" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#ft10arr)"/>
  <rect x="175" y="115" width="120" height="80" rx="8" fill="#1e293b" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="235" y="137" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#22d3ee">Phase ২</text>
  <text x="235" y="155" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">Data</text>
  <text x="235" y="171" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8">১০০-৫০০০ ex</text>
  <text x="235" y="185" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8">Quality &gt; Qty</text>
  <line x1="295" y1="155" x2="325" y2="155" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#ft10arr)"/>
  <rect x="330" y="115" width="120" height="80" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="390" y="137" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#fbbf24">Phase ৩</text>
  <text x="390" y="155" text-anchor="middle" font-family="monospace" font-size="10" fill="#fcd34d">Method</text>
  <text x="390" y="171" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8">QLoRA/LoRA</text>
  <text x="390" y="185" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8">SFT &#8594; DPO</text>
  <line x1="450" y1="155" x2="480" y2="155" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#ft10arr)"/>
  <rect x="485" y="115" width="120" height="80" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="545" y="137" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#4ade80">Phase ৪</text>
  <text x="545" y="155" text-anchor="middle" font-family="monospace" font-size="10" fill="#a7f3d0">Eval</text>
  <text x="545" y="171" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8">task + general</text>
  <text x="545" y="185" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8">judge + human</text>
  <line x1="605" y1="155" x2="635" y2="155" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#ft10arr)"/>
  <rect x="640" y="115" width="140" height="80" rx="8" fill="#1e293b" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="710" y="137" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#22d3ee">Phase ৫</text>
  <text x="710" y="155" text-anchor="middle" font-family="monospace" font-size="10" fill="#7dd3fc">Anti-forget</text>
  <text x="710" y="171" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8">LoRA, low lr</text>
  <text x="710" y="185" text-anchor="middle" font-family="monospace" font-size="9" fill="#94a3b8">replay, early stop</text>
  <line x1="400" y1="210" x2="400" y2="240" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft10arr)"/>
  <rect x="200" y="245" width="400" height="60" rx="10" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="400" y="268" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#fbbf24">Phase ৬: Deploy</text>
  <text x="400" y="288" text-anchor="middle" font-family="monospace" font-size="11" fill="#fcd34d">Merge &#8594; Quantize &#8594; Serve (vLLM) &#8594; API &#8594; Monitor</text>
  <line x1="400" y1="305" x2="400" y2="335" stroke="#7dd3fc" stroke-width="2" marker-end="url(#ft10arr)"/>
  <rect x="200" y="340" width="400" height="60" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="400" y="363" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#4ade80">Phase ৭: Cost-Benefit</text>
  <text x="400" y="383" text-anchor="middle" font-family="monospace" font-size="11" fill="#a7f3d0">ROI check &#8594; savings vs cost &#8594; payback period</text>
  <rect x="30" y="415" width="740" height="35" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="400" y="437" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#fbbf24">তাযকিয়া — সাধারণ মডেল থেকে তোমার নিখুঁত মডেল। এটাই কায়িক সাধনা।</text>
</svg>
</div>

<div class="secret-box"><div class="label">দশম ক্ষেত্র — সমন্বয়</div><div class="text">🔥 Fine-tuning = Decision + Data + LoRA/QLoRA + Method + Eval + Anti-forget + Deploy + Cost-benefit।<br><small>সব একসাথে = সাধারণ মডেল থেকে তোমার নিখুঁত মডেল। এটাই কায়িক সাধনা।</small></div></div>`
});
