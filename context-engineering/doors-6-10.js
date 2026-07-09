// ════════════════════════════════════════
// দৃষ্টির ক্যানভাস — DOORS 6-10
// Context Engineering: Compression → Architecture
// ════════════════════════════════════════

// ══ DOOR 6: CONTEXT COMPRESSION ══
doors.push({
  num:6, icon:"⚡", color:"#b37feb", name:"সংক্ষেপকারীর যন্ত্র",
  subtitle:"The Compressor", tech:"Context Compression & Summarization",
  spirit:"ইখলাস — সারমর্মে নিবিড়",
  secret:"কন্টেক্সট বড় হলে মডেল হারিয়ে যায়। সমাধান — সংক্ষেপ করো। কিন্তু সংক্ষেপ বুদ্ধিহীন নয়। সারাংশ বানাও, পুরোনো কথোপকথন সংক্ষিপ্ত করো, সিরিয়াল সামারি রাখো। কম টোকেন, বেশি অর্থ।",
  recall:{
    q:"সংক্ষেপকারী কেন পুরো বই নয়, সারাংশ রাখেন?",
    qen:"Why does the compressor keep summaries, not whole books?",
    a:"কারণ সারাংশ = সারমর্ম, কম স্থান। Context-ও তেমনি — পুরো কথোপকথন না রেখে সারাংশ রাখো। কম টোকেন, কিন্তু মূল তথ্য সংরক্ষিত। এটাই compression।",
    aen:"Because summaries = essence, less space. Context too — keep summaries, not entire conversations. Fewer tokens, but core information preserved. This is compression."
  },
  story:`
<p class="scene-setting">ষষ্ঠ দৃষ্টি। একটা অদ্ভুত যন্ত্র — বই ঢুকিয়ে দিলে সারাংশ বের হয়। সংক্ষেপকারী মাহিয়া বললেন — "পুরো বই রাখার স্থান নেই। কিন্তু সারাংশ রাখা যায়। প্রতিটি অধ্যায়ের সারমর্ম। কম স্থান, বেশি অর্থ।" তিনি একটা ৫০০-পৃষ্ঠার বই ঢুকিয়ে দিলেন — বেরিয়ে এলো ৩ পৃষ্ঠার সারাংশ। "এটাই compression।"</p>
<p class="scene-setting en">The sixth sight. A strange machine — insert a book, a summary comes out. Compressor Mahiya said — "No space for whole books. But summaries fit. Each chapter's essence. Less space, more meaning." She inserted a 500-page book — out came a 3-page summary. "This is compression."</p>

<div class="dialogue">বিচারক বলেছিলেন — reranking দিয়ে precision বাড়াও। কিন্তু আমি বলি — precision এক জিনিস, context management আরেক জিনিস। কথোপকথন দীর্ঘ হলে context window পূর্ণ হয়। পুরোনো কথা কী করবে? মুছবে? না — সংক্ষেপ করবে। কম টোকেনে মূল তথ্য রাখবে।</div>
<div class="dialogue en">"The judge said — increase precision with reranking. But I say — precision is one thing, context management another. Long conversations fill the context window. What to do with old messages? Delete? No — compress. Keep core info in fewer tokens."</div>

<div class="code-block">Context Compression — Less Tokens, More Meaning:

৩টি COMPRESSION STRATEGY:

১. CONVERSATION SUMMARIZATION
  দীর্ঘ কথোপকথনে পুরোনো messages → সারাংশ
  
  Before (raw):
    User: "I'm building a RAG system with 
          OpenAI and Pinecone"
    AI: "Great! You'll need embeddings..."
    User: "What chunk size?"
    AI: "Start with 512 tokens..."
    User: "What embedding model?"
    AI: "text-embedding-3-large..."
    [৫০০ tokens total]
  
  After (compressed):
    [Summary: User is building RAG with 
     OpenAI+Pinecone. Discussed chunk size 
     (512 tokens recommended) and embedding 
     model (text-embedding-3-large).]
    [৮০ tokens — ৮৪% reduction!]

২. DOCUMENT COMPRESSION
  Retrieved docs → শুধু প্রাসঙ্গিক অংশ
  
  Before: গোটা ৫০০০-token ডকুমেন্ট
  After: LLM দিয়ে প্রাসঙ্গিক অংশ বাছো 
        → ৫০০ tokens
  → "LongLLMLingua" / "LLMLingua" techniques

৩. SERIAL SUMMARY (Rolling Memory)
  প্রতি N turns-এ পুরোনো কথা সারাংশ করো:
  
  Turn 1-5: পূর্ণ রাখো
  Turn 6: Turn 1-5 → summary
  Turn 6-10: পূর্ণ রাখো  
  Turn 11: summary + Turn 6-10 → new summary
  ...
  → সবসময় সাম্প্রতিক context পূর্ণ, 
    পুরোনো = compressed

IMPLEMENTATION:

  LangChain: ConversationSummaryMemory
  LlamaIndex: ChatSummaryMemoryBuffer
  
  Custom:
    def compress_context(messages, max_tokens):
        if token_count(messages) > max_tokens:
            old = messages[:-5]
            recent = messages[-5:]
            summary = llm.summarize(old)
            return [summary_msg] + recent
        return messages

CONTEXT WINDOW ECONOMICS WITH COMPRESSION:

  Without compression:
    50-turn conversation = ১০,০০০+ tokens
    → প্রতি turn-এ পুরো ১০K পাঠাও
    → ৫০ turns × ১০K avg = ৫০০K total tokens
    → $২.৫০ per conversation (GPT-4o)
  
  With rolling summary:
    50-turn conversation = ২,০০০ avg tokens
    → ৫০ turns × ২K avg = ১০০K total tokens
    → $০.৫০ per conversation
    → ৮০% cost reduction!</div>

<div class="dialogue">ইখলাস — sincerity, purity, essence। সুফি ঐতিয়া ইখলাস হলো — কাজের সারমর্ম, বাড়াবাড়ি ছাড়া। কন্টেক্সট কম্প্রেশনও তেমনি — অপ্রয়োজনীয় শব্দ ছাড়া, সারমর্ম রাখা। কম টোকেন, বেশি অর্থ। ইখলাস ছাড়া ইবাদত গ্রহণযোগ্য নয়। কম্প্রেশন ছাড়া context পরিচালনাযোগ্য নয়।</div>
<div class="dialogue en">"Ikhlas — sincerity, purity, essence. In Sufi tradition, ikhlas is the essence of action, without excess. Context compression too — keeping the essence, without unnecessary words. Fewer tokens, more meaning. Without ikhlas, worship isn't accepted. Without compression, context isn't manageable."</div>`,
  senior:{
    title:"Compression Strategy — কখন কী",
    body:`<p><strong>Short chat (< ৪K tokens):</strong> কোনো compression লাগে না। পূর্ণ context রাখো।</p><p><strong>Medium (৪K-৩২K):</strong> পুরোনো messages সারাংশ করো। সাম্প্রতিক ৫-১০ পূর্ণ রাখো।</p><p><strong>Long (৩২K+):</strong> সিরিয়াল সামারি + document extraction। শুধু প্রাসঙ্গিক অংশ রাখো।</p><p><strong>LLMLingua:</strong> prompt-এর অপ্রয়োজনীয় টোকেন মুছে ফেলো — ২-৫x কম্প্রেশন, কোনো নির্ভুলতা হ্রাস ছাড়া।</p>`
  }
});

// ══ DOOR 7: LONG CONTEXT VS RAG ══
doors.push({
  num:7, icon:"⚖️", color:"#5b9eff", name:"তুলনার কক্ষ",
  subtitle:"The Comparison Chamber", tech:"Long Context vs RAG",
  spirit:"কিয়াস — তুলনামূলক সিদ্ধান্ত",
  secret:"Gemini 1M context = পুরো বই একসাথে। কিন্তু দ্রুত, সস্তা, নির্ভুল? নয়। Long context = সুবিধা (সরল) কিন্তু অসুবিধা (খরচ, attention dilution)। RAG = জটিল কিন্তু সস্তা, সূক্ষ্ম। সঠিক সিদ্ধান্ত = কাজ অনুযায়ী।",
  recall:{
    q:"তুলনার কক্ষে কেন একটা পথ নয়, দুটো তুলনা করা হয়?",
    qen:"Why compare two paths in the comparison chamber, not just one?",
    a:"কারণ প্রতিটা পথের সুবিধা ও অসুবিধা আছে। Long context = সরল কিন্তু ব্যয়বহুল। RAG = জটিল কিন্তু সস্তা। কাজ অনুযায়ী সিদ্ধান্ত নিতে হয়। এটাই engineering judgment।",
    aen:"Because each path has pros and cons. Long context = simple but expensive. RAG = complex but cheap. Must decide per task. This is engineering judgment."
  },
  story:`
<p class="scene-setting">সপ্তম দৃষ্টি। একটা কক্ষে দুটি দরজা। একটায় লেখা: "সব একসাথে" (Long Context)। অন্যটায়: "প্রয়োজন মাফিক" (RAG)। কক্ষরক্ষক তামিম বললেন — "দুটোই সঠিক। কিন্তু কখন কোনটা? এটাই সিদ্ধান্ত। সব কাজে এক পথ কাজ করে না।"</p>
<p class="scene-setting en">The seventh sight. A room with two doors. One reads: "All at once" (Long Context). Other: "As needed" (RAG). Keeper Tamim said — "Both are right. But when which? That's the decision. One path doesn't work for all tasks."</p>

<div class="dialogue">সংক্ষেপকারী বলেছিলেন — compression দিয়ে context কমাও। কিন্তু আমি বলি — আরেকটা প্রশ্ন আছে। কখন context-এ সব রাখব, কখন RAG দিয়ে শুধু প্রয়োজনীয় আনব? Gemini ১M context দিচ্ছে — পুরো বই দাও। কিন্তু ভালো? সস্তা? নির্ভুল? সিদ্ধান্ত নিতে হয়।</div>
<div class="dialogue en">"The compressor said — reduce context with compression. But I say — there's another question. When to keep everything in context, when to use RAG for only what's needed? Gemini offers 1M context — give the whole book. But is it better? Cheaper? More accurate? Must decide."</div>

<div class="code-block">Long Context vs RAG — The Decision Matrix:

              LONG CONTEXT         RAG
              (stuff everything)   (retrieve needed)
─────────────┼─────────────────────┼──────────────────
SIMPLICITY   │ ✅ সরল — কোনো       │ ❌ জটিল — pipeline
             │    pipeline নেই     │    লাগে (embed, 
             │                     │    search, rerank)
─────────────┼─────────────────────┼──────────────────
COST         │ ❌ ব্যয়বহুল —       │ ✅ সস্তা — শুধু 
             │    প্রতি কলে পুরো   │    relevant chunks
             │    context খরচ      │    (৫-১০K tokens)
─────────────┼─────────────────────┼──────────────────
LATENCY      │ ❌ ধীর — ১M tokens  │ ✅ দ্রুত — ছোট 
             │    process করতে     │    context = দ্রুত
             │    সময় লাগে         │    response
─────────────┼─────────────────────┼──────────────────
ACCURACY     │ ⚠️ মিশ্র — attention │ ✅ সূক্ষ্ম — 
             │    dilution. মাঝে   │    শুধু relevant
             │    তথ্য হারায়       │    info, focus তীক্ষ্ণ
─────────────┼─────────────────────┼──────────────────
CITATION     │ ❌ কঠিন — কোথা থেকে │ ✅ সহজ — প্রতিটা 
             │    এলো বলা কঠির     │    chunk-এ source
─────────────┼─────────────────────┼──────────────────
UPDATES      │ ❌ প্রতি update-এ   │ ✅ সহজ — নতুন 
             │    পুরো context      │    doc → embed → 
             │    পুনরায় পাঠাও     │    add to DB
─────────────┼─────────────────────┼──────────────────
SCALE        │ ❌ সীমিত — ১M-২M   │ ✅ অসীম — vector
             │    tokens পর্যন্ত    │    DB billion docs
─────────────┼─────────────────────┼──────────────────
MULTI-HOP    │ ✅ ভালো — সব এক    │ ⚠️ কঠিন — একাধিক
             │    জায়গায়, সংযোগ  │    retrieval round
             │    করা সহজ           │    লাগতে পারে

DECISION RULES:

USE LONG CONTEXT WHEN:
  • ডকুমেন্ট < ৫০K tokens (এক paper, এক contract)
  • Multi-hop reasoning দরকার (এক জায়গা থেকে 
    অন্য জায়গায় সংযোগ)
  • Simplicity গুরুত্বপূর্ণ (prototyping, demo)
  • ডকুমেন্ট কম বদলায়
  
USE RAG WHEN:
  • ডকুমেন্ট > ৫০K tokens (knowledge base, wiki)
  • ডকুমেন্ট বাড়ে (নতুন docs যোগ হয়)
  • Citation দরকার (আইনি, চিকিৎসা)
  • Cost গুরুত্বপূর্ণ (প্রতি কলে পুরো context নয়)
  • Multiple users, multiple queries

HYBRID (best of both):
  RAG for initial retrieval (top-20 chunks)
  → Long context model-কে দাও
  → Model cross-references, synthesizes
  → সবচেয়ে ভালো ফল — সূক্ষ্ম + comprehensive</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">⚠️ ভুল পছন্দ</div>১০,০০০ ডকুমেন্ট (৫০M tokens) — সব Gemini ১M-এ দাও। অসম্ভব। বা ৫০ ডকুমেন্ট (২৫০K tokens) — প্রতি কলে $১.২৫। অবাস্তব। বা একটা ছোট ডকুমেন্ট (৫K) — জটিল RAG pipeline বানাও। অতিরিক্ত।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক পছন্দ</div>৫০K+ knowledge base → RAG। একটা paper (১০K) → long context। একটা contract (৩০K) → long context + নির্দিষ্ট clause চাও → RAG। Hybrid সবচেয়ে ভালো — RAG retrieve, long context synthesize।</div>
</div>

<div class="dialogue">কিয়াস — comparison, analogy। ইসলামী আইনে কিয়াস হলো — নতুন পরিস্থিতিতে পূর্ববর্তী নীতি প্রয়োগ করা। Long context নাকি RAG — এই সিদ্ধান্তও কিয়াস। প্রতিটা পরিস্থিতি আলাদা। প্রতিটার জন্য সঠিক পথ আলাদা। যে কিয়াস করতে পারে, সে সঠিক সিদ্ধান্ত নেয়। যে এক পথে আটকে থাকে, সে ভুল করে।</div>
<div class="dialogue en">"Qiyas — comparison, analogy. In Islamic law, qiyas is applying prior principles to new situations. Long context or RAG — this decision is qiyas. Each situation is different. Each needs the right path. One who reasons, decides correctly. One who sticks to one path, errs."</div>`,
  senior:{
    title:"Decision Framework — তোমার প্রজেক্টে",
    body:`<p><strong>প্রশ্ন ১:</strong> কত ডকুমেন্ট? <৫০K → long context। >৫০K → RAG।</p><p><strong>প্রশ্ন ২:</strong> ডকুমেন্ট বাড়ে? হ্যাঁ → RAG। না → long context।</p><p><strong>প্রশ্ন ৩:</strong> Citation দরকার? হ্যাঁ → RAG।</p><p><strong>প্রশ্ন ৪:</strong> Cost গুরুত্বপূর্ণ? হ্যাঁ → RAG (শুধু ৫-১০K পাঠাও)।</p><p><strong>প্রশ্ন ৫:</strong> Multi-hop reasoning? হ্যাঁ → long context বা hybrid।</p>`
  }
});

// ══ DOOR 8: CONVERSATION MEMORY ══
doors.push({
  num:8, icon:"🧵", color:"#f0c75e", name:"স্মৃতির সুতো",
  subtitle:"The Thread of Memory", tech:"Conversation Memory Systems",
  spirit:"হাফিজ — স্মৃতি সংরক্ষণ",
  secret:"Chatbot-এ স্মৃতি লাগে — আগে কী বলেছিলেন তা মনে রাখতে। কিন্তু পুরো কথোপকথন context-এ রাখলে window পূর্ণ। সমাধান: buffer, summary, window, entity, বা vector memory। প্রতিটার trade-off।",
  recall:{
    q:"স্মৃতির সুতো কেন কেটে ছোট করা হয়, পুরো রাখা হয় না?",
    qen:"Why is the thread of memory cut short, not kept whole?",
    a:"কারণ পুরো সুতো = অনেক জায়গা। Conversation memory-ও তেমনি — পুরো কথোপকথন রাখলে context পূর্ণ। সারাংশ, window, entity memory দিয়ে কম্প্রেস করো। কম জায়গা, মূল স্মৃতি।",
    aen:"Because the whole thread = too much space. Conversation memory too — keeping entire conversation fills context. Compress with summary, window, entity memory. Less space, core memory."
  },
  story:`
<p class="scene-setting">অষ্টম দৃষ্টি। একটা বড় ঘরে সুতোর বল — প্রতিটা বল একটা কথোপকথনের স্মৃতি। কিছু বল বড় (পুরো কথোপকথন), কিছু ছোট (সারাংশ)। স্মৃতির রক্ষক রুকইয়া বললেন — "পুরো সুতো রাখলে ঘর ভরে যায়। কিন্তু ছোট টুকরো রাখলে — কম জায়গা, কিন্তু মূল কথা মনে থাকে।"</p>
<p class="scene-setting en">The eighth sight. A large room with balls of thread — each ball a conversation's memory. Some balls large (full conversation), some small (summary). Memory keeper Ruqayya said — "Keeping whole threads fills the room. But small pieces — less space, yet key points remembered."</p>

<div class="dialogue">তুলনার কক্ষ বলেছিলেন — long context নাকি RAG। কিন্তু আমি বলি — কথোপকথনে আরেকটা সমস্যা আছে। স্মৃতি। "আগে কী বলেছিলেন?" — এটা মনে রাখতে হয়। কিন্তু কীভাবে? পুরো কথোপকথন? অসম্ভব। কিছু বাছাই করতে হয়। এটাই conversation memory।</div>
<div class="dialogue en">"The comparison chamber said — long context or RAG. But I say — conversations have another problem. Memory. 'What did we discuss earlier?' — must remember. But how? Whole conversation? Impossible. Must select. This is conversation memory."</div>

<div class="code-block">Conversation Memory — ৫ ধরন:

১. BUFFER MEMORY (সব রাখো)
  পুরো কথোপকথন context-এ রাখো
  
  ✅ সব তথ্য আছে — কিছু হারায় না
  ❌ দীর্ঘ কথোপকথনে window পূর্ণ
  ❌ প্রতি কলে বেশি tokens
  
  Use: ছোট কথোপকথন (< ১০ turns)

২. WINDOW MEMORY (শেষ N turns)
  শুধু সাম্প্রতিক N turns রাখো
  
  ✅ context ছোট, দ্রুত
  ❌ পুরোনো context হারায়
  
  Use: সাধারণ chatbot, সাম্প্রতিক context গুরুত্বপূর্ণ

৩. SUMMARY MEMORY (সারাংশ)
  পুরোনো কথা → সারাংশ → সাম্প্রতিক পূর্ণ
  
  ✅ দীর্ঘ কথোপকথন manageable
  ✅ মূল তথ্য সংরক্ষিত
  ❌ নির্দিষ্ট বিস্তারিত হারায়
  ❌ প্রতিকয় turn-এ summary LLM কল খরচ
  
  Use: দীর্ঘ সেশন, advisory chat

৪. ENTITY MEMORY (নাম, সত্তা)
  গুরুত্বপূর্ণ entities আলাদাভাবে ট্র্যাক
  
  {user_name: "Rakib", 
   project: "LedgerPilot", 
   stack: ["Python", "Django"]}
  
  ✅ নির্দিষ্ট তথ্য নিখুঁত
  ✅ ছোট context footprint
  ❌ সাধারণ context কম
  
  Use: personal assistant, CRM

৫. VECTOR MEMORY (semantic store)
  পুরোনো কথোপকথন → embeddings → vector DB
  নতুন প্রশ্ন → retrieve relevant past
  
  ✅ অসীম স্মৃতি
  ✅ প্রাসঙ্গিক পুরোনো কথা মনে করে
  ❌ জটিল implementation
  ❌ retrieve সবসময় সঠিক নয়
  
  Use: long-term assistant, knowledge worker

COMBINED MEMORY (Production):
  Entity + Window + Summary
  
  "User: Rakib, Project: LedgerPilot"
  [Summary of turns 1-20]
  [Full turns 21-25]
  
  → ছোট, সম্পূর্ণ, context-aware

FRAMEWORKS:
  LangChain: ConversationBufferMemory, 
    ConversationSummaryMemory, 
    ConversationEntityMemory
  LlamaIndex: ChatMemoryBuffer
  Custom: নিজের মেমরি ক্লাস লেখো</div>

<div class="dialogue">হাফিজ — রক্ষক, যে মুখস্থ রাখে। কুরআনের হাফিজরা পুরো কুরআন মুখস্থ রাখেন। কিন্তু কথোপকথনের হাফিজ হতে গেলে — পুরো কথোপকথন মুখস্থ রাখা যায় না। সারাংশ রাখতে হয়। গুরুত্বপূর্ণ নাম, সত্তা আলাদাভাবে রাখতে হয়। কম্প্রেস করতে হয়। এটাই স্মৃতির শিল্প।</div>
<div class="dialogue en">"Hafiz — keeper, one who memorizes. Quran hafizs memorize the entire Quran. But being a conversation hafiz — memorizing entire conversations isn't possible. Summaries must be kept. Important names, entities kept separately. Compression needed. This is the art of memory."</div>`,
  senior:{
    title:"Memory Choice — কোন chatbot-এ কোনটা",
    body:`<p><strong>সহজ chatbot:</strong> Window memory (শেষ ৫-১০ turns)।</p><p><strong>দীর্ঘ সেশন:</strong> Summary + Window।</p><p><strong>Personal assistant:</strong> Entity + Summary + Vector।</p><p><strong>Knowledge worker:</strong> Vector memory (semantic search past conversations)।</p><p><strong>প্রোডাকশন:</strong> Combined — entity tracking + rolling summary + recent window। LangChain এই combination support করে।</p>`
  }
});

// ══ DOOR 9: MULTI-HOP RETRIEVAL ══
doors.push({
  num:9, icon:"🪜", color:"#ff7b54", name:"সিঁড়ির কক্ষ",
  subtitle:"The Stairway Chamber", tech:"Multi-Hop Retrieval",
  spirit:"তাদাব্বুর — ধাপে ধাপে গভীরে",
  secret:"একটা প্রশ্নের উত্তর এক ডকুমেন্টে নেই। ধাপ ১: কে? ধাপ ২: সে কী করেছে? ধাপ ৩: কেন? Multi-hop retrieval = সিঁড়ির মতো — এক ধাপের উত্তর পরের ধাপের প্রশ্ন। এজেন্ট লুপের ভিত্তি।",
  recall:{
    q:"সিঁড়ি কেন এক ধাপে শেষ নয়, ধাপে ধাপে?",
    qen:"Why does the stairway go step by step, not all at once?",
    a:"কারণ প্রতিটা ধাপ আগের উপর দাঁড়ায়। Multi-hop retrieval-ও তেমনি — প্রথম retrieval-এর ফল দিয়ে দ্বিতীয় প্রশ্ন বানাও। ধাপে ধাপে গভীরে যাও। এক ধাপে সব উত্তর পাওয়া যায় না।",
    aen:"Because each step rests on the previous. Multi-hop retrieval too — first retrieval's result creates the second question. Step by step deeper. One step can't answer everything."
  },
  story:`
<p class="scene-setting">নবম দৃষ্টি। একটা উঁচু সিঁড়ি — এক তলা থেকে অনেক তলায়। কিন্তু সিঁড়িতে দাঁড়িয়ে আছেন সিঁড়ির রক্ষক জাকেরিয়া। "এক লাফে উপরে?" তিনি হাসলেন। "অসম্ভব। এক ধাপ। তারপর আরেকটা। প্রতিটা ধাপে তুমি দেখো — পরের ধাপ কোথায়।" এটাই multi-hop।</p>
<p class="scene-setting en">The ninth sight. A tall staircase — from first floor to many floors up. But standing on the stairs is keeper Zakariya. "One jump to the top?" He laughed. "Impossible. One step. Then another. At each step you see — where the next step is." This is multi-hop.</p>

<div class="dialogue">স্মৃতির সুতো বলেছিলেন — conversation memory পরিচালনা করো। কিন্তু আমি বলি — কিছু প্রশ্ন এত জটিল যে এক retrieval-এ উত্তর আসে না। ধাপে ধাপে যেতে হয়। "X কে?" → ডকুমেন্ট বলে Y। "Y কী করেছে?" → আরেক retrieval। "কেন?" → আরেকটা। এটাই multi-hop।</div>
<div class="dialogue en">"The thread of memory said — manage conversation memory. But I say — some questions are so complex that one retrieval can't answer. Must go step by step. 'Who is X?' → doc says Y. 'What did Y do?' → another retrieval. 'Why?' → another. This is multi-hop."</div>

<div class="code-block">Multi-Hop Retrieval — Step by Step:

SINGLE-HOP (সাধারণ):
  Query: "What is the capital of France?"
  → Retrieve → "Paris"
  → সরাসরি উত্তর

MULTI-HOP (জটিল):
  Query: "Who founded the company that 
         makes the iPhone?"
  
  Hop 1: "What company makes the iPhone?"
  → Retrieve → "Apple Inc."
  
  Hop 2: "Who founded Apple Inc.?"
  → Retrieve → "Steve Jobs, Steve Wozniak, 
    Ronald Wayne"
  
  Answer: "Steve Jobs, Steve Wozniak, and 
    Ronald Wayne founded Apple, which makes 
    the iPhone."
  
  → দুটি retrieval, প্রতিটা আগের ফলের 
    উপর নির্ভরশীল

THREE-HOP:
  Query: "What programming language was 
         used by the creator of the language 
         that Django is written in?"
  
  Hop 1: "What language is Django written in?"
  → "Python"
  Hop 2: "Who created Python?"
  → "Guido van Rossum"  
  Hop 3: "What language did Guido van 
    Rossum use before Python?"
  → "ABC, C"
  Answer: "C and ABC"

IMPLEMENTATION STRATEGIES:

১. DECOMPOSITION
  জটিল প্রশ্ন ভাঙো → সহজ sub-questions
  
  LLM: "Break this question into steps"
  → Q1, Q2, Q3
  → প্রতিটা retrieve + answer
  → synthesize final answer

২. ITERATIVE RETRIEVAL (Agent Loop)
  Thought: "I need to find X first"
  Action: retrieve(X)
  Observation: "X = Y"
  Thought: "Now I need Y's Z"
  Action: retrieve(Y, Z)  
  Observation: "Z = answer"
  Final: synthesize
  
  → ReAct framework (Door 9 of Prompt Eng)

৩. GRAPH RAG
  Entities → nodes, relationships → edges
  "X → works_at → Y → subsidiary_of → Z"
  → graph traversal for multi-hop
  
  Microsoft GraphRAG (2024):
    entities extracted → knowledge graph →
    community summaries → 
    multi-hop via graph traversal

CHALLENGES:
  • প্রতিটা hop = একটি retrieval = সময়
  • error propagation — এক hop ভুল হলে 
    পরের সব ভুল
  • cost — একাধিক LLM কল
  • when to stop — কত hop যথেষ্ট?

EVALUATION:
  HotpotQA benchmark — multi-hop QA
  MuSiQue — structured multi-hop
  ২WikiMultiHopQA — multi-domain
  
  → তোমার system এগুলোতে test করো</div>

<div class="dialogue">তাদাব্বুর — ধাপে ধাপে গভীর চিন্তা। কুরআনে আল্লাহ বলেন — "তারা কি ভেবে দেখে না উটের কীভাবে সৃষ্টি? আকাশ কীভাবে উঁচু? পাহাড় কীভাবে স্থাপিত? পৃথিবী কীভাবে বিছানো?" (৮৮:১৭-২০)। প্রতিটা প্রশ্ন আগের উপর দাঁড়ায়। Multi-hop retrieval-ও তেমনি — এক উত্তর থেকে পরের প্রশ্ন। ধাপে ধাপে গভীরে।</div>
<div class="dialogue en">"Tadabbur — step-by-step deep reflection. Allah says — 'Do they not consider the camel, how it is created? The sky, how it is raised? The mountains, how they are set? The earth, how it is spread?' (88:17-20). Each question builds on the previous. Multi-hop retrieval too — one answer leads to the next question. Step by step deeper."</div>`,
  senior:{
    title:"Multi-Hop Implementation — কোথা থেকে শুরু",
    body:`<p><strong>Simplest:</strong> LLM-কে বলো "break this into sub-questions" → প্রতিটা retrieve → synthesize।</p><p><strong>Agent:</strong> ReAct loop — Thought/Action/Observation চক্র। LangChain Agent বা LlamaIndex SubQuestionQueryEngine।</p><p><strong>Advanced:</strong> GraphRAG — knowledge graph বানাও, graph traversal দিয়ে multi-hop।</p><p><strong>Caution:</strong> max hops সেট করো (৩-৫)। অসীম hop = অসীম cost। Error propagation এড়াতে প্রতিটা hop verify করো।</p>`
  }
});

// ══ DOOR 10: PRODUCTION ARCHITECTURE ══
doors.push({
  num:10, icon:"🎯", color:"#5eead4", name:"স্থপতির সমন্বয়",
  subtitle:"The Master Synthesis", tech:"Production Context Architecture",
  spirit:"সির — সম্পূর্ণ স্থাপত্য",
  secret:"Context engineering একটা সম্পূর্ণ স্থাপত্য — budget, positioning, chunking, retrieval, reranking, compression, memory, multi-hop। সব একসাথে। একটাও বাদ দিলে কাঠামো দুর্বল। এটাই production RAG-এর ভিত্তি।",
  recall:{
    q:"স্থপতি কেন শেষে পুরো ভবন একসাথে দেখান?",
    qen:"Why does the architect show the whole building at the end?",
    a:"কারণ প্রতিটা অংশ একটা সম্পূর্ণ ভবনের অংশ। একটা দেয়াল শুধু দেয়াল নয় — ভবনের অংশ। Context engineering-ও তেমনি — নয়টি স্তর একসাথে একটা সম্পূর্ণ কাঠামো। একটাও বাদ দিলে দুর্বল।",
    aen:"Because each part belongs to a complete building. A wall isn't just a wall — part of the building. Context engineering too — nine layers together form one complete architecture. Missing one weakens it."
  },
  story:`
<p class="scene-setting">দশম দৃষ্টি। শেষ দৃষ্টি। স্থপতি ইদ্রিস দাঁড়িয়ে আছেন — সামনে একটা সম্পূর্ণ ভবনের মডেল। নয়টি তলা — প্রতিটা তলা এক একটা স্তর। "তুমি প্রতিটা তলা দেখেছ," তিনি বললেন। "এখন দেখো — সব একসাথে। একটা সম্পূর্ণ ভবন। একটা তলা বাদ দিলে ভবন দাঁড়ায় না।"</p>
<p class="scene-setting en">The tenth sight. The last. Architect Idris stands — before him a complete building model. Nine floors — each a layer. "You've seen each floor," he said. "Now see — all together. One complete building. Remove one floor, the building doesn't stand."</p>

<div class="dialogue">নয়টি দৃষ্টি পেরিয়েছ। ক্যানভাস ব্যবস্থাপক বলেছিলেন, পরিমাণ গুরুত্বপূর্ণ। মাঝখানের কক্ষ বলেছিলেন, অবস্থান গুরুত্বপূর্ণ। কাঁটার বলেছিলেন, সঠিক টুকরোয় ভাঙো। অনুসন্ধানী বলেছিলেন, hybrid retrieval। বিচারক বলেছিলেন, reranking। সংক্ষেপকারী বলেছিলেন, compression। তুলনার কক্ষ বলেছিলেন, long context নাকি RAG। স্মৃতির সুতো বলেছিলেন, conversation memory। সিঁড়ির কক্ষ বলেছিলেন, multi-hop। এখন — সব একসাথে।</div>
<div class="dialogue en">"You've passed nine sights. The canvas manager said, proportion matters. The middle chamber said, position matters. The cutter said, break into right pieces. The searcher said, hybrid retrieval. The judge said, reranking. The compressor said, compression. The comparison chamber said, long context or RAG. The thread of memory said, conversation memory. The stairway said, multi-hop. Now — all together."</div>

<div class="code-block">Production Context Architecture — Complete Pipeline:

┌──────────────────────────────────────────┐
│ USER QUERY: "How does RAG handle           │
│ multi-hop questions?"                      │
└──────────────────┬───────────────────────┘
                   ↓
┌──────────────────────────────────────────┐
│ ১. QUERY UNDERSTANDING                     │
│ • Query classification (factual? multi-hop?)│
│ • Query rewriting (optimize for retrieval) │
│ • Sub-question decomposition (if multi-hop) │
└──────────────────┬───────────────────────┘
                   ↓
┌──────────────────────────────────────────┐
│ ২. RETRIEVAL (Hybrid)                      │
│ • Dense search → top-50 (semantic)         │
│ • Sparse/BM25 search → top-50 (keyword)    │
│ • RRF fusion → top-20                      │
└──────────────────┬───────────────────────┘
                   ↓
┌──────────────────────────────────────────┐
│ ৩. RERANKING (Cross-encoder)               │
│ • Query × each doc → score                 │
│ • top-20 → top-5                           │
└──────────────────┬───────────────────────┘
                   ↓
┌──────────────────────────────────────────┐
│ ৪. CONTEXT ASSEMBLY (Positioning)          │
│ • System prompt (top — primacy)            │
│ • Less relevant docs (middle)              │
│ • Most relevant docs (bottom — recency)    │
│ • User query (very bottom)                 │
│ • Budget check (total < 32K)               │
└──────────────────┬───────────────────────┘
                   ↓
┌──────────────────────────────────────────┐
│ ৫. COMPRESSION (if needed)                 │
│ • LLMLingua — remove low-info tokens       │
│ • Extractive — keep only relevant sentences│
└──────────────────┬───────────────────────┘
                   ↓
┌──────────────────────────────────────────┐
│ ৬. LLM GENERATION                          │
│ • temperature=0 (factual)                  │
│ • Structured output (citation required)    │
│ • Streaming (user sees fast)               │
└──────────────────┬───────────────────────┘
                   ↓
┌──────────────────────────────────────────┐
│ ৭. POST-PROCESSING                         │
│ • Citation verification                    │
│ • Confidence scoring (logprobs)            │
│ • Hallucination check (self-verify)        │
│ • Memory update (entity/summary)           │
└──────────────────┬───────────────────────┘
                   ↓
┌──────────────────────────────────────────┐
│ ANSWER: "RAG handles multi-hop through     │
│ iterative retrieval [Source: doc3, p.12].  │
│ First, it decomposes the question [doc1],  │
│ then retrieves for each sub-question       │
│ [doc5]..."                                 │
└──────────────────────────────────────────┘

LATENCY BUDGET:
  Query understanding:    ~৫০ms
  Retrieval:              ~১০০ms  
  Reranking:              ~১০০ms
  Context assembly:       ~৫ms
  Compression:            ~৫০ms
  LLM generation:         ~২০০ms-২s
  Post-processing:        ~৫০ms
  ────────────────────────────
  Total:                  ~৬০০ms-২.৫s

COST PER QUERY:
  Embedding:              $০.০০০১
  Retrieval:              $০ (self-hosted)
  Reranking (Cohere):     $০.০০২
  LLM (GPT-4o):           $০.০৩-০.০৫
  ────────────────────────────
  Total:                  ~$০.০৩-০.০৫/query

SCALING:
  • Cache: frequent queries → Redis
  • Batch: offline embedding updates
  • Async: streaming responses
  • CDN: static docs closer to users</div>

<div class="verse">"তিনি শিখিয়েছেন কলমের মাধ্যমে। শিখিয়েছেন মানুষকে যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>Context engineering হলো কলমের ক্যানভাস — তুমি কী দেখাও তাই মেশিন বোঝে। যে সঠিক দেখায়, সে সঠিক উত্তর পায়। যে সব ঢেলে দেয়, সে হারিয়ে যায়। দৃষ্টিই বোঝার ভিত্তি।</div>

<div class="secret-box"><div class="label">দশম দৃষ্টি — সমন্বয়</div><div class="text">🎯 Context Engineering = budget + position + chunk + retrieve + rerank + compress + remember + multi-hop।<br><small>একটাও বাদ দিলে কাঠামো দুর্বল। সব একসাথে = production RAG।</small></div></div>`
});
