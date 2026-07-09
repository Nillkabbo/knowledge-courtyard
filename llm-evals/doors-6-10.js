// ════════════════════════════════════════
// মাপকাঠি — DOORS 6-10
// LLM Evals: Benchmarks → Architecture
// ════════════════════════════════════════

// ══ DOOR 6: BENCHMARKS ══
doors.push({
  num:6, icon:"🔬", color:"#fcd34d", name:"মানদণ্ডের কক্ষ",
  subtitle:"The Benchmark Chamber", tech:"Standard Benchmarks",
  spirit:"মাআরিফ — স্বীকৃত জ্ঞান, প্রমিত মান",
  secret:"MMLU, HumanEval, GSM8K — standard benchmarks। সবাই এগুলো ব্যবহার করে। কিন্তু contamination, overfitting, narrow scope — সীমা আছে। Standard benchmark ভালো, কিন্তু তোমার নিজের eval set আরও গুরুত্বপূর্ণ। মাআরিফ — প্রমিত মান, কিন্তু সচেতন ব্যবহার।",
  recall:{
    q:"মানদণ্ডের কক্ষে কেন standard মাপ ব্যবহার করা হয়?",
    qen:"Why use standard measures?",
    a:"কারণ standard = তুলনাযোগ্য। MMLU, HumanEval — সবাই ব্যবহার করে, তাই তুলনা করা যায়। কিন্তু contamination, narrow scope — সীমা আছে। নিজের eval set আরও গুরুত্বপূর্ণ। মাআরিফ — প্রমিত মান।",
    aen:"Because standard = comparable. MMLU, HumanEval — everyone uses, so comparison possible. But contamination, narrow scope — limits exist. Your own eval set matters more. Maarif — standardized measure."
  },
  story:`
<p class="scene-setting">ষষ্ঠ মাপ। মানদণ্ডের কক্ষ। একটা বড় বই — উপরে লেখা "স্ট্যান্ডার্ড মানদণ্ড।" প্রতিটা পৃষ্ঠায় একটা benchmark — MMLU, HumanEval, GSM8K। "সবাই এই মানদণ্ড ব্যবহার করে," পরিমাপক ইদ্রিস বললেন। "তাই তুলনা করা যায় — তোমার মডেল ও অন্যের। কিন্তু সীমা আছে। এগুলো সব কিছু মাপে না। তোমার নিজের eval set দরকার।"</p>
<p class="scene-setting en">The sixth measure. Benchmark chamber. A large book — titled "Standard Benchmarks." Each page a benchmark — MMLU, HumanEval, GSM8K. "Everyone uses these benchmarks," Measurer Idris said. "So comparison is possible — your model vs others. But limits exist. These don't measure everything. You need your own eval set."</p>

<div class="dialogue">কাজের কক্ষ বলেছিলেন — প্রতিটা task-এর আলাদা eval। কিন্তু আমি বলি — কিছু standard benchmark আছে যা সবাই ব্যবহার করে। MMLU, HumanEval, GSM8K। এগুলো তুলনার ভিত্তি। কিন্তু সচেতন থাকো — contamination, narrow scope, Goodhart's Law। Standard benchmark = শুরু, গন্তব্য নয়।</div>
<div class="dialogue en">"The task chamber said — separate eval per task. But I say — some standard benchmarks exist that everyone uses. MMLU, HumanEval, GSM8K. These are the basis for comparison. But be aware — contamination, narrow scope, Goodhart's Law. Standard benchmarks = start, not destination."</div>

<div class="code-block">Standard Benchmarks — The Measuring Sticks:

MAJOR BENCHMARKS (2024-2025):

┌──────────────────────────────────────────────┐
│ MMLU (Massive Multitask Language             │
│       Understanding)                          │
│ → ৫৭ subjects: math, history, law, medicine │
│ → multiple choice questions                  │
│ → tests broad knowledge                      │
│ → GPT-4o: ~৮৮%, Claude 3.5: ~৮৮%           │
│ → standard for "how smart is the model?"     │
├──────────────────────────────────────────────┤
│ HumanEval (OpenAI)                           │
│ → ১৬৪ coding problems                        │
│ → function signature + docstring → code      │
│ → pass@k metric                              │
│ → tests code generation ability              │
│ → GPT-4o: ~৯০%, Claude 3.5: ~৯২%           │
├──────────────────────────────────────────────┤
│ GSM8K (Grade School Math)                    │
│ → ৮৫০ grade-school math word problems       │
│ → multi-step reasoning                       │
│ → tests mathematical reasoning               │
│ → GPT-4o: ~৯৫%                              │
├──────────────────────────────────────────────┤
│ MATH                                         │
│ → competition mathematics                    │
│ → harder than GSM8K                          │
│ → tests advanced math                        │
│ → GPT-4o: ~৭৬%                              │
├──────────────────────────────────────────────┤
│ BBH (BIG-Bench Hard)                         │
│ → ২৩ challenging tasks                       │
│ → logical deduction, reasoning               │
│ → tests complex reasoning                    │
├──────────────────────────────────────────────┤
│ HellaSwag                                    │
│ → sentence completion (commonsense)          │
│ → "what happens next?"                       │
│ → tests commonsense reasoning                │
├──────────────────────────────────────────────┤
│ TruthfulQA                                   │
│ → tests if model avoids common               │
│   misconceptions                             │
│ → "how confident are models in truth?"       │
├──────────────────────────────────────────────┤
│ Chatbot Arena (LMSYS)                        │
│ → blind A/B human comparison                 │
│ → Elo rating                                 │
│ → "which chatbot is better?"                 │
│ → most trusted ranking 2024                  │
├──────────────────────────────────────────────┤
│ MMMU (Multimodal)                            │
│ → multimodal understanding                   │
│ → text + image reasoning                     │
│ → tests VLM capability                       │
├──────────────────────────────────────────────┤
│ AgentBench                                   │
│ → agent evaluation                           │
│ → tool use, planning, multi-step             │
│ → tests agent capability                     │
└──────────────────────────────────────────────┘

BENCHMARK PROBLEMS:

১. CONTAMINATION
  → benchmark data in training data!
  → model has "seen the test"
  → inflated scores
  
  Detection:
    → canary strings (unique markers)
    → membership inference
    → compare old vs new benchmark items
  
  Mitigation:
    → private benchmarks (not public)
    → dynamic benchmarks (new items regularly)
    → GoldMPI, freshQA (fresh questions)

২. GOODHART'S LAW
  "When a measure becomes a target, 
   it ceases to be a good measure"
  
  → models trained to maximize benchmark score
  → score goes up but real ability doesn't
  → overfitting to benchmark format
  
  Mitigation:
    → multiple benchmarks
    → custom eval set (your own)
    → human evaluation alongside

৩. NARROW SCOPE
  → MMLU tests knowledge, not creativity
  → HumanEval tests coding, not system design
  → no single benchmark = "overall quality"
  
  Mitigation:
    → use suite of benchmarks
    → understand what each measures
    → focus on YOUR task-specific eval

৪. FAST OBsolescence
  → benchmarks saturate quickly
  → MMLU: ৪৩% (GPT-৩) → ৮৮% (GPT-৪o) in ৩ years
  → "solved" benchmarks = no longer useful
  
  → new benchmarks constantly needed
  → ARC-AGI, GPQA (PhD-level), SWE-bench

HOW TO USE BENCHMARKS:

  ✅ DO:
    → compare models for initial selection
    → track progress over time
    → identify strengths/weaknesses
    → use as ONE signal (not the only)
  
  ❌ DON'T:
    → optimize solely for benchmarks
    → claim quality from one benchmark
    → ignore your own eval set
    → trust scores blindly (contamination!)

LM EVALUATION HARNESS (EleutherAI):
  → open-source framework
  → runs ২০০+ standard benchmarks
  → standardized evaluation protocol
  → reproducible results
  
  lm_eval --model hf --model_args pretrained=meta-llama/Llama-3.1-8B --tasks mmlu,gsm8k,humaneval

SWEE-BENCH (2024):
  → real GitHub issues
  → can the model fix real bugs?
  → the hardest coding benchmark
  → GPT-4o: ~২৩% (hard!)</div>

<div class="dialogue">মাআরিফ — recognized knowledge, standard reference। ইসলামী ঐতিহ্যে মাআরিফ হলো — স্বীকৃত, সর্বজনগ্রাহ্য জ্ঞান। Standard benchmark-ও মাআরিফ — সবার স্বীকৃত মানদণ্ড। কিন্তু সচেতন ব্যবহার দরকার — contamination, narrow scope। মাআরিফ = শুরু, নিজের eval = গন্তব্য।</div>
<div class="dialogue en">"Maarif — recognized knowledge, standard reference. In Islamic tradition, maarif is acknowledged, universally accepted knowledge. Standard benchmarks too — everyone's accepted measuring stick. But need careful use — contamination, narrow scope. Maarif = start, your own eval = destination."</div>`,
  senior:{
    title:"Using Benchmarks Wisely",
    body:`<p><strong>Model selection:</strong> Check MMLU + HumanEval + Chatbot Arena Elo for general sense of capability।</p><p><strong>Don't stop there:</strong> Build YOUR OWN eval set for YOUR task। Standard benchmarks = general sense, not your specific quality।</p><p><strong>Watch for contamination:</strong> If a model scores suspiciously high on a benchmark, check if it was in training data।</p><p><strong>Tools:</strong> LM-Eval-Harness (open source) — run ২০০+ benchmarks on any model।</p>`
  }
});

// ══ DOOR 7: REGRESSION DETECTION ══
doors.push({
  num:7, icon:"🚨", color:"#f59e0b", name:"পতনের কক্ষ",
  subtitle:"The Regression Chamber", tech:"Regression Detection",
  spirit:"ইয়াকাযা — সতর্কতা, পতন ধরা",
  secret:"নতুন = ভালো নয়। কখনো নতুন = ভাঙা। Regression detection — প্রতিটা change-এ আগের স্কোরের সাথে তুলনা। স্কোর পড়লে? Alert। Deploy করবে না। যে সতর্ক, সে regression ধরে। যে অসতর্ক, সে আবিষ্কার করে production-এ।",
  recall:{
    q:"পতনের কক্ষে কেন প্রতিটা পরিবর্তনের পরে মাপা হয়?",
    qen:"Why measure after every change?",
    a:"কারণ নতুন = ভালো নয়। কখনো নতুন = ভাঙা। Regression detection — প্রতিটা change-এ আগের স্কোরের সাথে তুলনা। পড়লে alert। যে সতর্ক, সে ধরে। ইয়াকাযা — সতর্কতা।",
    aen:"Because new ≠ better. Sometimes new = broken. Regression detection — compare every change to previous score. Drop = alert. One who watches, catches. Yaqaza — vigilance."
  },
  story:`
<p class="scene-setting">সপ্তম মাপ। পতনের কক্ষ। একটা গ্রাফ — উপরে উপরে, তারপর হঠাৎ নিচে। "এটা regression," পরিমাপক জাকেরিয়া বললেন। "নতুন version deploy করেছিলাম, স্কোর ৮৫% থেকে ৬২%। কিছু ভাঙল। কিন্তু আমি ধরেছি — কারণ প্রতিটা change-এ মাপি। যে মাপে না, সে ইউজারের কাছে আবিষ্কার করে।"</p>
<p class="scene-setting en">The seventh measure. Regression chamber. A graph — up up up, then sudden drop. "This is regression," Measurer Zakariya said. "Deployed new version, score dropped from 85% to 62%. Something broke. But I caught it — because I measure every change. One who doesn't measure, discovers it from users."</p>

<div class="dialogue">Benchmark কক্ষ বলেছিলেন — standard benchmark ব্যবহার করো। কিন্তু আমি বলি — standard benchmark শুধু একবার। প্রতিটা change-এ তোমার নিজের eval set চালাও। স্কোর পড়েছে? Regression। নতুন prompt বা model কিছু ভাঙলে ধরতে হবে — ইউজারের আগে।</div>
<div class="dialogue en">"The benchmark chamber said — use standard benchmarks. But I say — standard benchmarks are one-time. Run YOUR eval set on every change. Score dropped? Regression. New prompt or model broke something — catch it before users do."</div>

<div class="code-block">Regression Detection — Catch It Before Users Do:

WHAT IS REGRESSION?
  নতুন change-এ পুরোনো capability হারানো।
  
  Examples:
    → new prompt → better at coding, worse at math
    → model swap → faster but more hallucination
    → RAG update → better retrieval, worse faithfulness
  
  → subtle! Not always obvious.
  → without eval = undetected until user complaints.

REGRESSION DETECTION PIPELINE:

  ┌──────────────────────────────────────┐
  │ Every code change:                   │
  │                                      │
  │ ১. Run eval set (৫০-২০০ examples)   │
  │ ২. Compare to baseline scores        │
  │ ৩. If any metric drops > threshold:  │
  │    → BLOCK deploy                    │
  │    → alert developer                 │
  │    → investigate                     │
  │ ৪. If all metrics stable/improved:   │
  │    → allow deploy                    │
  └──────────────────────────────────────┘

BASELINE MANAGEMENT:
  
  Baseline = current production scores
  
  {
    model: "gpt-4o-2024-08",
    prompt: "system_prompt_v7.txt",
    eval_scores: {
      accuracy: ০.৮৭,
      faithfulness: ০.৯১,
      relevance: ০.৮৯,
      latency_p95_ms: ১৮০০
    },
    timestamp: "2024-12-15"
  }
  
  → প্রতিটা metric-এর baseline
  → প্রতিটা change-এ compare
  → threshold: > ৩% drop = block

REGRESSION TYPES:

  Hard Regression:
    → score drops significantly (> ৫%)
    → obvious, easy to catch
  
  Soft Regression:
    → score drops slightly (১-৩%)
    → subtle, needs statistical testing
    → is it noise or real regression?
  
  Silent Regression:
    → same overall score, but specific
      categories got worse
    → e.g., "overall ৮৭%" but math dropped ১০%
    → need per-category metrics
  
  Temporal Regression:
    → degradation over time (data drift)
    → same model, different user behavior
    → detected by continuous production eval

STATISTICAL SIGNIFICANCE:
  "Score dropped from ৮৭.৩% to ৮৫.১% — 
   is this real?"
  
  → Run eval ৩-৫ times (variance)
  → Average + standard deviation
  → t-test: is the difference significant?
  
  ৮৭.৩% ± ১.২ vs ৮৫.১% ± ১.৫
  → p > ০.০৫? → probably noise
  → p < ০.০৫? → real regression

CI/CD INTEGRATION (connects to LLMOps Book):

  GitHub Actions:
  
  - name: LLM Eval Regression Check
    run: |
      python eval_suite.py --output scores.json
      python check_regression.py \
        --current scores.json \
        --baseline baseline.json \
        --threshold 0.03  # ৩% drop = fail
  
  → if check_regression fails → pipeline stops
  → developer gets notification
  → investigate before re-trying

AUTOMATED ALERTS:

  Production eval (continuous):
    → sample ১০০ queries/day from production
    → run eval on those
    → compare to rolling ৭-day average
    → alert if score drops > threshold
  
  Tools:
    → LangSmith: continuous eval + alerts
    → Langfuse: production quality tracking
    → Custom: cron + eval script + Slack alert

REGRESSION INVESTIGATION:

  Step ১: Identify WHAT regressed
    → which metric? which category?
  
  Step ২: Identify WHERE  
    → which specific examples now fail?
    → what did they pass before?
  
  Step ৩: Identify WHY
    → what change caused this?
    → git bisect: find the exact commit
  
  Step ৪: Fix or revert
    → fix the root cause
    → OR revert the problematic change
  
  Step ৫: Add to eval set
    → the failed example → new eval case
    → prevent future regression on same issue</div>

<div class="dialogue">ইয়াকাযা — wakefulness, vigilance। কুরআনে আল্লাহ বলেন — "তারা রাত্রিতে কম ঘুমায়।" (৫১:১৭)। সতর্ক থাকা = সবসময় জাগ্রত। Regression detection-ও তেমনি — প্রতিটা change-এ জাগ্রত। পতন ধরা। যে জাগ্রত, সে ধরে। যে ঘুমায়, সে হারায়। ইয়াকাযা — সতর্কতার গুণ।</div>
<div class="dialogue en">"Yaqaza — wakefulness, vigilance. Allah says — 'They used to sleep but little at night.' (51:17). Being vigilant = always awake. Regression detection too — awake at every change. Catch the fall. One who is awake, catches. One who sleeps, loses. Yaqaza — the virtue of vigilance."</div>`,
  senior:{
    title:"Regression Setup — This Week",
    body:`<p><strong>Day ১:</strong> Create baseline: run eval on current production model. Save scores JSON।</p><p><strong>Day ২:</strong> Add eval to CI/CD: GitHub Actions step — run eval → compare to baseline।</p><p><strong>Day ৩:</strong> Set threshold: ৩% drop = block deploy, ১% = warning।</p><p><strong>Day ৪:</strong> Add per-category breakdown — overall score hides category regressions।</p><p><strong>Ongoing:</strong> Production eval — sample ১০০/day, compare to rolling average, alert on drop।</p>`
  }
});

// ══ DOOR 8: PRODUCTION EVALUATION ══
doors.push({
  num:8, icon:"📈", color:"#fcd34d", name:"উৎপাদনের কক্ষ",
  subtitle:"The Production Chamber", tech:"Production Evaluation",
  spirit:"মুদারাত — প্রতিদিনের যত্ন",
  secret:"Eval set স্থির — production চলমান। প্রতিদিন নতুন কোয়েরি, নতুন সমস্যা। Production eval = continuous sampling, real user queries, real quality। স্থির eval ভালো, কিন্তু production eval = সত্যিকারের পরীক্ষা। মুদারাত — প্রতিদিনের যত্ন।",
  recall:{
    q:"উৎপাদনের কক্ষে কেন প্রতিদিন মাপা হয়, একবার নয়?",
    qen:"Why measure daily, not once?",
    a:"কারণ production চলমান — প্রতিদিন নতুন কোয়েরি, নতুন সমস্যা। Continuous sampling, real queries, real quality। স্থির eval ভালো, production eval = সত্যিকারের পরীক্ষা। মুদারাত — প্রতিদিনের যত্ন।",
    aen:"Because production is ongoing — new queries daily, new problems. Continuous sampling, real queries, real quality. Static eval is good, production eval = the real test. Mudaarat — daily care."
  },
  story:`
<p class="scene-setting">অষ্টম মাপ। উৎপাদনের কক্ষ। একটা কারখানা — প্রতিদিন পণ্য বেরোয়, প্রতিদিন মাপা হয়। "একবার মাপলে হবে না," পরিমাপক বিলাল বললেন। "প্রতিদিন মাপতে হয়। কারণ প্রতিদিন নতুন। একদিন ভালো, পরের দিন খারাপ। Production-এ continuous eval — প্রতিদিন নমুনা, প্রতিদিন মাপ।"</p>
<p class="scene-setting en">The eighth measure. Production chamber. A factory — products come out daily, measured daily. "Measuring once isn't enough," Measurer Bilal said. "Must measure every day. Because each day is new. One day good, next day bad. Continuous eval in production — daily sampling, daily measuring."</p>

<div class="dialogue">Regression কক্ষ বলেছিলেন — পতন ধরো। কিন্তু আমি বলি — regression শুধু deploy-এ নয়। Production-এও। Data drift, user behavior change, model degradation। Continuous production eval ছাড়া তুমি অন্ধ। প্রতিদিন নমুনা, প্রতিদিন মাপো।</div>
<div class="dialogue en">"The regression chamber said — catch falls. But I say — regression isn't just at deploy. In production too. Data drift, user behavior change, model degradation. Without continuous production eval, you're blind. Daily sampling, daily measuring."</div>

<div class="code-block">Production Evaluation — Continuous Real-World Testing:

STATIC vs PRODUCTION EVAL:

  Static eval (your eval set):
    → ৫০-২০০ curated examples
    → fixed, controlled
    → tests what you THINK matters
  
  Production eval:
    → real user queries (sampled)
    → dynamic, evolving
    → tests what ACTUALLY matters
  
  → Need BOTH!
    → static = controlled baseline
    → production = real-world check

PRODUCTION EVAL PIPELINE:

  ┌──────────────────────────────────────┐
  │ DAILY:                               │
  │                                      │
  │ ১. Sample ১০০ queries from traffic  │
  │ ২. For each:                         │
  │    → log: query, response, metadata  │
  │    → LLM-judge: score quality        │
  │    → (optional) human spot-check ৫%  │
  │ ৩. Aggregate:                        │
  │    → daily avg score                 │
  │    → per-category breakdown          │
  │    → error patterns                  │
  │ ৪. Compare to rolling average:       │
  │    → ৭-day rolling mean              │
  │    → alert if > ২ std devs from mean │
  └──────────────────────────────────────┘

USER FEEDBACK (cheapest production eval):

  Explicit feedback:
    → thumbs up/down on each response
    → ১-৫ star rating
    → "was this helpful?" button
    → feedback text box
  
  Implicit feedback:
    → did user copy the response? (positive)
    → did user immediately retry? (negative)
    → did user abandon session? (negative)
    → response time before next query
  
  Implementation:
    → store feedback per response_id
    → track satisfaction rate over time
    → correlate with model version

DATA DRIFT DETECTION:
  User queries change over time:
  
  January: mostly "what is RAG?"
  March: "compare RAG vs fine-tuning"
  June: "troubleshoot my RAG pipeline"
  
  → eval set from January doesn't cover March!
  → need to update eval set regularly
  
  Drift metrics:
    → input embedding distribution shift
    → query length change
    → topic distribution change (clustering)
    → new entities appearing

PRODUCTION METRICS TO TRACK:

  ┌──────────────────┬───────────────────────┐
  │ Metric           │ What It Tells You     │
  ├──────────────────┼───────────────────────┤
  │ Satisfaction rate│ Overall quality trend │
  │ (thumbs up %)    │                       │
  ├──────────────────┼───────────────────────┤
  │ LLM-judge score  │ Automated quality     │
  │ (daily sample)   │                       │
  ├──────────────────┼───────────────────────┤
  │ Guardrail block  │ Safety issues         │
  │ rate             │                       │
  ├──────────────────┼───────────────────────┤
  │ Hallucination    │ Grounding quality     │
  │ rate (sampled)   │                       │
  ├──────────────────┼───────────────────────┤
  │ Retry rate       │ User dissatisfaction  │
  ├──────────────────┼───────────────────────┤
  │ Session length   │ Engagement            │
  ├──────────────────┼───────────────────────┤
  │ Error rate       │ System health         │
  ├──────────────────┼───────────────────────┤
  │ Latency          │ User experience       │
  └──────────────────┴───────────────────────┘

A/B TESTING IN PRODUCTION:
  
  Model A (current) vs Model B (new)
  
  → ৫০/৫০ traffic split (real users!)
  → compare:
    → satisfaction rate
    → LLM-judge score
    → retention
    → cost
  
  → B better on ALL metrics? → promote
  → B worse on ANY? → investigate
  → B mixed? → weigh trade-offs

CLOSED-LOOP IMPROVEMENT:

  ┌──────────────────────────────────────┐
  │ ১. Production traffic → sample      │
  │ ২. Eval sample → scores             │
  │ ৩. Low-score cases → analyze        │
  │ ৪. Root cause → fix                 │
  │ ৫. Add failure case to eval set     │
  │ ৬. Fix verified on eval set         │
  │ ৭. Deploy fix                       │
  │ ৮. Production eval confirms         │
  │ → LOOP                              │
  └──────────────────────────────────────┘
  
  → This is the engine of continuous improvement
  → production → eval → fix → deploy → repeat

TOOLS:
  LangSmith → production tracing + eval + feedback
  Langfuse → open-source, self-hosted, continuous eval
  Arize Phoenix → ML observability, drift detection
  Helicone → proxy with logging + quality scoring</div>

<div class="dialogue">মুদারাত — daily maintenance, care, attention। কুরআনে আল্লাহ বলেন — "তোমরা আল্লাহর নেয়ামত গোনো।" (১৪:৩৪)। নেয়ামত গোনা = প্রতিদিন যত্ন। Production eval-ও মুদারাত — প্রতিদিন মাপো, প্রতিদিন যত্ন নাও। যে প্রতিদিন দেখে, সে টিকে। যে একবার দেখে ভুলে যায়, সে হারায়।</div>
<div class="dialogue en">"Mudaarat — daily maintenance, care, attention. Allah says — 'Count the favors of Allah.' (14:34). Counting favors = daily care. Production eval too — measure daily, care daily. One who watches daily, survives. One who looks once and forgets, loses."</div>`,
  senior:{
    title:"Production Eval — Start Today",
    body:`<p><strong>Day ১:</strong> Add feedback UI — thumbs up/down on every response। Store in DB।</p><p><strong>Day ২:</strong> Log every query+response with metadata (model, prompt version, latency)।</p><p><strong>Day ৩:</strong> Sample ১০০/day → run LLM-judge → daily quality score।</p><p><strong>Day ৪:</strong> Dashboard: satisfaction %, quality score, guardrail blocks, latency।</p><p><strong>Day ৫:</strong> Alert: quality drops ২ std devs → Slack/PagerDuty।</p><p><strong>Ongoing:</strong> Low-score cases → add to eval set → fix → re-eval → deploy।</p>`
  }
});

// ══ DOOR 9: EVALUATION PITFALLS ══
doors.push({
  num:9, icon:"⚠️", color:"#f59e0b", name:"ফাঁদের কক্ষ",
  subtitle:"The Pitfalls Chamber", tech:"Evaluation Anti-Patterns",
  spirit:"তাহাযযুব — প্রতারণা থেকে সতর্ক",
  secret:"Eval কঠিন, কিন্তু ভুল eval আরও বিপজ্জনক। Overfitting to metric, contaminated data, survivorship bias, Goodhart's Law, single metric, no human validation। প্রতিটা pitfall একটা ফাঁদ। যে ফাঁদ জানে, সে এড়ায়। তাহাযযুব — প্রতারণা থেকে সতর্ক।",
  recall:{
    q:"ফাঁদের কক্ষে কেন প্রতিটা ভুল চিহ্নিত করা হয়?",
    qen:"Why is every mistake marked?",
    a:"কারণ ভুল eval = ভুল সিদ্ধান্ত। Overfitting, contamination, Goodhart's Law। প্রতিটা pitfall একটা ফাঁদ। যে ফাঁদ জানে, সে এড়ায়। তাহাযযুব — প্রতারণা থেকে সতর্ক।",
    aen:"Because wrong eval = wrong decision. Overfitting, contamination, Goodhart's Law. Each pitfall is a trap. One who knows traps, avoids them. Tahayyuz — caution against deception."
  },
  story:`
<p class="scene-setting">নবম মাপ। ফাঁদের কক্ষ। দেয়ালে ছবি — প্রতিটায় একটা ভুল। Overfitting। Contamination। Survivorship bias। "এগুলো ফাঁদ," পরিমাপক হাসিব বললেন। "দেখে ভালো লাগে কিন্তু ভেতরে ফাঁদ। স্কোর উঁচু কিন্তু বাস্তবে খারাপ। যে ফাঁদ জানে, সে এড়ায়। যে জানে না, সে পড়ে।"</p>
<p class="scene-setting en">The ninth measure. Pitfalls chamber. Pictures on walls — each showing a mistake. Overfitting. Contamination. Survivorship bias. "These are traps," Measurer Hasib said. "Look good but trap inside. Score high but actually bad. One who knows traps, avoids. One who doesn't, falls."</p>

<div class="dialogue">Production eval কক্ষ বলেছিলেন — continuous মাপো। কিন্তু আমি বলি — মাপা যদি ভুল হয়? Continuous ভুল = continuous বিভ্রান্তি। Eval-এ ফাঁদ আছে। Overfitting, contamination, Goodhart's Law। প্রতিটা ফাঁদ জানো — নাহলে ভুল মাপবে, ভুল সিদ্ধান্ত নেবে।</div>
<div class="dialogue en">"The production eval chamber said — measure continuously. But I say — what if measuring is wrong? Continuous wrong = continuous delusion. Eval has traps. Overfitting, contamination, Goodhart's Law. Know each trap — or measure wrong, decide wrong."</div>

<div class="code-block">Evaluation Pitfalls — Traps to Avoid:

TOP ৭ EVALUATION TRAPS:

১. GOODHART'S LAW
  "When a measure becomes a target, 
   it ceases to be a good measure."
  
  Trap:
    → optimize prompt for eval set score
    → score goes up: ৭০% → ৮৫%!
    → but real quality didn't improve
    → prompt "gamed" the eval
  
  Example:
    → eval set has short factual answers
    → prompt: "always answer in ৩ words"
    → eval: ৯০%! (because ground truth is short)
    → production: terrible (user wants detail)
  
  Fix:
    → diverse eval set (vary lengths, types)
    → don't optimize directly for eval
    → hold out a secret eval set

২. CONTAMINATION
  Eval data আছে model-এর training data-তে।
  
  Trap:
    → model has memorized eval examples
    → scores artificially high
    → "৯৫% on MMLU!" — but it's seen the test
  
  Fix:
    → use private/secret eval set
    → create fresh examples
    → test with membership inference

৩. SURVIVORSHIP BIAS
  শুধু successful cases evaluate করো।
  
  Trap:
    → eval set has easy/clean examples
    → hard/messy cases excluded
    → "৯০% accuracy!" — but only on easy ones
  
  Example:
    → eval has clear questions ("capital of France?")
    → production gets: "yo what's that big city in fraunce"
    → model fails on real queries
  
  Fix:
    → include hard, messy, adversarial cases
    → production-sampled eval set
    → track failure cases separately

৪. SINGLE METRIC SYNDROME
  একটা metric দিয়ে সব বিচার।
  
  Trap:
    → "accuracy is ৮৫%, we're good!"
    → but faithfulness dropped to ৪০%
    → or latency doubled
    → or cost tripled
  
  Fix:
    → always track multiple metrics
    → accuracy + faithfulness + latency + cost
    → no single metric tells the whole story

৫. NO HUMAN VALIDATION
  শুধু automated metric, কোনো মানুষ নয়।
  
  Trap:
    → BLEU score high → "great translation!"
    → human reads → "this is unnatural"
    → metric ≠ human quality
  
  Fix:
    → validate metrics with human eval (Door 4)
    → Cohen's kappa: metric vs human agreement
    → at least ৫০ human-judged examples

৬. SELECTION BIAS
  Eval set প্রতিনিধিত্বমূলক নয়।
  
  Trap:
    → all eval questions from developer
    → developer thinks one way
    → real users think differently
    → "৯০% on our eval" but ৫০% in production
  
  Fix:
    → sample from real production queries
    → diverse authors (not just engineers)
    → update eval set regularly

৭. OVERFITTING TO JUDGE
  LLM-judge-এর পক্ষপাতে optimize করো।
  
  Trap:
    → GPT-4 prefers long answers (verbosity bias)
    → prompt: "always give detailed answers"
    → judge score: high!
    → real users: "too verbose"
  
  Fix:
    → multiple judges (GPT-4 + Claude + human)
    → blind evaluation
    → strip formatting before judging

EVALUATION ANTI-PATTERNS SUMMARY:

  ❌ "It works on ৫ examples" → test ৫০+
  ❌ "Score is high" → multiple metrics
  ❌ "LLM-judge says good" → validate with human
  ❌ "Eval set from ২০২৩" → update regularly
  ❌ "One benchmark" → suite + custom eval
  ❌ "No regression check" → compare to baseline
  ❌ "Deployed, forgot eval" → continuous monitoring

THE EVALUATION CHECKLIST:

  ☐ Diverse eval set (৫০+ examples)
  ☐ Multiple metrics (not just accuracy)
  ☐ Human validation (at least ৫০ examples)
  ☐ No contamination (check training data)
  ☐ Include hard/adversarial cases
  ☐ Per-category breakdown (not just overall)
  ☐ Baseline comparison (regression check)
  ☐ Production sampling (real queries)
  ☐ Regular updates (drift adaptation)
  ☐ Multiple judges (cross-model validation)

THE GOLDEN RULE:
  Evaluation is never "done."
  It's a continuous practice.
  The moment you stop evaluating,
  quality starts dropping.
  
  → eval is not a phase — it's a culture</div>

<div class="dialogue">তাহাযযুব — caution against deception, vigilance। কুরআনে আল্লাহ বলেন — "শয়তান তোমাদের প্রকাশ্য শত্রু।" (২:১৬৮)। শয়তান প্রতারণা করে — ভালো দেখায়, ভেতরে খারাপ। Eval-এও ফাঁদ — স্কোর উঁচু, বাস্তবে খারাপ। যে ফাঁদ জানে, সে এড়ায়। তাহাযযুব — প্রতারণা থেকে সতর্ক।</div>
<div class="dialogue en">"Tahayyuz — caution against deception, vigilance. Allah says — 'Satan is your clear enemy.' (2:168). Satan deceives — shows good, inside bad. Eval has traps too — score high, reality bad. One who knows traps, avoids. Tahayyuz — caution against deception."</div>`,
  senior:{
    title:"Eval Health Checklist — Monthly Review",
    body:`<p>☐ Diverse: eval set covers easy/medium/hard + edge cases</p><p>☐ Multi-metric: accuracy + faithfulness + relevance + cost + latency</p><p>☐ Human-validated: LLM-judge κ > ০.৭ with human</p><p>☐ No contamination: eval examples NOT in training data</p><p>☐ Production-sampled: ২০% of eval from real user queries</p><p>☐ Updated: new examples added monthly</p><p>☐ Regression baseline: current scores saved, compared every change</p><p>☐ Multiple judges: GPT-4 + Claude + human spot check</p>`
  }
});

// ══ DOOR 10: SYNTHESIS ══
doors.push({
  num:10, icon:"🏆", color:"#f59e0b", name:"সমন্বয়ের মানদণ্ড",
  subtitle:"The Master Measure", tech:"Complete Evaluation Architecture",
  spirit:"মিযানুল হক — সত্যের পরিমাপ",
  secret:"নয়টি মাপ পেরিয়েছ। Why eval, metrics, LLM-judge, human eval, task-specific, benchmarks, regression, production, pitfalls। সব একসাথে = complete evaluation architecture। যে মাপে, সে উন্নত করে। যে মাপে না, সে অন্ধ। মিযানুল হক — সত্যের পরিমাপ।",
  recall:{
    q:"সমন্বয়ের মানদণ্ডে কেন সব একসাথে?",
    qen:"Why everything together?",
    a:"কারণ বিচ্ছিন্ন মাপ = অসম্পূর্ণ। নয়টি মাপ — metrics থেকে pitfalls — সব একসাথে complete architecture। যে মাপে, সে উন্নত করে। মিযানুল হক — সত্যের পরিমাপ।",
    aen:"Because isolated measures = incomplete. Nine measures — metrics to pitfalls — together form complete architecture. One who measures, improves. Mizanul Haq — measure of truth."
  },
  story:`
<p class="scene-setting">দশম মাপ। শেষ। স্থপতি ইদ্রিস দাঁড়িয়ে আছেন — সামনে একটা সম্পূর্ণ মাপন কেন্দ্র। নয়টি কক্ষ একসাথে। "তুমি নয় মাপ পেরিয়েছ," তিনি বললেন। "এখন দেখো — সব একসাথে। একটা সম্পূর্ণ মাপন সংস্কৃতি। যে মাপে, সে উন্নত করে। যে মাপে না, সে অন্ধের মতো ছুটে।"</p>
<p class="scene-setting en">The tenth measure. The last. Architect Idris stands — before him a complete measurement center. Nine chambers together. "You've passed nine measures," he said. "Now see — all together. One complete measurement culture. One who measures, improves. One who doesn't, runs blind."</p>

<div class="dialogue">নয়টি মাপ পেরিয়েছ। মাপন বলেছিলেন, মাপো। সূচক বলেছিলেন, metric বেছে নাও। বিচারক বলেছিলেন, LLM-as-judge। মানুষ বলেছিলেন, human eval। কাজ বলেছিলেন, task-specific। মানদণ্ড বলেছিলেন, benchmarks। পতন বলেছিলেন, regression। উৎপাদন বলেছিলেন, continuous eval। ফাঁদ বলেছিলেন, pitfalls। এখন — সব একসাথে।</div>
<div class="dialogue en">"You've passed nine measures. Measurement said, measure. Metrics said, choose metrics. Judge said, LLM-as-judge. Human said, human eval. Task said, task-specific. Benchmark said, standards. Regression said, catch drops. Production said, continuous. Pitfalls said, avoid traps. Now — all together."</div>

<div class="code-block">Complete LLM Evaluation Architecture:

┌──────────────────────────────────────────────────┐
│ COMPLETE EVAL STACK                               │
├──────────────────────────────────────────────────┤
│                                                   │
│  LAYER ১: EVAL SET (the foundation)              │
│  ├── ৫০-২০০ curated examples                      │
│  ├── diverse: easy/medium/hard/edge               │
│  ├── ground truth for each                        │
│  ├── per-category breakdown                       │
│  └── production-sampled additions (monthly)       │
│                                                   │
│  LAYER ২: METRICS (the measuring sticks)         │
│  ├── Task-specific: EM/F1 (QA), ROUGE (summ),    │
│  │   pass@k (code), RAGAS (RAG)                   │
│  ├── Quality: faithfulness, relevance, coherence │
│  ├── Performance: latency, cost, throughput       │
│  └── Safety: toxicity, guardrail blocks           │
│                                                   │
│  LAYER ৩: EVALUATORS (who judges)                │
│  ├── LLM-as-judge: GPT-4o (scale, automated)     │
│  ├── Human: domain experts (gold standard)        │
│  ├── Calibration: κ > ০.৭ (LLM vs human)          │
│  └── Multiple judges: cross-model validation      │
│                                                   │
│  LAYER ৪: CI/CD GATE (prevent regression)        │
│  ├── Every code change → run eval                 │
│  ├── Compare to baseline                          │
│  ├── > ৩% drop → BLOCK deploy                     │
│  └── GitHub Actions integration                   │
│                                                   │
│  LAYER ৫: PRODUCTION MONITORING (continuous)      │
│  ├── Daily sample: ১০০ queries → eval             │
│  ├── User feedback: thumbs, ratings               │
│  ├── Drift detection: input distribution change   │
│  ├── Alerting: quality drop → Slack/PagerDuty     │
│  └── Closed-loop: failures → eval set → fix       │
│                                                   │
│  LAYER ৬: BENCHMARKS (external reference)        │
│  ├── MMLU, HumanEval, GSM8K (standard)            │
│  ├── LM-Eval-Harness (run ২০০+)                   │
│  ├── Chatbot Arena Elo (human comparison)         │
│  └── Check contamination                           │
│                                                   │
│  LAYER ৭: CULTURE (the mindset)                  │
│  ├── "If you can't measure it, improve it not"   │
│  ├── Every claim → numbers                        │
│  ├── Every change → eval                          │
│  ├── Every failure → eval case                    │
│  └── Eval is never done — it's continuous        │
│                                                   │
└──────────────────────────────────────────────────┘

EVALUATION MATURITY MODEL:

  Level ১: No eval ("it seems to work")
    → vibe-based development
  
  Level ২: Basic eval
    → ৫-১০ examples, manual check
  
  Level ৩: Systematic eval
    → ৫০+ examples, automated metrics
  
  Level ৪: CI/CD eval
    → eval gate in pipeline, regression check
  
  Level ৫: Full eval culture
    → continuous production eval
    → user feedback loop
    → closed-loop improvement
    → multi-judge validation

TECH STACK:

  ┌─────────────┬──────────────────────────────┐
  │ Component   │ Tool                         │
  ├─────────────┼──────────────────────────────┤
  │ Eval set    │ JSONL + Git                  │
  │ Metrics     │ RAGAS + custom Python        │
  │ LLM-judge   │ GPT-4o via Promptfoo         │
  │ Human eval  │ Google Sheets / MTurk         │
  │ CI/CD       │ GitHub Actions + eval script  │
  │ Monitoring  │ Langfuse / LangSmith          │
  │ Benchmarks  │ LM-Eval-Harness               │
  │ Dashboard   │ Grafana / Streamlit           │
  └─────────────┴──────────────────────────────┘

THE COMPLETE EVAL JOURNEY:

  Week ১: Build eval set (৫০ examples)
  Week ২: Add automated metrics + LLM-judge
  Week ৩: Validate with human (৫০ examples)
  Week ৪: CI/CD integration (eval gate)
  Week ৫: Production sampling + feedback
  Week ৬: Dashboard + alerting
  Week ৭: Continuous improvement loop
  
  → ৭ weeks: no eval → full eval culture

FINAL PRINCIPLES:

  ১. Measure from day ১
  ২. Multiple metrics, multiple judges
  ৩. Human is the gold standard
  ৪. Eval is never done
  ৫. Every failure → new eval case
  ৬. Numbers, not vibes
  ৭. Eval = the engine of improvement</div>

<div class="verse">"আমরা সত্যের সাথে মিযান স্থাপন করেছি।"<br>— কুরআন ২১:৪৭<br><br>Evaluation হলো সেই মিযান — সত্যের পরিমাপ। যে মাপে, সে সত্য জানে। যে মাপে না, সে অন্ধ। মিযানুল হক — সত্যের মাপকাঠি। এটাই প্রকৌশলের ভিত্তি, উন্নতির ইঞ্জিন।</div>

<div class="secret-box"><div class="label">দশম মাপ — সমন্বয়</div><div class="text">🏆 LLM Evals = Why + Metrics + Judge + Human + Task + Benchmarks + Regression + Production + Pitfalls।<br><small>যে মাপে, সে উন্নত করে। যে মাপে না, সে অন্ধ। এটাই মিযানুল হক।</small></div></div>`
});
