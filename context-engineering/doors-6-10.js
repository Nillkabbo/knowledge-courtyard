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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Conflicting Sources:</strong> Two documents contradicted each other. Fix: add source authority scoring.</div></div>


<div class="code-block"># ── STEP 1: Why context compression matters ──
# Compress context to save tokens, reduce cost, improve accuracy.

why_compress = """
THE CONTEXT GROWTH PROBLEM:

Every conversation turn adds tokens:
  Turn 1:  200 tokens
  Turn 2:  400 tokens (includes turn 1)
  Turn 3:  600 tokens
  ...
  Turn 50: 10,000+ tokens

WITHOUT COMPRESSION:
  → Each turn re-sends ALL previous messages
  → 50 turns * 10K avg = 500K total tokens
  → $2.50 per conversation (GPT-4o)
  → Attention dilution (lost in the middle)

WITH COMPRESSION:
  → Summarize old messages, keep recent ones
  → 50 turns * 2K avg = 100K total tokens
  → $0.50 per conversation
  → 80% cost reduction + better accuracy!
"""

print(why_compress)

# THREE COMPRESSION STRATEGIES:
strategies = {
    "1. CONVERSATION SUMMARIZATION": {
        "what": "Summarize old conversation messages",
        "reduction": "80-90% token reduction for old messages",
        "best_for": "Long chatbot conversations",
    },
    "2. DOCUMENT COMPRESSION": {
        "what": "Extract only relevant parts from retrieved docs",
        "reduction": "70-90% reduction (5000→500 tokens)",
        "best_for": "RAG with long documents",
    },
    "3. SERIAL SUMMARY (Rolling Memory)": {
        "what": "Periodically summarize conversation, keep recent messages",
        "reduction": "Maintains constant context size regardless of conversation length",
        "best_for": "Unlimited-length conversations",
    },
}

print("COMPRESSION STRATEGIES:")
for strategy, info in strategies.items():
    print(f"\n  {strategy}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 2: Conversation summarization ──
# Turn long conversation history into compact summaries.

summarization = """
CONVERSATION SUMMARIZATION:

BEFORE (raw messages, 500 tokens):
  User: "I'm building a RAG system with OpenAI and Pinecone"
  AI: "Great! You'll need embeddings..."
  User: "What chunk size?"
  AI: "Start with 512 tokens..."
  User: "What embedding model?"
  AI: "text-embedding-3-large..."
  [500 tokens total]

AFTER (summarized, 80 tokens):
  [Summary: User is building RAG with OpenAI + Pinecone.
   Discussed chunk size (512 tokens recommended) and
   embedding model (text-embedding-3-large).]
  [80 tokens — 84% reduction!]

THE LLM DOES THE SUMMARIZATION:
  Prompt: "Summarize this conversation in 100 tokens or less,
   preserving key decisions, facts, and context."

WHEN TO SUMMARIZE:
  → Every N turns (e.g., every 5 turns)
  → When context exceeds threshold (e.g., >5K tokens)
  → When user starts a new topic
"""

print(summarization)

# PYTHON: Conversation summarization:
summarize_code = """
def compress_conversation(messages, max_tokens=2000):
    \"\"\"Compress old messages into a summary.\"\"\"

    total_tokens = count_tokens(messages)

    if total_tokens <= max_tokens:
        return messages  # No compression needed

    # Split: keep recent messages, summarize old ones:
    keep_recent = 6  # Keep last 6 messages (3 turns)
    old_messages = messages[:-keep_recent]
    recent_messages = messages[-keep_recent:]

    # Summarize old messages:
    summary = llm_summarize(old_messages)
    summary_msg = {"role": "system", "content": f"Previous conversation summary: {summary}"}

    return [summary_msg] + recent_messages

def llm_summarize(messages):
    \"\"\"Use LLM to create a concise summary.\"\"\"
    conversation = "\\n".join([f"{m['role']}: {m['content']}" for m in messages])

    response = client.chat.completions.create(
        model="gpt-4o-mini",  # cheap model for summarization
        messages=[{
            "role": "user",
            "content": f"Summarize this conversation in 100 tokens or less, "
                       f"preserving key decisions and context:\\n\\n{conversation}"
        }],
        temperature=0,
        max_tokens=150
    )
    return response.choices[0].message.content
"""

print(summarize_code)</div>

<div class="code-block"># ── STEP 3: Document compression (LLMLingua) ──
# Compress retrieved documents to only the relevant parts.

doc_compression = """
DOCUMENT COMPRESSION:

PROBLEM: Retrieved document is 5000 tokens, but only 500 are relevant.
  → Sending 5000 wastes tokens and causes attention dilution
  → Need to extract ONLY the relevant part

SOLUTION: LLMLingua / LongLLMLingua techniques

HOW LLMLINGUA WORKS:
  1. Calculate perplexity (information content) for each token
  2. Remove LOW-information tokens (filler, redundant)
  3. Keep HIGH-information tokens (key facts, entities)

BEFORE (5000 tokens):
  "The company, which was founded in 2010 by John Smith,
   has grown significantly over the past decade. In 2024,
   the revenue reached $1.5 million, representing a 15%
   increase from the previous year. The company is
   headquartered in New York and has offices in London..."

AFTER (500 tokens, LLMLingua compressed):
  "Founded 2010 by John Smith. 2024 revenue: $1.5M (+15% YoY).
   HQ: New York. Offices: London."

  → 90% reduction, same information!

IMPLEMENTATION:
  from langchain.retrievers import ContextualCompressionRetriever
  from langchain.retrievers.document_compressors import LLMLingua

  compressor = LLMLingua(model_name="microsoft/llmlingua-2")
  compression_retriever = ContextualCompressionRetriever(
      base_compressor=compressor,
      base_retriever=vector_retriever
  )
  # Returns compressed docs (only relevant parts)
"""

print(doc_compression)

# PYTHON: Document compression pipeline:
compress_docs = """
# Extract only relevant parts from retrieved documents:
def compress_documents(query, documents, max_tokens_per_doc=500):
    \"\"\"Compress each document to only relevant parts.\"\"\"
    compressed = []

    for doc in documents:
        if count_tokens(doc.content) <= max_tokens_per_doc:
            compressed.append(doc)  # Already small enough
            continue

        # Use LLM to extract relevant parts:
        prompt = f\"\"\"Extract ONLY the information relevant to this query.
Keep it concise. Remove irrelevant parts.

Query: {query}
Document: {doc.content}

Relevant extract:\"\"\"

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0,
            max_tokens=max_tokens_per_doc
        )

        doc.content = response.choices[0].message.content
        compressed.append(doc)

    return compressed

# Usage in RAG pipeline:
docs = retrieve(query, top_k=10)           # Get 10 docs
docs = compress_documents(query, docs)     # Compress each
context = assemble_context(docs)           # Build context
answer = generate(query, context)          # Generate answer
"""

print(compress_docs)</div>

<div class="code-block"># ── STEP 4: Serial summary (rolling memory) ──
# Maintain constant context size for unlimited conversations.

rolling_memory = """
SERIAL SUMMARY (ROLLING MEMORY):

PROBLEM: Conversation grows forever, eventually exceeds context window.

SOLUTION: Periodically summarize old messages, keep recent ones.

PATTERN:
  Turns 1-5:   Keep FULL messages
  Turn 6:      Summarize turns 1-5 → summary_v1
  Turns 6-10:  Keep FULL messages + summary_v1
  Turn 11:     Summarize (summary_v1 + turns 6-10) → summary_v2
  Turns 11-15: Keep FULL messages + summary_v2
  ...

CONTEXT IS ALWAYS:
  [Latest summary of ALL old turns] + [Last 5 turns full]

BENEFIT:
  → Context size stays CONSTANT regardless of conversation length
  → 1000-turn conversation = same context as 10-turn
  → No context window overflow
  → Predictable cost per turn

TRADE-OFF:
  → Old details may be lost in summaries
  → Summary quality matters (use good LLM)
  → Slight latency when summarizing (every N turns)
"""

print(rolling_memory)

# PYTHON: Rolling memory implementation:
rolling_code = """
class RollingMemory:
    def __init__(self, max_recent=6, summarize_every=5):
        self.summary = ""           # Running summary
        self.recent_messages = []   # Last N messages (full)
        self.turn_count = 0
        self.max_recent = max_recent
        self.summarize_every = summarize_every

    def add_message(self, role, content):
        self.recent_messages.append({"role": role, "content": content})
        self.turn_count += 1

        # Periodically summarize:
        if len(self.recent_messages) > self.max_recent:
            self._compress()

    def _compress(self):
        # Summarize old messages + existing summary:
        old = self.recent_messages[:-self.max_recent]
        recent = self.recent_messages[-self.max_recent:]

        if self.summary:
            combined = self.summary + "\\n" + str(old)
        else:
            combined = str(old)

        self.summary = llm_summarize(combined)
        self.recent_messages = recent

    def get_context(self):
        context = []
        if self.summary:
            context.append({
                "role": "system",
                "content": f"Previous conversation: {self.summary}"
            })
        context.extend(self.recent_messages)
        return context

# Usage:
memory = RollingMemory(max_recent=6, summarize_every=5)

# 1000-turn conversation, context stays ~2K tokens:
for i in range(1000):
    memory.add_message("user", f"Question {i}")
    memory.add_message("assistant", f"Answer {i}")

context = memory.get_context()  # Always ~2K tokens!
"""

print(rolling_code)</div>

<div class="code-block"># ── STEP 5: LangChain and LlamaIndex memory ──
# Use built-in memory systems from popular frameworks.

frameworks = """
LANGCHAIN MEMORY TYPES:

1. ConversationBufferMemory:
   → Stores ALL messages (no compression)
   → Simple but grows forever
   → Good for short conversations

2. ConversationBufferWindowMemory:
   → Keeps only last N messages
   → Old messages dropped (not summarized)
   → Good for medium conversations

3. ConversationSummaryMemory:
   → Automatically summarizes conversation
   → Constant size regardless of length
   → Good for long conversations

4. ConversationSummaryBufferMemory:
   → HYBRID: buffer recent + summarize old
   → Best of both worlds
   → Recommended for production

5. ConversationTokenBufferMemory:
   → Keeps messages up to token limit
   → Drops oldest when limit exceeded
   → Good for token-budget management

LLAMAINDEX MEMORY:
  → ChatSummaryMemoryBuffer: summary + buffer
  → Similar to LangChain's summary buffer

IMPLEMENTATION (LangChain):
  from langchain.memory import ConversationSummaryBufferMemory

  memory = ConversationSummaryBufferMemory(
      llm=ChatOpenAI(model="gpt-4o-mini", temperature=0),
      max_token_count=2000,  # Compress when exceeding 2K tokens
      return_messages=True
  )

  # In your chain:
  chain = ConversationChain(
      llm=ChatOpenAI(model="gpt-4o"),
      memory=memory
  )

  # Memory automatically:
  # → Keeps recent messages (< 2K tokens)
  # → Summarizes older messages
  # → Maintains context within budget
"""

print(frameworks)</div>

<div class="code-block"># ── STEP 6: Compression best practices ──
# Maximize the benefit of context compression.

best_practices = [
    "Use rolling summary for unlimited conversations",
    "Keep last 5-10 messages FULL, summarize older ones",
    "Use GPT-4o-mini for summarization (cheap, good enough)",
    "Compress retrieved docs with LLMLingua (70-90% reduction)",
    "Set token budget and trigger compression when exceeded",
    "Preserve key decisions and facts in summaries",
    "Test summary quality (does it lose important info?)",
    "Use LangChain ConversationSummaryBufferMemory",
    "Monitor compression ratio (target: 80% reduction)",
    "Log when summaries are created (for debugging)",
    "Consider semantic compression (extract only relevant sentences)",
    "Never compress the CURRENT question (always keep full)",
    "Use different compression levels (aggressive for old, light for recent)",
    "Cache summaries (don't re-summarize the same messages)",
    "Provide 'reset conversation' option for users",
]

print("COMPRESSION BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# COST COMPARISON:
cost = """
COST COMPARISON (50-turn conversation, GPT-4o):

NO COMPRESSION:
  Turn 1:   200 tokens → $0.0005
  Turn 10:  2,000 tokens → $0.005
  Turn 25:  5,000 tokens → $0.013
  Turn 50:  10,000 tokens → $0.025
  Total: 500K tokens → $2.50 per conversation

WITH ROLLING SUMMARY:
  Every turn: ~2,000 tokens (constant)
  Total: 100K tokens → $0.50 per conversation
  → 80% COST REDUCTION!

WITH DOC COMPRESSION:
  Retrieved docs: 10K → 2K tokens (80% less)
  Per query: saves ~$0.02
  1000 queries/day: saves $20/day = $600/month
"""

print(cost)

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ Summarization    │ Old messages → summary          │
# │ Doc compression  │ LLMLingua extracts relevant     │
# │ Rolling memory   │ Constant context for unlimited  │
# │ 80% reduction    │ Typical compression ratio       │
# │ Cost savings     │ 80% per conversation            │
# │ LangChain        │ ConversationSummaryBufferMemory │
# │ Quality          │ Use GPT-4o-mini for summaries   │
# │ Never compress   │ Current question always full    │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrCtx6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#b37feb"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0a1f1a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e8e6f0" font-size="13" font-weight="bold">⚡ কম্প্রেশন — ৮০% টোকেন কমানো</text>
  <rect x="25" y="60" width="140" height="130" fill="#1a1a2e" stroke="#b37feb" stroke-width="2" rx="8"/>
  <text x="95" y="82" text-anchor="middle" fill="#b37feb" font-size="9" font-weight="bold">পূর্ণ কথোপকথন</text>
  <rect x="38" y="92" width="114" height="10" fill="#2a2a3e" rx="2"/>
  <rect x="38" y="106" width="114" height="10" fill="#2a2a3e" rx="2"/>
  <rect x="38" y="120" width="114" height="10" fill="#2a2a3e" rx="2"/>
  <rect x="38" y="134" width="114" height="10" fill="#2a2a3e" rx="2"/>
  <rect x="38" y="148" width="114" height="10" fill="#2a2a3e" rx="2"/>
  <rect x="38" y="162" width="90" height="10" fill="#2a2a3e" rx="2"/>
  <text x="95" y="185" text-anchor="middle" fill="#d4b3ff" font-size="8">১০,০০০ tokens</text>
  <rect x="210" y="80" width="140" height="90" fill="#3b2a05" stroke="#fbbf24" stroke-width="2" rx="8"/>
  <text x="280" y="105" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">⚡ কম্প্রেসর</text>
  <text x="280" y="122" text-anchor="middle" fill="#fcd34d" font-size="10">Summary · LLMLingua</text>
  <text x="280" y="140" text-anchor="middle" fill="#fbbf24" font-size="10">সারাংশ বানাও</text>
  <text x="280" y="158" text-anchor="middle" fill="#fbbf24" font-size="10">সারমর্ম রাখো, শব্দ ছাঁটো</text>
  <rect x="395" y="95" width="140" height="60" fill="#0d3b34" stroke="#5eead4" stroke-width="2" rx="8"/>
  <text x="465" y="118" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="bold">সারাংশ</text>
  <rect x="410" y="128" width="110" height="8" fill="#1a4a40" rx="2"/>
  <text x="465" y="150" text-anchor="middle" fill="#4ade80" font-size="8">২,০০০ tokens · ৮০% কম</text>
  <line x1="165" y1="125" x2="208" y2="125" stroke="#b37feb" stroke-width="1.5" marker-end="url(#arrCtx6)"/>
  <line x1="350" y1="125" x2="393" y2="125" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrCtx6)"/>
  <text x="95" y="215" text-anchor="middle" fill="#ff8a5b" font-size="10">$২.৫০/কথোপকথন</text>
  <text x="465" y="215" text-anchor="middle" fill="#4ade80" font-size="10">$০.৫০/কথোপকথন</text>
  <text x="290" y="238" text-anchor="middle" fill="#5e5c74" font-size="10">ইখলাস — সারমর্মে নিবিড়, অপ্রয়োজনীয় শব্দ ছাড়া</text>
</svg>
</div>
<div class="svg-caption">চিত্র: কম্প্রেশন — ১০K tokens থেকে ২K সারাংশ, ৮০% খরচ কমানো</div>

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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Token Budget Exceeded:</strong> Context was 130K, model supported 128K — silent truncation. Fix: count tokens before sending.</div></div>


<div class="code-block"># ── STEP 1: Long Context vs RAG — the fundamental decision ──
# Should you stuff everything in context, or retrieve only what's needed?

comparison = {
    "SIMPLICITY": {
        "Long Context": "Simple — no pipeline needed, just send everything",
        "RAG": "Complex — pipeline (embed, search, rerank)",
        "Winner": "Long Context",
    },
    "COST": {
        "Long Context": "Expensive — pay for entire context every call",
        "RAG": "Cheap — only pay for relevant chunks (5-10K tokens)",
        "Winner": "RAG",
    },
    "LATENCY": {
        "Long Context": "Slow — processing 1M tokens takes time",
        "RAG": "Fast — small context = fast response",
        "Winner": "RAG",
    },
    "ACCURACY": {
        "Long Context": "Mixed — attention dilution, middle info lost",
        "RAG": "Focused — only relevant info, sharp attention",
        "Winner": "RAG (with reranking)",
    },
    "CITATION": {
        "Long Context": "Hard — where did each fact come from?",
        "RAG": "Easy — each chunk has source metadata",
        "Winner": "RAG",
    },
    "UPDATES": {
        "Long Context": "Hard — re-send entire context on each update",
        "RAG": "Easy — new doc → embed → add to DB",
        "Winner": "RAG",
    },
    "SCALE": {
        "Long Context": "Limited — 1-2M tokens max",
        "RAG": "Unlimited — vector DB handles billions",
        "Winner": "RAG",
    },
    "MULTI-HOP": {
        "Long Context": "Good — everything in one place, easy to connect",
        "RAG": "Harder — may need multiple retrieval rounds",
        "Winner": "Long Context",
    },
}

print("LONG CONTEXT vs RAG:")
for criterion, values in comparison.items():
    print(f"\n  {criterion}:")
    for approach, value in values.items():
        if approach != "Winner":
            print(f"    {approach}: {value}")
    print(f"    → Winner: {values['Winner']}")</div>

<div class="code-block"># ── STEP 2: Decision rules — when to use which ──
# Clear guidelines for choosing the right approach.

decision_rules = """
DECISION RULES:

USE LONG CONTEXT WHEN:
  → Document < 50K tokens (one paper, one contract)
  → Multi-hop reasoning needed (connecting facts across doc)
  → Simplicity is important (prototyping, demo)
  → Document rarely changes
  → Few queries per document

USE RAG WHEN:
  → Document > 50K tokens (knowledge base, wiki)
  → Documents grow (new docs added regularly)
  → Citation needed (legal, medical)
  → Cost matters (don't pay for full context each call)
  → Multiple users, multiple queries
  → Need to scale to millions of documents

USE HYBRID (best of both):
  → RAG for initial retrieval (top-20 chunks)
  → Long context model processes all 20 together
  → Model cross-references, synthesizes across chunks
  → Best result — focused + comprehensive

RULE OF THUMB:
  < 50K tokens → Long context (simpler)
  50K-500K → Test both (depends on use case)
  > 500K → RAG (long context too expensive/diluted)
"""

print(decision_rules)

# COST ANALYSIS:
cost_analysis = """
COST ANALYSIS (per query):

LONG CONTEXT (250K tokens, Claude 3.5):
  Input: 250K * $3/M = $0.75 per query
  1,000 queries/day = $750/day = $22,500/month

RAG (10K tokens retrieved):
  Input: 10K * $3/M = $0.03 per query
  1,000 queries/day = $30/day = $900/month
  → 96% COST REDUCTION!

HYBRID (20K retrieved + long context):
  Input: 20K * $3/M = $0.06 per query
  1,000 queries/day = $60/day = $1,800/month
  → 92% cost reduction, better accuracy than pure RAG
"""
print(cost_analysis)</div>

<div class="code-block"># ── STEP 3: Hybrid approach (RAG + Long Context) ──
# The best of both worlds: retrieve focused, synthesize broadly.

hybrid = """
HYBRID APPROACH (production standard):

1. RAG RETRIEVAL (Stage 1):
   Query → embed → vector search → top-20 chunks
   → Focused, relevant, cheap

2. LONG CONTEXT SYNTHESIS (Stage 2):
   Send all 20 chunks to a long-context model (Claude 200K)
   → Model sees ALL 20 chunks TOGETHER
   → Can cross-reference, find connections
   → Multi-hop reasoning across chunks
   → Comprehensive synthesis

BENEFITS:
  ✅ Focused retrieval (only relevant chunks, cheap)
  ✅ Cross-chunk reasoning (long context synthesis)
  ✅ Citations (each chunk has metadata)
  ✅ Cost-effective (20K tokens, not 250K)
  ✅ Best accuracy (focused + comprehensive)

WHEN TO USE HYBRID:
  → Complex questions requiring multi-document synthesis
  → "Compare X from doc A with Y from doc B"
  → When you need both precision AND breadth
  → Production RAG with high accuracy requirements
"""

print(hybrid)

# PYTHON: Hybrid implementation:
hybrid_code = """
# HYBRID: RAG retrieval + Long context synthesis
import anthropic

client = anthropic.Anthropic()

def hybrid_rag_long_context(query, top_k=20):
    # Stage 1: RAG retrieval (focused, cheap):
    chunks = retrieve_and_rerank(query, top_k=top_k)

    # Stage 2: Send all chunks to long-context model:
    context = "\\n\\n".join([
        f"[Doc {i+1}] (Source: {c.metadata['source']}, "
        f"Page: {c.metadata.get('page', '?')})\\n{c.content}"
        for i, c in enumerate(chunks)
    ])

    response = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=2000,
        system="Answer from the documents below. "
               "Cross-reference information across documents. "
               "Cite [Doc N] for each claim.",
        messages=[{
            "role": "user",
            "content": f"Documents:\\n{context}\\n\\nQuestion: {query}"
        }]
    )

    return response.content[0].text

# Result: focused retrieval + comprehensive long-context synthesis
# Best of both worlds!
"""

print(hybrid_code)</div>

<div class="code-block"># ── STEP 4: Long context models comparison (2024-2025) ──
# Which models handle long context best?

models = {
    "Gemini 1.5 Pro": {
        "max_context": "1,000,000 tokens (~750K words)",
        "cost": "$1.25/M in, $5/M out",
        "strength": "Largest context window available",
        "weakness": "Quality degrades at very long context",
        "best_for": "Processing entire books, large codebases",
    },
    "Claude 3.5 Sonnet": {
        "max_context": "200,000 tokens (~150K words)",
        "cost": "$3/M in, $15/M out",
        "strength": "Best quality on long context, strong reasoning",
        "weakness": "Smaller window than Gemini, more expensive",
        "best_for": "Complex analysis, code understanding, RAG",
    },
    "GPT-4o": {
        "max_context": "128,000 tokens (~96K words)",
        "cost": "$2.50/M in, $10/M out",
        "strength": "Fast, versatile, good all-rounder",
        "weakness": "Smallest context of the three",
        "best_for": "General use, balanced cost/quality",
    },
    "Llama 3.1 405B": {
        "max_context": "128,000 tokens",
        "cost": "Self-hosted (free model, compute cost)",
        "strength": "Open source, can self-host",
        "weakness": "Requires significant compute",
        "best_for": "Privacy-sensitive, self-hosted",
    },
}

print("LONG CONTEXT MODELS:")
for model, info in models.items():
    print(f"\n  {model}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# BENCHMARK: Long context accuracy:
benchmark = """
NEEDLE IN A HAYSTACK BENCHMARK:
  → Hide a specific fact in a long document
  → Ask the model to find it
  → Measure accuracy at different context lengths

RESULTS (2024):
  Claude 3.5 (200K):  99% accuracy at any position
  GPT-4o (128K):      97% accuracy (slight degradation at 128K)
  Gemini 1.5 (1M):    95% accuracy (degradation beyond 500K)

INSIGHT:
  Even the best models degrade with very long context.
  RAG (focused context) often BEATS long context for accuracy.
  "Just because you CAN use 1M tokens doesn't mean you SHOULD."
"""
print(benchmark)</div>

<div class="code-block"># ── STEP 5: When long context FAILS ──
# Know the limitations before choosing long context over RAG.

failures = """
WHEN LONG CONTEXT FAILS:

1. ATTENTION DILUTION:
   → 100K+ tokens → middle info gets lost
   → Even with "needle in haystack" tests passing,
     complex reasoning suffers

2. COST EXPLOSION:
   → 250K tokens per call * 1000 calls/day = $750/day
   → Unsustainable for high-volume applications

3. NO CITATIONS:
   → Model reads everything, but can't say WHERE each fact came from
   → Legal/medical need exact citations → RAG required

4. UPDATE PROBLEM:
   → Document changes → must re-send ENTIRE document
   → RAG: just update the changed chunk

5. SCALE LIMIT:
   → Even Gemini 1.5 (1M tokens) can't handle a full library
   → RAG: unlimited documents

6. LATENCY:
   → Processing 200K tokens = 5-10 seconds
   → RAG with 10K tokens = 1-2 seconds

7. RATE LIMITS:
   → API rate limits are TOKEN-based
   → Long context = fewer requests per minute allowed

REAL EXAMPLE:
  Company has 10,000 documents (50M tokens total)
  → Long context: IMPOSSIBLE (50M > 1M max)
  → RAG: Easy (retrieve 5 relevant docs, send 10K tokens)
"""

print(failures)</div>

<div class="code-block"># ── STEP 6: Decision framework and summary ──
# Make the right choice every time.

framework = """
DECISION FRAMEWORK:

Step 1: How much content do you have?
  < 50K tokens → Long context (simple, good accuracy)
  50K-500K → Test both, lean toward RAG
  > 500K → RAG (must use)

Step 2: How often do queries repeat the same context?
  Same doc, many questions → Long context + prompt caching
  Different docs each time → RAG

Step 3: Do you need citations?
  Yes (legal, medical, compliance) → RAG
  No (casual Q&A, brainstorming) → Long context OK

Step 4: What's your budget?
  High (enterprise, low volume) → Long context OK
  Low (startup, high volume) → RAG

Step 5: Do you need multi-hop reasoning?
  Yes (complex analysis) → Hybrid (RAG retrieve + long context synthesize)
  No (simple Q&A) → Pure RAG

DEFAULT CHOICE FOR PRODUCTION:
  → Start with RAG (cheaper, scalable, citable)
  → Add long-context synthesis for complex queries (hybrid)
  → Use pure long context only for small documents (< 50K)
"""

print(framework)

# SUMMARY TABLE:
# ┌──────────────────┬─────────────────┬──────────────────────────┐
# │ Criterion        │ Long Context    │ RAG                      │
# ├──────────────────┼─────────────────┼──────────────────────────┤
# │ Simplicity       │ ✅ Simpler      │ ❌ More complex          │
# │ Cost             │ ❌ Expensive    │ ✅ Cheap                 │
# │ Latency          │ ❌ Slow         │ ✅ Fast                  │
# │ Accuracy         │ ⚠️ Dilution     │ ✅ Focused               │
# │ Citation         │ ❌ Hard         │ ✅ Easy                  │
# │ Scale            │ ❌ Limited      │ ✅ Unlimited             │
# │ Multi-hop        │ ✅ Good         │ ⚠️ Needs multiple rounds │
# │ Best approach    │ < 50K tokens    │ > 50K tokens             │
# │ Hybrid           │ RAG + Long Context = best of both         │
# └──────────────────┴─────────────────┴──────────────────────────┘

# FINAL ADVICE:
# "Don't use a 1M context window as a replacement for RAG.
# Use RAG to find the needle, then long context to understand it."

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">⚠️ ভুল পছন্দ</div>১০,০০০ ডকুমেন্ট (৫০M tokens) — সব Gemini ১M-এ দাও। অসম্ভব। বা ৫০ ডকুমেন্ট (২৫০K tokens) — প্রতি কলে $১.২৫। অবাস্তব। বা একটা ছোট ডকুমেন্ট (৫K) — জটিল RAG pipeline বানাও। অতিরিক্ত।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক পছন্দ</div>৫০K+ knowledge base → RAG। একটা paper (১০K) → long context। একটা contract (৩০K) → long context + নির্দিষ্ট clause চাও → RAG। Hybrid সবচেয়ে ভালো — RAG retrieve, long context synthesize।</div>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0a1f1a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e8e6f0" font-size="13" font-weight="bold">⚖️ Long Context বনাম RAG — দুই পথ</text>
  <rect x="25" y="55" width="200" height="155" fill="#1e3a5f" stroke="#5b9eff" stroke-width="2" rx="8"/>
  <text x="125" y="78" text-anchor="middle" fill="#5b9eff" font-size="10" font-weight="bold">📖 Long Context</text>
  <text x="125" y="93" text-anchor="middle" fill="#7dd3fc" font-size="10">সব একসাথে</text>
  <text x="40" y="112" fill="#7dd3fc" font-size="10">✅ সরল — pipeline নেই</text>
  <text x="40" y="126" fill="#7dd3fc" font-size="10">✅ Multi-hop সহজ</text>
  <text x="40" y="140" fill="#ff8a5b" font-size="10">❌ ব্যয়বহুল</text>
  <text x="40" y="154" fill="#ff8a5b" font-size="10">❌ ধীর · attention পাতলা</text>
  <text x="125" y="184" text-anchor="middle" fill="#fcd34d" font-size="10">&lt; ৫০K tokens → এটাই</text>
  <text x="125" y="198" text-anchor="middle" fill="#5e5c74" font-size="10">এক paper · এক contract</text>
  <rect x="250" y="55" width="200" height="155" fill="#0d3b34" stroke="#52c41a" stroke-width="2" rx="8"/>
  <text x="350" y="78" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">🔍 RAG</text>
  <text x="350" y="93" text-anchor="middle" fill="#4ade80" font-size="10">প্রয়োজন মাফিক</text>
  <text x="265" y="112" fill="#4ade80" font-size="10">✅ সস্তা — ৫-১০K tokens</text>
  <text x="265" y="126" fill="#4ade80" font-size="10">✅ দ্রুত · Citation সহজ</text>
  <text x="265" y="140" fill="#4ade80" font-size="10">✅ অসীম স্কেল</text>
  <text x="265" y="154" fill="#ff8a5b" font-size="10">❌ জটিল pipeline</text>
  <text x="350" y="184" text-anchor="middle" fill="#fcd34d" font-size="10">&gt; ৫০K tokens → এটাই</text>
  <text x="350" y="198" text-anchor="middle" fill="#5e5c74" font-size="10">knowledge base · wiki</text>
  <circle cx="237" cy="130" r="16" fill="#3b2a05" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="237" y="134" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">vs</text>
  <rect x="465" y="80" width="95" height="100" fill="#3b2a05" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3" rx="8"/>
  <text x="512" y="100" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">🌟 Hybrid</text>
  <text x="512" y="118" text-anchor="middle" fill="#fcd34d" font-size="10">RAG retrieve</text>
  <text x="512" y="130" text-anchor="middle" fill="#fcd34d" font-size="10">+ long context</text>
  <text x="512" y="142" text-anchor="middle" fill="#fcd34d" font-size="10">synthesize</text>
  <text x="512" y="162" text-anchor="middle" fill="#fbbf24" font-size="10">সবচেয়ে ভালো</text>
  <text x="290" y="232" text-anchor="middle" fill="#5e5c74" font-size="10">কিয়াস — প্রতিটা পরিস্থিতিতে সঠিক পথ বাছো</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Long Context সরল কিন্তু ব্যয়বহুল, RAG জটিল কিন্তু সস্তা — Hybrid সেরা</div>

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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Context Compression:</strong> Full conversation history sent every time — cost explosion. Fix: summarize past turns.</div></div>


<div class="code-block"># ── STEP 1: Five types of conversation memory ──
# Different memory strategies for different conversation lengths.

memory_types = {
    "1. BUFFER MEMORY (keep everything)": {
        "what": "Store ALL conversation messages in context",
        "pros": "All information preserved, nothing lost",
        "cons": "Context fills up quickly, expensive",
        "best_for": "Short conversations (< 10 turns)",
    },
    "2. WINDOW MEMORY (last N turns)": {
        "what": "Keep only the last N turns, drop older ones",
        "pros": "Small context, fast, simple",
        "cons": "Old context lost (user asks 'what did we discuss earlier?' → fail)",
        "best_for": "General chatbot, recent context matters most",
    },
    "3. SUMMARY MEMORY (summarize old)": {
        "what": "Summarize old turns, keep recent ones full",
        "pros": "Long conversations manageable, core info preserved",
        "cons": "Specific details lost in summary, LLM cost for summarization",
        "best_for": "Long sessions, advisory chat, customer support",
    },
    "4. ENTITY MEMORY (track facts)": {
        "what": "Extract and track key entities (names, projects, facts)",
        "pros": "Specific facts always available, tiny context footprint",
        "cons": "Less general context, only tracks what it's told to",
        "best_for": "Personal assistant, CRM, task management",
    },
    "5. VECTOR MEMORY (semantic recall)": {
        "what": "Embed all past messages, retrieve relevant ones per query",
        "pros": "Unlimited memory, recalls relevant past context",
        "cons": "Complex implementation, retrieval may miss things",
        "best_for": "Long-term assistant, knowledge worker, persistent sessions",
    },
}

print("FIVE TYPES OF CONVERSATION MEMORY:")
for mem_type, info in memory_types.items():
    print(f"\n  {mem_type}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 2: Buffer and window memory ──
# The simplest memory strategies.

buffer_window = """
BUFFER MEMORY (keep everything):

  Context = ALL messages from the conversation

  Turn 1: [User: "Hi"] + [AI: "Hello!"]
  Turn 2: [Turn 1] + [User: "What is RAG?"] + [AI: "RAG is..."]
  Turn 3: [Turn 1-2] + [User: "How?"] + [AI: "By..."]

  → Every turn, context grows
  → Eventually exceeds window
  → Good for short conversations only

WINDOW MEMORY (keep last N):

  Context = last N turns only

  Turn 1: [User: "Hi"] + [AI: "Hello!"]
  Turn 2: [Turn 1] + [new messages]
  ...
  Turn 6: [Turn 2-5] + [new messages]  ← Turn 1 dropped!
  Turn 7: [Turn 3-6] + [new messages]  ← Turn 2 dropped!

  → Context size is CONSTANT (last 5 turns)
  → Old messages disappear
  → Simple, fast, predictable
"""

print(buffer_window)

# PYTHON: Window memory:
window_code = """
class WindowMemory:
    def __init__(self, window_size=10):
        self.window_size = window_size
        self.messages = []

    def add(self, role, content):
        self.messages.append({"role": role, "content": content})

    def get_context(self):
        # Return only last N messages:
        return self.messages[-self.window_size:]

# Usage:
memory = WindowMemory(window_size=10)  # Keep last 10 messages

memory.add("user", "What is Python?")
memory.add("assistant", "Python is a programming language...")
memory.add("user", "How do I install it?")

context = memory.get_context()  # Last 10 messages
"""

print(window_code)</div>

<div class="code-block"># ── STEP 3: Summary and entity memory ──
# Smarter strategies for long conversations.

summary_entity = """
SUMMARY MEMORY (compress old):

  Context = [Summary of old turns] + [Recent turns full]

  Turn 1-5:   Full messages
  Turn 6:     Summary(turns 1-5) + turns 6-10 full
  Turn 11:    Summary(summary + turns 6-10) + turns 11-15 full

  → Long conversations stay manageable
  → Core context preserved (but details may be lost)

ENTITY MEMORY (track facts):

  Extract and store KEY FACTS from conversation:

  entities = {
      "user_name": "Rakib",
      "project": "LedgerPilot",
      "stack": ["Python", "Django", "Vue"],
      "preferences": ["concise answers", "Bengali translation"],
      "current_task": "fixing production bug",
  }

  → Entity store is SEPARATE from conversation context
  → Injected into system prompt: "User: Rakib, Project: LedgerPilot..."
  → Tiny context footprint, high precision for tracked facts
  → LLM extracts entities automatically
"""

print(summary_entity)

# PYTHON: Entity memory:
entity_code = """
class EntityMemory:
    def __init__(self):
        self.entities = {}  # {key: value}

    def extract_entities(self, message):
        \"\"\"Use LLM to extract entities from conversation.\"\"\"
        prompt = f\"\"\"Extract key facts from this message as JSON.
        Examples: user_name, project, company, preferences, tasks.
        Message: {message}
        JSON:\"\"\"

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0
        )
        new_entities = json.loads(response.choices[0].message.content)

        # Update entity store:
        for key, value in new_entities.items():
            if key in self.entities:
                # Merge (if list) or update (if scalar):
                if isinstance(self.entities[key], list):
                    if isinstance(value, list):
                        self.entities[key].extend(value)
                    else:
                        self.entities[key].append(value)
                else:
                    self.entities[key] = value
            else:
                self.entities[key] = value

    def get_system_prompt(self):
        return f"Known context: {json.dumps(self.entities, indent=2)}"

# Usage:
memory = EntityMemory()
memory.extract_entities("I'm Rakib, working on LedgerPilot with Django")
print(memory.entities)
# {'user_name': 'Rakib', 'project': 'LedgerPilot', 'stack': ['Django']}
"""

print(entity_code)</div>

<div class="code-block"># ── STEP 4: Vector memory (semantic recall) ──
# Store ALL past messages in a vector DB, retrieve relevant ones.

vector_memory = """
VECTOR MEMORY (semantic recall):

PROBLEM: Window/summary memory loses old context.
  → User asks "What did we discuss about databases last week?"
  → Window memory: already dropped → "I don't remember"
  → Summary memory: summarized → vague, no details

SOLUTION: Vector memory
  → Store EVERY message as an embedding in vector DB
  → When user asks a new question:
    1. Embed the question
    2. Search past messages for RELEVANT ones
    3. Inject those past messages into context

EXAMPLE:
  Past turn 5: "We discussed PostgreSQL indexes for LedgerPilot"
  (stored in vector DB)

  Current turn 50: "What database did we pick?"
  → Vector search finds turn 5 (relevant!)
  → Inject into context: "Previously: We discussed PostgreSQL indexes..."
  → AI remembers!

BENEFITS:
  ✅ Unlimited memory (store millions of messages)
  ✅ Semantic recall (finds relevant past, not just recent)
  ✅ Best for long-term assistants

DRAWBACKS:
  ❌ Complex (vector DB + retrieval pipeline)
  ❌ Retrieval may miss relevant messages
  ❌ Additional latency (vector search per turn)
"""

print(vector_memory)

# PYTHON: Vector memory:
vector_code = """
# Store all conversation turns in vector DB:
class VectorMemory:
    def __init__(self):
        self.messages = []  # All past messages
        self.embeddings = []  # Corresponding embeddings

    def add(self, role, content):
        emb = embed(content)
        self.messages.append({"role": role, "content": content})
        self.embeddings.append(emb)

    def retrieve_relevant(self, query, top_k=3):
        \"\"\"Find past messages relevant to current query.\"\"\"
        query_emb = embed(query)
        scores = [cosine_sim(query_emb, emb) for emb in self.embeddings]
        top_indices = sorted(range(len(scores)),
                            key=lambda i: scores[i], reverse=True)[:top_k]
        return [self.messages[i] for i in top_indices]

    def get_context(self, current_query, max_messages=10):
        # Get recent messages:
        recent = self.messages[-5:]

        # Get SEMANTICALLY relevant past messages:
        relevant = self.retrieve_relevant(current_query, top_k=3)

        # Combine (deduplicate):
        context = list(set(id(m) for m in recent + relevant))

        return context

# Usage (long-term assistant with unlimited memory):
memory = VectorMemory()

# Turn 1 (weeks ago):
memory.add("user", "I chose PostgreSQL for LedgerPilot")

# Turn 500 (today):
memory.add("user", "What database are we using?")
# Vector memory retrieves turn 1 → "PostgreSQL" → AI remembers!
"""

print(vector_code)</div>

<div class="code-block"># ── STEP 5: Combined memory (production) ──
# Use multiple memory types together for best results.

combined = """
COMBINED MEMORY (production standard):

  Entity Memory + Window Memory + Summary Memory

  SYSTEM PROMPT:
    "User: Rakib
     Project: LedgerPilot
     Stack: Django, PostgreSQL, Vue
     Current task: fixing production bug"

  CONVERSATION:
    [Summary: Turns 1-20 discussed architecture,
     chose PostgreSQL, set up Docker deployment.]
    [Full turns 21-25]
    [Current question: Turn 26]

  → Tiny context (~2K tokens)
  → Key facts (entities) always available
  → Recent context (window) full
  → Old context (summary) preserved
  → Best of all memory types!

LANGCHAIN COMBINED MEMORY:
  from langchain.memory import (
      ConversationBufferWindowMemory,
      ConversationSummaryMemory,
      CombinedMemory,
      ConversationEntityMemory
  )

  # Combine multiple memory types:
  memory = CombinedMemory(
      memories=[
          ConversationEntityMemory(llm=llm),        # track facts
          ConversationBufferWindowMemory(k=5),       # last 5 turns
          ConversationSummaryMemory(llm=llm),        # summary of old
      ]
  )
"""

print(combined)

# WHEN TO USE WHICH MEMORY:
when_to_use = """
DECISION GUIDE:

Short conversation (< 10 turns):
  → Buffer memory (simplest, keeps everything)

Medium conversation (10-50 turns):
  → Window memory (last 10 turns)
  → OR Summary memory (compress old)

Long conversation (50+ turns):
  → Summary + Window (recommended)
  → OR Combined (entity + summary + window)

Long-term assistant (persistent sessions):
  → Vector memory (semantic recall)
  → OR Combined + Vector (everything)

Customer support (user returns later):
  → Entity memory (track user details)
  → + Vector memory (recall past conversations)
"""

print(when_to_use)</div>

<div class="code-block"># ── STEP 6: Memory in production (Django) ──
# Implementing conversation memory in a Django chatbot.

django_memory = """
DJANGO CONVERSATION MEMORY:

# models.py:
class Conversation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    summary = models.TextField(default="")  # Running summary

class Message(models.Model):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    role = models.CharField(max_length=20)  # 'user' or 'assistant'
    content = models.TextField()
    embedding = VectorField(dimensions=1536, null=True)  # For vector memory
    created_at = models.DateTimeField(auto_now_add=True)

# views.py:
def chat(request):
    conversation = get_or_create_conversation(request.user)

    # Build context using COMBINED memory:
    context = build_context(conversation, request.POST["message"])

    # Call LLM:
    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=context
    )

    # Save message:
    Message.objects.create(
        conversation=conversation,
        role="user",
        content=request.POST["message"]
    )
    Message.objects.create(
        conversation=conversation,
        role="assistant",
        content=response.choices[0].message.content
    )

    return JsonResponse({"response": response.choices[0].message.content})

def build_context(conversation, current_message):
    \"\"\"Build context: summary + recent + relevant past + current.\"\"\"
    context = [{"role": "system", "content": "You are a helpful assistant."}]

    # 1. Summary of old conversation:
    if conversation.summary:
        context.append({
            "role": "system",
            "content": f"Previous conversation: {conversation.summary}"
        })

    # 2. Recent messages (last 10):
    recent = conversation.messages.order_by('-created_at')[:10]
    for msg in reversed(recent):
        context.append({"role": msg.role, "content": msg.content})

    # 3. Current message:
    context.append({"role": "user", "content": current_message})

    return context
"""

print(django_memory)

# BEST PRACTICES:
best_practices = [
    "Use COMBINED memory for production (entity + summary + window)",
    "Keep last 5-10 turns FULL, summarize older ones",
    "Extract and track key entities (user name, project, preferences)",
    "Use vector memory for long-term persistent assistants",
    "Store conversation in database (Django Message model)",
    "Compress when context exceeds budget (rolling summary)",
    "Use GPT-4o-mini for summarization (cheap, good enough)",
    "Cache entity extraction (don't re-extract same entities)",
    "Provide 'new conversation' button to reset memory",
    "Log memory size per turn (monitor token usage)",
    "Handle context window overflow gracefully (compress, don't truncate)",
    "Test long conversations (50+ turns) for memory degradation",
    "Use prompt caching for repeated system prompts",
    "Monitor summary quality (does it lose important info?)",
    "Consider user-controlled memory ('remember this' / 'forget that')",
]

print("MEMORY BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Memory Type      │ Best For                        │
# ├──────────────────┼──────────────────────────────────┤
# │ Buffer           │ Short conversations (<10 turns) │
# │ Window           │ Medium, recent-focused          │
# │ Summary          │ Long conversations (50+ turns)  │
# │ Entity           │ Track facts (name, project)     │
# │ Vector           │ Long-term semantic recall       │
# │ Combined         │ Production (all of the above)   │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0a1f1a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e8e6f0" font-size="13" font-weight="bold">🧵 ৫ ধরনের স্মৃতি — কম জায়গা, মূল কথা</text>
  <rect x="25" y="50" width="100" height="55" fill="#1a1a2e" stroke="#ff8a5b" stroke-width="1.5" rx="6"/>
  <text x="75" y="68" text-anchor="middle" fill="#ff8a5b" font-size="8" font-weight="bold">Buffer</text>
  <text x="75" y="81" text-anchor="middle" fill="#ff8a5b" font-size="10">সব রাখো</text>
  <text x="75" y="93" text-anchor="middle" fill="#5e5c74" font-size="10">ছোট chat</text>
  <circle cx="75" cy="100" r="3" fill="#ff6b35"/>
  <rect x="135" y="50" width="100" height="55" fill="#1e3a5f" stroke="#5b9eff" stroke-width="1.5" rx="6"/>
  <text x="185" y="68" text-anchor="middle" fill="#5b9eff" font-size="8" font-weight="bold">Window</text>
  <text x="185" y="81" text-anchor="middle" fill="#5b9eff" font-size="10">শেষ N turns</text>
  <text x="185" y="93" text-anchor="middle" fill="#5e5c74" font-size="10">সাধারণ bot</text>
  <circle cx="185" cy="100" r="3" fill="#5b9eff"/>
  <rect x="245" y="50" width="100" height="55" fill="#3b2a05" stroke="#fbbf24" stroke-width="1.5" rx="6"/>
  <text x="295" y="68" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="bold">Summary</text>
  <text x="295" y="81" text-anchor="middle" fill="#fcd34d" font-size="10">পুরোনো → সারাংশ</text>
  <text x="295" y="93" text-anchor="middle" fill="#5e5c74" font-size="10">দীর্ঘ সেশন</text>
  <circle cx="295" cy="100" r="3" fill="#fbbf24"/>
  <rect x="355" y="50" width="100" height="55" fill="#0d3b34" stroke="#52c41a" stroke-width="1.5" rx="6"/>
  <text x="405" y="68" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">Entity</text>
  <text x="405" y="81" text-anchor="middle" fill="#4ade80" font-size="10">নাম, সত্তা</text>
  <text x="405" y="93" text-anchor="middle" fill="#5e5c74" font-size="10">assistant</text>
  <circle cx="405" cy="100" r="3" fill="#52c41a"/>
  <rect x="465" y="50" width="100" height="55" fill="#2a0d3b" stroke="#b37feb" stroke-width="1.5" rx="6"/>
  <text x="515" y="68" text-anchor="middle" fill="#b37feb" font-size="8" font-weight="bold">Vector</text>
  <text x="515" y="81" text-anchor="middle" fill="#b37feb" font-size="10">semantic search</text>
  <text x="515" y="93" text-anchor="middle" fill="#5e5c74" font-size="10">অসীম স্মৃতি</text>
  <circle cx="515" cy="100" r="3" fill="#b37feb"/>
  <text x="290" y="130" text-anchor="middle" fill="#f0c75e" font-size="9" font-weight="bold">⬇ Production: Combined Memory</text>
  <rect x="130" y="140" width="320" height="75" fill="#1a1a2e" stroke="#f0c75e" stroke-width="2" rx="8"/>
  <rect x="145" y="150" width="130" height="16" fill="#0d3b34" stroke="#52c41a" stroke-width="0.8" rx="3"/>
  <text x="210" y="161" text-anchor="middle" fill="#4ade80" font-size="10">Entity: Rakib · LedgerPilot</text>
  <rect x="145" y="170" width="210" height="14" fill="#3b2a05" stroke="#fbbf24" stroke-width="0.8" rx="3"/>
  <text x="250" y="180" text-anchor="middle" fill="#fcd34d" font-size="10">Summary: Turn ১-২০ সারাংশ</text>
  <rect x="145" y="188" width="280" height="14" fill="#1e3a5f" stroke="#5b9eff" stroke-width="0.8" rx="3"/>
  <text x="285" y="198" text-anchor="middle" fill="#7dd3fc" font-size="10">Full: Turn ২১-২৫ পূর্ণ</text>
  <text x="290" y="238" text-anchor="middle" fill="#5e5c74" font-size="10">হাফিজ — ছোট জায়গায় মূল স্মৃতি সংরক্ষণ</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ৫ ধরনের memory — production-এ Entity + Summary + Window একসাথে</div>

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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Prompt Injection via Context:</strong> Malicious document in context contained instructions. Fix: mark context as untrusted.</div></div>


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

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrCtx9" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#ff7b54"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0a1f1a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e8e6f0" font-size="13" font-weight="bold">🪜 Multi-Hop — ধাপে ধাপে গভীরে</text>
  <rect x="25" y="50" width="140" height="48" fill="#1a1a2e" stroke="#ff7b54" stroke-width="2" rx="8"/>
  <text x="95" y="68" text-anchor="middle" fill="#ff7b54" font-size="8" font-weight="bold">প্রশ্ন</text>
  <text x="95" y="82" text-anchor="middle" fill="#ff8a5b" font-size="10">iPhone নির্মাতা কে?</text>
  <text x="95" y="93" text-anchor="middle" fill="#5e5c74" font-size="9">(৩-হপ প্রশ্ন)</text>
  <line x1="165" y1="74" x2="182" y2="74" stroke="#ff7b54" stroke-width="1.5" marker-end="url(#arrCtx9)"/>
  <rect x="187" y="55" width="100" height="38" fill="#1e3a5f" stroke="#5b9eff" stroke-width="1.5" rx="6"/>
  <text x="237" y="71" text-anchor="middle" fill="#5b9eff" font-size="10" font-weight="bold">Hop ১</text>
  <text x="237" y="84" text-anchor="middle" fill="#7dd3fc" font-size="10">→ Apple Inc.</text>
  <line x1="287" y1="74" x2="304" y2="74" stroke="#ff7b54" stroke-width="1.5" marker-end="url(#arrCtx9)"/>
  <rect x="309" y="55" width="100" height="38" fill="#3b2a05" stroke="#fbbf24" stroke-width="1.5" rx="6"/>
  <text x="359" y="71" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">Hop ২</text>
  <text x="359" y="84" text-anchor="middle" fill="#fcd34d" font-size="10">→ Steve Jobs</text>
  <line x1="409" y1="74" x2="426" y2="74" stroke="#ff7b54" stroke-width="1.5" marker-end="url(#arrCtx9)"/>
  <rect x="431" y="55" width="100" height="38" fill="#0d3b34" stroke="#52c41a" stroke-width="1.5" rx="6"/>
  <text x="481" y="71" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">Hop ৩</text>
  <text x="481" y="84" text-anchor="middle" fill="#4ade80" font-size="10">→ চূড়ান্ত উত্তর</text>
  <text x="290" y="118" text-anchor="middle" fill="#e8e6f0" font-size="9" font-weight="bold">প্রতিটা hop আগের উত্তরের উপর দাঁড়ায়</text>
  <rect x="40" y="185" width="90" height="30" fill="#1e3a5f" stroke="#5b9eff" stroke-width="1" rx="4"/>
  <text x="85" y="200" text-anchor="middle" fill="#7dd3fc" font-size="10">Hop ১</text>
  <text x="85" y="210" text-anchor="middle" fill="#7dd3fc" font-size="9">কোম্পানি?</text>
  <rect x="140" y="170" width="90" height="45" fill="#3b2a05" stroke="#fbbf24" stroke-width="1" rx="4"/>
  <text x="185" y="185" text-anchor="middle" fill="#fcd34d" font-size="10">Hop ২</text>
  <text x="185" y="195" text-anchor="middle" fill="#fcd34d" font-size="9">প্রতিষ্ঠাতা?</text>
  <text x="185" y="207" text-anchor="middle" fill="#fcd34d" font-size="9">আগের = Apple</text>
  <rect x="240" y="155" width="90" height="60" fill="#0d3b34" stroke="#52c41a" stroke-width="1" rx="4"/>
  <text x="285" y="170" text-anchor="middle" fill="#4ade80" font-size="10">Hop ৩</text>
  <text x="285" y="180" text-anchor="middle" fill="#4ade80" font-size="9">synthesize</text>
  <text x="285" y="192" text-anchor="middle" fill="#4ade80" font-size="9">আগের = Jobs</text>
  <text x="285" y="207" text-anchor="middle" fill="#4ade80" font-size="9">→ উত্তর</text>
  <rect x="350" y="150" width="210" height="65" fill="#1a1a2e" stroke="#ff6b35" stroke-width="1" stroke-dasharray="4,3" rx="6"/>
  <text x="455" y="168" text-anchor="middle" fill="#ff8a5b" font-size="10" font-weight="bold">⚠️ চ্যালেঞ্জ</text>
  <text x="360" y="182" fill="#ff8a5b" font-size="10">• error propagation</text>
  <text x="360" y="194" fill="#ff8a5b" font-size="10">• cost — একাধিক কল</text>
  <text x="360" y="206" fill="#ff8a5b" font-size="10">• max ৩-৫ hop সীমা</text>
  <text x="290" y="238" text-anchor="middle" fill="#5e5c74" font-size="10">তাদাব্বুর — এক উত্তর থেকে পরের প্রশ্ন, ধাপে ধাপে গভীরে</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Multi-hop — প্রতিটা retrieval-এর ফল দিয়ে পরের প্রশ্ন তৈরি</div>

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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Entity Resolution Failure:</strong> 'John' and 'J. Smith' treated as different people. Fix: entity linking before injection.</div></div>


<div class="code-block">Production Context Architecture — Complete Pipeline:

# ──────────────────────────────────────────# 
#  USER QUERY: "How does RAG handle           # 
#  multi-hop questions?"                      # 
# ──────────────────# ───────────────────────# 
                   ↓
# ──────────────────────────────────────────# 
#  ১. QUERY UNDERSTANDING                     # 
#  • Query classification (factual? multi-hop?)# 
#  • Query rewriting (optimize for retrieval) # 
#  • Sub-question decomposition (if multi-hop) # 
# ──────────────────# ───────────────────────# 
                   ↓
# ──────────────────────────────────────────# 
#  ২. RETRIEVAL (Hybrid)                      # 
#  • Dense search → top-50 (semantic)         # 
#  • Sparse/BM25 search → top-50 (keyword)    # 
#  • RRF fusion → top-20                      # 
# ──────────────────# ───────────────────────# 
                   ↓
# ──────────────────────────────────────────# 
#  ৩. RERANKING (Cross-encoder)               # 
#  • Query * each doc → score                 # 
#  • top-20 → top-5                           # 
# ──────────────────# ───────────────────────# 
                   ↓
# ──────────────────────────────────────────# 
#  ৪. CONTEXT ASSEMBLY (Positioning)          # 
#  • System prompt (top — primacy)            # 
#  • Less relevant docs (middle)              # 
#  • Most relevant docs (bottom — recency)    # 
#  • User query (very bottom)                 # 
#  • Budget check (total < 32K)               # 
# ──────────────────# ───────────────────────# 
                   ↓
# ──────────────────────────────────────────# 
#  ৫. COMPRESSION (if needed)                 # 
#  • LLMLingua — remove low-info tokens       # 
#  • Extractive — keep only relevant sentences# 
# ──────────────────# ───────────────────────# 
                   ↓
# ──────────────────────────────────────────# 
#  ৬. LLM GENERATION                          # 
#  • temperature=0 (factual)                  # 
#  • Structured output (citation required)    # 
#  • Streaming (user sees fast)               # 
# ──────────────────# ───────────────────────# 
                   ↓
# ──────────────────────────────────────────# 
#  ৭. POST-PROCESSING                         # 
#  • Citation verification                    # 
#  • Confidence scoring (logprobs)            # 
#  • Hallucination check (self-verify)        # 
#  • Memory update (entity/summary)           # 
# ──────────────────# ───────────────────────# 
                   ↓
# ──────────────────────────────────────────# 
#  ANSWER: "RAG handles multi-hop through     # 
#  iterative retrieval [Source: doc3, p.12].  # 
#  First, it decomposes the question [doc1],  # 
#  then retrieves for each sub-question       # 
#  [doc5]..."                                 # 
# ──────────────────────────────────────────# 

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

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrCtx10" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#5eead4"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0a1f1a" rx="10"/>
  <text x="290" y="26" text-anchor="middle" fill="#e8e6f0" font-size="13" font-weight="bold">🎯 Production Pipeline — সাতটি ধাপ</text>
  <rect x="15" y="48" width="120" height="48" fill="#1e3a5f" stroke="#5b9eff" stroke-width="1.5" rx="6"/>
  <text x="75" y="66" text-anchor="middle" fill="#5b9eff" font-size="10" font-weight="bold">১. Query</text>
  <text x="75" y="78" text-anchor="middle" fill="#7dd3fc" font-size="10">rewrite · decompose</text>
  <text x="75" y="89" text-anchor="middle" fill="#5e5c74" font-size="9">~৫০ms</text>
  <line x1="135" y1="72" x2="150" y2="72" stroke="#5eead4" stroke-width="1.2" marker-end="url(#arrCtx10)"/>
  <rect x="155" y="48" width="120" height="48" fill="#0d3b34" stroke="#52c41a" stroke-width="1.5" rx="6"/>
  <text x="215" y="66" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">২. Retrieve</text>
  <text x="215" y="78" text-anchor="middle" fill="#4ade80" font-size="10">hybrid · top-২০</text>
  <text x="215" y="89" text-anchor="middle" fill="#5e5c74" font-size="9">~১০০ms</text>
  <line x1="275" y1="72" x2="290" y2="72" stroke="#5eead4" stroke-width="1.2" marker-end="url(#arrCtx10)"/>
  <rect x="295" y="48" width="120" height="48" fill="#3b2a05" stroke="#fbbf24" stroke-width="1.5" rx="6"/>
  <text x="355" y="66" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">৩. Rerank</text>
  <text x="355" y="78" text-anchor="middle" fill="#fcd34d" font-size="10">cross-encoder · top-৫</text>
  <text x="355" y="89" text-anchor="middle" fill="#5e5c74" font-size="9">~১০০ms</text>
  <line x1="415" y1="72" x2="430" y2="72" stroke="#5eead4" stroke-width="1.2" marker-end="url(#arrCtx10)"/>
  <rect x="435" y="48" width="130" height="48" fill="#1a1a2e" stroke="#b37feb" stroke-width="1.5" rx="6"/>
  <text x="500" y="66" text-anchor="middle" fill="#b37feb" font-size="10" font-weight="bold">৪. Assemble</text>
  <text x="500" y="78" text-anchor="middle" fill="#b37feb" font-size="10">position · budget</text>
  <text x="500" y="89" text-anchor="middle" fill="#5e5c74" font-size="9">~৫ms</text>
  <line x1="500" y1="96" x2="500" y2="116" stroke="#5eead4" stroke-width="1.2" marker-end="url(#arrCtx10)"/>
  <rect x="435" y="120" width="130" height="48" fill="#2a0d3b" stroke="#b37feb" stroke-width="1.5" rx="6"/>
  <text x="500" y="138" text-anchor="middle" fill="#b37feb" font-size="10" font-weight="bold">৫. Compress</text>
  <text x="500" y="150" text-anchor="middle" fill="#b37feb" font-size="10">LLMLingua · extract</text>
  <text x="500" y="161" text-anchor="middle" fill="#5e5c74" font-size="9">~৫০ms</text>
  <line x1="435" y1="144" x2="420" y2="144" stroke="#5eead4" stroke-width="1.2" marker-end="url(#arrCtx10)"/>
  <rect x="295" y="120" width="120" height="48" fill="#1e3a5f" stroke="#5b9eff" stroke-width="1.5" rx="6"/>
  <text x="355" y="138" text-anchor="middle" fill="#5b9eff" font-size="10" font-weight="bold">৬. Generate</text>
  <text x="355" y="150" text-anchor="middle" fill="#7dd3fc" font-size="10">LLM · cite · stream</text>
  <text x="355" y="161" text-anchor="middle" fill="#5e5c74" font-size="9">~২০০ms-২s</text>
  <line x1="295" y1="144" x2="280" y2="144" stroke="#5eead4" stroke-width="1.2" marker-end="url(#arrCtx10)"/>
  <rect x="155" y="120" width="120" height="48" fill="#0d3b34" stroke="#52c41a" stroke-width="1.5" rx="6"/>
  <text x="215" y="138" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">৭. Post-process</text>
  <text x="215" y="150" text-anchor="middle" fill="#4ade80" font-size="10">verify · score</text>
  <text x="215" y="161" text-anchor="middle" fill="#5e5c74" font-size="9">~৫০ms</text>
  <line x1="155" y1="144" x2="140" y2="144" stroke="#5eead4" stroke-width="1.2" marker-end="url(#arrCtx10)"/>
  <rect x="15" y="120" width="120" height="48" fill="#0d3b34" stroke="#5eead4" stroke-width="2" rx="6"/>
  <text x="75" y="138" text-anchor="middle" fill="#5eead4" font-size="10" font-weight="bold">✅ উত্তর</text>
  <text x="75" y="150" text-anchor="middle" fill="#5eead4" font-size="10">citation সহ</text>
  <text x="75" y="161" text-anchor="middle" fill="#5e5c74" font-size="9">verified</text>
  <rect x="60" y="185" width="200" height="35" fill="#1a1a2e" stroke="#5e5c74" stroke-width="0.8" rx="6"/>
  <text x="160" y="201" text-anchor="middle" fill="#e8e6f0" font-size="10" font-weight="bold">⏱ Latency</text>
  <text x="160" y="214" text-anchor="middle" fill="#7dd3fc" font-size="10">~৬০০ms - ২.৫s</text>
  <rect x="320" y="185" width="200" height="35" fill="#1a1a2e" stroke="#5e5c74" stroke-width="0.8" rx="6"/>
  <text x="420" y="201" text-anchor="middle" fill="#e8e6f0" font-size="10" font-weight="bold">💰 Cost</text>
  <text x="420" y="214" text-anchor="middle" fill="#4ade80" font-size="10">~$০.০৩ - ০.০৫/query</text>
  <text x="290" y="240" text-anchor="middle" fill="#5e5c74" font-size="10">সির — সম্পূর্ণ স্থাপত্য, সাতটি স্তর একসাথে</text>
</svg>
</div>
<div class="svg-caption">চিত্র: সম্পূর্ণ pipeline — Query থেকে উত্তর, সাতটি ধাপ, ~৬০০ms-২.৫s</div>

<div class="verse">"তিনি শিখিয়েছেন কলমের মাধ্যমে। শিখিয়েছেন মানুষকে যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>Context engineering হলো কলমের ক্যানভাস — তুমি কী দেখাও তাই মেশিন বোঝে। যে সঠিক দেখায়, সে সঠিক উত্তর পায়। যে সব ঢেলে দেয়, সে হারিয়ে যায়। দৃষ্টিই বোঝার ভিত্তি।</div>

<div class="secret-box"><div class="label">দশম দৃষ্টি — সমন্বয়</div><div class="text">🎯 Context Engineering = budget + position + chunk + retrieve + rerank + compress + remember + multi-hop।<br><small>একটাও বাদ দিলে কাঠামো দুর্বল। সব একসাথে = production RAG।</small></div></div>`
});
