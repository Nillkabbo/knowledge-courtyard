// ════════════════════════════════════════
// নিয়ন্ত্রণ কেন্দ্র — DOORS 1-5
// LLMOps: Serving → Latency
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: MODEL SERVING ══
doors.push({
  num:1, icon:"🚀", color:"#22d3ee", name:"উৎক্ষেপণ প্যাড",
  subtitle:"The Launch Pad", tech:"Model Serving Infrastructure",
  spirit:"তাহকিক — বাস্তবায়ন, সত্যিকারের কাজ",
  secret:"Notebook-এ চালালে সব কাজ করে। কিন্তু প্রোডাকশনে? হাজার কোয়েরি, concurrency, memory, GPU sharing। vLLM, TGI, Triton — serving engine যা notebook থেকে production নিয়ে যায়। PagedAttention, continuous batching, tensor parallelism। এটাই LLMOps-এর ভিত্তি।",
  recall:{
    q:"উৎক্ষেপণ প্যাডে কেন রকেট সরাসরি নয়, বিশেষ লঞ্চপ্যাড থেকে ছোড়া হয়?",
    qen:"Why is the rocket launched from a special pad, not directly?",
    a:"কারণ রকেট শক্তিশালী, তাই বিশেষ কাঠামো দরকার। LLM-ও তেমনি — notebook-এ চলে কিন্তু production-এ বিশেষ serving engine দরকার। vLLM, TGI — PagedAttention, batching, tensor parallel। তাহকিক — বাস্তবায়ন।",
    aen:"Because the rocket is powerful, needing special infrastructure. LLMs too — run in notebook but production needs special serving engines. vLLM, TGI — PagedAttention, batching, tensor parallel. Tahqiq — implementation."
  },
  story:`
<p class="scene-setting">প্রথম কেন্দ্র। উৎক্ষেপণ প্যাড। একটা বিশাল রকেট প্যাডে দাঁড়িয়ে — চারপাশে কন্ট্রোল প্যানেল, সেন্সর, প্রকৌশলী। "রকেট যে কেউ বানাতে পারে," প্রধান প্রকৌশলী নাদিয়া বললেন। "কিন্তু উৎক্ষেপণ? সেটাই আসল কাজ। বিশেষ কাঠামো, বিশেষ প্যাড, বিশেষ প্রকৌশলী। LLM-ও তেমনি — notebook-এ চলে, কিন্তু production-এ serving engine দরকার।"</p>
<p class="scene-setting en">The first center. Launch pad. A massive rocket on the pad — surrounded by control panels, sensors, engineers. "Anyone can build a rocket," Chief Engineer Nadia said. "But launch? That's the real work. Special infrastructure, special pad, special engineers. LLMs too — run in notebook, but production needs a serving engine."</p>

<div class="dialogue">LLM Security বইয়ে তুমি শিখেছ সুরক্ষা। কিন্তু আমি বলি — সুরক্ষিত মডেলও যদি প্রোডাকশনে না চলে? সে কেবল ডিস্কে পড়ে থাকে। প্রথম প্রশ্ন — কীভাবে serve করবে? Notebook-এ চালালে এক কোয়েরিতে কাজ করে। কিন্তু হাজার কোয়েরি? দরকার serving engine।</div>
<div class="dialogue en">"In the LLM Security book you learned protection. But I say — even a protected model, if it doesn't run in production? It just sits on disk. First question — how to serve? Running in notebook works for one query. But thousands of queries? You need a serving engine."</div>

<div class="code-block">Model Serving — From Notebook to Production:

THE NOTEBOOK PROBLEM:
  # Notebook: works for demo
  model = AutoModelForCausalLM.from_pretrained(...)
  output = model.generate(input)
  # → ১ query at a time
  # → ৫-১০s per query
  # → ১ user = ok. ১০০ users = crash!
  
  Production needs:
    → Multiple concurrent requests
    → Low latency (< ১s perceived)
    → High throughput (requests/sec)
    → GPU efficiency (memory, compute)
    → Auto-scaling (traffic spikes)

SERVING ENGINES (2024-2025):

┌──────────────┬──────────────────────────────────┐
│ vLLM         │ Most popular open-source server  │
│              │ Key: PagedAttention              │
│              │ → manages KV cache like OS pages │
│              │ → near-zero memory waste          │
│              │ Continuous batching               │
│              │ → new requests join running batch │
│              │ Tensor parallelism (multi-GPU)    │
│              │ OpenAI-compatible API             │
│              │ Throughput: ২-৪x vs naive         │
├──────────────┼──────────────────────────────────┤
│ TGI          │ HuggingFace's serving engine     │
│ (Text Gen    │ Continuous batching               │
│  Inference)  │ Flash Attention ২                │
│              │ Safetensors fast loading          │
│              │ Docker-based deployment           │
│              │ Great HF ecosystem integration    │
├──────────────┼──────────────────────────────────┤
│ Triton       │ NVIDIA's inference server        │
│              │ Multi-model serving               │
│              │ TensorRT for max GPU speed        │
│              │ Dynamic batching                  │
│              │ Enterprise-grade                  │
├──────────────┼──────────────────────────────────┤
│ SGLang       │ Newest (2024)                    │
│              │ RadixAttention (prefix caching)  │
│              → shared prefix → cache reuse       │
│              → ৫-১০x faster for shared system   │
│                prompts                          │
│              → structured output optimization  │
├──────────────┼──────────────────────────────────┤
│ Ollama       │ Simplest, local                   │
│              │ GGUF format, CPU/Mac              │
│              → great for dev/prototyping         │
│              → not for high-QPS production       │
└──────────────┴──────────────────────────────────┘

KEY INNOVATIONS (why serving engines matter):

১. PAGEDATTENTION (vLLM)
  KV cache = GPU memory bottleneck
  → traditional: pre-allocate per request → waste
  → PagedAttention: paged like OS virtual memory
  → near-zero waste → ২-৩x more requests fit
  
  Analogy: বইয়ের তাক
    Traditional: প্রতিটা বইয়ের জন্য নির্দিষ্ট জায়গা
    PagedAttention: যেখানে জায়গা আছে সেখানে রাখো
    → বেশি বই ফিট করে

২. CONTINUOUS BATCHING
  Traditional: wait for batch to complete → new batch
  → GPU idle while slow request finishes
  
  Continuous: new requests join running batch
  → as soon as a request finishes, new one enters
  → GPU never idle
  → ৩-৫x throughput

৩. PREFIX CACHING (SGLang, vLLM)
  System prompt same for all requests?
  → cache its KV once → reuse for all
  → prefill phase skipped → instant
  
  Example: ২K token system prompt × ১০০০ queries
    Without cache: ২K × ১০০০ = ২M token processing
    With cache: ২K once + ১০০০ × input only
    → ৯০%+ reduction

৪. TENSOR PARALLELISM
  Model too big for ১ GPU?
  → split across multiple GPUs
  → each GPU handles part of the computation
  → communicate between GPUs (NCCL)
  
  ৭০B model: needs ~১৪০GB → ২×A100 (৮০GB each)
  → tensor parallel = ২

SERVING DECISION:

  Use case → Engine
  ─────────────────────────────────
  High QPS production → vLLM বা Triton
  HF ecosystem → TGI
  Shared system prompts → SGLang
  Local/dev → Ollama
  Managed (no ops) → Together/Anyscale
  
  Start: vLLM (most documented, most flexible)</div>

<div class="dialogue">তাহকিক — implementation, realization, actual work। কুরআনে আল্লাহ বলেন — "নিশ্চয় আল্লাহ তাদের ভালোবাসেন যারা তাদের কাজ ভালোভাবে করে।" Serving engine হলো সেই ভালো কাজের টুল — notebook থেকে production নিয়ে যাওয়া। তাহকিক — শুধু তত্ত্ব নয়, বাস্তবায়ন।</div>
<div class="dialogue en">"Tahqiq — implementation, realization, actual work. Allah says — 'Allah loves those who do their work well.' Serving engines are the tool of doing work well — moving from notebook to production. Tahqiq — not just theory, but implementation."</div>`,
  senior:{
    title:"Serving Start — vLLM Quick Setup",
    body:`<p><strong>Install:</strong> pip install vllm</p><p><strong>Serve:</strong> vllm serve meta-llama/Llama-3.1-8B --port 8000 --max-model-len 8192</p><p><strong>API:</strong> OpenAI-compatible! POST /v1/chat/completions</p><p><strong>Multi-GPU:</strong> --tensor-parallel-size 2 (splits across GPUs)</p><p><strong>Quantized:</strong> --quantization awq (for 4-bit models)</p><p><strong>Production:</strong> Docker + Kubernetes + autoscaling। vLLM behind a load balancer।</p>`
  }
});

// ══ DOOR 2: DEPLOYMENT ══
doors.push({
  num:2, icon:"📦", color:"#5b9eff", name:"প্যাকেজিং কক্ষ",
  subtitle:"The Packaging Chamber", tech:"Deployment & Containerization",
  spirit:"তাহকিল — সম্পন্ন করা",
  secret:"Model serve করা শুরু, deploy করা আলাদা। Docker container, Kubernetes orchestration, auto-scaling, rolling updates, health checks, load balancing। এক সার্ভার থেকে ক্লাস্টার। এক ইনস্ট্যান্স থেকে হাজার। তাহকিল — সম্পূর্ণ করা।",
  recall:{
    q:"প্যাকেজিং কক্ষে কেন প্রতিটা পণ্য বাক্সে ভরা হয়, খালি পাঠানো হয় না?",
    qen:"Why is each product boxed, not sent loose?",
    a:"কারণ বাক্স = সুরক্ষা, পরিবহন, স্ট্যান্ডার্ড। Docker-ও তেমনি — মডেল ও সব dependency এক বাক্সে। যেকোনো সার্ভারে চলে। Kubernetes = হাজার বাক্স পরিচালনা। তাহকিল — সম্পূর্ণ করা।",
    aen:"Because the box = protection, transport, standard. Docker too — model and all dependencies in one box. Runs on any server. Kubernetes = managing thousands of boxes. Tahkil — completion."
  },
  story:`
<p class="scene-setting">দ্বিতীয় কেন্দ্র। প্যাকেজিং কক্ষ। কারিগর রহিম প্রতিটা পণ্য বাক্সে ভরছেন — নির্দিষ্ট মাপে, লেবেল সহ, নির্দেশিকা সহ। "খালি পাঠালে ভাঙে," তিনি বললেন। "বাক্সে পাঠালে সুরক্ষিত। যেকোনো জায়গায় চলে। Docker-ও তেমনি — মডেল ও সব কিছু এক বাক্সে। যেকোনো সার্ভারে চলে।"</p>
<p class="scene-setting en">The second center. Packaging chamber. Craftsman Rahim puts each product in a box — specific dimensions, labeled, with instructions. "Sent loose, it breaks," he said. "Boxed, it's safe. Goes anywhere. Docker too — model and everything in one box. Runs on any server."</p>

<div class="dialogue">উৎক্ষেপণ প্যাড বলেছিলেন — serving engine দাও। কিন্তু আমি বলি — serving engine এক সার্ভারে। প্রোডাকশনে কি এক সার্ভার যথেষ্ট? না। লাখ ইউজার এলে এক সার্ভার ক্র্যাশ করে। দরকার — Docker, Kubernetes, auto-scaling। এক থেকে হাজার।</div>
<div class="dialogue en">"The launch pad said — give a serving engine. But I say — serving engine on one server. Is one server enough for production? No. When hundreds of thousands of users come, one server crashes. Need — Docker, Kubernetes, auto-scaling. From one to thousands."</div>

<div class="code-block">Deployment — Containers to Clusters:

DOCKER — এক বাক্স:

  Dockerfile (vLLM serving):
    FROM vllm/vllm-openai:latest
    ENV MODEL_NAME=meta-llama/Llama-3.1-8B
    ENV PORT=8000
    EXPOSE 8000
    CMD ["--model", "$MODEL_NAME", "--port", "8000"]
  
  Build & run:
    docker build -t my-llm-server .
    docker run --gpus all -p 8000:8000 my-llm-server
  
  → model + dependencies + runtime = one image
  → runs identically on any machine
  → no "works on my machine" problem

KUBERNETES — হাজার বাক্স পরিচালনা:

  এক Pod (one instance):
    apiVersion: v1
    kind: Pod
    metadata:
      name: llm-server
    spec:
      containers:
      - name: vllm
        image: my-llm-server
        resources:
          limits:
            nvidia.com/gpu: 1
  
  Deployment (multiple pods + auto-heal):
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: llm-deployment
    spec:
      replicas: 3  # ৩ instances
      selector:
        matchLabels:
          app: llm
      template:
        ...pod spec...
  
  → এক pod ক্র্যাশ → Kubernetes নতুন বানায় (auto-heal)
  → traffic বাড়লে → replicas বাড়াও (auto-scale)

AUTO-SCALING:

  Horizontal Pod Autoscaler (HPA):
    CPU > ৭০%? → add more pods
    Custom metric: requests/sec > threshold → scale
    
    apiVersion: autoscaling/v2
    kind: HorizontalPodAutoscaler
    spec:
      minReplicas: 2
      maxReplicas: 10
      metrics:
      - type: Resource
        resource:
          name: cpu
          target: {type: Utilization, 
                   averageUtilization: 70}
  
  → traffic spike → auto-add pods
  → traffic drops → auto-remove (save cost)

LOAD BALANCING:

  User → Load Balancer → [pod 1, pod 2, pod 3]
  
  Strategies:
    Round-robin: পালা করে পাঠাও
    Least-connections: যে pod-এ কম load
    IP-hash: একই user → একই pod (session affinity)
  
  → GPU nodes: special scheduling
    nodeSelector: {nvidia.com/gpu.present: "true"}

DEPLOYMENT STRATEGIES:

  ১. ROLLING UPDATE (default)
    → ধীরে ধীরে নতুন version দাও
    → pod 1 update → test → pod 2 → test → ...
    → zero downtime
    → যদি ভুল হয় → rollback

  ২. BLUE-GREEN
    → Blue (old) চলছে
    → Green (new) deploy করো — পাশাপাশি
    → switch traffic: Blue → Green (instant)
    → সমস্যা? → instant rollback to Blue

  ৩. CANARY
    → নতুন version → শুধু ৫% traffic
    → সমস্যা না হলে → ২৫% → ৫০% → ১০০%
    → সমস্যা হলে → ০% (rollback)
    → safest for production

INFRASTRUCTURE OPTIONS:

  Self-hosted (bare metal / cloud VMs):
    → most control, most cost, most ops
    → AWS EC2, GCP Compute, Azure VM
    → GPU instances: A100, H100, L4, T4
  
  Managed Kubernetes (EKS, GKE, AKS):
    → Kubernetes without managing nodes
    → GPU node pools auto-managed
  
  Fully managed LLM hosting:
    → Together AI: serve open models, API
    → Anyscale: Ray-based, auto-scaling
    → Modal: serverless GPU, pay per use
    → Replicate: deploy in minutes
    → no GPU management at all</div>

<div class="dialogue">তাহকিল — completion, finishing। কুরআনে আল্লাহ বলেন — "আজ আমি তোমাদের জন্য ধর্ম পূর্ণ করলাম।" (৫:৩)। পূর্ণতা = প্রতিটা অংশ সম্পন্ন। LLM deployment-ও তেমনি — serving engine, container, orchestration, scaling, load balancing। একটাও বাদ দিলে অসম্পূর্ণ। তাহকিল — সম্পূর্ণ করা।</div>
<div class="dialogue en">"Tahkil — completion, finishing. Allah says — 'Today I have perfected your religion for you.' (5:3). Perfection = every part complete. LLM deployment too — serving engine, container, orchestration, scaling, load balancing. Missing one, incomplete. Tahkil — completing."</div>`,
  senior:{
    title:"Deployment Path — Choose Your Level",
    body:`<p><strong>Level 1 (simplest):</strong> Together AI / Replicate — upload model, get API। Zero ops।</p><p><strong>Level 2:</strong> Modal — serverless GPU, Python decorator, auto-scale। Pay per use।</p><p><strong>Level 3:</strong> Docker + cloud VM (AWS/GCP) — vLLM in container, GPU instance। Manual scaling।</p><p><strong>Level 4:</strong> Kubernetes (EKS/GKE) — deployment, HPA, load balancer, canary। Full control।</p><p><strong>Level 5:</strong> Multi-region, multi-model, GPU spot instances, cost optimization। Enterprise।</p>`
  }
});

// ══ DOOR 3: CI/CD ══
doors.push({
  num:3, icon:"⚙️", color:"#52c41a", name:"স্বয়ংক্রিয় কক্ষ",
  subtitle:"The Automation Chamber", tech:"CI/CD for LLMs",
  spirit:"ইনসান — সংগঠন, নিয়ম",
  secret:"ম্যানুয়াল deploy = ভুল। CI/CD = স্বয়ংক্রিয়। Code push → test → eval → deploy। প্রতিটা change স্বয়ংক্রিয়ভাবে পরীক্ষিত। LLM CI/CD = traditional + eval gates। Code test + eval test + security test → তারপর deploy। ইনসান — সুসংগঠিত।",
  recall:{
    q:"স্বয়ংক্রিয় কক্ষে কেন প্রতিটা পণ্য মেশিনে যাচাই হয়, হাতে নয়?",
    qen:"Why is each product checked by machine, not by hand?",
    a:"কারণ মেশিন = ধারাবাহিক, নির্ভুল, ক্লান্তিহীন। CI/CD-ও তেমনি — প্রতিটা change স্বয়ংক্রিয়ভাবে test, eval, security check। ম্যানুয়াল = ভুল। স্বয়ংক্রিয় = নির্ভরযোগ্য। ইনসান — সুসংগঠিত।",
    aen:"Because machine = consistent, accurate, tireless. CI/CD too — every change automatically tested, evaluated, security checked. Manual = error. Automatic = reliable. Insan — organized."
  },
  story:`
<p class="scene-setting">তৃতীয় কেন্দ্র। স্বয়ংক্রিয় কক্ষ। একটা কনভেয়র বেল্ট — প্রতিটা পণ্য যায়, মেশিন পরীক্ষা করে, স্বয়ংক্রিয়ভাবে। কোনো মানুষ নেই। "হাতে করলে ভুল হয়," প্রকৌশলী সাদিক বললেন। "মেশিন করলে নির্ভুল। CI/CD হলো সেই মেশিন — প্রতিটা change স্বয়ংক্রিয়ভাবে পরীক্ষিত।"</p>
<p class="scene-setting en">The third center. Automation chamber. A conveyor belt — each product passes, machine checks, automatically. No humans. "Doing it by hand means errors," Engineer Sadik said. "Machine means accuracy. CI/CD is that machine — every change automatically tested."</p>

<div class="dialogue">প্যাকেজিং কক্ষ বলেছিলেন — Docker, Kubernetes। কিন্তু আমি বলি — প্যাকেজ বানালেই হবে না। প্রতিটা change পরীক্ষা করতে হয়। Code test, eval test, security test। ম্যানুয়ালি? ভুল হবে। স্বয়ংক্রিয়? CI/CD pipeline। Code push → বাকি সব স্বয়ংক্রিয়।</div>
<div class="dialogue en">"The packaging chamber said — Docker, Kubernetes. But I say — packaging isn't enough. Every change must be tested. Code test, eval test, security test. Manually? Errors. Automatically? CI/CD pipeline. Code push → everything else automated."</div>

<div class="code-block">CI/CD for LLMs — Automated Everything:

TRADITIONAL CI/CD:
  Code push → unit tests → build → deploy
  
  কিন্তু LLM-এ আরও দরকার:
  → eval tests (model quality)
  → security tests (injection, jailbreak)
  → cost tests (latency, tokens)
  → data tests (dataset drift)

LLM CI/CD PIPELINE:

  ┌──────────────────────────────────────┐
  │ ১. CODE PUSH                          │
  │ → prompt template change              │
  │ → RAG config change                   │
  │ → model swap                          │
  │ → tool update                         │
  ├──────────────────────────────────────┤
  │ ২. CODE TESTS                         │
  │ → unit tests (functions)              │
  │ → integration tests (API)             │
  │ → type checking (mypy)                │
  │ → linting (ruff, black)               │
  ├──────────────────────────────────────┤
  │ ৩. EVAL TESTS (LLM-specific!)        │
  │ → RAGAS metrics (faithfulness, etc.) │
  │ → accuracy on eval set                │
  │ → regression check (old tests pass?) │
  │ → latency benchmark                   │
  │ → cost benchmark                      │
  ├──────────────────────────────────────┤
  │ ৪. SECURITY TESTS                    │
  │ → Garak prompt injection probes       │
  │ → jailbreak regression                │
  │ → PII leak check                      │
  │ → guardrail validation                │
  ├──────────────────────────────────────┤
  │ ৫. BUILD                             │
  │ → Docker image build                  │
  │ → tag with version + commit hash      │
  │ → push to registry                    │
  ├──────────────────────────────────────┤
  │ ৬. DEPLOY (canary)                   │
  │ → ৫% traffic → new version            │
  │ → monitor: errors, latency, feedback  │
  │ → auto-promote to ১০০% if good        │
  │ → auto-rollback if bad                │
  └──────────────────────────────────────┘

EVAL GATE (সবচেয়ে গুরুত্বপূর্ণ):
  LLM change করলে → eval অবশ্যই
  
  # GitHub Actions / GitLab CI snippet
  - name: Run LLM Eval
    run: |
      python eval_suite.py \
        --model $NEW_MODEL \
        --dataset eval_set.jsonl \
        --threshold 0.85  # min faithfulness
  
  - name: Regression Check
    run: |
      python regression.py \
        --old-model $CURRENT_MODEL \
        --new-model $NEW_MODEL
  
  # If eval score drops > ৫% → BLOCK deploy
  # If regression detected → ALERT

TOOLS:

  CI/CD Platforms:
    GitHub Actions → most popular, free tier
    GitLab CI → integrated, self-hosted option
    Jenkins → classic, extensible
    CircleCI → fast, cloud-native

  LLM Eval in CI:
    Promptfoo → CLI eval tool, CI integration
    LangSmith → LangChain's eval suite
    DeepEval → pytest-style LLM assertions
    RAGAS → RAG-specific metrics

  Model Registry:
    HuggingFace Hub → model versioning
    MLflow → experiment tracking + registry
    W&B Models → Weights & Biases registry
    → version tag: model-v1.2.3 + commit hash

GITHUB ACTIONS EXAMPLE:

  name: LLM Deploy Pipeline
  on: [push to main]
  
  jobs:
    eval:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - name: Install deps
          run: pip install -r requirements.txt
        - name: Run eval
          run: python -m eval_suite
        - name: Check threshold
          run: |
            SCORE=$(cat eval_score.json | 
              jq '.faithfulness')
            if (( $(echo "$SCORE < 0.85" | 
              bc -l) )); then
              echo "Eval failed!"
              exit 1
            fi
    
    deploy:
      needs: eval  # only if eval passes
      steps:
        - name: Build Docker
          run: docker build -t llm:latest .
        - name: Deploy canary
          run: kubectl apply -f canary.yaml

VERSIONING:
  Model version: v1.2.3 (semver)
    major: breaking change (new model)
    minor: improvement (new prompt)
    patch: fix (bug fix)
  
  Tag: {model}-v{version}-{commit_hash}
  → full traceability: which code → which model

ROLLBACK:
  নতুন version খারাপ?
  → kubectl rollout undo deployment/llm
  → instant rollback to previous version
  → zero downtime</div>

<div class="dialogue">ইনসান — organization, structure। কুরআনে আল্লাহ বলেন — "যিনি মানুষকে সৃষ্টি করেছেন এবং তাকে সুসংগঠিত করেছেন।" (৯১:৭)। সুসংগঠিত = প্রতিটা অংশ নিয়মে। CI/CD-ও তেমনি — প্রতিটা change নিয়মে, স্বয়ংক্রিয়ভাবে, নির্ভুলভাবে। যে সংগঠিত, সে নির্ভরযোগ্য। যে অগোছালো, সে বিপদে।</div>
<div class="dialogue en">"Insan — organization, structure. Allah says — 'Who created man and proportioned him.' (91:7). Proportioned = every part in order. CI/CD too — every change in order, automated, accurate. One who is organized, is reliable. One who is messy, is in danger."</div>`,
  senior:{
    title:"CI/CD Start — Minimum Viable Pipeline",
    body:`<p><strong>Step 1:</strong> GitHub Actions — push to main → run Python tests → build Docker।</p><p><strong>Step 2:</strong> Add eval gate — Promptfoo বা custom eval script। Score < threshold = block।</p><p><strong>Step 3:</strong> Add canary deploy — kubectl apply canary.yaml → ৫% traffic → monitor → promote।</p><p><strong>Step 4:</strong> Add rollback — if errors spike, auto-revert।</p><p><strong>Tools:</strong> GitHub Actions (CI) + Promptfoo (eval) + Docker (build) + kubectl (deploy)।</p>`
  }
});

// ══ DOOR 4: MONITORING ══
doors.push({
  num:4, icon:"📊", color:"#fbbf24", name:"পর্যবেক্ষণ কক্ষ",
  subtitle:"The Observation Chamber", tech:"Monitoring & Observability",
  spirit:"রুকইয়াহ — সতত পর্যবেক্ষণ",
  secret:"Deploy করে ভুলে যেও না। প্রতিটা কোয়েরি, প্রতিটা response, প্রতিটা error — দেখো। Latency, throughput, cost, quality, user feedback। Dashboard, alert, trace। যে দেখে সে ঠিক করে। যে দেখে না সে আঁধারে।",
  recall:{
    q:"পর্যবেক্ষণ কক্ষে কেন সবসময় স্ক্রিন চলে?",
    qen:"Why are screens always running in the observation chamber?",
    a:"কারণ সবসময় দেখতে হয় — latency, error, cost, quality। যে দেখে সে ঠিক করে। যে দেখে না সে বিপদে পড়ে। LLMOps monitoring-ও তেমনি — প্রতিটা কল পর্যবেক্ষণ। রুকইয়াহ — সতত পর্যবেক্ষণ।",
    aen:"Because you must always watch — latency, error, cost, quality. One who watches, fixes. One who doesn't, gets in trouble. LLMOps monitoring too — every call observed. Ruqyah — constant observation."
  },
  story:`
<p class="scene-setting">চতুর্থ কেন্দ্র। পর্যবেক্ষণ কক্ষ। একটা বড় কক্ষ — দেয়ালে স্ক্রিন, প্রতিটাতে গ্রাফ, সংখ্যা, সতর্কতা। পর্যবেক্ষক আমিনা বললেন — "আমি সব দেখি। কোন সার্ভারে বেশি load, কোন কোয়েরিতে বেশি সময়, কোন error বাড়ছে। যে দেখে না, সে অন্ধ। LLMOps-এ চোখ বন্ধ করা = দুর্ঘটনা।"</p>
<p class="scene-setting en">The fourth center. Observation chamber. A large room — screens on walls, each showing graphs, numbers, alerts. Observer Amina said — "I see everything. Which server has more load, which query takes longer, which error is rising. One who doesn't watch, is blind. In LLMOps, closing eyes = disaster."</p>

<div class="dialogue">CI/CD কক্ষ বলেছিলেন — স্বয়ংক্রিয় deploy করো। কিন্তু আমি বলি — deploy করে শেষ নয়। প্রোডাকশনে কী হচ্ছে? Latency কত? Error rate কত? কোন কোয়েরি ধীর? কোন ইউজার অসন্তুষ্ট? দেখতে হয়। Monitoring ছাড়া production = অন্ধ চালক।</div>
<div class="dialogue en">"The CI/CD chamber said — automate deployment. But I say — deploying isn't the end. What's happening in production? What's the latency? Error rate? Which query is slow? Which user is unhappy? Must watch. Without monitoring, production = a blind driver."</div>

<div class="code-block">Monitoring & Observability — Eyes on Everything:

THREE PILLARS OF OBSERVABILITY:

  ১. METRICS (numbers over time)
    → requests/sec, latency p50/p95/p99
    → error rate, GPU utilization
    → token cost per request
    → cache hit rate
    
    Tools: Prometheus + Grafana, Datadog
    
    Key LLM metrics:
      TTFT (Time To First Token): < ৫০০ms
      TPOT (Time Per Output Token): < ৫০ms
      Tokens/sec: throughput
      Cost/request: $X
      Error rate: < ১%
      
  ২. LOGS (individual events)
    → every request: input, output, latency
    → errors with stack traces
    → guardrail decisions (blocked? why?)
    
    Tools: ELK Stack (Elasticsearch), Loki, CloudWatch
    
    LLM-specific logs:
      {
        request_id: "abc123",
        user_id: "user_456",
        input_tokens: ১৫০,
        output_tokens: ৮০০,
        latency_ms: ২৩৪০,
        model: "gpt-4o-2024",
        tools_called: ["search"],
        guardrail_blocked: false,
        cost_usd: ০.০৪
      }
  
  ৩. TRACES (request journey)
    → query enters → steps → exits
    → each step timed
    
    User Query
      → Input guardrail (২৩ms)
      → Query rewrite LLM (৪৫০ms)
      → RAG retrieval (১২০ms)
      → Reranking (৯০ms)
      → Context assembly (৫ms)
      → LLM generation (১৮০০ms)
      → Output guardrail (৪৫ms)
      → Total: ২৫৩৩ms
    
    → কোথায় সবচেয়ে সময়? LLM generation!
    → optimize that step

LLM-SPECIFIC MONITORING:

  LangSmith (LangChain):
    → full trace of LangChain/LangGraph runs
    → token usage, cost, latency per step
    → eval scores on production data
    → playground for debugging
    
  Langfuse (open-source):
    → self-hosted observability
    → tracing, eval, cost tracking
    → Prompt management
    → model comparison
  
  Arize Phoenix:
    → LLM-specific observability
    → drift detection
    → performance regression alerts
  
  Helicone:
    → API proxy with logging
    → cost, latency, quality tracking
    → drop-in replacement for OpenAI client

QUALITY MONITORING (not just performance):

  Production eval:
    → sample N responses/day
    → RAGAS or LLM-judge score
    → track over time → regression?
  
  User feedback:
    → thumbs up/down
    → rating (১-৫)
    → feedback text
    → track satisfaction over time
  
  Drift detection:
    → input distribution changed?
    → users asking different questions?
    → model output style changed?
    → alert on significant drift

ALERTING:

  Performance alerts:
    p99 latency > ৩s → 🟡
    error rate > ২% → 🔴
    GPU memory > ৯০% → 🟡
  
  Quality alerts:
    user satisfaction drop > ১০% → 🟡
    eval score drop > ৫% → 🔴
    
  Cost alerts:
    daily cost > budget → 🟡
    cost per query > threshold → 🟡
    unusual spike → 🔴

DASHBOARD (Grafana example):
  
  Row ১: Overview
    → QPS, error rate, p99 latency
    → total cost today
  
  Row ২: Model Performance
    → tokens/sec, TTFT, TPOT
    → GPU utilization per node
  
  Row ৩: Quality
    → eval score trend
    → user satisfaction trend
    → top failing queries
  
  Row ৪: Cost
    → cost per day/week/month
    → cost per user
    → most expensive queries</div>

<div class="dialogue">রুকইয়াহ — constant observation, watchfulness। কুরআনে আল্লাহ বলেন — "তিনি তোমাদের উপর প্রহরী নিযুক্ত করেছেন।" (৮২:১০)। প্রহরী = যে দেখে। LLMOps monitoring-ও তেমনি — প্রতিটা কল, প্রতিটা response পর্যবেক্ষণ। যে দেখে, সে ঠিক করে। যে দেখে না, সে অন্ধ। রুকইয়াহ — সতত পর্যবেক্ষণ।</div>
<div class="dialogue en">"Ruqyah — constant observation, watchfulness. Allah says — 'There are over you watchmen.' (82:10). Watchmen = those who see. LLMOps monitoring too — every call, every response observed. One who watches, fixes. One who doesn't, is blind. Ruqyah — constant observation."</div>`,
  senior:{
    title:"Monitoring Stack — Start Here",
    body:`<p><strong>Quick start:</strong> Langfuse (open-source) — self-host, trace every call, cost + latency + quality।</p><p><strong>With budget:</strong> Datadog + LangSmith — enterprise-grade observability + LangChain integration।</p><p><strong>Minimum:</strong> Helicone proxy → drop-in for OpenAI client → automatic logging + dashboard।</p><p><strong>Dashboard:</strong> Grafana + Prometheus for infrastructure metrics (GPU, memory, QPS)।</p><p><strong>Alerts:</strong> Slack webhook on: error rate > 2%, p99 > 3s, cost spike, eval score drop।</p>`
  }
});

// ══ DOOR 5: COST OPTIMIZATION ══
doors.push({
  num:5, icon:"💰", color:"#f97316", name:"বাজেট কক্ষ",
  subtitle:"The Budget Chamber", tech:"Cost Optimization",
  spirit:"সদ্ব্যয় — অর্থের সঠিক ব্যবহার",
  secret:"LLM প্রোডাকশনে খরচ সবচেয়ে বড় বিপদ। $১০K/মাস → $১০০K/মাস হতে পারে। Caching, model routing, batch processing, prompt compression, quantization — প্রতিটা কৌশল খরচ কমায়। যে সদ্ব্যয় জানে, সে টিকে। যে অবহেলা করে, সে দেউলিয়া।",
  recall:{
    q:"বাজেট কক্ষে কেন প্রতিটা খরচ হিসাব করা হয়?",
    qen:"Why is every expense calculated in the budget chamber?",
    a:"কারণ অর্থ সীমিত। LLM খরচ দ্রুত বাড়ে। Caching, routing, batching — প্রতিটা কৌশল খরচ কমায়। যে সদ্ব্যয় জানে, সে টিকে। যে অবহেলা করে, সে দেউলিয়া।",
    aen:"Because money is finite. LLM costs grow fast. Caching, routing, batching — each technique reduces cost. One who spends wisely, survives. One who is careless, goes bankrupt."
  },
  story:`
<p class="scene-setting">পঞ্চম কেন্দ্র। বাজেট কক্ষ। হিসাবরক্ষক আব্দুল্লাহ একটা বড় খাতা ধরে আছেন — প্রতিটা খরচ লেখা। "আমি প্রতিটা পয়সা হিসাব করি," তিনি বললেন। "LLM খরচ দ্রুত বাড়ে। $১K/মাস একদিন, $৫০K/মাস পরের মাস। সদ্ব্যয় ছাড়া প্রোডাকশন অসম্ভব। ক্যাশিং, রাউটিং, ব্যাচিং — প্রতিটা কৌশল।"</p>
<p class="scene-setting en">The fifth center. Budget chamber. Accountant Abdullah holds a large ledger — every expense written. "I calculate every penny," he said. "LLM costs grow fast. $1K/month one day, $50K/month the next. Without wise spending, production is impossible. Caching, routing, batching — each technique."</p>

<div class="dialogue">পর্যবেক্ষণ কক্ষ বলেছিলেন — সব দেখো। কিন্তু আমি বলি — সবচেয়ে গুরুত্বপূর্ণ যা দেখতে হয় তা হলো খরচ। LLM প্রোডাকশনে খরচ সবচেয়ে বড় বিপদ। একটা জনপ্রিয় অ্যাপ = হাজার কোয়েরি = হাজার ডলার প্রতিদিন। সদ্ব্যয় ছাড়া টিকবে না।</div>
<div class="dialogue en">"The observation chamber said — watch everything. But I say — the most important thing to watch is cost. LLM production cost is the biggest danger. A popular app = thousands of queries = thousands of dollars daily. Without wise spending, it won't survive."</div>

<div class="code-block">Cost Optimization — Every Token Counts:

THE COST EXPLOSION PROBLEM:

  GPT-4o pricing (2024):
    Input: $২.৫০ / ১M tokens
    Output: $১০ / ১M tokens
  
  Average query: ৫০০ input + ১০০০ output tokens
    = $০.০১ input + $০.০১ output = $০.০২/query
  
  ১০K queries/day = $২০০/day = $৬K/month
  ১০০K queries/day = $২০০০/day = $৬০K/month
  ১M queries/day = $২০K/day = $৬০০K/month!!
  
  → এটা ধ্বংস! কমাতে হবে।

৭ COST OPTIMIZATION STRATEGIES:

১. SEMANTIC CACHING (৩০-৬০% save)
  একই বা সমার্থক কোয়েরি → cached answer
  
  Query embedding → similarity check (> ০.৯৫)
  → hit? return cached (zero LLM cost!)
  → miss? full pipeline → cache result
  
  Implementation:
    Redis + embedding → GPTCache
    বা Memcached + simple hash for exact match
  
  Real-world: ৩০-৬০% of queries are near-duplicates
  → ৩০-৬০% cost reduction!

২. MODEL ROUTING (৫০-৮০% save on some queries)
  সব কোয়েরি GPT-4 দরকার নয়।
  
  Router: কোয়েরি কত জটিল?
    → সহজ ("what is X?") → GPT-4o-mini ($০.০০২)
    → মাঝারি ("explain X in context") → Claude Haiku
    → জটিল ("design a system for X") → GPT-4o ($০.০২)
  
  Route ৪০% easy, ৪০% medium, ২০% hard:
    ৪০% × $০.০০২ + ৪০% × $০.০০৫ + ২০% × $০.০২
    = $০.০০৬৪ avg (vs $০.০২ = ৬৮% save!)

৩. PROMPT COMPRESSION (২০-৪০% save)
  Prompt-এ অপ্রয়োজনীয় টোকেন আছে।
  
  → LLMLingua: remove low-information tokens
  → context compression (Context Eng Door 6)
  → system prompt shortening
  
  Result: ২০-৪০% fewer input tokens = ২০-৪০% less input cost

৪. BATCH API (৫০% save)
  সমস্ত কোয়েরি রিয়েল-টাইম দরকার নয়।
  
  OpenAI Batch API: ৫০% discount
    → submit batch of requests
    → results within ২৪h
    → $০.০১/query instead of $০.০২
  
  Use for: offline summarization, batch classification, 
    report generation, data processing

৫. QUANTIZATION (৫০-৭০% save for self-hosted)
  সেল্ফ-হোস্টেড মডেল? Quantize!
  
  ৭B model fp16: ১৪ GB → A100 ($৩/hr)
  ৭B model int4: ৩.৫ GB → T4 ($০.৫/hr)
  
  → ৬x cheaper GPU!
  → quality: ৯৩-৯৮% of fp16

৬. SHORTER OUTPUTS (direct save)
  output tokens = সবচেয়ে ব্যয়বহুল
  
  GPT-4o: input $২.৫০, output $১০ per ১M
  → output ৪x বেশি ব্যয়বহুল!
  
  Techniques:
    → max_tokens limit
    → "be concise" in system prompt
    → structured output (JSON = compact)
    → avoid "explain your reasoning" for simple tasks

৭. SPOT INSTANCES (৭০% save for GPU)
  Self-hosted GPU?
  
  On-demand A100: $৩.৬৭/hr (AWS)
  Spot A100: $১.১/hr (AWS) — ৭০% save!
  
  Trade-off: can be terminated anytime
  → use for non-critical workloads
  → batch processing, eval, fine-tuning
  
  Production serving: on-demand (reliable)
  Background: spot (cheap)

COST MONITORING:
  Per-user cost tracking
  → কে সবচেয়ে বেশি খরচ করছে?
  → fair use limit
  
  Per-feature cost
  → কোন feature সবচেয়ে ব্যয়বহুল?
  → optimize or charge for it
  
  Cost anomaly detection
  → unusual spike → alert
  → abuse? bug? marketing viral?

REAL-WORLD COST BREAKDOWN:
  
  Scenario: ৫০K queries/day RAG system
  
  Without optimization:
    LLM: ৫০K × $০.০২ = $১K/day = $৩০K/month
  
  With optimization:
    Cache (৩০%): -৩.৫K queries
    Routing (৬০% → mini): most queries
    Prompt compression (২০%): fewer tokens
    Batch (offline, ২০%): ৫০% off
    
    Optimized: ~$৫K/month
    → ৮৩% cost reduction!</div>

<div class="dialogue">সদ্ব্যয় — wise spending, proper use of resources। কুরআনে আল্লাহ বলেন — "তারা ব্যয় করে না অতিরিক্ত এবং কৃপণতা করে না।" (২৫:৬৭)। মাঝপথ — না বেশি, না কম। ঠিক যতটা দরকার। LLM cost-ও তেমনি — সদ্ব্যয়। ক্যাশিং, রাউটিং, ব্যাচিং। প্রতিটা টোকেন গোনা। যে সদ্ব্যয় জানে, সে টিকে।</div>
<div class="dialogue en">"Sadvyay — wise spending, proper use of resources. Allah says — 'They are not extravagant, nor are they miserly.' (25:67). Middle path — not too much, not too little. Just what's needed. LLM cost too — sadvyay. Caching, routing, batching. Every token counted. One who spends wisely, survives."</div>`,
  senior:{
    title:"Cost Optimization Priority — Do These First",
    body:`<p><strong>১. Caching:</strong> Semantic cache (GPTCache/Redis) — ৩০-৬০% instant save। Start here।</p><p><strong>২. Model routing:</strong> Route easy queries to mini/haiku models — ৫০%+ save on most traffic।</p><p><strong>৩. Output limit:</strong> max_tokens + "be concise" — direct output cost reduction।</p><p><strong>৪. Prompt compression:</strong> LLMLingua — ২০-৪০% fewer input tokens।</p><p><strong>৫. Batch API:</strong> Non-real-time tasks → ৫০% discount।</p><p><strong>৬. Monitor:</strong> Per-user + per-feature cost tracking → catch anomalies early।</p>`
  }
});
