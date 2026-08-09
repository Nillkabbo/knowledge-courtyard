// ════════════════════════════════════════
// স্বাধীন বুদ্ধি — DOORS 6-10
// AI Agents: Multi-Agent → Production
// ════════════════════════════════════════

// ══ DOOR 6: MULTI-AGENT SYSTEMS ══
doors.push({
  num:6, icon:"👥", color:"#36d6e7", name:"পরিষদ কক্ষ",
  subtitle:"The Council Chamber", tech:"Multi-Agent Orchestration",
  spirit:"শূরা — পরামর্শ, সম্মিলিত সিদ্ধান্ত",
  secret:"একজন কর্মী সব পারে না। কিন্তু একটা দল — গবেষক, কোডার, পর্যালোচক — একসাথে অনেক ক পারে। Multi-agent = বিশেষজ্ঞদের দল। প্রতেকজন নিজের কাজে নিখুঁত। একসাথে এক কাজ। এটাই শূরা।",
  recall:{
    q:"পরিষদ কক্ষে কেন একজন কর্মী নয়, একটা দল কাজ করে?",
    qen:"Why does a team work instead of one person in the council chamber?",
    a:"কারণ প্রতিটা বিশেষজ্ঞ নিজের কাজে সেরা। গবেষক গবেষণায়, কোডার কোডে, পর্যালোচক যাচাইয়ে। Multi-agent-ও তেমনি — প্রতিটা agent একটি দক্ষতায়। একসাথে = সম্পূর্ণ। শূরা — সম্মিলিত প্রজ্ঞা।",
    aen:"Because each expert is best at their own work. Researcher in research, coder in code, reviewer in review. Multi-agent too — each agent in one skill. Together = complete. Shura — collective wisdom."
  },
  story:`
<p class="scene-setting">ষষ্ঠ কেন্দ্র। পরিষদ কক্ষ। একটা বড় টেবিল — চারপাশে চারজন বিশেষজ্ঞ। একজন গবেষক (তথ্য খোঁজেন), একজন কোডার (কোড লেখেন), একজন পর্যালোচক (যাচাই করেন), একজন সমন্বয়কারী (সব সংযোগ করেন)। পরিষদ প্রধান তালহা বললেন — "একা আমি পারতাম না। কিন্তু দলে আমরা সব পারি।"</p>
<p class="scene-setting en">The sixth center. Council chamber. A large table — four experts around it. A researcher (finds info), a coder (writes code), a reviewer (verifies), a coordinator (connects all). Council chief Talha said — "Alone I couldn't. But as a team, we can do anything."</p>

<div class="dialogue">স্মৃতি কক্ষ বলেছিলেন — মেমরি দাও। কিন্তু আমি বলি — মেমরি যথেষ্ট নয়। কাজ জটিল হলে একজন এজেন্ট সব পারে না। দরকার দল — একাধিক এজেন্ট, প্রত্যেকে বিশেষজ্ঞ। গবেষক এজেন্ট, কোডার এজেন্ট, পর্যালোচক এজেন্ট। একসাথে কাজ। এটাই multi-agent।</div>
<div class="dialogue en">"The memory chamber said — give memory. But I say — memory isn't enough. Complex tasks can't be done by one agent. You need a team — multiple agents, each specialized. Researcher agent, coder agent, reviewer agent. Working together. This is multi-agent."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Error Recovery:</strong> Agent hit a 500 error from API — stopped completely instead of retrying. Fix: implement retry with exponential backoff.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrA6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
    <marker id="arrA6g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4ade80"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Multi-Agent অর্কেস্ট্রেশন — শূরা</text>
  <rect x="220" y="48" width="140" height="48" rx="10" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="290" y="70" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="bold">MANAGER</text>
  <text x="290" y="86" text-anchor="middle" fill="#c084fc" font-size="8">plan · assign · integrate</text>
  <line x1="260" y1="96" x2="120" y2="135" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrA6)"/>
  <line x1="290" y1="96" x2="290" y2="135" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrA6)"/>
  <line x1="320" y1="96" x2="460" y2="135" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrA6)"/>
  <rect x="40" y="135" width="130" height="58" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="105" y="157" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">RESEARCHER</text>
  <text x="105" y="173" text-anchor="middle" fill="#7dd3fc" font-size="8">তথ্য খোঁজে</text>
  <text x="105" y="186" text-anchor="middle" fill="#94a3b8" font-size="7">search · read</text>
  <rect x="225" y="135" width="130" height="58" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="157" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">CODER</text>
  <text x="290" y="173" text-anchor="middle" fill="#4ade80" font-size="8">কোড লেখে</text>
  <text x="290" y="186" text-anchor="middle" fill="#94a3b8" font-size="7">write · run</text>
  <rect x="410" y="135" width="130" height="58" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="475" y="157" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">REVIEWER</text>
  <text x="475" y="173" text-anchor="middle" fill="#7dd3fc" font-size="8">যাচাই করে</text>
  <text x="475" y="186" text-anchor="middle" fill="#94a3b8" font-size="7">validate · test</text>
  <path d="M 175 165 Q 200 175 225 165" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrA6g)"/>
  <path d="M 355 165 Q 380 175 410 165" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrA6g)"/>
  <text x="105" y="215" text-anchor="middle" fill="#7dd3fc" font-size="7">↳ ফলাফল</text>
  <text x="290" y="215" text-anchor="middle" fill="#4ade80" font-size="7">↳ কোড</text>
  <text x="475" y="215" text-anchor="middle" fill="#7dd3fc" font-size="7">↳ যাচাই</text>
  <text x="290" y="238" text-anchor="middle" fill="#fbbf24" font-size="8">প্রতিটা agent নিজের কাজে নিখুঁত — একসাথে সম্পূর্ণ</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Multi-Agent অর্কেস্ট্রেশন — Manager পরিকল্পনা করে, বিশেষজ্ঞ agents (Researcher, Coder, Reviewer) কাজ করে। শূরা — সম্মিলিত প্রজ্ঞা।</div>

<div class="code-block">Multi-Agent Orchestration — Teams of Agents:

ARCHITECTURES:

১. SEQUENTIAL (Pipeline)
  Agent A → Agent B → Agent C
  
  Researcher → Writer → Editor
  
  "Find facts about X" → "Write article" → "Edit"
  
  ✅ সহজ, predictable
  ❌ কোনো agent ব্যর্থ হলে সব থেমে যায়

২. PARALLEL (Fan-out/Fan-in)
  Agent A ─┐
  Agent B ─┤→ Synthesizer
  Agent C ─┘
  
  "Analyze from 3 perspectives" → combine
  
  ✅ দ্রুত (parallel)
  ❌ coordination জটিল

৩. HIERARCHICAL (Manager-Worker)
  Manager Agent
    ├── Worker A
    ├── Worker B  
    └── Worker C
  
  "Build web app"
    → Manager: plan + assign
    → Worker A: database
    → Worker B: backend
    → Worker C: frontend
    → Manager: integrate + review
  
  ✅ বড় কাজে ভালো
  ❌ manager bottleneck

৪. CONVERSATIONAL (Debate)
  Agent A ↔ Agent B ↔ Agent C
  
  "Design the best architecture"
    Agent A: "Microservices!"
    Agent B: "Monolith is simpler!"
    Agent C: "What about serverless?"
    → debate → consensus
  
  ✅ গুণমান উন্নত (diverse views)
  ❌ ধীর, expensive

FRAMEWORKS (2024-2025):

┌──────────────┬────────────────────────────┐
│ Framework    │ Best For                   │
├──────────────┼────────────────────────────┤
│ CrewAI       │ Role-based teams           │
│              │ CEO + Analyst + Writer     │
│              │ সহজ, intuitive             │
├──────────────┼────────────────────────────┤
│ AutoGen      │ Conversational agents      │
│ (Microsoft)  │ agent-to-agent dialogue    │
│              │ code execution built-in    │
├──────────────┼────────────────────────────┤
│ LangGraph    │ State-based workflows      │
│              │ সবচেয়ে flexible           │
│              │ production-grade           │
├──────────────┼────────────────────────────┤
│ OpenAI       │ Built-in agents            │
│ Swarm        │ Lightweight handoffs       │
│              │ (experimental 2024)        │
├──────────────┼────────────────────────────┤
│ MetaGPT      │ Software dev team          │
│              │ PM + Architect + Dev + QA  │
└──────────────┴────────────────────────────┘

CREWAI EXAMPLE:
  from crewai import Agent, Task, Crew
  
  researcher = Agent(
    role="Research Analyst",
    goal="Find accurate information",
    tools=[search_tool],
    backstory="Expert at finding facts..."
  )
  
  writer = Agent(
    role="Content Writer",
    goal="Write engaging content",
    backstory="Award-winning writer..."
  )
  
  research_task = Task(
    description="Research {topic}",
    agent=researcher
  )
  
  write_task = Task(
    description="Write article from research",
    agent=writer,
    context=[research_task]  
    # writer sees researcher output!
  )
  
  crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, write_task]
  )
  result = crew.kickoff(
    inputs={"topic": "AI agents"})

CHALLENGES:
  • Cost: প্রতিটা agent = LLM কল × N steps
    → ৩ agents × ৫ steps × $০.০৫ = $০.৭৫/task
  • Coordination: কে কী করবে?
    → স্পষ্ট role, task, dependency
  • Error cascade: এক agent ভুল → সব ভুল
    → validation প্রতিটা agent-এ
  • Latency: sequential = ধীর
    → parallel যেখানে সম্ভব</div>

<div class="dialogue">শূরা — consultation, council। কুরআনে আল্লাহ বলেন — "তাদের কাজ পারস্পরিক পরামর্শের মাধ্যমে হয়।" (৪২:৩৮)। একা সিদ্ধান্ত নয় — সম্মিলিত। Multi-agent-ও তেমনি — এক এজেন্ট নয়, দল। গবেষক, কোডার, পর্যালোচক — একসাথে। শূরা — সম্মিলিত প্রজ্ঞা একার চেয়ে ভালো। দলে ত্রুটি কম, গুণমান বেশি।</div>
<div class="dialogue en">"Shura — consultation, council. Allah says — 'Their affairs are conducted by mutual consultation.' (42:38). Not solo decisions — collective. Multi-agent too — not one agent, a team. Researcher, coder, reviewer — together. Shura — collective wisdom beats individual. In teams, fewer errors, higher quality."</div>`,
  senior:{
    title:"Multi-Agent কখন দরকার — সিদ্ধান্ত",
    body:`<p><strong>Single agent যথেষ্ট যদি:</strong> এক ধরনের কাজ (search ও summarize), ছোট task, সহজ pipeline।</p><p><strong>Multi-agent দরকার যদি:</strong> একাধিক দক্ষতা দরকার (research + code + review), জটিল কাজ (build software, analyze data, write report), quality bar উঁচু।</p><p><strong>Framework choice:</strong> সহজ team = CrewAI। Conversational = AutoGen। Production workflow = LangGraph।</p><p><strong>Cost warning:</strong> ৩+ agents = ৩x+ cost। শুরুতে ২ agents দিয়ে ট্রাই করো।</p>`
  }
});

// ══ DOOR 7: HUMAN-IN-THE-LOOP ══
doors.push({
  num:7, icon:"🤝", color:"#fbbf24", name:"অনুমোদন কক্ষ",
  subtitle:"The Approval Chamber", tech:"Human-in-the-Loop",
  spirit:"আমানত — আস্থা ও যাচাই",
  secret:"সম্পূর্ণ স্বায়ত্তশাসন বিপজ্জনক। কিছু কাজে মানুষের অনুমোদন দরকার — ইমেইল পাঠানো, টাকা স্থানান্তর, ডিলিট। Human-in-the-loop = এজেন্ট করে, মানুষ যাচাই করে। আস্থা কিন্তু যাচাই সহ। আমানত।",
  recall:{
    q:"অনুমোদন কক্ষে কেন কিছু কাজে মানুষের স্বাক্ষর দরকার?",
    qen:"Why do some tasks need human signature in the approval chamber?",
    a:"কারণ কিছু কাজ অপরিবর্তনীয় — ইমেইল গেলে ফেরত নেই, টাকা গেলে ফেরত নেই। এজেন্ট করতে পারে কিন্তু মানুষের অনুমোদন দরকার। আমানত — আস্থা কিন্তু যাচাই সহ।",
    aen:"Because some actions are irreversible — sent email can't return, transferred money can't return. Agent can do it but human approval needed. Amanat — trust but verify."
  },
  story:`
<p class="scene-setting">সপ্তম কেন্দ্র। অনুমোদন কক্ষ। এজেন্ট একটা কাজ করেছে — কিন্তু শেষ ধাপে থামে। একটা সিল দরকার — মানুষের স্বাক্ষর। অনুমোদন কারিগর আব্দুল্লাহ বললেন — "এজেন্ট দ্রুত, কিন্তু চূড়ান্ত সিদ্ধান্ত মানুষের। ইমেইল পাঠানো, টাকা স্থানান্তর, ডিলিট — এসবে আমার স্বাক্ষর দরকার। আমানত।"</p>
<p class="scene-setting en">The seventh center. Approval chamber. The agent has done a task — but stops at the final step. Needs a seal — human signature. Approval craftsman Abdullah said — "The agent is fast, but the final decision is human. Sending email, transferring money, deleting — these need my signature. Amanat."</p>

<div class="dialogue">পরিষদ কক্ষ বলেছিলেন — দল বানাও। কিন্তু আমি বলি — দল যতই ভালো হোক, সম্পূর্ণ স্বায়ত্তশাসন বিপজ্জনক। এজেন্ট ভুল করতে পারে। ইমেইল পাঠাতে পারে ভুল ব্যক্তিকে। টাকা স্থানান্তর করতে পারে ভুল পরিমাণ। এসব ক্ষেত্রে মানুষের অনুমোদন দরকার। Human-in-the-loop।</div>
<div class="dialogue en">"The council chamber said — build teams. But I say — however good the team, full autonomy is dangerous. Agents can err. Can send email to the wrong person. Transfer the wrong amount. In these cases, human approval is needed. Human-in-the-loop."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Tool Permission Bypass:</strong> Agent was given file write access — it overwrote critical config. Fix: sandbox all tool execution, least-privilege permissions.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrA7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
    <marker id="arrA7g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4ade80"/>
    </marker>
    <marker id="arrA7r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#f87171"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Human-in-the-Loop — আমানত</text>
  <rect x="30" y="90" width="100" height="50" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="80" y="112" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">AGENT</text>
  <text x="80" y="128" text-anchor="middle" fill="#7dd3fc" font-size="8">কাজ প্রস্তুত</text>
  <polygon points="180,115 165,100 165,130" fill="#475569"/>
  <rect x="185" y="80" width="120" height="70" rx="10" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="245" y="105" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="bold">⚠️ APPROVE?</text>
  <text x="245" y="122" text-anchor="middle" fill="#c084fc" font-size="8">মানুষ দেখে</text>
  <text x="245" y="138" text-anchor="middle" fill="#94a3b8" font-size="7">pause · wait</text>
  <line x1="130" y1="115" x2="183" y2="115" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrA7)"/>
  <rect x="350" y="60" width="100" height="40" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="400" y="78" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">✓ হ্যাঁ</text>
  <text x="400" y="92" text-anchor="middle" fill="#4ade80" font-size="7">execute</text>
  <rect x="350" y="130" width="100" height="40" rx="8" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
  <text x="400" y="148" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="bold">✗ না</text>
  <text x="400" y="162" text-anchor="middle" fill="#fca5a5" font-size="7">revise</text>
  <line x1="305" y1="100" x2="348" y2="80" stroke="#4ade80" stroke-width="2" marker-end="url(#arrA7g)"/>
  <line x1="305" y1="130" x2="348" y2="150" stroke="#f87171" stroke-width="2" marker-end="url(#arrA7r)"/>
  <rect x="475" y="60" width="90" height="40" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="520" y="78" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">DONE</text>
  <text x="520" y="92" text-anchor="middle" fill="#4ade80" font-size="7">✓ পাঠানো</text>
  <line x1="450" y1="80" x2="473" y2="80" stroke="#4ade80" stroke-width="2" marker-end="url(#arrA7g)"/>
  <path d="M 400 170 Q 250 210 80 140" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrA7r)"/>
  <text x="230" y="225" text-anchor="middle" fill="#fbbf24" font-size="8">প্রত্যাখ্যান → এজেন্ট আবার চেষ্টা করে</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Human-in-the-Loop — এজেন্ট কাজ প্রস্তুত করে, থামে, মানুষ অনুমোদন দেয়। হ্যাঁ → execute, না → revise। আমানত — আস্থা কিন্তু যাচাই সহ।</div>

<div class="code-block">Human-in-the-Loop — Trust but Verify:

LEVELS OF HUMAN INVOLVEMENT:

  Level ১: FULL AUTO (no human)
    → agent does everything, no approval
    → use: read-only tasks (search, summarize)
    → risk: low (no side effects)

  Level ২: NOTIFY (inform human)
    → agent does, human gets notification
    → use: low-stakes actions (draft email)
    → human can intervene if wrong

  Level ৩: APPROVE (human signs off)  
    → agent prepares, human approves
    → use: irreversible actions (send email, 
      file write, deploy)
    → agent pauses, waits for approval

  Level ৪: COLLABORATE (human + agent)
    → human and agent work together
    → use: creative/complex tasks
    → real-time interaction

  Level ৫: SUPERVISE (human watches)
    → human monitors agent continuously
    → use: high-stakes (financial, medical)
    → real-time intervention

IMPLEMENTATION (LangGraph):

  from langgraph.graph import StateGraph
  
  # Node: agent acts
  def agent_act(state):
    result = agent.execute(state["plan"])
    return {"result": result}
  
  # Node: human approval
  def human_approve(state):
    # Agent pauses here. Human gets 
    # notification with result.
    # Human approves or rejects.
    approval = wait_for_human(state["result"])
    return {"approved": approval}
  
  graph = StateGraph()
  graph.add_node("act", agent_act)
  graph.add_node("approve", human_approve)
  graph.add_node("execute", execute_action)
  
  # Conditional: approved → execute
  #              rejected → back to act
  graph.add_conditional_edges(
    "approve",
    lambda state: "execute" if state["approved"] 
    else "act"
  )

  → LangGraph-এ checkpointing = 
    state save করো, human দেখুক, 
    তারপর resume

WHICH ACTIONS NEED APPROVAL?

  ┌─────────────────┬──────────────────────┐
  │ Action Type     │ Human Approval?      │
  ├─────────────────┼──────────────────────┤
  │ Read/Search     │ ❌ No (read-only)     │
  │ Draft/Write     │ ❌ No (reversible)    │
  │ Send Email/Msg  │ ✅ Yes (irreversible) │
  │ File Delete     │ ✅ Yes (destructive)  │
  │ Money Transfer  │ ✅ Yes (high-stakes)  │
  │ Deploy Code     │ ✅ Yes (production)   │
  │ Database Write  │ ✅ Yes (data change)  │
  │ API Call (paid) │ ⚠️ Maybe (cost)       │
  └─────────────────┴──────────────────────┘

UX PATTERNS:

  Slack/Teams notification:
    "Agent prepared email to X. 
     Subject: Y. Approve? [Yes] [No] [Edit]"
  
  Web dashboard:
    → pending approvals queue
    → agent result preview
    → approve/reject/edit
  
  Email:
    → agent sends draft
    → human replies "approve" or edits

  Async vs Sync:
    Sync: agent pauses, blocks until human
    Async: agent continues other work, 
      human approves later
  
  → LangGraph supports both via checkpoints

TIMEOUT HANDLING:
  Human doesn't respond in N hours?
  → Option A: auto-reject (safe)
  → Option B: escalate (notify manager)
  → Option C: proceed with warning
  → সাধারণত A (safe default)</div>

<div class="dialogue">আমানত — trust, responsibility। কুরআনে আল্লাহ বলেন — "নিশ্চয় আল্লাহ তোমাদের আমানত আদায় করতে বলেন।" (৪:৫৮)। আমানত = বিশ্বাস ও দায়িত্ব। এজেন্টকে আমানত দাও — কিন্তু যাচাই করো। সম্পূর্ণ আস্থা নয়, আংশিক আস্থা। কিছু কাজে মানুষ আবশ্যক। এটাই আমানতের সুরক্ষা।</div>
<div class="dialogue en">"Amanat — trust, responsibility. Allah says — 'Allah commands you to deliver trusts to whom they are due.' (4:58). Amanat = trust and responsibility. Give the agent trust — but verify. Not full trust, partial trust. Some actions require human. This is protecting the amanat."</div>`,
  senior:{
    title:"HITL Design — কোন কাজে কতটা",
    body:`<p><strong>Read-only (search, analyze):</strong> Full auto। No approval।</p><p><strong>Draft creation (email, code):</strong> Notify। Human edits before send।</p><p><strong>Irreversible (send, deploy, delete):</strong> Approve। Agent pauses, human signs off।</p><p><strong>High-stakes (money, legal):</strong> Collaborate। Human + agent together।</p><p><strong>Default:</strong> যখন অনিশ্চিত — approve। যখন নিশ্চিত safe — auto।</p>`
  }
});

// ══ DOOR 8: FRAMEWORKS ══
doors.push({
  num:8, icon:"⚡", color:"#52c41a", name:"কাঠামো কক্ষ",
  subtitle:"The Framework Chamber", tech:"Agent Frameworks Compared",
  spirit:"মিজান — সঠিক টুল নির্বাচন",
  secret:"হাতে কাঠামো বানাতে পারো, কিন্তু প্রোডাকশনে framework দরকার। LangGraph (flexible), CrewAI (teams), AutoGen (conversational), OpenAI Agents SDK (simple)। প্রতিটার শক্তি ও দুর্বলতা। সঠিক কাঠামো বেছে নাও।",
  recall:{
    q:"কাঠামো কক্ষে কেন প্রতিটা কাজের জন্য আলাদা কাঠামো আছে?",
    qen:"Why is there a different structure for each task?",
    a:"কারণ প্রতিটা কাজের কাঠামো আলাদা। LangGraph = flexible workflows। CrewAI = role-based teams। AutoGen = conversations। সঠিক framework = সঠিক কাঠামো। ভুল কাঠামো = কাজ কঠিন।",
    aen:"Because each task's structure differs. LangGraph = flexible workflows. CrewAI = role-based teams. AutoGen = conversations. Right framework = right structure. Wrong = hard work."
  },
  story:`
<p class="scene-setting">অষ্টম কেন্দ্র। কাঠামো কক্ষ। দেয়ালে বিভিন্ন কাঠামোর নীলনকশা — কেউ সরল, কেউ জটিল, কেউ নমনীয়। কাঠামো কারিগর আদনান বললেন — "প্রতিটা কাজের জন্য সঠিক কাঠামো। ছোট ঘরে বড় কাঠামো? অপচয়। বড় কাজে ছোট কাঠামো? ভাঙে। বেছে নাও।"</p>
<p class="scene-setting en">The eighth center. Framework chamber. Various structural blueprints on walls — some simple, some complex, some flexible. Framework craftsman Adnan said — "Right structure for each task. Big structure for small room? Waste. Small structure for big task? Breaks. Choose."</p>

<div class="dialogue">অনুমোদন কক্ষ বলেছিলেন — human approval দাও। কিন্তু আমি বলি — approval দেওয়ার কাঠামো কী? হাতে বানাতে পারো, কিন্তু প্রোডাকশনে framework দরকার। LangGraph, CrewAI, AutoGen — প্রতিটা আলাদা। সঠিক framework বেছে নাও।</div>
<div class="dialogue en">"The approval chamber said — give human approval. But I say — what's the structure for approval? You can build by hand, but production needs a framework. LangGraph, CrewAI, AutoGen — each different. Choose the right framework."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Cost Explosion from Loop:</strong> ReAct loop without termination condition ran 500 iterations — $800 bill. Fix: always cap iterations and token usage.</div></div>


<div class="code-block">Agent Frameworks — 2024-2025 Landscape:

┌──────────────────────────────────────────────┐
│ LANGGRAPH (LangChain)                        │
├──────────────────────────────────────────────┤
│ Model: State machine (graph)                 │
│ Agents = nodes, transitions = edges          │
│                                              │
│ ✅ Most flexible                             │
│ ✅ Conditional logic, loops, branching       │
│ ✅ Built-in human-in-the-loop                │
│ ✅ Checkpointing (pause/resume)              │
│ ✅ Streaming, parallel execution             │
│ ❌ Steeper learning curve                    │
│ ❌ More boilerplate code                     │
│                                              │
│ Best for: Production agents, complex flows   │
│                                             │
│ Code:                                        │
│   from langgraph.prebuilt import              │
│     create_react_agent                        │
│   graph = create_react_agent(                │
│     model, tools)                             │
│   result = graph.invoke(                     │
│     {"messages": [...]})                      │
├──────────────────────────────────────────────┤
│ CREWAI                                       │
├──────────────────────────────────────────────┤
│ Model: Role-based team                        │
│ Agents have roles, goals, backstories         │
│                                              │
│ ✅ Most intuitive (role-playing)             │
│ ✅ Sequential + hierarchical tasks           │
│ ✅ Built-in delegation between agents        │
│ ✅ Easy to understand & explain              │
│ ❌ Less flexible than LangGraph              │
│ ❌ Limited state management                  │
│                                              │
│ Best for: Team-based tasks (research+write)  │
│                                             │
│ Code:                                        │
│   crew = Crew(                               │
│     agents=[researcher, writer],              │
│     tasks=[research, write])                  │
│   result = crew.kickoff()                    │
├──────────────────────────────────────────────┤
│ AUTOGEN (Microsoft)                          │
├──────────────────────────────────────────────┤
│ Model: Conversational agents                 │
│ Agents talk to each other in dialogue        │
│                                              │
│ ✅ Agent-to-agent conversation               │
│ ✅ Code execution built-in                   │
│ ✅ Group chat (multiple agents debate)       │
│ ✅ Strong for code tasks                     │
│ ❌ Conversation can drift                    │
│ ❌ Cost unpredictable (many turns)           │
│                                              │
│ Best for: Code generation, debate, analysis  │
├──────────────────────────────────────────────┤
│ OPENAI AGENTS SDK (formerly Swarm)           │
├──────────────────────────────────────────────┤
│ Model: Lightweight handoffs                  │
│ Agents hand off to other agents              │
│                                              │
│ ✅ Simplest API                              │
│ ✅ Clean agent handoffs                      │
│ ✅ OpenAI ecosystem                          │
│ ✅ GA/stable (2025+)                         │
│ ❌ OpenAI-locked (other providers limited)   │
│                                              │
│ Best for: Simple OpenAI-based agents         │
├──────────────────────────────────────────────┤
│ LLAMAINDEX AGENTS                            │
├──────────────────────────────────────────────┤
│ Model: Query engine + tools                  │
│ Built on LlamaIndex RAG infrastructure       │
│                                              │
│ ✅ Best RAG-agent integration                │
│ ✅ Strong for document-heavy agents          │
│ ✅ Query routing built-in                    │
│ ❌ Less flexible than LangGraph              │
│                                              │
│ Best for: RAG + agent hybrid systems         │
└──────────────────────────────────────────────┘

DECISION MATRIX:

  তোমার কাজ কী?
  ├── সহজ agent (১-৩ tools)?
  │   → OpenAI Agents SDK বা LangGraph basic
  ├── Team-based (research+write+review)?
  │   → CrewAI
  ├── Conversational/code?
  │   → AutoGen
  ├── Production, complex state?
  │   → LangGraph
  ├── RAG-heavy?
  │   → LlamaIndex Agents
  └── Custom everything?
      → LangGraph (most control)

BUILD VS FRAMEWORK:
  Build custom when:
    → খুব সুনির্দিষ্ট requirement
    → framework overhead বেশি
    → learning curve এড়াতে চাও
  
  Use framework when:
    → production (reliability, community)
    → human-in-the-loop (complex)
    → multi-agent (hard to build)
    → checkpointing (hard to build)

  → সাধারণত: framework দিয়ে শুরু,
    দরকার হলে custom-এ যাও

THE 2025 PARADIGM SHIFT — CODE AGENTS:

  আগের agent pattern (2023-2024):
    → ReAct loop: think → tool call → observe → repeat
    → প্রতিটা tool আলাদা function call
    → narrow, single-task agents

  Code-agent pattern (2025+ — dominant paradigm):
    → একটা বড় LLM, tools নয় — code লেখে
    → পুরো environment-এ অ্যাক্সেস: file system,
      terminal, browser, git, language server
    → কোনো predefined tool নয় — যা দরকার তা-ই
      code দিয়ে করে

  Examples (2025-26):
    → Claude Code (Anthropic) — terminal agent
    → Cursor / Windsurf / Zed — code editor agents
    → Aider / Devin — autonomous software engineer
    → OpenAI Codex CLI — terminal code agent

  কেন বড় পরিবর্তন?
    → tool-call agent: শুধু দেওয়া tool ব্যবহার করে
    → code agent: নিজে নতুন tool (code) লেখে
    → flexibility অনেক বেশি — কিন্তু risk-ও

  সতর্কতা:
    → sandbox-এ চালাও (container, VM)
    → human approval for destructive actions
    → cost limit (এক কাজে অনেক token যেতে পারে)
    → audit log — কী কী command চালালো

  কখন code agent vs tool-call agent?
    → well-defined task, limited tools? tool-call agent
    → open-ended software task? code agent
    → research, exploration? code agent
    → production, auditable? tool-call (easier to audit)</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrA8" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
    <marker id="arrA8g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4ade80"/>
    </marker>
    <marker id="arrA8a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Framework নির্বাচন — কাজ অনুযায়ী কাঠামো</text>
  <rect x="20" y="60" width="120" height="50" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="80" y="82" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">LangGraph</text>
  <text x="80" y="98" text-anchor="middle" fill="#94a3b8" font-size="8">state machine</text>
  <rect x="150" y="60" width="120" height="50" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="210" y="82" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">CrewAI</text>
  <text x="210" y="98" text-anchor="middle" fill="#94a3b8" font-size="8">role-based team</text>
  <rect x="280" y="60" width="120" height="50" rx="8" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="340" y="82" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="bold">AutoGen</text>
  <text x="340" y="98" text-anchor="middle" fill="#94a3b8" font-size="8">conversational</text>
  <rect x="410" y="60" width="150" height="50" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="485" y="82" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">OpenAI Agents SDK</text>
  <text x="485" y="98" text-anchor="middle" fill="#94a3b8" font-size="8">lightweight handoff</text>
  <rect x="100" y="150" width="180" height="46" rx="8" fill="#0c0a1d" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="190" y="170" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">সহজ agent, ১-৩ tools</text>
  <text x="190" y="184" text-anchor="middle" fill="#fde68a" font-size="8">→ OpenAI SDK / LangGraph</text>
  <rect x="300" y="150" width="180" height="46" rx="8" fill="#0c0a1d" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="390" y="170" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">production, জটিল state</text>
  <text x="390" y="184" text-anchor="middle" fill="#fde68a" font-size="8">→ LangGraph</text>
  <path d="M 80 110 Q 130 130 190 150" fill="none" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrA8)"/>
  <path d="M 485 110 Q 440 130 390 150" fill="none" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrA8a)"/>
  <text x="290" y="220" text-anchor="middle" fill="#94a3b8" font-size="9">মিজান — সঠিক framework = সঠিক কাঠামো</text>
</svg>
</div>
<div class="svg-caption">চিত্র: চারটি framework — LangGraph (flexible), CrewAI (team), AutoGen (conversational), OpenAI SDK (simple)। কাজের ধরন অনুযায়ী সঠিক কাঠামো বেছে নাও।</div>

<div class="dialogue">মিযান — balance, right choice। কুরআনে আল্লাহ বলেন — "আমরা প্রত্যেক জিনিস সঠিক মাপে সৃষ্টি করেছি।" প্রতিটা কাজের সঠিক কাঠামো। Framework নির্বাচনও মিযান — সঠিক টুল, সঠিক কাজ। বেশি জটিল framework ছোট কাজে = অপচয়। কম framework বড় কাজে = বিপর্যয়।</div>
<div class="dialogue en">"Mizan — balance, right choice. Allah says — 'We created all things in due measure.' Right structure for each task. Framework selection is mizan too — right tool, right job. Over-complex framework for small task = waste. Under-powered framework for big task = disaster."</div>`,
  senior:{
    title:"Framework Start — কোনটা দিয়ে শুরু",
    body:`<p><strong>প্রথম agent:</strong> LangGraph — সবচেয়ে documented, community support, flexible।</p><p><strong>দ্রুত prototype:</strong> CrewAI — সবচেয়ে intuitive, ৫ মিনিটে team বানাও।</p><p><strong>Code agent:</strong> AutoGen — code execution বিল্ট-ইন।</p><p><strong>RAG agent:</strong> LlamaIndex — RAG + agent integration।</p><p><strong>সবসময়:</strong> framework দিয়ে শুরু করো। যখন framework-এর সীমা ধরা দেয়, তখন custom-এ যাও। প্রথমেই custom = সময় নষ্ট।</p>`
  }
});

// ══ DOOR 9: FAILURE MODES ══
doors.push({
  num:9, icon:"🛡️", color:"#ff6b35", name:"পতন কক্ষ",
  subtitle:"The Fall Chamber", tech:"Agent Failure Modes & Safety",
  spirit:"সতর্কতা — পতন এড়ানো",
  secret:"এজেন্ট ভাঙে — লুপে আটকে, ভুল tool ব্যবহার করে, অসীম খরচ করে, hallucinate করে। প্রতিটা failure mode-এর fix আছে। max iterations, cost limit, validation, guardrails। সতর্কতা ছাড়া এজেন্ট = বিপজ্জনক স্বাধীনতা।",
  recall:{
    q:"পতন কক্ষে কেন ইচ্ছা করে এজেন্টকে ব্যর্থ করা হয়?",
    qen:"Why is the agent intentionally failed in the fall chamber?",
    a:"কারণ ভাঙা জানলে ঠিক করা যায়। এজেন্ট লুপে আটকে, অসীম খরচ করে, ভুল tool ব্যবহার করে। প্রতিটা failure mode জানলে fix করা যায়। সতর্কতা = নিরাপত্তা।",
    aen:"Because knowing breakage enables fixing. Agents get stuck in loops, spend infinitely, use wrong tools. Knowing each failure mode enables fixes. Caution = safety."
  },
  story:`
<p class="scene-setting">নবম কেন্দ্র। পতন কক্ষ। কারিগর হাসান একটা এজেন্টকে ইচ্ছা করে ব্যর্থ করছেন — ভুল tool দিচ্ছেন, অসম্ভব কাজ দিচ্ছেন, লুপে ফেলছেন। "কেন?" তুমি চমকে গেলে। "কারণ ভাঙা ছাড়া ঠিক করা শেখা যায় না," তিনি বললেন। "প্রতিটা পতন শেখায় — কোথায় দুর্বলতা। সতর্কতা = নিরাপত্তা।"</p>
<p class="scene-setting en">The ninth center. Fall chamber. Craftsman Hasan intentionally fails an agent — giving wrong tools, impossible tasks, trapping in loops. "Why?" you recoiled. "Because without breaking, fixing can't be learned," he said. "Each fall teaches — where the weakness is. Caution = safety."</p>

<div class="dialogue">কাঠামো কক্ষ বলেছিলেন — framework বেছে নাও। কিন্তু আমি বলি — framework ভালো, কিন্তু এজেন্ট ভাঙে। লুপে আটকে যায়। অসীম টাকা খরচ করে। ভুল tool ব্যবহার করে। এসব failure mode জানতে হয়। না জানলে production-এ বিপদ। সতর্কতা ছাড়া স্বাধীনতা = বিপর্যয়।</div>
<div class="dialogue en">"The framework chamber said — choose a framework. But I say — frameworks are good, but agents break. Get stuck in loops. Spend infinite money. Use wrong tools. Must know these failure modes. Without knowing, production danger. Freedom without caution = disaster."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — State Loss Between Steps:</strong> Agent forgot what it already did — repeated the same API call 20 times. Fix: maintain explicit state/memory between steps.</div></div>


<div class="code-block">Agent Failure Modes — What Goes Wrong:

TOP ৭ WAYS AGENTS FAIL:

১. INFINITE LOOPS (সবচেয়ে সাধারণ)
  Symptom: agent repeats same action forever
  Cause: tool returns error, agent retries, 
    same error, same retry...
  
  Example: 
    search("X") → "no results"
    search("X") → "no results"  
    search("X") → "no results" → ∞
  
  Fix:
    → Max iterations: hard limit (১০-২০)
    → Repetition detection: same action ৩x = stop
    → Error escalation: "try different approach"
    
  Code:
    if action_count > MAX_ITERATIONS:
      return "I couldn't complete this task."

২. COST EXPLOSION 💰
  Symptom: $১০০ bill from one task
  Cause: many LLM calls, long context, 
    multi-agent cascade
  
  Fix:
    → Cost limit per task: $X max
    → Token budget: N tokens max
    → Monitor real-time cost
    → Alert when > threshold

৩. WRONG TOOL SELECTION
  Symptom: agent uses search when it should 
    use calculator
  Cause: poor tool description, ambiguous query
  
  Fix:
    → Better tool descriptions (Door 2)
    → Tool examples in system prompt
    → Fallback: "if tool fails, try another"

৪. HALLUCINATION IN ACTIONS
  Symptom: agent invents non-existent tool, 
    or hallucinates API response
  Cause: LLM confidence without verification
  
  Fix:
    → Tool whitelist: only defined tools
    → Output validation: check tool result
    → "If tool returns error, say so — 
       don't invent result"

৫. CONTEXT POLLUTION
  Symptom: agent context grows huge → 
    attention dilution → bad decisions
  Cause: too many tool results accumulated
  
  Fix:
    → Context window management
    → Summarize old results
    → Keep only last N observations

৬. CASCADING ERRORS
  Symptom: one agent's error → next agent 
    builds on wrong info → all wrong
  Cause: no validation between agents
  
  Fix:
    → Validation gate: check each agent output
    → "Is this result reasonable?" LLM check
    → Human approval for critical steps

৭. UNAUTHORIZED ACTIONS
  Symptom: agent sends email without approval, 
    deletes file, runs dangerous code
  Cause: too much autonomy, no guardrails
  
  Fix:
    → Action whitelist: what's allowed
    → Human approval for destructive actions
    → Sandboxed execution: isolated environment
    → Rate limiting: max actions per minute

SAFETY LAYERS:

  ┌─────────────────────────────────────┐
  │ Layer ১: INPUT GUARDRAILS           │
  │ → prompt injection check            │
  │ → harmful intent detection          │
  │ → rate limiting                     │
  ├─────────────────────────────────────┤
  │ Layer ২: ACTION GUARDRAILS          │
  │ → tool whitelist                    │
  │ → argument validation               │
  │ → action type check (read/write)    │
  ├─────────────────────────────────────┤
  │ Layer ৩: EXECUTION GUARDRAILS       │
  │ → sandboxed execution               │
  │ → cost/time limits                  │
  │ → max iterations                    │
  ├─────────────────────────────────────┤
  │ Layer ৪: OUTPUT GUARDRAILS          │
  │ → result validation                 │
  │ → hallucination check               │
  │ → harmful content filter            │
  ├─────────────────────────────────────┤
  │ Layer ৫: HUMAN OVERSIGHT            │
  │ → approval for critical actions     │
  │ → monitoring dashboard              │
  │ → kill switch                       │
  └─────────────────────────────────────┘

PRODUCTION CHECKLIST:
  ☐ Max iterations set (১০-২০)
  ☐ Cost limit per task ($X)
  ☐ Tool whitelist enforced
  ☐ Human approval for irreversible actions
  ☐ Sandboxed code execution
  ☐ Output validation
  ☐ Monitoring + alerting
  ☐ Kill switch (stop all agents)
  ☐ Rate limiting
  ☐ Error logging + replay</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrA9" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
    <marker id="arrA9r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#ff6b35"/>
    </marker>
    <marker id="arrA9g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4ade80"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="26" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Failure Mode ও সতর্কতা স্তর</text>
  <rect x="20" y="55" width="125" height="40" rx="8" fill="#3b0764" stroke="#ff6b35" stroke-width="2"/>
  <text x="82" y="72" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="bold">১. Infinite Loop</text>
  <text x="82" y="86" text-anchor="middle" fill="#94a3b8" font-size="7">→ max iterations</text>
  <rect x="155" y="55" width="125" height="40" rx="8" fill="#3b0764" stroke="#ff6b35" stroke-width="2"/>
  <text x="217" y="72" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="bold">২. Cost Explosion</text>
  <text x="217" y="86" text-anchor="middle" fill="#94a3b8" font-size="7">→ cost limit</text>
  <rect x="290" y="55" width="125" height="40" rx="8" fill="#3b0764" stroke="#ff6b35" stroke-width="2"/>
  <text x="352" y="72" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="bold">৩. Wrong Tool</text>
  <text x="352" y="86" text-anchor="middle" fill="#94a3b8" font-size="7">→ clear description</text>
  <rect x="425" y="55" width="135" height="40" rx="8" fill="#3b0764" stroke="#ff6b35" stroke-width="2"/>
  <text x="492" y="72" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="bold">৪. Hallucination</text>
  <text x="492" y="86" text-anchor="middle" fill="#94a3b8" font-size="7">→ output validation</text>
  <rect x="20" y="105" width="125" height="40" rx="8" fill="#3b0764" stroke="#ff6b35" stroke-width="2"/>
  <text x="82" y="122" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="bold">৫. Context Pollution</text>
  <text x="82" y="136" text-anchor="middle" fill="#94a3b8" font-size="7">→ summarize old</text>
  <rect x="155" y="105" width="125" height="40" rx="8" fill="#3b0764" stroke="#ff6b35" stroke-width="2"/>
  <text x="217" y="122" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="bold">৬. Cascade Error</text>
  <text x="217" y="136" text-anchor="middle" fill="#94a3b8" font-size="7">→ validation gate</text>
  <rect x="290" y="105" width="125" height="40" rx="8" fill="#3b0764" stroke="#ff6b35" stroke-width="2"/>
  <text x="352" y="122" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="bold">৭. Unauthorized</text>
  <text x="352" y="136" text-anchor="middle" fill="#94a3b8" font-size="7">→ action whitelist</text>
  <rect x="425" y="105" width="135" height="40" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="492" y="122" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">✓ ৫ Safety Layers</text>
  <text x="492" y="136" text-anchor="middle" fill="#86efac" font-size="7">input → output</text>
  <line x1="352" y1="145" x2="425" y2="125" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrA9g)"/>
  <rect x="60" y="170" width="460" height="44" rx="8" fill="#0c0a1d" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="290" y="188" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">সতর্কতা = নিরাপত্তা — Freedom without caution = disaster</text>
  <text x="290" y="204" text-anchor="middle" fill="#94a3b8" font-size="8">max_iter · cost_limit · tool_whitelist · sandbox · kill_switch</text>
</svg>
</div>
<div class="svg-caption">চিত্র: সাতটি failure mode (লাল) এবং প্রতিটির fix (সবুজ ও ধূসর)। পাঁচ স্তরের guardrail ছাড়া স্বাধীন এজেন্ট = বিপজ্জনক।</div>

<div class="dialogue">সতর্কতা — caution, vigilance। কুরআনে আল্লাহ বলেন — "তোমরা প্রস্তুত থাকো।" (৮:৬০)। প্রস্তুতি = সতর্কতা। এজেন্ট শক্তিশালী, কিন্তু সতর্কতা ছাড়া বিপজ্জনক। প্রতিটা failure mode একটি শিক্ষা। যে সতর্ক, সে নিরাপদ। যে অসতর্ক, সে পতন। স্বাধীনতার সাথে দায়িত্ব আসে।</div>
<div class="dialogue en">"Satarkota — caution, vigilance. Allah says — 'Be prepared.' (8:60). Preparation = caution. Agents are powerful, but without caution, dangerous. Each failure mode is a lesson. One who is cautious, is safe. One who is careless, falls. Freedom comes with responsibility."</div>`,
  senior:{
    title:"Production Safety Checklist",
    body:`<p>☐ Max iterations: 10-20 hard limit</p><p>☐ Cost limit: $X per task, alert if exceeded</p><p>☐ Tool whitelist: only defined tools</p><p>☐ Human approval: email, delete, money, deploy</p><p>☐ Sandbox: code runs in isolated container</p><p>☐ Kill switch: one button stops all agents</p><p>☐ Monitoring: real-time dashboard of actions</p><p>☐ Rate limit: max N actions/minute</p><p>☐ Error log: every failure recorded for debugging</p><p>☐ Eval set: 50 test tasks run daily for regression</p>`
  }
});

// ══ DOOR 10: PRODUCTION ARCHITECTURE ══
doors.push({
  num:10, icon:"🌌", color:"#fde047", name:"সমন্বয় কক্ষ",
  subtitle:"The Synthesis Chamber", tech:"Complete Agent Architecture",
  spirit:"সির — সম্পূর্ণ স্বাধীনতার সারমর্ম",
  secret:"নয়টি কেন্দ্র পেরিয়েছ। What is an agent, tool use, ReAct, planning, memory, multi-agent, human-in-the-loop, frameworks, failure modes। সব একসাথে = production agent architecture। এটাই স্বাধীন বুদ্ধি — LLM থেকে স্বাধীন কর্মী।",
  recall:{
    q:"সমন্বয় কক্ষে কেন সব একসাথে দেখানো হয়?",
    qen:"Why is everything shown together in the synthesis chamber?",
    a:"কারণ বিচ্ছিন্ন জ্ঞান = অসম্পূর্ণ। নয়টি কেন্দ্র — tool use থেকে production — সব একসাথে একটা সম্পূর্ণ architecture। একটাও বাদ দিলে এজেন্ট দুর্বল। সির — সম্পূর্ণ বোঝার সারমর্ম।",
    aen:"Because isolated knowledge = incomplete. Nine centers — tool use to production — together form one complete architecture. Missing one, agent weak. Sir — the essence of complete understanding."
  },
  story:`
<p class="scene-setting">দশম কেন্দ্র। শেষ কেন্দ্র। স্থপতি ইদ্রিস দাঁড়িয়ে আছেন — সামনে নয়টি মডেল, একে একে সাজানো। প্রতিটা কেন্দ্রের প্রতিনিধি। "তুমি নয় কেন্দ্র পেরিয়েছ," তিনি বললেন। "এখন দেখো — সব একসাথে। একটা সম্পূর্ণ এজেন্ট। কথা থেকে কাজ, কাজ থেকে স্বাধীনতা, স্বাধীনতা থেকে দায়িত্ব।"</p>
<p class="scene-setting en">The tenth center. The last. Architect Idris stands — nine models before him, arranged in sequence. Each center's representative. "You've passed nine centers," he said. "Now see — all together. One complete agent. From talk to action, action to autonomy, autonomy to responsibility."</p>

<div class="dialogue">নয়টি কেন্দ্র পেরিয়েছ। জেনেসিস বলেছিলেন, এজেন্ট = কথা + কাজ। সরঞ্জাম বলেছিলেন, tool use। চক্র বলেছিলেন, ReAct লুপ। পরিকল্পনা বলেছিলেন, plan-and-execute। স্মৃতি বলেছিলেন, memory systems। পরিষদ বলেছিলেন, multi-agent। অনুমোদন বলেছিলেন, human-in-the-loop। কাঠামো বলেছিলেন, frameworks। পতন বলেছিলেন, failure modes। এখন — সব একসাথে।</div>
<div class="dialogue en">"You've passed nine centers. Genesis said, agent = talk + act. Tool said, tool use. Loop said, ReAct. Planning said, plan-and-execute. Memory said, memory systems. Council said, multi-agent. Approval said, human-in-the-loop. Framework said, frameworks. Fall said, failure modes. Now — all together."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Unvalidated User Input:</strong> Agent executed user-provided code directly — security nightmare. Fix: never eval() user input, use sandboxed execution.</div></div>


<div class="code-block">Complete Production Agent Architecture:

USER GOAL: "Research RAG papers, write summary, 
           email to team"

┌──────────────────────────────────────────────┐
│ ১. INPUT PROCESSING                          │
│ → Input guardrails: injection check          │
│ → Rate limit: max ১/minute                   │
│ → Cost budget: $২ max                        │
└──────────────────┬───────────────────────────┘
                   ↓
┌──────────────────────────────────────────────┐
│ ২. PLANNING (Door 4)                         │
│ LLM creates plan:                            │
│   1. Search RAG papers (arxiv)               │
│   2. Read top ৩ papers                       │
│   3. Extract key findings                    │
│   4. Write summary                           │
│   5. Email to team@company.com               │
│ → User confirms plan? (optional)             │
└──────────────────┬───────────────────────────┘
                   ↓
┌──────────────────────────────────────────────┐
│ ৩. EXECUTION LOOP (Door 3: ReAct)            │
│                                              │
│ Step 1: search_arxiv("RAG 2024")             │
│   → ৫ papers found                           │
│   → Memory: store results                    │
│                                              │
│ Step 2: read_paper(paper_1)                  │
│   → extract findings                         │
│   → Memory: accumulate                       │
│   → repeat for papers ২-৩                    │
│                                              │
│ Step 3: synthesize findings                  │
│   → LLM writes summary                       │
│   → Memory: store draft                      │
│                                              │
│ Step 4: ⚠️ IRREVERSIBLE ACTION               │
│   → send_email()                             │
│   → HUMAN APPROVAL REQUIRED (Door 7)         │
│   → Pause → notify → wait for approval       │
│   → Approved? → send                         │
│   → Rejected? → revise draft                 │
└──────────────────┬───────────────────────────┘
                   ↓
┌──────────────────────────────────────────────┐
│ ৪. OUTPUT PROCESSING                         │
│ → Output guardrails: harmful check           │
│ → Result validation: email sent?             │
│ → Log: full trace for debugging              │
│ → Memory update: episodic (lessons learned)  │
└──────────────────┬───────────────────────────┘
                   ↓
┌──────────────────────────────────────────────┐
│ ৫. RESPONSE TO USER                          │
│ "Done! Emailed summary of ৩ RAG papers       │
│  to team@company.com. Key findings:          │
│  ১. GraphRAG outperforms...                  │
│  ২. Chunking strategy matters...             │
│  ৩. Reranking adds ২০%..."                   │
└──────────────────────────────────────────────┘

TECH STACK:
  Framework: LangGraph
  LLM: GPT-4o (planning) + GPT-4o-mini (tools)
  Tools: search, read_pdf, send_email
  Memory: Qdrant (long-term) + state (working)
  Human-in-the-loop: Slack approval
  Monitoring: LangSmith tracing
  Guardrails: Guardrails AI
  Sandbox: Docker container for code

LATENCY: ৩০s-৫min (depending on steps)
COST: ~$০.১০-০.৫০ per task

THE AGENT MATURITY MODEL:
  Level ১: Single-tool assistant → চ্যাটবট++
  Level ২: Multi-tool ReAct agent → basic agent
  Level ৩: Planning agent → smart worker
  Level ৪: Multi-agent team → expert team
  Level ৫: Self-improving agent → true autonomy
  
  → ২০২৫: Level ৩-৪ সাধারণ
  → ২০২৬+: Level ৫ আসছে

THE FUTURE:
  • Computer use (Claude): agent controls 
    browser, clicks, types
  • Devin: autonomous software engineer
  • Agent OS: operating system for agents
  • Agent-to-agent protocols: MCP, A2A
  → Agents = next platform shift</div>

<div class="verse">"তিনি শিখিয়েছেন কলমের মাধ্যমে। শিখিয়েছেন মানুষকে যা সে জানত না।"<br>— কুরআন ৯৬:৪-৫<br><br>এজেন্ট হলো কলমের নতুন রূপ — শুধু লেখে না, কাজ করে। যে এজেন্ট বানায়, সে কর্মী বানায়। যে কর্মী বানায়, সে শক্তি তৈরি করে। কিন্তু শক্তির সাথে দায়িত্ব। স্বাধীনতার সাথে নিরাপত্তা। এটাই স্বাধীন বুদ্ধির শিল্প।</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrA10" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#7dd3fc"/>
    </marker>
    <marker id="arrA10g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4ade80"/>
    </marker>
    <marker id="arrA10a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="580" height="250" fill="#0f172a" rx="10"/>
  <text x="290" y="26" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="bold">Production Agent — ৫টি উপাদানের সমন্বয়</text>
  <circle cx="290" cy="125" r="42" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="118" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">BRAIN</text>
  <text x="290" y="133" text-anchor="middle" fill="#7dd3fc" font-size="8">LLM</text>
  <rect x="40" y="80" width="110" height="46" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="95" y="100" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">TOOLS</text>
  <text x="95" y="116" text-anchor="middle" fill="#86efac" font-size="8">search · code</text>
  <rect x="40" y="140" width="110" height="46" rx="8" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
  <text x="95" y="160" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="bold">MEMORY</text>
  <text x="95" y="176" text-anchor="middle" fill="#d8b4fe" font-size="8">state · history</text>
  <rect x="430" y="80" width="110" height="46" rx="8" fill="#7c2d12" stroke="#fbbf24" stroke-width="2"/>
  <text x="485" y="100" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">LOOP</text>
  <text x="485" y="116" text-anchor="middle" fill="#fde68a" font-size="8">ReAct cycle</text>
  <rect x="430" y="140" width="110" height="46" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="485" y="160" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">SAFETY</text>
  <text x="485" y="176" text-anchor="middle" fill="#86efac" font-size="8">guardrails</text>
  <line x1="150" y1="103" x2="250" y2="118" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrA10g)"/>
  <line x1="150" y1="163" x2="250" y2="135" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrA10)"/>
  <line x1="330" y1="118" x2="430" y2="103" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrA10a)"/>
  <line x1="330" y1="135" x2="430" y2="163" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrA10g)"/>
  <text x="290" y="210" text-anchor="middle" fill="#94a3b8" font-size="9">কথা থেকে কাজ → কাজ থেকে স্বাধীনতা → স্বাধীনতা থেকে দায়িত্ব</text>
</svg>
</div>
<div class="svg-caption">চিত্র: একটি সম্পূর্ণ production agent — Brain (LLM) কেন্দ্রে, চারপাশে Tools, Memory, Loop, এবং Safety। সব মিলে স্বাধীন কর্মী।</div>

<div class="secret-box"><div class="label">দশম কেন্দ্র — সমন্বয়</div><div class="text">🌌 Agent = Brain + Tools + Memory + Loop + Safety।<br><small>LLM থেকে স্বাধীন কর্মী। কথা থেকে কাজ। কাজ থেকে স্বাধীনতা। স্বাধীনতা থেকে দায়িত্ব।</small></div></div>`
});
