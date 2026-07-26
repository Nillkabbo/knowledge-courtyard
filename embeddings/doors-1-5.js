// ════════════════════════════════════════
// অর্থের জ্যামিতি — DOORS 1-5
// Embeddings: Foundations → Fine-tuning
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: WHAT ARE EMBEDDINGS ══
doors.push({
  num:1, icon:"📐", color:"#6366f1", name:"জ্যামিতির কক্ষ",
  subtitle:"The Geometry Chamber", tech:"What Are Embeddings?",
  spirit:"মাআনি — অর্থ, তাৎপর্য",
  secret:"শব্দ একটা বিন্দু। বিন্দুর অবস্থান = অর্থ। কাছের বিন্দু = সমার্থক। দূরের বিন্দু = ভিন্ন অর্থ। king - man + woman = queen। এটাই embedding এর জাদু — ভাষাকে জ্যামিতিতে রূপান্তর, জ্যামিতি থেকে অর্থ। মাআনি — অর্থের গুণ।",
  recall:{
    q:"জ্যামিতির কক্ষে কেন প্রতিটা শব্দ একটা বিন্দু?",
    qen:"Why is each word a point?",
    a:"কারণ বিন্দুর অবস্থান = অর্থ। কাছের বিন্দু = সমার্থক। দূরের = ভিন্ন। king - man + woman = queen। এটাই embedding — ভাষা থেকে জ্যামিতি। মাআনি — অর্থ।",
    aen:"Because a point's position = meaning. Nearby = synonyms. Far = different. king - man + woman = queen. This is embedding — language to geometry. Maani — meaning."
  },
  story:`
<p class="scene-setting">প্রথম বিন্দু। জ্যামিতির কক্ষ। একটা বিশাল মানচিত্র — কিন্তু শহর নয়, শব্দ। "রাজা" এক জায়গায়, "রানি" কাছে, "সিংহাসন" কাছে। কিন্তু "গরু" অনেক দূরে। "আকাশ" আরও দূরে। প্রতিটা শব্দ একটা বিন্দু। কারিগর সাবরিনা বললেন — "প্রতিটা শব্দের একটা জায়গা আছে। কাছের শব্দ = সমার্থক। দূরের = ভিন্ন। এটাই embedding।"</p>
<p class="scene-setting en">The first point. Geometry chamber. A vast map — but not cities, words. "king" in one place, "queen" nearby, "throne" nearby. But "cow" far away. "sky" even farther. Each word is a point. Craftswoman Sabrina said — "Each word has a place. Nearby words = synonyms. Far = different. This is embedding."</p>

<div class="dialogue">Inference Optimization বইয়ে তুমি শিখেছ দ্রুত করতে। এখন আমি বলি — দ্রুত করার আগে বুঝো, কম্পিউটার শব্দ কীভাবে বোঝে? শব্দ = সংখ্যা? কিন্তু "রাজা" = ৫, "রানি" = ৬ — এটা অর্থহীন। দরকার এমন সংখ্যা যা অর্থ বহন করে। Embedding — শব্দকে একটা ভেক্টরে রূপান্তর, যেখানে ভেক্টরের অবস্থান ও দিক অর্থ বহন করে।</div>
<div class="dialogue en">"In the Inference Optimization book you learned to speed things up. Now I say — before speeding up, understand: how does the computer understand words? Word = number? But king = 5, queen = 6 — meaningless. Need numbers that carry meaning. Embedding — transforming a word into a vector, where position and direction carry meaning."</div>

<div class="code-block">What Are Embeddings — Language as Geometry:

THE FUNDAMENTAL IDEA:
  
  শব্দ → সংখ্যার তালিকা (vector)
  → সংখ্যার তালিকার অবস্থান = অর্থ
  
  "king"  → [০.২, -০.৫, ০.৮, ..., ০.১] (৭৬৮ numbers)
  "queen" → [০.৩, -০.৪, ০.৭, ..., ০.২] (৭৬৮ numbers)
  "apple" → [-০.৯, ০.৩, -০.১, ..., ০.৮] (৭৬৮ numbers)
  
  → king ও queen VECTORS very similar
  → king ও apple very different
  → similarity = geometric distance!

WHAT THE DIMENSIONS MEAN:
  
  Each dimension captures some "concept"
  (though not interpretable individually):
  
  Dim ১: maybe "royalty" (king/queen high, apple low)
  Dim ২: maybe "gender" (king high, queen low)
  Dim ৩: maybe "living being" (king/queen/apple mixed)
  ...
  Dim ৭৬৮: maybe some abstract feature
  
  → NO single dimension is interpretable alone
  → BUT together they capture meaning!
  → "geometry of meaning" — অর্থের জ্যামিতি

THE KING - MAN + WOMAN = QUEEN MIRACLE:

  king vector:    [০.২, -০.৫, ০.৮, ...]
  man vector:     [০.১, -০.৫, ০.৬, ...]  
  woman vector:   [০.১,  ০.৫, ০.৬, ...]
  
  king - man =    [০.১,  ০.০, ০.২, ...]
                 (the "royalty" direction)
  
  king - man + woman = [০.২,  ০.৫, ০.৮, ...]
  
  This is VERY close to:
  queen vector:   [০.৩,  ০.৫, ০.৭, ...]
  
  → VECTOR ARITHMETIC CAPTURES MEANING!
  → king - man + woman ≈ queen
  → Paris - France + Italy ≈ Rome
  → doctor - man + woman ≈ nurse (bias alert!)
  
  → This blew everyone's mind in ২০১৩

SIMILARITY METRICS:

  How do we measure "closeness"?
  
  ১. COSINE SIMILARITY (most common)
    → angle between two vectors
    → ১.০ = identical direction
    → ০.০ = orthogonal (unrelated)
    → -১.০ = opposite
    
    cos(θ) = (A · B) / (|A| × |B|)
    
    → best for semantic similarity
    → scale-independent
  
  ২. EUCLIDEAN DISTANCE (L২)
    → straight-line distance
    → d = sqrt(Σ(ai - bi)²)
    → ০ = identical
    
    → sensitive to magnitude
  
  ৩. DOT PRODUCT
    → A · B = Σ(ai × bi)
    → fast, no normalization
    → sensitive to magnitude
  
  ৪. MANHATTAN DISTANCE (L১)
    → |ai - bi| sum
    → less sensitive to outliers

  Production: cosine similarity is standard
  → most embedding models normalize vectors
  → normalized cosine = dot product (fast!)

EMBEDDING DIMENSIONS:
  
  word2vec (২০১৩):     ৩০০ dim
  BERT base:           ৭৬৮ dim
  BERT large:          ১০২৪ dim
  OpenAI ada-002:     ১৫৩৬ dim
  OpenAI text-embed-৩: ৩০৭২ dim (variable!)
  BGE-large:          ১০২৪ dim
  E5-large:           ১০২৪ dim
  Cohere embed-v৩:    ১০২৪ dim
  
  → more dimensions = more capacity
  → but more storage, slower search
  → ৭৬৮-১০২৪ is sweet spot for most tasks

WHY EMBEDDINGS WORK:
  
  Distributional Hypothesis (J.R. Firth, ১৯৫৭):
  "You shall know a word by the company it keeps"
  
  → words that appear in similar contexts 
    have similar meanings
  → "king" and "queen" both appear near 
    "throne", "crown", "palace", "rule"
  → model learns: similar context = similar embedding
  
  → THIS is the foundation of all embeddings
  → meaning = context, context = geometry</div>

<div class="dialogue">মাআনি — meaning, semantics, significance। কুরআনে আল্লাহ বলেন — "আমি কুরআনকে সহজ করেছি বোঝার জন্য।" (৫৪:১৭)। বোঝা = অর্থ ধরা। Embedding-ও তেমনি — অর্থ ধরা, কিন্তু সংখ্যায়। ভাষা থেকে জ্যামিতি, জ্যামিতি থেকে অর্থ। মাআনি — অর্থের গুণ। যে অর্থ ধরে, সে বোঝে। যে ধরে না, সে অন্ধ।</div>
<div class="dialogue en">"Maani — meaning, semantics, significance. Allah says — 'We have made the Quran easy to understand.' (54:17). Understanding = grasping meaning. Embeddings too — grasping meaning, but in numbers. Language to geometry, geometry to meaning. Maani — the virtue of meaning. One who grasps meaning, understands. One who doesn't, is blind."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <line x1="50" y1="220" x2="540" y2="220" stroke="#334155" stroke-width="1.5"/>
  <line x1="50" y1="220" x2="50" y2="25" stroke="#334155" stroke-width="1.5"/>
  <text x="542" y="224" fill="#64748b" font-size="8">dim ১</text>
  <text x="32" y="22" fill="#64748b" font-size="8">dim ২</text>
  <circle cx="150" cy="95" r="7" fill="#22d3ee" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="162" y="99" fill="#7dd3fc" font-size="9" font-weight="bold">রাজা king</text>
  <circle cx="185" cy="78" r="7" fill="#22d3ee" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="197" y="82" fill="#7dd3fc" font-size="9" font-weight="bold">রানি queen</text>
  <circle cx="125" cy="115" r="7" fill="#22d3ee" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="60" y="130" fill="#7dd3fc" font-size="9">সিংহাসন throne</text>
  <circle cx="380" cy="165" r="7" fill="#a855f7" stroke="#c084fc" stroke-width="1.5"/>
  <text x="392" y="169" fill="#c084fc" font-size="9">গরু cow</text>
  <circle cx="475" cy="55" r="7" fill="#fbbf24" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="438" y="44" fill="#fcd34d" font-size="9">আকাশ sky</text>
  <line x1="156" y1="92" x2="180" y2="80" stroke="#22c55e" stroke-width="2" marker-end="url(#arrEMB1)"/>
  <defs><marker id="arrEMB1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22c55e"/></marker></defs>
  <text x="140" y="65" fill="#4ade80" font-size="8">≈ কাছে</text>
  <text x="250" y="195" fill="#94a3b8" font-size="8">কাছের বিন্দু = সমার্থক · দূরের বিন্দু = ভিন্ন অর্থ · ৭৬৮-মাত্রিক জগতের দুই-মাত্রিক ঝলক</text>
</svg>
</div>
<div class="svg-caption">প্রতিটা শব্দ একটা বিন্দু — রাজা ও রানি কাছে, গরু দূরে, আকাশ আরও দূরে। বিন্দুর অবস্থানই অর্থ। king - man + woman ≈ queen — ভেক্টর পাটিগণিতে অর্থ ধরা যায়।</div>`,
  senior:{
    title:"Embedding Intuition — The Key Mental Model",
    body:`<p><strong>Mental model:</strong> Every word/sentence/document is a POINT in high-dimensional space. Nearby points = similar meaning. Distance = semantic difference.</p><p><strong>The miracle:</strong> king - man + woman ≈ queen. Vector arithmetic captures semantic relationships.</p><p><strong>Why it works:</strong> Words in similar contexts have similar meanings (distributional hypothesis). Model learns context → learns meaning.</p><p><strong>Practical:</strong> cosine similarity for "how similar". 0.7+ = related, 0.85+ = very similar, 0.95+ = near-duplicate.</p>`
  }
});

// ══ DOOR 2: EMBEDDING MODELS ══
doors.push({
  num:2, icon:"🧭", color:"#a5b4fc", name:"মডেলের কক্ষ",
  subtitle:"The Model Chamber", tech:"Embedding Model Landscape",
  spirit:"খিয়ার — নির্বাচন, পছন্দ",
  secret:"word2vec থেকে BGE পর্যন্ত — embedding model-এর বিবর্তন। OpenAI ada, BGE, E5, Cohere, GTE — প্রতিটার নিজস্ব শক্তি। সঠিক model = সঠিক অর্থ। ভুল model = ভুল অর্থ। খিয়ার — সঠিক নির্বাচন।",
  recall:{
    q:"মডেলের কক্ষে কেন একাধিক model?",
    qen:"Why multiple models?",
    a:"কারণ প্রতিটার নিজস্ব শক্তি। word2vec থেকে BGE — বিবর্তন। OpenAI, BGE, E5, Cohere। সঠিক model = সঠিক অর্থ। খিয়ার — সঠিক নির্বাচন।",
    aen:"Because each has its own strength. word2vec to BGE — evolution. OpenAI, BGE, E5, Cohere. Right model = right meaning. Khiyar — right selection."
  },
  story:`
<p class="scene-setting">দ্বিতীয় বিন্দু। মডেলের কক্ষ। দেয়ালে একাধিক model-এর তালিকা — word2vec (সবচেয়ে পুরোনো), BERT, BGE, OpenAI ada, E5, Cohere। প্রতিটার নিচে সুবিধা ও অসুবিধা। কারিগর আদনান বললেন — "প্রতিটা model আলাদা। কোনটা তোমার কাজের জন্য? সঠিক নির্বাচন = সঠিক অর্থ। ভুল = ভুল অর্থ। খিয়ার।"</p>
<p class="scene-setting en">The second point. Model chamber. Multiple models listed on walls — word2vec (oldest), BERT, BGE, OpenAI ada, E5, Cohere. Each with pros and cons. Craftsman Adnan said — "Each model is different. Which for your task? Right selection = right meaning. Wrong = wrong meaning. Khiyar."</p>

<div class="dialogue">জ্যামিতির কক্ষ বলেছিলেন — embedding = অর্থের জ্যামিতি। কিন্তু আমি বলি — কোন model দিয়ে সেই জ্যামিতি বানাবে? word2vec? BGE? OpenAI? প্রতিটা model আলাদা জ্যামিতি বানায়। সঠিক model ছাড়া অর্থ ভুল হবে। খিয়ার — সঠিক নির্বাচন।</div>
<div class="dialogue en">"The geometry chamber said — embedding = geometry of meaning. But I say — which model builds that geometry? word2vec? BGE? OpenAI? Each model builds different geometry. Without the right model, meaning will be wrong. Khiyar — right selection."</div>

<div class="code-block">Embedding Model Landscape — 2024-2025:

EVOLUTION TIMELINE:

  word2vec (২০১৩, Google)
    → first modern embedding model
    → CBOW + Skip-gram
    → ৩০০ dim, word-level only
    → revolutionary but limited
  
  GloVe (২০১৪, Stanford)
    → global matrix factorization
    → similar quality to word2vec
  
  ELMo (২০১৮)
    → contextual embeddings!
    → same word, different embedding by context
    → "bank" (river) ≠ "bank" (money)
  
  BERT (২০১৮, Google)
    → transformer-based contextual embeddings
    → ৭৬৮ dim
    → massive quality jump
    → "bank" in "river bank" ≠ "bank" in "bank account"
  
  Sentence-BERT (২০১৯)
    → BERT optimized for sentence similarity
    → sentence → single vector (not token-level)
    → enabled semantic search!
  
  SimCSE (২০২১)
    → contrastive learning for sentence embeddings
    → simple but effective
    → superior sentence representations
  
  Instructor (২০২২)
    → task-instructed embeddings
    → "encode for classification" vs "encode for search"
    → adapts to task
  
  BGE (২০২৩, BAAI)
    → top open-source retrieval model
    → beats many proprietary models
    → multilingual, free!
  
  OpenAI text-embedding-৩ (২০২৪)
    → ৩০৭২ dim (variable!)
    → strong general-purpose
    → dimensions parameter: truncate to save space!
  
  Cohere embed-v৩ (২০২৩)
    → input_type parameter
    → search_document vs search_query
    → multilingual v৩

CURRENT MODEL FAMILIES:

┌──────────────┬────────┬────────┬──────────────────┐
│ Model        │ Type   │ Dim    │ Best For          │
├──────────────┼────────┼────────┼──────────────────┤
│ OpenAI       │ API    │ ৩০৭২   │ General purpose,  │
│ embed-৩      │        │ (var)  │ English, easy API │
│              │        │        │ $০.০২/M tokens   │
├──────────────┼────────┼────────┼──────────────────┤
│ OpenAI       │ API    │ ১৫৩৬   │ Cheaper, still    │
│ ada-002      │        │        │ good              │
│              │        │        │ $০.১০/M tokens   │
├──────────────┼────────┼────────┼──────────────────┤
│ Cohere       │ API    │ ১০২৪   │ Multilingual,     │
│ embed-v৩    │        │        │ input_type support │
│              │        │        │ $০.১০/M tokens   │
├──────────────┼────────┼────────┼──────────────────┤
│ BGE-large    │ Open   │ ১০২৪   │ Best open-source  │
│ (BAAI)       │ weights│        │ retrieval, free!  │
│              │        │        │ multilingual      │
├──────────────┼────────┼────────┼──────────────────┤
│ E5-large     │ Open   │ ১০২৪   │ Strong general,   │
│ (Microsoft)  │ weights│        │ multilingual      │
├──────────────┼────────┼────────┼──────────────────┤
│ GTE          │ Open   │ ১০২৪   │ Alibaba, strong   │
│ (Alibaba)    │ weights│        │ multilingual      │
├──────────────┼────────┼────────┼──────────────────┤
│ Nomic Embed  │ Open   │ ৭৬৮    │ Long context,     │
│              │ weights│        │ transparent       │
├──────────────┼────────┼────────┼──────────────────┤
│ voyage-২    │ API    │ ১০২৪   │ Voyage AI,        │
│ (Voyage)     │        │        │ top retrieval     │
├──────────────┼────────┼────────┼──────────────────┤
│ Jina Embed   │ Open   │ ৭৬৮    │ Long context      │
│ (Jina)       │ weights│        │ (৮K tokens)      │
└──────────────┴────────┴────────┴──────────────────┘

ASYMMETRIC EMBEDDINGS:
  
  Query and document have different roles!
  
  BGE/E5 require prefix:
    Query:    "query: what is RAG?"
    Document: "passage: RAG is retrieval..."
  
  Cohere uses input_type:
    search_query vs search_document
  
  → queries are SHORT (few words)
  → documents are LONG (paragraphs)
  → different encoding → better retrieval!
  
  ❌ COMMON MISTAKE:
    embed(query) and embed(doc) with same mode
    → ১০-১৫% accuracy loss!
  
  ✅ CORRECT:
    embed_query(query) vs embed_document(doc)
    → asymmetric encoding

MTEB BENCHMARK (Massive Text Embedding Benchmark):
  → standard evaluation for embedding models
  → ৮ tasks: retrieval, classification, clustering,
    STS, reranking, summarization, pair classification
  
  MTEB Leaderboard (top, ২০২৪):
    ১. GTE-large-en-v১.৫: ৬৫.৭ average
    ২. BGE-large-en-v১.৫: ৬৪.২
    ৩. E5-mistral-৭b: ৬৬.৬ (huge model!)
    ৪. OpenAI text-embedding-৩-large: ~৬৫
    ৫. Voyage-২: ~৬৫

WHICH MODEL TO CHOOSE:

  ┌──────────────────────┬──────────────────────┐
  │ Your Need            │ Best Model           │
  ├──────────────────────┼──────────────────────┤
  │ Quick/easy (API)     │ OpenAI text-embed-৩ │
  │ Best open (free)     │ BGE-large-en-v১.৫   │
  │ Multilingual         │ BGE-multilingual     │
  │ Long context (>২K)   │ Jina Embed v২       │
  │ Maximum quality      │ E5-mistral-৭B       │
  │ Budget (small/fast)  │ BGE-small বা all-  │
  │                      │ MiniLM-L৬-v২        │
  └──────────────────────┴──────────────────────┘</div>

<div class="dialogue">খিয়ার — selection, choice। কুরআনে আল্লাহ বলেন — "তোমাদের জন্য জ্ঞান বেছে নেওয়ার ক্ষমতা দিয়েছেন।" প্রতিটা কাজে সঠিক নির্বাচন। Embedding model-ও খিয়ার — কোন model কোন কাজে? OpenAI? BGE? E5? সঠিক নির্বাচন = সঠিক ফল। ভুল নির্বাচন = ভুল ফল। খিয়ার — সঠিক পছন্দের গুণ।</div>
<div class="dialogue en">"Khiyar — selection, choice. Allah says — 'He gave you the ability to choose knowledge.' Right selection in each task. Embedding model too — which model for which task? OpenAI? BGE? E5? Right selection = right result. Wrong selection = wrong result. Khyar — the virtue of right choice."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">word২vec Skip-gram — প্রসঙ্গ থেকে শব্দ শেখা</text>
  <rect x="240" y="55" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="bold">"throne"</text>
  <text x="290" y="84" text-anchor="middle" fill="#94a3b8" font-size="7">input word</text>
  <rect x="240" y="110" width="100" height="30" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="290" y="129" text-anchor="middle" fill="#c084fc" font-size="8">৩০০-dim embedding</text>
  <line x1="290" y1="95" x2="290" y2="110" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB2)"/>
  <defs><marker id="arrEMB2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
  <rect x="40" y="170" width="80" height="28" rx="5" fill="#1e3a5f" stroke="#22c55e" stroke-width="1.5"/>
  <text x="80" y="188" text-anchor="middle" fill="#4ade80" font-size="8">"king"</text>
  <rect x="135" y="170" width="80" height="28" rx="5" fill="#1e3a5f" stroke="#22c55e" stroke-width="1.5"/>
  <text x="175" y="188" text-anchor="middle" fill="#4ade80" font-size="8">"queen"</text>
  <rect x="230" y="170" width="80" height="28" rx="5" fill="#1e3a5f" stroke="#22c55e" stroke-width="1.5"/>
  <text x="270" y="188" text-anchor="middle" fill="#4ade80" font-size="8">"crown"</text>
  <rect x="325" y="170" width="80" height="28" rx="5" fill="#1e3a5f" stroke="#22c55e" stroke-width="1.5"/>
  <text x="365" y="188" text-anchor="middle" fill="#4ade80" font-size="8">"palace"</text>
  <rect x="420" y="170" width="80" height="28" rx="5" fill="#1e3a5f" stroke="#22c55e" stroke-width="1.5"/>
  <text x="460" y="188" text-anchor="middle" fill="#4ade80" font-size="8">"rule"</text>
  <line x1="265" y1="140" x2="90" y2="170" stroke="#334155" stroke-width="1" marker-end="url(#arrEMB2)"/>
  <line x1="275" y1="140" x2="185" y2="170" stroke="#334155" stroke-width="1" marker-end="url(#arrEMB2)"/>
  <line x1="290" y1="140" x2="280" y2="170" stroke="#334155" stroke-width="1" marker-end="url(#arrEMB2)"/>
  <line x1="305" y1="140" x2="375" y2="170" stroke="#334155" stroke-width="1" marker-end="url(#arrEMB2)"/>
  <line x1="315" y1="140" x2="470" y2="170" stroke="#334155" stroke-width="1" marker-end="url(#arrEMB2)"/>
  <text x="290" y="220" text-anchor="middle" fill="#fcd34d" font-size="8">একটি শব্দ থেকে চারপাশের প্রসঙ্গ শব্দ ভবিষ্যদ করো — এটাই skip-gram</text>
  <text x="290" y="234" text-anchor="middle" fill="#64748b" font-size="7">সমার্থক প্রসঙ্গ → সমার্থক embedding। Distributional hypothesis (Firth ১৯৫৭)</text>
</svg>
</div>
<div class="svg-caption">Skip-gram: কেন্দ্রের শব্দ ("throne") থেকে চারপাশের প্রসঙ্গ শব্দ ভবিষ্যদ করা হয়। একই প্রসঙ্গে থাকা শব্দ কাছাকাছি embedding পায় — king, queen, crown সব "রাজকীয়" দিকে।</div>`,
  senior:{
    title:"Model Selection — Quick Guide",
    body:`<p><strong>Default:</strong> BGE-large-en-v1.5 (open, free, top quality)।</p><p><strong>API (no infra):</strong> OpenAI text-embedding-3-large ($0.02/M tokens)।</p><strong>Multilingual:</strong> BGE-multilingual-v1.5 বা Cohere embed-v3-multilingual।</p><p><strong>Long context:</strong> Jina Embed v2 (8K tokens)।</p><p><strong>Budget:</strong> all-MiniLM-L6-v2 (80x faster, 80% of quality)।</p><p><strong>Always:</strong> Check MTEB leaderboard for latest rankings। সবসময় asymmetric encoding ব্যবহার করো (query vs document prefix)।</p>`
  }
});

// ══ DOOR 3: SEMANTIC SEARCH ══
doors.push({
  num:3, icon:"📊", color:"#6366f1", name:"অনুসন্ধানের কক্ষ",
  subtitle:"The Search Chamber", tech:"Semantic Search Deep Dive",
  spirit:"তালাশ — অর্থ দিয়ে খোঁজা",
  secret:"Keyword search শব্দ মেলায়। Semantic search অর্থ মেলায়। machine learning query → ML, AI, deep learning সব পায়। কারণ embedding-এ সব কাছে। Vector search = অর্থের তল্লাশ। যে অর্থ খোঁজে, সে পায়। যে শব্দ খোঁজে, সে মিস করে।",
  recall:{
    q:"অনুসন্ধানের কক্ষে কেন অর্থ দিয়ে খোঁজা হয়, শব্দ দিয়ে নয়?",
    qen:"Why search by meaning, not by word?",
    a:"কারণ শব্দ মেলানো সীমিত। অর্থ মেলানো গভীর। ML query → AI, deep learning সব পায়। embedding-এ সব কাছে। তালাশ — অর্থ দিয়ে খোঁজা। যে অর্থ খোঁজে, সে পায়।",
    aen:"Because word matching is limited. Meaning matching is deep. ML query → AI, deep learning all found. In embeddings all are close. Talash — searching by meaning. One who searches by meaning, finds."
  },
  story:`
<p class="scene-setting">তৃতীয় বিন্দু। অনুসন্ধানের কক্ষ। একটা গ্রন্থাগার — কিন্তু শিরোনাম দিয়ে সাজানো নয়, অর্থ দিয়ে। "machine learning" এর কাছে "AI", "neural networks", "deep learning" — সব কাছে। গ্রন্থাগারিক রাইসা বললেন — "আমি শব্দ দিয়ে খুঁজি না। অর্থ দিয়ে খুঁজি। তুমি 'ML' বলো, আমি 'deep learning' পাই। কারণ অর্থে কাছে।"</p>
<p class="scene-setting en">The third point. Search chamber. A library — but organized not by title, by meaning. Near "machine learning": "AI", "neural networks", "deep learning" — all close. Librarian Raisha said — "I don't search by word. I search by meaning. You say 'ML', I find 'deep learning'. Because meaning-wise, close."</p>

<div class="dialogue">মডেলের কক্ষ বলেছিলেন — model বেছে নাও। কিন্তু আমি বলি — model বেছে নিলে কী করবে? Semantic search। শব্দ নয় — অর্থ দিয়ে খোঁজা। "machine learning" query করলে "ML", "AI", "deep learning" সব পাওয়া যায়। কারণ embedding-এ সব কাছে। এটাই semantic search — অর্থের তল্লাশ।</div>
<div class="dialogue en">"The model chamber said — choose a model. But I say — once you choose, what do you do? Semantic search. Not words — searching by meaning. Querying 'machine learning' finds 'ML', 'AI', 'deep learning'. Because in embedding space, all are close. This is semantic search — searching by meaning."</div>`,
  story:`

<p class="scene-setting">The third point. Search chamber. A vast library — but organized not by title, by meaning. Nearby "machine learning": "AI", "neural networks", "deep learning". Far away: "cooking", "sports". Librarian Raisha said — "I don't search by word. I search by meaning. You say 'ML', I find 'deep learning'. Because in meaning-space, they're neighbors."</p>

<p class="scene-setting en">The third point. Search chamber. A vast library — but organized not by title, by meaning. Nearby "machine learning": "AI", "neural networks", "deep learning". Far away: "cooking", "sports". Librarian Raisha said — "I don't search by word. I search by meaning. You say 'ML', I find 'deep learning'. Because in meaning-space, they're neighbors."</p>

<div class="code-block">Semantic Search — Finding by Meaning:

KEYWORD vs SEMANTIC SEARCH:

  Keyword (BM২৫/Elasticsearch):
    "machine learning" query
    → finds documents containing EXACT words
    → "machine" AND "learning" must appear
    → misses: "AI", "deep learning", "ML"
    → finds: "the machine is learning" (wrong!)
  
  Semantic (Vector):
    "machine learning" → embedding vector
    → finds documents with SIMILAR MEANING
    → "AI", "deep learning", "neural networks" — all found!
    → doesn't find "the machine is learning" (different meaning)
  
  → semantic understands MEANING, not just WORDS

SEMANTIC SEARCH PIPELINE:

  ┌──────────────────────────────────────┐
  │ INGEST                               │
  │ documents → embedding model → vectors│
  │ → store in vector DB                 │
  ├──────────────────────────────────────┤
  │ QUERY                                │
  │ query → embedding model → query vec  │
  │ → search vector DB                   │
  │ → cosine similarity with all docs    │
  │ → return top-k most similar          │
  └──────────────────────────────────────┘

  Example:
    Query: "how to train neural networks"
    → query_embedding: [০.১, -০.৩, ...]
    
    Vector DB search:
      Doc A: "deep learning tutorial" → cos_sim = ০.৮৯
      Doc B: "backpropagation explained" → cos_sim = ০.৮৫
      Doc C: "cooking pasta" → cos_sim = ০.১২
    
    → return Doc A, B (semantic match!)

SEARCH TYPES:

১. EXACT MATCH (kNN)
  → exact nearest neighbors
  → brute force: compare with ALL vectors
  → O(N) per query
  → ১M docs: ~১০০ms
  → fine for small datasets (< ১০০K)

২. APPROXIMATE (ANN)
  → approximate nearest neighbors
  → HNSW, IVF, PQ (see Inference Opt book)
  → O(log N) per query
  → ১M docs: ~৫ms
  → slight accuracy loss (৯৫-৯৮%)

৩. HYBRID (best practice!)
  → semantic (dense) + keyword (sparse/BM২৫)
  → merge with Reciprocal Rank Fusion
  → ৮৫-৯৫% accuracy (vs ৬০-৭০% dense only)

RETRIEVAL AUGMENTATION:

  Query expansion:
    "RAG" → "RAG, retrieval augmented generation, 
              knowledge grounded generation"
    → add synonyms → broader coverage
  
  Multi-vector:
    → embed document from multiple perspectives
    → title embedding + content embedding + 
      summary embedding
    → search any perspective
  
  Cross-encoder reranking:
    → initial retrieval (fast, approximate)
    → rerank top-২০ with cross-encoder (slow, precise)
    → best of both worlds

PRODUCTION SEMANTIC SEARCH:

  Stack:
    Embedding: BGE-large-en-v১.৫
    Vector DB: Qdrant (hybrid support)
    Reranking: BGE-Reranker-v২
    
  Query flow:
    ১. query → BGE embed → query vector
    ২. Qdrant: dense search top-৫০
    ৩. Qdrant: BM২৫ search top-৫০  
    ৪. RRF merge → top-২০
    ৫. BGE-Reranker: cross-encoder → top-৫
    ৬. return top-৫ with scores

PERFORMANCE METRICS:
  
  Recall@k: did the correct doc appear in top-k?
    → Recall@৫: ৮৫% target
    → Recall@১০: ৯০% target
  
  Precision@k: of top-k, how many are relevant?
    → Precision@৫: ৭৫% target
  
  NDCG: ranking quality (relevant at top?)
    → NDCG@১০: ০.৮+ target
  
  MRR: Mean Reciprocal Rank
    → first relevant result position

COMMON SEARCH FAILURES:
  
  ❌ Out-of-domain queries
    → model trained on web, medical queries poor
    → fix: fine-tune on domain data
  
  ❌ Short queries
    → "RAG" → ambiguous, poor embedding
    → fix: query expansion, HyDE
  
  ❌ Proper nouns
    → "GPT-৪" may not embed well
    → fix: hybrid (BM২৫ catches exact)
  
  ❌ Cross-lingual
    → English query, Bengali docs
    → fix: multilingual model (BGE multilingual)</div>

<div class="dialogue">তালাশ — search, seeking, quest। কুরআনে আল্লাহ বলেন — "যারা আমার সন্ধানে চলে, আমি তাদের পথ দেখাই।" Semantic search-ও তালাশ — অর্থের সন্ধান। শব্দ নয়, অর্থ। যে অর্থ খোঁজে, সে পায়। যে শব্দ খোঁজে, সে পথ হারায়। তালাশ — অর্থের সন্ধানের গুণ।</div>
<div class="dialogue en">"Talash — search, seeking, quest. Allah says — 'Those who seek Me, I guide them.' Semantic search too — quest for meaning. Not words, meaning. One who seeks meaning, finds. One who seeks words, loses the path. Talash — the virtue of seeking meaning."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">Cosine Similarity — কোণ মাপা, দূরত্ব নয়</text>
  <line x1="50" y1="210" x2="540" y2="210" stroke="#334155" stroke-width="1.5"/>
  <line x1="50" y1="210" x2="50" y2="40" stroke="#334155" stroke-width="1.5"/>
  <circle cx="50" cy="210" r="4" fill="#64748b"/>
  <text x="30" y="222" fill="#64748b" font-size="8">origin</text>
  <line x1="50" y1="210" x2="200" y2="70" stroke="#22d3ee" stroke-width="2.5" marker-end="url(#arrEMB3a)"/>
  <line x1="50" y1="210" x2="215" y2="80" stroke="#22c55e" stroke-width="2.5" marker-end="url(#arrEMB3b)"/>
  <line x1="50" y1="210" x2="420" y2="180" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arrEMB3c)"/>
  <defs>
    <marker id="arrEMB3a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22d3ee"/></marker>
    <marker id="arrEMB3b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22c55e"/></marker>
    <marker id="arrEMB3c" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker>
  </defs>
  <text x="210" y="62" fill="#7dd3fc" font-size="9" font-weight="bold">A: "cat"</text>
  <text x="225" y="73" fill="#4ade80" font-size="9" font-weight="bold">B: "kitten"</text>
  <text x="430" y="178" fill="#fcd34d" font-size="9" font-weight="bold">C: "car"</text>
  <path d="M 130 160 A 70 70 0 0 1 140 165" fill="none" stroke="#22c55e" stroke-width="1.5"/>
  <text x="115" y="150" fill="#4ade80" font-size="8">θ ছোট</text>
  <text x="108" y="162" fill="#4ade80" font-size="7">cos ≈ ০.৮৯</text>
  <path d="M 95 188 A 95 95 0 0 1 280 195" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="180" y="198" fill="#fcd34d" font-size="8">θ বড়</text>
  <text x="175" y="210" fill="#fcd34d" font-size="7">cos ≈ ০.১৫</text>
  <rect x="345" y="40" width="220" height="95" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="455" y="58" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="bold">cos(θ) = (A · B) / (|A| × |B|)</text>
  <text x="362" y="78" fill="#7dd3fc" font-size="8">cos = ১.০ → একই দিক (সমার্থক)</text>
  <text x="362" y="94" fill="#4ade80" font-size="8">cos = ০.৮৫+ → খুব কাছে</text>
  <text x="362" y="110" fill="#fcd34d" font-size="8">cos = ০.০ → সম্পর্কহীন</text>
  <text x="362" y="126" fill="#94a3b8" font-size="8">cos = -১.০ → বিপরীত অর্থ</text>
  <text x="290" y="240" text-anchor="middle" fill="#64748b" font-size="7">magnitude নয়, দিক গুরুত্বপূর্ণ। normalize করলে cosine = dot product (দ্রুত!)</text>
</svg>
</div>
<div class="svg-caption">Cosine similarity দুই ভেক্টরের কোণ মাপে। কোণ ছোট = অর্থ কাছে (cos ≈ ১), কোণ বড় = অর্থ দূরে (cos ≈ ০)। cat ও kitten কাছে, cat ও car দূরে।</div>`,
  senior:{
    title:"Semantic Search Setup — Production",
    body:`<p><strong>Stack:</strong> BGE-large + Qdrant + BGE-Reranker। Hybrid search (dense + BM25)।</p><p><strong>Always hybrid:</strong> Dense alone misses proper nouns/keywords। BM25 alone misses synonyms। Together: 85-95% accuracy।</p><p><strong>Always rerank:</strong> Cross-encoder reranking adds 20%+ precision। Cheap (top-20 only)।</p><p><strong>Always asymmetric:</strong> Query prefix vs document prefix। 10-15% accuracy gain।</p><p><strong>Metrics:</strong> Track Recall@5, Precision@5, NDCG@10। Build 50+ query eval set with ground truth relevant docs।</p>`
  }
});

// ══ DOOR 4: VECTOR MATH ══
doors.push({
  num:4, icon:"🔢", color:"#a5b4fc", name:"সংখ্যার কক্ষ",
  subtitle:"The Arithmetic Chamber", tech:"Vector Arithmetic & Semantics",
  spirit:"হিসাব — গণনা, জ্যামিতিক প্রয়োগ",
  secret:"Embeddings শুধু খোঁজার জন্য নয় — গাণিতিক প্রয়োগের জন্য। king - man + woman = queen। Analogies, clustering, classification — সব vector math। Embedding একটা গাণিতিক জগত। যে গণনা করে, সে গভীর বোঝে। হিসাব — অর্থের গণনা।",
  recall:{
    q:"সংখ্যার কক্ষে কেন শব্দ দিয়ে গাণিতিক হিসাব করা হয়?",
    qen:"Why do arithmetic with words?",
    a:"কারণ embedding = গাণিতিক জগত। king - man + woman = queen। Analogies, clustering — সব vector math। যে গণনা করে, সে গভীর বোঝে। হিসাব — অর্থের গণনা।",
    aen:"Because embedding = mathematical world. king - man + woman = queen. Analogies, clustering — all vector math. One who calculates, understands deeply. Hisab — calculation of meaning."
  },
  story:`
<p class="scene-setting">চতুর্থ বিন্দু। সংখ্যার কক্ষ। কারিগর ফারহান একটা অদ্ভুত কাজ করছেন — শব্দ দিয়ে গাণিতিক হিসাব। "রাজা থেকে পুরুষ বাদ দাও, নারী যোগ করো।" ফল? "রানি।" "প্যারিস থেকে ফ্রান্স বাদ দাও, ইতালি যোগ করো।" ফল? "রোম।" "এটাই vector arithmetic," তিনি বললেন। "শব্দ দিয়ে গণনা। অর্থের জ্যামিতি।"</p>
<p class="scene-setting en">The fourth point. Arithmetic chamber. Craftsman Farhan does a strange task — arithmetic with words. "King minus man, add woman." Result? "Queen." "Paris minus France, add Italy." Result? "Rome." "This is vector arithmetic," he said. "Calculation with words. Geometry of meaning."</p>

<div class="dialogue">Semantic search বলেছিলেন — অর্থ দিয়ে খোঁজো। কিন্তু আমি বলি — অর্থ দিয়ে শুধু খোঁজা নয়, গণনাও করা যায়। king - man + woman = queen। এটাই vector arithmetic। Embedding = গাণিতিক জগত। যোগ, বিয়োগ, দিক — সব অর্থ বহন করে। যে গণনা করে, সে গভীর বোঝে।</div>
<div class="dialogue en">"Semantic search said — search by meaning. But I say — not just search, you can calculate with meaning. king - man + woman = queen. This is vector arithmetic. Embedding = mathematical world. Addition, subtraction, direction — all carry meaning. One who calculates, understands deeply."</div>`,
  story:`

<p class="scene-setting">The fourth point. Arithmetic chamber. A craftsman performs a strange task — arithmetic with words. "King minus man, add woman." Result? "Queen." "Paris minus France, add Italy." Result? "Rome." "This is vector arithmetic," he said. "Calculation with words. Geometry of meaning."</p>

<p class="scene-setting en">The fourth point. Arithmetic chamber. A craftsman performs a strange task — arithmetic with words. "King minus man, add woman." Result? "Queen." "Paris minus France, add Italy." Result? "Rome." "This is vector arithmetic," he said. "Calculation with words. Geometry of meaning."</p>

<div class="code-block">Vector Arithmetic — Math with Meaning:

VECTOR OPERATIONS:

১. ADDITION (combine meanings)
  vector(A) + vector(B) → combined meaning
  
  "Paris" + "France" → French capital concept
  "doctor" + "hospital" → medical profession concept
  
  Use: feature combination, multi-concept search

২. SUBTRACTION (remove meaning)
  vector(A) - vector(B) → "what makes A different from B?"
  
  "king" - "man" → "royalty" concept (gender removed)
  "Italy" - "France" → "Italian-ness" direction
  
  Use: concept isolation, analogy

৩. ANALOGY (the famous one!)
  A : B :: C : D
  → D = B - A + C
  
  king : queen :: man : ?
  → queen - king + man = ? 
  → ≈ "man" (but this is circular)
  
  Standard formula:
    D = vector(B) - vector(A) + vector(C)
    king - man + woman = queen ✓
    Paris - France + Italy = Rome ✓
    walking - walk + swim = swimming ✓
    fastest - fast + slow = slowest ✓

৪. DISTANCE (semantic similarity)
  distance(A, B) = how different?
  
  cosine_sim("cat", "dog") = ০.৭৫ (related, both animals)
  cosine_sim("cat", "car") = ০.১৫ (unrelated)
  cosine_sim("cat", "kitten") = ০.৮৯ (very similar)

CLUSTERING (grouping by meaning):

  K-Means on embeddings:
    → all documents → embeddings → cluster
    → documents in same cluster = similar topic
  
  Example:
    Docs about: ["RAG", "retrieval", "embedding", 
                 "fine-tuning", "LoRA", "quantization"]
    
    Clusters:
      Cluster ১: RAG, retrieval, embedding (retrieval topic)
      Cluster ২: fine-tuning, LoRA, quantization (training topic)
  
  Use: topic discovery, document organization

CLASSIFICATION (zero-shot!):

  No training data? Use embeddings!
  
  Approach:
    → embed each class label: "positive", "negative"
    → embed input text
    → nearest label = classification!
  
  Example:
    Input: "This movie was terrible"
    → embed → compare to:
      "positive review" (cos_sim: ০.২৫)
      "negative review" (cos_sim: ০.৮২)
    → classify as: NEGATIVE ✓
  
  → zero-shot classification!
  → no training needed
  → not perfect but great baseline

SEMANTIC SIMILARITY APPLICATIONS:

  Deduplication:
    → find near-duplicate documents
    → cos_sim > ০.৯৫ = likely duplicate
  
  Recommendation:
    → "users who liked X also liked Y"
    → embed items → recommend nearest
  
  Question matching:
    → "how do I train a model?" 
    → matches FAQ: "model training guide"
    → even though different words
  
  Paraphrase detection:
    → "what is your age?" ≈ "how old are you?"
    → high cosine similarity
  
  Entity resolution:
    → "NYC" ≈ "New York City" ≈ "The Big Apple"
    → same entity, different names

VECTOR VISUALIZATION:

  ৭৬৮ dims → can't visualize directly
  → reduce to ২D or ৩D for visualization
  
  t-SNE: preserves local structure (clusters)
  UMAP: preserves both local + global structure
  PCA: linear, fast, simple
  
  → plot embeddings to see semantic clusters!
  → great for debugging retrieval issues

BIAS IN EMBEDDINGS:

  Embeddings learn from data → data has bias
  
  Examples:
    doctor - man + woman → nurse (gender bias!)
    programmer - man + woman → homemaker (worse bias!)
  
  → embeddings reflect societal biases
  → must be aware, must debias
  → WEAT (Word Embedding Association Test)
  
  Mitigation:
    → debiasing algorithms (Bolukbasi et al.)
    → data balancing
    → audit for bias before deployment</div>

<div class="dialogue">হিসাব — calculation, computation, reckoning। কুরআনে আল্লাহ বলেন — "তোমাদের কাজের হিসাব হবে।" (৮৪:৮)। হিসাব = প্রতিটা কাজের গণনা। Vector arithmetic-ও হিসাব — অর্থের গণনা। শব্দ দিয়ে যোগ, বিয়োগ — অর্থের জ্যামিতিতে। যে গণনা করে, সে গভীর বোঝে। হিসাব — অর্থের গণনার গুণ।</div>
<div class="dialogue en">"Hisab — calculation, computation, reckoning. Allah says — 'You will be reckoned for your deeds.' (84:8). Hisab = counting every deed. Vector arithmetic too — calculation of meaning. Addition, subtraction with words — in the geometry of meaning. One who calculates, understands deeply. Hisab — the virtue of calculating meaning."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">ভেক্টর পাটিগণিত — king − man + woman = queen</text>
  <line x1="40" y1="200" x2="540" y2="200" stroke="#334155" stroke-width="1.5"/>
  <line x1="40" y1="200" x2="40" y2="45" stroke="#334155" stroke-width="1.5"/>
  <circle cx="40" cy="200" r="3" fill="#64748b"/>
  <line x1="40" y1="200" x2="160" y2="90" stroke="#22d3ee" stroke-width="2.5" marker-end="url(#arrEMB4a)"/>
  <text x="70" y="135" fill="#7dd3fc" font-size="9" font-weight="bold">king</text>
  <line x1="160" y1="90" x2="240" y2="170" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#arrEMB4b)"/>
  <text x="190" y="140" fill="#fcd34d" font-size="8">− man</text>
  <line x1="240" y1="170" x2="360" y2="80" stroke="#22c55e" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#arrEMB4c)"/>
  <text x="280" y="140" fill="#4ade80" font-size="8">+ woman</text>
  <circle cx="360" cy="80" r="6" fill="#a855f7" stroke="#c084fc" stroke-width="2"/>
  <text x="372" y="78" fill="#c084fc" font-size="9" font-weight="bold">queen ≈</text>
  <circle cx="430" cy="95" r="6" fill="#a855f7" stroke="#c084fc" stroke-width="2"/>
  <text x="442" y="93" fill="#c084fc" font-size="9">queen (আসল)</text>
  <line x1="366" y1="82" x2="424" y2="92" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="370" y="112" fill="#4ade80" font-size="7">≈ মিল!</text>
  <defs>
    <marker id="arrEMB4a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22d3ee"/></marker>
    <marker id="arrEMB4b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/></marker>
    <marker id="arrEMB4c" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22c55e"/></marker>
  </defs>
  <rect x="30" y="218" width="520" height="24" rx="5" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="290" y="234" text-anchor="middle" fill="#94a3b8" font-size="7">ভেক্টর যোগ-বিয়োগে অর্থ ধরা যায় — Paris − France + Italy ≈ Rome। অর্থের জ্যামিতিতে দিক ও দূরত্ব গুণ বহন করে।</text>
</svg>
</div>
<div class="svg-caption">ভেক্টর পাটিগণিতে অর্থ ধরা যায়। king থেকে man বাদ দিলে "রাজকীয়তা" দিক পাওয়া যায়, তাতে woman যোগ করলে queen-এর কাছে পৌঁছানো যায়। শব্দ দিয়ে যোগ-বিয়োগ — অর্থের জ্যামিতি।</div>`,
  senior:{
    title:"Vector Math — Practical Uses",
    body:`<p><strong>Analogies:</strong> king - man + woman = queen। Useful for concept manipulation।</p><p><strong>Clustering:</strong> K-means on embeddings → discover topics in unstructured docs।</p><p><strong>Zero-shot classification:</strong> Embed class labels + input → nearest label = prediction। No training needed!</p><p><strong>Deduplication:</strong> cos_sim > 0.95 = near-duplicate। Fast, language-independent।</p><p><strong>Bias check:</strong> Always test for gender/race bias: "doctor - man + woman = ?"। If biased, debias or use different model।</p>`
  }
});

// ══ DOOR 5: EMBEDDING FINE-TUNING ══
doors.push({
  num:5, icon:"🎯", color:"#6366f1", name:"পরিশীলনের কক্ষ",
  subtitle:"The Fine-tuning Chamber", tech:"Embedding Fine-tuning",
  spirit:"তাযকিয়া — পরিশুদ্ধি, উন্নয়ন",
  secret:"General embedding model ভালো, কিন্তু তোমার domain-এ সেরা নয়। Fine-tune করো — medical, legal, fashion — তোমার domain-এ বিশেষজ্ঞ। Contrastive learning, hard negatives mining, domain adaptation। তাযকিয়া — embedding পরিশুদ্ধ করা।",
  recall:{
    q:"পরিশীলনের কক্ষে কেন general model নয়, fine-tuned model?",
    qen:"Why fine-tuned, not general?",
    a:"কারণ general = সবার জন্য, কিন্তু কারো জন্য সেরা নয়। Fine-tune করো domain-এ। Medical, legal — বিশেষজ্ঞ। Contrastive learning। তাযকিয়া — embedding পরিশুদ্ধ করা।",
    aen:"Because general = for everyone, but best for no one. Fine-tune on domain. Medical, legal — specialized. Contrastive learning. Tazkiyah — purifying embeddings."
  },
  story:`
<p class="scene-setting">পঞ্চম বিন্দু। পরিশীলনের কক্ষ। কারিগর সালমা একটা সাধারণ মানচিত্র ধরে আছেন, তারপর বিশেষ চিহ্ন যোগ করছেন — চিকিৎসা কেন্দ্র, আইনি এলাকা, প্রযুক্তি অঞ্চল। "সাধারণ মানচিত্র ভালো," তিনি বললেন, "কিন্তু প্রতিটা এলাকায় বিশেষ চিহ্ন দরকার। Fine-tuning ঠিক তেমনি — general embedding ভালো, কিন্তু তোমার domain-এ বিশেষজ্ঞ করো।"</p>
<p class="scene-setting en">The fifth point. Fine-tuning chamber. Craftswoman Salma holds a general map, then adds special markers — medical centers, legal districts, tech zones. "General map is good," she said, "but each area needs special markers. Fine-tuning is exactly that — general embedding is good, but specialize for your domain."</p>

<div class="dialogue">Vector math কক্ষ বলেছিলেন — গণনা করো। কিন্তু আমি বলি — গণনা ভালো, কিন্তু embedding নিজে ভালো না হলে গণনা ভুল। Fine-tuning। General model → domain-specific। Medical embedding, legal embedding, fashion embedding — প্রতিটা domain-এ বিশেষজ্ঞ। তাযকিয়া — embedding পরিশুদ্ধ করা।</div>
<div class="dialogue en">"Vector math chamber said — calculate. But I say — calculation is good, but if the embedding itself isn't good, calculation is wrong. Fine-tuning. General model → domain-specific. Medical embedding, legal embedding, fashion embedding — specialize in each domain. Tazkiyah — purifying embeddings."</div>`,
  story:`

<p class="scene-setting">The fifth point. Fine-tuning chamber. A craftsman takes a general-purpose lens and polishes it for a specific wavelength. "The general lens sees everything," she said, "but nothing perfectly. Fine-tune it for your domain — medical, legal, technical — and suddenly everything becomes crystal clear." On the wall: training curves showing accuracy improvements from domain fine-tuning.</p>

<p class="scene-setting en">The fifth point. Fine-tuning chamber. A craftsman takes a general-purpose lens and polishes it for a specific wavelength. "The general lens sees everything," she said, "but nothing perfectly. Fine-tune it for your domain — medical, legal, technical — and suddenly everything becomes crystal clear." On the wall: training curves showing accuracy improvements from domain fine-tuning.</p>

<div class="code-block">Embedding Fine-tuning — Domain Specialization:

WHEN TO FINE-TUNE:

  General model good enough when:
    → general-purpose docs (web, news)
    → English, common domains
    → accuracy > ৮০% acceptable

  Fine-tune when:
    → domain-specific (medical, legal, code)
    → multilingual with specific language
    → accuracy < ৭০% with general model
    → special vocabulary (jargon, abbreviations)
    → production-critical retrieval

CONTRASTIVE LEARNING (the key method):

  Goal: pull similar items together, 
        push dissimilar apart
  
  Training triplets:
    (anchor, positive, negative)
    
    Anchor:   "diabetes treatment"
    Positive: "how to treat diabetes" (similar)
    Negative: "diabetes symptoms" (related but different!)
  
  Loss: InfoNCE / Triplet Loss
    → minimize distance(anchor, positive)
    → maximize distance(anchor, negative)

HARD NEGATIVE MINING:

  Easy negatives: "cooking recipe" (obviously different)
  Hard negatives: "diabetes symptoms" (related but wrong)
  
  → hard negatives teach the model FINER distinctions
  → "treatment" vs "symptoms" — both about diabetes
  
  Mining strategies:
    ১. BM২৫: retrieve similar but not exact matches
    ২. Cross-encoder: find high-similarity but wrong
    ৩. Random: sample from same domain, different topic
  
  → hard negatives = ৫-১৫% accuracy boost!

TRAINING DATA FOR EMBEDDING FINE-TUNE:

  Synthetic generation:
    → use GPT-৪ to generate (query, relevant_doc) pairs
    → "generate ১০০ questions about [domain]"
    → "for each question, write a relevant passage"
  
  From user logs:
    → search queries → clicked documents = positive pair
    → queries with no clicks = potential hard negative
  
  From existing data:
    → Q&A pairs, FAQ, support tickets
    → title → article body
    → question → answer

DOMAIN ADAPTATION EXAMPLE:

  Medical embedding fine-tune:
  
  Before (general BGE):
    Query: "myocardial infarction treatment"
    Top result: "heart disease overview" (too general)
    Accuracy: ৬৫%
  
  After (fine-tuned):
    Query: "myocardial infarction treatment"
    Top result: "acute MI treatment protocols" (precise!)
    Accuracy: ৮৯%
  
  → ২৪% improvement from fine-tuning!

TOOLS:
  
  SentenceTransformers:
    → training framework for embedding models
    → MultipleLosses, contrastive, triplet
    → easy fine-tuning
  
  FlagEmbedding (BGE):
    → fine-tune BGE models
    → hard negative mining built-in
  
  LlamaIndex:
    → fine-tune embeddings from your corpus
    → automated pipeline
  
  Custom:
    → PyTorch + InfoNCE loss
    → most control, most code

COST:
  Fine-tuning BGE-large:
    → ১০K pairs, A100 ১x, ~২ hours = ~$৬
    → ৫০K pairs, ~১০ hours = ~$৩০
  
  → much cheaper than fine-tuning an LLM!
  → high ROI for domain-specific retrieval

EVALUATION:
  → before/after on your domain eval set
  → Recall@k improvement
  → must have domain-specific eval set
  → don't use general benchmark (MTEB) for domain eval</div>

<div class="dialogue">তাযকিয়া — purification, refinement, improvement। কুরআনে আল্লাহ বলেন — "সফল সেই ব্যক্তি যে নিজেকে পরিশুদ্ধ করে।" (৯১:৯)। পরিশুদ্ধি = সাধারণ থেকে বিশেষ। Embedding fine-tuning-ও তাযকিয়া — general থেকে domain-specific। যে পরিশুদ্ধ করে, সে নিখুঁত। তাযকিয়া — embedding পরিশুদ্ধির গুণ।</div>
<div class="dialogue en">"Tazkiyah — purification, refinement, improvement. Allah says — 'Successful is the one who purifies themselves.' (91:9). Purification = from general to specific. Embedding fine-tuning too — from general to domain-specific. One who purifies, perfects. Tazkiyah — the virtue of embedding refinement."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">Contrastive Learning — কাছে টানো, দূরে ঠেলো</text>
  <circle cx="290" cy="120" r="7" fill="#22d3ee" stroke="#7dd3fc" stroke-width="2"/>
  <text x="298" y="118" fill="#7dd3fc" font-size="8" font-weight="bold">anchor</text>
  <text x="298" y="128" fill="#94a3b8" font-size="7">"diabetes treatment"</text>
  <circle cx="150" cy="70" r="6" fill="#22c55e" stroke="#4ade80" stroke-width="2"/>
  <text x="90" y="60" fill="#4ade80" font-size="8" font-weight="bold">positive ✓</text>
  <text x="60" y="72" fill="#94a3b8" font-size="7">"how to treat diabetes"</text>
  <line x1="155" y1="75" x2="283" y2="117" stroke="#22c55e" stroke-width="2" marker-end="url(#arrEMB5a)"/>
  <text x="180" y="88" fill="#4ade80" font-size="7">টানো ←</text>
  <circle cx="460" cy="170" r="6" fill="#ef4444" stroke="#fca5a5" stroke-width="2"/>
  <text x="470" y="168" fill="#fca5a5" font-size="8" font-weight="bold">negative ✗</text>
  <text x="470" y="180" fill="#94a3b8" font-size="7">"diabetes symptoms"</text>
  <line x1="453" y1="165" x2="297" y2="123" stroke="#ef4444" stroke-width="2" marker-end="url(#arrEMB5b)"/>
  <text x="360" y="155" fill="#fca5a5" font-size="7">→ ঠেলো</text>
  <defs>
    <marker id="arrEMB5a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22c55e"/></marker>
    <marker id="arrEMB5b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/></marker>
  </defs>
  <rect x="20" y="200" width="540" height="38" rx="5" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="290" y="216" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">Loss: minimize d(anchor, positive) · maximize d(anchor, negative)</text>
  <text x="290" y="230" text-anchor="middle" fill="#64748b" font-size="7">Hard negative (সম্পর্কিত কিন্তু ভুল) দিয়ে শিখলে model সূক্ষ্ম পার্থক্য বোঝে — ৫-১৫% উন্নতি।</text>
</svg>
</div>
<div class="svg-caption">Contrastive learning: anchor-এর মতো positive কাছে টানা হয়, negative দূরে ঠেলা হয়। Hard negative (যেমন "diabetes symptoms" — সম্পর্কিত কিন্তু ভুল) দিয়ে শিখলে model সূক্ষ্ম পার্থক্য বোঝে। এটাই fine-tuning-এর মূল।</div>`,
  senior:{
    title:"Fine-tune or Not? — Decision",
    body:`<p><strong>Don't fine-tune if:</strong> General model gives >৮০% Recall@৫। English general domain। Quick prototype।</p><p><strong>Fine-tune if:</strong> Domain-specific (medical/legal/code)। Recall@৫ < ৭০%। Production-critical। Special vocabulary।</p><p><strong>Quick recipe:</strong> ১০K (query, positive, negative) triplets → SentenceTransformers → BGE-large → train ২ hours on A100। ~$৬ cost। Test before/after।</p><p><strong>Hard negatives:</strong> Most important! ৫-১৫% accuracy boost from good hard negatives alone।</p>`
  }
});
