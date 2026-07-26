doors.push({
  num: 6,
  icon: "🎭",
  color: "#6366f1",
  name: "প্রতিমান নির্মাতা",
  subtitle: "The Image Maker",
  tech: "GAN — Goodfellow et al. (২০১৪), generator vs discriminator, minimax game, mode collapse",
  spirit: "মুনাযারা — বিতর্ক, দুই পক্ষের প্রতিযোগিতার মাধ্যমে সত্যের উৎপত্তি",
  secret: "GAN = দুইজন শিল্পী, একজন জাল করে, আরেকজন ধরে — উভয়ে উভয়ের চেয়ে দক্ষ হয়ে ওঠে।",
  recall: {
    q: " GAN-এ mode collapse কী?",
    qen: "What is mode collapse in GANs?",
    a: "Generator এক ধরনের আউটপুটই বারবার তৈরি করে — বৈচিত্র্য হারায়।",
    aen: "The generator keeps producing the same type of output — losing diversity."
  },
  story: `<p class="scene-setting">তুমি একটি নিলামে গেছে। সেখানে একজন জালকারী এবং একজন বিশেষজ্ঞ মুখোমুখি। জালকারী একটি পেইন্টিং তৈরি করে বিশেষজ্ঞকে দেখায়। বিশেষজ্ঞ বলে — "জাল!" জালকারী আবার চেষ্টা করে, এবার আরও ভালোভাবে। বিশেষজ্ঞ আবার বিচার করে। এভাবে চলতে থাকে — প্রতিটি চক্রে জালকারী দক্ষতর হয়, বিশেষজ্ঞ তীক্ষ্ণতর হয়। শেষে জালকারী এত দক্ষ হয় যে বিশেষজ্ঞও আর আসল থেকে জাল আলাদা করতে পারে না।</p>
<p class="scene-setting en">You're at an auction. A forger and an expert face off. The forger creates a painting and shows it to the expert. The expert says — "Fake!" The forger tries again, better this time. The expert judges again. This continues — each round, the forger improves, the expert sharpens. Eventually the forger becomes so skilled that even the expert can't distinguish real from fake.</p>

<div class="dialogue"><strong>প্রতিমান নির্মাতা ইসমাঈল:</strong> এটাই GAN — Generative Adversarial Network। Ian Goodfellow ২০১৪ সালে এই ধারণাটি ভেবেছিলেন — মাত্র এক রাতে, একটি পার্টির পর। তিনি এবং তার বন্ধুরা একটি bar-এ বসে আলোচনা করছিলেন কীভাবে মেশিনকে ছবি তৈরি শেখানো যায়। সেই রাতেই তিনি কোড লিখেছিলেন। এবং সেটি কাজ করেছিল।</div>
<div class="dialogue en"><strong>Image Maker Isma'il:</strong> This is the GAN — Generative Adversarial Network. Ian Goodfellow thought of this concept in 2014 — in a single night, after a party. He and his friends were sitting at a bar discussing how to teach machines to generate images. That night he wrote the code. And it worked.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>GAN গঠন:</strong> দুটি নেটওয়ার্ক —<br>
<strong>Generator (G):</strong> random noise (z) থেকে ছবি তৈরি করে। G(z) → জাল ছবি<br>
<strong>Discriminator (D):</strong> ছবি দেখে বলে আসল না জাল। D(x) → [০, ১]<br>
<strong>Minimax Game:</strong> min_G max_D E[log D(x)] + E[log(1 − D(G(z)))]<br>
G চায় D কে বোকানো, D চায় G কে ধরা।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Mode Collapse:</strong> Generator কখনো একটি নির্দিষ্ট আউটপুট খুঁজে যা discriminator সবচেয়ে বেশি গুলিয়ে ফেলে। তারপর সেটাই বারবার তৈরি করে। ফলাফল: ১০০টি ভিন্ন ইনপুট দিলেও একই ছবি। এটি GAN training-এর সবচেয়ে কঠিন সমস্যা। সমাধান: Wasserstein GAN (Arjovsky et al. ২০১৭), minibatch discrimination, variety penalty।</div></div>

<div class="verse">وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"শপথ যুগের। নিশ্চয়ই মানুষ ক্ষতিগ্রস্ত।" — কুরআন ১০৩:১-২</div>

<p class="scene-setting">এই সূরাটি বলে — সময়ের সাথে মানুষ ক্ষতিগ্রস্ত, যদি না সে উন্নতি করে। GAN-ও ঠিক তেমন — যদি জালকারী এবং বিশেষজ্ঞ উভয়ে উন্নতি না করে, প্রতিযোগিতা মৃত হয়ে যায়। কিন্তু যখন উভয়ে উন্নতি করে — ফলাফল অবিশ্বাস্য। StyleGAN (NVIDIA, ২০১৯) এমন মুখ তৈরি করেছিল যা আসল থেকে আলাদা করা যায় না।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ১৫ (Multimodal AI) Door ৩:</strong> সেখানে তুমি image generation (diffusion) শিখেছিলে। GAN ছিল সেই যাত্রার পূর্বসূরি। দরজা ৭-এ তুমি দেখবে কীভাবে diffusion GAN-কে ছাড়িয়ে গেলো।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎭 GAN: Generator vs Discriminator</text>
  <rect x="20" y="55" width="100" height="40" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="70" y="80" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">Noise z</text>
  <line x1="120" y1="75" x2="160" y2="75" stroke="#f87171" stroke-width="2" marker-end="url(#arrG1)"/>
  <rect x="160" y="50" width="120" height="55" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="220" y="75" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">GENERATOR G</text>
  <text x="220" y="92" text-anchor="middle" fill="#7dd3fc" font-size="7">fake image</text>
  <line x1="280" y1="77" x2="340" y2="77" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrG1)"/>
  <text x="310" y="72" text-anchor="middle" fill="#7dd3fc" font-size="7">fake</text>
  <rect x="340" y="50" width="120" height="55" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="400" y="75" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">DISCRIMINATOR D</text>
  <text x="400" y="92" text-anchor="middle" fill="#86efac" font-size="7">real or fake?</text>
  <line x1="460" y1="77" x2="510" y2="77" stroke="#22c55e" stroke-width="2" marker-end="url(#arrG1)"/>
  <rect x="510" y="60" width="50" height="35" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
  <text x="535" y="82" text-anchor="middle" fill="#94a3b8" font-size="7">0/1</text>
  <rect x="340" y="130" width="120" height="35" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="400" y="152" text-anchor="middle" fill="#7dd3fc" font-size="7">REAL images</text>
  <line x1="400" y1="130" x2="400" y2="105" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrG1)"/>
  <path d="M 400 95 Q 280 170 220 105" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="320" y="190" text-anchor="middle" fill="#fbbf24" font-size="8">← G learns from D feedback ←</text>
  <path d="M 220 105 Q 180 180 400 165" fill="none" stroke="#f87171" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="150" y="195" text-anchor="middle" fill="#f87171" font-size="8">→ D improves detection →</text>
  <text x="290" y="225" text-anchor="middle" fill="#94a3b8" font-size="7">minimax: G minimizes, D maximizes — equilibrium = realistic images</text>
  <defs><marker id="arrG1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: GAN — Generator fake তৈরি করে, Discriminator ধরে। উভয় একে অপরকে উন্নত করে।</div>

<div class="code-block">— PyTorch: GAN Training —

  # Generator: noise → fake image
  G = Generator()  # z_dim → image
  # Discriminator: image → real/fake
  D = Discriminator()  # image → probability

  opt_G = Adam(G.parameters(), lr=0.0002)
  opt_D = Adam(D.parameters(), lr=0.0002)

  for epoch in range(200):
      # 1. Train D
      z = torch.randn(batch_size, z_dim)
      fake = G(z)
      real_pred = D(real_images)
      fake_pred = D(fake.detach())
      loss_D = -(real_pred.log().mean() +
                 (1-fake_pred).log().mean())

      # 2. Train G (fool D!)
      fake_pred = D(fake)
      loss_G = -fake_pred.log().mean()
      # G wants D(fake) → 1 (classified as real)

      # Mode collapse: G makes ONE image
      # Fix: WGAN, spectral norm, minibatch std</div>

<div class="secret-box">🎭 <strong>GAN = প্রতিযোগিতার শিল্প।</strong> দুই নেটওয়ার্ক — একজন তৈরি করে, একজন বিচার করে। উভয়ে একে অপরকে চালাগত করে। এই adversarial প্রক্রিয়া এত শক্তিশালী যে এটি অবিশ্বাস্য ছবি তৈরি করতে পারে। কিন্তু GAN training অস্থিতিশীল। একটি নতুন পদ্ধতি এলো — ধীরে ধীরে শব্দ সরিয়ে ছবি তৈরি করা। সেই পদ্ধতির নাম diffusion। সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "GAN এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Generator</td><td>Noise (z) → জাল ছবি: G(z)</td></tr>
<tr><td class="hl">Discriminator</td><td>ছবি → আসল/জাল স্কোর: D(x) ∈ [০, ১]</td></tr>
<tr><td class="hl">Minimax</td><td>min_G max_D — দুটি নেটওয়ার্ক পরস্পরকে চালাগত</td></tr>
<tr><td class="hl">Mode Collapse</td><td>Generator একই আউটপুট বারবার — বৈচিত্র্য হারায়</td></tr>
<tr><td class="hl">DCGAN</td><td>Radford et al. ২০১৫ — CNN-based GAN, প্রথম stable training</td></tr>
<tr><td class="hl">StyleGAN</td><td>Karras et al. (NVIDIA) ২০১৯ — photorealistic face generation</td></tr>
<tr><td class="hl">WGAN</td><td>Arjovsky et al. ২০১৭ — Wasserstein loss, training stabilizes</td></tr>
<tr><td class="hl">পেপার</td><td>Goodfellow et al. ২০১৪, NIPS — GAN-এর জন্ম</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "🌅",
  color: "#6366f1",
  name: "স্বপ্নের কারখানা",
  subtitle: "The Dream Forge",
  tech: "VAE (Kingma-Welling ২০১৩), Diffusion — DDPM (Ho et al. ২০২০), Latent Diffusion (Rombach et al. ২০২২)",
  spirit: "তাসবির — কল্পনা, অস্তিত্বহীন থেকে রূপ তৈরি",
  secret: "Diffusion = ধীরে ধীরে শব্দ যোগ করে ছবি নষ্ট করা, তারপর উল্টোভাবে শব্দ সরিয়ে ছবি তৈরি করা।",
  recall: {
    q: " Diffusion model কোন দিকে কাজ করে?",
    qen: "Which direction does a diffusion model work?",
    a: "দুই দিকে: forward (ছবি থেকে noise) এবং reverse (noise থেকে ছবি)। শেখা হয় reverse পথ।",
    aen: "Both: forward (image → noise) and reverse (noise → image). The reverse path is learned."
  },
  story: `<p class="scene-setting">তুমি একটি ফোটো তুলেছে। সেটি একটি ছাপাখানায় নিয়ে গেলে। কর্মী বলেন — একটি কৌশল দেখাই। তিনি ছবিতে একটি সাদা দাগ দেন। তারপর আরেকটি। তারপর আরও। ধীরে ধীরে পুরো ছবি সাদা দাগে ঢাকা পড়ে — কিছুই দেখা যায় না, শুধু noise। তারপর তিনি উল্টো কাজ শুরু করেন — একটি একটি দাগ সরান। এবং ছবি ফিরে আসে। কিন্তু এবার — তিনি চাইলে ভিন্ন ছবিও তৈরি করতে পারেন।</p>
<p class="scene-setting en">You took a photo. Brought it to a print shop. The worker says — let me show you a trick. He adds a white speck to the photo. Then another. Then more. Slowly the entire photo is covered in specks — nothing visible, just noise. Then he reverses the process — removing specks one by one. And the photo returns. But this time — he could also create a different photo.</p>

<div class="dialogue"><strong>স্বপ্নের কারিগর রাফি:</strong> এটাই diffusion। দুটি ধাপ। Forward: ছবিতে ধীরে ধীরে Gaussian noise যোগ করো — T ধাপে পুরো ছবি noise হয়ে যায়। Reverse: noise থেকে ধীরে ধীরে ছবি উদ্ধার করো। মেশিন শেখে কীভাবে প্রতিটি ধাপে একটু একটু noise সরাতে হয়।</div>
<div class="dialogue en"><strong>Dream Craftsman Rafi:</strong> This is diffusion. Two phases. Forward: gradually add Gaussian noise to the image — in T steps, the image becomes pure noise. Reverse: gradually recover the image from noise. The machine learns how to remove a little noise at each step.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Forward Process:</strong> q(xₜ | xₜ₋₁) = N(xₜ; √(1−βₜ)xₜ₋₁, βₜI)<br>
<strong>Reverse Process:</strong> p(xₜ₋₁ | xₜ) = N(xₜ₋₁; μθ(xₜ, t), Σθ)<br>
<strong>শেখার লক্ষ্য:</strong> noise prediction — একটি U-Net শেখে প্রতিটি ধাপে কতটা noise ছিল।</div></div>

<p class="scene-setting">DDPM (Denoising Diffusion Probabilistic Models) — Ho, Jain, এবং Abbeel, ২০২০। এটি diffusion-কে practical করেছিল। কিন্তু একটি সমস্যা ছিল — pixel space-এ কাজ করা ধীর। তারপর Rombach et al. (২০২২) Latent Diffusion (Stable Diffusion) তৈরি করেন — প্রথমে ছবিকে একটি compressed latent space-এ নিয়ে যাও, সেখানে diffusion করো, তারপর decode করো। দ্রুত এবং কম খরচে।</p>
<p class="scene-setting en">DDPM (Denoising Diffusion Probabilistic Models) — Ho, Jain, and Abbeel, 2020. This made diffusion practical. But there was a problem — working in pixel space is slow. Then Rombach et al. (2022) created Latent Diffusion (Stable Diffusion) — first compress the image into a latent space, do diffusion there, then decode back. Fast and cheaper.</p>

<div class="callout info"><span class="co-icon">🔮</span><div><strong>VAE (Kingma ও Welling, ২০১৩):</strong> Diffusion-এর আগে ছিল VAE — Variational Autoencoder। এটি একটি encoder (ছবি → latent) এবং একটি decoder (latent → ছবি) ব্যবহার করে। কিন্তু VAE-এর ছবি blurrier ছিল। Diffusion অনেক বেশি তীক্ষ্ণ ফলাফল দেয়। তবে VAE-এর probabilistic framework ছিল গুরুত্বপূর্ণ ভিত্তি।</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">GAN</div>দ্রুত sampling কিন্তু training unstable, mode collapse ঝুঁকি</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Diffusion</div>Stable training, উন্নত quality, diversity — কিন্তু sampling ধীর (T ধাপ)</div>
</div>

<div class="verse">خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তিনি আসমান ও পৃথিবী সৃষ্টি করেছেন ছয় দিনে (ধাপে ধাপে)।" — কুরআন ৭:৫৪</div>

<p class="scene-setting">এই আয়াতে ধাপে ধাপে সৃষ্টির কথা বলা হয়েছে — এক মুহূর্তে নয়, পর্যায়ক্রমে। Diffusion model-ও তেমনই — এক ধাপে ছবি তৈরি করে না। noise থেকে ধীরে ধীরে, ধাপে ধাপে, প্রতিটি ধাপে একটু একটু পরিষ্কার হয়। অস্তিত্বহীন থেকে অস্তিত্ব — স্বপ্ন থেকে বাস্তব।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ১৫ (Multimodal AI) Door ৩:</strong> Image generation-এর overview শিখেছিলে। এখন তুমি বোঝো diffusion-এর actual mechanism — forward/reverse process। Book ১৮ (Embeddings) Door ১-এ latent space শিখেছিলে — Stable Diffusion সেই latent space-এই কাজ করে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🌅 Diffusion: Forward (add noise) &amp; Reverse (denoise)</text>
  <rect x="20" y="50" width="70" height="60" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="55" y="78" text-anchor="middle" fill="#4ade80" font-size="7">Image</text>
  <text x="55" y="92" text-anchor="middle" fill="#86efac" font-size="6">(clean)</text>
  <rect x="110" y="50" width="70" height="60" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="145" y="78" text-anchor="middle" fill="#fcd34d" font-size="7">t=10</text>
  <text x="145" y="92" text-anchor="middle" fill="#fde68a" font-size="6">some noise</text>
  <rect x="200" y="50" width="70" height="60" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="235" y="78" text-anchor="middle" fill="#fca5a5" font-size="7">t=50</text>
  <text x="235" y="92" text-anchor="middle" fill="#fca5a5" font-size="6">more noise</text>
  <rect x="290" y="50" width="70" height="60" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <text x="325" y="78" text-anchor="middle" fill="#94a3b8" font-size="7">t=100</text>
  <text x="325" y="92" text-anchor="middle" fill="#64748b" font-size="6">pure noise</text>
  <text x="180" y="130" text-anchor="middle" fill="#f87171" font-size="8">→ Forward: add noise (training) →</text>
  <text x="325" y="155" text-anchor="middle" fill="#4ade80" font-size="8">← Reverse: denoise (generation) ←</text>
  <text x="470" y="78" fill="#fcd34d" font-size="8">DDPM (Ho 2020):</text>
  <text x="470" y="95" fill="#fde68a" font-size="7">predict noise at each step</text>
  <text x="470" y="110" fill="#fde68a" font-size="7">remove → repeat 1000x</text>
  <text x="470" y="130" fill="#94a3b8" font-size="6">Stable Diffusion: latent space</text>
  <text x="470" y="145" fill="#94a3b8" font-size="6">U-Net + cross-attention</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Diffusion — ধীরে ধীরে noise যোগ করো (forward), তারপর ধীরে ধীরে noise সরাও (reverse)।</div>

<div class="code-block">— Diffusion: Stable Diffusion Pipeline —

  from diffusers import StableDiffusionPipeline

  # Load model:
  pipe = StableDiffusionPipeline.from_pretrained(
      "runwayml/stable-diffusion-v1-5"
  )
  pipe = pipe.to("cuda")

  # Generate from text:
  image = pipe(
      "a cat sitting on a prayer mat, oil painting"
  ).images[0]
  image.save("cat.png")

  # Internal process:
  # 1. Text → CLIP embeddings
  # 2. Noise → U-Net denoiser (50-1000 steps)
  # 3. Cross-attention: text guides image
  # 4. VAE decode → final image

  # DDPM math:
  # x_t = sqrt(a_t) * x_0 + sqrt(1-a_t) * noise
  # Loss: ||noise - predicted_noise||^2</div>

<div class="secret-box">🌅 <strong>Diffusion = ধৈর্যের সাথে সৃষ্টি।</strong> noise থেকে ছবি, এক ধাপে নয় — অনেক ধাপে। প্রতিটি ধাপে একটু পরিষ্কার হয়। এটাই আজকের সেরা generative পদ্ধতি — Midjourney, DALL-E, Stable Diffusion সবাই এই নীতি ব্যবহার করে। কিন্তু এই স্থাপত্য কীভাবে প্রশিক্ষণ পায়? কীভাবে stable থাকে? সেই রহস্য পরের দরজায়।</div>`,
  senior: {
    title: "VAE + Diffusion এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">VAE</td><td>Kingma-Welling ২০১৩ — encoder-decoder, probabilistic latent space</td></tr>
<tr><td class="hl">Forward Diffusion</td><td>ছবি + T ধাপ noise → শুদ্ধ noise</td></tr>
<tr><td class="hl">Reverse Diffusion</td><td>noise থেকে ধাপে ধাপে ছবি পুনর্গঠন</td></tr>
<tr><td class="hl">DDPM</td><td>Ho et al. ২০২০ — practical diffusion training</td></tr>
<tr><td class="hl">Latent Diffusion</td><td>Rombach et al. ২০২২ — compressed space-এ diffusion (Stable Diffusion)</td></tr>
<tr><td class="hl">U-Net</td><td>noise prediction-এর জন্য backbone architecture</td></tr>
<tr><td class="hl">সুবিধা</td><td>GAN-এর চেয়ে stable, বেশি diversity, উন্নত quality</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "⚙️",
  color: "#6366f1",
  name: "প্রশিক্ষণের কারিগর",
  subtitle: "The Training Craftsman",
  tech: "Training Dynamics — SGD variants, Batch Normalization (Ioffe-Szegedy ২০১৫), Dropout (Srivastava-Hinton ২০১৪), Activation Functions",
  spirit: "তাযকিয়া — পরিশুদ্ধি, কষ্টের মাধ্যমে উন্নতি",
  secret: "Training = একটি নেটওয়ার্ককে ধীরে ধীরে ঠিক করা — কোন optimizer, কোন activation, কোন normalization — প্রতিটি পছন্দ গুরুত্বপূর্ণ।",
  recall: {
    q: " Batch Normalization কেন দরকার?",
    qen: "Why is Batch Normalization needed?",
    a: "প্রতিটি স্তরের input distribution স্থিতিশীল করে — gradient সঠিকভাবে প্রবাহিত হয়, training দ্রুত ও stable হয়।",
    aen: "It stabilizes each layer's input distribution — gradients flow correctly, training is faster and more stable."
  },
  story: `<p class="scene-setting">তুমি একটি কারখানায় কাজ করছো। কনভেয়ার বেল্টে পণ্য আসছে — কিন্তু প্রতিটি পণ্য ভিন্ন আকারের, ভিন্ন ওজনের। কর্মীরা বিভ্রান্ত। কেউ বড় পণ্য নিয়ে হিমশিম খাচ্ছে, কেউ ছোট পণ্য হারিয়ে ফেলছে। কাজ এলোমেলো। এখন একজন কর্মী একটি নিয়ম তৈরি করলো — প্রতিটি পণ্য একটি নির্দিষ্ট মাপে আনা হবে। বড় হলে ছোট করা হবে, ছোট হলে বড় করা হবে। সবার জন্য একই মানদণ্ড। কাজ মসৃণ হলো।</p>
<p class="scene-setting en">You work in a factory. Products arrive on a conveyor belt — but each product is a different size, different weight. Workers are confused. Some struggle with large items, some lose small ones. Work is chaotic. Now a worker creates a rule — every product will be normalized to a specific standard. Large items will be scaled down, small ones scaled up. Same standard for all. Work became smooth.</p>

<div class="dialogue"><strong>প্রশিক্ষণের কারিগর ইউসুফ:</strong> এটাই Batch Normalization। Sergey Ioffe এবং Christian Szegedy ২০১৫ সালে এটি উদ্ভাবন করেছিলেন। সমস্যা ছিল — গভীর নেটওয়ার্কে প্রতিটি স্তরের input পরিবর্তিত হয় যখন আগের স্তরের ওজন বদলায়। একে বলে "internal covariate shift।" Batch Norm প্রতিটি স্তরের input-কে একটি নির্দিষ্ট mean এবং variance-এ আনে।</div>
<div class="dialogue en"><strong>Training Craftsman Yusuf:</strong> This is Batch Normalization. Sergey Ioffe and Christian Szegedy invented it in 2015. The problem was — in deep networks, each layer's input changes when previous layers' weights update. This is called "internal covariate shift." Batch Norm brings each layer's input to a fixed mean and variance.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Batch Normalization সূত্র:</strong> μβ = mean(x), σβ = std(x), x̂ = (x − μβ) / σβ, y = γx̂ + β<br>
γ এবং β হলো learnable parameters — নেটওয়ার্ক নিজে ঠিক করে কতটা normalize করবে।</div></div>

<div class="callout info"><span class="co-icon">🔥</span><div><strong>Activation Functions:</strong><br>
<strong>Sigmoid:</strong> পুরোনো — কিন্তু output ছোট (০ থেকে ১), gradient সমস্যা।<br>
<strong>Tanh:</strong> −১ থেকে ১, sigmoid-এর চেয়ে ভালো কিন্তু এখনো vanishing gradient।<br>
<strong>ReLU (Nair-Hinton ২০১০):</strong> max(০, x)। সহজ, দ্রুত, কোনো vanishing gradient নেই। AlexNet-এ ব্যবহৃত — deep learning revolution-এর অংশ।<br>
<strong>ReLU-এর সমস্যা:</strong> "dying ReLU" — নেগেটিভ ইনপুটে gradient শূন্য, নিউরন মারা যায়।<br>
<strong>Leaky ReLU / GELU:</strong> আধুনিক সমাধান। GELU ব্যবহৃত হয় GPT/BERT-এ।</div></div>

<div class="callout warn"><span class="co-icon">💧</span><div><strong>Dropout (Srivastava ও Hinton, ২০১৪):</strong> প্রতিটি training step-এ এলোমেলোভাবে কিছু নিউরন বন্ধ করে দাও (probability p)। বলা হয় — কর্মীদের একজন একজন করে ছুটি দাও। বাকিরা কাজ করে। এতে নেটওয়ার্ক একটি নিউরনের উপর অতিরিক্ত নির্ভর করতে পারে না — সবাইকে শেখাতে হয়। Overfitting কমে।</div></div>

<div class="callout info"><span class="co-icon">⚙️</span><div><strong>Optimizer পরিবার:</strong><br>
<strong>SGD:</strong> w_new = w − η × gradient। সহজ কিন্তু ধীর, কখনো saddle point-এ আটকে যায়।<br>
<strong>Momentum:</strong> একটি ভারী বল পাহাড়ের ঢাল নামছে — গতি জমে, ছোট গর্ত পার হয়। v = γv + η × gradient।<br>
<strong>Adam (Kingma-Ba ২০১৫):</strong> adaptive learning rate প্রতিটি parameter-এর জন্য। momentum + adaptive। আজকের সবচেয়ে জনপ্রিয় optimizer।<br>
<strong>AdamW:</strong> Adam + improved weight decay। Transformer training-এ প্রমাণ।</div></div>

<div class="verse">إِنَّ مَعَ الْعُسْرِ يُسْرًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই কষ্টের সাথেই রয়েছে স্বস্তি।" — কুরআন ৯৪:৬</div>

<p class="scene-setting">এই আয়াত বলে — প্রতিটি কষ্টের পরে স্বস্তি আছে। Training dynamics-ও তেমন — প্রতিটি সমস্যার (vanishing gradient, overfitting, dying ReLU) সমাধান আবিষ্কৃত হয়েছে। প্রতিটি সমাধান নেটওয়ার্ককে আরও শক্তিশালী করেছে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩০ (গণিতের কম্পাস) Door ৯:</strong> Calculus এবং chain rule শিখেছিলে — এটাই backpropagation এবং gradient descent-এর ভিত্তি। Book ১৭ (Inference Optimization) Door ২-এ quantization শিখেছিলে — training-এর পরের ধাপ।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚙️ Activation Functions: ReLU vs Sigmoid vs Tanh</text>
  <path d="M 30 150 Q 50 150 60 100 L 80 50 L 280 50" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <text x="200" y="45" fill="#4ade80" font-size="8">ReLU: max(0,x)</text>
  <path d="M 30 150 Q 80 150 120 120 Q 160 90 200 80 L 280 75" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <text x="200" y="100" fill="#fcd34d" font-size="8">Sigmoid: 1/(1+e^-x)</text>
  <path d="M 30 150 Q 80 150 120 110 Q 160 60 200 50 L 280 50" fill="none" stroke="#a855f7" stroke-width="2"/>
  <text x="250" y="70" fill="#c084fc" font-size="8">Tanh</text>
  <line x1="30" y1="150" x2="280" y2="150" stroke="#64748b" stroke-width="0.5"/>
  <line x1="30" y1="50" x2="30" y2="150" stroke="#64748b" stroke-width="0.5"/>
  <text x="330" y="60" fill="#f87171" font-size="8">ReLU: ✅ no vanishing gradient</text>
  <text x="330" y="75" fill="#f87171" font-size="7">ReLU: ⚠️ dying ReLU (x&lt;0 → 0)</text>
  <text x="330" y="100" fill="#fcd34d" font-size="8">Sigmoid: ❌ saturates (→0 or →1)</text>
  <text x="330" y="125" fill="#4ade80" font-size="8">GELU/SwiGLU: modern (GPT-4)</text>
  <text x="330" y="150" fill="#94a3b8" font-size="7">BatchNorm + Dropout = stable training</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Activation functions। ReLU (সবচেয়ে জনপ্রিয়) — সহজ, দ্রুত, কোনো vanishing gradient নেই।</div>

<div class="code-block">— PyTorch: Training Components —

  import torch
  import torch.nn as nn

  # Activation functions:
  nn.ReLU()      # max(0, x) — default choice
  nn.GELU()      # smooth ReLU — GPT/BERT
  nn.SiLU()      # x * sigmoid(x) — modern

  # Batch Normalization:
  nn.BatchNorm2d(32)  # normalize per batch
  # stabilizes training, allows higher LR

  # Dropout:
  nn.Dropout(p=0.1)   # randomly zero 10%
  # prevents overfitting, ensemble effect

  # Optimizers:
  torch.optim.SGD(params, lr=0.01, momentum=0.9)
  torch.optim.Adam(params, lr=0.001)        # default
  torch.optim.AdamW(params, lr=0.001)       # weight decay
  torch.optim.AdamW(params, lr=3e-4,        # GPT training!
      betas=(0.9, 0.95), weight_decay=0.1)

  # Learning rate schedule:
  scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(
      optimizer, T_max=100
  )</div>

<div class="secret-box">⚙️ <strong>Training = অসংখ্য ছোট সিদ্ধান্তের সমষ্টি।</strong> কোন activation? ReLU। কোন optimizer? Adam। কোন learning rate? ০.০০১। Dropout? ০.১। Batch Norm? হ্যাঁ। প্রতিটি পছন্দ একটি স্থাপত্য সিদ্ধান্ত। কিন্তু training শেষ হওয়া মানেই কাজ শেষ নয়। নেটওয়ার্ক যদি overfit করে? যদি নতুন ডেটায় কাজ না করে? সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Training Dynamics এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Activation</td><td>ReLU (Nair-Hinton ২০১০), GELU — vanishing gradient সমাধান</td></tr>
<tr><td class="hl">Batch Norm</td><td>Ioffe-Szegedy ২০১৫ — স্তরের input স্থিতিশীল</td></tr>
<tr><td class="hl">Dropout</td><td>Srivastava-Hinton ২০১৪ — random নিউরন বন্ধ, overfitting প্রতিরোধ</td></tr>
<tr><td class="hl">SGD + Momentum</td><td>গতি জমে — ছোট গর্ত পার হয়</td></tr>
<tr><td class="hl">Adam</td><td>Kingma-Ba ২০১৫ — adaptive learning rate per parameter</td></tr>
<tr><td class="hl">AdamW</td><td>Adam + improved weight decay — Transformer standard</td></tr>
<tr><td class="hl">Learning Rate</td><td>সবচেয়ে গুরুত্বপূর্ণ hyperparameter — warmup + decay schedule</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "🎯",
  color: "#6366f1",
  name: "সারসংক্ষেপের শিল্পী",
  subtitle: "The Essence Keeper",
  tech: "Regularization (L1/L2, Early Stopping), Transfer Learning (Yosinski ২০১৪), ResNet Skip Connections (He et al. ২০১৫)",
  spirit: "ইখতিসার — সংক্ষিপ্ততা, মূল ধরে রেখে অতিরিক্ত ত্যাগ",
  secret: "Regularization = নেটওয়ার্ককে শেখার সাথে সাথে সহজ রাস্তা বন্ধ করা, যাতে সে আসল প্যাটার্ন শেখে, না মুখস্থ করে।",
  recall: {
    q: " ResNet-এ skip connection কেন দরকার?",
    qen: "Why are skip connections needed in ResNet?",
    a: "গভীর নেটওয়ার্কে gradient মুছে যায় — skip connection একটি সরাসরি পথ দেয় যাতে gradient পেছনে যেতে পারে।",
    aen: "In very deep networks, gradients vanish — skip connections provide a direct path for gradients to flow backward."
  },
  story: `<p class="scene-setting">তুমি একটি পরীক্ষার জন্য পড়ছো। কিন্তু তুমি শুধু question bank মুখস্থ করছো। ফলাফল: mock exam-এ ১০০%, কিন্তু আসল পরীক্ষায় ভরাডুবি। কারণ তুমি pattern শিখোনি — শিখেছো নির্দিষ্ট উত্তর। নিউরাল নেটওয়ার্কও এটাই করে যখন overfit করে। training data-তে ৯৯% accuracy, কিন্তু নতুন ডেটায় ৬০%।</p>
<p class="scene-setting en">You're studying for an exam. But you're just memorizing the question bank. Result: 100% on mock exams, but disaster on the real test. Because you didn't learn patterns — you memorized specific answers. Neural networks do exactly this when they overfit. 99% accuracy on training data, but 60% on new data.</p>

<div class="dialogue"><strong>সারসংক্ষেপের শিল্পী সালমান:</strong> একে বলে overfitting। সমাধান: regularization — নেটওয়ার্ককে বাধা দাও যাতে সে সহজেই মুখস্থ না করতে পারে। তাকে প্যাটার্ন খুঁজতে বাধ্য করো।</div>
<div class="dialogue en"><strong>Essence Keeper Salman:</strong> This is called overfitting. The solution: regularization — prevent the network from easily memorizing. Force it to find patterns.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Regularization Techniques:</strong><br>
<strong>L1 (Lasso):</strong> ওজনের absolute value যোগ করো। কিছু ওজন শূন্য হয়ে যায় — feature selection।<br>
<strong>L2 (Ridge):</strong> ওজনের square যোগ করো। ওজন ছোট থাকে, কেউ প্রাধান্য পায় না।<br>
<strong>Early Stopping:</strong> validation loss বাড়তে শুরু করলে training থামাও। নেটওয়ার্ক মুখস্থ করার আগেই থামাও।<br>
<strong>Data Augmentation:</strong> ডেটা বাড়াও — rotate, flip, crop, noise যোগ। একই ছবির অনেক variant।<br>
<strong>Dropout:</strong> দরজা ৮-এ শিখেছিলে — random নিউরন বন্ধ।</div></div>

<p class="scene-setting">কিন্তু গভীর নেটওয়ার্কে আরেকটি সমস্যা — কেন ৫০+ স্তর পরে নেটওয়ার্ক আর শেখে না? Kaiming He এবং তার দল (Microsoft Research, ২০১৫) একটি দুঃসাহসী প্রশ্ন করলেন: কী হবে যদি প্রতিটি স্তর শুধু residual (বাকি অংশ) শেখে? অর্থাৎ, স্তরটি শেখে যা আগের স্তরে ছিল না — শুধু সেই পার্থক্য।</p>
<p class="scene-setting en">But deep networks have another problem — why don't networks learn beyond 50+ layers? Kaiming He and his team (Microsoft Research, 2015) asked a bold question: what if each layer only learns the residual — what's missing from the previous layer?</p>

<div class="callout info"><span class="co-icon">🏗️</span><div><strong>ResNet Skip Connection (He et al. ২০১৫):</strong> H(x) = F(x) + x। স্তরটি F(x) শেখে, x সরাসরি যোগ হয়। যদি স্তরটি কিছুই না শিখে, F(x) = ০ — তাহলে H(x) = x। কিছু নষ্ট হয় না। একটি ১৫২-স্তরের ResNet VGG-১৯-এর চেয়ে কম parameter নিয়ে ভালো কাজ করে। এটাই গভীরতার চাবি।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>Transfer Learning (Yosinski et al. ২০১৪):</strong> একটি নেটওয়ার্ক ImageNet-এ প্রশিক্ষিত। তুমি শুধু শেষ কয়েকটি স্তর পরিবর্তন করে তোমার কাজে ব্যবহার করো। প্রথম স্তরগুলো general feature শেখে (edge, texture) — সেগুলো সব কাজের জন্য কাজে লাগে। "How transferable are features?" প্রশ্নটির উত্তর দিয়েছিল Yosinski। উত্তর: প্রথম স্তর খুব transferable, শেষ স্তর task-specific।</div></div>

<div class="verse">وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَى</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং পাথেয় গ্রহণ করো — কারণ শ্রেষ্ঠ পাথেয় হলো তাকওয়া (সতর্কতা/সংযম)।" — কুরআন ২:১৯৭</div>

<p class="scene-setting">এই আয়াতে সংযমের কথা বলা হয়েছে — অতিরিক্ত নয়, প্রয়োজনমতো। Regularization-ও তেমনই — নেটওয়ার্ককে স্বাধীনতা দাও কিন্তু সীমা রাখো। খুব বেশি স্বাধীনতা = overfitting। খুব বেশি সীমা = underfitting। ভারসাম্যই শিল্প।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩১ (Classic ML) Door ৪:</strong> Bias-variance tradeoff শিখেছিলে। Regularization variance কমায় — underfitting (high bias) না করে overfitting (high variance) ঠিক করে।</div></div>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ১১ (Fine-tuning):</strong> পুরো বইটাই transfer learning-এর ব্যবহারিক প্রয়োগ। এখন তুমি বোঝো কেন pre-trained model-এর প্রথম স্তর freeze করা হয় — সেগুলো general feature।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎯 Overfitting vs Underfitting vs Just Right</text>
  <rect x="20" y="50" width="160" height="130" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="100" y="72" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">❌ Overfitting</text>
  <text x="100" y="90" text-anchor="middle" fill="#fca5a5" font-size="7">memorizes noise</text>
  <path d="M 35 150 Q 60 120 80 140 Q 100 80 120 150 Q 140 110 165 145" fill="none" stroke="#f87171" stroke-width="2"/>
  <circle cx="50" cy="155" r="2" fill="#94a3b8"/>
  <circle cx="75" cy="130" r="2" fill="#94a3b8"/>
  <circle cx="100" cy="100" r="2" fill="#94a3b8"/>
  <circle cx="130" cy="155" r="2" fill="#94a3b8"/>
  <circle cx="155" cy="125" r="2" fill="#94a3b8"/>
  <text x="100" y="170" text-anchor="middle" fill="#fca5a5" font-size="7">train: 99% · test: 70%</text>
  <rect x="200" y="50" width="160" height="130" rx="8" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="280" y="72" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">⚠️ Underfitting</text>
  <text x="280" y="90" text-anchor="middle" fill="#fcd34d" font-size="7">too simple</text>
  <line x1="220" y1="150" x2="350" y2="110" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="230" cy="155" r="2" fill="#94a3b8"/>
  <circle cx="255" cy="130" r="2" fill="#94a3b8"/>
  <circle cx="280" cy="100" r="2" fill="#94a3b8"/>
  <circle cx="310" cy="155" r="2" fill="#94a3b8"/>
  <circle cx="335" cy="125" r="2" fill="#94a3b8"/>
  <text x="280" y="170" text-anchor="middle" fill="#fcd34d" font-size="7">train: 65% · test: 60%</text>
  <rect x="380" y="50" width="180" height="130" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="470" y="72" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">✅ Just Right</text>
  <text x="470" y="90" text-anchor="middle" fill="#4ade80" font-size="7">generalizes!</text>
  <path d="M 400 155 Q 440 120 470 100 Q 500 90 540 115" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <circle cx="410" cy="155" r="2" fill="#94a3b8"/>
  <circle cx="435" cy="130" r="2" fill="#94a3b8"/>
  <circle cx="460" cy="100" r="2" fill="#94a3b8"/>
  <circle cx="490" cy="155" r="2" fill="#94a3b8"/>
  <circle cx="515" cy="125" r="2" fill="#94a3b8"/>
  <text x="470" y="170" text-anchor="middle" fill="#4ade80" font-size="7">train: 92% · test: 90%</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Overfitting (মুখস্থ) vs Underfitting (সরল) vs Just Right (সাধারণীকরণ)।</div>

<div class="code-block">— Regularization Techniques —

  # Dropout (Srivastava 2014):
  nn.Dropout(p=0.5)  # 50% neurons off
  # training: random zero / eval: all on

  # L2 Regularization (weight decay):
  optimizer = AdamW(params, lr=0.001,
                    weight_decay=0.01)  # L2

  # Early Stopping:
  from pytorch_lightning import EarlyStopping
  EarlyStopping(monitor='val_loss', patience=5)

  # Data Augmentation:
  transforms.Compose([
      transforms.RandomHorizontalFlip(),
      transforms.RandomRotation(10),
      transforms.ColorJitter(0.2, 0.2),
  ])

  # Transfer Learning (Yosinski 2014):
  model = torchvision.models.resnet50(pretrained=True)
  # freeze early layers:
  for param in model.parameters():
      param.requires_grad = False
  # replace final layer:
  model.fc = nn.Linear(2048, 10)
  # train only final layer!

  # ResNet Skip Connection (He 2015):
  # y = F(x) + x  ← gradient flows directly</div>

<div class="secret-box">🎯 <strong>Regularization = স্বাধীনতায় সীমা।</strong> নেটওয়ার্ককে শিখতে দাও, কিন্তু মুখস্থ করতে দিও না। Dropout, L1/L2, early stopping, data augmentation, skip connection — প্রতিটি কৌশল একই লক্ষ্যে: generalization। আর transfer learning দিয়ে তুমি অন্যের শেখা জ্ঞান নিজের কাজে লাগাও। এখন তুমি প্রস্তুত — সব কৌশল জানো। পরের দরজায় দেখবে এই সব কীভাবে একত্রিত হয় আধুনিক স্থাপত্যে।</div>`,
  senior: {
    title: "Regularization + Transfer Learning এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Overfitting</td><td>training accuracy উচ্চ, validation accuracy নিম্ন</td></tr>
<tr><td class="hl">L1 Regularization</td><td>ওজনের absolute value শাস্তি — sparse weights</td></tr>
<tr><td class="hl">L2 Regularization</td><td>ওজনের square শাস্তি — ছোট weights</td></tr>
<tr><td class="hl">Early Stopping</td><td>validation loss বাড়লে থামাও</td></tr>
<tr><td class="hl">Dropout</td><td>Srivastava-Hinton ২০১৪ — random নিউরন বন্ধ</td></tr>
<tr><td class="hl">ResNet</td><td>He et al. ২০১৫ — skip connection, ১৫২ স্তর সম্ভব</td></tr>
<tr><td class="hl">Transfer Learning</td><td>Yosinski ২০১৪ — প্রথম স্তর general, শেষ স্তর specific</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🏛️",
  color: "#6366f1",
  name: "চিন্তার স্থপতি",
  subtitle: "The Synthesis",
  tech: "Modern Architectures — Vision Transformer (Dosovitskiy ২০২০), BERT (Devlin ২০১৮), GPT family, Mixture of Experts — One Image's Journey Through Every Layer",
  spirit: "তাওহিদ — একত্ব, সব বৈচিত্র্য এক উৎস থেকে",
  secret: "প্রতিটি স্থাপত্য — Perceptron থেকে Transformer — একই যাত্রার ধাপ: কীভাবে একটি মেশিন দেখে, ভাবে, সিদ্ধান্ত নেয়।",
  recall: {
    q: " আধুনিক LLM (GPT) কোন স্থাপত্য ব্যবহার করে?",
    qen: "What architecture do modern LLMs like GPT use?",
    a: "Decoder-only Transformer — self-attention + masked attention, শুধু পরের শব্দ predict করে।",
    aen: "Decoder-only Transformer — self-attention + masked attention, predicting only the next token."
  },
  story: `<p class="scene-setting">একটি ছবি। একটি বিড়ালের ছবি। ২৮×২৮ পিক্সেল। এই ছবিটি একটি যাত্রা শুরু করবে — নয়টি স্তরের মধ্য দিয়ে। প্রতিটি স্তরে একজন কারিগর তাকে একটু একটু বদলাবেন। শেষে একটি সংখ্যা থেকে — "বিড়াল" শব্দটি তৈরি হবে। চলো, সেই যাত্রা দেখি।</p>
<p class="scene-setting en">An image. A cat's image. 28×28 pixels. This image will begin a journey — through nine layers. At each layer, a craftsman will transform it slightly. At the end, from numbers — the word "cat" will emerge. Let's watch this journey.</p>

<div class="dialogue"><strong>দরজা ১ — রোসেনব্ল্যাট (Perceptron):</strong> প্রতিটি পিক্সেল একটি সংখ্যা। ০ থেকে ২৫৫। একটি নিউরন সব পিক্সেল দেখে, ওজন দিয়ে গুণ করে, যোগ করে। "এটা কি বিড়াল?" — হ্যাঁ বা না। কিন্তু একটি নিউরন দিয়ে এটি সম্ভব নয়।</div>
<div class="dialogue en"><strong>Door 1 — Rosenblatt (Perceptron):</strong> Each pixel is a number. 0 to 255. A neuron sees all pixels, multiplies by weights, sums them. "Is this a cat?" — yes or no. But this isn't possible with one neuron.</div>

<div class="dialogue"><strong>দরজা ২ — কারিগর দাউদ (MLP + Backprop):</strong> আমি একাধিক স্তর দিলাম। প্রথম স্তর ছোট ছোট feature খুঁজে বের করে। দ্বিতীয় স্তর সেগুলো যুক্ত করে। তৃতীয় স্তর সিদ্ধান্ত নেয়। ভুল হলে backpropagation পেছনে গিয়ে ওজন ঠিক করে। কিন্তু ৭৮৪ পিক্সেল × ১০০০ নিউরন = অনেক parameter।</div>
<div class="dialogue en"><strong>Door 2 — Master Da'ud (MLP + Backprop):</strong> I gave multiple layers. The first layer finds small features. The second combines them. The third decides. If wrong, backpropagation fixes weights backward. But 784 pixels × 1000 neurons = too many parameters.</div>

<div class="dialogue"><strong>দরজা ৩ — হাসান (CNN):</strong> আমি ছোট filter দিলাম। ৩×৩ জানালা দিয়ে পুরো ছবি স্ক্যান করলাম। প্রথম স্তর edge খুঁজে। দ্বিতীয় স্তর shape। তৃতীয় স্তর object part। স্তর গভীর হয় → ধারণা জটিল হয়। parameter কম, spatial structure ধরা যায়।</div>
<div class="dialogue en"><strong>Door 3 — Hasan (CNN):</strong> I gave small filters. Scanned the whole image with a 3×3 window. First layer finds edges. Second finds shapes. Third finds object parts. Deeper layers → more complex concepts. Fewer parameters, spatial structure captured.</div>

<div class="dialogue"><strong>দরজা ৪ — জাকারিয়া (LSTM):</strong> যদি এটি শুধু ছবি না হয়? যদি এটি একটি ভিডিও হয়? তাহলে প্রতিটি frame আগের frame-এর উপর নির্ভর করে। আমার তিনটি দরজা — forget, input, output — ঠিক করে কোন frame মনে রাখবে, কোনটা ভুলবে।</div>
<div class="dialogue en"><strong>Door 4 — Zakariya (LSTM):</strong> What if this isn't just an image? What if it's a video? Then each frame depends on the previous. My three gates — forget, input, output — decide which frames to remember, which to forget.</div>

<div class="dialogue"><strong>দরজা ৫ — মারিয়াম (Transformer):</strong> আমি সব frame একসাথে দেখি। কোনো অপেক্ষা নেই। প্রতিটি pixel বা token সবার দিকে তাকায়। attention দিয়ে ঠিক করে কে গুরুত্বপূর্ণ। এটাই GPT এবং BERT-এর মূল।</div>
<div class="dialogue en"><strong>Door 5 — Mariyam (Transformer):</strong> I see all frames at once. No waiting. Each pixel or token looks at everything. Attention decides what's important. This is the core of GPT and BERT.</div>

<div class="callout info"><span class="co-icon">🌐</span><div><strong>আধুনিক স্থাপত্য পরিবার:</strong><br>
<strong>Vision Transformer (ViT):</strong> Dosovitskiy et al. ২০২০ — ছবিকে patch-এ ভাগ করে, প্রতিটি patch একটি token। তারপর Transformer। CNN ছাড়াই দেখা সম্ভব!<br>
<strong>BERT (Devlin et al. ২০১৮):</strong> Encoder-only Transformer। masked language modeling — বাক্যের কিছু শব্দ লুকিয়ে অনুমান করো। Google-এর সব search-এ ব্যবহৃত।<br>
<strong>GPT (Radford et al. ২০১৮ → GPT-৪):</strong> Decoder-only Transformer। next-token prediction — পরের শব্দটি কী? শুধু এই একটি কাজ শিখে ভাষা আয়ত্ত করে।<br>
<strong>Mixture of Experts (MoE):</strong> একাধিক বিশেষজ্ঞ নেটওয়ার্ক, routing দিয়ে শুধু প্রয়োজনীয় expert active হয়। GPT-৪ reportedly MoE। বিশাল model কম compute-এ চালানো যায়।</div></div>

<div class="dialogue"><strong>দরজা ৬ — ইসমাঈল (GAN):</strong> আমি বিড়াল না শিখে বিড়াল তৈরি করতে পারি। Generator noise থেকে, discriminator বিচার করে। প্রতিযোগিতায় দুজনেই দক্ষ হই।</div>
<div class="dialogue en"><strong>Door 6 — Isma'il (GAN):</strong> I don't just learn cats — I can generate them. Generator from noise, discriminator judges. Through competition, both become skilled.</div>

<div class="dialogue"><strong>দরজা ৭ — রাফি (Diffusion):</strong> আমি noise থেকে ধীরে ধীরে বিড়াল তৈরি করি। ধাপে ধাপে। প্রতিটি ধাপে একটু একটু পরিষ্কার হয়। Midjourney, DALL-E সবাই আমার নীতি ব্যবহার করে।</div>
<div class="dialogue en"><strong>Door 7 — Rafi (Diffusion):</strong> I slowly create a cat from noise. Step by step. Each step a little clearer. Midjourney, DALL-E all use my principle.</div>

<div class="dialogue"><strong>দরজা ৮ — ইউসুফ (Training):</strong> প্রতিটি নেটওয়ার্ককে আমি প্রশিক্ষণ দিই। ReLU, Adam, Batch Norm, Dropout — এই চার হাতিয়ার ছাড়া কোনো নেটওয়ার্ক শিখতে পারে না।</div>
<div class="dialogue en"><strong>Door 8 — Yusuf (Training):</strong> I train every network. ReLU, Adam, Batch Norm, Dropout — without these four tools, no network can learn.</div>

<div class="dialogue"><strong>দরজা ৯ — সালমান (Regularization):</strong> আমি নিশ্চিত করি যে নেটওয়ার্ক মুখস্থ না করে। Skip connection দিয়ে গভীরতা সম্ভব। Transfer learning দিয়ে অন্যের জ্ঞান পুনরায় ব্যবহার।</div>
<div class="dialogue en"><strong>Door 9 — Salman (Regularization):</strong> I ensure the network doesn't memorize. Skip connections enable depth. Transfer learning reuses others' knowledge.</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">একটি পিক্সেল থেকে শুরু করে "বিড়াল" — এই যাত্রায় নয়জন কারিগর প্রত্যেকে একটি স্তর তৈরি করেছেন। Perceptron দিয়ে শুরু, Transformer দিয়ে বিপ্লব, Diffusion দিয়ে সৃষ্টি। প্রতিটি আবিষ্কার আগের সীমা ভেঙেছে। এটাই ডিপ লার্নিং — মানুষের মস্তিষ্ক কীভাবে কাজ করে তার একটি সরল প্রতিচ্ছবি। এবং এখনো শেষ নয় — প্রতিটি বছর নতুন স্থাপত্য আসছে। তুমি এখন ভিত্তি জানো। ভিত্তি থেকেই স্থাপত্য গড়ে ওঠে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ৮ (LLM Anatomy) — Transformer-এর ব্যবহার। Book ১১ (Fine-tuning) — Transfer learning-এর প্রয়োগ। Book ১৫ (Multimodal) — Vision + Language। Book ১৭ (Inference Optimization) — Training-এর পরের ধাপ। Book ২৫ (Council of Deep Knowledge) — কীভাবে গভীরে শিখবে। Book ৩০ (Math Foundations) — গণিতের ভিত্তি। Book ৩১ (Classic ML) — classical algorithm-এর ভিত্তি।</div></div>

<div class="checklist">
<li>📄 "Attention Is All You Need" (Vaswani ২০১৭) পড়ো — এটাই সবচেয়ে গুরুত্বপূর্ণ পেপার</li>
<li>🔬 "Deep Residual Learning" (He ২০১৫) — skip connection কেন দরকার</li>
<li>🎨 Stable Diffusion ট্রাই করো — diffusion-এর শক্তি অনুভব করো</li>
<li>📝 PyTorch/TensorFlow-এ একটি CNN ট্রেইন করো — MNIST dataset</li>
<li>🧪 Hugging Face-এ pre-trained model explore করো — transfer learning বাস্তবে</li>
<li>📖 Book ৮ (LLM Anatomy) পুনরায় পড়ো — এবার প্রতিটি ধারণা স্বচ্ছ হবে</li>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🏛️ DL Architecture Timeline: 1943 → 2024</text>
  <line x1="290" y1="50" x2="290" y2="260" stroke="#a855f7" stroke-width="2"/>
  <circle cx="290" cy="60" r="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="350" y="64" fill="#7dd3fc" font-size="8">1943 McCulloch-Pitts neuron</text>
  <circle cx="290" cy="85" r="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="350" y="89" fill="#7dd3fc" font-size="8">1958 Rosenblatt Perceptron</text>
  <circle cx="290" cy="110" r="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="350" y="114" fill="#fca5a5" font-size="8">1969 Minsky XOR → AI Winter</text>
  <circle cx="290" cy="135" r="6" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="350" y="139" fill="#4ade80" font-size="8">1986 Backpropagation (Rumelhart)</text>
  <circle cx="290" cy="160" r="6" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="350" y="164" fill="#4ade80" font-size="8">1997 LSTM (Hochreiter)</text>
  <circle cx="290" cy="185" r="6" fill="#fbbf24" stroke="#fbbf24" stroke-width="2"/>
  <text x="350" y="189" fill="#fcd34d" font-size="8">2012 AlexNet (ImageNet win!)</text>
  <circle cx="290" cy="210" r="6" fill="#a855f7" stroke="#a855f7" stroke-width="2.5"/>
  <text x="350" y="214" fill="#c084fc" font-size="8">2017 Transformer (Attention!)</text>
  <circle cx="290" cy="235" r="6" fill="#a855f7" stroke="#a855f7" stroke-width="2.5"/>
  <text x="350" y="239" fill="#c084fc" font-size="8">2020 Diffusion (DDPM)</text>
  <circle cx="290" cy="260" r="8" fill="#22c55e" stroke="#4ade80" stroke-width="3"/>
  <text x="350" y="264" fill="#4ade80" font-size="9" font-weight="700">2024+ GPT-4, Claude, AGI horizon</text>
  <text x="130" y="60" fill="#94a3b8" font-size="7">80 years of</text>
  <text x="130" y="72" fill="#94a3b8" font-size="7">continuous</text>
  <text x="130" y="84" fill="#94a3b8" font-size="7">evolution</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ৮০ বছরের যাত্রা — একটি নিউরন থেকে ১৭৫ বিলিয়ন parameter পর্যন্ত।</div>

<div class="code-block">— Modern Architectures: HuggingFace —

  # BERT (Devlin 2018) — encoder-only:
  from transformers import BertModel
  bert = BertModel.from_pretrained("bert-base-uncased")
  # 12 layers, 110M params — understanding

  # GPT-2 (Radford 2019) — decoder-only:
  from transformers import GPT2LMHeadModel
  gpt2 = GPT2LMHeadModel.from_pretrained("gpt2")
  # 124M params — generation

  # Vision Transformer (Dosovitskiy 2020):
  from transformers import ViTModel
  vit = ViTModel.from_pretrained("google/vit-base-patch16-224")
  # image as 16x16 patches → Transformer

  # Mixture of Experts (GPT-4 scale):
  # 8 experts, route token to top-2
  # 8x parameters but same compute

  # Modern stack:
  # Attention + ResNet + LayerNorm + GELU
  # + Dropout + AdamW + Cosine LR
  # = GPT/Claude/LLaMA</div>

<div class="secret-box">🏛️ <strong>চিন্তার স্থাপত্য = নয়টি দরজার সমষ্টি।</strong> Perceptron (নিউরন) → MLP (স্তর) → CNN (দৃষ্টি) → LSTM (স্মৃতি) → Transformer (মনোযোগ) → GAN (প্রতিযোগিতা) → Diffusion (সৃষ্টি) → Training (প্রশিক্ষণ) → Regularization (সংযম)। নয়টি ইট — একটি ভবন। McCulloch-Pitts ১৯৪৩ সালে একটি নিউরন তৈরি করেছিলেন। আজ আমরা ১৭৫ বিলিয়ন parameter-এর GPT-৪ ব্যবহার করছি। ৮০ বছরের যাত্রা। এবং তুমি এখন প্রতিটি ধাপ বোঝো। এটাই চিন্তার স্থাপত্য — মেশিন কীভাবে দেখে, ভাবে, সিদ্ধান্ত নেয়।</div>`,
  senior: {
    title: "Modern Architectures + Synthesis এক নজরে",
    body: `<table class="kv-table"><tr><th>আধুনিক স্থাপত্য</th><th>বিবরণ</th></tr>
<tr><td class="hl">Vision Transformer</td><td>Dosovitskiy et al. ২০২০ — image patches as tokens, pure Transformer</td></tr>
<tr><td class="hl">BERT</td><td>Devlin et al. ২০১৮ — encoder-only, masked language modeling</td></tr>
<tr><td class="hl">GPT family</td><td>Radford et al. ২০১৮→GPT-৪ — decoder-only, next-token prediction</td></tr>
<tr><td class="hl">Mixture of Experts</td><td>Shazeer et al. ২০১৭ — conditional computation, sparse activation</td></tr>
<tr><td class="hl">T5</td><td>Raffel et al. ২০১৯ — encoder-decoder, text-to-text framework</td></tr>
<tr><td class="hl">CLIP</td><td>Radford et al. ২০২১ — vision + language joint embedding</td></tr></table>
<p style="margin-top:1rem"><strong>একটি চিত্রের সম্পূর্ণ যাত্রা:</strong> পিক্সেল → Perceptron → MLP → CNN feature → Transformer attention → Classifier → "বিড়াল"। ৮০ বছরের গবেষণার ফল।</p>`
  }
});
