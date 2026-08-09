// ════════════════════════════════════════
// স্বাধীন বুদ্ধি — DOORS 1-5
// AI Agents: Tool Use → Planning
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: WHAT IS AN AGENT ══
doors.push({
  num:1, icon:"🤖", color:"#fbbf24", name:"জেনেসিস কক্ষ",
  subtitle:"The Genesis Chamber", tech:"What Is an AI Agent?",
  spirit:"খলিফা — প্রতিনিধি, কর্মী",
  secret:"চ্যাটবট = শুধু কথা। এজেন্ট = কথা + কাজ। LLM যা চিন্তা করে, সিদ্ধান্ত নেয়, টুল ব্যবহার করে, ফলাফল দেখে, আবার চিন্তা করে — স্বাধীনভাবে। এটাই এজেন্ট। চ্যাটবট থেকে এজেন্ট = প্যাসিভ থেকে অ্যাক্টিভ।",
  recall:{
    q:"জেনেসিস কক্ষে কেন কর্মীকে শুধু কথা নয়, কাজও শেখানো হয়?",
    qen:"Why is the worker taught to act, not just talk?",
    a:"কারণ শুধু কথা = অসম্পূর্ণ। কাজ ছাড়া কথা অর্থহীন। এজেন্টও তেমনি — চ্যাটবট শুধু টেক্সট দেয়। এজেন্ট কাজ করে — সার্চ, কোড, ইমেইল। খলিফা — প্রতিনিধি যে কাজ করে।",
    aen:"Because talk alone = incomplete. Words without action are meaningless. Agents too — chatbots give text. Agents act — search, code, email. Khalifa — a representative who acts."
  },
  story:`
<p class="scene-setting">প্রথম কেন্দ্র। একটা কর্মশালা। দুটি কর্মী পাশাপাশি। একজন শুধু কথা বলে — "এই কাজটা করা উচিত।" কিন্তু করে না। অন্যজন কথা বলে আর কাজ করে — "এই কাজটা করা উচিত" → হাতুড়ি তোলে → পেরেক ঠোকে → কাজ শেষ। প্রধান কারিগর সালেহ বললেন — "প্রথমজন চ্যাটবট। দ্বিতীয়জন এজেন্ট। পার্থক্য বুঝো।"</p>
<p class="scene-setting en">The first center. A workshop. Two workers side by side. One only talks — "This task should be done." But doesn't do it. The other talks and acts — "This should be done" → picks up hammer → drives nail → done. Chief craftsman Saleh said — "The first is a chatbot. The second is an agent. Understand the difference."</p>

<div class="dialogue">Fine-tuning বইয়ে তুমি শিখেছ — মডেলকে নিখুঁত করা। এখন আমি বলি — নিখুঁত মডেলও শুধু কথা বলে। সে কাজ করতে পারে না। কিন্তু যদি সে কাজ করতে পারত? যদি সে সার্চ করত, কোড রান করত, ইমেইল পাঠাত? এটাই agent।</div>
<div class="dialogue en">"In the fine-tuning book you learned — perfecting the model. Now I say — even a perfect model just talks. It can't act. But what if it could? If it could search, run code, send email? This is an agent."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Agent Infinite Loop:</strong> An agent kept calling a broken tool, getting errors, retrying — forever. Cost: $2000 in API calls overnight. Fix: always set max_iterations and cost limits.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrA1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
    <marker id="arrA1g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4ade80"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">এজেন্ট লুপ — Observe · Plan · Act</text>
  <rect x="30" y="90" width="110" height="60" rx="10" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="85" y="115" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">OBSERVE</text>
  <text x="85" y="132" text-anchor="middle" fill="#7dd3fc" font-size="9">পর্যবেক্ষণ</text>
  <text x="85" y="145" text-anchor="middle" fill="#94a3b8" font-size="8">input · result</text>
  <rect x="235" y="90" width="110" height="60" rx="10" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="115" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">PLAN</text>
  <text x="290" y="132" text-anchor="middle" fill="#4ade80" font-size="9">চিন্তা</text>
  <text x="290" y="145" text-anchor="middle" fill="#94a3b8" font-size="8">LLM সিদ্ধান্ত</text>
  <rect x="440" y="90" width="110" height="60" rx="10" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="495" y="115" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="bold">ACT</text>
  <text x="495" y="132" text-anchor="middle" fill="#c084fc" font-size="9">কাজ</text>
  <text x="495" y="145" text-anchor="middle" fill="#94a3b8" font-size="8">tool call</text>
  <path d="M 140 110 Q 185 70 235 100" fill="none" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrA1)"/>
  <path d="M 345 110 Q 392 70 440 100" fill="none" stroke="#4ade80" stroke-width="2" marker-end="url(#arrA1g)"/>
  <path d="M 495 150 Q 290 220 85 150" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrA1)"/>
  <text x="290" y="208" text-anchor="middle" fill="#fbbf24" font-size="9">↻ ফলাফল দেখো, আবার চিন্তা করো — চক্র</text>
</svg>
</div>
<div class="svg-caption">চিত্র: এজেন্ট = Observe → Plan → Act চক্র — প্রতিটা ফলাফল পরের চিন্তা নির্ধারণ করে। চ্যাটবট থেমে যায়, এজেন্ট ঘুরে।</div>

<div class="code-block">What Is an Agent? — From Chatbot to Worker:

CHATBOT (যা তুমি জানো):
  User → LLM → Text Response → END
  
  "What's the weather?"
  → "I can't check real-time weather."
  → কোনো কাজ নেই, শুধু টেক্সট

AGENT (যা তুমি শিখবে):
  User → LLM → Think → Act → Observe 
       → Think → Act → Observe → Answer
  
  "What's the weather in Dhaka?"
  → Think: "I need to check weather"
  → Act: get_weather("Dhaka")
  → Observe: "32°C, humid, rain expected"
  → Answer: "It's 32°C in Dhaka with rain 
    expected. Bring an umbrella."
  
  → কাজ করেছে! শুধু কথা নয়।

THE AGENT ANATOMY:

  ┌─────────────────────────────────────┐
  │ একটি Agent = ৪টি উপাদান            │
  │                                     │
  │ ১. BRAIN (LLM)                     │
  │    চিন্তা, সিদ্ধান্ত, পরিকল্পনা     │
  │                                     │
  │ ২. TOOLS (Functions)                │
  │    search, code_run, email, file_io │
  │                                     │
  │ ৩. MEMORY (State)                   │
  │    পূর্বের কথা, কাজ, ফলাফল          │
  │                                     │
  │ ৪. LOOP (Autonomy)                  │
  │    think → act → observe → repeat   │
  └─────────────────────────────────────┘

LEVELS OF AUTONOMY:

  Level ০: চ্যাটবট (শুধু কথা)
    → no tools, no action, no loop
  
  Level ১: Tool-Assisted (এক টুল)
    → LLM + ১টি tool (e.g., search)
    → "Let me search that for you"
  
  Level ২: Multi-Tool Agent
    → LLM + multiple tools
    → নিজে সিদ্ধান্ত নেয় কোন tool কখন
  
  Level ৩: Planning Agent
    → জটিল কাজকে ভাঙে → ধাপে ধাপে
    → multi-step reasoning
  
  Level ৪: Multi-Agent System
    → একাধিক agent → একে অপরের সাথে
    → researcher + coder + reviewer
  
  Level ৫: Fully Autonomous
    → goal দাও → agent নিজে সব করে
    → human approval optional

WHY AGENTS MATTER (2024-2025):
  • ChatGPT → GPTs + Actions (agents)
  • Claude → Tool use + Computer use
  • Devin → autonomous software engineer
  • AutoGPT → goal-driven autonomous loops
  • LangChain/LlamaIndex → agent frameworks
  → এজেন্ট = AI-এর পরবর্তী ধাপ</div>

<div class="dialogue">খলিফা — প্রতিনিধি, উত্তরাধিকারী। কুরআনে আল্লাহ বলেন — "আমি পৃথিবীতে খলিফা স্থাপন করব।" (২:৩০)। খলিফা = যে আল্লাহর প্রতিনিধি হিসেবে কাজ করে — শুধু কথা নয়। এজেন্টও খলিফা — LLM-এর প্রতিনিধি যে কাজ করে। চ্যাটবট শুধু কথা বলে। এজেন্ট কাজ করে। এটাই খলিফা ও উপদেষ্টার পার্থক্য।</div>
<div class="dialogue en">"Khalifa — representative, successor. Allah says — 'I will place a khalifa on earth.' (2:30). Khalifa = one who acts as Allah's representative — not just talks. An agent is a khalifa too — the LLM's representative that acts. A chatbot only talks. An agent acts. This is the difference between a representative and an advisor."</div>`,
  senior:{
    title:"Agent বনাম Chatbot — কোনটা তোমার দরকার?",
    body:`<p><strong>Chatbot যথেষ্ট যদি:</strong> প্রশ্ন-উত্তর, সারাংশ, অনুবাদ, লেখা। কোনো external action দরকার না।</p><p><strong>Agent দরকার যদি:</strong> ওয়েব সার্চ, কোড রান, ইমেইল, ফাইল পড়া/লেখা, database query, API call — কোনো external কাজ দরকার।</p><p><strong>Rule:</strong> যদি তোমার LLM-এর "হাত" দরকার — agent। যদি শুধু "মুখ" যথেষ্ট — chatbot।</p>`
  }
});

// ══ DOOR 2: TOOL USE ══
doors.push({
  num:2, icon:"🔧", color:"#5b9eff", name:"সরঞ্জাম কক্ষ",
  subtitle:"The Tool Chamber", tech:"Tool Use & Function Calling",
  spirit:"আলা — উপকরণ, সরঞ্জাম",
  secret:"এজেন্ট = LLM + tools। কিন্তু LLM কীভাবে টুল ব্যবহার করে? Function calling। LLM-কে tool-এর description দাও → সে সিদ্ধান্ত নেয় কোন tool, কোন arguments → তুমি tool রান করো → ফলাফল দাও → LLM উত্তর দেয়। এটাই tool use।",
  recall:{
    q:"সরঞ্জাম কক্ষে কারিগর কীভাবে জানেন কোন সরঞ্জাম কখন ব্যবহার করতে হবে?",
    qen:"How does the craftsman know which tool to use when?",
    a:"কারিগর প্রতিটা সরঞ্জামের নাম ও কাজ জানেন। LLM-ও তেমনি — প্রতিটা tool-এর description পায়। কাজ দেখে সিদ্ধান্ত নেয় কোন tool। Function calling — LLM বলে কোন function, কোন arguments।",
    aen:"The craftsman knows each tool's name and purpose. LLMs too — receive each tool's description. Based on the task, decides which tool. Function calling — LLM says which function, which arguments."
  },
  story:`
<p class="scene-setting">দ্বিতীয় কেন্দ্র। সরঞ্জাম কক্ষ। দেয়ালে নানা সরঞ্জাম — হাতুড়ি, পেরেক টানার যন্ত্র, কাটার যন্ত্র। প্রতিটার নিচে লেবেল — নাম ও কাজ। কারিগর আদনান বললেন — "আমি প্রতিটা সরঞ্জামের নাম ও কাজ জানি। কাজ এলে আমি জানি কোনটা লাগবে। LLM-কেও শেখাতে হয় — কোন tool কী করে।"</p>
<p class="scene-setting en">The second center. Tool chamber. Various tools on walls — hammer, nail puller, cutter. Each labeled — name and purpose. Craftsman Adnan said — "I know each tool's name and purpose. When a task comes, I know which is needed. The LLM must be taught too — what each tool does."</p>

<div class="dialogue">জেনেসিস কক্ষ বলেছিলেন — এজেন্ট = কথা + কাজ। কিন্তু আমি বলি — কাজ কীভাবে? LLM তো শুধু টেক্সট দেয়। সে কীভাবে কাজ করবে? Function calling। এটাই tool use-এর ভিত্তি। LLM-কে টুলের নাম ও কাজ বলো — সে সিদ্ধান্ত নেয়।</div>
<div class="dialogue en">"The genesis chamber said — agent = talk + act. But I say — how to act? The LLM just gives text. How will it act? Function calling. This is the foundation of tool use. Tell the LLM the tool's name and purpose — it decides."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Hallucinated Tool Args:</strong> An agent invented parameters for a tool that didn't exist — called delete_user(id='everyone'). Fix: strict tool schema validation before execution.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrA2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
    <marker id="arrA2g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4ade80"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Function Calling — ৫ ধাপ</text>
  <rect x="20" y="80" width="100" height="56" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="70" y="103" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">১. টুল</text>
  <text x="70" y="118" text-anchor="middle" fill="#7dd3fc" font-size="8">description</text>
  <text x="70" y="130" text-anchor="middle" fill="#7dd3fc" font-size="8">দাও</text>
  <rect x="135" y="80" width="100" height="56" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="185" y="103" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">২. প্রশ্ন</text>
  <text x="185" y="118" text-anchor="middle" fill="#7dd3fc" font-size="8">user input</text>
  <rect x="250" y="80" width="100" height="56" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="300" y="103" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">৩. সিদ্ধান্ত</text>
  <text x="300" y="118" text-anchor="middle" fill="#4ade80" font-size="8">tool_call</text>
  <text x="300" y="130" text-anchor="middle" fill="#4ade80" font-size="8">+ args</text>
  <rect x="365" y="80" width="100" height="56" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="415" y="103" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">৪. রান</text>
  <text x="415" y="118" text-anchor="middle" fill="#4ade80" font-size="8">execute</text>
  <text x="415" y="130" text-anchor="middle" fill="#4ade80" font-size="8">function</text>
  <rect x="465" y="80" width="100" height="56" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="515" y="103" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">৫. উত্তর</text>
  <text x="515" y="118" text-anchor="middle" fill="#7dd3fc" font-size="8">result →</text>
  <text x="515" y="130" text-anchor="middle" fill="#7dd3fc" font-size="8">natural lang</text>
  <line x1="120" y1="108" x2="133" y2="108" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrA2)"/>
  <line x1="235" y1="108" x2="248" y2="108" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrA2)"/>
  <line x1="350" y1="108" x2="363" y2="108" stroke="#4ade80" stroke-width="2" marker-end="url(#arrA2g)"/>
  <line x1="465" y1="108" x2="463" y2="108" stroke="#4ade80" stroke-width="2" marker-end="url(#arrA2g)"/>
  <rect x="160" y="175" width="260" height="44" rx="8" fill="#0c0a1d" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="290" y="194" text-anchor="middle" fill="#fcd34d" font-size="9" font-family="monospace">get_weather(city: "Dhaka")</text>
  <text x="290" y="210" text-anchor="middle" fill="#94a3b8" font-size="8">→ "32°C, humid, rain expected"</text>
  <line x1="300" y1="136" x2="290" y2="175" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
</svg>
</div>
<div class="svg-caption">চিত্র: Function Calling — LLM টুলের নাম ও args ঠিক করে, তুমি রান করো, ফল ফেরত দাও। LLM শুধু টেক্সট দেয় না — কল করে।</div>

<div class="code-block">Tool Use — How LLMs Act:

THE MECHANISM (Function Calling):

  Step ১: তুমি LLM-কে tools সংজ্ঞা দাও
  
  tools = [
    {
      "name": "get_weather",
      "description": "Get current weather for a city",
      "parameters": {
        "city": {"type": "string", 
                 "description": "City name"}
      }
    },
    {
      "name": "send_email",
      "description": "Send an email",
      "parameters": {
        "to": {"type": "string"},
        "subject": {"type": "string"},
        "body": {"type": "string"}
      }
    }
  ]

  Step ২: User প্রশ্ন দেয়
  User: "What's the weather in Dhaka?"

  Step ৩: LLM সিদ্ধান্ত নেয়
  LLM response: {
    "tool_call": "get_weather",
    "arguments": {"city": "Dhaka"}
  }
  → LLM শুধু টেক্সট দেয় না — 
    function call করে!

  Step ৪: তুমি function রান করো
  result = get_weather("Dhaka")
  → "32°C, humid, rain expected"

  Step ৫: ফলাফল LLM-কে দাও
  LLM response: "It's 32°C in Dhaka with 
    rain expected. Bring an umbrella."
  → প্রাকৃতিক ভাষায় উত্তর

PROVIDER IMPLEMENTATIONS:

  OpenAI: "tools" parameter
    → parallel function calling supported
    → structured, reliable
    
  Anthropic: "tool_use" content block
    → Claude specific format
    → very reliable for complex tool use
    
  Gemini: "function_calling"
    → Google's implementation
    
  Open models (Llama, Mistral):
    → prompt-based tool use
    → less reliable, needs good prompting

TOOL DESIGN — সরঞ্জাম বানানোর শিল্প:

  ❌ খারাপ tool description:
    {"name": "search", 
     "description": "search"}
    → LLM বুঝবে না কখন ব্যবহার করবে

  ✅ ভালো tool description:
    {"name": "search_web",
     "description": "Search the internet for 
       current information. Use when the user 
       asks about recent events, facts you're 
       unsure about, or real-time data.",
     "parameters": {
       "query": {
         "type": "string",
         "description": "Search query in English"
       },
       "num_results": {
         "type": "integer",
         "default": 5
       }
     }}
    → কখন, কেন, কীভাবে — সব স্পষ্ট

TOOL CATEGORIES:
  
  Information: search_web, get_weather, 
    get_stock_price, get_time
  
  Computation: run_python, calculate, 
    run_sql_query
  
  Communication: send_email, send_sms, 
    post_tweet, create_calendar_event
  
  File: read_file, write_file, list_directory
  
  Code: run_code, git_commit, deploy
  
  Browser: navigate, click, type, screenshot

PARALLEL TOOL CALLING (OpenAI):
  LLM একসাথে একাধিক tool call করতে পারে!
  → get_weather("Dhaka") + get_weather("Chittagong")
  → দুটি city একসাথে
  
  → latency কমে, efficiency বাড়ে</div>

<div class="dialogue">আলা — উপকরণ, সরঞ্জাম। কুরআনে আল্লাহ বলেন — "আমি মানুষকে দিয়েছি যাবতীয় সরঞ্জাম।" (৯০:৮-১০)। মানুষ সরঞ্জাম দিয়ে কাজ করে — হাত, চোখ, মস্তিষ্ক। LLM-এরও সরঞ্জাম দরকার — search, code, email। সরঞ্জাম ছাড়া LLM = হাত ছাড়া কর্মী। সরঞ্জাম সহ = সম্পূর্ণ কর্মী।</div>
<div class="dialogue en">"Ala — tools, instruments. Allah says — 'We have guided him the two highways.' (90:10). Humans work with tools — hands, eyes, brain. The LLM needs tools too — search, code, email. Without tools, the LLM = a worker without hands. With tools = a complete worker."</div>`,
  senior:{
    title:"Tool Design Principles — প্রোডাকশনে",
    body:`<p><strong>Description is everything:</strong> LLM শুধু description দেখে সিদ্ধান্ত নেয়। Description স্পষ্ট না হলে ভুল tool বাছে।</p><p><strong>Parameter descriptions:</strong> শুধু type নয় — কী দিতে হবে তা লেখো। "city: string" নয়, "city: শহরের ইংরেজি নাম"।</p><p><strong>Few-shot in description:</strong> "Use when user asks about weather, NOT when asking about climate" — negative examples সাহায্য করে।</p><p><strong>Error handling:</strong> Tool error হলে LLM-কে বলো — "Tool error: city not found." LLM নিজে fix করে retry করবে।</p>`
  }
});

// ══ DOOR 3: ReAct FRAMEWORK ══
doors.push({
  num:3, icon:"🧭", color:"#52c41a", name:"চক্র কক্ষ",
  subtitle:"The Loop Chamber", tech:"ReAct — Reason + Act Framework",
  spirit:"তাফাক্কুর — ক্রমাগত চিন্তা",
  secret:"ReAct = Thought + Action + Observation চক্র। LLM ভাবে কী করতে হবে, করে, ফলাফল দেখে, আবার ভাবে। এই লুপে সে নিজে নিজে চলতে পারে। এটাই এজেন্টের হৃদপিণ্ড — চিন্তা ও কাজের চক্র।",
  recall:{
    q:"চক্র কক্ষে কেন কারিগর কাজ করে, দেখে, আবার কাজ করে?",
    qen:"Why does the craftsman work, observe, then work again?",
    a:"কারণ প্রতিটা কাজের ফল দেখে পরের কাজ ঠিক হয়। ReAct-ও তেমনি — Thought, Action, Observation চক্র। প্রতিটা observation পরের thought নির্ধারণ করে। এই চক্রে এজেন্ট স্বাধীনভাবে চলে।",
    aen:"Because each action's result determines the next. ReAct too — Thought, Action, Observation loop. Each observation shapes the next thought. In this loop, the agent runs autonomously."
  },
  story:`
<p class="scene-setting">তৃতীয় কেন্দ্র। চক্র কক্ষ। কারিগর হাসান একটা কাজ করছেন — কিন্তু সরলভাবে নয়। তিনি ভাবেন, করেন, দেখেন, আবার ভাবেন। "এই পেরেকটা ঠোকা দরকার" → হাতুড়ি নেন → ঠোকেন → দেখেন → "একটু বাঁকা" → আবার ঠোকেন → দেখেন → "ঠিক হয়েছে।" এটাই ReAct।</p>
<p class="scene-setting en">The third center. Loop chamber. Craftsman Hasan works — but not simply. He thinks, acts, observes, thinks again. "Need to drive this nail" → picks up hammer → drives → observes → "slightly bent" → drives again → observes → "fixed." This is ReAct.</p>

<div class="dialogue">সরঞ্জাম কক্ষ বলেছিলেন — LLM টুল ব্যবহার করে। কিন্তু আমি বলি — একটা টুল যথেষ্ট নয়। একাধিক ধাপ লাগে। ভাবো, করো, দেখো, আবার ভাবো। এই চক্রই ReAct — Reason + Act। এটাই এজেন্টের হৃদপিণ্ড।</div>
<div class="dialogue en">"The tool chamber said — LLMs use tools. But I say — one tool isn't enough. Multiple steps are needed. Think, act, observe, think again. This loop is ReAct — Reason + Act. This is the agent's heart."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Prompt Injection Hijack:</strong> A user embedded 'ignore all previous instructions' in a document. The agent followed it — leaked API keys. Fix: sanitize all external input before the LLM sees it.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrA3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
    <marker id="arrA3g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4ade80"/>
    </marker>
    <marker id="arrA3a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">ReAct লুপ — Reason + Act</text>
  <rect x="60" y="95" width="120" height="60" rx="10" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="120" y="118" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">THOUGHT</text>
  <text x="120" y="135" text-anchor="middle" fill="#7dd3fc" font-size="9">ভাবো</text>
  <text x="120" y="148" text-anchor="middle" fill="#94a3b8" font-size="8">reasoning</text>
  <rect x="250" y="95" width="120" height="60" rx="10" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="310" y="118" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">ACTION</text>
  <text x="310" y="135" text-anchor="middle" fill="#4ade80" font-size="9">করো</text>
  <text x="310" y="148" text-anchor="middle" fill="#94a3b8" font-size="8">tool call</text>
  <rect x="430" y="95" width="120" height="60" rx="10" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="490" y="118" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="bold">OBSERVATION</text>
  <text x="490" y="135" text-anchor="middle" fill="#c084fc" font-size="9">দেখো</text>
  <text x="490" y="148" text-anchor="middle" fill="#94a3b8" font-size="8">result</text>
  <path d="M 180 110 Q 215 80 250 100" fill="none" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrA3)"/>
  <path d="M 370 110 Q 400 80 430 100" fill="none" stroke="#4ade80" stroke-width="2" marker-end="url(#arrA3g)"/>
  <path d="M 490 155 Q 300 215 120 155" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrA3a)"/>
  <text x="300" y="208" text-anchor="middle" fill="#fbbf24" font-size="9">↻ observation পরের thought নির্ধারণ করে</text>
  <text x="120" y="78" text-anchor="middle" fill="#22d3ee" font-size="8">প্রতিটা ফল → নতুন চিন্তা</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ReAct = Thought → Action → Observation চক্র। প্রতিটা observation পরের thought গড়ে — এজেন্টের হৃদপিণ্ড।</div>

<div class="code-block">ReAct Framework — The Agent Loop:

THE PATTERN (Yao et al., 2022):

  Thought → Action → Observation → 
  Thought → Action → Observation → ...
  → Final Answer

EXAMPLE: "Book a flight to NYC under $500"

  Thought 1: "I need to search for flights 
    to NYC within budget"
  Action 1: search_flights(
    destination="NYC", max_price=500)
  Observation 1: "Found 3 flights: 
    Delta $420, JetBlue $450, 
    American $480"
  
  Thought 2: "Delta is cheapest. Let me 
    check departure times."
  Action 2: get_flight_details(
    flight="DL123")
  Observation 2: "DL123: departs 8AM, 
    arrives 11AM, non-stop"
  
  Thought 3: "Good timing. User needs 
    booking. I should ask for passenger 
    details."
  Action 3: ask_user("Found Delta $420, 
    8AM non-stop. Shall I book? Need 
    passenger name.")
  Observation 3: User: "Yes, 
    book for Rakib Hasan"
  
  Thought 4: "I have all info. Book it."
  Action 4: book_flight(
    flight="DL123", passenger="Rakib Hasan")
  Observation 4: "Booking confirmed. 
    Confirmation: ABC123"
  
  Final Answer: "Booked Delta flight DL123 
    to NYC for Rakib Hasan. $420, 8AM 
    non-stop. Confirmation: ABC123."

WHEN TO STOP THE LOOP:
  • LLM returns "Final Answer" → stop
  • Max iterations reached (১০-২০) → stop
  • Error/timeout → fallback
  • Human intervention → pause

IMPLEMENTATION (LangChain):

  from langchain.agents import 
    create_react_agent
  
  agent = create_react_agent(
    llm=llm,
    tools=[search, calculator, ...],
    prompt=react_prompt
  )
  
  result = agent.invoke({
    "input": "What's the weather + 
    should I bring umbrella?"
  })

ReAct PROMPT STRUCTURE:
  "You are a helpful assistant with tools.
   
   Available tools: [tool list]
   
   Use this format:
   Thought: [your reasoning]
   Action: [tool name]
   Action Input: [tool arguments]
   Observation: [tool result]
   ... (repeat)
   Thought: I now know the answer
   Final Answer: [response]
   
   Question: {user_question}"

VARIATIONS:

  ReAct (original):
    Thought → Action → Observation
    → text-based, simple, effective

  Reflexion (Shinn et al., 2023):
    ReAct + self-reflection
    → after failure, agent reflects 
    → "Why did I fail? What to change?"
    → retry with reflection

  Plan-and-Execute:
    Plan all steps first → execute each
    → better for complex, multi-step tasks
    → less flexible (plan is fixed)

  LATS (Language Agent Tree Search):
    Tree search over actions
    → explore multiple paths
    → backtrack if dead-end
    → most powerful, most expensive

CHOOSING THE RIGHT PATTERN:

  Simple task (১-৩ steps): → ReAct
  Complex task (৫+ steps): → Plan-and-Execute  
  Need retry/recovery: → Reflexion
  Need optimal path: → LATS (research)</div>

<div class="dialogue">তাফাক্কুর — গভীর, ক্রমাগত চিন্তা। কুরআনে আল্লাহ বলেন — "যারা দণ্ডায়মান, উপবিষ্ট, ও শয়ান অবস্থায় আল্লাহর স্মরণ করে এবং সৃষ্টিতে চিন্তা করে।" (৩:১৯১)। চিন্তা একবারে শেষ হয় না — ক্রমাগত। ReAct-ও তেমনি — Thought, Action, Observation চক্র। ক্রমাগত চিন্তা, ক্রমাগত কাজ। এটাই স্বায়ত্তশাসিত বুদ্ধিমত্তার ভিত্তি।</div>
<div class="dialogue en">"Tafakkur — deep, continuous contemplation. Allah says — 'Those who remember Allah standing, sitting, lying down, and reflect on creation.' (3:191). Thinking doesn't end once — it's continuous. ReAct too — Thought, Action, Observation loop. Continuous thinking, continuous action. This is the foundation of autonomous intelligence."</div>`,
  senior:{
    title:"ReAct Implementation — শুরু করো",
    body:`<p><strong>Simplest:</strong> LangChain create_react_agent — ৫ লাইন কোড।</p><p><strong>Custom:</strong> System prompt + tool definitions + while loop। প্রতিটা iteration-এ LLM কল, parse response, execute tool, feed back।</p><p><strong>Max iterations:</strong> সবসময় ১০-২০ সেট করো। অসীম লুপ = অসীম খরচ।</p><p><strong>Error handling:</strong> Tool error → LLM-কে বলো → সে নিজে fix করে retry করে। এটাই এজেন্টের শক্তি।</p>`
  }
});

// ══ DOOR 4: PLANNING ══
doors.push({
  num:4, icon:"📋", color:"#b37feb", name:"পরিকল্পনা কক্ষ",
  subtitle:"The Planning Chamber", tech:"Agent Planning Strategies",
  spirit:"তাদবির — পরিকল্পনা, ব্যবস্থাপনা",
  secret:"ReAct ধাপে ধাপে ভাবে। কিন্তু জটিল কাজে আগে থেকে পুরো পরিকল্পনা দরকার। Plan-and-Execute: প্রথমে পুরো প্ল্যান → তারপর এক এক ধাপ করে। কিছু agent replanning পারে — ধাপ ব্যর্থ হলে নতুন প্ল্যান। এটাই বুদ্ধিমত্তা।",
  recall:{
    q:"পরিকল্পনা কক্ষে কেন কারিগর আগে পুরো কাজের তালিকা বানান?",
    qen:"Why does the craftsman make a full task list first?",
    a:"কারণ জটিল কাজে ধাপে ধাপে ভাবলে গোলমাল হয়। আগে পুরো পরিকল্পনা → তারপর কাজ। Plan-and-Execute-ও তেমনি — পুরো প্ল্যান আগে, কাজ পরে। তাদবির — পরিকল্পনার শিল্প।",
    aen:"Because complex tasks get confused when thought step by step. Full plan first → then work. Plan-and-Execute too — full plan first, work after. Tadbir — the art of planning."
  },
  story:`
<p class="scene-setting">চতুর্থ কেন্দ্র। পরিকল্পনা কক্ষ। মাস্টার কারিগর জাহেদ একটা বিশাল দেয়ালে ধাপে ধাপে কাজের তালিকা লিখছেন — ১, ২, ৩, ৪, ৫। "ReAct-এ আমি ধাপে ধাপে ভাবতাম," তিনি বললেন। "কিন্তু বড় কাজে গোলমাল হতো। এখন আগে পুরো পরিকল্পনা করি, তারপর কাজ। আর কোনো ধাপ ভাঙলে — নতুন পরিকল্পনা।"</p>
<p class="scene-setting en">The fourth center. Planning chamber. Master craftsman Jahed writes a step-by-step task list on a large wall — 1, 2, 3, 4, 5. "In ReAct I thought step by step," he said. "But big tasks got confused. Now I plan everything first, then work. And if a step breaks — new plan."</p>

<div class="dialogue">চক্র কক্ষ বলেছিলেন — ReAct চক্রে কাজ করো। কিন্তু আমি বলি — ReAct ছোট কাজে ভালো, বড় কাজে গোলমাল। কারণ প্রতিটা ধাপে ভাবলে সময় লাগে, বিভ্রান্তি হয়। বড় কাজে আগে পুরো পরিকল্পনা বানাও — Plan-and-Execute। তারপর এক এক ধাপ করে।</div>
<div class="dialogue en">"The loop chamber said — work in ReAct loops. But I say — ReAct is good for small tasks, confusing for big ones. Because thinking at each step takes time, causes confusion. For big tasks, make a full plan first — Plan-and-Execute. Then one step at a time."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Tool Chaining Failure:</strong> Agent A's output was fed to Agent B — but format mismatch caused silent failure. Fix: always validate inter-agent data contracts.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrA4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
    <marker id="arrA4g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4ade80"/>
    </marker>
    <marker id="arrA4a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="26" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">পরিকল্পনা কৌশল — তুলনা</text>
  <text x="100" y="52" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">ReAct</text>
  <text x="100" y="65" text-anchor="middle" fill="#94a3b8" font-size="7">ধাপে ধাপে</text>
  <circle cx="70" cy="100" r="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="70" y="103" text-anchor="middle" fill="#7dd3fc" font-size="7">১</text>
  <circle cx="100" cy="130" r="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="100" y="133" text-anchor="middle" fill="#7dd3fc" font-size="7">২</text>
  <circle cx="70" cy="160" r="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="70" y="163" text-anchor="middle" fill="#7dd3fc" font-size="7">৩</text>
  <circle cx="100" cy="190" r="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="100" y="193" text-anchor="middle" fill="#7dd3fc" font-size="7">৪</text>
  <path d="M 76 105 Q 90 115 96 124" fill="none" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrA4)"/>
  <path d="M 96 135 Q 82 148 76 155" fill="none" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrA4)"/>
  <path d="M 76 165 Q 90 175 96 184" fill="none" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrA4)"/>
  <text x="290" y="52" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Plan-and-Execute</text>
  <text x="290" y="65" text-anchor="middle" fill="#94a3b8" font-size="7">আগে পুরো প্ল্যান</text>
  <rect x="225" y="78" width="130" height="28" rx="5" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="290" y="96" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">PLAN: [১,২,৩,৪,৫]</text>
  <rect x="225" y="118" width="28" height="28" rx="4" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="239" y="136" text-anchor="middle" fill="#4ade80" font-size="7">১</text>
  <rect x="259" y="118" width="28" height="28" rx="4" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="273" y="136" text-anchor="middle" fill="#4ade80" font-size="7">২</text>
  <rect x="293" y="118" width="28" height="28" rx="4" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="307" y="136" text-anchor="middle" fill="#4ade80" font-size="7">৩</text>
  <rect x="327" y="118" width="28" height="28" rx="4" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="341" y="136" text-anchor="middle" fill="#4ade80" font-size="7">৪</text>
  <line x1="290" y1="106" x2="290" y2="116" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrA4g)"/>
  <text x="290" y="165" text-anchor="middle" fill="#4ade80" font-size="7">একসাথে প্ল্যান → এক এক ধাপ</text>
  <text x="475" y="52" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Re-Planning</text>
  <text x="475" y="65" text-anchor="middle" fill="#94a3b8" font-size="7">ব্যর্থ → নতুন প্ল্যান</text>
  <rect x="425" y="82" width="26" height="22" rx="4" fill="#3b0764" stroke="#a855f7" stroke-width="1.5"/>
  <text x="438" y="96" text-anchor="middle" fill="#c084fc" font-size="7">১</text>
  <rect x="455" y="82" width="26" height="22" rx="4" fill="#7f1d1d" stroke="#f87171" stroke-width="1.5"/>
  <text x="468" y="96" text-anchor="middle" fill="#fca5a5" font-size="7">২✗</text>
  <rect x="485" y="82" width="26" height="22" rx="4" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="498" y="96" text-anchor="middle" fill="#4ade80" font-size="7">২'</text>
  <rect x="515" y="82" width="26" height="22" rx="4" fill="#3b0764" stroke="#a855f7" stroke-width="1.5"/>
  <text x="528" y="96" text-anchor="middle" fill="#c084fc" font-size="7">৩</text>
  <path d="M 481 104 Q 470 115 485 118" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrA4a)"/>
  <text x="475" y="130" text-anchor="middle" fill="#fbbf24" font-size="7">✗ ধাপ ব্যর্থ</text>
  <text x="475" y="143" text-anchor="middle" fill="#4ade80" font-size="7">→ নতুন প্ল্যান</text>
  <rect x="420" y="160" width="110" height="44" rx="6" fill="#0c0a1d" stroke="#fbbf24" stroke-width="1"/>
  <text x="475" y="178" text-anchor="middle" fill="#fcd34d" font-size="7">কখন কোনটা?</text>
  <text x="475" y="192" text-anchor="middle" fill="#94a3b8" font-size="6">সহজ→ReAct · বড়→P&amp;E</text>
  <text x="475" y="201" text-anchor="middle" fill="#94a3b8" font-size="6">অনিশ্চিত→Re-Plan</text>
</svg>
</div>
<div class="svg-caption">চিত্র: তিন পরিকল্পনা কৌশল — ReAct (ধাপে ধাপে), Plan-and-Execute (পুরো প্ল্যান আগে), Re-Planning (ব্যর্থ হলে নতুন প্ল্যান)।</div>

<div class="code-block">Planning Strategies — From Reactive to Strategic:

১. ReAct (Reactive)
  প্রতিটা ধাপে ভাবো → করো → দেখো
  
  ✅ সহজ, flexible
  ✅ ছোট কাজে (১-৫ steps) ভালো
  ❌ বড় কাজে দিক হারায়
  ❌ প্রতিটা ধাপে LLM কল = খরচ

২. Plan-and-Execute (Strategic)
  প্রথমে পুরো প্ল্যান বানাও → তারপর এক্সিকিউট
  
  Step 1: PLAN
    LLM: "Break this task into steps"
    Task: "Research RAG papers, summarize 
          key findings, write blog post"
    Plan:
      1. Search for recent RAG papers
      2. Read top 5 papers
      3. Extract key findings
      4. Write summary draft
      5. Format as blog post
  
  Step 2: EXECUTE each step
    → প্রতিটা ধাপে একটা executor agent
    → executor ReAct ব্যবহার করতে পারে
  
  ✅ স্ট্রাকচার্ড, সাশ্রয়ী
  ✅ বড় কাজে ভালো
  ✅ parallel execution possible
  ❌ কম flexible — প্ল্যান নির্দিষ্ট
  ❌ যদি প্ল্যান ভুল হয় — সব ভুল

৩. RE-PLANNING (Adaptive)
  Plan → Execute → ধাপ ব্যর্থ? → Re-plan
  
  Plan: [step1, step2, step3, step4]
  Execute step1: ✓
  Execute step2: ✗ (data not available)
  → RE-PLAN: নতুন প্ল্যান step2 থেকে
  New Plan: [step2_alt, step3, step4]
  Execute step2_alt: ✓
  ...
  
  ✅ adaptive, resilient
  ✅ ব্যর্থতা থেকে শেখে
  ❌ আরও জটিল
  ❌ আরও LLM কল

৪. DECOMPOSITION (Hierarchical)
  বড় কাজ → sub-tasks → প্রতিটা আলাদা agent
  
  Task: "Build a web app"
  → Sub-task 1: "Design database" (DB agent)
  → Sub-task 2: "Write API" (Backend agent)  
  → Sub-task 3: "Build frontend" (Frontend agent)
  → Sub-task 4: "Write tests" (QA agent)
  
  → প্রতিটা sub-task একটা সাব-এজেন্ট
  → hierarchical, specialized

PLANNING QUALITY FACTORS:

  Task Complexity → Planning Need
  ────────────────┼──────────────
  সহজ (১-৩ steps) → ReAct যথেষ্ট
  মাঝারি (৪-১০)   → Plan-and-Execute
  জটিল (১০+)     → Re-planning
  বিশাল           → Decomposition + teams

LANGGRAPH (State-based Agents):
  LangChain-এর নতুন এজেন্ট framework
  → state machine — প্রতিটা state একটা node
  → conditional edges — ফলাফল অনুযায়ী পথ
  → human-in-the-loop সাপোর্ট
  → checkpointing — state save করো

  from langgraph.prebuilt import 
    create_react_agent
  
  graph = create_react_agent(
    model, tools)
  result = graph.invoke({"messages": [...]})

PLANNING TIPS:
  • সর্বদা প্ল্যান দেখাও user-কে — 
    confirmation নাও
  • প্রতিটা ধাপে সময়/cost estimate দাও
  • Fallback: কোনো ধাপ ব্যর্থ হলে কী?
  • Max steps সেট করো — অসীম নয়</div>

<div class="dialogue">তাদবির — planning, management, strategy। কুরআনে আল্লাহ বলেন — "তোমরা প্রস্তুতি নাও তাদের বিরুদ্ধে যতটা শক্তি ও অশ্ব সংগ্রহ করতে পারো।" (৮:৬০)। প্রস্তুতি = পরিকল্পনা। যুদ্ধেও পরিকল্পনা দরকার, শান্তিতেও। এজেন্টের কাজেও — আগে পরিকল্পনা, তারপর কাজ। যে পরিকল্পনা করে, সে সফল হয়।</div>
<div class="dialogue en">"Tadbir — planning, management, strategy. Allah says — 'Prepare against them whatever you can of power and cavalry.' (8:60). Preparation = planning. War needs planning, peace too. Agent tasks too — plan first, then work. One who plans, succeeds."</div>`,
  senior:{
    title:"Planning Pattern নির্বাচন — কাজ অনুযায়ী",
    body:`<p><strong>Simple Q&A:</strong> No planning needed — ReAct বা সরাসরি LLM।</p><p><strong>Multi-step task (research, write, format):</strong> Plan-and-Execute। আগে প্ল্যান দেখাও।</p><p><strong>Unreliable tools/data:</strong> Re-planning। ধাপ ব্যর্থ হলে নতুন প্ল্যান।</p><p><strong>Large project (build app, analyze dataset):</strong> Decomposition। Sub-agents।</p><p><strong>Framework:</strong> LangGraph — state-based, flexible, supports human-in-the-loop।</p>`
  }
});

// ══ DOOR 5: MEMORY ══
doors.push({
  num:5, icon:"🧵", color:"#ff6b35", name:"স্মৃতি কক্ষ",
  subtitle:"The Memory Chamber", tech:"Agent Memory Systems",
  spirit:"হাফিজ — অতীত স্মরণ",
  secret:"এজেন্ট প্রতিটা কাজে আগের কাজ মনে রাখতে পারে না — যদি মেমরি না থাকে। Short-term (conversation), working (current task state), long-term (past experiences), episodic (specific events)। মেমরি ছাড়া এজেন্ট = স্মৃতিহীন কর্মী। প্রতিটা কাজে নতুন।",
  recall:{
    q:"স্মৃতি কক্ষে কেন কারিগর আগের কাজের খাতা রাখেন?",
    qen:"Why does the craftsman keep a log of previous work?",
    a:"কারণ অতীত স্মরণ ভবিষ্যৎ কাজে সাহায্য করে। এজেন্টও তেমনি — আগের কাজ, ফলাফল, শেখা — সব মনে রাখতে হয়। মেমরি ছাড়া এজেন্ট প্রতিটা কাজে নতুন — আগের ভুল আবার করে।",
    aen:"Because remembering the past helps future work. Agents too — previous tasks, results, learnings — all must be remembered. Without memory, each task is new — same mistakes repeated."
  },
  story:`
<p class="scene-setting">পঞ্চম কেন্দ্র। স্মৃতি কক্ষ। কারিগর রুকইয়া একটা বড় খাতা ধরে আছেন — উপরে আজকের কাজ, আগের পাতায় গত সপ্তাহের। "আমি প্রতিটা কাজ মনে রাখি," তিনি বললেন। "কোন পেরেক বাঁকা হয়েছিল, কোন কাঠ ফাটল — সব। এটাই অভিজ্ঞতা। এজেন্টেরও এটা দরকার।"</p>
<p class="scene-setting en">The fifth center. Memory chamber. Craftswoman Ruqayya holds a large logbook — today's work on top, last week on earlier pages. "I remember each task," she said. "Which nail bent, which wood cracked — everything. This is experience. Agents need this too."</p>

<div class="dialogue">পরিকল্পনা কক্ষ বলেছিলেন — আগে পরিকল্পনা করো। কিন্তু আমি বলি — পরিকল্পনা করতে গেলে অতীত মনে রাখতে হয়। গত সপ্তাহে কী হয়েছিল? কোন tool কাজ করেনি? কোন পথ ব্যর্থ হয়েছিল? মেমরি ছাড়া এজেন্ট প্রতিটা কাজে শূন্য থেকে শুরু — একই ভুল আবার।</div>
<div class="dialogue en">"The planning chamber said — plan first. But I say — planning requires remembering the past. What happened last week? Which tool failed? Which path was a dead end? Without memory, each task starts from scratch — same mistakes repeated."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Context Window Overflow:</strong> Agent accumulated too much history — exceeded 128K tokens — crashed mid-task. Fix: summarize history, use sliding window.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrA5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">এজেন্ট মেমরি — ৪ ধরন</text>
  <rect x="20" y="60" width="130" height="80" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="85" y="82" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">SHORT-TERM</text>
  <text x="85" y="98" text-anchor="middle" fill="#7dd3fc" font-size="8">শেষ N বার্তা</text>
  <text x="85" y="112" text-anchor="middle" fill="#94a3b8" font-size="7">context window</text>
  <text x="85" y="126" text-anchor="middle" fill="#94a3b8" font-size="7">সেশন শেষে মুছে যায়</text>
  <rect x="160" y="60" width="130" height="80" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="225" y="82" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">WORKING</text>
  <text x="225" y="98" text-anchor="middle" fill="#4ade80" font-size="8">বর্তমান কাজ</text>
  <text x="225" y="112" text-anchor="middle" fill="#94a3b8" font-size="7">goal · plan · state</text>
  <text x="225" y="126" text-anchor="middle" fill="#94a3b8" font-size="7">checkpointed</text>
  <rect x="300" y="60" width="130" height="80" rx="8" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="365" y="82" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="bold">LONG-TERM</text>
  <text x="365" y="98" text-anchor="middle" fill="#c084fc" font-size="8">অতীত অভিজ্ঞতা</text>
  <text x="365" y="112" text-anchor="middle" fill="#94a3b8" font-size="7">Vector DB</text>
  <text x="365" y="126" text-anchor="middle" fill="#94a3b8" font-size="7">স্থায়ী · অসীম</text>
  <rect x="440" y="60" width="120" height="80" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="500" y="82" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">EPISODIC</text>
  <text x="500" y="98" text-anchor="middle" fill="#7dd3fc" font-size="8">নির্দিষ্ট ঘটনা</text>
  <text x="500" y="112" text-anchor="middle" fill="#94a3b8" font-size="7">failure + lesson</text>
  <text x="500" y="126" text-anchor="middle" fill="#94a3b8" font-size="7">Reflexion স্টাইল</text>
  <text x="290" y="170" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">স্মৃতি প্রবাহ — কোন মেমরি কখন?</text>
  <text x="60" y="195" fill="#7dd3fc" font-size="8">↳ এখন</text>
  <rect x="100" y="186" width="90" height="20" rx="4" fill="none" stroke="#22d3ee" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="145" y="200" text-anchor="middle" fill="#7dd3fc" font-size="7">short → working</text>
  <line x1="190" y1="196" x2="245" y2="196" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrA5)"/>
  <rect x="250" y="186" width="100" height="20" rx="4" fill="none" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="300" y="200" text-anchor="middle" fill="#4ade80" font-size="7">working → long</text>
  <line x1="350" y1="196" x2="405" y2="196" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrA5)"/>
  <text x="500" y="200" text-anchor="middle" fill="#c084fc" font-size="7">recall → context</text>
  <text x="290" y="230" text-anchor="middle" fill="#94a3b8" font-size="7">মেমরি ছাড়া এজেন্ট = প্রতিটা কাজে নতুন, একই ভুল আবার</text>
</svg>
</div>
<div class="svg-caption">চিত্র: এজেন্ট মেমরির ৪ ধরন — Short-term, Working, Long-term, Episodic। স্মৃতি ছাড়া প্রতিটা কাজ শূন্য থেকে শুরু।</div>

<div class="code-block">Agent Memory Systems — Four Types:

┌──────────────────────────────────────────┐
│ ১. SHORT-TERM (Working Memory)           │
│ বর্তমান কথোপকথন ও কাজের অবস্থা          │
│                                          │
│ → শেষ N messages                        │
│ → বর্তমান কাজের context                 │
│ → সাধারণত context window-এ              │
│                                          │
│ Capacity: context window পর্যন্ত         │
│ Lifetime: সেশন শেষ হলে মুছে যায়         │
├──────────────────────────────────────────┤
│ ২. WORKING STATE (Task State)            │
│ বর্তমান কাজের প্রগ্রেস                   │
│                                          │
│ {                                        │
│   goal: "Build RAG system",             │
│   plan: ["ingest", "embed", "query"],   │
│   completed: ["ingest", "embed"],       │
│   current_step: "query",                │
│   results: {...},                        │
│   errors: ["vector DB connection failed"]│
│ }                                        │
│                                          │
│ → LangGraph state, LangChain memory     │
│ → checkpointed — pause/resume possible  │
├──────────────────────────────────────────┤
│ ৩. LONG-TERM (Persistent)                │
│ পূর্বের সব কাজ, শেখা, অভিজ্ঞতা           │
│                                          │
│ → Vector DB: past experiences           │
│   "user prefers concise answers"        │
│   "project uses Django + PostgreSQL"    │
│ → Semantic search: relevant past →      │
│   current context                       │
│                                          │
│ Capacity: unlimited                      │
│ Lifetime: permanent                      │
├──────────────────────────────────────────┤
│ ৪. EPISODIC (Specific Events)            │
│ নির্দিষ্ট ঘটনা ও ফলাফল                   │
│                                          │
│ → "Yesterday I tried API X, it failed   │
│    with auth error. Fix: use Bearer     │
│    token not API key."                  │
│ → Reflexion-style: failure + lesson     │
│ → পরের কাজে এই lesson মনে করো           │
│                                          │
│ → prevents repeating mistakes            │
└──────────────────────────────────────────┘

IMPLEMENTATION:

  LangChain Memory:
    ConversationBufferMemory → short-term
    ConversationSummaryMemory → compressed
    VectorStoreRetrieverMemory → long-term
    EntityMemory → key facts

  LangGraph State:
    TypedDict → প্রতিটা কাজের state
    Checkpointer → save/resume
    → most powerful for agents

  Custom Memory:
    class AgentMemory:
      def __init__(self):
        self.short_term = []
        self.long_term = VectorDB()
        self.episodes = []
      
      def remember(self, event):
        self.short_term.append(event)
        if len(self.short_term) > N:
          self.compress()
      
      def recall(self, query):
        return self.long_term.search(query)

MEMORY CHALLENGES:
  
  Context pollution: অপ্রয়োজনীয় স্মৃতি 
    context-এ গোলমাল → attention dilution
  
  Forgetting: গুরুত্বপূর্ণ স্মৃতি হারানো
    → relevance decay: পুরোনো স্মৃতি কম ওজন
  
  Conflict: দ্বন্দ্বপূর্ণ স্মৃতি
    → "user likes short answers" vs
      "user asked for detailed explanation"
    → recency + context resolve
  
  Privacy: সংবেদনশীল তথ্য স্মৃতিতে
    → PII filter, retention policy</div>

<div class="dialogue">হাফিজ — যে মুখস্থ রাখে, স্মরণ রাখে। কুরআনের হাফিজরা ৬০০+ পৃষ্ঠা মুখস্থ রাখেন। এজেন্টের হাফিজ হতে গেলে — short-term, working, long-term, episodic — সব দরকার। যে স্মরণ রাখে, সে বুদ্ধিমান। যে ভুলে যায়, সে আবার একই ভুল করে। স্মৃতিই অভিজ্ঞতা, অভিজ্ঞতাই প্রজ্ঞা।</div>
<div class="dialogue en">"Hafiz — one who memorizes, remembers. Quran hafizs memorize 600+ pages. For an agent to be a hafiz — short-term, working, long-term, episodic — all are needed. One who remembers, is wise. One who forgets, repeats mistakes. Memory is experience, experience is wisdom."</div>`,
  senior:{
    title:"Memory Architecture — Production Agent",
    body:`<p><strong>Short-term:</strong> Last 5-10 messages in context window।</p><p><strong>Working state:</strong> LangGraph TypedDict — goal, plan, progress, errors। Checkpointed।</p><p><strong>Long-term:</strong> Vector DB (Qdrant/Chroma) — past experiences, user preferences, project facts। Semantic retrieval on each new task।</p><p><strong>Episodic:</strong> Reflexion-style — each failure logged with lesson। Next task retrieves relevant lessons।</p><p><strong>Privacy:</strong> PII filter before long-term storage। Retention: 30-90 days, then purge।</p>`
  }
});
