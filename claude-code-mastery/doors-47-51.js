// ════════════════════════════════════════
// Book 59 v10 · গভীর-কারখানা তলা (47-50) — চার গভীর দরজা
// CLAUDE.md · Skill · Plugin · Agent — from scratch to useful
// + সিংহাসন 51
// ════════════════════════════════════════

// ── DOOR 47 · রহস্যের খাতার গূঢ়-অধ্যায় — The Secret Ledger's Deep Chapter: CLAUDE.md From Scratch ──
doors.push({
  num: 47,
  name: "রহস্যের খাতার গূঢ়-অধ্যায়",
  subtitle: "The Secret Ledger's Deep Chapter",
  icon: "📜",
  color: "#f59e0b",
  tech: "CLAUDE.md Deep Dive — From Blank File to Living Memory",
  spirit: "আমানত — যা বলে না, বই বলে",
  story: `
<p class="bn">দরজা ৩৫-এ তুমি মহাফেজখানার নকশা-খাতা দেখেছিলে — এখন আসল কাজ। রাহেলা খাতুন আবার বসেছেন লেখার টেবিলে, কিন্তু আজ খাতাটা খালি। নতুন করিগর প্রতি সকালে এসে একই প্রশ্ন করে: "মাপ কোনটা? কোন কাঠ? তেল কোথায়?" রাহেলা খাতুন প্রতিদিন মুখে বলেন — আর প্রতিদিন সে ভুলে যায়। একদিন তিনি খাতা খুলে প্রথম লাইন লিখলেন: <strong>"আমার কারখানার নিয়ম — যা একবার বলা হলে আর বলতে হবে না।"</strong></p>
<p class="en">At Door 35 you saw the Archive's blueprint; now comes the real work. Rahela Khatun sits at her writing desk again, but today the ledger is blank. Every morning a new craftsman arrives with the same questions: "Which measurement? Which wood? Where's the oil?" She repeats herself daily, and daily it's forgotten. One day she opens the ledger and writes the first line: <strong>"My workshop's rules — once said, never repeated."</strong></p>

<p class="bn">এই দরজায় তুমি নিজের হাতে একটা CLAUDE.md শূন্য থেকে বানাবে — ধাপে ধাপে, আসল ফাইলে, আসল কারখানায়। শেষে রাহেলা খাতুনের খাতার মতোই তোমার খাতাও নিজে নিজে বাড়বে।</p>
<p class="en">In this door you build a CLAUDE.md from scratch — step by step, in a real file, in a real workshop. By the end, your ledger grows on its own, like Rahela Khatun's.</p>

<h4 class="bn">ধাপ ১ · প্রথম লাইন লেখো</h4>
<p class="bn">খালি প্রজেক্টে <code>claude</code> চালাও। তারপর:</p>
<pre class="code-block">/init</pre>
<p class="bn">ক্লড তোমার কোডবেস পড়ে একটা শুরুর খাতা লিখে দেবে — বিল্ড-কমান্ড, টেস্ট-নির্দেশ, রীতি। আগের খাতা থাকলে মুছবে না — উন্নতির প্রস্তাব দেবে। এটা শুরু মাত্র; আসল খাতা তুমি হাতে লিখবে।</p>
<p class="en">Run <code>/init</code> — Claude reads your codebase and drafts a starting ledger: build commands, test instructions, conventions. If one exists, it suggests improvements instead of overwriting. This is only a draft; the real ledger you write by hand.</p>

<h4 class="bn">ধাপ ২ · কোথায় লিখবে — স্কোপ-সিঁড়ি</h4>
<div class="diagram"><svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="d47a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#f59e0b"/></marker>
  </defs>
  <rect x="180" y="12" width="200" height="34" rx="8" fill="#f59e0b22" stroke="#f59e0b" stroke-width="2"/>
  <text x="280" y="33" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">সংস্থা / Org — IT-দল</text>
  <rect x="180" y="62" width="200" height="34" rx="8" fill="#f59e0b22" stroke="#f59e0b" stroke-width="2"/>
  <text x="280" y="83" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">ব্যবহারকারী / ~/.claude/CLAUDE.md</text>
  <rect x="180" y="112" width="200" height="34" rx="8" fill="#f59e0b33" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="280" y="133" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="700">প্রজেক্ট / ./CLAUDE.md</text>
  <rect x="180" y="162" width="200" height="26" rx="8" fill="#f59e0b1a" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="280" y="179" text-anchor="middle" fill="#f59e0b" font-size="11">./CLAUDE.local.md — শুধু তুমি</text>
  <line x1="280" y1="46" x2="280" y2="60" stroke="#f59e0b" stroke-width="3" marker-end="url(#d47a)"/>
  <line x1="280" y1="96" x2="280" y2="110" stroke="#f59e0b" stroke-width="3" marker-end="url(#d47a)"/>
  <line x1="280" y1="146" x2="280" y2="160" stroke="#f59e0b" stroke-width="3" marker-end="url(#d47a)"/>
  <text x="415" y="40" fill="#94a3b8" font-size="10.5">সংস্থার নীতি — সবার ওপরে</text>
  <text x="415" y="90" fill="#94a3b8" font-size="10.5">তোমার স্বভাব — সব প্রজেক্টে</text>
  <text x="415" y="138" fill="#94a3b8" font-size="10.5">দলের নিয়ম — গিটে শেয়ার</text>
  <text x="415" y="182" fill="#94a3b8" font-size="10.5">তোমার ব্যক্তিগত টীকা — .gitignore</text>
</svg></div>
<p class="bn">সিঁডির নিয়ম: <strong>সবচেয়ে কাছের ফাইল জেতে</strong>। প্রজেক্ট-খাতা ব্যবহারকারী-খাতার সাথে যুক্ত হয় — উপেক্ষা নয়। প্রতিটা স্কোপ নিজের ভূমিকা পালন করে।</p>
<p class="en">Ladder rule: <strong>the nearest file wins</strong> — no wait, they don't fight. Project merges with user scope. Each rung plays its role: org policy on top, your habits across projects, the team's rules in git, your private notes ignored by git.</p>

<h4 class="bn">ধাপ ৩ · কী লিখবে — আর কী নয়</h4>
<p class="bn">রাহেলা খাতুনের পরীক্ষিত নিয়ম:</p>
<pre class="code-block"># লেখো যখন —
✓ ক্লড একই ভুল দ্বিতীয়বার করে
✓ কোড-রিভিউতে ধরা পড়ে যা ক্লডকে আগেই জানা উচিত ছিল
✓ তুমি একই সংশোধন গত সেশনেও টাইপ করেছিলে
✓ নতুন সহকর্মীকেও এটা বুঝিয়ে দিতে হতো

# লিখো না —
✗ ম্যানুয়াল থেকে টের্মি স্টাফ (ls README.md)
✗ প্রতি-সেশনে-দরকার-নয় এমন নিয়ম
✗ পদ্ধতি যা আসলে স্কিলের কাজ (দরজা ৪৮)
✗ মেশিন-পাঠ্য শৈলীর জন্যনা — মানুষের চোখে পড়া চাই না</pre>
<p class="en">Rahela's tested rules: write it when Claude repeats a mistake, when review catches what it should have known, when you typed the same correction last session, when a new teammate would need it too. Don't write: what's derivable from the repo, one-off needs, procedures (those become skills), or dense walls of text.</p>

<h4 class="bn">ধাপ ৪ · জীবন্ত-খাতার ছন্দ</h4>
<pre class="code-block"># LedgerPilot — প্রজেক্ট খাতা (উদাহরণ কাঠামো)

## Commands
- Dev server: \`npm run dev\` (Vue 3 + Vite)
- Tests: \`pytest --cov\` (Django root)
- Migrations: \`python manage.py migrate\`

## Conventions
- Bengali UI strings in \`src/lang/bn.js\` only
- API paths kebab-case, models PascalCase
- Money fields: DecimalField(max_digits=12, decimal_places=2)

## Pitfalls
- \`ledger/models.py\` imports at top — circular import if touched from utils
- MySQL: no JSON_ functions on 5.7 — use .extra() sparingly</pre>
<p class="bn">লক্ষ্য <strong>২০০ লাইনের নিচে</strong>। বড় হলে <code>.claude/rules/</code>-এ পথ-স্কোপড টুকরা করো — নিয়ম শুধু মিলে-যাওয়া ফাইলে লোড হয়। যাচাই: <code>/context</code> → Memory files তালিকায় তোমার খাতা দেখো।</p>
<p class="en">Target under 200 lines. If it grows, split into path-scoped rules under <code>.claude/rules/</code> that load only for matching files. Verify with <code>/context</code> → check the Memory files list.</p>

<h4 class="bn">ধাপ ৫ · খাতা যেন না মরে</h4>
<p class="bn">কথোপকথনে যা বলা হয়, সেশন শেষে মরে। খাতায় লেখা হলে বাঁচে। দুটো অভ্যাস: (১) ক্লডকে বলো <em>"এই নিয়মটা মনে রাখো"</em> — সে প্রস্তাব দেবে খাতায় লিখতে; (২) <code>/memory</code> দিয়ে খাতা খুলে নিজে সম্পাদনা করো — সব প্লেইন মার্কডাউন, তুমি মালিক।</p>
<p class="en">Conversation-only instructions die with the session. Two habits keep the ledger alive: tell Claude to remember a rule, and open the ledger yourself with <code>/memory</code> — it's all plain markdown; you own it.</p>

<h4 class="bn">ধাপ ৬ · খাতা-ডাক্তার</h4>
<pre class="code-block">/doctor</pre>
<p class="bn">খাতা-পরীক্ষক: যা কোডবেস থেকে বের করা যায় (ডিরেক্টরি-লেআউট, ডিপেন্ডেন্সি-তালিকা) কেটে ফেলতে প্রস্তাব দেয়; যা আসলে দরকার (ফাঁদ, রীতি, কারণ) রেখে দেয়। লম্বা খাতা মানে কম মনোযোগ — ক্লড যত বেশি পড়ে, তত কম মানে।</p>
<p class="en">The ledger doctor: proposes cutting what's derivable (layouts, dependency lists) and keeping pitfalls, conventions, rationale. A long ledger means less adherence — the more Claude reads, the less it heeds.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>রাহেলা খাতুনের সতর্কতা:</strong> খাতা নির্দেশ-বই নয় নির্বাহ-আদেশ। ক্লড এগুলোকে পড়ে <em>স্বভাব</em> হিসেবে — কড়া নিয়ম নয়। কঠিন-বাধা দরকার? PreToolUse hook (দরজা ৩৭)। খাতা বলে "ভালোবাসা বোঝায়", hook বলে "এখানে থামবে"।<br><em>The ledger is context, not enforced configuration — it shapes behavior softly. For a hard block, use a hook (Door 37).</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 47</span><pre class="code-block"># ── প্রম্পট ১ · খালি খাতার প্রথম দিন ──
&gt; /init
&gt; # তারপর নিজে যোগ করো: তোমার কারখানার ৩টা অভ্যাস যা ক্লড জানে না
# ← বিল্ড/টেস্ট/রীতি — স্বয়ংক্রিয় খসড়া, হাতে-সংশোধন

# ── প্রম্পট ২ · খাতা-যাচাই ──
&gt; /context
&gt; # Memory files তালিকায় কোন কোন খাতা লোড হলো? প্রতিটার স্কোপ বলো
# ← org → user → project → local — সিঁডির সব ধাপ চোখে দেখা

# ── প্রম্পট ৩ · বার-বার-ভুল খাতায় তোলা ──
&gt; তুমি আবার currency রাউন্ডিং float করেছ — এই প্রজেক্টে টাকা
&gt; সবসময় Decimal। এই নিয়মটা CLAUDE.md-তে যোগ করো
# ← দ্বিতীয় ভুলের মুহূর্তই লেখার সময় — তৃতীয়বার নয়

# ── প্রম্পট ৪ · বড় খাতা ছাঁটা ──
&gt; /doctor
&gt; # খাতার কোন অংশ কোড দেখেই বোঝা যায়, কোনটা আসল ফাঁদ-জ্ঞান?
# ← কাটা → path-scoped rules → মনোযোগ ফেরা

# ── প্রম্পট ৫ · নিয়মের পথ-স্কোপ ──
&gt; .claude/rules/vue.style.md বানাও: frontmatter paths:
&gt; ["src/**/*.vue"] — শুধু Vue ফাইলে লোড হবে এমন নিয়ম
# ← সিঁডির সবচেয়ে নিচে নতুন তলা — নিয়ম যার যার জায়গায়</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৪৭ — তালিসমান</div><div class="text">📜 খাতা মনে রাখে, আদেশ করে না।<br><small>একই কথা দ্বিতীয়বার বলতে হলে — খাতায় লেখার সময়। লেখা হলে সেশান শেষ হলেও নিয়ম বাঁচে। জায়গা-সিঁডি: org → user → project → local; নিয়ম-সিঁডি: নির্দেশ → স্কিল → হুক।</small></div></div>`,
  senior: {
    title: "যা ডক বলে — আর যা অভিজ্ঞতা যোগ করে",
    body: `<p class="bn">অফিসিয়াল নির্দেশিকার সার: (১) লোডের ক্রম org → user → project → local — প্রত্যেকটা পরেরটার <em>সাথে</em> যুক্ত হয়, প্রতিস্থাপন নয়; (২) লক্ষ্য ২০০ লাইনের নিচে — লম্বা খাতা কম মানে; (৩) 4 MiB-র ওপরে ফাইল একেবারে স্কিপ; (৪) <code>/compact</code>-এর পরেও প্রজেক্ট-রুটের খাতা ডিস্ক থেকে আবার পড়া হয় — নেস্টেড খাতা ফাইল-পড়ার সময় রিলোড হয়; (৫) যা প্রতি সেশনে লাগে না তা স্কিল বা path-scoped rule-এর কাজ।</p>
<p class="en">The official guidance in brief: load order is org → user → project → local, each merging with (not replacing) the next; target under 200 lines — longer files reduce adherence; files over 4 MiB are skipped entirely; the project-root ledger survives /compact by re-reading from disk; anything not needed every session belongs in a skill or path-scoped rule.</p>
<p class="bn">আর কারিগর-অভিজ্ঞতা: খাতার সবচেয়ে দামি অংশ ফাঁদ-অংশ — "এখানে শুধু বলে দিলাম, কারণ কোড দেখে বোঝা যায় না।" সেগুলোই সম্পাদনার সময় কয়েক ঘণ্টা বাঁচায়।</p>`
  },
  recall: {
    q: "ক্লড তৃতীয়বার একই ভুল করছে। কী করবে — আবার চ্যাটে বলবে, না কিছু অন্য কিছু?",
    qen: "Claude makes the same mistake a third time. Do you tell it in chat again, or something else?",
    a: "খাতায় লেখো (CLAUDE.md)। চ্যাটে বলা নিয়ম সেশন শেষে মরে; খাতার নিয়ম প্রতি সেশনে লোড হয়। ভুল দ্বিতীয়বার হওয়ার মুহূর্তেই লেখার সময় এসেছে।",
    aen: "Write it in the ledger. Chat rules die with the session; ledger rules load every session. The second occurrence is your signal to write."
  }
});

// ── DOOR 48 · তালিমনামার কারখানা — The Training-Scroll Workshop: Skills From Scratch ──
doors.push({
  num: 48,
  name: "তালিমনামার কারখানা",
  subtitle: "The Training-Scroll Workshop",
  icon: "🎽",
  color: "#10b981",
  tech: "Skills Deep Dive — From Blank Folder to /command",
  spirit: "মুহতাদি — যাকে যতটুকু, তাকে ততটুকু",
  story: `
<p class="bn">দরজা ১০-এ মরিয়ম তোমাকে দেখিয়েছিলেন দক্ষতার বাক্স — এখন তাঁর কারখানায় ঢোকো, যেখানে বাক্স বানানো হয়। শহরের মোড়ল প্রতি মাসে একই অনুষ্ঠান করেন: নতুন করিগর এলে তাকে বসিয়ে একই তালিম দেন — একই কথা, একই ক্রমে, একই সতর্কতা। মরিয়ম বললেন: "তুমি প্রতি মাসে মুখে বলো — আমি একবার লিখে দিই।" প্রথম তালিমনামা লেখা হলো। তারপর থেকে মোড়ল শুধু বলেন: <strong>"তালিমনামা-৩ ধরো।"</strong> এক লাইনে যা আগে এক ঘণ্টা লাগতো।</p>
<p class="en">At Door 10 Maryam showed you the skill chest; now enter her workshop where chests are made. The town elder runs the same induction every month: same words, same order, same warnings. Maryam said: "You speak it monthly — let me write it once." The first training scroll was written. Since then the elder just says: <strong>"Take scroll-3."</strong> One line replaces an hour.</p>

<p class="bn">এই দরজায় তুমি নিজের তালিমনামা বানাবে — খালি ফোল্ডার থেকে <code>/আদেশ</code> পর্যন্ত।</p>
<p class="en">In this door you forge your own training scroll — from an empty folder to a working <code>/command</code>.</p>

<h4 class="bn">ধাপ ১ · কখন তালিমনামা, কখন খাতা</h4>
<div class="diagram"><svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="d48a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#10b981"/></marker>
  </defs>
  <rect x="30" y="30" width="220" height="150" rx="10" fill="#f59e0b1a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="140" y="55" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">খাতা / CLAUDE.md</text>
  <text x="140" y="78" text-anchor="middle" fill="#94a3b8" font-size="10.5">প্রতি সেশনে লোড হয়</text>
  <text x="140" y="96" text-anchor="middle" fill="#94a3b8" font-size="10.5">সংক্ষিপ্ত সত্য — কম টোকেন</text>
  <text x="140" y="118" text-anchor="middle" fill="#94a3b8" font-size="10.5">কী জানা দরকার</text>
  <text x="140" y="140" text-anchor="middle" fill="#94a3b8" font-size="10.5">"টাকা = Decimal"</text>
  <text x="140" y="162" text-anchor="middle" fill="#64748b" font-size="10">→ দরজা ৪৭</text>
  <rect x="310" y="30" width="220" height="150" rx="10" fill="#10b9811a" stroke="#10b981" stroke-width="2"/>
  <text x="420" y="55" text-anchor="middle" fill="#10b981" font-size="13" font-weight="700">তালিমনামা / Skill</text>
  <text x="420" y="78" text-anchor="middle" fill="#94a3b8" font-size="10.5">ব্যবহারের সময়ে লোড</text>
  <text x="420" y="96" text-anchor="middle" fill="#94a3b8" font-size="10.5">দীর্ঘ পদ্ধতি — যতখুশি লম্বা</text>
  <text x="420" y="118" text-anchor="middle" fill="#94a3b8" font-size="10.5">কীভাবে করা হয়</text>
  <text x="420" y="140" text-anchor="middle" fill="#94a3b8" font-size="10.5">"রিলিজ করার ৯ ধাপ"</text>
  <text x="420" y="162" text-anchor="middle" fill="#64748b" font-size="10">→ এই দরজা</text>
  <line x1="251" y1="105" x2="309" y2="105" stroke="#10b981" stroke-width="3" marker-end="url(#d48a)"/>
  <text x="280" y="92" text-anchor="middle" fill="#10b981" font-size="10">যখন পদ্ধতি</text>
  <text x="280" y="126" text-anchor="middle" fill="#64748b" font-size="10">হয়ে ওঠে</text>
</svg></div>
<p class="bn">সংকেত: CLAUDE.md-র কোনো অংশ "কীভাবে-করা-হয়"-এ পরিণত হলে (ধাপ, চেকলিস্ট, একই-প্রম্পট-বারবার) — সেটা তালিমনামার জন্ম। খাতা থেকে সরিয়ে স্কিলে পাঠাও।</p>
<p class="en">The signal: when a CLAUDE.md section turns into a how-to (steps, checklists, the same prompt pasted repeatedly) — that's a skill being born. Move it out of the ledger into a scroll.</p>

<h4 class="bn">ধাপ ২ · প্রথম তালিমনামা — ছয় লাইনে</h4>
<pre class="code-block">mkdir -p ~/.claude/skills/summarize-changes</pre>
<p class="bn">তারপর <code>~/.claude/skills/summarize-changes/SKILL.md</code> লেখো:</p>
<pre class="code-block">---
description: Summarizes uncommitted changes and flags anything risky.
  Use when the user asks what changed, wants a commit message,
  or asks to review their diff.
---

## Current changes

!\`git diff HEAD\`

## Instructions

Summarize the changes above in two or three bullet points, then list
any risks you notice such as missing error handling, hardcoded values,
or tests that need updating. If the diff is empty, say there are no
uncommitted changes.</pre>
<p class="bn">ফাইলটা তিনটা জিনিস জানে: <strong>কে লিখল</strong> (frontmatter-বিভাগ), <strong>কখন ব্যবহার</strong> (description), <strong>কী করবে</strong> (বডি)। <code>!\`git diff HEAD\`</code> লাইনটা জাদুর — ক্লড কোড স্কিল পড়ার আগেই কমান্ডটা চালিয়ে আসল diff ঢুকিয়ে দেয় (dynamic context injection)। তারপর যেকোনো গিট-প্রজেক্টে <code>claude</code> খুলে লেখো: <code>/summarize-changes</code> — বা শুধু জিজ্ঞেস করো "What did I change?" — বর্ণনা মিললে ক্লড নিজেই ডাকবে।</p>
<p class="en">The file knows three things: who wrote it (frontmatter), when to use it (description), what to do (body). The <code>!\`git diff HEAD\`</code> line is the magic — Claude Code runs the command and inlines the real diff before Claude even reads the skill. Then in any git project run <code>claude</code> and type <code>/summarize-changes</code> — or just ask "What did I change?" and Claude loads it from the description alone.</p>

<h4 class="bn">ধাপ ৩ · কোথায় রাখবে — তিন স্তর</h4>
<pre class="code-block">~/.claude/skills/&lt;name&gt;/SKILL.md     # ব্যক্তিগত — সব প্রজেক্টে
./.claude/skills/&lt;name&gt;/SKILL.md    # প্রজেক্ট — দলের সবাই (গিটে)
প্লাগইনের skills/&lt;name&gt;/SKILL.md    # বিতরণযোগ্য (দরজা ৪৯)</pre>
<p class="bn">ফোল্ডারের নামই কমান্ড: <code>summarize-changes/</code> → <code>/summarize-changes</code>। পাশে সহায়ক ফাইল রাখতে পারো — scripts/, templates/, references/ — বডি যখন দরকার তখনই পড়ে।</p>
<p class="en">The folder name is the command: <code>summarize-changes/</code> → <code>/summarize-changes</code>. Supporting files (scripts, templates, references) ride along and load only when the body says so.</p>

<h4 class="bn">ধাপ ৪ · কে ডাকবে — অনুমতি-নিয়ন্ত্রণ</h4>
<pre class="code-block">---
description: ...
disable-model-invocation: true   # শুধু তুমি /command দিলে চলবে
---</pre>
<p class="bn">ডিফল্টে ক্লড নিজেও ডাকতে পারে (বর্ণনা মিললে), আর তুমিও। বিপজ্জনক বা দীর্ঘ স্কিল <code>disable-model-invocation: true</code> করো — নিয়ন্ত্রণ তোমার হাতে থাকবে।</p>
<p class="en">By default both Claude and you can invoke. For dangerous or long skills set <code>disable-model-invocation: true</code> to keep the trigger in your hands.</p>

<h4 class="bn">ধাপ ৫ · স্কিল-ডাক্তার</h4>
<pre class="code-block">/skill-doctor   # কোন স্কিল ব্যবহার হয়নি, কোনটা বড় — তালিকা কেটে টোকেন বাঁচাও</pre>
<p class="bn">সব স্কিলের বর্ণনা প্রতি সেশনে তালিকা হিসেবে লোড হয় — একটা বাজেটের ভেতরে। বর্ণনা ছাঁটো, নাম-মাত্র রাখো, বা অব্যবহৃত সরাও। প্রতিটা এন্ট্রির সীমা ১৫৩৬ অক্ষর — মূল ব্যবহার-কেস আগে লেখো।</p>
<p class="en">Every skill's description loads as a listing each session, inside a budget. Trim descriptions, demote to name-only, or remove unused. Each entry caps at 1,536 chars — lead with the key use case.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>মরিয়মের সতর্কতা:</strong> তালিমনামা স্ক্রল-কবজা নয় — পড়ার খাতা। ক্লড স্কিলের নির্দেশ <em>মেনে</em> চলে ভালোবাসা দিয়ে, ভয় দেখিয়ে নয়। কঠিন-বাধা চাইলে hook (দরজা ৩৭)। আর পুরনো <code>.claude/commands/</code> ফাইল ভাঙবে না — স্কিলের সাথে একইভাবে কাজ করে, স্কিল শুধু বেশি সরঞ্জাম দেয়।<br><em>Skills are guidance, not enforcement. Old .claude/commands/ files keep working; skills just add superpowers.</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 48</span><pre class="code-block"># ── প্রম্পট ১ · প্রথম তালিমনামার জন্ম ──
&gt; আমি প্রতি সপ্তাহে একই release-checklist টাইপ করি। সেটাকে
&gt; একটা স্কিল বানাও — SKILL.md লিখে দাও, যেখানে ব্যবহারের
&gt; শর্ত description-এ থাকবে
# ← বার-বার-টাইপ = স্কিলের জন্ম-সংকেত

# ── প্রম্পট ২ · জাদু-লাইন পরীক্ষা ──
&gt; স্কিলের ভেতরে !\`git diff HEAD\` লাইনটা কী করে? আর কোন
&gt; কমান্ডগুলো এভাবে চালানো যায়?
# ← ডায়নামিক-ইনজেকশন: পড়ার আগেই আসল আউটপুট ভেতরে

# ── প্রম্পট ৩ · স্কিল-ডাক্তার ──
&gt; /skill-doctor
&gt; # কোন স্কিল অব্যবহৃত, কোনটার বর্ণনা লম্বা?
# ← তালিকা-বাজেট: প্রতি সেশনের নীরব খরচ

# ── প্রম্পট ৪ · শুধু-আমার-অনুমতি ──
&gt; এই স্কিলে disable-model-invocation: true বসাও — আমি
&gt; ছাড়া কেউ যেন না চালায়
# ← ট্রিগার-মালিকানা: স্বয়ংক্রিয় থেকে ম্যানুয়াল

# ── প্রম্পট ৫ · তালিমনামা পরখ ──
&gt; /my-release-skill
&gt; # আদেশ দিয়ে দেখো: ধাপগুলো ঠিক ক্রমে এলো? ফাঁক আছে?
# ← স্কিলও কোড — চালিয়ে, দেখে, শাণিত করো</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৪৮ — তালিসমান</div><div class="text">🎽 বার-বার লেখা = তালিমনামার জন্ম-সংকেত।<br><small>যা মুখে বারবার বলতে হয় তা লিখে ফেলো — SKILL.md। ফোল্ডারের নাম কমান্ড, description ডাক-বাহক, বডি কেবল ব্যবহারের মুহূর্তে লোড হয়। খাতা = সত্য; তালিমনামা = পদ্ধতি।</small></div></div>`,
  senior: {
    title: "যা ডক বলে — আর যা অভিজ্ঞতা যোগ করে",
    body: `<p class="bn">অফিসিয়াল সার: (১) কাস্টম কমান্ড স্কিলে একীভূত — <code>.claude/commands/deploy.md</code> আর <code>.claude/skills/deploy/SKILL.md</code> একই <code>/deploy</code> বানায়, পুরনোগুলো চলতে থাকে; (২) স্কিল Agent Skills মানক মেনে চলে — একাধিক AI টুলে চলে; (৩) বান্ডেলড স্কিল (<code>/doctor</code>, <code>/debug</code>, <code>/loop</code>, <code>/code-review</code>, <code>/batch</code>) প্রম্পট-ভিত্তিক; (৪) <code>/run</code> + <code>/verify</code> + <code>/run-skill-generator</code> তিন ভাই — জেনারেটর একবার চালিয়ে প্রজেক্টের চালানোর-রেসিপি স্কিল হিসেবে কমিট করে রাখে; (৫) তালিকা-বাজেট আছে — <code>skillListingBudgetFraction</code> সেটিং/বর্ণনা ছাঁটা।</p>
<p class="en">Official summary: custom commands merged into skills (old paths keep working); skills follow the Agent Skills open standard across AI tools; bundled skills like /doctor and /debug are prompt-based; the /run + /verify + /run-skill-generator trio records your project's launch recipe as a committed skill; and the listing budget trims what every session pays.</p>
<p class="bn">কারিগর-অভিজ্ঞতা: স্কিলের description-ই তার ভাগ্য লেখে — অস্পষ্ট বর্ণনার স্কিল কখনো ডাকা পড়ে না, আর প্রচুর-বিস্তারিত বর্ণনা প্রতি সেশনে বিল বাড়ায়। এক লাইনে "কে কখন ডাকবে" লেখো, বাকিটা বডিতে।</p>`
  },
  recall: {
    q: "তোমার release-checklist এখন CLAUDE.md-তে ৩০ লাইন জায়গা খাচ্ছে, মাসে একবার দরকার। কোথায় নেবে?",
    qen: "Your release checklist sits in CLAUDE.md taking 30 lines, needed monthly. Where does it go?",
    a: "স্কিলে — .claude/skills/release/SKILL.md। ব্যবহারের মুহূর্তেই লোড হবে, বাকি সময় শূন্য টোকেন। খাতা থেকে মুছে দাও।",
    aen: "Into a skill. It loads only when invoked; the ledger stops paying for it daily."
  }
});

// ── DOOR 49 · মোহল্লার প্যাকেজ-ঘর — The Neighborhood Package House: Plugins From Scratch ──
doors.push({
  num: 49,
  name: "মোহল্লার প্যাকেজ-ঘর",
  subtitle: "The Neighborhood Package House",
  icon: "📦",
  color: "#8b5cf6",
  tech: "Plugins Deep Dive — From Empty Directory to Installable Package",
  spirit: "ইহসান — যা বানাও, অন্যকে দাও",
  spiritEn: "",
  story: `
<p class="bn">দরজা ১৬-তে হেডমাস্টার প্লাগইন-বাক্স দেখিয়েছিলেন — এখন তাঁর প্যাকেজ-ঘরে ঢোকো। কামরুল মিয়া মোহল্লার মুদি-দোকানে সব রাখেন না — তিনি <strong>প্যাকেজ</strong> বানান: চাল-ডাল-তেল-মসলা এক বান্ডেলে, নাম-লেখা কাগজে, দাম-তালিকাসহ। যে নেয়, সে জানে ভেতরে কী, কে বানিয়েছে, কোন সংস্করণ। মোহল্লার দশটা পরিবার আলাদা আলাদা বাজার করতো — এখন এক প্যাকেজে। কামরুল মিয়ার কথা: <strong>"জিনিস ভালো হলে একা রেখো না — মুড়িয়ে দাও।"</strong></p>
<p class="en">At Door 16 the Headmaster showed the plugin chest; now enter his package house. Kamrul Miah at the corner shop doesn't stock loose items — he builds <strong>packages</strong>: rice-lentils-oil-spices in one bundle, labeled, priced, versioned. Ten families that shopped separately now take one package. His rule: <strong>"If a thing is good, don't keep it alone — wrap it up for others."</strong></p>

<p class="bn">এই দরজায় তুমি একটা প্লাগইন শূন্য থেকে বানাবে — ম্যানিফেস্ট থেকে ইনস্টল-পর্যন্ত — যেটা স্কিল, এজেন্ট, হুক, MCP সব একসাথে বহন করতে পারে।</p>
<p class="en">In this door you build a plugin from zero — manifest to install — one bundle that can carry skills, agents, hooks, and MCP servers together.</p>

<h4 class="bn">ধাপ ১ · কেন প্যাকেজ — না কেন ঢিলে ফাইল</h4>
<div class="diagram"><svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="d49a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#8b5cf6"/></marker>
  </defs>
  <rect x="30" y="30" width="200" height="115" rx="10" fill="#64748b1a" stroke="#64748b" stroke-width="1.5"/>
  <text x="130" y="55" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="700">.claude/ ঢিলে-ফাইল</text>
  <text x="130" y="80" text-anchor="middle" fill="#64748b" font-size="10.5">এক প্রজেক্টেই</text>
  <text x="130" y="98" text-anchor="middle" fill="#64748b" font-size="10.5">কপি করে শেয়ার</text>
  <text x="130" y="116" text-anchor="middle" fill="#64748b" font-size="10.5">/deploy</text>
  <rect x="330" y="30" width="200" height="115" rx="10" fill="#8b5cf61a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="430" y="55" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="700">প্লাগইন-প্যাকেজ</text>
  <text x="430" y="80" text-anchor="middle" fill="#94a3b8" font-size="10.5">বিতরণযোগ্য — মার্কেটপ্লেস</text>
  <text x="430" y="98" text-anchor="middle" fill="#94a3b8" font-size="10.5">সংস্করণ-সংখ্যাসহ আপডেট</text>
  <text x="430" y="116" text-anchor="middle" fill="#94a3b8" font-size="10.5">/ledger-tools:deploy</text>
  <line x1="230" y1="87" x2="330" y2="87" stroke="#8b5cf6" stroke-width="3" marker-end="url(#d49a)"/>
  <text x="280" y="74" text-anchor="middle" fill="#8b5cf6" font-size="10">যখন ২+ প্রজেক্ট/মানুষ</text>
</svg></div>
<p class="bn">শুরু করো ঢিলে-ফাইলে (<code>.claude/</code>) — দ্রুত, ব্যক্তিগত। যখন দুইয়ের বেশি প্রজেক্ট বা মানুষ একই জিনিস চায় — প্যাকেজে মুড়াও।</p>
<p class="en">Start loose (<code>.claude/</code>) — fast, personal. When two-plus projects or people want the same thing — wrap it into a package.</p>

<h4 class="bn">ধাপ ২ · প্যাকেজের কাঠামো হাতে-ধরা</h4>
<pre class="code-block">my-first-plugin/
├── .claude-plugin/
│   └── plugin.json      ← জন্ম-সনদ: নাম, বর্ণনা, সংস্করণ
├── skills/
│   └── hello/
│       └── SKILL.md     ← /my-first-plugin:hello
├── agents/
│   └── reviewer.md      ← নিজস্ব সাব-এজেন্ট
├── hooks/
│   └── hooks.json       ← ঘটনা-নাজির
└── .mcp.json            ← টুল-সার্ভার (ঐচ্ছিক)</pre>
<p class="bn">চার ভাঙ্গনের প্রতিটা ঐচ্ছিক — শুধু স্কিল নিয়েও প্লাগইন হয়। কিন্তু <code>plugin.json</code> লাগবেই: নাম-ই নেমস্পেস (<code>/my-first-plugin:hello</code>), সংস্করণ-ই আপডেট-ট্রিগার।</p>
<p class="en">Every compartment is optional — a plugin can be skills alone. But <code>plugin.json</code> is mandatory: the name is the namespace, the version gates updates.</p>

<h4 class="bn">ধাপ ৩ · জন্ম-সনদ লেখা</h4>
<pre class="code-block">{
  "name": "my-first-plugin",
  "description": "A greeting plugin to learn the basics",
  "version": "1.0.0",
  "author": { "name": "Your Name" }
}</pre>
<p class="bn">তারপর প্রথম স্কিল — <code>my-first-plugin/skills/hello/SKILL.md</code>:</p>
<pre class="code-block">---
description: Greet the user with a friendly message
disable-model-invocation: true
---

Greet the user warmly and ask how you can help them today.</pre>

<h4 class="bn">ধাপ ৪ · পরখ — plugin-dir দিয়ে</h4>
<pre class="code-block">claude --plugin-dir ./my-first-plugin
/my-first-plugin:hello</pre>
<p class="bn">ক্লড উষ্ণভাবে জিজ্ঞেস করবে। <code>/help</code> → Custom commands ট্যাবে নেমস্পেসের নিচে তালিকা দেখো। ইনস্টল না-করেই পরখ — এটাই <code>--plugin-dir</code>-এর কাজ।</p>
<p class="en">Claude greets warmly. Check <code>/help</code> → Custom commands for the namespaced listing. Test-driving without installing is what <code>--plugin-dir</code> is for.</p>

<h4 class="bn">ধাপ ৫ · ইনস্টল-যোগ্য করা — মার্কেটপ্লেস</h4>
<p class="bn">প্যাকেজ গিট-রেপোতে রাখো; <code>/plugin marketplace add &lt;user&gt;/&lt;repo&gt;</code> দিয়ে যে-কেউ যোগ করবে; <code>/plugin install my-first-plugin@&lt;marketplace&gt;</code> দিয়ে নেবে। সংস্করণ বাড়ালেই আপডেট ছড়ায়।</p>
<p class="en">Put the package in a git repo; anyone adds it with <code>/plugin marketplace add &lt;user&gt;/&lt;repo&gt;</code> and installs with <code>/plugin install my-first-plugin@&lt;marketplace&gt;</code>. Bump the version to propagate updates.</p>

<h4 class="bn">ধাপ ৬ · ঢিলে থেকে প্যাকেজে স্থানান্তর</h4>
<pre class="code-block"># কোথায় কী যায়:
.claude/commands/*.md  →  plugin/commands/
.claude/skills/*/      →  plugin/skills/*/
settings.json-এর hooks →  plugin/hooks/hooks.json
.claude/agents/*.md    →  plugin/agents/*.md
# স্থানান্তরের পর পুরনোগুলো মুছো — ডুপ্লিকেট এড়াতে</pre>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>কামরুল মিয়ার সতর্কতা:</strong> প্যাকেজ বানানোর আগে ঢিলে-ফাইলে পাকা করো। অর্ধেক-পাকা জিনিস মুড়িয়ে দশ পরিবারকে দিলে দশটা সমস্যা। প্রথমে এক প্রজেক্টে চালাও, তারপর দ্বিতীয়টায়, তারপর প্যাকেজ। আর প্লাগইন-স্কিল নেমস্পেসড (<code>/plugin:skill</code>) — পুরনো <code>/skill</code>-এর সাথে দুটোই থেকে যায়, একটা আরেকটাকে ঢেকে দেয় না।<br><em>Ripen loose files first; package what's proven. Plugin skills are namespaced and coexist with originals.</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 49</span><pre class="code-block"># ── প্রম্পট ১ · প্যাকেজের জন্ম ──
&gt; আমার .claude/-এ ৩টা স্কিল আর ১টা হুক পাকা হয়েছে। এগুলো দিয়ে
&gt; একটা প্লাগইন বানাও — ম্যানিফেস্ট, ফোল্ডার-কাঠামো, স্থানান্তর-নকশা
# ← ঢিলে → প্যাকেজ: প্রমাণিত জিনিসই মোড়াও

# ── প্রম্পট ২ · পরখ-চালনা ──
$ claude --plugin-dir ./my-first-plugin
&gt; /my-first-plugin:hello
&gt; # কাজ করল? /help-এর Custom commands-এ দেখা যাচ্ছে?
# ← ইনস্টল-বিহীন টেস্ট-ড্রাইভ — মার্কেটপ্লেসে ওঠার আগে

# ── প্রম্পট ৩ · নেমস্পেস-বোধ ──
&gt; প্লাগইন-স্কিল কেন /name:skill হয়? দুটো প্লাগইনে একই নামের
&gt; স্কিল থাকলে কী হয়?
# ← নাম-সংঘর্ষের প্রতিষেধক — মোহল্লার বাড়ি-নম্বর

# ── প্রম্পট ৪ · আপডেট-ঢেউ ──
&gt; প্লাগইনের কোন ফিল্ড বাড়ালে ব্যবহারকারীরা আপডেট পায়?
&gt; সংস্করণ-নিয়ম ব্যাখ্যা করো
# ← version-ই ঢেউ — না বাড়ালে পুরনোই থাকে

# ── প্রম্পট ৫ · দলের মার্কেটপ্লেস ──
&gt; /plugin marketplace add our-org/claude-tools
&gt; # দলের সবাই কীভাবে একই প্লাগইন-সেট পাবে — ধাপগুলো বলো
# ← রেপো-মার্কেটপ্লেস: দলের সাধারণ প্যাকেজ-ঘর</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৪৯ — তালিসমান</div><div class="text">📦 যা পাকা, তা-ই মোড়াও।<br><small>প্লাগইন = স্কিল+এজেন্ট+হুক+MCP এক বান্ডেলে, plugin.json-নামে-নেমস্পেসে, সংস্করণে-আপডেটে। ঢিলে-ফাইলে পাকা করো → প্যাকেজে মুড়াও → মার্কেটপ্লেসে ছাড়ো।</small></div></div>`,
  senior: {
    title: "যা ডক বলে — আর যা অভিজ্ঞতা যোগ করে",
    body: `<p class="bn">অফিসিয়াল সার: (১) প্লাগইন = স্বয়ংসম্পূর্ণ ডিরেক্টরি — skills/agents/hooks/.mcp.json + <code>.claude-plugin/plugin.json</code> ম্যানিফেস্ট; (২) <code>--plugin-dir</code> দিয়ে ইনস্টল-ছাড়া পরখ; (৩) skill নেমস্পেসড <code>/plugin-name:skill-name</code>; (৪) সংস্করণ বাড়ালে আপডেট যায় (command-source বা in-place লোড ছাড়া); (৫) স্থানান্তর-ম্যাপ: commands→plugin/commands, hooks→hooks/hooks.json, agents→plugin/agents; (৬) স্থানান্তরের পর পুরনো মুছতে হয় — project/user agents একই নামে plugin-agent-কে ঢেকে দেয়।</p>
<p class="en">Official summary: a plugin is a self-contained directory (skills/agents/hooks/MCP + .claude-plugin/plugin.json manifest); --plugin-dir test-drives without install; skills are namespaced /plugin:skill; version bumps propagate updates; the migration map moves commands/hooks/agents into the bundle; and after migrating, delete originals — same-named project agents override plugin agents.</p>
<p class="bn">কারিগর-অভিজ্ঞতা: প্লাগইনের আসল মূল্য সংস্করণ-শৃঙ্খলায় — দশজনের হাতে একই প্যাকেজ, একই আপডেট। মার্কেটপ্লেস ছাড়া শুধু গিট-রেপো দিয়েও দল চালানো যায়; মার্কেটপ্লেস শুধু আবিষ্কার সহজ করে।</p>`
  },
  recall: {
    q: "তোমার ৪ প্রজেক্টে একই ৩টা স্কিল কপি-পেস্ট করা আছে। চতুর্থবার কপি করার বদলে কী করবে?",
    qen: "The same 3 skills are copy-pasted across your 4 projects. Instead of a fourth copy, what do you do?",
    a: "প্লাগইন বানাবে — এক গিট-রেপোতে, সংস্করণসহ। চার প্রজেক্টে /plugin install — আপডেট এক জায়গা থেকে ছড়াবে।",
    aen: "Build a plugin: one git repo, one version. Install everywhere; update once."
  }
});

// ── DOOR 50 · কারিগর-দলের উস্তাদ-ঘর — The Craft-Team Foreman's Room: Subagents From Scratch ──
doors.push({
  num: 50,
  name: "কারিগর-দলের উস্তাদ-ঘর",
  subtitle: "The Craft-Team Foreman's Room",
  icon: "🧑‍🏭",
  color: "#06b6d4",
  tech: "Subagents Deep Dive — From Blank .md to a Specialist Who Reports Back",
  spirit: "তাকলিদ — বিশ্বাস করে অর্পণ",
  story: `
<p class="bn">দরজা ২৫-এ আড়তদারের দালাল দেখেছিলে — এখন দালালের পেছনের ঘরে, যেখানে <strong>উস্তাদ-নিয়োগ</strong> হয়। ইদ্রিস মাস্টার বড় ঠিকাদার; তাঁর নিয়ম: প্রতিটা কাজে একজন মালিক। দেয়ালের কাজ হলে রাজু-মিস্ত্রি, বৈদ্যুতিক হলে জহির-মিস্ত্রি, রং হলে মিতু-উস্তাদ। প্রত্যেকে নিজের টুলবক্স আনে, নিজের সহকারী আনে, কাজ শেষে <strong>এক পাতার রিপোর্ট</strong> দিয়ে যায়। ইদ্রিস মাস্টার কখনো নিজে দেয়ালে মাটি মাখান না — তিনি শুধু জানেন <strong>কাকে ডাকবেন, কী বলবেন, কী ফেরত চান</strong>।</p>
<p class="en">At Door 25 you met the broker; now step into the back room where <strong>foremen are hired</strong>. Idris Master is a big contractor; his rule: every job has one owner. Walls → Raju, wiring → Zahir, paint → Mitu. Each brings their own toolbox, their own helpers, and returns a <strong>one-page report</strong>. Idris never touches the mud himself — he only knows <strong>whom to call, what to say, and what he wants back</strong>.</p>

<p class="bn">এই দরজায় তুমি নিজের উস্তাদ-ফাইল লিখবে — খালি <code>.md</code> থেকে এমন একজন, যে নিজের জানালায় কাজ করে শুধু সারাংশ ফেরায়।</p>
<p class="en">In this door you write your own foreman file — from a blank <code>.md</code> to a specialist who works in their own window and returns only the summary.</p>

<h4 class="bn">ধাপ ১ · কেন উস্তাদ — মূল তিন লাভ</h4>
<div class="diagram"><svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="40" width="150" height="80" rx="10" fill="#06b6d41a" stroke="#06b6d4" stroke-width="2"/>
  <text x="105" y="70" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="700">জানালা বাঁচে</text>
  <text x="105" y="90" text-anchor="middle" fill="#94a3b8" font-size="10">খোঁজ-টার্মিনাল-লগ</text>
  <text x="105" y="106" text-anchor="middle" fill="#94a3b8" font-size="10">মূল টেবিলে নয়</text>
  <rect x="205" y="40" width="150" height="80" rx="10" fill="#06b6d41a" stroke="#06b6d4" stroke-width="2"/>
  <text x="280" y="70" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="700">হাতিয়ার-বাঁধন</text>
  <text x="280" y="90" text-anchor="middle" fill="#94a3b8" font-size="10">শুধু দরকারি টুল</text>
  <text x="280" y="106" text-anchor="middle" fill="#94a3b8" font-size="10">read-only জোর করে</text>
  <rect x="380" y="40" width="150" height="80" rx="10" fill="#06b6d41a" stroke="#06b6d4" stroke-width="2"/>
  <text x="455" y="70" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="700">দাম-নিয়ন্ত্রণ</text>
  <text x="455" y="90" text-anchor="middle" fill="#94a3b8" font-size="10">সস্তা মডেলে পাঠাও</text>
  <text x="455" y="106" text-anchor="middle" fill="#94a3b8" font-size="10">যেমন Haiku-তে</text>
</svg></div>
<p class="bn">চতুর্থ লাভ ডকে নেই কিন্তু অভিজ্ঞতায় বড়: <strong>নিজস্ব নির্দেশিকা</strong> — উস্তাদ-ফাইলের system-প্রম্পট শুধু তার, মূল কথোপকথন দূষিত করে না।</p>
<p class="en">A fourth gain the docs underplay: <strong>a private instruction set</strong> — the foreman's system prompt belongs to them alone and never pollutes your main conversation.</p>

<h4 class="bn">ধাপ ২ · প্রথম উস্তাদ-ফাইল — আদি-শূন্য থেকে</h4>
<pre class="code-block">mkdir -p .claude/agents
# ফাইল: .claude/agents/api-auditor.md</pre>
<pre class="code-block">---
name: api-auditor
description: Audits REST endpoints for auth gaps, missing validation,
  and inconsistent error shapes. Use when reviewing API code or
  before merging endpoint changes.
tools: Read, Grep, Glob    # শুধু পড়া — লেখা নয়
model: sonnet              # অডিট = গভীর কিন্তু Opus নয়
---

You are an API security auditor for a Django + DRF codebase.

## Method
1. Read the endpoint code under review.
2. Grep for permission_classes, authentication_classes, serializer validation.
3. Flag: missing auth, unvalidated input, leaked internals in error responses.

## Report format (one page max)
- Finding: [severity] one-line title
- Evidence: file:line
- Fix: one sentence</pre>
<p class="bn">ফাইলটা চারটা সিদ্ধান্ত: <strong>নাম</strong> (ডাকতে), <strong>বর্ণনা</strong> (ক্লড পড়ে ঠিক সময়ে ডাকবে — এটাই তার ভাগ্যলেখা), <strong>টুল</strong> (যা-ই দাও তা-ই সে পাবে), <strong>সিস্টেম-প্রম্পট</strong> (তার পদ্ধতি আর রিপোর্টের ছাঁচ)। যাচাই: সেশনে <code>/context</code> → agents তালিকায় নামটা দেখো; তারপর শুধু বলো <em>"api-auditor-কে দাও files/views.py ধরতে"</em> — ক্লড নিজেই ডাকবে।</p>
<p class="en">The file is four decisions: name (to call), description (Claude reads it to decide when — this is its destiny), tools (what you grant is all it gets), system prompt (its method and report shape). Verify: <code>/context</code> shows it under agents; then say "have api-auditor review files/views.py" — Claude delegates on its own.</p>

<h4 class="bn">ধাপ ৩ · বর্ণনাই ভাগ্য — লেখার কারিগরি</h4>
<p class="bn">ক্লড <em>বর্ণনা পড়ে</em> ঠিক করে কাকে ডাকবে। তিন নিয়ম: (১) কেউ করে কী + কখন করবে; (২) সব উস্তাদের বর্ণনা মিলে ১৫,০০০ টোকেনের নিচে — না হলে স্টার্টআপে সতর্কতা আসবে; (৩) বিস্তারিত পদ্ধতি বর্ণনায় নয়, সিস্টেম-প্রম্পটে — বর্ণনা প্রতি সেশনে লোড হয়, পদ্ধতি শুধু ডাক পড়লে।</p>
<p class="en">Claude reads descriptions to route. Three rules: say what it does AND when to use it; keep all foremen's descriptions under 15,000 tokens combined or startup warns; put method detail in the system prompt — descriptions load every session, methods only on call.</p>

<h4 class="bn">ধাপ ৪ · বিল্ট-ইন উস্তাদদের চেনা — নিজের আগে</h4>
<pre class="code-block">Explore  — রিড-ওনলি কোড-খোঁজ; মূল মডেলেই চলে, Opus-ছাড়
Plan     — প্ল্যান-মোডের গবেষক; আসল খাতা পরিষ্কার থাকে
general-purpose — বহু-ধাপ; সব টুল; জটিল কাজ</pre>
<p class="bn">এরা ইতিমধ্যেই আছে — নিজের উস্তাদ তখনই লাগবে যখন বারবার একই রকম কাজে একই নির্দেশ দিচ্ছ। Explore/Plan CLAUDE.md আর গিট-স্টেট স্কিপ করে দ্রুত থাকে; তোমার নিজের উস্তাদ ডিফল্টে দুটোই পায় (চাইলে <code>omitClaudeMd</code>-এ কাটো)।</p>
<p class="en">These exist already — write your own when you keep issuing the same brief. Explore/Plan skip CLAUDE.md and git status for speed; your custom ones load both by default (cut with omitClaudeMd).</p>

<h4 class="bn">ধাপ ৫ · সীমা-বাঁধন — হুক-পাহারা সহ</h4>
<p class="bn">উস্তাদকে বলা নিয়ম নরম; কড়া সীমা হুকে। উদাহরণ: রিড-ওনলি অডিটরের জন্য PreToolUse হুক — Bash-এর <code>tool_input.command</code>-এ INSERT/UPDATE/DELETE/DROP গেলে exit 2, বার্তা "Blocked: Write operations not allowed"। সিস্টেম-প্রম্পট বলে "লিখো না", হুক নিশ্চিত করে।</p>
<p class="en">Told rules are soft; hard limits are hooks. A PreToolUse hook on Bash greps tool_input.command for write verbs and exits 2 — the system prompt says "don't write," the hook makes sure.</p>

<h4 class="bn">ধাপ ৬ · কখন উস্তাদ, কখন নিজে</h4>
<pre class="code-block">উস্তাদ ডাকো যখন —           নিজে করো যখন —
✓ খোঁজের স্রোত বিশাল        ✗ দুই-লাইনের উত্তর
✓ ফলাফলই দরকার, টার্মিনাল নয়  ✗ মূল খাতায় সব চাই
✓ বহু-ধাপ স্বাধীন কাজ        ✗ তোমার হাতে-ধরা প্রক্রিয়া
✓ একই ব্রিফ বারবার           ✗ একবারের কাজ</pre>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ইদ্রিস মাস্টারের সতর্কতা:</strong> উস্তাদ নিজের জানালায় কাজ করে — তার ভালো-মন্দ পুরোপুরি তার ফাইলের বর্ণনা আর টুল-তালিকার ওপর। ভুল টুল দিলে ভালো উস্তাদও হাত গুটিয়ে বসবে; ঢিলে টুল দিলে সতর্ক উস্তাদও বিপদ ডাকবে। টুল-তালিকাই নিয়োগ-চুক্তি।<br><em>The tool list is the employment contract — grant too little and it's helpless, too much and it's dangerous.</em></div></div>

<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 50</span><pre class="code-block"># ── প্রম্পট ১ · প্রথম উস্তাদের জন্ম ──
&gt; আমি বারবার API-রিভিউ একই নির্দেশ দিই। আমার জন্য
&gt; .claude/agents/api-auditor.md লিখে দাও — read-only, এক-পাতার রিপোর্ট
# ← বারবার-ব্রিফ = উস্তাদ-নিয়োগের সংকেত

# ── প্রম্পট ২ · নিয়োগ-পরখ ──
&gt; /context
&gt; # agents-তালিকায় নাম উঠেছে? এবার api-auditor-কে
&gt; files/views.py ধরতে বলো
# ← বর্ণনা-মিলে ডাক — ভাগ্যলেখা কাজ করছে কিনা

# ── প্রম্পট ৩ · টুল-চুক্তি শাণিত ──
&gt; এই উস্তাদকে Write আর Edit দিও না — শুধু Read, Grep, Glob।
&gt; আর অডিটে Sonnet যথেষ্ট, Opus নয় — সেটও করো
# ← টুল-তালিকা = নিয়োগ-চুক্তি; মডেল = দাম-নিয়ন্ত্রণ

# ── প্রম্পট ৪ · রিপোর্টের ছাঁচ ──
&gt; রিপোর্ট সবসময়: Finding [severity] / Evidence file:line /
&gt; Fix এক-বাক্য — এই ছাঁচ system-প্রম্পটে বসাও
# ← যা ফেরত চাও, তা-ই লিখে দাও — নাহলে যা আসে তাই খাবে

# ── প্রম্পট ৫ · হুক-পাহারা ──
&gt; অডিটরের জন্য PreToolUse হুক লিখে দাও: Bash-এ
&gt; INSERT/UPDATE/DELETE/DROP গেলে exit 2
&gt; "Blocked: Write operations not allowed"
# ← নরম-নিয়ম + কড়া-পাহারা = আসল নিরাপত্তা</pre></div></div>

<div class="secret-box"><div class="label">দরজা ৫০ — তালিসমান</div><div class="text">🧑‍🏭 বর্ণনা ডাক ঠিক করে, টুল-তালিকা শক্তি ঠিক করে।<br><small>উস্তাদ-ফাইল = নাম + বর্ণনা + টুল + সিস্টেম-প্রম্পট। সে নিজের জানালায় কাজ করে, এক-পাতার রিপোর্ট ফেরায়; তার খোঁজ-টার্মিনাল তোমার টেবিল নোংরা করে না। কড়া সীমা চাইলে হুক।</small></div></div>`,
  senior: {
    title: "যা ডক বলে — আর যা অভিজ্ঞতা যোগ করে",
    body: `<p class="bn">অফিসিয়াল সার: (১) প্রতিটা সাব-এজেন্ট নিজের context window + নিজস্ব সিস্টেম-প্রম্পট + নির্দিষ্ট টুল + স্বাধীন অনুমতিতে চলে; (২) বিল্ট-ইন: Explore (রিড-ওনলি, মূল মডেলেই, Opus-ছাড়), Plan (প্ল্যান-মোড গবেষণা), general-purpose (সব টুল); (৩) বর্ণনার সম্মিলিত সীমা ১৫,০০০ টোকেন — বেশি হলে স্টার্টআপ-সতর্কতা; (৪) Explore/Plan CLAUDE.md ও গিট-স্টেট স্কিপ করে, কাস্টমরা ডিফল্টে পায় — <code>omitClaudeMd</code> দিয়ে কাটা যায়; (৫) হুক-ব্যাকস্টপ: exit 2 + stderr-বার্তা সাব-এজেন্টকে ব্লক-তথ্য ফেরায়।</p>
<p class="en">Official summary: each subagent runs in its own context with its own system prompt, tool set, and permissions; built-ins are Explore (read-only, inherits model capped at Opus), Plan, and general-purpose; combined descriptions stay under 15k tokens; Explore/Plan skip CLAUDE.md and git status while customs load both unless omitClaudeMd; and a PreToolUse hook with exit 2 acts as the hard backstop.</p>
<p class="bn">কারিগর-অভিজ্ঞতা: উস্তাদ-নকশার পরীক্ষা একটাই — ডাক পড়ার পর ফেরত রিপোর্টটা কি তুমি <em>অপরিবর্তিত</em> কাজে লাগাতে পারো? যদি প্রতিবার পুনঃ-ব্যাখ্যা লাগে, বর্ণনা নয় — রিপোর্ট-ছাঁচ ঠিক করো।</p>`
  },
  recall: {
    q: "তোমার মূল কথোপকথন একটা বিশাল কোডবেস-খোঁজায় ডুবে যাচ্ছে। কাকে ডাকবে, আর সে কী ফেরাবে?",
    qen: "Your main conversation is drowning in a huge codebase search. Whom do you call, and what comes back?",
    a: "উস্তাদ/সাব-এজেন্ট (যেমন Explore বা নিজের ফাইল)। সে নিজের জানালায় খোঁজে, ফেরায় শুধু সারাংশ — তোমার টেবিল পরিষ্কার থাকে।",
    aen: "A subagent. It searches in its own window and returns only the summary — your table stays clean."
  }
});

// ── DOOR 51 · স্থপতির সিংহাসন — The Architect's Throne (final) ──
doors.push({
  num: 51,
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
<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 51 — সিংহাসন-সংশ্লেষ</span><pre class="code-block"># ── প্রম্পট ১ · তিন-স্তম্ভের নিজ-পরীক্ষা ──
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
