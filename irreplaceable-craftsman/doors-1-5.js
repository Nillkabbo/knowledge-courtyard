// ════════════════════════════════════════
// অবিচ্ছেয্য কারিগর — DOORS 1-5
// Irreplaceable Engineer: Value → Systems Thinking
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: THE OBSOLESCENCE TRAP ══
doors.push({
  num:1, icon:"🍂", color:"#f87171", name:"পচনশীল উপাদান",
  subtitle:"The Obsolescence Trap", tech:"Why Value Decreases Over Time",
  spirit:"ফানা — অস্থায়িত্ব, ক্ষয়",
  secret:"Framework শেখো → ৩ বছরে পুরনো। Principle শেখো → প্রতি বছর বেশি মূল্যবান। যে পচনশীল উপাদানে মূল্য দেয়, সে ফানার শিকার। যে চিরস্থায়ীতে মূল্য দেয়, সে বাকা। ফানা — যা শেষ হয়। বাকা — যা থাকে।",
  recall:{
    q:"প্রথম দরজায় কারিগর কেন পচে গেল?",
    qen:"Why did the craftsman rot away?",
    a:"কারণ সে পচনশীল উপাদানে মূল্য দিয়েছিল — framework, tools। এগুলো বদলায়। Principle বদলায় না। ফানা = যা শেষ হয়। যে ফানায় মূল্য দেয়, সে পচে যায়।",
    aen:"Because they invested in perishable material — frameworks, tools. These change. Principles don't. Fana = what ends. One who invests in fana, perishes."
  },
  story:`<p class="scene-setting">প্রথম দরজা। একটা পরিত্যক্ত কারখানা। ধুলো, মাকড়সার জাল, ভাঙা মনিটর। দেয়ালে পোস্টার: jQuery, Angular.js, Flash, Backbone — সব এক সময়ের সবচেয়ে চাহিদার প্রযুক্তি। এখন কেউ মনে রাখে না। একটা বৃদ্ধ কারিগর জহির বসে আছেন, হাতে একটা পুরোনো বই: Mastering jQuery UI। তিনি ১০ বছর শিখেছেন, নিখুঁত হয়েছেন। এখন কেউ তাকে চায় না।</p>
<p class="scene-setting en">The first door. An abandoned workshop. Dust, cobwebs, broken monitors. Posters on walls: jQuery, Angular.js, Flash, Backbone — once the most in-demand technologies. Now forgotten. An old craftsman Zahir sits, holding a book: Mastering jQuery UI. He spent 10 years learning, perfecting. Now nobody wants him.</p>

<div class="dialogue">তুমি একটা প্রশ্ন করো — কেন এমন হলো? জহির চোখ তুলে তাকালেন। তুমি ভাবলে তিনি তার চাকরি হারিয়েছেন কারণ তিনি খারাপ ছিলেন। কিন্তু তিনি ছিলেন সেরা। jQuery-তে কেউ তাকে ছাড়তে পারত না। সমস্যা দক্ষতায় নয় — উপাদানে। তিনি এমন কিছুতে দশ বছর মূল্য দিয়েছেন যা পচনশীল। যা অবশ্যই শেষ হবে। এটাই অবচয় ফাঁদ — obsolescence trap।</div>
<div class="dialogue en">You ask — why did this happen? Zahir looked up. You think he lost his job because he was bad. But he was the best. Nobody could beat him in jQuery. The problem wasn't skill — it was material. He invested ten years in something perishable. Something that was bound to end. This is the obsolescence trap.</div>

<div class="code-block">THE OBSOLESCENCE TRAP — অবচয় ফাঁদ:

  PERISHABLE KNOWLEDGE (decreases in value):
    → Specific frameworks (jQuery, Angular, Flash)
    → Specific tools (IDE configs, build tools)
    → Specific APIs (versioned, deprecated)
    → Syntax memorization
    → Platform-specific tricks
    
    Value curve: HIGH at start → ZERO in ৩-৫ years
    জহিরের গল্প: ১০ বছর mastery → ০ value

  PERMANENT KNOWLEDGE (increases in value):
    → First principles (how computers work)
    → Systems thinking (cause-effect chains)
    → Problem decomposition (breaking complexity)
    → Communication (explaining clearly)
    → Pattern recognition (transferable insights)
    → Business understanding (why code matters)
    → Curiosity + learning ability (meta-skill)
    
    Value curve: LOW at start → COMPOUNDS over decades
    The senior who learns new tools in days = permanent foundation

  THE CURVE:
  
    Value
      ↑
      │         ╱ ╲ ← Permanent knowledge (compounds)
      │       ╱   ╲
      │     ╱       ╲
      │   ╱           ╲
      │ ╱               ╲
      │─────────────────────→ (old age, wisdom)
      │ ╲                   ← Perishable knowledge (decays)
      │   ╲
      │     ╲
      │       ╲
      │         ╲ ← Zero value (obsolete)
      └─────────────────────→ Time

  THE TEST (ask yourself):
    → Will this skill matter in ১০ years?
    → If the tool disappeared, what remains?
    → Am I learning the TOOL or the PRINCIPLE?
    → Could an AI do this in ২ years?

  AI ACCELERATES OBSOLESCENCE:
    → Coders who only write boilerplate → replaceable
    → Coders who understand WHY → irreplaceable
    → ২০২৬ reality: AI agents (Claude Code, Cursor, Devin)
      এখন নিজেরাই decide করতে পারে কী কোড লিখবে, কোথায়,
      কোন abstraction ব্যবহার করবে। "typing vs deciding"
      dichotomy আর কাজ করে না।
    → নতুন প্রশ্ন: "যখন AI execute করতে পারে, তখন তুমি 
      কী করো যেটা AI পারে না?"
    → AI পারে না: কোন সমস্যা আদৌ সমাধান দরকার, কোন 
      trade-off কোম্পানির জন্য গ্রহণযোগ্য, কে দায়ী হবে 
      যদি ভুল হয়, এবং কখন "না" বলতে হবে।
    → If your job is executing code → AI replaces you
    → If your job is judging what should be built, why,
      and at what cost → AI amplifies you</div>

<div class="dialogue">ফানা — impermanence, annihilation, that which passes away। সুফি ঐতিহ্যে ফানা হলো সেই অবস্থা যেখানে অহংকার, দক্ষতা, পরিচয় — সব ক্ষয় হয়। জহিরের jQuery দক্ষতা ফানার শিকার হয়েছে। কিন্তু ফানার বিপরীত হলো বাকা — permanence, eternity, that which remains। যে কারিগর নিজের দক্ষতাকে ফানা থেকে বাকায় স্থানান্তর করে, সে অবিচ্ছেয্য হয়। ফানা থেকে বাকা — এটাই এই বইয়ের যাত্রা।</div>
<div class="dialogue en">"Fana — impermanence, annihilation, that which passes away. In Sufi tradition, fana is the state where ego, skill, identity — all dissolve. Zahir's jQuery mastery fell victim to fana. But the opposite of fana is baqa — permanence, eternity, that which remains. The craftsman who transfers their investment from fana to baqa becomes irreplaceable. From fana to baqa — this is this book's journey."</div>`,
  senior:{
    title:"The Perishability Audit",
    body:`<p><strong>Right now, list your skills.</strong> Mark each as P (Perishable) or PE (Permanent):</p><p><strong>Perishable:</strong> Specific framework, specific API, syntax memorization, platform tricks, config knowledge</p><p><strong>Permanent:</strong> First principles, systems thinking, problem decomposition, communication, pattern recognition, curiosity, business understanding</p><p><strong>Rule:</strong> Aim for 70% permanent, 30% perishable. Most juniors are 90% perishable. That's why they're replaceable.</p><p><strong>Ask:</strong> If your main tool vanished tomorrow, what would remain? If the answer is "nothing" — you're in the obsolescence trap.</p>`
  }
});

// ══ DOOR 2: FIRST PRINCIPLES THINKING ══
doors.push({
  num:2, icon:"⚙️", color:"#a3e635", name:"মূল নীতি",
  subtitle:"First Principles Thinking", tech:"Reasoning from Fundamentals",
  spirit:"আকল — যুক্তি, বুদ্ধি, মৌলিক চিন্তা",
  secret:"প্রতিটা সমস্যাকে ভেঙে যাওয়া পর্যন্ত প্রশ্ন করো — যতক্ষণ না সবচেয়ে মৌলিক সত্যে পৌঁছও। তারপর সেখান থেকে উপরে উঠো। এটাই first principles। যে analogy দিয়ে চিন্তা করে, সে অন্ধ। যে মূল থেকে চিন্তা করে, সে আলো। আকল — মৌলিক চিন্তার নূর।",
  recall:{
    q:"দ্বিতীয় দরজায় কারিগর কেন ভাঙা যন্ত্র থেকে মূল খুঁজলেন?",
    qen:"Why did the craftsman find the root from the broken machine?",
    a:"কারণ প্রতিটা সমস্যাকে ভেঙে যাওয়া পর্যন্ত প্রশ্ন করো। সবচেয়ে মৌলিক সত্যে পৌঁছাও। তারপর সেখান থেকে উপরে উঠো। এটাই first principles। আকল — মৌলিক চিন্তা।",
    aen:"Because break every problem down until you reach the most fundamental truth. Then build up from there. This is first principles. Aql — fundamental reasoning."
  },
  story:`<p class="scene-setting">দ্বিতীয় দরজা। একটা ভাঙা যন্ত্র। কারিগর ইব্রাহিম চোখ বন্ধ করে যন্ত্রের প্রতিটা অংশ স্পর্শ করছেন। গিয়ার, চেইন, পাম্প, ভাল্ব। তুমি ভাবলে তিনি যন্ত্র ঠিক করছেন। কিন্তু তিনি একটাও টুল ধরেননি। তিনি শুধু প্রশ্ন করছেন — এই অংশটা কেন আছে? এর উদ্দেশ্য কী? কী ছাড়া এটা কাজ করবে না?</p>
<p class="scene-setting en">The second door. A broken machine. Craftsman Ibrahim touches each part with eyes closed. Gears, chains, pump, valve. You think he's fixing it. But he hasn't picked up a tool. He's only asking — why does this part exist? What's its purpose? Without what, it won't work?</p>

<div class="dialogue">তুমি জিজ্ঞেস করো — ভাঙা যন্ত্র ঠিক করছেন না কেন? ইব্রাহিম চোখ খুললেন। যন্ত্র ভাঙা, কিন্তু সমস্যা যন্ত্রে নয়। সমস্যা চিন্তায়। যিনি যন্ত্র বানিয়েছেন তিনি প্রতিটা অংশ একটা উদ্দেশ্য থেকে বানিয়েছেন। সেই উদ্দেশ্য না বুঝলে ঠিক করা অসম্ভব। প্রতিটা সমস্যাকে ভেঙে যাওয়া পর্যন্ত প্রশ্ন করো — এটাই first principles।</div>
<div class="dialogue en">"You ask — why aren't you fixing the broken machine? Ibrahim opened his eyes. The machine is broken, but the problem isn't the machine. It's the thinking. The builder made each part for a purpose. Without understanding that purpose, fixing is impossible. Break every problem down to its roots — this is first principles."</div>

<div class="code-block">FIRST PRINCIPLES THINKING — মূল নীতি চিন্তা:

THE TWO MODES OF THINKING:

  ┌──────────────────┬────────────────────────────┐
  │ ANALOGY THINKING │ FIRST PRINCIPLES THINKING │
  ├──────────────────┼────────────────────────────┤
  │ আগে কীভাবে হয়েছে │ কেন এটা হতে হবে?          │
  │ How was it done  │ Why must it be this way?   │
  │ before?          │                            │
  ├──────────────────┼────────────────────────────┤
  │ Copy + modify    │ Break to fundamentals,     │
  │                  │ rebuild from scratch        │
  ├──────────────────┼────────────────────────────┤
  │ Incremental      │ Revolutionary              │
  │ (৫% better)      │ (১০x better)               │
  ├──────────────────┼────────────────────────────┤
  │ Safe, expected   │ Risky, unexpected           │
  ├──────────────────┼────────────────────────────┤
  │ Junior default   │ Senior default              │
  └──────────────────┴────────────────────────────┘

THE METHOD (Elon Musk's rocket example):
  
  Problem: "Batteries cost $৬০০/kWh"
  
  Analogy thinking:
    → "Everybody says so" → accept → try to negotiate ৫% discount
  
  First principles thinking:
    → What are batteries made of? Cobalt, nickel, aluminum, carbon
    → What's the market value of these materials? ~$৮০/kWh
    → Why $৬০০? Manufacturing, supply chain, profit margins
    → Can we build differently? YES → Tesla builds at $১০০/kWh
  
  → ৬x cost reduction by thinking from fundamentals

ENGINEERING EXAMPLES:

  Junior (analogy): "I'll use React because everybody uses React"
  Senior (first principles):
    → What problem am I solving? User interaction.
    → What's the minimum needed? DOM manipulation, state.
    → Is React the right tool? Yes, BECAUSE [specific reason]
    → Could a simpler tool work? Maybe. Let me check.
  
  Junior: "Microservices because Netflix uses them"
  Senior:
    → What problem? Scale, team independence
    → Do we have that problem? No (৩-person team)
    → Then monolith is better for us
  
  Junior: "Add Redis for caching because it's best practice"
  Senior:
    → What's slow? Database queries
    → Why? Missing indexes → add indexes first
    → Still slow? NOW consider caching

THE ৫ WHYs TECHNIQUE (Sakichi Toyoda):
  
  Problem: "The website is slow"
  ১. Why? → Database takes ৩s per query
  ২. Why? → No indexes on frequently queried columns
  ৩. Why? → Nobody analyzed query patterns
  ৪. Why? → No monitoring to identify slow queries
  ৫. Why? → No performance culture in the team
  
  → Root cause: culture, not database
  → Fix: monitoring + performance reviews, not just indexes

SIGNS YOU'RE USING FIRST PRINCIPLES:
  ✅ You can explain WHY, not just HOW
  ✅ You question assumptions others accept
  ✅ You see patterns across different domains
  ✅ You can build something new without a tutorial
  ✅ You simplify complex systems

SIGNS YOU'RE STUCK IN ANALOGY:
  ❌ You say "best practice" without explaining why
  ❌ You copy Stack Overflow without understanding
  ❌ You panic when the pattern doesn't match
  ❌ You can't work without a framework
  ❌ You defend tools emotionally, not logically</div>

<div class="dialogue">আকল — intellect, reason, the faculty of understanding fundamental truths। কুরআনে আল্লাহ বলেন — "তারা কি চিন্তা করে না? তাদের মধ্যে আকল নেই?" আকল হলো অন্ধ অনুকরণের বিপরীত। যে আকল ব্যবহার করে, সে প্রশ্ন করে। যে অনুকরণ করে, সে অন্ধ। First principles thinking-ও আকল — প্রতিটা সমস্যাকে মৌলিক সত্য পর্যন্ত ভাঙা। যে আকল দিয়ে চিন্তা করে, সে মূল থেকে উপরে ওঠে। যে অন্ধভাবে অনুকরণ করে, সে কখনো মূল দেখে না।</div>
<div class="dialogue en">"Aql — intellect, reason, the faculty of understanding fundamental truths. Allah says — 'Do they not reflect? Have they no intellect?' Aql is the opposite of blind imitation. One who uses aql, questions. One who imitates, is blind. First principles thinking too is aql — breaking every problem to its fundamental truth. One who thinks with aql, builds up from the root. One who blindly imitates, never sees the root."</div>`,
  senior:{
    title:"First Principles — Daily Practice",
    body:`<p><strong>The 3-question test for every decision:</strong></p><p>১. WHY must this be done this way? (challenge the assumption)</p><p>২. What is this ACTUALLY made of? (break to fundamentals)</p><p>৩. Could I build this from scratch? (test your understanding)</p><p><strong>Daily exercise:</strong> Pick one thing you "just know" and ask why 5 times. You'll discover most of your knowledge is inherited analogy, not earned understanding.</p><p><strong>The senior's advantage:</strong> They don't know more tools — they understand more fundamentals. Give a senior a new tool and they master it in days, because they understand what the tool DOES at a fundamental level.</p>`
  }
});

// ══ DOOR 3: SYSTEMS THINKING ══
doors.push({
  num:3, icon:"🌊", color:"#22d3ee", name:"তরঙ্গের অধিকারী",
  subtitle:"Systems Thinking", tech:"Seeing Cause-Effect Chains",
  spirit:"কদর — পরিমাপ, নিয়তি, সংযোগ",
  secret:"একটা ফিক্স আরেকটা বাগ বানায়। একটা ফিচার আরেকটা জটিলতা। সিস্টেম চিন্তা না করলে প্রতিটা সমাধান নতুন সমস্যা। কারিগর পার্ট দেখে, স্থপতি সিস্টেম দেখে। কদর — প্রতিটা কাজের সংযোগ দেখা। যে সংযোগ দেখে, সে ভবিষ্যৎ দেখে।",
  recall:{
    q:"তৃতীয় দরজায় ঢেউ কেন সংযুক্ত?",
    qen:"Why are the waves connected?",
    a:"কারণ একটা ফিক্স আরেকটা বাগ বানায়। সিস্টেম চিন্তা ছাড়া প্রতিটা সমাধান নতুন সমস্যা। কারিগর পার্ট দেখে, স্থপতি সিস্টেম দেখে। কদর — প্রতিটা কাজের সংযোগ।",
    aen:"Because one fix creates another bug. Without systems thinking, every solution is a new problem. A craftsman sees parts, an architect sees systems. Qadar — seeing connections."
  },
  story:`<p class="scene-setting">তৃতীয় দরজা। একটা হ্রদ। কারিগর খাদিজা পাথর ফেলছেন — ঢেউ তৈরি হয়। ঢেউ ছড়ায়, অন্য পাড়ে আছড়ে পড়ে, ফিরে আসে। তুমি ভাবলে এটা শুধু পাথর ও ঢেউ। কিন্তু খাদিজা দেখছেন — পাথর → ঢেউ → প্রতিফলন → হ্রদের তলায় পলি সরে যায় → মাছের ডিম নষ্ট → মাছ কমে → জেলে ক্ষতিগ্রস্ত। একটা পাথর = একটা জীবন বদল।</p>
<p class="scene-setting en">The third door. A lake. Craftswoman Khadija throws a stone — ripples form. They spread, hit the far shore, return. You think it's just stone and ripple. But Khadija sees — stone → ripple → reflection → sediment shifts → fish eggs destroyed → fish decline → fishermen suffer. One stone = one life changed.</p>

<div class="dialogue">First principles বলেছিলেন — মূল খুঁজো। কিন্তু আমি বলি — মূল খুঁজলেও সংযোগ না দেখলে অর্ধেক। প্রতিটা সিদ্ধান্ত একটা পাথর। সিস্টেমে ঢেউ তৈরি করে। এই ঢেউ কোথায় যাবে? কাকে নাড়িয়ে দেবে? কোথায় ফিরে আসবে? সিস্টেম চিন্তা — প্রতিটা সিদ্ধান্তের ঢেউ দেখা।</div>
<div class="dialogue en">"First principles said — find the root. But I say — even finding the root is half without seeing connections. Every decision is a stone. It creates ripples in the system. Where will these ripples go? Who will they disturb? Where will they return? Systems thinking — seeing the ripples of every decision."</div>

<div class="code-block">SYSTEMS THINKING — সিস্টেম চিন্তা:

THE CORE DIFFERENCE:

  ┌──────────────────────┬────────────────────────────┐
  │ LINEAR THINKING      │ SYSTEMS THINKING           │
  │ (Junior)             │ (Senior)                   │
  ├──────────────────────┼────────────────────────────┤
  │ A → B                │ A → B → C → D → back to A  │
  │ Cause → Effect       │ Cause → Effect → Side       │
  │                      │ Effect → Feedback Loop       │
  ├──────────────────────┼────────────────────────────┤
  │ Fix the symptom      │ Fix the system              │
  ├──────────────────────┼────────────────────────────┤
  │ Optimize locally     │ Optimize globally           │
  ├──────────────────────┼────────────────────────────┤
  │ Short-term win       │ Long-term health            │
  └──────────────────────┴────────────────────────────┘

THE TRAGEDY OF LINEAR THINKING:

  Scenario: "API is slow → add caching"
  
  Linear: Add Redis → API fast! ✓ Done!
  
  Systems:
    Add Redis → API fast → 
    Users do more → database load increases →
    DB slows → add DB cache → 
    Now two caches → consistency issues →
    Race conditions → data corruption →
    Team spends ৪০% time on cache bugs →
    Velocity drops → competitors ship faster →
    Company loses market share
  
  → "Quick fix" became existential threat

FEEDBACK LOOPS (the senior's secret weapon):

  REINFORCING LOOPS (growth or decline):
    
    Positive:
      Good code → easy to maintain →
      faster features → happier users →
      more revenue → more engineers →
      better code → (loop continues)
    
    Negative:
      Bad code → hard to maintain →
      slow features → frustrated users →
      less revenue → fewer engineers →
      worse code → (death spiral)
    
    → code quality is a REINFORCING LOOP
    → small quality investments compound over years

  BALANCING LOOPS (stability):
    
    More users → more load → 
    system slows → users leave →
    load decreases → system stabilizes
    
    → nature self-regulates (but you don't want users leaving!)

SECOND-ORDER EFFECTS (thinking ahead):
  
  ┌──────────────────┬─────────────┬────────────────────┐
  │ Decision         │ ১st effect  │ ২nd/৩rd effects    │
  ├──────────────────┼─────────────┼────────────────────┤
  │ Add microservices│ Faster      │ Network complexity │
  │                  │ deploys     │ → debugging hell    │
  │                  │             │ → slower features   │
  ├──────────────────┼─────────────┼────────────────────┤
  │ Skip tests       │ Ship faster │ Bugs in prod        │
  │                  │             │ → ২ AM fixes         │
  │                  │             │ → team burnout       │
  ├──────────────────┼─────────────┼────────────────────┤
  │ Add abstraction  │ Cleaner     │ Indirection tax     │
  │ layer            │ code        │ → harder to trace   │
  │                  │             │ → slower onboarding │
  └──────────────────┴─────────────┴────────────────────┘

  The senior always asks: "And THEN what?"
  The junior only sees the first column.

THE SYSTEMS MAP (how seniors think):
  
  Code → Users → Revenue → Team → Code (loop)
  Each arrow has: delay, amplification, threshold
  
  Example: hiring too fast
    More people → communication overhead (O(n²)) →
    slower decisions → frustration → attrition →
    fewer people but same overhead → worse
  
  Brooks' Law: "Adding people to a late project 
  makes it later" — a SYSTEMIC truth

EMERGENCE (the whole is greater than parts):
  
  A single ant is stupid. An ant colony is brilliant.
  A single neuron can't think. A brain can.
  A single microservice is simple. A microservice 
  mesh is complex beyond any single service.
  
  → Systems have emergent properties that 
    individual parts don't have
  → You can't understand the system by studying parts
  → You must study INTERACTIONS

BOTTLENECK FOCUS (Theory of Constraints):
  
  Every system has ONE bottleneck.
  Optimizing anything EXCEPT the bottleneck = waste.
  
  Example:
    Development: design(২d) → code(৩d) → test(৫d) → deploy(১d)
    Bottleneck: testing (৫d)
    
    Junior: "Let's make coding faster!" (৩d → ২d)
    Result: total ৯d instead of ১০d → ১০% improvement
    
    Senior: "Let's make testing faster!" (৫d → ৩d)
    Result: total ৮d instead of ১০d → ২০% improvement
  
  → Always find and fix the BOTTLENECK first</div>

<div class="dialogue">কদর — measure, proportion, destiny। কুরআনে আল্লাহ বলেন — "সবকিছু আমরা একটা নির্ধারিত পরিমাপে সৃষ্টি করেছি।" (৫৪:৪৯)। কদর = প্রতিটা জিনিসের সংযোগ, পরিমাপ, প্রভাব। সিস্টেম চিন্তা-ও কদর — প্রতিটা সিদ্ধান্তের সংযোগ দেখা। যে কদর বোঝে, সে দেখে — একটা সিদ্ধান্ত কীভাবে পুরো সিস্টেমকে নাড়ায়। যে কদর বোঝে না, সে শুধু নিজের অংশ দেখে, বাকি সব অন্ধকার।</div>
<div class="dialogue en">"Qadar — measure, proportion, destiny. Allah says — 'We created all things in determined measure.' (54:49). Qadar = the connections, proportions, effects of everything. Systems thinking too is qadar — seeing the connections of every decision. One who understands qadar sees — how one decision shakes the whole system. One who doesn't, sees only their part, and the rest is darkness."</div>`,
  senior:{
    title:"Systems Thinking — Daily Questions",
    body:`<p><strong>Before any decision, ask:</strong></p><p>১. What happens FIRST? (immediate effect)</p><p>২. What happens THEN? (second-order effect)</p><p>৩. What happens AFTER THAT? (third-order, feedback loops)</p><p>৪. Where is the BOTTLENECK? (fix that first)</p><p>৫. What feedback loop am I creating? (reinforcing or balancing?)</p><p><strong>The senior's habit:</strong> Draw the system on paper/whiteboard before coding. Boxes, arrows, delays, bottlenecks. If you can't draw it, you don't understand it.</p>`
  }
});

// ══ DOOR 4: BUSINESS BRAIN ══
doors.push({
  num:4, icon:"💰", color:"#fbbf24", name:"মূল্যের দৃষ্টি",
  subtitle:"The Business Brain", tech:"Understanding Why Code Matters",
  spirit:"রিযিক — জীবিকা, সম্পদ, উপার্জন",
  secret:"কোড মূল্যবান নয়। কোড যা সমাধান করে, তা মূল্যবান। ইঞ্জিনিয়ার কোড দেখে, ব্যবসায়ী সমস্যা দেখে। অবিচ্ছেয্য ইঞ্জিনিয়ার উভয় দেখে। রিযিক — উপার্জন কোথা থেকে আসে, কেন আসে, কীভাবে বাড়ে। যে রিযিক বোঝে, সে শুধু কোড লেখে না — মূল্য তৈরি করে।",
  recall:{
    q:"চতুর্থ দরজায় কারিগর কেন কোড নয়, গ্রাহক গণনা করলেন?",
    qen:"Why count customers, not code?",
    a:"কারণ কোড মূল্যবান নয়। কোড যা সমাধান করে, তা মূল্যবান। অবিচ্ছেয্য ইঞ্জিনিয়ার উভয় দেখে — কোড ও মূল্য। রিযিক — উপার্জন কোথা থেকে আসে।",
    aen:"Because code isn't valuable. What code solves, that's valuable. The irreplaceable engineer sees both — code and value. Rizq — where revenue comes from."
  },
  story:`<p class="scene-setting">চতুর্থ দরজা। একটা বাজার। কারিগর আব্দুর রহমান কোড লিখছেন না — গ্রাহকের সাথে কথা বলছেন। তুমি অবাক। ইঞ্জিনিয়ার কেন বাজারে? আব্দুর রহমান হাসলেন। "আমি ২০ বছর কোড লিখেছি। কিন্তু একদিন বুঝলাম — আমার কোড কে কিনছে? কেন কিনছে? কোন সমস্যা সমাধান হচ্ছে? না জানলে আমি শুধু টাইপিস্ট, ইঞ্জিনিয়ার না।"</p>
<p class="scene-setting en">The fourth door. A marketplace. Craftsman Abdur Rahman isn't writing code — he's talking to customers. You're surprised. Why is an engineer in the market? Abdur Rahman smiled. "I wrote code for 20 years. But one day I understood — who buys my code? Why? What problem is solved? Without knowing, I'm just a typist, not an engineer."</p>

<div class="dialogue">সিস্টেম চিন্তা বলেছিলেন — সংযোগ দেখো। কিন্তু আমি বলি — সবচেয়ে গুরুত্বপূর্ণ সংযোগ কোড ও গ্রাহকের মধ্যে। গ্রাহক কেন টাকা দেয়? কোন সমস্যা সমাধান হয়? এটা না বুঝলে তুমি শুধু কোড লেখো — মূল্য তৈরি করো না। ব্যবসায়িক মস্তিষ্ক — কোড কেন গুরুত্বপূর্ণ, তা বোঝা।</div>
<div class="dialogue en">"Systems thinking said — see connections. But I say — the most important connection is between code and customer. Why does the customer pay? What problem is solved? Without understanding this, you just write code — you don't create value. Business brain — understanding why code matters."</div>

<div class="code-block">THE BUSINESS BRAIN — কেন কোড লেখা হয়:

THE VALUE CHAIN (code → customer → revenue):

  Code → Feature → User Problem Solved → 
  User Happy → User Pays → Company Revenue →
  Company Pays Engineer → Engineer Writes More Code
  
  → If ANY link breaks, the chain collapses
  → Junior sees only: Code → Feature
  → Senior sees the ENTIRE chain
  → Irreplaceable engineer OPTIMIZES the chain

WHAT ENGINEERS GET WRONG ABOUT BUSINESS:

  ❌ "My code is elegant, therefore it's valuable"
  ✅ Code is valuable ONLY if it solves a real problem
  
  ❌ "Business people don't understand tech"
  ✅ Tech people who don't understand business are typists
  
  ❌ "I just build what they tell me"
  ✅ The irreplaceable engineer ASKS WHY before building
  
  ❌ "Refactoring this will take ২ weeks but it's worth it"
  ✅ Worth it to WHOM? For WHAT? Is there a faster alternative?

THE ৩ NUMBERS EVERY ENGINEER SHOULD KNOW:

  ১. CAC (Customer Acquisition Cost)
    → How much to acquire ONE customer?
    → If CAC > revenue per user → business fails
  
  ২. LTV (Lifetime Value)
    → How much revenue from ONE customer over time?
    → LTV > ৩× CAC = healthy business
  
  ৩. MRR/ARR (Monthly/Annual Recurring Revenue)
    → The company's heartbeat
  
  Why engineers should know:
    → "Should we build feature X?" → 
      depends on: does X increase LTV? decrease CAC?
    → "Should we refactor?" →
      depends on: does it increase feature velocity?
      velocity → more features → more LTV

ENGINEERING DECISIONS THROUGH BUSINESS LENS:

  ┌──────────────────────┬──────────────────────────────┐
  │ Technical Decision   │ Business Impact               │
  ├──────────────────────┼──────────────────────────────┤
  │ Faster page load     │ +৭% conversion → +$৫০K/mo     │
  │ (Amazon: ১০০ms = ১%)│                               │
  ├──────────────────────┼──────────────────────────────┤
  │ ৯৯.৯% → ৯৯.৯৯% uptime│ Prevented outage = $১০০K/hr  │
  ├──────────────────────┼──────────────────────────────┤
  │ Better onboarding    │ -৩০% churn → +$২০K/mo         │
  ├──────────────────────┼──────────────────────────────┤
  │ Test coverage ৪০→৮০% │ -৫০% bugs → +২ day velocity  │
  ├──────────────────────┼──────────────────────────────┤
  │ Microservices        │ ??? (maybe negative!)          │
  └──────────────────────┴──────────────────────────────┘

  → Every technical decision has a BUSINESS impact
  → The irreplaceable engineer speaks BOTH languages

OPPORTUNITY COST (the senior's lens):
  
  "Should I spend ২ weeks refactoring?"
  
  Junior: "Yes, the code is messy"
  Senior: "২ weeks of refactoring = ২ weeks NOT shipping features.
    What features? What revenue? What user happiness?
    Is the refactor worth MORE than those features?
    If yes → refactor. If no → don't."
  
  → Every engineering hour has opportunity cost
  → Time spent on X = time NOT spent on Y
  → The senior always asks: "Is this the HIGHEST-value use of my time?"

UNDERSTANDING USERS (the empathy multiplier):
  
  Most engineers build for themselves.
  Irreplaceable engineers build for USERS.
  
  The difference:
    → Engineer-built feature: "cool tech, nobody uses"
    → User-informed feature: "simple, solves real pain"
  
  Practice: Talk to ১ user per week.
    Not support tickets — actual conversations.
    You'll learn more in ৩০ min than ৩ months of coding.

  Example: You think users want "advanced search filters"
    → Talk to users → they want "just find my stuff faster"
    → You over-engineered. A simple sort would've worked.
    → Business brain saves engineering time AND serves users.</div>

<div class="dialogue">রিযিক — provision, sustenance, livelihood। কুরআনে আল্লাহ বলেন — "আল্লাহ প্রতিটা জীবকে তার রিযিক দেন।" (১১:৬)। রিযিক = জীবিকা যা স্বয়ংক্রিয়ভাবে আসে — কিন্তু শর্ত হলো চেষ্টা। ব্যবসায়িক মস্তিষ্ক-ও রিযিকের বোধ — উপার্জন কোথা থেকে আসে, কেন আসে, কীভাবে বাড়ে। যে রিযিক বোঝে, সে শুধু কোড লেখে না — মূল্য তৈরি করে। যে না বোঝে, সে ধারক — উপার্জন তার হাত দিয়ে যায়, কিন্তু সে জানে না কেন।</div>
<div class="dialogue en">"Rizq — provision, sustenance, livelihood. Allah says — 'Allah provides for every living creature.' (11:6). Rizq = livelihood that comes — but the condition is effort. Business brain too is awareness of rizq — where revenue comes from, why, how it grows. One who understands rizq doesn't just write code — creates value. One who doesn't, is a container — revenue passes through their hands, but they don't know why."</div>`,
  senior:{
    title:"Business Brain — Quick Start",
    body:`<p><strong>Learn these terms THIS WEEK:</strong> CAC, LTV, MRR, churn rate, conversion rate, opportunity cost।</p><p><strong>Talk to ১ user/customer per week.</strong> Not support tickets — actual ৩০-min conversations। You'll learn more than ৩ months of coding।</p><p><strong>For every technical decision, ask:</strong> What's the business impact? How does this affect revenue, users, or velocity? If you can't answer, you're building in the dark।</p><p><strong>Understand your company's revenue model:</strong> SaaS subscription? Transaction fee? Advertising? The revenue model shapes every engineering priority।</p>`
  }
});

// ══ DOOR 5: PROBLEM FINDING ══
doors.push({
  num:5, icon:"🔍", color:"#a78bfa", name:"নীরব পর্যবেক্ষক",
  subtitle:"The Problem Finder", tech:"Finding Problems Before They Explode",
  spirit:"তালাশ — সন্ধান, অনুসন্ধান",
  secret:"সবাই সমাধান খুঁজছে। কিন্তু সঠিক সমস্যা খুঁজছে কে? সমাধান দ্রুত, সমস্যা ধীর। কিন্তু ভুল সমস্যা সমাধান = সময় নষ্ট। অবিচ্ছেয্য ইঞ্জিনিয়ার সমস্যা খুঁজে, তারপর সমাধান। তালাশ — সঠিক সমস্যা সন্ধান। যে তালাশ করে, সে আগে দেখে।",
  recall:{
    q:"পঞ্চম দরজায় কারিগর কেন নীরবে বসে থাকেন?",
    qen:"Why sit in silence?",
    a:"কারণ সবাই সমাধান খুঁজছে, সঠিক সমস্যা খুঁজছে কে? সমাধান দ্রুত, সমস্যা ধীর। ভুল সমস্যা সমাধান = সময় নষ্ট। তালাশ — সঠিক সমস্যা সন্ধান। যে তালাশ করে, সে আগে দেখে।",
    aen:"Because everyone seeks solutions, who seeks the right problem? Solutions are fast, problems are slow. Wrong problem solved = wasted time. Talash — finding the right problem."
  },
  story:`<p class="scene-setting">পঞ্চম দরজা। একটা নীরব কক্ষ। কারিগর মারইয়াম বসে আছেন — কিছু করছেন না। শুধু দেখছেন। চারপাশে অন্য কারিগররা দ্রুত কাজ করছে — সমাধান বানাচ্ছে, ফিক্স করছে, শিপ করছে। তুমি ভাবলে মারইয়াম অলস। কিন্তু তিনি সবচেয়ে গুরুত্বপূর্ণ কাজ করছেন — সমস্যা খুঁজছেন। সবাই সমাধান নিয়ে ব্যস্ত, কেউ সমস্যা নিয়ে ভাবছে না।</p>
<p class="scene-setting en">The fifth door. A silent room. Craftswoman Maryam sits — doing nothing. Just observing. Around her, other craftsmen work fast — building solutions, fixing, shipping. You think Maryam is lazy. But she's doing the most important work — finding problems. Everyone is busy with solutions, nobody is thinking about problems.</p>

<div class="dialogue">ব্যবসায়িক মস্তিষ্ক বলেছিলেন — কোড কেন গুরুত্বপূর্ণ তা বোঝো। কিন্তু আমি বলি — সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন: কোন সমস্যা সমাধান করবে? সবাই সমাধান নিয়ে ব্যস্ত। কিন্তু সঠিক সমস্যা খুঁজছে কে? ভুল সমস্যা সমাধান = সময়, টাকা, শক্তি নষ্ট। অবিচ্ছেয্য ইঞ্জিনিয়ার সমস্যা খুঁজে, তারপর সমাধান।</div>
<div class="dialogue en">"The business brain said — understand why code matters. But I say — the most important question: WHICH problem to solve? Everyone is busy with solutions. But who is finding the right problem? Wrong problem solved = wasted time, money, energy. The irreplaceable engineer finds problems first, then solves them."</div>

<div class="code-block">PROBLEM FINDING — সঠিক সমস্যা সন্ধান:

THE HIERARCHY OF ENGINEERING VALUE:

  ┌──────────────────────────────────────┐
  │ Level ১: CODE WRITER (replaceable)   │
  │ → "Tell me what to build, I'll code" │
  │ → Value: low, AI-replaceable          │
  ├──────────────────────────────────────┤
  │ Level ২: PROBLEM SOLVER (mid-level)  │
  │ → "Give me a problem, I'll solve it" │
  │ → Value: medium, useful               │
  ├──────────────────────────────────────┤
  │ Level ৩: PROBLEM FINDER (irreplaceable│
  │ → "I'll FIND problems you didn't know │
  │   existed, then solve them"           │
  │ → Value: extremely high, unique       │
  └──────────────────────────────────────┘

  Most engineers are stuck at Level ১-২.
  The irreplaceable engineer lives at Level ৩.

WHAT PROBLEM FINDING LOOKS LIKE:

  Scenario: "Users complain the app is slow"
  
  Problem Solver (Level ২):
    → Profile → find slow query → add index → done
    → solved the TECHNICAL problem
  
  Problem Finder (Level ৩):
    → WHY is it slow? → users load ৫০০ items at once
    → WHY ৫০০? → no pagination → devs forgot
    → Real problem: missing pagination, not slow query
    → Add pagination → ১০x faster, less server cost
    → solved the ROOT problem AND found related issues

  → Problem solver fixes symptoms
  → Problem finder fixes root causes + prevents future issues

THE ART OF ASKING WHY (root cause analysis):
  
  Symptom: "The deploy failed"
  
  ❌ Junior: "I'll just retry" (fixes symptom)
  ✅ Senior: 
    Why did it fail? → OOM error
    Why OOM? → memory leak in new feature  
    Why memory leak? → unbounded cache
    Why unbounded? → no eviction policy
    Why no policy? → nobody set cache limits
    → ROOT CAUSE: no cache size standards
    → FIX: cache standards (prevents ALL future leaks)
  
  → One "why" chain prevents ১০০ future bugs

ANTICIPATORY THINKING (seeing around corners):

  The irreplaceable engineer predicts problems:
  
  "We're adding ১০ users/month. In ৬ months = ৬০ more.
   Our DB handles ২০০ concurrent. At ২৫০, it'll slow.
   In ৪ months, we need DB scaling. 
   Let me prepare NOW, not when it breaks."
  
  → Junior reacts to problems (firefighter)
  → Senior anticipates problems (architect)
  → The irreplaceable engineer PREVENTS problems (oracle)

PROBLEM SELECTION (not all problems are equal):

  ┌──────────────────┬──────────┬──────────┐
  │ Problem Type     │ Impact   │ Urgency  │
  ├──────────────────┼──────────┼──────────┤
  │ User can't pay   │ HIGH ($) │ HIGH     │ ← Fix NOW
  ├──────────────────┼──────────┼──────────┤
  │ Code is ugly     │ LOW      │ LOW      │ ← Fix LATER
  ├──────────────────┼──────────┼──────────┤
  │ Scalability wall │ HIGH     │ MEDIUM   │ ← Fix SOON
  ├──────────────────┼──────────┼──────────┤
  │ Developer XP     │ MEDIUM   │ MEDIUM   │ ← Fix WHEN FREE
  └──────────────────┴──────────┴──────────┘

  Eisenhower Matrix for engineering:
    → Urgent + Important: do NOW (prod is down)
    → Important, not urgent: SCHEDULE (refactor, scale)
    → Urgent, not important: DELEGATE (CI fix)
    → Neither: ELIMINATE (meeting that could be email)

THE PROBLEM JOURNAL (practice technique):
  
  Keep a journal of problems you notice:
    → "Users click back button ৩x → confusion"
    → "API response includes unused fields → bandwidth waste"
    → "Onboarding step ৪ has ৬০% drop-off"
  
  Review weekly. Prioritize. 
  Present top ৩ to team.
  → You become the person who SEES problems
  → This is irreplaceable

WHY PROBLEM FINDERS ARE RARE:
  → It requires saying "this is wrong" (uncomfortable)
  → It requires stopping to think (slows down)
  → It requires understanding users (empathy)
  → It requires systems thinking (connections)
  → It requires courage to question assumptions
  
  → Most engineers would rather CODE than THINK
  → That's exactly why problem finders are irreplaceable</div>

<div class="dialogue">তালাশ — search, seek, quest। কুরআনে আল্লাহ বলেন — "যারা আমার সন্ধানে চলে, আমি তাদের পথ দেখাই।" তালাশ শুধু সমাধানের নয় — সমস্যারও। প্রকৃত তালাশ হলো সঠিক সমস্যা খুঁজে বের করা, সমাধানের আগে। যে তালাশ করে, সে আগে দেখে — সমস্যা বড় হওয়ার আগেই। যে তালাশ করে না, সে অপেক্ষা করে — সমস্যা ফেটে পড়ার জন্য।</div>
<div class="dialogue en">"Talash — search, seek, quest. Allah says — 'Those who seek Me, I guide them.' Talash isn't just for solutions — it's for problems too. True talash is finding the right problem before the solution. One who seeks, sees early — before the problem grows. One who doesn't seek, waits — for the problem to explode."</div>`,
  senior:{
    title:"Become a Problem Finder — This Week",
    body:`<p><strong>Start a Problem Journal.</strong> Every day, write ONE problem you noticed (not solved — just noticed). User friction, code smell, team bottleneck, business gap — anything.</p><p><strong>Weekly review:</strong> Pick the top ৩. Present to team. "I noticed these problems. Here's priority. Can we fix?"</p><p><strong>The ৫-Why habit:</strong> For every bug, ask why ৫ times. You'll find root causes nobody else sees.</p><p><strong>Anticipate:</strong> Once a month, ask: "What will break in ৬ months if we keep growing?" Fix before it breaks.</p><p><strong>You become irreplaceable when you're the person who SEES problems before they become crises.</strong></p>`
  }
});
