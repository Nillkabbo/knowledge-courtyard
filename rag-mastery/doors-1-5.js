// ════════════════════════════════════════
// জ্ঞানের কুয়ো — DOORS 1-5
// RAG Mastery: Ingestion → Query Transform
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: DOCUMENT INGESTION ══
doors.push({
  num:1, icon:"📚", color:"#38bdf8", name:"পাণ্ডুলিপি কক্ষ",
  subtitle:"The Manuscript Chamber", tech:"Document Ingestion Pipeline",
  spirit:"তাহকিক — সত্যিকারের যাচাই",
  secret:"RAG শুরু হয় LLM দিয়ে নয় — ডকুমেন্ট দিয়ে। ভুল ডকুমেন্ট = ভুল উত্তর। PDF, HTML, DOCX, প্রতিটা ফরম্যাটের নিজস্ব চ্যালেঞ্জ। OCR, table extraction, metadata — ingestion হলো RAG-এর ভিত্তি। ভিত্তি দুর্বল হলে সব ভাঙে।",
  recall:{
    q:"পাণ্ডুলিপি কক্ষে কেন প্রতিটি পাণ্ডুলিপি আলাদাভাবে যাচাই করা হয়?",
    qen:"Why is each manuscript verified separately in the manuscript chamber?",
    a:"কারণ প্রতিটি ফরম্যাট আলাদা — PDF আলাদা, HTML আলাদা, ছবি আলাদা। ভুল পড়লে ভুল তথ্য। ingestion-এ ভুল হলে পুরো RAG ভুল। তাহকিক — সত্যিকারের যাচাই প্রতিটি স্তরে।",
    aen:"Because each format differs — PDF, HTML, images. Wrong reading = wrong info. Wrong ingestion = wrong RAG. Tahqiq — true verification at each layer."
  },
  story:`
<p class="scene-setting">প্রথম স্তর। একটা বিশাল পাণ্ডুলিপি কক্ষ। দেয়ালে তাকে তাকে পুথি — কেউ পাথরে খোদাই, কেউ পার্চমেন্ট, কেউ পাপিরাস। কেউ ছবি, কেউ টেবিল, কেউ সূত্র। পাণ্ডুলিপি কক্ষের রক্ষক আব্দুর রহমান প্রতিটি পুথি আলাদাভাবে যাচাই করেন। "প্রতিটা ফরম্যাট আলাদা," তিনি বললেন। "একই পদ্ধতিতে সব পড়লে ভুল হবে।"</p>
<p class="scene-setting en">The first layer. A vast manuscript chamber. Shelves of texts — some stone-carved, some parchment, some papyrus. Some images, some tables, some formulas. Keeper Abdur Rahman verifies each separately. "Each format is different," he said. "Reading all with one method will err."</p>

<div class="dialogue">Context Engineering বইয়ে তুমি শিখেছ — context-এ কী রাখবে। কিন্তু আমি বলি — context-এ যা রাখবে, সেটা কোথা থেকে এলো? ডকুমেন্ট থেকে। কিন্তু ডকুমেন্ট নোংরা — PDF টেবিল ভাঙে, HTML ট্যাগ থাকে, ছবিতে টেক্সট লুকানো। Ingestion ছাড়া RAG অসম্ভব।</div>
<div class="dialogue en">"In the Context Engineering book you learned — what to keep in context. But I say — what you keep, where did it come from? Documents. But documents are messy — PDF tables break, HTML has tags, images hide text. Without ingestion, RAG is impossible."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrRAG1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="30" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">RAG পাইপলাইন প্রবাহ</text>
  <rect x="20" y="95" width="92" height="58" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="66" y="120" text-anchor="middle" fill="#7dd3fc" font-size="9">ডকুমেন্ট</text>
  <text x="66" y="135" text-anchor="middle" fill="#7dd3fc" font-size="8">PDF/HTML</text>
  <rect x="136" y="95" width="92" height="58" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="182" y="120" text-anchor="middle" fill="#7dd3fc" font-size="9">পার্স ও ক্লিন</text>
  <text x="182" y="135" text-anchor="middle" fill="#7dd3fc" font-size="8">Extract</text>
  <rect x="252" y="95" width="92" height="58" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="298" y="120" text-anchor="middle" fill="#4ade80" font-size="9">চাঙ্কিং</text>
  <text x="298" y="135" text-anchor="middle" fill="#4ade80" font-size="8">৫১২ tok</text>
  <rect x="368" y="95" width="92" height="58" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="414" y="120" text-anchor="middle" fill="#4ade80" font-size="9">এম্বেড</text>
  <text x="414" y="135" text-anchor="middle" fill="#4ade80" font-size="8">Embedding</text>
  <rect x="468" y="95" width="92" height="58" rx="8" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="514" y="120" text-anchor="middle" fill="#c084fc" font-size="9">ভেক্টর DB</text>
  <text x="514" y="135" text-anchor="middle" fill="#c084fc" font-size="8">HNSW</text>
  <line x1="112" y1="124" x2="134" y2="124" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG1)"/>
  <line x1="228" y1="124" x2="250" y2="124" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG1)"/>
  <line x1="344" y1="124" x2="366" y2="124" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG1)"/>
  <line x1="460" y1="124" x2="466" y2="124" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG1)"/>
  <text x="290" y="205" text-anchor="middle" fill="#fbbf24" font-size="9">⬓ মেটাডেটা: source · page · section · date — প্রতিটা চাঙ্কের সাথে</text>
</svg>
</div>
<div class="svg-caption">RAG পাইপলাইন — ডকুমেন্ট থেকে ভেক্টর ডেটাবেস পর্যন্ত পাঁচটি ধাপ</div>

<div class="code-block">Document Ingestion — RAG-এর ভিত্তি:

FORMAT-SPECIFIC CHALLENGES:

  PDF:
    ✅ সবচেয়ে সাধারণ — রিপোর্ট, paper, contract
    ❌ টেবিল ভাঙে — column alignment হারায়
    ❌ Multi-column layout — পড়ার ক্রম গোলমাল
    ❌ ছবির টেক্সট — OCR লাগে
    Tools: PyMuPDF, pdfplumber, unstructured.io, LlamaParse

  HTML:
    ✅ স্ট্রাকচার্ড — tags, headings, links
    ❌ Boilerplate — nav, footer, ads মিশে যায়
    ❌ Dynamic content — JS-rendered টেক্সট মিস
    Tools: BeautifulSoup, Trafilatura, readability-lxml

  DOCX:
    ✅ স্ট্রাকচার্ড — headings, styles, tables
    ❌ Tracked changes কনফিউজিং
    ❌ Embedded objects — ছবি, charts
    Tools: python-docx, mammoth, unstructured

  SCANNED IMAGES:
    ❌ টেক্সট ছবিতে — OCR লাগে
    ❌ হাতের লেখা কঠিন
    ❌ গুণমান কম — noise, skew
    Tools: Tesseract, AWS Textract, Google Document AI

  CODE:
    ✅ স্ট্রাকচার্ড — functions, classes
    ❌ Syntax = noise যদি ভুল parse
    Tools: tree-sitter, AST-based parsing

  AUDIO/VIDEO (advanced):
    → Whisper (OpenAI) speech-to-text
    → তারপর text RAG pipeline

UNIVERSAL INGESTION PIPELINE:

  ┌────────────────────────────────────────┐
  │ ১. LOAD — ফাইল পডো                     │
  │   PDF, HTML, DOCX, image → raw bytes   │
  ├────────────────────────────────────────┤
  │ ২. EXTRACT — টেক্সট বের করো             │
  │   Format-specific parser               │
  │   টেবিল, ছবি, সূত্র আলাদা               │
  ├────────────────────────────────────────┤
  │ ৩. CLEAN — গোলমাল দূর করো               │
  │   Boilerplate সরাও                      │
  │   Encoding fix (UTF-8)                 │
  │   Whitespace normalize                 │
  ├────────────────────────────────────────┤
  │ ৪. STRUCTURE — কাঠামো চিনো              │
  │   Headers, sections, lists, tables     │
  │   H1/H2/H3 → hierarchy                 │
  ├────────────────────────────────────────┤
  │ ৫. METADATA — ট্যাগ দাও                  │
  │   source, page, section, date, author  │
  │   → citation ও filtering-এ লাগবে       │
  ├────────────────────────────────────────┤
  │ ৬. CHUNK — টুকরোয় ভাঙো                  │
  │   (Context Engineering Door 3)          │
  ├────────────────────────────────────────┤
  │ ৭. EMBED — ভেক্টর বানাও                  │
  │   প্রতিটি chunk → embedding model       │
  ├────────────────────────────────────────┤
  │ ৮. STORE — vector DB-তে রাখো            │
  │   Pinecone, Qdrant, Weaviate            │
  └────────────────────────────────────────┘

PRODUCTION TOOLS (2024-2025):
  Unstructured.io → universal parser, ২৫+ formats
  LlamaParse → LLM-powered, tables/charts ভালো
  Apache Tika → classic, broad format support
  Marker → PDF → Markdown, open-source
  Docling → IBM, fast PDF parsing</div>

<div class="dialogue">তাহকিক — সত্যিকারের যাচাই, গবেষণা। কুরআনে আল্লাহ বলেন — "যদি কোনো ফাসিক তোমাদের কোনো খবর আনে, তবে যাচাই করো।" (৪৯:৬)। RAG-এর ingestion হলো সেই যাচাই — ডকুমেন্ট ঠিকমতো পড়ো, ফরম্যাট বুঝে পড়ো, ভুল তথ্য বাদ দাও। যাচাই ছাড়া RAG = জলের কুয়োয় বিষ।</div>
<div class="dialogue en">"Tahqiq — true verification, research. Allah says — 'If a transgressor brings you news, verify it.' (49:6). RAG's ingestion is that verification — read documents correctly, understand the format, discard wrong information. Without verification, RAG = poison in the water well."</div>`,
  senior:{
    title:"Ingestion Checklist — প্রোডাকশনে",
    body:`<p><strong>PDF টেবিল:</strong> PyMuPDF বা LlamaParse দিয়ে টেবিল আলাদা করো। টেবিল হারালে RAG সংখ্যাত্মক প্রশ্নে ভুল করে।</p><p><strong>Boilerplate:</strong> HTML থেকে nav/footer/ads বাদ দাও। Trafilatura বা readability ব্যবহার করো।</p><p><strong>OCR quality:</strong> স্ক্যান কোয়ালিটি কম হলে Tesseract ভুল করে। Google Document AI বা AWS Textract উন্নত।</p><p><strong>Metadata:</strong> প্রতিটা chunk-এ source + page + section দাও। citation ও debugging-এ অপরিহার্য।</p>`
  }
});

// ══ DOOR 2: INDEXING ══
doors.push({
  num:2, icon:"🗂️", color:"#5b9eff", name:"সূচক নির্মাতার কক্ষ",
  subtitle:"The Index Builder's Chamber", tech:"Indexing & Vector DB",
  spirit:"নিযাম — সুশৃঙ্খল বিন্যাস",
  secret:"Embedding একটা বিন্দু। কিন্তু কোটি বিন্দুর মধ্যে সঠিকটা খুঁজতে হলে সূচক লাগে। HNSW, IVF, PQ — এগুলো কোটি ভেক্টরে মিলিসেকেন্ডে সার্চ করায়। সূচক ছাড়া vector DB = ধীর গোলমাল।",
  recall:{
    q:"সূচক নির্মাতা কেন সব বই এক জায়গায় নয়, সূচক দিয়ে সাজান?",
    qen:"Why does the index builder organize books by index, not in one pile?",
    a:"কারণ সব বই এক স্তূপে রাখলে খোঁজা অসম্ভব। সূচক দিয়ে সাজালে সেকেন্ডে পাওয়া যায়। Vector DB-ও তেমনি — HNSW/IVF index ছাড়া কোটি ভেক্টরে সার্চ মিনিটে। index সহ মিলিসেকেন্ডে।",
    aen:"Because all books in one pile = impossible to search. Indexed = found in seconds. Vector DB too — without HNSW/IVF, searching millions of vectors takes minutes. With index, milliseconds."
  },
  story:`
<p class="scene-setting">দ্বিতীয় স্তর। একটা বিশাল গ্রন্থাগার। কিন্তু বই এলোমেলো নয় — প্রতিটা তাকে নিয়মে সাজানো। সূচক নির্মাতা সাবরিনা একটা বড় বই ধরে আছেন — তাতে প্রতিটা বইয়ের অবস্থান। "এক মিলিয়ন বই," তিনি বললেন। "কিন্তু কোনোটা খুঁজতে এক সেকেন্ডও লাগে না। কারণ সূচক আছে।"</p>
<p class="scene-setting en">The second layer. A vast library. But books aren't scattered — each shelf organized by rule. Index builder Sabrina holds a large book — each book's location in it. "One million books," she said. "But finding any takes less than a second. Because there's an index."</p>

<div class="dialogue">পাণ্ডুলিপি কক্ষ বলেছিলেন — ডকুমেন্ট ঠিকমতো পড়ো। কিন্তু আমি বলি — পড়লেই হবে না, সাজাতে হবে। কোটি ডকুমেন্ট, কোটি embedding। ইউজারের প্রশ্ন এলে — কোনটা প্রাসঙ্গিক? সব চেক করলে মিনিট লাগে। সূচক দিয়ে মিলিসেকেন্ড।</div>
<div class="dialogue en">"The manuscript chamber said — read documents correctly. But I say — reading isn't enough, must organize. Millions of documents, millions of embeddings. User asks — which is relevant? Checking all takes minutes. With index, milliseconds."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="30" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">ভেক্টর রিট্রিভাল — top-k নিকটতম</text>
  <circle cx="120" cy="110" r="4" fill="#475569"/><circle cx="160" cy="80" r="4" fill="#475569"/>
  <circle cx="200" cy="150" r="4" fill="#475569"/><circle cx="90" cy="160" r="4" fill="#475569"/>
  <circle cx="250" cy="90" r="4" fill="#475569"/><circle cx="300" cy="170" r="4" fill="#475569"/>
  <circle cx="350" cy="100" r="4" fill="#475569"/><circle cx="400" cy="160" r="4" fill="#475569"/>
  <circle cx="440" cy="80" r="4" fill="#475569"/><circle cx="470" cy="140" r="4" fill="#475569"/>
  <text x="270" y="125" text-anchor="middle" fill="#fbbf24" font-size="20">★</text>
  <text x="270" y="148" text-anchor="middle" fill="#fcd34d" font-size="8">query</text>
  <circle cx="250" cy="90" r="9" fill="none" stroke="#22c55e" stroke-width="2"/>
  <circle cx="300" cy="170" r="9" fill="none" stroke="#22c55e" stroke-width="2"/>
  <circle cx="350" cy="100" r="9" fill="none" stroke="#22c55e" stroke-width="2"/>
  <line x1="268" y1="115" x2="252" y2="95" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="272" y1="118" x2="298" y2="162" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="275" y1="115" x2="346" y2="104" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="490" y="120" text-anchor="end" fill="#4ade80" font-size="9">top-3 নিকটতম</text>
  <text x="490" y="135" text-anchor="end" fill="#94a3b8" font-size="8">বাকিগুলো: দূরে</text>
  <text x="290" y="205" text-anchor="middle" fill="#7dd3fc" font-size="9">cosine similarity → সবচেয়ে কাছের k-টা চাঙ্ক নির্বাচন</text>
</svg>
</div>
<div class="svg-caption">ভেক্টর রিট্রিভাল — কোটি বিন্দুর মধ্যে top-k নিকটতম প্রতিবেশী</div>

<div class="code-block">Vector Indexing — Finding Needles in Haystacks:

THE PROBLEM:
  ১,০০০,০০০ documents → ১M embeddings (each ৭৬৮-৩০৭২ dim)
  Query embedding → find top-k nearest
  
  Brute force (flat): compare with all ১M
  → ~১ second per query
  → ১০০০ QPS = impossible
  
  With index: ~৫ms per query
  → ২০০,০০০ QPS possible

INDEX ALGORITHMS:

১. HNSW (Hierarchical Navigable Small World)
  → সবচেয়ে জনপ্রিয়, সবচেয়ে দ্রুত
  → multi-layer graph — উপরে কম node, নিচে বেশি
  → query উপর থেকে নিচে নামে — দ্রুত approximate
  → recall: ৯৫-৯৮%
  → build time: মাঝারি
  → memory: বেশি (graph topology রাখতে হয়)
  
  Pinecone, Qdrant, Weaviate, Milvus — সব ডিফল্ট HNSW

২. IVF (Inverted File Index)
  → vector space কে cluster-এ ভাগ
  → query শুধু নিকটতম cluster-এ খোঁজে
  → recall: ৯০-৯৫%
  → build time: দ্রুত (k-means clustering)
  → memory: কম
  
  IVF + PQ (Product Quantization):
    → PQ = ভেক্টর কম্প্রেস (৭৬৮ dim → ৬৪ bytes)
    → ১০x কম মেমরি, ৯০% recall

৩. FLAT (Brute Force)
  → সবের সাথে compare — exact, ধীর
  → recall: ১০০%
  → use: ছোট dataset (< ১০০K)

VECTOR DATABASE COMPARISON:

  ┌────────────┬──────────┬──────────┬──────────┐
  │ DB         │ Type     │ Strength │ Best For │
  ├────────────┼──────────┼──────────┼──────────┤
  │ Pinecone   │ Managed  │ সহজ, fast│ Prototyping│
  │ Qdrant     │ OSS+Cloud│ Hybrid,  │ Production│
  │            │          │ Rust fast│          │
  │ Weaviate   │ OSS+Cloud│ Hybrid   │ Multi-modal│
  │ Milvus     │ OSS      │ Scale    │ Enterprise│
  │ Chroma     │ OSS      │ সহজ      │ Dev/prototyping│
  │ pgvector   │ Extension│ SQL      │ Existing PG│
  └────────────┴──────────┴──────────┴──────────┘

INDEX OPTIMIZATION:

  Filter then Search (pre-filtering):
    metadata: {source: "contract.pdf", page: {"$gt": 10}}
    → শুধু ফিল্টার করা subset-এ search
    → দ্রুত, সঠিক
  
  Search then Filter (post-filtering):
    → পুরো space search → metadata filter
    → কিছু filter-এ ০ ফল
  
  Hybrid: Pinecone/Qdrant support 
    → single-stage filtered search

REINDEXING:
  যখন embedding model বদলাও → সব পুনরায় embed
  → expensive! তাই model সঠিক বেছে নাও প্রথমে
  → versioning: v1 ও v2 index একসাথে রাখো transition-এ</div>

<div class="dialogue">নিযাম — system, order, arrangement। কুরআনে আল্লাহ বলেন — "যিনি সবকিছু সৃষ্টি করেছেন এবং একটি নির্দিষ্ট নিয়মে সাজিয়েছেন।" (৮৭:২)। প্রকৃতিতে সব কিছু সুশৃঙ্খল — গ্রহ, পরমাণু, কোষ। Vector index-ও তেমনি — সুশৃঙ্খল বিন্যাস ছাড়া অসংখ্য ভেক্টরে হারিয়ে যাওয়া নিশ্চিত।</div>
<div class="dialogue en">"Nizam — system, order, arrangement. Allah says — 'Who created all things and arranged them in due proportion.' (87:2). In nature, everything is ordered — planets, atoms, cells. Vector index too — without orderly arrangement, getting lost in millions of vectors is certain."</div>`,
  senior:{
    title:"Vector DB নির্বাচন — তোমার প্রজেক্টে",
    body:`<p><strong>Prototyping:</strong> Chroma — সহজ, local, ফ্রি।</p><p><strong>Production:</strong> Qdrant — fast, hybrid, open বা managed।</p><p><strong>Enterprise:</strong> Milvus — billion-scale, কিন্তু operations জটিল।</p><p><strong>Existing PostgreSQL:</strong> pgvector — SQL query দিয়ে vector search।</p><p><strong>Managed:</strong> Pinecone — কোনো ops নেই, কিন্তু vendor lock-in।</p>`
  }
});

// ══ DOOR 3: NAIVE RAG ══
doors.push({
  num:3, icon:"🧪", color:"#52c41a", name:"সরল কূপের কক্ষ",
  subtitle:"The Simple Well Chamber", tech:"Naive RAG & Its Limits",
  spirit:"বেসিক — সরল শুরু",
  secret:"Naive RAG = embed করো → search করো → LLM-কে দাও। সহজ, দ্রুত। কিন্তু ৬০% নির্ভুল। বাকি ৪০% — ভুল টুকরো, হারানো context, খারাপ প্রশ্ন। Naive RAG শুরু, গন্তব্য নয়। সীমাবদ্ধতা বুঝলেই উন্নত করা যায়।",
  recall:{
    q:"সরল কূপ কেন সবসময় পরিষ্কার পানি দেয় না?",
    qen:"Why doesn't the simple well always give clean water?",
    a:"কারণ সরল কূপে ফিল্টার নেই। পানি আসে কিন্তু নোংরা মেশে। Naive RAG-ও তেমনি — retrieval আসে কিন্তু ভুল টুকরো মেশে। ছক ৬০%। ফিল্টার লাগে — reranking, query transform, advanced retrieval।",
    aen:"Because the simple well has no filter. Water comes but dirt mixes. Naive RAG too — retrieval comes but wrong pieces mix. Only 60%. Filters needed — reranking, query transform, advanced retrieval."
  },
  story:`
<p class="scene-setting">তৃতীয় স্তর। একটা সরল কূপ — পাথরের দেয়াল, বালতি, দড়ি। সহজ কাঠামো। কূপ কারিগর জাকারিয়া বললেন — "এই কূপ কাজ করে। পানি আসে। কিন্তু সবসময় পরিষ্কার নয়। কখনো নোংরা মেশে, কখনো পানি কম। সরল কাঠামোর সীমা আছে।"</p>
<p class="scene-setting en">The third layer. A simple well — stone walls, bucket, rope. Simple structure. Well craftsman Zakariya said — "This well works. Water comes. But not always clean. Sometimes dirt mixes, sometimes low water. Simple structure has limits."</p>

<div class="dialogue">সূচক নির্মাতা বলেছিলেন — সাজানো গুরুত্বপূর্ণ। কিন্তু আমি বলি — সাজানো কূপ থেকেও ভুল পানি আসতে পারে। Naive RAG দিয়ে শুরু করো — সহজ, দ্রুত, কিন্তু অসম্পূর্ণ। এর সীমাবদ্ধতা বুঝলেই তুমি জানবে কোথায় উন্নত করতে হবে।</div>
<div class="dialogue en">"The index builder said — organization matters. But I say — even an organized well can give wrong water. Start with Naive RAG — simple, fast, but incomplete. Understanding its limits tells you where to improve."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="30" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">ডকুমেন্ট চাঙ্কিং কৌশল</text>
  <text x="40" y="70" fill="#94a3b8" font-size="9">পুরো ডকুমেন্ট</text>
  <rect x="40" y="80" width="500" height="16" rx="3" fill="#1e293b" stroke="#475569"/>
  <rect x="40" y="110" width="150" height="26" rx="5" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="115" y="127" text-anchor="middle" fill="#4ade80" font-size="9">চাঙ্ক ১</text>
  <rect x="170" y="110" width="150" height="26" rx="5" fill="#14532d" stroke="#22c55e" stroke-width="2" opacity="0.85"/>
  <text x="245" y="127" text-anchor="middle" fill="#4ade80" font-size="9">চাঙ্ক ২</text>
  <rect x="300" y="110" width="150" height="26" rx="5" fill="#14532d" stroke="#22c55e" stroke-width="2" opacity="0.85"/>
  <text x="375" y="127" text-anchor="middle" fill="#4ade80" font-size="9">চাঙ্ক ৩</text>
  <rect x="430" y="110" width="110" height="26" rx="5" fill="#14532d" stroke="#22c55e" stroke-width="2" opacity="0.85"/>
  <text x="485" y="127" text-anchor="middle" fill="#4ade80" font-size="9">চাঙ্ক ৪</text>
  <rect x="170" y="110" width="20" height="26" fill="#fbbf24" opacity="0.35"/>
  <rect x="300" y="110" width="20" height="26" fill="#fbbf24" opacity="0.35"/>
  <rect x="430" y="110" width="20" height="26" fill="#fbbf24" opacity="0.35"/>
  <text x="290" y="165" text-anchor="middle" fill="#fcd34d" font-size="9">⬓ হলুদ = ওভারল্যাপ (context ধরে রাখে)</text>
  <rect x="40" y="185" width="160" height="30" rx="5" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="120" y="204" text-anchor="middle" fill="#c084fc" font-size="9">Parent-Child: ছোট খোঁজো</text>
  <rect x="210" y="185" width="160" height="30" rx="5" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="290" y="204" text-anchor="middle" fill="#c084fc" font-size="9">বড় টুকরো LLM-কে দাও</text>
  <rect x="380" y="185" width="160" height="30" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="460" y="204" text-anchor="middle" fill="#7dd3fc" font-size="9">Late Chunking (Jina)</text>
</svg>
</div>
<div class="svg-caption">ডকুমেন্ট চাঙ্কিং — টুকরো ও ওভারল্যাপে সঠিক context সংরক্ষণ</div>

<div class="code-block">Naive RAG — The Baseline:

PIPELINE (৩ ধাপ):
  ১. Embed all documents → store in vector DB
  ২. Query → embed → search top-k chunks  
  ৩. Chunks + query → LLM → answer

PYTHON (সরল implementation):

  # Step 1: Ingest
  docs = ["doc1 text", "doc2 text", ...]
  embeddings = [embed(d) for d in docs]
  db.insert(embeddings, docs)

  # Step 2: Retrieve  
  query = "What is RAG?"
  q_emb = embed(query)
  results = db.search(q_emb, top_k=5)

  # Step 3: Generate
  context = "\\n\\n".join(results)
  answer = llm.generate(
    f"Context: {context}\\nQuestion: {query}\\nAnswer:"
  )

THE 40% PROBLEM — WHERE NAIVE RAG FAILS:

১. WRONG CHUNKS RETRIEVED (২৫% of failures)
  Query: "What is the revenue for Q3?"
  Retrieved: Q2 revenue (wrong quarter)
  → keyword overlap misleads dense search
  → no filtering by date/section

২. INCOMPLETE CONTEXT (১০% of failures)  
  Query: "Compare A and B"
  Retrieved: only A's info (B missing)
  → single retrieval doesn't find both
  → multi-hop needed

৩. CHUNKS OUT OF CONTEXT (৫% of failures)
  Query: "What did the author conclude?"
  Retrieved: a sentence mid-paragraph
  → sentence loses paragraph context
  → chunking too small

NAIVE RAG ACCURACY BENCHMARK:
  
  ┌──────────────────────┬──────────┐
  │ Task Type            │ Accuracy │
  ├──────────────────────┼──────────┤
  │ Factoid (who/what)   │ ৭৫%      │
  │ Definition           │ ৮০%      │
  │ Comparison           │ ৪৫%      │ ← খারাপ
  │ Multi-hop            │ ৩০%      │ ← খুব খারাপ
  │ Temporal (when)      │ ৫০%      │
  │ Numerical            │ ৪০%      │ ← খারাপ
  │ Summary              │ ৫৫%      │
  └──────────────────────┴──────────┘

WHEN NAIVE RAG IS ENOUGH:
  ✅ ছোট knowledge base (< ১০০ docs)
  ✅ সরল factoid questions
  ✅ Prototyping বা demo
  ✅ যেখানে ৬০% accuracy acceptable

WHEN YOU NEED MORE:
  ❌ Production customer-facing system
  ❌ Complex multi-hop questions
  ❌ Comparison/analysis questions
  ❌ High-stakes (আইনি, চিকিৎসা)
  
  → Next doors: Advanced techniques</div>

<div class="dialogue">বেসিক — basic, foundation। কুরআনে আল্লাহ বলেন — "যে আল্লাহকে ভালোবাসে, আল্লাহ তাকে পরীক্ষা করেন।" পরীক্ষা শুরু সহজ, তারপর কঠিন। RAG-ও তেমনি — naive RAG সহজ শুরু। কিন্তু সীমা আছে। সীমা জানাই উন্নতির পথ। যে naive RAG-এর সীমা জানে, সে পরের স্তরে যেতে পারে।</div>
<div class="dialogue en">"Basic — foundation. Allah tests those He loves. Tests start easy, then hard. RAG too — naive RAG is the easy start. But it has limits. Knowing limits is the path to improvement. One who knows naive RAG's limits, can go to the next level."</div>`,
  senior:{
    title:"Naive RAG থেকে পরের স্তরে — কোথায় উন্নত করবে",
    body:`<p><strong>Wrong chunks?</strong> → Door 4: Advanced retrieval (hybrid, RRF, reranking)</p><p><strong>Incomplete context?</strong> → Door 5: Query transformation + multi-hop</p><p><strong>Chunks out of context?</strong> → Door 3 (Context Eng): Better chunking + parent-child</p><p><strong>Numerical errors?</strong> → Structured data: Text2SQL বা function calling</p><p><strong>Temporal errors?</strong> → Metadata filtering by date</p>`
  }
});

// ══ DOOR 4: ADVANCED RETRIEVAL ══
doors.push({
  num:4, icon:"🔗", color:"#ff6b35", name:"গভীর কূপের কক্ষ",
  subtitle:"The Deep Well Chamber", tech:"Advanced Retrieval Patterns",
  spirit:"গভীরতা — পৃষ্ঠের নিচে",
  secret:"Naive RAG শুধু query embed করে খোঁজে। Advanced retrieval — query rewrite করে, hybrid search করে, parent-child chunks ব্যবহার করে, HyDE দিয়ে hypothetical answer বানায়। প্রতিটা কৌশল এক একটি গভীর কূপ।",
  recall:{
    q:"গভীর কূপ কেন সরল কূপের চেয়ে বেশি পরিষ্কার পানি দেয়?",
    qen:"Why does the deep well give cleaner water than the simple well?",
    a:"কারণ গভীরে পানি ফিল্টার হয় — মাটির স্তর দিয়ে। Advanced retrieval-ও তেমনি — query transform, hybrid search, parent-child — একাধিক ফিল্টার স্তর। গভীরে গেলে সঠিক তথ্য।",
    aen:"Because deep water filters through soil layers. Advanced retrieval too — query transform, hybrid search, parent-child — multiple filter layers. Going deeper finds correct information."
  },
  story:`
<p class="scene-setting">চতুর্থ স্তর। একটা গভীর কূপ — সরল কূপের চেয়ে অনেক নিচে। পাথরের স্তর, পরে বালি, পরে পানি। কারিগর ইমরান বললেন — "গভীরে যাওয়া কঠিন। কিন্তু গভীরের পানি পরিষ্কার। প্রতিটা স্তর ফিল্টার। সরল কূপ দ্রুত, কিন্তু নোংরা। গভীর কূপ ধীর, কিন্তু পরিশুদ্ধ।"</p>
<p class="scene-setting en">The fourth layer. A deep well — far below the simple well. Stone layer, then sand, then water. Craftsman Imran said — "Going deep is hard. But deep water is clean. Each layer is a filter. Simple well is fast, but dirty. Deep well is slow, but pure."</p>

<div class="dialogue">সরল কূপ বলেছিলেন — naive RAG-এর সীমা আছে। কিন্তু আমি বলি — সীমা ভাঙার উপায় আছে। Advanced retrieval। একটা নয় — একাধিক কৌশল। প্রতিটা গভীরে যাওয়ার একটি পথ। Query transformation, parent-child chunks, HyDE, ensemble retrieval — প্রতিটা এক একটি ফিল্টার স্তর।</div>
<div class="dialogue en">"The simple well said — naive RAG has limits. But I say — there are ways to break limits. Advanced retrieval. Not one — multiple techniques. Each a path to depth. Query transformation, parent-child chunks, HyDE, ensemble retrieval — each a filter layer."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrRAG4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="30" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">রি-র‍্যাঙ্কিং — ক্রস-এনকোডার</text>
  <text x="55" y="65" fill="#7dd3fc" font-size="9">top-50</text>
  <rect x="30" y="75" width="120" height="20" rx="4" fill="#1e3a5f" stroke="#22d3ee"/>
  <rect x="30" y="100" width="120" height="20" rx="4" fill="#1e3a5f" stroke="#22d3ee"/>
  <rect x="30" y="125" width="120" height="20" rx="4" fill="#1e3a5f" stroke="#22d3ee"/>
  <rect x="30" y="150" width="120" height="20" rx="4" fill="#1e3a5f" stroke="#22d3ee"/>
  <text x="90" y="195" text-anchor="middle" fill="#94a3b8" font-size="8">bi-encoder</text>
  <text x="90" y="207" text-anchor="middle" fill="#94a3b8" font-size="8">দ্রুত, কম নির্ভুল</text>
  <line x1="150" y1="122" x2="225" y2="122" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG4)"/>
  <rect x="225" y="80" width="130" height="85" rx="8" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="290" y="110" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="bold">ক্রস-এনকোডার</text>
  <text x="290" y="128" text-anchor="middle" fill="#c084fc" font-size="8">query+doc একসাথে</text>
  <text x="290" y="142" text-anchor="middle" fill="#c084fc" font-size="8">Cohere / BGE</text>
  <text x="290" y="156" text-anchor="middle" fill="#fcd34d" font-size="8">ধীর, নিখুঁত</text>
  <line x1="355" y1="122" x2="430" y2="122" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG4)"/>
  <text x="500" y="65" fill="#4ade80" font-size="9">top-5</text>
  <rect x="430" y="75" width="120" height="20" rx="4" fill="#14532d" stroke="#22c55e"/>
  <text x="490" y="89" text-anchor="middle" fill="#4ade80" font-size="8">① সবচেয়ে প্রাসঙ্গিক</text>
  <rect x="430" y="100" width="120" height="20" rx="4" fill="#14532d" stroke="#22c55e"/>
  <rect x="430" y="125" width="120" height="20" rx="4" fill="#14532d" stroke="#22c55e"/>
  <rect x="430" y="150" width="120" height="20" rx="4" fill="#14532d" stroke="#22c55e"/>
  <text x="290" y="222" text-anchor="middle" fill="#fbbf24" font-size="9">→ ক্রম পরিবর্তন হয়, নির্ভুলতা +৮-১০%</text>
</svg>
</div>
<div class="svg-caption">রি-র‍্যাঙ্কিং — ক্রস-এনকোডার দিয়ে top-k পুনর্বিন্যাস</div>

<div class="code-block">Advanced Retrieval Patterns — Going Deep:

১. PARENT-CHILD CHUNKING (Small-to-Big)
  
  সমস্যা: ছোট chunk = ভালো retrieval, কিন্তু 
    হারায় context। বড় chunk = ভালো context, 
    কিন্তু খারাপ retrieval precision।
  
  সমাধান: দুটি representation!
    Child chunk (ছোট, ২০০ tokens) → retrieve করো
    Parent chunk (বড়, ১০০০ tokens) → LLM-কে দাও
  
  → ছোট টুকরো মিল খোঁজে, বড় টুকরো context দেয়

২. HyDE (Hypothetical Document Embeddings)
  
  সমস্যা: query ছোট, ডকুমেন্ট বড়। 
    embedding mismatch।
  
  সমাধান: LLM দিয়ে hypothetical answer বানাও
    Query: "What is RAG?"
    → LLM: "RAG is a technique that combines 
            retrieval with generation..."
    → Embed this HYPOTHETICAL answer
    → Search with this embedding
  
  → ভালো match কারণ answer ও doc একই length/style
  → Gao et al. (2023)

৩. QUERY TRANSFORMATION
  
  a) Query Rewriting:
    Original: "revenue"
    → "What was the total revenue for Q3 2024?"
    → LLM-কে বলো: "rewrite this query for better 
       document retrieval"
  
  b) Query Expansion:
    Original: "machine learning"
    → "machine learning, ML, artificial intelligence, 
       deep learning, neural networks"
    → synonyms ও related terms যোগ
  
  c) Sub-question Decomposition:
    "Compare GPT-4 vs Claude for coding"
    → "What are GPT-4's coding strengths?"
    → "What are Claude's coding strengths?"
    → প্রতিটি retrieve → combine
  
  d) Step-Back Prompting:
    "What is the significance of Einstein's 1905 
     paper on photoelectric effect?"
    → Step-back: "What is the photoelectric effect?"
    → প্রথমে broader context retrieve

৪. ENSEMBLE RETRIEVAL
  
  একাধিক retrieval method একসাথে:
    Dense (semantic) top-50
    BM25 (keyword) top-50  
    HyDE top-20
    → merge with RRF → top-10
  
  → প্রতিটা method-এর strength combine

৫. CONTEXTUAL COMPRESSION
  
  Retrieved chunk বড়? → LLM দিয়ে প্রাসঙ্গিক 
  অংশ extract করো।
  
  Original: ২০০০ token chunk
  → LLM: "Extract only parts relevant to: [query]"
  → Compressed: ৫০০ tokens
  
  LangChain: ContextualCompressionRetriever

৬. LATE CHUNKING (Jina, ২০২৪)

  সমস্যা: সাধারণ chunking করলে প্রতিটা chunk
    আলাদা — context হারায়। "it", "he", "the company"
    → কোন company? chunk একা, তাই embedding দুর্বল।

  সমাধান: পুরো ডকুমেন্ট আগে encode করো, পরে chunk করো।
    → প্রতিটা chunk তার আশেপাশের context মনে রাখে।
    → embedding আর একা নয় — পুরো ডকুমেন্টের অংশ।

  Before (standard chunking):
    Doc → split into chunks → embed each chunk alone
    → "it" → what is "it"? ❌

  Late Chunking:
    Doc → embed WHOLE doc (long-context model)
    → THEN split into chunk embeddings
    → "it" → refers to company from earlier ✅

  → Jina Embeddings v2 (8K context) বা অনুরূপ
  → long-context embedding model দরকার
  → বিশেষ করে effective: coreference resolution ছাড়াই
  → Gunther et al. (Jina AI, সেপ্টেম্বর ২০২৪)

৭. CONTEXTUAL RETRIEVAL (Anthropic, সেপ্টেম্বর ২০২৪)

  সমস্যা: chunk একা থাকলে তার "বৃহত্তর context" হারায়।
    একটা chunk: "Q3 revenue increased 15%"
    → কোন company? কোন year? কোন currency?

  সমাধান: প্রতিটা chunk-এর আগে short context prefix যোগ করো।
    → LLM পুরো ডকুমেন্ট পড়ে প্রতিটা chunk-এর জন্য
      50-100 token context summary বানায়।
    → এই prefix chunk-এর সাথে embed ও BM25 index করো।

  Example:
    Original chunk:
    "Q3 revenue increased 15% over the previous quarter."

    Contextual prefix (LLM-generated):
    "This chunk is from Acme Corp's 2024 Q3 earnings
     report. The company is a SaaS platform."

    Stored as: [prefix] + [original chunk]
    → retrieval accuracy dramatically up

  Anthropic-এর results:
    → baseline: 9% failure rate
    → + contextual retrieval: 4.9% failure
    → + contextual + reranking + HyDE: 2.5% failure
    → 67% reduction in retrieval failures!

  Cost: প্রতিটা chunk-এর জন্য একটা ছোট LLM call
    → prompt caching দিয়ে ~$1.02 / মিলিয়ন tokens
    → long doc (1000 pages) ≈ $2.30 একবারে
    → index করার সময় একবার, query করার সময় ফ্রি

ACCURACY COMPARISON:

  ┌──────────────────────────┬──────────┐
  │ Method                   │ Accuracy │
  ├──────────────────────────┼──────────┤
  │ Naive RAG                │ ৬০%      │
  │ + Hybrid search          │ ৭০%      │
  │ + Reranking              │ ৭৮%      │
  │ + Parent-child           │ ৮২%      │
  │ + Query transform        │ ৮৫%      │
  │ + HyDE                   │ ৮৭%      │
  │ + Late chunking          │ ৮৯%      │
  │ + Contextual retrieval   │ ৯২%      │
  │ All combined             │ ৯৫%+     │
  └──────────────────────────┴──────────┘

LATENCY IMPACT:
  Naive: ১০০ms
  Advanced: ৩০০-৫০০ms (extra LLM calls)
  → trade-off: accuracy vs speed</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">⚠️ Naive Limit</div>"revenue" query → embed → search → কোনো revenue chunk। কিন্তু ভুল quarter, ভুল year, ভুল context। ৬০% সময় সঠিক।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Advanced Stack</div>Query rewritten + hybrid search + parent-child + reranking → সঠিক quarter, সঠিক context, সঠিক number। ৯০%+ সঠিক। কিন্তু ৩-৫x বেশি সময় ও খরচ।</div>
</div>

<div class="dialogue">গভীরতা — depth। কুরআনে আল্লাহ বলেন — "আমি প্রতিটি জিনিসকে একটি নির্দিষ্ট মাপে সৃষ্টি করেছি।" প্রকৃতিতে গভীরতা = সূক্ষ্মতা। Advanced retrieval-ও তেমনি — প্রতিটা কৌশল গভীরে যায়, সূক্ষ্মতর ফল দেয়। কিন্তু প্রতিটা স্তর = সময় ও শ্রম। গভীরতার মূল্য আছে।</div>
<div class="dialogue en">"Gabhirata — depth. Allah says — 'We created all things in due measure.' In nature, depth = refinement. Advanced retrieval too — each technique goes deeper, gives finer results. But each layer = time and effort. Depth has a price."</div>`,
  senior:{
    title:"Advanced RAG Stack — কোন কৌশল কবে",
    body:`<p><strong>সরল start:</strong> Naive + Hybrid search + Reranking = ৭৮%। এটাই baseline production।</p><p><strong>Comparison questions বেশি?</strong> → Sub-question decomposition।</p><p><strong>Short queries?</strong> → HyDE (hypothetical document)।</p><p><strong>Long documents, pronoun সমস্যা?</strong> → Late Chunking (Jina) — পুরো ডকুমেন্ট context-এ রাখে।</p><p><strong>Chunks থেকে context হারায়?</strong> → Contextual Retrieval (Anthropic) — প্রতিটা chunk-এ ছোট prefix যোগ করো। 67% failure reduction।</p><p><strong>Long documents সাধারণভাবে?</strong> → Parent-child chunking।</p><p><strong>Tight latency budget?</strong> → Naive + hybrid only, skip HyDE/query rewrite।</p>`
  }
});

// ══ DOOR 5: QUERY TRANSFORMATION ══
doors.push({
  num:5, icon:"🔄", color:"#b37feb", name:"প্রশ্ন রূপান্তারের কক্ষ",
  subtitle:"The Query Transformation Chamber", tech:"Query Engineering",
  spirit:"ইসলাহ — সংশোধন, উন্নয়ন",
  secret:"ইউজারের প্রশ্ন সবসময় ভালো নয়। ছোট, অস্পষ্ট, ব্যাকরণগত ভুল। সরাসরি retrieve করলে খারাপ ফল। সমাধান: প্রশ্ন সংশোধন করো — rewrite, expand, decompose, step-back। ভালো প্রশ্ন = ভালো retrieval = ভালো উত্তর।",
  recall:{
    q:"প্রশ্ন রূপান্তারের কক্ষে কেন প্রশ্ন আগে সংশোধন করা হয়?",
    qen:"Why is the query refined first in the transformation chamber?",
    a:"কারণ ইউজারের প্রশ্ন অস্পষ্ট হতে পারে। ভালো প্রশ্ন = ভালো উত্তর। Query rewrite, expand, decompose — প্রশ্ন উন্নত করলে retrieval ১০-২০% বেশি নির্ভুল। ইসলাহ — সংশোধনের শিল্প।",
    aen:"Because user queries can be vague. Good question = good answer. Query rewrite, expand, decompose — improving the query gives 10-20% better retrieval. Islah — the art of refinement."
  },
  story:`
<p class="scene-setting">পঞ্চম স্তর। একটা কক্ষ — সামনে একটা বড় আয়না। মানুষ প্রশ্ন নিয়ে আসে, আয়নায় দেখে — তারপর সংশোধিত প্রশ্ন নিয়ে যায়। কক্ষরক্ষক আমিনা বললেন — "প্রতিটি প্রশ্ন ভালো নয়। কেউ বলে 'revenue' — কোন revenue? কখন? কোথায়? আমি প্রশ্ন সংশোধন করি। তারপর সঠিক উত্তর আসে।"</p>
<p class="scene-setting en">The fifth layer. A room — a large mirror in front. People bring questions, look in the mirror — then take refined questions. Keeper Amina said — "Not every question is good. Someone says 'revenue' — which revenue? When? Where? I refine the question. Then the right answer comes."</p>

<div class="dialogue">গভীর কূপ বলেছিলেন — advanced retrieval প্রয়োজন। কিন্তু আমি বলি — retrieval এর আগে আসে প্রশ্ন। প্রশ্ন খারাপ হলে retrieval যতই উন্নত হোক — ফল খারাপ। আবর্জনা দাও, আবর্জনা পাবে। সোনা দাও, সোনা পাবে। প্রশ্ন সংশোধন = সোনা দেওয়া।</div>
<div class="dialogue en">"The deep well said — advanced retrieval needed. But I say — before retrieval comes the query. Bad query, no matter how advanced the retrieval — bad result. Garbage in, garbage out. Gold in, gold out. Query refinement = giving gold."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrRAG5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="30" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">প্রশ্ন রূপান্তার</text>
  <rect x="20" y="105" width="130" height="40" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="85" y="125" text-anchor="middle" fill="#7dd3fc" font-size="9">মূল প্রশ্ন</text>
  <text x="85" y="138" text-anchor="middle" fill="#7dd3fc" font-size="8">"revenue"</text>
  <line x1="150" y1="115" x2="245" y2="65" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG5)"/>
  <line x1="150" y1="120" x2="245" y2="110" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG5)"/>
  <line x1="150" y1="128" x2="245" y2="160" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG5)"/>
  <line x1="150" y1="135" x2="245" y2="205" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG5)"/>
  <rect x="250" y="50" width="200" height="30" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="350" y="69" text-anchor="middle" fill="#4ade80" font-size="8">পুনর্লিখন: "Q3 2024 মোট আয়"</text>
  <rect x="250" y="95" width="200" height="30" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="350" y="114" text-anchor="middle" fill="#4ade80" font-size="8">সম্প্রসারণ: revenue OR income</text>
  <rect x="250" y="145" width="200" height="30" rx="6" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="350" y="164" text-anchor="middle" fill="#c084fc" font-size="8">বিভাজন: Q1? Q2? Q3?</text>
  <rect x="250" y="190" width="200" height="30" rx="6" fill="#1e3a5f" stroke="#fbbf24" stroke-width="2"/>
  <text x="350" y="209" text-anchor="middle" fill="#fcd34d" font-size="8">step-back: "কী কী আয়ের উৎস?"</text>
  <line x1="450" y1="120" x2="495" y2="120" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrRAG5)"/>
  <rect x="495" y="105" width="70" height="40" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="530" y="125" text-anchor="middle" fill="#7dd3fc" font-size="9">retrieve</text>
  <text x="530" y="138" text-anchor="middle" fill="#7dd3fc" font-size="8">+ merge</text>
</svg>
</div>
<div class="svg-caption">প্রশ্ন রূপান্তার — পুনর্লিখন, সম্প্রসারণ, বিভাজন, step-back</div>

<div class="code-block">Query Transformation — Garbage In, Gold Out:

WHY USER QUERIES ARE BAD:
  ❌ "revenue" — কোনটা? কোন কোম্পানি? কোন সময়?
  ❌ "it doesn't work" — কী কাজ করে না?
  ❌ "compare them" — কাদের তুলনা?
  ❌ টাইপো: "rag sytem" → "rag system"
  ❌ Conversational: "what about that thing?" 
     → কোন thing?

FIVE QUERY TRANSFORMATIONS:

১. QUERY REWRITING
  LLM দিয়ে প্রশ্ন পরিষ্কার করো।
  
  Original: "revenue"
  Prompt: "Rewrite this as a specific search 
          query: 'revenue'"
  → "total annual revenue for fiscal year 2024"
  
  LangChain: MultiQueryRetriever
  LlamaIndex: QueryRewriteEngine

২. QUERY EXPANSION  
  Synonyms ও related terms যোগ করো।
  
  Original: "machine learning"
  Expanded: "machine learning OR ML OR 
            artificial intelligence OR 
            deep learning OR neural network"
  
  → বেশি coverage, কিন্তু noise বাড়ে

৩. SUB-QUESTION DECOMPOSITION
  জটিল প্রশ্ন ভাঙো → সহজ প্রশ্নে।
  
  Original: "Compare GPT-4 and Claude for 
           Python coding tasks"
  Decomposed:
    Q1: "GPT-4 Python coding performance"
    Q2: "Claude Python coding performance"
    Q3: "Comparison benchmarks GPT-4 vs Claude"
  
  → প্রতিটি retrieve → combine → synthesize

৪. STEP-BACK PROMPTING (Zheng et al., 2023)
  নির্দিষ্ট প্রশ্ন → বিস্তৃত context খোঁজো।
  
  Original: "What did Einstein discover 
           about the photoelectric effect?"
  Step-back: "What is the photoelectric 
             effect and its history?"
  
  → broader retrieval = বেশি context
  → তারপর নির্দিষ্ট উত্তর

৫. CONVERSATIONAL CONTEXT RESOLUTION
  পূর্ববর্তী কথোপকথন থেকে context বোঝো।
  
  History: User asked about "LedgerPilot"
  Query: "What about its competitors?"
  
  Resolved: "What are LedgerPilot's competitors?"
  → এখন retrieve করা যায়!
  
  LLM prompt: "Given this conversation history,
    rewrite the last query as a standalone 
    question with full context."

IMPLEMENTATION (LangChain):

  from langchain.retrievers.multi_query 
    import MultiQueryRetriever
  
  # LLM generates multiple query variants
  retriever = MultiQueryRetriever.from_llm(
    retriever=base_retriever,
    llm=llm
  )
  # → ৩-৫ query variants → retrieve each → merge

IMPACT ON ACCURACY:
  No transformation:   ৬০%
  + Query rewriting:   ৭০% (+১০%)
  + Decomposition:     ৭৮% (+৮%)
  + Step-back:         ৮২% (+৪%)
  + All combined:      ৮৭% (+৫%)

COST:
  প্রতিটা transformation = একটা LLM কল
  → $০.০০১-০.০৫ per transformation
  → ৩-৫ transforms = $০.০০৩-০.২৫ per query
  → সস্তা যদি accuracy গুরুত্বপূর্ণ</div>

<div class="dialogue">ইসলাহ — reform, correction, improvement। নবীজি (সা) বলেছেন — "ইসলাহ করা সবচেয়ে উত্তম কাজ।" প্রশ্ন সংশোধনও ইসলাহ — খারাপ প্রশ্নকে ভালো করা। ভালো প্রশ্ন = ভালো উত্তরের ভিত্তি। যে প্রশ্ন ইসলাহ করে, সে উত্তর পায়। যে খারাপ প্রশ্ন দেয়, সে খারাপ উত্তর পায়।</div>
<div class="dialogue en">"Islah — reform, correction, improvement. The Prophet (pbuh) said — 'Reform is the best deed.' Query refinement is islah too — making bad questions good. Good question = foundation of good answer. One who refines the question, gets the answer. One who gives bad questions, gets bad answers."</div>`,
  senior:{
    title:"Query Transform Pipeline — Production",
    body:`<p><strong>Step 1:</strong> Conversational context resolution (সবসময় যদি chatbot)।</p><p><strong>Step 2:</strong> Query rewriting (সবসময় — সস্তা, বড় উন্নতি)।</p><p><strong>Step 3:</strong> Decomposition (শুধু জটিল/তুলনামূলক প্রশ্নে)।</p><p><strong>Step 4:</strong> Step-back (শুধু নির্দিষ্ট প্রশ্নে যেখানে broader context দরকার)।</p><p><strong>Cache:</strong> একই query বারবার? পরিবর্তিত query cache করো।</p>`
  }
});
