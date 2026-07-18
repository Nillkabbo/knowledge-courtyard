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
<div class="dialogue en">"Basirah — vision, clear sightedness, perception. Allah says — 'He gave you sight.' (90:8-9). Vision is a gift. Vision encoder too — giving AI sight. From image to meaning, meaning to understanding. One who sees, understands. One who doesn't, is blind. Basirah — the gift of sight."</div>`,
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
<div class="dialogue en">"Kitabah — writing, description, expression. Allah says — 'Glory to Him who took His servant by night.' (17:1). On the night journey, the Prophet (pbuh) saw and described. VLMs too — see and describe. Kitabah — transforming vision into words. Image to language. Seeing to speaking."</div>`,
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
<div class="dialogue en">"Khaliq — creator, maker. Allah says — 'He is Allah, your Creator.' (6:102). Allah is the Creator — 'Be' and it is. Diffusion models are a tiny creator — give words, create image. Not comparable to Allah's creation of course, but a glimpse — words to form. Khaliq — the attribute of creating."</div>`,
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
<div class="dialogue en">"Sami' — hearing, the all-hearing. Allah says — 'He hears all things.' (2:127). Allah is Sami' — hears everything. AI hears a little too — Whisper, GPT-5. Not comparable to Allah's Sami'yyat of course, but a glimpse — hearing and understanding. Sami' — the attribute of hearing."</div>`,
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
<div class="dialogue en">"Yawa — motion, going, change over time. Allah says — 'He created all things and measured them.' Measurement includes time — what happens when. Video captures that time. Yawa — from still to moving, moment to time. One who understands time, understands deeply."</div>`,
  senior:{
    title:"Video AI — Which Approach?",
    body:`<p><strong>Quick/cheap:</strong> Frame sampling (১০-২০ keyframes) + GPT-5/Claude VLM। Good for basic "what happens"।</p><p><strong>Best understanding:</strong> Gemini 2.5 Pro — native video, ১hr capacity, timestamp queries।</p><p><strong>Video generation:</strong> Sora 2 (OpenAI, ২০২৫+) বা Runway Gen-৪ / Veo 3 (Google) for professional quality।</p><p><strong>Open-source:</strong> LLaVA-Video + Whisper for understanding। Stable Video Diffusion / Wan 2.1 for generation।</p><p><strong>Production tip:</strong> ভিডিও = সবচেয়ে expensive modality। শুধু দরকার হলে use করো। Frame sampling > native যদি cost matter করে।</p>`
  }
});
