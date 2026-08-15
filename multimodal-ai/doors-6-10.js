// ════════════════════════════════════════
// পঞ্চইন্দ্রিয় — DOORS 6-10
// Multimodal AI: Alignment → Architecture
// ════════════════════════════════════════

// ══ DOOR 6: CROSS-MODAL ALIGNMENT ══
doors.push({
  num:6, icon:"🔗", color:"#a78bfa", name:"সংযোগ কক্ষ",
  subtitle:"The Alignment Chamber", tech:"Cross-Modal Alignment",
  spirit:"আল্লামাহ — সংযোগ করা, শেখানো",
  secret:"ছবি ও টেক্সট আলাদা জগতে। কিন্তু CLIP তাদের এক জায়গায় আনে। একই vector space। একটা ছবি ও তার বর্ণনা = একই বিন্দু। এটাই cross-modal alignment — ভিন্ন ইন্দ্রিয় এক জগতে। যে সংযোগ করে, সে সব বোঝে।",
  recall:{
    q:"সংযোগ কক্ষে কেন ভিন্ন ভিন্ন জিনিস এক জায়গায় আনা হয়?",
    qen:"Why are different things brought together?",
    a:"কারণ একা একা প্রতিটা অসম্পূর্ণ। ছবি ও টেক্সট এক জগতে = cross-modal alignment। CLIP, BLIP — একই vector space। যে সংযোগ করে, সে সব বোঝে। আল্লামাহ — সংযোগ।",
    aen:"Because each alone is incomplete. Image and text in one world = cross-modal alignment. CLIP, BLIP — same vector space. One who connects, understands all. Allamah — connection."
  },
  story:`
<p class="scene-setting">ষষ্ঠ ইন্দ্রিয়। সংযোগ কক্ষ। একটা বড় টেবিল — একদিকে ছবি, অন্যদিকে শব্দ। কক্ষরক্ষক সালমা প্রতিটা ছবির সাথে মিল শব্দ যুক্ত করেন। "ছবি ও শব্দ আলাদা," তিনি বললেন, "কিন্তু আমি তাদের সংযুক্ত করি। একই জগতে। এক ছবি = এক বর্ণনা। CLIP ঠিক এটাই করে।"</p>
<p class="scene-setting en">The sixth sense. Alignment chamber. A large table — images on one side, words on the other. Keeper Salma matches each image with its words. "Images and words are separate," she said, "but I connect them. In one world. One image = one description. CLIP does exactly this."</p>

<div class="dialogue">ভিডিও কক্ষ বলেছিলেন — ভিডিও বোঝো। কিন্তু আমি বলি — ভিন্ন মোডালিটি একসাথে কীভাবে? ছবি ও টেক্সট কীভাবে এক জগতে? Cross-modal alignment। এটাই multimodal AI-এর গভীরতম রহস্য — কীভাবে ভিন্ন ইন্দ্রিয় সংযুক্ত হয়।</div>
<div class="dialogue en">"The video chamber said — understand video. But I say — how do different modalities work together? How do image and text live in one world? Cross-modal alignment. This is multimodal AI's deepest mystery — how different senses connect."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Resolution Mismatch:</strong> Model trained on 224x224, deployed on 4K photos — performance collapsed. Fix: consistent preprocessing.</div></div>


<div class="code-block"># ── STEP 1: Cross-modal alignment ──
# One world, many senses.

alignment = """
CROSS-MODAL ALIGNMENT — ONE WORLD, MANY SENSES:

THE PROBLEM:
  Image embedding space: 768 dim
  Text embedding space: 768 dim
  → BUT they are DIFFERENT spaces!
  → "cat" text embedding ≠ cat image embedding

  Need: align the spaces
  → "a cat" text ~ cat image (close in shared space)

ALIGNMENT METHODS:

1. CONTRASTIVE LEARNING (CLIP):
   → Matching pairs → pull together
   → Non-matching pairs → push apart
   → "a dog playing" ~= [dog image] in shared space

2. GENERATIVE ALIGNMENT (BLIP, Flamingo):
   → Cross-attention between modalities
   → Text attends to image regions, image attends to text tokens
   → Deep, joint understanding

3. PROJECTION LAYER (LLaVA):
   → Train MLP to project image embeddings → text embedding space
   → Lightweight, works with any LLM

SHARED EMBEDDING SPACE:
  After alignment, all modalities live in one vector space:
  → "a dog" (text) ↔ [dog image]: close
  → "a cat" (text) ↔ [cat image]: close
  → dog ↔ cat: moderate distance
  → dog ↔ car: far apart
  → Cosine similarity = semantic match

MULTIMODAL RETRIEVAL:
  Text → Image: "sunset over mountains" → search image DB
  Image → Text: [birthday cake photo] → find recipes
  Image → Image: [reference photo] → find similar photos
  Audio → Text: [bird song] → "yellow warbler"

ALIGNMENT QUALITY:
  CLIP zero-shot accuracy: ~76% (ImageNet)
  SigLIP: ~77% (improved)
  Fine-tuned domain CLIP: 85-90%
  → Good but not perfect, domain-specific fine-tuning helps

TRAINING DATA FOR ALIGNMENT:
  → (image, caption) pairs: millions needed
  → LAION-5B: 5 billion image-text pairs
  → COCO: 330K images with captions
  → Quality > quantity: clean pairs matter

PYTHON (multimodal search with CLIP):
  from transformers import CLIPModel, CLIPProcessor
  from PIL import Image
  import chromadb

  model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
  processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

  # Embed images and text in same space:
  def embed_image(img_path):
      img = Image.open(img_path)
      inputs = processor(images=img, return_tensors="pt")
      return model.get_image_features(**inputs).detach().numpy()[0]

  def embed_text(text):
      inputs = processor(text=text, return_tensors="pt")
      return model.get_text_features(**inputs).detach().numpy()[0]

  # Store image embeddings in vector DB:
  db = chromadb.Client().create_collection("images")
  db.add(embeddings=[embed_image("cat.jpg")], ids=["cat"])

  # Search by text:
  query = embed_text("a furry animal")
  results = db.query(query_embeddings=[query], n_results=3)
  # Returns: cat.jpg (closest match!)
"""

print(alignment)</div>

<div class="code-block"># ── STEP 2: Multimodal embeddings & RAG ──
# All senses search.

mm_rag = """
MULTIMODAL EMBEDDINGS & RAG:

Traditional RAG: text query → text retrieval → text answer
Multimodal RAG: ANY modality query → ANY modality retrieval → text answer

MULTIMODAL RAG PIPELINE:

1. INGESTION:
   → Documents: text + images + tables + charts
   → Embed each modality with CLIP (shared space)
   → Store all embeddings in vector DB with metadata

2. RETRIEVAL:
   → Text query: "explain this diagram" + image
   → Embed query (text + image) → search vector DB
   → Retrieve: relevant text chunks + relevant images

3. GENERATION:
   → Feed retrieved text + images to VLM (GPT-4o, Gemini)
   → VLM generates answer using both modalities

PYTHON (multimodal RAG):
  from transformers import CLIPModel, CLIPProcessor
  from PIL import Image
  import chromadb

  # CLIP for shared embedding space:
  model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
  processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

  # Vector DB with both images and text:
  db = chromadb.Client().create_collection("multimodal_docs")

  # Add text chunks:
  for chunk in text_chunks:
      emb = embed_text(chunk)
      db.add(embeddings=[emb], documents=[chunk],
             metadatas=[{"type": "text"}], ids=[...])

  # Add images:
  for img_path in images:
      emb = embed_image(img_path)
      db.add(embeddings=[emb], documents=[img_path],
             metadatas=[{"type": "image"}], ids=[...])

  # Query with text:
  results = db.query(query_embeddings=[embed_text("revenue chart")], n_results=5)
  # Returns both text about revenue AND the actual chart image!

  # Feed to VLM:
  retrieved_images = [r for r in results if r['type'] == 'image']
  retrieved_text = [r for r in results if r['type'] == 'text']

  response = vlm.generate(
      images=retrieved_images,
      text=retrieved_text,
      question="What does the revenue chart show?"
  )

USE CASES:
  → Medical: X-ray + patient history → diagnosis
  → E-commerce: product image + description → recommendations
  → Education: diagrams + text → explanations
  → Legal: evidence photos + case documents → analysis
  → Manufacturing: defect images + specs → quality reports

CHALLENGES:
  → Mixed-modality retrieval: some queries match images, some text
  → Embedding quality: CLIP may not capture fine details
  → Context length: images consume many tokens
  → Cross-modal reasoning: connecting image content to text facts
"""

print(mm_rag)</div>

<div class="code-block"># ── STEP 3: Multimodal applications ──
# Real-world impact.

applications = """
MULTIMODAL APPLICATIONS — REAL-WORLD IMPACT:

1. HEALTHCARE:
   → Medical imaging analysis (X-ray, MRI, CT)
   → VLM reads scan + patient history → suggests diagnosis
   → Pathology slide analysis
   → Surgical assistance (real-time video analysis)

2. E-COMMERCE:
   → Visual search: "find similar products"
   → Product description generation from images
   → Virtual try-on (clothing, glasses)
   → Review analysis (text + customer photos)

3. EDUCATION:
   → Diagram understanding: "explain this diagram"
   → Math problem solving from photos
   → Language learning with visual context
   → Interactive tutors (see student's work)

4. ACCESSIBILITY:
   → Image description for blind users
   → Sign language recognition
   → Screen reader enhancement (understands images)
   → Video captioning for deaf users

5. CONTENT MODERATION:
   → Detect harmful images + text together
   → Understand memes (image + text = meaning)
   → Context-aware moderation

6. AUTOMOTIVE / ROBOTICS:
   → Self-driving: camera + lidar + radar fusion
   → Robot navigation: vision + spatial understanding
   → Industrial inspection: defect detection

7. CREATIVE:
   → Image editing from text instructions
   → Video generation from storyboards
   → Music + image sync (music video creation)
   → Architectural rendering from sketches

8. DOCUMENT AI:
   → OCR + understanding (forms, invoices, receipts)
   → Table extraction from images
   → Chart understanding ("read this graph")
   → Handwriting recognition

PYTHON (healthcare example):
  from openai import OpenAI
  import base64

  client = OpenAI()

  # X-ray image + patient history → diagnosis suggestion
  response = client.chat.completions.create(
      model="gpt-4o",
      messages=[{
          "role": "user",
          "content": [
              {"type": "text", "text": \"\"\"
              Patient: 55-year-old male, chronic cough, smoker.
              What do you observe in this chest X-ray?
              Note: This is educational only, not medical advice.
              \"\"\"},
              {"type": "image_url", "image_url": {
                  "url": f"data:image/jpeg;base64,{xray_b64}"
              }}
          ]
      }]
  )
  print(response.choices[0].message.content)
"""

print(applications)</div>

<div class="code-block"># ── STEP 4: Multimodal challenges ──
# Know your limits.

challenges = """
MULTIMODAL CHALLENGES — KNOW YOUR LIMITS:

1. HALLUCINATION:
   → VLM invents things not in the image
   → "I see a person" when there is none
   → Worse with low-quality/ambiguous images
   → Fix: grounding, confidence calibration

2. SPATIAL REASONING:
   → "Is the cup to the left or right of the plate?"
   → VLMs struggle with precise spatial relationships
   → Counting objects: poor above 5-10 items

3. FINE DETAIL:
   → Small text in images often missed
   → Thin lines, subtle patterns lost
   → High-resolution needed for document analysis

4. BIAS:
   → CLIP: gender/racial biases from training data
   → "doctor" → male images, "nurse" → female images
   → Fix: diverse training data, debiasing

5. COMPUTE COST:
   → Images: 1000+ tokens per image (expensive!)
   → Video: 1 frame/sec × 1 hour = 3600 frames
   → Batch processing: GPU-intensive

6. TEMPORAL REASONING (video):
   → Understanding cause and effect over time
   → "Why did the person pick up the phone?"
   → Still an active research area

7. CROSS-MODAL REASONING:
   → Connect visual content to text knowledge
   → "This graph shows revenue growth" (needs finance knowledge + vision)
   → Requires strong base model

8. DATA QUALITY:
   → Garbage in, garbage out
   → Blurry, low-light, unusual angles → poor performance
   → Augmentation helps but doesn't fully solve

MITIGATION STRATEGIES:
  → High-resolution mode for detail tasks
  → Chain-of-thought prompting for reasoning
  → Ensemble: multiple VLMs vote on answer
  → Fine-tune for specific domain
  → Human-in-the-loop for critical decisions
  → Confidence thresholds (reject low-confidence)
"""

print(challenges)</div>

<div class="code-block"># ── STEP 5: Complete multimodal architecture ──
# Full production system.

architecture = """
COMPLETE MULTIMODAL AI ARCHITECTURE:

COMPONENTS:

1. INPUT PROCESSING:
   → Image: resize, compress, encode (base64 or URL)
   → Audio: noise reduction, chunk if long
   → Video: frame extraction, temporal sampling
   → Text: tokenize, embed

2. EMBEDDING LAYER:
   → CLIP: shared text + image space
   → Whisper: audio → text
   → ViT: detailed image features
   → Audio embeddings for sound classification

3. STORAGE:
   → Vector DB: multimodal embeddings (Chroma, Qdrant)
   → Object storage: raw images, audio, video files
   → Metadata DB: modality, source, tags, timestamps

4. RETRIEVAL:
   → Cross-modal search: text → images, image → text
   → Hybrid: semantic + keyword + metadata filters
   → Reranking: cross-encoder for precision

5. GENERATION:
   → VLM (GPT-4o, Gemini) for multimodal reasoning
   → Image generation (DALL-E, Stable Diffusion)
   → TTS for voice output

6. OUTPUT:
   → Text response with image references
   → Generated images/diagrams
   → Voice response (TTS)
   → Structured data (JSON)

PYTHON (production multimodal pipeline):
  class MultimodalPipeline:
      def __init__(self):
          self.clip = CLIPModel.from_pretrained(...)
          self.whisper = whisper.load_model("base")
          self.vlm = OpenAI()  # GPT-4o
          self.vdb = chromadb.Client().create_collection("mm")

      def ingest(self, files):
          for f in files:
              if f.endswith(('.jpg', '.png')):
                  emb = self.clip_embed_image(f)
                  self.vdb.add(embeddings=[emb], ids=[f],
                               metadatas=[{"type": "image"}])
              elif f.endswith(('.mp3', '.wav')):
                  text = self.whisper.transcribe(f)["text"]
                  emb = self.clip_embed_text(text)
                  self.vdb.add(embeddings=[emb], documents=[text],
                               metadatas=[{"type": "audio_transcript"}])
              else:  # text
                  emb = self.clip_embed_text(f)
                  self.vdb.add(embeddings=[emb], documents=[f],
                               metadatas=[{"type": "text"}])

      async def query(self, question, image=None):
          # Retrieve relevant content:
          q_emb = self.clip_embed_text(question)
          results = self.vdb.query(query_embeddings=[q_emb], n_results=5)

          # Build prompt for VLM:
          content = [{"type": "text", "text": question}]
          if image:
              content.append({"type": "image_url", "image_url": {"url": image}})

          response = self.vlm.chat.completions.create(
              model="gpt-4o",
              messages=[{"role": "user", "content": content}]
          )
          return response.choices[0].message.content

DEPLOYMENT:
  → API: FastAPI with multipart upload support
  → Storage: S3 for images/audio, vector DB for embeddings
  → Processing: Celery workers for async ingestion
  → CDN: for serving images to clients
"""

print(architecture)</div>

<div class="code-block"># ── STEP 6: Multimodal AI journey ──
# Your path to multimodal mastery.

journey = """
YOUR MULTIMODAL AI JOURNEY:

You started seeing AI as "text in, text out."
You finish seeing AI THAT SEES, HEARS, SPEAKS, AND CREATES:

WHAT YOU'VE MASTERED:
  ✅ Vision encoders (ViT, CLIP, DINOv2)
  ✅ Vision-Language Models (GPT-4o, Claude, Gemini, LLaVA)
  ✅ Image generation (DALL-E, Stable Diffusion, Flux)
  ✅ Audio processing (Whisper STT, TTS, MusicGen)
  ✅ Video understanding (Gemini, frame extraction)
  ✅ Cross-modal alignment (shared embedding space)
  ✅ Multimodal RAG (search across all modalities)
  ✅ Real-world applications (healthcare, e-commerce, education)
  ✅ Challenges (hallucination, spatial reasoning, cost)
  ✅ Complete architecture (ingestion → retrieval → generation)

THE MULTIMODAL ENGINEER'S MINDSET:
  1. "What modalities are involved?" (text, image, audio, video)
  2. "How do I align them?" (CLIP, shared embedding space)
  3. "What model handles this?" (VLM, Whisper, diffusion)
  4. "What's the cost?" (images = many tokens)
  5. "What can go wrong?" (hallucination, bias, detail loss)

"The future of AI is not text-only.
 It is multimodal: seeing, hearing, speaking.
 Like humans experience the world."
 — Multimodal AI vision

WHAT TO STUDY NEXT:
  → Build a multimodal RAG system
  → Fine-tune LLaVA for your domain
  → Explore Stable Diffusion + ControlNet
  → Try Whisper for podcast transcription
  → Study CLIP paper (Radford et al., 2021)
  → Follow: Sora, Gemini updates, VLM benchmarks

Welcome to multimodal AI mastery.
"""

print(journey)

# FINAL SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Modality         │ Tool/Model                    │
# ├──────────────────┼──────────────────────────────────┤
# │ Vision encode    │ CLIP, ViT, DINOv2             │
# │ VLM              │ GPT-4o, Claude 3.5, Gemini    │
# │ Image gen        │ DALL-E 3, SD, Flux            │
# │ Speech-to-text   │ Whisper                       │
# │ Text-to-speech   │ ElevenLabs, OpenAI TTS        │
# │ Music gen        │ Suno, AudioCraft/MusicGen     │
# │ Video understand │ Gemini 1.5 Pro                │
# │ Video gen        │ Sora, Runway Gen-3            │
# │ Cross-modal RAG  │ CLIP + Chroma + VLM           │
# └──────────────────┴──────────────────────────────────┘</div>

২. GENERATIVE ALIGNMENT (BLIP, Flamingo)
  → cross-attention between modalities
  → text attends to image regions
  → image attends to text tokens
  → deep, joint understanding

৩. PROJECTION LAYER (LLaVA)
  → train a simple MLP to project
    image embeddings → text embedding space
  → lightweight, works with any LLM

SHARED EMBEDDING SPACE:
  After alignment:
  
  # ──────────────────────────────────# 
  #  Shared Vector Space (৭৬৮ dim)    # 
  #                                   # 
  #   🐕 ← "a dog" (text)            # 
  #   🐱 ← "a cat" (text)            # 
  #   🖼️ ← [dog image]               # 
  #   🖼️ ← [cat image]               # 
  #                                   # 
  #   dog text ↔ dog image: close     # 
  #   cat text ↔ cat image: close     # 
  #   dog ↔ cat: far                  # 
  #   dog ↔ car: very far             # 
  # ──────────────────────────────────# 
  
  → cosine similarity = semantic match
  → "find images like this text" = vector search

MULTIMODAL RETRIEVAL:
  Text → Image: "sunset over mountains"
    → search image DB → find matching photos
  
  Image → Text: [photo of a birthday cake]
    → search text DB → find relevant recipes
  
  Image → Image: [reference photo]
    → search image DB → find similar photos
  
  Audio → Text: [bird song]
    → search → "yellow warbler"

ALIGNMENT QUALITY:
  CLIP zero-shot accuracy: ~৭৬% (ImageNet)
  SigLIP: ~৭৭% (improved)
  Fine-tuned domain CLIP: ৮৫-৯০%
  
  → ভালো কিন্তু perfect নয়
  → domain-specific alignment দরকার হতে পারে

TRAINING DATA FOR ALIGNMENT:
  → (image, caption) pairs: millions
  → LAION-৫B: ৫ billion image-text pairs
  → COCO: ৩৩০K images with captions
  → quality > quantity: clean pairs matter

<div class="dialogue">আল্লামাহ — connector, unifier, teacher। কুরআনে আল্লাহ বলেন — "তিনি মানুষকে শিখিয়েছেন।" (৯৬:৫)। শেখানো = সংযোগ করা — ভিন্ন জিনিস একসাথে। Cross-modal alignment-ও তেমনি — ছবি ও শব্দ, এক জগতে। যে সংযোগ করে, সে গভীর বোঝে। আল্লামাহ — সংযোগের গুণ।</div>
<div class="dialogue en">"Allamah — connector, unifier, teacher. Allah says — 'He taught man.' (96:5). Teaching = connecting — different things together. Cross-modal alignment too — image and word, one world. One who connects, understands deeply. Allamah — the attribute of connection."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrMM6" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="290" y="24" text-anchor="middle" fill="#a855f7" font-size="13" font-weight="700">Cross-modal Alignment — ভিন্ন ইন্দ্রিয় এক জগতে</text>
<text x="100" y="55" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="600">ছবির জগত</text>
<text x="480" y="55" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="600">টেক্সটের জগত</text>
<circle cx="70" cy="110" r="15" fill="#1e1b3a" stroke="#a855f7" stroke-width="2"/>
<text x="70" y="114" text-anchor="middle" fill="#c084fc" font-size="8">🐱</text>
<circle cx="130" cy="110" r="15" fill="#1e1b3a" stroke="#a855f7" stroke-width="2"/>
<text x="130" y="114" text-anchor="middle" fill="#c084fc" font-size="8">🐶</text>
<circle cx="450" cy="110" r="15" fill="#1e1b3a" stroke="#22d3ee" stroke-width="2"/>
<text x="450" y="114" text-anchor="middle" fill="#67e8f9" font-size="8">"cat"</text>
<circle cx="510" cy="110" r="15" fill="#1e1b3a" stroke="#22d3ee" stroke-width="2"/>
<text x="510" y="114" text-anchor="middle" fill="#67e8f9" font-size="8">"dog"</text>
<rect x="220" y="70" width="140" height="90" rx="10" fill="#0f172a" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,3"/>
<text x="290" y="95" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">Shared Space</text>
<text x="290" y="115" text-anchor="middle" fill="#9290a8" font-size="9">একই vector জগত</text>
<circle cx="265" cy="135" r="6" fill="#a855f7"/>
<circle cx="285" cy="140" r="6" fill="#22d3ee"/>
<circle cx="305" cy="135" r="6" fill="#22c55e"/>
<text x="290" y="160" text-anchor="middle" fill="#9290a8" font-size="10">এক বিন্দুতে মিল</text>
<line x1="85" y1="110" x2="240" y2="120" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrMM6)"/>
<line x1="145" y1="110" x2="250" y2="135" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrMM6)"/>
<line x1="435" y1="110" x2="340" y2="120" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrMM6)"/>
<line x1="495" y1="110" x2="330" y2="135" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrMM6)"/>
<text x="170" y="100" text-anchor="middle" fill="#c084fc" font-size="8">encode</text>
<text x="410" y="100" text-anchor="middle" fill="#67e8f9" font-size="8">encode</text>
<text x="290" y="195" text-anchor="middle" fill="#9290a8" font-size="9">🐱 ও "cat" একই বিন্দুতে — cosine similarity বেশি</text>
<text x="290" y="215" text-anchor="middle" fill="#22c55e" font-size="9">ছবি দিয়ে টেক্সট খোঁজো, টেক্সট দিয়ে ছবি — দুই দিকেই যায়</text>
</svg>
</div>
<div class="svg-caption">Alignment: ছবি ও টেক্সট একই embedding space-এ। মিল থাকলে কাছে, না থাকলে দূরে।</div>`,
  senior:{
    title:"Alignment in Practice",
    body:`<p><strong>Image-text search:</strong> OpenCLIP embeddings → vector DB (Qdrant) → text query retrieves images।</p><p><strong>VLM training:</strong> Projection layer (MLP) aligns ViT embeddings to LLM space। LLaVA approach।</p><p><strong>Domain-specific:</strong> Fine-tune CLIP on your domain (medical, fashion, product) → better alignment।</p><p><strong>Multimodal RAG:</strong> Store image+text embeddings together → retrieve by either modality।</p>`
  }
});

// ══ DOOR 7: MULTIMODAL EMBEDDINGS ══
doors.push({
  num:7, icon:"🔮", color:"#f0abfc", name:"বহুমুখী স্মৃতির কক্ষ",
  subtitle:"The Multimodal Memory Chamber", tech:"Multimodal Embeddings & RAG",
  spirit:"হাফিয — সব মোডালিটির স্মৃতি",
  secret:"RAG শুধু টেক্সট নয়। ছবি RAG, অডিও RAG, ভিডিও RAG। সব মোডালিটির embedding এক DB-তে। টেক্সট দিয়ে ছবি খোঁজো, ছবি দিয়ে অডিও খোঁজো। এটাই multimodal RAG — সব ইন্দ্রিয় দিয়ে তল্লাশ।",
  recall:{
    q:"বহুমুখী স্মৃতির কক্ষে কেন ছবি, শব্দ, শব্দ একসাথে রাখা হয়?",
    qen:"Why are images, sounds, and words kept together?",
    a:"কারণ জ্ঞান শুধু টেক্সট নয়। ছবি, অডিও — সব। Multimodal RAG-এ সব মোডালিটির embedding এক DB-তে। টেক্সট দিয়ে ছবি খোঁজো, ছবি দিয়ে টেক্সট। হাফিয — সব মোডালিটির স্মৃতি।",
    aen:"Because knowledge isn't just text. Images, audio — everything. In multimodal RAG, all modality embeddings in one DB. Search images by text, text by image. Hafi — memory of all modalities."
  },
  story:`
<p class="scene-setting">সপ্তম ইন্দ্রিয়। বহুমুখী স্মৃতির কক্ষ। একটা বিশাল গ্রন্থাগার — কিন্তু শুধু বই নয়। ছবি, রেকর্ডিং, ভিডিও — সব একসাথে। গ্রন্থাগারিক জয়নাল বললেন — "তুমি যেকোনো কিছু দিয়ে খুঁজতে পারো। ছবি দাও — মিল বই পাবে। গানের কয়েক সেকেন্ড দাও — মিল তথ্য পাবে। সব একসাথে। এটাই multimodal RAG।"</p>
<p class="scene-setting en">The seventh sense. Multimodal memory chamber. A vast library — but not just books. Images, recordings, videos — all together. Librarian Zaynal said — "You can search with anything. Give an image — get matching books. Give a few seconds of song — get matching info. All together. This is multimodal RAG."</p>

<div class="dialogue">সংযোগ কক্ষ বলেছিলেন — alignment দাও। কিন্তু আমি বলি — alignment দিলেই শেষ নয়। সেই aligned embeddings দিয়ে RAG বানাও। ছবি, অডিও, ভিডিও — সব retrieve করো। টেক্সট দিয়ে ছবি, ছবি দিয়ে টেক্সট। এটাই multimodal RAG — সব ইন্দ্রিয় দিয়ে তল্লাশ।</div>
<div class="dialogue en">"The alignment chamber said — give alignment. But I say — alignment isn't the end. Use those aligned embeddings to build RAG. Images, audio, video — retrieve everything. Text for images, images for text. This is multimodal RAG — searching with all senses."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Audio Noise Sensitivity:</strong> Model worked in lab but failed in real-world noisy audio. Fix: train with data augmentation.</div></div>


<div class="code-block">Multimodal Embeddings & RAG — All Senses Search:

MULTIMODAL VECTOR DB:

  # ──────────────────────────────────────# 
  #  One Vector DB — Many Modalities      # 
  #                                       # 
  #   [text embedding] ← CLIP text enc   # 
  #   [image embedding] ← CLIP image enc # 
  #   [audio embedding] ← CLAP audio enc # 
  #                                       # 
  #   All in SAME space!                  # 
  #   → "a dog" finds dog images         # 
  #   → dog image finds "a dog" text     # 
  #   → dog bark finds dog content       # 
  # ──────────────────────────────────────# 

MULTIMODAL EMBEDDING MODELS:

  Text + Image:
    CLIP / SigLIP / OpenCLIP
    → text and image in same space
  
  Text + Audio:
    CLAP (Contrastive Language-Audio Pretraining)
    → text and audio in same space
    → "a dog barking" → dog bark audio
  
  Text + Image + Audio:
    ImageBind (Meta)
    → ৬ modalities in one space!
    → text, image, audio, depth, thermal, IMU
  
  Universal:
    Cohere Embed v৩ → multilingual text
    Voyage AI → multimodal embeddings

MULTIMODAL RAG PIPELINE:

  # ────────────────────────────────────# 
  #  INGEST                             # 
  #  Documents → text chunks → embed   # 
  #  Images → embed (CLIP)             # 
  #  Audio → transcribe (Whisper) +    # 
  #    embed audio (CLAP)              # 
  #  Video → keyframes + audio + text  # 
  #  All embeddings → one vector DB    # 
  # ────────────────────────────────────# 
  #  QUERY (any modality)              # 
  #  "find slides about transformer"   # 
  #  → text query → text embed         # 
  #  → search all (text + image +      # 
  #    audio embeddings)              # 
  #  → retrieve matching content       # 
  #    from any modality              # 
  # ────────────────────────────────────# 
  #  GENERATE                          # 
  #  retrieved text + images + audio   # 
  #  descriptions → VLM → answer      # 
  #  → "Based on slide ৩ and the       # 
  #    lecture audio..."               # 
  # ────────────────────────────────────# 

USE CASES:

  E-commerce:
    → "find similar products" (image search)
    → "red dress under $৫০" (text → image)
    → "this outfit but blue" (image + text)
  
  Education:
    → find relevant slides by text query
    → find lecture segment by concept
    → diagram + explanation together
  
  Healthcare:
    → find similar X-rays
    → "cases with similar symptoms"
    → image + lab report + notes
  
  Media/Content:
    → "find the scene where [X]"
    → "photos of [concept]" 
    → "interviews about [topic]"

CHALLENGES:
  → Different modalities = different granularity
    (text = words, image = pixels, audio = frames)
  → embedding alignment imperfect
  → storage: images/audio = more space than text
  → cost: embedding images/audio more expensive
  → retrieval: which modality is most relevant?

IMPLEMENTATION:
  Vector DB: Qdrant/Weaviate (multimodal support)
  Embedding: CLIP (text+image) + CLAP (audio)
  Framework: LlamaIndex MultiModalVectorStoreIndex
  
  from llama_index import (
    MultiModalVectorStoreIndex)
  
  index = MultiModalVectorStoreIndex.from_documents(
    documents_with_images_and_text)
  
  retriever = index.as_retriever()
  results = retriever.retrieve("a diagram of attention")</div>

<div class="dialogue">হাফিয — preserver of all, memorizer। কুরআনে আল্লাহ বলেন — "নিশ্চয় আমরা কুরআন নাজিল করেছি এবং নিশ্চয় আমরাই এর সংরক্ষক।" (১৫:৯)। সংরক্ষণ শুধু টেক্সট নয় — সব মোডালিটি। Multimodal RAG-ও তেমনি — সব মোডালিটি সংরক্ষণ ও retrieval। হাফিয — সব ইন্দ্রিয়ের স্মৃতি রক্ষক।</div>
<div class="dialogue en">"Hafi — preserver of all, memorizer. Allah says — 'We sent down the Quran and We are its preserver.' (15:9). Preservation isn't just text — all modalities. Multimodal RAG too — all modality storage and retrieval. Hafi — memory keeper of all senses."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrMM7" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="290" y="24" text-anchor="middle" fill="#a855f7" font-size="13" font-weight="700">Multimodal Fusion — সব মোডালিটি এক DB-তে</text>
<rect x="20" y="50" width="55" height="35" rx="6" fill="#1e1b3a" stroke="#a855f7" stroke-width="2"/>
<text x="47" y="72" text-anchor="middle" fill="#c084fc" font-size="9">ছবি</text>
<rect x="20" y="95" width="55" height="35" rx="6" fill="#1e1b3a" stroke="#22d3ee" stroke-width="2"/>
<text x="47" y="117" text-anchor="middle" fill="#67e8f9" font-size="9">টেক্সট</text>
<rect x="20" y="140" width="55" height="35" rx="6" fill="#1e1b3a" stroke="#22c55e" stroke-width="2"/>
<text x="47" y="162" text-anchor="middle" fill="#4ade80" font-size="9">অডিও</text>
<rect x="100" y="55" width="70" height="115" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<text x="135" y="80" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">Embed</text>
<text x="135" y="98" text-anchor="middle" fill="#9290a8" font-size="10">CLIP</text>
<text x="135" y="112" text-anchor="middle" fill="#9290a8" font-size="10">CLAP</text>
<text x="135" y="126" text-anchor="middle" fill="#9290a8" font-size="10">Whisper</text>
<text x="135" y="150" text-anchor="middle" fill="#9290a8" font-size="10">→ vector</text>
<rect x="195" y="60" width="110" height="110" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
<text x="250" y="85" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="700">Vector DB</text>
<text x="250" y="103" text-anchor="middle" fill="#9290a8" font-size="8">Qdrant /</text>
<text x="250" y="116" text-anchor="middle" fill="#9290a8" font-size="8">Weaviate</text>
<circle cx="230" cy="135" r="4" fill="#a855f7"/>
<circle cx="245" cy="142" r="4" fill="#22d3ee"/>
<circle cx="260" cy="135" r="4" fill="#22c55e"/>
<circle cx="275" cy="148" r="4" fill="#a855f7"/>
<text x="250" y="165" text-anchor="middle" fill="#9290a8" font-size="10">সব একসাথে</text>
<rect x="330" y="55" width="80" height="115" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
<text x="370" y="80" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Retrieve</text>
<text x="370" y="98" text-anchor="middle" fill="#9290a8" font-size="10">cosine</text>
<text x="370" y="112" text-anchor="middle" fill="#9290a8" font-size="10">similarity</text>
<text x="370" y="130" text-anchor="middle" fill="#9290a8" font-size="10">top-k</text>
<text x="370" y="155" text-anchor="middle" fill="#9290a8" font-size="10">mix result</text>
<rect x="435" y="95" width="125" height="40" rx="8" fill="#1e1b3a" stroke="#22c55e" stroke-width="2"/>
<text x="497" y="113" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">VLM synthesizes</text>
<text x="497" y="127" text-anchor="middle" fill="#9290a8" font-size="8">ছবি+টেক্সট+অডিও → উত্তর</text>
<line x1="75" y1="67" x2="98" y2="80" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrMM7)"/>
<line x1="75" y1="112" x2="98" y2="112" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrMM7)"/>
<line x1="75" y1="157" x2="98" y2="145" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrMM7)"/>
<line x1="170" y1="112" x2="193" y2="112" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM7)"/>
<line x1="305" y1="112" x2="328" y2="112" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrMM7)"/>
<line x1="410" y1="112" x2="433" y2="112" stroke="#22c55e" stroke-width="2" marker-end="url(#arrMM7)"/>
<text x="290" y="200" text-anchor="middle" fill="#9290a8" font-size="9">টেক্সট দাও → ছবি পাও। ছবি দাও → অডিও পাও। সব মোডালিটি cross-search।</text>
<text x="290" y="220" text-anchor="middle" fill="#22c55e" font-size="9">এক DB, সব ইন্দ্রিয় — এটাই multimodal RAG</text>
</svg>
</div>
<div class="svg-caption">Fusion: ছবি, টেক্সট, অডিও — সব embedding এক DB-তে। যেকোনো মোডালিটি দিয়ে খোঁজো।</div>`,
  senior:{
    title:"Multimodal RAG Setup",
    body:`<p><strong>DB:</strong> Qdrant বা Weaviate — multimodal vector search support।</p><p><strong>Embeddings:</strong> CLIP (text+image), CLAP (audio), Whisper transcription for audio text।</p><p><strong>Framework:</strong> LlamaIndex MultiModalVectorStoreIndex — built-in multimodal RAG।</p><p><strong>Ingest:</strong> Each document → text chunks + images → embed each → store with metadata (modality type)।</p><p><strong>Query:</strong> Text query → embed → search across all modalities → return mixed results → VLM synthesizes।</p>`
  }
});

// ══ DOOR 8: MULTIMODAL APPLICATIONS ══
doors.push({
  num:8, icon:"🏗️", color:"#e9d5ff", name:"নির্মাণের কক্ষ",
  subtitle:"The Building Chamber", tech:"Multimodal Applications",
  spirit:"খলিফাতুল আরদ — পৃথিবীর কর্মী",
  secret:"Multimodal AI = সব ইন্দ্রিয় একসাথে। চিকিৎসা, শিক্ষা, কোড, ডিজাইন — প্রতিটা ক্ষেত্রে প্রয়োগ। UI থেকে কোড, ছবি থেকে রোগ নিরণয়, ভিডিও থেকে সারাংশ। যে বানায়, সে পৃথিবী বদলায়।",
  recall:{
    q:"নির্মাণের কক্ষে কেন একাধিক কাজ একসাথে হয়?",
    qen:"Why are multiple tasks done together?",
    a:"কারণ multimodal AI একাধিক কাজে সক্ষম। UI থেকে কোড, ছবি থেকে রোগ, ভিডিও থেকে সারাংশ। খলিফাতুল আরদ — পৃথিবীর কর্মী। যে বানায়, সে বদলায়।",
    aen:"Because multimodal AI is capable of multiple tasks. UI to code, image to diagnosis, video to summary. Khalifatul Ard — steward of earth. One who builds, changes."
  },
  story:`
<p class="scene-setting">অষ্টম ইন্দ্রিয়। নির্মাণের কক্ষ। কারিগর আদনান একসাথে অনেক কাজ করছেন — ছবি থেকে মানচিত্র, স্কেচ থেকে ভবন, অডিও থেকে নোট। "এক জিনিস দিয়ে আরেক জিনিস," তিনি বললেন। "ছবি থেকে কোড, কোড থেকে ছবি, কথা থেকে ভিডিও। Multimodal AI পৃথিবী বদলাচ্ছে।"</p>
<p class="scene-setting en">The eighth sense. Building chamber. Craftsman Adnan works on many tasks at once — image to map, sketch to building, audio to notes. "One thing to another," he said. "Image to code, code to image, speech to video. Multimodal AI is changing the world."</p>

<div class="dialogue">বহুমুখী স্মৃতি বলেছিলেন — multimodal RAG। কিন্তু আমি বলি — RAG শুধু শুরু। প্রকৃত প্রয়োগ — multimodal applications। যেখানে সব ইন্দ্রিয় একসাথে কাজ করে সমস্যা সমাধানে। চিকিৎসক ছবি দেখে রোগ চিনে, ইঞ্জিনিয়ার স্কেচ দেখে কোড লেখে, শিক্ষার্থী ভিডিও দেখে প্রশ্ন করে।</div>
<div class="dialogue en">"The multimodal memory said — multimodal RAG. But I say — RAG is just the start. Real applications — multimodal apps. Where all senses work together to solve problems. Doctors diagnose from images, engineers code from sketches, students ask questions about videos."</div>`,
  story:`
<p class="scene-setting">The eighth sense. Building chamber. Multiple workstations — each showing a different multimodal application. Medical imaging, code generation, education, design, content creation. Craftsman Adnan moved between them. "Each application combines senses," he said. "Vision + language for medical. Sketch + code for design. Audio + text for education. One sense alone is limited. All senses together = powerful."</p>
<p class="scene-setting en">The eighth sense. Building chamber. Multiple workstations — each showing a different multimodal application. Medical imaging, code generation, education, design, content creation. Craftsman Adnan moved between them. "Each application combines senses," he said. "Vision + language for medical. Sketch + code for design. Audio + text for education. One sense alone is limited. All senses together = powerful."</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Frame Sampling Too Sparse:</strong> Video model sampled 1 frame/second — missed fast actions. Fix: adaptive sampling.</div></div>


<div class="code-block">Multimodal Applications — Real-World Impact:

APPLICATION CATEGORIES:

# ──────────────────────────────────────────────# 
#  ১. VISUAL UNDERSTANDING                      # 
#  → Medical imaging: X-ray/MRI analysis        # 
#  → Document AI: scanned PDFs, receipts        # 
#  → Quality control: defect detection          # 
#  → Autonomous driving: scene understanding    # 
#  → Security: facial recognition (ethical!)    # 
# ──────────────────────────────────────────────# 
#  ২. CREATIVE GENERATION                       # 
#  → Design: text to logo/poster/UI             # 
#  → Art: text to painting/illustration         # 
#  → Video: text to video (Sora/Runway)         # 
#  → Music: text to song (Suno)                 # 
#  → Voice: text to speech (TTS)                # 
# ──────────────────────────────────────────────# 
#  ৩. CODE & DEVELOPMENT                        # 
#  → Screenshot to code: UI → HTML/CSS          # 
#  → Whiteboard to code: sketch → Python        # 
#  → Design to code: Figma → React              # 
#  → Debug from screenshot: error → fix         # 
# ──────────────────────────────────────────────# 
#  ৪. EDUCATION & ACCESSIBILITY                 # 
#  → Visual tutoring: "explain this diagram"    # 
#  → Photo math: snap equation → solve          # 
#  → Audio descriptions for blind users         # 
#  → Real-time sign language translation        # 
#  → Language learning: pronunciation feedback  # 
# ──────────────────────────────────────────────# 
#  ৫. CONTENT & MEDIA                           # 
#  → Video summarization: ১hr → ৫min            # 
#  → Auto-captioning: Whisper + video           # 
#  → Content moderation: image/video safety     # 
#  → Multimodal search: "find this scene"       # 
#  → Creative writing with image prompts        # 
# ──────────────────────────────────────────────# 
#  ৬. ROBOTICS & EMBODIED AI                    # 
#  → Robot vision: navigate + manipulate        # 
#  → Voice + vision assistant                   # 
#  → AR/VR: real-time scene understanding       # 
#  → IoT: sensor fusion (vision + audio)        # 
# ──────────────────────────────────────────────# 

KILLER APPS (2024-2025):

  Screenshot → Code:
    Input: [UI screenshot]
    Prompt: "Build this as React component"
    → GPT-5/Vercel v0 → working code
    
  Medical VLM:
    Input: [chest X-ray]
    Prompt: "What abnormalities do you see?"
    → "Possible pleural effusion on the right.
       Recommend clinical correlation."
    → NOT replacement — ASSISTANT to doctor

  Meeting Intelligence:
    Input: [video + audio of meeting]
    → Whisper transcribes
    → VLM reads whiteboard/slides
    → LLM summarizes
    → "Meeting summary + action items + 
       decisions made"

  Multimodal RAG:
    Input: "Show me diagrams explaining 
           attention mechanism"
    → retrieves text + diagrams + video clips
    → VLM synthesizes: "Here's a visual 
       explanation based on slides ৩-৫..."

  Real-time Translation:
    Input: [Bengali speech]
    → Whisper transcribes (Bengali)
    → LLM translates (English)
    → TTS speaks (English)
    → ~১s latency, conversational

ETHICS & SAFETY:
  → Medical: NOT autonomous diagnosis — 
    assist only, human accountable
  → Deepfake: watermark, detect, regulate
  → Privacy: faces in images, voice data
  → Bias: VLMs may have cultural bias
    (perform differently across demographics)
  → Consent: voice cloning, face generation

BUILDING MULTIMODAL APPS:

  Tech Stack:
    Frontend: React + file upload (image/audio/video)
    Backend: FastAPI + multimodal API calls
    Vision: GPT-5 vision / Claude Sonnet 4
    Audio: Whisper (STT) + OpenAI TTS
    Images: DALL-E 3 / Stable Diffusion
    Storage: S3 for media files
    
  Key considerations:
    → file size limits (compress images)
    → latency (audio/video processing slow)
    → cost (image tokens expensive)
    → safety (content filter for inputs/outputs)
    → fallback (if VLM fails, text-only)</div>

<div class="dialogue">খলিফাতুল আরদ — steward of the earth। কুরআনে আল্লাহ বলেন — "আমি পৃথিবীতে খলিফা স্থাপন করব।" (২:৩০)। খলিফা = পৃথিবীর কর্মী, নির্মাতা। Multimodal AI application = সেই নির্মাণের টুল। যে বানায়, সে খলিফা। যে শুধু দেখে, সে দর্শক। খলিফাতুল আরদ — পৃথিবীর কর্মী হও।</div>
<div class="dialogue en">"Khalifatul Ard — steward of the earth. Allah says — 'I will place a khalifa on earth.' (2:30). Khalifa = earth's worker, builder. Multimodal AI applications = tools of that building. One who builds, is a khalifa. One who only watches, is a spectator. Khalifatul Ard — be a steward of earth."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrMM8" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="290" y="24" text-anchor="middle" fill="#a855f7" font-size="13" font-weight="700">Grounding — ছবিতে কোথায় কী আছে</text>
<rect x="30" y="50" width="160" height="120" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<text x="110" y="70" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="600">Input Image</text>
<rect x="50" y="80" width="40" height="30" rx="4" fill="none" stroke="#22d3ee" stroke-width="2"/>
<text x="70" y="98" text-anchor="middle" fill="#67e8f9" font-size="8">cat</text>
<rect x="110" y="95" width="50" height="35" rx="4" fill="none" stroke="#22c55e" stroke-width="2"/>
<text x="135" y="115" text-anchor="middle" fill="#4ade80" font-size="8">table</text>
<rect x="75" y="130" width="35" height="25" rx="4" fill="none" stroke="#a855f7" stroke-width="2"/>
<text x="92" y="146" text-anchor="middle" fill="#c084fc" font-size="10">cup</text>
<text x="110" y="170" text-anchor="middle" fill="#9290a8" font-size="8">bbox + label</text>
<line x1="190" y1="110" x2="218" y2="110" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM8)"/>
<rect x="220" y="60" width="95" height="100" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
<text x="267" y="82" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">Detector</text>
<text x="267" y="100" text-anchor="middle" fill="#9290a8" font-size="10">region</text>
<text x="267" y="113" text-anchor="middle" fill="#9290a8" font-size="10">proposal</text>
<text x="267" y="130" text-anchor="middle" fill="#9290a8" font-size="10">+ VLM</text>
<text x="267" y="148" text-anchor="middle" fill="#9290a8" font-size="10">each box</text>
<line x1="315" y1="110" x2="343" y2="110" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrMM8)"/>
<rect x="345" y="60" width="95" height="100" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<text x="392" y="82" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">Grounding</text>
<text x="392" y="100" text-anchor="middle" fill="#9290a8" font-size="10">প্রতিটা region</text>
<text x="392" y="113" text-anchor="middle" fill="#9290a8" font-size="10">→ label</text>
<text x="392" y="130" text-anchor="middle" fill="#9290a8" font-size="10">→ অবস্থান</text>
<text x="392" y="148" text-anchor="middle" fill="#9290a8" font-size="10">where + what</text>
<line x1="440" y1="110" x2="463" y2="110" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM8)"/>
<rect x="465" y="50" width="95" height="120" rx="8" fill="#1e1b3a" stroke="#22c55e" stroke-width="2"/>
<text x="512" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Applications</text>
<text x="512" y="92" text-anchor="middle" fill="#9290a8" font-size="10">🏥 চিকিৎসা</text>
<text x="512" y="108" text-anchor="middle" fill="#9290a8" font-size="10">🏫 শিক্ষা</text>
<text x="512" y="124" text-anchor="middle" fill="#9290a8" font-size="10">🖥️ UI→কোড</text>
<text x="512" y="140" text-anchor="middle" fill="#9290a8" font-size="10">🚗 স্বয়ংচালিত</text>
<text x="512" y="158" text-anchor="middle" fill="#9290a8" font-size="10">🔍 সার্চ</text>
<text x="290" y="200" text-anchor="middle" fill="#9290a8" font-size="9">Grounding = শুধু "কী" নয়, "কোথায়" বলে — bounding box দিয়ে</text>
<text x="290" y="220" text-anchor="middle" fill="#22c55e" font-size="9">চিকিৎসা, শিক্ষা, ডিজাইন — প্রতিটা ক্ষেত্রে grounding দরকার</text>
</svg>
</div>
<div class="svg-caption">Grounding: AI শুধু বলে না "বিড়াল আছে", বলে "বিড়াল টেবিলের উপর"। অবস্থান সহ উত্তর।</div>`,
  senior:{
    title:"Build Your First Multimodal App",
    body:`<p><strong>Easiest:</strong> GPT-5 vision API + Streamlit — image upload + Q&A। ৩০ lines of Python।</p><p><strong>Meeting summarizer:</strong> Whisper (audio) + GPT-5 (reasoning) + text summary। FastAPI backend।</p><p><strong>Screenshot to code:</strong> GPT-5 vision → "Build this as HTML/CSS" → working code।</p><p><strong>Multimodal RAG:</strong> LlamaIndex MultiModalVectorStoreIndex + CLIP + Qdrant।</p><p><strong>Production:</strong> Start with API (GPT-5/Claude Sonnet 4)। Switch to open (LLaVA/Whisper) when cost matters।</p>`
  }
});

// ══ DOOR 9: MULTIMODAL CHALLENGES ══
doors.push({
  num:9, icon:"⚠️", color:"#c084fc", name:"সীমাবদ্ধতার কক্ষ",
  subtitle:"The Limits Chamber", tech:"Multimodal Challenges & Limits",
  spirit:"তাওয়াদু — বিনয়, সীমা জানা",
  secret:"Multimodal AI শক্তিশালী কিন্তু অসম্পূর্ণ। Hallucination, bias, cost, latency, evaluation কঠিন। প্রতিটা মোডালিটি নিজস্ব চ্যালেঞ্জ। সীমা জানা = বিনয়। যে সীমা জানে, সে সতর্ক। যে অজ্ঞ, সে বিপদে।",
  recall:{
    q:"সীমাবদ্ধতার কক্ষে কেন সব সীমা লেখা আছে?",
    qen:"Why are all limitations written in the limits chamber?",
    a:"কারণ সীমা জানা = বিনয়। Multimodal AI hallucinate করে, bias আছে, ব্যয়বহুল। যে সীমা জানে, সে সতর্ক। তাওয়াদু — বিনয়, সীমা জানা।",
    aen:"Because knowing limits = humility. Multimodal AI hallucinates, has bias, is expensive. One who knows limits, is cautious. Tawadu — humility, knowing limits."
  },
  story:`
<p class="scene-setting">নবম ইন্দ্রিয়। সীমাবদ্ধতার কক্ষ। দেয়ালে লেখা — সব সীমা, সব দুর্বলতা। "শক্তির সাথে সীমা," পর্যবেক্ষক আমিনা বললেন। "VLM hallucinate করে, ব্যয়বহুল, bias আছে। যে শুধু শক্তি দেখে সীমা নয়, সে অহংকারী। যে সীমা জানে, সে প্রকৌশলী।"</p>
<p class="scene-setting en">The ninth sense. Limits chamber. Written on walls — all limits, all weaknesses. "With power come limits," Observer Amina said. "VLMs hallucinate, are expensive, have bias. One who sees only power, not limits, is arrogant. One who knows limits, is an engineer."</p>

<div class="dialogue">নির্মাণের কক্ষ বলেছিলেন — application বানাও। কিন্তু আমি বলি — বানানোর আগে সীমা জানো। VLM hallucinate করে — না থাকা জিনিস বলে। ভিডিও ব্যয়বহুল। Bias আছে। Evaluation কঠিন। যে সীমা জানে, সে ভালো বানায়। যে অজ্ঞ, সে খারাপ বানায়।</div>
<div class="dialogue en">"The building chamber said — build applications. But I say — before building, know the limits. VLMs hallucinate — say things that aren't there. Video is expensive. Bias exists. Evaluation is hard. One who knows limits, builds well. One who is ignorant, builds poorly."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Modality Drop During Training:</strong> Training dropped audio 50% — model learned to ignore it. Fix: balanced modality dropout.</div></div>


<div class="code-block">Multimodal Challenges — Know Your Limits:

TOP ৭ CHALLENGES:

১. HALLUCINATION (specifically visual)
  → VLM বলে "I see a dog" — কিন্তু কুকুর নেই!
  → বিশেষত: small objects, fine details, text
  → worse than text hallucination — ছবি = বিশ্বাসযোগ্য
  
  Mitigation:
    → "Only describe what you clearly see"
    → "If unsure, say you can't tell"
    → grounding with OCR (for text in images)

২. COST EXPLOSION
  → Image: ~৭৬৫-১৫০০ tokens per image
  → Video: ~৭০০K tokens per hour
  → Audio: ~১৫K tokens per minute
  
  ১০ images = ~১০K tokens = ~$০.০৪
  ১hr video = ~৭০০K tokens = ~$২.১০
  → expensive at scale!
  
  Mitigation:
    → compress images before sending
    → frame sampling for video (১০-৩০)
    → audio → Whisper text (cheaper than native)
    → cache common image queries

৩. LATENCY
  → image processing: ২০০-৫০০ms
  → video processing: ১-১০s
  → audio processing: ১০০-৫০০ms
  
  → multimodal = slower than text-only
  → streaming helps perceived latency
  
  Mitigation:
    → resize images (১০২৪px max usually enough)
    → frame sampling (fewer frames)
    → async processing for long videos

৪. BIAS
  → VLMs trained mostly on Western data
  → different performance across:
    → skin tone (face detection accuracy)
    → cultural objects (different accuracy)
    → languages (non-English worse)
    → writing systems (Arabic, Bengali OCR)
  
  Mitigation:
    → test across demographics
    → diverse evaluation set
    → fine-tune on local data
    → acknowledge limitations

৫. EVALUATION DIFFICULTY
  → text eval: BLEU, ROUGE, BERTScore
  → image eval: FID, CLIPScore, human eval
  → multimodal eval: ???
  
  Challenges:
    → no standard benchmark for VLM quality
    → "is this description accurate?" subjective
    → reference-free evaluation hard
    → video eval: even harder
  
  Emerging tools:
    → MMMU: multimodal understanding benchmark
    → MMBench: VLM evaluation suite
    → VisIT-Bench: instruction following

৬. SAFETY & DEEPFAKE
  → voice cloning: ৩ sec → clone voice
  → image generation: realistic fake photos
  → video generation: deepfake videos
  → multimodal: fake image + fake voice
  
  Mitigation:
    → watermark (DALL-E: C2PA metadata)
    → detection models
    → policy + consent
    → provenance tracking

৭. GROUNDING
  → VLM says "left" but means "right"
  → spatial reasoning errors
  → counting errors (more than ৫ objects)
  → relation errors (A is on B vs B on A)
  
  Mitigation:
    → structured output (JSON with coordinates)
    → OCR for text in images
    → object detection models for counting
    → ensemble: VLM + specialized model

WHEN MULTIMODAL FAILS:
  → fine text reading (use OCR instead)
  → precise counting (use detection model)
  → medical diagnosis (regulatory, liability)
  → legal document analysis (precision critical)
  → real-time safety (latency)
  
  → use specialized models for these tasks
  → VLM = general understanding, not precision</div>

<div class="dialogue">তাওয়াদু — humility, modesty, knowing one's place। নবীজি (সা) বলেছেন — "যার অন্তরে সরিষা পরিমাণ অহংকার আছে, সে জান্নাতে যাবে না।" প্রযুক্তির সাথেও তাওয়াদু — সীমা জানা। VLM সব পারে না। যে সীমা জানে, সে ভালো ইঞ্জিনিয়ার। যে অহংকার করে, সে ভুল করে। তাওয়াদু — বিনয়ের গুণ।</div>
<div class="dialogue en">"Tawadu — humility, modesty, knowing one's place. The Prophet (pbuh) said — 'No one with even a mustard seed of arrogance enters Paradise.' With technology too, tawadu — knowing limits. VLMs can't do everything. One who knows limits, is a good engineer. One who is arrogant, errs. Tawadu — the virtue of humility."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrMM9" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#ff6b35"/></marker></defs>
<text x="290" y="24" text-anchor="middle" fill="#a855f7" font-size="13" font-weight="700">Multimodal চ্যালেঞ্জ — সীমাবদ্ধতার মানচিত্র</text>
<rect x="25" y="50" width="120" height="55" rx="8" fill="#0f172a" stroke="#ff6b35" stroke-width="2"/>
<text x="85" y="72" text-anchor="middle" fill="#ff8c5a" font-size="10" font-weight="700">Hallucination</text>
<text x="85" y="88" text-anchor="middle" fill="#9290a8" font-size="8">নেই এমন কিছু</text>
<text x="85" y="99" text-anchor="middle" fill="#9290a8" font-size="8">দেখে বলে</text>
<rect x="160" y="50" width="120" height="55" rx="8" fill="#0f172a" stroke="#ff6b35" stroke-width="2"/>
<text x="220" y="72" text-anchor="middle" fill="#ff8c5a" font-size="10" font-weight="700">Bias</text>
<text x="220" y="88" text-anchor="middle" fill="#9290a8" font-size="8">ত্বক, লিঙ্গ,</text>
<text x="220" y="99" text-anchor="middle" fill="#9290a8" font-size="8">ভাষা bias</text>
<rect x="295" y="50" width="120" height="55" rx="8" fill="#0f172a" stroke="#ff6b35" stroke-width="2"/>
<text x="355" y="72" text-anchor="middle" fill="#ff8c5a" font-size="10" font-weight="700">Cost</text>
<text x="355" y="88" text-anchor="middle" fill="#9290a8" font-size="8">image tokens</text>
<text x="355" y="99" text-anchor="middle" fill="#9290a8" font-size="8">বেশি খরচ</text>
<rect x="430" y="50" width="120" height="55" rx="8" fill="#0f172a" stroke="#ff6b35" stroke-width="2"/>
<text x="490" y="72" text-anchor="middle" fill="#ff8c5a" font-size="10" font-weight="700">Latency</text>
<text x="490" y="88" text-anchor="middle" fill="#9290a8" font-size="8">ভিডিও/অডিও</text>
<text x="490" y="99" text-anchor="middle" fill="#9290a8" font-size="8">ধীর</text>
<rect x="25" y="125" width="120" height="55" rx="8" fill="#0f172a" stroke="#ff6b35" stroke-width="2"/>
<text x="85" y="147" text-anchor="middle" fill="#ff8c5a" font-size="10" font-weight="700">Counting</text>
<text x="85" y="163" text-anchor="middle" fill="#9290a8" font-size="8">অনেক বস্তু</text>
<text x="85" y="174" text-anchor="middle" fill="#9290a8" font-size="8">ভুল গণনা</text>
<rect x="160" y="125" width="120" height="55" rx="8" fill="#0f172a" stroke="#ff6b35" stroke-width="2"/>
<text x="220" y="147" text-anchor="middle" fill="#ff8c5a" font-size="10" font-weight="700">Spatial</text>
<text x="220" y="163" text-anchor="middle" fill="#9290a8" font-size="8">বাম/ডান</text>
<text x="220" y="174" text-anchor="middle" fill="#9290a8" font-size="8">ভুল বলে</text>
<rect x="295" y="125" width="120" height="55" rx="8" fill="#0f172a" stroke="#ff6b35" stroke-width="2"/>
<text x="355" y="147" text-anchor="middle" fill="#ff8c5a" font-size="10" font-weight="700">Evaluation</text>
<text x="355" y="163" text-anchor="middle" fill="#9290a8" font-size="8">কীভাবে মাপব</text>
<text x="355" y="174" text-anchor="middle" fill="#9290a8" font-size="8">কঠিন</text>
<rect x="430" y="125" width="120" height="55" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
<text x="490" y="147" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Mitigation</text>
<text x="490" y="163" text-anchor="middle" fill="#9290a8" font-size="8">test, fallback,</text>
<text x="490" y="174" text-anchor="middle" fill="#9290a8" font-size="8">human review</text>
<text x="290" y="210" text-anchor="middle" fill="#9290a8" font-size="9">প্রতিটা মোডালিটির নিজস্ব সীমা — hallucination, bias, cost, latency, counting, eval</text>
<text x="290" y="228" text-anchor="middle" fill="#22c55e" font-size="9">সীমা জানা = বিনয় — তাওয়াদু। তারপরই সমাধান।</text>
</svg>
</div>
<div class="svg-caption">চ্যালেঞ্জ: hallucination, bias, cost — প্রতিটার সমাধান আছে, কিন্তু আগে সীমা জানতে হবে।</div>`,
  senior:{
    title:"Multimodal Checklist — Before Deploy",
    body:`<p>☐ Hallucination: tested with adversarial images ("what do you NOT see?")</p><p>☐ Cost: image tokens budgeted, compression enabled</p><p>☐ Latency: image resize, frame sampling for video</p><p>☐ Bias: tested across demographics (skin tone, language)</p><p>☐ Safety: content filter on images (NSFW, violence)</p><p>☐ Fallback: VLM fails → text-only fallback</p><p>☐ Grounding: spatial/counting tasks verified</p><p>☐ Eval: at least ৫০ multimodal test cases</p>`
  }
});

// ══ DOOR 10: SYNTHESIS ══
doors.push({
  num:10, icon:"🌈", color:"#c084fc", name:"রামধনুর কক্ষ",
  subtitle:"The Rainbow Synthesis", tech:"Complete Multimodal Architecture",
  spirit:"রাহমাতুল লিল আলামিন — সব জগতের জন্য",
  secret:"নয়টি ইন্দ্রিয় পেরিয়েছ। Vision, VLMs, generation, audio, video, alignment, embeddings, applications, challenges। সব একসাথে = complete multimodal AI। এক ইন্দ্রিয় থেকে পাঁচ। টেক্সট থেকে ছবি, অডিও, ভিডিও। এটাই পঞ্চইন্দ্রিয় — AI যা দেখে, শোনে, বোঝে।",
  recall:{
    q:"রামধনুর কক্ষে কেন সব রঙ একসাথে?",
    qen:"Why are all colors together in the rainbow chamber?",
    a:"কারণ রামধনু = সব রঙ একসাথে। Multimodal AI-ও তেমনি — সব ইন্দ্রিয় একসাথে। Vision, audio, video, text — সব এক জগতে। নয়টি কেন্দ্র একসাথে = সম্পূর্ণ বোঝা। রাহমাতুল লিল আলামিন।",
    aen:"Because rainbow = all colors together. Multimodal AI too — all senses together. Vision, audio, video, text — one world. Nine centers together = complete understanding. Rahmatul Lil Alamin."
  },
  story:`
<p class="scene-setting">দশম ইন্দ্রিয়। শেষ। স্থপতি ইদ্রিস একটা বিশাল রামধনুর সামনে দাঁড়িয়ে আছেন — সাত রঙ, একসাথে। "নয়টি ইন্দ্রিয় পেরিয়েছ," তিনি বললেন। "দৃষ্টি, শ্রবণ, সৃষ্টি, গতি, সংযোগ, স্মৃতি, নির্মাণ, সীমা। এখন সব একসাথে — একটা রামধনু। এক ইন্দ্রিয় থেকে পাঁচ। এটাই পঞ্চইন্দ্রিয়।"</p>
<p class="scene-setting en">The tenth sense. The last. Architect Idris stands before a vast rainbow — seven colors, together. "You've passed nine senses," he said. "Vision, hearing, creation, motion, connection, memory, building, limits. Now all together — one rainbow. From one sense to five. This is the five senses."</p>

<div class="dialogue">নয়টি ইন্দ্রিয় পেরিয়েছ। দৃষ্টি বলেছিলেন, ViT ও CLIP। চিত্রকর বলেছিলেন, VLM। সৃষ্টি বলেছিলেন, diffusion। শ্রুতি বলেছিলেন, Whisper ও TTS। গতি বলেছিলেন, ভিডিও। সংযোগ বলেছিলেন, alignment। স্মৃতি বলেছিলেন, multimodal RAG। নির্মাণ বলেছিলেন, applications। সীমা বলেছিলেন, challenges। এখন — সব একসাথে।</div>
<div class="dialogue en">"You've passed nine senses. Vision said, ViT and CLIP. Painter said, VLM. Creation said, diffusion. Hearing said, Whisper and TTS. Motion said, video. Connection said, alignment. Memory said, multimodal RAG. Building said, applications. Limits said, challenges. Now — all together."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Bounding Box Drift:</strong> Object detection drifted across frames — lost tracking. Fix: temporal smoothing, Kalman filters.</div></div>


<div class="code-block">Complete Multimodal AI Architecture:

# ──────────────────────────────────────────────────# 
#  COMPLETE MULTIMODAL STACK                         # 
# ──────────────────────────────────────────────────# 
#                                                    # 
#   PERCEPTION (input understanding)                # 
#   # ── Vision: ViT/DINOv2 → image embeddings       # 
#   # ── Audio: Whisper → text transcription         # 
#   # ── Video: frame sampling / Gemini native       # 
#   # ── Text: tokenizer → text embeddings           # 
#                                                    # 
#   ALIGNMENT (cross-modal)                         # 
#   # ── CLIP/SigLIP: text + image shared space      # 
#   # ── CLAP: text + audio shared space             # 
#   # ── ImageBind: ৬ modalities aligned             # 
#   # ── Projection: image emb → LLM space           # 
#                                                    # 
#   REASONING (multimodal brain)                    # 
#   # ── GPT-5: native multimodal LLM               # 
#   # ── Claude Sonnet 4: vision + text                   # 
#   # ── Gemini 2.5: text+image+audio+video          # 
#   # ── LLaVA: open-source VLM                      # 
#                                                    # 
#   GENERATION (output creation)                    # 
#   # ── Text: LLM (any model)                       # 
#   # ── Image: DALL-E 3 / Stable Diffusion          # 
#   # ── Audio: OpenAI TTS / ElevenLabs              # 
#   # ── Video: Sora / Runway Gen-৩                  # 
#                                                    # 
#   STORAGE (multimodal memory)                     # 
#   # ── Vector DB: Qdrant (text+image+audio)        # 
#   # ── Object storage: S3 (media files)            # 
#   # ── Metadata: source, modality, timestamp       # 
#                                                    # 
#   SAFETY                                           # 
#   # ── Content filter (NSFW, violence)             # 
#   # ── Hallucination check                         # 
#   # ── Bias testing                                 # 
#   # ── Deepfake detection                           # 
#   # ── Watermarking (generated content)            # 
#                                                    # 
#   EVALUATION                                       # 
#   # ── MMMU, MMBench (VLM benchmarks)              # 
#   # ── CLIPScore (image-text alignment)            # 
#   # ── FID (image quality)                          # 
#   # ── Human eval (ultimate ground truth)          # 
#                                                    # 
# ──────────────────────────────────────────────────# 

MULTIMODAL MATURITY MODEL:

  Level ১: Text-only
    → traditional LLM, no other modalities
  
  Level ২: Vision-augmented
    → VLM for image Q&A
    → no generation, no audio/video
  
  Level ৩: Multi-input
    → text + image + audio input
    → understanding across modalities
  
  Level ৪: Multi-output
    → generate text + images + audio
    → bidirectional (input and output)
  
  Level ৫: Full multimodal
    → all modalities, input + output
    → cross-modal reasoning
    → real-time conversation (GPT-5)
    → native video understanding

TECH STACK RECOMMENDATION:

  # ─────────────# ──────────────────────────────# 
  #  Component   #  Tool                         # 
  # ─────────────# ──────────────────────────────# 
  #  VLM         #  GPT-5 / Claude Sonnet 4          # 
  #  STT         #  Whisper large-v৩             # 
  #  TTS         #  OpenAI TTS / ElevenLabs      # 
  #  Image Gen   #  DALL-E 3 / Stable Diffusion  # 
  #  Video       #  Gemini 2.5 Pro (understand)  # 
  #  Embeddings  #  CLIP + CLAP                  # 
  #  Vector DB   #  Qdrant (multimodal)          # 
  #  Framework   #  LlamaIndex multimodal        # 
  # ─────────────# ──────────────────────────────# 

THE FUTURE OF MULTIMODAL AI:

  → Real-time: < ৩০০ms conversation
  → Native: no separate STT/TTL pipeline
  → Embodied: robots that see+hear+act
  → AR/VR: real-time world understanding
  → Creative: AI as creative partner
  → Medical: multimodal diagnosis (image+text+audio)
  → Education: personalized multimodal tutoring
  → Accessibility: full sensory translation

  → Multimodal AI = the next platform shift
  → From text to everything
  → From talking to seeing, hearing, creating</div>

<div class="verse">"তিনি শিখিয়েছেন কলমের মাধ্যমে। শিখিয়েছেন মানুষকে যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>Multimodal AI হলো কলমের বাইরে — চোখ, কান, হাত। শুধু লেখা নয়, দেখা, শোনা, সৃষ্টি করা। যে এক ইন্দ্রিয়ে থাকে, সে অসম্পূর্ণ। যে পাঁচ ইন্দ্রিয়ে পৌঁছায়, সে সম্পূর্ণ। এটাই পঞ্চইন্দ্রিয়।</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrMM10" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#c084fc"/></marker></defs>
<text x="290" y="24" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="700">নয় ইন্দ্রিয় → এক রামধনু → পঞ্চইন্দ্রিয়</text>
<path d="M 90 200 A 200 200 0 0 1 490 200" fill="none" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>
<path d="M 100 200 A 190 190 0 0 1 480 200" fill="none" stroke="#f97316" stroke-width="10" stroke-linecap="round"/>
<path d="M 110 200 A 180 180 0 0 1 470 200" fill="none" stroke="#eab308" stroke-width="10" stroke-linecap="round"/>
<path d="M 120 200 A 170 170 0 0 1 460 200" fill="none" stroke="#22c55e" stroke-width="10" stroke-linecap="round"/>
<path d="M 130 200 A 160 160 0 0 1 450 200" fill="none" stroke="#3b82f6" stroke-width="10" stroke-linecap="round"/>
<path d="M 140 200 A 150 150 0 0 1 440 200" fill="none" stroke="#8b5cf6" stroke-width="10" stroke-linecap="round"/>
<path d="M 150 200 A 140 140 0 0 1 430 200" fill="none" stroke="#ec4899" stroke-width="10" stroke-linecap="round"/>
<text x="50" y="195" text-anchor="middle" fill="#9290a8" font-size="10">👁️ Vision</text>
<text x="50" y="207" text-anchor="middle" fill="#9290a8" font-size="10">🖼️ VLM</text>
<text x="50" y="219" text-anchor="middle" fill="#9290a8" font-size="10">🎨 Gen</text>
<text x="530" y="195" text-anchor="middle" fill="#9290a8" font-size="10">🔊 Audio</text>
<text x="530" y="207" text-anchor="middle" fill="#9290a8" font-size="10">🎬 Video</text>
<text x="530" y="219" text-anchor="middle" fill="#9290a8" font-size="10">🔗 Align</text>
<rect x="225" y="210" width="130" height="30" rx="8" fill="#0f172a" stroke="#c084fc" stroke-width="2"/>
<text x="290" y="229" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="700">🌈 পঞ্চইন্দ্রিয়</text>
<text x="290" y="245" text-anchor="middle" fill="#22c55e" font-size="8">এক ইন্দ্রিয় থেকে পাঁচ — টেক্সট থেকে সব</text>
</svg>
</div>
<div class="svg-caption">নয়টি ইন্দ্রিয় এক রামধনুতে মিলে যায় — Vision, VLM, Generation, Audio, Video, Alignment, Embeddings, Applications, Challenges = সম্পূর্ণ Multimodal AI।</div>

<div class="secret-box"><div class="label">দশম ইন্দ্রিয় — সমন্বয়</div><div class="text">🌈 Multimodal AI = Vision + VLM + Generation + Audio + Video + Alignment + Embeddings + Applications + Challenges।<br><small>এক ইন্দ্রিয় থেকে পাঁচ। টেক্সট থেকে সব। এটাই পঞ্চইন্দ্রিয়।</small></div></div>`
});
