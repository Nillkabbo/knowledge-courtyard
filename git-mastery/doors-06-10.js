// ════════════════════════════════════════
// Book 61 · The Studio of Time — v2 Complete Reference (20 doors)
// সময়ের স্টুডিও · git-mastery · hue 38
// ════════════════════════════════════════

// ── DOOR 6 · চন্দনার চেরি-বাগান — Chandana's Cherry Orchard ──
doors.push({
  num: 6,
  icon: "🍒",
  color: "#fbbf24",
  name: "চন্দনার চেরি-বাগান",
  subtitle: "Chandana's Cherry Orchard",
  tech: "cherry-pick · range A..B · -x provenance · conflict handling",
  spirit: "নির্বাচন — পুরো ডাল নয়, পাকা ফলটুকু",
  secret: "merge/rebase পুরো ডাল আনে; cherry-pick আনে একটা-একটা পাকা ফল: এক শাখার নির্দিষ্ট commit-এর পরিবর্তন কপি হয়ে তোমার শাখার মাথায় নতুন commit হয়ে বসে — একই পরিবর্তন, নতুন হ্যাশ (মাতৃগাছের ছাপ থাকে না, থাকে -x দিলে লেখা সূত্র)।",
  recall: {
    q: "main-এ hotfix লেগেছে, কিন্তু release শাখায় সেই এক ফিক্সটুকু দরকার — পুরো main মেলানো যাবে না। এক commit কীভাবে নিবে? আর পরে খুঁজে পাওয়ার জন্য সূত্র-লেখা পতাকাটা কী?",
    qen: "A hotfix landed on main but the release branch needs just that one fix — no full merge. How do you take a single commit? And which flag records its origin for later?",
    a: "git switch release-v2 && git cherry-pick <hash> — ওই commit-এর diff নতুন commit হিসেবে release-এর মাথায় বসে (নতুন হ্যাশ, একই পরিবর্তন)। সূত্র-লেখা: -x পতাকা — commit-বার্তার শেষে (cherry picked from commit …) লাইন যোগ হয়; পরে ইতিহাসে দেখে বোঝা যায় ফলটা কোন গাছ থেকে। একাধিক ফল: cherry-pick A B C (তালিকা) বা A..B (রেঞ্জ — A-এর পরের থেকে B পর্যন্ত, A নিজে নয়)। দ্বন্দ্ব এলে: সাধারণ merge-দ্বন্দ্বের মতোই — সমাধান → git add → git cherry-pick --continue; পিছাতে --abort। মনে রেখো: একই ফল দুই গাছে বসালে পরে merge-এ গন্ধ নয়, কিন্তু ইতিহাসে দুই কপি দেখাবে — তাই টিম-রীতিতে বলো।",
    aen: "git switch release-v2 && git cherry-pick <hash> — that commit's diff lands as a NEW commit on release (new hash, same change). Provenance: the -x flag appends '(cherry picked from commit …)' to the message — later readers see which tree the fruit came from. Multiple fruits: cherry-pick A B C (list) or A..B (range — everything after A up to B, not A itself). Conflicts resolve like merge conflicts: fix → git add → git cherry-pick --continue; retreat with --abort. Note: the same fruit on two trees smells fine at merge time, but history shows two copies — so tell the team.",
    you: "git switch -c orchard && echo a>f && git add f && git commit -m A && echo b>>f && git commit -am B && git switch main && git cherry-pick -x orchard~1 && git log -1 --format=%B"
  },
  story: `<p class="scene-setting">চন্দনা বেগমের চেরি-বাগান শহরের সবচেয়ে সাবধানী বাগান — কারণ তিনি ফল কাটেন ডালপালা নয়। ক্রেতা এসে বলল: এই একটা পাকা চেরি আমার ঝুড়িতে দিন; পুরো ডাল আমার ঝুড়িতে আঁটবে না। চন্দনা কাঁচি দিয়ে ঠিক ওই ফলটা কাটেন — বিচিসহ (পরিবর্তনসহ), আঙুলের ছাপ ছাড়া (নতুন হ্যাশ)। তাঁর খাতায় প্রতিটা দেওয়া ফলের পাশে ছোট্ট সূত্র: কোন গাছের কোন ডাল থেকে (-x)। একদিন প্রতিবেশী বাগান থেকে এক ফল নিয়ে নিজের গাছে জোড়া দিলে দুই গাছেই একই ফল জম্মাল — বিক্রেতা দুইবার গুনে ফেলল; চন্দনা সেদিন শিখালেন: নির্বাচন নিয়ে নেওয়ার আগে খাতায় লেখো, আর টিকে দাও — নইলে পরে কেউ জানবে না ফলটা কোথা থেকে এলো।</p>
<p class="scene-setting en">Chandana Begum's cherry orchard is the town's most careful — she cuts fruit, never branches. A buyer says: just this one ripe cherry in my basket; a whole branch will not fit. Her shears take exactly that fruit — seed included (the change), fingerprints left behind (a new hash). Her ledger notes each given fruit's origin: which tree, which branch (-x). One day she grafted a neighbor's fruit onto her own tree and both trees grew it — the seller counted twice; that day she taught: before you take by selection, write it in the ledger and tell people — or no one will know where the fruit came from.</p>

<div class="code-block"># এক ফল নাও:
git switch release-v2
git cherry-pick abc1234          # ওই commit-এর পরিবর্তন নতুন commit হয়ে বসে
git cherry-pick -x abc1234       # বার্তার শেষে সূত্র-লাইন:
#   (cherry picked from commit abc1234…)

# বহু ফল:
git cherry-pick A B C            # তালিকা
git cherry-pick A..B             # রেঞ্জ: A-এর পর থেকে B (A নিজে নয়!)
git cherry-pick A^..B            # A-সহ

# দ্বন্দ্ব এলে (merge-দ্বন্দ্বের মতোই):
#   ফাইল সমাধান → git add <ফাইল> → git cherry-pick --continue
#   পিছাতে: git cherry-pick --abort

# খাতা-পরীক্ষা: কোন ফল একই গাছের:
git log --oneline --grep="cherry picked"   # -x-লাইনসহ সব

# কখন চেরি, কখন মিলন:
#   • এক-দুই commit, শাখা-সংমিশ্রণ নয় → cherry-pick
#   • পুরো শাখার কাজ দরকার → merge/rebase (দরজা ৪-৫)
#   • release-ব্যাকপোর্ট সবচেয়ে সাধারণ ব্যবহার</div>

<table class="kv-table">
<tr><th>আদেশ</th><th>মানে</th><th>বাগানের ছল</th></tr>
<tr><td class="hl">cherry-pick H</td><td>এক commit কপি</td><td>এক পাকা ফল</td></tr>
<tr><td class="hll">-x</td><td>সূত্র-লেখা যোগ</td><td>খাতার সূত্র-লাইন</td></tr>
<tr><td class="hl">A..B</td><td>রেঞ্জ (A বাদে)</td><td>ডালের মাঝের ফলগুলো</td></tr>
<tr><td class="hll">--continue / --abort</td><td>দ্বন্দ্বের পর</td><td>জোড়া চালিয়ে / কাঁচি ফেরত</td></tr>
</table>

<div class="diagram">
<div class="diag-title">চেরি-বাগানের নির্বাচন — The Orchard Selection</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar61d6" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker>
</defs>
<rect class="node" x="15" y="30" width="150" height="44" rx="10"/><text class="lbl" x="90" y="48">main গাছ</text><text class="lbl-sm" x="90" y="64">A—B—🍒C—D</text>
<rect class="node-cyan" x="395" y="30" width="150" height="44" rx="10"/><text class="lbl-cyan" x="470" y="48">release ঝুড়ি</text><text class="lbl-sm" x="470" y="64">x—y—C′</text>
<rect class="node-hot" x="205" y="105" width="150" height="40" rx="10"/><text class="lbl-hot" x="280" y="123">cherry-pick</text><text class="lbl-sm" x="280" y="138">এক ফল, বিচিসহ</text>
<line x1="165" y1="52" x2="201" y2="115" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d6)"/>
<line x1="355" y1="125" x2="391" y2="60" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d6)"/>
<rect class="cell" x="15" y="152" width="530" height="20" rx="7"/><text class="lbl-sm" x="280" y="166">একই পরিবর্তন, নতুন হ্যাশ (C→C′) · -x দিলে বার্তায় সূত্র-লাইন থাকে</text>
</svg>
<div class="diag-cap">গাছ থেকে ঝুড়িতে এক ফল — ডাল নয়; খাতায় সূত্র লেখো।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>বাগান-মালিকের সতর্কতা:</strong> cherry-pick কপি বানায় — মূল commit তার গাছে বেঁচে থাকে; পরে দুই শাখা merge হলে একই পরিবর্তন দুইবার ইতিহাসে দেখা যাবে (Git সাধারণত ডিডাক্ট করে নিলে সমস্যা নয়, কিন্তু ইতিহাস নোংরা হয়)। রেঞ্জের ভুল সবচেয়ে প্রচলিত: A..B মানে A বাদে — A-সহ চাইলে A^..B। আর দ্বন্দ্ব-মাঝপথে থেমে থাকলে --continue ছাড়া অন্য কাজ শুরু কোরো না — ঝুড়ি অসম্পূর্ণ অবস্থায় আটকে থাকবে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The orchard-keeper's caution:</strong> cherry-pick COPIES — the original stays on its tree; when the branches later merge, the same change appears twice in history (usually harmless, but messy). The classic range mistake: A..B excludes A — use A^..B to include it. And when stopped mid-conflict, do not start other work before --continue or --abort — the basket stays half-packed.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ডাল-টানা ক্রেতা</div>এক ফিক্সের জন্য পুরো শাখা merge · -x ছাড়া নাম-না-জানা ফল · A..B মানে ভুল ধরে নেওয়া · দ্বন্দ্বে ছেড়ে পালানো</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ চন্দনার রীতি</div>এক ফল: cherry-pick -x · রেঞ্জ সাবধানে (A^..B) · দ্বন্দ্বে সমাধান→add→continue · টিমকে জানানো</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">cherry-pick</div><div class="sc-label">এক commit-কপি</div></div>
<div class="stat-card"><div class="sc-num">-x</div><div class="sc-label">সূত্র-লাইন বার্তায়</div></div>
<div class="stat-card"><div class="sc-num">A^..B</div><div class="sc-label">A-সহ রেঞ্জ</div></div>
<div class="stat-card"><div class="sc-num">--continue</div><div class="sc-label">দ্বন্দ্ব-পরের ধাপ</div></div>
</div>

<p class="verse">নির্বাচনের পাঠ: সব নেওয়া সহজ, বাছাই কঠিন — কুরআনে মূসা (আ.)-কে বলা হয়েছিল যা দরকার নেওয়ার (তালুতের নদী-পাত্র: ২:২৪৯) — পুরো নদী নয়। চেরি-বাগানও: দক্ষ কারিগর পুরো ডাল নয়, দরকারের ফলটুকু নেয় — আর সূত্র লিখে রাখে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🍒 এক ফল: cherry-pick -x <hash>; রেঞ্জ A^..B; দ্বন্দ্঍বে add→continue, পিছাতে abort।<br>কারণ: পুরো ডাল নয়, পাকা ফলটুকু — আর খাতায় সূত্র থাকলে ইতিহাস মিথ্যা বলে না।</div></div>`,
  senior: {
    title: "চেরি-বাগানের খাতা — The Orchard Ledger",
    body: `<ul class="checklist">
<li>release-ব্যাকপোর্ট: <strong>cherry-pick -x &lt;hash&gt;</strong> — সূত্র-লাইনসহ।</li>
<li>রেঞ্জ: <strong>A..B</strong> (A বাদে) বনাম <strong>A^..B</strong> (A-সহ) — পড়ে নাও।</li>
<li>দ্বন্দ্ব: সমাধান → <strong>git add</strong> → <strong>--continue</strong>; পিছাতে <strong>--abort</strong>।</li>
<li>মনে রেখো কপি-প্রকৃতি: পরে merge-এ দুই কপি দেখা যাবে — টিম-রীতি জেনে চালাও।</li>
<li>প্রতিটা নেওয়া ফল <strong>grep "cherry picked"</strong> দিয়ে খুঁজে পাও।</li>
</ul>`
  }
});

// ── DOOR 6 · ফারিহা সুলতানার আয়না-ঘর — Farhana Sultana's Mirror Room ──
doors.push({
  num: 7,
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
    a: "কারণ: আয়না-ঘরে (remote) এমন ছবি আছে যা তোমার আলবামে নেই — তোমার শাখা পেছনে। ধারা: git fetch origin → দেখো (git log main..origin/main) → git pull (বা rebase) → তারপর git push। কখনোই চালাবে না: git push --force — সে আয়নার নতুন ছবি মুছে তোমারটা বসায়; অন্য কারও কাজ শূন্যে। নিজের একলা শাখায় rebase-এর পরেও --force-with-lease (দরজা 5)। আর pull = fetch + merge এক লাইনে; সরল রাখতে pull --rebase।",
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
git pull --rebase                 #    মিলন-ছবি নয়, সরলরেখা (দরজা 5-এর সাথী)
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


// ── DOOR 8 · নাজমুল হুদার ফিতা-ঘর — Nazmul Huda's Ribbon Room ──
doors.push({
  num: 8,
  icon: "🏷️",
  color: "#fbbf24",
  name: "নাজমুল হুদার ফিতা-ঘর",
  subtitle: "Nazmul Huda's Ribbon Room",
  tech: "tag -a vs lightweight · semver · describe · push --follow-tags",
  spirit: "মোহর — চূড়ান্ত সংস্করণের সিলমোহর",
  secret: "ছবির স্টুডিওতে সাদা স্টিকার আর এমব্রয়ডারি-ফিতা দুই রকম চিহ্ন: lightweight tag নাম-মাত্র (commit-এর গায়ে এক লাইন), annotated tag পূর্ণ সিলমোহর — ট্যাগার, তারিখ, বার্তা, এমনকি সই (GPG) সহ নিজেই এক অবজেক্ট; রিলিজ মানেই ফিতা (-a), আর সে নিজে নিজে যায় না — push করে পাঠাতে হয়।",
  recall: {
    q: "v2.1.0 রিলিজ করবে — কোন ধরনের tag, কীভাবে বানাবে (বার্তাসহ), আর টিম কীভাবে পাবে? এছাড়া HEAD এখন শেষ রিলিজ থেকে কতদূর — এক আদেশে বলার উপায়?",
    qen: "Releasing v2.1.0 — which tag type, how (with message), and how does the team get it? And how far is HEAD from the last release, in one command?",
    a: "ফিতা (annotated): git tag -a v2.1.0 -m 'Release v2.1.0: ডার্ক-মোড + পেমেন্ট-ফিক্স' — ট্যাগার/তারিখ/বার্তা সহ পূর্ণ অবজেক্ট (সই চাইলে -s)। টিমের হাতে: git push origin v2.1.0 (নির্দিষ্ট ফিতা) বা push --follow-tags (commit-এর সাথে অ্যানোটেটেডগুলো একসাথে; --tags সব ঠেলে দেয় — টেম্পোরারি স্টিকারসহ, সাবধান)। দূরত্ব-মাপ: git describe --tags → v2.0.0-7-g1a2b3c মানে শেষ ফিতা v2.0.0 থেকে ৭ commit পরে, হ্যাশ 1a2b3c। semver-নাম: MAJOR.MINOR.PATCH — ভাঙা API→MAJOR, নতুন ফিচার→MINOR, ফিক্স→PATCH; প্রি-রিলিজ v2.1.0-rc.1 জাতীয় প্রত্যয়।",
    aen: "Ribbon (annotated): git tag -a v2.1.0 -m 'Release v2.1.0' — a full object with tagger, date, message (sign with -s). To the team: git push origin v2.1.0 (specific) or push --follow-tags (annotated ones ride with commits; --tags pushes everything including temporary stickers — careful). Distance: git describe --tags → v2.0.0-7-g1a2b3c means 7 commits past tag v2.0.0, hash 1a2b3c. SemVer: MAJOR.MINOR.PATCH — breaking API→MAJOR, feature→MINOR, fix→PATCH; prerelease like v2.1.0-rc.1.",
    you: "git tag -a v0.1.0 -m 'first ribbon' && git describe --tags && git show v0.1.0 --stat | head -8 && git tag -n3"
  },
  story: `<p class="scene-setting">নাজমুল হুদার ফিতা-ঘর স্টুডিওর সবচেয়ে সাজানো কোণ — দেয়ালে সারি সারি এমব্রয়ডারি-ফিতা: প্রতিটার গায়ে নাম, তারিখ, কার হাতের কাজ, আর ছোট্ট বার্তা (annotated tag)। পাশের ঝুড়িতে সাদা স্টিকারের প্যাকেট — লেখা শুধু নাম (lightweight)। শাগরেদ জিজ্ঞেস করল: স্যার, স্টিকারে কী দোষ? হুদা সাহেব বললেন: দোষ নেই — গণ্য নেই; ছ'মাস পরে কেউ জানবে না কে বেঁধেছিল, কেন বেঁধেছিল; ফিতায় সব লেখা থাকে — মালিক, মুহূর্ত, মন্তব্য; রিলিজ মানে দলিল, আর দলিলে সই লাগে। তাঁর নামকরণ-রীতি কঠোর: বড়.ছোট.মাছি (MAJOR.MINOR.PATCH) — দরজা ভাঙলে বড়, ঘর বাড়লে ছোট, ফাটক মেরামত হলে মাছি; আর মঞ্চ-পরীক্ষার ফিতায় -rc প্রত্যয়। শেষ পাঠ: ফিতা বাঁধা মানেই সবার চোখে নয় — পাঠাও (push), তবেই দোকানে পৌঁছায়।</p>
<p class="scene-setting en">Nazmul Huda's ribbon room is the studio's tidiest corner — walls of embroidered ribbons: each bears a name, date, maker, a short message (annotated tags). Beside them, a pack of plain stickers — name only (lightweight). An apprentice asked: what is wrong with stickers? Nothing, said Huda — they just do not count; six months later no one knows who tied it or why. A ribbon records everything: owner, moment, note; a release is a document, and documents carry signatures. His naming law is strict: MAJOR.MINOR.PATCH — a broken door raises MAJOR, a new room raises MINOR, a repaired latch raises PATCH; stage-tests get -rc. Final lesson: tying a ribbon is not publishing — push it, or the shop never sees it.</p>

<div class="code-block"># ফিতা বাঁধো (রিলিজ = এমব্রয়ডারি):
git tag -a v2.1.0 -m "Release v2.1.0
Features: dark-mode, CSV import
Fixes: session timeout"
git tag -s v2.1.0 -m "..."        # GPG-সইসহ (অ্যানোটেটেডেই সম্ভব)

# স্টিকার (স্থানীয় বুকমার্ক, রিলিজ নয়):
git tag wip-test                  # ট্যাগার/তারিখ/বার্তা কিছুই নেই

# দেখো / যাচাই:
git tag -n3                       # নাম + ৩ লাইন বার্তা
git show v2.1.0 --stat            # ফিতার সনদ + যে commit-এ বাঁটা
git tag -l "v2.*"                 # ছাঁকনি-তালিকা

# দূরত্ব-মাপক:
git describe --tags               # v2.0.0-7-g1a2b3c
#   = শেষ ফিতা থেকে ৭ commit, বর্তমান হ্যাশ 1a2b3c
git describe --tags --abbrev=0    # শুধু শেষ ফিতার নাম

# পাঠাও (ফিতা নিজে যায় না!):
git push origin v2.1.0            # নির্দিষ্ট ফিতা — সবচেয়ে নিরাপদ
git push --follow-tags            # commit-এর সাথে অ্যানোটেটেডগুলো
# git push --tags                 # ⚠ সবকিছু — টেম্পোরারি স্টিকারসহ!

# পুরোনো commit-এ ফিতা:
git tag -a v1.0.0 -m "retro" <hash>

# semver-সিদ্ধান্ত:
#   API ভাঙল → MAJOR (v3.0.0) · ফিচার → MINOR (v2.1.0) · ফিক্স → PATCH (v2.0.1)
#   প্রি-রিলিজ: v2.1.0-rc.1, v2.1.0-beta.2</div>

<table class="kv-table">
<tr><th>জিনিস</th><th>Lightweight</th><th>Annotated (-a)</th></tr>
<tr><td class="hl">সত্তা</td><td>নাম-রেফারেন্স মাত্র</td><td>পূর্ণ Git অবজেক্ট</td></tr>
<tr><td class="hll">সনদ</td><td>কিছুই নেই</td><td>ট্যাগার+তারিখ+বার্তা</td></tr>
<tr><td class="hl">সই</td><td>সম্ভব নয়</td><td>-s দিয়ে GPG</td></tr>
<tr><td class="hll">ব্যবহার</td><td>স্থানীয় বুকমার্ক</td><td>রিলিজ — সবসময় এটাই</td></tr>
</table>

<div class="diagram">
<div class="diag-title">স্টিকার বনাম ফিতা — Sticker vs Ribbon</div>
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar61d8" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker>
</defs>
<rect class="node" x="15" y="60" width="140" height="44" rx="10"/><text class="lbl" x="85" y="78">commit ছবি</text><text class="lbl-sm" x="85" y="94">হ্যাশ 1a2b3c</text>
<rect class="node-cyan" x="205" y="20" width="160" height="40" rx="9"/><text class="lbl-cyan" x="285" y="38">স্টিকার: wip-test</text><text class="lbl-sm" x="285" y="54">নাম-মাত্র, সনদ নেই</text>
<rect class="node-hot" x="205" y="100" width="160" height="40" rx="9"/><text class="lbl-hot" x="285" y="118">ফিতা: v2.1.0</text><text class="lbl-sm" x="285" y="133">ট্যাগার·তারিখ·বার্তা·সই</text>
<rect class="node-leaf" x="415" y="60" width="130" height="44" rx="10"/><text class="lbl-leaf" x="480" y="78">push origin</text><text class="lbl-sm" x="480" y="94">দোকানে পৌঁছানো</text>
<line x1="155" y1="72" x2="201" y2="44" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d8)"/>
<line x1="155" y1="92" x2="201" y2="118" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d8)"/>
<line x1="365" y1="120" x2="411" y2="88" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d8)"/>
<rect class="cell" x="15" y="148" width="530" height="18" rx="7"/><text class="lbl-sm" x="280" y="161">রিলিজ মানেই -a ফিতা · describe --tags = শেষ ফিতা থেকে দূরত্ব · ফিতা push ছাড়া কারো চোখে পড়ে না</text>
</svg>
<div class="diag-cap">একই ছবিতে দুই চিহ্ন লাগে — রিলিজের জন্য ফিতাই; আর বাঁধলেই নয়, পাঠাও।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফিতা-ঘরের সতর্কতা:</strong> সবচেয়ে ভুল-হওয়া ধারণা: 'tag করলাম, সবাই পেয়েছে' — না, tag push-করা আলাদা (git push origin v…)। --tags ব্যবহারে সাবধান: লোকাল টেম্পোরারি স্টিকারও দোকানে চলে যাবে; নির্দিষ্ট ফিতা বা --follow-tags-ই রীতি। tag অপরিবর্তনীয় ধরে কাজ করো — ভুল জায়গায় বাঁধলে মুছে (tag -d) নতুন বাঁধো, আর remote-এ গেলে থাকে force-push-এর অশুভ পথ — টিমকে জানাও। GitHub-র Release ফিতার উপরেই বসে (gh release create v2.1.0)।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The ribbon-room caution:</strong> the most common wrong belief: 'I tagged, everyone has it' — no, tags need their own push (git push origin v…). Beware --tags: local temporary stickers ship too; prefer specific tags or --follow-tags. Treat tags as immutable — tied wrongly? Delete (tag -d) and re-tie; once public, fixing means force-push — warn the team. GitHub Releases sit on top of tags (gh release create v2.1.0).</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ স্টিকার-রিলিজ</div>lightweight tag দিয়ে রিলিজ · push ছাড়া 'গেছে' ভাবা · নাম-রীতি এলোমেলো (v2, 2.0, release-final) · প্রত্যয়-নাম অজানা</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ হুদা সাহেবের রীতি</div>-a + বার্তা (+ -s সই) · semver কঠোর · নির্দিষ্ট push · describe দিয়ে দূরত্ব-হিসাব</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">tag -a -m</div><div class="sc-label">ফিতা: সনদসহ অবজেক্ট</div></div>
<div class="stat-card"><div class="sc-num">describe</div><div class="sc-label">শেষ ফিতা থেকে দূরত্ব</div></div>
<div class="stat-card"><div class="sc-num">--follow-tags</div><div class="sc-label">commit-সহ ফিতা-পাঠানো</div></div>
<div class="stat-card"><div class="sc-num">vMAJOR.MINOR.PATCH</div><div class="sc-label">semver-নামরীতি</div></div>
</div>

<p class="verse">মোহরের পাঠ: চুক্তিপত্রে সাক্ষী-সই ইসলামী বিধানের মূল (২:২৮২ দীর্ঘতম আয়াতই দলিলের) — নাম-মাত্র চিহ্ন নয়, কার-হাত-কখন লেখা থাকে। ফিতাও তাই: রিলিজ এক দলিল, সনদ ও সইসহ — আর সংস্করণ-নাম প্রতিশ্রুতি (API ভাঙলে বড় সংখ্যা স্বীকার করো)।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🏷️ রিলিজ = tag -a -m (সই -s); push origin v… বাধ্যতামূলক; দূরত্ব describe; নাম semver।<br>কারণ: ফিতা সনদসহ দলিল — বাঁধাই অর্ধেক, পাঠানোই পূর্ণ।</div></div>`,
  senior: {
    title: "ফিতা-ঘরের খাতা — The Ribbon-Room Ledger",
    body: `<ul class="checklist">
<li>রিলিজ: <strong>git tag -a vX.Y.Z -m "…"</strong> (+ <strong>-s</strong> সই) — স্টিকার নয়।</li>
<li>পাঠানো: <strong>git push origin vX.Y.Z</strong> / <strong>--follow-tags</strong>; --tags সাবধানে।</li>
<li>দূরত্ব: <strong>git describe --tags</strong>; শুধু নাম চাইলে <strong>--abbrev=0</strong>।</li>
<li>নামরীতি semver: MAJOR ভাঙা · MINOR ফিচার · PATCH ফিক্স · rc/beta প্রত্যয়।</li>
<li>পুরোনো ছবিতে ফিতা: <strong>git tag -a v… &lt;hash&gt;</strong>; মুছতে <strong>tag -d</strong>।</li>
</ul>`
  }
});

// ── DOOR 7 · মোজাম্মেল হোদার হিসাবখাতা — Moazzamel Hoda's Ledger of Records ──
doors.push({
  num: 9,
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
    a: "হ্যাঁ — ৯০ দিনের নিরাপত্তা-জাল: git reflog। HEAD-এর প্রতিটা চলাচল লেখা থাকে (reset-ও)। ধারা: git reflog → ভুলের আগের প্রবেশ চেনো (যেমন HEAD@{1} বা হ্যাশ) → git reset --hard HEAD@{1} (বা নতুন শাখায়: git branch rescue HEAD@{1})। সতর্কতা: যা কখনো add/commit হয়নি তা রেফলগেও নেই — তাই ঘন ঘন ছবি তোলো; আর push করা ইতিহাসে reset --hard + force কখনোই না (দরজা 5-এর সোনার নিয়ম)।",
    aen: "Yes — the 90-day safety net: git reflog. Every HEAD movement is recorded (resets too). Sequence: git reflog → recognize the entry before the mistake (e.g. HEAD@{1} or a hash) → git reset --hard HEAD@{1} (or branch off: git branch rescue HEAD@{1}). Caution: what was never added/committed is absent even from reflog — so photograph often; and never reset --hard + force on pushed history (Door 5's golden rule)."
  },
  story: `<p class="scene-setting">মোজাম্মেল হোদা শহরের জমিদার-বংশের হিসাবরক্ষক — শ'খানেক বছরের খাজনার খাতা তাঁর ঘরে। লোকে ভাবে তাঁর কাজ শুধু লেখা; আসলে তাঁর আসল শক্তি ফেরানোর ব্যবস্থা। তাঁর ঘরে চারটা দরজা। প্রথম দরজা: কালি শুকানোর আগে (amend) — এইমাত্র লেখা একটা এন্ট্রির হিসাব ভুল? এখনো খাতা বন্ধ হয়নি, সেই এন্ট্রিই শুধরে নাও, নতুন লাইন লাগবে না। দ্বিতীয়: প্রকাশ্য ভুল (revert) — খাতা তো দোকানে গেছে, পাতা ছেঁড়া যাবে না; নতুন এন্ট্রি লেখো পেছনের ভুলটা বাতিল বলে, হিসাব সোজা হয়, ইতিহাস অক্ষত। তৃতীয়: শাখার কাঁটা ঘোরানো (reset) — এই পাতা থেকে আর লিখব না, তিন পাতা পেছনে ফেরো; কিন্তু কতটা ফিরবে তার তিন মাত্রা: শুধু কাঁটা (soft — লেখা টেবিলে থাকবে), কাঁটা+টেবিল খালি (mixed — ঘরে থাকবে), সব গুছিয়ে ফেরত (hard — যেন লেখাই হয়নি)। আর চতুর্থ দরজা সবচেয়ে গুপ্ত: হারানো খাতার আলমারি (reflog) — তাঁর নিজের লুকানো খাতায় প্রতিটা পদক্ষেপ লেখা, কে কোন পাতায় কবে বসেছিল; পাতা হারালে এই খাতাই রাস্তা দেখায়। এক ভুলবশ সহকারী সকালে তিন পাতা ছিঁড়ে ফেলেছিল — সন্ধ্যায় মোজাম্মেল হোদা গুপ্ত খাতা খুলে সব ফিরিয়ে আনলেন, একটা সংখ্যাও হারায়নি।</p>
<p class="scene-setting en">Moazzamel Hoda is the ledger-keeper of the city's oldest estate — a hundred years of rent-books in his room. People think his work is writing; his real power is the machinery of return. His room has four doors. First: before the ink dries (amend) — this entry's arithmetic is wrong? The book is not closed yet; correct that very entry, no new line. Second: a public mistake (revert) — the book has gone to the shop; pages cannot be torn. Write a new entry cancelling the old — accounts straighten, history intact. Third: turning the bookmark back (reset) — I will write no more from this page; return three pages; three depths of return: bookmark only (soft — writing stays on the table), bookmark + cleared table (mixed — writing stays in the room), everything squared away (hard — as if never written). And the fourth door is the most secret: the cabinet of lost books (reflog) — his hidden book records every step, who sat on which page when; lose a page and this book shows the road. A careless assistant once tore out three pages at dawn — by evening Moazzamel Hoda had restored every number from the secret book.</p>

<div class="code-block"># চার-দরজার ওষুধ-সূচি — কোন ভুল, কোন দরজা:
# ① শেষ ছবি, এখনো push হয়নি → amend
git commit --amend -m "ঠিক করা বার্তা"    # বার্তা/ছবি শুধরে নাও
git add forgotten.txt && git commit --amend --no-edit
#   ⚠ push-করা ছবিতে amend = ইতিহাস পুনঃলেখা → নিষেধ (দরজা 5)

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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>হিসাবখাতার সতর্কতা:</strong> reset --hard-এর আগে দুবার ভাবো — সে টেবিল-ঘর দুটোই গুছিয়ে ফেলে, uncommitted কাজ রেফলগেও থাকে না; তাই রীতি: আগে ছবি (commit) বা ঝুলি (stash), তারপর hard। আর প্রকাশিত ইতিহাসে (push করা) কখনোই reset+force নয় — দলের সাথে বিশ্বাস ভাঙে (দরজা 5); সেখানে একমাত্র revert। এক লাইনে: <strong>ঘরের ভুল amend/reset, প্রকাশিত ভুল revert</strong>।</div></div>
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

// ── DOOR 10 · রেহানার রাতের নোটবুক — Rehana's Night Notebook ──
doors.push({
  num: 10,
  icon: "📜",
  color: "#fbbf24",
  name: "রেহানার রাতের নোটবুক",
  subtitle: "Rehana's Night Notebook",
  tech: "reflog deep · branch-restore · gc/reflogExpire · fsck rescue",
  spirit: "হেফাজত — মুছে ফেলাও প্রথমে লেখা পড়ে",
  secret: "স্টুডিওর নাইট-গার্ড রেহানা প্রতি মুহূর্তের গতিবিধি খাতায় লেখেন — HEAD যতবার বদলেছে, branch ততবার সরেছে, সব লগ (reflog); তাই 'মুছে গেছে' মানে হারানো নয় — অ্যালবাম থেকে ছবি সরানো মাত্র, নোটবুকে ঠিকানা বাকি; শর্ত একটাই: নোটবুকের পাতা দুই মেয়াদে পুরোনো হয় — পৌঁছানো ইতিহাস ৯০ দিন, বিচ্ছিন্ন (unreachable) ৩০ দিন।",
  recall: {
    q: "ভুলে git branch -D দিয়ে ফিচার-শাখা মুছে ফেলেছ — তিন ঘণ্টার কাজ! ধাপে ধাপে ফেরাও। আর কেন কেউ কেউ ৩১ দিন পরে আর ফেরাতে পারে না — দুই মেয়াদের নাম-সংখ্যা বলো।",
    qen: "You accidentally git branch -D'd a feature branch — three hours of work! Recover it step by step. And why can some people no longer recover after 31 days — name the two expiry windows.",
    a: "উদ্ধার: ① git reflog — HEAD-এর সব গতি দেখো; মুছে ফেলা শাখার শেষ commit খুঁজো (git reflog | grep শাখার-নাম-ও চলে); ② যাচাই: git show <hash> বা git log <hash> --oneline -3 — ছবি ঠিক আছে কি না; ③ পুনর্জন্ম: git branch feature-x <hash> — শাখা ফিরে এলো, অথবা শুধু এক commit চাইলে cherry-pick (দরজা ৬)। দুই মেয়াদ: gc.reflogExpire = ৯০ দিন (স্বাভাবিক, পৌঁছানো ইতিহাসের পাতা), gc.reflogExpireUnreachable = ৩০ দিন (বিচ্ছিন্ন পাতা) — ৩০ দিন পার হলে git gc অবশেষে সেই অবজেক্ট ঝেড়ে দেয়, তখন সত্যিই হারায়। শেষ-অস্ত্র: git fsck --lost-found — reflog-পাতা ছাড়া পড়ে থাকা ছবির স্তূপ।",
    aen: "Rescue: ① git reflog — watch HEAD's every move; find the deleted branch's last commit (git reflog | grep branch-name works too); ② verify: git show <hash> — the picture is intact; ③ rebirth: git branch feature-x <hash> — branch restored, or cherry-pick a single commit (Door 6). The two windows: gc.reflogExpire = 90 days (normal reachable history), gc.reflogExpireUnreachable = 30 days (orphaned pages) — past 30 days git gc eventually prunes those objects for real. Last resort: git fsck --lost-found — the pile of pictures left outside the notebook.",
    you: "git switch -c temp-work && echo x>f && git add f && git commit -m X && git switch main && git branch -D temp-work && git reflog | head -5 && git branch temp-work HEAD@{1} && git log temp-work --oneline"
  },
  story: `<p class="scene-setting">রেহানা খাতুন স্টুডিওর নাইট-গার্ড — তাঁর হাতে সবসময় একটা মোটা নোটবুক: কে কোন ঘরে ঢুকল, কোন আলমারি সরাল, কোন ছবি আলবাম থেকে খোলসা হলো — প্রতিটা ঘটনা লেখেন যায় ঘটে (reflog ঠিক এভাবেই HEAD-এর প্রতি নড়াচড়া লেখে)। এক ভোরে শাগরেদ কাঁদতে কাঁদতে এলো: ভুল করে feature-x আলমারি পুরো সরিয়ে ফেলেছি! রেহানা শান্ত গলায় নোটবুক খুললেন — এই দেখো, রাত ১১:৪০-এ ওই আলমারি শেষ কোথায় দাঁড়িয়ে ছিল, ঠিকানা 3c4d5e; যাও, git branch feature-x 3c4d5e বলো — আলমারি ফিরে আসবে, ভেতরের সব ছবিসহ। তারপর তাঁর জবাবি পাঠ: আমার খাতার পাতারও মেয়াদ আছে বুঝো — স্বাভাবিক ঘটনার পাতা ৯০ দিন, আর যে ছবি আলবাম-কাটা পড়ে আছে তার পাতা মাত্র ৩০ দিন; মেয়াদ পেরোলে ঝাড়ুদার (gc) ওঠায় নিয়ে যায় — তাই টুকরো পড়ে থাকলে আজই তুলো, কাল নয়।</p>
<p class="scene-setting en">Rehana Khatun is the studio's night guard — always with a thick notebook: who entered which room, which cabinet moved, which picture came out of the album — every event noted as it happens (reflog logs every HEAD movement exactly so). One dawn an apprentice arrived crying: I deleted the feature-x cabinet by mistake! Rehana calmly opened the notebook — see, at 11:40 pm that cabinet last stood at address 3c4d5e; go say git branch feature-x 3c4d5e — it returns, all pictures inside. Then her sober lesson: my pages have expiry too — normal events stay 90 days, album-cut pictures only 30; past that the sweeper (gc) takes them away — so pick up your pieces TODAY, not tomorrow.</p>

<div class="code-block"># নোটবুক খোলো:
git reflog                     # HEAD-এর সব গতি: hash HEAD@{n}: কী হলো
git reflog show main           # নির্দিষ্ট শাখার খাতা
git reflog --date=iso          # মানুষের তারিখে

# মুছে-ফেলা শাখা উদ্ধার (৩ ধাপ):
git branch -D feature-x        # (দুর্ঘটনা!)
git reflog | head -8           # ① শেষ ঠিকানা খোঁজো
git show 3c4d5e --stat         # ② যাচাই — ছবি অক্ষত?
git branch feature-x 3c4d5e    # ③ পুনর্জন্ম — শাখা ফিরল!
# এক commit চাইলে: git cherry-pick 3c4d5e (দরজা ৬)

# মেয়াদ-খাতা (দুই ঘড়ি):
#   gc.reflogExpire           = 90 দিন (স্বাভাবিক পাতা)
#   gc.reflogExpireUnreachable= 30 দিন (বিচ্ছিন্ন পাতা)
git config gc.reflogExpireUnreachable "60 days"   # ইচ্ছায় বাড়াও

# ঝাড়ুদারের নিয়ম:
git gc                          # পুরোনো অবজেক্ট ঝাড়ু (মেয়াদ-শ্রদ্ধা করে)
#   বিপদ-মুহূর্তে কখনো নয়: হারানোর সন্দেহে git gc চালিয়ে দিও না!

# শেষ-অস্ত্র (নোটবুক-বাইরে পড়া ছবি):
git fsck --lost-found           # dangling commit-তালিকা
#   .git/lost-found/ — ফাইল-টুকরো জমা হয়</div>

<table class="kv-table">
<tr><th>ঘটনা</th><th>উদ্ধার-আদেশ</th><th>নোটবুকের ছল</th></tr>
<tr><td class="hl">শাখা মুছে গেছে</td><td>reflog → branch <নাম> <hash></td><td>ঠিকানা ধরে আলমারি-ফেরত</td></tr>
<tr><td class="hll">reset --hard বাড়তি</td><td>reflog → reset --hard HEAD@{n}</td><td>পাতা-উল্টানো</td></tr>
<tr><td class="hl">এক commit ফেরত</td><td>cherry-pick <hash></td><td>এক ছবি তোলা</td></tr>
<tr><td class="hll">নোটবুক-বাহির</td><td>fsck --lost-found</td><td>মেঝে-পড়া টুকরো</td></tr>
<tr><td class="hl">মেয়াদ</td><td>৯০ / ৩০ দিন</td><td>পাতার দুই ঘড়ি</td></tr>
</table>

<div class="diagram">
<div class="diag-title">নোটবুকের দুই ঘড়ি — The Notebook's Two Clocks</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar61d10" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker>
</defs>
<rect class="node" x="15" y="65" width="150" height="44" rx="10"/><text class="lbl" x="90" y="83">দুর্ঘটনা</text><text class="lbl-sm" x="90" y="99">branch -D / reset --hard</text>
<rect class="node-cyan" x="215" y="65" width="140" height="44" rx="10"/><text class="lbl-cyan" x="285" y="83">নোটবুক</text><text class="lbl-sm" x="285" y="99">git reflog → hash</text>
<rect class="node-leaf" x="405" y="65" width="140" height="44" rx="10"/><text class="lbl-leaf" x="475" y="83">পুনর্জন্ম</text><text class="lbl-sm" x="475" y="99">branch/reset/cherry-pick</text>
<line x1="165" y1="87" x2="211" y2="87" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d10)"/>
<line x1="355" y1="87" x2="401" y2="87" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d10)"/>
<rect class="cell" x="15" y="130" width="530" height="36" rx="8"/>
<text class="lbl-sm" x="280" y="146">দুই ঘড়ি: স্বাভাবিক পাতা ৯০ দিন (gc.reflogExpire) · বিচ্ছিন্ন পাতা ৩০ দিন (gc.reflogExpireUnreachable)</text>
<text class="lbl-sm" x="280" y="160">মেয়াদের ভেতরে উদ্ধার — তার আগে gc নয়; নোটবুক-বাহির হলে fsck --lost-found</text>
</svg>
<div class="diag-cap">দুর্ঘটনা → নোটবুক → পুনর্জন্ম; শুধু ঘড়ির ভেতরে — ৯০ ও ৩০ দিন।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নাইট-গার্ডের সতর্কতা:</strong> হারানোর সন্দেহ করা মাত্রই দুটো কাজ নিষিদ্ধ — git gc (ঝাড়ুদার প্রমাণ মুছে দিতে পারে) আর রিপো re-clone (নোটবুক লোকাল-ই, নতুন ক্লোনে খাতা খালি!)। reflog কখনো push হয় না — সহকর্মীর মেশিনে তোমার খাতা নেই। আর মেয়াদ মনে রাখো: 'ক' স্বাভাবিক ৯০, 'খ' বিচ্ছিন্ন ৩০ — ভুলে যে সব ৩০ ভাবে, সে অযথা আতঙ্কিত; যে ৯০ ভাবে, সে অযথা নিশ্চিন্ত। ডিস্ক-সংকটে expire-unreachable কমানো যায়, কিন্তু তা নিরাপত্তা-জামাকাটা — জেনে করো।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The night guard's caution:</strong> the moment you suspect loss, two things are forbidden — git gc (the sweeper may erase the evidence) and re-cloning (the notebook is local-only; a fresh clone has empty pages!). reflog never gets pushed — your machine's notebook is yours alone. Remember the clocks: reachable 90, orphaned 30 — whoever thinks all-30 panics needlessly, whoever thinks all-90 relaxes needlessly. Disk pressure may justify shortening expire-unreachable, but that is cutting the safety net — do it knowingly.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ হতাশ-তাড়াহুড়ো</div>'হারাল!' বলে re-clone · হারানোর পর পরই gc · reflog-অজানা নোটবুক · মেয়াদ-ঘড়ি না জানা</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ রেহানার রীতি</div>আগে reflog, পরে সিদ্ধান্ত · hash-যাচাই (show) → branch-পুনর্জন্ম · gc স্থগিত · মেয়াদ ৯০/৩০ মুখস্থ-বোঝা</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">git reflog</div><div class="sc-label">HEAD-এর প্রতিটি গতি</div></div>
<div class="stat-card"><div class="sc-num">৯০ / ৩০</div><div class="sc-label">দুই মেয়াদ-ঘড়ি (দিন)</div></div>
<div class="stat-card"><div class="sc-num">branch X H</div><div class="sc-label">মুছা শাখার পুনর্জন্ম</div></div>
<div class="stat-card"><div class="sc-num">fsck --lost-found</div><div class="sc-label">শেষ-অস্ত্র স্তূপ-খোঁজা</div></div>
</div>

<p class="verse">হেফাজতের পাঠ: কুরআন বলে মানুষের প্রতিটি কর্ম লেখা হয় — কিরামে কাতিবীনের দিনলিপি; এবং কেয়ামতে খাতা খোলা হবে (৮৩: মুতাফফিফিন)। রেহানার নোটবুকও সেই ছায়া: কিছুই নীরবে হারায় না — খাতা আছে; শর্ত হলো মেয়াদের ভেতরে ফিরে তাকানো।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📜 হারালে আগে reflog; hash-যাচাই করে branch/reset/cherry-pick; gc-নিষেধ, re-clone-নিষেধ; ঘড়ি ৯০/৩০।<br>কারণ: মুছে ফেলা মানে আলবাম-কাটা — নোটবুকে ঠিকানা বেঁচে, মেয়াদের ভেতরে।</div></div>`,
  senior: {
    title: "নোটবুক-রক্ষকের খাতা — The Notebook-Keeper's Ledger",
    body: `<ul class="checklist">
<li>দুর্ঘটনার প্রথম আদেশ <strong>git reflog</strong> — শেষ কিছু না।</li>
<li>শাখা-উদ্ধার: <strong>reflog → show যাচাই → git branch &lt;নাম&gt; &lt;hash&gt;</strong>।</li>
<li>মেয়াদ-ঘড়ি: <strong>৯০ দিন</strong> স্বাভাবিক / <strong>৩০ দিন</strong> বিচ্ছিন্ন — কনফিগে বাড়ানো যায়।</li>
<li>সন্দেহ-মুহূর্তে <strong>gc ও re-clone নিষিদ্ধ</strong>; reflog কখনো push হয় না।</li>
<li>শেষ-অস্ত্র <strong>git fsck --lost-found</strong> — dangling অবজেক্ট-জমা।</li>
</ul>`
  }
});



