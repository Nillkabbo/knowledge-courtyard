// ════════════════════════════════════════
// কম্পিউটার সায়েন্সের মহাসমুদ্র — DOORS 6-10
// Sea 2: Systems (D6-D7) · Sea 3: Security (D8-D9) · Sea 4 start: Data (D10)
// ════════════════════════════════════════

// ══ DOOR 6: OPERATING SYSTEMS & NETWORKS ══
doors.push({
  num:6, icon:"🖥️", color:"#52c41a", name:"কার্নেলের কক্ষ",
  subtitle:"The Kernel Chamber", tech:"Operating Systems & Networks",
  spirit:"তাদবীর — ব্যবস্থাপনা, সুশৃঙ্খল পরিচালনা",
  secret:"OS ও networks হলো distributed systems-এর ভিত্তির ভিত্তি — scheduling, memory, kernel, protocols। প্রতিটা container, প্রতিটা TCP connection এখান থেকে চলে। niche, কম প্রতিযোগিতা, কিন্তু সবচেয়ে গভীর। Rust kernel, eBPF, RDMA networks এখন গবেষণার frontier। যে এখানে depth দেয়, সে যেকোনো system বোঝে।",
  recall:{
    q:"নাদিয়া কেন বললেন একটা শহরের সবচেয়ে গুরুত্বপূর্ণ কাজটা কেউ দেখে না?",
    qen:"Why did Nadia say a city's most important work is invisible?",
    a:"কারণ যে পানির লাইন, বিদ্যুৎ গ্রিড, ড্রেন চলে — সে কাজ কেউ দেখে না, যতক্ষণ না ভাঙে। OS ও network তেমনি — kernel, scheduler, TCP সব চাকর দেয়, কিন্তু invisible। যে এগুলো বোঝে সে শহরের ভিত্তি বোঝে। যে শুধু building দেখে, সে ভিত্তি ভাঙলে অবাক হয়।",
    aen:"Because the water line, power grid, drains — that work no one sees, until it breaks. OS and network are like that — kernel, scheduler, TCP serve everything, but invisibly. One who understands these understands the city's foundation. One who sees only buildings is surprised when the foundation cracks."
  },
  story:`
<p class="scene-setting">ষষ্ঠ দরজা। মারিয়ার স্তম্ভ থেকে তুমি একটা বিশাল যন্ত্রকক্ষে — দেয়ালে সারি সারি চাকার মতো গিয়ার ঘুরছে, প্রতিটা ছোট ছোট কাজ করছে। কিছু গিয়ার ভাঙা, কিছু ঝকঝক করছে। মেঝেতে তারের জাল — দেয়াল থেকে দেয়ালে ছড়ানো, প্রতিটা সংকেত বহন করছে। কক্ষের মাঝখানে হাত দিয়ে একটা গিয়ার থামাচ্ছেন নাদিয়া — চশমা নাকে, হাতে একটা ছোট রিয়েল-টাইম মনিটর, চোখে প্রকৌশলীর নিপুণতা। মারিয়া পেছনে ইশারায় বলছেন — এটা তাঁর ভিত্তির সবচেয়ে গভীর স্তর। গিয়ারের ঘর্ষণ শব্দ, তারের গন্ধ, মনিটরের ঝিলিক।</p>
<p class="scene-setting en">The sixth door. From Maria's pillars you enter a vast machine room — walls lined with gear-like wheels spinning, each doing small work. Some gears broken, some gleaming. On the floor a web of wires — wall to wall, each carrying signals. At the center, Nadia stops a gear with her hand — glasses on nose, a small real-time monitor in hand, an engineer's precision in her eyes. Maria gestures from behind — this is the deepest layer of her foundation. The friction of gears, the smell of wires, the flicker of monitors.</p>

<div class="dialogue">মারিয়া বললেন, "আমি তোমাকে স্তম্ভ দেখালাম — distributed system। কিন্তু স্তম্ভ কী দিয়ে চলে? গিয়ার দিয়ে। যে গিয়ার চালায়, সে নাদিয়া।" নাদিয়া একটা গিয়ার দেখালেন। "এটা kernel — সবচেয়ে নিচের স্তর। CPU, memory, disk — সব এই গিয়ার সাজায়। এটা ভাঙলে পুরো স্তম্ভ থামে। আর এই তারগুলো —" তিনি তারের জাল দেখালেন, "— এটা network। প্রতিটা সংকেত এই তারে চলে। protocol না থাকলে স্তম্ভ একা।"</div>
<div class="dialogue en">Maria said, "I showed you the pillar — the distributed system. But what makes the pillar run? Gears. Nadia runs the gears." Nadia showed a gear. "This is the kernel — the lowest layer. CPU, memory, disk — this gear orchestrates all. If it breaks, the whole pillar stops. And these wires —" she showed the wire-web, "— this is the network. Every signal runs on these wires. Without protocols, the pillar is alone."</div>

<div class="diagram">
  <div class="diag-title">OS স্তর — Hardware থেকে App পর্যন্ত</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowLeaf6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#52c41a"/></marker>
    </defs>
    <!-- stacked layers -->
    ${[ ['Apps','Browser, game, LLM serving','#3dd6c4',30], ['System calls','read(), fork(), socket()','#7dd3fc',70], ['KERNEL','scheduler · memory · FS · drivers','#52c41a',110], ['Hardware','CPU · RAM · disk · NIC','#9290a8',170] ].map((l,i)=>`<rect class="${i===2?'cell-good':'cell'}" x="120" y="${l[3]}" width="320" height="32" rx="6" style="${i===2?'stroke:#52c41a':''}"/><text class="lbl-sm" x="280" y="${l[3]+14}" fill="${l[2]}" style="${i===2?'font-weight:700':''}">${l[0]}</text><text class="lbl-sm" x="280" y="${l[3]+26}" fill="#9290a8" style="font-size:9px">${l[1]}</text>`).join('')}
    <!-- network connects kernel to outside -->
    <text class="lbl-sm" x="60" y="120" fill="#ff6b35">NETWORK</text>
    <line class="edge" x1="120" y1="126" x2="60" y2="126" style="stroke:#ff6b35"/>
    <text class="lbl-sm" x="35" y="140" fill="#ff6b35" style="font-size:9px">TCP/IP</text>
    <text class="lbl-sm" x="500" y="120" fill="#b37feb">GPU/NIC</text>
    <line class="edge" x1="440" y1="126" x2="500" y2="126" style="stroke:#b37feb"/>
    <text class="lbl-sm" x="280" y="215" fill="#5e5c74">kernel = সব কাজের সঞ্চালক। এটা বদলালে সব পরিবর্তিত হয়।</text>
  </svg>
  <div class="diag-cap">kernel research = সবচেয়ে গভীর, সবচেয়ে কম ভিড়। Rust (memory-safe kernel), eBPF (programmable kernel) এখন frontier।</div>
</div>

<div class="code-block">Operating Systems & Networks — গবেষণার শাখাসমূহ:

১. OPERATING SYSTEMS (গভীরতম স্তর)
   - Scheduling: CFS, EEVDF, ML-based scheduling
   - Memory mgmt: virtual memory, MMU, hugepages, CXL memory
   - File systems: ZFS, copy-on-write, checksumming
   - eBPF: programmable, safe kernel extensions (🔥 hottest)

২. SYSTEMS FOR AI (🔥 AI era)
   - GPU scheduling, memory management for LLM training
   - Checkpoint/restart for long training runs
   - vGPU, MIG, RDMA integration

৩. NETWORKS
   - Datacenter networking: RDMA/Roxy, congestion control (Swift, HPCC)
   - Programmable networks: P4, SmartNIC, DPU offload
   - Low-latency RPC, transport (QUIC, Pony Express)
   - 5G/6G, mobile/satellite networks

৪. ARCHITECTURE & SYSTEMS (ASIC-এ সাথে)
   - Hardware/systems co-design, accelerator OS
   - CXL, disaggregated memory, near-data processing
   - Confidential computing (TEE, SGX, SEV-SNP)

৫. SECURITY ADJACENT (Door 8/9 সাথে)
   - Kernel hardening, sandboxing, capability systems
   - Network security, DDoS, traffic analysis

৬. EDGE & IOT
   - Edge OS, TinyML runtime, real-time systems</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🖥️ OS / Kernel</td><td>Scheduling, memory, FS, eBPF, Rust kernel</td><td>SOSP, OSDI, ASPLOS, EuroSys</td></tr>
<tr><td class="hl">🌐 Networks</td><td>RDMA, P4, congestion, low-latency RPC</td><td>SIGCOMM, NSDI, INFOCOM</td></tr>
<tr><td class="hl">🔥 AI Systems</td><td>GPU scheduling, training OS, RDMA ML</td><td>OSDI, ASPLOS, MLSys</td></tr>
<tr><td class="hl">🏗️ Architecture</td><td>CXL, accelerator OS, near-data, TEE</td><td>ASPLOS, ISCA, MICRO</td></tr>
<tr><td class="hl">📡 Mobile/Edge</td><td>5G/6G, edge OS, TinyML, real-time</td><td>MobiCom, MobiSys, SenSys</td></tr>
<tr><td class="hl">🔒 Security</td><td>Sandbox, kernel hardening, capability</td><td>S&amp;P, CCS, USENIX Sec.</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-৮%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">niche</div><div class="sc-label">সবচেয়ে কম ভিড় (গভীর কিন্তু)</div></div>
<div class="stat-card"><div class="sc-num">$১৬০-৩২০K</div><div class="sc-label">industry (GPU/NIC vendors, hyperscalers)</div></div>
<div class="stat-card"><div class="sc-num">🔥 eBPF</div><div class="sc-label">সবচেয়ে হট kernel innovation</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"OS গবেষণা 'মরা' — Linux হয়ে গেছে, আর কী করবে?" ভুল। eBPF (programmable kernel), Rust kernel (Microsoft, Google), GPU OS for AI training, CXL/disaggregated memory — সব এখন frontier। AI-এর সম্পূর্ণ GPU orchestration OS research। Linux হয়ে গেছে, kernel research নয়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"OS/kernel research এখন AI-কে সমর্থন করে নতুন রূপ নিচ্ছে — GPU scheduling, disaggregated memory, eBPF। networks-এ RDMA/P4/SmartNIC নতুন যুগ। niche, কিন্তু যে এখানে depth দেয় সে প্রতিটা system এর ভিত্তি বোঝে — এটা lifetime skill।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> eBPF everywhere (observability, security, networking — Cilium, Pixie), Rust kernel (Microsoft Azure, Google Android), GPU scheduling for LLM (MPS, MIG), CXL 3.0 (disaggregated memory pool), SmartNIC/DPU (NVIDIA BlueField), AI training congestion control।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ সবচেয়ে নিচের স্তর বুঝতে ভালোবাসো — how things really work · ✅ C/Rust ভালো লাগে · ✅ niche কম প্রতিযোগিতা চাও · ⚠️ কঠিন — hardware knowledge লাগে · 💡 eBPF = সবচেয়ে accessible entry (Linux Foundation training, ফ্রি)।</div></div>

<div class="dialogue">"OS ও networks হলো সব কাজের সবচেয়ে নিচের স্তর," নাদিয়া বললেন। "যে এখানে depth দেয়, সে প্রতিটা system বোঝে — distributed, cloud, AI, সব। কারণ সব কিছু এই kernel ও network-এর উপর চলে। এটা কঠিন, কিন্তু একবার শিখলে lifetime। AI framework বদলায়, cloud provider বদলায় — kernel ও TCP চিরকাল। eBPF দিয়ে এখন kernel-কে programmable করা যায় — এটা নতুন যুগ। এখানে যাও।"</div>
<div class="dialogue en">"OS and networks are the lowest layer of all work," Nadia said. "One who goes deep here understands every system — distributed, cloud, AI, all. Because everything runs on this kernel and network. It's hard, but once learned, it's for life. AI frameworks change, cloud providers change — kernel and TCP endure. eBPF now makes the kernel programmable — a new era. Go here."</div>

<div class="dialogue">তাদবীর — ব্যবস্থাপনা, সুশৃঙ্খল পরিচালনা। কুরআনে আল্লাহ বলেন: "তিনিই আসমান ও যমীনের সবকিছু সুব্যবস্থাপনা করেন।" (১৩:২)। প্রতিটা জিনিস এক নিয়মে চলে — সূর্য থেকে পরমাণু পর্যন্ত। OS ও network হলো কম্পিউটারের তাদবীর — সব resource সুব্যবস্থাপনা। kernel CPU ভাগ করে, memory সাজায়, disk চালায়। এটা আল্লাহর সৃষ্টিতে প্যাটার্ন — সবকিছু এক নিয়মে, সুব্যবস্থাপনায় চলে। যে OS বোঝে, সে বুঝতে পারে — ব্যবস্থাপনার গভীরতা কী।</div>
<div class="dialogue en">Tadbeer — management, orderly orchestration. Allah says: "He manages every affair in heaven and earth." (13:2). Everything runs by a rule — from sun to atom. OS and network are the computer's tadbeer — managing all resources. The kernel shares CPU, organizes memory, runs disk. This is a pattern in Allah's creation — everything in order, in management. One who understands OS, can grasp — the depth of management.</div>

<div class="secret-box">🖥️ OS & Networks: সব কাজের সবচেয়ে নিচের স্তর। niche কম ভিড়, lifetime skill। হট: eBPF, Rust kernel, GPU OS (AI), RDMA/P4/SmartNIC। গভীর কিন্তু একবার শিখলে সব system বোঝা যায়।</div>`,
  senior:{
    title:"OS/Networks PhD — Senior Path",
    body:`<p><strong>eBPF = সবচেয়ে accessible entry:</strong> Linux Foundation-এর eBPF training ফ্রি। Cilium, Pixie, bpftrace-এ contribution করো — এটা modern kernel research-এর প্রবেশদ্বার, এবং industry demand প্রচুর।</p><p><strong>Rust kernel:</strong> Microsoft (Azure), Google (Android Rust), Rust-for-Linux — এখন বিশাল। একটা Rust kernel module বা driver = দারুণ credential। memory safety research এখন হট।</p><p><strong>AI-aware OS:</strong> GPU scheduling, training checkpoint OS, RDMA — OSDI/ASPLOS-এ এখন এটাই dominant। AI workload কীভাবে OS পরিবর্তন করছে, সেটা research gold।</p><p><strong>Measurement first:</strong> systems research-এ একটা careful measurement paper (যেমন "আমরা production kernel trace analyze করে...") ভর্তির জন্য যথেষ্ট। NSDI/SIGCOMM measurement track দেখো।</p>`
  }
});

// ══ DOOR 7: MLSys (AI + SYSTEMS) (placeholder) ══
doors.push({
  num:7, icon:"🔥", color:"#52c41a", name:"MLSys-এর কারখানা",
  subtitle:"The MLSys Forge", tech:"ML Systems (AI + Systems) 🔥",
  spirit:"আল্লামা — যন্ত্র ও জ্ঞানের মিলন",
  secret:"MLSys = AI + Systems। Training infra, serving, GPU scheduling। সবচেয়ে হট area — AI-এর চেয়ে কম প্রতিযোগিতা।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ৭ — MLSys-এর কারখানা। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 7 — the MLSys Forge. Full deep dive coming soon.</p>`
});

// ══ DOOR 8: SYSTEMS SECURITY & CRYPTO (placeholder) ══
doors.push({
  num:8, icon:"🔐", color:"#ef4444", name:"দুর্গের তলদেশ",
  subtitle:"The Fortress Depths", tech:"Systems Security & Cryptography",
  spirit:"হিফয — রক্ষা, সুরক্ষা",
  secret:"Systems security (intrusion, malware, zero-days) + cryptography (post-quantum, ZK, MPC)।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ৮ — দুর্গের তলদেশ। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 8 — the Fortress Depths. Full deep dive coming soon.</p>`
});

// ══ DOOR 9: AI SECURITY & PRIVACY (placeholder) ══
doors.push({
  num:9, icon:"🤖", color:"#ef4444", name:"AI দুর্গ",
  subtitle:"The AI Fortress", tech:"AI Security & Privacy 🔥",
  spirit:"আমান — বিশ্বাস, গোপনীয়তা রক্ষা",
  secret:"AI security (adversarial, model stealing, LLM jailbreaks) + privacy (differential privacy, federated)। সবচেয়ে হট emerging area।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ৯ — AI দুর্গ। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 9 — the AI Fortress. Full deep dive coming soon.</p>`
});

// ══ DOOR 10: DATABASE SYSTEMS (placeholder) ══
doors.push({
  num:10, icon:"🗄️", color:"#fbbf24", name:"ডেটার খনি",
  subtitle:"The Data Mine", tech:"Database Systems",
  spirit:"কিতাব — রেকর্ড, লিখিত সংরক্ষণ",
  secret:"Database systems — query optimization, distributed DBs, HTAP, streaming। নতুন তেল।",
  recall:{q:"(প্লেসহোল্ডার)",qen:"(placeholder)",a:"পূর্ণ কন্টেন্ট শীঘ্রই।",aen:"Full content coming soon."},
  story:`<p class="scene-setting">দরজা ১০ — ডেটার খনি। পূর্ণ গভীর ডুব শীঘ্রই।</p><p class="scene-setting en">Door 10 — the Data Mine. Full deep dive coming soon.</p>`
});
