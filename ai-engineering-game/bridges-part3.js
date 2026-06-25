// CODE BRIDGES — Part 3 (Doors 19-27)

// ── DOOR 19: Streaming ──
doors[18].codeBridge = _bridge(
  '<strong>সাক্কা এক ঢেলে এক ঢেলে পানি দেন, সব একসাথে নয়।</strong> কোডে <code>stream=True</code> হলো সেই ধীরে ঢালা — মডেল পুরো উত্তর বানানোর জন্য অপেক্ষা করে না, প্রতিটা টোকেন সাথে সাথে পাঠায়। <code>for chunk in stream</code> হলো গ্লাসে পানি জমা হওয়ার মতো — এক ফোঁটা, তারপর আরেক ফোঁটা। <code>flush=True</code> দিয়ে সাথে সাথে স্ক্রিনে দেখানো হয়। <span class="en">stream=True = pour gradually. for chunk = catch each drop. flush=True = display immediately.</span>',
  '<strong>openai</strong> — কারণ streaming সব প্রধান API-তে সাপোর্টেড। ওয়েবে দেখাতে <strong>FastAPI StreamingResponse</strong> + <strong>SSE</strong> (Server-Sent Events) ব্যবহার করা হয়। WebSocket-এর চেয়ে SSE সহজ — কারণ এটি একমুখী (সার্ভার → ব্রাউজার), আর LLM-এর উত্তর ঠিক একমুখী। <span class="en">Streaming supported everywhere. Web delivery: SSE (simpler than WebSocket for one-way server→browser).</span>',
  '<strong>কেন ৪০% দ্রুত মনে হয়?</strong> কারণ মস্তিষ্ক অপেক্ষা ঘেনতো করে, অগ্রগতি পছন্দ করে। গল্পে মুসাফির প্রথম ঢেলে পানি দেখে স্বস্তি পায় — গ্লাস অর্ধেক হলেও। একে <strong>Time-to-First-Token (TTFT)</strong> বলে — এটাই সবচেয়ে গুরুত্বপূর্ণ মেট্রিক। <span class="en">Brain prefers progress over waiting. TTFT (Time-to-First-Token) is the key UX metric.</span>'
);

// ── DOOR 20: Conversation Memory ──
doors[19].codeBridge = _bridge(
  '<strong>তাঁতি পুরোনো সুতো চেপে রাখেন, নতুন জায়গা করেন।</strong> কোডে <code>conversation</code> লিস্ট হলো তাঁতির তক্তা — প্রতিটা বার্তা সেখানে জমা হয়। <code>conversation[-10:]</code> হলো স্লাইডিং উইন্ডো — শেষ ১০টা বার্তা রাখে, বাকি বেরিয়ে যায়। গল্পে রাবিয়া পুরোনো অংশ চেপে রাখেন — কিন্তু তক্তা নির্দিষ্ট মাপের। <span class="en">conversation list = the loom. [-10:] = sliding window keeps recent messages, old ones fall off.</span>',
  '<strong>openai</strong> সরাসরি — কারণ মেমোরি শুধু বার্তা জমানো ও পাঠানো। কিন্তু উন্নত মেমোরির জন্য <strong>LangChain ConversationBufferMemory</strong>, <strong>Mem0</strong> (long-term), <strong>Zep</strong> (persistent) ব্যবহার করা হয়। গল্পের তাঁতির তিন কৌশল — LangChain-এও তিন কৌশল: buffer, summary, vector store। <span class="en">Memory = storing and re-sending messages. Advanced: LangChain Memory, Mem0, Zep.</span>',
  '<strong>কেন শুধু শেষ ১০টা?</strong> কারণ context window নির্দিষ্ট — রাষ্ট্রদূতের কথা (Door 3)। ১০০টা বার্তা পাঠালে টোকেন লিমিট ছাড়িয়ে যায়, খরচ বাড়ে। ১০টা রাখলে সাম্প্রতিক প্রসঙ্গ টিকে থাকে, খরচ নিয়ন্ত্রণে। তাঁতির মতো — জায়গা সীমিত, গুরুত্বপূর্ণ অংশ রাখো। <span class="en">Last 10 only: context window is limited. More messages = more tokens = more cost.</span>'
);

// ── DOOR 21: Error Handling ──
doors[20].codeBridge = _bridge(
  '<strong>সেতু নির্মাতা তিন স্তম্ভ দেন — একটা ভাঙলে দুটো টিকে।</strong> কোডে তিনটি সুরক্ষা: ১) <code>retry</code> লুপ = প্রথম স্তম্ভ (আবার চেষ্টা করো), ২) <code>models</code> লিস্ট = দ্বিতীয় স্তম্ভ (বিকল্প মডেল), ৩) <code>return "দুঃখিত..."</code> = তৃতীয় স্তম্ভ (graceful degradation)। <code>2 ** attempt</code> হলো exponential backoff — প্রতিবার দ্বিগুণ অপেক্ষা। <code>random.uniform(0,1)</code> হলো jitter — এলোমেলো বিলম্ব, যাতে সব ক্লায়েন্ট একসাথে আবার না হামলে। <span class="en">Three supports: retry loop, model fallback, graceful message. Exponential backoff + jitter prevents thundering herd.</span>',
  '<strong>time, random</strong> (Python স্ট্যান্ডার্ড) — কারণ বিলম্ব ও এলোমেলোতা কোনো লাইব্রেরি ছাড়াই করা যায়। উন্নত সমাধান: <strong>Tenacity</strong> লাইব্রেরি (retry decorator), <strong>CircuitBreaker</strong> প্যাটার্ন। গল্পের সেতু নির্মাতার ঝড়ের খাতা — production-এ <strong>Sentry</strong> বা <strong>BetterStack</strong> সেই খাতা রাখে। <span class="en">time/random = built-in. Advanced: Tenacity for retries, Sentry for error tracking.</span>',
  '<strong>কেন jitter দরকার?</strong> ছাড়া হলে: API ৩ সেকেন্ডে পড়ে → সব ১০০টা ক্লায়েন্ট ৪ সেকেন্ডে একসাথে আবার ডাকে → API আবার পড়ে। একে <strong>thundering herd</strong> বলে। Jitter দিলে প্রতিটা ক্লায়েন্ট আলাদা সময়ে ডাকে — API সুস্থ হওয়ার সময় পায়। সেতু নির্মাতার কথা: "এক স্তম্ভে সব চাপ না দিয়ে ভাগ করো।" <span class="en">Without jitter, all clients retry simultaneously = thundering herd. Jitter spreads the load.</span>'
);

// ── DOOR 22: Advanced RAG ──
doors[21].codeBridge = _bridge(
  '<strong>বাজপালক তিনটা বাজ ছাড়েন তিন দিকে, তারপর সেরা শিকার বাছেন।</strong> কোডে তিন ধাপ: ১) <code>similarity_search</code> = বাজ ১ (অর্থ দিয়ে খোঁজো), ২) keyword filter = বাজ ২ (শব্দ দিয়ে খোঁজো), ৩) <code>rerank()</code> = বাজপালকের সিদ্ধান্ত (LLM দিয়ে সেরা বাছো)। গল্পে গালিব তুলনা করেন তিন বাজের খবর — কোডে LLM তুলনা করে তিন উৎসের ফলাফল। <span class="en">Three steps mirror three falcons: vector search → keyword filter → LLM re-ranking. The falconer compares; the LLM picks best.</span>',
  '<strong>LangChain + FAISS + openai</strong> — কারণ উন্নত RAG-এ এই তিনটি একসাথে কাজ করে। উন্নত রি-র‍্যাঙ্কিং-এ <strong>Cohere Rerank</strong> (বিশেষায়িত), <strong>BGE Reranker</strong> (ওপেন সোর্স) ব্যবহার করা হয়। গল্পের শূরা (পরামর্শ) — একাধিক উৎস থেকে সিদ্ধান্ত। <span class="en">LangChain + FAISS for search. Advanced reranking: Cohere Rerank, BGE. Multiple sources = better decisions.</span>',
  '<strong>কেন শুধু vector search যথেষ্ট নয়?</strong> কারণ vector search অর্থে মেলে, কিন্তু নির্দিষ্ট শব্দ নাও মেলে। "ধারা ৪.২" খুঁজলে vector "ধারা" বোঝে, কিন্তু "৪.২" নির্ভুলভাবে ধরতে keyword search লাগে। দুই মিলিয়ে (hybrid) — বাজপালকের মতো দুই দিক থেকে শিকার। <span class="en">Vector search finds meaning; keyword search finds exact terms. Hybrid = both directions.</span>'
);

// ── DOOR 23: Deployment ──
doors[22].codeBridge = _bridge(
  '<strong>জাহাজ নির্মাতা ড্রাইডকে পরীক্ষা করেন, তারপর সমুদ্রে ছাড়েন।</strong> কোডে <strong>Dockerfile</strong> হলো ড্রাইডকের নীলনকশা — কীভাবে অ্যাপ বানাবে তার রেসিপি। <code>FROM python:3.11-slim</code> = জাহাজের কাঠামো (বেস image)। <code>COPY requirements.txt</code> + <code>RUN pip install</code> = ইঞ্জিন বসানো। <code>CMD</code> = সমুদ্রে ছাড়ার নির্দেশ। গল্পে কাশেম কাঠামো, ইঞ্জিন, মাল — তিনটি পরীক্ষা করেন। <span class="en">Dockerfile = drydock blueprint. FROM = hull, COPY+RUN = engine, CMD = launch command.</span>',
  '<strong>Docker</strong> — কারণ এটি "একবার বানাও, সব জায়গায় চালাও" এর সমাধান। ল্যাপটপে চলে, AWS-এ চলে, ডিজিটালওসান-এ চলে — একই বাক্স। উন্নত অর্কেস্ট্রেশনে <strong>Kubernetes</strong> (কয়েকটা কন্টেইনার ম্যানেজ করে), <strong>Docker Compose</strong> (মাল্টি-সার্ভিস)। জাহাজ নির্মাতার ড্রাইডক থেকে বন্দর — এটাই Docker-এর যাত্রা। <span class="en">Docker = build once, run anywhere. Advanced: Kubernetes for clusters, Compose for multi-service.</span>',
  '<strong>কেন <code>--host 0.0.0.0</code>?</strong> ডিফল্টে uvicorn শুধু localhost-এ শোনে — বাইরের দুনিয়া ঢুকতে পারে না। <code>0.0.0.0</code> দিলে সব নেটওয়ার্ক থেকে সংযোগ গ্রহণ করে। জাহাজ নির্মাতার মতো — বন্দরের ফটক খোলা রাখো, যাতে বণিক আসতে পারে। <code>OPENAI_API_KEY</code> environment variable-এ দাও — কোডে হার্ডকোড করো না। <span class="en">0.0.0.0 = listen on all interfaces. API key in env var, never hardcoded.</span>'
);

// ── DOOR 24: Testing ──
doors[23].codeBridge = _bridge(
  '<strong>স্বর্ণকার প্রতিটা গহনা পরখ পাথরে ঘষেন।</strong> কোডে <code>GOLDEN_SET</code> হলো পরখ পাথরের পরিচিত নমুনা — প্রতিটায় প্রশ্ন ও প্রত্যাশিত উত্তর। <code>@pytest.mark.parametrize</code> প্রতিটা নমুনা আলাদাভাবে পরীক্ষা করে — স্বর্ণকার যেমন প্রতিটা গহনা আলাদাভাবে ঘষেন। <code>assert</code> হলো ঘষে তুলনা — রঙ মিলল কি না। <span class="en">GOLDEN_SET = known samples on the touchstone. parametrize tests each separately. assert = rub and compare.</span>',
  '<strong>pytest</strong> — কারণ এটি Python-এ টেস্টিংয়ের স্ট্যান্ডার্ড। সহজ, শক্তিশালী, CI/CD-তে চলে। বিকল্প: <strong>unittest</strong> (Python বিল্ট-ইন), <strong>nose2</strong>। LLM-নির্দিষ্ট টেস্টিং-এ <strong>Promptfoo</strong>, <strong>DeepEval</strong>, <strong>Ragas</strong> — এগুলো স্বয়ংক্রিয়ভাবে golden set চালায় ও রিপোর্ট দেয়। <span class="en">pytest = Python testing standard. LLM-specific: Promptfoo, DeepEval, Ragas for automated eval.</span>',
  '<strong>কেন <code>case[\'expected\'].lower() in answer.lower()</code>?</strong> কারণ LLM-এর উত্তর "বাংলাদেশের রাজধানী ঢাকা" — প্রত্যাশিত শুধু "ঢাকা"। <code>in</code> দিয়ে চেক করি — উত্তরের ভেতরে প্রত্যাশিত শব্দটা আছে কি না। <code>.lower()</code> কারণ বড়-ছোট হাতের পার্থক্য এড়াতে। স্বর্ণকারের পরখ — হুবহু মিল নয়, রঙের মিল যথেষ্ট। <span class="en">in check: expected word must appear in answer. .lower() for case-insensitive match.</span>'
);

// ── DOOR 25: Multi-Agent ──
doors[24].codeBridge = _bridge(
  '<strong>পরিষদের নায়ক প্রতিটা গিল্ডকে আলাদা দায়িত্ব দেন।</strong> কোডে <code>analyzer()</code> হলো এক গিল্ড (প্রশ্ন বিশ্লেষক), <code>responder()</code> হলো আরেক গিল্ড (উত্তরদাতা)। <code>analyzer</code>-এর আউটপুট (<code>topic</code>) সরাসরি <code>responder</code>-এর ইনপুট — এটাই <strong>prompt chaining</strong>। গল্পে তামিম প্রতিটা গিল্ডকে আলাদা দরজায় পাঠান — কোডে এক এজেন্টের আউটপুট পরের এজেন্টে যায়। <span class="en">analyzer + responder = two guilds. Output of one feeds the next = prompt chaining pattern.</span>',
  '<strong>openai</strong> সরাসরি — কারণ দুইটা ফাংশন কল জোড়া লাগানো সহজ। কিন্তু জটিল মাল্টি-এজেন্ট সিস্টেমে <strong>LangGraph</strong> (LangChain-এর গ্রাফ ইঞ্জিন), <strong>CrewAI</strong>, <strong>AutoGen</strong> ব্যবহার করা হয়। গল্পের পরিষদের পাঁচ প্যাটার্ন — LangGraph-এ পাঁচটাই বানানো যায়। <span class="en">Simple chaining: raw API. Complex: LangGraph, CrewAI, AutoGen for orchestration.</span>',
  '<strong>কেন এজেন্ট ১-এ ছোট মডেল (mini), এজেন্ট ২-তে বড় (4o)?</strong> কারণ বিশ্লেষণ সহজ কাজ — mini যথেষ্ট। উত্তর দান কঠিন — 4o লাগে। কোষাধ্যক্ষের কথা (Door 14): "যেখানে তামা চলে, সোনা নয়।" প্রতিটা এজেন্টে সঠিক মডেল বাছো — খরচ কম, গুণমান বেশি। <span class="en">Different models per agent: mini for easy tasks, 4o for hard. Optimize cost per agent.</span>'
);

// ── DOOR 26: MCP ──
doors[25].codeBridge = _bridge(
  '<strong>সংযোগের স্থপতি এক স্ট্যান্ডার্ড প্লাগ বানান — সব যন্ত্রের জন্য।</strong> কোডে <code>Server</code> হলো সেই প্লাগের সকেট — এক Server বানালে যেকোনো MCP Client (Claude, Cursor, যেকোনো AI অ্যাপ) এটা ব্যবহার করতে পারে। <code>@server.list_tools()</code> হলো প্লাগের লেবেল — "আমি কী করতে পারি।" <code>@server.call_tool()</code> হলো প্লাগের কাজ — "এটা কীভাবে করি।" গল্পে জাইনব এক প্লাগ দেখান — কোডে এক Server। <span class="en">Server = the universal plug. One server works with all MCP clients. list_tools = label, call_tool = action.</span>',
  '<strong>mcp</strong> — Anthropic-এর তৈরি ওপেন স্ট্যান্ডার্ড (২০২৪)। কারণ আগে প্রতিটা AI অ্যাপের জন্য আলাদা সংযোগ বানাতে হতো — MCP সেটা বদলে দিয়েছে। এটি AI-এর "USB-C" — এক স্ট্যান্ডার্ড, সব টুল। <strong>Claude Desktop</strong>, <strong>Cursor</strong>, <strong>Windsurf</strong> — সব MCP Client। <span class="en">MCP = Anthropic open standard (2024). AI USB-C. Clients: Claude Desktop, Cursor, Windsurf.</span>',
  '<strong>কেন <code>async def</code>?</strong> কারণ MCP Server asynchronous — একসাথে অনেক Client থেকে অনুরোধ আসতে পারে। <code>async</code> দিলে Server অপেক্ষা না করে পরের অনুরোধে যায়। জাইনবের প্লাগ যেমন একসাথে অনেক যন্ত্রে বসে — MCP Server একসাথে অনেক Client সার্ভ করে। <span class="en">async def = handle many clients simultaneously without blocking.</span>'
);

// ── DOOR 27: Guardrails ──
doors[26].codeBridge = _bridge(
  '<strong>শুল্ক পরিদর্শক দুই দিকে দেখেন — ভেতরে আসা ও বাইরে যাওয়া।</strong> কোডে <code>filter_input()</code> হলো ভেতরের ফটক — ব্যক্তিগত তথ্য (PII) এলে আটকায়। <code>filter_output()</code> হলো বাইরের ফটক — AI-এর উত্তরে ব্যক্তিগত তথ্য থাকলে মুছে দেয়। <code>safe_chat()</code> হলো পূর্ণ পাইপলাইন: প্রথমে ইনপুট যাচাই → তারপর LLM কল → তারপর আউটপুট যাচাই। গল্পে দাউদ প্রতিটা বস্তা দুইবার দেখেন। <span class="en">filter_input = entry gate (PII block). filter_output = exit gate (PII redact). safe_chat = full pipeline.</span>',
  '<strong>re</strong> (Python regex স্ট্যান্ডার্ড) — কারণ প্যাটার্ন ম্যাচিং এর সবচেয়ে সহজ উপায়। উন্নত গার্ডরেইলে <strong>NeMo Guardrails</strong> (NVIDIA), <strong>Llama Guard</strong> (Meta), <strong>Granite Guardian</strong> (IBM) ব্যবহার করা হয় — এগুলো ML-ভিত্তিক, regex-এর চেয়ে চতুর। গল্পে দাউদের চেকলিস্ট — NeMo হলো একজন সহকারী পরিদর্শক। <span class="en">re = pattern matching. Advanced: NeMo Guardrails, Llama Guard (ML-based, smarter than regex).</span>',
  '<strong>কেন regex পথে দুই ফিল্টার?</strong> কারণ ইনপুট ফিল্টার ইনজেকশন ধরে, কিন্তু আউটপুট লিক ধরে না। আউটপুট ফিল্টার লিক ধরে, কিন্তু ইনজেকশন ধরে না। দুইটা দরকার — দাউদের মতো দুই দিকে। <code>[REDACTED]</code> দিয়ে ব্যক্তিগত তথ্য মুছে নিরাপদ টেক্সট বসানো হয় — পুরো উত্তর বাতিল না করে শুধু বিপজ্জনক অংশ সরানো হয়। <span class="en">Two filters: input catches injection, output catches leaks. [REDACTED] replaces PII without destroying the answer.</span>'
);
