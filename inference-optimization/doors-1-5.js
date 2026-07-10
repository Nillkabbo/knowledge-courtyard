// ════════════════════════════════════════
// ধাতব কর্মক্ষমতা — DOORS 1-5
// Inference Optimization: KV Cache → Attention
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: KV CACHE ══
doors.push({
  num:1, icon:"⚙️", color:"#94a3b8", name:"স্মৃতির কক্ষ",
  subtitle:"The Memory Chamber", tech:"KV Cache Internals",
  spirit:"হাফিয — স্মৃতি সংরক্ষণ, পুনরাবৃত্তি এড়ানো",
  secret:"LLM প্রতিটা token তৈরি করতে গোটা context প্রসেস করে। ১০০০ token = ১০০০ বার প্রসেস? না! KV cache। পুরোনো token-এর key-value সংরক্ষণ। পুনরায় গোনা এড়ায়। এটাই inference-এর সবচেয়ে গুরুত্বপূর্ণ optimization।",
  recall:{
    q:"স্মৃতির কক্ষে কেন পুরোনো কাজ মনে রাখা হয়?",
    qen:"Why remember old work?",
    a:"কারণ পুনরায় করা = সময় নষ্ট। KV cache পুরোনো token-এর key-value সংরক্ষণ করে। প্রতিটা নতুন token শুধু নতুন হিসাব করে। হাফিয — স্মৃতি সংরক্ষণ, পুনরাবৃত্তি এড়ানো।",
    aen:"Because redoing = waste of time. KV cache stores old tokens' key-value. Each new token only computes new. Hafiz — memory preservation, avoiding repetition."
  },
  story:`
<p class="scene-setting">প্রথম ধাপ। স্মৃতির কক্ষ। কারিগর আদনান একটা বড় খাতা ধরে আছেন — প্রতিটা কাজের ফল লেখা। "আমি প্রতিটা কাজ আবার করি না," তিনি বললেন। "খাতায় লেখা আছে। দরকার হলে দেখি।" সামনে একটা দীর্ঘ কাজ — ধাপ ১ থেকে ১০০। আদনান ধাপ ১০১ করছেন, কিন্তু ১-১০০ আবার করছেন না। খাতায় আছে। এটাই KV cache।</p>
<p class="scene-setting en">The first step. Memory chamber. Craftsman Adnan holds a large ledger — each task's result written. "I don't redo each task," he said. "It's in the ledger. I look when needed." Before him — a long task, steps 1 to 100. Adnan does step 101, but doesn't redo 1-100. They're in the ledger. This is KV cache.</p>

<div class="dialogue">LLM Evals বইয়ে তুমি শিখেছ মাপতে। এখন আমি বলি — মাপলে দেখবে LLM ধীর। কেন? কারণ প্রতিটা token তৈরি করতে গোটা context প্রসেস করে। ১০০০ token context? প্রতিটা নতুন token-এ ১০০০ পুরোনো token আবার প্রসেস? এটা ধীর। সমাধান — KV cache। পুরোনো ফল সংরক্ষণ, পুনরাবৃত্তি এড়াও।</div>
<div class="dialogue en">"In the LLM Evals book you learned to measure. Now I say — measuring shows the LLM is slow. Why? Because each token processes the entire context. 1000 token context? Each new token reprocesses 1000 old tokens? That's slow. Solution — KV cache. Store old results, avoid repetition."</div>

<div class="code-block">KV Cache — The Heart of Fast Inference:

THE PROBLEM (without cache):
  
  Token ১: process [token ১] → output
  Token ২: process [token ১, ২] → output
  Token ৩: process [token ১, ২, ৩] → output
  ...
  Token N: process [token ১, ২, ..., N] → output
  
  Total work: ১ + ২ + ৩ + ... + N = N²/২
  → ১০০০ tokens = ৫০০,০০০ operations!
  → O(N²) → quadratic growth → VERY slow

THE SOLUTION (with KV cache):
  
  Prefill phase (process prompt once):
    → compute K (keys) and V (values) for all 
      prompt tokens
    → store in cache
  
  Decode phase (generate one token at a time):
    → new token → compute its Q (query)
    → attention: Q × cached K → attention weights
    → weights × cached V → output
    → store new token's K, V in cache
  
  Total work: N (prefill) + N × ১ (decode) = ২N
  → ১০০০ tokens = ২,০০০ operations!
  → O(N) → LINEAR growth → MUCH faster

MEMORY ANALOGY:
  
  Without cache:
    → প্রতিটা প্রশ্নে সম্পূর্ণ বই পড়ো
    → অত্যন্ত ধীর
  
  With cache:
    → বই একবার পড়ো → নোট নাও
    → প্রশ্নে শুধু নোট দেখো
    → অত্যন্ত দ্রুত

KV CACHE MEMORY USAGE:
  
  Per token per layer:
    K: (d_head) floats
    V: (d_head) floats
  
  Total per token:
    ২ × n_layers × n_heads × d_head × bytes
  
  Example (Llama ৩.১ ৮B):
    n_layers = ৩২
    n_heads = ৩২  
    d_head = ১২৮
    dtype = fp16 (২ bytes)
    
    Per token: ২ × ৩২ × ৩২ × ১২৮ × ২ = ৫২৪,২৮৮ bytes
    = ০.৫ MB per token!
    
    ৪K context: ৪০৯৬ × ০.৫ MB = ২ GB cache!
    ১২৮K context: ৬৪ GB cache!!

  → KV cache = dominant GPU memory consumer
  → large context = large cache = fewer 
    concurrent users

KV CACHE OPTIMIZATIONS:

১. PagedAttention (vLLM)
  প্রথাগত: প্রতিটা request-এ নির্দিষ্ট মেমরি block
    → fragmentation, waste
  
  PagedAttention: virtual memory like OS
    → pages of KV cache, dynamically allocated
    → shared across requests
    → near-zero waste
    → ২-৩x more concurrent requests fit!

২. Prefix Caching
  System prompt same for all requests?
    → cache KV for system prompt ONCE
    → reuse for every request
    → prefill skipped for shared prefix!
    → TTFT drops ৫০-৮০%

৩. KV Cache Compression
  Cache too big? Compress it!
    → evict old/unimportant KV entries
    → H২O: keep top-k important tokens
    → quantize KV cache (int8, int4)
    → ২-৪x less memory

৪. Multi-Query Attention (MQA)
  Multiple heads share ONE K, V
  → KV cache shrinks n_heads times!
  → Llama ২: ৩২ heads → ১ KV → ৩২x less cache
  → slight quality loss

৫. Grouped-Query Attention (GQA)
  Middle ground: M groups share K, V
  → Llama ৩: ৮ KV heads (from ৩২ Q heads)
  → ৪x less cache than MHA
  → minimal quality loss

KV CACHE LIFECYCLE:
  
  ১. Allocate: request starts → allocate cache
  ২. Fill (prefill): process prompt → fill cache
  ৩. Append (decode): each token → append KV
  ৪. Reuse (prefix): shared prefix → reuse
  ৫. Evict: context too long → evict old
  ৬. Free: request done → free cache

  → cache management = critical for throughput</div>

<div class="dialogue">হাফিয — preserver, memorizer। কুরআনে আল্লাহ বলেন — "নিশ্চয় আমরা কুরআন নাজিল করেছি এবং নিশ্চয় আমরাই এর সংরক্ষক।" (১৫:৯)। সংরক্ষণ = পুনরায় পড়ার প্রয়োজন নেই। KV cache-ও সেই সংরক্ষণ — পুরোনো হিসাব সংরক্ষণ, পুনরায় নয়। হাফিয — স্মৃতি সংরক্ষণের গুণ। যে সংরক্ষণ করে, সে দ্রুত। যে প্রতিবার আবার করে, সে ধীর।</div>
<div class="dialogue en">"Hafiz — preserver, memorizer. Allah says — 'We sent down the Quran and We are its preserver.' (15:9). Preservation = no need to re-read. KV cache too — old computations preserved, not redone. Hafiz — the virtue of memory preservation. One who preserves, is fast. One who redoes each time, is slow."</div>`,
  senior:{
    title:"KV Cache — Key Numbers",
    body:`<p><strong>Per token (8B model):</strong> ~০.৫ MB KV cache। ৪K context = ~২ GB। ১২৮K = ~৬৪ GB।</p><p><strong>Optimization wins:</strong> PagedAttention (vLLM) = ২-৩x more concurrent users। Prefix caching = ৫০-৮০% TTFT reduction। GQA = ৪x less cache memory।</p><p><strong>Monitoring:</strong> Track KV cache memory usage per request। OOM? Reduce batch size বা context length বা use GQA/MQA model।</p>`
  }
});

// ══ DOOR 2: QUANTIZATION ══
doors.push({
  num:2, icon:"🗜️", color:"#64748b", name:"সংকোচনের কক্ষ",
  subtitle:"The Compression Chamber", tech:"Model Quantization",
  spirit:"ইখতিসার — সংক্ষিপ্ততা, সারমর্ম",
  secret:"fp16 model = ১৪ GB। int4 = ৩.৫ GB। একই মডেল, কম মেমরি, প্রায় একই গুণমান। Quantization = সংখ্যার precision কমাও। কম precision = কম মেমরি = কম খরচ = দ্রুত। কিন্তু precision loss। সঠিক অনুপাত = সঠিক ফল। ইখতিসার — সংক্ষিপ্ততার শিল্প।",
  recall:{
    q:"সংকোচনের কক্ষে কেন পণ্য চেপে ছোট করা হয়?",
    qen:"Why compress products?",
    a:"কারণ ছোট = কম জায়গা, কম খরচ, দ্রুত। Quantization-ও তেমনি — precision কমাও। fp16 → int4 = ৪x কম মেমরি। প্রায় একই গুণমান। ইখতিসার — সংক্ষিপ্ততা, সারমর্ম ধরে রেখে।",
    aen:"Because smaller = less space, less cost, faster. Quantization too — reduce precision. fp16 → int4 = 4x less memory. Nearly same quality. Ikhtisar — brevity, keeping the essence."
  },
  story:`
<p class="scene-setting">দ্বিতীয় ধাপ। সংকোচনের কক্ষ। কারিগর সাবরিনা একটা বড় পাথর চেপে ছোট করছেন — কিন্তু শক্তি রাখছেন। "বড় = বেশি জায়গা, বেশি খরচ," তিনি বললেন। "ছোট = কম জায়গা, কম খরচ, দ্রুত। কিন্তু শক্তি প্রায় একই। Quantization ঠিক তেমনি — precision কমাও, ক্ষমতা ধরে রাখো।"</p>
<p class="scene-setting en">The second step. Compression chamber. Craftswoman Sabrina compresses a large stone smaller — but keeps its strength. "Large = more space, more cost," she said. "Small = less space, less cost, faster. But strength nearly the same. Quantization is exactly that — reduce precision, keep capability."</p>

<div class="dialogue">KV cache কক্ষ বলেছিলেন — মেমরি সংরক্ষণ করো। কিন্তু আমি বলি — মেমরি সংরক্ষণ ছাড়াও মেমরি কমানো যায়। Quantization। মডেলের প্রতিটি weight একটি সংখ্যা। সেই সংখ্যার precision কমাও — ১৬ bit থেকে ৪ bit-এ। ৪ গুণ কম মেমরি। প্রায় একই গুণমান। এটাই inference optimization-এর সবচেয়ে শক্তিশালী অস্ত্র।</div>
<div class="dialogue en">"The KV cache chamber said — preserve memory. But I say — beyond preserving, memory can be reduced. Quantization. Each model weight is a number. Reduce that number's precision — 16 bit to 4 bit. 4 times less memory. Nearly same quality. This is inference optimization's most powerful weapon."</div>

<div class="code-block">Quantization — Smaller, Faster, Cheaper:

PRECISION LEVELS:

  ┌───────────┬──────────┬──────────────┬──────────┐
  │ Format    │ Bits     │ ৭B Model Size │ Quality  │
  ├───────────┼──────────┼──────────────┼──────────┤
  │ fp32      │ ৩২       │ ২৮ GB        │ ১০০%     │
  │ fp16/bf16 │ ১৬       │ ১৪ GB        │ ~১০০%    │
  │ int8      │ ৮        │ ৭ GB         │ ~৯৮%     │
  │ int4/nf4  │ ৪        │ ৩.৫ GB       │ ~৯৫%     │
  │ int2      │ ২        │ ১.৭৫ GB      │ ~৮০%     │
  └───────────┴──────────┴──────────────┴──────────┘

  Key insight:
    fp16 → int4 = ৪x smaller, ৪x faster load
    Quality loss: ~২-৫% (acceptable for most)

QUANTIZATION METHODS (worst → best):

১. ROUND-TO-NEAREST (RTN)
  → simplest: just round to nearest int
  → weight = ০.৩৪৭ → int8: ৮৯, int4: ৬
  ✅ সহজ, fast
  ❌ accuracy loss, outlier weights break

২. GPTQ (Generative Post-training Quantization)
  → one-shot quantization
  → uses calibration data to adjust
  → accounts for weight importance
  ✅ ভালো accuracy, fast quantize
  ✅ GPU inference optimized
  ❌ requires calibration data (১২৮ examples)
  
  Tools: AutoGPTQ, GPTQ-for-LLaMa

৩. AWQ (Activation-aware Weight Quantization)
  → identifies "important" weights (via activations)
  → keeps important weights in higher precision
  → less important in int4
  ✅ better accuracy than GPTQ
  ✅ fast inference
  ✅ vLLM native support
  
  Tools: AutoAWQ, llm-awq

৪. GGUF (llama.cpp format)
  → CPU/Mac optimized
  → multiple quantization levels (Q৪_K_M, Q৫, Q৮)
  → runs without GPU!
  ✅ best for CPU/Mac inference
  ✅ Ollama uses GGUF
  ❌ slower than GPU
  
  Tools: llama.cpp, Ollama, LM Studio

৫. EXL2 (ExLlamaV2)
  → variable bit quantization per layer
  → important layers: more bits
  → less important: fewer bits
  ✅ excellent quality/speed trade-off
  ❌ ExLlamaV2-specific (not universal)

WHEN TO USE WHICH:

  ┌──────────────────┬──────────────────────┐
  │ Your Setup       │ Best Method          │
  ├──────────────────┼──────────────────────┤
  │ GPU (NVIDIA)     │ AWQ বা GPTQ          │
  │ vLLM serving     │ AWQ (native support) │
  │ CPU / Mac        │ GGUF (Q৪_K_M)       │
  │ Mobile / Edge    │ GGUF Q৩ বা Q৪       │
  │ Maximum quality  │ fp16 (no quant)     │
  │ Maximum speed    │ int4 AWQ             │
  │ Balanced         │ int8 GPTQ            │
  └──────────────────┴──────────────────────┘

QUANTIZATION IMPACT:
  
  Llama ৩.১ ৮B:
    fp16: ১৪ GB → needs A100 (৪০GB) for serving
    AWQ int4: ৩.৫ GB → runs on T4 (১৬GB)!
    → consumer GPU accessible!
  
  Throughput improvement:
    fp16: ~৫০ tokens/sec (A100)
    int4: ~১২০ tokens/sec (A100)
    → ২.৪x faster! (less memory bandwidth)

  Cost improvement:
    fp16: A100 ($৩/hr) for ৭B
    int4: T4 ($০.৫/hr) for ৭B
    → ৬x cheaper!

QUALITY BENCHMARKS:
  
  MMLU (Llama ৩.১ ৮B):
    fp16: ৭৩.০%
    int8: ৭২.৫% (-০.৫%)
    AWQ int4: ৭১.২% (-১.৮%)
    GPTQ int4: ৭০.৮% (-২.২%)
    GGUF Q৪: ৭১.৫% (-১.৫%)
  
  → int4: ~২% quality loss for ৪x size reduction
  → worth it for almost all production use cases

KV CACHE QUANTIZATION:
  Not just weights — cache too!
  
  fp16 KV cache: ২ GB (৪K context, ৮B)
  int8 KV cache: ১ GB
  int4 KV cache: ০.৫ GB
  
  → vLLM: --kv-cache-dtype fp8
  → ২x more concurrent requests!</div>

<div class="dialogue">ইখতিসার — brevity, conciseness, summarization। কুরআনে আল্লাহ বলেন — "আমি তোমার জন্য কোরবানির পশুদের বিধান সহজ করেছি।" (২২:৩৪)। সহজ = সংক্ষিপ্ত। Quantization-ও তেমনি — precision কমিয়ে সহজ করো। কম জায়গা, কম খরচ, দ্রুত। কিন্তু সারমর্ম ধরে রাখো। ইখতিসার — সংক্ষিপ্ততার শিল্প, সারমর্ম হারানো নয়।</div>
<div class="dialogue en">"Ikhtisar — brevity, conciseness, summarization. Allah says — 'We have made the sacrificial animals easy for you.' (22:34). Easy = concise. Quantization too — simplify by reducing precision. Less space, less cost, faster. But keep the essence. Ikhtisar — the art of brevity, not losing the essence."</div>`,
  senior:{
    title:"Quantization Decision — Which Method?",
    body:`<p><strong>GPU (vLLM):</strong> AWQ int4 — best speed/quality। vLLM native support।</p><p><strong>CPU/Mac:</strong> GGUF Q4_K_M — Ollama, llama.cpp। Runs without GPU।</p><p><strong>Quality-critical:</strong> int8 GPTQ — <১% quality loss।</p><p><strong>Max quality:</strong> fp16 — no quantization। Use if GPU budget allows।</p><p><strong>Rule:</strong> Start with int4 AWQ। If quality drops >৩%, switch to int8। If running on Mac/CPU, GGUF Q4_K_M।</p>`
  }
});

// ══ DOOR 3: BATCHING ══
doors.push({
  num:3, icon:"🧮", color:"#94a3b8", name:"দলের কক্ষ",
  subtitle:"The Batching Chamber", tech:"Request Batching Strategies",
  spirit:"জামায়াত — দলবদ্ধ, একসাথে",
  secret:"এক কোয়েরি = এক GPU call। কিন্তু ১০০ কোয়েরি একসাথে = এক GPU call। Batching = একাধিক request একসাথে প্রসেস। GPU utilization বাড়ে, খরচ কমে। কিন্তু ভুল batching = latency বাড়ে। সঠিক batching = throughput ও latency ভারসাম্য।",
  recall:{
    q:"দলের কক্ষে কেন এক কর্মী নয়, একসাথে অনেক কাজ?",
    qen:"Why many tasks together, not one?",
    a:"কারণ একসাথে = দক্ষ। Batching — একাধিক request এক GPU call-এ। GPU utilization বাড়ে, খরচ কমে। জামায়াত — দলবদ্ধ, একসাথে। সঠিক ভারসাম্য = সঠিক ফল।",
    aen:"Because together = efficient. Batching — multiple requests in one GPU call. GPU utilization up, cost down. Jamaat — grouped, together. Right balance = right result."
  },
  story:`
<p class="scene-setting">তৃতীয় ধাপ। দলের কক্ষ। এক কর্মী এক কাজ করছে — GPU অর্ধেক খালি। তারপর আরেক কর্মী এল, পাশে বসল। এখন দুটো কাজ একসাথে — GPU পূর্ণ। "একা = অপচয়," মাস্টার কারিগর হাসান বললেন। "দল = দক্ষ। Batching — একাধিক request একসাথে। GPU পূর্ণ, খরচ কম, throughput বেশি।"</p>
<p class="scene-setting en">The third step. Batching chamber. One worker doing one task — GPU half empty. Then another worker came, sat beside. Now two tasks together — GPU full. "Alone = waste," Master craftsman Hasan said. "Group = efficient. Batching — multiple requests together. GPU full, less cost, higher throughput."</p>

<div class="dialogue">Quantization কক্ষ বলেছিলেন — precision কমাও। কিন্তু আমি বলি — precision কমানো এক দিক। আরেক দিক — GPU ভালো ব্যবহার। এক request-এ GPU অর্ধেক খালি থাকে। কিন্তু একাধিক request একসাথে? GPU পূর্ণ। Batching। এটাই throughput বাড়ানোর মূল কৌশল।</div>
<div class="dialogue en">"The quantization chamber said — reduce precision. But I say — reducing precision is one side. The other — using GPU well. One request leaves GPU half empty. But multiple together? GPU full. Batching. This is the key technique for increasing throughput."</div>

<div class="code-block">Batching — GPU Utilization Mastery:

WHY BATCHING MATTERS:

  GPU একবারে অনেক computation করতে পারে
  → thousands of cores, parallel
  → ১ request = GPU অর্ধেক খালি
  → ১৬ requests = GPU পূর্ণ
  
  Analogy:
    Bus with ৫০ seats
    → ১ passenger = ৪৯ seats empty (waste!)
    → ৫০ passengers = full (efficient!)
    → batching = filling the bus

BATCHING STRATEGIES:

১. STATIC BATCHING (simplest)
  → collect N requests → process together
  → wait for batch to fill → then process
  
  ✅ সহজ
  ❌ latency: wait for batch to fill
  ❌ slow request delays entire batch
  
  "Bus waits until full before leaving"
  → some passengers wait long

২. DYNAMIC BATCHING
  → new requests join running batch
  → don't wait — start immediately, add as they come
  → better latency
  
  ✅ lower latency than static
  ❌ still processes in discrete steps
  
  "Bus leaves on schedule, picks up 
   passengers en route"

৩. CONTINUOUS BATCHING (vLLM, best!)
  → each token step: 
    → completed requests leave
    → new requests join
    → NO waiting for slowest
  
  Request A: [tok][tok][tok][DONE]       
  Request B: [tok][tok][tok][tok][DONE]  
  Request C: [tok] joins when A finishes
  
  → GPU never idle
  → ৩-৫x throughput vs static
  
  ✅ maximum throughput
  ✅ minimum latency
  ✅ no head-of-line blocking
  
  "Conveyor belt — items enter and leave 
   independently"

vLLM CONTINUOUS BATCHING IN DETAIL:
  
  Iteration ১:
    → batch = [Req A (token ৫), Req B (token ৩)]
    → process both → produce next token for each
  
  Iteration ২:  
    → Req A finishes! (was ৬ token output)
    → Req C arrives
    → batch = [Req B (token ৪), Req C (token ১)]
  
  Iteration ৩:
    → Req B finishes
    → Req D arrives
    → batch = [Req C (token ২), Req D (token ১)]
  
  → batch size changes dynamically
  → no request waits for others

BATCH SIZE TUNING:
  
  Larger batch = more throughput, more latency
  Smaller batch = less throughput, less latency
  
  ┌────────────┬──────────────┬──────────┐
  │ Batch Size │ Throughput   │ Latency  │
  ├────────────┼──────────────┼──────────┤
  │ ১ (no batch)│ lowest       │ lowest   │
  │ ৮          │ medium       │ medium   │
  │ ৩২         │ high         │ higher   │
  │ ৬৪         │ very high    │ high     │
  │ ১২৮+       │ max (if fits)│ highest  │
  └────────────┴──────────────┴──────────┘
  
  → bounded by GPU memory (KV cache!)
  → max batch = available VRAM / per-request cache

PREFILL vs DECODE BATCHING:

  Prefill (prompt processing):
    → compute-heavy (all tokens at once)
    → batch: কম (memory intensive)
    → TTFT dominant phase
  
  Decode (token generation):
    → memory-bandwidth bound (one token)
    → batch: বেশি (less compute per token)
    → throughput dominant phase
  
  → Disaggregated serving:
    → separate prefill nodes (batch কম)
    → separate decode nodes (batch বেশি)
    → each optimized independently

CHUNKED PREFILL:
  Very long prompt (৮K tokens)?
  → don't process all at once
  → chunk into smaller pieces
  → interleave with decode of other requests
  
  → prevents long-prompt requests from 
    blocking short ones
  → smoother latency distribution

PRACTICAL SETUP (vLLM):
  
  vllm serve meta-llama/Llama-3.1-8B \
    --max-num-batched-tokens ৮১৯২ \
    --max-num-seqs ২৫৬ \
    --enable-prefix-caching
  
  → max-num-seqs: max concurrent requests
  → max-num-batched-tokens: total tokens 
    per batch step
  → auto-tuned by vLLM based on GPU memory</div>

<div class="dialogue">জামায়াত — congregation, group, collective। কুরআনে আল্লাহ বলেন — "তোমরা সবাই আল্লাহর রশি ধরো, একসাথে থাকো।" (৩:১০৩)। একসাথে = শক্তি। একা = দুর্বল। Batching-ও তেমনি — request একসাথে = GPU শক্তিশালী ব্যবহার। একা একা = অপচয়। জামায়াত — দলবদ্ধ শক্তি। যে একসাথে কাজ করে, সে দক্ষ।</div>
<div class="dialogue en">"Jamaat — congregation, group, collective. Allah says — 'Hold fast to the rope of Allah, together.' (3:103). Together = strength. Alone = weak. Batching too — requests together = powerful GPU use. One by one = waste. Jamaat — collective strength. One who works together, is efficient."</div>`,
  senior:{
    title:"Batching Setup — vLLM Tuning",
    body:`<p><strong>Enable continuous batching:</strong> vLLM does this by default — no config needed! Just serve.</p><p><strong>max-num-seqs:</strong> Start with ২৫৬। Monitor GPU memory। If OOM, reduce। If underutilized, increase।</p><p><strong>max-num-batched-tokens:</strong> ৮১৯২ default। Increase for long contexts।</p><p><strong>Chunked prefill:</strong> vLLM recent versions support — helps mixed workloads (short + long prompts)।</p><p><strong>Monitor:</strong> Track GPU utilization (should be > ৮০%), throughput (tokens/sec), latency per request। If GPU < ৫০%? Increase batch size বা concurrent requests।</p>`
  }
});

// ══ DOOR 4: ATTENTION OPTIMIZATION ══
doors.push({
  num:4, icon:"⚡", color:"#64748b", name:"দৃষ্টির কক্ষ",
  subtitle:"The Attention Chamber", tech:"Attention Optimization",
  spirit:"তানজিম — দ্রুত সংগঠন",
  secret:"Attention = O(N²)। দীর্ঘ context = ধীর। FlashAttention, sliding window, sparse attention — প্রতিটা কৌশল attention দ্রুত করে। FlashAttention = ২-৪x faster, same result। সঠিক optimization = দ্রুত ও নির্ভুল। তানজিম — দ্রুত সংগঠন।",
  recall:{
    q:"দৃষ্টির কক্ষে কেন প্রতিটা কাজ দ্রুত করা হয়?",
    qen:"Why make every task faster?",
    a:"কারণ attention O(N²) — দীর্ঘ context ধীর। FlashAttention, sliding window — প্রতিটা কৌশল দ্রুত করে। সঠিক optimization = দ্রুত ও নির্ভুল। তানজিম — দ্রুত সংগঠন।",
    aen:"Because attention is O(N²) — long context is slow. FlashAttention, sliding window — each technique speeds up. Right optimization = fast and precise. Tanzim — fast organization."
  },
  story:`
<p class="scene-setting">চতুর্থ ধাপ। দৃষ্টির কক্ষ। কারিগর মারিয়াম একটা বড় টেবিলে কাজ করছেন — কিন্তু প্রতিটা জিনিস প্রতিটা জিনিসের সাথে তুলনা করছেন। ১০০টা জিনিস = ১০,০০০ তুলনা! ধীর। "আমি একটা কৌশল ব্যবহার করি," তিনি বললেন। "পাশাপাশি জিনিস তুলনা করি, দূরের সব নয়। এটাই FlashAttention — দ্রুত, কম তুলনা, একই ফল।"</p>
<p class="scene-setting en">The fourth step. Attention chamber. Craftswoman Mariam works at a large table — comparing every item with every other. 100 items = 10,000 comparisons! Slow. "I use a technique," she said. "Compare nearby items, not all distant ones. This is FlashAttention — faster, fewer comparisons, same result."</p>

<div class="dialogue">Batching কক্ষ বলেছিলেন — একসাথে কাজ করো। কিন্তু আমি বলি — একসাথে কাজ করলেও প্রতিটা কাজ ধীর হতে পারে। Attention O(N²) — দীর্ঘ context ধীর। FlashAttention, sparse attention — প্রতিটা কৌশল attention নিজে দ্রুত করে। এটাই গভীরতম optimization — algorithm নিজে উন্নত করা।</div>
<div class="dialogue en">"The batching chamber said — work together. But I say — even working together, each task can be slow. Attention is O(N²) — long context is slow. FlashAttention, sparse attention — each technique speeds up attention itself. This is the deepest optimization — improving the algorithm itself."</div>

<div class="code-block">Attention Optimization — Making the Core Faster:

THE ATTENTION BOTTLENECK:
  
  Standard attention:
    Q × K^T → attention weights → × V → output
  
  Complexity: O(N²) in sequence length
  
  N = sequence length (tokens)
  N = ৪K → ১৬M attention scores
  N = ৩২K → ১ billion scores!
  N = ১২৮K → ১৬ billion scores!!
  
  Memory: O(N²) to store attention matrix
  → ১২৮K context attention matrix = ৬৪ GB!
  
  → THIS is the bottleneck for long context

FLASHATTENTION ( Dao et al., 2022):

  Key insight: don't materialize full N×N matrix!
  
  Standard:
    → compute full Q×K^T → write to HBM (slow)
    → read back → softmax → × V → write
  
  FlashAttention:
    → tile the computation into blocks
    → compute attention block by block in SRAM (fast)
    → NEVER materialize full N×N matrix
    → "fused" kernel: Q×K→softmax→×V in one pass
  
  Result:
    → same mathematical result (exact!)
    → ২-৪x faster (less memory I/O)
    → ৫-২০x less memory (no N² matrix stored)
    → enables longer context (৩২K, ১২৮K!)
  
  FlashAttention-২:
    → even better GPU utilization
    → ২x faster than FlashAttention-১
    → now standard in vLLM, TGI
  
  FlashAttention-৩:
    → optimized for H100 GPUs
    → asynchronous execution
    → ১.৫-২x faster than FA-২

SPARSE ATTENTION:
  
  Do we need EVERY token to attend to EVERY other?
  → No! Most attention is local.
  
  Sliding Window Attention:
    → each token attends to last W tokens only
    → O(N×W) instead of O(N²)
    → Mistral: W = ৪০৯৬
    → long-range info propagates through layers
  
  Sparse patterns:
    → local (nearby tokens) + global (key tokens)
    → Longformer, BigBird
    → ১০-১০০x less computation

GROUPED-QUERY ATTENTION (GQA):
  
  Standard Multi-Head Attention (MHA):
    → each head has own Q, K, V
    → ৩২ heads × K,V = lots of memory
  
  Multi-Query Attention (MQA):
    → ALL heads share ONE K, V
    → ৩২x less KV memory!
    → but quality drops slightly
  
  Grouped-Query (GQA) — the sweet spot:
    → M groups of K, V (M < n_heads)
    → e.g., ৮ KV groups for ৩২ Q heads
    → ৪x less memory than MHA
    → minimal quality loss
  
  → Llama ৩ uses GQA
  → standard for modern models

RING ATTENTION (for ultra-long context):
  
  Distributed attention across GPUs
  → each GPU handles a chunk of the sequence
  → GPUs communicate in a ring
  → enables MILLION-token context!
  
  → used for training + inference on massive 
    contexts (Gemini ১M+)

ATTENTION IMPLEMENTATION COMPARISON:

  ┌──────────────────┬────────────┬──────────────┐
  │ Method           │ Speed      │ Memory       │
  ├──────────────────┼────────────┼──────────────┤
  │ Standard         │ ১x (slow)  │ O(N²)        │
  │ FlashAttention ১ │ ২-৪x       │ O(N)         │
  │ FlashAttention ২ │ ৪-৮x       │ O(N)         │
  │ FlashAttention ৩ │ ৬-১২x      │ O(N)         │
  │ Sliding Window   │ ১০-১০০x   │ O(N×W)       │
  │ GQA (vs MHA)     │ ১.৫-৩x    │ ৪x less KV   │
  └──────────────────┴────────────┴──────────────┘

PRACTICAL IMPACT:
  
  Without FlashAttention:
    ৮B model, ৩২K context → OOM (memory)
  
  With FlashAttention:
    ৮B model, ৩২K context → runs fine!
    ৮B model, ১২৮K context → possible!
  
  → FlashAttention = the key enabler for 
    long-context LLMs

ALIBI POSITIONAL BIAS:
  → replaces positional encoding
  → directly encodes distance in attention
  → extrapolates to longer sequences
  → no retraining needed for longer context
  → used in Bloom, MPT

WHAT TO USE:
  
  Serving (vLLM/TGI): 
    → FlashAttention ২/৩ built-in
    → GQA models (Llama ৩)
  
  Training/fine-tuning:
    → FlashAttention ২
    → sliding window for long sequences
  
  Custom models:
    → always use FlashAttention
    → consider GQA for KV cache savings</div>

<div class="dialogue">তানজিম — organization, arrangement, optimization। কুরআনে আল্লাহ বলেন — "যিনি সৃষ্টি করেছেন এবং নিয়মে বেঁধেছেন।" (৮৭:২)। নিয়মে বাঁধা = তানজিম। Attention optimization-ও তেমনি — algorithm নিয়মে বাঁধা। প্রতিটা computation সুসংগঠিত, দ্রুত, নির্ভুল। তানজিম — সুসংগঠিত দ্রুততার গুণ।</div>
<div class="dialogue en">"Tanzim — organization, arrangement, optimization. Allah says — 'Who created and proportioned.' (87:2). Proportioning = tanzim. Attention optimization too — organizing the algorithm. Each computation organized, fast, precise. Tanzim — the virtue of organized speed."</div>`,
  senior:{
    title:"Attention Optimization — What to Enable",
    body:`<p><strong>vLLM/TGI:</strong> FlashAttention 2 is enabled by default। No action needed!</p><p><strong>Custom serving:</strong> Install flash-attn package। Use flash_attention_২ in your model loader।</p><p><strong>Choose GQA models:</strong> Llama 3.1, Mistral — built-in GQA = 4x less KV cache।</p><p><strong>Long context:</strong> FlashAttention makes 32K-128K feasible। Without it — OOM।</p><p><strong>Monitor:</strong> If long-context requests are slow → check FlashAttention is enabled (vllm logs show it)।</p>`
  }
});

// ══ DOOR 5: SPECULATIVE DECODING ══
doors.push({
  num:5, icon:"🔮", color:"#94a3b8", name:"ভবিষ্যৎ কক্ষ",
  subtitle:"The Prediction Chamber", tech:"Speculative Decoding",
  spirit:"যাকিন — নিশ্চিত জ্ঞান, পূর্বাভাস",
  secret:"বড় মডেল ধীর। ছোট মডেল দ্রুত। ছোট মডেল অনুমান করে, বড় মডেল যাচাই করে। সঠিক? গ্রহণ। ভুল? বাতিল। এটাই speculative decoding — ২-৩x faster, একই গুণমান। কোনো গুণমান হ্রাস নেই! যাকিন — নিশ্চিত পূর্বাভাস।",
  recall:{
    q:"ভবিষ্যৎ কক্ষে কেন ছোট কর্মী আগে অনুমান করে, বড় যাচাই করে?",
    qen:"Why does the small worker guess first, big verifies?",
    a:"কারণ ছোট দ্রুত, বড় নির্ভুল। ছোট অনুমান করে, বড় যাচাই। সঠিক? গ্রহণ। ভুল? বাতিল। ২-৩x faster, একই গুণমান। যাকিন — নিশ্চিত পূর্বাভাস, যাচাই সহ।",
    aen:"Because small is fast, big is precise. Small guesses, big verifies. Correct? Accept. Wrong? Discard. 2-3x faster, same quality. Yaqin — certain prediction, with verification."
  },
  story:`
<p class="scene-setting">পঞ্চম ধাপ। ভবিষ্যৎ কক্ষ। একজন ছোট কর্মী দ্রুত কাজ করছেন — অনুমান করে। তার পাশে বড় কর্মী — যাচাই করে। ছোট ৫টা ধাপ দ্রুত বলে। বড় একসাথে ৫টা যাচাই করে। ৪টা সঠিক? গ্রহণ, ১টা ভুল? বাতিল। ফল: ৪টা ধাপ দ্রুত, একই নির্ভুলতা। "এটাই speculative decoding," মাস্টার বললেন।</p>
<p class="scene-setting en">The fifth step. Prediction chamber. A small worker works fast — guessing. Beside him a big worker — verifying. The small one quickly gives 5 steps. The big one verifies all 5 at once. 4 correct? Accept. 1 wrong? Discard. Result: 4 steps faster, same accuracy. "This is speculative decoding," the master said.</p>

<div class="dialogue">Attention কক্ষ বলেছিলেন — attention দ্রুত করো। কিন্তু আমি বলি — attention দ্রুত করা ছাড়াও আরেকটা কৌশল আছে। Speculative decoding। বড় মডেল ধীর, কিন্তু ছোট মডেল দ্রুত। ছোট মডেল অনুমান করে, বড় মডেল যাচাই করে। সঠিক অনুমান = দ্রুত উত্তর। একই গুণমান, দ্রুত গতি।</div>
<div class="dialogue en">"The attention chamber said — speed up attention. But I say — beyond speeding up attention, another technique exists. Speculative decoding. Big model is slow, but small model is fast. Small model guesses, big model verifies. Correct guesses = faster answers. Same quality, faster speed."</div>

<div class="code-block">Speculative Decoding — Fast Guesses, Big Verification:

THE INSIGHT:
  LLM decode is sequential — one token at a time
  → each token = one forward pass through model
  → ১০০০ tokens = ১০০০ forward passes
  → SLOW
  
  But: verifying N tokens is almost as cheap 
  as generating ১!
  → a forward pass processes all N tokens in parallel
  → checking "are these correct?" is cheap
  
  Idea: draft multiple tokens (fast), verify all (cheap)

HOW IT WORKS:

  ┌──────────────────────────────────────┐
  │ ১. DRAFT (fast, small model)         │
  │ → small model generates N candidate   │
  │   tokens quickly                      │
  │ → e.g., ৪ tokens in ১ pass            │
  │ → "The capital of France is [Paris]"  │
  │                                        │
  │ ২. VERIFY (big model, one pass)       │
  │ → big model processes all N+১ tokens  │
  │   in ONE forward pass                 │
  │ → checks each: "would I have said     │
  │   this?"                               │
  │                                        │
  │ ৩. ACCEPT/REJECT                      │
  │ → token ১: correct → ACCEPT            │
  │ → token ২: correct → ACCEPT            │
  │ → token ৩: correct → ACCEPT            │
  │ → token ৪: WRONG → REJECT              │
  │ → big model provides correct token ৪   │
  │                                        │
  │ Result: ৩ tokens generated in the     │
  │ time of ~১.৫ forward passes!          │
  └──────────────────────────────────────┘

SPEEDUP ANALYSIS:
  
  Acceptance rate α = fraction of draft 
  tokens that are correct
  
  α = ০.৭ (৭০% correct):
    → draft ৪ tokens → expect ২.৮ accepted
    → time: ~১.৫ big passes + ৪ small passes
    → vs: ৪ big passes (without spec)
    → speedup: ~২.৭x!
  
  α = ০.৫ (৫০% correct):
    → expect ২.০ accepted per round
    → speedup: ~১.৭x
  
  α = ০.৩ (৩০% correct):
    → expect ১.২ accepted
    → speedup: ~১.২x (barely worth it)

  Key: acceptance rate depends on draft 
  model quality
  → similar domain → high α
  → different domain → low α

DRAFT MODEL CHOICES:

  ১. SAME FAMILY SMALL MODEL
    → e.g., Llama ৩.১ ৮B (target) + ১B (draft)
    → same tokenizer, same training
    → highest acceptance rate
    → recommended!
  
  ২. N-GRAM MODEL
    → not even a neural network!
    → just "what token usually comes next?"
    → based on frequency in context
    → very fast, low memory
    → good for repetitive text
  
  ৩. MEDUSA HEADS
    → extra heads on the big model itself
    → predicts multiple future tokens
    → no separate draft model needed!
    → but requires training the heads
  
  ৪. EAGLE
    → lightweight draft network
    → uses hidden states from big model
    → very high acceptance rate
    → recent (২০২৪), very promising

QUALITY GUARANTEE:
  
  Speculative decoding = EXACT same output 
  distribution as the big model alone.
  
  Mathematically proven:
  → rejected tokens are replaced with 
    correct distribution
  → output = identical to non-speculative
  
  → NO quality loss! Just speed!
  → this is the magic of speculative decoding

IMPLEMENTATIONS:

  vLLM:
    --speculative-model meta-llama/Llama-3.2-1B
    --num-speculative-tokens ৫
  
  → vLLM handles everything automatically
  → uses Llama ১B as draft for Llama ৮B

  Other frameworks:
    → Medusa (separate heads)
    → EAGLE (lightweight draft)
    → SpecInfer (multiple draft models)

WHEN TO USE:
  
  ✅ When latency matters (user-facing)
  ✅ Same-family models available
  ✅ Repetitive/predictable output
  ✅ GPU has spare capacity for draft model
  
  ❌ When draft model is very different 
    domain (low α)
  ❌ When GPU memory is tight (draft model 
    takes space)
  ❌ When throughput matters more than 
    latency (batching is better)

BENCHMARK:
  
  Llama ৩.১ ৮B with ১B draft:
    Without spec: ~৮০ tokens/sec
    With spec (α=০.৬): ~১৬০ tokens/sec
    → ২x speedup!
  
  Llama ৩.১ ৭০B with ৮B draft:
    Without spec: ~২৫ tokens/sec
    With spec (α=০.৫): ~৪৫ tokens/sec
    → ১.৮x speedup</div>

<div class="dialogue">যাকিন — certainty, sure knowledge। কুরআনে আল্লাহ বলেন — "উপলব্ধি করো যাতে তোমাদের ঈমান যাকিনে পরিণত হয়।" যাকিন = নিশ্চিত জ্ঞান। Speculative decoding-ও যাকিন — অনুমান নয়, যাচাইকৃত। ছোট মডেল অনুমান করে, বড় যাচাই করে। ফল = নিশ্চিত সঠিক, দ্রুত। যাকিন — নিশ্চিত পূর্বাভাস।</div>
<div class="dialogue en">"Yaqin — certainty, sure knowledge. Allah says — 'Understand so your faith becomes certainty.' Yaqin = certain knowledge. Speculative decoding too — not guessing, verified. Small model guesses, big verifies. Result = certainly correct, fast. Yaqin — certain prediction."</div>`,
  senior:{
    title:"Speculative Decoding — Setup",
    body:`<p><strong>vLLM (easiest):</strong> --speculative-model [small model] --num-speculative-tokens 5। Use same family (Llama 1B for Llama 8B)।</p><p><strong>Expected speedup:</strong> 1.5-2.5x with same-family draft model।</p><p><strong>Quality:</strong> ZERO loss — mathematically identical output। This is NOT approximation।</p><p><strong>Memory cost:</strong> Draft model needs VRAM too। Ensure enough space।</p><p><strong>Best for:</strong> User-facing latency-critical apps। Less useful for throughput-optimized batch processing।</p>`
  }
});
