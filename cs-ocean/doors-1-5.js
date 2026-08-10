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
    <text class="lbl-sm" x="240" y="114" fill="#3dd6c4">Attention * N layers</text>
    <text class="lbl-sm" x="240" y="131" fill="#9290a8">প্রতিটা token অন্য সব token-কে দেখে</text>
    ${[0,1,2].map(i=>`<line class="edge-amber" x1="${240}" y1="${145}" x2="${120+i*120}" y2="${183}" marker-end="url(#arrowAmber1)"/>`).join('')}
    ${['ভালো','বৃষ্টি','আসছে'].map((t,i)=>`<rect class="cell-good" x="${95+i*120}" y="${178}" width="60" height="30" rx="4"/><text class="lbl" x="${125+i*120}" y="${194}">${t}</text>`).join('')}
    <text class="lbl-sm" x="240" y="222" fill="#5e5c74">"বামঘর" → "ভালো বৃষ্টি আসছে" (next-token prediction)</text>
  </svg>
  <div class="diag-cap">LLM = token-এর সম্ভাবনা ভবিষ্যৎবাণী, বারবার। Attention হলো সেই যাদু যে প্রতিটা শব্দকে অন্য সব শব্দের প্রেক্ষাপটে দেখায়।</div>
</div>

<div class="code-block"># ── STEP 1: What is NLP? ──
# NLP (Natural Language Processing) = teaching computers to
# understand and generate human language.

# Python NLP libraries you should know:

# NLTK — the classic, good for learning:
import nltk
# nltk.download('punkt')
from nltk.tokenize import word_tokenize
tokens = word_tokenize("The cat sat on the mat.")
print(tokens)  # ['The', 'cat', 'sat', 'on', 'the', 'mat', '.']

# spaCy — production-grade, fast:
import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("Apple is looking at buying a startup.")
for ent in doc.ents:
    print(f"{ent.text}: {ent.label_}")
# Apple: ORG

# transformers (HuggingFace) — modern LLMs:
from transformers import pipeline
classifier = pipeline("sentiment-analysis")
result = classifier("I love this course!")
print(result)  # [{'label': 'POSITIVE', 'score': 0.9998}]</div>

<div class="code-block"># ── STEP 2: Tokenization — how LLMs read text ──
# LLMs don't read words — they read TOKENS.
# A token can be a word, part of a word, or even a single character.

from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("gpt2")

text = "Hello, how are you doing today?"
tokens = tokenizer.encode(text)
print(tokens)        # [15496, 11, 703, 389, 345, 884, 1865, 30]
print(tokenizer.decode(tokens))  # Hello, how are you doing today?

# Each token gets a unique ID number:
for token_id in tokens[:5]:
    print(f"  {token_id}: '{tokenizer.decode([token_id])}'")
#   15496: 'Hello'
#     11: ','
#    703: ' how'
#    389: ' are'
#    345: ' you'

# Bengali text has MORE tokens per word (training data is less):
bengali = tokenizer.encode("আমি বাংলায় কথা বলি")
print(f"Bengali: {len(bengali)} tokens for 3 words")
# More tokens = more expensive + slower processing</div>

<div class="code-block"># ── STEP 3: Text generation with LLMs ──
# The simplest way to use an LLM — generate text:

from transformers import pipeline

# Load a small text generation model:
generator = pipeline("text-generation", model="gpt2")

# Generate text:
result = generator(
    "Artificial intelligence is",
    max_length=50,
    num_return_sequences=1,
    temperature=0.7  # 0 = deterministic, 1 = creative
)
print(result[0]["generated_text"])

# USING OPENAI API (more powerful):
# from openai import OpenAI
# client = OpenAI(api_key="your-key")
# response = client.chat.completions.create(
#     model="gpt-4",
#     messages=[{"role": "user", "content": "Explain recursion"}]
# )
# print(response.choices[0].message.content)

# KEY CONCEPTS:
# - temperature: 0 = deterministic, 1 = random/creative
# - max_tokens: how long the output can be
# - top_p: nucleus sampling (0.9 = top 90% of likely tokens)
# - system prompt: sets the AI's behavior/persona</div>

<div class="code-block"># ── STEP 4: Embeddings — meaning as numbers ──
# Embeddings convert text into VECTORS (lists of numbers).
# Similar meanings → similar vectors.

from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")

# Convert sentences to vectors:
sentences = [
    "I love programming",
    "Coding is my passion",
    "The weather is nice today",
]

embeddings = model.encode(sentences)

# Each sentence is now a 384-dimensional vector:
print(embeddings.shape)  # (3, 384)

# Measure SIMILARITY (cosine similarity):
from sklearn.metrics.pairwise import cosine_similarity

sim_01 = cosine_similarity([embeddings[0]], [embeddings[1]])[0][0]
sim_02 = cosine_similarity([embeddings[0]], [embeddings[2]])[0][0]

print(f"'I love programming' vs 'Coding is my passion': {sim_01:.3f}")
print(f"'I love programming' vs 'The weather is nice': {sim_02:.3f}")
# sim_01 ≈ 0.75 (similar meaning)
# sim_02 ≈ 0.15 (different meaning)

# This is the foundation of RAG, semantic search, and clustering.</div>

<div class="code-block"># ── STEP 5: NLP research areas (career roadmap) ──
# Where to go DEEP in NLP/LLM research:

# ┌─────────────────────┬─────────────────────────────────────┐
# │ Area                │ What you study                     │
# ├─────────────────────┼─────────────────────────────────────┤
# │ Pretraining         │ How to train from scratch          │
# │ Fine-tuning         │ Adapt models to specific tasks     │
# │ Alignment (RLHF)    │ Make models safe and helpful       │
# │ Interpretability    │ Understand what's INSIDE the model │
# │ Efficiency          │ Make models faster/smaller         │
# │ Evaluation          │ How to measure if models are good  │
# │ Reasoning           │ Chain-of-thought, multi-step logic │
# │ Retrieval (RAG)     │ Ground models in real documents    │
# └─────────────────────┴─────────────────────────────────────┘

# CONFERENCES (where to publish):
# NeurIPS, ICML, ICLR  — ML theory + LLMs
# ACL, EMNLP, NAACL     — NLP specific
# COLM                  — LLMs specifically (new, 2024+)

# SKILLS NEEDED:
# 1. Linear algebra (vectors, matrices, attention)
# 2. Probability and statistics
# 3. Python + PyTorch/JAX
# 4. Reading papers (arxiv.org)
# 5. Writing clearly (for papers!)

# HOT TOPICS (2024-2026):
# - Reasoning models (o1/o3, DeepSeek-R1)
# - GRPO (cheap alignment without human feedback)
# - MoE (Mixture of Experts — 671B params, 37B active)
# - Sparse autoencoders (understanding model internals)
# - Long context (1M+ tokens)</div>

<div class="code-block"># ── STEP 6: Simple text analysis pipeline ──
# A practical NLP project — sentiment analysis:

from transformers import pipeline
from collections import Counter

# Step 1: Load sentiment analyzer:
sentiment = pipeline("sentiment-analysis")

# Step 2: Analyze product reviews:
reviews = [
    "This product is amazing! Best purchase ever.",
    "Terrible quality. Broke after one day.",
    "It's okay. Does the job but nothing special.",
    "Absolutely love it! Highly recommend.",
    "Waste of money. Don't buy this.",
]

results = []
for review in reviews:
    result = sentiment(review)[0]
    results.append({
        "text": review[:40] + "...",
        "label": result["label"],
        "score": round(result["score"], 3)
    })
    print(f"{result['label']:8} ({result['score']:.3f}) | {review[:50]}")

# Step 3: Summarize:
positive = sum(1 for r in results if r["label"] == "POSITIVE")
negative = sum(1 for r in results if r["label"] == "NEGATIVE")
print(f"\nSummary: {positive} positive, {negative} negative")

# This pipeline scales to millions of reviews:
# - Social media monitoring
# - Customer feedback analysis
# - Product recommendation
# - Brand sentiment tracking</div>

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
    <text class="lbl-sm" x="75" y="120" fill="#5e5c74">224*224 pixel</text>
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

<div class="code-block"># ── STEP 1: What is computer vision? ──
# Computer Vision = teaching computers to "see" and understand images.
# Python CV libraries:

# OpenCV — the workhorse for image processing:
import cv2

# Load an image:
img = cv2.imread("photo.jpg")

# Resize, convert to grayscale:
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
resized = cv2.resize(img, (224, 224))

# PIL/Pillow — simpler, Pythonic:
from PIL import Image
img = Image.open("photo.jpg")
print(img.size)  # (width, height)

# torchvision — deep learning for vision:
from torchvision import transforms
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485], std=[0.229])
])</div>

<div class="code-block"># ── STEP 2: Image classification ──
# Teach a model to recognize WHAT is in an image.

from transformers import pipeline

# Load a pre-trained image classifier:
classifier = pipeline("image-classification", model="google/vit-base-patch16-224")

# Classify an image:
result = classifier("cat.jpg")
for pred in result[:3]:
    print(f"  {pred['label']}: {pred['score']:.2%}")
#   tabby cat: 94.32%
#   Egyptian cat: 3.21%
#   Siamese cat: 1.45%

# Training your own classifier with PyTorch:
import torch
import torch.nn as nn

class SimpleCNN(nn.Module):
    """Basic CNN for image classification."""
    def __init__(self, num_classes=10):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 32, kernel_size=3, padding=1),  # 3 input channels (RGB)
            nn.ReLU(),
            nn.MaxPool2d(2),                               # halve size
            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),
        )
        self.classifier = nn.Linear(64 * 56 * 56, num_classes)  # 224→112→56

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)  # flatten
        return self.classifier(x)</div>

<div class="code-block"># ── STEP 3: Object detection ──
# Finding WHERE objects are in an image (bounding boxes).

from transformers import pipeline

# Load object detector:
detector = pipeline("object-detection", model="facebook/detr-resnet-50")

# Detect objects:
results = detector("street_scene.jpg")
for obj in results:
    print(f"  {obj['label']}: {obj['score']:.2f} at {obj['box']}")
#   person: 0.98 at {'xmin': 100, 'ymin': 50, ...}
#   car: 0.95 at {'xmin': 200, 'ymin': 80, ...}

# Using YOLO (You Only Look Once) — real-time detection:
# from ultralytics import YOLO
# model = YOLO("yolov8n.pt")  # nano version (fast)
# results = model("image.jpg")
# results.show()  # displays with bounding boxes

# Detection vs Classification:
# Classification: "This image contains a cat" (WHAT)
# Detection: "The cat is at (x=100, y=50, w=200, h=150)" (WHERE)
# Segmentation: "These exact pixels are the cat" (SHAPE)</div>

<div class="code-block"># ── STEP 4: Image generation with diffusion ──
# Generate images from text descriptions using Stable Diffusion.

# Using diffusers library:
# from diffusers import StableDiffusionPipeline
# import torch
#
# pipe = StableDiffusionPipeline.from_pretrained(
#     "runwayml/stable-diffusion-v1-5",
#     torch_dtype=torch.float16
# )
# pipe = pipe.to("cuda")  # GPU
#
# image = pipe("A cat sitting on a mountain at sunset").images[0]
# image.save("generated_cat.png")

# Key concepts:
# - Diffusion: add noise → learn to reverse → generate from noise
# - Text conditioning: CLIP encodes the prompt → guides generation
# - Steps: more steps = higher quality but slower
# - CFG scale: how closely to follow the prompt

# SIMPLER: Using HuggingFace inference API:
# from transformers import pipeline
# generator = pipeline("text-to-image", model="stable-diffusion-v1-5")
# image = generator("a beautiful sunset over mountains")

# Research areas in generation:
# - Text-to-video (Sora, Veo, Kling)
# - Image editing (inpainting, style transfer)
# - 3D generation (NeRF, Gaussian Splatting)
# - Personalized generation (DreamBooth — your face in any style)</div>

<div class="code-block"># ── STEP 5: CLIP — connecting vision and language ──
# CLIP (Contrastive Language-Image Pre-training) bridges images and text.
# It can classify images using ANY text labels (no retraining needed).

from transformers import CLIPProcessor, CLIPModel
from PIL import Image

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Give CLIP an image and text options — it picks the best match:
image = Image.open("photo.jpg")
texts = ["a cat", "a dog", "a car", "a building"]

inputs = processor(text=texts, images=image, return_tensors="pt", padding=True)
outputs = model(**inputs)

# Get probabilities:
probs = outputs.logits_per_image.softmax(dim=1)[0]
for text, prob in zip(texts, probs):
    print(f"  {text}: {prob:.2%}")
#   a cat: 89.21%
#   a dog: 8.50%
#   a car: 1.20%
#   a building: 1.09%

# This is ZERO-SHOT classification — no training needed!
# Just describe what you're looking for in natural language.</div>

<div class="code-block"># ── STEP 6: CV research areas and careers ──
# ┌─────────────────────┬─────────────────────────────────────┐
# │ Area                │ What you study                     │
# ├─────────────────────┼─────────────────────────────────────┤
# │ Recognition         │ Classification, detection, tracking│
# │ Generation          │ Diffusion, text-to-image, video    │
# │ Foundation models   │ ViT, CLIP, DINOv2 (self-supervised)│
# │ 3D/Geometry         │ NeRF, Gaussian Splatting, SLAM     │
# │ Medical imaging     │ X-ray, MRI, pathology analysis     │
# │ Video understanding │ Action recognition, video LLMs     │
# │ Efficiency          │ Edge devices, real-time, mobile    │
# └─────────────────────┴─────────────────────────────────────┘

# CONFERENCES:
# CVPR, ICCV, ECCV   — top vision conferences
# SIGGRAPH           — graphics + vision
# MICCAI             — medical imaging
# NeurIPS, ICLR      — broader ML + vision

# TOOLS TO LEARN:
# - PyTorch (deep learning framework)
# - OpenCV (image processing)
# - HuggingFace transformers (pretrained models)
# - Albumentations (data augmentation)
# - FiftyOne (dataset visualization)

# PROJECT IDEAS (build your portfolio):
# 1. Hand gesture recognition (webcam → action)
# 2. Plant disease classifier (photos → diagnosis)
# 3. License plate reader (video → text)
# 4. Medical image segmentation (X-ray → regions)
# 5. Deepfake detector (video → real/fake)

# CAREER PATHS:
# Research: PhD → publish at CVPR/ICCV → research lab
# Industry: Tech companies (autonomous driving, AR/VR, medical)
# Startup: Vision APIs, content moderation, retail analytics</div>

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

// ══ DOOR 3: REINFORCEMENT LEARNING ══
doors.push({
  num:3, icon:"🎮", color:"#38bdf8", name:"সিদ্ধান্তের সমুদ্র",
  subtitle:"The Sea of Decisions", tech:"Reinforcement Learning",
  spirit:"সবর — ধৈর্য, দীর্ঘমেয়াদী পুরস্কারের জন্য অপেক্ষা",
  secret:"RL — agent পুরস্কার থেকে শেখে সিদ্ধান্ত নিতে। একসময় শুধু গেম (AlphaGo), এখন LLM alignment-এর ইঞ্জিন (RLHF/GRPO), robotics, drug design। তীব্রভাবে ক্রমবর্ধমান, কিন্তু কঠিন — sample inefficiency, sparse reward, sim-to-real gap এখনো open। গণিত শক্তিশালী হলে এখানে সোনা।",
  recall:{
    q:"লিও কেন বললেন ভালো দাবা খেলোয়াড় পরের চাল নয়, দশ চাল পরের ফল দেখে?",
    qen:"Why did Leo say a good chess player looks not at the next move, but the outcome ten moves later?",
    a:"কারণ RL-এ এটাই মূল — delayed reward। একটা চাল এখন খারাপ মনে হতে পারে, কিন্তু দশ চাল পরে জয় আনতে পারে। agent-কে শিখতে হয় শুধু তাৎক্ষণিক পুরস্কার নয় — long-term return। এটাই RL-কে কঠিন করে: credit assignment problem। কোন চালটা আসলে জয়ের কারণ? সবর — ধৈর্য ধরে দেখা।",
    aen:"Because this is the heart of RL — delayed reward. A move may seem bad now, but bring victory ten moves later. The agent must learn not immediate reward — but long-term return. This is what makes RL hard: the credit assignment problem. Which move actually caused the win? Sabr — patiently watching."
  },
  story:`
<p class="scene-setting">তৃতীয় দরজা। ইউকির গ্যালারি পেরিয়ে তুমি একটা দাবার কোর্টে — কিন্তু দাবার ঘুঁটিগুলো নিজে নিজে চলছে। একটা বিশাল বোর্ডে দুই পক্ষ খেলছে, প্রতিটা চালের সাথে পুরস্কারের ঝনঝন। কোর্টের কোণায় বসে লিও — কালো টুপি, হাতে একটা ঘড়ি আর একটা স্কোরবোর্ড, চোখে কৌশলীর গভীরতা। আলেকজান্ডার পেছনে দাঁড়িয়ে ইশারায় বলছেন — এটাও তাঁর সমুদ্রের অংশ। কাঠের ঘুঁটির ঠকঠক, ঘড়ির টিকটিক, জয়ের শিস।</p>
<p class="scene-setting en">The third door. Past Yuki's gallery, you enter a chess court — but the pieces move on their own. On a vast board two sides play, each move chiming with reward. In a corner sits Leo — black cap, a clock and scoreboard in hand, a tactician's depth in his eyes. Alexander stands behind, gesturing — this too is part of his sea. The clack of wooden pieces, the ticking clock, the whistle of victory.</p>

<div class="dialogue">আলেকজান্ডার বললেন, "ইভা শব্দ দেখালেন, ইউকি ছবি — এবার লিও দেখাবে সিদ্ধান্ত।" লিও একটা ঘুঁটি সরালেন। "এই চালটা এখন খারাপ মনে হচ্ছে — একটা বোড়ে হারালাম। কিন্তু দশ চাল পরে এই চালটাই রানি জিতে দেবে।" তিনি ঘড়িটা দেখালেন। "RL-এ এটাই কঠিন — একটা চাল ভালো না খারাপ, সেটা এখন বোঝা যায় না। শুধু শেষে জিতলে বোঝা যায়। একে বলে delayed reward।"</div>
<div class="dialogue en">Alexander said, "Eva showed words, Yuki images — now Leo shows decisions." Leo moved a piece. "This move seems bad now — I lost a pawn. But ten moves later this same move will win the queen." He showed the clock. "This is the hard part of RL — whether a move is good or bad can't be known now. Only at the end, if you win. This is called delayed reward."</div>

<div class="diagram">
  <div class="diag-title">RL লুপ — Agent পরিবেশ থেকে শেখে</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowAmber3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#7dd3fc"/></marker>
      <marker id="arrowTeal3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#3dd6c4"/></marker>
    </defs>
    <!-- Agent box -->
    <rect class="cell-cyan" x="60" y="80" width="130" height="70" rx="10"/>
    <text class="lbl" x="125" y="105" fill="#3dd6c4">AGENT</text>
    <text class="lbl-sm" x="125" y="128">policy π(a|s)</text>
    <!-- Environment box -->
    <rect class="cell-good" x="370" y="80" width="130" height="70" rx="10"/>
    <text class="lbl" x="435" y="105" fill="#52c41a">ENVIRONMENT</text>
    <text class="lbl-sm" x="435" y="128">state, reward</text>
    <!-- Action arrow (agent -> env, top) -->
    <text class="lbl-sm" x="280" y="60" fill="#7dd3fc">action a</text>
    <line class="edge-amber" x1="190" y1="95" x2="370" y2="95" marker-end="url(#arrowAmber3)"/>
    <!-- Reward/state arrows (env -> agent, bottom) -->
    <text class="lbl-sm" x="280" y="180" fill="#3dd6c4">state s' + reward r</text>
    <line class="edge-cyan" x1="370" y1="140" x2="190" y2="140" marker-end="url(#arrowTeal3)"/>
    <text class="lbl-sm" x="280" y="208" fill="#5e5c74">লক্ষ্য: cumulative reward বৃদ্ধি করো — শুধু তাৎক্ষণিক নয়, দীর্ঘমেয়াদী</text>
  </svg>
  <div class="diag-cap">RL = trial-and-error লুপ। agent কাজ করে, পরিবেশ ফল দেয়, agent নীতি বদলায়। এটাই কীভাবে AlphaGo, ChatGPT (RLHF), রোবট শেখে।</div>
</div>

<div class="code-block">Reinforcement Learning — গবেষণার শাখাসমূহ:

১. CORE RL ALGORITHMS
   - Model-free: Q-learning, DQN, SAC, PPO (শিল্পে standard)
   - Model-based: world models, MuZero, planning (Dreamer)
   - Offline RL: logged data থেকে শেখা (production-safe)

২. RL FOR LLMs (🔥 সবচেয়ে বড় crossover)
   - RLHF (InstructGPT, ChatGPT), RLAIF, DPO (offline simplification)
   - GRPO (DeepSeek-R1, ২০২৪-২৫) — value-function-ফ্রি, শস্তা
   - Reasoning via RL: o1/o3, test-time compute

৩. ROBOTICS & CONTROL (Door 19 এর সাথে সংযোগ)
   - Manipulation, locomotion, dexterous, sim-to-real
   - LfD (learning from demonstration), RL+diffusion policies

৪. MULTI-AGENT & GAME THEORY
   - Self-play (AlphaGo, AlphaStar, Diplomacy,麻将)
   - MARL, emergent behavior, strategic interaction

৫. SCIENCE & OPTIMIZATION (🔥 emerging)
   - RL for chip design, drug discovery, math (AlphaProof)
   - Combinatorial optimization, neural architecture search

৬. THEORY
   - Sample complexity, exploration (curiosity, count-based)
   - Offline RL identifiability, representation learning</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🔥 RL for LLMs</td><td>RLHF, GRPO, DPO, reasoning RL</td><td>NeurIPS, ICML, ICLR, COLM</td></tr>
<tr><td class="hl">🔥 Deep RL</td><td>PPO, SAC, offline RL, world models</td><td>NeurIPS, ICML, ICLR</td></tr>
<tr><td class="hl">🤖 Robot RL</td><td>Manipulation, sim-to-real, diffusion policy</td><td>CoRL, ICRA, RSS</td></tr>
<tr><td class="hl">♟️ Games/Self-play</td><td>AlphaZero, multi-agent, MARL</td><td>NeurIPS, AAMAS, ICML</td></tr>
<tr><td class="hl">🧪 RL4Science</td><td>Chip floorplan, drug discovery, math</td><td>NeurIPS, ICML, Nature</td></tr>
<tr><td class="hl">📐 RL Theory</td><td>Sample complexity, exploration, offline</td><td>COLT, NeurIPS, ICML</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">২-৫%</div><div class="sc-label">গ্রহণের হার (তীব্র, কিন্তু niche-এ কম)</div></div>
<div class="stat-card"><div class="sc-num">$১.৫B+</div><div class="sc-label">DARPA + industry RL ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$২০০-৪৫০K</div><div class="sc-label">industry (DeepMind, OpenAI, Anthropic)</div></div>
<div class="stat-card"><div class="sc-num">🔥🔥🔥</div><div class="sc-label">RLHF/GRPO = LLM alignment-এর ইঞ্জিন</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"RL মানে শুধু game-playing। AlphaGo হয়ে গেছে, এখন আর কিছু নেই।" ভুল। AlphaGo RL-এর শুরু ছিল; RLHF ছাড়া ChatGPT হতো না, DeepSeek-R1 হতো না। Robotics, drug design, chip design — RL এখন সব জায়গায়। reasoning model (o1) RL-এর উপর দাঁড়িয়ে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"RL হলো sequential decision-making-এর সাধারণ কাঠামো — game, LLM alignment, robotics, science optimization সব এক ছাতার নিচে। core RL (sample efficiency, exploration) এখনো hard open problem। যে এখানে depth দেয়, সে প্রতিটা AI wave-এ প্রাসঙ্গিক থাকে।"</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>RL-এর কঠিন সত্য:</strong> deep RL খারাপভাবে sample-inefficient (মিলিয়ন episode লাগে), reward shaping কঠিন, sim-to-real gap বড়। industry-এ offline RL + imitation বেশি ব্যবহৃত হয়। pure online deep RL-এ যাওয়ার আগে এই কঠিনতা মেনে নাও।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ গণিত (probability, optimization, dynamic programming) ভালোবাসো · ✅ দীর্ঘমেয়াদী চিন্তা পছন্দ · ✅ LLM alignment (RLHF/GRPO) বা robotics-এ আগ্রহ · ⚠️ experiment চালানো ব্যয়বহুল (compute, environment) · 💡 RL theory = কম ভিড়, উচ্চ academic মূল্য।</div></div>

<div class="dialogue">"RL-এর একটা গভীর সত্য আছে," লিও বললেন। "এটা শেখার প্রক্রিয়া মানুষের মতো — trial and error। শিশু হাঁটতে শেখে পড়ে পড়ে। রোবটও তাই। ChatGPT-ও RLHF দিয়ে মানুষের পছন্দ থেকে শেখেছে। RL হলো শেখার সবচেয়ে সাধারণ কাঠামো — শুধু AI নয়, জীবনও। আমরা সবাই পুরস্কার থেকে শিখি, শাস্তি থেকে শিখি। কিন্তু গণিত দিয়ে সেটা বোঝা — সেটাই গবেষণা।"</div>
<div class="dialogue en">"RL has a deep truth," Leo said. "Its learning process is like a human's — trial and error. A child learns to walk by falling. So does a robot. Even ChatGPT learned from human preference via RLHF. RL is the most general framework of learning — not just AI, but life. We all learn from reward, from punishment. But understanding that with mathematics — that's research."</div>

<div class="dialogue">সবর — ধৈর্য। কুরআনে আল্লাহ বলেন: "ধৈর্যধারণে আল্লাহ ধৈর্যশীলদের সাথে আছেন।" (৮:৪৬)। RL-এর মূলে সবর — delayed reward। একটা চালের ফল আজ নয়, দশ ধাপ পরে আসে। যে তাৎক্ষণিক পুরস্কারে লালায়িত হয়, সে ভালো খেলোয়াড় হয় না। যে সবর করে — দীর্ঘমেয়াদী return দেখে — সে জেতে। জীবনেও তাই — আল্লাহর পুরস্কার পৃথিবীতে নয়, আখিরাতে। সবরকারী দীর্ঘদৃষ্টি রাখে। RL গবেষক হলো সে যে এই দীর্ঘদৃষ্টির গণিত করে।</div>
<div class="dialogue en">Sabr — patience. Allah says: "Allah is with the patient." (8:46). At RL's core is sabr — delayed reward. The fruit of a move comes not today, but ten steps later. One who craves immediate reward, doesn't become a good player. One who is patient — who sees long-term return — wins. So in life — Allah's reward is not in this world, but the hereafter. The patient keep the long view. An RL researcher is one who does the math of this long view.</div>

<div class="secret-box">🎮 RL: sequential decision-making-এর সাধারণ কাঠামো। RLHF/GRPO = LLM alignment-এর ইঞ্জিন; robotics, RL4Science। core (sample efficiency, exploration) open problem। কঠিন কিন্তু প্রতিটা AI wave-এ প্রাসঙ্গিক। গণিত শক্ত হলে যাও।</div>`,
  senior:{
    title:"RL PhD-তে যেখানে মূল্য — Senior Path",
    body:`<p><strong>RLHF/GRPO crossover = সোনার খনি:</strong> RL + LLM-এর intersection এখন সবচেয়ে হট (DeepSeek-R1, o1)। pure RL-এর চেয়ে এখানে বেশি ফান্ডিং ও প্রভাব। একটা recent RLHF/GRPO paper re-implement করো — এটা দারুণ profile builder।</p><p><strong>Sim-to-real এখনো unsolved:</strong> robotics RL-এ সিমুলেটরে কাজ করলেও বাস্তবে transfer কঠিন। domain randomization, real-data fine-tuning — এই gap-এ প্রোফাইল বানাও (CoRL, RSS)।</p><p><strong>Offline RL = industry-friendly:</strong> online RL প্রোডাকশনে বিপজ্জনক (agent ভুল করলে ক্ষতি)। offline RL (logged data থেকে শেখা) industry-এ বেশি demand — recommendation, healthcare, finance।</p><p><strong>Compute reality:</strong> deep RL experiment ব্যয়বহুল। RL theory বা offline RL-এ compute কম, কিন্তু গণিত বেশি। তোমার শক্তি (math vs engineering) অনুযায়ী niche বেছে নাও।</p>`
  }
});

// ══ DOOR 4: ML THEORY & AI SAFETY ══
doors.push({
  num:4, icon:"🛡️", color:"#38bdf8", name:"নিরাপত্তার সমুদ্র",
  subtitle:"The Sea of Safety", tech:"ML Theory & AI Safety",
  spirit:"আমানা — আমানত, বিশ্বস্ততা, দায়িত্ব পালন",
  secret:"ML Theory (generalization কেন কাজ করে, optimization dynamics) + AI Safety (alignment, interpretability, robustness) — AI-এর 'কেন' ও 'কতটা নিরাপদ'। একদম গণিতের গভীরে, কিন্তু সবচেয়ে বেশি প্রভাব — ভুল alignment মানবতার ক্ষতি করতে পারে। কম ভিড়, উচ্চ মূল্য। frontier AI labs (Anthropic, OpenAI) এখানে অর্থ ঢালছে।",
  recall:{
    q:"মায়া কেন বললেন সুড়ঙ্গ বানানো সহজ, সুড়ঙ্গের দেয়াল মজবুত করা কঠিন?",
    qen:"Why did Maya say digging a tunnel is easy, but making its walls strong is hard?",
    a:"কারণ সুড়ঙ্গ খোঁড়া = model বানানো (সহজ, কেউ পারে)। কিন্তু দেয়াল মজবুত না হলে সুড়ঙ্গ ধসে পড়বে — একদিন। ML theory হলো সেই দেয়াল — generalization কেন কাজ করে, কখন ভাঙে। AI safety হলো সেই নিশ্চয়তা — model যেন উদ্দেশ্য থেকে বিচ্যুত না হয়। বানানো সহজ, বুঝা ও নিরাপদ রাখা কঠিন।",
    aen:"Because digging a tunnel = building a model (easy, anyone can). But if the walls aren't strong, it collapses — one day. ML theory is that wall — why generalization works, when it breaks. AI safety is that assurance — that the model won't deviate from purpose. Building is easy; understanding and keeping safe is hard."
  },
  story:`
<p class="scene-setting">চতুর্থ দরজা। লিওর দাবা কোর্ট পেরিয়ে তুমি একটা অন্ধকার সুড়ঙ্গে — বিশাল, পাথরের দেয়াল। সুড়ঙ্গের এক প্রান্তে আলো, অন্য প্রান্তে অন্ধকার। দেয়ালে ফাটল — কোথাও জল গড়িয়ে পড়ছে। সুড়ঙ্গের মাঝখানে হাত দিয়ে দেয়াল পরীক্ষা করছেন মায়া — সাদা কোট, হাতে একটা ক্যালিপার ও স্ট্রেস-টেস্ট রিগ, চোখে সতর্ক নিখুঁততা। আলেকজান্ডার পেছনে ফিসফিস করে বলছেন — এটা তাঁর সমুদ্রের সবচেয়ে সূক্ষ্ম অংশ। ভেজা পাথরের ঠান্ডা গন্ধ, জলের ফোঁটার শব্দ, দূরে পাথর খসার আওয়াজ।</p>
<p class="scene-setting en">The fourth door. Past Leo's chess court, you enter a dark tunnel — vast, stone walls. Light at one end, darkness at the other. Cracks in the walls — water seeping somewhere. At the center, Maya tests a wall with her hand — white coat, a caliper and stress-test rig in hand, careful precision in her eyes. Alexander whispers from behind — this is the most subtle part of his sea. Smell of damp stone, the drip of water, distant rock-fall.</p>

<div class="dialogue">আলেকজান্ডার বললেন, "ইভা, ইউকি, লিও — সবাই মডেল বানায়। কিন্তু মায়া জিজ্ঞেস করে সেই মডেল কেন কাজ করে, আর কতটা নিরাপদ।" মায়া একটা ফাটল দেখালেন। "এই ফাটলটা ছোট মনে হয়। কিন্তু চাপ দিলে পুরো সুড়ঙ্গ ধসে যাবে। মডেলও তাই — training data-তে ভালো, কিন্তু distribution shift-এ বিপর্যয়। আমার কাজ হলো সেই ফাটল খোঁজা — theory দিয়ে, নিরাপত্তা দিয়ে।"</div>
<div class="dialogue en">Alexander said, "Eva, Yuki, Leo — all build models. But Maya asks why those models work, and how safe they are." Maya showed a crack. "This crack looks small. But under pressure, the whole tunnel collapses. So with models — good on training data, but disaster under distribution shift. My job is finding those cracks — with theory, with safety."</div>

<div class="diagram">
  <div class="diag-title">AI Safety-এর চার স্তম্ভ — কেন মডেল ভাঙে</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowFire4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#ff6b35"/></marker>
    </defs>
    <text class="lbl-sm" x="280" y="22" fill="#7dd3fc">চারটি বিপদের উৎস</text>
    ${[ ['OBJECTIVE','ভুল লক্ষ্য','optimize হয়',60,'#ef4444'], ['DISTRIBUTION','train ≠ real','shift, adversarial',200,'#f97316'], ['CAPABILITY','খুব শক্তিশালী','দুরুপযোগের ঝুঁকি',340,'#b37feb'], ['OVERSIGHT','ভেতরে অন্ধকার','আমরা বুঝি না',480,'#5b9eff'] ].map(s=>`<rect class="cell-hot" x="${s[3]-55}" y="45" width="110" height="58" rx="8" style="fill:${s[4]}22;stroke:${s[4]}"/><text class="lbl-sm" x="${s[3]}" y="66" fill="${s[4]}" style="font-weight:700">${s[0]}</text><text class="lbl-sm" x="${s[3]}" y="83" fill="#9290a8">${s[1]}</text><text class="lbl-sm" x="${s[3]}" y="96" fill="#9290a8" style="font-size:8px">${s[2]}</text>`).join('')}
    <!-- converging lines down to a central model -->
    ${[60,200,340,480].map(x=>`<line class="edge" x1="${x}" y1="115" x2="280" y2="150" style="stroke:#ff6b35"/>`).join('')}
    <rect class="cell" x="210" y="148" width="140" height="34" rx="8"/>
    <text class="lbl" x="280" y="166" fill="#ff6b35">MISSPECIFIED GOAL</text>
    <text class="lbl-sm" x="280" y="205" fill="#5e5c74">আসল সমস্যা: মানুষের উদ্দেশ্য সম্পূর্ণ নির্দিষ্ট করা কঠিন — এটাই alignment problem</text>
  </svg>
  <div class="diag-cap">AI Safety = চারটি risk-এর সংমিশ্রণ পরিচালনা। Alignment-এর মূল সত্য: আমরা যা চাই তা নির্ভুলভাবে specify করা প্রায় অসম্ভব।</div>
</div>

<div class="code-block">ML Theory & AI Safety — গবেষণার শাখাসমূহ:

১. ML THEORY (গণিতের গভীরে)
   - Generalization: over-parameterized কেন generalize করে? (double descent)
   - Optimization: SGD dynamics, loss landscape, implicit bias
   - Learning theory: PAC, Rademacher, sample complexity

২. INTERPRETABILITY (🔥 সবচেয়ে সক্রিয়)
   - Mechanistic: circuits, sparse autoencoders (Anthropic), dictionary learning
   - Probing, causal tracing, activation analysis
   - Monitor: real-time inspection of frontier models

৩. ALIGNMENT (🔥 frontier labs-এ বড়)
   - Scalable oversight (debate, recursive reward)
   - Constitutional AI, RLHF/RLAIF improvements
   - Value learning, preference modeling, deceptive alignment

৪. ROBUSTNESS
   - Distribution shift, OOD detection, adversarial (Door 9)
   - Certified robustness, conformal prediction
   - Hallucination mitigation, factuality

৫. EVALUATION & FORENSICS
   - Frontier evals (dangerous capabilities), red-teaming
   - Model organism research, detection (watermarking, fingerprints)

৬. GOVERNANCE ADJACENT (সাথে)
   - Compute governance, AI policy, responsible scaling</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🔥 Mech Interp</td><td>Circuits, sparse autoencoders, dictionary learning</td><td>ICLR, NeurIPS, BlackboxNLP</td></tr>
<tr><td class="hl">🔥 Alignment</td><td>Scalable oversight, scalable RLHF, deceptive alignment</td><td>NeurIPS, ICML, SaTML</td></tr>
<tr><td class="hl">📐 ML Theory</td><td>Generalization, optimization, learning theory</td><td>COLT, NeurIPS, ICML</td></tr>
<tr><td class="hl">🛡️ Robustness</td><td>OOD, certified, conformal, adversarial</td><td>ICLR, NeurIPS, SaTML</td></tr>
<tr><td class="hl">⚖️ AI Gov.</td><td>Frontier evals, compute governance, policy</td><td>AIES, FAccT, SaTML</td></tr>
<tr><td class="hl">🔴 Red-team</td><td>Bio/cyber risk evals, dangerous capabilities</td><td>NeurIPS (safety), arXiv</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">২-৪%</div><div class="sc-label">গ্রহণের হার (niche, কম ভিড়)</div></div>
<div class="stat-card"><div class="sc-num">$৫B+</div><div class="sc-label">frontier labs-এর safety বাজেট</div></div>
<div class="stat-card"><div class="sc-num">$২৫০-৫০০K</div><div class="sc-label">industry (Anthropic, OpenAI, Apollo)</div></div>
<div class="stat-card"><div class="sc-num">নোবেল</div><div class="sc-label">২০২৪ Physics: Hopfield/Hinton (NN foundations)</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"AI safety = 'AI ধ্বংস করবে' সিনেমার গল্প। research নয়, দর্শন।" অর্ধেক সত্য। catastrophic risk দর্শন আছে, কিন্তু বাকি সব — interp, robustness, alignment, frontier evals — কঠোর empirical/mathematical research। Anthropic-এর sparse autoencoder paper পড়ে দেখো — এটা সরাসরি বিজ্ঞান।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"AI safety = empirical + mathematical research যা মডেলকে বোঝা ও নিয়ন্ত্রণ নিশ্চিত করে। mech interp, alignment, robustness — সব পরিমাপযোগ্য। frontier labs এখন এখানে বিলিয়ন ঢালছে কারণ capability > understanding — আর এটাই বিপজ্জনক।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> sparse autoencoders (Anthropic's "Scaling Monosemanticity" — Claude 3-এর features), frontier model evals (UK/US AI Safety Institutes, ২০২৪), scaling laws for interp, deceptive alignment research, OpenAI o1-এর reasoning-এ safety implications।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ গণিত (proof, probability, optimization) শক্ত · ✅ জিজ্ঞাসা "কেন" ও "কতটা নিরাপদ" · ✅ উচ্চ প্রভাবের কাজ চাও (মানবতার সুরক্ষা) · ⚠️ "AI doom" বনাম "AI benefit" রাজনীতিতে না জড়ালে ভালো · 💡 interp = সবচেয়ে empirical/tractable প্রবেশপথ।</div></div>

<div class="dialogue">"একটা গভীর কথা," মায়া বললেন। "AI যত শক্তিশালী হচ্ছে, তত বুঝতে হবে ভেতরে কী চলছে। capability বাড়ছে, understanding পিছিয়ে। এটাই সবচেয়ে বিপজ্জনক gap। frontier labs এখন interp-এ অর্থ ঢালছে কারণ একটা শক্তিশালী মডেল যা আমরা বুঝি না — তাকে নিয়ন্ত্রণ করা অসম্ভব। যে এই gap পূরণ করবে, সে শুধু research করবে না — মানবতাকে সাহায্য করবে।"</div>
<div class="dialogue en">"A deep point," Maya said. "The more powerful AI gets, the more we must understand what's happening inside. Capability grows, understanding lags. This is the most dangerous gap. Frontier labs now pour money into interp because a powerful model we don't understand — controlling it is impossible. One who fills this gap, doesn't just do research — helps humanity."</div>

<div class="dialogue">আমানা — আমানত, বিশ্বস্ততা। কুরআনে আল্লাহ বলেন: "নিশ্চয় আল্লাহ তোমাদের আমানত আদায়ের নির্দেশ দেন এবং মানুষের মাঝে বিচার করলে ন্যায্যতার নির্দেশ দেন।" (৪:৫৮)। AI safety হলো আমানা — শক্তিশালী technology-র দায়িত্ব গ্রহণ। যে শক্তি মানুষের হাতে, তার বিশ্বস্ত ব্যবহার আমানত। AI researcher শুধু শক্তিশালী মডেল বানায় না — সেই মডেল যেন উদ্দেশ্য থেকে বিচ্যুত না হয়, সেটা নিশ্চিত করে। এটাই দায়িত্ব, এটাই আমানা। যে আমানা রক্ষা করে, সে সত্যিকারের বিশ্বস্ত।</div>
<div class="dialogue en">Amanah — trust, trustworthiness. Allah says: "Allah commands you to deliver trusts to whom they are due, and when you judge between people, to judge with justice." (4:58). AI safety is amanah — taking responsibility for powerful technology. The power in human hands, its trustworthy use is a trust. An AI researcher doesn't just build powerful models — ensures they don't deviate from purpose. This is responsibility, this is amanah. One who keeps the trust is truly trustworthy.</div>

<div class="secret-box">🛡️ ML Theory + AI Safety: AI-এর 'কেন' ও 'কতটা নিরাপদ'। হট: mech interp (sparse autoencoders), alignment, frontier evals। কম ভিড়, উচ্চ প্রভাব — frontier labs এখানে বিলিয়ন ঢালছে। গণিত শক্ত হলে সোনা।</div>`,
  senior:{
    title:"Safety/Theory PhD-তে প্রবেশপথ — Senior Path",
    body:`<p><strong>Interp = সবচেয়ে tractable entry:</strong> mech interpretability (sparse autoencoders, circuits) এখন empirical ও measurable। Anthropic, OpenAI, DeepMind — সবাই এখানে অর্থ ঢালছে। একটা SAE re-implement করে feature analysis করো — দারুণ profile।</p><p><strong>Theory = উচ্চ bar, উচ্চ reward:</strong> COLT/NeurIPS theory track-এ ভর্তি কঠিন কিন্তু সম্মান সর্বোচ্চ। generalization, optimization dynamics-এ একটা clean theoretical result = lifetime credential। গণিত PhD-level শক্ত হলেই যাও।</p><p><strong>Frontier evals:</strong> UK/US AI Safety Institutes (২০২৪) এখন academic collaboration খুঁজছে। dangerous capability evals (bio, cyber, persuasion) — government funding, real impact।</p><p><strong>Politics trap:</strong> "AI doom" vs "e/acc" রাজনীতিতে না জড়িয়ে empirical work-এ মন দাও। তোমার research দারুণ হলে উভয় পক্ষ শুনবে।</p>`
  }
});

// ══ DOOR 5: DISTRIBUTED SYSTEMS ══
doors.push({
  num:5, icon:"🏗️", color:"#52c41a", name:"বিতরণের ভিত্তি",
  subtitle:"The Distributed Foundation", tech:"Distributed Systems",
  spirit:"আরশ — ভিত্তি, সবকিছু যার উপর দাঁড়িয়ে",
  secret:"Distributed systems হলো আজকের সব প্রযুক্তির ভিত্তি — Google, Amazon, ChatGPT-র পেছনের GPU cluster, সব। consensus (Paxos/Raft), replication, fault tolerance। AI hype আসবে যাবে — কিন্তু এই ভিত্তি চিরকাল। মাঝারি প্রতিযোগিতা (৫-৮%), স্থিতিশীল ফান্ডিং, অমর ক্যারিয়ার। যদি বানাতে ভালোবাসো — এটা তোমার ডোমেইন।",
  recall:{
    q:"মারিয়া কেন বললেন সমুদ্রের তলদেশ থাকে, কিন্তু ঢেউ আসে যায়?",
    qen:"Why did Maria say the ocean floor remains, but the waves come and go?",
    a:"কারণ ঢেউ (AI hype, নতুন framework) উপরে দেখা যায়, কিন্তু সব কিছু তলদেশের (systems) উপর চলে। ঢেউ থামলে তলদেশ থাকে। ChatGPT চলে কীভাবে? বিশাল distributed GPU cluster-এ। সেই cluster হলো তলদেশ — consensus, replication, fault tolerance। ভিত্তি ছাড়া কিছুই দাঁড়ায় না।",
    aen:"Because waves (AI hype, new frameworks) are visible on top, but everything runs on the floor (systems). When waves stop, the floor remains. How does ChatGPT run? On vast distributed GPU clusters. That cluster is the floor — consensus, replication, fault tolerance. Without foundation, nothing stands."
  },
  story:`
<p class="scene-setting">পঞ্চম দরজা। AI-এর চারটা সমুদ্র পেরিয়ে তুমি এখন সিস্টেমসের জগতে — সমুদ্রের তলদেশে। গভীর, শান্ত, নিস্তব্ধ। উপরে ঢেউ দেখা যাচ্ছে কিন্তু এখানে নীরবতা। বিশাল পাথরের স্তম্ভ দাঁড়িয়ে — প্রতিটা শত শত বছরের পুরনো, একে অপরের সাথে সেতু দিয়ে যুক্ত। স্তম্ভের তলায় বসে আছেন মারিয়া — রক্ষকের পোশাক, হাতে পাথরের হাতুড়ি, মুখে শান্ত দৃঢ়তা। তাঁর চারপাশে ছড়ানো ব্লুপ্রিন্ট, টুলস। ভেজা পাথরের ঠান্ডা গন্ধ, দূরে ভূমিকম্পের গর্জন, জলের স্পর্শ।</p>
<p class="scene-setting en">The fifth door. Past AI's four seas, you're now in the world of systems — the ocean floor. Deep, calm, silent. Above, waves are visible but here, stillness. Vast stone pillars stand — each centuries old, bridged to each other. Beneath a pillar sits Maria — guardian's garb, stone hammer in hand, calm firmness on her face. Around her: blueprints, tools. Smell of damp stone, distant seismic groan, the touch of water.</p>

<div class="dialogue">মারিয়া তোমাকে দেখলেন। "তুমি AI-এর চারটা সমুদ্র দেখলে — ভাষা, দৃষ্টি, সিদ্ধান্ত, নিরাপত্তা। ভালো। কিন্তু সেই সব চলে কীভাবে? আমার ভিত্তির উপর।" তিনি একটা স্তম্ভে হাতুড়ি মারলেন। "এই স্তম্ভ — এটাই একটা distributed system। একটা মেশিন নয়, অনেক মেশিন একসাথে। একটা ভাঙলে বাকিরা চলে। Google, Amazon, ChatGPT-র GPU cluster — সব এই ভিত্তির উপর।"</div>
<div class="dialogue en">Maria saw you. "You saw AI's four seas — language, vision, decisions, safety. Good. But how does all that run? On my foundation." She struck a pillar with her hammer. "This pillar — this is a distributed system. Not one machine, many machines together. One breaks, the rest continue. Google, Amazon, ChatGPT's GPU cluster — all on this foundation."</div>

<div class="diagram">
  <div class="diag-title">Distributed System — এক মেশিন ভাঙলেও সিস্টেম চলে</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowLeaf5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#52c41a"/></marker>
    </defs>
    <text class="lbl-sm" x="280" y="22" fill="#7dd3fc">৫টি নোড — একটা replicas ধরে, একটা down, বাকিরা চলে</text>
    <!-- 5 nodes in a ring -->
    ${[ ['N1',140,90,true], ['N2',260,70,false], ['N3',380,90,false], ['N4',330,160,false], ['N5',190,160,false] ].map(n=>{
      const cls=n[3]?'cell-hot':'cell-good';
      const lbl=n[3]?'N1 💀':'n[0]';
      return `<rect class="${cls}" x="${n[1]-30}" y="${n[2]-22}" width="60" height="44" rx="8"/><text class="lbl" x="${n[1]}" y="${n[2]}" fill="${n[3]?'#ff6b35':'#52c41a'}">${n[3]?'N1 ✗':'N'+n[0].slice(1)}</text>`;
    }).join('')}
    <!-- replication edges among healthy nodes -->
    <line class="edge-cyan" x1="260" y1="70" x2="380" y2="90" marker-end="url(#arrowLeaf5)"/>
    <line class="edge-cyan" x1="380" y1="90" x2="330" y2="160" marker-end="url(#arrowLeaf5)"/>
    <line class="edge-cyan" x1="330" y1="160" x2="190" y2="160" marker-end="url(#arrowLeaf5)"/>
    <line class="edge-cyan" x1="190" y1="160" x2="260" y2="70" marker-end="url(#arrowLeaf5)"/>
    <!-- dead node X -->
    <text class="lbl-sm" x="140" y="135" fill="#ff6b35">crashed</text>
    <text class="lbl-sm" x="280" y="200" fill="#5e5c74">consensus (Raft/Paxos): বাকি নোড একমত হয় নতুন leader ঠিক করে, ডেটা চলতে থাকে</text>
  </svg>
  <div class="diag-cap">fault tolerance-এর মূল: এক অংশ ভাঙলেও পুরো সিস্টেম থামে না। এটাই Google/Amazon-কে ২৪/৭ চালায়।</div>
</div>

<div class="code-block">Distributed Systems — গবেষণার শাখাসমূহ:

১. CONSENSUS & REPLICATION (হৃদয়)
   - Raft (understandable Paxos), Paxos variants, EPaxos
   - CRDTs (conflict-free replicated data types)
   - State machine replication, chain replication

২. FAULT TOLERANCE & RELIABILITY
   - Failure models (crash, Byzantine, split-brain)
   - Quorum systems, erasure coding, checkpointing
   - Chaos engineering, recovery, exactly-once semantics

৩. CLOUD & DATA CENTER (🔥 scale)
   - Resource scheduling (Borg/Kubernetes), serverless
   - Microservices, service mesh, CDN/edge
   - Cloud-native: disaggregated storage, composable infra

৪. DATA INFRASTRUCTURE (Door 10/11 সাথে)
   - Distributed queues (Kafka), stream processing (Flink)
   - Distributed transactions, HTAP, NewSQL (Spanner, CockroachDB)

৫. CONSENSUS-FREE & EVENTUAL
   - Dynamo-style (eventual consistency), gossip protocols
   - CAP/PACELC trade-offs, consistency models

৬. TIME, ORDER & PROOF
   - Logical/vector clocks, TrueTime (Spanner)
   - Byzantine fault tolerance (Door 8 সাথে — blockchain)</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🏗️ Consensus</td><td>Raft, Paxos, BFT, CRDTs</td><td>SOSP, OSDI, PODC, OPODIS</td></tr>
<tr><td class="hl">☁️ Cloud</td><td>Scheduling, serverless, microservices, edge</td><td>SOSP, OSDI, NSDI, EuroSys</td></tr>
<tr><td class="hl">💾 Storage</td><td>Distributed FS, key-value, disaggregated</td><td>SOSP, OSDI, ATC, SIGMOD</td></tr>
<tr><td class="hl">🌊 Streaming</td><td>Kafka, Flink, exactly-once, stream processing</td><td>SIGMOD, VLDB, DEEM</td></tr>
<tr><td class="hl">🔗 Blockchain</td><td>BFT consensus, smart contracts, L2</td><td>CCS, USENIX, FC</td></tr>
<tr><td class="hl">📐 Theory</td><td>CAP, consistency models, lower bounds</td><td>PODC, DISC, OPODIS</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-৮%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">#২</div><div class="sc-label">AI-এর পরে সর্বাধিক funded</div></div>
<div class="stat-card"><div class="sc-num">$১৫০-৩০০K</div><div class="sc-label">industry বেতন</div></div>
<div class="stat-card"><div class="sc-num">চিরকালীন</div><div class="sc-label">ক্যারিয়ার স্থিতিশীলতা</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Systems পুরোনো — এখন AI যুগ। distributed systems-এ কেউ কাজ করে না।" ভুল। ChatGPT চলে কীভাবে? বিশাল distributed GPU training (thousands of GPUs, fault-tolerant)। যে এটা বোঝে না সে LLM স্কেল করতে পারে না। MLSys (Door 7) এখন সবচেয়ে হট — আর সেটা distributed systems-এর উপর দাঁড়িয়ে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"Distributed systems হলো ভিত্তি — AI, cloud, blockchain সব এর উপর। AI-এর পরে সবচেয়ে funded, কিন্তু সবচেয়ে stable। hype-proof ক্যারিয়ার। MLSys (AI + systems) এখন সবচেয়ে হট — এটা distributed systems-এর child।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> AI training infrastructure (Megatron, DeepSeek-এর ২০৪৮ GPU training, fault tolerance), disaggregated databases (serverless HTAP), RDMA/Roxy-based transport, eBPF-ভিত্তিক observability, serverless/edge orchestration।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ বানাতে ভালোবাসো — backend, API, database, infra · ✅ C/C++/Rust/Go পরিচিত · ✅ AI-এর চেয়ে stable, hype-proof career চাও · ✅ LedgerPilot বানিয়েছ — end-to-end system বোঝো। <strong>MLSys = AI + Systems</strong> (Door 7) এখন সবচেয়ে হট crossover।</div></div>

<div class="dialogue">"তোমার একটা বিশেষ সুবিধা আছে," মারিয়া বললেন। "তুমি LedgerPilot বানিয়েছ — একটা সম্পূর্ণ সিস্টেম। Backend, database, API, frontend। তুমি জানো কীভাবে জিনিস end-to-end বানায়। এই অভিজ্ঞতা AI গবেষকদের কাছে নেই — তারা শুধু model নিয়ে কাজ করেন। তুমি জানো একটা request কীভাবে browser থেকে database পর্যন্ত যায়। এটা distributed systems research-এ বিশাল সুবিধা।"</div>
<div class="dialogue en">"You have a special advantage," Maria said. "You built LedgerPilot — a complete system. Backend, database, API, frontend. You know how things are built end-to-end. AI researchers often don't have this — they work only with models. You know how a request travels from browser to database. This is a huge advantage in distributed systems research."</div>

<div class="dialogue">আরশ — ভিত্তি, সবকিছু যার উপর দাঁড়িয়ে। কুরআনে আল্লাহ বলেন: "আল্লাহ তোমাদের মেরুদণ্ডকে সোজা করেছেন।" (৮০:১৯-২২ প্রসঙ্গ)। সবকিছুর একটা ভিত্তি আছে — আরশ ছাড়া কিছু দাঁড়ায় না। একটা বাড়ি ভিত্তির উপর, একটা গাছ শিকড়ের উপর, একটা সমাজ ন্যায্যতার উপর। Distributed systems research হলো ভিত্তি গড়া — এমন ভিত্তি যার উপর লাখ লাখ মানুষের কাজ চলে। Google, Amazon — সব ভিত্তির উপর। যে ভিত্তি গড়ে, সে স্রষ্টা। যে ভিত্তি ব্যবহার করে, সে ভোক্তা। গবেষক হলো স্রষ্টা।</div>
<div class="dialogue en">Arsh — foundation, on which everything stands. Allah speaks of the firm foundation. Everything has a foundation — without it, nothing stands. A house on its foundation, a tree on its roots, a society on justice. Distributed systems research is building foundations — foundations on which millions of people's work runs. Google, Amazon — all on foundations. One who builds foundations, is a creator. One who uses foundations, is a consumer. A researcher is a creator.</div>

<div class="secret-box">🏗️ Distributed Systems: আজকের সব প্রযুক্তির ভিত্তি। মাঝারি প্রতিযোগিতা (৫-৮%), AI-পরবর্তী funded, hype-proof ক্যারিয়ার। consensus, fault tolerance, cloud। MLSys (Door 7) এর পিতা। বানাতে ভালোবাসলে — এটা তোমার ডোমেইন।</div>`,
  senior:{
    title:"Systems PhD প্রবেশ — Senior Path",
    body:`<p><strong>একটা system বানাও আগে:</strong> top systems PhD-তে ভর্তির সবচেয়ে শক্ত সংকেত হলো একটা working system — GitHub-এ, বাস্তব, মানুষ ব্যবহার করে। LedgerPilot ইত্যাদি দারুণ শুরু। একটা open-source contribution (Kubernetes, etcd, কোনো database) golden।</p><p><strong>Benchmark + measurement paper:</strong> systems research-এ একটা careful measurement (যেমন "আমরা ১০টা ML serving system পরীক্ষা করে দেখলাম...") workshop-level paper হিসেবে শুরু — ভর্তিতে প্রভাবশালী। MLSys/SOSP/OSDI workshop-এ লক্ষ্য করো।</p><p><strong>Rust/C++/Go:</strong> systems research-এ Rust এখন dominant (memory safety)। একটা Rust project থাকলে প্রফেসররা খুশি হন। Linux kernel patch = legendary credential।</p><p><strong>MLSys দেখো:</strong> AI + systems intersection (Door 7) এখন সবচেয়ে হট — training infra, serving, GPU scheduling। তোমার developer background এখানে সোনা।</p>`
  }
});
