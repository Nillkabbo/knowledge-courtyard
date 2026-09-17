// ════════════════════════════════════════
// Book 59 v6 · The Terminal Craftsman — Capstone Floor (32-35)
// SmritiBox: idea → brainstorm → plan → build → release
// ════════════════════════════════════════

// ── DOOR 32 · নকশা-বাগানের ভোর — The Design Garden's Dawn ──
doors.push({
  num: 32,
  icon: "🌱",
  color: "#22c55e",
  name: "নকশা-বাগানের ভোর",
  subtitle: "The Design Garden's Dawn",
  tech: "Idea → Brainstorm → PRD → plan mode → repo + CLAUDE.md",
  spirit: "নিয়ত — কেন বানাচ্ছ, তা-ই ভিত্তি",
  secret: "ভালো প্রজেক্ট কোড দিয়ে শুরু হয় না — প্রশ্ন দিয়ে: কেন (নিজের সত্যিকার ব্যথা), কী (এক-বাক্যে দাবি), কারা (শুধু তুমি?); ব্রেইনস্টর্মে Claude-কে প্রশ্ন-মেশিন বানাও, উত্তর-মেশিন নয়; plan-মোডে PRD-খসড়া ওঠে, তুমি সম্পাদনা করো; তারপর রিপো + CLAUDE.md — বীজ থেকে চারা।",
  recall: {
    q: "SmritiBox প্রজেক্টের শুরুতে তোমার প্রথম তিনটা কাজ কী? ব্রেইনস্টর্ম-সেশনে Claude-কে কীভাবে চালাবে যেন সে তোমার চিন্তা চুরি না করে বাড়ায়? আর পরিকল্পনা কোন মোডে লিখবে?",
    qen: "What are your first three moves on SmritiBox? How do you run the brainstorm so Claude amplifies rather than replaces your thinking? And in which mode does the plan get written?",
    a: "① ভিত্তি-প্রশ্ন: কেন — নিজের ভাষায় ব্যথা-লেখা ('NotebookLM-এর কার্ড আর আমার মুখস্থ-তালিকা আলাদা জগতে'); কী — এক-বাক্য দাবি ('টার্মিনালে চলা SRS ফ্ল্যাশকার্ড, আমার ডেটা আমার ফাইলে'); সীমা — v1 এ যা নেই তাও লেখা (GUI নেই, মোবাইল নেই, ক্লাউড নেই)। ② ব্রেইনস্টর্ম-রীতি: Claude-কে বলো 'উত্তর দিও না — প্রশ্ন করো': সীমা-প্রশ্ন (একবারে কত কার্ড? টার্মিনাল-রং চাই?), বিকল্প-প্রশ্ন (SM-2 না LTS? ফাইল-স্টোরেজ না SQLite?), ঝুঁকি-প্রশ্ন (ডেটা হারালে?); তুমি উত্তর দাও, সে পরের প্রশ্ন — চিন্তা তোমার, বাতাস তার। ③ পরিকল্পনা: plan মোড (Shift+Tab বা --permission-mode plan) — সে কোডবেস-প্রসঙ্গ ছাড়াই কাঠামো-নকশা দেয়; নকশা এলে Enter-এ খুলে নিজের হাতে সীমা-লাইন লেখো। তারপর রিপো: git init + CLAUDE.md (build/test আদেশ, রীতি) — /init দিয়ে খসড়া নয়, একদম শূন্য রিপোতে তাই নিজের হাতে।",
    aen: "① Foundation questions: why — your pain in your words ('NotebookLM cards and my memorization lists live in different worlds'); what — one-sentence claim ('a terminal SRS flashcard tool, my data in my files'); non-goals — write what v1 will NOT have (no GUI, no mobile, no cloud). ② Brainstorm ritual: tell Claude 'do not answer — ask': constraint questions (how many cards per session? terminal colors?), alternative questions (SM-2 or LTS? file storage or SQLite?), risk questions (what if data is lost?); you answer, it asks next — the thinking yours, the wind its. ③ Plan: plan mode (Shift+Tab or --permission-mode plan) — it drafts structure; press Enter to edit and draw your own boundary lines. Then the repo: git init + CLAUDE.md (build/test commands, conventions) — not /init here; an empty repo wants your hand."
  },
  story: `<p class="scene-setting">নকশা-বাগানের মালিক শাফিকুল ইসলাম সাহেব সকালে প্রথম কাজ করেন বীজ-ছাঁটাই — প্রতিটা বীজ জিজ্ঞেস করেন: তুই কেন? কোন মাটিতে? কতটুকু আলো লাগবে? উত্তর না মিললে বীজ বাগানে নামেই না। SmritiBox-এর বীজও তাঁর ছাঁটাই-টেবিলে এলো: কেন — তোমার মুখস্থ-জগৎ আর টুল-জগৎ আলাদা; কী — টার্মিনাল-চালিত SRS, সাধারণ ফাইলে ডেটা, কোনো অ্যাকাউন্ট নেই; কী নেই — GUI নেই, সিঙ্ক নেই, অ্যালগরিদম-দাবি নেই (SM-2-ই থাক, পুরোনো ও প্রমাণিত)। তারপর তাঁর ব্রেইনস্টর্ম-ছাদ: তিনি কাউকে উত্তর বলতে বসান না — প্রশ্ন করতে বসান; Claude-কেও সেই নিয়মে বসালেন: 'তুমি শুধু প্রশ্ন করো, আমি উত্তর দিই' — সীমা-প্রশ্ন, বিকল্প-প্রশ্ন, ঝুঁকি-প্রশ্ন; এক ঘণ্টার ঝড়ে সিদ্ধান্তগুলো পাকা: কার্ড-সংখ্যা সীমাহীন, রিভিউ ২০-খানার প্যাকেটে, ডেটা JSON-লাইনে ফাইলে, ব্যাকআপ কপি করেই। শেষে পরিকল্পনা-টেবিল (plan-মোড) — কাঠামো উঠলো, শাফিকুল সাহেব নিজের হাতে সীমা-রেখা টানলেন; তারপর মাটি খোড়া: git init, CLAUDE.md-তে রীতি লেখা — বীজ এখন চারা, পরের দরজায় ইট ভাটবে।</p>
<p class="scene-setting en">Shafiqul Islam, owner of the design garden, starts each morning pruning seeds — every seed is asked: why you? which soil? how much sun? No answer, no planting. SmritiBox's seed reached his table: why — your memorization world and tool world live apart; what — terminal-driven SRS, data in plain files, no accounts; non-goals — no GUI, no sync, no algorithm-invention (SM-2 stays; old and proven). Then his brainstorm-roof: he never seats anyone to GIVE answers — only to ASK; Claude got the same rule: 'you only ask, I answer' — constraint, alternative, risk questions; one stormy hour ripened the decisions: unlimited cards, reviews in packs of 20, JSON-lines file storage, backup by plain copy. Finally the planning table (plan mode) — structure rose; Shafiqul drew the boundary lines himself; then the soil: git init, conventions written into CLAUDE.md — seed to sapling; the next door fires the bricks.</p>

<div class="code-block"># ── ধাপ ১: ভিত্তি-প্রশ্ন (খাতায় লেখো, টার্মিনালে নয়) ──
কেন:  আমার মুখস্থ-তালিকা আর টুল আলাদা জগতে
কী:   টার্মিনাল-চালিত SRS ফ্ল্যাশকার্ড; ডেটা সাধারণ ফাইলে
নেই:  GUI নেই · মোবাইল নেই · ক্লাউড নেই · নতুন অ্যালগরিদম নেই

# ── ধাপ ২: ব্রেইনস্টর্ম — Claude-কে প্রশ্ন-মেশিন বানাও ──
claude
> আমি SmritiBox বানাচ্ছি — টার্মিনাল SRS ফ্ল্যাশকার্ড।
> তুমি উত্তর দিও না; প্রতি উত্তরে ঠিক একটা করে
> কঠিন প্রশ্ন করো: সীমা-প্রশ্ন, বিকল্প-প্রশ্ন, ঝুঁকি-প্রশ্ন।
# প্রতিটা উত্তর তোমার সিদ্ধান্ত-খাতায় লেখো — যেমন:
#   স্টোরেজ: JSON-লাইন ফাইল (দেখা যায়, git-এ থাকে, ব্যাকআপ=cp)
#   রিভিউ-প্যাকেট: ২০ কার্ড · রেটিং: 0–5 (SM-2-র মূল স্কেল)

# ── ধাপ ৩: PRD-খসড়া → plan মোড ──
claude --permission-mode plan   # বা Shift+Tab
> এই সিদ্ধান্তগুলো থেকে SmritiBox v1.0-র পূর্ণ নকশা দাও:
> মডিউল-ভাগ, ফাইল-গঠন, CLI-আদেশ, টেস্ট-পরিকল্পনা।
# নকশা এলে Enter → নিজের হাতে ঘষামাজা:
#   • মিলাও: src/smritibox/{card.py, sm2.py, cli.py, store.py}
#   • বাদ দাও: যা v1-এর নয় (রং, স্ট্যাট-গ্রাফ পরে)
#   • যোগ করো: টেস্ট-আগে-কোড (দরজা ৩৩-এর শপথ)

# ── ধাপ ৪: মাটি খোড়া — রিপো + রীতি-খাতা ──
mkdir smritibox && cd smritibox && git init
touch README.md && mkdir -p src/smritibox tests
# CLAUDE.md নিজের হাতে (খালি রিপোতে /init-এর কিছু পড়ার নেই):
cat > CLAUDE.md <<'EOF'
# SmritiBox — টার্মিনাল SRS ফ্ল্যাশকার্ড
বিল্ড: python -m smritibox add "প্রশ্ন" "উত্তর"
টেস্ট: pytest -q          (প্রতি commit-এ, নীতি)
রীতি:  টেস্ট-আগে · ছোট মডিউল · বাংলা-ইংরেজি ডক-স্ট্রিং
EOF
git add -A && git commit -m "বীজ: রিপো + রীতি-খাতা"</div>

<table class="kv-table">
<tr><th>ধাপ</th><th>যন্ত্র</th><th>ফল</th></tr>
<tr><td class="hl">ভিত্তি-প্রশ্ন</th><td>খাতা+কলম</td><td>কেন/কী/নেই — লিখিত</td></tr>
<tr><td class="hll">ব্রেইনস্টর্ম</td><td>Claude = প্রশ্ন-মেশিন</td><td>সিদ্ধান্ত-তালিকা</td></tr>
<tr><td class="hl">PRD → plan</td><td>--permission-mode plan</td><td>সম্পাদিত নকশা</td></tr>
<tr><td class="hll">রিপো-ভিত্তি</td><td>git init + CLAUDE.md</td><td>চারা-রিপো</td></tr>
</table>

<div class="diagram">
<div class="diag-title">বীজ থেকে চারা — Seed to Sapling</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d32" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#22c55e"/></marker>
</defs>
<rect class="node" x="15" y="65" width="100" height="44" rx="10"/><text class="lbl" x="65" y="83">বীজ</text><text class="lbl-sm" x="65" y="99">কেন/কী/নেই</text>
<rect class="node-cyan" x="145" y="65" width="100" height="44" rx="10"/><text class="lbl-cyan" x="195" y="83">ঝড়</text><text class="lbl-sm" x="195" y="99">প্রশ্ন-ব্রেইনস্টর্ম</text>
<rect class="node-hot" x="275" y="65" width="100" height="44" rx="10"/><text class="lbl-hot" x="325" y="83">নকশা</text><text class="lbl-sm" x="325" y="99">plan-মোড PRD</text>
<rect class="node-leaf" x="405" y="65" width="140" height="44" rx="10"/><text class="lbl-leaf" x="475" y="83">চারা-রিপো</text><text class="lbl-sm" x="475" y="99">git + CLAUDE.md</text>
<line x1="115" y1="87" x2="141" y2="87" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d32)"/>
<line x1="245" y1="87" x2="271" y2="87" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d32)"/>
<line x1="375" y1="87" x2="401" y2="87" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d32)"/>
<rect class="cell" x="15" y="128" width="530" height="36" rx="8"/>
<text class="lbl-sm" x="280" y="144">প্রশ্ন-মেশিন-রীতি: Claude উত্তর দেয় না, প্রশ্ন করে — সীমা · বিকল্প · ঝুঁকি; সিদ্ধান্ত তোমার খাতায়</text>
<text class="lbl-sm" x="280" y="159">খালি রিপোতে /init নয় — CLAUDE.md নিজের হাতে; নকশায় Enter-সম্পাদনা, তারপর অনুমোদন</text>
</svg>
<div class="diag-cap">কেন→কী→ঝড়→নকশা→চারা — প্রজেক্টের প্রথম দিনের পাঁচ পা; পরের দরজায় ইট ভাটে।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>বাগান-মালিকের সতর্কতা:</strong> সবচেয়ে সাধারণ মৃত্যু: ব্রেইনস্টর্ম-মুগ্ধতা — Claude-র চমকপ্রদ আইডিয়া-বৃষ্টিতে ভিজে গিয়ে নিজের কেন-টা হারানো; প্রশ্ন-মেশিন-রীতি ঠিক এজন্যই। দ্বিতীয় ফাঁদ: নকশা-স্ফীতি — v1-এ সব বৈশিষ্ট্য ঢোকানো; নেই-তালিকা কথা রাখো, বাগান আগে ছোট। তৃতীয়: খালি রিপোতে /init চালানো — পড়ার কিছু নেই, খারাপ খসড়া হবে; CLAUDE.md এখন তোমার হাতের কাজ। আর প্রতিটা সিদ্ধান্ত কমিট করো — সিদ্ধান্ত-ইতিহাসও ইতিহাস (B61)।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The gardener's caution:</strong> the commonest death: brainstorm intoxication — drowning in Claude's dazzling idea-rain and losing your own why; that is exactly what the question-machine rule prevents. Second trap: design bloat — stuffing v1 with everything; keep the non-goals, keep the garden small. Third: running /init on an empty repo — nothing to read, poor draft; CLAUDE.md is handwork now. And commit every decision — decision-history is history too (B61).</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ কোড-আগে-সব</div>আইডিয়া পেয়ে সরাসরি কোড · Claude-র উত্তরে নিজের চিন্তা বিলীন · v1-এ জাদুঘর · রিপোতে রীতি-না-লেখা</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ শাফিকুল সাহেবের বাগান</div>কেন/কী/নেই লিখিত · প্রশ্ন-ঝড়ে নিজ-সিদ্ধান্ত · plan-নকশা নিজ-সম্পাদনা · রিপো+CLAUDE.md প্রথম কমিট</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">কেন/কী/নেই</div><div class="sc-label">ভিত্তি-ত্রয়ী, লিখিত</div></div>
<div class="stat-card"><div class="sc-num">প্রশ্ন-মেশিন</div><div class="sc-label">Claude প্রশ্ন করে, উত্তর নয়</div></div>
<div class="stat-card"><div class="sc-num">plan-মোড</div><div class="sc-label">PRD-খসড়া + নিজ-সম্পাদনা</div></div>
<div class="stat-card"><div class="sc-num">CLAUDE.md</div><div class="sc-label">রীতি-খাতা প্রথম কমিটে</div></div>
</div>

<p class="verse">নিয়তের পাঠ: হাদিসে কুদসি-সুলভ বাণী — কাজ নিয়তের ওপর দাঁড়ানো; আর সাহাবায়ে কেরাম প্রশ্ন করতেন, মাথা নত করে শুনতেন না। নকশা-বাগানও: প্রথম প্রশ্ন 'কেন', শেষ পরীক্ষা 'আমার সত্যি দরকার কি না' — নিয়ত স্পষ্ট হলে বাগান নিজেই ফোটে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🌱 কেন/কী/নেই লেখো → Claude-কে প্রশ্ন-মেশিন বানাও → plan-মোডে নকশা, Enter-এ নিজ-সম্পাদনা → git+CLAUDE.md।<br>কারণ: কোড দিয়ে নয়, প্রশ্ন দিয়ে শুরু — চারা তখনই শক্ত।</div></div>
<div class="callout"><b>📋 ফলাফল-পাতা ৩২ — পরিকল্পনা থেকে রিপো-জন্মের আসল ফল</b> — <span class="en">Actual outcome (verified 2026-09-16)</span><pre class="code-block">$ git init && git add -A && git commit -m "SmritiBox v1.0.0: ..."
→ প্রথম commit a4594ec ✓

রিপো-গঠন (এই পথেই তোমারটা দেখতে হবে):
smritibox/
├── src/smritibox/
│   ├── __init__.py
│   ├── card.py      ← মডিউল ১: ডেটা
│   ├── sm2.py       ← মডিউল ২: গণিত
│   ├── store.py     ← মডিউল ৩: সংরক্ষণ
│   └── cli.py       ← মডিউল ৪: দরজা
├── tests/
│   ├── test_sm2.py           (৭ টেস্ট)
│   ├── test_store_cli.py     (৪ টেস্ট)
│   └── test_review_session.py(১ টেস্ট)
├── pytest.ini        ← pythonpath = src
├── .gitignore        ← .venv/, __pycache__/, *.jsonl
└── README.md</pre></div>
`,
  senior: {
    title: "নকশা-বাগানের পাঠ — The Design-Garden Lesson",
    body: `<ul class="checklist">
<li>তিন ভিত্তি-প্রশ্ন লিখিতভাবে: <strong>কেন · কী · কী নেই</strong> (v1-সীমা)।</li>
<li>ব্রেইনস্টর্মে Claude-র নিয়ম: <strong>উত্তর নয়, প্রশ্ন</strong> — সীমা/বিকল্প/ঝুঁকি; সিদ্ধান্ত তোমার খাতায়।</li>
<li><strong>plan-মোডে</strong> PRD-খসড়া → Enter → নিজ-সম্পাদনা → অনুমোদন।</li>
<li>রিপো-ভিত্তি: <strong>git init + CLAUDE.md</strong> (নিজহাতে) — প্রথম কমিট।</li>
<li>প্রতি সিদ্ধান্ত কমিট — সিদ্ধান্ত-ইতিহাস B61-এর সম্মান।</li>
</ul>`
  }
});

// ── DOOR 33 · ইট-ভাটার হাপর — The Brick-Kiln's Forge ──
doors.push({
  num: 33,
  icon: "🧱",
  color: "#22c55e",
  name: "ইট-ভাটার হাপর",
  subtitle: "The Brick-Kiln's Forge",
  tech: "TDD: SM-2 → Card → Store → CLI · pytest · red-green-refactor",
  spirit: "সুন্নাহ-পদ্ধতি — আগে রেখা, পরে ইট",
  secret: "ইট-ভাটার মিস্ত্রি বাউরির নিয়ম: আগে রেখা, পরে ইট — টেস্ট আগে, কোড পরে; SM-2-র গণিত তোমার প্রথম ইট (সূত্র প্রমাণিত: I(1)=1, I(2)=6, I(n)=I(n−1)×EF; EF′=EF+0.1−(5−q)(0.08+(5−q)×0.02), মেঝে ১.৩; q<3 মানে রিসেট) — লাল→সবুজ→ঘষামাজা, প্রতিটা ইট পরীক্ষিত হয়ে বসে; ভাটার শেষে pytest সবুজ, কভারেজ তোমার গর্ব।",
  recall: {
    q: "TDD-র লাল→সবুজ→ঘষামাজা চক্রটা SM-2-র review() ফাংশনে কীভাবে চালাবে? প্রথম লাল-টেস্টটা লেখো দেখি, আর EF-সূত্রটা সংখ্যায় কী?",
    qen: "How does the red→green→refactor cycle run on SM-2's review() function? Write the first red test, and what is the EF formula in numbers?",
    a: "চক্র: ① লাল — সবচেয়ে ছোট আচরণের টেস্ট লেখো, চালাও, দেখো ব্যর্থ (AssertionError বা ImportError-ই প্রথম লাল); ② সবুজ — ন্যূনতম কোড লেখো টেস্ট পাসের ঠিক এতটুকু, বেশি নয়; ③ ঘষামাজা — নাম, ভাগ, ডক-স্ট্রিং পরিষ্কার, আচরণ-অপরিবর্তিত। প্রথম টেস্ট: def test_first_review_sets_interval_one(): c = Card(); c = sm2.review(c, quality=4); assert c.interval == 1 and c.reps == 1 — চালাও: লাল (sm2 নেই); তারপর src/smritibox/sm2.py-এ ন্যূনতম review() — সবুজ। EF-সূত্র সংখ্যায়: EF′ = EF + 0.1 − (5−q)×(0.08 + (5−q)×0.02); q=5 → +0.1 (EF 2.5→2.6); q=4 → 0.0; q=3 → −0.14; q<3 → রিসেট: reps=0, interval=1, EF-ক্ষয়সহ; EF কখনো ১.৩-এর নিচে নয়। প্রতি চক্রে কমিট: 'red: interval-1' → 'green: sm2.review' — ইটিহাস নিজেই বলে।",
    aen: "Cycle: ① red — write the smallest behavior test, run, watch it fail (AssertionError or ImportError IS the first red); ② green — write just enough code to pass, no more; ③ refactor — names, structure, docstrings, behavior unchanged. First test: def test_first_review_sets_interval_one(): c = Card(); c = sm2.review(c, quality=4); assert c.interval == 1 and c.reps == 1 — run: red (no sm2); then minimal review() in src/smritibox/sm2.py — green. EF formula in numbers: EF' = EF + 0.1 − (5−q)×(0.08 + (5−q)×0.02); q=5 → +0.1 (2.5→2.6); q=4 → 0.0; q=3 → −0.14; q<3 → reset: reps=0, interval=1, EF still eroded; EF never below 1.3. Commit every cycle: 'red: interval-1' → 'green: sm2.review' — history tells the story itself.",
    you: "cd smritibox && pytest -q  # লাল দেখো; তারপর সবুজ পর্যন্ত চক্র চালাও — প্রতিটা ধাপে git log --oneline এ ইতিহাস"
  },
  story: `<p class="scene-setting">বাউরি মিস্ত্রির হাপর শহরের সবচেয়ে ধৈর্যশীল কারখানা — সেখানে ইট পোড়ে রেখা ধরে। তাঁর তিন-পা-রীতি: প্রথমে মাটিতে রেখা টানো (টেস্ট লেখা — ইট কেমন হবে তার মাপ), তারপর ঠিক-ততটুকু মাটি চাপা (ন্যূনতম কোড), তারপর কোণা ঘষা (রিফ্যাক্টর — চেহারা সুন্দর, ওজন অপরিবর্তিত)। SmritiBox-এর প্রথম চুল্লি হলো SM-2 — পুরোনো, প্রমাণিত গণিত (SuperMemo-র ১৯৮৭-সূত্র): প্রথম রিভিউ ১ দিন, দ্বিতীয়টা ৬, তারপর প্রতিবার গুণ EF; প্রতিটা রেটিং (0–5) EF নাড়ায় সূত্রে; ভুল (q<3) মানে পুরো রিসেট; EF-এর তলা ১.৩। মিস্ত্রি প্রতিটা ইট ঢালার আগে চিৎকার করে বলেন: রেখা আগে! — টেস্ট দেখে ব্যর্থ হওয়া (লাল) না দেখে কেউ সবুজের স্বাদ পায় না। ভাটা শেষে চার মডিউল দাঁড়ায়: sm2 (গণিত), card (ডেটা), store (JSON-লাইন ফাইল), cli (আদেশ-দরজা) — প্রতিটার নিজের টেস্ট-রেখা, প্রতিটা পরীক্ষিত ইট।</p>
<p class="scene-setting en">Bauri Mistri's kiln is the town's most patient workshop — bricks bake along a line. His three-step ritual: first draw the line on the ground (write the test — the measure of the brick), then pack just that much clay (minimal code), then grind the corners (refactor — prettier face, same weight). SmritiBox's first furnace was SM-2 — old, proven math (SuperMemo's 1987 formulas): first review 1 day, second 6, then multiply by EF each time; every rating (0–5) moves EF by formula; a lapse (q<3) means full reset; EF's floor is 1.3. Before every pour the mistri shouts: line first! — no one tastes green without first seeing the test fail (red). At kiln's end four modules stand: sm2 (math), card (data), store (JSON-lines file), cli (command door) — each with its own test-line, each a proven brick.</p>

<div class="code-block"># ── ভাটার নীতি: রেখা আগে, ইট পরে ──
# tests/test_sm2.py — প্রথম লাল:
def test_first_review_sets_interval_one():
    from smritibox.sm2 import review, Card
    c = Card(question="q", answer="a")
    c = review(c, quality=4)
    assert c.interval == 1 and c.reps == 1
# pytest -q → ImportError: লাল ✓  (লালও অগ্রগতি!)

# সবুজ — ন্যূনতম (src/smritibox/sm2.py):
# def review(card, quality): ...  # ঠিক এতটুকুই
# পরের লাল: test_second_review_six → রেখা: interval==6
# পরের লাল: test_ef_formula → EF 2.5, q=4 → 2.5 (স্থির)
# পরের লাল: test_ef_floor → q=0 বারবার → EF>=1.3
# পরের লাল: test_lapse_resets → q<3 → reps=0, interval=1

# SM-2 সূত্র-সারণি (মুখস্থ নয়, টেস্টে প্রমাণিত):
#   I(1)=1 · I(2)=6 · I(n)=I(n-1)*EF
#   EF' = EF + 0.1 - (5-q)*(0.08 + (5-q)*0.02)
#   q=5: +0.1 · q=4: 0.0 · q=3: -0.14
#   q<3: reps=0, interval=1 · EF>=1.3 সর্বদা
#   দিন-ভগ্নাংশ → ceil (উপরে রাউন্ড)

# ইট-ক্রম (প্রতি ইট = কয়েক লাল-সবুজ চক্র):
#   ① sm2.py    গণিত    — ৭-৮ টেস্ট
#   ② card.py   ডেটা    — Card ডেটাক্লাস, to_dict/from_dict
#   ③ store.py  ফাইল    — append/load/due_today (JSON-লাইন)
#   ④ cli.py    দরজা    — add/list/review/export (argparse)
# pytest -q → সব সবুজ = ভাটা শেষ
pytest --cov=smritibox --cov-report=term  # সংখ্যা দেখো

# প্রতি চক্রে কমিট-জোড়া:
#   git commit -m "red: interval-6 টেস্ট"
#   git commit -m "green: sm2 দ্বিতীয়-রিভিউ"
# — লগ-ই তোমার নির্মাণ-ডায়েরি</div>

<table class="kv-table">
<tr><th>চক্র-পা</th><th>কাজ</th><th>চিহ্ন</th></tr>
<tr><td class="hl">লাল</td><td>ক্ষুদ্র টেস্ট, ব্যর্থ দেখা</td><td>AssertionError/ImportError</td></tr>
<tr><td class="hll">সবুজ</td><td>ন্যূনতম কোড</td><td>pytest পাস</td></tr>
<tr><td class="hl">ঘষামাজা</td><td>সৌন্দর্য, আচরণ-স্থির</td><td>টেস্ট সবুজই থাকে</td></tr>
<tr><td class="hll">কমিট</td><td>প্রতি চক্রে</td><td>red:/green: বার্তা</td></tr>
</table>

<div class="diagram">
<div class="diag-title">রেখা→ইট→ঘষা — The Kiln's Cycle</div>
<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d33" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#22c55e"/></marker>
</defs>
<rect class="node-hot" x="15" y="70" width="110" height="44" rx="10"/><text class="lbl-hot" x="70" y="88">লাল</text><text class="lbl-sm" x="70" y="104">টেস্ট ব্যর্থ</text>
<rect class="node-leaf" x="165" y="70" width="110" height="44" rx="10"/><text class="lbl-leaf" x="220" y="88">সবুজ</text><text class="lbl-sm" x="220" y="104">ন্যূনতম কোড</text>
<rect class="node-cyan" x="315" y="70" width="110" height="44" rx="10"/><text class="lbl-cyan" x="370" y="88">ঘষামাজা</text><text class="lbl-sm" x="370" y="104">আচরণ-স্থির সৌন্দর্য</text>
<rect class="node" x="465" y="70" width="80" height="44" rx="10"/><text class="lbl" x="505" y="88">কমিট</text><text class="lbl-sm" x="505" y="104">red:/green:</text>
<line x1="125" y1="92" x2="161" y2="92" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d33)"/>
<line x1="275" y1="92" x2="311" y2="92" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d33)"/>
<line x1="425" y1="92" x2="461" y2="92" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d33)"/>
<rect class="cell" x="15" y="132" width="530" height="42" rx="8"/>
<text class="lbl-sm" x="280" y="148">ইট-ক্রম: sm2 (গণিত) → card (ডেটা) → store (JSON-লাইন ফাইল) → cli (আদেশ-দরজা) — প্রতিটার নিজ-টেস্ট</text>
<text class="lbl-sm" x="280" y="166">SM-2 সত্য: I=1,6,×EF · EF′=EF+0.1−(5−q)(0.08+(5−q)0.02) · q&lt;3 রিসেট · তলা ১.৩ — সব টেস্টে প্রমাণিত</text>
</svg>
<div class="diag-cap">লাল→সবুজ→ঘষামাজা→কমিট — প্রতিটা চক্রে এক পরীক্ষিত ইট; চার ইটে ভাটা শেষ।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভাটা-মিস্ত্রির সতর্কতা:</strong> লাল-দেখা ধাপ বাদ দিও না — ImportError-ও সৎ লাল; যে ব্যর্থতা দেখেনি, তার সবুজ অহংকার। ন্যূনতম-নীতি ভাঙো না: সবুজ-পা‌য় ভবিষ্যতের জন্য কোড লেখা খাঁটি পাপ — পরের লাল-টেস্ট যখন আসবে, তখন। SM-2-র সংখ্যা নিজে বানিয়ো না — সূত্র যেমন আছে তেমন (উপরের সারণি), টেস্টে বসাও; নিজস্ব-অ্যালগরিদমের লোভ পরের প্রজেক্টে। আর ঘষামাজায় আচরণ বদলালে সে-ই নতুন লাল।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The kiln-master's caution:</strong> never skip seeing red — ImportError is honest red too; whoever hasn't seen failure owns an arrogant green. Don't break minimality: writing future-code in the green step is pure sin — the next red test will come when it comes. Don't invent SM-2's numbers — formulas as they are (table above), placed into tests; save custom-algorithm temptation for a later project. And if refactoring changes behavior, that itself is a new red.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ রেখা-ছাড়া ইট</div>কোড আগে, টেস্ট পরে (বা কখনোই না) · সবুজে ভবিষ্যত-কোড · নিজস্ব সূত্র-আবিষ্কার · দিন-শেষে কমিট-না</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ বাউরির ভাটা</div>লাল দেখা → ন্যূনতম সবুজ → ঘষামাজা → কমিট · সূত্র যথার্থ · চার মডিউল ক্রমে</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">লাল→সবুজ→ঘষা</div><div class="sc-label">প্রতি ইটের চক্র</div></div>
<div class="stat-card"><div class="sc-num">I=1, 6, ×EF</div><div class="sc-label">SM-2 ব্যবধান-সত্য</div></div>
<div class="stat-card"><div class="sc-num">EF ≥ 1.3</div><div class="sc-label">সহজতার তলা</div></div>
<div class="stat-card"><div class="sc-num">pytest -q</div><div class="sc-label">ভাটা-শেষের সবুজ</div></div>
</div>

<p class="verse">পদ্ধতির পাঠ: রাসূল (সা.)-এর নির্মাণ-সুন্নাহ — ভিত্তি আগে, দেয়াল পরে; মসজিদ-নির্মাণেও আগে ভিত-রেখা। বাউরির ভাটাও: টেস্ট-রেখা ভিত্তি, কোড-ইট তার উপরে — পদ্ধতির সুন্নাহ প্রকৌশলে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🧱 রেখা আগে (লাল দেখো), ন্যূনতম ইট (সবুজ), ঘষামাজা, কমিট; সূত্র SM-2-র মূল — নিজে বানানো নয়।<br>কারণ: পরীক্ষিত ইটের দেয়াল রাতারাতি দাঁড়ায়, চিরদিন দাঁড়ায়।</div></div>
<div class="callout"><b>📋 ফলাফল-পাতা ৩৩ — TDD-নির্মাণের আসল ফল</b> — <span class="en">Actual outcome (verified 2026-09-16)</span><pre class="code-block">$ .venv/bin/python -m pytest tests -q --no-header
..........  [100%]
11 passed in 0.02s

$ python -m smritibox.cli --file demo.jsonl list    (2 কার্ড যোগের পরে)
1. ঢাকার পুরনো নাম? -> জাহাঙ্গীরনগর  (due 2026-09-16, I=0, EF=2.50)
2. SM-2 প্রথম ব্যবধান? -> 1 দিন  (due 2026-09-16, I=0, EF=2.50)

$ python -m smritibox.cli --file demo.jsonl review    (রেটিং: 4, তারপর 5)
প্রশ্ন: ঢাকার পুরনো নাম?   উত্তর: জাহাঙ্গীরনগর   রেটিং: 4
প্রশ্ন: SM-2 প্রথম ব্যবধান?   উত্তর: 1 দিন   রেটিং: 5
রিভিউ সেশন শেষ ✓

রিভিউর পরে list:
1. ঢাকার পুরনো নাম? -> জাহাঙ্গীরনগর  (due 2026-09-17, I=1, EF=2.50)
2. SM-2 প্রথম ব্যবধান? -> 1 দিন  (due 2026-09-17, I=1, EF=2.60)

গণিত-প্রমাণ: q=4 → EF অপরিবর্তিত 2.50  [2.5+0.1−1×(0.08+0.02)=2.5]
           q=5 → EF 2.50→2.60 (+0.1); I: 0→1; due +১ দিন
টেস্ট-যাত্রা: প্রথম লাল 10/11 (EF ভাসমান-বিন্দু + প্রত্যাশা-ভুল) → সবুজ 12/12</pre></div>
`,
  senior: {
    title: "ইট-ভাটার পাঠ — The Brick-Kiln Lesson",
    body: `<ul class="checklist">
<li>চক্র: <strong>লাল দেখা → ন্যূনতম সবুজ → ঘষামাজা → কমিট</strong>; ImportError-ও লাল।</li>
<li>SM-2 সত্য টেস্টে প্রমাণিত: <strong>I=1,6,×EF · EF-সূত্র · q&lt;3 রিসেট · তলা ১.৩</strong>।</li>
<li>মডিউল-ক্রম: <strong>sm2 → card → store → cli</strong> — প্রতিটা নিজ-টেস্টসহ।</li>
<li>সবুজ-পায় ভবিষ্যত-কোড নয়; ঘষামাজায় আচরণ-স্থির।</li>
<li>ভাটা-শেষ: <strong>pytest -q সবুজ + --cov</strong> সংখ্যা দেখা।</li>
</ul>`
  }
});

// ── DOOR 34 · উদ্বোধন-উৎসবের দিন — The Grand-Opening Day ──
doors.push({
  num: 34,
  icon: "🎉",
  color: "#22c55e",
  name: "উদ্বোধন-উৎসবের দিন",
  subtitle: "The Grand-Opening Day",
  tech: "skill-প্যাকেজিং · pre-commit hook · reviewer-এজেন্ট · GitHub Actions CI · tag v1.0.0",
  spirit: "আমানত-হস্তান্তর — তৈরি জিনিস জগতের হাতে",
  secret: "বানানো প্রজেক্ট নিজের কাছে থাকলে অর্ধেক; উদ্বোধন মানে চার হস্তান্তর: রীতি স্কিলে (প্রতিদিনের কাজ এক-আদেশে), পাহারা হুকে (প্রতি কমিটে টেস্ট-ঘণ্টা), বিবেচনা এজেন্টে (reviewer চোখ), আর শপথ CI-তে (push-এ pytest বাধ্যতামূলক) — তারপর v1.0.0 ফিতা বেঁধে দোকান-খোলা; এই চার পাহারা চলতে থাকে তোমার ঘুমের পরেও।",
  recall: {
    q: "SmritiBox v1.0 উদ্বোধনের চার হস্তান্তর কী কী, কোন ফাইলে? আর রিলিজ-ফিতা কোন আদেশে, কোন ধরনের tag?",
    qen: "What are the four handovers of SmritiBox v1.0's opening, in which files? And the release ribbon — which command, which tag type?",
    a: "① রীতি→স্কিল: .claude/skills/smritibox-dev/SKILL.md — ফ্রন্টম্যাটারে বর্ণনা ('Use when working on SmritiBox…'), শরীরে নির্মাণ-রীতি (টেস্ট-আগে, মডিউল-মানচিত্র, সাধারণ ফিক্স); এখন 'স্মৃতিবাক্সে কার্ড-ব্যাকআপ যোগ করো' বললেই Claude রীতি-স্মৃতি পায়। ② পাহারা→হুক: .claude/settings.json-এ PreToolUse/Bash? না — এখানে গিট-হুক: .git/hooks/pre-commit-এ pytest -q (ব্যর্থ=কমিট বাতিল); chmod +x মনে রাখো (B61-দরজা ১২-এর পাঠ)। ③ বিবেচনা→এজেন্ট: .claude/agents/reviewer.md — টুলস Read/Grep, মডেল haiku, শরীরে রিভিউ-ছাঁচ; এখন 'reviewer দিয়ে দেখাও' = প্রশ্নবিদ। ④ শপথ→CI: .github/workflows/ci.yml — push-এ pytest; সবুজ ব্যাজ README-তে। রিলিজ-ফিতা: git tag -a v1.0.0 -m 'SmritiBox v1.0.0 — প্রথম দোকান' && git push origin v1.0.0 — annotated (সনদসহ, B61-দরজা ৮), সংস্করণ-সংখ্যা দাবি-পূর্ণ: 1.0.0 = প্রতিশ্রুত পাবলিক API।",
    aen: "① Ritual→skill: .claude/skills/smritibox-dev/SKILL.md — description frontmatter ('Use when working on SmritiBox…'), body carrying build rituals (test-first, module map, common fixes); now 'add card-backup to SmritiBox' hands Claude the ritual memory. ② Guard→hook: not Claude's hooks — GIT hooks: .git/hooks/pre-commit running pytest -q (fail = commit cancelled); remember chmod +x (B61 Door 12). ③ Judgment→agent: .claude/agents/reviewer.md — tools Read/Grep, model haiku, body a review template; 'check with reviewer' = instant second opinion. ④ Oath→CI: .github/workflows/ci.yml — pytest on push; green badge in README. Release ribbon: git tag -a v1.0.0 -m '…' && git push origin v1.0.0 — annotated (certificated, B61 Door 8), the version number a promise: 1.0.0 = promised public API.",
    you: "git tag -a v1.0.0 -m 'SmritiBox v1.0.0' && git push origin v1.0.0 && git describe --tags && ls .claude/skills .claude/agents .github/workflows"
  },
  story: `<p class="scene-setting">দোকান-উদ্বোধনের দিন শাফিকুল সাহেব চারটা কাজ করেন — আর বলেন, এই চারটাই দোকানকে দোকান করে। প্রথম: রীতি-বাঁধাই — প্রতিদিনের কাজের নিয়ম এক স্ক্রলে বেঁধে কাউন্টারে রাখা (skill): 'SmritiBox-এ কাজ কর' বললেই নতুন কারিগর পুরোনো রীতি পায়। দ্বিতীয়: দরজার পাহারা — প্রতিটা কমিটের আগে টেস্ট-ঘণ্টা (git hook): ভাঙা ইট গুদামে ঢুকতে পারে না। তৃতীয়: বৈমাত্রেয় চোখ — তাঁর নিজের চোখের বাইরে এক রিভিউয়ার-কারিগর (agent): ক্লান্ত দিনেও দ্বিতীয় মত প্রস্তুত। চতুর্থ: শপথের দেয়াল — যে-কারও মেশিনে, যে-কোনো push-এ টেস্ট চলবেই (CI): ঘুমাক বা ছুটিতে থাক, দোকানের শৃঙ্খলা জেগে থাকে। তারপর ফিতা: v1.0.0 — সনদসহ ট্যাগ, গায়ে লেখা প্রতিশ্রুতি: এই দরজার পেছনে যা আছে, তা ব্যবহারকারীর নিরাপদ; সংখ্যাটা মুখস্থ সাজেশন নয় — চুক্তি। সন্ধ্যায় শাফিকুল সাহেব দোকানের বাতি নিভান না — চার পাহারাই জ্বলজ্বল করে।</p>
<p class="scene-setting en">On opening day Shafiqul does four things — and says these four make a shop a shop. First: binding the rituals — daily working rules scroll-bound at the counter (a skill): say 'work on SmritiBox' and any new craftsman receives the old rituals. Second: the door guard — a test bell before every commit (a git hook): broken bricks never enter the warehouse. Third: a step-mother's eye — beyond his own eyes, a reviewer-craftsman (an agent): a second opinion ready even on tired days. Fourth: the oath wall — on anyone's machine, on every push, tests must run (CI): asleep or on holiday, the shop's discipline stays awake. Then the ribbon: v1.0.0 — a certificated tag bearing a promise: what lies behind this door is safe for users; the number is not decoration — it is a contract. At dusk Shafiqul does not turn off the shop lights — all four guards keep glowing.</p>

<div class="code-block"># ── হস্তান্তর ১: রীতি→স্কিল (.claude/skills/smritibox-dev/SKILL.md) ──
---
name: smritibox-dev
description: Use when working on the SmritiBox project —
  build rituals, module map, test-first law, common fixes.
---
# SmritiBox নির্মাণ-রীতি
- নিয়ম: টেস্ট আগে (লাল→সবুজ→ঘষামাজা), প্রতি চক্রে কমিট
- মানচিত্র: sm2=গণিত · card=ডেটা · store=JSON-লাইন · cli=দরজা
- সাধারণ ফিক্স: তারিখ-তুলনা → date.today() একবার; EF → মূল সূত্র

# ── হস্তান্তর ২: পাহারা→git-হুক (.git/hooks/pre-commit) ──
#!/bin/sh
pytest -q || { echo "❌ টেস্ট লাল — কমিট বন্ধ"; exit 1; }
chmod +x .git/hooks/pre-commit   # নীরব-ঘণ্টা রোধ!

# ── হস্তান্তর ৩: বিবেচনা→এজেন্ট (.claude/agents/reviewer.md) ──
---
name: reviewer
description: Use for reviewing SmritiBox changes before commit.
tools: Read, Grep
model: haiku
---
তুমি কঠোর রিভিউয়ার: (1) টেস্ট-আচরণ মিল করো (2) SM-2 সূত্রের
সততা (3) নামকরণ; আউটপুট: ফাইল:লাইন-সহ টেবিল।

# ── হস্তান্তর ৪: শপথ→CI (.github/workflows/ci.yml) ──
name: ci
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: '3.12' }
      - run: pip install pytest
      - run: pytest -q
# README-তে ব্যাজ: [![ci](…/actions/workflows/ci.yml/badge.svg)]

# ── ফিতা: v1.0.0 (সনদসহ, প্রতিশ্রুতি-সংখ্যা) ──
git tag -a v1.0.0 -m "SmritiBox v1.0.0 — প্রথম দোকান"
git push origin v1.0.0        # ফিতা push ছাড়া কারো চোখে নয়
git describe --tags           # v1.0.0 — দূরত্ব-মাপ এখন শুরু</div>

<table class="kv-table">
<tr><th>হস্তান্তর</th><th>ফাইল</th><th>কী জাগে</th></tr>
<tr><td class="hl">রীতি</td><td>.claude/skills/smritibox-dev/</td><td>নতুন সেশনে পুরোনো নিয়ম</td></tr>
<tr><td class="hll">পাহারা</td><td>.git/hooks/pre-commit</td><td>ভাঙা কমিট বন্ধ</td></tr>
<tr><td class="hl">বিবেচনা</td><td>.claude/agents/reviewer.md</td><td>দ্বিতীয় চোখ</td></tr>
<tr><td class="hll">শপথ</td><td>.github/workflows/ci.yml</td><td>প্রতি push-এ টেস্ট</td></tr>
<tr><td class="hl">ফিতা</td><td>tag -a v1.0.0</td><td>সংস্করণ-চুক্তি</td></tr>
</table>

<div class="diagram">
<div class="diag-title">চার পাহারার দোকান — The Four-Guard Shop</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d34" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#22c55e"/></marker>
</defs>
<rect class="node" x="15" y="73" width="120" height="44" rx="10"/><text class="lbl" x="75" y="91">SmritiBox</text><text class="lbl-sm" x="75" y="107">pytest সবুজ</text>
<rect class="node-cyan" x="175" y="18" width="120" height="40" rx="9"/><text class="lbl-cyan" x="235" y="36">স্কিল</text><text class="lbl-sm" x="235" y="52">রীতি-স্মৃতি</text>
<rect class="node-cyan" x="175" y="72" width="120" height="40" rx="9"/><text class="lbl-cyan" x="235" y="90">হুক</text><text class="lbl-sm" x="235" y="106">কমিট-পাহারা</text>
<rect class="node-cyan" x="175" y="126" width="120" height="40" rx="9"/><text class="lbl-cyan" x="235" y="144">এজেন্ট</text><text class="lbl-sm" x="235" y="160">রিভিউ-চোখ</text>
<rect class="node-hot" x="335" y="72" width="110" height="40" rx="9"/><text class="lbl-hot" x="390" y="90">CI</text><text class="lbl-sm" x="390" y="106">push-শপথ</text>
<rect class="node-leaf" x="475" y="72" width="70" height="40" rx="10"/><text class="lbl-leaf" x="510" y="90">v1.0.0</text><text class="lbl-sm" x="510" y="106">ফিতা</text>
<line x1="135" y1="82" x2="171" y2="40" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d34)"/>
<line x1="135" y1="95" x2="171" y2="94" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d34)"/>
<line x1="135" y1="108" x2="171" y2="144" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d34)"/>
<line x1="295" y1="94" x2="331" y2="94" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d34)"/>
<line x1="445" y1="94" x2="471" y2="94" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d34)"/>
<rect class="cell" x="15" y="172" width="530" height="14" rx="7"/><text class="lbl-sm" x="280" y="182">ট্যাগ সনদসহ (-a) · push বাধ্যতামূলক · 1.0.0 = পাবলিক-API প্রতিশ্রুতি — সংখ্যা চুক্তি, সাজেশন নয়</text>
</svg>
<div class="diag-cap">স্কিল-হুক-এজেন্ট-CI: চার পাহারা তোমার অনুপস্থিতিতেও জাগে; ফিতা তখনই বাঁধো যখন সবুজ সত্য।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দোকান-মালিকের সতর্কতা:</strong> ফিতা-তাড়াহুড়ো সবচেয়ে বড় পাপ — লাল CI-র উপর v1.0.0 বাঁধা মানে চুক্তি ভাঙা শুরুতেই; প্রথমে সবুজ, পরে ফিতা। 1.0.0-র অর্থ বুঝে বাঁধো: এর পরের কোনো ভাঙা বদল মানে 2.0.0 (semver-চুক্তি)। হুকে chmod +x ভুলে গেলে পাহারা নীরবে ঘুমাবে (B61-১২)। স্কিলের বর্ণনা কর্ম-ভিত্তিক লেখো — 'Use when working on SmritiBox', কবিতা নয়। আর CI-ব্যাজ README-তে বসাও — দোকানের সামনে সবুজ বাতি ক্রেতার আস্থা।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The shopkeeper's caution:</strong> ribbon-rushing is the deadliest sin — tagging v1.0.0 over a red CI breaks the contract at the start; green first, ribbon after. Understand 1.0.0: any later breaking change means 2.0.0 (the semver contract). Forget chmod +x and the guard sleeps silently (B61-12). Write the skill's description task-first — 'Use when working on SmritiBox', not poetry. And put the CI badge in README — a green lamp at the shopfront builds trust.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ নিঃস্ব-দোকান</div>রীতি মাথায়, ফাইলে নয় · হুক নেই, CI নেই · লাল-এর উপর ফিতা · 0.9-rc-final-final নামজারি</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ শাফিকুলের দোকান</div>স্কিল-রীতি · হুক-পাহারা (chmod!) · এজেন্ট-চোখ · CI-শপথ সবুজ · সনদসহ v1.0.0</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">SKILL.md</div><div class="sc-label">রীতি-স্মৃতি ফাইলে</div></div>
<div class="stat-card"><div class="sc-num">pre-commit</div><div class="sc-label">pytest-ঘণ্টা (+x)</div></div>
<div class="stat-card"><div class="sc-num">reviewer.md</div><div class="sc-label">haiku দ্বিতীয়-চোখ</div></div>
<div class="stat-card"><div class="sc-num">v1.0.0</div><div class="sc-label">সনদসহ ফিতা, সবুজের পরে</div></div>
</div>

<p class="verse">হস্তান্তরের পাঠ: হযরত উসমান (রা.)-এর কুরআন-মুসহাফ সংকলন — এক প্রজন্মের আমানত পরের প্রজন্মের হাতে নিয়ম-সহ পৌঁছানো; একা পড়ার জিনিস জাতির সম্পদ। SmritiBox-এর উদ্বোধনও: ব্যক্তির প্রজেক্ট চার-পাহারায় জন-সম্পদ — আর v1.0.0 তার লিখিত আমানতনামা।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🎉 চার হস্তান্তর: রীতি→স্কিল, পাহারা→হুক(+x), চোখ→এজেন্ট, শপথ→CI; সবুজের পরে v1.0.0 ফিতা।<br>কারণ: দোকান তখনই খোলে যখন পাহারা তোমার অনুপস্থিতিতেও জাগে।</div></div>
<div class="callout"><b>📋 ফলাফল-পাতা ৩৪ — চার হস্তান্তরের আসল ফল</b> — <span class="en">Actual outcome (verified 2026-09-16)</span><pre class="code-block">$ git commit -m "bad commit"    (১টা লাল টেস্ট রেখে)
F............  [100%]   1 failed, 12 passed
✗ টেস্ট লাল — আগে সবুজ করো, তারপর commit
exit 1 — commit blocked ✓ (হুক কাজ করেছে)

$ git commit -m "docs: README"    (সবুজ গাছ)
............  [100%]   12 passed in 0.02s
→ commit 9a94844 ✓

$ git tag -a v1.0.0 -m "SmritiBox 1.0.0: stable CLI — add/list/review/export"
$ git tag -n1
v1.0.0   SmritiBox 1.0.0: stable CLI — add/list/review/export
$ git cat-file -t v1.0.0
tag    ← annotated (tag-object, শুধু পয়েন্টার নয়)
$ git cat-file -p v1.0.0 | head -4
object 9a94844caefc8ab1eafd35ded43d5f25b8f2d782
type commit
tag v1.0.0
tagger Learner <learner@example.com> 1789609931 -0400</pre></div>
`,
  senior: {
    title: "উদ্বোধন-উৎসবের পাঠ — The Grand-Opening Lesson",
    body: `<ul class="checklist">
<li>রীতি <strong>SKILL.md</strong>-এ (কর্ম-বর্ণনা), কাউন্টারে বাঁধা।</li>
<li><strong>.git/hooks/pre-commit</strong> → pytest; <strong>chmod +x</strong> নীরব-ঘণ্টার একমাত্র ওষুধ।</li>
<li>রিভিউ-চোখ <strong>.claude/agents/reviewer.md</strong> (haiku, Read/Grep)।</li>
<li>শপথ <strong>.github/workflows/ci.yml</strong> — push-এ pytest; ব্যাজ README-তে।</li>
<li>ফিতা <strong>git tag -a v1.0.0</strong> — সবুজের পরেই; semver-চুক্তি মনে রেখে।</li>
</ul>`
  }
});


// ── DOOR 26 · স্থপতির সিংহাসন — The Architect's Throne ──
doors.push({
  num: 35,
  icon: "🏛️",
  color: "#fbbf24",
  name: "স্থপতির সিংহাসন",
  subtitle: "The Architect's Throne — Full Circle",
  tech: "SDK Deep Mastery · Sandbox · Precedence · Synthesis",
  spirit: "আমানতুল-ফিতরাত — প্রকৃতির ওপর অর্পিত আমানত",
  secret: "দরজা ১-১০ শেখায় চালাতে, ১১-১৪ শেখায় বানাতে — ১৭ শেখায় স্থাপত্য: পুরো ইঞ্জিন নিজের কোডে, ঘেরা প্রাচীরে, নিজের আইনে।",
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

<div class="secret-box"><div class="label">শেষ তালিসমান — The Final Talisman</div><div class="text">🏛️ মাস্টারির তিন তলা: চালাও (১-১০) → বানাও (১১-১৪) → বাড়াও (১৫-১৬) → আইন লেখো (১৭) — SDK-তে ইঞ্জিন, sandbox-এ প্রাচীর, precedence-এ শৃঙ্খলা।<br>কারণ: যে শুধু চালায় সে চাকর, যে বানায় সে কারিগর, যে আইন লেখে সে স্থপতি।</div></div>`,
  senior: {
    title: "স্থপতির পরের শহর — The Next City",
    body: `<p>এই বই শেষ — পথ নয়:</p>
<ul class="checklist">
<li><strong>Book ১৯ (Tool Forge)</strong> — MCP সার্ভার নির্মাণের পূর্ণ শিল্প; দরজা ১৫-এর যন্ত্রশালা সেখানে কারখানা।</li>
<li><strong>Book ১২ (Autonomous Mind)</strong> — এজেন্ট-স্থাপত্যের তত্ত্ব; দরজা ১৭-এর সংবিধানের দর্শন।</li>
<li><strong>Book ১ (Twenty-Seven Doors)</strong> — পুরো AI ইঞ্জিনিয়ারিং শহরের মানচিত্র; এই বই তার এক মহল্লা।</li>
<li>প্রথম আসল কাজ: নিজের কারখানায় একটা ছোট স্কিল → একটা প্লাগইন → নিজের মার্কেটপ্লেস — মোস্তফার সিঁড়ি নিজে ভাঙো।</li>
<li>মাসে একবার অফিসিয়াল ডক + changelog — শহরের আইন বদলায়, স্থপতিকেও খবর রাখতে হয়।</li>
</ul>`
  }
});
