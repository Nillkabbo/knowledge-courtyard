// ════════════════════════════════════════
// Book 62 · The Twelve-Line Engine — The Claude Code Journey
// DOORS 01–04 · Part 1: Use it — first steps
// ════════════════════════════════════════
const doors = [];


// ── DOOR 1 · আমিনের শিকল — The Surveyor's Chain ──
doors.push({
  num: 1,
  icon: "📏",
  color: "#22d3ee",
  name: "আমিনের শিকল",
  subtitle: "The Surveyor's Chain",
  tech: "Install, first session, and code archaeology — read before you write",
  spirit: "ইকরা — শুরু হয় পড়া দিয়ে",
  secret: "লেখার আগে পড়ো — প্রশ্ন বিনামূল্যে, edit-এর জন্য review লাগে।",
  recall: {
    q: "নতুন কোনো repo-তে Claude Code-এর প্রথম session-এ প্রথম কাজ কী হওয়া উচিত? আর `!git status` লেখা আর ‘git status দেখাও’ বলার পার্থক্য কী?",
    qen: "What should your first Claude Code session in a new repo be about? And what is the difference between typing !git status and asking ‘show me git status’?",
    a: "Code লেখানো নয় — প্রশ্ন করা: codebase-এর একটা tour, request কীভাবে URL থেকে database-এ যায়, test কোথায়, কোনো পরিবর্তনের জন্য কোন file ছুঁতে হবে। আর !git status তুমি নিজে চালাও (bash mode), output কথোপকথনে যোগ হয়; ‘দেখাও’ বললে Claude একটা tool call করে।",
    aen: "Not writing code — asking questions: a tour of the codebase, how a request flows from URL to database, where tests live, which files a change would touch. !git status runs the command yourself (bash mode) and adds the output to the conversation; asking makes Claude call a tool."
  },
  story: `<div class="callout info"><span class="co-icon">🧭</span><div><strong>প্রথম পর্ব — ব্যবহার করো (দরজা ১–৮):</strong> আট দরজায় তুমি Claude Code-কে প্রতিদিনের কাজে নিরাপদে, দক্ষভাবে চালাতে শিখবে। Book 59 (টার্মিনাল কারিগর) প্রতিটা বৈশিষ্ট্যের গভীর reference; এখানে প্রতিটা অভ্যাস একজন ওস্তাদের হাতে।<br><em>Part 1 — Use it (Doors 1–8): drive Claude Code safely and well in daily work. Book 59 is the deep reference; here each habit comes from a master.</em></div></div>

<p class="scene-setting">মুন্সীগঞ্জের পদ্মার এক চর, শীতের সকাল। পায়ের নিচে ভেজা পলির ঠান্ডা, বাতাসে নদীর আঁশটে গন্ধ, দূরে ট্রলারের ভটভট। কাঁধে লোহার জরিপ-শিকল ঝুলিয়ে হাঁটছেন আমিন জহুরুল — প্রতি পদক্ষেপে শিকলের ঝনঝন। ঘাড়টা রোদে পুড়ে তামাটে, চল্লিশ বছরের চরের রোদ। তিনি কোনো জমির সীমানা আঁকেন না, যতক্ষণ না নিজের পায়ে পুরো জমিটা হেঁটে দেখেছেন।</p>
<p class="scene-setting en">A char island in the Padma near Munshiganj, a winter morning. The cold of wet silt underfoot, the fishy smell of the river, a trawler putt-putting in the distance. Surveyor Zahurul walks with an iron survey chain over his shoulder, clinking at every step. His neck is burnt copper by forty years of char sun. He draws no boundary until he has walked the whole land on his own feet.</p>

<div class="dialogue">তুমি উত্তেজিত হয়ে বলো — চাচা, আমি আজ Claude Code install করেছি! প্রথম কাজেই বলেছি, "Invoice page-এ CSV export যোগ করো।" ও ছয়টা file-এ চারশো লাইন লিখে ফেলল। কিন্তু এমন একটা library ব্যবহার করেছে যা আমাদের project-এ নেই, আর আমাদের reports folder-এ যে export-এর নিয়ম আছে, সেটা দেখেইনি। জহুরুল শিকলটা মাটিতে নামালেন। বললেন — ও জমি না দেখে সীমানা এঁকেছে। আমিও একবার এঁকেছিলাম।</div>
<div class="dialogue en">You say excitedly: Uncle, I installed Claude Code today! First job, I told it, "Add CSV export to the invoice page." It wrote four hundred lines in six files. But it used a library our project doesn't have, and never looked at the export pattern already in our reports folder. Zahurul lowers the chain to the ground. It drew a boundary without seeing the land. I did that once too.</div>

<p>তাঁর ভুলের গল্প: তরুণ বয়সে, এক গরমের দুপুরে, তিনি অফিসে বসে বাষট্টি সালের পুরনো নকশা দেখে দুই পরিবারের জমির সীমানা এঁকে দিয়েছিলেন — হাঁটতে ইচ্ছে করেনি। কিন্তু এত বছরে নদী সরে গিয়েছিল; এক পরিবারের ঘর পড়ে গেল অন্যের সীমানায়। মারামারি, মামলা, দশ বছর। জহুরুল বললেন — সেদিন থেকে নিয়ম: আগে হাঁটো, জিজ্ঞেস করো, দেখো পুরনো খুঁটি কোথায়। তারপর শিকল। শেষে কলম।</p>
<p class="en">His mistake: young, on a hot afternoon, he sat in the office and drew two families' boundary from a 1962 map — he didn't feel like walking. But over the years the river had moved; one family's house fell inside the other's boundary. A fight, a lawsuit, ten years. Since that day the rule: first walk, ask, see where the old posts stand. Then the chain. Last, the pen.</p>

<p>Claude Code-এর প্রথম দিন ঠিক এই নিয়মে। Install করো, repository-র <strong>root</strong>-এ দাঁড়াও, <strong>claude</strong> লেখো — আর প্রথমে শুধু প্রশ্ন করো। প্রশ্ন বিনামূল্যে, ঝুঁকিহীন; ভুল উত্তর দিলেও কোনো file বদলায় না। আর উত্তরের সময় Claude কী <em>করছে</em> দেখো: Glob, Grep, Read — সে হাঁটছে। (কে আসলে হাঁটে আর কে শুধু লেখে, সেটা দরজা ৯-এর মুনশি দেখাবেন।)</p>
<p class="en">Claude Code's first day follows exactly this rule. Install it, stand at the repository <strong>root</strong>, type <strong>claude</strong> — and first, only ask. Questions are free and risk-free; a wrong answer changes no file. And while it answers, watch what Claude <em>does</em>: Glob, Grep, Read — it is walking. (Who actually walks and who only writes, the munshi of Door 9 will show.)</p>

<div class="code-block"># Install (একবার) — পদ্ধতি বদলায়, code.claude.com-এ মিলিয়ে নিয়ো
curl -fsSL https://claude.ai/install.sh | bash      # macOS / Linux / WSL
# বা: brew install --cask claude-code    বা: npm install -g @anthropic-ai/claude-code

cd ~/code/invoicing-service     # always start at the repo root
claude                          # first run walks you through login

# জমি হাঁটার প্রশ্ন — code archaeology
&gt; give me a tour of this codebase: main apps, how a request flows from URL to database, where tests live
&gt; how is authentication handled? show me the files involved
&gt; what would I need to change to add a discount_code field to invoices? don't change anything, just map it
&gt; look at git log for billing/ and tell me how this module evolved
&gt; @billing/services.py what are the three riskiest functions here and why?</div>

<table class="kv-table"><tr><th>তুমি লেখো · You type</th><th>যা ঘটে · What happens</th></tr><tr><td class="hl">সাধারণ লেখা</td><td>Claude-এর কাছে অনুরোধ</td></tr><tr><td class="hl">@path/to/file.py</td><td>file বা folder message-এ যুক্ত (tab-completion)</td></tr><tr><td class="hl">!git status</td><td>bash mode — তুমি নিজে চালাও, output কথোপকথনে যায়</td></tr><tr><td class="hl">/</td><td>slash command: /help, /init, /clear, /model …</td></tr><tr><td class="hl">Esc</td><td>কাজের মাঝখানে থামাও — প্রায়ই ব্যবহার করো</td></tr><tr><td class="hl">Esc Esc</td><td>আগের message বা checkpoint-এ ফেরো (দরজা ৪)</td></tr><tr><td class="hl">Shift+Tab</td><td>permission mode বদলাও (দরজা ২, ৪)</td></tr><tr><td class="hl">claude -c · claude -r</td><td>শেষ কথোপকথন চালিয়ে যাও · পুরনোটা বেছে নাও</td></tr></table>

<div class="diagram"><div class="diag-title">Walk the land first · আগে জমি হাঁটো</div><svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg"><defs><marker id="n1a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker></defs><rect class="node-cyan" x="15" y="40" width="130" height="70" rx="10"/><text class="lbl" x="80" y="64">ASK</text><text class="lbl-sm" x="80" y="84">tour · flows · risks</text><text class="lbl-sm" x="80" y="99">risk-free</text><rect class="node-moon" x="175" y="40" width="130" height="70" rx="10"/><text class="lbl" x="240" y="64">WATCH</text><text class="lbl-sm" x="240" y="84">Glob · Grep · Read</text><text class="lbl-sm" x="240" y="99">it is walking</text><rect class="node" x="335" y="40" width="130" height="70" rx="10"/><text class="lbl" x="400" y="64">CHECK</text><text class="lbl-sm" x="400" y="84">ask what you know</text><text class="lbl-sm" x="400" y="99">calibrate trust</text><rect class="node-leaf" x="495" y="40" width="130" height="70" rx="10"/><text class="lbl" x="560" y="64">THEN WRITE</text><text class="lbl-sm" x="560" y="84">Door 2's loop</text><text class="lbl-sm" x="560" y="99">plan → code → verify</text><line x1="145" y1="75" x2="172" y2="75" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n1a)"/><line x1="305" y1="75" x2="332" y2="75" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n1a)"/><line x1="465" y1="75" x2="492" y2="75" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n1a)"/><text class="lbl-hot" x="320" y="160">the 400-line CSV export skipped the first three boxes</text><text class="lbl-sm" x="320" y="185">chain before pen · questions before edits</text></svg><div class="diag-cap">চিত্র: প্রশ্ন → দেখো সে কী পড়ছে → যা জানো তা দিয়ে যাচাই → তারপর লেখা। · Ask, watch, calibrate, then write.</div></div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ অফিসে বসে নকশা</div>প্রথম prompt-এই বড় feature। Claude চেনা নিয়ম দেখে না, নতুন dependency আনে, আর তুমি জানো না ওর উত্তর কতটা বিশ্বাস করবে।<br><em>A big feature as the very first prompt, from an old map.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ জহুরুলের হাঁটা</div>প্রথমে প্রত্নতত্ত্ব। এমন প্রশ্নও করো যার উত্তর তুমি জানো — চেনা জমিতে বিশ্বাস মেপে নাও। নতুন কেউ হলে এটাই সবচেয়ে দ্রুত onboarding; manager হলে architecture-এর সারাংশ চেয়ে টিমের ধারণার সঙ্গে মেলাও।<br><em>Archaeology first; ask questions you already know to calibrate trust.</em></div></div>

<p class="verse">দুপুরে জহুরুল চরের এক বটগাছের নিচে বসে পানি খেলেন। বললেন — আমার আব্বা বলতেন, কুরআনের প্রথম শব্দটা ছিল আদেশ: "পড়ো, তোমার রবের নামে, যিনি সৃষ্টি করেছেন… যিনি কলমের মাধ্যমে শিক্ষা দিয়েছেন, মানুষকে শিখিয়েছেন যা সে জানত না" (সূরা আলাক ৯৬:১–৫, ভাবানুবাদ)। আগে পড়া, তারপর কলম। আমার শিকলও তা-ই বলে।</p>
<p class="en">At noon Zahurul sits under a banyan on the char and drinks water. My father used to say the first word of the Qur'an was a command — iqra, read, recite: "Recite in the name of your Lord who created… who taught by the pen, taught man that which he knew not" (96:1–5, Sahih International). First reading, then the pen. My chain says the same.</p>

<p>Book 59-এ হাসু মিস্ত্রি (দরজা ১) হাতুড়ি ধরিয়েছিলেন আর প্রথম দিনের কার্যশালা (দরজা ৩১) ঘর গোছাতে শিখিয়েছিল। জহুরুল তার আগের কথা বলছেন: হাতুড়ি তোলার আগে জমি হাঁটো। পরের দরজায় নৌকার কারিগর দেখাবেন হাঁটার পরে কীভাবে বানাতে হয়।</p>
<p class="en">In Book 59 Hasu the mistri (Door 1) put the hammer in your hand and the day-one workshop (Door 31) taught you to set up the room. Zahurul speaks of what comes before: walk the land before lifting the hammer. Next door, the boatbuilder shows how to build after the walk.</p>

<div class="secret-box"><div class="label">দরজা ১ — তালিসমান</div><div class="text">📏 লেখার আগে পড়ো — প্রশ্ন বিনামূল্যে, edit-এর জন্য review লাগে।<br><small>নাম: <strong>first session / code archaeology</strong> — install, repo root থেকে claude, @file, !bash, Esc, Shift+Tab।</small></div></div>`,
  senior: {
    title: "Quick Guide — Day One",
    body: `<p><strong>Install</strong> with the native installer (or Homebrew / npm), run <strong>claude</strong> from the repo root, log in, try /help.</p>
<p><strong>First hour:</strong> tour, request flow, auth, where tests live, what a change would touch, how a module evolved (git log). Ask something you already know to calibrate trust.</p>
<p><strong>Keys:</strong> @file, !bash, Esc to interrupt, Esc Esc to rewind, Shift+Tab for modes, claude -c / -r to continue or resume.</p>
<p>Log লেখো: Claude কী ভুল বলল, আর তুমি কীভাবে টের পেলে — এটাই বিশ্বাসের প্রথম মাপ।</p>`
  }
});


// ── DOOR 2 · নৌকার পাঁজর — The Boat's Ribs ──
doors.push({
  num: 2,
  icon: "⛵",
  color: "#38bdf8",
  name: "নৌকার পাঁজর",
  subtitle: "The Boat's Ribs",
  tech: "The core loop — Explore → Plan → Code → Verify → Commit",
  spirit: "তাসাব্বুত — না জেনে পিছু নিয়ো না, যাচাই করো",
  secret: "দিক ছাড়া গতি মানে দ্রুত ভুল — আগে পাঁজর, তারপর তক্তা, আর পানিতে না নামিয়ে ‘হয়েছে’ বোলো না।",
  recall: {
    q: "মূল loop-এর পাঁচটা ধাপ কী? Plan mode-এ Claude কী পারে আর কী পারে না? আর যাচাইয়ের তিনটা পদ্ধতি বলো, সবচেয়ে শক্তটা আগে।",
    qen: "What are the five steps of the core loop? What can Claude do in plan mode and what can't it? Name three verification methods, strongest first.",
    a: "Explore → Plan → Code → Verify → Commit। Plan mode-এ Claude পড়তে ও খুঁজতে পারে, edit করতে পারে না। যাচাই: automated test পাস, তারপর type-checker/linter, তারপর আসল জিনিস চালানো (endpoint-এ curl, page খোলা); ‘দেখে ঠিক মনে হচ্ছে’ যাচাই নয়।",
    aen: "Explore → Plan → Code → Verify → Commit. In plan mode Claude can read and research but not edit. Verification: automated tests passing, then type-checkers/linters, then running the real thing; ‘looks right’ is not verification."
  },
  story: `<p class="scene-setting">কেরানীগঞ্জ, বুড়িগঙ্গার পাড়ে নৌকা বানানোর ঘাট। আলকাতরার ঝাঁঝ আর কাঁচা কাঠের গুঁড়োর মিষ্টি গন্ধ, হাতুড়ির ধপ-ধপ, নদীতে লঞ্চের ঢেউ এসে পাড়ে চাপড় মারছে। অর্ধেক বানানো একটা নৌকার পাঁজরের পাশে দাঁড়িয়ে কারিগর মনির — দুই হাতের আঙুল আলকাতরায় কালো, সাবানে আর ওঠে না। তিনি কখনো তক্তায় পেরেক ঠোকেন না, যতক্ষণ না সব পাঁজর বসে। আর কোনো নৌকা মালিককে দেন না, যতক্ষণ না নিজে পানিতে নামিয়ে দেখেছেন।</p>
<p class="scene-setting en">Keraniganj, a boatbuilding bank on the Buriganga. The bite of tar and the sweet smell of fresh sawdust, the thud of hammers, launch wakes slapping the bank. Beside the ribs of a half-built boat stands boatbuilder Monir, his fingers tar-black, beyond soap. He never nails a plank until every rib is set. And he hands no boat to its owner until he has put it in the water himself.</p>

<div class="dialogue">তুমি বলো — ভাই, জহুরুল চাচার (দরজা ১) কথা মেনে এবার আগে codebase বুঝেছি। তারপর বললাম CSV export বানাও — আর Claude বানাল, বলল "Done!"। কাল production-এ দেখা গেল, যে invoice-এর line item নেই, সেটায় export ভেঙে যায়। মনির একটা তক্তায় হাত বুলিয়ে বললেন — ও তক্তা ঠুকেছে, পাঁজর বসায়নি। আর পানিতে নামায়নি।</div>
<div class="dialogue en">You say: Bhai, following Uncle Zahurul (Door 1), this time I understood the codebase first. Then I asked for the CSV export — Claude built it and said "Done!". Yesterday in production, invoices with no line items broke the export. Monir runs a hand along a plank: It nailed planks without setting ribs. And it never put the boat in the water.</div>

<p>তারপর তাঁর নিজের ডুবে যাওয়া। এক বর্ষায় এক জেলে মালিক তাড়া দিলেন — ইলিশের মৌসুম শুরু। মনির তিন সপ্তাহের কাজ দশ দিনে করলেন: পাঁজর মেপে বসাননি, আন্দাজে তক্তা ঠুকলেন, আর পানিতে না নামিয়েই দিয়ে দিলেন। প্রথম দিনেই তলা দিয়ে পানি উঠল। জেলের পুরো মৌসুম গেল। মনির বললেন — নৌকা বানানো পাঁচ ধাপে: কাঠ দেখো, পাঁজর আঁকো, তক্তা বসাও, পানিতে নামাও, তারপর নাম লিখে ঘাটে তোলো। যেকোনো একটা বাদ দিলে নদী শাস্তি দেয়।</p>
<p class="en">Then his own sinking. One monsoon a fisherman owner pushed him — hilsa season was starting. Monir did three weeks' work in ten days: no measured ribs, planks nailed by eye, and handed over without a water test. On day one water came up through the hull. The fisherman lost his whole season. A boat is built in five steps: look at the timber, draw the ribs, fit the planks, put it in the water, then paint the name and bring it to the ghat. Skip any one and the river punishes you.</p>

<div class="diagram"><div class="diag-title">Five steps, one loop · পাঁচ ধাপ, এক loop</div><svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg"><defs><marker id="n2a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker><marker id="n2b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#ff6b35"/></marker></defs><rect class="node-moon" x="10" y="55" width="112" height="58" rx="10"/><text class="lbl" x="66" y="78">Explore</text><text class="lbl-sm" x="66" y="98">কাঠ দেখো</text><rect class="node-purple" x="137" y="55" width="112" height="58" rx="10"/><text class="lbl" x="193" y="78">Plan</text><text class="lbl-sm" x="193" y="98">পাঁজর · plan mode</text><rect class="node" x="264" y="55" width="112" height="58" rx="10"/><text class="lbl" x="320" y="78">Code</text><text class="lbl-sm" x="320" y="98">তক্তা · tests first</text><rect class="node-leaf" x="391" y="55" width="112" height="58" rx="10"/><text class="lbl" x="447" y="78">Verify</text><text class="lbl-sm" x="447" y="98">পানিতে নামাও</text><rect class="node-cyan" x="518" y="55" width="112" height="58" rx="10"/><text class="lbl" x="574" y="78">Commit</text><text class="lbl-sm" x="574" y="98">নাম · branch + PR</text><line x1="122" y1="84" x2="134" y2="84" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n2a)"/><line x1="249" y1="84" x2="261" y2="84" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n2a)"/><line x1="376" y1="84" x2="388" y2="84" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n2a)"/><line x1="503" y1="84" x2="515" y2="84" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n2a)"/><path d="M447,113 C447,165 320,165 320,116" fill="none" stroke="#ff6b35" stroke-width="2" marker-end="url(#n2b)"/><text class="lbl-hot" x="384" y="180">leaks → fix and re-test</text><text class="lbl-amber" x="193" y="38">👤 you steer here</text><text class="lbl-amber" x="447" y="38">👤 and here</text></svg><div class="diag-cap">চিত্র: Plan আর Verify-তে তোমার হাত সবচেয়ে জরুরি; ফুটো পেলে তক্তায় ফিরে যাও। · You add the most value at Plan and Verify.</div></div>

<div class="code-block"># ১. Explore — পড়ো, লিখো না
&gt; read reports/ and explain how existing exports work. Also invoices/views.py. Don't write code yet.

# ২. Plan — Shift+Tab চেপে plan mode (Claude পড়ে-খোঁজে, edit করতে পারে না)
&gt; plan CSV export for invoices following the pattern in reports/. List files to change,
  test cases (including invoices with no line items), and risks.
&gt; don't add pandas — use the csv module like reports does.     ← push back on the plan

# ৩. Code — আগে test
&gt; implement the plan. Write the tests first, confirm they fail, then implement.

# ৪. Verify — প্রমাণ চাও
&gt; run the full test suite and ruff. Then show the output for 3 invoices, one with no line items.

# ৫. Commit
&gt; commit on a new branch feature/invoice-csv-export and open a PR with testing notes</div>

<table class="kv-table"><tr><th>যাচাই · Verification (শক্ত থেকে দুর্বল)</th><th>নৌকায়</th></tr><tr><td class="hl">১. Automated test (পুরনো + নতুন) পাস</td><td>পানিতে ভাসিয়ে একদিন রাখা</td></tr><tr><td class="hl">২. Type-checker, linter (mypy, ruff)</td><td>পাঁজর মেপে দেখা</td></tr><tr><td class="hl">৩. আসল জিনিস চালানো — curl, page, screenshot</td><td>মাঝনদীতে চালিয়ে দেখা</td></tr><tr><td class="hl">৪. Claude-এর নিজের diff review (/review)</td><td>অন্য কারিগরকে দেখানো</td></tr><tr><td class="hl">৫. "দেখে তো ঠিক মনে হচ্ছে"</td><td>যাচাই নয়</td></tr></table>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ দশ দিনের নৌকা</div>সরাসরি code, plan ছাড়া; test পরে বা একেবারেই না; Claude "Done" বললেই merge।<br><em>Straight to code, tests later or never, merge on "Done".</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ মনিরের পাঁচ ধাপ</div>Plan mode-এ plan পড়ো code review-এর মতো, অন্তত একবার ঠেলে বদলাও; test আগে; "Done"-এর বদলে প্রমাণ চাও। একই loop সব কাজে: bug-এ repro → fix → failing test সবুজ; refactor-এ সব call site → পুরো suite অপরিবর্তিত; migration-এ কপিতে চালিয়ে rollback।<br><em>Review the plan, test first, demand proof; the same loop for bugs, refactors and migrations.</em></div></div>

<p class="verse">সন্ধ্যায় নতুন নৌকাটা পানিতে নামল। মনির সারারাত পাশে বসে রইলেন, তলায় হাত দিয়ে দেখতে দেখতে। বললেন — মাদরাসায় পড়েছিলাম: "যে বিষয়ে তোমার জ্ঞান নেই, তার পিছু নিয়ো না; নিশ্চয়ই কান, চোখ আর হৃদয় — প্রত্যেকটি সম্পর্কে জিজ্ঞাসা করা হবে" (সূরা ইসরা ১৭:৩৬, ভাবানুবাদ)। ‘নৌকা ঠিক আছে’ — এই কথা আমি তখনই বলি, যখন নিজের চোখে দেখেছি। তার আগে নয়।</p>
<p class="en">At dusk the new boat goes into the water. Monir sits beside it all night, feeling along the hull. At the madrasa I learned: "Do not pursue that of which you have no knowledge. Indeed, the hearing, the sight and the heart — about all those one will be questioned" (17:36, Sahih International). I say "the boat is sound" only when I have seen it with my own eyes. Not before.</p>

<p>জহুরুল (দরজা ১) জমি হাঁটতে শিখিয়েছেন; মনির দেখালেন হাঁটার পরে কীভাবে বানাতে হয়। Book 59-এর প্ল্যানার সাহেব (দরজা ২০) plan mode আর কারখানা-ছন্দের মালিক (দরজা ৩৩) build loop বিস্তারিত দেখিয়েছেন; দলিল-ঘর (দরজা ১৯) git-এর শৃঙ্খলা। আর test দিলে Claude কেন ভালো কাজ করে, তার গোপন কারণ দরজা ১২-এর ওস্তাদ বলবেন।</p>
<p class="en">Zahurul (Door 1) taught walking the land; Monir shows how to build after. Book 59's planner (Door 20) and factory-rhythm master (Door 33) detail plan mode and the build loop; the deed-room (Door 19) teaches git discipline. Why tests make Claude work better — the ustad of Door 12 will tell you.</p>

<div class="secret-box"><div class="label">দরজা ২ — তালিসমান</div><div class="text">⛵ দিক ছাড়া গতি মানে দ্রুত ভুল — আগে পাঁজর, তারপর তক্তা, আর পানিতে না নামিয়ে ‘হয়েছে’ বোলো না।<br><small>নাম: <strong>Explore → Plan → Code → Verify → Commit</strong> — plan mode, tests first, verification ladder।</small></div></div>`,
  senior: {
    title: "Quick Guide — The Core Loop",
    body: `<p><strong>Explore:</strong> read the relevant code, no edits. <strong>Plan:</strong> Shift+Tab into plan mode; review the plan like code and change it at least once.</p>
<p><strong>Code:</strong> tests first, confirm they fail, then implement. <strong>Verify:</strong> tests → types/lint → run the real thing → self-review. <strong>Commit:</strong> branch, descriptive message, PR with testing notes.</p>
<p><strong>Where you add value:</strong> steering the plan and judging the verification.</p>
<p>এক লাইনের fix-এ পাঁচ ধাপ লাগে না; এর চেয়ে বড় যেকোনো কাজে লাগে।</p>`
  }
});


// ── DOOR 3 · চালকের রুট-খাতা — The Driver's Route Book ──
doors.push({
  num: 3,
  icon: "🚆",
  color: "#60a5fa",
  name: "চালকের রুট-খাতা",
  subtitle: "The Driver's Route Book",
  tech: "CLAUDE.md — project memory: what to write, where it lives, how it grows",
  spirit: "কিতাব — যে ভোলে না, সে লিখে রাখে",
  secret: "Model ভোলে, খাতা মনে রাখে — একই কথা দুবার শোধরাতে হলে লিখে রাখো।",
  recall: {
    q: "Claude কালকের session মনে রাখে না কেন, আর তার সমাধান কী? CLAUDE.md-তে কী থাকবে আর কী থাকবে না? টিম কোনটা commit করবে, তোমার ব্যক্তিগত পছন্দ কোথায়?",
    qen: "Why doesn't Claude remember yesterday's session, and what is the fix? What belongs in CLAUDE.md and what doesn't? Which file does the team commit, and where do your personal preferences go?",
    a: "প্রতিটা session শূন্য থেকে শুরু; model chat থেকে শেখে না। CLAUDE.md প্রতি session-এ load হয়। রাখো: যে command আন্দাজ করা যায় না, অপ্রকাশ্য নিয়ম, মাইন। রাখো না: যা code পড়েই বোঝা যায়, সাধারণ উপদেশ, রচনা। ./CLAUDE.md টিম commit করে; ব্যক্তিগত পছন্দ ~/.claude/CLAUDE.md বা CLAUDE.local.md-এ।",
    aen: "Every session starts blank; the model does not learn from chats. CLAUDE.md is loaded every session. Keep: commands it cannot guess, non-obvious conventions, landmines. Leave out: what the code shows, generic advice, essays. The team commits ./CLAUDE.md; personal preferences go in ~/.claude/CLAUDE.md or CLAUDE.local.md."
  },
  story: `<p class="scene-setting">কমলাপুর স্টেশন, রাত সাড়ে দশটা, চট্টগ্রামগামী আন্তঃনগরের ইঞ্জিন-কেবিন। ডিজেল আর গরম লোহার গন্ধ, ইঞ্জিনের গর্জনে কেবিনের মেঝে কাঁপছে, প্ল্যাটফর্মে হকারের ডাক। চালকের আসনে লোকোমাস্টার আজিজ — ডান হাতের তালুতে হর্নের হাতল টানার কড়া। ছাড়ার আগে তিনি একটা পুরনো খাকি খাতা খোলেন: তাঁর রুট-খাতা। প্রতিটা বিপজ্জনক বাঁক, প্রতিটা গতি-নিষেধ, প্রতিটা দুর্বল সেতু — হাতে লেখা।</p>
<p class="scene-setting en">Kamalapur station, half past ten at night, the cab of the Chattogram-bound intercity. Diesel and hot iron in the air, the cab floor trembling with the engine's roar, hawkers calling on the platform. In the driver's seat, loco pilot Aziz, a callus on his right palm from pulling the horn handle. Before departure he opens an old khaki notebook: his route book. Every dangerous curve, every speed restriction, every weak bridge — in his own hand.</p>

<div class="dialogue">তুমি বলো — আজিজ ভাই, কাল Claude-কে বলেছিলাম আমাদের logger ব্যবহার করতে, print নয়। আজ নতুন session — আবার print! আমি কতবার বলব? আজিজ খাতাটা তোমার দিকে বাড়িয়ে দিলেন। বললেন — তুমি বলেছ কালকের চালককে। আজকের চালক নতুন। আমাদের লাইনে প্রতি শিফটে চালক বদলায়; যা মুখে বলা, তা শিফটের সঙ্গে চলে যায়। যা খাতায় লেখা, সেটাই থাকে।</div>
<div class="dialogue en">You say: Aziz bhai, yesterday I told Claude to use our logger, not print. Today, a new session — print again! How many times must I say it? Aziz holds the notebook out to you. You told yesterday's driver. Today's driver is new. On our line the driver changes every shift; what is said aloud leaves with the shift. What is written in the book stays.</div>

<p>তারপর তাঁর নিজের ভুল। এক ছুটির পর কাজে ফিরেছিলেন; কন্ট্রোল রুম মুখে বলেছিল ভৈরব সেতুর আগে নতুন গতি-নিষেধ বসেছে। তিনি খাতায় লেখেননি — মনে থাকবে। রাত দুটোয়, ঘুম-চোখে, মনে থাকেনি। শেষ মুহূর্তে সিগন্যাল দেখে ব্রেক কষলেন; যাত্রীরা সিট থেকে ছিটকে পড়ল, কেউ আহত হয়নি, আলহামদুলিল্লাহ। সেদিন থেকে নিয়ম: যা একবার শুনি, তা লিখি। আর দ্বিতীয়বার কাউকে মনে করিয়ে দিতে হলে, সেটা খাতায় লাল কালিতে।</p>
<p class="en">Then his own mistake. Back from leave, the control room told him aloud that a new speed restriction had been set before the Bhairab bridge. He didn't write it — he'd remember. At two in the morning, sleepy-eyed, he didn't. He braked at the last moment on seeing the signal; passengers were thrown from their seats, no one hurt, alhamdulillah. Since then the rule: what I hear once, I write. And anything I have to be reminded of twice goes in red ink.</p>

<p>Claude-এর প্রতিটা session নতুন শিফট। Model তোমার chat থেকে শেখে না, কালকের কথা জানে না (দরজা ১৪-এ ওয়ার্ড-বয় মতিন দেখাবেন কেন)। তার রুট-খাতা হলো <strong>CLAUDE.md</strong> — একটা Markdown file, যা প্রতিটা session-এর শুরুতে Claude-এর context-এ load হয়। <strong>/init</strong> একটা খসড়া বানিয়ে দেয়; <strong>/memory</strong> দিয়ে সম্পাদনা করো।</p>
<p class="en">Every Claude session is a new shift. The model does not learn from your chats and knows nothing of yesterday (at Door 14 the ward-boy Matin shows why). Its route book is <strong>CLAUDE.md</strong> — a Markdown file loaded into Claude's context at the start of every session. <strong>/init</strong> drafts one; edit it with <strong>/memory</strong>.</p>

<div class="code-block"># ./CLAUDE.md — একটা ভালো রুট-খাতা (Django project)
# Invoicing Service

## Commands
- Tests: pytest -q   (single test: pytest path::TestClass::test_name)
- Lint + format: ruff check . --fix && ruff format .
- Types: mypy apps/

## Architecture
- Django 5 + DRF. Business logic in apps/*/services.py, NOT in views or serializers.
- Money is always Decimal, never float (use apps.core.money.Money).
- Celery tasks in apps/*/tasks.py must be idempotent.

## Conventions
- Use structlog (log = get_logger(__name__)), never print().
- Every new endpoint needs a test in tests/api/.

## Watch out
- apps/legacy_billing/ is frozen. Do not modify; ask first.
- Tests need DJANGO_SETTINGS_MODULE=config.settings.test.

# ভুল শোধরানোর অভ্যাস — প্রতিবার:
&gt; you used print again. Add a rule to CLAUDE.md so this doesn't happen in future sessions.</div>

<div class="diagram"><div class="diag-title">Where route books live · রুট-খাতা কোথায় থাকে</div><svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><defs><marker id="n3a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker></defs><rect x="15" y="15" width="380" height="36" rx="7" fill="rgba(252,211,77,.12)" stroke="#fbbf24"/><text class="lbl-sm" x="30" y="37" style="text-anchor:start">Managed policy file</text><text class="lbl-sm" x="380" y="37" style="text-anchor:end">whole organisation</text><rect class="node" x="15" y="59" width="380" height="36" rx="7"/><text class="lbl-sm" x="30" y="81" style="text-anchor:start">~/.claude/CLAUDE.md</text><text class="lbl-sm" x="380" y="81" style="text-anchor:end">you, every project</text><rect class="node-hot" x="15" y="103" width="380" height="36" rx="7"/><text class="lbl-sm" x="30" y="125" style="text-anchor:start">./CLAUDE.md</text><text class="lbl-sm" x="380" y="125" style="text-anchor:end">team — commit it</text><rect class="node" x="15" y="147" width="380" height="36" rx="7"/><text class="lbl-sm" x="30" y="169" style="text-anchor:start">./CLAUDE.local.md</text><text class="lbl-sm" x="380" y="169" style="text-anchor:end">you, this project (gitignore)</text><rect class="node" x="15" y="191" width="380" height="36" rx="7"/><text class="lbl-sm" x="30" y="213" style="text-anchor:start">subdir/CLAUDE.md</text><text class="lbl-sm" x="380" y="213" style="text-anchor:end">when working there</text><line x1="395" y1="120" x2="455" y2="120" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n3a)"/><rect class="node-purple" x="460" y="85" width="165" height="70" rx="10"/><text class="lbl" x="542" y="110">loaded every</text><text class="lbl" x="542" y="128">session start</text><text class="lbl-sm" x="542" y="146">@imports pull in more</text></svg><div class="diag-cap">চিত্র: প্রযোজ্য প্রতিটা খাতা session শুরুতে মিশে যায়; দলেরটা commit করো, নিজেরটা নিজের কাছে। · Every book in scope merges at session start.</div></div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ খাতায় যা রাখা নয়</div>প্রতিটা model-এর তালিকা (code পড়েই জানে), "পরিষ্কার code লেখো" জাতীয় সাধারণ উপদেশ, পাঁচশো লাইনের রচনা, সবকিছু bold।<br><em>What the code already shows, generic advice, essays, bold everywhere.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ আজিজের লাল কালি</div>যে command আন্দাজ করা যায় না, অপ্রকাশ্য নিয়ম ("Decimal, কখনো float নয়"), মাইন ("legacy_billing ফ্রোজেন")। ~২০০ লাইনের নিচে; বেশি হলে @docs/… import। Team lead হলে repo-র খাতা একটা নীতিমালা — PR-এ review করো।<br><em>Unguessable commands, non-obvious rules, landmines; short; imports for the rest.</em></div></div>

<p class="verse">চট্টগ্রামে পৌঁছে, ভোরের আলোয় খাতা বন্ধ করতে করতে আজিজ বললেন — ফেরাউন মূসা (আ.)-কে জিজ্ঞেস করেছিল আগের প্রজন্মের কথা। তিনি বললেন: "এর জ্ঞান আমার রবের কাছে, এক কিতাবে লেখা; আমার রব ভুল করেন না, ভোলেনও না" (সূরা ত্ব-হা ২০:৫২, ভাবানুবাদ)। ভুল না করা, না ভোলা — সে তো শুধু আল্লাহর গুণ। আমরা মানুষ, আমরা ভুলি। তাই আমরা লিখি।</p>
<p class="en">Arriving in Chattogram, closing the book in the dawn light, Aziz says: Pharaoh asked Musa (peace be upon him) about the generations before. He said: "The knowledge thereof is with my Lord in a record. My Lord neither errs nor forgets" (20:52, Sahih International). Never erring, never forgetting — that belongs to Allah alone. We are human; we forget. So we write.</p>

<p>মনির (দরজা ২) শিখিয়েছেন কীভাবে বানাতে হয়; আজিজ শেখালেন কীভাবে পরের শিফটের কাছে জ্ঞান পৌঁছায়। Book 59-এর কারখানার খাতা (দরজা ২) আর স্মৃতি-স্থাপত্য (দরজা ২৭) import-চেইন আর path-scoped নিয়মের বিস্তারিত দেখায়। আর খাতাটা আসলে কোথায় বসে — system prompt-এর ভেতরে — সেটা দরজা ১৩ আর ২৮-এ দেখবে।</p>
<p class="en">Monir (Door 2) taught how to build; Aziz teaches how knowledge reaches the next shift. Book 59's workshop ledger (Door 2) and memory architecture (Door 27) detail import chains and path-scoped rules. Where the book really sits — inside the system prompt — you'll see at Doors 13 and 28.</p>

<div class="secret-box"><div class="label">দরজা ৩ — তালিসমান</div><div class="text">🚆 Model ভোলে, খাতা মনে রাখে — একই কথা দুবার শোধরাতে হলে লিখে রাখো।<br><small>নাম: <strong>CLAUDE.md</strong> — /init, /memory, স্তরবিন্যাস (managed → user → project → local → subdir), @imports।</small></div></div>`,
  senior: {
    title: "Quick Guide — CLAUDE.md",
    body: `<p><strong>Put in:</strong> exact commands (run one test, lint, types), non-obvious conventions, landmines, where logic lives.</p>
<p><strong>Keep out:</strong> what Claude can read from code in seconds, generic advice, long essays. Stay short; use @imports for detail.</p>
<p><strong>Levels:</strong> managed · ~/.claude/CLAUDE.md (personal) · ./CLAUDE.md (team, committed) · CLAUDE.local.md (personal, gitignored) · subfolder files.</p>
<p><strong>Ritual:</strong> every time you correct Claude twice, ask it to add the rule to CLAUDE.md. The file becomes your team's living onboarding guide.</p>`
  }
});


// ── DOOR 4 · অপারেশন থিয়েটারের গণনা — The Theatre Count ──
doors.push({
  num: 4,
  icon: "🩺",
  color: "#34d399",
  name: "অপারেশন থিয়েটারের গণনা",
  subtitle: "The Theatre Count",
  tech: "Permissions, modes, checkpoints and rewind — trust that is specific and reversible",
  spirit: "তাহলুকা — নিজ হাতে নিজেকে ধ্বংসে ঠেলে দিয়ো না",
  secret: "বিশ্বাস দাও নির্দিষ্টভাবে, ফেরতযোগ্যভাবে — কাটার আগে সম্মতি, কাটার পরে গণনা।",
  recall: {
    q: "চারটা permission mode কী কী, কোনটা কখন? Rewind কী ফেরাতে পারে না? আর কোন settings file commit করবে, কোনটা gitignore?",
    qen: "What are the four permission modes and when is each used? What can rewind not undo? Which settings file do you commit and which do you gitignore?",
    a: "default (শেখা, অচেনা repo), acceptEdits (শেষে diff দেখবে), plan (শুধু পড়া-পরিকল্পনা), bypassPermissions (শুধু secret-হীন disposable container/VM-এ)। Rewind শুধু Claude-এর file edit ফেরায় — bash-এর পার্শ্বপ্রতিক্রিয়া (মুছে ফেলা database) বা remote কাজ নয়; git-এর বিকল্প নয়। .claude/settings.json commit, .claude/settings.local.json gitignore।",
    aen: "default (learning, unfamiliar repos), acceptEdits (you'll review the diff at the end), plan (read-only planning), bypassPermissions (only in a disposable container/VM with no secrets). Rewind restores Claude's file edits only — not bash side effects or remote actions — and does not replace git. Commit .claude/settings.json; gitignore .claude/settings.local.json."
  },
  story: `<p class="scene-setting">মিটফোর্ড হাসপাতালের অপারেশন থিয়েটার, সকাল সাতটা। জীবাণুনাশকের তীব্র গন্ধ, মনিটরের একঘেয়ে বিপ-বিপ, ট্রে-তে সাজানো ইস্পাতের যন্ত্রের ঠান্ডা ঝিলিক। মাস্ক খুলতেই সিস্টার রোকসানার নাকের ওপর দুটো লালচে দাগ — বাইশ বছরের মাস্কের দাগ। প্রতিটা অপারেশনের আগে তিনি জোরে গোনেন: গজ কতটা, সুই কতটা, কাঁচি কতটা। শেষে আবার গোনেন। দুই সংখ্যা না মিললে কেউ সেলাই করতে পারে না।</p>
<p class="scene-setting en">The operating theatre at Mitford Hospital, seven in the morning. The sharp smell of antiseptic, the steady beep of the monitor, the cold glint of steel instruments on the tray. When Sister Roksana lowers her mask, two reddish marks cross the bridge of her nose — twenty-two years of masks. Before every operation she counts aloud: how many swabs, how many needles, how many scissors. At the end she counts again. If the numbers don't match, no one closes.</p>

<div class="dialogue">তুমি বলো — আপা, প্রতিবার pytest চালানোর আগে Claude অনুমতি চায়, আমি ক্লান্ত। একটা flag পেয়েছি — --dangerously-skip-permissions। ওটা চালু করে দিই? রোকসানা মাস্কটা আবার তুললেন। বললেন — নামটাই বলে দিচ্ছে। আমিও একবার গণনা বাদ দিয়েছিলাম, শুধু একবার।</div>
<div class="dialogue en">You say: Apa, Claude asks permission every time before running pytest, I'm tired. I found a flag — --dangerously-skip-permissions. Shall I turn it on? Roksana raises her mask again. The name tells you. I skipped the count once too — only once.</div>

<p>তাঁর গল্প: নতুন নার্স, রাতের জরুরি অপারেশন, রক্তক্ষরণ, সবাই তাড়ায়। শেষের গণনা তিনি তাড়াতাড়ি সেরেছিলেন — "সব আছে"। ছিল না; একটা গজ রয়ে গিয়েছিল। দুই সপ্তাহ পরে রোগীর আবার অপারেশন। রোকসানা বললেন — সেদিন থেকে জানি, বিশ্বাস আর অন্ধতা আলাদা। রুটিন কাজে স্থায়ী অনুমতি থাকে — স্যালাইন লাগানো, প্রেশার মাপা। কাটার আগে সম্মতি লাগে। কিছু জিনিস সার্জনও একা পারেন না। আর প্রতিটা কাজের আগে-পরে গণনা।</p>
<p class="en">Her story: a new nurse, a night emergency, bleeding, everyone rushing. She hurried the final count — "all present". It wasn't; a swab had been left inside. Two weeks later the patient needed another operation. Since that day I know trust and blindness are different. Routine work has standing orders — a saline drip, a pressure reading. Cutting needs consent. Some things even the surgeon cannot do alone. And before and after every job, the count.</p>

<table class="kv-table"><tr><th>Mode (Shift+Tab)</th><th>আচরণ</th><th>কখন</th></tr><tr><td class="hl">default</td><td>edit আর বেশিরভাগ command-এর আগে জিজ্ঞেস করে</td><td>শেখার সময়, অচেনা repo</td></tr><tr><td class="hl">acceptEdits</td><td>file edit স্বয়ংক্রিয়; command-এ এখনো জিজ্ঞেস</td><td>শেষে পুরো diff তুমি দেখবে</td></tr><tr><td class="hl">plan</td><td>শুধু পড়া আর পরিকল্পনা (দরজা ২)</td><td>loop-এর দ্বিতীয় ধাপ</td></tr><tr><td class="hl">bypassPermissions</td><td>কিছুই জিজ্ঞেস করে না</td><td><strong>শুধু</strong> secret-হীন disposable container/VM-এ</td></tr></table>

<div class="code-block"># .claude/settings.json — দলের স্থায়ী নির্দেশ (commit করো)
{ "permissions": {
    "allow": ["Bash(pytest:*)", "Bash(ruff check:*)", "Bash(git status)", "Bash(git diff:*)"],
    "ask":   ["Bash(git push:*)"],
    "deny":  ["Read(./.env)", "Read(./.env.*)", "Read(./secrets/**)", "Bash(rm -rf:*)", "Bash(curl:*)"]
} }
# deny সবসময় allow-কে হারায়।  .claude/settings.local.json = তোমার ব্যক্তিগত (gitignore)
# অগ্রাধিকার: managed policy → CLI flags → settings.local.json → settings.json → ~/.claude/settings.json

# গণনা — আগে ও পরে
git switch -c feature/csv-export     # কাজের আগে branch; বড় বদলের আগে commit
/rewind                              # বা Esc Esc — Claude-এর edit আগের checkpoint-এ
git diff                             # কাজের পরে তোমার আসল গণনা
/permissions                         # এই মুহূর্তে কী কী চালু আছে দেখো</div>

<div class="diagram"><div class="diag-title">Standing orders, consent, never · স্থায়ী নির্দেশ, সম্মতি, কখনো না</div><svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg"><rect class="node-leaf" x="15" y="30" width="190" height="110" rx="12"/><text class="lbl" x="110" y="54">ALLOW</text><text class="lbl-sm" x="110" y="76">standing orders</text><text class="lbl-sm" x="110" y="94">pytest · ruff · git diff</text><text class="lbl-sm" x="110" y="112">routine, safe, frequent</text><rect class="node" x="225" y="30" width="190" height="110" rx="12"/><text class="lbl" x="320" y="54">ASK</text><text class="lbl-sm" x="320" y="76">consent before cutting</text><text class="lbl-sm" x="320" y="94">edits (default) · git push</text><text class="lbl-sm" x="320" y="112">everything unlisted</text><rect class="node-hot" x="435" y="30" width="190" height="110" rx="12"/><text class="lbl" x="530" y="54">DENY</text><text class="lbl-sm" x="530" y="76">never, even if asked</text><text class="lbl-sm" x="530" y="94">.env · secrets · rm -rf</text><text class="lbl-sm" x="530" y="112">curl | sh</text><text class="lbl-amber" x="320" y="172">count before and after: branch · checkpoint · git diff</text><text class="lbl-sm" x="320" y="195">autonomy grows only with isolation — bypass lives in a sandbox</text></svg><div class="diag-cap">চিত্র: রুটিনে স্থায়ী অনুমতি, বাকিতে সম্মতি, কিছুতে কখনো না — আর আগে-পরে গণনা। · Allow the routine, ask for the rest, deny the dangerous, count before and after.</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>রোকসানার দুই সতর্কতা:</strong> ১) Checkpoint শুধু Claude-এর file edit মনে রাখে — bash-এর কাজ (মুছে ফেলা database) বা remote কাজ ফেরে না; git-এর বিকল্প নয়। ২) Prefix নিয়ম সুবিধা, দুর্গ নয় — চতুর command string match এড়াতে পারে। কেন আসল দেয়াল harness-এ আর sandbox-এ বসে, সেটা দরজা ১৭-এর জরিনা দেখাবেন।<br><em>Checkpoints track file edits only; prefix rules are convenience, not a fortress — see Door 17.</em></div></div>

<p class="verse">অপারেশন শেষে শেষ গণনা মিলল। রোকসানা গ্লাভস খুলে হাত ধুতে ধুতে বললেন — কুরআনে একটা আয়াত আছে, ডিউটিতে প্রায়ই মনে পড়ে: "আর নিজেদের হাতে নিজেদের ধ্বংসের দিকে ঠেলে দিয়ো না, আর সৎকর্ম করো" (সূরা বাকারা ২:১৯৫, ভাবানুবাদ)। Bypass-এর flag নিজের হাতে চালু করা মানে গণনা ছাড়া সেলাই। যেখানে ঝুঁকি নিতেই হবে, সেখানে আগে জায়গাটা আলাদা করো — প্রশিক্ষণের ডামিতে, আসল রোগীতে নয়।</p>
<p class="en">After the operation the final count matches. Washing her hands, Roksana says: A verse comes to me often on duty: "And do not throw yourselves with your own hands into destruction, and do good" (2:195, Sahih International). Switching on bypass with your own hand is closing without the count. Where risk must be taken, isolate the place first — on the training dummy, not the patient.</p>

<p>আজিজ (দরজা ৩) খাতায় লিখে রাখেন; রোকসানা ঠিক করেন খাতার বাইরে কী করা যাবে। Book 59-এর তালার কারিগর (দরজা ৬) আর সাব-রেজিস্ট্রারের সিঁড়ি (দরজা ২৩) permission আর settings-এর অগ্রাধিকার বিস্তারিত দেখায়।</p>
<p class="en">Aziz (Door 3) writes in the book; Roksana decides what may be done outside it. Book 59's locksmith (Door 6) and sub-registrar's ladder (Door 23) detail permissions and settings precedence.</p>

<div class="secret-box"><div class="label">দরজা ৪ — তালিসমান</div><div class="text">🩺 বিশ্বাস দাও নির্দিষ্টভাবে, ফেরতযোগ্যভাবে — কাটার আগে সম্মতি, কাটার পরে গণনা।<br><small>নাম: <strong>permissions</strong> (allow / ask / deny), <strong>modes</strong>, settings precedence, <strong>checkpoints &amp; /rewind</strong>, git safety।</small></div></div>`,
  senior: {
    title: "Quick Guide — Permissions & Safety",
    body: `<p><strong>Modes:</strong> default → acceptEdits → plan (Shift+Tab); bypassPermissions only in a disposable, secret-free sandbox.</p>
<p><strong>Rules:</strong> allow safe frequent commands, deny secrets and destructive commands, ask for everything else; deny beats allow.</p>
<p><strong>Files:</strong> .claude/settings.json (team, commit) · .claude/settings.local.json (personal, gitignore) · ~/.claude/settings.json (defaults) · managed policy on top.</p>
<p><strong>Undo:</strong> branch first, commit often, /rewind for Claude's edits, git diff as your final count. Read every rm, push, curl and database command before approving.</p>`
  }
});
