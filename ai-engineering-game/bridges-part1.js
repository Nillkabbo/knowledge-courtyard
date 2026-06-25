// CODE BRIDGES — Part 1 (Doors 1-9)
// Explains WHY the code works, HOW it connects to the story, and WHICH tool

function _bridge(conn, tool, works) {
  return `<div class="code-bridge-title">🔗 গল্প থেকে কোড — Why This Code Works</div>
  <div class="code-bridge-row"><div class="code-bridge-icon">🔗</div><div class="code-bridge-text">${conn}</div></div>
  <div class="code-bridge-row"><div class="code-bridge-icon">🔧</div><div class="code-bridge-text">${tool}</div></div>
  <div class="code-bridge-row"><div class="code-bridge-icon">💡</div><div class="code-bridge-text">${works}</div></div>`;
}

// ── DOOR 1: LLM = Generator ──
doors[0].codeBridge = _bridge(
  '<strong>গল্পবলিয়ে মুখস্থ করেন না — প্যাটার্ন দেখে নতুন গল্প বানায়।</strong> কোডে <code>chat.completions.create()</code> ঠিক সেটাই করে — মডেলকে বলে তোমার শেখা প্যাটার্ন দিয়ে উত্তর <em>বানাও</em>। সে ডাটাবেস থেকে টানে না। <span class="en">The storyteller invents; the code asks the model to generate — not retrieve.</span>',
  '<strong>openai</strong> লাইব্রেরি ব্যবহার করি কারণ এটি GPT মডেলের সাথে কথা বলার সবচেয়ে সরাসরি পথ। Anthropic, Google, Ollama — প্রতিটার নিজস্ব লাইব্রেরি আছে, কিন্তু শুরু করার জন্য OpenAI সবচেয়ে সহজ। <span class="en">We use the openai library because it is the simplest path to GPT models. Other providers have their own SDKs.</span>',
  '<strong>মূল লাইন:</strong> <code>messages</code> হলো প্রশ্ন। <code>model</code> হলো কোন গল্পবলিয়েকে ডাকছ (gpt-4o-mini = সস্তা, gpt-4o = দামি)। <code>response.choices[0].message.content</code> হলো উত্তর। এই তিনটি প্রতিটা AI অ্যাপের ভিত্তি। <span class="en">Key lines: messages = question, model = which storyteller, content = answer.</span>'
);

// ── DOOR 2: Prompt Engineering ──
doors[1].codeBridge = _bridge(
  '<strong>ক্যালিগ্রাফার তিনটা জানতে চান — কে, কী, কীভাবে।</strong> কোডে <code>system</code> message = Role (কে), <code>user</code> message = Task (কী), <code>response_format</code> = Format (কীভাবে)। গল্পের তিন প্রশ্ন কোডের তিন অংশে সরাসরি ম্যাপ করে। <span class="en">The calligrapher asks for three things; the code provides them as system, user, and response_format.</span>',
  '<strong>openai</strong> আবার — কারণ prompting হলো সবচেয়ে সহজ কাজ, কোনো ফ্রেমওয়ার্ক লাগে না। কিন্তু <strong>LangChain</strong> বা <strong>Promptflow</strong> ব্যবহার করলে প্রম্পট টেমপ্লেট সংরক্ষণ করা যায়, পরে পুনঃব্যবহার করা যায়। <span class="en">Prompting needs no framework, but LangChain lets you save and reuse prompt templates.</span>',
  '<strong>কেন <code>system</code> আলাদা?</strong> কারণ <code>system</code> message মডেলের পুরো আচরণ নির্ধারণ করে — সে আজীবন এই ভূমিকায় থাকে। <code>user</code> message শুধু একবারের প্রশ্ন। এটাই Role-Task বিভাজন। <span class="en">System = permanent role, User = single question. This separation is the core of prompt engineering.</span>'
);

// ── DOOR 3: Context Engineering ──
doors[2].codeBridge = _bridge(
  '<strong>রাষ্ট্রদূত বলেছিলেন — context ছাড়া অর্থ ভুল।</strong> কোডে দ্বিতীয় <code>system</code> message-এ কোম্পানির নীতি দেওয়া হয়েছে। এটাই context। ছাড়া দিলে মডেল সাধারণ উত্তর দেয় (নাগরিকের মতো), দিলে সঠিক উত্তর দেয় (দরবারির মতো)। <span class="en">The ambassador said context is meaning. The second system message provides company policy as context — without it, the model guesses generically.</span>',
  '<strong>openai</strong> সরাসরি — কারণ context শুধু বার্তা যোগ করা, কোনো বিশেষ ফ্রেমওয়ার্ক লাগে না। কিন্তু বড় কোডবেস বা দীর্ঘ নথির জন্য <strong>LangChain</strong>-এ retrieval chain ব্যবহার করা হয় (Door 4)। <span class="en">Context injection is just adding messages; for large documents, use LangChain retrieval chains.</span>',
  '<strong>কেন দুইটা <code>system</code> message?</strong> একটা ভূমিকা বলে ("তুমি এইচআর সহকারী"), আরেকটা নীতি দেয় ("বার্ষিক ছুটি ২০ দিন")। মডেল দুইটা একসাথে পড়ে — ভূমিকা + নিয়ম = সঠিক উত্তর। <span class="en">Two system messages: one sets role, one provides policy. Model reads both together.</span>'
);

// ── DOOR 4: RAG ──
doors[3].codeBridge = _bridge(
  '<strong>বিচারপতি গোডাউন থেকে সাক্ষ্য টেনে আনেন, স্মৃতি থেকে নয়।</strong> কোডে চারটা ধাপ ঠিক গল্পের মতো: ১) নথি কেটো (splitter), ২) গোডাউন বানাও (vectorstore), ৩) সাক্ষ্য খোঁজো (similarity_search), ৪) সাক্ষ্য + প্রশ্ন মডেলকে দাও। মূল পার্থক্য: উত্তর এখন <em>সাক্ষ্য থেকে</em>, স্মৃতি থেকে নয়। <span class="en">The judge pulls evidence from the warehouse. The code mirrors: split docs → build vectorstore → search → give evidence to LLM.</span>',
  '<strong>LangChain</strong> ব্যবহার করি কারণ RAG-এর চারটা ধাপ আলাদা আলাদা লাইব্রেরি দিয়ে করলে শত লাইন কোড লাগে। LangChain এই চারটা এক সাথে জোড়ে। <strong>FAISS</strong> হলো গোডাউন — ফেসবুকের তৈরি দ্রুত vector search। <strong>OpenAIEmbeddings</strong> অর্থকে স্থানাঙ্কে রূপান্তর করে (Door 8)। <span class="en">LangChain connects the 4 RAG steps. FAISS is the vector warehouse. Embeddings convert meaning to coordinates.</span>',
  '<strong><code>similarity_search(question, k=3)</code></strong> — এটাই বিচারপতির সাক্ষ্য খোঁজা। <code>k=3</code> মানে শীর্ষ ৩টা সবচেয়ে প্রাসঙ্গিক অংশ। তারপর সেই ৩টা মডেলকে দাও — সে সাক্ষ্য দেখে উত্তর দেয়। <span class="en">similarity_search finds top-3 relevant chunks. These go to the LLM as evidence.</span>'
);

// ── DOOR 5: Tool Use ──
doors[4].codeBridge = _bridge(
  '<strong>চিকিৎসক ঔষধবিদকে ডাকেন, নিজে বানান না।</strong> কোডে <code>tools</code> অ্যারে হলো ঔষধবিদদের তালিকা — মডেলকে বলে তুমি কী কী করতে পারো। মডেল সিদ্ধান্ত নেয় কোন টুল দরকার, কিন্তু টুল চালায় না — তুমি চালাও। ঠিক যেমন চিকিৎসক হিসাবরক্ষককে ডাকেন, হিসাব নিজে করেন না। <span class="en">The physician delegates. Tools array = available specialists. Model decides which to call; you execute.</span>',
  '<strong>openai</strong> ব্যবহার করি কারণ function calling GPT মডেলের বিল্ট-ইন ক্ষমতা। <strong>LangChain</strong> এটিকে আরও সহজ করে (Door 10-এ দেখবে), কিন্তু মূল ধারণা বুঝতে raw API সবচেয়ে স্পষ্ট। <span class="en">Function calling is built into GPT. LangChain simplifies it, but raw API is clearest for learning.</span>',
  '<strong><code>tool_calls[0].function.arguments</code></strong> — মডেল বলছে "get_weather ফাংশনটা ডাকো, city="Dhaka" দিয়ে।" এরপর তুমি আসল weather API ডাকো, ফলাফল আবার মডেলকে দাও। এটাই function calling লুপ। <span class="en">The model says which function and arguments. You call the real API, feed result back.</span>'
);

// ── DOOR 6: Evals ──
doors[5].codeBridge = _bridge(
  '<strong>সুগন্ধি ব্যবসায়ী পাঁচটা মাত্রায় মাপেন, একটা স্কোরে নয়।</strong> কোডে <code>evaluate()</code> ফাংশনটি আরেকটি LLM কে বলে — উত্তরটি Accuracy, Relevance, Completeness, Safety চারটা মাত্রায় যাচাই করো। একে <strong>LLM-as-judge</strong> প্যাটার্ন বলে — একটা LLM আরেকটার বিচারক। গল্পে সুগন্ধি নিজে গন্ধ শুঁকে যাচাই করেন; কোডে একটা মডেল আরেকটার উত্তর পড়ে যাচাই করে। <span class="en">The perfumer measures in dimensions. The code uses one LLM to evaluate another — LLM-as-judge pattern.</span>',
  '<strong>openai</strong> — কারণ মূল্যায়নও একটা LLM কল। বিশেষ কোনো ফ্রেমওয়ার্ক লাগে না। উন্নত মূল্যায়নের জন্য <strong>Ragas</strong>, <strong>DeepEval</strong>, <strong>Promptfoo</strong> এই প্যাটার্নকে স্বয়ংক্রিয় করে। <span class="en">Evaluation is just another LLM call. Advanced tools: Ragas, DeepEval, Promptfoo.</span>',
  '<strong>কেন <code>expected</code> দরকার?</strong> কারণ বিচারকের তুলনা করার জন্য একটা মানদণ্ড লাগে। গল্পে সুগন্ধির কাছে পরিচিত নমুনা আছে; কোডে <code>expected</code> হলো সেই নমুনা। উত্তর নমুনার সাথে মেলে কি না — সেটাই মূল্যায়ন। <span class="en">Expected = the known sample the judge compares against, just like the perfumer has reference scents.</span>'
);

// ── DOOR 7: System Design ──
doors[6].codeBridge = _bridge(
  '<strong>জলের টাওয়ার পুরো শহরে পানি পৌঁছায় — নির্ভরযোগ্য কাঠামো দিয়ে।</strong> কোডে <strong>FastAPI</strong> হলো সেই টাওয়ার — একটা web server যা ব্যবহারকারীর প্রশ্ন নেয়, LLM-কে দেয়, উত্তর ফেরত দেয়। <code>/health</code> endpoint হলো সিস্টেমের স্বাস্থ্য পরীক্ষা — টাওয়ারে পানি আছে কি না দেখা। <code>/ask</code> হলো মূল পাইপ। <span class="en">FastAPI is the water tower — receives requests, sends to LLM, returns answers. /health checks if the system is alive.</span>',
  '<strong>FastAPI</strong> ব্যবহার করি কারণ এটি দ্রুত, সহজ, এবং Python-এ লেখা। Flask বা Django-ও চলবে, কিন্তু FastAPI আধুনিক, async সাপোর্ট করে, এবং স্বয়ংক্রিয়ভাবে documentation বানায়। <strong>Pydantic</strong> দিয়ে <code>Query</code> model তৈরি — ভুল ডেটা এলে আগেই ধরা পড়ে। <span class="en">FastAPI: modern, fast, async. Pydantic validates input automatically.</span>',
  '<strong><code>try/except</code></strong> — LLM ভাঙলে ব্যবহারকারী ক্র্যাশ দেখে না, ভুল বার্তা দেখে। এটাই graceful handling। গল্পে টাওয়ার পাইপ ফাটলে পুরো শহর পানিহীন হয় না — বিকল্প পথ থাকে। <code>except</code> হলো সেই বিকল্প পথ। <span class="en">try/except = graceful handling. If LLM fails, user sees an error message, not a crash.</span>'
);

// ── DOOR 8: Embeddings ──
doors[7].codeBridge = _bridge(
  '<strong>মানচিত্রকার অর্থকে স্থানাঙ্কে রূপান্তর করেন।</strong> কোডে <code>get_embedding()</code> ফাংশন একটা শব্দ নিয়ে তাকে শত শত সংখ্যার একটা তালিকায় রূপান্তর করে। এই সংখ্যাগুলো হলো সেই শব্দের "স্থানাঙ্ক" — ঠিক যেমন মানচিত্রে একটা শহরের অক্ষাংশ-দ্রাঘিমাংশ। <code>cosine_sim</code> হলো দূরত্ব মাপার যন্ত্র — দুইটা শব্দ কতটা কাছাকাছি বসে আছে। <span class="en">The cartographer maps meaning to coordinates. get_embedding() converts words to number arrays. cosine_sim measures semantic distance.</span>',
  '<strong>openai</strong> (text-embedding-3-small) — কারণ OpenAI-এর embedding মডেল সস্তা এবং বহুভাষিক (বাংলা সহ)। বিকল্প: <strong>Sentence Transformers</strong> (বিনামূল্যে, স্থানীয়), <strong>Cohere</strong>। <strong>NumPy</strong> ব্যবহার করি cosine similarity গণনার জন্য — math লাইব্রেরির চেয়ে দ্রুত। <span class="en">OpenAI embeddings: cheap, multilingual. NumPy: fast vector math for similarity.</span>',
  '<strong>কেন মেঘ ↔ বৃষ্টি কাছাকাছি?</strong> কারণ মডেল লক্ষ লক্ষ বাক্য পড়ে শিখেছে যে "মেঘ" আর "বৃষ্টি" প্রায় একসাথে আসে। সেই সহ-অবস্থান প্যাটার্ন স্থানাঙ্কে বসানো হয়েছে। মানচিত্রকার ঠিক এভাবেই সম্পর্কিত শহরগুলো কাছাকাছি বসান। <span class="en">Cloud ↔ rain are close because the model learned they co-occur. Embeddings encode this proximity.</span>'
);

// ── DOOR 9: Fine-tuning ──
doors[8].codeBridge = _bridge(
  '<strong>কারিগর মডেলের স্বভাব বদলান — নতুন জ্ঞান নয়, নতুন শৈলী।</strong> কোডে <code>training_data</code> হলো উদাহরণ — প্রতিটায় system/user/assistant ট্রিয়াড। মডেল এই উদাহরণ দেখে শেখে: "আইনি প্রশ্নে এভাবে উত্তর দিতে হয়।" ঠিক যেমন কারিগর হাতুড়ির গোঁটা চিনিয়ে ছাত্রের হাত ঠিক করেন — নতুন জ্ঞান নয়, নতুন অভ্যাস। <span class="en">Fine-tuning changes style/behavior, not knowledge. Training examples teach the model HOW to respond in a domain.</span>',
  '<strong>openai</strong> API — কারণ OpenAI-এর fine-tuning সহজতম। কিন্তু উন্মুক্ত মডেলে (Llama, Mistral) <strong>LoRA/QLoRA</strong> ব্যবহার করা হয় — সেখানে শুধু কিছু স্তর বদলানো হয়, পুরো মডেল নয়। <strong>PEFT</strong> এবং <strong>Unsloth</strong> এই কাজের জন্য জনপ্রিয় লাইব্রেরি। <span class="en">OpenAI for simplicity. For open models: LoRA/QLoRA via PEFT or Unsloth — only some layers change.</span>',
  '<strong>কেন ৫০+ উদাহরণ?</strong> কারণ একটা উদাহরণ দিলে মডেল overfit করে — শুধু সেটাই মুখস্থ করে। ৫০-১০০টা উদাহরণ দিলে মডেল প্যাটার্ন বোঝে — সাধারণীকরণ করে। কারিগরও একবার নয়, বারবার হাতুড়ি চালিয়ে ছাত্রের হাত ঠিক করেন। <span class="en">50+ examples prevent overfitting. The model learns the pattern, not memorizes one example.</span>'
);
