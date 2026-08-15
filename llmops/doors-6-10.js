// ════════════════════════════════════════
// নিয়ন্ত্রণ কেন্দ্র — DOORS 6-10
// LLMOps: Latency → Architecture
// ════════════════════════════════════════

// ══ DOOR 6: LATENCY OPTIMIZATION ══
doors.push({
  num:6, icon:"⚡", color:"#22d3ee", name:"বেগ কক্ষ",
  subtitle:"The Speed Chamber", tech:"Latency Optimization",
  spirit:"সরি'আহ — দ্রুততা, তাৎক্ষণিকতা",
  secret:"User ৩ সেকেন্ডের বেশি অপেক্ষা করে না। TTFT, TPOT, streaming, speculative decoding, prefix caching — প্রতিটা কৌশল latency কমায়। Streaming = perceived latency কমায় (user দ্রুত দেখে)। যে দ্রুত, সে জেতে।",
  recall:{
    q:"বেগ কক্ষে কেন সবাই দ্রুত কাজ করতে চায়?",
    qen:"Why does everyone want to work fast in the speed chamber?",
    a:"কারণ ধীর = ইউজার চলে যায়। ৩ সেকেন্ডের বেশি = হারানো। Streaming, prefix caching, speculative decoding — latency কমায়। যে দ্রুত, সে জেতে। সরি'আহ — দ্রুততা।",
    aen:"Because slow = users leave. More than 3 seconds = lost. Streaming, prefix caching, speculative decoding — reduce latency. One who is fast, wins. Sariah — speed."
  },
  story:`
<p class="scene-setting">ষষ্ঠ কেন্দ্র। বেগ কক্ষ। সবাই দ্রুত কাজ করছে — কেউ ছুটছে, কেউ লাফ দিচ্ছে, কেউ শর্টকাট নিচ্ছে। "ধীর = মৃত্যু," প্রকৌশলী ফারহান বললেন। "ইউজার ৩ সেকেন্ডের বেশি অপেক্ষা করে না। ChatGPT কেন জনপ্রিয়? দ্রুত। আমাদেরও দ্রুত হতে হবে। Streaming, caching, optimization — প্রতিটা কৌশল।"</p>
<p class="scene-setting en">The sixth center. Speed chamber. Everyone working fast — running, jumping, taking shortcuts. "Slow = death," Engineer Farhan said. "Users won't wait more than 3 seconds. Why is ChatGPT popular? Fast. We must be fast too. Streaming, caching, optimization — each technique."</p>

<div class="dialogue">বাজেট কক্ষ বলেছিলেন — খরচ কমাও। কিন্তু আমি বলি — খরচ কমানো শুধু একটা দিক। আরেকটা দিক — latency। ইউজার ধৈর্য ধরে না। ৩ সেকেন্ড পরে চলে যায়। Latency কমানো = ইউজার ধরে রাখা। এটাই প্রোডাকশনে টিকে থাকার চাবি।</div>
<div class="dialogue en">"The budget chamber said — reduce cost. But I say — reducing cost is one side. The other — latency. Users aren't patient. They leave after 3 seconds. Reducing latency = retaining users. This is the key to surviving in production."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Monitoring Blindspot:</strong> No latency monitoring — model degraded slowly over weeks. Fix: track p50/p95/p99, set alerts.</div></div>


<div class="code-block"># ── STEP 1: Latency optimization ──
# Every millisecond counts.

latency = """
LATENCY OPTIMIZATION FOR LLMS:

LLM LATENCY ANATOMY:
  Total = TTFT + (output_tokens * TPOT)

  TTFT (Time To First Token):
    → prompt processing + first token
    → typical: 200-1000ms
    → this is what user feels as "thinking time"

  TPOT (Time Per Output Token):
    → time per subsequent token
    → typical: 20-100ms/token
    → 500 tokens * 40ms = 20s (long!)

OPTIMIZATION STRATEGIES:

1. STREAMING (biggest perceived win):
   → Send each token as generated
   → User sees response start immediately
   → Perceived latency = TTFT (not total)
   → SSE (Server-Sent Events)

   Without streaming: user waits 2s → sees all
   With streaming: user sees first token at 200ms

2. PREFIX CACHING:
   → Cache system prompt KV → reuse for all requests
   → TTFT drops 50-80%
   → vLLM: --enable-prefix-caching

3. SPECULATIVE DECODING (2-3x faster):
   → Small "draft" model generates N tokens fast
   → Big model verifies all N in one pass
   → If correct: accept all (2-3x speedup)
   → If wrong: reject and use big model's token

4. SHORTER PROMPTS:
   → Less input = faster prefill = lower TTFT
   → Remove unnecessary context, compress system prompt

5. QUANTIZATION:
   → fp16 → int4: 2-3x faster inference
   → AWQ, GPTQ: minimal quality loss

6. CONTINUOUS BATCHING:
   → New requests join running batch dynamically
   → GPU utilization maxed → 3-5x throughput

7. GEOGRAPHIC PROXIMITY:
   → Server near users (US→US, Asia→Asia)
   → Network RTT: 200ms (far) vs 20ms (near)

LATENCY BUDGET (per request):
  Network:        < 100ms
  Input guardrail: < 50ms
  Query processing: < 100ms
  RAG retrieval:  < 100ms
  LLM TTFT:       < 500ms
  LLM streaming:  ~continuous
  Output guardrail: < 50ms
  Total perceived: < 1s

PYTHON (streaming with vLLM):
  from openai import OpenAI
  client = OpenAI(base_url="http://localhost:8000/v1")

  stream = client.chat.completions.create(
      model="llama-2-7b",
      messages=[{"role": "user", "content": "Tell me a story"}],
      stream=True  # streaming!
  )

  for chunk in stream:
      token = chunk.choices[0].delta.content
      if token:
          print(token, end="", flush=True)
  # User sees first token at ~200ms instead of waiting 5s

BENCHMARKING:
  → Always measure before AND after optimization
  → Tools: vLLM benchmark_serving.py, locust
  → Track: p50, p95, p99 (p99 = worst user experience)
"""

print(latency)</div>

<div class="code-block"># ── STEP 2: Versioning and model registry ──
# Everything tracked.

versioning = """
VERSIONING FOR LLMS:

WHAT TO VERSION:
  → Model weights (every training run)
  → Training data (what was the model trained on?)
  → Prompts (system prompt changes affect behavior)
  → Configs (temperature, max_tokens, etc.)
  → Code (serving code, preprocessing)
  → Evaluation results (how did each version score?)

MODEL REGISTRY:
  Central repository for all model versions.
  → MLflow Model Registry
  → Weights & Biases
  → HuggingFace Hub

VERSIONING SCHEME:
  semantic: major.minor.patch
  → major: significant change (new base model)
  → minor: improvement (new training data)
  → patch: hotfix (bug fix, prompt update)

PYTHON (MLflow model registry):
  import mlflow

  # Register a new version:
  mlflow.register_model(
      "runs:/abc123/model",
      "my-llm",
      tags={
          "version": "2.1.0",
          "base_model": "llama-2-7b",
          "training_data": "dataset_v3",
          "eval_score": "0.85"
      }
  )

  # List versions:
  client = mlflow.tracking.MlflowClient()
  versions = client.search_model_versions("name='my-llm'")
  for v in versions:
      print(f"v{v.version}: {v.tags}")

  # Promote to production:
  client.transition_model_version_stage(
      name="my-llm",
      version=5,
      stage="Production"
  )

DATA VERSIONING (DVC):
  # Track dataset changes:
  # dvc add training_data.json
  # dvc push  # upload to remote storage
  # git commit -m "Update training data v3"

  # Reproduce any past experiment:
  # dvc checkout  # restore data from specific commit
  # python train.py  # reproduce exact training

PROMPT VERSIONING:
  → Prompts are CODE (version them!)
  → Store in git alongside code
  → Test prompt changes in eval harness before deploy
  → A/B test prompts in production
"""

print(versioning)</div>

<div class="code-block"># ── STEP 3: A/B testing for LLMs ──
# Data-driven model decisions.

abtesting = """
A/B TESTING FOR LLMS:

Don't guess which model/prompt is better — TEST.

WHAT TO A/B TEST:
  → Model versions (7B vs 13B vs fine-tuned)
  → Prompts (different system prompts)
  → Parameters (temperature, top_p)
  → Retrieval strategies (chunk size, reranking)
  → Guardrail configurations

HOW IT WORKS:
  1. Split traffic: 50% model A, 50% model B
  2. Collect metrics: quality, latency, cost, satisfaction
  3. Statistical test: is the difference significant?
  4. Deploy winner

METRICS:
  → Implicit: response time, follow-up rate, thumbs up/down
  → Explicit: user ratings, surveys
  → Proxy: LLM-as-judge, task completion rate

PYTHON (A/B test framework):
  import random

  def ab_test_route(user_id, variants):
      \"\"\"Route user to variant based on user_id hash.\"\"\"
      hash_val = hash(user_id) % 100
      if hash_val < 50:
          return variants['A']
      return variants['B']

  variants = {
      'A': {'model': 'llama-2-7b', 'prompt': 'v1'},
      'B': {'model': 'llama-2-13b', 'prompt': 'v2'},
  }

  config = ab_test_route(user.id, variants)
  response = generate(user_input, **config)

  # Log for analysis:
  log_ab_test(user.id, config, response, user_feedback)

STATISTICAL SIGNIFICANCE:
  → Need enough samples (typically 1000+ per variant)
  → Use t-test or Mann-Whitney for continuous metrics
  → Use chi-squared for binary metrics (satisfied/not)
  → Set significance level (alpha = 0.05)

COMMON MISTAKES:
  → Stopping too early (peeking problem)
  → Not accounting for novelty effect
  → Confounding variables (time of day, user segment)
  → Not segmenting (A better overall, B better for power users)

TOOLS:
  → Statsig: feature flags + A/B testing
  → LaunchDarkly: feature management
  → GrowthBook: open-source A/B testing
  → LangSmith: LLM-specific A/B testing
"""

print(abtesting)</div>

<div class="code-block"># ── STEP 4: Incident response ──
# When things break.

incidents = """
INCIDENT RESPONSE FOR LLMS:

COMMON LLM INCIDENTS:
  → Model degradation (quality drops suddenly)
  → Hallucination spike (model starts making things up)
  → Latency spike (response times increase 5x)
  → Cost spike (unexpected API bill)
  → Safety failure (model outputs harmful content)
  → Outage (model server down)
  → Data leak (PII or system prompt leaked)

INCIDENT SEVERITY:
  Sev1 (Critical): Complete outage, safety failure → page on-call
  Sev2 (High): Major degradation → fix within hours
  Sev3 (Medium): Minor degradation → fix within days
  Sev4 (Low): Cosmetic issue → fix in next sprint

RESPONSE PLAYBOOK:
  1. DETECT: monitoring alert or user report
  2. TRIAGE: assess severity, assign responder
  3. INVESTIGATE: check logs, metrics, recent changes
  4. MITIGATE: rollback, disable feature, switch to fallback
  5. RESOLVE: fix root cause
  6. POST-MORTEM: document, improve prevention

ROLLBACK STRATEGY:
  → Model rollback: revert to previous model version
  → Code rollback: revert code deployment
  → Feature flag: disable problematic feature
  → Fallback mode: switch to rule-based or cached responses

PYTHON (auto-rollback):
  def monitor_and_rollback():
      metrics = get_current_metrics()

      # Check for degradation:
      if metrics['error_rate'] > 0.05:  # >5% errors
          rollback_model()
          alert("Auto-rollback: error rate too high")

      if metrics['latency_p99'] > 5.0:  # >5s p99
          rollback_model()
          alert("Auto-rollback: latency too high")

      if metrics['cost_per_hour'] > budget * 1.5:
          switch_to_cheaper_model()
          alert("Cost spike detected, switched to fallback")

ON-CALL CHECKLIST:
  → Know the rollback procedure
  → Have contact list (model team, infra team, security)
  → Access to monitoring dashboards
  → Test incident response in game days
  → Document runbooks for common incidents

POST-MORTEM TEMPLATE:
  1. Summary: what happened, impact
  2. Timeline: detection → mitigation → resolution
  3. Root cause: why did it happen?
  4. Action items: how to prevent recurrence
  5. Lessons learned: what worked, what didn't
"""

print(incidents)</div>

<div class="code-block"># ── STEP 5: Complete LLMOps architecture ──
# Full production system.

architecture = """
COMPLETE PRODUCTION LLMOPS ARCHITECTURE:

DEVELOPMENT:
  Data → Training/Fine-tuning → Evaluation → Model Registry

  Tools: HuggingFace, PEFT, TRL, MLflow, W&B

DEPLOYMENT:
  Model Registry → Container → Staging → Canary → Production

  Tools: Docker, Kubernetes, vLLM, ArgoCD

SERVING:
  User → WAF → Load Balancer → vLLM Server → GPU

  Components:
  → Input guardrails (safety check)
  → Semantic cache (reduce cost)
  → Model router (simple→small, complex→large)
  → vLLM serving (continuous batching, PagedAttention)
  → Output guardrails (PII, toxicity filter)
  → Streaming (SSE for low perceived latency)

MONITORING:
  → Prometheus: latency, throughput, GPU utilization
  → LangSmith: LLM traces, prompt analytics
  → Cost tracking: per-request, per-user
  → Quality: hallucination rate, user satisfaction

CI/CD PIPELINE:
  Code/Data Change → Build → Test → Evaluate → Deploy

  GitHub Actions:
    → Lint + unit tests
    → Run evaluation benchmarks
    → Check for regression (vs previous model)
    → Safety scan (jailbreak, bias)
    → Deploy to staging
    → Shadow traffic test
    → Canary deployment (5% → 25% → 100%)
    → Auto-rollback if metrics degrade

INCIDENT RESPONSE:
  Monitoring → Alert → On-call → Investigate → Mitigate → Resolve

  Tools: PagerDuty, Slack, runbooks

COST OPTIMIZATION:
  → Semantic cache (30-50% hit rate)
  → Model routing (small model for simple queries)
  → Quantization (INT8/INT4)
  → Batch processing for async workloads
  → Auto-scaling (scale to zero when idle)

KEY PRINCIPLES:
  1. AUTOMATE EVERYTHING: manual ops = errors
  2. MONITOR EVERYTHING: you can't fix what you can't see
  3. TEST BEFORE DEPLOY: evaluation gates
  4. CANARY DEPLOYMENTS: gradual rollout
  5. PLAN FOR FAILURE: rollback, fallback, incidents
  6. COST AWARENESS: every token costs money
"""

print(architecture)</div>

<div class="code-block"># ── STEP 6: LLMOps journey and next steps ──
# Your path to production LLM mastery.

journey = """
YOUR LLMOPS JOURNEY:

You started seeing deployment as "running a script."
You finish seeing a COMPLETE PRODUCTION SYSTEM:

WHAT YOU'VE MASTERED:
  ✅ Model serving (vLLM, TGI, SGLang, Triton)
  ✅ Deployment patterns (Docker, K8s, serverless, edge)
  ✅ CI/CD for LLMs (evaluation gates, canary)
  ✅ Monitoring (performance, quality, cost, safety)
  ✅ Cost optimization (caching, routing, quantization)
  ✅ Latency optimization (streaming, prefix caching)
  ✅ Versioning (model registry, data versioning)
  ✅ A/B testing (statistical comparison of variants)
  ✅ Incident response (detection, rollback, post-mortem)
  ✅ Complete architecture (full production stack)

THE ML ENGINEER'S MINDSET:
  1. "How do I serve this efficiently?" (vLLM, batching)
  2. "How do I know it's working?" (monitoring, eval)
  3. "How do I deploy safely?" (canary, rollback)
  4. "How do I optimize cost?" (caching, routing, quant)
  5. "What happens when it breaks?" (incident response)

"Production ML is 10% modeling,
 20% data, and 70% operations."
 — Industry consensus

WHAT TO STUDY NEXT:
  → Read: "Machine Learning Engineering" (Huyen)
  → Practice: Deploy a model to production
  → Learn: Kubernetes for ML (Kubeflow, KServe)
  → Explore: Feature stores (Feast, Tecton)
  → Study: Distributed training (DeepSpeed, FSDP)
  → Follow: Papers on efficient inference

Welcome to LLMOps mastery.
"""

print(journey)

# FINAL SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Phase            │ Tool/Practice                  │
# ├──────────────────┼──────────────────────────────────┤
# │ Serving          │ vLLM (PagedAttention)           │
# │ Deployment       │ Docker + Kubernetes             │
# │ CI/CD            │ GitHub Actions + MLflow         │
# │ Monitoring       │ Prometheus + LangSmith          │
# │ Cost optimization│ Semantic cache + routing        │
# │ Latency          │ Streaming + prefix caching      │
# │ Versioning       │ MLflow Model Registry + DVC     │
# │ A/B testing      │ Statsig / LangSmith             │
# │ Incident response│ PagerDuty + runbooks            │
# └──────────────────┴──────────────────────────────────┘</div>
  
  Perceived latency (with streaming):
    → user sees TTFT as "response starting"
    → rest streams in → feels faster

OPTIMIZATION STRATEGIES:

১. STREAMING (biggest perceived win!)
  → প্রতিটা token তৈরি হওয়ামাত্র পাঠাও
  → user দ্রুত দেখে শুরু
  → perceived latency = TTFT (not total)
  
  Without streaming: user waits ২s → sees all
  With streaming: user sees first token at ২০০ms
  
  SSE (Server-Sent Events):
    response = client.stream_chat(messages)
    for chunk in response:
      print(chunk, end="", flush=True)
  
  → ChatGPT, Claude — সব streaming ব্যবহার করে

২. PREFIX CACHING (prefill skip)
  System prompt same for all?
  → cache KV once → reuse
  
  Without: ২K system prompt processed each time
  With: ২K processed ONCE → cached
  
  vLLM: --enable-prefix-caching
  SGLang: RadixAttention (automatic)
  
  → TTFT drops ৫০-৮০%!

৩. SPECULATIVE DECODING (২-৩x faster!)
  বড় মডেল ধীর। ছোট মডেল দ্রুত।
  
  Idea:
    → small "draft" model generates N tokens fast
    → big model verifies all N in one pass
    → if correct: accept all (২-৩x speedup!)
    → if wrong: reject and use big model's token
  
  → speedup depends on draft quality
  → Medusa, EAGLE: speculative decoding frameworks
  → vLLM has built-in speculative decoding support

৪. SHORTER PROMPTS
  Less input = faster prefill = lower TTFT
  
  → system prompt: শুধু প্রয়োজনীয়
  → few-shot: ২-৩ examples, not ১০
  → context: compressed, not raw
  → remove boilerplate, repetition

৫. QUANTIZATION (for self-hosted)
  fp16 → int4: ২-৩x faster inference
  → less memory → larger batch → higher throughput
  → per-token latency drops
  
  AWQ, GPTQ: minimal quality loss
  GGUF: optimized for CPU/Mac

৬. BATCHING
  Multiple requests → one batch → parallel processing
  
  → continuous batching (vLLM): new requests 
    join running batch dynamically
  → GPU utilization maxed
  → throughput ৩-৫x vs sequential

৭. GEOGRAPHIC PROXIMITY
  → সার্ভার ইউজারের কাছে
  → US users → US datacenter
  → Asia users → Asia datacenter
  → network RTT: ২০০ms (far) vs ২০ms (near)
  
  → multi-region deployment
  → CDN for static assets

LATENCY BUDGET (per request):

  # ──────────────────────# ───────────# 
  #  Step                 #  Budget    # 
  # ──────────────────────# ───────────# 
  #  Network (user→server)#  < ১০০ms   # 
  #  Input guardrail      #  < ৫০ms    # 
  #  Query processing     #  < ১০০ms   # 
  #  RAG retrieval        #  < ১০০ms   # 
  #  Reranking            #  < ১০০ms   # 
  #  LLM TTFT             #  < ৫০০ms   # 
  #  LLM streaming        #  ~continuous# 
  #  Output guardrail     #  < ৫০ms    # 
  #  Total perceived      #  < ১s      # 
  # ──────────────────────# ───────────# 
  
  → User feels response starts in < ১s
  → rest streams smoothly

BENCHMARKING:
  Always measure before AND after optimization
  
  Tools:
    vLLM benchmark_serving.py
    locust: load testing
    custom: latency histograms
  
  Track: p50 (median), p95, p99
  → p99 = worst-case user experience
  → optimize p99, not just average

<div style="text-align:center;margin:1.3rem 0">
<svg viewBox="0 0 720 250" width="100%" style="max-width:720px;display:block;background:#070a0f;border:1px solid rgba(34,211,238,.18);border-radius:14px" font-family="Noto Sans Bengali,sans-serif" role="img" aria-label="Latency optimization">
<text x="360" y="28" text-anchor="middle" fill="#67e8f9" font-size="14" font-weight="700">Latency Budget — Perceived &lt; ১ সেকেন্ড</text>
<g font-size="11">
 <rect x="40" y="60" width="110" height="34" rx="7" fill="rgba(91,158,255,.12)" stroke="#5b9eff" stroke-width="1.5"/><text x="95" y="82" text-anchor="middle" fill="#e8e6f0">network ১০০ms</text>
 <rect x="170" y="60" width="110" height="34" rx="7" fill="rgba(34,211,238,.12)" stroke="#22d3ee" stroke-width="1.5"/><text x="225" y="82" text-anchor="middle" fill="#e8e6f0">guard ৫০ms</text>
 <rect x="300" y="60" width="110" height="34" rx="7" fill="rgba(34,211,238,.12)" stroke="#22d3ee" stroke-width="1.5"/><text x="355" y="82" text-anchor="middle" fill="#e8e6f0">RAG ২০০ms</text>
 <rect x="430" y="60" width="130" height="34" rx="7" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="1.8"/><text x="495" y="82" text-anchor="middle" fill="#ff6b35">TTFT ৫০০ms</text>
 <rect x="580" y="60" width="110" height="34" rx="7" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/><text x="635" y="82" text-anchor="middle" fill="#e8e6f0">stream</text>
</g>
<line x1="40" y1="112" x2="690" y2="112" stroke="#3d4658" stroke-width="1"/>
<text x="40" y="138" fill="#9290a8" font-size="12">Streaming = ইউজার ২০০ms-এ প্রথম টোকেন দেখে</text>
<g font-size="12">
 <rect x="40" y="160" width="200" height="40" rx="8" fill="#0f1822" stroke="#22d3ee" stroke-width="1.5"/><text x="140" y="185" text-anchor="middle" fill="#e8e6f0">Prefix Caching</text>
 <rect x="260" y="160" width="200" height="40" rx="8" fill="#0f1822" stroke="#3dd6c4" stroke-width="1.5"/><text x="360" y="185" text-anchor="middle" fill="#e8e6f0">Speculative Decoding</text>
 <rect x="480" y="160" width="200" height="40" rx="8" fill="#0f1822" stroke="#b37feb" stroke-width="1.5"/><text x="580" y="185" text-anchor="middle" fill="#e8e6f0">Quantization + Batching</text>
</g>
<text x="360" y="230" text-anchor="middle" fill="#67e8f9" font-size="12" font-weight="700">Streaming + Cache + Speculative → দ্রুততা</text>
</svg>
<div style="font-size:.78rem;color:#5e5c74;margin-top:.4rem;letter-spacing:.04em">চিত্র ৬ · লেটেন্সি — স্ট্রিমিং, প্রিফিক্স ক্যাশ, স্পেকুলেটিভ ডিকোডিং</div>
</div>

<div class="dialogue">সরি'আহ — speed, promptness, quickness। কুরআনে আল্লাহ বলেন — "তাড়াতাড়ি করো ক্ষমার দিকে।" (৩:১৩৩)। সরি'আহ হলো দ্রুত ভালো কাজে। Latency optimization-ও তেমনি — দ্রুত সেবা। ইউজারের সময় মূল্যবান। যে দ্রুত, সে সম্মান করে। যে ধীর, সে অবহেলা করে।</div>
<div class="dialogue en">"Sariah — speed, promptness, quickness. Allah says — 'Race to forgiveness.' (3:133). Sariah is speed in good deeds. Latency optimization too — fast service. User time is valuable. One who is fast, respects. One who is slow, neglects."</div>`,
  senior:{
    title:"Latency Quick Wins — Do Today",
    body:`<p><strong>১. Enable streaming:</strong> Biggest perceived improvement — user sees tokens immediately।</p><p><strong>২. Enable prefix caching:</strong> vLLM flag — system prompt cached, TTFT drops ৫০%+।</p><p><strong>৩. Provider prompt caching:</strong> Anthropic/OpenAI/Google native caching — বড় stable prefix-এ ~৫০-৯০% সস্তা। cache_control flag যোগ করো।</p><p><strong>৪. Shorten system prompt:</strong> Remove unnecessary text — every token saved = faster TTFT।</p><p><strong>৫. Model routing:</strong> Easy queries → small fast model (GPT-5-mini, Claude Haiku, Gemini Flash) — ৩-৫x faster। Reasoning queries → o4-mini (শুধু দরকার হলে)।</p><p><strong>৬. Measure p99:</strong> Use vLLM benchmark_serving.py — know your worst-case latency।</p>`
  }
});

// ══ DOOR 7: VERSIONING ══
doors.push({
  num:7, icon:"🔢", color:"#5b9eff", name:"সংস্করণ কক্ষ",
  subtitle:"The Versioning Chamber", tech:"Model & Data Versioning",
  spirit:"হিফযাতুল ইলম — জ্ঞান সংরক্ষণ",
  secret:"Code version control আছে (Git)। কিন্তু model? Data? Prompt? প্রতিটার version দরকার। Model registry, dataset versioning, prompt management। পুরোনো version ফিরে যাওয়া যায়। যে সংরক্ষণ করে, সে নিরাপদ।",
  recall:{
    q:"সংস্করণ কক্ষে কেন প্রতিটা পরিবর্তন লেখা হয়?",
    qen:"Why is every change recorded in the versioning chamber?",
    a:"কারণ পরিবর্তন ফিরে যেতে হতে পারে। Code = Git। Model = registry। Data = DVC। Prompt = prompt manager। প্রতিটার version। যে সংরক্ষণ করে, সে নিরাপদ। হিফযাতুল ইলম — জ্ঞান সংরক্ষণ।",
    aen:"Because changes may need reverting. Code = Git. Model = registry. Data = DVC. Prompt = manager. Each versioned. One who preserves, is safe. Hifzatul Ilm — knowledge preservation."
  },
  story:`
<p class="scene-setting">সপ্তম কেন্দ্র। সংস্করণ কক্ষ। গ্রন্থাগারিক জাকেরিয়া প্রতিটা পাণ্ডুলিপির প্রতিটা সংস্করণ সংরক্ষণ করেন — v১, v২, v৩। "পরিবর্তন মাঝে মাঝে ভুল," তিনি বললেন। "পুরোনোতে ফিরে যেতে হয়। Code, model, data, prompt — প্রতিটার সংস্করণ। যে সংরক্ষণ করে, সে নিরাপদ।"</p>
<p class="scene-setting en">The seventh center. Versioning chamber. Librarian Zakariya preserves every version of every manuscript — v1, v2, v3. "Changes are sometimes wrong," he said. "Must revert. Code, model, data, prompt — each versioned. One who preserves, is safe."</p>

<div class="dialogue">বেগ কক্ষ বলেছিলেন — দ্রুত হও। কিন্তু আমি বলি — দ্রুত পরিবর্তনের সাথে versioning দরকার। প্রতিটা change — code, model, data, prompt — সংস্করণ ছাড়া নিয়ন্ত্রণ অসম্ভব। কোন version প্রোডাকশনে? কোন dataset ট্রেইনড? কোন prompt বেস্ট? সব version দরকার।</div>
<div class="dialogue en">"The speed chamber said — be fast. But I say — with fast changes, versioning is needed. Every change — code, model, data, prompt — without versions, control is impossible. Which version is in production? Which dataset trained? Which prompt is best? All need versions."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Token Count Explosion:</strong> User sent 100K token prompt — inference took 60 seconds, cost $5. Fix: max input tokens.</div></div>


<div class="code-block">Versioning — Everything Tracked:

FOUR THINGS TO VERSION:

১. CODE (Git)
  → সব commit, branch, tag
  → প্রতিটা change tracked
  
  Tag releases:
    git tag v1.2.3
    git push --tags
  
  → পুরোনো version ফিরে যাও:
    git checkout v1.0.0

২. MODEL (Model Registry)
  কোন model প্রোডাকশনে? কোন সাথে ট্রেইনড?
  
  Tools:
    HuggingFace Hub → model versioning
    MLflow → experiment + model registry
    W&B Models → tracking + registry
    DVC → data + model versioning
  
  Best practice:
    Model tag: {base_model}-{lora_r}-{dataset}-{version}
    Example: llama3.1-8b-r16-medical-v1.2
  
  Registry entry:
    {
      name: "medical-assistant",
      version: "1.2.0",
      base_model: "meta-llama/Llama-3.1-8B",
      training_data: "medical_qa_v3",
      metrics: {accuracy: 0.87, ...},
      created: "2024-12-15",
      status: "production"
    }

৩. DATA (Dataset Versioning)
  কোন dataset দিয়ে ট্রেইনড? RAG এ কোন docs?
  
  Tools:
    DVC → Git for data
    HuggingFace Datasets → versioned
    LakeFS → data lake versioning
  
  Best practice:
    Dataset tag: {name}-{description}-{version}
    Example: medical_qa-5k-curated-v3
  
  → dataset changed → new version
  → old version preserved (reproducibility)

৪. PROMPT (Prompt Management)
  প্রতিটা prompt version tracked!
  
  Tools:
    Langfuse → prompt management
    Promptflow (Microsoft) → prompt versioning
    LangSmith → prompt registry
    Custom: Git + prompt files
  
  Best practice:
    prompt_id: "medical-qa-system-prompt"
    version: 4
    template: "You are a medical..."
    eval_score: 0.89
    status: "production"
    
    → prompt change → new version → eval → compare

REPRODUCIBILITY:
  কোন model + কোন data + কোন prompt + কোন code
  = একটা specific result
  
  সব versioned → reproduce possible:
    "Run model v1.2 on dataset v3 with prompt v4 
     and code commit abc123"
  → exact same result

MODEL LIFECYCLE:

  # ────────#      # ────────#      # ──────────# 
  #  Dev    # ────→#  Staging# ────→# Production# 
  #  v0.x   #      #  v1.0-rc#      #  v1.0     # 
  # ────────#      # ────────#      # ──────────# 
       ↑                             # 
       #         # ────────#            # 
       # ───────→# Archive # ←──────────# 
                #  v0.9   #  (rollback target)
                # ────────# 
  
  → new model goes through stages
  → each stage versioned
  → rollback target always preserved

MODEL REGISTRY FLOW (MLflow):

  # Log model after training
  mlflow.log_model(model, "model")
  
  # Register
  result = mlflow.register_model(
    "runs:/abc123/model",
    "MedicalAssistant"
  )
  
  # Transition stage
  client.transition_model_version_stage(
    name="MedicalAssistant",
    version=3,
    stage="Production"
  )
  
  # Old version → Archived (rollback target)

A/B TESTING WITH VERSIONS:
  v1 (current production) vs v2 (new)
  → ৫০/৫০ traffic split
  → compare: accuracy, latency, cost, satisfaction
  → winner → production
  → loser → archived</div>

<div style="text-align:center;margin:1.3rem 0">
<svg viewBox="0 0 720 290" width="100%" style="max-width:720px;display:block;background:#070a0f;border:1px solid rgba(34,211,238,.18);border-radius:14px" font-family="Noto Sans Bengali,sans-serif" role="img" aria-label="Versioning and model registry">
<defs><marker id="m7a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#3dd6c4"/></marker></defs>
<text x="360" y="28" text-anchor="middle" fill="#67e8f9" font-size="14" font-weight="700">চারটি সংস্করণ — Code · Model · Data · Prompt</text>
<g font-size="12">
 <rect x="40" y="52" width="120" height="36" rx="7" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/><text x="100" y="75" text-anchor="middle" fill="#e8e6f0">Code · Git</text>
 <rect x="40" y="98" width="120" height="36" rx="7" fill="rgba(34,211,238,.12)" stroke="#22d3ee" stroke-width="1.5"/><text x="100" y="121" text-anchor="middle" fill="#e8e6f0">Model · MLflow</text>
 <rect x="40" y="144" width="120" height="36" rx="7" fill="rgba(61,214,196,.12)" stroke="#3dd6c4" stroke-width="1.5"/><text x="100" y="167" text-anchor="middle" fill="#e8e6f0">Data · DVC</text>
 <rect x="40" y="190" width="120" height="36" rx="7" fill="rgba(179,127,235,.12)" stroke="#b37feb" stroke-width="1.5"/><text x="100" y="213" text-anchor="middle" fill="#e8e6f0">Prompt · Langfuse</text>
</g>
<rect x="280" y="92" width="160" height="96" rx="10" fill="rgba(34,211,238,.07)" stroke="#67e8f9" stroke-width="1.8"/>
<text x="360" y="120" text-anchor="middle" fill="#67e8f9" font-size="13" font-weight="700">Registry</text>
<text x="360" y="142" text-anchor="middle" fill="#9290a8" font-size="11">v1.2.3 + commit hash</text>
<text x="360" y="162" text-anchor="middle" fill="#9290a8" font-size="11">পূর্ণ reproducibility</text>
<g stroke="#3dd6c4" stroke-width="1.5" fill="none">
 <line x1="160" y1="70" x2="276" y2="110" marker-end="url(#m7a)"/>
 <line x1="160" y1="116" x2="276" y2="120" marker-end="url(#m7a)"/>
 <line x1="160" y1="162" x2="276" y2="150" marker-end="url(#m7a)"/>
 <line x1="160" y1="208" x2="276" y2="170" marker-end="url(#m7a)"/>
</g>
<g font-size="12">
 <rect x="500" y="60" width="70" height="34" rx="7" fill="rgba(255,159,64,.10)" stroke="#ff9f40" stroke-width="1.5"/><text x="535" y="82" text-anchor="middle" fill="#ff9f40">Dev</text>
 <rect x="500" y="106" width="70" height="34" rx="7" fill="rgba(91,158,255,.12)" stroke="#5b9eff" stroke-width="1.5"/><text x="535" y="128" text-anchor="middle" fill="#5b9eff">Staging</text>
 <rect x="500" y="152" width="70" height="34" rx="7" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/><text x="535" y="174" text-anchor="middle" fill="#52c41a">Prod</text>
 <rect x="500" y="198" width="70" height="34" rx="7" fill="rgba(146,144,168,.10)" stroke="#9290a8" stroke-width="1.5"/><text x="535" y="220" text-anchor="middle" fill="#9290a8">Archive</text>
</g>
<g stroke="#3dd6c4" stroke-width="1.5" fill="none">
 <line x1="440" y1="120" x2="496" y2="77" marker-end="url(#m7a)"/>
 <line x1="570" y1="123" x2="596" y2="135" marker-end="url(#m7a)"/>
 <path d="M535,186 L535,196" marker-end="url(#m7a)"/>
</g>
<text x="640" y="145" fill="#9290a8" font-size="11">promote</text>
<text x="640" y="190" fill="#9290a8" font-size="11">rollback</text>
<text x="360" y="272" text-anchor="middle" fill="#3dd6c4" font-size="12" font-weight="700">lifecycle — Dev → Staging → Prod → Archive</text>
</svg>
<div style="font-size:.78rem;color:#5e5c74;margin-top:.4rem;letter-spacing:.04em">চিত্র ৭ · সংস্করণ — কোড, মডেল, ডেটা, প্রম্পট এক রেজিস্ট্রিতে</div>
</div>

<div class="dialogue">হিফযাতুল ইলম — preservation of knowledge। ইসলামী ঐতিহ্যে জ্ঞান সংরক্ষণ অত্যন্ত গুরুত্বপূর্ণ — হাদিস লেখা, মুখস্থ করা, সংকলন করা। LLMOps versioning-ও তেমনি — জ্ঞান (model, data, prompt, code) সংরক্ষণ। প্রতিটা version সংরক্ষিত = প্রতিটা পদক্ষেপ traceable। যে সংরক্ষণ করে, সে নিরাপদ।</div>
<div class="dialogue en">"Hifzatul Ilm — preservation of knowledge. In Islamic tradition, knowledge preservation is paramount — writing hadith, memorizing, compiling. LLMOps versioning too — preserving knowledge (model, data, prompt, code). Each version preserved = each step traceable. One who preserves, is safe."</div>`,
  senior:{
    title:"Versioning Start — Minimum Setup",
    body:`<p><strong>Code:</strong> Git — already have this। Tag releases: git tag v1.0।</p><p><strong>Model:</strong> MLflow (free) বা HuggingFace Hub। Log every model with training metadata।</p><p><strong>Data:</strong> DVC (free) — Git for data। dvc add + dvc push।</p><p><strong>Prompt:</strong> Langfuse prompt management বা simple JSON files in Git। Version each prompt change।</p><p><strong>Production rule:</strong> Never deploy unversioned model/prompt। Always know exactly what is running and how to rollback।</p>`
  }
});

// ══ DOOR 8: A/B TESTING ══
doors.push({
  num:8, icon:"🧪", color:"#b37feb", name:"পরীক্ষা কক্ষ",
  subtitle:"The Experiment Chamber", tech:"A/B Testing for LLMs",
  spirit:"ইখতিবার — পরীক্ষা ও তুলনা",
  secret:"নতুন model বা prompt ভালো? অনুমান নয় — পরীক্ষা। A/B test: দুটি version → ভাগ করে traffic → তুলনা → বিজয়ী। LLM-এ traditional A/B + quality eval + cost/latency। যে পরীক্ষা করে, সে জানে। যে অনুমান করে, সে ভুল করে।",
  recall:{
    q:"পরীক্ষা কক্ষে কেন দুটি পণ্য একসাথে পরীক্ষা করা হয়?",
    qen:"Why are two products tested together?",
    a:"কারণ তুলনা ছাড়া সেরা জানা যায় না। A/B test ঠিক তেমনি — দুটি version, ভাগ করে traffic, তুলনা করো। যে পরীক্ষা করে, সে জানে। যে অনুমান করে, সে ভুল করে। ইখতিবার।",
    aen:"Because without comparison, the best can't be known. A/B tests exactly that — two versions, split traffic, compare. One who tests, knows. One who guesses, errs. Ikhtibar."
  },
  story:`
<p class="scene-setting">অষ্টম কেন্দ্র। পরীক্ষা কক্ষ। দুটি একই রকম পণ্য — পাশাপাশি। কিন্তু কোনটা ভালো? গ্রাহকদের দুই ভাগ — অর্ধেক প্রথমটা, অর্ধেক দ্বিতীয়টা। প্রতিক্রিয়া তুলনা করো। "অনুমান নয়," পরীক্ষক রাইসা বললেন। "পরীক্ষা। নতুন model বা prompt ভালো? পরীক্ষা করে জানো।"</p>
<p class="scene-setting en">The eighth center. Experiment chamber. Two identical-looking products — side by side. But which is better? Split customers — half get the first, half the second. Compare reactions. "Don't guess," Tester Raisha said. "Test. New model or prompt better? Know by testing."</p>

<div class="dialogue">সংস্করণ কক্ষ বলেছিলেন — version সংরক্ষণ করো। কিন্তু আমি বলি — version সংরক্ষণ শুরু। কোন version ভালো? কীভাবে জানবে? A/B testing। দুটি version পাশাপাশি। Traffic ভাগ করো। তুলনা করো। বিজয়ী নির্বাচন করো। অনুমান নয় — প্রমাণ।</div>
<div class="dialogue en">"The versioning chamber said — preserve versions. But I say — version preservation is the start. Which version is better? How to know? A/B testing. Two versions side by side. Split traffic. Compare. Select winner. Not guessing — proof."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Fallback Model:</strong> Primary model crashed — entire service down. Fix: always have a fallback model.</div></div>


<div class="code-block">A/B Testing for LLMs — Data-Driven Decisions:

WHAT TO A/B TEST:
  → model versions (v1 vs v2)
  → prompt versions (system prompt A vs B)
  → RAG configs (chunk size, retrieval method)
  → parameters (temperature, top_p)
  → guardrail settings (strict vs lenient)

TRADITIONAL A/B + LLM SPECIFIC:

  Traditional metrics:
    → click-through rate
    → conversion rate
    → bounce rate
    → time on page
  
  LLM-specific metrics:
    → response quality (eval score)
    → user satisfaction (thumbs up/down)
    → latency (p50, p95, p99)
    → cost per query
    → guardrail block rate
    → hallucination rate

A/B TEST SETUP:

  # ──────────────────────────────────────# 
  #  Traffic Split                        # 
  #                                       # 
  #    Users ──→ Hash(user_id) % 100      # 
  #                                       # 
  #    ০-৪৯%  → Version A (control)       # 
  #    ৫০-৯৯% → Version B (treatment)    # 
  # ──────────────────────────────────────# 
  
  → consistent: same user always gets same version
  → random: no selection bias
  → enough traffic: statistical significance

LLM A/B METRICS:

  Version A (current):
    eval_score: ০.৮৫
    satisfaction: ৪.২/৫
    latency_p95: ২.১s
    cost/query: $০.০৩
  
  Version B (new):
    eval_score: ০.৮৯
    satisfaction: ৪.৫/৫
    latency_p95: ১.৮s
    cost/query: $০.০২
  
  → B wins on ALL metrics → promote!

STATISTICAL SIGNIFICANCE:
  → কত কোয়েরি দরকার?
  → depends on effect size + variance
  
  Rule of thumb:
    → ১% improvement: ১০K+ queries per variant
    → ৫% improvement: ১K+ queries
    → ১০% improvement: ৫০০+ queries
  
  Tools:
    → scipy.stats (t-test, Mann-Whitney)
    → Bayesian: pymc, bandit algorithms

MULTIVARIATE (A/B/C/D...):
  → শুধু ২ নয় — একাধিক version
  
  Prompt A vs B vs C vs D
  → each gets ২৫% traffic
  → winner emerges
  
  Caution: more variants = more traffic needed

SHADOW DEPLOYMENT (safest):
  → new model runs in "shadow"
  → production traffic goes to both
  → user sees only production response
  → shadow response logged + compared
  
  → zero user risk
  → full production traffic test
  → no user-visible errors

CANARY DEPLOYMENT:
  → new version: ৫% traffic (real users)
  → monitor: errors, latency, satisfaction
  → good → ২৫% → ৫০% → ১০০%
  → bad → ০% (rollback)

BANDIT ALGORITHMS (multi-armed bandit):
  → traffic dynamically allocated
  → winning variant gets more traffic over time
  → loser gets less
  → converges faster than fixed A/B
  
  → Thompson Sampling, UCB
  → tools: Eppo, Statsig

WHEN TO STOP:
  → statistical significance reached
  → OR: predefined time (২ weeks)
  → OR: clear winner/loser
  → OR: budget exhausted

COMMON MISTAKES:
  ❌ Too short: ১ day is noise
  ❌ Too many metrics: pick ২-৩ primary
  ❌ No hypothesis: "let's see what happens"
  ❌ Peeking: checking too early → false positive
  ❌ Not enough traffic: underpowered test

LLM-SPECIFIC A/B TOOLING:
  → LangSmith: A/B testing built-in
  → Langfuse: experiment tracking
  → Portkey: model routing + A/B
  → Custom: feature flags + eval pipeline</div>

<div style="text-align:center;margin:1.3rem 0">
<svg viewBox="0 0 720 280" width="100%" style="max-width:720px;display:block;background:#070a0f;border:1px solid rgba(34,211,238,.18);border-radius:14px" font-family="Noto Sans Bengali,sans-serif" role="img" aria-label="Scaling and A/B testing">
<defs><marker id="m8a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#3dd6c4"/></marker></defs>
<text x="360" y="28" text-anchor="middle" fill="#67e8f9" font-size="14" font-weight="700">A/B পরীক্ষা — Shadow → Canary → Full</text>
<circle cx="80" cy="90" r="22" fill="rgba(34,211,238,.10)" stroke="#22d3ee" stroke-width="1.5"/>
<text x="80" y="95" text-anchor="middle" fill="#e8e6f0" font-size="11">user</text>
<g font-size="11">
 <rect x="160" y="48" width="180" height="34" rx="7" fill="rgba(91,158,255,.10)" stroke="#5b9eff" stroke-width="1.5"/><text x="250" y="70" text-anchor="middle" fill="#5b9eff">v1 · control · ৫০%</text>
 <rect x="160" y="98" width="180" height="34" rx="7" fill="rgba(179,127,235,.12)" stroke="#b37feb" stroke-width="1.8"/><text x="250" y="120" text-anchor="middle" fill="#b37feb">v2 · treatment · ৫০%</text>
</g>
<g stroke="#3dd6c4" stroke-width="1.5" fill="none">
 <line x1="102" y1="82" x2="156" y2="65" marker-end="url(#m8a)"/>
 <line x1="102" y1="98" x2="156" y2="115" marker-end="url(#m8a)"/>
</g>
<rect x="400" y="60" width="140" height="64" rx="9" fill="rgba(34,211,238,.07)" stroke="#67e8f9" stroke-width="1.8"/>
<text x="470" y="88" text-anchor="middle" fill="#67e8f9" font-size="13" font-weight="700">Metrics</text>
<text x="470" y="108" text-anchor="middle" fill="#9290a8" font-size="10">quality · latency · cost · satisfaction</text>
<g stroke="#3dd6c4" stroke-width="1.5" fill="none">
 <line x1="340" y1="65" x2="396" y2="80" marker-end="url(#m8a)"/>
 <line x1="340" y1="115" x2="396" y2="110" marker-end="url(#m8a)"/>
</g>
<rect x="600" y="60" width="100" height="64" rx="9" fill="rgba(82,196,26,.10)" stroke="#52c41a" stroke-width="1.5"/>
<text x="650" y="88" text-anchor="middle" fill="#52c41a" font-size="12" font-weight="700">winner</text>
<text x="650" y="108" text-anchor="middle" fill="#9290a8" font-size="10">promote → ১০০%</text>
<line x1="540" y1="92" x2="596" y2="92" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#m8a)"/>
<text x="40" y="178" fill="#67e8f9" font-size="13" font-weight="700">Scaling — Auto-scale</text>
<g font-size="11">
 <rect x="40" y="194" width="50" height="30" rx="6" fill="rgba(34,211,238,.08)" stroke="#22d3ee" stroke-width="1.5"/><text x="65" y="214" text-anchor="middle">pod</text>
 <rect x="100" y="194" width="50" height="30" rx="6" fill="rgba(34,211,238,.08)" stroke="#22d3ee" stroke-width="1.5"/><text x="125" y="214" text-anchor="middle">pod</text>
 <text x="165" y="214" fill="#3dd6c4" font-size="14">+</text>
 <rect x="185" y="194" width="50" height="30" rx="6" fill="rgba(34,211,238,.08)" stroke="#22d3ee" stroke-width="1.5"/><text x="210" y="214" text-anchor="middle">pod</text>
 <rect x="245" y="194" width="50" height="30" rx="6" fill="rgba(34,211,238,.08)" stroke="#22d3ee" stroke-width="1.5"/><text x="270" y="214" text-anchor="middle">pod</text>
 <text x="310" y="214" fill="#3dd6c4" font-size="14">+</text>
 <rect x="330" y="194" width="50" height="30" rx="6" fill="rgba(255,107,53,.12)" stroke="#ff6b35" stroke-width="1.8" stroke-dasharray="3 2"/><text x="355" y="214" text-anchor="middle" fill="#ff6b35">new</text>
 <text x="400" y="214" fill="#9290a8" font-size="12">traffic বাড়লে → HPA স্বয়ংক্রিয়ভাবে পড যোগ করে</text>
</g>
<text x="360" y="258" text-anchor="middle" fill="#3dd6c4" font-size="12" font-weight="700">পরীক্ষা ও স্কেলিং — ডেটা-চালিত সিদ্ধান্ত</text>
</svg>
<div style="font-size:.78rem;color:#5e5c74;margin-top:.4rem;letter-spacing:.04em">চিত্র ৮ · স্কেলিং ও A/B — ট্রাফিক ভাগ, মেট্রিক তুলনা, স্বয়ংক্রিয় স্কেল</div>
</div>

<div class="dialogue">ইখতিবার — test, trial, experiment। কুরআনে আল্লাহ বলেন — "আমি তোমাদের পরীক্ষা করি।" (২১:৩৫)। পরীক্ষা শাস্তি নয় — উন্নতির পথ। A/B testing-ও তেমনি — পরীক্ষা করে সেরা খুঁজো। যে পরীক্ষা করে, সে জানে। যে অনুমান করে, সে ভুল করে। ইখতিবার — পরীক্ষার মাধ্যমে সত্য।</div>
<div class="dialogue en">"Ikhtibar — test, trial, experiment. Allah says — 'We test you.' (21:35). Testing isn't punishment — it's the path to improvement. A/B testing too — find the best through experimentation. One who tests, knows. One who guesses, errs. Ikhtibar — truth through testing."</div>`,
  senior:{
    title:"A/B Test Plan — First Experiment",
    body:`<p><strong>Pick one variable:</strong> system prompt (concise vs detailed)।</p><p><strong>Primary metric:</strong> user satisfaction (thumbs up rate)।</p><p><strong>Secondary:</strong> latency, cost, eval score।</p><p><strong>Traffic:</strong> ৫০/৫০ split by user_id hash।</p><p><strong>Duration:</strong> ৭ days minimum (or ১K queries per variant)।</p><p><strong>Decision rule:</strong> +৫% satisfaction AND latency not worse → promote new।</p><p><strong>Tool:</strong> LangSmith বা simple feature flag (Redis) + eval pipeline।</p>`
  }
});

// ══ DOOR 9: INCIDENT RESPONSE ══
doors.push({
  num:9, icon:"🚨", color:"#ef4444", name:"জরুরি কক্ষ",
  subtitle:"The Emergency Chamber", tech:"Incident Response",
  spirit:"ইনযিম — সংকট ব্যবস্থাপনা",
  secret:"প্রোডাকশনে সবসময় কিছু ভাঙে। প্রশ্ন নয় কখন — কী করবে। Detect → contain → investigate → fix → learn। Kill switch, rollback, communication, post-mortem। যে প্রস্তুত, সে টিকে। যে অপ্রস্তুত, সে পড়ে।",
  recall:{
    q:"জরুরি কক্ষে কেন সবসময় প্রস্তুত থাকতে হয়?",
    qen:"Why must you always be ready in the emergency chamber?",
    a:"কারণ সবসময় কিছু ভাঙে। প্রশ্ন কখন নয় — কী করবে। Detect, contain, fix, learn। Kill switch, rollback। যে প্রস্তুত, সে টিকে। ইনযিম — সংকট ব্যবস্থাপনা।",
    aen:"Because something always breaks. Not when — but what to do. Detect, contain, fix, learn. Kill switch, rollback. One who is prepared, survives. Nazim — crisis management."
  },
  story:`
<p class="scene-setting">নবম কেন্দ্র। জরুরি কক্ষ। একটা সাইরেন বেজে উঠল। "সার্ভার ক্র্যাশ!" জরুরি প্রতিক্রিয়া দল ছুটল। প্রধান উমর শান্ত কণ্ঠে বললেন — "ভয় নয়, প্রস্তুতি। Kill switch আছে, rollback আছে, playbook আছে। প্রতিটা সমস্যার একটা সমাধান। যে প্রস্তুত, সে শান্ত। যে অপ্রস্তুত, সে আতঙ্কিত।"</p>
<p class="scene-setting en">The ninth center. Emergency chamber. A siren blared. "Server crash!" The incident response team rushed. Chief Umar said calmly — "Not fear, preparation. Kill switch exists, rollback exists, playbook exists. Every problem has a solution. One who is prepared, is calm. One who is unprepared, panics."</p>

<div class="dialogue">A/B পরীক্ষা কক্ষ বলেছিলেন — পরীক্ষা করো। কিন্তু আমি বলি — পরীক্ষা করলেও ভাঙে। প্রোডাকশনে কিছু ভাঙবেই। সার্ভার ক্র্যাশ, model regression, cost spike, security breach। প্রশ্ন কখন নয় — কী করবে। Incident response — প্রস্তুতি ও প্রতিক্রিয়া।</div>
<div class="dialogue en">"The A/B chamber said — test. But I say — even with testing, things break. In production, something will break. Server crash, model regression, cost spike, security breach. Not when — but what to do. Incident response — preparation and reaction."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — GPU Underutilization:</strong> Model used 10% of GPU — 90% wasted. Fix: optimize batching, use tensor parallelism.</div></div>


<div class="code-block">Incident Response — When Things Break:

LLM-SPECIFIC INCIDENTS:

  Type ১: DEGRADATION
    → quality suddenly drops
    → eval scores fall, user complaints rise
    → cause: bad model update, data drift, 
      prompt regression
    
  Type ২: OUTAGE
    → system unavailable
    → API timeout, GPU OOM, dependency failure
    → cause: traffic spike, infra failure
    
  Type ৩: COST EXPLOSION
    → daily cost ১০x normal
    → cause: bug (infinite loop), abuse, 
      viral traffic
    
  Type ৪: SECURITY
    → prompt injection breach, data leak
    → cause: new attack vector, guardrail bypass
    
  Type ৫: LATENCY
    → response time ৩x normal
    → cause: cold start, congestion, 
      batch saturation

INCIDENT RESPONSE PLAYBOOK:

  # ────────────────────────────────────────# 
  #  PHASE ১: DETECT (alert fires)         # 
  #  → classify severity                    # 
  #  → acknowledge alert                    # 
  #  → assess initial scope                 # 
  #  Time: < ৫ min                          # 
  # ────────────────────────────────────────# 
  #  PHASE ২: CONTAIN (stop the bleeding)  # 
  #  → ROLLBACK to last known good          # 
  #  → KILL SWITCH if critical              # 
  #  → throttle traffic                     # 
  #  → disable problematic feature/tool     # 
  #  Time: < ১৫ min                         # 
  # ────────────────────────────────────────# 
  #  PHASE ৩: INVESTIGATE (understand)     # 
  #  → check logs, traces                   # 
  #  → identify root cause                  # 
  #  → assess impact (how many users?)      # 
  #  → data exposure assessment             # 
  #  Time: < ২ hr                           # 
  # ────────────────────────────────────────# 
  #  PHASE ৪: REMEDIATE (fix)              # 
  #  → patch the root cause                 # 
  #  → test fix in staging                  # 
  #  → deploy fix                           # 
  #  → verify resolution                    # 
  #  Time: < ৪ hr                           # 
  # ────────────────────────────────────────# 
  #  PHASE ৫: COMMUNICATE                  # 
  #  → notify affected users                # 
  #  → status page update                   # 
  #  → stakeholders informed                # 
  #  Time: throughout                        # 
  # ────────────────────────────────────────# 
  #  PHASE ৬: POST-MORTEM (learn)          # 
  #  → document timeline                    # 
  #  → what went well, what didn't          # 
  #  → root cause (5 whys)                  # 
  #  → action items (prevent recurrence)    # 
  #  → add to red team / eval suite         # 
  #  Time: within ৪৮ hr                     # 
  # ────────────────────────────────────────# 

KILL SWITCH:
  সবকিছু থামাও — জরুরি পরিস্থিতিতে।
  
  Implementation:
    # Feature flag / kill switch
    if kill_switch_enabled():
      return "Service temporarily unavailable. 
              We are working on it."
    
    # In Kubernetes: scale to 0
    kubectl scale deployment llm --replicas=0
    
    # In load balancer: redirect to static page
  
  → কখন ব্যবহার করবে?
    → cost explosion (> budget ৩x)
    → security breach (data leak)
    → total quality collapse
    → cascade failure

ROLLBACK:
  নতুন version খারাপ → পুরোনোতে ফিরে যাও
  
  Kubernetes:
    kubectl rollout undo deployment/llm
  
  Model registry:
    client.transition_model_version_stage(
      name="model", version=prev, 
      stage="Production")
  
  Feature flag:
    flag.set("model_version", "v1.2")
  
  → সবসময় পুরোনো version archived রাখো

COMMUNICATION TEMPLATES:

  Internal (Slack):
    🚨 INCIDENT [severity]
    Status: investigating/contained/resolved
    Impact: [users affected]
    Action: [what we're doing]
    Next update: [time]

  User-facing (status page):
    "We're experiencing issues with [feature].
     Our team is investigating. 
     Follow: status.example.com"

  Post-resolution:
    "The issue has been resolved. 
     [Brief explanation]. 
     We're implementing measures to prevent 
     recurrence. Thank you for your patience."

POST-MORTEM TEMPLATE:
  
  Incident: [title]
  Date: [date]
  Severity: [S1/S2/S3]
  
  Summary: [১-২ sentences]
  
  Timeline:
    ১০:০০ - Alert fired
    ১০:০৫ - Acknowledged
    ১০:১৫ - Rolled back
    ১১:৩০ - Root cause identified
    ১৩:০০ - Fix deployed
  
  Root Cause (৫ Whys):
    ১. Why did it fail? → model regression
    ২. Why regression? → eval gate was bypassed
    ৩. Why bypassed? → eval threshold too low
    ৪. Why low? → set in early dev, never updated
    ৫. Why never updated? → no ownership
  
  Action Items:
    → [owner] Update eval threshold (by X)
    → [owner] Add regression test (by Y)
    → [owner] Assign eval ownership (by Z)

ON-CALL ROTATION:
  → ২৪/৭ coverage
  → primary + secondary on-call
  → escalation: primary → secondary → manager
  → PagerDuty / Opsgenie
  → follow-the-sun: regional teams</div>

<div style="text-align:center;margin:1.3rem 0">
<svg viewBox="0 0 580 250" width="100%" style="max-width:580px;display:block;background:#070a0f;border:1px solid rgba(34,211,238,.18);border-radius:14px" font-family="Noto Sans Bengali,sans-serif" role="img" aria-label="Incident response lifecycle">
<defs><marker id="m9a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#3dd6c4"/></marker></defs>
<text x="290" y="28" text-anchor="middle" fill="#67e8f9" font-size="14" font-weight="700">Incident Lifecycle — সংকট থেকে শিক্ষা</text>
<g font-size="11" fill="#e8e6f0">
 <rect x="20" y="58" width="90" height="40" rx="8" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="1.8"/><text x="65" y="83" text-anchor="middle" fill="#ff6b35">Alert</text>
 <rect x="130" y="58" width="90" height="40" rx="8" fill="#0f1822" stroke="#22d3ee" stroke-width="1.5"/><text x="175" y="83" text-anchor="middle">Detect</text>
 <rect x="240" y="58" width="90" height="40" rx="8" fill="#0f1822" stroke="#22d3ee" stroke-width="1.5"/><text x="285" y="83" text-anchor="middle">Contain</text>
 <rect x="350" y="58" width="90" height="40" rx="8" fill="#0f1822" stroke="#22d3ee" stroke-width="1.5"/><text x="395" y="83" text-anchor="middle">Investigate</text>
 <rect x="460" y="58" width="100" height="40" rx="8" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/><text x="510" y="83" text-anchor="middle" fill="#52c41a">Fix &amp; Learn</text>
</g>
<g stroke="#3dd6c4" stroke-width="1.5" fill="none">
 <line x1="110" y1="78" x2="124" y2="78" marker-end="url(#m9a)"/>
 <line x1="220" y1="78" x2="234" y2="78" marker-end="url(#m9a)"/>
 <line x1="330" y1="78" x2="344" y2="78" marker-end="url(#m9a)"/>
 <line x1="440" y1="78" x2="454" y2="78" marker-end="url(#m9a)"/>
</g>
<text x="20" y="132" fill="#67e8f9" font-size="12" font-weight="700">Severity</text>
<g font-size="10">
 <rect x="100" y="116" width="80" height="28" rx="6" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="1.5"/><text x="140" y="135" text-anchor="middle" fill="#ff6b35">S1 সর্বোচ্চ</text>
 <rect x="195" y="116" width="80" height="28" rx="6" fill="rgba(245,158,11,.12)" stroke="#f59e0b" stroke-width="1.5"/><text x="235" y="135" text-anchor="middle" fill="#f59e0b">S2 গুরুতর</text>
 <rect x="290" y="116" width="80" height="28" rx="6" fill="rgba(34,211,238,.10)" stroke="#22d3ee" stroke-width="1.5"/><text x="330" y="135" text-anchor="middle" fill="#e8e6f0">S3 সাধারণ</text>
</g>
<text x="20" y="180" fill="#67e8f9" font-size="12" font-weight="700">Response</text>
<g font-size="10">
 <rect x="100" y="164" width="100" height="28" rx="6" fill="#0f1822" stroke="#3dd6c4" stroke-width="1.5"/><text x="150" y="183" text-anchor="middle" fill="#e8e6f0">Kill Switch</text>
 <rect x="215" y="164" width="100" height="28" rx="6" fill="#0f1822" stroke="#3dd6c4" stroke-width="1.5"/><text x="265" y="183" text-anchor="middle" fill="#e8e6f0">Rollback</text>
 <rect x="330" y="164" width="100" height="28" rx="6" fill="#0f1822" stroke="#3dd6c4" stroke-width="1.5"/><text x="380" y="183" text-anchor="middle" fill="#e8e6f0">PagerDuty</text>
 <rect x="445" y="164" width="115" height="28" rx="6" fill="#0f1822" stroke="#3dd6c4" stroke-width="1.5"/><text x="502" y="183" text-anchor="middle" fill="#e8e6f0">Post-Mortem</text>
</g>
<text x="290" y="228" text-anchor="middle" fill="#9290a8" font-size="11" font-style="italic">নাযিম — সংকটে দৃঢ়তা, প্রস্তুতি, সমাধান</text>
</svg>
<div style="font-size:.78rem;color:#5e5c74;margin-top:.4rem;letter-spacing:.04em">চিত্র ৯ · ইনসিডেন্ট রেসপন্স — শনাক্ত থেকে শিক্ষা পর্যন্ত</div>
</div>

<div class="dialogue">নাযিম — crisis management, organization during emergency। কুরআনে আল্লাহ বলেন — "তোমরা বিপদে দৃঢ় থাকো।" (৩:১৪৬)। বিপদে দৃঢ়তা = নাযিম। Incident response-ও তেমনি — সংকটে শান্ত, প্রস্তুত, দৃঢ়। যে দৃঢ়, সে সমাধান করে। যে আতঙ্কিত, সে আরও বিপদ বানায়।</div>
<div class="dialogue en">"Nazim — crisis management, organization during emergency. Allah says — 'Be firm in adversity.' (3:146). Firmness in adversity = nazim. Incident response too — calm, prepared, firm in crisis. One who is firm, solves. One who panics, makes things worse."</div>`,
  senior:{
    title:"Incident Prep Checklist — Before It Happens",
    body:`<p>☐ Kill switch: tested, documented, one-click</p><p>☐ Rollback: tested, < ১ min execution</p><p>☐ Alerting: PagerDuty/Slack for critical alerts</p><p>☐ On-call rotation: ২৪/৭, primary + secondary</p><p>☐ Playbook: detect → contain → fix → communicate → post-mortem</p><p>☐ Status page: ready template</p><p>☐ Post-mortem template: standard format</p><p>☐ Last known good: always archived, ready to deploy</p>`
  }
});

// ══ DOOR 10: SYNTHESIS ══
doors.push({
  num:10, icon:"🏙️", color:"#67e8f9", name:"সমন্বয়ের শহর",
  subtitle:"The Synthesis City", tech:"Complete LLMOps Architecture",
  spirit:"মাদানিয়াহ — সুসংগঠিত নগরী",
  secret:"নয়টি কেন্দ্র পেরিয়েছ। Serving, deployment, CI/CD, monitoring, cost, latency, versioning, A/B testing, incident response। সব একসাথে = production-grade LLMOps। প্রোটোটাইপ থেকে প্রোডাকশন। এটাই নিয়ন্ত্রণ কেন্দ্রের শিল্প।",
  recall:{
    q:"শহর কেন সব কেন্দ্র একসাথে ধারণ করে?",
    qen:"Why does the city hold all centers together?",
    a:"কারণ শহর = সমন্বয়। নয়টি কেন্দ্র — serving থেকে incident response — একসাথে একটা সম্পূর্ণ নগরী। একটাও বাদ দিলে শহর অসম্পূর্ণ। মাদানিয়াহ — সুসংগঠিত নগরী।",
    aen:"Because city = integration. Nine centers — serving to incident response — together form one complete city. Missing one, the city is incomplete. Madaniyah — organized city."
  },
  story:`
<p class="scene-setting">দশম কেন্দ্র। শেষ কেন্দ্র। স্থপতি ইদ্রিস পাহাড়ের উপর দাঁড়িয়ে আছেন — নিচে একটা সম্পূর্ণ শহর। উৎক্ষেপণ প্যাড, প্যাকেজিং কারখানা, স্বয়ংক্রিয় কনভেয়র, পর্যবেক্ষণ টাওয়ার, বাজেট অফিস, বেগ স্টেশন, সংস্করণ গ্রন্থাগার, পরীক্ষা ল্যাব, জরুরি কেন্দ্র। "তুমি নয় কেন্দ্র পেরিয়েছ," তিনি বললেন। "এখন দেখো — সব একসাথে। একটা সম্পূর্ণ শহর। একটাও বাদ দিলে শহর অসম্পূর্ণ।"</p>
<p class="scene-setting en">The tenth center. The last. Architect Idris stands on a hill — below, a complete city. Launch pad, packaging factory, automation conveyor, observation tower, budget office, speed station, versioning library, experiment lab, emergency center. "You've passed nine centers," he said. "Now see — all together. One complete city. Missing one, the city is incomplete."</p>

<div class="dialogue">নয়টি কেন্দ্র পেরিয়েছ। উৎক্ষেপণ বলেছিলেন, serving engine। প্যাকেজিং বলেছিলেন, Docker + Kubernetes। স্বয়ংক্রিয় বলেছিলেন, CI/CD pipeline। পর্যবেক্ষণ বলেছিলেন, monitoring। বাজেট বলেছিলেন, cost optimization। বেগ বলেছিলেন, latency tuning। সংস্করণ বলেছিলেন, versioning। পরীক্ষা বলেছিলেন, A/B testing। জরুরি বলেছিলেন, incident response। এখন — সব একসাথে।</div>
<div class="dialogue en">"You've passed nine centers. Launch said, serving engine. Packaging said, Docker + Kubernetes. Automation said, CI/CD pipeline. Observation said, monitoring. Budget said, cost optimization. Speed said, latency tuning. Versioning said, versioning. Experiment said, A/B testing. Emergency said, incident response. Now — all together."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Deployment Without Eval:</strong> Pushed new model without testing — hallucination rate tripled. Fix: always run eval suite first.</div></div>


<div class="code-block">Complete Production LLMOps Architecture:

# ──────────────────────────────────────────────────# 
#  COMPLETE LLMOps STACK                             # 
# ──────────────────────────────────────────────────# 
#                                                    # 
#   SERVING (Door 1)                                # 
#   # ── vLLM / TGI / SGLang                         # 
#   # ── PagedAttention, continuous batching         # 
#   # ── Prefix caching, tensor parallelism          # 
#   # ── OpenAI-compatible API                        # 
#                                                    # 
#   DEPLOYMENT (Door 2)                              # 
#   # ── Docker containers                            # 
#   # ── Kubernetes (EKS/GKE)                        # 
#   # ── Auto-scaling (HPA)                           # 
#   # ── Load balancer + GPU scheduling               # 
#   # ── Canary / blue-green / rolling               # 
#                                                    # 
#   CI/CD (Door 3)                                   # 
#   # ── GitHub Actions / GitLab CI                  # 
#   # ── Eval gate (Promptfoo / RAGAS)               # 
#   # ── Security tests (Garak)                       # 
#   # ── Docker build + registry push                 # 
#   # ── Canary deploy + auto-rollback               # 
#                                                    # 
#   MONITORING (Door 4)                              # 
#   # ── Langfuse / LangSmith (LLM tracing)          # 
#   # ── Prometheus + Grafana (infra)                # 
#   # ── Quality eval (daily production samples)      # 
#   # ── User feedback tracking                       # 
#   # ── Drift detection                               # 
#                                                    # 
#   COST (Door 5)                                    # 
#   # ── Semantic caching (GPTCache / Redis)         # 
#   # ── Model routing (easy → mini, hard → pro)     # 
#   # ── Prompt compression (LLMLingua)              # 
#   # ── Batch API (৫০% discount)                     # 
#   # ── Cost monitoring + anomaly alerts             # 
#                                                    # 
#   LATENCY (Door 6)                                 # 
#   # ── Streaming (SSE)                              # 
#   # ── Prefix caching (TTFT reduction)             # 
#   # ── Speculative decoding (২-৩x)                  # 
#   # ── Shorter prompts                               # 
#   # ── Geographic proximity (multi-region)         # 
#                                                    # 
#   VERSIONING (Door 7)                              # 
#   # ── Git (code)                                   # 
#   # ── MLflow / HF Hub (models)                     # 
#   # ── DVC (datasets)                               # 
#   # ── Langfuse (prompts)                           # 
#   # ── Full reproducibility                         # 
#                                                    # 
#   A/B TESTING (Door 8)                             # 
#   # ── Traffic split (hash-based)                   # 
#   # ── Shadow deployment (zero risk)                # 
#   # ── Multi-variant experiments                    # 
#   # ── Statistical significance tracking             # 
#   # ── Bandit algorithms (dynamic allocation)      # 
#                                                    # 
#   INCIDENT (Door 9)                                # 
#   # ── Kill switch (one-click stop)                 # 
#   # ── Rollback (< ১ min)                            # 
#   # ── On-call rotation (২৪/৭)                      # 
#   # ── Post-mortem process                           # 
#   # ── Status page + user comms                     # 
#                                                    # 
# ──────────────────────────────────────────────────# 

OPERATIONAL MATURITY MODEL:

  Level ১: Prototype
    → single model, manual deploy, no monitoring
  
  Level ২: Basic Ops
    → Docker deploy, basic logs, manual scaling
  
  Level ৩: CI/CD
    → automated tests + eval gate, canary deploy
  
  Level ৪: Full LLMOps
    → monitoring, cost optimization, A/B testing,
    auto-scaling, versioning
  
  Level ৫: Elite
    → self-healing, predictive scaling, 
    continuous eval, auto-rollback,
    multi-region, chaos engineering

TECH STACK RECOMMENDATION:

  # ─────────────# ──────────────────────────────# 
  #  Component   #  Tool                         # 
  # ─────────────# ──────────────────────────────# 
  #  Serving     #  vLLM                         # 
  #  Container   #  Docker                       # 
  #  Orchestrate #  Kubernetes (EKS/GKE)         # 
  #  CI/CD       #  GitHub Actions               # 
  #  Monitoring  #  Langfuse + Grafana           # 
  #  Eval        #  RAGAS + Promptfoo            # 
  #  Registry    #  MLflow / HF Hub              # 
  #  Cost        #  GPTCache + model routing     # 
  #  A/B         #  LangSmith / feature flags    # 
  #  Incident    #  PagerDuty + runbooks         # 
  # ─────────────# ──────────────────────────────# 

BUDGET (reference):
  Small (১K queries/day): ~$৫০০/month
  Medium (১০K/day): ~$২-৫K/month
  Large (১০০K/day): ~$১০-৩০K/month
  
  → with optimization: ৫০-৮০% less

FROM PROTOTYPE TO PRODUCTION:
  
  Week ১: vLLM serve + basic API
  Week ২: Docker + cloud deploy + health checks
  Week ৩: CI/CD + eval gate + canary
  Week ৪: Monitoring (Langfuse) + cost tracking
  Week ৫: Caching + model routing + streaming
  Week ৬: Versioning + A/B testing
  Week ৭: Incident playbook + on-call
  
  → ৭ weeks: prototype → production-grade</div>

<div class="verse">"যিনি সৃষ্টি করেছেন এবং নিয়মে বেঁধেছেন। যিনি পরিমাপ করেছেন এবং পথ দেখিয়েছেন।"<br>— কুরআন ৮৭:২-৩<br><br>LLMOps হলো সেই নিয়মে বাঁধা — LLM-কে production-এ নিয়মে বাঁধা। পরিমাপ (monitoring), পথ দেখানো (CI/CD), সঠিক পরিমাণ (cost optimization)। প্রোটোটাইপ থেকে প্রোডাকশন — এটাই নিয়ন্ত্রণ কেন্দ্রের শিল্প।</div>

<div style="text-align:center;margin:1.3rem 0">
<svg viewBox="0 0 580 250" width="100%" style="max-width:580px;display:block;background:#070a0f;border:1px solid rgba(34,211,238,.18);border-radius:14px" font-family="Noto Sans Bengali,sans-serif" role="img" aria-label="Complete LLMOps architecture">
<text x="290" y="28" text-anchor="middle" fill="#67e8f9" font-size="14" font-weight="700">LLMOps সম্পূর্ণ স্থাপত্য — দশটি স্তর</text>
<g font-size="10">
 <rect x="20" y="48" width="170" height="32" rx="7" fill="rgba(34,211,238,.10)" stroke="#22d3ee" stroke-width="1.5"/><text x="105" y="69" text-anchor="middle" fill="#e8e6f0">১ Serving · vLLM</text>
 <rect x="200" y="48" width="170" height="32" rx="7" fill="rgba(91,158,255,.10)" stroke="#5b9eff" stroke-width="1.5"/><text x="285" y="69" text-anchor="middle" fill="#e8e6f0">২ Deploy · Kubernetes</text>
 <rect x="380" y="48" width="180" height="32" rx="7" fill="rgba(82,196,26,.10)" stroke="#52c41a" stroke-width="1.5"/><text x="470" y="69" text-anchor="middle" fill="#e8e6f0">৩ CI/CD · Actions</text>
 <rect x="20" y="88" width="170" height="32" rx="7" fill="rgba(34,211,238,.10)" stroke="#22d3ee" stroke-width="1.5"/><text x="105" y="109" text-anchor="middle" fill="#e8e6f0">৪ Monitor · Langfuse</text>
 <rect x="200" y="88" width="170" height="32" rx="7" fill="rgba(34,211,238,.10)" stroke="#22d3ee" stroke-width="1.5"/><text x="285" y="109" text-anchor="middle" fill="#e8e6f0">৫ Cost · Cache + Route</text>
 <rect x="380" y="88" width="180" height="32" rx="7" fill="rgba(34,211,238,.10)" stroke="#22d3ee" stroke-width="1.5"/><text x="470" y="109" text-anchor="middle" fill="#e8e6f0">৬ Latency · Stream</text>
 <rect x="20" y="128" width="170" height="32" rx="7" fill="rgba(91,158,255,.10)" stroke="#5b9eff" stroke-width="1.5"/><text x="105" y="149" text-anchor="middle" fill="#e8e6f0">৭ Version · MLflow</text>
 <rect x="200" y="128" width="170" height="32" rx="7" fill="rgba(34,211,238,.10)" stroke="#22d3ee" stroke-width="1.5"/><text x="285" y="149" text-anchor="middle" fill="#e8e6f0">৮ A/B · LangSmith</text>
 <rect x="380" y="128" width="180" height="32" rx="7" fill="rgba(255,107,53,.10)" stroke="#ff6b35" stroke-width="1.5"/><text x="470" y="149" text-anchor="middle" fill="#e8e6f0">৯ Incident · Runbook</text>
</g>
<rect x="20" y="172" width="540" height="36" rx="8" fill="rgba(103,232,249,.12)" stroke="#67e8f9" stroke-width="2"/><text x="290" y="195" text-anchor="middle" fill="#67e8f9" font-size="13" font-weight="700">১০ Synthesis — সম্পূর্ণ নগরী</text>
<text x="290" y="232" text-anchor="middle" fill="#9290a8" font-size="11" font-style="italic">মাদানিয়াহ — সুসংগঠিত নগরী · প্রোটোটাইপ থেকে প্রোডাকশন</text>
</svg>
<div style="font-size:.78rem;color:#5e5c74;margin-top:.4rem;letter-spacing:.04em">চিত্র ১০ · সম্পূর্ণ LLMOps স্থাপত্য — দশটি স্তরের সমন্বয়</div>
</div>

<div class="secret-box"><div class="label">দশম কেন্দ্র — সমন্বয়</div><div class="text">🏙️ LLMOps = Serving + Deployment + CI/CD + Monitoring + Cost + Latency + Versioning + A/B + Incidents।<br><small>প্রোটোটাইপ থেকে প্রোডাকশন। একটাও বাদ দিলে শহর অসম্পূর্ণ।</small></div></div>`
});
