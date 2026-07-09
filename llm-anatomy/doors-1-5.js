// ════════════════════════════════════════
// LLM দর্শন — DOORS 1-5
// Deep Dive: Tokenization → Training
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: THE TOKEN PUZZLE ══
doors.push({
  num:1, icon:"🔤", color:"#ff7b54", name:"হরফ কারিগরের টেবিল",
  subtitle:"The Letter Smith's Table", tech:"Tokenization & BPE Deep Dive",
  spirit:"হরফ — প্রতিটি অক্ষর গুরুত্বপূর্ণ",
  secret:"LLM শব্দ বোঝে না। সে বোঝে টোকেন — সংখ্যার টুকরো। BPE অ্যালগরিদম শব্দকে ভাঙে, তারপর সংখ্যায় রূপান্তর করে। টোকেনাইজেশন বুঝলে তুমি বুঝবে কেন LLM গণিতে দুর্বল, কেন বাংলা বেশি খরচ করে, কেন কিছু শব্দ ভাঙে।",
  recall:{
    q:"হরফ কারিগর কেন শব্দকে ভেঙে অক্ষরে আলাদা করেন?",
    qen:"Why does the letter smith break words into individual letters?",
    a:"কারণ অসংখ্য শব্দ আছে কিন্তু সীমিত অক্ষর। BPE-ও তেমনি — বিরল শব্দকে পরিচিত টুকরোয় ভাঙে। 'unhappiness' → 'un' + 'happiness' বা 'un'+'happ'+'iness'। প্রতিটা টুকরো একটি টোকেন — একটি সংখ্যা।",
    aen:"Because there are infinite words but limited letters. BPE too — breaks rare words into known pieces. 'unhappiness' → 'un' + 'happ' + 'iness'. Each piece is a token — a number."
  },
  story:`
<p class="scene-setting">প্রথম কক্ষ। হরফ কারিগরের টেবিল। কাঠের ব্লকে খোদাই করা অক্ষর — ক, খ, গ, ঘ। কিন্তু শুধু অক্ষর নয় — কিছু ব্লকে পুরো শব্দ: 'জ্ঞান', 'বিজ্ঞান', 'বিজ্ঞানী'। কারিগর ফারহান একটা নতুন শব্দ ধরে আছেন — 'অসাধারণ'। "এটা কীভাবে ভাঙব?" তিনি বললেন। "অ' + 'সাধারণ'? নাকি 'অ' + 'সা' + 'ধা' + 'রণ'?"</p>
<p class="scene-setting en">The first chamber. The letter smith's table. Wooden blocks with carved letters — ক, খ, গ, ঘ. But not just letters — some blocks have whole words: 'জ্ঞান', 'বিজ্ঞান', 'বিজ্ঞানী'. Craftsman Farhan holds a new word — 'অসাধারণ'. "How to break this?" he said. "অ + সাধারণ'? Or 'অ' + 'সা' + 'ধা' + 'রণ'?"</p>

<div class="dialogue">তুমি ভাবো LLM 'শব্দ' বোঝে। ভুল। LLM বোঝে সংখ্যা। প্রতিটি টোকেন একটি সংখ্যা — vocabulary index। 'hello' হয়তো টোকেন #১৫০০০, 'world' টোকেন #৪৪৩। কিন্তু 'জ্ঞান'? সেটা এক সংখ্যা নয় — হয়তো চার। কারণ BPE এটাকে ভেঙেছে।</div>
<div class="dialogue en">"You think LLMs understand 'words.' Wrong. LLMs understand numbers. Each token is a number — a vocabulary index. 'hello' might be token #15000, 'world' token #443. But 'জ্ঞান'? That's not one number — maybe four. Because BPE broke it."</div>

<div class="code-block">BPE (Byte Pair Encoding) — How It Actually Works:

VOCABULARY CONSTRUCTION:
  ট্রেইনিং ডেটা নাও → সব ইউনিকোড বাইট 
  থেকে শুরু → সবচেয়ে সাধারণ জোড়া 
  (pair) খোঁজো → মার্জ করো → আবার খোঁজো।

  Iteration 1: 't' + 'h' → 'th' (common)
  Iteration 2: 'th' + 'e' → 'the' (very common)  
  Iteration 3: 'i' + 'n' → 'in' (common)
  ...
  Iteration 50000: vocabulary complete

  GPT-4 vocab: ~100,000 tokens
  Claude vocab: ~65,000 tokens
  Llama 3 vocab: 128,000 tokens

ENCODING (শব্দ → টোকেন → সংখ্যা):
  "unhappiness" 
    → ["un", "happiness"]  (2 tokens)
    OR
    → ["un", "happ", "iness"]  (3 tokens)
  
  কোনটা? BPE সিদ্ধান্ত নেয় — vocabulary-এ 
  কোন টুকরোটা আছে তার উপর ভিত্তি করে।

  "জ্ঞান" (Bengali)
    → ["জ", "্ঞ", "া", "ন"]  (4 tokens!)
    → কারণ বাংলা বিরল, BPE-তে আলাদা নেই

  "knowledge" (English)  
    → ["knowledge"]  (1 token!)
    → কারণ সাধারণ ইংরেজি শব্দ

কেন এটা গুরুত্বপূর্ণ?

১. খরচ:
   "আমি ভালো আছি" (Bengali) = ~৬ টোকেন
   "I am fine" (English) = ৩ টোকেন
   → বাংলা ২x খরচ! ১M বাংলা টোকেনের জন্য 
     বেশি টাকা দিতে হবে।

২. গণিতে দুর্বলতা:
   "123 + 456" 
   → টোকেন: ["123", " +", " 456"]  OK
   "1234567 + 8901234"
   → টোকেন: ["123", "45", "67", " +", " 890", ...]
   → সংখ্যা ভেঙে গেছে! LLM ভুল করে।
   → এজন্য LLM বড় সংখ্যায় ভুল করে।

৩. কোড:
   "def fibonacci(n):"
   → ["def", " fibonacci", "(", "n", "):"]
   → ৫ টোকেন — কোড তুলনামূলক কম খরচ

৪. হোয়াইটস্পেস:
   " hello" (space) = [" hello"] = ১ টোকেন
   "hello" (no space) = ["hello"] = ১ টোকেন  
   → কিন্তু আলাদা টোকেন! স্পেস ম্যাটার।</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"GPT শব্দ বোঝে।" — না। সে সংখ্যা বোঝে। "GPT সব ভাষা সমানভাবে পারে।" — না। ইংরেজি ১ টোকেন, বাংলা ৪ টোকেন। পারফরম্যান্স আলাদা। "GPT সংখ্যা পারে।" — ছোট সংখ্যা পারে, বড় সংখ্যা টোকেনাইজেশনে ভাঙে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>GPT টোকেন পারে, শব্দ নয়। ইংরেজি সস্তা, বাংলা ব্যয়বহুল। বড় সংখ্যায় calculator tool ব্যবহার করো। প্রম্পট লেখার সময় টোকেন সংখ্যা মাথায় রাখো।</div>
</div>

<div class="dialogue">হরফ — অক্ষর। কুরআনে আল্লাহ বলেন — "আলিফ-লাম-মিম।" কিছু সূরা শুরু হয় বিচ্ছিন্ন হরফ দিয়ে। এই হরফগুলো রহস্যময় — কিন্তু প্রতিটি গুরুত্বপূর্ণ। LLM-এর জগতেও — প্রতিটি টোকেন একটি হরফ। একটি টোকেন বদলালে অর্থ বদলায়। টোকেনাইজেশন বুঝলে তুমি বুঝবে — LLM-এর ভুল কোথা থেকে আসে, কেন কিছু ভাষায় ভালো, কেন গণিতে দুর্বল।</div>
<div class="dialogue en">"Harf — letter. Allah says — 'Alif-Lam-Mim.' Some surahs start with discrete letters. These letters are mysterious — but each matters. In the LLM's world too — each token is a letter. Changing one changes meaning. Understanding tokenization reveals — where LLM errors come from, why some languages work better, why math fails."</div>`,
  senior:{
    title:"Tokenization Audit — তোমার প্রম্পট পরীক্ষা করো",
    body:`<p><strong>টুল:</strong> tiktoken (OpenAI), Anthropic Tokenizer, Google Tokenizer</p><p><strong>পরীক্ষা ১:</strong> একই বাক্য ইংরেজিতে এবং বাংলায় লেখো। টোকেন সংখ্যা তুলনা করো। বাংলা ২-৩x বেশি খাবে।</p><p><strong>পরীক্ষা ২:</strong> একটা বড় সংখ্যা লেখো (৯৯৯৯৯৯)। কয় টোকেন? এখন ছোট সংখ্যা (৯৯)। কয় টোকেন? পার্থক্য দেখো।</p><p><strong>পরীক্ষা ৩:</strong> কোড এবং প্লেইন টেক্সট তুলনা করো। কোডের কোন অংশ বেশি টোকেন খায়?</p><p><strong>প্রোডাকশন:</strong> প্রতিটা API কলে টোকেন সংখ্যা ট্র্যাক করো। অপ্রয়োজনীয় স্পেস, রিপিটেড টেক্সট, বাংলা অপ্টিমাইজ করো।</p>`
  }
});

// ══ DOOR 2: EMBEDDINGS ══
doors.push({
  num:2, icon:"🧲", color:"#5b9eff", name:"চুম্বক নির্মাতা",
  subtitle:"The Magnet Maker", tech:"Embeddings & Vector Space Deep Dive",
  spirit:"নসিব — অদৃশ্য সংযোগ",
  secret:"টোকেন একটা সংখ্যা। কিন্তু embedding হলো একটা দিক — হাজার ডাইমেনশনের স্থানে একটা বিন্দু। সমার্থক শব্দ কাছাকাছি বসে। বিপরীত শব্দ দূরে। এই জ্যামিতিই LLM-এর বোঝার ভিত্তি।",
  recall:{
    q:"চুম্বক নির্মাতা কেন কিছু চুম্বক কাছাকাছি রাখেন, কিছু দূরে?",
    qen:"Why does the magnet maker keep some magnets close, others far?",
    a:"কারণ সমজাতীয় চুম্বক একে অপরকে আকর্ষণ করে। Embedding-ও তেমনি — সমার্থক শব্দ কাছাকাছি, বিপরীত দূরে। 'রাজা' এবং 'রানী' কাছে, 'রাজা' এবং 'কৃষক' দূরে। এই জ্যামিতিই অর্থ।",
    aen:"Because similar magnets attract each other. Embeddings too — synonyms close, antonyms far. 'King' and 'queen' near, 'king' and 'peasant' far. This geometry is meaning."
  },
  story:`
<p class="scene-setting">দ্বিতীয় কক্ষ। চুম্বক নির্মাতার টেবিল। সারিবদ্ধ চুম্বক — কেউ উত্তরমুখী, কেউ দক্ষিণমুখী, কেউ পূর্ব। চুম্বক নির্মাতা নুসরাত একটা বিশাল বোর্ডে বিন্দু আঁকছেন — প্রতিটা বিন্দু একটা শব্দ। "দেখো," তিনি বললেন, "'বিদ্যা' আর 'জ্ঞান' পাশাপাশি। 'অজ্ঞতা' অনেক দূরে। কেন? কারণ অর্থের জ্যামিতি এটাই।"</p>
<p class="scene-setting en">The second chamber. The magnet maker's table. Rows of magnets — some north-facing, some south, some east. Magnet maker Nusrat draws dots on a vast board — each dot a word. "Look," she said, "'বিদ্যা' and 'জ্ঞান' side by side. 'অজ্ঞতা' far away. Why? Because this is the geometry of meaning."</p>

<div class="dialogue">হরফ কারিগর বলেছিলেন — শব্দ টোকেনে ভাঙে। কিন্তু আমি বলি — টোকেন শুধু সংখ্যা। সংখ্যা থেকে অর্থ কীভাবে? Embedding। প্রতিটি টোকেন একটা হাজার-ডাইমেনশনের স্থানে একটা বিন্দু। কোথায় বসে — সেটাই অর্থ।</div>
<div class="dialogue en">"The letter smith said — words break into tokens. But I say — a token is just a number. How does meaning come from numbers? Embeddings. Each token is a point in a thousand-dimensional space. Where it sits — that's meaning."</div>

<div class="code-block">Embeddings — The Geometry of Meaning:

টোকেন #১৫০০০ = "king"
  → embedding: [0.23, -0.45, 0.89, ...]  
  → ৪০৯৬ সংখ্যার একটা ভেক্টর
  → এই সংখ্যাগুলো = "king"-এর অবস্থান

টোকেন #১৮০০০ = "queen"  
  → embedding: [0.25, -0.41, 0.85, ...]
  → "king"-এর খুব কাছে!

টোকেন #৫০০০০ = "banana"
  → embedding: [-0.67, 0.12, -0.33, ...]
  → "king" থেকে অনেক দূরে

কেন এটা কাজ করে?

Word2Vec (2013), Mikolov et al.:
  কিংবদন্তী উদাহরণ:
  vec("king") - vec("man") + vec("woman") 
  ≈ vec("queen")
  
  → অর্থের গাণিতিক প্রকাশ!
  → লিঙ্গ = একটা দিক স্পেসে
  → রাজকীয়তা = আরেকটা দিক
  → প্রতিটা ডাইমেনশন = একটা ধারণা

EMBEDDING DIMENSIONS:
  GPT-3: ১২,২৮৮ ডাইমেনশন
  GPT-4: ~৮,০০০-১২,০০০ (est.)
  Claude 3: ~৪,০৯৬-৮,০০০
  Llama 3: ১০,২৪০
  → প্রতিটা ডাইমেনশন = একটা "ধারণার অক্ষ"

EMBEDDING USE CASES:

১. SEMANTIC SEARCH
   "মেশিন লার্নিং" query → এটার embedding 
   → ডেটাবেসে সব ডকুমেন্টের embedding সাথে 
   তুলনা → কাছেরগুলো = প্রাসঙ্গিক

২. RAG
   ইউজার প্রশ্ন → embedding → ডকুমেন্ট 
   খোঁজো → LLM-কে দাও

৩. CLUSTERING  
   সমজাতীয় ডকুমেন্ট একসাথে গ্রুপ করো
   → spam detection, topic modeling

৪. CLASSIFICATION
   "এই টেক্সট কি নেতিবাচক নাকি ইতিবাচক?"
   → embedding → সরল classifier

VECTOR OPERATIONS:
  cosine_similarity(A, B) = A·B / (|A|×|B|)
  → ১.০ = অভিন্ন অর্থ
  → ০.০ = সম্পর্কহীন
  → -১.০ = বিপরীত অর্থ

EMBEDDING MODELS:
  OpenAI: text-embedding-3-large (৩০৭২ dim)
  Cohere: embed-multilingual-v3 (১০২৪ dim)
  Open: BGE, E5, Nomic (৭৬৮ dim)
  → মাল্টিলিঙ্গুয়াল = বাংলা সাপোর্ট</div>

<div class="dialogue">নসিব — অদৃশ্য সংযোগ, ভাগ্য। কুরআনে আল্লাহ বলেন — "তোমাদের কারও সাথে কারও সম্পর্ক নেই যদি না আমি সংযুক্ত করি।" Embedding হলো সেই সংযোগ — শব্দের মধ্যে অদৃশ্য সম্পর্ক। 'বিদ্যা' আর 'জ্ঞান' কাছে — কারণ তাদের embedding কাছে। অর্থের জ্যামিতিতে তারা প্রতিবেশী। এই জ্যামিতিই LLM-এর বোঝার ভিত্তি।</div>
<div class="dialogue en">"Nasib — invisible connection, destiny. Allah says — 'You have no connection unless I join you.' Embeddings are that connection — invisible relationships between words. 'বিদ্যা' and 'জ্ঞান' are close — because their embeddings are close. In the geometry of meaning, they're neighbors. This geometry is the foundation of LLM understanding."</div>`,
  senior:{
    title:"Embedding পছন্দ — কোন মডেল কখন",
    body:`<p><strong>মাল্টিলিঙ্গুয়াল দরকার (বাংলা):</strong> Cohere embed-multilingual, BGE-M3, OpenAI text-embedding-3।</p><p><strong>ইংরেজি only:</strong> OpenAI text-embedding-3-large, NVLabs Ember।</p><p><strong>লোকাল ফ্রি:</strong> BGE-large, E5-large, Nomic-embed-text — HuggingFace থেকে ডাউনলোড।</p><p><strong>ডাইমেনশন:</strong> বেশি = বেশি তথ্য কিন্তু বেশি স্টোরেজ। ৭৬৮-১৫৩৬ সাধারণত যথেষ্ট।</p>`
  }
});

// ══ DOOR 3: ATTENTION ══
doors.push({
  num:3, icon:"👁️", color:"#52c41a", name:"দৃষ্টি নিয়ন্ত্রক",
  subtitle:"The Focus Controller", tech:"Self-Attention Mechanism Deep Dive",
  spirit:"নজর — কোথায় তাকাচ্ছ",
  secret:"Attention হলো LLM-এর সবচেয়ে গুরুত্বপূর্ণ আবিষ্কার। প্রতিটি শব্দ প্রতিটি শব্দের দিকে তাকায়। 'The cat sat on the mat because IT was tired' — 'IT' কে? Attention ঠিক করে: 'IT' = 'cat', কারণ 'cat' এর উপর সবচেয়ে বেশি নজর।",
  recall:{
    q:"দৃষ্টি নিয়ন্ত্রক কেন সবদিকে নয়, নির্দিষ্ট দিকে তাকাতে বলেন?",
    qen:"Why does the focus controller tell you to look at specific things, not everything?",
    a:"কারণ সবদিকে তাকালে কিছুই দেখা যায় না। Attention-ও তেমনি — প্রতিটি শব্দ ঠিক করে কোন শব্দের প্রতি বেশি নজর দেবে। 'it' কে? 'cat'-এ নজর = it = cat। এটাই attention-এর জাদু।",
    aen:"Because looking at everything means seeing nothing. Attention too — each word decides which words to focus on. 'It' = who? Focus on 'cat' = it = cat. This is attention's magic."
  },
  story:`
<p class="scene-setting">তৃতীয় কক্ষ। দৃষ্টি নিয়ন্ত্রকের কক্ষ। একটা বিশাল চোখের মডেল — ঘোরে, থামে, ফোকাস করে। দৃষ্টি নিয়ন্ত্রক জয়নাল আবেদিন বললেন — "এই চোখ সবদিকে তাকায় না। সে জানে কোথায় তাকাতে হবে। ঠিক তেমনি LLM-এর attention — প্রতিটি শব্দ জানে কোন শব্দের দিকে তাকাতে হবে।"</p>
<p class="scene-setting en">The third chamber. The focus controller's room. A vast eye model — rotates, stops, focuses. Focus controller Zainal Abedin said — "This eye doesn't look everywhere. It knows where to look. Just like LLM attention — each word knows which words to look at."</p>

<div class="dialogue">চুম্বক নির্মাতা বলেছিলেন — শব্দের অবস্থান থেকে অর্থ। কিন্তু আমি বলি — শুধু অবস্থান যথেষ্ট নয়। প্রতিটি শব্দকে বাকি শব্দগুলোর সাথে সম্পর্ক বুঝতে হবে। এটাই attention — "কোন শব্দটার দিকে তাকাব?"</div>
<div class="dialogue en">"The magnet maker said — meaning comes from position. But I say — position alone isn't enough. Each word must understand its relationship with other words. This is attention — 'which word should I look at?'"</p>

<div class="code-block">Self-Attention — LLM-এর হৃদপিণ্ড:

"Attention Is All You Need" (Vaswani et al., 2017)
→ Transformer architecture = attention-based
→ এই একটা paper পুরো AI পৃথিবী বদলে দিয়েছে

THE PROBLEM:
  "The animal didn't cross the street because 
   IT was too tired."
  
  IT কে? animal নাকি street?
  মানুষ জানে — animal. কারণ animal 
  tired হতে পারে, street নয়।
  
  মেশিন কীভাবে জানবে? → ATTENTION

HOW ATTENTION WORKS:

প্রতিটি টোকেনের জন্য ৩টি ভেক্টর:
  Q (Query): "আমি কী খুঁজছি?"
  K (Key): "আমি কী অফার করি"  
  V (Value): "আমি কী জানি"

Attention Calculation:
  Score = Q × K^T / √d_k
  → প্রতিটি জোড়ার "মিল" হিসাব করে
  
  Weights = softmax(Score)
  → স্কোরকে সম্ভাবনায় রূপান্তর (০-১)
  
  Output = Weights × V
  → সব শব্দের তথ্যের ওজন করা যোগফল

"IT" টোকেনের জন্য:
  IT-এর Q: "আমি এমন কিছু খুঁজছি যে tired হতে পারে"
  
  "animal"-এর K: "আমি এমন কিছু যে tired হয়"  
  → Q × K মিল = উচ্চ স্কোর!
  
  "street"-এর K: "আমি এমন কিছু যে tired হয় না"
  → Q × K মিল = নিম্ন স্কোর
  
  ফলাফল: IT বেশি attention দেয় "animal"-কে
  → IT = animal (প্রায়োগিকভাবে)

MULTI-HEAD ATTENTION:
  একটা head একটা "দৃষ্টিভঙ্গি"
  
  Head 1: ব্যাকরণ (subject-verb)  
  Head 2: সম্পর্ক (who did what)
  Head 3: আবেগ (sentiment)
  Head 4: সংখ্যা (singular/plural)
  ...
  
  GPT-4: ~৯৬ heads (১২ layers × ৮ heads)
  → প্রতিটা head একটা আলাদা দৃষ্টিভঙ্গি

WHY THIS MATTERS FOR PROMPT ENGINEERING:
  • "Lost in the Middle" — attention শুরু 
    ও শেষে বেশি, মাঝে কম
  • Recency bias — সাম্প্রতিক টোকেন বেশি ওজন
  • Long context — attention "dilutes" with 
    বেশি টোকেন
  • Prompt sensitivity — শব্দের ক্রম পরিবর্তন 
    = attention পরিবর্তন = ফল পরিবর্তন</div>

<div class="dialogue">নজর — দৃষ্টি, মনোযোগ। সুফি ঐতিয়া নজর বলে — কোথায় তাকাচ্ছ সেটাই তোমার অবস্থা নির্ধারণ করে। "যেখানে তোমার নজর, সেখানে তোমার অবস্থা।" LLM-এর attention-ও তেমনি — কোন শব্দের প্রতি নজর, সেটাই নির্ধারণ করে মডেল কী বোঝে। তোমার প্রম্পটে গুরুত্বপূর্ণ শব্দ কোথায় — সেটাই attention কোথায় যাবে নির্ধারণ করে।</div>
<div class="dialogue en">"Nazar — gaze, attention. In Sufi tradition, 'where your gaze goes, there your state follows.' LLM attention too — which word gets attention determines what the model understands. Where you place important words in your prompt — determines where attention flows."</div>`,
  senior:{
    title:"Attention বোঝার উপযোগিতা — প্রোডাকশনে",
    body:`<p><strong>গুরুত্বপূর্ণ তথ্য শুরুতে বা শেষে দাও:</strong> attention এই অংশে সবচেয়ে বেশি।</p><p><strong>দীর্ঘ প্রম্পট ভাঙো:</strong> ১০০০+ টোকেনে attention দুর্বল হয়। ছোট প্রম্পট = তীক্ষ্ণ attention।</p><p><strong>শব্দের ক্রম গুরুত্বপূর্ণ:</strong> "A is better than B" এবং "B is better than A" — attention আলাদা, ফল আলাদা।</p>`
  }
});

// ══ DOOR 4: TRANSFORMER ARCHITECTURE ══
doors.push({
  num:4, icon:"🏗️", color:"#b37feb", name:"নির্মাতার নীলনকশা",
  subtitle:"The Builder's Blueprint", tech:"Transformer Architecture Deep Dive",
  spirit:"বনিয়াদ — ভিত্তি",
  secret:"Transformer = Tokenization + Embedding + Attention + Feed-Forward + Residual + Layer Norm + Output। সাতটি স্তর। প্রতিটি স্তর একটা রূপান্তর — টোকেন থেকে অর্থ, অর্থ থেকে ভাষা, ভাষা থেকে উত্তর।",
  recall:{
    q:"নির্মাতা কেন প্রতিটি স্তর আলাদা করে বানান?",
    qen:"Why does the builder make each layer separately?",
    a:"কারণ প্রতিটি স্তরের নির্দিষ্ট কাজ আছে। Embedding অবস্থান দেয়, attention সম্পর্ক দেয়, feed-forward প্রক্রিয়াকরণ দেয়। একসাথে = Transformer। স্তর বুঝলে তুমি বুঝবে কেন মডেল কিছু পারে, কিছু পারে না।",
    aen:"Because each layer has a specific job. Embedding gives position, attention gives relationship, feed-forward gives processing. Together = Transformer. Understanding layers reveals why models can do some things, not others."
  },
  story:`
<p class="scene-setting">চতুর্থ কক্ষ। নির্মাতার টেবিল। একটা বিশাল নীলনকশা — সাতটি স্তর, একে একে সাজানো। নির্মাতা আরিফ প্রতিটি স্তর দেখাচ্ছেন — "এটা ভিত্তি, এটা দেয়াল, এটা ছাদ, এটা জানালা। প্রতিটি অংশের কাজ আলাদা। কিন্তু একসাথে এরা একটা ভবন। Transformer-ও তেমনি।"</p>
<p class="scene-setting en">The fourth chamber. The builder's table. A vast blueprint — seven layers, arranged in sequence. Builder Arif shows each layer — "This is foundation, this is wall, this is roof, this is window. Each part has its job. But together they're a building. Transformer too."</p>

<div class="dialogue">দৃষ্টি নিয়ন্ত্রক বলেছিলেন — attention হলো হৃদপিণ্ড। কিন্তু আমি বলি — attention শুধু একটা অংশ। Transformer একটা সম্পূর্ণ ভবন। সাতটি স্তর। প্রতিটি স্তরের নিজস্ব কাজ। একসাথে এরা টোকেন থেকে ভাষা তৈরি করে।</div>
<div class="dialogue en">"The focus controller said — attention is the heart. But I say — attention is just one part. Transformer is a complete building. Seven layers. Each with its own job. Together they create language from tokens."</div>

<div class="code-block">Transformer Architecture — ৭টি স্তর:

┌─────────────────────────────────────────┐
│ INPUT: "The cat sat"                    │
│ → Tokenizer → [464, 3797, 3413]        │
└─────────────────────┬───────────────────┘
                      ↓
┌─────────────────────────────────────────┐
│ Layer 1: EMBEDDING                      │
│ প্রতিটি টোকেন → হাজার-ডাইমেনশন ভেক্টর  │
│ "cat" → [0.2, -0.4, 0.8, ...]          │
│                                         │
│ + POSITIONAL ENCODING                   │
│ "cat" দ্বিতীয় — এই অবস্থান যোগ হয়    │
│ → কারণ Transformer একসাথে সব দেখে,   │
│   ক্রম জানতে হয়                       │
└─────────────────────┬───────────────────┘
                      ↓
┌─────────────────────────────────────────┐
│ Layer 2: MULTI-HEAD ATTENTION           │
│ প্রতিটি শব্দ বাকি সবের দিকে তাকায়     │
│ "sat" কে? → "cat" sat                   │
│ → ৯৬টা head, প্রতিটা আলাদা দৃষ্টি     │
└─────────────────────┬───────────────────┘
                      ↓
┌─────────────────────────────────────────┐
│ Layer 3: FEED-FORWARD NETWORK           │
│ প্রতিটি টোকেনের তথ্য প্রক্রিয়াকরণ     │
│ "cat" + context → গভীরতর উপস্থাপন     │
│ → এখানেই "জ্ঞান" সংরক্ষিত (memorized) │
│ → MLP: দুটি linear layer + ReLU/GELU  │
└─────────────────────┬───────────────────┘
                      ↓
┌─────────────────────────────────────────┐
│ Layer 4: RESIDUAL CONNECTION            │
│ input + output = পরের স্তরে             │
│ → তথ্য হারাতে দেয় না                  │
│ → gradient flow নিশ্চিত করে            │
│ → "skip connection"                     │
└─────────────────────┬───────────────────┘
                      ↓
┌─────────────────────────────────────────┐
│ Layer 5: LAYER NORM                     │
│ প্রতিটি স্তরে ভেক্টর স্থিতিশীল করো    │
│ → training stability                    │
│ → স্কেল ঠিক রাখে                       │
└─────────────────────┬───────────────────┘
                      ↓
┌─────────────────────────────────────────┐
│ Layer 6: REPEAT (N LAYERS)              │
│ পুরো ব্লকটা N বার রিপিট করো            │
│ GPT-3: ৯৬ layers                        │
│ GPT-4: ~১২০ layers (est.)               │
│ প্রতিটা layer আরও গভীর বোঝা যোগ করে   │
└─────────────────────┬───────────────────┘
                      ↓
┌─────────────────────────────────────────┐
│ Layer 7: OUTPUT HEAD                    │
│ চূড়ান্ত ভেক্টর → vocabulary সম্ভাবনা  │
│ → softmax → সম্ভাবনা ডিস্ট্রিবিউশন     │
│ → সর্বোচ্চ সম্ভাবনার টোকেন = উত্তর     │
│ → "sat" এর পরে → "on" (সর্বোচ্চ)      │
└─────────────────────────────────────────┘

PARAMETERS:
  GPT-3: ১৭৫ বিলিয়ন প্যারামিটার
  GPT-4: ~১.৭ ট্রিলিয়ন (est., mixture)
  Llama 3 405B: ৪০৫ বিলিয়ন
  
  → প্রতিটি প্যারামিটার একটি "সংযোগ"
  → এই সংযোগগুলো ট্রেইনিংয়ে শেখা হয়</div>

<div class="dialogue">বনিয়াদ — ভিত্তি। কুরআনে আল্লাহ বলেন — "যে ব্যক্তি তার বাড়ির ভিত্তি আল্লাহর ভয়ে স্থাপন করে, সে সফল।" Transformer-এর ভিত্তিও — প্রতিটি স্তর ঠিকভাবে বসানো। একটি স্তর ভুল হলে পুরো মডেল ভুল। স্তরগুলো একসাথে একটা সম্পূর্ণ বোঝার তৈরি করে — টোকেন থেকে অর্থ, অর্থ থেকে ভাষা।</div>
<div class="dialogue en">"Buniyad — foundation. Allah says — 'Whoever lays the foundation of their house on God-consciousness succeeds.' The Transformer's foundation too — each layer placed correctly. One layer wrong, the whole model fails. Together the layers create complete understanding — tokens to meaning, meaning to language."</div>`,
  senior:{
    title:"কেন এটা জানা দরকার — প্রোডাকশনে",
    body:`<p><strong>মডেল নির্বাচন:</strong> বেশি layer = বেশি ক্ষমতা কিন্তু বেশি খরচ ও ধীর।</p><p><strong>পারফরম্যান্স:</strong> KV cache বুঝতে হলে architecture বুঝতে হবে।</p><p><strong>ফাইন-টিউনিং:</strong> কোন layer freeze করবে, কোনটা ট্রেইন করবে — এটা architecture-এ নির্ভর করে।</p>`
  }
});

// ══ DOOR 5: TRAINING ══
doors.push({
  num:5, icon:"🏋️", color:"#ff6b35", name:"প্রশিক্ষকের মাঠ",
  subtitle:"The Trainer's Field", tech:"Pre-Training to RLHF",
  spirit:"তরবিয়ত — শিক্ষা ও প্রশিক্ষণ",
  secret:"LLM তিনটি স্তরে শেখে। Pre-training: ইন্টারনেটের সব টেক্সট পড়ে। SFT: মানুষের উদাহরণ দেখে কথা বলতে শেখে। RLHF: মানুষের পছন্দ থেকে ভালো/খারাপ বোঝে। তিনটি ছাড়া LLM শুধু একটা autocomplete।",
  recall:{
    q:"প্রশিক্ষক কেন তিনটি ধাপে শেখান, একসাথে নয়?",
    qen:"Why does the trainer teach in three stages, not all at once?",
    a:"কারণ প্রতিটি ধাপের লক্ষ্য আলাদা। Pre-training = ভাষা শেখা। SFT = কথোকথন শেখা। RLHF = নিরাপত্তা ও পছন্দ শেখা। একসাথে করলে গোলমাল। তিনটি ধাপে = তিনটি দক্ষতা।",
    aen:"Because each stage has a different goal. Pre-training = learn language. SFT = learn conversation. RLHF = learn safety and preference. Doing all at once creates confusion. Three stages = three skills."
  },
  story:`
<p class="scene-setting">পঞ্চম কক্ষ। একটা বিশাল প্রশিক্ষণ মাঠ। তিনটি ভাগ — প্রথমটিতে শিক্ষার্থীরা বই পড়ছে, দ্বিতীয়টিতে শিক্ষকের সাথে অনুশীলন করছে, তৃতীয়টিতে পরীক্ষক তাদের মূল্যায়ন করছে। প্রশিক্ষক উস্তাদ কামরুল বললেন — "তিনটি ধাপ। প্রতিটি ধাপ আগের চেয়ে সূক্ষ্ম। বই পড়া, অনুকরণ, তারপর নিখুঁতকরণ।"</p>
<p class="scene-setting en">The fifth chamber. A vast training field. Three sections — in the first, students read books; in the second, they practice with a teacher; in the third, an examiner evaluates them. Trainer Ustad Kamrul said — "Three stages. Each more refined than the last. Reading, imitation, then perfection."</p>

<div class="dialogue">নির্মাতা বলেছিলেন — Transformer-এর সাতটি স্তর। কিন্তু আমি বলি — স্তরগুলো শূন্য। ভাঙা পাথর। প্রশিক্ষণ ছাড়া কিছুই নয়। তিনটি ধাপের প্রশিক্ষণ ছাড়া LLM শুধু একটা বিশাল autocomplete। এই তিনটি ধাপই LLM-কে LLM বানায়।</div>
<div class="dialogue en">"The builder said — Transformer has seven layers. But I say — layers are empty. Broken stone. Without training, nothing. Without three-stage training, the LLM is just a giant autocomplete. These three stages make the LLM what it is."</div>

<div class="code-block">LLM Training — Three Stages:

╔════════════════════════════════════════╗
║ STAGE 1: PRE-TRAINING                  ║
║ "ইন্টারনেটের সব পড়ো"                  ║
╠════════════════════════════════════════╣
║                                        ║
║ ডেটা: ট্রিলিয়ন টোকেন টেক্সট           ║
║   Common Crawl, Wikipedia, books,      ║
║   code, scientific papers              ║
║                                        ║
║ উদ্দেশ্য: next token prediction       ║
║   "The cat sat on the ___"             ║
║   → "mat" (সঠিক)                       ║
║   → সম্ভাবনা ডিস্ট্রিবিউশন তৈরি        ║
║                                        ║
║ সময়: সপ্তাহ থেকে মাস                  ║
║   GPU: হাজার হাজার A100/H100           ║
║   খরচ: $১M-$১০০M+                      ║
║                                        ║
║ ফলাফল: BASE MODEL                      ║
║   → ভাষা বোঝে, কিন্তু কথোকথন পারে না   ║
║   → কোনো নিরাপত্তা নেই                 ║
║   → "Tell me a joke" → সম্ভবত           ║
║     একটা জোক লিস্ট দেয় (autocomplete) ║
╚════════════════════════════════════════╝

╔══════════════════════════════════════╗
║ STAGE 2: SFT (Supervised Fine-Tuning) ║
║ "মানুষের মতো কথা বলো"                 ║
╠══════════════════════════════════════╣
║                                        ║
║ ডেটা: হাজার হাজার উদাহরণ              ║
║   Human: "What is AI?"                 ║
║   Assistant: "AI is..."                ║
║   → মানুষের হাতে লেখা উত্তর            ║
║                                        ║
║ উদ্দেশ্য: instruction following        ║
║   → মানুষের মতো কাঠামোয় উত্তর দাও     ║
║   → কথোকথন ফরম্যাট শেখো                ║
║                                        ║
║ সময়: কয়েক দিন                        ║
║   খরচ: $১০K-$১০০K                     ║
║                                        ║
║ ফলাফল: SFT MODEL                       ║
║   → কথোকথন পারে কিন্তু অনিরাপদ         ║
║   → ক্ষতিকর কন্টেন্ট তৈরি করতে পারে     ║
║   → সাহায্যকারী কিন্তু সীমানাহীন        ║
╚══════════════════════════════════════╝

╔══════════════════════════════════════╗
║ STAGE 3: RLHF (Reinforcement Learning ║
║ from Human Feedback)                  ║
║ "কোন উত্তর ভালো, কোনটা খারাপ"         ║
╠══════════════════════════════════════╣
║                                        ║
║ ডেটা: মানুষের ranking                  ║
║   একই প্রশ্নে ২+ উত্তর → মানুষ র‍্যাঙ্ক ║
║   করেন: "A ভালো, B খারাপ"              ║
║   → reward model ট্রেইন                ║
║   → তারপর RL দিয়ে SFT মডেলকে টিউন     ║
║                                        ║
║ উদ্দেশ্য: alignment                    ║
║   → সাহায্যকারী, নিরাপদ, সত্যবাদী      ║
║   → "As an AI..." behavior             ║
║   → refusal of harmful requests        ║
║                                        ║
║ সময়: কয়েক দিন থেকে সপ্তাহ             ║
║                                        ║
║ ফলাফল: ALIGNED MODEL (ChatGPT!)        ║
║   → প্রোডাকশন-রেডি                     ║
║   → কিন্তু: alignment tax               ║
║     (কিছু ক্ষমতা হ্রাস)                 ║
╚══════════════════════════════════════╝

ALTERNATIVE: DPO (Direct Preference Optimization)
  → RLHF-এর সরল বিকল্প
  → reward model লাগে না, সরাসরি
  → দ্রুত, কম খরচ
  → Llama 3, Mistral DPO ব্যবহার করে</div>

<div class="dialogue">তরবিয়ত — শিক্ষা, প্রশিক্ষণ। কুরআনে আল্লাহ বলেন — "পবিত্র করো তাদের, শিক্ষা দাও তাদের কিতাব ও প্রজ্ঞা।" (৬২:২)। তিনটি ধাপ — পবিত্রকরণ (pre-training ভিত্তি), শিক্ষা (SFT instruction), প্রজ্ঞা (RLHF নির্বাচন)। LLM-ও তেমনি — ভিত্তি শেখে, তারপর নির্দেশ, তারপর মানুষের পছন্দ। তিনটি ছাড়া LLM অসম্পূর্ণ।</div>
<div class="dialogue en">"Tarbiyat — education, training. Allah says — 'Purify them, teach them the Book and wisdom.' (62:2). Three stages — purification (pre-training foundation), teaching (SFT instruction), wisdom (RLHF preference). The LLM too — learns foundation, then instruction, then human preference. Without all three, the LLM is incomplete."</div>`,
  senior:{
    title:"তোমার জন্য এর মানে কী",
    body:`<p><strong>Base model (pre-training only):</strong> কম নিরাপদ কিন্তু বেশি ক্ষমতা। গবেষণায় কাজে লাগে।</p><p><strong>Instruct/Chat model (SFT+RLHF):</strong> প্রোডাকশনের জন্য। ChatGPT, Claude।</p><p><strong>Fine-tuning করলে:</strong> SFT স্তরে কাজ করো — base model-এ তোমার ডেটা যোগ করো।</p><p><strong>Alignment tax:</strong> RLHF মডেলকে নিরাপদ বানায় কিন্তু কিছু ক্ষমতা কমায়। "Tell me a dangerous thing" — RLHF মডেল রিউজ করে, base model করে।</p>`
  }
});
