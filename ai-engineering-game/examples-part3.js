// REAL CODE EXAMPLES — Part 3 (Doors 18-27: Builder's Quay + Craftsmanship + Frontier)

// ── DOOR 18: Data Chunking ──
doors[17].codeExample = _example(
  'Real Example: Text Splitting Strategies',
  'Python · langchain',
`<span class="c-comment"># মোড়লের গোলা — কাঁচা ডেটা পরিমিত টুকরোয়</span>
<span class="c-keyword">from</span> langchain.text_splitter <span class="c-keyword">import</span> (
    RecursiveCharacterTextSplitter,
    CharacterTextSplitter
)

text = <span class="c-string">"""ধারা ১: এই চুক্তি কার্যকর হবে...
ধারা ২: উভয় পক্ষ সম্মত হয় যে...
ধারা ৩: কোনো বিরোধ হলে আদালত...
ধারা ৪: এই চুক্তি ১ বছরের জন্য..."""</span>

<span class="c-comment"># কৌশল ১: Recursive (সবচেয়ে ভালো)</span>
splitter = RecursiveCharacterTextSplitter(
    chunk_size=<span class="c-var">100</span>,       <span class="c-comment"># প্রতিটা chunk ~১০০ অক্ষর</span>
    chunk_overlap=<span class="c-var">20</span>,      <span class="c-comment"># ২০ অক্ষর overlap</span>
    separators=[<span class="c-string">"\\n\\n"</span>, <span class="c-string">"\\n"</span>, <span class="c-string">". "</span>, <span class="c-string">" "</span>]  <span class="c-comment"># অনুচ্ছেদ → বাক্য → শব্দ</span>
)
chunks = splitter.split_text(text)
<span class="c-var">print</span>(<span class="c-func">len</span>(chunks), <span class="c-string">"chunks"</span>)
<span class="c-keyword">for</span> i, chunk <span class="c-keyword">in</span> <span class="c-func">enumerate</span>(chunks):
    <span class="c-var">print</span>(<span class="c-string">f"Chunk {i+1}: {chunk[:50]}..."</span>)

<span class="c-comment"># কৌশল ২: Fixed-size (সহজ কিন্তু ভাঙে)</span>
<span class="c-comment"># splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=20)</span>

<span class="c-comment"># সবচেয়ে গুরুত্বপূর্ণ: chunk_size + overlap</span>
<span class="c-comment"># বড় chunk = বেশি context, বেশি খরচ</span>
<span class="c-comment"># ছোট chunk = কম খরচ, কিন্তু অর্থ হারায়</span>
<span class="c-comment"># overlap = সম্পর্ক ভাঙে না</span>`,
  'RecursiveCharacterTextSplitter সবচেয়ে নিরাপদ। chunk_size=500, overlap=50 দিয়ে শুরু করো।'
);

// ── DOOR 19: Streaming ──
doors[18].codeExample = _example(
  'Real Example: Streaming Token by Token',
  'Python · openai',
`<span class="c-comment"># সাক্কার নল — টোকেনে টোকেনে পৌঁছে দাও</span>
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
client = OpenAI()

<span class="c-comment"># stream=True — সাথে সাথে টোকেন দাও</span>
stream = client.chat.completions.create(
    model=<span class="c-string">"gpt-4o-mini"</span>,
    messages=[{<span class="c-string">"role"</span>: <span class="c-string">"user"</span>, <span class="c-string">"content"</span>: <span class="c-string">"একটা ছোট গল্প বলো।"</span>}],
    stream=<span class="c-keyword">True</span>   <span class="c-comment"># ← এটাই স্ট্রিমিং</span>
)

<span class="c-comment"># প্রতিটা টোকেন সাথে সাথে দেখাও</span>
<span class="c-keyword">for</span> chunk <span class="c-keyword">in</span> stream:
    token = chunk.choices[<span class="c-var">0</span>].delta.content
    <span class="c-keyword">if</span> token:
        <span class="c-var">print</span>(token, end=<span class="c-string">""</span>, flush=<span class="c-keyword">True</span>)
        <span class="c-comment"># প্র...থ...ম... শ...ব্দ... আসছে...</span>

<span class="c-comment"># FastAPI + SSE (ওয়েব ব্রাউজারে স্ট্রিমিং):</span>
<span class="c-comment"># from fastapi.responses import StreamingResponse</span>
<span class="c-comment"># async def stream_endpoint(query):</span>
<span class="c-comment">#     async def generate():</span>
<span class="c-comment">#         for chunk in stream:</span>
<span class="c-comment">#             yield f"data: {chunk}\\n\\n"</span>
<span class="c-comment">#     return StreamingResponse(generate())</span>`,
  'stream=True দিলেই হলো। ব্যবহারকারী ৪০% বেশি দ্রুত মনে করে।'
);

// ── DOOR 20: Conversation Memory ──
doors[19].codeExample = _example(
  'Real Example: Managing Chat History',
  'Python · openai',
`<span class="c-comment"># তাঁতির তক্তা — পুরোনো কথা সংক্ষেপে রাখো</span>
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
client = OpenAI()

<span class="c-comment"># কথোপকথন ইতিহাস রাখো</span>
conversation = []

<span class="c-keyword">def</span> <span class="c-func">chat</span>(user_message: <span class="c-func">str</span>) -> <span class="c-func">str</span>:
    conversation.append({
        <span class="c-string">"role"</span>: <span class="c-string">"user"</span>,
        <span class="c-string">"content"</span>: user_message
    })

    <span class="c-comment"># স্লাইডিং উইন্ডো — শেষ ১০টা বার্তা রাখো</span>
    recent = conversation[-<span class="c-var">10</span>:]

    response = client.chat.completions.create(
        model=<span class="c-string">"gpt-4o-mini"</span>,
        messages=[
            {<span class="c-string">"role"</span>: <span class="c-string">"system"</span>, <span class="c-string">"content"</span>: <span class="c-string">"তুমি একজন সহকারী।"</span>},
            *recent  <span class="c-comment"># ← শেষ ১০টা বার্তা</span>
        ]
    )

    answer = response.choices[<span class="c-var">0</span>].message.content
    conversation.append({<span class="c-string">"role"</span>: <span class="c-string">"assistant"</span>, <span class="c-string">"content"</span>: answer})

    <span class="c-keyword">return</span> answer

<span class="c-comment"># ব্যবহার</span>
<span class="c-func">print</span>(<span class="c-func">chat</span>(<span class="c-string">"আমার নাম রাকিব।"</span>))       <span class="c-comment"># মনে রাখে</span>
<span class="c-func">print</span>(<span class="c-func">chat</span>(<span class="c-string">"আমার নাম কী?"</span>))         <span class="c-comment"># → "রাকিব"</span>

<span class="c-comment"># যখন conversation অনেক বড় হয়:</span>
<span class="c-comment"># ১. পুরোনো বার্তা সারাংশ বানাও (summarize)</span>
<span class="c-comment"># ২. ভেক্টর স্টোরে সংরক্ষণ (long-term memory)</span>`,
  'শেষ N-টা বার্তা রাখো (sliding window)। বড় হলে summarize করো। এটাই তাঁতির শিল্প।'
);

// ── DOOR 21: Error Handling ──
doors[20].codeExample = _example(
  'Real Example: Retry with Backoff',
  'Python · openai · time · random',
`<span class="c-comment"># সেতু নির্মাতার কাঠামো — ভাঙলে আবার, বিকল্প সহ</span>
<span class="c-keyword">import</span> time, random
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
client = OpenAI()

<span class="c-comment"># পুনঃপ্রচেষ্টা — exponential backoff + jitter</span>
<span class="c-keyword">def</span> <span class="c-func">call_with_retry</span>(messages, max_retries=<span class="c-var">3</span>):
    models = [<span class="c-string">"gpt-4o-mini"</span>, <span class="c-string">"gpt-4o"</span>]  <span class="c-comment"># fallback chain</span>

    <span class="c-keyword">for</span> model <span class="c-keyword">in</span> models:
        <span class="c-keyword">for</span> attempt <span class="c-keyword">in</span> <span class="c-func">range</span>(max_retries):
            <span class="c-keyword">try</span>:
                <span class="c-keyword">return</span> client.chat.completions.create(
                    model=model, messages=messages
                ).choices[<span class="c-var">0</span>].message.content

            <span class="c-keyword">except</span> <span class="c-func">Exception</span> <span class="c-keyword">as</span> e:
                wait = (<span class="c-var">2</span> ** attempt) + random.uniform(<span class="c-var">0</span>, <span class="c-var">1</span>)
                <span class="c-var">print</span>(<span class="c-string">f"{model} attempt {attempt+1} failed: {e}"</span>)
                <span class="c-var">print</span>(<span class="c-string">f"  waiting {wait:.1f}s..."</span>)
                time.sleep(wait)

    <span class="c-comment"># সব ব্যর্থ — graceful degradation</span>
    <span class="c-keyword">return</span> <span class="c-string">"দুঃখিত, এই মুহূর্তে সেবা অনুপলব্ধ। পরে চেষ্টা করুন।"</span>

<span class="c-comment"># ব্যবহার</span>
result = <span class="c-func">call_with_retry</span>([
    {<span class="c-string">"role"</span>: <span class="c-string">"user"</span>, <span class="c-string">"content"</span>: <span class="c-string">"হ্যালো"</span>}
])
<span class="c-var">print</span>(result)

<span class="c-comment"># ৩ স্তম্ভ:</span>
<span class="c-comment"># ১. Retry + backoff + jitter</span>
<span class="c-comment"># ২. Fallback chain (mini → 4o → local)</span>
<span class="c-comment"># ৩. Graceful degradation (বদলে বার্তা)</span>`,
  'API ভাঙবেই — প্রশ্ন নয় কখন। Retry, fallback, graceful degradation — তিন স্তম্ভ।'
);

// ── DOOR 22: Advanced RAG ──
doors[21].codeExample = _example(
  'Real Example: Vector Search + Re-ranking',
  'Python · langchain · openai',
`<span class="c-comment"># বাজপালকের বাসা — একাধিক উৎস, পুনর্বিন্যাস</span>
<span class="c-keyword">from</span> langchain_community.vectorstores <span class="c-keyword">import</span> FAISS
<span class="c-keyword">from</span> langchain_openai <span class="c-keyword">import</span> OpenAIEmbeddings, ChatOpenAI

embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_texts([
    <span class="c-string">"ছুটির নিয়ম: ২০ দিন বার্ষিক"</span>,
    <span class="c-string">"ছুটির আবেদন: HR পোর্টালে"</span>,
    <span class="c-string">"মেডিকেল ছুটি: ১৫ দিন"</span>
], embeddings)

question = <span class="c-string">"বার্ষিক ছুটি কত দিন?"</span>

<span class="c-comment"># ধাপ ১: Vector search — অর্থ দিয়ে খোঁজো</span>
results = vectorstore.similarity_search_with_score(question, k=<span class="c-var">3</span>)

<span class="c-comment"># ধাপ ২: সাধারণ কিওয়ার্ড সার্চ (Hybrid)</span>
<span class="c-comment"># উন্নত সিস্টেমে BM25 + vector মিলিয়ে যায়</span>
<span class="c-comment"># এখানে সহজ সংস্করণ:</span>
keyword_results = [d <span class="c-keyword">for</span> d, _ <span class="c-keyword">in</span> results
    <span class="c-keyword">if</span> <span class="c-string">"ছুটি"</span> <span class="c-keyword">in</span> d.page_content]

<span class="c-comment"># ধাপ ৩: Re-ranking — LLM দিয়ে সেরা বাছো</span>
llm = ChatOpenAI(model=<span class="c-string">"gpt-4o-mini"</span>)

<span class="c-keyword">def</span> <span class="c-func">rerank</span>(question, docs):
    docs_text = <span class="c-string">"\\n"</span>.join(
        <span class="c-string">f"{i+1}. {d.page_content}"</span>
        <span class="c-keyword">for</span> i, d <span class="c-keyword">in</span> <span class="c-func">enumerate</span>(docs)
    )
    ranked = llm.invoke(<span class="c-string">f"""নিচের প্রতিটা অনুচ্ছেদের প্রাসঙ্গিকতা
    স্কোর দাও (১-১০)। তারপর সেরা ৩টা নম্বর দাও:

    প্রশ্ন: {question}
    অনুচ্ছেদ:
    {docs_text}"""</span>)
    <span class="c-keyword">return</span> ranked

<span class="c-comment"># ধাপ ৪: এখন rerank ব্যবহার করো</span>
best = <span class="c-func">rerank</span>(question, keyword_results)
<span class="c-var">print</span>(best.content)
<span class="c-comment"># → সবচেয়ে প্রাসঙ্গিক অনুচ্ছেদ শীর্ষে</span>`,
  'মৌলিক RAG: vector search শুধু। উন্নত RAG: keyword + vector (hybrid) + reranking। ৯০%+ নির্ভুলতা।'
);

// ── DOOR 23: Deployment ──
doors[22].codeExample = _example(
  'Real Example: Dockerfile for AI App',
  'Dockerfile · Python',
`<span class="c-comment"># জাহাজ নির্মাতার ড্রাইডক — কন্টেইনারে মোতায়েন</span>
<span class="c-comment"># Dockerfile</span>

FROM python:3.11-slim

WORKDIR /app

<span class="c-comment"># ডিপেন্ডেন্সি</span>
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

<span class="c-comment"># কোড</span>
COPY . .

<span class="c-comment"># পোর্ট খোলো</span>
EXPOSE 8000

<span class="c-comment"># চালাও</span>
CMD [<span class="c-string">"uvicorn"</span>, <span class="c-string">"main:app"</span>, <span class="c-string">"--host"</span>, <span class="c-string">"0.0.0.0"</span>, <span class="c-string">"--port"</span>, <span class="c-string">"8000"</span>]

<span class="c-comment"># ── requirements.txt ──</span>
<span class="c-comment"># fastapi==0.115.0</span>
<span class="c-comment"># uvicorn==0.30.0</span>
<span class="c-comment"># openai==1.50.0</span>
<span class="c-comment"># langchain==0.3.0</span>
<span class="c-comment"># faiss-cpu==1.8.0</span>

<span class="c-comment"># ── চালানো ──</span>
<span class="c-comment"># docker build -t my-ai-app .</span>
<span class="c-comment"># docker run -p 8000:8000 -e OPENAI_API_KEY=sk-... my-ai-app</span>`,
  'Docker = একই বাক্স সব জায়গায়। ল্যাপটপে চলে, সার্ভারে চলে, ক্লাউডে চলে।'
);

// ── DOOR 24: Testing ──
doors[23].codeExample = _example(
  'Real Example: Golden Set Testing',
  'Python · pytest · openai',
`<span class="c-comment"># স্বর্ণকারের পরখ — গোল্ডেন সেট যাচাই</span>
<span class="c-keyword">import</span> pytest
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
client = OpenAI()

<span class="c-comment"># গোল্ডেন সেট — জ্ঞাত সঠিক উত্তর</span>
GOLDEN_SET = [
    {<span class="c-string">"q"</span>: <span class="c-string">"বাংলাদেশের রাজধানী?"</span>, <span class="c-string">"expected"</span>: <span class="c-string">"ঢাকা"</span>},
    {<span class="c-string">"q"</span>: <span class="c-string">"২+২ কত?"</span>, <span class="c-string">"expected"</span>: <span class="c-string">"৪"</span>},
    {<span class="c-string">"q"</span>: <span class="c-string">"সূর্য কোন দিকে ওঠে?"</span>, <span class="c-string">"expected"</span>: <span class="c-string">"পূর্বে"</span>},
]

<span class="c-comment"># প্রতিটা পরীক্ষা</span>
<span class="c-var">@pytest.mark.parametrize</span>(<span class="c-string">"case"</span>, GOLDEN_SET)
<span class="c-keyword">def</span> <span class="c-func">test_accuracy</span>(case):
    response = client.chat.completions.create(
        model=<span class="c-string">"gpt-4o-mini"</span>,
        messages=[{<span class="c-string">"role"</span>: <span class="c-string">"user"</span>, <span class="c-string">"content"</span>: case[<span class="c-string">"q"</span>]}]
    )
    answer = response.choices[<span class="c-var">0</span>].message.content.lower()
    <span class="c-keyword">assert</span> case[<span class="c-string">"expected"</span>].lower() <span class="c-keyword">in</span> answer, \\
        <span class="c-string">f"Expected '{case['expected']}', got '{answer}'"</span>

<span class="c-comment"># চালাও: pytest test_golden.py -v</span>
<span class="c-comment"># প্রতিটা প্রম্পট/মডেল বদলালে — এই টেস্ট চালাও</span>
<span class="c-comment"># সব পাস? নিরাপদ। কোনো ফেল? কিছু ভেঙেছে।</span>`,
  'pytest দিয়ে গোল্ডেন সেট টেস্ট। প্রতিটা পরিবর্তনে চালাও — regression ধরা পড়ে।'
);

// ── DOOR 25: Multi-Agent ──
doors[24].codeExample = _example(
  'Real Example: Prompt Chaining (2 Agents)',
  'Python · openai',
`<span class="c-comment"># পরিষদের নায়ক — এক এজেন্টের আউটপুট পরেরটার ইনপুট</span>
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
client = OpenAI()

<span class="c-comment"># এজেন্ট ১: প্রশ্ন বিশ্লেষক</span>
<span class="c-keyword">def</span> <span class="c-func">analyzer</span>(question):
    r = client.chat.completions.create(model=<span class="c-string">"gpt-4o-mini"</span>,
        messages=[{<span class="c-string">"role"</span>: <span class="c-string">"user"</span>,
                   <span class="c-string">"content"</span>: <span class="c-string">f"এই প্রশ্নের মূল বিষয় কী? ১ শব্দে: {question}"</span>}])
    <span class="c-keyword">return</span> r.choices[<span class="c-var">0</span>].message.content

<span class="c-comment"># এজেন্ট ২: উত্তরদাতা</span>
<span class="c-keyword">def</span> <span class="c-func">responder</span>(topic, question):
    r = client.chat.completions.create(model=<span class="c-string">"gpt-4o"</span>,
        messages=[{<span class="c-string">"role"</span>: <span class="c-string">"user"</span>,
                   <span class="c-string">"content"</span>: <span class="c-string">f"বিষয়: {topic}\\nপ্রশ্ন: {question}\\nউত্তর দাও।"</span>}])
    <span class="c-keyword">return</span> r.choices[<span class="c-var">0</span>].message.content

<span class="c-comment"># চেইন — এজেন্ট ১ → এজেন্ট ২</span>
question = <span class="c-string">"AI দিয়ে কি কৃষিতে সাহায্য করা যায়?"</span>
topic = <span class="c-func">analyzer</span>(question)           <span class="c-comment"># → "কৃষি"</span>
answer = <span class="c-func">responder</span>(topic, question)     <span class="c-comment"># → বিস্তারিত উত্তর</span>
<span class="c-var">print</span>(answer)

<span class="c-comment"># সমান্তরাল: asyncio.gather() দিয়ে একসাথে</span>
<span class="c-comment"># Orchestrator-Workers: langgraph দিয়ে</span>`,
  'এক এজেন্টের আউটপুট পরেরটার ইনপুট। সহজ থেকে জটিল। LangGraph দিয়ে বড় সিস্টেম।'
);

// ── DOOR 26: MCP ──
doors[25].codeExample = _example(
  'Real Example: MCP Server Concept',
  'Python · mcp · concept',
`<span class="c-comment"># সর্বজনীন সংযোগের কারখানা — এক স্ট্যান্ডার্ড</span>
<span class="c-comment"># MCP Server: একটা টুল বা ডেটা উৎস</span>

<span class="c-comment"># ── MCP Server বানানো (তাত্ত্বিক) ──</span>
<span class="c-keyword">from</span> mcp.server <span class="c-keyword">import</span> Server
<span class="c-keyword">from</span> mcp.types <span class="c-keyword">import</span> Tool, TextContent

server = Server(<span class="c-string">"my-file-reader"</span>)

<span class="c-var">@server.list_tools()</span>
<span class="c-keyword">async def</span> <span class="c-func">list_tools</span>():
    <span class="c-keyword">return</span> [Tool(
        name=<span class="c-string">"read_file"</span>,
        description=<span class="c-string">"একটা ফাইলের বিষয়বস্তু পড়ো"</span>,
        inputSchema={
            <span class="c-string">"type"</span>: <span class="c-string">"object"</span>,
            <span class="c-string">"properties"</span>: {
                <span class="c-string">"path"</span>: {<span class="c-string">"type"</span>: <span class="c-string">"string"</span>}
            }
        }
    )]

<span class="c-var">@server.call_tool()</span>
<span class="c-keyword">async def</span> <span class="c-func">call_tool</span>(name, arguments):
    <span class="c-keyword">if</span> name == <span class="c-string">"read_file"</span>:
        <span class="c-keyword">with</span> <span class="c-func">open</span>(arguments[<span class="c-string">"path"</span>]) <span class="c-keyword">as</span> f:
            <span class="c-keyword">return</span> [TextContent(type=<span class="c-string">"text"</span>, text=f.read())]

<span class="c-comment"># এখন যেকোনো MCP Client (Claude, Cursor) এই টুল ব্যবহার করতে পারে।</span>
<span class="c-comment"># প্রতিটা AI অ্যাপের জন্য আলাদা সংযোগ নয়।</span>
<span class="c-comment"># এক Server — সব Client চেনে। এটাই MCP।</span>`,
  'pip install mcp। MCP = AI-এর USB-C। এক Server বানাও, সব AI অ্যাপ চেনে।'
);

// ── DOOR 27: Guardrails ──
doors[26].codeExample = _example(
  'Real Example: Input/Output Filtering',
  'Python · openai',
`<span class="c-comment"># শুল্ক পরিদর্শকের ফটক — দুই দিকে পরিদর্শন</span>
<span class="c-keyword">import</span> re
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
client = OpenAI()

<span class="c-comment"># PII প্যাটার্ন — ব্যক্তিগত তথ্য</span>
PII_PATTERNS = {
    <span class="c-string">"phone"</span>: re.compile(<span class="c-string">r"01\\d{9}"</span>),
    <span class="c-string">"nid"</span>: re.compile(<span class="c-string">r"\\d{10,17}"</span>),
    <span class="c-string">"card"</span>: re.compile(<span class="c-string">r"\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}"</span>),
}

<span class="c-comment"># ইনপুট ফিল্টার — ভেতরে আসা যাচাই</span>
<span class="c-keyword">def</span> <span class="c-func">filter_input</span>(user_text):
    <span class="c-keyword">for</span> pii_type, pattern <span class="c-keyword">in</span> PII_PATTERNS.items():
        <span class="c-keyword">if</span> pattern.search(user_text):
            <span class="c-keyword">return</span> <span class="c-keyword">False</span>, <span class="c-string">f"ব্যক্তিগত তথ্য ({pii_type}) দেওয়া যাবে না"</span>
    <span class="c-keyword">return</span> <span class="c-keyword">True</span>, <span class="c-string">"নিরাপদ"</span>

<span class="c-comment"># আউটপুট ফিল্টার — বাইরে যাওয়া যাচাই</span>
<span class="c-keyword">def</span> <span class="c-func">filter_output</span>(ai_text):
    <span class="c-comment"># PII মুছো</span>
    clean = ai_text
    <span class="c-keyword">for</span> pattern <span class="c-keyword">in</span> PII_PATTERNS.values():
        clean = pattern.sub(<span class="c-string">"[REDACTED]"</span>, clean)
    <span class="c-keyword">return</span> clean

<span class="c-comment"># পূর্ণ গার্ডরেইল পাইপলাইন</span>
<span class="c-keyword">def</span> <span class="c-func">safe_chat</span>(user_message):
    <span class="c-comment"># ইনপুট যাচাই</span>
    ok, msg = <span class="c-func">filter_input</span>(user_message)
    <span class="c-keyword">if</span> <span class="c-keyword">not</span> ok:
        <span class="c-keyword">return</span> msg

    <span class="c-comment"># LLM কল</span>
    response = client.chat.completions.create(
        model=<span class="c-string">"gpt-4o-mini"</span>,
        messages=[{<span class="c-string">"role"</span>: <span class="c-string">"user"</span>, <span class="c-string">"content"</span>: user_message}]
    )
    raw_answer = response.choices[<span class="c-var">0</span>].message.content

    <span class="c-comment"># আউটপুট যাচাই</span>
    safe_answer = <span class="c-func">filter_output</span>(raw_answer)
    <span class="c-keyword">return</span> safe_answer

<span class="c-var">print</span>(<span class="c-func">safe_chat</span>(<span class="c-string">"আমার ফোন 01712345678, কী করি?"</span>))
<span class="c-comment"># → "ব্যক্তিগত তথ্য (phone) দেওয়া যাবে না"</span>`,
  'দুই দিকে ফিল্টার। ভেতরে: injection, PII আটকাও। বাইরে: বিষাক্ত, PII লিক আটকাও।'
);
