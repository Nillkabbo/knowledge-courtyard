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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Chunking Destroyed Context:</strong> Naive chunking split a table mid-row — retrieval got half a table. Fix: use semantic chunking, respect document structure.</div></div>


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

<div class="code-block"># ── STEP 1: What is document ingestion? ──
# RAG starts with getting documents INTO the system.
# This is harder than it sounds — every format has quirks.

# THE INGESTION PIPELINE:
pipeline = """
1. LOAD:    Read file (PDF, HTML, DOCX, image, audio)
2. EXTRACT: Get text using format-specific parser
3. CLEAN:   Remove boilerplate, fix encoding, normalize whitespace
4. STRUCTURE: Identify headers, sections, lists, tables
5. METADATA: Tag with source, page, date, author
6. CHUNK:   Split into retrieval-sized pieces
7. EMBED:   Convert each chunk to vector embedding
8. STORE:   Save to vector database (pgvector, Pinecone)
"""

print(pipeline)

# FORMAT CHALLENGES:
formats = {
    "PDF": {
        "common": "Reports, papers, contracts (most common)",
        "problems": "Tables break, multi-column layout confused, images need OCR",
        "tools": "PyMuPDF, pdfplumber, unstructured.io, LlamaParse",
    },
    "HTML": {
        "common": "Web pages, blog posts",
        "problems": "Boilerplate (nav, footer, ads), JS-rendered content missed",
        "tools": "BeautifulSoup, Trafilatura, readability-lxml",
    },
    "DOCX": {
        "common": "Word documents, reports",
        "problems": "Tracked changes, embedded objects",
        "tools": "python-docx, mammoth, unstructured",
    },
    "Scanned images": {
        "common": "Old documents, handwritten notes",
        "problems": "No text layer, need OCR, quality issues",
        "tools": "Tesseract, AWS Textract, Google Document AI",
    },
    "Code": {
        "common": "Source files, documentation",
        "problems": "Syntax noise if not parsed correctly",
        "tools": "tree-sitter, AST-based parsing",
    },
}

print("FORMAT CHALLENGES:")
for fmt, info in formats.items():
    print(f"\n  {fmt}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 2: PDF extraction (the hardest format) ──
# PDFs are the most common AND most difficult format.

# PYTHON PDF EXTRACTION:
pdf_code = """
import fitz  # PyMuPDF

def extract_pdf(path):
    doc = fitz.open(path)
    chunks = []

    for page_num in range(len(doc)):
        page = doc[page_num]

        # Extract text:
        text = page.get_text("text")  # plain text
        # OR: structured extraction:
        blocks = page.get_text("dict")  # layout-aware

        # Extract tables (harder):
        tables = page.find_tables()

        # Extract images (need OCR or vision model):
        images = page.get_images()

        # Create chunk with metadata:
        chunks.append({
            "content": text,
            "metadata": {
                "source": path,
                "page": page_num + 1,
                "section": detect_section(text),
            }
        })

    return chunks
"""

print(pdf_code)

# PDF EXTRACTION TOOLS COMPARISON:
tools = {
    "PyMuPDF (fitz)": "Fast, good text extraction, free",
    "pdfplumber": "Better table extraction, slower",
    "unstructured.io": "Handles ALL formats, API + local, great quality",
    "LlamaParse": "Cloud API, best quality, understands layout",
    "AWS Textract": "Cloud, great for scanned docs, OCR + layout",
    "Google Document AI": "Cloud, enterprise-grade, handles forms",
    "Marker (marker-pdf)": "PDF → Markdown, preserves structure",
}

print("PDF EXTRACTION TOOLS:")
for tool, desc in tools.items():
    print(f"  {tool}: {desc}")

# COMMON PDF PROBLEMS:
problems = """
1. MULTI-COLUMN LAYOUT:
   Text extraction reads across columns (wrong order)
   → Solution: use layout-aware tools (unstructured, LlamaParse)

2. TABLES:
   Columns get merged or split incorrectly
   → Solution: use pdfplumber.find_tables() or Camelot

3. IMAGES WITH TEXT:
   No text layer, need OCR
   → Solution: Tesseract, or GPT-4o vision API

4. ENCODING:
   Special characters (accented, CJK) garbled
   → Solution: explicit UTF-8 encoding, detect_encoding()

5. FORMS:
   Form fields vs labels confused
   → Solution: AWS Textract Forms feature
"""

print(problems)</div>

<div class="code-block"># ── STEP 3: Document cleaning and structuring ──
# Raw extraction is messy. You need to CLEAN and STRUCTURE.

# CLEANING STEPS:
cleaning_code = """
import re

def clean_text(text):
    # 1. Fix encoding:
    text = text.encode('utf-8', errors='ignore').decode('utf-8')

    # 2. Remove excessive whitespace:
    text = re.sub(r'\\s+', ' ', text)  # multiple spaces → one
    text = re.sub(r'\\n{3,}', '\\n\\n', text)  # max 2 newlines

    # 3. Remove common boilerplate:
    boilerplate = [
        r'Copyright \\d{4}.*',  # copyright notices
        r'Page \\d+ of \\d+',   # page numbers
        r'Table of Contents',   # TOC
    ]
    for pattern in boilerplate:
        text = re.sub(pattern, '', text, flags=re.IGNORECASE)

    # 4. Normalize unicode:
    import unicodedata
    text = unicodedata.normalize('NFKC', text)

    return text.strip()
"""

print(cleaning_code)

# STRUCTURE DETECTION:
structure_detection = """
IDENTIFY DOCUMENT STRUCTURE:
  → Headers (H1, H2, H3) for hierarchy
  → Lists (bullet, numbered) for items
  → Tables for structured data
  → Code blocks for technical content
  → Images/figures for visual content

PYTHON STRUCTURE DETECTION:
  from unstructured.partition.auto import partition

  elements = partition("document.pdf")
  for element in elements:
      print(f"Type: {element.category}")  # Title, NarrativeText, Table, etc.
      print(f"Text: {element.text[:100]}")
      print(f"Metadata: {element.metadata.to_dict()}")
"""

print(structure_detection)

# METADATA EXTRACTION:
metadata_fields = {
    "source": "File path or URL (for citations)",
    "page": "Page number (for citations)",
    "section": "Section heading (for context)",
    "author": "Document author",
    "date": "Publication date",
    "language": "Detected language",
    "document_type": "pdf, html, docx, etc.",
    "chunk_index": "Position in document",
}

print("ESSENTIAL METADATA FIELDS:")
for field, desc in metadata_fields.items():
    print(f"  {field}: {desc}")</div>

<div class="code-block"># ── STEP 4: Chunking strategies ──
# Chunking is THE most important RAG decision.
# Bad chunking = bad retrieval = bad answers.

# CHUNKING APPROACHES:
approaches = {
    "Fixed-size": {
        "how": "Split every N characters/words",
        "pro": "Simple, fast, predictable",
        "con": "Can split mid-sentence, mid-thought",
        "best_for": "Quick prototyping, uniform documents",
    },
    "Sentence-based": {
        "how": "Split on sentence boundaries (. ! ?)",
        "pro": "Natural boundaries, preserves meaning",
        "con": "Variable chunk sizes",
        "best_for": "Articles, narratives",
    },
    "Paragraph-based": {
        "how": "Split on paragraph breaks (\\n\\n)",
        "pro": "Preserves topic coherence",
        "con": "Some paragraphs too long/short",
        "best_for": "Blog posts, documentation",
    },
    "Recursive (LangChain)": {
        "how": "Try paragraph → sentence → word until chunk_size",
        "pro": "Adaptive, preserves structure",
        "con": "Slightly more complex",
        "best_for": "General purpose (RECOMMENDED)",
    },
    "Semantic": {
        "how": "Split where meaning changes (using embeddings)",
        "pro": "Best quality chunks",
        "con": "Expensive (needs embedding for each chunk)",
        "best_for": "High-quality production RAG",
    },
    "Document-structure-aware": {
        "how": "Split on headers (H1, H2, H3) + markdown",
        "pro": "Preserves document hierarchy",
        "con": "Needs structured documents",
        "best_for": "Technical docs, manuals",
    },
}

print("CHUNKING APPROACHES:")
for approach, info in approaches.items():
    print(f"\n  {approach}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# CHUNK SIZE GUIDELINES:
chunk_sizes = """
SMALL chunks (100-200 words):
  ✅ Better embedding quality (focused content)
  ✅ More precise retrieval (find exact passage)
  ❌ Less context per chunk (might miss connections)
  ❌ More chunks to search through

LARGE chunks (500-1000 words):
  ✅ More context per chunk (better understanding)
  ✅ Fewer chunks (faster search)
  ❌ Diluted embedding (less precise match)
  ❌ Might exceed LLM context window

SWEET SPOT: 200-500 words with 50-100 word overlap
  → Overlap preserves context at boundaries
  → Most production RAG systems use this range
"""

print(chunk_sizes)</div>

<div class="code-block"># ── STEP 5: LangChain chunking implementation ──
# The most common production chunking approach:

chunking_code = """
from langchain.text_splitter import RecursiveCharacterTextSplitter

# RECOMMENDED: Recursive character text splitter
splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,       # target: 500 characters per chunk
    chunk_overlap=50,     # overlap 50 chars between chunks
    separators=[
        "\\n\\n",          # split on paragraphs first
        "\\n",             # then on lines
        ". ",              # then on sentences
        " ",               # then on words
        "",                # finally on characters
    ],
    length_function=len,
)

# Split a document:
document = open("handbook.pdf").read()
chunks = splitter.split_text(document)
print(f"Split into {len(chunks)} chunks")

# Each chunk:
for i, chunk in enumerate(chunks[:3]):
    print(f"\\nChunk {i}: {len(chunk)} chars")
    print(chunk[:100] + "...")
"""

print(chunking_code)

# ADVANCED: DOCUMENT-STRUCTURE-AWARE SPLITTING:
structure_split = """
from langchain.text_splitter import MarkdownHeaderTextSplitter

# Split markdown by headers (preserves hierarchy):
header_splitter = MarkdownHeaderTextSplitter(
    headers_to_split_on=[
        ("#", "Header 1"),
        ("##", "Header 2"),
        ("###", "Header 3"),
    ]
)

# Each chunk includes its header context:
# Chunk content + "Section: Installation > Prerequisites"
# → embedding includes section context
# → better retrieval accuracy
"""

print(structure_split)

# METADATA-AWARE CHUNKING:
metadata_chunking = """
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Each chunk keeps document metadata:
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)

documents = [{"content": text, "metadata": {"source": "file.pdf", "page": 1}}]
chunks = splitter.split_documents(documents)

for chunk in chunks:
    # chunk.metadata preserved through splitting
    print(f"{chunk.metadata['source']} p.{chunk.metadata['page']}: {chunk.page_content[:50]}...")
"""

print(metadata_chunking)

# CHUNK SIZE TUNING:
# Start with 500 chars, measure retrieval quality
# If too many irrelevant results → smaller chunks
# If missing context → larger chunks or more overlap</div>

<div class="code-block"># ── STEP 6: Embedding and storing ──
# After chunking, embed and store in vector database.

# PYTHON IMPLEMENTATION (Django + pgvector):
store_code = """
from openai import OpenAI
from pgvector.django import VectorField
from django.db import models

client = OpenAI()

class Document(models.Model):
    content = models.TextField()
    embedding = VectorField(dimensions=1536)
    metadata = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)

    @classmethod
    def ingest(cls, file_path):
        # 1. Extract text:
        text = extract_text(file_path)

        # 2. Clean:
        text = clean_text(text)

        # 3. Chunk:
        chunks = chunk_text(text, size=500, overlap=50)

        # 4. Embed all chunks (batch for efficiency):
        embeddings = client.embeddings.create(
            model="text-embedding-3-small",
            input=chunks  # batch (cheaper than one-by-one)
        ).data

        # 5. Store in database:
        documents = []
        for chunk, emb in zip(chunks, embeddings):
            doc = cls.objects.create(
                content=chunk,
                embedding=emb.embedding,
                metadata={"source": file_path, "chunk_size": len(chunk)},
            )
            documents.append(doc)

        return documents
"""

print(store_code)

# BATCH EMBEDDING (cost optimization):
batch_code = """
# Embedding API charges per token.
# Batch requests are MUCH cheaper than individual:

chunks = ["chunk1", "chunk2", "chunk3", ...]  # 100+ chunks

# ❌ EXPENSIVE (one API call per chunk):
for chunk in chunks:
    embedding = client.embeddings.create(input=chunk)  # 100 API calls!

# ✅ CHEAP (one API call for all):
response = client.embeddings.create(
    model="text-embedding-3-small",
    input=chunks  # 1 API call, batch pricing
)

# OpenAI allows up to 2048 inputs per batch request.
# This is 10-100x cheaper and faster!
"""

print(batch_code)

# INGESTION CHECKLIST:
checklist = [
    "Extract text from source format (PDF/HTML/DOCX)",
    "Clean text (remove boilerplate, fix encoding)",
    "Detect document structure (headers, sections)",
    "Add metadata (source, page, date, author)",
    "Chunk with appropriate strategy (200-500 words)",
    "Use overlap (50-100 words) for context continuity",
    "Batch embed all chunks (cheaper, faster)",
    "Store in vector database with metadata",
    "Create HNSW index for fast search",
    "Test retrieval quality on sample queries",
    "Monitor and re-ingest when documents change",
]

print("INGESTION CHECKLIST:")
for item in checklist:
    print(f"  ☐ {item}")

# THE BIG PICTURE:
# Good ingestion = good RAG.
# The quality of your RAG system is limited by the quality of your data pipeline.
# "Garbage in, garbage out" — invest in ingestion quality.
# The ingestion pipeline is the FOUNDATION of every RAG system.</div>

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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Embedding Model Mismatch:</strong> Query used OpenAI embeddings, docs used local model — similarity was meaningless. Fix: SAME embedding model for queries and docs.</div></div>


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

<div class="code-block"># ── STEP 1: The vector search problem ──
# After ingesting documents, you need to FIND relevant ones quickly.

# THE PROBLEM:
problem = """
You have 1,000,000 document embeddings (each 1536 dimensions).
A user asks a question → you embed it → find TOP K nearest.

BRUTE FORCE (compare query to ALL 1M vectors):
  → ~1000ms per query
  → 1 QPS (queries per second) max
  → Not viable for production!

WITH INDEX (HNSW):
  → ~5ms per query
  → 200,000 QPS possible
  → Production-ready!

The index trades a little accuracy for MASSIVE speed.
This is called APPROXIMATE NEAREST NEIGHBOR (ANN) search.
"""

print(problem)

# INDEX ALGORITHMS:
algorithms = {
    "HNSW (Hierarchical Navigable Small World)": {
        "speed": "Fastest (5ms for 1M vectors)",
        "recall": "95-98%",
        "memory": "High (stores graph topology)",
        "used_by": "Pinecone, Qdrant, Weaviate, Milvus, pgvector",
    },
    "IVF (Inverted File Index)": {
        "speed": "Fast (depends on nprobe)",
        "recall": "90-95%",
        "memory": "Moderate",
        "used_by": "FAISS, Milvus",
    },
    "IVF + PQ (Product Quantization)": {
        "speed": "Very fast (compressed vectors)",
        "recall": "85-90%",
        "memory": "Low (10x compression)",
        "used_by": "FAISS (for billion-scale)",
    },
    "FLAT (Brute Force)": {
        "speed": "Slow (1000ms for 1M)",
        "recall": "100% (exact)",
        "memory": "Baseline",
        "used_by": "Small datasets (< 100K)",
    },
}

print("INDEX ALGORITHMS:")
for algo, info in algorithms.items():
    print(f"\n  {algo}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 2: HNSW index (the industry standard) ──
# HNSW is used by virtually ALL modern vector databases.

# HOW HNSW WORKS:
hnsw = """
HNSW builds a MULTI-LAYER GRAPH:

Top layer:    few nodes, long-distance connections (fast navigation)
Middle layers: more nodes, medium connections
Bottom layer: ALL nodes, short connections (precise search)

SEARCH PROCESS:
  1. Start at TOP layer (sparse, fast)
  2. Navigate toward query (greedy: move to closer node)
  3. Drop to next layer (more detail)
  4. Repeat until BOTTOM layer
  5. Return K nearest neighbors

Like zooming on Google Maps:
  Start at country view → zoom to state → city → street
"""

print(hnsw)

# HNSW PARAMETERS:
parameters = {
    "m (max connections)": {
        "default": 16,
        "effect": "Higher = more recall, more memory",
        "range": "8-64",
    },
    "ef_construction": {
        "default": 64,
        "effect": "Higher = better index quality, slower build",
        "range": "32-256",
    },
    "ef_search": {
        "default": 40,
        "effect": "Higher = more recall, slower query",
        "range": "20-200",
    },
}

print("HNSW PARAMETERS:")
for param, info in parameters.items():
    print(f"\n  {param}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# CREATE HNSW INDEX IN pgvector:
pgvector_sql = """
-- Create HNSW index:
CREATE INDEX idx_docs_embedding
ON documents USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);

-- Set search-time ef:
SET hnsw.ef_search = 100;  -- higher = more recall

-- Query:
SELECT content, 1 - (embedding <=> $1) AS similarity
FROM documents
ORDER BY embedding <=> $1
LIMIT 5;
"""

print(pgvector_sql)</div>

<div class="code-block"># ── STEP 3: Vector database comparison ──
# Which vector database should you choose?

databases = {
    "pgvector (PostgreSQL)": {
        "type": "SQL extension",
        "pro": "Use SQL + vectors together! No new infra.",
        "con": "Not fastest at huge scale (>10M vectors)",
        "best_for": "Small-medium apps, already using PostgreSQL",
        "cost": "Free (open source)",
    },
    "Pinecone": {
        "type": "Managed SaaS",
        "pro": "Fully managed, serverless, production-ready",
        "con": "Vendor lock-in, cost at scale",
        "best_for": "Teams that don't want to manage infra",
        "cost": "Free tier, then pay-per-use",
    },
    "Qdrant": {
        "type": "Open source (Rust) + Cloud",
        "pro": "Fast, rich filtering, great API",
        "con": "Newer ecosystem than Pinecone",
        "best_for": "Performance-critical apps with filtering",
        "cost": "Free (self-hosted) or Cloud",
    },
    "Chroma": {
        "type": "Open source, Python-native",
        "pro": "Easy setup, great for development",
        "con": "Not production-hardened at scale",
        "best_for": "Prototyping, development, small projects",
        "cost": "Free",
    },
    "Milvus / Zilliz": {
        "type": "Open source / managed",
        "pro": "Extremely scalable (billions of vectors)",
        "con": "Complex deployment (self-hosted)",
        "best_for": "Large-scale enterprise production",
        "cost": "Free (self-hosted) or Cloud",
    },
    "Weaviate": {
        "type": "Open source",
        "pro": "GraphQL API, built-in modules (auto-embedding)",
        "con": "Complex configuration",
        "best_for": "Apps needing auto-embedding + GraphQL",
        "cost": "Free (self-hosted) or Cloud",
    },
}

print("VECTOR DATABASE COMPARISON:")
for db, info in databases.items():
    print(f"\n  {db}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# DECISION TREE:
decision = """
CHOOSING A VECTOR DATABASE:

Already using PostgreSQL?
  → pgvector (no new infrastructure)

Need managed (no ops)?
  → Pinecone (easiest) or Qdrant Cloud

Need maximum scale (billions)?
  → Milvus or Pinecone

Need rich filtering?
  → Qdrant (best filtering engine)

Just prototyping?
  → Chroma (simplest setup)

Need auto-embedding (no separate API)?
  → Weaviate (built-in embedding models)
"""

print(decision)</div>

<div class="code-block"># ── STEP 4: Metadata filtering in vector search ──
# Real-world RAG needs VECTOR SEARCH + METADATA FILTERING.

# EXAMPLE: "Find documents about Python, from 2024, in the 'tutorials' category"
# This needs BOTH vector similarity AND metadata filtering.

# FILTERING APPROACHES:
filtering = {
    "Pre-filtering": {
        "how": "Filter metadata FIRST, then vector search on subset",
        "pro": "Fast (searches fewer vectors), accurate",
        "con": "Some vector DBs don't support this well",
        "supported_by": "Qdrant, Weaviate, Pinecone",
    },
    "Post-filtering": {
        "how": "Vector search ALL vectors, then filter results",
        "pro": "Works everywhere",
        "con": "Slow (searches everything), might get too few results",
        "supported_by": "All (but not recommended)",
    },
    "Single-stage": {
        "how": "Combined filter + vector search in one operation",
        "pro": "Best of both (fast + accurate)",
        "con": "Only supported by advanced databases",
        "supported_by": "Pinecone, Qdrant, Weaviate",
    },
}

print("FILTERING APPROACHES:")
for approach, info in filtering.items():
    print(f"\n  {approach}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# pgvector WITH FILTERING:
pgvector_filter = """
-- Vector search + metadata filter in one query:
SELECT content, 1 - (embedding <=> $1) AS similarity
FROM documents
WHERE metadata->>'category' = 'tutorials'     -- metadata filter
  AND metadata->>'date' >= '2024-01-01'       -- date filter
  AND metadata->>'source' = 'python_docs'     -- source filter
ORDER BY embedding <=> $1                       -- vector similarity
LIMIT 5;

-- This uses BOTH the HNSW index (for vectors)
-- AND the GIN index (for metadata) for optimal performance.

-- Create indexes:
CREATE INDEX idx_docs_embedding ON documents
    USING hnsw (embedding vector_cosine_ops);
CREATE INDEX idx_docs_metadata ON documents
    USING gin (metadata);
"""

print(pgvector_filter)

# DJANGO ORM WITH FILTERING:
django_filter = """
from pgvector.django import CosineDistance
from django.db.models import Q

def search_with_filters(query_embedding, category=None, date_from=None):
    qs = Document.objects.annotate(
        distance=CosineDistance('embedding', query_embedding)
    )

    # Apply metadata filters:
    if category:
        qs = qs.filter(metadata__category=category)
    if date_from:
        qs = qs.filter(metadata__date__gte=date_from)

    return qs.order_by('distance')[:5]
"""

print(django_filter)</div>

<div class="code-block"># ── STEP 5: Hybrid search (vector + keyword) ──
# Vector search finds by MEANING. Keyword search finds by EXACT MATCH.
# HYBRID combines both for best results.

# WHY HYBRID IS BETTER:
why_hybrid = """
VECTOR SEARCH (semantic):
  Query: "machine learning"
  Finds: "ML", "artificial intelligence", "neural networks"
  ✅ Great for synonyms and related concepts
  ❌ Misses exact keyword matches (e.g., proper nouns, IDs)

KEYWORD SEARCH (BM25):
  Query: "Python 3.12"
  Finds: documents containing EXACTLY "Python 3.12"
  ✅ Great for exact matches, proper nouns, codes
  ❌ Misses synonyms and related concepts

HYBRID (both):
  Combines vector similarity + keyword matching
  → Gets the best of both worlds
  → Higher recall and precision than either alone
"""

print(why_hybrid)

# HYBRID SEARCH IMPLEMENTATION:
hybrid_code = """
import numpy as np

def hybrid_search(query, query_embedding, top_k=5):
    # 1. Vector search (semantic):
    vector_results = Document.objects.annotate(
        distance=CosineDistance('embedding', query_embedding)
    ).filter(distance__lt=0.3).order_by('distance')[:20]

    # 2. Keyword search (BM25 via PostgreSQL full-text):
    from django.contrib.postgres.search import SearchVector, SearchQuery
    keyword_results = Document.objects.annotate(
        search=SearchVector('content')
    ).filter(search=SearchQuery(query))[:20]

    # 3. Merge and re-rank:
    all_results = set(vector_results) | set(keyword_results)
    scored = [(r, compute_combined_score(r, query)) for r in all_results]
    scored.sort(key=lambda x: -x[1])

    return scored[:top_k]

def compute_combined_score(doc, query, alpha=0.7):
    # alpha = weight for vector, (1-alpha) = weight for keyword
    vector_score = doc.vector_similarity  # 0-1
    keyword_score = doc.keyword_match     # 0-1
    return alpha * vector_score + (1 - alpha) * keyword_score
"""

print(hybrid_code)

# PostgreSQL FULL-TEXT SEARCH (built-in):
fts_sql = """
-- Built-in keyword search (no extra setup):
SELECT content, ts_rank_cd(search_vector, query) AS rank
FROM documents, plainto_tsquery('english', 'Python tutorial') query
WHERE search_vector @@ query
ORDER BY rank DESC
LIMIT 5;

-- Create search vector index:
ALTER TABLE documents ADD COLUMN search_vector tsvector
    GENERATED ALWAYS AS (to_tsvector('english', content)) STORED;

CREATE INDEX idx_docs_search ON documents USING gin(search_vector);
"""

print(fts_sql)</div>

<div class="code-block"># ── STEP 6: Re-ranking for precision ──
# After initial retrieval, RE-RANK for higher precision.

# WHY RE-RANKING:
reranking = """
INITIAL RETRIEVAL (fast, approximate):
  → Vector search returns top 20-50 candidates
  → Fast but imprecise (HNSW is approximate)

RE-RANKING (slow, precise):
  → Cross-encoder scores each candidate against query
  → Much more accurate than vector similarity
  → Only runs on 20-50 candidates (not all 1M)

Result: near-exact quality at near-approximate speed.
"""

print(reranking)

# RE-RANKING MODELS:
reranking_models = {
    "Cohere Rerank": {
        "type": "API (cloud)",
        "quality": "Best",
        "cost": "Pay per request",
        "speed": "Fast (API)",
    },
    "BGE-Reranker (local)": {
        "type": "Open source model",
        "quality": "Very good",
        "cost": "Free (runs locally)",
        "speed": "Moderate (needs GPU)",
    },
    "Cross-Encoder (ms-marco)": {
        "type": "Open source (sentence-transformers)",
        "quality": "Good",
        "cost": "Free",
        "speed": "Moderate",
    },
}

print("RE-RANKING MODELS:")
for model, info in reranking_models.items():
    print(f"\n  {model}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# RE-RANKING IMPLEMENTATION:
rerank_code = """
from sentence_transformers import CrossEncoder

# Load cross-encoder model:
reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')

def rerank_results(query, documents, top_k=5):
    # Create query-document pairs:
    pairs = [(query, doc.content) for doc in documents]

    # Score each pair (cross-encoder evaluates both together):
    scores = reranker.predict(pairs)

    # Sort by score:
    ranked = sorted(zip(documents, scores), key=lambda x: -x[1])

    # Return top K:
    return [doc for doc, score in ranked[:top_k]]

# USAGE:
# 1. Vector search: get top 20 (fast, approximate)
# 2. Re-rank: score 20 candidates (slow, precise)
# 3. Return top 5 (best quality)
initial_results = vector_search(query, top_k=20)
final_results = rerank_results(query, initial_results, top_k=5)
"""

print(rerank_code)

# INDEXING CHECKLIST:
checklist = """
INDEXING CHECKLIST:
  ☐ Choose the right index (HNSW for most cases)
  ☐ Tune HNSW parameters (m, ef_construction, ef_search)
  ☐ Add metadata indexes (GIN for JSONB)
  ☐ Implement hybrid search (vector + keyword)
  ☐ Add re-ranking for precision (cross-encoder)
  ☐ Monitor recall and latency
  ☐ Re-index when data changes significantly
  ☐ Benchmark with YOUR data (not synthetic)
"""

print(checklist)

# THE BIG PICTURE:
# Indexing is the ENGINE of RAG.
# Good indexing = fast, accurate retrieval.
# Bad indexing = slow, irrelevant results.
# Invest in getting this right — it affects EVERYTHING downstream.</div>
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Retrieved Wrong Documents:</strong> Top-5 docs were irrelevant — question about 'bank' (finance) got 'bank' (river). Fix: use hybrid search.</div></div>


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

<div class="code-block"># ── STEP 1: What is naive RAG? ──
# The SIMPLEST possible RAG pipeline. 3 steps.

# NAIVE RAG PIPELINE:
pipeline = """
1. INGEST: Embed all documents → store in vector database
2. RETRIEVE: Embed query → search top-K chunks
3. GENERATE: Chunks + query → LLM → answer

That's it. No fancy techniques. Just embed → search → answer.
"""

print(pipeline)

# PYTHON IMPLEMENTATION:
naive_rag = """
from openai import OpenAI

client = OpenAI()

def naive_rag(question, top_k=5):
    # Step 1: Embed the question
    query_embedding = client.embeddings.create(
        model="text-embedding-3-small",
        input=question
    ).data[0].embedding

    # Step 2: Vector search
    from pgvector.django import CosineDistance
    docs = Document.objects.annotate(
        distance=CosineDistance('embedding', query_embedding)
    ).order_by('distance')[:top_k]

    # Step 3: Build context and generate answer
    context = "\\n\\n".join([d.content for d in docs])
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": f"Answer based on: {context}"},
            {"role": "user", "content": question}
        ]
    )
    return response.choices[0].message.content
"""

print(naive_rag)

# WHEN NAIVE RAG IS ENOUGH:
when_enough = {
    "Small knowledge base": "< 100 documents",
    "Simple factoid questions": "Who/what/when queries",
    "Prototyping": "Demo or proof of concept",
    "Low-stakes": "60% accuracy is acceptable",
}

print("WHEN NAIVE RAG IS ENOUGH:")
for case, desc in when_enough.items():
    print(f"  {case}: {desc}")</div>

<div class="code-block"># ── STEP 2: Where naive RAG fails ──
# Naive RAG gets ~60% accuracy. Here's what goes wrong:

failure_modes = {
    "1. WRONG CHUNKS (25% of failures)": {
        "problem": "Retrieves semantically similar but WRONG chunks",
        "example": "Query: 'Q3 revenue?' → Retrieved: Q2 revenue",
        "cause": "Keyword overlap misleads dense search",
        "fix": "Metadata filtering (filter by quarter)",
    },
    "2. INCOMPLETE CONTEXT (10% of failures)": {
        "problem": "Comparison questions need BOTH entities",
        "example": "Query: 'Compare A vs B' → Retrieved: only A",
        "cause": "Single retrieval can't find both",
        "fix": "Multi-query retrieval (search for A and B separately)",
    },
    "3. CHUNKS OUT OF CONTEXT (5% of failures)": {
        "problem": "Retrieved chunk loses surrounding context",
        "example": "Query: 'What did the author conclude?' → mid-paragraph sentence",
        "cause": "Chunking too small, context lost",
        "fix": "Parent-child retrieval (retrieve small, return large)",
    },
    "4. STALE INFORMATION": {
        "problem": "Old documents mixed with new ones",
        "example": "Query: 'current API' → Retrieved: 2022 API docs",
        "cause": "No time-based filtering",
        "fix": "Date metadata + recency filtering",
    },
    "5. IRRELEVANT NOISE": {
        "problem": "Too many chunks, some irrelevant",
        "example": "Query: 'Python list sort' → Retrieved: sorting + threading + networking",
        "cause": "Top-K too large, no relevance threshold",
        "fix": "Similarity threshold + re-ranking",
    },
}

print("NAIVE RAG FAILURE MODES:")
for mode, info in failure_modes.items():
    print(f"\n  {mode}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 3: Accuracy benchmarks ──
# How well does naive RAG do on different question types?

benchmarks = {
    "Factoid (who/what)": {"accuracy": "75%", "note": "Good for simple lookups"},
    "Definition": {"accuracy": "80%", "note": "Best case (single chunk answers)"},
    "Comparison (A vs B)": {"accuracy": "45%", "note": "Needs both entities"},
    "Multi-hop reasoning": {"accuracy": "30%", "note": "Needs chain of retrievals"},
    "Temporal (when)": {"accuracy": "50%", "note": "Needs date filtering"},
    "Numerical": {"accuracy": "40%", "note": "Numbers fragment in chunks"},
    "Summary": {"accuracy": "55%", "note": "Needs multiple chunks"},
    "Overall average": {"accuracy": "54%", "note": "Not production-ready"},
}

print("NAIVE RAG ACCURACY BY QUESTION TYPE:")
for qtype, data in benchmarks.items():
    print(f"  {qtype}: {data['accuracy']} ({data['note']})")

# KEY INSIGHT:
insight = """
Naive RAG works for SIMPLE questions (75-80%)
but FAILS on COMPLEX questions (30-45%).

Production RAG needs:
  → Query transformation (rewrite ambiguous queries)
  → Advanced retrieval (multi-query, parent-child)
  → Re-ranking (improve precision)
  → Filtering (metadata, date, source)
  → Evaluation (measure and improve)

Each advanced technique adds 5-15% accuracy.
Combined, they can reach 85-95% accuracy.
"""

print(insight)

# THE RAG ACCURACY LADDER:
ladder = """
ACCURACY LADDER (what each technique adds):

Naive RAG (embed → search → answer):           54%
+ Query transformation (rewrite queries):      62%
+ Hybrid search (vector + keyword):            68%
+ Re-ranking (cross-encoder):                  75%
+ Metadata filtering:                          80%
+ Multi-query retrieval:                       85%
+ Parent-child chunking:                       88%
+ Evaluation + optimization:                  90-95%

Each door in this book adds a technique that improves accuracy.
"""

print(ladder)</div>

<div class="code-block"># ── STEP 4: Improving on naive RAG ──
# Quick fixes that dramatically improve naive RAG:

# FIX 1: ADD A SIMILARITY THRESHOLD:
fix1 = """
# Don't just return top-K — FILTER by similarity:
docs = Document.objects.annotate(
    distance=CosineDistance('embedding', query_embedding)
).filter(
    distance__lt=0.3  # only relevant enough (similarity > 0.7)
).order_by('distance')[:5]

# If no chunks pass threshold → "I don't have information about that."
if not docs:
    return "I don't have information about that topic."
"""

print("FIX 1: Similarity threshold:")
print(fix1)

# FIX 2: IMPROVE THE PROMPT:
fix2 = """
# Better system prompt = better answers:
system_prompt = \"\"\"You are a helpful assistant. Answer the question
based ONLY on the provided context. Rules:
1. If the answer is not in the context, say "I don't know."
2. Cite sources using [Source N] format.
3. Be concise and factual.
4. Do not make up information.\"\"\"
"""

print("FIX 2: Better system prompt:")
print(fix2)

# FIX 3: ADD CITATIONS:
fix3 = """
# Tag each chunk with its source:
context_parts = []
for i, doc in enumerate(docs, 1):
    context_parts.append(f"[Source {i}] ({doc.metadata['source']}, p.{doc.metadata['page']}): {doc.content}")
context = "\\n\\n".join(context_parts)

# LLM can now cite: "According to [Source 2]..."
"""

print("FIX 3: Citations:")
print(fix3)

# FIX 4: USE LOW TEMPERATURE:
fix4 = """
# For factual RAG, use temperature=0:
response = client.chat.completions.create(
    model="gpt-4",
    messages=messages,
    temperature=0,  # deterministic, factual
)
# Higher temperature = more hallucination risk
"""

print("FIX 4: Low temperature:")
print(fix4)</div>

<div class="code-block"># ── STEP 5: Naive RAG with anti-hallucination ──
# The MOST IMPORTANT improvement: prevent hallucination.

# PRODUCTION-GRADE NAIVE RAG:
production_naive = """
def safe_rag(question, top_k=5):
    # 1. Embed query
    query_embedding = embed(question)

    # 2. Retrieve with threshold
    docs = Document.objects.annotate(
        distance=CosineDistance('embedding', query_embedding)
    ).filter(
        distance__lt=0.3  # similarity threshold
    ).order_by('distance')[:top_k]

    # 3. Handle no results
    if not docs:
        return {
            "answer": "I don't have information about that topic.",
            "sources": [],
            "confidence": 0.0,
        }

    # 4. Build context with citations
    context_parts = []
    sources = []
    for i, doc in enumerate(docs, 1):
        context_parts.append(f"[Doc {i}] {doc.content}")
        sources.append({
            "doc_id": doc.id,
            "source": doc.metadata.get('source', 'unknown'),
            "page": doc.metadata.get('page', 0),
            "similarity": 1 - doc.distance,
        })
    context = "\\n\\n".join(context_parts)

    # 5. Generate with strict anti-hallucination prompt
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": (
                    "Answer the question based ONLY on the context below. "
                    "If the answer is not in the context, say "
                    "'I don't have that information.' "
                    "Cite sources using [Doc N] format. "
                    "Be concise and factual."
                )
            },
            {
                "role": "user",
                "content": f"Context:\\n{context}\\n\\nQuestion: {question}"
            }
        ],
        temperature=0,
    )

    return {
        "answer": response.choices[0].message.content,
        "sources": sources,
        "confidence": min(d.similarity for d in docs),  # lowest similarity
    }
"""

print(production_naive)

# WHAT THIS ADDS OVER BASIC NAIVE RAG:
improvements = [
    "Similarity threshold (filters irrelevant chunks)",
    "No-results handling ('I don't have information')",
    "Source citations (traceability)",
    "Strict anti-hallucination prompt",
    "Temperature=0 (deterministic)",
    "Confidence score (lowest similarity)",
    "Structured output (answer + sources + confidence)",
]

print("IMPROVEMENTS OVER BASIC NAIVE RAG:")
for imp in improvements:
    print(f"  ✅ {imp}")</div>

<div class="code-block"># ── STEP 6: When to upgrade from naive RAG ──
# Signals that you need advanced RAG techniques:

upgrade_signals = {
    "Users complain about wrong answers": "Retrieval quality issues → re-ranking",
    "Comparison questions fail": "Need multi-query retrieval",
    "Stale information returned": "Need date-based filtering",
    "Long documents poorly handled": "Need parent-child chunking",
    "Multilingual queries fail": "Need multilingual embedding model",
    "Too many irrelevant results": "Need similarity threshold + re-ranking",
    "Questions need multiple steps": "Need multi-hop reasoning",
    "Users need exact citations": "Need source tracking + metadata",
    "Accuracy < 70%": "Need query transformation + hybrid search",
    "Production deployment": "Need evaluation framework (RAGAS)",
}

print("WHEN TO UPGRADE FROM NAIVE RAG:")
for signal, solution in upgrade_signals.items():
    print(f"  {signal}")
    print(f"    → {solution}")

# UPGRADE PATH:
upgrade_path = """
FROM NAIVE TO ADVANCED RAG:

Level 1 (Naive): embed → search → generate
  Accuracy: ~54%

Level 2 (Basic improvements):
  + Similarity threshold
  + Anti-hallucination prompt
  + Citations
  + Low temperature
  Accuracy: ~65%

Level 3 (Query transformation):
  + Rewrite ambiguous queries
  + Multi-query generation
  + Query expansion
  Accuracy: ~75%

Level 4 (Advanced retrieval):
  + Hybrid search (vector + keyword)
  + Re-ranking (cross-encoder)
  + Parent-child chunking
  + Metadata filtering
  Accuracy: ~85%

Level 5 (Production RAG):
  + RAGAS evaluation
  + A/B testing
  + Monitoring + alerting
  + Continuous improvement
  Accuracy: ~90-95%

Each door in this book moves you one level up.
"""

print(upgrade_path)

# THE BIG PICTURE:
# Start with naive RAG. Ship it. Get user feedback.
# Then add techniques ONE AT A TIME, measuring accuracy at each step.
# Don't over-engineer — naive RAG + good prompts can be enough for simple use cases.
# Add complexity ONLY when you can measure its impact.</div>

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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Context Window Overflow:</strong> RAG retrieved 50 documents — 200K tokens — didn't fit. Fix: limit retrieved chunks, use reranking.</div></div>


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

<div class="code-block"># ── STEP 1: Parent-child chunking (small-to-big) ──
# Problem: small chunks = better retrieval, but lose context.
#          large chunks = better context, but worse precision.
# Solution: TWO representations per chunk!

parent_child = """
PARENT-CHILD CHUNKING:

Child chunk (200 tokens): used for RETRIEVAL
  → Small = precise embedding match
  → Finds the exact relevant passage

Parent chunk (1000 tokens): sent to LLM
  → Large = full context for the answer
  → LLM sees surrounding information

FLOW:
  1. Query → embed → search child chunks → find best child
  2. Look up the PARENT of that child
  3. Send PARENT to LLM (not the child)

Result: precise retrieval + full context = best of both worlds.
"""

print(parent_child)

# PYTHON IMPLEMENTATION:
parent_child_code = """
# Store both child and parent:
class Document(models.Model):
    content = models.TextField()
    embedding = VectorField(dimensions=1536)
    parent_id = models.ForeignKey('self', null=True, on_delete=models.CASCADE)
    is_child = models.BooleanField(default=False)

# Ingestion: create parent, then split into children
parent = Document.objects.create(content=full_text, is_child=False)
children = splitter.split_text(full_text)
for child_text in children:
    Document.objects.create(
        content=child_text,
        embedding=embed(child_text),
        parent_id=parent,
        is_child=True,
    )

# Retrieval: search children, return parents
child = Document.objects.filter(is_child=True).annotate(
    distance=CosineDistance('embedding', query_embedding)
).order_by('distance').first()

# Return the PARENT (with full context):
result = child.parent  # 1000 tokens instead of 200
"""

print(parent_child_code)</div>

<div class="code-block"># ── STEP 2: HyDE (Hypothetical Document Embeddings) ──
# Problem: queries are SHORT, documents are LONG. Embedding mismatch.
# Solution: generate a HYPOTHETICAL answer, embed THAT instead.

hyde = """
HOW HyDE WORKS:

1. User query: "What is RAG?"
2. Ask LLM to generate a HYPOTHETICAL answer:
   "RAG combines retrieval with generation. It retrieves
    relevant documents and feeds them to an LLM..."
3. Embed the HYPOTHETICAL answer (not the query)
4. Search with this embedding

WHY IT WORKS:
  Query embedding: [short, question-like] → doesn't match documents well
  Hypothetical answer: [long, document-like] → matches documents much better!

The hypothetical answer is WRONG (hallucinated), but its EMBEDDING
is similar to real documents about the topic.
→ Better retrieval even though the answer itself is fabricated.

Paper: Gao et al. (2023) "Precise Zero-Shot Dense Retrieval"
"""

print(hyde)

# HyDE IMPLEMENTATION:
hyde_code = """
def hyde_retrieve(query, top_k=5):
    # 1. Generate hypothetical answer:
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "Generate a brief, factual answer."},
            {"role": "user", "content": query}
        ],
        temperature=0.7,
        max_tokens=200,
    )
    hypothetical_answer = response.choices[0].message.content

    # 2. Embed the hypothetical answer:
    hyde_embedding = embed(hypothetical_answer)

    # 3. Search with this embedding:
    docs = Document.objects.annotate(
        distance=CosineDistance('embedding', hyde_embedding)
    ).order_by('distance')[:top_k]

    return docs
"""

print(hyde_code)

# WHEN TO USE HyDE:
when_hyde = {
    "Short queries": "HyDE shines when queries are very short",
    "Technical queries": "Generates domain-specific terminology",
    "Cross-language": "Generate in document language, then search",
    "Complex questions": "Hypothetical answer captures nuance",
}
print("WHEN TO USE HyDE:")
for case, desc in when_hyde.items():
    print(f"  {case}: {desc}")</div>

<div class="code-block"># ── STEP 3: Query transformation techniques ──
# Transform the user's query BEFORE retrieval for better results.

transformations = {
    "Query Rewriting": {
        "what": "LLM rewrites query for better document matching",
        "example": "'revenue' → 'What was total revenue for Q3 2024?'",
        "gain": "+5-10% accuracy",
    },
    "Query Expansion": {
        "what": "Add synonyms and related terms",
        "example": "'ML' → 'machine learning, ML, AI, deep learning, neural nets'",
        "gain": "+5-8% accuracy",
    },
    "Sub-question Decomposition": {
        "what": "Split complex query into sub-questions",
        "example": "'Compare GPT-4 vs Claude' → ['GPT-4 strengths?', 'Claude strengths?']",
        "gain": "+10-15% accuracy",
    },
    "Step-Back Prompting": {
        "what": "Generate a broader context query first",
        "example": "'Einstein 1905 photoelectric' → 'What is photoelectric effect?'",
        "gain": "+8-12% accuracy",
    },
    "Multi-Query Generation": {
        "what": "Generate N different phrasings, search all",
        "example": "'Python sort list' → ['sort Python array', 'Python sorted() function', ...]",
        "gain": "+10-15% accuracy",
    },
}

print("QUERY TRANSFORMATION TECHNIQUES:")
for technique, info in transformations.items():
    print(f"\n  {technique}")
    print(f"    What: {info['what']}")
    print(f"    Example: {info['example']}")
    print(f"    Gain: {info['gain']}")

# MULTI-QUERY IMPLEMENTATION:
multi_query_code = """
def multi_query_retrieve(query, n_queries=3, top_k=5):
    # 1. Generate N alternative queries:
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": f"Generate {n_queries} alternative phrasings of this query, one per line."},
            {"role": "user", "content": query}
        ],
        temperature=0.7,
    )
    queries = [query] + response.choices[0].message.content.strip().split("\\n")

    # 2. Search with each query:
    all_results = []
    for q in queries:
        q_emb = embed(q)
        results = Document.objects.annotate(
            distance=CosineDistance('embedding', q_emb)
        ).order_by('distance')[:top_k]
        all_results.extend(results)

    # 3. Deduplicate and rank by frequency:
    # Chunks found by multiple queries = more relevant
    from collections import Counter
    doc_counts = Counter(all_results)
    ranked = doc_counts.most_common(top_k)

    return [doc for doc, count in ranked]
"""

print(multi_query_code)</div>

<div class="code-block"># ── STEP 4: Ensemble retrieval (combine multiple methods) ──
# Don't rely on ONE retrieval method. COMBINE them.

ensemble = """
ENSEMBLE RETRIEVAL:

Run MULTIPLE retrievers in parallel:
  1. Dense (vector) search: top-50
  2. BM25 (keyword) search: top-50
  3. HyDE search: top-20

Merge using Reciprocal Rank Fusion (RRF):
  RRF_score(doc) = sum(1 / (k + rank_in_each_method))
  → k=60 (typical constant)
  → Documents ranked high by MULTIPLE methods win

Result: combines strengths of each method.
  Vector: semantic matching
  BM25: exact keyword matching
  HyDE: hypothetical document matching
"""

print(ensemble)

# RRF IMPLEMENTATION:
rrf_code = """
def reciprocal_rank_fusion(result_lists, k=60):
    \"\"\"Merge multiple ranked lists using RRF.\"\"\"
    scores = {}
    for result_list in result_lists:
        for rank, doc in enumerate(result_list, 1):
            if doc.id not in scores:
                scores[doc.id] = {"doc": doc, "score": 0}
            scores[doc.id]["score"] += 1 / (k + rank)

    # Sort by fused score:
    ranked = sorted(scores.values(), key=lambda x: -x["score"])
    return [item["doc"] for item in ranked]

# USAGE:
dense_results = vector_search(query, top_k=50)    # semantic
keyword_results = bm25_search(query, top_k=50)     # exact match
hyde_results = hyde_retrieve(query, top_k=20)      # hypothetical

# Merge with RRF:
final_results = reciprocal_rank_fusion([
    dense_results, keyword_results, hyde_results
])[:5]  # top 5 after fusion
"""

print(rrf_code)</div>

<div class="code-block"># ── STEP 5: Contextual compression and late chunking ──
# Two techniques to improve chunk QUALITY.

# CONTEXTUAL COMPRESSION:
compression = """
PROBLEM: Retrieved chunk is 2000 tokens, but only 200 are relevant.
SOLUTION: Use LLM to EXTRACT only the relevant part.

Flow:
  1. Retrieve chunk (2000 tokens)
  2. LLM: "Extract only parts relevant to: [query]"
  3. Get compressed chunk (200 tokens)
  4. Send compressed to final LLM

LangChain: ContextualCompressionRetriever
Benefit: Saves context window, reduces noise.
Cost: Extra LLM call per chunk (can be expensive).
"""

print(compression)

# LATE CHUNKING (Jina AI, 2024):
late_chunking = """
PROBLEM: Standard chunking creates ISOLATED chunks.
  Chunk: "Q3 revenue increased 15%"
  → Which company? Which year? Which currency?
  → The chunk doesn't know — its context is LOST.

SOLUTION: Late Chunking
  1. Embed the ENTIRE document first (long-context model)
  2. THEN split into chunks
  3. Each chunk's embedding retains document context

Before (standard): Doc → split → embed each alone
  "it" → what is "it"? embedding is confused.

Late Chunking: Doc → embed whole → split embeddings
  "it" → embedding knows "it" = the company.

Requires: long-context embedding model (Jina v2, 8K context)
Benefit: Better embeddings without extra API calls.
"""

print(late_chunking)

# CONTEXTUAL RETRIEVAL (Anthropic, 2024):
contextual_retrieval = """
LATEST TECHNIQUE (September 2024, Anthropic):

PROBLEM: Same as late chunking — chunks lose context.

SOLUTION: Add LLM-generated context PREFIX to each chunk.

1. Before indexing: LLM reads full document
2. For each chunk: LLM generates 50-100 token context summary
3. Store: [context prefix] + [original chunk] + [embedding]

Example:
  Original: "Q3 revenue increased 15% over the previous quarter."
  Prefix: "From Acme Corp's 2024 Q3 earnings report (SaaS company)."
  Stored: [prefix] + [original chunk]

RESULTS (Anthropic):
  Baseline failure rate:    9.0%
  + Contextual retrieval:   4.9%  (49% reduction)
  + + reranking + HyDE:     2.5%  (67% reduction!)

Cost: ~$1.02 per million tokens (with prompt caching)
For 1000-page document: ~$2.30 one-time at indexing.
"""

print(contextual_retrieval)</div>

<div class="code-block"># ── STEP 6: Accuracy comparison and choosing techniques ──
# How much does each technique improve accuracy?

accuracy = {
    "Naive RAG": 60,
    "+ Hybrid search (vector + keyword)": 70,
    "+ Re-ranking (cross-encoder)": 78,
    "+ Parent-child chunking": 82,
    "+ Query transformation": 85,
    "+ HyDE (hypothetical docs)": 87,
    "+ Late chunking": 89,
    "+ Contextual retrieval (Anthropic)": 92,
    "All combined + evaluation": 95,
}

print("ACCURACY BY TECHNIQUE:")
for technique, acc in accuracy.items():
    bar = "#" * (acc // 2)
    print(f"  {technique:45} {acc}% {bar}")

# LATENCY TRADE-OFF:
latency = """
LATENCY PER QUERY:
  Naive RAG:              ~100ms
  + Hybrid search:        ~150ms
  + Re-ranking:           ~300ms
  + Query transformation: ~500ms (extra LLM call)
  + HyDE:                 ~700ms (extra LLM call)
  + Contextual retrieval: 0ms extra (done at indexing)

TRADE-OFF: accuracy vs latency
  More techniques = better accuracy but slower responses
  Solution: cache LLM-generated queries, pre-compute at indexing
"""

print(latency)

# CHOOSING TECHNIQUES BY USE CASE:
choosing = {
    "Quick prototype": ["Naive RAG only"],
    "Simple FAQ bot": ["Naive + hybrid search"],
    "Production Q&A": ["Hybrid + re-ranking + threshold"],
    "Document analysis": ["Parent-child + re-ranking"],
    "Complex research": ["Multi-query + HyDE + re-ranking"],
    "Enterprise (high stakes)": ["All techniques + RAGAS eval"],
}

print("CHOOSING TECHNIQUES BY USE CASE:")
for use_case, techniques in choosing.items():
    print(f"\n  {use_case}:")
    for tech in techniques:
        print(f"    → {tech}")

# THE BIG PICTURE:
# Start with naive RAG (60% accuracy).
# Add techniques ONE AT A TIME, measuring improvement.
# Each technique adds 5-15% accuracy but also complexity/latency.
# The goal is 85-95% accuracy — production-grade RAG.
# Contextual retrieval (Anthropic 2024) is the biggest single improvement.
# Combine multiple techniques for best results.
# ALWAYS measure with RAGAS or human evaluation before deploying.</div>

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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Hallucination Despite RAG:</strong> Model ignored retrieved context and hallucinated. Fix: prompt explicitly: 'Answer ONLY from provided context.'</div></div>


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
