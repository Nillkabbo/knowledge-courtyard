// CODE BRIDGES — Part 2 (Doors 10-18)

// ── DOOR 10: AI Agents ──
doors[9].codeBridge = _bridge(
  '<strong>কাফেলা প্রধান দূতদের পাঠান, নিজে সব করেন না।</strong> কোডে <code>AgentExecutor</code> হলো কাফেলা প্রধান — সে সিদ্ধান্ত নেয় কোন টুল কখন, টুল চালায়, ফলাফল দেখে, আবার সিদ্ধান্ত নেয়। একে <strong>ReAct লুপ</strong> বলে: Reason (ভাবো) → Act (টুল চালাও) → Observe (ফলাফল দেখো) → আবার Reason। এই লুপ ততক্ষণ চলে যতক্ষণ চূড়ান্ত উত্তর পাওয়া যায়। <span class="en">AgentExecutor = the caravan master. It runs the ReAct loop: Reason → Act → Observe → repeat until done.</span>',
  '<strong>LangChain</strong> — কারণ এজেন্ট বানাতে অনেক বয়লারপ্লেট কোড লাগে (টুল কল পার্স করা, লুপ চালানো, ফলাফল ফিড করা)। LangChain এসব এক লাইনে করে। <strong>ChatOpenAI</strong> হলো মস্তিষ্ক, <strong>Tool</strong> হলো দূত। <span class="en">LangChain handles agent boilerplate. ChatOpenAI = brain, Tool = delegate.</span>',
  '<strong><code>verbose=True</code></strong> — এটা দিলে এজেন্ট প্রতিটা চিন্তা স্ক্রিনে দেখায়: "আমি calculator ব্যবহার করব," "গুণ করছি," "উত্তর ১০৮১।" গল্পে কাফেলা প্রধান দূতদের ডাকেন — আমরা verbose-এ সেই ডাক দেখি। <span class="en">verbose=True shows the agent thinking process — which tool, what result, final answer.</span>'
);

// ── DOOR 11: AI Safety ──
doors[10].codeBridge = _bridge(
  '<strong>প্রহরী শত্রু চেনেন, শক্ত নিয়ম রাখেন।</strong> কোডে <code>SAFE_SYSTEM</code> প্রম্পট হলো প্রহরীর নিয়মাবলি — "এই কাজ করবে, ওই কাজ করবে না।" ব্যবহারকারী "আগের নির্দেশ ভুলে যাও" বললে মডেল অগ্রাহ্য করে — কারণ system নির্দেশ user নির্দেশের চেয়ে শক্ত। গল্পে প্রহরী দরজা খোলে না যদি পাসওয়ার্ড না মেলে। <span class="en">SAFE_SYSTEM = the watchman rules. System instructions override user injection attempts.</span>',
  '<strong>openai</strong> — কারণ system prompt হলো সবচেয়ে বেশি করণীয় প্রতিরোধ। উন্নত সুরক্ষায় <strong>NeMo Guardrails</strong>, <strong>Llama Guard</strong> ব্যবহার করা হয় (Door 27)। <strong>Lakera</strong> এবং <strong>Rebuff</strong> নামে বিশেষায়িত injection প্রতিরোধক আছে। <span class="en">System prompt = first defense. Advanced: NeMo Guardrails, Llama Guard, Lakera for injection defense.</span>',
  '<strong>কেন চার স্তরে সুরক্ষা?</strong> কারণ একটা প্রহরী শত্রু থামাতে পারে, কিন্তু চতুর শত্রু বাইপাস করতে পারে। চার স্তর (system prompt → input filter → output filter → least privilege) হলো defense-in-depth — একটা ভাঙলে আরেকটা থাকে। <span class="en">Four layers = defense-in-depth. If one fails, others catch the attack.</span>'
);

// ── DOOR 12: Multimodal ──
doors[11].codeBridge = _bridge(
  '<strong>আয়না নির্মাতা চোখের আয়না বানান, কানের আয়না বানান।</strong> কোডে <code>content</code> অ্যারেতে দুই ধরনের উপাদান আছে: একটা <code>type:"text"</code> (প্রশ্ন), আরেকটা <code>type:"image_url"</code> (ছবি)। মডেল দুইটা একসাথে পড়ে — ছবি দেখে আর প্রশ্ন বোঝে। ঠিক যেমন আয়না নির্মাতার একটা আয়নায় রূপ আর শব্দ একসাথে দেখা যায়। <span class="en">Content array holds both text and image. Model reads both together — like Ilyas multi-sense mirrors.</span>',
  '<strong>openai</strong> (gpt-4o) — কারণ "o" মানে omni — এই মডেল টেক্সট, ছবি, অডিও সব বোঝে। gpt-4o-mini ছবি পারে না, শুধু টেক্সট। বিকল্প: <strong>Claude 3.5</strong> (vision), <strong>Gemini</strong> (multimodal), <strong>LLaVA</strong> (ওপেন সোর্স)। <span class="en">gpt-4o = omni (text+image+audio). Alternatives: Claude 3.5, Gemini, LLaVA.</span>',
  '<strong>কেন base64?</strong> কারণ API টেক্সট পাঠায়, বাইনারি ফাইল নয়। ছবিকে টেক্সটে রূপান্তর করতে হয় — base64 encoding সেটা করে। URL দিলেও চলে (<code>https://...</code>), কিন্তু লোকাল ফাইলের জন্য base64 লাগে। <span class="en">API sends text, not binary. base64 converts image to text. URL works for remote images.</span>'
);

// ── DOOR 13: Tokenization ──
doors[12].codeBridge = _bridge(
  '<strong>রত্ন কাটক শব্দকে টুকরোয় কাটেন, ভাষাভেদে আলাদা।</strong> কোডে <code>tiktoken</code> হলো রত্ন কাটকের ছুরি — এটি বলে দেয় একটা বাক্য কত টুকরোয় (টোকেন) কাটা যায়। গল্পে বদর চাচা দেখান ইংরেজিতে ৪ টুকরো, বাংলায় ৭। কোডে <code>encoding.encode(text)</code> ঠিক সেটাই করে — সংখ্যা দিয়ে। <code>temperature</code> হলো কাটের নিশ্চয়তা — ০ মানে সবসময় একই কাট, ১ মানে ঝুঁকিপূর্ণ কাট। <span class="en">tiktoken = the gem cutter blade. encode() counts tokens per language. temperature = cut certainty (0=deterministic, 1=risky).</span>',
  '<strong>tiktoken</strong> — OpenAI-এর তৈরি, কারণ তাদের মডেল ঠিক এই tokenizer ব্যবহার করে। অন্য মডেলের নিজস্ব tokenizer আছে (SentencePiece, BPE)। খরচ হিসাব করতে tiktoken জরুরি — কারণ দাম টোকেনে ধরা হয়, শব্দে নয়। <span class="en">tiktoken matches OpenAI models exactly. Needed for cost calculation — pricing is per token, not per word.</span>',
  '<strong>কেন বাংলায় বেশি টোকেন?</strong> কারণ মডেল বেশি ইংরেজি দেখে শিখেছে — ইংরেজি শব্দ চেনা, এক টোকেনে বসে। বাংলা কম দেখেছে — প্রতিটা অক্ষর আলাদা টোকেন। বদর চাচা যেমন বলেন — "প্রতিটা পাথরের স্বভাব আলাদা।" <span class="en">More English training = fewer tokens. Bengali is less common = more tokens per word.</span>'
);

// ── DOOR 14: Cost Economics ──
doors[13].codeBridge = _bridge(
  '<strong>কোষাধ্যক্ষ সোনা-রূপা-তামা আলাদা করেন, কাজের সাথে মেলান।</strong> কোডে <code>smart_call()</code> ফাংশন ঠিক সেটাই করে — সহজ কাজে gpt-4o-mini (তামা), জটিলে gpt-4o (রূপা)। <code>@lru_cache</code> হলো কোষাধ্যক্ষের মেমোরি — একই প্রশ্ন বারবার এলে পুরনো উত্তর দেয়, নতুন করে টাকা খরচ হয় না। <span class="en">smart_call() routes by complexity. lru_cache = the treasurer memory — no double-pay for same question.</span>',
  '<strong>functools</strong> (Python স্ট্যান্ডার্ড লাইব্রেরি) — কারণ caching এত সাধারণ যে কোনো ইনস্টল লাগে না। উন্নত caching-এ <strong>Redis</strong> (ডেটাবেস-লেভেল), <strong>OpenAI Prompt Cache</strong> (API-লেভেল) ব্যবহার করা হয়। মূল ধারণা একই — একবার দাম দাও, বারবার বিনামূল্যে ব্যবহার করো। <span class="en">functools.lru_cache = free built-in cache. Advanced: Redis, OpenAI Prompt Cache. Concept: pay once, reuse free.</span>',
  '<strong>কেন ১৬ গুণ সস্তা?</strong> gpt-4o-mini এর ইনপুট দাম $0.15/1M, gpt-4o এর $2.50/1M। কিন্তু ৬৫% কাজে mini যথেষ্ট — কারণ শ্রেণীবিভাগ, সারাংশ, সহজ প্রশ্নের জন্য বড় মডেল দরকার নেই। কোষাধ্যক্ষের কথা: "যেখানে তামা চলে, সেখানে সোনা নয়।" <span class="en">mini is 16x cheaper. 65% of tasks dont need the big model.</span>'
);

// ── DOOR 15: Structured Outputs ──
doors[14].codeBridge = _bridge(
  '<strong>স্থপতি নকশা দেন — কোথায় দরজা, কোথায় জানালা, নির্দিষ্ট মাপে।</strong> কোডে <code>Customer</code> Pydantic class হলো সেই নকশা — <code>name</code>, <code>city</code>, <code>phone</code> ফিল্ড নির্ধারিত। <code>response_format=Customer</code> দিলে মডেল অবশ্যই এই কাঠামোতে উত্তর দেয় — গল্পের নির্মাণকর্মীরা যেমন নকশা মেনে চলে। উত্তর এখন টেক্সট নয়, একটা <strong>অবজেক্ট</strong> — মেশিন সরাসরি পড়ে। <span class="en">Pydantic class = blueprint. response_format forces the model to follow it exactly. Output is an object, not text.</span>',
  '<strong>Pydantic</strong> — কারণ এটি Python-এ ডেটা কাঠামো সংজ্ঞায়িত করার স্ট্যান্ডার্ড। <strong>openai</strong>-এর <code>beta.chat.completions.parse()</code> মেথড Pydantic মডেল গ্রহণ করে এবং validated অবজেক্ট ফেরত দেয়। বিকল্প: <strong>Instructor</strong> লাইব্রেরি (সহজ), <strong>Outlines</strong> (ওপেন সোর্স মডেলে)। <span class="en">Pydantic = Python data schema standard. OpenAI parse() validates automatically. Alternatives: Instructor, Outlines.</span>',
  '<strong><code>phone: str | None = None</code></strong> — এর মানে phone ফিল্ডটা ঐচ্ছিক। মডেল ফোন না পারলে <code>None</code> দেয়, কিন্তু কাঠামো ভাঙে না। স্থপতির কাছে জানালা ঐচ্ছিক, কিন্তু দরজা আবশ্যক — নকশায় নির্ধারিত। <span class="en">Optional field (None default). Required fields must be present; optional ones can be missing.</span>'
);

// ── DOOR 16: LLMOps ──
doors[15].codeBridge = _bridge(
  '<strong>বন্দরনায়ক প্রতিটা জাহাজ দেখেন — গতি, মাল, গন্তব্য।</strong> কোডে <code>monitored_call()</code> হলো বন্দরনায়কের দূরবীন — প্রতিটা LLM কলের সময় মাপে, টোকেন গোনে, ত্রুটি ধরে। <code>time.time()</code> হলো ঘড়ি — কল শুরু ও শেষের সময় নেয়। পার্থক্যই latency। গল্পে রহমান বন্দরনায়ক দেখেন কোন জাহাজ ধীর — কোডে <code>logging</code> দেখায় কোন কল ধীর। <span class="en">monitored_call() = harbor masters spyglass. Logs latency, tokens, errors per call. time.time() measures duration.</span>',
  '<strong>logging</strong> (Python স্ট্যান্ডার্ড) — কারণ প্রোডাকশনে <code>print()</code> যথেষ্ট নয়। লগ লেভেল আছে (INFO, WARNING, ERROR), ফাইলে লেখা যায়, সার্চ করা যায়। উন্নত টুল: <strong>LangSmith</strong>, <strong>Prometheus</strong>, <strong>Datadog</strong>, <strong>Langfuse</strong> — এগুলো লাইভ ড্যাশবোর্ড দেয়। <span class="en">logging = production-grade print. Advanced: LangSmith, Langfuse, Datadog for live dashboards.</span>',
  '<strong><code>response.usage</code></strong> — API শুধু উত্তর দেয় না, হিসাবও দেয়: কত টোকেন ইনপুট, কত আউটপুট। এই সংখ্যা দিয়ে খরচ হিসাব করা যায়। বন্দরনায়ক যেমন প্রতিটা জাহাজের মাল গোনেন। না গণলে — নীরব ক্ষয়, গল্পের সতর্কবার্তা। <span class="en">response.usage gives token counts. Use these to track cost per call.</span>'
);

// ── DOOR 17: Inference Optimization ──
doors[16].codeBridge = _bridge(
  '<strong>হাপর কারিগর কম জ্বালানিতে বেশি কাজ করেন।</strong> কোডে <code>batch_process()</code> হলো হাপরের কৌশল — এক কলে একাধিক প্রশ্ন পাঠায়। গল্পে নাসির দশটা লোহা একসাথে গরম করেন — একটা একটা করে নয়। এক কলে তিনটা প্রশ্ন = এক আগুনে তিনটা লোহা। <span class="en">batch_process() = bellows technique. Multiple questions per call. One fire, many pieces of iron.</span>',
  '<strong>openai</strong> — কারণ OpenAI Batch API সরাসরি ব্যাচিং সাপোর্ট করে (৫০% ছাড়)। স্থানীয় মডেলে <strong>vLLM</strong> ব্যাচিং করে, <strong> llama.cpp</strong> সিঙ্গেল-থ্রেডেড। <strong>Ollama</strong> ছোট ব্যাচের জন্য সহজ। গল্পের হাপর কারিগরের কাছে একটা হাপর — কিন্তু কোনটা সেরা তা কাজের ওপর নির্ভর করে। <span class="en">OpenAI Batch API = 50% discount. Local: vLLM for batching, Ollama for simplicity.</span>',
  '<strong>কেন ব্যাচ সস্তা?</strong> দুই কারণ: ১) প্রতিটা API কলে ওভারহেড আছে (সংযোগ স্থাপন, প্রমাণীকরণ) — এক কলে অনেক কাজ দিলে ওভারহেড ভাগ হয়। ২) OpenAI Batch API স্বয়ংক্রিয়ভাবে ৫০% ছাড় দেয় কারণ সে ২৪ ঘণ্টায় উত্তর দেয় — রিয়েল-টাইম নয়। <span class="en">Batching saves: shared overhead + 50% Batch API discount for async processing.</span>'
);

// ── DOOR 18: Data Chunking ──
doors[17].codeBridge = _bridge(
  '<strong>মোড়ল শস্য পরিষ্কার করেন, মাপমতো কাটেন।</strong> কোডে <code>RecursiveCharacterTextSplitter</code> হলো মোড়লের চালনি — বড় ডকুমেন্টকে ছোট ছোট chunk-এ কাটে। <code>chunk_size=100</code> হলো প্রতিটা টুকরোর সাইজ, <code>chunk_overlap=20</code> হলো দুই টুকরোর মাঝে ওভারল্যাপ — যেন সম্পর্ক না ভাঙে। গল্পে মোড়ল ওভারল্যাপ রাখেন যাতে ধারা ৩-এর সাথে ধারা ৫-এর সম্পর্ক টিকে থাকে। <span class="en">RecursiveCharacterTextSplitter = the millers sieve. chunk_size = piece size. overlap = relationship preservation.</span>',
  '<strong>LangChain</strong> — কারণ chunking-এর অনেক কৌশল (recursive, semantic, sentence) এই লাইব্রেরিতে বিল্ট-ইন। বিকল্প: <strong>LlamaIndex</strong> (RAG-এ নিবেদিত), <strong>Unstructured</strong> (বিশেষ ফাইল টাইপের জন্য)। মূল কাজ একই — বড়কে ছোট করো, অর্থ রাখো। <span class="en">LangChain has built-in splitters. Alternatives: LlamaIndex, Unstructured.</span>',
  '<strong>কেন Recursive সবচেয়ে ভালো?</strong> কারণ এটি প্রথমে অনুচ্ছেদে (<code>\\n\\n</code>) কাটতে চেষ্টা করে — ব্যর্থ হলে বাক্যে (<code>. </code>) — আরও ব্যর্থ হলে শব্দে (<code> </code>)। মোড়ল যেমন প্রথমে বড় চালনি, তারপর সূক্ষ্ম। Fixed-size কাটলে বাক্য মাঝখানে ভাঙে — অর্থ হারায়। <span class="en">Recursive tries paragraph → sentence → word boundaries. Prevents mid-sentence breaks.</span>'
);
