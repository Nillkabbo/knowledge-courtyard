// ════════════════════════════════════════
// Book 60 · The City of Canals — Doors 1-5
// Every command verified against the GNU Bash
// manual and The Art of Command Line
// ════════════════════════════════════════
const doors = [];

// ── DOOR 1 · কালু মিয়ার ঘাট — Kalu Mia's Ghat ──
doors.push({
  num: 1,
  icon: "🛶",
  color: "#38bdf8",
  name: "কালু মিয়ার ঘাট",
  subtitle: "Kalu Mia's Ghat",
  tech: "The Terminal · First Commands · man/apropos",
  spirit: "তালাক — খোঁজাই জ্ঞানের প্রথম ধাপ",
  secret: "নৌকা চেনার আগে ঘাট চেনো — terminal খোলো, man খোলো; যে জানে কোথায় উত্তর আছে, সে-ই নগরীর মানুষ।",
  recall: {
    q: "একটা কমান্ডের কী কী করে জানতে চাও, নামটাও মনে নেই পুরো। ঘাটের দুই হাতিয়ার কী?",
    qen: "You want to know what a command does — and you can't even recall its full name. The ghat's two tools?",
    a: "man <নাম> — পুরো নির্দেশিকা (ক, খ, গ বিভাগে ভাগ করা), q দিয়ে বন্ধ। আর নাম মনে না থাকলে apropos <বিষয়> — বিষয় ধরে ম্যানুয়াল-পাতার খোঁজ। প্রায় সব কমান্ডের --help পতাকাও আছে — এক পাতার সারমর্ম।",
    aen: "man <name> — the full manual (divided into sections), q to quit. If the name escapes you: apropos <topic> searches manual pages by subject. Nearly every command also takes a --help flag — the one-page summary."
  },
  story: `<p class="scene-setting">সদরঘাট সকাল। নৌকার সারি, মাছের বাক্সের গন্ধ, চায়ের দোকানে কালু মিয়ার আড়ত। কালু মিয়া এই ঘাটের জীবন্ত নির্দেশিকা — কোন নৌকা কোন খালে যায়, কোন মাঝি বিশ্বাসযোগ্য, কোথায় কাঁটা। নতুন কেউ এলে সবাই এক কথা বলে — ঘাটে নামলে আগে কালু মিয়াকে দেখো। সে কারু হাত ধরে চালায় না; শুধু বলে কোথায় কী আছে — আর খোঁজার পথ দেখায়। তুমি এই শহরে নতুন শাগরেদ; তোমার ঘাট terminal, আর কালু মিয়া man।</p>
<p class="scene-setting en">Sadarghat at dawn. Rows of boats, the smell of fish crates, Kalu mia's tea-stall counter at the ghat's head. Kalu mia is this ghat's living directory — which boat takes which canal, which boatman can be trusted, where the snags lie. When someone new arrives, everyone says the same — set foot on the ghat, see Kalu mia first. He never steers anyone's hand; he only says where things are — and shows the way to search. You are the new apprentice in this city; your ghat is the terminal, and Kalu mia is man.</p>

<div class="dialogue">তুমি কালু মিয়ার দোকানে বসলে। উনি চায়ের কাপ এগিয়ে তিনটা জিনিস টেবিলে রাখলেন। প্রথমটা — ঘাটের ম্যাপ: Terminal (macOS-এ Terminal.app, Linux-এ GNOME Terminal বা Konsole, Windows-এ Windows Terminal + WSL) খুললেই তোমার সামনে prompt — ঝিকমিক করা সেই সারি, যেটা বলে নদী প্রস্তুত। দ্বিতীয়টা — প্রথম নৌকাগুলো: pwd (কোথায় দাঁড়িয়ে), ls (চারপাশে কী আছে), cd (কোথায় যাবে) — তিনটাই ঘাট-চেনার নৌকা। তৃতীয়টা — খোঁজার হাতিয়ার: man, apropos, --help। বললেন — শাগরেদ, নদী শেখা মানে উত্তর মুখস্থ রাখা নয়; উত্তর কোথায় থাকে জানা।</div>
<div class="dialogue en">You sit at Kalu mia's stall. He slides a tea across and lays three things on the table. First — the ghat's map: open Terminal (Terminal.app on macOS, GNOME Terminal or Konsole on Linux, Windows Terminal + WSL on Windows) and before you sits the prompt — that blinking line that says the river is ready. Second — the first boats: pwd (where am I standing), ls (what is around), cd (where to go) — the three boats of knowing the ghat. Third — the searching tools: man, apropos, --help. He says — apprentice, learning the river is not memorizing answers; it is knowing where answers live.</div>

<div class="code-block"># ঘাটে পা — prompt-এর পরে এগুলো লিখো:
pwd            # কোথায় দাঁড়িয়ে আছি? (print working directory)
ls             # এই ঘাটে কী কী আছে?
ls -la         # লুকানো ফাইলসহ (-a), বিস্তারিত (-l)
cd ~/projects  # যাও — ~ মানে নিজের ঘর (home)
cd ..          # এক ধাপ উপরে; cd - আগের জায়গায় ফেরো

# কালু মিয়ার দোকান — জিজ্ঞাসার তিন নৌকা:
man ls         # ls-এর পুরো নির্দেশিকা; স্ক্রল করো, q দিয়ে বন্ধ
apropos copy   # "copy" বিষয়ের কোন কোন কমান্ড আছে?
ls --help      # এক পাতার সারমর্ম — দ্রুত ঝালাই

# man-পাতা পড়ার ম্যানের:
# নাম-সারমর্ম (NAME) উপরে, উদাহরণ (EXAMPLES) নিচে —
# তাড়াহুড়োয় সোজা উদাহরণে নামো</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>কালু মিয়ার সতর্কতা:</strong> ঘাট থেকে নদীতে পা দেওয়ার আগে জেনে নাও — এই নগরীর লেখা পানির ভাষায়, টেক্সটে। যা দেখতে পাও না, তা নিয়ে কাজ করো না; আর প্রম্পটে যা লেখা, তার প্রতিটা অক্ষর গোনা — একটা স্পেসের তফাতে নৌকা অন্য খালে। macOS-এর টার্মিনাল এখন zsh, সার্ভারেরটা হয়তো bash — ঘাট একই, নদী প্রায় একই, Book ৫৯-এর মতোই এখানেও সংস্করণ দেখে নাও।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Kalu mia's caution:</strong> before stepping from ghat into river, know — this city writes in the water's language, text. Do not work with what you cannot see; and count every character at the prompt — one space's difference sends the boat down another canal. The macOS terminal is now zsh, the server's likely bash — the ghat is the same, the river nearly the same; as in Book 59, check your version.</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">pwd</div><div class="sc-label">কোথায় আছি — ঘাট-চিহ্ন</div></div>
<div class="stat-card"><div class="sc-num">ls</div><div class="sc-label">চারপাশ — ঘাটের মালামাল</div></div>
<div class="stat-card"><div class="sc-num">cd</div><div class="sc-label">যাত্রা — এক ঘাট থেকে আরেক ঘাট</div></div>
</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>কালু মিয়ার টিপ:</strong> কমান্ড লেখার সময় Tab চাপো — নাম পুরো হয়ে যায়, দুইবার চাপলে বিকল্প দেখায়। আর তীর-চিহ্ন ↑ ↓ দিয়ে আগের কমান্ড ফিরে আসে — ঘাটে কেউ একই কথা দুইবার টাইপ করে না (বিস্তারিত দরজা ৭-এ)।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Kalu mia's tip:</strong> press Tab while typing a command — the name completes; twice shows alternatives. And the arrows ↑ ↓ bring back earlier commands — nobody at the ghat types the same thing twice (more in Door 7).</div></div>

<p class="verse">প্রথম নাযিল-হওয়া শব্দটা ছিল ইকরা — পড়ো। কালু মিয়ার ঘাটের নিয়মও তাই: পড়া শেখার আগে পড়া জানা — man-এর পাতা খুলে না পড়ে নদীতে নামা অজ্ঞতার দৌড়। "ফলাফল হিসাব করে যারা করে, তারা মুক্তি পায়" — জেনে চালাও, অন্ধ কপি নয়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🛶 উত্তর মুখস্থ নয় — man-এ ঠিকানা জানো; pwd·ls·cd দিয়ে ঘাট চেনো, Tab-এ নাম পূরণ করো।<br>কারণ: নদী শত নৌকার, কিন্তু খোঁজার ঘাট একটাই — যে খোঁজে, সে বাঁচে।</div></div>`,
  senior: {
    title: "প্রথম সপ্তাহের ঘাট-অভ্যাস — First-Week Ghat Habits",
    body: `<ul class="checklist">
<li>প্রতিদিন terminal খুলে <strong>pwd → ls → cd</strong> দিয়ে নিজের প্রজেক্ট ফোল্ডারে যাও — মাউস ছাড়া।</li>
<li>অজানা কমান্ড দেখলে সঙ্গে সঙ্গে <strong>man</strong> বা <strong>--help</strong> — অভ্যাসটা এই দরজায় বসাও।</li>
<li>নাম ভুলে গেলে <strong>apropos</strong>; ম্যান-পাতায় সোজা EXAMPLES-এ নামো।</li>
<li><strong>Tab</strong> পূরণ আর <strong>↑</strong> ইতিহাস — আঙুলের অভ্যাস বানাও, চোখ নয়।</li>
<li>Book ৫৯-এর ঘাটে ফিরে দেখো — claude-ও একটা নৌকা, একই নদীতে।</li>
</ul>`
  }
});

// ── DOOR 2 · নসরত মিস্ত্রির খাল — Nasrat's Canal ──
doors.push({
  num: 2,
  icon: "🏞️",
  color: "#7dd3fc",
  name: "নসরত মিস্ত্রির খাল",
  subtitle: "Nasrat's Canal",
  tech: "Pipes · Redirection · stdin/stdout/stderr",
  spirit: "মায়েয়ার — প্রবাহে সংযোগ",
  secret: "নৌকা একা বাজার হয় না — খাল বাঁধো: এক কমান্ডের নিঃশ্বাস পরেরটার পানি। | মানে stdout, আর 2>&1 মানে ভুল-ধারাও এক খালে।",
  recall: {
    q: "এক কমান্ডের আউটপুট আরেকটার ইনপুট হবে, আবার ভুলগুলোও একই নদীতে রেখে ফাইলে জমাতে চাও। দুই চিহ্ন কী?",
    qen: "One command's output should feed another, and errors too should join the same stream into a file. The two notations?",
    a: " pipe: cmd1 | cmd2 — প্রথমটার stdout দ্বিতীয়টার stdin-এ। আর ফাইলে দুই ধারা একসাথে: cmd > file 2>&1 বা bash-এ &>file (append: >>file 2>&1 বা &>>file)। খেয়াল: > মানে পুরোনো পানি ফেলে নতুন, >> মানে জোড়া; আর 2>&1 সবসময় >-এর পরে আসে।",
    aen: "The pipe: cmd1 | cmd2 — the first's stdout becomes the second's stdin. And both streams into one file: cmd > file 2>&1, or in bash &>file (append: >>file 2>&1 or &>>file). Note: > replaces the old water, >> joins it; and 2>&1 always comes after the >."
  },
  story: `<p class="scene-setting">নদী থেকে ধানখেতে পানি পৌঁছাতে নসরত মিস্ত্রির খাল লাগে। ভরা বর্ষায় তার কাজ দেখেছ? উজানের নদী থেকে বাঁধ কেটে পানি ধরে, খাল বেয়ে নামায় — এক খাল মাড়াই-ঘরে গেছে, সেখান থেকে আরেকটা খাল গুদামের চালায়, তারপর ডাঁইয়ে। প্রতিটা ঘর এক কাজ করে, আর পানি ঘর ছাড়ার মুখেই পরের খাল নেয়। এক দিন এক বড়লোক এসে বললেন — মিস্ত্রি, এত ঘর কেন? এক বিশাল ঘর বানাও, সব কাজ একসাথে। নসরত মিস্ত্রি হেসেছিলেন — তাহলে তো এক ঘর ভাঙলে সব থেমে যাবে, আর নতুন কাজ দিতে গেলে পুরো ঘর ভেঙে বানাতে হবে। ছোট ঘর, সংযোগ-খাল — এই নগরীর আইন।</p>
<p class="scene-setting en">To carry river water to the paddy, Nasrat the mistri cuts canals. Seen his work in full monsoon? He dams the upstream river, guides the water down his channels — one canal runs to the husking shed, from there another to the granary roof, then to the stack. Each shed does one job, and at the shed's outflow the next canal begins. One day a rich man came — mistri, why so many sheds? Build one vast shed, all work at once. Nasrat laughed — then one broken shed halts everything, and any new work means demolishing the whole house. Small sheds, connecting canals — this is the city's law.</p>

<div class="dialogue">তুমি খালের মাথায় দাঁড়িয়ে জিজ্ঞেস করলে — মিস্ত্রি, কমান্ডের পানি কোথা দিয়ে বহে? নসরত তিনটা নল দেখালেন। প্রতিটা নৌকার — মানে প্রতিটা প্রোগ্রামের — তিনটা দরজা জন্ম থেকেই আছে: stdin (পানি ঢোকে, সাধারণত তোমার কীবোর্ড), stdout (ফল বেরোয়, সাধারণত পর্দা), stderr (ভুল-দুঃখবার্তা বেরোয়, আলাদা নল)। খাল বাঁধার চিহ্নগুলো শুনো: | মানে এক নৌকার stdout পরের নৌকার stdin-এ; > মানে পানি ফাইল-পুকুরে ঢালো (পুরোনোটা মুছে), >> মানে জোড়া দাও; 2> মানে শুধু ভুল-নল ঘুরিয়ে দাও; 2>&1 মানে ভুল-নল সরিয়ে এনে ফল-নলের পিছনে লাগাও; bash-এ &> দুটোই একসাথে। আর < মানে ফাইল থেকে পানি ঢালো stdin-এ।</div>
<div class="dialogue en">Standing at the canal's head you ask — mistri, through what does a command's water flow? Nasrat shows three pipes. Every boat — every program — is born with three doors: stdin (water in, usually your keyboard), stdout (results out, usually the screen), stderr (errors and bad news out, a separate pipe). Hear the canal-building signs: | sends one boat's stdout into the next boat's stdin; > pours water into the file-pond (wiping the old), >> joins it; 2> turns only the error pipe; 2>&1 reroutes the error pipe in behind the result pipe; in bash &> does both. And < pours a file into stdin.</div>

<div class="code-block"># তিন নল — প্রতিটা প্রোগ্রামের জন্মগত দরজা:
#   stdin  ← পানি ঢোকে (কীবোর্ড/ফাইল)
#   stdout ← ফল (পর্দা/খাল/ফাইল)
#   stderr ← ভুল (আলাদা নল)

# খাল বাঁধো — এক নৌকার নিঃশ্বাস পরেরটার পানি:
cat access.log | grep "error" | sort | uniq -c
#     পড়ো → ছাঁকো → সাজাও → গুনে দেখাও

# ফাইল-পুকুরে ঢালো:
ls > list.txt          # পুরোনো পানি বদলে যায়
ls >> list.txt         # জোড়া দেয়
command 2> errors.txt  # শুধু ভুল-নল আলাদা ফাইলে
command > all.log 2>&1 # ফল+ভুল এক খালে (ক্রম গুরুত্বপূর্ণ!)
command &> all.log     # bash-এর এক-চিহ্ন সংক্ষেপ
command &>> all.log    # দুটোই, জোড়া দিয়ে

# নল-নালা জোড়া — process substitution:
diff <(ls dir1) <(ls dir2)   # দুই ঘাটের মাল মুখোমুখি
#   <(...) — চলমান পানিকে ফাইলবশে ধরে

# পানি হারালে নদীতে ফেরো:
somecmd > /dev/null 2>&1    # ফল চাই না — নিষ্কাশন-খালে

# দুই ঘাটে একসাথে — পর্দায়ও, ফাইলেও:
make 2>&1 | tee build.log</div>

<div class="diagram">
<div class="diag-title">নসরতের খাল-নকশা — The Canal Blueprint</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#7dd3fc"/></marker>
</defs>
<rect class="node" x="15" y="90" width="120" height="46" rx="10"/><text class="lbl" x="75" y="108">cat</text><text class="lbl-sm" x="75" y="124">পড়ার নৌকা</text>
<rect class="node" x="220" y="90" width="120" height="46" rx="10"/><text class="lbl" x="280" y="108">grep</text><text class="lbl-sm" x="280" y="124">ছাঁকনি</text>
<rect class="node" x="425" y="90" width="120" height="46" rx="10"/><text class="lbl" x="485" y="108">sort · uniq</text><text class="lbl-sm" x="485" y="124">সাজানো ও গণনা</text>
<line x1="135" y1="113" x2="215" y2="113" stroke="#7dd3fc" stroke-width="3" fill="none" marker-end="url(#arrowW)"/>
<line x1="340" y1="113" x2="420" y2="113" stroke="#7dd3fc" stroke-width="3" fill="none" marker-end="url(#arrowW)"/>
<text class="lbl-cyan" x="175" y="100">| stdout→stdin</text>
<text class="lbl-cyan" x="380" y="100">| আবার</text>
<rect class="cell-cyan" x="15" y="15" width="250" height="30" rx="8"/><text class="lbl-sm" x="140" y="34">উপরের দরজা: stdin ← কীবোর্ড / ফাইল (&lt;)</text>
<rect class="cell-hot" x="285" y="15" width="260" height="30" rx="8"/><text class="lbl-sm" x="415" y="34">নিচের দরজা: stdout / stderr → পর্দা, খাল, ফাইল</text>
<rect class="cell" x="15" y="180" width="530" height="40" rx="8"/><text class="lbl-sm" x="280" y="196">ভুল-নল আলাদা জন্মায় — 2&gt; একা ঘুরে যায়, 2&gt;&amp;1 ফল-নলের সাথে জুড়ে যায়, &amp;&gt; দুটোই এক পুকুরে</text>
</svg>
<div class="diag-cap">প্রতিটা প্রোগ্রাম তিন-দরজা নিয়ে জন্মায়; খাল (|) শুধু stdout বহন করে — ভুল-নল ধরতে চাইলে আগে 2&gt;&amp;1।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নসরতের সবচেয়ে বড় সতর্কতা — ক্রম:</strong> 2>&1 > file লিখলে ভুলগুলো পর্দায় পড়ে, ফাইলে নয়! কারণ shell বাঁ থেকে ডানে পড়ে — 2>&1 তখনো পুরোনো stdout (পর্দা)-কে দেখাচ্ছিল। সঠিক ক্রম: > file 2>&1। আর | খাল বহন করে শুধু stdout — ভুল-নল খালে ঢুকতে চাইলে আগেই 2>&1 লাগাও: cmd 2>&1 | grep …</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Nasrat's gravest caution — order:</strong> writing 2>&1 > file drops the errors on the screen, not the file! The shell reads left to right — at that moment 2>&1 still pointed at the old stdout (the screen). Correct order: > file 2>&1. And the | canal carries only stdout — to bring the error pipe into the canal, attach 2>&1 first: cmd 2>&1 | grep …</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ বস্তা-পিঠে ব্যবসায়ী</div>কমান্ড চালিয়ে পর্দা থেকে চোখের পাতায় কপি করে · একই কাজ বার বার টাইপ করে · ভুল-বার্তা হারিয়ে যায় স্ক্রলের নিচে · এক বিশাল কমান্ডে সব কাজ ঢুকিয়ে ভাঙায়</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ খাল-কারিগর</div>ছোট ধার পরের ধারে জোড়ে: cat | grep | sort · ফল জমায় >> দিয়ে, ভুল আলাদা 2> দিয়ে · /dev/null-এ ফেলে শব্দ কমায় · tee দিয়ে পর্দা-ফাইল দুই ঘাটে একসাথে</div>
</div>

<p class="verse">নদী মায়ের সন্তানরা জানে — পানি একা থাকলে পোয়া নষ্ট, সংযোগ পেলে ফসল। "পানি থেকে সৃষ্টি করেছি সব প্রাণকে" (কুরআন ২১:৩০) — প্রবাহই জীবনের শর্ত; নল কেটে রাখলে সেই প্রাণ শুকিয়ে যায়। কমান্ডের জগতেও বরকত সংযোগে — একটার নিঃশ্বাস আরেকটার প্রাণ।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🏞️ তিন নল জন্মগত — stdin·stdout·stderr; | খাল বাঁধো, > পুকুর খোলো, 2>&1 ভুল-নল জোড়ো (ক্রম মনে রেখে!)।<br>কারণ: এক ঘরে সব কাজ নয় — ছোট ঘর, সংযোগ-খাল; এক ঘর ভাঙলে নগরী থামে না।</div></div>`,
  senior: {
    title: "খাল-বাঁধার খাতা — The Canal Builder's Notes",
    body: `<ul class="checklist">
<li>প্রতিদিন অন্তত একটা <strong>তিন-ধাপের খাল</strong> চালাও: cat … | grep … | sort | uniq -c — লগ দেখা, ফাইল গোনার মূল অভ্যাস।</li>
<li>ফাইলে জমালে ভাবো: <strong>&gt; না &gt;&gt;?</strong> পুরোনো পানি রাখতে চাইলে অবশ্যই &gt;&gt;।</li>
<li>ভুল আলাদা রাখো: <strong>2&gt; errors.txt</strong> — সফল ফল আর ব্যর্থ খবর এক পাতায় গুলিয়ে ফেলো না।</li>
<li>শব্দ দূর করো: <strong>&gt; /dev/null 2&gt;&amp;1</strong> — যে কমান্ডের ফল দরকারই নেই।</li>
<li>দুই ঘাটে একসাথে: <strong>tee</strong> — পর্দায় দেখো, ফাইলেও রাখো।</li>
<li>মনে রেখো Book ৫৯-এর হুক-চুক্তি (stdin-এ JSON, stdout-এ উত্তর) — সে এই একই নসরতের খালের পানি।</li>
</ul>`
  }
});

// ── DOOR 3 · মুন্সীর ভাষা — The Munshi's Language ──
doors.push({
  num: 3,
  icon: "📜",
  color: "#a5b4fc",
  name: "মুন্সীর ভাষা",
  subtitle: "The Munshi's Language",
  tech: "Expansions · Quoting · $-vars · Globs · Braces",
  spirit: "বায়ান — স্পষ্ট বাণী, স্পষ্ট প্রবাহ",
  secret: "shell তোমার লেখা হুবহু চালায় না — আগে নিজের ভাষায় অনুবাদ করে: চার স্তরের expansion; আর উদ্ধৃতি-চিহ্ন মানে জলাঞ্জলি-বাক্স — ভেতরের প্রতিটা অক্ষর পানি থেকে বাঁচে।",
  recall: {
    q: "echo $USER-এর মতো লাইনে shell আসলে কী করে? আর কেন \"$var\" লিখতে হয় খালি $var নয় — স্পেসসহ ফাইলনামে?",
    qen: "What does the shell actually do with a line like echo $USER? And why must \"$var\" be quoted, not bare $var, for filenames with spaces?",
    a: "কমান্ড চালানোর আগে shell স্তরে স্তরে লেখাটা বদলায়: brace ({a,b}) → tilde (~) → চলক/parameter (\${...}, \$var) → arithmetic \$((..)) → command substitution \$(..) → word split → glob (*)। এরপর কমান্ড পায়। খালি \$var-এ word splitting আর glob চলে — \"my file.txt\" ভেঙে দুই টুকরো হয়; উদ্ধৃতিতে (\"\$var\") ভাঙা বন্ধ, ভেতরের \$ বসে, এক শব্দ থাকে। নিয়ম: চলক সবসময় \"দুই উদ্ধৃতিতে\"।",
    aen: "Before running, the shell rewrites your line layer by layer: brace ({a,b}) → tilde (~) → parameter (\${...}, \$var) → arithmetic \$((..)) → command substitution \$(..) → word splitting → glob (*). Only then does the command see it. Bare \$var undergoes word splitting and globbing — \"my file.txt\" shatters into two pieces; quoting (\"\$var\") stops the splitting, expands the \$ inside, keeps one word. Rule: always double-quote variables."
  },
  story: `<p class="scene-setting">নগরীর কাছারিখানায় মুন্সী আবদুল করিম বসেন — দলিল লেখার আগে সবাই তাঁর কাছেই যায়। তাঁর একটাই নিয়ম বিখ্যাত: আমি যা শুনি, হুবহু লিখি না; আগে অনুবাদ করি। ব্যবসায়ী বলেন — "কাঠের বস্তা" — মুন্সী লেখেন বস্তার সংখ্যা, দাম, ওজন। কিন্তু একদিন বিপদ হলো: এক মক্কেল বললেন "মালপোড়া রসুন না পেঁয়াজ সহ" — মুন্সী নিজের মতো অনুবাদ করে লিখে ফেললেন, দুই পক্ষের বোঝাপড়া ভিন্ন দিকে গেল, মামলা লাগল। সেদিনই তিনি আইন বাঁধলেন: যে শব্দ হুবহু যেতে হবে, সে যাবে <strong>উদ্ধৃতির বাক্সে</strong> — বাক্সের ভেতরের অক্ষরে আমার কলম নয়, মক্কেলের মুখ চলবে।</p>
<p class="scene-setting en">At the city registry sits munshi Abdul Karim — everyone comes to him before a deed is written. His one famous rule: I do not write what I hear verbatim; I translate first. A merchant says — "a sack of timber" — the munshi writes the count, the price, the weight. But one day came trouble: a client said "malpora with garlic not onion" — the munshi translated in his own way, the two sides read it differently, a suit followed. That day he bound a law: whatever word must pass untouched travels <strong>inside a quotation box</strong> — inside the box, not my pen but the client's mouth governs.</p>

<div class="dialogue">তুমি কাছারিখানায় বসে মুন্সীর অনুবাদ-স্তরগুলো শিখলে। Shell-ও করিম মুন্সীর মতোই: Enter চাপার পরে কমান্ড পাওয়ার আগে তোমার লাইন সাত স্তরে বদলায় — ব্রেস {a,b} ফুলে দুই শব্দ; ~ হয় ঘরের ঠিকানা; \$var/\${var} বসে চলকের মান; \$((1+2)) গুনে ৩; \$(date) চলে গিয়ে তারিখ নিয়ে আসে; তারপর শব্দ-ভাঙা (খালি চলকে স্পেস ধরে টুকরো টুকরো); শেষে তারা-চিহ্ন * হয় ফাইলের তালিকা। বিপদটা পঞ্চম-ষষ্ঠ স্তরে — সেখানেই উদ্ধৃতির বাক্স লাগে: এক উদ্ধৃতি '…' মানে ভেতরে কিছুই বদলাবে না (হুবহু); দুই উদ্ধৃতি "…" মানে \$ আর \` বসবে, কিন্তু ভাঙা বন্ধ।</div>
<div class="dialogue en">Sitting at the registry you learned the munshi's translation layers. The shell is karim munshi too: after you press Enter, before the command sees anything, your line passes seven layers — braces {a,b} swell into two words; ~ becomes your home's address; \$var/\${var} takes the variable's value; \$((1+2)) counts to 3; \$(date) runs and brings back the date; then word-splitting (a bare variable's spaces shatter it); finally the star * becomes a list of files. The danger lives in the fifth and sixth layers — that is where the quotation box applies: single quotes '…' change nothing inside (verbatim); double quotes "…" let \$ and \` expand, but forbid the shattering.</div>

<div class="code-block"># মুন্সীর অনুবাদ-স্তর — লাইনের যাত্রা:
echo~/proja/b                    # ১) ~ → /home/you
echo ba/{tx,npy,md}              # ২) brace → ba/tx ba/npy ba/md
echo {1..3}                      #    → 1 2 3
NAME=report; echo "\$NAME.md"      # ৩) parameter → report.md
echo "\$(( 7 * 6 ))"               # ৪) arithmetic → 42
echo "আজ \$(date +%A)"             # ৫) command substitution → আজ শুক্রবার
ls *.py                          # ৬) glob → সব .py ফাইলের তালিকা

# চলকের কারিগরি — parameter expansion:
FILE=data.csv.gz
echo "\${FILE%.gz}"        # শেষ কেটে → data.csv
echo "\${FILE#*.}"          # শুরু কেটে → csv.gz
echo "\${FILE/.csv/.xlsx}" # বদলে → data.xlsx.gz
echo "\${#FILE}"           # লম্বা → 12
echo "\${PATH//: /
}"    # প্রতিটা : নতুন লাইনে

# ডিফল্ট ও পাহারা:
echo "\${USER:-অতিথি}"       # না থাকলে ডিফল্ট
echo "\${1:?ব্যবহার: \$0 ইনপুট}"  # না থাকলে থেমে যাও, কারণ দেখাও

# বাক্সের দুই ঘর — quoting:
echo 'আজ \$(date) হবে'   # এক-উদ্ধৃতি: হুবহু → আজ \$(date) হবে
echo "আজ \$(date) আছে"    # দুই-উদ্ধৃতি: \$ বসে → আজ শুক্রবার… আছে
F="my file.txt"; cat \$F      # ⚠️ ভেঙে দুই ফাইল খোঁজে!
cat "\$F"                    # ✅ এক ফাইল, পুরো নাম</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>করিম মুন্সীর মামলা-সতর্কতা:</strong> খালি চলক মানে মুন্সীর নিজের অনুবাদ — স্পেস ভাঙবে, * ফুলবে, খালি শব্দ মুছে যাবে। নিয়ম একটাই: <strong>চলক সবসময় "\$var" দুই-উদ্ধৃতিতে</strong>; হুবহু যেতে হলে এক-উদ্ধৃতি; আর ভেতরে উদ্ধৃতি লাগলে ঘর মিলিয়ে "…'…'…"। rm \$FILE লিখে জীবনে একবার ভুল হলে এই দরজাটা আর ভোলা যায় না।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The munshi's lawsuit caution:</strong> a bare variable is the munshi's own translation — spaces will shatter, * will swell, empty words vanish. One rule: <strong>always double-quote "\$var"</strong>; single quotes for verbatim; nest by matching rooms "…'…'…". After one real-life rm \$FILE accident, this door is never forgotten.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খোলা খাম</div>cat \$F — স্পেসে ভাঙে · rm \$DIR/* — খালি হলে / মুছতে ধাবে · '…\$var…' — চলকই বসে না, মান আসে না</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ বাক্সবন্দি দলিল</div>cat "\$F" — এক শব্দ, পুরো নাম · rm — "\$DIR"/* — খালি হলে কমান্ডই ব্যর্থ, নিরাপদ · "\${FILE%.gz}.txt" — কারিগরি কাটাকুটি বাক্সের ভেতরে</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">\${v:-d}</div><div class="sc-label">ডিফল্ট দাও</div></div>
<div class="stat-card"><div class="sc-num">\${v:?m}</div><div class="sc-label">না থাকলে থামাও</div></div>
<div class="stat-card"><div class="sc-num">\${f%.gz}</div><div class="sc-label">শেষ কাটো</div></div>
<div class="stat-card"><div class="sc-num">\${f#*.}</div><div class="sc-label">শুরু কাটো</div></div>
</div>

<p class="verse">কুরআনের ভাষায় স্পষ্ট বয়ান প্রশংসিত — "আমি এই কুরআনকে সহজ করেছি বোঝার জন্য" (৫৪:১৭)। মুন্সীর কলমও তাই: অনুবাদ যেন অর্থ নষ্ট না করে, আর যে শব্দ অলঙ্ঘনীয়, সে বাক্সবন্দি। Shell-এর জগতে অর্ধেক বিপদ অস্পষ্ট বায়ানের — উদ্ধৃতি না দেওয়া চলকের।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📜 Shell আগে অনুবাদ করে পরে চালায় — চলক সবসময় "\$var" বাক্সে; কাটাকুটি \${f%.gz}, ডিফল্ট \${v:-d}।<br>কারণ: অস্পষ্ট দলিল মামলার বীজ — বাক্সবন্দি শব্দ নগরীর আইন।</div></div>`,
  senior: {
    title: "মুন্সীর হাতের লেখা — The Munshi's Hand",
    body: `<ul class="checklist">
<li>আজ থেকে চলক লিখলেই আঙুল নিজে থেকে <strong>"\$var"</strong> বসাক — অভ্যাসটা এই দরজায় গাঁথো।</li>
<li>ফাইলের নাম কাটাকুটি: <strong>\${f%.ext}</strong> শেষ, <strong>\${f##*/}</strong> পথ থেকে নাম, <strong>\${f%/*}</strong> নাম থেকে পথ।</li>
<li>স্ক্রিপ্টের প্রথম দরজায় পাহারা: <strong>\${1:?ব্যবহার…}</strong> — আর্গুমেন্ট না দিলে সরাসরি কারণসহ থামা।</li>
<li>glob খেলার সময় মনে রেখো — * বসে <strong>স্তরের শেষে</strong>, উদ্ধৃতির ভেতরে নয়।</li>
<li>মিশ্র উদ্ধৃতি লাগলে ঘর মিলাও: <strong>"He said 'ok'"</strong> — বাক্সের ভেতরে বাক্স।</li>
</ul>`
  }
});

// ── DOOR 4 · জালিম মিয়ার জাল — Jalim Mia's Net ──
doors.push({
  num: 4,
  icon: "🎣",
  color: "#22d3ee",
  name: "জালিম মিয়ার জাল",
  subtitle: "Jalim Mia's Net",
  tech: "grep · sed · awk · find · xargs · sort/uniq · jq",
  spirit: "সাবর — ধৈর্য ধরে ছাঁকা, ঝালাই করা",
  secret: "নদীতে একশো মাছ, চাই পাঁচটা — জাল জালিম মিয়ার: grep ছাঁকনি, sed কাঁটা-কাটা, awk মাপ-কাটা, find ঘাট-খোঁজা; ছোট জাল জোড়া দাও, বিশাল জাল বোনো না।",
  recall: {
    q: "লগ-ফাইলে 'error' লাইনগুলো চাও, কোন লাইনে কতবার কী এসেছে গুনে সবচেয়ে ঘন পাঁচটা বের করতে হবে। কোন জাল-সারি টানবে?",
    qen: "From a log you want 'error' lines, then count what appeared how often, and surface the top five. Which net-chain do you pull?",
    a: "grep 'error' app.log | sort | uniq -c | sort -rn | head -5 — ছাঁকো → সাজাও → গুনো → উল্টো সাজাও (সবচেয়ে ঘন উপরে) → পাঁচটা নাও। এই পাঁচ-জাল সারিই টেক্সট-কারিগরের রোজকার প্রার্থনা; ভারী কাজে -rn, নাম ধরে খুঁজতে find . -name '*.log' -exec grep -l error {} + বা find … -print0 | xargs -0 grep …।",
    aen: "grep 'error' app.log | sort | uniq -c | sort -rn | head -5 — filter → sort → count → reverse-sort (densest on top) → take five. This five-net chain is the text-craftsman's daily prayer; add -rn for recursion, and find . -name '*.log' -exec grep -l error {} + or find … -print0 | xargs -0 grep … to hunt by name."
  },
  story: `<p class="scene-setting">জালিম মিয়া নদীর সবচেয়ে বিখ্যাত জেলে — কিন্তু তাঁর বিখ্যাত হওয়ার রহস্য জাল নয়, জালের <strong>সারি</strong>। ভোরে সে নদীতে পাঁচটা জাল পরপর ফেলে: প্রথম জালে বড় মাছ-কাঁকড়া আটকায় (ছাঁকনি), দ্বিতীয়ায় প্রজাতি ধরে ধরে সাজায়, তৃতীয়ায় প্রতি প্রজাতি গোনে, চতুর্থ জাল সবচেয়ে ভারী ঝুড়ি উপরে তোলে, পঞ্চম শুধু পাঁচটা ঝুড়ি নিয়ে বাজারে যায়। প্রতিবেশী জেলে একটাই বিশাল জাল বোনে — সব মাছ একসাথে — আর সন্ধ্যায় সে সাজাতে সাজাতে হারিয়ে ফেলে। জালিম মিয়া কিন্তু ফেরে দুপুরেই; তাঁর কথা: নদী থেকে যা চাও না-ই জালে আসুক — জাল ছোট, সারি লম্বা।</p>
<p class="scene-setting en">Jalim mia is the river's most famous fisherman — but the secret of his fame is not the net, it is the <strong>chain of nets</strong>. At dawn he lays five nets one after another: the first catches fish and crabs whole (the strainer), the second sorts by species, the third counts each species, the fourth lifts the heaviest baskets to the top, and the fifth takes only five baskets to market. His neighbour weaves one enormous net — everything at once — and by evening loses half of it just sorting. Jalim mia is home by noon; his saying: let the river send only what you want into the net — nets small, chain long.</p>

<div class="code-block"># জালিম মিয়ার পাঁচ-জাল সারি (রোজকার প্রার্থনা):
grep "error" app.log | sort | uniq -c | sort -rn | head -5
#    ছাঁকো         → সাজাও → গুনো    → ঘন-উপরে   → পাঁচটা

# grep — ছাঁকনির পাল্লা:
grep -i "error" f.log       # বড়-ছোট হাতরে অগ্রাহ্য
grep -rn "TODO" src/        # ফোল্ডার-গভীরে (-r), লাইন-নম্বরসহ (-n)
grep -v "debug" f.log       # উল্টো ছাঁকনি — যে লাইনে নেই
grep -c "error" f.log       # শুধু গুনে দাও
grep -E "err(or)?|fail" f   # প্রকৃত regex (-E)

# sed — কাঁটা-কাটার নৌকা (প্রতি লাইনে বসে):
sed 's/old/new/' f.txt          # প্রথম মিলটাই বদলায়
sed 's/old/new/g' f.txt         # লাইনের সবগুলো (g = global)
sed -i.bak 's/http:/https:/g' *.conf
                                 # ফাইলেই বদলাও, .bak পেছনে রেখে
sed -n '10,20p' big.log         # শুধু ১০-২০ লাইন দেখাও
sed '/^#/d' conf.txt            # # দিয়ে শুরু লাইন ফেলে দাও

# awk — স্তম্ভ-মাপার কারিগর (প্রতি লাইন = রেকর্ড, ফাঁক = স্তম্ভ):
awk '{print $1, $3}' data.txt       # ১ম ও ৩য় ঘর
awk -F: '{print $1}' /etc/passwd    # : ধরে ভাগ, নামগুলো
awk '$3 > 100 {print}' sales.txt    # শর্ত দিয়ে ছাঁকো
awk '{x += $3} END {print x}' f     # যোগফল — কলামের হিসাব
df -h | awk '\$5+0 > 80'            # ডিস্ক ৮০% ছাড়ালেই দেখাও

# find — ঘাট-খোঁজা (নাম ধরে, খাল ধরে):
find . -name "*.log" -mtime +7      # এক সপ্তাহের পুরোনো লগ
find src -type f -name "*.py" | wc -l
find . -name "*.tmp" -delete        # পেয়েই মুছে দাও
# নামে স্পেস থাকলে জাল মজবুত করো:
find . -name "*.log" -print0 | xargs -0 grep -l "error"

# sort/uniq — সাজানোর ঘর (জালিমের ২য়-৪র্থ জাল):
sort -u f            # সাজাও + একবারই রাখো
sort -k2 -n data     # ২য় স্তম্ভ ধরে, সংখ্যা হিসেবে
comm -13 a.txt b.txt # দুই তালিকার তফাত (দুটোই sorted)

# jq — JSON নদীর জাল (Book ৫৯-এর পুরোনো বন্ধু):
curl -s api.json | jq '.items[] | .name'
jq '.[] | select(.status == "fail")' data.json</div>

<div class="diagram">
<div class="diag-title">পাঁচ-জালের সারি — The Five-Net Chain</div>
<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowJ" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#22d3ee"/></marker>
</defs>
<rect class="node-cyan" x="10" y="55" width="86" height="42" rx="10"/><text class="lbl-cyan" x="53" y="80">grep</text>
<rect class="node" x="114" y="55" width="86" height="42" rx="10"/><text class="lbl" x="157" y="80">sort</text>
<rect class="node" x="218" y="55" width="86" height="42" rx="10"/><text class="lbl" x="261" y="80">uniq -c</text>
<rect class="node" x="322" y="55" width="90" height="42" rx="10"/><text class="lbl" x="367" y="80">sort -rn</text>
<rect class="node-leaf" x="432" y="55" width="90" height="42" rx="10"/><text class="lbl-leaf" x="477" y="80">head -5</text>
<line x1="96" y1="76" x2="110" y2="76" stroke="#22d3ee" stroke-width="2.5" fill="none" marker-end="url(#arrowJ)"/>
<line x1="200" y1="76" x2="214" y2="76" stroke="#22d3ee" stroke-width="2.5" fill="none" marker-end="url(#arrowJ)"/>
<line x1="304" y1="76" x2="318" y2="76" stroke="#22d3ee" stroke-width="2.5" fill="none" marker-end="url(#arrowJ)"/>
<line x1="412" y1="76" x2="430" y2="76" stroke="#22d3ee" stroke-width="2.5" fill="none" marker-end="url(#arrowJ)"/>
<rect class="cell" x="10" y="8" width="512" height="30" rx="8"/><text class="lbl-sm" x="266" y="27">নদী (ফাইল/প্রবাহ) → ছাঁকা → সাজানো → গণনা → ঘনতা → শীর্ষ-পাঁচ</text>
<rect class="cell-hot" x="10" y="112" width="512" height="28" rx="8"/><text class="lbl-sm" x="266" y="130">⚠ প্রতিটা জাল এক কাজ করে — এক grep-এ regex+গণনা+কাটা ঢুকিয়ে বিশাল জাল বোনা নিষেধ</text>
</svg>
<div class="diag-cap">ছোট জাল, লম্বা সারি — Unix দর্শনের জলজ-রূপ; সারিটাই দরজা ১০-এর সিংহাসনের প্রথম ধাপ।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>জালিম মিয়ার জাল-আইন:</strong> sed -i চালানোর আগে পাথর পরীক্ষা করো — -i.bak দিয়ে পেছনে ব্যাকআপ রাখো, নাহলে ভুল কাঁটায় পুরো ধার নষ্ট। আর xargs-এ ফাইলনামে স্পেস থাকলে অবশ্যই <strong>-print0 | xargs -0</strong> — সাধারণ জালে নাম ভেঙে যায়। cat দিয়ে একটা ফাইল grep করা বৃথা — grep-ই ফাইল নাম নেয়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Jalim mia's net-law:</strong> test the stone before running sed -i — keep -i.bak behind you, or one wrong cut ruins the whole haul. And with xargs, if filenames hold spaces, always <strong>-print0 | xargs -0</strong> — the ordinary net splits names. Also: cat-ing a single file into grep is waste — grep takes filenames itself.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ এক-বিশাল-জাল</div>এক regex-এ সব চায় · sed -i ব্যাকআপ ছাড়া পুরো ফোল্ডারে · for-লুপে স্পেস-নাম ভাঙে · ৫০০ লাইনের স্ক্রিপ্টে যা পাঁচ জালে হতো</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ পাঁচ-ছোট-জাল</div>grep|sort|uniq -c|sort -rn|head — সারি ধরে ধরে · sed -i.bak · find -print0|xargs -0 · কলামের কাজ awk-কে, লাইনের কাজ sed-কে</div>
</div>

<p class="verse">মাছি ধরতে বড় জাল লাগে না, সূক্ষ্ম চাল লাগে — "যে সব্যসচী, সেই সাবর" — ধৈর্য্য ও পরিশ্রমের সাথে সূক্ষ্মতা: এক এক জালে এক এক কাজ। কুরআন বলে মানুষকে সৃষ্টি করা হয়েছে সবরের সাথে শিক্ষা দেওয়ার জন্যই — ছাঁকা যার সূক্ষ্ম, তার ঝুড়ি ভরা।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🎣 পাঁচ-জাল সারি: grep → sort → uniq -c → sort -rn → head; কাটা sed, মাপ awk, খোঁজা find -print0।<br>কারণ: জাল ছোট হলে জাল বদলানো সস্তা — নদী রোজ বদলায়, সারি থাকে।</div></div>`,
  senior: {
    title: "জাল-শুদ্ধ করার খাতা — Keeping the Nets Clean",
    body: `<ul class="checklist">
<li>রোজ একবার <strong>লগ-সারি</strong> টানো: grep error | sort | uniq -c | sort -rn | head — আঙুলের স্মৃতি বানাও।</li>
<li>ইন-প্লেস বদলে <strong>sed -i.bak</strong>; পরীক্ষা আগে, কমিট পরে।</li>
<li>স্তম্ভের কাজ (কাটা, যোগ, শর্ত) → <strong>awk</strong>; লাইনের বদল → <strong>sed</strong>; খোঁজা → <strong>grep/find</strong> — যন্ত্র বিভাগ গুলিয়ো না।</li>
<li>স্পেস-নামের ভয়ে <strong>-print0 | xargs -0</strong>; JSON-এর জাল <strong>jq</strong> — Book ৫৯-এর হুক/স্ট্যাটাসলাইনের সঙ্গী।</li>
<li>কোন কাজ দুইবার? সারিটা একবার লিখে <strong>.bashrc-এ ফাংশন</strong> বানিয়ে ফেলো (দরজা ৬)।</li>
</ul>`
  }
});

// ── DOOR 5 · হারুন মাঝির নৌকা-ঘাট — Harun's Boat & Ghat ──
doors.push({
  num: 5,
  icon: "⚓",
  color: "#5eead4",
  name: "হারুন মাঝির নৌকা-ঘাট",
  subtitle: "Harun's Boat & Ghat",
  tech: "Processes · Jobs · Signals · exit status",
  spirit: "ওয়াকালা — কাজ দাও, হিসাব রাখো",
  secret: "প্রতিটা কমান্ড একটা নৌকা — ছেড়ে দাও (&), ডাকো (fg), থামাও (Ctrl+C = SIGINT); আর প্রতিটা নৌকা ফেরার সময় একটা হিসাব রেখে যায়: $? — ০ মানে নিরাপদ পৌঁছানো।",
  recall: {
    q: "সার্ভারে একটা দীর্ঘ কাজ চালালে, মাঝপথে টার্মিনাল বন্ধ করলে মরে যায়। & দিয়ে পেছনে ছেড়ে, জীবিত রেখে, পরে ফিরে দেখার উপায়গুলো?",
    qen: "A long job dies when you close the terminal mid-run. Ways to release it to the background, keep it alive, and check later?",
    a: "cmd & দিয়ে পেছনে ছাড়ো (jobs দেখায়, fg %1 ফিরিয়ে আনে, bg চালু-ই রাখে)। টার্মিনাল বন্ধ হলে মৃত্যু এড়াতে: nohup cmd & (HUP উপেক্ষা, nohup.out-এ লেখে) বা disown; আধুনিক পথ tmux/screen-এ চালানো (দরজা ৮)। থামাতে: Ctrl+C = SIGINT; জেদি নৌকায় kill -9 (SIGKILL — ধরাই যায় না)। আর প্রতিটা শেষ কমান্ডের হিসাব \$? — ০ মানে সফল, অন্যটা ব্যর্থতার কোড; || আর && দিয়ে পরের নৌকা শর্ত করে ছাড়ো।",
    aen: "Release with cmd & (jobs lists, fg %1 brings back, bg keeps running). To survive terminal close: nohup cmd & (ignores HUP, writes nohup.out) or disown; the modern way is tmux/screen (Door 8). To stop: Ctrl+C = SIGINT; for the stubborn boat, kill -9 (SIGKILL — cannot be caught). And every finished command leaves its account in \$? — 0 means success, else a failure code; chain the next boat conditionally with || and &&."
  },
  story: `<p class="scene-setting">হারুন মাঝি মালবহর নৌকার ঠিকাদার — তার ঘাটে প্রতিদিন শ' খানেক নৌকা ছাড়ে। তার ঘাটের হাল-নিয়ম তিনটা কথায়: ছাড়ো, ডাকো, হিসাব নাও। নৌকা ছাড়ে দুই ভাবে — চোখের সামনে (সামনের নৌকা, টার্মিনাল ব্যস্ত থাকে) আর পেছনের ঘাটে (& — নদীতে নেমে গেছে, তুমি অন্য কাজ করো)। প্রতিটা নৌকার একটা নম্বর থাকে (job), আর ঘাটের খাতায় (jobs) কে কোথায় আছে লেখা থাকে। ফিরে আসতে চাইলে fg চিৎকার, পেছনেই থাক বললে bg। আর প্রতিটা নৌকা যখন ভেটে ফেরে — শেষ হয় — সে হারুনের হাতে একটা প্যাঁচি রেখে যায়: সবুজ প্যাঁচি (০) মানে মাল পৌঁছেছে; লাল প্যাঁচি (১, ২, ১৩০…) মানে কোথাও গলদ — আর প্যাঁচির নম্বরই বলে কোন গলদ।</p>
<p class="scene-setting en">Harun the boatman runs the cargo ghat — a hundred boats leave daily. His ghat's discipline in three words: release, call, take account. Boats leave two ways — before your eyes (foreground; the terminal stays busy) and at the back ghat (& — gone into the river while you do other work). Every boat carries a number (a job), and the ghat's ledger (jobs) says who is where. To call one back, shout fg; to keep it working behind, bg. And when a boat finally returns — finishes — it leaves a token in Harun's hand: a green token (0) means the cargo arrived; a red token (1, 2, 130…) means something went wrong — and the token's number names the fault.</p>

<div class="code-block"># নৌকা ছাড়ো — foreground বনাম background:
python train.py            # সামনে — শেষ না হওয়া পর্যন্ত প্রম্পট ব্যস্ত
python train.py &          # পেছনে — [1] 2345 (job 1, PID 2345)

# ঘাটের খাতা আর ডাক:
jobs                       # কোন নৌকা কোথায়
fg %1                      # ১ নং ফিরিয়ে আনো (Ctrl+Z দিয়ে স্থগিত→bg %1)
bg %1                      # স্থগিতটা পেছনেই চালু করো

# টার্মিনাল বন্ধ হলেও বাঁচাও:
nohup long_job &           # HUP-অবজ্ঞাকারী; ফল nohup.out-এ
long_job & disown          # ঘাটের খাতা থেকে নাম কেটে দাও
# (আধুনিক পথ: tmux-এ চালাও — দরজা ৮-এ দেখবে)

# নৌকা থামাও — সংকেতের সিঁড়ি:
Ctrl+C                     # SIGINT — ভদ্র থামার অনুরোধ (নিজে পরিষ্কার করে)
kill 2345                  # ডিফল্ট SIGTERM — এখনো ভদ্র
kill -9 2345               # SIGKILL — ধরাই যায় না, পরিষ্কারের সুযোগ নেই
kill -STOP 2345 / -CONT    # স্থগিত / আবার চালু
ps aux | grep train        # নৌকার নম্বর (PID) খোঁজো
kill %1                    # job-নম্বরেও যায়

# প্যাঁচির হিসাব — প্রতিটা নৌকার উত্তর:
python run.py; echo "\$?"   # 0 = সবুজ; 1,2,127,130… = গলদের নম্বর
#   127 = কমান্ডই পাওয়া যায়নি; 130 = Ctrl+C-তে থামানো
make && echo "সফল"         # আগেরটা সবুজ হলেই পরেরটা
make || echo "ব্যর্থ"       # আগেরটা লাল হলে পরেরটা
make && make test || echo "কোথাও গলদ"   # শর্ত-শৃঙ্খল

# ভুল প্যাঁচি হাতে পরের নৌকা না ছাড়া — দরজা ৯-এর সেতু:
make || exit 1             # স্ক্রিপ্টে লাল প্যাঁচি দেখে থেমে যাও</div>

<div class="diagram">
<div class="diag-title">নৌকার জীবনচক্র — A Boat's Life</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowH" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker>
</defs>
<rect class="node" x="15" y="85" width="120" height="44" rx="10"/><text class="lbl" x="75" y="103">foreground</text><text class="lbl-sm" x="75" y="119">চোখের সামনে</text>
<rect class="node-cyan" x="220" y="85" width="120" height="44" rx="10"/><text class="lbl-cyan" x="280" y="103">background &</text><text class="lbl-sm" x="280" y="119">পেছনের ঘাট</text>
<rect class="node-leaf" x="425" y="85" width="120" height="44" rx="10"/><text class="lbl-leaf" x="485" y="103">ফেরা → \$?</text><text class="lbl-sm" x="485" y="119">০=সবুজ · ≠০=লাল</text>
<line x1="135" y1="96" x2="215" y2="96" stroke="#5eead4" stroke-width="2" fill="none" marker-end="url(#arrowH)"/>
<text class="lbl-sm" x="175" y="86">Ctrl+Z → bg</text>
<line x1="135" y1="118" x2="215" y2="118" stroke="#5eead4" stroke-width="2" fill="none" marker-end="url(#arrowH)"/>
<text class="lbl-sm" x="175" y="136">fg %N ডাকে</text>
<line x1="340" y1="107" x2="420" y2="107" stroke="#5eead4" stroke-width="2" fill="none" marker-end="url(#arrowH)"/>
<rect class="cell-hot" x="15" y="15" width="530" height="30" rx="8"/><text class="lbl-sm" x="280" y="34">থামানোর সিঁড়ি: Ctrl+C (SIGINT) → kill (SIGTERM) → kill -9 (SIGKILL — ধরা যায় না)</text>
<rect class="cell" x="15" y="160" width="530" height="36" rx="8"/><text class="lbl-sm" x="280" y="176">টার্মিনাল বন্ধ = SIGHUP: nohup / disown / tmux দিয়ে বাঁচাও; Book ৫৯-এর /bg-র পেছনে এই হারুনই</text>
</svg>
<div class="diag-cap">ছাড়ো · ডাকো · হিসাব নাও — প্রতিটা প্রক্রিয়ার জীবন এই তিন কথায়; \$? হলো প্যাঁচি, && / || হলো শর্তের দড়ি।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>হারুনের kill-নীতি:</strong> -৯ শেষ অস্ত্র, প্রথম নয় — SIGKILL-এ নৌকা পরিষ্কার করার সুযোগই পায় না, অর্ধ-লেখা ফাইল আর লক রয়ে যায়। সিঁড়ি মেনে চলো: Ctrl+C → kill → তারপরই -৯। আর একই প্যাঁচি বার বার লাল হলে নৌকা মারা নয় — কারণটা পড়ো (stderr কোথায় গেল? দরজা ২)।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Harun's kill policy:</strong> -9 is the last weapon, not the first — SIGKILL gives the boat no chance to clean up, leaving half-written files and locks. Climb the ladder: Ctrl+C → kill → only then -9. And a token repeatedly red means read the cause, not kill the boat (where did stderr go? Door 2).</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ঘাট-নেই মালিক</div>দীর্ঘ কাজ সামনে বসিয়ে টার্মিনাল আটকে রাখে · টার্মিনাল বন্ধ করে কাজ হারায় · প্রতিটা কাজের পরে \$? দেখে না · রাগ করে সবসময় kill -9</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ হারুন-মাঝি</div>দীর্ঘ কাজ & বা nohup/tmux-এ · ফেরে হিসাব: \$? · && / || দিয়ে শর্ত-শৃঙ্খল · থামায় সিঁড়ি ধরে — ভদ্র SIGINT আগে</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">&</div><div class="sc-label">পেছনে ছাড়ো</div></div>
<div class="stat-card"><div class="sc-num">jobs · fg</div><div class="sc-label">খাতা আর ডাক</div></div>
<div class="stat-card"><div class="sc-num">\$?</div><div class="sc-label">ফেরার প্যাঁচি — ০ সবুজ</div></div>
<div class="stat-card"><div class="sc-num">nohup</div><div class="sc-label">টার্মিনাল-মৃত্যু এড়াও</div></div>
</div>

<p class="verse">প্রতিটা আমানত ফেরত দিতে হয় হিসাবসহ — "নিশ্চয়ই আল্লাহ তোমাদের আদেশ দেন আমানত তার হকদারকে ফিরিয়ে দিতে" (কুরআন ৪:৫৮)। নৌকার প্যাঁচিও সেই আমানত: কাজ শেষ হলে ফলাফলের হিসাব ফেরত এসেই কাজ শেষ — ০ হোক বা গলদের নম্বর, চেপে না বলা বিশ্বাসঘাতকতা।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">⚓ নৌকা: & ছাড়ো · jobs/fg ডাকো · \$? হিসাব নাও; থামাও সিঁড়ি ধরে, -৯ শেষে।<br>কারণ: যে হিসাব চোখে রাখে না, তার ঘাট একদিন ডুবে যায়।</div></div>`,
  senior: {
    title: "ঘাট-রক্ষকের খাতা — The Ghat-Keeper's Notes",
    body: `<ul class="checklist">
<li>দীর্ঘ কাজ আজ থেকে <strong>&</strong>-এ ছাড়ো; ফিরে এসে <strong>jobs</strong> দেখো, <strong>fg %N</strong> ডাকো।</li>
<li>টার্মিনাল বন্ধ হবে? <strong>nohup … &</strong> বা <strong>tmux</strong> (দরজা ৮) — SIGHUP-এর হাত থেকে বাঁচাও।</li>
<li>প্রতিটা গুরুত্বপূর্ণ কমান্ডের পরে <strong>echo \$?</strong> — অভ্যাস হোক; পরে && / || দিয়ে শৃঙ্খল।</li>
<li>থামানোর সিঁড়ি: <strong>Ctrl+C → kill → kill -9</strong> — ক্রম ভাঙো না।</li>
<li>PID খুঁজতে <strong>ps aux | grep</strong> — দরজা ৪-এর জাল এখানেও কাজে লাগে।</li>
</ul>`
  }
});
