// ════════════════════════════════════════
// Book 59 v6 · The Terminal Craftsman — Capstone Floor (32-35)
// Expert workflow floor: idea → plan → build loop → ship (follow-along guide)
// ════════════════════════════════════════

// ── DOOR 42 · ফটিক চাচার প্রথম-দিনের কার্যশালা — Day One: From Empty Room to First Commit ──
doors.push({
  num: 42,
  icon: "🛠️",
  color: "#22c55e",
  name: "প্রথম-দিনের কার্যশালা",
  subtitle: "Day One: From Empty Room to First Commit",
  tech: "install → প্রथম সেশন → /init → CLAUDE.md → প্রথম commit",
  spirit: "আচার — কোডের আগে কার্যশালা-আচার",
  secret: "এক্সপার্ট নতুন প্রজেক্টে প্রথমে কোড লেখে না — ঘর গোছায়: Claude Code বসায়, প্রথম সেশনে লগ-ইন করে, /init দিয়ে CLAUDE.md-জন্ম দেয় (প্রজেক্টের বিধি-দেওয়াল), তারপর প্রথম git-commit। এই আচারই পরের প্রতিটা সেশনের বিচার-শক্তি বহন করে।",
  recall: {
    q: "প্রথম দিনের ৫ ধাপ কী কী, কেন বিধি-দেওয়াল (CLAUDE.md) কোডের আগে? আর claude --version কী ছাপাবে বলে ডক বলে?",
    qen: "What are the five day-one steps, why does the rules-wall (CLAUDE.md) come before code, and what does the docs say claude --version prints?",
    a: "① install: curl -fsSL https://claude.ai/install.sh | bash (বা brew install --cask claude-code) ② verify: claude --version — ডক বলে সংখ্যা + (Claude Code) ছাপাবে ③ প্রজেক্ট-ফোল্ডারে claude — প্রথমবার লগ-ইন-প্রম্পট (ব্রাউজারে), উপরে version + model + working directory ④ /init — CLAUDE.md-জন্ম: প্রজেক্টের বিধি, কমান্ড, রীতি ⑤ প্রথম commit: git init + \\\"commit my changes with a descriptive message\\\"। বিধি আগে, কারণ ভবিষ্যতের প্রতিটা সেশন এই দেওয়াল পড়ে বিচার করে — কোড বদলায়, বিধি-চরিত্র বহন করে।",
    aen: "① install: curl -fsSL https://claude.ai/install.sh | bash (or brew install --cask claude-code) ② verify: claude --version — docs say it prints a version number followed by (Claude Code) ③ run claude in the project folder — first use shows a login prompt (browser), header shows version + model + working directory ④ /init — CLAUDE.md is born: the project's rules, commands, conventions ⑤ first commit: git init + \\\"commit my changes with a descriptive message\\\". Rules before code because every future session reads that wall to judge — code changes, the wall carries character.",
    you: "নিজের আইডিয়া-ফোল্ডারে এই ৫ ধাপ এখনই চালাও; শেষে git log --oneline দিয়ে প্রথম commit নিজের চোখে দেখো"
  },
  story: `<p class="scene-setting">নতুন শহরে ফটিক চাচা যখন কার্যশালা খোলেন, প্রথম দিন কোনো কাঠ কাটেন না। ঘর ঝাঁটেন, যন্ত্র গুছিয়ে ঝোলান, দেওয়ালে শহরের বিধি লেখেন — তারপর প্রথম কাট। তাঁর কথা: \\\"যে ঘর গোছানো নয়, সেখানে প্রতিটা ভুল দ্বিগুণ খরচ।\\\" এক্সপার্ট-ইঞ্জিনিয়ারের প্রথম দিনও তাই: Claude Code বসানো → লগ-ইন → /init দিয়ে বিধি-দেওয়াল → প্রথম commit। এই দরজা থেকে তিনটে দরজায় একটাই সূত্র — নকশা-টেবিল (৩২: আইডিয়া→পরিকল্পনা), কারখানা-ছন্দ (৩৩: নির্মাণ-চক্র), নদী-পারাপার (৩৪: রিলিজ) — শেষে সিংহাসন (৩৫)।</p>
<p class="scene-setting en">When old master Fazlik Chacha opens a workshop in a new town, day one cuts no wood. He sweeps, hangs the tools, paints the town's rules on the wall — then makes the first cut. His saying: \\\"an unsorted room doubles the cost of every mistake.\\\" An expert engineer's day one is the same: install Claude Code → log in → /init writes the rules-wall → first commit. From this door a single thread runs through three more — the Drafting Table (32: idea→plan), the Factory Rhythm (33: build loop), the River Crossing (34: ship it) — ending at the Throne (35).</p>

<div class="code-block"># ── ধাপ ১ · ইনস্টল (macOS/Linux/WSL) ──
curl -fsSL https://claude.ai/install.sh | bash
# বিকল্প: brew install --cask claude-code

# ── ধাপ ২ · যাচাই ──
claude --version
# তুমি যা দেখবে (ডক-বর্ণিত): সংখ্যা + (Claude Code)

# ── ধাপ ৩ · প্রজেক্ট-ঘরে প্রথম সেশন ──
mkdir my-idea && cd my-idea
claude
# প্রথমবার: লগ-ইন-প্রম্পট → ব্রাউজারে অনুমোদন
# প্রম্পটের উপরে (ডক-বর্ণিত): version · model · working directory
# সাহায্য দরকার হলে: /help

# ── ধাপ ৪ · বিধি-দেওয়ালের জন্ম ──
/init
# তুমি যা দেখবে: প্রজেক্ট-রুটে CLAUDE.md তৈরি —
#   প্রজেক্ট কী, কোন কমান্ড চলে, কোন রীতি মানতে হবে
# খালি ঘরেও চালাও — আইডিয়া-সারাংশ হাতে থাকলে দেওয়াল লেখায়

# ── ধাপ 5 · প্রথম commit (ইতিহাসের জন্ম) ──
git init
# Claude-কে বলো (ডক-প্রম্পট-রেসিপি):
#   commit my changes with a descriptive message
# তুমি যা দেখবে: Claude নিজেই diff-পড়ে বার্তা-লেখে, তুমি অনুমোদন করো

# ── বোনাস · স্বাস্থ্য-পরীক্ষা ──
/doctor
# কী কী আসলে লোড হয়েছে (settings/hooks/skills) — চোখে দেখে নাও</div>

<table class="kv-table">
<tr><th>ধাপ</th><th>কমান্ড</th><th>তুমি কী দেখবে (প্রত্যাশিত)</th></tr>
<tr><td class="hl">১ ইনস্টল</td><td>curl … install.sh | bash</td><td>ইনস্টল-লগ, শেষে সফল-বার্তা</td></tr>
<tr><td class="hll">২ যাচাই</td><td>claude --version</td><td>সংখ্যা + (Claude Code)</td></tr>
<tr><td class="hl">৩ সেশন</td><td>claude</td><td>লগ-ইন → header: version · model · dir</td></tr>
<tr><td class="hll">৪ বিধি</td><td>/init</td><td>CLAUDE.md প্রজেক্ট-রুটে</td></tr>
<tr><td class="hl">৫ ইতিহাস</td><td>git init + commit-প্রম্পট</td><td>প্রথম commit-হ্যাশ</td></tr>
</table>

<div class="diagram">
<div class="diag-title">প্রথম-দিনের শৃঙ্খল</div>
<svg viewBox="0 0 640 130" role="img" aria-label="Day one chain: install, first session, init, first commit">
<defs><marker id="ar59d31" markerWidth="10" markerHeight="8" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3" fill="#22c55e"/></marker></defs>
<rect x="20" y="45" width="120" height="44" rx="8" class="node node-leaf"/><text x="80" y="64" text-anchor="middle" class="sc-label">ইনস্টল</text><text x="80" y="80" text-anchor="middle" class="sc-num">install.sh</text>
<rect x="180" y="45" width="120" height="44" rx="8" class="node node-cyan"/><text x="240" y="64" text-anchor="middle" class="sc-label">প্রথম সেশন</text><text x="240" y="80" text-anchor="middle" class="sc-num">claude → লগ-ইন</text>
<rect x="340" y="45" width="120" height="44" rx="8" class="node node-hot"/><text x="400" y="64" text-anchor="middle" class="sc-label">বিধি-দেওয়াল</text><text x="400" y="80" text-anchor="middle" class="sc-num">/init → CLAUDE.md</text>
<rect x="500" y="45" width="120" height="44" rx="8" class="node"/><text x="560" y="64" text-anchor="middle" class="sc-label">প্রথম ইতিহাস</text><text x="560" y="80" text-anchor="middle" class="sc-num">git commit</text>
<line x1="140" y1="67" x2="180" y2="67" stroke="#22c55e" stroke-width="3" marker-end="url(#ar59d31)"/>
<line x1="300" y1="67" x2="340" y2="67" stroke="#22c55e" stroke-width="3" marker-end="url(#ar59d31)"/>
<line x1="460" y1="67" x2="500" y2="67" stroke="#22c55e" stroke-width="3" marker-end="url(#ar59d31)"/>
</svg>
<div class="diag-cap">কোডের আগে ঘর-গোছানো — প্রতিটা তীর ডক-যাচাইকৃত কমান্ড</div>
</div>
<div class="callout info"><span class="co-icon">🧪</span><div><b>বাস্তব উদাহরণ — BazarBiti (বাজারবই), ধাপ ১-৫ হাতে-কলমে</b> — <span class="en">A real worked example, start to finish</span><pre class="code-block"># আইডিয়া: রোজকার বাজার-খরচের খাতা, টার্মিনালে — খরচ যোগ করো, সপ্তাহের হিসাব দেখো
# প্রজেক্টের নাম: bazarbiti

# ── ধাপ ১-২ · ইনস্টল-যাচাই (একবারই) ──
$ curl -fsSL https://claude.ai/install.sh | bash
$ claude --version
2.5.47 (Claude Code)          ← সংখ্যা বদলাবে; শেষে (Claude Code) থাকবে

# ── ধাপ ৩ · ঘর বানিয়ে প্রথম সেশন ──
$ mkdir bazarbiti && cd bazarbiti
$ git init
$ claude
# প্রথমবার: ব্রাউজারে লগ-ইন-প্রম্পট → Approve
# সেশন-হেডার (আকার): Claude Code v2.5.47 · Sonnet · ~/bazarbiti

# ── ধাপ ৪ · বিধি-দেওয়াল ──
&gt; /init
✓ Created CLAUDE.md
$ cat CLAUDE.md
# খালি ঘরে আনুমানিক আকার: "This is an empty project…"
# আইডিয়া আগে বললে আরও নির্দিষ্ট লেখে — তাই আগে বলি:
&gt; এই প্রজেক্ট একটা বাংলা বাজার-খরচের টার্মিনাল CLI হবে:
&gt; Python 3.12, pytest, argparse, JSONL ফাইল, বাংলা আউটপুট।
&gt; CLAUDE.md এই তথ্যে হালনাগাদ করো।
$ cat CLAUDE.md
# BazarBiti — বাজার-খরচের টার্মিনাল খাতা
# - Python 3.12 · pytest · argparse · JSONL ফাইল-স্টোর
# - সব আউটপুট বাংলায়; সংখ্যা ইংরেজি-অঙ্কে
# - টেস্ট: pytest tests/ -q

# ── ধাপ ৫ · প্রথম commit ──
&gt; commit my changes with a descriptive message
# Claude নিজে diff পড়ে বার্তা লেখে; তুমি অনুমোদন করো
$ git log --oneline
a1b2c3d Add CLAUDE.md: project rules for BazarBiti   ← হ্যাশ তোমারটা আলাদা হবে

# ── বোনাস · কী লোড হলো ──
&gt; /doctor
# settings/hooks/skills — কী কী সত্যিই লোড হয়েছে তার হিসাব</pre></div></div>
`,
  senior: {
    title: "অভিজ্ঞের চোখে — প্রথম দিনে যে ভুলগুলো ঘটে",
    body: `<p><b>ভুল ১ — বিধি-দেওয়াল ছাড়া কোড।</b> নতুনরা সরাসরি \\\"একটা ফিচার বানাও\\\" বলে ফেলে; তিন সপ্তাহ পরে প্রতিটা সেশনে একই রীতি-ব্যাখ্যা দিতে হয়। <b>ভুল ২ — CLAUDE.md-এ সব ঢোকানো।</b> দেওয়াল যত বড়, তত পড়া হয় না; যা প্রতিদিন লাগে শুধু তাই লেখো — বাকি @import-চেইনে (দরজা ৩৫)। <b>ভুল ৩ — প্রথম commit দেরি।</b> প্রথম commit-এর আগে worktree-বৈশিষ্ট্যও অচল (ডক: কমিট-না-থাকলে বেস-ব্রাঞ্চ রেজলভ করতে ব্যর্থ) — ইতিহাস শুরু না করলে সার্কাস শুরুই হয় না। আর লগ-ইন নিয়ে দ্বিধা নেই: অ্যাকাউন্ট-টাইপ যাই হোক, প্রথমবারই ব্রাউজার-অনুমোদন, তারপর আর চাই না — /login দিয়ে বদলাও যখন দরকার।</p>`
  }
});

// ── DOOR 43 · নকশা-টেবিলের আলো — The Drafting Table: From Idea to Plan ──
doors.push({
  num: 43,
  icon: "📐",
  color: "#38bdf8",
  name: "নকশা-টেবিলের আলো",
  subtitle: "The Drafting Table: From Idea to Plan",
  tech: "idea → প্রশ্ন-মেশিন → PRD-খসড়া → plan mode → scope-কাটা",
  spirit: "নকশা — কাঠ কাটার আগে রেখা আঁকা",
  secret: "আইডিয়া থেকে প্ল্যান তিনটা পর্যায়ে: (১) কেন/কী/নেই-খাতা — সমস্যা, ব্যবহারকারী, অ-লক্ষ্য লিখে ফেলা (২) প্রশ্ন-মেশিন — Claude-কে বলো উত্তর না দিতে, শুধু প্রশ্ন করতে; যে প্রশ্নের উত্তর নেই সেখানেই নকশা-ফাঁক (৩) plan mode — Shift+Tab বা claude --permission-mode plan; Claude পড়ে প্রস্তাব দেয়, ডিস্কে কিছু না ছুঁয়ে; স্ট্যাটাস-বারে ⏸ plan mode on দেখলেই জানো নিরাপদ।",
  recall: {
    q: "প্রশ্ন-মেশিন কী এবং কেন কাজে লাগে? plan mode-এ ঢোকার দুইটা উপায় ও স্ট্যাটাস-বারের চিহ্ন কী? PRD-তে অ-লক্ষ্য (non-goals) কেন লাগে?",
    qen: "What is the question-machine and why does it work? Two ways to enter plan mode and the status-bar sign? Why do non-goals belong in a PRD?",
    a: "প্রশ্ন-মেশিন = Claude-কে বাধ্য করা শুধু প্রশ্ন করতে: \\\"এই আইডিয়া নিয়ে ১০টা কঠিন প্রশ্ন করো, কোনো উত্তর দিয়ো না\\\" — এতে Claude-র সমাধান-প্রবণতা আটকে যায়, ফাঁক-গুলো সামনে আসে; ফাঁক না দেখলে নকশা ভুল জায়গায় দাঁড়ায়। plan mode: সেশনে Shift+Tab (permission-mode ঘুরিয়ে ⏸ plan mode on), বা শুরুতেই claude --permission-mode plan — Claude ফাইল পড়ে প্ল্যান দেয়, অনুমোদনের আগে কোনো সম্পাদনা নেই। অ-লক্ষ্য লাগে কারণ v1-এর সবচেয়ে বড় শত্রু স্কোপ-ফোলা: প্রথম দিনেই লিখে রাখা পাশে ফেলে-দেওয়া জিনিসগুলো পরে \\\"ওটা তো হবেই\\\" ভেবে ঢুকে পড়ে; লেখা থাকলে কাটতে সাহস হয়।",
    aen: "Question-machine = forcing Claude to only ask: \\\"ask me 10 hard questions about this idea, do not answer them\\\" — Claude's solution-reflex is muzzled, so gaps surface; unseen gaps make designs stand on the wrong ground. Plan mode: press Shift+Tab mid-session (cycle modes to ⏸ plan mode on in the status bar) or start with claude --permission-mode plan — Claude reads and proposes, touching no file until you approve. Non-goals matter because v1's deadliest enemy is scope-creep: things \\\"dropped for later\\\" sneak back as \\\"well obviously that too\\\"; written non-goals give you the courage to cut.",
    you: "নিজের আইডিয়া নিয়ে এখনই প্রশ্ন-মেশিন চালাও: Claude-কে বলো ১০টা কঠিন প্রশ্ন করতে, উত্তর নয়; যে প্রশ্ন উত্তর দিতে পারো না — সেটাই তোমার পরের কাজ"
  },
  story: `<p class="scene-setting">নৌকা-শহরে নকশা-টেবিলের মালিক রূপালী পাশা — তাঁর নিয়ম: রেখা আঁকার আগে তিনটা খাতা। প্রথম খাতায় কেন-কী-নেই, দ্বিতীয়ায় প্রশ্ন — তাঁর শাগরেদদের কাজ উত্তর দেওয়া নয়, প্রশ্ন করা: \\\"কে চালাবে? বর্ষায় কী হবে? মাল বেশি হলে?\\\" — যে প্রশ্নের উত্তর কেউ দিতে পারে না, সেখানেই নকশা ভুল জায়গায় দাঁড়িয়ে। তৃতীয় খাতা পাশে-ফেলার: যা এবার হবে না — লেখা থাকলে কাটতে সাহস হয়। আধুনিক নকশা-টেবিলও তাই: কেন/কী/নেই → প্রশ্ন-মেশিন → plan mode-প্রস্তাব → স্কোপ-কাটা।</p>
<p class="scene-setting en">In the boat-city, drafting-table master Rupali Pasha has a rule: three notebooks before any line is drawn. First the why/what/not book; second the questions — his apprentices' job is NOT to answer but to ask: \\\"who steers? what in monsoon? if cargo doubles?\\\" — wherever nobody can answer, the design stands on wrong ground. Third book: the NOT-building list — written down, cutting takes courage. The modern drafting table is the same: why/what/not → question-machine → plan-mode proposal → scope-cut.</p>

<div class="code-block"># ── খাতা ১ · কেন/কী/নেই (নিজে লেখো, ১০ মিনিট) ──
কেন: কার কোন সমস্যা মরছে? (নিজের নাম-সহ!)
কী:  v1 এক বাক্যে — ক্রিয়া + বস্তু + কার জন্য
নেই: যা এবার হবে না (অ-লক্ষ্য) — লেখা না থাকলে ঢুকে পড়বে

# ── খাতা ২ · প্রশ্ন-মেশিন (Claude-প্রম্পট, হুবহু ব্যবহারযোগ্য) ──
আমার আইডিয়া: [এক বাক্যে v1]
এই আইডিয়া নিয়ে ১০টা কঠিন প্রশ্ন করো।
শুধু প্রশ্ন — কোনো উত্তর বা সমাধান দিয়ো না।
প্রশ্নগুলো এমন হোক যেগুলোর উত্তর না দিলে নির্মাণ শুরু করা বিপজ্জনক।

# ── খাতা ৩ · PRD-খসড়া (উত্তর-প্রম্পট) ──
এই প্রশ্নগুলোর আমার উত্তর: [১-১০]
এবার PRD-খসড়া লেখো: লক্ষ্য · ব্যবহারকারী · v1-স্কোপ ·
অ-লক্ষ্য · পরীক্ষাযোগ্য সাফল্য-মাপ · প্রযুক্তি-পছন্দ।
docs/PRD.md-এ রাখো।

# ── প্ল্যানের রেখা-টানা ──
claude --permission-mode plan     # বা সেশনে Shift+Tab → ⏸ plan mode on
# প্রম্পট: PRD পড়ে ধাপে-ধাপে বাস্তবায়ন-পরিকল্পনা দাও —
#   মডিউল-ক্রম, প্রতিটা ধাপের যাচাই, প্রথম পরীক্ষা কী হবে
# অনুমোদনের আগে কোনো ফাইল বদলাবে না — রেখা মাপা হচ্ছে, কাঠ কাটা হচ্ছে না</div>

<table class="kv-table">
<tr><th>পর্যায়</th><th>হাতিয়ার</th><th>কী পাওয়া যায়</th></tr>
<tr><td class="hl">কেন/কী/নেই</td><td>নিজের খাতা</td><td>সমস্যা-সংজ্ঞা + অ-লক্ষ্য-তালিকা</td></tr>
<tr><td class="hll">প্রশ্ন-মেশিন</td><td>Claude-প্রম্পট</td><td>নকশা-ফাঁকের মানচিত্র</td></tr>
<tr><td class="hl">PRD-খসড়া</td><td>উত্তর-প্রম্পট</td><td>docs/PRD.md — সিদ্ধান্তের দলিল</td></tr>
<tr><td class="hll">plan mode</td><td>Shift+Tab / --permission-mode plan</td><td>⏸ চিহ্ন + অনুমোদন-পূর্ববর্তী পরিকল্পনা</td></tr>
</table>

<div class="diagram">
<div class="diag-title">আইডিয়া থেকে পরিকল্পনা</div>
<svg viewBox="0 0 640 170" role="img" aria-label="Idea to plan: why/what/not, question machine, PRD draft, plan mode">
<defs><marker id="ar59d32" markerWidth="10" markerHeight="8" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3" fill="#38bdf8"/></marker></defs>
<rect x="20" y="20" width="130" height="46" rx="8" class="node node-leaf"/><text x="85" y="39" text-anchor="middle" class="sc-label">কেন/কী/নেই</text><text x="85" y="56" text-anchor="middle" class="sc-num">খাতা ১</text>
<rect x="20" y="100" width="130" height="46" rx="8" class="node node-hot"/><text x="85" y="119" text-anchor="middle" class="sc-label">অ-লক্ষ্য</text><text x="85" y="136" text-anchor="middle" class="sc-num">পাশে-ফেলার তালিকা</text>
<rect x="200" y="20" width="130" height="46" rx="8" class="node node-cyan"/><text x="265" y="39" text-anchor="middle" class="sc-label">প্রশ্ন-মেশিন</text><text x="265" y="56" text-anchor="middle" class="sc-num">১০ প্রশ্ন, ০ উত্তর</text>
<rect x="380" y="20" width="130" height="46" rx="8" class="node node-hot"/><text x="445" y="39" text-anchor="middle" class="sc-label">PRD-খসড়া</text><text x="445" y="56" text-anchor="middle" class="sc-num">docs/PRD.md</text>
<rect x="380" y="100" width="130" height="46" rx="8" class="node node-leaf"/><text x="445" y="119" text-anchor="middle" class="sc-label">স্কোপ-কাটা</text><text x="445" y="136" text-anchor="middle" class="sc-num">v1-এ যা নয়</text>
<rect x="545" y="55" width="80" height="46" rx="8" class="node"/><text x="585" y="74" text-anchor="middle" class="sc-label">plan</text><text x="585" y="91" text-anchor="middle" class="sc-num">⏸ on</text>
<line x1="150" y1="43" x2="200" y2="43" stroke="#38bdf8" stroke-width="3" marker-end="url(#ar59d32)"/>
<line x1="330" y1="43" x2="380" y2="43" stroke="#38bdf8" stroke-width="3" marker-end="url(#ar59d32)"/>
<line x1="510" y1="43" x2="545" y2="78" stroke="#38bdf8" stroke-width="3" marker-end="url(#ar59d32)"/>
<line x1="510" y1="123" x2="560" y2="101" stroke="#38bdf8" stroke-width="3" marker-end="url(#ar59d32)"/>
</svg>
<div class="diag-cap">তিন খাতার নিয়ম — প্রশ্ন আগে, উত্তর পরে; পরিকল্পনা মাপা হয়, কাঠ নয়</div>
</div>
<div class="callout info"><span class="co-icon">🧪</span><div><b>বাস্তব উদাহরণ — BazarBiti, আইডিয়া থেকে পরিকল্পনা</b> — <span class="en">The exact prompts, as actually sent</span><pre class="code-block"># ── খাতা ১ · কেন/কী/নেই (নিজে লেখা) ──
কেন: আমি (রাকিব) রোজ বাজার করি, খরচ মনে থাকে না, মাস শেষে হিসাব মেলে না
কী:  v1 = কমান্ডে খরচ-লেখা + সপ্তাহের মোট দেখা
নেই: ক্যাটাগরি-চার্ট · বাংলা-সংখ্যা · ওয়েব UI · মাল্টি-ইউজার · ক্লাউড-সিঙ্ক

# ── খাতা ২ · প্রশ্ন-মেশিন (হুবহু প্রম্পট) ──
&gt; আমার আইডিয়া: টার্মিনালে চলা বাজার-খরচের খাতা — খরচ যোগ করি,
&gt; সপ্তাহের হিসাব দেখি। Python 3.12 + JSONL।
&gt; এই আইডিয়া নিয়ে ১০টা কঠিন প্রশ্ন করো। শুধু প্রশ্ন — কোনো উত্তর
&gt; বা সমাধান দিয়ো না। প্রশ্নগুলো এমন হোক যেগুলোর উত্তর না দিলে
&gt; নির্মাণ শুরু করা বিপজ্জনক।

# প্রত্যাশিত প্রশ্নের ধরন (10টার উদাহরণ-ছায়া):
# 1. খরচের এন্ট্রি কীভাবে শনাক্ত হবে — তারিখ? ট্যাগ?
# 2. ভুল এন্ট্রি মুছলে কী হবে? ইতিহাস থাকবে কি?
# 3. একই দিনে দুইবার বাজার হলে?
# … (10টা প্রশ্ন, উত্তর নয়)

# ── খাতা ৩ · উত্তর দিয়ে PRD ──
&gt; এই প্রশ্নগুলোর আমার উত্তর:
&gt; 1. প্রতি এন্ট্রি: তারিখ স্বয়ংক্রিয়, টাকা-পরিমাণ + এক-শব্দের জিনিস
&gt; 2. ভুল এন্ট্রি: last কমান্ডে শেষ এন্ট্রি বাতিল; ইতিহাস মুছে ফেলা নয়
&gt; 3. একদিনে যতবার খুশি এন্ট্রি
&gt; (…বাকি উত্তর…)
&gt; এবার PRD-খসড়া লেখো docs/PRD.md-তে: লক্ষ্য, ব্যবহারকারী,
&gt; v1-স্কোপ, অ-লক্ষ্য, সাফল্য-মাপ, প্রযুক্তি।

# প্রত্যাশিত আকার (PRD.md সেকশন-শিরোনাম):
# ## লক্ষ্য · ## ব্রহিতকারী · ## v1 স্কোপ · ## অ-লক্ষ্য ·
# ## সাফল্য-মাপ · ## প্রযুক্তি

# ── plan mode-এ পরিকল্পনা ──
# Shift+Tab চেপে ⏸ plan mode on করো, তারপর:
&gt; @docs/PRD.md পড়ে ধাপে-ধাপে বাস্তবায়ন-পরিকল্পনা দাও:
&gt; মডিউল-ক্রম, প্রতিটা ধাপের যাচাই-কমান্ড, প্রথম টেস্ট কী হবে।
# Claude শুধু পড়ে-ভাবে; নকশা এলে Enter-এ সম্পাদনা করে অনুমোদন</pre></div></div>
`,
  senior: {
    title: "অভিজ্ঞের চোখে — নকশা-ঘরে সত্যিকারের পতন",
    body: `<p><b>পতন ১ — প্রশ্ন না করে নির্মাণ।</b> সবচেয়ে দামি পতন: তিন সপ্তাহ পরে জানা যায় সমস্যাটা আসলে ভিন্ন। প্রশ্ন-মেশিন এই খরচ প্রথম দিনেই প্রকাশ করে। <b>পতন ২ — plan mode-কে ব্যর্থতা ভাবা।</b> এটা দেরি নয়, বীমা: বড় সিদ্ধান্তের আগে ⏸ দেখা মানে কাঠ অক্ষত, রেখা শুধু কাগজে। <b>পতন ৩ — অ-লক্ষ্য মুখে রাখা, খাতায় নয়।</b> মুখের কথা স্কোপ-ফোলার শুরু; PRD-র অ-লক্ষ্য-অনুচ্ছেদ লেখা থাকলে \\\"এটাও লাগবেই\\\"-র জবাব এক লাইনে: অ-লক্ষ্য, পরের ভার্সন। আর স্মরণ: plan mode-এর প্রস্তাব সংশোধনযোগ্য — মন্দ প্রস্তাব পেলে বলো কী বাদ দিতে হবে, নতুন করে আঁকাও; সে নকশা-টেবিলের কাজই।</p>`
  }
});

// ── DOOR 44 · কারখানা-ছন্দের মালিক — The Factory Rhythm: The Build Loop ──
doors.push({
  num: 44,
  icon: "🏭",
  color: "#f59e0b",
  name: "কারখানা-ছন্দের মালিক",
  subtitle: "The Factory Rhythm: The Build Loop",
  tech: "ছোট-ধাপ · টিকিট-প্রম্পট · Esc Esc rewind · /compact · টেস্ট-আগে",
  spirit: "ছন্দ — বড় কাজ ছোট চক্রে",
  secret: "নির্মাণ এক লাফে নয়, ছন্দে হয়: এক টিকিট = এক সেশন-খণ্ড = এক commit। প্রতিটা টিকিট-প্রম্পটে থ্রি-পার্ট থাকে: প্রসঙ্গ (কোথায়), লক্ষ্য (কী), যাচাই (কী দেখলে বুঝবে হয়েছে)। ভুল হলে Esc Esc → রিওয়াইন্ড-মেনু (কোড+কথোপকথন / শুধু কথোপকথন / শুধু কোড / দুই দিকে-সারসংক্ষেপ); মনে রেখো — bash-কমান্ডে বদলানো ফাইল রিওয়াইন্ড-ট্র্যাকে নেই। ঘণ্টা-পার হলে /compact; পরদিন claude -c।",
  recall: {
    q: "টিকিট-প্রম্পটের তিন অংশ কী? রিওয়াইন্ড-মেনুতে কোন কোন কাজ? আর কোন ধরনের পরিবর্তন রিওয়াইন্ড ফেরাতে পারে না?",
    qen: "What are the three parts of a ticket-prompt? Which actions does the rewind menu offer? And which kind of change can rewind NOT undo?",
    a: "তিন অংশ: ① প্রসঙ্গ — কোন মডিউল/ফাইলের কথা, আগের ধাপ কী হয়েছিল ② লক্ষ্য — এক বাক্যে এই টিকিটের কাজ ③ যাচাই — শেষে কোন কমান্ড চালিয়ে কী দেখলে টিকিট শেষ (যেমন: টেস্ট সবুজ, CLI-আউটপুট)। রিওয়াইন্ড-মেনু (/rewind বা খালি ইনপুটে Esc Esc): কোড+কথোপকথন ফেরানো · শুধু কথোপকথন · শুধু কোড · এখান-থেকে-সারসংক্ষেপ · এখান-পর্যন্ত-সারসংক্ষেপ · বাদ দাও। রিওয়াইন্ড ফেরাতে পারে না bash-কমান্ডে বদলানো ফাইল (rm/mv/cp) — শুধু Claude-র নিজের সম্পাদনা-টুলের পরিবর্তন ট্র্যাক হয়; তাই ভয়ংকর bash নয়, ভয়ংকর ট্র্যাক-বাইরে কাজ।",
    aen: "Three parts: ① context — which module/file, what the last step did ② goal — this ticket in one sentence ③ verification — which command and what output means done (e.g. tests green, CLI output). Rewind menu (/rewind or Esc Esc on empty input): restore code+conversation · conversation only · code only · summarize-from-here · summarize-up-to-here · never mind. Rewind canNOT undo files changed by bash commands (rm/mv/cp) — only Claude's own editing tools are tracked; so the danger isn't scary bash, it's untracked work.",
    you: "আজকের এক কাজ বেছে নাও আর তিন-অংশের টিকিট-প্রম্পট লিখে চালাও; শেষে যাচাই-লাইনটা নিজে চালিয়ে দেখো সবুজ কি না"
  },
  story: `<p class="scene-setting">পাহাড়ের কারখানায় ছন্দ-মালিক শামসু ভূইয়া সকালে কোনো পাহাড় ভাঙেন না — দিন ভাগ করেন ঘণ্টায়: এক ঘণ্টা এক কাজ, শেষে মাপকাঠি, তারপর পরের কাজ। তাঁর দেওয়ালে লেখা: \\\"যে ছন্দ নেই, তার কারখানা দুর্ঘটনার খামার।\\\" ভুল হলে তাঁর শাগরেদ-বই আছে: কী হয়েছিল পেছনে, পাতা উল্টে ফিরে যাওয়া যায় — শুধু ওই বইয়ে লেখা কাজই, বাইরের ঝড়ে ওড়া কাগজ ফেরে না। কারখানা-ছন্দ তাই: টিকিট → যাচাই → commit → পরের টিকিট; ভুল → রিওয়াইন্ড; ক্লান্ত-প্রসঙ্গ → /compact; দিন শেষ → claude -c দিয়ে পরদিন শুরু।</p>
<p class="scene-setting en">In the mountain factory, rhythm-master Shamsu Bhuiya never moves a mountain in one morning — he slices days into hours: one task per hour, a measure at the end, then the next. His wall reads: \\\"a factory without rhythm is a farm of accidents.\\\" When something breaks there is the apprentice-book: pages you can flip back — but only what the book recorded; paper blown away by outside storms never returns. The factory rhythm: ticket → verify → commit → next ticket; mistakes → rewind; tired context → /compact; day done → claude -c tomorrow.</p>

<div class="code-block"># ── টিকিট-প্রম্পটের ছাঁচ (প্রতিটা কাজে এই তিন অংশ) ──
প্রসঙ্গ: [কোন মডিউল/ফাইল, আগের ধাপে কী হলো]
লক্ষ্য: [এই টিকিটে ঠিক কী হবে — এক বাক্য]
যাচাই: [শেষে এই কমান্ড চালাও: … — এই ফল দেখলেই টিকিট শেষ]
শুরু করার আগে পরিকল্পনা এক লাইনে বলো।

# ── দৃষ্টান্ত (নিজের প্রজেক্টে বসিয়ে চালাও) ──
প্রসঙ্গ: আমাদের CLI-তে add-কমান্ড আছে, ফাইল-স্টোর JSONL।
লক্ষ্য: যেসব কার্ড আজ বা আগে due, সেগুলোর review-সেশন।
যাচাই: দুটো কার্ড যোগ করে review চালালে প্রশ্ন-উত্তর-রেটিং
দেখাবে, শেষে তালিকায় due-তারিখ এগিয়ে যাবে।
শুরুর আগে পরিকল্পনা এক লাইনে বলো।

# ── ভুল হলে: রিওয়াইন্ড ──
/rewind          # বা খালি ইনপুটে Esc Esc
# মেনু: কোড+কথোপকথন · শুধু কথোপকথন · শুধু কোড
#      · এখান-থেকে-সারসংক্ষেপ · এখান-পর্যন্ত · বাদ
# ⚠ bash-কমান্ডে বদলানো ফাইল (rm/mv/cp) রিওয়াইন্ডে ফেরে না

# ── প্রসঙ্গ ভারী হলে ──
/compact         # পুরো কথোপকথন সারসংক্ষেপে

# ── দিন শেষ ──
# টার্মিনাল বন্ধ করো; পরদিন:
claude -c        # এই ডিরেক্টরির সর্বশেষ সেশন ফেরে</div>

<table class="kv-table">
<tr><th>সংকেত</th><th>মানে</th><th>কাজ</th></tr>
<tr><td class="hl">টিকিট শেষ</td><td>যাচাই-কমান্ড সবুজ</td><td>commit → পরের টিকিট</td></tr>
<tr><td class="hll">পথ ভুল</td><td>দিক পছন্দ নয়</td><td>Esc Esc → কোড+কথোপকথন ফেরাও</td></tr>
<tr><td class="hl">প্রসঙ্গ ভারী</td><td>মডেল ভুলতে শুরু করেছে</td><td>/compact (বা এখান-পর্যন্ত-সারসংক্ষেপ)</td></tr>
<tr><td class="hll">দিন শেষ</td><td>মাথা ভরে গেছে</td><td>বন্ধ; পরদিন claude -c</td></tr>
</table>

<div class="diagram">
<div class="diag-title">কারখানা-চক্র</div>
<svg viewBox="0 0 640 190" role="img" aria-label="Factory loop: ticket, build, verify, commit; escape hatches: rewind, compact, resume">
<defs><marker id="ar59d33" markerWidth="10" markerHeight="8" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3" fill="#f59e0b"/></marker></defs>
<rect x="20" y="30" width="120" height="46" rx="8" class="node node-leaf"/><text x="80" y="49" text-anchor="middle" class="sc-label">টিকিট</text><text x="80" y="66" text-anchor="middle" class="sc-num">৩-অংশ প্রম্পট</text>
<rect x="190" y="30" width="120" height="46" rx="8" class="node node-hot"/><text x="250" y="49" text-anchor="middle" class="sc-label">নির্মাণ</text><text x="250" y="66" text-anchor="middle" class="sc-num">ছোট ধাপে</text>
<rect x="360" y="30" width="120" height="46" rx="8" class="node node-cyan"/><text x="420" y="49" text-anchor="middle" class="sc-label">যাচাই</text><text x="420" y="66" text-anchor="middle" class="sc-num">টেস্ট/কমান্ড সবুজ</text>
<rect x="530" y="30" width="90" height="46" rx="8" class="node"/><text x="575" y="49" text-anchor="middle" class="sc-label">commit</text><text x="575" y="66" text-anchor="middle" class="sc-num">→ পরের টিকিট</text>
<line x1="140" y1="53" x2="190" y2="53" stroke="#f59e0b" stroke-width="3" marker-end="url(#ar59d33)"/>
<line x1="310" y1="53" x2="360" y2="53" stroke="#f59e0b" stroke-width="3" marker-end="url(#ar59d33)"/>
<line x1="480" y1="53" x2="530" y2="53" stroke="#f59e0b" stroke-width="3" marker-end="url(#ar59d33)"/>
<rect x="190" y="130" width="120" height="44" rx="8" class="node node-purple"/><text x="250" y="148" text-anchor="middle" class="sc-label">ভুল?</text><text x="250" y="164" text-anchor="middle" class="sc-num">Esc Esc রিওয়াইন্ড</text>
<rect x="360" y="130" width="120" height="44" rx="8" class="node node-purple"/><text x="420" y="148" text-anchor="middle" class="sc-label">প্রসঙ্গ ভারী?</text><text x="420" y="164" text-anchor="middle" class="sc-num">/compact</text>
<line x1="250" y1="130" x2="250" y2="76" stroke="#f59e0b" stroke-width="3" marker-end="url(#ar59d33)"/>
<line x1="420" y1="130" x2="420" y2="76" stroke="#f59e0b" stroke-width="3" marker-end="url(#ar59d33)"/>
</svg>
<div class="diag-cap">এক টিকিট = এক চক্র = এক commit; বাঁচার-দরজা তিনটে — রিওয়াইন্ড, কমপ্যাক্ট, রিজিউম</div>
</div>
<div class="callout info"><span class="co-icon">🧪</span><div><b>বাস্তব উদাহরণ — BazarBiti, নির্মাণ-চক্র (প্রথম তিন টিকিট)</b> — <span class="en">Ticket prompts as sent, with verification</span><pre class="code-block"># ── টিকিট ১ · এন্ট্রি-মডিউল (TDD: লাল আগে) ──
&gt; প্রসঙ্গ: খালি প্রজেক্ট, docs/PRD.md পড়ে নাও।
&gt; লক্ষ্য: expense মডিউল — add(amount, item) এন্ট্রি বানায়
&gt;        (তারিখ আজকের, amount ধনাত্মক সংখ্যা)।
&gt; যাচাই: প্রথমে টেস্ট লেখো — বিকল্প এক লাইনে মিলবে না যদি
&gt;        amount ঋণাত্মক হয়। তারপর কোড। শেষে চালাও:
&gt;        pytest tests/ -q  →  সবুজ দেখাও।

# প্রত্যাশিত যাত্রা:
#   লাল: TypeError/ImportError (মডিউল নেই) → সবুজ: 2 passed
$ pytest tests/ -q
2 passed in 0.03s

&gt; এই টিকিট শেষ — ছোট commit করো।
$ git log --oneline -1
e4f5a6b feat: expense entry with date + positive-amount validation

# ── টিকিট ২ · স্টোর (JSONL) ──
&gt; প্রসঙ্গ: expense মডিউল আছে, মেমরিতে থাকে।
&gt; লক্ষ্য: store.py — append/load JSONL; entries ফাইলে বাঁচে।
&gt; যাচাই: দুটো এন্ট্রি যোগ করে প্রোগ্রাম বন্ধ-চালু করলেও
&gt;        এন্ট্রি থাকে; pytest tests/ -q সবুজ।

# ── টিকিট ৩ · CLI দরজা + বাংলা আউটপুট ──
&gt; প্রসঙ্গ: expense + store আছে।
&gt; লক্ষ্য: cli.py — তিন কমান্ড: add / week / last
&gt; যাচাই: এই সিকোয়েন্স হুবহু চালিয়ে দেখাও:
&gt;        python -m bazarbiti add 250 ডিম
&gt;        python -m bazarbiti week

$ python -m bazarbiti add 250 ডিম
যোগ হলো: ডিম — 250 টাকা (2026-09-17)
$ python -m bazarbiti week
এই সপ্তাহ: 1 এন্ট্রি · মোট 250 টাকা

# ── মাঝপথে ভুল হলে ──
&gt; (নির্দেশ ভুল বোঝা হয়েছে — ইউনিকোড মুছে ফেলেছিস)
# খালি ইনপুটে Esc Esc → Restore code and conversation
# মনে রেখো: bash-এ বদলানো ফাইল রিওয়াইন্ডে ফেরে না

# ── প্রসঙ্গ ভারী, দিন শেষ ──
&gt; /compact
$ exit
# পরদিন:
$ claude -c
# সর্বশেষ সেশন ফেরে — টিকিট-সূত্র হাতে</pre></div></div>
`,
  senior: {
    title: "অভিজ্ঞের চোখে — চক্র ভাঙার তিন উপায়",
    body: `<p><b>ভাঙন ১ — মেগা-প্রম্পট।</b> \\\"পুরো অ্যাপ বানাও\\\" মানে যাচাই-বিহীন ৯ ঘণ্টা; প্রতিটা টিকিট যাচাইয়ের মাপে ছোট হোক — এক বসার সেশনে শেষ। <b>ভাঙন ২ — রিওয়াইন্ডকে জাদু ভাবা।</b> ডক স্পষ্ট: bash-এ বদলানো ফাইল ট্র্যাক নেই; ধ্বংসাত্মক bash চালানোর আগে নিজে নিশ্চিত হও, রিওয়াইন্ড ফেরাবে না। <b>ভাঙন ৩ — ক্লান্ত-প্রসঙ্গে চালানো।</b> মডেল ভুলতে শুরু করলে /compact না করে জোর করে চালালে সস্তা ভুল জন্মায়; ঘণ্টাখানেক পার হলেই সারসংক্ষেপ করো, বা টিকিট শেষেই বন্ধ করো। আর রাতের ওপর কাজ হলে claude -c-ই সকালের প্রথম কমান্ড — প্রসঙ্গ হারায় না।</p>`
  }
});

// ── DOOR 45 · নদী-পারাপারের মাঝি — The River Crossing: Ship It ──
doors.push({
  num: 45,
  icon: "🚢",
  color: "#a855f7",
  name: "নদী-পারাপারের মাঝি",
  subtitle: "The River Crossing: Ship It",
  tech: "feature-branch → commit-রীতি → gh pr create → CI-সবুজ → merge → tag",
  spirit: "উত্তরণ — কারখানা থেকে বাজারে",
  secret: "রিলিজ এক লাফে নয়, নদী-পারাপারের মতো: প্রথমে স্রোত থেকে আলাদা হওয়া (feature-branch), তারপর খোলা-নৌকায় উঠা (PR = পর্যালোচনার মাঠ), CI-সবুজ = নদীর ওপারে নিরাপদ-সংকেত, মাঝি-অনুমোদন (merge), শেষে নৌকার নাম-ফলক (tag)। v1.0.0-এর প্রতিশ্রুতি: স্থিতিশীল পাবলিক API — ভাঙার পরিবর্তন হলে মেজর-সংখ্যা বাড়বে।",
  recall: {
    q: "PR-তৈরির এক-লাইন প্রম্পট কী (ডক-রেসিপি)? claude --from-pr 1234 কী করে? v1.0.0-এর সেমভার-প্রতিশ্রুতি কী?",
    qen: "What is the one-line PR prompt (docs recipe)? What does claude --from-pr 1234 do? What is v1.0.0's semver promise?",
    a: "ডক-রেসিপি এক লাইনে: \\\"create a pr\\\" — Claude নিজেই gh দিয়ে শিরোনাম-বর্ণনা-বানিয়ে PR খোলে (session-to-PR লিংকও হয়); চাইলে \\\"enhance the PR description with more context about …\\\" দিয়ে বর্ণনা সমৃদ্ধ করাও। claude --from-pr 1234 = ওই PR-এর সাথে যুক্ত সেশন-পিকার খোলে — পরে পর্যালোচনা/সংশোধনের প্রসঙ্গ হাতে পাওয়া যায়। v1.0.0-এর প্রতিশ্রুতি: এখন থেকে পাবলিক API স্থিতিশীল — ভাঙার পরিবর্তন (breaking change) এলে মেজর-সংখ্যা বাড়বে (2.0.0); নতুন সুবিধা = মাইনর (1.1.0), বাগ-সংশোধন = প্যাচ (1.0.1)।",
    aen: "The docs recipe is one line: \\\"create a pr\\\" — Claude itself runs gh, writes title+description, opens the PR (session-PR linking happens too); refine with \\\"enhance the PR description with more context about…\\\". claude --from-pr 1234 opens the session picker filtered to sessions linked to that PR — full context for review or fixes. v1.0.0 promises: public API is stable from now on — breaking changes bump MAJOR (2.0.0); new features = MINOR (1.1.0); fixes = PATCH (1.0.1).",
    you: "নিজের প্রজেক্টে একটা ছোট ফিচার-branch খুলে \\\"create a pr\\\" বলে দেখো; PR-URL পেলে claude --from-pr চালিয়ে সেশন-সংযোগ নিজের চোখে দেখো"
  },
  story: `<p class="scene-setting">মেঘনার ঘাটে মাঝি আনোয়ার পাঠানের নদী-পারাপার ছয় পা-র নিয়মে: ① নৌকা স্রোত থেকে আলাদা করা (branch) ② যাত্রী-মাল গোছানো, নাম-ফলকে গন্তব্য (commit-বার্তা: কী-কেন-কীভাবে) ③ ঘাটের পান্ডার কাছে খোলা-নৌকা পেশ (PR) ④ নদীর রিপোর্ট-টেলিগ্রাম: জল-স্তর কম, ঝড় নেই (CI-সবুজ) ⑤ পান্ডা-মুহূর্ত (merge) ⑥ নাম-ফলক পেরেক-মারা (tag — এই নৌকার নাম v1.0.0)। যে নৌকা ঘাট ছাড়ায় না, তার যাত্রা গণনায় আসে না।</p>
<p class="scene-setting en">At the Meghna ghat, boatman Anowar Pathan's crossing follows a six-step rule: ① pull the boat out of the current (branch) ② pack cargo, label destination (commit message: what-why-how) ③ present the open boat to the ghat's broker (PR) ④ the river's telegram: water low, no storm (CI green) ⑤ the broker's nod (merge) ⑥ nail the name-plate (tag — this boat is v1.0.0). A boat that never leaves the ghat isn't a journey.</p>

<div class="code-block"># ── পা ① · স্রোত থেকে আলাদা ──
# Claude-কে বলো: create a new branch called feature/first-feature
# (বা নিজে: git switch -c feature/first-feature)

# ── পা ② · গোছানো মাল, নাম-ফলক-সহ commit ──
# Claude-কে বলো: commit my changes with a descriptive message
# রীতি: feat: … · fix: … · docs: … — বিষয় আগে, ব্যাখ্যা পরে

# ── পা ③ · খোলা-নৌকা পেশ: PR ──
create a pr
# তুমি যা দেখবে: Claude নিজেই শিরোনাম-বর্ণনা লিখে PR খোলে
# সমৃদ্ধ করতে: enhance the PR description with more context

# ── পা ④ · নদীর টেলিগ্রাম: CI ──
# .github/workflows/ci.yml থাকলে push-এ পরীক্ষা চলে
# PR-পাতায় সবুজ ✓ দেখা = নিরাপদ-সংকেত; লাল হলে Claude-কে বলো:
run the failing workflow and fix the error

# ── পা ⑤ · পান্ডা-মুহূর্ত: merge ──
# GitHub-এ Merge (বা Claude-কে: merge the pr)
# তারপর: git switch main && git pull

# ── পা ⑥ · নাম-ফলক: tag ──
git tag -a v1.0.0 -m "First stable release"
git push origin v1.0.0
# প্রতিশ্রুতি: ভাঙা-পরিবর্তন → 2.0.0; নতুন সুবিধা → 1.1.0; ফিক্স → 1.0.1

# ── পরে ফিরে আসা ──
claude --from-pr 1234
# ওই PR-এর সাথে যুক্ত সেশনগুলোর পিকার — পুরনো প্রসঙ্গ হাতে</div>

<table class="kv-table">
<tr><th>পা</th><th>কাজ</th><th>তুমি কী দেখবে</th></tr>
<tr><td class="hl">① branch</td><td>feature/… তৈরি</td><td>git-ব্রাঞ্চ সুইচ-বার্তা</td></tr>
<tr><td class="hll">② commit</td><td>রীতি-বার্তা-সহ</td><td>commit-হ্যাশ + ফাইল-তালিকা</td></tr>
<tr><td class="hl">③ PR</td><td>\\\"create a pr\\\"</td><td>PR-URL (Claude-লিখিত বর্ণনা)</td></tr>
<tr><td class="hll">④ CI</td><td>পরীক্ষা-চলা</td><td>PR-পাতায় সবুজ ✓ / লাল ✗</td></tr>
<tr><td class="hl">⑤ merge</td><td>main-এ মিশল</td><td>merge-কমিট, branch-মুছুন-বোতাম</td></tr>
<tr><td class="hll">⑥ tag</td><td>v1.0.0 annotated</td><td>git tag -n1-এ নাম-বার্তা</td></tr>
</table>

<div class="diagram">
<div class="diag-title">নদী-পারাপার: কারখানা থেকে বাজার</div>
<svg viewBox="0 0 660 150" role="img" aria-label="Release chain: branch, commit, PR, CI green, merge, tag v1.0.0">
<defs><marker id="ar59d34" markerWidth="10" markerHeight="8" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3" fill="#a855f7"/></marker></defs>
<rect x="15" y="50" width="88" height="46" rx="8" class="node node-leaf"/><text x="59" y="69" text-anchor="middle" class="sc-label">branch</text><text x="59" y="86" text-anchor="middle" class="sc-num">feature/…</text>
<rect x="127" y="50" width="88" height="46" rx="8" class="node"/><text x="171" y="69" text-anchor="middle" class="sc-label">commit</text><text x="171" y="86" text-anchor="middle" class="sc-num">feat: …</text>
<rect x="239" y="50" width="88" height="46" rx="8" class="node node-cyan"/><text x="283" y="69" text-anchor="middle" class="sc-label">PR</text><text x="283" y="86" text-anchor="middle" class="sc-num">create a pr</text>
<rect x="351" y="50" width="88" height="46" rx="8" class="node node-hot"/><text x="395" y="69" text-anchor="middle" class="sc-label">CI</text><text x="395" y="86" text-anchor="middle" class="sc-num">✓ সবুজ</text>
<rect x="463" y="50" width="88" height="46" rx="8" class="node node-leaf"/><text x="507" y="69" text-anchor="middle" class="sc-label">merge</text><text x="507" y="86" text-anchor="middle" class="sc-num">main-এ</text>
<rect x="575" y="50" width="75" height="46" rx="8" class="node node-purple"/><text x="612" y="69" text-anchor="middle" class="sc-label">tag</text><text x="612" y="86" text-anchor="middle" class="sc-num">v1.0.0</text>
<line x1="103" y1="73" x2="127" y2="73" stroke="#a855f7" stroke-width="3" marker-end="url(#ar59d34)"/>
<line x1="215" y1="73" x2="239" y2="73" stroke="#a855f7" stroke-width="3" marker-end="url(#ar59d34)"/>
<line x1="327" y1="73" x2="351" y2="73" stroke="#a855f7" stroke-width="3" marker-end="url(#ar59d34)"/>
<line x1="439" y1="73" x2="463" y2="73" stroke="#a855f7" stroke-width="3" marker-end="url(#ar59d34)"/>
<line x1="551" y1="73" x2="575" y2="73" stroke="#a855f7" stroke-width="3" marker-end="url(#ar59d34)"/>
</svg>
<div class="diag-cap">ছয় পা-র নিয়ম — যে নৌকা ঘাট ছাড়ায় না, তার যাত্রা হিসাবে আসে না</div>
</div>
<div class="callout info"><span class="co-icon">🧪</span><div><b>বাস্তব উদাহরণ — BazarBiti, রিলিজ (হুবহু কমান্ড-সিকোয়েন্স)</b> — <span class="en">From branch to v1.0.0</span><pre class="code-block"># ── পা ① · শাখা ──
&gt; create a new branch called feature/first-release
$ git branch --show-current
feature/first-release

# ── পা ② · শেষ গোছানো + রীতি-commit ──
&gt; commit my changes with a descriptive message
$ git log --oneline -3
9f8e7d6 docs: README with usage examples
c3d4e5f feat: week summary command (Bengali output)
e4f5a6b feat: expense entry with date + positive-amount validation

# ── পা ③ · PR (এক লাইনেই যথেষ্ট) ──
&gt; create a pr
# Claude নিজেই শিরোনাম-বর্ণনা লিখে খোলে; লিংক দেয়
# আকার: https://github.com/&lt;user&gt;/bazarbiti/pull/1
# সমৃদ্ধ করতে:
&gt; enhance the PR description with the PRD's success measures

# ── পা ④ · CI-সবুজ ──
# (আগের দিন .github/workflows/ci.yml যোগ করা থাকলে)
&gt; CI লাল দেখাচ্ছে — run the failing workflow and fix the error
# সবুজ ✓ না হলে পা ⑤ নেই

# ── পা ⑤ · merge ──
# GitHub-পাতায় Merge pull request → Confirm
$ git switch main && git pull
Already up to date.   ← merge-পরে main এগিয়ে আছে

# ── পা ⑥ · নাম-ফলক ──
$ git tag -a v1.0.0 -m "BazarBiti 1.0.0: add/week/last commands"
$ git push origin v1.0.0
$ git tag -n1
v1.0.0          BazarBiti 1.0.0: add/week/last commands
$ git cat-file -t v1.0.0
tag
# প্রতিশ্রুতি শুরু: এখন থেকে ভাঙা-পরিবর্তন = 2.0.0

# ── পরে ফিরে আসা ──
$ claude --from-pr 1
# ওই PR-এর সেশন-পিকার — পুরনো প্রসঙ্গ হাতে</pre></div></div>
`,
  senior: {
    title: "অভিজ্ঞের চোখে — নদী পার হওয়ার আগে যা জানা দরকার",
    body: `<p><b>সত্য ১ — PR না থাকলে ইতিহাস এতিম।</b> সরাসরি main-এ কাজ করলে পর্যালোচনার মাঠ থাকে না; প্রতিটা ফিচার এক branch-এ, এক PR-এ। <b>সত্য ২ — CI-লাল মানে নৌকা ভেসে যাবে।</b> লাল দেখে merge করা সবচেয়ে দামি অভ্যাস; বরং Claude-কে বলো: \\\"run the failing workflow and fix the error\\\" — সবুজ না হলে পা ⑤ নেই। <b>সত্য ৩ — tag হলো চুক্তি, সাজসজ্জা নয়।</b> v1.0.0 একবার ঠুকলে পথ পেছনে নেই — ভাঙা-পরিবর্তন মানেই 2.0.0; এই শৃঙ্খলাই ব্যবহারকারীর ভরসা। আর পুরনো PR-এ ফেরা সহজ: claude --from-pr — সেশন-পিকার ওই PR-এর প্রসঙ্গই দেখায়।</p>`
  }
});

// ── DOOR 46 · বারো লাইনের ইঞ্জিন — The Twelve-Line Engine (final) ──
doors.push({
  num: 46,
  icon: "⚙️",
  color: "#6366f1",
  name: "বারো লাইনের ইঞ্জিন",
  subtitle: "The Twelve-Line Engine",
  tech: "The whole machine as one loop — trace it, then build your own agent",
  spirit: "কাররাতাইন — দৃষ্টি ফেরাও, আবার, আবার",
  secret: "Claude Code = system prompt + tools + একটা loop — বাকি সবই এই বারো লাইনের অলংকার।",
  recall: {
    q: "স্মৃতি থেকে agent loop-এর কাঠামোটা লেখো — কোন তিনটা জিনিস নিয়ে model call হয়, কখন loop থামে, আর ফলাফল কোথায় যায়? তারপর বলো: দেয়াল (দরজা ১৭) কোন লাইনে বসে?",
    qen: "From memory, write the shape of the agent loop — which three things go into the model call, when does the loop stop, and where do results go? Then: on which line does the wall (Door 17) sit?",
    a: "messages = [user prompt] → loop: model call (system + tools + messages) → assistant-এর উত্তর messages-এ যোগ → stop_reason tool_use না হলে ফেরত দাও → প্রতিটা tool_use চালাও run_tool দিয়ে → tool_result-গুলো একটা user message-এ যোগ করো → আবার। দেয়াল বসে run_tool-এর প্রথম লাইনে: if not allowed(...)।",
    aen: "messages = [user prompt] → loop: call the model with system + tools + messages → append the assistant reply → if stop_reason is not tool_use, return → run each tool_use through run_tool → append the tool_results in one user message → repeat. The wall sits on run_tool's first line: if not allowed(...)."
  },
  story: `<p class="scene-setting">মিরপুরের এক ছাদ, রাত সাড়ে বারোটা। সন্ধ্যার বৃষ্টির পর ভেজা কংক্রিটের গন্ধ, নিচে আইপিএস-এর মৃদু গুঞ্জন, দূরে মেট্রোর শেষ ট্রেনের শব্দ। প্লাস্টিকের চেয়ারে মীরা, কোলে একটা পুরনো ল্যাপটপ — E, A আর S কী-র অক্ষর ঘষে ঘষে উঠে গেছে, শুধু চকচকে ফাঁকা কালো। পাশে ফ্লাস্কে আদা-চা। আটাশ দরজার পথ তোমাকে এখানে এনেছে।</p>
<p class="scene-setting en">A rooftop in Mirpur at half past midnight. The smell of wet concrete after the evening rain, the low hum of the IPS below, the last metro train far away. On a plastic chair sits Mira, an old laptop on her knees — the E, A and S keys worn to blank shiny black. Ginger tea in a flask beside her. Twenty-eight doors of road have brought you here.</p>

<div class="dialogue">মীরা বললেন — সাতাশজন ওস্তাদের কাছে গেছ। একটা করে যন্ত্রাংশ এনেছ। এবার বলো তো, Claude Code আসলে কী? তুমি থমকে যাও — এত কিছু: token, তাঁত, টেবিল, ফাইল, পাত, চিরকুট, দেয়াল, দালাল… মীরা হাসলেন। বললেন — আমিও একসময় এভাবে ভাবতাম। প্রতি মাসে নতুন tool, নতুন shortcut, নতুন flag — মুখস্থ করতাম আর হারিয়ে যেতাম। তারপর এক রাতে বসে নিজের একটা agent লিখলাম। বারো লাইন। সেই রাতের পর আর কোনো tool আমাকে হারাতে পারেনি।</div>
<div class="dialogue en">Mira says: You have visited twenty-seven masters and brought back one part from each. Now tell me — what is Claude Code, really? You hesitate — so much: tokens, the loom, the desk, the file, the plate, the chit, the wall, the runner… Mira laughs. I used to think like that. Every month a new tool, a new shortcut, a new flag — I memorised and got lost. Then one night I sat down and wrote my own agent. Twelve lines. After that night, no tool could lose me again.</div>

<p>তারপর তাঁর ভুলটাও বললেন, লুকালেন না। সেই প্রথম রাতের agent-এ কোনো দেয়াল ছিল না। Model একটা পরিষ্কার-করার command লিখল — ভুল folder-এ। সারা দিনের পরীক্ষার ফাইল উধাও। মীরা বললেন — সেদিন জরিনার কাঁটার (দরজা ১৭) মানে বুঝেছিলাম, শরীর দিয়ে। বারো লাইনের দুটো লাইন আমি সেই রাতের পর যোগ করেছি।</p>
<p class="en">She tells her mistake too, hiding nothing. That first-night agent had no wall. The model wrote a cleanup command — in the wrong folder. A day's experiment files gone. That day I understood Jorina's scale (Door 17) with my body. Two of the twelve lines I added after that night.</p>

<p>তিনি ল্যাপটপটা তোমার দিকে ঘোরালেন। পর্দায় বারোটা লাইন:</p>
<p class="en">She turns the laptop toward you. Twelve lines on the screen:</p>

<div class="code-block">def agent(prompt):
    messages = [{"role": "user", "content": prompt}]
    while True:
        r = client.messages.create(model=M, max_tokens=4096, system=SYSTEM, tools=TOOLS, messages=messages)
        messages.append({"role": "assistant", "content": r.content})
        if r.stop_reason != "tool_use":
            return r
        results = [{"type": "tool_result", "tool_use_id": b.id, "content": run_tool(b.name, b.input)} for b in r.content if b.type == "tool_use"]
        messages.append({"role": "user", "content": results})
def run_tool(name, args):
    if not allowed(name, args): return "ERROR: denied by policy. Choose another way."
    return IMPL[name](**args)</div>

<p>তুমি পড়ো, একবার, দুবার। তারপর হঠাৎ দেখতে পাও — প্রতিটা লাইনের পেছনে একজন ওস্তাদ দাঁড়িয়ে আছেন।</p>
<p class="en">You read it once, twice. Then suddenly you see — behind every line stands one of the masters.</p>

<table class="kv-table"><tr><th>লাইন · Line</th><th>ওস্তাদ · Master</th><th>যা শিখিয়েছেন</th></tr><tr><td class="hl">Glob · Grep · Read first</td><td>আমিন জহুরুল · ১</td><td>লেখার আগে পড়া — প্রথম tool call-গুলো হাঁটা</td></tr><tr><td class="hl">while True … until verified</td><td>মনির · ২</td><td>পানিতে না নামিয়ে loop থামে না</td></tr><tr><td class="hl">SYSTEM ← CLAUDE.md</td><td>আজিজ · ৩</td><td>রুট-খাতা প্রতি শিফটে system prompt-এ</td></tr><tr><td class="hl">allowed() + checkpoints</td><td>রোকসানা · ৪</td><td>কাটার আগে সম্মতি, পরে গণনা</td></tr><tr><td class="hl">prompt templates · skills</td><td>গোপাল · ৫</td><td>message আর SYSTEM-এ বসানো রেসিপি</td></tr><tr><td class="hl">TOOLS += MCP servers</td><td>জামাল · ৬</td><td>মানসম্মত সকেটে লাগানো বাড়তি tool</td></tr><tr><td class="hl">agent() without a keyboard</td><td>আলমগীর · ৭</td><td>একই loop, -p দিয়ে, অনেক হাঁড়িতে</td></tr><tr><td class="hl">the loop, shared as files</td><td>নিজাম স্যার · ৮</td><td>plugin-এ বাঁধা পুরো কারখানা</td></tr><tr><td class="hl">client.messages.create(...)</td><td>মুনশি আবদুল করিম · ৯</td><td>Model শুধু লেখে; এই call-ই তার একমাত্র কাজ</td></tr><tr><td class="hl">max_tokens, the bill</td><td>হারাধন বসাক · ১০</td><td>সবকিছু গোনা হয় টুকরোয়</td></tr><tr><td class="hl">r.content</td><td>রহমত আলী · ১১</td><td>উত্তর বোনা হয় এক সুতো করে, একটু অনিশ্চিত</td></tr><tr><td class="hl">why it writes tool_use well</td><td>মেহের আলী খান · ১২</td><td>চতুর্থ সবক — আসল কাজে RL</td></tr><tr><td class="hl">messages=messages</td><td>নুরুন্নাহার · ১৩</td><td>Model শুধু টেবিল দেখে</td></tr><tr><td class="hl">messages.append(...)</td><td>মতিন · ১৪</td><td>প্রতিবার পুরো ফাইল — কেউ মনে রাখে না</td></tr><tr><td class="hl">system=SYSTEM (cached)</td><td>ইউসুফ · ১৫</td><td>স্থির অংশ একবার ঢালো</td></tr><tr><td class="hl">tool_use → tool_result</td><td>শফিক · ১৬</td><td>চিরকুট যায়, থালা ফেরে user message হয়ে</td></tr><tr><td class="hl">if not allowed(...)</td><td>জরিনা · ১৭</td><td>দেয়াল এখানে, prompt-এ নয়</td></tr><tr><td class="hl">IMPL["agent"] → agent(task)</td><td>সিরাজ মিয়া · ১৮</td><td>Subagent = এই function নিজেকেই নতুন খাতায় ডাকে</td></tr><tr><td class="hl">client = your provider</td><td>ফাতেমা · ১৯</td><td>একই loop, কিনারায় adapter</td></tr><tr><td class="hl">base_url of client</td><td>হাবিবুর · ২০</td><td>ঠিকানা বদলায়, ইঞ্জিন নয়</td></tr><tr><td class="hl">"content": run_tool(...)</td><td>শিরিন · ২১</td><td>ফলাফল খবর, আদেশ নয়</td></tr><tr><td class="hl">around agent()</td><td>রেহানা · ২২</td><td>পুরো loop-কে ঘিরে eval শিট</td></tr><tr><td class="hl">every tool on earth</td><td>বাবুল · ২৩</td><td>সব ব্র্যান্ডের ভেতরে এই বারো লাইন</td></tr><tr><td class="hl">from claude_agent_sdk import query</td><td>আক্কাস আলী · ২৪</td><td>এই বারো লাইন, তৈরি অবস্থায়, তোমার গাড়িতে বসানো</td></tr><tr><td class="hl">thinking={...} in create()</td><td>নূর হোসেন · ২৫</td><td>কাটার আগে কতটা চক</td></tr><tr><td class="hl">SYSTEM and tool descriptions</td><td>সালেহা · ২৬</td><td>যা লেখা আছে, শুধু সেটাই আছে</td></tr><tr><td class="hl">model=M</td><td>মোস্তফা · ২৭</td><td>যার কাজ তার হাতে — আর দরকার হলে তবেই loop</td></tr></table>

<div class="diagram"><div class="diag-title">One prompt through the engine · এক prompt-এর পুরো সফর</div><svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d16a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker><marker id="d16b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#ff6b35"/></marker></defs><rect class="node-moon" x="15" y="10" width="110" height="32" rx="8"/><text class="lbl-sm" x="70" y="30">YOU</text><rect class="node" x="175" y="10" width="140" height="32" rx="8"/><text class="lbl-sm" x="245" y="30">CLAUDE CODE</text><rect class="node-purple" x="360" y="10" width="120" height="32" rx="8"/><text class="lbl-sm" x="420" y="30">CLAUDE API</text><rect class="node-cyan" x="515" y="10" width="115" height="32" rx="8"/><text class="lbl-sm" x="572" y="30">YOUR MACHINE</text><line x1="70" y1="42" x2="70" y2="370" stroke="#5e5c74" stroke-dasharray="4 4"/><line x1="245" y1="42" x2="245" y2="370" stroke="#5e5c74" stroke-dasharray="4 4"/><line x1="420" y1="42" x2="420" y2="370" stroke="#5e5c74" stroke-dasharray="4 4"/><line x1="572" y1="42" x2="572" y2="370" stroke="#5e5c74" stroke-dasharray="4 4"/><line x1="72" y1="62" x2="241" y2="62" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="158" y="56">"fix the failing test"</text><rect class="node" x="140" y="72" width="210" height="22" rx="5"/><text class="lbl-sm" x="245" y="87">hooks · CLAUDE.md → system</text><line x1="247" y1="112" x2="416" y2="112" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="332" y="106">POST (cached prefix)</text><line x1="418" y1="140" x2="249" y2="140" stroke="#ff6b35" stroke-width="1.8" marker-end="url(#d16b)"/><text class="lbl-hot" x="332" y="134">tool_use: Bash pytest</text><rect class="node-hot" x="140" y="150" width="210" height="22" rx="5"/><text class="lbl-sm" x="245" y="165">allowed? · PreToolUse hook</text><line x1="247" y1="190" x2="568" y2="190" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="408" y="184">run pytest</text><line x1="570" y1="214" x2="249" y2="214" stroke="#3dd6c4" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-cyan" x="408" y="208">1 failed: Decimal vs float</text><line x1="247" y1="240" x2="416" y2="240" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="332" y="234">tool_result</text><line x1="418" y1="266" x2="249" y2="266" stroke="#ff6b35" stroke-width="1.8" marker-end="url(#d16b)"/><text class="lbl-hot" x="332" y="260">tool_use: Read, then Edit</text><rect class="node" x="140" y="276" width="210" height="22" rx="5"/><text class="lbl-sm" x="245" y="291">checkpoint · edit · format hook</text><line x1="247" y1="316" x2="568" y2="316" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="408" y="310">pytest → 142 passed</text><line x1="418" y1="342" x2="249" y2="342" stroke="#ff6b35" stroke-width="1.8" marker-end="url(#d16b)"/><text class="lbl-hot" x="332" y="336">end_turn: summary</text><line x1="243" y1="364" x2="74" y2="364" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="158" y="358">the fix, explained</text></svg><div class="diag-cap">চিত্র: তোমার এক prompt — harness সাজায়, model চায়, harness যাচাই করে চালায়, ফল ফেরে, আবার… end_turn পর্যন্ত। · One prompt: assemble, ask, gate, run, return, repeat until end_turn.</div></div>

<p>এবার Book 59-এর সব বৈশিষ্ট্য এই যন্ত্রের গায়ে বসিয়ে দেখো। CLAUDE.md — system prompt-এর লেখা। Skills — system prompt-এ বর্ণনা, দরকারে tool দিয়ে পড়া বাকিটা। Slash command — তোমার message-এ বসানো prompt template। Permission আর hook — run_tool-এর আগে-পরে। Subagent — agent() নিজেকেই নতুন messages দিয়ে ডাকে। MCP — TOOLS তালিকায় বাইরের server-এর tool যোগ। /clear আর /compact — messages খালি বা সারাংশ। Checkpoint — edit-এর আগে file-এর কপি। Plan mode — edit tool সরিয়ে "শুধু plan দাও"। Headless -p — একই loop, UI ছাড়া। আর কিছু নেই।</p>
<p class="en">Now hang every Book 59 feature on this machine. CLAUDE.md — text in the system prompt. Skills — descriptions in the system prompt, bodies read via tools when needed. Slash commands — prompt templates in your message. Permissions and hooks — before and after run_tool. Subagents — agent() calling itself with fresh messages. MCP — outside servers' tools added to TOOLS. /clear and /compact — empty or summarise messages. Checkpoints — a copy of the file before an edit. Plan mode — edit tools removed, "plan only". Headless -p — the same loop without a UI. Nothing else.</p>

<p>আর কিছু ভুল হলে? মীরা বললেন — এখন তোমার আর অনুমান করতে হবে না। লক্ষণ দেখে জিজ্ঞেস করো: কোন লাইনটা ভাঙছে, কোন ওস্তাদের কাছে ফিরতে হবে।</p>
<p class="en">And when something goes wrong? Mira says: you no longer need to guess. From the symptom, ask which line is breaking and which master to go back to.</p>

<table class="kv-table"><tr><th>লক্ষণ · Symptom</th><th>কোন লাইন · Line</th><th>সমাধান · Fix (দরজা)</th></tr><tr><td>Session-এর মাঝে নিয়ম ভুলে যায়</td><td class="hl">messages= (ভরা টেবিল)</td><td>/clear, ছোট CLAUDE.md, নিয়ম hook-এ (১৩, ১৭)</td></tr><tr><td>আত্মবিশ্বাসের সঙ্গে ভুল API ব্যবহার করে</td><td class="hl">model-এর পুরনো জ্ঞান</td><td>docs দাও MCP/WebFetch/skill দিয়ে; version বেঁধে দাও (১২, ১৪)</td></tr><tr><td>একই fix-এ ঘুরপাক খায়</td><td class="hl">loop-এ নতুন তথ্য ঢুকছে না</td><td>থামাও, log/repro দাও, বা নতুন prompt-সহ /clear (১১, ২৬)</td></tr><tr><td>"Test pass" কিন্তু feature ভুল</td><td class="hl">run_tool-এর যাচাই দুর্বল</td><td>শক্ত test, আসল জিনিস চালাও, স্বাধীন reviewer subagent (১৮, ২২)</td></tr><tr><td>অতিরিক্ত জটিল বানায়</td><td class="hl">SYSTEM অস্পষ্ট</td><td>কী করবে না বলো, সরল উদাহরণ দেখাও (২৬)</td></tr><tr><td>ভুল file বা জায়গায় edit</td><td class="hl">tool_use-এর input দ্ব্যর্থক</td><td>@file, সঠিক path, অনন্য context (১৬)</td></tr><tr><td>Claude-এ ভালো, অন্য provider-এ খারাপ</td><td class="hl">client = অন্য model</td><td>provider অনুযায়ী prompt, কম আর সরল tool, eval (১৯, ২২)</td></tr><tr><td>খরচ হঠাৎ বেড়ে যায়</td><td class="hl">messages + TOOLS + model</td><td>output কাটো, MCP ছাঁটো, caching, সস্তা subagent, effort কমাও (১৫, ২৫, ২৭)</td></tr><tr><td>বাইরের লেখা পড়ে অদ্ভুত কাজ চায়</td><td class="hl">tool_result = আদেশ ভাবা</td><td>দেয়াল, তিন পায়ের একটা কাটো (১৭, ২১)</td></tr></table>

<div class="callout tip"><span class="co-icon">🛠️</span><div><strong>এখন নিজে বানাও:</strong> এই বইয়ের folder-এ আছে <a href="minicc.py" download style="color:var(--teal)">minicc.py</a> — ~২৫০ লাইনের একটা provider-নিরপেক্ষ coding agent: ছয়টা tool (read, write, edit, bash, glob, grep), permission-এর দেয়াল, CLAUDE.md/AGENTS.md memory, compaction, headless -p, Anthropic আর OpenAI-compatible adapter। একটা নকল model দিয়ে পরীক্ষা করা। চালাও একটা sandbox repo-তে:<br><code>pip install anthropic openai · python minicc.py · python minicc.py --provider openai --base-url http://localhost:11434/v1 --model qwen2.5-coder</code><br>তারপর তিনটা বাড়াও: সিরাজ মিয়ার delegate() subagent, জরিনার hook, আর plan mode।<br><em>Build it: minicc.py is in this folder — six tools, a permission wall, memory, compaction, headless mode, two provider adapters. Then add a subagent, a hook, and plan mode.</em></div></div>

<div class="dialogue">মীরা চায়ের কাপ তুলে একে একে সবার নাম বললেন। প্রথম আটজন তোমাকে চালাতে শিখিয়েছিলেন — জহুরুলের হাঁটা হলো প্রথম কয়েকটা Read, মনিরের পানি-পরীক্ষা হলো loop-এর থামার শর্ত, আজিজের খাতা বসে SYSTEM-এ, রোকসানার গণনা run_tool-এর দরজায়, গোপালের কার্ড তোমার message-এ, জামালের সকেট TOOLS তালিকায়, আলমগীরের হাঁড়ি এই loop-ই কিবোর্ড ছাড়া, আর নিজাম স্যারের সিলেবাস এই সবকিছু file হিসেবে টিমের হাতে। তারপর মুনশি বলেছিলেন model শুধু লেখে — কিন্তু আমি বলি, সেই লেখাটাই একটা function call। হারাধন বলেছিলেন টুকরো গোনো — আমি বলি, সেই গোনাই max_tokens আর বিল। রহমত আলী বলেছিলেন এক সুতো করে — আমি বলি, সেই সুতোর শেষে stop_reason। মেহের আলী খান চার সবক দিয়েছিলেন — আমি বলি, চতুর্থ সবকের জন্যই এই loop কাজ করে। নুরুন্নাহারের টেবিল, মতিনের ফাইল, ইউসুফের পাত — তিনজন মিলে একটা messages তালিকা। শফিকের চিরকুট তার ভেতরের সবচেয়ে প্রাণবন্ত পাতা। জরিনা আর শিরিন পাহারা দেন run_tool-এর দরজা। সিরাজ মিয়ার দালাল এই function-ই, নতুন খাতায়। ফাতেমা আর হাবিবুর ঠিক করেন খাম কোন ভাষায়, কোন বস্তায়। রেহানা পুরো যন্ত্রকে ঘিরে চেখে দেখেন। আক্কাস আলী বলেছিলেন ইঞ্জিন কিনে বসাও — আমি বলি, কেনার আগে একবার নিজে বানাও, তাহলেই বুঝবে কী কিনছ। নূর হোসেন ঠিক করেন কতটা চক, সালেহা লেখেন কী প্রশ্ন, মোস্তফা বাছেন কোন শ্রমিক — তিনজনই বসেন এই create() call-এর parameter-এ। আর বাবুল জানেন — পৃথিবীর প্রতিটা agent-এর পেটে এই বারোটা লাইন।</div>
<div class="dialogue en">Raising her tea, Mira names them one by one. The first eight taught you to drive — Zahurul's walk is the first few Reads, Monir's water test is the loop's stopping condition, Aziz's book sits in SYSTEM, Roksana's count at run_tool's door, Gopal's cards in your message, Jamal's socket in the TOOLS list, Alamgir's pots are this loop without a keyboard, and Nizam Sir's syllabus puts all of it in the team's hands as files. Then the munshi said the model only writes — and I say that writing is a function call. Haradhan said count the pieces — I say that counting is max_tokens and the bill. Rahmat Ali said one thread at a time — I say at the end of the thread is stop_reason. Meher Ali Khan gave four lessons — I say this loop works because of the fourth. Nurunnahar's desk, Matin's file, Yusuf's plate — together, one messages list. Shafiq's chit is its liveliest page. Jorina and Shirin guard run_tool's door. Siraj Mia's runner is this very function, with a fresh ledger. Fatema and Habibur decide which language the envelope speaks and which bag it goes in. Rehana tastes the whole machine from outside. Akkas Ali said buy the engine and fit it — I say build it once yourself, and you will know what you are buying. Nur Hossain decides how much chalk, Saleha writes the question, Mostafa picks the worker — all three live in the parameters of this create() call. And Babul knows — in the belly of every agent on earth are these twelve lines.</div>

<p class="verse">রাত গভীর হলে মীরা বললেন — আমার মা প্রতি রাতে ঘুমানোর আগে সূরা মুলক পড়তেন। একটা আয়াতে এসে আমি সবসময় থামতাম: "তুমি আবার দৃষ্টি ফেরাও, কোনো ফাটল দেখতে পাও কি? তারপর আবার দৃষ্টি ফেরাও, বারবার — দৃষ্টি তোমার কাছে ফিরে আসবে ক্লান্ত ও ব্যর্থ হয়ে" (৬৭:৩–৪, ভাবানুবাদ)। আল্লাহর সৃষ্টিতে ফাটল খুঁজে পাওয়া যায় না — সেটাই আয়াতের কথা। আমাদের নিজের হাতের কাজে ঠিক উল্টো: ফাটল থাকে, তাই দেখো, পরীক্ষা করো, আবার দেখো। Agent-এর loop সেই বিনয়ের যন্ত্র — একবার দেখে থামে না।</p>
<p class="en">Deep in the night Mira says: My mother recited Surah al-Mulk every night before sleep. I always paused at one verse: "So return your vision to the sky; do you see any breaks? Then return your vision twice again. Your vision will return to you humbled while it is fatigued" (67:3–4, Sahih International). In Allah's creation no flaw can be found — that is the verse's point. In the work of our own hands it is the reverse: flaws are there, so look, test, look again. The agent loop is a machine of that humility — it does not stop after one look.</p>

<div class="secret-box"><div class="label">শেষ দরজা — তালিসমান</div><div class="text">⚙️ Claude Code = system prompt + tools + একটা loop — বাকি সবই এই বারো লাইনের অলংকার।<br><small>Model লেখে, harness করে, context-ই সব। Tool আগামী মাসে বদলাবে; loop বদলাবে না — আর তুমি loop শিখেছ।</small></div></div>  <div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 46</span><pre class="code-block"># ── প্রম্পট ১ · কঙ্কাল হাতে-ধরা ──
&gt; minicc.py ফাইলটা পড়ে বলো: বারো লাইনের লুপটা ঠিক কোথায়,
&gt; কোন লাইনে বসে আছে
# ← while চলাকালীন লুপ: পাঠাও → টুল-কল পাও → চালাও → জোড়ো

# ── প্রম্পট ২ · নিজ-টুল জোড়া ──
&gt; minicc.py-তে সপ্তম টুল যোগ করার নকশা দাও: check_stock নামে,
&gt; সংখ্যা ফেরত দেয় — কোন তিন জায়গায় লাগবে
# ← টুল-তালিকা, JSON-স্কিমা, রানার — তিন স্পর্শে টুল বাঁধা

# ── প্রম্পট ৩ · অন্য-পথে নিজ-ইঞ্জিন ──
&gt; অ্যাডাপ্টার-ধারণা ব্যাখ্যা করো: একই লুপ কীভাবে ভিন্ন প্রদানকারীর
&gt; তারে-বার্তায় অনুবাদ হয় — minicc.py-র কোন অংশ এই কাজ করে
# ← নিরপেক্ষ বার্তা → প্রদানকারীর ভাষা — দালাল-স্তর

# ── প্রম্পট ৪ · অনুমতি-ফালি নিজ-হাতে ──
&gt; minicc.py-র permission-gate কীভাবে ঠেকায়? নিজের ইঞ্জিনে আমি
&gt; কোন কাজে 'না' বলাব — নিয়ম-তালিকা লেখো
# ← নিজের কাঁটায় নিজের লোহার-প্রাচীর — নিরাপত্তার শেষ-দরজা

# ── প্রম্পট ৫ · প্রথম চালানো ──
$ python3 minicc.py
&gt; চালিয়ে দেখো: কোন টুলটা সবার আগে ডাকা পড়ল, কেন?
# ← তোমার নিজের এজেন্টের প্রথম নিঃশ্বাস — লুপ ঘুরেছে মাত্র</pre></div></div>`,

senior: {
    title: "Your next 30 days",
    body: `<p><strong>Week 1:</strong> run minicc.py on a sandbox repo with Claude; read every tool call it prints.</p>
<p><strong>Week 2:</strong> add delegate() (subagent), a pre-tool hook, and plan mode; run it on a local model through the OpenAI-compatible adapter.</p>
<p><strong>Week 3:</strong> build the Door 22 eval sheet from ten real tasks; compare Claude Code, minicc-on-Claude and minicc-on-local.</p>
<p><strong>Week 4:</strong> pick one real workflow at work (for example a LedgerPilot integration check) and ship it — with the Claude Agent SDK if you want Claude Code's harness as a library, or minicc if you need provider neutrality.</p>
<p>তারপর যেকোনো নতুন tool এলে: আটটা প্রশ্ন, একদিনের drill, eval শিট।</p>`
  }
});
