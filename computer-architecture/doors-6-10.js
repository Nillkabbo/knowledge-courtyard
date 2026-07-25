// ═══════════════════════════════════════════
// DOOR 6 — The Hidden War (Cache Coherence & Memory Consistency)
// ═══════════════════════════════════════════
doors.push({
  num: 6,
  icon: "🛡️",
  color: "#10b981",
  name: "অদৃশ্য যুদ্ধ",
  subtitle: "Cache Coherence — MESI, False Sharing & Consistency",
  tech: "MESI Protocol, False Sharing, Memory Consistency vs Coherence — Stanford CS149",
  spirit: "আমানত — প্রতিটা core তার নিজের cache তাকিফ করে, কিন্তু সবাই একমত হয়",
  secret: "দুই core একই variable আলাদা ভাবে cache করলে — invisible যুদ্ধ শুরু হয়। MESI সেই যুদ্ধ থামায়।",
  recall: {
    q: "False sharing কী এবং কীভাবে এড়ানো যায়?",
    qen: "What is false sharing and how can it be avoided?",
    a: "দুই core আলাদা variable ব্যবহার করছে, কিন্তু দুটো একই cache line-এ। এক core write করলে পুরো line invalidate হয় — বারবার ping-pong। সমাধান: data padding (আলাদা cache line)।",
    aen: "Two cores use different variables, but both sit on the same cache line. One core writes — the whole line invalidates — constant ping-pong. Solution: data padding (separate cache lines)."
  },
  story: `<p class="scene-setting">ষষ্ঠ ঘরে একটা যুদ্ধক্ষেত্র। কিন্তু নীরব — কোনো শব্দ নেই। দুটো সৈন্যদল — দুটো CPU core। প্রতিটার নিজস্ব cache — নিজস্ব সত্য। core 0-এর cache-এ x = 5। core 1-এর cache-এ x = 10। কোনটা সঠিক? দুটোই নিজেকে সঠিক মনে করে। এটাই cache coherence সমস্যা — মাল্টি-কোর সিস্টেমের সবচেয়ে দুর্ভেদ্য সমস্যা।</p>
<p class="scene-setting en">The sixth room is a battlefield. But silent — no sound. Two armies — two CPU cores. Each has its own cache — its own truth. Core 0's cache has x = 5. Core 1's cache has x = 10. Which is correct? Both think they are. This is the cache coherence problem — the hardest problem in multi-core systems.</p>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু কীভাবে দুটো cache আলাদা মান রাখতে পারে?</div>
<div class="dialogue en"><strong>You:</strong> But how can two caches have different values?</div>

<div class="dialogue"><strong>প্যাটারসন:</strong> খুব সহজ। core 0 এ x পড়ে — cache-এ x=5 আসে। core 1 ও x পড়ে — তার cache-এও x=5 আসে। এখন core 0 লেখে x=10। তার cache-এ এখন x=10। কিন্তু core 1-এর cache-এ এখনও x=5! main memory-তেও হয়ত x=5 বা 10 — depends on write policy। core 1 যদি এখন x পড়ে — সে পুরোনো মান পায়। একে বলে <strong>incoherence</strong> — cache গুলো不一致 (inconsistent)।</div>
<div class="dialogue en"><strong>Patterson:</strong> Simple. Core 0 reads x — cache loads x=5. Core 1 also reads x — its cache also loads x=5. Now core 0 writes x=10. Its cache now has x=10. But core 1's cache still has x=5! Main memory might have 5 or 10 — depends on write policy. If core 1 reads x now — it gets the stale value. This is <strong>incoherence</strong> — caches are inconsistent.</div>

<div class="code-block">
<strong>MESI Protocol — ৪টি State (Stanford CS149, Wikipedia):</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">State</th>
<th style="text-align:left;padding:.3rem">নাম</th>
<th style="text-align:left;padding:.3rem">মানে</th>
</tr>
<tr><td style="padding:.2rem"><strong>M</strong></td><td>Modified</td><td>আমার cache-এ আপডেটেড, main memory তে পুরোনো। অন্য কারও কাছে নেই।</td></tr>
<tr><td style="padding:.2rem"><strong>E</strong></td><td>Exclusive</td><td>আমার cache-এ main memory-এর মতই। অন্য কারও কাছে নেই।</td></tr>
<tr><td style="padding:.2rem"><strong>S</strong></td><td>Shared</td><td>আমার cache-ে main memory-এর মতই। অন্যদের কাছেও থাকতে পারে।</td></tr>
<tr><td style="padding:.2rem"><strong>I</strong></td><td>Invalid</td><td>আমার cache-এ ডেটা invalid। ব্যবহার করা যাবে না।</td></tr>
</table>

<br><strong>E state এর জাদু:</strong> যদি একটা line E state-এ থাকে — শুধু আমার কাছে, কারও কাছে নেই — তাহলে আমি write করলে <strong>silent upgrade</strong> হয় M-তে। কোনো bus transaction লাগে না! এটাই E state-এর শক্তি।
<br><br><strong>MESIF (Intel):</strong> MESI + F (Forward)। F state-এ থাকা cache line একমাত্র যেটা read request-এ সাড়া দেয় — redundant transfer এড়ায়।
</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু false sharing কী?</div>
<div class="dialogue en"><strong>You:</strong> But what's false sharing?</div>

<div class="dialogue"><strong>প্যাটারসন:</strong> এটা সবচেয়ে ঘাতক। ধরো core 0 এর একটা variable <code>int a</code>। core 1-এর আরেকটা <code>int b</code>। দুটো সম্পূর্ণ আলাদা — কোনো সম্পর্ক নেই। কিন্তু যদি দুটো একই cache line-এ (64 bytes) পড়ে — তাহলে core 0 যখন <code>a</code> লেখে, পুরো line M state-এ যায়। core 1-এর copy invalidate হয় (I)। এখন core 1 যখন <code>b</code> লেখে — line আবার core 1-এ আসে, core 0-এর copy invalidate হয়। এভাবে বারবার — ping-pong। <strong>দুটো আলাদা variable, কিন্তু cache line এক — false sharing।</strong></div>
<div class="dialogue en"><strong>Patterson:</strong> It's the most insidious. Say core 0 has <code>int a</code>. Core 1 has <code>int b</code>. Completely independent — no relationship. But if both fall on the same cache line (64 bytes) — when core 0 writes <code>a</code>, the whole line goes M. Core 1's copy invalidates (I). Now core 1 writes <code>b</code> — the line comes back to core 1, core 0's copy invalidates. Back and forth — ping-pong. <strong>Two independent variables, same cache line — false sharing.</strong></div>

<div class="code-block">
<strong>False Sharing Fix (Cornell ECE 4750):</strong>

<strong>❌ খারাপ:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
struct Counter { int a; int b; };
// core 0 increments a, core 1 increments b
// false sharing — 5x slower!
</pre>

<strong>✅ ভালো (padding):</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
struct Counter {
  int a;
  char pad[60]; // 64-byte alignment
  int b;
};
// এখন দুটো আলাদা cache line-এ — false sharing গেল!
</pre>

<strong>ফলাফল:</strong> 5-10x speedup, কোনো logic পরিবর্তন ছাড়াই।
</div>

<div class="dialogue"><strong>তুমি:</strong> এটা তো চমৎকার — কিন্তু এর সাথে memory consistency-এর সম্পর্ক কী?</div>
<div class="dialogue en"><strong>You:</strong> This is great — but how does memory consistency relate?</div>

<div class="dialogue"><strong>স্ট্যানফোর্ড অধ্যাপক:</strong> Coherence আর consistency দুটো আলাদা জিনিস। <strong>Coherence</strong> = এক address-এর behavior সব core একমত। <strong>Consistency</strong> = ভিন্ন address-গুলোর ordering কেমন। আধুনিক CPU write buffer ব্যবহার করে — write গুলো pending থাকে, read গুলো আগে চলে যায়। ফলে — thread 1 এর কাছে thread 0-এর write এখনও visible না! এটাই <strong>memory reordering</strong>। সমাধান: <strong>memory fence/barrier</strong> — সব pending operation শেষ হওয়া পর্যন্ত অপেক্ষা করো।</div>
<div class="dialogue en"><strong>Stanford Professor:</strong> Coherence and consistency are two different things. <strong>Coherence</strong> = all cores agree on behavior at one address. <strong>Consistency</strong> = how accesses to different addresses are ordered. Modern CPUs use write buffers — writes pend, reads proceed. So — thread 1 may not see thread 0's write yet! This is <strong>memory reordering</strong>. Solution: <strong>memory fence/barrier</strong> — wait for all pending operations to complete.</div>

<div class="verse">
<strong>Coherence vs Consistency (Stanford CS149):</strong><br>
<strong>Coherence:</strong> এক address X-এ সব core একমত — "X এর সর্বশেষ মান কত?"<br>
<strong>Consistency:</strong> ভিন্ন address X আর Y-এর access ordering — "thread 0 এ X=1 লিখল, তারপর Y=1। thread 1 কি সবসময় Y=1 দেখলে X=1-ও দেখবে?"<br><br>
<strong>Sequential Consistency (SC):</strong> সব operation একটা global order-এ। সহজ কিন্তু ধীর।<br>
<strong>TSO (Total Store Order):</strong> write গুলো reorder হয় (write buffer), read গুলো আগে যেতে পারে। x86 এটা ব্যবহার করে।<br>
<strong>Weak/Release Consistency:</strong> ARM, GPU — আরও relaxed। সব কিছু reorder হতে পারে। Programmer কে fence ব্যবহার করতে হয়।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> তোমার multi-threaded code যদি random ভাবে fail করে — ৯৯% সম্ভাবনা false sharing বা memory reordering-এ। সমাধান: memory fence, atomic, বা data padding।<br>
<em>If your multi-threaded code randomly fails — 99% chance it's false sharing or memory reordering. Fix: memory fence, atomics, or data padding.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
<strong>Cross-ref:</strong> <a href="../distributed-systems/index.html" style="color:var(--accent)">Book 35</a> — MESI হলো local consensus, Paxos/Raft হলো distributed consensus। একই সমস্যা, আলাদা স্কেল।
</div>
</div>`,
  senior: {
    title: "Cache Coherence প্র্যাকটিস গাইড",
    body: `<p><strong>১. MESI state diagram:</strong> M→E→S→I ট্রানজিশন খাতায় আঁকো। কোন event-এ কোন state-এ যায়।</p>
<p><strong>২. False sharing diagnosis:</strong> perf c2c টুল ব্যবহার করে false sharing খুঁজে বের করো।</p>
<p><strong>৩. Memory ordering:</strong> তোমার C++/Java/Python কোডে atomic, volatile, synchronized কী করে — সেটা এখন বুঝবে।</p>
<p><strong>৪. Cross-ref:</strong> Book 35 (Distributed) — snooping = broadcast consensus, directory = point-to-point consensus।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 7 — The Secret Reorder (Out-of-Order Execution)
// ═══════════════════════════════════════════
doors.push({
  num: 7,
  icon: "🎭",
  color: "#f97316",
  name: "গোপন পুনর্বিন্যাস",
  subtitle: "Out-of-Order Execution — Tomasulo, Register Renaming, ROB",
  tech: "Tomasulo's Algorithm (1967), Register Renaming, Reorder Buffer — IBM System/360",
  spirit: "তাদবির — সবকিছুর একটা সুন্দর ব্যবস্থা, কিন্তু সেই ব্যবস্থা গোপন",
  secret: "তুমি কোড সিরিয়ালি লেখো — CPU সেটা উল্টোপাল্টা করে চালায়। ফলাফল ঠিক তোমার ক্রমে দেখায় — কারণ ROB সব সাজিয়ে দেয়।",
  recall: {
    q: "Tomasulo's Algorithm-এ register renaming কী উদ্দেশ্যে?"
  ,
    qen: "What is the purpose of register renaming in Tomasulo's Algorithm?",
    a: "WAR আর WAW hazard (false hazard) দূর করতে। Logical register (যেমন R1) কে hidden physical register-এ map করো — যাতে পুরোনো instruction ভুল করে নতুন মান না পড়ে।",
    aen: "To eliminate WAR and WAW false hazards. Map logical registers (e.g. R1) to hidden physical registers — so old instructions don't accidentally read new values."
  },
  story: `<p class="scene-setting">সপ্তম ঘরে একটা রেস্তোরাঁর রান্নাঘর। অর্ডার আসছে — স্যান্ডউইচ, স্টেক, স্যালাদ, স্যুপ। বাবুর্চি অর্ডার ক্রম অনুযায়ী কাজ করে না। স্যালাদ দ্রুত তৈরি হয় — সে আগেই প্লেট করে। স্টেক সময় নেয় — গ্রিলে। কিন্তু পরিবেশন করা হয় অর্ডার ক্রমে। প্রথম অর্ডার প্রথম পরিবেশিত। এটাই out-of-order execution। ভেতরে এলোমেলো — বাইরে সুশৃঙ্খল।</p>
<p class="scene-setting en">The seventh room is a restaurant kitchen. Orders arrive — sandwich, steak, salad, soup. The chef doesn't work in order. Salad is quick — it gets plated first. Steak takes time — on the grill. But serving happens in order. First order, first served. This is out-of-order execution. Inside — chaos. Outside — discipline.</p>

<div class="dialogue"><strong>তোমাসুলো:</strong> আমি রবার্ট তোমাসুলো। ১৯৬৭। IBM। আমি একটা সমস্যা খুঁজে পেয়েছিলাম — CPU pipeline stall করছে কারণ instruction-গুলো অপেক্ষা করছে register-এর জন্য। কিন্তু অনেক সময় এই অপেক্ষা অর্থহীন — register নাম একই, কিন্তু আসল dependency নেই। আমি বললাম — যে instruction-এর ডেটা প্রস্তুত, সে আগেই চলে যাক। ক্রম পাল্টাও। কিন্তু ফলাফল সঠিক ক্রমে দেখাও।</div>
<div class="dialogue en"><strong>Tomasulo:</strong> I'm Robert Tomasulo. 1967. IBM. I found a problem — CPU pipelines stalling because instructions were waiting for registers. But often this wait was pointless — same register name, but no real dependency. I said — any instruction whose data is ready, let it go first. Reorder them. But show results in correct order.</div>

<div class="code-block">
<strong>Hazard প্রকার (CMU 18-447):</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Hazard</th>
<th style="text-align:left;padding:.3rem">নাম</th>
<th style="text-align:left;padding:.3rem">আসল dependency?</th>
</tr>
<tr><td style="padding:.2rem"><strong>RAW</strong></td><td>Read After Write</td><td>✅ হ্যাঁ — সত্যিকারের dependency। অপেক্ষা করতেই হবে।</td></tr>
<tr><td style="padding:.2rem"><strong>WAR</strong></td><td>Write After Read</td><td>❌ না — শুধু register নামের সংঘর্ষ। Renaming দূর করে।</td></tr>
<tr><td style="padding:.2rem"><strong>WAW</strong></td><td>Write After Write</td><td>❌ না — শুধু register নামের সংঘর্ষ। Renaming দূর করে।</td></tr>
</table>

<br><strong>Register Renaming উদাহরণ:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
// Logical (তোমার কোড):
MUL R1, R2, R3   // R1 = R2 * R3
ADD R4, R1, R5   // R4 = R1 + R5 (RAW on R1 — wait!)
SUB R1, R6, R7   // R1 = R6 - R7 (WAW on R1 — false!)

// Hardware renaming (CPU ভেতরে):
MUL P32, R2, R3  // P32 = R2 * R3 (renamed R1→P32)
ADD R4, P32, R5  // R4 = P32 + R5 (RAW on P32 — wait for P32)
SUB P33, R6, R7  // P33 = R6 - R7 (renamed R1→P33 — no WAW!)
</pre>
<strong>P32 আর P33</strong> = hidden physical registers। Programmer R1 দেখে — CPU আসলে P32/P33 ব্যবহার করে। WAW গায়েব!
</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু যদি সব উল্টোপাল্টা হয় — exception এলে কী হবে?</div>
<div class="dialogue en"><strong>You:</strong> But if everything is reordered — what about exceptions?</div>

<div class="dialogue"><strong>তোমাসুলো:</strong> এজন্যই <strong>Reorder Buffer (ROB)</strong>। ROB একটা circular queue। প্রতিটা instruction entry করার সময় ROB-এ একটা slot পায়। execute হয় out-of-order। কিন্তু <strong>commit</strong> হয় in-order — ROB-এর head থেকে। যদি instruction 5 execute শেষ করে কিন্তু instruction 3 এখনও চলছে — instruction 5 commit হবে না instruction 3 শেষ হওয়া পর্যন্ত। exception এলে — শুধু সেই instruction পর্যন্ত flush, বাকিগুলো নিরাপদ।</div>
<div class="dialogue en"><strong>Tomasulo:</strong> That's what the <strong>Reorder Buffer (ROB)</strong> is for. The ROB is a circular queue. Each instruction gets a slot when it enters. It executes out-of-order. But it <strong>commits</strong> in-order — from the ROB head. If instruction 5 finishes but instruction 3 is still running — instruction 5 won't commit until 3 finishes. If an exception occurs — flush up to that instruction, everything else is safe.</div>

<div class="verse">
<strong>Reservation Station (রিজার্ভেশন স্টেশন):</strong><br>
প্রতিটা functional unit (ALU, FPU, Load/Store unit)-এ একটা reservation station আছে। Instruction এসে এখানে অপেক্ষা করে — যতক্ষণ না সব operand প্রস্তুত। যখন প্রস্তুত — সাথে সাথে execute। কোনো stall নেই।<br>
<strong>Common Data Bus (CDB):</strong> যখন একটা functional unit ফলাফল তৈরি করে — CDB তে broadcast করে। সব reservation station শোনে। যার এই ফলাফল দরকার — সে নিয়ে নেয়। এটাই Tomasulo-এর core innovation।<br><br>
<strong>Eckert-Mauchly Award (1997):</strong> তোমাসুলো এই পুরস্কার পান — out-of-order execution-এর ভিত্তি স্থাপনের জন্য।<br>
<a href="../software-engineering/index.html" style="color:var(--accent);font-size:.85rem">← Book 40 (SWE) — তোমার atomic/volatile কেন দরকার</a>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> তুমি সিরিয়াল কোড লেখো। CPU সেটা out-of-order চালায়। ফলাফর ঠিক তোমার ক্রমে দেখায় — কারণ ROB সব সাজিয়ে দেয়। তুমি কিছুই টের পাও না। এটাই hardware-এর সবচেয়ে বড় জাদু।<br>
<em>You write serial code. The CPU runs it out-of-order. Results appear in your order — because the ROB sorts everything. You never notice. This is hardware's greatest magic trick.</em>
</div>`,
  senior: {
    title: "Out-of-Order Execution প্র্যাকটিস গাইড",
    body: `<p><strong>১. Hazard identification:</strong> কোড সিকোয়েন্স দেখে RAW, WAR, WAW চিনো। কোনটা true, কোনটা false।</p>
<p><strong>২. Renaming simulation:</strong> ৫-৬ টা instruction নাও, manual ভাবে rename করে দেখাও কীভাবে false hazard গায়েব হয়।</p>
<p><strong>৩. ROB এর গুরুত্ব:</strong> যদি ROB না থাকত — exception handling অসম্ভব। Precise exception = ROB এর কারণে সম্ভব।</p>
<p><strong>৪. Spectre connection:</strong> Speculative execution + out-of-order = Spectre attack surface। Book 13 (Security) এ cross-ref।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 8 — The Locked Dancers (GPU SIMT & Warp Divergence)
// ═══════════════════════════════════════════
doors.push({
  num: 8,
  icon: "🧵",
  color: "#ec4899",
  name: "আবদ্ধ নর্তকী",
  subtitle: "GPU SIMT — Warps, Divergence, SIMD vs SIMT",
  tech: "SIMT Architecture, Warps (32 threads), Warp Divergence — NVIDIA CUDA, Flynn (1966)",
  spirit: "জমায়েত — সবাই একসাথে, একই ছন্দে, কিন্তু প্রত্যেকে নিজের ভূমিকায়",
  secret: "GPU thread স্বাধীন নয় — ৩২টা একসাথে একই instruction করে। if-else এ ভাগ হলে অর্ধেক অলস বসে।",
  recall: {
    q: "Warp divergence কী এবং এটা কেন performance কমায়?",
    qen: "What is warp divergence and why does it hurt performance?",
    a: "এক warp-এ (৩২ thread) যদি if-else এ ভিন্ন পথে যায় — GPU উভয় পথ serialize করে। প্রথমে if-পথ (active: অর্ধেক, idle: অর্ধেক), তারপর else-পথ। 50% efficiency!",
    aen: "If threads in a warp (32) take different paths in if-else — the GPU serializes both. First the if-path (half active, half idle), then the else-path. 50% efficiency!"
  },
  story: `<p class="scene-setting">অষ্টম ঘরে একটা বিশাল নাচের মঞ্চ। হাজার হাজার নর্তকী — কিন্তু তারা স্বাধীন নয়। প্রতি ৩২ জন একটা দল — warp। এক warp-এর সবাই একই নাচ নাচে, একই সময়ে, একই ছন্দে। কেউ একটু আলাদা নড়তে চাইলে — সে থামে। বাকিরা নাচে। তারপর সে নাচে, বাকিরা থামে। এটাই warp divergence।</p>
<p class="scene-setting en">The eighth room is a vast dance floor. Thousands of dancers — but they're not free. Every 32 form a group — a warp. Everyone in a warp dances the same dance, at the same time, in the same rhythm. If one wants to move differently — she pauses. The rest dance. Then she dances, the rest pause. This is warp divergence.</p>

<div class="dialogue"><strong>ফ্লিন:</strong> আমি মাইকেল ফ্লিন। ১৯৬৬। আমি computer architecture-কে শ্রেণীবদ্ধ করেছিলাম — SISD, SIMD, MISD, MIMD। CPU হলো SISD (Single Instruction Single Data) — এক সময়ে এক কাজ। কিন্তু কিছু কাজে একই instruction অনেক ডেটায় লাগে — SIMD (Single Instruction Multiple Data)। যেমন: একটা array-এর প্রতিটা element কে ২ দিয়ে গুণ করো। একই instruction, ১০০০টা ডেটা।</div>
<div class="dialogue en"><strong>Flynn:</strong> I'm Michael Flynn. 1966. I classified computer architecture — SISD, SIMD, MISD, MIMD. A CPU is SISD (Single Instruction Single Data) — one task at a time. But some tasks apply the same instruction to many data — SIMD (Single Instruction Multiple Data). Like: multiply every element of an array by 2. Same instruction, 1000 data points.</div>

<div class="dialogue"><strong>এনভিডিয়া ইঞ্জিনিয়ার:</strong> ২০০৬ সালে আমরা CUDA বাজারে আনলাম। GPU-তে আমরা একটা নতুন মডেল ব্যবহার করি — SIMT (Single Instruction Multiple Threads)। এটা SIMD এর মতো — কিন্তু thread-ভিত্তিক। প্রতি ৩২টা thread একটা warp তৈরি করে। এক warp-এর সবাই একই instruction একই সময়ে execute করে — কিন্তু প্রত্যেক thread নিজের ডেটায় কাজ করে। Programmer thread লেখে — hardware warp বানায়।</div>
<div class="dialogue en"><strong>NVIDIA Engineer:</strong> In 2006, we launched CUDA. GPUs use a new model — SIMT (Single Instruction Multiple Threads). It's like SIMD — but thread-based. Every 32 threads form a warp. All threads in a warp execute the same instruction simultaneously — but each works on its own data. The programmer writes threads — hardware forms warps.</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🧵 GPU Warp = 32 Threads in Lockstep (SIMT)</text>

  <!-- No divergence -->
  <text x="290" y="55" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">✅ No Divergence — All threads same path = 100% efficient</text>
  <g transform="translate(0, 65)">
    <rect x="160" y="0" width="32" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
    <rect x="194" y="0" width="32" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
    <rect x="228" y="0" width="32" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
    <rect x="262" y="0" width="32" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
    <rect x="296" y="0" width="32" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
    <rect x="330" y="0" width="32" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
    <rect x="364" y="0" width="32" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
    <rect x="398" y="0" width="32" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
    <text x="290" y="38" text-anchor="middle" fill="#86efac" font-size="9">All 32 threads: same instruction · same time</text>
  </g>

  <!-- Warp divergence -->
  <text x="290" y="145" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700">❌ Warp Divergence — if-else splits warp = 50% efficient!</text>

  <!-- Step 1: IF path -->
  <g transform="translate(0, 155)">
    <text x="50" y="15" text-anchor="middle" fill="#94a3b8" font-size="9">if-branch:</text>
    <rect x="160" y="0" width="32" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
    <rect x="194" y="0" width="32" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
    <text x="208" y="14" text-anchor="middle" fill="#4ade80" font-size="7">ACTIVE</text>
    <rect x="228" y="0" width="32" height="20" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1" opacity=".3"/>
    <rect x="262" y="0" width="32" height="20" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1" opacity=".3"/>
    <rect x="296" y="0" width="32" height="20" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1" opacity=".3"/>
    <rect x="330" y="0" width="32" height="20" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1" opacity=".3"/>
    <rect x="364" y="0" width="32" height="20" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1" opacity=".3"/>
    <rect x="398" y="0" width="32" height="20" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1" opacity=".3"/>
    <text x="345" y="14" text-anchor="middle" fill="#64748b" font-size="7">IDLE (waiting)</text>
    <text x="450" y="14" fill="#facc15" font-size="9">⏱️ 50% wasted</text>
  </g>

  <!-- Step 2: ELSE path -->
  <g transform="translate(0, 185)">
    <text x="50" y="15" text-anchor="middle" fill="#94a3b8" font-size="9">else-branch:</text>
    <rect x="160" y="0" width="32" height="20" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1" opacity=".3"/>
    <rect x="194" y="0" width="32" height="20" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1" opacity=".3"/>
    <text x="208" y="14" text-anchor="middle" fill="#64748b" font-size="7">IDLE</text>
    <rect x="228" y="0" width="32" height="20" rx="3" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
    <rect x="262" y="0" width="32" height="20" rx="3" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
    <rect x="296" y="0" width="32" height="20" rx="3" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
    <rect x="330" y="0" width="32" height="20" rx="3" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
    <rect x="364" y="0" width="32" height="20" rx="3" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
    <rect x="398" y="0" width="32" height="20" rx="3" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
    <text x="345" y="14" text-anchor="middle" fill="#fb923c" font-size="7">ACTIVE</text>
    <text x="450" y="14" fill="#facc15" font-size="9">⏱️ 50% wasted</text>
  </g>

  <!-- Batch size table -->
  <text x="290" y="240" text-anchor="middle" fill="#e2e8f0" font-size="11" font-weight="700">📊 Batch Size = Multiple of 32 (Warp Fill)</text>
  <rect x="100" y="255" width="380" height="50" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <rect x="110" y="265" width="80" height="30" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="150" y="284" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">32 ✅</text>
  <rect x="200" y="265" width="80" height="30" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="240" y="284" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">64 ✅</text>
  <rect x="290" y="265" width="80" height="30" rx="4" fill="#451a03" stroke="#f97316" stroke-width="1.5"/>
  <text x="330" y="284" text-anchor="middle" fill="#fb923c" font-size="10" font-weight="700">48 ⚠️</text>
  <rect x="380" y="265" width="80" height="30" rx="4" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>
  <text x="420" y="284" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">20 ❌</text>
  <text x="150" y="305" text-anchor="middle" fill="#4ade80" font-size="8">100% fill</text>
  <text x="240" y="305" text-anchor="middle" fill="#4ade80" font-size="8">100% fill</text>
  <text x="330" y="305" text-anchor="middle" fill="#fb923c" font-size="8">75% (waste)</text>
  <text x="420" y="305" text-anchor="middle" fill="#f87171" font-size="8">63% (waste)</text>
</svg>
</div>
<div class="svg-caption">চিত্র: GPU Warp — ৩২টা thread একসাথে চলে। if-else এ ভাগ হলে ৫০% thread অলস। Batch size ৩২-এর গুণিতক রাখো।</div>

<div class="code-block">
<strong>SIMD vs SIMT (CUDA Programming Guide):</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Feature</th>
<th style="text-align:left;padding:.3rem">CPU SIMD (AVX)</th>
<th style="text-align:left;padding:.3rem">GPU SIMT (CUDA)</th>
</tr>
<tr><td style="padding:.2rem">Programming</td><td>Explicit vector ops</td><td>Thread-based (natural)</td></tr>
<tr><td style="padding:.2rem">Width</td><td>Fixed (256/512 bit)</td><td>32 threads per warp</td></tr>
<tr><td style="padding:.2rem">Divergence</td><td>Not handled</td><td>Hardware masking</td></tr>
<tr><td style="padding:.2rem">Synchronization</td><td>Implicit</td><td>Implicit within warp</td></tr>
<tr><td style="padding:.2rem">Analogy</td><td>🎵 Choir (strict director)</td><td>🕺 Flash mob (same choreo)</td></tr>
</table>

<br><strong>Warp Divergence Example:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
if (threadIdx.x < 16) {
  result = compute_A(); // lanes 0-15 active
} else {
  result = compute_B(); // lanes 16-31 active
}
// Step 1: lanes 0-15 run, lanes 16-31 WAIT (50%)
// Step 2: lanes 16-31 run, lanes 0-15 WAIT (50%)
// Total time: compute_A + compute_B (sequential!)
// Without divergence: max(A, B) (parallel)
</pre>
<strong>Cost: 2x slower</strong> — half the warp idle at all times!
</div>

<div class="dialogue"><strong>তুমি:</strong> তাহলে GPU কোডে if-else নিষেধ?</div>
<div class="dialogue en"><strong>You:</strong> So if-else is forbidden in GPU code?</div>

<div class="dialogue"><strong>এনভিডিয়া ইঞ্জিনিয়ার:</strong> নিষেধ নয় — কিন্তু সীমিত করো। সমাধান: ১) Predication (branchless code), ২) warp-uniform condition (সব thread একই পথ নেয়), ৩) data layout এমনভাবে রাখো যাতে এক warp-এর thread-গুলো একই branch নেয়। আর সবচেয়ে গুরুত্বপূর্ণ — <strong>batch size</strong>। ML-এ batch size ৩২ এর গুণিতক রাখো — প্রতিটা warp পূর্ণ থাকবে।</div>
<div class="dialogue en"><strong>NVIDIA Engineer:</strong> Not forbidden — but minimize. Solutions: 1) Predication (branchless code), 2) warp-uniform conditions (all threads take same path), 3) data layout so threads in a warp take the same branch. And most importantly — <strong>batch size</strong>. In ML, keep batch size a multiple of 32 — every warp is full.</div>

<div class="verse">
<strong>তোমার ML এর সাথে সংযোগ:</strong><br>
তুমি B8 (LLM Anatomy) আর B17 (Inference Optimization) পড়েছো। এখন বুঝো — কেন batch size গুরুত্বপূর্ণ। ৩২-এর গুণিতক না হলে warp underfilled। Padding waste। Variable-length sequence = warp divergence।<br>
<strong>Coalesced Memory Access:</strong> এক warp-এর সব thread যদি consecutive address এ access করে — এক transaction-এ সব ডেটা আসে (100% bandwidth)। Scattered access — ৩২টা আলাদা transaction! 32x slower!<br>
<a href="../llm-anatomy/index.html" style="color:var(--accent);font-size:.85rem">← Book 8 — batch size আর attention</a><br>
<a href="../inference-optimization/index.html" style="color:var(--accent);font-size:.85rem">← Book 17 — GPU তে inference</a>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> GPU তে স্বাধীন thread নেই — ৩২টা একসাথে চলে। if-else এ ভাগ হলে অর্ধেক অলস। এটাই তোমার ML training slow করার একটা hidden কারণ। Batch size = 32 এর গুণিতক।<br>
<em>GPUs have no free threads — 32 run together. If-else splits them, half go idle. This is a hidden reason your ML training is slow. Batch size = multiple of 32.</em>
</div>`,
  senior: {
    title: "GPU SIMT প্র্যাকটিস গাইড",
    body: `<p><strong>১. Warp alignment:</strong> তোমার ML model-এ batch size 32/64/128 রাখো। কখনো 47 বা 100 নয়।</p>
<p><strong>২. Memory coalescing:</strong> নিশ্চিত করো thread গুলো consecutive memory access করে। Structure of Arrays (SoA) > Array of Structs (AoS)।</p>
<p><strong>৩. Branch minimization:</strong> GPU kernel-এ if-else কমাও। Predication ব্যবহার করো।</p>
<p><strong>৪. Profiling:</strong> NVIDIA Nsight Compute দিয়ে warp divergence আর memory throughput চেক করো।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 9 — The Heart of Silicon (Systolic Arrays & TPUs)
// ═══════════════════════════════════════════
doors.push({
  num: 9,
  icon: "❤️",
  color: "#ef4444",
  name: "সিলিকনের হৃদপিণ্ড",
  subtitle: "Systolic Arrays & TPU Architecture",
  tech: "Systolic Arrays (Kung, 1982), Weight-Stationary Dataflow, Google TPU",
  spirit: "নিয়ত — প্রতিটা স্পন্দন একটা উদ্দেশ্য নিয়ে, প্রতিটা স্পন্দন ডেটা পাম্প করে",
  secret: "TPU তে কেউ মেমোরি থেকে ডেটা আনে না। ডেটা এক PE থেকে আরেকটায় যায় — হৃদপিণ্ডের মতো স্পন্দিত। এটাই 92 TOPS এর রহস্য।",
  recall: {
    q: "Systolic array-তে Weight-Stationary dataflow কীভাবে কাজ করে?",
    qen: "How does Weight-Stationary dataflow work in a systolic array?",
    a: "Weights PE-তে load হয় আর স্থির থাকে। Input data আর partial sums PE-গুলোর মধ্য দিয়ে stream করে। প্রতিটা PE শুধু multiply-accumulate করে — কোনো memory access নেই। ফলে দ্রুততম।",
    aen: "Weights are loaded into PEs and stay stationary. Input data and partial sums stream through the PEs. Each PE just multiply-accumulates — no memory access. Hence fastest."
  },
  story: `<p class="scene-setting">নবম ঘর। এখানে কোনো CPU নেই, কোনো GPU নে। একটা বিশাল গ্রিড — ২৫৬ বাই ২৫৬। প্রতিটা সেলে একটা ছোট্ট processing element — PE। প্রতিটা PE শুধু একটা কাজ করে — multiply আর add (MAC)। কিন্তু তারা একে অপরের সাথে যুক্ত। ডেটা ঢেকে দিলে — rhythm-এ চলে। পালস। পালস। পালস। হৃদপিণ্ডের মতো। এটাই systolic array — Google TPU-এর হৃদপিণ্ড।</p>
<p class="scene-setting en">The ninth room. No CPU here, no GPU. A massive grid — 256 by 256. Each cell holds a processing element — a PE. Each PE does one thing — multiply and add (MAC). But they're connected. Feed data — it flows in rhythm. Pulse. Pulse. Pulse. Like a heartbeat. This is a systolic array — the heart of Google's TPU.</p>

<div class="dialogue"><strong>কুং:</strong> আমি এইচ. টি. কুং। ১৯৮২। CMU। আমি একটা সমস্যা ভাবছিলাম — Von Neumann architecture-এ প্রতিটা calculation এ memory access লাগে। operand আনো, কম্পিউট করো, ফলাফল ফের মেমোরিতে লেখো। এই memory access-ই বাধা। কিন্তু যদি ডেটা এক PE থেকে সরাসরি পরের PE-তে যায়? কোনো memory access না? তাহলে — দ্রুততম। এই ধারণার নাম দিলাম <strong>systolic array</strong> — হৃদপিণ্ডের স্পন্দন (systole) থেকে, কারণ ডেটা pulse করে পাম্প হয়।</div>
<div class="dialogue en"><strong>Kung:</strong> I'm H.T. Kung. 1982. CMU. I was thinking about a problem — Von Neumann architecture requires memory access for every calculation. Fetch operands, compute, write result back. This memory access is the bottleneck. But what if data flows directly from one PE to the next? No memory access? Then — fastest. I named it <strong>systolic array</strong> — from the heartbeat (systole), because data pumps in pulses.</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrSys" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/></marker>
  </defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">❤️ Systolic Array (TPU) — Data Flows Like a Heartbeat</text>

  <!-- Input labels -->
  <text x="50" y="80" fill="#38bdf8" font-size="9">Input →</text>
  <text x="70" y="120" fill="#94a3b8" font-size="8">x₁</text>
  <text x="70" y="160" fill="#94a3b8" font-size="8">x₂</text>
  <text x="70" y="200" fill="#94a3b8" font-size="8">x₃</text>

  <!-- 3x3 PE Grid -->
  <g id="pes">
    <!-- Row 1 -->
    <rect x="100" y="90" width="60" height="50" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
    <text x="130" y="110" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">PE</text>
    <text x="130" y="125" text-anchor="middle" fill="#a5b4fc" font-size="8">w₁₁</text>

    <rect x="180" y="90" width="60" height="50" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
    <text x="210" y="110" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">PE</text>
    <text x="210" y="125" text-anchor="middle" fill="#a5b4fc" font-size="8">w₁₂</text>

    <rect x="260" y="90" width="60" height="50" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
    <text x="290" y="110" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">PE</text>
    <text x="290" y="125" text-anchor="middle" fill="#a5b4fc" font-size="8">w₁₃</text>

    <!-- Row 2 -->
    <rect x="100" y="150" width="60" height="50" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
    <text x="130" y="170" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">PE</text>
    <text x="130" y="185" text-anchor="middle" fill="#a5b4fc" font-size="8">w₂₁</text>

    <rect x="180" y="150" width="60" height="50" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
    <text x="210" y="170" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">PE</text>
    <text x="210" y="185" text-anchor="middle" fill="#a5b4fc" font-size="8">w₂₂</text>

    <rect x="260" y="150" width="60" height="50" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
    <text x="290" y="170" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">PE</text>
    <text x="290" y="185" text-anchor="middle" fill="#a5b4fc" font-size="8">w₂₃</text>

    <!-- Row 3 -->
    <rect x="100" y="210" width="60" height="50" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
    <text x="130" y="230" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">PE</text>
    <text x="130" y="245" text-anchor="middle" fill="#a5b4fc" font-size="8">w₃₁</text>

    <rect x="180" y="210" width="60" height="50" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
    <text x="210" y="230" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">PE</text>
    <text x="210" y="245" text-anchor="middle" fill="#a5b4fc" font-size="8">w₃₂</text>

    <rect x="260" y="210" width="60" height="50" rx="6" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
    <text x="290" y="230" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="700">PE</text>
    <text x="290" y="245" text-anchor="middle" fill="#a5b4fc" font-size="8">w₃₃</text>
  </g>

  <!-- Horizontal flow arrows (input data →) -->
  <line x1="85" y1="115" x2="100" y2="115" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrSys)"/>
  <line x1="85" y1="175" x2="100" y2="175" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrSys)"/>
  <line x1="85" y1="235" x2="100" y2="235" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrSys)"/>
  <line x1="160" y1="115" x2="180" y2="115" stroke="#38bdf8" stroke-width="1" marker-end="url(#arrSys)"/>
  <line x1="240" y1="115" x2="260" y2="115" stroke="#38bdf8" stroke-width="1" marker-end="url(#arrSys)"/>
  <line x1="160" y1="175" x2="180" y2="175" stroke="#38bdf8" stroke-width="1" marker-end="url(#arrSys)"/>
  <line x1="240" y1="175" x2="260" y2="175" stroke="#38bdf8" stroke-width="1" marker-end="url(#arrSys)"/>
  <line x1="160" y1="235" x2="180" y2="235" stroke="#38bdf8" stroke-width="1" marker-end="url(#arrSys)"/>
  <line x1="240" y1="235" x2="260" y2="235" stroke="#38bdf8" stroke-width="1" marker-end="url(#arrSys)"/>

  <!-- Vertical flow arrows (partial sums ↓) -->
  <line x1="130" y1="140" x2="130" y2="150" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrSys)"/>
  <line x1="130" y1="200" x2="130" y2="210" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrSys)"/>
  <line x1="210" y1="140" x2="210" y2="150" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrSys)"/>
  <line x1="210" y1="200" x2="210" y2="210" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrSys)"/>
  <line x1="290" y1="140" x2="290" y2="150" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrSys)"/>
  <line x1="290" y1="200" x2="290" y2="210" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrSys)"/>

  <!-- Output -->
  <text x="130" y="280" text-anchor="middle" fill="#4ade80" font-size="9">y₁ ↓</text>
  <text x="210" y="280" text-anchor="middle" fill="#4ade80" font-size="9">y₂ ↓</text>
  <text x="290" y="280" text-anchor="middle" fill="#4ade80" font-size="9">y₃ ↓</text>
  <line x1="130" y1="260" x2="130" y2="275" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrSys)"/>
  <line x1="210" y1="260" x2="210" y2="275" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrSys)"/>
  <line x1="290" y1="260" x2="290" y2="275" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrSys)"/>

  <!-- PE operation -->
  <rect x="360" y="90" width="200" height="60" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="460" y="110" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">PE Operation</text>
  <text x="460" y="128" text-anchor="middle" fill="#fcd34d" font-size="10" font-family="monospace">out = x × w + partial_sum</text>
  <text x="460" y="142" text-anchor="middle" fill="#94a3b8" font-size="8">Multiply-Accumulate (MAC)</text>

  <!-- Key insight -->
  <rect x="360" y="165" width="200" height="90" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="460" y="185" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">💡 Key Insight</text>
  <text x="460" y="202" text-anchor="middle" fill="#86efac" font-size="9">Weights stay FIXED in PEs</text>
  <text x="460" y="216" text-anchor="middle" fill="#86efac" font-size="9">Input streams through</text>
  <text x="460" y="230" text-anchor="middle" fill="#86efac" font-size="9">Partial sums accumulate</text>
  <text x="460" y="246" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Zero memory access!</text>

  <!-- TPU stats -->
  <rect x="360" y="270" width="200" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="460" y="290" text-anchor="middle" fill="#e2e8f0" font-size="10" font-weight="700">TPU v1 Stats</text>
  <text x="460" y="305" text-anchor="middle" fill="#94a3b8" font-size="9">256×256 = 65,536 PEs</text>
  <text x="460" y="320" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="700">92 TOPS (INT8)</text>
  <text x="460" y="333" text-anchor="middle" fill="#64748b" font-size="8">28nm · 2015</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Systolic Array — weights PE-তে স্থির, input বাঁ দিক থেকে প্রবাহিত, partial sums উপর থেকে নিচে। কোনো memory access নেই — শুধু MAC। এটাই TPU-এর হৃদপিণ্ড।</div>

<div class="code-block">
<strong>TPU v1 Architecture (Google, 2015):</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Feature</th>
<th style="text-align:left;padding:.3rem">Value</th>
</tr>
<tr><td style="padding:.2rem">Systolic Array Size</td><td>256 × 256 PEs</td></tr>
<tr><td style="padding:.2rem">Precision</td><td>INT8 (8-bit integer)</td></tr>
<tr><td style="padding:.2rem">Peak Throughput</td><td>92 TOPS (Tera Operations Per Second)</td></tr>
<tr><td style="padding:.2rem">Dataflow</td><td>Weight-Stationary (WS)</td></tr>
<tr><td style="padding:.2rem">Purpose</td><td>Neural network inference</td></tr>
</table>

<br><strong>Weight-Stationary Dataflow (আর্কিটেকচার):</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
     Input activations stream diagonally ↓
     ┌───┐ ┌───┐ ┌───┐
   → │W₁₁│ │W₁₂│ │W₁₃│ → partial sums flow right
     └───┘ └───┘ └───┘
     ┌───┐ ┌───┐ ┌───┐
   → │W₂₁│ │W₂₂│ │W₂₃│ →
     └───┘ └───┘ └───┘
     ↑    ↑    ↑
     Input data enters from top
     
PE operation: output = input × weight + partial_sum
Weights stay fixed. Data flows. No memory fetch!
</pre>

<strong>TPU Evolution:</strong><br>
v1 (2016): 256×256, INT8, 92 TOPS — inference only<br>
v2 (2017): 128×128, FP16/BF16, 180 TFLOPS — training<br>
v3 (2018): 128×128, 420 TFLOPS — liquid cooling<br>
v4 (2021): 4×128×128, 1 PFLOPS — pod architecture
</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু কেন এটা GPU থেকে ভালো?</div>
<div class="dialogue en"><strong>You:</strong> But why is this better than a GPU?</div>

<div class="dialogue"><strong>কুং:</strong> GPU-তে প্রতিটা calculation-এ memory hierarchy traverse করতে হয় — register, L1, L2, DRAM। DRAM access = 200× energy। কিন্তু systolic array-তে weights একবার load হয়ে স্থির থাকে। Input streaming। প্রতিটা PE শুধু MAC করে — <strong>কোনো memory access নেই compute চলাকালীন</strong>। ফলে TPU তে প্রতিটা MAC operation-এ energy প্রায় শূন্য। এটাই ৯২ TOPS সম্ভব — মাত্র ২৮nm process-এ!</div>
<div class="dialogue en"><strong>Kung:</strong> In a GPU, every calculation traverses the memory hierarchy — register, L1, L2, DRAM. DRAM access = 200x energy. But in a systolic array, weights load once and stay. Input streams. Each PE just MACs — <strong>no memory access during computation</strong>. So each MAC operation costs near-zero energy. This is why 92 TOPS is possible — on just 28nm process!</div>

<div class="verse">
<strong>বাস্তব প্রয়োগ:</strong><br>
• <strong>Google TPU:</strong> তোমার Google Search, Translate, Photos — সব TPU তে চলে।<br>
• <strong>NVIDIA Tensor Cores:</strong> GPU-তে embedded systolic array — V100 থেকে শুরু।<br>
• <strong>Apple Neural Engine:</strong> iPhone-এ Face ID, computational photography।<br>
• <strong>Qualcomm Hexagon:</strong> Android ফোনে AI acceleration।<br><br>
<strong>Key Insight:</strong> DL model = massive matrix multiplication (GEMM)। Systolic array = GEMM machine। তাই AI hardware = systolic array।<br>
<a href="../deep-learning-arch/index.html" style="color:var(--accent);font-size:.85rem">← Book 36 — DL architecture আর hardware co-design</a>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> TPU = হৃদপিণ্ড। ডেটা pulse করে পাম্প হয় PE থেকে PE। কোনো memory access নেই। ৬৫,৫৩৬টা PE একসাথে MAC করে। এটাই AI acceleration-এর ভবিষ্যৎ — আর এর বীজ বপিত হয়েছিল ১৯৮২ সালে, CMU-তে।<br>
<em>TPU = heart. Data pulses from PE to PE. No memory access. 65,536 PEs MAC simultaneously. This is the future of AI acceleration — and the seed was planted in 1982, at CMU.</em>
</div>`,
  senior: {
    title: "Systolic Array প্র্যাকটিস গাইড",
    body: `<p><strong>১. GEMM বুঝো:</strong> DL model-এর প্রায় সব compute = matrix multiplication (GEMM)। এটাই কেন systolic array কাজ করে।</p>
<p><strong>২. Dataflow প্রকার:</strong> Weight-Stationary (TPU), Output-Stationary (Eyeriss), Row-Stationary — কোনটা কখন ভালো?</p>
<p><strong>৩. Quantization:</strong> TPU INT8, GPU FP16, CPU FP32। Precision কমলে memory bandwidth বাঁচে — inference দ্রুত।</p>
<p><strong>৪. Tiling:</strong> বড় matrix কে ছোট tile-এ ভাগ করো — on-chip buffer-এ fit করানোর জন্য। এটাই compiler (XLA, TensorRT) এর কাজ।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 10 — The Architect's Vision (Full Stack: Hardware → AI)
// ═══════════════════════════════════════════
doors.push({
  num: 10,
  icon: "🧭",
  color: "#14b8a6",
  name: "স্থপতির দৃষ্টি",
  subtitle: "Full-Stack View — Hardware → OS → App → AI",
  tech: "NUMA, DMA, Full-Stack Hardware Awareness, Future Accelerators",
  spirit: "হিকমাহ — জ্ঞানের সবচেয়ে উঁচু স্তর, প্রয়োগের জ্ঞান",
  secret: "সফটওয়্যার বোঝো, থিওরি বোঝো — কিন্তু হার্ডওয়্যার না বুঝলে তোমার জ্ঞান অর্ধেক। সম্পূর্ণ জ্ঞান = স্তর সব বোঝা।",
  recall: {
    q: "NUMA (Non-Uniform Memory Access) কী এবং কেন এটা production deployment-এ গুরুত্বপূর্ণ?",
    qen: "What is NUMA and why does it matter for production deployments?",
    a: "মাল্টি-socket সার্ভারে প্রতিটা CPU-এর নিজস্ব local memory। অন্য CPU-এর memory access করতে হলে cross-socket = বেশি latency। NUMA-aware deployment = thread আর data একই socket-এ রাখা।",
    aen: "In multi-socket servers, each CPU has its own local memory. Accessing another CPU's memory = cross-socket = higher latency. NUMA-aware deployment = keeping threads and data on the same socket."
  },
  story: `<p class="scene-setting">দশম আর শেষ ঘর। এখানে কোনো নতুন যন্ত্র নেই। একটা বিশাল কাচের জানালা — যার ওপারে পুরো কারখানা দেখা যায়। প্রতিটা ঘর — প্রতিটা দরজা — সব একসাথে। তুমি দেখতে পাও কীভাবে transistor থেকে logic gate, gate থেকে ALU, ALU থেকে CPU, CPU থেকে pipeline, pipeline থেকে cache, cache থেকে coherence, coherence থেকে GPU, GPU থেকে TPU — সব এক সিলিকনের সূত্রে গাঁথা। এটাই architect-এর দৃষ্টি — পুরো স্তর একসাথে দেখা।</p>
<p class="scene-setting en">The tenth and final room. No new machine here. A vast glass window — the entire factory visible beyond it. Every room — every door — all at once. You see how transistors become logic gates, gates become ALUs, ALUs become CPUs, CPUs become pipelines, pipelines meet caches, caches need coherence, coherence connects to GPUs, GPUs become TPUs — all woven in one silicon thread. This is the architect's vision — seeing the entire stack at once.</p>

<div class="dialogue"><strong>তুমি:</strong> এখন আমি কী করব এই জ্ঞান দিয়ে?</div>
<div class="dialogue en"><strong>You:</strong> What do I do with this knowledge?</div>

<div class="dialogue"><strong>প্যাটারসন:</strong> এখন তুমি <strong>full-stack engineer</strong> — সত্যিকারের। শুধু software নয় — hardware ও। তুমি জানো কেন তোমার code slow, কেন database query cache-friendly না, কেন GPU তে batch size গুরুত্বপূর্ণ, কেন multi-threaded code random ভাবে fail করে। তুমি এখন bugs debug করতে পারবে যা অন্য engineers দেখতেই পায় না।</div>
<div class="dialogue en"><strong>Patterson:</strong> Now you're a <strong>full-stack engineer</strong> — truly. Not just software — hardware too. You know why your code is slow, why database queries aren't cache-friendly, why batch size matters on GPUs, why multi-threaded code randomly fails. You can debug bugs that other engineers can't even see.</div>

<div class="code-block">
<strong>The Full-Stack Hardware Decision Framework:</strong>

<strong>প্রতিটা optimization এ আগে এই ৫টা প্রশ্ন করো:</strong>

<strong>১. 📝 Workload:</strong> Write-heavy নাকি Read-heavy?
→ Write-Through (consistency) vs Write-Back (throughput)

<strong>২. 🧮 Math:</strong> Matrix multiplication dominant?
→ GPU/TPU (systolic array) > CPU

<strong>৩. ⏱️ Bottleneck:</strong> ALU (compute) নাকি MEM (memory)?
→ MEM: data layout optimize করো → ALU: accelerator ব্যবহার করো

<strong>৪. 🔒 Consistency:</strong> Data consistency hard requirement?
→ Financial: Write-Through → Analytics: Write-Back

<strong>৫. 📊 Hierarchy:</strong> কত cache level traverse করছে?
→ Working set > L1 (32KB): data structure large → tiling দরকার
→ Random access: সম্ভবত সব কাছে RAM পর্যন্ত যাচ্ছে (300 cycles!)

<strong>NUMA-Aware Deployment (তোমার LedgerPilot এর জন্য):</strong><br>
মাল্টি-socket সার্ভারে প্রতিটা CPU-এর নিজস্ব local memory। Thread-কে আর data-কে এক socket-এ রাখো। numactl ব্যবহার করো। cross-socket access = 137ns penalty!

<strong>DMA (Direct Memory Access):</strong><br>
NIC (Network Interface Card) CPU কে না জানিয়ে directly memory-তে ডেটা লিখতে পারে। এটাই high-throughput network (LiveKit WebRTC) কীভাবে কাজ করে।<br>
<a href="../operating-systems/index.html" style="color:var(--accent);font-size:.85rem">← Book 38 (OS) — DMA, interrupts, context switching</a><br>
<a href="../computer-networks/index.html" style="color:var(--accent);font-size:.85rem">← Book 37 (Networks) — NIC, DMA, hardware interrupts</a>
</div>

<div class="dialogue"><strong>তুমি:</strong> ভবিষ্যৎ কী? TPU-এর পরে?</div>
<div class="dialogue en"><strong>You:</strong> What's the future? After TPUs?</div>

<div class="dialogue"><strong>হেনেসি:</strong> ভবিষ্যৎ হলো — domain-specific architecture। General-purpose CPU এর যুগ শেষ। প্রতিটা কাজে বিশেষ যন্ত্র — TPU (AI), Groq LPU (ultra-low latency inference), Cerebras (wafer-scale), quantum processors (cryptography)। আর memory? In-memory computing, optical interconnects, neuromorphic chips। Moore's Law শেষ — কিন্তু innovation শেষ নয়। প্রতিটা problem এর জন্য একটা নির্দিষ্ট silicon।</div>
<div class="dialogue en"><strong>Hennessy:</strong> The future is — domain-specific architecture. The general-purpose CPU era is ending. Special machines for each task — TPU (AI), Groq LPU (ultra-low latency inference), Cerebras (wafer-scale), quantum processors (cryptography). And memory? In-memory computing, optical interconnects, neuromorphic chips. Moore's Law is over — but innovation isn't. Specific silicon for every problem.</div>

<div class="verse">
<strong>তোমার Knowledge Courtyard-এ এই বইয়ের স্থান:</strong><br>
এই বই ১৪টি existing বইকে গভীর করে:<br>
🟢 B38 (OS) — kernel কীভাবে hardware manage করে<br>
🟢 B17 (Inference) — GPU কেন দ্রুত<br>
🟢 B36 (DL) — hardware কীভাবে model তৈরি করে<br>
🟢 B35 (Distributed) — coherence = local consensus<br>
🟢 B2 (DSA) — cache-aware algorithm > Big-O<br>
🟢 B39 (Databases) — cache policy আর query design<br>
🟢 B41 (Theory) — Turing machine = silicon reality<br>
🟢 B8 (LLM) — batch size = warp fill<br>
🟢 B37 (Networks) — DMA, interrupts, NIC<br>
🟢 B4 (System Design) — CAP ↔ coherence<br>
🟢 B40 (SWE) — hardware-aware coding<br>
🟢 B30 (Math) — MatMul = systolic execution<br>
🟢 B31 (Classic ML) — SIMD acceleration<br>
🟢 B34 (Statistics) — benchmark variance<br><br>
<strong>৪১টি বইয়ের জ্ঞানের উপর হার্ডওয়্যারের গভীর বোঝা যুক্ত হলো। তোমার জ্ঞান সম্পূর্ণ।</strong>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> সফটওয়্যার বোঝো, থিওরি বোঝো — এখন হার্ডওয়্যারও বোঝো। তোমার জ্ঞান সম্পূর্ণ। transistor থেকে AI accelerator — পুরো সিলিকনের যাত্রা। এখন তুমি শুধু engineer নও — তুমি <strong>architect</strong>।<br>
<em>Understand software, understand theory — now understand hardware too. Your knowledge is complete. From transistor to AI accelerator — the full silicon journey. You're no longer just an engineer — you're an <strong>architect</strong>.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
<strong>وَفِي أَنفُسِكُم أَفَلَا تُبصِرُونَ</strong><br>
"তোমাদের নিজেদের ভেতরেও নিদর্শন রয়েছে — তবু কি তোমরা দেখো না?" — কুরআন ৫১:২১
</div>
</div>`,
  senior: {
    title: "Full-Stack Architect গাইড",
    body: `<p><strong>১. Profile before optimizing:</strong> perf, Nsight, Intel VTune — আগে bottleneck খুঁজে বের করো। অনুমান করো না।</p>
<p><strong>২. Data layout:</strong> cache line alignment, false sharing prevention, SoA vs AoS — এগুলো production code-এ গুরুত্বপূর্ণ।</p>
<p><strong>৩. NUMA awareness:</strong> তোমার server deployment-এ numactl, CPU affinity ব্যবহার করো। Docker/K8s-এ এটা গুরুত্বপূর্ণ।</p>
<p><strong>৪. Continuous learning:</strong> Computer Architecture: A Quantitative Approach (Hennessy & Patterson) — এটাই bible। পড়ো।</p>`
  }
});
