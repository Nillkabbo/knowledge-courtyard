// ════════════════════════════════════════
// Book 61 · The Studio of Time — Doors 1-5
// Every command verified against git-scm.com
// docs (Pro Git book + user manual + command refs)
// ════════════════════════════════════════
const doors = [];

// ── DOOR 1 · রহমত আলীর প্রথম ছবি — Rahmat Ali's First Photograph ──
doors.push({
  num: 1,
  icon: "📸",
  color: "#fcd34d",
  name: "রহমত আলীর প্রথম ছবি",
  subtitle: "Rahmat Ali's First Photograph",
  tech: "init · clone · status · add · commit · snapshot",
  spirit: "নেয়ামত — যা ভালো, তা রক্ষা করা",
  secret: "commit মানে বদলের তালিকা নয় — পুরো প্রজেক্টের একটা ছবি; যে ছবি দেখে ঘর হুবহু ফিরে পাও, সে-ই ভালো ছবি।",
  recall: {
    q: "তোমার বন্ধু বলল: commit তো শুধু কী বদলাল সেটার রেকর্ড। তুমি কী বলবে? আর git add আর git commit-এর মাঝে কী হয় না তার স্পষ্ট উদাহরণ দাও।",
    qen: "A friend says: a commit is just a record of what changed. Your reply? And a concrete example of what sits between git add and git commit.",
    a: "ভুল ধারণা — Git প্রতিটা commit-এ পুরো প্রজেক্টের একটা snapshot (পূর্ণ ছবি) রাখে (বদল-তালিকা নয়); সে কারণেই যেকোনো ছবি চেয়ে হুবহু ঘর ফিরে পাও। আর add আর commit-এর মাঝের ধাপ: কাজের ঘর → staging area (index)। git add মানে ছবিতে যাবে এমন জিনিস টেবিলে তোলা; এর পরে ফাইলে আরও বদল করলে সেগুলো ছবিতে যাবে না — আবার add লাগবে। git diff দেখায় টেবিল-বাকি, git diff --cached দেখায় ছবিতে যাচ্ছে এমন; git status দুটোই এক নজরে।",
    aen: "Wrong mental model — each commit stores a full snapshot of the project, not a list of changes; that is why any photograph can rebuild the room exactly. Between add and commit sits the staging area (index): git add lifts onto the table what goes into the photograph; later edits to the same file stay out until re-added. git diff shows table-leftovers, git diff --cached shows what is going into the photo; git status summarizes both."
  },
  story: `<p class="scene-setting">রহমত আলী শহরের সবচেয়ে পুরোনো ফটো-স্টুডিওর মালিক — দেয়ালে শ'খানেক ফ্রেম, আর তাঁর সবচেয়ে গর্বের জিনিস: প্রতিটা ছবির পেছনে লেখা তারিখ-নাম, আর পুরো ঘরের হুবহু নকশা। লোকে ভাবে তিনি শুধু মুখ তোলেন; আসলে তাঁর ক্যামেরা পুরো ঘরটাই তোলে — টেবিলের পাশের বই, দেয়ালের দাগ, জানালার আলো, সব। প্রতিটা ক্লিক একটা মুহূর্তের পূর্ণ ছবি, বদলের হিসাব নয়। একদিন এক শিক্ষানবিশ ছবির পেছনে শুধু বদলের তালিকা লিখে রেখেছিল — দশ বছর পরে সেই তালিকা দিয়ে ঘর ফিরিয়ে আনতে গিয়ে ব্যর্থ হলো: কোন তালিকা কোন ঘরের, কেউ জানে না। রহমত আলী সেদিন শিখিয়েছিলেন — ছবি মানে পুরো ঘর, তালিকা মানে শুধু গল্প।</p>
<p class="scene-setting en">Rahmat Ali owns the city's oldest photo studio — a hundred frames on the wall, and his greatest pride: behind every photograph, a date, a name, and the exact blueprint of the whole room. People think he photographs faces; his camera captures the entire room — the book by the table, the mark on the wall, the window light, everything. Every click is a full picture of a moment, not a ledger of changes. Once an apprentice wrote only change-lists behind photos — ten years later those lists could rebuild nothing: nobody knew which list belonged to which room. That day Rahmat Ali taught: a photograph means the whole room; a list is just a story.</p>

<div class="dialogue">তুমি স্টুডিওতে ঢুকে বললে — চাচা, আমার একটা প্রজেক্ট আছে, রোজ কোড বদলায়, কাল যা ভালো ছিল আজ নষ্ট। উনি ক্যামেরা মুছে বললেন: তাহলে তোমার স্টুডিও লাগবে। তিন ধাপ দেখালেন। প্রথমত, ঘর ভাড়া করো (git init — খালি ঘরে স্টুডিও খোলা; অথবা অন্যের স্টুডিও কপি করে আনো, git clone)। দ্বিতীয়ত, যা ছবিতে যাবে তা টেবিলে তোলো (git add — কাচের প্লেটে সাজানো; রহমত আলী একে বলেন ফ্রেম-সাজানোর টেবিল)। তৃতীয়ত, ক্লিক (git commit — পুরো ঘরের পূর্ণ ছবি, পেছনে তারিখ-নাম)। আর দরজার কাছে একটা বাক্স — .gitignore — যা কখনো ছবিতে যাবে না (পুরোনো খবরের কাগজ, node_modules, .env) তার তালিকা।</div>
<div class="dialogue en">You enter the studio — uncle, my project changes daily; yesterday's good code is today's ruin. He wipes the lens: then you need a studio. Three steps. First, rent the room (git init — opening a studio in an empty room; or copy someone's studio, git clone). Second, lift onto the table what enters the photograph (git add — arranging on the glass plate; Rahmat Ali calls it the framing table). Third, click (git commit — the full photograph of the whole room, date and name behind). And by the door a box — .gitignore — the list of what never enters a photograph (old newspapers, node_modules, .env).</div>

<div class="code-block"># স্টুডিও খোলো — নতুন বা কপি:
git init                        # খালি ঘরে স্টুডিও
git clone <url>                 # অন্যের স্টুডিও হুবহু কপি (ইতিহাসসহ!)
git clone <url> mydir           # নাম দিয়ে

# তিন-ধাপের ছবি:
git status                      # ঘরের এক নজরে হিসাব
git add index.html              # একটা জিনিস টেবিলে
git add .                       # সব (নতুন+বদলানো)
git commit -m "প্রথম ছবি: ঘর সাজানো"
#   প্রতিটা commit = পুরো প্রজেক্টের পূর্ণ snapshot

# add-এর পরে আবার বদলালে?
echo "more" >> file.txt         # টেবিলে তোলার পরে নতুন বদল
git status                      # দেখাবে: staged + unstaged দুই-ই আছে
git add file.txt                # নতুন বদলটাও টেবিলে তুলতে হয় আবার

# যা ছবিতে যাবে না — .gitignore:
node_modules/
.env
*.log
tmp/

# নাম-পরিচয় একবারই লিখে রাখো (প্রতিটা ছবির পেছনে যাবে):
git config --global user.name "Your Name"
git config --global user.email "you@example.com"</div>

<div class="diagram">
<div class="diag-title">তিন-অবস্থার ঘর — The Three Rooms</div>
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowR1" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fcd34d"/></marker>
</defs>
<rect class="node" x="15" y="60" width="150" height="52" rx="10"/><text class="lbl" x="90" y="82">কাজের ঘর</text><text class="lbl-sm" x="90" y="100">working directory</text>
<rect class="node-hot" x="205" y="60" width="150" height="52" rx="10"/><text class="lbl-hot" x="280" y="82">ফ্রেম-টেবিল</text><text class="lbl-sm" x="280" y="100">staging area (index)</text>
<rect class="node-leaf" x="395" y="60" width="150" height="52" rx="10"/><text class="lbl-leaf" x="470" y="82">ছবির আলবাম</text><text class="lbl-sm" x="470" y="100">repository (.git)</text>
<line x1="165" y1="76" x2="201" y2="76" stroke="#fcd34d" stroke-width="2" fill="none" marker-end="url(#arrowR1)"/>
<line x1="355" y1="76" x2="391" y2="76" stroke="#fcd34d" stroke-width="2" fill="none" marker-end="url(#arrowR1)"/>
<text class="lbl-sm" x="183" y="66">git add</text>
<text class="lbl-sm" x="373" y="66">git commit</text>
<rect class="cell" x="15" y="10" width="530" height="30" rx="8"/><text class="lbl-sm" x="280" y="30">git diff = ঘর↔টেবিল · git diff --cached = টেবিল↔শেষ ছবি · git status = দুটোই এক নজরে</text>
<rect class="cell-hot" x="15" y="128" width="530" height="28" rx="8"/><text class="lbl-sm" x="280" y="146">⚠ commit = পূর্ণ ছবি (snapshot) — বদলের তালিকা নয়; এই এক কথাই পুরো স্টুডিওর ভিত্তি</text>
</svg>
<div class="diag-cap">তিন ঘর — কাজের ঘর থেকে টেবিল, টেবিল থেকে আলবাম; প্রতিটা ক্লিক পুরো ঘরের ছবি।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>রহমত আলীর সতর্কতা:</strong> git add ফাইলের <strong>এই মুহূর্তের</strong> অবস্থা তোলে — পরে আরও বদল করলে সেগুলো ছবিতে যায় না, আবার add লাগে; এটাই নতুনদের প্রথম বিভ্রান্তি। আর commit -m ছাড়া commit করলে এডিটর খুলবে — ভয় নয়, বার্তা লিখে সেভ করলেই ছবি তৈরি। git commit -a শুধু ট্র্যাক-করা ফাইলের বদল এক ধাপে তোলে — নতুন ফাইলকে প্রথমেই add করতে হয়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Rahmat Ali's caution:</strong> git add lifts the file's state <strong>at this moment</strong> — later edits stay out of the photograph until re-added; this is the beginner's first confusion. A bare git commit opens your editor — no fear, write the message and save. And git commit -a stages tracked-file changes in one step — new files still need their first add.</div></div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>আজই করো (৫ মিনিট):</strong> একটা খালি ফোল্ডারে git init → README লিখে add + commit → আরেকটা বদল এনে status দেখো — staged/unstaged দুই রং চোখে পড়বে। এই তিন-ঘরের নাচটা একবার দেখলে আর কখনো ভুলবে না।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Do today (5 min):</strong> git init in an empty folder → write a README, add + commit → make another edit and run status — you will see staged/unstaged in two colors. See this three-room dance once and you will never forget it.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ তালিকার দোকান</div>বদলের হিসাব নোটবুকে রাখে · প্রজেক্টের পুরোনো কপি জিপ করে রাখে (final_v2_REAL.zip) · commit-কে বদল-লগ ভাবে · add-এর পরের বদল হারিয়ে ফেলে</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ছবির স্টুডিও</div>প্রতিটা commit পূর্ণ snapshot · status → add → commit তিন-ধাপের নাচ · .gitignore-এ জঞ্জালের তালিকা · ছবির পেছনে নাম-তারিখ (config)</div>
</div>

<p class="verse">নেয়ামতের হিসাব — যা ভালো তা সঁপে রাখার শিল্প: কুরআনে বারবার এসেছে আল্লাহর নিয়ামত কোনটা অস্বীকার করবে (৫৫-এর সুরার প্রতিধ্বনি)। ছবির স্টুডিওও তাই: প্রতিটা ভালো মুহূর্তকে পূর্ণ ছবি হিসেবে সঁপে রাখা — যেন কাল যা ভাঙে, কাল নিজেই সারাতে পারে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📸 কাজের ঘর → add → ফ্রেম-টেবিল → commit → আলবাম; প্রতিটা ছবি পুরো ঘর।<br>কারণ: তালিকা থেকে ঘর ফেরে না — ছবি থেকে ফেরে।</div></div>`,
  senior: {
    title: "প্রথম ছবির খাতা — The First-Photograph Ledger",
    body: `<ul class="checklist">
<li>আজই নতুন ফোল্ডারে <strong>git init</strong> → একটা ফাইল add+commit — প্রথম ছবি তোলো।</li>
<li><strong>git status</strong> রোজ দেখো: staged/unstaged দুই ঘরের হিসাব চোখে বসাও।</li>
<li>প্রজেক্টে <strong>.gitignore</strong> আগে বানাও: node_modules/, .env, *.log — জঞ্জাল ছবিতে ঢোকে আগেই আটকাও।</li>
<li><strong>git config --global user.name/email</strong> একবারই সেট করো — প্রতিটা ছবির পেছনে তোমার নাম।</li>
<li>মনে রেখো তিন প্রশ্ন: <strong>diff কীসের সাথে কীসের</strong> (ঘর↔টেবিল), <strong>--cached কীসের</strong> (টেবিল↔শেষ ছবি), <strong>commit কী</strong> (পূর্ণ ছবি)।</li>
</ul>`
  }
});


// ── DOOR 2 · জামাল উদ্দিনের ফ্রেম-টেবিল — Jamal Uddin's Framing Table ──
doors.push({
  num: 2,
  icon: "🖼️",
  color: "#fbbf24",
  name: "জামাল উদ্দিনের ফ্রেম-টেবিল",
  subtitle: "Jamal Uddin's Framing Table",
  tech: "staging index · add -p · restore --staged · .gitignore deep",
  spirit: "ইখতিসার — উদ্দেশ্য ঠিক রেখে সংক্ষেপ",
  secret: "এক ফাইলের আধা বদল টেবিলে আর আধা ঘরে রাখা যায় — git add -p; ছবি বলে ক্লিক নয়, কী ক্লিকে যাবে সেটাই আসল শিল্প।",
  recall: {
    q: "এক ফাইলে দুই রকম বদল: একটা বাগ-ফিক্স, একটা নতুন ফিচার। দুটো আলাদা commit চাও। কোন যন্ত্রে কীভাবে?",
    qen: "One file holds two kinds of changes: a bugfix and a new feature. You want them in separate commits. Which tool, how?",
    a: "git add -p file.txt — প্যাচ-মোড: Git প্রতিটা hunk (বদলের খণ্ড) দেখিয়ে জিজ্ঞেস করবে y/n — বাগ-ফিক্সের hunk y, ফিচারের n; তারপর commit। বাকি অর্ধেক ঘরেই থাকবে; আবার add -p করে দ্বিতীয় commit। ভুল করে পুরোটা তুলে ফেললে git restore --staged file.txt নামিয়ে আনে (ছবি ছোঁয় না, শুধু টেবিল থেকে নামায়)। এভাবেই এক কাজ = এক ছবির শৃঙ্খলা টিকে থাকে।",
    aen: "git add -p file.txt — patch mode: Git shows each hunk and asks y/n — y for the bugfix hunk, n for the feature; then commit. The other half stays in the room; run add -p again for the second commit. Lifted too much by mistake? git restore --staged file.txt lowers it back (touches no photograph, only the table). Thus one task = one photograph keeps its discipline."
  },
  story: `<p class="scene-setting">জামাল উদ্দিন রহমত আলীর স্টুডিওর ফ্রেম-সাজানোর টেবিলের কারিগর — শহরে যাকে বলে সোনার হাত। লোকে ছবি তুলতে আসে আর বলে: সব ঢুকিয়ে দাও। জামাল উদ্দিন হাসেন — সব ঢুকলে ছবি নয়, গুদাম। তাঁর টেবিলে নিয়ম: ছবির <strong>উদ্দেশ্য</strong> ঠিক হয় আগে, তারপর জিনিস। এক ছবিতে এক কথা — বিয়ের ছবিতে বিয়ে, কাজের ছবিতে কাজ। একদিন এক ক্লায়েন্ট জোর করলেন: আমার শখের পাখির খাঁচাও থাকবে, নাতনীর জন্মদিনের কেকও থাকবে, আর অফিসের ফাইলও। জামাল উদ্দিন তিনটা ছবি তুললেন — একে একে। ক্লায়েন্ট ফিরে গিয়ে দেখলেন: দশ বছর পরে বিয়ের আলবাম খুললে শুধু বিয়েই পাওয়া যায়, খুঁজতে হয় না।</p>
<p class="scene-setting en">Jamal Uddin runs the framing table at Rahmat Ali's studio — the city's golden hand. Clients say: put everything in. He smiles — everything in makes a warehouse, not a photograph. His rule: decide the photograph's purpose first, then the things; one photograph, one story. A client once insisted on birdcage + birthday cake + office files together; he took three photographs instead. Ten years later the wedding album held only the wedding — nothing to search through.</p>

<div class="code-block"># টেবিলের তিন নিয়ম — ইখতিসারের সারণি:
# ১. কী ছবিতে যাবে তা তুমি ঠিক করো, Git নয়
# 2. এক ছবিতে এক কথা (one commit = one purpose)
# ৩. জঞ্জাল আটকাও দরজাতেই (.gitignore)

# টেবিলে তোলা — দানা দানা:
git add file.txt            # পুরো ফাইল
git add -p file.txt         # hunk ধরে ধরে: y/n/s (split)/q
#   এক ফাইলের বাগ-ফিক্স y, ফিচার n → দুই সুন্দর commit
git restore --staged f.txt  # টেবিল থেকে নামাও (ছবি ছোঁয় না)
git rm --cached f.txt       # ছবির নাগাল বাদ (ফাইল ঘরেই থাকে)

# তিন দর্পণ — কোনটা কীসের সাথে কীসের:
git diff                    # ঘর ↔ টেবিল (যা এখনো ওঠেনি)
git diff --cached           # টেবিল ↔ শেষ ছবি (যা ক্লিকে যাবে)
git diff HEAD               # ঘর ↔ শেষ ছবি (সব এক সাথে)

# .gitignore — দরজার বাক্স (নিয়ম প্যাটার্নে):
node_modules/      # পুরো ফোল্ডার
*.log              # ধরন ধরে
!important.log     # ব্যতিক্রম — এটা যাবে
build/             # তৈরি-জিনিস, উৎস নয়
.env               # গোপন — কখনোই ছবিতে নয়

# একবার ঢুকে গেলে জঞ্জাল (আগে থেকে ট্র্যাক-করা):
git rm -r --cached node_modules/
echo "node_modules/" >> .gitignore
git add .gitignore && git commit -m "জঞ্জাল বাদ"</div>

<table class="kv-table">
<tr><th>আদেশ</th><th>কী করে</th><th>মনে রাখার ছল</th></tr>
<tr><td class="hl">git add -p</td><td>hunk ধরে ধরে টেবিলে তোলে</td><td>আধা বদলও আলাদা করে</td></tr>
<tr><td class="hl">git restore --staged</td><td>টেবিল থেকে নামায়</td><td>ফেরত-নামানো, মুছলে নয়</td></tr>
<tr><td class="hl">git rm --cached</td><td>ভবিষ্যৎ ছবির নাগাল বাদ</td><td>ফাইল থাকে, ছবি যায় না</td></tr>
<tr><td class="hl">.gitignore</td><td>দরজার বাক্স — ঢুকতেই দেয় না</td><td>প্রতিরোধ সস্তা, প্রতিকার নয়</td></tr>
<tr><td class="hl">git diff --cached</td><td>ক্লিকে যাচ্ছে কী</td><td>ছবির আগের শেষ পরীক্ষা</td></tr>
</table>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>জামাল উদ্দিনের টেবিল-সতর্কতা:</strong> টেবিল ভুল সাজলে ছবি ভুল হয় — ক্লিকের আগে <strong>git diff --cached</strong> একবার চোখ বুলাও, এই এক অভ্যাসই লজ্জা বাঁচায়। আর .gitignore ফাইল আগে থেকেই ট্র্যাক হলে পরে লেখা নিয়ম তার পেছনে চাপে না — আগে git rm --cached, তারপর ignore। গোপন ফাইল (.env) একবার ছবিতে গেলে ইতিহাসে থাকে — সে ছবি মুছে ফেলাও নতুন ছবি, পুরোনোটা আলবামের গভীরেই থাকে (দরজা ৭-এ ইতিহাস লেখার বিধি)।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The table's caution:</strong> a mislaid table makes a wrong photograph — run <strong>git diff --cached</strong> before every click; this one habit saves shame. And .gitignore rules do not chase already-tracked files — first git rm --cached, then ignore. A secret file (.env) that has entered one photograph stays in history — deleting it later is a new photograph, the old one remains deep in the album (history-rewriting law in Door 7).</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ গুদাম-ছবি</div>git add . আর ক্লিক — প্রতিবার সব ঢুকে যায় · বাগ-ফিক্স আর ফিচার এক ছবিতে · ক্লিকের আগে দেখে না কী যাচ্ছে · node_modules আলবামে</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ কারিগরের টেবিল</div>add -p দিয়ে উদ্দেশ্য-ভাগ · ক্লিকের আগে diff --cached · এক ছবি এক কথা · .gitignore আগে, প্রতিকার পরে</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">add -p</div><div class="sc-label">hunk ধরে তোলা</div></div>
<div class="stat-card"><div class="sc-num">diff --cached</div><div class="sc-label">ক্লিকের আগের দর্পণ</div></div>
<div class="stat-card"><div class="sc-num">restore --staged</div><div class="sc-label">টেবিল থেকে ফেরত</div></div>
<div class="stat-card"><div class="sc-num">.gitignore</div><div class="sc-label">দরজার বাক্স</div></div>
</div>

<p class="verse">ইখতিসার — রাসূলের আদব: বল সংক্ষিপ্ত, উদ্দেশ্য পূর্ণ (যামীল আল-মুজাম আল-আওসাতের ভাবানুবাদ)। জামাল উদ্দিনের টেবিলও: ছবি ছোট, উদ্দেশ্য পূর্ণ — এক ছবিতে এক কথা, কিন্তু সে কথাটা পুরো। যে আলবামে প্রতিটা ছবি এক কথা বলে, সে আলবাম দশ বছর পরেও পড়া যায়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🖼️ add -p দিয়ে ভাগ, diff --cached দিয়ে চোখ, তারপর ক্লিক; .gitignore দরজাতেই জঞ্জাল আটকাও।<br>কারণ: ছবি সস্তা, বিশ্বাস নয় — ভুল ছবি আলবামে চিরকাল থাকে।</div></div>`,
  senior: {
    title: "ফ্রেম-টেবিলের খাতা — The Framing-Table Ledger",
    body: `<ul class="checklist">
<li>আজ থেকে ক্লিকের আগে সবসময় <strong>git diff --cached</strong> — চোখ বুলানোই কারিগরের শেষ ধাপ।</li>
<li>মিশ্র বদল এলে <strong>git add -p</strong>: y/n/s দিয়ে খণ্ড ভাগ করে উদ্দেশ্য-আলাদা ছবি।</li>
<li>ভুল তুলে ফেললে <strong>git restore --staged</strong> — টেবিল থেকে নামাও, ঘর নয়।</li>
<li>প্রতিটা নতুন প্রজেক্টে <strong>.gitignore প্রথম ছবির আগেই</strong>: জঞ্জাল আর গোপন দরজাতেই আটকাও।</li>
<li>এক ছবিতে এক কথা — বার্তা কাব্যিক নয়, <strong>কী বদলাল ও কেন</strong> বলে দেয় এমন লেখো।</li>
</ul>`
  }
});


// ── DOOR 3 · শাহিনা বেগমের গল্পের শাখা — Shahina Begum's Story Branches ──
doors.push({
  num: 3,
  icon: "🌿",
  color: "#86efac",
  name: "শাহিনা বেগমের গল্পের শাখা",
  subtitle: "Shahina Begum's Story Branches",
  tech: "branch · switch · detached HEAD · HEAD pointer",
  spirit: "শুজা-উল-হক — সত্য প্রতিদ্বন্দ্বিতা",
  secret: "branch মানে কোডের কপি নয় — ৪১ অক্ষরের একটা পোস্টার, যেটা একটা ছবির গায়ে আটকানো; নতুন শাখা = নতুন পোস্টার, ছবির আলবাম একটাই।",
  recall: {
    q: "branch কি প্রজেক্টের আলাদা কপি? না হলে কী? আর HEAD detached দেখে ভয় পেয়ে গেছো — আসলে কী হয়েছে, কী করবে?",
    qen: "Is a branch a separate copy of the project? If not, what? And HEAD detached just scared you — what actually happened, what do you do?",
    a: "branch কপি নয় — একটা ছোট ফাইল, যাতে একটা commit-এর ৪০-অক্ষরের নাম (SHA-1) লেখা; Git শুধু সেই নাম দেখে আলবামের কোন ছবি তাজা ধরে। নতুন শাখা মানে নতুন পোস্টার — আলবাম, ছবি, ঘর সব একটাই, মেমোরি প্রায় শূন্য খরচে। HEAD হলো বুকমার্ক: তুমি এখন কোন শাখায়। checkout করে ছবি-নাম ধরলে বুকমার্ক শাখা ছেড়ে সরাসরি ছবিতে বসে — detached HEAD: নতুন commit করলে সে কোনো শাখার নাগালে থাকে না, ভেসে যায় (GC-র ঝুড়ি)। উদ্ধার: git switch -c rescue — বুকমার্ক নতুন শাখায় বসাও, ছবিটা সেঁটে গেল।",
    aen: "A branch is not a copy — a tiny file holding one commit's 40-char SHA-1 name; Git reads that name to know which photograph is tip. New branch = new sticky-note; album, photos, room stay single, cost near zero. HEAD is the bookmark: which branch you are on. Checking out a commit name seats the bookmark directly on a photograph — detached HEAD: new commits there belong to no branch and drift (GC's basket). Rescue: git switch -c rescue — seat the bookmark on a new branch, the photograph is claimed."
  },
  story: `<p class="scene-setting">শাহিনা বেগম শহরের প্রখ্যাত কথাসাহিত্যিক — আর তাঁর কাজের ধরন শুনে সবাই প্রথমে হাসে, তারপর অবাক হয়। একটা উপন্যাস লিখতে গিয়ে তিনি বইয়ের তিনটা কপি বানান না — একটাই খাতা, তার পাতায় ছোট্ট পোস্টার: অফিসিয়াল সংস্করণ, পরীক্ষামূলক সংস্করণ, বন্ধুর জন্য খসড়া। পোস্টার বলে দেয় "এই খাতার গল্প এখন এখানে এসেছে"। মাঝপথে নতুন আইডিয়া এলে নতুন পোস্টার লাগান — পুরোনো খাতা ফেলে নতুন খাতা কিনতে হয় না। একদিন এক সাংবাদিক জিজ্ঞেস করলেন: কপি না বানালে গল্প তো মিশে যাবে? শাহিনা বেগম হাসলেন: গল্প মেশে না — কারণ আমি খাতা ভাগ করি না, শুধু পোস্টার বদলাই। প্রতিটা সংস্করণ জানে নিজের জায়গা, আর বুকমার্ক জানে আমি এখন কোনটা পড়ছি।</p>
<p class="scene-setting en">Shahina Begum is the city's famed novelist — and her method makes people laugh first, marvel later. Writing one novel she does not make three copies of the book — one notebook, with small sticky-notes on the page: official version, experimental version, draft for a friend. The note says "the story has reached here". A new idea mid-way means a new sticky-note — no buying a new notebook. A journalist once asked: without copies, won't the stories mix? She smiled: stories don't mix — I don't split the notebook, I only move the sticky-notes. Each version knows its place, and the bookmark knows which one I am reading now.</p>

<div class="code-block"># শাখা = পোস্টার, HEAD = বুকমার্ক:
git branch                      # পোস্টারের তালিকা (* মানে বুকমার্ক এখানে)
git branch experiment           # নতুন পোস্টার (এখনো যাওয়া হয়নি)
git switch experiment           # বুকমার্ক সরাও
git switch -c feature-x         # বানিয়ে যাও — রোজকার এক-লাইন
git switch -                    # আগের শাখায় ফেরো (- = আগেরটা)
git branch -d experiment        # পোস্টার খুলে ফেলো (merge না হলে জিদ ধরে: -D)

# পুরোনো নামের জগৎ (এখনো সব জায়গায় দেখবে):
git checkout experiment         # switch-এর পুরোনো রূপ
git checkout -b feature-x       # switch -c-এর পুরোনো রূপ

# ছবি-নাম ধরে বসা — detached HEAD:
git switch --detach abc1234     # বুকমার্ক শাখা ছেড়ে ছবিতে সরাসরি
git status                      # "HEAD detached at abc1234" — ভয় নয়, পড়ার মোড
#   এখানে commit করলে ছবিটা কোনো শাখার নাগালে থাকে না!
#   উদ্ধার: git switch -c rescue
#   আরও নিরাপদ: আগেই পোস্টার লাগাও — git branch rescue abc1234

# শাখার নাম বদল / নকশা দেখা:
git branch -m old new           # পোস্টারের লেখা বদলাও
git log --oneline --graph --all # সব শাখার নকশা — গাছ চোখে বাঁধে</div>

<div class="diagram">
<div class="diag-title">পোস্টার ও বুকমার্ক — Sticky-Notes and the Bookmark</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowS3" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#86efac"/></marker>
</defs>
<rect class="cell" x="15" y="130" width="530" height="40" rx="8"/>
<text class="lbl-sm" x="280" y="148">আলবাম (ছবির শৃঙ্খল): c1 ← c2 ← c3 ← c4</text>
<text class="lbl-sm" x="280" y="164">main পোস্টার → c4 · feature পোস্টার → c2 (নতুন কাজ এখান থেকে জন্ম নেবে)</text>
<rect class="node-leaf" x="60" y="40" width="120" height="40" rx="9"/><text class="lbl-leaf" x="120" y="64">HEAD → main</text>
<rect class="node" x="220" y="40" width="130" height="40" rx="9"/><text class="lbl" x="285" y="64">main → c4</text>
<rect class="node-cyan" x="390" y="40" width="140" height="40" rx="9"/><text class="lbl-cyan" x="460" y="64">feature → c2</text>
<line x1="180" y1="60" x2="216" y2="60" stroke="#86efac" stroke-width="2" fill="none" marker-end="url(#arrowS3)"/>
<line x1="350" y1="60" x2="386" y2="60" stroke="#86efac" stroke-width="2" fill="none" marker-end="url(#arrowS3)"/>
<rect class="node-hot" x="15" y="8" width="270" height="24" rx="6"/><text class="lbl-sm" x="150" y="24">⚠ বুকমার্ক ছবিতে সরাসরি বসলে = detached (দরজা ৭-এ উদ্ধার)</text>
</svg>
<div class="diag-cap">শাখা সস্তা কারণ সে শুধু নাম-ধরা পোস্টার; HEAD সস্তা কারণ সে শুধু বুকমার্ক — আলবাম একটাই।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>শাহিনা বেগমের শাখা-সতর্কতা:</strong> detached HEAD-এ commit করা মানে অনাথ ছবি — শাখা বানিয়ে নাও আগে (switch -c), তারপর লেখো। আর শাখার নাম নিজের প্রশ্ন: feature/login-v2 — নাম দেখেই কেন-ই-কী বোঝা যায়; fix-stuff, temp, new-branch জাতীয় নাম ছয় মাস পরে নিজেই পড়তে পারবে না। আর -d দিয়ে মুছতে গিয়ে Git জিদ ধরলে থামো — সে merge-হয়নি এমন কাজ পাহারা দিচ্ছে; নিশ্চিত হয়েই -D।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The branch caution:</strong> committing in detached HEAD makes an orphan photograph — create the branch first (switch -c), then write. And name branches as their own answer: feature/login-v2 — the name alone says why-what; fix-stuff and temp are unreadable in six months. If -d refuses to delete, stop — Git is guarding unmerged work; only -D when certain.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ কপি-কারখানা</div>প্রতি পরীক্ষায় পুরো প্রজেক্ট কপি করে রাখে (final_REAL_v2/) · branch-কে কপি ভাবে · detached HEAD দেখে টার্মিনাল বন্ধ করে পালায় · temp, fix-stuff নামের শাখার জঞ্জাল</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ পোস্টার-শাসিত লেখক</div>শাখা = নাম-ধরা পোস্টার, রোজ নতুন শাখা সস্তা · switch -c এক-লাইনে বানিয়ে যাও · নামেই কেন-কী · detached হলে আগে branch, পরে কাজ</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৪১ বাইট</div><div class="sc-label">শাখার প্রকৃত দাম — একটা ফাইল, একটা নাম</div></div>
<div class="stat-card"><div class="sc-num">switch -c</div><div class="sc-label">বানিয়ে যাওয়ার এক-লাইন</div></div>
<div class="stat-card"><div class="sc-num">HEAD</div><div class="sc-label">বুকমার্ক — তুমি এখন কোথায়</div></div>
<div class="stat-card"><div class="sc-num">--detach</div><div class="sc-label">অতীত পড়ার মোড — লেখার নয়</div></div>
</div>

<p class="verse">সত্য প্রতিদ্বন্দ্বিতা — কুরআন: আমি অবতীর্ণ করেছি সত্য, আর সত্যের সাথে এসেছে সে (১৭:৮১-এর ভাবানুবাদে প্রতিযোগিতার নীতি)। শাহিনা বেগমের শাখাও: ভয়ে এক সংস্করণ নয় — একসাথে কয়েক সত্য বেঁচে থাকে, প্রতিটা নিজের জায়গায়, বুকমার্ক সাক্ষী।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🌿 শাখা পোস্টার মাত্র, HEAD বুকমার্ক; switch -c বানিয়ে যাও, detached-এ লেখো না।<br>কারণ: যে খাতা ভাগ করে না, তার গল্প মেশে না।</div></div>`,
  senior: {
    title: "শাখা-লেখকের খাতা — The Branch-Writer's Ledger",
    body: `<ul class="checklist">
<li>নতুন কাজ? প্রথম কমান্ডই <strong>git switch -c feature/নাম</strong> — main-এ সরাসরি কাজ নয়।</li>
<li>শাখার নাম প্রশ্নবোধক: <strong>fix/login-timeout</strong> — ছয় মাস পরেও নামই কারণ বলে।</li>
<li>detached HEAD দেখলে আগে <strong>git switch -c rescue</strong> — ছবি উদ্ধার, তারপর কাজ।</li>
<li>মুছতে <strong>-d</strong>; Git আটকালে থামো — unmerged কাজের পাহারা, নিশ্চিত হয়ে -D।</li>
<li>সপ্তাহে একবার <strong>git log --oneline --graph --all</strong> — নিজের গাছটা চোখে বাঁধো।</li>
</ul>`
  }
});


// ── DOOR 4 · মিয়া বসিরের মিলন-আসর — Miya Basir's Union Hall ──
doors.push({
  num: 4,
  icon: "🎋",
  color: "#f59e0b",
  name: "মিয়া বসিরের মিলন-আসর",
  subtitle: "Miya Basir's Union Hall",
  tech: "merge · fast-forward vs three-way · conflict resolution",
  spirit: "শুরা — পরামর্শে মিলন",
  secret: "দুই গল্প এক আসরে মেলাও: সরলরেখা হলে fast-forward (নতুন ছবি লাগেই না), ভাগ হলে three-way merge — নতুন মিলন-ছবি; একই লাইনে দুই হাত পড়লে Git থামিয়ে জিজ্ঞেস করে: তুমি কোনটা রাখবে?",
  recall: {
    q: "git merge feature চালিয়ে 'Already up to date' পেলে কী হয়েছিল? আর 'Fast-forward' আর 'Merge made by the ort strategy' — দুটোর তফাত কখন হয়?",
    qen: "git merge feature returned 'Already up to date' — what happened? And when do you see 'Fast-forward' versus 'Merge made by the ort strategy'?",
    a: "Already up to date মানে feature-এর সব ছবি main-এ আগেই আছে — মিলনের কিছু নেই। Fast-forward হয় যখন main সময়ের স্রোতে feature-এর জন্ম-ছবির পরে আর এগোয়নি — Git শুধু পোস্টার টেনে সামনে নিয়ে যায়, নতুন ছবি লাগে না। কিন্তু দুই শাখাই আলাদা ছবি বানিয়ে থাকলে three-way merge: সাধারণ পূর্ব-পুরুষ ছবি খুঁজে তিন দিক মিলিয়ে নতুন মিলন-ছবি (merge commit) তৈরি হয়। একই ফাইলের একই লাইনে দুই শাখা ভিন্ন কথা লিখলে conflict — Git থামে, ফাইলে <<<<<<< markers বসায়; তুমি ঠিক করো, add, তারপর commit মিলন-ছবি।",
    aen: "Already up to date means every feature photograph already sits in main — nothing to unite. Fast-forward happens when main never advanced past feature's birth photograph — Git just slides the sticky-note forward, no new picture. But if both branches made their own photographs, three-way merge: find the common ancestor, blend three sides into a new union photograph (merge commit). If both wrote different words on the same line, conflict — Git stops, plants <<<<<<< markers; you decide, add, then commit the union."
  },
  story: `<p class="scene-setting">মিয়া বসিরের মিলন-আসর শহরের দুই মহল্লার গল্প এক করার জায়গা — বিয়েভাত থেকে বাজার-সাজেশন পর্যন্ত সব মিলন এখানেই। তাঁর আসরে দুই নিয়ম। প্রথম নিয়ম: এক পক্ষ যদি অন্য পক্ষের কাজের পুরো পথ ধরে থাকে — অর্থাৎ এক পক্ষ সামনে এগিয়ে গেছে, অন্যটা শুধু সেই পথ ধরে হেঁটেছে — তাহলে মিলন নামের কিছু লাগে না; বড় পক্ষের কথাই চলবে (fast-forward)। দ্বিতীয় নিয়ম: দুই পক্ষ দুই দিক থেকে নিজের কাজ এনেছে — তখন মিয়া বসির একটা মিলন-ছবি তোলেন: দুই পক্ষের প্রতিনিধি এক ফ্রেমে, পেছনে লেখা কার কাজ কী দিয়ে মিলল (three-way merge)। কিন্তু থার্ড নিয়মটা তাঁর রসিকতা নয় — দুই পক্ষ যদি একই জায়গায় ভিন্ন কথা বসায় (একই দেয়ালে দুই নাম), মিয়া বসির কলম থামিয়ে ফেলেন আর মাঝখানে দাঁড় করিয়ে দেন দুই পক্ষকে: এই দেয়ালে শেষ কথা একটাই হবে — তুমি বলো, কোনটা।</p>
<p class="scene-setting en">Miya Basir's union hall joins the stories of two neighbourhoods — weddings to market committees, every union happens here. Two rules govern his hall. First: if one side fully contains the other's path — one side advanced, the other simply followed — no union ceremony is needed; the bigger side's word stands (fast-forward). Second: when both sides bring their own work from two directions, Miya Basir takes a union photograph: representatives of both in one frame, the back noting whose work joined how (three-way merge). But the third rule is no joke — if the two sides put different names on the same wall, he stops his pen and stands both parties in the middle: this wall gets exactly one final word — you tell me which.</p>

<div class="code-block"># মিলন-আসরের তিন দৃশ্য:
git switch main
git merge feature
# ① "Already up to date."     — feature এমন কিছু নিয়ে আসেনি
# ② "Fast-forward"            — main জন্ম-ছবির পরে এগোয়নি; পোস্টার টান
# ③ "Merge made by 'ort'"     — দুই শাখার নিজের ছবি; মিলন-ছবি তৈরি

# মিলন-ছবি না চাইলে (সরলরেখা পছন্দ):
git merge --no-ff feature -m "মিলন: feature এসেছে"
#   --no-ff বাধ্য করে মিলন-ছবি তুলতে — গাছে দুই শাখার মিলন দেখা যায়

# তৃতীয় দৃশ্য — দেয়ালে দুই নাম (conflict):
git merge feature
# CONFLICT (content): Merge conflict in login.py
#   ফাইল খোলো:
#   <<<<<<< HEAD
#   timeout = 30            ← main-এর কথা
#   =======
#   timeout = 10            ← feature-এর কথা
#   >>>>>>> feature
nano login.py                # ঠিক করো: যেটা রাখবে সেটাই (বা মিশ্রণ)
git add login.py             # দেয়াল তৈরি — টেবিলে তোলো
git commit                   # মিলন-ছবি (Git নিজে বার্তা লিখে দেয়)

# মিলন বাতিল — আসর ভেঙে দাও:
git merge --abort            # শুরুর অবস্থায় ফেরো, কিছুই হয়নি

# মিলন-ছবির পেছনের লেখা পড়া:
git log --oneline --graph    # মিলনের গাছ দেখো
git show                     # মিলন-ছবির ভেতরের হিসাব</div>

<div class="diagram">
<div class="diag-title">মিলনের তিন দৃশ্য — The Three Scenes of Union</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<rect class="cell" x="15" y="12" width="530" height="40" rx="8"/>
<text class="lbl-sm" x="280" y="30">দৃশ্য ② fast-forward: main পোস্টার c2 → c4-এ টান (নতুন ছবি নেই)</text>
<text class="lbl-sm" x="280" y="46">c1 ← c2 ← c3 ← c4  …main ও feature দুজনই c4-এ</text>
<rect class="node" x="30" y="90" width="70" height="34" rx="8"/><text class="lbl-sm" x="65" y="111">c1</text>
<rect class="node" x="130" y="90" width="70" height="34" rx="8"/><text class="lbl-sm" x="165" y="111">c2</text>
<rect class="node-cyan" x="230" y="90" width="70" height="34" rx="8"/><text class="lbl-sm" x="265" y="111">c3</text>
<rect class="node-cyan" x="330" y="90" width="70" height="34" rx="8"/><text class="lbl-sm" x="365" y="111">c4</text>
<rect class="node-hot" x="440" y="90" width="100" height="34" rx="8"/><text class="lbl-sm" x="490" y="111">মিলন-ছবি M</text>
<line x1="100" y1="107" x2="126" y2="107" stroke="#f59e0b" stroke-width="2"/>
<line x1="200" y1="107" x2="226" y2="107" stroke="#f59e0b" stroke-width="2"/>
<line x1="300" y1="107" x2="326" y2="107" stroke="#f59e0b" stroke-width="2"/>
<line x1="400" y1="107" x2="436" y2="107" stroke="#f59e0b" stroke-width="2"/>
<rect class="cell-hot" x="15" y="150" width="530" height="40" rx="8"/>
<text class="lbl-sm" x="280" y="168">দৃশ্য ③ three-way: c2 থেকে দুই শাখা — main-এর ছবি, feature-এর ছবি; M দুজনকে জোড়ে</text>
<text class="lbl-sm" x="280" y="184">⚠ একই লাইনে দুই হাত = conflict: থামো → ঠিক করো → add → commit</text>
</svg>
<div class="diag-cap">সরলরেখায় টান, ভাগে মিলন-ছবি, সংঘর্ষে মানুষের সিদ্ধান্ত — আসরের তিন নিয়ম।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>মিলন-আসরের সতর্কতা:</strong> conflict ব্যর্থতা নয় — থামার চিহ্ন; ভয় পেয়ে merge --abort করা আর ঘণ্টার কাজ ফেলে দেওয়ার চেয়ে markers পড়ে ঠিক করা সহজ। আর মিলন-ছবির বার্তা (Merge branch 'feature') মুছে বিয়ে-উৎসবের কবিতা লিখো না — সে শুধু হিসাব। আর মিলনের আগে টেবিল পরিষ্কার (status খালি) রাখো — আধা-সাজানো ঘরে আসর বসে না।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The union-hall caution:</strong> a conflict is not failure — a stop sign; reading markers and fixing beats aborting hours of work. Don't replace the merge message (Merge branch 'feature') with wedding poetry — it is an accounting entry. And enter the hall with a clean table (empty status) — no ceremony assembles in a half-arranged room.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ এক-পক্ষের আসর</div>conflict দেখেই panic --abort · দুই শাখার কাজ হাতে কপি-পেস্ট করে মেলায় · মিলন-ছবির বার্তা পাল্টে গল্প লেখে · অস্থির ঘরে (uncommitted) merge চালায়</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ মিয়া বসিরের আসর</div>conflict = থামার চিহ্ন: পড়ো → ঠিক করো → add → commit · --abort শেষ অস্ত্র · মিলন আগে টেবিল খালি · গাছ --graph দিয়ে পড়া</div>
</div>

<p class="verse">শুরা — তাদের কাজ পরস্পর পরামর্শে (কুরআন ৩:১৫৯-এর ভাবানুবাদ: তাদের সাথে পরামর্শ করো)। মিলন-আসরও: Git নিজে থেকে কার কথা রাখবে বলে না — থামিয়ে জিজ্ঞেস করে; সিদ্ধান্ত মানুষের, হিসাব আসরের।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🎋 সরলরেখা হলে টান (ff), ভাগ হলে মিলন-ছবি; সংঘর্ষে থামো-ঠিক করো-add-commit।<br>কারণ: আসর মিলায়, বিচার করে না — শেষ কথা তোমার।</div></div>`,
  senior: {
    title: "মিলন-আসরের খাতা — The Union-Hall Ledger",
    body: `<ul class="checklist">
<li>মিলনের আগে সবসময় <strong>git status</strong> — খালি টেবিলে নয় আসর বসে না।</li>
<li>conflict markers পড়ো: <strong>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD বনাম &gt;&gt;&gt;&gt;&gt;&gt;&gt; branch</strong> — কে কী চায়, তারপর সিদ্ধান্ত।</li>
<li>ঠিক করা শেষে <strong>git add</strong> (দেয়াল তৈরি) → <strong>git commit</strong> (মিলন-ছবি)।</li>
<li>পালাতে চাইলে <strong>git merge --abort</strong> — কিন্তু সেটা শেষ অস্ত্র, প্রথম প্রতিক্রিয়া নয়।</li>
<li>গাছ পড়ার অভ্যাস: <strong>git log --oneline --graph --all</strong> — মিলনগুলো চোখে পড়বে।</li>
</ul>`
  }
});


// ── DOOR 5 · কামরুল হালিমের সারি-সাজানোর কারখানা — Kamrul Halim's Reprinting Shop ──
doors.push({
  num: 5,
  icon: "🎞️",
  color: "#fcd34d",
  name: "কামরুল হালিমের সারি-সাজানোর কারখানা",
  subtitle: "Kamrul Halim's Reprinting Shop",
  tech: "rebase · golden rule · interactive rebase",
  spirit: "ইসলাহ — সংশোধনের শিল্প",
  secret: "rebase মানে ছবির সারি নতুন করে ছাপা — push-এর আগে যত খুশি, push-এর পরে কখনো নয়; খসড়া সাজাও, প্রকাশিত বই নয়।",
  recall: {
    q: "feature শাখায় ৫টা commit, আর main এগিয়ে গেছে। merge করলে ইতিহাস বাঁকা হয়, সরল রাখতে চাও। কী করবে — আর কখনোই করবে না এমন শর্তটা কী?",
    qen: "Five commits on feature, main has advanced. You want linear history instead of a merge bump. What do you do — and what is the never-do condition?",
    a: "git switch feature → git rebase main: Git তোমার ৫টা ছবি তুলে রাখে (patch হিসেবে), feature-কে main-এর তাজা শেষে বসায়, তারপর ছবিগুলো নতুন করে একে একে ছাপে — a'--b'--c' (নতুন নাম, পুরোনো বার্তা)। ইতিহাস সরলরেখা। শর্ত (সোনার নিয়ম): যে শাখা ইতিয়াদ অন্যের হাতে গেছে (push করা হয়েছে) — তার ইতিহাস কখনো পুনরায় ছাপো না; ছাপাঘর শুধু নিজের খসড়ার জন্য। ভাঙলে অন্যের আলবামের সাথে তোমার আলবামের ছবি-নাম মিলবে না আর বিশ্বাস ভাঙবে।",
    aen: "git switch feature → git rebase main: Git lifts your five photographs aside (as patches), seats feature on main's fresh tip, then reprints them one by one — a'--b'--c' (new names, old messages). History becomes a straight line. The condition (the golden rule): never reprint a branch whose photographs have already left your hands (pushed) — the shop is for your own drafts only. Break it and your album's photograph names stop matching everyone else's; trust breaks."
  },
  story: `<p class="scene-setting">কামরুল হালিমের ছাপাঘর শহরের সবচেয়ে পুরোনো — আর তাঁর বিখ্যাত নিয়ম: আমি ছাপি খসড়া, প্রকাশিত বই নয়। লেখকেরা আসেন আধা-লেখা পাণ্ডুলিপি নিয়ে: এই তিনটা অধ্যায় আগে ছিল, এখন নতুন তথ্য এসেছে, সাজিয়ে দাও। কামরুল হালিম পাণ্ডুলিপির পাতাগুলো খুলে রাখেন, সব ঠিক করে নতুন কাগজে বসান, আর কপিরাইটের পাতায় লেখেন — নতুন সংস্করণ। কিন্তু একটা কাজ তিনি করবেন না, কত টাকা দিলেও: যে বই ইতিমধ্যে দোকানে গেছে, পাঠকের হাতে গেছে — সেটার পাতা গোপনে বদলে দেওয়া। পাঠকের কপির পাতা-নম্বর তাঁর কপির সাথে মিলবে না, প্রশ্ন করলে পাঠকের হাতের পাতা আর দোকানের পাতা ভিন্ন ভিন্ন — বিশ্বাসের প্রশ্ন হয়ে যাবে। তাঁর কথা: ছাপাঘরের কাজ সাজানো, অতীত লুকানো নয়।</p>
<p class="scene-setting en">Kamrul Halim's printing shop is the city's oldest — and his famous rule: I reprint drafts, not published books. Writers arrive with half-finished manuscripts: these three chapters came before, new facts have arrived, rearrange it. He unbinds the pages, sets them right on fresh paper, and notes on the copyright page — new edition. But one job he will not take at any price: secretly replacing pages of a book already in shops, already in readers' hands. The reader's page numbers would stop matching the shop's copies — a matter of trust. His saying: the shop's work is arranging, not hiding the past.</p>

<div class="code-block"># ছাপাঘরের মূল কাজ — সারি পুনঃছাপা:
git switch feature
git rebase main
#   তোমার ছবি patch হয়ে খামে, feature → main-এর তাজা শেষে,
#   একে একে নতুন করে ছাপা: a'--b'--c' (নতুন SHA, পুরোনো বার্তা)
# সংঘর্ষ হলে (একই লাইনে দুই হাত):
#   ঠিক করো → git add → git rebase --continue
#   পালাতে: git rebase --abort (কিছুই হয়নি)
#   একটা ছবি বাদ: git rebase --skip

# সোনার নিয়ম — দেয়ালে লিখে রাখো:
#   প্রকাশিত (push করা) শাখার ইতিহাস কখনো rebase করো না।

# খসড়া ঘষামাজা — interactive rebase:
git rebase -i main
#   এডিটরে তালিকা খুলবে (পুরোনো থেকে নতুন):
#   pick a1a1 লগইন যোগ
#   pick b2b2 টাইমআউট ফিক্স
#   pick c3c3 typo
#   আদেশ বদলে সাজাও:
#   pick   = রেখে দাও          squash = আগেরটার সাথে গুলে দাও
#   reword = বার্তা বদলাও      fixup  = squash, বার্তা ফেলে
#   edit  = এখানে থামো         drop   = ছবি বাদ (লাইন মুছলেই)
#   উদাহরণ — ৩ ছবিকে ১ করা:
#   pick a1a1 লগইন যোগ
#   fixup b2b2 টাইমআউট ফিক্স
#   fixup c3c3 typo

# পুনঃছাপার পরে push করা শাখায় (নিজের একলা শাখা হলে):
git push --force-with-lease
#   সাধারণ --force নয়! lease দেখে যাও অন্য কেউ ছুঁয়েছে কিনা —
#   নিজের অজান্তে অন্যের ছবি মুছে ফেলো না</div>

<table class="kv-table">
<tr><th>আদেশ</th><th>কী করে</th><th>কখন</th></tr>
<tr><td class="hl">rebase main</td><td>ছবিগুলো main-এর শেষে পুনঃছাপা</td><td>PR-এর আগে নিজের শাখা সরল করতে</td></tr>
<tr><td class="hl">rebase -i</td><td>সাজাও/গুলো/বাদ/বার্তা-বদল</td><td>খসড়ায় ৮টা ছবিকে ২-১টা করতে</td></tr>
<tr><td class="hl">--continue / --abort</td><td>সংঘর্ষের পরে চালাও / পালাও</td><td>conflict-এর দুই উত্তর</td></tr>
<tr><td class="hl">--force-with-lease</td><td>নিরাপদ জোর-push</td><td>শুধু নিজের rebase-করা শাখা, সতর্ক চোখে</td></tr>
</table>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ছাপাঘরের সতর্কতা:</strong> সোনার নিয়ম ভাঙলে ফেরত পথ কষ্টকর — অন্যের ক্লোনের সাথে ইতিহাস মিলবে না, একই কাজের দুই সেট ছবি তৈরি হবে। নিয়ম: <strong>push-এর আগে rebase যত খুশি, push-এর পরে rebase নয়</strong> — যদি না শাখাটা একমাত্র তোমার এবং জানো কেউ দেখছে না। আর --force-with-lease-ও শেষ অস্ত্র: lease ভাঙলে (অন্য কেউ push করেছে) থামো, pull/rebase করে দেখো।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The shop's caution:</strong> breaking the golden rule makes the road back painful — histories stop matching other clones, two sets of photographs for one work appear. The rule: <strong>rebase freely before push, never after</strong> — unless the branch is yours alone and unseen. And --force-with-lease is a last weapon: if the lease breaks (someone pushed), stop and look.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ প্রকাশিত বই ছাপাঘরে</div>push করা শাখায় rebase → --force · দলের main-এ জোর-push · ২০ ছবির খসড়া PR-এ ঢালে · conflict-এ --skip চালিয়ে যায়</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ খসড়া-শাসিত ছাপাঘর</div>PR-এর আগে rebase main · -i দিয়ে fixup-সাজানো ছোট ছবি · push-এর পরে ইতিহাস অলঙ্ঘনীয় · --force-with-lease, শেষ অস্ত্র</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">a' b' c'</div><div class="sc-label">পুনঃছাপা ছবি — নতুন নাম, পুরোনো বার্তা</div></div>
<div class="stat-card"><div class="sc-num">-i</div><div class="sc-label">খসড়া ঘষামাজার টেবিল</div></div>
<div class="stat-card"><div class="sc-num">fixup</div><div class="sc-label">ছোট ছবি এক করার আঠা</div></div>
<div class="stat-card"><div class="sc-num">lease</div><div class="sc-label">জোর-push-এর নিরাপত্তা-কবচ</div></div>
</div>

<p class="verse">ইসলাহ — প্রকাশের আগে নিজের কাজ শুদ্ধ করা: রাসূলের পাঠ শিক্ষা ছিল ধীরে, সংশোধনে, খসড়া স্তরে (তিনি বলতেন সবচেয়ে প্রিয় আমল নিয়মিতটা — অথচ প্রেরণের আগে জিবরীলের সাথে বছরজুড়ে তার বিশুদ্ধতা যাচাই)। কামরুল হালিমের ছাপাঘরও তাই: খসড়া শোধরাও যত খুশি, কিন্তু প্রকাশিতের পাতা অলঙ্ঘনীয়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🎞️ push-এর আগে rebase যত খুশি, push-এর পরে কখনো নয়; -i দিয়ে খসড়া ঘষামাজা, জোর-দরকার হলে lease।<br>কারণ: পাঠকের হাতের বইয়ের পাতা বদলানো বিশ্বাস ভাঙে।</div></div>`,
  senior: {
    title: "ছাপাঘরের খাতা — The Reprinting-Shop Ledger",
    body: `<ul class="checklist">
<li>PR খোলার আগে রীতি: <strong>git fetch → git rebase origin/main</strong> — শাখা সরল ও তাজা।</li>
<li>খসড়ার জঞ্জাল সাজাও: <strong>git rebase -i origin/main</strong> — fixup দিয়ে একই কাজের টুকরো এক ছবিতে।</li>
<li>সোনার নিয়ম জায়গায় জায়গায় মনে করো: <strong>push-এর পরে = প্রকাশিত</strong>; ইতিহাস অলঙ্ঘনীয়।</li>
<li>rebase-এর conflict: ঠিক করো → add → <strong>--continue</strong>; পালাও <strong>--abort</strong>।</li>
<li>নিজের শাখায় জোর দরকারে <strong>--force-with-lease</strong> — সাধারণ force কখনোই নয়।</li>
</ul>`
  }
});
