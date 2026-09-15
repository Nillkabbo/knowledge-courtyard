// ════════════════════════════════════════
// Book 59 · The Terminal Craftsman — Doors 1-5
// Every command verified against the official
// Claude Code docs (code.claude.com)
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

<div class="code-block">npm install -g @anthropic-ai/claude-code
# (Node.js ২২ বা তার বেশি লাগবে; sudo দিয়ে নয়)

# ইনস্টলের পর, প্রজেক্ট ফোল্ডারে গিয়ে:
cd ~/my-project
claude            # ← ইন্টারঅ্যাক্টিভ সেশন শুরু

# প্রথম বার চালু করলে লগইন করতে বলবে (ANTHROPIC_API_KEY
# সেট করা থাকলে সেটিকে অনুমোদন করতে বলে)।
# এক লাইনের কাজ, উত্তর শুধু দরকার:
claude -p "এই প্রজেক্ট কী করে, এক লাইনে বলো"

# শুরুতেই একটা কাজ দিয়ে সেশন খোলা:
claude "fix the build error"</div>

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

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🔨 টার্মিনালে <strong>claude</strong> লিখো — হাতুড়ি হাতে ওঠার আগে হাতটা চেনো।<br>কারণ: টুল চেনা আর টুল চালানো এক কথা নয় — প্রথমটা ছাড়া দ্বিতীয়টা বিপদ।</div></div>`,
  senior: {
    title: "প্রথম সপ্তাহে করণীয় — First Week Moves",
    body: `<ul class="checklist">
<li>ছোট একটা প্রজেক্টে <strong>claude</strong> দিয়ে সেশন খোলো — শুধু প্রশ্ন করো: এই কোড কী করে? কোথায় এন্ট্রি পয়েন্ট?</li>
<li><strong>claude -p</strong> দিয়ে এক লাইনের কাজ করো: লগ বিশ্লেষণ, কমিট মেসেজ, দ্রুত ব্যাখ্যা।</li>
<li>থিম, লগইন, টার্মিনালের বেসিক নেভিগেশন — এগুলো প্রথম দিনেই শেষ করো, পরে আর ফিরে দেখতে হবে না।</li>
<li>ডক: quickstart আর terminal-guide পাতা বুকমার্ক করো — হাতুড়ির ব্যবহারবিধি।</li>
</ul>`
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
<tr><td class="hl">উপ-ফোল্ডার</td><td>সাব-ডিরেক্টরির CLAUDE.md</td><td>ওই অংশের নিয়ম — দরকারের সময় লোড হয়</td></tr>
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

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📜 বার বার বলতে হয় এমন কথা CLAUDE.md-তে ওঠাও — মুখ নয়, খাতা বলে।<br>কারণ: প্রতিটা সেশন নতুন শাগরেদ — খাতা না পড়ে সে কাজে নামলে দোষ তোমার।</div></div>`,
  senior: {
    title: "কার্যকর বাহির খাতা লেখার নিয়ম — Writing the Ledger",
    body: `<p>শুরু করো <strong>/init</strong> দিয়ে, তারপর নিজে ছাঁটো। মাসে একবার খাতা পুনরায় পড়ো — ডকের পরামর্শ: <strong>/doctor</strong> চালালে Claude নিজেই বলে দেবে কোন লাইনগুলো কোডবেস থেকে অনুমান করা যায়, সেগুলো কেটে দাও। আর মনে রেখো: কোনো নিয়ম বার বার ভাঙা মানে লাইনটা হয় হারিয়ে গেছে, নয়তো অস্পষ্ট — দুই ক্ষেত্রেই সমাধান ছোট করা, বড় নয়।</p>`
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
<marker id="arrowTeal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#3dd6c4"/></marker>
<marker id="arrowAmber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker>
<marker id="arrowFire" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#ff6b35"/></marker>
<marker id="arrowPurple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#b37feb"/></marker>
</defs>
<rect class="cell" x="15" y="20" width="180" height="36" rx="8"/><text class="lbl-sm" x="105" y="38">টাইপো · ফরম্যাট · দ্রুত প্রশ্ন</text>
<rect class="cell" x="15" y="75" width="180" height="36" rx="8"/><text class="lbl-sm" x="105" y="93">রোজকার ফিচার · বাগ · রিভিউ</text>
<rect class="cell" x="15" y="130" width="180" height="36" rx="8"/><text class="lbl-sm" x="105" y="148">বড় রিফ্যাক্টর · কঠিন ডিবাগ</text>
<rect class="cell" x="15" y="185" width="180" height="36" rx="8"/><text class="lbl-sm" x="105" y="203">সবচেয়ে কঠিন · দীর্ঘ কাজ</text>
<rect class="node-leaf" x="395" y="20" width="150" height="36" rx="18"/><text class="lbl-leaf" x="470" y="38">Haiku ⚡</text>
<rect class="node" x="395" y="75" width="150" height="36" rx="18"/><text class="lbl" x="470" y="93">Sonnet 🔨</text>
<rect class="node-hot" x="395" y="130" width="150" height="36" rx="18"/><text class="lbl-hot" x="470" y="148">Opus 🐂</text>
<rect class="node-purple" x="395" y="185" width="150" height="36" rx="18"/><text class="lbl" x="470" y="203">Fable 🧓</text>
<line class="edge-cyan" x1="195" y1="38" x2="390" y2="38"/>
<line class="edge-amber" x1="195" y1="93" x2="390" y2="93"/>
<line class="edge-hot" x1="195" y1="148" x2="390" y2="148"/>
<line x1="195" y1="203" x2="390" y2="203" stroke="#b37feb" stroke-width="2" fill="none" marker-end="url(#arrowPurple)"/>
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

<p>দলের কারখানায় (settings.json) মডেলও বাঁধা রাখা যায় — কে কোন মডেল ব্যবহার করবে, তার তালাও মালিকের হাতে। অনুমতি-তালার দরজায় (দরজা ৫) এই ফাইলের আরও চাবি দেখবে।</p>
<p class="en">In a team workshop (settings.json) the model itself can be pinned — who may use which model is the owner's lock too. More keys to this file await at the permissions door (Door 5).</p>

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

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">⚖️ Sonnet হাতের কাছে, Opus জরুরিতে, Haiku ছোট দৌড়ে, Fable গভীর চিন্তায় — /model দিয়ে ভাই বদলাও।<br>কারণ: ভুল ভাই ডাকলে হয় দিন নষ্ট, নয় কাজ দুইবার।</div></div>`,
  senior: {
    title: "মডেল-বাছাইয়ের টেবিল — The Selection Table",
    body: `<table class="kv-table">
<tr><th>কাজ</th><th>মডেল</th><th>কেন</th></tr>
<tr><td>টাইপো, ফরম্যাটিং, ছোট প্রশ্ন</td><td class="hl">Haiku</td><td>দ্রুততা জিত, খরচ কম</td></tr>
<tr><td>ফিচার, বাগ, টেস্ট, রিভিউ</td><td class="hl">Sonnet</td><td>নির্ভরযোগ্য রোজকার ডিফল্ট</td></tr>
<tr><td>বড় রিফ্যাক্টর, কঠিন ডিবাগ, উঁচু ঝুঁকি</td><td class="hl">Opus</td><td>সবচেয়ে বেশি সতর্ক শক্তি</td></tr>
<tr><td>সবচেয়ে কঠিন, দীর্ঘ চলা কাজ</td><td class="hl">Fable</td><td>দীর্ঘ কাজে সর্বোচ্চ সক্ষমতা</td></tr>
</table>
<p>সেশনের মাঝে কাজের ধরন বদলালে লজ্জা পেয়ো না — /model এক সেকেন্ডের কাজ। আর গভীর সমস্যায় /effort xhigh দিয়ে চিন্তার ঘণ্টা বাড়াও।</p>`
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
    a: "কারণ: প্রতিটা টুল রেজাল্ট, ফাইল, আউটপুট কনটেক্সট নদীতে জমে — নদী ভরে গেলে পুরনো কথা কম্প্যাক্ট হয়ে সংক্ষেপে পরিণত হয়। ব্যবস্থা: (১) কম্প্যাকশনের আগে-পরে নিয়ন্ত্রণ — /compact, /clear; (২) বাইরে রাখা — ভারী অনুসন্ধান সাব-এজেন্টে (দরজা ৬)।",
    aen: "Because every tool result, file, and output settles into the context river — when the river fills, old talk is compacted into summary. Remedies: (1) control compaction timing with /compact and /clear; (2) keep heaviness out — delegate bulky exploration to subagents (Door 6)."
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
<marker id="arrowLoop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#9290a8"/></marker>
<marker id="arrowLoopTeal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#3dd6c4"/></marker>
</defs>
<rect class="node-cyan" x="15" y="80" width="120" height="46" rx="12"/><text class="lbl-cyan" x="75" y="103">তোমার কথা</text><text class="lbl-sm" x="75" y="118">your prompt</text>
<rect class="node" x="185" y="80" width="120" height="46" rx="12"/><text class="lbl" x="245" y="103">চিন্তা</text><text class="lbl-sm" x="245" y="118">think</text>
<rect class="node-hot" x="355" y="80" width="120" height="46" rx="12"/><text class="lbl-hot" x="415" y="103">টুল চালাও</text><text class="lbl-sm" x="415" y="118">act (Read · Bash · Edit)</text>
<rect class="node-leaf" x="185" y="15" width="120" height="40" rx="12"/><text class="lbl-leaf" x="245" y="35">ফল দেখো</text><text class="lbl-sm" x="245" y="48">observe result</text>
<rect class="cell-good" x="355" y="15" width="120" height="40" rx="12"/><text class="lbl-leaf" x="415" y="35">কাজ শেষ?</text><text class="lbl-sm" x="415" y="48">done?</text>
<line x1="135" y1="103" x2="180" y2="103" stroke="#9290a8" stroke-width="1.5" marker-end="url(#arrowLoop)"/>
<line x1="305" y1="103" x2="350" y2="103" stroke="#9290a8" stroke-width="1.5" marker-end="url(#arrowLoop)"/>
<line x1="415" y1="78" x2="415" y2="60" stroke="#9290a8" stroke-width="1.5" marker-end="url(#arrowLoop)"/>
<line x1="350" y1="35" x2="310" y2="35" stroke="#9290a8" stroke-width="1.5" marker-end="url(#arrowLoop)"/>
<path class="edge-cyan" d="M 245 58 L 245 75" marker-end="url(#arrowLoopTeal)"/>
<text class="lbl-sm" x="285" y="150">না → আবার চিন্তা</text>
<text class="lbl-sm" x="285" y="166">no → think again</text>
<line x1="415" y1="60" x2="415" y2="78" stroke="rgba(82,196,26,.7)" stroke-width="1.5"/>
</svg>
<div class="diag-cap">প্রতিটা ঘোরার প্রতিটা শব্দ নদীতে জমে — তাই মাঝির প্রথম কাজ নদীর হিসাব রাখা। Every turn's every word settles into the river — so the ferrywoman's first job is the river's account.</div>
</div>

<p class="verse">নদীর কথা মনে রেখো — পানির কল্যাণ প্রবাহে, কিন্তু নৌকার নিরাপত্তা মাঝির হিসাবে। আল্লাহ জলদিগণকে সীমায় রেখেছেন — সীমা লঙ্ঘন করলে সে ডুবিয়ে দেয় (সূরা রহমান-এর মীযানের শিক্ষা, কুরআন ৫৫:৭-১১)। কনটেক্সট নদীর সীমাও তেমনই — ভালোবেসে ভরে ফেললে সে ডুবিয়ে দেয়।</p>

<div class="code-block"># নদীর হিসাব নিজের হাতে:
> /context     # কনটেক্সটে এখন কী কী জমে আছে
> /compact     # পুরনো কথা সংক্ষেপে ঠেলে জায়গা করো
> /clear       # নদী একদম খালি — নতুন কাজে নতুন শুরু

# ভাসানোর আগেই খালাস:
# ছোট ছোট কাজ শেষ করে /clear দাও, লম্বা অনুসন্ধান সাব-এজেন্টে পাঠাও</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>ফরিদার টিপ:</strong> বড় কাজ ভাঙো ছোট নৌকায়-ছোট যাত্রায়। এক সেশনে পুরো মাসের কাজ চালাতে যেয়ো না — প্রতিটা ফিচার বা বাগের জন্য তাজা /clear, আর প্রয়োজনে ব্যাকগ্রাউন্ড এজেন্ট। নদী সবসময় তাজা থাকে।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Farida's tip:</strong> Break big work into small boats, small voyages. Don't run a whole month's work in one session — fresh /clear per feature or bug, background agents when needed. The river stays fresh.</div></div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">⛵ কনটেক্সট নদী — ভরে গেলে পুরনো কথা কম্প্যাক্ট হয়; /context দেখো, /compact করো, /clear দিয়ে নতুন যাত্রা।<br>কারণ: যা নদীতে নেই, শাগরেদ তা দেখে না — ভাসানোর আগে খালাস করো।</div></div>`,
  senior: {
    title: "কনটেক্সটের হিসাব রাখার নিয়ম — Keeping the River's Account",
    body: `<ul class="checklist">
<li>লম্বা সেশনে মাঝে মাঝে <strong>/context</strong> চালাও — নদী কতটা ভরেছে দেখো।</li>
<li>এক ফিচার শেষ → <strong>/clear</strong> → পরের ফিচার। নৌকা হালকা, মাঝি সজাগ।</li>
<li>কম্প্যাকশন দরকার হলে নিজের ইচ্ছায় <strong>/compact</strong> — জোর করে ডুবার আগেই খালাস।</li>
<li>পুরো কোডবেস ঘেঁটে বের করার মতো ভারী কাজ মূল সেশনে টানো না — দরজা ৬-এর সাব-এজেন্ট ওদের নিজস্ব নৌকায় করে শুধু সারমর্ম পাঠায়।</li>
<li>প্রতিটা বড় সেশনের শুরুতে থাকবে রাহেলার খাতা (CLAUDE.md) — কম্প্যাকশনের পরেও সে ডিস্ক থেকে ফিরে আসে।</li>
</ul>`
  }
});

// ── DOOR 5 · তালার কারিগর — The Locksmith ──
doors.push({
  num: 5,
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

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🔐 অনুমতি তিন তালা: নিরাপদ allow, ভয়ংকর deny, বাকি সব জিজ্ঞেস — আর লাল খাম শুধু ঘেরা উঠানে।<br>কারণ: ক্ষমতা হিসাব না করে দিলে একদিন হিসাব ক্ষমতাকে দেয়।</div></div>`,
  senior: {
    title: "চাবির খাতা সাজানো — Organizing the Keyring",
    body: `<ul class="checklist">
<li>প্রথম সপ্তাহে যে কমান্ডগুলোর জন্য বার বার অনুমতি চাওয়া হলো — নিরাপদ হলে settings-এর allow তালিকায় তুলে নাও।</li>
<li><strong>rm -rf</strong>, curl-পাইপ-শেল, ডাটাবেস ড্রপ — এসব deny তালিকায় লিখে রাখো, যাতে ঘুমের ঘোরেও ঢুকে না পড়ে।</li>
<li>বড় কাজের আগে <strong>plan মোড</strong> দিয়ে শুরু করো — নকশা দেখো, তারপর হাত।</li>
<li>স্ক্রিপ্ট/CI-তে <strong>--permission-mode acceptEdits</strong> বা bypassPermissions — কিন্তু শুধু ঘেরা পরিবেশে।</li>
<li>দলের কারখানায় নিয়ম .claude/settings.json-এ রেখে git-এ দাও — সবার তালা একই খাতায়।</li>
</ul>`
  }
});
