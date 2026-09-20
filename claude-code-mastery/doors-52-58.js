// ════════════════════════════════════════
// Book 59 v11 · হাতে-কলমে ল্যাব-তলা (52-58) — ছয় ল্যাব + ক্যাপস্টোন
// Every step: real command → expected shape → verify
// ════════════════════════════════════════

// ── DOOR 52 · তুষারের খাতা-ল্যাব — Tushar's Ledger Lab: CLAUDE.md Hands-On ──
doors.push({
  num: 52,
  name: "তুষারের খাতা-ল্যাব",
  subtitle: "Tushar's Ledger Lab",
  icon: "🧪",
  color: "#f59e0b",
  tech: "Hands-On Lab — CLAUDE.md Full Life-Cycle in a Real Project",
  spirit: "তাওয়াক্কুল — বেঁধে ভরসা করো",
  story: `
<p class="bn">দরজা ৪৭-এ রাহেলা খাতুন শিখিয়েছিলেন <em>কী</em> আর <em>কেন</em>। এবার তাঁর ভাতিজা তুষার — শহরের সবচেয়ে ব্যস্ত কারখানার সহকারী — তোমাকে নিয়ে যাবে <strong>কার্যশালায়</strong>। তার নিয়ম একটাই: "আমি বলবো না 'বোঝো' — আমি বলবো 'করো', আর তুমি দেখবে কী হয়।" ছয়টা কাজের টেবিল, প্রতিটার ওপর আসল ফাইল, আসল কমান্ড, আসল ফল।</p>
<p class="en">Door 47 taught <em>what</em> and <em>why</em>. Now Rahela's nephew Tushar — assistant at the town's busiest workshop — takes you to the <strong>lab bench</strong>. His one rule: "I won't say 'understand' — I'll say 'do', and you watch what happens." Six work tables, each with real files, real commands, real results.</p>

<div class="callout info"><span class="co-icon">🎯</span><div><b>ল্যাব-শর্ত</b> — <span class="en">Lab setup</span><br>যেকোনো গিট-প্রজেক্টে করা যায়; সবচেয়ে ভালো LedgerPilot-এ। প্রতিটা ধাপে <strong>কমান্ড → প্রত্যাশিত ফলের ধরন → যাচাই</strong>। ফল হুবহু নয় — <em>আকারে</em> মিলবে, সংখ্যা তোমার প্রজেক্টের।</div></div>

<h4 class="bn">কাজের টেবিল ১ · খালি ঘরে প্রথম খাতা</h4>
<pre class="code-block">$ cd ~/ojo-ledger-pilot-django     # তোমার প্রজেক্ট
$ claude                            # সেশন শুরু
&gt; /init
# ← প্রত্যাশিত ফল: ক্লড কোডবেস পড়ে CLAUDE.md খসড়া লেখে —
#   Commands/Structure/Conventions অংশসহ। আগের ফাইল থাকলে
#   ওভাররাইট নয় — উন্নতি-প্রস্তাব দেয়।
&gt; # যাচাই:
&gt; /context
# ← Memory files তালিকায় ./CLAUDE.md দেখো — লোড-প্রমাণ</pre>

<h4 class="bn">কাজের টেবিল ২ · হাতে-লেখা ফাঁদ-নিয়ম</h4>
<pre class="code-block">&gt; # খসড়ার পর নিজ-হাতে যোগ করো (সম্পাদকে বা বলে):
&gt; CLAUDE.md-তে যোগ করো:
&gt; ## Pitfalls
&gt; - Money is always DecimalField — never FloatField
&gt; - ledger/models.py imports at top — circular import if touched from utils/
&gt; - MySQL 5.7: no JSON functions — avoid .extra() JSON queries
&gt; # যাচাই:
&gt; নতুন প্রশ্ন: "টাকার ফিল্ড কোন টাইপে লিখব?"
# ← প্রত্যাখ্যানের ফলের আকার: খাতা না থাকলে ক্লড হয়তো Float বলতো;
#   খাতা থাকলে সরাসরি DecimalField — উদ্ধৃতি-সহ</pre>

<h4 class="bn">কাজের টেবিল ৩ · @import — খাতার টানা-সূত্র</h4>
<pre class="code-block">&gt; # CLAUDE.md-এ লেখো (সম্পাদকে):
See @README.md for project overview.
# Additional Instructions
- git workflow @docs/git-instructions.md
&gt; # যাচাই:
&gt; /context
# ← আরও দুটো ফাইল Memory files-এ বা প্রসারিত-তালিকায় দেখা যাবে;
#   README-র বিষয়বস্তু context-এ ঢুকে গেছে — লঞ্চেই, স্বয়ংক্রিয়ভাবে।
#   সূত্র: সর্বোচ্চ ৪-হপ গভীরতা পর্যন্ত টানা যায়; ব্যাকটিকে রাখলে
#   (@README ব্যাকটিকে) লিটারাল থাকে — ইমপোর্ট হয় না</pre>

<h4 class="bn">কাজের টেবিল ৪ · পথ-স্কোপড নিয়ম</h4>
<pre class="code-block">&gt; # ফাইল বানাও: .claude/rules/vue-style.md
&gt; ---
&gt; description: Vue component conventions
&gt; paths: ["src/**/*.vue"]
&gt; ---
&gt; - Composition API only — no Options API
&gt; - &lt;script setup&gt; always
&gt; # যাচাই:
&gt; বলো: "src/views/Dashboard.vue খুলে দেখো"
# ← Vue ফাইল ছুঁলে নিয়ম-ফাইলটা লোড হয়; Django ফাইলে নয়।
#   /context-এ rules অংশে দেখা যায় কখন কোনটা লোড হলো</pre>

<h4 class="bn">কাজের টেবিল ৫ · খাতা-ডাক্তার</h4>
<pre class="code-block">&gt; /doctor
# ← প্রত্যাশিত ফলের আকার: চেকআপ-রিপোর্ট — কোন সেটআপ-অংশ সবুজ,
#   কোথায় সমস্যা। লম্বা খাতার জন্য প্রস্তাব আসে: যা কোড দেখেই
#   বোঝা যায় (ডিরেক্টরি-লেআউট, ডিপেন্ডেন্সি) কেটে দাও — ফাঁদ/রীতি রাখো</pre>

<h4 class="bn">কাজের টেবিল ৬ · compact-ঝড়ে খাতার টিকে থাকা</h4>
<pre class="code-block">&gt; # প্রথমে খাতা-নিয়ম ভুলিয়ে একটা লম্বা কাজ করো, তারপর:
&gt; /compact
&gt; # যাচাই:
&gt; জিজ্ঞেস করো: "তোমার প্রজেক্ট-নির্দেশে টাকার নিয়ম কী?"
# ← প্রজেক্ট-রুটের খাতা ঝড় পেরিয়ে বাঁচে — ডিস্ক থেকে আবার পড়া হয়।
#   চ্যাটে-শুধু-বলা নিয়ম মরে যায় — সেটাই compact-পরীক্ষা</pre>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>তুষারের সতর্কতা:</strong> ল্যাবের প্রতিটা ফল <em>আকারে</em> মিলিয়ো, হুবহু নয় — তোমার প্রজেক্ট, তোমার সংখ্যা। আর এক টেবিল শেষ না করে পরেরটায় যেও না — প্রতিটা টেবিল আগেরটার ওপর দাঁড়ানো।<br><em>Match the SHAPE of each result, not the exact text — and finish one table before the next.</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 52</span><pre class="code-block"># ── প্রম্পট ১ · প্রথম খাতা ──
$ cd ~/ojo-ledger-pilot-django && claude
&gt; /init
&gt; /context
&gt; # Memory files-এ কী কী লোড হলো — তালিকা দাও
# ← খসড়া-খাতার জন্ম আর লোড-প্রমাণ

# ── প্রম্পট ২ · ফাঁদ-নিয়ম পরীক্ষা ──
&gt; টাকার ফিল্ড কোন টাইপে লিখব? এক লাইনে বলো
# ← খাতা-নিয়ম কাজ করছে কিনা তার সরাসরি পরীক্ষা

# ── প্রম্পট ৩ · ইমপোর্ট-সূত্র ──
&gt; CLAUDE.md-এ @docs/git-instructions.md ইমপোর্ট যোগ করো,
&gt; তারপর বলো git-workflow প্রশ্নে কী নিয়ম প্রযোজ্য
# ← টানা-ফাইল context-এ ঢুকেছে কিনা

# ── প্রম্পট ৪ · পথ-স্কোপ যাচাই ──
&gt; .claude/rules/vue-style.md বানাও paths: ["src/**/*.vue"]-সহ;
&gt; তারপর দেখাও Django ফাইল ছুঁলে এই নিয়ম লোড হয় না
# ← নিয়ম যার যার জায়গায় — টোকেন-সাশ্রয়ের প্রমাণ

# ── প্রম্পট ৫ · ঝড়-পরীক্ষা ──
&gt; /compact
&gt; প্রজেক্ট-নির্দেশে টাকার নিয়ম কী? উদ্ধৃতি দাও
# ← রুট-খাতা ঝড়ে টিকে থাকে — ডিস্ক থেকে পুনঃপাঠ</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৫২ — তালিসমান</div><div class="text">🧪 খাতা পড়ে নয়, লিখে বাঁচে।<br><small>ছয় টেবিল: /init-জন্ম → ফাঁদ-নিয়ম → @import-সূত্র → পথ-স্কোপ → /doctor-ছাঁটা → compact-টিকে। প্রতিটার পরে /context — প্রমাণ ছাড়া কোনো ধাপ শেষ নয়।</small></div></div>`,
  senior: {
    title: "ল্যাব-নোট — ডক-সত্য + অভিজ্ঞতা",
    body: `<p class="bn">ডক-সত্য: <code>/init</code> আগের খাতা মুছবে না — উন্নতি প্রস্তাব দেবে; <code>CLAUDE_CODE_NEW_INIT=1</code> দিলে ইন্টারঅ্যাক্টিভ বহু-পর্যায় প্রবাহ (কোন কোন artifact বানাবে জিজ্ঞেস করে)। @import: আপেক্ষিক-পথ ফাইলের নিজ-অবস্থান থেকে, ৪-হপ গভীর, কোড-স্প্যান স্কিপ; এক্সটার্নাল ইমপোর্টে প্রথমবার অনুমোদন-ডায়ালগ। পথ-স্কোপড নিয়ম মিল-ফাইল পড়ার মুহূর্তে লোড। /compact-এ রুট-খাতা ডিস্ক থেকে পুনঃপাঠিত।</p>
<p class="en">Doc-truth recap: /init never overwrites — it proposes; CLAUDE_CODE_NEW_INIT=1 enables the interactive multi-phase flow. @import resolves relative to the file, four hops deep, skips code spans, and asks approval for external imports first time. Path-scoped rules load on file-touch. The root ledger survives /compact by disk re-read.</p>
<p class="bn">কারিগর-টিপ: খাতার সেরা পরীক্ষা <em>নতুন সেশনে</em> চালানো — একই সেশনে ক্লড চ্যাট-স্মৃতি দেখে পাস করে ফেলতে পারে। সন্দেহ হলে সেশন বন্ধ করে আবার খোলো, তারপর প্রশ্ন।</p>`
  },
  recall: {
    q: "compact-এর পরে টাকার-নিয়ম ক্লড ভুলে গেলে তুমি কী বুঝবে?",
    qen: "After /compact Claude forgets the money rule. What does that tell you?",
    a: "নিয়মটা খাতায় লেখা ছিল না — শুধু চ্যাটে বলা হয়েছিল। রুট-খাতার নিয়ম ঝড়ে টিকে যায়; চ্যাট-নিয়ম মরে। এখনই খাতায় তোলো।",
    aen: "The rule lived only in chat. Root-ledger rules survive compaction; chat rules die. Write it into the ledger now."
  }
});


// ── DOOR 53 · সাদিয়ার তালিম-ল্যাব ১ — Sadia's Training Lab I: Your First Skill ──
doors.push({
  num: 53,
  name: "সাদিয়ার তালিম-ল্যাব ১",
  subtitle: "Sadía's Training Lab I",
  icon: "🧪",
  color: "#10b981",
  tech: "Hands-On Lab — Create, Inject, Invoke, Live-Edit a Skill",
  spirit: "নিয়ত — শেখার ইচ্ছা কাজে নামাও",
  story: `
<p class="bn">মরিয়মের কনিষ্ঠা সাদিয়া আজ তালিম-টেবিল সাজিয়ে রেখেছে। তার কথা: "দরজা ৪৮-এ তুমে তালিমনামার নকশা দেখেছিলে — আজ নিজের হাতে প্রথমটা লেখবে, চালাবে, ভাঙবে, ঠিক করবে।" চারটা কাজের টেবিল; শেষে তোমার নিজের <code>/release-check</code> কমান্ড স্থায়ীভাবে তৈরি।</p>
<p class="en">Maryam's junior Sadia has the training table laid out: "Door 48 showed you the design — today you write your first scroll, run it, break it, fix it." Four benches; at the end your own <code>/release-check</code> command exists for real.</p>

<h4 class="bn">কাজের টেবিল ১ · তালিমনামার জন্ম</h4>
<pre class="code-block">$ mkdir -p .claude/skills/release-check
$ cat > .claude/skills/release-check/SKILL.md <<'EOF'
---
description: Pre-release checklist for LedgerPilot. Use when the user
  says "release", "ship it", "run the checklist", or asks what to
  verify before tagging.
---

## Current state

!\`git status --short\`
!\`git log --oneline -5\`

## Instructions

Run through this checklist and report pass/fail for each:
1. All tests green: \`pytest -q\` exits 0
2. No uncommitted changes in tracked files
3. VERSION file bumped since last tag
4. CHANGELOG has an entry for the new version
5. \`python manage.py check --deploy\` raises no new warnings

Output a table: check | status | evidence (one line each).
EOF
&gt; # যাচাই: claude সেশনে (নতুন খুললে ভালো)
&gt; /release-check
# ← প্রত্যাশিত ফলের আকার: ৫-সারির টেবিল — check/status/evidence;
#   উপরে git status আর লগ স্বয়ংক্রিয় ঢুকে গেছে (দেখো স্ক্রলে)</pre>

<h4 class="bn">কাজের টেবিল ২ · জাদু-লাইন ভাঙো — তারপর বোঝো</h4>
<pre class="code-block">&gt; # SKILL.md থেকে !\`git status --short\` লাইনটা মুছে দাও, সেভ করো
&gt; /release-check
# ← পার্থক্য দেখো: এবার চেকলিস্ট-কাঠামো এলো কিন্তু আসল git-অবস্থা
#   নয় — ক্লডকে আলাদাভাবে চালাতে হবে বা অনুমান করবে।
&gt; # এখন ফিরিয়ে আনো (Ctrl+B/Cmd+Z বা আবার লেখো), সেভ —
&gt; /release-check
# ← ইনজেকশন ফিরে এলো। শিক্ষা: !\`...\` লাইন = পড়ার আগেই চালানো;
#   মুছলে স্কিল অন্ধ হয়ে যায়</pre>

<h4 class="bn">কাজের টেবিল ৩ · দুই দরজায় ডাক</h4>
<pre class="code-block">&gt; # পথ ১ — সরাসরি আদেশ:
&gt; /release-check
&gt; # পথ ২ — বর্ণনা-মিলে স্বয়ংক্রিয় ডাক:
&gt; আমি রিলিজ দেবো — চেক করে দাও সব ঠিক আছে?
# ← দুই ক্ষেত্রেই একই স্কিল চলে; পথ ২ প্রমাণ করে description-ই
#   ভাগ্যলেখা: "release/ship/checklist" শব্দগুলো মিলেছে</pre>

<h4 class="bn">কাজের টেবিল ৪ · লাইভ-এডিট — রিস্টার্ট ছাড়াই</h4>
<pre class="code-block">&gt; # স্কিলটা সম্পাদকে খোলো রাখো; চেক #৬ যোগ করো:
6. Frontend build succeeds: \`npm run build\` exits 0
&gt; # সেভ করেই (সেশন বন্ধ না করে) আবার:
&gt; /release-check
# ← নতুন চেক এসেছে — SKILL.md-র লাইভ পরিবর্তন-সনাক্তকরণ;
#   নতুন top-level ফোল্ডার বানালে রিস্টার্ট লাগবে, ফাইল-এডিট নয়</pre>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সাদিয়ার সতর্কতা:</strong> স্কিল-বডির <code>!\`cmd\`</code> লাইন <em>তোমার মেশিনে</em> চলে — অবিশ্বস্ত রেপোর স্কিল নকল করে চালালে বিপদ; চালানোর আগে লাইনগুলো পড়ে নাও। আর বর্ণনায় "কখন" না থাকলে ক্লড কখনো স্বয়ংক্রিয় ডাকবে না — শুধু "কী" লেখা অপর্যাপ্ত।<br><em>!\`cmd\` lines run on YOUR machine — read before running a copied skill; a description without a "when" never auto-triggers.</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 53</span><pre class="code-block"># ── প্রম্পট ১ · জন্ম-নথি ──
&gt; আমার রিলিজ-চেকলিস্ট স্কিল বানাও — বর্ণনায় কখন-শর্তসহ,
&gt; বডিতে ৫-চেক আর পাস-ফেল টেবিল-ছাঁচ
# ← ফোল্ডার-নাম = কমান্ড; বর্ণনা = ডাক-শর্ত

# ── প্রম্পট ২ · ইনজেকশন-পরীক্ষা ──
&gt; SKILL.md থেকে !\`git status --short\` মুছে আবার চালাও —
&gt; পার্থক্য কী দেখা গেল?
# ← জাদু-লাইন ভাঙা = স্কিল অন্ধ — নিজ-চোখে প্রমাণ

# ── প্রম্পট ৩ · স্বয়ংক্রিয়-ডাক পরীক্ষা ──
&gt; আমি রিলিজ দেবো, চেক করে দাও
&gt; # /release-check না-লিখেও চললো কিনা দেখো
# ← বর্ণনার শব্দ-মিল = স্বয়ংক্রিয় ট্রিগার

# ── প্রম্পট ৪ · লাইভ-এডিট ──
&gt; স্কিলে ৬ষ্ঠ চেক যোগ করো: npm run build পাস
&gt; # সেভ-ই যথেষ্ট, রিস্টার্ট নয় — আবার চালাও
# ← ওয়াচার: SKILL.md-র বদল সেশনেই ধরা পড়ে

# ── প্রম্পট ৫ · অনুমতি-বাঁধন ──
&gt; এই স্কিলে disable-model-invocation: true বসাও —
&gt; এখন শুধু আমি /release-check লিখলে চলবে
# ← ট্রিগার-মালিকানা তোমার হাতে</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৫৩ — তালিসমান</div><div class="text">🧪 স্কিল লিখে, ভেঙে, ঠিক করে শেখো।<br><small>!\`cmd\`-ইনজেকশন মুছে দেখো অন্ধত্ব; বর্ণনা-মিলে দেখো স্বয়ংক্রিয় ডাক; সেভ-করে দেখো লাইভ-এডিট। চার টেবিলের শেষে /release-check তোমার প্রজেক্টের স্থায়ী নাগরিক।</small></div></div>`,
  senior: {
    title: "ল্যাব-নোট — ডক-সত্য + অভিজ্ঞতা",
    body: `<p class="bn">ডক-সত্য: স্কিল-ডিরেক্টরি ওয়াচ করা হয় (bare-mode বাদে) — SKILL.md যোগ/এডিট/ডিলিট সেশনেই ধরা পড়ে, রিস্টার্ট ছাড়াই; শুধু নতুন top-level skills-ফোল্ডার বানালে রিস্টার্ট লাগে। প্লাগইন-ফোল্ডার হলে hooks/.mcp.json/agents-এর বদলে <code>/reload-plugins</code> দরকার। মনোরেপোতে শুরু-ডিরেক্টরি থেকে রুট পর্যন্ত সব .claude/skills/ লোড হয়; নেস্টেড (নিচু) স্কিল প্রথম ফাইল-স্পর্শে লোড হয় — তাড়াতে <code>/add-dir</code>।</p>
<p class="en">Doc-truth: skill directories are watched — SKILL.md changes apply mid-session without restart; only a brand-new top-level skills folder needs one. Plugin-bundled hooks/MCP/agents need /reload-plugins. Monorepo: skills load from cwd up to repo root; nested ones load on first file-touch (/add-dir to hurry).</p>
<p class="bn">কারিগর-টিপ: স্কিল লেখার পর প্রথম পরীক্ষা সবসময় <em>অনুপস্থিত-ব্যবহারকারী-পরীক্ষা</em> — নতুন সেশনে, স্কিলের নাম না-বলে শুধু প্রেক্ষাপট-বাক্য বলে ("আমি রিলিজ দেবো")। ডাকা পড়লে বর্ণনা পাশ; না-পড়লে বর্ণনায় "কখন" নেই।</p>`
  },
  recall: {
    q: "স্কিল তোমার নাম-ধরে-ডাকা ছাড়া কখনো স্বয়ংক্রিয়ভাবে চলবে না। কোন অংশ দোষী?",
    qen: "A skill never auto-triggers. Which part is guilty?",
    a: "description — তাতে কী আছে কিন্তু কখন-এর শর্ত নেই। ক্লড বর্ণনা পড়ে সিদ্ধান্ত নেয়; ব্যবহার-মুহূর্তের ইঙ্গিত (release/ship/checklist) যোগ করো।",
    aen: "The description: it says what but not when. Add trigger phrases."
  }
});


// ── DOOR 54 · সাদিয়ার তালিম-ল্যাব ২ — Sadia's Training Lab II: The Skill Arsenal ──
doors.push({
  num: 54,
  name: "সাদিয়ার তালিম-ল্যাব ২",
  subtitle: "Sadia's Training Lab II",
  icon: "🧰",
  color: "#10b981",
  tech: "Hands-On Lab — Supporting Files, $ARGUMENTS, Subagent-Skills, Name Clashes",
  spirit: "ইত্কান — কাজে নিখুঁতি",
  story: `
<p class="bn">সাদিয়ার দ্বিতীয় টেবিল — এবার তালিমনামার <strong>অস্ত্রাগার</strong>। প্রথম ল্যাবে তুমি এক ফাইলের স্কিল লিখেছিলে; এখন দেখবে স্কিল ফোল্ডার আসলে একটা ছোট কারখানা — স্ক্রিপ্ট, টেমপ্লেট, রেফারেন্স-নোট সব নিজের জায়গায়, শুধু দরকারের মুহূর্তে খোলে। শেষে তিনটা দেয়াল-টেস্ট: যুক্তি-গ্রহণ, সাব-এজেন্টে-চালানো, একই-নামের-দুই-স্কিল।</p>
<p class="en">Sadia's second bench — the skill <strong>arsenal</strong>. Lab I was one file; now see the skill folder as a small factory: scripts, templates, reference notes in their places, opened only when needed. Finish with three wall-tests: taking arguments, running in a subagent, and two skills sharing a name.</p>

<h4 class="bn">কাজের টেবিল ১ · তিন-খানার অস্ত্রাগার</h4>
<pre class="code-block">.claude/skills/make-view/
├── SKILL.md            ← নির্দেশনা (সবসময় পড়া হয় ডাক পড়লে)
├── templates/
│   └── view.vue.tpl    ← ছাঁচ — বডি বললেই পড়ে
├── scripts/
│   └── validate.sh     ← যাচাই-স্ক্রিপ্ট — বডি বললেই চলে
└── references/
    └── conventions.md  ← দীর্ঘ রেফারেন্স — প্রয়োজনে পড়ে

# SKILL.md বডির ভেতরে এভাবে ডাকো:
Read templates/view.vue.tpl and use it as the base.
Run scripts/validate.sh after writing.
For naming rules see references/conventions.md (read only if unsure).</pre>
<p class="bn">নিয়ম: ছাঁচ আর স্ক্রিপ্ট <em>নিশ্চিত</em>-পাঠ; রেফারেন্স <em>শর্তসাপেক্ষ</em>-পাঠ ("if unsure")। বড় জ্ঞান রেফারেন্সে রাখো — প্রতিবার নয়, দরকারে ঢুকবে।</p>
<p class="en">Rule: templates and scripts are always-read; references are conditional. Keep big knowledge in references — it enters only when needed.</p>

<h4 class="bn">কাজের টেবিল ২ · $ARGUMENTS — আদেশের সাথে মাল পাঠানো</h4>
<pre class="code-block">&gt; /make-view Dashboard
# ← SKILL.md বডিতে লেখো: "Create a view named $ARGUMENTS"
&gt; # আর জটিল বাক্যও যায়:
&gt; /make-view Settings with dark-mode toggle
# ← $ARGUMENTS = "Settings with dark-mode toggle" — পুরো লেজটাই
&gt; # যাচাই: ফাইলটা তৈরি হলো? নামে যা দিলে তাই এলো?</pre>

<h4 class="bn">কাজের টেবিল ৩ · সাব-এজেন্টে-চালানো</h4>
<pre class="code-block"># SKILL.md frontmatter-এ:
---
description: Deep codebase audit before big refactors
run_in_subagent: true        # নিজস্ব জানালায় চলবে
model: sonnet                # ঐচ্ছিক — এই মডেলে
---
&gt; /deep-audit
# ← মূল টেবিল পরিষ্কার থাকে — খোঁজার আবর্জনা সাব-এজেন্টের
#   জানালায়; ফেরে শুধু রিপোর্ট। /tasks-এ চলতে-দেখো</pre>

<h4 class="bn">কাজের টেবিল ৪ · একই নামের দুই তালিমনামা</h4>
<pre class="code-block"># ~/.claude/skills/deploy/SKILL.md        (ব্যক্তিগত)
# .claude/skills/deploy/SKILL.md          (প্রজেক্টে)
&gt; /deploy
# ← ডক-সত্য: ব্যক্তিগত জেতে — enterprise &gt; personal &gt; project
&gt; # প্রজেক্টেরটা চাইলে? নাম বদলাও বা প্রজেক্টেরটা মুছে
&gt; # ব্যক্তিগতটায় ইমপোর্ট করো। প্লাগইন-স্কিল নেমস্পেসড —
&gt; # দুটোই থাকে: /deploy আর /plugin:deploy</pre>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সাদিয়ার সতর্কতা:</strong> অস্ত্রাগার-স্কিলের স্ক্রিপ্ট <code>chmod +x</code> ভুলো না — না-হলে "permission denied"। আর $ARGUMENTS ফাঁকা থাকলে স্কিল অর্ধ-জন্ম নিয়ে থামবে; বডিতে প্রথম লাইনেই লেখো: "If $ARGUMENTS is empty, ask which view to create."<br><em>chmod +x your scripts; guard against empty $ARGUMENTS in the first line.</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 54</span><pre class="code-block"># ── প্রম্পট ১ · অস্ত্রাগার-জন্ম ──
&gt; make-view স্কিলটা চার-খানার বানাও — template+script+
&gt; reference-সহ; বডিতে কোনটা কখন পড়বে তা লেখো
# ← স্কিল = ছোট কারখানা, সব-পাঠ নয়

# ── প্রম্পট ২ · মাল-পাঠানো ──
&gt; /make-view Reports
&gt; # $ARGUMENTS ঠিক পৌঁছালো? ফাইল-নামে প্রমাণ
# ← কমান্ডের লেজ = স্কিলের ইনপুট

# ── প্রম্পট ৩ · জানালা-বিচ্ছিন্নকরণ ──
&gt; deep-audit স্কিলে run_in_subagent: true বসাও —
&gt; চালিয়ে /tasks-এ দেখো সে নিজের জানালায়
# ← মূল-টেবিল-রক্ষা: আবর্জনা ওখনে, রিপোর্ট এখানে

# ── প্রম্পট ৪ · নাম-দ্বন্দ্ব সমাধান ──
&gt; আমার personal deploy আর project deploy দুটোই আছে —
&gt; কোনটা চলবে আর প্রজেক্টেরটা কীভাবে পাব?
# ← personal জেতে; project-এর দরকার হলে নাম-বদল

# ── প্রম্পট ৫ · ফাঁকা-লেজ পাহারা ──
&gt; স্কিলের প্রথম লাইনে ফাঁকা-ARGUMENTS-রক্ষা বসাও:
&gt; "If $ARGUMENTS is empty, ask which view to create."
# ← অর্ধ-জন্মা স্কিল-চালনা রোধ</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৫৪ — তালিসমান</div><div class="text">🧰 স্কিল ফোল্ডার = ছোট কারখানা।<br><small>templates+scripts নিশ্চিত-পাঠ, references শর্তসাপেক্ষ; $ARGUMENTS লেজ-বাহক; run_in_subagent জানালা-বিচ্ছিন্নকরণ; নাম-দ্বন্দ্বে personal জেতে, plugin নেমস্পেসড।</small></div></div>`,
  senior: {
    title: "ল্যাব-নোট — ডক-সত্য + অভিজ্ঞতা",
    body: `<p class="bn">ডক-সত্য: একই নামের স্কিলে enterprise &gt; personal &gt; project ক্রম; স্কিল বনাম .claude/commands/ ফাইল সংঘর্ষে স্কিল জেতে; প্লাগইন-স্কিল দুটোই-থাকে নেমস্পেসসহ; claude.ai-সিঙ্কড স্কিল /anthropic-skills:নাম-এ চলে যখন লোকাল নাম দখলে আছে। স্কিল সাব-এজেন্টে চললে model-ফিল্ড + effort-ফিল্ড কাজ করে; /tasks-এ মডেল-নাম দেখা যায়।</p>
<p class="en">Doc-truth: name clashes resolve enterprise &gt; personal &gt; project; skills beat .claude/commands files; plugin skills coexist namespaced; synced skills run under /anthropic-skills: when the short name is taken. Subagent-skills honor model/effort fields, visible in /tasks.</p>
<p class="bn">কারিগর-টিপ: অস্ত্রাগার-স্কিলের আসল লাভ টিম-স্কেলে ফুটে — রেপোতে কমিট করা টেমপ্লেট মানে প্রতিটা নতুন ভিউ একই ছাঁচে জন্মায়। একা কাজ করলেও ভবিষ্যতের-তুমি আজকের-তোমার সেরা সহকারী।</p>`
  },
  recall: {
    q: "deep-audit স্কিলের বিশাল খোঁজা তোমার মূল টেবিল ভরিয়ে দিচ্ছে। কোন frontmatter-ফিল্ড ব্যবহার করবে?",
    qen: "A deep-audit skill floods your main table. Which frontmatter field?",
    a: "run_in_subagent: true — স্কিলটা নিজস্ব জানালায় চলবে, ফেরাবে শুধু রিপোর্ট; মূল context পরিষ্কার থাকবে।",
    aen: "run_in_subagent: true — it runs in its own window and returns only the report."
  }
});


// ── DOOR 55 · ফারুকের উস্তাদ-ল্যাব ১ — Faruk's Foreman Lab I: Build Your First Subagent ──
doors.push({
  num: 55,
  name: "ফারুকের উস্তাদ-ল্যাব ১",
  subtitle: "Faruk's Foreman Lab I",
  icon: "🧪",
  color: "#06b6d4",
  tech: "Hands-On Lab — Write, Register, Delegate, and Read a Subagent's Report",
  spirit: "ওমান — প্রতিদানে ভালোবাসা",
  story: `
<p class="bn">ইদ্রিস মাস্টারের জ্যেষ্ঠ সহকারী ফারুক আজ উস্তাদ-নিয়োগের টেবিল সাজিয়েছে। তার নিয়ম: "একটা কাজ দাও, একটা রিপোর্ট নাও — মাঝের হট্টগোল তোমার নয়।" তিনটা টেবিল: প্রথমে তুমি একজন উস্তাদ-ফাইল লিখবে, তারপর নিয়োগ-পরখ, শেষে রিপোর্ট-ছাঁচ শাণাবে।</p>
<p class="en">Idris Master's senior assistant Faruk sets the hiring bench: "Give one job, take one report — the mess in between isn't yours." Three benches: write a foreman file, test the delegation, sharpen the report shape.</p>

<h4 class="bn">কাজের টেবিল ১ · উস্তাদ-ফাইল লেখা</h4>
<pre class="code-block">$ mkdir -p .claude/agents
$ cat > .claude/agents/test-smith.md <<'EOF'
---
name: test-smith
description: Writes and runs pytest suites for Django apps. Use when
  adding tests, fixing a failing suite, or asked to raise coverage.
tools: Read, Write, Edit, Bash
model: sonnet
---

You are a pytest specialist for Django + DRF.

## Method
1. Read the target module and its existing tests first.
2. Write tests: happy path, edge cases, permission checks.
3. Run: pytest &lt;file&gt; -q — iterate until green.

## Report format (one page max)
- Files created/changed (paths only)
- Test count: N passed, M failed
- Coverage delta if measurable
- One risk you noticed while testing
EOF
&gt; # যাচাই:
&gt; /context
# ← agents তালিকায় test-smith দেখো — নিবন্ধন-প্রমাণ</pre>

<h4 class="bn">কাজের টেবিল ২ · নিয়োগ-পরখ</h4>
<pre class="code-block">&gt; জিজ্ঞেস-মুখে: "ledger/tests কভারেজ বাড়াও"
&gt; # বা সরাসরি: "test-smith-কে দাও ledger/views.py-এর টেস্ট লিখতে"
&gt; # চলার সময় দেখো:
&gt; /tasks
# ← প্রত্যাশিত ফলের আকার: চলমান সাব-এজেন্টের সারি — নাম,
#   মডেল (sonnet), অবস্থা। মূল টেবিলে খোঁজার বিশৃঙ্খলা নেই</pre>

<h4 class="bn">কাজের টেবিল ৩ · রিপোর্ট-ছাঁচ শাণানো</h4>
<pre class="code-block">&gt; # test-smith-এর ফেরত রিপোর্ট দেখো। যদি:
&gt; # - ৩ পাতার গল্প আসে → বডির Report format-কে আরো কঠোর করো
&gt; # - ফাইল-পাথ না থাকে → "paths only" জোরদার করো
&gt; # - ঝুঁকি-লাইন না আসে → শেষ-লাইনে "always include one risk" যোগ
&gt; # পরীক্ষার মানদণ্ড: রিপোর্ট পড়ে কি তুমি সিদ্ধান্ত নিতে পারো
&gt; # পুনঃ-ব্যাখ্যা ছাড়া? পারলে ছাঁচ পাকা</pre>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফারুকের সতর্কতা:</strong> উস্তাদ-ফাইলের <code>tools</code> তালিকায় ভুল বানান থাকলে বা শূন্য টুল মিললে ক্লড কোড নিয়োগই প্রত্যাখ্যান করবে — "would be spawned with zero tools" ত্রুটি-সহ। টুলের নাম হুবহু (Read, Write, Bash...) লেখো। আর বর্ণনা মোট ১৫k টোকেন সীমা মাথায় রেখো — উস্তাদ বাড়লে বর্ণনা ছাঁটো।<br><em>A misspelled tool name rejects the spawn; exact names only, and mind the 15k description budget.</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 55</span><pre class="code-block"># ── প্রম্পট ১ · জন্ম-নথি ──
&gt; .claude/agents/test-smith.md লিখে দাও — pytest-বিশেষজ্ঞ,
&gt; read+write+bash টুল, sonnet মডেল, এক-পাতার রিপোর্ট-ছাঁচ
# ← চার-সিদ্ধান্ত: নাম/বর্ণনা/টুল/পদ্ধতি

# ── প্রম্পট ২ · নিবন্ধন-যাচাই ──
&gt; /context
&gt; # agents-তালিকায় test-smith উঠেছে?
# ← ফাইল পড়া মানেই নিবন্ধন নয় — তালিকাই প্রমাণ

# ── প্রম্পট ৩ · নিয়োগ ──
&gt; test-smith-কে দাও ledger/views.py-এর টেস্ট লিখতে
&gt; /tasks
&gt; # কোন মডেলে চলছে, কতক্ষণ?
# ← নিজ-চোখে জানালা-বিভাজন দেখা

# ── প্রম্পট ৪ · ছাঁচ-শাণানো ──
&gt; রিপোর্ট তিন-পাতা এলো — Report format আরো কঠোর করো:
&gt; শুধু পাথ, সংখ্যা, এক-ঝুঁকি
# ← যা ফেরত চাও তা-ই ছাঁচে লেখো

# ── প্রম্পট ৫ · দ্বিতীয় উস্তাদ ──
&gt; এবার api-auditor.md লেখো — read-only (Read, Grep, Glob),
&gt; নিরাপত্তা-ঝুঁকি খোঁজে, সার্ভিটিভি-severity-সহ
# ← দুই উস্তাদ = দলের শুরু; বর্ণনা-বাজেট মনে রেখো</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৫৫ — তালিসমান</div><div class="text">🧪 এক কাজ, এক রিপোর্ট।<br><small>উস্তাদ-ফাইল = নাম+বর্ণনা+টুল+পদ্ধতি+ছাঁচ। নিবন্ধন-প্রমাণ /context, চলন-প্রমাণ /tasks, পাকা-প্রমাণ পুনঃব্যাখ্যা-ছাড়া-সিদ্ধান্ত।</small></div></div>`,
  senior: {
    title: "ল্যাব-নোট — ডক-সত্য + অভিজ্ঞতা",
    body: `<p class="bn">ডক-সত্য: সাব-এজেন্ট নিজের context + সিস্টেম-প্রম্পট + টুল-সেট + অনুমতিতে চলে; টুল-তালিকা খালি মিললে spawn-ই হয় না (Agent would be spawned with zero tools); <code>disallowedTools</code> আগে প্রয়োগ হয় তারপর <code>tools</code>; mcp__server বা mcp__server__* প্যাটার্নে পুরো সার্ভারের টুল দেওয়া/নেওয়া যায়; সব উস্তাদের বর্ণনা মিলে ১৫,০০০ টোকেন সীমা — ছাড়ালে স্টার্টআপে সতর্কতা।</p>
<p class="en">Doc-truth: subagents run with own context/system-prompt/tools/permissions; zero resolving tools rejects the spawn; disallowedTools applies before tools; mcp__server patterns grant/remove whole servers; combined descriptions cap at 15k tokens with a startup warning beyond.</p>
<p class="bn">কারিগর-টিপ: প্রথম উস্তাদ সবসময় তোমার সবচেয়ে বড় ব্যথা-কাজটা বানাও — যেটা প্রতি সপ্তাহে করতে হয় আর মূল টেবিল নোংরা করে। test-smith এক উদাহরণ মাত্র; তোমার ব্যথা হয়তো migration-watcher বা release-runner।</p>`
  },
  recall: {
    q: "test-smith-কে নিয়োগ দিলে 'zero tools' ত্রুটি। প্রথমে কী দেখবে?",
    qen: "Delegating to test-smith gives a zero-tools error. What do you check first?",
    a: "tools তালিকার বানান — Read/Write/Edit/Bash হুবহু লেখা আছে কিনা। শূন্য টুল মিললে নিয়োগই হয় না; ত্রুটি-বার্তা কোন এন্ট্রি মিলল না তা-ও বলে।",
    aen: "The tools list spelling — zero resolving tools rejects the spawn; the error names the unresolved entries."
  }
});


// ── DOOR 56 · ফারুকের উস্তাদ-ল্যাব ২ — Faruk's Foreman Lab II: Routing, Contracts, Guards ──
doors.push({
  num: 56,
  name: "ফারুকের উস্তাদ-ল্যাব ২",
  subtitle: "Faruk's Foreman Lab II",
  icon: "🔧",
  color: "#06b6d4",
  tech: "Hands-On Lab — Model Routing, Tool Contracts, Hook Backstops",
  spirit: "মুহাসাবা — হিসাবের খাতা",
  story: `
<p class="bn">ফারুকের দ্বিতীয় টেবিল — উস্তাদদের <strong>বেতন-নিয়ম, চুক্তি-কাগজ, পাহারা-বাহিনী</strong>। কারখানা বড় হলে তিনটাই লাগে: কে কোন মডেলে চলবে (দাম), কার হাতে কোন টুল (শক্তি), আর কড়া নিয়ম ভাঙলে কে থামাবে (নিরাপত্তা)।</p>
<p class="en">Faruk's second bench — the foremen's <strong>pay rules, contracts, and guards</strong>. A growing workshop needs all three: which model each runs on (cost), which tools each holds (power), and who stops rule-breakers (safety).</p>

<h4 class="bn">কাজের টেবিল ১ · মডেল-রাউটিং — দামের নিয়ন্ত্রণ</h4>
<pre class="code-block"># settings.json-এর env-ব্লকে (প্রজেক্ট বা ~/.claude/settings.json):
{
  "env": {
    "CLAUDE_CODE_SUBAGENT_MODEL": "haiku",
    "CLAUDE_CODE_SUBAGENT_MODEL_FORCE": "1"
  }
}
&gt; # যাচাই — একটা উস্তাদ চালাতে বলো, তারপর:
&gt; /tasks
# ← প্রত্যাশিত ফলের আকার: চলমান সারিতে উস্তাদের পাশে haiku।
#   নিয়ম: FORCE=1 হলে সব উস্তাদ ওই মডেলে — ফাইলের model-ফিল্ড
#   উপেক্ষিত। FORCE ছাড়া SUBAGENT_MODEL শুধু ডিফল্ট —
#   ফাইলের model জেতে।</pre>

<h4 class="bn">কাজের টেবিল ২ · টুল-চুক্তি — তিন ধরনের বাঁধন</h4>
<pre class="code-block"># ১) অনুমোদন-তালিকা (সবচেয়ে কঠোর):
---
name: safe-researcher
tools: Read, Grep, Glob, Bash
---
# ২) নিষেধ-তালিকা (উত্তরাধিকার থেকে কেটে):
---
name: no-writes
disallowedTools: Write, Edit
---
# ৩) MCP-সার্ভার-স্তরের প্যাটার্ন:
---
name: local-only
disallowedTools: mcp__github      # পুরো github-সার্ভার বাদ
---
&gt; # যাচাই: no-writes-কে বলো "এই ফাইলটা এডিট করো" —
&gt; # সে লিখতে পারবে না; পাল্টা বলবে বা থামবে
# ← নিয়ম: disallowedTools আগে প্রয়োগ, তারপর tools মেলানো হয়;
#   দুই তালিকায় এক টুল থাকলে সে বাদ</pre>

<h4 class="bn">কাজের টেবিল ৩ · হুক-পাহারা — কড়া সীমা</h4>
<pre class="code-block"># .claude/settings.json-এ hooks-ব্লক:
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{ "type": "command",
        "command": "./scripts/block-sql-writes.sh" }]
    }]
  }
}
# scripts/block-sql-writes.sh:
#!/bin/bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')
if echo "$COMMAND" | grep -iE '\b(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|TRUNCATE)\b' > /dev/null; then
  echo "Blocked: Write operations not allowed. Use SELECT queries only." >&2
  exit 2
fi
exit 0
&gt; # মনে রাখো: chmod +x scripts/block-sql-writes.sh
&gt; # যাচাই: উস্তাদকে বলো "pytest চালাও" (যাবে), আর
&gt; # "DATABASE-এ UPDATE চালাও" (ব্লক হবে — বার্তা ফিরবে)</pre>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফারুকের সতর্কতা:</strong> exit 2 ব্লক-ই ব্লক — বার্তা stderr-এ গেলে সাব-এজেন্ট সেটা পড়ে পথ বদলায়; exit 0 মানে ছেড়ে দাও; অন্য কোড নীরব ব্যর্থতা। আর <code>disallowedTools</code>-এ <code>Bash(git push *)</code> লিখলে <em>পুরো Bash</em> যায় — নির্দিষ্ট কমান্ড আটকাতে চাইলে হুক বা permissions.deny-র কাজ।<br><em>Exit 2 blocks with the message; a Bash(...) pattern in disallowedTools removes the whole tool, not just that command.</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 56</span><pre class="code-block"># ── প্রম্পট ১ · দাম-নিয়ন্ত্রণ ──
&gt; settings.json-এ env-ব্লক লিখে দাও: সব সাব-এজেন্ট haiku-তে,
&gt; FORCE=1 সহ — তারপর /tasks-এ প্রমাণ দেখাও
# ← SUBAGENT_MODEL + FORCE = বেতন-নিয়ম এক কলমে

# ── প্রম্পট ২ · চুক্তি-পরখ ──
&gt; no-writes উস্তাদকে একটা ফাইল এডিট করতে বলো — কী হয়?
# ← চুক্তিহীন শক্তি নেই: সে লিখতেই পারবে না

# ── প্রম্পট ৩ · MCP-স্তরের বাঁধন ──
&gt; এক উস্তাদ বানাও যে পায় সব টুল কিন্তু github-MCP নয়
# ← disallowedTools: mcp__github — সার্ভার-স্তরের ফালি

# ── প্রম্পট ৪ · পাহারা-স্ক্রিপ্ট ──
&gt; block-sql-writes.sh লিখে দাও — jq-সহ, INSERT/UPDATE/DELETE/
&gt; DROP গেলে exit 2, বার্তা stderr-এ
# ← নরম-নিয়ম (সিস্টেম-প্রম্পট) + কড়া-পাহারা (হুক)

# ── প্রম্পট ৫ · ফাঁক-পরীক্ষা ──
&gt; পাহারা কি আসলেই কাজ করছে? pytest যাও (ছাড়বে), SQL-রাইট
&gt; যাও (আটকাবে) — দুটোই দেখাও
# ← পাহারার প্রমাণ তার ব্যতিক্রমে: ঠিক-কাজ চলবে, ভুল আটকাবে</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৫৬ — তালিসমান</div><div class="text">🔧 মডেল-রাউটিং দাম ঠিক করে, টুল-চুক্তি শক্তি, হুক সীমা।<br><small>SUBAGENT_MODEL(+FORCE) = বেতন-নিয়ম; tools/disallowedTools/mcp__-প্যাটার্ন = নিয়োগ-চুক্তি; PreToolUse exit 2 = কড়া-পাহারা। তিনটা মিলে উস্তাদ-দল সস্তা, বাঁধা, নিরাপদ।</small></div></div>`,
  senior: {
    title: "ল্যাব-নোট — ডক-সত্য + অভিজ্ঞতা",
    body: `<p class="bn">ডক-সত্য: <code>CLAUDE_CODE_SUBAGENT_MODEL</code> ডিফল্ট মাত্র — ফাইলের model-ফিল্ড বা প্রেরিত প্যারামিটার জেতে; <code>CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1</code> সবকিছু টপকায় (fork আর model:inherit-স্কিল ছাড়া)। tools=অনুমোদন, disallowedTools=নিষেধ (আগে প্রয়োগ); mcp__server / mcp__server__* প্যাটার্ন সার্ভার-স্তরে; Bash(কমান্ড)-স্পেসিফায়ার disallowedTools-এ পুরো টুল সরায়। হুক-ব্যাকস্টপ: PreToolUse stdin-JSON, exit 2 = ব্লক+বার্তা।</p>
<p class="en">Doc-truth: SUBAGENT_MODEL is only a default (file model wins); FORCE=1 overrides everything except forks and model:inherit skills. tools allowlists, disallowedTools denylists (applied first), mcp__ patterns work per-server; Bash(cmd) in disallowedTools removes the whole tool. PreToolUse exit 2 blocks with the stderr message fed back.</p>
<p class="bn">কারিগর-টিপ: দাম-নিয়ন্ত্রণের বাস্তব সংখ্যা মনে রাখো — খোঁজ/তালিকা-কাজ Haiku-তে, জটিল-বিশ্লেষণ Sonnet/Opus-এ। সব-Haiku চালালে সস্তা কিন্তু ছোট-কাজ বারবার ফেরত আসে; মিশ্র-নিয়মই (default Sonnet, খোঁজ Haiku) মিষ্টি-বিন্দু।</p>`
  },
  recall: {
    q: "সব সাব-এজেন্ট Haiku-তে চাও — ফাইলের model-ফিল্ড যাই বলুক। কী সেট করবে?",
    qen: "You want every subagent on Haiku regardless of file model fields. What do you set?",
    a: "env-ব্লকে CLAUDE_CODE_SUBAGENT_MODEL: haiku + CLAUDE_CODE_SUBAGENT_MODEL_FORCE: 1 — FORCE না-থাকলে ফাইলের model জেতে।",
    aen: "Both env vars — SUBAGENT_MODEL plus FORCE=1; without FORCE the file's model wins."
  }
});


// ── DOOR 57 · জামালের প্যাকেজ-ল্যাব — Jamal's Package Lab: Plugin From Zero to Installable ──
doors.push({
  num: 57,
  name: "জামালের প্যাকেজ-ল্যাব",
  subtitle: "Jamal's Package Lab",
  icon: "🧪",
  color: "#8b5cf6",
  tech: "Hands-On Lab — Build a Real Plugin: Skill + Agent + Hook in One Bundle",
  spirit: "আমানত — মুড়িয়ে পৌঁছে দাও",
  story: `
<p class="bn">কামরুল মিয়ার ভাগ্নে জামাল প্যাকেজ-ঘরের পেছনের কারখানা চালায়। আজ তোমাকে বানাতে দেবে <strong>আসল একটা প্লাগইন</strong> — দরজা ৪৯-এর নকশা হাতে নামবে: এক বান্ডেলে স্কিল + এজেন্ট + হুক, ম্যানিফেস্ট-সহ, টেস্ট-ড্রাইভ করে, গিটে তোলা পর্যন্ত।</p>
<p class="en">Kamrul Miah's nephew Jamal runs the package house's back factory. Today you build <strong>a real plugin</strong> — Door 49's design in your hands: one bundle with skill + agent + hook, manifest and all, test-driven, pushed to git.</p>

<h4 class="bn">কাজের টেবিল ১ · বান্ডেল-কাঠামো</h4>
<pre class="code-block">$ mkdir -p ledger-tools/{.claude-plugin,skills/release-check,agents,hooks,scripts}
$ cd ledger-tools

# .claude-plugin/plugin.json:
{
  "name": "ledger-tools",
  "description": "LedgerPilot release toolkit: checklist skill, test agent, SQL guard hook",
  "version": "0.1.0",
  "author": { "name": "Md Rakibul Hasan" }
}

# skills/release-check/SKILL.md — দরজা ৫৩-এর স্কিলটাই বসাও
# agents/test-smith.md — দরজা ৫৫-এর উস্তাদ-ফাইলটাই
# hooks/hooks.json:
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{ "type": "command",
        "command": "./scripts/block-sql-writes.sh" }]
    }]
  }
}
# scripts/block-sql-writes.sh — দরজা ৫৬-এর পাহারা (chmod +x!)
&gt; # যাচাই: tree ledger-tools — পাঁচ-খানার কাঠামো দেখো</pre>

<h4 class="bn">কাজের টেবিল ২ · টেস্ট-ড্রাইভ</h4>
<pre class="code-block">$ cd ~/ojo-ledger-pilot-django
$ claude --plugin-dir ~/path/to/ledger-tools
&gt; /ledger-tools:release-check
&gt; # স্কিল চললো? নেমস্পেস-ডাক কাজ করলো?
&gt; /context
&gt; # agents-তালিকায় ledger-tools-এর test-smith?
&gt; # হুক-পরীক্ষা: SQL-রাইট চাও — ব্লক-বার্তা এলো?
# ← তিন অংশই লোড: স্কিল-নেমস্পেস + এজেন্ট + হুক</pre>

<h4 class="bn">কাজের টেবিল ৩ · গিটে তোলা — বিতরণ-প্রস্তুতি</h4>
<pre class="code-block">$ cd ledger-tools && git init && git add -A
$ git commit -m "ledger-tools v0.1.0: release toolkit"
$ git remote add origin git@github.com:&lt;user&gt;/ledger-tools.git
$ git push -u origin main
&gt; # অন্য মেশিন/প্রজেক্ট থেকে:
&gt; /plugin marketplace add &lt;user&gt;/ledger-tools
&gt; /plugin install ledger-tools@ledger-tools
&gt; # আপডেট-ঢেউ: plugin.json-এ version 0.1.0 → 0.2.0,
&gt; # commit+push — ইনস্টলকারীরা আপডেট পাবে</pre>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>জামালের সতর্কতা:</strong> প্লাগইনের hooks/hooks.json-এর command-পাথ প্লাগইন-রুট থেকে ধরা হয় — <code>./scripts/...</code> লিখলে ফাইল প্লাগইন-ফোল্ডারেই থাকতে হবে। আর স্থানান্তরের পর পুরনো <code>.claude/</code>-কপি মুছো — নাহলে একই নামে দুইজন উস্তাদ, একই ডাকে দুই স্কিল।<br><em>Hook command paths resolve from the plugin root; delete the old .claude/ copies after migrating.</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 57</span><pre class="code-block"># ── প্রম্পট ১ · বান্ডেল-জন্ম ──
&gt; ledger-tools প্লাগইনের পূর্ণ কাঠামো বানাও — ম্যানিফেস্ট,
&gt; দরজা ৫৩-এর স্কিল, ৫৫-এর এজেন্ট, ৫৬-এর হুক একসাথে
# ← তিন ল্যাবের ফসল এক বান্ডেলে

# ── প্রম্পট ২ · টেস্ট-ড্রাইভ ──
$ claude --plugin-dir ~/dev/ledger-tools
&gt; /ledger-tools:release-check
&gt; # নেমস্পেসড-ডাক, এজেন্ট-নিবন্ধন, হুক-পাহারা তিনটাই দেখো
# ← ইনস্টল-ছাড়াই পূর্ণ-পরখ

# ── প্রম্পট ৩ · আপডেট-ঢেউ ──
&gt; সংস্করণ 0.2.0 করে CHANGE-নোটসহ পুশ করার ধাপ বলো
# ← version-ই ঢেউ — বাড়ালেই ছড়ায়

# ── প্রম্পট ৪ · দলে-বিতরণ ──
&gt; /plugin marketplace add our-org/ledger-tools
&gt; # দলের সবাই একই প্যাকেজ পাবে কীভাবে?
# ← রেপো-মার্কেটপ্লেস = দলের সাধারণ প্যাকেজ-ঘর

# ── প্রম্পট ৫ · স্থানান্তর-শুচিতা ──
&gt; প্লাগইনে সরানোর পর .claude/-এর পুরনো কপিগুলো কী করব?
# ← মুছো — ডুপ্লিকেট-উস্তাদ/স্কিল রোধ</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৫৭ — তালিসমান</div><div class="text">🧪 তিন ল্যাবের ফসল, এক বান্ডেলে।<br><small>ম্যানিফেস্ট-নামে-নেমস্পেস → --plugin-dir-এ পরখ → গিটে-তোলা → marketplace-এ-বিতরণ → version-এ-আপডেট। পাকা জিনিসই মোড়াও।</small></div></div>`,
  senior: {
    title: "ল্যাব-নোট — ডক-সত্য + অভিজ্ঞতা",
    body: `<p class="bn">ডক-সত্য: প্লাগইন-স্কিল সবসময় নেমস্পেসড (/plugin-name:skill-name) — নাম-সংঘর্ষে দুটোই বেঁচে থাকে; project/user-এর একই-নামের agent প্লাগইন-agent-কে ঢেকে দেয় — তাই স্থানান্তরের পর পুরনো মুছতে হয়; hooks/hooks.json settings.json-এর hooks-এর মতোই কাজ করে, পাথ প্লাগইন-রুট থেকে; <code>/reload-plugins</code> দিয়ে প্লাগইন-অংশের বদল সেশনে আনা যায়।</p>
<p class="en">Doc-truth: plugin skills are always namespaced and coexist with same-named locals; same-named project/user agents override plugin agents — delete originals after migrating; hooks/hooks.json mirrors settings hooks with plugin-root paths; /reload-plugins refreshes plugin parts mid-session.</p>
<p class="bn">কারিগর-টিপ: প্লাগইন প্রথম দিনেই মার্কেটপ্লেসে না তুলে দুই-সপ্তাহ <code>--plugin-dir</code>-এ নিজে ব্যবহার করো — বাগ বেরোবে, ছাঁচ বদলাবে; তারপর 1.0.0 লিখো। সংস্করণ-সংখ্যা প্রতিশ্রুতি, শুধু লেবেল নয়।</p>`
  },
  recall: {
    q: "প্লাগইনে সরানোর পর .claude/agents/-এর পুরনো test-smith.md রয়ে গেল। কী হবে?",
    qen: "After migrating to a plugin, the old .claude/agents/test-smith.md remains. What happens?",
    a: "পুরনোটাই জেতে — project/user agent একই নামে plugin-agent-কে ঢেকে দেয়। প্লাগইনেরটা কাজ করাতে পুরনো ফাইল মুছতে হবে।",
    aen: "The old one wins — project/user agents override same-named plugin agents. Delete the original."
  }
});


// ── DOOR 58 · কারখানা-উদ্বোধন — The Grand Opening: Full Stack in One Evening ──
doors.push({
  num: 58,
  name: "কারখানা-উদ্বোধন",
  subtitle: "The Grand Opening Capstone",
  icon: "🎉",
  color: "#e11d48",
  tech: "Capstone Lab — Ledger + Skill + Agent + Plugin: Ship Your Whole Setup",
  spirit: "ইহসান — যা শিখলে, দিয়ে দাও",
  story: `
<p class="bn">শেষ টেবিল — আর কোনো নতুন জিনিস নেই। আগের ছয় ল্যাবে তুমি টুকরা টুকরা বানিয়েছিলে; আজ এক বিকেলে সব জোড়া লাগাবে, চালাবে, আর <strong>কমিট করবে</strong>। রাহেলা খাতুন থেকে জামাল পর্যন্ত সবাই দরজায় দাঁড়িয়ে — উদ্বোধনের ফিতে কাটার অপেক্ষায়।</p>
<p class="en">The final bench — nothing new. Six labs built the pieces; today you assemble, run, and <strong>commit</strong> the whole thing in one evening. From Rahela Khatun to Jamal, everyone's at the door — waiting for the ribbon.</p>

<h4 class="bn">উদ্বোধন-তালিকা (৯০ মিনিট)</h4>
<pre class="code-block">□ ০-১০ মি  · খাতা: cd ~/ojo-ledger-pilot-django && claude
             /init → ৩টা ফাঁদ-নিয়ম হাতে যোগ → /context-প্রমাণ
□ ১০-২০ মি · স্কিল: .claude/skills/release-check/SKILL.md
             (দরজা ৫৩) → /release-check চালাও → টেবিল-ফল
□ ২০-৩৫ মি · উস্তাদ: .claude/agents/test-smith.md (দরজা ৫৫)
             → নিয়োগ দাও → /tasks-প্রমাণ → রিপোর্ট-ছাঁচ পাকা
□ ৩৫-৫০ মি · পাহারা: scripts/block-sql-writes.sh + hooks (দরজা ৫৬)
             → chmod +x → SQL-রাইট ব্লক-প্রমাণ
□ ৫০-৭০ মি · প্যাকেজ: ledger-tools বান্ডল (দরজা ৫৭)
             → --plugin-dir টেস্ট-ড্রাইভ → গিট-পুশ
□ ৭০-৯০ মি · উদ্বোধন: নতুন সেশনে পুরো যাত্রা —
             "রিলিজ দেবো" → স্কিল-ডাক → উস্তাদ-নিয়োগ →
             হুক-পাহারা → git commit -m "workshop v1"</pre>

<div class="callout info"><span class="co-icon">🏆</span><div><b>সমাপ্তি-প্রমাণ</b> — <span class="en">Definition of done</span><br>① CLAUDE.md-তে ৩+ ফাঁদ-নিয়ম, /context-এ দৃশ্যমান · ② /release-check এক-কমান্ডে ৫-চেক টেবিল · ③ test-smith /tasks-এ দেখা যায়, রিপোর্ট পুনঃব্যাখ্যা-ছাড়া-বোধগম্য · ④ SQL-রাইট ব্লকড, pytest চলমান · ⑤ প্লাগইন রেপোতে, ইনস্টলযোগ্য · ⑥ সব কমিট করা। ছয়টাই সবুজ হলে — কারখানা চালু।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>শেষ সতর্কতা:</strong> উদ্বোধনের দিন নতুন ফিচার যোগ কোরো না — শুধু জোড়া লাগাও আর প্রমাণ তোলো। ভাঙা জিনিস পেলে নোট করে রাখো, পরের সেশনে ঠিক করবে — আজকের কাজ উদ্বোধন, মেরামত নয়।<br><em>No new features on opening day — assemble and prove. Log breakages for later.</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 58</span><pre class="code-block"># ── প্রম্পট ১ · যাত্রা-শুরু ──
&gt; আজ কারখানা-উদ্বোধন: খাতা→স্কিল→উস্তাদ→পাহারা→প্যাকেজ।
&gt; ধাপে ধাপে এগোবো; প্রতিটার পরে প্রমাণ দেখাবে
# ← এক-সেশনে পূর্ণ-স্ট্যাক — ছয় ল্যাবের ফল জোড়া

# ── প্রম্পট ২ · প্রমাণ-তোলা ──
&gt; প্রতিটা ধাপ শেষে এক লাইনে প্রমাণ-বাক্য দাও:
&gt; খাতা-/context, স্কিল-টেবিল, উস্তাদ-/tasks, হুক-ব্লক
# ← প্রমাণ ছাড়া ধাপ শেষ নয় — ল্যাবের মূল নিয়ম

# ── প্রম্পট ৩ · মোড়-কমিট ──
$ git add -A && git commit -m "workshop v1: ledger+skill+agent+hook+plugin"
&gt; # কমিট-বার্তায় পাঁচ-অংশের তালিকা এলো?
# ← যা বানালে তার নথি — ভবিষ্যতের তুমি পড়বে

# ── প্রম্পট ৪ · ফিরে-দেখা ──
&gt; নতুন সেশন খোলো: "আমার কারখানায় কী কী আছে?"
&gt; # খাতা+স্কিল+এজেন্ট সব নিজে থেকে বর্ণনা করলো?
# ← স্থায়িত্বের প্রমাণ: রিস্টার্টেও সব বেঁচে

# ── প্রম্পট ৫ · উত্তরাধিকার ──
&gt; এই সেটআপ থেকে তিনটা নতুন উস্তাদ/স্কিলের নাম প্রস্তাব করো —
&gt; আমার কাজের ধরন দেখে
# ← কারখানা চালু; এখন বাড়াও</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৫৮ — তালিসমান</div><div class="text">🎉 পড়া শেষ নয় — কারখানা চালু।<br><small>৯০ মিনিটে খাতা+স্কিল+উস্তাদ+পাহারা+প্যাকেজ জোড়া, প্রমাণ-সহ কমিট। এরপর থেকে প্রতিটা "আরেকবার বলতে হলো" মুহূর্ত = নতুন আসবাবের জন্ম-সংকেত।</small></div></div>`,
  senior: {
    title: "ল্যাব-নোট — সংশ্লেষণ",
    body: `<p class="bn">ছয় ল্যাবের সূত্র: (১) প্রমাণ-নীতি — প্রতিটা ধাপে যাচাই-কমান্ড (/context, /tasks, ব্লক-পরীক্ষা); (২) জন্ম-ক্রম — খাতা আগে (স্মৃতি), স্কিল দ্বিতীয় (পদ্ধতি), উস্তাদ তৃতীয় (বিভাজন), পাহারা চতুর্থ (সীমা), প্যাকেজ শেষ (বিতরণ); (৩) পাকা-হলে-মোড়াও — প্রতিটা স্তর প্রমাণিত হলে পরেরটায়। এই ক্রম ভাঙলে অর্ধ-বানানো জিনিস বান্ডেল হয়ে ছড়ায়।</p>
<p class="en">The six-lab formula: proof at every step (/context, /tasks, block-test); birth order ledger → skill → agent → guard → package; wrap only what's proven. Break the order and half-built things ship.</p>`
  },
  recall: {
    q: "কারখানা-সেটআপের সঠিক জন্ম-ক্রম কী, আর কেন?",
    qen: "What's the right birth order for the workshop setup, and why?",
    a: "খাতা → স্কিল → উস্তাদ → পাহারা → প্যাকেজ। স্মৃতি আগে (নিয়ম না-থাকলে উস্তাদও পথহারা), পদ্ধতি তারপর, বিভাজন তারপর, সীমা তারপর, বিতরণ সবশেষে — পাকা জিনিসই মোড়ানো হয়।",
    aen: "Ledger → skill → agent → guard → package: memory first, procedure next, then delegation, limits, and distribution of the proven whole."
  }
});


// ── DOOR 59 · মিলন-চত্বর — The Assembly Square: Read the Map, Know Your Tools ──
doors.push({
  num: 59,
  name: "মিলন-চত্বর",
  subtitle: "The Assembly Square",
  icon: "🗺️",
  color: "#6366f1",
  tech: "Decision Map — Which Tool When: CLAUDE.md vs Skill vs Agent vs Hook vs Plugin",
  spirit: "হিকমাহ — সঠিক জায়গায় সঠিক হাত",
  story: `
<p class="bn">কারখানা-উদ্বোধনের আগের শেষ বিশ্রাম — মিলন-চত্বরে দাঁড়িয়ে পুরো নকশাটা একবার চোখে তোলো। পাঁচ হাতিয়ার, পাঁচ প্রশ্ন। যে প্রশ্নের উত্তর "হ্যাঁ", সেই হাতিয়ারটাই তোমার হাতে।</p>
<p class="en">The last rest before the grand opening — stand in the assembly square and take in the whole map. Five tools, five questions. Whichever question answers "yes" puts that tool in your hand.</p>

<div class="diagram"><svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="20" width="500" height="170" rx="12" fill="#6366f11a" stroke="#6366f1" stroke-width="1.5"/>
  <text x="280" y="45" text-anchor="middle" fill="#818cf8" font-size="13" font-weight="700">পাঁচ প্রশ্নের নকশা — কোন হাতিয়ার কখন</text>
  <rect x="50" y="60" width="84" height="26" rx="6" fill="#f59e0b22" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="92" y="77" text-anchor="middle" fill="#f59e0b" font-size="10.5" font-weight="700">খাতা CLAUDE.md</text>
  <rect x="148" y="60" width="84" height="26" rx="6" fill="#10b98122" stroke="#10b981" stroke-width="1.5"/>
  <text x="190" y="77" text-anchor="middle" fill="#10b981" font-size="10.5" font-weight="700">তালিমনামা Skill</text>
  <rect x="246" y="60" width="84" height="26" rx="6" fill="#06b6d422" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="288" y="77" text-anchor="middle" fill="#06b6d4" font-size="10.5" font-weight="700">উস্তাদ Agent</text>
  <rect x="344" y="60" width="84" height="26" rx="6" fill="#e11d4822" stroke="#e11d48" stroke-width="1.5"/>
  <text x="386" y="77" text-anchor="middle" fill="#e11d48" font-size="10.5" font-weight="700">পাহারা Hook</text>
  <rect x="442" y="60" width="74" height="26" rx="6" fill="#8b5cf622" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="479" y="77" text-anchor="middle" fill="#8b5cf6" font-size="10.5" font-weight="700">প্যাকেজ Plugin</text>
  <text x="92" y="105" text-anchor="middle" fill="#94a3b8" font-size="9.5">প্রতি সেশনে</text>
  <text x="92" y="118" text-anchor="middle" fill="#94a3b8" font-size="9.5">সত্য লাগে?</text>
  <text x="190" y="105" text-anchor="middle" fill="#94a3b8" font-size="9.5">পদ্ধতি</text>
  <text x="190" y="118" text-anchor="middle" fill="#94a3b8" font-size="9.5">বারবার?</text>
  <text x="288" y="105" text-anchor="middle" fill="#94a3b8" font-size="9.5">বিশাল কাজ</text>
  <text x="288" y="118" text-anchor="middle" fill="#94a3b8" font-size="9.5">টেবিল-বাইরে?</text>
  <text x="386" y="105" text-anchor="middle" fill="#94a3b8" font-size="9.5">কড়া সীমা</text>
  <text x="386" y="118" text-anchor="middle" fill="#94a3b8" font-size="9.5">চাই?</text>
  <text x="479" y="105" text-anchor="middle" fill="#94a3b8" font-size="9.5">২+ প্রজেক্টে</text>
  <text x="479" y="118" text-anchor="middle" fill="#94a3b8" font-size="9.5">লাগবে?</text>
  <text x="92" y="145" text-anchor="middle" fill="#f59e0b" font-size="9.5">→ দরজা ৪৭</text>
  <text x="190" y="145" text-anchor="middle" fill="#10b981" font-size="9.5">→ দরজা ৪৮</text>
  <text x="288" y="145" text-anchor="middle" fill="#06b6d4" font-size="9.5">→ দরজা ৫০</text>
  <text x="386" y="145" text-anchor="middle" fill="#e11d48" font-size="9.5">→ দরজা ৩৭</text>
  <text x="479" y="145" text-anchor="middle" fill="#8b5cf6" font-size="9.5">→ দরজা ৪৯</text>
  <text x="280" y="175" text-anchor="middle" fill="#64748b" font-size="10">এক কাজে দুটো প্রশ্নের উত্তর হ্যাঁ হলে? দুটোই লাগে — খাতা+পাহারা একসাথে সাধারণ।</text>
</svg></div>

<h4 class="bn">তিনটা বাস্তব দৃশ্যে পরখ</h4>
<pre class="code-block">দৃশ্য ১: ক্লড বারবার float-এ টাকা লিখছে
→ খাতা (প্রতি-সেশন সত্য: "Money is DecimalField")
  + পাহারা চাইলে: migration-হুকে FloatField-এলার্ট

দৃশ্য ২: প্রতি শুক্রবার রিলিজ-চেকলিস্ট হাতে চালাও
→ তালিমনামা (পদ্ধতি, ব্যবহার-মুহূর্তে লোড) — দরজা ৫৩-এ বানানোই আছে

দৃশ্য ৩: বিশাল কোডবেস-খোঁজা মূল টেবিল ভরিয়ে দিচ্ছে
→ উস্তাদ (নিজস্ব জানালা, শুধু রিপোর্ট ফেরায়)</pre>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 59</span><pre class="code-block"># ── প্রম্পট ১ · নিজ-রোগ-নির্ণয় ──
&gt; আমার কাজের ধরন শুনে বলো: কোন কাজটা খাতা চায়, কোনটা
&gt; তালিমনামা, কোনটা উস্তাদ — আজকের সেশন থেকেই উদাহরণ দাও
# ← পাঁচ-প্রশ্নের নকশা নিজ-কাজে লাগানো

# ── প্রম্পট ২ · বিভ্রান্তি-চেনা ──
&gt; "CLAUDE.md-তে লিখলাম তো মানবেই" — এই ভুল ধারণার
&gt; সংশোধন করো: খাতা কী, hook কী
# ← নরম-স্মৃতি বনাম কড়া-সীমা — কখন কোনটা

# ── প্রম্পট ৩ · জোড়া-হাতিয়ার ──
&gt; কোন কোন কাজে দুটো হাতিয়ার একসাথে লাগে? দুটা উদাহরণ
# ← খাতা+হুক, স্কিল+উস্তাদ — সাধারণ জুটি

# ── প্রম্পট ৪ · অপচয়-চেনা ──
&gt; ৫-লাইনের একবারের কাজে উস্তাদ-ফাইল লেখা কি ঠিক?
&gt; কেন না — ব্যাখ্যা করো
# ← হাতিয়ারের দাম: ছোট কাজে ভারী হাতিয়ার = অপচয়

# ── প্রম্পট ৫ · বিতরণ-সিদ্ধান্ত ──
&gt; আমার কোন সেটআপ প্লাগইন হওয়ার যোগ্য এখন? কারণসহ
# ← ২+ প্রজেক্ট/মানুষ না-হলে ঢিলে-ফাইলই থাকুক</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৫৯ — তালিসমান</div><div class="text">🗺️ প্রশ্নই হাতিয়ার বাছে।<br><small>প্রতি-সেশন সত্য? খাতা। বারবার-পদ্ধতি? তালিমনামা। টেবিল-বাইরের বিশাল কাজ? উস্তাদ। কড়া সীমা? পাহারা। ২+ প্রজেক্ট? প্যাকেজ। দুই হ্যাঁ = দুই হাতিয়ার।</small></div></div>`,
  senior: {
    title: "সংশ্লেষণ-নোট",
    body: `<p class="bn">অফিসিয়াল নির্দেশিকার মূল সূত্রও এই পাঁচ-প্রশ্ন: ফ্যাক্ট → CLAUDE.md (বা path-scoped rule); বহু-ধাপ পদ্ধতি → skill; context-দূষণ-রোধ → subagent; কঠিন-বাধা → PreToolUse hook (নির্দেশ কখনোই বাধা নয়); শেয়ারিং → plugin। মনে রাখার ছল: <em>স্মৃতি-পদ্ধতি-বিভাজন-সীমা-বিতরণ</em> — পাঁচটা শব্দ, পুরো স্থাপত্য।</p>
<p class="en">The official extension-overview reduces to the same five questions: fact → CLAUDE.md; multi-step procedure → skill; context pollution → subagent; hard block → hook; sharing → plugin. Memory-procedure-delegation-limits-distribution: five words, the whole architecture.</p>`
  },
  recall: {
    q: "প্রতি সেশনে ক্লডের জানা দরকার 'টাকা Decimal' — খাতা, স্কিল, উস্তাদ, পাহারা, প্যাকেজ — কোনটা?",
    qen: "Claude needs to know 'money is Decimal' every session. Which of the five?",
    a: "খাতা (CLAUDE.md) — প্রতি-সেশন সত্য। স্কিল পদ্ধতির, উস্তাদ বড়-কাজের, পাহারা সীমার, প্যাকেজ বিতরণের।",
    aen: "The ledger — a per-session fact. Skills are procedures, agents are for big work, hooks for limits, plugins for distribution."
  }
});

// ── DOOR 60 · স্থপতির সিংহাসন — The Architect's Throne (final) ──
doors.push({
  num: 60,
  icon: "🏛️",
  color: "#fbbf24",
  name: "স্থপতির সিংহাসন",
  subtitle: "The Architect's Throne — Full Circle",
  tech: "SDK Deep Mastery · Sandbox · Precedence · Synthesis",
  spirit: "আমানতুল-ফিতরাত — প্রকৃতির ওপর অর্পিত আমানত",
  secret: "দরজা ১-১০ শেখায় চালাতে, ১১-২৫ শেখায় বানাতে ও জোড়াতে, ২৬-৩০ শেখায় গভীর কাস্টমাইজ, ৩১-৩৪ শেখায় আইডিয়া→প্রোডাক্ট — সিংহাসন সব স্রোত এক করে: প্রসঙ্গ, আস্থা, যাচাই — তিন স্তম্ভেই দাঁড়িয়ে আছে কারখানা।",
  recall: {
    q: "তুমি SDK দিয়ে নিজের প্রোডাক্টে এজেন্ট বসাচ্ছো। টুল-অনুমতি নিজের হাতে নিতে, সিস্টেম প্রম্পট নিজের মতো করতে, আর সবচেয়ে শক্ত বিচ্ছিন্নতা চাও — তিনটা হাতিয়ার কী?",
    qen: "You're embedding the agent in your own product via SDK. You want tool permissions in your hand, a custom system prompt, and the hardest isolation — name the three tools.",
    a: "① can_use_tool কলব্যাক (Python: PermissionResultAllow/Deny; TS: behavior allow/deny, updatedInput দিয়ে ইনপুট বদলানোও যায়)। ② system_prompt preset claude_code + append, বা পুরো কাস্টম স্ট্রিং। ③ sandbox: settings-এ enabled:true + filesystem allowWrite/denyRead + network allowedDomains — বিচ্ছিন্ন ঘেরা উঠান। আর settings-এর ঊর্ধ্বতন শৃঙ্খলা: local > project > user, প্রোগ্রামেটিক সবার উপরে, managed সবার আগে।",
    aen: "① the can_use_tool callback (Python: PermissionResultAllow/Deny; TS: behavior allow/deny — even updatedInput to rewrite inputs). ② system_prompt with the claude_code preset + append, or a full custom string. ③ sandbox: enabled:true with filesystem allowWrite/denyRead and network allowedDomains — a fenced yard. And the precedence chain: local > project > user, programmatic above all, managed first."
  },
  story: `<p class="scene-setting">পনেরোটা দরজার শেষে তুমি আর কারখানার মালিক নও — শহরের স্থপতি। রাহাত মিয়া তোমাকে ডাকলেন নদীর ধারে তার স্টুডিওতে, যেখানে টেবিলের উপর শহরের পুরো মডেল: কারখানা, বাজার, ঘড়ির টাওয়ার, প্রাচীর। বললেন — দেখো, এই প্রতিটা ঘর তুমি এক এক করে বানিয়েছ (দরজা ১-১৪)। এখন শেষ প্রশ্ন: এই শহরটা কার আইনে চলবে? কে কার উপরে বসবে? কোথায় প্রাচীর, কোথায় ফাটক?</p>
<p class="scene-setting en">At the end of seventeen doors you are no longer a workshop owner — you are the city's architect. Rahat mia calls you to his riverside studio, where the whole city sits modelled on the table: factories, markets, the clock tower, the wall. He says — see, you built each of these rooms one by one (Doors 1-14). Now the last question: under whose law does this city run? Who sits above whom? Where the wall, where the gate?</p>

<div class="dialogue">রাহাত তিনটা জিনিস দেখালেন। প্রথমে একটা ঘরের খাতা — প্রতিটা টুল-কলের আগে তোমার কলম লাগবে (can_use_tool): মঞ্জুর, নাকচ, বা মঞ্জুর-করে-শর্ত-বদলে। তারপর শহরের সংবিধান (system_prompt): ডিফল্ট আইনগ্রন্থ রেখে নিজের ধারা যোগ (preset + append), নয়তো পুরো নতুন সংবিধান। তারপর প্রাচীর (sandbox): কোথায় লেখা যাবে, কোথানো পড়াই যাবে না, কোন দরজা দিয়ে বাইরের সঙ্গে কথা — সব লেখা থাকবে। আর শেষ পাতায় আইনের ঊর্ধ্বতন ক্রম: স্থানীয় আইন প্রজেক্টকে টাপে, প্রজেক্ট ব্যবহারকারীকে, আর সংস্থার নীতি সবার আগে পড়া হয়।</div>
<div class="dialogue en">Rahat shows three things. First, a room's ledger — before every tool call your pen falls (can_use_tool): allow, deny, or allow-with-rewritten-terms. Then the city's constitution (system_prompt): keep the default law-book and append your own clauses (preset + append), or write a whole new one. Then the wall (sandbox): where writing is allowed, where even reading is forbidden, which gate may speak outside — all written down. And on the last page, the order of law: local rules tap the project, the project taps the user, and the organization's policy is read before all.</div>

<div class="code-block"># ① টুল-অনুমতি নিজের কলমে — can_use_tool (Python):
from claude_agent_sdk.types import (
    PermissionResultAllow, PermissionResultDeny, ToolPermissionContext
)

async def can_use_tool(tool_name, input_data, context):
    if tool_name == "Bash" and "rm" in input_data.get("command", ""):
        return PermissionResultDeny(message="User denied this action")
    return PermissionResultAllow(updated_input=input_data)  # শর্ত-বদলও সম্ভব

options = ClaudeAgentOptions(can_use_tool=can_use_tool)

# ⚠️ Python স্ট্রিমিং মোডে (finite message stream) একটা
# dummy PreToolUse হুক লাগে স্ট্রিম খোলা রাখতে:
#   async def keep_open(input_data, tool_use_id, context):
#       return {"continue_": True}
#   hooks={"PreToolUse": [HookMatcher(matcher=None, hooks=[keep_open])]}

# ② সংবিধান — system_prompt:
options = ClaudeAgentOptions(
    system_prompt={
        "type": "preset", "preset": "claude_code",   # ডিফল্ট আইন
        "append": "Always include detailed docstrings.",  # নিজের ধারা
    }
)
# নতুন সংবিধান চাইলে: system_prompt="You are ..."
# (v0.1.0+ ডিফল্ট এখন minimal — পুরনো আচরণ চাইলে preset বলে দাও)</div>

<div class="code-block">// ③ প্রাচীর — sandbox (settings.json):
{
  "sandbox": {
    "enabled": true,
    "autoAllowBashIfSandboxed": true,
    "excludedCommands": ["docker *"],
    "filesystem": {
      "allowWrite": ["/tmp/build", "~/.kube"],
      "denyRead": ["~/.aws/credentials"]
    },
    "network": {
      "allowedDomains": ["github.com", "*.npmjs.org"]
    }
  }
}

# আইনের ক্রম — কে কাকে টাপে:
#   local (.claude/settings.local.json)
#     > project (.claude/settings.json)
#       > user (~/.claude/settings.json)
# প্রোগ্রামেটিক অপশন (agents, allowed_tools) সব ফাইলের উপরে;
# managed/সংস্থা নীতি সবার আগে পড়া হয়।
# কোনো সেটিং কাজ না করলে: /status দেখো কোন স্তর সক্রিয়,
# claude doctor (টার্মিনাল) বা /doctor (সেশনে) ভাঙা ফাইল ধরে।</div>

<p>এখন পনেরোটা দরজা এক শহরে বসাও। নিচের দশটা ছিল কারখানা: হাসুর হাতুড়ি (১), রাহেলার খাতা (২), ভাইদের মাপ (৩), ফরিদার নদী (৪), বেলালের তালা (৫), রফিকের ঠিকাদার (৬), মাহমুদের ঘণ্টা (৭), আয়েশার আংটি (৮), নাদিরের রাতের কারখানা (৯), প্রথম সিংহাসন (১০)। উঁচু তলায় পাঁচটা নতুন ঘর: সিরাজের ঘড়ির ইঞ্জিন (১১), নুসরাতের সিল-ছাঁচ-ফলক (১২), কামরুলের নিজে গড়া যন্ত্র (১৩), মোস্তফার পাইকারি বাক্স (১৪) — আর এই স্থপতির টেবিল (১৫), যেখানে পুরো শহরের আইন লেখা হয়।</p>
<p class="en">Now set all seventeen doors in one city. The lower ten were the workshop: Hasu's hammer (1), Rahela's ledger (2), the brothers' measure (3), Farida's river (4), Belal's locks (5), Rafiq's contractors (6), Mahmud's bells (7), Ayesha's ring (8), Nadir's night factory (9), the first throne (10). The advanced floors added six rooms: Siraj's clock engine (11), Nusrat's seals-moulds-plaques (12), Kamrul's self-built machines (13), Mostafa's wholesale crates (14), Shirin's many kitchens (15), Rubina's vault (16) — and this architect's table (17), where the whole city's law is written.</p>

<div class="diagram">
<div class="diag-title">শহরের স্তম্ভ — পনেরো দরজার স্থাপত্য</div>
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
<rect class="node-hot" x="190" y="128" width="180" height="46" rx="12"/><text class="lbl-hot" x="280" y="146">স্থপতির সিংহাসন (১৫)</text><text class="lbl-sm" x="280" y="163">সংবিধান · প্রাচীর · ঊর্ধ্বতন ক্রম</text>
<rect class="node" x="15" y="30" width="150" height="34" rx="8"/><text class="lbl-sm" x="90" y="51">১ হাতুড়ি · ৪ নদী</text>
<rect class="node" x="15" y="80" width="150" height="34" rx="8"/><text class="lbl-sm" x="90" y="101">২ খাতা · ৬ ঠিকাদার</text>
<rect class="node" x="15" y="130" width="150" height="34" rx="8"/><text class="lbl-sm" x="90" y="151">৩ মাপ · ৭ ঘণ্টা</text>
<rect class="node" x="15" y="180" width="150" height="34" rx="8"/><text class="lbl-sm" x="90" y="201">৫ তালা · ৮ আংটি</text>
<rect class="node" x="15" y="230" width="150" height="34" rx="8"/><text class="lbl-sm" x="90" y="251">৯ রাত · ১০ সিংহাসন</text>
<rect class="node-purple" x="395" y="30" width="150" height="34" rx="8"/><text class="lbl-sm" x="470" y="51">১১ ঘড়ির ইঞ্জিন</text>
<rect class="node-purple" x="395" y="80" width="150" height="34" rx="8"/><text class="lbl-sm" x="470" y="101">১২ সিল · ছাঁচ · ফলক</text>
<rect class="node-purple" x="395" y="130" width="150" height="34" rx="8"/><text class="lbl-sm" x="470" y="151">১৩ নিজে গড়া যন্ত্র</text>
<rect class="node-purple" x="395" y="180" width="150" height="34" rx="8"/><text class="lbl-sm" x="470" y="201">১৪ পাইকারি বাক্স</text>
<rect class="node-purple" x="395" y="230" width="150" height="34" rx="8"/><text class="lbl-sm" x="470" y="251">১৫ বহু হাত · ১৬ ভল্ট</text>
<line class="edge" x1="165" y1="47" x2="230" y2="130"/>
<line class="edge" x1="165" y1="97" x2="196" y2="131"/>
<line class="edge" x1="165" y1="147" x2="188" y2="150"/>
<line class="edge" x1="165" y1="197" x2="196" y2="171"/>
<line class="edge" x1="165" y1="247" x2="200" y2="173"/>
<line x1="395" y1="47" x2="330" y2="130" stroke="#b37feb" stroke-width="1.5"/>
<line x1="395" y1="97" x2="364" y2="131" stroke="#b37feb" stroke-width="1.5"/>
<line x1="395.0" y1="147.0" x2="370.0" y2="150.8" stroke="#b37feb" stroke-width="1.5"/>
<line x1="395" y1="197" x2="364" y2="171" stroke="#b37feb" stroke-width="1.5"/>
<line x1="395" y1="247" x2="360" y2="173" stroke="#b37feb" stroke-width="1.5"/>
</svg>
<div class="diag-cap">বাঁ দিকে কারখানার দশ ঘর, ডানে উঁচু তলার চার ঘর — সব উঠে যায় স্থপতির টেবিলে, যেখানে আইন লেখা হয়।</div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ যন্ত্রের ক্রেতা</div>টুল চালায়, কনফিগ কপি-পেস্ট করে · সেটিং কাজ না করলে আন্দাজে নাড়ে · এজেন্টকে সব অনুমতি দিয়ে ঘুমায় · নিজের প্রোডাক্টে ঢোকাতে গিয়ে ডকুমেন্টেড পথ ছেড়ে ঘুরপথে যায়</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ স্থপতি</div>আইনের ক্রম জানে: local > project > user, managed আগে · প্রতিটা টুল-কল তার কলম ছাড়া চলে না (can_use_tool) · প্রাচীর আঁকে (sandbox: denyRead ~/.aws) · সংবিধান নিজের (preset + append)</div>
</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>স্থপতির শপথ:</strong> শক্তি বাড়ার সাথে সাথে আমানতও বাড়ে। sandbox চালু করলেও অন্ধ বিশ্বাস নয় — প্রাচীরের ভেতরেও নদীর হিসাব (দরজা ৪) আর শেষ সই (দরজা ১১-এর যাচাই) চলবেই। আর মনে রেখো: সংস্থার managed নীতি তোমার প্রোগ্রামেটিক অপশনকেও ছাড়িয়ে যায় — শহরের সীমানার বাইরে স্থপতিও নয়।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>The architect's oath:</strong> power grows, and the trust grows with it. Even with sandbox on, no blind faith — inside the wall too, the river's account (Door 4) and the final signature (Door 11's verification) keep running. And remember: managed org policy outranks even your programmatic options — beyond the city's border, not even the architect.</div></div>

<p class="verse">স্থাপত্যের শেষ কথা আমানতের — "নিশ্চয়ই আল্লাহ তোমাদের আদেশ দেন আমানত তার হকদারকে ফিরিয়ে দিতে" (কুরআন ৪:৫৮)। প্রতিটা টুল, প্রতিটা সংযোগ, প্রতিটা প্রাচীর একটা আমানত: কার হাতে কতটুকু শক্তি, সেটা স্থপতির টেবিলে লেখা থাকে। কলম তোমার, শহর কারিগরদের — হিসাব কারও সামনে খোলা।</p>

<div class="secret-box"><div class="label">শেষ তালিসমান — The Final Talisman</div><div class="text">🏛️ মাস্টারির তিন তলা: চালাও (১-১০) → বানাও (১১-১৪) → বাড়াও (১৫-১৬) → আইন লেখো (১৭) — SDK-তে ইঞ্জিন, sandbox-এ প্রাচীর, precedence-এ শৃঙ্খলা।<br>কারণ: যে শুধু চালায় সে চাকর, যে বানায় সে কারিগর, যে আইন লেখে সে স্থপতি।</div></div>
<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 60 — সিংহাসন-সংশ্লেষ</span><pre class="code-block"># ── প্রম্পট ১ · তিন-স্তম্ভের নিজ-পরীক্ষা ──
&gt; আমার কারখানা মাপো তিন স্তম্ভে: প্রসঙ্গ (CLAUDE.md কত লাইন,
&gt; কতটা rules-ঘর, /context-ভার কত), আস্থা (allow/deny কয়টা,
&gt; কোন মোড ডিফল্ট), যাচাই (কয়টা হুক, CI আছে?) — এক টেবিলে দাও,
&gt; দুর্বল স্তম্ভ চিহ্নিত করো
# ← মালিকের বার্ষিক-পরীক্ষা: কোন স্তম্ভ পুরোনো, কোনটা মজবুত

# ── প্রম্পট ২ · দুর্বল স্তম্ভের ওষুধ ──
&gt; (টেবিল এলে) দুর্বলতম স্তম্ভের জন্য তিনটা বাস্তব পদক্ষেপ
&gt; লেখো — একেকটা এক সপ্তাহের কাজ, ধাপ-কমান্ডসহ
# ← রোগ-নির্ণয় নয়, চিকিৎসা-পরিকল্পনা — মাপার পর বদলানো

# ── প্রম্পট ৩ · কারখানা-নথি এক পাতায় ──
&gt; আমার পুরো সেটআপের এক-পাতার নকশা আঁকো টেক্সটে: স্তরভিত্তি
&gt; (settings-তলা), স্মৃতি-ঘর (কোন ফাইল কোথায়), ঘণ্টা-তালিকা,
&gt; এজেন্ট-দল, স্কিল-র‌্যাক — docs/factory-map.md-এ লেখো
# ← মাথার ভেতরের ছবি কাগজে — নতুন দল-সদস্যও পড়ে বুঝবে

# ── প্রম্পট ৪ · পরের বছরের তলা ──
&gt; আমি এখন ৩০ দরজার মালিক — ৩১-৩৪-এর ওয়ার্কফ্লো ছাড়াও আমার
&gt; পরের অভ্যাস-তলা কী হওয়া উচিত? আমার প্রজেক্ট দেখে
&gt; দুটো বাস্তব প্রস্তাব দাও
# ← শেষ দরজা শেষ নয় — সিংহাসন থেকে নিজের পরের তলা বাছাই

# ── প্রম্পট ৫ · উত্তরণ-শপথ ──
&gt; /loop নয় — একবারের গভীর প্রশ্ন: এই বইয়ের ৩৫ দরজার মধ্যে
&gt; আমি কোনটা আজও রোজ ব্যবহার করি না — তালিকা করো; আগামী
&gt; সপ্তাহে প্রতিদিন একটা করে চালু করার পরিকল্পনা লেখো
# ← জানা ও করা — সিংহাসনের আসল পরীক্ষা এখানেই</pre></div></div>
`,
  senior: {
    title: "স্থপতির পরের শহর — The Next City",
    body: `<p>এই বই শেষ — পথ নয়:</p>
<ul class="checklist">
<li><strong>Book ১৯ (Tool Forge)</strong> — MCP সার্ভার নির্মাণের পূর্ণ শিল্প; দরজা ১৫-এর যন্ত্রশালা সেখানে কারখানা।</li>
<li><strong>Book ১২ (Autonomous Mind)</strong> — এজেন্ট-স্থাপত্যের তত্ত্ব; দরজা ১৭-এর সংবিধানের দর্শন।</li>
<li><strong>Book ১ (Twenty-Seven Doors)</strong> — পুরো AI ইঞ্জিনিয়ারিং শহরের মানচিত্র; এই বই তার এক মহল্লা।</li>
<li>প্রথম আসল কাজ: নিজের কারখানায় একটা ছোট স্কিল → একটা প্লাগইন → নিজের মার্কেটপ্লেস — মোস্তফার সিঁড়ি নিজে ভাঙো।</li>
<li>মাসে একবার অফিসিয়াল ডক + changelog — শহরের আইন বদলায়, স্থপতিকেও খবর রাখতে হয়।</li>
</ul>
<p class="en">Book 62's Twelve-Line Engine (Door 36) fits this whole throne into one twelve-line loop — and teaches you to build it yourself.</p><p><strong>পাশের বই:</strong> Book 62-এর বারো লাইনের ইঞ্জিন (দরজা ৩৬) তোমার এই সিংহাসনের সব যন্ত্র বারো লাইনের loop-এ মেলে — আর সেটা নিজে বানানো শেখায়। <em>(Book 62 · বারো লাইনের ইঞ্জিন)</em></p>`
  }
});
