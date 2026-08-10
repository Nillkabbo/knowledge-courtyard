doors.push({
  num: 6,
  icon: "🧠",
  color: "#22d3ee",
  name: "স্মৃতির স্থপতি",
  subtitle: "The Memory Architect",
  tech: "Memory Management — virtual memory (Denning 1970), paging, page tables, TLB, segmentation, swapping, OOM",
  spirit: "বাসার — স্থান বরাদ্দ, প্রতিটি প্রসেসের জন্য নিজস্ব ঠিকানা স্থান",
  secret: "Virtual Memory = একটি বিভ্রম। প্রতিটি প্রসেস মনে করে সে পুরো মেমোরির মালিক। আসলে OS পেছনে থেকে মেমোরি ভাগ করে, ডিস্ক ব্যবহার করে স্থান বাড়ায়।",
  recall: {
    q: " Virtual Memory কী এবং কেন দরকার?",
    qen: "What is Virtual Memory and why is it needed?",
    a: "প্রতিটি প্রসেসকে একটি কাল্পনিক সম্পূর্ণ মেমোরির বিভ্রম দেয়। আসলে OS paging দিয়ে শারীরিক RAM-কে ভাগ করে, ডিস্ক ব্যবহার করে overflow সামলায়।",
    aen: "Gives each process the illusion of owning all memory. OS actually shares physical RAM via paging, using disk for overflow."
  },
  story: `<p class="scene-setting">তুমি একটি বড় বাড়িতে থাকো। তোমার কক্ষ ছোট কিন্তু তোমার মনে হয় পুরো বাড়িটা তোমার। কেন? কারণ দরজা খোলা — যখন যে ঘর দরকার, সেখানে যেতে পারো। অথচ আসলে তুমি একটি কক্ষে থাকো। এটাই Virtual Memory — প্রতিটি প্রসেস মনে করে সে পুরো ৪GB/৮GB RAM-এর মালিক। আসলে OS পেছনে থেকে ভাগ করে দেয়।</p>
<p class="scene-setting en">You live in a large house. Your room is small but you feel like you own the whole house. Why? Because doors are open — you can go to whichever room you need. Yet you actually live in one room. This is Virtual Memory — each process thinks it owns all 4GB/8GB RAM. The OS actually shares it behind the scenes.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Paging — মেমোরির ছোট ছোট পেজ:</strong><br>
RAM-কে fixed-size block-এ ভাগ করো — page (সাধারণত ৪KB)।<br>
প্রতিটি প্রসেসের একটি page table আছে — virtual page → physical frame mapping।<br>
<strong>Page Fault:</strong> প্রসেস একটি page চায় যা RAM-এ নেই (ডিস্কে আছে)। OS ডিস্ক থেকে আনে, page table update করে, প্রসেস resume করে।<br>
<strong>TLB (Translation Lookaside Buffer):</strong> page table lookup দ্রুত করার hardware cache।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Thrashing:</strong> যদি RAM খুব কম থাকে, OS প্রতিবার একটি page আনে, আরেকটি বের করে দেয় — বারবার। CPU কোনো কাজ করতে পারে না, শুধু page swap করে। এটাই thrashing — সিস্টেম প্রায় থমকে যায়। সমাধান: বেশি RAM দাও, বা working set model ব্যবহার করো।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Page Replacement Algorithms:</strong><br>
<strong>FIFO:</strong> যে পেজ আগে আসে সে আগে বের হয়। সহজ কিন্তু গুরুত্বপূর্ণ page বের হয়ে যেতে পারে।<br>
<strong>LRU (Least Recently Used):</strong> সবচেয়ে পুরোনো ব্যবহৃত পেজ বের করো। ভালো কিন্তু hardware support দরকার।<br>
<strong>Clock Algorithm:</strong> LRU-এর approximation — একটি reference bit দিয়ে। বেশিরভাগ OS এটাই ব্যবহার করে।<br>
<strong>Optimal:</strong> ভবিষ্যৎ জানলে সেরা — কিন্তু অবাস্তব (ভবিষ্যৎ জানা যায় না)। শুধু benchmark হিসেবে।</div></div>

<div class="callout info"><span class="co-icon">🏠</span><div><strong>Segmentation vs Paging:</strong><br>
<strong>Paging:</strong> fixed-size block। সহজ, external fragmentation নেই কিন্তু internal fragmentation হতে পারে।<br>
<strong>Segmentation:</strong> variable-size block — code segment, data segment, stack segment। logical কিন্তু external fragmentation।<br>
<strong>Modern OS:</strong> paging ব্যবহার করে (segmentation প্রায় বিলুপ্ত)।</div></div>

<div class="verse">وَاللَّهُ أَخْرَجَكُم مِّن بُطُونِ أُمَّهَاتِكُمْ لَا تَعْلَمُونَ شَيْئًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ তোমাদের মায়ের গর্ভ থেকে বের করেছেন যখন তোমরা কিছুই জানতে না।" — কুরআন ১৬:৭৮</div>

<p class="scene-setting">এই আয়াত বলে — জন্মের সময় আমরা কিছুই জানি না। মেমোরি ম্যানেজমেন্টেও একটি অনুরূপ বিভ্রম — প্রসেস জন্ম নেয় "কিছুই জানে না" তার actual মেমোরি সম্পর্কে। তাকে একটি পরিপূর্ণ জগতের বিভ্রম দেওয়া হয়। OS পেছনে থেকে সব সামলায় — কোন page কোথায়, কখন ডিস্কে যাবে, কখন ফিরে আসবে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৬ (DL Architecture) Door ৮:</strong> Training dynamics — GPU memory management এই নীতির উপর নির্মিত। Book ৩৭ (Networks) Door ৭: CDN caching = একই concept, network level-এ।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🧠 Virtual Memory: Page Table Translation</text>
  <rect x="20" y="50" width="120" height="180" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="80" y="72" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">Virtual Addr</text>
  <rect x="35" y="82" width="90" height="20" rx="3" fill="#0f172a" stroke="#22d3ee" stroke-width="1"/>
  <text x="80" y="96" text-anchor="middle" fill="#7dd3fc" font-size="10">Page #:3 Offset:12</text>
  <rect x="35" y="112" width="90" height="20" rx="3" fill="#0f172a" stroke="#22d3ee" stroke-width="1"/>
  <text x="80" y="126" text-anchor="middle" fill="#7dd3fc" font-size="10">Page #:7 Offset:0</text>
  <rect x="35" y="142" width="90" height="20" rx="3" fill="#450a0a" stroke="#f87171" stroke-width="1"/>
  <text x="80" y="156" text-anchor="middle" fill="#fca5a5" font-size="10">Page #:12 (swapped)</text>
  <text x="80" y="190" text-anchor="middle" fill="#94a3b8" font-size="10">Each process sees</text>
  <text x="80" y="205" text-anchor="middle" fill="#94a3b8" font-size="10">its own full address</text>
  <text x="80" y="220" text-anchor="middle" fill="#67e8f9" font-size="10">space (illusion!)</text>
  <rect x="200" y="60" width="140" height="160" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="270" y="82" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">Page Table</text>
  <rect x="215" y="92" width="110" height="18" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="270" y="105" text-anchor="middle" fill="#4ade80" font-size="10">VPN 3 → Frame 7 ✓</text>
  <rect x="215" y="115" width="110" height="18" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="270" y="128" text-anchor="middle" fill="#4ade80" font-size="10">VPN 7 → Frame 2 ✓</text>
  <rect x="215" y="138" width="110" height="18" rx="3" fill="#450a0a" stroke="#f87171" stroke-width="1"/>
  <text x="270" y="151" text-anchor="middle" fill="#fca5a5" font-size="10">VPN 12 → DISK ⚠️</text>
  <text x="270" y="175" text-anchor="middle" fill="#fbbf24" font-size="10">TLB cache: fast lookup</text>
  <text x="270" y="195" text-anchor="middle" fill="#94a3b8" font-size="10">Page fault → disk → swap</text>
  <rect x="400" y="50" width="160" height="180" rx="8" fill="#1e3a5f" stroke="#22c55e" stroke-width="2"/>
  <text x="480" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Physical RAM</text>
  <rect x="415" y="82" width="130" height="18" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="480" y="95" text-anchor="middle" fill="#4ade80" font-size="10">Frame 0: Process A</text>
  <rect x="415" y="105" width="130" height="18" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="480" y="118" text-anchor="middle" fill="#4ade80" font-size="10">Frame 2: VPN 7 data</text>
  <rect x="415" y="128" width="130" height="18" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="480" y="141" text-anchor="middle" fill="#4ade80" font-size="10">Frame 7: VPN 3 data</text>
  <text x="480" y="170" text-anchor="middle" fill="#94a3b8" font-size="10">Multiple processes</text>
  <text x="480" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">share one RAM</text>
  <text x="480" y="205" text-anchor="middle" fill="#67e8f9" font-size="10">4KB pages typical</text>
  <line x1="140" y1="95" x2="200" y2="100" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrM)"/>
  <line x1="340" y1="100" x2="400" y2="115" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arrM)"/>
  <defs><marker id="arrM" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: Virtual → Page Table → Physical। Page fault হলে ডিস্ক থেকে RAM-এ আনে (swap)।</div>

<div class="code-block">— Terminal: Memory দেখো —

  # সিস্টেমের মেমোরি সারাংশ:
  $ free -h
                total   used   free  available
  Mem:           16Gi   8.2Gi  3.1Gi      7.5Gi
  Swap:          4.0Gi   0.5Gi  3.5Gi

  # প্রতিটি process-এর মেমোরি:
  $ cat /proc/1234/maps
  00400000-006b0000 r-xp  code segment
  01000000-01200000 rw-p  heap (malloc)
  7fff-7fff rwxp         stack

  # page size:
  $ getconf PAGE_SIZE
  4096

  # vmstat — real-time:
  $ vmstat 1
  procs  memory  swap  io  system  cpu
   r b   swpd  free  buff  cache  si  so
   1 0      0 3.2G  500M  2.1G    0   0

  # OOM Score:
  $ cat /proc/1234/oom_score
  42  # কত সম্ভাবনা OOM কিল হওয়ার

  # swap off/on:
  $ sudo swapoff -a    # RAM-only mode</div>

<div class="secret-box">🧠 <strong>Virtual Memory = সর্বজনীন বিভ্রম।</strong> প্রতিটি প্রসেস নিজেকে একা মনে করে। OS পেছনে থেকে paging, swapping, page replacement সব সামলায়। ডিস্ক একটি extension — RAM ফুলে গেলে ডিস্কে page পাঠায়। কিন্তু মেমোরি শুধু RAM-এই সীমাবদ্ধ নয় — ডেটা স্থায়ীভাবে কোথাও থাকতে হবে। সেই স্থান হলো ফাইল সিস্টেম। সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "Memory Management এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Virtual Memory</td><td>Denning 1970 — প্রতিটি প্রসেসের কাল্পনিক সম্পূর্ণ address space</td></tr>
<tr><td class="hl">Paging</td><td>fixed-size block (৪KB) — page table → physical frame</td></tr>
<tr><td class="hl">Page Fault</td><td>page RAM-এ নেই → OS ডিস্ক থেকে আনে</td></tr>
<tr><td class="hl">TLB</td><td>Translation Lookaside Buffer — page table lookup cache</td></tr>
<tr><td class="hl">LRU</td><td>Least Recently Used — সবচেয়ে পুরোনো page বের করো</td></tr>
<tr><td class="hl">Thrashing</td><td>অতিরিক্ত paging → CPU কোনো কাজ করতে পারে না</td></tr>
<tr><td class="hl">Swapping</td><td>সম্পূর্ণ process ডিস্কে পাঠানো (heavy)</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "💿",
  color: "#22d3ee",
  name: "ডিস্ক কারিগর",
  subtitle: "The Disk Craftsman",
  tech: "File Systems — inodes, directories, journaling (ext4, XFS), FAT, NTFS, POSIX file API, RAID",
  spirit: "কিতাব — সংগঠিত রেকর্ড, প্রতিটি তথ্যের জন্য একটি স্থান",
  secret: "File System = একটি গ্রন্থাগার। প্রতিটি ফাইলের একটি ক্যাটালগ এন্ট্রি (inode) আছে — কোথায় আছে, কতটা বড়, কার। ফোল্ডার হলো শুধু আরেকটি ফাইল যা নামের তালিকা রাখে।",
  recall: {
    q: " inode কী এবং এতে কী থাকে?",
    qen: "What is an inode and what does it contain?",
    a: "একটি ফাইলের metadata — size, owner, permissions, timestamps, data block pointers। নাম inode-এ থাকে না — নাম directory-তে থাকে।",
    aen: "File metadata — size, owner, permissions, timestamps, block pointers. Name is NOT in inode — it's in the directory."
  },
  story: `<p class="scene-setting">একটি গ্রন্থাগারে ঢোকো। প্রতিটি বইয়ের একটি ক্যাটালগ কার্ড আছে — লেখক, শিরোনাম, অবস্থান, আইএসবিএন। কিন্তু বইয়ের নাম কার্ডে একবার লেখা — বইয়ের গায়েও। ফাইল সিস্টেমও তেমন — প্রতিটি ফাইলের একটি inode (ক্যাটালগ কার্ড)। এতে সব তথ্য আছে শুধু নাম ছাড়া। নাম থাকে directory-তে।</p>
<p class="scene-setting en">Enter a library. Each book has a catalog card — author, title, location, ISBN. The book's name is on the card and on the cover. A file system is similar — each file has an inode (catalog card). It has all information except the name. The name is in the directory.</p>

<div class="callout info"><span class="co-icon">📋</span><div><strong>Inode (Index Node):</strong> প্রতিটি ফাইলের জন্য একটি data structure —<br>
<strong>ফাইলের ধরন:</strong> regular, directory, symbolic link, device<br>
<strong>Permissions:</strong> read/write/execute — owner, group, others<br>
<strong>Size, timestamps:</strong> কবে তৈরি, কবে পরিবর্তিত<br>
<strong>Block pointers:</strong> ডেটা ডিস্কের কোন block-এ আছে<br>
<strong>Link count:</strong> কতগুলো directory entry এই inode-কে নির্দেশ করছে</div></div>

<div class="callout info"><span class="co-icon">📂</span><div><strong>Directory = নামের তালিকা:</strong> একটি directory আসলে একটি ফাইল — যার ভেতরে (filename, inode_number) pair-এর তালিকা। ls চালালে এই তালিকা পড়া হয়।</div></div>

<div class="callout info"><span class="co-icon">🔧</span><div><strong>POSIX File API:</strong><br>
open() → ফাইল খোলো, একটি file descriptor পাও<br>
read() / write() → পড়ো বা লেখো<br>
close() → ফাইল বন্ধ করো<br>
lseek() → নির্দিষ্ট অবস্থানে যাও<br>
stat() → inode তথ্য দেখো</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Journaling File Systems (ext4, XFS):</strong><br>
সমস্যা: লেখার সময় বিদ্যুৎ গেলে? ফাইল অর্ধেক লেখা, corrupt।<br>
সমাধান: journal — লেখার আগে একটি লগ রেখো। "আমি এই পরিবর্তন করতে যাচ্ছি।" তারপর করো। বিদ্যুৎ গেলে? পুনরায় চালু হলে journal পড়ে — কোনটা হয়েছে, কোনটা হয়নি, ঠিক করো। ext4 (Linux), NTFS (Windows), APFS (macOS) — সবাই journaling করে।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Hard Link vs Soft Link:</strong><br>
<strong>Hard Link:</strong> একই inode-কে আরেকটি নাম দাও। মূল ফাইল মুছলেও ডেটা থাকে (link count > ০)।<br>
<strong>Soft Link (Symlink):</strong> একটি ফাইল যা অন্য ফাইলের পথ ধরে রাখে। মূল মুছলে symlink "broken" হয়ে যায়।</div></div>

<div class="verse">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ اقْرَأْ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"পরম করুণাময় অসীম দয়ালু আল্লাহর নামে। পড়ো!" — কুরআন ৯৬:১</div>

<p class="scene-setting">এই আয়াত পড়ার নির্দেশ দেয় — পড়ো, জ্ঞান গ্রহণ করো। ফাইল সিস্টেমও সেই নীতি — তথ্য সংগঠিত করে রাখো যাতে পড়া যায়। inode, directory, journal — প্রতিটি যন্ত্র একটি উদ্দেশ্যে: তথ্য সুরক্ষিত, সংগঠিত, এবং খুঁজে পাওয়ার যোগ্য।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন) Door ১৬:</strong> Database indexing শিখেছিলে — inode হলো সেই indexing-এর file system সংস্করণ। Book ৩৭ (Networks): HTTP file transfer — ফাইল সিস্টেমের উপরে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">💿 inode: File System Internal Structure</text>
  <rect x="20" y="50" width="140" height="180" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="90" y="72" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">Directory Entry</text>
  <rect x="35" y="82" width="110" height="18" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="90" y="95" text-anchor="middle" fill="#7dd3fc" font-size="10">"report.txt" → inode 42</text>
  <rect x="35" y="105" width="110" height="18" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="90" y="118" text-anchor="middle" fill="#7dd3fc" font-size="10">"photo.jpg" → inode 17</text>
  <text x="90" y="145" text-anchor="middle" fill="#94a3b8" font-size="10">Name → inode number</text>
  <text x="90" y="162" text-anchor="middle" fill="#94a3b8" font-size="10">(directory = table)</text>
  <rect x="210" y="50" width="160" height="180" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">inode #42</text>
  <rect x="225" y="82" width="130" height="16" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="290" y="93" text-anchor="middle" fill="#86efac" font-size="10">Mode: -rw-r--r--</text>
  <rect x="225" y="102" width="130" height="16" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="290" y="113" text-anchor="middle" fill="#86efac" font-size="10">Owner: rakib · Size: 12KB</text>
  <rect x="225" y="122" width="130" height="16" rx="3" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="290" y="133" text-anchor="middle" fill="#86efac" font-size="10">12 direct + 1 indirect</text>
  <rect x="225" y="142" width="130" height="16" rx="3" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="153" text-anchor="middle" fill="#fcd34d" font-size="10">Block ptr: 101, 102, 103...</text>
  <text x="290" y="180" text-anchor="middle" fill="#94a3b8" font-size="10">Metadata + pointers</text>
  <text x="290" y="195" text-anchor="middle" fill="#94a3b8" font-size="10">NO filename stored!</text>
  <rect x="420" y="50" width="140" height="180" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="490" y="72" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">Data Blocks</text>
  <rect x="435" y="82" width="110" height="18" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="490" y="95" text-anchor="middle" fill="#7dd3fc" font-size="10">Block 101: "Hello"</text>
  <rect x="435" y="105" width="110" height="18" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="490" y="118" text-anchor="middle" fill="#7dd3fc" font-size="10">Block 102: "World"</text>
  <rect x="435" y="128" width="110" height="18" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="490" y="141" text-anchor="middle" fill="#7dd3fc" font-size="10">Block 103: "..."</text>
  <text x="490" y="170" text-anchor="middle" fill="#94a3b8" font-size="10">4KB each on disk</text>
  <text x="490" y="190" text-anchor="middle" fill="#4ade80" font-size="10">ext4: journaled ✅</text>
  <line x1="160" y1="95" x2="210" y2="95" stroke="#fcd34d" stroke-width="2" marker-end="url(#arrF)"/>
  <line x1="370" y1="130" x2="420" y2="95" stroke="#4ade80" stroke-width="2" marker-end="url(#arrF)"/>
  <defs><marker id="arrF" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: filename → directory → inode → data blocks। inode-এ মেটাডেটা ও pointer, ফাইলের নাম নয়।</div>

<div class="code-block">— Terminal: File System দেখো —

  # inode দেখো:
  $ ls -i report.txt
  42 report.txt    # inode number = 42

  # বিস্তারিত inode:
  $ stat report.txt
    Size: 12288       Blocks: 24       IO Block: 4096
    Inode: 42         Links: 1
    Access: (0644/-rw-r--r--)  Uid: (1000)

  # ডিস্ক ব্যবহার:
  $ df -h /dev/sda1
  Filesystem  Size  Used  Avail  Use%  Mounted on
  /dev/sda1   100G   45G    55G   45%   /

  # file system type:
  $ mount | grep sda1
  /dev/sda1 on / type ext4 (rw,relatime)

  # journaling check:
  $ tune2fs -l /dev/sda1 | grep features
  Filesystem features: has_journal ext_attr ...

  # iotop — I/O per process:
  $ sudo iotop
  TID  PRIO USER DISK READ DISK WRITE
  1234 be/4 user 0.00 B/s 1.2M/s

  # RAID status:
  $ cat /proc/mdstat
  md0 : active raid1 sda1[0] sdb1[1]</div>

<div class="secret-box">💿 <strong>File System = স্থায়ী স্মৃতি।</strong> RAM সাময়িক — বিদ্যুৎ গেলে মুছে যায়। ডিস্ক স্থায়ী। inode প্রতিটি ফাইলের পরিচয় রাখে, directory সংগঠিত করে, journaling নিরাপত্তা দেয়। কিন্তু ফাইল সিস্টেম একা কাজ করতে পারে না — হার্ডওয়্যারের সাথে কথা বলতে হয়। সেই সেতু হলো I/O সিস্টেম। সেই যাত্রা আসবে পরের দরজায়।</div>`,
  senior: {
    title: "File Systems এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Inode</td><td>ফাইলের metadata — size, permissions, timestamps, block pointers</td></tr>
<tr><td class="hl">Directory</td><td>(filename → inode) pair-এর তালিকা</td></tr>
<tr><td class="hl">POSIX API</td><td>open, read, write, close, lseek, stat</td></tr>
<tr><td class="hl">Journaling</td><td>লেখার আগে log → crash recovery</td></tr>
<tr><td class="hl">ext4</td><td>Linux default — journaling, extents, large files</td></tr>
<tr><td class="hl">NTFS</td><td>Windows — journaling, ACL, compression</td></tr>
<tr><td class="hl">Hard Link</td><td>একই inode-কে নতুন নাম — মূল মুছলেও থাকে</td></tr>
<tr><td class="hl">Symlink</td><td>পথের reference — মূল মুছলে broken</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "🔌",
  color: "#22d3ee",
  name: "যন্ত্রের ভাষা",
  subtitle: "Speaking to Machines",
  tech: "I/O Systems — device drivers, interrupts, DMA, polling vs interrupt, buffering, USB, GPU",
  spirit: "আয়ত — সংকেত, যন্ত্রের সাথে কথোপকথন",
  secret: "I/O = OS এবং হার্ডওয়্যারের মধ্যে অনুবাদক। প্রতিটি ডিভাইসের নিজস্ব ভাষা — driver সেই অনুবাদ করে।",
  recall: {
    q: " Polling এবং Interrupt-এর পার্থক্য কী?",
    qen: "What is the difference between polling and interrupts?",
    a: "Polling = CPU বারবার জিজ্ঞেস করে 'কিছু আছে?' Interrupt = ডিভাইস নিজে থেকে সংকেত পাঠায় 'আমার কিছু আছে!'",
    aen: "Polling = CPU repeatedly asks 'anything?'. Interrupt = device signals 'I have something!'"
  },
  story: `<p class="scene-setting">তোমার একটি ছোট দোকান। গ্রাহক আসে কিনা জানতে দুটি উপায়: প্রথম — প্রতি মিনিটে দরজায় গিয়ে দেখো (polling)। ক্লান্তিকর, কাজ হয় না। দ্বিতীয় — দরজায় একটি বেল লাগাও। কেউ এলে বেল বাজে — তুমি যাও (interrupt)। এটাই I/O — CPU কীভাবে ডিভাইসের সাথে কথা বলবে?</p>
<p class="scene-setting en">You have a small shop. To know if customers arrive, two ways: first — check the door every minute (polling). Exhausting, unproductive. Second — install a bell. When someone comes, bell rings — you go (interrupt). This is I/O — how does the CPU talk to devices?</p>

<div class="callout info"><span class="co-icon">🔌</span><div><strong>Device Driver:</strong> প্রতিটি হার্ডওয়্যার ডিভাইসের (keyboard, mouse, disk, GPU, printer) নিজস্ব ভাষা ও নিয়ম আছে। Driver হলো একটি অনুবাদক — OS-এর সাধারণ নির্দেশ ("এই ডেটা লেখো") কে ডিভাইস-নির্দিষ্ট নির্দেশে অনুবাদ করে। এটাই কারণ নতুন printer কিনলে driver install করতে হয়।</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Polling</div>CPU বারবার চেক করে — "কিছু আছে?" CPU সময় নষ্ট। সহজ কিন্তু অদক্ষ।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Interrupt</div>ডিভাইস নিজে সংকেত পাঠায়। CPU অন্য কাজ করে। দক্ষ। আধুনিক OS সব interrupt-driven।</div>
</div>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>DMA (Direct Memory Access):</strong> সমস্যা: ডিস্ক থেকে ডেটা পড়তে CPU প্রতিটি byte কপি করে — সময় নষ্ট। DMA সমাধান: একটি বিশেষ chip সরাসরি ডিস্ক থেকে RAM-এ ডেটা কপি করে, CPU ছাড়া। CPU শুধু শুরু করে দেয়, DMA শেষ করে। এতে CPU অন্য কাজ করতে পারে।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>I/O Buffering:</strong><br>
<strong>Single Buffer:</strong> একটি buffer — ডেটা আসে, CPU পড়ে, আবার আসে।<br>
<strong>Double Buffer:</strong> দুটি buffer — একটিতে পড়ো একই সাথে অন্যটিতে লেখো।<br>
<strong>Circular Buffer:</strong> একটি ring — producer এক মুখে লেখে, consumer অন্য মুখে পড়ে।</div></div>

<div class="verse">وَسَخَّرَ لَكُم مَّا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তিনি তোমাদের অধীন করেছেন আসমান ও পৃথিবীতে যা কিছু আছে।" — কুরআন ৪৫:১৩</div>

<p class="scene-setting">এই আয়াত বলে — আল্লাহ আসমান ও পৃথিবীর সব কিছু মানুষের অধীন করেছেন। I/O সিস্টেমও সেই নীতি — মানুষ যন্ত্রকে নিয়ন্ত্রণ করে। Driver, interrupt, DMA — প্রতিটি যন্ত্র হার্ডওয়্যারকে নিয়ন্ত্রণের একটি উপায়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৬ (DL Architecture):</strong> GPU driver — deep learning training-এ GPU-র সাথে কথা বলার জন্য CUDA driver দরকার। এটাই সেই I/O স্তর। Book ৩৭ (Networks) Door ২: NIC (Network Interface Card) — একটি I/O device।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔌 Polling vs Interrupt vs DMA</text>
  <rect x="20" y="50" width="170" height="180" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="105" y="72" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">❌ POLLING</text>
  <text x="105" y="92" text-anchor="middle" fill="#fca5a5" font-size="10">CPU: "Ready?"</text>
  <text x="105" y="105" text-anchor="middle" fill="#f87171" font-size="10">Device: "No"</text>
  <text x="105" y="120" text-anchor="middle" fill="#fca5a5" font-size="10">CPU: "Ready?"</text>
  <text x="105" y="133" text-anchor="middle" fill="#f87171" font-size="10">Device: "No"</text>
  <text x="105" y="148" text-anchor="middle" fill="#fca5a5" font-size="10">CPU: "Ready?"</text>
  <text x="105" y="161" text-anchor="middle" fill="#4ade80" font-size="10">Device: "Yes!"</text>
  <text x="105" y="185" text-anchor="middle" fill="#f87171" font-size="10">CPU waste: 99%</text>
  <text x="105" y="200" text-anchor="middle" fill="#94a3b8" font-size="10">simple but slow</text>
  <rect x="205" y="50" width="170" height="180" rx="8" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">⚠️ INTERRUPT</text>
  <text x="290" y="92" text-anchor="middle" fill="#fde68a" font-size="10">CPU does other work</text>
  <text x="290" y="110" text-anchor="middle" fill="#fcd34d" font-size="10">Device: "IRQ!"</text>
  <rect x="225" y="120" width="130" height="22" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="290" y="135" text-anchor="middle" fill="#7dd3fc" font-size="10">CPU saves state</text>
  <rect x="225" y="148" width="130" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="290" y="163" text-anchor="middle" fill="#4ade80" font-size="10">ISR handler runs</text>
  <rect x="225" y="176" width="130" height="22" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="290" y="191" text-anchor="middle" fill="#7dd3fc" font-size="10">CPU resumes</text>
  <text x="290" y="215" text-anchor="middle" fill="#fcd34d" font-size="10">CPU transfer: byte-by-byte</text>
  <rect x="390" y="50" width="170" height="180" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="475" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">✅ DMA</text>
  <text x="475" y="92" text-anchor="middle" fill="#86efac" font-size="10">CPU: "DMA, transfer N bytes"</text>
  <text x="475" y="110" text-anchor="middle" fill="#4ade80" font-size="10">CPU does OTHER work!</text>
  <rect x="410" y="122" width="130" height="22" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="475" y="137" text-anchor="middle" fill="#7dd3fc" font-size="10">DMA → Memory (direct)</text>
  <text x="475" y="160" text-anchor="middle" fill="#4ade80" font-size="10">Device: "Done!"</text>
  <text x="475" y="180" text-anchor="middle" fill="#4ade80" font-size="10">CPU: one IRQ only</text>
  <text x="475" y="205" text-anchor="middle" fill="#4ade80" font-size="10">CPU waste: ~0%</text>
  <text x="475" y="220" text-anchor="middle" fill="#94a3b8" font-size="10">fastest — used by all modern I/O</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Polling (CPU waste) → Interrupt (better) → DMA (best — CPU free during transfer)।</div>

<div class="code-block">— Terminal: I/O দেখো —

  # interrupts দেখো:
  $ cat /proc/interrupts | head -10
           CPU0   CPU1   CPU2   CPU3
    0:      42     0      0      0  IR-IO-APIC  edge  timer
   16:    1234     0      0      0  IO-APIC     fasteoi  ehci_hcd:usb1
  NMI:      12     8      5      3  Non-maskable interrupts

  # I/O ports:
  $ sudo cat /proc/ioports
  0040-0043 : timer
  00f0-00ff : fpu
  03f8-03ff : serial

  # lspci — hardware devices:
  $ lspci -v | grep -A3 "USB"
  00:14.0 USB Controller: Intel...
      Kernel driver in use: xhci_hcd

  # lsblk — block devices:
  $ lsblk
  NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
  sda      8:0    0   500G  0 disk
  ├─sda1   8:1    0   100G  0 part /
  └─sda2   8:2    0   400G  0 part /home

  # strace — system calls:
  $ strace -e read,write cat /etc/hosts
  read(3, "127.0.0.1 localhost\n...", 1024) = 42
  write(1, "127.0.0.1 localhost\n...", 42) = 42</div>

<div class="secret-box">🔌 <strong>I/O = OS এবং হার্ডওয়্যারের সেতু।</strong> Driver অনুবাদ করে, interrupt সংকেত দেয়, DMA দ্রুত স্থানান্তর করে। CPU বারবার চেক করে না — ডিভাইস নিজে ডাকে। কিন্তু এই পর্যন্ত আলোচনা ছিল একটি মেশিনের ভেতরে। আজকের যুগে একটি মেশিনে সব চলে না — শত শত মেশিন একসাথে। সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "I/O & Device Drivers এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Device Driver</td><td>OS ও device-এর মধ্যে অনুবাদক</td></tr>
<tr><td class="hl">Polling</td><td>CPU বারবার চেক — সহজ কিন্তু অদক্ষ</td></tr>
<tr><td class="hl">Interrupt</td><td>device নিজে সংকেত — দক্ষ, আধুনিক</td></tr>
<tr><td class="hl">DMA</td><td>Direct Memory Access — ডিস্ক থেকে RAM ছাড়া CPU</td></tr>
<tr><td class="hl">Buffering</td><td>single, double, circular — I/O speed mismatch সামলায়</td></tr>
<tr><td class="hl">Character Device</td><td>byte-by-byte — keyboard, mouse, serial</td></tr>
<tr><td class="hl">Block Device</td><td>block-by-block — disk, SSD</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "🐳",
  color: "#22d3ee",
  name: "বিচ্ছিন্ন জগত",
  subtitle: "Isolated Worlds",
  tech: "Containers (Docker), Virtual Machines (VMware/Hypervisors), Linux kernel, cgroups, namespaces, Kubernetes",
  spirit: "তাবাকা — স্তরে স্তরে বিচ্ছিন্নতা, প্রতিটি স্তরে একটি নিজস্ব জগত",
  secret: "Container = একটি বাড়ির ভেতরে আরেকটি বাড়ি — নিজস্ব রান্নাঘর, নিজস্ব পাইপ, কিন্তু ভিত্তি ভাগ করে। VM = সম্পূর্ণ আলাদা বাড়ি — নিজস্ব ভিত্তিও।",
  recall: {
    q: " Container এবং VM-এর পার্থক্য কী?",
    qen: "What is the difference between a container and a VM?",
    a: "Container = OS kernel ভাগ করে, শুধু app ও libraries আলাদা — হালকা। VM = সম্পূর্ণ OS আলাদা, নিজস্ব kernel — ভারী কিন্তু সম্পূর্ণ বিচ্ছিন্ন।",
    aen: "Container = shares OS kernel, only app/libs isolated — lightweight. VM = full separate OS with its own kernel — heavy but fully isolated."
  },
  story: `<p class="scene-setting">তুমি একটি বড় বাড়ির মালিক। তিনজন ভাড়াটিয়াকে থাকতে হবে। দুটি উপায়: প্রথম — বাড়ির ভেতরে তিনটি আলাদা কক্ষ বানাও, প্রত্যেকের নিজস্ব দরজা, কিন্তু ভিত্তি, বিদ্যুৎ, পানি ভাগ করা (container)। দ্বিতীয় — জমিতে তিনটি সম্পূর্ণ আলাদা বাড়ি বানাও, প্রত্যেকের নিজস্ব ভিত্তি (VM)। প্রথমটি সস্তা ও দ্রুত, দ্বিতীয়টি দামি কিন্তু সম্পূর্ণ বিচ্ছিন্ন।</p>
<p class="scene-setting en">You own a large house. Three tenants need housing. Two ways: first — divide the house into three rooms, each with its own door, but shared foundation, electricity, water (container). Second — build three completely separate houses on the land, each with its own foundation (VM). First is cheaper and faster, second is more expensive but fully isolated.</p>

<div class="callout info"><span class="co-icon">🐳</span><div><strong>Container (Docker):</strong><br>
<strong>Namespaces:</strong> প্রতিটি container-কে নিজস্ব PID, network, mount, user space দেখায় — বিচ্ছিন্ন।<br>
<strong>cgroups:</strong> CPU, মেমোরি, I/O limit — কতটা সম্পদ ব্যবহার করতে পারবে।<br>
<strong>UnionFS:</strong> layer করে image তৈরি — base image + app layer = একটি container image।<br>
<strong>Kernel sharing:</strong> সব container একই Linux kernel ব্যবহার করে — তাই হালকা।</div></div>

<div class="callout info"><span class="co-icon">🖥️</span><div><strong>Virtual Machine (VM):</strong><br>
<strong>Hypervisor:</strong> হার্ডওয়্যার ও OS-এর মধ্যে একটি স্তর — hardware virtualization।<br>
<strong>Type 1 (Bare Metal):</strong> VMware ESXi, Xen — সরাসরি হার্ডওয়্যারে।<br>
<strong>Type 2 (Hosted):</strong> VirtualBox, VMware Workstation — host OS-এর উপরে।<br>
<strong>সম্পূর্ণ বিচ্ছিন্ন:</strong> নিজস্ব kernel, নিজস্ব device drivers। ভারী কিন্তু নিরাপদ।</div></div>

<div class="compare">
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Container</div>হালকা (MB), দ্রুত চালু (সেকেন্ড), উচ্চ density। একই kernel ভাগ করে।</div>
<div class="cmp-card cmp-bad"><div class="cmp-label">🖥️ VM</div>ভারী (GB), ধীর চালু (মিনিট), কম density। কিন্তু সম্পূর্ণ বিচ্ছিন্ন, নিজস্ব kernel।</div>
</div>

<div class="callout info"><span class="co-icon">☸️</span><div><strong>Kubernetes (Container Orchestration):</strong> হাজার হাজার container পরিচালনা — scheduling, scaling, load balancing, self-healing। Google-এর Borg (২০১৫) থেকে অনুপ্রাণিত। আধুনিক cloud-এর মেরুদণ্ড।</div></div>

<div class="verse">وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং এতে প্রতিযোগীরা প্রতিযোগিতা করুক।" — কুরআন ৮৩:২৬</div>

<p class="scene-setting">এই আয়াত প্রতিযোগিতার কথা বলে। Container ও VM হলো দুটি প্রতিযোগী — প্রত্যেকের নিজস্ব সুবিধা ও অসুবিধা। Container হালকা ও দ্রুত, VM নিরাপদ ও সম্পূর্ণ। আধুনিক সিস্টেম প্রায়ই উভয় ব্যবহার করে — VM-এর ভেতরে container।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস) Door ৬:</strong> Dynamo — container-এ container orchestration-এর পূর্বসূরী। Book ৪ (সিস্টেম ডিজাইন): Microservices — প্রতিটি container একটি microservice। Docker/Gunicorn memory: তোমার LedgerPilot Docker-এ চলে!</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🐳 Container vs VM: Isolation Layers</text>
  <rect x="20" y="50" width="260" height="220" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="150" y="72" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="700">CONTAINER (Docker)</text>
  <rect x="35" y="82" width="80" height="35" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="75" y="100" text-anchor="middle" fill="#7dd3fc" font-size="8">App A</text>
  <text x="75" y="112" text-anchor="middle" fill="#94a3b8" font-size="10">+ libs</text>
  <rect x="125" y="82" width="80" height="35" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="165" y="100" text-anchor="middle" fill="#7dd3fc" font-size="8">App B</text>
  <text x="165" y="112" text-anchor="middle" fill="#94a3b8" font-size="10">+ libs</text>
  <rect x="215" y="82" width="55" height="35" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="242" y="100" text-anchor="middle" fill="#7dd3fc" font-size="10">App C</text>
  <rect x="35" y="128" width="235" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="152" y="143" text-anchor="middle" fill="#4ade80" font-size="8">Docker Engine (namespaces + cgroups)</text>
  <rect x="35" y="158" width="235" height="22" rx="4" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="152" y="173" text-anchor="middle" fill="#fcd34d" font-size="8">Host OS Kernel (SHARED!)</text>
  <rect x="35" y="188" width="235" height="22" rx="4" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="152" y="203" text-anchor="middle" fill="#94a3b8" font-size="8">Hardware</text>
  <text x="150" y="232" text-anchor="middle" fill="#4ade80" font-size="8">⚡ Boot: ~0.1s · Size: ~50MB</text>
  <text x="150" y="250" text-anchor="middle" fill="#86efac" font-size="10">Share kernel → lightweight!</text>
  <rect x="300" y="50" width="260" height="220" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="430" y="72" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">VIRTUAL MACHINE</text>
  <rect x="315" y="82" width="70" height="35" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="350" y="100" text-anchor="middle" fill="#7dd3fc" font-size="10">App A</text>
  <rect x="395" y="82" width="70" height="35" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="430" y="100" text-anchor="middle" fill="#7dd3fc" font-size="10">App B</text>
  <rect x="475" y="82" width="70" height="35" rx="5" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="510" y="100" text-anchor="middle" fill="#7dd3fc" font-size="10">App C</text>
  <rect x="315" y="124" width="230" height="18" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="430" y="137" text-anchor="middle" fill="#4ade80" font-size="10">Guest OS Kernel (FULL — each VM!)</text>
  <rect x="315" y="148" width="230" height="18" rx="4" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="430" y="161" text-anchor="middle" fill="#fcd34d" font-size="10">Hypervisor (VMware/KVM)</text>
  <rect x="315" y="172" width="230" height="18" rx="4" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
  <text x="430" y="185" text-anchor="middle" fill="#94a3b8" font-size="10">Host OS / Hardware</text>
  <text x="430" y="212" text-anchor="middle" fill="#f87171" font-size="8">🐢 Boot: ~30s · Size: ~2GB</text>
  <text x="430" y="232" text-anchor="middle" fill="#fca5a5" font-size="10">Full kernel copy → heavy!</text>
  <text x="430" y="250" text-anchor="middle" fill="#94a3b8" font-size="10">Stronger isolation though</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Container = kernel share (হালকা)। VM = full OS copy (ভারী কিন্তু বেশি isolated)।</div>

<div class="code-block">— Docker: Container তৈরি ও নিয়ন্ত্রণ —

  # Docker image pull ও run
  $ docker pull python:3.12-slim
  $ docker run -d --name api \\
      --memory=512m \\
      --cpus=1.5 \\
      -p 8000:8000 \\
      python:3.12-slim gunicorn api.wsgi:application

  # চলমান container দেখো:
  $ docker ps
  CONTAINER ID  IMAGE     STATUS     NAMES
  a1b2c3d4      python    Up 2 min   api

  # container-এ ঢুকো:
  $ docker exec -it api bash

  # resource usage দেখো:
  $ docker stats
  NAME  CPU%   MEM USAGE / LIMIT
  api   12.5%  156MiB / 512MiB

  # namespace দেখো (container-এর ভেতর থেকে):
  $ ls -la /proc/self/ns/
  ipc net pid user uts → প্রতিটি container-এ আলাদা!

  # cgroup memory limit:
  $ cat /sys/fs/cgroup/memory/memory.limit_in_bytes
  536870912  # 512MB

  # Kubernetes deployment:
  kubectl create deployment api \\
    --image=python:3.12-slim --replicas=3</div>

<div class="secret-box">🐳 <strong>Container = এক ছাদের নিচে বিচ্ছিন্ন জগত।</strong> Namespace পরিচয় বিচ্ছিন্ন রাখে, cgroup সম্পদ সীমিত রাখে, UnionFS layer করে। VM আরও বেশি বিচ্ছিন্ন কিন্তু ভারী। Kubernetes হাজার container পরিচালনা করে। এখন তুমি সব স্তর জানো — প্রসেস থেকে container পর্যন্ত। সময় এসেছে সব একত্রিত করার।</div>`,
  senior: {
    title: "Containers & VMs এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Container</td><td>namespaces + cgroups + UnionFS — kernel shared</td></tr>
<tr><td class="hl">Namespace</td><td>PID, network, mount, user isolation</td></tr>
<tr><td class="hl">cgroups</td><td>CPU/memory/IO limit per container</td></tr>
<tr><td class="hl">Docker</td><td>container runtime — build, ship, run</td></tr>
<tr><td class="hl">VM</td><td>full OS with hypervisor — own kernel</td></tr>
<tr><td class="hl">Hypervisor Type 1</td><td>ESXi, Xen — bare metal</td></tr>
<tr><td class="hl">Hypervisor Type 2</td><td>VirtualBox — hosted on OS</td></tr>
<tr><td class="hl">Kubernetes</td><td>orchestration — scheduling, scaling, self-healing</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🖥️",
  color: "#22d3ee",
  name: "যন্ত্রের আত্মা",
  subtitle: "The Synthesis",
  tech: "One fork() Call's Complete Journey — through all OS subsystems: process creation, scheduling, memory, file, I/O, container",
  spirit: "তাওহিদ — একত্ব, সব স্তর এক সিস্টেমের অংশ",
  secret: "তুমি যখন একটি প্রোগ্রাম চালাও — fork() থেকে container পর্যন্ত — নয়টি দরজা একসাথে কাজ করে। একটি syscall-এর ভেতর পুরো OS।",
  recall: {
    q: " একটি program থেকে process হওয়ার প্রথম ধাপ কী?",
    qen: "What is the first step from a program to a process?",
    a: "fork() বা exec() syscall — OS kernel-এ একটি অনুরোধ। kernel PCB তৈরি করে, মেমোরি বরাদ্দ করে, PID দেয়।",
    aen: "fork() or exec() syscall — a request to the kernel. Kernel creates PCB, allocates memory, assigns PID."
  },
  story: `<p class="scene-setting">তুমি টার্মিনালে লেখো: "python hello.py"। Enter চাপো। একটি চাবি চাপা হলো — যন্ত্রের ভেতরে একটি ঝড় শুরু হলো। চলো, একটি fork() কলের সম্পূর্ণ যাত্রা দেখি — নয়টি দরজার মধ্য দিয়ে।</p>
<p class="scene-setting en">You type in the terminal: "python hello.py". Press Enter. A key was pressed — a storm began inside the machine. Let's follow one fork() call's complete journey — through nine doors.</p>

<div class="callout info"><span class="co-icon">🚀</span><div><strong>ধাপ ১ — Shell fork() (দরজা ১):</strong><br>
তোমার shell (bash/zsh) fork() কল করে। kernel একটি নতুন PCB তৈরি করে — নতুন PID, state = ready। parent shell-এর সম্পূর্ণ মেমোরি copy হয় (copy-on-write optimization সহ)।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>ধাপ ২ — exec() (দরজা ১):</strong><br>
child process exec("python") কল করে। এর মেমোরি python binary দিয়ে প্রতিস্থাপিত হয়। এখন এটি আর shell নয় — এটি python।</div></div>

<div class="callout info"><span class="co-icon">⏱️</span><div><strong>ধাপ ৩ — Scheduler (দরজা ৩):</strong><br>
python process ready queue-তে যায়। Scheduler এটিকে CPU সময় দেয় — Round Robin বা MLFQ। time quantum শেষ হলে context switch — অন্য process পায়।</div></div>

<div class="callout info"><span class="co-icon">🧠</span><div><strong>ধাপ ৪ — Memory (দরজা ৬):</strong><br>
python-এর code, data, stack-এর জন্য virtual memory বরাদ্দ হয়। page table তৈরি হয় — virtual address → physical frame। TLB cache lookup দ্রুত করে।</div></div>

<div class="callout info"><span class="co-icon">🧵</span><div><strong>ধাপ ৫ — Threads (দরজা ২):</strong><br>
python interpreter একটি main thread চালু করে। যদি multi-threaded কোড থাকে — আরও thread তৈরি হয়, একই মেমোরি ভাগ করে।</div></div>

<div class="callout info"><span class="co-icon">🔐</span><div><strong>ধাপ ৬ — File I/O (দরজা ৭ + ৮):</strong><br>
python "hello.py" খোলে — open() syscall। filesystem inode খুঁজে বের করে, file descriptor দেয়। read() ডিস্ক থেকে ডেটা আনে — DMA দিয়ে, CPU ছাড়া।</div></div>

<div class="callout info"><span class="co-icon">🌐</span><div><strong>ধাপ ৭ — Network (Book ৩৭):</strong><br>
যদি python একটি HTTP request করে — socket() syscall। TCP handshake, TLS, DNS lookup — সব এই প্রক্রিয়া থেকে। OS প্রতিটি ধাপ পরিচালনা করে।</div></div>

<div class="callout info"><span class="co-icon">🐳</span><div><strong>ধাপ ৮ — Container (দরজা ৯):</strong><br>
যদি python একটি Docker container-এ চলে — namespace তাকে বিচ্ছিন্ন রাখে, cgroup সম্পদ সীমিত রাখে। কিন্তু ভেতরে প্রক্রিয়া একই — fork, exec, schedule, memory, file, I/O।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">OS subsystems</div></div>
<div class="stat-card"><div class="sc-num">৫+</div><div class="sc-label">syscalls</div></div>
<div class="stat-card"><div class="sc-num">~ms</div><div class="sc-label">fork থেকে exec</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">প্রতি সেকেন্ডে</div></div>
</div>

<div class="callout info"><span class="co-icon">📡</span><div><strong>একটি fork() কলের দৃষ্টিকোণ থেকে:</strong><br>
তুমি (fork) shell-এ জন্ম নাও → PCB পাও → memory পাও → exec-এ python হও → scheduler তোমায় CPU দেয় → file খোলো → I/O করো → output দেখাও → exit। এই পুরো জীবনচক্র মাত্র কয়েক সেকেন্ড। কিন্তু প্রতিটি মুহূর্তে নয়টি দরজা কাজ করছে — একসাথে, নিরবচ্ছিন্নভাবে।</div></div>

<div class="verse">الَّذِي خَلَقَ فَسَوَّىٰ ۝ وَالَّذِي قَدَّرَ فَهَدَىٰ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"যিনি সৃষ্টি করেছেন ও সুসম্পন্ন করেছেন। যিনি নির্ধারণ করেছেন ও পথ দেখিয়েছেন।" — কুরআন ৮৭:২-৩</div>

<p class="scene-setting">এই আয়াত সৃষ্টি ও সুসম্পন্ন করার কথা বলে। OS-ও তেমন — একটি প্রোগ্রামকে সৃষ্টি করে (process), সুসম্পন্ন করে (memory, file, I/O), নির্ধারণ করে (scheduling), পথ দেখায় (execution)। প্রতিটি প্রসেসের একটি জীবনচক্র — জন্ম থেকে মৃত্যু। OS সেই চক্রের অভিভাবক — নীরবে, নিরবচ্ছিন্নভাবে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ২ (DSA) — scheduling algorithm। Book ৪ (সিস্টেম ডিজাইন) — server architecture। Book ২২ (CS Ocean) — OS overview। Book ৩৫ (ডিস্ট্রিবিউটেড) — multi-machine। Book ৩৬ (DL Architecture) — GPU computing। Book ৩৭ (Networks) — network syscall। এই বই সবার ভিত্তি — কম্পিউটারের সবচেয়ে কাছের স্তর।</div></div>

<div class="checklist">
<li>📊 <code>ps aux</code> বা <code>top</code> — চলমান প্রসেস দেখো</li>
<li>📊 <code>htop</code> — interactive process viewer</li>
<li>🔍 <code>strace python hello.py</code> — প্রতিটি syscall দেখো</li>
<li>🔍 <code>lsof -p PID</code> — কোন process কোন file খুলে রেখেছে</li>
<li>🐳 <code>docker run -it python python hello.py</code> — container-এ চালাও</li>
<li>📖 "Operating Systems: Three Easy Pieces" (OSTEP) — free online textbook</li>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">fork() Journey: Through All OS Subsystems</text>
  <rect x="220" y="45" width="140" height="35" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="63" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">fork() called</text>
  <text x="290" y="75" text-anchor="middle" fill="#94a3b8" font-size="10">syscall #57</text>
  <rect x="20" y="105" width="100" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="70" y="122" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Door 1</text>
  <text x="70" y="135" text-anchor="middle" fill="#86efac" font-size="10">PCB created</text>
  <rect x="130" y="105" width="100" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="180" y="122" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Door 2</text>
  <text x="180" y="135" text-anchor="middle" fill="#86efac" font-size="10">Thread copied</text>
  <rect x="240" y="105" width="100" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="290" y="122" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Door 3</text>
  <text x="290" y="135" text-anchor="middle" fill="#86efac" font-size="10">Added to scheduler</text>
  <rect x="350" y="105" width="100" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="400" y="122" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Door 4</text>
  <text x="400" y="135" text-anchor="middle" fill="#86efac" font-size="10">COW semaphore</text>
  <rect x="460" y="105" width="100" height="40" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="510" y="122" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">Door 5</text>
  <text x="510" y="135" text-anchor="middle" fill="#fde68a" font-size="10">Deadlock check</text>
  <rect x="75" y="165" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="125" y="182" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">Door 6</text>
  <text x="125" y="195" text-anchor="middle" fill="#bae6fd" font-size="10">VM: COW pages</text>
  <rect x="185" y="165" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="235" y="182" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">Door 7</text>
  <text x="235" y="195" text-anchor="middle" fill="#bae6fd" font-size="10">File descriptors</text>
  <rect x="295" y="165" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="345" y="182" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">Door 8</text>
  <text x="345" y="195" text-anchor="middle" fill="#bae6fd" font-size="10">I/O context</text>
  <rect x="405" y="165" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="455" y="182" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">Door 9</text>
  <text x="455" y="195" text-anchor="middle" fill="#bae6fd" font-size="10">cgroup inherited</text>
  <rect x="190" y="230" width="200" height="35" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="253" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Child process ALIVE! 🎉</text>
  <line x1="290" y1="80" x2="70" y2="105" stroke="#475569" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="290" y1="80" x2="510" y2="105" stroke="#475569" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="70" y1="145" x2="125" y2="165" stroke="#475569" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="510" y1="145" x2="455" y2="165" stroke="#475569" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="290" y1="205" x2="290" y2="230" stroke="#22c55e" stroke-width="2" marker-end="url(#arrJ)"/>
  <defs><marker id="arrJ" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/></marker></defs>
</svg>
</div>
<div class="svg-caption">চিত্র: একটি fork() call নয়টি OS subsystem-কে স্পর্শ করে। প্রতিটি দরজা এই যাত্রায় অংশ নেয়।</div>

<div class="code-block">— Full fork() Journey: strace দিয়ে দেখো —

  # fork() system call trace:
  $ strace -f bash -c 'ls'

  # প্রতিটি syscall দেখো:
  clone(flags=CLONE_CHILD_CLEARTID|SIGCHLD) = 1235
  #                    ↑ Door 1-2: process+thread created
  mmap(NULL, 4096, PROT_READ|PROT_WRITE) = 0x7f...
  #                    ↑ Door 6: virtual memory allocated
  openat(AT_FDCWD, ".", O_RDONLY|O_DIRECTORY) = 3
  #                    ↑ Door 7: file system
  getdents64(3, ...)  = 512
  #                    ↑ Door 8: I/O (directory read)
  write(1, "file1.txt\nfile2.py\n...", 42) = 42
  #                    ↑ Door 8: I/O (stdout write)
  close(3)             = 0
  exit_group(0)        = ?
  #                    ↑ Door 1: terminated

  # Docker-এ fork:
  $ docker run --rm python python -c "import os; print(os.getpid())"
  1  # container-এ PID 1! (Door 9: namespace isolation)

  # সব একসাথে:
  # fork → PCB → thread → schedule → memory
  #      → file → I/O → container → ALIVE</div>

<div class="secret-box">🖥️ <strong>যন্ত্রের আত্মা = নয়টি দরজার সমষ্টি।</strong> প্রসেস (দরজা ১) → থ্রেড (দরজা ২) → শিডিউলিং (দরজা ৩) → সিঙ্ক্রোনাইজেশন (দরজা ৪) → ডেডলক (দরজা ৫) → মেমোরি (দরজা ৬) → ফাইল সিস্টেম (দরজা ৭) → I/O (দরজা ৮) → কন্টেইনার (দরজা ৯)। তুমি এখন জানো কম্পিউটারের ভেতরে কী ঘটে — একটি প্রোগ্রাম থেকে একটি চলমান প্রসেস পর্যন্ত। Dijkstra-এর semaphore থেকে Docker-এর container — ৬০ বছরের যাত্রা। এবং তুমি এখন প্রতিটি ধাপ বোঝো। এটাই যন্ত্রের আত্মা — একটি নিষ্প্রাণ যন্ত্রে প্রাণ দানের শিল্প।</div>`,
  senior: {
    title: "One fork() Call's Complete Journey",
    body: `<table class="kv-table"><tr><th>ধাপ</th><th>Syscall</th><th>OS Subsystem</th></tr>
<tr><td class="hl">১. fork()</td><td>কপি তৈরি</td><td>Process management</td></tr>
<tr><td class="hl">২. exec()</td><td>নতুন প্রোগ্রাম</td><td>Process management</td></tr>
<tr><td class="hl">৩. schedule</td><td>CPU সময়</td><td>CPU scheduling</td></tr>
<tr><td class="hl">৪. mmap/brk</td><td>মেমোরি বরাদ্দ</td><td>Memory management</td></tr>
<tr><td class="hl">৫. open()</td><td>ফাইল খোলা</td><td>File system</td></tr>
<tr><td class="hl">৬. read()</td><td>ডেটা পড়া</td><td>I/O + DMA</td></tr>
<tr><td class="hl">৭. socket()</td><td>নেটওয়ার্ক</td><td>Network stack</td></tr>
<tr><td class="hl">৮. exit()</td><td>শেষ</td><td>Process cleanup</td></tr></table>
<p style="margin-top:1rem"><strong>মোট syscall:</strong> ৫+ | <strong>OS subsystems:</strong> ৯টি | <strong>সময়:</strong> মিলিসেকেন্ড</p>`
  }
});
