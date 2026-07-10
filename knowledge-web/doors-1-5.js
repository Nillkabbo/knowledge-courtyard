// ════════════════════════════════════════
// জ্ঞানের জাল — DOORS 1-5
// Knowledge Web: Silos → Insight Forge
// Cross-references all 25+ books
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: SILOS KILL ══
doors.push({
  num:1, icon:"🧩", color:"#06b6d4", name:"বিচ্ছিন্ন দ্বীপের কক্ষ",
  subtitle:"The Island City", tech:"Why Isolated Knowledge Is Fragile",
  spirit:"আয়ত — নিদর্শন, প্রতীকি সংযোগ",
  secret:"বিচ্ছিন্ন জ্ঞান = ভাঙা পাজলের টুকরো। সুন্দর কিন্তু অকেজো। Munger বলেন — এক মডেলে আটকে থাকা = এক হাতুড়ি দিয়ে সব সমস্যায়। সংযুক্ত জ্ঞান = পাজল বসানো। প্রতিটা টুকরো অন্যের সাথে যুক্ত। আয়ত — কুরআনে আল্লাহ বলেন, প্রতিটা জিনিসে নিদর্শন আছে। নিদর্শন আলাদা নয় — সংযুক্ত। সংযোগ না দেখলে নিদর্শন অর্থহীন।",
  recall:{
    q:"বিচ্ছিন্ন জ্ঞান কেন ভঙ্গুর?",
    qen:"Why is isolated knowledge fragile?",
    a:"কারণ বিচ্ছিন্ন জ্ঞান অন্য জ্ঞানের সাথে সংযুক্ত নয়। Munger: এক মডেলে আটকে = এক হাতুড়ি। সংযুক্ত জ্ঞান = পাজল। আয়ত — নিদর্শন সংযুক্ত।",
    aen:"Because isolated knowledge isn't connected to other knowledge. Munger: stuck in one model = one hammer. Connected knowledge = puzzle. Ayat — signs are connected."
  },
  story:`<p class="scene-setting">স্থপতি ইদ্রিস তোমাকে একটা শহরে নিয়ে গেলেন। কিন্তু অদ্ভুত শহর — কোনো রাস্তা নেই। প্রতিটা বাড়ি একটা দ্বীপের মতো — চারদিকে পরিখা। প্রতিটা বাড়িতে একটা করে গুণ: একটা বাড়িতে শুধু পাথর, আরেকটাতে শুধু কাঠ, আরেকটাতে শুধু লোহা। প্রচুর সম্পদ — কিন্তু কেউ কিছু বানাতে পারে না। কারণ কোনো রাস্তা নেই। সম্পদ বিচ্ছিন্ন। "এটাই তোমার মস্তিষ্ক," ইদ্রিস বললেন।</p>
<p class="scene-setting en">Architect Idris took you to a city. But a strange city — no roads. Each house is an island — surrounded by a moat. Each house has one resource: one has only stone, another only wood, another only iron. Abundant resources — but nothing can be built. Because no roads connect them. Resources are isolated. "This is your brain," Idris said.</p>

<div class="dialogue">তুমি ২৫টা বই পড়েছ। ২৫টা বাড়ি। কিন্তু কোনো রাস্তা নেই। RAG শিখেছ (Book ১২), কিন্তু human psychology-এর (Book ২৩) সাথে সংযুক্ত করোনি। Prompt engineering (Book ৯) শিখেছ, কিন্তু research paper reading-এর (Book ২৫) সাথে যুক্ত করোনি। System design (Book ৪) জানো, কিন্তু fine-tuning-এর (Book ১৩) সাথে সংযুক্ত করোনি। প্রতিটা বই একটা দ্বীপ। সম্পদ আছে — কিন্তু সেতু নেই।</div>
<div class="dialogue en">"You've read 25 books. 25 houses. But no roads. You learned RAG (Book 12), but didn't connect it to human psychology (Book 23). You learned prompt engineering (Book 9), but didn't link it to research paper reading (Book 25). You know system design (Book 4), but haven't connected it to fine-tuning (Book 13). Each book is an island. Resources exist — but no bridges."</div>

<div class="code-block">THE SILO PROBLEM — Why Disconnected Knowledge Fails:

THE TOORPUnderSTANDING PROBLEM:

  ┌──────────────────────────────────────────────┐
  │  ISOLATED KNOWLEDGE (what most people have)   │
  │                                                │
  │  [RAG]  [Psychology]  [System Design]         │
  │    ●        ●           ●                     │
  │  Each is a dot. No lines between them.        │
  │  When a problem needs RAG + Psychology,       │
  │  the person can't combine them.               │
  │  They only see the dots, not the connections. │
  ├──────────────────────────────────────────────┤
  │  CONNECTED KNOWLEDGE (what this book builds)  │
  │                                                │
  │  [RAG]──────[Psychology]────[System Design]   │
  │    ╲          ╱ ╲           ╱                  │
  │     [Fine-tuning]──[Prompt Engineering]        │
  │  Lines between dots = UNDERSTANDING           │
  │  More lines = DEEPER understanding            │
  │  When a problem needs RAG + Psychology,       │
  │  the connected mind SEES the path instantly.  │
  └──────────────────────────────────────────────┘

CHARLIE MUNGER'S "MAN WITH A HAMMER":

  "To a man with only a hammer, every problem 
   looks like a nail." — Charlie Munger

  This is the SILO problem:
    → Know only deep learning? Every problem = neural net
    → Know only system design? Every problem = architecture
    → Know only psychology? Every problem = mindset
    
  The fix: build a LATTICEWORK (Door ৩)
    → know models from MULTIPLE fields
    → CONNECT them
    → see which model applies to which problem
    → COMBINE models for complex problems

WHY YOUR 25 BOOKS AREN'T ENOUGH (yet):

  You have 25 books = 25 knowledge domains
  But if they're disconnected:
    → reading them gave you INFORMATION
    → NOT understanding
    → NOT the ability to CREATE

  Connected, the same 25 books become:
    → a KNOWLEDGE WEB
    → you can COMBINE any domains
    → you can CREATE new solutions
    → you can see PATTERNS across fields
  
  25 disconnected books ≈ 1 connected book (in value)
  25 connected books = exponential value

THE NEUROSCIENCE OF CONNECTION:

  Jeffrey Hawkins (2004, "On Intelligence"):
    → the brain's primary function is PREDICTION
    → prediction requires CONNECTING patterns
    → intelligence = density of connections
    
  Norman Doidge (2007, neuroplasticity):
    → every new CONNECTION between neurons = learning
    → memorizing facts = individual neurons
    → CONNECTING concepts = neural networks
    → the stronger the network, the deeper the understanding

HOW CONNECTION WORKS (preview):

  Door ২: ANALOGICAL REASONING (Gentner)
    → "X is LIKE Y" — structure mapping
    → Example: "The brain is like a computer" 
       (what structures map? what don't?)
  
  Door ৩: MENTAL MODELS (Munger)
    → extract the BIG IDEA from each field
    → build a latticework
    → apply the right model to the right problem
  
  Door ৪: GAP FINDING
    → "What do I NOT know that I need?"
    → "What connection is MISSING?"
  
  Door ৫: INSIGHT (Kounios & Beeman)
    → the "aha" moment = brain connecting distant ideas
    → default mode network
    → how to create conditions for insight</div>

<div class="dialogue">আয়ত — sign, symbol, evidence। কুরআনে আল্লাহ বলেন — "আমি প্রতিটি জিনিসে নিদর্শন রেখেছি যারা চিন্তা করে।" নিদর্শন আলাদা নয় — সংযুক্ত। একটা পাতা একটা নিদর্শন। কিন্তু পাতা + ফুল + ফল + শিকড় = একটা গাছ। গাছ + মাটি + পানি + সূর্য = একটা বাস্তুতন্ত্র। প্রতিটা স্তর আগের স্তরের সাথে সংযুক্ত। আলাদা নিদর্শন দেখা = সংযোগ না দেখা। সংযুক্ত নিদর্শন দেখা = আয়ত বোঝা। এটাই জ্ঞানের জাল।</div>
<div class="dialogue en">"Ayat — sign, symbol, evidence. Allah says — 'In everything We have placed signs for those who reflect.' Signs aren't separate — they're connected. A leaf is a sign. But leaf + flower + fruit + root = a tree. Tree + soil + water + sun = an ecosystem. Each layer connects to the previous. Seeing signs separately = not seeing connections. Seeing connected signs = understanding ayat. This is the knowledge web."</div>`,
  senior:{
    title:"Find Your Disconnected Islands",
    body:`<p><strong>Audit your knowledge right now:</strong></p><p>১. List 5 things you learned from different books (e.g., Zettelkasten from Book 24, learned helplessness from Book 23, first principles from Book 22).</p><p>২. For EACH pair, ask: "How does X connect to Y?"</p><p>৩. If you can't find a connection — that's a missing bridge. You have two islands with no road.</p><p><strong>Example connections you should be able to make:</strong></p><p>- Book 23 (helplessness) + Book 24 (Feynman) = "If you have learned helplessness about math, Feynman technique can break it because it forces you to explain simply — revealing that the gap is small."</p><p>- Book 12 (RAG) + Book 22 (systems thinking) = "RAG is a system with feedback loops — the retrieval quality affects generation quality, which affects user trust, which affects usage."</p><p>- Book 7 (spaced repetition) + Book 25 (reading papers) = "Use spaced repetition for key paper findings — review your paper notes at 1 day, 7 days, 30 days."</p><p><strong>If you can make 10+ such connections — you're building a web. If fewer than 5 — you're in silos.</strong></p>`
  }
});

// ══ DOOR 2: ANALOGICAL REASONING ══
doors.push({
  num:2, icon:"🌉", color:"#67e8f9", name:"সেতু নির্মাতার কক্ষ",
  subtitle:"The Bridge Builder", tech:"Analogical Reasoning (Gentner, 1983; Holyoak)",
  spirit:"সিলসিলা — সংযোগ, শৃঙ্খল",
  secret:"Gentner (১৯৮৩) দেখালেন — মানুষ কীভাবে নতুন ধারণা বোঝে? পুরোনো ধারণার সাথে মিলিয়ে। এটাই structure-mapping theory। মস্তিষ্ক বলে — 'X যেমন, Y-ও তেমন।' কিন্তু কোথায় মিল, কোথায় অমিল? সেটাই analogy-এর শিল্প। Hofstadter বলেন — analogy IS cognition। সিলসিলা — সংযোগের সেতু।",
  recall:{
    q:"Gentner-র structure-mapping theory কী?",
    qen:"What is Gentner's structure-mapping theory?",
    a:"মানুষ নতুন ধারণা বোঝে পুরোনোর সাথে মিলিয়ে। X যেমন, Y-ও তেমন। কোথায় মিল, কোথায় অমিল — সেটাই analogy। Gentner (১৯৮৩)। সিলসিলা — সেতু।",
    aen:"Humans understand new concepts by mapping them to known ones. X is like Y. What maps, what doesn't — that's analogy. Gentner (1983). Silsila — bridge."
  },
  story:`<p class="scene-setting">কারিগর সাবরিনা তোমাকে একটা নতুন ধারণা বোঝাতে চান — কিন্তু তুমি বুঝতে পারছ না। তিনি থামলেন। "ঠামো," বললেন। "তুমি Zettelkasten জানো?" (Book ২৪)। হ্যাঁ। "Zettelkasten হলো একটা গ্রন্থাগার যেখানে প্রতিটা বই একে অপরের সাথে সংযুক্ত।" হ্যাঁ। "একটা neural network-ও তেমনি — প্রতিটা neuron একে অপরের সাথে সংযুক্ত। গ্রন্থাগারের মতো।" হ্যাঁ! বুঝলে! "এটাই analogy," সাবরিনা বললেন। "Zettelkasten = bridge। তুমি যা জানো তার সাথে নতুন ধারণা সংযুক্ত করো।"</p>
<p class="scene-setting en">Craftswoman Sabrina wants to explain a new concept — but you don't understand. She stopped. "Wait," she said. "Do you know Zettelkasten?" (Book 24). Yes. "Zettelkasten is a library where every book connects to every other." Yes. "A neural network is the same — every neuron connects to every other. Like a library." Yes! You understood! "That's analogy," Sabrina said. "Zettelkasten = bridge. You connect the new concept to what you already know."</p>

<div class="dialogue">সিলো বলেছিলেন — বিচ্ছিন্ন জ্ঞান ভঙ্গুর। কিন্তু আমি বলি — সংযুক্ত করার প্রথম সরঞ্জাম হলো analogy। তুমি যা জানো, তার সাথে নতুনকে মিলিয়ে। Gentner (১৯৮৩) এর নাম — structure-mapping theory। মস্তিষ্ক বলে — 'এটা ওটার মতো।' কিন্তু ভালো analogy শুধু মিল নয় — মিল এবং অমিল দেখায়। Zettelkasten এবং neural network অনেকটা এক — কিন্তু Zettelkasten-এ backpropagation নেই। সেখানেই অমিল।</div>
<div class="dialogue en">"Silos said — isolated knowledge is fragile. But I say — the first tool of connection is analogy. You map the new to the known. Gentner (1983) calls it structure-mapping theory. The brain says — 'this is like that.' But a good analogy doesn't just show similarity — it shows where the similarity ENDS. Zettelkasten and neural networks are alike — but Zettelkasten has no backpropagation. That's where they differ."</div>

<div class="code-block">ANALOGICAL REASONING — The Science of Connection:

GENTNER'S STRUCTURE-MAPPING THEORY (1983):

  Dedre Gentner (Northwestern University):
    → how do humans understand NEW concepts?
    → by mapping STRUCTURE from a known domain (source)
       to a new domain (target)
    
    → Source: what you KNOW (e.g., solar system)
    → Target: what you're LEARNING (e.g., atom)
    → Mapping: sun↔nucleus, planets↔electrons, 
       gravity↔electromagnetism
    
    → The brain extracts RELATIONAL STRUCTURE
       (not surface features)
    → "The atom is like the solar system"
       means the RELATIONSHIPS map, not the appearance

  What makes a GOOD analogy:
    ১. RELATIONAL match (same structure)
    ২. SURFACE difference (different appearance)
    ৩. PREDICTIVE power (can guess new things)
    ৪. KNOWN limits (where the analogy breaks)

  What makes a BAD analogy:
    ১. SURFACE match only (looks similar, isn't)
    ২. OVER-extended (pushed beyond where it works)
    ৩. MISLEADING (hides important differences)

HOFSTADTER: ANALOGY IS COGNITION:

  Douglas Hofstadter (Indiana University, Pulitzer Prize):
    → "Analogy is the core of cognition"
    → EVERY thought is an analogy
    → "This situation is like that one"
    → "This problem reminds me of that problem"
    → The brain is an analogy machine
    
  His book "Surfaces and Essences" (2013, with Sander):
    → categorization IS analogy
    → "Is this a chair?" = "Is this like chairs I've seen?"
    → learning = building richer analogies over time
    
  Example: a child learns "dog"
    → sees first dog → "dog"
    → sees different dog → "also dog" (analogy!)
    → sees cat → "dog?" → corrected → "cat"
    → the child is BUILDING categories through analogy

HOLYOAK'S PRAGMATIC REASONING:

  Keith Holyoak (UCLA):
    → analogies are used to SOLVE PROBLEMS
    → "Have I seen a SIMILAR problem before?"
    → transfer the SOLUTION from the known to the new
    
  The radiation problem (Duncker, 1945):
    → "Destroy a tumor with rays. But rays that are 
       strong enough to kill the tumor will also kill 
       healthy tissue. How?"
    → Solution: use MANY weak rays from different 
       angles, converging on the tumor
    → People who heard a similar story (general attacking
       fortress with divided army) were ৩x more likely 
       to solve it — IF they saw the analogy (Gick & 
       Holyoak, ১৯৮০)

CROSS-DOMAIN ANALOGIES (connecting your 25 books):

  ┌──────────────────────┬──────────────────────────────┐
  │ Known (Source)        │ New (Target)                  │
  ├──────────────────────┼──────────────────────────────┤
  │ Immune system (bio)   │ Computer security (Book ১৫)  │
  │ → antibodies adapt    │ → adaptive firewalls          │
  │ → memory cells        │ → threat databases            │
  ├──────────────────────┼──────────────────────────────┤
  │ Evolution (biology)   │ Code refactoring (eng)        │
  │ → mutation + selection│ → random changes + testing    │
  │ → fitness landscape   │ → code quality metrics        │
  ├──────────────────────┼──────────────────────────────┤
  │ Garden (Book ৫)       │ ML model training (Book ১৩)  │
  │ → soil preparation    │ → data preprocessing          │
  │ → seed selection      │ → model architecture          │
  │ → regular watering    │ → training schedule           │
  │ → pruning             │ → hyperparameter tuning       │
  ├──────────────────────┼──────────────────────────────┤
  │ Learned helplessness  │ Imposter syndrome (career)    │
  │ (Book ২৩)             │ → brain learned "I can't"     │
  │ → dog stops trying    │ → professional stops trying   │
  │ → cure: small wins    │ → cure: small wins             │
  ├──────────────────────┼──────────────────────────────┤
  │ RAG retrieval (B১২)  │ Human memory recall           │
  │ → embedding search    │ → associative memory          │
  │ → context window      │ → working memory capacity      │
  │ → hallucination       │ → false memories              │
  └──────────────────────┴──────────────────────────────┘

THE ANALOGY EXERCISE (do this daily):

  When learning something NEW:
    ১. ASK: "What is this LIKE?"
    ২. IDENTIFY: what maps? (structure)
    ৩. IDENTIFY: what DOESN'T map? (limits)
    ৪. PREDICT: based on the analogy, what else might be true?
    ৫. TEST: is the prediction correct?
  
  This is how Einstein developed relativity:
    → "What if light is like a train?"
    → "What if gravity is like a trampoline?"
    → Each analogy → new predictions → tested → confirmed/refuted

POLYA'S HEURISTICS (1945):

  George Polya ("How to Solve It"):
    → when stuck on a problem, ask:
      "Have I seen a SIMILAR problem?"
      "Can I use a SIMILAR method?"
      "Can I restate the problem as an analogy?"
    
    → Example: stuck on a coding problem
      → "Is this like a sorting problem?" 
      → "Is this like a search problem?"
      → "Is this like a graph traversal?"
      → FIND the analogous known problem → apply its solution</div>

<div class="dialogue">সিলসিলা — chain, connection, linkage। কুরআনে আল্লাহ বলেন — "তোমরা সবাই আল্লাহর রশি দৃঢ়ভাবে ধরো, একসাথে।" (৩:১০৩)। একসাথে = সিলসিলা। analogy-ও সিলসিলা — এক জ্ঞানের সাথে আরেকটার সংযোগ। সংযোগের মাধ্যমে নতুন ধারণা বোঝা যায়। Gentner দেখালেন — মানুষের মস্তিষ্ক এভাবেই কাজ করে। পুরোনোর সাথে নতুনকে মিলিয়ে। যে সিলসিলা বানায়, সে বোঝে। যে বিচ্ছিন্ন রাখে, সে ভুলে যায়।</div>
<div class="dialogue en">"Silsila — chain, connection. Allah says — 'Hold fast to the rope of Allah, all together.' (3:103). Together = silsila. Analogy too — connecting one knowledge to another. Through connection, new concepts become understandable. Gentner showed — this is how the brain works. Mapping the new to the known. One who builds silsila, understands. One who isolates, forgets."</div>`,
  senior:{
    title:"Build Analogies — Daily Practice",
    body:`<p><strong>For every new concept you learn, do this:</strong></p><p>১. <strong>"What is this LIKE?"</strong> — Find a known concept from a DIFFERENT field that has similar structure.</p><p>২. <strong>Map the structure</strong> — What parts correspond? What relationships correspond?</p><p>৩. <strong>Find the LIMITS</strong> — Where does the analogy break? This is just as important as where it works.</p><p><strong>Examples across your library:</strong></p><p>- "RAG hallucination (Book 12) is like false memory in psychology (Book 23) — both fill gaps with plausible but wrong information."</p><p>- "Zettelkasten (Book 24) is like a neural network — nodes and connections. But Zettelkasten has no learning algorithm."</p><p>- "Growth mindset (Book 23) is like fine-tuning (Book 13) — both update weights based on feedback."</p><p>- "Peer review (Book 25) is like adversarial training (Book 15) — both improve through challenge."</p><p><strong>5+ analogies per day = your brain becomes a connection machine.</strong></p>`
  }
});

// ══ DOOR 3: MENTAL MODELS LATTICEWORK ══
doors.push({
  num:3, icon:"🕸️", color:"#06b6d4", name:"জাল নির্মাতার কক্ষ",
  subtitle:"The Web Weaver", tech:"Mental Models Latticework (Munger)",
  spirit:"হিকমাহ — প্রজ্ঞা, প্রয়োগকৃত জ্ঞান",
  secret:"Munger বলেন — প্রতিটা ক্ষেত্র থেকে বড় ধারণা বের করো। সেগুলো একসাথে বুনো। এটাই latticework। physics থেকে compound interest, biology থেকে evolution, psychology থেকে bias। প্রতিটা মডেল একটা সুতো। সুতোগুলো একসাথে = জাল। সমস্যা এলে জালের একাধিক মডেল প্রয়োগ করো। হিকমাহ — প্রয়োগকৃত জ্ঞান।",
  recall:{
    q:"Munger-এর latticework কীভাবে কাজ করে?",
    qen:"How does Munger's latticework work?",
    a:"প্রতিটা ক্ষেত্রের বড় ধারণা বের করো। একসাথে বুনো = latticework। compound interest, evolution, bias — একসাথে। সমস্যা এলে একাধিক মডেল প্রয়োগ। হিকমাহ।",
    aen:"Extract big ideas from each field. Weave them together = latticework. Compound interest, evolution, bias — together. Apply multiple models to problems. Hikmah."
  },
  story:`<p class="scene-setting">কারিগর তালহা একটা বিশাল তাঁতের সামনে দাঁড়িয়ে আছেন। শত শত রঙিন সুতো — প্রতিটা একটা মডেল। লাল সুতো = physics। সবুজ = biology। নীল = psychology। হলুদ = economics। কালো = math। তিনি সুতোগুলো একসাথে বুনছেন — একটা বিশাল জাল। "প্রতিটা সুতো একটা ক্ষেত্রের বড় ধারণা," তিনি বললেন। "compound interest। critical mass। opportunity cost। cognitive bias। natural selection। entropy। regression to the mean। এগুলো আলাদা নয় — একসাথে বুনলে একটা জাল তৈরি হয়। যে জাল বানায়, সে যেকোনো সমস্যা দেখে বুঝতে পারে — কোন মডেল প্রয়োগ করতে হবে।"</p>
<p class="scene-setting en">Craftsman Talha stands before a vast loom. Hundreds of colored threads — each a model. Red = physics. Green = biology. Blue = psychology. Yellow = economics. Black = math. He weaves them together — a vast web. "Each thread is a field's big idea," he said. "Compound interest. Critical mass. Opportunity cost. Cognitive bias. Natural selection. Entropy. Regression to the mean. These aren't separate — woven together they form a web. One who weaves, sees any problem and knows which model to apply."</p>

<div class="dialogue">analogy বলেছিলেন — এক জ্ঞানের সাথে আরেকটার সংযোগ। কিন্তু আমি বলি — সংযোগ শুধু জোড়ায় নয়। শত শত মডেল একসাথে বুনো। Munger-এর latticework। Munger বলেন — 'প্রতিটা ক্ষেত্রের বড় ধারণা শেখো। একসাথে বুনো। সমস্যা এলে একাধিক মডেল প্রয়োগ করো।' Munger (২০০৭, "Poor Charlie's Almanack")-এ বলেছেন — ~১০০টা মডেল যথেষ্ট। physics, math, biology, psychology, economics — প্রতিটার বড় ধারণা।</div>
<div class="dialogue en">"Analogy said — connecting one knowledge to another. But I say — connections aren't just pairs. Weave hundreds of models together. Munger's latticework. He says — 'learn the big ideas from each field. Weave them. When a problem comes, apply multiple models.' Munger (2007, Poor Charlie's Almanack) says ~100 models suffice. Physics, math, biology, psychology, economics — the big ideas from each."</div>

<div class="code-block">MENTAL MODELS LATTICEWORK — Munger's Method:

THE LATTICEWORK CONCEPT:

  Charlie Munger (Berkshire Hathaway, 1924-2023):
    "You've got to have models in your head. And you've 
     got to array your experience — both vicarious and 
     direct — on this latticework of models."
    
    Key principle: you need models from MULTIPLE disciplines
    → ১ model = one hammer (nail problem)
    → ৫ models = decent thinker
    → ২০ models = good thinker
    → ১০০ models = wise thinker (Munger's level)
    
    "You must know the big ideas in the big disciplines, 
     and use them routinely — all of them, not just a few."

THE ~১০০ MODELS (organized by discipline):

  ┌──────────────┬──────────────────────────────────────┐
  │ Discipline    │ Key Mental Models                    │
  ├──────────────┼──────────────────────────────────────┤
  │ PHYSICS       │ critical mass, inertia, entropy,     │
  │               │ feedback loops, tipping points,      │
  │               │ resonance, velocity                  │
  ├──────────────┼──────────────────────────────────────┤
  │ BIOLOGY       │ evolution, adaptation, symbiosis,    │
  │               │ natural selection, ecosystems,       │
  │               │ homeostasis, mutation                │
  ├──────────────┼──────────────────────────────────────┤
  │ PSYCHOLOGY    │ cognitive bias (Book ২৩),            │
  │               │ social proof, anchoring,             │
  │               │ loss aversion, Dunning-Kruger,       │
  │               │ learned helplessness, growth mindset │
  ├──────────────┼──────────────────────────────────────┤
  │ ECONOMICS     │ opportunity cost, compound interest, │
  │               │ supply/demand, marginal utility,     │
  │               │ comparative advantage, sunk cost,    │
  │               │ positive/negative externalities      │
  ├──────────────┼──────────────────────────────────────┤
  │ MATH          │ compound growth, probability,        │
  │               │ regression to mean, power laws,      │
  │               │ bell curves, sampling, correlation   │
  ├──────────────┼──────────────────────────────────────┤
  │ ENGINEERING   │ feedback loops, redundancy,          │
  │               │ bottlenecks (Book ৪), quality control│
  │               │ (Book ১৬), system design (Book ৪)   │
  ├──────────────┼──────────────────────────────────────┤
  │ COMPUTER SCI  │ abstraction, algorithms, complexity, │
  │               │ recursion, caching, indexing         │
  └──────────────┴──────────────────────────────────────┘

MULTIPLE MODEL APPLICATION:

  When facing a problem, DON'T apply ONE model.
  Apply ৩-৫ models SIMULTANEOUSLY:
  
  Example: "Should I start a PhD?"
    Model ১: OPPORTUNITY COST (economics)
      → what am I giving up for ৫ years?
    Model ২: COMPOUND INTEREST (math)
      → knowledge compounds over decades
    Model ৩: SUNK COST (economics)
      → don't do it because I already invested in MSIS
    Model ৪: GROWTH MINDSET (psychology, Book ২৩)
      → I can develop research skills
    Model ৫: REGRESSION TO MEAN (statistics)
      → most outcomes are average; what makes mine different?
    Model ৬: SOCIAL PROOF (psychology, Book ২৩)
      → are smart people doing PhDs? why?
    Model ৭: ENTROPY (physics)
      → skills decay without use; PhD maintains learning momentum
  
  → NO SINGLE MODEL gives the answer
  → MULTIPLE models REVEAL different aspects
  → The DECISION emerges from the intersection

YOUR 25 BOOKS AS A STARTER LATTICEWORK:

  Each of your 25 books provides models:
  
  Book ৪ (System Design): bottlenecks, load balancing, 
    caching, redundancy → apply to any system
  Book ৭ (Meta-learning): spaced repetition, chunking → 
    apply to learning anything
  Book ৯ (Prompt Eng): clear communication, 
    instruction design → apply to human management
  Book ১২ (RAG): retrieval, relevance, context → 
    apply to how YOU retrieve knowledge
  Book ১৩ (Fine-tuning): adaptation, feedback loops → 
    apply to personal development
  Book ১৫ (Security): adversarial thinking, defense in 
    depth → apply to career protection
  Book ১৬ (LLMOps): monitoring, observability → 
    apply to self-monitoring
  Book ২২ (Irreplaceable): first principles, value → 
    apply to career decisions
  Book ২৩ (Psychology): bias, locus of control → 
    apply to self-understanding
  Book ২৪ (Knowledge): Zettelkasten, Feynman → 
    apply to learning method
  
  → Your 25 books = 25 model clusters
  → Together = a POWERFUL latticework
  → But ONLY if you CONNECT them

HOW TO BUILD YOUR LATTICEWORK:

  Step ১: EXTRACT models (ongoing)
    → from each book, extract ৩-৫ core models
    → write each as: "Principle: [X]. Source: [Book Y]. 
       Application: [how to use]."
  
  Step ২: CONNECT models (weekly)
    → find links between models from different books
    → "Book ২৩'s growth mindset + Book ১৩'s fine-tuning
       = both update based on feedback"
    → write these connections in your Zettelkasten
  
  Step ৩: APPLY models (daily)
    → when facing a decision, ask:
      "Which ৩+ models apply here?"
    → write down which models you used
    → review: did the models help? what did you miss?
  
  Step ৪: PRUNE and REFINE (monthly)
    → which models are most useful? least?
    → which connections are strong? weak?
    → update your latticework</div>

<div class="dialogue">হিকমাহ — wisdom, applied knowledge। কুরআনে আল্লাহ বলেন — "যাকে হিকমাহ দেওয়া হয়েছে, তাকে প্রচুর কল্যাণ দেওয়া হয়েছে।" (২:২৬৯)। হিকমাহ শুধু জ্ঞান নয় — প্রয়োগকৃত জ্ঞান। Munger-এর latticework-ও হিকমাহ — জ্ঞান সংগ্রহ নয়, সংযুক্ত জ্ঞান প্রয়োগ। যে একটা মডেল জানে, সে জানে। যে শতটা সংযুক্ত মডেল প্রয়োগ করে, সে হিকমাহ অর্জন করে। হিকমাহ = সংযুক্ত জ্ঞানের প্রয়োগ।</div>
<div class="dialogue en">"Hikmah — wisdom, applied knowledge. Allah says — 'Whoever is given hikmah has been given much good.' (2:269). Hikmah is not just knowledge — it's APPLIED knowledge. Munger's latticework too is hikmah — not collecting knowledge, but applying connected knowledge. One who knows one model, knows. One who applies 100 connected models, attains hikmah. Hikmah = the application of connected knowledge."</div>`,
  senior:{
    title:"Build Your Latticework — This Month",
    body:`<p><strong>Extract 3-5 models from each of your 25 books.</strong> Write them as: "Principle → Source → Application."</p><p><strong>Example:</strong></p><p>- Book 23: "Learned helplessness is reversible through small wins" → applies to any area where you feel stuck.</p><p>- Book 7: "Spaced repetition exploits the forgetting curve" → applies to retaining ANY knowledge.</p><p>- Book 4: "A system's bottleneck determines its throughput" → applies to your career, your project, your life.</p><p><strong>Then find connections:</strong> "Book 23's learned helplessness + Book 7's spaced repetition = small daily reviews break helplessness by proving you CAN remember and learn."</p><p><strong>Goal: 50+ models extracted, 20+ connections found by end of month.</strong> This is your starter latticework.</p>`
  }
});

// ══ DOOR 4: KNOWLEDGE GAP METHODOLOGY ══
doors.push({
  num:4, icon:"🎯", color:"#67e8f9", name:"শূন্যস্থান সন্ধানী",
  subtitle:"The Gap Finder", tech:"Knowledge Gap Identification Methodology",
  spirit:"তালাশ — সন্ধান",
  secret:"সবচেয়ে বিপজ্জনক অজ্ঞতা — যা তুমি জানো না তা জানো না। Rumsfeld-এর 'unknown unknowns'। কিন্তু systematic gap finding আছে। Feynman technique (Book ২৪) একটা উপায় — ব্যাখ্যা করার চেষ্টা করো, যেখানে আটকাও সেই gap। আরেকটা — একটা মডেল নাও, প্রয়োগ করো, কোথায় ভাঙে সেটা gap। তালাশ — সচেতন সন্ধান।",
  recall:{
    q:"Knowledge gap কীভাবে খুঁজবে?",
    qen:"How to find knowledge gaps?",
    a:"Feynman technique — ব্যাখ্যা করো, যেখানে আটকাও সেই gap। মডেল প্রয়োগ — কোথায় ভাঙে সেই gap। বইয়ের দরজার মধ্যে missing সংযোগ — সেই gap। তালাশ।",
    aen:"Feynman technique — explain, where stuck is the gap. Apply a model — where it breaks is the gap. Missing connections between books — that's a gap. Talash."
  },
  story:`<p class="scene-setting">কারিগর ফারহান তোমাকে একটা বড় পর্দার সামনে দাঁড় করালেন। পর্দায় তোমার ২৫টা বইয়ের নাম — নকশার মতো সাজানো। কিন্তু কিছু জায়গায় ফাঁকা। "এই ফাঁকাগুলো কী?" তুমি জিজ্ঞেস করলে। "তোমার knowledge gap," ফারহান বললেন। "তুমি RAG জানো (Book ১২), Prompt Engineering জানো (Book ৯)। কিন্তু এগুলোর মধ্যে সংযোগ কী? সেটা তুমি জানো না। সেই gap। আর সবচেয়ে বিপজ্জনক — তুমি জানো না যে তুমি জানো না।"</p>
<p class="scene-setting en">Craftsman Farhan stood you before a large screen. Your 25 books displayed like a map. But some spots are blank. "What are these blanks?" you asked. "Your knowledge gaps," Farhan said. "You know RAG (Book 12), prompt engineering (Book 9). But what's the connection between them? You don't know. That's a gap. And most dangerous — you don't know that you don't know."</p>

<div class="dialogue">latticework বলেছিলেন — মডেল সংযুক্ত করো। কিন্তু আমি বলি — সংযোগের আগে খুঁজে বের করো কোথায় ফাঁকা। gap। জ্ঞানের কারিগর (Book ২৪, Door ৪) Feynman technique শিখিয়েছে — সহজ করে ব্যাখ্যা করো, যেখানে আটকাও সেই gap। PhD পাঠক (Book ২৫, Door ৪) gap finding শিখিয়েছে — research-এ কী missing। এখন আমি শেখাবো — একটা বইয়ের জ্ঞান আরেকটার সাথে কীভাবে সংযুক্ত করবে, এবং কোথায় gap।</div>
<div class="dialogue en">"The latticework said — connect models. But I say — before connecting, find where it's blank. The gap. The Knowledge Craftsman (Book 24, Door 4) taught the Feynman technique — explain simply, where stuck is the gap. The PhD reader (Book 25, Door 4) taught gap finding in research — what's missing. Now I'll teach — how to connect one book's knowledge to another, and where the gaps are."</div>

<div class="code-block">KNOWLEDGE GAP IDENTIFICATION — Finding What You Don't Know:

THE FOUR TYPES OF GAPS:

  ┌──────────────────┬──────────────────────────────────┐
  │ Gap Type          │ Description                       │
  ├──────────────────┼──────────────────────────────────┤
  │ ১. WITHIN-book    │ "I read the book but don't        │
  │ (understanding)   │ understand Door ৬"                │
  │                   │ Fix: re-read, Feynman, Zettelkasten│
  ├──────────────────┼──────────────────────────────────┤
  │ ২. BETWEEN-books  │ "I know Book A and Book B, but    │
  │ (connection)      │ can't see how they connect"       │
  │                   │ Fix: this book (Door ২-৩)         │
  ├──────────────────┼──────────────────────────────────┤
  │ ৩. MISSING-book   │ "My 25 books don't cover          │
  │ (domain)          │ [topic X]"                        │
  │                   │ Fix: read new books               │
  ├──────────────────┼──────────────────────────────────┤
  │ ৪. UNKNOWN-unknown│ "I don't even know what I         │
  │ (blind spot)      │ don't know"                       │
  │                   │ Fix: exposure, discomfort, test    │
  └──────────────────┴──────────────────────────────────┘

THE FEYNMAN GAP TEST (from Book ২৪):

  For any concept from any book:
    ১. Close the book
    ২. Explain it simply (as if to a ১২-year-old)
    ৩. Where you GET STUCK = that's your gap
    ৪. Go back, fill the gap
    ৫. Repeat until you can explain it fully
  
  Apply this across ALL 25 books:
    → Can you explain learned helplessness simply?
    → Can you explain PagedAttention simply?
    → Can you explain Zettelkasten simply?
    → Where you can't = gap

THE CONNECTION GAP TEST (new in this book):

  For each PAIR of books, ask:
    "How does Book X connect to Book Y?"
    → if you can answer: connection exists ✅
    → if you CAN'T: gap exists ❌
  
  Example:
    Book ৭ (spaced repetition) + Book ১২ (RAG) = ?
    → Connection: "RAG retrieval is like human recall — 
       both work better with spaced exposure to data.
       Re-indexing documents periodically is like spaced 
       repetition for the retrieval system."
    
    If you COULDN'T make this connection → that's a gap.

THE APPLICATION GAP TEST:

  Try to APPLY knowledge from a book to a real problem.
  Where it DOESN'T work = reveals assumptions or gaps.
  
  Example:
    → Apply Book ৪ (system design) to your life
    → "What's MY bottleneck?" (you as a system)
    → Can't answer? Gap in self-knowledge
    → "What's MY caching strategy?" (reusing skills)
    → Can't answer? Gap in career strategy

THE LATTICEWORK GAP TEST:

  Draw your mental models as a network:
    → nodes = models from your 25 books
    → edges = connections you can make
  
  Gaps are visible as:
    ১. ISOLATED nodes (no connections to other models)
    ২. MISSING nodes (entire books with no extracted models)
    ৩. THIN edges (weak or vague connections)
    ৪. CLUSTERS (some books connected to each other but
       not to the rest of your knowledge)

THE DIKW PYRAMID (where are your gaps?):

  ┌──────────────────┐
  │  WISDOM           │  "I use connected knowledge
  │  (judgment)       │   to make decisions"
  ├──────────────────┤
  │  KNOWLEDGE        │  "I connect information into
  │  (connected info) │   understanding"
  ├──────────────────┤
  │  INFORMATION      │  "I have data in context"
  │  (data + context) │
  ├──────────────────┤
  │  DATA             │  "I have raw facts"
  │  (raw facts)      │
  └──────────────────┘
  
  Most people: DATA → INFORMATION (read books)
  Gap ১: INFORMATION → KNOWLEDGE (connecting)
  Gap ২: KNOWLEDGE → WISDOM (applying)
  
  This book targets Gap ১ (connecting)
  Book ২২ targets Gap ২ (applying)

PRACTICAL GAP-FINDING EXERCISE:

  ১. THE BOOK PAIR MATRIX
    → take ৫ books from your library
    → for each of the ১০ possible pairs (৫×৪/২)
    → write ONE sentence connecting them
    → pairs where you can't = your biggest gaps
  
  ২. THE REAL-WORLD APPLICATION TEST
    → pick a current problem (LedgerPilot, Ipractus, 
       PhD application, career decision)
    → which books are relevant?
    → which models from each?
    → how do they COMBINE?
    → if you can't combine = gap
  
  ৩. THE "EXPLAIN TO A FRIEND" TEST
    → try explaining a concept from one book
       using a concept from another book
    → "Fine-tuning (Book ১৩) is like learning
       helplessness recovery (Book ২৩) — both
       involve updating weights based on feedback"
    → if you can't = gap
  
  ৪. THE "WHAT'S MISSING" SCAN
    → look at your ২৫ books
    → what TOPIC is NOT covered?
    → (statistics? finance? design? negotiation?)
    → those are missing-book gaps</div>

<div class="dialogue">তালাশ — search, seeking। কুরআনে আল্লাহ বলেন — "যারা সৎপথে পরিচালিত হয়, আমি তাদের আরও বৃদ্ধি দেই।" তালাশ শুধু নতুন জ্ঞান খোঁজা নয় — নিজের জ্ঞানের ফাঁক খোঁজা। যে তালাশ করে, সে gap খুঁজে পায়। যে gap খুঁজে পায়, সে পূরণ করে। যে পূরণ করে, সে বাড়ে। সবচেয়ে বিপজ্জনক অবস্থা — ভাবা 'আমি সব জানি'। কারণ তখন তালাশ বন্ধ হয়। gap অদৃশ্য হয়। জ্ঞান স্থবির হয়।</div>
<div class="dialogue en">"Talash — search, seeking. Allah says — 'Those who are guided, We increase them in guidance.' Talash isn't just seeking new knowledge — it's seeking gaps in your existing knowledge. One who seeks, finds gaps. One who finds gaps, fills them. One who fills, grows. The most dangerous state — thinking 'I know everything.' Because then seeking stops. Gaps become invisible. Knowledge stagnates."</div>`,
  senior:{
    title:"Find Your Gaps — Right Now",
    body:`<p><strong>The Book Pair Matrix exercise:</strong></p><p>Pick 5 books from your library. For each of the 10 possible pairs, write ONE sentence connecting them.</p><p><strong>Example pairs:</strong></p><p>- Book 7 (Meta-learning) + Book 13 (Fine-tuning) = "Fine-tuning IS meta-learning for models — updating weights based on feedback, like humans updating understanding through practice."</p><p>- Book 9 (Prompt Eng) + Book 23 (Psychology) = "Prompt engineering IS applied psychology — you're manipulating attention and instruction-following, same principles as Cialdini's influence."</p><p>- Book 16 (LLMOps) + Book 22 (Irreplaceable) = "LLMOps monitoring principles apply to career monitoring — observe, detect drift, respond quickly."</p><p><strong>Pairs where you CAN'T write a connecting sentence = your biggest gaps. Write those down. Those are your learning priorities.</strong></p>`
  }
});

// ══ DOOR 5: THE INSIGHT FORGE ══
doors.push({
  num:5, icon:"💡", color:"#06b6d4", name:"অন্তর্দৃষ্টির কারখানা",
  subtitle:"The Insight Forge", tech:"Aha Moment Science (Kounios & Beeman, 2009)",
  spirit:"ইলহাম — ঐশী অনুপ্রেরণা, হঠাৎ জ্ঞান",
  secret:"Kounios ও Beeman (২০০৯) fMRI দিয়ে দেখলেন — 'aha' moment একটা শব্দ নয়, মস্তিষ্কের একটা সত্যিকারের ঘটনা। right temporal lobe-এ sudden burst of gamma waves। এটা তখন ঘটে যখন মস্তিষ্ক দুটো দূরবর্তী ধারণা সংযুক্ত করে। insight = connection। ইলহাম — হঠাৎ জ্ঞান, যা সংযোগ থেকে আসে।",
  recall:{
    q:"insight বা 'aha' moment মস্তিষ্কে কীভাবে ঘটে?",
    qen:"How does insight or 'aha' moment happen in the brain?",
    a:"Kounios ও Beeman (২০০৯): right temporal lobe-এ gamma wave burst। দুটো দূরবর্তী ধারণা সংযুক্ত হলে ঘটে। insight = connection। ইলহাম।",
    aen:"Kounios & Beeman (2009): gamma wave burst in right temporal lobe. Happens when two distant concepts connect. Insight = connection. Ilham."
  },
  story:`<p class="scene-setting">তুমি একটা সমস্যা নিয়ে ভাবছ — ঘণ্টা ধরে। কোনো সমাধান নেই। হতাশ। তুমি হাঁটতে বের হলে। গোসল করলে। ঘুমাতে গেলে। হঠাৎ — FLASH! সমাধান এসে গেল। কোথা থেকে? তুমি তো আর ভাবছিলে না! কারিগর খাদিজা হাসলেন। "এটাই insight," তিনি বললেন। "তোমার মস্তিষ্ক বিশ্রামের সময় কাজ করেছে। দুটো দূরবর্তী ধারণা — যা তুমি চেতনভাবে সংযুক্ত করতে পারোনি — অবচেতন সংযুক্ত করেছে। এটাই insight। ইলহাম।"</p>
<p class="scene-setting en">You're thinking about a problem — for hours. No solution. Frustrated. You go for a walk. Take a shower. Go to sleep. Suddenly — FLASH! The solution arrived. From where? You weren't even thinking! Craftswoman Khadija laughed. "That's insight," she said. "Your brain worked during rest. Two distant concepts — that your conscious mind couldn't connect — your unconscious connected. This is insight. Ilham."</p>

<div class="dialogue">gap finder বলেছিলেন — ফাঁক খোঁজো। কিন্তু আমি বলি — ফাঁক পূরণের সবচেয়ে শক্তিশালী উপায় insight। তুমি চেতনভাবে সংযুক্ত করতে পারো না — কিন্তু তোমার মস্তিষ্ক পারে। ঘুমানো, হাঁটা, গোসল — এই সময়ে মস্তিষ্ক সংযুক্ত করে। Kounios ও Beeman দেখালেন — insight এলোমেলো নয়। এটা মস্তিষ্কের একটা নির্দিষ্ট প্রক্রিয়া। default mode network। gamma waves। ইলহাম — হঠাৎ জ্ঞান।</div>
<div class="dialogue en">"The gap finder said — find the gaps. But I say — the most powerful way to fill gaps is insight. You can't consciously connect — but your brain can. Sleeping, walking, showering — during these times the brain connects. Kounios & Beeman showed — insight isn't random. It's a specific brain process. Default mode network. Gamma waves. Ilham — sudden knowledge."</div>

<div class="code-block">THE NEUROSCIENCE OF INSIGHT — The Aha Moment:

KOUNIOS & BEEMAN (2009):

  John Kounios (Drexel University) and 
  Mark Beeman (Northwestern University):
  
  Used EEG + fMRI to monitor brains during insight:
    → participants solved word puzzles
    → some solved by ANALYSIS (step by step)
    → some solved by INSIGHT (sudden "aha!")
  
  WHAT HAPPENS IN THE BRAIN (insight vs analysis):

  ┌────────────────────┬──────────────────────────┐
  │ ANALYSIS (logical)  │ INSIGHT (aha!)            │
  │                     │                            │
  │ left hemisphere     │ right hemisphere           │
  │ step-by-step        │ sudden, holistic           │
  │ conscious effort    │ unconscious processing     │
  │ alpha waves         │ GAMMA wave burst           │
  │ (focused attention) │ (in right temporal lobe)   │
  │                     │                            │
  │ feels like work     │ feels like revelation      │
  │ solution expected   │ solution SURPRISING        │
  └────────────────────┴──────────────────────────┘

  THE GAMMA BURST:
    → right anterior superior temporal gyrus
    → sudden burst of high-frequency gamma waves (৪০ Hz)
    → lasts ~৩০০ milliseconds
    → this is the "CLICK" — the moment of insight
    → preceded by "brain blink" (alpha wave in visual
       cortex — brain briefly turns INWARD)

  THE DEFAULT MODE NETWORK (DMN):
  
  Marcus Raichle (২০০১, Washington University):
    → the brain's "resting state" network
    → active when you're NOT focused on a task
    → active during: daydreaming, showering, walking,
       falling asleep, waking up
    → this is when the brain CONNECTS distant ideas
    
    → Default mode network does:
      ট. connects distant memories
      ২. explores unusual associations
      ৩. simulates scenarios
      ৪. processes background information
    
    → When you STOP focused thinking
       → DMN takes over
       → makes connections you couldn't make consciously
       → delivers as INSIGHT

HOW TO CREATE CONDITIONS FOR INSIGHT:

  ১. FOCUSED WORK (preparation)
    → study the problem deeply
    → load all relevant information into working memory
    → your conscious brain processes what's relevant
    → WITHOUT this step, no insight (you need raw material)
  
  ২. INCUBATION (letting go)
    → STOP thinking about the problem
    → do something UNRELATED
    → walk, shower, sleep, exercise
    → DMN activates → distant connections form
  
  ৩. INSIGHT (the aha moment)
    → arrives UNEXPECTEDLY
    → feels sudden, complete, surprising
    → usually comes with certainty ("YES! That's it!")
    → gamma burst in right temporal lobe
  
  ৪. VERIFICATION
    → check: is the insight actually correct?
    → insights FEEL right but can be wrong
    → test against reality

  THE WALLAS MODEL (1926):
    → Graham Wallas described this ১০০ years ago:
      Preparation → Incubation → Illumination → Verification
    → Kounios & Beeman confirmed it with brain imaging

WHY SHOWER THOUGHTS WORK:

  → shower = low cognitive load
  → warm water = relaxation
  → no distractions
  → DMN active
  → distant ideas connect
  → insight arrives
  
  Same with:
    → walking (Darwin, Nietzsche walked to think)
    → driving on autopilot
    → falling asleep (hypnagogic state)
    → waking up (hypnopompic state)
    → mundane tasks (washing dishes)

EINSTEIN'S INSIGHT METHOD:

  Einstein used THOUGHT EXPERIMENTS:
    → "What if I rode a beam of light?"
    → imagined the scenario (focused)
    → then let it go (incubation)
    → insights arrived during violin breaks
    → "Creativity is the residue of time wasted."
  
  Mozart:
    → ideas came during walks
    → "When I am, as it were, completely myself, 
       entirely alone, and of good cheer — it is on 
       such occasions that my ideas flow best."

CONNECTING INSIGHT TO YOUR 25 BOOKS:

  Insight connects DISTANT ideas:
    → your 25 books are "distant" knowledge domains
    → when your DMN processes them during rest
    → it finds connections your conscious mind misses
  
  Example insight:
    "RAG hallucination (Book ১২) is like human false memory 
     (Book ২৩) — both happen when the retrieval system fills 
     gaps with plausible but wrong information. So RAG 
     evaluation (Book ১৮) should test for false memories 
     the same way psychologists do."
  
  → This connection was UNAVAILABLE through linear thinking
  → It required the DMN to connect Book ১২ + ২৩ + ১৮
  → This is what the Knowledge Web DOES</div>

<div class="dialogue">ইলহাম — divine inspiration, sudden knowledge। ইসলামী ঐতিহ্যে ইলহাম হলো এমন জ্ঞান যা হঠাৎ আসে — চেষ্টা ছাড়া। নবীগণ ইলহাম পেতেন। কিন্তু সাধারণ মানুষও insight পায় — যখন তারা গভীরভাবে চিন্তা করে, তারপর ছেড়ে দেয়। মস্তিষ্ক বিশ্রামে সংযুক্ত করে। ইলহাম। Kounios ও Beeman দেখালেন — এটা মস্তিষ্কের প্রক্রিয়া। default mode network। gamma waves। ইলহাম এলোমেলো নয় — এটা প্রস্তুতির ফল। যে গভীরভাবে চিন্তা করে, তারপর ছাড়ে — তার মস্তিষ্ক সংযুক্ত করে। ইলহাম।</div>
<div class="dialogue en">"Ilham — divine inspiration, sudden knowledge. In Islamic tradition, ilham is knowledge that arrives suddenly — without effort. Prophets received ilham. But ordinary people too get insight — when they think deeply, then let go. The brain connects during rest. Ilham. Kounios & Beeman showed — it's a brain process. Default mode network. Gamma waves. Ilham isn't random — it's the fruit of preparation. One who thinks deeply, then releases — their brain connects. Ilham."</div>`,
  senior:{
    title:"Create Conditions for Insight",
    body:`<p><strong>The 4-step insight protocol:</strong></p><p>১. <strong>Preparation:</strong> Study the problem deeply. Load all information into your brain. Read relevant books. This gives your brain raw material to connect.</p><p>২. <strong>Incubation:</strong> STOP. Go for a walk. Take a shower. Sleep. Do something completely unrelated. Your Default Mode Network activates and connects distant ideas.</p><p>৩. <strong>Insight:</strong> The "aha!" arrives unexpectedly. Write it down IMMEDIATELY — it fades fast.</p><p>৪. <strong>Verification:</strong> Insights feel certain but can be wrong. Test against reality.</p><p><strong>Daily insight habits:</strong> Keep a notebook by your bed. Take walking breaks. Don't fill every idle moment with your phone — let your mind wander. Boredom IS the incubation state.</p>`
  }
});
