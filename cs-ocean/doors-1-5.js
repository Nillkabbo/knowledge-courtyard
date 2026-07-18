// ════════════════════════════════════════
// কম্পিউটার সায়েন্সের মহাসমুদ্র — DOORS 1-5
// Sea 1: AI/ML (D1-D4) · Sea 2 start: Systems (D5)
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: NLP & LARGE LANGUAGE MODELS ══
doors.push({
  num:1, icon:"🧠", color:"#38bdf8", name:"ভাষার সমুদ্র",
  subtitle:"The Sea of Language", tech:"NLP & Large Language Models",
  spirit:"হিকমাহ — প্রজ্ঞা, গভীর জ্ঞান",
  secret:"NLP/LLM হলো AI-এর সবচেয়ে বড় উপ-ক্ষেত্র — transformers, translation, code gen, reasoning। সবচেয়ে বেশি ফান্ডিং (NSF AI $২B+), সবচেয়ে বেশি প্রতিযোগিতা (১-৩% গ্রহণ)। hype-এর surface-এ থেকো না — foundation, reasoning, interpretability-তে গভীরে যাও।",
  recall:{
    q:"আলেকজান্ডার কেন বললেন ভাসমান ডুবুরি মুক্তা পায় না, গভীর ডুবুরি পায়?",
    qen:"Why did Alexander say floating divers get no pearls, only deep divers do?",
    a:"কারণ surface-এ ভাসলে prompt-engineering, chatbot, wrapper app — সবাই করে, প্রতিযোগিতা বিশাল, মূল্য কম। গভীরে গেলে — transformer এর গণিত, attention mechanism, training dynamics, alignment — কম মানুষ যায়, মূল্য বিশাল (NeurIPS পেপার = মুক্তা)। hype শেষ হলে surface-এর মানুষ ভেসে যায়, গভীরের মানুষ থেকে যায়।",
    aen:"Because on the surface — prompt-engineering, chatbots, wrapper apps — everyone does it, competition is huge, value is low. Going deep — transformer math, attention, training dynamics, alignment — few go, value is huge (a NeurIPS paper = a pearl). When hype ends, surface people drift away, deep people stay."
  },
  story:`
<p class="scene-setting">প্রথম দরজা। তুমি একটা বিশাল সমুদ্রের কিনারায় — জল গাঢ় নীল, ঢেউ উঁচু। কিনারে বসে আছেন আলেকজান্ডার, বয়স্ক ডাইভার, চামড়ার পোশাক, হাতে একটা মুক্তা। তাঁর পাশে দাঁড়িয়ে একজন তরুণী — ইভা, ভাষাবিদ, চোখে সমুদ্রের মতো গভীর নীল, হাতে একটা খোলা বই যার পাতাগুলো ঢেউয়ের মতো ওঠানামা করছে। লবণাক্ত বাতাস, ভেজা বালির গন্ধ, দূরে ডুবুরিদের স্নর্কেলের শব্দ।</p>
<p class="scene-setting en">The first door. You stand at the edge of a vast sea — deep blue water, high waves. At the shore sits Alexander, an elderly diver in leathers, a pearl in hand. Beside him stands a young woman — Eva, a linguist, eyes as deep blue as the sea, holding an open book whose pages ripple like waves. Salty air, the smell of wet sand, the distant hiss of divers' snorkels.</p>

<div class="dialogue">আলেকজান্ডার তোমাকে দেখলেন। "এটা AI-এর সমুদ্র — সবচেয়ে বড়, সবচেয়ে গভীর, সবচেয়ে ধনী। কিন্তু সবচেয়ে বিপজ্জনক।" তিনি ইভার দিকে ইঙ্গিত করলেন। "ইভা এই সমুদ্রের প্রথম উপ-সমুদ্রের রক্ষক — ভাষার সমুদ্র। NLP আর LLM। সবচেয়ে গভীর জল, সবচেয়ে বেশি মুক্তা — কিন্তু সবচেয়ে ভিড়।" ইভা হাসলেন, বইটা বন্ধ করলেন। "শুরু করা যাক।"</div>
<div class="dialogue en">Alexander saw you. "This is the sea of AI — the largest, deepest, richest. But the most dangerous." He gestured to Eva. "Eva is the keeper of this sea's first sub-sea — the sea of language. NLP and LLMs. The deepest water, the most pearls — but the most crowded." Eva smiled, closed her book. "Let's begin."</div>

<div class="diagram">
  <div class="diag-title">Transformer এর প্রবাহ — Token থেকে অর্থ পর্যন্ত</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowCyan1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#3dd6c4"/></marker>
      <marker id="arrowAmber1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#7dd3fc"/></marker>
    </defs>
    <text class="lbl-sm" x="70"  y="22" fill="#7dd3fc">ইনপুট</text>
    <text class="lbl-sm" x="240" y="22" fill="#7dd3fc">এমবেডিং</text>
    <text class="lbl-sm" x="420" y="22" fill="#7dd3fc">আউটপুট</text>
    ${['বা', 'ম', 'ঘ', 'র'].map((t,i)=>`<rect class="cell" x="${30+i*45}" y="${40}" width="38" height="30" rx="4"/><text class="lbl" x="${49+i*45}" y="${56}">${t}</text>`).join('')}
    ${[0,1,2,3].map(i=>`<line class="edge-cyan" x1="${68+i*45}" y1="${70}" x2="${120}" y2="${108}" marker-end="url(#arrowCyan1)"/>`).join('')}
    <rect class="cell-cyan" x="100" y="95" width="280" height="50" rx="8"/>
    <text class="lbl-sm" x="240" y="114" fill="#3dd6c4">Attention × N layers</text>
    <text class="lbl-sm" x="240" y="131" fill="#9290a8">প্রতিটা token অন্য সব token-কে দেখে</text>
    ${[0,1,2].map(i=>`<line class="edge-amber" x1="${240}" y1="${145}" x2="${120+i*120}" y2="${183}" marker-end="url(#arrowAmber1)"/>`).join('')}
    ${['ভালো','বৃষ্টি','আসছে'].map((t,i)=>`<rect class="cell-good" x="${95+i*120}" y="${178}" width="60" height="30" rx="4"/><text class="lbl" x="${125+i*120}" y="${194}">${t}</text>`).join('')}
    <text class="lbl-sm" x="240" y="222" fill="#5e5c74">"বামঘর" → "ভালো বৃষ্টি আসছে" (next-token prediction)</text>
  </svg>
  <div class="diag-cap">LLM = token-এর সম্ভাবনা ভবিষ্যৎবাণী, বারবার। Attention হলো সেই যাদু যে প্রতিটা শব্দকে অন্য সব শব্দের প্রেক্ষাপটে দেখায়।</div>
</div>

<div class="code-block">NLP/LLM — গবেষণার শাখাসমূহ:

১. CORE LLM RESEARCH
   - Pretraining: next-token prediction, scaling laws (Chinchilla, compute-optimal)
   - Architecture: attention variants, MoE (Mistral, DeepSeek), linear attention
   - Reasoning: chain-of-thought, o1/o3-style test-time compute, self-play

২. ALIGNMENT & POST-TRAINING (🔥 সবচেয়ে হট)
   - RLHF/RLAIF, DPO, GRPO (DeepSeek-R1, ২০২৪-২৫)
   - Constitutional AI, harmlessness, honesty
   - Reward modeling, preference learning

৩. EFFICIENCY & SYSTEMS (MLSys এর সাথে মিল — Door 7)
   - KV cache, PagedAttention, speculative decoding
   - Quantization, distillation, mixture-of-depths

৪. RETRIEVAL & AGENTS (Book 10-12 এর সাথে সংযোগ)
   - RAG, agentic LLMs, tool use, MCP
   - Long context, in-context learning

৫. EVALUATION & INTERPRETABILITY
   - Benchmarks (MMLU, GPQA, SWE-bench), contamination
   - Mechanistic interp: circuits, sparse autoencoders (Anthropic)</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🔥 LLM Core</td><td>Scaling, architecture, reasoning, test-time compute</td><td>NeurIPS, ICML, ICLR</td></tr>
<tr><td class="hl">🔥 Alignment</td><td>RLHF, DPO, GRPO, constitutional AI</td><td>NeurIPS, ICML, COLM</td></tr>
<tr><td class="hl">🟢 MT &amp; NLU</td><td>Translation, parsing, semantic role labeling</td><td>ACL, EMNLP, NAACL</td></tr>
<tr><td class="hl">🟢 Generation</td><td>Summarization, dialog, creative writing</td><td>ACL, EMNLP, INLG</td></tr>
<tr><td class="hl">🔵 Low-resource</td><td>Bengali/under-served langs, cross-lingual transfer</td><td>ACL, EMNLP, WMT</td></tr>
<tr><td class="hl">🔵 Interp</td><td>Circuits, probing, sparse autoencoders</td><td>NeurIPS, ICLR, BlackboxNLP</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১-৩%</div><div class="sc-label">গ্রহণের হার (top PhD)</div></div>
<div class="stat-card"><div class="sc-num">৩০০-৫০০</div><div class="sc-label">প্রতি আসনে আবেদন</div></div>
<div class="stat-card"><div class="sc-num">$২B+</div><div class="sc-label">বার্ষিক NSF AI ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$২৫০-৪৫০K</div><div class="sc-label">industry research বেতন</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"LLM গবেষণা মানে ChatGPT wrapper বানানো বা prompt লেখা।" ভুল। সেটা engineering, research নয়। LLM research মানে — মডেলের ভেতরে কী চলছে তা বোঝা, নতুন architecture বা training method আবিষ্কার করা, alignment-এর গণিত সমাধান করা। wrapper বানালে তুমি consumer, গবেষক নও।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"LLM research হলো বুদ্ধিমত্তার প্রক্রিয়া বোঝা — attention কীভাবে কাজ করে, কেন scaling কাজ করে, reasoning কীভাবে উদ্ভব হয়। এটা হিকমাহ — গভীর জ্ঞান। যে এখানে যায়, সে টিকে — কারণ hype শেষ হলেও ভাষা আর বুদ্ধি চিরকাল থাকে।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> reasoning models (OpenAI o1/o3, DeepSeek-R1 — RL দিয়ে test-time compute), GRPO (শস্তা alignment), MoE (DeepSeek-V3: ৬৭১B params, ৩৭B active), sparse autoencoders দিয়ে interpretability, long-context (১M+ tokens)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ linear algebra, probability, optimization ভালোবাসো · ✅ ভাষা ও অর্থ নিয়ে ভাবতে ভালো লাগে · ✅ তীব্র প্রতিযোগিতা সয় · ⚠️ প্রকাশনা না থাকলে top-20 প্রোগ্রামে কঠিন · ❌ শুধু wrapper/প্রম্পট দিয়ে থাকতে চাইলে গবেষণা নয়, engineering করো।</div></div>

<div class="dialogue">"একটা কথা মনে রেখো," ইভা বললেন। "এই সমুদ্রে সবাই ডুব দিচ্ছে — কারণ AI এখন hype। কিন্তু hype একদিন থামবে। যারা গভীরে যায় — foundation model theory, alignment গণিত, reasoning mechanism — তারাই টিকবে। যারা surface-এ ভাসে — wrapper app, prompt — তারা ভেসে যাবে। আলেকজান্ডারের মুক্তা শুধু তারাই পায় যারা গভীরে যায়।"</div>
<div class="dialogue en">"Remember one thing," Eva said. "Everyone dives here — because AI is hype now. But hype will end. Those who go deep — foundation theory, alignment math, reasoning mechanism — they survive. Those who float on surface — wrapper apps, prompts — they drift away. Alexander's pearls come only to those who go deep."</div>

<div class="dialogue">হিকমাহ — প্রজ্ঞা, গভীর জ্ঞান। কুরআনে আল্লাহ বলেন: "যাকে হিকমাহ দেওয়া হয়েছে, সে অনেক কল্যাণ পেয়েছে।" (২:২৬৯)। NLP গবেষণা হলো হিকমাহ — ভাষার গভীরে যাওয়া, অর্থের গঠন বোঝা, বুদ্ধিমত্তার প্রক্রিয়া আবিষ্কার করা। শুধু টুল ব্যবহার নয় — বুঝতে হয় কীভাবে কাজ করে, কেন কাজ করে, কখন ভাঙে। AI-এর হিকমাহ হলো foundation, theory, first principles। যে এই হিকমাহ চায়, সে ভাষার সমুদ্রে গভীরে যেতে পারে।</div>
<div class="dialogue en">Hikmah — wisdom, deep knowledge. Allah says: "Whoever is given hikmah, has been given much good." (2:269). NLP research is hikmah — going into the depths of language, understanding meaning's structure, discovering intelligence's process. Not just using tools — understanding how they work, why, when they break. AI's hikmah is foundation, theory, first principles. One who seeks this hikmah, can go deep into the sea of language.</div>

<div class="secret-box">🧠 NLP/LLM: AI-এর সবচেয়ে বড় সমুদ্র। সবচেয়ে বেশি ফান্ডিং ($২B+), সবচেয়ে বেশি প্রতিযোগিতা (১-৩%)। হট: alignment (GRPO/DPO), reasoning (test-time compute), interp। surface (wrapper/prompt) নয় — foundation-এ গভীরে যাও।</div>`,
  senior:{
    title:"NLP PhD-তে টিকতে — Senior Path",
    body:`<p><strong>প্রকাশনা > coursework:</strong> top-20 NLP PhD-তে ভর্তির সবচেয়ে বড় সংকেত হলো প্রকাশনা। একটা ACL/EMNLP/NAACL workshop paper (findings-ও চলে) একটা সাধারণ GPA-কে ছাড়িয়ে যায়। শুরু করো একজন প্রফেসরের প্রজেক্টে volunteer হিসেবে।</p><p><strong>Niche বেছে নাও আগে:</strong> "LLM" বিশাল — alignment? efficiency? low-resource Bengali? reasoning? একটা sub-area-তে depth দেখাও, surface-এ ছড়িয়ে পড়ো না। Bengali NLP (তোমার ভাষা) একটা শক্তিশালী হাতিয়ার — কম প্রতিযোগী, বাস্তব প্রভাব।</p><p><strong>Math শক্ত করো:</strong> linear algebra (SVD, eigenvectors), probability (Bayes, distributions), optimization (gradient descent variants)। transformer কেন কাজ করে — সেটা গণিত ছাড়া বোঝা যায় না।</p><p><strong>Reproducibility:</strong> একটা recent paper re-implement করো GitHub-এ। এটা দেখায় তুমি research-grade code লিখতে পারো — প্রফেসররা এটা খুঁজেন।</p>`
  }
});

// ══ DOOR 2: COMPUTER VISION ══
doors.push({
  num:2, icon:"👁️", color:"#38bdf8", name:"দৃষ্টির সমুদ্র",
  subtitle:"The Sea of Vision", tech:"Computer Vision",
  spirit:"বসর — তীক্ষ্ণ দৃষ্টি, গভীরে দেখা",
  secret:"Vision — image/video understanding, generation, medical, driving। ViT/CLIP যুগে এসেছে; diffusion দিয়ে generation বিস্ফোরণ। AI-এর দ্বিতীয় বৃহত্তম উপ-ক্ষেত্র। ১-৩% গ্রহণ, কিন্তু NLP-এর চেয়ে কিছুটা কম ভিড় — বিশেষ করে medical/3D/video যেখানে depth আছে।",
  recall:{
    q:"ইউকি কেন বললেন ছবি দেখা আর বোঝা এক জিনিস নয়?",
    qen:"Why did Yuki say seeing an image and understanding it aren't the same thing?",
    a:"কারণ একটা ক্যামেরা দেখে (pixel ক্যাপচার করে), কিন্তু বোঝে না। একটা শিশু দেখে আর বোঝে — 'এটা বিড়াল, ওটা গাড়ি'। Vision গবেষণা হলো সেই বোঝাপড়া মেশিনকে শেখানো — pixel থেকে অর্থ বের করা। দেখা সহজ, বোঝা কঠিন। segmentation, depth, 3D structure — এগুলো আসল challenge।",
    aen:"Because a camera sees (captures pixels) but doesn't understand. A child sees and understands — 'that's a cat, that's a car'. Vision research is teaching machines that understanding — extracting meaning from pixels. Seeing is easy, understanding is hard. Segmentation, depth, 3D structure — these are the real challenges."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দরজা। ইভার ভাষার সমুদ্র পেরিয়ে তুমি একটা আলোয় ভরা গ্যালারিতে — দেয়ালে সারি সারি ছবি, প্রতিটা জ্বলজ্বলে। কিন্তু ছবিগুলো অদ্ভুত — কোনোটা তীক্ষ্ণ, কোনোটা ঝাপসা, কোনোটা এক ঝলকে বদলে যায়। গ্যালারির মাঝখানে দাঁড়িয়ে ইউকি — কার্লি চুল, কাঁধে একটা ক্যামেরা, হাতে একটা লুপ (magnifier), চোখে শিল্পীর তীক্ষ্ণতা। তাঁর পাশে আলেকজান্ডার হাসছেন। পেইন্টের গন্ধ, ক্যামেরার ক্লিক শব্দ, আলোর ঝলক।</p>
<p class="scene-setting en">The second door. Past Eva's sea of language, you enter a gallery full of light — walls lined with images, each glowing. But the images are strange — some sharp, some blurred, some shifting in a glance. In the center stands Yuki — curly hair, a camera on her shoulder, a loupe (magnifier) in hand, an artist's sharpness in her eyes. Beside her, Alexander smiles. Smell of paint, the click of a camera, flashes of light.</p>

<div class="dialogue">আলেকজান্ডার বললেন, "ইভা তোমাকে ভাষা দেখালেন — শব্দ। এবার ইউকি দেখাবে চোখ — ছবি। Vision, AI-এর দ্বিতীয় বৃহত্তম সমুদ্র।" ইউকি লুপটা তুলে একটা ছবি দেখালেন — একটা ঝাপসা বিড়াল। "এই ছবিটা একটা ক্যামেরা নিয়েছে। কিন্তু কী বুঝেছে? কিছুই না। শুধু pixel।" তারপর একটা তীক্ষ্ণ ছবি দেখালেন — একই বিড়াল, কিন্তু এবার চারপাশে লেবেল: 'বিড়াল', 'লাল মাদু', 'জানালায় বসে'। "এটা বোঝাপড়া। Vision গবেষণা হলো এই বোঝাপড়া মেশিনকে শেখানো।"</div>
<div class="dialogue en">Alexander said, "Eva showed you language — words. Now Yuki will show you eyes — images. Vision, AI's second-largest sea." Yuki raised her loupe, showed a blurry cat. "A camera took this. But what does it understand? Nothing. Just pixels." Then she showed a sharp image — the same cat, but now labeled: 'cat', 'red tabby', 'sitting at a window'. "This is understanding. Vision research is teaching this understanding to machines."</div>

<div class="diagram">
  <div class="diag-title">Vision Pipeline — Pixel থেকে বোঝাপড়া</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowTeal2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#3dd6c4"/></marker>
    </defs>
    <text class="lbl-sm" x="70"  y="22" fill="#7dd3fc">RAW IMAGE</text>
    <text class="lbl-sm" x="230" y="22" fill="#7dd3fc">PATCH + EMBED</text>
    <text class="lbl-sm" x="430" y="22" fill="#7dd3fc">TASKS</text>
    ${[0,1,2].map(r=>[0,1,2,3,4].map(c=>`<rect class="cell" x="${35+c*16}" y="${45+r*16}" width="13" height="13" rx="2"/>`).join('')).join('')}
    <text class="lbl-sm" x="75" y="120" fill="#5e5c74">224×224 pixel</text>
    ${[0,1,2].map(i=>`<line class="edge-cyan" x1="${135}" y1="${70+i*16}" x2="${195}" y2="${75}" marker-end="url(#arrowTeal2)"/>`).join('')}
    ${[0,1,2,3,4].map(i=>`<rect class="cell-cyan" x="${190+i*26}" y="${62}" width="20" height="26" rx="3"/><text class="lbl-sm" x="${200+i*26}" y="${100}" style="font-size:8px">p${i+1}</text>`).join('')}
    <text class="lbl-sm" x="240" y="120" fill="#5e5c74">ViT patches → tokens</text>
    ${[0,1,2,3].map(i=>`<line class="edge-cyan" x1="${245}" y1="${95}" x2="${360+i*5}" y2="${55+i*30}" marker-end="url(#arrowTeal2)"/>`).join('')}
    <text class="lbl-sm" x="440" y="40" fill="#52c41a">classification</text>
    <rect class="cell-good" x="400" y="48" width="90" height="20" rx="4"/><text class="lbl-sm" x="445" y="62">"এটা বিড়াল"</text>
    <text class="lbl-sm" x="440" y="90" fill="#ff6b35">segmentation</text>
    <rect class="cell-hot" x="400" y="98" width="90" height="20" rx="4"/><text class="lbl-sm" x="445" y="112">প্রতিটা pixel লেবেল</text>
    <text class="lbl-sm" x="440" y="140" fill="#b37feb">generation</text>
    <rect class="cell-purple" x="400" y="148" width="90" height="20" rx="4"/><text class="lbl-sm" x="445" y="162">নতুন ছবি (diffusion)</text>
    <text class="lbl-sm" x="440" y="190" fill="#5b9eff">3D / depth</text>
    <rect class="cell-moon" x="400" y="170" width="90" height="20" rx="4" style="display:none"/>
    <text class="lbl-sm" x="240" y="200" fill="#5e5c74">একই backbone — ভিন্ন head, ভিন্ন task</text>
  </svg>
  <div class="diag-cap">আজকের vision: একটা backbone (ViT/CLIP) pixel থেকে rich feature বের করে, তার উপর ভিন্ন task-এর head বসে। Foundation model paradigm।</div>
</div>

<div class="code-block">Vision — গবেষণার শাখাসমূহ:

১. RECOGNITION (classic, এখনো active)
   - Classification, detection (YOLO, DETR), segmentation (SAM/SAM2)
   - Video understanding, action recognition, tracking

২. GENERATION (🔥 সবচেয়ে বড় বিস্ফোরণ)
   - Diffusion (Stable Diffusion, DALL-E, Midjourney, Flux)
   - Video gen (Sora, Veo, Kling — ২০২৪-২৫)
   - 3D gen (NeRF, Gaussian Splatting, 3D-aware diffusion)

৩. FOUNDATION MODELS
   - ViT (Vision Transformer), CLIP (image+text), DINOv2 (self-supervised)
   - VLMs (Vision-Language: GPT-4V, Gemini — Door 15 Book 15)

৪. 3D & GEOMETRY (গভীর, কম ভিড়)
   - SLAM, multi-view stereo, neural rendering, depth estimation
   - Autonomous driving perception (Door 19 এর সাথে সংযোগ)

৫. DOMAIN-SPECIFIC (উচ্চ প্রভাব, স্থিতিশীল ফান্ডিং)
   - Medical imaging (radiology, pathology — MICCAI)
   - Remote sensing, document AI, OCR
   - Embodied vision (robotics, Book 19)

৬. EFFICIENCY
   - Edge vision, model compression, real-time inference</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🔥 Generation</td><td>Diffusion, video, 3D gen, editing</td><td>CVPR, ICCV, NeurIPS, SIGGRAPH</td></tr>
<tr><td class="hl">🔥 Foundation</td><td>ViT, CLIP, DINOv2, VLMs, self-supervised</td><td>CVPR, ICCV, ICLR</td></tr>
<tr><td class="hl">🟢 Recognition</td><td>Detection, segmentation (SAM2), video</td><td>CVPR, ECCV, ICCV</td></tr>
<tr><td class="hl">🟢 3D/Geometry</td><td>NeRF, Gaussian Splatting, SLAM, depth</td><td>CVPR, ICCV, 3DV</td></tr>
<tr><td class="hl">🏥 Medical</td><td>Radiology, pathology, dermoscopy</td><td>MICCAI, CVPR (medical workshops)</td></tr>
<tr><td class="hl">🔵 Video</td><td>Action recognition, tracking, video LLMs</td><td>CVPR, ICCV, ECCV</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১-৩%</div><div class="sc-label">গ্রহণের হার (top programs)</div></div>
<div class="stat-card"><div class="sc-num">২৫০-৪০০</div><div class="sc-label">প্রতি আসনে আবেদন</div></div>
<div class="stat-card"><div class="sc-num">$২২০-৪০০K</div><div class="sc-label">industry research বেতন</div></div>
<div class="stat-card"><div class="sc-num">CVPR</div><div class="sc-label">~২৮০০ পেপার/বছর (সবচেয়ে বড় AI conf)</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Vision 'সমাধান হয়ে গেছে' — ImageNet-এ ৯৬% accuracy। এখন আর কিছু বাকি নেই।" ভুল। ImageNet classification সমাধান হয়েছে, কিন্তু segmentation in the wild, video understanding, 3D from single image, robustness to distribution shift — এগুলো এখনো open। Medical vision, embodied perception — অনেক বাকি।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"Vision এখন foundation-model paradigm-এ — ViT/CLIP/DINOv2 হলো backbone, তার উপর generation (diffusion), perception, VLM। 3D, medical, video, embodied — এখানে depth আছে। generation বিস্ফোরণ চলছে, কিন্তু 3D/medical-এ কম ভিড়, বেশি প্রভাব।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> video generation (Sora, Veo 3, Kling), SAM2 (video segmentation), Gaussian Splatting (fast 3D), VLMs (GPT-4V/Gemini/Claude vision), world models (Sora কে একটা শিখছে এমন সিমুলেটর হিসেবে দেখা), embodied vision (robotics-এর সাথে)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ CNN/Transformer আর linear algebra ভালোবাসো · ✅ ছবি/ভিডিও/3D-তে ভিজ্যুয়াল intuition · ✅ medical বা 3D-তে কম প্রতিযোগিতা চাও · ⚠️ generation-এ প্রতিযোগিতা তীব্র (industry dominance) · 💡 medical imaging = উচ্চ প্রভাব + স্থিতিশীল NIH/NSF ফান্ডিং।</div></div>

<div class="dialogue">"তোমার একটা বিশেষ সুবিধা আছে vision-এ," ইউকি বললেন। "তুমি Ipractus বানিয়েছ — একটা React Native app, যেখানে তুমি camera permission, image handling, UI নিয়ে কাজ করেছ। এটা দেখায় তুমি image pipeline বোঝো। mobile/edge vision (on-device detection, TinyML) এখন হট — তোমার অভিজ্ঞতা সেখানে কাজে দেবে।"</div>
<div class="dialogue en">"You have a special advantage in vision," Yuki said. "You built Ipractus — a React Native app, where you handled camera permissions, image handling, UI. This shows you understand image pipelines. Mobile/edge vision (on-device detection, TinyML) is hot now — your experience serves there."</div>

<div class="dialogue">বসর — তীক্ষ্ণ দৃষ্টি, গভীরে দেখা। কুরআনে আল্লাহ বলেন: "তারা কি উটকে দেখে না কীভাবে সৃষ্টি হয়েছে?" (৮৮:১৭)। আল্লাহ বারবার বলেন — দেখো, পর্যবেক্ষণ করো, গভীরে যাও। শুধু চোখ দিয়ে দেখা আর বুঝে দেখা — এই পার্থক্যই হলো বসর। একটা ক্যামেরা দেখে, কিন্তু বোঝে না। Vision গবেষক হলো সে যে মেশিনকে শেখায় শুধু দেখতে নয় — বুঝতে। pixel-এর ভেতরে অর্থ খোঁজে। এটাই বসর — গভীরে দেখা, আল্লাহর সৃষ্টির নিদর্শন পড়া।</div>
<div class="dialogue en">Basar — sharp sight, seeing deeply. Allah says: "Do they not look at the camel, how it is created?" (88:17). Allah repeatedly says — look, observe, go deep. Seeing with eyes only vs. understanding — this difference is basar. A camera sees, but doesn't understand. A vision researcher is one who teaches machines not just to see — to understand. Seeking meaning within pixels. This is basar — seeing deeply, reading the signs of Allah's creation.</div>

<div class="secret-box">👁️ Vision: AI-এর দ্বিতীয় বৃহত্তম সমুদ্র। ১-৩% গ্রহণ। হট: generation (diffusion/video), VLMs, SAM2। কম ভিড় + উচ্চ প্রভাব: medical imaging, 3D, embodied vision। আজকের paradigm: ViT/CLIP backbone + task head।</div>`,
  senior:{
    title:"Vision PhD-তে গভীরতার জায়গা — Senior Path",
    body:`<p><strong>ImageNet 'সমাধান হয়ে গেছে' — এই কথায় ভুলো না:</strong> classification হ্যাঁ, কিন্তু robustness (দিনের আলো vs রাত, ঝাপসা), out-of-distribution, few-shot, 3D from 2D — open। এই gaps-এ প্রোফাইল বানাও।</p><p><strong>Medical imaging = hidden gem:</strong> NIH/NSF ফান্ডিং স্থিতিশীল, প্রতিযোগিতা মূলধারার vision-এর চেয়ে কম, প্রভাব সরাসরি (রোগ নির্ণয়)। MICCAI হলো প্রধান কনফারেন্স। একটা clinical collaborator খোঁজো।</p><p><strong>3D/embodied কম ভিড়:</strong> NeRF, Gaussian Splatting, robotics vision — গভীর গণিত (geometry), কম প্রতিযোগী, industry (autonomous driving, AR) demand।</p><p><strong>VLM-এ industry dominance:</strong> GPT-4V/Gemini-এর মতো VLM research এখন industry-তে। academia হলো efficiency, evaluation, specialized domains, interpretability — সেখানে মন দাও।</p>`
  }
});

// ══ DOOR 3: REINFORCEMENT LEARNING (placeholder) ══
doors.push({
  num:3, icon:"🎮", color:"#38bdf8", name:"সিদ্ধান্তের সমুদ্র",
  subtitle:"The Sea of Decisions", tech:"Reinforcement Learning",
  spirit:"সাবর — ধৈর্য, পুরস্কারের জন্য অপেক্ষা",
  secret:"RL — agents that learn from reward। Game agents, robotics, decision making। PPO, GRPO, RLHF।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ৩ — সিদ্ধান্তের সমুদ্র। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 3 — the Sea of Decisions. Full deep dive coming soon.</p>`
});

// ══ DOOR 4: ML THEORY & AI SAFETY (placeholder) ══
doors.push({
  num:4, icon:"🛡️", color:"#38bdf8", name:"নিরাপত্তার সমুদ্র",
  subtitle:"The Sea of Safety", tech:"ML Theory & AI Safety",
  spirit:"আমানা — নিরাপত্তা, বিশ্বস্ততা",
  secret:"ML Theory (generalization, optimization) + AI Safety (alignment, interpretability, robustness)।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ৪ — নিরাপত্তার সমুদ্র। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 4 — the Sea of Safety. Full deep dive coming soon.</p>`
});

// ══ DOOR 5: DISTRIBUTED SYSTEMS (placeholder) ══
doors.push({
  num:5, icon:"🏗️", color:"#52c41a", name:"বিতরণের ভিত্তি",
  subtitle:"The Distributed Foundation", tech:"Distributed Systems",
  spirit:"আরশ — ভিত্তি, সবকিছু যার উপর দাঁড়িয়ে",
  secret:"Distributed systems — consensus, replication, fault tolerance, cloud। Google, Amazon সব এর উপর।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ৫ — বিতরণের ভিত্তি। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 5 — the Distributed Foundation. Full deep dive coming soon.</p>`
});
