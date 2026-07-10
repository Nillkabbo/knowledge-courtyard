// ════════════════════════════════════════
// ধাতব কর্মক্ষমতা — DOORS 6-10
// Inference Optimization: Memory → Architecture
// ════════════════════════════════════════

// ══ DOOR 6: MEMORY OPTIMIZATION ══
doors.push({
  num:6, icon:"🧠", color:"#94a3b8", name:"স্মৃতি ব্যবস্থাপনার কক্ষ",
  subtitle:"The Memory Management Chamber", tech:"Memory Optimization",
  spirit:"তাদবির — ব্যবস্থাপনা, পরিকল্পনা",
  secret:"GPU মেমরি সীমিত। Model weights + KV cache + activations + optimizer = সব একসাথে ফিট করতে হয়। Offloading, gradient checkpointing, memory-efficient attention — প্রতিটা কৌশল মেমরি বাঁচায়। তাদবির — সীমিত সম্পদের সঠিক ব্যবস্থাপনা।",
  recall:{
    q:"স্মৃতি ব্যবস্থাপনার কক্ষে কেন প্রতিটা জায়গা গোনা হয়?",
    qen:"Why is every space counted?",
    a:"কারণ GPU মেমরি সীমিত। weights + KV cache + activations — সব ফিট করতে হয়। Offloading, checkpointing — প্রতিটা কৌশল বাঁচায়। তাদবির — সীমিত সম্পদের সঠিক ব্যবস্থাপনা।",
    aen:"Because GPU memory is finite. Weights + KV cache + activations — all must fit. Offloading, checkpointing — each saves. Tadbir — proper management of limited resources."
  },
  story:`
<p class="scene-setting">ষষ্ঠ ধাপ। স্মৃতি ব্যবস্থাপনার কক্ষ। একটা ছোট কক্ষ — কিন্তু অনেক জিনিস রাখতে হবে। কারিগর ফারহান প্রতিটা জিনিস সঠিক জায়গায় সাজাচ্ছেন। "কক্ষ ছোট," তিনি বললেন, "কিন্তু সব রাখতে হবে। সঠিক ব্যবস্থাপনা ছাড়া অসম্ভব। GPU মেমরিও তেমনি — সীমিত। প্রতিটা byte গোনো।"</p>
<p class="scene-setting en">The sixth step. Memory management chamber. A small room — but many things must fit. Craftsman Farhan places each item in its right place. "Room is small," he said, "but everything must fit. Without proper management, impossible. GPU memory too — finite. Count every byte."</p>

<div class="dialogue">Speculative decoding বলেছিলেন — অনুমান দ্রুত করো। কিন্তু আমি বলি — দ্রুত করার আগে মেমরি ব্যবস্থাপনা। GPU মেমরি সীমিত। weights, KV cache, activations — সব একসাথে। OOM? সব থেমে। সঠিক মেমরি ব্যবস্থাপনা ছাড়া কোনো optimization কাজ করবে না।</div>
<div class="dialogue en">"Speculative decoding said — speed up guessing. But I say — before speeding up, memory management. GPU memory is finite. Weights, KV cache, activations — all together. OOM? Everything stops. Without proper memory management, no optimization works."</div>`,
  story:`

<p class="scene-setting">The sixth step. Memory management chamber. A room filled with shelves — each labeled: "weights", "KV cache", "activations", "optimizer state". Craftsman Farhan moved between them, rearranging. "GPU memory is like this room," he said. "Limited space. Must fit model weights, KV cache for all concurrent requests, activation memory, and framework overhead. Every byte matters."</p>

<p class="scene-setting en">The sixth step. Memory management chamber. A room filled with shelves — each labeled: "weights", "KV cache", "activations", "optimizer state". Craftsman Farhan moved between them, rearranging. "GPU memory is like this room," he said. "Limited space. Must fit model weights, KV cache for all concurrent requests, activation memory, and framework overhead. Every byte matters."</p>

<div class="code-block">Memory Optimization — Fitting More in Less:

GPU MEMORY BUDGET (A100 80GB):

  ┌──────────────────────────┬──────────┐
  │ Component                │ Memory   │
  ├──────────────────────────┼──────────┤
  │ Model weights (৭B fp16)  │ ১৪ GB    │
  │ KV cache (per request)   │ ০.৫-২ GB│
  │ Activations              │ ২-৫ GB   │
  │ Framework overhead       │ ২-৩ GB   │
  │ CUDA context             │ ১ GB     │
  ├──────────────────────────┼──────────┤
  │ Available for batching   │ ~৫৫ GB   │
  │ → ~২৫-১০০ concurrent reqs│          │
  └──────────────────────────┴──────────┘

MEMORY OPTIMIZATION TECHNIQUES:

১. MODEL OFFLOADING (CPU-GPU)
  → weights কিছু CPU RAM-এ রাখো
  → GPU-তে শুধু দরকারি layers
  → DeepSpeed Zero, Accelerate
  ✅ বড় model, ছোট GPU
  ❌ ধীর (CPU-GPU transfer)
  
  Best for: inference যেখানে GPU ছোট

২. GRADIENT CHECKPOINTING (training)
  → forward pass-এ activations না রাখো
  → backward-এ পুনরায় compute
  → training memory ৩-৫x কম
  ✅ বড় model training
  ❌ ৩০% slower (recompute)
  
  → inference-এ প্রাসঙ্গিক নয় (no backward)

৩. MEMORY-EFFICIENT ATTENTION
  → FlashAttention (Door ৪)
  → activations O(N²) → O(N)
  → long context feasible
  
  → already covered, same benefit

৪. TENSOR PARALLELISM
  → model কয়েক GPU-তে ভাগ
  → each GPU handles part of weights
  → ৭০B model: ২×A100 (৪০GB each)
  
  vLLM: --tensor-parallel-size ২

৫. PIPELINE PARALLELISM
  → model layers কয়েক GPU-তে
  → GPU ১: layers ১-১৬
  → GPU ২: layers ১৭-৩২
  → sequential processing
  → less efficient than tensor parallel

৬. CPU OFFLOAD KV CACHE
  → KV cache পূর্ণ হলে → CPU RAM-তে
  → দরকার হলে ফিরিয়ে আনো
  → FlexGen, InfiniGen
  
  ✅ বেশি concurrent requests
  ❌ latency বাড়ে (CPU access)

৭. WEIGHT SHARING
  → same weights for multiple models
  → e.g., base model shared across 
    multiple LoRA adapters
  → vLLM: multi-LoRA serving
  
  ✅ কম মেমরিতে একাধিক "models"

PRACTICAL MEMORY FORMULA:

  Total VRAM needed =
    model_weights 
    + (batch_size × kv_cache_per_request)
    + activations
    + framework_overhead
  
  Example (৭B model, fp16, ৪K context):
    ১৪ GB (weights)
    + (৩২ × ২ GB) = ৬৪ GB (KV cache!!)
    + ৫ GB (activations)
    + ৩ GB (framework)
    = ৮৬ GB → doesn't fit A100 ৮০GB!
  
  With int4 quantization:
    ৩.৫ GB (weights)
    + (৩২ × ১ GB) = ৩২ GB (int8 KV)
    + ৫ GB + ৩ GB
    = ৪৩.৫ GB → fits easily! ২x more batch!

MEMORY MONITORING:
  → nvidia-smi: real-time VRAM usage
  → vLLM logs: KV cache utilization %
  → torch.cuda.memory_allocated()
  → memory profiler: torch memory_viz
  
  Alert: VRAM > ৯০% → reduce batch size
  Alert: OOM → crash! Prevent proactively</div>

<div class="dialogue">তাদবির — management, planning, arrangement। কুরআনে আল্লাহ বলেন — "তোমরা প্রস্তুতি নাও।" (৮:৬০)। প্রস্তুতি = তাদবির। সীমিত সম্পদ সঠিকভাবে ব্যবহার। GPU মেমরি সীমিত — তাদবির দরকার। প্রতিটা byte সঠিক জায়গায়। যে তাদবির করে, সে টিকে। যে অগোছালো, সে OOM-এ পড়ে।</div>
<div class="dialogue en">"Tadbir — management, planning, arrangement. Allah says — 'Be prepared.' (8:60). Preparation = tadbir. Using limited resources correctly. GPU memory is finite — needs tadbir. Every byte in its right place. One who plans, survives. One who is messy, hits OOM."</div>`,
  senior:{
    title:"Memory Management — Quick Wins",
    body:`<p><strong>১:</strong> Quantize weights to int4 (AWQ) — 4x memory savings।</p><p><strong>২:</strong> Quantize KV cache to int8 — 2x more concurrent requests।</p><p><strong>৩:</strong> Use GQA model (Llama 3) — 4x less KV cache per request।</p><p><strong>৪:</strong> FlashAttention enabled — O(N) activation memory।</p><p><strong>৫:</strong> PagedAttention (vLLM) — near-zero cache fragmentation।</p><p><strong>৬:</strong> Multi-LoRA serving — one base model, many adapters।</p><p><strong>OOM?</strong> Reduce batch size (max-num-seqs) বা context length বা quantize more।</p>`
  }
});

// ══ DOOR 7: PRUNING & DISTILLATION ══
doors.push({
  num:7, icon:"🔪", color:"#64748b", name:"পরিশীলনের কক্ষ",
  subtitle:"The Refinement Chamber", tech:"Pruning & Knowledge Distillation",
  spirit:"তাযকিয়া — পরিশুদ্ধি, অপ্রয়োজনীয় ছাঁটাই",
  secret:"মডেলে অপ্রয়োজনীয় weights আছে। Pruning — অপ্রয়োজনীয় সরাও। Distillation — বড় মডেলের জ্ঞান ছোটে দাও। দুটোই মডেল ছোট ও দ্রুত করে। তাযকিয়া — পরিশুদ্ধি, অপ্রয়োজনীয় ছাঁটাই। যে পরিশুদ্ধ করে, সে নিখুঁত।",
  recall:{
    q:"পরিশীলনের কক্ষে কেন অপ্রয়োজনীয় অংশ ছাঁটাই হয়?",
    qen:"Why trim unnecessary parts?",
    a:"কারণ অপ্রয়োজনীয় = ভার। Pruning ও distillation মডেল ছোট ও দ্রুত করে। তাযকিয়া — পরিশুদ্ধি, অপ্রয়োজনীয় ছাঁটাই। যে পরিশুদ্ধ করে, সে নিখুঁত।",
    aen:"Because unnecessary = burden. Pruning and distillation make model smaller and faster. Tazkiyah — purification, trimming the unnecessary. One who purifies, perfects."
  },
  story:`
<p class="scene-setting">সপ্তম ধাপ। পরিশীলনের কক্ষ। কারিগর জাকেরিয়া একটা মূর্তি থেকে অতিরিক্ত পাথর ছাঁটাই করছেন — ধীরে ধীরে, সাবধানে। "অপ্রয়োজনীয় পাথর = ভার," তিনি বললেন। "ছাঁটাই করলে মূর্তি নিখুঁত ও হালকা। মডেলেও অপ্রয়োজনীয় weights আছে। Pruning — ছাঁটাই। Distillation — বড় থেকে ছোটে জ্ঞান দাও। তাযকিয়া — পরিশুদ্ধি।"</p>
<p class="scene-setting en">The seventh step. Refinement chamber. Craftsman Zakariya chips away excess stone from a statue — slowly, carefully. "Unnecessary stone = burden," he said. "Trimming makes the statue perfect and lighter. Models also have unnecessary weights. Pruning — trim. Distillation — transfer knowledge from big to small. Tazkiyah — purification."</p>

<div class="dialogue">Memory কক্ষ বলেছিলেন — মেমরি ব্যবস্থাপনা করো। কিন্তু আমি বলি — মেমরি ব্যবস্থাপনা ছাড়াও মডেল নিজে ছোট করা যায়। Pruning — অপ্রয়োজনীয় weights সরাও। Distillation — বড় মডেলের জ্ঞান ছোটে দাও। দুটোই স্থায়ী সমাধান — মডেল নিজে ছোট, দ্রুত, সস্তা।</div>
<div class="dialogue en">"The memory chamber said — manage memory. But I say — beyond managing, the model itself can be made smaller. Pruning — remove unnecessary weights. Distillation — transfer big model's knowledge to small. Both are permanent solutions — the model itself is smaller, faster, cheaper."</div>`,
  story:`

<p class="scene-setting">The seventh step. Refinement chamber. A sculptor chips away excess marble — slowly, carefully. "The statue is already inside," he said. "I just remove what's unnecessary." Before him: a massive block becoming a graceful figure. "Models are the same. Pruning removes unnecessary weights. Distillation compresses a big model's knowledge into a small one. Both make the model permanently smaller and faster."</p>

<p class="scene-setting en">The seventh step. Refinement chamber. A sculptor chips away excess marble — slowly, carefully. "The statue is already inside," he said. "I just remove what's unnecessary." Before him: a massive block becoming a graceful figure. "Models are the same. Pruning removes unnecessary weights. Distillation compresses a big model's knowledge into a small one. Both make the model permanently smaller and faster."</p>

<div class="code-block">Pruning & Distillation — Smaller Models, Same Knowledge:

PRUNING — Remove the Unnecessary:

  Neural networks have redundant weights
  → many weights ≈ ০ (near zero)
  → removing them barely affects output
  
  Types:
  
  ১. UNSTRUCTURED PRUNING
    → remove individual weights (set to ০)
    → সূক্ষ্ম, কিন্তু sparse matrix
    → needs special hardware/kernels
    → hard to actually speed up
  
  ২. STRUCTURED PRUNING  
    → remove entire neurons, heads, layers
    → smaller dense model
    → actually faster on standard hardware
  
  ৩. MAGNITUDE PRUNING (simplest)
    → remove weights with smallest absolute value
    → "if it's near ০, it doesn't matter"
    → সহজ, কিন্তু অত্যন্ত সূক্ষ্ম
  
  ৪. WANDA (Weights and Activations)
    → consider both weight magnitude AND 
      activation magnitude
    → more intelligent pruning
    → better quality retention

PRUNING IMPACT:
  
  Llama ২ ৭B:
    Original: ৭B params, ১৪ GB
    ২০% pruned: ৫.৬B, ১১.২ GB
    ৫০% pruned: ৩.৫B, ৭ GB
    → quality: ~৯০% at ৫০% pruning
    → ২x smaller, ~১.৫x faster

KNOWLEDGE DISTILLATION:
  
  Big model (teacher) → Small model (student)
  → student learns to mimic teacher's output
  → not just final answer, but internal 
    representations (logits)
  
  Training:
    → input → teacher → soft labels (probabilities)
    → input → student → predictions
    → loss = KL_divergence(student, teacher)
    → student learns teacher's "soft" knowledge
  
  ┌──────────────────────────────────────┐
  │ Example:                             │
  │                                      │
  │ Teacher: GPT-৪ (১.৭T params)        │
  │ Student: custom ৭B model             │
  │                                      │
  │ Training data: ১M examples           │
  │ → each example: teacher generates    │
  │   full probability distribution      │
  │ → student learns to match            │
  │                                      │
  │ Result: ৭B student ≈ ৭০% of GPT-৪   │
  │ quality, but ২৪০x smaller!          │
  └──────────────────────────────────────┘

DISTILLATION TYPES:

  ১. LOGIT DISTILLATION (standard)
    → match output probability distribution
    → student sees teacher's full distribution
    → "the answer is Paris (৯৫%), but also 
       London (২%), Berlin (১%)..."
    → student learns the relationships
  
  ২. FEATURE DISTILLATION  
    → match internal representations
    → middle layers aligned
    → deeper knowledge transfer
  
  ৩. RESPONSE-BASED (simplest)
    → match just the final answer
    → least information, weakest transfer

DISTILLATION IN PRACTICE:
  
  → DistilBERT: BERT → ৪০% smaller, ৬০% faster,
    ৯৭% quality retained
  → TinyLlama: compact but capable
  → Phi-৩ (Microsoft): textbook-trained, 
    very small but strong
  → GPT-৪ → GPT-৪o-mini (distillation likely)
  
  → teacher-student = standard practice for 
    efficient models

PRUNING + DISTILLATION COMBINED:
  
  ১. Start: large model (৭০B)
  ২. Prune: remove ৩০% weights → ৪৯B
  ৩. Distill: train ৪৯B to recover quality
  ৪. Result: ~৭০B quality at ৪৯B size
  
  → iterative: prune → distill → prune → distill

WHEN TO USE:

  Pruning:
    ✅ existing model needs to be smaller
    ✅ can't afford distillation training
    ✅ quick size reduction
  
  Distillation:
    ✅ can afford training (GPU + data)
    ✅ want custom small model
    ✅ teacher model available
    ✅ best quality for size</div>

<div class="dialogue">তাযকিয়া — purification, refinement, spiritual growth। কুরআনে আল্লাহ বলেন — "সফল সেই ব্যক্তি যে নিজেকে পরিশুদ্ধ করে।" (৯১:৯)। পরিশুদ্ধি = অপ্রয়োজনীয় সরানো। Pruning-ও তেমনি — অপ্রয়োজনীয় weights সরানো। Distillation = সারমর্ম ধরে রেখে ছোট করা। তাযকিয়া — পরিশুদ্ধির গুণ। যে পরিশুদ্ধ করে, সে নিখুঁত।</div>
<div class="dialogue en">"Tazkiyah — purification, refinement, spiritual growth. Allah says — 'Successful is the one who purifies themselves.' (91:9). Purification = removing unnecessary. Pruning too — removing unnecessary weights. Distillation = keeping essence while shrinking. Tazkiyah — the virtue of purification. One who purifies, perfects."</div>`,
  senior:{
    title:"Pruning & Distillation — Should You?",
    body:`<p><strong>Pruning:</strong> শুধু যদি তোমার own model ছোট করতে হবে। Quick reduction। Wanda বা structured pruning।</p><p><strong>Distillation:</strong> যদি training resources আছে এবং তোমার custom small model দরকার। Best quality per parameter।</p><p><strong>Easier alternative:</strong> শুধু একটা already-small model ব্যবহার করো (Llama 3.2 1B/3B, Phi-3, Qwen 2.5 0.5B)। এগুলো already distilled! নিজে prune/distill করার চেয়ে ভালো।</p><p><strong>Rule:</strong> প্রথমে quantization (easy), তারপর existing small models, শেষে pruning/distillation (hard)।</p>`
  }
});

// ══ DOOR 8: KERNEL OPTIMIZATION ══
doors.push({
  num:8, icon:"🔧", color:"#94a3b8", name:"যন্ত্রাংশের কক্ষ",
  subtitle:"The Kernel Chamber", tech:"Custom Kernels & Compilation",
  spirit:"মুতালাবা — সূক্ষ্ম প্রয়োজন",
  secret:"PyTorch সাধারণ — কিন্তু ধীর। Custom kernel = নির্দিষ্ট GPU-র জন্য নির্মিত। CUDA, Triton, TensorRT — প্রতিটা ২-৫x faster। সঠিক kernel = সঠিক গতি। মুতালাবা — সূক্ষ্ম প্রয়োজন, নিখুঁত টুল।",
  recall:{
    q:"যন্ত্রাংশের কক্ষে কেন সাধারণ টুল নয়, বিশেষ টুল?",
    qen:"Why special tools, not general?",
    a:"কারণ সাধারণ = ধীর। Custom kernel = GPU-র জন্য নির্মিত। CUDA, Triton, TensorRT — প্রতিটা দ্রুত। মুতালাবা — সূক্ষ্ম প্রয়োজন, নিখুঁত টুল।",
    aen:"Because general = slow. Custom kernel = built for GPU. CUDA, Triton, TensorRT — each faster. Mutalaba — precise need, perfect tool."
  },
  story:`
<p class="scene-setting">অষ্টম ধাপ। যন্ত্রাংশের কক্ষ। কারিগর রুকইয়া একটা সাধারণ হাতুড়ি ফেলে দিলেন, একটা বিশেষ হাতুড়ি তুললেন। "সাধারণ হাতুড়ি সব কাজে চলে," তিনি বললেন, "কিন্তু ধীর। বিশেষ হাতুড়ি নির্দিষ্ট কাজে দ্রুত। CUDA, Triton, TensorRT — প্রতিটা বিশেষ। নিখুঁত GPU kernel = নিখুঁত গতি।"</p>
<p class="scene-setting en">The eighth step. Kernel chamber. Craftswoman Ruqayya drops a general hammer, picks up a special one. "General hammer works for everything," she said, "but slow. Special hammer is fast for specific tasks. CUDA, Triton, TensorRT — each special. Perfect GPU kernel = perfect speed."</p>

<div class="dialogue">Pruning কক্ষ বলেছিলেন — মডেল ছোট করো। কিন্তু আমি বলি — মডেল ছোট করা ছাড়াও execution দ্রুত করা যায়। Custom kernel। PyTorch সাধারণ — সব GPU-র জন্য। কিন্তু custom kernel নির্দিষ্ট GPU-র জন্য নির্মিত। ২-৫x faster। এটাই সবচেয়ে গভীর optimization — হার্ডওয়্যার-স্তরের।</div>
<div class="dialogue en">"The pruning chamber said — make model smaller. But I say — beyond making smaller, execution itself can be faster. Custom kernel. PyTorch is general — for all GPUs. But custom kernel is built for specific GPU. 2-5x faster. This is the deepest optimization — at hardware level."</div>`,
  story:`

<p class="scene-setting">The eighth step. Kernel chamber. Workbenches with different tools — one labeled "PyTorch (general)", another "CUDA (specific)", another "TensorRT (extreme)". Craftsman Rashid worked at the CUDA bench. "General tools work for everything," he said, "but they're not optimal for anything. Custom kernels — built for one specific GPU — squeeze out every bit of performance. 2-5x faster than generic PyTorch."</p>

<p class="scene-setting en">The eighth step. Kernel chamber. Workbenches with different tools — one labeled "PyTorch (general)", another "CUDA (specific)", another "TensorRT (extreme)". Craftsman Rashid worked at the CUDA bench. "General tools work for everything," he said, "but they're not optimal for anything. Custom kernels — built for one specific GPU — squeeze out every bit of performance. 2-5x faster than generic PyTorch."</p>

<div class="code-block">Kernel Optimization — Hardware-Level Speed:

WHY CUSTOM KERNELS:
  
  PyTorch eager mode:
    → each operation = separate GPU kernel launch
    → overhead between operations
    → not optimized for specific GPU
  
  Custom fused kernels:
    → multiple operations fused into ONE kernel
    → less launch overhead
    → optimized memory access patterns
    → GPU-specific tuning

KERNEL TECHNOLOGIES:

১. CUDA (NVIDIA's native)
  → write custom GPU code directly
  → maximum control, maximum speed
  → hard to write (C++ level)
  → flash-attn, vLLM custom kernels
  
  ✅ fastest possible
  ❌ hardest to develop

২. TRITON (OpenAI)
  → Python-like syntax for GPU kernels
  → easier than CUDA
  → auto-tuning for different GPUs
  → vLLM uses Triton extensively
  
  ✅ much easier than CUDA
  ✅ still very fast
  ❌ not as fast as hand-tuned CUDA

৩. TENSORRT (NVIDIA)
  → compilation framework
  → takes PyTorch model → optimized engine
  → layer fusion, precision calibration
  → TensorRT-LLM: LLM-specific optimizations
  
  ✅ best for NVIDIA deployment
  ✅ automatic optimization
  ❌ NVIDIA-only
  ❌ some model architecture limits

৪. TORCH COMPILE (PyTorch ২.x)
  → torch.compile(model)
  → JIT compilation, graph optimization
  → operation fusion
  → one line of code!
  
  model = AutoModelForCausalLM.from_pretrained(...)
  model = torch.compile(model)  # ← that's it!
  
  ✅ easiest (one line)
  ✅ automatic fusion
  ❌ less optimal than hand-tuned

৫. EXLLAMAV2 (EXL২)
  → custom kernels for quantized models
  → extremely fast for int4 inference
  → variable bit quantization
  → best for consumer GPU inference

BENCHMARK (Llama ৩.১ ৮B, A100):

  ┌──────────────────┬──────────────┐
  │ Method           │ Tokens/sec   │
  ├──────────────────┼──────────────┤
  │ PyTorch eager    │ ~৪০          │
  │ torch.compile    │ ~৫৫ (+৩৭%)  │
  │ vLLM (Triton)    │ ~৮০ (+১০০%) │
  │ TensorRT-LLM     │ ~৯৫ (+১৩৭%) │
  │ hand-tuned CUDA  │ ~১০০ (+১৫০%)│
  └──────────────────┴──────────────┘

  → vLLM: ২x PyTorch!
  → TensorRT: ২.৪x PyTorch!

OPERATION FUSION EXAMPLE:

  Without fusion:
    → Q = Linear(x)     → kernel ১
    → K = Linear(x)     → kernel ২  
    → V = Linear(x)     → kernel ৩
    → attn = Q×K^T      → kernel ৪
    → softmax(attn)     → kernel ৫
    → out = attn×V      → kernel ৬
    → ৬ kernel launches, ৬ memory reads/writes
  
  With fusion:
    → fused_attention(x) → kernel ১
    → all operations in ONE kernel
    → ১ launch, ২ memory reads/writes
    → ৩-৬x faster!

WHAT TO USE:

  ┌────────────────────┬──────────────────────┐
  │ Your Situation     │ Best Choice           │
  ├────────────────────┼──────────────────────┤
  │ Quick start        │ vLLM (uses Triton)   │
  │ Max NVIDIA speed   │ TensorRT-LLM          │
  │ Easy optimization  │ torch.compile()       │
  │ Consumer GPU       │ ExLlamaV2 + int4      │
  │ Custom research    │ Triton kernels        │
  │ Absolute max perf  │ hand-tuned CUDA       │
  └────────────────────┴──────────────────────┘

GPU-SPECIFIC OPTIMIZATION:

  Different GPUs need different kernels:
    → A100: high bandwidth, Tensor cores
    → H100: faster, Transformer engine
    → T4: lower bandwidth, cheaper
    → Consumer (RTX): limited VRAM
  
  → vLLM auto-selects best kernel per GPU
  → TensorRT calibrates per GPU
  → custom CUDA: manual tuning per architecture</div>

<div class="dialogue">মুতালাবা — requirement, specific need, precise demand। কুরআনে আল্লাহ বলেন — "আমি প্রতিটি সম্প্রদায়ের জন্য একজন রাসূল পাঠিয়েছি।" প্রতিটির জন্য নির্দিষ্ট। Custom kernel-ও তেমনি — প্রতিটি GPU-র জন্য নির্দিষ্ট। সাধারণ = ধীর। নির্দিষ্ট = দ্রুত। মুতালাবা — সূক্ষ্ম প্রয়োজন। যে সঠিক টুল বেছে নেয়, সে দ্রুত।</div>
<div class="dialogue en">"Mutalaba — requirement, specific need, precise demand. Allah says — 'We sent a messenger to every community.' Specific for each. Custom kernel too — specific for each GPU. General = slow. Specific = fast. Mutalaba — precise need. One who chooses the right tool, is fast."</div>`,
  senior:{
    title:"Kernel Choice — Easy Path",
    body:`<p><strong>99% of cases:</strong> vLLM — already uses optimized Triton kernels, FlashAttention, continuous batching। Just serve and go।</p><p><strong>Max NVIDIA speed:</strong> TensorRT-LLM — compile model to TensorRT engine। ২.৪x faster than PyTorch।</p><p><strong>Quick win:</strong> torch.compile(model) — one line, ৩৭% speedup on training/inference।</p><p><strong>Consumer GPU (Mac/CPU):</strong> llama.cpp / GGUF — highly optimized for non-GPU inference।</p><p><strong>Don't:</strong> Write custom CUDA unless you're a vLLM/TGI developer। Use existing optimized engines।</p>`
  }
});

// ══ DOOR 9: HARDWARE CHOICE ══
doors.push({
  num:9, icon:"🖥️", color:"#64748b", name:"হার্ডওয়্যারের কক্ষ",
  subtitle:"The Hardware Chamber", tech:"GPU Selection & Hardware",
  spirit:"আলা — উপকরণ, সঠিক সরঞ্জাম",
  secret:"সফটওয়্যার optimization শেষ। কিন্তু হার্ডওয়্যার? A100 vs H100 vs T4 vs consumer। প্রতিটার নিজস্ব শক্তি ও দুর্বলতা। সঠিক GPU = সঠিক কাজ। ভুল GPU = অপচয়। আলা — সঠিক উপকরণ নির্বাচন।",
  recall:{
    q:"হার্ডওয়্যারের কক্ষে কেন একাধিক GPU?",
    qen:"Why multiple GPUs?",
    a:"কারণ প্রতিটা কাজের জন্য সঠিক GPU। A100 = production, T4 = cheap, consumer = dev। ভুল GPU = অপচয়। আলা — সঠিক উপকরণ নির্বাচন।",
    aen:"Because right GPU per task. A100 = production, T4 = cheap, consumer = dev. Wrong GPU = waste. Ala — correct tool selection."
  },
  story:`
<p class="scene-setting">নবম ধাপ। হার্ডওয়্যারের কক্ষ। একাধিক GPU — বড়, ছোট, দ্রুত, সস্তা। কারিগর আদনান প্রতিটার লেবেল পড়ছেন। "A100 — শক্তিশালী কিন্তু ব্যয়বহুল। T4 — সস্তা কিন্তু ধীর। Consumer — পাওয়ারফুল কিন্তু সীমিত। প্রতিটা কাজে সঠিক GPU। ভুল = অপচয়। আলা — সঠিক উপকরণ।"</p>
<p class="scene-setting en">The ninth step. Hardware chamber. Multiple GPUs — large, small, fast, cheap. Craftsman Adnan reads each label. "A100 — powerful but expensive. T4 — cheap but slow. Consumer — powerful but limited. Right GPU per task. Wrong = waste. Ala — right equipment."</p>

<div class="dialogue">Kernel কক্ষ বলেছিলেন — custom kernel দাও। কিন্তু আমি বলি — kernel শেষ। হার্ডওয়্যার শুরু। সঠিক GPU ছাড়া সব optimization অর্থহীন। A100 vs H100 vs T4 — প্রতিটার নিজস্ব ক্ষমতা। সঠিক হার্ডওয়্যার নির্বাচন = সঠিক খরচ ও গতি।</div>
<div class="dialogue en">"The kernel chamber said — give custom kernels. But I say — kernels are the end. Hardware is the start. Without the right GPU, all optimization is meaningless. A100 vs H100 vs T4 — each has its own capability. Right hardware selection = right cost and speed."</div>`,
  story:`

<p class="scene-setting">The ninth step. Hardware chamber. Multiple GPUs on display — each with specifications. Craftsman Adnan studied each. "A100 — powerful but expensive. H100 — next-gen, fastest. T4 — budget option. Consumer RTX — accessible but limited VRAM. Right GPU per task. Wrong choice = waste. The hardware determines what's possible."</p>

<p class="scene-setting en">The ninth step. Hardware chamber. Multiple GPUs on display — each with specifications. Craftsman Adnan studied each. "A100 — powerful but expensive. H100 — next-gen, fastest. T4 — budget option. Consumer RTX — accessible but limited VRAM. Right GPU per task. Wrong choice = waste. The hardware determines what's possible."</p>

<div class="code-block">Hardware Choice — Right GPU per Task:

GPU COMPARISON (2024-2025):

┌──────────┬────────┬────────┬──────────┬──────────────┐
│ GPU      │ VRAM   │ TFLOPS │ $/hr     │ Best For     │
│          │        │ (FP16) │ (cloud)  │              │
├──────────┼────────┼────────┼──────────┼──────────────┤
│ H100     │ ৮০ GB  │ ~৯৮৯   │ $২.৫-৪   │ Best perf,   │
│ (SXM)    │        │        │          │ high-QPS     │
├──────────┼────────┼────────┼──────────┼──────────────┤
│ A100     │ ৮০ GB  │ ~৩১২   │ $১.৫-৩.৫ │ Production   │
│          │        │        │          │ standard     │
├──────────┼────────┼────────┼──────────┼──────────────┤
│ A10G     │ ২৪ GB  │ ~৩৫    │ $০.৭৫-১  │ Small models │
│          │        │        │          │ (৭B int8)   │
├──────────┼────────┼────────┼──────────┼──────────────┤
│ T4       │ ১৬ GB  │ ~৮.১   │ $০.৩-০.৬ │ Cheap, small │
│          │        │        │          │ (৭B int4)   │
├──────────┼────────┼────────┼──────────┼──────────────┤
│ L4       │ ২৪ GB  │ ~৩০    │ $০.৫-০.৮ │ T4 successor │
├──────────┼────────┼────────┼──────────┼──────────────┤
│ L40S     │ ৪৮ GB  │ ~৯১    │ $১-১.৫   │ Mid-range    │
│          │        │        │          │ production   │
├──────────┼────────┼────────┼──────────┼──────────────┤
│ RTX 4090 │ ২৪ GB  │ ~৩৩০   │ $০.৪*    │ Dev/prototyping│
│ (consumer)│        │        │          │ not for prod  │
├──────────┼────────┼────────┼──────────┼──────────────┤
│ Mac M২/৩ │ ২৪-১২৮ │ ~১৫-৩০ │ owned    │ CPU inference │
│ Ultra    │ GB unif│        │          │ (GGUF)        │
└──────────┴────────┴────────┴──────────┴──────────────┘

* consumer GPU = buy, not rent. ~$১৬০০ purchase.

GPU SELECTION BY MODEL SIZE:

  ৭B model:
    fp16: needs ১৪ GB weights + KV → T4 (int4) বা A10G
    int4: ৩.৫ GB → T4 easily!
    → best: T4 ($০.৫/hr) বা L4 ($০.৭/hr)
  
  ১৩B model:
    fp16: ২৬ GB → A100 ৪০GB minimum
    int4: ৭ GB → T4 (tight) বা L4/A10G
    → best: L4 ($০.৭/hr) বা A10G ($১/hr)
  
  ৭০B model:
    fp16: ১৪০ GB → ২×A100 80GB (tensor parallel)
    int4: ৩৫ GB → A100 ৪০GB (barely) বা ৮০GB
    → best: A100 ৮০GB ($৩/hr) × ১-২ GPUs
  
  ৪০৫B model (Llama ৩.১):
    int4: ~২০০ GB → ৪×A100 80GB বা ২×H100
    → only enterprise!

CLOUD vs ON-PREMISES:

  Cloud (AWS, GCP, Azure):
    ✅ no upfront cost
    ✅ scale up/down
    ✅ managed options
    ❌ expensive long-term ($৩/hr × ২৪×৩০ = $২১৬০/mo)
  
  On-premises (buy GPU):
    → A100 ৮০GB: ~$১৫,০০০ purchase
    → break-even: ~৭ months (vs cloud $৩/hr)
    ✅ cheaper long-term
    ✅ data privacy
    ❌ upfront cost, maintenance, scaling

MANAGED LLM HOSTING (no GPU management):
  
  → Together AI: $০.০০০২/১K tokens (Llama ৮B)
  → Anyscale: pay-per-use, Ray-based
  → Modal: serverless GPU, $০.০০০১৬/sec
  → Replicate: $০.০০৬/min for ৭B
  → HF Inference Endpoints: managed vLLM
  
  → cheapest for low traffic!
  → scale up automatically

SPOT INSTANCES:
  → AWS/GCP spot GPUs: ৬০-৭০% cheaper
  → can be terminated anytime
  → use for: batch processing, eval, 
    non-critical workloads
  → NOT for: production serving (need reliability)

MULTI-GPU STRATEGIES:

  Tensor Parallel (within node):
    → split model across GPUs
    → vLLM: --tensor-parallel-size N
    → GPUs connected via NVLink (fast)
  
  Pipeline Parallel (across nodes):
    → split layers across nodes
    → slower (network between nodes)
    → needed for very large models (৪০৫B)
  
  Data Parallel (replicate model):
    → each GPU runs full model
    → handle different requests
    → simplest, best for throughput

MEMORY BANDWIDTH (often matters more than TFLOPS):
  
  LLM inference = memory-bandwidth bound!
  (decode phase: load weights, generate ১ token)
  
  H100: ৩.৩৫ TB/s bandwidth
  A100: ২.০ TB/s
  T4: ০.৩২ TB/s
  
  → H100 is ১০x faster bandwidth than T4!
  → but only ৩x more expensive
  → better value for bandwidth-bound workloads</div>

<div class="dialogue">আলা — tools, equipment, instruments। কুরআনে আল্লাহ বলেন — "আমি মানুষকে দিয়েছি যাবতীয় সরঞ্জাম।" (৯০:৮-১০)। প্রতিটা কাজের জন্য সঠিক সরঞ্জাম। GPU-ও আলা — প্রতিটা কাজের জন্য সঠিক GPU। সঠিক হার্ডওয়্যার ছাড়া সফটওয়্যার optimization অর্থহীন। আলা — সঠিক উপকরণ নির্বাচন।</div>
<div class="dialogue en">"Ala — tools, equipment, instruments. Allah says — 'We gave man all tools.' (90:8-10). Right tool for each task. GPU too — right GPU per task. Without the right hardware, software optimization is meaningless. Ala — selecting the right equipment."</div>`,
  senior:{
    title:"GPU Selection — Quick Guide",
    body:`<p><strong>৭B model (most common):</strong> T4 (int4) বা L4 (int8) — $০.৫-০.৮/hr।</p><p><strong>১৩B model:</strong> L4 বা A10G (int4) — $০.৭-১/hr।</p><p><strong>৭০B model:</strong> A100 ৮০GB (int4) — $৩/hr × ১ GPU।</p><p><strong>Low traffic (<১K req/day):</strong> Managed (Together AI / Modal / Replicate) — pay per use, no GPU management।</p><p><strong>High traffic:</strong> Self-host on A100/H100 — cheaper per token at scale।</p><p><strong>Dev/prototyping:</strong> Consumer RTX 4090 ($১৬০০) বা Mac M3 (GGUF) বা Colab Pro ($১০/mo)।</p><p><strong>Spot instances:</strong> ৬০-৭০% cheaper for batch/eval/non-critical।</p>`
  }
});

// ══ DOOR 10: SYNTHESIS ══
doors.push({
  num:10, icon:"💎", color:"#94a3b8", name:"নিখুঁতির সমন্বয়",
  subtitle:"The Diamond Synthesis", tech:"Complete Optimization Architecture",
  spirit:"কামাল — পূর্ণতা, সর্বোচ্চ পরিশীলন",
  secret:"নয়টি ধাপ পেরিয়েছ। KV cache, quantization, batching, attention, speculative decoding, memory, pruning/distillation, kernels, hardware। সব একসাথে = নিখুঁত inference। গতি = প্রতিযোগিতার ধার। যে ধারালো, সে জেতে। কামাল — পূর্ণতার শিল্প।",
  recall:{
    q:"নিখুঁতির সমন্বয়ে কেন সব একসাথে?",
    qen:"Why everything together?",
    a:"কারণ বিচ্ছিন্ন optimization = অসম্পূর্ণ। নয়টি ধাপ একসাথে = নিখুঁত inference। কামাল — পূর্ণতা, সর্বোচ্চ পরিশীলন। গতি = প্রতিযোগিতার ধার।",
    aen:"Because isolated optimization = incomplete. Nine steps together = perfect inference. Kamal — perfection, maximum refinement. Speed = competitive edge."
  },
  story:`
<p class="scene-setting">দশম ধাপ। শেষ। স্থপতি ইদ্রিস একটা নিখুঁত হীরা ধরে আছেন — নয়টি তল, প্রতিটি চকচকে। "তুমি নয় ধাপ পেরিয়েছ," তিনি বললেন। "এখন দেখো — সব একসাথে। একটা নিখুঁত হীরা। প্রতিটা তল আলাদা, কিন্তু একসাথে = চকচকে। এটাই নিখুঁত inference optimization। গতি = প্রতিযোগিতার ধার।"</p>
<p class="scene-setting en">The tenth step. The last. Architect Idris holds a perfect diamond — nine facets, each gleaming. "You've passed nine steps," he said. "Now see — all together. One perfect diamond. Each facet separate, but together = brilliant. This is perfect inference optimization. Speed = competitive edge."</p>

<div class="dialogue">নয়টি ধাপ পেরিয়েছ। স্মৃতি বলেছিলেন, KV cache। সংকোচন বলেছিলেন, quantization। দল বলেছিলেন, batching। দৃষ্টি বলেছিলেন, attention optimization। ভবিষ্যৎ বলেছিলেন, speculative decoding। মেমরি বলেছিলেন, memory management। পরিশীলন বলেছিলেন, pruning/distillation। যন্ত্রাংশ বলেছিলেন, kernels। হার্ডওয়্যার বলেছিলেন, GPU selection। এখন — সব একসাথে।</div>
<div class="dialogue en">"You've passed nine steps. Memory said, KV cache. Compression said, quantization. Group said, batching. Attention said, attention optimization. Prediction said, speculative decoding. Memory said, memory management. Refinement said, pruning/distillation. Kernel said, custom kernels. Hardware said, GPU selection. Now — all together."</div>

<div class="code-block">Complete Inference Optimization Stack:

┌──────────────────────────────────────────────────┐
│ COMPLETE OPTIMIZATION STACK (bottom → top)        │
├──────────────────────────────────────────────────┤
│                                                   │
│  LAYER ১: HARDWARE (Door ৯)                     │
│  ├── GPU: A100 ৮০GB for production               │
│  ├── Memory bandwidth: ২ TB/s                    │
│  └── Tensor cores for fast matmul                 │
│                                                   │
│  LAYER ২: KERNEL (Door ৮)                        │
│  ├── vLLM Triton kernels (fused operations)      │
│  ├── FlashAttention-২/৩                          │
│  └── Optimized matmul, RMSNorm, SiLU             │
│                                                   │
│  LAYER ৩: MODEL OPTIMIZATION (Doors ৭,২)       │
│  ├── AWQ int4 quantization (৪x smaller)          │
│  ├── GQA architecture (৪x less KV)               │
│  └── Pruning/distillation (if custom model)      │
│                                                   │
│  LAYER ৪: MEMORY (Door ৬)                        │
│  ├── PagedAttention (zero fragmentation)          │
│  ├── Prefix caching (shared system prompt)        │
│  ├── KV cache quantization (int8)                │
│  └── Multi-LoRA serving                          │
│                                                   │
│  LAYER ৫: ATTENTION (Door ৪)                    │
│  ├── FlashAttention-৩ (H100) / FA-২ (A100)      │
│  ├── Sliding window (long context)               │
│  └── GQA (reduced KV computation)                │
│                                                   │
│  LAYER ৬: BATCHING (Door ৩)                     │
│  ├── Continuous batching (vLLM default)          │
│  ├── Dynamic batch sizing                         │
│  └── Chunked prefill (mixed workloads)           │
│                                                   │
│  LAYER ৭: SPECULATIVE DECODING (Door ৫)         │
│  ├── Draft model (Llama ১B for ৮B)              │
│  ├── ৫ speculative tokens                         │
│  └── ~২x speedup, zero quality loss              │
│                                                   │
│  LAYER ৮: NETWORK & API                          │
│  ├── OpenAI-compatible REST API                   │
│  ├── SSE streaming                                │
│  └── Load balancer (multiple GPU nodes)          │
│                                                   │
│  LAYER ৯: MONITORING                             │
│  ├── GPU utilization (target > ৮০%)             │
│  ├── Tokens/sec throughput                        │
│  ├── Latency p50/p95/p99                         │
│  └── Cost per token                               │
│                                                   │
└──────────────────────────────────────────────────┘

EXPECTED PERFORMANCE (Llama ৩.১ ৮B):

  ┌──────────────────────┬──────────┬──────────┐
  │ Configuration        │ tok/sec  │ Cost/M   │
  ├──────────────────────┼──────────┼──────────┤
  │ PyTorch eager fp16   │ ~৪০      │ $$$      │
  │ + vLLM (batching)    │ ~৮০      │ $$       │
  │ + int4 AWQ           │ ~১২০     │ $        │
  │ + FlashAttention     │ ~১৪০     │ $        │
  │ + prefix caching     │ ~১৬০     │ $        │
  │ + speculative decode │ ~২৫০     │ $        │
  │ + H100 (vs A100)     │ ~৪০০     │ $        │
  └──────────────────────┴──────────┴──────────┘
  
  → ১০x faster than naive PyTorch!
  → at same or lower cost!

OPTIMIZATION PRIORITY (do in this order):

  ১. Use vLLM (free ২-৩x from batching + FlashAttn)
  ২. Quantize to int4 AWQ (free ২-৩x from memory)
  ৩. Enable prefix caching (free ৫০% TTFT)
  ৪. Use GQA model (Llama ৩ — built-in)
  ৫. Add speculative decoding (~২x more)
  ৬. Right GPU choice (A100/H100 vs T4)
  ৭. Custom kernels (TensorRT — if max speed needed)
  ৮. Pruning/distillation (if custom model)

THE BUSINESS IMPACT:
  
  Naive deployment: $৩০০০/month, ৪০ tok/sec
  Optimized deployment: $৫০০/month, ২৫০ tok/sec
  
  → ৬x cheaper AND ৬x faster!
  → this is why optimization matters
  → every dollar saved = runway extended
  → every ms saved = user retained</div>

<div class="verse">"যিনি সৃষ্টি করেছেন এবং নিয়মে বেঁধেছেন। যিনি পরিমাপ করেছেন এবং পথ দেখিয়েছেন।"<br>— কুরআন ৮৭:২-৩<br><br>Inference optimization হলো সেই নিয়মে বাঁধা — প্রতিটা computation নিয়মে, প্রতিটা byte গোনা, প্রতিটা GPU সর্বোচ্চ। যে নিয়মে বাঁধে, সে দ্রুত। যে অগোছালো, সে ধীর। এটাই ধাতব কর্মক্ষমতা — নিখুঁতির সাধনা।</div>

<div class="secret-box"><div class="label">দশম ধাপ — সমন্বয়</div><div class="text">💎 Inference Optimization = KV Cache + Quantization + Batching + Attention + Speculative + Memory + Pruning + Kernels + Hardware।<br><small>সব একসাথে = নিখুঁত inference। গতি = প্রতিযোগিতার ধার। ১০x faster, ৬x cheaper।</small></div></div>`
});
