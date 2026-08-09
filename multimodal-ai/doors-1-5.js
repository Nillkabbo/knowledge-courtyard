// ════════════════════════════════════════
// পঞ্চইন্দ্রিয় — DOORS 1-5
// Multimodal AI: Vision → Audio
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: VISION ENCODERS ══
doors.push({
  num:1, icon:"👁️", color:"#c084fc", name:"দৃষ্টি কক্ষ",
  subtitle:"The Vision Chamber", tech:"Vision Encoders (ViT, CLIP)",
  spirit:"বাসিরাহ — দৃষ্টি, উপলব্ধি",
  secret:"কম্পিউটার ছবি কীভাবে দেখে? Pixel → patch → embedding। ViT (Vision Transformer) ছবিকে ভাগে ভাগে দেখে — মানুষের মতো। CLIP ছবি ও টেক্সট এক জায়গায় আনে। এটাই multimodal AI-এর প্রথম ইন্দ্রিয় — দৃষ্টি।",
  recall:{
    q:"দৃষ্টি কক্ষে কেন প্রতিটা ছবি ভাগে ভাগে দেখা হয়?",
    qen:"Why is each image viewed piece by piece in the vision chamber?",
    a:"কারণ গোটা ছবি একসাথে দেখা কঠিন। ViT ছবিকে patch-এ ভাগ করে, প্রতিটা patch embedding বানায়। মানুষের চোখও তেমনি — পিক্সেল পিক্সেল নয়, অংশ অংশ দেখে। বাসিরাহ — দৃষ্টি।",
    aen:"Because viewing a whole image at once is hard. ViT divides into patches, each patch becomes an embedding. Human eyes too — not pixel by pixel, but in parts. Basirah — vision."
  },
  story:`
<p class="scene-setting">প্রথম ইন্দ্রিয়। দৃষ্টি কক্ষ। একটা বড় ছবি দেয়ালে — কিন্তু ছবিটা গোটা নয়, ছোট ছোট টুকরোয় ভাগ। প্রতিটা টুকরো আলাদাভাবে পরীক্ষা করা হয়। দৃষ্টি কারিগর আদনান বললেন — "আমি গোটা ছবি একসাথে দেখি না। আমি প্রতিটা অংশ দেখি, তারপর সব একসাথে যোগ করি। ViT-ও তেমনি — patch by patch।"</p>
<p class="scene-setting en">The first sense. Vision chamber. A large image on the wall — but not whole, divided into small pieces. Each piece examined separately. Vision craftsman Adnan said — "I don't see the whole image at once. I see each part, then combine. ViT too — patch by patch."</p>

<div class="dialogue">LLMOps বইয়ে তুমি শিখেছ প্রোডাকশন চালানো। এখন আমি বলি — প্রোডাকশন চালালেও মডেল শুধু টেক্সট বোঝে। কিন্তু ইউজার ছবি পাঠায়। স্ক্রিনশট দেয়। ছবি থেকে কথা বলতে চায়। কীভাবে? Vision encoder। এটাই multimodal AI-এর প্রথম ধাপ — মডেলকে দৃষ্টি দেওয়া।</div>
<div class="dialogue en">"In the LLMOps book you learned running production. Now I say — even in production, the model only understands text. But users send images. Screenshots. Want to talk about images. How? Vision encoder. This is multimodal AI's first step — giving the model vision."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Image+Text Misalignment:</strong> Model described the wrong image — encoder and decoder were mismatched. Fix: use pretrained aligned vision-language models.</div></div>


<div class="code-block">Vision Encoders — How AI Sees:

THE IMAGE PROBLEM:
  ছবি = কোটি pixel
  প্রতিটি pixel = ৩ number (RGB)
  ২২৪×২২৪ image = ১৫০,৫২৮ numbers
  
  → সরাসরি neural network-এ? অসম্ভব বড়।
  → দরকার: ছবিকে ছোট ছোট ভাগে করা

ViT (Vision Transformer, Dosovitskiy et al., 2020):

  ┌─────────────────────────────────────┐
  │ Step ১: PATCHING                    │
  │ ছবি → ১৬×১৬ pixel patches          │
  │ ২২৪×২২৪ → ১৯৬ patches              │
  │ প্রতিটা patch = ১টা "token"        │
  │ (টেক্সটের শব্দের মতো)               │
  ├─────────────────────────────────────┤
  │ Step ২: LINEAR PROJECTION           │
  │ প্রতিটা patch (৭৬৮ values) →       │
  │ embedding vector (৭৬৮ dim)          │
  │ → টেক্সট embedding-এর মতো!          │
  ├─────────────────────────────────────┤
  │ Step ৩: POSITIONAL ENCODING         │
  │ প্রতিটা patch-এ অবস্থান যোগ করো    │
  │ → "উপরে বাম", "মাঝে ডান"            │
  ├─────────────────────────────────────┤
  │ Step ৪: TRANSFORMER ENCODER         │
  │ patch embeddings → multi-head       │
  │ attention → " patches একে অপরকে     │
  │ দেখে" → context তৈরি               │
  ├─────────────────────────────────────┤
  │ Step ৫: OUTPUT                      │
  │ প্রতিটা patch একটি contextualized   │
  │ embedding → পুরো ছবির understanding │
  └─────────────────────────────────────┘

  Key insight: ViT = টেক্সটের Transformer-এর
    মতোই, কিন্তু "tokens" = image patches
  
  → একই architecture, ভিন্ন input!

CLIP (Contrastive Language-Image Pre-training,
       Radford et al., 2021):

  উদ্দেশ্য: ছবি ও টেক্সট এক জগতে আনো

  ┌─────────────────────────────────┐
  │ Training:                       │
  │                                 │
  │ [Image] → Image Encoder → emb_I │
  │ [Text]  → Text Encoder  → emb_T │
  │                                 │
  │ Goal: matching pairs close      │
  │  → "a dog" + dog image → close  │
  │  → "a cat" + dog image → far    │
  │                                 │
  │ Contrastive loss:               │
  │  maximize matching, minimize    │
  │  non-matching                   │
  └─────────────────────────────────┘

  Result:
    → image ও text একই vector space-এ!
    → "a cat playing with yarn" লেখো
      → CLIP খুঁজে বের করে মিল ছবি
    → যেকোনো ছবি → CLIP text description
    → zero-shot image classification!

CLIP APPLICATIONS:
  → Image search: "find photos of [concept]"
  → Content moderation: detect harmful images
  → Image generation guidance (DALL-E uses CLIP)
  → Zero-shot classification: no training needed
  → RAG for images: retrieve by text description

VISION MODEL FAMILIES (2024-2025):
  ViT (Google) → foundation vision encoder
  SigLIP (Google) → improved CLIP, sigmoid loss
  DINOv2 (Meta) → self-supervised, excellent features
  EVA-CLIP → improved CLIP at scale
  OpenCLIP → open-source CLIP training

HOW VISION CONNECTS TO LLM:

  Image → ViT/CLIP → image embeddings
                          ↓
  Text → tokenizer → text embeddings
                          ↓
  Both → cross-modal fusion → VLM
                          ↓
  Response: "I see a cat sitting on a table"</div>

<div class="dialogue">বাসিরাহ — vision, clear sightedness, perception। কুরআনে আল্লাহ বলেন — "তিনি তোমাকে দৃষ্টি দিয়েছেন।" (৯০:৮-৯)। দৃষ্টি একটি নিয়ামত। Vision encoder-ও তেমনি — AI-কে দৃষ্টি দেওয়া। ছবি থেকে অর্থ, অর্থ থেকে বোঝা। যে দেখে, সে বোঝে। যে দেখে না, সে অন্ধ। বাসিরাহ — দৃষ্টির নিয়ামত।</div>
<div class="dialogue en">"Basirah — vision, clear sightedness, perception. Allah says — 'He gave you sight.' (90:8-9). Vision is a gift. Vision encoder too — giving AI sight. From image to meaning, meaning to understanding. One who sees, understands. One who doesn't, is blind. Basirah — the gift of sight."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrMM1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="290" y="24" text-anchor="middle" fill="#a855f7" font-size="13" font-weight="700">CLIP: দ্বৈত এনকোডার — ছবি ও টেক্সট এক জগতে</text>
<rect x="30" y="60" width="80" height="50" rx="8" fill="#1e1b3a" stroke="#a855f7" stroke-width="2"/>
<text x="70" y="82" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="600">Image</text>
<text x="70" y="98" text-anchor="middle" fill="#9290a8" font-size="9">ছবি</text>
<rect x="470" y="60" width="80" height="50" rx="8" fill="#1e1b3a" stroke="#22d3ee" stroke-width="2"/>
<text x="510" y="82" text-anchor="middle" fill="#67e8f9" font-size="11" font-weight="600">Text</text>
<text x="510" y="98" text-anchor="middle" fill="#9290a8" font-size="9">টেক্সট</text>
<rect x="140" y="55" width="100" height="60" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<text x="190" y="80" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">ViT</text>
<text x="190" y="96" text-anchor="middle" fill="#9290a8" font-size="8">Image Encoder</text>
<rect x="340" y="55" width="100" height="60" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
<text x="390" y="80" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="700">Transformer</text>
<text x="390" y="96" text-anchor="middle" fill="#9290a8" font-size="8">Text Encoder</text>
<line x1="110" y1="85" x2="138" y2="85" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM1)"/>
<line x1="470" y1="85" x2="442" y2="85" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrMM1)"/>
<circle cx="190" cy="170" r="22" fill="#1e1b3a" stroke="#a855f7" stroke-width="2"/>
<text x="190" y="174" text-anchor="middle" fill="#c084fc" font-size="9">emb_I</text>
<circle cx="390" cy="170" r="22" fill="#1e1b3a" stroke="#22d3ee" stroke-width="2"/>
<text x="390" y="174" text-anchor="middle" fill="#67e8f9" font-size="9">emb_T</text>
<line x1="190" y1="115" x2="190" y2="148" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrMM1)"/>
<line x1="390" y1="115" x2="390" y2="148" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrMM1)"/>
<line x1="212" y1="170" x2="368" y2="170" stroke="#22c55e" stroke-width="2" stroke-dasharray="5,3"/>
<text x="290" y="162" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="600">contrastive loss</text>
<text x="290" y="210" text-anchor="middle" fill="#22c55e" font-size="10">মিলে গেলে কাছে, না মিললে দূরে — same space</text>
</svg>
</div>
<div class="svg-caption">CLIP: ছবি ও টেক্সট আলাদা এনকোডারে একই vector space-এ আসে। মিল থাকলে দূরত্ব কমে।</div>`,
  senior:{
    title:"Vision Models — কোনটা কখন",
    body:`<p><strong>Image classification:</strong> ViT বা CLIP (zero-shot)।</p><p><strong>Image-text matching:</strong> CLIP / SigLIP — cosine similarity।</p><p><strong>Vision features (for downstream):</strong> DINOv2 — self-supervised, সেরা feature quality।</p><p><strong>Image search:</strong> OpenCLIP embeddings + vector DB।</p><p><strong>Zero-shot classification:</strong> CLIP — "is this [concept]?" → similarity score।</p>`
  }
});

// ══ DOOR 2: VISION-LANGUAGE MODELS ══
doors.push({
  num:2, icon:"🖼️", color:"#e9d5ff", name:"চিত্রকরের কক্ষ",
  subtitle:"The Image Reader's Chamber", tech:"Vision-Language Models (VLMs)",
  spirit:"কিতাবা — ছবি পড়া, বর্ণনা",
  secret:"VLM = চোখ + মুখ। ViT দেখে, LLM বলে। GPT-5, Claude Sonnet 4, Gemini — সব VLM। ছবি দাও, প্রশ্ন করো, উত্তর পাও। কিন্তু কীভাবে কাজ করে? Vision encoder → projection → LLM → text। এটাই VLM architecture।",
  recall:{
    q:"চিত্রকরের কক্ষে কীভাবে ছবি থেকে কথা হয়?",
    qen:"How does an image become words in the image reader's chamber?",
    a:"Vision encoder ছবি দেখে → embedding বানায় → LLM-কে দেয় → LLM কথা বলে। VLM = চোখ + মুখ। GPT-5, Claude — সব VLM। ছবি দাও, উত্তর পাও। কিতাবা — ছবি পড়া।",
    aen:"Vision encoder sees image → makes embedding → gives to LLM → LLM speaks. VLM = eyes + mouth. GPT-5, Claude — all VLMs. Give image, get answer. Kitabah — image reading."
  },
  story:`
<p class="scene-setting">দ্বিতীয় ইন্দ্রিয়। চিত্রকরের কক্ষ। একজন চিত্রকর একটা ছবি দেখেন আর বর্ণনা করেন। "ছবি দেখি," তিনি বললেন, "তারপর শব্দ বানাই।" সামনে একটা ছবি — বিড়াল টেবিলে বসে। "একটা কমলা বিড়াল," তিনি বললেন, "কাঠের টেবিলে বসে আছে।" VLM-ও তেমনি — ছবি দেখে, কথা বলে।</p>
<p class="scene-setting en">The second sense. Image reader's chamber. A painter looks at an image and describes it. "I see the image," she said, "then make words." Before her — a cat on a table. "An orange cat," she said, "sitting on a wooden table." VLMs too — see image, speak words.</p>

<div class="dialogue">দৃষ্টি কক্ষ বলেছিলেন — ViT দৃষ্টি দেয়। কিন্তু আমি বলি — দৃষ্টি একা অর্থহীন। দরকার মুখ — যা দেখে তা বলবে। VLM = vision encoder + LLM। একসাথে দেখে ও বলে। GPT-5 কেন শক্তিশালী? কারণ সে VLM — ছবি ও টেক্সট একসাথে বোঝে।</div>
<div class="dialogue en">"The vision chamber said — ViT gives sight. But I say — sight alone is meaningless. Need a mouth — to speak what it sees. VLM = vision encoder + LLM. Together see and speak. Why is GPT-5 powerful? Because it's a VLM — understands image and text together."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Audio Hallucination:</strong> ASR model transcribed silence as words — invented a conversation. Fix: add silence detection, confidence thresholds.</div></div>


<div class="code-block">Vision-Language Models (VLMs) — AI That Sees and Speaks:

VLM ARCHITECTURE:

  ┌────────────────────────────────────────┐
  │ INPUT: Image + Text prompt             │
  │                                        │
  │  ┌──────────┐    ┌──────────────────┐ │
  │  │ IMAGE →   │    │ TEXT →           │ │
  │  │ ViT/CLIP  │    │ Tokenizer →      │ │
  │  │ Encoder   │    │ Text Embedding   │ │
  │  └────┬─────┘    └────────┬─────────┘ │
  │       ↓                    ↓           │
  │  ┌─────────────────────────────────┐  │
  │  │ PROJECTION LAYER                 │  │
  │  │ image embeddings → text dim      │  │
  │  │ (align spaces)                   │  │
  │  └──────────────┬──────────────────┘  │
  │                 ↓                      │
  │  ┌─────────────────────────────────┐  │
  │  │ LLM (frozen বা fine-tuned)       │  │
  │  │ [image_tokens] + [text_tokens]  │  │
  │  │ → attention → generation        │  │
  │  └──────────────┬──────────────────┘  │
  │                 ↓                      │
  │ OUTPUT: Text response                 │
  │ "I see a cat sitting on a table..."   │
  └────────────────────────────────────────┘

THREE ARCHITECTURE TYPES:

১. FUSION-BASED (early fusion)
  Image + Text → একসাথে process
  → cross-attention between modalities
  → deep integration
  → example: Flamingo, Gemini
  ✅ ভালো বোঝে
  ❌ expensive, complex

২. BRIDGING (adapter/projection)
  Image → encoder → projection → LLM tokens
  → image কে "fake text tokens" বানাও
  → LLM treats them as text
  → example: LLaVA, GPT-4V
  ✅ সহজ, flexible
  ✅ existing LLM use করে
  ❌ projection quality limits

৩. NATIVE MULTIMODAL
  শুধু projection নয় — শুরু থেকে multimodal
  → trained on text + image + audio together
  → example: GPT-5, Gemini 2.5
  ✅ সবচেয়ে ভালো integration
  ✅ audio + video support
  ❌ সবচেয়ে expensive to train

VLM MODEL FAMILIES (2024-2025):

  ┌──────────────┬──────────────────────────┐
  │ Model        │ Strength                  │
  ├──────────────┼──────────────────────────┤
  │ GPT-5       │ Native multimodal,        │
  │ (OpenAI)     │ text+image+audio          │
  │              │ Best overall VLM          │
  ├──────────────┼──────────────────────────┤
  │ Claude Sonnet 4   │ Excellent vision,         │
  │ Sonnet       │ document understanding    │
  │ (Anthropic)  │ Strong chart/diagram      │
  ├──────────────┼──────────────────────────┤
  │ Gemini 2.5   │ ১M+ context, video native  │
  │ Pro          │ Multi-image reasoning     │
  │ (Google)     │                           │
  ├──────────────┼──────────────────────────┤
  │ LLaVA        │ Open-source VLM            │
  │ (open)       │ CLIP + Vicuna/Llama       │
  │              │ Good for research/custom  │
  ├──────────────┼──────────────────────────┤
  │ Qwen-VL      │ Open, multilingual        │
  │ (Alibaba)    │ Document, chart, multi-   │
  │              │ language support          │
  ├──────────────┼──────────────────────────┤
  │ Pixtral      │ Mistral's VLM             │
  │ (Mistral)    │ Open weights, efficient   │
  └──────────────┴──────────────────────────┘

VLM CAPABILITIES:

  Image Description:
    "Describe this image"
    → "A cat sitting on a wooden table..."
  
  Visual Question Answering:
    "What color is the car?"
    → "Red"
  
  Document Understanding:
    → scanned PDF, receipt, contract
    → extract text, data, structure
  
  Chart/Diagram Reading:
    → bar chart → "Q3 revenue was $5M"
    → flowchart → "The process has 5 steps..."
  
  Code from Screenshot:
    → UI screenshot → HTML/CSS code
    → whiteboard → Python code
  
  Counting:
    "How many people?"
    → "Seven"
  
  Spatial Reasoning:
    "Is the cup to the left or right 
     of the laptop?"
    → "Left"

VLM LIMITATIONS:
  ❌ Hallucination: না থাকা জিনিস বলে
  ❌ Fine detail: ছোট টেক্সট, সংখ্যা মিস
  ❌ Counting: অনেক বস্তু = ভুল
  ❌ Spatial: বাম/ডান কখনো ভুল
  ❌ Video: ধীর, ব্যয়বহুল
  ❌ Cost: image tokens বেশি (১ image = ~১K tokens)</div>

<div class="dialogue">কিতাবা — writing, description, expression। কুরআনে আল্লাহ বলেন — "পবিত্র সেই সত্তা যিনি তাঁর বান্দার কাছে রাত্রিতে নিয়ে গেছেন।" (১৭:১)। মিরাজের রাতে নবীজি (সা) দেখলেন ও বর্ণনা করলেন। VLM-ও তেমনি — দেখে ও বর্ণনা করে। কিতাবা — দৃষ্টিকে শব্দে রূপান্তর। ছবি থেকে ভাষা। দেখা থেকে বলা।</div>
<div class="dialogue en">"Kitabah — writing, description, expression. Allah says — 'Glory to Him who took His servant by night.' (17:1). On the night journey, the Prophet (pbuh) saw and described. VLMs too — see and describe. Kitabah — transforming vision into words. Image to language. Seeing to speaking."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrMM2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="290" y="24" text-anchor="middle" fill="#a855f7" font-size="13" font-weight="700">VLM আর্কিটেকচার — ছবি থেকে কথা</text>
<rect x="25" y="105" width="70" height="45" rx="8" fill="#1e1b3a" stroke="#a855f7" stroke-width="2"/>
<text x="60" y="123" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="600">Image</text>
<text x="60" y="138" text-anchor="middle" fill="#9290a8" font-size="8">ছবি</text>
<rect x="115" y="95" width="85" height="65" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<text x="157" y="118" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">ViT</text>
<text x="157" y="134" text-anchor="middle" fill="#9290a8" font-size="8">Vision</text>
<text x="157" y="146" text-anchor="middle" fill="#9290a8" font-size="8">Encoder</text>
<rect x="220" y="105" width="85" height="45" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
<text x="262" y="123" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="700">Projection</text>
<text x="262" y="138" text-anchor="middle" fill="#9290a8" font-size="8">MLP adapter</text>
<rect x="325" y="95" width="95" height="65" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
<text x="372" y="118" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">LLM</text>
<text x="372" y="134" text-anchor="middle" fill="#9290a8" font-size="8">Language</text>
<text x="372" y="146" text-anchor="middle" fill="#9290a8" font-size="8">Model</text>
<rect x="440" y="105" width="115" height="45" rx="8" fill="#1e1b3a" stroke="#22c55e" stroke-width="2"/>
<text x="497" y="123" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="600">Text Output</text>
<text x="497" y="138" text-anchor="middle" fill="#9290a8" font-size="8">"বিড়াল টেবিলে"</text>
<line x1="95" y1="127" x2="113" y2="127" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM2)"/>
<line x1="200" y1="127" x2="218" y2="127" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM2)"/>
<line x1="305" y1="127" x2="323" y2="127" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrMM2)"/>
<line x1="420" y1="127" x2="438" y2="127" stroke="#22c55e" stroke-width="2" marker-end="url(#arrMM2)"/>
<text x="157" y="190" text-anchor="middle" fill="#c084fc" font-size="9">দেখে</text>
<text x="262" y="190" text-anchor="middle" fill="#67e8f9" font-size="9">সংযোগ</text>
<text x="372" y="190" text-anchor="middle" fill="#4ade80" font-size="9">চিন্তা</text>
<text x="497" y="190" text-anchor="middle" fill="#4ade80" font-size="9">বলে</text>
<text x="290" y="220" text-anchor="middle" fill="#9290a8" font-size="9">চোখ (ViT) → সেতু (Projection) → মুখ (LLM) = VLM</text>
</svg>
</div>
<div class="svg-caption">VLM: Vision encoder দেখে, projection সেতু বানায়, LLM কথা বলে। চোখ + মুখ।</div>`,
  senior:{
    title:"VLM Usage — API Call",
    body:`<p><strong>OpenAI (GPT-5):</strong> image_url in messages — base64 বা URL। "What is in this image?"</p><p><strong>Anthropic (Claude Sonnet 4):</strong> image block in messages — base64। "Analyze this chart."</p><p><strong>Cost:</strong> ১ image ≈ ৭৬৫-১৫০০ tokens (resolution dependent)। High-res = more tokens = more cost।</p><p><strong>Tips:</strong> Low-detail mode (৫১২ tokens) যদি fine detail দরকার না। High-detail যদি টেক্সট/সংখ্যা পড়তে হয়।</p><p><strong>Best practice:</strong> সবসময় নির্দিষ্ট প্রশ্ন করো — "How many people?" ভালো, "Tell me about this" খারাপ।</p>`
  }
});

// ══ DOOR 3: IMAGE GENERATION ══
doors.push({
  num:3, icon:"🎨", color:"#f0abfc", name:"সৃষ্টির কক্ষ",
  subtitle:"The Creation Chamber", tech:"Image Generation (Diffusion)",
  spirit:"খলিক — স্রষ্টা, নির্মাতা",
  secret:"শুধু দেখা নয় — সৃষ্টি করা। Diffusion models টেক্সট থেকে ছবি বানায়। DALL-E 3, Midjourney, Stable Diffusion। কীভাবে? Noise → step by step denoise → image। এটাই আধুনিক AI-এর সবচেয়ে জাদুকরী ক্ষমতা — শব্দ থেকে ছবি।",
  recall:{
    q:"সৃষ্টির কক্ষে কেন শব্দ থেকে ছবি তৈরি হয়?",
    qen:"Why do images form from words in the creation chamber?",
    a:"কারণ diffusion model শব্দ বোঝে ও ছবি বানায়। Noise থেকে step by step ছবি আসে। DALL-E, Midjourney — সব এই প্রক্রিয়ায়। খলিক — স্রষ্টা। শব্দ থেকে ছবি।",
    aen:"Because diffusion models understand words and create images. Noise becomes image step by step. DALL-E, Midjourney — all this process. Khaliq — creator. Words to images."
  },
  story:`
<p class="scene-setting">তৃতীয় ইন্দ্রিয়। সৃষ্টির কক্ষ। একজন শিল্পী ক্যানভাসে রং না দিয়ে — শব্দ লিখছেন। "একটা সূর্যাস্ত, সমুদ্র, নৌকা।" তারপর ক্যানভাসে একসাথে রং উঠে আসছে — ধীরে ধীরে, noise থেকে ছবি। "আমি রং দিই না," শিল্পী সাবরিনা বললেন, "শব্দ দিই। মেশিন রং দেয়। এটাই diffusion।"</p>
<p class="scene-setting en">The third sense. Creation chamber. An artist, instead of painting — writes words. "A sunset, ocean, boat." Then colors emerge on canvas — slowly, from noise to image. "I don't give colors," artist Sabrina said, "I give words. The machine paints. This is diffusion."</p>

<div class="dialogue">VLM কক্ষ বলেছিলেন — ছবি দেখে কথা বলো। কিন্তু আমি বলি — উল্টো ও সম্ভব। কথা থেকে ছবি বানাও। Image generation। DALL-E 3, Midjourney, Stable Diffusion — শব্দ দাও, ছবি পাও। এটাই AI-এর সবচেয়ে জাদুকরী ক্ষমতা। কিন্তু কীভাবে? Diffusion।</div>
<div class="dialogue en">"The VLM chamber said — see image, speak. But I say — the reverse is possible too. Create image from words. Image generation. DALL-E 3, Midjourney, Stable Diffusion — give words, get image. This is AI's most magical power. But how? Diffusion."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Video Context Loss:</strong> Model processed each frame independently — missed temporal context. Fix: use temporal attention.</div></div>


<div class="code-block">Image Generation — Words to Pixels:

DIFFUSION MODELS — The Core Idea:

  Forward process (training):
    ছবি → step by step noise যোগ করো
    → শেষে pure noise (TV static এর মতো)
  
  Reverse process (generation):
    noise → step by step noise সরাও
    → শেষে ছবি!
  
  Analogy:
    একটা পরিষ্কার কাঁচ → ধীরে ধীরে কাদা মেশাও
    → pure mud
    → তারপর ধীরে ধীরে কাদা সরাও
    → পরিষ্কার কাঁচ (কিন্তু নতুন pattern!)

STABLE DIFFUSION ARCHITECTURE:

  ┌────────────────────────────────────────┐
  │ Step ১: TEXT ENCODING                  │
  │ "a cat sitting on the moon"            │
  │ → CLIP text encoder → text embeddings  │
  ├────────────────────────────────────────┤
  │ Step ২: LATENT NOISE                   │
  │ র্যান্ডম noise tensor                   │
  │ (compressed space, not pixel space)    │
  ├────────────────────────────────────────┤
  │ Step ৩: DENOISING (২০-৫০ steps)       │
  │ U-Net + text embeddings →              │
  │ "predict noise" → "remove noise"       │
  │ text guides the denoising              │
  │ → "cat-like" features emerge           │
  ├────────────────────────────────────────┤
  │ Step ৪: DECODE                         │
  │ latent → pixel space (VAE decoder)     │
  │ → final image!                         │
  └────────────────────────────────────────┘

  Key: LATENT diffusion (not pixel)
    → work in compressed space (৪৮×৪৮ বা ৬৪×৬৪)
    → ৪৮x faster than pixel-space diffusion
    → runs on consumer GPU

IMAGE GENERATION MODELS (2024-2025):

  ┌──────────────┬──────────────────────────┐
  │ Model        │ Best For                  │
  ├──────────────┼──────────────────────────┤
  │ DALL-E 3     │ Prompt adherence,         │
  │ (OpenAI)     │ text in images, API easy  │
  │              │ Best for: commercial use  │
  ├──────────────┼──────────────────────────┤
  │ Midjourney   │ Artistic quality,         │
  │ (Midjourney) │ aesthetics, photorealism  │
  │              │ Best for: creative/art    │
  ├──────────────┼──────────────────────────┤
  │ Stable       │ Open-source, local,       │
  │ Diffusion 3  │ unlimited customization   │
  │ (Stability)  │ Best for: control/dev     │
  ├──────────────┼──────────────────────────┤
  │ FLUX         │ Newest (2024), open       │
  │ (Black Forest│ Excellent quality,        │
  │  Labs)       │ open weights              │
  ├──────────────┼──────────────────────────┤
  │ Ideogram     │ Text in images (logos,    │
  │              │ posters with text)        │
  └──────────────┴──────────────────────────┘

GENERATION PARAMETERS:
  
  Steps: ২০-৫০ (more = better, slower)
  CFG Scale: ৫-১৫ (higher = more prompt adherence)
  Sampler: DPM++, Euler a, DDIM
  Resolution: ৫১২×৫১২, ১০২৪×১০২৪
  Seed: একই seed = একই ছবি (reproducibility)
  Negative prompt: যা চাও না তা লেখো

ADVANCED TECHNIQUES:

  img2img: একটা ছবি দাও → পরিবর্তন করো
    → sketch → photorealistic
    → low-res → high-res
  
  Inpainting: ছবির একটা অংশ বদলাও
    → mask দাও → regenerate that area
    → "remove the person, add a tree"
  
  ControlNet: সুনির্দিষ্ট নিয়ন্ত্রণ
    → pose, edge, depth, scribble
    → "exact this pose + this style"
    → precise composition control
  
  LoRA: custom style/character
    → train on few images
    → "my product in this style"

PROMPT ENGINEERING FOR IMAGES:

  ❌ খারাপ: "a cat"
  ✅ ভালো: "a fluffy orange tabby cat 
    sitting on a windowsill, golden hour 
    sunlight, shallow depth of field, 
    photorealistic, 85mm lens"
  
  Structure: [subject] + [setting] + 
    [style] + [technical details]
  
  Style modifiers:
    photorealistic, oil painting, watercolor,
    anime, 3D render, cyberpunk, minimalist
  
  Quality modifiers:
    4K, highly detailed, masterpiece,
    professional photography, award-winning

PRODUCTION CONSIDERATIONS:
  → API: DALL-E 3 ($০.০৪/image)
  → Self-hosted: Stable Diffusion / FLUX
    (free compute, GPU needed)
  → Safety: content filter (NSFW, violence)
  → Copyright: AI-generated image ownership?
  → Consistency: একই character/style across images
    → use LoRA বা seed control</div>

<div class="dialogue">খলিক — creator, maker। কুরআনে আল্লাহ বলেন — "তিনিই আল্লাহ, তোমাদের স্রষ্টা।" (৬:১০২)। আল্লাহ স্রষ্টা — "কুন" (হও) বললেন, হয়ে গেল। Diffusion model-ও একটা ছোট্ট স্রষ্টা — শব্দ দাও, ছবি তৈরি। অবশ্যই আল্লাহর সৃষ্টির সাথে তুলনা নয়, কিন্তু একটা ঝলক — শব্দ থেকে রূপ। খলিক — স্রষ্টার গুণ।</div>
<div class="dialogue en">"Khaliq — creator, maker. Allah says — 'He is Allah, your Creator.' (6:102). Allah is the Creator — 'Be' and it is. Diffusion models are a tiny creator — give words, create image. Not comparable to Allah's creation of course, but a glimpse — words to form. Khaliq — the attribute of creating."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrMM3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="290" y="24" text-anchor="middle" fill="#a855f7" font-size="13" font-weight="700">Diffusion: শব্দ থেকে ছবি — ধাপে ধাপে denoise</text>
<rect x="20" y="70" width="75" height="40" rx="8" fill="#1e1b3a" stroke="#22d3ee" stroke-width="2"/>
<text x="57" y="87" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="600">Prompt</text>
<text x="57" y="100" text-anchor="middle" fill="#9290a8" font-size="8">"সূর্যাস্ত"</text>
<rect x="115" y="70" width="75" height="40" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<text x="152" y="87" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">Text Enc</text>
<text x="152" y="100" text-anchor="middle" fill="#9290a8" font-size="8">CLIP</text>
<rect x="210" y="60" width="70" height="60" rx="8" fill="#1e1b3a" stroke="#22c55e" stroke-width="2"/>
<text x="245" y="85" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Noise</text>
<text x="245" y="100" text-anchor="middle" fill="#9290a8" font-size="14">█▓░</text>
<rect x="305" y="55" width="80" height="70" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<text x="345" y="78" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">UNet</text>
<text x="345" y="92" text-anchor="middle" fill="#9290a8" font-size="7">denoise</text>
<text x="345" y="104" text-anchor="middle" fill="#9290a8" font-size="7">step 1</text>
<text x="345" y="116" text-anchor="middle" fill="#9290a8" font-size="7">→ 2 → 3...</text>
<rect x="410" y="60" width="65" height="60" rx="8" fill="#1e1b3a" stroke="#22c55e" stroke-width="2"/>
<text x="442" y="85" text-anchor="middle" fill="#4ade80" font-size="9"> Emerging</text>
<text x="442" y="100" text-anchor="middle" fill="#9290a8" font-size="11">▒▓█</text>
<rect x="500" y="70" width="60" height="40" rx="8" fill="#1e1b3a" stroke="#22c55e" stroke-width="2"/>
<text x="530" y="87" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="600">Image</text>
<text x="530" y="100" text-anchor="middle" fill="#9290a8" font-size="8">🌊</text>
<line x1="95" y1="90" x2="113" y2="90" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrMM3)"/>
<line x1="190" y1="90" x2="208" y2="90" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM3)"/>
<line x1="280" y1="90" x2="303" y2="90" stroke="#22c55e" stroke-width="2" marker-end="url(#arrMM3)"/>
<line x1="385" y1="90" x2="408" y2="90" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM3)"/>
<line x1="475" y1="90" x2="498" y2="90" stroke="#22c55e" stroke-width="2" marker-end="url(#arrMM3)"/>
<path d="M345,125 Q345,155 345,140" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrMM3)"/>
<text x="370" y="155" fill="#c084fc" font-size="8">পুনরাবৃত্তি</text>
<text x="152" y="180" text-anchor="middle" fill="#67e8f9" font-size="9">শব্দ বোঝে</text>
<text x="345" y="180" text-anchor="middle" fill="#c084fc" font-size="9">noise সরায়</text>
<text x="530" y="180" text-anchor="middle" fill="#4ade80" font-size="9">ছবি হয়</text>
<text x="290" y="215" text-anchor="middle" fill="#9290a8" font-size="9">শব্দ → noise → ধাপে ধাপে denoise → ছবি</text>
</svg>
</div>
<div class="svg-caption">Diffusion: টেক্সট বোঝে, noise থেকে ধাপে ধাপে ছবি বের হয়। DALL-E, Midjourney এই প্রক্রিয়ায়।</div>`,
  senior:{
    title:"Image Generation — Which Tool?",
    body:`<p><strong>Quick/API:</strong> DALL-E 3 — API easy, prompt adherence excellent।</p><p><strong>Artistic/Quality:</strong> Midjourney — best aesthetics, photorealism।</p><p><strong>Open/Control:</strong> Stable Diffusion 3 / FLUX — local, free, ControlNet for precision।</p><strong>Text in image:</strong> Ideogram বা DALL-E 3 — logos, posters with text।</p><p><strong>Custom style:</strong> Train LoRA on your images → apply to any generation।</p><p><strong>Production:</strong> SDXL + ComfyUI pipeline → automated generation at scale।</p>`
  }
});

// ══ DOOR 4: AUDIO PROCESSING ══
doors.push({
  num:4, icon:"🎧", color:"#a78bfa", name:"শ্রুতি কক্ষ",
  subtitle:"The Listening Chamber", tech:"Audio Processing & Speech",
  spirit:"সামি' — শ্রবণ, শোনা",
  secret:"AI এখন শোনে। Whisper স্পিচ থেকে টেক্সট বানায়। TTS টেক্সট থেকে কণ্ঠ। GPT-5 সরাসরি অডিও বোঝে। স্পিক্ট্রোগ্রাম → embedding → টেক্সট/অডিও। শোনা = বোঝার আরেক দরজা। সামি' — শ্রবণের নিয়ামত।",
  recall:{
    q:"শ্রুতি কক্ষে কেন শুধু কথা নয়, সুর ও শব্দও শোনা হয়?",
    qen:"Why listen to music and sounds, not just speech?",
    a:"কারণ শ্রবণ শুধু কথা নয় — সুর, শব্দ, আবেগ। Whisper সব শোনে। GPT-5 সরাসরি অডিও বোঝে। সামি' — শ্রবণ। শোনা = বোঝার আরেক দরজা।",
    aen:"Because hearing isn't just speech — music, sounds, emotions. Whisper hears everything. GPT-5 understands audio directly. Sami — hearing. Listening = another door to understanding."
  },
  story:`
<p class="scene-setting">চতুর্থ ইন্দ্রিয়। শ্রুতি কক্ষ। কক্ষরক্ষক খালেদ চোখ বন্ধ করে বসে আছেন — শুনছেন। "আমি চোখ বন্ধ করি," তিনি বললেন, "কারণ কান দিয়ে দেখা যায়। পাখির ডাক, বাতাস, পায়ের শব্দ — সব বলে কী ঘটছে। AI-ও শুনতে পারে। Whisper, GPT-5 — শোনে ও বোঝে।"</p>
<p class="scene-setting en">The fourth sense. Listening chamber. Keeper Khalid sits with eyes closed — listening. "I close my eyes," he said, "because you can see with ears. Bird songs, wind, footsteps — all tell what's happening. AI can hear too. Whisper, GPT-5 — hear and understand."</p>

<div class="dialogue">সৃষ্টির কক্ষ বলেছিলেন — শব্দ থেকে ছবি। কিন্তু আমি বলি — শুধু চোখ নয়, কানও দরকার। ইউজার কথা বলে — টেক্সট লেখে না। স্পিচ দেয়। অডিও পাঠায়। AI কী শুনবে না? হ্যাঁ শুনবে। Whisper, TTS, GPT-5 native audio। এটাই চতুর্থ ইন্দ্রিয় — শ্রবণ।</div>
<div class="dialogue en">"The creation chamber said — words to images. But I say — not just eyes, ears too. Users speak — don't write text. Give speech. Send audio. Shouldn't AI hear? Yes, it should. Whisper, TTS, GPT-5 native audio. This is the fourth sense — hearing."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — OCR Failure on Handwriting:</strong> Text extraction failed on handwritten notes — 40% error rate. Fix: fine-tune on domain-specific handwriting.</div></div>


<div class="code-block">Audio Processing — AI That Hears:

AUDIO REPRESENTATION:

  Raw audio: waveform (samples over time)
    → ১৬kHz = ১৬,০০০ samples/sec
    → ১ minute audio = ৯৬০K numbers!
  
  Spectrogram (AI-friendly):
    → waveform → frequency + time + amplitude
    → 2D image-like representation
    → mel spectrogram (human perception scaled)
  
  → AI sees audio as an "image" (spectrogram)!

SPEECH-TO-TEXT (STT / ASR):

  ┌────────────────────────────────────┐
  │ WHISPER (OpenAI, 2022)            │
  │                                    │
  │ Audio → mel spectrogram →         │
  │   encoder → decoder → text        │
  │                                    │
  │ Trained on ৬৮০K hours multilingual│
  │ → ৯৯+ languages                   │
  │ → robust to noise, accent         │
  │ → FREE, open-source               │
  │                                    │
  │ Variants:                          │
  │   tiny (৩৯M) → large-v৩ (১.৫B)   │
  │   faster-whisper (CTranslate2)    │
  │   whisper.cpp (CPU/Mac optimized) │
  └────────────────────────────────────┘
  
  Other STT:
    Deepgram → API, very fast, accurate
    AssemblyAI → API, speaker diarization
    Google Speech-to-Text → cloud, mature
    Azure Speech → enterprise, custom models

TEXT-TO-SPEECH (TTS):

  ┌────────────────────────────────────┐
  │ MODERN TTS                         │
  │                                    │
  │ Text → acoustic model → audio     │
  │                                    │
  │ Models:                            │
  │   ElevenLabs → best quality,       │
  │     voice cloning, emotive         │
  │   OpenAI TTS → API simple,         │
  │     natural voices                 │
  │   Bark → open-source,              │
  │     multilingual, sound effects    │
  │   Coqui TTS → open, customizable  │
  │   Azure TTS → enterprise,          │
  │     ৪০০+ voices, ১৪০+ languages    │
  │   Meta Voicebox → latest research  │
  └────────────────────────────────────┘

NATIVE AUDIO (GPT-5):

  Previous pipeline:
    Speech → Whisper (STT) → text → LLM → 
    text → TTS → speech
    → lossy! Emotion, tone lost in text
    → ৩ separate models
  
  GPT-5 native:
    Speech → GPT-5 → Speech
    → end-to-end audio
    → emotion, tone, accent preserved
    → real-time conversation!
    → latency: ~৩২০ms (human-like)

AUDIO APPLICATIONS:

  Transcription:
    → meeting recording → text
    → podcast → searchable text
    → lecture → notes
  
  Voice Assistant:
    → speech in → speech out
    → real-time conversation
    → Alexa/Siri on steroids
  
  Translation:
    → speech in Bengali → text/speech in English
    → real-time interpretation
  
  Music:
    → MusicGen (AudioCraft) → text to music
    → Suno → full songs from prompt
    → audio separation (vocal/instrument)
  
  Sound Classification:
    → baby crying, glass breaking, alarm
    → security, healthcare, industrial
  
  Voice Cloning:
    → ৩ seconds of audio → clone voice
    → ElevenLabs, Coqui
    → ⚠️ deepfake risk!

AUDIO IN MULTIMODAL PIPELINE:

  ┌─────────────────────────────────┐
  │ Video call → audio + video      │
  │ → Whisper (transcribe)          │
  │ → VLM (analyze visual)          │
  │ → LLM (reason)                  │
  │ → TTS (respond)                 │
  │ → all modalities together       │
  └─────────────────────────────────┘

AUDIO SAFETY:
  → Voice cloning: consent required
  → Deepfake detection
  → Watermarking audio (Adobe, Microsoft)
  → Accessibility: captions for deaf users</div>

<div class="dialogue">সামি' — hearing, the all-hearing। কুরআনে আল্লাহ বলেন — "তিনি সবকিছু শোনেন।" (২:১২৭)। আল্লাহ সামি' — সব শোনেন। AI-ও একটু শোনে — Whisper, GPT-5। অবশ্যই আল্লাহর সামিয়্যাতের সাথে তুলনা নয়, কিন্তু একটা ঝলক — শোনা ও বোঝা। সামি' — শ্রবণের গুণ।</div>
<div class="dialogue en">"Sami' — hearing, the all-hearing. Allah says — 'He hears all things.' (2:127). Allah is Sami' — hears everything. AI hears a little too — Whisper, GPT-5. Not comparable to Allah's Sami'yyat of course, but a glimpse — hearing and understanding. Sami' — the attribute of hearing."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrMM4" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="290" y="24" text-anchor="middle" fill="#a855f7" font-size="13" font-weight="700">অডিও প্রক্রিয়াজাতকরণ — শব্দ থেকে বোঝা</text>
<rect x="20" y="105" width="70" height="45" rx="8" fill="#1e1b3a" stroke="#22d3ee" stroke-width="2"/>
<text x="55" y="123" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="600">Audio</text>
<text x="55" y="138" text-anchor="middle" fill="#9290a8" font-size="8">🔊波浪</text>
<rect x="110" y="100" width="85" height="55" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<text x="152" y="120" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">Spectrogram</text>
<text x="152" y="135" text-anchor="middle" fill="#9290a8" font-size="7">STFT — freq×time</text>
<text x="152" y="146" text-anchor="middle" fill="#9290a8" font-size="8">▓▒░▒▓░▒</text>
<rect x="215" y="105" width="80" height="45" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<text x="255" y="123" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">Encoder</text>
<text x="255" y="138" text-anchor="middle" fill="#9290a8" font-size="8">Whisper</text>
<rect x="315" y="100" width="85" height="55" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
<text x="357" y="120" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Embedding</text>
<text x="357" y="135" text-anchor="middle" fill="#9290a8" font-size="7">vector</text>
<text x="357" y="146" text-anchor="middle" fill="#9290a8" font-size="7">[0.2, 0.8...]</text>
<rect x="420" y="105" width="70" height="45" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
<text x="455" y="123" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Decoder</text>
<text x="455" y="138" text-anchor="middle" fill="#9290a8" font-size="8">LLM</text>
<rect x="510" y="105" width="55" height="45" rx="8" fill="#1e1b3a" stroke="#22c55e" stroke-width="2"/>
<text x="537" y="123" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="600">Text</text>
<text x="537" y="138" text-anchor="middle" fill="#9290a8" font-size="8">"নাম"</text>
<line x1="90" y1="127" x2="108" y2="127" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrMM4)"/>
<line x1="195" y1="127" x2="213" y2="127" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM4)"/>
<line x1="295" y1="127" x2="313" y2="127" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM4)"/>
<line x1="400" y1="127" x2="418" y2="127" stroke="#22c55e" stroke-width="2" marker-end="url(#arrMM4)"/>
<line x1="490" y1="127" x2="508" y2="127" stroke="#22c55e" stroke-width="2" marker-end="url(#arrMM4)"/>
<text x="152" y="185" text-anchor="middle" fill="#c084fc" font-size="9">শব্দ → সুর</text>
<text x="255" y="185" text-anchor="middle" fill="#c084fc" font-size="9">সুর → সংখ্যা</text>
<text x="357" y="185" text-anchor="middle" fill="#4ade80" font-size="9">সংখ্যা → অর্থ</text>
<text x="537" y="185" text-anchor="middle" fill="#4ade80" font-size="9">অর্থ → শব্দ</text>
<text x="290" y="215" text-anchor="middle" fill="#9290a8" font-size="9">STT (Whisper) ও native audio (GPT-5) — দুই পথেই শোনা যায়</text>
</svg>
</div>
<div class="svg-caption">অডিও: spectrogram হয়, embedding বানে, তারপর টেক্সট বা উত্তর। শোনা = বোঝার দরজা।</div>`,
  senior:{
    title:"Audio Stack — Production",
    body:`<p><strong>STT:</strong> Whisper large-v3 (self-host) বা Deepgram (API, fastest)।</p><p><strong>TTS:</strong> OpenAI TTS (simple) বা ElevenLabs (best quality, voice cloning)।</p><p><strong>Native audio:</strong> GPT-5 audio API — end-to-end speech, real-time।</p><p><strong>Music:</strong> Suno API বা MusicGen (open) — text to music।</p><p><strong>Cost:</strong> Whisper self-hosted = free (GPU cost)। Deepgram = $০.০০৪৩/min। ElevenLabs = $০.৩০/১K chars।</p>`
  }
});

// ══ DOOR 5: VIDEO UNDERSTANDING ══
doors.push({
  num:5, icon:"🎬", color:"#c084fc", name:"চলমান ছবির কক্ষ",
  subtitle:"The Motion Chamber", tech:"Video Understanding",
  spirit:"যাওয়া — গতি, পরিবর্তন",
  secret:"ছবি স্থির — ভিডিও চলমান। সময় যোগ হয়। AI কীভাবে ভিডিও বোঝে? Frame by frame + temporal attention। বা native video model (Gemini 2.5)। ভিডিও = ছবি + সময়। সময় বোঝা = গতি বোঝা। যাওয়া — গতির নিয়ামত।",
  recall:{
    q:"চলমান ছবির কক্ষে কেন শুধু স্থির ছবি নয়, গতি দরকার?",
    qen:"Why is motion needed, not just still images?",
    a:"কারণ গতি ছাড়া সময় বোঝা যায় না। ভিডিও = ছবি + সময়। AI frame by frame দেখে + temporal attention। Gemini সরাসরি ভিডিও বোঝে। যাওয়া — গতির নিয়ামত।",
    aen:"Because without motion, time can't be understood. Video = image + time. AI sees frame by frame + temporal attention. Gemini understands video directly. Yawa — the gift of motion."
  },
  story:`
<p class="scene-setting">পঞ্চম ইন্দ্রিয়। চলমান ছবির কক্ষ। সামনে একটা পর্দা — স্থির ছবি নয়, চলমান। মানুষ হাঁটছে, গাড়ি চলছে, পাখি উড়ছে। কক্ষরক্ষক তামিম বললেন — "স্থির ছবি একটা মুহূর্ত। ভিডিও সময়। আমি সময় দেখি — কী ঘটছে, কীভাবে ঘটছে। AI-ও ভিডিও বোঝে — frame ও temporal attention দিয়ে।"</p>
<p class="scene-setting en">The fifth sense. Motion chamber. Before — a screen — not still images, moving. People walking, cars driving, birds flying. Keeper Tamim said — "Still image is one moment. Video is time. I see time — what's happening, how. AI understands video too — with frames and temporal attention."</p>

<div class="dialogue">শ্রুতি কক্ষ বলেছিলেন — AI শোনে। কিন্তু আমি বলি — শোনা ও দেখা একসাথে দরকার। ভিডিও = ছবি + সময় + অডিও। সব একসাথে। কিন্তু ভিডিও প্রক্রিয়া করা কঠিন — কোটি frames, কোটি audio samples। Gemini 2.5 সরাসরি ভিডিও বোঝে। এটাই multimodal-এর সবচেয়ে জটিল স্তর।</div>
<div class="dialogue en">"The listening chamber said — AI hears. But I say — hearing and seeing together are needed. Video = image + time + audio. All together. But processing video is hard — millions of frames, millions of audio samples. Gemini 2.5 understands video directly. This is multimodal's most complex layer."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Cross-Modal Prompt Injection:</strong> Malicious text embedded in image — model followed hidden instructions. Fix: sanitize all modalities.</div></div>


<div class="code-block">Video Understanding — AI That Watches:

THE VIDEO CHALLENGE:
  ১ minute video at ৩০fps = ১৮০০ frames
  Each frame = ২২৪×২২৪×৩ = ১৫০K values
  Total: ১৮০০ × ১৫০K = ২৭০M values!!
  
  + audio track
  + temporal relationships
  
  → significantly harder than single image

THREE APPROACHES:

১. FRAME SAMPLING + VLM (simplest)
  → sample N frames (e.g., ১০-৩০)
  → send each frame to VLM
  → combine descriptions
  
  Example:
    "একটা ৫-min video থেকে ৩০ frames বেছে নাও"
    → each frame: "I see..."
    → combine: "The video shows..."
  
  ✅ সহজ, works with existing VLMs
  ❌ misses motion, fast events
  ❌ অনেক LLM tokens (৩০ frames × ~১K = ৩০K tokens)

২. TEMPORAL MODELING (better)
  → frame encoder + temporal attention
  → model learns "what changes over time"
  
  Architecture:
    frames → ViT (per frame) → 
    temporal transformer (across frames) →
    understanding
  
  ✅ captures motion, sequence
  ❌ more compute
  → VideoMAE, TimeSformer, VideoLLaMA

৩. NATIVE VIDEO (best)
  → model trained on video from scratch
  → understands temporal natively
  → Gemini 2.5: up to ১ hour of video!
  
  Gemini 2.5 Pro:
    → ১M+ token context
    → ১ hour video = ~৭০০K tokens
    → ask questions about any moment
    → "What did the person say at ৫:৩২?"
    → "Summarize the key events"
    → "When does the car appear?"

VIDEO MODELS (2024-2025):

  ┌──────────────┬──────────────────────────┐
  │ Model        │ Capability                │
  ├──────────────┼──────────────────────────┤
  │ Gemini 2.5   │ Native video, ১hr,        │
  │ Pro          │ audio + video together   │
  │              │ Best overall video AI     │
  ├──────────────┼──────────────────────────┤
  │ GPT-5       │ Video understanding       │
  │              │ (frame sampling + audio)  │
  │              │ Good for short clips      │
  ├──────────────┼──────────────────────────┤
  │ Claude Sonnet 4   │ Multiple images           │
  │              │ (not full video, but      │
  │              │ sequential frames)        │
  ├──────────────┼──────────────────────────┤
  │ LLaVA-Video  │ Open-source video VLM     │
  │ (open)       │ Frame sampling approach  │
  ├──────────────┼──────────────────────────┤
  │ Qwen-VL      │ Video support,            │
  │              │ open weights              │
  └──────────────┴──────────────────────────┘

VIDEO APPLICATIONS:

  Content Analysis:
    → "What happens in this video?"
    → auto-tagging, categorization
    → content moderation (violence, NSFW)
  
  Video Search:
    → "find the moment when [X happens]"
    → timestamp-accurate retrieval
  
  Summarization:
    → ১-hour meeting → ৫-min summary
    → key points with timestamps
  
  Video QA:
    → "What color shirt is the presenter 
       wearing?"
    → "How many people entered the room?"
  
  Video Generation (next level!):
    → Sora (OpenAI): text to video
    → Runway Gen-৩: professional video
    → Kling: AI video generation
    → Pika: short video clips
    → text → ১০-৬০ sec video!

  Accessibility:
    → auto-captioning (Whisper + video)
    → audio description for blind users
    → sign language translation

VIDEO GENERATION (2024-2025):
  
  Sora (OpenAI):
    → text → ১ min video
    → physics-aware (objects interact)
    → high fidelity
    → not yet public (limited access)
  
  Runway Gen-৩:
    → professional video generation
    → photorealistic
    → motion control
  
  Open-source:
    → Stable Video Diffusion
    → AnimateDiff (animation from image)
    → CogVideo (open text-to-video)

COST & LATENCY:
  Video understanding:
    ১ min video → Gemini: ~৭০০K tokens
    → $২.১০ per video (Gemini pricing)
    → expensive for long videos!
  
  → frame sampling (১০-২০ frames) = cheaper
  → native video = better but costly
  
  Video generation:
    Sora/Runway: $০.১০-১.০০ per second of video
    → ১০-sec video = $১-১০

CHALLENGES:
  → Temporal hallucination: "what happened 
    when" wrong
  → Fine detail in motion: small objects 
    across frames
  → Cost: video tokens >> text tokens
  → Latency: processing ১hr video takes time
  → Privacy: faces, locations in video</div>

<div class="dialogue">যাওয়া — motion, going, change over time। কুরআনে আল্লাহ বলেন — "তিনি প্রতিটি জিনিসকে সৃষ্টি করেছেন তারপর পরিমাপ করেছেন।" পরিমাপের মধ্যে সময় আছে — কখন কী ঘটে। ভিডিও সেই সময় ধরে। যাওয়া — স্থির থেকে চলমান, মুহূর্ত থেকে সময়। যে সময় বোঝে, সে গভীর বোঝে।</div>
<div class="dialogue en">"Yawa — motion, going, change over time. Allah says — 'He created all things and measured them.' Measurement includes time — what happens when. Video captures that time. Yawa — from still to moving, moment to time. One who understands time, understands deeply."</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arrMM5" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee"/></marker></defs>
<text x="290" y="24" text-anchor="middle" fill="#a855f7" font-size="13" font-weight="700">ভিডিও বোঝা — ছবি + সময়</text>
<rect x="20" y="55" width="45" height="50" rx="6" fill="#1e1b3a" stroke="#a855f7" stroke-width="2"/>
<text x="42" y="75" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="600">t=0</text>
<text x="42" y="90" text-anchor="middle" fill="#9290a8" font-size="8">frame</text>
<rect x="75" y="55" width="45" height="50" rx="6" fill="#1e1b3a" stroke="#a855f7" stroke-width="2"/>
<text x="97" y="75" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="600">t=1</text>
<text x="97" y="90" text-anchor="middle" fill="#9290a8" font-size="8">frame</text>
<rect x="130" y="55" width="45" height="50" rx="6" fill="#1e1b3a" stroke="#a855f7" stroke-width="2"/>
<text x="152" y="75" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="600">t=2</text>
<text x="152" y="90" text-anchor="middle" fill="#9290a8" font-size="8">frame</text>
<text x="97" y="125" text-anchor="middle" fill="#9290a8" font-size="8">. . .</text>
<rect x="190" y="55" width="45" height="50" rx="6" fill="#1e1b3a" stroke="#a855f7" stroke-width="2"/>
<text x="212" y="75" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="600">t=n</text>
<text x="212" y="90" text-anchor="middle" fill="#9290a8" font-size="8">frame</text>
<line x1="65" y1="80" x2="73" y2="80" stroke="#475569" stroke-width="1.5" marker-end="url(#arrMM5)"/>
<line x1="120" y1="80" x2="128" y2="80" stroke="#475569" stroke-width="1.5" marker-end="url(#arrMM5)"/>
<line x1="175" y1="80" x2="188" y2="80" stroke="#475569" stroke-width="1.5" marker-end="url(#arrMM5)"/>
<rect x="260" y="50" width="100" height="60" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
<text x="310" y="73" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="700">Spatial Enc</text>
<text x="310" y="88" text-anchor="middle" fill="#9290a8" font-size="8">প্রতি frame</text>
<text x="310" y="100" text-anchor="middle" fill="#9290a8" font-size="8">দেখে</text>
<rect x="385" y="50" width="105" height="60" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<text x="437" y="73" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">Temporal</text>
<text x="437" y="88" text-anchor="middle" fill="#9290a8" font-size="8">frame-এর মধ্যে</text>
<text x="437" y="100" text-anchor="middle" fill="#9290a8" font-size="8">attention</text>
<rect x="515" y="55" width="50" height="50" rx="8" fill="#1e1b3a" stroke="#22c55e" stroke-width="2"/>
<text x="540" y="75" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="600">সময়</text>
<text x="540" y="90" text-anchor="middle" fill="#9290a8" font-size="8">বোঝা</text>
<line x1="235" y1="80" x2="258" y2="80" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM5)"/>
<line x1="360" y1="80" x2="383" y2="80" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrMM5)"/>
<line x1="490" y1="80" x2="513" y2="80" stroke="#a855f7" stroke-width="2" marker-end="url(#arrMM5)"/>
<path d="M437,110 Q437,140 437,125" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrMM5)"/>
<text x="97" y="160" text-anchor="middle" fill="#c084fc" font-size="9">ছবি</text>
<text x="310" y="160" text-anchor="middle" fill="#67e8f9" font-size="9">প্রতিটা frame</text>
<text x="437" y="160" text-anchor="middle" fill="#c084fc" font-size="9">frame-এর মধ্যে</text>
<text x="540" y="160" text-anchor="middle" fill="#4ade80" font-size="9">সময়ের গতি</text>
<text x="290" y="195" text-anchor="middle" fill="#9290a8" font-size="9">ভিডিও = ছবি + সময়। Spatial দেখে, temporal মনে রাখে।</text>
<text x="290" y="215" text-anchor="middle" fill="#9290a8" font-size="8">Gemini 2.5 native — সরাসরি ভিডিও বোঝে, frame sample করতে হয় না।</text>
</svg>
</div>
<div class="svg-caption">ভিডিও: প্রতিটি frame spatial encoder দেখে, temporal attention frame-এর মধ্যে সম্পর্ক ধরে। সময় = গতি।</div>`,
  senior:{
    title:"Video AI — Which Approach?",
    body:`<p><strong>Quick/cheap:</strong> Frame sampling (১০-২০ keyframes) + GPT-5/Claude VLM। Good for basic "what happens"।</p><p><strong>Best understanding:</strong> Gemini 2.5 Pro — native video, ১hr capacity, timestamp queries।</p><p><strong>Video generation:</strong> Sora 2 (OpenAI, ২০২৫+) বা Runway Gen-৪ / Veo 3 (Google) for professional quality।</p><p><strong>Open-source:</strong> LLaVA-Video + Whisper for understanding। Stable Video Diffusion / Wan 2.1 for generation।</p><p><strong>Production tip:</strong> ভিডিও = সবচেয়ে expensive modality। শুধু দরকার হলে use করো। Frame sampling > native যদি cost matter করে।</p>`
  }
});
