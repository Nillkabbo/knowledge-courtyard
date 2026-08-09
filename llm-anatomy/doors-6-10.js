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
<text x="105" y="113" text-anchor="middle" fill="#94a3b8" font-size="7">process all context</text>
<text x="105" y="128" text-anchor="middle" fill="#fcd34d" font-size="7">P(Dhaka)=0.89</text>
<text x="105" y="140" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">→ pick "Dhaka"</text>
<!-- Arrow -->
<line x1="192" y1="116" x2="212" y2="116" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM6)"/>
<!-- Step 2 -->
<rect x="205" y="82" width="170" height="68" rx="6" fill="#1a2744" stroke="#a855f7" stroke-width="2"/>
<text x="290" y="98" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">STEP 2: append + re-run</text>
<text x="290" y="113" text-anchor="middle" fill="#94a3b8" font-size="7">now process [..., "Dhaka"]</text>
<text x="290" y="128" text-anchor="middle" fill="#fcd34d" font-size="7">P(".")=0.70</text>
<text x="290" y="140" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">→ pick "."</text>
<!-- Arrow -->
<line x1="377" y1="116" x2="397" y2="116" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM6)"/>
<!-- Step 3 -->
<rect x="390" y="82" width="170" height="68" rx="6" fill="#1a2744" stroke="#a855f7" stroke-width="2"/>
<text x="475" y="98" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">STEP 3: append + re-run</text>
<text x="475" y="113" text-anchor="middle" fill="#94a3b8" font-size="7">now process [..., "."]</text>
<text x="475" y="128" text-anchor="middle" fill="#fcd34d" font-size="7">P(&lt;END&gt;)=0.80</text>
<text x="475" y="140" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">→ STOP</text>
<!-- Output -->
<rect x="20" y="165" width="540" height="28" rx="5" fill="#0d1526" stroke="#22c55e" stroke-width="2"/>
<text x="290" y="183" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Output: "The capital of Bangladesh is Dhaka."</text>
<!-- Cost insight -->
<rect x="20" y="205" width="540" height="35" rx="5" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,2"/>
<text x="290" y="222" text-anchor="middle" fill="#fcd34d" font-size="8">⚡ Each output token = full model forward pass over entire context</text>
<text x="290" y="234" text-anchor="middle" fill="#94a3b8" font-size="7">1000 output tokens = 1000 passes · KV cache avoids recomputing old tokens</text>
</svg>
</div>
<div class="svg-caption">Autoregressive জেনারেশন — এক সময় এক টোকেন; প্রতিটি ধাপে গোটা context পুনরায় প্রসেস হয়</div>

<div class="code-block">Autoregressive Generation — One Token at a Time:

INPUT: "The capital of Bangladesh is"
  → tokens: [464, 3797, 286, 12593, 318]

STEP 1: Process all tokens → attention → 
  feed-forward → output vector
  → probability distribution over vocabulary
  
  P(next) = {Dhaka: 0.89, Delhi: 0.03, ...}
  → Pick: "Dhaka" (temperature=0)
  → Append to sequence

STEP 2: Now process [464, 3797, 286, 12593, 318, "Dhaka"]
  → P(next) = {".": 0.7, "is": 0.15, ...}
  → Pick: "."

STEP 3: Process [..., "Dhaka", "."]
  → P(next) = {"<END>": 0.8, "The": 0.1, ...}
  → Pick: "<END>"

OUTPUT: "The capital of Bangladesh is Dhaka."

KEY INSIGHT:
  প্রতিটা token তৈরি করতে গোটা context 
  প্রসেস করতে হয়। ১০০০ token আউটপুট = 
  ১০০০ বার গোটা model forward pass।
  
  → এজন্য generation ধীর (pre-fill থেকে)
  → এজন্য KV cache দরকার (পুরোনো token 
    পুনরায় গোনা এড়াতে)

GENERATION STRATEGIES:

১. GREEDY (temperature=0)
  → সর্বদা সর্বোচ্চ সম্ভাবনার token
  → নির্ভুল কিন্তু পুনরাবৃত্তিমূলক

২. BEAM SEARCH
  → top-B paths একসাথে রাখো
  → সেরা sequence বাছো
  → অনুবাদে ভালো, chat-এ খারাপ

৩. NUCLEUS SAMPLING (top_p)
  → শীর্ষ p% সম্ভাবনা থেকে বাছো
  → স্বাভাবিক, বৈচিত্র্যময়

৪. TEMPERATURE SAMPLING
  → distribution কে চ্যাপটা/তীক্ষ্ণ করো
  → temperature=0 তীক্ষ্ণ, 1+ চ্যাপটা

৫. CONSTRAINED DECODING
  → শুধু নির্দিষ্ট token allow করো
  → JSON schema, grammar constraints
  → Structured output গ্যারান্টি

STOP CONDITIONS:
  • Max tokens reached (e.g., 4096)
  • Stop sequence hit (e.g., "\\n\\n")
  • End-of-text token generated
  → না হলে model অনন্তকাল জেনারেট করবে

STREAMING (SSE):
  প্রতিটা token তৈরি হওয়ামাত্র পাঠাও
  → user দ্রুত দেখে
  → perceived latency কমে
  → ChatGPT, Claude — সব streaming ব্যবহার করে</div>

<div class="dialogue">তাসদির — বাক্য সৃষ্টি। কুরআনে আল্লাহ বলেন — "পবিত্র সেই সত্তা যিনি সৃষ্টি করেছেন প্রতিটি কিছু উত্তমরূপে।" (৩২:৭)। LLM-এর সৃষ্টিও — প্রতিটি টোকেন ধাপে ধাপে। এক সাথে নয়। প্রতিটা ধাপ পূর্বের উপর দাঁড়ায়। এই ধীরগতির সৃষ্টিই ভাষার ভিত্তি।</div>
<div class="dialogue en">"Tasdir — sentence creation. Allah says — 'Blessed is He who created everything in the best form.' (32:7). The LLM's creation too — each token step by step. Not all at once. Each step rests on the previous. This slow creation is the foundation of language."</div>`,
  senior:{
    title:"Generation Latency — কেন ধীর",
    body:`<p><strong>Pre-fill (TTFT):</strong> prompt প্রসেস করা — fast, parallel।</p><p><strong>Decode (TPOT):</strong> প্রতিটা token sequential — slow। ১০০ token/sec ≈ ভালো।</p><p><strong>KV Cache:</strong> পুরোনো token-এর key-value সংরক্ষণ। পুনরায় গোনা এড়ায়।</p><p><strong>Speculative Decoding:</strong> ছোট মডেল দ্রুত draft করে, বড় মডেল verify করে। ২-৩x faster।</p>`
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
<text x="290" y="135" text-anchor="middle" fill="#7dd3fc" font-size="7">prevent</text>
<!-- RIGHT: Defense layers -->
<text x="460" y="42" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">🛡 7-Layer Defense</text>
<rect x="320" y="50" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="65" text-anchor="middle" fill="#4ade80" font-size="7">1. Grounding (RAG) — give source docs</text>
<rect x="320" y="75" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="90" text-anchor="middle" fill="#4ade80" font-size="7">2. Low temperature (0) — deterministic</text>
<rect x="320" y="100" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="115" text-anchor="middle" fill="#4ade80" font-size="7">3. Citation required — claim needs source</text>
<rect x="320" y="125" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="140" text-anchor="middle" fill="#4ade80" font-size="7">4. Chain-of-verification — self-check</text>
<rect x="320" y="150" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="165" text-anchor="middle" fill="#4ade80" font-size="7">5. "Say I don't know" prompting</text>
<rect x="320" y="175" width="240" height="22" rx="4" fill="#1a2744" stroke="#22c55e" stroke-width="1.5"/>
<text x="440" y="190" text-anchor="middle" fill="#4ade80" font-size="7">6. Structured output + confidence field</text>
<rect x="320" y="200" width="240" height="22" rx="4" fill="#0d1526" stroke="#22c55e" stroke-width="2"/>
<text x="440" y="215" text-anchor="middle" fill="#4ade80" font-size="7" font-weight="bold">7. External verification (2nd model/human)</text>
<!-- Bottom truth bar -->
<rect x="20" y="218" width="280" height="22" rx="4" fill="#0d1526" stroke="#a855f7" stroke-width="1.5"/>
<text x="160" y="233" text-anchor="middle" fill="#c084fc" font-size="7">LLM doesn't lie — it guesses. Verify everything.</text>
</svg>
</div>
<div class="svg-caption">হ্যালুসিনেশন — ৫টি কারণ, ৭টি প্রতিরক্ষা স্তর; যাচাই ছাড়া বিশ্বাস নয়</div>

<div class="code-block">Hallucination — Why LLMs Confidently Lie:

WHAT IT IS:
  LLM যখন সত্য নয় এমন তথ্য আত্মবিশ্বাসে বলে।
  
  উদাহরণ:
  "Who wrote 'To Kill a Mockingbird'?"
  → "Harper Lee" ✓ (সঠিক)
  
  "Who wrote 'The Shadow of the Wind'?"
  → "Carlos Ruiz Zafón" ✓ (সঠিক)
  
  "Who wrote 'The Silent Patient'?"  
  → "Alex Michaelides" — wait, is it?
  → LLM হয়তো বলে "Stephen King" (ভুল!)
  → কিন্তু আত্মবিশ্বাসের সাথে!

WHY IT HAPPENS (৫টি কারণ):

১. TRAINING DATA GAP
  যা training-এ ছিল না, সে জানে না।
  কিন্তু "I don't know" না বলে অনুমান করে।
  → RLHF এই আচরণ বাড়ায় (sycophancy)

২. ATTENTION FAILURE
  দীর্ঘ কন্টেক্সটে attention দুর্বল হয়।
  গুরুত্বপূর্ণ তথ্য "lost in the middle"।
  → মডেল ভুল অংশ থেকে উত্তর দেয়

৩. PROBABILITY, NOT KNOWLEDGE
  LLM "জানে" না — সে probability হিসাব করে।
  " সবচেয়ে probable" ≠ "সঠিক"
  → high probability hallucination

৪. SYCOPHANCY (RLHF artifact)
  মডেল ইউজারকে খুশি করতে চায়।
  ইউজার যা বলছে, তার সাথে একমত হয়।
  → "আমি ভালো" → "হ্যাঁ, আপনি খুব ভালো!"

৫. TEMPERATURE EFFECT
  উচ্চ temperature = বেশি randomness
  = বেশি hallucination সুযোগ

PREVENTION — ৭ LAYER DEFENSE:

Layer 1: GROUNDING (RAG)
  মডেলকে উৎস দাও — "শুধু এই ডকুমেন্ট 
  থেকে উত্তর দাও"। RAG = fact-based।

Layer 2: LOW TEMPERATURE
  temperature=0 → deterministic, কম hallucination

Layer 3: CITATION REQUIREMENT
  "প্রতিটা দাবির উৎস দাও" → মডেল উৎস খুঁজে 
  না পেলে দাবি ছাড়ে না

Layer 4: CHAIN-OF-VERIFICATION
  উত্তর দিক → তারপর "উপরের প্রতিটা 
  দাবি verify করো" → self-check

Layer 5: UNCERTAINTY PROMPTING
  "যদি নিশ্চিত না হও, 'আমি জানি না' বলো"
  → explicit uncertainty handling

Layer 6: STRUCTURED OUTPUT
  JSON schema দাও — confidence field সহ
  {answer: "...", confidence: 0.6, 
   source: "doc.pdf, p.3"}

Layer 7: EXTERNAL VERIFICATION
  একটা দ্বিতীয় model বা human reviewer 
  উত্তর যাচাই করে</div>

<div class="dialogue">সত্য ও ভ্রম। কুরআনে আল্লাহ বলেন — "মিথ্যা তো সত্যের বিপরীত।" (১৩:১)। LLM-এর হ্যালুসিনেশন মিথ্যা নয় — ভ্রম। সে ভুল বোঝে, ভুল বলে। কিন্তু ইচ্ছা করে নয়। তবু বিপজ্জনক — কারণ আত্মবিশ্বাসী। সত্য যাচাই করা প্রতিটা মানুষের দায়িত্ব। কুরআন বলে — "যারা সত্য যাচাই করে না, তাদের কথা বিশ্বাস করো না।" (৪৯:৬)। LLM-ও তেমনি — যাচাই ছাড়া বিশ্বাস নয়।</div>
<div class="dialogue en">"Truth and illusion. Allah says — 'Falsehood is the opposite of truth.' (13:1). LLM hallucination isn't lying — it's illusion. It misunderstands, misspeaks. But not intentionally. Still dangerous — because it's confident. Verifying truth is every person's duty. The Quran says — 'Don't believe those who don't verify.' (49:6). The LLM too — no belief without verification."</div>`,
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
<text x="38" y="145" fill="#94a3b8" font-size="7" transform="rotate(-90 38 145)">Loss ↓</text>
<text x="165" y="228" text-anchor="middle" fill="#94a3b8" font-size="7">Compute / Parameters / Data →</text>
<!-- Kaplan curve (dashed, higher) -->
<path d="M 60 90 Q 120 130 200 165 T 275 185" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
<text x="245" y="180" fill="#fcd34d" font-size="7">Kaplan (2020)</text>
<!-- Chinchilla curve (solid, lower - better) -->
<path d="M 60 100 Q 110 145 190 175 T 275 195" fill="none" stroke="#22c55e" stroke-width="2.5"/>
<text x="240" y="200" fill="#4ade80" font-size="7">Chinchilla (2022)</text>
<!-- Data points -->
<circle cx="100" cy="110" r="3" fill="#7dd3fc"/>
<circle cx="150" cy="140" r="3" fill="#7dd3fc"/>
<circle cx="200" cy="165" r="3" fill="#7dd3fc"/>
<text x="100" y="125" text-anchor="middle" fill="#7dd3fc" font-size="6">7B</text>
<text x="150" y="155" text-anchor="middle" fill="#7dd3fc" font-size="6">70B</text>
<text x="205" y="158" text-anchor="middle" fill="#7dd3fc" font-size="6">175B</text>
<!-- Right: Comparison boxes -->
<rect x="320" y="40" width="240" height="60" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="440" y="58" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">Kaplan — wrong ratio</text>
<text x="440" y="73" text-anchor="middle" fill="#94a3b8" font-size="7">GPT-3: 175B params</text>
<text x="440" y="84" text-anchor="middle" fill="#94a3b8" font-size="7">but only 300B tokens</text>
<text x="440" y="95" text-anchor="middle" fill="#94a3b8" font-size="7">→ data-starved</text>
<rect x="320" y="110" width="240" height="60" rx="6" fill="#1a2744" stroke="#22c55e" stroke-width="2"/>
<text x="440" y="128" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">Chinchilla — correct ratio</text>
<text x="440" y="143" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">~20 tokens per parameter</text>
<text x="440" y="154" text-anchor="middle" fill="#94a3b8" font-size="7">70B model → 1.4T tokens</text>
<text x="440" y="165" text-anchor="middle" fill="#94a3b8" font-size="7">7B model → 140B tokens</text>
<!-- Result box -->
<rect x="320" y="180" width="240" height="55" rx="6" fill="#0d1526" stroke="#a855f7" stroke-width="2"/>
<text x="440" y="198" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">Surprising result:</text>
<text x="440" y="212" text-anchor="middle" fill="#7dd3fc" font-size="7">Chinchilla 70B beat</text>
<text x="440" y="223" text-anchor="middle" fill="#7dd3fc" font-size="7">GPT-3 175B — smaller wins!</text>
</svg>
</div>
<div class="svg-caption">Scaling law — বড় মডেল ভালো, কিন্তু অনুপাত ঠিক হতে হবে: প্রতি প্যারামিটারে ~২০ টোকেন</div>

<div class="code-block">Scaling Laws — Bigger is Better (with conditions):

KAPLAN SCALING LAW (2020):
  Loss ∝ N^-0.076 (parameters)
  Loss ∝ D^-0.095 (data)
  Loss ∝ C^-0.050 (compute)
  
  → প্রতিটা ক্ষেত্রে loss কমে, কিন্তু 
    power law-এ।
  → ডাবল কম্পিউট → ৯৩% loss reduction
  → বড় মডেল সবসময় ভালো?

CHINCHILLA LAW (2022, DeepMind):
  Kaplan ভুল ছিল!
  
  সঠিক অনুপাত: 
    প্রতি প্যারামিটারে ~২০ টোকেন ডেটা লাগে।
  
  ৭০B মডেল → ১.৪T টোকেন ডেটা
  ৭B মডেল → ১৪০B টোকেন ডেটা
  
  Chinchilla (৭০B + ১.৪T tokens)
  → GPT-3 (১৭৫B + ৩০০B tokens) কে হারায়!
  → অর্থাৎ ছোট মডেল + বেশি ডেটা > 
    বড় মডেল + কম ডেটা

MODEL FAMILIES (2024-2025 landscape):

  ┌──────────────────────────────────────┐
  │ OPEN WEIGHTS (local, free)           │
  │                                      │
  │ Llama 3.1 (Meta):                    │
  │   8B / 70B / 405B                    │
  │   → best open model, multilingual    │
  │                                      │
  │ Mistral / Mixtral (Mistral AI):      │
  │   7B / 8x7B MoE / 8x22B MoE         │
  │   → efficient, European              │
  │                                      │
  │ Qwen 2.5 (Alibaba):                  │
  │   0.5B / 7B / 72B                    │
  │   → strong multilingual, code        │
  │                                      │
  │ Phi-3 (Microsoft):                   │
  │   3.8B / 7B / 14B                    │
  │   → small but mighty, mobile         │
  └──────────────────────────────────────┘

  ┌──────────────────────────────────────┐
  │ PROPRIETARY (API, paid)              │
  │                                      │
  │ GPT-5 / o4-mini (OpenAI):            │
  │   → multimodal, fastest, large ctx   │
  │   → o-series: reasoning, test-time   │
  │                                      │
  │ Claude Sonnet 4 (Anthropic):         │
  │   → best coding, 200K+ context       │
  │                                      │
  │ Gemini 2.5 Pro (Google):             │
  │   → 1M+ context, multimodal native   │
  └──────────────────────────────────────┘

MOE (Mixture of Experts):
  প্রতিটা token-এ শুধু কয়েকজন "expert" 
  কাজ করে, সব নয়।
  
  Mixtral 8x7B: ৮ experts, প্রতিটা ৭B
  → total ৪৭B কিন্তু প্রতিটা token-এ 
    শুধু ~১৩B active
  → fast + capable

CHOOSE BY NEED:
  প্রোডাকশন chat → GPT-5 বা Claude Sonnet 4
  কোড → Claude Sonnet 4
  হার্ড রিজনিং → o4-mini / o3 (test-time compute)
  বাজেট → Llama 3.1 8B (local/free)
  মোবাইল → Phi-3 mini / Qwen 3 ছোট
  দীর্ঘ ডকুমেন্ট → Gemini 2.5 (1M+ ctx)
  বহুভাষিক → Qwen 2.5 / Llama 3.1</div>

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
<text x="142" y="118" text-anchor="middle" fill="#94a3b8" font-size="6">picks experts</text>
<line x1="85" y1="110" x2="105" y2="110" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM9)"/>
<!-- Experts grid - 8 experts -->
<text x="345" y="45" text-anchor="middle" fill="#94a3b8" font-size="7">8 Expert Networks (e.g., Mixtral 8×7B = 47B total)</text>
<!-- Active experts (highlighted) -->
<rect x="200" y="55" width="60" height="40" rx="5" fill="#1a2744" stroke="#22c55e" stroke-width="2.5"/>
<text x="230" y="72" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">Expert 1</text>
<text x="230" y="85" text-anchor="middle" fill="#4ade80" font-size="6">✓ active</text>
<rect x="270" y="55" width="60" height="40" rx="5" fill="#1e3a5f" stroke="#475569" stroke-width="1" opacity="0.4"/>
<text x="300" y="72" text-anchor="middle" fill="#64748b" font-size="8">Expert 2</text>
<text x="300" y="85" text-anchor="middle" fill="#64748b" font-size="6">asleep</text>
<rect x="340" y="55" width="60" height="40" rx="5" fill="#1a2744" stroke="#22c55e" stroke-width="2.5"/>
<text x="370" y="72" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">Expert 3</text>
<text x="370" y="85" text-anchor="middle" fill="#4ade80" font-size="6">✓ active</text>
<rect x="410" y="55" width="60" height="40" rx="5" fill="#1e3a5f" stroke="#475569" stroke-width="1" opacity="0.4"/>
<text x="440" y="72" text-anchor="middle" fill="#64748b" font-size="8">Expert 4</text>
<text x="440" y="85" text-anchor="middle" fill="#64748b" font-size="6">asleep</text>
<!-- Row 2 -->
<rect x="200" y="105" width="60" height="40" rx="5" fill="#1e3a5f" stroke="#475569" stroke-width="1" opacity="0.4"/>
<text x="230" y="122" text-anchor="middle" fill="#64748b" font-size="8">Expert 5</text>
<text x="230" y="135" text-anchor="middle" fill="#64748b" font-size="6">asleep</text>
<rect x="270" y="105" width="60" height="40" rx="5" fill="#1a2744" stroke="#22c55e" stroke-width="2.5"/>
<text x="300" y="122" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">Expert 6</text>
<text x="300" y="135" text-anchor="middle" fill="#4ade80" font-size="6">✓ active</text>
<rect x="340" y="105" width="60" height="40" rx="5" fill="#1e3a5f" stroke="#475569" stroke-width="1" opacity="0.4"/>
<text x="370" y="122" text-anchor="middle" fill="#64748b" font-size="8">Expert 7</text>
<text x="370" y="135" text-anchor="middle" fill="#64748b" font-size="6">asleep</text>
<rect x="410" y="105" width="60" height="40" rx="5" fill="#1e3a5f" stroke="#475569" stroke-width="1" opacity="0.4"/>
<text x="440" y="122" text-anchor="middle" fill="#64748b" font-size="8">Expert 8</text>
<text x="440" y="135" text-anchor="middle" fill="#64748b" font-size="6">asleep</text>
<!-- Router arrows -->
<line x1="175" y1="105" x2="195" y2="75" stroke="#fbbf24" stroke-width="1.5" opacity="0.8"/>
<line x1="175" y1="110" x2="335" y2="75" stroke="#fbbf24" stroke-width="1.5" opacity="0.8"/>
<line x1="175" y1="115" x2="295" y2="105" stroke="#fbbf24" stroke-width="1.5" opacity="0.8"/>
<!-- Output merge -->
<rect x="490" y="85" width="70" height="40" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="525" y="102" text-anchor="middle" fill="#7dd3fc" font-size="8">Merge</text>
<text x="525" y="115" text-anchor="middle" fill="#94a3b8" font-size="6">weighted sum</text>
<!-- Bottom comparison -->
<rect x="20" y="165" width="540" height="70" rx="8" fill="#0d1526" stroke="#a855f7" stroke-width="1"/>
<text x="290" y="183" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="bold">Why MoE? — Emergent Abilities at Scale</text>
<rect x="40" y="192" width="150" height="35" rx="5" fill="#1a2744" stroke="#fbbf24" stroke-width="1.5"/>
<text x="115" y="206" text-anchor="middle" fill="#fcd34d" font-size="7">Dense model: 70B</text>
<text x="115" y="218" text-anchor="middle" fill="#94a3b8" font-size="7">all 70B active → slow</text>
<text x="290" y="213" text-anchor="middle" fill="#7dd3fc" font-size="10">vs</text>
<rect x="330" y="192" width="210" height="35" rx="5" fill="#1a2744" stroke="#22c55e" stroke-width="2"/>
<text x="435" y="206" text-anchor="middle" fill="#4ade80" font-size="7">MoE: 47B total, 13B active</text>
<text x="435" y="218" text-anchor="middle" fill="#4ade80" font-size="7" font-weight="bold">→ same quality, 5× faster</text>
</svg>
</div>
<div class="svg-caption">Mixture of Experts — শুধু প্রয়োজনীয় বিশেষজ্ঞ কাজ করে; বড় মডেলের ক্ষমতা, ছোট মডেলের গতি</div>

<div class="code-block">Mixture of Experts (MoE) &amp; Multimodality:

MIXTURE OF EXPERTS:

  সাধারণ Transformer:
    প্রতিটা token → সব প্যারামিটার প্রসেস করে
    → বড় মডেল = ধীর
    
  MoE Transformer:
    প্রতিটা token → router ঠিক করে কোন 
    "expert" কাজ করবে
    → শুধু ২-৮টা expert active
    → বাকি ঘুমায়

  Mixtral 8x7B:
    Total: ৪৭B প্যারামিটার
    Active per token: ~১৩B
    → GPT-3.5 লেভেল পারফরম্যান্স
    → কিন্তু ১৩B গতির!
  
  GPT-4 (আনুমানিক):
    → ৮ বা ১৬ experts এর MoE
    → ১.৭T total, ~২৮০B active
    → multimodal (vision + text)

  সুবিধা: বড় মডেলের ক্ষমতা, ছোট মডেলের গতি
  অসুবিধা: মেমরি (সব expert রাখতে হয়)

MULTIMODALITY — শুধু টেক্সট নয়:

  Text-only (GPT-3):
    input: "একটা বিড়ালের ছবি দেখো"
    → দেখতে পায় না। শুধু টেক্সট।
  
  Vision-Language (GPT-4V era → GPT-5, Claude Sonnet 4):
    input: [image bytes] + "এই ছবিতে কী?"
    → ছবি বোঝে! টেক্সট ও ছবি একসাথে।
    
  Multimodal Pipeline:
    Image → Vision Encoder → embedding
    Text → Tokenizer → embedding  
    → দুটো embedding একসাথে → Transformer
    
  Modalities:
    Text: tokenizer + text embedding
    Image: patch embedding (ViT)  
    Audio: spectrogram → embedding (Whisper)
    Video: frame-by-frame + temporal

  GPT-5: text + image + audio (native)
  Gemini 2.5: text + image + audio + video
  Claude Sonnet 4: text + image (audio via app, not API)

  ব্যবহার:
    • Image analysis: "এই X-ray-এ কী দেখো?"
    • Document understanding: scanned PDF
    • UI testing: "এই screenshot-এ button কোথায়?"
    • Code from screenshot: "এই design থেকে code"

FUTURE DIRECTIONS:
  • Native audio output (real-time voice)
  • Video understanding (long video)
  • 3D scene understanding
  • Embodied AI (robotics + multimodal)</div>

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


<div class="code-block">The Complete LLM Pipeline — One Unified View:

INPUT: "What is the capital of France?"

  ┌─────────────────────────────────────┐
  │ ১. TOKENIZER                        │
  │ "What is the capital of France?"    │
  │ → [What, is, the, capital, ...]     │
  │ → [২৪४০, ৩১৮, ২৬২, ৪৯৪৫, ...]      │
  │                                     │
  │ ২. EMBEDDING                        │
  │ প্রতিটি token ID → ৪০৯৬-dim vector │
  │ + positional encoding               │
  │                                     │
  │ ৩. ATTENTION (x৯৬ layers)          │
  │ প্রতিটি শব্দ বাকি সবের দিকে তাকায়  │
  │ "capital" → "France"-এ attention    │
  │ Multi-head: ৯৬টা আলাদা দৃষ্টিভঙ্গি  │
  │                                     │
  │ ৪. FEED-FORWARD                     │
  │ Attention-এর ফল → জ্ঞান প্রক্রিয়া  │
  │ "France" + "capital" → "Paris"?     │
  │ (training-এ শেখা সংযোগ)            │
  │                                     │
  │ ৫. OUTPUT                           │
  │ চূড়ান্ত vector → vocabulary সম্ভাবনা│
  │ P("Paris") = ০.৯৯                   │
  │ → Pick "Paris" (temperature=0)      │
  │                                     │
  │ ৬. REPEAT                           │
  │ Append "Paris" → repeat for "."     │
  │ → Repeat for "<END>"                │
  └─────────────────────────────────────┘

OUTPUT: "Paris."

HOW TRAINING MADE THIS POSSIBLE:
  Pre-training: "The capital of France 
    is ___" → "Paris" (million times)
  SFT: Human-like Q&A format
  RLHF: Helpful, concise answer preferred

WHY THIS MATTERS:
  এখন তুমি জানো —
  • কেন LLM কিছু জানে, কিছু জানে না (data)
  • কেন কিছু ভাষায় ভালো (tokenization)
  • কেন হ্যালুসিনেট করে (probability, not knowledge)
  • কেন temperature পরিবর্তন করলে ফল বদলায়
  • কেন context window সীমিত (attention cost)
  • কেন বড় মডেল ভালো (scaling laws)
  • কেন কিছু মডেল ধীর (autoregressive + params)
  • কীভাবে multimodal কাজ করে (cross-embedding)

  → তুমি LLM ব্যবহারকারী নও — 
    তুমি LLM ইঞ্জিনিয়ার।</div>

<div class="verse">"তিনি শিখিয়েছেন কলমের মাধ্যমে। শিখিয়েছেন মানুষকে যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>LLM হলো আধুনিক কলম — স্বয়ংক্রিয়, বিশাল, কিন্তু নিয়ন্ত্রিত। যে এটাকে বোঝে, সে জ্ঞান তৈরি করতে পারে। যে বোঝে না, সে কেবল গ্রাহক। তুমি এখন বোঝো — টোকেন থেকে অর্থ, অর্থ থেকে ভাষা, ভাষা থেকে উত্তর। এটাই LLM দর্শন।</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrLLM10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22d3ee"/></marker></defs>
<rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="12"/>
<text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">The Complete LLM Pipeline — One Unified View</text>
<!-- Stage 1: Tokenizer -->
<rect x="15" y="100" width="80" height="55" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="55" y="120" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="bold">১. Tokenizer</text>
<text x="55" y="134" text-anchor="middle" fill="#94a3b8" font-size="6">text → token IDs</text>
<text x="55" y="145" text-anchor="middle" fill="#94a3b8" font-size="6">[2440, 318, ...]</text>
<!-- Stage 2: Embedding -->
<rect x="120" y="100" width="80" height="55" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="160" y="120" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="bold">২. Embedding</text>
<text x="160" y="134" text-anchor="middle" fill="#94a3b8" font-size="6">ID → 4096-dim</text>
<text x="160" y="145" text-anchor="middle" fill="#94a3b8" font-size="6">+ position</text>
<!-- Stage 3: Attention layers -->
<rect x="225" y="80" width="90" height="95" rx="6" fill="#1a2744" stroke="#fbbf24" stroke-width="2"/>
<text x="270" y="98" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">৩. Attention</text>
<text x="270" y="112" text-anchor="middle" fill="#94a3b8" font-size="6">× 96 layers</text>
<rect x="235" y="120" width="70" height="12" rx="3" fill="#1e3a5f" stroke="#475569" stroke-width="1"/>
<text x="270" y="129" text-anchor="middle" fill="#7dd3fc" font-size="5">multi-head</text>
<rect x="235" y="136" width="70" height="12" rx="3" fill="#1e3a5f" stroke="#475569" stroke-width="1"/>
<text x="270" y="145" text-anchor="middle" fill="#7dd3fc" font-size="5">+ feed-forward</text>
<rect x="235" y="152" width="70" height="12" rx="3" fill="#1e3a5f" stroke="#475569" stroke-width="1"/>
<text x="270" y="161" text-anchor="middle" fill="#7dd3fc" font-size="5">repeat × N</text>
<!-- Stage 4: Output projection -->
<rect x="345" y="100" width="80" height="55" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
<text x="385" y="120" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="bold">৪. Output</text>
<text x="385" y="134" text-anchor="middle" fill="#94a3b8" font-size="6">vector → vocab</text>
<text x="385" y="145" text-anchor="middle" fill="#94a3b8" font-size="6">P(Paris)=0.99</text>
<!-- Stage 5: Next token -->
<rect x="450" y="100" width="80" height="55" rx="6" fill="#1a2744" stroke="#22c55e" stroke-width="2.5"/>
<text x="490" y="120" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">৫. Next token</text>
<text x="490" y="134" text-anchor="middle" fill="#4ade80" font-size="6">"Paris"</text>
<text x="490" y="145" text-anchor="middle" fill="#94a3b8" font-size="6">↻ repeat</text>
<!-- Arrows -->
<line x1="95" y1="127" x2="113" y2="127" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM10)"/>
<line x1="200" y1="127" x2="218" y2="127" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM10)"/>
<line x1="315" y1="127" x2="338" y2="127" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM10)"/>
<line x1="425" y1="127" x2="443" y2="127" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrLLM10)"/>
<!-- Loop back arrow -->
<path d="M 490 155 Q 490 210 270 210 Q 55 210 55 160" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrLLM10)"/>
<text x="270" y="225" text-anchor="middle" fill="#4ade80" font-size="6">autoregressive — append &amp; repeat</text>
</svg>
</div>
<div class="svg-caption">সম্পূর্ণ LLM পাইপলাইন: টোকেন → embedding → ৯৬টি attention স্তর → আউটপুট সম্ভাবনা → পরবর্তী টোকেন, বারবার। নয়টি কক্ষের সারমর্ম এক ছবিতে।</div>

<div class="secret-box"><div class="label">দশম কক্ষ — সমন্বয়</div><div class="text">🔮 LLM = টোকেন + embedding + attention + training + generation। বুঝো, নিয়ন্ত্রণ করো।<br><small>শুধু ব্যবহারকারী নও — ইঞ্জিনিয়ার। এটাই LLM দর্শন।</small></div></div>`
});
