// ════════════════════════════════════════
// Book 61 · The Studio of Time — Doors 6-10
// Every command verified against git-scm.com
// ════════════════════════════════════════
// ── DOOR 6 · ফারিহা সুলতানার আয়না-ঘর — Farhana Sultana's Mirror Room ──
doors.push({
  num: 6,
  icon: "🪟",
  color: "#93c5fd",
  name: "ফারিহা সুলতানার আয়না-ঘর",
  subtitle: "Farhana Sultana's Mirror Room",
  tech: "remote · fetch vs pull vs push · upstream · fork + PR",
  spirit: "আমানত — অন্যের ঘরে পাঠানো বিশ্বাস",
  secret: "আয়না-ঘরে তিন কাজ: ঝাঁপি (fetch — শুধু দেখো), আনয়ন (pull — ঝাঁপি + মিলন), প্রেরণ (push — নিজের ছবি তোলো); rejected মানে অভদ্রতা নয় — আয়না বলছে আগে আমার নতুন ছবি নাও।",
  recall: {
    q: "git push করতেই '! [rejected] — fetch first'। কেন হলো, ঠিক করার সঠিক ধারাটা কী — আর কোন আদেশটা এখানে কখনোই চালাবে না?",
    qen: "git push returned '! [rejected] — fetch first'. Why, what is the correct fix sequence — and which command must you never run here?",
    a: "কারণ: আয়না-ঘরে (remote) এমন ছবি আছে যা তোমার আলবামে নেই — তোমার শাখা পেছনে। ধারা: git fetch origin → দেখো (git log main..origin/main) → git pull (বা rebase) → তারপর git push। কখনোই চালাবে না: git push --force — সে আয়নার নতুন ছবি মুছে তোমারটা বসায়; অন্য কারও কাজ শূন্যে। নিজের একলা শাখায় rebase-এর পরেও --force-with-lease (দরজা ৫)। আর pull = fetch + merge এক লাইনে; সরল রাখতে pull --rebase।",
    aen: "Cause: the mirror room holds photographs your album lacks — your branch is behind. Sequence: git fetch origin → inspect (git log main..origin/main) → git pull (or rebase) → git push. Never run: git push --force — it erases the mirror's newer photographs and seats yours; someone's work goes to void. Even after rebasing your own solo branch, use --force-with-lease (Door 5). And pull = fetch + merge in one line; pull --rebase keeps it linear."
  },
  story: `<p class="scene-setting">ফারিহা সুলতানার আয়না-ঘর শহরের কেন্দ্রে — মানুষ নিজের ঘরের ছবি পাঠায়, আর আয়না-ঘরে হুবহু একটা আয়না-আলবাম বসে যায়। কয়েকজন মিলে এক ঘর সাজালে সবাই নিজের ছবি আয়নায় পাঠায়, আয়না থেকে অন্যের ছবি টেনে আনে — এভাবেই দূরের মানুষ এক ঘর সাজায়। তাঁর ঘরে তিনটা দরজা: ঝাঁপি-দেওয়ার জানালা (fetch — আয়নায় নতুন ছবি এসেছে কি শুধু দেখো, নিজের ঘরে কিছুই বদলায় না), আনয়ন-দরজা (pull — ঝাঁপি + নিজের আলবামে মিলন), আর প্রেরণ-দরজা (push — নিজের ছবি আয়নায় তোলো)। একদিন এক শাগরেদ সকালে ঝাঁপি না দিয়েই সোজা প্রেরণ-দরজায় গেল — দরজা বন্ধ: আয়নায় রাতের ছবিগুলো তার আলবামে নেই। রেগে সে জোর করে দরজা ভাঙল (--force) — রাতের সব ছবি আয়না থেকে মুছে গেল; সকালে এসে দেখে তার সহকর্মীর সারারাতের কাজ শূন্য। ফারিহা সুলতানা সেদিন শিখিয়েছিলেন: দরজা rejected করলে সে অভদ্র নয় — সে সৎ; আগে ঝাঁপি, পরে মিলন, তারপর প্রেরণ।</p>
<p class="scene-setting en">Farhana Sultana's mirror room sits at the city's centre — people send photographs of their rooms, and an exact mirror-album assembles there. When several people furnish one room together, each sends photographs to the mirror and pulls others' back — that is how distant people build one room. Her hall has three doors: the dusting window (fetch — see whether the mirror holds new photographs; your own room changes nothing), the bringing door (pull — dust plus merge into your album), and the sending door (push — lift your photographs into the mirror). One morning an apprentice skipped the dusting and went straight to sending — the door refused: the mirror held overnight photographs his album lacked. Furious, he forced the door (--force) — the overnight photographs vanished from the mirror; his colleague's night of work went to void. That day Farhana Sultana taught: a rejected door is not rude — it is honest; dust first, merge next, send last.</p>

<div class="code-block"># আয়না-ঘরের নাম-ঠিকানা:
git remote -v                     # কোন কোন আয়না, কোথায়
git remote add origin <url>       # নতুন আয়না যোগ (init-এর পরে)
git remote add upstream <url>     # fork-এ মূল ঘর (নিচে দেখো)

# তিন দরজা:
git fetch origin                  # ① ঝাঁপি — শুধু দেখো
git log main..origin/main         #    আয়নায় কী নতুন এলো
git diff main origin/main         #    কী বদলাল
git pull                          # ② আনয়ন = fetch + merge
git pull --rebase                 #    মিলন-ছবি নয়, সরলরেখা (দরজা ৫-এর সাথী)
git push                          # ③ প্রেরণ — নিজের ছবি আয়নায়
git push -u origin feature        #    প্রথমবার + সম্পর্ক-নথি লেখো

# সম্পর্ক-নথি (upstream / tracking):
git branch -vv                    # কোন শাখা কোন আয়নার সাথে
#   * feature  abc1234 [origin/feature: ahead 2] ...
git status                        # "Your branch is ahead by 2..."
git push --set-upstream origin feature   # নথি হাতে লেখো

# rejected-এর সৎ উত্তর:
git fetch origin && git rebase origin/main && git push
#   কখনোই: git push --force  ← আয়নার অন্যের ছবি মুছে দেয়!
#   নিজের rebase-করা একলা শাখায়: --force-with-lease

# মোহর (tag) — বিশেষ ছবির সিল:
git tag -a v1.0 -m "প্রথম প্রকাশ"
git push --tags                   # মোহরও আয়নায় যায় (push ডিফল্টে নেয় না)

# অন্যের ঘরে কাজ — fork + pull request:
# ① GitHub-এ fork (নিজের খানায় কপি নাও)
git clone <তোমার-fork-এর url>
git remote add upstream <মূল-ঘরের url>
# ② শাখায় কাজ → commit → push (নিজের fork-এ)
git switch -c fix/readme-typo
# ③ PR — মালিকের কাছে প্রস্তার-চিঠি; মালিক মিলনাবে না নিজে বসবেন
# ④ মূল ঘর এগোলে:
git fetch upstream && git rebase upstream/main</div>

<div class="diagram">
<div class="diag-title">তিন দরজার আয়না-ঘর — The Three Doors of the Mirror Room</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowF6" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#93c5fd"/></marker>
</defs>
<rect class="node" x="15" y="70" width="170" height="56" rx="10"/><text class="lbl" x="100" y="92">তোমার স্টুডিও</text><text class="lbl-sm" x="100" y="110">local album + HEAD</text>
<rect class="node-cyan" x="375" y="70" width="170" height="56" rx="10"/><text class="lbl-cyan" x="460" y="92">আয়না-ঘর (origin)</text><text class="lbl-sm" x="460" y="110">remote mirror</text>
<rect class="node-hot" x="205" y="15" width="150" height="36" rx="9"/><text class="lbl-hot" x="280" y="38">fetch = শুধু ঝাঁপি</text>
<line x1="185" y1="84" x2="371" y2="84" stroke="#93c5fd" stroke-width="2" fill="none" marker-end="url(#arrowF6)"/>
<text class="lbl-sm" x="278" y="76">push — নিজের ছবি পাঠাও</text>
<line x1="371" y1="118" x2="185" y2="118" stroke="#93c5fd" stroke-width="2" fill="none" marker-end="url(#arrowF6)"/>
<text class="lbl-sm" x="278" y="134">pull = fetch + merge</text>
<rect class="cell" x="15" y="150" width="530" height="30" rx="8"/><text class="lbl-sm" x="280" y="169">rejected = আয়না সৎ: fetch → (merge|rebase) → push — force কখনোই না, lease শেষ অস্ত্র</text>
</svg>
<div class="diag-cap">ঝাঁপি, আনয়ন, প্রেরণ — এই ক্রমেই আয়না-ঘরের শান্তি; উল্টো দিকে জোর করলে সবার কাজ ঝুঁকিতে।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>আয়না-ঘরের সতর্কতা:</strong> push --force শেয়ার্ড শাখায় অন্যের কাজ মুছে দেয় — এটা ভুল নয়, দুর্ঘটনা; নিষেধ। pull-এর অভ্যাস হিসেবে --rebase রাখলে ইতিহাস সরল থাকে (git config --global pull.rebase true)। আর fetch-এর পরে origin/main তোমার শাখা নয় — আয়নার প্রতিবিম্ব; সেখানে সরাসরি কাজ করতে যেও না, নিজের শাখায় এনে মেলাও।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The mirror-room caution:</strong> push --force on a shared branch erases others' work — not a mistake but an accident; forbidden. Keeping pull --rebase as habit keeps history linear (git config --global pull.rebase true). And after fetch, origin/main is the mirror's reflection, not your branch — never work on it directly; bring it into your branch and merge.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ দরজা-ভাঙা শাগরেদ</div>fetch ছাড়া push · rejected দেখে --force · origin/main-এ সরাসরি commit · fork-এ upstream যোগ করে না PR-এর আগে</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✆ ফারিহা-শাসিত আয়না</div>দিন শুরু fetch · pull --rebase · push -u প্রথমবার · branch -vv দিয়ে সম্পর্ক-নথি পড়া · PR-এ upstream-সামঞ্জস্য</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">fetch</div><div class="sc-label">শুধু দেখো — ঘর অক্ষত</div></div>
<div class="stat-card"><div class="sc-num">pull</div><div class="sc-label">fetch + merge এক লাইনে</div></div>
<div class="stat-card"><div class="sc-num">-u</div><div class="sc-label">সম্পর্ক-নথি স্থায়ী</div></div>
<div class="stat-card"><div class="sc-num">fork → PR</div><div class="sc-label">অন্যের ঘরে প্রস্তার-চিঠি</div></div>
</div>

<p class="verse">আমানত — কুরআন: নিশ্চয়ই আল্লাহ আদেশ দেন আমানত হকদারকে ফিরিয়ে দিতে (৪:৫৮)। আয়না-ঘর পুরোটাই আমানত: তোমার ছবি রাখা, অন্যের ছবি অক্ষত রাখা; জোর করে দরজা ভাঙা নয় — ঝাঁপি, মিলন, প্রেরণের শৃঙ্খলায় সবার কাজ বাঁচে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🪟 fetch ঝাঁপি, pull আনয়ন, push প্রেরণ; rejected মানে আগে আয়নারটা নাও — force নয়।<br>কারণ: আয়না সবার, ভাঙলে শুধু তোমার নয় — সবার ঘর অন্ধকার হয়।</div></div>`,
  senior: {
    title: "আয়না-ঘরের খাতা — The Mirror-Room Ledger",
    body: `<ul class="checklist">
<li>দিনের প্রথম আদেশ <strong>git fetch origin</strong> — আয়নার খবর নাও, ঘরে হাত দিও না।</li>
<li>আনয়ন সরল রাখো: <strong>git config --global pull.rebase true</strong> — তারপর pull-ই যথেষ্ট।</li>
<li>নতুন শাখার প্রথম push: <strong>git push -u origin &lt;শাখা&gt;</strong> — সম্পর্ক-নথি লেখা থাকে।</li>
<li>সপ্তাহে একবার <strong>git branch -vv</strong> — কোন শাখা কোন আয়নার সাথে, কত ahead/behind।</li>
<li>PR-এর আগে <strong>git fetch upstream && git rebase upstream/main</strong> — প্রস্তার-চিঠি তাজা কাগজে।</li>
</ul>`
  }
});


// ── DOOR 7 · মোজাম্মেল হোদার হিসাবখাতা — Moazzamel Hoda's Ledger of Records ──
doors.push({
  num: 7,
  icon: "📕",
  color: "#fca5a5",
  name: "মোজাম্মেল হোদার হিসাবখাতা",
  subtitle: "Moazzamel Hoda's Ledger of Records",
  tech: "amend · revert · reset soft/mixed/hard · reflog",
  spirit: "তাওবা — ফেরার পথ খোলা",
  secret: "ভুলের চার স্তরের ওষুধ: শেষ ছবি এখনো ঘরে (amend), ভুলটা প্রকাশ্যে বাতিল (revert — নতুন ছবি দিয়ে), শাখার কাঁটা ঘোরাও (reset — soft/mixed/hard), আর সব হারালে রেফলগ — Git প্রতিটা পদক্ষেপ মনে রাখে, কিছুই সত্যিই হারায় না ৯০ দিন।",
  recall: {
    q: "git reset --hard চালিয়ে কালকের কাজ মুছে ফেললে! ফেরানো যাবে? কোন আদেশ, কীভাবে খুঁজবে?",
    qen: "You ran git reset --hard and lost yesterday's work! Recoverable? Which command, how do you find it?",
    a: "হ্যাঁ — ৯০ দিনের নিরাপত্তা-জাল: git reflog। HEAD-এর প্রতিটা চলাচল লেখা থাকে (reset-ও)। ধারা: git reflog → ভুলের আগের প্রবেশ চেনো (যেমন HEAD@{1} বা হ্যাশ) → git reset --hard HEAD@{1} (বা নতুন শাখায়: git branch rescue HEAD@{1})। সতর্কতা: যা কখনো add/commit হয়নি তা রেফলগেও নেই — তাই ঘন ঘন ছবি তোলো; আর push করা ইতিহাসে reset --hard + force কখনোই না (দরজা ৫-এর সোনার নিয়ম)।",
    aen: "Yes — the 90-day safety net: git reflog. Every HEAD movement is recorded (resets too). Sequence: git reflog → recognize the entry before the mistake (e.g. HEAD@{1} or a hash) → git reset --hard HEAD@{1} (or branch off: git branch rescue HEAD@{1}). Caution: what was never added/committed is absent even from reflog — so photograph often; and never reset --hard + force on pushed history (Door 5's golden rule)."
  },
  story: `<p class="scene-setting">মোজাম্মেল হোদা শহরের জমিদার-বংশের হিসাবরক্ষক — শ'খানেক বছরের খাজনার খাতা তাঁর ঘরে। লোকে ভাবে তাঁর কাজ শুধু লেখা; আসলে তাঁর আসল শক্তি ফেরানোর ব্যবস্থা। তাঁর ঘরে চারটা দরজা। প্রথম দরজা: কালি শুকানোর আগে (amend) — এইমাত্র লেখা একটা এন্ট্রির হিসাব ভুল? এখনো খাতা বন্ধ হয়নি, সেই এন্ট্রিই শুধরে নাও, নতুন লাইন লাগবে না। দ্বিতীয়: প্রকাশ্য ভুল (revert) — খাতা তো দোকানে গেছে, পাতা ছেঁড়া যাবে না; নতুন এন্ট্রি লেখো পেছনের ভুলটা বাতিল বলে, হিসাব সোজা হয়, ইতিহাস অক্ষত। তৃতীয়: শাখার কাঁটা ঘোরানো (reset) — এই পাতা থেকে আর লিখব না, তিন পাতা পেছনে ফেরো; কিন্তু কতটা ফিরবে তার তিন মাত্রা: শুধু কাঁটা (soft — লেখা টেবিলে থাকবে), কাঁটা+টেবিল খালি (mixed — ঘরে থাকবে), সব গুছিয়ে ফেরত (hard — যেন লেখাই হয়নি)। আর চতুর্থ দরজা সবচেয়ে গুপ্ত: হারানো খাতার আলমারি (reflog) — তাঁর নিজের লুকানো খাতায় প্রতিটা পদক্ষেপ লেখা, কে কোন পাতায় কবে বসেছিল; পাতা হারালে এই খাতাই রাস্তা দেখায়। এক ভুলবশ সহকারী সকালে তিন পাতা ছিঁড়ে ফেলেছিল — সন্ধ্যায় মোজাম্মেল হোদা গুপ্ত খাতা খুলে সব ফিরিয়ে আনলেন, একটা সংখ্যাও হারায়নি।</p>
<p class="scene-setting en">Moazzamel Hoda is the ledger-keeper of the city's oldest estate — a hundred years of rent-books in his room. People think his work is writing; his real power is the machinery of return. His room has four doors. First: before the ink dries (amend) — this entry's arithmetic is wrong? The book is not closed yet; correct that very entry, no new line. Second: a public mistake (revert) — the book has gone to the shop; pages cannot be torn. Write a new entry cancelling the old — accounts straighten, history intact. Third: turning the bookmark back (reset) — I will write no more from this page; return three pages; three depths of return: bookmark only (soft — writing stays on the table), bookmark + cleared table (mixed — writing stays in the room), everything squared away (hard — as if never written). And the fourth door is the most secret: the cabinet of lost books (reflog) — his hidden book records every step, who sat on which page when; lose a page and this book shows the road. A careless assistant once tore out three pages at dawn — by evening Moazzamel Hoda had restored every number from the secret book.</p>

<div class="code-block"># চার-দরজার ওষুধ-সূচি — কোন ভুল, কোন দরজা:
# ① শেষ ছবি, এখনো push হয়নি → amend
git commit --amend -m "ঠিক করা বার্তা"    # বার্তা/ছবি শুধরে নাও
git add forgotten.txt && git commit --amend --no-edit
#   ⚠ push-করা ছবিতে amend = ইতিহাস পুনঃলেখা → নিষেধ (দরজা ৫)

# ② ভুলটা ইতিমধ্যে প্রকাশ্য → revert (নতুন ছবি দিয়ে বাতিল)
git revert abc1234              # উল্টো-ছবি: সে কাজ বাতিল, ইতিহাস স্বীকৃত
git revert HEAD                 # শেষ ছবিটাই বাতিল
#   শেয়ার্ড শাখায় একমাত্র ভদ্র পথ

# ③ শাখার কাঁটা ঘোরাও → reset (তিন গভীরতা)
git reset --soft HEAD~1         # কাঁটা পেছনে; বদল টেবিলে staged
git reset HEAD~1                # mixed (ডিফল্ট): টেবিল খালি, ঘরে আছে
git reset --hard HEAD~1         # সব মুছে ফেরত — যেন হয়নি
#   ⚠ hard + push করা ইতিহাস = দুর্ঘটনা; নিজের খসড়ায় সীমাবদ্ধ রাখো

# ④ সব হারালে → reflog (৯০ দিনের জাল)
git reflog
#   abc1234 HEAD@{0}: reset: moving to HEAD~1   ← ভুলটা এখানে
#   9f8e7d6 HEAD@{1}: commit: কালকের কাজ        ← এই তো হারানো ছবি!
git reset --hard 9f8e7d6        # অথবা HEAD@{1}
git branch rescue 9f8e7d6       # নতুন শাখায় উদ্ধার (নিরাপদ)

# বোনাস — নাম-ধরা ছবি খোঁজা (reflog না থাকলে):
git fsck --lost-found           # ঝুড়ির অনাথ ছবির তালিকা</div>

<table class="kv-table">
<tr><th>ভুলের ধরন</th><th>দরজা</th><th>আদেশ</th><th>ইতিহাসে কী হয়</th></tr>
<tr><td class="hl">শেষ ছবিতে টাইপো/বার্তা</td><td>amend</td><td>commit --amend</td><td>ছবি বদলে যায় (নতুন SHA)</td></tr>
<tr><td class="hl">পুরোনো, push-করা ভুল</td><td>revert</td><td>revert &lt;হ্যাশ&gt;</td><td>বাতিল-ছবি যোগ হয়, পুরোনো অক্ষত</td></tr>
<tr><td class="hl">খসড়া শাখার শেষ N ছবি</td><td>reset</td><td>soft / mixed / hard</td><td>শাখা পেছনে; ইতিহাস শাখা থেকে ওঠে</td></tr>
<tr><td class="hl">সব হারিয়েছে মনে হচ্ছে</td><td>reflog</td><td>reflog → reset/branch</td><td>কিছুই হারায়নি — ৯০ দিন স্মৃতি</td></tr>
</table>

<div class="diagram">
<div class="diag-title">ওষুধের মই — The Ladder of Remedies</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowM7" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fca5a5"/></marker>
</defs>
<rect class="node-leaf" x="15" y="12" width="120" height="34" rx="9"/><text class="lbl-leaf" x="75" y="34">amend — কালি শুকায়নি</text>
<rect class="node-leaf" x="155" y="12" width="120" height="34" rx="9"/><text class="lbl-leaf" x="215" y="34">revert — প্রকাশ্য বাতিল</text>
<rect class="node-leaf" x="295" y="12" width="120" height="34" rx="9"/><text class="lbl-leaf" x="355" y="34">reset — কাঁটা ঘোরাও</text>
<rect class="node-hot" x="435" y="12" width="110" height="34" rx="9"/><text class="lbl-hot" x="490" y="34">reflog — জাল</text>
<rect class="node" x="15" y="80" width="250" height="44" rx="9"/><text class="lbl-sm" x="140" y="98">reset --soft HEAD~1</text><text class="lbl-sm" x="140" y="114">কাঁটা পেছনে, বদল টেবিলে (staged)</text>
<rect class="node" x="295" y="80" width="250" height="44" rx="9"/><text class="lbl-sm" x="420" y="98">reset --mixed HEAD~1 (ডিফল্ট)</text><text class="lbl-sm" x="420" y="114">কাঁটা+টেবিল পেছনে, ঘরে (unstaged)</text>
<rect class="node-hot" x="155" y="145" width="250" height="44" rx="9"/><text class="lbl-sm" x="280" y="163">reset --hard HEAD~1</text><text class="lbl-sm" x="280" y="179">সব বাতিল — যেন লেখাই হয়নি (⚠ শেষ অস্ত্র)</text>
<line x1="140" y1="124" x2="180" y2="143" stroke="#fca5a5" stroke-width="2" fill="none" marker-end="url(#arrowM7)"/>
<line x1="420" y1="124" x2="380" y2="143" stroke="#fca5a5" stroke-width="2" fill="none" marker-end="url(#arrowM7)"/>
</svg>
<div class="diag-cap">উপরের সারি ভদ্র ওষুধ, নিচের hard শেষ অস্ত্র; আর সবের নিচে নীরব জাল — reflog।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>হিসাবখাতার সতর্কতা:</strong> reset --hard-এর আগে দুবার ভাবো — সে টেবিল-ঘর দুটোই গুছিয়ে ফেলে, uncommitted কাজ রেফলগেও থাকে না; তাই রীতি: আগে ছবি (commit) বা ঝুলি (stash), তারপর hard। আর প্রকাশিত ইতিহাসে (push করা) কখনোই reset+force নয় — দলের সাথে বিশ্বাস ভাঙে (দরজা ৫); সেখানে একমাত্র revert। এক লাইনে: <strong>ঘরের ভুল amend/reset, প্রকাশিত ভুল revert</strong>।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The ledger's caution:</strong> think twice before reset --hard — it squares away table and room both; uncommitted work exists in no reflog either; so the ritual: photograph (commit) or shelve (stash) first, hard second. And never reset+force on published history — it breaks the team's trust (Door 5); there, only revert. One line: <strong>home mistakes get amend/reset, published mistakes get revert</strong>.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ছিঁড়ে-ফেলা খাতা</div>push-করা ছবিতে amend + force · প্রকাশিত ভুল reset --hard দিয়ে ঢাকে · reflog জানে না, তাই "সব হারা" ভাবে · hard-এর আগে ছবি তোলে না</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ চার-দরজা হিসাবরক্ষক</div>শেষ ছবি ঘরে থাকলে amend · প্রকাশিত ভুলে revert · খসড়ায় reset তিন-মাত্রায় · হারালে reflog → rescue শাখা</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">amend</div><div class="sc-label">কালি শুকানোর আগে</div></div>
<div class="stat-card"><div class="sc-num">revert</div><div class="sc-label">প্রকাশ্য বাতিল — ইতিহাস অক্ষত</div></div>
<div class="stat-card"><div class="sc-num">soft·mixed·hard</div><div class="sc-label">reset-এর তিন গভীরতা</div></div>
<div class="stat-card"><div class="sc-num">৯০ দিন</div><div class="sc-label">reflog-এর নিরাপত্তা-জাল</div></div>
</div>

<p class="verse">তাওবা — ফেরার পথ খোলা রাখার শিক্ষা: কুরআন বলে আল্লাহ তাওবা গ্রহণ করেন (৪:২৭-এর ভাবানুবাদ)। মোজাম্মেল হোদার চার দরজাও সেই মর্যাদায়: ভুলকে অস্বীকার নয় — স্বীকার করে সংশোধন; আর ইতিহাস মুছে ফেলা নয়, বাতিল-এন্ট্রি লিখে সোজা করা। যে খাতায় ভুলের স্বীকারোক্তি লেখা থাকে, সে খাতাই বিশ্বাসযোগ্য।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📕 ঘরের ভুল amend, প্রকাশিত ভুল revert, খসড়া reset; সব হারালে reflog — ৯০ দিন মনে থাকে।<br>কারণ: ভুল লুকানো নয় — স্বীকার করে সারানোই হিসাবের ধর্ম।</div></div>`,
  senior: {
    title: "হিসাবখাতার বিধি — The Ledger Code",
    body: `<ul class="checklist">
<li>মনে রাখার মই: <strong>amend (push-পূর্ব) → revert (push-পর) → reset (খসড়া) → reflog (সর্বশেষ জাল)</strong>।</li>
<li>reset --hard-এর আগে অভ্যাস: <strong>commit বা stash</strong> — uncommitted কাজ কোনো জালেই নেই।</li>
<li>শেয়ার্ড শাখায় ভুল? শুধুই <strong>git revert</strong> — ইতিহাস অক্ষত, সবার আলবাম মিলবে।</li>
<li>হারানোর ভয় পেলেই <strong>git reflog</strong> — HEAD@{N} চেনো, rescue শাখায় উদ্ধার।</li>
<li>সন্দেহ হলে <strong>git branch rescue &lt;হ্যাশ&gt;</strong> — মুছে ফেরত যাওয়ার আগে নিরাপদ কপি।</li>
</ul>`
  }
});


// ── DOOR 8 · রুবেলা খাতুনের ঝুলি-তাক — Rubela Khatun's Shelf ──
doors.push({
  num: 8,
  icon: "🎒",
  color: "#c4b5fd",
  name: "রুবেলা খাতুনের ঝুলি-তাক",
  subtitle: "Rubela Khatun's Shelf",
  tech: "stash · pop/apply · worktree",
  spirit: "ওয়াকফ — সাময়িক রক্ষা, পরে ফেরত",
  secret: "হঠাৎ জরুরি কাজ এলে হাতের অর্ধ-কাজ ঝুলিতে তোলো (stash), ঘর পরিষ্কার করে কাজ সারো, ফিরে এসে নামাও (pop); আর দুই কাজ একসাথে চাইলে নতুন ঘর ভাড়া করো না — একই আলবামে যমজ ঘর (worktree)।",
  recall: {
    q: "feature-এ কাজ চলছে, হাতের বদল অসম্পূর্ণ; main-এ জরুরি বাগ এসেছে, switch করতেই Git আটকে দিলে (বদল হারাবে)। ধারাটা কী? আর যদি দুটো কাজ সত্যিই একসাথে দরকার হয় — দুই টার্মিনালে?",
    qen: "Mid-feature changes block an urgent main bugfix switch. What's the sequence? And if you truly need both at once — two terminals?",
    a: "① git stash push -u -m 'ঝুলি: লগইন-অর্ধ' (untracked-সহ, নাম দিয়ে) → ② ঘর পরিষ্কার, git switch main → বাগ সারো, commit, push → ③ ফিরে: git switch feature && git stash pop (ঝুলি নামে ও মুছে যায়; apply হলে থেকে যায়, drop দিয়ে পরে মুছো)। দুই কাজ একসাথে: git worktree add ../hotfix main — একই .git আলবাম, আলাদা ঘর-ফোল্ডার; দুই টার্মিনালে দুই শাখা, কোনো stash-নাচ লাগে না; শেষে remove।",
    aen: "① git stash push -u -m 'shelf: login-half' (with untracked, named) → ② clean room, git switch main → fix, commit, push → ③ return: git switch feature && git stash pop (shelf comes down and clears; apply keeps it for a later drop). Both at once: git worktree add ../hotfix main — same .git album, separate room-folder; two terminals on two branches, no stash dance; remove when done."
  },
  story: `<p class="scene-setting">রুবেলা খাতুন শহরের সেলাইখানার মালিক প্রধান — আর তাঁর কারখানার সবচেয়ে বিখ্যাত জিনিস কাপড়ের ঝুলি-তাক: আধা-সেলাই জামা কাজের মাঝেই তুলে রাখার জায়গা। কাজের দিনে হঠাৎ জরুরি অর্ডার এলে কারিগররা কাপড় গুটিয়ে মেঝেতে ফেলে না — ঝুলিতে তুলে রাখে, নাম লাগায় (কার, কোন কাজ), টেবিল পরিষ্কার করে জরুরি কাজ সারে; ফিরে এসে ঝুলি থেকে নামিয়ে আবার সেলাই। কিন্তু কারখানার পাশে তাঁর আরেকটা ব্যবস্থা — যমজ ঘর: একই হিসাবখাতা, দুই কাজের টেবিল। যে কারিগরকে একই সময়ে দুই কাজ করতে হয় (এক টেবিলে বিয়ের জামা, অন্যটায় স্কুল-ইউনিফর্ম), তার জন্য ঝুলি-নাচ নয় — সে সোজা দুই টেবিলে দুই কাজ চালায়; খাতা একটাই, তাই হিসাব কখনো দুই না হয়। রুবেলা খাতুনের নিয়ম: থামা মানে ফেলে দেওয়া নয় — ঠিক জায়গায় রেখে থামা; আর সমান্তরাল মানে তাড়াহুড়ো নয় — আলাদা টেবিলে শান্ত মনে দুই কাজ।</p>
<p class="scene-setting en">Rubela Khatun runs the city's tailoring house — and its most famous feature is the cloth shelf: a place to rest half-sewn garments mid-work. When an urgent order interrupts the day, crafters do not bundle cloth onto the floor — they shelve it, label it (whose, which work), clear the table, finish the urgent job; back again, they take it down and resume sewing. But beside this she keeps another arrangement — twin rooms: one ledger, two work tables. The crafter who must do two jobs at once (a wedding dress on one table, school uniforms on the other) does not dance with the shelf — she simply works two tables; the ledger stays single, so the count never splits. Rubela Khatun's rule: pausing is not abandoning — pause by putting things in the right place; and parallel is not haste — two tables, calm mind, two jobs.</p>

<div class="code-block"># ঝুলি-তাক — থামা, ফেলে না দেওয়া:
git stash push -u -m "লগইন-অর্ধ"   # -u: untracked-সহ; -m: নাম
git status                        # "nothing to commit" — ঘর পরিষ্কার
git switch main && git pull --rebase
#   … জরুরি বাগ-ফিক্স, commit, push …
git switch feature
git stash list                    # ঝুলির তালিকা
#   stash@{0}: On feature: লগইন-অর্ধ
git stash pop                     # নামাও + ঝুলি থেকে মুছে যায়
git stash apply                  # নামাও, কিন্তু ঝুলিতে থাকে (পরে drop)
git stash drop stash@{0}          # নামানো হয়েছে, এখন তাক থেকে সরাও
git stash show -p stash@{0}       # ঝুলির ভেতরটা দেখো, নামানোর আগে

# যমজ ঘর — এক আলবাম, দুই টেবিল:
git worktree add ../hotfix main       # নতুন ফোল্ডারে main
#   দুই টার্মিনাল: ~/proj (feature) + ../hotfix (main)
#   একই .git — ছবি, শাখা, আয়না সব শেয়ার্ড
git worktree list                     # কোন ঘর কোন শাখায়
git worktree remove ../hotfix         # কাজ শেষে ঘর জমা দাও
#   B59 (Book ৫৯) মনে আছে? Claude Code-এর --worktree পতাকার পেছনে এই যমজ ঘরই।</div>

<div class="diagram">
<div class="diag-title">ঝুলি ও যমজ ঘর — The Shelf and the Twin Rooms</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowR8" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#c4b5fd"/></marker>
</defs>
<rect class="node" x="15" y="80" width="150" height="52" rx="10"/><text class="lbl" x="90" y="102">feature ঘর</text><text class="lbl-sm" x="90" y="120">অর্ধ-কাজ চলছে</text>
<rect class="node-hot" x="205" y="80" width="150" height="52" rx="10"/><text class="lbl-hot" x="280" y="102">ঝুলি-তাক (stash)</text><text class="lbl-sm" x="280" y="120">push -u -m নাম</text>
<rect class="node-cyan" x="395" y="80" width="150" height="52" rx="10"/><text class="lbl-cyan" x="470" y="102">main ঘর</text><text class="lbl-sm" x="470" y="120">জরুরি বাগ-ফিক্স</text>
<line x1="165" y1="98" x2="201" y2="98" stroke="#c4b5fd" stroke-width="2" fill="none" marker-end="url(#arrowR8)"/>
<line x1="355" y1="98" x2="391" y2="98" stroke="#c4b5fd" stroke-width="2" fill="none" marker-end="url(#arrowR8)"/>
<text class="lbl-sm" x="183" y="90">push</text>
<text class="lbl-sm" x="280" y="140">pop / apply — ফেরো</text>
<text class="lbl-sm" x="373" y="90">switch</text>
<line x1="391" y1="118" x2="205" y2="118" stroke="#c4b5fd" stroke-width="2" fill="none" marker-end="url(#arrowR8)"/>
<rect class="cell" x="15" y="12" width="530" height="40" rx="8"/>
<text class="lbl-sm" x="280" y="30">যমজ ঘর (worktree): একই আলবাম .git — ../proj-এ feature, ../hotfix-এ main</text>
<text class="lbl-sm" x="280" y="46">দুই টার্মিনাল, দুই শাখা, শূন্য stash-নাচ — B59-এর --worktree এই কথা</text>
<rect class="cell-hot" x="15" y="160" width="530" height="36" rx="8"/>
<text class="lbl-sm" x="280" y="176">⚠ pop-এর conflict হলে ঝুলি তাকেই থাকে — ঠিক করো, তারপর drop; আর worktree-তে একই শাখা দুই ঘরে বসানো যায় না</text>
</svg>
<div class="diag-cap">থামা = ঝুলিতে তোলা; সমান্তরাল = যমজ ঘর — দুই ব্যবস্থাই এক আলবামের সন্তান।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ঝুলি-সতর্কতা:</strong> stash ভুলে যাওয়া মানে আধা-কাজের গুদাম — তাই <strong>-m দিয়ে নাম</strong> দাও আর ফিরে এসে <strong>list দেখে pop</strong>; অনামা stash-এর স্তূপ তিন সপ্তাহ পরে রহস্য হয়ে দাঁড়ায়। আর pop-এ conflict হলে ঝুলি মুছে যায় না — ঠিক করে drop করো। worktree-র নিয়ম: একই শাখা একসাথে দুই ঘরে বসে না; আর ঘর মুছতে remove ব্যবহার করো, ফোল্ডার হাতে মুছলে .git-এর হিসাবে ভুতুড়ি ঘর রয়ে যায় (prune)।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The shelf caution:</strong> forgotten stashes become a warehouse of half-work — so <strong>name with -m</strong> and <strong>list before pop</strong> on return; an anonymous stash pile turns into mystery in three weeks. If pop conflicts, the stash is not deleted — fix, then drop. Worktree rules: one branch cannot sit in two rooms at once; and remove rooms with remove, not hand-deleted folders, or ghost entries haunt the album (prune).</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ মেঝে-ভরা কারখানা</div>অর্ধ-কাজ নিয়েই switch করতে যায় (Git আটকায়) · stash নাম ছাড়া, ভুলে যায় · দুই কাজের জন্য পুরো রিপো clone করে (আলাদা .git!) · worktree-র ভুতুড়ি ফোল্ডার</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ঝুলি-শাসিত কারখানা</div>থামতে হলে stash push -u -m নাম · ফিরে list → pop · সত্যিকার সমান্তরালে worktree add · শেষে remove</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">push -u -m</div><div class="sc-label">ঝুলিতে নাম-সহ তোলা</div></div>
<div class="stat-card"><div class="sc-num">pop / apply</div><div class="sc-label">নামাও — মুছে / রেখে</div></div>
<div class="stat-card"><div class="sc-num">worktree add</div><div class="sc-label">যমজ ঘর — এক আলবাম</div></div>
<div class="stat-card"><div class="sc-num">remove</div><div class="sc-label">ঘর জমা — ভুতুড়ি নয়</div></div>
</div>

<p class="verse">ওয়াকফ — সাময়িক সঁপে দেওয়া, মূল মালিকানা অক্ষত: ঝুলি-তাকও তাই — কাজ তোমারই থাকে, শুধু সময়ের জন্য তাকে রইল; ফিরে এসে হুবহু ফেরত। আর যমজ ঘর শেখায়: বহুতা বিভ্রান্তি নয়, যদি হিসাব এক থাকে — এক আলবামের দুই টেবিল।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🎒 থামো stash push -u -m, ফেরো pop; দুই কাজ একসাথে চাইলে worktree — এক আলবাম, দুই ঘর।<br>কারণ: থামা আর ফেলে দেওয়া এক নয় — ঠিক জায়গায় রাখলে কাজ হারে না।</div></div>`,
  senior: {
    title: "ঝুলি-তাকের খাতা — The Shelf Ledger",
    body: `<ul class="checklist">
<li>থামতে হলে নাম-সহ ঝুলি: <strong>git stash push -u -m "কাজের-নাম"</strong> — অনামা stash নিষেধ।</li>
<li>ফিরে এসে আগে <strong>git stash list</strong>, পরে <strong>pop</strong>; রাখতে চাইলে apply + পরে drop।</li>
<li>জরুরি-বাগের রোজকার ধারা: <strong>stash → switch main → fix → push → switch → pop</strong>।</li>
<li>সত্যিকারের সমান্তরাল (দুই টার্মিনাল): <strong>git worktree add ../hotfix main</strong> — clone নয়।</li>
<li>শেষে <strong>git worktree remove</strong>; ভুতুড়ি দেখলে <strong>git worktree prune</strong>।</li>
</ul>`
  }
});


// ── DOOR 9 · ইন্সপেক্টর নাদিমের গোয়েন্দা-দালান — Inspector Nadim's Detective Bureau ──
doors.push({
  num: 9,
  icon: "🔍",
  color: "#f0abfc",
  name: "ইন্সপেক্টর নাদিমের গোয়েন্দা-দালান",
  subtitle: "Inspector Nadim's Detective Bureau",
  tech: "log --graph · show · blame · bisect",
  spirit: "তাহকীক — প্রমাণ ধরে সত্যে পৌঁছানো",
  secret: "কে কখন কী বদলাল — প্রতিটা প্রশ্নের যন্ত্র আছে: log (কবে-কে), show (এক ছবিতে কী), blame (এক লাইনে কে), আর কোথায় পাপ হলো জানা নেই তার বাইনারি-সন্ধান bisect — অর্ধেক করে ফেলে অপরাধী ছবি ধরা।",
  recall: {
    q: "বাগ আছে জানা যাচ্ছে, কিন্তু কোন commit থেকে এলো জানা নেই; ৫০০টা ছবির আলবাম। কোন যন্ত্র, কীভাবে চালাবে — আর কীভাবে যন্ত্রকে পরীক্ষা-কাজটা নিজে করতে দেবে?",
    qen: "A bug exists but no one knows which commit introduced it; the album has 500 photographs. Which tool, how — and how do you make the tool run the test itself?",
    a: "git bisect: বাইনারি সন্ধান। ধারা: git bisect start → git bisect bad (বর্তমান খারাপ) → git bisect good v1.0 (শেষ ভালো ছবি) → Git মাঝের ছবিতে বসিয়ে দেয়, তুমি পরীক্ষা করো → good বা bad বলো → অর্ধেক করে সংকুচিত; log2(500) ≈ ৯ ধাপে অপরাধী। স্বয়ংক্রিয়: git bisect run npm test — প্রতি ধাপে পরীক্ষা-স্ক্রিপ্টই good/bad বলে, তুমি চা খাও; শেষে git bisect reset। সহযাত্রী: log -S 'শব্দ' (কোন ছবিতে শব্দটা এলো/গেল), blame -L 40,60 f.py (লাইন-রেঞ্জে কে), show --stat (এক ছবির মোট হিসাব)।",
    aen: "git bisect: binary search. Sequence: git bisect start → git bisect bad (current is broken) → git bisect good v1.0 (last known good) → Git seats you at the midpoint, you test → say good or bad → halves shrink; log2(500) ≈ 9 steps to the culprit. Automated: git bisect run npm test — the test script itself reports good/bad each step, you drink tea; end with git bisect reset. Companions: log -S 'word' (which photograph introduced/removed it), blame -L 40,60 f.py (who on a line range), show --stat (one photograph's totals)."
  },
  story: `<p class="scene-setting">ইন্সপেক্টর নাদিম শহরের গোয়েন্দা দপ্তরের কিংবদন্তি — তাঁর ডেরায় শ'খানেক আলবাম, প্রতিটার পেছনে তারিখ, নাম, ঠিকানা। তাঁর শিল্পের চার যন্ত্র। প্রথম: কালানুক্রমের খাতা (log) — কবে কে এলো, এক নজরে সাজানো; গাছ-নকশা (graph) চাইলে শাখার কোলাহলও দেখা যায়। দ্বিতীয়: এক-ছবির মাইক্রোস্কোপ (show) — নির্দিষ্ট ছবিতে ঠিক কী বদলেছিল, পাল্লা পাল্লা। তৃতীয়: লাইন-চশমা (blame) — ফাইলের একটা লাইনে চোখ রাখো, চশমা বলে দেয় কোন ছবিতে কে লিখেছিল। আর চতুর্থ, তাঁর গুপ্ত অস্ত্র: অর্ধেক-করার কৌশল (bisect)। এক মামলায় সন্দেহভাজন ৫০০ দিনের খাতা; নাদিম মাঝের তারিখটা বেছে প্রশ্ন করলেন: এই দিনে বাগ ছিল? উত্তর এলে অর্ধেক খাতা ফেলে গেল — আবার মাঝ, আবার প্রশ্ন। ন-ধাপে অপরাধী দিন ধরা: যে দিন লোকটা এসেছিল। তাঁর সহকারী এখন প্রশ্নটাও করে না — স্বয়ংক্রিয় পরীক্ষক ভালো/খারাপ বলে দেয়, নাদিম চা খান।</p>
<p class="scene-setting en">Inspector Nadim is the detective bureau's legend — his office holds a hundred albums, each with date, name, address behind. Four instruments make his art. First: the chronological register (log) — who came when, arranged at a glance; with the tree-map (graph) even branch noise shows. Second: the one-photograph microscope (show) — exactly what changed in a given frame, page by page. Third: the line-lens (blame) — rest your eye on one file line, the lens names the photograph and author who wrote it. And fourth, his secret weapon: the halving trick (bisect). One case had 500 days of registers under suspicion; Nadim picked the middle date and asked: did the bug exist this day? Each answer discarded half — middle again, question again. Nine steps to the culprit: the day the man arrived. His assistant no longer even asks — an automated examiner reports good/bad, and Nadim drinks tea.</p>

<div class="code-block"># যন্ত্র ১ — কালানুক্রমের খাতা:
git log --oneline                  # ছবির সারি, এক লাইনে একটা
git log --oneline --graph --all    # গাছসহ, সব শাখা
git log -3                         # শেষ তিনটা
git log --author="Nadim"           # কে লিখল
git log --since="2 weeks ago"      # কাল থেকে
git log -S "timeout"               # কোন ছবিতে শব্দটা এলো/গেল (pickaxe!)

# যন্ত্র ২ — এক-ছবির মাইক্রোস্কোপ:
git show abc1234                   # সে ছবিতে কী বদলেছিল
git show abc1234 --stat            # শুধু মোট হিসাব (ফাইল+x/-)
git show abc1234:config.py         # সে সময়ের ফাইলটা পড়ো!

# যন্ত্র ৩ — লাইন-চশমা:
git blame config.py                # প্রতি লাইনের পাশে কে-কবে
git blame -L 40,60 config.py       # শুধু ৪০-৬০ লাইন
#   ⚠ blame অভিযোগ নয় — কে লিখেছে তার খাতা; কেন লিখেছে তার নয়
git log -S "timeout" --oneline     # লাইনটার জন্ম-ছবি খোঁজো

# যন্ত্র ৪ — অর্ধেক-করার কৌশল:
git bisect start
git bisect bad                     # বর্তমান খারাপ
git bisect good v1.0               # শেষ ভালো
#   Git মাঝের ছবিতে বসায় → পরীক্ষা করো → good/bad বলো
#   … পুনরাবৃত্তি …
#   "abc1234 is the first bad commit" — মামলা সমাধান
git bisect reset                   # দালান থেকে বেরোও

# স্বয়ংক্রিয় গোয়েন্দা — চা খাওয়ার সংস্করণ:
git bisect start HEAD v1.0
git bisect run npm test            # exit 0 = good, ≠0 = bad
#   শেষ পর্যন্ত নিজেই ঘুরে অপরাধী ছবি বের করবে

# বোনাস — কাজের অগ্রগতির হিসাব:
git diff --stat origin/main        # আয়নার সাথে তফাতের মোট
git shortlog -sn                   # কে কয়টা ছবি তুলেছে</div>

<div class="diagram">
<div class="diag-title">bisect — অর্ধেক করে সংকুচিত সন্দেহ</div>
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
<rect class="cell" x="15" y="55" width="530" height="34" rx="8"/>
<text class="lbl-sm" x="280" y="70">ধাপ ০: ৫০০ ছবি সন্দেহে — good: v1.0 … bad: HEAD</text>
<rect class="cell" x="15" y="95" width="260" height="30" rx="8"/>
<text class="lbl-sm" x="145" y="114">ধাপ ১: মাঝের ছবি পরীক্ষা → bad → ডান অর্ধ বাদ</text>
<rect class="cell" x="285" y="95" width="260" height="30" rx="8"/>
<text class="lbl-sm" x="415" y="114">ধাপ ২: নতুন মাঝ → good → বাম অর্ধ বাদ</text>
<rect class="node-hot" x="190" y="132" width="180" height="30" rx="8"/>
<text class="lbl-sm" x="280" y="151">≈ ৯ ধাপে অপরাধী (log₂ 500)</text>
<rect class="cell-hot" x="15" y="12" width="530" height="32" rx="8"/>
<text class="lbl-sm" x="280" y="32">run npm test দিলে প্রতিটা ধাপ স্বয়ংক্রিয় — good/bad-ও যন্ত্র বলে</text>
</svg>
<div class="diag-cap">প্রতি প্রশ্নে অর্ধেক — ৫০০-র মামলা ন-ধাপে মীমাংসা; এটাই গোয়েন্দার গণিত।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গোয়েন্দা-সতর্কতা:</strong> bisect চলাকালীন তুমি detached HEAD-এ ঘুরছ (দরজা ৩) — প্রতিটা মাঝ-ছবি পড়ার মোড; শেষে অবশ্যই <strong>git bisect reset</strong>, নইলে বুকমার্ক হারানো অবস্থায় কাজ শুরু করে ফেলবে। আর blame অভিযোগ-পত্র নয়: লাইনটা যে লিখেছে সে-ই কারণ জানে না — মাঝে merge/rebase-এ লেখক-নাম সরে যেতে পারে; blame দেখে জিজ্ঞাসা করো, বিচার করো না। আর run-এর স্ক্রিপ্ট নির্ভরযোগ্য হতে হবে — flaky টেস্টে bisect ভুল অপরাধী ধরবে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The detective's caution:</strong> during bisect you wander in detached HEAD (Door 3) — every midpoint is reading mode; always end with <strong>git bisect reset</strong>, or you will start working with a lost bookmark. And blame is not an indictment: the line's author does not necessarily know the reason — merge/rebase can shift author names; ask, don't judge. The run-script must be reliable — a flaky test makes bisect catch the wrong culprit.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অন্ধ তদন্ত</div>৫০০ ছবি একে একে চেক করে · blame দেখে লেখককে অভিযুক্ত করে · bisect শেষে reset করে না · পুরোনো ছবি পড়তে checkout করে কাজ শুরু (detach!) করে</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ নাদিম-শাসিত তদন্ত</div>log -S দিয়ে জন্ম-ছবি → bisect অর্ধেক-কৌশল → run-এ স্বয়ংক্রিয় · blame = খাতা, অভিযোগ নয় · শেষে reset</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">log -S</div><div class="sc-label">pickaxe — শব্দের জন্ম-ছবি</div></div>
<div class="stat-card"><div class="sc-num">show hash:path</div><div class="sc-label">অতীতের ফাইল পড়া</div></div>
<div class="stat-card"><div class="sc-num">blame -L</div><div class="sc-label">লাইন-রেঞ্জের খাতা</div></div>
<div class="stat-card"><div class="sc-num">log₂(500)≈৯</div><div class="sc-label">bisect-এর ধাপ-গণিত</div></div>
</div>

<p class="verse">তাহকীক — প্রমাণ যাচাইয়ের নির্দেশ: কুরআনে এসেছে খবর এলে তদন্ত করা (৪৯:৬-এর ভাবানুবাদ: খবরদারের খবর যাচাই করো)। নাদিমের দালানও: সন্দেহ নয়, প্রমাণ; অনুমান নয়, অর্ধেক-করার গণিত — প্রতিটা দাবি ছবির সাক্ষ্যে টিকবে তবেই মামলা সমাধান।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🔍 কবে-কে log, কী show, লাইনে blame, অপরাধী bisect — অর্ধেক করে, স্বয়ংক্রিয় হলে run।<br>কারণ: অনুমানে বাগ ধরা যায় না — গণিতে যায়।</div></div>`,
  senior: {
    title: "গোয়েন্দা-দালানের খাতা — The Detective Ledger",
    body: `<ul class="checklist">
<li>বাগের প্রথম প্রশ্ন: <strong>git log -S "শব্দটা" --oneline</strong> — কোন ছবিতে এলো, তারপর সে ছবি <strong>show</strong>।</li>
<li>সন্দেহের বিস্তার জানলেই <strong>git bisect start … good … bad</strong> — হাতে বা <strong>run স্ক্রিপ্টে</strong>।</li>
<li>পুরোনো ফাইল পড়তে checkout নয়: <strong>git show হ্যাশ:ফাইল</strong> — বুকমার্ক অক্ষত।</li>
<li><strong>blame -L শুরু,শেষ</strong> — লাইনের খাতা; লেখককে জিজ্ঞাসা, বিচার নয়।</li>
<li>সপ্তাহে একবার <strong>git log --oneline --graph --all</strong> — নিজের আলবামের গাছ চোখে বাঁধো।</li>
</ul>`
  }
});


// ── DOOR 10 · আল-কালামের সিংহাসন — The Throne of the Pen (Synthesis) ──
doors.push({
  num: 10,
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
git switch -c fix/payment-timeout          # দরজা ৩: পোস্টার লাগাও
# … কাজ; মিশ্র হলে add -p (দরজা ২) …
git commit -m "payment: ৩০s টাইমআউট ফিক্স"  # দরজা ১: পূর্ণ ছবি
git fetch origin && git rebase origin/main  # দরজা ৫+৬: সরল+তাজা
git push -u origin fix/payment-timeout      # দরজা ৬: আয়নায় পাঠাও
# PR → review → মিলন (দরজা ৪) → শাখা বিদায়
# ভুল? দরজা ৭-এর মই: amend / revert / reflog
# কে করেছে? দরজা ৯: log -S → blame → bisect

# দুই নকশা-সত্য, চোখের সামনে:
git cat-file -p HEAD^{tree}     # এই ছবিতে পুরো ঘরের তালিকা — পূর্ণ snapshot
git rev-parse HEAD              # ছবির ৪০-অক্ষরের নাম
cat .git/refs/heads/main        # শাখা = ফাইল, ভেতরে শুধু একটা নাম!
#   এই তিনটা আদেশই সিংহাসনের শিলালিপি পড়া

# তোমার রোজকার alias (দরজা ৬-এর বহিঃরূপ, .bashrc-এ লেখো — B60):
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
<line x1="115" y1="70" x2="245" y2="105" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT10)"/>
<line x1="280" y1="70" x2="280" y2="76" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT10)"/>
<line x1="445" y1="70" x2="315" y2="105" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT10)"/>
<line x1="90" y1="85" x2="160" y2="163" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT10)"/>
<line x1="500" y1="85" x2="430" y2="163" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT10)"/>
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
