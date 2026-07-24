doors.push({
  num: 11,
  icon: "🧭",
  color: "#2dd4bf",
  name: "অর্থের ভল্ট",
  subtitle: "Vector Databases — Where AI Stores Meaning",
  tech: "Vector DBs (Pinecone, Chroma, Milvus, Weaviate, pgvector), Embedding Storage, Similarity Search",
  spirit: "তালাশ — অর্থ দিয়ে খোঁজা, শব্দ দিয়ে নয়",
  secret: "ভেক্টর ডাটাবেস শব্দ মজুত রাখে না — অর্থ মজুত রাখে। প্রতিটি ডকুমেন্ট একটি সংখ্যার ভেক্টর, এবং কাছের অর্থ = কাছের ভেক্টর।",
  recall: {
    q: "ভেক্টর ডাটাবেস এবং সম্পর্কিত ডাটাবেসের মূল পার্থক্য কী?",
    qen: "What is the fundamental difference between a vector database and a relational database?",
    a: "সম্পর্কিত DB সঠিক মিল খোঁজে (WHERE name = X)। ভেক্টর DB কাছের অর্থ খোঁজে (cosine similarity দ্বারা nearest vectors)।",
    aen: "Relational DB finds exact matches (WHERE name = X). Vector DB finds nearest meaning (nearest vectors by cosine similarity)."
  },
  story: `<p class="scene-setting">তুমি একটা বিশাল গ্রন্থাগারে দাঁড়িয়ে আছ। কিন্তু এই গ্রন্থাগারে কোনো শিরোনাম নেই, কোনো সূচি নেই। প্রতিটি বইয়ের পরিবর্তে একটি স্বর্ণের দণ্ড — একটি ভেক্টর। দণ্ডের দৈর্ঘ্য আর দিক বইয়ের অর্থ বহন করে। তুমি যখন একটি প্রশ্ন করো, সেও একটি দণ্ডে পরিণত হয়। তারপর গ্রন্থাগার তোমার দণ্ডের সবচেয়ে কাছের দণ্ডগুলো খোঁজে — দিক দিয়ে, দৈর্ঘ্য দিয়ে। যে দণ্ডগুলো একই দিকে নির্দেশ করে, সেই বইগুলো তোমার প্রশ্নের উত্তর। এটাই ভেক্টর ডাটাবেস।</p>
<p class="scene-setting en">You stand in a vast library. But this library has no titles, no index. Instead of books, golden rods — vectors. Each rod's length and direction carry the book's meaning. When you ask a question, it too becomes a rod. Then the library finds the rods closest to yours — by direction, by length. Rods pointing the same way are books that answer your question. This is a vector database.</p>

<div class="dialogue"><strong>ডাটাবেস গুরু (প্রথম দরজা থেকে):</strong> তুমি এই পর্যন্ত শিখেছ কীভাবে সারি আর কলাম মজুত রাখতে হয়। Codd (১৯৭০) আমাদের দিয়েছিলেন relational model — সারি, কলাম, key। কিন্তু এখন একটা নতুন ধরনের প্রশ্ন এসেছে: "এই অনুচ্ছেদের মতো আর কোন অনুচ্ছেদ আছে?" SQL-এ এটা অসম্ভব। WHERE clause দিয়ে অর্থ মেলানো যায় না। এর জন্য দরকার এক নতুন ধরনের ডাটাবেস।</div>
<div class="dialogue en"><strong>Database Guru (from Door 1):</strong> You've learned how to store rows and columns. Codd (1970) gave us the relational model — rows, columns, keys. But now a new question: "Which paragraphs are similar to this one?" SQL can't do this. WHERE clauses can't match meaning. This needs a new kind of database.</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু Book ১৮ (Embeddings) আমি পড়েছি! Embedding = অর্থকে সংখ্যার ভেক্টরে রূপ। তাহলে কি সেই ভেক্টর একটা সাধারণ টেবিলে রাখলেই হবে?</div>
<div class="dialogue en"><strong>You:</strong> But I've read Book 18 (Embeddings)! Embedding = meaning as a numeric vector. Can't I just store vectors in a regular table?</div>

<div class="dialogue"><strong>গুরু:</strong> (হাসেন) রাখতে পারো। কিন্তু খোঁজবে কীভাবে? ধরো তোমার কাছে ১০ লক্ষ ডকুমেন্ট আছে, প্রতিটির একটি ১৫৩৬-মাত্রিক ভেক্টর (OpenAI ada-002)। তুমি একটি প্রশ্ন করলে — "machine learning for healthcare" — সেও একটি ১৫৩৬-মাত্রিক ভেক্টর হয়ে যায়। এখন তোমাকে ১০ লক্ষ ভেক্টরের মধ্যে সবচেয়ে কাছেরগুলো খুঁজতে হবে। সাধারণ টেবিলে এটা O(n) — প্রতিটি ভেক্টরের সাথে তুলনা। ১০ লক্ষ × ১৫৩৬ গুণ = ১৫ কোটি অপারেশন। প্রতি কোয়েরিতে! এটা অচল।</div>
<div class="dialogue en"><strong>Guru:</strong> (laughs) You can store them. But how will you search? Say you have 1 million documents, each with a 1536-dimensional vector (OpenAI ada-002). A query — "machine learning for healthcare" — also becomes a 1536-dimensional vector. Now find the nearest among 1 million. In a regular table, that's O(n) — compare against every vector. 1 million × 1536 = 150 million operations per query! Unworkable.</div>

<div class="code-block">
<strong>ভেক্টর ডাটাবেস — কী করে ভিন্ন?</strong>

<strong>১. সংরক্ষণ (Storage):</strong>
প্রতিটি ডকুমেন্ট = (id, vector, metadata)
vector = [0.023, -0.114, 0.891, ...] (১৫৩৬টি float)
metadata = {source: "pdf", date: "2025-01-15", author: "..."}

<strong>২. অনুসন্ধান (Search):</strong>
কোয়েরি ভেক্টর q দেওয়া হলে:
- সবচেয়ে কাছের k-টি ভেক্টর ফেরত দাও
- কাছের = cosine similarity বা L2 distance দ্বারা

cosine_similarity(a, b) = (a · b) / (|a| × |b|)
মান ১.০ = অভিন্ন দিক, ০.০ = লম্ব, -১.০ = বিপরীত দিক

<strong>৩. কেন সাধারণ DB যথেষ্ট নয়:</strong>
B-tree index = exact match বা range-এর জন্য
ভেক্টর similarity = ১৫৩৬-মাত্রিক স্থানে nearest neighbor
এর জন্য দরকার বিশেষ index structure (পরের দরজায়)

<strong>জনপ্রিয় ভেক্টর ডাটাবেস:</strong>
• Pinecone — managed, production-ready, serverless
• Chroma — open-source, local-first, Python
• Milvus — open-source, বড় স্কেল (Zilliz = managed)
• Weaviate — open-source, GraphQL + REST
• pgvector — PostgreSQL extension (SQL + vector!)
• Qdrant — Rust-based, দ্রুত, ফিল্টারিং সমর্থন
</div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>বাস্তব ব্যবহার (AI Pipeline):</strong><br>
১. <strong>RAG (Book ১০):</strong> ইউজার প্রশ্ন → embedding → ভেক্টর DB থেকে প্রাসঙ্গিক ডকুমেন্ট → LLM কে দাও<br>
২. <strong>Semantic Search (Book ১৮):</strong> "ব্যাংক হ্যাক হলো" → খুঁজবে "financial breach" ও "cyber heist" ও (exact words না থাকলেও)<br>
৩. <strong>Recommendation:</strong> ইউজারের পছন্দ → embedding → অনুরূপ পণ্য/বই/ভিডিও<br>
৪. <strong>Deduplication:</strong> মিলিয়ন ডকুমেন্টে ডুপ্লিকেট শনাক্তকরণ<br>
৫. <strong>Image Search:</strong> CLIP embedding → টেক্সট দিয়ে ছবি খোঁজা</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> ভেক্টর DB সম্পর্কিত DB-এর প্রতিস্থাপন নয়। তারা পরিপূরক। একটি AI অ্যাপ্লিকেশনে সাধারণত উভয় থাকে: সম্পর্কিত DB (ইউজার, লেনদেন, কনফিগারেশন) + ভেক্টর DB (ডকুমেন্ট, embedding, প্রাসঙ্গিকতা)। pgvector দিয়ে এক PostgreSQL-এ উভয় করা যায় — এটি ছোট থেকে মাঝারি প্রজেক্টের জন্য আদর্শ।</div></div>

<div class="dialogue"><strong>তুমি:</strong> তাহলে ভেক্টর DB-র সাথে আমি Codd-এর relational model ভুলে যাব?</div>
<div class="dialogue en"><strong>You:</strong> So with vector DBs I should forget Codd's relational model?</div>

<div class="dialogue"><strong>গুরু:</strong> কখনোই না। দুই জগত, দুই কাজ। Codd-এর model মজুত রাখে "কী" — name, date, price। ভেক্টর DB মজুত রাখে "অর্থ" — ধারণা, প্রাসঙ্গিকতা, সাদৃশ্য। একটি ই-কমার্স সাইটে: সম্পর্কিত DB-তে পণ্যের দাম, স্টক, অর্ডার। ভেক্টর DB-তে পণ্যের বর্ণনার embedding — "এর মতো পণ্য খুঁজুন।" দুটো একসাথে। pgvector = উভয় এক ছাদে।</div>
<div class="dialogue en"><strong>Guru:</strong> Never. Two worlds, two jobs. Codd's model stores "what" — name, date, price. Vector DBs store "meaning" — concepts, relevance, similarity. An e-commerce site: relational DB for price, stock, orders. Vector DB for product description embeddings — "find similar products." Both together. pgvector = both under one roof.</div>

<div class="verse">
<strong>ভেক্টর ডাটাবেসের বিবর্তন:</strong><br>
FAISS (Facebook AI Similarity Search, ২০১৭) — প্রথম বড় স্কেলের ANN লাইব্রেরি।<br>
Pinecone (২০১৯) — প্রথম managed vector DB service।<br>
Milvus (২০১৯) — open-source, চীনে নির্মিত (Zilliz)।<br>
Weaviate (২০১৯) — open-source, নেদারল্যান্ডস।<br>
Chroma (২০২২) — Python-first, RAG-এর জন্য সহজ।<br>
pgvector (২০২১) — PostgreSQL extension, Andrew Kane (ankane) তৈরি।<br><br>
এই ক্ষেত্র মাত্র ~৫ বছরের পুরোনো — কিন্তু প্রতিটি AI অ্যাপ্লিকেশনে এখন এটি আবশ্যক।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> সম্পর্কিত DB মজুত রাখে "কী," ভেক্টর DB মজুত রাখে "অর্থ।" AI প্রয়োজন উভয়।<br>
<em>Relational DBs store "what." Vector DBs store "meaning." AI needs both.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
তালাশ — ইসলামি ধারণায় অর্থ দিয়ে খোঁজা। "যারা আমাকে খোঁজে, আমি তাদের পথ দেখাই।" ভেক্টর DB হলো সেই খোঁজার যন্ত্র — শব্দ নয়, অর্থ দিয়ে। প্রতিটি ডকুমেন্ট একটি দিক, প্রতিটি প্রশ্ন একটি দিক — একই দিকের গন্তব্য এক।
</div>
</div>`,
  senior: {
    title: "ভেক্টর DB পছন্দের গাইড",
    body: `<p><strong>১. ছোট প্রজেক্ট (R&D, prototype):</strong> Chroma — local, Python, ফ্রি। ৩ লাইনে চালু।</p>
<p><strong>২. PostgreSQL আছে already:</strong> pgvector — এক DB-এ SQL + vector। Migration ছাড়া।</p>
<p><strong>৩. Production, managed:</strong> Pinecone — serverless, auto-scaling, কোনো পরিচালনা নেই।</p>
<p><strong>৪. বিশাল স্কেল (১০M+ vectors):</strong> Milvus — open-source, distributed, Kubernetes-এ।</p>
<p><strong>৫. Hybrid (keyword + vector):</strong> Weaviate বা Qdrant — BM25 + vector একসাথে।</p>`
  }
});

doors.push({
  num: 12,
  icon: "⚡",
  color: "#5eead4",
  name: "কাছের প্রতিবেশী",
  subtitle: "Vector Indexing — HNSW, IVF, and ANN",
  tech: "Approximate Nearest Neighbor (ANN), HNSW, IVF, FAISS — Malkov & Yashunin (2016)",
  spirit: "ইজতিহাদ — নিখুঁত অসম্ভব হলে দ্রুত কাছাকাছি",
  secret: "১০ লক্ষ ভেক্টরে নিখুঁত সন্ধান ধীর। কিন্তু ANN index দিয়ে ৯৯% নিখুঁত ১০০০ গুণ দ্রুত — এটাই AI-এর বাস্তবতা।",
  recall: {
    q: "HNSW এবং IVF কী এবং কেন ANN দরকার?",
    qen: "What are HNSW and IVF, and why is ANN needed?",
    a: "ANN = Approximate Nearest Neighbor। নিখুঁত search O(n) — অচল। HNSW ও IVF index দিয়ে ~O(log n) সময়ে ৯৯% নিখুঁত ফলাফল।",
    aen: "ANN = Approximate Nearest Neighbor. Exact search is O(n) — unusable. HNSW and IVF index give ~O(log n) with 99% accuracy."
  },
  story: `<p class="scene-setting">তুমি একটা বিশাল শহরে একটা নির্দিষ্ট রেস্তোরাঁ খুঁজছ। শহরে ১০ লক্ষ রেস্তোরাঁ। তুমি কি প্রতিটি দরজায় কড়া নাড়বে? না। তুমি প্রথমে এলাকা বাছবে — কোন এলাকায় খাবার বেশি। তারপর সেই এলাকায় রাস্তা বাছবে। তারপর সেই রাস্তায় দরজায় কড়া নাড়বে। এটাই Approximate Nearest Neighbor — তুমি সব দরজা চেক করো না। তুমি সম্ভাব্য এলাকায় সীমাবদ্ধ থাকো। হয়তো ৯৯% সময় সঠিক উত্তর পাবে। কিন্তু ১০০০ গুণ দ্রুত।</p>
<p class="scene-setting en">You search for a specific restaurant in a vast city. 1 million restaurants. Do you knock on every door? No. First you pick a district — which area has food. Then a street. Then a door. This is Approximate Nearest Neighbor — you don't check every door. You narrow to likely areas. Maybe 99% of the time you find the right answer. But 1000x faster.</p>

<div class="dialogue"><strong>গুরু:</strong> গত দরজায় আমি বলেছিলাম — ভেক্টর similarity search O(n)। ১০ লক্ষ ভেক্টরে প্রতি কোয়েরিতে ১৫ কোটি অপারেশন। এটা অচল। কিন্তু একটা সমাধান আছে: index। সম্পর্কিত DB-তে B-tree index আছে — ঠিক তেমন ভেক্টর DB-তে ANN index আছে। কিন্তু একটা পার্থক্য: B-tree নিখুঁত, ANN আনুমানিক। আমরা ১০০% নিখুঁত ফলাফল ছেড়ে দিই — কিন্তু ১০০০ গুণ দ্রুততা পাই।</div>
<div class="dialogue en"><strong>Guru:</strong> Last door I said — vector similarity search is O(n). 150 million operations per query on 1M vectors. Unworkable. But there's a solution: index. Relational DBs have B-tree index — vector DBs have ANN index. But one difference: B-tree is exact, ANN is approximate. We trade 100% accuracy for 1000x speed.</div>

<div class="code-block">
<strong>ভেক্টর ইনডেক্সিং অ্যালগরিদম — তিন প্রধান পদ্ধতি:</strong>

<strong>১. HNSW (Hierarchical Navigable Small World) — Malkov & Yashunin (২০১৬):</strong>
সবচেয়ে জনপ্রিয় ANN অ্যালগরিদম। ভেক্টরগুলোকে একটি মাল্টি-লেয়ার গ্রাফে সাজায়।
প্রতিটি ভেক্টর একটি নোড, কাছের ভেক্টরগুলোর সাথে edge।

খোঁজার সময়:
- উপরের লেয়ার থেকে শুরু (কম নোড, দ্রুত লাফ)
- প্রতিটি লেয়ারে সবচেয়ে কাছের নোডে যাও
- নিচের লেয়ারে নামো (বেশি নোড, সূক্ষ্ম খোঁজা)
- সব নোড চেক করার প্রয়োজন নেই — গ্রাফ ধরে হাঁটো

recall ≈ ৯৫-৯৯%, speed ≈ ১০০-১০০০× নিখুঁত search থেকে দ্রুত।
Pinecone, Chroma, Milvus, Weaviate — সব HNSW ব্যবহার করে।

<strong>২. IVF (Inverted File Index):</strong>
ভেক্টরগুলোকে cluster-এ ভাগ করো (k-means clustering)।
প্রতিটি cluster-এর একটি centroid।
খোঁজার সময়: কোয়েরির সবচেয়ে কাছের centroid বাছো, শুধু সেই cluster-এ খোঁজো।

IVF-Flat: প্রতিটি cluster-এ নিখুঁত খোঁজা।
IVF-PQ: Product Quantization — ভেক্টর সংকুচিত করো, আরও দ্রুত, আরও আনুমানিক।

<strong>৩. LSH (Locality-Sensitive Hashing):</strong>
ভেক্টরগুলোকে hash করো যাতে কাছের ভেক্টর একই bucket-এ যায়।
খোঁজার সময়: কোয়েরির hash → bucket → শুধু সেই bucket-এ খোঁজো।
কম নিখুঁত, কিন্তু মেমরি কম।

<strong>FAISS (Facebook AI Similarity Search, ২০১৭):</strong>
IVF + PQ-এর সবচেয়ে শক্তিশালী implementation।
GPU-তে চালানোর জন্য অপ্টিমাইজড। বিলিয়ন-স্কেল ভেক্টরে কাজ করে।
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Exact (Brute Force)</div>প্রতিটি ভেক্টরের সাথে তুলনা।<br>সময়: O(n × d) — n=১০M, d=১৫৩৬<br>১০ লক্ষ ভেক্টরে ~৩০০ms প্রতি কোয়েরি।<br>নিখুঁত — কিন্তু অচল।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ANN (HNSW/IVF)</div>গ্রাফ বা cluster দিয়ে সীমিত খোঁজা।<br>সময়: ~O(log n × d)<br>১০ লক্ষ ভেক্টরে ~৩ms প্রতি কোয়েরি।<br>৯৯% নিখুঁত — বাস্তবে যথেষ্ট।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ — recall vs speed tradeoff:</strong> HNSW-এর দুটি প্যারামিটার: ef_construction (index বানানোর সময়) এবং ef_search (খোঁজার সময়)। ef_search বাড়ালে নিখুঁত হয় কিন্তু ধীর হয়। কমালে দ্রুত হয় কিন্তু কিছু ফলাফল মিস করে। এটাই ANN-এর মূল tradeoff — Book ৯ (Context Engineering) এর Lost-in-the-Middle সমস্যার সাথে সম্পর্কিত: তুমি কতটুকু প্রাসঙ্গিকতা ছাড়তে পারো গতির জন্য?</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১০০০×</div><div class="sc-label">ANN নিখুঁত search থেকে দ্রুত</div></div>
<div class="stat-card"><div class="sc-num">~৯৯%</div><div class="sc-label">HNSW recall (typical)</div></div>
<div class="stat-card"><div class="sc-num">~৩ms</div><div class="sc-label">১০ লক্ষ ভেক্টরে প্রতি কোয়েরি</div></div>
</div>

<div class="verse">
<strong>HNSW-এর ইতিহাস:</strong><br>
ইউরি মালকভ (Yury Malkov) — ২০১৬ সালে "Efficient and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs" প্রকাশ করেন।<br>
এটি একটি অবিশ্বাস্য ফলাফল — নিকটতম প্রতিবেশী খোঁজা সমস্যায় (যা ১৯৭০-এর দশক থেকে অধ্যয়িত) এটি একটি যুগান্তকারী অ্যালগরিদম।<br>
নেভিগেবল স্মল ওয়ার্ল্ড গ্রাফ ধারণাটি স্ট্যানলি মিলগ্রামের "six degrees of separation" (১৯৬৭) পরীক্ষা থেকে অনুপ্রাণিত — কম edge দিয়েও দ্রুত গন্তব্যে পৌঁছানো যায়।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> নিখুঁত অসম্ভব হলে, দ্রুত কাছাকাছিই জয়।<br>
<em>When exact is impossible, fast-and-close wins.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
এটা Book ৪১ (Theory of Computation) Door ৯-এর approximation পাঠের সাথে সরাসরি সংযুক্ত — NP-hard সমস্যায় নিখুঁত সমাধান অসম্ভব, তাই approximation algorithm। ভেক্টর search-ও তেমন — নিখুঁত search O(n), কিন্তু ANN ৯৯% নিখুঁত ১০০০× দ্রুত। ইজতিহাদ — নিশ্চিততা অসম্ভব হলে সর্বোত্তম প্রচেষ্টা।
</div>
</div>`,
  senior: {
    title: "ইনডেক্স পছন্দের গাইড",
    body: `<p><strong>১. ডিফল্ট (বেশিরভাগ ক্ষেত্রে):</strong> HNSW — Chroma, Pinecone, Weaviate সব ডিফল্টভাবে এটা ব্যবহার করে। সেরা recall/speed balance।</p>
<p><strong>২. মেমরি কম:</strong> IVF-PQ — ভেক্টর সংকুচিত, কম RAM। FAISS-এ পাওয়া যায়।</p>
<p><strong>৩. বিলিয়ন-স্কেল:</strong> FAISS GPU + IVF-PQ — Facebook/Instagram এই combo ব্যবহার করে।</p>
<p><strong>৪. pgvector:</strong> HNSW সমর্থন করে (v0.5+)। <code>CREATE INDEX ON items USING hnsw (embedding vector_cosine_ops)</code></p>
<p><strong>৫. tuning:</strong> ef_search বাড়ালে নিখুঁত কিন্তু ধীর। production-এ ৯৫-৯৯% recall sweet spot।</p>`
  }
});

doors.push({
  num: 13,
  icon: "🤖",
  color: "#2dd4bf",
  name: "AI-এর উপাত্ত স্থাপত্য",
  subtitle: "AI Data Infrastructure — The Complete Picture",
  tech: "Hybrid Search, Feature Stores, ML Metadata, GraphRAG, AI Data Stack Synthesis",
  spirit: "তাওহিদ — সব উপাত্তের একতা, সব স্তরের সংযোগ",
  secret: "একটি AI সিস্টেমে পাঁচ ধরনের উপাত্ত প্রবাহিত হয়: প্রশিক্ষণ, ভেক্টর, ফিচার, মেটাডেটা, লগ। প্রতিটির নিজস্ব ডাটাবেস।",
  recall: {
    q: "একটি production AI সিস্টেমে কয় ধরনের ডাটাবেস থাকে?",
    qen: "How many types of databases does a production AI system need?",
    a: "কমপক্ষে ৫টি: সম্পর্কিত (ইউজার/লেনদেহ), ভেক্টর (embedding/search), ফিচার স্টোর, টাইম-সিরিজ (মনিটরিং), এবং অবজেক্ট স্টোরেজ (মডেল/ডেটা)।",
    aen: "At least 5: relational (users/transactions), vector (embedding/search), feature store, time-series (monitoring), and object storage (models/data)."
  },
  story: `<p class="scene-setting">তুমি একটা বিশাল কারখানায় দাঁড়িয়ে আছ। এই কারখানায় একটি AI তৈরি হয়। কিন্তু তুমি দেখো — একটি মডেল নয়, একটি উপাত্তের নদী। এক দিক থেকে কাঁচামাল আসে (training data)। মাঝখানে প্রক্রিয়াকরণ (feature engineering, embedding)। অন্য দিকে তৈরি পণ্য (predictions, search results)। এবং সব কোণে — নজরদারির চোখ (monitoring, logging, metadata)। প্রতিটি ধাপে একটি ভিন্ন ডাটাবেস। এটাই AI উপাত্ত স্থাপত্য — একটি জীবন্ত সিস্টেম।</p>
<p class="scene-setting en">You stand in a vast factory. In this factory, an AI is made. But you see — not a model, a river of data. From one side comes raw material (training data). In the middle, processing (feature engineering, embedding). On the other side, finished product (predictions, search results). And everywhere — watchful eyes (monitoring, logging, metadata). Each step, a different database. This is AI data architecture — a living system.</p>

<div class="dialogue"><strong>গুরু:</strong> তুমি এই বইয়ে বারোটি দরজা পেরিয়েছ। Codd-এর relational model থেকে শুরু — B-tree index, ACID, NoSQL, distributed DB, query optimization, data warehouse — এখন vector DB, ANN index। তুমি ভাবতে পারো — এত ধরনের ডাটাবেস কেন? একটাই কেন নয়? উত্তর: কারণ AI একটি জটিল সিস্টেম। এর প্রতিটি স্তরের নিজস্ব প্রয়োজন। এক জুতো সবার জন্য নয়।</div>
<div class="dialogue en"><strong>Guru:</strong> You've passed twelve doors in this book. From Codd's relational model — B-tree index, ACID, NoSQL, distributed DB, query optimization, data warehouse — now vector DB, ANN index. You may wonder — why so many types of databases? Why not just one? Answer: because AI is a complex system. Each layer has its own need. One shoe doesn't fit all.</div>

<div class="code-block">
<strong>Production AI সিস্টেমের উপাত্ত স্তর — পাঁচটি ডাটাবেস:</strong>

<strong>১. সম্পর্কিত ডাটাবেস (PostgreSQL/MySQL):</strong>
কী মজুত থাকে: ইউজার, অর্ডার, কনফিগারেশন, অনুমতি
কেন: ACID লেনদেহের জন্য অপরিহার্য। প্রতিটি লেনদেহ সঠিক হতে হবে।
AI সংযোগ: ইউজার প্রোফাইল → personalization context

<strong>২. ভেক্টর ডাটাবেস (Pinecone/Chroma/pgvector):</strong>
কী মজুত থাকে: ডকুমেন্ট embedding, ইউজার প্রশ্ন embedding
কেন: অর্থ দিয়ে খোঁজা (semantic search, RAG)
AI সংযোগ: RAG pipeline-এর মূল উপাদান (Book ১০)

<strong>৩. ফিচার স্টোর (Feast/Tecton):</strong>
কী মজুত থাকে: pre-computed ML features
কেন: training এবং inference-এ একই feature ব্যবহার করতে হয়
নাহলে: training-serving skew — মডেল production-এ অন্যরকম আচরণ করে
AI সংযোগ: প্রতিটি ML মডেলের ভিত্তি (Book ৩১ Classic ML)

<strong>৪. টাইম-সিরিজ ডাটাবেস (Prometheus/InfluxDB):</strong>
কী মজুত থাকে: মডেল latency, accuracy drift, prediction logs
কেন: AI মডেল সময়ের সাথে নষ্ট হয় (model drift)
AI সংযোগ: LLMOps মনিটরিং (Book ১৪)

<strong>৫. অবজেক্ট স্টোরেজ (S3/GCS):</strong>
কী মজুত থাকে: training datasets, model weights, checkpoints
কেন: বড় ফাইল (GB-TB) — ডাটাবেসে রাখা যায় না
AI সংযোগ: model versioning, data pipeline (Book ১৪ LLMOps)
</div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>Hybrid Search — শব্দ + অর্থ একসাথে:</strong><br>
Production RAG system-এ শুধু vector search যথেষ্ট নয়। BM25 (keyword) + vector (semantic) একসাথে ব্যবহার করলে সেরা ফলাফল।<br>
কেন? কারণ কিছু প্রশ্নে exact match দরকার (নাম, কোড, তারিখ), কিছুতে semantic (ধারণা, প্রসঙ্গ)।<br>
Weaviate, Qdrant, Elasticsearch — সব hybrid search সমর্থন করে।<br>
pgvector-এ: full-text search (tsvector) + vector (pgvector) = এক PostgreSQL-এ hybrid!</div></div>

<div class="dialogue"><strong>তুমি:</strong> এটা অনেক জটিল! এত ডাটাবেস কে পরিচালনা করবে?</div>
<div class="dialogue en"><strong>You:</strong> This is complex! Who manages all these databases?</div>

<div class="dialogue"><strong>গুরু:</strong> (হাসেন) এটাই AI engineer-এর কাজ। শুধু মডেল ট্রেইন করা যথেষ্ট নয় — পুরো উপাত্ত স্থাপত্য ডিজাইন করতে হয়। Book ৪ (System Design) এ তুমি scaling শিখেছ। Book ১৪ (LLMOps) এ production pipeline। Book ৩৫ (Distributed Systems) এ replication। এখন এই বইয়ে তুমি জানলে — প্রতিটি স্তরের জন্য সঠিক ডাটাবেস কী। এটাই সম্পূর্ণ ছবি।</div>
<div class="dialogue en"><strong>Guru:</strong> (laughs) That's the AI engineer's job. Just training models isn't enough — you design the entire data architecture. Book 4 (System Design) taught you scaling. Book 14 (LLMOps) production pipeline. Book 35 (Distributed Systems) replication. Now this book tells you — the right database for each layer. This is the complete picture.</div>

<div class="verse">
<strong>এই বইয়ের সম্পূর্ণ যাত্রা — ১৩টি দরজা:</strong><br><br>
Codd (১৯৭০) দিয়ে শুরু — relational model, সারি ও কলাম।<br>
SQL দিয়ে কথা বলা — JOIN, GROUP BY, subquery।<br>
B-tree index দিয়ে দ্রুত খোঁজা।<br>
ACID দিয়ে নিরাপত্তা — atomicity, consistency, isolation, durability।<br>
Normalization দিয়ে পরিচ্ছন্নতা — 1NF থেকে BCNF।<br>
NoSQL দিয়ে নমনীয়তা — Redis, MongoDB, Cassandra।<br>
Distributed DB দিয়ে স্কেল — replication, sharding, consistency।<br>
Query optimization দিয়ে দক্ষতা — cost-based optimizer।<br>
Data warehouse দিয়ে বিশ্লেষণ — OLAP, star schema, columnar।<br>
একটি query-এর সম্পূর্ণ যাত্রা — SQL থেকে ফলাফল পর্যন্ত।<br>
ভেক্টর DB — অর্থ মজুত, semantic search (Door ১১)।<br>
ANN index — HNSW, IVF, দ্রুত কাছের প্রতিবেশী (Door ১২)।<br>
AI উপাত্ত স্থাপত্য — পাঁচ ডাটাবেসের সম্পূর্ণ ছবি (এই দরজা)।<br><br>
Codd-এর সারি-কলাম থেকে Malkov-এর HNSW গ্রাফ — ৫৫ বছরের বিবর্তন।<br>
একটি ডাটাবেস নয় — একটি পরিবার। প্রতিটি সদস্যের নিজস্ব কাজ।
</div>

<div class="secret-box">
<strong>🔑 চূড়ান্ত গোপন সত্য:</strong> ডাটাবেস একটি প্রযুক্তি নয় — এটি একটি মানসিকতা।<br>
<em>A database isn't a technology — it's a mindset. The right store for each need.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
তাওহিদ — একত্ববাদ — শিক্ষা দেয় যে সবকিছুর নিচে একটি সত্য, কিন্তু তার অসংখ্য রূপ। ডাটাবেসও তেমন — সব উপাত্ত এক, কিন্তু প্রতিটির নিজস্ব স্থান। সম্পর্কিত DB = কাঠামো। ভেক্টর DB = অর্থ। ফিচার স্টোর = জ্ঞান। টাইম-সিরিজ = স্মৃতি। অবজেক্ট স্টোরেজ = ভাণ্ডার। পাঁচ রূপ, এক সত্য — উপাত্ত।
</div>
</div>`,
  senior: {
    title: "AI উপাত্ত স্থাপত্য — সম্পূর্ণ গাইড",
    body: `<p><strong>১. ছোট AI প্রজেক্ট:</strong> PostgreSQL + pgvector — এক DB-এ SQL + vector। সবচেয়ে সহজ শুরু।</p>
<p><strong>২. মাঝারি RAG:</strong> PostgreSQL (ইউজার) + Chroma/Pinecone (vector) + S3 (ডকুমেন্ট)।</p>
<p><strong>৩. Enterprise ML:</strong> PostgreSQL + Pinecone + Feast (feature store) + Prometheus (monitoring) + S3 (models)।</p>
<p><strong>৪. Hybrid search:</strong> pgvector (PostgreSQL full-text + vector) বা Weaviate (BM25 + vector) — এক সিস্টেমে শব্দ + অর্থ।</p>
<p><strong>৫. GraphRAG (উদীয়মান):</strong> Neo4j (knowledge graph) + vector DB — entity-relationship এবং semantic search একসাথে। Book ২২ (CS Ocean) এ GraphRAG-এর উল্লেখ আছে।</p>`
  }
});
