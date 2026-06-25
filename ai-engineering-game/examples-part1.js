// REAL CODE EXAMPLES — Part 1 (Doors 1-9: Foundation + Mastery start)
// Attaches real, copy-pasteable Python code to each door
// Loaded AFTER all doors-part*.js, BEFORE engine.js

function _example(title, lang, code, note) {
  return `<div class="real-example-section">
    <div class="real-example-header">
      <div class="terminal-dots"><span></span><span></span><span></span></div>
      <div class="real-example-title">🔧 ${title}</div>
      <div class="real-example-lang">${lang}</div>
    </div>
    <div class="real-example-body">${code}</div>
    ${note?`<div class="real-example-note">💡 ${note}</div>`:''}
  </div>`;
}

// ── DOOR 1: LLM = Generator, Not Database ──
doors[0].codeExample = _example(
  'বাস্তব উদাহরণ — Real Example: Your First LLM Call',
  'Python · openai',
`<span class="c-comment"># গল্পবলিয়ের হাট — the Storyteller generates, never retrieves</span>
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI

client = OpenAI()

<span class="c-comment"># প্রশ্ন করো — ask the storyteller</span>
response = client.chat.completions.create(
    model=<span class="c-string">"gpt-4o-mini"</span>,
    messages=[
        {<span class="c-string">"role"</span>: <span class="c-string">"user"</span>, <span class="c-string">"content"</span>: <span class="c-string">"বাংলাদেশের রাজধানী কী?"</span>}
    ]
)

<span class="c-var">print</span>(response.choices[<span class="c-var">0</span>].message.content)
<span class="c-comment"># → "বাংলাদেশের রাজধানী ঢাকা।"</span>

<span class="c-comment"># কিন্তু মনে রাখো — সে বানায়, টানে না</span>
<span class="c-comment"># নিশ্চিত হতে উৎস যাচাই করো (Door 4: RAG)</span>`,
  'pip install openai দিয়ে শুরু। API key পাবে platform.openai.com থেকে।'
);

// ── DOOR 2: Prompt Engineering ──
doors[1].codeExample = _example(
  'Real Example: Role + Task + Format Prompting',
  'Python · openai',
`<span class="c-comment"># ক্যালিগ্রাফারের নিয়ম — Role + Task + Format</span>
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
client = OpenAI()

<span class="c-comment"># খারাপ প্রম্পট — অস্পষ্ট</span>
<span class="c-comment"># prompt = "মহাকর্ষ ব্যাখ্যা করো"</span>

<span class="c-comment"># ভালো প্রম্পট — Role + Task + Format</span>
response = client.chat.completions.create(
    model=<span class="c-string">"gpt-4o-mini"</span>,
    messages=[
        {
            <span class="c-string">"role"</span>: <span class="c-string">"system"</span>,  <span class="c-comment"># ← ROLE</span>
            <span class="c-string">"content"</span>: <span class="c-string">"তুমি একজন বিজ্ঞান শিক্ষক। সহজ ভাষায় ব্যাখ্যা করো।"</span>
        },
        {
            <span class="c-string">"role"</span>: <span class="c-string">"user"</span>,    <span class="c-comment"># ← TASK</span>
            <span class="c-string">"content"</span>: <span class="c-string">"১০ বছরের শিশুকে মহাকর্ষ ব্যাখ্যা করো।"</span>
        }
    ],
    <span class="c-comment"># ← FORMAT (response_format দিয়ে)</span>
    response_format={<span class="c-string">"type"</span>: <span class="c-string">"text"</span>}
)`,
  'system message = Role, user message = Task, response_format = Format। এই তিনটি দিলে ভুল কমে।'
);

// ── DOOR 3: Context Engineering ──
doors[2].codeExample = _example(
  'Real Example: Giving Context to the LLM',
  'Python · openai',
`<span class="c-comment"># রাষ্ট্রদূতের দরজা — context দাও, অনুমান বন্ধ করো</span>
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
client = OpenAI()

<span class="c-comment"># context ছাড়া — সাধারণ উত্তর</span>
<span class="c-comment"># response = client.chat.completions.create(</span>
<span class="c-comment">#     model="gpt-4o-mini",</span>
<span class="c-comment">#     messages=[{"role":"user","content":"আমাদের ছুটির নিয়ম কী?"}]</span>
<span class="c-comment"># )</span>

<span class="c-comment"># context সহ — সঠিক উত্তর</span>
company_policy = <span class="c-string">"""কোম্পানি নীতি:
- বার্ষিক ছুটি: ২০ দিন
- মেডিকেল ছুটি: ১৫ দিন
- ক্যাজুয়াল ছুটি: ১০ দিন
- ছুটি গড়ে নেওয়া যায় না"""</span>

response = client.chat.completions.create(
    model=<span class="c-string">"gpt-4o-mini"</span>,
    messages=[
        {<span class="c-string">"role"</span>: <span class="c-string">"system"</span>, <span class="c-string">"content"</span>: <span class="c-string">"তুমি এইচআর সহকারী। শুধু নিচের নীতি অনুসরণ করো।"</span>},
        {<span class="c-string">"role"</span>: <span class="c-string">"system"</span>, <span class="c-string">"content"</span>: company_policy},
        {<span class="c-string">"role"</span>: <span class="c-string">"user"</span>, <span class="c-string">"content"</span>: <span class="c-string">"আমি কি ২৫ দিন বার্ষিক ছুটি নিতে পারি?"</span>}
    ]
)
<span class="c-var">print</span>(response.choices[<span class="c-var">0</span>].message.content)
<span class="c-comment"># → "না, বার্ষিক ছুটি ২০ দিন। ২৫ দিন সম্ভব নয়।"</span>`,
  'Context যত বেশি, উত্তর তত নির্ভুল। কিন্তু context window নির্দিষ্ট — গুরুত্বপূর্ণ অংশ দাও।'
);

// ── DOOR 4: RAG ──
doors[3].codeExample = _example(
  'Real Example: Basic RAG Pipeline',
  'Python · langchain · openai',
`<span class="c-comment"># বিচারপতির কক্ষ — গোডাউন থেকে সাক্ষ্য টেনে আনো</span>
<span class="c-keyword">from</span> langchain_community.vectorstores <span class="c-keyword">import</span> FAISS
<span class="c-keyword">from</span> langchain_openai <span class="c-keyword">import</span> OpenAIEmbeddings, ChatOpenAI
<span class="c-keyword">from</span> langchain.text_splitter <span class="c-keyword">import</span> RecursiveCharacterTextSplitter

<span class="c-comment"># ১. নথি প্রস্তুত করো</span>
documents = [<span class="c-string">"কোম্পানি নীতি: বার্ষিক ছুটি ২০ দিন..."</span>, <span class="c-string">"মেডিকেল ছুটি ১৫ দিন..."</span>]
splitter = RecursiveCharacterTextSplitter(chunk_size=<span class="c-var">500</span>, chunk_overlap=<span class="c-var">50</span>)
chunks = splitter.create_documents(documents)

<span class="c-comment"># ২. গোডাউন বানাও (embeddings → vector store)</span>
embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(chunks, embeddings)

<span class="c-comment"># ৩. প্রশ্ন এলে — সাক্ষ্য খোঁজো</span>
question = <span class="c-string">"বার্ষিক ছুটি কত দিন?"</span>
relevant_docs = vectorstore.similarity_search(question, k=<span class="c-var">3</span>)
context = <span class="c-string">"\\n\\n"</span>.join([doc.page_content <span class="c-keyword">for</span> doc <span class="c-keyword">in</span> relevant_docs])

<span class="c-comment"># ৪. সাক্ষ্য + প্রশ্ন → LLM</span>
llm = ChatOpenAI(model=<span class="c-string">"gpt-4o-mini"</span>)
answer = llm.invoke(<span class="c-string">f"""নিচের তথ্য দেখে উত্তর দাও:

{context}

প্রশ্ন: {question}"""</span>)
<span class="c-var">print</span>(answer.content)`,
  'pip install langchain langchain-openai faiss-cpu। এটি মৌলিক RAG — Door 18 (chunking) আর Door 22 (advanced RAG) এ আরও শিখবে।'
);

// ── DOOR 5: Tool Use / Function Calling ──
doors[4].codeExample = _example(
  'Real Example: Function Calling',
  'Python · openai',
`<span class="c-comment"># চিকিৎসকের ক্লিনিক — LLM সিদ্ধান্ত দেয়, টুল কাজ করে</span>
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
client = OpenAI()

<span class="c-comment"># টুল সংজ্ঞা — LLM কে কী করতে পারে বলে দাও</span>
tools = [{
    <span class="c-string">"type"</span>: <span class="c-string">"function"</span>,
    <span class="c-string">"function"</span>: {
        <span class="c-string">"name"</span>: <span class="c-string">"get_weather"</span>,
        <span class="c-string">"description"</span>: <span class="c-string">"কোনো শহরের আবহাওয়া দাও"</span>,
        <span class="c-string">"parameters"</span>: {
            <span class="c-string">"type"</span>: <span class="c-string">"object"</span>,
            <span class="c-string">"properties"</span>: {
                <span class="c-string">"city"</span>: {<span class="c-string">"type"</span>: <span class="c-string">"string"</span>, <span class="c-string">"description"</span>: <span class="c-string">"শহরের নাম"</span>}
            },
            <span class="c-string">"required"</span>: [<span class="c-string">"city"</span>]
        }
    }
}]

<span class="c-comment"># LLM সিদ্ধান্ত নেয় — কোন টুল দরকার</span>
response = client.chat.completions.create(
    model=<span class="c-string">"gpt-4o-mini"</span>,
    messages=[{<span class="c-string">"role"</span>: <span class="c-string">"user"</span>, <span class="c-string">"content"</span>: <span class="c-string">"ঢাকার আবহাওয়া কেমন?"</span>}],
    tools=tools
)

<span class="c-comment"># LLM বলেছে: get_weather(city="Dhaka") ডাকো</span>
tool_call = response.choices[<span class="c-var">0</span>].message.tool_calls[<span class="c-var">0</span>]
<span class="c-var">print</span>(tool_call.function.name)  <span class="c-comment"># → get_weather</span>
<span class="c-var">print</span>(tool_call.function.arguments) <span class="c-comment"># → {"city": "Dhaka"}</span>

<span class="c-comment"># এখন তুমি আসল API ডাকো, ফলাফল LLM-কে দাও</span>`,
  'LLM টুল চালায় না — সে শুধু বলে কোন টুল দরকার। টুল তুমি চালাও।'
);

// ── DOOR 6: Evals ──
doors[5].codeExample = _example(
  'Real Example: Evaluating LLM Output',
  'Python · openai',
`<span class="c-comment"># সুগন্ধি বাজার — পাঁচটা মাত্রায় মাপো</span>
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
client = OpenAI()

<span class="c-comment"># মূল্যায়ন ফাংশন — LLM দিয়ে LLM যাচাই</span>
<span class="c-keyword">def</span> <span class="c-func">evaluate</span>(question, answer, expected):
    eval_prompt = <span class="c-string">f"""নিচের উত্তর যাচাই করো:

    প্রশ্ন: {question}
    প্রত্যাশিত: {expected}
    উত্তর: {answer}

    চারটা মাত্রায় স্কোর দাও (১-৫):
    ১. Accuracy (সঠিকতা)
    ২. Relevance (প্রাসঙ্গিকতা)
    ৩. Completeness (সম্পূর্ণতা)
    ৪. Safety (নিরাপত্তা)"""</span>

    result = client.chat.completions.create(
        model=<span class="c-string">"gpt-4o-mini"</span>,
        messages=[{<span class="c-string">"role"</span>: <span class="c-string">"user"</span>, <span class="c-string">"content"</span>: eval_prompt}]
    )
    <span class="c-keyword">return</span> result.choices[<span class="c-var">0</span>].message.content

<span class="c-comment"># একটা উত্তর যাচাই</span>
score = <span class="c-func">evaluate</span>(
    question=<span class="c-string">"বাংলাদেশের রাজধানী?"</span>,
    answer=<span class="c-string">"চট্টগ্রাম"</span>,
    expected=<span class="c-string">"ঢাকা"</span>
)
<span class="c-var">print</span>(score)  <span class="c-comment"># → Accuracy: ১/৫ (ভুল!)</span>`,
  'LLM-as-judge প্যাটার্ন — একটা LLM দিয়ে অন্য LLM-এর উত্তর যাচাই। Door 24 (Testing) এ আরও গভীরে যাবে।'
);

// ── DOOR 7: System Design ──
doors[6].codeExample = _example(
  'Real Example: AI App Architecture (FastAPI)',
  'Python · fastapi · openai',
`<span class="c-comment"># জলের টাওয়ার — সিস্টেম ডিজাইন: নির্ভরযোগ্য কাঠামো</span>
<span class="c-keyword">from</span> fastapi <span class="c-keyword">import</span> FastAPI
<span class="c-keyword">from</span> pydantic <span class="c-keyword">import</span> BaseModel
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI

app = FastAPI()
client = OpenAI()

<span class="c-keyword">class</span> <span class="c-func">Query</span>(BaseModel):
    question: <span class="c-func">str</span>
    user_id: <span class="c-func">str</span>

<span class="c-comment"># স্বাস্থ্য পরীক্ষা — health check</span>
@app.get(<span class="c-string">"/health"</span>)
<span class="c-keyword">def</span> <span class="c-func">health</span>():
    <span class="c-keyword">return</span> {<span class="c-string">"status"</span>: <span class="c-string">"ok"</span>}

<span class="c-comment"># মূল endpoint</span>
@app.post(<span class="c-string">"/ask"</span>)
<span class="c-keyword">def</span> <span class="c-func">ask</span>(query: Query):
    <span class="c-keyword">try</span>:
        response = client.chat.completions.create(
            model=<span class="c-string">"gpt-4o-mini"</span>,
            messages=[{<span class="c-string">"role"</span>: <span class="c-string">"user"</span>, <span class="c-string">"content"</span>: query.question}]
        )
        <span class="c-keyword">return</span> {<span class="c-string">"answer"</span>: response.choices[<span class="c-var">0</span>].message.content}
    <span class="c-keyword">except</span> <span class="c-func">Exception</span> <span class="c-keyword">as</span> e:
        <span class="c-keyword">return</span> {<span class="c-string">"error"</span>: <span class="c-func">str</span>(e)}

<span class="c-comment"># চালাও: uvicorn main:app --reload</span>`,
  'pip install fastapi uvicorn। এটি সব AI অ্যাপের ভিত্তি — API endpoint যা LLM ডাকে।'
);

// ── DOOR 8: Embeddings & Vector Search ──
doors[7].codeExample = _example(
  'Real Example: Embeddings & Similarity Search',
  'Python · openai · numpy',
`<span class="c-comment"># মানচিত্রকারের গ্লোব — অর্থকে স্থানাঙ্কে রূপান্তর</span>
<span class="c-keyword">from</span> openai <span class="c-keyword">import</span> OpenAI
<span class="c-keyword">import</span> numpy <span class="c-keyword">as</span> np

client = OpenAI()

<span class="c-comment"># শব্দের embedding বের করো</span>
<span class="c-keyword">def</span> <span class="c-func">get_embedding</span>(text):
    response = client.embeddings.create(
        input=text,
        model=<span class="c-string">"text-embedding-3-small"</span>
    )
    <span class="c-keyword">return</span> response.data[<span class="c-var">0</span>].embedding

<span class="c-comment"># তিনটা শব্দের embedding</span>
cloud = <span class="c-func">get_embedding</span>(<span class="c-string">"মেঘ"</span>)
rain = <span class="c-func">get_embedding</span>(<span class="c-string">"বৃষ্টি"</span>)
chair = <span class="c-func">get_embedding</span>(<span class="c-string">"চেয়ার"</span>)

<span class="c-comment"># cosine similarity — কতটা কাছাকাছি?</span>
<span class="c-keyword">def</span> <span class="c-func">cosine_sim</span>(a, b):
    <span class="c-keyword">return</span> np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

<span class="c-var">print</span>(<span class="c-string">"মেঘ ↔ বৃষ্টি:"</span>, <span class="c-func">cosine_sim</span>(cloud, rain))  <span class="c-comment"># → 0.85 (কাছাকাছি)</span>
<span class="c-var">print</span>(<span class="c-string">"মেঘ ↔ চেয়ার:"</span>, <span class="c-func">cosine_sim</span>(cloud, chair)) <span class="c-comment"># → 0.25 (দূরে)</span>`,
  'Embedding হলো অর্থের স্থানাঙ্ক। কাছের অর্থ = কাছাকাছি স্থানাঙ্ক। এটিই Vector Search-এর ভিত্তি।'
);

// ── DOOR 9: Fine-tuning ──
doors[8].codeExample = _example(
  'Real Example: Fine-tuning Data Prep',
  'Python · openai',
`<span class="c-comment"># কারিগরের কামারশালা — মডেলের স্বভাব বদলো</span>
<span class="c-keyword">import</span> json

<span class="c-comment"># Fine-tuning ডেটা তৈরি (JSONL format)</span>
training_data = [
    {
        <span class="c-string">"messages"</span>: [
            {<span class="c-string">"role"</span>: <span class="c-string">"system"</span>, <span class="c-string">"content"</span>: <span class="c-string">"তুমি একজন বাংলা আইনি সহকারী।"</span>},
            {<span class="c-string">"role"</span>: <span class="c-string">"user"</span>, <span class="c-string">"content"</span>: <span class="c-string">"তালাকের নিয়ম কী?"</span>},
            {<span class="c-string">"role"</span>: <span class="c-string">"assistant"</span>, <span class="c-string">"content"</span>: <span class="c-string">"বাংলাদেশি আইনে তালাক..."</span>}
        ]
    },
    <span class="c-comment"># ... আরও ৫০-১০০টা উদাহরণ</span>
]

<span class="c-comment"># JSONL ফাইলে সংরক্ষণ</span>
<span class="c-keyword">with</span> <span class="c-func">open</span>(<span class="c-string">"training.jsonl"</span>, <span class="c-string">"w"</span>) <span class="c-keyword">as</span> f:
    <span class="c-keyword">for</span> item <span class="c-keyword">in</span> training_data:
        f.write(json.dumps(item) + <span class="c-string">"\\n"</span>)

<span class="c-comment"># OpenAI-তে আপলোড</span>
<span class="c-comment"># client.files.create(file=open("training.jsonl","rb"),</span>
<span class="c-comment">#                     purpose="fine-tune")</span>
<span class="c-comment"># client.fine_tuning.jobs.create(</span>
<span class="c-comment">#     training_file=file.id,</span>
<span class="c-comment">#     model="gpt-4o-mini-2024-07-18"</span>
<span class="c-comment"># )</span>

<span class="c-comment"># RAG vs Fine-tuning:</span>
<span class="c-comment"># RAG = নতুন জ্ঞান যোগ করো (Door 4)</span>
<span class="c-comment"># Fine-tuning = নতুন স্বভাব/শৈলী শেখাও</span>`,
  'RAG যখন নতুন তথ্য দরকার, Fine-tuning যখন নতুন আচরণ/শৈলী দরকার। ৫০+ উদাহরণ লাগে। উন্মুক্ত মডেলে LoRA/QLoRA ব্যবহার করা হয়।'
);
