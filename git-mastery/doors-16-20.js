// ════════════════════════════════════════
// Book 61 · The Studio of Time — v2 Complete Reference (20 doors)
// সময়ের স্টুডিও · git-mastery · hue 38
// ════════════════════════════════════════

// ── DOOR 16 · ঠিকাদার হাবিবুরের ভাড়া-ঘর — Contractor Habibur's Rented Rooms ──
doors.push({
  num: 16,
  icon: "📦",
  color: "#fbbf24",
  name: "ঠিকাদার হাবিবুরের ভাড়া-ঘর",
  subtitle: "Contractor Habibur's Rented Rooms",
  tech: "submodule · add/status/update · ভাঙা-পথ মেরামত",
  spirit: "সনদ — ভাড়া ঘরের ঠিকানা লিখিত থাকে",
  secret: "বড় স্টুডিওর ভেতরে অন্যের স্টুডিও ভাড়া নেওয়া যায় (submodule): তোমার রিপোতে থাকে শুধু একটা লেখা সনদ — কোন রিপো, ঠিক কোন commit-এ; ভেতরের কোড নয়; তাই clone করলে ঘর খালি থাকে — submodule update --init দিয়ে চাবি দিতে হয়; আর ভাড়াটিয়া নিজের ঘরে কী করছে সেটা প্রধান-রিপোর status-এ সংকেত হিসেবে দেখা যায়।",
  recall: {
    q: "প্রজেক্টে একটা শেয়ার্ড লাইব্রেরি-রিপো নির্দিষ্ট commit-এ বসাতে হবে, যেন পুরো কোড কপি না করে সংস্করণ-নিয়ন্ত্রণ থাকে। কীভাবে যুক্ত করবে, নতুন ক্লোনে কেন ফাঁকা দেখায়, আর সেই ফাঁকা ভরাটের আদেশ?",
    qen: "You need a shared library repo pinned at an exact commit inside your project — version-controlled without copying the code. How to attach, why does a fresh clone look empty, and the fill command?",
    a: "যুক্ত: git submodule add https://…/lib.git libs/lib — .gitmodules ফাইলে URL+পথ লেখা পড়ে, আর প্রধান-রিপোর খাতায় এক বিশেষ এন্ট্রি (gitlink) বসে: 'এই পথে ওই রিপোর এই হ্যাশ'। ক্লোনে ফাঁকার কারণ: সনদ আসে, ভাড়াটিয়ার জিনিস আসে না — ভরাট: git submodule update --init --recursive। দৈনন্দিন: submodule-এর ভেতরে ঢুকে স্বাভাবিক Git (add/commit/push), তারপর প্রধান-রিপোতে ফিরে নতুন পিন কমিট করো (git status 'new commits' দেখাবে)। ভাঙা-পথ: clone পরে --init ভুলে গেলে ফাঁকা ফোল্ডার; submodule sync + update দিয়ে URL-বদলও মেলানো যায়।",
    aen: "Attach: git submodule add https://…/lib.git libs/lib — the .gitmodules file records URL+path, and the parent repo gets a special entry (gitlink): 'this path, that repo, this hash'. Fresh clones look empty because the CERTIFICATE arrives, not the tenant's furniture — fill with git submodule update --init --recursive. Daily work: cd inside, normal Git (add/commit/push), then back in the parent commit the new pin (git status shows 'new commits'). Broken paths: forgetting --init after clone leaves empty folders; submodule sync + update re-aligns after URL changes.",
    you: "git submodule add https://github.com/octocat/Hello-World.git tmp/hello 2>/dev/null; cat .gitmodules; git status --short | head -4; git submodule update --init --recursive; rm -rf .gitmodules tmp/hello && git rm --cached tmp/hello 2>/dev/null; true"
  },
  story: `<p class="scene-setting">ঠিকাদার হাবিবুর রহমান বড় বাড়ির মালিকদের এক সেবা দেন: বাড়ির ভেতরে ভাড়া-ঘর — কিন্তু তাঁর নিয়মে। মালিকের খাতায় (প্রধান-রিপো) ভাড়াটিয়ার জিনিসপত্র লেখা থাকে না — থাকে শুধু সনদ: 'দ্বিতীয় তলার ঘরটি অমুক রিপোর অমুক দশায়' (gitlink: রিপো+হ্যাশ)। বাড়ি কিনলে (clone) সনদ হাতে আসে, ঘর খালি — ভাড়াটিয়ার আসবাব আনতে হবে আলাদা করে (submodule update --init)। মালিক জিজ্ঞেস করলেন: ভাড়াটিয়া ঘরে কী ঘটাঘটি করছে জানব কীভাবে? হাবিবুর বললেন: আপনার খাতায় সংকেত আসবে — status-এ 'new commits' মানে ভাড়াটিয়া নতুন দশায় গেছে; চাইলে পিন আপডেট করে দিন, চাইলে পুরোনো দশাতেই রেখে দিন — নিয়ন্ত্রণ আপনার। তাঁর শেষ উপদেশ: ভাড়া-ঘরের দরজায় তালা দুই সেট — ভেতরের ঘরে ঢুকে কাজ করো, বেরিয়ে প্রধান-খাতায় নতুন সনদ-লাইন কমিট করতে ভুলো না।</p>
<p class="scene-setting en">Contractor Habibur Rahman offers big-house owners one service: rented rooms inside their house — by his rules. The owner's ledger (parent repo) does not list the tenant's furniture — only a certificate: 'the second-floor room, that repo, that exact state' (gitlink: repo+hash). Buy the house (clone) and you hold the certificate with an empty room — the tenant's furniture arrives separately (submodule update --init). The owner asked: how do I know what the tenant is doing? Habibur: your ledger gets signals — status shows 'new commits' meaning the tenant moved to a new state; update the pin or keep the old one — control is yours. His final advice: rented rooms have two locks — work inside, and never forget to commit the new certificate line in the parent ledger.</p>

<div class="code-block"># ভাড়া-ঘর যুক্ত করো:
git submodule add https://github.com/team/lib.git libs/lib
#   → .gitmodules (URL+পথ) + প্রধান-খাতায় gitlink এন্ট্রি
git commit -m "chore: lib সাবমডিউল যুক্ত"

# নতুন ক্লোনে ঘর ভরাট (সবচেয়ে ভুল-হওয়া ধাপ!):
git clone … && cd project
git submodule update --init --recursive
#   এক কমান্ডে ক্লোন-সহ: git clone --recurse-submodules …

# দৈনন্দিন:
cd libs/lib               # ভেতরে ঢুকো — স্বাভাবিক Git
git pull && git switch -c fix
# …কাজ… git add . && git commit && git push
cd ../..                  # প্রধানে ফেরো
git status                # modified: libs/lib (new commits)
git add libs/lib && git commit -m "chore: lib পিন আপডেট"

# ভাঙা-পথ মেরামত:
git submodule status               # -চিহ্ন = আন-ইনিশিয়ালাইজড
git submodule sync                 # URL বদলালে মেলাও
git submodule update --remote      # রিমোটের নতুন শাখা-মাথা টানো

# সাবমডিউল খোলা:
git submodule deinit libs/lib && git rm libs/lib</div>

<table class="kv-table">
<tr><th>কাজ</th><th>আদেশ</th><th>ছল</th></tr>
<tr><td class="hl">যুক্ত</td><td>submodule add URL path</td><td>সনদ + খালি ঘর</td></tr>
<tr><td class="hll">ভরাট</td><td>update --init --recursive</td><td>আসবাব আনা</td></tr>
<tr><td class="hl">পিন-বদল</td><td>ভেতরে কাজ → add path → commit</td><td>নতুন সনদ-লাইন</td></tr>
<tr><td class="hll">মেরামত</td><td>sync + update</td><td>URL/দশা মেলানো</td></tr>
</table>

<div class="diagram">
<div class="diag-title">ভাড়া-ঘরের সনদ — The Rented-Room Certificate</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar61d16" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker>
</defs>
<rect class="node" x="15" y="60" width="140" height="44" rx="10"/><text class="lbl" x="85" y="78">প্রধান-রিপো</text><text class="lbl-sm" x="85" y="94">খাতায় সনদ-লাইন (gitlink)</text>
<rect class="node-cyan" x="205" y="60" width="150" height="44" rx="10"/><text class="lbl-cyan" x="280" y="78">libs/lib ঘর</text><text class="lbl-sm" x="280" y="94">নির্দিষ্ট হ্যাশে পিন-দশা</text>
<rect class="node-hot" x="395" y="60" width="150" height="44" rx="10"/><text class="lbl-hot" x="470" y="78">lib রিপো</text><text class="lbl-sm" x="470" y="94">নিজস্ব ইতিহাস-প্রবাহ</text>
<line x1="155" y1="82" x2="201" y2="82" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d16)"/>
<line x1="355" y1="82" x2="391" y2="82" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d16)"/>
<rect class="cell" x="15" y="125" width="530" height="38" rx="8"/>
<text class="lbl-sm" x="280" y="141">clone → সনদ আসে, ঘর খালি; update --init → আসবাব; ভেতরের বদল → প্রধানে নতুন পিন-কমিট</text>
<text class="lbl-sm" x="280" y="158">⚠ সবচেয়ে ভুল-হওয়া ধাপ: ক্লোনের পরে --init ভুলে যাওয়া — ফাঁকা ফোল্ডার দেখে ভয়</text>
</svg>
<div class="diag-cap">সনদ-লাইন ছাড়া ভাড়া-ঘর অদৃশ্য; সনদ আপডেট ছাড়া ভাড়াটিয়ার অগ্রগতি প্রধান-খাতায় পৌঁছায় না।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ঠিকাদারের সতর্কতা:</strong> সাবমডিউল-প্রজেক্টে সহকর্মীর সবচেয়ে বড় বিভ্রান্তি ক্লোনের পর --init ভুলে যাওয়া — README-তে রীতি লেখো বা clone --recurse-submodules শেখাও। ভেতরের ঘরে detached HEAD-এ কাজ করলে commit হারানোর ঝুঁকি (দরজা ৩-এর পাঠ) — আগে শাখা ধরো। আর .gitmodules কমিট করতে ভুলো না — ওটাই সনদের মূল লেখা; CI-তেও --recurse মনে রাখো। মনে রেখো: ভাড়া-ঘর শক্তিশালী কিন্তু জটিল — সত্যিকার দরকার ছাড়া বাগড়াবেজা (subtree/প্যাকেজ-ম্যানেজার) সহজ।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The contractor's caution:</strong> the biggest team trap is forgetting --init after clone — write the ritual in the README or teach clone --recurse-submodules. Working on a detached HEAD inside the room risks losing commits (Door 3's lesson) — grab a branch first. And never forget to commit .gitmodules — it is the certificate's core text; CI needs --recurse too. Remember: rented rooms are powerful but fussy — without real need, vendoring/subtree/package managers are simpler.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খালি-ঘরের মালিক</div>ক্লোনে ফাঁকা ফোল্ডার দেখে বিভ্রান্তি · ভেতরে detached-এ কাজ · পিন-কমিট ভুলে যাওয়া · .gitmodules আনকমিটেড</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ হাবিবুরের রীতি</div>--recurse-submodules ক্লোন · ভেতরে শাখা ধরে কাজ · প্রধানে পিন-আপডেট কমিট · deinit+rm দিয়ে পরিচ্ছন্ন বিদায়</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">submodule add</div><div class="sc-label">সনদ-সহ ভাড়া-ঘর</div></div>
<div class="stat-card"><div class="sc-num">--init --recursive</div><div class="sc-label">খালি ঘর ভরাট</div></div>
<div class="stat-card"><div class="sc-num">gitlink</div><div class="sc-label">প্রধান-খাতার সনদ-লাইন</div></div>
<div class="stat-card"><div class="sc-num">sync + update</div><div class="sc-label">ভাঙা-পথ মেরামত</div></div>
</div>

<p class="verse">সনদের পাঠ: ইসলামে ভাড়া-চুক্তি লিখিত হওয়া উত্তম (আকদ-এর দলিল); হাবিবুরের সনদও: মৌখিক 'কাছের রিপো' নয় — URL, পথ, দশা লেখা; লিখিত সনদ ঝগড়া কমায়, পিন-দশা নিশ্চিত করে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📦 সনদ: submodule add; ক্লোনে --init --recursive; ভেতরে শাখা, বাইরে পিন-কমিট; মেরামত sync+update।<br>কারণ: ভাড়া-ঘরের নিয়ন্ত্রণ সনদে — সনদ না কমিট করলে সবাই অন্ধ।</div></div>`,
  senior: {
    title: "ভাড়া-ঘর খাতা — The Rented-Room Ledger",
    body: `<ul class="checklist">
<li>যুক্ত: <strong>git submodule add &lt;url&gt; &lt;path&gt;</strong>; <strong>.gitmodules</strong> কমিট বাধ্যতামূলক।</li>
<li>ক্লোন-পরে: <strong>submodule update --init --recursive</strong> (বা --recurse-submodules)।</li>
<li>ভেতরে <strong>শাখা ধরে</strong> কাজ; প্রধানে <strong>পিন-আপডেট কমিট</strong>।</li>
<li>মেরামত: <strong>submodule sync</strong> + <strong>update</strong>; status-এ <strong>-</strong> চিহ্ন = আন-ইনিট।</li>
<li>বিদায়: <strong>deinit + git rm</strong>; সত্যিকার দরকার না হলে সহজ পথ বেছে নাও।</li>
</ul>`
  }
});

// ── DOOR 17 · ড. রাফিদার বাছাই-কক্ষ — Dr. Rafida's Selection Room ──
doors.push({
  num: 17,
  icon: "🎯",
  color: "#fbbf24",
  name: "ড. রাফিদার বাছাই-কক্ষ",
  subtitle: "Dr. Rafida's Selection Room",
  tech: "sparse-checkout · .gitattributes · LFS-ভূমিকা · আংশিক ক্লোন",
  spirit: "ইখতিয়ার — সব নয়, যা দরকার",
  secret: "দৈত্যাকার রিপো মানেই পুরোটা টানা নয়: sparse-checkout ফোল্ডার-বাছাই করে ডিস্কে শুধু দরকারি অংশ নামায়, আংশিক-ক্লোন (filter) ইতিহাসের ভার না নিয়ে কাজ-চালু করে; আর .gitattributes ঠিক করে কোন ফাইল কী জাতের ব্যবহার পাবে — লাইন-শেষ (lf/crlf), ডিফ-জাত, বা LFS-এর বড়-ফাইল রাস্তা।",
  recall: {
    q: "১০GB মনোরিপোর মাত্র apps/web ফোল্ডারটা দরকার — পুরোটা নামাতে ইচ্ছুক নও। দুই স্তরের সমাধান বলো (ফোল্ডার-ছাঁকনি + ইতিহাস-ভার কমানো), আর Windows/Linux দলে লাইন-শেষের যুদ্ধ থামানোর ফাইল-নিয়ম?",
    qen: "You need only apps/web from a 10GB monorepo. Two-level solution (folder filter + lighter history), and the file-rule that stops the line-ending war between Windows/Linux teams?",
    a: "ফোল্ডার-ছাঁকনি: git sparse-checkout set apps/web — ডিস্কে শুধু ওই পথ; বাকি রিপো-ইতিহাস পূর্ণ থাকে, চাইলে পরে আরও পথ যোগ (sparse-checkout add)। ইতিহাস-ভার কমানো: git clone --filter=blob:none (আংশিক-ক্লোন; blob প্রয়োজনমতো আসে) — দুটো মিলিয়ে দৈত্য-রিপোও হালকা। লাইন-শেষ: .gitattributes ফাইলে * text=auto + *.sh text eol=lf + *.bat text eol=crlf — রিপোর ভেতরে নিয়ম কমিট হয়, সবার মেশিনে একই শান্তি। বড় বাইনারি (ভিডিও/ডেটাসেট): .gitattributes-ই LFS-এর রাস্তা ঘোষণা করে (*.psd filter=lfs) — পয়েন্টার থাকে Git-এ, ভার থাকে LFS-এ।",
    aen: "Folder filter: git sparse-checkout set apps/web — only that path on disk; full history remains, add more paths later (sparse-checkout add). Lighter history: git clone --filter=blob:none (partial clone; blobs arrive on demand) — together they tame giant repos. Line endings: .gitattributes with * text=auto + *.sh text eol=lf + *.bat text eol=crlf — rules committed IN the repo, identical peace on every machine. Big binaries (video/datasets): .gitattributes also declares the LFS road (*.psd filter=lfs) — pointers in Git, weight in LFS.",
    you: "git clone --filter=blob:none --sparse https://github.com/octocat/Hello-World.git /tmp/hw && cd /tmp/hw && git sparse-checkout set src 2>/dev/null; ls; git sparse-checkout list 2>/dev/null; cd / && rm -rf /tmp/hw"
  },
  story: `<p class="scene-setting">ড. রাফিদা সুলতানা বড় আর্কাইভ-গবেষণার প্রধান — তাঁর নীতি: গবেষক পুরো ভাণ্ডার বইছাড়া বইনা, যে তাক দরকার সেটাই খোলে। দৈত্যাকার মনোরিপো এসেছিল তাঁর দপ্তরে — ১০ গিগাবাইট, যার মাত্র এক কোণ apps/web দরকার। তিনি দুই স্তরে কাজ সাঙ্গ করলেন: প্রথমে বাছাই-কক্ষ (sparse-checkout): ডিস্কে নামবে শুধু নির্বাচিত তাক — ইতিহাস-খাতা পুরোটাই থাকে, তাই যেকোনো সময় আরও তাক খোলা যায়; তারপর ভার-হ্রাস (filter=blob:none): পুরোনো ছবির কাচ (blob) ধার না নিয়ে কাজ শুরু — দরকার পড়লে তখন আসে। পাশের টেবিলে তাঁর সহকর্মী Windows-দলের সাথে লাইন-শেষের যুদ্ধে ক্লান্ত — রাফিদা এক ফাইলে শান্তি লিখে দিলেন (.gitattributes): জাদুঘরের নিয়ম মেশিনে নয়, রিপোতে বাস করবে; সবাই ক্লোন করলেই শান্তি ক্লোন হয়। বড় বাইনারির জন্য তাঁর শেষ পাঠ: ভারী জিনিস আলমারিতে (LFS) থাকুক, মূল ভাণ্ডারে শুধু ঠিকানা-কার্ড।</p>
<p class="scene-setting en">Dr. Rafida Sultana heads the great archive-research desk — her principle: a researcher never empties the whole vault, only opens the needed shelf. A giant monorepo arrived — 10GB, of which one corner (apps/web) mattered. She finished in two layers: first the selection room (sparse-checkout) — only chosen shelves land on disk, the history ledger stays whole so more shelves can open anytime; then weight-loss (filter=blob:none) — start work without borrowing every old picture-glass, fetch on demand. At the next desk a colleague was exhausted by the line-ending war with the Windows team — Rafida wrote peace into one file (.gitattributes): rules live in the repo, not the machine; cloning clones the peace too. For big binaries her last lesson: heavy things belong in the cabinet (LFS), the main vault keeps only address-cards.</p>

<div class="code-block"># বাছাই-কক্ষ (শুধু দরকারি তাক):
git clone --sparse https://github.com/big/monorepo.git
cd monorepo
git sparse-checkout set apps/web       # শুধু এই পথ ডিস্কে
git sparse-checkout add packages/core  # পরে আরও যোগ
git sparse-checkout list               # চলতি নির্বাচন
git sparse-checkout disable            # পুরোটা ফিরিয়ে আনো

# ভার-হ্রাস (আংশিক ক্লোন — ইতিহাসের কাচ ধারে):
git clone --filter=blob:none URL       # ট্রি+কমিট এখন, blob প্রয়োজনে
#   গভীরতা-সীমা চাইলে: --depth 1 (shallow) — কিন্তু ইতিহাস-অপারেশন ক্ষত

# লাইন-শেষের শান্তি-নামা (.gitattributes — রিপোতে কমিট হয়):
cat > .gitattributes <<'EOF'
* text=auto
*.sh  text eol=lf
*.bat text eol=crlf
*.png binary
EOF
git add .gitattributes && git commit -m "chore: line-ending peace"

# বড়-ফাইলের রাস্তা (LFS-ভূমিকা):
git lfs install
git lfs track "*.psd" "*.mp4"          # .gitattributes-এ লেখা পড়ে
git add .gitattributes
#   এখন .psd কমিট করলে Git-এ পয়েন্টার, ভার LFS-ভাণ্ডারে</div>

<table class="kv-table">
<tr><th>যন্ত্র</th><th>আদেশ</th><th>কী বাঁচায়</th></tr>
<tr><td class="hl">sparse-checkout</td><td>set / add / disable</td><td>ডিস্ক-জায়গা (শুধু দরকারি পথ)</td></tr>
<tr><td class="hll">আংশিক-ক্লোন</td><td>clone --filter=blob:none</td><td>প্রথম-নামার ভার</td></tr>
<tr><td class="hl">.gitattributes</td><td>* text=auto …</td><td>লাইন-শেষের যুদ্ধ</td></tr>
<tr><td class="hll">LFS track</td><td>git lfs track "*.psd"</td><td>বড়-বাইনারির স্ফীতি</td></tr>
</table>

<div class="diagram">
<div class="diag-title">বাছাই-কক্ষের দুই স্তর — The Selection Room's Two Layers</div>
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar61d17" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker>
</defs>
<rect class="node" x="15" y="63" width="130" height="44" rx="10"/><text class="lbl" x="80" y="81">দৈত্য-রিপো</text><text class="lbl-sm" x="80" y="97">10GB মনোরিপো</text>
<rect class="node-cyan" x="195" y="25" width="160" height="40" rx="9"/><text class="lbl-cyan" x="275" y="43">sparse-checkout</text><text class="lbl-sm" x="275" y="59">ডিস্কে শুধু apps/web</text>
<rect class="node-cyan" x="195" y="105" width="160" height="40" rx="9"/><text class="lbl-cyan" x="275" y="123">--filter=blob:none</text><text class="lbl-sm" x="275" y="139">কাচ প্রয়োজনে-আসে</text>
<rect class="node-leaf" x="405" y="63" width="140" height="44" rx="10"/><text class="lbl-leaf" x="475" y="81">হালকা কর্মক্ষেত্র</text><text class="lbl-sm" x="475" y="97">সম্পূর্ণ ইতিহাস-সহ</text>
<line x1="145" y1="78" x2="191" y2="48" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d17)"/>
<line x1="145" y1="95" x2="191" y2="122" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d17)"/>
<line x1="355" y1="45" x2="401" y2="78" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d17)"/>
<line x1="355" y1="125" x2="401" y2="92" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d17)"/>
<rect class="cell" x="15" y="150" width="530" height="16" rx="7"/><text class="lbl-sm" x="280" y="162">.gitattributes = রিপোর ভেতরের নিয়মনামা (eol·binary·lfs) — মেশিনের রহস্য নয়</text>
</svg>
<div class="diag-cap">তাক-বাছাই + ভার-হ্রাস = দৈত্য-রিপোও কাজের মাপে; নিয়মনামা রিপোতে, মেশিনে নয়।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গবেষকের সতর্কতা:</strong> sparse+filter দারুণ, কিন্তু সীমা জেনে নাও — আংশিক-ক্লোনে অফলাইন হলে অনুপস্থিত blob পড়া যাবে না; নেটওয়ার্ক-নির্ভর কাজে সাবধান। --depth 1 ইতিহাস-কাজ (blame/log গভীর) ভাঙে — স্থায়ী সমাধান নয়, টেম্পোরারি টানা। .gitattributes একবার কমিট হলে সবাই বাধ্য — পুরোনো ফাইল renormalize করতে পারো (add --renormalize)। আর LFS সার্ভার-সাপেক্ষ: রিমোট LFS না জানলে push আটকাবে — টিমের সাথে আগে ঠিক করো।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The researcher's caution:</strong> sparse+filter are great, but know the limits — in a partial clone, offline work cannot read absent blobs; network-dependent workflows beware. --depth 1 breaks deep history work (blame/log) — a temporary pull, not a permanent state. Once .gitattributes is committed it binds everyone — renormalize old files with add --renormalize if needed. And LFS is server-dependent: a remote without LFS blocks pushes — agree with the team first.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ পুরো-ভাণ্ডার বইছাড়া</div>১০GB পুরোটা নামিয়ে ডিস্ক-শেষ · লাইন-শেষে প্রতি-মেশিনে যুদ্ধ · ভিডিও সরাসরি কমিট · CRLF-এর রহস্য-কমিট</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ রাফিদার রীতি</div>sparse+filter-এ দরকারি অংশ · .gitattributes-শান্তি কমিট · বড়-ফাইল LFS-ট্র্যাক · সীমা জেনে ব্যবহার</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">sparse set</div><div class="sc-label">শুধু দরকারি তাক</div></div>
<div class="stat-card"><div class="sc-num">--filter=blob:none</div><div class="sc-label">কাচ ধারে-আসে</div></div>
<div class="stat-card"><div class="sc-num">.gitattributes</div><div class="sc-label">রিপোর নিয়মনামা</div></div>
<div class="stat-card"><div class="sc-num">lfs track</div><div class="sc-label">বড়-ফাইল আলমারি-পথ</div></div>
</div>

<p class="verse">ইখতিয়ারের পাঠ: কুরআনে বলে আল্লাহ মানুষকে সামর্থ্য-অনুযায়ী বহন করতে বলেছেন (২:২৮৬) — সব একসাথে নয়; গবেষকও সেভাবে: যা ধারণ করা যায় তা-ই ডিস্কে, বাকি ভাণ্ডারে সংরক্ষিত। এবং নিয়ম লিখিত হোক যেখানে সবাই দেখে — রিপোর ভেতরে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🎯 sparse set পথ-বাছাই, --filter ভার-হ্রাস; .gitattributes-এ eol/binary/lfs নিয়ম — রিপোতে কমিট।<br>কারণ: দরকার যতটুকু, ডিস্ক ততটুকু — নিয়ম যেখানে সবার চোখে।</div></div>`,
  senior: {
    title: "বাছাই-কক্ষের খাতা — The Selection-Room Ledger",
    body: `<ul class="checklist">
<li>মনোরিপো: <strong>sparse-checkout set &lt;পথ&gt;</strong>; পরে <strong>add</strong> দিয়ে বাড়াও।</li>
<li>প্রথম-নামা হালকা: <strong>clone --filter=blob:none</strong> (অফলাইন-সীমা মনে রাখো)।</li>
<li>লাইন-শেষ: <strong>.gitattributes</strong> — <em>* text=auto</em> + জাত-ভেদ নিয়ম; কমিট করো।</li>
<li>বড়-বাইনারি: <strong>git lfs track "*.{psd,mp4}"</strong> — পয়েন্টার Git-এ।</li>
<li><strong>--depth 1</strong> টেম্পোরারি — গভীর ইতিহাস-কাজে নয়।</li>
</ul>`
  }
});

// ── DOOR 18 · ক্যাপ্টেন রাশেদের হাব-গুদাম — Captain Rashid's Hub-Warehouse ──
doors.push({
  num: 18,
  icon: "🛰️",
  color: "#fbbf24",
  name: "ক্যাপ্টেন রাশেদের হাব-গুদাম",
  subtitle: "Captain Rashid's Hub-Warehouse",
  tech: "clone --bare · mirror · push --mirror · সার্ভার-পাশ",
  spirit: "উস্তাদ-শাগরেদ — কেন্দ্র হয়ে যাও",
  secret: "যে গুদামে কেউ দাঁড়িয়ে কাজ করে না, সে হলো হাব: bare রিপো = শুধু .git-এর ভেতর-ঘর (কর্মক্ষেত্র-হীন) — এটাই সার্ভারে থাকে, সবাই সেখান থেকে টানে-ঠেলে; mirror = সব শাখা-ট্যাগ-নোট সহ পূর্ণ প্রতিচ্ছবি — স্থানান্তর ও ব্যাকআপের রাজপথ; প্রত্যেক ক্লোনই পূর্ণ ভাণ্ডার, তবু কেন্দ্র-গুদাম দরকার — সংযোগ-বিন্দু হিসেবে।",
  recall: {
    q: "নিজের সার্ভারে Git-হোস্টিং করতে চাও (GitHub ছাড়া): সার্ভারে কী বসবে, কেন সেখানে সরাসরি কাজ করা হয় না, আর পুরো রিপো অন্য হোস্টে সরাতে কোন ক্লোন-জাত?",
    qen: "Self-host Git (no GitHub): what sits on the server, why does nobody work directly there, and which clone type moves a whole repo to another host?",
    a: "সার্ভারে bare রিপো: git init --bare /srv/git/project.git — ভেতর-ঘর (objects/refs/config) আছে, কর্মক্ষেত্র-ফাইল নেই; কারণ সার্ভারে কেউ এডিট করে না, সবাই ক্লোন করে নিজের মেশিনে কাজ করে আর push/pull করে — কেন্দ্র শুধু সংযোগ-বিন্দু (এজন্যই bare-এ default branch-ও 'checks out' হয় না)। ক্লোন-সংযোগ: git clone user@server:/srv/git/project.git (ssh) বা https://…। পূর্ণ-স্থানান্তর: git clone --mirror URL — সব রেফ (শাখা/ট্যাগ/নোট/রিমোট-ট্র্যাকিংসহ) পেতে পাও; নতুন হোস্টে: cd mirror && git push --mirror নতুন-URL। প্রতিদ্বন্দ্বী-সতর্কতা: --mirror push গন্তব্যের সবকিছু মুছে মেলায় — ভুল জায়গায় চালালে সেই রিপোর ইতিহাস ওঠানো যায় না।",
    aen: "Server gets a bare repo: git init --bare /srv/git/project.git — inner room (objects/refs/config) without working files; nobody edits ON the server, everyone clones locally and pushes/pulls — the center is only a junction (that's why bare repos check out nothing). Connect: git clone user@server:/srv/git/project.git (ssh) or https. Full migration: git clone --mirror URL — you receive ALL refs (branches/tags/notes/remote-tracking); to the new host: cd mirror && git push --mirror new-URL. The rival-caution: --mirror push ERASES-and-matches the destination — run it at the wrong place and that repo's history is gone.",
    you: "git clone --mirror https://github.com/octocat/Hello-World.git /tmp/hw-mirror && ls /tmp/hw-mirror | head -5 && git -C /tmp/hw-mirror remote -v && rm -rf /tmp/hw-mirror"
  },
  story: `<p class="scene-setting">ক্যাপ্টেন রাশেদ সমুদ্র-বাণিজ্যের হাব-গুদামের মালিক — তাঁর গুদামে কেউ দাঁড়িয়ে পণ্য গোছায় না; আসে শুধু মালামালের খাতা-আলমারি (bare রিপো: ইতিহাস-ভাণ্ডার আছে, দোকান-কাউন্টার নেই)। ব্যবসায়ীরা প্রত্যেকে নিজের দোকানে (নিজের ক্লোনে) মাল গোছায়, তারপর হাবে পাঠায় (push) বা হাব থেকে টানে (pull) — কেন্দ্র শুধু মিলন-স্থল। একদিন এক ব্যবসায়ী জিজ্ঞেস করল: ক্যাপ্টেন, আমার পুরো ব্যবসা অন্য দ্বীপে সরাব — দ্বীপের প্রতিটা খাতা, প্রতিটা ফিতা, এমনকি পুরোনো ঠিকানাখানিও (সব রেফ)। রাশেদ পূর্ণ-প্রতিচ্ছবির (clone --mirror) নৌকা পাঠালেন — সব-সহ প্রতিরূপ; নতুন দ্বীপে পৌঁছে push --mirror দিলে ওপাশে হুবহু একই ব্যবসা দাঁড়ায়। তারপর তাঁর সতর্কবার্তা: প্রতিচ্ছবি-ঠেলা একমুখী রাজপথ — গন্তব্যে যা নেই সব মুছে যাবে; ভুল দ্বীপে পাঠালে সেই দ্বীপের নিজের ব্যবসাই মুছে যাবে, সাবধানে সাইন করো।</p>
<p class="scene-setting en">Captain Rashid owns the sea-trade hub warehouse — nobody sorts goods standing inside it; it holds only the cargo ledgers and cabinets (a bare repo: history vault, no shop counter). Merchants sort goods in their own shops (own clones), then push to the hub or pull from it — the center is only the meeting point. One merchant asked: Captain, I must move my whole trade to another island — every ledger, every ribbon, even the old address-book (all refs). Rashid sent the full-mirror boat (clone --mirror) — a replica with everything; arriving at the new island, push --mirror raises an identical trade there. Then his warning: a mirror-push is a one-way royal road — everything absent at the destination gets erased; sign for the right island carefully, or you erase that island's own trade.</p>

<div class="code-block"># নিজের সার্ভারে Git-হোস্ট (bare — কর্মক্ষেত্রহীন):
ssh user@server
git init --bare /srv/git/project.git    # .git-এর ভেতর-ঘর একা
#   (hooks/ সজীব — দরজা ১২-এর ঘণ্টা সার্ভারেও বসে!)

# সংযোগ (ব্যবসায়ীদের দোকান-পথ):
git clone user@server:/srv/git/project.git
git clone https://server/git/project.git
git remote add origin user@server:/srv/git/project.git

# push-এর নিয়ম bare-গুদামে:
#   যে শাখা push হয়, সে-ই রেফ বসে — checkout-বিভ্রান্তি নেই

# পূর্ণ-স্থানান্তর (প্রতিচ্ছবি-নৌকা):
git clone --mirror https://old.example/proj.git
cd proj.git
git push --mirror https://new.example/proj.git
#   সব রেফ: শাখা+ট্যাগ+নোট+remote-tracking — হুবহু

# ব্যাকআপ-রীতি:
git clone --mirror … /backup/proj-$(date +%F).git
#   প্রতিচ্ছবিতে পরে: git -C /backup/proj.git remote update

# GitHub→GitLab স্থানান্তরে খেয়াল:
#   • --mirror push গন্তব্য পরিষ্কার করে বসে — খালি রিপো লাগবে
#   • LFS-থাকলে আলাদা স্থানান্তর (lfs fetch --all)
#   • রিমোট-নাম আবার origin করে নাও</div>

<table class="kv-table">
<tr><th>জাত</th><th>আদেশ</th><th>কাজ</th></tr>
<tr><td class="hl">bare</td><td>init --bare / clone --bare</td><td>সার্ভার-গুদাম (কাউন্টারহীন)</td></tr>
<tr><td class="hll">mirror</td><td>clone --mirror</td><td>সব-রেফ পূর্ণ প্রতিচ্ছবি</td></tr>
<tr><td class="hl">push --mirror</td><td>push --mirror URL</td><td>গন্তব্য হুবহু-মেলানো (সাবধান!)</td></tr>
<tr><td class="hll">remote update</td><td>প্রতিচ্ছবিতে</td><td>ব্যাকআপ তাজা</td></tr>
</table>

<div class="diagram">
<div class="diag-title">হাব-গুদামের বিন্যাস — The Hub-Warehouse Layout</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar61d18" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker>
</defs>
<rect class="node-hot" x="215" y="60" width="150" height="48" rx="10"/><text class="lbl-hot" x="290" y="78">bare গুদাম</text><text class="lbl-sm" x="290" y="94">/srv/git/proj.git</text>
<rect class="node" x="15" y="60" width="130" height="44" rx="10"/><text class="lbl" x="80" y="78">তোমার ক্লোন</text><text class="lbl-sm" x="80" y="94">কাজের দোকান</text>
<rect class="node" x="435" y="60" width="110" height="44" rx="10"/><text class="lbl" x="490" y="78">সহকর্মী</text><text class="lbl-sm" x="490" y="94">নিজের ক্লোন</text>
<line x1="145" y1="76" x2="211" y2="76" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d18)"/>
<line x1="365" y1="76" x2="431" y2="76" stroke="#f59e0b" stroke-width="3" fill="none" marker-start="url(#ar61d18)"/>
<line x1="145" y1="94" x2="211" y2="94" stroke="#f59e0b" stroke-width="3" fill="none" marker-start="url(#ar61d18)"/>
<line x1="365" y1="94" x2="431" y2="94" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d18)"/>
<rect class="cell" x="15" y="130" width="530" height="36" rx="8"/>
<text class="lbl-sm" x="280" y="146">bare = খাতা-আলমারি, কাউন্টার নেই — কেউ সেখানে কাজ করে না; সবাই ক্লোনে কাজ করে, push/pull-এ মিলে</text>
<text class="lbl-sm" x="280" y="160">স্থানান্তর: clone --mirror → push --mirror (গন্তব্য মুছে-বসে — সতর্ক!)</text>
</svg>
<div class="diag-cap">কেন্দ্রে খাতা, প্রান্তে কাজ — এই ভাগেই বিতরণ-স্বাস্থ্য; স্থানান্তরে প্রতিচ্ছবি-নৌকা।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ক্যাপ্টেনের সতর্কতা:</strong> push --mirror সবচেয়ে ধ্বংসাত্মক সম্ভাবনার আদেশগুলোর একটি — গন্তব্যের যা উৎসে নেই সব মুছে যায়; কখনো ভুল রিমোটের দিকে নয়, আগে remote -v পড়ে নাও। bare-রিপোতে কখনো সরাসরি কাজ (checkout/commit) কোরো না — সে কর্মক্ষেত্রহীন যন্ত্র; সার্ভার-হুক (post-receive → ডিপ্লয়) শক্তিশালী, তাই বিপজ্জনকও — স্ক্রিপ্ট যাচাই করে বসাও। LFS-এর ভার প্রতিচ্ছবি-নৌকায় আসে না স্বয়ংক্রিয় — lfs fetch --all আলাদা।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The captain's caution:</strong> push --mirror is among the most destructive commands possible — everything at the destination absent from the source is erased; never aim it at the wrong remote — read remote -v first. Never work directly inside a bare repo — it is a counterless machine; server hooks (post-receive → deploy) are powerful, hence dangerous — install scripts after review. LFS weight does not ride the mirror boat automatically — lfs fetch --all separately.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ কাউন্টার-সহ কেন্দ্র</div>সার্ভারে সাধারণ রিপো, সেখানেই কাজ · --mirror ভুল দিকে · bare-র রহস্য অজানা · ব্যাকআপ-নৌকা নেই</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ রাশেদের রীতি</div>সার্ভারে bare, কাজ ক্লোনে · স্থানান্তরে mirror→push --mirror (remote -v আগে) · তারিখ-সিলে প্রতিচ্ছবি-ব্যাকআপ</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">init --bare</div><div class="sc-label">কাউন্টারহীন কেন্দ্র</div></div>
<div class="stat-card"><div class="sc-num">clone --mirror</div><div class="sc-label">সব-রেফ প্রতিচ্ছবি</div></div>
<div class="stat-card"><div class="sc-num">push --mirror</div><div class="sc-label">গন্তব্য-মেলানো (সাবধান)</div></div>
<div class="stat-card"><div class="sc-num">post-receive</div><div class="sc-label">সার্ভার-ঘণ্টা → ডিপ্লয়</div></div>
</div>

<p class="verse">কেন্দ্রের পাঠ: হজরে কাবা মুসলমানের কেন্দ্র — সবাই সেদিকে ফিরে সালাত পড়ে, কেউ সেখানে বসবাস করে না; কেন্দ্রের কাজ দিক-দেখানো, কাজের জায়গা প্রত্যেকের নিজের। bare-গুদামও তাই: সংযোগ-বিন্দু, কর্মক্ষেত্র নয়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🛰️ সার্ভারে bare, কাজ ক্লোনে; স্থানান্তরে mirror→push --mirror (remote -v আগে!); bare-এ সরাসরি কাজ নিষেধ।<br>কারণ: কেন্দ্র সংযোগের, কাজ প্রান্তের — দুটো গুলিয়ে ফেললে দুই দিকই বিপদ।</div></div>`,
  senior: {
    title: "হাব-গুদামের খাতা — The Hub-Warehouse Ledger",
    body: `<ul class="checklist">
<li>সার্ভার: <strong>git init --bare</strong>; কেউ bare-এ সরাসরি কাজ করে না।</li>
<li>সংযোগ: <strong>clone user@server:/srv/git/x.git</strong> বা remote add।</li>
<li>স্থানান্তর: <strong>clone --mirror</strong> → <strong>push --mirror</strong> — আগে <strong>remote -v</strong>!</li>
<li>ব্যাকআপ: তারিখ-সিলে mirror + <strong>remote update</strong>; LFS আলাদা (<strong>lfs fetch --all</strong>)।</li>
<li>সার্ভার-হুক <strong>post-receive</strong> ডিপ্লয়ে শক্তিশালী — যাচাই করে বসাও।</li>
</ul>`
  }
});

// ── DOOR 19 · মাস্টার-ক্যামেরার পরীক্ষা-মাঠ — The Master-Camera's Proving Ground ──
doors.push({
  num: 19,
  icon: "🎞️",
  color: "#fbbf24",
  name: "মাস্টার-ক্যামেরার পরীক্ষা-মাঠ",
  subtitle: "The Master-Camera's Proving Ground",
  tech: "rerere · worktree গভীর · log --graph পাঠ · দল-প্রবাহ",
  spirit: "তাহকিক — যাচাই করে নিশ্চিত হও",
  secret: "দক্ষতার শেষ ধাপ বিরল হাতের অস্ত্র: rerere — একই দ্বন্দ্ব দুইবার সমাধান করতে হবে না (Git মনে রাখে!); worktree — এক রিপোতে একসাথে একাধিক শাখা-দরজা; log --graph — প্রকৃত ইতিহাসের মানচিত্র পড়া; এবং দল-প্রবাহ — trunk-based বনাম git-flow-এর বাস্তব বিচার।",
  recall: {
    q: "একই merge-দ্বন্দ্ব প্রতি সপ্তাহে ফিরে আসছে — একবার সমাধান শিখিয়ে রাখার উপায়? আর release-ব্যাকপোর্ট আর নতুন ফিচার একসাথে চালাতে দুই-তিনটা চেকআউট কীভাবে একই রিপোতে রাখবে?",
    qen: "The same merge conflict returns weekly — a way to teach the solution once? And to run a release-backport alongside new features, how do you keep 2-3 checkouts in ONE repo?",
    a: "① rerere: git config rerere.enabled true — reuse recorded resolution: প্রথমবার দ্বন্দ্ব সমাধান করলে Git সেই সমাধান রেকর্ড করে; পরের বার একই দ্বন্দ্ব এলে নিজে থেকেই বসিয়ে দেয় (আগে-পরে দেখে নিলে ভয় নেই)। ② worktree: git worktree add ../hotfix hotfix-branch — মূল চেকআউট অক্ষত, পাশে নতুন কর্মক্ষেত্র-সহ শাখা; এক রিপো, অনেক দরজা; শেষে git worktree remove। ③ গ্রাফ-পাঠ: git log --graph --oneline --all --decorate — শাখা-মিলনের সত্য মানচিত্র; দরজা ১৩-এর গোয়েন্দা-চোখ এখানে পূর্ণ রূপ পায়। ④ দল-প্রবাহ: ছোট দল → trunk-based (ছোট স্বল্পস্থায়ী শাখা, ঘন merge); release-ভারী → git-flow-এর শাখা-নাম নিয়ম; বাস্তবে অধিকাংশ দল মাঝামাঝি — নিয়ম যত সহজ, পালন তত নিশ্চিত।",
    aen: "① rerere: git config rerere.enabled true — reuse recorded resolution: solve a conflict once and Git records it; when the same conflict returns, it applies the fix itself (inspect before/after and fear nothing). ② worktree: git worktree add ../hotfix hotfix-branch — the main checkout stays intact while a new working-tree+branch appears beside it; one repo, many doors; clean up with git worktree remove. ③ Graph-reading: git log --graph --oneline --all --decorate — the true map of branch unions; Door 13's detective eyes reach full form here. ④ Team flows: small teams → trunk-based (small short-lived branches, frequent merges); release-heavy → git-flow's branch naming; most teams sit between — the simpler the rule, the surer the keeping.",
    you: "git config rerere.enabled true && git worktree add ../wt-demo 2>/dev/null || git worktree list; git worktree list; git worktree remove ../wt-demo 2>/dev/null; git log --graph --oneline --all | head -8"
  },
  story: `<p class="scene-setting">স্টুডিওর সবার প্রবীণ মাস্টার-ক্যামেরা জাফর আলী তাঁর পরীক্ষা-মাঠে তিনটা বিরল কৌশল শেখান। প্রথম — স্মৃতিশীল দ্বন্দ্ব-মীমাংসক (rerere): 'একই ফাটল প্রতি সপ্তাহে একই রকম ফেটে; একবার জোড়া দিয়ে দেখাও, আমি মনে রাখব' — Git-এর ভেতরের ক্যামেরা সমাধান রেকর্ড করে রাখে, পরের বার নিজেই জোড়া দেয়। দ্বিতীয় — বহু-দরজার ঘর (worktree): 'একই ভাণ্ডারের এক দরজায় release-মেরামত, আরেক দরজায় নতুন ফিচার — দুই দরজাই খোলা রাখো, একে অন্যকে গোলমাল করতে দিও না।' তৃতীয় — মানচিত্র-পাঠ (log --graph): 'ইতিহাসের সত্য সরল-লাইনে নয়, নদীর মোহনায় — শাখা মিশেছে কোথায়, কোন কমিট কোন স্রোতের, চোখে দেখে বলো।' শেষ পাঠ দল-প্রবাহের: 'ছোট দলে ভারী নিয়মনামা নয় — যে রীতি সবাই মানতে পারে, সেটাই শ্রেষ্ঠ রীতি; নিয়মের সৌন্দর্য পালনে, পুস্তকে নয়।'</p>
<p class="scene-setting en">In his proving ground, the studio's eldest master-camera Jafar Ali teaches three rare arts. First — the remembering resolver (rerere): 'the same crack splits the same way every week; show me the fix once, I will remember' — Git's inner camera records the resolution and applies it itself next time. Second — the many-doored room (worktree): 'one vault, one door for release-repairs, another for new features — keep both open, let them never trip each other.' Third — map-reading (log --graph): 'history's truth is not a straight line but a river delta — see where branches merge, which commit belongs to which stream.' The last lesson on team flows: 'a small team needs no heavy rulebook — the best ritual is the one everyone keeps; a rule's beauty lies in its keeping, not its writing.'</p>

<div class="code-block"># ① স্মৃতিশীল মীমাংসক — rerere:
git config rerere.enabled true
#   প্রথম সমাধান রেকর্ড হয় (.git/rr-cache); পুনরাবৃত্ত দ্বন্দ্বে
#   স্বয়ংক্রিয় প্রয়োগ — diff দেখে নিশ্চিত হও
git rerere status          # চলমান রেকর্ডিং
git rerere diff            # কী প্রয়োগ হলো দেখো

# ② বহু-দরজা — worktree (এক রিপো, বহু কর্মক্ষেত্র):
git worktree add ../hotfix hotfix-branch
cd ../hotfix               # release-মেরামত এখানে
#   মূল চেকআউট অক্ষত — ফিচার-কাজ চলছেই
git worktree list          # সব দরজার তালিকা
git worktree remove ../hotfix   # দরজা বন্ধ

# ③ মানচিত্র-পাঠ — গ্রাফ-লগ:
git log --graph --oneline --all --decorate
#   * মিলন-বিন্দু, | স্রোত, নাম-ট্যাগ দেখায় কোনটা কোথাকার
git log --graph --format='%h %d %s' -20

# ④ দল-প্রবাহ — নিজের মাপে:
#   trunk-based: ছোট শাখা → ঘন main-এ মিলন (CI-সহজ)
#   git-flow: main/develop/feature/release/hotfix নাম-নিয়ম
#   প্রশ্ন একটাই: দল কোনটা মানতে পারবে প্রতি সপ্তাহে?</div>

<table class="kv-table">
<tr><th>কৌশল</th><th>আদেশ</th><th>কী দেয়</th></tr>
<tr><td class="hl">rerere</td><td>config rerere.enabled true</td><td>দ্বন্দ্ব-সমাধান স্মৃতি</td></tr>
<tr><td class="hll">worktree</td><td>add ../dir branch</td><td>এক রিপো, বহু দরজা</td></tr>
<tr><td class="hl">graph-লগ</td><td>log --graph --oneline --all</td><td>ইতিহাস-মানচিত্র</td></tr>
<tr><td class="hll">দল-প্রবাহ</td><td>trunk-based / git-flow</td><td>নিজ-মাপের রীতি</td></tr>
</table>

<div class="diagram">
<div class="diag-title">পরীক্ষা-মাঠের তিন কৌশল — The Proving Ground's Three Arts</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar61d19" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker>
</defs>
<rect class="node" x="15" y="63" width="120" height="44" rx="10"/><text class="lbl" x="75" y="81">এক রিপো</text><text class="lbl-sm" x="75" y="97">ভাণ্ডার + ইতিহাস</text>
<rect class="node-cyan" x="185" y="20" width="150" height="40" rx="9"/><text class="lbl-cyan" x="260" y="38">worktree দরজা-১</text><text class="lbl-sm" x="260" y="54">hotfix-শাখা</text>
<rect class="node-cyan" x="185" y="110" width="150" height="40" rx="9"/><text class="lbl-cyan" x="260" y="128">worktree দরজা-২</text><text class="lbl-sm" x="260" y="144">feature-শাখা</text>
<rect class="node-leaf" x="395" y="63" width="150" height="44" rx="10"/><text class="lbl-leaf" x="470" y="81">graph-মানচিত্র</text><text class="lbl-sm" x="470" y="97">--graph --oneline --all</text>
<line x1="135" y1="78" x2="181" y2="42" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d19)"/>
<line x1="135" y1="95" x2="181" y2="128" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d19)"/>
<line x1="335" y1="40" x2="391" y2="78" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d19)"/>
<line x1="335" y1="130" x2="391" y2="92" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d19)"/>
<rect class="cell" x="15" y="158" width="530" height="14" rx="7"/><text class="lbl-sm" x="280" y="168">rerere = দ্বন্দ্ব-স্মৃতি · নিয়ম তারাই ভালো যা দল মানতে পারে</text>
</svg>
<div class="diag-cap">এক ভাণ্ডারে বহু দরজা, স্মৃতিশীল মীমাংসক, আর মানচিত্র-চোখ — প্রবীণের তিন অস্ত্র।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>মাস্টারের সতর্কতা:</strong> rerere-র স্বয়ংক্রিয় প্রয়োগ বিশ্বাস করে চোখ বন্ধ কোরো না — প্রয়োগের পর diff দেখে নাও, ভুল স্মৃতি ভুল জায়গায় বসতে পারে। worktree-তে একই শাখা দুই দরজায় চেকআউট করা যায় না (Git আটকাবে — কারণ আছে); পরে দরজা মুছতে remove, ফোল্ডার হাতে মুছলে তালিকায় ভুত থেকে যায় (worktree prune)। আর দল-প্রবাহ নকল কোরো না — বড় কোম্পানির রীতি ছোট দলে ভারী বোঝা; নিজের দলের মাপে সেলাই করো।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The master's caution:</strong> never trust rerere's auto-application blindly — diff after it applies; a wrong memory lands in the wrong place. The same branch cannot be checked out in two worktree doors (Git blocks it — for reason); close doors with remove, or hand-deleted folders leave ghosts (worktree prune). And do not copy team flows wholesale — a big company's ritual is a small team's burden; tailor to your own.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ এক-দরজার বন্দি</div>এক চেকআউটে শাখা-তাড়াহুড়ো · একই দ্বন্দ্ব বারবার হাতে · graph-লগ অপাঠ্য · অন্যের প্রবাহ অন্ধ নকল</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ জাফর আলীর রীতি</div>rerere-স্মৃতি + যাচাই-চোখ · worktree-বহুদরজা (list/remove-শৃঙ্খলা) · নিজ-মাপের প্রবাহ</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">rerere</div><div class="sc-label">দ্বন্দ্ব-সমাধান স্মৃতি</div></div>
<div class="stat-card"><div class="sc-num">worktree add</div><div class="sc-label">বহু-দরজা এক রিপোতে</div></div>
<div class="stat-card"><div class="sc-num">--graph --all</div><div class="sc-label">ইতিহাস-মানচিত্র</div></div>
<div class="stat-card"><div class="sc-num">trunk / flow</div><div class="sc-label">নিজ-মাপে প্রবাহ</div></div>
</div>

<p class="verse">তাহকিকের পাঠ: কুরআন বারবার যাচাই-নিরীক্ষার আদেশ দিয়েছে — অনুমানে নয়, প্রত্যক্ষে (১৭:৩৬); মাস্টার-ক্যামেরাও তাই: স্মৃতি থাকুক, কিন্তু চোখ খোলা; নিয়ম থাকুক, কিন্তু নিজের মাপে যাচাই করে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🎞️ rerere স্মৃতি (diff-যাচাই!), worktree বহু-দরজা, --graph মানচিত্র; প্রবাহ নিজ-মাপে।<br>কারণ: প্রবীণের শক্তি অস্ত্রে নয় — কখন কোনটা চালাতে হবে জানায়।</div></div>`,
  senior: {
    title: "পরীক্ষা-মাঠের খাতা — The Proving-Ground Ledger",
    body: `<ul class="checklist">
<li><strong>rerere.enabled true</strong> — দ্বন্দ্ব-স্মৃতি; প্রয়োগের পর <strong>diff যাচাই</strong>।</li>
<li><strong>worktree add/list/remove</strong> — বহু কর্মক্ষেত্র, এক ভাণ্ডার; prune-ভুত পরিষ্কার।</li>
<li><strong>log --graph --oneline --all --decorate</strong> — ইতিহাসের সত্য-মানচিত্র।</li>
<li>দল-প্রবাহ: <strong>নিজ-মাপে</strong> — trunk-based ছোট দলে, নিয়ম যত সহজ তত টেকে।</li>
<li>এই তিন কৌশল মাস্টারির ফল — ভিত্তি (দরজা ১–১৮) ছাড়া এসব অস্ত্র নয়, বোঝা নয়।</li>
</ul>`
  }
});

// ── DOOR 10 · আল-কালামের সিংহাসন — The Throne of the Pen (Synthesis) ──
doors.push({
  num: 20,
  icon: "👑",
  color: "#fbbf24",
  name: "আল-কালামের সিংহাসন",
  subtitle: "The Throne of the Pen",
  tech: "Git's design · snapshot + pointer · distributed",
  spirit: "আল-কালাম — কলম ও স্মৃতির প্রতিশ্রুতি",
  secret: "ন-দরজার ন-যন্ত্রের নিচে দুটো সত্য: প্রতিটা commit পূর্ণ ছবি (বদল-তালিকা নয়), আর প্রতিটা ক্লোন পূর্ণ স্টুডিও (কপি নয়) — সব পয়েন্টারের খেলা; কে কাকে দেখছে, সেটাই Git।",
  recall: {
    q: "ন-দরজার ন-উস্তাদ কারা, আর তাঁদের সবার নিচে থাকা দুটো নকশা-সত্য কী?",
    qen: "Who are the nine masters, and what two design-truths lie under all their machines?",
    a: "রহমত আলী (ছবি/snapshot), জামাল উদ্দিন (ফ্রেম-টেবিল/staging), শাহিনা বেগম (শাখা/branch), মিয়া বসির (মিলন/merge), কামরুল হালিম (ছাপাঘর/rebase), ফারিহা সুলতানা (আয়না-ঘর/remote), মোজাম্মেল হোদা (হিসাবখাতা/undo+reflog), রুবেলা খাতুন (ঝুলি+যমজ ঘর/stash+worktree), ইন্সপেক্টর নাদিম (গোয়েন্দা/log+blame+bisect)। দুটো সত্য: ① প্রতিটা commit পুরো প্রজেক্টের পূর্ণ ছবি — তাই যেকোনো মুহূর্ত হুবহু ফেরে, আর শাখা/HEAD শুধু নাম-ধরা পোস্টার; ② প্রতিটা ক্লোন সম্পূর্ণ স্টুডিও — ইতিহাস, শাখা, সব; তাই আয়না-ঘর ভেঙে গেলেও যেকোনো কপি থেকে সব ফেরে। বিতরণ মানে অনুলিপি-নির্ভরতা নয় — সবার হাতে পূর্ণ সত্য।",
    aen: "Rahmat Ali (photographs/snapshots), Jamal Uddin (framing table/staging), Shahina Begum (branches), Miya Basir (unions/merge), Kamrul Halim (reprinting/rebase), Farhana Sultana (mirror room/remotes), Moazzamel Hoda (ledger/undo+reflog), Rubela Khatun (shelf+twin rooms/stash+worktree), Inspector Nadim (detective/log+blame+bisect). Two truths: ① every commit is a full snapshot — hence any moment returns exactly, and branches/HEAD are mere named sticky-notes; ② every clone is the complete studio — history, branches, all; so even if the mirror room shatters, any copy restores everything. Distributed does not mean dependent on a copy — it means the full truth in every hand."
  },
  story: `<p class="scene-setting">স্টুডিওর একেবারে কেন্দ্রে, ন-দরজার ন-কারিগরখানার মাঝখানে, একটাই সিংহাসন — আল-কালামের সিংহাসন। ন-উস্তাদ তোমাকে একে একে তাঁদের যন্ত্র শিখিয়ে পাঠালেন; আজ তুমি সিঁড়িতে। উপরে উঠে পুরো স্টুডিও এক নজরে দেখো — রহমত আলীর ক্যামেরা, জামাল উদ্দিনের টেবিল, শাহিনা বেগমের পোস্টার, মিয়া বসিরের আসর, কামরুল হালিমের ছাপাঘর, ফারিহা সুলতানার আয়না, মোজাম্মেল হোদার খাতা, রুবেলা খাতুনের ঝুলি, নাদিমের দালান। কিন্তু উচ্চতা থেকে চোখ মুছলে দেখো — ন-টা যন্ত্র আলাদা নয়। সবাই দুটো সত্যের উপর দাঁড়িয়ে: প্রতিটা ক্লিক একটা <strong>পূর্ণ ছবি</strong>, আর প্রতিটা পোস্টার/বুকমার্ক/আয়না শুধু <strong>নাম-ধরা কাগজ</strong>, যে ছবিটাকে দেখছে শুধু সেটাই বদলায়। আর দ্বিতীয় স্তরের সত্য: শহরের প্রতিটা সহকারীর ঘরে এই পুরো স্টুডিওর পূর্ণ কপি — আগুন লাগলেও কারও এক ঘর থেকে সব পুনরায় জন্মায়। সিংহাসনে বসা মানে এই দুটো দেখা: ছবি সত্য, নাম নির্দেশক — আর সত্য এক জায়গায় নয়, সবার হাতে।</p>
<p class="scene-setting en">At the studio's very centre, amid the nine workshops, stands one throne — the Throne of the Pen. The nine masters taught you their machines; today you climb. From the top the whole studio appears — Rahmat Ali's camera, Jamal Uddin's table, Shahina Begum's sticky-notes, Miya Basir's hall, Kamrul Halim's press, Farhana Sultana's mirrors, Moazzamel Hoda's ledgers, Rubela Khatun's shelf, Nadim's bureau. But rub your eyes at that height — the nine machines are not separate. All stand on two truths: every click is a <strong>full photograph</strong>, and every sticky-note/bookmark/mirror is merely <strong>a named slip of paper</strong> pointing at one — change what it points to, nothing else moves. And the second truth: every apprentice's room in the city holds a complete copy of this whole studio — even fire cannot destroy what everyone owns. Sitting the throne means seeing both: photographs are the truth, names are pointers — and truth lives not in one place but in every hand.</p>

<div class="code-block"># সিংহাসনের দৃষ্টি — এক লাইনে ন-দরজা (রোজকার প্রার্থনা):
git switch -c fix/payment-timeout          # দরজা 3: পোস্টার লাগাও
# … কাজ; মিশ্র হলে add -p (দরজা 2) …
git commit -m "payment: ৩০s টাইমআউট ফিক্স"  # দরজা 1: পূর্ণ ছবি
git fetch origin && git rebase origin/main  # দরজা 5+৬: সরল+তাজা
git push -u origin fix/payment-timeout      # দরজা 7: আয়নায় পাঠাও
# PR → review → মিলন (দরজা 4) → শাখা বিদায়
# ভুল? দরজা 9-এর মই: amend / revert / reflog
# কে করেছে? দরজা 13: log -S → blame → bisect

# দুই নকশা-সত্য, চোখের সামনে:
git cat-file -p HEAD^{tree}     # এই ছবিতে পুরো ঘরের তালিকা — পূর্ণ snapshot
git rev-parse HEAD              # ছবির ৪০-অক্ষরের নাম
cat .git/refs/heads/main        # শাখা = ফাইল, ভেতরে শুধু একটা নাম!
#   এই তিনটা আদেশই সিংহাসনের শিলালিপি পড়া

# তোমার রোজকার alias (দরজা 7-এর বহিঃরূপ, .bashrc-এ লেখো — B60):
alias gs='git status'
alias gl='git log --oneline --graph --all'
alias gp='git pull --rebase'
# B59 সেতু: Claude Code-এর প্রতিটা commit/worktree এই স্টুডিওরই ব্যবহার
# B60 সেতু: alias/config ও ~/.bashrc — নদী একটাই, নৌকা নানা</div>

<div class="diagram">
<div class="diag-title">সিংহাসনের মানচিত্র — The Throne's Map of the Nine</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowT10" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker>
</defs>
<circle cx="280" cy="125" r="46" class="ring"/><text class="lbl" x="280" y="118" text-anchor="middle">দুই সত্য</text><text class="lbl-sm" x="280" y="138" text-anchor="middle">ছবি + পয়েন্টার</text>
<circle cx="90" cy="55" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="90" y="52" text-anchor="middle">১ ছবি</text><text class="lbl-sm" x="90" y="66" text-anchor="middle">init · commit</text>
<circle cx="280" cy="40" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="280" y="37" text-anchor="middle">২ টেবিল</text><text class="lbl-sm" x="280" y="51" text-anchor="middle">add · -p</text>
<circle cx="470" cy="55" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="470" y="52" text-anchor="middle">৩ শাখা</text><text class="lbl-sm" x="470" y="66" text-anchor="middle">switch · HEAD</text>
<circle cx="60" cy="125" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="60" y="122" text-anchor="middle">৪ মিলন</text><text class="lbl-sm" x="60" y="136" text-anchor="middle">merge · conflict</text>
<circle cx="500" cy="125" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="500" y="122" text-anchor="middle">৫ ছাপাঘর</text><text class="lbl-sm" x="500" y="136" text-anchor="middle">rebase · -i</text>
<circle cx="90" cy="195" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="90" y="192" text-anchor="middle">৬ আয়না</text><text class="lbl-sm" x="90" y="206" text-anchor="middle">fetch · push · PR</text>
<circle cx="280" cy="210" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="280" y="207" text-anchor="middle">৭ খাতা</text><text class="lbl-sm" x="280" y="221" text-anchor="middle">amend · reflog</text>
<circle cx="470" cy="195" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="470" y="192" text-anchor="middle">৮ ঝুলি</text><text class="lbl-sm" x="470" y="206" text-anchor="middle">stash · worktree</text>
<circle cx="175" cy="82" r="0"/><circle cx="405" cy="82" r="0"/>
<line x1="115" y1="70" x2="235.4" y2="115.3" stroke="#fbbf24" stroke-width="3" fill="none" marker-end="url(#arrowT10)"/>
<line x1="280" y1="70" x2="280" y2="76" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT10)"/>
<line x1="445" y1="70" x2="324.6" y2="115.3" stroke="#fbbf24" stroke-width="3" fill="none" marker-end="url(#arrowT10)"/>
<line x1="90" y1="125" x2="230" y2="125" stroke="#fbbf24" stroke-width="3" fill="none" marker-end="url(#arrowT10)"/>
<line x1="470" y1="125" x2="330" y2="125" stroke="#fbbf24" stroke-width="3" fill="none" marker-end="url(#arrowT10)"/>
<line x1="120" y1="195" x2="250" y2="210" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT10)"/>
<line x1="440" y1="195" x2="310" y2="210" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT10)"/>
<text class="lbl-sm" x="280" y="246" text-anchor="middle">৯ম যন্ত্র (নাদিমের দালান) সব দরজা পড়ে — আর ১০ম এই সিংহাসন সব দেখে</text>
</svg>
<div class="diag-cap">ন-দরজা দুই সত্যকে ঘিরে — পূর্ণ ছবি, নাম-ধরা পয়েন্টার; আর প্রতিটা কপি পূর্ণ স্টুডিও।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সিংহাসনের কঠিন সত্য:</strong> ন-দরজা শেষ নয়, শুরু — যে দরজা হালকা লাগছে সেটাই আবার খোলো; দ্বিতীয়বার পড়াই গভীরে যাওয়া। আর মনে রেখো: এই স্টুডিওর যন্ত্র বদলাবে (GUI আসবে, নতুন কমান্ড যাবে), কিন্তু দুই সত্য থাকবে — ছবি পূর্ণ, নাম পয়েন্টার। (B59 সেতু: Claude Code-ও এই স্টুডিওরই কারিগর — তার প্রতিটা commit, worktree, PR এই নিয়মেই চলে; B60 সেতু: স্টুডিওর দরজা টার্মিনালের নদীতে।)</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The throne's hard truth:</strong> nine doors are a beginning — whichever feels light, open again; second reading is depth. And remember: this studio's machines will change (GUIs will come, commands will go), but the two truths stay — photographs are full, names are pointers. (B59 bridge: Claude Code is a craftsman of this same studio — its commits, worktrees, PRs obey these rules; B60 bridge: the studio's door opens onto the terminal's river.)</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ যন্ত্র-সংগ্রাহক</div>শত কমান্ড মুখস্থ, দুই সত্য অজানা · বোতাম-টিপে Git (GUI-only), ভেতরে কী হয় অন্ধ · আয়না-ঘরকে ঈশ্বর ভাবে (server গেলে সব শেষ)</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ দুই-সত্যের কারিগর</div>ছবি পূর্ণ, নাম পয়েন্টার — এই চোখে সব কমান্ড পড়ে · নিজের হাতে প্রতিটা কাজ · সার্ভার গেলেও শান্ত: পূর্ণ কপি সবার হাতে</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">উস্তাদ · দরজা</div></div>
<div class="stat-card"><div class="sc-num">২</div><div class="sc-label">সত্য — পূর্ণ ছবি, নাম-পয়েন্টার</div></div>
<div class="stat-card"><div class="sc-num">১০০০</div><div class="sc-label">XP — সময়ের কারিগর</div></div>
</div>

<p class="verse">আল-কালাম — কুরআনের সূচনা-শপথ: কলম এবং যা তারা লেখে (৬৮:১) এবং শিখিয়েছেন কলমের মাধ্যমে যা সে জানত না (৯৬:৪-৫)। এই স্টুডিও সেই প্রতিশ্রুতিরই সামাজিক রূপ: লেখা হলে সে মুছ যায় না, নাম-ধরে ফেরে, আর সবার হাতে পূর্ণ থাকে — জ্ঞান যেমন বিলুপ্ত হয় না, শুধু হস্তান্তর হয়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">👑 ছবি পূর্ণ, নাম পয়েন্টার, কপি পূর্ণ স্টুডিও — এই দুই সত্য চোখে সব Git পড়ো।<br>কারণ: যন্ত্র বদলায়, নকশা থাকে — নকশা চিনলে নতুন যন্ত্রও চেনা।</div></div>`,
  senior: {
    title: "সিংহাসনের খাতা — The Throne Ledger",
    body: `<ul class="checklist">
<li>নকশা-চোখ অভ্যাস করো: প্রতিটা নতুন কমান্ড প্রশ্ন করো — <strong>ছবি বদলায়, নাকি নাম?</strong></li>
<li>রোজকার প্রার্থনা (সিংহাসনের দৃষ্টি-ব্লক) একবার হাতে চালাও — ন-দরজা এক সারিতে বাঁধা যায়।</li>
<li><strong>git cat-file -p HEAD^{tree}</strong> একবার দেখো — পূর্ণ ছবির সত্য চোখের সামনে।</li>
<li>B59/B60 সেতু মনে রেখো: Claude Code ও টার্মিনাল — সবই এই স্টুডিওর প্রতিবেশী কারিগর।</li>
<li>যে দরজা হালকা লাগছে সেটাই আবার খোলো — দ্বিতীয়বার পড়াই মাস্টারির সিঁড়ি।</li>
</ul>`
  }
});
