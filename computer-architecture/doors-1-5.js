const doors = [];

// ═══════════════════════════════════════════
// DOOR 1 — The Silicon Seed (Transistors & Logic Gates)
// ═══════════════════════════════════════════
doors.push({
  num: 1,
  icon: "⚡",
  color: "#f59e0b",
  name: "সিলিকনের বীজ",
  subtitle: "Transistors & Logic Gates",
  tech: "Transistors, Boolean Logic, AND/OR/NOT Gates — Shockley, Bardeen, Brattain (1947)",
  spirit: "তালাব — সত্যের সন্ধান, সবকিছুর শুরু",
  secret: "একটা সুইচ থেকে জন্ম নেয় সব চিন্তা — কারণ সুইচই সিদ্ধান্ত নেয়।",
  recall: {
    q: "NAND gate কেন 'universal' বলা হয়?",
    qen: "Why is the NAND gate called 'universal'?",
    a: "কারণ শুধু NAND gate দিয়েই AND, OR, NOT, XOR — সব logic gate তৈরি করা যায়। একটাই গেট, অসীম সম্ভাবনা।",
    aen: "Because AND, OR, NOT, XOR — every logic gate can be built using only NAND gates. One gate, infinite possibilities."
  },
  story: `<p class="scene-setting">তুমি একটা কারখানায় দাঁড়িয়ে আছ — ঠান্ডা, পরিষ্কার, ফ্লুরোসেন্ট আলো। চোখের সামনে একটা আয়না — তাতে একটা চিপসের প্রতিচ্ছবি। কিন্তু এটা সাধারণ চিপ নয়। এর ভেতরে আছে কোটি কোটি অণু — সিলিকন। প্রতিটি অণু একটা করে সুইচ। একটা সুইচ শুধু দুটো কাজ করে — চালু, বা বন্ধ। ১ বা ০। সত্য বা মিথ্যা। এই সরল দ্বৈততা থেকে জন্ম নেয় সব কম্পিউটিং।</p>
<p class="scene-setting en">You stand in a factory — cold, clean, fluorescent light. Before you is a mirror showing a chip's reflection. But not an ordinary chip. Inside it are billions of molecules — silicon. Each molecule is a switch. A switch does only two things — on, or off. 1 or 0. True or False. From this simple duality, all computing is born.</p>

<div class="dialogue"><strong>শকলি:</strong> ১৯৪৭ সাল। বেল ল্যাবস। আমি, বার্ডিন, আর ব্রাটেইন — আমরা তিনজন একটা জিনিস বানিয়েছিলাম যা পৃথিবী বদলে দেবে। একটা ছোট্ট সিলিকনের টুকরো — তার উপর তিনটা তার। ভোল্টেজ দিলে চালু, না দিলে বন্ধ। একটা সুইচ। কিন্তু এই সুইচের কোনো চলমান অংশ নেই — কোনো গিয়ার নেই, কোনো স্প্রিং নেই। শুধু ইলেকট্রন। আমরা এর নাম দিলাম — ট্রানজিস্টর।</div>
<div class="dialogue en"><strong>Shockley:</strong> 1947. Bell Labs. Bardeen, Brattain, and I — we built something that would change the world. A small piece of silicon — three wires on top. Apply voltage: on. Remove: off. A switch. But this switch has no moving parts — no gears, no springs. Just electrons. We called it — the transistor.</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু একটা সুইচ দিয়ে কীভাবে কম্পিউটার বানানো যায়? সুইচ তো শুধু চালু-বন্ধ করে।</div>
<div class="dialogue en"><strong>You:</strong> But how do you build a computer from a switch? A switch just turns on and off.</div>

<div class="dialogue"><strong>শকলি:</strong> (হাসেন) একটা সুইচ দিয়ে না। কিন্তু দুটো সুইচ একসাথে কী করতে পারে — সেটা ভাবো। ধরো দুটো সুইচ সিরিজে যুক্ত — পানি বইতে পারে শুধু যদি <strong>দুটোই</strong> খোলা থাকে। এটাই <strong>AND gate</strong>। এখন ধরো দুটো সুইচ সমান্তরালে — পানি বইতে পারে যদি <strong>যেকোনো একটা</strong> খোলা থাকে। এটাই <strong>OR gate</strong>। আর যদি একটা সুইচ উল্টে দাও — চালু হলে বন্ধ, বন্ধ হলে চালু — সেটাই <strong>NOT gate</strong>। এই তিনটে গেট দিয়ে সব যন্ত্র বানানো যায়।</div>
<div class="dialogue en"><strong>Shockley:</strong> (laughs) Not from one switch. But think — what can two switches do together? Two switches in series — water flows only if <strong>both</strong> are open. That's an <strong>AND gate</strong>. Two switches in parallel — water flows if <strong>either</strong> is open. That's an <strong>OR gate</strong>. Flip one — on becomes off, off becomes on — that's a <strong>NOT gate</strong>. From these three, everything can be built.</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <!-- Transistor -->
  <rect x="15" y="20" width="110" height="60" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="70" y="42" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">⚡ Transistor</text>
  <text x="70" y="58" text-anchor="middle" fill="#fcd34d" font-size="9">switch: ON/OFF</text>
  <text x="70" y="72" text-anchor="middle" fill="#fcd34d" font-size="8">1 or 0</text>

  <!-- Arrow -->
  <line x1="125" y1="50" x2="155" y2="50" stroke="#475569" stroke-width="1.5" marker-end="url(#arrG)"/>
  <defs><marker id="arrG" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>

  <!-- Logic Gates -->
  <rect x="155" y="15" width="120" height="70" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="215" y="35" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="700">🔧 Logic Gates</text>
  <text x="215" y="52" text-anchor="middle" fill="#bae6fd" font-size="9">AND · OR · NOT</text>
  <text x="215" y="68" text-anchor="middle" fill="#bae6fd" font-size="9">XOR · NAND · NOR</text>

  <line x1="275" y1="50" x2="305" y2="50" stroke="#475569" stroke-width="1.5" marker-end="url(#arrG)"/>

  <!-- Adder/ALU -->
  <rect x="305" y="15" width="120" height="70" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
  <text x="365" y="35" text-anchor="middle" fill="#c7d2fe" font-size="11" font-weight="700">🔢 Adder → ALU</text>
  <text x="365" y="52" text-anchor="middle" fill="#a5b4fc" font-size="9">Half Adder = XOR+AND</text>
  <text x="365" y="68" text-anchor="middle" fill="#a5b4fc" font-size="9">32 chained = 32-bit add</text>

  <line x1="425" y1="50" x2="455" y2="50" stroke="#475569" stroke-width="1.5" marker-end="url(#arrG)"/>

  <!-- CPU -->
  <rect x="455" y="15" width="110" height="70" rx="8" fill="#7c2d12" stroke="#f97316" stroke-width="2"/>
  <text x="510" y="35" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="700">🖥️ CPU</text>
  <text x="510" y="52" text-anchor="middle" fill="#fb923c" font-size="9">Datapath</text>
  <text x="510" y="68" text-anchor="middle" fill="#fb923c" font-size="9">Pipeline</text>

  <!-- Truth Table -->
  <rect x="30" y="110" width="250" height="160" rx="10" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <text x="155" y="130" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="700">NAND Truth Table (Universal Gate)</text>
  <line x1="45" y1="138" x2="265" y2="138" stroke="#334155" stroke-width="1"/>
  <text x="80" y="155" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="600">A</text>
  <text x="120" y="155" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="600">B</text>
  <text x="170" y="155" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="600">AND</text>
  <text x="215" y="155" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="600">OR</text>
  <text x="250" y="155" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="600">NAND</text>

  <text x="80" y="175" text-anchor="middle" fill="#cbd5e1" font-size="10">0</text>
  <text x="120" y="175" text-anchor="middle" fill="#cbd5e1" font-size="10">0</text>
  <text x="170" y="175" text-anchor="middle" fill="#94a3b8" font-size="10">0</text>
  <text x="215" y="175" text-anchor="middle" fill="#94a3b8" font-size="10">0</text>
  <text x="250" y="175" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">1</text>

  <text x="80" y="195" text-anchor="middle" fill="#cbd5e1" font-size="10">0</text>
  <text x="120" y="195" text-anchor="middle" fill="#cbd5e1" font-size="10">1</text>
  <text x="170" y="195" text-anchor="middle" fill="#94a3b8" font-size="10">0</text>
  <text x="215" y="195" text-anchor="middle" fill="#94a3b8" font-size="10">1</text>
  <text x="250" y="195" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">1</text>

  <text x="80" y="215" text-anchor="middle" fill="#cbd5e1" font-size="10">1</text>
  <text x="120" y="215" text-anchor="middle" fill="#cbd5e1" font-size="10">0</text>
  <text x="170" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">0</text>
  <text x="215" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">1</text>
  <text x="250" y="215" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">1</text>

  <text x="80" y="235" text-anchor="middle" fill="#cbd5e1" font-size="10">1</text>
  <text x="120" y="235" text-anchor="middle" fill="#cbd5e1" font-size="10">1</text>
  <text x="170" y="235" text-anchor="middle" fill="#94a3b8" font-size="10">1</text>
  <text x="215" y="235" text-anchor="middle" fill="#94a3b8" font-size="10">1</text>
  <text x="250" y="235" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">0</text>

  <text x="155" y="260" text-anchor="middle" fill="#fbbf24" font-size="9" font-style="italic">NAND দিয়েই AND, OR, NOT সব বানানো যায়!</text>

  <!-- NAND = 4 transistors -->
  <rect x="300" y="110" width="260" height="160" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
  <text x="430" y="130" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="700">NAND = 4 Transistors</text>

  <!-- CMOS diagram simplified -->
  <rect x="340" y="145" width="20" height="20" rx="3" fill="#312e81" stroke="#818cf8" stroke-width="1"/>
  <text x="350" y="159" text-anchor="middle" fill="#a5b4fc" font-size="8">P</text>
  <line x1="360" y1="155" x2="380" y2="155" stroke="#64748b" stroke-width="1"/>
  <rect x="380" y="145" width="20" height="20" rx="3" fill="#312e81" stroke="#818cf8" stroke-width="1"/>
  <text x="390" y="159" text-anchor="middle" fill="#a5b4fc" font-size="8">P</text>
  <line x1="350" y1="165" x2="350" y2="185" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="165" x2="390" y2="185" stroke="#64748b" stroke-width="1"/>

  <rect x="340" y="185" width="20" height="20" rx="3" fill="#7c2d12" stroke="#f97316" stroke-width="1"/>
  <text x="350" y="199" text-anchor="middle" fill="#fb923c" font-size="8">N</text>
  <rect x="380" y="185" width="20" height="20" rx="3" fill="#7c2d12" stroke="#f97316" stroke-width="1"/>
  <text x="390" y="199" text-anchor="middle" fill="#fb923c" font-size="8">N</text>

  <text x="350" y="225" text-anchor="middle" fill="#fbbf24" font-size="9">A</text>
  <text x="390" y="225" text-anchor="middle" fill="#fbbf24" font-size="9">B</text>
  <text x="430" y="190" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">OUT</text>
  <line x1="400" y1="195" x2="420" y2="195" stroke="#4ade80" stroke-width="1.5"/>

  <text x="430" y="245" text-anchor="middle" fill="#94a3b8" font-size="9">2 PMOS (top) + 2 NMOS (bottom)</text>
  <text x="430" y="260" text-anchor="middle" fill="#64748b" font-size="8">Modern CPU = ~10 billion transistors</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Transistor → Logic Gates → Adder → ALU → CPU। NAND gate = ৪টা transistor, আর NAND দিয়েই সব gate বানানো যায়।</div>

<div class="code-block">

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">A</th><th style="text-align:left;padding:.3rem">B</th>
<th style="text-align:left;padding:.3rem">AND</th><th style="text-align:left;padding:.3rem">OR</th>
<th style="text-align:left;padding:.3rem">XOR</th><th style="text-align:left;padding:.3rem">NAND</th>
</tr>
<tr><td style="padding:.2rem">0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
<tr><td style="padding:.2rem">0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td style="padding:.2rem">1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td style="padding:.2rem">1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
</table>

<br><strong>NAND = Universal Gate:</strong><br>
NOT A = A NAND A<br>
A AND B = NOT(A NAND B) = (A NAND B) NAND (A NAND B)<br>
A OR B = (A NAND A) NAND (B NAND B)<br>
<strong>শুধু NAND দিয়েই সব gate বানানো যায়!</strong>
</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু AND আর OR দিয়ে যোগ করা যায় কীভাবে?</div>
<div class="dialogue en"><strong>You:</strong> But how do AND and OR perform addition?</div>

<div class="dialogue"><strong>শকলি:</strong> এটাই জাদু। একটা XOR gate দিয়ে যোগের ভাগশেষ (carry ছাড়া) পাও — 0+0=0, 0+1=1, 1+0=1, 1+1=0 (carry 1)। আর AND gate দিয়ে carry পাও। এই দুটো গেট মিলে তৈরি করে একটা <strong>Half Adder</strong>। দুটো Half Adder + একটা OR gate = <strong>Full Adder</strong>। ৩২টা Full Adder সারিতে বসাও — তোমার 32-bit যোগের যন্ত্র প্রস্তুত। এটাই ALU-এর ভিত্তি — যা তুমি দ্বিতীয় দরজায় দেখবে।</div>
<div class="dialogue en"><strong>Shockley:</strong> Here's the magic. A XOR gate gives you the sum bit (without carry) — 0+0=0, 0+1=1, 1+0=1, 1+1=0 (carry 1). An AND gate gives you the carry. Together they make a <strong>Half Adder</strong>. Two Half Adders + an OR gate = <strong>Full Adder</strong>. Chain 32 Full Adders — you have a 32-bit adder. This is the foundation of the ALU — which you'll see in Door 2.</div>

<p class="scene-setting">তুমি আয়নার দিকে তাকাও। এখন চিপটা অন্যরকম দেখায়। লক্ষ লক্ষ NAND gate — প্রতিটি তৈরি মাত্র চারটা ট্রানজিস্টর দিয়ে। এই গেটগুলো মিলে তৈরি করে flip-flop (1-bit memory), register (32-bit memory), ALU (হিসাবের যন্ত্র)। সবকিছু — শুরু হয় একটা সুইচ থেকে।</p>
<p class="scene-setting en">You look at the mirror again. The chip looks different now. Millions of NAND gates — each made of just four transistors. These gates build flip-flops (1-bit memory), registers (32-bit memory), ALUs (calculators). Everything — starts from one switch.</p>

<div class="verse">
<strong>Boolean Algebra (বুলিয়ান বীজগণিত):</strong><br>
জর্জ বুল (George Boole, 1815-1864) ১৮৫৪ সালে প্রকাশ করেন "An Investigation of the Laws of Thought" — যেখানে তিনি দেখান যে যুক্তি (logic) গাণিতিক নিয়মে চলে।<br>
• AND = গুণ (×), OR = যোগ (+), NOT = পূরক (1−x)<br>
• De Morgan's Law: NOT(A AND B) = (NOT A) OR (NOT B)<br>
• শ্যানন (Claude Shannon, 1937) দেখান যে Boolean algebra সরাসরি electrical circuit-এ মানানসই।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> একটা NAND gate = ৪টা transistor। একটা modern CPU = ~১০ বিলিয়ন transistor। সবকিছু — শুরু একটা সুইচ থেকে।<br>
<em>One NAND gate = 4 transistors. A modern CPU = ~10 billion transistors. Everything starts from one switch.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
<strong>Transistor Scaling (Moore's Law):</strong> গর্ডন মুর (Gordon Moore, 1965) পর্যবেক্ষণ করেন — প্রতি ২ বছরে transistor সংখ্যা দ্বিগুণ হয়। এই নিয়ম ~50 বছর ধরে খাটে। এখন slowing down — কারণ transistor এত ছোট যে কোয়ান্টাম ইফেক্ট শুরু হয়েছে।
</div>
</div>`,
  senior: {
    title: "Logic Gate প্র্যাকটিস গাইড",
    body: `<p><strong>১. Truth Table বানাও:</strong> XOR, NAND, NOR এর truth table মুখস্থ করো না — নিজে বের করো।</p>
<p><strong>২. Universal Gate:</strong> শুধু NAND দিয়ে AND, OR, NOT বানানোর সার্কিট আঁকো। এটাই interview favorite।</p>
<p><strong>৩. Adder সার্কিট:</strong> Half Adder থেকে Full Adder তৈরি করার লজিক বুঝো — এটাই ALU-এর ভিত্তি।</p>
<p><strong>৪. Moore's Law:</strong> এটি পদার্থবিদ্যার নিয়ম নয় — একটা পর্যবেক্ষণ মাত্র। এখন ending কারণ transistor 2-3nm এ নেমে গেছে — পরমাণুর কাছে।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 2 — The Calculator Within (ALU & Datapath)
// ═══════════════════════════════════════════
doors.push({
  num: 2,
  icon: "🔧",
  color: "#6366f1",
  name: "ভেতরের হিসাবযন্ত্র",
  subtitle: "ALU & the 5-Stage Datapath",
  tech: "ALU, Datapath, IF→ID→EX→MEM→WB — Hennessy & Patterson, RISC-V",
  spirit: "হিসাব — প্রতিটা কাজের নির্ভুল হিসাব",
  secret: "CPU একটা সাইকেলে পাঁচটা কাজ করে না — পাঁচটা কাজ পাঁচটা স্টেজে ভাগ করে, একসাথে চালায়।",
  recall: {
    q: "RISC এর ৫-স্টেজ datapath-এ প্রতিটা স্টেজ কী করে?",
    qen: "What does each stage do in the RISC 5-stage datapath?",
    a: "IF = Instruction Fetch, ID = Decode + Read Registers, EX = ALU Execute, MEM = Memory Access, WB = Write Back to register।",
    aen: "IF = Instruction Fetch, ID = Decode + Read Registers, EX = ALU Execute, MEM = Memory Access, WB = Write Back to register."
  },
  story: `<p class="scene-setting">কারখানার পরের ঘর। এখানে একটা বিশাল যন্ত্র — পিতলের পাইপ আর গিয়ারে তৈরি। এর নাম: ডেটাপাথ। তুমি যখন <code>x = a + b</code> লেখো, এই যন্ত্রটি সেই কাজটা করে — কিন্তু পাঁচটা ধাপে। প্রতিটা ধাপে একটা নির্দিষ্ট কাজ। ধাপগুলো একটার পর একটা — কিন্তু সারিতে, একসাথে চলে।</p>
<p class="scene-setting en">The next room of the factory. A massive machine — brass pipes and gears. Its name: the datapath. When you write <code>x = a + b</code>, this machine does the work — but in five stages. Each stage does one specific task. Stages run in sequence — but pipelined, simultaneously.</p>

<div class="dialogue"><strong>হেনেসি:</strong> আমি জন হেনেসি। স্ট্যানফোর্ড। ১৯৮০-এ আমি আর ডেভিড প্যাটারসন একটা সহজ আইডিয়া নিয়ে এসেছিলাম — CPU ডিজাইনকে সরল করো। প্রতিটা instruction একই পাঁচটা স্টেজে যাবে। কোনো বাড়তি জটিলতা নেই। প্রতিটা স্টেজ এক সাইকেলে শেষ। এর নাম আমরা দিলাম — RISC। Reduced Instruction Set Computer।</div>
<div class="dialogue en"><strong>Hennessy:</strong> I'm John Hennessy. Stanford. In 1980, David Patterson and I brought a simple idea — simplify CPU design. Every instruction goes through the same five stages. No extra complexity. Each stage takes one cycle. We called it — RISC. Reduced Instruction Set Computer.</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrP" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>

  <!-- 5 Pipeline Stages -->
  <rect x="20" y="20" width="95" height="80" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="67" y="42" text-anchor="middle" fill="#7dd3fc" font-size="14" font-weight="900">IF</text>
  <text x="67" y="58" text-anchor="middle" fill="#bae6fd" font-size="9">Instruction</text>
  <text x="67" y="70" text-anchor="middle" fill="#bae6fd" font-size="9">Fetch</text>
  <text x="67" y="88" text-anchor="middle" fill="#38bdf8" font-size="8">PC → Instr Mem</text>

  <line x1="115" y1="60" x2="135" y2="60" stroke="#475569" stroke-width="1.5" marker-end="url(#arrP)"/>

  <rect x="135" y="20" width="95" height="80" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
  <text x="182" y="42" text-anchor="middle" fill="#c7d2fe" font-size="14" font-weight="900">ID</text>
  <text x="182" y="58" text-anchor="middle" fill="#a5b4fc" font-size="9">Decode +</text>
  <text x="182" y="70" text-anchor="middle" fill="#a5b4fc" font-size="9">Read Regs</text>
  <text x="182" y="88" text-anchor="middle" fill="#818cf8" font-size="8">opcode → signals</text>

  <line x1="230" y1="60" x2="250" y2="60" stroke="#475569" stroke-width="1.5" marker-end="url(#arrP)"/>

  <rect x="250" y="20" width="95" height="80" rx="8" fill="#7c2d12" stroke="#f97316" stroke-width="2"/>
  <text x="297" y="42" text-anchor="middle" fill="#fdba74" font-size="14" font-weight="900">EX</text>
  <text x="297" y="58" text-anchor="middle" fill="#fb923c" font-size="9">ALU</text>
  <text x="297" y="70" text-anchor="middle" fill="#fb923c" font-size="9">Execute</text>
  <text x="297" y="88" text-anchor="middle" fill="#f97316" font-size="8">add · sub · addr</text>

  <line x1="345" y1="60" x2="365" y2="60" stroke="#475569" stroke-width="1.5" marker-end="url(#arrP)"/>

  <rect x="365" y="20" width="95" height="80" rx="8" fill="#581c87" stroke="#a855f7" stroke-width="2"/>
  <text x="412" y="42" text-anchor="middle" fill="#d8b4fe" font-size="14" font-weight="900">MEM</text>
  <text x="412" y="58" text-anchor="middle" fill="#c084fc" font-size="9">Memory</text>
  <text x="412" y="70" text-anchor="middle" fill="#c084fc" font-size="9">Access</text>
  <text x="412" y="88" text-anchor="middle" fill="#a855f7" font-size="8">LW read · SW write</text>

  <line x1="460" y1="60" x2="480" y2="60" stroke="#475569" stroke-width="1.5" marker-end="url(#arrP)"/>

  <rect x="480" y="20" width="80" height="80" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="520" y="42" text-anchor="middle" fill="#86efac" font-size="14" font-weight="900">WB</text>
  <text x="520" y="58" text-anchor="middle" fill="#4ade80" font-size="9">Write</text>
  <text x="520" y="70" text-anchor="middle" fill="#4ade80" font-size="9">Back</text>
  <text x="520" y="88" text-anchor="middle" fill="#22c55e" font-size="8">result → Reg</text>

  <!-- Pipelining visualization -->
  <text x="290" y="130" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="700">⏱️ Pipelining — 5 instructions overlap (1 per cycle!)</text>

  <!-- Cycle headers -->
  <text x="130" y="155" text-anchor="middle" fill="#64748b" font-size="9">C1</text>
  <text x="180" y="155" text-anchor="middle" fill="#64748b" font-size="9">C2</text>
  <text x="230" y="155" text-anchor="middle" fill="#64748b" font-size="9">C3</text>
  <text x="280" y="155" text-anchor="middle" fill="#64748b" font-size="9">C4</text>
  <text x="330" y="155" text-anchor="middle" fill="#64748b" font-size="9">C5</text>
  <text x="380" y="155" text-anchor="middle" fill="#64748b" font-size="9">C6</text>
  <text x="430" y="155" text-anchor="middle" fill="#64748b" font-size="9">C7</text>
  <text x="480" y="155" text-anchor="middle" fill="#64748b" font-size="9">C8</text>

  <!-- Instr 1 -->
  <text x="55" y="175" text-anchor="middle" fill="#94a3b8" font-size="9">ADD</text>
  <rect x="110" y="162" width="40" height="18" rx="3" fill="#0ea5e9" opacity=".6"/><text x="130" y="175" text-anchor="middle" fill="#7dd3fc" font-size="7">IF</text>
  <rect x="160" y="162" width="40" height="18" rx="3" fill="#818cf8" opacity=".6"/><text x="180" y="175" text-anchor="middle" fill="#c7d2fe" font-size="7">ID</text>
  <rect x="210" y="162" width="40" height="18" rx="3" fill="#f97316" opacity=".6"/><text x="230" y="175" text-anchor="middle" fill="#fdba74" font-size="7">EX</text>
  <rect x="260" y="162" width="40" height="18" rx="3" fill="#a855f7" opacity=".6"/><text x="280" y="175" text-anchor="middle" fill="#d8b4fe" font-size="7">MEM</text>
  <rect x="310" y="162" width="40" height="18" rx="3" fill="#22c55e" opacity=".6"/><text x="330" y="175" text-anchor="middle" fill="#86efac" font-size="7">WB</text>

  <!-- Instr 2 -->
  <text x="55" y="195" text-anchor="middle" fill="#94a3b8" font-size="9">SUB</text>
  <rect x="160" y="182" width="40" height="18" rx="3" fill="#0ea5e9" opacity=".6"/><text x="180" y="195" text-anchor="middle" fill="#7dd3fc" font-size="7">IF</text>
  <rect x="210" y="182" width="40" height="18" rx="3" fill="#818cf8" opacity=".6"/><text x="230" y="195" text-anchor="middle" fill="#c7d2fe" font-size="7">ID</text>
  <rect x="260" y="182" width="40" height="18" rx="3" fill="#f97316" opacity=".6"/><text x="280" y="195" text-anchor="middle" fill="#fdba74" font-size="7">EX</text>
  <rect x="310" y="182" width="40" height="18" rx="3" fill="#a855f7" opacity=".6"/><text x="330" y="195" text-anchor="middle" fill="#d8b4fe" font-size="7">MEM</text>
  <rect x="360" y="182" width="40" height="18" rx="3" fill="#22c55e" opacity=".6"/><text x="380" y="195" text-anchor="middle" fill="#86efac" font-size="7">WB</text>

  <!-- Instr 3 -->
  <text x="55" y="215" text-anchor="middle" fill="#94a3b8" font-size="9">LW</text>
  <rect x="210" y="202" width="40" height="18" rx="3" fill="#0ea5e9" opacity=".6"/><text x="230" y="215" text-anchor="middle" fill="#7dd3fc" font-size="7">IF</text>
  <rect x="260" y="202" width="40" height="18" rx="3" fill="#818cf8" opacity=".6"/><text x="280" y="215" text-anchor="middle" fill="#c7d2fe" font-size="7">ID</text>
  <rect x="310" y="202" width="40" height="18" rx="3" fill="#f97316" opacity=".6"/><text x="330" y="215" text-anchor="middle" fill="#fdba74" font-size="7">EX</text>
  <rect x="360" y="202" width="40" height="18" rx="3" fill="#a855f7" opacity=".6"/><text x="380" y="215" text-anchor="middle" fill="#d8b4fe" font-size="7">MEM</text>
  <rect x="410" y="202" width="40" height="18" rx="3" fill="#22c55e" opacity=".6"/><text x="430" y="215" text-anchor="middle" fill="#86efac" font-size="7">WB</text>

  <!-- Instr 4 -->
  <text x="55" y="235" text-anchor="middle" fill="#94a3b8" font-size="9">SW</text>
  <rect x="260" y="222" width="40" height="18" rx="3" fill="#0ea5e9" opacity=".6"/><text x="280" y="235" text-anchor="middle" fill="#7dd3fc" font-size="7">IF</text>
  <rect x="310" y="222" width="40" height="18" rx="3" fill="#818cf8" opacity=".6"/><text x="330" y="235" text-anchor="middle" fill="#c7d2fe" font-size="7">ID</text>
  <rect x="360" y="222" width="40" height="18" rx="3" fill="#f97316" opacity=".6"/><text x="380" y="235" text-anchor="middle" fill="#fdba74" font-size="7">EX</text>
  <rect x="410" y="222" width="40" height="18" rx="3" fill="#a855f7" opacity=".6"/><text x="430" y="235" text-anchor="middle" fill="#d8b4fe" font-size="7">MEM</text>
  <rect x="460" y="222" width="40" height="18" rx="3" fill="#22c55e" opacity=".6"/><text x="480" y="235" text-anchor="middle" fill="#86efac" font-size="7">WB</text>

  <text x="290" y="270" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">প্রতি cycle-এ একটা instruction শেষ হয়! 5x throughput.</text>
  <text x="290" y="285" text-anchor="middle" fill="#64748b" font-size="9" font-style="italic">Without pipeline: 5 cycles per instruction. With pipeline: 1 instruction per cycle.</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ৫-স্টেজ RISC pipeline — IF→ID→EX→MEM→WB। পাইপলাইনে ৫টা instruction একসাথে চলে, প্রতি cycle-এ একটা শেষ।</div>

<div class="code-block">
<strong>৫-স্টেজ RISC Datapath (CMU 18-447, MIT 6.823):</strong>

<a href="../theory-of-computation/index.html" style="color:var(--accent);font-size:.85rem">← Book 41 (Theory) এর সাথে সংযুক্ত</a>

┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐
│   IF    │──▶│   ID    │──▶│   EX    │──▶│  MEM    │──▶│   WB    │
│ Fetch   │   │ Decode  │   │ ALU     │   │ Memory  │   │ Write   │
│ Instr.  │   │ Read Reg│   │ Compute │   │ Access  │   │ Back    │
└─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘
  PC + 4       RegFile       ALU out       LW/SW         RegWrite
  Instr Mem    Sign Ext      Branch?       Data Mem      Result→Reg

<strong>উদাহরণ:</strong> <code>ADD x3, x1, x2</code> (x3 = x1 + x2)
1. IF: memory থেকে instruction পড়ো, PC = PC + 4
2. ID: "ADD" বুঝে নাও, x1 আর x2 এর মান register file থেকে পড়ো
3. EX: ALU তে x1 + x2 করো
4. MEM: কিছু করার নেই (ADD মেমোরি ব্যবহার করে না)
5. WB: ফলাফল x3 এ লেখো
</div>

<div class="dialogue"><strong>প্যাটারসন:</strong> এখানে একটা বিষয় লক্ষ্য করো। EX স্টেজে ALU কাজ করে — যোগ, বিয়োগ, AND, OR, shift। কিন্তু মেমোরি instruction-এর জন্য ALU ভিন্ন কাজ করে। <code>LW x3, 0(x1)</code> — এখানে ALU address হিসাব করে (x1 + 0), MEM স্টেজে সেই address থেকে ডেটা পড়ে। <code>SW x2, 0(x1)</code> — ALU address করে, MEM স্টেজে সেই address-এ লেখে। একই ALU — কিন্তু context অনুযায়ী ভিন্ন কাজ।</div>
<div class="dialogue en"><strong>Patterson:</strong> Notice something here. In the EX stage, the ALU does arithmetic — add, subtract, AND, OR, shift. But for memory instructions, the ALU does a different job. <code>LW x3, 0(x1)</code> — the ALU calculates the address (x1 + 0), then the MEM stage reads data from that address. <code>SW x2, 0(x1)</code> — ALU calculates address, MEM stage writes to it. Same ALU — different roles depending on context.</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু যদি প্রতিটা instruction পাঁচটা স্টেজে যায় — তাহলে একটা instruction শেষ হতে ৫ সাইকেল লাগে?</div>
<div class="dialogue en"><strong>You:</strong> But if each instruction goes through five stages — does it take 5 cycles to finish one?</div>

<div class="dialogue"><strong>হেনেসি:</strong> হ্যাঁ — কিন্তু না! কারণ এখানেই আসে <strong>pipelining</strong>। কল্পনা করো — একটা কাপড় কাচার মেশিন। ধোয়া, শুকানো, ইস্ত্রি — তিনটে ধাপ। তুমি কি প্রথম কাপড় শুকানো শেষ হওয়া পর্যন্ত অপেক্ষা করো তারপর দ্বিতীয় কাপড় ধোয়া শুরু করো? না! প্রথম কাপড় শুকানোর স্টেজে গেলেই তুমি দ্বিতীয় কাপড় ধোয়া শুরু করো। ঠিক তেমনি — প্রথম instruction EX স্টেজে গেলেই দ্বিতীয় instruction ID স্টেজে ঢোকে। তৃতীয়টা IF-এ। ফলে — প্রতি সাইকেলে একটা instruction শেষ হয়! এটাই pipelining। এটা তুমি চতুর্থ দরজায় গভীরভাবে দেখবে।</div>
<div class="dialogue en"><strong>Hennessy:</strong> Yes — but no! Because here's where <strong>pipelining</strong> comes in. Imagine a laundry machine — wash, dry, iron. Three stages. Do you wait for the first load to finish ironing before starting the second? No! The moment the first load moves to drying, you start washing the second. Similarly — when instruction 1 moves to EX, instruction 2 enters ID. Instruction 3 enters IF. Result — one instruction finishes per cycle! That's pipelining. You'll explore this deeply in Door 4.</div>

<div class="verse">
<strong>ISA = হার্ডওয়্যার-সফটওয়্যার চুক্তি (Contract):</strong><br>
ISA (Instruction Set Architecture) হলো একটা চুক্তি — সফটওয়্যার যা প্রত্যাশা করে, হার্ডওয়্যার তা দেয়। ISA বলে কোন instructions আছে, কতগুলো register, কী addressing mode।<br>
• <strong>RISC-V:</strong> উন্মুক্ত ISA, সরল, fixed-length instructions। তোমার স্মার্টফোনের ARM-এর মতো।<br>
• <strong>x86:</strong> জটিল ISA, variable-length instructions। তোমার ল্যাপটপের Intel/AMD।<br>
• <strong>উদাহরণ:</strong> একটা ঘড়ি — ISA হলো কাঁটার গতি (user যা দেখে), microarchitecture হলো ভেতরের গিয়ার (কীভাবে কাজ করে)।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> CPU একটা instruction পাঁচ ভাগে ভাগ করে করে না — পাঁচটা ভিন্ন instruction একসাথে পাঁচটা স্টেজে চলে। Pipeline-এ প্রতি সাইকেলে একটা instruction শেষ হয়।<br>
<em>The CPU doesn't split one instruction into five — it runs five different instructions simultaneously, one in each stage. Pipelined: one instruction completes per cycle.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
<strong>Turing Award (2017):</strong> Hennessy ও Patterson যৌথভাবে Turing Award পান — RISC architecture এবং "Computer Architecture: A Quantitative Approach" পাঠ্যবইয়ের জন্য।
</div>
</div>`,
  senior: {
    title: "Datapath প্র্যাকটিস গাইড",
    body: `<p><strong>১. পাঁচটা স্টেজ মুখস্থ করো না — বুঝো:</strong> IF (নাও), ID (বুঝে নাও), EX (করো), MEM (পড়ো/লেখো), WB (সংরক্ষণ করো)।</p>
<p><strong>২. Single-cycle vs Pipelined:</strong> Single-cycle-এ এক instruction = এক cycle (কিন্তু clock slow)। Pipelined-এ এক instruction = এক cycle throughput (clock fast)।</p>
<p><strong>৩. বাস্তব উদাহরণ:</strong> <code>LW x3, 8(x1)</code> — পাঁচটা স্টেজ কী করবে সেটা খাতায় লেখো।</p>
<p><strong>৪. Cross-ref:</strong> Book 38 (OS) এর context switching — প্রতিটা context switch এ register file save/restore করতে হয়। এটাই datapath-এর সাথে সংযুক্ত।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 3 — The Machine's Language (ISA: RISC vs CISC)
// ═══════════════════════════════════════════
doors.push({
  num: 3,
  icon: "📜",
  color: "#818cf8",
  name: "যন্ত্রের ভাষা",
  subtitle: "ISA — RISC vs CISC",
  tech: "Instruction Set Architecture, RISC vs CISC, Load/Store Architecture",
  spirit: "আয়াত — প্রতিটা চিহ্ন একটা অর্থ বহন করে",
  secret: "ISA হলো চুক্তি — সফটওয়্যার যা চায়, হার্ডওয়্যার তা দেয়। চুক্তি না বদলালে ভেতর পাল্টানো যায়।",
  recall: {
    q: "RISC কেন pipelining-এর জন্য CISC থেকে বেশি উপযুক্ত?",
    qen: "Why is RISC better suited for pipelining than CISC?",
    a: "কারণ RISC instructions fixed-length এবং এক cycle-এ শেষ হয় — pipeline-এ সব instruction একই গতিতে চলে। CISC-এ variable-length instructions একাধিক cycle নেয় — pipeline stall হয়।",
    aen: "Because RISC instructions are fixed-length and finish in one cycle — all instructions flow through the pipeline uniformly. CISC variable-length instructions take multiple cycles — pipeline stalls."
  },
  story: `<p class="scene-setting">কারখানার তৃতীয় ঘরে দুটো টেবিল। বাঁ দিকে — একটা সরল টাইপরাইটার, কয়েকটাই বোতাম। ডান দিকে — একটা বিশাল কনসোল, শত শত বোতাম। বাঁ দিকের টেবিলে লেখা: RISC। ডান দিকে: CISC। দুটোই কম্পিউটার — কিন্তু ভিন্ন দর্শন।</p>
<p class="scene-setting en">The factory's third room has two tables. On the left — a simple typewriter, few buttons. On the right — a massive console, hundreds of buttons. Left table reads: RISC. Right table reads: CISC. Both are computers — but different philosophies.</p>

<div class="dialogue"><strong>প্যাটারসন:</strong> ১৯৮০-এর আগে সব CPU ছিল CISC — Complex Instruction Set Computer। একটা instruction একসাথে অনেক কাজ করত — মেমোরি থেকে পড়ো, যোগ করো, আবার মেমোরিতে লেখো। কেন? কারণ মেমোরি দামি ছিল — কম instruction = কম মেমোরি দরকার। Compiler সরল ছিল। হার্ডওয়্যার সব জটিলতা বহন করত।</div>
<div class="dialogue en"><strong>Patterson:</strong> Before 1980, all CPUs were CISC — Complex Instruction Set Computer. One instruction did many things — read from memory, add, write back to memory. Why? Because memory was expensive — fewer instructions = less memory needed. Compilers were simple. Hardware carried all the complexity.</div>

<div class="dialogue"><strong>তুমি:</strong> তাহলে সমস্যা কী ছিল?</div>
<div class="dialogue en"><strong>You:</strong> So what was the problem?</div>

<div class="dialogue"><strong>হেনেসি:</strong> সমস্যা ছিল — CISC instructions বিভিন্ন দৈর্ঘ্যের। কোনোটা ১ বাইট, কোনোটা ১৫ বাইট। কোনোটা ১ cycle, কোনোটা ২০ cycle। Pipeline-এ এটা বিপর্যয় — কারণ প্রতিটা instruction ভিন্ন সময় নেয়। আমরা বললাম — সরল করো। প্রতিটা instruction একই দৈর্ঘ্যের। প্রতিটা এক cycle-এ শেষ। মেমোরি শুধু Load/Store দিয়ে ছোঁও — বাকি সব কাজ register-এ। এটাই RISC।</div>
<div class="dialogue en"><strong>Hennessy:</strong> The problem was — CISC instructions varied in length. Some 1 byte, some 15 bytes. Some 1 cycle, some 20 cycles. In a pipeline, this is a disaster — every instruction takes different time. We said — simplify. Every instruction same length. Every one finishes in one cycle. Touch memory only with Load/Store — everything else in registers. That's RISC.</div>

<div class="code-block">
<strong>RISC vs CISC তুলনা (Gate 2017 MCQ):</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Feature</th>
<th style="text-align:left;padding:.3rem">RISC (ARM, RISC-V)</th>
<th style="text-align:left;padding:.3rem">CISC (x86)</th>
</tr>
<tr><td style="padding:.2rem">Instruction size</td><td>Fixed (4 bytes)</td><td>Variable (1-15 bytes)</td></tr>
<tr><td style="padding:.2rem">Cycles per instruction</td><td>Usually 1</td><td>Multiple</td></tr>
<tr><td style="padding:.2rem">Memory access</td><td>Load/Store only</td><td>Any instruction</td></tr>
<tr><td style="padding:.2rem">Registers</td><td>More (32+)</td><td>Fewer (16)</td></tr>
<tr><td style="padding:.2rem">Pipelining</td><td>Easy ✅</td><td>Hard ❌</td></tr>
<tr><td style="padding:.2rem">Code size</td><td>Larger</td><td>Smaller</td></tr>
<tr><td style="padding:.2rem">Hardware complexity</td><td>Simple</td><td>Complex</td></tr>
<tr><td style="padding:.2rem">Who uses it?</td><td>Smartphones, IoT</td><td>Laptops, Servers</td></tr>
</table>

<br><strong>Modern Reality:</strong> আজকের Intel/AMD x86 প্রসেসর ভেতরে RISC ব্যবহার করে! CISC instructions কে ভেতরে ছোট RISC "micro-operations" (μops) এ ভাগ করে — তারপর pipeline করে। অর্থাৎ — বাইরে CISC, ভেতরে RISC।
</div>

<div class="dialogue"><strong>তুমি:</strong> তাহলে আজকে RISC জিতেছে?</div>
<div class="dialogue en"><strong>You:</strong> So RISC won today?</div>

<div class="dialogue"><strong>প্যাটারসন:</strong> (হাসেন) বলতে পারো। তোমার পকেটের স্মার্টফোন — ARM (RISC)। তোমার Apple Watch — ARM। তোমার ল্যাপটপের Intel x86 — ভেতরে RISC engine। RISC-V এখন open-source ISA — যে কেউ নিজের CPU বানাতে পারে। কিন্তু সবচেয়ে গুরুত্বপূর্ণ বিষয় — ISA হলো চুক্তি। চুক্তি অপরিবর্তিত রাখলে, ভেতরের গিয়ার যেমন খুশি বদলাও। Software চালাতে পারবে। এটাই abstraction-এর শক্তি।</div>
<div class="dialogue en"><strong>Patterson:</strong> (laughs) You could say that. Your smartphone — ARM (RISC). Your Apple Watch — ARM. Your laptop's Intel x86 — RISC engine inside. RISC-V is now open-source ISA — anyone can build their own CPU. But the key insight — ISA is a contract. Keep the contract unchanged, redesign the internals freely. Software keeps running. That's the power of abstraction.</div>

<div class="verse">
<strong>RISC-V — উন্মুক্ত ভবিষ্যৎ:</strong><br>
RISC-V (উচ্চারণ: "risk-five") হলো UC Berkeley-তে তৈরি open ISA। কোনো license fee নেই। যে কেউ নিজের RISC-V core বানাতে পারে।<br>
• Base ISA: 47 instructions (RV32I) — সবচেয়ে সরল।<br>
• Extensions: M (multiply), A (atomic), F (float), D (double), C (compressed)।<br>
• বাস্তব ব্যবহার: SiFive, Western Digital hard drives, Google Titan security chips।<br>
<a href="../operating-systems/index.html" style="color:var(--accent);font-size:.85rem">← Book 38 (OS) — kernel কীভাবে ISA ব্যবহার করে</a>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrI" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>

  <rect x="40" y="15" width="500" height="45" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="290" y="33" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="700">💻 Software — C / Python / Rust</text>
  <text x="290" y="49" text-anchor="middle" fill="#bfdbfe" font-size="9">compiler → machine code (instructions)</text>

  <line x1="290" y1="62" x2="290" y2="82" stroke="#475569" stroke-width="2" marker-end="url(#arrI)"/>

  <rect x="40" y="85" width="500" height="50" rx="8" fill="#7c2d12" stroke="#f97316" stroke-width="2.5"/>
  <text x="290" y="105" text-anchor="middle" fill="#fdba74" font-size="13" font-weight="900">📜 ISA — The Contract</text>
  <text x="290" y="122" text-anchor="middle" fill="#fb923c" font-size="9">which instructions · how many registers · addressing modes · encoding</text>

  <line x1="170" y1="137" x2="170" y2="157" stroke="#475569" stroke-width="2" marker-end="url(#arrI)"/>
  <line x1="410" y1="137" x2="410" y2="157" stroke="#475569" stroke-width="2" marker-end="url(#arrI)"/>

  <rect x="50" y="160" width="240" height="120" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
  <text x="170" y="180" text-anchor="middle" fill="#6ee7b7" font-size="12" font-weight="700">RISC-V / ARM (RISC)</text>
  <text x="170" y="198" text-anchor="middle" fill="#a7f3d0" font-size="9">fixed 32-bit instructions</text>
  <text x="170" y="212" text-anchor="middle" fill="#a7f3d0" font-size="9">Load/Store — only LW/SW touch memory</text>
  <text x="170" y="226" text-anchor="middle" fill="#a7f3d0" font-size="9">31 registers · simple · pipeline-friendly</text>
  <text x="170" y="246" text-anchor="middle" fill="#34d399" font-size="9" font-weight="700">ADD x3, x1, x2</text>
  <text x="170" y="262" text-anchor="middle" fill="#34d399" font-size="8">one instruction = one cycle (pipelined)</text>

  <rect x="310" y="160" width="240" height="120" rx="8" fill="#581c87" stroke="#a855f7" stroke-width="2"/>
  <text x="430" y="180" text-anchor="middle" fill="#d8b4fe" font-size="12" font-weight="700">x86 (CISC)</text>
  <text x="430" y="198" text-anchor="middle" fill="#e9d5ff" font-size="9">variable-length: 1–15 bytes</text>
  <text x="430" y="212" text-anchor="middle" fill="#e9d5ff" font-size="9">memory-to-memory operations</text>
  <text x="430" y="226" text-anchor="middle" fill="#e9d5ff" font-size="9">16 registers · complex · μops inside</text>
  <text x="430" y="246" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">ADD [mem], EAX</text>
  <text x="430" y="262" text-anchor="middle" fill="#c084fc" font-size="8">decodes to RISC μops internally</text>

</svg>
<div class="svg-caption">চিত্র: ISA হলো চুক্তি — উপরে software, নিচে দুটো implementation। RISC (fixed, simple) আর CISC (variable, complex) — দুটোই একই চুক্তি মানে।</div>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> ISA হলো ঘড়ির কাঁটা — user যা দেখে। Microarchitecture হলো ভেতরের গিয়ার — কীভাবে কাজ করে। কাঁটা না বদলালে, গিয়ার বদলানো যায়।<br>
<em>ISA = the clock face — what the user sees. Microarchitecture = the internal gears — how it works. Keep the face unchanged, redesign the gears freely.</em>
</div>`,
  senior: {
    title: "ISA প্র্যাকটিস গাইড",
    body: `<p><strong>১. RISC মূলনীতি:</strong> Load/Store architecture — শুধু LW/SW মেমোরি ছোঁয়, বাকি সব register-register। এটাই pipelining-কে সহজ করে।</p>
<p><strong>২. ISA চুক্তি:</strong> "ABI" (Application Binary Interface) — কোন register কী কাজে, calling convention কী। এটাই software-hardware interface।</p>
<p><strong>৩. Modern reality:</strong> x86 ভেতরে μops (RISC) ব্যবহার করে। ARM সরাসরি RISC। RISC-V = open source।</p>
<p><strong>৪. Cross-ref:</strong> Book 41 (Theory) — Turing machine হলো abstract ISA। RISC-V হলো physical ISA। একই ধারণা — abstract vs concrete।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 4 — The Assembly Line (Pipelining & Branch Prediction)
// ═══════════════════════════════════════════
doors.push({
  num: 4,
  icon: "🏭",
  color: "#a78bfa",
  name: "অ্যাসেম্বলি লাইন",
  subtitle: "Pipelining, Hazards & Branch Prediction",
  tech: "Pipeline Hazards, Branch Prediction, Speculative Execution — Smith (1981)",
  spirit: "সারি — সবকিছুর একটা নির্দিষ্ট ক্রম, কিন্তু সারিতে চলে",
  secret: "Pipeline ভাঙে একটাই জিনিসে — if-else। কোন রাস্তায় যাবে জানা নেই। CPU অনুমান করে, ভুল হলে ফের শুরু।",
  recall: {
    q: "Pipeline hazard এর তিনটি প্রকার কী কী?",
    qen: "What are the three types of pipeline hazards?",
    a: "১) Structural hazard (এক রিসোর্স দুজন চায়), ২) Data hazard (এক instruction-এর ফলাফল অপেক্ষা), ৩) Control hazard (branch-এ কোন পথ জানা নেই)।",
    aen: "1) Structural hazard (two instructions need same resource), 2) Data hazard (instruction waits for another's result), 3) Control hazard (branch direction unknown)."
  },
  story: `<p class="scene-setting">চতুর্থ ঘরে তুমি একটা কারখানার অ্যাসেম্বলি লাইন দেখছ — কনভেয়র বেল্ট চলছে। প্রতিটা স্টেশনে একজন কর্মী। প্রথম স্টেশনে কাঁচামাল ঢেকে দেওয়া হয়, দ্বিতীয়ে পরিমাপ, তৃতীয়ে গঠন, চতুর্থে রং, পঞ্চমে প্যাকিং। একটা পণ্য প্রতি স্টেশনে এক মিনিট। কিন্তু — প্রতি মিনিটে একটা পণ্য বের হয়! কারণ একসাথে পাঁচটা পণ্য পাঁচটা স্টেশনে চলছে। এটাই pipelining।</p>
<p class="scene-setting en">In the fourth room, you see a factory assembly line — conveyor belt moving. Each station has a worker. Station 1: raw material in. Station 2: measure. Station 3: shape. Station 4: paint. Station 5: pack. Each product spends one minute per station. But — one product comes out every minute! Because five products are in five stations simultaneously. This is pipelining.</p>

<div class="dialogue"><strong>হেনেসি:</strong> Pipeline দারুণ — কিন্তু সমস্যাও আছে। তিন ধরনের সমস্যা। প্রথমত — <strong>structural hazard</strong>। যদি দুটো instruction একই সময়ে একই রিসোর্স চায় — যেমন একসাথে instruction memory আর data memory পড়তে চায়। সমাধান: আলাদা instruction আর data cache (Harvard architecture)।</div>
<div class="dialogue en"><strong>Hennessy:</strong> Pipelines are great — but there are problems. Three types. First — <strong>structural hazard</strong>. If two instructions need the same resource simultaneously — like reading instruction memory and data memory at the same time. Solution: separate instruction and data caches (Harvard architecture).</div>

<div class="dialogue"><strong>হেনেসি:</strong> দ্বিতীয়ত — <strong>data hazard</strong>। এক instruction-এর ফলাফল দরকার, কিন্তু সেটা এখনো প্রস্তুত নয়। যেমন: <code>ADD x3, x1, x2</code> তারপর <code>SUB x4, x3, x5</code>। SUB-এর x3 দরকার, কিন্তু ADD-এর ফলাফল এখনো WB স্টেজে যায়নি। সমাধান: <strong>forwarding/bypassing</strong> — EX স্টেজ থেকে সরাসরি পাঠিয়ে দাও, WB-এর জন্য অপেক্ষা করো না।</div>
<div class="dialogue en"><strong>Hennessy:</strong> Second — <strong>data hazard</strong>. An instruction needs a result that isn't ready yet. For example: <code>ADD x3, x1, x2</code> then <code>SUB x4, x3, x5</code>. SUB needs x3, but ADD's result hasn't reached WB yet. Solution: <strong>forwarding/bypassing</strong> — send the result directly from EX stage, don't wait for WB.</div>

<div class="dialogue"><strong>তুমি:</strong> আর তৃতীয়?</div>
<div class="dialogue en"><strong>You:</strong> And the third?</div>

<div class="dialogue"><strong>হেনেসি:</strong> তৃতীয় এবং সবচেয়ে খারাপ — <strong>control hazard</strong>। <code>if (x == 0) goto L1</code> — branch instruction। Pipeline-এ পরের instruction কোনটা? L1-এর কাছের কোড? নাকি branch-এর পরের কোড? CPU জানে না — কারণ branch condition এখনো evaluate হয়নি (EX স্টেজে হবে)। pipeline <strong>stall</strong> করে — অপেক্ষা করে। এটাই control hazard।</div>
<div class="dialogue en"><strong>Hennessy:</strong> Third and worst — <strong>control hazard</strong>. <code>if (x == 0) goto L1</code> — a branch instruction. Which instruction comes next in the pipeline? The code at L1? Or the code after the branch? The CPU doesn't know — because the branch condition hasn't been evaluated yet (happens in EX stage). The pipeline <strong>stalls</strong> — waits. This is a control hazard.</div>

<div class="dialogue"><strong>স্মিথ:</strong> আমি জেমস স্মিথ। ১৯৮১ সালে আমি একটা পাগল আইডিয়া নিয়ে এসেছিলাম। pipeline stall করার বদলে — <strong>অনুমান করো</strong>। CPU অনুমান করবে branch নেওয়া হবে নাকি নেওয়া হবে না — তারপর সেই রাস্তায় instruction পাঠিয়ে দাও। ভুল হলে — pipeline flush করো, সঠিক রাস্তায় ফিরে যাও। এটাই <strong>branch prediction</strong>।</div>
<div class="dialogue en"><strong>Smith:</strong> I'm James Smith. In 1981, I brought a crazy idea. Instead of stalling the pipeline — <strong>guess</strong>. The CPU predicts whether a branch will be taken or not — then sends instructions down that path. If wrong — flush the pipeline, go to the correct path. This is <strong>branch prediction</strong>.</div>

<div class="code-block">
<strong>Branch Prediction প্রকারভেদ:</strong>

<strong>১. Static (স্থির):</strong> সবসময় "taken" বা "not taken" অনুমান। সরল, কিন্তু অনেক ভুল।<br>
<strong>২. 1-bit Predictor:</strong> গতবার যা হয়েছিল, এবারও তাই হবে। সরল, loop-এ খারাপ।<br>
<strong>৩. 2-bit Predictor (সবচেয়ে সাধারণ):</strong> দুইবার ভুল হলে তবেই prediction বদলাও। Loop-এ একবার exit হলে predictor এখনও "loop চলবে" অনুমান করে — কারণ একবার ভুলে prediction বদলায় না।<br>
<strong>৪. Correlating Predictor:</strong> শুধু এই branch-এর ইতিহাস নয় — আগের branch-গুলোর সাথে correlation দেখো।<br>
<strong>৫. Modern (Neural/TAGE):</strong> আজকের CPU (Apple M3, AMD Zen 4) 95%+ সঠিক। কিছু CPU neural network ব্যবহার করে!

<br><br><strong>Misprediction Penalty:</strong><br>
যদি prediction ভুল হয় — pipeline-এ যতগুলো instruction ইতিমধ্যে ঢুকেছে, সব ফেলে দাও।<br>
১৫-স্টেজ pipeline-এ ১৫ instruction waste। আধুনিক ২০+ স্টেজ CPU-তে আরও বেশি।<br>
<strong>সুতরাং — predictor accuracy জরুরি। 95% থেকে 96% হলে 20% performance gain!</strong>
</div>

<div class="dialogue"><strong>তুমি:</strong> এটা তো ঝুঁকির কাজ — ভুল হলে সব নষ্ট।</div>
<div class="dialogue en"><strong>You:</strong> That's risky — if wrong, everything's wasted.</div>

<div class="dialogue"><strong>স্মিথ:</strong> ঠিক বলেছ। কিন্তু — পরিসংখ্যান বলে, বেশিরভাগ branch প্যাটার্ন অনুমানযোগ্য। <code>for (i=0; i<1000; i++)</code> — এই loop ৯৯৯ বার "taken" হবে, ১ বার "not taken"। ১-bit predictor: ৯৯.৯% সঠিক! আধুনিক predictor ৯৫-৯৮% সঠিক — প্রতি ২০-৫০ branch-এ মাত্র ১টি ভুল। এই ঝুঁকির পুরস্কার — ৫-১০x throughput।</div>
<div class="dialogue en"><strong>Smith:</strong> True. But — statistics show most branch patterns are predictable. <code>for (i=0; i<1000; i++)</code> — this loop is "taken" 999 times, "not taken" once. 1-bit predictor: 99.9% correct! Modern predictors hit 95-98% — only 1 wrong per 20-50 branches. The reward for this risk — 5-10x throughput.</div>

<div class="verse">
<strong>Speculative Execution (অনুমানমূলক সম্পাদন):</strong><br>
Branch prediction থেকে জন্ম নেয় speculative execution। CPU শুধু branch অনুমান করে না — সেই রাস্তায় instruction চালায়। ভুল হলে flush।<br>
<strong>Spectre Vulnerability (2018):</strong> Speculative execution-এর একটা dark side। আক্রমণকারী branch prediction প্রভাবিত করে — speculative execution এর মাধ্যমে secret data cache-এ আনে — তারপর side-channel দিয়ে পড়ে। এটাই Spectre attack।<br>
<a href="../llm-security/index.html" style="color:var(--accent);font-size:.85rem">← Book 13 (Security) — Spectre/Meltdown deep dive</a><br>
<a href="../dsa-bazaar/index.html" style="color:var(--accent);font-size:.85rem">← Book 2 (DSA) — sorted data তে branch prediction ভালো</a>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">

  <text x="20" y="30" fill="#94a3b8" font-size="10" font-weight="700">Cycle →</text>
  <text x="95" y="30" text-anchor="middle" fill="#64748b" font-size="9">1</text>
  <text x="155" y="30" text-anchor="middle" fill="#64748b" font-size="9">2</text>
  <text x="215" y="30" text-anchor="middle" fill="#64748b" font-size="9">3</text>
  <text x="275" y="30" text-anchor="middle" fill="#64748b" font-size="9">4</text>
  <text x="335" y="30" text-anchor="middle" fill="#64748b" font-size="9">5</text>
  <text x="395" y="30" text-anchor="middle" fill="#64748b" font-size="9">6</text>
  <text x="455" y="30" text-anchor="middle" fill="#64748b" font-size="9">7</text>

  <line x1="65" y1="38" x2="490" y2="38" stroke="#334155" stroke-width="1"/>
  <line x1="125" y1="38" x2="125" y2="240" stroke="#334155" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="185" y1="38" x2="185" y2="240" stroke="#334155" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="245" y1="38" x2="245" y2="240" stroke="#334155" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="305" y1="38" x2="305" y2="240" stroke="#334155" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="365" y1="38" x2="365" y2="240" stroke="#334155" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="425" y1="38" x2="425" y2="240" stroke="#334155" stroke-width="0.5" stroke-dasharray="3,3"/>

  <text x="55" y="65" text-anchor="end" fill="#e2e8f0" font-size="9" font-weight="600">I1: ADD</text>
  <text x="55" y="100" text-anchor="end" fill="#e2e8f0" font-size="9" font-weight="600">I2: SUB</text>
  <text x="55" y="135" text-anchor="end" fill="#e2e8f0" font-size="9" font-weight="600">I3: LW</text>
  <text x="55" y="170" text-anchor="end" fill="#e2e8f0" font-size="9" font-weight="600">I4: SW</text>
  <text x="55" y="205" text-anchor="end" fill="#e2e8f0" font-size="9" font-weight="600">I5: MUL</text>

  <rect x="65" y="52" width="60" height="22" rx="3" fill="#0ea5e9" stroke="#38bdf8"/><text x="95" y="67" text-anchor="middle" fill="#f0f9ff" font-size="9" font-weight="700">IF</text>
  <rect x="125" y="52" width="60" height="22" rx="3" fill="#10b981" stroke="#34d399"/><text x="155" y="67" text-anchor="middle" fill="#f0fdf4" font-size="9" font-weight="700">ID</text>
  <rect x="185" y="52" width="60" height="22" rx="3" fill="#f59e0b" stroke="#fbbf24"/><text x="215" y="67" text-anchor="middle" fill="#fffbeb" font-size="9" font-weight="700">EX</text>
  <rect x="245" y="52" width="60" height="22" rx="3" fill="#a855f7" stroke="#c084fc"/><text x="275" y="67" text-anchor="middle" fill="#fdf4ff" font-size="9" font-weight="700">MEM</text>
  <rect x="305" y="52" width="60" height="22" rx="3" fill="#ef4444" stroke="#f87171"/><text x="335" y="67" text-anchor="middle" fill="#fef2f2" font-size="9" font-weight="700">WB</text>

  <rect x="125" y="87" width="60" height="22" rx="3" fill="#0ea5e9" stroke="#38bdf8"/><text x="155" y="102" text-anchor="middle" fill="#f0f9ff" font-size="9" font-weight="700">IF</text>
  <rect x="185" y="87" width="60" height="22" rx="3" fill="#10b981" stroke="#34d399"/><text x="215" y="102" text-anchor="middle" fill="#f0fdf4" font-size="9" font-weight="700">ID</text>
  <rect x="245" y="87" width="60" height="22" rx="3" fill="#f59e0b" stroke="#fbbf24"/><text x="275" y="102" text-anchor="middle" fill="#fffbeb" font-size="9" font-weight="700">EX</text>
  <rect x="305" y="87" width="60" height="22" rx="3" fill="#a855f7" stroke="#c084fc"/><text x="335" y="102" text-anchor="middle" fill="#fdf4ff" font-size="9" font-weight="700">MEM</text>
  <rect x="365" y="87" width="60" height="22" rx="3" fill="#ef4444" stroke="#f87171"/><text x="395" y="102" text-anchor="middle" fill="#fef2f2" font-size="9" font-weight="700">WB</text>

  <rect x="185" y="122" width="60" height="22" rx="3" fill="#0ea5e9" stroke="#38bdf8"/><text x="215" y="137" text-anchor="middle" fill="#f0f9ff" font-size="9" font-weight="700">IF</text>
  <rect x="245" y="122" width="60" height="22" rx="3" fill="#10b981" stroke="#34d399"/><text x="275" y="137" text-anchor="middle" fill="#f0fdf4" font-size="9" font-weight="700">ID</text>
  <rect x="305" y="122" width="60" height="22" rx="3" fill="#f59e0b" stroke="#fbbf24"/><text x="335" y="137" text-anchor="middle" fill="#fffbeb" font-size="9" font-weight="700">EX</text>
  <rect x="365" y="122" width="60" height="22" rx="3" fill="#a855f7" stroke="#c084fc"/><text x="395" y="137" text-anchor="middle" fill="#fdf4ff" font-size="9" font-weight="700">MEM</text>
  <rect x="425" y="122" width="60" height="22" rx="3" fill="#ef4444" stroke="#f87171"/><text x="455" y="137" text-anchor="middle" fill="#fef2f2" font-size="9" font-weight="700">WB</text>

  <rect x="245" y="157" width="60" height="22" rx="3" fill="#0ea5e9" stroke="#38bdf8"/><text x="275" y="172" text-anchor="middle" fill="#f0f9ff" font-size="9" font-weight="700">IF</text>
  <rect x="305" y="157" width="60" height="22" rx="3" fill="#10b981" stroke="#34d399"/><text x="335" y="172" text-anchor="middle" fill="#f0fdf4" font-size="9" font-weight="700">ID</text>
  <rect x="365" y="157" width="60" height="22" rx="3" fill="#f59e0b" stroke="#fbbf24"/><text x="395" y="172" text-anchor="middle" fill="#fffbeb" font-size="9" font-weight="700">EX</text>
  <rect x="425" y="157" width="60" height="22" rx="3" fill="#a855f7" stroke="#c084fc"/><text x="455" y="172" text-anchor="middle" fill="#fdf4ff" font-size="9" font-weight="700">MEM</text>

  <rect x="305" y="192" width="60" height="22" rx="3" fill="#0ea5e9" stroke="#38bdf8"/><text x="335" y="207" text-anchor="middle" fill="#f0f9ff" font-size="9" font-weight="700">IF</text>
  <rect x="365" y="192" width="60" height="22" rx="3" fill="#10b981" stroke="#34d399"/><text x="395" y="207" text-anchor="middle" fill="#f0fdf4" font-size="9" font-weight="700">ID</text>
  <rect x="425" y="192" width="60" height="22" rx="3" fill="#f59e0b" stroke="#fbbf24"/><text x="455" y="207" text-anchor="middle" fill="#fffbeb" font-size="9" font-weight="700">EX</text>

  <rect x="40" y="250" width="500" height="60" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="290" y="270" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">⚡ Pipeline Throughput</text>
  <text x="290" y="287" text-anchor="middle" fill="#cbd5e1" font-size="9">without pipeline: 1 instruction per 5 cycles (CPI = 5)</text>
  <text x="290" y="301" text-anchor="middle" fill="#cbd5e1" font-size="9">with pipeline: 1 instruction per 1 cycle (CPI ≈ 1) — 5× faster!</text>

</svg>
<div class="svg-caption">চিত্র: ৫-স্টেজ pipeline — IF, ID, EX, MEM, WB। প্রতিটা instruction এক সাইকেল পরপর শুরু হয়, ফলে প্রতি সাইকেলে একটা করে instruction শেষ হয়।</div>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> তোমার CPU তোমার কোডের ক্রম মানে না — সে অনুমান করে, ভুল করে, আবার শুরু করে। কিন্তু ৯৭% সময় সে সঠিক। এই জুয়াই তোমার CPU-কে ১০x দ্রুত করে।<br>
<em>Your CPU ignores your code order — it guesses, makes mistakes, restarts. But 97% of the time, it's right. This gamble makes your CPU 10x faster.</em>
</div>`,
  senior: {
    title: "Pipelining প্র্যাকটিস গাইড",
    body: `<p><strong>১. Hazard identification:</strong> কোডের সিকোয়েন্স দেখে hazard চিনতে শেখো — structural, data, control।</p>
<p><strong>২. Forwarding:</strong> EX→EX forwarding কীভাবে data hazard দূর করে — সার্কিট আঁকো।</p>
<p><strong>৩. Branch prediction:</strong> 1-bit vs 2-bit predictor — কোনটা loop-এ ভালো এবং কেন?</p>
<p><strong>৪. Practical tip:</strong> তোমার কোডে if-else এর সাধারণ শাখা (common branch) প্রথমে রাখো — predictor শিখবে সেটাই সঠিক path।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 5 — The Library of Speeds (Memory Hierarchy)
// ═══════════════════════════════════════════
doors.push({
  num: 5,
  icon: "📚",
  color: "#22d3ee",
  name: "গতির গ্রন্থাগার",
  subtitle: "Memory Hierarchy & Cache",
  tech: "L1/L2/L3 Cache, Locality of Reference, Write Policies, Cache Lines",
  spirit: "স্মৃতি — কিছু কাছে, কিছু দূরে, কিছু অনেক দূরে",
  secret: "তোমার কোডের গতি CPU-এর গতি দ্বারা নয় — মেমোরি hierarchy দ্বারা নির্ধারিত। DRAM = 200× energy।",
  recall: {
    q: "Cache line (block) কী এবং spatial locality কীভাবে কাজে লাগে?",
    qen: "What is a cache line and how does spatial locality work?",
    a: "Cache line = ফিক্সড সাইজের মেমোরি ব্লক (সাধারণত 64 bytes)। যখন একটা byte ফেচ করা হয়, পুরো 64-byte line cache-এ আসে। কাছের address গুলো পরের কয়েক cycle-এ cache hit দেয় — এটাই spatial locality।",
    aen: "Cache line = fixed-size memory block (usually 64 bytes). When one byte is fetched, the entire 64-byte line comes into cache. Nearby addresses get cache hits in subsequent cycles — this is spatial locality."
  },
  story: `<p class="scene-setting">পঞ্চম ঘর একটা বিশাল পাঠাগার। কিন্তু অদ্ভুত — পাঠাগারের তাকগুলো বিভিন্ন দূরত্বে। তোমার ডেস্কের উপর একটা ছোট্ট খাতা — সবচেয়ে কাছে, সবচেয়ে দ্রুত। এটাই L1 cache। ডেস্কের ড্রয়ারে আরেকটু বড় খাতা — L2। ঘরের কোণায় একটা বড় আলমারি — L3। বাড়ির অন্য ঘরে একটা বিশাল আলমারি — RAM। আর রাস্তার ওপারে একটা গোডাউন — Disk। প্রতিটা স্তর আগেরটার চেয়ে বড় — কিন্তু ধীর।</p>
<p class="scene-setting en">The fifth room is a vast library. But strange — the shelves are at different distances. On your desk, a small notepad — closest, fastest. This is L1 cache. In your drawer, a slightly larger notebook — L2. In the corner of the room, a big cabinet — L3. In another room, a huge cupboard — RAM. Across the street, a warehouse — Disk. Each level is larger — but slower.</p>

<div class="dialogue"><strong>প্যাটারসন:</strong> মেমোরি hierarchy-এর কারণ একটাই — <strong>trade-off</strong>। দ্রুত মেমোরি = দামি ছোট। ধীর মেমোরি = সস্তা বড়। কোনো একটা দিয়ে সব কাজ চলবে না। তাই hierarchy। ছোট দ্রুত মেমোরি (L1) সবচেয়ে ব্যবহৃত ডেটা রাখে। বড় ধীর মেমোরি (RAM) সব ডেটা রাখে। hierarchy-এর মাধ্যমে আমরা সেরা দুটো জগত পাই — দ্রুতি আর ধারণক্ষমতা।</div>
<div class="dialogue en"><strong>Patterson:</strong> Memory hierarchy exists for one reason — <strong>trade-off</strong>. Fast memory = expensive, small. Slow memory = cheap, large. You can't use just one. So hierarchy. Small fast memory (L1) holds most-used data. Large slow memory (RAM) holds everything. Through hierarchy, we get the best of both — speed and capacity.</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <!-- Pyramid layers -->
  <polygon points="270,20 310,20 325,60 255,60" fill="#f59e0b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="290" y="47" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="900">Registers</text>
  <text x="380" y="47" fill="#fcd34d" font-size="9">~1KB · 0 cycle</text>

  <polygon points="255,60 325,60 345,100 235,100" fill="#0ea5e9" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="290" y="85" text-anchor="middle" fill="#e0f2fe" font-size="10" font-weight="700">L1 Cache</text>
  <text x="400" y="85" fill="#7dd3fc" font-size="9">32-64KB · 1-3 cycles (4ns)</text>

  <polygon points="235,100 345,100 370,140 210,140" fill="#818cf8" stroke="#a5b4fc" stroke-width="1.5"/>
  <text x="290" y="125" text-anchor="middle" fill="#e0e7ff" font-size="10" font-weight="700">L2 Cache</text>
  <text x="415" y="125" fill="#a5b4fc" font-size="9">256KB-1MB · 10-14 cycles</text>

  <polygon points="210,140 370,140 400,180 180,180" fill="#a855f7" stroke="#c084fc" stroke-width="1.5"/>
  <text x="290" y="165" text-anchor="middle" fill="#f3e8ff" font-size="10" font-weight="700">L3 Cache</text>
  <text x="425" y="165" fill="#c084fc" font-size="9">8-32MB · 30-70 cycles</text>

  <polygon points="180,180 400,180 440,230 140,230" fill="#ef4444" stroke="#f87171" stroke-width="1.5"/>
  <text x="290" y="210" text-anchor="middle" fill="#fee2e2" font-size="12" font-weight="700">RAM (DRAM)</text>
  <text x="460" y="210" fill="#f87171" font-size="9">8-64GB · 150-300 cycles</text>

  <polygon points="140,230 440,230 480,270 100,270" fill="#64748b" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="290" y="255" text-anchor="middle" fill="#e2e8f0" font-size="11" font-weight="700">SSD</text>
  <text x="495" y="255" fill="#94a3b8" font-size="9">256GB-2TB · 10K-100K cycles</text>

  <polygon points="100,270 480,270 530,305 50,305" fill="#334155" stroke="#475569" stroke-width="1.5"/>
  <text x="290" y="293" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="700">HDD / Network</text>
  <text x="290" y="310" text-anchor="middle" fill="#64748b" font-size="8">1-8TB · ~10M cycles</text>

  <!-- Labels -->
  <text x="70" y="30" fill="#fbbf24" font-size="10" font-weight="700" transform="rotate(-90 70 30)">⚡ Fast</text>
  <text x="70" y="290" fill="#64748b" font-size="10" font-weight="700" transform="rotate(-90 70 290)">🐌 Slow</text>
  <text x="540" y="30" fill="#ef4444" font-size="10" font-weight="700" transform="rotate(90 540 30)">💸 Expensive</text>
  <text x="540" y="290" fill="#22c55e" font-size="10" font-weight="700" transform="rotate(90 540 290)">💰 Cheap</text>

  <!-- Bottom note -->
  <rect x="80" y="320" width="420" height="30" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="290" y="340" text-anchor="middle" fill="#f87171" font-size="10" font-weight="600">⚠️ L1 = 4ns → RAM = 137ns = 34× slower! Cache misses = invisible performance cliffs</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Memory Hierarchy Pyramid — উপরে ছোট দ্রুত (Registers), নিচে বড় ধীর (HDD)। প্রতি স্তর ১০x ধীর। Cache miss = performance cliff।</div>

<div class="code-block">
<strong>মেমোরি Hierarchy — Latency & Capacity:</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Level</th>
<th style="text-align:left;padding:.3rem">Size</th>
<th style="text-align:left;padding:.3rem">Latency</th>
<th style="text-align:left;padding:.3rem">Analogy</th>
</tr>
<tr><td style="padding:.2rem">Registers</td><td>~1 KB</td><td>0 cycle</td><td>✋ হাতে</td></tr>
<tr><td style="padding:.2rem">L1 Cache</td><td>32-64 KB</td><td>1-3 cycles (4 ns)</td><td>📋 কাটার বোর্ড</td></tr>
<tr><td style="padding:.2rem">L2 Cache</td><td>256 KB-1 MB</td><td>10-14 cycles</td><td>🧊 ফ্রিজ</td></tr>
<tr><td style="padding:.2rem">L3 Cache</td><td>8-32 MB</td><td>30-70 cycles</td><td>🚪 পান্ট্রি</td></tr>
<tr><td style="padding:.2rem">RAM (DRAM)</td><td>8-64 GB</td><td>150-300 cycles</td><td>🏪 বাজার</td></tr>
<tr><td style="padding:.2rem">SSD</td><td>256 GB-2 TB</td><td>10K-100K cycles</td><td>🏭 গোডাউন</td></tr>
<tr><td style="padding:.2rem">HDD</td><td>1-8 TB</td><td>10M cycles</td><td>🌍 অন্য শহর</td></tr>
</table>

<br><strong>Cache Line (Block):</strong> মেমোরি cache-এ byte-by-byte আসে না। আসে ব্লক আকারে — সাধারণত 64 bytes। একটা byte ফেচ করলে পুরো 64-byte line আসে। এটাই spatial locality-র মূল — কাছের address গুলো পরের কয়েক cycle-এ cache-এ থাকে।
</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু cache কীভাবে জানবে কোন ডেটা রাখবে?</div>
<div class="dialogue en"><strong>You:</strong> But how does cache know which data to keep?</div>

<div class="dialogue"><strong>প্যাটারসন:</strong> দুটো নীতি — <strong>temporal locality</strong> (সম্প্রতি ব্যবহৃত ডেটা আবার ব্যবহৃত হবে) এবং <strong>spatial locality</strong> (কাছের address গুলো ব্যবহৃত হবে)। Loop ভাবো — <code>for (i=0; i&lt;1000; i++) sum += arr[i]</code>। arr[0] একবার ব্যবহার — temporal locality। arr[0], arr[1], arr[2] পাশাপাশি — spatial locality। array traversal = cache dream। Linked list traversal = cache nightmare (random pointers = cache miss storm)।</div>
<div class="dialogue en"><strong>Patterson:</strong> Two principles — <strong>temporal locality</strong> (recently used data will be used again) and <strong>spatial locality</strong> (nearby addresses will be used). Think about loops — <code>for (i=0; i&lt;1000; i++) sum += arr[i]</code>. arr[0] used once — temporal locality. arr[0], arr[1], arr[2] adjacent — spatial locality. Array traversal = cache dream. Linked list traversal = cache nightmare (random pointers = cache miss storm).</div>

<div class="code-block">
<strong>Cache-Conscious Programming (Cornell ECE 4750):</strong>

<strong>❌ খারাপ (column-major traversal):</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
for (x=0; x&lt;W; x++)
  for (y=0; y&lt;H; y++)
    sum += A[y][x]; // cache miss storm!
</pre>
এখানে প্রতিটা access প্রতিটা cache line শুধু একবার ব্যবহার করে — waste।

<strong>✅ ভালো (row-major traversal):</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
for (y=0; y&lt;H; y++)
  for (x=0; x&lt;W; x++)
    sum += A[y][x]; // cache hit bonanza!
</pre>
এখানে প্রতিটা cache line-এর সব byte ব্যবহৃত হয় — দ্রুত।

<strong>ফলাফল:</strong> দুটোর জটিলতা একই O(n²) — কিন্তু row-major 10x দ্রুত!
<br>
<a href="../dsa-bazaar/index.html" style="color:var(--accent);font-size:.85rem">← Book 2 (DSA) — Big-O মিথ্যা বলে যখন cache আসে</a>
</div>

<div class="dialogue"><strong>তুমি:</strong> মানে Big-O যথেষ্ট নয়?</div>
<div class="dialogue en"><strong>You:</strong> You mean Big-O isn't enough?</div>

<div class="dialogue"><strong>প্যাটারসন:</strong> Big-O ধরে নেয় সব memory access সমান সময় নেয়। কিন্তু বাস্তবে — register access আর DRAM access-এর মধ্যে 200x পার্থক্য! একটা O(n²) sequential algorithm O(n log n) random algorithm কে হারাতে পারে — কারণ sequential = cache hit, random = cache miss। তোমার code-এ <strong>memory access pattern</strong> জটিলতার চেয়ে বেশি গুরুত্বপূর্ণ।</div>
<div class="dialogue en"><strong>Patterson:</strong> Big-O assumes all memory accesses take equal time. But in reality — register access vs DRAM access differs by 200x! An O(n²) sequential algorithm can beat O(n log n) random — because sequential = cache hit, random = cache miss. Your code's <strong>memory access pattern</strong> matters more than computational complexity.</div>

<div class="verse">
<strong>Cache Write Policies:</strong><br>
যখন CPU cache-এ লেখে — সেটা কখন main memory-তে যাবে?<br>
• <strong>Write-Through:</strong> প্রতিটা write একসাথে cache আর main memory তে। সরল, consistent — কিন্তু ধীর।<br>
• <strong>Write-Back:</strong> শুধু cache-এ লেখো। "Dirty bit" চালু করো। eviction-এ main memory-তে লেখো। দ্রুত — কিন্তু complex।<br>
• <strong>Write-Allocate:</strong> write miss-এ আগে block cache-এ আনো, তারপর লেখো।<br>
• <strong>No-Write-Allocate:</strong> write miss-এ সরাসরি main memory-তে লেখো, cache-এ নাও।<br><br>
<strong>বাস্তব প্রয়োগ (LedgerPilot):</strong> Transactional DB → Write-Through (consistency)। Analytical DB → Write-Back (throughput)।<br>
<a href="../databases/index.html" style="color:var(--accent);font-size:.85rem">← Book 39 (Databases) — cache policy আর DB design</a>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> তোমার কোড কত দ্রুত চলে — সেটা CPU নির্ধারণ করে না। নির্ধারণ করে cache। Sequential access = 4ns। Random access = 137ns। 34x পার্থক্য। Big-O মিথ্যা বলে — cache pattern সত্য বলে।<br>
<em>How fast your code runs isn't determined by the CPU. It's determined by the cache. Sequential = 4ns. Random = 137ns. 34x difference. Big-O lies — cache pattern tells the truth.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
<strong>DRAM Energy Cost:</strong> DRAM থেকে ডেটা আনতে যে energy লাগে — register থেকে আনতে লাগে তার ২০০ গুণ কম। তাইই সব accelerator (TPU, GPU) চেষ্টা করে ডেটা কাছে রাখার।
</div>
</div>`,
  senior: {
    title: "Cache প্র্যাকটিস গাইড",
    body: `<p><strong>১. Access pattern চেক করো:</strong> তোমার কোডে array random access নাকি sequential? profiler (perf, valgrind cachegrind) ব্যবহার করো।</p>
<p><strong>২. Data layout:</strong> Array of Structs (AoS) vs Struct of Arrays (SoA) — SIMD আর cache-এর জন্য SoA ভালো।</p>
<p><strong>৩. False sharing:</strong> Multi-threaded code-এ দুই thread একই cache line-এ আলাদা variable লিখলে — performance tank। সমাধান: padding (60 byte gap)।</p>
<p><strong>৪. Practical LedgerPilot:</strong> MySQL query-তে sequential scan (cache-friendly) index lookup (scattered) থেকে দ্রুত হতে পারে যদি ডেটা cache-এ থাকে।</p>`
  }
});

