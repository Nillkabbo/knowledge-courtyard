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
  spirit: "সম্পর্ক to Book 35 Door 5 — distributed deadlock, circular wait",
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
