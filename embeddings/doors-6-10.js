// ════════════════════════════════════════
// অর্থের জ্যামিতি — DOORS 6-10
// Embeddings: Dimensions → Architecture
// ════════════════════════════════════════

// ══ DOOR 6: DIMENSIONALITY ══
doors.push({
  num:6, icon:"🔬", color:"#a5b4fc", name:"মাত্রিক কক্ষ",
  subtitle:"The Dimension Chamber", tech:"Dimensionality & Compression",
  spirit:"পরিমাণ — সঠিক পরিমাণ, সঠিক মাত্রা",
  secret:"৭৬৮ dim ভালো। ৩০৭২ dim আরও ভালো। কিন্তু বেশি dim = বেশি স্টোরেজ, ধীর সার্চ। Matryoshka embeddings: একটা model, একাধিক dim। ৩০৭২ dim থেকে ২৫৬ dim কেটে নাও — এখনও কাজ করে! সঠিক মাত্রা = সঠিক ভারসাম্য।",
  recall:{
    q:"মাত্রিক কক্ষে কেন একাধিক মাত্রা আছে?",
    qen:"Why multiple dimensions?",
    a:"কারণ বেশি dim = বেশি অর্থ কিন্তু বেশি খরচ। Matryoshka: এক model, একাধিক dim। ৩০৭২ থেকে ২৫৬ — কম খরচ, প্রায় একই ফল। সঠিক মাত্রা = সঠিক ভারসাম্য।",
    aen:"Because more dim = more meaning but more cost. Matryoshka: one model, multiple dims. 3072 to 256 — less cost, nearly same result. Right dimension = right balance."
  },
  story:`<p class="scene-setting">ষষ্ঠ বিন্দু। মাত্রিক কক্ষ। একটা দৃশ্যপট — একই ছবি একাধিক রেজোলিউশনে। উঁচু রেজোলিউশন: স্পষ্ট কিন্তু ভারী। নিচু রেজোলিউশন: ঝাপসা কিন্তু হালকা। "এটাই dimensionality," কারিগর ইদ্রিস বললেন। "৩০৭২ dim = উঁচু রেজোলিউশন। ২৫৬ dim = নিচু। কিন্তু মাঝে মাঝে নিচুই যথেষ্ট। Matryoshka — এক model, একাধিক রেজোলিউশন।"</p>
<p class="scene-setting en">The sixth point. Dimension chamber. A display — same image at multiple resolutions. High res: sharp but heavy. Low res: blurry but light. "This is dimensionality," Craftsman Idris said. "3072 dim = high resolution. 256 dim = low. But sometimes low is enough. Matryoshka — one model, multiple resolutions."</p>

<div class="dialogue">Fine-tuning বলেছিলেন — domain-specific করো। কিন্তু আমি বলি — domain-specific হলেও dimension গুরুত্বপূর্ণ। বেশি dim = বেশি স্টোরেজ, ধীর সার্চ। কম dim = কম নির্ভুল। সঠিক ভারসাম্য? Matryoshka embeddings — এক model থেকে যেকোনো dim কেটে নাও।</div>
<div class="dialogue en">"Fine-tuning said — make domain-specific. But I say — even domain-specific, dimension matters. More dim = more storage, slower search. Less dim = less accurate. Right balance? Matryoshka embeddings — cut any dimension from one model."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Deduplication:</strong> Near-identical docs all retrieved — wasted context. Fix: deduplicate with similarity threshold.</div></div>


<div class="code-block">Dimensionality — The Size-Quality Tradeoff:

DIMENSION COMPARISON:

  ┌──────────┬──────────┬────────────┬──────────┐
  │ Dims     │ Quality  │ Storage/M  │ Search   │
  │          │ (MTEB)   │ docs       │ Speed    │
  ├──────────┼──────────┼────────────┼──────────┤
  │ ৩৮৪      │ ~৬০%     │ ১.৫ GB     │ fastest  │
  │ ৭৬৮      │ ~৬৩%     │ ৩ GB       │ fast     │
  │ ১০২৪     │ ~৬৪%     │ ৪ GB       │ medium   │
  │ ১৫৩৬     │ ~৬৫%     │ ৬ GB       │ slower   │
  │ ৩০৭২     │ ~৬৫%     │ ১২ GB      │ slowest  │
  └──────────┴──────────┴────────────┴──────────┘

  Key insight:
    ৭৬৮ → ৩০৭২: quality +২% but storage ৪x!
    ৩৮৪ → ৭৬৮: quality +৩%, storage ২x — worth it
    ৭৬৮-১০২৪: sweet spot for most applications

DIMENSIONALITY REDUCTION:

১. PRINCIPAL COMPONENT ANALYSIS (PCA)
  → linear transformation
  → find most important directions
  → ৩০৭২ → ২৫৬ dim with ~৯৫% information retained
  → fast, simple, deterministic

২. MATRYOSHKA REPRESENTATIONS (OpenAI, ২০২৪)
  → train embedding so FIRST N dims are useful!
  → ৩০৭২ dim model → truncate to ২৫৬, ৫১২, ১০২৪
  → each truncation level is independently useful!
  → OpenAI text-embedding-৩: dimensions parameter
  
  embed("hello", dimensions=২৫৬) → ২৫৬ dim vector
  embed("hello", dimensions=১০২৪) → ১০২৪ dim vector
  embed("hello", dimensions=৩০৭২) → ৩০৭২ dim vector
  → all from SAME model!
  
  → store at ২৫৬ dim for speed
  → upgrade to ১০২৪ dim when quality needed

৩. PRODUCT QUANTIZATION (PQ)
  → compress vectors for storage
  → split ৭৬৮ dim into ৬৪ sub-vectors of ১২ dim
  → each sub-vector → ১ byte codebook index
  → ৭৬৮ × ৪ bytes = ৩০৭২ bytes → ৬৪ bytes!
  → ৪৮x compression!
  → slight accuracy loss (~৩-৫%)

DIMENSIONALITY VISUALIZATION:
  
  ৭৬৮ dim → can't see → reduce to ২D/৩D:
  
  t-SNE: local clusters preserved
    → good for seeing topic clusters
    → non-deterministic (different each run)
  
  UMAP: local + global preserved
    → better for overall structure
    → deterministic with seed
    → faster than t-SNE
  
  PCA: linear, fast, simple
    → good for quick look
    → misses non-linear structure
  
  Use case: visualize your corpus
    → embed all docs → UMAP → ২D plot
    → see clusters → discover topics!

WHY NOT JUST USE MAX DIMENSIONS?

  Storage cost:
    ১M docs × ৩০৭২ dim × ৪ bytes = ১২ GB just embeddings
    ১M docs × ৭৬৮ dim × ৪ bytes = ৩ GB (৪x less!)
  
  Search latency:
    ৩০৭২ dim cosine: ~২ms per query
    ৭৬৮ dim cosine: ~০.৫ms per query (৪x faster!)
  
  → diminishing returns above ১০২৪ dim
  → ৭৬৮-১০২৪ is optimal for most use cases</div>

<div class="dialogue">পরিমাণ — quantity, measure, proportion। কুরআনে আল্লাহ বলেন — "সবকিছু আমরা একটা নির্ধারিত পরিমাণে সৃষ্টি করেছি।" (৫৪:৪৯)। প্রতিটা জিনিসে সঠিক পরিমাণ। Embedding dimension-ও তেমনি — সঠিক পরিমাণ দরকার। বেশি নয়, কম নয়। যে সঠিক পরিমাণ জানে, সে সঠিক ভারসাম্য পায়।</div>
<div class="dialogue en">"Pariman — quantity, measure, proportion. Allah says — 'We created all things in determined measure.' (54:49). Right amount in everything. Embedding dimension too — right amount needed. Not too much, not too little. One who knows the right amount, finds the right balance."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">Sentence Embeddings — বাক্য থেকে ভেক্টর</text>
  <rect x="30" y="50" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="80" y="68" text-anchor="middle" fill="#7dd3fc" font-size="8">বাক্য</text>
  <text x="80" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">"আজ মাছ ধরছি"</text>
  <rect x="160" y="50" width="90" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="205" y="68" text-anchor="middle" fill="#c084fc" font-size="8">Transformer</text>
  <text x="205" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">BERT / BGE</text>
  <rect x="280" y="50" width="90" height="40" rx="6" fill="#1e3a5f" stroke="#22c55e" stroke-width="1.5"/>
  <text x="325" y="68" text-anchor="middle" fill="#4ade80" font-size="8">৭৬৮-dim ভেক্টর</text>
  <text x="325" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">[০.২, -০.৫, ...]</text>
  <line x1="130" y1="70" x2="160" y2="70" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB6a)"/>
  <line x1="250" y1="70" x2="280" y2="70" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB6a)"/>
  <defs><marker id="arrEMB6a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
  <text x="410" y="50" fill="#fcd34d" font-size="8" font-weight="bold">ভেক্টর স্পেসে বাক্যের অবস্থান</text>
  <circle cx="430" cy="140" r="5" fill="#22d3ee"/>
  <text x="440" y="143" fill="#7dd3fc" font-size="10">মাছ ধরা</text>
  <circle cx="460" cy="130" r="5" fill="#22d3ee"/>
  <text x="470" y="133" fill="#7dd3fc" font-size="10">নদীতে মাছ</text>
  <circle cx="395" cy="155" r="5" fill="#a855f7"/>
  <text x="345" y="158" fill="#c084fc" font-size="10">রান্না করা</text>
  <circle cx="520" cy="120" r="5" fill="#fbbf24"/>
  <text x="490" y="112" fill="#fcd34d" font-size="10">প্রোগ্রামিং</text>
  <circle cx="450" cy="145" r="5" fill="#22d3ee"/>
  <text x="408" y="175" fill="#94a3b8" font-size="10">একই অর্থের বাক্য কাছে, ভিন্ন অর্থের দূরে</text>
  <text x="30" y="225" fill="#64748b" font-size="10">Sentence-BERT: সম্পূর্ণ বাক্য → একটি ভেক্টর। টোকেন-লেভেল নয়, বাক্য-লেভেল উপস্থাপন। সেমান্টিক সার্চের ভিত্তি।</text>
</svg>
</div>
<div class="svg-caption">বাক্য থেকে একটি ভেক্টর — Sentence-BERT পুরো বাক্যকে ৭৬৮-মাত্রিক স্পেসের একটি বিন্দুতে রূপান্তর করে। একই অর্থের বাক্য কাছাকাছি, ভিন্ন অর্থের দূরে।</div>`,
  senior:{
    title:"Dimension Choice — Quick Guide",
    body:`<p><strong>Default:</strong> ৭৬৮-১০২৪ dim — sweet spot for quality/cost।</p><p><strong>High traffic:</strong> ৩৮৪ dim (all-MiniLM) — ৪x faster search, ৮০% of quality।</p><p><strong>Maximum quality:</strong> ১৫৩৬-৩০৭২ dim — diminishing returns above ১০২৪।</p><p><strong>Matryoshka (OpenAI embed-৩):</strong> Start at ২৫৬, upgrade when needed — best of both worlds।</p><p><strong>PQ compression:</strong> For massive corpora (১০M+ docs) — ৪৮x storage savings with ~৩-৫% accuracy loss।</p>`
  }
});

// ══ DOOR 7: EMBEDDING EVALUATION ══
doors.push({
  num:7, icon:"📊", color:"#6366f1", name:"মূল্যায়নের কক্ষ",
  subtitle:"The Evaluation Chamber", tech:"Embedding Evaluation",
  spirit:"মুহাসাবা — যাচাই, মূল্যায়ন",
  secret:"Embedding ভালো? কীভাবে জানবে? MTEB benchmark, STS tasks, retrieval eval, domain-specific eval। শুধু model বেছে নেওয়া নয় — যাচাই করো। যে যাচাই করে, সে নিশ্চিত। মুহাসাবা — embedding মূল্যায়ন।",
  recall:{
    q:"মূল্যায়নের কক্ষে কেন প্রতিটা embedding মাপা হয়?",
    qen:"Why measure every embedding?",
    a:"কারণ ভালো embedding ছাড়া সব ভাঙে। MTEB, STS, retrieval eval — যাচাই করো। যে যাচাই করে, সে নিশ্চিত। মুহাসাবা — embedding মূল্যায়ন।",
    aen:"Because without good embedding everything breaks. MTEB, STS, retrieval eval — verify. One who verifies, is certain. Muhasabah — embedding evaluation."
  },
  story:`<p class="scene-setting">সপ্তম বিন্দু। মূল্যায়নের কক্ষ। প্রতিটা embedding model পরীক্ষা হচ্ছে — retrieval, classification, similarity। "ভালো বলে মনে হচ্ছে" নয়, সংখ্যা দাও। কারিগর তামিম বললেন — "আমি প্রতিটা model মাপি। MTEB score, Recall@k, STS correlation। সংখ্যা ছাড়া সিদ্ধান্ত = অনুমান। মুহাসাবা — embedding মূল্যায়ন।"</p>
<p class="scene-setting en">The seventh point. Evaluation chamber. Each embedding model being tested — retrieval, classification, similarity. Not "seems good", give numbers. Craftsman Tamim said — "I measure each model. MTEB score, Recall@k, STS correlation. Without numbers, decisions = guessing. Muhasabah — embedding evaluation."</p>

<div class="dialogue">Dimension কক্ষ বলেছিলেন — সঠিক মাত্রা বেছে নাও। কিন্তু আমি বলি — মাত্রা বেছে নিলেও embedding ভালো কি না যাচাই করো। MTEB benchmark, domain eval, STS correlation। সংখ্যা ছাড়া সব অনুমান। মুহাসাবা — প্রতিটা embedding মূল্যায়ন।</div>
<div class="dialogue en">"The dimension chamber said — choose right dimensions. But I say — even after choosing, verify if embedding is good. MTEB benchmark, domain eval, STS correlation. Without numbers, everything is guessing. Muhasabah — evaluate every embedding."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Wrong Domain Model:</strong> General embedding model on legal text — 40% worse. Fix: fine-tune on domain data.</div></div>


<div class="code-block">Embedding Evaluation — Measuring Quality:

MTEB (Massive Text Embedding Benchmark):
  
  The standard benchmark for embedding models
  → ৮ task categories:
    ১. Retrieval (information retrieval, search)
    ২. STS (Semantic Textual Similarity)
    ৩. Classification (zero-shot, few-shot)
    ৪. Clustering (topic grouping)
    ৫. Reranking (precision refinement)
    ৬. Pair Classification (paraphrase, NLI)
    ৭. Summarization (summary quality)
    ৮. Bitext Mining (multilingual alignment)
  
  → ৫৮ datasets total
  → comprehensive evaluation
  
  MTEB Leaderboard (top ২০২৪):
    E৫-mistral-৭B: ৬৬.৬ avg
    GTE-large-en-v১.৫: ৬৫.৭
    BGE-large-en-v১.৫: ৬৪.২
    OpenAI text-embed-৩-large: ৬৪.৬
    Cohere embed-English-v৩: ৬৩.৯

STS (Semantic Textual Similarity):
  
  Two sentences → similarity score (০-৫)
  
  "A man is playing guitar" 
  "A person plays a musical instrument"
  → human: ৪.২ (very similar)
  → model: cos_sim → should be high (~০.৮৫)
  
  "A man is playing guitar"
  "A cat sits on a mat"
  → human: ০.০ (unrelated)
  → model: cos_sim → should be low (~০.১৫)
  
  Metric: Spearman correlation (model vs human)
  → higher = better alignment with human judgment

RETRIEVAL EVALUATION (most important for RAG):
  
  Build eval set:
    {query: "how to train a model",
     relevant_docs: ["doc_১২", "doc_৪৫", ...]}
  
  Metrics:
    Recall@k: correct doc in top-k?
      Recall@৫ = ৮৫% → good
      Recall@১০ = ৯০% → target
    
    NDCG@k: ranking quality
      relevant docs at top → high NDCG
    
    MRR: Mean Reciprocal Rank
      position of first correct doc
  
  → YOUR domain eval set matters most!
  → MTEB = general sense
  → domain eval = reality check

ZERO-SHOT CLASSIFICATION:
  
  Embed labels → embed input → nearest label
  → accuracy on labeled test set
  → tests discriminative power

EVALUATION PIPELINE:

  ১. Choose candidate models (৩-৫)
  ২. Run MTEB for general ranking
  ৩. Run YOUR domain eval set
  ৪. Compare Recall@k, NDCG
  ৫. Pick best for YOUR domain
  ৬. (MTEB winner ≠ always best for your domain!)

COMMON PITFALLS:
  ❌ Relying only on MTEB (general ≠ your domain)
  ❌ No domain eval set
  ❌ Not testing asymmetric encoding
  ❌ Testing with same prefix for query+doc
  ❌ Not testing with YOUR actual queries</div>

<div class="dialogue">মুহাসাবা — self-examination, evaluation। কুরআনে আল্লাহ বলেন — "তোমরা নিজেদের যাচাই করো।" Embedding evaluation-ও মুহাসাবা — প্রতিটা model যাচাই। সংখ্যা দাও, অনুমান নয়। যে যাচাই করে, সে নিশ্চিত। যে অনুমান করে, সে বিপদে।</div>
<div class="dialogue en">"Muhasabah — self-examination, evaluation. Allah says — 'Examine yourselves.' Embedding evaluation too — verify each model. Give numbers, not guesses. One who verifies, is certain. One who guesses, is in danger."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">CLIP — টেক্সট ও ছবি এক স্পেসে</text>
  <rect x="30" y="50" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="80" y="68" text-anchor="middle" fill="#7dd3fc" font-size="9">🖼️ ছবি</text>
  <text x="80" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">image input</text>
  <rect x="30" y="150" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22c55e" stroke-width="1.5"/>
  <text x="80" y="168" text-anchor="middle" fill="#4ade80" font-size="9">📝 টেক্সট</text>
  <text x="80" y="180" text-anchor="middle" fill="#94a3b8" font-size="10">"a cat on a mat"</text>
  <rect x="160" y="50" width="90" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="205" y="68" text-anchor="middle" fill="#c084fc" font-size="8">Image Encoder</text>
  <text x="205" y="80" text-anchor="middle" fill="#94a3b8" font-size="10">ViT</text>
  <rect x="160" y="150" width="90" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="205" y="168" text-anchor="middle" fill="#c084fc" font-size="8">Text Encoder</text>
  <text x="205" y="180" text-anchor="middle" fill="#94a3b8" font-size="10">Transformer</text>
  <line x1="130" y1="70" x2="160" y2="70" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB7)"/>
  <line x1="130" y1="170" x2="160" y2="170" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB7)"/>
  <defs><marker id="arrEMB7" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
  <circle cx="320" cy="120" r="5" fill="#22d3ee"/>
  <text x="328" y="115" fill="#7dd3fc" font-size="10">🖼️ cat img</text>
  <circle cx="345" cy="108" r="5" fill="#22c55e"/>
  <text x="353" y="103" fill="#4ade80" font-size="10">"cat" text</text>
  <circle cx="440" cy="160" r="5" fill="#fbbf24"/>
  <text x="450" y="163" fill="#fcd34d" font-size="10">"car" text</text>
  <circle cx="465" cy="155" r="5" fill="#a855f7"/>
  <text x="475" y="158" fill="#c084fc" font-size="10">🖼️ car img</text>
  <line x1="250" y1="70" x2="318" y2="118" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrEMB7)"/>
  <line x1="250" y1="170" x2="343" y2="110" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrEMB7)"/>
  <text x="320" y="88" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">এক ভেক্টর স্পেস</text>
  <line x1="325" y1="118" x2="343" y2="110" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="330" y="135" fill="#4ade80" font-size="10">cos ≈ ০.৯২</text>
  <rect x="30" y="215" width="520" height="28" rx="5" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="290" y="232" text-anchor="middle" fill="#94a3b8" font-size="8">একই স্পেসে থাকলে — ছবি দিয়ে টেক্সট খোঁজো, টেক্সট দিয়ে ছবি খোঁজো। Cross-modal search!</text>
</svg>
</div>
<div class="svg-caption">CLIP ছবি ও টেক্সটকে একই ভেক্টর স্পেসে রাখে। cat-এর ছবি ও "cat" টেক্সট কাছাকাছি — তাই টেক্সট দিয়ে ছবি, ছবি দিয়ে টেক্সট খোঁজা যায়।</div>`,
  senior:{
    title:"Eval Pipeline — Embedding Models",
    body:`<p><strong>Step ১:</strong> Shortlist ৩-৫ models from MTEB leaderboard (BGE, E5, OpenAI, GTE, Cohere)।</p><p><strong>Step ২:</strong> Build domain eval set: ৫০+ (query, relevant_docs) pairs from YOUR domain।</p><p><strong>Step ৩:</strong> For each model: embed docs → index → query → measure Recall@৫, NDCG@১০।</p><p><strong>Step ৪:</strong> Test asymmetric encoding (query vs doc prefix)।</p><p><strong>Step ৫:</strong> Pick best for YOUR domain — MTEB winner may NOT be best for you!</p>`
  }
});

// ══ DOOR 8: EMBEDDING APPLICATIONS ══
doors.push({
  num:8, icon:"🎯", color:"#a5b4fc", name:"প্রয়োগের কক্ষ",
  subtitle:"The Application Chamber", tech:"Embedding Use Cases",
  spirit:"তাতবি'আ — প্রয়োগ, কার্যকর করা",
  secret:"Embedding শুধু RAG-এর জন্য নয়। Classification, clustering, recommendation, deduplication, anomaly detection, visualization — সব ক্ষেত্রে। Embedding = AI-এর সুইস আর্মি নাইফ। যে প্রয়োগ করে, সে শক্তি পায়।",
  recall:{
    q:"প্রয়োগের কক্ষে কেন একাধিক কাজ এক tool দিয়ে?",
    qen:"Why multiple tasks with one tool?",
    a:"কারণ embedding = সুইস আর্মি নাইফ। Classification, clustering, recommendation, deduplication — সব। যে প্রয়োগ করে, সে শক্তি পায়। তাতবি'আ — প্রয়োগ।",
    aen:"Because embedding = Swiss army knife. Classification, clustering, recommendation, deduplication — all. One who applies, gains power. Tatbi'a — application."
  },
  story:`<p class="scene-setting">অষ্টম বিন্দু। প্রয়োগের কক্ষ। একটা সুইস আর্মি নাইফ — একটা tool, অনেক কাজ। ছুরি, কাঁচি, কর্কস্ক্রু, প্লায়ার। কারিগর হাসিব বললেন — "embedding ঠিক এটাই — এক model, অসংখ্য কাজ। RAG, classification, clustering, recommendation — সব। যে প্রয়োগ করে, সে শক্তি পায়।"</p>
<p class="scene-setting en">The eighth point. Application chamber. A Swiss army knife — one tool, many jobs. Knife, scissors, corkscrew, pliers. Craftsman Hasib said — "embedding is exactly this — one model, countless tasks. RAG, classification, clustering, recommendation — all. One who applies, gains power."</p>

<div class="dialogue">Embedding eval বলেছিলেন — যাচাই করো। কিন্তু আমি বলি — যাচাই করলে কী করবে? প্রয়োগ করো। Embedding শুধু RAG-এর জন্য নয়। Classification, clustering, recommendation, deduplication, anomaly detection — সব। Embedding = সবচেয়ে বহুমুখী AI tool।</div>
<div class="dialogue en">"Embedding eval said — verify. But I say — after verifying, what next? Apply. Embeddings aren't just for RAG. Classification, clustering, recommendation, deduplication, anomaly detection — all. Embedding = the most versatile AI tool."</div>`,
  story:`

<p class="scene-setting">The eighth point. Application chamber. Worktables each showing a different application — a search box, a recommendation panel, a deduplication tool, a clustering visualization. "One embedding model powers all of these," Craftsman Hasib said. "Search, recommendations, duplicate detection, topic discovery, classification — all from the same vectors. That's why embeddings are the Swiss army knife of AI."</p>

<p class="scene-setting en">The eighth point. Application chamber. Worktables each showing a different application — a search box, a recommendation panel, a deduplication tool, a clustering visualization. "One embedding model powers all of these," Craftsman Hasib said. "Search, recommendations, duplicate detection, topic discovery, classification — all from the same vectors. That's why embeddings are the Swiss army knife of AI."</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Batch Size Causing OOM:</strong> Embedded 10K documents in one batch — GPU OOM. Fix: batch in groups of 32-256.</div></div>


<div class="code-block">Embedding Applications — Beyond RAG:

TOP ১০ EMBEDDING APPLICATIONS:

১. SEMANTIC SEARCH (covered Door ৩)
  → query → embedding → find similar docs
  → RAG foundation
  → enterprise search, knowledge base

২. CLASSIFICATION (zero-shot)
  → embed labels + input → nearest label
  → no training data needed!
  → spam detection, sentiment, intent

৩. CLUSTERING / TOPIC DISCOVERY
  → embed all docs → K-means → clusters
  → discover hidden topics in unstructured data
  → customer feedback themes, news topics

৪. DEDUPLICATION
  → cos_sim > ০.৯৫ = near-duplicate
  → clean datasets, find near-identical content
  → multilingual: same meaning, different language

৫. RECOMMENDATION
  → embed items → users who liked A also liked B (nearest)
  → content-based filtering
  → "similar products", "similar articles"

৬. ANOMALY DETECTION
  → outlier embeddings = anomalies
  → fraud detection, content moderation
  → unusual documents flagged

৭. SEMANTIC ROUTING
  → embed possible routes/intents
  → user query → nearest intent → route
  → chatbot intent detection without training

৮. DATA LINEAGE / PROVENANCE
  → track document similarity over time
  → detect data drift, version comparison
  → "has this document significantly changed?"

৯. KNOWLEDGE GRAPH CONSTRUCTION
  → extract entities → embed → find relationships
  → similar entities connected
  → automatic graph building

১০. VISUALIZATION / EXPLORATION
  → UMAP/t-SNE → ২D plot of document corpus
  → see topics, gaps, clusters
  → data exploration tool

MULTIMODAL EMBEDDINGS (CLIP):
  → same space: text + images!
  → "find photos of cats" → search image DB
  → image → text description
  → cross-modal search

IMPLEMENTATION PATTERNS:

  Pattern ১: Embed once, use many
    → embed corpus once → power search + 
      classification + clustering + dedup
    → one embedding, infinite applications

  Pattern ২: Real-time embedding
    → user input → embed → instant search/route
    → low latency requirement
    → use small fast model (BGE-small)

  Pattern ৩: Batch embedding pipeline
    → nightly batch: embed new docs → update index
    → async, no latency requirement
    → use large accurate model (BGE-large)

  Pattern ৪: Cascaded embeddings
    → small model for initial filter (fast)
    → large model for final ranking (accurate)
    → best speed/quality balance</div>

<div class="dialogue">তাতবি'আ — application, implementation, putting into practice। কুরআনে আল্লাহ বলেন — "নিশ্চয় আল্লাহ তাদের ভালোবাসেন যারা কাজ করে।" কাজ = প্রয়োগ। Embedding application-ও তাতবি'আ — জ্ঞান থেকে কাজে। যে প্রয়োগ করে, সে শক্তি পায়। যে শুধু জানে, সে দর্শক।</div>
<div class="dialogue en">"Tatbi'a — application, implementation, putting into practice. Allah says — 'Allah loves those who work.' Work = application. Embedding application too — from knowledge to action. One who applies, gains power. One who only knows, is a spectator."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">Vector Database — ভেক্টরের ভাণ্ডার</text>
  <rect x="30" y="50" width="90" height="35" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="75" y="72" text-anchor="middle" fill="#7dd3fc" font-size="8">ডকুমেন্ট</text>
  <rect x="140" y="50" width="90" height="35" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="185" y="72" text-anchor="middle" fill="#c084fc" font-size="8">Embed Model</text>
  <line x1="120" y1="67" x2="140" y2="67" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB8)"/>
  <defs><marker id="arrEMB8" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
  <rect x="250" y="40" width="120" height="55" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="310" y="60" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">Vector DB</text>
  <text x="310" y="74" text-anchor="middle" fill="#94a3b8" font-size="10">৭৬৮-dim ভেক্টর</text>
  <text x="310" y="86" text-anchor="middle" fill="#94a3b8" font-size="10">+ metadata</text>
  <line x1="230" y1="67" x2="250" y2="67" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB8)"/>
  <rect x="30" y="125" width="75" height="28" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="67" y="143" text-anchor="middle" fill="#7dd3fc" font-size="10">Qdrant</text>
  <rect x="115" y="125" width="75" height="28" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="152" y="143" text-anchor="middle" fill="#7dd3fc" font-size="10">Pinecone</text>
  <rect x="200" y="125" width="75" height="28" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="237" y="143" text-anchor="middle" fill="#7dd3fc" font-size="10">Weaviate</text>
  <rect x="285" y="125" width="75" height="28" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="322" y="143" text-anchor="middle" fill="#7dd3fc" font-size="10">Milvus</text>
  <rect x="370" y="125" width="75" height="28" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="407" y="143" text-anchor="middle" fill="#7dd3fc" font-size="10">pgvector</text>
  <rect x="455" y="125" width="95" height="28" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="502" y="143" text-anchor="middle" fill="#7dd3fc" font-size="10">Chroma</text>
  <rect x="400" y="40" width="150" height="55" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="475" y="60" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">ANN Index</text>
  <text x="475" y="74" text-anchor="middle" fill="#94a3b8" font-size="10">HNSW · IVF · PQ</text>
  <text x="475" y="86" text-anchor="middle" fill="#94a3b8" font-size="10">১M docs → ~৫ms</text>
  <line x1="370" y1="67" x2="400" y2="67" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB8)"/>
  <rect x="30" y="180" width="520" height="50" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="50" y="200" fill="#fcd34d" font-size="8" font-weight="bold">সার্চ ফ্লো:</text>
  <text x="50" y="215" fill="#7dd3fc" font-size="10">query → embed → ANN search → cosine sim top-k → rerank → ফলাফল</text>
  <text x="50" y="227" fill="#64748b" font-size="10">hybrid (dense + BM২৫) সবচেয়ে ভালো। metadata filter দিয়ে সীমাবদ্ধ করো।</text>
</svg>
</div>
<div class="svg-caption">ভেক্টর ডেটাবেস — ডকুমেন্ট ভেক্টর সংরক্ষণ ও দ্রুত সার্চের ভাণ্ডার। Qdrant, Pinecone, Milvus — HNSW ইনডেক্স দিয়ে ১M ডকুমেন্টে ~৫ms-এ সন্ধান। Hybrid search সবচেয়ে কার্যকর।</div>`,
  senior:{
    title:"Pick Your Application — Start Today",
    body:`<p><strong>Easiest:</strong> Semantic search — embed corpus, query by meaning. Immediate value।</p><p><strong>High-ROI:</strong> Zero-shot classification — no training, embed labels, classify by nearest।</p><p><strong>Data quality:</strong> Deduplication — find near-duplicates, clean your dataset।</p><strong>Discovery:</strong> Clustering + UMAP visualization — see your data's structure।</p><p><strong>Pro tip:</strong> Embed corpus ONCE. Power search + classification + dedup + clustering from same vectors. One model, many applications = maximum ROI।</p>`
  }
});

// ══ DOOR 9: EMBEDDING CHALLENGES ══
doors.push({
  num:9, icon:"⚠️", color:"#6366f1", name:"সীমাবদ্ধতার কক্ষ",
  subtitle:"The Limits Chamber", tech:"Embedding Challenges & Limits",
  spirit:"তাওয়াদু — বিনয়, সীমা জানা",
  secret:"Embedding শক্তিশালী, কিন্তু সীমিত। Bias, domain gap, multilingual, out-of-vocabulary, temporal drift, anisotropy। প্রতিটা চ্যালেঞ্জ একটা সীমা। যে সীমা জানে, সে সতর্ক। তাওয়াদু — বিনয়, সীমা জানা।",
  recall:{
    q:"সীমাবদ্ধতার কক্ষে কেন সব সীমা লেখা?",
    qen:"Why are all limits written?",
    a:"কারণ embedding শক্তিশালী কিন্তু সীমিত। Bias, domain gap, multilingual, drift। যে সীমা জানে, সে সতর্ক। তাওয়াদু — বিনয়, সীমা জানা।",
    aen:"Because embedding is powerful but limited. Bias, domain gap, multilingual, drift. One who knows limits, is cautious. Tawadu — humility, knowing limits."
  },
  story:`<p class="scene-setting">নবম বিন্দু। সীমাবদ্ধতার কক্ষ। দেয়ালে লেখা — প্রতিটা দুর্বলতা। Bias. Domain gap. Anisotropy. Temporal drift। "embedding সব পারে না," পর্যবেক্ষক আমিনা বললেন। "সীমা আছে। যে সীমা জানে, সে সতর্ক। যে অজ্ঞ, সে বিপদে। তাওয়াদু — বিনয়।"</p>
<p class="scene-setting en">The ninth point. Limits chamber. Written on walls — each weakness. Bias. Domain gap. Anisotropy. Temporal drift. "Embeddings can't do everything," Observer Amina said. "Limits exist. One who knows limits, is cautious. One who is ignorant, is in danger. Tawadu — humility."</p>

<div class="dialogue">Application কক্ষ বলেছিলেন — প্রয়োগ করো। কিন্তু আমি বলি — প্রয়োগ করার আগে সীমা জানো। Embedding শক্তিশালী কিন্তু অসম্পূর্ণ। Bias, domain gap, multilingual সমস্যা — প্রতিটা সীমা। যে সীমা জানে, সে ভালো বানায়।</div>
<div class="dialogue en">"The application chamber said — apply. But I say — before applying, know limits. Embeddings are powerful but incomplete. Bias, domain gap, multilingual issues — each a limit. One who knows limits, builds well."</div>`,
  story:`

<p class="scene-setting">The ninth point. Limits chamber. On each wall: a different limitation — Bias, Domain Gap, Anisotropy, Temporal Drift, Multilingual Issues, Out-of-Domain. "Embeddings are powerful," Observer Amina said, "but not perfect. Each limitation is a boundary you must respect. Knowing limits is not weakness — it's wisdom."</p>

<p class="scene-setting en">The ninth point. Limits chamber. On each wall: a different limitation — Bias, Domain Gap, Anisotropy, Temporal Drift, Multilingual Issues, Out-of-Domain. "Embeddings are powerful," Observer Amina said, "but not perfect. Each limitation is a boundary you must respect. Knowing limits is not weakness — it's wisdom."</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Mixed Precision Error:</strong> Embeddings in FP16, stored in FP32 — index mismatch. Fix: consistent precision.</div></div>


<div class="code-block">Embedding Challenges — Know Your Limits:

TOP ৭ CHALLENGES:

১. BIAS
  Embeddings learn from biased data:
    "doctor - man + woman" → "nurse" (gender bias)
    "programmer" closer to "man" than "woman"
  
  Impact: biased search, classification, recommendation
  Mitigation: debiasing, data audit, fairness testing

২. DOMAIN GAP
  General model on medical/legal/technical:
    → poor performance (৩০-৫০% accuracy drop)
    → jargon not understood
    → wrong similarity judgments
  
  Mitigation: domain fine-tuning (Door ৫)

৩. MULTILINGUAL CHALLENGES
  English-trained model on Bengali:
    → poor embeddings
    → meaning lost across languages
  
  Mitigation: multilingual models (BGE multilingual)
  → BUT: quality varies by language
  → English best, low-resource languages worst

৪. ANISOTROPY
  Embeddings cluster in a narrow cone:
    → all vectors point roughly same direction
    → cosine similarities ALL high (০.৭+)
    → hard to distinguish relevant from irrelevant
  
  Mitigation: normalization, whitening, contrastive training

৫. TEMPORAL DRIFT
  Meaning changes over time:
    → "cloud" (২০০০: weather) vs (২০২৪: computing)
    → "COVID" didn't exist in ২০১৯ embeddings
    → old model → outdated meanings
  
  Mitigation: retrain/update embeddings periodically

৬. OUT-OF-DOMAIN
  Model trained on web → tested on your domain:
    → unfamiliar vocabulary → poor embeddings
    → abbreviation expansion fails
    → entity names poorly represented
  
  Mitigation: fine-tune, domain-specific model

৭. EVALUATION GAP
  MTEB score high ≠ good for YOUR domain:
    → benchmark contamination
    → domain mismatch
    → "best on MTEB" may be worst for you
  
  Mitigation: always build YOUR OWN domain eval set

THE FUNDAMENTAL LIMIT:
  Embeddings are LOSSY COMPRESSION
  → ৭৬৮ numbers can't capture ALL meaning
  → nuance lost, ambiguity flattened
  → "bank" (money) and "bank" (river) merged
  
  → embeddings are ONE TOOL, not THE solution
  → combine with BM২৫, cross-encoder, LLM</div>

<div class="dialogue">তাওয়াদু — humility, modesty। নবীজি (সা) বলেছেন — "যার অন্তরে সরিষা পরিমাণ অহংকার আছে, সে জান্নাতে যাবে না।" Embedding-এর সাথেও তাওয়াদু — সীমা জানা। embedding সব পারে না। যে সীমা জানে, সে সতর্ক ইঞ্জিনিয়ার। যে অহংকার করে, সে ভুল করে।</div>
<div class="dialogue en">"Tawadu — humility, modesty. The Prophet (pbuh) said — 'No one with even a mustard seed of arrogance enters Paradise.' With embeddings too, tawadu — knowing limits. Embeddings can't do everything. One who knows limits, is a cautious engineer. One who is arrogant, errs."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">Anisotropy — ভেক্টর সব এক দিকে জমা</text>
  <line x1="40" y1="200" x2="540" y2="200" stroke="#334155" stroke-width="1.5"/>
  <line x1="40" y1="200" x2="40" y2="45" stroke="#334155" stroke-width="1.5"/>
  <circle cx="40" cy="200" r="3" fill="#64748b"/>
  <line x1="40" y1="200" x2="430" y2="75" stroke="#475569" stroke-width="1" stroke-dasharray="2,3"/>
  <line x1="40" y1="200" x2="440" y2="80" stroke="#475569" stroke-width="1" stroke-dasharray="2,3"/>
  <line x1="40" y1="200" x2="420" y2="68" stroke="#475569" stroke-width="1" stroke-dasharray="2,3"/>
  <line x1="40" y1="200" x2="450" y2="85" stroke="#475569" stroke-width="1" stroke-dasharray="2,3"/>
  <line x1="40" y1="200" x2="425" y2="72" stroke="#475569" stroke-width="1" stroke-dasharray="2,3"/>
  <circle cx="430" cy="75" r="5" fill="#ef4444"/>
  <text x="438" y="70" fill="#fca5a5" font-size="8">"doctor" cos≈০.৮২</text>
  <circle cx="440" cy="80" r="5" fill="#fbbf24"/>
  <text x="448" y="92" fill="#fcd34d" font-size="8">"pizza" cos≈০.৭৯</text>
  <circle cx="420" cy="68" r="5" fill="#22d3ee"/>
  <text x="345" y="58" fill="#7dd3fc" font-size="8">"river" cos≈০.৮১</text>
  <circle cx="450" cy="85" r="5" fill="#a855f7"/>
  <text x="458" y="104" fill="#c084fc" font-size="8">"code" cos≈০.৭৭</text>
  <circle cx="425" cy="72" r="5" fill="#22c55e"/>
  <text x="338" y="74" fill="#4ade80" font-size="8">"music" cos≈০.৮০</text>
  <path d="M 60 150 A 200 200 0 0 1 470 78" fill="none" stroke="#ef4444" stroke-width="1.5"/>
  <text x="180" y="145" fill="#fca5a5" font-size="8" font-weight="bold">সংকীর্ণ শঙ্কু</text>
  <rect x="30" y="218" width="520" height="24" rx="5" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="290" y="234" text-anchor="middle" fill="#94a3b8" font-size="10">সব ভেক্টর এক দিকে — সব cosine similarity উঁচু (০.৭+)। সম্পর্কিত ও অসম্পর্কিত আলাদা করা কঠিন। সমাধান: normalization, whitening।</text>
</svg>
</div>
<div class="svg-caption">Anisotropy — সব ভেক্টর একটি সংকীর্ণ শঙ্কুতে জমা হয়, ফলে সব cosine similarity উঁচু (০.৭+)। সম্পর্কিত ও অসম্পর্কিত আলাদা করা কঠিন। এটাই embedding-এর একটি লুকানো সীমা — সতর্কতার সাথে ব্যবহার করো।</div>`,
  senior:{
    title:"Challenge Mitigation — Quick Fixes",
    body:`<p><strong>Bias:</strong> Test with WEAT। Debias if needed। Audit search results for demographic fairness।</p><p><strong>Domain gap:</strong> Fine-tune on domain data (Door ৫)। ২০%+ accuracy boost typical।</p><p><strong>Multilingual:</strong> Use BGE-multilingual বা Cohere embed-multilingual। Test per-language quality।</p><p><strong>Anisotropy:</strong> Normalize embeddings। Use whitening transform।</p><p><strong>Temporal:</strong> Retrain embeddings every ৬-১২ months। Track concept drift।</p><p><strong>Evaluation:</strong> Build YOUR domain eval set। Don't trust MTEB alone।</p>`
  }
});

// ══ DOOR 10: SYNTHESIS ══
doors.push({
  num:10, icon:"🌌", color:"#6366f1", name:"সমন্বয়ের জ্যামিতি",
  subtitle:"The Cosmic Synthesis", tech:"Complete Embedding Architecture",
  spirit:"মাআরিফুল আসমাওয়াল আরদ — সব কিছুর জ্ঞান",
  secret:"নয়টি বিন্দু পেরিয়েছ। Foundations, models, search, math, fine-tuning, dimensions, evaluation, applications, challenges। সব একসাথে = complete embedding mastery। শব্দ থেকে সংখ্যা, সংখ্যা থেকে অর্থ, অর্থ থেকে জ্ঞান। এটাই অর্থের জ্যামিতি — AI-এর সবচেয়ে সুন্দর গাণিতিক ধারণা।",
  recall:{
    q:"সমন্বয়ের জ্যামিতিতে কেন সব একসাথে?",
    qen:"Why everything together?",
    a:"কারণ বিচ্ছিন্ন জ্ঞান = অসম্পূর্ণ। নয়টি বিন্দু একসাথে = complete embedding mastery। শব্দ → সংখ্যা → অর্থ → জ্ঞান। মাআরিফুল আসমাওয়াল আরদ।",
    aen:"Because isolated knowledge = incomplete. Nine points together = complete embedding mastery. Words → numbers → meaning → knowledge. Ma'rif-ul Asmaw wal Ard."
  },
  story:`<p class="scene-setting">দশম বিন্দু। শেষ। স্থপতি ইদ্রিস একটা বিশাল মানচিত্র ধরে আছেন — নয়টি বিন্দু, একসাথে সংযুক্ত। "তুমি নয় বিন্দু পেরিয়েছ," তিনি বললেন। "এখন দেখো — সব একসাথে। একটা সম্পূর্ণ জ্যামিতি। শব্দ থেকে সংখ্যা, সংখ্যা থেকে অর্থ, অর্থ থেকে জ্ঞান। এটাই অর্থের জ্যামিতি — সবচেয়ে সুন্দর গাণিতিক ধারণা।"</p>
<p class="scene-setting en">The tenth point. The last. Architect Idris holds a vast map — nine points, connected together. "You've passed nine points," he said. "Now see — all together. One complete geometry. Words to numbers, numbers to meaning, meaning to knowledge. This is the geometry of meaning — the most beautiful mathematical concept."</p>

<div class="dialogue">নয়টি বিন্দু পেরিয়েছ। জ্যামিতি বলেছিলেন, অর্থের জ্যামিতি। মডেল বলেছিলেন, model নির্বাচন। অনুসন্ধান বলেছিলেন, semantic search। সংখ্যা বলেছিলেন, vector math। পরিশীলন বলেছিলেন, fine-tuning। মাত্রিক বলেছিলেন, dimensionality। মূল্যায়ন বলেছিলেন, evaluation। প্রয়োগ বলেছিলেন, applications। সীমা বলেছিলেন, challenges। এখন — সব একসাথে।</div>
<div class="dialogue en">"You've passed nine points. Geometry said, geometry of meaning. Model said, model selection. Search said, semantic search. Arithmetic said, vector math. Refinement said, fine-tuning. Dimension said, dimensionality. Evaluation said, evaluation. Application said, applications. Limits said, challenges. Now — all together."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Query-Document Asymmetry:</strong> Used document embeddings for queries — poor retrieval. Fix: use instruction-tuned embeddings.</div></div>


<div class="code-block">Complete Embedding Architecture:

┌──────────────────────────────────────────────────┐
│ COMPLETE EMBEDDING STACK                          │
├──────────────────────────────────────────────────┤
│                                                   │
│  LAYER ১: MODEL SELECTION (Door ২)              │
│  ├── Domain: general → BGE-large-en-v১.৫        │
│  ├── Domain-specific → fine-tuned BGE            │
│  ├── Multilingual → BGE-multilingual             │
│  └── API → OpenAI text-embed-৩-large             │
│                                                   │
│  LAYER ২: ENCODING (Door ১)                     │
│  ├── Asymmetric: query prefix vs doc prefix      │
│  ├── Chunking: ২৫৬-৫১২ tokens per chunk          │
│  └── Batch encoding for speed                    │
│                                                   │
│  LAYER ৩: DIMENSIONALITY (Door ৬)              │
│  ├── Standard: ৭৬৮-১০২৪ dim                     │
│  ├── Compressed: Matryoshka (২৫৬-৫১২)           │
│  └── PQ for massive scale                        │
│                                                   │
│  LAYER ৪: STORAGE (vector DB)                   │
│  ├── Qdrant: hybrid, fast, production             │
│  ├── HNSW index for ANN                          │
│  └── Metadata: source, page, date                │
│                                                   │
│  LAYER ৫: SEARCH (Door ৩)                       │
│  ├── Dense: semantic vector search               │
│  ├── Sparse: BM২৫ keyword                        │
│  ├── RRF fusion: combine both                    │
│  └── Cross-encoder reranking (Door ৩)           │
│                                                   │
│  LAYER ৬: APPLICATIONS (Door ৮)                │
│  ├── Semantic search (RAG)                       │
│  ├── Classification (zero-shot)                  │
│  ├── Clustering (topic discovery)                │
│  ├── Deduplication                               │
│  └── Recommendation                              │
│                                                   │
│  LAYER ৭: EVALUATION (Door ৭)                  │
│  ├── MTEB: general benchmark                     │
│  ├── Domain eval set: ৫০+ pairs                  │
│  ├── Recall@k, NDCG tracking                     │
│  └── Continuous monitoring                        │
│                                                   │
│  LAYER ৮: OPTIMIZATION (Doors ৫,৬)            │
│  ├── Fine-tuning: domain adaptation              │
│  ├── Hard negative mining                        │
│  └── Dimension compression                        │
│                                                   │
│  LAYER ৯: SAFETY (Door ৯)                       │
│  ├── Bias testing (WEAT)                          │
│  ├── Domain gap awareness                        │
│  └── Temporal drift monitoring                   │
│                                                   │
└──────────────────────────────────────────────────┘

TECH STACK:

  ┌─────────────┬──────────────────────────────┐
  │ Component   │ Tool                         │
  ├─────────────┼──────────────────────────────┤
  │ Embedding   │ BGE-large-en-v১.৫ (open)     │
  │ Vector DB   │ Qdrant (hybrid)              │
  │ Reranker    │ BGE-Reranker-v২             │
  │ Framework   │ LlamaIndex / LangChain       │
  │ Fine-tune   │ SentenceTransformers         │
  │ Eval        │ MTEB + custom domain set     │
  │ Viz         │ UMAP / t-SNE                 │
  └─────────────┴──────────────────────────────┘

PERFORMANCE TARGETS:
  Recall@৫: > ৮৫%
  NDCG@১০: > ০.৮০
  Search latency: < ৫০ms (ANN)
  Rerank latency: < ১০০ms (top-২০)
  Encoding cost: ~$০.০২/M tokens (OpenAI)

THE EMBEDDING MINDSET:
  → every piece of text = a point in space
  → similar texts = nearby points
  → search = find nearby points
  → classify = find nearest label point
  → cluster = group nearby points
  → meaning = geometry
  
  → this is the foundation of modern AI
  → RAG, search, classification — all built here</div>

<div class="verse">"তিনি শিখিয়েছেন কলমের মাধ্যমে। শিখিয়েছেন মানুষকে যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>Embedding হলো কলমের গাণিতিক রূপ — শব্দকে সংখ্যায়, সংখ্যাকে জ্যামিতিতে, জ্যামিতিকে অর্থে। যে এই জ্যামিতি বোঝে, সে AI-এর ভিত্তি বোঝে। অর্থের জ্যামিতি — সবচেয়ে সুন্দর গাণিতিক ধারণা।</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="8"/>
  <text x="290" y="22" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">সম্পূর্ণ Embedding Architecture — নয়টি স্তর</text>
  <rect x="30" y="40" width="120" height="32" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="90" y="60" text-anchor="middle" fill="#7dd3fc" font-size="8">১. Model</text>
  <rect x="30" y="78" width="120" height="32" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="90" y="98" text-anchor="middle" fill="#7dd3fc" font-size="8">২. Encoding</text>
  <rect x="30" y="116" width="120" height="32" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="90" y="136" text-anchor="middle" fill="#7dd3fc" font-size="8">৩. Dimensions</text>
  <rect x="30" y="154" width="120" height="32" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="90" y="174" text-anchor="middle" fill="#7dd3fc" font-size="8">৪. Vector DB</text>
  <line x1="150" y1="56" x2="180" y2="56" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB10a)"/>
  <line x1="150" y1="94" x2="180" y2="94" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB10a)"/>
  <line x1="150" y1="132" x2="180" y2="132" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB10a)"/>
  <line x1="150" y1="170" x2="180" y2="170" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB10a)"/>
  <rect x="185" y="38" width="110" height="152" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="240" y="58" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">৫. Search</text>
  <text x="240" y="74" text-anchor="middle" fill="#94a3b8" font-size="10">dense + BM২৫</text>
  <text x="240" y="88" text-anchor="middle" fill="#94a3b8" font-size="10">+ rerank</text>
  <text x="240" y="110" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">৬. Applications</text>
  <text x="240" y="126" text-anchor="middle" fill="#94a3b8" font-size="10">RAG · classify</text>
  <text x="240" y="140" text-anchor="middle" fill="#94a3b8" font-size="10">cluster · dedup</text>
  <text x="240" y="162" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">৭. Evaluation</text>
  <text x="240" y="178" text-anchor="middle" fill="#94a3b8" font-size="10">MTEB + domain</text>
  <line x1="295" y1="114" x2="335" y2="114" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEMB10a)"/>
  <defs><marker id="arrEMB10a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
  <rect x="340" y="55" width="100" height="32" rx="5" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="390" y="75" text-anchor="middle" fill="#c084fc" font-size="8">৮. Fine-tune</text>
  <rect x="340" y="93" width="100" height="32" rx="5" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="390" y="113" text-anchor="middle" fill="#c084fc" font-size="8">৯. Safety</text>
  <circle cx="490" cy="114" r="30" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
  <text x="490" y="110" text-anchor="middle" fill="#fcd34d" font-size="16">🌌</text>
  <text x="490" y="128" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">অর্থ</text>
  <text x="490" y="138" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">= জ্যামিতি</text>
  <rect x="30" y="200" width="520" height="40" rx="5" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="290" y="216" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">শব্দ → সংখ্যা → অর্থ → জ্ঞান</text>
  <text x="290" y="232" text-anchor="middle" fill="#64748b" font-size="10">নয়টি স্তর একসাথে = complete embedding mastery। এটাই অর্থের জ্যামিতি — AI-এর সবচেয়ে সুন্দর গাণিতিক ধারণা।</text>
</svg>
</div>
<div class="svg-caption">সম্পূর্ণ embedding architecture — নয়টি স্তর একসাথে। Model, encoding, dimensions, vector DB, search, applications, evaluation, fine-tuning, safety। শব্দ থেকে সংখ্যা, সংখ্যা থেকে অর্থ, অর্থ থেকে জ্ঞান — অর্থের জ্যামিতি।</div>

<div class="secret-box"><div class="label">দশম বিন্দু — সমন্বয়</div><div class="text">🌌 Embeddings = Foundations + Models + Search + Math + Fine-tuning + Dimensions + Evaluation + Applications + Challenges।<br><small>শব্দ → সংখ্যা → অর্থ → জ্ঞান। এটাই অর্থের জ্যামিতি — AI-এর সবচেয়ে সুন্দর ধারণা।</small></div></div>`
});
