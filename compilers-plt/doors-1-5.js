const doors = [];

// ═══════════════════════════════════════════
// DOOR 1 — The Word Breaker (Lexer/Tokenizer)
// ═══════════════════════════════════════════
doors.push({
  num: 1,
  icon: "📝",
  color: "#0ea5e9",
  tagline: "শব্দ ভাঙা — Breaking Words",
  name: "The Word Breaker",
  secret: "Lexer = একটা DFA। প্রতিটা character পড়ে, state change করে, token তৈরি করে।",
  story: `<p class="scene-setting">তুমি একটা বিদেশি ভাষা পড়ছ। প্রথমে তোমাকে শব্দ চেনো — কোথায় একটা শব্দ শেষ, কোথায় শুরু। একটা sentence: <code>x = 3 + 4</code>। কম্পিউটার এটাকে character হিসেবে দেখে — <code>x</code>, <code> </code>, <code>=</code>, <code> </code>, <code>3</code>... Lexer এই character stream কে meaningful tokens এ ভাগ করে।</p>
<p class="scene-setting en">A lexer (tokenizer) reads raw source code character-by-character and converts it into a stream of categorized tokens using a Deterministic Finite Automaton (DFA). Regular expressions define token patterns.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrL" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker></defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">📝 Lexer: Raw Text → Tokens via DFA</text>

  <rect x="20" y="45" width="180" height="50" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
  <text x="110" y="68" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Source Code (raw text)</text>
  <text x="110" y="83" text-anchor="middle" fill="#38bdf8" font-size="9" font-family="monospace">x = 3 + 4</text>

  <line x1="200" y1="70" x2="230" y2="70" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrL)"/>
  <text x="215" y="63" text-anchor="middle" fill="#7dd3fc" font-size="7">DFA</text>

  <!-- DFA States -->
  <rect x="230" y="45" width="150" height="120" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="305" y="62" text-anchor="middle" fill="#bae6fd" font-size="8">Finite State Machine</text>
  <circle cx="270" cy="85" r="12" fill="#1e3a5f" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="270" y="89" text-anchor="middle" fill="#7dd3fc" font-size="7">S0</text>
  <circle cx="330" cy="85" r="12" fill="#1e3a5f" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="330" y="89" text-anchor="middle" fill="#7dd3fc" font-size="7">S1</text>
  <line x1="282" y1="85" x2="318" y2="85" stroke="#0ea5e9" stroke-width="1" marker-end="url(#arrL)"/>
  <text x="300" y="78" text-anchor="middle" fill="#7dd3fc" font-size="6">letter</text>
  <circle cx="270" cy="120" r="12" fill="#1e3a5f" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="270" y="124" text-anchor="middle" fill="#7dd3fc" font-size="7">S2</text>
  <circle cx="330" cy="120" r="12" fill="#1e3a5f" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="330" y="124" text-anchor="middle" fill="#7dd3fc" font-size="7">S3</text>
  <line x1="282" y1="120" x2="318" y2="120" stroke="#0ea5e9" stroke-width="1" marker-end="url(#arrL)"/>
  <text x="300" y="113" text-anchor="middle" fill="#7dd3fc" font-size="6">digit</text>
  <text x="305" y="152" text-anchor="middle" fill="#64748b" font-size="7">Each state = matching a token pattern</text>

  <line x1="380" y1="70" x2="410" y2="70" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrL)"/>

  <!-- Tokens -->
  <rect x="410" y="45" width="150" height="120" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="485" y="62" text-anchor="middle" fill="#86efac" font-size="10" font-weight="700">Token Stream</text>
  <rect x="425" y="72" width="120" height="18" rx="3" fill="#14532d" stroke="#4ade80" stroke-width="1"/>
  <text x="485" y="85" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">ID("x")</text>
  <rect x="425" y="93" width="120" height="18" rx="3" fill="#14532d" stroke="#4ade80" stroke-width="1"/>
  <text x="485" y="106" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">EQ("=")</text>
  <rect x="425" y="114" width="120" height="18" rx="3" fill="#14532d" stroke="#4ade80" stroke-width="1"/>
  <text x="485" y="127" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">NUM(3)</text>
  <rect x="425" y="135" width="120" height="18" rx="3" fill="#14532d" stroke="#4ade80" stroke-width="1"/>
  <text x="485" y="148" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">PLUS("+") NUM(4)</text>

  <text x="290" y="200" text-anchor="middle" fill="#e2e8f0" font-size="10" font-weight="700">Django Analogy: WSGI/ASGI splitting raw HTTP into Method/Path/Headers</text>
  <text x="290" y="220" text-anchor="middle" fill="#64748b" font-size="9" font-style="italic">Regular expressions compile to DFAs. DFA = Type 3 (regular) in Chomsky hierarchy (B41).</text>
  <text x="290" y="240" text-anchor="middle" fill="#64748b" font-size="8">Hopcroft's algorithm minimizes DFA states → faster lexing.</text>

  <rect x="80" y="260" width="420" height="30" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="290" y="280" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="600">💡 Regex → DFA → Lexer. Same mechanism that matches URLs in Django urls.py!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Lexer = DFA। Raw text কে character-by-character পড়ে, state change করে, meaningful tokens তৈরি করে। B41 এর Chomsky Type 3।</div>

<div class="dialogue"><strong>লেক্সার ইঞ্জিনিয়ার:</strong> লেক্সিং হল কম্পাইলারের প্রথম কাজ। র কোড হল শুধু text — একটা সারি character। আমার কাজ হল সেই text কে meaningful chunks এ ভাগ করা। <code>x</code> হল identifier, <code>=</code> হল operator, <code>3</code> হল number। আমি এটা করি finite state machine দিয়ে — ঠিক যেটা B41 Theory of Computation-এ শিখেছ। Regular expression কে DFA তে compile করা হয়, DFA প্রতিটা character পড়ে state change করে, accepting state এ পৌঁছালে token emit করে।</div>`,
  recall: [
    { q: "Lexer আর Parser এর মধ্যে পার্থক্য কী?", a: "Lexer = text কে tokens এ ভাগ করে (DFA দিয়ে)। Parser = tokens গুলো কে hierarchical AST তে সাজায়।" },
    { q: "Django এর কোন অংশ lexer এর মতো কাজ করে?", a: "Django url dispatcher — raw URL কে meaningful parts এ ভাগ করে। আর WSGI/ASGI — raw HTTP request কে Method, Path, Headers এ ভাগ করে।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 2 — The Tree Builder (Parser → AST)
// ═══════════════════════════════════════════
doors.push({
  num: 2,
  icon: "🌳",
  color: "#22c55e",
  tagline: "গাছ নির্মাণ — Building the Tree",
  name: "The Tree Builder",
  secret: "Parser tokens কে tree (AST) তে সাজায়। Flat list → hierarchical structure।",
  story: `<p class="scene-setting">লেক্সার tokens দিয়ে দিল। এখন সেগুলো কী ক্রমে থাকবে? <code>ID EQ NUM PLUS NUM</code> — এটা flat list। কিন্তু কোডের অর্থ hierarchical। <code>x = (3 + 4)</code> — এখানে প্রথম যোগ হবে, তারপর assignment। Parser এই flat list কে একটা tree তে সাজায় — Abstract Syntax Tree বা AST।</p>
<p class="scene-setting en">A parser groups the flat token stream into a hierarchical Abstract Syntax Tree (AST). Recursive descent, LR/LALR, and PEG parsers each build this tree differently. The AST represents grammatical structure.</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🌳 Parser: Flat Tokens → Hierarchical AST</text>

  <!-- Token stream (left) -->
  <rect x="20" y="50" width="200" height="200" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="120" y="72" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Flat Token Stream</text>
  <rect x="35" y="85" width="170" height="22" rx="4" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="120" y="100" text-anchor="middle" fill="#bae6fd" font-size="9" font-family="monospace">ID("x")</text>
  <rect x="35" y="110" width="170" height="22" rx="4" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="120" y="125" text-anchor="middle" fill="#bae6fd" font-size="9" font-family="monospace">EQ("=")</text>
  <rect x="35" y="135" width="170" height="22" rx="4" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="120" y="150" text-anchor="middle" fill="#bae6fd" font-size="9" font-family="monospace">NUM(3)</text>
  <rect x="35" y="160" width="170" height="22" rx="4" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="120" y="175" text-anchor="middle" fill="#bae6fd" font-size="9" font-family="monospace">PLUS("+")</text>
  <rect x="35" y="185" width="170" height="22" rx="4" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="120" y="200" text-anchor="middle" fill="#bae6fd" font-size="9" font-family="monospace">NUM(4)</text>
  <text x="120" y="230" text-anchor="middle" fill="#64748b" font-size="8">Flat — no hierarchy</text>

  <!-- Arrow -->
  <line x1="220" y1="150" x2="260" y2="150" stroke="#22c55e" stroke-width="2" marker-end="url(#arrP2)"/>
  <defs><marker id="arrP2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/></marker></defs>
  <text x="240" y="143" text-anchor="middle" fill="#4ade80" font-size="7" font-weight="700">PARSE</text>

  <!-- AST (right) -->
  <rect x="260" y="50" width="300" height="250" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="410" y="72" text-anchor="middle" fill="#86efac" font-size="10" font-weight="700">Abstract Syntax Tree (AST)</text>

  <!-- Root: Assignment -->
  <rect x="370" y="90" width="80" height="30" rx="6" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
  <text x="410" y="109" text-anchor="middle" fill="#86efac" font-size="9" font-weight="700">= (Assign)</text>

  <!-- Left child: x -->
  <rect x="295" y="145" width="50" height="25" rx="5" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
  <text x="320" y="162" text-anchor="middle" fill="#cbd5e1" font-size="9">x</text>
  <line x1="385" y1="120" x2="320" y2="145" stroke="#475569" stroke-width="1"/>

  <!-- Right child: + -->
  <rect x="385" y="145" width="60" height="25" rx="5" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
  <text x="415" y="162" text-anchor="middle" fill="#c7d2fe" font-size="9" font-weight="700">+ (Add)</text>
  <line x1="415" y1="120" x2="415" y2="145" stroke="#475569" stroke-width="1"/>

  <!-- 3 and 4 -->
  <rect x="360" y="195" width="45" height="25" rx="5" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
  <text x="382" y="212" text-anchor="middle" fill="#cbd5e1" font-size="9">3</text>
  <line x1="400" y1="170" x2="382" y2="195" stroke="#475569" stroke-width="1"/>

  <rect x="425" y="195" width="45" height="25" rx="5" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
  <text x="447" y="212" text-anchor="middle" fill="#cbd5e1" font-size="9">4</text>
  <line x1="425" y1="170" x2="447" y2="195" stroke="#475569" stroke-width="1"/>

  <text x="410" y="250" text-anchor="middle" fill="#86efac" font-size="8">Evaluation: first 3+4=7, then x=7</text>
  <text x="410" y="265" text-anchor="middle" fill="#4ade80" font-size="8">Tree structure = operation precedence!</text>
  <text x="410" y="285" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">Recursive descent / PEG / LR parsers all build this tree</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Parser = flat token list কে hierarchical AST তে রূপান্তর করে। <code>x = 3 + 4</code> → tree যেখানে + আগে evaluate হয়।</div>

<div class="dialogue"><strong>পার্সার ইঞ্জিনিয়ার:</strong> পার্সিং হল বাক্যের গঠন বোঝা। Token list flat — কিন্তু কোডের অর্থ hierarchical। <code>x = 3 + 4</code> মানে প্রথমে ৩ আর ৪ যোগ হবে, তারপর x তে assign হবে। Parser এই hierarchy কে tree তে প্রকাশ করে। একে বলে AST — Abstract Syntax Tree। Recursive descent parser প্রতিটা grammar rule এর জন্য একটা function লেখে। PEG parser ordered choice ব্যবহার করে। LR parser bottom-up চলে। কিন্তু সবার লক্ষ্য এক — tree তৈরি করা।</div>`,
  recall: [
    { q: "AST কী এবং কেন দরকার?", a: "Abstract Syntax Tree — কোডের hierarchical গঠন। Flat tokens এ অর্থ নেই, tree তে operation order স্পষ্ট হয় (precedence, associativity)।" },
    { q: "Recursive descent আর LR parser এর পার্থক্য?", a: "Recursive descent = top-down, প্রতিটা rule এর জন্য function, simple কিন্তু backtracking পারে। LR = bottom-up, table-driven, powerful কিন্তু complex।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 3 — The Meaning Checker (Semantic Analysis)
// ═══════════════════════════════════════════
doors.push({
  num: 3,
  icon: "🔍",
  color: "#a855f7",
  tagline: "অর্থ যাচাই — Checking Meaning",
  name: "The Meaning Checker",
  secret: "Parser শুধু syntax check করে। Semantic analysis meaning check করে — type, scope, existence।",
  story: `<p class="scene-setting">Parser বলল — এই code টা syntactically valid, tree তৈরি হয়েছে। কিন্তু এটা কি অর্থপূর্ণ? <code>int x = "hello" + true;</code> — syntax ঠিক আছে (types match grammar)। কিন্তু অর্থ ভুল — string এর সাথে boolean যোগ করা যায় না। এই "meaning" check করাই semantic analysis। Django তে এটা <code>serializer.is_valid()</code> এর মতো।</p>
<p class="scene-setting en">Parser validates syntax (grammar). Semantic analysis validates meaning — scope resolution, type checking, variable existence. In Hindley-Milner type systems, Algorithm W solves type constraints via unification.</p>

<div class="dialogue"><strong>সেমান্টিক ইঞ্জিনিয়ার:</strong> আমার কাজ হল অর্থ যাচাই করা। পার্সার বলল code টা ঠিক আছে grammatically। কিন্তু এটা কি logically correct? Variable টা declare করা আছে কি না? Type গুলো match করে কি না? Function টা exist করে কি না? আমি AST কে walk করে প্রতিটা node যাচাই করি। Hindley-Milner type system এ Algorithm W ব্যবহার করে type inference করি — সমীকরণ সমাধানের মতো। যদি contradiction পাই — type error!</div>`,
  recall: [
    { q: "Syntax error আর Semantic error এর পার্থক্য?", a: "Syntax = grammar ভুল (missing semicolon)। Semantic = meaning ভুল (type mismatch, undeclared variable)। Parser ধরে syntax, semantic analyzer ধরে meaning।" },
    { q: "Hindley-Milner Algorithm W কী করে?", a: "Type inference — expression থেকে type স্বয়ংক্রিয়ভাবে বের করে। Unification দিয়ে type constraint সমাধান করে। Haskell, OCaml, Rust এ ব্যবহৃত।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 4 — The Single Version (SSA)
// ═══════════════════════════════════════════
doors.push({
  num: 4,
  icon: "🔤",
  color: "#fbbf24",
  tagline: "একক সংস্করণ — The Single Version",
  name: "The Single Version",
  secret: "SSA: প্রতিটা variable ঠিক একবারই assign হয়। if/else merge এ φ function বসে।",
  story: `<p class="scene-setting">তুমি Python এ লেখো <code>x = 1; x = 2</code>। স্বাভাবিক। কিন্তু LLVM, GCC, V8 — কেউই এভাবে রাখে না। তারা SSA (Static Single Assignment) ব্যবহার করে। প্রতিটা variable ঠিক একবারই assign হয়। <code>x_1 = 1; x_2 = 2</code>। if/else এর শেষে একটা জাদুর function বসে — φ (phi)। সে ঠিক করে কোন version ব্যবহার হবে।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔤 SSA: Every Variable Assigned Exactly Once</text>

  <!-- Original (left) -->
  <rect x="20" y="50" width="250" height="250" rx="10" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="700">Original Code</text>
  <text x="145" y="100" text-anchor="middle" fill="#fed7aa" font-size="10" font-family="monospace">x = 1</text>
  <text x="145" y="125" text-anchor="middle" fill="#fed7aa" font-size="10" font-family="monospace">if (cond):</text>
  <text x="145" y="145" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">  x = 2</text>
  <text x="145" y="165" text-anchor="middle" fill="#fed7aa" font-size="10" font-family="monospace">else:</text>
  <text x="145" y="185" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">  x = 3</text>
  <text x="145" y="210" text-anchor="middle" fill="#fed7aa" font-size="10" font-family="monospace">print(x)</text>
  <text x="145" y="240" text-anchor="middle" fill="#f87171" font-size="9">❌ x এর অনেক version! কোনটা print হবে?</text>
  <text x="145" y="258" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">Optimizer বিভ্রান্ত</text>

  <!-- SSA (right) -->
  <rect x="310" y="50" width="250" height="250" rx="10" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="435" y="72" text-anchor="middle" fill="#86efac" font-size="11" font-weight="700">SSA Form</text>
  <text x="435" y="100" text-anchor="middle" fill="#bbf7d0" font-size="10" font-family="monospace">x_1 = 1</text>
  <text x="435" y="125" text-anchor="middle" fill="#bbf7d0" font-size="10" font-family="monospace">if (cond):</text>
  <text x="435" y="145" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">  x_2 = 2</text>
  <text x="435" y="165" text-anchor="middle" fill="#bbf7d0" font-size="10" font-family="monospace">else:</text>
  <text x="435" y="185" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">  x_3 = 3</text>
  <text x="435" y="210" text-anchor="middle" fill="#818cf8" font-size="10" font-family="monospace" font-weight="700">x_4 = φ(x_2, x_3)</text>
  <text x="435" y="230" text-anchor="middle" fill="#bbf7d0" font-size="10" font-family="monospace">print(x_4)</text>
  <text x="435" y="260" text-anchor="middle" fill="#4ade80" font-size="9">✅ প্রতিটা x unique! φ choose করে।</text>
  <text x="435" y="278" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">Optimizer পরিষ্কার পথ পায়</text>
</svg>
</div>
<div class="svg-caption">চিত্র: SSA — প্রতিটা variable একবারই assign। if/else merge এ φ function বসে যে choose করে কোন version। এটাই LLVM/GCC/V8 এর ভিত্তি।</div>

<div class="dialogue"><strong>এসএসএ ইঞ্জিনিয়ার:</strong> SSA হল modern compiler এর ভিত্তি। কেন? কারণ যখন প্রতিটা variable একবারই assign হয়, optimizer সহজে dead code detect করতে পারে, constant fold করতে পারে, duplicate eliminate করতে পারে। φ function হল জাদুর সেতু — if শাখা থেকে এলে x_2, else শাখা থেকে এলে x_3। এটা শুধু mathematical representation — real machine instruction নয়। Codegen এর সময় move instruction এ convert হয়।</div>`,
  recall: [
    { q: "φ (phi) function কী করে?", a: "Control flow merge point এ বসে। if থেকে এলে একটা version, else থেকে এলে আরেকটা — φ choose করে কোনটা use হবে।" },
    { q: "কেন SSA optimization সহজ করে?", a: "প্রতিটা variable একটা unique definition থাকে। Dead code, constant, duplicate — সব detect করা সহজ কারণ কোন aliasing confusion নেই।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 5 — The Invisible Cleaner (Optimization)
// ═══════════════════════════════════════════
doors.push({
  num: 5,
  icon: "✨",
  color: "#f97316",
  tagline: "অদৃশ্য পরিচ্ছন্নতা — Invisible Cleaning",
  name: "The Invisible Cleaner",
  secret: "Constant folding, dead code elimination, inlining — কম্পাইলার তোমার কোড থেকে অদরকারি সরিয়ে দ্রুত করে।",
  story: `<p class="scene-setting">তুমি লেখো <code>x = 3 * 4 + 5;</code>। কম্পাইলার এটাকে দেখে হাসে — কেন রানটাইমে ৩*৪ করবে? সে আগেই বের করে — <code>x = 17;</code>। এটা constant folding। আর যে code কখনো চলবে না (<code>if False: ...</code>), সেটা পুরোই মুছে ফেলে — dead code elimination। তুমি জানোও না তোমার কোড ছোট হয়ে গেছে!</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">✨ Optimization Passes: Smaller + Faster</text>

  <!-- Constant Folding -->
  <rect x="20" y="50" width="170" height="130" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="105" y="72" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Constant Folding</text>
  <text x="105" y="95" text-anchor="middle" fill="#fcd34d" font-size="8">Before:</text>
  <rect x="35" y="100" width="140" height="18" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="105" y="113" text-anchor="middle" fill="#cbd5e1" font-size="8" font-family="monospace">x = 3 * 4 + 5</text>
  <text x="105" y="133" text-anchor="middle" fill="#fcd34d" font-size="8">After:</text>
  <rect x="35" y="138" width="140" height="18" rx="3" fill="#052e16" stroke="#4ade80" stroke-width="1"/>
  <text x="105" y="151" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">x = 17</text>
  <text x="105" y="170" text-anchor="middle" fill="#64748b" font-size="7">Compute at compile time</text>

  <!-- Dead Code Elimination -->
  <rect x="205" y="50" width="170" height="130" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="290" y="72" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Dead Code Elimination</text>
  <text x="290" y="95" text-anchor="middle" fill="#fcd34d" font-size="8">Before:</text>
  <rect x="220" y="100" width="140" height="18" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="290" y="113" text-anchor="middle" fill="#cbd5e1" font-size="7" font-family="monospace">if False: heavy_calc()</text>
  <text x="290" y="133" text-anchor="middle" fill="#fcd34d" font-size="8">After:</text>
  <rect x="220" y="138" width="140" height="18" rx="3" fill="#052e16" stroke="#4ade80" stroke-width="1"/>
  <text x="290" y="151" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">(removed entirely)</text>
  <text x="290" y="170" text-anchor="middle" fill="#64748b" font-size="7">Unreachable code → gone</text>

  <!-- Inlining -->
  <rect x="390" y="50" width="170" height="130" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="475" y="72" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Function Inlining</text>
  <text x="475" y="95" text-anchor="middle" fill="#fcd34d" font-size="8">Before:</text>
  <rect x="405" y="100" width="140" height="18" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="475" y="113" text-anchor="middle" fill="#cbd5e1" font-size="7" font-family="monospace">y = square(x) + 1</text>
  <text x="475" y="133" text-anchor="middle" fill="#fcd34d" font-size="8">After:</text>
  <rect x="405" y="138" width="140" height="18" rx="3" fill="#052e16" stroke="#4ade80" stroke-width="1"/>
  <text x="475" y="151" text-anchor="middle" fill="#4ade80" font-size="7" font-family="monospace">y = (x * x) + 1</text>
  <text x="475" y="170" text-anchor="middle" fill="#64748b" font-size="7">No function call overhead</text>

  <!-- Strength Reduction -->
  <rect x="105" y="200" width="170" height="130" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="190" y="222" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Strength Reduction</text>
  <text x="190" y="245" text-anchor="middle" fill="#fcd34d" font-size="8">Before:</text>
  <rect x="120" y="250" width="140" height="18" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="190" y="263" text-anchor="middle" fill="#cbd5e1" font-size="8" font-family="monospace">x = y * 8</text>
  <text x="190" y="283" text-anchor="middle" fill="#fcd34d" font-size="8">After:</text>
  <rect x="120" y="288" width="140" height="18" rx="3" fill="#052e16" stroke="#4ade80" stroke-width="1"/>
  <text x="190" y="301" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">x = y &lt;&lt; 3</text>
  <text x="190" y="320" text-anchor="middle" fill="#64748b" font-size="7">Multiply → bit shift</text>

  <!-- Loop Unrolling -->
  <rect x="305" y="200" width="170" height="130" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="390" y="222" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Loop Unrolling</text>
  <text x="390" y="245" text-anchor="middle" fill="#fcd34d" font-size="8">Before:</text>
  <rect x="320" y="250" width="140" height="18" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="390" y="263" text-anchor="middle" fill="#cbd5e1" font-size="7" font-family="monospace">for i in range(3): a[i]=0</text>
  <text x="390" y="283" text-anchor="middle" fill="#fcd34d" font-size="8">After:</text>
  <rect x="320" y="288" width="140" height="18" rx="3" fill="#052e16" stroke="#4ade80" stroke-width="1"/>
  <text x="390" y="301" text-anchor="middle" fill="#4ade80" font-size="6" font-family="monospace">a[0]=0;a[1]=0;a[2]=0</text>
  <text x="390" y="320" text-anchor="middle" fill="#64748b" font-size="7">No loop overhead</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ৫টা optimization pass — constant folding, dead code elimination, inlining, strength reduction, loop unrolling। কম্পাইলার তোমার কোড থেকে অদরকারি সরিয়ে দ্রুত করে।</div>

<div class="dialogue"><strong>অপটিমাইজার ইঞ্জিনিয়ার:</strong> তুমি যা লেখো আর কম্পাইলার যা চালায় — দুটো আলাদা! Constant folding — <code>3*4+5</code> হয়ে যায় <code>17</code>। Dead code elimination — <code>if False</code> branch পুরোই মুছে যায়। Inlining — function call কে body দিয়ে replace করা হয়, call overhead শূন্য। Strength reduction — multiply কে bit shift দিয়ে replace। Loop unrolling — loop কে সোজা sequence তে লেখা। এগুলো তুমি দেখো না — কম্পাইলার চুপচাপ করে দেয়। Django তে এটা <code>{% cache %}</code> আর feature flag removal এর মতো।</div>`,
  recall: [
    { q: "Constant folding উদাহরণ দাও।", a: "<code>x = 3 * 4 + 5</code> হয়ে যায় <code>x = 17</code> — কম্পাইলার compile-time এই হিসাব করে ফেলে, runtime এ করতে হয় না।" },
    { q: "Dead code elimination কখন হয়?", a: "যখন code এর ফলাফল কেউ use করে না, বা branch কখনো reach হবে না (if False)। কম্পাইলার সেটা মুছে দেয়।" },
  ]
});
