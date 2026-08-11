doors.push({
  num: 6,
  icon: "🎨",
  color: "#f97316",
  name: "রঙের মানচিত্র",
  subtitle: "The Map of Colors",
  tech: "Register Allocation — Chaitin (1981), graph coloring, interference graph, spilling, live ranges",
  spirit: "তাফসিল — পৃথকীকরণ, সীমিত স্থানে সঠিক বরাদ্দ",
  secret: "১৬টি CPU রেজিস্টার, ১০০টি variable। কোনটা কোথায়? Graph coloring! একসাথে live থাকলে আলাদা রেজিস্টার। Chaitin (১৯৮১) দেখিয়েছেন — এটাই graph coloring সমস্যা।",
  recall: {
    q: " Register allocation কীভাবে কাজ করে? Chaitin-এর অ্যালগরিদম কী?",
    qen: "How does register allocation work? What is Chaitin's algorithm?",
    a: "Interference graph বানাও — একসাথে live variable-এ এজ। Graph coloring করো — adjacent আলাদা রঙ। রঙ = রেজিস্টার। রঙ কম হলে spill (memory)। Chaitin ১৯৮১।",
    aen: "Build interference graph — edge between simultaneously live variables. Graph color — adjacent different colors. Color = register. If too few colors, spill to memory. Chaitin 1981."
  },
  story: `<p class="scene-setting">রাহিম (Door ৫) তোমাকে optimization শিখিয়েছেন। কিন্তু optimization-এর পর একটি সমস্যা — CPU-তে মাত্র ১৬টি রেজিস্টার। কিন্তু তোমার প্রোগ্রামে ১০০টি variable! কোন variable কোন রেজিস্টারে? দুটো variable একসাথে live হলে আলাদা রেজিস্টার দরকার। এটাই graph coloring সমস্যা — সীমিত রঙে গাছ রাঙা।</p>
<p class="scene-setting en">Rahim (Door 5) taught you optimization. But after optimization, a problem — the CPU has only 16 registers. But your program has 100 variables! Which variable goes where? If two variables are live simultaneously, they need separate registers. This is the graph coloring problem — coloring a graph with limited colors.</p>

<div class="dialogue"><strong>রঙ-কারিগর ইউসুফ:</strong> আমি Chaitin-এর অ্যালগরিতম ব্যবহার করি (১৯৮১)। প্রথমে interference graph বানাই — দুটি variable একসাথে live? এজ আছে। তারপর graph coloring — adjacent নোড আলাদা রঙ। রঙের সংখ্যা = রেজিস্টার সংখ্যা। যদি ১৬ রঙে না হয় — spill! কিছু variable memory-তে পাঠাও। এটাই register allocation — সবচেয়ে কঠিণ NP-complete সমস্যা।</div>
<div class="dialogue en"><strong>Color Artisan Yusuf:</strong> I use Chaitin's algorithm (1981). First build interference graph — two variables live together? Edge exists. Then graph coloring — adjacent nodes different colors. Number of colors = number of registers. If 16 colors not enough — spill! Send some variables to memory. This is register allocation — the hardest NP-complete problem.</div>

<div class="code-block"># ── STEP 1: Register allocation in detail ──
# Graph coloring for register assignment.

reg_alloc = """
REGISTER ALLOCATION — DETAILED:

THE PROBLEM:
  → IR has unlimited virtual registers (v1, v2, v3, ...)
  → CPU has limited physical registers (rax, rbx, ..., r15 = 16 on x86-64)
  → Map virtual → physical optimally

LIVENESS ANALYSIS:
  A variable is LIVE if its value will be used later.
  → Compute live ranges: from definition to last use
  → Two variables can share a register if they DON'T overlap

INTERFERENCE GRAPH:
  → Node = variable
  → Edge = two variables live at same point (interfere)
  → Interfering variables CANNOT share a register

GRAPH COLORING (Chaitin, 1981):
  Color the graph so no two adjacent nodes share a color.
  → k colors = k registers
  → NP-complete in general
  → Greedy heuristic: order by degree, assign lowest available color

  Simplify: if node has < k neighbors → remove it (safe)
  Spill: if all nodes have >= k neighbors → spill one to memory

LINEAR SCAN (Poletto & Sarkar, 1999):
  → Faster than graph coloring
  → Sort variables by start of live range
  → Greedy: assign free register, or spill oldest
  → Used by: LLVM (fast mode), JIT compilers

PYTHON (graph coloring simulation):
  import networkx as nx

  G = nx.Graph()
  G.add_edges_from([
      ('a', 'b'), ('a', 'c'),
      ('b', 'c'), ('b', 'd'),
      ('c', 'd'), ('c', 'e'),
      ('d', 'e'),
  ])

  coloring = nx.coloring.greedy_color(G, strategy='largest_first')
  print(coloring)
  # {'c': 0, 'b': 1, 'a': 2, 'd': 0, 'e': 1}

  num_registers = max(coloring.values()) + 1
  print(f"Registers needed: {num_registers}")  # 3

  # Spill if too few registers:
  if num_registers > 16:
      spill = max(coloring, key=lambda v: coloring[v])
      print(f"Spill to memory: {spill}")
"""

print(reg_alloc)</div>

<div class="code-block"># ── STEP 2: JIT compilation ──
# Just-In-Time compilation at runtime.

jit = """
JIT COMPILATION (JUST-IN-TIME):

Compile code AT RUNTIME instead of ahead-of-time.

HOW IT WORKS:
  1. Start in interpreter (slow but immediate)
  2. PROFILE: identify hot code (executed frequently)
  3. COMPILE hot code to native (optimized)
  4. Cache compiled version for future calls

ADVANTAGES:
  → Fast startup (interpret first)
  → Optimized for ACTUAL usage patterns
  → Profile-guided optimization (real data)
  → Can deoptimize (fall back to interpreter)

DISADVANTAGES:
  → Warmup time (need to reach hot code)
  → Memory overhead (compiled code + interpreter)
  → Complexity (deoptimization, invalidation)

FAMOUS JIT COMPILERS:
  → V8 (JavaScript): Chrome, Node.js
  → HotSpot (Java): Oracle JDK, OpenJDK
  → PyPy (Python): 4x faster than CPython
  → Numba (Python): JIT for numerical computing
  → LuaJIT: fast Lua
  → .NET CLR (C#): Microsoft

SPECULATIVE OPTIMIZATION:
  JIT assumes likely behavior, optimizes for it.
  → If assumption fails → DEOPTIMIZE (fall back)
  → Example: assume type is int → optimize for int
  → If string appears → deoptimize, recompile

PYTHON (PyPy vs CPython):
  # CPython: interprets bytecode
  # PyPy: JIT compiles hot loops

  # PyPy speedup on loops:
  def sum_n(n):
      total = 0
      for i in range(n):
          total += i
      return total

  # CPython: ~5 seconds for n=10^9
  # PyPy: ~1 second for n=10^9 (5x faster after JIT warmup)

NUMBA (JIT for Python):
  from numba import jit
  import numpy as np

  @jit(nopython=True)  # compile to native code
  def matrix_multiply(a, b):
      return np.dot(a, b)

  # First call: compiles (slower)
  # Subsequent calls: native speed (100x faster than pure Python)
"""

print(jit)</div>

<div class="code-block"># ── STEP 3: Memory management and garbage collection ──
# How languages manage memory.

memory = """
MEMORY MANAGEMENT:

MANUAL (C, C++):
  → malloc/free, new/delete
  → Programmer controls everything
  → Fast but error-prone: memory leaks, use-after-free, double-free
  → Tools: Valgrind, AddressSanitizer

AUTOMATIC (GC):
  → Runtime manages memory
  → No explicit free
  → Safer but: pauses, overhead, non-deterministic

GARBAGE COLLECTION ALGORITHMS:

1. MARK AND SWEEP:
   → Phase 1 (Mark): traverse from roots, mark all reachable objects
   → Phase 2 (Sweep): free all unmarked objects
   → Simple but: pauses entire program
   → Used by: CPython (reference counting + cycle detector)

2. COPYING:
   → Divide heap into two semispaces
   → Copy live objects from from-space to to-space
   → Free entire from-space
   → Compact (no fragmentation)
   → Used by: young generation in generational GC

3. GENERATIONAL:
   → Hypothesis: most objects die young
   → Young gen: frequent, fast collection (copying)
   → Old gen: infrequent, thorough collection (mark-sweep/compact)
   → Used by: Java (G1, ZGC), .NET, V8

4. REFERENCE COUNTING:
   → Each object has a count of references
   → Increment on assign, decrement on unassign
   → When count = 0: free immediately
   → Problem: circular references (need cycle detector)
   → Used by: CPython, Swift (ARC), Rust (ownership)

PYTHON (reference counting + cycle GC):
  import sys
  import gc

  x = [1, 2, 3]
  print(sys.getrefcount(x))  # 2 (x + the argument)

  y = x  # refcount = 3
  print(sys.getrefcount(y))

  del x  # refcount = 2
  del y  # refcount = 0 → immediately freed

  # Circular reference (needs cycle detector):
  a = []
  b = []
  a.append(b)
  b.append(a)
  del a, b  # refcounts = 1 each (circular)
  gc.collect()  # cycle detector frees them

RUST (ownership, no GC):
  → Compiler tracks ownership at compile time
  → No runtime overhead
  → Memory freed when owner goes out of scope
  → Borrowing rules prevent use-after-free
"""

print(memory)</div>

<div class="code-block"># ── STEP 4: Programming language paradigms ──
# Different ways to think about programming.

paradigms = """
PROGRAMMING LANGUAGE PARADIGMS:

1. IMPERATIVE:
   → Step-by-step instructions
   → State changes (variables, loops)
   → C, Pascal, assembly

2. OBJECT-ORIENTED (OOP):
   → Objects = data + behavior
   → Encapsulation, inheritance, polymorphism
   → Java, C++, Python, C#

3. FUNCTIONAL:
   → Pure functions (no side effects)
   → Immutable data
   → First-class functions, higher-order functions
   → Haskell, Lisp, Clojure, F#, OCaml

4. LOGIC:
   → Declare facts and rules
   → System derives conclusions
   → Prolog, Datalog

5. CONCURRENT:
   → Multiple computations simultaneously
   → CSP (Go), actors (Erlang), STM (Clojure)
   → Async/await (JavaScript, Python, Rust)

MULTI-PARADIGM:
  → Modern languages combine paradigms
  → Python: OOP + functional + imperative
  → Rust: functional + imperative + ownership
  → JavaScript: OOP + functional + event-driven

FUNCTIONAL PROGRAMMING CONCEPTS:
  → IMMUTABILITY: data doesn't change (create new)
  → PURE FUNCTIONS: same input → same output, no side effects
  → HIGHER-ORDER FUNCTIONS: functions as arguments/returns
    map(f, list), filter(pred, list), reduce(op, list)
  → LAZY EVALUATION: compute only when needed
    Haskell: infinite lists, only evaluate what's used
  → MONADS: chain computations with effects
    Maybe, Either, IO in Haskell

PYTHON (functional style):
  # Imperative:
  result = []
  for x in numbers:
      result.append(x * 2)

  # Functional:
  result = list(map(lambda x: x * 2, numbers))
  # Or comprehension:
  result = [x * 2 for x in numbers]

  # Higher-order:
  def compose(f, g):
      return lambda x: f(g(x))

  inc = lambda x: x + 1
  double = lambda x: x * 2
  inc_then_double = compose(double, inc)
  print(inc_then_double(5))  # (5+1)*2 = 12
"""

print(paradigms)</div>

<div class="code-block"># ── STEP 5: Advanced PLT topics ──
# Type theory, metaprogramming, macros.

advanced_plt = """
ADVANCED PLT TOPICS:

1. DEPENDENT TYPES:
   → Types that depend on VALUES
   → Vector(n): length-n vector (n is a value)
   → Can express: "this function never returns -1"
   → Languages: Idris, Agda, Coq, Lean
   → Proof-carrying code

2. METAPROGRAMMING:
   → Code that writes code
   → C macros (#define)
   → Lisp macros (code = data)
   → Template metaprogramming (C++)
   → Python decorators, metaclasses

3. MACROS (Hygienic):
   → Transform code at compile time
   → Rust: procedural macros (derive)
   → Lisp/Scheme: macroexpand
   → Racket: powerful macro system

4. EFFECT SYSTEMS:
   → Track side effects in type system
   → Koka: 'effect' in type signature
   → Rust: Result/Option for error handling

5. ALGEBRAIC EFFECTS:
   → Generalization of exceptions + state + IO
   → Composable, no boilerplate
   → Languages: Koka, Unison, experimental

6. LINEAR TYPES:
   → Each value used exactly ONCE
   → Rust: ownership = affine type system (0 or 1 use)
   → Resource management without GC

PYTHON (metaprogramming):
  # Decorator (function that modifies function):
  def timing(func):
      import time
      def wrapper(*args, **kwargs):
          start = time.time()
          result = func(*args, **kwargs)
          print(f"{func.__name__}: {time.time()-start:.4f}s")
          return result
      return wrapper

  @timing
  def slow_function():
      import time
      time.sleep(1)

  slow_function()  # slow_function: 1.0012s

  # Metaclass (class that creates classes):
  class Singleton(type):
      _instances = {}
      def __call__(cls, *args, **kwargs):
          if cls not in cls._instances:
              cls._instances[cls] = super().__call__(*args, **kwargs)
          return cls._instances[cls]

  class Database(metaclass=Singleton):
      pass
"""

print(advanced_plt)</div>

<div class="code-block"># ── STEP 6: The complete compilation journey ──
# Your path through compilers and PLT.

journey = """
YOUR COMPILER/PLT JOURNEY:

You started seeing compilers as "magic boxes."
You finish seeing them as SYSTEMATIC PIPELINES:

WHAT YOU'VE MASTERED:
  ✅ Lexing (regex → DFA → tokens)
  ✅ Parsing (recursive descent, LR, parser generators)
  ✅ AST construction and traversal
  ✅ Semantic analysis (types, scope, symbol tables)
  ✅ IR generation (TAC, SSA, bytecode)
  ✅ Optimization (constant folding, dead code, loops)
  ✅ Register allocation (graph coloring, linear scan)
  ✅ Code generation (assembly, machine code)
  ✅ JIT compilation (profiling, deoptimization)
  ✅ Garbage collection (mark-sweep, copying, generational)
  ✅ Type systems (static, dynamic, inference, dependent)
  ✅ Programming paradigms (OOP, functional, logic)

THE COMPILER WRITER'S MINDSET:
  1. "What phase catches this error?" (separation of concerns)
  2. "Can I optimize this?" (profile first!)
  3. "Is this representation machine-independent?" (IR)
  4. "What's the right tool?" (LLVM vs hand-written)
  5. "How do I give good error messages?" (UX matters)

"The best thing about UNIX is its many standards."
 — Tanenbaum (ironic, but true for compilers too)

WHAT TO STUDY NEXT:
  → Crafting Interpreters (Robert Nystrom) — build one!
  → Compilers: Principles (Dragon Book, Aho et al.)
  → Engineering a Compiler (Cooper & Torczon)
  → Types and Programming Languages (Pierce)
  → LLVM tutorial (kaleidoscope)
  → Read source: CPython, Rust compiler, LLVM

Every program you write passes through a compiler.
Understanding compilers → understanding computation.

Welcome to compiler literacy.
"""

print(journey)

# FINAL SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Phase            │ Tool/Algorithm                  │
# ├──────────────────┼──────────────────────────────────┤
# │ Lexing           │ Regex, DFA, flex/lex            │
# │ Parsing          │ Recursive descent, LALR, ANTLR  │
# │ Semantic         │ Symbol table, type checker      │
# │ IR               │ SSA, TAC, bytecode              │
# │ Optimization     │ Constant fold, loop unroll      │
# │ Register alloc   │ Graph coloring, linear scan     │
# │ Code gen         │ Instruction selection, peephole │
# │ JIT              │ Profiling, deoptimization       │
# │ GC               │ Mark-sweep, copying, generational│
# └──────────────────┴──────────────────────────────────┘</div>

<div class="verse">وَفِي خَلْقِكُمْ وَمَا يَبُثُّ مِن دَابَّةٍ آيَاتٌ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তোমাদের সৃষ্টিতে নিদর্শন রয়েছে।" — কুরআন ৪৫:৪</div>

<p class="scene-setting">তাফসিল — পৃথকীকরণ। Register allocation সেই পৃথকীকরণের রূপ — সীমিত রেজিস্টারে সঠিক বরাদ্দ। প্রতিটি variable আলাদা, প্রতিটি রেজিস্টার নির্দিষ্ট। বৈচিত্র্য একটি নিদর্শন — গাণিতিক বৈচিত্র্যও তেমন।</p>
<p class="scene-setting en">Tafsil — separation. Register allocation is the form of that separation — correct allocation in limited registers. Each variable separate, each register specific. Diversity is a sign — mathematical diversity too.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৮ (Discrete Math) Door ৮ (Graph Coloring):</strong> Chaitin-এর অ্যালগরিদম = graph coloring! Four Color Theorem-এর প্রয়োগ। Book ৪১ Door ৫: NP-complete — register allocation কঠিন।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect width="580" height="250" fill="#0f172a"/>
<defs><marker id="arrCP6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
<text x="290" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">Interference Graph &amp; Coloring</text>
<circle cx="150" cy="90" r="22" fill="#451a0a" stroke="#22c55e" stroke-width="2.5"/>
<text x="150" y="94" text-anchor="middle" fill="#4ade80" font-size="10">a</text>
<circle cx="290" cy="60" r="22" fill="#451a0a" stroke="#fbbf24" stroke-width="2.5"/>
<text x="290" y="64" text-anchor="middle" fill="#fcd34d" font-size="10">b</text>
<circle cx="430" cy="90" r="22" fill="#451a0a" stroke="#22d3ee" stroke-width="2.5"/>
<text x="430" y="94" text-anchor="middle" fill="#7dd3fc" font-size="10">c</text>
<circle cx="290" cy="180" r="22" fill="#451a0a" stroke="#22c55e" stroke-width="2.5"/>
<text x="290" y="184" text-anchor="middle" fill="#4ade80" font-size="10">d</text>
<circle cx="450" cy="180" r="22" fill="#451a0a" stroke="#fbbf24" stroke-width="2.5"/>
<text x="450" y="184" text-anchor="middle" fill="#fcd34d" font-size="10">e</text>
<line x1="172" y1="80" x2="268" y2="68" stroke="#fbbf24" stroke-width="1.5"/>
<line x1="170" y1="96" x2="408" y2="90" stroke="#fbbf24" stroke-width="1.5"/>
<line x1="312" y1="70" x2="408" y2="82" stroke="#fbbf24" stroke-width="1.5"/>
<line x1="290" y1="82" x2="290" y2="158" stroke="#fbbf24" stroke-width="1.5"/>
<line x1="312" y1="73" x2="438" y2="162" stroke="#fbbf24" stroke-width="1.5"/>
<line x1="448" y1="112" x2="448" y2="158" stroke="#fbbf24" stroke-width="1.5"/>
<line x1="305" y1="180" x2="428" y2="180" stroke="#fbbf24" stroke-width="1.5"/>
<text x="290" y="232" text-anchor="middle" fill="#fcd34d" font-size="9">3 colors (a,d = green; b,e = amber; c = cyan) = 3 registers</text>
</svg>
</div>
<div class="svg-caption">Interference graph: adjacent variable আলাদা রঙ। রঙ = রেজিস্টার। এখানে ৩টি রেজিস্টার যথেষ্ট।</div>

<div class="secret-box">🎨 <strong>Register allocation = graph coloring। সীমিত রঙে সঠিক বরাদ্দ।</strong> কিন্তু কিছু কোড বারবার চলে — hot path। সেই কোড যদি runtime-এ optimize করা যায়? সেই জাদু — JIT compilation। পরের দরজায়।</div>`,
  senior: {
    title: "Register Allocation এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Chaitin (1981)</td><td>Register allocation = graph coloring</td></tr>
<tr><td class="hl">Interference Graph</td><td>একসাথে live → edge</td></tr>
<tr><td class="hl">Color = Register</td><td>adjacent আলাদা রঙ</td></tr>
<tr><td class="hl">Spilling</td><td>রেজিস্টার কম → memory</td></tr>
<tr><td class="hl">NP-complete</td><td>সবচেয়ে কম রঙ খুঁজা কঠিন</td></tr>
<tr><td class="hl">x86-64</td><td>১৬টি general purpose register</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "⚡",
  color: "#f97316",
  name: "নিজেকে পুনর্লিখন",
  subtitle: "The Self-Rewriter",
  tech: "JIT Compilation — HotSpot JVM, V8 (JavaScript), PyPy, profile-guided optimization, deoptimization",
  spirit: "তাজদিদ — নবীকরণ, runtime-এ নিজেকে উন্নত করা",
  secret: "JIT = runtime-এ compilation। প্রথমে interpret (ধীর), তারপর hot path detect → compile → optimize। V8, JVM HotSpot, PyPy — সব JIT ব্যবহার করে। প্রোগ্রাম চলাকালীন নিজেকে উন্নত করে।",
  recall: {
    q: " JIT ও AOT compilation-এর পার্থক্য কী?",
    qen: "What is the difference between JIT and AOT compilation?",
    a: "AOT = compile আগেই (gcc, rustc)। JIT = compile runtime-এ (JVM, V8)। JIT hot path detect করে optimize — প্রোগ্রাম যত চলে তত দ্রুত।",
    aen: "AOT = compile ahead of time (gcc, rustc). JIT = compile at runtime (JVM, V8). JIT detects hot paths and optimizes — program gets faster as it runs."
  },
  story: `<p class="scene-setting">ইউসুফ (Door ৬) তোমাকে register allocation শিখিয়েছেন। কিন্তু একটি সমস্যা — static compilation সব কোড সমানভাবে দেখে। কোনটা বারবার চলে (hot), কোনটা একবার (cold) — সেটা জানে না। JIT (Just-In-Time) compilation এর উত্তর — runtime-এ দেখো কোন কোড hot, তাহলে compile করো ও optimize করো। V8 এভাবে JavaScript দ্রুত করে।</p>
<p class="scene-setting en">Yusuf (Door 6) taught you register allocation. But a problem — static compilation treats all code equally. Which code runs often (hot), which runs once (cold) — it doesn't know. JIT (Just-In-Time) compilation answers — at runtime, see which code is hot, then compile and optimize. V8 does this to make JavaScript fast.</p>

<div class="dialogue"><strong>নবীকরণ-কারিগর জাকারিয়া:</strong> JIT দুই phase-এ কাজ কর। প্রথম phase: interpret — প্রতিটি লাইন ধীরে পড়ো। একই কোড বারবার চললে? Hot path! দ্বিতীয় phase: compile করো optimized machine code। V8-এ Ignition (interpreter) আর TurboFan (optimizer)। JVM-এ C1 (fast compile) আর C2 (aggressive optimize)। PyPy-তে tracing JIT — hot loop trace করে optimize।</div>
<div class="dialogue en"><strong>Renewal Artisan Zakariya:</strong> JIT works in two phases. First: interpret — read each line slowly. Same code runs repeatedly? Hot path! Second: compile to optimized machine code. V8 has Ignition (interpreter) and TurboFan (optimizer). JVM has C1 (fast compile) and C2 (aggressive). PyPy has tracing JIT — traces hot loops and optimizes.</div>

<div class="code-block">— JIT in Action (Python dis) —

  # Python: interpreter (বেশিরভাগ)
  # PyPy: JIT compiler
  # $ pypy3 script.py — CPython এর ৫-১০x দ্রুত!

  # V8 (JavaScript) এর JIT:
  # function sum(n) {
  #     let s = 0;
  #     for (let i = 0; i < n; i++) s += i;
  #     return s;
  # }
  # প্রথম call: interpret (ধীর)
  # ১০০০ বার call হলে: TurboFan compile (দ্রুত!)

  # JVM HotSpot:
  # -XX:+PrintCompilation দেখায় কোন method JIT-হয়েছে
  $ java -XX:+PrintCompilation MyApp
  #    42  b   java.lang.String::hashCode (5 bytes)
  #    58  %   MyApp::hotLoop @ 18 (30 bytes)

  # Deoptimization:
  # যদি assumption ভাঙে (type change), JIT code বাদ দাও
  # → আবার interpret → আবার JIT
  — AOT vs JIT:
  — AOT: শুরু থেকে দ্রুত, কিন্তু profile ছাড়া
  — JIT: শুরুতে ধীর, কিন্তু যত চলে তত দ্রুত</div>

<div class="verse">إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنفُسِهِمْ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আল্লাহ কোনো সম্প্রদায়ের অবস্থা পরিবর্তন করেন না যতক্ষণ না তারা নিজেদের অবস্থা পরিবর্তন করে।" — কুরআন ১৩:১১</div>

<p class="scene-setting">তাজদিদ — নবীকরণ। JIT সেই নবীকরণের রূপ — প্রোগ্রাম runtime-এ নিজেকে পরিবর্তন করে, উন্নত করে। "নিজেদের অবস্থা পরিবর্তন করো" — JIT এটাই করে। hot path detect করে, নিজেকে optimize করে। স্থির নয় — গতিশীল।</p>
<p class="scene-setting en">Tajdid — renewal. JIT is the form of that renewal — the program changes itself at runtime, improves itself. "Change your own state" — JIT does exactly this. Detects hot paths, optimizes itself. Not static — dynamic.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৮ (Operating Systems) Door ৩ (Process):</strong> virtual memory ও process isolation। JIT এর জন্য memory protection দরকার। Book ৪৫ Door ৬: register allocation JIT-এও প্রযোজ্য।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect width="580" height="250" fill="#0f172a"/>
<defs><marker id="arrCP7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
<text x="290" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">JIT Compilation Pipeline</text>
<rect x="20" y="70" width="120" height="50" rx="8" fill="#451a0a" stroke="#22d3ee" stroke-width="2"/>
<text x="80" y="92" text-anchor="middle" fill="#7dd3fc" font-size="9">Interpret</text>
<text x="80" y="106" text-anchor="middle" fill="#7dd3fc" font-size="10">(slow)</text>
<rect x="190" y="70" width="130" height="50" rx="8" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
<text x="255" y="92" text-anchor="middle" fill="#fcd34d" font-size="9">Hot Path Detected</text>
<text x="255" y="106" text-anchor="middle" fill="#fcd34d" font-size="10">(counter &gt; threshold)</text>
<rect x="370" y="70" width="190" height="50" rx="8" fill="#451a0a" stroke="#22c55e" stroke-width="2"/>
<text x="465" y="92" text-anchor="middle" fill="#4ade80" font-size="9">Optimized Machine Code</text>
<text x="465" y="106" text-anchor="middle" fill="#4ade80" font-size="10">(TurboFan / C2) - fast</text>
<line x1="140" y1="95" x2="186" y2="95" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP7)"/>
<line x1="320" y1="95" x2="366" y2="95" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP7)"/>
<rect x="190" y="160" width="220" height="40" rx="8" fill="#451a0a" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="300" y="178" text-anchor="middle" fill="#ef4444" font-size="9">Deoptimization</text>
<text x="300" y="191" text-anchor="middle" fill="#ef4444" font-size="10">(assumption broken &rarr; re-interpret)</text>
<path d="M 465 120 Q 465 140 300 158" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrCP7)"/>
<path d="M 190 180 Q 130 150 80 122" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrCP7)"/>
</svg>
</div>
<div class="svg-caption">JIT: প্রথমে interpret, hot path ধরা পড়লে optimize। assumption ভাঙলে deoptimize করে আবার interpret।</div>

<div class="secret-box">⚡ <strong>JIT = runtime-এ নিজেকে উন্নত করা।</strong> তাজদিদ। কিন্তু কোন কোড hot? CPU-কে অনুমান করতে হয় — কোন branch নেওয়া হবে? সেই অনুমানের শিল্প — branch prediction। পরের দরজায়।</div>`,
  senior: {
    title: "JIT Compilation এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">JIT</td><td>Just-In-Time — runtime compilation</td></tr>
<tr><td class="hl">AOT</td><td>Ahead-Of-Time — compile আগেই</td></tr>
<tr><td class="hl">V8</td><td>Ignition + TurboFan</td></tr>
<tr><td class="hl">JVM HotSpot</td><td>C1 (fast) + C2 (aggressive)</td></tr>
<tr><td class="hl">PyPy</td><td>Tracing JIT — hot loop trace</td></tr>
<tr><td class="hl">Deoptimization</td><td>assumption ভাঙলে fallback</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "🎯",
  color: "#f97316",
  name: "অনুমানের শিল্প",
  subtitle: "The Art of Guessing",
  tech: "Branch Prediction — 1-bit/2-bit predictors, branch target buffer, speculative execution, Spectre vulnerability",
  spirit: "যাকিন — নিশ্চয়তা, অনুমান থেকে দ্রুততা",
  secret: "CPU শাখা অনুমান করে — if-else-এ কোন পথ? সঠিক অনুমানে দ্রুততা, ভুলে penalty। 2-bit predictor: দুইবার ভুল হলে বদলাও। Speculative execution — অনুমানের উপর কাজ শুরু।",
  recall: {
    q: " Branch prediction কী? Speculative execution কী?",
    qen: "What is branch prediction? What is speculative execution?",
    a: "CPU if-else-এ অনুমান করে কোন branch নেবে। সঠিক → দ্রুত। ভুল → pipeline flush penalty। Speculative: অনুমানের উপর কাজ শুরু করে।",
    aen: "CPU guesses which branch in if-else. Correct → fast. Wrong → pipeline flush penalty. Speculative: starts work based on prediction."
  },
  story: `<p class="scene-setting">জাকারিয়া (Door ৭) তোমাকে JIT শিখিয়েছেন। কিন্তু CPU-তে একটি গভীর সমস্যা — pipeline। একটি instruction চলাকালীন পরেরটা শুরু হয়। কিন্তু if-else-এ কোন শাখা? CPU অপেক্ষা করতে পারে না — অনুমান করে! সঠিক হলে দ্রুততা, ভুল হলে pipeline flush — penalty। এটাই branch prediction।</p>
<p class="scene-setting en">Zakariya (Door 7) taught you JIT. But the CPU has a deeper problem — pipeline. One instruction starts before the previous finishes. But in if-else, which branch? The CPU can't wait — it guesses! Correct means speed, wrong means pipeline flush — penalty. This is branch prediction.</p>

<div class="dialogue"><strong>অনুমান-কারিগর লুতফি:</strong> ১-bit predictor: গতবার যা হয়েছিল, এবারও তাই হবে। সহজ কিন্তু ভুল হয়। ২-bit predictor: দুইবার ভুল হলে বদলাও — বেশি স্থিতিশীল। Branch target buffer: কোন address-এ যাবে তাও মনে রাখে। Speculative execution: অনুমানের উপর কাজ শুরু করে — সঠিক হলে ফল ব্যবহার, ভুল হলে বাদ। Spectre (২০১৮) — এই speculative execution-এর দুর্বলতা থেকে!</div>
<div class="dialogue en"><strong>Guessing Artisan Lutfi:</strong> 1-bit predictor: last time's result repeats. Simple but error-prone. 2-bit predictor: change only after two wrong — more stable. Branch target buffer: remembers which address. Speculative execution: starts work on prediction — correct means use results, wrong means discard. Spectre (2018) — exploited this speculative execution!</div>

<div class="code-block">— Branch Prediction প্রভাব দেখো —

  # Sorted array (predictable branch)
  arr = list(range(1000000))
  sum = 0
  for x in arr:
      if x > 500000:
          sum += x
  # দ্রুত — branch predictor সঠিক অনুমান!

  # Random array (unpredictable branch)
  import random
  arr2 = arr[:]
  random.shuffle(arr2)
  sum = 0
  for x in arr2:
      if x > 500000:
          sum += x
  # ধীর! branch predictor ভুল অনুমান

  # Branchless (সবচেয়ে দ্রুত):
  sum = 0
  for x in arr2:
      sum += (x > 500000) * x  # no branch!

  — gcc branch prediction hints:
  __builtin_expect((condition), 1)  // likely true
  — C++20: [[likely]] / [[unlikely]]

  — Spectre attack (2018):
  — speculative execution leaks memory
  — kernel patches: retpoline, KPTI</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Spectre/Meltdown (২০১৮):</strong> Speculative execution-এর দুর্বলতা! CPU অনুমানে ভুল শাখায় memory পড়ে — তারপর বাদ দেয়। কিন্তু cache-এ থেকে যায়। আক্রমণকারী cache timing দিয়ে গোপন ডেটা পড়ে! এটাই Spectre — branch prediction-এর dark side।</div></div>

<div class="verse">عَالِمُ الْغَيْبِ فَلَا يُظْهِرُ عَلَى غَيْبِهِ أَحَدًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"অগোচর বিষয়ে জ্ঞাতী — তিনি তাঁর গায়েবের জ্ঞান কারো কাছে প্রকাশ করেন না।" — কুরআন ৭২:২৬</div>

<p class="scene-setting">যাকিন — নিশ্চয়তা। Branch prediction অনুমানের উপর নির্ভর — কিন্তু অনুমান ভুল হতে পারে। সত্যিকারের নিশ্চয়তা শুধু গায়েব জানার কাছে। CPU-কে অনুমান করতে হয় — কারণ সে গায়েব জানে না। Spectre দেখায় — অনুমানের শক্তি ও দুর্বলতা একসাথে।</p>
<p class="scene-setting en">Yaqeen — certainty. Branch prediction relies on guessing — but guesses can be wrong. True certainty belongs only to the Knower of the unseen. The CPU must guess — because it doesn't know the future. Spectre shows — the power and weakness of prediction together.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৮ (Operating Systems) Door ৪ (Pipeline):</strong> CPU pipeline ও hazard। Book ৪৬ (Cryptography) Door ৮: Spectre mitigation — branch target injection।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect width="580" height="250" fill="#0f172a"/>
<defs><marker id="arrCP8a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#22c55e"/></marker></defs>
<defs><marker id="arrCP8b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#ef4444"/></marker></defs>
<text x="290" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">Branch Prediction</text>
<polygon points="240,60 360,60 300,110" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
<text x="300" y="82" text-anchor="middle" fill="#fcd34d" font-size="9">if (cond)</text>
<text x="300" y="96" text-anchor="middle" fill="#fcd34d" font-size="8">?</text>
<line x1="265" y1="92" x2="120" y2="160" stroke="#22c55e" stroke-width="2.5" marker-end="url(#arrCP8a)"/>
<text x="150" y="120" fill="#4ade80" font-size="9">predicted</text>
<text x="150" y="132" fill="#4ade80" font-size="9">(taken)</text>
<line x1="335" y1="92" x2="480" y2="160" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arrCP8b)"/>
<text x="430" y="120" fill="#ef4444" font-size="9">not predicted</text>
<text x="430" y="132" fill="#ef4444" font-size="9">(flush if wrong)</text>
<rect x="50" y="165" width="140" height="36" rx="6" fill="#451a0a" stroke="#22c55e" stroke-width="2"/>
<text x="120" y="187" text-anchor="middle" fill="#4ade80" font-size="9">speculative exec</text>
<rect x="410" y="165" width="140" height="36" rx="6" fill="#451a0a" stroke="#ef4444" stroke-width="2"/>
<text x="480" y="187" text-anchor="middle" fill="#ef4444" font-size="9">pipeline flush</text>
<text x="290" y="232" text-anchor="middle" fill="#fcd34d" font-size="9">2-bit predictor: 2 mistakes before changing guess</text>
</svg>
</div>
<div class="svg-caption">Branch prediction: CPU if-else-এ অনুমান করে কোন পথ। সঠিক হলে দ্রুত, ভুল হলে pipeline flush penalty।</div>

<div class="secret-box">🎯 <strong>Branch prediction = অনুমানের শিল্প।</strong> সঠিক → দ্রুত, ভুল → penalty। কিন্তু প্রোগ্রামের একটি বড় সমস্যা — মেমরি পরিচালনা। কে বরাদ্দ করবে, কে মুছবে? সেই উত্তর — garbage collection। পরের দরজায়।</div>`,
  senior: {
    title: "Branch Prediction এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">1-bit Predictor</td><td>গত ফল পুনরাবৃত্তি</td></tr>
<tr><td class="hl">2-bit Predictor</td><td>২ ভুল পরে পরিবর্তন</td></tr>
<tr><td class="hl">Speculative Exec</td><td>অনুমানে কাজ শুরু</td></tr>
<tr><td class="hl">Pipeline Flush</td><td>ভুল অনুমান → penalty</td></tr>
<tr><td class="hl">Spectre (2018)</td><td>speculative exec vulnerability</td></tr>
<tr><td class="hl">Branchless</td><td>if এড়িয়ে গাণিতিক সমাধান</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "🧹",
  color: "#f97316",
  name: "নীরব পরিচ্ছন্নকারী",
  subtitle: "The Silent Sweeper",
  tech: "Garbage Collection — McCarthy 1960 (Lisp), tracing GC, generational hypothesis, mark-and-sweep, copying, GC pauses",
  spirit: "তাহারা — পরিচ্ছন্নতা, স্বয়ংক্রিয়ভাবে অদরকারি দূর",
  secret: "GC = স্বয়ংক্রিয় memory পরিচ্ছন্নকারী। ব্যবহার না হওয়া object খুঁজে বের করে মুছে। Mark-and-sweep: চিহ্ন দাও → বাকি সব মুছো। Generational: young object বেশি মারা যায়।",
  recall: {
    q: " Mark-and-sweep GC কীভাবে কাজ করে? Generational hypothesis কী?",
    qen: "How does mark-and-sweep GC work? What is the generational hypothesis?",
    a: "Mark: root থেকে reachable object চিহ্ন দাও। Sweep: চিহ্নহীন সব মুছো। Generational: বেশিরভাগ object তরুণ মারা যায় — young generation আলাদাভাবে collect।",
    aen: "Mark: mark reachable objects from roots. Sweep: delete unmarked. Generational: most objects die young — collect young generation separately."
  },
  story: `<p class="scene-setting">লুতফি (Door ৮) তোমাকে branch prediction শিখিয়েছেন। কিন্তু প্রোগ্রামে একটি বড় সমস্যা — মেমরি। C-তে তুমি malloc/free করো — ভুল করলে leak বা crash। Java, Python, Go — সব GC ব্যবহার করে। GC স্বয়ংক্রিয়ভাবে অদরকারি object খুঁজে মুছে। McCarthy ১৯৬০ সালে Lisp-এর জন্য এটা আবিষ্কার করেন।</p>
<p class="scene-setting en">Lutfi (Door 8) taught you branch prediction. But programs have a big problem — memory. In C you malloc/free — mistakes cause leaks or crashes. Java, Python, Go — all use GC. GC automatically finds unnecessary objects and deletes them. McCarthy invented this in 1960 for Lisp.</p>

<div class="dialogue"><strong>নীরব-পরিচ্ছন্নকারী আমিন:</strong> GC তিন ধাপে কাজ করে। Mark: root (stack, global) থেকে reachable সব object চিহ্ন দাও। Sweep: চিহ্নহীন সব আবর্জনা — মুছো। Compact: বাকি object গুছিয়ে বসাও। Generational hypothesis: বেশিরভাগ object তরুণ মারা যায়। তাই young generation বেশি বার পরিষ্কার করো, old generation কম। G1, ZGC, Shenandoah — modern GC যা pause কমায়।</div>
<div class="dialogue en"><strong>Silent Cleaner Amin:</strong> GC works in three steps. Mark: mark all reachable objects from roots (stack, global). Sweep: delete unmarked garbage. Compact: arrange remaining objects. Generational hypothesis: most objects die young. So clean young generation more often, old less. G1, ZGC, Shenandoah — modern GCs that reduce pause time.</div>

<div class="code-block">— Garbage Collection দেখো —

  # Python GC দেখো:
  import gc

  gc.enable()          # স্বয়ংক্রিয় GC
  gc.collect()         # manual collect
  print(gc.get_stats())
  # [{'collected': 42, 'uncollectable': 0}]

  # Reference counting (Python primary):
  import sys
  a = [1, 2, 3]
  print(sys.getrefcount(a))  # ২ (a + getrefcount arg)

  # JVM GC flags:
  $ java -XX:+UseG1GC -Xmx4g MyApp
  $ java -XX:+PrintGCDetails MyApp
  # [GC (Allocation Failure)
  #  [PSYoungGen: 76288K->10720K(87040K)]

  # Go GC:
  $ GODEBUG=gctrace=1 ./myapp
  # gc 1 @0.012s: 0%+0.0% ms clock, ...

  — GC algorithms:
  — Mark-Sweep: mark reachable, delete rest
  — Copying: copy live to new space
  — Generational: young (frequent) / old (rare)
  — ZGC: sub-millisecond pause (Java 11+)</div>

<div class="callout info"><span class="co-icon">🧹</span><div><strong>GC algorithms:</strong><br>
<strong>Mark-and-Sweep (McCarthy 1960):</strong> root থেকে reachable চিহ্ন → বাকি মুছো<br>
<strong>Copying (Cheney 1970):</strong> live object নতুন space-এ copy → পুরোনো সব মুছে যায়<br>
<strong>Generational:</strong> Young ( Eden, Survivor) → Old (Tenured)। বেশিরভাগ object young-এ মারা যায়<br>
<strong>ZGC/Shenandoah:</strong> sub-millisecond pause — concurrent GC</div></div>

<div class="verse">وَاللَّهُ يُحِبُّ الْمُطَّهِّرِينَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং আল্লাহ পবিত্রকারীদের ভালোবাসেন।" — কুরআন ৯:১০৮</div>

<p class="scene-setting">তাহারা — পরিচ্ছন্নতা। GC সেই পরিচ্ছন্নতার স্বয়ংক্রিয় রূপ। প্রোগ্রামারকে মুছতে হয় না — GC নীরবে পরিষ্কার করে। আবর্জনা জমলে সিস্টেম অসুস্থ — GC সেই অসুস্থতা প্রতিরোধ করে। পবিত্রতা শরীরের জন্য যেমন, GC মেমরির জন্য তেমন।</p>
<p class="scene-setting en">Tahara — cleanliness. GC is the automated form of that cleanliness. The programmer doesn't need to clean — GC does it silently. Garbage accumulation makes the system sick — GC prevents that illness. As purity is for the body, GC is for memory.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৮ (Operating Systems) Door ৫ (Memory):</strong> virtual memory, paging, malloc/free। GC সেই malloc/free-এর স্বয়ংক্রিয় রূপ। Book ৪৫ Door ৯: GC debugging।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect width="580" height="250" fill="#0f172a"/>
<defs><marker id="arrCP9" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
<text x="290" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">GC Mark-and-Sweep</text>
<rect x="30" y="100" width="80" height="40" rx="8" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
<text x="70" y="116" text-anchor="middle" fill="#fcd34d" font-size="9">Root</text>
<text x="70" y="128" text-anchor="middle" fill="#fcd34d" font-size="10">(stack/global)</text>
<circle cx="210" cy="75" r="22" fill="#451a0a" stroke="#22c55e" stroke-width="2.5"/>
<text x="210" y="72" text-anchor="middle" fill="#4ade80" font-size="8">A</text>
<text x="210" y="82" text-anchor="middle" fill="#4ade80" font-size="10">mark</text>
<circle cx="210" cy="165" r="22" fill="#451a0a" stroke="#22c55e" stroke-width="2.5"/>
<text x="210" y="162" text-anchor="middle" fill="#4ade80" font-size="8">B</text>
<text x="210" y="172" text-anchor="middle" fill="#4ade80" font-size="10">mark</text>
<circle cx="350" cy="120" r="22" fill="#451a0a" stroke="#22c55e" stroke-width="2.5"/>
<text x="350" y="117" text-anchor="middle" fill="#4ade80" font-size="8">C</text>
<text x="350" y="127" text-anchor="middle" fill="#4ade80" font-size="10">mark</text>
<circle cx="470" cy="75" r="22" fill="#451a0a" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 2"/>
<text x="470" y="72" text-anchor="middle" fill="#ef4444" font-size="8">D</text>
<text x="470" y="82" text-anchor="middle" fill="#ef4444" font-size="10">sweep</text>
<circle cx="490" cy="175" r="22" fill="#451a0a" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 2"/>
<text x="490" y="172" text-anchor="middle" fill="#ef4444" font-size="8">E</text>
<text x="490" y="182" text-anchor="middle" fill="#ef4444" font-size="10">sweep</text>
<line x1="110" y1="112" x2="188" y2="85" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP9)"/>
<line x1="110" y1="128" x2="188" y2="155" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP9)"/>
<line x1="232" y1="80" x2="328" y2="110" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrCP9)"/>
<text x="290" y="225" text-anchor="middle" fill="#fcd34d" font-size="9">reachable = marked (green), unreachable = swept (red)</text>
</svg>
</div>
<div class="svg-caption">Mark-Sweep: root থেকে reachable object চিহ্নিত (সবুজ), বাকি সব আবর্জনা হিসেবে মুছে ফেলা (লাল)।</div>

<div class="secret-box">🧹 <strong>GC = স্বয়ংক্রিয় মেমরি পরিচ্ছন্নকারী।</strong> Mark → Sweep → Compact। Generational hypothesis। কিন্তু GC শুধু মেমরি পরিষ্কার করে — type যাচাই করে না। কোন variable কোন type? সেই যাচাই — type inference। শেষ দরজায়।</div>`,
  senior: {
    title: "Garbage Collection এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">McCarthy (1960)</td><td>Lisp GC-র জনক</td></tr>
<tr><td class="hl">Mark-and-Sweep</td><td>reachable চিহ্ন → বাকি মুছো</td></tr>
<tr><td class="hl">Copying</td><td>live object copy → পুরোনো মুছে যায়</td></tr>
<tr><td class="hl">Generational</td><td>young (frequent) / old (rare)</td></tr>
<tr><td class="hl">ZGC</td><td>sub-ms pause — Java 11+</td></tr>
<tr><td class="hl">Root</td><td>stack + global = GC root</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🔮",
  color: "#f97316",
  name: "টাইপের ওরাকল",
  subtitle: "The Type Oracle",
  tech: "Type Inference — Hindley-Milner (1978), Algorithm W, Rust traits, TypeScript, ML, synthesis of all compiler concepts",
  spirit: "হিকমাহ — প্রয়োগিক জ্ঞান, সব পর্যায়ের সমন্বয়",
  secret: "নয়টি দরজা, নয়জন শিক্ষক — lexer থেকে type inference। কম্পাইলার = ভাষা অনুবাদক। মানুষের ভাষা (কোড) থেকে মেশিনের ভাষা (binary)। প্রতিটি ধাপ একটি অনুবাদ।",
  recall: {
    q: " Hindley-Milner type inference কী? কম্পাইলারের প্রধান ধাপ কী কী?",
    qen: "What is Hindley-Milner type inference? What are the main stages of a compiler?",
    a: "HM: কোনো type annotation ছাড়া compiler স্বয়ং type বের করে (ML, Haskell, Rust)। কম্পাইলার ধাপ: lex → parse → semantic → optimize → codegen।",
    aen: "HM: without type annotations, the compiler infers types (ML, Haskell, Rust). Compiler stages: lex → parse → semantic → optimize → codegen."
  },
  story: `<p class="scene-setting">তুমি নয়টি দরজা পেরিয়েছো। দাউদ lexer, বেলাল parser, সালমান semantic, ইলিয়াস SSA, রাহিম optimization, ইউসুফ register, জাকারিয়া JIT, লুতফি branch prediction, আমিন GC। এখন শেষ শিক্ষক — type inference। তুমি লেখো <code>id = lambda x: x</code>। কোনো annotation নেই। কিন্তু compiler জানে — id: int → int বা str → str। কীভাবে? Hindley-Milner Algorithm W।</p>
<p class="scene-setting en">You have passed nine doors. Dawud lexer, Bilal parser, Salman semantic, Ilyas SSA, Rahim optimization, Yusuf register, Zakariya JIT, Lutfi branch prediction, Amin GC. Now the last teacher — type inference. You write <code>id = lambda x: x</code>. No annotation. But the compiler knows — id: int → int or str → str. How? Hindley-Milner Algorithm W.</p>

<div class="callout info"><span class="co-icon">🔮</span><div><strong>সম্পূর্ণ কম্পাইলার — নয় দরজার সমন্বয়:</strong><br>
<strong>Door ১ — দাউদ (Lexer):</strong> অক্ষর → token<br>
<strong>Door ২ — বেলাল (Parser):</strong> token → AST গাছ<br>
<strong>Door ৩ — সালমান (Semantic):</strong> অর্থ যাচাই, type check<br>
<strong>Door ৪ — ইলিয়াস (SSA):</strong> এক variable, এক assignment<br>
<strong>Door ৫ — রাহিম (Optimization):</strong> dead code বাদ, constant fold<br>
<strong>Door ৬ — ইউসুফ (Register):</strong> graph coloring দিয়ে রেজিস্টার বরাদ্দ<br>
<strong>Door ৭ — জাকারিয়া (JIT):</strong> runtime-এ নিজেকে উন্নত<br>
<strong>Door ৮ — লুতফি (Branch):</strong> CPU অনুমান শিল্প<br>
<strong>Door ৯ — আমিন (GC):</strong> স্বয়ংক্রিয় মেমরি পরিষ্কার</div></div>

<div class="code-block">— সম্পূর্ণ compilation pipeline দেখো —

  # Python bytecode (dis module):
  $ python3 -c "
  import dis
  dis.dis(lambda x: x + 1)
  "
  #   0 LOAD_FAST     0 (x)
  #   2 LOAD_CONST    1 (1)
  #   4 BINARY_ADD
  #   6 RETURN_VALUE

  # C compilation stages:
  $ gcc -O2 hello.c -o hello
  # 1. Preprocessor:  cpp  → hello.i
  # 2. Compiler:      cc1  → hello.s (assembly)
  # 3. Assembler:     as   → hello.o (object)
  # 4. Linker:        ld   → hello (executable)

  # Rust type inference:
  fn id<T>(x: T) -> T { x }  // generic — যেকোনো type
  let s = id("hello");        // s: &str (inferred!)
  let n = id(42);             // n: i32 (inferred!)

  # TypeScript:
  function greet(name = "World") {
      return "Hello, " + name;  // string inferred
  }</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">শিক্ষক</div></div>
<div class="stat-card"><div class="sc-num">৬০+</div><div class="sc-label">বছরের গবেষণা</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">প্রোগ্রাম</div></div>
<div class="stat-card"><div class="sc-num">১</div><div class="sc-label">কম্পাইলার</div></div>
</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">নূর — আলো। কম্পাইলার হলো সেই আলো যা মানুষের ভাষাকে মেশিনের ভাষায় রূপান্তর করে। বাইরে থেকে <code>gcc hello.c</code> সহজ মনে হয় — কিন্তু ভেতরে নয়টি স্তর কাজ করছে। দাউদের lexer, বেলালের parser, সালমানের semantic, ইলিয়াসের SSA, রাহিমের optimization, ইউসুফের register, জাকারিয়ার JIT, লুতফির branch prediction, আমিনের GC — সব মিলে একটি অনুবাদ। মানুষের চিন্তা থেকে মেশিনের ক্রিয়া।</p>
<p class="scene-setting en">Nur — light. The compiler is the light that transforms human language into machine language. Outside, <code>gcc hello.c</code> seems simple — but inside, nine layers work. Dawud's lexer, Bilal's parser, Salman's semantic, Ilyas's SSA, Rahim's optimization, Yusuf's register, Zakariya's JIT, Lutfi's branch prediction, Amin's GC — together one translation. From human thought to machine action.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ৪৮ (Discrete Math) → DFA, graph coloring। Book ৪১ (Theory of Computation) → automata, Turing machine। Book ৩৮ (OS) → memory, pipeline। Book ৪০ (Software Engineering) → compilation tools। এই বই সবার সংযোগ।</div></div>

<div class="checklist">
<li>📝 Python regex দিয়ে একটি simple lexer বানাও</li>
<li>🌲 <code>ast.dump(ast.parse('x=1+2'))</code> দিয়ে AST দেখো</li>
<li>🔍 Symbol table বানাও একটি simple language-এর জন্য</li>
<li>🔗 SSA form একটি if-else code-এ লেখো</li>
<li>🎨 networkx দিয়ে interference graph বানাও</li>
<li>⚡ PyPy দিয়ে Python code চালাও — গতি তুলনা করো</li>
<li>🧹 Python gc module দিয়ে GC stats দেখো</li>
<li>📖 "Crafting Interpreters" — Robert Nystrom পড়ো</li>
<li>📖 "Compilers: Principles" — Aho (Dragon Book) পড়ো</li>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<rect width="580" height="250" fill="#0f172a"/>
<defs><marker id="arrCP10" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
<text x="290" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">Hindley-Milner Type Inference</text>
<rect x="30" y="95" width="130" height="44" rx="8" fill="#451a0a" stroke="#22d3ee" stroke-width="2"/>
<text x="95" y="115" text-anchor="middle" fill="#7dd3fc" font-size="9">id = x =&gt; x</text>
<text x="95" y="130" text-anchor="middle" fill="#7dd3fc" font-size="10">no annotation</text>
<rect x="225" y="95" width="130" height="44" rx="8" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
<text x="290" y="113" text-anchor="middle" fill="#fcd34d" font-size="9">Unify</text>
<text x="290" y="128" text-anchor="middle" fill="#fcd34d" font-size="10">Algorithm W</text>
<rect x="420" y="55" width="140" height="38" rx="8" fill="#451a0a" stroke="#22c55e" stroke-width="2"/>
<text x="490" y="73" text-anchor="middle" fill="#4ade80" font-size="9">id : int =&gt; int</text>
<text x="490" y="86" text-anchor="middle" fill="#4ade80" font-size="10">id(42)</text>
<rect x="420" y="140" width="140" height="38" rx="8" fill="#451a0a" stroke="#22c55e" stroke-width="2"/>
<text x="490" y="158" text-anchor="middle" fill="#4ade80" font-size="9">id : str =&gt; str</text>
<text x="490" y="171" text-anchor="middle" fill="#4ade80" font-size="10">id("hi")</text>
<line x1="160" y1="117" x2="221" y2="117" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP10)"/>
<path d="M 355 105 Q 390 80 418 74" fill="none" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP10)"/>
<path d="M 355 130 Q 390 155 418 159" fill="none" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrCP10)"/>
<text x="290" y="210" text-anchor="middle" fill="#fcd34d" font-size="9">&alpha; -&gt; &alpha;  (polymorphic — any type T)</text>
</svg>
</div>
<div class="svg-caption">Hindley-Milner: কোনো annotation ছাড়া compiler স্বয়ং type বের করে — id যেকোনো T -&gt; T।</div>

<div class="secret-box">🔮 <strong>কম্পাইলার = ভাষা অনুবাদক।</strong> নয়টি দরজা, নয়জন শিক্ষক, একটি রূপান্তর। মানুষের ভাষা থেকে মেশিনের ভাষা। প্রতিটি <code>gcc</code>, প্রতিটি <code>python</code>, প্রতিটি <code>rustc</code> — এই নয় স্তরের ফল। এখন তুমি জানো — শুধু কীভাবে নয়, কেন। কেন lexer DFA ব্যবহার করে। কেন AST গাছ। কেন SSA প্রতিটি variable একবার। কেন graph coloring register বরাদ্দ করে। কেন JIT runtime-ে optimize করে। কেন GC নীরবে পরিষ্কার করে। এটাই হিকমাহ — কম্পাইলারের প্রয়োগিক জ্ঞান।</div>`,
  senior: {
    title: "সম্পূর্ণ কম্পাইলার এক নজরে",
    body: `<table class="kv-table"><tr><th>স্তর</th><th>কী</th><th>দরজা</th></tr>
<tr><td class="hl">Lexer</td><td>অক্ষর → token (DFA)</td><td>১</td></tr>
<tr><td class="hl">Parser</td><td>token → AST গাছ</td><td>২</td></tr>
<tr><td class="hl">Semantic</td><td>type ও scope যাচাই</td><td>৩</td></tr>
<tr><td class="hl">SSA</td><td>এক variable, এক assignment</td><td>৪</td></tr>
<tr><td class="hl">Optimize</td><td>dead code, constant fold, CSE</td><td>৫</td></tr>
<tr><td class="hl">Register</td><td>graph coloring, spill</td><td>৬</td></tr>
<tr><td class="hl">JIT</td><td>runtime optimization</td><td>৭</td></tr>
<tr><td class="hl">Branch</td><td>prediction, speculative</td><td>৮</td></tr>
<tr><td class="hl">GC</td><td>mark-sweep, generational</td><td>৯</td></tr>
<tr><td class="hl">Type Inference</td><td>Hindley-Milner, Algorithm W</td><td>১০</td></tr></table>`
  }
});
