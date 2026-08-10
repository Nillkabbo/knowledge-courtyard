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

<div class="code-block"># ── STEP 1: What is a process? ──
# A PROGRAM is a file on disk (lifeless code).
# A PROCESS is a running program (alive in memory).

# Analogy:
# Program = recipe in a cookbook (just text)
# Process = someone actually cooking from that recipe (alive)
# OS = the kitchen manager (assigns stoves, ingredients, time)

# Every process has:
# - PID (Process ID): unique number
# - Memory: code, data, stack, heap
# - CPU state: registers, program counter
# - Open files, network connections
# - Parent process (who created it)

import os

# See your own process:
print(f"My PID: {os.getpid()}")
print(f"My parent PID: {os.getppid()}")
print(f"User ID: {os.getuid()}")

# In Python, you can see process info:
# psutil is a great library for process management:
# import psutil
# print(f"CPU percent: {psutil.cpu_percent()}")
# print(f"Memory: {psutil.virtual_memory().percent}%")</div>

<div class="code-block"># ── STEP 2: Process lifecycle ──
# Every process goes through states:

# NEW → READY → RUNNING → WAITING → READY → ... → TERMINATED

states = {
    "NEW": "Process being created (just forked)",
    "READY": "Waiting for CPU (in the ready queue)",
    "RUNNING": "Executing on CPU right now",
    "WAITING": "Blocked on I/O (disk, network, sleep)",
    "TERMINATED": "Finished execution (exited)",
}

print("PROCESS STATES:")
for state, desc in states.items():
    print(f"  {state}: {desc}")

# Only ONE process can be RUNNING per CPU core at a time.
# The OS rapidly switches between processes (context switching)
# so fast that it LOOKS like they're all running simultaneously.

# Context switch = save current process state, load next process state.
# This happens thousands of times per second.</div>

<div class="code-block"># ── STEP 3: Creating processes ──
# How do processes come into existence?

import subprocess
import os

# METHOD 1: subprocess (run another program):
result = subprocess.run(["echo", "Hello from child"], capture_output=True, text=True)
print(result.stdout.strip())  # Hello from child

# METHOD 2: os.fork() (Unix only — create a copy of yourself):
# Note: fork() doesn't work on Windows, only Unix/Linux/macOS

# METHOD 3: multiprocessing (Python library):
from multiprocessing import Process
import time

def worker(name, delay):
    """A function that runs in a separate process."""
    print(f"  Worker {name} starting (PID={os.getpid()})")
    time.sleep(delay)
    print(f"  Worker {name} done")

# Create and start processes:
processes = []
for i in range(3):
    p = Process(target=worker, args=(f"P{i}", i + 1))
    p.start()
    processes.append(p)

# Wait for all to finish:
for p in processes:
    p.join()

print("All workers done!")</div>

<div class="code-block"># ── STEP 4: fork() and exec() ──
# The Unix way to create processes: fork() then exec()

# fork(): creates an EXACT COPY of the current process
# - Parent gets the child's PID
# - Child gets 0
# - Both run the same code after fork()

# exec(): replaces the current process with a new program
# - PID stays the same, but the code changes completely

# Classic fork() pattern (C/Unix):
fork_code = """
# C code (Python's os.fork works similarly):
pid_t pid = fork();

if (pid == 0) {
    // CHILD process (pid == 0)
    exec("/bin/ls");  // replace self with ls program
} else if (pid > 0) {
    // PARENT process (pid = child's PID)
    wait(NULL);       // wait for child to finish
} else {
    // fork() failed
    perror("fork");
}
"""

# Python equivalent:
# import os
# pid = os.fork()
# if pid == 0:
#     os.execvp("ls", ["ls", "-la"])
# else:
#     os.waitpid(pid, 0)

# HOW SHELLS WORK:
# When you type "ls" in terminal:
# 1. Shell forks itself (creates a copy)
# 2. Child execs "ls" (becomes ls)
# 3. Parent (shell) waits
# 4. ls runs, prints output, exits
# 5. Shell continues

print("Every command you run = fork() + exec()")</div>

<div class="code-block"># ── STEP 5: Signals — process communication ──
# Signals are how the OS and other processes talk to YOUR process.

import signal
import os
import time

# Common signals:
signals = {
    "SIGTERM (15)": "Polite: 'please stop' (can be caught/ignored)",
    "SIGKILL (9)":  "Forced: 'die now' (cannot be caught)",
    "SIGINT (2)":   "Ctrl+C: user pressed Ctrl+C",
    "SIGSTOP (19)": "Pause process (cannot be caught)",
    "SIGCONT (18)": "Resume paused process",
    "SIGHUP (1)":   "Terminal closed (hang up)",
}

print("COMMON SIGNALS:")
for sig, desc in signals.items():
    print(f"  {sig}: {desc}")

# In Python, you can handle signals:
def handle_sigterm(signum, frame):
    """Graceful shutdown on SIGTERM."""
    print("\nReceived SIGTERM — cleaning up...")
    # Save state, close files, release resources
    exit(0)

# Register signal handler:
# signal.signal(signal.SIGTERM, handle_sigterm)

# Example: Django handles SIGTERM to shut down gracefully.
# When you do docker stop, Docker sends SIGTERM, waits 10s,
# then sends SIGKILL if the process hasn't exited.

# Signal priority:
# SIGTERM → give process time to clean up (graceful)
# SIGKILL → no time, force kill (last resort)</div>

<div class="code-block"># ── STEP 6: Process management commands ──
# Essential terminal commands for process management:

commands = {
    "ps aux": "List all running processes",
    "top": "Real-time process monitor (CPU, memory)",
    "htop": "Better version of top (install separately)",
    "kill PID": "Send SIGTERM to process (graceful)",
    "kill -9 PID": "Send SIGKILL (force kill)",
    "killall name": "Kill all processes by name",
    "jobs": "List background jobs in current shell",
    "bg": "Resume a job in background",
    "fg": "Bring a background job to foreground",
    "nohup cmd &": "Run command immune to hangups",
    "nice -n 10 cmd": "Run with lower priority",
    "pidof name": "Get PID of a named process",
    "lsof -i :8080": "What process is using port 8080?",
    "cat /proc/PID/status": "Detailed process info from kernel",
}

print("PROCESS MANAGEMENT COMMANDS:")
for cmd, desc in commands.items():
    print(f"  $ {cmd:25} → {desc}")

# KEY CONCEPTS SUMMARY:
# ┌────────────────┬──────────────────────────────────┐
# │ Concept        │ Meaning                         │
# ├────────────────┼──────────────────────────────────┤
# │ Process        │ Running program in memory       │
# │ PID            │ Unique process identifier       │
# │ fork()         │ Create a copy of yourself       │
# │ exec()         │ Replace self with new program   │
# │ Signal         │ Message to a process            │
# │ Context switch │ OS switches between processes   │
# │ Zombie         │ Finished but parent hasn't seen │
# │ Orphan         │ Parent died, adopted by init    │
# │ Daemon         │ Background process (no terminal)│
# └────────────────┴──────────────────────────────────┘

# WHY THIS MATTERS FOR DEVELOPERS:
# - Django/Gunicorn = multiple worker processes
# - Celery = background process for async tasks
# - Docker = isolated process namespaces
# - Systemd = process supervisor (restart on crash)
# Understanding processes = understanding how your apps run.</div>

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

<div class="code-block"># ── STEP 1: What is a thread? ──
# A PROCESS has its own memory space (heavy, isolated).
# A THREAD shares memory with other threads in the same process (light).

# Analogy:
# Process = a house with its own kitchen, bathroom, everything
# Thread = people living in the same house, sharing the kitchen

# Multiple threads in one process:
# - Share the SAME memory (heap, global variables)
# - Have their OWN stack (local variables)
# - Can communicate through shared memory
# - Much lighter than processes (faster to create/switch)

# WHY THREADS?
# - I/O-bound work (network requests, file operations)
# - Keep UI responsive while doing work in background
# - Parallel processing within shared memory

# PROCESS vs THREAD:
comparison = {
    "Memory": "Process: isolated | Thread: shared",
    "Creation": "Process: slow (~ms) | Thread: fast (~μs)",
    "Communication": "Process: pipes/sockets | Thread: shared vars",
    "Safety": "Process: crash isolated | Thread: crash kills all",
    "Context switch": "Process: slow | Thread: fast",
}

print("PROCESS vs THREAD:")
for aspect, comp in comparison.items():
    print(f"  {aspect}: {comp}")</div>

<div class="code-block"># ── STEP 2: Race conditions ──
# When multiple threads access SHARED data simultaneously,
# the result depends on timing. This is a RACE CONDITION.

import threading

# ❌ RACE CONDITION:
counter = 0

def increment():
    """Increment counter 1 million times."""
    global counter
    for _ in range(1000000):
        counter += 1  # NOT ATOMIC! Read → Add → Write

# counter += 1 looks like one operation, but it's THREE:
# 1. READ counter value
# 2. ADD 1 to it
# 3. WRITE new value back

# If two threads interleave: both read 5, both add 1, both write 6.
# Lost an increment!

t1 = threading.Thread(target=increment)
t2 = threading.Thread(target=increment)
t1.start(); t2.start()
t1.join();  t2.join()

# Expected: 2000000, Actual: ~1400000 (depends on timing)
print(f"Expected: 2000000, Got: {counter}")
print("Race condition! 600000 increments were lost.")</div>

<div class="code-block"># ── STEP 3: Locks — preventing race conditions ──
# A LOCK ensures only ONE thread accesses shared data at a time.

import threading

counter = 0
lock = threading.Lock()

def safe_increment():
    """Thread-safe increment using a lock."""
    global counter
    for _ in range(1000000):
        with lock:  # only one thread at a time
            counter += 1

t1 = threading.Thread(target=safe_increment)
t2 = threading.Thread(target=safe_increment)
t1.start(); t2.start()
t1.join();  t2.join()

print(f"Expected: 2000000, Got: {counter}")  # 2000000 (correct!)

# The LOCK ensures the read-add-write is ATOMIC (uninterruptible).
# BUT: locks have a cost — they serialize access (slower).
# Trade-off: correctness vs speed.

# LOCK PITFALLS:
# 1. Deadlock: Thread A holds Lock1, waits for Lock2.
#              Thread B holds Lock2, waits for Lock1.
#              Both wait forever.
#
# 2. Priority inversion: High-priority thread waits for low-priority.
#
# 3. Too many locks = no parallelism (everything serialized).

# BEST PRACTICE:
# - Hold locks for the SHORTEST time possible
# - Acquire locks in CONSISTENT order (prevent deadlock)
# - Prefer lock-free data structures when possible</div>

<div class="code-block"># ── STEP 4: The Python GIL ──
# Python has a GLOBAL INTERPRETER LOCK (GIL).
# Only ONE thread can execute Python bytecode at a time.

# This means:
# - CPU-bound threading in Python = NO speedup (GIL blocks)
# - I/O-bound threading in Python = YES speedup (GIL released during I/O)

# CPU-BOUND (math, computation):
# Threading doesn't help → use multiprocessing instead
# Each process has its own GIL → true parallelism

# I/O-BOUND (network, disk, database):
# Threading DOES help → GIL released during I/O wait
# One thread waits for network, another thread runs

from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
import time
import requests

# ✅ I/O-bound: ThreadPoolExecutor (threads work!):
def fetch_url(url):
    return requests.get(url).status_code

urls = ["https://example.com"] * 10
with ThreadPoolExecutor(max_workers=5) as executor:
    results = list(executor.map(fetch_url, urls))
    print(f"Fetched {len(results)} URLs")

# ✅ CPU-bound: ProcessPoolExecutor (processes needed!):
def compute(n):
    """CPU-intensive computation."""
    return sum(i * i for i in range(n))

with ProcessPoolExecutor(max_workers=4) as executor:
    results = list(executor.map(compute, [1000000] * 4))
    print(f"Computed {len(results)} results")

# RULE OF THUMB:
# I/O-bound (network, disk) → threading or asyncio
# CPU-bound (math, processing) → multiprocessing</div>

<div class="code-block"># ── STEP 5: Thread synchronization primitives ──
# Beyond locks, there are other synchronization tools:

import threading

# 1. LOCK: basic mutual exclusion
lock = threading.Lock()

# 2. RLOCK (Reentrant Lock): same thread can acquire multiple times
rlock = threading.RLock()

# 3. SEMAPHORE: allows N threads (not just 1)
semaphore = threading.Semaphore(3)  # max 3 threads

# 4. EVENT: signal between threads
event = threading.Event()

def waiter():
    print("Waiting for signal...")
    event.wait()  # blocks until set
    print("Signal received!")

def setter():
    import time; time.sleep(1)
    event.set()  # signal the waiter

# 5. CONDITION: wait for a condition to be true
condition = threading.Condition()

# 6. BARRIER: wait for N threads to reach a point
barrier = threading.Barrier(3)  # 3 threads must arrive

# Example: database connection pool with semaphore:
class ConnectionPool:
    def __init__(self, max_connections=5):
        self.semaphore = threading.Semaphore(max_connections)
        self.connections = []

    def get_connection(self):
        self.semaphore.acquire()  # blocks if pool full
        # return a connection...
        return f"Connection-{threading.current_thread().name}"

    def release_connection(self, conn):
        self.connections.append(conn)
        self.semaphore.release()  # free a slot</div>

<div class="code-block"># ── STEP 6: Modern alternatives to threading ──
# Python has better options for many use cases:

# 1. ASYNCIO (best for I/O-bound, high concurrency):
# import asyncio
# async def fetch_all(urls):
#     async with aiohttp.ClientSession() as session:
#         tasks = [session.get(url) for url in urls]
#         return await asyncio.gather(*tasks)
# → Single thread, thousands of concurrent connections

# 2. MULTIPROCESSING (best for CPU-bound):
# from multiprocessing import Pool
# with Pool(4) as pool:
#     results = pool.map(compute, data)
# → True parallelism (each process has own GIL)

# 3. CONCURRENT.FUTURES (unified API):
# from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
# → Same API for threads and processes

# WHEN TO USE WHAT:
# ┌──────────────────────┬──────────────────────────────────┐
# │ Situation            │ Best Tool                       │
# ├──────────────────────┼──────────────────────────────────┤
# │ 1000s of I/O tasks  │ asyncio (single thread)          │
# │ CPU-heavy parallel   │ multiprocessing                  │
# │ Few I/O tasks        │ threading                        │
# │ Mixed I/O + CPU      │ asyncio + ProcessPoolExecutor    │
# │ Need shared memory   │ multiprocessing.SharedMemory     │
# └──────────────────────┴──────────────────────────────────┘

# THE FUTURE:
# Python 3.13+ has a "free-threaded" mode (no GIL!)
# This will eventually make threading useful for CPU-bound work too.
# But for now (2024-2026), assume GIL exists.

# REAL-WORLD EXAMPLES:
# - Gunicorn: uses multiprocessing (one process per worker)
# - Celery: uses multiprocessing (task queue)
# - Django async views: uses asyncio
# - aiohttp: uses asyncio (high-concurrency HTTP)
# - Redis: single-threaded, event loop (like asyncio)</div>

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

<div class="code-block"># ── STEP 1: What is CPU scheduling? ──
# The OS has 100+ processes but only a few CPU cores.
# SCHEDULING = deciding WHO runs WHEN and for HOW LONG.

# The scheduler makes these decisions EVERY MILLISECOND.
# Goal: fair + efficient + responsive.

# Key concepts:
# - CPU BURST: process runs on CPU
# - I/O BURST: process waits for I/O (disk, network)
# - PREEMPTION: OS forcefully takes CPU back from a process
# - QUANTUM: how long a process runs before preemption

# PROCESS TYPES:
process_types = {
    "I/O-bound": "Spends most time waiting (network, disk). Needs short, frequent CPU bursts.",
    "CPU-bound": "Spends most time computing. Needs long CPU bursts.",
    "Interactive": "Needs fast response (UI, editors). Low latency matters.",
    "Batch": "Background processing. Throughput matters, not latency.",
}

print("PROCESS TYPES:")
for ptype, desc in process_types.items():
    print(f"  {ptype}: {desc}")

# The scheduler must balance ALL of these simultaneously.</div>

<div class="code-block"># ── STEP 2: Scheduling algorithms ──
# Different algorithms for different goals:

algorithms = {
    "FCFS (First Come First Served)": {
        "how": "Whoever arrives first, runs first",
        "pro": "Simple, fair",
        "con": "Convoy effect (one slow process blocks everyone)",
    },
    "SJF (Shortest Job First)": {
        "how": "Shortest job runs first",
        "pro": "Optimal average wait time",
        "con": "Can't predict job length, starvation of long jobs",
    },
    "Round Robin": {
        "how": "Each process gets a time slice (quantum), then next",
        "pro": "Fair, responsive",
        "con": "Too many context switches if quantum too small",
    },
    "Priority": {
        "how": "Highest priority runs first",
        "pro": "Important tasks get CPU",
        "con": "Low priority tasks may never run (starvation)",
    },
    "MLFQ (Multi-Level Feedback Queue)": {
        "how": "Multiple queues, processes move between levels",
        "pro": "Adapts to process behavior",
        "con": "Complex to configure",
    },
}

print("SCHEDULING ALGORITHMS:")
for algo, info in algorithms.items():
    print(f"\n  {algo}:")
    print(f"    How: {info['how']}")
    print(f"    Pro: {info['pro']}")
    print(f"    Con: {info['con']}")

# LINUX USES: CFS (Completely Fair Scheduler)
# Goal: give each process a FAIR share of CPU time.
# Uses a red-black tree sorted by virtual runtime.
# The process that has run the LEAST gets the CPU next.</div>

<div class="code-block"># ── STEP 3: Round Robin simulation ──
# Let's simulate Round Robin scheduling in Python:

def round_robin(processes, quantum):
    """Simulate Round Robin CPU scheduling."""
    from collections import deque

    # Each process: [name, remaining_time]
    queue = deque([[name, time] for name, time in processes])
    timeline = []
    current_time = 0

    while queue:
        process = queue.popleft()
        name, remaining = process

        # Run for quantum or remaining time (whichever is smaller):
        run_time = min(quantum, remaining)
        timeline.append(f"{name}({run_time}ms)")
        current_time += run_time
        remaining -= run_time

        # If not done, add back to queue:
        if remaining > 0:
            queue.append([name, remaining])

    return " → ".join(timeline)

# Example: 3 processes, 4ms quantum
processes = [("P1", 24), ("P2", 3), ("P3", 3)]
result = round_robin(processes, quantum=4)
print(f"Round Robin (quantum=4ms): {result}")
# P1(4ms) → P2(3ms) → P3(3ms) → P1(4ms) → P1(4ms) → P1(4ms) → P1(4ms) → P1(4ms)

# QUANTUM SIZE MATTERS:
# Too large → acts like FCFS (unfair)
# Too small → too many context switches (overhead)
# Typical: 1-10ms (Linux default: ~1-10ms depending on HZ)</div>

<div class="code-block"># ── STEP 4: Process priority (nice values) ──
# In Linux/Unix, every process has a PRIORITY (nice value).

# Nice range: -20 (highest priority) to +19 (lowest priority)
# Default: 0
# Only root can set negative (higher priority)

import os

# Check your process priority:
print(f"Current nice value: {os.nice(0)}")  # 0 (read current)

# Lower priority (higher nice value):
# os.nice(10)  # be nice to others, run at lower priority

# TERMINAL COMMANDS:
commands = """
$ nice -n 10 python heavy_script.py     # start at nice 10
$ renice +5 -p 1234                     # change PID 1234 to nice 5
$ renice -10 -p 1234                    # higher priority (root only)

# Real-time priority (SCHED_FIFO):
$ chrt -f 80 python realtime.py         # RT priority 80 (very high)
# Real-time processes ALWAYS run before normal processes!

# Pin process to specific CPU cores:
$ taskset -c 0,1 python parallel.py     # only run on cores 0 and 1
"""

print(commands)

# WHEN TO ADJUST PRIORITY:
# - Lower priority: background batch jobs, backups, indexing
# - Higher priority: real-time audio/video, latency-critical apps
# - CPU affinity: avoid cache misses, isolate workloads</div>

<div class="code-block"># ── STEP 5: Real-time scheduling ──
# Some systems need GUARANTEED response times (real-time).

# HARD REAL-TIME: missing deadline = catastrophe
# - Airbag deployment, pacemaker, nuclear reactor control
# - RTOS (Real-Time OS): VxWorks, FreeRTOS, QNX

# SOFT REAL-TIME: missing deadline = degraded quality
# - Video streaming, audio processing, game physics
# - Linux with PREEMPT_RT patch

# RATE MONOTONIC SCHEDULING (RMS):
# - Shorter period = higher priority
# - Provably optimal for fixed-priority scheduling
# - Can use at most ~69% of CPU (mathematical limit)

def is_schedulable(tasks):
    """Check if tasks are schedulable (utilization test)."""
    n = len(tasks)
    utilization = sum(t["wcet"] / t["period"] for t in tasks)
    limit = n * (2 ** (1/n) - 1)  # Liu & Layland bound
    print(f"Tasks: {n}")
    print(f"Total utilization: {utilization:.3f}")
    print(f"RMS limit: {limit:.3f}")
    print(f"Schedulable: {'YES' if utilization <= limit else 'MAYBE'}")

# Example:
tasks = [
    {"name": "Sensor", "wcet": 1, "period": 5},   # reads sensor every 5ms
    {"name": "Control", "wcet": 2, "period": 10},  # control loop every 10ms
    {"name": "Display", "wcet": 3, "period": 20},  # update display every 20ms
]
is_schedulable(tasks)</div>

<div class="code-block"># ── STEP 6: Monitoring scheduling on your system ──
# Commands to see scheduling in action:

monitoring = """
# CPU load averages (1min, 5min, 15min):
$ cat /proc/loadavg
0.52 0.48 0.45 2/134 12345
# load > #cores = processes waiting for CPU

# Per-CPU usage:
$ mpstat -P ALL 1
# Shows each CPU core's usage every 1 second

# Process scheduling details:
$ ps -eo pid,cls,pri,ni,comm --sort=-pri
# CLS = scheduling class (TS=normal, FF=FIFO, RR=Round Robin)

# See scheduler decisions (requires kernel tracing):
$ perf sched record sleep 10
$ perf sched latency

# Real-time monitoring:
$ top -H    # show individual threads
$ htop      # interactive, color-coded
"""

print(monitoring)

# SCHEDULING SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Algorithm        │ Used In                         │
# ├──────────────────┼──────────────────────────────────┤
# │ CFS              │ Linux (default, fair)           │
# │ Round Robin      │ Many OSes (fair, simple)        │
# │ Rate Monotonic   │ RTOS (real-time)                │
# │ EDF              │ RTOS (optimal if feasible)      │
# │ MLFQ             │ Windows, some Unix              │
# │ FIFO             │ RTOS, embedded                  │
# └──────────────────┴──────────────────────────────────┘

# WHY DEVELOPERS CARE:
# - Choose the right concurrency model (process vs thread vs async)
# - Set priorities for background vs foreground work
# - Understand why your app is slow (CPU contention?)
# - Debug performance issues (context switches, scheduling delays)
# - Design for the scheduler, not against it</div>

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

<div class="code-block"># ── STEP 1: Synchronization primitives ──
# When threads share resources, we need SYNCHRONIZATION
# to prevent chaos.

# The core problem: shared data + concurrent access = corruption.

# SYNCHRONIZATION PRIMITIVES:
primitives = {
    "Mutex (Lock)": "Only ONE thread can hold it at a time. Like a bathroom key.",
    "Semaphore": "Counter that allows N threads. Like parking lot with N spots.",
    "Condition Variable": "Wait until a condition becomes true. Like a bell.",
    "Barrier": "Wait until N threads arrive. Like a starting line.",
    "Read-Write Lock": "Many readers OR one writer. Like a library.",
}

print("SYNCHRONIZATION PRIMITIVES:")
for name, desc in primitives.items():
    print(f"  {name}: {desc}")

# SEMAPHORE ANALOGY:
# Imagine a parking lot with 3 spots.
# - Cars enter (sem_wait / P operation): counter decreases
# - Cars leave (sem_post / V operation): counter increases
# - When lot is full (counter=0), new cars WAIT
# This is a COUNTING SEMAPHORE.</div>

<div class="code-block"># ── STEP 2: Mutex in action ──
# A MUTEX (mutual exclusion) protects a critical section.

import threading

# Shared resource:
bank_balance = 1000
mutex = threading.Lock()

# ❌ UNSAFE (race condition):
def unsafe_withdraw(amount):
    global bank_balance
    if bank_balance >= amount:       # check
        # ── another thread could change balance here! ──
        bank_balance -= amount        # update

# ✅ SAFE (mutex protected):
def safe_withdraw(amount):
    global bank_balance
    with mutex:                       # CRITICAL SECTION
        if bank_balance >= amount:
            bank_balance -= amount

# The MUTEX ensures the check-and-update is ATOMIC.
# No other thread can enter the critical section simultaneously.

# THREAD SAFE vs THREAD UNSAFE:
# Thread unsafe: dict, list (in CPython, GIL helps but don't rely on it)
# Thread safe: queue.Queue, collections.deque (with external lock)
# Always thread safe: threading.local, multiprocessing.Queue

# PYTHON'S with lock: PATTERN:
# with mutex:
#     # critical section — only one thread here at a time
#     shared_resource.modify()
# # lock automatically released when leaving 'with' block
# This is equivalent to:
# mutex.acquire()
# try:
#     shared_resource.modify()
# finally:
#     mutex.release()</div>

<div class="code-block"># ── STEP 3: Producer-Consumer problem ──
# Classic synchronization problem:
# - PRODUCER creates items, puts in buffer
# - CONSUMER takes items from buffer
# - Buffer has limited size

# Solution: use semaphores to coordinate.

import threading
import time
import random

BUFFER_SIZE = 5
buffer = []

# Semaphores:
empty = threading.Semaphore(BUFFER_SIZE)  # empty slots (starts full)
full = threading.Semaphore(0)             # full slots (starts empty)
mutex = threading.Lock()

def producer():
    """Produces items and puts in buffer."""
    for i in range(10):
        item = f"item-{i}"
        empty.acquire()   # wait for empty slot
        mutex.acquire()   # lock buffer
        buffer.append(item)
        print(f"  Produced: {item} (buffer: {len(buffer)})")
        mutex.release()   # unlock buffer
        full.release()    # signal: one more full slot
        time.sleep(random.uniform(0.1, 0.5))

def consumer():
    """Consumes items from buffer."""
    for i in range(10):
        full.acquire()    # wait for full slot
        mutex.acquire()   # lock buffer
        item = buffer.pop(0)
        print(f"  Consumed: {item} (buffer: {len(buffer)})")
        mutex.release()   # unlock buffer
        empty.release()   # signal: one more empty slot
        time.sleep(random.uniform(0.2, 0.8))

# Run:
t1 = threading.Thread(target=producer)
t2 = threading.Thread(target=consumer)
t1.start(); t2.start()
t1.join(); t2.join()</div>

<div class="code-block"># ── STEP 4: Counting semaphore ──
# Counting semaphores control access to N resources.

import threading

# Connection pool with semaphore:
class DatabaseConnectionPool:
    def __init__(self, max_connections=5):
        self.semaphore = threading.Semaphore(max_connections)
        self.max = max_connections

    def get_connection(self):
        """Get a connection. Blocks if pool is exhausted."""
        self.semaphore.acquire()  # decrement counter
        print(f"  Connection acquired ({self.max - self.semaphore._value} in use)")
        return {"conn": f"db-{threading.current_thread().name}"}

    def release_connection(self, conn):
        """Release a connection back to pool."""
        self.semaphore.release()  # increment counter
        print(f"  Connection released ({self.max - self.semaphore._value} in use)")

# Usage:
pool = DatabaseConnectionPool(max_connections=3)

def query_worker(pool, query_id):
    conn = pool.get_connection()
    import time; time.sleep(0.5)  # simulate query
    pool.release_connection(conn)

# Even if 10 threads try simultaneously, only 3 get connections at once.
# Others WAIT until a connection is released.</div>

<div class="code-block"># ── STEP 5: Read-write locks ──
# Optimization: multiple readers OR one writer.

# Problem with mutex: even READERS block each other.
# But reading shared data is SAFE — only writing is dangerous.

# READ-WRITE LOCK:
# - Multiple readers can read simultaneously
# - Only ONE writer can write (no readers while writing)
# - Writers have priority (to prevent writer starvation)

import threading

class ReadWriteLock:
    def __init__(self):
        self._read_ready = threading.Condition()
        self._readers = 0

    def acquire_read(self):
        with self._read_ready:
            self._readers += 1

    def release_read(self):
        with self._read_ready:
            self._readers -= 1
            if self._readers == 0:
                self._read_ready.notify_all()

    def acquire_write(self):
        self._read_ready.acquire()
        while self._readers > 0:
            self._read_ready.wait()

    def release_write(self):
        self._read_ready.release()

# Use case: cache that's read often, written rarely.
# Many threads read cache (fast), one thread updates (exclusive).</div>

<div class="code-block"># ── STEP 6: Common synchronization pitfalls ──
# DEADLOCK: circular waiting on locks.

# HOW DEADLOCK HAPPENS:
# Thread A: locks Resource 1, wants Resource 2
# Thread B: locks Resource 2, wants Resource 1
# → Both wait forever.

# DEADLOCK CONDITIONS (Coffman conditions):
# 1. MUTUAL EXCLUSION: resources can't be shared
# 2. HOLD AND WAIT: hold one resource, wait for another
# 3. NO PREEMPTION: can't forcefully take resources
# 4. CIRCULAR WAIT: A waits for B, B waits for A

# PREVENTION: break one of the four conditions:

prevention = {
    "Break circular wait": "Acquire locks in CONSISTENT order",
    "Break hold and wait": "Acquire ALL locks at once, or none",
    "Use timeout": "lock.acquire(timeout=5) — give up after 5s",
    "Use try/finally": "Always release locks, even on exception",
    "Minimize lock scope": "Hold lock for shortest time possible",
}

print("DEADLOCK PREVENTION:")
for strategy, desc in prevention.items():
    print(f"  ✅ {strategy}: {desc}")

# DETECTION: periodically check for deadlock:
# - Thread dump analysis (jstack for Java, py-spy for Python)
# - Watchdog timer (if no progress in N seconds, restart)
# - Resource allocation graph analysis

# PYTHON-SPECIFIC TIPS:
# - Use threading.RLock() for reentrant locking (same thread)
# - Use context managers (with lock:) for automatic release
# - Use queue.Queue for producer-consumer (built-in thread safety)
# - Prefer asyncio over threading for I/O-bound work
# - Use multiprocessing for CPU-bound (no shared state = no deadlock)

# SYNCHRONIZATION SUMMARY:
# ┌────────────────┬──────────────────────────────────┐
# │ Primitive      │ Use Case                        │
# ├────────────────┼──────────────────────────────────┤
# │ Lock/Mutex     │ Protect critical section        │
# │ Semaphore      │ Limit to N concurrent accesses  │
# │ Condition      │ Wait for condition to be true   │
# │ Event          │ Signal between threads          │
# │ Barrier        │ Synchronize multiple threads    │
# │ RWLock         │ Many readers, one writer        │
# └────────────────┴──────────────────────────────────┘</div>

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

<div class="code-block"># ── STEP 1: What is deadlock? ──
# DEADLOCK: two or more threads are stuck, each waiting
# for a resource the other holds. Forever.

# REAL-WORLD ANALOGY:
# Intersection where 4 cars arrive simultaneously.
# Each blocks the next. Nobody can move. Forever.

# THE FOUR COFFMAN CONDITIONS (all must be true for deadlock):
conditions = {
    "1. MUTUAL EXCLUSION": "Resource can't be shared (one at a time)",
    "2. HOLD AND WAIT": "Thread holds one resource, waits for another",
    "3. NO PREEMPTION": "Can't force-take a resource (must be released voluntarily)",
    "4. CIRCULAR WAIT": "Thread A waits for B, B waits for C, C waits for A",
}

print("COFFMAN CONDITIONS (all 4 needed for deadlock):")
for cond, desc in conditions.items():
    print(f"  {cond}: {desc}")

# BREAK ANY ONE → deadlock impossible.
# Easiest to break: CIRCULAR WAIT (acquire locks in consistent order).</div>

<div class="code-block"># ── STEP 2: Deadlock example in Python ──
import threading
import time

lock_a = threading.Lock()
lock_b = threading.Lock()

def task1():
    """Acquires lock_a, then lock_b."""
    lock_a.acquire()
    print("Task1: acquired lock_a")
    time.sleep(0.1)  # give task2 time to acquire lock_b

    lock_b.acquire()  # ❌ WAITS — task2 holds lock_b
    print("Task1: acquired lock_b (never reaches here!)")

    lock_b.release()
    lock_a.release()

def task2():
    """Acquires lock_b, then lock_a."""
    lock_b.acquire()
    print("Task2: acquired lock_b")
    time.sleep(0.1)

    lock_a.acquire()  # ❌ WAITS — task1 holds lock_a
    print("Task2: acquired lock_a (never reaches here!)")

    lock_a.release()
    lock_b.release()

# Run (will deadlock!):
# t1 = threading.Thread(target=task1)
# t2 = threading.Thread(target=task2)
# t1.start(); t2.start()
# t1.join(); t2.join()  # NEVER returns — DEADLOCK

# WHAT HAPPENS:
# task1 holds lock_a, waits for lock_b
# task2 holds lock_b, waits for lock_a
# Neither can proceed → deadlock forever</div>

<div class="code-block"># ── STEP 3: Preventing deadlock — lock ordering ──
# BREAK CIRCULAR WAIT: always acquire locks in the SAME ORDER.

import threading

lock_a = threading.Lock()
lock_b = threading.Lock()

def safe_task1():
    """ALWAYS acquire lock_a before lock_b."""
    lock_a.acquire()
    try:
        lock_b.acquire()
        try:
            print("Task1: both locks acquired safely")
            # do work...
        finally:
            lock_b.release()
    finally:
        lock_a.release()

def safe_task2():
    """ALWAYS acquire lock_a before lock_b (SAME ORDER)."""
    lock_a.acquire()
    try:
        lock_b.acquire()
        try:
            print("Task2: both locks acquired safely")
            # do work...
        finally:
            lock_b.release()
    finally:
        lock_a.release()

# Now deadlock is IMPOSSIBLE because there's no circular wait.
# Both tasks acquire in the same order: A then B.</div>

<div class="code-block"># ── STEP 4: Dining Philosophers problem ──
# Classic deadlock example (Dijkstra, 1965):

# 5 philosophers sit at a round table.
# 5 chopsticks (one between each pair).
# Each needs 2 chopsticks to eat.

# If all grab their LEFT chopstick simultaneously → deadlock.
# Nobody can grab the right chopstick. All starve.

# SOLUTIONS:
solutions = {
    "1. Resource hierarchy": "Always pick up LOWER-numbered chopstick first",
    "2. Arbitrator": "Waiter must give permission (central authority)",
    "3. Chandy-Misra": "Ask neighbors for chopsticks (token passing)",
    "4. Limit diners": "Only allow 4 philosophers to try (N-1 rule)",
    "5. Asymmetric": "Odd philosophers grab left first, even grab right",
}

print("DINING PHILOSOPHERS SOLUTIONS:")
for solution, desc in solutions.items():
    print(f"  {solution}: {desc}")

# THIS PROBLEM MODELS:
# - Resource allocation in OS
# - Database transaction locks
# - Network protocol design
# - Distributed system consensus</div>

<div class="code-block"># ── STEP 5: Deadlock detection and recovery ──
# Sometimes prevention is too expensive. Instead: DETECT and RECOVER.

# DETECTION METHODS:
# 1. Resource Allocation Graph (RAG):
#    - Draw nodes for processes and resources
#    - Edge from process → resource (requesting)
#    - Edge from resource → process (holding)
#    - CYCLE = deadlock!

# 2. Timeout-based detection:
#    - If a thread holds a lock too long → suspect deadlock
#    - Use lock.acquire(timeout=5) in Python

import threading

lock = threading.Lock()

def deadlock_safe_acquire():
    """Acquire lock with timeout to avoid deadlock."""
    acquired = lock.acquire(timeout=5.0)
    if acquired:
        try:
            print("Lock acquired, doing work...")
        finally:
            lock.release()
    else:
        print("Timeout! Possible deadlock. Taking recovery action.")
        # Recovery: skip the operation, retry, or escalate

deadlock_safe_acquire()

# RECOVERY METHODS:
recovery = [
    "1. Kill one process (sacrifice to save others)",
    "2. Rollback (restore to previous state)",
    "3. Preemption (forcefully take resource)",
    "4. Restart everything (last resort)",
]

print("\nRECOVERY METHODS:")
for method in recovery:
    print(f"  {method}")</div>

<div class="code-block"># ── STEP 6: Banker's Algorithm and real-world deadlock ──
# BANKER'S ALGORITHM (Dijkstra, 1965):
# Allocate resources only if the system stays in a SAFE STATE.

# SAFE STATE: there exists a sequence where all processes can finish.
# UNSAFE STATE: deadlock MIGHT occur (not guaranteed, but possible).

# The algorithm simulates: "if I grant this request, can everyone still finish?"
# If yes → grant. If no → make the process wait.

def bankers_check(available, max_need, allocated):
    """Simplified Banker's Algorithm safety check."""
    n = len(max_need)
    work = available.copy()
    finish = [False] * n

    while True:
        found = False
        for i in range(n):
            if not finish[i]:
                need = [max_need[i][j] - allocated[i][j] for j in range(len(available))]
                if all(need[j] <= work[j] for j in range(len(available))):
                    # This process can finish — release its resources
                    work = [work[j] + allocated[i][j] for j in range(len(available))]
                    finish[i] = True
                    found = True
        if not found:
            break

    return all(finish)  # True = safe state

# REAL-WORLD DEADLOCKS:
real_deadlocks = {
    "Database": "Two transactions lock rows the other needs",
    "Distributed systems": "Network partition causes circular waits",
    "File systems": "One process locks file A, another locks file B",
    "Django/ORM": "Database transaction deadlocks on concurrent updates",
    "Docker": "Container waiting on volume, volume waiting on container",
}

print("REAL-WORLD DEADLOCK SCENARIOS:")
for context, example in real_deadlocks.items():
    print(f"  {context}: {example}")

# HOW TO HANDLE IN DJANGO (your project):
# 1. Use select_for_update() with proper ordering
# 2. Keep transactions SHORT
# 3. Access tables in CONSISTENT ORDER
# 4. Set lock_timeout in database
# 5. Use retry on deadlock (catch OperationalError, retry)

# DEADLOCK SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Strategy         │ How                              │
# ├──────────────────┼──────────────────────────────────┤
# │ Prevention       │ Break one Coffman condition     │
# │ Avoidance        │ Banker's Algorithm (check safe) │
# │ Detection        │ Timeout or graph cycle          │
# │ Recovery         │ Kill, rollback, restart         │
# │ Ignore (ostrich) │ Restart and hope (common in PC) │
# └──────────────────┴──────────────────────────────────┘

# Most general-purpose OSes (Linux, Windows) use the OSTRICH ALGORITHM:
# Ignore deadlock entirely. If it happens, user restarts.
# This is acceptable because deadlocks are rare in practice.</div>

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
