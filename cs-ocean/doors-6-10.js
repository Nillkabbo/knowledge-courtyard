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

// ══ DOOR 7: MLSys (AI + SYSTEMS) ══
doors.push({
  num:7, icon:"🔥", color:"#52c41a", name:"MLSys-এর কারখানা",
  subtitle:"The MLSys Forge", tech:"ML Systems (AI + Systems) 🔥",
  spirit:"জামেয়া — দুই জ্ঞানের মিলনভূমি",
  secret:"MLSys = AI + Systems — দুই জগতের মিলন। LLM কীভাবে ট্রেন হয় (২০৪৮ GPU, fault tolerance), কীভাবে সার্ভ হয় (KV cache, batching)। AI-এর চেয়ে কম প্রতিযোগিতা, কিন্তু AI-এর সাফল্য এখানে নির্ভর। তোমার developer background + AI interest = সোনার মিলন। এটি এখন সবচেয়ে হট crossover — এবং তোমার প্রোফাইলের জন্য সেরা primary পছন্দ।",
  recall:{
    q:"রাজু কেন বললেন কারখানা ছাড়া নকশা শুধু কাগজে থাকে?",
    qen:"Why did Raju say without a factory, a design stays on paper?",
    a:"কারণ একটা LLM নকশা (model) কাগজে চমৎকার, কিন্তু ট্রেন করতে হাজার GPU, মাসের পর মাস, fault tolerance লাগে। সেটা কারখানা — MLSys। যার কারখানা নেই, সে শুধু কল্পনা করে। যার আছে, সে বাস্তবে বানায়। DeepSeek-এর ২০৪৮-GPU training ছাড়া R1 হতো না। AI গবেষণা এখন MLSys-এর উপর দাঁড়িয়ে।",
    aen:"Because an LLM design (model) is beautiful on paper, but training needs thousands of GPUs, months, fault tolerance. That's the factory — MLSys. One without a factory only imagines. One with it, builds in reality. Without DeepSeek's 2048-GPU training, R1 wouldn't exist. AI research now stands on MLSys."
  },
  story:`
<p class="scene-setting">সপ্তম দরজা। নাদিয়ার যন্ত্রকক্ষ পেরিয়ে তুমি একটা বিশাল কারখানায় — কিন্তু সাধারণ নয়। কনভেয়রে চলছে না পণ্য, চলছে GPU — হাজার হাজার, ঝকঝকে, গরম। প্রতিটা GPU-তে একটা করে LLM-এর অংশ ট্রেন হচ্ছে। মাঝখানে দাঁড়িয়ে রাজু — সাদা কোট, হাতে একটা গ্লোবাল স্কিডিউলার, চোখে প্রকৌশলীর গর্ব ও শ্রম। মারিয়া পেছনে দাঁড়িয়ে আলেকজান্ডারের সাথে কথা বলছেন — দুই সমুদ্রের সীমানায় দাঁড়িয়ে এই কারখানা। GPU-র গরম বাতাস, পাখার গর্জন, তামার তারের ঝলক।</p>
<p class="scene-setting en">The seventh door. Past Nadia's machine room, you enter a vast factory — but not ordinary. The conveyor carries not goods, but GPUs — thousands of them, gleaming, hot. On each GPU a fragment of an LLM trains. In the center stands Raju — white coat, a global scheduler in hand, engineer's pride and labor in his eyes. Behind, Maria talks with Alexander — this factory stands at the boundary of two seas. Hot GPU air, the roar of fans, the flash of copper wire.</p>

<div class="dialogue">মারিয়া ও আলেকজান্ডার একসাথে বললেন। আলেকজান্ডার: "আমার AI সমুদ্র চায় — model।" মারিয়া: "আমার সিস্টেমস সমুদ্র চায় — কারখানা।" রাজু হাসলেন। "আমি দুইয়ের মিলন। MLSys।" তিনি একটা GPU দেখালেন। "এটা একটা ইঞ্জিন। কিন্তু একটা LLM ট্রেন করতে হাজার ইঞ্জিন লাগে, একসাথে, সমন্বিতভাবে। আমার কাজ হলো সেই সমন্বয় — scheduling, memory, communication। DeepSeek-R1 হাজার GPU-তে ট্রেন হয়েছে — এটা সম্ভব হয়েছে MLSys-এর জন্য।"</div>
<div class="dialogue en">Maria and Alexander spoke together. Alexander: "My AI sea wants — models." Maria: "My systems sea wants — factories." Raju smiled. "I'm the union of both. MLSys." He showed a GPU. "This is one engine. But training one LLM needs thousands of engines, together, coordinated. My job is that coordination — scheduling, memory, communication. DeepSeek-R1 trained on thousands of GPUs — possible because of MLSys."</div>

<div class="diagram">
  <div class="diag-title">LLM Training — হাজার GPU-তে Synchronized</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowLeaf7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#52c41a"/></marker>
      <marker id="arrowCyan7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#3dd6c4"/></marker>
    </defs>
    <text class="lbl-sm" x="280" y="22" fill="#7dd3fc">৪টি stage, প্রতিটায় অনেক GPU — pipeline + tensor parallel</text>
    <!-- 4 pipeline stages -->
    ${[0,1,2,3].map(i=>`<rect class="cell-good" x="${60+i*120}" y="55" width="100" height="50" rx="8"/><text class="lbl-sm" x="${110+i*120}" y="78" fill="#52c41a">stage ${i+1}</text><text class="lbl-sm" x="${110+i*120}" y="94" fill="#9290a8" style="font-size:9px">${[24,24,24,24][i]} GPUs</text>`).join('')}
    <!-- dataflow arrows between stages -->
    ${[0,1,2].map(i=>`<line class="edge-cyan" x1="${160+i*120}" y1="80" x2="${180+i*120}" y2="80" marker-end="url(#arrowCyan7)"/>`).join('')}
    <!-- allreduce ring among one stage's GPUs -->
    <text class="lbl-sm" x="110" y="135" fill="#ff6b35">all-reduce (gradient sync)</text>
    ${[0,1,2,3,4].map(i=>`<circle class="node-hot" cx="${70+i*20}" cy="150" r="7"/>`).join('')}
    ${[0,1,2,3].map(i=>`<line class="edge" x1="${77+i*20}" y1="150" x2="${83+i*20}" y2="150" style="stroke:#ff6b35"/>`).join('')}
    <text class="lbl-sm" x="280" y="180" fill="#5e5c74">NVLink/RDMA দিয়ে micro-batch flow + gradient sync — এটাই distributed training</text>
    <text class="lbl-sm" x="280" y="200" fill="#5e5c74">একটা GPU ভাঙলে checkpoint থেকে recover — fault tolerance (Maria-র উপহার)</text>
  </svg>
  <div class="diag-cap">LLM training = pipeline parallel (stages) × tensor parallel (within stage) × data parallel (replicas)। communication হলো bottleneck — RDMA/NVLink MLSys-এর জয়।</div>
</div>

<div class="code-block">MLSys — গবেষণার শাখাসমূহ (🔥 সবচেয়ে হট crossover):

১. TRAINING INFRASTRUCTURE (🔥)
   - Distributed training: data/pipeline/tensor parallel (Megatron, DeepSpeed)
   - Fault tolerance: checkpoint/restart for 1000+ GPU runs
   - Communication: NCCL, RDMA, all-reduce topology

২. SERVING & INFERENCE (🔥🔥 — Book 17 সাথে)
   - vLLM/PagedAttention, continuous batching, prefix caching
   - Speculative decoding, Medusa, quantization (GPTQ, AWQ, FP8)
   - Disaggregated prefill/decode, dist serving

৩. GPU SCHEDULING (🔥)
   - MPS/MIG, multi-tenant GPU, fair-share
   - Gang scheduling for distributed jobs
   - Spot/preemptible training

৪. COMPILERS & RUNTIME
   - XLA, Triton, TVM, torch.compile, kernel fusion
   - Custom kernels: FlashAttention, FlashInfer

৫. SYSTEMS FOR LLMs
   - Long-context memory mgmt, KV cache offload
   - MoE serving (expert routing, load balance)
   - Agent serving (Book 12 — multi-turn, tool use)

৬. ML FOR SYSTEMS (বিপরীত দিক)
   - ML for scheduling, caching, index tuning
   - Learned indexes, ML-driven congestion control</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🔥 Training</td><td>3D parallel, fault tolerance, RDMA</td><td>MLSys, OSDI, ASPLOS, NSDI</td></tr>
<tr><td class="hl">🔥🔥 Serving</td><td>vLLM, PagedAttention, speculative, quant</td><td>MLSys, OSDI, SOSP, EuroSys</td></tr>
<tr><td class="hl">🔥 GPU Sched</td><td>MPS/MIG, multi-tenant, gang sched</td><td>OSDI, ASPLOS, MLSys</td></tr>
<tr><td class="hl">⚡ Compilers</td><td>Triton, XLA, torch.compile, kernels</td><td>MLSys, CGO, PLDI</td></tr>
<tr><td class="hl">🧠 LLM Systems</td><td>Long ctx, MoE serving, agent runtime</td><td>MLSys, OSDI, SOSP</td></tr>
<tr><td class="hl">🤖 ML4Sys</td><td>Learned indexes, ML scheduling, caching</td><td>MLSys, SOSP, SIGMOD</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৩-৬%</div><div class="sc-label">গ্রহণের হার (AI-এর চেয়ে কম ভিড়!)</div></div>
<div class="stat-card"><div class="sc-num">🔥🔥🔥</div><div class="sc-label">সবচেয়ে হট crossover</div></div>
<div class="stat-card"><div class="sc-num">$২৫০-৫০০K</div><div class="sc-label">industry (OpenAI, Anthropic, Meta, NVIDIA)</div></div>
<div class="stat-card"><div class="sc-num">$৩B+</div><div class="sc-label">AI infra ফান্ডিং (DOE + industry)</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"MLSys মানে শুধু PyTorch ব্যবহার করা। এটা engineering, research নয়।" ভুল। PyTorch ব্যবহার = consumer। MLSys research = PyTorch-এর পেছনের কারখানা ডিজাইন করা — 3D parallelism, PagedAttention, FlashAttention। এগুলো সরাসরি research, OSDI/MLSys-এ publish হয়, আর AI গবেষণার সম্ভাবনা নির্ধারণ করে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"MLSys হলো AI-এর কারখানা। কোন model সম্ভব আর কোনটা নয় — সেটা MLSys নির্ধারণ করে। vLLM/PagedAttention ছাড়া LLM serving অসম্ভব শস্তা। FlashAttention ছাড়া long context অসম্ভব। AI-এর চেয়ে কম প্রতিযোগিতা, কিন্তু সবচেয়ে বেশি প্রভাব — কারণ সব AI গবেষণা এর উপর নির্ভর।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> vLLM/PagedAttention (SOSP'23) পুরো serving industry বদলেছে, DeepSeek-V3 (৬৭১B MoE) শস্তা training, FP8/INT4 quantization mainstream, speculative decoding (Medusa, EAGLE), disaggregated prefill/decode (Splitwise), দীর্ঘ-context (১M+ tokens)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅✅✅ হ্যাঁ — এটা তোমার প্রোফাইলের জন্য <strong>primary</strong> পছন্দ। developer background (LedgerPilot) + AI interest = সোনার মিলন। কম প্রতিযোগিতা (AI-এর চেয়ে), সবচেয়ে হট, AI-এর সাফল্য এখানে নির্ভর। ⚠️ GPU/CUDA শিখতে হবে — শুরুতে কঠিন, কিন্তু শেখা যায়।</div></div>

<div class="dialogue">"তোমার একটা বিশেষ সুবিধা আছে MLSys-এ," রাজু বললেন। "তুমি developer — backend, API, database জানো (LedgerPilot)। কিন্তু তুমি AI-ও বোঝো। এই দুইয়ের মিলন বিরল। pure AI গবেষক GPU স্কেলিং বোঝেন না, pure systems গবেষক model বোঝেন না। তুমি দুটোই পারো। MLSys-এ এটা সবচেয়ে কাঙ্ক্ষিত skill। vLLM-এর মতো project-এ contribution করো — এটা তোমার ক্যারিয়ার বদলে দেবে।"</div>
<div class="dialogue en">"You have a special advantage in MLSys," Raju said. "You're a developer — backend, API, database (LedgerPilot). But you also understand AI. This union is rare. Pure AI researchers don't get GPU scaling; pure systems researchers don't get models. You can do both. In MLSys this is the most sought-after skill. Contribute to a project like vLLM — it'll change your career."</div>

<div class="dialogue">জামেয়া — দুই জ্ঞানের মিলনভূমি। কুরআনে আল্লাহ বলেন: "তিনি তোমাদের এক আত্মা থেকে সৃষ্টি করেছেন।" (৪:১) — মিলন থেকে সৃষ্টি। প্রতিটা মহান কাজ দুইয়ের মিলনে — দুই নদীর সঙ্গমে ভরা নদী, দুই জ্ঞানের মিলনে নতুন জ্ঞান। MLSys হলো AI ও systems-এর মিলনভূমি — আর এই মিলন থেকেই আজকের সব LLM সম্ভব। যে মিলন করে, সে নতুন সৃষ্টি করে। যে শুধু এক জ্ঞানে থাকে, সে একা। গবেষক হলো স্রষ্টা — দুই জগতের মিলন ঘটায়।</div>
<div class="dialogue en">Jameya — the meeting ground of two knowledges. Allah says: "He created you from one soul." (4:1) — creation from union. Every great work is in the union of two — at the confluence of two rivers a fuller river, from the union of two knowledges a new knowledge. MLSys is the meeting ground of AI and systems — and from this union all today's LLMs are possible. One who unites, creates anew. One who stays in one knowledge, is alone. A researcher is a creator — bringing two worlds together.</div>

<div class="secret-box">🔥 MLSys: AI + Systems মিলন। সবচেয়ে হট crossover, AI-এর চেয়ে কম প্রতিযোগিতা (৩-৬%)। training infra, serving (vLLM/PagedAttention), GPU scheduling। তোমার developer+AI background = primary পছন্দ।</div>`,
  senior:{
    title:"MLSys PhD — তোমার সেরা পথ (Primary)",
    body:`<p><strong>এটা তোমার primary পছন্দ হওয়া উচিত:</strong> developer background + AI interest + AI-এর চেয়ে কম ভিড় = গাণিতিকভাবে সেরা। প্রতিটা top lab (Meta, OpenAI, Anthropic, NVIDIA, Google) MLSys গবেষক খুঁজছে।</p><p><strong>vLLM/SGLang-এ contribute করো:</strong> GitHub-এ open PR = সবচেয়ে শক্ত profile signal। একটা kernel optimization (FlashAttention-ভিত্তিক), একটা scheduling improvement — এতেই MLSys workshop paper।</p><p><strong>CUDA শিখো:</strong> NVIDIA-এর 'Programming Massively Parallel Processors' (Bkirk) + একটা custom CUDA kernel (FlashAttention-এর simplified version)। এটা প্রবেশের key। Triton (OpenAI) এখন সবচেয়ে hot intermediate।</p><p><strong>Re-implement একটা paper:</strong> PagedAttention বা Megatron-LM-এর simplified re-implementation GitHub-এ। MLSys ভর্তিতে এটা golden credential — দেখায় তুমি research-grade systems code লেখো।</p>`
  }
});

// ══ DOOR 8: SYSTEMS SECURITY & CRYPTO ══
doors.push({
  num:8, icon:"🔐", color:"#ef4444", name:"দুর্গের তলদেশ",
  subtitle:"The Fortress Depths", tech:"Systems Security & Cryptography",
  spirit:"হিফয — রক্ষা, সুরক্ষা, আমানত পালন",
  secret:"Systems security + cryptography হলো চিরকালীন — প্রতিটা নতুন প্রযুক্তিতে নতুন নিরাপত্তা সমস্যা। intrusion detection, malware, zero-days + cryptography (post-quantum, ZK, MPC)। মাঝারি প্রতিযোগিতা (৫-১০%), সরকারি (NSA/DARPA) + বেসরকারি উভয় ফান্ডিং। ভাঙা শেখো আগে, তারপর বানানো — red team থেকে blue team।",
  recall:{
    q:"ওমর কেন বললেন দুর্গ নির্মাতাকে আগে আক্রমণকারী হতে হয়?",
    qen:"Why did Omar say a fortress builder must first be an attacker?",
    a:"কারণ যে শুধু দেয়াল বানায় সে জানে না কোথায় ফাঁক। যে ভাঙে, সে জানে প্রতিটা ফাঁক। security গবেষণা হলো ভাঙার শিল্প — তারপর সেই জ্ঞানে দুর্গ মজবুত করা। red team (আক্রমণ) → blue team (প্রতিরক্ষা)। আক্রমণই সেরা প্রতিরক্ষা — কারণ প্রতিরক্ষক ভাঙার কল্পনা না করলে দুর্গ দুর্বল থাকে।",
    aen:"Because one who only builds walls doesn't know where the gaps are. One who breaks, knows every gap. Security research is the art of breaking — then using that knowledge to strengthen the fortress. Red team (attack) → blue team (defense). Attack is the best defense — because a defender who can't imagine breaking leaves the fortress weak."
  },
  story:`
<p class="scene-setting">অষ্টম দরজা। রাজুর কারখানা পেরিয়ে তুমি একটা পাহাড়ের চূড়ায় বিশাল দুর্গে — কিন্তু দেয়ালে ফাটল, কোথাও ইট খসে পড়েছে। দুর্গের ভেতরে বসে আছেন ওমর — কালো পোশাক, হাতে একটা লুকানো ছুরি এবং একটা দেয়ালের ব্লুপ্রিন্ট। তাঁর মুখে সতর্কতা, চোখে কৌশল। দুর্গের তলদেশে নেমে যাওয়া সুড়ঙ্গ — সেখানে পাথরের তালা, সিফার, এনক্রিপ্টেড স্ক্রল। পুরনো পাথরের গন্ধ, ধাতব অস্ত্রের ঝনঝন, দূরে নকশলের শব্দ।</p>
<p class="scene-setting en">The eighth door. Past Raju's factory, you reach a vast fortress atop a mountain — but cracked walls, bricks fallen. Inside sits Omar — black garb, a hidden dagger and a wall blueprint in hand. Caution on his face, strategy in his eyes. Tunnels descend beneath the fortress — there, stone locks, ciphers, encrypted scrolls. Smell of old stone, metallic clang of weapons, distant pickaxe sounds.</p>

<div class="dialogue">ওমর তোমাকে দেখলেন। "মারিয়া তোমাকে ভিত্তি দেখিয়েছেন, রাজু কারখানা। কিন্তু ভিত্তি নিরাপদ না হলে কিছুই কাজে লাগবে না।" তিনি দেয়ালের ফাটল দেখালেন। "এই ফাটল — একজন attacker এই ফাটল দিয়ে ঢুকবে। আমি জানি কারণ আমি নিজে ছিলাম attacker।" তিনি ছুরি ঘুরিয়ে দেখালেন কীভাবে ভাঙে। "আমি এখন দুর্গ বানাই — কিন্তু আক্রমণকারীর মন দিয়ে। যে শুধু বানায়, সে ফাঁক দেখে না। যে ভাঙে, সে প্রতিটা ফাঁক জানে।"</div>
<div class="dialogue en">Omar saw you. "Maria showed you the foundation, Raju the factory. But if the foundation isn't secure, nothing works." He showed the crack. "This crack — an attacker will enter through it. I know because I was an attacker myself." He twirled the dagger, showed how to break. "I now build fortresses — but with an attacker's mind. One who only builds doesn't see gaps. One who breaks, knows every gap."</div>

<div class="diagram">
  <div class="diag-title">Security-এর দুই মুখ — ভাঙা ও বানানো</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowFire8" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#ff6b35"/></marker>
      <marker id="arrowLeaf8" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#52c41a"/></marker>
    </defs>
    <text class="lbl-sm" x="140" y="30" fill="#ff6b35">RED TEAM — আক্রমণ</text>
    <text class="lbl-sm" x="420" y="30" fill="#52c41a">BLUE TEAM — প্রতিরক্ষা</text>
    <!-- Red side -->
    ${[ ['Exploit',60],['Malware',60],['Zero-day',60], ['Crypto-break',60] ].map((s,i)=>`<rect class="cell-hot" x="${30}" y="${50+i*32}" width="110" height="26" rx="5"/><text class="lbl-sm" x="${85}" y="${66+i*32}" fill="#ff6b35">${s[0]}</text>`).join('')}
    <!-- Blue side -->
    ${[ ['Patch',420],['EDR/AV',420],['Pen-test',420], ['PQ crypto',420] ].map((s,i)=>`<rect class="cell-good" x="${400}" y="${50+i*32}" width="120" height="26" rx="5"/><text class="lbl-sm" x="${460}" y="${66+i*32}" fill="#52c41a">${s[0]}</text>`).join('')}
    <!-- Arrow between: attack feeds defense -->
    <line class="edge-cyan" x1="150" y1="115" x2="390" y2="115" marker-end="url(#arrowLeaf8)"/>
    <text class="lbl-sm" x="270" y="108" fill="#3dd6c4">ভাঙা → শেখা → বানানো</text>
    <text class="lbl-sm" x="270" y="128" fill="#5e5c74" style="font-size:9px">প্রতিটা exploit একটা patch জন্ম দেয়</text>
    <text class="lbl-sm" x="280" y="200" fill="#5e5c74">responsible disclosure: vulnerability পেলে আগে কোম্পানিকে জানাও, সময় দাও, তারপর পেপার</text>
  </svg>
  <div class="diag-cap">security research একটা cycle — red team ভাঙে, সেই জ্ঞানে blue team বানায়। crypto-তেও তাই: cryptanalysis (ভাঙা) → new scheme (বানানো)। এটাই প্রতিটা secure system-এর পেছনের cycle।</div>
</div>

<div class="code-block">Systems Security & Crypto — গবেষণার শাখাসমূহ:

১. SYSTEMS SECURITY
   - Intrusion detection, EDR, malware analysis
   - Vulnerability discovery (fuzzing, symbolic execution)
   - Web/app security, IoT security, cloud security

২. CRYPTOGRAPHY (গণিত-নির্ভর)
   - Post-quantum crypto (lattice, code, hash-based — Door 18)
   - Zero-knowledge proofs (zk-SNARK/STARK)
   - Homomorphic encryption, MPC, TEE-based

৩. APPLIED CRYPTO
   - TLS, secure messaging (Signal protocol), e2e encryption
   - Blockchain/DLT, consensus security
   - Authentication, password hashing, biometric

৪. USABLE SECURITY (Door 12 সাথে)
   - Phishing, authentication UX, security tooling
   - Human factors in security

৫. NETWORK SECURITY
   - DDoS, traffic analysis, censorship resistance
   - Secure routing, BGP security, DNSSEC

৬. CRYPTO THEORY (Door 16 সাথে)
   - Provable security, reduction, game-based proofs
   - Lower bounds, assumptions</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🛡️ Systems Sec.</td><td>Intrusion, malware, fuzzing, web/cloud sec</td><td>S&amp;P, CCS, USENIX Sec., NDSS</td></tr>
<tr><td class="hl">🔐 Crypto</td><td>PQ, ZK, FHE, MPC, TEE</td><td>CRYPTO, EUROCRYPT, ASIACRYPT, CCS</td></tr>
<tr><td class="hl">📱 Applied</td><td>TLS, messaging, auth, blockchain sec</td><td>USENIX, CCS, PETS</td></tr>
<tr><td class="hl">👥 Usable Sec</td><td>Phishing, auth UX, human factors</td><td>SOUPS, USENIX, CHI</td></tr>
<tr><td class="hl">🌐 Network</td><td>DDoS, traffic analysis, censorship resist</td><td>USENIX, CCS, NDSS, SIGCOMM</td></tr>
<tr><td class="hl">📐 Crypto Theory</td><td>Provable sec, lower bounds, assumptions</td><td>CRYPTO, TCC, EUROCRYPT</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-১০%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">$৮০০M+</div><div class="sc-label">NSA/DARPA/NSF ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$১৫০-৩৫০K</div><div class="sc-label">industry বেতন</div></div>
<div class="stat-card"><div class="sc-num">$২০০-৫০০K</div><div class="sc-label">consulting (bug bounty আলাদা)</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Security = শুধু compliance, password, firewall। নতুন কিছু নেই।" ভুল। PQ crypto (NIST ২০২৪), ZK proofs (blockchain/privacy), FHE (এনক্রিপ্টেড ডেটায় কাজ), AI-আসisted exploit discovery, supply-chain security — সব এখন frontier। প্রতিটা নতুন প্রযুক্তিতে নতুন নিরাপত্তা সমস্যা জন্ম নেয়। AI security (Door 9) একটা গোটা নতুন ক্ষেত্র।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"Security হলো চিরকালীন arms race — প্রতিটা নতুন প্রযুক্তিতে নতুন threat। গবেষকরা ভাঙেন (red team), সেই জ্ঞানে মজবুত করেন (blue team)। PQ crypto পুরো TLS বদলাচ্ছে, ZK নতুন trust paradigm। stable funding, real impact, চিরকালীন প্রাসঙ্গিকতা।"</div>
</div>

<div class="callout warn"><span class="co-icon">⚖️</span><div><strong>Responsible disclosure:</strong> vulnerability পেলে সরাসরি প্রকাশ কোরো না — আগে কোম্পানিকে জানাও (৯০ দিন standard), সময় দাও, তারপর পেপার। এই নীতিবোধ ছাড়া security গবেষক বিপজ্জনক। আইনি ঝুঁকিও আছে — CFAA, DMCA।</div></div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> NIST PQ standards চূড়ান্ত (ML-KEM/ML-DSA, ২০২৪), zkTLS (proving web data), FHE এখন practical (Zama, ২০২৫), SGX/SEV-SNP confidential computing, AI-আসisted vulnerability discovery, supply-chain security (SLSA, Sigstore)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ ভাঙা আর বানানো একসাথে ভালোবাসো · ✅ crypto গণিত (number theory, lattices) ভালো লাগে · ✅ government/clearance career চাও (NSA, national labs) · ✅ real-world impact চাও · 💡 CTF (picoCTP, ফ্রি) দিয়ে শুরু — এটা entry-র সবচেয়ে ভালো পথ।</div></div>

<div class="dialogue">"security গবেষণায় একটা unique challenge আছে," ওমর বললেন। "তুমি যা জানো, তা প্রকাশ করতে হয় সাবধানে। responsible disclosure। তুমি একটা zero-day খুঁজে পেলে — সরাসরি প্রকাশ করো না। প্রথমে কোম্পানিকে জানাও, সময় দাও, তারপর পেপার। এই নীতিবোধ ছাড়া security গবেষক বিপজ্জনক।" তিনি একটা সিফার দেখালেন। "crypto-ও তাই — একটা ভাঙা encryption, সরাসরি নয়, সাবধানে। আমানত পালন করো।"</div>
<div class="dialogue en">"Security research has a unique challenge," Omar said. "You must publish what you know carefully. Responsible disclosure. If you find a zero-day — don't publish directly. First notify the company, give time, then paper. Without this ethics, a security researcher is dangerous." He showed a cipher. "Crypto too — a broken encryption, not directly, carefully. Keep the trust."</div>

<div class="dialogue">হিফয — রক্ষা, সুরক্ষা। কুরআনে আল্লাহ বলেন: "আমি স্মরণ (কুরআন) নাজিল করেছি এবং আমিই এর রক্ষক।" (১৫:৯)। হিফয মানে সুরক্ষা, পাহারা। security গবেষণা হলো হিফয — মানুষের ডেটা, গোপনীয়তা, অধিকার রক্ষা করা। এটা আমানত। যে আমানত রক্ষা করে, সে বিশ্বস্ত। বিশ্বস্ত মানুষ আল্লাহও বিশ্বাস করেন। security গবেষক হলো ডিজিটাল দুনিয়ার প্রহরী — যে অন্যের তথ্য রক্ষা করে নিজের জ্ঞান দিয়ে। এটা বিশ্বাসের কাজ, এটাই হিফয।</div>
<div class="dialogue en">Hifz — protection, guarding. Allah says: "We have sent down the Reminder and We are its protector." (15:9). Hifz means security, guarding. Security research is hifz — protecting people's data, privacy, rights. It's a trust. One who protects the trust, is trustworthy. The trustworthy person, Allah trusts too. A security researcher is the guardian of the digital world — protecting others' information with their knowledge. This is work of trust, this is hifz.</div>

<div class="secret-box">🔐 Systems Sec + Crypto: চিরকালীন। মাঝারি প্রতিযোগিতা (৫-১০%), সরকারি+বেসরকারি ফান্ডিং। হট: PQ crypto (NIST standards), ZK, FHE। ভাঙা শেখো আগে (CTF), তারপর বানানো। responsible disclosure = নৈতিকতার শর্ত।</div>`,
  senior:{
    title:"Security/Crypto PhD — Senior Path",
    body:`<p><strong>CTF দিয়ে শুরু:</strong> picoCTF (ফ্রি, CMU) থেকে শুরু করো, তারপর DEF CON qualifier, Google CTF। একটা CTF writeup blog = entry-level credential। ভর্তিতে security প্রফেসররা CTF খেলোয়ারদের খোঁজেন।</p><p><strong>একটা CVE পাও:</strong> open-source প্রজেক্টে vulnerability খুঁজে দাও, responsible disclosure করো, CVE পাও। এটা সবচেয়ে concrete profile signal — "আমি একটা real bug খুঁজে পেয়েছি।"</p><p><strong>Crypto = গণিত:</strong> lattice-based crypto (PQ) এখন সবচেয়ে হট কিন্তু গণিত-নির্ভর। Boneh-Shoup 'Graduate Course in Applied Cryptography' ফ্রি — পড়ো। number theory + abstract algebra শক্ত হলেই crypto theory-তে যাও।</p><p><strong>Government path:</strong> NSA, national labs (Sandia, Livermore), DARPA — security-এ বিশাল ফান্ডিং, clearance career। citizenship requirement থাকতে পারে — দেখে নাও। academia-এও industry-grade কাজ, কিন্তু government = সর্বোচ্চ stable funding।</p>`
  }
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
