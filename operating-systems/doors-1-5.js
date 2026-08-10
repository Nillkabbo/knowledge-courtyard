const doors = [];

doors.push({
  num: 1,
  icon: "💾",
  color: "#22d3ee",
  name: "প্রাণহীন থেকে জীবন্ত",
  subtitle: "From Lifeless to Living",
  tech: "Process vs Program — process states (new, ready, running, waiting, terminated), PCB, fork/exec/wait (Unix 1969)",
  spirit: "রুহ — আত্মা, নিষ্প্রাণ দেহে প্রাণ দান",
  secret: "Program = রেসিপি (নিষ্প্রাণ টেক্সট)। Process = রান্না (জীবন্ত, সম্পদ ব্যবহার করছে)। OS = রাঁধুনি যে রেসিপিকে জীবন্ত করে।",
  recall: {
    q: " Program এবং Process-এর মূল পার্থক্য কী?",
    qen: "What is the fundamental difference between a program and a process?",
    a: "Program = ডিস্কে থাকা নিষ্প্রাণ কোড। Process = মেমোরিতে চলমান প্রোগ্রাম — CPU, মেমোরি, state সহ।",
    aen: "Program = lifeless code on disk. Process = running program in memory — with CPU, memory, and state."
  },
  story: `<p class="scene-setting">একটি রান্নাঘরে ঢোকো। টেবিলে একটি রেসিপি বই পড়ে আছে — "বিরিয়ানি তৈরির নিয়ম।" এই বইটি একটি প্রোগ্রাম। নিষ্প্রাণ। কোনো ভাত হয়নি, কোনো ঘ্রাণ নেই। কিন্তু একজন রাঁধুনি এসে বইটি খুললো — চুলা জ্বালালো, চাল ধুলো, মশলা মেশালো। এখন রান্না হচ্ছে — গরম, ঘ্রাণ, শব্দ। এই রান্নাটি হলো প্রসেস। জীবন্ত।</p>
<p class="scene-setting en">Enter a kitchen. On the table sits a recipe book — "How to make biryani." This book is a program. Lifeless. No rice cooked, no aroma. But a cook comes, opens the book — lights the stove, washes rice, mixes spices. Now cooking is happening — heat, aroma, sound. This cooking is a process. Alive.</p>

<div class="dialogue"><strong>প্রাণদাতা কারিগর রহিম:</strong> একটি প্রোগ্রাম শুধু ফাইল — ডিস্কে পড়ে থাকে। কোনো জীবন নেই। কিন্তু তুমি যখন সেটি চালাও, OS একটি অদ্ভুত কাজ করে — এই নিষ্প্রাণ টেক্সটকে মেমোরিতে তোলে, একটি পরিচয় দেয় (PID — Process ID), CPU সময় বরাদ্দ করে। প্রোগ্রামটি এখন প্রসেস — জীবন্ত।</div>
<div class="dialogue en"><strong>Life Giver Rahim:</strong> A program is just a file — sitting on disk. No life. But when you run it, the OS does something magical — it lifts this lifeless text into memory, gives it an identity (PID — Process ID), allocates CPU time. The program is now a process — alive.</div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>প্রসেসের ৫টি অবস্থা (Process States):</strong><br>
<strong>১. New:</strong> সবে জন্ম নিয়েছে — OS তৈরি করছে<br>
<strong>২. Ready:</strong> প্রস্তুত — CPU-র জন্য অপেক্ষা করছে<br>
<strong>৩. Running:</strong> CPU-তে চলছে — নির্দেশ কার্যকর হচ্ছে<br>
<strong>৪. Waiting:</strong> অপেক্ষা — I/O বা অন্য কোনো ইভেন্টের জন্য থামা<br>
<strong>৫. Terminated:</strong> শেষ — কাজ সম্পন্ন, মেমোরি মুক্ত</div></div>

<div class="callout info"><span class="co-icon">📋</span><div><strong>PCB (Process Control Block):</strong> প্রতিটি প্রসেসের জন্য OS একটি "জন্মসনদ" রাখে —<br>
<strong>PID:</strong> প্রসেস আইডি (পরিচয়)<br>
<strong>State:</strong> বর্তমান অবস্থা (ready/running/waiting)<br>
<strong>Program Counter:</strong> কোন নির্দেশে আছে<br>
<strong>Registers:</strong> CPU register-এর মান<br>
<strong>Memory limits:</strong> কতটা মেমোরি ব্যবহার করছে<br>
<strong>Open files:</strong> কোন কোন ফাইল খোলা আছে</div></div>

<div class="callout info"><span class="co-icon">🔧</span><div><strong>Unix Process System Calls:</strong><br>
<strong>fork():</strong> একটি প্রসেসের সঠিক কপি তৈরি করে (parent → child)<br>
<strong>exec():</strong> নতুন প্রোগ্রাম দিয়ে নিজেকে প্রতিস্থাপন করে<br>
<strong>wait():</strong> parent child-এর শেষ হওয়ার জন্য অপেক্ষা করে<br>
<strong>exit():</strong> প্রসেস নিজে নিজেকে শেষ করে<br>
<strong>kill():</strong> অন্য প্রসেসকে শেষ করতে বলা</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>fork() এর রহস্য:</strong> fork() একবার কল হয় কিন্তু দুবার ফেরত আসে! Parent-এ একবার (child-এর PID সহ), child-এ একবার (০ সহ)। এই দুটি পথ আলাদা — parent এক কাজ করে, child আরেক কাজ। এটাই Unix-এর নতুন প্রসেস তৈরির পদ্ধতি — ১৯৬৯ সাল থেকে অপরিবর্তিত।</div></div>

<div class="verse">الَّذِي خَلَقَ فَسَوَّىٰ ۝ وَالَّذِي قَدَّرَ فَهَدَىٰ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"যিনি সৃষ্টি করেছেন ও সুসম্পন্ন করেছেন। যিনি নির্ধারণ করেছেন ও পথ দেখিয়েছেন।" — কুরআন ৮৭:২-৩</div>

<p class="scene-setting">এই আয়াতে সৃষ্টি ও সুসম্পন্ন করার কথা বলা হয়েছে। OS-ও তেমন — একটি প্রোগ্রামকে সৃষ্টি করে (new), সুসম্পন্ন করে (ready), পথ দেখায় (running), এবং নির্ধারণ করে কখন শেষ হবে (terminated)। প্রতিটি প্রসেসের একটি জীবনচক্র আছে — জন্ম থেকে মৃত্যু পর্যন্ত। OS সেই চক্রের অভিভাবক।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৭ (নেটওয়ার্কস) Door ৪:</strong> Port শিখেছিলে — প্রতিটি প্রসেস একটি পোর্টে কথা শোনে। Book ৩৫ (ডিস্ট্রিবিউটেড): একটি distributed system-এ শত শত প্রসেস একসাথে চলে — OS প্রতিটিকে আলাদা রাখে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">💾 Process States: New → Ready → Running → Terminated</text>
  <rect x="20" y="60" width="90" height="50" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="65" y="85" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="700">NEW</text>
  <text x="65" y="100" text-anchor="middle" fill="#94a3b8" font-size="10">OS creates</text>
  <rect x="140" y="60" width="90" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="185" y="85" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">READY</text>
  <text x="185" y="100" text-anchor="middle" fill="#94a3b8" font-size="10">Waiting for CPU</text>
  <rect x="260" y="60" width="90" height="50" rx="8" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="305" y="85" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">RUNNING</text>
  <text x="305" y="100" text-anchor="middle" fill="#94a3b8" font-size="10">On CPU now</text>
  <rect x="380" y="60" width="90" height="50" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="425" y="85" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">WAITING</text>
  <text x="425" y="100" text-anchor="middle" fill="#94a3b8" font-size="10">I/O or event</text>
  <rect x="490" y="60" width="80" height="50" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <text x="530" y="85" text-anchor="middle" fill="#94a3b8" font-size="9" font-weight="700">TERMINATED</text>
  <text x="530" y="100" text-anchor="middle" fill="#64748b" font-size="10">Done</text>
  <line x1="110" y1="85" x2="140" y2="85" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrP)"/>
  <line x1="230" y1="85" x2="260" y2="85" stroke="#22c55e" stroke-width="2" marker-end="url(#arrP)"/>
  <line x1="350" y1="85" x2="380" y2="85" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrP)"/>
  <line x1="470" y1="85" x2="490" y2="85" stroke="#f87171" stroke-width="2" marker-end="url(#arrP)"/>
  <path d="M 305 110 Q 305 140 185 140 Q 185 150 185 110" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="245" y="155" text-anchor="middle" fill="#4ade80" font-size="10">preempt → ready</text>
  <path d="M 425 110 Q 425 170 185 170 Q 185 110 185 110" fill="none" stroke="#67e8f9" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="305" y="185" text-anchor="middle" fill="#67e8f9" font-size="10">I/O done → ready</text>
  <rect x="60" y="220" width="460" height="60" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="1"/>
  <text x="290" y="245" text-anchor="middle" fill="#e2e8f0" font-size="9" font-weight="600">📋 PCB (Process Control Block)</text>
  <text x="290" y="262" text-anchor="middle" fill="#94a3b8" font-size="8">PID · State · Program Counter · Registers · Memory Limits · Open Files</text>
  <defs><marker id="arrP" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22d3ee"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: প্রসেসের ৫টি অবস্থা ও PCB। OS প্রতিটি প্রসেসের জন্য একটি PCB রাখে — পরিচয়, অবস্থা, সম্পদ।</div>

<div class="code-block">— Terminal: Process দেখো ও নিয়ন্ত্রণ করো —

  # সব চলমান প্রসেস দেখো
  $ ps aux | head -10
  USER  PID  %CPU %MEM   VSZ   RSS TTY STAT START COMMAND
  root    1   0.0  0.1 169372 13424 ?   Ss   Jul25 /sbin/init
  user  1234  2.5  1.3 245678 52340 ?   Sl   09:15 python manage.py runserver
  user  1235  0.1  0.2 189234 42100 ?   S    09:15 celery worker

  # real-time process monitor
  $ top -o %CPU
    PID USER  PR  NI  VIRT  RES  SHR S %CPU %MEM COMMAND
    1234 user  20   0 245m  52m  8m S  2.5  1.3 python

  # একটি প্রসেস kill করো
  $ kill 1234              # SIGTERM (ভদ্রে থামো)
  $ kill -9 1234           # SIGKILL (জোরে থামাও)

  # /proc filesystem — kernel-এর ভেতর দেখো
  $ cat /proc/1234/status
  Name: python
  State: S (sleeping)
  Pid: 1234
  VmRSS: 52340 kB        # ব্যবহৃত মেমোরি

  # fork() in C — একটি প্রসেস থেকে আরেকটি জন্ম
  pid_t pid = fork();
  if (pid == 0) {
      // child process — নতুন জীবন!
      exec("/bin/ls");
  } else {
      wait(NULL);  // parent অপেক্ষা করে
  }</div>

<div class="secret-box">💾 <strong>Program = রেসিপি, Process = রান্না, OS = রাঁধুনি।</strong> একটি প্রোগ্রাম নিষ্প্রাণ — কিন্তু OS এতে প্রাণ দেয়। PID, মেমোরি, CPU সময় — এই তিনটি দিয়ে একটি প্রসেস জীবন্ত হয়। কিন্তু একটি CPU একসাথে একটি জিনিসই করতে পারে। তাহলে শত শত প্রসেস কীভাবে একসাথে চলে? সেই রহস্য আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Process vs Program এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Program</td><td>ডিস্কে থাকা নিষ্প্রাণ কোড — executable file</td></tr>
<tr><td class="hl">Process</td><td>মেমোরিতে চলমান প্রোগ্রাম — CPU, মেমোরি, state সহ</td></tr>
<tr><td class="hl">PID</td><td>Process ID — প্রতিটি প্রসেসের অনন্য পরিচয়</td></tr>
<tr><td class="hl">PCB</td><td>Process Control Block — প্রসেসের সমস্ত তথ্য</td></tr>
<tr><td class="hl">5 States</td><td>New → Ready → Running → Waiting → Terminated</td></tr>
<tr><td class="hl">fork()</td><td>parent-এর সঠিক কপি child তৈরি</td></tr>
<tr><td class="hl">exec()</td><td>নতুন প্রোগ্রাম দিয়ে নিজেকে প্রতিস্থাপন</td></tr>
<tr><td class="hl">wait()</td><td>parent child-এর জন্য অপেক্ষা করে</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "🧵",
  color: "#22d3ee",
  name: "সুতোর বোনন",
  subtitle: "Weaving Threads",
  tech: "Threads & Concurrency — threads vs processes, shared memory, race conditions, context switching",
  spirit: "সিলসিলা — শৃঙ্খল, এক স্রোতের ভেতর একাধিক ধারা",
  secret: "Thread = একটি প্রসেসের ভেতরে একাধিক কর্মী। মেমোরি ভাগ করে, কিন্তু প্রত্যেকের নিজস্ব কাজ।",
  recall: {
    q: " Thread এবং Process-এর মূল পার্থক্য কী?",
    qen: "What is the main difference between a thread and a process?",
    a: "Thread-গুলো একই মেমোরি ভাগ করে (একই প্রসেসের ভেতরে)। Process-গুলোর আলাদা মেমোরি। Thread তৈরি করা সস্তা, process তৈরি করা দামি।",
    aen: "Threads share the same memory (within one process). Processes have separate memory. Creating threads is cheap, processes are expensive."
  },
  story: `<p class="scene-setting">একটি রান্নাঘর। একজন রাঁধুনি একা কাজ করছে — চাল ধোয়, মশলা কাটে, চুলায় রাখে। ধীর। কিন্তু যদি তিনজন রাঁধুনি একই রান্নাঘরে থাকে? একজন চাল ধোয়, একজন মশলা কাটে, একজন চুলায় রাঁধে — একসাথে! দ্রুত। কিন্তু সমস্যা — তিনজনই একই ছুরি চাইলে? একই পাতিল ধরতে চাইলে? এটাই concurrency — একসাথে কাজ করা, কিন্তু সম্পদ ভাগ করে নেওয়ার ঝুঁকি সহ।</p>
<p class="scene-setting en">A kitchen. One cook works alone — washes rice, cuts spices, puts on stove. Slow. But if three cooks are in the same kitchen? One washes rice, one cuts spices, one cooks — simultaneously! Fast. But the problem — all three want the same knife? The same pot? This is concurrency — working simultaneously, but with the risk of sharing resources.</p>

<div class="dialogue"><strong>সুতো বোননকারী ফাতেমা:</strong> একটি প্রসেস হলো একটি রান্নাঘর — নিজস্ব মেমোরি, নিজস্ব সম্পদ। একটি থ্রেড হলো একজন কর্মী সেই রান্নাঘরে। একাধিক থ্রেড = একাধিক কর্মী, একই রান্নাঘরে, একই সম্পদ ভাগ করে। থ্রেড তৈরি করা সস্তা — নতুন রান্নাঘর লাগে না, শুধু নতুন কর্মী।</div>
<div class="dialogue en"><strong>Thread Weaver Fatima:</strong> A process is a kitchen — its own memory, its own resources. A thread is a worker in that kitchen. Multiple threads = multiple workers, same kitchen, sharing resources. Creating threads is cheap — no new kitchen needed, just new workers.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Thread বনাম Process:</strong><br>
<strong>মেমোরি:</strong> Process = আলাদা address space। Thread = একই address space ভাগ করে।<br>
<strong>তৈরি খরচ:</strong> Process = দামি (মেমোরি copy)। Thread = সস্তা (শুধু stack + register)।<br>
<strong>যোগাযোগ:</strong> Process = IPC (inter-process communication) দরকার। Thread = সরাসরি shared variable।<br>
<strong>নিরাপত্তা:</strong> Process = একটি crash হলে অন্য প্রভাবিত না। Thread = একটি crash হলে পুরো process crash।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Race Condition (দৌড় প্রতিযোগিতা):</strong> দুটি থ্রেড একই variable বাড়াতে চায় — count = count + 1। কিন্তু এই কাজটি পরম (atomic) নয়! ১. count পড়ো, ২. ১ যোগ করো, ৩. লেখো। দুটি থ্রেড যদি একসাথে পড়ে — দুজনই পুরোনো মান দেখে, দুজনই ১ যোগ করে, দুজনই লেখে — ফলাফল: ২ বাড়ার কথায় ১ বাড়ে! এটাই race condition।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>Context Switching:</strong> CPU এক থ্রেড/প্রসেস থেকে অন্যটিতে যায়। পুরোনো থ্রেডের state (register, program counter) সংরক্ষণ করে, নতুন থ্রেডের state লোড করে। এই পরিবর্তন এত দ্রুত হয় (microsecond) যে মনে হয় সব একসাথে চলছে — কিন্তু আসলে CPU একটা সময়ে একটাই করছে। একে বলে time-sharing বা multitasking।</div></div>

<div class="verse">وَالسَّابِقَاتِ سَبْقًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং দ্রুত ছুটে চলা সকলের শপথ।" — কুরআন ৭৯:৪</div>

<p class="scene-setting">এই আয়াতে দ্রুত ছুটে চলার কথা বলা হয়েছে — একে অপরের সাথে প্রতিযোগিতা। থ্রেডগুলোও তেমন — একে অপরের সাথে প্রতিযোগিতা করে CPU সময়ের জন্য। কিন্তু এই প্রতিযোগিতা যদি নিয়ন্ত্রণ না করা হয় — race condition, data corruption। পরের দরজায় দেখবে কীভাবে এই প্রতিযোগিতা নিয়ন্ত্রণ করা যায়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস) Door ২:</strong> Dijkstra-এর semaphore শিখেছিলে — concurrent process control। থ্রেড হলো সেই concurrency-র একই নীতি, শুধু এক মেশিনের ভেতরে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🧵 Process vs Thread: Shared Memory Model</text>
  <rect x="20" y="50" width="250" height="230" rx="10" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="145" y="72" text-anchor="middle" fill="#67e8f9" font-size="11" font-weight="700">PROCESS (heavy)</text>
  <rect x="40" y="85" width="90" height="30" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="85" y="104" text-anchor="middle" fill="#7dd3fc" font-size="8">Code</text>
  <rect x="140" y="85" width="110" height="30" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="195" y="104" text-anchor="middle" fill="#7dd3fc" font-size="8">Heap (private)</text>
  <rect x="40" y="125" width="90" height="30" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="85" y="144" text-anchor="middle" fill="#4ade80" font-size="8">Registers</text>
  <rect x="140" y="125" width="110" height="30" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="195" y="144" text-anchor="middle" fill="#4ade80" font-size="8">Stack (private)</text>
  <text x="145" y="180" text-anchor="middle" fill="#94a3b8" font-size="8">fork() = সব copy (~10ms</text>
  <text x="145" y="200" text-anchor="middle" fill="#64748b" font-size="10">Own PID, own memory space</text>
  <text x="145" y="225" text-anchor="middle" fill="#f87171" font-size="8">❌ No sharing → expensive</text>
  <text x="145" y="250" text-anchor="middle" fill="#fbbf24" font-size="10">Safe: crash = isolated</text>
  <rect x="310" y="50" width="250" height="230" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="435" y="72" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="700">THREADS (light)</text>
  <rect x="330" y="85" width="210" height="25" rx="5" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="435" y="102" text-anchor="middle" fill="#fcd34d" font-size="8">Shared Code + Heap</text>
  <rect x="330" y="120" width="95" height="30" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="377" y="139" text-anchor="middle" fill="#4ade80" font-size="10">Thread 1 Stack</text>
  <rect x="445" y="120" width="95" height="30" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="492" y="139" text-anchor="middle" fill="#4ade80" font-size="10">Thread 2 Stack</text>
  <rect x="330" y="160" width="95" height="30" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="377" y="179" text-anchor="middle" fill="#4ade80" font-size="10">Thread 3 Stack</text>
  <rect x="445" y="160" width="95" height="30" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="492" y="179" text-anchor="middle" fill="#4ade80" font-size="10">Thread 4 Stack</text>
  <text x="435" y="215" text-anchor="middle" fill="#94a3b8" font-size="8">pthread_create() ~0.1ms</text>
  <text x="435" y="235" text-anchor="middle" fill="#4ade80" font-size="8">✅ Shared memory → fast</text>
  <text x="435" y="255" text-anchor="middle" fill="#f87171" font-size="10">⚠️ Race condition risk!</text>
  <text x="435" y="272" text-anchor="middle" fill="#f87171" font-size="10">⚠️ crash kills ALL threads</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Process = সব আলাদা (ভারী)। Thread = মেমোরি ভাগ (হালকা)। দ্রুত কিন্তু race condition ঝুঁকি।</div>

<div class="code-block"># — Python: Threads ও GIL —

  import threading

  # ❌ Race condition!
  counter = 0
  def increment():
      global counter
      for _ in range(1000000):
          counter += 1   # NOT atomic!

  t1 = threading.Thread(target=increment)
  t2 = threading.Thread(target=increment)
  t1.start(); t2.start()
  t1.join();  t2.join()
  print(counter)  # ~= 1.4M (not 2M!) — race!

  # ✅ Lock দিয়ে fix:
  lock = threading.Lock()
  def safe_increment():
      global counter
      for _ in range(1000000):
          with lock:        # এক সময় এক thread
              counter += 1

  # Python GIL: এক সময় এক thread CPU-তে
  # CPU-bound কাজে threading ধীর! → multiprocessing
  # I/O-bound কাজে (network, disk) → threading ভালো

  # ps/thread দেখো:
  $ ps -eLf | grep python
  # LWP = Lightweight Process = thread ID

  # thread info:
  $ cat /proc/1234/status | grep Threads
  # Threads: 4    ← এই process-এ ৪ threads</div>

<div class="secret-box">🧵 <strong>Thread = এক ছাদের নিচে একাধিক কর্মী।</strong> মেমোরি ভাগ করে, দ্রুত কাজ করে। কিন্তু সম্পদ ভাগ করার ঝুঁকি — race condition। দুটি থ্রেড একসাথে একই সম্পদ ধরতে গেলে কী হবে? কে আগে পাবে? কে অপেক্ষা করবে? এই নিয়ন্ত্রণের যন্ত্র আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Threads & Concurrency এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Thread</td><td>প্রসেসের ভেতরে একটি execution unit — নিজস্ব stack + register</td></tr>
<tr><td class="hl">Shared Memory</td><td>একই প্রসেসের thread-গুলো একই মেমোরি ভাগ করে</td></tr>
<tr><td class="hl">Context Switch</td><td>CPU এক থ্রেড থেকে অন্যটিতে যাওয়া — state save + load</td></tr>
<tr><td class="hl">Race Condition</td><td>দুটি থ্রেড একসাথে একই data পরিবর্তন → ভুল ফলাফল</td></tr>
<tr><td class="hl">Thread Pool</td><td>পুরোনো thread পুনরায় ব্যবহার — নতুন তৈরির খরচ বাঁচায়</td></tr>
<tr><td class="hl">User vs Kernel</td><td>User thread = দ্রুত কিন্তু OS দেখে না। Kernel thread = OS দেখে, ব্লক করলে অন্য চলে।</td></tr>
<tr><td class="hl">Multicore</td><td>আধুনিক CPU — প্রতিটি core-এ একটি করে thread সত্যিকারের parallel-এ চলে</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "⏱️",
  color: "#22d3ee",
  name: "সময়ের বণ্টক",
  subtitle: "Distributing Time",
  tech: "CPU Scheduling — FCFS, SJF, Round Robin, Priority, MLFQ, preemption, fairness, response time",
  spirit: "মওয়াকিত — নির্ধারিত সময়, প্রত্যেকের জন্য ন্যায্য সময় বরাদ্দ",
  secret: "CPU scheduling = একটি দিনে অনেক কাজ — কোনটা আগে, কোনটা পরে? FCFS (সিরিয়াল), SJF (ছোট আগে), Round Robin (সবাই সমান)।",
  recall: {
    q: " Round Robin scheduling-এ quantum কী?",
    qen: "What is a quantum in Round Robin scheduling?",
    a: "প্রতিটি প্রসেস পায় একটি নির্দিষ্ট সময় (quantum, যেমন ১০ms)। শেষ হলে পরের প্রসেসে যায়। সবাই সমান সময় পায়।",
    aen: "Each process gets a fixed time (quantum, e.g. 10ms). When done, moves to next. Everyone gets equal time."
  },
  story: `<p class="scene-setting">একটি ব্যাংকের কাউন্টার। পাঁচজন মানুষ লাইনে দাঁড়িয়ে। কর্মকর্তা কীভাবে সেবা দেবে? প্রথম আসা প্রথম সেবা (FCFS)? যার কাজ ছোট সে আগে (SJF)? সবাইকে ৫ মিনিট করে, তারপর আবার ফিরে এসো (Round Robin)? প্রতিটি নিয়মের সুবিধা ও অসুবিধা আছে। OS-ও ঠিক এভাবে CPU সময় বরাদ্দ করে।</p>
<p class="scene-setting en">A bank counter. Five people in line. How does the teller serve them? First come first served (FCFS)? Shortest job first (SJF)? Everyone gets 5 minutes, then come back (Round Robin)? Each rule has pros and cons. The OS allocates CPU time exactly this way.</p>

<div class="callout info"><span class="co-icon">📋</span><div><strong>Scheduling Algorithms:</strong><br>
<strong>FCFS (First Come First Served):</strong> যে আগে আসে সে আগে। সহজ কিন্তু convoy effect — একটি বড় কাজ সবাইকে আটকে রাখে।<br>
<strong>SJF (Shortest Job First):</strong> যার কাজ ছোট সে আগে। গড়ে সেরা waiting time কিন্তু বড় কাজ starvation-এ ভুগতে পারে।<br>
<strong>Round Robin:</strong> প্রত্যেককে quantum (সময়ের টুকরো) দাও। সবাই সমান। কেউ অপেক্ষায় মরে না। কিন্তু context switch বেশি।<br>
<strong>Priority:</strong> গুরুত্বপূর্ণ কাজ আগে। কিন্তু low priority starvation-এ পড়তে পারে। aging দিয়ে সমাধান।<br>
<strong>MLFQ (Multi-Level Feedback Queue):</strong> আধুনিক — একাধিক সারি, প্রসেস স্তর বদলায়। interactive কে উপরে, batch কে নিচে।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>গুরুত্বপূর্ণ মেট্রিক্স:</strong><br>
<strong>Turnaround Time:</strong> আসা থেকে শেষ হওয়া পর্যন্ত মোট সময়<br>
<strong>Waiting Time:</strong> ready queue-তে কতটা অপেক্ষা করলো<br>
<strong>Response Time:</strong> প্রথম response পেতে কতটা সময় লাগলো (interactive-এর জন্য গুরুত্বপূর্ণ)<br>
<strong>Fairness:</strong> সবাই কি ন্যায্য সময় পাচ্ছে?</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Preemption (ক্ষমতা কেড়ে নেওয়া):</strong> OS চাইলে একটি চলমান প্রসেসকে থামিয়ে অন্যটিকে দিতে পারে। Non-preemptive = যা চলছে চলবে যতক্ষণ না শেষ বা I/O-তে যায়। Preemptive = timer interrupt দিয়ে যেকোনো সময় থামানো যায়। আধুনিক OS সব preemptive।</div></div>

<div class="verse">إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই সালাত মুমিনদের জন্য নির্ধারিত সময়ে একটি বিধিবদ্ধ কর্তব্য।" — কুরআন ৪:১০৩</div>

<p class="scene-setting">এই আয়াতে সালাতের জন্য নির্ধারিত সময়ের কথা বলা হয়েছে — পাঁচটি ওয়াক্ত, প্রতিটি নির্দিষ্ট সময়ে। OS-ও তেমন — প্রতিটি প্রসেসের জন্য নির্ধারিত CPU সময়। কেউ আগে, কেউ পরে, কিন্তু সবাই পায়। ন্যায্যতা ও দক্ষতার ভারসাম্য — এটাই scheduling-এর শিল্প।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ১৬:</strong> Heap শিখেছিলে — priority queue। Priority scheduling একটি heap ব্যবহার করে! সর্বোচ্চ priority প্রসেস O(log n)-এ খুঁজে বের করা যায়।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⏱️ Scheduling: Round Robin vs FCFS Gantt Chart</text>
  <rect x="20" y="50" width="540" height="90" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="30" y="45" fill="#67e8f9" font-size="9" font-weight="700">Round Robin (quantum=2ms):</text>
  <rect x="30" y="60" width="60" height="30" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="60" y="80" text-anchor="middle" fill="#7dd3fc" font-size="9">P1</text>
  <rect x="90" y="60" width="60" height="30" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="120" y="80" text-anchor="middle" fill="#4ade80" font-size="9">P2</text>
  <rect x="150" y="60" width="60" height="30" rx="4" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="180" y="80" text-anchor="middle" fill="#fcd34d" font-size="9">P3</text>
  <rect x="210" y="60" width="60" height="30" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="240" y="80" text-anchor="middle" fill="#7dd3fc" font-size="9">P1</text>
  <rect x="270" y="60" width="60" height="30" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="300" y="80" text-anchor="middle" fill="#4ade80" font-size="9">P2</text>
  <rect x="330" y="60" width="60" height="30" rx="4" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="360" y="80" text-anchor="middle" fill="#fcd34d" font-size="9">P3</text>
  <rect x="390" y="60" width="60" height="30" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="420" y="80" text-anchor="middle" fill="#7dd3fc" font-size="9">P1</text>
  <rect x="450" y="60" width="60" height="30" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="480" y="80" text-anchor="middle" fill="#4ade80" font-size="9">P2</text>
  <text x="30" y="115" text-anchor="middle" fill="#64748b" font-size="10">0</text>
  <text x="90" y="115" text-anchor="middle" fill="#64748b" font-size="10">2</text>
  <text x="150" y="115" text-anchor="middle" fill="#64748b" font-size="10">4</text>
  <text x="210" y="115" text-anchor="middle" fill="#64748b" font-size="10">6</text>
  <text x="270" y="115" text-anchor="middle" fill="#64748b" font-size="10">8</text>
  <text x="330" y="115" text-anchor="middle" fill="#64748b" font-size="10">10</text>
  <text x="390" y="115" text-anchor="middle" fill="#64748b" font-size="10">12</text>
  <text x="450" y="115" text-anchor="middle" fill="#64748b" font-size="10">14</text>
  <text x="510" y="115" text-anchor="middle" fill="#64748b" font-size="10">16ms</text>
  <text x="290" y="135" text-anchor="middle" fill="#4ade80" font-size="8">সব প্রসেস সমান সময় পায় — fair ✅</text>
  <text x="30" y="165" fill="#67e8f9" font-size="9" font-weight="700">FCFS (First Come First Serve):</text>
  <rect x="20" y="175" width="540" height="35" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
  <rect x="30" y="183" width="180" height="20" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="120" y="197" text-anchor="middle" fill="#7dd3fc" font-size="8">P1 (6ms full)</text>
  <rect x="210" y="183" width="120" height="20" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="270" y="197" text-anchor="middle" fill="#4ade80" font-size="8">P2 (4ms)</text>
  <rect x="330" y="183" width="120" height="20" rx="3" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="390" y="197" text-anchor="middle" fill="#fcd34d" font-size="8">P3 (4ms)</text>
  <text x="290" y="232" text-anchor="middle" fill="#f87171" font-size="8">P3 অনেক অপেক্ষা করে — unfair ❌ (convoy effect)</text>
  <text x="290" y="255" text-anchor="middle" fill="#94a3b8" font-size="8">MLFQ: short job → high priority queue, long job → demoted</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Round Robin সবাইকে সমান সময় দেয়। FCFS-এ প্রথম প্রসেস দীর্ঘ হলে বাকিরা অপেক্ষা করে।</div>

<div class="code-block">— Terminal: Scheduling দেখো —

  # CPU scheduling policy দেখো
  $ cat /proc/sys/kernel/sched_child_runs_first
  0    # parent আগে

  # nice value: priority (-20 থেকে +19)
  $ nice -n -10 python heavy_compute.py   # high priority
  $ renice +5 -p 1234                      # lower priority

  # প্রতিটি CPU-র load:
  $ cat /proc/loadavg
  0.52 0.48 0.45 2/134 12345

  # SCHED_FIFO (real-time) vs SCHED_OTHER (normal)
  $ chrt -f 80 python realtime_task.py
  # SCHED_FIFO = strict priority, no preemption by normal

  # taskset: কোন CPU-তে চলবে
  $ taskset -c 0,1 python parallel_task.py
  # শুধু CPU 0 ও 1-এ</div>

<div class="secret-box">⏱️ <strong>Scheduling = সময়ের ন্যায়বিচার।</strong> কে আগে চলবে, কে অপেক্ষা করবে, কতক্ষণ চলবে — প্রতিটি সিদ্ধান্ত performance ও fairness-কে প্রভাবিত করে। কিন্তু scheduling ঠিক করলেও একটি বড় সমস্যা থেকে যায় — দুটি প্রসেস যদি একই সম্পদ চায়? কে lock করবে, কে অপেক্ষা করবে? সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "CPU Scheduling এক নজরে",
    body: `<table class="kv-table"><tr><th>Algorithm</th><th>নীতি</th><th>সুবিধা/অসুবিধা</th></tr>
<tr><td class="hl">FCFS</td><td>যে আগে আসে সে আগে</td><td>সহজ; convoy effect</td></tr>
<tr><td class="hl">SJF</td><td>ছোট কাজ আগে</td><td>সেরা গড়; starvation</td></tr>
<tr><td class="hl">Round Robin</td><td>quantum করে সবাই</td><td>ন্যায্য; বেশি context switch</td></tr>
<tr><td class="hl">Priority</td><td>গুরুত্বপূর্ণ আগে</td><td>নমনীয়; aging দরকার</td></tr>
<tr><td class="hl">MLFQ</td><td>multi-level feedback</td><td>আধুনিক; adaptive</td></tr>
<tr><td class="hl">Preemption</td><td>জোর করে থামানো</td><td>আধুনিক OS; responsive</td></tr></table>
<p style="margin-top:.8rem"><strong>মেট্রিক্স:</strong> Turnaround Time, Waiting Time, Response Time, Fairness, Throughput</p>`
  }
});

doors.push({
  num: 4,
  icon: "🔐",
  color: "#22d3ee",
  name: "সম্পদ রক্ষক",
  subtitle: "The Resource Guardian",
  tech: "Synchronization — Dijkstra Semaphore (1965), Mutex, Monitor (Brinch Hansen/Hoare), Producer-Consumer, atomic operations",
  spirit: "হুদুদ — সীমা, সম্পদ ভাগের নিয়ম ও সুরক্ষা",
  secret: "Semaphore = একটি পারমিট কাউন্টার। Mutex = একটি চাবি। চাবি নাও → কাজ করো → চাবি ফেরত দাও। অন্য কেউ এই সময় ঢুকতে পারবে না।",
  recall: {
    q: " Mutex এবং Semaphore-এর পার্থক্য কী?",
    qen: "What is the difference between a mutex and a semaphore?",
    a: "Mutex = এক সময় একজন (owner ট্র্যাক করে)। Binary Semaphore = এক সময় একজন (owner ট্র্যাক করে না)। Counting Semaphore = N জন পর্যন্ত।",
    aen: "Mutex = one at a time (tracks owner). Binary Semaphore = one at a time (no owner). Counting Semaphore = up to N."
  },
  story: `<p class="scene-setting">একটি পাবলিক টয়লেট। দরজায় একটি চাবি। কেউ ঢুকলে চাবি নেয়, ভেতর থেকে লাগায়। বাইরে অন্যরা অপেক্ষা করে। কাজ শেষে চাবি ফেরত দেয়। পরের জন ঢোকে। এটাই mutex — এক সময় একজন, চাবি সহ। কোনো ভিড় নেই, কোনো race condition নেই।</p>
<p class="scene-setting en">A public toilet. A key on the door. Someone enters, takes the key, locks from inside. Others outside wait. When done, returns the key. Next person enters. This is a mutex — one at a time, with a key. No crowding, no race condition.</p>

<div class="dialogue"><strong>সম্পদ রক্ষক আদনান:</strong> ১৯৬৫ সালে Edsger Dijkstra একটি প্রতিভাবান ধারণা দিয়েছিলেন — semaphore। দুটি ক্রিয়া: wait (P) এবং signal (V)। wait করলে counter কমে, signal করলে বাড়ে। counter শূন্য হলে wait করতে হয় — সম্পদ নেই, অপেক্ষা করো। signal হলে counter বাড়ে — সম্পদ মুক্ত, কেউ ঢুকতে পারে।</div>
<div class="dialogue en"><strong>Resource Guardian Adnan:</strong> In 1965, Edsger Dijkstra gave a brilliant idea — the semaphore. Two operations: wait (P) and signal (V). wait decrements the counter, signal increments it. If counter is zero, you must wait — no resource available. When signal fires, counter increases — resource free, someone can enter.</div>

<div class="callout info"><span class="co-icon">🔐</span><div><strong>Synchronization Primitives:</strong><br>
<strong>Mutex (Mutual Exclusion):</strong> এক সময় এক থ্রেড। lock() → কাজ → unlock()। চাবির মতো — যে নেয় সে ফেরত দেয়।<br>
<strong>Binary Semaphore:</strong> মান ০ বা ১। Mutex-এর মতো কিন্তু ownership ট্র্যাক করে না।<br>
<strong>Counting Semaphore:</strong> মান ০ থেকে N। N জন একসাথে সম্পদ ব্যবহার করতে পারে (যেমন N টি পার্কিং স্পেস)।<br>
<strong>Monitor (Brinch Hansen / Hoare):</strong> ভাষা-স্তরের synchronization — synchronized keyword in Java। কম্পাইলার lock/unlock স্বয়ংক্রিয়ভাবে করে।<br>
<strong>Condition Variable:</strong> "একটি শর্ত সত্য না হওয়া পর্যন্ত থেকো" — wait/notify।</div></div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Semaphore সূত্র (Dijkstra 1965):</strong><br>
wait(S): while S <= 0 do nothing; S = S - 1<br>
signal(S): S = S + 1<br>
<strong>P এবং V:</strong> Dutch ভাষায় Proberen (test) এবং Verhogen (increment) — Dijkstra ছিলেন Dutch!</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Classic Problem: Producer-Consumer:</strong> একটি bounded buffer। Producer ডেটা রাখে, Consumer নেয়। সমস্যা: buffer ভর্তি হলে Producer থামবে, খালি হলে Consumer থামবে। সমাধান: দুটি semaphore — empty (খালি স্লট), full (ভর্তি স্লট)। আর একটি mutex buffer access সুরক্ষিত রাখে।</div></div>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>Atomic Operations:</strong> আধুনিক hardware সরাসরি atomic instruction দেয় — Compare-and-Swap (CAS), Test-and-Set। এগুলো hardware-স্তরের mutex — এক নির্দেশে পরম (indivisible)। Lock-free programming এগুলো ব্যবহার করে।</div></div>

<div class="verse">وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এতিমের সম্পদের কাছে যেও না — শুধু তার কল্যাণের জন্য।" — কুরআন ৬:১৫২</div>

<p class="scene-setting">এই আয়াত সম্পদ সুরক্ষার নির্দেশ দেয় — সীমা মেনে চলো। Mutex ও semaphore-ও সেই নীতি — shared সম্পদ সুরক্ষিত রাখো, নিয়ম মেনে প্রবেশ করো, কাজ শেষে মুক্ত করো। সম্পদের অপব্যবহার রোধ করো — এটাই synchronization-এর কাজ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড) Door ২:</strong> একই Dijkstra semaphore — সেখানে multi-machine, এখানে single machine। Book ২ (DSA): atomic operation = indivisible instruction। Book ৩৭ (নেটওয়ার্কস) Door ২: CSMA/CD = একই concurrency সমস্যা, শেয়ার্ড মাধ্যমে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔐 Semaphore: Producer-Consumer with Counting</text>
  <rect x="200" y="50" width="180" height="60" rx="10" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="700">Semaphore: empty=3, full=0</text>
  <text x="290" y="92" text-anchor="middle" fill="#7dd3fc" font-size="8">mutex=1 (binary lock)</text>
  <rect x="220" y="98" width="30" height="8" rx="2" fill="#22c55e"/>
  <text x="235" y="105" text-anchor="middle" fill="#052e16" font-size="10">E</text>
  <rect x="255" y="98" width="30" height="8" rx="2" fill="#22c55e"/>
  <text x="270" y="105" text-anchor="middle" fill="#052e16" font-size="10">E</text>
  <rect x="290" y="98" width="30" height="8" rx="2" fill="#22c55e"/>
  <text x="305" y="105" text-anchor="middle" fill="#052e16" font-size="10">E</text>
  <rect x="325" y="98" width="30" height="8" rx="2" fill="#dc2626"/>
  <text x="340" y="105" text-anchor="middle" fill="#fee2e2" font-size="10">F</text>
  <rect x="60" y="150" width="120" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="120" y="172" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">PRODUCER</text>
  <text x="120" y="188" text-anchor="middle" fill="#86efac" font-size="10">wait(empty) → put → signal(full)</text>
  <rect x="400" y="150" width="120" height="50" rx="8" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="460" y="172" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">CONSUMER</text>
  <text x="460" y="188" text-anchor="middle" fill="#fde68a" font-size="10">wait(full) → take → signal(empty)</text>
  <line x1="180" y1="165" x2="200" y2="100" stroke="#4ade80" stroke-width="2" marker-end="url(#arrS)"/>
  <text x="190" y="140" text-anchor="middle" fill="#4ade80" font-size="10">put</text>
  <line x1="400" y1="165" x2="380" y2="100" stroke="#fcd34d" stroke-width="2" marker-end="url(#arrS)"/>
  <text x="390" y="140" text-anchor="middle" fill="#fcd34d" font-size="10">take</text>
  <text x="290" y="230" text-anchor="middle" fill="#94a3b8" font-size="8">empty = available slots · full = filled slots</text>
  <text x="290" y="250" text-anchor="middle" fill="#e2e8f0" font-size="9" font-weight="600">mutex = only ONE touches buffer at a time</text>
  <defs><marker id="arrS" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: Counting semaphore — empty/full slots গোনে। mutex এক সময় এক thread-কে ঢোকায়।</div>

<div class="code-block"># — Python: Semaphore ও Mutex —

  import threading

  # Binary semaphore (= mutex)
  mutex = threading.Lock()

  # Counting semaphore (N resources)
  empty = threading.Semaphore(3)  # 3 empty slots
  full  = threading.Semaphore(0)  # 0 full initially
  buffer = []

  def producer():
      for i in range(10):
          empty.acquire()   # wait for empty slot
          mutex.acquire()   # lock buffer
          buffer.append(i)  # put item
          mutex.release()   # unlock
          full.release()    # signal: one more full

  def consumer():
      for i in range(10):
          full.acquire()    # wait for full slot
          mutex.acquire()   # lock buffer
          item = buffer.pop(0)  # take item
          mutex.release()   # unlock
          empty.release()   # signal: one more empty

  # POSIX semaphore in C:
  # sem_t sem;
  # sem_init(&sem, 0, 3);     // initial value 3
  # sem_wait(&sem);           // P: decrement, block if 0
  # sem_post(&sem);           // V: increment, wake one

  # futex: Linux fast userspace mutex
  # kernel only involved on contention</div>

<div class="secret-box">🔐 <strong>Synchronization = সম্পদের সীমাবদ্ধতা।</strong> Mutex, semaphore, monitor — প্রতিটি একটি উপায় shared সম্পদ সুরক্ষিত রাখার। কিন্তু একটি ভয়ংকর সমস্যা লুকিয়ে আছে — যদি প্রত্যেক থ্রেড একে অপরের সম্পদের জন্য অপেক্ষা করে? কেউ ছাড়বে না, কেউ এগোবে না — চিরকাল অপেক্ষা। সেই দুঃস্বপ্নের নাম deadlock। সেই যাত্রা আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Synchronization এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Mutex</td><td>এক সময় এক থ্রেড — lock/unlock</td></tr>
<tr><td class="hl">Semaphore</td><td>Dijkstra ১৯৬৫ — wait(P)/signal(V) counter</td></tr>
<tr><td class="hl">Counting Semaphore</td><td>N জন পর্যন্ত সম্পদ ব্যবহার</td></tr>
<tr><td class="hl">Monitor</td><td>ভাষা-স্তরের synchronization — Java synchronized</td></tr>
<tr><td class="hl">Condition Variable</td><td>শর্ত সত্য না হলে wait, সত্য হলে notify</td></tr>
<tr><td class="hl">Producer-Consumer</td><td>bounded buffer + empty/full semaphore + mutex</td></tr>
<tr><td class="hl">CAS (Compare-and-Swap)</td><td>hardware atomic — lock-free programming</td></tr>
<tr><td class="hl">Deadlock পূর্বশর্ত</td><td>mutual exclusion + hold & wait + no preemption + circular wait</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "💀",
  color: "#22d3ee",
  name: "অচল যন্ত্রণা",
  subtitle: "The Frozen Agony",
  tech: "Deadlocks — Coffman 4 conditions (1971), prevention, avoidance (Banker's algorithm, Dijkstra 1965), detection, recovery",
  spirit: "ফালাক — মুক্তি, আটকে পড়া অবস্থা থেকে বের হওয়ার পথ",
  secret: "Deadlock = চার বন্ধু এক রেস্তোরাঁয় — প্রত্যেকের হাতে একটি কাঁটা, কিন্তু খেতে হলে দুটি কাঁটা দরকার। কেউ ছাড়বে না — সবাই অপেক্ষা — চিরকাল।",
  recall: {
    q: " Deadlock-এর ৪টি Coffman শর্ত কী?",
    qen: "What are the 4 Coffman conditions for deadlock?",
    a: "১. Mutual exclusion, ২. Hold and wait, ৩. No preemption, ৪. Circular wait। চারটিই থাকলে deadlock সম্ভব।",
    aen: "1. Mutual exclusion, 2. Hold and wait, 3. No preemption, 4. Circular wait. All four must be present."
  },
  story: `<p class="scene-setting">চার দার্শনিক এক টেবিলে বসে আছে। তাদের মাঝে চারটি কাঁটা। প্রত্যেককে খেতে হলে দুটি কাঁটা দরকার — বাঁ পাশেরটি এবং ডান পাশেরটি। প্রত্যেকে একই সময়ে বাঁ হাতের কাঁটা তুললো। এখন ডান হাতের কাঁটার জন্য অপেক্ষা করছে। কিন্তু সেই কাঁটা পাশের জনের বাঁ হাতে। সে ছাড়বে না — সেও ডান হাতের জন্য অপেক্ষা করছে। চারজনই অপেক্ষা করছে। চিরকাল। এটাই Dining Philosophers Problem — Dijkstra (1965)।</p>
<p class="scene-setting en">Four philosophers sit at a table. Between them, four forks. Each needs two forks to eat — left and right. Everyone picks up their left fork simultaneously. Now waiting for the right fork. But that fork is in the neighbor's left hand. They won't let go — they're also waiting for their right fork. All four waiting. Forever. This is the Dining Philosophers Problem — Dijkstra (1965).</p>

<div class="callout info"><span class="co-icon">💀</span><div><strong>Coffman 4 শর্ত (1971):</strong> Deadlock হতে হলে এই চারটিই থাকতে হবে —<br>
<strong>১. Mutual Exclusion:</strong> সম্পদ একসাথে ভাগ করা যায় না (একটি কাঁটা এক সময় একজন)<br>
<strong>২. Hold and Wait:</strong> একটি সম্পদ ধরে রেখে অন্যটির জন্য অপেক্ষা (বাঁ কাঁটা ধরে ডানের জন্য wait)<br>
<strong>৩. No Preemption:</strong> জোর করে সম্পদ কেড়ে নেওয়া যায় না (কাঁটা ছাড়তে বাধ্য করা যায় না)<br>
<strong>৪. Circular Wait:</strong> A অপেক্ষা করছে B-র জন্য, B অপেক্ষা C-র জন্য, C অপেক্ষা A-র জন্য — চক্র!</div></div>

<div class="callout info"><span class="co-icon">🛡️</span><div><strong>Deadlock Solutions:</strong><br>
<strong>Prevention:</strong> চারটি শর্তের যেকোনো একটি ভাঙো। যেমন — circular wait ভাঙতে সম্পদ একটি নির্দিষ্ট ক্রমে চাও।<br>
<strong>Avoidance (Banker's Algorithm, Dijkstra 1965):</strong> প্রতিটি request-এর আগে চেক করো — এটা approve করলে deadlock হবে কি? একটি "safe state" আছে কিনা যাচাই করো।<br>
<strong>Detection:</strong> deadlock হতে দাও, তারপর periodic check করে detect করে kill/restart করো।<br>
<strong>Ostrich Algorithm:</strong> উপেক্ষা করো! deadlock খুব কম হয় — হলে reboot। Linux/Windows এটাই করে।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Banker's Algorithm (Dijkstra 1965):</strong> একটি ব্যাংকের মতো — ব্যাংকার জানে সর্বোচ্চ কে কত ঋণ নিতে পারে। প্রতিটি request চেক করে — এটা দিলে কি সবাই শেষ পর্যন্ত তাদের ম্যাক্সিমাম পাবে? যদি "safe state" থাকে — request approve। যদি না — অপেক্ষা করাও। কার্যকর কিন্তু ধীর — প্রতিটি request O(n²) চেক।</div></div>

<div class="verse">وَلَا تَلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং নিজেদের হাত নিজেদের ধ্বংসে নিক্ষেপ করো না।" — কুরআন ২:১৯৫</div>

<p class="scene-setting">এই আয়াত আত্ম-ধ্বংস থেকে বিরত থাকতে বলে। Deadlock হলো একটি সিস্টেমের আত্ম-ধ্বংস — কেউ এগোয় না, কেউ পিছোয় না, সব স্থির। OS-কে এই অবস্থা এড়াতে হয় — prevention, avoidance, বা detection দিয়ে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড) Door ৫:</strong> Distributed deadlock — একই সমস্যা কিন্তু multiple machine-এ। Book ৪ (সিস্টেম ডিজাইন): Circuit Breaker pattern — deadlock-এর মতো স্থির অবস্থা ভাঙার উপায়।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">💀 Deadlock: Circular Wait (Coffman Condition #4)</text>
  <rect x="60" y="60" width="100" height="50" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="110" y="82" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="700">P1</text>
  <text x="110" y="97" text-anchor="middle" fill="#7dd3fc" font-size="10">holds R1, wants R2</text>
  <rect x="420" y="60" width="100" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="470" y="82" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">P2</text>
  <text x="470" y="97" text-anchor="middle" fill="#86efac" font-size="10">holds R2, wants R3</text>
  <rect x="420" y="180" width="100" height="50" rx="8" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="470" y="202" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">P3</text>
  <text x="470" y="217" text-anchor="middle" fill="#fde68a" font-size="10">holds R3, wants R4</text>
  <rect x="60" y="180" width="100" height="50" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="110" y="202" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">P4</text>
  <text x="110" y="217" text-anchor="middle" fill="#fee2e2" font-size="10">holds R4, wants R1</text>
  <line x1="160" y1="80" x2="420" y2="80" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrD)"/>
  <line x1="470" y1="110" x2="470" y2="180" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrD)"/>
  <line x1="420" y1="210" x2="160" y2="210" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrD)"/>
  <line x1="110" y1="180" x2="110" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrD)"/>
  <circle cx="290" cy="145" r="40" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="290" y="142" text-anchor="middle" fill="#f87171" font-size="11" font-weight="900">CIRCLE!</text>
  <text x="290" y="158" text-anchor="middle" fill="#fca5a5" font-size="10">No exit possible</text>
  <text x="290" y="260" text-anchor="middle" fill="#e2e8f0" font-size="9">Coffman 4: Mutual Excl + Hold&amp;Wait + No Preempt + Circular Wait</text>
  <defs><marker id="arrD" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: Circular wait — প্রতিটি প্রসেস একটি সম্পদ ধরে, পরেরটা চায়। চক্র ভাঙলে deadlock অসম্ভব।</div>

<div class="code-block">— Deadlock: Detection ও Prevention —

  # Linux deadlock detection:
  $ dmesg | grep -i deadlock
  # possible deadlock detected

  # Python threading — deadlock উদাহরণ:
  import threading

  lock_a = threading.Lock()
  lock_b = threading.Lock()

  def task1():
      lock_a.acquire()
      time.sleep(0.1)  # context switch!
      lock_b.acquire()  # ❌ waits for task2
      print("task1 done")
      lock_b.release()
      lock_a.release()

  def task2():
      lock_b.acquire()
      time.sleep(0.1)
      lock_a.acquire()  # ❌ waits for task1
      print("task2 done")
      lock_a.release()
      lock_b.release()
  # DEADLOCK! কেউ ছাড়বে না।

  # ✅ Fix: Lock ordering
  def safe_task2():
      lock_a.acquire()  # সবসময় একই ক্রমে!
      lock_b.acquire()
      ...

  # Banker's Algorithm (Dijkstra 1965):
  # Allocate শুধু যদি safe state থাকে
  # Available >= Need হলে দাও

  # OOM Killer (Linux):
  $ dmesg | grep -i "killed process"
  # kernel OOM kills process to free memory</div>

<div class="secret-box">💀 <strong>Deadlock = চার শর্তের অভিশাপ।</strong> Mutual exclusion + hold & wait + no preemption + circular wait। যেকোনো একটি ভাঙলে deadlock অসম্ভব। Banker's Algorithm আগে থেকে এড়ায়, detection পরে ধরে। কিন্তু deadlock শুধু CPU-র সম্পদেই সীমাবদ্ধ নয় — মেমোরিও একটি সম্পদ। আর মেমোরি কীভাবে বরাদ্দ হয়, কীভাবে ভাগ হয় — সেই রহস্য আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Deadlocks এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Coffman 4 শর্ত</td><td>Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait</td></tr>
<tr><td class="hl">Dining Philosophers</td><td>Dijkstra 1965 — classic deadlock example</td></tr>
<tr><td class="hl">Prevention</td><td>যেকোনো একটি শর্ত ভাঙো — সম্পদ ordering</td></tr>
<tr><td class="hl">Banker's Algorithm</td><td>Dijkstra 1965 — safe state check প্রতিটি request-এ</td></tr>
<tr><td class="hl">Detection</td><td>periodic check — resource allocation graph-এ cycle</td></tr>
<tr><td class="hl">Recovery</td><td>kill process, rollback, preempt resource</td></tr>
<tr><td class="hl">Ostrich Algorithm</td><td>উপেক্ষা করো — reboot if deadlock (Linux/Windows)</td></tr></table>`
  }
});
