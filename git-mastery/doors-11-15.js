// ════════════════════════════════════════
// Book 61 · The Studio of Time — v2 Complete Reference (20 doors)
// সময়ের স্টুডিও · git-mastery · hue 38
// ════════════════════════════════════════

// ── DOOR 8 · রুবেলা খাতুনের ঝুলি-তাক — Rubela Khatun's Shelf ──
doors.push({
  num: 11,
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


// ── DOOR 12 · ইদ্রিস মিস্ত্রির দরজা-ঘণ্টা — Idris Mistri's Doorbell ──
doors.push({
  num: 12,
  icon: "🪝",
  color: "#fbbf24",
  name: "ইদ্রিস মিস্ত্রির দরজা-ঘণ্টা",
  subtitle: "Idris Mistri's Doorbell",
  tech: "hooks · pre-commit · commit-msg · husky-ধাঁচ · chmod +x",
  spirit: "পাহারা — ভুল ঢোকার আগেই থামাও",
  secret: "স্টুডিওর দরজায় ঘণ্টা বসানো যায়: commit-এর ঠিক আগে/পরে তোমার স্ক্রিপ্ট নিজে থেকেই বাজে — লিন্ট না পাশে ঢোকা বন্ধ (pre-commit ব্যর্থ = commit-ই হয় না), বার্তার বানান-নিয়ম পরীক্ষা (commit-msg), আর push-এর আগে শেষ-পাহারা (pre-push); ঘণ্টা .git/hooks/-এ থাকে, নাম-ক্রমেই কাজ চেনে।",
  recall: {
    q: "টিমের নিয়ম: কোনো কমিট যাতে লিন্ট-অপাস হলে আটকে যায়, আর বার্তা convention: না মানলে ফেরত যায়। কোন দুই হুক, কোথায় বসে, আর ব্যর্থতার অর্থ কী?",
    qen: "Team rule: no commit passes if lint fails, and messages violating convention bounce. Which two hooks, where do they live, and what does failure mean?",
    a: "① pre-commit — .git/hooks/pre-commit ফাইলে তোমার স্ক্রিপ্ট (শেব্যাং+নির্বাহ-অনুমতি লাগে: chmod +x); স্ক্রিপ্ট 0 ছাড়া exit করলে commit বাতিল — এখানে লিন্ট/ফরম্যাট-চেক বসে। ② commit-msg — .git/hooks/commit-msg; আর্গুমেন্টে commit-বার্তার ফাইল আসে; grep -E '^(feat|fix|docs):' জাতীয় পরীক্ষায় না মিললে exit 1 — বার্তা ফেরত। JS-প্রজেক্টে husky এই ঘণ্টাগুলোই repo-র ভেতরে রেখে টিম-শেয়ার করায় (.git/hooks ক্লোনে যায় না — এই সীমাই husky-র কারণ)। প্রমাণ: হুক বাজছে কি না প্রথমবার echo দিয়ে পরীক্ষা করো।",
    aen: "① pre-commit — your script at .git/hooks/pre-commit (needs shebang + chmod +x); non-zero exit cancels the commit — lint/format checks live here. ② commit-msg — .git/hooks/commit-msg; receives the message file as argument; a grep -E '^(feat|fix|docs):' style check exits 1 on mismatch — message bounces. In JS projects husky keeps these same bells inside the repo so the team shares them (.git/hooks is not cloned — exactly why husky exists). Proof: test your hook with an echo first.",
    you: "printf '#!/bin/sh\\necho ঘণ্টা বাজল; exit 1' > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit && git commit -am test; git log -1 --oneline; rm .git/hooks/pre-commit"
  },
  story: `<p class="scene-setting">ইদ্রিস মিস্ত্রি শহরের সেরা দরজা-ঘণ্টা-স্থাপক — তাঁর দার্শনিক কথা: চোর ধরা পড়ার পরে নয়, দরজায় পা ফেলার আগেই ঘণ্টা বাজবে। স্টুডিও-মালিক রহমত সাহেব তাঁকে ডেকেছিলেন এক বিশেষ কাজে: যে কারিগর লিন্ট-না-পাশ করা কোড নিয়ে ঢুকবে, তার ঢোকার আগেই থামাও। ইদ্রিস দুই ঘণ্টা বসালেন — একটা বাইরের দরজায় (pre-commit: ঢোকার আগে সব পরীক্ষা; ব্যর্থ হলে দরজা খোলেই না), আরেকটা ভেতরের বার্তা-টেবিলে (commit-msg: খাতায় লেখার নিয়ম না মানলে কলম কেড়ে নেওয়া)। শাগরেদ জিজ্ঞেস করল: মালিক, ঘণ্টা কি সবার বাড়িতে যাবে? ইদ্রিস হাসলেন: না — ঘণ্টা বাড়ির ভেতরে বসে (.git/hooks), নতুন কেউ বাড়ি ভাড়া নিলে (clone) ঘণ্টা আসে না; তাই টিমের বাড়িতে আমরা ঘণ্টার নকশা উঠানে রাখি (husky) — প্রত্যেকে নিজে বসায়, এক আদেশে।</p>
<p class="scene-setting en">Idris Mistri is the town's finest doorbell installer — his philosophy: the bell must ring BEFORE the thief's foot crosses, not after the catch. Studio-owner Rahmat Sahib hired him for a special job: any craftsman carrying un-linted code must be stopped at the door. Idris set two bells — one on the outer door (pre-commit: all checks before entry; fail, and the door never opens), one at the inner message-desk (commit-msg: break the ledger's writing rules, lose the pen). An apprentice asked: will the bell reach every house? Idris laughed: no — the bell lives inside the house (.git/hooks); a new tenant (clone) gets no bell; so in team houses we keep the bell's blueprint in the courtyard (husky) — everyone installs it with one command.</p>

<div class="code-block"># ঘণ্টা বসাও (আসল ঠিকানা):
ls .git/hooks/                  # নমুনা-স্ক্রিপ্ট দেখো (.sample)
cat > .git/hooks/pre-commit <<'EOF'
#!/bin/sh
npm run lint || exit 1          # লিন্ট না পাশ → দরজা বন্ধ
EOF
chmod +x .git/hooks/pre-commit  # নির্বাহ-অনুমতি বাধ্যতামূলক!

# বার্তা-পরীক্ষক:
cat > .git/hooks/commit-msg <<'EOF'
#!/bin/sh
grep -qE '^(feat|fix|docs|chore):' "$1" || {
  echo "বার্তার শুরু হবে: feat|fix|docs|chore:" >&2; exit 1; }
EOF
chmod +x .git/hooks/commit-msg

# পরীক্ষা করো (হুক জ্বলছে?):
git commit -m "bad message"     # → বাতিল!
git commit -m "fix: আসল বার্তা"  # → পাশ

# টিম-শেয়ারিং — .git/hooks ক্লোনে যায় না:
npm install husky && npx husky install
echo "npm run lint" > .husky/pre-commit
#   প্রত্যেক ক্লোনে: npm prepare-স্ক্রিপ্টে husky install

# সাধারণ ঘণ্টার তালিকা:
#   pre-commit → লিন্ট/ফরম্যাট · commit-msg → বার্তা-নিয়ম
#   pre-push → শেষ-পাহারা · post-merge → নির্ভরতা-ইনস্টল
#   prepare-commit-msg → টেমপ্লেট মেশানো
# সব হুক এড়াতে (শুধু জরুরি-মুহূর্তে): git commit --no-verify</div>

<table class="kv-table">
<tr><th>ঘণ্টা</th><th>কখন বাজে</th><th>থামালে কী হয়</th></tr>
<tr><td class="hl">pre-commit</td><td>commit-এর আগে</td><td>commit-ই হয় না</td></tr>
<tr><td class="hll">commit-msg</td><td>বার্তা লেখার পর</td><td>বার্তা ফেরত</td></tr>
<tr><td class="hl">pre-push</td><td>push-এর আগে</td><td>push বন্ধ</td></tr>
<tr><td class="hll">post-merge</td><td>merge/pull-এর পর</td><td>(থামায় না) কাজ করায়</td></tr>
</table>

<div class="diagram">
<div class="diag-title">দুই ঘণ্টার দরজা — The Two-Bell Door</div>
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar61d12" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker>
</defs>
<rect class="node" x="15" y="63" width="120" height="44" rx="10"/><text class="lbl" x="75" y="81">git commit</text><text class="lbl-sm" x="75" y="97">কারিগর দরজায়</text>
<rect class="node-cyan" x="175" y="63" width="130" height="44" rx="10"/><text class="lbl-cyan" x="240" y="81">🔔 pre-commit</text><text class="lbl-sm" x="240" y="97">lint না পাশ → বন্ধ</text>
<rect class="node-hot" x="345" y="63" width="110" height="44" rx="10"/><text class="lbl-hot" x="400" y="81">🔔 commit-msg</text><text class="lbl-sm" x="400" y="97">নিয়ম-বাণী</text>
<rect class="node-leaf" x="495" y="63" width="55" height="44" rx="10"/><text class="lbl-leaf" x="522" y="81">খাতা</text><text class="lbl-sm" x="522" y="97">✓</text>
<line x1="135" y1="85" x2="171" y2="85" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d12)"/>
<line x1="305" y1="85" x2="341" y2="85" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d12)"/>
<line x1="455" y1="85" x2="491" y2="85" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d12)"/>
<rect class="cell" x="15" y="128" width="530" height="32" rx="8"/>
<text class="lbl-sm" x="280" y="144">ঘণ্টা বাড়ির ভেতরে (.git/hooks) — ক্লোনে যায় না; টিমের জন্য husky উঠানে রাখে</text>
<text class="lbl-sm" x="280" y="158">chmod +x ভুলে গেলে ঘণ্টা নীরব (সবচেয়ে প্রচলিত ফাঁদ) · জরুরি-বাইপাস: --no-verify</text>
</svg>
<div class="diag-cap">দরজায় দুই ঘণ্টা — কোড-পরীক্ষা আর বার্তা-নিয়ম; ব্যর্থ ঘণ্টা মানেই ঢোকা বন্ধ।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ঘণ্টা-স্থাপকের সতর্কতা:</strong> সবচেয়ে প্রচলিত নীরব-ব্যর্থতা: chmod +x ভুলে যাওয়া — স্ক্রিপ্ট আছে, ঘণ্টা বাজে না, কেউ জানেও না। হুকে ধীর-কাজ বসালে প্রতি commit শাস্তি হবে — লিন্ট শুধু বদলানো ফাইলে (lint-staged)। আর মনে রেখো: হুক স্থানীয় পাহারা — অতিথি কারিগর --no-verify দিয়ে পাশ কাটতেই পারে; CI-পাহারা (B59 দরজা ২১) আসল দেয়াল, হুক শুধু দরজার ঘণ্টা।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The bell-installer's caution:</strong> the most common silent failure: forgetting chmod +x — script exists, bell never rings, nobody knows. Slow hooks turn every commit into punishment — lint only changed files (lint-staged). And remember: hooks are local guards — a guest can bypass with --no-verify; CI (B59 Door 21) is the real wall, hooks are just the doorbell.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ঘণ্টাহীন দরজা</div>লিন্ট-ব্যর্থ কোড খাতায় · বার্তা এলোমেলো · chmod ভুলে নীরব-ঘণ্টা · হুককেই নিরাপত্তা ভাবা</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ইদ্রিসের রীতি</div>pre-commit লিন্ট · commit-msg নিয়ম · chmod +x নিশ্চিত · husky-তে টিম-শেয়ার · CI-দেয়াল আলাদা</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">pre-commit</div><div class="sc-label">কোড-পরীক্ষা, ঢোকার আগে</div></div>
<div class="stat-card"><div class="sc-num">commit-msg</div><div class="sc-label">বার্তা-নিয়ম পরীক্ষা</div></div>
<div class="stat-card"><div class="sc-num">chmod +x</div><div class="sc-label">নীরব-ঘণ্টা রোধ</div></div>
<div class="stat-card"><div class="sc-num">--no-verify</div><div class="sc-label">জরুরি-বাইপাস (সাবধানে)</div></div>
</div>

<p class="verse">পাহারার পাঠ: হাদিসে বলা হয়েছে মন্দ থেকে হাত-জিহ্বা বিরত রাখো — অর্থাৎ থামানো ঘটনার আগে, পরে নয়; ফিতনার দরজায় পাহারা বসানো মুমিনের কাজ। ইদ্রিসের ঘণ্টাও তাই: ভুল খাতায় ওঠার আগেই বাজে — নয়, পরে ধরা।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🪝 pre-commit লিন্ট, commit-msg নিয়ম; chmod +x বাধ্যতামূলক; টিমে husky, দেয়ালে CI।<br>কারণ: ঘণ্টা ঢোকার আগে বাজে — খাতা নোংরা হওয়ার আগেই।</div></div>`,
  senior: {
    title: "ঘণ্টা-স্থাপকের খাতা — The Bell-Installer's Ledger",
    body: `<ul class="checklist">
<li><strong>.git/hooks/pre-commit</strong> — লিন্ট/ফরম্যাট; exit≠0 = commit বাতিল।</li>
<li><strong>.git/hooks/commit-msg "$1"</strong> — বার্তা-নিয়ম; শেব্যাং+<strong>chmod +x</strong>।</li>
<li>টিম-শেয়ার: <strong>husky</strong> (.husky/) — .git/hooks ক্লোনে যায় না।</li>
<li>দ্রুততা: <strong>lint-staged</strong> — শুধু বদলানো ফাইলে পরীক্ষা।</li>
<li>হুক ≠ নিরাপত্তা (<strong>--no-verify</strong> বাইপাস) — আসল দেয়াল CI (B59-২১)।</li>
</ul>`
  }
});

// ── DOOR 9 · ইন্সপেক্টর নাদিমের গোয়েন্দা-দালান — Inspector Nadim's Detective Bureau ──
doors.push({
  num: 13,
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গোয়েন্দা-সতর্কতা:</strong> bisect চলাকালীন তুমি detached HEAD-এ ঘুরছ (দরজা 3) — প্রতিটা মাঝ-ছবি পড়ার মোড; শেষে অবশ্যই <strong>git bisect reset</strong>, নইলে বুকমার্ক হারানো অবস্থায় কাজ শুরু করে ফেলবে। আর blame অভিযোগ-পত্র নয়: লাইনটা যে লিখেছে সে-ই কারণ জানে না — মাঝে merge/rebase-এ লেখক-নাম সরে যেতে পারে; blame দেখে জিজ্ঞাসা করো, বিচার করো না। আর run-এর স্ক্রিপ্ট নির্ভরযোগ্য হতে হবে — flaky টেস্টে bisect ভুল অপরাধী ধরবে।</div></div>
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

// ── DOOR 14 · সোনালী বেগমের ভেতর-ঘর — Sonali Begum's Inner Room ──
doors.push({
  num: 14,
  icon: "🗿",
  color: "#fbbf24",
  name: "সোনালী বেগমের ভেতর-ঘর",
  subtitle: "Sonali Begum's Inner Room",
  tech: ".git internals · objects · refs · HEAD · packfiles · cat-file",
  spirit: "গভীরে যাও — জাদু ভেদ করলে যন্ত্র বোঝা যায়",
  secret: "স্টুডিওর আসল কারখানা .git নামের ভেতর-ঘরে: objects/ আলমারিতে চার জাতের বাক্স (blob=ছবির কাচ, tree=ফ্রেম-তালিকা, commit=মুহূর্তের সনদ, tag=ফিতার সনদ), refs/ দরজায় শাখা-নামের কার্ড, HEAD ফাইলে 'এখন কোথায় দাঁড়িয়ে'; cat-file দিয়ে যেকোনো হ্যাশ খুলে দেখো — Git আর জাদু নয়, ফাইল-সিস্টেম।",
  recall: {
    q: ".git ফোল্ডারের ভেতরে আসলে কী আছে? চার ধরনের object-এর নাম-কাজ বলো, HEAD ফাইলটা কী লেখে, আর শাখার নাম কোথায় থাকে?",
    qen: "What actually lives inside .git? Name and role of the four object types, what the HEAD file says, and where branch names live?",
    a: "ভেতর-ঘরের তিন আসবাব: ① objects/ — সব বাক্সের আলমারি; বাক্স চার জাত: blob (ফাইলের বিষয়বস্তু — ছবির কাচ, নামহীন), tree (কোন ফোল্ডারে কোন নামে কোন blob/tree — ফ্রেম-তালিকা), commit (কোন tree, কার হাতে, কখন, বাবা কে — মুহূর্তের সনদ), tag (annotated ফিতার সনদ, দরজা ৮)। ② refs/ — শাখা-নামের কার্ড-র‍্যাক (refs/heads/main ফাইলে এক লাইন: হ্যাশ); প্রতিটা শাখা মানে একটা ৪১-অক্ষরের টেক্সট-ফাইল! ③ HEAD — 'এখন কোথায় দাঁড়িয়ে': ref: refs/heads/main (শাখায়) বা সরাসরি হ্যাশ (detached, দরজা ৩)। যাচাই-চোখ: git cat-file -p <hash> যেকোনো বাক্স খোলে; git cat-file -t <hash> জাত বলে।",
    aen: "Three pieces of furniture: ① objects/ — the cabinet of boxes; four kinds: blob (file content — the picture glass, nameless), tree (which folder holds which name pointing at which blob/tree — the frame list), commit (which tree, whose hand, when, parent — the moment's certificate), tag (annotated ribbon certificate, Door 8). ② refs/ — the card-rack of branch names (refs/heads/main is a FILE containing one line: a hash); every branch is a 41-character text file! ③ HEAD — 'where you now stand': ref: refs/heads/main (on a branch) or a raw hash (detached, Door 3). X-ray eyes: git cat-file -p <hash> opens any box; git cat-file -t <hash> names its kind.",
    you: "cat .git/HEAD && cat .git/refs/heads/main 2>/dev/null || git rev-parse main && H=$(git rev-parse HEAD) && git cat-file -t $H && git cat-file -p $H | head -5"
  },
  story: `<p class="scene-setting">স্টুডিওর পেছনের দরজা খুললে সোনালী বেগমের ভেতর-ঘর — বাইরে থেকে সবাই ভাবে জাদুঘর, ভেতরে ঢুকলে দেখা যায় নিখুঁত গুদাম। আলমারি (objects/): হাজার হাজার বাক্স, চার জাতের — কাচ-বাক্স (blob: ছবির বিষয়বস্তু, নাম-পরিচয়হীন), ফ্রেম-তালিকা (tree: কোন নামে কোন কাচ কোন তাকে), মুহূর্তের সনদ (commit: কোন তালিকা, কার হাত, কখন, আগের সনদ কোনটা), আর ফিতার সনদ (tag)। দেয়ালে কার্ড-র‍্যাক (refs/): প্রতিটা শাখা-নামের পেছনে একটা ছোট্ট কার্ড, তাতে ঠিক এক লাইন — সনদের ঠিকানা; মানে 'শাখা' নামের জাদু নয়, একটা টেক্সট-ফাইল! মালিকের টেবিলে HEAD খাতা: এখন কোন কার্ডের সামনে দাঁড়িয়ে আছি — এই লাইনটাই। সোনালী বেগমের কথা: বাইরের কারিগর জাদুতে বিশ্যাস করে, ভেতর-ঘর দেখা কারিগর ব্যবস্থাপনায় — cat-file দিয়ে যেকোনো বাক্স খুলে দেখো, ভয় কেটে যাবে।</p>
<p class="scene-setting en">Behind the studio lies Sonali Begum's inner room — from outside people imagine a magic museum; step in and you find a precise warehouse. The cabinet (objects/): thousands of boxes of four kinds — glass-boxes (blobs: picture content, nameless), frame-lists (trees: which name holds which glass on which shelf), moment-certificates (commits: which list, whose hand, when, parent), and ribbon-certificates (tags). On the wall, the card-rack (refs/): behind every branch name, one small card holding exactly one line — an address; 'branch' is not magic, it is a text file! On the owner's desk, the HEAD ledger: which card I stand before now — that one line. Sonali's saying: outside craftsmen trust magic; those who see the inner room trust management — open any box with cat-file, and the fear dissolves.</p>

<div class="code-block"># ভেতর-ঘরে ঢুকো:
ls .git/                     # HEAD, config, objects/, refs/, hooks/ …
cat .git/HEAD               # ref: refs/heads/main (বা সরাসরি হ্যাশ)
cat .git/refs/heads/main    # শাখা = এক লাইনের ফাইল!
ls .git/refs/heads/         # প্রতিটা নাম = এক শাখা

# যেকোনো বাক্স খোলো (এক্স-রে চোখ):
H=$(git rev-parse HEAD)      # বর্তমান সনদের ঠিকানা
git cat-file -t $H           # commit  ← জাত
git cat-file -p $H           # tree…, parent…, author…  ← সনদ খোলা
T=$(git rev-parse HEAD^{tree})
git cat-file -p $T           # ফ্রেম-তালিকা: 100644 blob a1b2… file.txt
B=$(git rev-parse HEAD:f.txt)
git cat-file -p $B           # ফাইলের বিষয়বস্তু — কাচ-বাক্স

# আলমারির ঘনত্ব-হিসাব (packfile = চাপা-বান্ডিল):
git count-objects -v         # count, size, in-pack …
git verify-pack -v .git/objects/pack/*.idx | head -5

# জাদু-ভেদের ফল:
#   • শাখা মুছলে কার্ড ওঠে, বাক্স থাকে (দরজা ১০ reflog)
#   • সব হ্যাশ = বিষয়বস্তুর হিসাব (sha1) — একই জিনিস একই বাক্স (dedup)
#   • detached HEAD = HEAD খাতায় সরাসরি ঠিকানা (দরজা ৩)</div>

<table class="kv-table">
<tr><th>বাক্স</th><th>জাত</th><th>ভেতরে কী</th></tr>
<tr><td class="hl">blob</td><td>ছবির কাচ</td><td>ফাইলের বিষয়বস্তু (নামহীন)</td></tr>
<tr><td class="hll">tree</td><td>ফ্রেম-তালিকা</td><td>নাম → blob/tree মিল</td></tr>
<tr><td class="hl">commit</td><td>মুহূর্তের সনদ</td><td>tree+parent+author+message</td></tr>
<tr><td class="hll">tag</td><td>ফিতার সনদ</td><td>ট্যাগার+তারিখ+বার্তা (দরজা ৮)</td></tr>
</table>

<div class="diagram">
<div class="diag-title">ভেতর-ঘরের আসবাব — The Inner Room's Furniture</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar61d14" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker>
</defs>
<rect class="node" x="15" y="65" width="110" height="44" rx="10"/><text class="lbl" x="70" y="83">HEAD খাতা</text><text class="lbl-sm" x="70" y="99">ref: refs/heads/main</text>
<rect class="node-cyan" x="165" y="65" width="110" height="44" rx="10"/><text class="lbl-cyan" x="220" y="83">refs/ র‍্যাক</text><text class="lbl-sm" x="220" y="99">main = এক লাইন হ্যাশ</text>
<rect class="node-hot" x="315" y="20" width="110" height="40" rx="9"/><text class="lbl-sm" x="370" y="38">commit সনদ</text><text class="lbl-sm" x="370" y="52">parent → tree → …</text>
<rect class="node-hot" x="315" y="105" width="110" height="40" rx="9"/><text class="lbl-sm" x="370" y="123">objects/ আলমারি</text><text class="lbl-sm" x="370" y="137">blob · tree · tag</text>
<rect class="node-leaf" x="465" y="65" width="80" height="44" rx="10"/><text class="lbl-leaf" x="505" y="83">cat-file</text><text class="lbl-sm" x="505" y="99">এক্স-রে চোখ</text>
<line x1="125" y1="87" x2="161" y2="87" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d14)"/>
<line x1="275" y1="78" x2="311" y2="45" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d14)"/>
<line x1="275" y1="95" x2="311" y2="122" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d14)"/>
<line x1="425" y1="122" x2="461" y2="95" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#ar61d14)"/>
<rect class="cell" x="15" y="152" width="530" height="18" rx="7"/><text class="lbl-sm" x="280" y="165">শাখা = টেক্সট-ফাইল · commit = সনদ · সব ঠিকানা বিষয়বস্তুর হিসাব (sha1) — জাদু নয়, গুদাম</text>
</svg>
<div class="diag-cap">HEAD → refs → commit → tree/blob — চার লাফে Git-এর পুরো সত্য।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভেতর-ঘরের সতর্কতা:</strong> .git-এর ভেতরে হাত দিয়ে কিছু বদলানো প্রায় কখনোই দরকার নেই — কমান্ড-পথেই সব সম্ভব; ভুল টাচে ইতিহাস-ক্ষতি। খালি-খালি হ্যাশ-নম্বর মুখস্থ করার দরকার নেই — জাত-কাজ বোঝাই লক্ষ্য। আর packfile (চাপা-বান্ডিল) আলমারির স্বাভাবিক ঘনত্ব-ব্যবস্থা — দেখলেই ভয় নয়, gc-র কাজ মাত্র। শেখার সেরা রাস্তা: ছোট রিপোতে cat-file দিয়ে খেলা।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The inner-room caution:</strong> almost never hand-edit anything inside .git — every need has a command; a wrong touch is history-damage. No need to memorize hash numbers — understanding kinds and roles is the goal. Packfiles are the cabinet's normal compression, not an alarm — that is gc's routine work. Best way to learn: play with cat-file in a tiny repo.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ জাদু-বিশ্বাসী</div>.git = অদৃশ্য জাদু · শাখা/HEAD রহস্য · cat-file অজানা · ভুল দেখলে ভেতরে হাত</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সোনালীর রীতি</div>চার বাক্সের জাত-কাজ বোঝা · refs/HEAD ফাইল-পড়া · cat-file-এক্স-রে · বদল কমান্ডে, হাতে নয়</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">4 জাত</div><div class="sc-label">blob · tree · commit · tag</div></div>
<div class="stat-card"><div class="sc-num">refs/heads/</div><div class="sc-label">শাখা = এক-লাইন ফাইল</div></div>
<div class="stat-card"><div class="sc-num">cat-file -p</div><div class="sc-label">যেকোনো বাক্স খোলা</div></div>
<div class="stat-card"><div class="sc-num">count-objects</div><div class="sc-label">আলমারির হিসাব</div></div>
</div>

<p class="verse">গভীরতার পাঠ: কুরআন বারবার আকাশ-জমিনের গঠন পর্যবেক্ষণের আদেশ দেয় — বিশ্বাস অন্ধ নয়, বোঝার দাবিদার; সাহাবায়ে কেরাম স্বয়ং প্রশ্ন করতেন 'কেন'। ভেতর-ঘরও তাই: যে গঠন দেখেছে, তার কাছে Git জাদু নয় — ব্যবস্থাপনা।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🗿 blob=কাচ, tree=তালিকা, commit=সনদ; refs-এ শাখা-কার্ড, HEAD-এ অবস্থান; cat-file = এক্স-রে।<br>কারণ: জাদু ভেদ করলে যন্ত্র বন্ধু হয় — আর ভয় কেটে যায়।</div></div>`,
  senior: {
    title: "ভেতর-ঘরের খাতা — The Inner-Room Ledger",
    body: `<ul class="checklist">
<li>চার object: <strong>blob/tree/commit/tag</strong> — জাত-কাজ মুখে মুখে।</li>
<li><strong>refs/heads/&lt;শাখা&gt;</strong> = এক-লাইন ফাইল; <strong>HEAD</strong> = অবস্থান-খাতা।</li>
<li>এক্স-রে: <strong>git cat-file -t/-p &lt;hash&gt;</strong>; তালিকা <strong>HEAD^{tree}</strong>।</li>
<li>আলমারি-হিসাব <strong>git count-objects -v</strong>; pack = স্বাভাবিক চাপা-বান্ডিল।</li>
<li>.git-এ <strong>হাতে বদল নয়</strong> — সব কমান্ড-পথে।</li>
</ul>`
  }
});

// ── DOOR 15 · রুস্তম আলীর নিয়মনামা-দপ্তর — Rustam Ali's Rules Office ──
doors.push({
  num: 15,
  icon: "⚙️",
  color: "#fbbf24",
  name: "রুস্তম আলীর নিয়মনামা-দপ্তর",
  subtitle: "Rustam Ali's Rules Office",
  tech: "git config · তিন-স্তর · alias · core.excludesFile · user.signingkey",
  spirit: "নিয়ম — ঘরের শৃঙ্খলা লেখা থাকে",
  secret: "Git-এর প্রতিটা আচরণ এক নিয়মনামায় লেখা — আর নিয়মনামা তিন তলায়: --system (পুরো মেশিন), --global (তোমার সব রিপো), স্থানীয় (এই রিপো); নিচের তলার লেখা উপরেরটাকে মেজে যায় (উপর জিতে নয় — এখানে কাছের তলা জেতে!); user.name থেকে alias পর্যন্ত সব এখানেই।",
  recall: {
    q: "অফিস-ল্যাপটপে কাজের ইমেইল এক, ব্যক্তিগত প্রজেক্টে আরেক — কীভাবে সেট করবে? আর git lg লিখলেই সুন্দর গ্রাফ-লগ চাই। তিন স্তরের নাম আর কে কাকে মেজে যায়?",
    qen: "Work laptop needs one email, personal projects another — how? And git lg should give a pretty graph log. Name the three config levels and which overrides which.",
    a: "ইমেইল-দুই জগৎ: গ্লোবালে ব্যক্তিগগত: git config --global user.name 'তোমার নাম' + user.email 'you@personal'; তারপর অফিস-রিপোতে স্থানীয়ভাবে মেজে দাও: cd work-repo && git config user.email 'you@office.com' — স্থানীয় (repo-র .git/config) গ্লোবালকে মেজে যায়, বাকি সব রিপো গ্লোবাল মানবে। তিন স্তর: --system (/etc/gitconfig — মেশিন-প্রশাসকের), --global (~/.gitconfig — তোমার সব রিপো), স্থানীয় (.git/config — শুধু এই রিপো); কাছের স্তর জেতে: local > global > system। alias: git config --global alias.lg 'log --oneline --graph --all' — এখন git lg এক শব্দে পুরো গ্রাফ। দেখা: git config --list --show-origin (কোন নিয়ম কোন ফাইল থেকে)।",
    aen: "Two email worlds: set personal globally: git config --global user.email 'you@personal'; then in the work repo override locally: cd work-repo && git config user.email 'you@office.com' — local (.git/config) overrides global, all other repos follow global. Three levels: --system (/etc/gitconfig, machine admin), --global (~/.gitconfig, all your repos), local (.git/config, this repo only); nearest wins: local > global > system. Alias: git config --global alias.lg 'log --oneline --graph --all' — git lg becomes one word for the whole graph. Inspect: git config --list --show-origin (which rule came from which file).",
    you: "git config --list --show-origin | head -8 && git config --global alias.lg 'log --oneline --graph --all' && git lg | head -5 && git config --list --show-origin | grep alias"
  },
  story: `<p class="scene-setting">রুস্তম আলীর নিয়মনামা-দপ্তর শহরের তিনতলা ভবন — প্রতিটা তলায় এক খাতা, আর নিয়ম একটাই: কাছের তলার লেখা লাগবে আগে। উপরের তলায় (system) মেশিন-প্রশাসকের নিয়ম — পুরো ভবনের জন্য; মাঝের তলায় (global) তোমার নিজের খাতা — তোমার সব ঘরে চলবে; নিচের তলায় (local) প্রতিটা ঘরের নিজস্ব খাতা — সেই ঘরে ঢুকলে এই লেখাই শেষ কথা। এক কারিগর এসে অভিযোগ করল: স্যার, অফিসের ঘরে আমার নাম-পরিচয় ব্যক্তিগতটা দেখাচ্ছে! রুস্তম আলী হাসলেন: ভুল ঘরের খাতায় লেখা — অফিসের ঘরের নিজস্ব খাতায় (local config) নাম-ইমেইল লেখো, ব্যস; বাকি ঘরগুলো মাঝের তলার (global) নিয়মেই চলবে। তাঁর দপ্তরের সবচেয়ে জনপ্রিয় সেবা: ডাকনাম-খাতা (alias) — লম্বা আদেশের ছোট্ট নাম বসিয়ে দেন, git lg লিখলেই পুরো সাজানো গ্রাফ আসে।</p>
<p class="scene-setting en">Rustam Ali's rules office is a three-storey building — a ledger per floor, one law: the NEAREST floor's writing applies first. Top floor (system): the machine admin's rules for the whole building; middle (global): your own ledger, valid in all your rooms; ground (local): each room's private ledger — inside that room it is the final word. A craftsman complained: sir, the office room shows my personal identity! Rustam smiled: you wrote in the wrong ledger — write name/email in the office room's own ledger (local config), done; the other rooms follow the middle floor (global). The office's most popular service: the nickname ledger (alias) — short names for long commands; type git lg and the whole tidy graph arrives.</p>

<div class="code-block"># তিন তলার খাতা:
#   system  → /etc/gitconfig        (মেশিন-প্রশাসক)
#   global  → ~/.gitconfig          (তোমার সব রিপো)
#   local   → .git/config           (শুধু এই রিপো — কাছের জেতে!)

# পরিচয় (প্রথম দিনের কাজ):
git config --global user.name  "Md Rakibul Hasan"
git config --global user.email "you@personal.dev"
# অফিস-রিপোতে অন্য পরিচয়:
cd ~/work-project
git config user.email "rakib@office.com"     # local — শুধু এই ঘরে

# ডাকনাম-খাতা (সবচেয়ে দরকারি কয়েকটা):
git config --global alias.lg  "log --oneline --graph --all"
git config --global alias.st  "status -sb"
git config --global alias.last "log -1 HEAD --stat"
git config --global alias.undo "reset --soft HEAD~1"

# সুবিধা-নিয়ম:
git config --global core.editor "code --wait"
git config --global core.excludesFile "~/.gitignore_global"
git config --global init.defaultBranch main
git config --global pull.rebase true        # (দরজা ৭-এর সেতু)
git config --global push.default current

# দেখো / যাচাই:
git config user.email              # এই ঘরে কার কথা চলছে
git config --list --show-origin    # কোন নিয়ম কোন তলা থেকে
git config --list --show-origin | grep -i alias

# মুছতে: git config --unset --global alias.undo</div>

<table class="kv-table">
<tr><th>তলা</th><th>ফাইল</th><th>কার জন্য</th></tr>
<tr><td class="hl">system</td><td>/etc/gitconfig</td><td>পুরো মেশিন (অ্যাডমিন)</td></tr>
<tr><td class="hll">global</td><td>~/.gitconfig</td><td>তোমার সব রিপো</td></tr>
<tr><td class="hl">local</td><td>.git/config</td><td>এই রিপো — শেষ কথা</td></tr>
<tr><td class="hll">দেখা</td><td>--list --show-origin</td><td>উৎস-সহিত তালিকা</td></tr>
</table>

<div class="diagram">
<div class="diag-title">তিনতলা নিয়মনামা — The Three-Floor Rules</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar61d15" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker>
</defs>
<rect class="node-hot" x="15" y="15" width="530" height="30" rx="8"/><text class="lbl-sm" x="280" y="34">system — /etc/gitconfig (মেশিন-প্রশাসক)</text>
<rect class="node" x="45" y="53" width="470" height="30" rx="8"/><text class="lbl-sm" x="280" y="72">global — ~/.gitconfig (তোমার সব রিপো: নাম·ইমেইল·alias)</text>
<rect class="node-cyan" x="75" y="91" width="410" height="30" rx="8"/><text class="lbl-cyan" x="280" y="110">local — .git/config (এই ঘরের নিজস্ব: অফিস-ইমেইল·রিমোট)</text>
<rect class="node-leaf" x="165" y="135" width="230" height="30" rx="8"/><text class="lbl-leaf" x="280" y="154">কাছের তলা জেতে: local → global → system</text>
</svg>
<div class="diag-cap">তিন খাতার নিয়ম — ঘর যত কাছের, খাতার কথা তত শেষ।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নিয়ম-দপ্তরের সতর্কতা:</strong> সবচেয়ে দামি ভুল: অফিস-রিপোতে --global দিয়ে ইমেইল বসানো — তারপর ব্যক্তিগত প্রজেক্টেও অফিস-ইমেইল বসে যাবে; --global শুধু সত্যিকার-সর্বজনীন জিনিসে। credential.helper-এর টোকেন-নিয়ম মেশিন-নির্ভর — শেয়ার্ড-মেশিনে সাবধান। আর রহস্য-নিয়ম পেলে (কিছু কাজ করছে না) --show-origin ছাড়া অনুমান নয় — কোন তলা থেকে কোন লেখা চলছে প্রথমেই দেখো।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The rules-office caution:</strong> the costliest mistake: setting your office email with --global — it then leaks into personal projects too; --global only for truly universal things. credential.helper token rules are machine-bound — careful on shared machines. And when a rule misbehaves, no guessing without --show-origin — see which floor's writing is in force first.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ এক-খাতার দপ্তর</div>সব --global (অফিস-ইমেইল সর্বত্র) · লম্বা আদেশ বারবার টাইপ · কোন নিয়ম কোথা থেকে অজানা · রহস্যে পুনরায়-ইনস্টল</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ রুস্তম আলীর রীতি</div>সর্বজনীন→global, ঘর-নির্দিষ্ট→local · alias-খাতায় ডাকনাম · --show-origin-যাচাই · undo এক-শব্দে</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">3 তলা</div><div class="sc-label">system · global · local</div></div>
<div class="stat-card"><div class="sc-num">--show-origin</div><div class="sc-label">নিয়মের জন্মস্থান</div></div>
<div class="stat-card"><div class="sc-num">alias.lg</div><div class="sc-label">এক-শব্দ গ্রাফ-লগ</div></div>
<div class="stat-card"><div class="sc-num">local user.email</div><div class="sc-label">ঘর-নির্দিষ্ট পরিচয়</div></div>
</div>

<p class="verse">নিয়মের পাঠ: ইসলামে শরিয়তের স্তর-বিন্যাস আছে — সার্বজনীন নীতি আর স্থানীয় প্রয়োগ (মাসলা-মাসায়েল); ফকিহরা বলেন নিয়ম তার জায়গা মতো লাগে। রুস্তম আলীর দপ্তরও: সার্বজনীন তলায় একবার, ঘরের খাতায় ব্যতিক্রম — এই শৃঙ্খলাতেই দ্বৈত-জীবন নিরাপদ।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">⚙️ সর্বজনীন → --global, ঘর-নির্দিষ্ট → local (কাছের জেতে); alias-এ ডাকনাম; --show-origin-এ রহস্য-সমাধান।<br>কারণ: পরিচয় ঘরে ঘরে বদলায় — নিয়মনামাও তলায় তলায়।</div></div>`,
  senior: {
    title: "নিয়মনামা-দপ্তরের খাতা — The Rules-Office Ledger",
    body: `<ul class="checklist">
<li>প্রথম দিন: <strong>--global user.name/email</strong>; অফিস-ঘরে <strong>local user.email</strong>।</li>
<li>ডাকনাম: <strong>alias.lg / st / last / undo</strong> — একবার লিখো, চিরদিন টাইপ-বাঁচো।</li>
<li>স্তর-প্রশ্নে <strong>--list --show-origin</strong> — অনুমান নয়, উৎস দেখো।</li>
<li>সুবিধা: <strong>init.defaultBranch main</strong>, <strong>pull.rebase</strong>, <strong>excludesFile</strong>।</li>
<li><strong>--global</strong> শুধু সর্বজনীনে — অফিস-ইমেইল ব্যক্তিগতে লিক হয় এখানেই।</li>
</ul>`
  }
});



