// ════════════════════════════════════════
// LLM দর্শন — DOORS 6-10
// Deep Dive: Generation → Master Synthesis
// ════════════════════════════════════════

// ══ DOOR 6: GENERATION ══
doors.push({
  num:6, icon:"🎲", color:"#ffc857", name:"জেনারেশন চেম্বার",
  subtitle:"The Generation Chamber", tech:"Autoregressive Generation",
  spirit:"তাসদির — বাক্য সৃষ্টি",
  secret:"LLM পুরো উত্তর একসাথে দেয় না। একটা টোকেন, তারপর আরেকটা, তারপর আরেকটা। প্রতিটা টোকেন আগের সব টোকেনের উপর নির্ভর করে। এটাই autoregressive generation — এক সময় এক ধাপ।",
  recall:{
    q:"ভাস্কর কেন পুরো মূর্তি একসাথে খোদাই করেন না, ধাপে ধাপে?",
    qen:"Why doesn't the sculptor carve the whole statue at once, but step by step?",
    a:"কারণ প্রতিটা আঁচড় আগের উপর নির্ভর করে। LLM-ও তেমনি — এক টোকেন, তারপর আরেকটা। প্রতিটা টোকেন আগের সব টোকেন দেখে বাছা হয়। এটাই autoregressive।",
    aen:"Because each stroke depends on the previous. LLMs too — one token, then another. Each token chosen after seeing all previous. This is autoregressive."
  },
  story:`
<p class="scene-setting">ষষ্ঠ কক্ষ। একটা অদ্ভুত কক্ষ। ভাস্কর শারমিন একটা পাথর খোদাই করছেন — কিন্তু এক সাথে নয়। একটা আঁচড়। থামেন। দেখেন। তারপর আরেকটা আঁচড়। "প্রতিটা আঁচড়," তিনি বললেন, "আগের সব আঁচড়ের উপর নির্ভর করে। পুরো মূর্তি একসাথে হয় না। ধাপে ধাপে।"</p>
<p class="scene-setting en">The sixth chamber. A strange room. Sculptor Sharmin carves stone — but not all at once. One stroke. Stops. Looks. Then another stroke. "Each stroke," she said, "depends on all previous strokes. The whole statue doesn't happen at once. Step by step."</p>

<div class="dialogue">প্রশিক্ষক বলেছিলেন — তিন স্তরে শেখা। কিন্তু আমি বলি — শেখার পরে আসে কথা বলা। LLM কীভাবে কথা বলে? এক টোকেন। তারপর আরেকটা। তারপর আরেকটা। প্রতিটা ধাপে মডেল পুরো প্রসঙ্গ দেখে, একটা সম্ভাবনা ডিস্ট্রিবিউশন তৈরি করে, তারপর একটা টোকেন বাছে। এটাই generation।</div>
<div class="dialogue en">"The trainer said — learning in three stages. But I say — after learning comes speaking. How does the LLM speak? One token. Then another. Then another. At each step the model sees the full context, creates a probability distribution, then picks one token. This is generation."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — KV Cache Invalidation:</strong> Small prompt change invalidated entire KV cache. Fix: prefix caching for shared prompts.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrLLM6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22d3ee"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">Autoregressive Generation — One Token at a Time</text>
<!-- Input prompt -->
<rect x="20" y="40" width="540" height="28" rx="5" fill="#1a2744" stroke="#22d3ee" stroke-width="1.5"/>
<text x="290" y="58" text-anchor="middle" fill="#7dd3fc" font-size="9">Prompt: "The capital of Bangladesh is"</text>
<!-- Step 1 -->
<rect x="20" y="82" width="170" height="68" rx="6" fill="#1a2744" stroke="#a855f7" stroke-width="2"/>
<text x="105" y="98" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">STEP 1: forward pass</text>
<text x="105" y="113" text-anchor="middle" fill="#94a3b8" font-size="10">process all context</text>
<text x="105" y="128" text-anchor="middle" fill="#fcd34d" font-size="10">P(Dhaka)=0.89</text>
<text x="105" y="140" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">→ pick "Dhaka"</text>
<!-- Arrow -->
<line x1="192" y1="116" x2="212" y2="116" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM6)"/>
<!-- Step 2 -->
<rect x="205" y="82" width="170" height="68" rx="6" fill="#1a2744" stroke="#a855f7" stroke-width="2"/>
<text x="290" y="98" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">STEP 2: append + re-run</text>
<text x="290" y="113" text-anchor="middle" fill="#94a3b8" font-size="10">now process [..., "Dhaka"]</text>
<text x="290" y="128" text-anchor="middle" fill="#fcd34d" font-size="10">P(".")=0.70</text>
<text x="290" y="140" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">→ pick "."</text>
<!-- Arrow -->
<line x1="377" y1="116" x2="397" y2="116" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM6)"/>
<!-- Step 3 -->
<rect x="390" y="82" width="170" height="68" rx="6" fill="#1a2744" stroke="#a855f7" stroke-width="2"/>
<text x="475" y="98" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">STEP 3: append + re-run</text>
<text x="475" y="113" text-anchor="middle" fill="#94a3b8" font-size="10">now process [..., "."]</text>
<text x="475" y="128" text-anchor="middle" fill="#fcd34d" font-size="10">P(&lt;END&gt;)=0.80</text>
<text x="475" y="140" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">→ STOP</text>
<!-- Output -->
<rect x="20" y="165" width="540" height="28" rx="5" fill="#0d1526" stroke="#22c55e" stroke-width="2"/>
<text x="290" y="183" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Output: "The capital of Bangladesh is Dhaka."</text>
<!-- Cost insight -->
<rect x="20" y="205" width="540" height="35" rx="5" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,2"/>
<text x="290" y="222" text-anchor="middle" fill="#fcd34d" font-size="8">⚡ Each output token = full model forward pass over entire context</text>
<text x="290" y="234" text-anchor="middle" fill="#94a3b8" font-size="10">1000 output tokens = 1000 passes · KV cache avoids recomputing old tokens</text>
</svg>
</div>
<div class="svg-caption">Autoregressive জেনারেশন — এক সময় এক টোকেন; প্রতিটি ধাপে গোটা context পুনরায় প্রসেস হয়</div>

<div class="code-block"># ── STEP 1: How LLMs generate text ──
# LLMs generate text ONE TOKEN AT A TIME (autoregressive).

# THE GENERATION LOOP:
generation_loop = """
Given: "The capital of Bangladesh is"

STEP 1: Feed all tokens through the model
  → Model outputs probability distribution:
    "Dhaka": 0.89, "Delhi": 0.03, "Chittagong": 0.02, ...
  → Pick "Dhaka" (highest probability)
  → Append to sequence

STEP 2: Feed [original tokens + "Dhaka"]
  → Model outputs: ".": 0.70, "is": 0.15, ...
  → Pick "."
  → Append

STEP 3: Feed [original + "Dhaka" + "."]
  → Model outputs: "<END>": 0.80, "The": 0.10, ...
  → Pick "<END>"
  → Stop!

OUTPUT: "The capital of Bangladesh is Dhaka."
"""

print(generation_loop)

# KEY INSIGHT:
# Each new token requires a FULL forward pass through the model.
# Generating 1000 tokens = 1000 forward passes.
# This is why text generation is SLOW (vs reading, which is fast).

# IN CODE (using HuggingFace):
generation_code = """
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("gpt2")
tokenizer = AutoTokenizer.from_pretrained("gpt2")

# Generate text:
input_ids = tokenizer("The capital of France is", return_tensors="pt").input_ids
output = model.generate(input_ids, max_new_tokens=20, temperature=0.7)
print(tokenizer.decode(output[0]))
# "The capital of France is Paris, which is located in..."
"""

print(generation_code)</div>

<div class="code-block"># ── STEP 2: KV Cache (speed optimization) ──
# Generating each token is expensive. KV Cache makes it faster.

# WITHOUT KV CACHE:
without_cache = """
Token 1: process tokens [1]                    → 1 forward pass
Token 2: process tokens [1, 2]                  → recompute token 1!
Token 3: process tokens [1, 2, 3]               → recompute tokens 1-2!
Token N: process tokens [1, 2, 3, ..., N]       → recompute ALL previous!

Total: O(n^2) computations for n tokens. Very slow!
"""

print(without_cache)

# WITH KV CACHE:
with_cache = """
Token 1: process [1] → cache K,V for token 1
Token 2: process [2] → use cached K,V for token 1 + compute token 2
Token 3: process [3] → use cached K,V for 1-2 + compute token 3
Token N: process [N] → use cached K,V for 1 to N-1 + compute token N

Total: O(n) computations. MUCH faster!

The KV Cache stores the Key and Value vectors from attention
so they don't need to be recomputed each step.
"""

print(with_cache)

# MEMORY COST OF KV CACHE:
kv_memory = """
For a model with:
  - d_model = 8192 (Llama 3 70B)
  - num_layers = 80
  - num_kv_heads = 8

Each token's KV cache: 2 * 8192 * 8 * 80 * 2 bytes = ~2.6 MB per token

For 100K tokens: 100,000 * 2.6 MB = 260 GB of KV cache!
This is why long context is memory-expensive.
"""

print(kv_memory)

# KV CACHE OPTIMIZATIONS:
optimizations = {
    "PagedAttention (vLLM)": "Paginated KV cache (reduces fragmentation)",
    "GQA (Grouped Query Attention)": "Fewer KV heads = smaller cache",
    "MQA (Multi-Query Attention)": "Single KV head = tiny cache",
    "KV Cache Quantization": "Store cache in int8 (half the memory)",
    "Sliding Window": "Only cache recent tokens (Mistral)",
}

print("KV CACHE OPTIMIZATIONS:")
for opt, desc in optimizations.items():
    print(f"  {opt}: {desc}")</div>

<div class="code-block"># ── STEP 3: Temperature and sampling ──
# The model outputs PROBABILITIES. How do we CHOOSE the next token?

import numpy as np

def softmax(logits):
    exp_x = np.exp(logits - np.max(logits))
    return exp_x / exp_x.sum()

# EXAMPLE: model logits for next token:
logits = np.array([2.5, 1.8, 0.3, -0.5, -1.2])  # 5 tokens

# TEMPERATURE controls randomness:
# temperature=0 → always pick highest (greedy, deterministic)
# temperature=1 → use original probabilities
# temperature=2 → flatten distribution (more random)

def sample_with_temperature(logits, temperature=1.0):
    scaled = logits / temperature
    probs = softmax(scaled)
    return np.random.choice(len(probs), p=probs)

# Show effect of temperature:
for temp in [0.1, 0.5, 1.0, 2.0]:
    probs = softmax(logits / temp)
    print(f"Temperature {temp}: {[round(p, 3) for p in probs]}")
# temp=0.1: [0.998, 0.002, 0.0, 0.0, 0.0]  → almost always token 0
# temp=2.0:  [0.41, 0.27, 0.15, 0.10, 0.07] → more varied

# SAMPLING STRATEGIES:
strategies = {
    "Greedy (temp=0)": {
        "how": "Always pick highest probability token",
        "pro": "Deterministic, safe, focused",
        "con": "Repetitive, boring, can loop",
        "use": "Factual answers, code generation",
    },
    "Temperature sampling": {
        "how": "Sample from temperature-adjusted distribution",
        "pro": "Varied, natural-sounding",
        "con": "Can produce lower-quality output",
        "use": "Creative writing, brainstorming",
    },
    "Top-K sampling": {
        "how": "Only sample from top K tokens (e.g., top 50)",
        "pro": "Filters out unlikely tokens",
        "con": "K is fixed (bad for varying distributions)",
        "use": "General chat (K=40-50)",
    },
    "Top-P (nucleus) sampling": {
        "how": "Sample from smallest set with total prob >= P",
        "pro": "Adaptive (more tokens when uncertain)",
        "con": "Slightly more complex",
        "use": "Best general-purpose (P=0.9-0.95)",
    },
    "Beam search": {
        "how": "Keep top-B sequences, pick overall best",
        "pro": "Optimal sequence (not greedy)",
        "con": "Slow, can produce generic text",
        "use": "Translation, summarization",
    },
}

print("SAMPLING STRATEGIES:")
for strategy, info in strategies.items():
    print(f"\n  {strategy}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 4: Controlling generation ──
# How to get the output you want from an LLM.

# TEMPERATURE GUIDELINES:
temperature_guide = {
    "temp=0 (greedy)": "Factual, code, math, data extraction",
    "temp=0.3-0.5": "Summaries, explanations, structured output",
    "temp=0.7": "General chat (most common default)",
    "temp=1.0": "Creative writing, brainstorming",
    "temp=1.5+": "Very random (usually bad)",
}

print("TEMPERATURE GUIDE:")
for temp, use in temperature_guide.items():
    print(f"  {temp}: {use}")

# OPENAI API EXAMPLES:
api_examples = """
# Code generation (deterministic):
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Write a Python function to sort a list"}],
    temperature=0,      # deterministic
    max_tokens=500,
)

# Creative writing:
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Write a poem about autumn"}],
    temperature=0.9,    # creative
    top_p=0.95,         # nucleus sampling
    max_tokens=300,
    presence_penalty=0.6,  # discourage repetition
    frequency_penalty=0.3, # reduce word repetition
)

# Structured output (JSON):
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "List 3 fruits as JSON: [{name, color}]"}],
    temperature=0,
    response_format={"type": "json_object"},  # force JSON
)
"""

print(api_examples)

# STOP SEQUENCES:
stop_sequences = """
# Stop generation at specific text:
response = client.chat.completions.create(
    model="gpt-4",
    messages=[...],
    stop=["\\n\\nHuman:", "\\n\\nAssistant:"],  # stop at these
)

# USE CASES:
# - Chat: stop at "Human:" (don't role-play the user)
# - Code: stop at triple-backtick (end of code block)
# - JSON: stop at end-of-object character
"""

print(stop_sequences)

# MAX TOKENS:
max_tokens = """
# Always set max_tokens to prevent runaway generation:
response = client.chat.completions.create(
    model="gpt-4",
    messages=[...],
    max_tokens=1000,  # hard limit
)

# Token limits per model:
# GPT-4o: up to 16,384 output tokens
# Claude 3.5 Sonnet: up to 8,192 output tokens
# Llama 3 70B: up to 8,192 output tokens
"""

print(max_tokens)</div>

<div class="code-block"># ── STEP 5: Streaming and perceived latency ──
# Show tokens as they're generated (better UX).

# WHY STREAMING MATTERS:
streaming_benefits = """
WITHOUT streaming:
  User asks question → wait 15 seconds → see entire answer at once
  → feels slow, users think it's broken

WITH streaming:
  User asks question → first token in 0.5s → tokens stream in
  → feels fast, user reads as it generates
  → perceived latency is MUCH lower

ChatGPT, Claude, all production LLM apps use streaming.
"""

print(streaming_benefits)

# STREAMING WITH OPENAI API:
streaming_code = """
from openai import OpenAI
client = OpenAI()

# Stream tokens as they arrive:
stream = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Explain how databases work"}],
    stream=True,       # enable streaming
    max_tokens=1000,
)

# Process each chunk:
full_response = ""
for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        token = chunk.choices[0].delta.content
        full_response += token
        print(token, end="", flush=True)  # print immediately

print()  # newline at end
print(f"Total response: {len(full_response)} chars")
"""

print(streaming_code)

# DJANGO/FASTAPI STREAMING (Server-Sent Events):
django_streaming = """
# Django StreamingHttpResponse:
from django.http import StreamingHttpResponse
import json

def stream_llm_response(request):
    def generate():
        stream = client.chat.completions.create(
            model="gpt-4",
            messages=get_messages(request),
            stream=True,
        )
        for chunk in stream:
            token = chunk.choices[0].delta.content
            if token:
                yield f"data: {json.dumps({'token': token})}\\n\\n"

    response = StreamingHttpResponse(generate(), content_type="text/event-stream")
    return response

# Frontend (EventSource):
# const source = new EventSource('/api/chat?prompt=hello');
# source.onmessage = (e) => {
#     const { token } = JSON.parse(e.data);
#     document.getElementById('response').textContent += token;
# };
"""

print(django_streaming)</div>

<div class="code-block"># ── STEP 6: Production generation pipeline ──
# Complete production LLM generation system:

production_pipeline = """
PRODUCTION LLM GENERATION PIPELINE:

1. REQUEST:
   User sends prompt via API
   → Validate input (length, safety)
   → Estimate cost (count tokens)
   → Check rate limit

2. PRE-PROCESSING:
   → Add system prompt (persona, instructions)
   → Add conversation history
   → Format messages (role, content)
   → Apply any prompt templates

3. GENERATION:
   → Call LLM API (OpenAI, Anthropic, local)
   → Set parameters: temperature, top_p, max_tokens
   → Stream tokens back to user (SSE)
   → Monitor for errors/timeouts

4. POST-PROCESSING:
   → Parse response (JSON, markdown, plain text)
   → Validate format
   → Filter content (safety)
   → Log interaction (prompt, response, cost)

5. OPTIMIZATION:
   → Cache identical prompts (Redis)
   → Use cheaper model for simple tasks (GPT-4o-mini)
   → Batch requests where possible
   → Compress prompt (remove redundancy)
"""

print(production_pipeline)

# COST OPTIMIZATION:
cost_tips = {
    "Model selection": "Use GPT-4o-mini for 90% of tasks (10x cheaper)",
    "Prompt caching": "Cache system prompts (OpenAI does this automatically)",
    "Batch processing": "Batch non-real-time requests (50% cheaper)",
    "Output limits": "Set max_tokens appropriately (don't over-generate)",
    "Prompt length": "Shorter prompts = cheaper (remove redundancy)",
    "Streaming": "Stream so users don't time out waiting",
}

print("COST OPTIMIZATION:")
for tip, desc in cost_tips.items():
    print(f"  {tip}: {desc}")

# GENERATION SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ Autoregressive   │ One token at a time             │
# │ KV Cache         │ Avoid recomputing past tokens   │
# │ Temperature      │ Controls randomness (0=factual) │
# │ Top-P sampling   │ Best general sampling method    │
# │ Streaming        │ Show tokens as generated        │
# │ Max tokens       │ Prevent runaway generation      │
# │ Stop sequences   │ Control when to stop            │
# │ Cost             │ Model selection + caching       │
# └──────────────────┴──────────────────────────────────┘

# THE BIG PICTURE:
# Text generation is the END PRODUCT of everything the LLM learned.
# Tokenization → Embeddings → Attention → FFN → Output → Sample
# Each step transforms the input until it becomes useful text.
# Understanding generation = understanding how to USE LLMs effectively.
# Temperature, sampling, and prompt design are the levers you control.</div>

<div class="dialogue">তাসদির — বাক্য সৃষ্টি। কুরআনে আল্লাহ বলেন — "পবিত্র সেই সত্তা যিনি সৃষ্টি করেছেন প্রতিটি কিছু উত্তমরূপে।" (৩২:৭)। LLM-এর সৃষ্টিও — প্রতিটি টোকেন ধাপে ধাপে। এক সাথে নয়। প্রতিটা ধাপ পূর্বের উপর দাঁড়ায়। এই ধীরগতির সৃষ্টিই ভাষার ভিত্তি।</div>
<div class="dialogue en">"Tasdir — sentence creation. Allah says — 'Blessed is He who created everything in the best form.' (32:7). The LLM's creation too — each token step by step. Not all at once. Each step rests on the previous. This slow creation is the foundation of language."</div>`,
  senior:{
    title:"Generation Latency — কেন ধীর",
    body:`<p><strong>Pre-fill (TTFT):</strong> prompt প্রসেস করা — fast, parallel।</p><p><strong>Decode (TPOT):</strong> প্রতিটা token sequential — slow। ১০০ token/sec ~= ভালো।</p><p><strong>KV Cache:</strong> পুরোনো token-এর key-value সংরক্ষণ। পুনরায় গোনা এড়ায়।</p><p><strong>Speculative Decoding:</strong> ছোট মডেল দ্রুত draft করে, বড় মডেল verify করে। ২-৩x faster।</p>`
  }
});

// ══ DOOR 7: HALLUCINATION ══
doors.push({
  num:7, icon:"🌫️", color:"#ff6b35", name:"মরীচিকা কক্ষ",
  subtitle:"The Mirage Chamber", tech:"Hallucination — Causes & Prevention",
  spirit:"সত্য ও ভ্রম — নির্ভরযোগ্যতা",
  secret:"LLM মিথ্যা বলে না — সে অনুমান করে। কিন্তু অনুমান যখন ভুল, তখন তা হ্যালুসিনেশন। কারণ: training data, attention failure, temperature, RLHF sycophancy। প্রতিকার: RAG, grounding, verification, low temperature।",
  recall:{
    q:"মরীচিকা কক্ষে কেন দেখা যায় যা নেই?",
    qen:"Why does the mirage chamber show things that aren't there?",
    a:"কারণ মস্তিষ্ক অনুমান করে — আগের অভিজ্ঞতা থেকে। LLM-ও তেমনি — training data থেকে অনুমান। যখন অনুমান ভুল, তখন হ্যালুসিনেশন। আস্থা রাখা যায় না যাচাই ছাড়া। RAG ও verification ছাড়া।",
    aen:"Because the brain guesses — from past experience. LLMs too — guess from training data. When the guess is wrong, hallucination. Can't trust without verification. Without RAG and verification."
  },
  story:`
<p class="scene-setting">সপ্তম কক্ষ। একটা কুয়াশায় ভরা কক্ষ। দেয়ালে ছবি — কিন্তু কাছে গেলে বোঝা যায় ছবি নয়, আলোর কৌশল। কক্ষরক্ষক তাহসিন বললেন — "এই কক্ষে যা দেখো, তা বাস্তব নয়। মস্তিষ্ক তৈরি করে। LLM-ও তেমনি — যা বলে, তা বাস্তব নয়। সে অনুমান করে। কখনো ভুল।"</p>
<p class="scene-setting en">The seventh chamber. A fog-filled room. Pictures on walls — but close up, they're not pictures, they're light tricks. Chamber keeper Tahsin said — "What you see here isn't real. The brain creates it. The LLM too — what it says isn't always real. It guesses. Sometimes wrong."</p>

<div class="dialogue">ভাস্কর বলেছিলেন — এক টোকেন এক টোকেন। কিন্তু আমি বলি — প্রতিটা টোকেন একটা অনুমান। কিন্তু অনুমান যখন ভুল? তখন হ্যালুসিনেশন। LLM জেনে বলে না — সে অনুমান করে বলে। সে আত্মবিশ্বাসী ভুল করে। এটাই সবচেয়ে বড় সমস্যা।</div>
<div class="dialogue en">"The sculptor said — one token at a time. But I say — each token is a guess. But when the guess is wrong? Hallucination. The LLM doesn't speak from knowledge — it speaks from probability. It confidently errs. This is the biggest problem."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Layer Skipping Side Effect:</strong> Skipped layers for speed — model lost critical reasoning. Fix: only skip for simple tasks.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrLLM7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22d3ee"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">Hallucination — Causes &amp; Defense</text>
<!-- LEFT: Causes -->
<text x="140" y="42" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">⚠ 5 Causes</text>
<rect x="20" y="50" width="240" height="28" rx="5" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="35" y="68" fill="#fcd34d" font-size="8">1.</text>
<text x="50" y="68" fill="#94a3b8" font-size="8">Training data gap — "I don't know" not learned</text>
<rect x="20" y="82" width="240" height="28" rx="5" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="35" y="100" fill="#fcd34d" font-size="8">2.</text>
<text x="50" y="100" fill="#94a3b8" font-size="8">Attention failure — info lost in long context</text>
<rect x="20" y="114" width="240" height="28" rx="5" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="35" y="132" fill="#fcd34d" font-size="8">3.</text>
<text x="50" y="132" fill="#94a3b8" font-size="8">Probability ≠ knowledge — guesses confidently</text>
<rect x="20" y="146" width="240" height="28" rx="5" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="35" y="164" fill="#fcd34d" font-size="8">4.</text>
<text x="50" y="164" fill="#94a3b8" font-size="8">Sycophancy — agrees with user to please</text>
<rect x="20" y="178" width="240" height="28" rx="5" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="35" y="196" fill="#fcd34d" font-size="8">5.</text>
<text x="50" y="196" fill="#94a3b8" font-size="8">High temperature → more randomness</text>
<!-- Divider arrow -->
<text x="290" y="120" text-anchor="middle" fill="#22d3ee" font-size="14">→</text>
<text x="290" y="135" text-anchor="middle" fill="#7dd3fc" font-size="10">prevent</text>
<!-- RIGHT: Defense layers -->
<text x="460" y="42" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">🛡 7-Layer Defense</text>
<rect x="320" y="50" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="65" text-anchor="middle" fill="#4ade80" font-size="10">1. Grounding (RAG) — give source docs</text>
<rect x="320" y="75" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="90" text-anchor="middle" fill="#4ade80" font-size="10">2. Low temperature (0) — deterministic</text>
<rect x="320" y="100" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="115" text-anchor="middle" fill="#4ade80" font-size="10">3. Citation required — claim needs source</text>
<rect x="320" y="125" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="140" text-anchor="middle" fill="#4ade80" font-size="10">4. Chain-of-verification — self-check</text>
<rect x="320" y="150" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="165" text-anchor="middle" fill="#4ade80" font-size="10">5. "Say I don't know" prompting</text>
<rect x="320" y="175" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="190" text-anchor="middle" fill="#4ade80" font-size="10">6. Structured output + confidence field</text>
<rect x="320" y="200" width="240" height="22" rx="4" fill="#0d1526" stroke="#22c55e" stroke-width="2"/>
<text x="440" y="215" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">7. External verification (2nd model/human)</text>
<!-- Bottom truth bar -->
<rect x="20" y="218" width="280" height="22" rx="4" fill="#0d1526" stroke="#a855f7" stroke-width="1.5"/>
<text x="160" y="233" text-anchor="middle" fill="#c084fc" font-size="10">LLM doesn't lie — it guesses. Verify everything.</text>
</svg>
</div>
<div class="svg-caption">হ্যালুসিনেশন — ৫টি কারণ, ৭টি প্রতিরক্ষা স্তর; যাচাই ছাড়া বিশ্বাস নয়</div>

<div class="code-block">Hallucination — Why LLMs Confidently Lie:
<div class="code-block"># ── STEP 1: What is hallucination? ──
# HALLUCINATION = the LLM states FALSE information with HIGH CONFIDENCE.
# It's not lying (no intent) — it genuinely "believes" the wrong answer.

# EXAMPLES:
examples = """
CORRECT (LLM knows):
  "Who wrote 'To Kill a Mockingbird'?" → "Harper Lee" ✅

HALLUCINATION (LLM doesn't know but guesses):
  "Who wrote 'The Silent Patient'?" → "Stephen King" ❌ (actually: Alex Michaelides)
  → But stated with same confidence as correct answers!

HALLUCINATION (fabricated details):
  "Tell me about the 1923 Treaty of New York"
  → LLM invents a plausible-sounding treaty that never existed
  → Includes fake dates, signatories, outcomes
"""

print(examples)

# WHY HALLUCINATION IS DANGEROUS:
danger = """
1. CONFIDENT WRONGNESS: Model sounds equally sure whether right or wrong
2. PLAUSIBLE FICTION: Hallucinated content sounds real (smooth, coherent)
3. CASCADING ERRORS: One hallucination leads to more (model builds on false premise)
4. TRUST EXPLOITATION: Users trust confident-sounding answers
5. SCALE: Millions of users × daily use = massive misinformation potential
"""

print(danger)</div>

<div class="code-block"># ── STEP 2: Why hallucination happens ──
# Five root causes of LLM hallucination:

causes = {
    "1. TRAINING DATA GAPS": {
        "what": "Model can't know what wasn't in training data",
        "effect": "Guesses instead of saying 'I don't know'",
        "fix": "Provide context (RAG), let model say 'I don't know'",
    },
    "2. PROBABILITY, NOT KNOWLEDGE": {
        "what": "LLMs compute probabilities, not facts",
        "effect": "'Most probable' ≠ 'correct'",
        "fix": "Use low temperature, verify critical claims",
    },
    "3. ATTENTION FAILURES": {
        "what": "Long contexts cause 'lost in the middle'",
        "effect": "Model ignores key information in the middle",
        "fix": "Keep prompts short, put key info first/last",
    },
    "4. SYCOPHANCY (RLHF artifact)": {
        "what": "RLHF teaches model to please the user",
        "effect": "Agrees with user even when user is wrong",
        "fix": "Prompt: 'Correct me if I'm wrong'",
    },
    "5. TEMPERATURE EFFECT": {
        "what": "High temperature increases randomness",
        "effect": "More random = more hallucination risk",
        "fix": "Use temperature=0 for factual queries",
    },
}

print("WHY HALLUCINATION HAPPENS:")
for cause, info in causes.items():
    print(f"\n  {cause}")
    print(f"    What: {info['what']}")
    print(f"    Effect: {info['effect']}")
    print(f"    Fix: {info['fix']}")

# KEY INSIGHT:
# LLMs are AUTOCOMPLETE on steroids.
# They predict the most likely next token — they don't "know" facts.
# When the most likely continuation happens to be false → hallucination.
# The model has NO CONCEPT of truth vs fiction.</div>

<div class="code-block"># ── STEP 3: Types of hallucination ──
# Not all hallucinations are the same:

hallucination_types = {
    "Factuality Hallucination": {
        "what": "Stating verifiably false facts",
        "example": "'Einstein was born in 1950' (actually 1879)",
        "severity": "High (factually wrong)",
    },
    "Faithfulness Hallucination": {
        "what": "Contradicts the source/context",
        "example": "Summarizes a document but invents points not in it",
        "severity": "Medium (unfaithful to source)",
    },
    "Logical Hallucination": {
        "what": "Reasoning errors, invalid logic",
        "example": "'All cats are mammals → all mammals are cats'",
        "severity": "Medium (bad reasoning)",
    },
    "Source Hallucination": {
        "what": "Cites non-existent papers/URLs",
        "example": "'According to Smith et al. (2023)...' — no such paper",
        "severity": "High (fake citations are dangerous)",
    },
    "Context Hallucination": {
        "what": "Contradicts earlier in the same response",
        "example": "Says 'Python is compiled' then 'Python is interpreted'",
        "severity": "Low-Medium (self-contradiction)",
    },
    "Format Hallucination": {
        "what": "Wrong format, incomplete output",
        "example": "Promised JSON, delivered prose",
        "severity": "Low (format issue, not factual)",
    },
}

print("TYPES OF HALLUCINATION:")
for htype, info in hallucination_types.items():
    print(f"\n  {htype}")
    print(f"    What: {info['what']}")
    print(f"    Example: {info['example']}")
    print(f"    Severity: {info['severity']}")</div>

<div class="code-block"># ── STEP 4: Preventing hallucination (RAG) ──
# The #1 defense: RAG (Retrieval Augmented Generation)

# WITHOUT RAG:
# User asks → LLM answers from MEMORY (may hallucinate)

# WITH RAG:
# User asks → Retrieve relevant documents → LLM answers FROM DOCUMENTS

rag_defense = """
RAG ANTI-HALLUCINATION PROMPT:

System: "Answer the question based ONLY on the provided context.
If the context doesn't contain the answer, say 'I don't know
based on the provided information.' Do NOT use your own knowledge."

Context: [retrieved documents]

Question: [user question]

→ Model is FORCED to use only the provided context
→ If answer isn't in context → "I don't know"
→ Hallucination dramatically reduced
"""

print(rag_defense)

# PYTHON RAG WITH ANTI-HALLUCINATION:
rag_code = """
def rag_answer_safe(question):
    # Step 1: Retrieve relevant documents:
    docs = vector_search(question, top_k=5)
    context = "\\n\\n".join([d.content for d in docs])

    # Step 2: Ask LLM with strict instructions:
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": (
                    "Answer based ONLY on the context below. "
                    "If the answer is not in the context, say "
                    "'I don't have that information.' "
                    "Cite sources using [Doc N] format."
                )
            },
            {
                "role": "user",
                "content": f"Context:\\n{context}\\n\\nQuestion: {question}"
            }
        ],
        temperature=0,  # deterministic for factual answers
    )
    return response.choices[0].message.content
"""

print(rag_code)</div>

<div class="code-block"># ── STEP 5: Advanced anti-hallucination techniques ──
# Beyond RAG — more sophisticated defenses:

techniques = {
    "Chain-of-Verification (CoVe)": {
        "how": "Generate answer → ask model to verify each claim → correct errors",
        "pro": "Self-catches many hallucinations",
        "con": "2-3x more API calls (expensive)",
    },
    "Self-Consistency": {
        "how": "Generate 5 answers → pick the majority answer",
        "pro": "Reduces random hallucinations",
        "con": "5x cost",
    },
    "External Fact-Checking": {
        "how": "Use a second model or API to verify claims",
        "pro": "Independent verification",
        "con": "Additional latency and cost",
    },
    "Grounding with Citations": {
        "how": "Require model to cite source for every claim",
        "pro": "Forces model to find evidence",
        "con": "Model may hallucinate citations too",
    },
    "Constrained Generation": {
        "how": "Restrict output to specific facts/schema",
        "pro": "Prevents fabricated details",
        "con": "Limits flexibility",
    },
    "Confidence Calibration": {
        "how": "Ask model to rate its own confidence",
        "pro": "Flag uncertain answers",
        "con": "Model's confidence is often miscalibrated",
    },
}

print("ADVANCED ANTI-HALLUCINATION TECHNIQUES:")
for technique, info in techniques.items():
    print(f"\n  {technique}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# CHAIN-OF-VERIFICATION EXAMPLE:
cove_example = """
Step 1: Generate initial answer:
  Q: "What year did Bangladesh gain independence?"
  A: "Bangladesh gained independence in 1971."

Step 2: Ask model to verify:
  "Verify this claim: 'Bangladesh gained independence in 1971.'
   Is this correct? Check the date."

Step 3: Model self-corrects:
  "Yes, Bangladesh gained independence on March 26, 1971,
   after the Liberation War. This is correct."

Step 4: Final verified answer.
"""

print(cove_example)</div>

<div class="code-block"># ── STEP 6: Detecting and measuring hallucination ──
# How to know if your LLM application is hallucinating:

# HALLUCINATION DETECTION METHODS:
detection = {
    "Human evaluation": {
        "how": "Humans check a sample of outputs for accuracy",
        "pro": "Most reliable",
        "con": "Expensive, slow, not scalable",
    },
    "LLM-as-judge": {
        "how": "Use GPT-4 to evaluate another model's outputs",
        "pro": "Automated, scalable",
        "con": "Judge model can also hallucinate",
    },
    "Fact-checking APIs": {
        "how": "Use Google Fact Check API, Snopes, etc.",
        "pro": "Independent verification",
        "con": "Limited coverage (not all facts are checkable)",
    },
    "Reference comparison": {
        "how": "Compare LLM output to known-correct reference",
        "pro": "Objective metric",
        "con": "Need reference answers (not always available)",
    },
    "Faithfulness metrics": {
        "how": "Check if summary contradicts source (NLI models)",
        "pro": "Good for summarization",
        "con": "Doesn't check factual accuracy of source",
    },
    "RAGAS (RAG Assessment)": {
        "how": "Evaluate RAG pipeline: retrieval quality + faithfulness",
        "pro": "Specifically for RAG applications",
        "con": "Newer framework, evolving metrics",
    },
}

print("HALLUCINATION DETECTION:")
for method, info in detection.items():
    print(f"\n  {method}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# PRODUCTION ANTI-HALLUCINATION CHECKLIST:
checklist = """
ANTI-HALLUCINATION PRODUCTION CHECKLIST:

PROMPT DESIGN:
  ☐ Use RAG for factual questions (provide context)
  ☐ Set temperature=0 for factual/code/math tasks
  ☐ Include "say 'I don't know' if unsure" in system prompt
  ☐ Ask for citations/sources
  ☐ Use structured output (JSON with confidence scores)

VERIFICATION:
  ☐ Implement chain-of-verification for critical claims
  ☐ Use self-consistency for important decisions
  ☐ External fact-check for high-stakes information
  ☐ Log all LLM outputs for audit

USER EXPERIENCE:
  ☐ Show sources/citations to users
  ☐ Add "AI-generated, verify important information" disclaimer
  ☐ Allow user feedback (thumbs up/down)
  ☐ Flag low-confidence answers

MONITORING:
  ☐ Track hallucination rate over time
  ☐ Monitor user corrections/complaints
  ☐ Regular evaluation on test sets
  ☐ A/B test prompt changes

RULE OF THUMB:
  Never trust LLM output for critical decisions without verification.
  Medical, legal, financial, safety information → ALWAYS verify.
  "Trust but verify" — or better: "Verify, then trust."
"""

print(checklist)

# THE BOTTOM LINE:
# Hallucination is INHERENT to how LLMs work.
# They predict likely text — they don't verify truth.
# You can REDUCE it (RAG, temperature, verification)
# but you can never ELIMINATE it completely.
# Always design your systems assuming hallucination will happen.
# Plan for it, detect it, mitigate it. Never trust blindly.</div>

<div class="dialogue">সত্য ও ভ্রম। কুরআনে আল্লাহ বলেন — "মিথ্যা তো সত্যের বিপরীত।" (১৩:১)। LLM-এর হ্যালুসিনেশন মিথ্যা নয় — ভ্রম। সে ভুল বোঝে, ভুল বলে। কিন্তু ইচ্ছা করে নয়। তবু বিপজ্জনক — কারণ আত্মবিশ্বাসী। সত্য যাচাই করা প্রতিটা মানুষের দায়িত্ব। কুরআন বলে — "যারা সত্য যাচাই করে না, তাদের কথা বিশ্বাস করো না।" (৪৯:৬)। LLM-ও তেমনি — যাচাই ছাড়া বিশ্বাস নয়।</div>
<div class="dialogue en">"Truth and illusion. Allah says — 'Falsehood is the opposite of truth.' (13:1). LLM hallucination isn't lying — it's illusion. It misunderstands, misspeaks. But not intentionally. Still dangerous — because it's confident. Verifying truth is every person's duty. The Quran says — 'Don't believe those who don't verify.' (49:6). The LLM too — no belief without verification."</div>
</div>`,
  senior:{
    title:"Hallucination Audit — প্রোডাকশনে",
    body:`<p><strong>Fact-checking:</strong> প্রতিটা ফ্যাক্ট আলাদা LLM কল দিয়ে verify করো।</p><p><strong>Confidence score:</strong> logprobs চেক করো — কম confidence = বেশি hallucination ঝুঁকি।</p><p><strong>Human-in-the-loop:</strong> সংবেদনশীল আউটপুটে মানুষ review করে।</p><p><strong>Eval set:</strong> ১০০টা প্রশ্নে সঠিক উত্তর ট্র্যাক করো। নতুন মডেলে রিগ্রেশন চেক।</p>`
  }
});

// ══ DOOR 8: SCALING LAWS ══
doors.push({
  num:8, icon:"📈", color:"#5b9eff", name:"স্কেল পরিমাপকের গ্রন্থ",
  subtitle:"The Scale Measurer's Ledger", tech:"Scaling Laws & Model Families",
  spirit:"পরিমাণ — আকারের তাৎপর্য",
  secret:"বেশি ডেটা + বেশি প্যারামিটার + বেশি কম্পিউট = ভালো মডেল। এটাই scaling law। কিন্তু শুধু আকার নয় — ডেটার গুণমান, architecture, training recipe সব গুরুত্বপূর্ণ। Chinchilla law: প্রতি প্যারামিটারে ~২০ টোকেন ডেটা লাগে।",
  recall:{
    q:"স্কেল পরিমাপক কেন বড় মালের সাথে বেশি পানি মেপে যান?",
    qen:"Why does the scale measurer proportion water to grain size?",
    a:"কারণ অনুপাত গুরুত্বপূর্ণ। বড় মালের জন্য বেশি পানি। Chinchilla scaling law-ও তেমনি — বড় মডেলের জন্য বেশি ডেটা। প্রতি প্যারামিটারে ~২০ টোকেন। ভুল অনুপাত = অপচয়।",
    aen:"Because proportion matters. More water for more grain. Chinchilla scaling law too — bigger model needs more data. ~20 tokens per parameter. Wrong ratio = waste."
  },
  story:`
<p class="scene-setting">অষ্টম কক্ষ। একটা গ্রন্থাগার যেখানে স্কেল রেখে বই সাজানো। ছোট বই থেকে বড় বই — ক্রমানুসারে। স্কেল পরিমাপক ড. সাবিনা একটা বড় খাতায় সংখ্যা লিখছেন — প্যারামিটার, ডেটা, কম্পিউট। "অনুপাত," তিনি বললেন। "বড় মডেল = ভালো মডেল? শুধু তখনই, যখন ডেটার অনুপাত ঠিক।"</p>
<p class="scene-setting en">The eighth chamber. A library where books are arranged by scale. From small to large — in order. Scale measurer Dr. Sabina writes in a large ledger — parameters, data, compute. "Proportion," she said. "Bigger model = better model? Only when the data ratio is right."</p>

<div class="dialogue">মরীচিকা কক্ষ বলেছিলেন — hallucination ঠেকাও। কিন্তু আমি বলি — একটা সহজ সত্য আছে। বড় মডেল = কম hallucination। বেশি ডেটা = বেশি জ্ঞান। বেশি কম্পিউট = বেশি সূক্ষ্মতা। এটাই scaling law। কিন্তু অনুপাত ঠিক না হলে — অপচয়।</div>
<div class="dialogue en">"The mirage chamber said — prevent hallucination. But I say — there's a simple truth. Bigger model = less hallucination. More data = more knowledge. More compute = more refinement. This is the scaling law. But without the right ratio — waste."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Embedding Dimension Too Small:</strong> 256-dim embeddings couldn't capture nuance. Fix: experiment with 768+ dims.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrLLM8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22d3ee"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">Scaling Laws — More is Better (with the right ratio)</text>
<!-- Left: Power law curve chart -->
<rect x="20" y="40" width="280" height="195" rx="8" fill="#0d1526" stroke="#22d3ee" stroke-width="1.5"/>
<text x="160" y="58" text-anchor="middle" fill="#94a3b8" font-size="8">Loss (error) vs Compute — power law</text>
<!-- Axes -->
<line x1="50" y1="210" x2="50" y2="70" stroke="#475569" stroke-width="1"/>
<line x1="50" y1="210" x2="280" y2="210" stroke="#475569" stroke-width="1"/>
<text x="38" y="145" fill="#94a3b8" font-size="10" transform="rotate(-90 38 145)">Loss ↓</text>
<text x="165" y="228" text-anchor="middle" fill="#94a3b8" font-size="10">Compute / Parameters / Data →</text>
<!-- Kaplan curve (dashed, higher) -->
<path d="M 60 90 Q 120 130 200 165 T 275 185" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
<text x="245" y="180" fill="#fcd34d" font-size="10">Kaplan (2020)</text>
<!-- Chinchilla curve (solid, lower - better) -->
<path d="M 60 100 Q 110 145 190 175 T 275 195" fill="none" stroke="#22c55e" stroke-width="2.5"/>
<text x="240" y="200" fill="#4ade80" font-size="10">Chinchilla (2022)</text>
<!-- Data points -->
<circle cx="100" cy="110" r="3" fill="#7dd3fc"/>
<circle cx="150" cy="140" r="3" fill="#7dd3fc"/>
<circle cx="200" cy="165" r="3" fill="#7dd3fc"/>
<text x="100" y="125" text-anchor="middle" fill="#7dd3fc" font-size="10">7B</text>
<text x="150" y="155" text-anchor="middle" fill="#7dd3fc" font-size="10">70B</text>
<text x="205" y="158" text-anchor="middle" fill="#7dd3fc" font-size="10">175B</text>
<!-- Right: Comparison boxes -->
<rect x="320" y="40" width="240" height="60" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="440" y="58" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">Kaplan — wrong ratio</text>
<text x="440" y="73" text-anchor="middle" fill="#94a3b8" font-size="10">GPT-3: 175B params</text>
<text x="440" y="84" text-anchor="middle" fill="#94a3b8" font-size="10">but only 300B tokens</text>
<text x="440" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">→ data-starved</text>
<rect x="320" y="110" width="240" height="60" rx="6" fill="#1a2744" stroke="#22c55e" stroke-width="2"/>
<text x="440" y="128" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">Chinchilla — correct ratio</text>
<text x="440" y="143" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">~20 tokens per parameter</text>
<text x="440" y="154" text-anchor="middle" fill="#94a3b8" font-size="10">70B model → 1.4T tokens</text>
<text x="440" y="165" text-anchor="middle" fill="#94a3b8" font-size="10">7B model → 140B tokens</text>
<!-- Result box -->
<rect x="320" y="180" width="240" height="55" rx="6" fill="#0d1526" stroke="#a855f7" stroke-width="2"/>
<text x="440" y="198" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">Surprising result:</text>
<text x="440" y="212" text-anchor="middle" fill="#7dd3fc" font-size="10">Chinchilla 70B beat</text>
<text x="440" y="223" text-anchor="middle" fill="#7dd3fc" font-size="10">GPT-3 175B — smaller wins!</text>
</svg>
</div>
<div class="svg-caption">Scaling law — বড় মডেল ভালো, কিন্তু অনুপাত ঠিক হতে হবে: প্রতি প্যারামিটারে ~২০ টোকেন</div>

<div class="code-block"># ── STEP 1: What are scaling laws? ──
# Scaling laws describe HOW model performance improves with size.

# THE KAPLAN SCALING LAW (2020, OpenAI):
kaplan = """
Power law relationship:
  Loss ∝ N^(-0.076)  (more parameters → lower loss)
  Loss ∝ D^(-0.095)  (more data → lower loss)
  Loss ∝ C^(-0.050)  (more compute → lower loss)

Key finding: Bigger models are ALWAYS better (given enough data).
This drove the "scale up" race: GPT-2 → GPT-3 → GPT-4.
"""

print(kaplan)

# THE CHINCHILLA LAW (2022, DeepMind):
chinchilla = """
Kaplan was WRONG about the ratio!

Chinchilla finding: for optimal training:
  ~20 tokens of data PER parameter

  Model size → Optimal data:
  7B params  → 140B tokens
  70B params → 1.4T tokens
  405B params → 8T tokens

DeepMind proved this:
  Chinchilla (70B + 1.4T tokens) BEAT GPT-3 (175B + 300B tokens)!
  
Lesson: SMALLER model + MORE data > LARGER model + LESS data
"""

print(chinchilla)

# WHY THIS MATTERS:
# It tells you exactly how much DATA you need for a given MODEL SIZE.
# Too little data → under-trained (wasted parameters)
# Too much data → over-trained (diminishing returns)
# Sweet spot: ~20 tokens per parameter</div>

<div class="code-block"># ── STEP 2: Compute-optimal training ──
# The Chinchilla paper introduced COMPUTE-OPTIMAL training.

# COMPUTE BUDGET:
compute = """
Given a fixed compute budget C (in FLOPs):

Kaplan says: spend most on BIG models
Chinchilla says: BALANCE model size and data

Optimal allocation (Chinchilla):
  For C = 10^21 FLOPs (~$1M):
    Model: 3B parameters
    Data: 60B tokens
    
  For C = 10^23 FLOPs (~$100M):
    Model: 70B parameters
    Data: 1.4T tokens

  For C = 10^25 FLOPs (~$1B):
    Model: 500B parameters
    Data: 10T tokens
"""

print(compute)

# BUT MODERN MODELS OVER-TRAIN:
over_training = """
Llama 3 broke Chinchilla:
  8B params trained on 15T tokens
  That's ~1875 tokens per parameter (Chinchilla says 20!)

Why? Because:
  1. INFERENCE is the bottleneck (not training)
  2. Smaller models run cheaper at inference
  3. Over-train a small model → better inference performance
  4. Llama 3 8B outperforms many larger models

The industry has moved from "Chinchilla optimal"
to "inference optimal" (over-train small models).
"""

print(over_training)

# SCALING EMERGENT ABILITIES:
emergent = """
Some abilities EMERGE only at scale:

  <1B params: Basic grammar, simple completions
  1-10B: Translation, summarization, simple reasoning
  10-70B: Code generation, multi-step reasoning, instruction following
  70B+: Complex reasoning, theory of mind, few-shot learning
  100B+: Advanced math, sophisticated coding, nuanced understanding

These are EMERGENT — they don't exist in small models
and appear suddenly as scale increases.
"""

print(emergent)</div>

<div class="code-block"># ── STEP 3: The LLM landscape (2025) ──
# Current model families:

models_2025 = {
    "OPEN WEIGHTS (free, local)": {
        "Llama 3.1 (Meta)": "8B / 70B / 405B — best open models, multilingual",
        "Qwen 2.5 (Alibaba)": "0.5B / 7B / 72B — strong code + multilingual",
        "Mistral / Mixtral": "7B / 8x7B MoE / 8x22B MoE — efficient",
        "Phi-3 (Microsoft)": "3.8B / 7B — small but capable, mobile-friendly",
        "DeepSeek V3": "671B (37B active MoE) — strong reasoning, cheap",
    },
    "PROPRIETARY (API, paid)": {
        "GPT-5 / o4-mini (OpenAI)": "Multimodal, fastest, large context",
        "Claude Sonnet 4 (Anthropic)": "Best coding, 200K+ context",
        "Gemini 2.5 Pro (Google)": "1M+ context, multimodal native",
        "Grok 3 (xAI)": "Real-time data, X integration",
    },
}

print("LLM LANDSCAPE (2025):")
for category, models in models_2025.items():
    print(f"\n  {category}:")
    for model, desc in models.items():
        print(f"    {model}: {desc}")

# CHOOSING THE RIGHT MODEL:
choosing = {
    "Production chat": "GPT-5 or Claude Sonnet 4 (best quality)",
    "Coding": "Claude Sonnet 4 (best at code)",
    "Hard reasoning": "o4-mini / o3 (test-time compute)",
    "Budget / local": "Llama 3.1 8B (free, runs on laptop)",
    "Mobile": "Phi-3 mini / Qwen 2.5 3B",
    "Long documents": "Gemini 2.5 (1M+ tokens)",
    "Multilingual": "Qwen 2.5 / Llama 3.1",
    "Privacy (on-prem)": "Llama 3.1 / Mistral (no data leaves your server)",
}

print("\nCHOOSING BY NEED:")
for need, model in choosing.items():
    print(f"  {need}: {model}")</div>

<div class="code-block"># ── STEP 4: Mixture of Experts (MoE) ──
# MoE: only activate SOME experts per token (not the whole model).

moe_explanation = """
DENSE MODEL (standard):
  Every token goes through ALL parameters.
  70B model → 70B active parameters per token.
  → High quality but SLOW and EXPENSIVE at inference.

MoE (Mixture of Experts):
  Model has N "experts" (sub-networks).
  Each token activates only TOP-K experts (usually 2-8).
  Router decides which expert handles which token.

  Mixtral 8x7B:
    Total parameters: 47B (8 experts x ~7B each)
    Active per token: ~13B (top 2 experts)
    → Near-70B quality at near-13B speed!
"""

print(moe_explanation)

# MoE MODELS:
moe_models = {
    "Mixtral 8x7B": "8 experts x 7B = 47B total, 13B active per token",
    "Mixtral 8x22B": "8 experts x 22B = 141B total, 39B active",
    "DeepSeek V3": "256 experts, 8 active per token (671B total, 37B active)",
    "GPT-4 (est.)": "8-16 experts (Mixture of Experts architecture)",
    "Qwen-MoE": "60 experts, 8 active (A14B variant)",
}

print("MoE MODELS:")
for model, desc in moe_models.items():
    print(f"  {model}: {desc}")

# MoE ADVANTAGES:
moe_pros = {
    "Speed": "Only K experts active → faster inference",
    "Capacity": "More total parameters → more knowledge stored",
    "Specialization": "Different experts learn different tasks",
    "Cost": "High quality at lower compute cost",
}

print("\nMoE ADVANTAGES:")
for pro, desc in moe_pros.items():
    print(f"  {pro}: {desc}")

# MoE CHALLENGES:
moe_cons = {
    "Memory": "Must load ALL experts in memory (even inactive ones)",
    "Complexity": "Router training is tricky (load balancing)",
    "Communication": "Distributed training has higher overhead",
}

print("\nMoE CHALLENGES:")
for con, desc in moe_cons.items():
    print(f"  {con}: {desc}")</div>

<div class="code-block"># ── STEP 5: Multimodal LLMs ──
# Modern LLMs don't just process TEXT — they process IMAGES, AUDIO, VIDEO.

multimodal = {
    "Text-only (traditional)": {
        "input": "Text in, text out",
        "models": "GPT-2, GPT-3, Llama 1/2",
    },
    "Vision-Language": {
        "input": "Text + images",
        "models": "GPT-4o, Claude 3.5, Gemini, Llama 3.2 Vision",
        "use": "Image description, visual Q&A, OCR, chart reading",
    },
    "Audio-Language": {
        "input": "Text + audio",
        "models": "GPT-4o (native audio), Gemini",
        "use": "Voice chat, transcription, audio analysis",
    },
    "Video": {
        "input": "Text + video frames",
        "models": "Gemini 2.5 (native video understanding)",
        "use": "Video summarization, action recognition",
    },
    "Full Multimodal": {
        "input": "Text + images + audio + video + code",
        "models": "GPT-4o, Gemini 2.5 Pro",
        "use": "Any input → any output (truly general AI)",
    },
}

print("MULTIMODAL LLMs:")
for modality, info in multimodal.items():
    print(f"\n  {modality}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# HOW MULTIMODAL WORKS:
how_multimodal = """
Vision encoders convert images to tokens:
  Image → Vision Encoder (CLIP/ViT) → embedding vectors
  → These vectors are treated like text token embeddings
  → Unified Transformer processes text + image together

GPT-4o approach: NATIVE multimodal
  - Single model handles all modalities
  - No separate vision encoder
  - Faster, more integrated

Claude/Gemini approach: ADAPTER-based
  - Separate vision encoder
  - Adapter projects image features into text space
  - Transformer processes combined tokens
"""

print(how_multimodal)

# MULTIMODAL IN CODE:
multimodal_code = """
# GPT-4o vision:
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "What is in this image?"},
            {"type": "image_url", "image_url": {"url": "data:image/png;base64,..."}},
        ],
    }],
)
print(response.choices[0].message.content)
# "This image shows a golden retriever playing in a park..."
"""

print(multimodal_code)</div>

<div class="code-block"># ── STEP 6: The complete LLM pipeline ──
# Everything you've learned, in ONE unified view:

pipeline = """
THE COMPLETE LLM PIPELINE (all 10 doors):

INPUT: "Explain quantum computing to a beginner"

1. TOKENIZATION (Door 1):
   Text → tokens → [3923, 5892, 3201, 318, 264, 9428]

2. EMBEDDING (Door 2):
   Each token → vector (8192 dimensions)
   "quantum" → [0.23, -0.45, 0.89, ...]

3. POSITIONAL ENCODING:
   Add position info (RoPE rotation)

4. ATTENTION (Door 3):
   Each token attends to all others
   "computing" attends to "quantum" → understands the compound

5. TRANSFORMER BLOCKS (Door 4):
   96 layers of:
   Attention → FFN → Residual → Layer Norm
   Each layer adds deeper understanding

6. TRAINING (Door 5):
   Model was trained: Pre-train → SFT → RLHF
   Knowledge stored in FFN weights

7. GENERATION (Door 6):
   Output vector → vocabulary probabilities
   → Sample next token (temperature=0.7, top_p=0.9)
   → Append → repeat

8. HALLUCINATION CONTROL (Door 7):
   If unsure → "I don't know" (RAG grounding)
   Low temperature for factual accuracy

9. SCALING (Door 8):
   70B+ parameters for quality
   MoE for efficiency (only 13B active)

10. MULTIMODAL (Door 9):
    If user sends an image with the question →
    Vision encoder adds image tokens to the sequence

OUTPUT: "Quantum computing uses quantum bits (qubits)
that can be 0 and 1 simultaneously, enabling parallel
computation for certain problems..."
"""

print(pipeline)

# THE 10 DOORS SUMMARY:
doors_summary = {
    "Door 1": "Tokenization — text → tokens",
    "Door 2": "Embeddings — tokens → vectors (meaning space)",
    "Door 3": "Self-Attention — tokens communicate with each other",
    "Door 4": "Transformer — 96 layers of attention + FFN",
    "Door 5": "Training — Pre-train → SFT → RLHF",
    "Door 6": "Generation — one token at a time (autoregressive)",
    "Door 7": "Hallucination — why LLMs lie + how to prevent",
    "Door 8": "Scaling Laws — bigger + more data = better",
    "Door 9": "MoE + Multimodal — experts + vision/audio",
    "Door 10": "Complete Pipeline — all pieces together",
}

print("THE 10 DOORS OF LLM ANATOMY:")
for door, topic in doors_summary.items():
    print(f"  {door}: {topic}")

# CONGRATULATIONS!
congrats = """
You now understand HOW Large Language Models work —
from tokenization to generation, from attention to scaling.

This knowledge lets you:
  ✅ Choose the right model for each task
  ✅ Write better prompts (you know how attention works)
  ✅ Prevent hallucination (RAG, temperature, verification)
  ✅ Estimate costs (token counting, model pricing)
  ✅ Build production AI applications (streaming, caching)
  ✅ Fine-tune models for your domain (LoRA, SFT, DPO)

"The best way to predict the future is to invent it." — Alan Kay
You now have the knowledge to build the future of AI applications.

Every ChatGPT, Claude, Gemini interaction you have from now on —
you'll understand EXACTLY what's happening inside.
That's the power of understanding the fundamentals.
"""

print(congrats)</div>

<div class="dialogue">পরিমাণ — quantity, measure। কুরআনে আল্লাহ বলেন — "যদি পৃথিবীর সব গাছ কলম হতো এবং সমুদ্র কালি হতো... আল্লাহর জ্ঞান শেষ হতো না।" (৩১:২৭)। আল্লাহর জ্ঞান অসীম। মডেলের জ্ঞান সীমিত — কিন্তু scaling। বেশি ডেটা, বেশি প্যারামিটার = বেশি জ্ঞান। কিন্তু সঠিক অনুপাতে। Chinchilla — প্রতি প্যারামিটারে ২০ টোকেন। এটাই scaling-এর মিযান।</div>
<div class="dialogue en">"Qadar — quantity, measure. Allah says — 'If all trees on earth were pens and the ocean were ink... Allah's knowledge would not be exhausted.' (31:27). Allah's knowledge is infinite. The model's knowledge is finite — but scalable. More data, more parameters = more knowledge. But in the right ratio. Chinchilla — 20 tokens per parameter. This is scaling's mizan."</div>`,
  senior:{
    title:"মডেল নির্বাচন — কোনটা কখন",
    body:`<p><strong>ছোট + ফাস্ট (8B):</strong> Llama 3.1 8B — লোকাল, ফ্রি, মোবাইল পারফরম্যান্স ভালো।</p><p><strong>মাঝারি (70B):</strong> Llama 3.1 70B — RAG, code, বেশিরভাগ production।</p><p><strong>বড় (405B):</strong> Llama 3.1 405B — frontier-class, কিন্তু ভারী।</p><p><strong>প্রোপাইটারি:</strong> Claude Sonnet 4 = কোডে সেরা। GPT-5 = মাল্টিমোডাল+স্পিড। Gemini 2.5 = লং কন্টেক্সট। o4-mini / o3 = হার্ড রিজনিং।</p><p><strong>নিয়ম:</strong> ছোট মডেল দিয়ে শুরু করো, দরকার হলে বড় করো।</p>`
  }
});

// ══ DOOR 9: MULTIPLICITY ══
doors.push({
  num:9, icon:"🔀", color:"#52c41a", name:"মাল্টিপাথ কক্ষ",
  subtitle:"The Multi-Path Chamber", tech:"Mixture of Experts, Multimodality",
  spirit:"বহুত্ব — বৈচিত্র্যে শক্তি",
  secret:"একটা মডেল সব কাজে ভালো নয়। কিন্তু একাধিক বিশেষজ্ঞ মিলে — সব কাজে ভালো। Mixture of Experts = বিশেষজ্ঞদের দল। Multimodal = শুধু টেক্সট নয়, ছবি, অডিও, ভিডিও।",
  recall:{
    q:"মাল্টিপাথ কক্ষে কেন একাধিক পথ আছে, একটা নয়?",
    qen:"Why does the multi-path chamber have multiple paths, not one?",
    a:"কারণ বিভিন্ন সমস্যার জন্য বিভিন্ন বিশেষজ্ঞ দরকার। MoE = একাধিক বিশেষজ্ঞ, শুধু প্রয়োজনীয় জন কাজ করে। Multimodal = শুধু টেক্সট নয়, ছবি-অডিও বোঝা। বৈচিত্র্য = শক্তি।",
    aen:"Because different problems need different experts. MoE = multiple experts, only needed ones work. Multimodal = not just text, understanding images/audio. Diversity = strength."
  },
  story:`
<p class="scene-setting">নবম কক্ষ। একটা অদ্ভুত কক্ষ — একটা বড় ছক, আটটা কক্ষে বিভক্ত। প্রতিটি কক্ষে একজন বিশেষজ্ঞ — একজন কোড দেখেন, একজন গণিত, একজন ভাষা, একজন যুক্তি। সমস্যা আসলে শুধু প্রাসঙ্গিক বিশেষজ্ঞ কাজ করেন। কক্ষরক্ষক রাইয়ান বললেন — "এটাই Mixture of Experts।"</p>
<p class="scene-setting en">The ninth chamber. A strange room — a large grid, divided into eight cubicles. Each has an expert — one reads code, one math, one language, one logic. When a problem arrives, only the relevant expert works. Keeper Rayhan said — "This is Mixture of Experts."</p>

<div class="dialogue">স্কেল পরিমাপক বলেছিলেন — বড় মডেল ভালো। কিন্তু আমি বলি — বড় মডেল ধীর, ব্যয়বহুল। কিন্তু যদি বড় মডেলের ক্ষমতা চাও — ধীরতা ছাড়া? Mixture of Experts। বিশেষজ্ঞদের দল। শুধু প্রয়োজনীয় জন কাজ করেন।</div>
<div class="dialogue en">"The scale measurer said — bigger is better. But I say — big models are slow, expensive. But what if you want big model power — without slowness? Mixture of Experts. A team of experts. Only the needed ones work."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Activation Outliers:</strong> Outlier activations destabilized quantization — INT8 lost 15% accuracy. Fix: outlier-aware quantization.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrLLM9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22d3ee"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">Mixture of Experts — Big Power, Small Speed</text>
<!-- Token input -->
<rect x="20" y="95" width="65" height="30" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="52" y="114" text-anchor="middle" fill="#7dd3fc" font-size="9">token</text>
<!-- Router -->
<rect x="110" y="95" width="65" height="30" rx="5" fill="#1e3a5f" stroke="#fbbf24" stroke-width="2"/>
<text x="142" y="108" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">Router</text>
<text x="142" y="118" text-anchor="middle" fill="#94a3b8" font-size="10">picks experts</text>
<line x1="85" y1="110" x2="105" y2="110" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM9)"/>
<!-- Experts grid - 8 experts -->
<text x="345" y="45" text-anchor="middle" fill="#94a3b8" font-size="10">8 Expert Networks (e.g., Mixtral 8*7B = 47B total)</text>
<!-- Active experts (highlighted) -->
<rect x="200" y="55" width="60" height="40" rx="5" fill="#1a2744" stroke="#22c55e" stroke-width="2.5"/>
<text x="230" y="72" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">Expert 1</text>
<text x="230" y="85" text-anchor="middle" fill="#4ade80" font-size="10">✓ active</text>
<rect x="270" y="55" width="60" height="40" rx="5" fill="#1e3a5f" stroke="#475569" stroke-width="1" opacity="0.4"/>
<text x="300" y="72" text-anchor="middle" fill="#64748b" font-size="8">Expert 2</text>
<text x="300" y="85" text-anchor="middle" fill="#64748b" font-size="10">asleep</text>
<rect x="340" y="55" width="60" height="40" rx="5" fill="#1a2744" stroke="#22c55e" stroke-width="2.5"/>
<text x="370" y="72" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">Expert 3</text>
<text x="370" y="85" text-anchor="middle" fill="#4ade80" font-size="10">✓ active</text>
<rect x="410" y="55" width="60" height="40" rx="5" fill="#1e3a5f" stroke="#475569" stroke-width="1" opacity="0.4"/>
<text x="440" y="72" text-anchor="middle" fill="#64748b" font-size="8">Expert 4</text>
<text x="440" y="85" text-anchor="middle" fill="#64748b" font-size="10">asleep</text>
<!-- Row 2 -->
<rect x="200" y="105" width="60" height="40" rx="5" fill="#1e3a5f" stroke="#475569" stroke-width="1" opacity="0.4"/>
<text x="230" y="122" text-anchor="middle" fill="#64748b" font-size="8">Expert 5</text>
<text x="230" y="135" text-anchor="middle" fill="#64748b" font-size="10">asleep</text>
<rect x="270" y="105" width="60" height="40" rx="5" fill="#1a2744" stroke="#22c55e" stroke-width="2.5"/>
<text x="300" y="122" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">Expert 6</text>
<text x="300" y="135" text-anchor="middle" fill="#4ade80" font-size="10">✓ active</text>
<rect x="340" y="105" width="60" height="40" rx="5" fill="#1e3a5f" stroke="#475569" stroke-width="1" opacity="0.4"/>
<text x="370" y="122" text-anchor="middle" fill="#64748b" font-size="8">Expert 7</text>
<text x="370" y="135" text-anchor="middle" fill="#64748b" font-size="10">asleep</text>
<rect x="410" y="105" width="60" height="40" rx="5" fill="#1e3a5f" stroke="#475569" stroke-width="1" opacity="0.4"/>
<text x="440" y="122" text-anchor="middle" fill="#64748b" font-size="8">Expert 8</text>
<text x="440" y="135" text-anchor="middle" fill="#64748b" font-size="10">asleep</text>
<!-- Router arrows -->
<line x1="175" y1="105" x2="195" y2="75" stroke="#fbbf24" stroke-width="1.5" opacity="0.8"/>
<line x1="175" y1="110" x2="335" y2="75" stroke="#fbbf24" stroke-width="1.5" opacity="0.8"/>
<line x1="175" y1="115" x2="295" y2="105" stroke="#fbbf24" stroke-width="1.5" opacity="0.8"/>
<!-- Output merge -->
<rect x="490" y="85" width="70" height="40" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="525" y="102" text-anchor="middle" fill="#7dd3fc" font-size="8">Merge</text>
<text x="525" y="115" text-anchor="middle" fill="#94a3b8" font-size="10">weighted sum</text>
<!-- Bottom comparison -->
<rect x="20" y="165" width="540" height="70" rx="8" fill="#0d1526" stroke="#a855f7" stroke-width="1"/>
<text x="290" y="183" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">Why MoE? — Emergent Abilities at Scale</text>
<rect x="40" y="192" width="150" height="35" rx="5" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="115" y="206" text-anchor="middle" fill="#fcd34d" font-size="10">Dense model: 70B</text>
<text x="115" y="218" text-anchor="middle" fill="#94a3b8" font-size="10">all 70B active → slow</text>
<text x="290" y="213" text-anchor="middle" fill="#7dd3fc" font-size="10">vs</text>
<rect x="330" y="192" width="210" height="35" rx="5" fill="#1a2744" stroke="#22c55e" stroke-width="2"/>
<text x="435" y="206" text-anchor="middle" fill="#4ade80" font-size="10">MoE: 47B total, 13B active</text>
<text x="435" y="218" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">→ same quality, 5* faster</text>
</svg>
</div>
<div class="svg-caption">Mixture of Experts — শুধু প্রয়োজনীয় বিশেষজ্ঞ কাজ করে; বড় মডেলের ক্ষমতা, ছোট মডেলের গতি</div>

<div class="code-block"># ── STEP 1: MoE (Mixture of Experts) explained ──
# MoE lets a large model run FAST by only activating parts per token.

moe_explained = """
DENSE MODEL (every token uses ALL parameters):
  Token → [full 70B model] → output
  Slow, expensive per token

MoE MODEL (only activate top-K experts):
  Token → Router → selects 2-8 experts → [only those experts] → output
  Fast, cheap per token

Mixtral 8x7B: 47B total params, only 13B active per token
DeepSeek V3: 671B total params, only 37B active per token
GPT-4 (est.): ~1.7T total params, ~280B active per token
"""

print(moe_explained)

# MoE BENEFITS:
benefits = {
    "Inference speed": "Only K experts active → near-small-model speed",
    "Model capacity": "More total params → more knowledge stored",
    "Specialization": "Different experts learn different domains",
    "Cost efficiency": "70B-quality output at 13B-compute cost",
}

print("MoE BENEFITS:")
for benefit, desc in benefits.items():
    print(f"  {benefit}: {desc}")</div>

<div class="code-block"># ── STEP 2: MoE architecture ──
# How the router and experts work:

# MoE BLOCK (replaces single FFN):
moe_arch = """
STANDARD Transformer Block:
  → Attention → FFN (all tokens through same FFN) → Residual

MoE Transformer Block:
  → Attention → Router selects experts → K expert FFNs → Residual

ROUTER (gating network):
  For each token, compute:
    gate_scores = softmax(W_gate @ token_vector)
  → gate_scores has N values (one per expert)
  → Pick top-K experts with highest scores
  → Weight each expert's output by its gate score

  Example with 8 experts, top-2:
    Token "math" → router scores: [0.02, 0.01, 0.45, 0.40, 0.03, 0.02, 0.04, 0.03]
    → Top-2: expert 3 (0.45), expert 4 (0.40)
    → Only experts 3 and 4 process this token
    → output = 0.45 * expert3(token) + 0.40 * expert4(token)
"""

print(moe_arch)

# MoE CHALLENGES:
challenges = {
    "Load balancing": "All experts should get equal work (or some starve)",
    "Memory cost": "All experts in memory even if inactive",
    "Training instability": "Router can collapse (always picks same expert)",
    "Communication overhead": "In distributed training, experts on different GPUs",
}

print("MoE CHALLENGES:")
for challenge, desc in challenges.items():
    print(f"  {challenge}: {desc}")</div>

<div class="code-block"># ── STEP 3: Multimodal LLMs ──
# Modern LLMs process TEXT + IMAGES + AUDIO + VIDEO.

multimodal_types = {
    "Text-only (GPT-3)": "Input: text. Output: text.",
    "Vision-Language (GPT-4V, Claude 3.5)": "Input: text + images. Output: text.",
    "Audio (GPT-4o, Whisper)": "Input: audio. Output: text or audio.",
    "Video (Gemini 2.5)": "Input: video frames. Output: text.",
    "Full Multimodal (GPT-4o)": "Any input → any output.",
}

print("MULTIMODAL TYPES:")
for mtype, desc in multimodal_types.items():
    print(f"  {mtype}: {desc}")

# HOW VISION WORKS IN LLMs:
vision_pipeline = """
IMAGE PROCESSING IN VISION-LANGUAGE MODELS:

1. Image → Patches (16x16 pixel blocks)
2. Patches → Vision Encoder (ViT/CLIP) → embedding vectors
3. Embeddings → projected into text embedding space
4. Combined with text tokens → fed to Transformer
5. Transformer processes text + image tokens together

Example:
  Input: [IMAGE_TOKEN_1, IMAGE_TOKEN_2, ..., "What is this?"]
  Model sees image tokens + text tokens in one sequence
  Output: "This is a cat sitting on a windowsill."

Each image = ~1000-4000 tokens (depends on resolution)
This is why vision queries cost MORE tokens than text-only.
"""

print(vision_pipeline)</div>

<div class="code-block"># ── STEP 4: Multimodal use cases ──
# What you can DO with multimodal LLMs:

use_cases = {
    "Image Analysis": {
        "input": "Medical X-ray + 'What do you see?'",
        "use": "Healthcare diagnostics (assist, not replace doctors)",
    },
    "Document Understanding": {
        "input": "Scanned PDF + 'Extract all invoice data'",
        "use": "OCR + data extraction from documents",
    },
    "UI/UX Testing": {
        "input": "Screenshot + 'Find the login button'",
        "use": "Automated UI testing, accessibility audits",
    },
    "Code from Design": {
        "input": "Mockup image + 'Write HTML/CSS for this design'",
        "use": "Design-to-code, rapid prototyping",
    },
    "Visual Q&A": {
        "input": "Chart/graph + 'What's the trend?'",
        "use": "Data analysis, chart interpretation",
    },
    "Video Understanding": {
        "input": "Video + 'Summarize what happens'",
        "use": "Content moderation, video search, surveillance",
    },
    "Audio Transcription": {
        "input": "Audio recording + 'Transcribe this'",
        "use": "Meeting notes, podcast transcription, subtitles",
    },
    "Real-time Voice Chat": {
        "input": "Voice question",
        "use": "GPT-4o voice mode, hands-free AI assistant",
    },
}

print("MULTIMODAL USE CASES:")
for use_case, info in use_cases.items():
    print(f"\n  {use_case}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 5: Multimodal in production ──
# HOW TO USE VISION IN YOUR APPLICATIONS:

# GPT-4o VISION (OpenAI API):
vision_code = """
from openai import OpenAI
import base64

client = OpenAI()

# Encode image to base64:
with open("screenshot.png", "rb") as f:
    image_data = base64.b64encode(f.read()).decode()

# Ask GPT-4o about the image:
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "Describe this image and list any UI issues"},
            {
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/png;base64,{image_data}",
                    "detail": "high"  # or "low" for cheaper, less detail
                }
            }
        ]
    }],
    max_tokens=500,
)
print(response.choices[0].message.content)
"""

print(vision_code)

# COST CONSIDERATIONS:
cost_notes = """
Image tokens are EXPENSIVE:
  - Low detail: ~85 tokens per image (cheap)
  - High detail: ~1100-4400 tokens per image (expensive)
  - Video: every frame = more tokens

Tips:
  - Use "low" detail when possible
  - Resize images before sending
  - Cache results (same image = same analysis)
  - Use vision only when needed (text-only is cheaper)
"""

print(cost_notes)

# CLAUDE VISION (Anthropic):
claude_vision = """
# Claude 3.5 Sonnet vision:
import anthropic

client = anthropic.Anthropic()
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=500,
    messages=[{
        "role": "user",
        "content": [
            {"type": "image", "source": {
                "type": "base64",
                "media_type": "image/png",
                "data": image_data,
            }},
            {"type": "text", "text": "What UI framework was used?"},
        ]
    }],
)
"""

print(claude_vision)</div>

<div class="code-block"># ── STEP 6: Future of multimodal LLMs ──
# Where multimodal AI is heading:

future = {
    "Native multimodal": "Single model processes all modalities (no separate encoders)",
    "Real-time video": "Understand long videos in real-time (not just frames)",
    "3D understanding": "Process 3D scenes, depth, spatial relationships",
    "Embodied AI": "LLMs controlling robots (vision + action)",
    "Real-time voice": "Sub-300ms voice conversation (GPT-4o level)",
    "Audio generation": "Generate music, sound effects, voice",
    "Image generation": "Native image generation (not just understanding)",
    "AGI": "Artificial General Intelligence (all human abilities)",
}

print("FUTURE OF MULTIMODAL:")
for trend, desc in future.items():
    print(f"  {trend}: {desc}")

# 2025 MULTIMODAL MODELS:
current_models = {
    "GPT-4o (OpenAI)": "Text + image + audio (native, real-time voice)",
    "Claude Sonnet 4 (Anthropic)": "Text + image (best at document analysis)",
    "Gemini 2.5 Pro (Google)": "Text + image + audio + video (1M+ context)",
    "Llama 3.2 Vision (Meta)": "Text + image (open weights, local)",
    "Qwen 2.5 VL (Alibaba)": "Text + image + video (open weights)",
}

print("\n2025 MULTIMODAL MODELS:")
for model, desc in current_models.items():
    print(f"  {model}: {desc}")

# MoE + MULTIMODAL = THE FUTURE:
future_combo = """
The two biggest trends in LLMs (2024-2025):
  1. MoE: More capacity, less compute (efficiency)
  2. Multimodal: Process everything, not just text (versatility)

Combined: GPT-4o = MoE + native multimodal
This is the direction ALL frontier models are heading.

For your applications:
  - Start with text-only (cheapest)
  - Add vision when needed (OCR, image analysis)
  - Add audio for voice interfaces
  - Use MoE models (Mixtral, DeepSeek) for cost efficiency
  - Choose based on USE CASE, not hype
"""

print(future_combo)

# SUMMARY:
# MoE + Multimodal = efficiency + versatility
# These are the two biggest advances since the original Transformer.
# Understanding them = understanding the CUTTING EDGE of AI.</div>

<div class="dialogue">বহুত্ব — multiplicity, diversity। কুরআনে আল্লাহ বলেন — "মানুষ ও জিনকে আমি একমাত্র সম্প্রদায় হিসেবে সৃষ্টি করেছিলাম" — কিন্তু পরে বৈচিত্র্য এলো। MoE-ও তেমনি — এক মডেল, কিন্তু একাধিক বিশেষজ্ঞ। প্রতিটা সমস্যায় সঠিক বিশেষজ্ঞ কাজ করেন। বৈচিত্র্যে শক্তি। Multimodal-ও — শুধু এক রকম ইনপুট নয়, বিভিন্ন। বৈচিত্র্যই বোঝার ভিত্তি।</div>
<div class="dialogue en">"Bahutva — multiplicity, diversity. Allah says — 'I created humans and jinn as a single community' — but diversity came. MoE too — one model, but multiple experts. For each problem, the right expert works. Strength in diversity. Multimodal too — not just one input type, but many. Diversity is the foundation of understanding."</div>`,
  senior:{
    title:"MoE ও Multimodal — প্রোডাকশনে",
    body:`<p><strong>MoE benefit:</strong> Mixtral 8x7B চালাও — ৪৭B ক্ষমতা, ১৩B গতি। DeepSeek-V3 / Qwen 3 MoE — আরও আধুনিক sparse-MoE।</p><p><strong>Vision API:</strong> GPT-5 vision — screenshot থেকে code, document থেকে data extraction।</p><p><strong>Audio:</strong> Whisper (OpenAI) স্পিচ-টু-টেক্সট, GPT-5 native audio (real-time conversation)।</p><p><strong>Cost:</strong> Multimodal = বেশি টোকেন (ছবি টোকেন বেশি খায়)। দরকার না হলে text-only ব্যবহার করো।</p>`
  }
});

// ══ DOOR 10: MASTER SYNTHESIS ══
doors.push({
  num:10, icon:"🔮", color:"#ffb38a", name:"মাস্টারের সমন্বয় কক্ষ",
  subtitle:"The Master's Synthesis Chamber", tech:"Putting It All Together",
  spirit:"সির — গোপন সারমর্ম",
  secret:"LLM জাদু নয়। এটা টোকেন থেকে অর্থ, অর্থ থেকে ভাষা, ভাষা থেকে উত্তর। প্রতিটা স্তর বুঝলে তুমি LLM-কে শুধু ব্যবহার করো না — তুমি এটাকে ইঞ্জিনিয়ার করো। এটাই LLM দর্শন।",
  recall:{
    q:"মাস্টার কেন শেষে সব এক করে দেখান?",
    qen:"Why does the master unify everything at the end?",
    a:"কারণ বিচ্ছিন্ন জ্ঞান = অসম্পূর্ণ। LLM-এর নয়টি স্তর — টোকেনাইজেশন থেকে multimodality — সব একসাথে একটা সম্পূর্ণ ছবি। মাস্টার সেই ছবি দেখান। সির — সম্পূর্ণ বোঝার সারমর্ম।",
    aen:"Because isolated knowledge = incomplete. Nine layers of LLM — from tokenization to multimodality — together form one complete picture. The master shows that picture. Sir — the essence of complete understanding."
  },
  story:`
<p class="scene-setting">দশম কক্ষ। শেষ কক্ষ। মাস্টার ইদ্রিসের সমন্বয় কক্ষ। একটা গোলাকার টেবিল — উপরে নয়টি ছোট মডেল, একে একে সাজানো। হরফ কারিগরের ব্লক, চুম্বক নির্মাতার বোর্ড, দৃষ্টি নিয়ন্ত্রকের চোখ, নির্মাতার নীলনকশা, প্রশিক্ষকের মাঠ, ভাস্করের পাথর, মরীচিকা কক্ষের আলো, স্কেল পরিমাপকের খাতা, মাল্টিপাথের ছক। সব একসাথে।</p>
<p class="scene-setting en">The tenth chamber. The last. Master Idris's synthesis chamber. A circular table — nine small models on top, arranged in sequence. Letter smith's blocks, magnet maker's board, focus controller's eye, builder's blueprint, trainer's field, sculptor's stone, mirage chamber's light, scale measurer's ledger, multi-path grid. All together.</p>

<div class="dialogue">নয়টি কক্ষ পেরিয়েছ। হরফ কারিগর বলেছিলেন — টোকেন বুঝো। চুম্বক নির্মাতা বলেছিলেন — embedding হলো অর্থের জ্যামিতি। দৃষ্টি নিয়ন্ত্রক বলেছিলেন — attention হলো সম্পর্ক বোঝা। নির্মাতা বলেছিলেন — Transformer হলো সাতটি স্তরের ভবন। প্রশিক্ষক বলেছিলেন — তিন স্তরে শেখা। ভাস্কর বলেছিলেন — এক টোকেন এক ধাপে। মরীচিকা কক্ষ বলেছিলেন — হ্যালুসিনেশন আসলে ভ্রম। স্কেল পরিমাপক বলেছিলেন — অনুপাত গুরুত্বপূর্ণ। মাল্টিপাথ কক্ষ বলেছিলেন — বৈচিত্র্যে শক্তি। কিন্তু এখন — সব এক করে দেখো।</div>
<div class="dialogue en">"You've passed nine chambers. The letter smith said — understand tokens. The magnet maker said — embeddings are the geometry of meaning. The focus controller said — attention is understanding relationships. The builder said — Transformer is a seven-layer building. The trainer said — learning in three stages. The sculptor said — one token at a time. The mirage chamber said — hallucination is illusion. The scale measurer said — proportion matters. The multi-path chamber said — diversity is strength. But now — see it all together."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Residual Connection Degradation:</strong> 100+ layer model — residual signal faded. Fix: scaled residuals, layer normalization.</div></div>


<div class="code-block"># ── STEP 1: The complete LLM pipeline ──
# Everything from all 9 doors, in ONE end-to-end example.

# INPUT: "What is the capital of France?"
pipeline = """
STEP 1: TOKENIZATION (Door 1)
  "What is the capital of France?"
  → tokens: [2440, 318, 262, 4945, 286, 3278, 30]
  → 7 tokens

STEP 2: EMBEDDING (Door 2)
  Each token ID → 8192-dim vector
  "France" → [0.23, -0.45, 0.89, ...]
  + positional encoding (RoPE rotation)

STEP 3: ATTENTION (Door 3)
  96 layers of multi-head attention:
  "capital" attends to "France" → understands "capital of France"
  "What" attends to "capital" → understands it's a question

STEP 4: TRANSFORMER BLOCKS (Door 4)
  Each of 96 layers:
  Attention → FFN (knowledge lookup) → Residual → LayerNorm
  Layer 1-20: syntax/grammar
  Layer 21-70: semantics/meaning
  Layer 71-96: knowledge/reasoning

STEP 5: GENERATION (Door 6)
  Final vector → vocabulary probabilities:
  "Paris": 0.99
  "Lyon":  0.003
  "the":   0.001
  → Pick "Paris" (temperature=0, greedy)

STEP 6: AUTOREGRESSIVE REPEAT
  Append "Paris" → predict next → "."
  Append "." → predict next → "<END>"
  → Stop.

OUTPUT: "Paris."
"""

print(pipeline)</div>

<div class="code-block"># ── STEP 2: How training made this possible ──
# The model "knows" Paris is the capital because of TRAINING.

training_role = """
PRE-TRAINING:
  Model read: "The capital of France is Paris"
  millions of times during pre-training.
  The FFN weights STORED this fact.

SFT (Supervised Fine-Tuning):
  Model learned the Q&A format:
  Q: "What is the capital of France?"
  A: "Paris"
  (not just autocomplete, but actual answers)

RLHF (Alignment):
  Model learned to give CONCISE, HELPFUL answers.
  "Paris." preferred over a long essay about France.

ALL THREE STAGES were necessary:
  Without pre-training: no knowledge
  Without SFT: can't answer questions
  Without RLHF: might give unhelpful, rambling answers
"""

print(training_role)

# WHAT THE MODEL "KNOWS" vs DOESN'T:
knowledge = {
    "KNOWS (was in training data)": [
        "Factual: Paris is the capital of France",
        "Grammar: how to form sentences",
        "Reasoning: how to deduce from facts",
        "Code: Python, JavaScript, etc.",
        "Translation: English ↔ other languages",
    ],
    "DOESN'T KNOW (not in training data)": [
        "Private data (your bank account, personal info)",
        "Future events (after training cutoff)",
        "Very recent news (not yet in data)",
        "Subjective experiences (it has no consciousness)",
    ],
}

print("WHAT LLMs KNOW vs DON'T:")
for category, items in knowledge.items():
    print(f"\n  {category}:")
    for item in items:
        print(f"    - {item}")</div>

<div class="code-block"># ── STEP 3: Why understanding matters ──
# Understanding the pipeline makes you a BETTER LLM engineer.

benefits = {
    "Better prompts": {
        "why": "You know attention focuses on start/end → put key info there",
        "effect": "More accurate, relevant responses",
    },
    "Cost optimization": {
        "why": "You know tokenization → use English (cheaper) when possible",
        "effect": "Lower API costs (2-4x savings)",
    },
    "Hallucination prevention": {
        "why": "You know LLMs use probability → use RAG + low temperature",
        "effect": "More reliable, factual outputs",
    },
    "Model selection": {
        "why": "You know scaling laws → choose right model for each task",
        "effect": "Optimal quality vs cost trade-off",
    },
    "Fine-tuning decisions": {
        "why": "You know training stages → decide what fine-tuning can fix",
        "effect": "Targeted model improvements",
    },
    "Debugging AI systems": {
        "why": "You understand each component → isolate where errors come from",
        "effect": "Faster troubleshooting of AI applications",
    },
}

print("BENEFITS OF UNDERSTANDING LLM ANATOMY:")
for benefit, info in benefits.items():
    print(f"\n  {benefit}")
    print(f"    Why: {info['why']}")
    print(f"    Effect: {info['effect']}")</div>

<div class="code-block"># ── STEP 4: Building production LLM applications ──
# Complete production architecture:

architecture = """
PRODUCTION LLM APPLICATION STACK:

USER LAYER:
  → Web frontend (React/Vue) or mobile app
  → Chat interface or API consumer

API LAYER (Django/FASTAPI):
  → Request validation + rate limiting
  → User authentication (JWT)
  → Prompt construction + system message
  → LLM API call (OpenAI, Anthropic, local)
  → Streaming response (SSE)
  → Response logging + cost tracking

ORCHESTRATION LAYER:
  → RAG pipeline (vector search → context → LLM)
  → Conversation memory (Redis/database)
  → Tool calling (calculator, web search, database query)
  → Guardrails (content filtering, safety checks)

INFRASTRUCTURE:
  → Vector database (pgvector/Pinecone)
  → Cache layer (Redis for prompt caching)
  → Monitoring (latency, cost, hallucination rate)
  → Logging (all interactions for audit)

LLM LAYER:
  → API: GPT-4o, Claude Sonnet 4, Gemini 2.5
  → Local: Llama 3.1, Mistral (privacy/cost)
  → Fine-tuned: LoRA-adapted for your domain
"""

print(architecture)

# COST ESTIMATION FOR PRODUCTION:
costs = {
    "Small app (100 users)": "~$100-500/month (GPT-4o-mini)",
    "Medium app (10K users)": "~$2K-10K/month (GPT-4o mix)",
    "Large app (1M users)": "~$50K-200K/month (GPT-4o + caching)",
    "Enterprise (RAG + fine-tuning)": "~$10K-50K/month + $5K setup",
}

print("PRODUCTION COST ESTIMATES:")
for scale, cost in costs.items():
    print(f"  {scale}: {cost}")</div>

<div class="code-block"># ── STEP 5: LLM engineering checklist ──
# Everything you need to build production LLM applications:

checklist = {
    "PROMPT ENGINEERING": [
        "Clear system prompt with persona + rules",
        "Few-shot examples for complex tasks",
        "Temperature=0 for factual, 0.7 for creative",
        "Test prompts on edge cases",
        "Version control your prompts",
    ],
    "RAG PIPELINE": [
        "Document chunking (200-500 words)",
        "Vector embeddings (text-embedding-3-small)",
        "Vector database (pgvector/Pinecone)",
        "Retrieval: top-K with similarity threshold",
        "Anti-hallucination prompt ('answer from context only')",
    ],
    "API INTEGRATION": [
        "Streaming responses (SSE) for UX",
        "Rate limiting per user",
        "Token budget management",
        "Error handling (timeouts, retries)",
        "Cost tracking and logging",
    ],
    "EVALUATION": [
        "Human evaluation on test set",
        "LLM-as-judge for automated scoring",
        "Track hallucination rate",
        "Monitor user satisfaction (thumbs up/down)",
        "A/B test prompt changes",
    ],
    "DEPLOYMENT": [
        "Caching (Redis for identical prompts)",
        "Load balancing (multiple API keys)",
        "Monitoring (latency, errors, cost)",
        "Alerting (cost spikes, quality drops)",
        "Incident response (what if API goes down?)",
    ],
    "SAFETY": [
        "Input filtering (block harmful prompts)",
        "Output filtering (block harmful responses)",
        "PII detection (don't log personal data)",
        "Rate limiting (prevent abuse)",
        "Human-in-the-loop for critical decisions",
    ],
}

print("PRODUCTION LLM CHECKLIST:")
for category, items in checklist.items():
    print(f"\n  {category}:")
    for item in items:
        print(f"    ☐ {item}")</div>

<div class="code-block"># ── STEP 6: The future of LLMs ──
# Where the technology is heading (2025-2027+):

future = {
    "Larger context": "1M-10M token windows (Gemini leading)",
    "Better reasoning": "o-series models (test-time compute)",
    "Multimodal native": "Single model, all modalities (GPT-4o)",
    "MoE everywhere": "All frontier models use MoE",
    "Local models": "Phone-class models (Phi-3, Qwen small)",
    "Agent systems": "LLMs that take actions (not just generate text)",
    "Personalized": "Models fine-tuned to individual users",
    "Specialized": "Domain-specific models (medical, legal, code)",
    "Cheaper inference": "Quantization, distillation, better hardware",
    "Open source parity": "Open models catching up to proprietary",
}

print("THE FUTURE OF LLMs:")
for trend, desc in future.items():
    print(f"  {trend}: {desc}")

# YOUR JOURNEY WITH LLMs:
journey = """
You started this book knowing LLMs as a USER.
You finish as an ENGINEER who understands:

  ✅ How tokenization works (and why Bengali costs more)
  ✅ How embeddings capture meaning in vector space
  ✅ How attention lets tokens communicate
  ✅ How the Transformer architecture processes language
  ✅ How models are trained (pre-train → SFT → RLHF)
  ✅ How text generation works (one token at a time)
  ✅ Why hallucination happens (and how to prevent it)
  ✅ How scaling laws predict performance
  ✅ How MoE and multimodality work
  ✅ How to build production LLM applications

You are no longer just a consumer of AI.
You understand it. You can engineer it. You can build with it.

"Those who understand a technology can shape it.
Those who don't are shaped by it."

Welcome to the world of LLM engineering.
The future is yours to build.
"""

print(journey)

# FINAL THOUGHT:
# LLMs are the most powerful tool humans have ever built.
// Note: This line is intentionally a JS comment to avoid template literal issues
# They amplify human intelligence, creativity, and productivity.
# Understanding them deeply = having a superpower.
# Use it wisely. Use it for good. Build amazing things.</div>

<div class="verse">"তিনি শিখিয়েছেন কলমের মাধ্যমে। শিখিয়েছেন মানুষকে যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>LLM হলো আধুনিক কলম — স্বয়ংক্রিয়, বিশাল, কিন্তু নিয়ন্ত্রিত। যে এটাকে বোঝে, সে জ্ঞান তৈরি করতে পারে। যে বোঝে না, সে কেবল গ্রাহক। তুমি এখন বোঝো — টোকেন থেকে অর্থ, অর্থ থেকে ভাষা, ভাষা থেকে উত্তর। এটাই LLM দর্শন।</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrLLM10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22d3ee"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">The Complete LLM Pipeline — One Unified View</text>
<!-- Stage 1: Tokenizer -->
<rect x="15" y="100" width="80" height="55" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="55" y="120" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="bold">১. Tokenizer</text>
<text x="55" y="134" text-anchor="middle" fill="#94a3b8" font-size="10">text → token IDs</text>
<text x="55" y="145" text-anchor="middle" fill="#94a3b8" font-size="10">[2440, 318, ...]</text>
<!-- Stage 2: Embedding -->
<rect x="120" y="100" width="80" height="55" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="160" y="120" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="bold">২. Embedding</text>
<text x="160" y="134" text-anchor="middle" fill="#94a3b8" font-size="10">ID → 4096-dim</text>
<text x="160" y="145" text-anchor="middle" fill="#94a3b8" font-size="10">+ position</text>
<!-- Stage 3: Attention layers -->
<rect x="225" y="80" width="90" height="95" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="2"/>
<text x="270" y="98" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">৩. Attention</text>
<text x="270" y="112" text-anchor="middle" fill="#94a3b8" font-size="10">* 96 layers</text>
<rect x="235" y="120" width="70" height="12" rx="3" fill="#1e3a5f" stroke="#475569" stroke-width="1"/>
<text x="270" y="129" text-anchor="middle" fill="#7dd3fc" font-size="9">multi-head</text>
<rect x="235" y="136" width="70" height="12" rx="3" fill="#1e3a5f" stroke="#475569" stroke-width="1"/>
<text x="270" y="145" text-anchor="middle" fill="#7dd3fc" font-size="9">+ feed-forward</text>
<rect x="235" y="152" width="70" height="12" rx="3" fill="#1e3a5f" stroke="#475569" stroke-width="1"/>
<text x="270" y="161" text-anchor="middle" fill="#7dd3fc" font-size="9">repeat * N</text>
<!-- Stage 4: Output projection -->
<rect x="345" y="100" width="80" height="55" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="385" y="120" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="bold">৪. Output</text>
<text x="385" y="134" text-anchor="middle" fill="#94a3b8" font-size="10">vector → vocab</text>
<text x="385" y="145" text-anchor="middle" fill="#94a3b8" font-size="10">P(Paris)=0.99</text>
<!-- Stage 5: Next token -->
<rect x="450" y="100" width="80" height="55" rx="6" fill="#1a2744" stroke="#22c55e" stroke-width="2.5"/>
<text x="490" y="120" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">৫. Next token</text>
<text x="490" y="134" text-anchor="middle" fill="#4ade80" font-size="10">"Paris"</text>
<text x="490" y="145" text-anchor="middle" fill="#94a3b8" font-size="10">↻ repeat</text>
<!-- Arrows -->
<line x1="95" y1="127" x2="113" y2="127" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM10)"/>
<line x1="200" y1="127" x2="218" y2="127" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM10)"/>
<line x1="315" y1="127" x2="338" y2="127" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM10)"/>
<line x1="425" y1="127" x2="443" y2="127" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM10)"/>
<!-- Loop back arrow -->
<path d="M 490 155 Q 490 210 270 210 Q 55 210 55 160" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrLLM10)"/>
<text x="270" y="225" text-anchor="middle" fill="#4ade80" font-size="10">autoregressive — append &amp; repeat</text>
</svg>
</div>
<div class="svg-caption">সম্পূর্ণ LLM পাইপলাইন: টোকেন → embedding → ৯৬টি attention স্তর → আউটপুট সম্ভাবনা → পরবর্তী টোকেন, বারবার। নয়টি কক্ষের সারমর্ম এক ছবিতে।</div>

<div class="secret-box"><div class="label">দশম কক্ষ — সমন্বয়</div><div class="text">🔮 LLM = টোকেন + embedding + attention + training + generation। বুঝো, নিয়ন্ত্রণ করো।<br><small>শুধু ব্যবহারকারী নও — ইঞ্জিনিয়ার। এটাই LLM দর্শন।</small></div></div>`
});
