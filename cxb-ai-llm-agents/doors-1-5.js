// doors-1-5.js — Cloud X Berry Series Book 2: The AI Agents Atlas
// Source: "MCP vs API" + "MCP Will Finally Make Sense" (Cloud X Berry)
const doors = [];

doors.push({
  num: 1,
  icon: "🔌",
  color: "#c084fc",
  name: "MCP-র জন্মকথা",
  subtitle: "MCP vs API + MCP Finally Makes Sense",
  tech: "API (predefined workflow) vs MCP (dynamic tool discovery); tool calling fragmentation; client-host-server",
  spirit: "মিযান — এক প্রমিত মাপ, সবার জন্য ন্যায্য",
  secret: "API বলে দেয় প্রোগ্রাম কীভাবে কথা বলবে; MCP বলে দেয় AI কীভাবে টুল চিনবে — MCP API-কে বাদ দেয় না, তার উপরে দাঁড়ায়।",
  recall: {
    q: "API আর MCP কি একই সমস্যা সমাধান করে? না কিন্তু?",
    qen: "Do API and MCP solve the same problem?",
    a: "না। API = প্রোগ্রাম-টু-প্রোগ্রাম যোগাযোগ, workflow আগে থেকে কোডে লেখা। MCP = AI-কে টুল আবিষ্কার ও ব্যবহারের প্রমিত উপায় — কোন API কখন ডাকবে তা AI নিজে ঠিক করে।",
    aen: "No. API = program-to-program communication with a workflow hardcoded in advance. MCP = a standard way for AI to discover and use tools — the AI decides which API to call, when."
  },
  story: `<p class="scene-setting">ধরো তুমি একটা ই-কমার্স অ্যাপ বানাচ্ছো। কাস্টমার অর্ডার করলে তোমার কোড ক্রমে ক্রমে API ডাকে — orders API, payment API, inventory API, email API। কে ডাকবে, কখন ডাকবে, কোন ক্রমে — সব তুমি আগেই কোডে লিখে রেখেছো। API এজন্যই তৈরি: সফটওয়্যারের সাথে সফটওয়্যারের কথা।</p>
<p class="scene-setting en">You are building an e-commerce app. When a customer orders, your code calls APIs in sequence — orders, payment, inventory, email. Who calls what, when, in what order — you wrote it all in code beforehand. That is what APIs are for: software talking to software.</p>
<div class="dialogue">এবার দৃশ্য বদলাও। ইউজার বলছে: <strong>"আমার শেষ অর্ডার খুঁজে ট্র্যাকিং ডিটেইলস পাঠাও।"</strong> এটা একদম ভিন্ন সমস্যা। AI বোঝে ইউজার কী চায় — কিন্তু AI জানে না কোন API আছে, কোনটা আগে ডাকতে হবে, কোন ইনপুট সেগুলো চায়। আর পুরো কোম্পানির API ডকুমেন্টেশন মডেলের ভেতরে শক্ত করে ঢুকিয়ে দেওয়াও উচিত না। এই ফাঁকটাই MCP ভরাট করে।</div>
<div class="dialogue en">Now change the scene. The user says: "Find my last order and send tracking details." A completely different problem. The AI understands the intent — but does not know which APIs exist, which to call first, what inputs they expect. And you should not hardcode your company's entire API docs into the model. MCP fills this gap.</div>
<div class="code-block">টুল কাকে বলে?
টুল = AI অ্যাপ্লিকেশনের করার একটা কাজ।
Gmail নিয়ে কাজ? → search_emails, create_draft, send_email
GitHub নিয়ে কাজ? → get_commits, create_issue, create_pull_request
টুল মানে সুযোগ — AI সেই সুযোগ বেছে নেয়।

আর তারপর এলো tool calling-এর বিশাল সমস্যা:
প্রতিটা কোম্পানি নিজের মতো টুল-কানেকশন বানালো।
OpenAI-র এক ফরম্যাট, LangChain-এর আরেকটা,
তোমার নিজের অ্যাপের আরেকটা।</div>
<div class="callout tip"><span class="co-icon">📱</span><div><strong>শিক্ষকের অ্যানালজি (মুখস্থ রাখার মতো):</strong> ১০ বছর আগের ফোন চার্জার। Samsung-এ micro USB, Apple-এ Lightning, আরেক ফোনে mini USB — সবাই ফোন চার্জ করে, কিন্তু এক ক্যাবল আরেক ফোনে লাগে না। ভ্রমণে তিনটা চার্জার বইতে হয়। <strong>AI টুলিংয়ে ঠিক এই বিশৃঙ্খলাই ছিল</strong> — ৫টা AI অ্যাপ মানে ৫ রকম কানেকশন-ফরম্যাট।</div></div>
<div class="diagram">
<div class="diag-title">MCP-র তিন স্তম্ভ — শিক্ষকের চিত্র</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowPurple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L0,10 L10,5 z" fill="#c084fc"/></marker>
  </defs>
  <rect class="cell-purple" x="15" y="55" width="150" height="90" rx="12"/>
  <text class="lbl" x="90" y="88" text-anchor="middle">HOST (AI অ্যাপ)</text>
  <text class="lbl-sm" x="90" y="108" text-anchor="middle">Claude / ChatGPT</text>
  <rect class="cell-hot" x="215" y="55" width="140" height="90" rx="12"/>
  <text class="lbl-hot" x="285" y="88" text-anchor="middle">MCP CLIENT</text>
  <text class="lbl-sm" x="285" y="108" text-anchor="middle">অনুবাদক</text>
  <rect class="cell-cyan" x="405" y="55" width="140" height="90" rx="12"/>
  <text class="lbl-cyan" x="475" y="88" text-anchor="middle">MCP SERVER</text>
  <text class="lbl-sm" x="475" y="108" text-anchor="middle">টুলের ভাণ্ডার</text>
  <line class="edge" x1="167" y1="100" x2="211" y2="100" marker-end="url(#arrowPurple)"/>
  <line class="edge" x1="357" y1="100" x2="401" y2="100" marker-end="url(#arrowPurple)"/>
  <text class="lbl-sm" x="280" y="175" text-anchor="middle">এক প্রমিত ভাষা: server বলে দেয় কী কী টুল আছে — client AI-কে বোঝায়</text>
</svg>
<div class="diag-cap">MCP server একবার বানালে যেকোনো MCP-সচেতন AI তাতে লাগতে পারে — প্রতি অ্যাপে নতুন করে ইন্টিগ্রেশন লাগে না।</div>
</div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সবচেয়ে বড় ভুল ধারণা:</strong> "MCP API-কে বদলে দিচ্ছে" — না। MCP-র নিচে তো আসলে API-ই চলছে — MCP server গুলো নিজেরাই ভেতরে API কল করে। <strong>MCP হলো AI-টু-টুল কথার প্রমিত স্তর; API থাকছে প্রোগ্রাম-টু-প্রোগ্রাম কথার চিরকালীন স্তর।</strong> দুটো প্রতিযোগী নয় — তলা আর চাদর।</div></div>
<div class="secret-box">🔌 MCP API-কে মারে না — AI-কে API-র দরজায় প্রমিত চাবি দেয়।</div>`,
  senior: {
    title: "MCP বনাম API — দ্রুত গাইড",
    body: "<p><strong>API:</strong> ডেভেলপার আগেই ঠিক করে কোনটা কখন ডাকবে (predefined workflow)। <strong>MCP:</strong> AI runtime-এ টুল list আবিষ্কার করে, নিজে বেছে নেয় কোনটা চালাবে (dynamic)। কাঠামো: Host (AI অ্যাপ) → MCP Client → MCP Server (টুল ভাণ্ডার)। ফায়দা: এক server, সব AI-অ্যাপে ব্যবহারযোগ্য (write once, use everywhere)। মনে রাখো: MCP-র নিচে API-ই আছে — স্তর আলাদা, উদ্দেশ্য আলাদা।</p>"
  }
});

doors.push({
  num: 2,
  icon: "🤗",
  color: "#c084fc",
  name: "মডেলের বাজার",
  subtitle: "Hugging Face + 10 Open-Source AI Projects",
  tech: "Pre-trained model reuse; transformers pipeline; open-source agent stack (OpenHands, ADK, Pydantic AI, browser-use)",
  spirit: "উম্মাহর ভাণ্ডার — সবার কাজ সবার জন্য খোলা",
  secret: "চাকার পুনরাবিষ্কার বন্ধ — authentication-এর মতো AI-ও এখন বানানো টুল জোটানোর খেলা; Hugging Face সেই বাজার।",
  recall: {
    q: "Hugging Face-কে 'AI-র GitHub' বলা হয় কেন?",
    qen: "Why is Hugging Face called the GitHub of AI?",
    a: "GitHub যেমন লাখ লাখ কোড-রিপো হোস্ট করে, Hugging Face তেমন লাখ লাখ pre-trained মডেল — টেক্সট জেনারেশন, সেন্টিমেন্ট, ট্রান্সলেশন, ইমেজ, স্পিচ। কয়েক লাইন কোডে ইন্টিগ্রেট করা যায় (transformers pipeline)।",
    aen: "GitHub hosts millions of code repos; Hugging Face hosts hundreds of thousands of pre-trained models — text generation, sentiment, translation, image, speech. Integrable in a few lines via transformers pipeline."
  },
  story: `<p class="scene-setting">সফটওয়্যার ডেভেলপমেন্ট কীভাবে বদলেছে ভাবো — authentication লাগলে স্ক্র্যাচে বানাও না, payments লাগলে Stripe, ইনফ্রা লাগলে Terraform। AI ঠিক একই পথে হাঁটছে: স্ক্র্যাচে মডেল ট্রেনিংয়ের বদলে ডেভেলপাররা এখন আগে-ট্রেন-করা মডেল জোটায়। এই বদলের কেন্দ্রে Hugging Face।</p>
<p class="scene-setting en">Think about how software evolved — need auth? Don't build from scratch. Payments? Stripe. Infrastructure? Terraform. AI walked the same road: instead of training models from scratch, developers assemble pre-trained models. At the center: Hugging Face.</p>
<div class="code-block">Hugging Face = AI মডেলের GitHub
GitHub: লাখ লাখ কোড-রিপো
Hugging Face: লাখ লাখ pre-trained মডেল
  - text generation, sentiment analysis, translation
  - image classification, speech recognition...

সবচেয়ে জনপ্রিয় অস্ত্র: transformers লাইব্রেরি (Python)
pipeline = উঁচু-স্তরের API — গভীর গণিত না জেনেই:

  from transformers import pipeline
  clf = pipeline("sentiment-analysis")
  clf("I love this!")   # → positive

শত লাইনের ML কোড → কয়েক লাইন।
মাসের ডেটা-সংগ্রহ+ট্রেনিং → মিনিটের ইন্টিগ্রেশন।</div>
<div class="callout info"><span class="co-icon">🧰</span><div><strong>কিন্তু মডেল-ই সব নয়:</strong> ডেমো-এজেন্ট বানানো সহজ — আসল কাজ শেষ করানো কঠিন। এজেন্টকে লাগে repo পড়া, ফাইল বদলানো, টেস্ট চালানো, ভুল শুধরানো, মনে রাখা। শিক্ষক দেখান ১০টা ওপেন-সোর্স প্রজেক্ট যারা "বাকি সব" সামলায়:</div></div>
<div class="code-block">১০ ওপেন-সোর্স প্রজেক্ট (শিক্ষকের তালিকা):
১. OpenHands — কোডিং এজেন্ট: repo পড়ে, এডিট করে,
   কমান্ড চালায়, টেস্ট ফিক্স করে (ওয়ার্কস্পেস সহ)
২. OpenAI Agents SDK — নিজের অ্যাপে এজেন্ট: tools,
   handoffs, guardrails, sessions, tracing
৩. Google ADK — multi-step ওয়ার্কফ্লো: কোন এজেন্ট
   কখন চলবে তা explicit সংজ্ঞায়
৪. Pydantic AI — typed আউটপুট: এজেন্টের উত্তর থেকে
   নির্দিষ্ট ফিল্ড (priority, category) ভ্যালিডেট করে
৫. browser-use — API নেই এমন সিস্টেমে ব্রাউজার চালিয়ে
   পেজ নেভিগেট, ক্লিক, ডেটা পড়া
৬. GitHub Spec Kit — কোড লেখার আগেই spec+প্ল্যান —
   অস্পষ্ট রিকোয়েস্টে অন্ধ কোডিং ঠেকায়</div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>শিক্ষকের সতর্কতা:</strong> browser automation স্থির API-র বিকল্প নয় — ওয়েবসাইট বদলায়, অ্যাক্সেস আটকায়। API পেলে API-ই নাও।</div></div>
<div class="secret-box">🤗 নতুন করে ট্রেন কোরো না — বাজার থেকে জোটাও; এজেন্টের আসল কাজ মডেলের বাইরের জগতে।</div>`,
  senior: {
    title: "Hugging Face + ওপেন-সোর্স স্ট্যাক — দ্রুত গাইড",
    body: "<p><strong>Hugging Face:</strong> মডেল হাব (GitHub-এর মতো) + transformers লাইব্রেরি + pipeline API (কয়েক লাইনে টাস্ক-রেডি মডেল)। <strong>এজেন্ট স্ট্যাক:</strong> OpenHands (কোডিং), OpenAI Agents SDK (রানটাইম), Google ADK (ওয়ার্কফ্লো), Pydantic AI (typed আউটপুট), browser-use (API-বিহীন সিস্টেম), Spec Kit (আগে spec পরে কোড)। নীতি: pre-trained জোটাও, চাকা বানাও না।</p>"
  }
});

doors.push({
  num: 3,
  icon: "🔗",
  color: "#c084fc",
  name: "বানাও ও দেখো",
  subtitle: "LangChain + LangSmith",
  tech: "Prompt templates, chains, memory, agents; observability, tracing, runs vs traces, evaluation",
  spirit: "মুহাসাবা — হিসাব রাখা, পর্যবেক্ষণ করা",
  secret: "LangChain জোড়া লাগায় (মডেল+প্রম্পট+মেমরি+টুল), LangSmith আয়না ধরায় (কোন ধাপে কী হলো, কত খরচ, কোথায় ভাঙল) — বানানো আর দেখা একসাথে লাগে।",
  recall: {
    q: "LangSmith-এ trace আর run-এর পার্থক্য কী?",
    qen: "Trace vs run in LangSmith?",
    a: "Run = একটা একক অপারেশন (একটা LLM কল, একটা টুল কল, একটা retrieval)। Trace = এক রিকোয়েস্টের পুরো সম্পাদনের শৃঙ্খল — সব run জোড়া দিলে যা পাওয়া যায়।",
    aen: "Run = a single operation (one LLM call, one tool call, one retrieval). Trace = the full execution chain of one request — all runs stitched together."
  },
  story: `<p class="scene-setting">প্রথমে সহজ মনে হয়: ইউজার প্রশ্ন করে, তুমি প্রম্পট পাঠাও, মডেল উত্তর দেয়। শেষ। কিন্তু আসল অ্যাপ বড় হয় — কোম্পানির ডকুমেন্ট থেকে উত্তর দিতে হয়, ডেটাবেস সার্চ লাগে, আগের কথা মনে রাখতে হয়, বাইরের API ডাকতে হয়। শিগগিরই তোমার কোড ভরে যায় শুধু জোড়া-লাগানো কাস্টম কোডে। এই সমস্যাই LangChain সমাধান করতে এসেছে।</p>
<p class="scene-setting en">It starts simple: user asks, you send a prompt, the model answers. Done. But real apps grow — answer from company documents, search a database, remember prior conversations, call external APIs. Soon your code is full of glue code. That is the problem LangChain solves.</p>
<div class="code-block">LangChain = LLM অ্যাপের আঠা (গ্লু)
ওপেন-সোর্স ফ্রেমওয়ার্ক — reusable বিল্ডিং ব্লক:

১. PROMPT TEMPLATES — ডায়নামিক প্রম্পট:
   "Give me top languages to learn in {year}"
   স্ট্রিং জোড়া নয় — ভ্যারিয়েবল বসাও।

২. CHAINS — ধাপের সিঁড়ি:
   প্রশ্ন → প্রম্পট তৈরি → মডেল কল →
   আউটপুট প্রসেস → পরের ধাপ

৩. MEMORY — আগের কথা মনে রাখা

৪. AGENTS — মডেল নিজে ঠিক করে
   কোন টুল কখন চালাবে</div>
<div class="dialogue">এবার দ্বিতীয় সমস্যা। তোমার AI ভুল উত্তর দিলো। কী করবে? ইউজারের প্রশ্ন দেখা যায়, ফাইনাল উত্তর দেখা যায় — কিন্তু মাঝে কী হয়েছে? মডেল প্রশ্ন ভুল বুঝল? RAG ভুল ডকুমেন্ট টানল? এজেন্ট ভুল টুল ডাকল? নাকি উত্তর ঠিকই ছিল কিন্তু ১৫ সেকেন্ড লেগে গেল? শুধু ফাইনাল আউটপুট দেখে বলা যায় না।</div>
<div class="code-block">LangSmith = AI অ্যাপের observability

উদাহরণ: "Where is my order?"
ইউজার দেখে: ১ প্রশ্ন → ১ উত্তর
ভেতরে: LLM কল → order-tracking টুল →
ডেটা ফেরত → মডেল আবার → চূড়ান্ত উত্তর

RUN   = প্রতিটা একক ধাপ (LLM কল/টুল/retrieval)
TRACE = এক রিকোয়েস্টের পুরো শৃঙ্খল

Trace দেখলেই বোঝা যায়:
- কোন ধাপে সবচেয়ে বেশি সময়
- কোন কম্পোনেন্টে কী তথ্য গেছে
- কোথায় গলদ
- কত token খরচ, কত টাকা

+EVALUATION: টেস্ট-কেস বানাও → প্রম্পট/মডেল
বদলালে একই টেস্ট আবার চালাও → আগে-পরে তুলনা।
"কাজ করছে" নয় — "আগের চেয়ে ভালো?" এর উত্তর।</div>
<div class="callout tip"><span class="co-icon">🪞</span><div><strong>শিক্ষকের মূল কথা:</strong> ঐতিহ্যবাহী সফটওয়্যারে log/monitoring যেমন জরুরি, AI অ্যাপে তার চেয়েও বেশি — কারণ এখানে হিসাব রাখতে হয় কোন প্রম্পট গেছে, কোন মডেল, কত token, কত খরচ, এজেন্ট কী সিদ্ধান্ত নিল — সব। <strong>Observability ছাড়া AI অ্যাপ অন্ধকার ঘরের বাক্স।</strong></div></div>
<div class="secret-box">🔗 জোড়া লাগাও LangChain দিয়ে, আয়না ধরাও LangSmith দিয়ে — অন্ধ বানানো কোনো অ্যাপ ভালো অ্যাপ নয়।</div>`,
  senior: {
    title: "LangChain + LangSmith — দ্রুত গাইড",
    body: "<p><strong>LangChain:</strong> prompt templates (ডায়নামিক), chains (ধাপের সিঁড়ি), memory (প্রসঙ্গগত স্মৃতি), agents (মডেল-নির্বাচিত টুল)। <strong>LangSmith:</strong> observability — run (একক ধাপ) + trace (পুরো শৃঙ্খল); সময়/token/খরচ/সিদ্ধান্ত সব দৃশ্যমান; evaluation দিয়ে পরিবর্তনের আগে-পরে তুলনা। দুটো একসাথে: বানাও + যাচাই করো।</p>"
  }
});

doors.push({
  num: 4,
  icon: "🗺️",
  color: "#c084fc",
  name: "গ্রাফ ও হার্নেস",
  subtitle: "LangGraph + Agent Harness",
  tech: "Nodes, agents, edges, conditional routing, state; harness = tools + context + memory + execution + safety around the model",
  spirit: "তাদবির — পরিকল্পনার জাল বুনা",
  secret: "LangGraph-এ কাজ বোঝা যায় গ্রাফ হিসেবে (node-ধাপ, edge-রাস্তা, state-স্মৃতি); আর এজেন্ট-কে এজেন্ট করে মডেল নয় — মডেলের চারপাশের হার্নেস।",
  recall: {
    q: "Agentic harness কী এবং মডেল নিজে কেন যথেষ্ট নয়?",
    qen: "What is an agentic harness and why is the model alone not enough?",
    a: "হার্নেস = মডেলের চারপাশে বানানো সিস্টেম — টুল, প্রম্পট, context management, মেমরি, execution environment, safety rules, orchestration। মডেল শুধু টেক্সট জেনারেট করে; ফাইল পড়ে, টার্মিনাল চালায়, টেস্ট দেখে না — ওগুলো হার্নেসের কাজ।",
    aen: "Harness = the system built around the model — tools, prompts, context management, memory, execution environment, safety rules, orchestration. The model only generates text; reading files, running terminals, verifying tests is the harness's job."
  },
  story: `<p class="scene-setting">তুমি Claude Code বা Codex চালিয়ে দেখেছো — ফাইল পড়ে, প্ল্যান বানায়, একাধিক ফাইল এডিট করে, কমান্ড চালায়, ভুল শুধরায়। প্রশ্ন হলো — GPT বা Claude-এর কি সরাসরি তোমার টার্মিনাল-ফাইলে হাত আছে? উত্তর: না। মডেল সিস্টেমের মাত্র একটা অংশ। ভাষা-মডেলকে আসল কাজ-করা এজেন্টে রূপ দেওয়ার নাম agentic harness।</p>
<p class="scene-setting en">You have seen Claude Code or Codex read files, plan, edit multiple files, run commands, fix errors. Does GPT or Claude have direct access to your terminal? No. The model is one part of the system. The thing that turns a language model into a working agent is the agentic harness.</p>
<div class="code-block">HARNESS = মডেলের চারপাশের পুরো ব্যবস্থা
  - টুলস (ফাইল পড়া/লেখা, কমান্ড চালানো)
  - প্রম্পট
  - context management (১০,০০০ ফাইলের মধ্যে
    কোনগুলো গুরুত্বপূর্ণ — সব দেখানো সম্ভব নয়)
  - মেমরি
  - execution environment
  - safety rules
  - orchestration logic

মডেল একা = উত্তর জেনারেট করে, থেমে যায়।
মডেল + হার্নেস = পরিবেশ নিয়ে কাজ করে,
ফিডব্যাক নেয়, চালিয়ে যায়।</div>
<div class="dialogue">আর কাজগুলো সাজানোর জায়গা LangGraph — নামেই ইঙ্গিত: <strong>Lang + Graph</strong>। ভাষা-মডেল প্লাস ধাপগুলোর সংযোগ-গ্রাফ।</div>
<div class="code-block">LangGraph-এর বিল্ডিং ব্লক:

NODE = একটা ধাপ (সাধারণ Python ফাংশনই হতে পারে)
  order_tracking node: order ID নেয় → DB জিজ্ঞেস →
  স্ট্যাটাস ফেরায়। LLM লাগেই না।

AGENT = LLM দিয়ে সিদ্ধান্ত নেওয়া node
  orchestrator: রিকোয়েস্ট দেখে ঠিক করে —
  order tracking? management? recommendation?

EDGE = পরের ধাপের রাস্তা
  normal edge: A শেষ → B
  conditional edge: ফলাফল দেখে রুট বদল
  (গ্রাফে লুপ ওঠে — ব্যর্থ হলে আবার আগের ধাপে)

STATE = কাজ চলাকালীন স্মৃতি — কী হলো,
  কী বাকি, মানুষের অনুমোদনের জন্য pause পর্যন্ত</div>
<div class="callout tip"><span class="co-icon">🧩</span><div><strong>দুই দরজার সম্পর্ক:</strong> দরজা ১-এ দেখেছিলে মডেল টুল চিনতে পায় MCP দিয়ে। দরজা ৩-এ LangChain জোড়া দেয়। আজ দেখলে — <strong>টুল জোগানোর পরেও কেউ না কেউ ঠিক করবে কোন ধাপ কখন, কী মনে রাখা যাবে, কোথায় থামতে হবে</strong> — সেই কেউ হলো হার্নেস, আর তার নকশা হলো গ্রাফ।</div></div>
<div class="secret-box">🗺️ মডেল মস্তিষ্ক, হার্নেস হাত-পা — আর গ্রাফ সেই কাজের নকশা যেখানে সিদ্ধান্ত, লুপ আর থামার জায়গা সব লেখা।</div>`,
  senior: {
    title: "LangGraph + Harness — দ্রুত গাইড",
    body: "<p><strong>LangGraph:</strong> node (ধাপ/ফাংশন), agent (LLM-সিদ্ধান্ত নেওয়া node), edge (normal + conditional routing + loop), state (কর্ম-স্মৃতি, human-approval pause)। <strong>Harness:</strong> মডেলের চারপাশে tools+prompts+context+memory+execution+safety+orchestration — Claude Code/Codex-এর মতো প্রোডাক্টে আগে থেকেই বানানো। মডেল কিনেই এজেন্ট হয় না — হার্নেস বানাতে হয়।</p>"
  }
});

doors.push({
  num: 5,
  icon: "🧠",
  color: "#c084fc",
  name: "তিন স্তরের সত্য",
  subtitle: "Generative AI vs Agentic AI vs AI Agents + AGI",
  tech: "Generative (creates) vs Agentic (decides/plans) vs Agents (act); self-driving car analogy; AGI horizon",
  spirit: "আকল — বুদ্ধি, ইচ্ছা, কর্মের স্তর",
  secret: "Generative AI বানায়, Agentic AI ঠিক করে, AI Agent কাজ শেষ করে — মস্তিষ্ক, চিন্তাপ্রক্রিয়া, কর্মী: তিনটা আলাদা স্তর, একই গাড়ি।",
  recall: {
    q: "Generative AI, Agentic AI আর AI Agent-এর পার্থক্য এক লাইনে কী?",
    qen: "One-line difference between Generative AI, Agentic AI, and AI Agents?",
    a: "Generative AI তৈরি করে (prompt→content), Agentic AI পরিকল্পনা করে (লক্ষ্য→ধাপ→খাপ), AI Agent সম্পাদন করে (মডেল+মেমরি+টুল মিলিয়ে আসল কাজ)। মনে রাখার সূত্র: creates / decides / acts।",
    aen: "Generative AI creates (prompt→content), Agentic AI decides (goal→plan→adapt), AI Agents act (model+memory+tools doing real work). Remember: creates / decides / acts."
  },
  story: `<p class="scene-setting">কয়েক মাস আগে সবাই বলছিল generative AI, এখন সবাই বলছে agentic AI, LinkedIn-X-এ তিনটা শব্দই একসাথে ঘুরছে — অথচ এগুলো এক নয়। আধুনিক AI সিস্টেমের তিনটা স্তর। শিক্ষক দেন একটাই অ্যানালজি — সেলফ-ড্রাইভিং গাড়ি: ইঞ্জিন লাগে, কোথায় যাবে বুঝার বুদ্ধি লাগে, আর রাস্তায় চলার গাড়িটাই লাগে।</p>
<p class="scene-setting en">Months ago everyone said generative AI; now agentic AI. Three terms circling interchangeably — but they are three layers of modern AI. The teacher's analogy: a self-driving car needs an engine, intelligence to decide, and the actual vehicle.</p>
<div class="diagram">
<div class="diag-title">তিন স্তর — শিক্ষকের গাড়ি-মডেল</div>
<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="15" y="20" width="166" height="150" rx="12"/>
  <text class="lbl" x="98" y="52" text-anchor="middle">GENERATIVE AI</text>
  <text class="lbl-sm" x="98" y="76" text-anchor="middle">মস্তিষ্ক — বানায়</text>
  <text class="lbl-sm" x="98" y="98" text-anchor="middle">prompt → content</text>
  <text class="lbl-sm" x="98" y="120" text-anchor="middle">লেখা/কোড/ছবি/ভিডিও</text>
  <text class="lbl-sm" x="98" y="146" text-anchor="middle">সীমা: কাজ করে না, থামে</text>
  <rect class="cell-hot" x="197" y="20" width="166" height="150" rx="12"/>
  <text class="lbl-hot" x="280" y="52" text-anchor="middle">AGENTIC AI</text>
  <text class="lbl-sm" x="280" y="76" text-anchor="middle">চিন্তাপ্রক্রিয়া — ঠিক করে</text>
  <text class="lbl-sm" x="280" y="98" text-anchor="middle">লক্ষ্য → প্ল্যান → ধাপ</text>
  <text class="lbl-sm" x="280" y="120" text-anchor="middle">ফল যাচাই → খাপ খাওয়া</text>
  <text class="lbl-sm" x="280" y="146" text-anchor="middle">প্রোডাক্ট নয় — capability</text>
  <rect class="cell-leaf" x="379" y="20" width="166" height="150" rx="12"/>
  <text class="lbl-leaf" x="462" y="52" text-anchor="middle">AI AGENT</text>
  <text class="lbl-sm" x="462" y="76" text-anchor="middle">কর্মী — কাজ শেষ করে</text>
  <text class="lbl-sm" x="462" y="98" text-anchor="middle">মডেল+মেমরি+টুল</text>
  <text class="lbl-sm" x="462" y="120" text-anchor="middle">repo পড়ে → ফিক্স → PR</text>
  <text class="lbl-sm" x="462" y="146" text-anchor="middle">আসল সফটওয়্যার সিস্টেম</text>
  <text class="lbl" x="280" y="200" text-anchor="middle">বানায় · ঠিক করে · সম্পাদন করে — creates · decides · acts</text>
</svg>
<div class="diag-cap">Generative AI উত্তর দেয়, Agentic AI ভাবে, Agent অ্যাপ্লিকেশন ডিপ্লয় করে দেয়।</div>
</div>
<div class="code-block">উদাহরণে ফারাক:
"এই সপ্তাহের সেলস রিপোর্ট বানাও"

GENERATIVE: রিপোর্টের টেমপ্লেট লিখে দেয়। শেষ।
AGENT: সর্বশেষ সেলস ডেটা টানে → সংখ্যা বিশ্লেষণ →
চার্ট বানায় → সারসংক্ষেপ লেখে → ইমেইল পাঠিয়ে দেয়।

"ডিপ্লয় করো প্রোডাকশনে"
GENERATIVE: কমান্ডগুলো লিখে দেখায় — চালায় না।
AGENT: সার্ভারে কানেক্ট করে, চালায়, যাচাই করে।

AGI প্রসঙ্গ:
আজকের সব AI narrow — নির্দিষ্ট কাজে প্রখর।
AGI মানে মানুষের মতো সাধারণ বুদ্ধি —
যেকোনো কাজ শিখতে পারা। এখনো তা নেই;
গবেষণার দিগন্ত, প্রোডাক্ট নয়।</div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>শিক্ষকের ভবিষ্যদৃষ্টি:</strong> "AI এজেন্ট কি সফটওয়্যার ইঞ্জিনিয়ারকে বাদ দেবে?" — আপাতত না। এখনো লাগে আর্কিটেকচার ডিজাইন, সিকিউর সিস্টেম, সার্ভিস ইন্টিগ্রেশন, প্রোডাকশন মনিটরিং। <strong>যা বদলাচ্ছে তা কাজের ধরন:</strong> রুটিন কাজ এজেন্ট নেবে, ডেভেলপার এজেন্ট-চালিত সিস্টেম বানাবে ও তদারক করবে।</div></div>
<div class="secret-box">🧠 বানায়, ঠিক করে, সম্পাদন করে — তিন শব্দ গুলিয়ে ফেললে তিন স্তর গুলিয়ে যাবে।</div>`,
  senior: {
    title: "Gen / Agentic / Agents + AGI — দ্রুত গাইড",
    body: "<p><strong>Generative AI</strong> = content তৈরি (prompt→output, তারপর থামে)। <strong>Agentic AI</strong> = reasoning/planning capability (লক্ষ্য→প্ল্যান→execute→adapt) — প্রোডাক্ট নয়। <strong>AI Agent</strong> = বাস্তব সিস্টেম (LLM+memory+tools দিয়ে কাজ সম্পূর্ণ)। সূত্র: creates/decides/acts। <strong>AGI</strong> = দিগন্তের ধারণা, আজ নেই। ইঞ্জিনিয়ার বাদ যাচ্ছে না — ভূমিকা বদলাচ্ছে: এজেন্ট-সিস্টেমের নির্মাতা ও তদারককারী।</p>"
  }
});



