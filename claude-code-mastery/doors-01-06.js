// ════════════════════════════════════════
// Book 59 v4 · The Terminal Craftsman — Complete Reference
// DOORS – 01 – 06 · doc-grounded (code.claude.com via context7)
// ════════════════════════════════════════
const doors = [];


// ── DOOR 1 · প্রথম হাতুড়ি — The First Hammer ──
doors.push({
  num: 1,
  icon: "🔨",
  color: "#f97316",
  name: "প্রথম হাতুড়ি",
  subtitle: "The First Hammer",
  tech: "Installation & First Session",
  spirit: "নিয়ত — ইচ্ছা থেকে কাজের শুরু",
  secret: "টার্মিনালে claude লিখে Enter — এই এক শব্দই প্রথম হাতুড়ি। বাকি সব এর পরে।",
  recall: {
    q: "তুমি একটা নতুন প্রজেক্ট ফোল্ডারে আছো। Claude Code-এর ইন্টারঅ্যাক্টিভ সেশন শুরু করার এক শব্দের কমান্ড কোনটা?",
    qen: "You are in a new project folder. What is the one-word command to start an interactive Claude Code session?",
    a: "শুধু claude লিখে Enter চাপো। এক লাইনের কাজের জন্য claude -p \"...\" (print mode) — কিন্তু প্রথম হাতুড়ি হলো claude।",
    aen: "Type claude and press Enter. For one-off tasks use claude -p \"...\" (print mode) — but the first hammer is claude."
  },
  story: `<p class="scene-setting">পুরান ঢাকার টিনের ছাউনির নিচে হাসু মিস্ত্রির কারখানা। সকালের ধুলো, কয়লার গন্ধ, দূরে রিকশার ঘণ্টা। তুমি হাসুর শেষ শাগরেদ — আজ প্রথম দিন। হাসু তোমার হাতে একটা হাতুড়ি দিলেন। নতুন, ভারী, হাতলে খেজুর-পাতার বাঁধন। বললেন — এটাই আজ তোমার সব। কারখানার সব যন্ত্র একদিন চালাবে, কিন্তু আজ শুধু এই হাতুড়ির সাথে পরিচিত হও।</p>
<p class="scene-setting en">Hasu the mistri's workshop under a tin roof in Old Dhaka. Morning dust, the smell of coal, a rickshaw bell far away. You are Hasu's last apprentice — today is your first day. Hasu places a hammer in your hands. New, heavy, date-palm binding on the handle. He says — this is everything you get today. One day you will run every machine in this workshop, but today, just meet this hammer.</p>

<div class="dialogue">হাসু মিস্ত্রি জিজ্ঞেস করলেন — বলো তো, এই হাতুড়ি দিয়ে প্রথম কাজ কী হবে? তুমি বললে — লোহা কাটা? না, শাগরেদ। হাতুড়ি ধরা। হাতুড়ি না চিনে লোহা কাটলে আঙুল যাবে। আগে হাতের ওজন, আগে হাতলের গরম, আগে টোকার শব্দ।</div>
<div class="dialogue en">Hasu asks — tell me, what is the first job with this hammer? You say — cutting iron? No, apprentice. Holding the hammer. Cut iron without knowing the hammer and you lose a finger. First the weight in the hand, first the warmth of the handle, first the sound of the strike.</div>

<p>Claude Code-এর হাতুড়ি হলো টার্মিনাল। ডকুমেন্টেশন বলছে — Claude Code হলো Anthropic-এর <strong>agentic coding tool</strong>: তোমার কোডবেস বুঝে কাজ করে, কোড লেখে, ব্যাখ্যা করে, git চালায় — সব স্বাভাবিক ভাষায়। ইনস্টল তিন রকমের যায়গায় হতে পারে — নিজের মেশিনের টার্মিনালে (CLI), VS Code / JetBrains IDE-তে, অথবা ওয়েব ও ডেস্কটপ অ্যাপে। আজ আমরা সবার আগে সেই প্রথম টার্মিনাল যাত্রা।</p>
<p class="en">Claude Code's hammer is the terminal. The docs call it Anthropic's <strong>agentic coding tool</strong>: it understands your codebase, writes code, explains, runs git — all in natural language. It installs in several places — the terminal CLI on your machine, VS Code / JetBrains IDEs, or the web and desktop apps. Today, the first terminal journey.</p>

<div class="code-block"># নতুন পথ (ডক-প্রস্তাবিত): curl -fsSL https://claude.ai/install.sh | bash
# বিকল্প পথ: npm install -g @anthropic-ai/claude-code
# (Node.js ২২ বা তার বেশি লাগবে; sudo দিয়ে নয়)

# ইনস্টলের পর, প্রজেক্ট ফোল্ডারে গিয়ে:
cd ~/my-project
claude            # ← ইন্টারঅ্যাক্টিভ সেশন শুরু

# প্রথম বার চালু করলে লগইন করতে বলবে (ANTHROPIC_API_KEY
# সেট করা থাকলে সেটিকে অনুমোদন করতে বলে)।
# এক লাইনের কাজ, উত্তর শুধু দরকার:
claude -p "এই প্রজেক্ট কী করে, এক লাইনে বলো"

# শুরুতেই একটা কাজ দিয়ে সেশন খোলা:
claude "fix the build error"

# কালকের কথা হারায় না — প্রতিটা সেশন সেভ থাকে:
claude --continue    # এই ফোল্ডারের সর্বশেষ সেশনে ফেরো
claude --resume      # তালিকা থেকে বেছে নিয়ে ফেরো</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>হাসুর সতর্কতা:</strong> হাতুড়ি হাতে পাওয়া মানেই ঘর ভাঙা শেখা নয়। প্রথম দিনেই প্রোডাকশন রিপোজিটরিতে ঢুকে বড় রিফ্যাক্টর শুরু করো না। একটা ছোট, নিরীহ প্রজেক্টে হাতুড়ির শব্দ চিনো।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Hasu's warning:</strong> Holding the hammer does not mean you know demolition. Do not open a production repo and start a big refactor on day one. Learn the sound of the strike on a small, harmless project first.</div></div>

<p>সেশনের ভেতরে তুমি নিজেই হাতুড়ির ঘা চালাও — প্রতিটা মেসেজ এক একটা টোকা। আর কখনো এক লাইনের উত্তর দরকার (স্ক্রিপ্টে, পাইপে) তখন <strong>print mode</strong>: claude -p — উত্তর এসে টার্মিনালে ছাপা হবে, সেশন খুলে থাকবে না। এই পার্থক্যটাই প্রথম দিনের আসল পাঠ: কথা বলা বনাম জিজ্ঞাসা করা।</p>
<p class="en">Inside the session, you swing the hammer yourself — each message is a strike. And when you need a one-line answer (in scripts, in pipes), that is <strong>print mode</strong>: claude -p — the answer prints to the terminal, no session stays open. This distinction is day one's real lesson: conversing versus asking.</p>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">claude</div><div class="sc-label">ইন্টারঅ্যাক্টিভ সেশন — কথার কারখানা</div></div>
<div class="stat-card"><div class="sc-num">-p</div><div class="sc-label">print mode — এক লাইনের জিজ্ঞাসা</div></div>
<div class="stat-card"><div class="sc-num">cd</div><div class="sc-label">যে ফোল্ডারে দাঁড়িয়ে আছো, সেটাই তার দুনিয়া</div></div>
</div>

<p class="verse">শুরুর আয়াত মনে করো — পড়ো, তোমার রবের নামে, যিনি সৃষ্টি করেছেন। যে নিয়তে হাতুড়ি ধরা হয়, সেই নিয়তেই ঘর তৈরি হয়। প্রথম টোকাটা ছোট, কিন্তু দিকটা সেখানেই ঠিক হয়ে যায়।</p>


<div class="diagram">
<div class="diag-title">প্রথম সেশনের জীবনচক্র — First Session Lifecycle</div>
<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d1" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="10" y="55" width="98" height="44" rx="10"/><text class="lbl" x="59" y="73">npm i -g</text><text class="lbl-sm" x="59" y="89">ইনস্টল</text>
<rect class="node-cyan" x="128" y="55" width="98" height="44" rx="10"/><text class="lbl-cyan" x="177" y="73">claude</text><text class="lbl-sm" x="177" y="89">প্রথম চালু</text>
<rect class="node-hot" x="246" y="55" width="104" height="44" rx="10"/><text class="lbl-hot" x="298" y="73">theme/login</text><text class="lbl-sm" x="298" y="89">একবারই</text>
<rect class="node-purple" x="370" y="55" width="98" height="44" rx="10"/><text class="lbl" x="419" y="73">prompt</text><text class="lbl-sm" x="419" y="89">কাজের আদেশ</text>
<rect class="node-leaf" x="488" y="55" width="62" height="44" rx="10"/><text class="lbl-leaf" x="519" y="73">↻</text><text class="lbl-sm" x="519" y="89">লুপ</text>
<line x1="108" y1="77" x2="127" y2="77" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d1)"/>
<line x1="226" y1="77" x2="245" y2="77" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d1)"/>
<line x1="350" y1="77" x2="369" y2="77" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d1)"/>
<line x1="468" y1="77" x2="487" y2="77" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d1)"/>
<rect class="cell" x="10" y="8" width="540" height="28" rx="8"/><text class="lbl-sm" x="280" y="26">প্রতিটা প্রম্পট = এক কাজ; শেষে ফাইল দেখো, তারপর পরের আদেশ — চক্রটাই দিনের কাজ</text>
</svg>
<div class="diag-cap">ইনস্টল → চালু → পরিচয় → কাজ → পুনরাবৃত্তি — প্রথম দিনের পুরো যাত্রা এই পাঁচ বাক্সে।</div>
</div>

<div class="code-block"># প্রথম সেশন — হুবহু এই ক্রমে চালাও (ট্রান্সক্রিপ্ট-ধাঁচ):
cd ~/my-project
claude
# ╭──────────────────────────────────────────╮
# │ ✻ Welcome to Claude Code!                 │
# │   theme › terminal / vim / prompt-স্টাইল  │
# ╰──────────────────────────────────────────╯
# > প্রথম প্রম্পট — ছোট রাখো:
> এই রিপোর প্রজেক্ট-কাঠামো বুঝিয়ে দাও, কোন ফাইলে কী আছে
#   Claude ফাইল পড়ে উত্তর দেয় — কোনো এডিট নয়, শুধু বোঝা
# > দ্বিতীয় প্রম্পট — এক কাজ:
> src/utils/date.ts-এ একটা বাংলা-তারিখ formatter যোগ করো
#   এডিটের আগে অনুমতি-প্রশ্ন আসবে → দেখো → y
# > শেষে ফাইল নিজে চোখে দেখো — Claude-কে নয়, কোডকে বিশ্বাস করো
git diff                       # B61: কী বদলাল আগে নিজে দেখো
git add -p                     # ভালো টুকরা বাছাই (B61 দরজা ২)
# শেষ: /quit বা Ctrl+D — সেশন মেমোরিতে থাকে (দরজা ১-এর ব্যবহার)</div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🔨 টার্মিনালে <strong>claude</strong> লিখো — হাতুড়ি হাতে ওঠার আগে হাতটা চেনো।<br>কারণ: টুল চেনা আর টুল চালানো এক কথা নয় — প্রথমটা ছাড়া দ্বিতীয়টা বিপদ।</div></div>
<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 1</span><pre class="code-block"># ── প্রম্পট ১ · প্রথম দিনের প্রথম প্রশ্ন (শুধু-পড়া, নিরাপদ) ──
&gt; এই রিপোর কাঠামো বুঝিয়ে দাও — কোন ফোল্ডারে কী আছে,
&gt; এন্ট্রি-পয়েন্ট কোথায় — শুরুতে এক প্যারায়, তারপর ছোট তালিকা
# ← Claude ফাইল ঘেঁটে উত্তর দেয়; কোনো ফাইল ছোঁয় না

# ── প্রম্পট ২ · প্রথম নিরাপদ কাজ (এডিট-অনুমোদন দেখো) ──
&gt; README.md-র একদম উপরে এক-লাইন প্রজেক্ট-সারাংশ যোগ করো
# ← এডিটের আগে diff দেখায়: + লাইনটা চোখের সামনে → y

# ── প্রম্পট ৩ · স্বচ্ছতা-প্রশ্ন (জাদু নয়, হিসাব) ──
&gt; এই উত্তর দিতে তুমি কোন কোন ফাইল পড়লে? শুধু পথ-তালিকা
# ← পড়া ফাইলের পাথগুলো — Claude কী দেখে বলছে তা প্রকাশ্য

# ── প্রম্পট ৪ · এক-লাইন জিজ্ঞাসা — সেশন খোলা ছাড়াই ──
$ claude -p "package.json-র মূল তিনটা dependency কী, এক লাইনে"
# ← উত্তর টার্মিনালে ছাপা, সেশন খুলবে না — স্ক্রিপ্টে ব্যবহারযোগ্য

# ── প্রম্পট ৫ · দিন-শেষ, পরদিনের ফেরা ──
$ exit
$ claude --continue
# ← গতকালের প্রসঙ্গ হাতেই ফেরে — আবার সব ব্যাখ্যা করতে হয় না</pre></div></div>
`,
  senior: {
    title: "প্রথম সপ্তাহে করণীয় — First Week Moves",
    body: `<ul class="checklist">
<li>ছোট একটা প্রজেক্টে <strong>claude</strong> দিয়ে সেশন খোলো — শুধু প্রশ্ন করো: এই কোড কী করে? কোথায় এন্ট্রি পয়েন্ট?</li>
<li><strong>claude -p</strong> দিয়ে এক লাইনের কাজ করো: লগ বিশ্লেষণ, কমিট মেসেজ, দ্রুত ব্যাখ্যা।</li>
<li>থিম, লগইন, টার্মিনালের বেসিক নেভিগেশন — এগুলো প্রথম দিনেই শেষ করো, পরে আর ফিরে দেখতে হবে না।</li>
<li>ডক: quickstart আর terminal-guide পাতা বুকমার্ক করো — হাতুড়ির ব্যবহারবিধি।</li>
</ul>
<p class="en">In Book 62, the Surveyor's Chain (Door 1) teaches walking the land before the hammer — a question-notebook for code archaeology.</p><p><strong>পাশের বই:</strong> Book 62-এর আমিনের শিকল (দরজা ১) শেখায় হাতুড়ির আগে জমি হাঁটা — code archaeology-র প্রশ্ন-খাতা। <em>(Book 62 · বারো লাইনের ইঞ্জিন)</em></p>`
  }
});

// ── DOOR 2 · কারখানার বাহির খাতা — The Workshop Ledger ──
doors.push({
  num: 2,
  icon: "📜",
  color: "#fbbf24",
  name: "কারখানার বাহির খাতা",
  subtitle: "The Workshop Ledger",
  tech: "CLAUDE.md — Project Memory",
  spirit: "সুহুফ — লিখে রাখা সম্মানিত পাতা",
  secret: "প্রতিটা নতুন শাগরেদ একই ভুল করে — যতক্ষণ না বাহির খাতায় নিয়ম লেখা থাকে। CLAUDE.md সেই খাতা।",
  recall: {
    q: "তোমার প্রজেক্টে Claude-কে প্রতিটা সেশনে একই নিয়ম মনে করাতে হয়। কোন ফাইলে, কোথায় লিখবে?",
    qen: "You need Claude to remember the same rules every session in your project. Which file, and where?",
    a: "প্রজেক্ট রুটে CLAUDE.md (বা .claude/CLAUDE.md)। সব মেশিনে সব প্রজেক্টের জন্য ~/.claude/CLAUDE.md। সেশন শুরুতেই সব স্তর একসাথে যোগ হয়ে লোড হয়, আর কম্প্যাকশনের পরেও ডিস্ক থেকে নতুন করে পড়া হয়।",
    aen: "CLAUDE.md at the project root (or .claude/CLAUDE.md). For all machines and projects: ~/.claude/CLAUDE.md. All levels load together, concatenated, at session start — and it is re-read fresh from disk after compaction."
  },
  story: `<p class="scene-setting">হাসু মিস্ত্রির স্ত্রী রাহেলা খাতুন — কারখানার আসল স্মৃতি। কাঁধে চক গুঁজে বসে থাকেন লম্বা টেবিলের মাথায়, সামনে মোটা বাহির খাতা। কোন লোহা কোন পানায় কাটলে মজবুত হয়, কোন খরিদ্দার কী মাপ চায়, শুক্রবার কোন দোকান বন্ধ — সব সেই খাতায়। নতুন শাগরেদ এলে হাসু কিছু বোঝান না — শুধু বলেন: আগে খাতা পড়।</p>
<p class="scene-setting en">Hasu's wife Rahela Khatoon is the workshop's real memory. She sits at the head of the long table, a chalk tucked behind her ear, a thick ledger before her. Which iron in which groove cuts strongest, which customer wants which measurement, which shop closes on Friday — all in that ledger. When a new apprentice arrives, Hasu explains nothing. He only says: read the ledger first.</p>

<div class="dialogue">একবার এক নতুন শাগরেদ খাতা পড়ল না — সোজা কাজে নামল। দুপুরেই ভুল মাপে কাটল, সন্ধ্যায় ভুল লোহায় জোড়া দিল। রাহেলা খাতুন চুপ করে খাতার পাতা উল্টে দেখালেন — এই নিয়ম তো লেখাই আছে, পাতা তিনে। শাগরেদ লজ্জায় লাল। উনি বললেন — লজ্জা পাওয়ার দরকার নেই, লেখা না থাকলে দোষটা আমার। যে নিয়ম বার বার ভুল হয়, সেটা খাতায় ওঠা পর্যন্ত দোষ কারখানার।</div>
<div class="dialogue en">Once a new apprentice skipped the ledger and went straight to work. By noon he had cut the wrong measurement; by evening he had joined the wrong iron. Rahela Khatoon quietly turned the pages — the rule was already written, page three. The apprentice flushed red. She said — no need for shame; if it was not written, the fault would be mine. Until a recurring mistake reaches the ledger, the fault belongs to the workshop.</div>

<p>Claude Code-এর প্রতিটা সেশন এক একজন নতুন শাগরেদ — মেমরি শূন্য হয়ে আসে (ডকের ভাষায়, সেশন শুরুতে CLAUDE.md টা system prompt-এর পরে একটা user message হিসেবে লোড হয়)। তার মানে তোমার নিয়মগুলো প্রতিবার নতুন করে বলার দরকার নেই — খাতায় লেখা থাকলেই হলো। ডক বলছে খাতা রাখার কয়েকটা তাক:</p>
<p class="en">Every Claude Code session is a new apprentice — it arrives with an empty memory (in the docs' words, CLAUDE.md loads at session start as a user message after the system prompt). So you never repeat your rules aloud — writing them in the ledger is enough. The docs give the ledger several shelves:</p>

<table class="kv-table">
<tr><th>তাক — Level</th><th>জায়গা — Location</th><th>কী লিখবে</th></tr>
<tr><td class="hl">প্রজেক্ট (সবার)</td><td>./CLAUDE.md বা ./.claude/CLAUDE.md</td><td>বিল্ড কমান্ড, কোড স্টাইল, টেস্ট রানার, রিপো রীতি — git-এ কমিট করো, দলের সবাই পায়</td></tr>
<tr><td class="hl">প্রজেক্ট (নিজের)</td><td>./CLAUDE.local.md</td><td>শুধু তোমার নিজের অভ্যাস — git-এ দেবে না</td></tr>
<tr><td class="hl">ইউজার (সব প্রজেক্ট)</td><td>~/.claude/CLAUDE.md</td><td>তোমার সব কাজের সাধারণ পছন্দ</td></tr>
<tr><td class="hl">উপ-ফোল্ডার</td><td>সাব-ডিরেক্টরির CLAUDE.md</td><td>ওই অংশের নিয়ম — দরকারের সময় লোড হয় (মনোরিপোতে প্যাকেজ-প্রতি খাতা এভাবেই)</td></tr>
<tr><td class="hl">রুলস</td><td>.claude/rules/*.md</td><td>ছোট ছোট আলাদা নিয়ম-ফাইল</td></tr>
</table>

<p>সব তাক <strong>যোগাত্মক</strong> — প্রশস্ত থেকে সরু, সবগুলো একসাথে জমা হয়ে লোড হয়; কেউ কাউকে মুছে দেয় না। বড় খাতা আরেকটা খাতা টানতে পারে — <strong>@path/to/file</strong> লিখলে সেই ফাইলও সাথে লোড হয়ে যায়। আর কম্প্যাকশন (পরের দরজায়) যত কঠিন হোক, প্রজেক্টের CLAUDE.md বেঁচে থাকে — ডিস্ক থেকে নতুন করে পড়া হয়।</p>
<p class="en">All shelves are <strong>additive</strong> — concatenated from broadest to most specific; none erases another. One ledger can pull in another — an <strong>@path/to/file</strong> import loads that file too. And however harsh compaction gets (next doors), the project CLAUDE.md survives — it is re-read fresh from disk.</p>

<div class="code-block"># নতুন প্রজেক্টে খাতার শুরু Claude-কে দিয়েই বানাও:
claude
> /init          # কোডবেস দেখে স্টার্টার CLAUDE.md লিখে দেয়

# খাতার ফাইলগুলো দেখো, খুলো, সম্পাদনা করো:
> /memory        # সব স্তরের খাতা-ফাইল তালিকা দেখায়, এডিটরে খোলে

# খাতা আসলে লোড হয়েছে কি না দেখো:
> /context       # কনটেক্সটে কী কী ঢুকেছে, সেই হিসাব

# খাতা লিখে যাও, এক লাইনে অন্য ফাইল টানো:
# CLAUDE.md-তে:  @docs/conventions.md</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>রাহেলার প্রথম নিয়ম — খাতা মোটা করো না:</strong> ডক সাবধান করছে — ফোলা CLAUDE.md করে দেয় Claude-কে তোমার আসল নির্দেশ উপেক্ষা করা। প্রতিটা লাইনের আগে প্রশ্ন: <em>"এই লাইনটা সরালে Claude ভুল করবে?"</em> — না হলে লাইনটা বাদ। একটা নির্দেশ বার বার ফাঁকি গেলে শুধু সেই লাইনে IMPORTANT যোগ করো; সব লাইনে জোর দিলে কোনো লাইনেই জোর থাকে না।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Rahela's first rule — do not fatten the ledger:</strong> the docs warn that a bloated CLAUDE.md makes Claude ignore your actual instructions. Before each line ask: <em>"Would removing this cause Claude to make mistakes?"</em> If not, cut the line. If one rule keeps getting skipped, add emphasis (IMPORTANT) to that line alone; emphasize many lines and none stands out.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খাতায় যা লেখে না</div>এমন সব কথা যা কোড পড়লেই বোঝা যায় · ভাষার সাধারণ রীতি · পুরো API ডকুমেন্টেশন · প্রতিদিন বদলানো তথ্য · লম্বা টিউটোরিয়াল · ফাইল-ধরে-ফাইল বর্ণনা</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ খাতায় যা লেখে</div>অনুমান-অযোগ্য বিল্ড/টেস্ট কমান্ড · ডিফল্ট থেকে আলাদা কোড স্টাইল · ব্রাঞ্চ/PR রীতি · প্রজেক্টের স্থাপত্যিক সিদ্ধান্ত · এনভায়রনমেন্টের খটকা (env var) · অদ্ভুত আচরণের সতর্কতা</div>
</div>

<p class="verse">রাহেলার খাতার মতোই — জ্ঞান যখন সম্মানিত পাতায় লেখা হয়, তখন লেখক বদলালেও জ্ঞান বদলায় না। "সম্মানিত সুহুফে — উন্নত ও পবিত্র" (কুরআন ৮০:১৩-১৪)। মুখের কথা বাতাস, খাতার কথা কারখানা।</p>


<div class="diagram">
<div class="diag-title">CLAUDE.md-র স্তরবিন্যাস — The Memory Hierarchy</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
<rect class="node-hot" x="15" y="12" width="250" height="40" rx="9"/><text class="lbl-hot" x="140" y="30">~/CLAUDE.md</text><text class="lbl-sm" x="140" y="46">সব প্রজেক্টে তোমার ব্যক্তিগত স্বভাব</text>
<rect class="node-purple" x="295" y="12" width="250" height="40" rx="9"/><text class="lbl" x="420" y="30">প্রজেক্ট-রুট /CLAUDE.md</text><text class="lbl-sm" x="420" y="46">দলের চুক্তি — git-এ থাকে</text>
<rect class="node-cyan" x="155" y="76" width="250" height="40" rx="9"/><text class="lbl-cyan" x="280" y="94">CLAUDE.local.md</text><text class="lbl-sm" x="280" y="110">শুধু তোমার মেশিন — gitignore!</text>
<rect class="node-leaf" x="155" y="140" width="250" height="40" rx="9"/><text class="lbl-leaf" x="280" y="158">সাব-ডিরেক্টরির CLAUDE.md</text><text class="lbl-sm" x="280" y="174">monorepo-র ডালে ডালে স্থানীয় নিয়ম</text>
<line x1="140" y1="52" x2="240" y2="74" stroke="#f97316" stroke-width="1.6" fill="none"/>
<line x1="420" y1="52" x2="320" y2="74" stroke="#f97316" stroke-width="1.6" fill="none"/>
<line x1="280" y1="116" x2="280" y2="138" stroke="#f97316" stroke-width="1.6" fill="none"/>
<rect class="cell" x="15" y="190" width="530" height="16" rx="6"/><text class="lbl-sm" x="280" y="202">উপর থেকে নিচে মিলে যায়: ব্যক্তি → দল → স্থানীয় → ডাল — সবই প্রতিটা সেশনে পড়া হয়</text>
</svg>
<div class="diag-cap">চার স্তরের স্মৃতি — সবচেয়ে কাছের ডালের নিয়ম সবচেয়ে নির্দিষ্ট; /memory দিয়ে এক নজরে দেখো।</div>
</div>

<div class="code-block"># প্রজেক্ট-রুট CLAUDE.md — কার্যকর ছাঁচ (৪ বিভাগ, ছোট রাখো):
## প্রজেক্ট
LedgerPilot — Django+MySQL ব্যাকএন্ড, Vue ফ্রন্ট। Python 3.12, Node 20।
## কমান্ড
- চালাও: docker compose up && python manage.py runserver
- টেস্ট: pytest -x -q  (মাঝখানে -x: প্রথম ব্যর্থতাতেই থামো)
- লিন্ট: ruff check . && npm run lint
## স্টাইল
- ফাংশন ≤ ৩০ লাইন; কমেন্ট বাংলা-ট্রিগার নয়, ইংরেজি
- ডাটাবেস মাইগ্রেশন ছাড়া স্কিমা-স্পর্শ নিষেধ
## প্রেক্ষাপট
- payments/ মডিউল লেগেসি — নতুন কিছু যোগ করার আগে আলাদা কথা বলো
- ENV: LP_DB_HOST (prod-এ ভিন্ন) — কখনো হার্ডকোড নয়

# স্তর মিলিয়ে দেখো / সম্পাদনা:
claude
> /memory
#   → চার ফাইলের যুক্ত দৃশ্য খুলবে; এখানেই বদলাও

# দ্রুত স্মৃতি-যোগ (নতুন ফাইল ছাড়া):
> # প্রজেক্টে coverage 80% ফ্লোর — নিচে নামলে টেস্ট লিখো
#   '#' দিয়ে শুরু করলে সে লাইন CLAUDE.md-এ জমা হয়</div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📜 বার বার বলতে হয় এমন কথা CLAUDE.md-তে ওঠাও — মুখ নয়, খাতা বলে।<br>কারণ: প্রতিটা সেশন নতুন শাগরেদ — খাতা না পড়ে সে কাজে নামলে দোষ তোমার।</div></div>
<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 2</span><pre class="code-block"># ── প্রম্পট ১ · খাতার জন্ম (কোডবেস থাকলে) ──
&gt; /init
# ← কোডবেস ঘেঁটে স্টার্টার CLAUDE.md লেখে; আউটপুট এক বার চোখে দেখো

# ── প্রম্পট ২ · খাতা ফুলানো রোধ (নিবিড়-সংস্করণ) ──
&gt; CLAUDE.md পড়ে প্রতিটা লাইনের আগে প্রশ্ন করো: এই লাইন সরালে
&gt; আমি ভুল করব? যেগুলোর উত্তর 'না' — সেগুলোর তালিকা দাও, মুছবে না
# ← এক বারেই দেখা যায় কোন নিয়ম আসলে প্রভাব ফেলে, কোনটা শুধু শব্দ

# ── প্রম্পট ৩ · ভুল ধরা পড়ছে না? খাতার দোষ-অনুসন্ধান ──
&gt; আমি বারবার তোমাকে 'pytest -x চালাও' বলতে হচ্ছে — CLAUDE.md-তে
&gt; টেস্ট-কমান্ড লেখা নেই। এখনই যোগ করো: টেস্ট = pytest -x -q
# ← পুনরাবৃত্ত নির্দেশ = খাতার ফাঁক; ফাঁকটা ভরাট হয়ে গেল

# ── প্রম্পট ৪ · রীতি-শিক্ষা (ভুল থেকে নিয়মে) ──
&gt; তুমি এইমাত্র function-নাম বাংলা-লিপ্যন্তরে লিখেছিলে — আমাদের
&gt; রীতি ইংরেজি camelCase। CLAUDE.md-র স্টাইল-অংশে এক লাইনে যোগ করো:
&gt; সব identifier ইংরেজি, কমেন্ট বাংলা চলে
# ← এক ভুল সংশোধন = আজীবনের নিয়ম (পরের সেশনও জানবে)

# ── প্রম্পট ৫ · খাতা লোড-যাচাই ──
&gt; /context
# ← কনটেক্সট-হিসাবে CLAUDE.md দেখা যায়; না দেখলে পথ ভুল,
#   ফাইল রুটে আছে কি না দেখো</pre></div></div>
`,
  senior: {
    title: "কার্যকর বাহির খাতা লেখার নিয়ম — Writing the Ledger",
    body: `<p>শুরু করো <strong>/init</strong> দিয়ে, তারপর নিজে ছাঁটো। মাসে একবার খাতা পুনরায় পড়ো — ডকের পরামর্শ: <strong>/doctor</strong> চালালে Claude নিজেই বলে দেবে কোন লাইনগুলো কোডবেস থেকে অনুমান করা যায়, সেগুলো কেটে দাও। আর মনে রেখো: কোনো নিয়ম বার বার ভাঙা মানে লাইনটা হয় হারিয়ে গেছে, নয়তো অস্পষ্ট — দুই ক্ষেত্রেই সমাধান ছোট করা, বড় নয়।</p>
<p class="en">Book 62's Driver's Route-Book (Door 3) and Word-Boy's File (Door 14) show where the ledger truly lives — memory in a stateless API.</p><p><strong>পাশের বই:</strong> Book 62-এর চালকের রুট-খাতা (দরজা ৩) আর ওয়ার্ড-বয়ের ফাইল (দরজা ১৪) দেখায় খাতাটা আসলে কোথায় বসে — stateless Messages API-র স্মৃতি। <em>(Book 62 · বারো লাইনের ইঞ্জিন)</em></p>`
  }
});

// ── DOOR 3 · তিন ভাই ও দাদা — Three Brothers and the Grandfather ──
doors.push({
  num: 3,
  icon: "⚖️",
  color: "#fb923c",
  name: "তিন ভাই ও দাদা",
  subtitle: "Three Brothers & the Grandfather",
  tech: "Model Families & /model",
  spirit: "মীযান — কাজ অনুযায়ী মাপ",
  secret: "Sonnet রোজকার হাতুড়ি, Opus জরুরি ঘণ্টার কারিগর, Haiku দ্রুত ছোট কাজ, Fable দাদার গভীর চিন্তা — কাজ দেখে ভাই বাছো।",
  recall: {
    q: "একটা বড়, ঝুঁকিপূর্ণ রিফ্যাক্টর আর একটা টাইপো ঠিক করা — কোন কাজে কোন মডেল? সেশনের মাঝে কীভাবে বদলাবে?",
    qen: "A big risky refactor vs fixing a typo — which model for which? And how do you switch mid-session?",
    a: "টাইপো/দ্রুত ছোট কাজ → Haiku; রোজকার ফিচার-বাগ-রিভিউ → Sonnet (ডিফল্ট); বড় রিফ্যাক্টর-কঠিন ডিবাগ → Opus; সবচেয়ে কঠিন দীর্ঘ কাজ → Fable। মাঝপথে /model কমান্ড, শুরুতে claude --model opus, আর গভীর চিন্তার মাত্রা /effort দিয়ে।",
    aen: "Typo/quick small edits → Haiku; everyday features-bugs-reviews → Sonnet (default); large refactors-gnarly debugging → Opus; hardest longest tasks → Fable. Switch mid-session with /model, at start with claude --model opus, and set reasoning depth with /effort."
  },
  story: `<p class="scene-setting">হাসু মিস্ত্রির তিন ছেলে আর এক বুড়ো দাদা। বড় ভাই করিম — শক্তিতে ষাঁড়, কিন্তু ধীর; একটা জোড়া দিল সেটা আজীবন থাকে। মেজো সেলিম — তেমন শক্তিও না, তেমন দুর্বলও না; দিনের বেশিরভাগ অর্ডার সে-ই জোটে, হাতের কাছে, নির্ভরযোগ্য। ছোট টিটু — হালকা পাখি, টাক-বাজারের দৌড়; ছোট কাজ শেষ করে আসে তার চাইতে দ্রুত কেউ পারে না। আর দাদা — কারখানার পেছনের ঘরে চুপটি করে বসে থাকেন; কেউ পারে না এমন জটিল নকশা যখন আসে, তখন সবাই দাদার ঘরে যায়।</p>
<p class="scene-setting en">Hasu the mistri has three sons and one old grandfather. Karim, the eldest — bull-strong, but slow; a joint he makes lasts a lifetime. Selim, the middle — neither the strongest nor the weakest; most of the day's orders land on him, dependable, always within reach. Titu, the youngest — a light bird, the sprinter of the hawk market; no one finishes small jobs faster. And the grandfather — he sits quietly in the back room; when a design arrives that no one can solve, everyone walks to his door.</p>

<div class="dialogue">একদিন তুমি বাজার থেকে ফিরে দেখো — একটা পিন এগিয়ে দেওয়ার কাজে কেউ করিমকে ডেকে বসিয়ে রেখেছে। করিম ঘামছে, পিনটা হাতে নিয়ে বসে আছে। হাসু মিস্ত্রি মাথা নেড়ে বললেন — ষাঁড়কে দিয়ে পিন তোলানো যায়, কিন্তু ষাঁড়টার দিনটা নষ্ট, আর খামারের ঘাসটাও। আবার পরদিন দেখো — বারো দরজার একটা বাড়ির নকশা টিটুকে দিয়ে দিয়েছে কেউ; টিটু দৌড়ে একটা দরজা বানিয়ে এনেছে — ভুল মাপে। দ্বিতীয়বার করতে হলো, দ্বিগুণ খরচ।</div>
<div class="dialogue en">One day you return from the market to find Karim seated, sweating, holding a pin someone gave him as a job. Hasu shakes his head — you can make a bull lift a pin, but the bull's day is wasted, and so is the farm's grass. Next day you find someone gave Titu the design of a twelve-door house; Titu sprinted back with one door built — to the wrong measure. It had to be done twice, at double cost.</div>

<p>ডকুমেন্টেশনের ভাষায় এই দৃশ্যটাই মডেল-বাছাই: <strong>Opus দিয়ে টাইপো ঠিক করা মানে কম্পিউট পোড়ানো। Haiku দিয়ে ১২-ফাইলের রিফ্যাক্টর চাওয়া মানে আবার করার আশা করা।</strong> Sonnet হলো রোজকার কাজের নির্ভরযোগ্য ডিফল্ট — ফিচার, বাগ, টেস্ট, রিভিউ। Opus ডাকো বড় রিফ্যাক্টর, কঠিন ডিবাগ, বা উঁচু ঝুঁকির কাজে। Haiku নামাও দ্রুত প্রশ্ন, ফরম্যাটিং, যান্ত্রিক এডিটে। আর Fable — সবচেয়ে কঠিন, দীর্ঘ চলা কাজের জন্য সবচেয়ে সক্ষম মডেল; ডিফল্ট নয়, /model দিয়ে বাছতে হয়।</p>
<p class="en">In the docs' own words, this scene is model selection: <strong>using Opus to fix a typo burns compute; using Haiku for a 12-file refactor is asking for a re-do.</strong> Sonnet is the dependable default for everyday feature work, bugs, tests, reviews. Call Opus for large refactors, gnarly debugging, high stakes. Drop to Haiku for quick questions, formatting, mechanical edits. And Fable — the most capable model for your hardest, longest-running tasks; not the default, selected via /model.</p>

<div class="diagram">
<div class="diag-title">কাজ দেখে ভাই বাছো — Match the Task to the Model</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowTeal" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#3dd6c4"/></marker>
<marker id="arrowAmber" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker>
<marker id="arrowFire" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#ff6b35"/></marker>
<marker id="arrowPurple" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#b37feb"/></marker>
</defs>
<rect class="cell" x="15" y="20" width="180" height="36" rx="8"/><text class="lbl-sm" x="105" y="38">টাইপো · ফরম্যাট · দ্রুত প্রশ্ন</text>
<rect class="cell" x="15" y="75" width="180" height="36" rx="8"/><text class="lbl-sm" x="105" y="93">রোজকার ফিচার · বাগ · রিভিউ</text>
<rect class="cell" x="15" y="130" width="180" height="36" rx="8"/><text class="lbl-sm" x="105" y="148">বড় রিফ্যাক্টর · কঠিন ডিবাগ</text>
<rect class="cell" x="15" y="185" width="180" height="36" rx="8"/><text class="lbl-sm" x="105" y="203">সবচেয়ে কঠিন · দীর্ঘ কাজ</text>
<rect class="node-leaf" x="395" y="20" width="150" height="36" rx="18"/><text class="lbl-leaf" x="470" y="38">Haiku ⚡</text>
<rect class="node" x="395" y="75" width="150" height="36" rx="18"/><text class="lbl" x="470" y="93">Sonnet 🔨</text>
<rect class="node-hot" x="395" y="130" width="150" height="36" rx="18"/><text class="lbl-hot" x="470" y="148">Opus 🐂</text>
<rect class="node-purple" x="395" y="185" width="150" height="36" rx="18"/><text class="lbl" x="470" y="203">Fable 🧓</text>
<line class="edge-cyan" x1="195" y1="38" x2="395" y2="38"/>
<line class="edge-amber" x1="195" y1="93" x2="395" y2="93"/>
<line class="edge-hot" x1="195" y1="148" x2="395" y2="148"/>
<line x1="195" y1="203" x2="395" y2="203" stroke="#b37feb" stroke-width="2" fill="none" marker-end="url(#arrowPurple)"/>
</svg>
<div class="diag-cap">Book ৮ (LLM Anatomy) তোমাকে দেখিয়েছে Transformer-এর ভেতরটা — এখানে সেই একই পরিবারের বাইরের চেহারা: কে কোন কাজে।</div>
</div>

<div class="code-block"># সেশন শুরুতেই মডেল ঠিক করে নেওয়া:
claude --model opus

# সেশনের মাঝে বদলানো — দরজার মতো, বের না হয়েই:
> /model sonnet
> /model fable

# চিন্তার গভীরতা বাড়ানো (reasoning effort):
> /effort xhigh</div>

<p>দলের কারখানায় (settings.json) মডেলও বাঁধা রাখা যায় — কে কোন মডেল ব্যবহার করবে, তার তালাও মালিকের হাতে। অনুমতি-তালার দরজায় (দরজা ৬) এই ফাইলের আরও চাবি দেখবে।</p>
<p class="en">In a team workshop (settings.json) the model itself can be pinned — who may use which model is the owner's lock too. More keys to this file await at the permissions door (Door 6).</p>

<div class="code-block">// settings.json — কারখানার মডেল-নীতি
{
  "model": "claude-sonnet-4-5",
  "availableModels": ["claude-sonnet-4-5", "haiku"],
  "enforceAvailableModels": true,
  "env": {
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-5"
  }
}</div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>দাদার একটা কথা:</strong> মডেলের নাম-নম্বর দ্রুত বদলায় — সিরিজ আসে, সিরিজ যায় (৪, ৪.৫, ৫...)। নিয়ম একটাই থাকে: Sonnet রোজকার, Opus জরুরি, Haiku দ্রুত, Fable গভীরতম। ব্যবহারের আগে /model-এর তালিকায় বর্তমান নামগুলো দেখে নাও — ডকের model-config পাতা সবচেয়ে তাজা হিসাব রাখে।</div></div>
<div class="callout info"><span class="co-icon">🎯</span><div><strong>A note from the grandfather:</strong> model names and numbers change fast — series come and go. The rule stays: Sonnet daily, Opus high-stakes, Haiku fast, Fable deepest. Check /model's list for current names before use — the docs' model-config page keeps the freshest account.</div></div>

<p class="verse">দাদা যেমন বলতেন — সব কাজে সব হাতুড়ি নয়; আসমান-জমিন যে মাপে দাঁড়িয়ে, কাজেরও হক আছে মাপের। "আর আসমান তিনি উঁচু করেছেন এবং স্থাপন করেছেন মাপ — যেন তোমরা মাপে সীমা লঙ্ঘন না করো" (কুরআন ৫৫:৭-৯)। টাইপোতে Opus ডাকা আর বারো দরজায় Haiku ছোড়া — দুটোই মাপের লঙ্ঘন।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">⚖️ Sonnet হাতের কাছে, Opus জরুরিতে, Haiku ছোট দৌড়ে, Fable গভীর চিন্তায় — /model দিয়ে ভাই বদলাও।<br>কারণ: ভুল ভাই ডাকলে হয় দিন নষ্ট, নয় কাজ দুইবার।</div></div>
<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 3</span><pre class="code-block"># ── প্রম্পট ১ · ভাই-বাছাই সাধারণ নিয়মে ──
&gt; এই কাজটা মোটা রিফ্যাক্টর — opus দিয়ে শুরু করব নাকি sonnet যথেষ্ট?
&gt; কাজের ধরন দেখে এক লাইনে সাজেশন দাও, তারপর /model-এর আদেশ লিখে দাও
# ← Claude কাজের ওজন বিচার করে বলে; সিদ্ধান্ত তোমার

# ── প্রম্পট ২ · জরুরি ঘণ্টা — কঠিন ডিবাগে মডেল-ওঠা ──
&gt; /model opus
&gt; এই race condition-টা তিন সেশনে ধরা যাচ্ছে না। আগে কোথায়
&gt; ইন্টারলিভিং হতে পারে তার অনুমান-তালিকা দাও — কোড ছোঁয়া নয়
# ← ভারী ভাই ভাবনায়; হাত এখনো বাঁধা — অনুমান আগে, কোড পরে

# ── প্রম্পট ৩ · দ্রুত-ছোট কাজে খরচ-বাঁচা ──
&gt; /model haiku
&gt; src/-র সব TODO-র তালিকা বানাও — ফাইল:লাইন আকারে, ব্যাখ্যা নয়
# ← তালিকা-জাতীয় কাজ হালকা ভাইয়ের; খরচ প্রায় নগণ্য

# ── প্রম্পট ৪ · গভীর চিন্তার মাত্রা ──
&gt; /effort xhigh
&gt; এখন আগের race-condition-প্রশ্নটা আবার ভাবো
# ← একই ভাই, চিন্তার সময় বাড়ল — জটিল সিদ্ধান্তে প্রভাব ফেলে

# ── প্রম্পট ৫ · স্থায়ী ডিফল্ট (নকশায় লেখা) ──
&gt; settings.json-এ model: sonnet স্থায়ী করে দাও — আমার রোজকার
&gt; ভাই সে-ই হবে, ভারী কাজে আমি নিজে /model দিয়ে ডাকব
# ← সেশন-প্রতি নয়, নকশা-প্রতি সিদ্ধান্ত</pre></div></div>
`,
  senior: {
    title: "মডেল-বাছাইয়ের টেবিল — The Selection Table",
    body: `<table class="kv-table">
<tr><th>কাজ</th><th>মডেল</th><th>কেন</th></tr>
<tr><td>টাইপো, ফরম্যাটিং, ছোট প্রশ্ন</td><td class="hl">Haiku</td><td>দ্রুততা জিত, খরচ কম</td></tr>
<tr><td>ফিচার, বাগ, টেস্ট, রিভিউ</td><td class="hl">Sonnet</td><td>নির্ভরযোগ্য রোজকার ডিফল্ট</td></tr>
<tr><td>বড় রিফ্যাক্টর, কঠিন ডিবাগ, উঁচু ঝুঁকি</td><td class="hl">Opus</td><td>সবচেয়ে বেশি সতর্ক শক্তি</td></tr>
<tr><td>সবচেয়ে কঠিন, দীর্ঘ চলা কাজ</td><td class="hl">Fable</td><td>দীর্ঘ কাজে সর্বোচ্চ সক্ষমতা</td></tr>
</table>
<p>সেশনের মাঝে কাজের ধরন বদলালে লজ্জা পেয়ো না — /model এক সেকেন্ডের কাজ। আর গভীর সমস্যায় /effort xhigh দিয়ে চিন্তার ঘণ্টা বাড়াও।</p>
<p class="en">Book 62's Tailor's Chalk (Door 39) explains sizing effort to the job — where deep thinking pays and where it wastes.</p><p><strong>পাশের বই:</strong> Book 62-এর দর্জির চক-দাগ (দরজা ৩৯) ব্যাখ্যা করে effort-এর কাজে-কাজে মাপ — কোথায় গভীর ভাবনা, কোথায় অপচয়। <em>(Book 62 · বারো লাইনের ইঞ্জিন)</em></p>`
  }
});

// ── DOOR 4 · নদীর মাঝি — The Ferrywoman ──
doors.push({
  num: 4,
  icon: "⛵",
  color: "#7dd3fc",
  name: "নদীর মাঝি",
  subtitle: "The Ferrywoman",
  tech: "Agentic Loop & Context Window",
  spirit: "তাদাব্বুর — প্রবাহ বুঝে চলা",
  secret: "নদীর কাজ কম্প্যাক্ট করা নয় — ভাসানো থেকে বাঁচা। যা কনটেক্সটে নেই, শাগরেদের সেটা দেখা যায় না।",
  recall: {
    q: "লম্বা সেশনে Claude হঠাৎ আগের কথা ভুলে যাচ্ছে — কারণ কী, আর দুটো ব্যবস্থা কী?",
    qen: "In a long session Claude starts forgetting earlier parts — why, and what two remedies?",
    a: "কারণ: প্রতিটা টুল রেজাল্ট, ফাইল, আউটপুট কনটেক্সট নদীতে জমে — নদী ভরে গেলে পুরনো কথা কম্প্যাক্ট হয়ে সংক্ষেপে পরিণত হয়। ব্যবস্থা: (১) কম্প্যাকশনের আগে-পরে নিয়ন্ত্রণ — /compact, /clear; (২) বাইরে রাখা — ভারী অনুসন্ধান সাব-এজেন্টে (দরজা ৭)।",
    aen: "Because every tool result, file, and output settles into the context river — when the river fills, old talk is compacted into summary. Remedies: (1) control compaction timing with /compact and /clear; (2) keep heaviness out — delegate bulky exploration to subagents (Door 7)."
  },
  story: `<p class="scene-setting">বুড়িগঙ্গা। সকালের কুয়াশা কাটছে না এমন এক বেলায় তুমি ফরিদার নৌকায় উঠলে। ফরিদা তিন যুগ ধরে এই নদীর মাঝি — হাতে বাঁশের খুঁটি, চোখে পানির রঙ বুঝে নেওয়ার অভ্যাস। নৌকায় যত মাল তোলা হয়, তল তত ডুবে যায় — এই চালাকি নয়, এই পদার্থবিদ্যা। এক যাত্রায় যা যা ঘটে — কাঠ, বালি, ঝামেলা, কথা, ঝগড়া — সবই নৌকায় থেকে যায়; নদী মনে রাখে না, নৌকা মনে রাখে।</p>
<p class="scene-setting en">The Buriganga river. On a morning the fog refuses to lift, you step into Farida's boat. Farida has poled this river for three decades — a bamboo pole in hand, the habit of reading the water's colour. The more cargo you load, the lower the gunwale sinks — not cunning, physics. Everything that happens on a voyage — timber, sand, quarrels, talk — stays in the boat; the river forgets, the boat remembers.</p>

<div class="dialogue">ফরিদা বলল — দেখো শাগরেদ, নৌকার সবচেয়ে বড় বিপদ ডুবন্ত নয়, ডুবন্তের আগের নীরবতা। যে নৌকা ভাসছে সে শব্দ করে; যে নৌকা ভরতি হয়ে গেছে সে চুপ। তুমি বললে — তাহলে মাল ফেলে দেব? না। মাল উঠাবে ঠিক জায়গায়, ভাসানোর আগে। আর বড় বড় ট্রাক-মাল এই ছোট নৌকায় তুলবে না — ওর জন্য আলাদা বড় নৌকা আছে, ওটা উজানে যায়-আসে, তার খবর শুধু এক লাইনে এখানে আসে।</div>
<div class="dialogue en">Farida says — see, apprentice, a boat's greatest danger is not sinking but the silence before sinking. A floating boat makes noise; a full boat goes quiet. You ask — so I should throw cargo overboard? No. You unload at the right place, before waterlogging. And the truck-sized loads never go on this small boat — a separate large boat carries them up and down the river; only one line of its news reaches us here.</div>

<p>Claude Code কেবল প্রশ্নের উত্তর দেয় না — সে <strong>এজেন্ট লুপে</strong> চলে: পড়ে, চিন্তা করে, টুল চালায়, ফল দেখে, আবার চিন্তা করে — যতক্ষণ না কাজ শেষ হয়। প্রতিটা ধাপের প্রতিটা শব্দ — ফাইলের ভেতরটা, টেস্টের আউটপুট, তোমার প্রশ্ন — সব জমে ওই <strong>কনটেক্সট নদীতে</strong>। নদী ভরে গেলে পুরনো কথা সংক্ষেপে ঠেলে দেওয়া হয় — ডকের ভাষায় <strong>কম্প্যাকশন</strong>। রাহেলার খাতা (দরজা ২) সেখানে বেঁচে থাকে: কম্প্যাকশনের পরেও প্রজেক্টের CLAUDE.md ডিস্ক থেকে নতুন করে পড়া হয়।</p>
<p class="en">Claude Code does not merely answer — it runs in an <strong>agentic loop</strong>: read, think, run a tool, observe the result, think again, until the work is done. Every word of every step — file contents, test output, your question — settles into the <strong>context river</strong>. When the river fills, old talk is pushed into summary — the docs call this <strong>compaction</strong>. Rahela's ledger (Door 2) survives there: after compaction the project CLAUDE.md is re-read fresh from disk.</p>

<div class="diagram">
<div class="diag-title">এজেন্ট লুপ — The Agentic Loop</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowLoop" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#9290a8"/></marker>
<marker id="arrowLoopTeal" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#3dd6c4"/></marker>
</defs>
<rect class="node-cyan" x="15" y="80" width="120" height="46" rx="12"/><text class="lbl-cyan" x="75" y="103">তোমার কথা</text><text class="lbl-sm" x="75" y="118">your prompt</text>
<rect class="node" x="185" y="80" width="120" height="46" rx="12"/><text class="lbl" x="245" y="103">চিন্তা</text><text class="lbl-sm" x="245" y="118">think</text>
<rect class="node-hot" x="355" y="80" width="120" height="46" rx="12"/><text class="lbl-hot" x="415" y="103">টুল চালাও</text><text class="lbl-sm" x="415" y="118">act (Read · Bash · Edit)</text>
<rect class="node-leaf" x="185" y="15" width="120" height="40" rx="12"/><text class="lbl-leaf" x="245" y="35">ফল দেখো</text><text class="lbl-sm" x="245" y="48">observe result</text>
<rect class="cell-good" x="355" y="15" width="120" height="40" rx="12"/><text class="lbl-leaf" x="415" y="35">কাজ শেষ?</text><text class="lbl-sm" x="415" y="48">done?</text>
<line x1="135.0" y1="103.0" x2="185.0" y2="103.0" stroke="#9290a8" stroke-width="1.5" marker-end="url(#arrowLoop)"/>
<line x1="305.0" y1="103.0" x2="355.0" y2="103.0" stroke="#9290a8" stroke-width="1.5" marker-end="url(#arrowLoop)"/>
<line x1="410" y1="80" x2="410" y2="55" stroke="#9290a8" stroke-width="1.5" marker-end="url(#arrowLoop)"/>
<line x1="355" y1="35" x2="305" y2="35" stroke="#9290a8" stroke-width="1.5" marker-end="url(#arrowLoop)"/>
<path class="edge-cyan" d="M 245 58 L 245 75" marker-end="url(#arrowLoopTeal)"/>
<text class="lbl-sm" x="285" y="150">না → আবার চিন্তা</text>
<text class="lbl-sm" x="285" y="166">no → think again</text>
<line x1="425" y1="55" x2="425" y2="80" stroke="rgba(82,196,26,.7)" stroke-width="1.5"/>
</svg>
<div class="diag-cap">প্রতিটা ঘোরার প্রতিটা শব্দ নদীতে জমে — তাই মাঝির প্রথম কাজ নদীর হিসাব রাখা। Every turn's every word settles into the river — so the ferrywoman's first job is the river's account.</div>
</div>

<p class="verse">নদীর কথা মনে রেখো — পানির কল্যাণ প্রবাহে, কিন্তু নৌকার নিরাপত্তা মাঝির হিসাবে। আল্লাহ জলদিগণকে সীমায় রেখেছেন — সীমা লঙ্ঘন করলে সে ডুবিয়ে দেয় (সূরা রহমান-এর মীযানের শিক্ষা, কুরআন ৫৫:৭-১১)। কনটেক্সট নদীর সীমাও তেমনই — ভালোবেসে ভরে ফেললে সে ডুবিয়ে দেয়।</p>

<div class="code-block"># নদীর হিসাব নিজের হাতে:
> /context     # কনটেক্সটে এখন কী কী জমে আছে
> /usage       # টোকেন, সময়, খরচ — মডেল ধরে ভাগ করা হিসাব
> /compact     # পুরনো কথা সংক্ষেপে ঠেলে জায়গা করো
> /clear       # নদী একদম খালি — নতুন কাজে নতুন শুরু

# নৌকা উজানে ফেরানো — প্রতিটা প্রম্পটই একটা চেকপয়েন্ট:
> /rewind       # বা Esc দুইবার (ইনপুট খালি থাকলে)
# মেনু থেকে বেছে নাও: কোড+কথা ফেরাও · শুধু কথা · শুধু কোড
# কিংবা এই পয়েন্ট পর্যন্ত সংক্ষেপ করে নদী হালকা করো

# দীর্ঘ চলা কাজ (dev server, build) — পেছনের স্রোতে:
# চলতি কমান্ড Ctrl+B চাপলে পেছনে চলে যায় (tmux-এ দুইবার),
# আউটপুট ফাইলে জমে — দরকার হলে Claude পড়ে নেয়।
# আর ! দিয়ে শুরু করলে শেল-মোড: ! npm test — Claude ছাড়াই চলে।

# ভাসানোর আগেই খালাস:
# ছোট ছোট কাজ শেষ করে /clear দাও, লম্বা অনুসন্ধান সাব-এজেন্টে পাঠাও</div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>ফেরার সীমা:</strong> চেকপয়েন্ট ধরে রাখে শুধু Claude-এর নিজের হাতে করা ফাইল-এডিট — Bash কমান্ডের কাজ বা রিমোট ঘটনা (ডাটাবেস, ডিপ্লয়) ফেরানো যায় না। এটা git-এর বিকল্প নয়, সঙ্গী। সেশন বন্ধ করে --resume করলেও চেকপয়েন্টগুলো থাকে।</div></div>
<div class="callout info"><span class="co-icon">🎯</span><div><strong>The limit of return:</strong> checkpoints capture only file edits made by Claude's own tools — Bash-command changes and remote events (databases, deploys) cannot be rewound. It is not a replacement for git, but its companion. Checkpoints survive closing the session and resuming with --resume.</div></div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>ফরিদার টিপ:</strong> বড় কাজ ভাঙো ছোট নৌকায়-ছোট যাত্রায়। এক সেশনে পুরো মাসের কাজ চালাতে যেয়ো না — প্রতিটা ফিচার বা বাগের জন্য তাজা /clear, আর প্রয়োজনে ব্যাকগ্রাউন্ড এজেন্ট। নদী সবসময় তাজা থাকে।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Farida's tip:</strong> Break big work into small boats, small voyages. Don't run a whole month's work in one session — fresh /clear per feature or bug, background agents when needed. The river stays fresh.</div></div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">⛵ কনটেক্সট নদী — ভরে গেলে পুরনো কথা কম্প্যাক্ট হয়; /context দেখো, /compact করো, /clear দিয়ে নতুন যাত্রা।<br>কারণ: যা নদীতে নেই, শাগরেদ তা দেখে না — ভাসানোর আগে খালাস করো।</div></div>
<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 4</span><pre class="code-block"># ── প্রম্পট ১ · নদীর হিসাব নেওয়া ──
&gt; /context
# ← কনটেক্সটে এখন কী কী জমেছে — CLAUDE.md, ফাইল, টুল-আউটপুটের ভাগ

# ── প্রম্পট ২ · ভারী-পড়া বাইরে পাঠানো ──
&gt; পুরো লগ-ফোল্ডার ঘাঁটার দরকার — সাব-এজেন্ট দিয়ে করো:
&gt; কোন দিন সবচেয়ে বেশি 5xx এসেছে শুধু সেটা বলবে, বিস্তারিত নয়
# ← মূল স্রোতে আসে শুধু সারাংশ — নদী ভরে যায় না

# ── প্রম্পট ৩ · ঘর-পরিষ্কার — নতুন কাজে পুরনো ভিড় বিদায় ──
&gt; /clear
&gt; এবার নতুন কাজ: ইউজার-প্রোফাইল পেজের ক্যাশ-বাগ
# ← আগের কাজের স্মৃতি নদী থেকে গেছে — নতুন কাজ পরিষ্কার ঘরে শুরু

# ── প্রম্পট ৪ · ভুল দিকে গেলে ফেরা ──
&gt; (Esc Esc — রিওয়াইন্ড-মেনু)
&gt; Restore code and conversation
# ← প্রম্পট-চেকপয়েন্টে ফেরা; bash-এ বদলানো ফাইল ফেরে না — মনে রেখো

# ── প্রম্পট ৫ · চলন্ত কাজ পেছনে পাঠানো ──
# dev-server চালু করে বলো:
&gt; npm run dev চালাও — চলতে থাকলে Ctrl+B-তে পাঠিয়ে দাও,
&gt; পোর্ট শুনে নিশ্চিত হয়ে বলো কোন পোর্টে উঠেছে
# ← দীর্ঘ-চলা কাজ পেছনের স্রোতে, ফল ফাইলে; সামনে কাজ চলে</pre></div></div>
`,
  senior: {
    title: "কনটেক্সটের হিসাব রাখার নিয়ম — Keeping the River's Account",
    body: `<ul class="checklist">
<li>লম্বা সেশনে মাঝে মাঝে <strong>/context</strong> চালাও — নদী কতটা ভরেছে দেখো।</li>
<li>এক ফিচার শেষ → <strong>/clear</strong> → পরের ফিচার। নৌকা হালকা, মাঝি সজাগ।</li>
<li>কম্প্যাকশন দরকার হলে নিজের ইচ্ছায় <strong>/compact</strong> — জোর করে ডুবার আগেই খালাস।</li>
<li>পুরো কোডবেস ঘেঁটে বের করার মতো ভারী কাজ মূল সেশনে টানো না — দরজা ৭-এর সাব-এজেন্ট ওদের নিজস্ব নৌকায় করে শুধু সারমর্ম পাঠায়।</li>
<li>প্রতিটা বড় সেশনের শুরুতে থাকবে রাহেলার খাতা (CLAUDE.md) — কম্প্যাকশনের পরেও সে ডিস্ক থেকে ফিরে আসে।</li>
</ul>
<p class="en">Book 62's Clerk's Desk (Door 13) shows the context window itself — why /compact exists.</p><p><strong>পাশের বই:</strong> Book 62-এর পেশকারের টেবিল (দরজা ১৩) context window-টা নিজেই দেখায় — /compact-এর পেছনের কারণ। <em>(Book 62 · বারো লাইনের ইঞ্জিন)</em></p>`
  }
});

// ── DOOR 5 · জাহানারার স্মৃতি-জাদুঘর — Jahanaara's Museum of Memory ──
doors.push({
  num: 5,
  icon: "🫙",
  color: "#7dd3fc",
  name: "জাহানারার স্মৃতি-জাদুঘর",
  subtitle: "Jahaanara's Museum of Memory",
  tech: "Context window · /compact · /rewind · /autocompact · /context · checkpoints",
  spirit: "কসর — সফরে নামাজ সংক্ষিপ্ত, ফরজ অক্ষত",
  secret: "কনটেক্সট একটা জাদুঘর-ঘর — জায়গা সীমিত, তাই কিউরেটরের কাজ কী রাখবে তা নয়, কী গুদামে যাবে তা; ঘর ভরলে স্বয়ংক্রিয় সংক্ষপ্তি (autocompact) আসে — কিন্তু কারিগর অপেক্ষা করে না: /compact ফোকাসসহ, /rewind দিয়ে অর্ধেক-সারাংশ, আর বড় পড়া subagent-এর ঘরে।",
  recall: {
    q: "লম্বা সেশনে Claude হঠাৎ আগের কথা ভুলতে শুরু করল; /context দেখাল জানালা প্রায় ভরা। এখন থেকে কোন চার অভ্যাস ঘর চিরকাল ফাঁকা রাখবে — আর ভুলে যাওয়ার আগে ফেরার দরজা কোনটা?",
    qen: "Mid-session Claude starts forgetting; /context shows the window nearly full. Which four habits keep the room airy — and which door undoes a wrong turn?",
    a: "চার অভ্যাস: ① নতুন বড় কাজের আগে /compact focus on X — সারাংশে রাখতে চাও তুমি ঠিক করো; ② /rewind (বা খালি প্রম্পটে Esc-Esc) → Summarize from here / up to here — কথা থাকে, ভার যায়; ③ /autocompact 500k — কত ভরা জানালায় স্বয়ংক্রিয়-সংক্ষপ্তি বসবে তার সীমা নিজের হাতে; ④ গবেষণা-ভারী পড়া subagent-কে দাও — সে ৬,১০০ টোকেন পড়ুক, তুমি পাও ৪২০ টোকেনের ফল। ফেরার দরজা: /rewind → Restore code (বা code+conversation) — প্রতিটা প্রম্পটের আগে checkpoint নেওয়া থাকে (১০০টা পর্যন্ত), তাই ভুল মোড়ে ফিরে যাওয়া যায়।",
    aen: "Four habits: ① /compact with focus before a big new task; ② /rewind (or Esc-Esc on empty prompt) → Summarize from/up to here; ③ /autocompact 500k to set when the automatic pass triggers; ④ delegate heavy reads to a subagent — it reads 6,100 tokens, you receive a 420-token result. The undo door: /rewind → Restore code (or code+conversation) — a checkpoint precedes every turn (up to 100 kept), so wrong turns are reversible."
  },
  story: `<p class="scene-setting">জাহানারা শহরের স্মৃতি-জাদুঘরের কিউরেটর — আর তাঁর জাদুঘরের একটাই নিয়ম সবাই জানে: ঘর ছোট, স্মৃতি অসীম। তাই প্রদর্শনী-ঘরে যা রাখা হয় তা আজকের প্রশ্নের উত্তর দিতে পারে এমন জিনিস; বাকি সব যায় গুদামে — ফেলে নয়, সারাংশ-টিকিটে: প্রতিটা বাক্সে এক লাইনে লেখা ভেতরে কী আছে। নতুন প্রদর্শনী আসলে পুরোনো কিছু গুদামে যায় — জাহানারা বলেন এটা ঘরের দোষ নয়, ঘরের ধর্ম। মাঝে মাঝে দর্শক এসে বলে: ওই তো ভুল পথে ঢুকে গেছি, শুরু থেকে দেখব। জাহানারা তখন তাঁর বুকমার্ক-খাতা খোলেন — প্রতিটা ধাপে একটা করে চিহ্ন পড়ে আছে; যেকোনো চিহ্নে ফিরে যাওয়া যায়, কথাবার্তা রেখে জিনিস ফেরত, বা জিনিস রেখে কথা ফেরত — যেমনটা দরকার। আর সবচেয়ে বড় কথা তাঁর: যে জাদুঘর সব রাখতে চায়, সে জাদুঘরে কেউ হাঁটতে পারে না।</p>
<p class="scene-setting en">Jahaanara curates the city's museum of memory — and everyone knows its one rule: the room is small, memory is infinite. The gallery holds only what answers today's question; the rest goes to the storeroom — not discarded, but with a summary-ticket: one line on each box saying what is inside. When new exhibits arrive, older ones move out — the room's nature, not its fault. Sometimes a visitor says: I took a wrong turn; I want to restart from the middle. Jahaanara opens her bookmark ledger — every step has a mark; any mark can be returned to, restoring the objects but keeping the conversation, or the conversation but keeping the objects — whichever is needed. And her greatest saying: a museum that tries to keep everything becomes a museum no one can walk through.</p>

<div class="dialogue">তুমি জিজ্ঞেস করলে — জাদুঘর-ঘর তো নিজে থেকেই ভরে যায়, তখন কী হয়? জাহানারা হাসলেন: তখন ঘর নিজেই ঝাড়পদ্ধতি চালায় — স্বয়ংক্রিয়-সংক্ষপ্তি; তবে সে অন্ধভাবে অনুমান করে কী দরকার। কারিগর তার আগেই নিজে হাত দেয়: নতুন কাজের শুরুতে বলে দাও কী রাখতে হবে (/compact focus on the auth bug)। আরেকটা কৌশল: কথার নদীর মাঝখান থেকে গুদামে পাঠাও (/rewind → Summarize from here) — শুরুর নির্দেশ থাকবে, ভার যাবে। দরজা বদলানো কাজে /clear — পুরোনো ভিড় নতুন কাজের জায়গা খেয়ে ফেলে। আর সবচেয়ে বড় অস্ত্র: পড়ার ভার বাইরের গবেষকের ঘরে — subagent যেন জাদুঘরের বাইরের লাইব্রেরি: সে হাজার পাতা পড়ুক, তোমার ঘরে আসে এক পাতার রিপোর্ট।</div>
<div class="dialogue en">You ask — the room fills by itself; then what? She smiles: then the room runs its own sweeping — automatic compaction; but it guesses blindly what matters. The craftsman acts earlier: at the start of a new task, say what to keep (/compact focus on the auth bug). Another trick: send the middle of the conversation river to the storeroom (/rewind → Summarize from here) — initial instructions stay, weight goes. Between unrelated tasks, /clear — old crowds eat the space your next work needs. And the biggest weapon: put reading weight in the researcher's outer room — a subagent is the museum's external library: let it read a thousand pages; your room receives a one-page report.</div>

<div class="code-block"># ঘরের হিসাব নাও:
/context        # লাইভ ভাঙন: কোন অংশে কত টোকেন — CLAUDE.md, ফাইল, টুল-আউটপুট
/memory         # কোন স্মৃতি-ফাইলগুলো লোড হলো, সেখানেই সম্পাদনা

# সংক্ষপ্তি — নিজের হাতে, ঘরের হাতে নয়:
/compact focus on the auth bug fix     # সারাংশে যা রাখবে তুমি ঠিক করলে
/rewind          # বা খালি প্রম্পটে Esc Esc — মেনু:
#   • Restore code and conversation   • Restore conversation
#   • Restore code                    • Summarize from here
#   • Summarize up to here            • Never mind
/autocompact 500k     # স্বয়ংক্রিয়-সংক্ষপ্তি কোথায় বসবে (টোকেন-সংখ্যায়)
/clear                # নতুন অসম্পর্ক কাজে পুরোনো ভিড় বিদায়

# বড় জানালা চাইলে (১M টোকেন):
#   Fable, Sonnet 5, Opus 4.6+ — [1m] ভ্যারিয়েন্ট (Sonnet 5-এ ডিফল্টই 1M)
#   /model দিয়ে বাছাই; সংক্ষপ্তি-নিয়ম বড় জানালাতেও একই

# ভার-হ্রাসের গণিত (docs-এর উদাহরণ):
#   subagent পড়ল ৬,১০০ টোকেন ফাইল → তোমার ঘরে এলো ৪২০ টোকেনের সারাংশ
#   সাশ্রয়: ~৯৪% — গবেষণা মানেই subagent, প্রধান-ঘর পরিষ্কার

# চেকপয়েন্টের নিয়ম-খাতা:
#   • প্রতি টার্ন-শুরুর আগে একটা checkpoint; সেশনে ১০০টা পর্যন্ত থাকে
#   • স্ন্যাপশট ~৩০ দিন পরে পরিষ্কার (cleanupPeriodDays দিয়ে বাড়াও)
#   • bash-এ বদলানো ফাইল (rm/mv/cp) checkpoint-এ নেই — শুধু টুল-এডিট ট্র্যাক হয়
#   • বেশিরভাগ subagent-এর এডিট ফেরে না — ওদের ফেরাও git দিয়ে (B61)</div>

<table class="kv-table">
<tr><th>উপকরণ</th><th>কী করে</th><th>কখন</th></tr>
<tr><td class="hl">/context</td><td>লাইভ টোকেন-ভাঙনা</td><td>ঘর ভারী লাগলেই প্রথম কমান্ড</td></tr>
<tr><td class="hl">/compact ফোকাসসহ</td><td>নির্দেশিত সারাংশ-সংক্ষপ্তি</td><td>নতুন বড় কাজের শুরুতে</td></tr>
<tr><td class="hl">/rewind (Esc Esc)</td><td>৬-অপশন মেনু: কোড/কথা ফেরত, অর্ধ-সারাংশ</td><td>ভুল মোড়; মাঝপথের ভার ফেলতে</td></tr>
<tr><td class="hl">/autocompact N</td><td>স্বয়ংক্রিয়-সংক্ষপ্তির সীমা সেট</td><td>দীর্ঘ সেশনে আগে থেকেই</td></tr>
<tr><td class="hl">subagent</td><td>পড়া-ভার আলাদা ঘরে</td><td>গবেষণা/বড় রিফ্যাক্টর</td></tr>
<tr><td class="hl">/clear</td><td>ঘর সম্পূর্ণ খালি</td><td>অসম্পর্ক নতুন কাজ</td></tr>
</table>

<div class="diagram">
<div class="diag-title">স্মৃতি-জাদুঘরের নকশা — The Museum Floor-Plan</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d5" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="15" width="150" height="44" rx="10"/><text class="lbl" x="90" y="33">স্টার্টআপ</text><text class="lbl-sm" x="90" y="49">system + CLAUDE.md + MEMORY</text>
<rect class="node-cyan" x="205" y="15" width="150" height="44" rx="10"/><text class="lbl-cyan" x="280" y="33">কাজের স্রোত</text><text class="lbl-sm" x="280" y="49">ফাইল-পড়া · এডিট · টেস্ট</text>
<rect class="node-hot" x="395" y="15" width="150" height="44" rx="10"/><text class="lbl-hot" x="470" y="33">ঘর ভরা</text><text class="lbl-sm" x="470" y="49">autocompact সীমা</text>
<line x1="165.0" y1="37.0" x2="205.0" y2="37.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d5)"/>
<line x1="355.0" y1="37.0" x2="395.0" y2="37.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d5)"/>
<rect class="node-leaf" x="205" y="95" width="150" height="44" rx="10"/><text class="lbl-leaf" x="280" y="113">সারাংশ-টিকিট</text><text class="lbl-sm" x="280" y="129">compact — গুদামে সারাংশ</text>
<rect class="node-purple" x="395" y="95" width="150" height="44" rx="10"/><text class="lbl" x="470" y="113">নতুন কাজ</text><text class="lbl-sm" x="470" y="129">ফাঁকা ঘরে পরের ধাপ</text>
<line x1="470.0" y1="59.0" x2="274.1" y2="95.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d5)"/>
<line x1="355.0" y1="117.0" x2="395.0" y2="117.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d5)"/>
<rect class="cell" x="15" y="160" width="530" height="40" rx="8"/>
<text class="lbl-sm" x="280" y="176">checkpoint-বুকমার্ক: প্রতি টার্নের আগে চিহ্ন — /rewind-এ যেকোনো চিহ্নে ফেরা (কোড/কথা/সারাংশ)</text>
<text class="lbl-sm" x="280" y="192">⚠ bash-এ বদলানো ফাইল আর বেশিরভাগ subagent-এডিট চিহ্নের নাগালে নয় — ওগুলোর ফেরা git-এ (B61)</text>
</svg>
<div class="diag-cap">ঘর ভরা → সারাংশ-টিকিট → নতুন কাজ; আর প্রতি ধাপে ফেরার বুকমার্ক — এই তিনেই স্মৃতির শাসন।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>কিউরেটরের সতর্কতা:</strong> checkpoint সব-ফেরানোর জাদু নয় — bash-কমান্ডে বদলানো ফাইল (rm, mv, cp) ট্র্যাক হয় না, আর ব্যাকগ্রাউন্ড subagent-এর এডিটও সাধারণত ফেরে না; ওদের জন্য git (B61)। symlink/hardlink-ফাইল রিস্টোরে স্কিপ হয়। আর /compact-এর পর স্কিল-তালিকা আবার ঢোকে না — শুধু যেসব স্কিল সত্যিই ব্যবহার হয়েছিল সেগুলোই থাকে। স্মৃতি-ফাইল (MEMORY.md) এর প্রথম ২০০ লাইন/২৫KB ঢোকে — বাকিটা গুদাম।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The curator's caution:</strong> checkpoints are not an undo-everything spell — bash-modified files (rm, mv, cp) are not tracked, and background-subagent edits usually do not rewind; for those, git (B61). Symlinked/hard-linked files are skipped on restore. After /compact the skill listing is not re-injected — only skills actually used survive. Auto-memory loads its first 200 lines/25KB — the rest stays in the storeroom.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ জমাট-জাদুঘর</div>ঘর ভরা পর্যন্ত অপেক্ষা · স্বয়ংক্রিয়-সংক্ষপ্তি অন্ধভাবে যা চায় তা ফেলে · সব পড়া নিজের ঘরে · ভুল পথে এগিয়ে যেতেই থাকে · /clear না জেনে পুরোনো ভিড়ে নতুন কাজ</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ কিউরেটর-শাসিত ঘর</div>/context দিয়ে নজর · ফোকাসসহ compact · ভার subagent-ঘরে · ভুল মোড়ে /rewind-চিহ্ন · নতুন কাজে /clear</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৬১০০→৪২০</div><div class="sc-label">subagent-সাঞ্চয় (docs-উদাহরণ)</div></div>
<div class="stat-card"><div class="sc-num">১০০</div><div class="sc-label">checkpoint-স্মৃতি প্রতি সেশন</div></div>
<div class="stat-card"><div class="sc-num">২০০ লাইন</div><div class="sc-label">MEMORY.md-র ঘরে-ঢোকা সীমা</div></div>
<div class="stat-card"><div class="sc-num">1M</div><div class="sc-label">Fable/Sonnet 5/Opus 4.6+ জানালা</div></div>
</div>

<p class="verse">কসর — সফরে নামাজ সংক্ষিপ্ত হয়, ফরজ কমে না: মুসাফিরের শরীর যেমন সীমিত, ঘরও তেমন — তাই মূল ঠিক রেখে আনুষঙ্গিক গুদামে যায়। সংক্ষপ্তিও তাই: কাজের মেরুদণ্ড (ফরজ) সারাংশে বাঁচে, বাহুল্য যায় — আর এটাও ইবাদতের মতোই নিয়মে চলে, ইচ্ছেমতো নয়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🫙 /context দেখো, ফোকাসসহ compact করো, ভার subagent-কে; ভুল মোড়ে /rewind-চিহ্নে ফেরো।<br>কারণ: যে জাদুঘর সব রাখতে চায়, সেখানে কেউ হাঁটতে পারে না।</div></div>
<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 5</span><pre class="code-block"># ── প্রম্পট ১ · ফোকাসসহ সংক্ষপ্তি ──
&gt; /compact focus on the auth-bug fix and the file list we changed
# ← সারাংশে যা থাকবে তুমি ঠিক করলে — পাশের আড্ডা গুদামে

# ── প্রম্পট ২ · অর্ধেক-সারাংশ — শুরুর ভার ফেলা ──
&gt; /rewind        (খালি প্রম্পটে Esc Esc)
&gt; → Summarize up to here
# ← সেটআপ-আলোচনা সারাংশ হলো, সদ্য-কাজ অখণ্ড থাকল

# ── প্রম্পট ৩ · স্বয়ংক্রিয়-সীমা নিজের হাতে ──
&gt; /autocompact 500k
# ← ৫০০k টোকেনে স্বয়ংক্রিয়-সংক্ষপ্তি বসবে — বিশাল জানালার যুগেও শৃঙ্খলা

# ── প্রম্পট ৪ · ভুল-মোড়ে ফেরা (কোড অক্ষত রেখে) ──
&gt; /rewind → Restore code only
&gt; এবার অন্য পথে চেষ্টা করি — আগের কথোপকথন থাক, কোড পুরনো অবস্থায়
# ← কথা মনে থাকে (কেন ব্যর্থ হলো সেই শিক্ষাসহ), কোড ফেরে — দ্বিতীয় চেষ্টা সস্তা

# ── প্রম্পট ৫ · ঘর-ভরা কেন হলো — হিসাব দেখো ──
&gt; /context
&gt; কোন অংশটা সবচেয়ে বেশি টোকেন খাচ্ছে? শুধু শীর্ষ-তিনের তালিকা
# ← স্রোত ভারী করছে কে — ফাইল? টুল-আউটপুট? — ওষুধ তার পরে</pre></div></div>
`,
  senior: {
    title: "কিউরেটরের খাতা — The Curator's Ledger",
    body: `<ul class="checklist">
<li>ঘর ভারী লাগলেই <strong>/context</strong> — কোথায় ভার, সে নিজেই পরামর্শ দেয়।</li>
<li>নতুন বড় কাজের আগে <strong>/compact focus on …</strong> — সারাংশ তোমার হাতে।</li>
<li>মাঝপথের ভার ফেলতে <strong>/rewind → Summarize from here</strong>; ভুল কাজ ফেরত <strong>Restore code</strong>।</li>
<li>গবেষণা-কাজ সবসময় <strong>subagent</strong>-কে — প্রধান ঘর হালকা (দরজা ৭)।</li>
<li>দীর্ঘ সেশনে <strong>/autocompact</strong>-সীমা আগেই বসাও; নতুন অসম্পর্ক কাজে <strong>/clear</strong>।</li>
<li>মনে রেখো checkpoint-এর সীমা: bash-ফাইল নয়, subagent-এডিট প্রায় নয় — ওরা git-এর জমি (B61)।</li>
</ul>`
  }
});

// ── DOOR 6 · তালার কারিগর — The Locksmith ──
doors.push({
  num: 6,
  icon: "🔐",
  color: "#52c41a",
  name: "তালার কারিগর",
  subtitle: "The Locksmith",
  tech: "Permissions & Settings",
  spirit: "আমানত — ক্ষমতা অর্থ দায়িত্ব",
  secret: "শাগরেদকে ঘরের চাবি দিয়ে দেওয়া আর দরজায় তালা দেওয়া — দুটোই মূর্খতা। অনুমতি মানে হিসাবি আস্থা।",
  recall: {
    q: "Claude-কে প্রতিবার অনুমতি চেয়ে চেয়ে কাজ থামাচ্ছে, আবার সব কিছু নিজে থেকে করতে দিলে ভয় — কীভাবে মাঝের পথ?",
    qen: "Claude keeps stopping to ask permission, yet auto-allowing everything feels dangerous — what is the middle path?",
    a: "permissions কনফিগে allow/deny নিয়ম লিখে রাখো (settings.json বা .claude/settings.json): নিরাপদ কমান্ড যেমন npm test সবসময় allow, বিপজ্জনক যেমন rm -rf সবসময় deny। আর সেশনের ধরন বদলাও permission mode দিয়ে — default, acceptEdits, plan, bypassPermissions।",
    aen: "Write allow/deny rules in your permissions config (settings.json or .claude/settings.json): safe commands like npm test always allowed; dangerous ones like rm -rf always denied. And change the session's character with permission modes — default, acceptEdits, plan, bypassPermissions."
  },
  story: `<p class="scene-setting">কারখানার গলির ওই মাথায় বেলালের দোকান — তালা আর চাবির সম্রাট। দেয়ালে শত শত চাবি ঝুলছে, প্রতিটার গায়ে সবুজ সুতায় নাম বাঁধানো। বেলালের নিয়ম সহজ: সে চাবি বানায়, কার ঘরের চাবি কার হাতে থাকবে সেটা মালিক ঠিক করবে। কেউ একবার বলেছিল — বেলাল ভাই, সব দরজার মাস্টার-চাবি বানিয়ে দিন, ঝামেলা কমবে। বেলাল হেসেছিল — সোনা, মাস্টার-চাবি মানে চোরের কাজ অর্ধেক করা দেওয়া।</p>
<p class="scene-setting en">At the head of the lane sits Belal's shop — emperor of locks and keys. Hundreds of keys hang on the wall, each bound with a green thread and a name. Belal's rule is simple: he makes keys; whose hand holds whose door's key, the owner decides. Someone once said — Belal bhai, make a master-key for every door, less hassle. Belal laughed — gold, a master-key means doing half the thief's work for him.</p>

<div class="dialogue">তুমি বেলালের দোকানে গিয়ে বললে — আমার কারখানায় এক শাগরেদ, কাজে ওস্তাদ, কিন্তু প্রতিটা পিন তুলতে আমাকে ডাকে; আবার সব চাবি দিলে রাতে ঘুম আসে না। বেলাল খাতা খুলে তিনটা চাবি বানাল: এক — বারান্দার চাবি, নিত্যনৈমিত্তিক কাজের, না জিজ্ঞেস করেই খুলবে; দুই — গুদামের চাবি, ওঠানামার কাজে লাগবে, কিন্তু খাতায় লেখা থাকবে কখন খুলল; তিন — সোনার আলমারির চাবি, সেটা শুধু মালিকের হাতে, শাগরেদ কখনোই নয়। তারপর বলল — আর এই যে লাল খাম, এটা রেখে দাও ফায়ার-অ্যালার্মের পাশে — ভবন জ্বললে সব নিয়ম ভেঙে দরজা ভাঙা যাবে, কিন্তু খামটা খুলবে মালিকই, দিনের বেলায়, ভেবেচিন্তে।</div>
<div class="dialogue en">You tell Belal — my workshop has an apprentice, masterful at work, but he calls me to lift every pin; yet giving all the keys keeps me awake at night. Belal opens his book and cuts three keys: one — the verandah key, for daily work, unlocked without asking; two — the storeroom key, needed for loading, but every opening written in the book; three — the golden almirah key, that stays only in the owner's hand, never the apprentice's. Then he adds — and this red envelope, keep it by the fire alarm: if the building burns, rules break and doors may be smashed — but the envelope is opened by the owner, in daylight, after thought.</div>

<p>Claude Code-এ ক্ষমতার হিসাব তিন স্তরে: <strong>নিয়ম</strong> (allow/deny তালিকা), <strong>মোড</strong> (সেশনের স্বভাব), আর <strong>সময়</strong> (প্রশ্ন কখন করবে)। বেলালের তিন চাবির মতোই — কোন কাজ নির্দ্বিধায়, কোনটা জিজ্ঞেস করে, কোনটা কখনোই নয়।</p>
<p class="en">Claude Code's account of power runs on three levels: <strong>rules</strong> (allow/deny lists), <strong>modes</strong> (the session's character), and <strong>timing</strong> (when it asks). Like Belal's three keys — which work goes unquestioned, which asks first, which never happens at all.</p>

<div class="code-block">// .claude/settings.json — বেলালের চাবির খাতা
{
  "permissions": {
    "allow": [
      "Bash(npm test *)",
      "Bash(npm run *)"
    ],
    "deny": [
      "Bash(rm -rf *)"
    ]
  }
}

# সেশনের স্বভাব বদলানো — permission modes:
claude --permission-mode plan        # শুধু পরিকল্পনা, হাত পেছনে
claude -p "Apply the lint fixes" --permission-mode acceptEdits
                                     # এডিট-টাইপ কাজে আর জিজ্ঞেস নয়</div>

<table class="kv-table">
<tr><th>মোড — Mode</th><th>বেলালের ভাষায়</th><th>কী করে</th></tr>
<tr><td class="hl">default</td><td>প্রতিটা গুদামে জিজ্ঞেস</td><td>সংবেদনশীল কাজে অনুমতি চায় — সবচেয়ে নিরাপদ স্বভাব</td></tr>
<tr><td class="hl">acceptEdits</td><td>বারান্দার চাবি</td><td>ফাইল এডিট ও সাধারণ ফাইল-কমান্ড নিজে থেকেই চলে</td></tr>
<tr><td class="hl">plan</td><td>নকশা টেবিল</td><td>আগে পুরো পরিকল্পনা দেখায়, তারপর তুমি বললে হাত দেয়</td></tr>
<tr><td class="hl">bypassPermissions</td><td>লাল খাম</td><td>সব অনুমতি বাইপাস — শুধু সত্যিকারের নিয়ন্ত্রিত পরিবেশে (CI, স্যান্ডবক্স)</td></tr>
</table>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>বেলালের সবচেয়ে বড় সতর্কতা:</strong> bypassPermissions মানে সোনার আলমারি খোলা রেখে বেড়ানো। ডকও একই বলে — এটা শুধু সেই খামের মতো, যে ভবন জ্বলছে না, সেখানে খোলা যায় না। নিজের ল্যাপটপে ডিফল্ট করে রাখা মানে একদিন একটা ভুল কমান্ডের জন্য সারা ঘর খালি হয়ে যাওয়া। যা অটোমেটেড, সেটাকে ঘেরা পরিবেশে রাখো — স্যান্ডবক্স, কনটেইনার, CI রানার।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Belal's gravest warning:</strong> bypassPermissions is touring with the golden almirah open. The docs agree — like that red envelope, it is not for days the building is fine. Making it the default on your own laptop means one wrong command empties the whole house one day. Whatever runs automated belongs inside a fenced place — sandbox, container, CI runner.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অহংকারী মালিক</div>সব কাজে শাগরেদকে ডাকে — নিজের সময় পোড়ে, শাগরেদের স্ক্র্যাচ হয় না · নতুন প্রজেক্টে প্রতিদিন একই অনুমতি মঞ্জুর</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ হিসাবি মালিক</div>নিয়ম একবার লেখে settings-এ জমা রাখে · নিরাপদ কাজ allow, ভয়ংকর deny, বাকি সব জিজ্ঞেসে · ঝুঁকিপূর্ণ মোড শুধু ঘেরা পরিবেশে</div>
</div>

<p class="verse">চাবি আমানত — কার হাতে কতটুকু ক্ষমতা, সেটা নিজের সুবিধার প্রশ্ন নয়, হিসাবের প্রশ্ন। "নিশ্চয়ই আল্লাহ তোমাদের আদেশ দেন আমানত তার হকদারকে ফিরিয়ে দিতে" (কুরআন ৪:৫৮)। প্রতিটা allow নিয়ম একটা চাবি — ভাবো, তারপর বাঁধো।</p>


<div class="diagram">
<div class="diag-title">অনুমতির স্কেল — The Permission Gauge</div>
<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg">
<rect class="node-hot" x="15" y="60" width="120" height="46" rx="10"/><text class="lbl-hot" x="75" y="80">plan</text><text class="lbl-sm" x="75" y="97">শুধু পড়ো — হাত পেছনে</text>
<rect class="node" x="152" y="60" width="120" height="46" rx="10"/><text class="lbl" x="212" y="80">default</text><text class="lbl-sm" x="212" y="97">জিজ্ঞেস করে তবেই ছোঁয়</text>
<rect class="node-cyan" x="289" y="60" width="120" height="46" rx="10"/><text class="lbl-cyan" x="349" y="80">acceptEdits</text><text class="lbl-sm" x="349" y="97">এডিট মুক্ত, কমান্ড জিজ্ঞেস</text>
<rect class="node-leaf" x="426" y="60" width="120" height="46" rx="10"/><text class="lbl-leaf" x="486" y="80">bypass</text><text class="lbl-sm" x="486" y="97">সব মুক্ত — নিজি দায়িত্বে</text>
<line x1="135" y1="83" x2="148" y2="83" stroke="#f97316" stroke-width="2"/>
<line x1="272" y1="83" x2="285" y2="83" stroke="#f97316" stroke-width="2"/>
<line x1="409" y1="83" x2="422" y2="83" stroke="#f97316" stroke-width="2"/>
<text class="lbl-sm" x="280" y="40" text-anchor="middle">কম বিশ্বাস ──────────────────────────────── বেশি বিশ্বাস</text>
<rect class="cell" x="15" y="120" width="530" height="30" rx="8"/><text class="lbl-sm" x="280" y="139">Tab/Shift+Tab দিয়ে সেশনের মাঝেই স্কেল বদলাও; /permissions-এ খাতা খুলে দেখো কোন তালা আছে</text>
</svg>
<div class="diag-cap">চার স্তরের বিশ্বাস — কাজের ধরন বদলালে স্কেলও বদলাও; bypass শুধু স্যান্ডবক্স/থ্রোঅ্যাওয়ে ঘরে।</div>
</div>

<table class="kv-table">
<tr><th>মোড</th><th>এডিট</th><th>কমান্ড</th><th>কখন</th></tr>
<tr><td class="hl">plan</td><td>না</td><td>না (read-only ব্যতীত)</td><td>বড় কাজের আগে নকশা দেখতে</td></tr>
<tr><td class="hl">default</td><td>জিজ্ঞেস</td><td>জিজ্ঞেস</td><td>রোজকার — নিরাপদ ভারসাম্য</td></tr>
<tr><td class="hl">acceptEdits</td><td>মুক্ত</td><td>জিজ্ঞেস</td><td>টানাটানি এডিট-সেশনে</td></tr>
<tr><td class="hl">bypassPermissions</td><td>মুক্ত</td><td>মুক্ত</td><td>স্যান্ডবক্স/থ্রোঅ্যাওয়ে ঘরে, চোখের নজরে</td></tr>
</table>

<div class="code-block"># একই কাজ, চার স্কেলে — পার্থক্য চোখে পড়ে:
# ① plan মোডে:
claude --permission-mode plan
> লগইন-ফ্লো রিফ্যাক্টর করার প্ল্যান দাও
#   → শুধু পড়ে প্ল্যান লেখে; কোনো ফাইল ছোঁয় না
# ② default:
> src/auth/login.ts-এ rate-limit যোগ করো
#   → এডিটের আগে: "Edit file? (y/n)" — দেখে তবেই y
# ③ acceptEdits:
claude --permission-mode acceptEdits
> একই কাজ
#   → এডিট নিঃশব্দে; npm install চাইলে তবেই জিজ্ঞেস
# ④ bypassPermissions (⚠ থ্রোঅ্যাওয়ে রিপোতেই):
claude --permission-mode bypassPermissions
> টেস্ট ফিক্স করে দাও, যা লাগে করো
#   → সব নিঃশব্দে — এজন্যই ঘর (sandbox) আগে, অস্ত্র পরে

# settings-এ স্থায়ী তালা (বেলালের খাতা, দরজা ৬-এর মূল উদাহরণ):
# .claude/settings.json → permissions.allow / deny তালিকা</div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🔐 অনুমতি তিন তালা: নিরাপদ allow, ভয়ংকর deny, বাকি সব জিজ্ঞেস — আর লাল খাম শুধু ঘেরা উঠানে।<br>কারণ: ক্ষমতা হিসাব না করে দিলে একদিন হিসাব ক্ষমতাকে দেয়।</div></div>
<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 6</span><pre class="code-block"># ── প্রম্পট ১ · রীতিতে তালা (নিরাপদ allow) ──
&gt; .claude/settings.json-এ permissions যোগ করো:
&gt; allow: Bash(npm test *), Bash(npm run lint) — deny: Bash(rm -rf *)
&gt; লেখা শেষে ফাইলটা দেখাও
# ← রোজকার নিরাপদ কমান্ড চির-অনুমোদিত, ধ্বংসাত্মক চির-নিষিদ্ধ

# ── প্রম্পট ২ · বিকল্প-অনুমতি মোডে যাওয়া ──
&gt; (Shift+Tab চক্র) — স্ট্যাটাস-বারে মোডের নাম জ্বলে
# default → acceptEdits → plan → auto — কাজের ধরনে ঘর বদলাও

# ── প্রম্পট ৩ · এডিট-ঝামেলা কমানো ──
&gt; এই ফাইলগুলোতে শুধু টাইপো-সংশোধন হবে — acceptEdits মোডে করো,
&gt; কিন্তু npm install লাগলে আগে জিজ্ঞেস করবে
# ← ছোট-নিরাপদ এডিটে প্রশ্ন-ঝামেলা গেল, ইনস্টলের মতো মোটা কাজে তালা রইল

# ── প্রম্পট ৪ · সন্দেহের ব্যাখ্যা ──
&gt; /permissions
&gt; এই rm কমান্ডটা কেন ব্লক হচ্ছে — কোন নিয়ম, কোন ফাইল থেকে?
# ← প্রতিটা নিয়মের উৎস-সহ হিসাব — অন্ধকারে হাত নয়

# ── প্রম্পট ৫ · প্ল্যান-মোড দিয়ে নিরীক্ষণ-নিরাপত্তা ──
&gt; claude --permission-mode plan
&gt; এই লগ-ফাইলটা পড়ে বলো ইনজেকশন-চেষ্টা আছে কি না
# ← শুধু পড়া — অবিশ্বস্ত লেখার সামনে হাত বাঁধা (দরজা ৩৯-এর রীতি)</pre></div></div>
`,
  senior: {
    title: "চাবির খাতা সাজানো — Organizing the Keyring",
    body: `<ul class="checklist">
<li>প্রথম সপ্তাহে যে কমান্ডগুলোর জন্য বার বার অনুমতি চাওয়া হলো — নিরাপদ হলে settings-এর allow তালিকায় তুলে নাও।</li>
<li><strong>rm -rf</strong>, curl-পাইপ-শেল, ডাটাবেস ড্রপ — এসব deny তালিকায় লিখে রাখো, যাতে ঘুমের ঘোরেও ঢুকে না পড়ে।</li>
<li>বড় কাজের আগে <strong>plan মোড</strong> দিয়ে শুরু করো — নকশা দেখো, তারপর হাত।</li>
<li>স্ক্রিপ্ট/CI-তে <strong>--permission-mode acceptEdits</strong> বা bypassPermissions — কিন্তু শুধু ঘেরা পরিবেশে।</li>
<li>দলের কারখানায় নিয়ম .claude/settings.json-এ রেখে git-এ দাও — সবার তালা একই খাতায়।</li>
</ul>
<p class="en">Book 62's Iron Wall (Door 17) shows who truly enforces rules — the harness, not the instructions.</p><p><strong>পাশের বই:</strong> Book 62-এর লোহার প্রাচীর (দরজা ১৭) দেখায় নিয়ম আসলে কে জারি করে — instructions নয়, harness। <em>(Book 62 · বারো লাইনের ইঞ্জিন)</em></p>`
  }
});
