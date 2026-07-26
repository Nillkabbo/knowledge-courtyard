// ═══════════════════════════════════════════
// DOOR 6 — The Map Colorist (Register Allocation)
// ═══════════════════════════════════════════
doors.push({
  num: 6,
  icon: "🎨",
  color: "#ef4444",
  tagline: "মানচিত্র রং করা — Map Coloring",
  name: "The Map Colorist",
  secret: "Register allocation = graph coloring। NP-complete! Chaitin-Briggs heuristic approximate করে।",
  story: `<p class="scene-setting">তোমার CPU তে মাত্র ৩২টা register। কিন্তু তোমার কোডে শত শত variable। কম্পাইলার কীভাবে ঠিক করে কে কোন register পাবে? এটা একটা বিখ্যাত সমস্যা — graph coloring! দুটি variable যদি একই সময়ে live থাকে (interfere), তারা আলাদা register পাবে — ঠিক যেমন পাশাপাশি দুটি দেশ আলাদা রং পায়। আর এটা NP-complete!</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎨 Register Allocation = Graph Coloring (NP-Complete!)</text>

  <!-- Interference Graph -->
  <text x="290" y="50" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="600">Interference Graph: connected = simultaneously live</text>

  <!-- Node a (red) -->
  <circle cx="150" cy="120" r="22" fill="#dc2626" stroke="#f87171" stroke-width="2"/>
  <text x="150" y="116" text-anchor="middle" fill="#fee2e2" font-size="10" font-weight="700">a</text>
  <text x="150" y="128" text-anchor="middle" fill="#fca5a5" font-size="7">R1</text>

  <!-- Node b (blue) -->
  <circle cx="250" cy="90" r="22" fill="#2563eb" stroke="#60a5fa" stroke-width="2"/>
  <text x="250" y="86" text-anchor="middle" fill="#dbeafe" font-size="10" font-weight="700">b</text>
  <text x="250" y="98" text-anchor="middle" fill="#93c5fd" font-size="7">R2</text>

  <!-- Node c (green) -->
  <circle cx="350" cy="120" r="22" fill="#16a34a" stroke="#4ade80" stroke-width="2"/>
  <text x="350" y="116" text-anchor="middle" fill="#dcfce7" font-size="10" font-weight="700">c</text>
  <text x="350" y="128" text-anchor="middle" fill="#86efac" font-size="7">R1</text>

  <!-- Node d (purple) -->
  <circle cx="200" cy="200" r="22" fill="#9333ea" stroke="#a855f7" stroke-width="2"/>
  <text x="200" y="196" text-anchor="middle" fill="#f3e8ff" font-size="10" font-weight="700">d</text>
  <text x="200" y="208" text-anchor="middle" fill="#c084fc" font-size="7">R3</text>

  <!-- Node e (red, shares with a? no, different) -->
  <circle cx="300" cy="200" r="22" fill="#dc2626" stroke="#f87171" stroke-width="2"/>
  <text x="300" y="196" text-anchor="middle" fill="#fee2e2" font-size="10" font-weight="700">e</text>
  <text x="300" y="208" text-anchor="middle" fill="#fca5a5" font-size="7">R1</text>

  <!-- Edges (interference) -->
  <line x1="170" y1="115" x2="230" y2="95" stroke="#475569" stroke-width="2"/>
  <line x1="270" y1="95" x2="330" y2="115" stroke="#475569" stroke-width="2"/>
  <line x1="170" y1="135" x2="185" y2="180" stroke="#475569" stroke-width="2"/>
  <line x1="330" y1="135" x2="315" y2="180" stroke="#475569" stroke-width="2"/>
  <line x1="220" y1="200" x2="280" y2="200" stroke="#475569" stroke-width="2"/>
  <line x1="240" y1="105" x2="290" y2="180" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,2"/>

  <text x="290" y="250" text-anchor="middle" fill="#e2e8f0" font-size="9">a-b interfere (different colors: R1≠R2)</text>
  <text x="290" y="265" text-anchor="middle" fill="#e2e8f0" font-size="9">a-c DON'T interfere → share R1! ✅</text>
  <text x="290" y="280" text-anchor="middle" fill="#e2e8f0" font-size="9">d-e interfere → different colors</text>

  <rect x="80" y="295" width="420" height="35" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="290" y="315" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="600">⚠️ Optimal coloring = NP-complete! Chaitin-Briggs heuristic approximates. Spill = RAM-এ store।</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Register allocation = graph coloring। Interfering variables আলাদা color (register)। শেয়ার করতে পারে যারা overlap করে না। NP-complete!</div>

<div class="code-block"><div class="code-title">🎨 Door 6 — Real Register Allocation: x86 Assembly</div>
<pre><code>// reg.c — 4 variables, but x86 has limited registers
int f(int a, int b, int c, int d) {
    int x = a + b;    // x live until return
    int y = c + d;    // y live until return
    int z = x * y;    // z live until return
    return x + y + z;
}

# -O0 keeps everything on the stack (RAM):
$ gcc -S -O0 reg.c -o reg_O0.s
$ grep -c 'movl.*rsp' reg_O0.s
   12   # lots of stack spills

# -O2 allocates registers via graph coloring:
$ gcc -S -O2 reg.c -o reg_O2.s
$ grep -E 'eax|ebx|ecx|edx' reg_O2.s
    addl    %edx, %eax    # x = a+b in eax
    addl    %ecx, %eax    # +c
    addl    %edi, %eax    # +d
    imull   %edx, %eax    # x*y
    ret                   # no spills!</code></pre>
<pre><code># View the register allocator's interference graph:
$ gcc -O2 -fdump-rtl-ra reg.c -o /dev/null
$ cat reg.c.5016r.ra

  ; a -&gt; conflicts with: b c d
  ; b -&gt; conflicts with: a c d
  ; Hard regs used: ax cx dx (3 of 6 available)
  ; Spills: 0

# Chaitin-Briggs algorithm:
#   1. Build interference graph (who's live at same time)
#   2. Simplify: remove nodes with degree &lt; K (K=#registers)
#   3. If stuck -&gt; spill a variable to RAM
#   4. Select: assign colors (registers) in reverse order</code></pre>
<span class="code-note">💡 <code>-O0</code> এ variable গুলো stack এ থাকে (ধীর)। <code>-O2</code> তে graph coloring দিয়ে register allocate হয় (দ্রুত)।</span>
</div>

<div class="dialogue"><strong>চাইটিন:</strong> আমি গ্রেগরি চাইটিন। ১৯৮১ সালে IBM-এ আমি register allocation কে graph coloring সমস্যা হিসেবে formalize করেছিলাম। প্রতিটা variable একটা node। দুটি variable যদি একই সময়ে live থাকে, তাদের মধ্যে edge। এখন এই graph কে কম রং দিয়ে color করতে হয় যাতে adjacent node গুলো আলাদা রং পায়। কিন্তু এটা NP-complete! বড় program এ optimal solution অসম্ভব। তাই heuristic ব্যবহার করি — Chaitin-Briggs algorithm। Register শেষ হলে spill — RAM এ store করতে হয়। ধীর কিন্তু correct।</div>`,
  recall: [
    { q: "Register allocation কেন NP-complete?", a: "Graph coloring সবসময় সবচেয়ে কম রং দিয়ে করা NP-complete। Variable সংখ্যা বড় হলে brute force অসম্ভব।" },
    { q: "Spilling কী?", a: "যখন register শেষ হয়ে যায়, কিছু variable কে RAM-এ store করা হয়। ধীর কিন্তু correct। Chaitin-Briggs কোন variable spill করবে সেটা heuristic দিয়ে ঠিক করে।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 7 — The Self-Rewriter (CPython)
// ═══════════════════════════════════════════
doors.push({
  num: 7,
  icon: "🐍",
  color: "#fbbf24",
  tagline: "নিজেকে পরিবর্তন — Self-Rewriting",
  name: "The Self-Rewriter",
  secret: "Python 3.11+ নিজের bytecode পরিবর্তন করে! Hot code কে specialize করে — C-speed এ চলে।",
  story: `<p class="scene-setting">তুমি ভাবো Python "just interpreted" — source code সরাসরি চলে। ভুল! CPython আসলে compiler আর interpreter দুটোই। প্রথমে source কে bytecode এ compile করে (<code>__pycache__</code>)। তারপর bytecode কে interpret করে। কিন্তু Python 3.11+ এ আরও জাদু আছে — adaptive specialization। Hot code দেখে, bytecode পরিবর্তন করে, C-speed এ চালায়!</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrPy" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24"/></marker></defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🐍 CPython Pipeline: Source → Bytecode → Adaptive → Execute</text>

  <rect x="20" y="50" width="120" height="45" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="80" y="72" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Source Code</text>
  <text x="80" y="86" text-anchor="middle" fill="#fcd34d" font-size="7" font-family="monospace">def f(x): return x*2.0</text>

  <line x1="140" y1="72" x2="165" y2="72" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrPy)"/>

  <rect x="170" y="50" width="120" height="45" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="230" y="72" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Compile</text>
  <text x="230" y="86" text-anchor="middle" fill="#bae6fd" font-size="7">→ .pyc bytecode</text>

  <line x1="290" y1="72" x2="315" y2="72" stroke="#0ea5e9" stroke-width="1.5" marker-end="url(#arrPy)"/>

  <rect x="320" y="50" width="120" height="45" rx="8" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
  <text x="380" y="72" text-anchor="middle" fill="#fdba74" font-size="10" font-weight="700">PVM Execute</text>
  <text x="380" y="86" text-anchor="middle" fill="#fb923c" font-size="7">BINARY_OP × 8</text>

  <line x1="440" y1="72" x2="465" y2="72" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrPy)"/>

  <!-- Adaptive Specialization -->
  <rect x="470" y="50" width="90" height="45" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="515" y="68" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">🔥 HOT!</text>
  <text x="515" y="82" text-anchor="middle" fill="#86efac" font-size="7">Specialize</text>

  <!-- Specialization detail -->
  <rect x="20" y="120" width="540" height="90" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="290" y="142" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">PEP 659: Adaptive Specialization (Python 3.11+)</text>

  <rect x="40" y="155" width="220" height="22" rx="4" fill="#7c2d12" stroke="#f97316" stroke-width="1"/>
  <text x="150" y="170" text-anchor="middle" fill="#fdba74" font-size="8" font-family="monospace">Generic: BINARY_OP(*, x, 2.0)</text>

  <text x="290" y="170" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">→ specialize →</text>

  <rect x="320" y="155" width="220" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="430" y="170" text-anchor="middle" fill="#4ade80" font-size="8" font-family="monospace">Specialized: BINARY_OP_MUL_FLOAT</text>

  <text x="290" y="195" text-anchor="middle" fill="#86efac" font-size="9">✅ C-speed execution! No type checking at runtime. 25% faster than 3.10.</text>

  <!-- Deopt -->
  <rect x="80" y="230" width="420" height="40" rx="8" fill="#450a0a" stroke="#dc2626" stroke-width="1.5"/>
  <text x="290" y="248" text-anchor="middle" fill="#fca5a5" font-size="9">⚠️ Type change? (int instead of float) → De-optimize → fallback to generic bytecode</text>
  <text x="290" y="262" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">Python is ALWAYS correct first, fast second</text>

  <text x="290" y="295" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="600">💡 Tip: লুপে একই type রাখলে specialize হয় — 32 কে 32.0 করলে দ্রুত!</text>
  <text x="290" y="312" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">CPython 3.13+ adds Tier 2 uop interpreter. 3.15+ experimental Copy-and-Patch JIT.</text>
</svg>
</div>
<div class="svg-caption">চিত্র: CPython = compile to bytecode → PVM interpret → 8x hot → specialize → C-speed। Type change → deopt → fallback। Python 3.11+ = ২৫% দ্রুত।</div>

<div class="code-block"><div class="code-title">🐍 Door 7 — Real CPython: Bytecode &amp; Specialization</div>
<pre><code># Python source compiles to bytecode, then PVM interprets it
&gt;&gt;&gt; def f(x):
...     return x * 2.0
...
&gt;&gt;&gt; import dis
&gt;&gt;&gt; dis.dis(f)
  1           0 RESUME                   0
  2           2 LOAD_FAST                0 (x)
              4 LOAD_CONST               1 (2.0)
              6 BINARY_OP                5 (*)   # generic!
              8 RETURN_VALUE</code></pre>
<pre><code># Python 3.11+ specializes hot bytecode (PEP 659).
# After ~8 calls with floats, BINARY_OP becomes:

&gt;&gt;&gt; for _ in range(10): f(1.5)
&gt;&gt;&gt; dis.dis(f)
  2    0 LOAD_FAST                0 (x)
       2 LOAD_CONST               1 (2.0)
       4 BINARY_OP_MULTIPLY_FLOAT    # specialized! C-speed
       6 RETURN_VALUE

# Int passed? Deopt back to generic BINARY_OP:
&gt;&gt;&gt; f(3)   # type changed -&gt; deoptimize</code></pre>
<pre><code>$ python -c "import sys; print(sys.version)"
3.12.1 (main, ...) [Clang 15.0.0 ]

# Measure the speedup (3.11 vs 3.10):
$ python3.10 -m timeit "sum(range(1000))"
50000 loops: 9.8 usec/loop
$ python3.11 -m timeit "sum(range(1000))"
50000 loops: 7.1 usec/loop   # ~25% faster!</code></pre>
<span class="code-note">💡 Python শুধু interpreted নয় — compile হয়ে bytecode হয়, তারপর 3.11+ এ hot bytecode specialize হয়।</span>
</div>

<div class="dialogue"><strong>পাইথন কোর ডেভেলপার:</strong> Python 3.11 আসলে একটা বিপ্লব। আমরা "Specializing Adaptive Interpreter" (PEP 659) যোগ করেছি। যখন PVM দেখে একটা bytecode instruction বারবার চলছে (৮ বার) আর একই type এর ডেটা আসছে — সে সেই instruction কে replace করে দেয়! Generic <code>BINARY_OP</code> হয়ে যায় <code>BINARY_OP_MULTIPLY_FLOAT</code>। এটা C-speed এ চলে — type checking skip। আর এটাই কেন Python 3.11+ ২৫% দ্রুত — তুমি কোনো কোড পরিবর্তন করো নাই!</div>`,
  recall: [
    { q: "Python কি শুধু interpreted?", a: "না! CPython আসলে compiler + interpreter। Source → bytecode compile করে, তারপর bytecode interpret করে। 3.11+ এ bytecode নিজে পরিবর্তন হয় (specialization)।" },
    { q: "Python 3.11 কেন ২৫% দ্রুত?", a: "Adaptive specialization (PEP 659)। Hot bytecode instruction কে type-specific version দিয়ে replace করে — C-speed এ চলে।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 8 — The Guesser (V8 JIT)
// ═══════════════════════════════════════════
doors.push({
  num: 8,
  icon: "⚡",
  color: "#f97316",
  tagline: "অনুমানকারী — The Guesser",
  name: "The Guesser",
  secret: "V8 = ৪-tier JIT। TurboFan guess করে, wrong হলে deopt। Hidden class = shape tracking।",
  story: `<p class="scene-setting">JavaScript dynamically typed। কিন্তু V8 একে প্রায় native speed এ চালায়! কীভাবে? Speculative optimization — অনুমান করে। Object গুলোর shape track করে (hidden class)। যদি দেখে সব object একই shape, TurboFan hardcoded machine code তৈরি করে। কিন্তু ভুল অনুমান হলে — deoptimization। Optimized code ফেলে দিয়ে interpreter এ ফিরে যায়।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrV8" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#f97316"/></marker>
  <marker id="arrDeopt" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚡ V8 4-Tier Pipeline: Ignition → TurboFan → Deopt</text>

  <!-- 4 Tiers -->
  <rect x="20" y="50" width="110" height="80" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="75" y="72" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Ignition</text>
  <text x="75" y="88" text-anchor="middle" fill="#38bdf8" font-size="7">Interpreter</text>
  <text x="75" y="103" text-anchor="middle" fill="#bae6fd" font-size="7">~100x slower</text>
  <text x="75" y="118" text-anchor="middle" fill="#64748b" font-size="6">Always runs first</text>

  <line x1="130" y1="90" x2="150" y2="90" stroke="#f97316" stroke-width="2" marker-end="url(#arrV8)"/>
  <text x="140" y="83" text-anchor="middle" fill="#fb923c" font-size="6">~8 calls</text>

  <rect x="155" y="50" width="110" height="80" rx="8" fill="#7c2d12" stroke="#f97316" stroke-width="2"/>
  <text x="210" y="72" text-anchor="middle" fill="#fdba74" font-size="10" font-weight="700">Sparkplug</text>
  <text x="210" y="88" text-anchor="middle" fill="#fb923c" font-size="7">Baseline JIT</text>
  <text x="210" y="103" text-anchor="middle" fill="#fdba74" font-size="7">No optimization</text>
  <text x="210" y="118" text-anchor="middle" fill="#64748b" font-size="6">Just removes dispatch</text>

  <line x1="265" y1="90" x2="285" y2="90" stroke="#f97316" stroke-width="2" marker-end="url(#arrV8)"/>
  <text x="275" y="83" text-anchor="middle" fill="#fb923c" font-size="6">~500 calls</text>

  <rect x="290" y="50" width="110" height="80" rx="8" fill="#581c87" stroke="#a855f7" stroke-width="2"/>
  <text x="345" y="72" text-anchor="middle" fill="#d8b4fe" font-size="10" font-weight="700">Maglev</text>
  <text x="345" y="88" text-anchor="middle" fill="#c084fc" font-size="7">Mid-tier JIT</text>
  <text x="345" y="103" text-anchor="middle" fill="#d8b4fe" font-size="7">Some optimization</text>
  <text x="345" y="118" text-anchor="middle" fill="#64748b" font-size="6">Builds CFG, inlining</text>

  <line x1="400" y1="90" x2="420" y2="90" stroke="#f97316" stroke-width="2" marker-end="url(#arrV8)"/>
  <text x="410" y="83" text-anchor="middle" fill="#fb923c" font-size="6">~6000 calls</text>

  <rect x="425" y="50" width="135" height="80" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="492" y="72" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">TurboFan</text>
  <text x="492" y="88" text-anchor="middle" fill="#86efac" font-size="7">Top optimizer</text>
  <text x="492" y="103" text-anchor="middle" fill="#4ade80" font-size="7">Near-native!</text>
  <text x="492" y="118" text-anchor="middle" fill="#64748b" font-size="6">Aggressive speculation</text>

  <!-- Deopt arrow -->
  <path d="M 492 130 Q 300 200 75 130" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrDeopt)"/>
  <text x="290" y="175" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">DEOPTIMIZATION (wrong guess → back to Ignition)</text>

  <!-- Hidden Classes -->
  <rect x="20" y="200" width="540" height="120" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="290" y="222" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">Hidden Classes (Maps): How V8 Tracks Object Shapes</text>

  <rect x="40" y="240" width="160" height="60" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="120" y="260" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">✅ Consistent</text>
  <text x="120" y="275" text-anchor="middle" fill="#86efac" font-size="8">a = {x:1, y:2}</text>
  <text x="120" y="290" text-anchor="middle" fill="#86efac" font-size="8">b = {x:1, y:2}</text>
  <text x="120" y="300" text-anchor="middle" fill="#4ade80" font-size="7">Same Map M0! ✅</text>

  <rect x="210" y="240" width="160" height="60" rx="6" fill="#450a0a" stroke="#dc2626" stroke-width="1.5"/>
  <text x="290" y="260" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">❌ Inconsistent</text>
  <text x="290" y="275" text-anchor="middle" fill="#fca5a5" font-size="8">a = {x:1, y:2}</text>
  <text x="290" y="290" text-anchor="middle" fill="#fca5a5" font-size="8">b = {y:2, x:1} ← order!</text>
  <text x="290" y="300" text-anchor="middle" fill="#f87171" font-size="7">Different Maps! Deopt!</text>

  <rect x="380" y="240" width="160" height="60" rx="6" fill="#450a0a" stroke="#dc2626" stroke-width="1.5"/>
  <text x="460" y="260" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">❌ Dynamic add</text>
  <text x="460" y="275" text-anchor="middle" fill="#fca5a5" font-size="8">c = {x:1}</text>
  <text x="460" y="290" text-anchor="middle" fill="#fca5a5" font-size="8">c.y = 2 ← add later</text>
  <text x="460" y="300" text-anchor="middle" fill="#f87171" font-size="7">Map transition! Deopt!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: V8 4-tier pipeline। Ignition→Sparkplug→Maglev→TurboFan। Wrong guess = deopt → Ignition। Hidden class = object shape tracking।</div>

<div class="code-block"><div class="code-title">⚡ Door 8 — Real V8: JIT, Hidden Classes &amp; Deopt</div>
<pre><code>// v8.js — V8 tracks object shapes (hidden classes / Maps)
function Point(x, y) { this.x = x; this.y = y; }

// Consistent shape -&gt; same hidden class -&gt; TurboFan optimizes
const a = new Point(1, 2);
const b = new Point(3, 4);

// Tracing hidden class transitions (Node.js --trace-maps):
$ node --trace-maps v8.js
[Maps: Map#0 created]
[Maps: x added -&gt; transition to Map#1]
[Maps: y added -&gt; transition to Map#2]
[Maps: a,b share Map#2 -&gt; stable shape!]</code></pre>
<pre><code>// deopt.js — shape change triggers deoptimization
function fast(obj) { return obj.x + obj.y; }

let o = {x: 1, y: 2};
for (let i = 0; i &lt; 10000; i++) fast(o);  // TurboFan compiles

o.z = 3;        // dynamic property add -&gt; NEW hidden class!
fast(o);        // shape mismatch -&gt; DEOPTIMIZE!

# Watch the deopt happen:
$ node --trace-deopt deopt.js
[deoptimizing (DEOPT): begin 0x7f8... &lt;JS fast&gt;
  reason: Insufficient type feedback for generic named access
  Mapping: rax -&gt; obj.x ... FAILED shape check
 bumping allocation age 0 -&gt; 1
 ** Restarting frame due to must handle deopt]</code></pre>
<pre><code># 4 tiers in action (Node --trace-opt):
$ node --trace-opt v8.js
[marking &lt;JS Point&gt; for optimization to Maglev]
[compiling &lt;JS Point&gt; using Maglev -&gt; done]
[marking &lt;JS fast&gt; for TurboFan -&gt; compiling]
[completed optimizing &lt;JS fast&gt; using TurboFan]</code></pre>
<span class="code-note">💡 V8 অনুমান করে (speculative)। অনুমান ভুল হলে deopt হয় — TurboFan optimized code ফেলে দিয়ে Ignition এ ফিরে যায়।</span>
</div>

<div class="dialogue"><strong>ভি৮ ইঞ্জিনিয়ার:</strong> V8 এর মূল আইডিয়া হল speculative optimization — অনুমান করা। JavaScript dynamically typed, কিন্তু আমরা দেখি বেশিরভাগ code একই pattern follow করে। Hidden class দিয়ে object এর shape track করি। যদি দেখি সব object একই order এ property তৈরি করে, TurboFan এর জন্য আমরা hardcoded machine code তৈরি করি — fixed memory offset, dictionary lookup নেই। কিন্তু তুমি যদি dynamically property যোগ করো, বা order বদলাও — deoptimization। পুরো optimized code ফেলে দিয়ে আবার slow Ignition এ ফিরে যেতে হয়।</div>`,
  recall: [
    { q: "V8 deoptimization কখন হয়?", a: "যখন speculative assumption ভুল প্রমাণিত হয় — object shape change, type change, dynamic property add, delete key। Optimized code ফেলে দিয়ে Ignition এ ফিরে যায়।" },
    { q: "Hidden class কী?", a: "V8 এর internal object shape tracker। Property গুলোর order আর name track করে। একই shape এর object share করে — fast property access। Shape change = new Map = deopt।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 9 — The Silent Sweeper (Garbage Collection)
// ═══════════════════════════════════════════
doors.push({
  num: 9,
  icon: "🗑️",
  color: "#22c55e",
  tagline: "নীরব পরিচ্ছন্নকারী — Silent Sweeper",
  name: "The Silent Sweeper",
  secret: "Generational GC: most objects die young। Short-lived object = free। You only pay for survivors।",
  story: `<p class="scene-setting">তুমি লুপে হাজার হাজার temporary object তৈরি করো। ভাবো — এত memory waste! কিন্তু modern GC তে এটা প্রায় free। কারণ generational hypothesis — most objects die young। Young generation এ GC শুধু live object কে copy করে। Dead object = শূন্য cost।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrGC" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🗑️ Generational GC: From-Space → To-Space (Copying)</text>

  <!-- Before GC -->
  <text x="145" y="55" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">Before GC: From-Space</text>
  <rect x="30" y="65" width="230" height="120" rx="8" fill="#450a0a" stroke="#dc2626" stroke-width="2"/>
  <rect x="45" y="80" width="40" height="25" rx="4" fill="#dc2626" stroke="#f87171" stroke-width="1"/>
  <text x="65" y="96" text-anchor="middle" fill="#fee2e2" font-size="8">dead</text>
  <rect x="90" y="80" width="40" height="25" rx="4" fill="#16a34a" stroke="#4ade80" stroke-width="2"/>
  <text x="110" y="96" text-anchor="middle" fill="#dcfce7" font-size="8">LIVE</text>
  <rect x="135" y="80" width="40" height="25" rx="4" fill="#dc2626" stroke="#f87171" stroke-width="1"/>
  <text x="155" y="96" text-anchor="middle" fill="#fee2e2" font-size="8">dead</text>
  <rect x="180" y="80" width="40" height="25" rx="4" fill="#dc2626" stroke="#f87171" stroke-width="1"/>
  <text x="200" y="96" text-anchor="middle" fill="#fee2e2" font-size="8">dead</text>
  <rect x="45" y="110" width="40" height="25" rx="4" fill="#16a34a" stroke="#4ade80" stroke-width="2"/>
  <text x="65" y="126" text-anchor="middle" fill="#dcfce7" font-size="8">LIVE</text>
  <rect x="90" y="110" width="40" height="25" rx="4" fill="#dc2626" stroke="#f87171" stroke-width="1"/>
  <text x="110" y="126" text-anchor="middle" fill="#fee2e2" font-size="8">dead</text>
  <rect x="135" y="110" width="40" height="25" rx="4" fill="#dc2626" stroke="#f87171" stroke-width="1"/>
  <text x="155" y="126" text-anchor="middle" fill="#fee2e2" font-size="8">dead</text>
  <rect x="180" y="110" width="40" height="25" rx="4" fill="#dc2626" stroke="#f87171" stroke-width="1"/>
  <text x="200" y="126" text-anchor="middle" fill="#fee2e2" font-size="8">dead</text>
  <text x="145" y="160" text-anchor="middle" fill="#fca5a5" font-size="8">8 objects: 2 live, 6 dead</text>
  <text x="145" y="175" text-anchor="middle" fill="#64748b" font-size="7">GC only touches the 2 live ones!</text>

  <!-- Arrow -->
  <line x1="260" y1="125" x2="300" y2="125" stroke="#22c55e" stroke-width="2" marker-end="url(#arrGC)"/>
  <text x="280" y="118" text-anchor="middle" fill="#4ade80" font-size="7" font-weight="700">Copy live</text>

  <!-- After GC -->
  <text x="435" y="55" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">After GC: To-Space</text>
  <rect x="320" y="65" width="230" height="120" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <rect x="335" y="80" width="40" height="25" rx="4" fill="#16a34a" stroke="#4ade80" stroke-width="2"/>
  <text x="355" y="96" text-anchor="middle" fill="#dcfce7" font-size="8">LIVE</text>
  <rect x="380" y="80" width="40" height="25" rx="4" fill="#16a34a" stroke="#4ade80" stroke-width="2"/>
  <text x="400" y="96" text-anchor="middle" fill="#dcfce7" font-size="8">LIVE</text>
  <rect x="425" y="80" width="120" height="25" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="485" y="96" text-anchor="middle" fill="#64748b" font-size="7">free space!</text>
  <text x="435" y="130" text-anchor="middle" fill="#86efac" font-size="8">Compacted! No fragmentation.</text>
  <text x="435" y="148" text-anchor="middle" fill="#4ade80" font-size="8">Dead objects = zero work 💀</text>
  <text x="435" y="165" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">Cost ∝ survivors, NOT total objects</text>

  <!-- Generations -->
  <rect x="30" y="210" width="250" height="90" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="155" y="230" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Young Generation</text>
  <text x="155" y="248" text-anchor="middle" fill="#86efac" font-size="8">Scavenger (copying)</text>
  <text x="155" y="265" text-anchor="middle" fill="#86efac" font-size="8">Every few ms</text>
  <text x="155" y="282" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">🔥 Short-lived = FREE!</text>

  <rect x="300" y="210" width="250" height="90" rx="8" fill="#451a03" stroke="#f97316" stroke-width="1.5"/>
  <text x="425" y="230" text-anchor="middle" fill="#fb923c" font-size="10" font-weight="700">Old Generation</text>
  <text x="425" y="248" text-anchor="middle" fill="#fdba74" font-size="8">Mark-Sweep-Compact</text>
  <text x="425" y="265" text-anchor="middle" fill="#fdba74" font-size="8">Every few seconds</text>
  <text x="425" y="282" text-anchor="middle" fill="#fb923c" font-size="8" font-weight="700">🐌 Long-lived = expensive</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Generational GC। From-Space → copy live → To-Space। Dead = শূন্য cost। Young gen = Scavenger (fast)। Old gen = Mark-Sweep-Compact (slow)।</div>

<div class="dialogue"><strong>জিসি ইঞ্জিনিয়ার:</strong> GC ধীর ভাবো? ভুল! Generational hypothesis বলে — most objects die young। তাই young generation এ আমরা copying algorithm ব্যবহার করি (Cheney's)। Memory কে দুই ভাগে ভাগ — From আর To। GC চললে শুধু live object কে From থেকে To তে copy করি। Dead object কে touch করিও না — সে পরিত্যক্ত! তাই short-lived object তৈরি করা প্রায় free। তুমি শুধু pay করো যা survive করে। Django তে — request variable = young gen (die after response)। Session data = old gen (live long)।</div>

<div class="code-block">— GC বাস্তবে দেখো (Python) —

  import gc, sys

  # Python-এ GC দেখো
  gc.set_debug(gc.DEBUG_STATS)
  gc.collect()

  # gc: collecting generation 2 ...
  # gc: objects in each generation: 642 0 0
  # gc: done, 642 unreachable, 0 uncollectable

  # Generation দেখো:
  print(len(gc.get_objects()))       # সব tracked objects
  print(len(gc.garbage))             # uncollectable (cycles w/ __del__)

  — CPython-এ ৩ প্রজন্ম: —
  gen 0: নতুন objects (short-lived) → প্রায়ই collect
  gen 1: ১ বার survive করেছে      → কম collect
  gen 2: দীর্ঘস্থায়ী             → কদাচিৎ collect

  — JVM flags for GC tuning: —
  java -XX:+UseG1GC -XX:MaxGCPauseMillis=200 MyApp
  java -verbose:gc -XX:+PrintGCDetails MyApp</div>`,
  recall: [
    { q: "Generational hypothesis কী?", a: "Most objects die young। তাই young generation এ GC সস্তা — শুধু survivors copy করতে হয়। Dead object = zero work।" },
    { q: "Django তে কোন object old gen এ promote হয়?", a: "Session data, module-level cache, database connection — এগুলো long-lived। Request variable, serializer = young gen, দ্রুত die করে।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 10 — The Type Oracle (Hindley-Milner + WebAssembly)
// ═══════════════════════════════════════════
doors.push({
  num: 10,
  icon: "🔮",
  color: "#e8c547",
  tagline: "টাইপ অধীকারী — The Type Oracle",
  name: "The Type Oracle",
  secret: "Hindley-Milner = type inference without annotations। WebAssembly = stack machine with linear memory।",
  story: `<p class="scene-setting">তুমি ভাবো static typing = অনেক annotation। ভুল! Hindley-Milner type system (Haskell, OCaml, Rust) automatically type infer করে — annotation লাগে না। Algorithm W সমীকরণ সমাধানের মতো type বের করে। আর WebAssembly? সে JavaScript এর আত্মীয় নয় — সম্পূর্ণ আলাদা একটা stack machine, linear memory সহ। Single-pass validation। Native speed।</p>

<div class="dialogue"><strong>টাইপ ইঞ্জিনিয়ার:</strong> Hindley-Milner হল type inference এর সবচেয়ে সুন্দর algorithm। তুমি লেখো <code>id = λx.x</code>। কোনো annotation নেই। কিন্তু Algorithm W automatically বের করে — <code>id : ∀α. α → α</code>। যেকোনো type! এটা unification দিয়ে কাজ করে — সমীকরণ সমাধানের মতো। Rust, Haskell, OCaml — সবাই এই system ব্যবহার করে। WebAssembly অন্য দিকে — একটা portable stack machine। Linear memory (raw byte array), structured control flow (no goto), single-pass validation। JavaScript এর dynamic object model এর সম্পূর্ণ বিপরীত। Near-native speed, কোনো JIT warmup লাগে না।</div>

<div class="code-block">— Hindley-Milner Type Inference (OCaml/Haskell) —

  — OCaml-এ type inference দেখো: —
  # let id x = x;;
  val id : 'a -> 'a = &lt;fun&gt;     ← কোনো annotation নেই!

  # let compose f g x = f (g x);;
  val compose : ('a -> 'b) -> ('c -> 'a) -> 'c -> 'b

  — Haskell-এ: —
  ghci&gt; :t id
  id :: a -&gt; a                    ← সবচেয়ে সাধারণ type

  ghci&gt; :t map
  map :: (a -&gt; b) -&gt; [a] -&gt; [b]

  — WebAssembly Text Format (WAT): —

  (module
    (func $add (export "add") (param i32 i32) (result i32)
      local.get 0      ;; stack-এ push param 0
      local.get 1      ;; stack-এ push param 1
      i32.add          ;; pop 2, push sum
    )
  )

  — Compile + run: —
  $ wat2wasm add.wat -o add.wasm
  $ node -e 'WebAssembly.instantiate(
      require("fs").readFileSync("add.wasm")
    ).then(w =&gt; console.log(w.instance.exports.add(3, 4)))'
  7                                  ← near-native speed!</div>`,
  recall: [
    { q: "Hindley-Milner এ Algorithm W কী করে?", a: "Type inference — কোনো annotation ছাড়া স্বয়ংক্রিয়ভাবে type বের করে। Unification দিয়ে type constraint সমাধান করে। Haskell, OCaml, Rust এ ব্যবহৃত।" },
    { q: "WebAssembly কীভাবে JavaScript থেকে আলাদা?", a: "WASM = stack machine + linear memory (raw byte array)। Structured control flow (no goto)। Single-pass validation। JS এর hidden class / inline cache এর প্রয়োজন নেই।" },
  ]
});
