// doors-6-10.js — Cloud X Berry Series Book 2: The AI Agents Atlas
// Doors 6-10 (continued from doors-1-5.js — no const redeclaration)

doors.push({
  num: 6,
  icon: "🧭",
  color: "#c084fc",
  name: "অর্থের সন্ধান",
  subtitle: "Vector Databases + RAG Explained Like You're 5",
  tech: "Embeddings (meaning→vectors), semantic vs keyword search, chunking, retrieval-augmented generation",
  spirit: "তালাশ — অর্থ দিয়ে খোঁজা, শব্দ দিয়ে নয়",
  secret: "কীওয়ার্ড মেলায় শব্দ, embedding মেলায় অর্থ — RAG মানে পুরো লাইব্রেরি মুখস্থ নয়, প্রশ্নের সাথে সম্পর্কিত অংশটুকুই খুঁজে এনে মডেলকে দেওয়া।",
  recall: {
    q: "Keyword search ব্যর্থ হয় যেখানে embedding search জেতে — উদাহরণ দাও।",
    qen: "Give an example where keyword search fails but embedding search wins.",
    a: "ডকুমেন্টে লেখা 'defective products', প্রশ্নে 'broken item' — শব্দ মেলে না, অর্থ এক। Embedding model দুটোর ভেক্টর কাছাকাছি বানায়, তাই অর্থের ভিত্তিতে খুঁজে পাওয়া যায়।",
    aen: "Document says 'defective products', question asks 'broken item' — words differ, meaning same. Embedding vectors land close, so semantic search finds it."
  },
  story: `<p class="scene-setting">তুমি কোম্পানির ডকুমেন্টেশনের চ্যাটবট বানাচ্ছো। ইউজার জিজ্ঞেস করে: "How can I reset my password?" ডকুমেন্টে আসলে লেখা: "steps to change your account credentials।" শব্দ আলাদা — অর্থ এক। কীওয়ার্ড সার্চ হাত তুলে দেয়। এখানেই ভেক্টর ডেটাবেসের জয়।</p>
<p class="scene-setting en">You are building a chatbot over company docs. User asks: "How can I reset my password?" The doc actually says: "steps to change your account credentials." Different words, same meaning. Keyword search surrenders. This is where vector databases win.</p>
<div class="code-block">৩টা অবধারিত ধাপ:

১. EMBEDDING MODEL
   টেক্সট/ছবি/অডিও → সংখ্যার লিস্ট (ভেক্টর)
   নিয়ম একটাই: কাছের অর্থ → কাছের ভেক্টর
   "reset my password" আর "change my account
   password"-এর ভেক্টর প্রায় গা-ঘেঁষা।
   ⚠️ LLM টেক্সট বানায়, embedding model ভেক্টর বানায় —
   দুটো আলাদা জিনিস।

২. CHUNKING
   হাজারো ডকুমেন্ট? পুরোটার এক ভেক্টর নয় —
   ছোট ছোট টুকরো (paragraph/section),
   প্রতিটা টুকরোর নিজের ভেক্টর।

৩. SIMILARITY SEARCH
   প্রশ্নের ভেক্টর বানাও → ডেটাবেসে
   সবচেয়ে কাছের ভেক্টরগুলো খুঁজে ফেরায়।
   SQL/NoSQL প্রশ্ন করে "exact match কোনটা?",
   ভেক্টর DB প্রশ্ন করে "অর্থে কাছেরটা কোনটা?"</div>
<div class="diagram">
<div class="diag-title">RAG-এর যাত্রা — শিক্ষকের চিত্র</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowP6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L0,10 L10,5 z" fill="#c084fc"/></marker>
  </defs>
  <rect class="cell" x="12" y="30" width="120" height="70" rx="10"/>
  <text class="lbl" x="72" y="58" text-anchor="middle">ডকুমেন্ট</text>
  <text class="lbl-sm" x="72" y="78" text-anchor="middle">চাংক ভাঙো</text>
  <line class="edge" x1="134" y1="65" x2="166" y2="65" marker-end="url(#arrowP6)"/>
  <rect class="cell-hot" x="168" y="30" width="120" height="70" rx="10"/>
  <text class="lbl-hot" x="228" y="58" text-anchor="middle">Embedding</text>
  <text class="lbl-sm" x="228" y="78" text-anchor="middle">অর্থ → ভেক্টর</text>
  <line class="edge" x1="290" y1="65" x2="322" y2="65" marker-end="url(#arrowP6)"/>
  <rect class="cell-cyan" x="324" y="30" width="130" height="70" rx="10"/>
  <text class="lbl-cyan" x="389" y="58" text-anchor="middle">ভেক্টর DB</text>
  <text class="lbl-sm" x="389" y="78" text-anchor="middle">জমা + কাছ-খোঁজা</text>
  <line class="edge" x1="456" y1="65" x2="488" y2="65" marker-end="url(#arrowP6)"/>
  <rect class="cell-leaf" x="490" y="30" width="58" height="70" rx="10"/>
  <text class="lbl-leaf" x="519" y="58" text-anchor="middle">RAG</text>
  <text class="lbl-sm" x="519" y="78" text-anchor="middle">উত্তর</text>
  <text class="lbl-sm" x="280" y="140" text-anchor="middle">প্রশ্ন এলে: প্রশ্নের ভেক্টর → কাছের চাংকগুলো → LLM-কে সাথে দিয়ে উত্তর</text>
  <text class="lbl-sm" x="280" y="166" text-anchor="middle">লাইব্রেরি মুখস্ত নয় — সঠিক পাতা খুলে পড়া</text>
</svg>
<div class="diag-cap">Retrieval Augmented Generation: retrieval (খোঁজা) + generation (উত্তর) — দুই ভাই একসাথে।</div>
</div>
<div class="callout tip"><span class="co-icon">💰</span><div><strong>শিক্ষকের হিসাব:</strong> শত পৃষ্ঠার ডকুমেন্ট প্রম্পটে গুঁজে দেওয়া যায় — কিন্তু ধীর, দামি, আর বেশিরভাগ অংশ প্রশ্নের সাথে অপ্রাসঙ্গিক। RAG আনে শুধু প্রাসঙ্গিক চাংক — <strong>ফল: দ্রুত, সস্তা, নির্ভুল, আর প্রাইভেট ডেটা মডেলে ঢুকিয়ে ট্রেন করাও লাগে না।</strong></div></div>
<div class="secret-box">🧭 মুখস্ত নয়, খোঁজা — অর্থের ভেক্টর দিয়ে সঠিক টুকরো এনে মডেলকে পড়াও।</div>`,
  senior: {
    title: "Vector DB + RAG — দ্রুত গাইড",
    body: "<p><strong>Embedding:</strong> অর্থ → ভেক্টর; কাছের অর্থ = কাছের ভেক্টর (LLM≠embedding model)। <strong>Chunking:</strong> ডকুমেন্ট ভাঙো, প্রতি চাংকের ভেক্টর। <strong>ভেক্টর DB:</strong> ভেক্টর জমা + similarity search (exact match নয়, semantic)। <strong>RAG ফ্লো:</strong> docs → chunks → embeddings → store; প্রশ্ন → embed → top-k চাংক → LLM প্রম্পটে বসাও → গ্রাউন্ডেড উত্তর। লাভ: দ্রুত/সস্তা/ট্রেনিং-ছাড়া প্রাইভেট ডেটা।</p>"
  }
});

doors.push({
  num: 7,
  icon: "🔥",
  color: "#c084fc",
  name: "টর্চ ও প্যাটার্ন",
  subtitle: "PyTorch + ML Algorithms",
  tech: "Tensors, GPU/CUDA, autograd, training loop; linear/logistic regression, decision trees, clustering — intuition-first",
  spirit: "মিসাল — উদাহরণ থেকে নিয়ম শেখা",
  secret: "PyTorch-এর হৃদয় এক লুপ — predict → loss → gradient → update; আর ML অ্যালগরিদম মানে জটিল নাম নয়, প্যাটার্ন-চেনার ভিন্ন ভিন্ন উপায়।",
  recall: {
    q: "PyTorch-এর training loop-এর চারটি ধাপ কী এবং autograd কোথায় কাজ করে?",
    qen: "The four steps of PyTorch's training loop and where autograd fits?",
    a: "prediction → loss (কত ভুল) → gradients (কোন দিকে কত বদলালে ভুল কমে) → parameter update। Autograd হিসাব করে gradients — কোন প্যারামিটার বদলালে error-এর উপর কী প্রভাব পড়ে।",
    aen: "prediction → loss → gradients → parameter update. Autograd computes the gradients — how changing each parameter affects the error."
  },
  story: `<p class="scene-setting">Deep learning শিখতে নামলে সবার আগে শোনো PyTorch নামটা। কেন এত জনপ্রিয়? ভেতরে কী ঘটে? শিক্ষক ভাঙেন ধারণায় ধারণায় — আর পাশে রাখেন ML অ্যালগরিদমের সহজ অন্তর্দৃষ্টি, যাতে "নাম মুখস্থ" নয়, "উদ্দেশ্য বোঝা" হয়।</p>
<p class="scene-setting en">Deep learning begins with hearing about PyTorch. Why so popular? What happens inside? The teacher breaks it into concepts — and pairs it with ML algorithm intuitions, so you understand purposes, not memorize names.</p>
<div class="code-block">PyTorch-এর ৫টি খুঁটি:

১. TENSORS — সংখ্যা রাখার পাত্র
   NumPy array-র মতোই, কিন্তু GPU-তে চলতে পারে।

২. GPU ACCELERATION
   ট্রেনিং মানে লক্ষ লক্ষ গাণিতিক অপারেশন।
   GPU সেগুলো parallel-এ চালিয়ে গতি দেয়।
   torch.cuda.is_available() → True হলে CUDA GPU আছে।

৩. NEURAL NETWORKS — প্যাটার্ন শেখার মডেল
   হাজারো বিড়াল-কুকুরের ছবি দিলে পার্থক্যের
   প্যাটার্ন শেখে। PyTorch দেয় layer, connection,
   data-flow, training-এর বিল্ডিং ব্লক।

৪. AUTOGRAD — স্বয়ংক্রিয় ক্যালকুলাস
   প্রেডিকশন ভুল হলে প্রশ্ন: প্যারামিটার কোন দিকে
   কত বদলালে পরেরবার ভালো হবে? উত্তর = gradients।
   Autograd অপারেশন ট্র্যাক করে gradients হিসাব করে,
   optimizer সেগুলো দিয়ে প্যারামিটার আপডেট করে।

৫. FLEXIBILITY — Python-এর সাথে স্বাভাবিক মেলা
   পরীক্ষা-নিরীক্ষা সহজ, তাই গবেষকদের প্রিয়।

ট্রেনিং লুপ (হৃদয়স্থ চিত্র):
  prediction → loss → gradients → update
  ↑___________ বারবার ___________↓</div>
<div class="code-block">ML অ্যালগরিদম = প্যাটার্ন-চেনার উপায় (নাম নয়):

LINEAR REGRESSION — সোজা লাইনে ভবিষ্যদ্বাণী
  বাড়ির সাইজ বড় → দাম বাড়ে। অতীতের পয়েন্টের
  মধ্যে এমন লাইন টানো যাতে মোট ভুল সবচেয়ে কম।
  লাইনটাই মডেল। নতুন সাইজ এলে লাইনে পড়ে দাম।
  ব্যবহার: সেলস/স্টক/আবহাওয়া ফোরকাস্ট।

LOGISTIC REGRESSION — নাম সত্ত্বেও classification
  লোন দেবে না কাটবে? আউটপুট সংখ্যা নয় — সিদ্ধান্ত।
  sigmoid (S-আকৃতির কার্ভ) সম্ভাবনাকে ০-১-এ ম্যাপ করে;
  থ্রেশহোল্ডের উপরে হলে yes।</div>
<div class="callout tip"><span class="co-icon">🎓</span><div><strong>শিক্ষকের নীতি:</strong> অ্যালগরিদম শেখার উপায় নাম-মুখস্থ নয় — প্রতিটাকে জিজ্ঞেস করো <strong>"সে আসলে কী করতে চায়?"</strong> Linear regression চায় সোজা লাইনে কম ভুল; logistic চায় সম্ভাবনা থেকে সিদ্ধান্ত। একবার উদ্দেশ্য বুঝলে নামগুলো নিজেই গুছিয়ে বসে।</div></div>
<div class="secret-box">🔥 ভুল → কোন দিকে কত বদলালে ভুল কমে (gradient) → বদলাও — এই লুপই শেখা; অ্যালগরিদম শুধু প্যাটার্ন-চেনার ভিন্ন নাম।</div>`,
  senior: {
    title: "PyTorch + ML অ্যালগরিদম — দ্রুত গাইড",
    body: "<p><strong>PyTorch:</strong> tensors (GPU-সক্ষম ডেটা পাত্র), GPU/CUDA এক্সিলারেশন, nn বিল্ডিং ব্লক, autograd (স্বয়ংক্রিয় gradient), Python-বান্ধব flexibility। লুপ: predict → loss → gradient → update। <strong>অ্যালগরিদম-অন্তর্দৃষ্টি:</strong> linear regression (সোজা লাইন, ভবিষ্যদ্বাণী), logistic regression (sigmoid, সিদ্ধান্ত), decision tree (প্রশ্নের ধারা), clustering (কাছাকাছিদের দল)। নিয়ম: নাম নয়, উদ্দেশ্য বোঝো।</p>"
  }
});

doors.push({
  num: 8,
  icon: "🏠",
  color: "#c084fc",
  name: "নিজের ঘরে মডেল",
  subtitle: "Ollama + LM Studio — Run AI Locally",
  tech: "Local inference; model vs runner; 7B/14B/70B parameters; Q4-Q8 quantization; local API server",
  spirit: "আমানত — কারো হাতে না দিয়ে নিজের জিম্মায় রাখা",
  secret: "Ollama/LM Studio মডেল নয় — মডেল চালানোর ঘর; ক্লাউডের দাম-প্রাইভেসি এড়াতে নিজের হার্ডওয়্যারেই AI — শুধু ভারসাম্য বুঝতে হবে: capability vs memory vs speed।",
  recall: {
    q: "7B আর Q4 মানে কী? লোকাল মডেল বাছাইয়ের নিয়ম কী?",
    qen: "What do 7B and Q4 mean? Rule for choosing local models?",
    a: "7B = ৭ বিলিয়ন প্যারামিটার (বড় = বেশি সক্ষম, বেশি রিসোর্স)। Q4 = quantized সংস্করণ — কম মেমরি, কিছু কোয়ালিটি ট্রেড-অফ। নিয়ম: সবচেয়ে বড়টা নয়, তোমার হার্ডওয়্যারে আরামদায়ক-দ্রুত মডেলই দৈনন্দিন কাজে বেশি কাজে লাগে।",
    aen: "7B = 7 billion parameters (bigger = more capable, more resources). Q4 = quantized — less memory, some quality trade-off. Rule: not the biggest — the one that fits comfortably in your hardware's memory and runs fast."
  },
  story: `<p class="scene-setting">আজকের বেশিরভাগ AI অ্যাপ কাজ করে বাইরের প্রোভাইডারে — প্রম্পট যায় তাদের সার্ভারে, মডেল চলে তাদের ইনফ্রায়, উত্তর ফেরে। সুবিধা আছে, কিন্তু সংবেদনশীল তথ্য হলে? প্রশ্ন ওঠে — আমার নিয়ন্ত্রণের ইনফ্রায় মডেল চালাতে পারি না? উত্তর: পারো — Ollama আর LM Studio সেই দরজা।</p>
<p class="scene-setting en">Most AI apps send prompts to an external provider — the model runs on their infrastructure. But with sensitive data? Can you run a model on infrastructure you control? Yes — Ollama and LM Studio are that door.</p>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>প্রথম স্পষ্টীকরণ (দুটো ভিডিওতেই জোর দেওয়া):</strong> Ollama/LM Studio <strong>নিজে মডেল নয়</strong>। মডেলই AI-র কাজ করে; এগুলো সফটওয়্যার+ইন্টারফেস — মডেল ডাউনলোড, চালানো, কথা বলা সহজ করে। মডেল = কারিগর; Ollama/LM Studio = কারখানার ঘর।</div></div>
<div class="code-block">দুই ভাই, দুই স্বাদ:

OLLAMA — টার্মিনাল-বান্ধব, ডেভেলপার-ঘেঁষা
  অ্যাপ → Ollama → মডেল → উত্তর ফেরত
  ল্যাপটপে ডেভ, সার্ভারে ডিপ্লয় —
  ইউজারদের কাছে Ollama লাগে না,
  তোমার ব্যাকএন্ডই সব সামলায়।

LM STUDIO — ডেস্কটপ অ্যাপ, GUI-বান্ধব
  মডেল ব্রাউজ+ডাউনলোড, হার্ডওয়্যার-ফিট
  সাজেস্ট, চ্যাট UI — একদম ChatGPT-র মতো,
  কিন্তু অফলাইনে।
  লোকাল API সার্ভার — Python/C/JS/Java
  যেকোনো ভাষা থেকে কল করা যায়।
  প্রোটোটাইপ লোকালে → পরে ঠিক করো
  লোকাল থাকবে না ক্লাউডে যাবে।

দুটোরই লাভ:
  - প্রম্পট তোমার মেশিন ছাড়ায় না
  - ইন্টারনেট ছাড়া চলে (একবার ডাউনলোডের পর)
  - রিকোয়েস্ট-প্রতি ক্লাউড-বিল নেই</div>
<div class="code-block">হার্ডওয়্যারের হিসাব (লোকাল AI-র ভাষা):

৭B / ১৪B / ৩২B / ৭০B = প্যারামিটার সংখ্যা
  বড় মডেল = বেশি সক্ষম, বেশি রিসোর্স-খিদা

Q4 / Q5 / Q6 / Q8 = quantization স্তর
  মেমরি কম খায়, কোয়ালিটিতে কিছু আপস

বাছাইয়ের নিয়ম: সবচেয়ে বড়টা খোঁজো না —
ভারসাম্য খোঁজো: capability × memory × speed।
GPU মেমরিতে না-ঢোকা মডেল টেকনিক্যালি চললেও
কষ্টদায়ক ধীর। ছোট-দ্রুত মডেল দৈনন্দিন কাজে
বেশি কাজে লাগে।
LM Studio-তে একই প্রম্পট দিয়ে মডেলগুলো
তুলনা করে দেখো — পরীক্ষা সহজ।</div>
<div class="callout info"><span class="co-icon">💡</span><div><strong>"ফ্রি" নয়:</strong> লোকাল AI-তে ক্লাউড-বিল নেই, কিন্তু তুমিই দিচ্ছো CPU+GPU+মেমরি+স্টোরেজ+বিদ্যুৎ। খরচ শুধু রূপ বদলেছে — টাকা থেকে হার্ডওয়্যারে।</div></div>
<div class="secret-box">🏠 প্রম্পট ঘর থেকে বেরোক না — নিজের হার্ডওয়্যারে মডেল, শুধু ভারসাম্য মেপে বেছে নাও।</div>`,
  senior: {
    title: "Ollama + LM Studio — দ্রুত গাইড",
    body: "<p><strong>ধারণা:</strong> দুটোই মডেল-রানার, মডেল নয়। <strong>Ollama:</strong> CLI/ডেভ-ফ্রেন্ডলি, অ্যাপ→Ollama→মডেল চেইন, লোকাল ডেভ→সার্ভার ডিপ্লয়। <strong>LM Studio:</strong> GUI ওয়ার্কবেঞ্চ — মডেল ব্রাউজ/হার্ডওয়্যার-ফিট/চ্যাট + লোকাল API সার্ভার (যেকোনো ভাষা)। <strong>স্পেক পড়া:</strong> B=প্যারামিটার (ক্ষমতা/রিসোর্স), Q=quantization (মেমরি বনাম কোয়ালিটি)। নিয়ম: আরামদায়ক-দ্রুত মডেল > বিশাল-ধীর মডেল।</p>"
  }
});

doors.push({
  num: 9,
  icon: "🔍",
  color: "#c084fc",
  name: "ভেতরের কারখানা",
  subtitle: "LLM Will Finally Make Sense + Why LLMs Forget",
  tech: "Tokenization, embeddings, next-token prediction, context window; why memory resets each chat",
  spirit: "বসর — প্রতিবার নতুন করে বোঝার খোলা দরজা",
  spiritNote: "",
  secret: "LLM-এর পুরো জীবন এক প্রশ্ন: \"পরের টোকেনটা কী?\" — আর সে মনে রাখে না তোমাকে, প্রতি বার্তায় পুরো কথোপকথনটাই আবার পড়ে।",
  recall: {
    q: "ChatGPT/Claude নতুন চ্যাটে আগের কথা ভুলে যায় কেন?",
    qen: "Why do ChatGPT/Claude forget everything in a new chat?",
    a: "LLM-এর স্থায়ী স্মৃতি নেই — প্রতিটা রেসপন্স আসলে stateless। প্রতিবার পুরো কথোপকথন (তোমার আগের বার্তা + নিজের আগের উত্তর) context window-তে ঢুকিয়ে আবার প্রসেস করা হয়। নতুন চ্যাট = খালি context — তাই আগেরটা \"বাইরে\" চলে যায়।",
    aen: "LLMs have no persistent memory — each response is stateless. The entire conversation is re-fed into the context window every time. New chat = empty context, so the past is simply not there."
  },
  story: `<p class="scene-setting">তুমি ChatGPT-কে গতকাল একটা প্রজেক্টের কথা বলেছিলে — আজ নতুন চ্যাটে সে চুপচাপ জিজ্ঞেস করে "কী প্রজেক্ট?"। রাগ আসে। অথচ একবার ভেতরটা দেখলে রাগ পড়ে যাবে — কারণ LLM-এর মাথায় ঘটছে এমন কিছু যা আমরা ভাবি তার চেয়ে অনেক আলাদা।</p>
<p class="scene-setting en">You told ChatGPT about a project yesterday — today in a new chat it asks "which project?". Look inside once and the anger fades — because what happens in an LLM's head is very different from what we assume.</p>
<div class="code-block">LLM-এর ভেতরের ৪টি ধাপ:

১. TOKENIZATION — টেক্সট ভাঙা
   "I love AI" → ["I", "love", "AI"]
   শব্দ নয়, ছোট ছোট টোকেন — মডেল শুধু
   টোকেন বোঝে, অক্ষর নয়।

২. EMBEDDINGS — টোকেন থেকে অর্থ-সংখ্যা
   প্রতিটা টোকেন হাজারো মাত্রার ভেক্টরে
   রূপান্তরিত — অর্থের গাণিতিক রূপ।

৩. ATTENTION — কোন টোকেন কার দিকে তাকাবে
   "bank" মানে নদীর পাড় না টাকার ব্যাংক?
   বাক্যের বাকি টোকেনগুলোর দিকে তাকিয়ে
   মডেল ঠিক করে — এটাই attention।

৪. NEXT-TOKEN PREDICTION — চূড়ান্ত লক্ষ্য
   পুরো প্রশিক্ষণ একটাই কাজ শিখিয়েছে:
   পরের টোকেনটা কী হবে?
   একবার একটা ভবিষ্যদ্বাণী → সেটা জোড়া হলো
   → আবার ভবিষ্যদ্বাণী → এভাবেই পুরো উত্তর
   টোকেন-টোকেন জন্মায়।</div>
<div class="dialogue">এবার ভুলে যাওয়ার রহস্য। মডেল আসলে কিছুই "মনে রাখে" না — প্রতিটা রেসপন্স stateless। যা ঘটে: প্রতিবার তোমার নতুন বার্তার সাথে <strong>পুরো আগের কথোপকথনটাই</strong> (তোমার বার্তা + তার আগের উত্তর) আবার ইনপুট হিসেবে ঢোকানো হয়। মডেল পড়ে context window-টা — আর সেটাই তার "স্মৃতি"-র সব।</div>
<div class="dialogue en">Now the forgetting mystery. The model actually remembers nothing — every response is stateless. What happens: each time, the entire prior conversation is re-fed as input alongside your new message. The model reads the context window — and that IS its entire "memory".</div>
<div class="code-block">তাহলে "স্মৃতি" কোথা থেকে আসে?

CONTEXT WINDOW = এক বার্তায় যতটুকু পড়া যায়
  বড় হলে লম্বা আলোচনা এক প্রসঙ্গে চলে।

চ্যাট যত লম্বা → context তত ভরে → পুরনো অংশ
সরে যায় বা সারসংক্ষেপ হয় → "সে ভুলে যাচ্ছে!"

নতুন চ্যাট = খালি context
  → গতকালের প্রজেক্ট-কথা সেখানে নেই
  → "মনে নেই" মানে মুখস্থ ছিল না —
    পড়ার কোনো সুযোগই পায়নি।

সমাধান যা আমরা দেখি:
  Memory ফিচার, কাস্টম ইনস্ট্রাকশন, সারভারে
  কথোপকথন জমা — সবই ট্রিক: প্রাসঙ্গিক তথ্য
  বেছে বেছে context-এ ফিরিয়ে আনা।</div>
<div class="callout tip"><span class="co-icon">🪞</span><div><strong>দুই দরজার সেতু:</strong> দরজা ৬-এ দেখেছিলে embedding অর্থকে ভেক্টরে নেয় — আজ দেখলে সেই একই embedding মডেলের ভেতরেও চলছে। আর RAG (দরজা ৬) আর memory ফিচার একই রোগের দুই ওষুধ: <strong>context window সীমিত, তাই কী ঢোকাব তা বেছে নিতে হয়।</strong></div></div>
<div class="secret-box">🔍 প্রতিবার নতুন করে পড়া — মডেলের স্মৃতি বাইরে থাকে, context window-এ; ভুলে যাওয়া নয়, পড়াই হয়নি।</div>`,
  senior: {
    title: "LLM Internals + Context Window — দ্রুত গাইড",
    body: "<p><strong>পাইপলাইন:</strong> tokenization (টোকেনে ভাঙা) → embeddings (অর্থ-ভেক্টর) → attention (প্রসঙ্গ-দেখা) → next-token prediction (টোকেন-টোকেন উত্তর)। <strong>স্মৃতি:</strong> stateless — প্রতিবার পুরো কথোপকথন আবার ইনপুট; context window-ই একমাত্র মেমরি; নতুন চ্যাট = খালি window। <strong>মেমরি ফিচার:</strong> প্রাসঙ্গিক তথ্য context-এ ফিরিয়ে আনার ট্রিক। সিদ্ধান্ত নেওয়ার সময় মনে রাখো: মডেল বোঝে যা window-তে আছে — বাকিটা অন্ধকার।</p>"
  }
});

doors.push({
  num: 10,
  icon: "⚡",
  color: "#c084fc",
  name: "সিদ্ধান্ত ও স্মৃতির মেশিন",
  subtitle: "Jev: Typed Decisions + Hermes Agent Explained",
  tech: "Typed probabilistic decisions (choice/score/new) vs text generation; agent framework vs model; persistent memory vs skills; sub-agents",
  spirit: "ফাতরা — বাঁচানো সময়ের সুদ",
  secret: "সব AI মানে টেক্সট-জেনারেটর নয়: Jev সরাসরি টাইপড সিদ্ধান্ত ফেরায়, আর বড় কাজ একা মডেলের নয় — মডেল+মেমরি+স্কিল+সাব-এজেন্ট মিলের ফ্রেমওয়ার্কের।",
  recall: {
    q: "Jev-এর তিনটি প্রশ্নের ধরন (choice/score/new) কী কী ফেরায়?",
    qen: "What do Jev's three question types return?",
    a: "choice = সংজ্ঞায়িত অপশন-সেট থেকে একটা বেছে দেয়; score = ক্রম-স্কেলে কিছু মূল্যায়ন করে; new = হ্যাঁ-না সিদ্ধান্ত, সাথে yes-এর সম্ভাবনা। মূল পার্থক্য: আউটপুট-স্পেস আগেই তুমি সংজ্ঞা দাও — মডেল ভুল করতে পারে, কিন্তু অজানা ফরম্যাট আবিষ্কার করতে পারে না।",
    aen: "choice = picks one from a defined set; score = evaluates on an ordered scale; new = yes/no plus the probability of yes. Key: you define the answer space first — the model can be wrong but cannot invent unexpected formats."
  },
  story: `<p class="scene-setting">AI মানেই ধরে নিয়েছি টোকেন জেনারেট করা — ইনপুট দাও, টেক্সট ফেরায়। কিন্তু ভাবো: তোমার সফটওয়্যারের যদি আসলে টেক্সটই না লাগে? যদি লাগে শুধু একটা সিদ্ধান্ত — এই রিকোয়েস্ট retry করব কি, কোন টিম-এর টিকিট, মানুষের কাছে পাঠাব কি? এর জন্য এক প্যারাগ্রাফ টেক্সট জেনারেট করে তার থেকে সিদ্ধান্ত খুঁজে বের করা — আশ্চর্য ঘুরপথ। এখানেই Jev-এর জন্ম।</p>
<p class="scene-setting en">We assume AI means generating tokens. But what if your software does not need text — only a decision: retry or not, which team owns this ticket, escalate to a human? Generating a paragraph and clawing one decision out of it is a strange detour. That is where Jev begins.</p>
<div class="code-block">JEV (Typesafe AI) — টাইপড সিদ্ধান্তের মডেল

LLM-এর যন্ত্রণা (production-এ সবাই জানে):
  JSON চাও → মডেল টোকেন বানায় → parse →
  validate → অপ্রত্যাশিত ভ্যালু → retry →
  আবার ভাঙল... "ভাষা থেকে সিদ্ধান্ত ছিনিয়ে আনা"।

Jev-এর উল্টো পথ:
  ভাষা বানিয়ে সিদ্ধান্ত বের করো না —
  সিদ্ধান্তটাই সরাসরি দাও।

তিন ধরনের প্রশ্ন:
  CHOICE — অপশন-সেট থেকে একটা বাছাই
  SCORE  — ক্রম-স্কেলে মূল্যায়ন
  NEW    — yes/no + yes-এর সম্ভাবনা

টাইপ-সেফ মানে ভুলহীন নয়:
  মডেল ভুল সিদ্ধান্ত দিতে পারে,
  কিন্তু তোমার অ্যাপ যে-স্ট্রাকচার চেনে না
  এমন ভ্যালু বানাতে পারে না।

গতির রহস্য: parallel sampling —
  টোকেন-পর-টোকেন ধারাবাহিকতার বদলে
  ঘোষিত প্রশ্নগুলো সমান্তরালে মূল্যায়ন।</div>
<div class="dialogue">আর দ্বিতীয় ভিডিও — একটা চেনা যন্ত্রণা দিয়ে শুরু: AI অ্যাসিস্ট্যান্ট <strong>ভুলে যায়</strong>। আজ প্রজেক্ট বুঝিয়ে দিলে, কাল নতুন করে বোঝাতে হয় (দরজা ৯-এর সেই stateless বাস্তবতা)। Hermes Agent (Nous Research) সেই ফাঁক ভরাতে আসা একটা ওপেন-সোর্স এজেন্ট ফ্রেমওয়ার্ক।</div>
<div class="code-block">HERMES AGENT — মডেল নয়, মডেলের চারপাশের সিস্টেম

স্পষ্ট ভাগ:
  মডেল (Claude/GPT/open-weight) = বুদ্ধি
  Hermes = সেই বুদ্ধির চারপাশে context,
  memory, tools, execution, কাজের লুপ

দুই অস্ত্র যা আসলেই আলাদা:
  MEMORY = তথ্য যা মনে রাখা উচিত
           (প্রজেক্ট, পছন্দ, পরিবেশ, আগের কাজ)
  SKILL  = জ্ঞান কীভাবে কাজটা করতে হয়
           প্রথমবার কষ্ট করে শেখা →
           human-readable ফাইলে সেভ →
           পরেরবার সরাসরি পুনর্ব্যবহার

বাকি ক্ষমতা:
  - Model-agnostic: hosted বা local
    (Ollama/vLLM — দরজা ৮-এর সংযোগ!)
  - IDE-র বাইরে: terminal, Telegram,
    Discord, Slack, WhatsApp
  - Scheduled tasks: প্রতিভোর সকালে
    GitHub issues দেখে সারসংক্ষেপ
  - Sub-agents: বড় রিসার্চ টাস্ক ভেঙে
    আলাদা এজেন্টে ছড়িয়ে দিয়ে ফল জোড়া</div>
<div class="callout tip"><span class="co-icon">🧠</span><div><strong>দুই ভিডিওর এক সুর:</strong> Jev বলছে সিদ্ধান্তের জায়গায় ভাষা নয়, Hermes বলছে বুদ্ধির জায়গায় শুধু মডেল নয় — দুটোই একই দিকে ইশারা: <strong>AI সিস্টেম ডিজাইনের আসল খেলা এখন মডেলের বাইরের স্থাপত্যে</strong> (দরজা ৪-এর হার্নেস-ই ফিরে এলো, আরও দৃঢ় হয়ে)।</div></div>
<div class="secret-box">⚡ যেখানে সিদ্ধান্ত লাগে সেখানে ভাষা নয়; যেখানে কাজ লাগে সেখানে শুধু মডেল নয় — স্থাপত্যই আসল।</div>`,
  senior: {
    title: "Jev + Hermes Agent — দ্রুত গাইড",
    body: "<p><strong>Jev:</strong> Typesafe AI-র টাইপড-সিদ্ধান্ত মডেল — choice/score/new প্রশ্নে সংজ্ঞায়িত আউটপুট-স্পেস থেকে সরাসরি সিদ্ধান্ত (টেক্সট জেনারেশন নয়); type-safe = ভুল সম্ভব, অপ্রত্যাশিত ফরম্যাট অসম্ভব; parallel sampling-এ কম latency। <strong>Hermes:</strong> ওপেন-সোর্স এজেন্ট ফ্রেমওয়ার্ক (মডেল নয়) — persistent memory বনাম skills (তথ্য বনাম পদ্ধতি), model-agnostic (Ollama/vLLM), IDE-বাহির্ভূত চ্যানেল, scheduled tasks, sub-agents। সারমর্ম: এজেন্ট-যুগের মূল্য স্থাপত্যে।</p>"
  }
});




