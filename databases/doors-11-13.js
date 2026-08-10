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

<div class="dialogue"><strong>গুরু:</strong> (হাসেন) রাখতে পারো। কিন্তু খোঁজবে কীভাবে? ধরো তোমার কাছে ১০ লক্ষ ডকুমেন্ট আছে, প্রতিটির একটি ১৫৩৬-মাত্রিক ভেক্টর (OpenAI ada-002)। তুমি একটি প্রশ্ন করলে — "machine learning for healthcare" — সেও একটি ১৫৩৬-মাত্রিক ভেক্টর হয়ে যায়। এখন তোমাকে ১০ লক্ষ ভেক্টরের মধ্যে সবচেয়ে কাছেরগুলো খুঁজতে হবে। সাধারণ টেবিলে এটা O(n) — প্রতিটি ভেক্টরের সাথে তুলনা। ১০ লক্ষ * ১৫৩৬ গুণ = ১৫ কোটি অপারেশন। প্রতি কোয়েরিতে! এটা অচল।</div>
<div class="dialogue en"><strong>Guru:</strong> (laughs) You can store them. But how will you search? Say you have 1 million documents, each with a 1536-dimensional vector (OpenAI ada-002). A query — "machine learning for healthcare" — also becomes a 1536-dimensional vector. Now find the nearest among 1 million. In a regular table, that's O(n) — compare against every vector. 1 million * 1536 = 150 million operations per query! Unworkable.</div>

<div class="code-block"># ── STEP 1: What is a vector database? ──
# A VECTOR DATABASE stores and searches HIGH-DIMENSIONAL VECTORS.
# These vectors represent the MEANING of text, images, or audio.

# Each document/item is stored as:
# (id, vector, metadata)
# vector = [0.023, -0.114, 0.891, ...] (e.g., 1536 dimensions from OpenAI embeddings)
# metadata = {"source": "pdf", "date": "2025-01-15", "author": "..."}

# VECTOR SEARCH = find the K NEAREST vectors to a query vector.
# This is SEMANTIC SEARCH — find by MEANING, not exact words.

# Example:
# Query: "bank account hacked"
# Vector DB finds: "financial breach", "cyber heist", "unauthorized transfer"
# Even though exact words differ, the MEANING is similar.

import numpy as np

# Each item is a point in high-dimensional space:
item_vectors = {
    "Python tutorial":  np.array([0.9, 0.1, 0.8, 0.2]),
    "Java tutorial":    np.array([0.8, 0.2, 0.7, 0.3]),
    "Cooking recipe":   np.array([0.1, 0.9, 0.2, 0.8]),
    "Travel guide":     np.array([0.2, 0.8, 0.3, 0.9]),
}

# Query: "programming"
query = np.array([0.85, 0.15, 0.75, 0.25])

# Find most similar (cosine similarity):
def cosine_sim(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

results = []
for item, vec in item_vectors.items():
    sim = cosine_sim(query, vec)
    results.append((item, sim))

results.sort(key=lambda x: -x[1])
print("Semantic search for 'programming':")
for item, sim in results:
    print(f"  {item}: {sim:.3f}")
# Python tutorial: 0.998 ← most similar
# Java tutorial: 0.974 ← also similar
# Cooking recipe: 0.374 ← different</div>

<div class="code-block"># ── STEP 2: Similarity metrics ──
# How do we measure "closeness" of two vectors?

import numpy as np

# THREE COMMON METRICS:

# 1. COSINE SIMILARITY (most common for text):
# Measures ANGLE between vectors (ignores magnitude).
# Range: -1 to 1 (1 = same direction, 0 = perpendicular, -1 = opposite)
def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# 2. EUCLIDEAN DISTANCE (L2):
# Straight-line distance between points.
# Range: 0 to infinity (0 = identical)
def euclidean_distance(a, b):
    return np.sqrt(np.sum((a - b) ** 2))

# 3. DOT PRODUCT (inner product):
# Simple but affected by vector magnitude.
def dot_product(a, b):
    return np.dot(a, b)

# Comparison:
a = np.array([1, 2, 3])
b = np.array([2, 4, 6])  # same direction, double magnitude

print(f"Cosine similarity: {cosine_similarity(a, b):.3f}")  # 1.0 (same direction!)
print(f"Euclidean distance: {euclidean_distance(a, b):.3f}")  # 3.74 (far apart)
print(f"Dot product: {dot_product(a, b):.3f}")  # 28.0 (affected by magnitude)

# WHEN TO USE WHICH:
# Cosine: text/embeddings (meaning comparison, magnitude doesn't matter)
# Euclidean: spatial data (physical distance matters)
# Dot product: when magnitude is meaningful (importance/weight)</div>

<div class="code-block"># ── STEP 3: The nearest neighbor problem ──
# Given a query vector, find the K CLOSEST vectors in the database.

# BRUTE FORCE: compare query to EVERY vector. O(n) per query.
# For 1 million vectors × 1536 dimensions = 1.5 billion operations.
# This is SLOW for real-time search.

# APPROXIMATE NEAREST NEIGHBOR (ANN):
# Trade a little accuracy for MASSIVE speed.
# Instead of exact results, get "close enough" results 100-1000x faster.

# POPULAR ANN ALGORITHMS:
ann_algorithms = {
    "HNSW (Hierarchical Navigable Small World)": {
        "how": "Graph-based. Builds layers of connections.",
        "speed": "Very fast, high recall",
        "memory": "High (stores graph)",
        "used_by": "Pinecone, Chroma, pgvector",
    },
    "IVF (Inverted File Index)": {
        "how": "K-means clustering. Search only relevant clusters.",
        "speed": "Fast, moderate recall",
        "memory": "Moderate",
        "used_by": "FAISS, Milvus",
    },
    "PQ (Product Quantization)": {
        "how": "Compress vectors into short codes.",
        "speed": "Very fast, lower recall",
        "memory": "Low (compressed)",
        "used_by": "FAISS",
    },
    "ScaNN": {
        "how": "Google's approach. Anisotropic quantization.",
        "speed": "Very fast",
        "memory": "Moderate",
        "used_by": "Google",
    },
}

print("ANN ALGORITHMS:")
for algo, info in ann_algorithms.items():
    print(f"\n  {algo}:")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 4: Vector databases comparison ──
# POPULAR VECTOR DATABASES:

vector_dbs = {
    "pgvector (PostgreSQL)": {
        "type": "SQL extension",
        "pro": "Use SQL + vectors together! No new infrastructure.",
        "con": "Not as fast as dedicated vector DBs at huge scale",
        "best_for": "Small-medium apps, already using PostgreSQL",
    },
    "Pinecone": {
        "type": "Managed SaaS",
        "pro": "Fully managed, auto-scaling, production-ready",
        "con": "Vendor lock-in, cost at scale",
        "best_for": "Production apps, teams that don't want to manage infra",
    },
    "Chroma": {
        "type": "Open source, Python-native",
        "pro": "Easy setup, great DX, runs locally",
        "con": "Not production-hardened at scale",
        "best_for": "Prototyping, development, small projects",
    },
    "Milvus / Zilliz": {
        "type": "Open source / managed",
        "pro": "Extremely scalable (billions of vectors)",
        "con": "Complex deployment (open source version)",
        "best_for": "Large-scale production, enterprise",
    },
    "Qdrant": {
        "type": "Open source (Rust)",
        "pro": "Fast, rich filtering, good API",
        "con": "Newer ecosystem",
        "best_for": "Performance-critical apps with filtering",
    },
    "Weaviate": {
        "type": "Open source",
        "pro": "GraphQL API, built-in modules (auto-embedding)",
        "con": "Complex configuration",
        "best_for": "Apps needing auto-embedding + GraphQL",
    },
}

print("VECTOR DATABASE COMPARISON:")
for db, info in vector_dbs.items():
    print(f"\n  {db}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# RECOMMENDATION FOR YOUR PROJECTS:
# Start with: pgvector (if already using PostgreSQL) or Chroma (for prototyping)
# Scale to: Pinecone or Milvus when you have millions of vectors</div>

<div class="code-block"># ── STEP 5: Using pgvector (PostgreSQL + vectors) ──
# pgvector adds vector operations to PostgreSQL. No new infrastructure needed!

# SQL setup:
sql_pgvector = """
-- Install extension:
CREATE EXTENSION vector;

-- Create table with vector column:
CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    content TEXT,
    embedding VECTOR(1536),  -- OpenAI embedding dimensions
    metadata JSONB
);

-- Create HNSW index for fast similarity search:
CREATE INDEX ON documents USING hnsw (embedding vector_cosine_ops);

-- Similarity search (find 5 most similar documents):
SELECT content, 1 - (embedding <=> $1) as similarity
FROM documents
ORDER BY embedding <=> $1
LIMIT 5;
-- The <=> operator is cosine distance
"""

print(sql_pgvector)

# PYTHON (Django + pgvector):
python_pgvector = """
# settings.py:
# Install: pip install pgvector django-pgvector

# models.py:
from pgvector.django import VectorField

class Document(models.Model):
    content = models.TextField()
    embedding = VectorField(dimensions=1536)
    metadata = models.JSONField(default=dict)

# Query (find similar documents):
from pgvector.django import CosineDistance

def search_similar(query_embedding, limit=5):
    return Document.objects.annotate(
        distance=CosineDistance('embedding', query_embedding)
    ).filter(
        distance__lt=0.5  # only similar enough
    ).order_by('distance')[:limit]
"""

print(python_pgvector)

# WHY pgvector IS GREAT:
# - No new infrastructure (use existing PostgreSQL)
# - SQL queries work with vectors
# - Combine vector search with regular WHERE/GROUP BY
# - ACID transactions on vector data
# - Full text search + vector search in one query</div>

<div class="code-block"># ── STEP 6: Vector DB use cases and RAG ──
# The #1 use case: RAG (Retrieval Augmented Generation)

# HOW RAG WORKS:
rag_pipeline = """
1. INGEST: Documents → embedding model → vector database
   "Python is great" → [0.9, 0.1, 0.8, ...] → store in vector DB

2. QUERY: User question → embedding model → vector search
   "What programming language?" → [0.85, 0.15, 0.75, ...]
   → Find nearest vectors → retrieve relevant documents

3. AUGMENT: Retrieved documents + user question → LLM
   "Context: [relevant docs]. Question: [user question]"

4. GENERATE: LLM generates answer using retrieved context
   "Based on the documents, Python is recommended because..."
"""

print(rag_pipeline)

# PYTHON RAG IMPLEMENTATION (simplified):
rag_code = """
from openai import OpenAI
import numpy as np

client = OpenAI()

def embed(text):
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding

# Step 1: Store documents (already done at ingestion)
# db.insert(document_text, embed(document_text))

# Step 2: User asks a question
question = "How do I create a Django model?"

# Step 3: Find relevant documents
query_embedding = embed(question)
relevant_docs = Document.objects.annotate(
    distance=CosineDistance('embedding', query_embedding)
).order_by('distance')[:5]  # top 5 most similar

# Step 4: Feed to LLM with context
context = "\\n\\n".join([doc.content for doc in relevant_docs])
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": f"Answer based on this context: {context}"},
        {"role": "user", "content": question}
    ]
)
print(response.choices[0].message.content)
"""

print(rag_code)

# VECTOR DB USE CASES:
use_cases = {
    "RAG": "LLM + retrieved context for accurate Q&A",
    "Semantic Search": "Search by meaning, not keywords",
    "Recommendation": "Find similar items (products, articles, music)",
    "Deduplication": "Find near-duplicate content",
    "Image Search": "Find similar images using CLIP embeddings",
    "Anomaly Detection": "Find outliers (far from all clusters)",
    "Clustering": "Group similar items together",
    "Classification": "KNN classification on embeddings",
}

print("VECTOR DB USE CASES:")
for use_case, desc in use_cases.items():
    print(f"  {use_case}: {desc}")

# THE FUTURE:
# Vector databases are the BACKBONE of modern AI applications.
# Every RAG system, every semantic search, every recommendation engine
# uses vector databases under the hood.
# Understanding them = understanding modern AI infrastructure.</div>

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

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🧭 Vector DB: অর্থ দিয়ে খোঁজা</text>
  <rect x="30" y="50" width="130" height="100" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="95" y="72" text-anchor="middle" fill="#67e8f9" font-size="8" font-weight="700">Query: "ML"</text>
  <rect x="45" y="82" width="100" height="18" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="95" y="94" text-anchor="middle" fill="#7dd3fc" font-size="10">[0.2, 0.8, -0.1, ...]</text>
  <text x="95" y="115" text-anchor="middle" fill="#94a3b8" font-size="10">embedding model</text>
  <text x="95" y="128" text-anchor="middle" fill="#94a3b8" font-size="10">(1536-dim)</text>
  <text x="95" y="142" text-anchor="middle" fill="#7dd3fc" font-size="10">→ query vector</text>
  <defs><marker id="arrD11a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="160" y1="100" x2="198" y2="100" stroke="#a855f7" stroke-width="2" marker-end="url(#arrD11a)"/>
  <text x="179" y="93" text-anchor="middle" fill="#c084fc" font-size="10">search</text>
  <rect x="200" y="50" width="220" height="170" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="310" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Vector Database</text>
  <circle cx="250" cy="100" r="8" fill="#22c55e"/>
  <text x="250" y="103" text-anchor="middle" fill="#052e16" font-size="10" font-weight="700">A</text>
  <circle cx="310" cy="95" r="10" fill="#fbbf24"/>
  <text x="310" y="98" text-anchor="middle" fill="#451a0a" font-size="10" font-weight="700">Q</text>
  <circle cx="370" cy="110" r="7" fill="#22d3ee"/>
  <text x="370" y="113" text-anchor="middle" fill="#0f172a" font-size="10" font-weight="700">B</text>
  <circle cx="270" cy="140" r="6" fill="#a855f7"/>
  <circle cx="350" cy="150" r="6" fill="#f87171"/>
  <circle cx="230" cy="165" r="5" fill="#475569"/>
  <circle cx="390" cy="170" r="5" fill="#475569"/>
  <line x1="316" y1="100" x2="244" y2="100" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="310" y1="105" x2="270" y2="137" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="240" y="195" text-anchor="middle" fill="#86efac" font-size="10">A: sim=0.92 ✓</text>
  <text x="350" y="145" text-anchor="middle" fill="#fca5a5" font-size="10">B: sim=0.71</text>
  <text x="310" y="212" text-anchor="middle" fill="#94a3b8" font-size="10">cosine(q, v) = nearest meaning</text>
  <rect x="440" y="50" width="120" height="100" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="500" y="72" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">Top-K Result</text>
  <rect x="455" y="82" width="90" height="16" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="500" y="93" text-anchor="middle" fill="#86efac" font-size="10">doc A (0.92)</text>
  <rect x="455" y="102" width="90" height="16" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="500" y="113" text-anchor="middle" fill="#86efac" font-size="10">doc C (0.85)</text>
  <rect x="455" y="122" width="90" height="16" rx="3" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="500" y="133" text-anchor="middle" fill="#fde68a" font-size="10">doc B (0.71)</text>
  <defs><marker id="arrD11b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/></marker></defs>
  <line x1="420" y1="100" x2="438" y2="100" stroke="#22c55e" stroke-width="2" marker-end="url(#arrD11b)"/>
  <text x="290" y="240" text-anchor="middle" fill="#c084fc" font-size="10">pgvector | Pinecone | Milvus | Chroma | Weaviate</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Query ভেক্টর সবচেয়ে কাছের ডকুমেন্ট ভেক্টর খুঁজে বের করে — cosine similarity দিয়ে।</div>

<div class="code-block"># — Python: Vector Search with pgvector —

  # pgvector — PostgreSQL-এ ভেক্টর search
  import psycopg2

  conn = psycopg2.connect("dbname=myapp")

  # টেবিল তৈরি (১৫৩৬-মাত্রিক)
  conn.execute('''
      CREATE TABLE documents (
          id SERIAL PRIMARY KEY,
          content TEXT,
          embedding vector(1536)  -- pgvector type
      );
  ''')

  # HNSW index (পরের দরজায় বিস্তারিত)
  conn.execute('''
      CREATE INDEX ON documents
      USING hnsw (embedding vector_cosine_ops);
  ''')

  # similarity search — k=5 nearest
  results = conn.execute('''
      SELECT content, 1 - (embedding <=> %s) AS similarity
      FROM documents
      ORDER BY embedding <=> %s      -- cosine distance
      LIMIT 5;
  ''', (query_vec, query_vec))
  # <=> = cosine distance operator (pgvector)</div>

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

recall ~= ৯৫-৯৯%, speed ~= ১০০-১০০০* নিখুঁত search থেকে দ্রুত।
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
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Exact (Brute Force)</div>প্রতিটি ভেক্টরের সাথে তুলনা।<br>সময়: O(n * d) — n=১০M, d=১৫৩৬<br>১০ লক্ষ ভেক্টরে ~৩০০ms প্রতি কোয়েরি।<br>নিখুঁত — কিন্তু অচল।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ANN (HNSW/IVF)</div>গ্রাফ বা cluster দিয়ে সীমিত খোঁজা।<br>সময়: ~O(log n * d)<br>১০ লক্ষ ভেক্টরে ~৩ms প্রতি কোয়েরি।<br>৯৯% নিখুঁত — বাস্তবে যথেষ্ট।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ — recall vs speed tradeoff:</strong> HNSW-এর দুটি প্যারামিটার: ef_construction (index বানানোর সময়) এবং ef_search (খোঁজার সময়)। ef_search বাড়ালে নিখুঁত হয় কিন্তু ধীর হয়। কমালে দ্রুত হয় কিন্তু কিছু ফলাফল মিস করে। এটাই ANN-এর মূল tradeoff — Book ৯ (Context Engineering) এর Lost-in-the-Middle সমস্যার সাথে সম্পর্কিত: তুমি কতটুকু প্রাসঙ্গিকতা ছাড়তে পারো গতির জন্য?</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১০০০*</div><div class="sc-label">ANN নিখুঁত search থেকে দ্রুত</div></div>
<div class="stat-card"><div class="sc-num">~৯৯%</div><div class="sc-label">HNSW recall (typical)</div></div>
<div class="stat-card"><div class="sc-num">~৩ms</div><div class="sc-label">১০ লক্ষ ভেক্টরে প্রতি কোয়েরি</div></div>
</div>

<div class="verse">
<strong>HNSW-এর ইতিহাস:</strong><br>
ইউরি মালকভ (Yury Malkov) — ২০১৬ সালে "Efficient and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs" প্রকাশ করেন।<br>
এটি একটি অবিশ্বাস্য ফলাফল — নিকটতম প্রতিবেশী খোঁজা সমস্যায় (যা ১৯৭০-এর দশক থেকে অধ্যয়িত) এটি একটি যুগান্তকারী অ্যালগরিদম।<br>
নেভিগেবল স্মল ওয়ার্ল্ড গ্রাফ ধারণাটি স্ট্যানলি মিলগ্রামের "six degrees of separation" (১৯৬৭) পরীক্ষা থেকে অনুপ্রাণিত — কম edge দিয়েও দ্রুত গন্তব্যে পৌঁছানো যায়।
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔬 HNSW: Hierarchical Graph (ANN)</text>
  <rect x="20" y="45" width="170" height="195" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="105" y="65" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">Layer 0 (সব পয়েন্ট)</text>
  <circle cx="50" cy="90" r="5" fill="#22c55e"/>
  <circle cx="90" cy="85" r="5" fill="#fbbf24"/>
  <circle cx="130" cy="100" r="5" fill="#a855f7"/>
  <circle cx="60" cy="130" r="5" fill="#22d3ee"/>
  <circle cx="100" cy="140" r="5" fill="#f87171"/>
  <circle cx="150" cy="150" r="5" fill="#4ade80"/>
  <circle cx="55" cy="175" r="5" fill="#c084fc"/>
  <circle cx="120" cy="180" r="5" fill="#fde68a"/>
  <circle cx="160" cy="210" r="5" fill="#86efac"/>
  <line x1="55" y1="90" x2="87" y2="86" stroke="#475569" stroke-width="1"/>
  <line x1="93" y1="86" x2="127" y2="98" stroke="#475569" stroke-width="1"/>
  <line x1="60" y1="130" x2="97" y2="138" stroke="#475569" stroke-width="1"/>
  <line x1="103" y1="140" x2="147" y2="148" stroke="#475569" stroke-width="1"/>
  <line x1="55" y1="175" x2="117" y2="178" stroke="#475569" stroke-width="1"/>
  <rect x="210" y="45" width="170" height="120" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="295" y="65" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">Layer 1 (কম পয়েন্ট)</text>
  <circle cx="250" cy="90" r="6" fill="#fbbf24"/>
  <circle cx="310" cy="100" r="6" fill="#a855f7"/>
  <circle cx="280" cy="135" r="6" fill="#f87171"/>
  <circle cx="340" cy="140" r="6" fill="#4ade80"/>
  <line x1="256" y1="92" x2="304" y2="98" stroke="#fde68a" stroke-width="1.2"/>
  <line x1="310" y1="106" x2="282" y2="131" stroke="#fde68a" stroke-width="1.2"/>
  <line x1="285" y1="138" x2="335" y2="139" stroke="#fde68a" stroke-width="1.2"/>
  <rect x="400" y="45" width="160" height="90" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="480" y="65" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Layer 2 (entry)</text>
  <circle cx="450" cy="95" r="7" fill="#22c55e"/>
  <circle cx="510" cy="105" r="7" fill="#a855f7"/>
  <line x1="457" y1="97" x2="503" y2="103" stroke="#86efac" stroke-width="1.5"/>
  <defs><marker id="arrD12a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#f87171"/></marker></defs>
  <line x1="450" y1="102" x2="300" y2="120" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrD12a)"/>
  <text x="375" y="115" text-anchor="middle" fill="#fca5a5" font-size="10">greedy descent</text>
  <rect x="210" y="180" width="350" height="55" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="385" y="200" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">Exact O(n) vs ANN O(log n)</text>
  <text x="290" y="218" text-anchor="middle" fill="#f87171" font-size="10">Exact: সব তুলনা → নিখুঁত</text>
  <text x="470" y="218" text-anchor="middle" fill="#4ade80" font-size="10">ANN: গ্রাফ ট্রাভার্স → ৯৯% নিখুঁত, ১০০০*</text>
  <text x="385" y="232" text-anchor="middle" fill="#94a3b8" font-size="10">Malkov 2016 | IVF: cluster + probe</text>
</svg>
</div>
<div class="svg-caption">চিত্র: HNSW বহু-স্তর গ্রাফ — উপরে কম, নিচে ঘন। দ্রুত descent দিয়ে নিকটতম পয়েন্ট।</div>

<div class="code-block"># — Python: HNSW + IVF Comparison —

  import numpy as np
  from sklearn.neighbors import NearestNeighbors

  # ১০ লাখ ভেক্টর, ১২৮-মাত্রিক
  data = np.random.rand(1_000_000, 128).astype('float32')
  query = np.random.rand(128).astype('float32')

  # ❌ Exact (brute force) — O(n)
  nn = NearestNeighbors(algorithm='brute', metric='cosine')
  nn.fit(data)
  dist, idx = nn.kneighbors([query], k=5)
  # সময়: ~২০০ ms per query

  # ✅ HNSW (ANN) — O(log n)
  import hnswlib
  index = hnswlib.Index(space='cosine', dim=128)
  index.init_index(max_elements=1_000_000, ef_construction=200, M=16)
  index.add_items(data, np.arange(len(data)))
  index.set_ef(50)  # search width
  labels, distances = index.knn_query(query, k=5)
  # সময়: ~০.২ ms — ১০০০* দ্রুত!
  # recall@5 ~= ৯৮% (প্রায় নিখুঁত)</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> নিখুঁত অসম্ভব হলে, দ্রুত কাছাকাছিই জয়।<br>
<em>When exact is impossible, fast-and-close wins.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
এটা Book ৪১ (Theory of Computation) Door ৯-এর approximation পাঠের সাথে সরাসরি সংযুক্ত — NP-hard সমস্যায় নিখুঁত সমাধান অসম্ভব, তাই approximation algorithm। ভেক্টর search-ও তেমন — নিখুঁত search O(n), কিন্তু ANN ৯৯% নিখুঁত ১০০০* দ্রুত। ইজতিহাদ — নিশ্চিততা অসম্ভব হলে সর্বোত্তম প্রচেষ্টা।
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

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🤖 RAG: Vector + Relational Hybrid</text>
  <rect x="20" y="50" width="100" height="45" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="70" y="70" text-anchor="middle" fill="#67e8f9" font-size="8" font-weight="700">User Query</text>
  <text x="70" y="85" text-anchor="middle" fill="#7dd3fc" font-size="10">"Explain X"</text>
  <defs><marker id="arrD13a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="120" y1="72" x2="148" y2="72" stroke="#a855f7" stroke-width="2" marker-end="url(#arrD13a)"/>
  <rect x="150" y="50" width="110" height="45" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="205" y="68" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">Embedding</text>
  <text x="205" y="83" text-anchor="middle" fill="#fde68a" font-size="10">→ query vector</text>
  <rect x="30" y="120" width="200" height="110" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="130" y="140" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Vector DB (semantic)</text>
  <rect x="45" y="150" width="80" height="18" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="85" y="162" text-anchor="middle" fill="#86efac" font-size="10">doc A (0.92)</text>
  <rect x="45" y="172" width="80" height="18" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="85" y="184" text-anchor="middle" fill="#86efac" font-size="10">doc C (0.85)</text>
  <rect x="135" y="150" width="80" height="18" rx="3" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="175" y="162" text-anchor="middle" fill="#fde68a" font-size="10">HNSW index</text>
  <text x="175" y="184" text-anchor="middle" fill="#fde68a" font-size="10">ANN search</text>
  <text x="130" y="210" text-anchor="middle" fill="#86efac" font-size="10">অর্থ দিয়ে খোঁজে</text>
  <text x="130" y="222" text-anchor="middle" fill="#94a3b8" font-size="10">Pinecone, pgvector</text>
  <rect x="250" y="120" width="130" height="110" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="315" y="140" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">Relational DB</text>
  <rect x="265" y="150" width="100" height="18" rx="3" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="315" y="162" text-anchor="middle" fill="#c084fc" font-size="10">user_profile</text>
  <rect x="265" y="172" width="100" height="18" rx="3" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="315" y="184" text-anchor="middle" fill="#c084fc" font-size="10">permissions</text>
  <text x="315" y="210" text-anchor="middle" fill="#c084fc" font-size="10">কাঠামো দিয়ে খোঁজে</text>
  <text x="315" y="222" text-anchor="middle" fill="#94a3b8" font-size="10">PostgreSQL, MySQL</text>
  <defs><marker id="arrD13b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/></marker></defs>
  <line x1="230" y1="170" x2="248" y2="170" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrD13b)"/>
  <rect x="410" y="120" width="150" height="110" rx="8" fill="#0f172a" stroke="#f87171" stroke-width="2"/>
  <text x="485" y="140" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">LLM (GPT/Claude)</text>
  <rect x="425" y="150" width="120" height="24" rx="4" fill="#450a0a" stroke="#f87171" stroke-width="1"/>
  <text x="485" y="166" text-anchor="middle" fill="#fca5a5" font-size="10">context + query</text>
  <text x="485" y="190" text-anchor="middle" fill="#fca5a5" font-size="10">→ grounded answer</text>
  <text x="485" y="210" text-anchor="middle" fill="#94a3b8" font-size="10">hallucination কমে</text>
  <text x="485" y="222" text-anchor="middle" fill="#94a3b8" font-size="10">citation সহ</text>
  <defs><marker id="arrD13c" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/></marker></defs>
  <line x1="380" y1="170" x2="408" y2="170" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrD13c)"/>
  <defs><marker id="arrD13d" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="205" y1="95" x2="130" y2="118" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrD13d)"/>
  <line x1="205" y1="95" x2="315" y2="118" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrD13d)"/>
</svg>
</div>
<div class="svg-caption">চিত্র: RAG pipeline — Vector DB (অর্থ) + Relational DB (কাঠামো) → LLM গ্রাউন্ডেড উত্তর।</div>

<div class="code-block"># — Python: Hybrid RAG Pipeline —

  # Vector + Relational hybrid search
  def rag_answer(question, user_id):
      # ১. Query embedding তৈরি
      q_vec = embed_model.encode(question)

      # ২. Vector DB: semantic search
      docs = vector_db.query(
          vector=q_vec, top_k=5,
          filter={"source": "knowledge_base"}
      )  # → প্রাসঙ্গিক অনুচ্ছেদ

      # ৩. Relational DB: structured filter
      user = pg.query(
          "SELECT tier, permissions FROM users WHERE id = %s",
          [user_id]
      )  # → ব্যবহারকারীর অনুমতি

      # ৪. Context একত্রিত করো
      context = "\n".join(d.content for d in docs)
      if user.permissions != "premium":
          context = filter_premium(context)

      # ৫. LLM-কে grounded prompt
      answer = llm.chat(
          messages=[{
              "role": "system",
              "content": "শুধু context থেকে উত্তর দাও"
          }, {
              "role": "user",
              "content": f"Context: {context}\nQ: {question}"
          }]
      )
      return answer  # citation সহ</div>

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
