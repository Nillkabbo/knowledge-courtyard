const doors = [];

// ═══════════════════════════════════════════
// DOOR 1 — The Invisible Walls (Docker: Namespaces, Cgroups, OverlayFS)
// ═══════════════════════════════════════════
doors.push({
  num: 1,
  icon: "📦",
  color: "#0ea5e9",
  name: "অদৃশ্য দেয়াল",
  subtitle: "Docker — Namespaces, Cgroups & OverlayFS",
  tech: "Linux Namespaces, Control Groups, Union Filesystem — Docker (2013)",
  spirit: "হিজাব — দৃশ্যমানতার সীমাবদ্ধতা, যা অদৃশ্য সুরক্ষা দেয়",
  secret: "Container কোনো VM নয় — শুধু একটা Linux process, অদৃশ্য দেয়ালে ঘেরা। ১০০ms-এ শুরু, কারণ kernel আগেই চলছে।",
  recall: {
    q: "Docker container আর Virtual Machine এর মূল পার্থক্য কী?",
    qen: "What is the fundamental difference between a Docker container and a Virtual Machine?",
    a: "VM = সম্পূর্ণ OS simulate করে (hypervisor, guest kernel, boot time 20-60s)। Container = host kernel share করে, শুধু namespaces+cgroups দিয়ে isolated process (100ms start)। কোনো hypervisor নেই।",
    aen: "VM = simulates full OS (hypervisor, guest kernel, 20-60s boot). Container = shares host kernel, just an isolated process via namespaces+cgroups (100ms start). No hypervisor."
  },
  story: `<p class="scene-setting">তুমি একটা বিশাল অফিস বিল্ডিংয়ে দাঁড়িয়ে আছ। শত শত কর্মী — কিন্তু প্রত্যেকে নিজের কিউবিকলে। দেয়ালগুলো শব্দপ্রতিরোধক — কেউ অন্যের কথা শুনতে পায় না। প্রতিটা কিউবিকলে একজন কর্মী নিজেকে একা ভাবে — সারা বিল্ডিং তার মনে হয়। কিন্তু বাইরে থেকে তুমি দেখো — শত শত কিউবিকল, সব এক ছাদের নিচে। এটাই container। একটা kernel, শত শত isolated process।</p>
<p class="scene-setting en">You stand in a vast office building. Hundreds of workers — but each in their own cubicle. The walls are soundproof — no one hears another. Each worker believes they're alone — the entire building feels like theirs. But from outside, you see hundreds of cubicles under one roof. This is a container. One kernel, hundreds of isolated processes.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Health Check:</strong> Deployed without health check — LB sent traffic to dead container. Fix: /health endpoint.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <linearGradient id="hostBox" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e293b"/><stop offset="1" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="kernelBox" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#312e81"/><stop offset="1" stop-color="#1e1b4b"/></linearGradient>
  </defs>
  <!-- Host Machine -->
  <rect x="10" y="10" width="560" height="320" rx="12" fill="url(#hostBox)" stroke="#334155" stroke-width="2"/>
  <text x="290" y="35" text-anchor="middle" fill="#94a3b8" font-size="14" font-weight="700" font-family="sans-serif">🖥️ Host Machine (Linux Server)</text>

  <!-- Containers -->
  <rect x="30" y="55" width="150" height="170" rx="10" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2" opacity=".6"/>
  <text x="105" y="78" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="700">📦 Container A</text>
  <rect x="45" y="92" width="120" height="26" rx="5" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="105" y="109" text-anchor="middle" fill="#bae6fd" font-size="10">PID NS · NET NS</text>
  <rect x="45" y="125" width="120" height="26" rx="5" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="105" y="142" text-anchor="middle" fill="#bae6fd" font-size="10">cgroup: 0.5 CPU</text>
  <rect x="45" y="158" width="120" height="26" rx="5" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="105" y="175" text-anchor="middle" fill="#bae6fd" font-size="10">OverlayFS layers</text>
  <text x="105" y="205" text-anchor="middle" fill="#38bdf8" font-size="9" font-style="italic">App: LedgerPilot</text>

  <rect x="215" y="55" width="150" height="170" rx="10" fill="#581c87" stroke="#a855f7" stroke-width="2" opacity=".6"/>
  <text x="290" y="78" text-anchor="middle" fill="#d8b4fe" font-size="12" font-weight="700">📦 Container B</text>
  <rect x="230" y="92" width="120" height="26" rx="5" fill="#3b0764" stroke="#a855f7" stroke-width="1"/>
  <text x="290" y="109" text-anchor="middle" fill="#e9d5ff" font-size="10">PID NS · NET NS</text>
  <rect x="230" y="125" width="120" height="26" rx="5" fill="#3b0764" stroke="#a855f7" stroke-width="1"/>
  <text x="290" y="142" text-anchor="middle" fill="#e9d5ff" font-size="10">cgroup: 1GB RAM</text>
  <rect x="230" y="158" width="120" height="26" rx="5" fill="#3b0764" stroke="#a855f7" stroke-width="1"/>
  <text x="290" y="175" text-anchor="middle" fill="#e9d5ff" font-size="10">OverlayFS layers</text>
  <text x="290" y="205" text-anchor="middle" fill="#c084fc" font-size="9" font-style="italic">App: Ipractus</text>

  <rect x="400" y="55" width="150" height="170" rx="10" fill="#7c2d12" stroke="#f97316" stroke-width="2" opacity=".6"/>
  <text x="475" y="78" text-anchor="middle" fill="#fdba74" font-size="12" font-weight="700">📦 Container C</text>
  <rect x="415" y="92" width="120" height="26" rx="5" fill="#431407" stroke="#f97316" stroke-width="1"/>
  <text x="475" y="109" text-anchor="middle" fill="#fed7aa" font-size="10">PID NS · NET NS</text>
  <rect x="415" y="125" width="120" height="26" rx="5" fill="#431407" stroke="#f97316" stroke-width="1"/>
  <text x="475" y="142" text-anchor="middle" fill="#fed7aa" font-size="10">cgroup: 0.25 CPU</text>
  <rect x="415" y="158" width="120" height="26" rx="5" fill="#431407" stroke="#f97316" stroke-width="1"/>
  <text x="475" y="175" text-anchor="middle" fill="#fed7aa" font-size="10">OverlayFS layers</text>
  <text x="475" y="205" text-anchor="middle" fill="#fb923c" font-size="9" font-style="italic">App: Nginx Proxy</text>

  <!-- Shared Kernel -->
  <rect x="30" y="250" width="520" height="60" rx="10" fill="url(#kernelBox)" stroke="#818cf8" stroke-width="2"/>
  <text x="290" y="278" text-anchor="middle" fill="#c7d2fe" font-size="15" font-weight="900" font-family="sans-serif">🧠 Shared Linux Kernel (host kernel)</text>
  <text x="290" y="297" text-anchor="middle" fill="#a5b4fc" font-size="10">namespaces + cgroups + OverlayFS = Container Isolation</text>

  <!-- Connection arrows -->
  <line x1="105" y1="225" x2="105" y2="250" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="290" y1="225" x2="290" y2="250" stroke="#475569" stroke-width="1.5"/>
  <line x1="475" y1="225" x2="475" y2="250" stroke="#475569" stroke-width="1.5"/>
  <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: Container = isolated process on shared kernel. namespaces (কী দেখে) + cgroups (কতটুকু ব্যবহার করে) + OverlayFS (ফাইল স্তর)।</div>

<div class="dialogue"><strong>ডকার ইঞ্জিনিয়ার:</strong> ২০১৩ সাল। Solomon Hykes একটা demo দিলেন — "একটা process চালাও, সে নিজেকে সম্পূর্ণ একা ভাববে। নিজের PID, নিজের network, নিজের filesystem। কিন্তু আসলে সে শুধু একটা Linux process — kernel features দিয়ে restricted।" এর নাম দিলাম Docker। আর container-এর ভেতরের প্রক্রিয়া? সে জানেই না যে সে restricted।</div>
<div class="dialogue en"><strong>Docker Engineer:</strong> 2013. Solomon Hykes demoed — "run a process, it thinks it's completely alone. Its own PID, its own network, its own filesystem. But really it's just a Linux process — restricted via kernel features." We called it Docker. And the process inside the container? It doesn't even know it's restricted.</div>

<div class="code-block">
<strong>Container = ৩টি Kernel Feature এর সমন্বয়:</strong>

<strong>১. Namespaces (দৃশ্যমানতা সীমিত করে — কী দেখতে পায়):</strong>
<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Namespace</th><th style="text-align:left;padding:.3rem">যা isolate করে</th>
</tr>
<tr><td style="padding:.2rem"><strong>PID</strong></td><td>Process IDs — container-এর PID 1, host-এর process দেখা যায় না</td></tr>
<tr><td style="padding:.2rem"><strong>NET</strong></td><td>নিজস্ব network interface, IP, routing table, iptables</td></tr>
<tr><td style="padding:.2rem"><strong>MNT</strong></td><td>নিজস্ব filesystem mount points</td></tr>
<tr><td style="padding:.2rem"><strong>UTS</strong></td><td>নিজস্ব hostname আর domain name</td></tr>
<tr><td style="padding:.2rem"><strong>IPC</strong></td><td>Inter-process communication (shared memory, semaphores)</td></tr>
<tr><td style="padding:.2rem"><strong>USER</strong></td><td>UID/GID mapping — container-এ root = host-এ unprivileged</td></tr>
</table>

<strong>২. Cgroups (রিসোর্স সীমিত করে — কতটুকু ব্যবহার করতে পারে):</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
CPU: cpus: '0.50'    → সর্বোচ্চ অর্ধেক core
Memory: 512M          → OOM হলে container killed
I/O: 100mbps          → disk read/write throttle
</pre>

<strong>৩. OverlayFS (স্তরযুক্ত ফাইল সিস্টেম):</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
[Read-only layers]  Base image (Ubuntu) + Dependencies (Python)
       ↓
[Writable layer]    Container-এর পরিবর্তন (copy-on-write)
       ↓
100 container একই image = প্রায় শূন্য extra disk!
</pre>
</div>

<div class="dialogue"><strong>তুমি:</strong> কিন্তু VM-ও তো isolate করে। পার্থক্য কী?</div>
<div class="dialogue en"><strong>You:</strong> But VMs also isolate. What's the difference?</div>

<div class="dialogue"><strong>ইঞ্জিনিয়ার:</strong> VM = সম্পূর্ণ OS simulate। Hypervisor একটা fake kernel চালায়। প্রতিটা VM-এ আলাদা kernel, আলাদা boot process, ন্যূনতম 512MB memory overhead। Container = host kernel share করে। কোনো দ্বিতীয় kernel নেই। Boot time? VM = ২০-৬০ সেকেন্ড। Container = ১০০ মিলিসেকেন্ড। কারণ kernel আগেই চলছে — শুধু namespace তৈরি করে process চালু করতে হয়।</div>
<div class="dialogue en"><strong>Engineer:</strong> VM = simulates a full OS. Hypervisor runs a fake kernel. Each VM has its own kernel, its own boot process, minimum 512MB memory overhead. Container = shares host kernel. No second kernel. Boot time? VM = 20-60 seconds. Container = 100 milliseconds. Because the kernel is already running — just create a namespace and launch the process.</div>

<div class="verse">
<strong>⚠️ নিরাপত্তা সতর্কতা — --privileged এর বিপদ:</strong><br>
<code>--privileged</code> flag সব isolation ভেঙে দেয়! এটা সব capabilities দিয়ে দেয় (CAP_SYS_ADMIN, CAP_NET_ADMIN)। Container-এর ভেতরের process পুরো host-এ root access পায়।<br>
<strong>নিয়ম:</strong> Production-এ কখনো <code>--privileged</code> ব্যবহার করো না। নির্দিষ্ট capability দরকার হলে শুধু সেটা দাও।<br>
<strong>Shared Kernel Risk:</strong> সব container একই kernel share করে — একটা kernel vulnerability = সব container compromise। Multi-tenant-এ Kata Containers (microVM) বিবেচনা করো।<br>
<a href="../operating-systems/index.html" style="color:var(--accent);font-size:.85rem">← Book 38 (OS) — namespaces আর cgroups হলো OS concepts</a>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> Container বলে কিছু নেই। এটা শুধু একটা Linux process — namespaces দিয়ে অন্ধ, cgroups দিয়ে শৃঙ্খলিত, OverlayFS দিয়ে স্তরযুক্ত। VM-এর মতো নয় — আরও হালকা, আরও দ্রুত, কিন্তু কম নিরাপদ।<br>
<em>Containers don't exist as a native construct. They're just Linux processes — blinded by namespaces, chained by cgroups, layered by OverlayFS. Not VMs — lighter, faster, but less secure.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
<strong>Docker Timeline:</strong> 2013 (Docker released) → 2015 (OCI standard) → 2017 (Kubernetes won container orchestration war) → 2020s (containerd/CRI-O replace dockerd)
</div>
</div>`,
  senior: {
    title: "Docker Internals প্র্যাকটিস গাইড",
    body: `<p><strong>১. Namespace exploration:</strong> <code>docker exec -it &lt;container&gt; lsns</code> দিয়ে দেখো কোন namespaces active।</p>
<p><strong>২. Cgroup limits:</strong> <code>docker stats</code> দিয়ে real-time resource usage দেখো।</p>
<p><strong>৩. OverlayFS layers:</strong> <code>docker image inspect</code> দিয়ে layer count দেখো। প্রতিটা Dockerfile command = একটা layer।</p>
<p><strong>৪. Security hardening:</strong> read_only: true, cap_drop: [ALL], user: "1001:1001" — production-এ অবশ্যই।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 2 — The Board of Directors (K8s Control Plane)
// ═══════════════════════════════════════════
doors.push({
  num: 2,
  icon: "☸️",
  color: "#6366f1",
  name: "পরিচালনা পর্ষদ",
  subtitle: "Kubernetes Control Plane — etcd, API Server, Reconciliation Loop",
  tech: "Kubernetes Architecture, etcd, API Server, Controller Manager, Scheduler",
  spirit: "শূরা — পরিষদ, যে নির্দেশ দেয় কিন্তু নিজে কাজ করে না",
  secret: "K8s control plane কোনো কাজ করে না — শুধু desired state আর actual state compare করে, চিরকাল। এটাই reconciliation loop।",
  recall: {
    q: "Kubernetes-এ etcd এর ভূমিকা কী এবং কে এর সাথে যোগাযোগ করতে পারে?",
    qen: "What is etcd's role in Kubernetes and who can communicate with it?",
    a: "etcd হলো distributed key-value store — cluster-এর সম্পূর্ণ state (desired + actual) এখানে থাকে। শুধু API server সরাসরি etcd-এর সাথে যোগাযোগ করতে পারে — অন্য কেউ নয়।",
    aen: "etcd is a distributed key-value store — the cluster's entire state (desired + actual) lives here. Only the API server communicates directly with etcd — no one else."
  },
  story: `<p class="scene-setting">তুমি একটা কোম্পানির পরিচালনা পর্ষদের কক্ষে দাঁড়িয়ে আছ। বড় টেবিল, চারপাশে চেয়ার। পরিচালনা পর্ষদ সব নির্দেশ দেয় — কিন্তু নিজে কোনো কাজ করে না। তারা শুধু বলে "এই কাজটা হতে হবে।" কে কাজ করে? কর্মচারীরা — worker nodes। পরিচালনা পর্ষদ শুধু দেখে — কাজ ঠিক হচ্ছে কি না। না হলে আবার নির্দেশ দেয়। এটাই Kubernetes control plane।</p>
<p class="scene-setting en">You stand in a company's boardroom. Large table, chairs around it. The board gives all instructions — but does no work themselves. They say "this must be done." Who works? The employees — worker nodes. The board only watches — is the work getting done? If not, they instruct again. This is the Kubernetes control plane.</p>

<div class="dialogue"><strong>কে-এস ইঞ্জিনিয়ার:</strong> Google ২০১৪ সালে Kubernetes উন্মুক্ত করে — তাদের ভেতরের Borg system থেকে অনুপ্রাণিত। মূল ধারণা সহজ — তুমি বলো কী চাও (desired state), K8s নিশ্চিত করে সেটা হয়। তুমি বলো "৩টা replica।" K8s দেখে ২টা চলছে — ১টা বেশি চালু করে। একটা মরে গেলে — আরেকটা তৈরি করে। node মরে গেলে — pods অন্যত্র সরিয়ে নেয়। এটাই reconciliation loop — চিরকাল চলে।</div>
<div class="dialogue en"><strong>K8s Engineer:</strong> Google open-sourced Kubernetes in 2014 — inspired by their internal Borg system. The core idea is simple — you say what you want (desired state), K8s makes it happen. You say "3 replicas." K8s sees 2 running — starts 1 more. One dies — creates another. Node dies — moves pods elsewhere. This is the reconciliation loop — runs forever.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Secret in Docker Image:</strong> API key baked into image, pushed to public registry. Fix: runtime secrets (Vault).</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <linearGradient id="cpBox" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e1b4b"/><stop offset="1" stop-color="#0c0a3e"/></linearGradient>
    <linearGradient id="nodeBox" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#052e16"/><stop offset="1" stop-color="#022c1c"/></linearGradient>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker>
  </defs>
  <rect x="60" y="10" width="460" height="160" rx="12" fill="url(#cpBox)" stroke="#818cf8" stroke-width="2"/>
  <text x="290" y="33" text-anchor="middle" fill="#c7d2fe" font-size="13" font-weight="900">☸️ Control Plane (Board of Directors)</text>
  <rect x="80" y="50" width="120" height="50" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
  <text x="140" y="72" text-anchor="middle" fill="#e0e7ff" font-size="12" font-weight="700">etcd</text>
  <text x="140" y="88" text-anchor="middle" fill="#a5b4fc" font-size="9">Source of Truth (Raft)</text>
  <rect x="230" y="50" width="120" height="50" rx="8" fill="#1e40af" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="290" y="72" text-anchor="middle" fill="#dbeafe" font-size="12" font-weight="700">API Server</text>
  <text x="290" y="88" text-anchor="middle" fill="#93c5fd" font-size="9">Front Door · Gatekeeper</text>
  <rect x="80" y="110" width="100" height="45" rx="8" fill="#3730a3" stroke="#a78bfa" stroke-width="1"/>
  <text x="130" y="130" text-anchor="middle" fill="#ddd6fe" font-size="11" font-weight="600">Scheduler</text>
  <text x="130" y="144" text-anchor="middle" fill="#c4b5fd" font-size="8">"pod→node?"</text>
  <rect x="200" y="110" width="120" height="45" rx="8" fill="#3730a3" stroke="#a78bfa" stroke-width="1"/>
  <text x="260" y="130" text-anchor="middle" fill="#ddd6fe" font-size="11" font-weight="600">Controller Mgr</text>
  <text x="260" y="144" text-anchor="middle" fill="#c4b5fd" font-size="8">🔄 Reconciliation</text>
  <rect x="340" y="110" width="110" height="45" rx="8" fill="#3730a3" stroke="#a78bfa" stroke-width="1"/>
  <text x="395" y="130" text-anchor="middle" fill="#ddd6fe" font-size="11" font-weight="600">Cloud Ctlr</text>
  <text x="395" y="144" text-anchor="middle" fill="#c4b5fd" font-size="8">DO/AWS/GCP</text>
  <line x1="200" y1="75" x2="230" y2="75" stroke="#60a5fa" stroke-width="2"/>
  <text x="215" y="68" text-anchor="middle" fill="#60a5fa" font-size="8">only path</text>
  <rect x="30" y="200" width="160" height="160" rx="12" fill="url(#nodeBox)" stroke="#22c55e" stroke-width="2"/>
  <text x="110" y="222" text-anchor="middle" fill="#86efac" font-size="12" font-weight="700">🖥️ Worker Node 1</text>
  <rect x="45" y="235" width="130" height="28" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="110" y="253" text-anchor="middle" fill="#bbf7d0" font-size="10">Kubelet (agent)</text>
  <rect x="45" y="270" width="130" height="28" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="110" y="288" text-anchor="middle" fill="#bbf7d0" font-size="10">kube-proxy</text>
  <rect x="45" y="305" width="130" height="40" rx="5" fill="#14532d" stroke="#4ade80" stroke-width="1"/>
  <text x="110" y="322" text-anchor="middle" fill="#86efac" font-size="10" font-weight="600">Pod A · Pod B</text>
  <rect x="210" y="200" width="160" height="160" rx="12" fill="url(#nodeBox)" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="222" text-anchor="middle" fill="#86efac" font-size="12" font-weight="700">🖥️ Worker Node 2</text>
  <rect x="225" y="235" width="130" height="28" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="290" y="253" text-anchor="middle" fill="#bbf7d0" font-size="10">Kubelet (agent)</text>
  <rect x="225" y="270" width="130" height="28" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="290" y="288" text-anchor="middle" fill="#bbf7d0" font-size="10">kube-proxy</text>
  <rect x="225" y="305" width="130" height="40" rx="5" fill="#14532d" stroke="#4ade80" stroke-width="1"/>
  <text x="290" y="322" text-anchor="middle" fill="#86efac" font-size="10" font-weight="600">Pod C · Pod D</text>
  <line x1="290" y1="155" x2="290" y2="195" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr2)"/>
  <text x="310" y="178" fill="#94a3b8" font-size="9">"desired=3"</text>
  <line x1="140" y1="155" x2="140" y2="195" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr2)"/>
  <text x="290" y="375" text-anchor="middle" fill="#64748b" font-size="9" font-style="italic">Control Plane = desired state · Worker Nodes = actual state · Reconciliation = forever</text>
</svg>
</div>
<div class="svg-caption">চিত্র: K8s Architecture — Control Plane (etcd/API/Scheduler/Controllers) → Worker Nodes (Kubelet/kube-proxy/Pods)। শুধু API Server etcd কে ছোঁয়।</div>

<div class="code-block">
<strong>K8s Control Plane Components:</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Component</th>
<th style="text-align:left;padding:.3rem">কাজ</th>
<th style="text-align:left;padding:.3rem">উপমা</th>
</tr>
<tr><td style="padding:.2rem"><strong>etcd</strong></td><td>Distributed key-value store — cluster-এর সম্পূর্ণ state</td><td>📊 পরিষদের রেকর্ড বই</td></tr>
<tr><td style="padding:.2rem"><strong>API Server</strong></td><td>Front door — সব request এখান দিয়ে যায়। শুধু এটা etcd কে ছোঁয়</td><td>🚪 রিসেপশনিস্ট</td></tr>
<tr><td style="padding:.2rem"><strong>Scheduler</strong></td><td>Pod কে কোন node-এ বসানো হবে ঠিক করে</td><td>📝 HR এর seat allocation</td></tr>
<tr><td style="padding:.2rem"><strong>Controller Manager</strong></td><td>Reconciliation loop চালায় — desired vs actual compare</td><td>🔄 ম্যানেজার যে দেখে কাজ হচ্ছে কি না</td></tr>
<tr><td style="padding:.2rem"><strong>Cloud Controller</strong></td><td>Cloud provider (AWS/GCP/DO) এর সাথে যোগাযোগ</td><td>☁️ বাইরের কন্ট্রাক্টর</td></tr>
</table>

<br><strong>Reconciliation Loop উদাহরণ:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
তুমি: kubectl apply deployment.yml (replicas: 3)
  ↓
API Server: request validate করে → etcd-এ লেখে
  ↓
Controller Manager: "desired=3, actual=0" → 3টা pod create করে
  ↓
Scheduler: "pod-1 → node-A, pod-2 → node-B, pod-3 → node-A"
  ↓
Kubelet (node-A): container runtime কে বলে pod-1 চালু করতে
  ↓
Kubelet (node-B): container runtime কে বলে pod-2 চালু করতে
  ↓
একটা node crash! Controller: "desired=3, actual=2" → ১টা নতুন pod
  ↓
চিরকাল... (reconciliation loop never stops)
</pre>
</div>

<div class="dialogue"><strong>তুমি:</strong> কেন শুধু API server etcd কে ছোঁয়?</div>
<div class="dialogue en"><strong>You:</strong> Why does only the API server touch etcd?</div>

<div class="dialogue"><strong>ইঞ্জিনিয়ার:</strong> নিরাপত্তা আর consistency। যদি সব component সরাসরি etcd কে ছুঁতে পারত — race condition, data corruption, security vulnerability। API server হলো gatekeeper — সব request validate করে, authorize করে, তারপর etcd তে লেখে। Single point of access = single point of control।</div>
<div class="dialogue en"><strong>Engineer:</strong> Security and consistency. If all components could touch etcd directly — race conditions, data corruption, security vulnerabilities. The API server is the gatekeeper — validates every request, authorizes it, then writes to etcd. Single point of access = single point of control.</div>

<div class="verse">
<strong>etcd = Distributed Consensus (Raft):</strong><br>
etcd ভেতরে Raft consensus protocol ব্যবহার করে — leader election, log replication, quorum। এটাই Book 35 (Distributed Systems) এ শেখা Paxos/Raft এর real-world implementation!<br>
• সব write operation leader-এর মাধ্যমে যায়<br>
• Leader log entry কে followers-এ replicate করে<br>
• Quorum (majority) acknowledge করলে commit<br>
• Leader crash হলে — নতুন leader election<br>
<a href="../distributed-systems/index.html" style="color:var(--accent);font-size:.85rem">← Book 35 — Raft consensus এর গভীর আলোচনা</a>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> K8s control plane = একটা thermostat। তুমি তাপমাত্রা সেট করো (desired state), সে বারবার চেক করে — ঠিক আছে? জানালা খোলা? ঠিক করে দেয়। চিরকাল। এটাই reconciliation।<br>
<em>K8s control plane = a thermostat. You set the temperature (desired state), it checks repeatedly — all good? Window open? Fixes it. Forever. This is reconciliation.</em>
</div>`,
  senior: {
    title: "K8s Control Plane প্র্যাকটিস গাইড",
    body: `<p><strong>১. etcd backup:</strong> <code>etcdctl snapshot save</code> — নিয়মিত করো। etcd হারালে = cluster হারালে।</p>
<p><strong>২. API server security:</strong> RBAC চালু রাখো। কেউ cluster-admin দেবে না।</p>
<p><strong>৩. Controller debugging:</strong> <code>kubectl get events --sort-by='.lastTimestamp'</code> দিয়ে reconciliation events দেখো।</p>
<p><strong>৪. Cross-ref:</strong> Book 35 (Distributed) — etcd = Raft in production। Book 38 (OS) — process scheduling এর মতো pod scheduling।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 3 — The Faithful Agent (Kubelet & Worker Nodes)
// ═══════════════════════════════════════════
doors.push({
  num: 3,
  icon: "🤝",
  color: "#818cf8",
  name: "বিশ্বস্ত দূত",
  subtitle: "Worker Nodes — Kubelet, Container Runtime, kube-proxy",
  tech: "Kubelet, containerd/CRI-O, kube-proxy, Pod Lifecycle",
  spirit: "আমানত — বিশ্বাস রক্ষা, নির্দেশ পালন",
  secret: "Kubelet হলো worker node-এর প্রতিনিধি — control plane থেকে নির্দেশ নেয়, container runtime কে বলে কী করতে হবে।",
  recall: {
    q: "Kubelet এর প্রধান কাজ কী?",
    qen: "What is the primary job of the kubelet?",
    a: "Kubelet worker node-এ চলে — API server থেকে pod spec নেয়, container runtime (containerd) কে নির্দেশ দেয় container চালু/বন্ধ করতে, আর health status API server-কে রিপোর্ট করে।",
    aen: "Kubelet runs on each worker node — receives pod specs from the API server, instructs the container runtime (containerd) to start/stop containers, and reports health status back to the API server."
  },
  story: `<p class="scene-setting">পরিচালনা পর্ষদ নির্দেশ দিল — "node-3 এ একটা nginx pod চালু করো।" কিন্তু কে এই নির্দেশ পৌঁছাবে? কে নিশ্চিত করবে container চলছে? node-3 এ একজন প্রতিনিধি দরকার — একজন বিশ্বস্ত দূত যে পরিষদের নির্দেশ পালন করে। এই দূতের নাম: kubelet।</p>
<p class="scene-setting en">The board instructs — "start an nginx pod on node-3." But who delivers this instruction? Who ensures the container is running? Node-3 needs a representative — a faithful agent who carries out the board's orders. This agent's name: kubelet.</p>

<div class="dialogue"><strong>কিউবলেট:</strong> আমি প্রতিটা worker node-এ থাকি। আমার কাজ সহজ — API server থেকে pod spec নাও, container runtime কে বলো কী করতে হবে। Container চালু করো, বন্ধ করো, health check করো। আর সব status API server-কে রিপোর্ট করো। আমি একটা agent — কোনো decision নিই না, শুধু নির্দেশ পালন করি।</div>
<div class="dialogue en"><strong>Kubelet:</strong> I live on every worker node. My job is simple — receive pod specs from the API server, tell the container runtime what to do. Start containers, stop them, health-check them. Report all status back to the API server. I'm an agent — I make no decisions, I just follow orders.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Configuration Drift:</strong> Manual changes to prod — couldn't reproduce bug in staging. Fix: infrastructure as code.</div></div>


<div class="code-block">
<strong>Worker Node Components:</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Component</th>
<th style="text-align:left;padding:.3rem">কাজ</th>
</tr>
<tr><td style="padding:.2rem"><strong>Kubelet</strong></td><td>API server এর প্রতিনিধি — pod lifecycle manage করে</td></tr>
<tr><td style="padding:.2rem"><strong>kube-proxy</strong></td><td>Network rules manage করে — service VIP → pod IP routing</td></tr>
<tr><td style="padding:.2rem"><strong>Container Runtime</strong></td><td>containerd বা CRI-O — container চালায় (Docker deprecated!)</td></tr>
<tr><td style="padding:.2rem"><strong>Pod</strong></td><td>ক্ষুদ্রতম deployable unit — এক বা একাধিক container</td></tr>
</table>

<br><strong>Pod Lifecycle:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
Pending → ContainerCreating → Running → Succeeded/Failed
                                        ↓
                                    CrashLoopBackOff
                                        ↓
                                    (kubelet restarts)
</pre>

<strong>kube-proxy এর কাজ:</strong>
Service VIP (e.g., 10.0.0.5) → Pod IP (e.g., 192.168.1.10)
iptables rules দিয়ে — অথবা Cilium eBPF দিয়ে (Door 8 এ)।
</div>

<div class="dialogue"><strong>তুমি:</strong> Docker deprecated? K8s এ Docker নেই?</div>
<div class="dialogue en"><strong>You:</strong> Docker deprecated? K8s doesn't use Docker?</div>

<div class="dialogue"><strong>কিউবলেট:</strong> (হাসে) ঠিক বলেছ। ১.২০ version থেকে Docker shim deprecated। এখন containerd বা CRI-O ব্যবহার করা হয় — সরাসরি CRI (Container Runtime Interface) দিয়ে। কেন? Docker = dockerd + containerd + runc। K8s শুধু containerd দরকার — dockerd এর overhead দরকার না। Docker image format এখনও চলে — OCI standard। কিন্তু runtime dockerd নয়।</div>
<div class="dialogue en"><strong>Kubelet:</strong> (laughs) Correct. From version 1.20, Docker shim was deprecated. Now containerd or CRI-O is used — directly via CRI (Container Runtime Interface). Why? Docker = dockerd + containerd + runc. K8s only needs containerd — not dockerd's overhead. Docker image format still works — it's OCI standard. But the runtime isn't dockerd.</div>

<div class="verse">
<strong>Container Networking — OSI Model এর বাস্তব রূপ:</strong><br>
<a href="../computer-networks/index.html" style="color:var(--accent);font-size:.85rem">← Book 37 (Networks) — OSI model</a><br>
• <strong>L2:</strong> veth pair (ভার্চুয়াল কেবল) — container namespace থেকে host bridge তে<br>
• <strong>L3:</strong> iptables DNAT/SNAT — packet address rewrite<br>
• <strong>L4:</strong> kube-proxy — Service VIP → Pod IP load balancing<br>
• <strong>L7:</strong> CoreDNS — domain name → Service IP mapping<br>
• <strong>CNI Plugin:</strong> Cilium (eBPF), Calico, Flannel — pod-to-pod networking across nodes<br><br>
<strong>তোমার DO সার্ভারে:</strong> Docker Compose = single-node। K8s = multi-node। যখন multi-node দরকার — K8s।
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔑 Kubernetes: Kubelet Architecture</text>
  <rect x="20" y="50" width="150" height="180" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="95" y="72" text-anchor="middle" fill="#67e8f9" font-size="8" font-weight="700">API Server</text>
  <text x="95" y="88" text-anchor="middle" fill="#7dd3fc" font-size="7">(brain)</text>
  <rect x="215" y="60" width="150" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="80" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Kubelet</text>
  <text x="290" y="95" text-anchor="middle" fill="#86efac" font-size="7">(faithful worker)</text>
  <rect x="400" y="50" width="160" height="60" rx="8" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="480" y="72" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">Container Runtime</text>
  <text x="480" y="88" text-anchor="middle" fill="#fde68a" font-size="7">containerd / Docker</text>
  <line x1="170" y1="75" x2="215" y2="80" stroke="#475569" stroke-width="1.5" marker-end="url(#arrK1)"/>
  <text x="190" y="70" text-anchor="middle" fill="#94a3b8" font-size="6">orders</text>
  <line x1="365" y1="85" x2="400" y2="80" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrK1)"/>
  <text x="383" y="73" text-anchor="middle" fill="#4ade80" font-size="6">start/stop</text>
  <rect x="215" y="130" width="150" height="40" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="290" y="155" text-anchor="middle" fill="#c084fc" font-size="7">Pod (1+ containers)</text>
  <rect x="215" y="180" width="150" height="35" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="290" y="202" text-anchor="middle" fill="#fca5a5" font-size="7">kube-proxy (networking)</text>
  <line x1="290" y1="110" x2="290" y2="130" stroke="#475569" stroke-width="1"/>
  <defs><marker id="arrK1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: Kubelet — API Server থেকে নির্দেশ নেয়, Container Runtime চালায়।</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> Kubelet হলো সবচেয়ে বিশ্বস্ত কর্মচারী — কখনো নিজে থেকে সিদ্ধান্ত নেয় না, শুধু নির্দেশ পালন করে। কিন্তু তার না থাকলে cluster চলে না — কেউ container চালাবে না।<br>
<em>The kubelet is the most faithful employee — never decides on its own, just follows orders. But without it, the cluster can't run — no one starts containers.</em>
</div>`,
  senior: {
    title: "Worker Node প্র্যাকটিস গাইড",
    body: `<p><strong>১. Pod debugging:</strong> <code>kubectl describe pod &lt;name&gt;</code> — events section-এ দেখো কী ভুল হয়েছে।</p>
<p><strong>২. kube-proxy বনাম Cilium:</strong> বড় cluster-ে iptables rules অনেক বড় — Cilium eBPF O(1) lookup দেয়।</p>
<p><strong>৩. Resource requests/limits:</strong> সব pod-এ CPU/memory request আর limit দাও — নাহলে একটা pod সব রিসোর্স নিয়ে নেবে।</p>
<p><strong>৪. Practical:</strong> তোমার DO Docker Compose setup-এ এখনো kubelet নেই। যখন K8s এ যাবে — k3s দিয়ে শুরু করো।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 4 — The Blueprint Ledger (Terraform IaC)
// ═══════════════════════════════════════════
doors.push({
  num: 4,
  icon: "📋",
  color: "#7c3aed",
  name: "নকশার খাতা",
  subtitle: "Terraform — Infrastructure as Code & State Management",
  tech: "Terraform IaC, Declarative Configuration, State Management, Remote Backends",
  spirit: "মিজান — পরিমাপ, হিসাব রাখা, যাতে কিছু হারিয়ে না যায়",
  secret: "Terraform state শুধু একটা log নয় — এটা একটা database। আর সেই database-এ plaintext secrets থাকে। Git-এ push করলে = permanent breach।",
  recall: {
    q: "Terraform state file কেন কখনো git-এ commit করা উচিত নয়?",
    qen: "Why should Terraform state files never be committed to git?",
    a: "কারণ state file-এ সব resource attribute plaintext JSON-এ থাকে — database password, API key, TLS cert। Git history permanent — একবার push করলে চিরকাল সবার কাছে exposed।",
    aen: "Because the state file stores all resource attributes in plaintext JSON — database passwords, API keys, TLS certs. Git history is permanent — once pushed, secrets are exposed forever."
  },
  story: `<p class="scene-setting">তুমি একজন ইন্টেরিয়র ডিজাইনার নিয়োগ করেছ। সে একটা নকশা এনেছে — "৩টা চেয়ার, ১টা সোফা।" কিন্তু সে প্রতিবার নতুন করে সব আসবাবপত্র অর্ডার করে না। সে একটা খাতা রাখে — কী কী ইতিমধ্যে পৌঁছেছে। নকশায় ৩টা চেয়ার দরকার, খাতায় দেখে ২টা আছে — তাই মাত্র ১টা অর্ডার করে। এই খাতাই Terraform state। এটা ছাড়া Terraform জানে না কী আছে আর কী নেই।</p>
<p class="scene-setting en">You hire an interior designer. They bring a blueprint — "3 chairs, 1 sofa." But they don't re-order everything each time. They keep a ledger — what has already been delivered. Blueprint requires 3 chairs, ledger shows 2 exist — order just 1 more. This ledger is Terraform state. Without it, Terraform doesn't know what exists and what doesn't.</p>

<div class="dialogue"><strong>হ্যাশিকর্প ইঞ্জিনিয়ার:</strong> ২০১৪ সালে Terraform আবিষ্কার হয়েছিল। মূল ধারণা — infrastructure কে কোড দিয়ে বর্ণনা করো। তুমি বলো "আমি একটা DO droplet চাই, 2GB RAM।" Terraform দেখে তার state — এরকম আছে কি না। না থাকলে তৈরি করে। থাকলে কিছু করে না। এটাই declarative model — WHAT বলো, HOW নয়।</div>
<div class="dialogue en"><strong>HashiCorp Engineer:</strong> Terraform was created in 2014. The core idea — describe infrastructure as code. You say "I want a DO droplet, 2GB RAM." Terraform checks its state — does this exist? If not, creates it. If yes, does nothing. This is the declarative model — you say WHAT, not HOW.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Rollback Plan:</strong> Deployed broken code — 4-hour downtime. Fix: blue-green deployment.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arr3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker></defs>
  <!-- Terraform Code -->
  <rect x="20" y="20" width="150" height="80" rx="10" fill="#1e293b" stroke="#7c3aed" stroke-width="2"/>
  <text x="95" y="45" text-anchor="middle" fill="#c4b5fd" font-size="12" font-weight="700">📋 Terraform Code</text>
  <text x="95" y="62" text-anchor="middle" fill="#a78bfa" font-size="9">"3 droplets"</text>
  <text x="95" y="76" text-anchor="middle" fill="#a78bfa" font-size="9">"1 load balancer"</text>
  <text x="95" y="90" text-anchor="middle" fill="#a78bfa" font-size="9">(declarative: WHAT)</text>

  <!-- State File -->
  <rect x="215" y="20" width="150" height="80" rx="10" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
  <text x="290" y="45" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="700">🔑 State File</text>
  <text x="290" y="62" text-anchor="middle" fill="#f87171" font-size="9">"2 droplets exist"</text>
  <text x="290" y="76" text-anchor="middle" fill="#f87171" font-size="9">⚠️ plaintext secrets!</text>
  <text x="290" y="90" text-anchor="middle" fill="#f87171" font-size="9">(inventory: WHAT EXISTS)</text>

  <!-- Plan -->
  <rect x="410" y="20" width="150" height="80" rx="10" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="485" y="45" text-anchor="middle" fill="#86efac" font-size="12" font-weight="700">✅ Plan</text>
  <text x="485" y="62" text-anchor="middle" fill="#4ade80" font-size="9">"create 1 more"</text>
  <text x="485" y="76" text-anchor="middle" fill="#4ade80" font-size="9">(diff: WHAT CHANGED)</text>

  <!-- Arrows -->
  <line x1="170" y1="60" x2="215" y2="60" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr3)"/>
  <line x1="365" y1="60" x2="410" y2="60" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr3)"/>

  <!-- Real World -->
  <rect x="150" y="140" width="280" height="120" rx="12" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="290" y="165" text-anchor="middle" fill="#7dd3fc" font-size="14" font-weight="900">🌍 Real Cloud (DigitalOcean)</text>
  <rect x="170" y="180" width="80" height="30" rx="5" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="210" y="200" text-anchor="middle" fill="#bae6fd" font-size="10">Droplet 1</text>
  <rect x="260" y="180" width="80" height="30" rx="5" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="300" y="200" text-anchor="middle" fill="#bae6fd" font-size="10">Droplet 2</text>
  <rect x="350" y="180" width="80" height="30" rx="5" fill="#064e3b" stroke="#22c55e" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="390" y="200" text-anchor="middle" fill="#4ade80" font-size="10">Droplet 3 ✨</text>
  <text x="290" y="235" text-anchor="middle" fill="#38bdf8" font-size="9" font-style="italic">State maps code → real resources. Apply = execute plan.</text>

  <line x1="290" y1="100" x2="290" y2="140" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr3)"/>
  <text x="305" y="122" fill="#94a3b8" font-size="9">terraform apply</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Terraform = Code (WHAT) + State (WHAT EXISTS) → Plan (DIFF) → Apply (EXECUTE)। State ছাড়া Terraform জানে না কী আছে।</div>

<div class="code-block">
<strong>Terraform Workflow:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
terraform init    → providers download, backend setup
terraform plan    → state vs config compare → "এই পরিবর্তনগুলো দরকার"
terraform apply   → পরিবর্তনগুলো execute
terraform destroy → সব resource delete
</pre>

<strong>⚠️ State File এর বিপদ:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
terraform.tfstate:
{
  "resources": [{
    "type": "digitalocean_droplet",
    "instances": [{
      "attributes": {
        "id": "123456789",
        "name": "ledgerpilot-prod",
        "user_data": "DB_PASSWORD=super_secret_123!"  ← PLAINTEXT!
      }
    }]
  }]
}
</pre>
<strong>এই ফাইলটা git-এ গেলে — DB password সবাই দেখতে পাবে। Git history মুছা যায় না।</strong>
</div>

<div class="dialogue"><strong>তুমি:</strong> তাহলে state কোথায় রাখব?</div>
<div class="dialogue en"><strong>You:</strong> So where should I keep state?</div>

<div class="dialogue"><strong>ইঞ্জিনিয়ার:</strong> Remote backend এ — DO Spaces (S3-compatible), AWS S3, Google Cloud Storage। সাথে state locking। কেন locking? দুই engineer একসাথে <code>terraform apply</code> চালালে — একজনের পরিবর্তন আরেকজনের overwrite করবে। State corrupted। Infrastructure ভাঙবে।</div>
<div class="dialogue en"><strong>Engineer:</strong> Remote backend — DO Spaces (S3-compatible), AWS S3, Google Cloud Storage. With state locking. Why locking? Two engineers running <code>terraform apply</code> simultaneously — one overwrites the other's changes. State corrupted. Infrastructure breaks.</div>

<div class="code-block">
<strong>Remote Backend Setup (DO Spaces):</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
terraform {
  backend "s3" {
    endpoints = { s3 = "https://nyc3.digitaloceanspaces.com" }
    bucket   = "ledgerpilot-tfstate"
    key      = "prod/terraform.tfstate"
    region   = "us-east-1"
    use_lockfile = true  # TF v5 native locking!
  }
}
</pre>
<strong>সর্বোত্তম অনুশীলন:</strong>
✅ Remote backend (S3/DO Spaces)
✅ State locking (use_lockfile = true)
✅ Versioning on bucket (rollback if corrupted)
✅ Encryption at rest (AES256)
✅ prevent_destroy = true on critical resources
❌ কখনো .tfstate git-এ commit করবে না
❌ কখনো local state team-এ ব্যবহার করবে না
</div>

<div class="verse">
<strong>Terraform State = Database:</strong><br>
<a href="../databases/index.html" style="color:var(--accent);font-size:.85rem">← Book 39 (Databases) — ACID, locking, consistency</a><br>
State file = একটা database যেটা infrastructure track করে।<br>
• ACID properties দরকার (Atomic, Consistent, Isolated, Durable)<br>
• Locking দরকার (concurrent write prevent)<br>
• Backup দরকার (versioning)<br>
• Encryption দরকার (secrets protection)<br>
<strong>তোমার DO সেটআপ:</strong> এখনো local state? দ্রুত DO Spaces-এ মাইগ্রেট করো।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> Terraform state শুধু একটা log নয় — এটা একটা plaintext secrets database। Git-এ গেলে সব password, key, cert permanently exposed। Remote backend + locking = বাধ্যতামূলক।<br>
<em>Terraform state isn't just a log — it's a plaintext secrets database. Git push = all passwords, keys, certs permanently exposed. Remote backend + locking = mandatory.</em>
</div>`,
  senior: {
    title: "Terraform প্র্যাকটিস গাইড",
    body: `<p><strong>১. .gitignore:</strong> <code>*.tfstate</code>, <code>*.tfstate.*</code>, <code>.terraform/</code> — অবশ্যই।</p>
<p><strong>২. Workspace separation:</strong> dev/staging/prod — আলাদা state file।</p>
<p><strong>৩. Import existing:</strong> <code>terraform import</code> দিয়ে manually-created resources কে Terraform-এ আনো।</p>
<p><strong>৪. Practical LedgerPilot:</strong> তোমার DO droplet, Spaces, DNS — সব Terraform দিয়ে manage করো। Manual console click নয়।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 5 — The Three Pillars of Sight (Observability)
// ═══════════════════════════════════════════
doors.push({
  num: 5,
  icon: "👁️",
  color: "#059669",
  name: "দৃষ্টির তিন স্তম্ভ",
  subtitle: "Observability — Metrics, Logs, Traces & OpenTelemetry",
  tech: "Prometheus, Grafana, OpenTelemetry, W3C Trace Context, Distributed Tracing",
  spirit: "বসর — রাতের দৃষ্টি, যা অন্ধকারেও দেখতে পায়",
  secret: "Monitoring বলে IF সমস্যা আছে। Observability বলে WHERE আর WHY। পার্থক্য? Context propagation।",
  recall: {
    q: "Monitoring আর Observability এর মূল পার্থক্য কী?",
    qen: "What is the key difference between monitoring and observability?",
    a: "Monitoring = metrics দিয়ে শুধু IF জানায় (e.g., error rate বেশি)। Observability = metrics + logs + traces একটা shared context দিয়ে যুক্ত — WHERE (trace) আর WHY (log) জানায়। OpenTelemetry এই context propagation enable করে।",
    aen: "Monitoring = metrics tell you IF there's a problem. Observability = metrics + logs + traces linked by shared context — tells you WHERE (trace) and WHY (log). OpenTelemetry enables this context propagation."
  },
  story: `<p class="scene-setting">তুমি একটা হাসপাতালে এসেছ। একজন রোগী এসেছে — কিন্তু কী সমস্যা কেউ জানে না। প্রথম ধাপ — vital signs দেখো (heart rate, blood pressure)। এটাই metrics। বলে IF সমস্যা আছে। কিন্তু কোথায়? রোগীর ID ব্রেসলেট দেখো — সে ER থেকে X-Ray এ গেছে, তারপর Surgery তে। এটাই trace। বলে WHERE। কেন? সার্জনের operation note পড়ো। এটাই log। বলে WHY।</p>
<p class="scene-setting en">You arrive at a hospital. A patient comes in — but no one knows what's wrong. First step — check vital signs (heart rate, blood pressure). These are metrics. They tell IF there's a problem. But where? Check the patient's ID bracelet — they went from ER to X-Ray to Surgery. This is a trace. It tells WHERE. Why? Read the surgeon's notes. These are logs. They tell WHY.</p>

<div class="dialogue"><strong>অবজারভাবিলিটি ইঞ্জিনিয়ার:</strong> Monitoring আর observability এক নয়। Prometheus দিয়ে তুমি metric scrape করো — "checkout service-এ error rate ৫%!" কিন্তু কেন? কোথায়? তোমাকে Jaeger এ গিয়ে trace খুঁজতে হবে, Loki তে গিয়ে log খুঁজতে হবে — সব manual correlation। Observability এই তিনটাকে এক shared context দিয়ে যুক্ত করে। OpenTelemetry এই context propagate করে — W3C Trace Context header দিয়ে।</div>
<div class="dialogue en"><strong>Observability engineer:</strong> Monitoring and observability aren't the same. With Prometheus you scrape metrics — "checkout service has 5% error rate!" But why? Where? You need to go to Jaeger for traces, Loki for logs — all manual correlation. Observability links these three with a shared context. OpenTelemetry propagates this context — via W3C Trace Context header.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Container OOM Killed:</strong> No memory limit — OOM killed. Fix: set memory limits in K8s.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arr4" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker></defs>
  <!-- User Request -->
  <rect x="210" y="10" width="160" height="35" rx="8" fill="#1e40af" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="290" y="32" text-anchor="middle" fill="#dbeafe" font-size="12" font-weight="700">👤 User Request (trace-id: abc123)</text>

  <!-- Service chain -->
  <rect x="20" y="70" width="120" height="45" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="80" y="90" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="600">Frontend</text>
  <text x="80" y="105" text-anchor="middle" fill="#38bdf8" font-size="9">2s</text>

  <rect x="170" y="70" width="120" height="45" rx="8" fill="#581c87" stroke="#a855f7" stroke-width="1.5"/>
  <text x="230" y="90" text-anchor="middle" fill="#d8b4fe" font-size="11" font-weight="600">Cart Service</text>
  <text x="230" y="105" text-anchor="middle" fill="#c084fc" font-size="9">5s</text>

  <rect x="320" y="70" width="120" height="45" rx="8" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
  <text x="380" y="90" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="600">Payment Svc</text>
  <text x="380" y="105" text-anchor="middle" fill="#fb923c" font-size="9">38s ⚠️</text>

  <rect x="450" y="70" width="120" height="45" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="510" y="90" text-anchor="middle" fill="#86efac" font-size="11" font-weight="600">DB Query</text>
  <text x="510" y="105" text-anchor="middle" fill="#4ade80" font-size="9">5s</text>

  <line x1="140" y1="92" x2="170" y2="92" stroke="#475569" stroke-width="1"/>
  <line x1="290" y1="92" x2="320" y2="92" stroke="#475569" stroke-width="1"/>
  <line x1="440" y1="92" x2="450" y2="92" stroke="#475569" stroke-width="1"/>
  <line x1="290" y1="45" x2="80" y2="70" stroke="#475569" stroke-width="1" stroke-dasharray="2,2"/>

  <!-- Three Pillars -->
  <rect x="30" y="150" width="160" height="130" rx="10" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="110" y="172" text-anchor="middle" fill="#86efac" font-size="13" font-weight="900">📊 Metrics</text>
  <text x="110" y="192" text-anchor="middle" fill="#4ade80" font-size="10">"IF problem?"</text>
  <text x="110" y="210" text-anchor="middle" fill="#bbf7d0" font-size="9">error rate: 5%</text>
  <text x="110" y="225" text-anchor="middle" fill="#bbf7d0" font-size="9">p95 latency: 45s</text>
  <text x="110" y="245" text-anchor="middle" fill="#86efac" font-size="9" font-style="italic">Prometheus</text>
  <text x="110" y="262" text-anchor="middle" fill="#86efac" font-size="9" font-style="italic">🫀 Vital signs</text>

  <rect x="210" y="150" width="160" height="130" rx="10" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
  <text x="290" y="172" text-anchor="middle" fill="#c7d2fe" font-size="13" font-weight="900">🔍 Traces</text>
  <text x="290" y="192" text-anchor="middle" fill="#a5b4fc" font-size="10">"WHERE?"</text>
  <text x="290" y="210" text-anchor="middle" fill="#a5b4fc" font-size="9">Payment Svc: 38s</text>
  <text x="290" y="225" text-anchor="middle" fill="#a5b4fc" font-size="9">trace-id links all</text>
  <text x="290" y="245" text-anchor="middle" fill="#c7d2fe" font-size="9" font-style="italic">Jaeger / OTel</text>
  <text x="290" y="262" text-anchor="middle" fill="#c7d2fe" font-size="9" font-style="italic">🏥 ID bracelet</text>

  <rect x="390" y="150" width="160" height="130" rx="10" fill="#7c2d12" stroke="#f97316" stroke-width="2"/>
  <text x="470" y="172" text-anchor="middle" fill="#fdba74" font-size="13" font-weight="900">📝 Logs</text>
  <text x="470" y="192" text-anchor="middle" fill="#fb923c" font-size="10">"WHY?"</text>
  <text x="470" y="210" text-anchor="middle" fill="#fed7aa" font-size="9">"DB connection</text>
  <text x="470" y="225" text-anchor="middle" fill="#fed7aa" font-size="9">timeout at line 42"</text>
  <text x="470" y="245" text-anchor="middle" fill="#fdba74" font-size="9" font-style="italic">Loki / ELK</text>
  <text x="470" y="262" text-anchor="middle" fill="#fdba74" font-size="9" font-style="italic">📋 Operation notes</text>

  <!-- Shared context line -->
  <line x1="110" y1="150" x2="110" y2="130" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="290" y1="150" x2="290" y2="130" stroke="#818cf8" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="470" y1="150" x2="470" y2="130" stroke="#f97316" stroke-width="1" stroke-dasharray="2,2"/>
  <rect x="190" y="120" width="200" height="22" rx="5" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="290" y="135" text-anchor="middle" fill="#94a3b8" font-size="9">trace-id: abc123 links all 3 pillars</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Observability-র তিন স্তম্ভ — Metrics (IF), Traces (WHERE), Logs (WHY)। OpenTelemetry trace-id সব একসাথে যুক্ত করে।</div>

<div class="code-block">
<strong>দৃষ্টির তিন স্তম্ভ (Three Pillars of Observability):</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Pillar</th>
<th style="text-align:left;padding:.3rem">প্রশ্ন</th>
<th style="text-align:left;padding:.3rem">Tool</th>
<th style="text-align:left;padding:.3rem">উপমা</th>
</tr>
<tr><td style="padding:.2rem"><strong>Metrics</strong></td><td>IF — সমস্যা আছে?</td><td>Prometheus</td><td>🫀 Vital signs</td></tr>
<tr><td style="padding:.2rem"><strong>Logs</strong></td><td>WHY — কেন ব্যর্থ?</td><td>Loki/ELK</td><td>📝 Operation notes</td></tr>
<tr><td style="padding:.2rem"><strong>Traces</strong></td><td>WHERE — কোথায় দেরি?</td><td>Jaeger/Tempo</td><td>🏥 ID bracelet journey</td></tr>
</table>

<br><strong>OpenTelemetry Context Propagation:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
User → Frontend (trace-id: abc123)
  → Cart Service (trace-id: abc123, span-id: 001)
    → Payment Service (trace-id: abc123, span-id: 002)
      → DB Query (trace-id: abc123, span-id: 003) ← 38s delay!
    ← Payment response
  ← Cart response
← Frontend response (total: 45s)

সব linked by trace-id: abc123
Metric spike, log entry, trace span — সব same context!
</pre>
</div>

<div class="dialogue"><strong>তুমি:</strong> মানে Prometheus একা যথেষ্ট নয়?</div>
<div class="dialogue en"><strong>You:</strong> You mean Prometheus alone isn't enough?</div>

<div class="dialogue"><strong>ইঞ্জিনিয়ার:</strong> Prometheus দারুণ — metrics-এর জন্য। কিন্তু business SLO এর জন্য যথেষ্ট নয়। "৯৫% ইউজার যারা cart-এ item add করে তারা ২০ সেকেন্ডে শেষ করবে" — এই SLO মাপতে তোমাকে পুরো user journey track করতে হবে। Prometheus শুধু individual service metric দেয়। OpenTelemetry পুরো journey এক trace context দিয়ে যুক্ত করে।</div>
<div class="dialogue en"><strong>Engineer:</strong> Prometheus is great — for metrics. But insufficient for business SLOs. "95% of users who add items to cart complete checkout within 20 seconds" — to measure this you need to track the complete user journey. Prometheus gives individual service metrics. OpenTelemetry links the entire journey with one trace context.</div>

<div class="verse">
<strong>তোমার LedgerPilot-এর জন্য:</strong><br>
• <strong>Metrics:</strong> Django response time, Gunicorn worker count, MySQL query latency<br>
• <strong>Logs:</strong> Gunicorn access log, Django error log, Nginx log<br>
• <strong>Traces:</strong> Request → Django view → MySQL query → Response (টাইমিং সহ)<br><br>
<strong>SLO উদাহরণ:</strong><br>
LedgerPilot: 99.9% transaction API গুলো < 200ms p95 latency সহ respond করবে।<br>
Ipractus: 99.5% API call গুলো < 500ms p95 সহ respond করবে।<br><br>
<a href="../llmops/index.html" style="color:var(--accent);font-size:.85rem">← Book 14 (LLMOps) — ML model monitoring</a>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> Monitoring বলে IF সমস্যা আছে। Observability বলে WHERE আর WHY। পার্থক্য? Context propagation — OpenTelemetry এক trace context সব metric, log, trace কে যুক্ত করে।<br>
<em>Monitoring tells IF there's a problem. Observability tells WHERE and WHY. The difference? Context propagation — OpenTelemetry links all metrics, logs, traces with one trace context.</em>
</div>`,
  senior: {
    title: "Observability প্র্যাকটিস গাইড",
    body: `<p><strong>১. Start with metrics:</strong> Prometheus + Grafana দিয়ে শুরু করো — Django middleware থেকে request timing capture করো।</p>
<p><strong>২. Add tracing:</strong> OpenTelemetry SDK Django-তে install করো — request → DB query trace দেখো।</p>
<p><strong>৩. p95 not average:</strong> Average latency মিথ্যা বলে — ১টা 30s request আর ৯৯টা 100ms request = average 400ms। p95 = 100ms (সত্য)।</p>
<p><strong>৪. SLO first:</strong> tool এর আগে SLO define করো — "কী তোমার user-এর জন্য acceptable?" সেটা থেকে metric derive করো।</p>`
  }
});
