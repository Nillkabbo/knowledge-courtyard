// ════════════════════════════════════════
// Book 60 · The City of Canals — v2 Complete Reference (20 doors)
// নহরের নগরী · terminal-mastery · hue 195
// ════════════════════════════════════════
// Door containers loaded by index.html; engine gates on num order.

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

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>কালু মিয়ার টিপ:</strong> কমান্ড লেখার সময় Tab চাপো — নাম পুরো হয়ে যায়, দুইবার চাপলে বিকল্প দেখায়। আর তীর-চিহ্ন ↑ ↓ দিয়ে আগের কমান্ড ফিরে আসে — ঘাটে কেউ একই কথা দুইবার টাইপ করে না (বিস্তারিত দরজা 15-এ)।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Kalu mia's tip:</strong> press Tab while typing a command — the name completes; twice shows alternatives. And the arrows ↑ ↓ bring back earlier commands — nobody at the ghat types the same thing twice (more in Door 15).</div></div>

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

// ── DOOR 2 · দলিল-দালান — The Records Building ──
doors.push({
  num: 2,
  icon: "🗂️",
  color: "#38bdf8",
  name: "দলিল-দালান",
  subtitle: "The Records Building",
  tech: "ls -la · cp/mv/rm · mkdir -p · ln -s vs hard · stat · file",
  spirit: "আহ্‌ওয়াল — জায়গা নয়, অবস্থান গুরু",
  secret: "ফাইল নাম ঠিকানা মাত্র, আসল বিবরণ আছে inode-এ — ls -i দেখায় সংখ্যা, stat দেখায় পূর্ণ জন্মনামা; আর হার্ড-লিংক একই inode-এর দ্বিতীয় নাম, সিমলিংক শুধু পথ-নির্দেশক সাইনবোর্ড — একটা মুছলে বাড়ি থাকে, অন্যটা মুছলে সাইনবোর্ড ভাঙে, বাড়ি নয়।",
  recall: {
    q: "হার্ড-লিংক আর সিমলিংকের মধ্যে তিনটা পার্থক্য বলো — বানানো, মুছে ফেলা, আর ক্রস-ডিভাইস। আর একটা ফাইলের আসল জন্মসনদ (সাইজ, টাইমস্ট্যাম্প, inode) কোন আদেশে পাবে?",
    qen: "Three differences between hard link and symlink — creation, deletion, cross-device. And which command shows a file's true birth-certificate (size, timestamps, inode)?",
    a: "বানানো: ln file hard2 (একই inode, একই বিবরণ-খাতা) বনাম ln -s target board (নতুন inode, ভেতরে শুধু পথ)। মুছা: টার্গেট মুছলে hard-link রুটিন হয়ে জীবিত — বিবরণ তো ও-ই; কিন্তু সিমলিংক ভাঙা সাইনবোর্ড — কাজ করে না। ক্রস-ডিভাইস: হার্ড-লিংক এক ফাইলসিস্টেমের ভেতরেই (inode সংখ্যা ডিভাইস-ভেদে আলাদা জগৎ), সিমলিংক যেকোনো জায়গায় — এমনকি নেটওয়ার্ক-পথও লেখা যায়। জন্মসনদ: stat file — আকার, তিন সময় (atime/modify/…), inode নম্বর, লিংক-সংখ্যা সব এক পাতায়; ls -la শুধু রাস্তার নাম-ফলক।",
    aen: "Creation: ln file hard2 (same inode, same record-book) vs ln -s target board (new inode, just a path inside). Deletion: delete the target — the hard link lives on untouched, it IS the record; the symlink becomes a broken signboard. Cross-device: hard links stay within one filesystem (inode numbers belong to a device's own world), symlinks go anywhere — even network paths. Birth-certificate: stat file — size, times, inode number, link count on one page; ls -la is only the street nameplate.",
    you: "cd ~/practices && touch origin.txt && ln origin.txt hard2.txt && ln -s origin.txt sign.txt && stat origin.txt | grep -i links && rm origin.txt && cat hard2.txt কাজ করে (জীবিত!), ls -l sign.txt → ভাঙা তীর"
  },
  story: `<p class="scene-setting">দলিল-দালানের রেকর্ড-রক্ষক জনাব সালাহউদ্দিন। কোনো কাগজ ঢোকার আগে তিনি খাতায় একটা সংখ্যা লেখেন — কাগজের নাম নয়, খাতার নম্বর (inode)। নাম রাস্তার ফলক মাত্র; দুটো নাম এক নম্বরে যেতে পারে (হার্ড-লিংক), তাতে কাগজ বাড়ে না — শুধু ফলক বাড়ে। একদিন এক কেরানি জিজ্ঞেস করল: সাহেব, আমি দুটো নাম দেখছি, কোনটা আসল? সালাহউদ্দিন হাসলেন: দুটোই আসল — আসল বলে কিছু নেই, আছে খাতার নম্বর; ফলক ভাঙলেও খাতা থাকে (হার্ড-লিংক মুছলে ডেটা বাঁচে)। পাশের টেবিলে সাইনবোর্ড-শিল্পী করিম অন্য কাজ করেন — তাঁর তৈরি পাতলা তক্তা শুধু দিক দেখায় (সিমলিংক); বাড়ি উঠলে তক্তা ঝুলে থাকে, দিক হারায়। শেষ পাঠ: যেকোনো কাগজের পূর্ণ পরিচয় চাই সালাহউদ্দিনের খাতায় — stat — রাস্তার ফলকে নয়।</p>
<p class="scene-setting en">Mr. Salahuddin keeps the Records Building. Before any paper enters, he writes a ledger number in his book — not the paper's name, the LEDGER number (inode). Names are street nameplates; two names can point at one number (hard link) — the paper doesn't multiply, only the nameplates. A clerk once asked: which of these two names is the real one? Salahuddin laughed: both are real — there is no 'real'; there is the ledger number. Break a nameplate, the ledger survives (delete a hard link, data lives). At the next table, signboard-artist Karim does the opposite — his thin board only POINTS (symlink); demolish the house and the board hangs, pointing at nothing. Final lesson: a paper's full identity lives in Salahuddin's ledger — stat — not on the street nameplate.</p>

<div class="code-block"># নাম-ফলক আর খাতা-নম্বর:
ls -li origin.txt hard2.txt sign.txt
#   ১২৩৪ -rw-r--r-- 2 ... origin.txt   ← inode ১২৩৪, links=2
#   ১২৩৪ -rw-r--r-- 2 ... hard2.txt    ← একই inode! ভাই-ফলক
#   ৫৬৭৮ lrwxr-xr-x 1 ... sign.txt -> origin.txt  ← নতুন inode, শুধু পথ

# পূর্ণ জন্মসনদ:
stat origin.txt
#   Size, Blocks, inode, Links, Access/Modify/Change — সব এক পাতায়
file origin.txt        # ভেতরে কী জাতের কাগজ: text/ASCII, PNG...
ls -la                 # লুকানো ফাইল (.) সহ রাস্তার পূর্ণ তালিকা

# বাড়ি-ঘর তোলা:
mkdir -p deep/nest/ed/dirs   # -p: মাঝের সব তলা এক আদেশে
cp -r src/ dst/               # -r: ফোল্ডার-সহ
mv old new                    # নাম-বদল / জায়গা-বদল (কপি নয়)
rm -i risky.txt                # -i: মুছার আগে জিজ্ঞেস

# দুই ধরনের লিংক:
ln origin.txt hard2.txt       # একই খাতা-নম্বরে দ্বিতীয় ফলক
ln -s origin.txt sign.txt     # পথ-দেখানো সাইনবোর্ড
rm origin.txt                  # ফলক সরালো —
cat hard2.txt                  # ...খাতা জীবিত, পড়া চলে!
ls -l sign.txt                 # ভাঙা তীর, দিক হারা

# অভ্যাস-সারি:
#   • মুছতে আগে ls, তারপর rm — নাম-ফলক দুবার পড়ো
#   • rm -rf টাইপ করার আগে পথ আঙুল-তুলে পড়ো (B59-এর সতর্কতা)
#   • stat দেখে নিশ্চিত হও কপি সত্যিই বসেছে কি না</div>

<table class="kv-table">
<tr><th>কাজ</th><th>আদেশ</th><th>মনে রাখার ছল</th></tr>
<tr><td class="hl">পূর্ণ তালিকা</td><td>ls -lai</td><td>ফলক+খাতা-নম্বর একসাথে</td></tr>
<tr><td class="hl">জন্মসনদ</td><td>stat f</td><td>সালাহউদ্দিনের খাতা</td></tr>
<tr><td class="hl">জাত-পরিচয়</td><td>file f</td><td>কাগজ কীসের তৈরি</td></tr>
<tr><td class="hl">হার্ড-লিংক</td><td>ln a b</td><td>একই নম্বরে ভাই-ফলক</td></tr>
<tr><td class="hll">সিমলিংক</td><td>ln -s a b</td><td>পথ-দেখানো তক্তা</td></tr>
</table>

<div class="diagram">
<div class="diag-title">ফলক আর খাতা — Nameplates and the Ledger</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar60d2" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="20" width="150" height="40" rx="10"/><text class="lbl" x="90" y="38">origin.txt</text><text class="lbl-sm" x="90" y="54">রাস্তার ফলক</text>
<rect class="node" x="15" y="120" width="150" height="40" rx="10"/><text class="lbl" x="90" y="138">hard2.txt</text><text class="lbl-sm" x="90" y="154">ভাই-ফলক (একই inode)</text>
<rect class="node-cyan" x="395" y="70" width="150" height="44" rx="10"/><text class="lbl-cyan" x="470" y="88">খাতা #১২৩৪</text><text class="lbl-sm" x="470" y="104">inode — আসল কাগজ</text>
<rect class="node-hot" x="205" y="20" width="150" height="40" rx="10"/><text class="lbl-hot" x="280" y="38">sign.txt</text><text class="lbl-sm" x="280" y="54">সাইনবোর্ড (সিমলিংক)</text>
<line x1="165" y1="40" x2="201" y2="40" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d2)"/>
<line x1="355.0" y1="26.2" x2="391.0" y2="76.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d2"/>
<line x1="165" y1="140" x2="391" y2="104" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d2)"/>
</svg>
<div class="diag-cap">দুই ফলক এক খাতায় (হার্ড-লিংক); সাইনবোর্ড শুধু দেখায় — বাড়ি উঠলে ঝুলে থাকে।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>রেকর্ড-রক্ষকের সতর্কতা:</strong> rm -rf টাইপ-করা বিপদের শীর্ষ — আগে Tab চেপে পথ-সম্পূর্ণ করো, পড়ো, তারপর Enter; ডিভাইস-প্রান্তে ভুল পথ মানে মুছে-ফেলা সার্ভার। সিমলিংকের ভেতরে cp/mv চালালে সাবধান — trailing-slash-এর নিয়ম বদলে যায় (cp symlink/ dst মানে ভেতরের জিনিস)। আর stat না দেখে "কপি হয়ে গেছে" ধরে নিও না — সাইজ মিললেই দলিল মিলেছে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The record-keeper's caution:</strong> rm -rf is peak danger — Tab-complete the path, READ it, then Enter; one wrong path at a device edge means a deleted server. cp/mv around symlinks: trailing-slash rules flip (cp symlink/ dst copies the contents). And never assume a copy landed without stat — sizes must match for the deeds to match.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ফলক-বিভ্রান্ত কেরানি</div>নাম দেখে কাজ — inode অজানা · হার্ড/সিমলিংক পার্থক্য নেই · rm -rf পড়া ছাড়া Enter · "কপি হয়েছে" অনুমান</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সালাহউদ্দিনের রীতি</div>ls -li → inode দেখে বোঝা · stat-জন্মসনদ · মুছার আগে দুইবার-পড়া · লিংকের ধরন জেনে সিদ্ধান্ত</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">ls -li</div><div class="sc-label">ফলক + খাতা-নম্বর</div></div>
<div class="stat-card"><div class="sc-num">stat</div><div class="sc-label">পূর্ণ জন্মসনদ</div></div>
<div class="stat-card"><div class="sc-num">ln vs ln -s</div><div class="sc-label">ভাই-ফলক বনাম সাইনবোর্ড</div></div>
<div class="stat-card"><div class="sc-num">mkdir -p</div><div class="sc-label">সব তলা এক আদেশে</div></div>
</div>

<p class="verse">আহওয়াল শব্দের শিক্ষা: অবস্থান (state) জায়গার চেয়ে গুরু — একই কাগজ, দুই নাম, এক খাতা; নাম বদলায়, খাতা থাকে। রেকর্ড-রক্ষকও তাই: প্রশ্ন করো না "কোন নাম আসল", প্রশ্ন করো "খাতার নম্বর কত"।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🗂️ নাম ফলক, inode খাতা; ls -li দেখে চিনো, stat পড়ে নিশ্চিত হও; হার্ড-লিংক ভাই-ফলক, সিমলিংক সাইনবোর্ড।<br>কারণ: ফলক ভাঙলে খাতা থাকে — খাতা হারালে ফলক অর্থহীন।</div></div>`,
  senior: {
    title: "দলিল-দালানের খাতা — The Records Ledger",
    body: `<ul class="checklist">
<li><strong>ls -li</strong> — inode-নম্বর সহ তালিকা; একই নম্বর মানে হার্ড-লিংক ভাই।</li>
<li><strong>stat</strong> — আকার/সময়/inode/লিংক-সংখ্যা: কপি বসেছে কি না প্রমাণসহ যাচাই।</li>
<li><strong>mkdir -p, cp -r, mv</strong> — তলা-সহ বাড়ি, ফোল্ডার-কপি, নাম-বদল।</li>
<li><strong>ln vs ln -s</strong> — একই-খাতার ভাই বনাম পথ-তক্তা; মুছলে আচরণ উল্টো।</li>
<li>rm -rf আগে <strong>Tab → পড়া → Enter</strong>; সিমলিংকের ধারে trailing-slash সাবধান।</li>
</ul>`
  }
});

// ── DOOR 2 · নসরত মিস্ত্রির খাল — Nasrat's Canal ──
doors.push({
  num: 3,
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
<marker id="arrowW" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#7dd3fc"/></marker>
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
  num: 4,
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

// ── DOOR 5 · নকশা-সন্ধানীর দলিল-খাতা — The Surveyor's Ledger ──
doors.push({
  num: 5,
  icon: "🔍",
  color: "#38bdf8",
  name: "নকশা-সন্ধানীর দলিল-খাতা",
  subtitle: "The Surveyor's Ledger",
  tech: "find · -name/-type/-mtime · -exec vs xargs · -print0",
  spirit: "নজর — যা খোঁজো তা-ই পাও",
  secret: "find শুধু খোঁজে না — খুঁজে কাজ করায়: -exec প্রতি ফাইলে তোমার হাত, xargs গুচ্ছোয় তার হাত; আর ফাইলের নামে যা-ই হোক (স্পেস, নতুন-লাইন, তারা) NUL-বিভাজক (-print0 | xargs -0) ছাড়া পাইপ অন্ধ-পথ — মনে রেখো ওই বিখ্যাত cron-দুর্ঘটনা: # vmunix।",
  recall: {
    q: "লক্ষ ফাইলের গুদামে (১) নামে *.log, (২) সাইজে +100M, (৩) ৭ দিনের পুরোনো — তিনটা শর্ত এক find-এ কীভাবে দাবি ধরা যায়? আর পাইপে পাঠালে কোন দুই পতাকা নাম-ভাঙা রোধ করে?",
    qen: "In a million-file warehouse: named *.log, larger than 100M, older than 7 days — how do all three ride one find? And which two flags keep names unbroken through a pipe?",
    a: "শর্ত-সমাবেশ: find /var/log -name '*.log' -size +100M -mtime +7 — সব টেস্ট একসাথে AND; -o দিলে OR, ! দিলে NOT। কাজ চালানোর দুই রাস্তা: -exec rm {} \\; (প্রতি ফাইলে আলাদা প্রসেস, {} = নাম) বনাম -exec rm {} + (গুচ্ছোয়) বনাম xargs (গুচ্ছোয়, নাম-নিরাপত্তার শর্তে)। নাম-ভাঙা রোধ: find -print0 | xargs -0 — NUL (\\0) ফাইলনামে কখনো আসে না, তাই একমাত্র নিরাপদ বিভাজক; নিউলাইন আসে (touch $'a\\nb') — তাই নিউলাইন-বিভাজিত পাইপ অন্ধ-পথ। আর -delete কখনো শর্তের শেষে, পথ যাচাই ছাড়া নয়।",
    aen: "Conditions: find /var/log -name '*.log' -size +100M -mtime +7 — tests AND together; -o for OR, ! for NOT. Acting: -exec rm {} \\; (process per file) vs -exec rm {} + (batched) vs xargs (batched, with the safety condition). Name-safety: find -print0 | xargs -0 — NUL never appears in a filename, the only safe separator; newlines do (touch $'a\\nb'), so newline-split pipelines are blind alleys. And -delete goes LAST, never without a verified path.",
    you: "mkdir -p /tmp/findlab && cd /tmp/findlab && touch a.log b.log 'c d.log' && find . -name '*.log' -print0 | xargs -0 -n1 echo SAFE"
  },
  story: `<p class="scene-setting">নকশা-সন্ধানী আরিফ সাহেব জরিপ-দপ্তরের কিংবদন্তি — লক্ষ দলিলের গুদামে যেকোনো কাগজ তিন প্রশ্নে: নাম কী, পুরুত্ব কত, বয়স কত (−name, −size, −mtime)। শর্ত সব একসাথে চাপলে সব মিলতে হয় (AND); −o বললে যেকোনো একটা মিললেই চলে। কাজ করানোর দুই রীতি: ছোট কাজে প্রতিটা কাগজে নিজে হাত (-exec {} \\;) — ধীর কিন্তু নিশ্চিত; বড় ভারে বার্তাবাহকের ঝোলা (xargs) — একবারে গুচ্ছো। আর লৌহ-নিয়ম, প্রথম দিনেই শেখানো: কাগজের নামে যা-ই হোক — স্পেস, নতুন-লাইন, তারা — বিভাজক হিসেবে শুধু NUL বিশ্বাস করো; নিউলাইনে ভাগ করা তালিকা অন্ধ-পথ। একবার না মিললে ঘাবড়ান না: ! দিয়ে উল্টো সেট, বা grep -v দিয়ে ছেঁকে নাও।</p>
<p class="scene-setting en">The surveyor Arif Sahib is the archive legend — three questions pull any paper from a million-deed warehouse: what name, what thickness, what age (-name, -size, -mtime). Stacked conditions must ALL match; -o means any one suffices. Small jobs: he touches each paper himself (-exec {} \\;) — slow but certain; heavy loads go in the courier's sack (xargs) — batched. Iron rule, taught day one: whatever a name contains — spaces, newlines, asterisks — trust only NUL as separator; a newline-split list is a blind alley. If a pattern misses: flip with ! or filter with grep -v.</p>

<div class="code-block"># তিন প্রশ্নে খোঁজা (AND — সব মিলতে হবে):
find /var/log -name '*.log' -size +100M -mtime +7
#   -name: নাম · -size +100M: পুরুত্ব · -mtime +7: ৭ দিনের বেশি বয়স
# OR / NOT:
find . \\( -name '*.tmp' -o -name '*.bak' \\) -type f
find . -type f ! -path './.git/*'        # .git বাদে সব ফাইল
find . -maxdepth 2 -name '*.css'          # মাত্র ২ তলা

# খুঁজে কাজ করানো — দুই রাস্তা:
find . -name '*.log' -exec wc -l {} \\;    # প্রতি ফাইলে আলাদা
find . -name '*.log' -exec wc -l {} +    # গুচ্ছোয় (কম প্রসেস)
find . -name '*.log' -print0 | xargs -0 wc -l   # xargs-গুচ্ছো + NUL-নিরাপত্তা

# কেন NUL? — পরীক্ষা করো:
touch 'my file.log'                        # নামে স্পেস!
find . -name '*.log'    | xargs wc -l     # ✗ ভেঙে যায়: my, file.log
find . -name '*.log' -print0 | xargs -0 wc -l   # ✓ অখণ্ড

# GNU নিরাপত্তা-নোট (findutils manual):
#   find / -name '#*' | xargs rm  → একবার '# vmunix' নামের ফাইল
#   পুরো সিস্টেমের ক্ষতি করেছিল — নিউলাইন-বিভাজনের অন্ধ-পথ
#   তাই নিয়ম: -print0 | xargs -0, সর্বদা।

# মুছতে চাইলে:
find /tmp/cache -type f -mtime +7 -delete   # -delete সবার শেষে
find ... -print আগে চালিয়ে দেখো, তারপর -delete</div>

<table class="kv-table">
<tr><th>শর্ত</th><th>মানে</th><th>উদাহরণ</th></tr>
<tr><td class="hl">-name</td><td>নামে মিল (glob)</td><td>-name '*.log'</td></tr>
<tr><td class="hll">-type f</td><td>শুধু ফাইল</td><td>d=dir, l=symlink</td></tr>
<tr><td class="hl">-size +100M</td><td>পুরুত্ব-সীমা</td><td>+ বড়, - ছোট</td></tr>
<tr><td class="hl">-mtime +7</td><td>বয়স (দিন)</td><td>+7 = ৮ দিনের+ পুরোনো</td></tr>
<tr><td class="hl">-maxdepth 2</td><td>তলা-সীমা</td><td>গভীরে নামা বন্ধ</td></tr>
</table>

<div class="diagram">
<div class="diag-title">গুদাম-খোঁজার নকশা — The Warehouse Search</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar60d5" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="78" width="130" height="44" rx="10"/><text class="lbl" x="80" y="96">গুদাম</text><text class="lbl-sm" x="80" y="112">/var/log লক্ষ ফাইল</text>
<rect class="node-cyan" x="185" y="30" width="140" height="40" rx="10"/><text class="lbl-cyan" x="255" y="48">নাম-ছাঁকনি</text><text class="lbl-sm" x="255" y="64">-name '*.log'</text>
<rect class="node-cyan" x="185" y="128" width="140" height="40" rx="10"/><text class="lbl-cyan" x="255" y="146">বয়স-ছাঁকনি</text><text class="lbl-sm" x="255" y="162">-mtime +7</text>
<rect class="node-hot" x="365" y="78" width="130" height="44" rx="10"/><text class="lbl-hot" x="430" y="96">তালিকা</text><text class="lbl-sm" x="430" y="112">NUL-বিভাজিত</text>
<line x1="145" y1="90" x2="181" y2="58" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d5)"/>
<line x1="145" y1="110" x2="181" y2="142" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d5)"/>
<line x1="325" y1="50" x2="361" y2="88" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d2)"/>
<line x1="325" y1="148" x2="361" y2="110" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d2)"/>
</svg>
<div class="diag-cap">গুদাম → ছাঁকনি-ছাঁকনি (AND) → তালিকা; কাজ করাতে হলে -exec {} বা xargs -0।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সন্ধানীর সতর্কতা:</strong> -delete/-exec rm চালানোর আগে অবশ্যই তালিকা আগে দেখো (-print); পথ / থেকে শুরু হলে দুবার পড়ো। নাম-ছাঁকনিতে glob কোট করো ('*.log') — নইলে শেল-ই আগে মেলাবে, find-এর কাজ কেড়ে নেবে। xargs-এ ডিফল্ট বিভাজক স্পেস-নিউলাইন — নিরাপদ কাজের জন্য -print0 | xargs -0 ছাড়া পাইপ নয়; মনে রেখো findutils-manual-এর সেই দুর্ঘটনা: নামে-নিউলাইন ফাইল xargs rm-কে ভুল টার্গেট দিয়েছিল।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The surveyor's caution:</strong> before -delete or -exec rm, ALWAYS dry-run with -print first; paths starting at / deserve a second read. Quote your globs ('*.log') or the shell expands them before find ever runs. xargs defaults to space/newline splitting — for real work, no pipe without -print0 | xargs -0; remember the findutils manual's disaster: a newline-named file once aimed xargs rm at the wrong target.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অন্ধ-পথের সাগরেদ</div>find | xargs rm — NUL ছাড়া · glob unquoted · -delete আগে, যাচাই পরে · লক্ষ ফাইলে -exec {} \\; (হাজার প্রসেস)</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ আরিফ সাহেবের রীতি</div>-print আগে, কাজ পরে · '-quoted glob · -print0 | xargs -0 সর্বদা · বড় ভারে {} + বা xargs-গুচ্ছো</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">-print0</div><div class="sc-label">NUL-বিভাজিত তালিকা</div></div>
<div class="stat-card"><div class="sc-num">xargs -0</div><div class="sc-label">নাম-নিরাপদ বার্তাবাহক</div></div>
<div class="stat-card"><div class="sc-num">{} +</div><div class="sc-label">গুচ্চো-exec, কম প্রসেস</div></div>
<div class="stat-card"><div class="sc-num">-mtime +7</div><div class="sc-label">বয়স-ছাঁকনি</div></div>
</div>

<p class="verse">নজরের পাঠ: যা খোঁজো তা-ই পাও — কিন্তু সন্ধানের আগে জেনে নাও কী মুছবে; আর নাম যত বিচিত্রই হোক, NUL-এর মতো বিশ্বস্ত বিভাজক নেই। "প্রত্যেক কৃতকার্যতার সাথে এক পরীক্ষা" — না দেখে মোছ না।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🔍 find-এ শর্ত AND-হারে, কাজ -exec/xargs-এ; পাইপে -print0 | xargs -0 অবশ্যকর — NUL ছাড়া অন্ধ-পথ।<br>কারণ: ফাইলের নামে NUL আসে না — তাই সে-ই একমাত্র সত্য।</div></div>`,
  senior: {
    title: "সন্ধানীর খাতা — The Surveyor's Ledger",
    body: `<ul class="checklist">
<li>শর্ত জোড়া: <strong>-name '*.log' -size +100M -mtime +7</strong> — সব AND; -o, ! দিয়ে OR/NOT।</li>
<li>কাজ: <strong>-exec cmd {} \\;</strong> (প্রতি-ফাইল) বনাম <strong>{} +</strong> / <strong>xargs -0</strong> (গুচ্ছো)।</li>
<li>পাইপে সর্বদা <strong>-print0 | xargs -0</strong> — স্পেস/নিউলাইন-নাম রক্ষা করে।</li>
<li>মোছার আগে <strong>-print ড্রাই-রান</strong>; -delete সবার শেষে।</li>
<li>glob সবসময় <strong>কোট-করা</strong> — শেল-expansion এড়াতে।</li>
</ul>`
  }
});

// ── DOOR 6 · দরজার চাবি-ঘর — The Key Room ──
doors.push({
  num: 6,
  icon: "🗝️",
  color: "#22d3ee",
  name: "দরজার চাবি-ঘর",
  subtitle: "The Key Room",
  tech: "chmod · chown · rwx↔octal · umask · sudo · setuid-bit",
  spirit: "আমানত — প্রতিটা চাবি এক দায়",
  secret: "প্রতিটা ফাইলের তিন ধার (user·group·other) × তিন চাবি (r·w·x) = নয় ঘর; ৪২১-এর যোগফলে অক্টাল সংখ্যা (rwx=7) — chmod 644 মানে মালিক পড়া-লেখা, বাকিরা শুধু পড়া; আর umask জন্মের মুহূর্তে কেটে দেয় কিছু চাবি (666/777 থেকে AND-NOT) — তোমার হাত না ছুঁয়েই।",
  recall: {
    q: "দলিল-দালানের এক ফাইলে দরকার: মালিক পড়বে-লিখবে-চালাবে, দল পড়বে-চালাবে, অন্যরা কিছুই না। অক্টাল সংখ্যাটা কী, কোন আদেশ? আর নতুন ফাইল ডিফল্টে 644 হয় কেন — umask 022-এর হিসাবটা বলো।",
    qen: "A file needs owner rwx, group r-x, others nothing. Which octal, which command? And why does a new file default to 644 — walk the umask 022 math.",
    a: "অক্টাল: rwx=4+2+1=7 (মালিক), r-x=4+0+1=5 (দল), ---=0 (অন্য) → chmod 750 script.sh। নতুন ফাইল 644-এর হিসাব: ফাইলের জন্ম-ভিত্তি 666 (rw-rw-rw-); umask 022 কাটে-দেয় গ্রুপ-লেখা (2) আর অন্য-লেখা (2) — 666 AND-NOT 022 = 644 (rw-r--r--)। ফোল্ডারের ভিত্তি 777, তাই 777−022 = 755 (x মানে ভেতরে ঢোকা)। মনে রেখো: umask পড়ার দিক কাটে না, লেখার দিক কাটে; আর chmod -R 777 কখনো নয় — দরজার চাবি সবার হাতে দেওয়া মানে দরজাই না রাখা।",
    aen: "Octal: rwx=4+2+1=7 (owner), r-x=5 (group), ---=0 (others) → chmod 750 script.sh. New-file 644 math: birth base for files is 666 (rw-rw-rw-); umask 022 clears group-write (2) and other-write (2) — 666 AND-NOT 022 = 644 (rw-r--r--). Directories base 777, so 777−022 = 755 (x means enter). Remember: umask never clears read, only write/execute; and chmod -R 777 is never the answer — handing everyone every key is having no door at all.",
    you: "touch t.sh && ls -l t.sh && chmod 750 t.sh && ls -l t.sh && umask && stat -c '%a' t.sh"
  },
  story: `<p class="scene-setting">দলিল-দালানের চাবি-ঘরে বসেন মা-জনাব রহিমা খাতুন — শহরের সবচেয়ে সাবধানী চাবি-রক্ষক। তাঁর নিয়ম: প্রতিটা ঘরের তিন ধারে তিন ধরনের চাবি — পড়ার (r), লেখার (w), ঢোকার (x) — আর প্রতিটা চাবির তিন হাত: মালিক, দল, বাইরের লোক। সংখ্যায় সহজ: পড়া=৪, লেখা=২, ঢোকা=১; যোগ করলেই এক ঘরের চাবির হিসাব (rwx = ৭)। কেরানিরা জিজ্ঞেস করে: সাহেব, নতুন কাগজে চাবি কে দেয়? রহিমা খাতুন হাসেন: কেউ না — জন্মের মুহূর্তে সব-চাবির ভিত্তি (666/777) থাকে, তারপর দপ্তরের নিয়ম (umask) কেটে দেয় যা কাটার — আমাদের দপ্তরে 022: গ্রুপ আর বাইরের লোকের লেখার চাবি জন্মতেই নেই। এক তরুণ কেরানি একদিন সব ঘরে সব চাবি দিয়ে দিয়েছিল (chmod 777) — রহিমা খাতুন সেদিন শহরের সব দরজা খুলে দেওয়ার মতো গোলমাল দেখেছিলেন; তারপর থেকে নিয়ম: যতটুকু দরকার, ততটুকু চাবি।</p>
<p class="scene-setting en">In the Records Building's key room sits Mrs. Rahima Khatun — the city's most careful key-keeper. Her rule: every room has three kinds of keys on three sides — read (r), write (w), enter (x) — and every key has three hands: owner, group, others. Numbers make it easy: read=4, write=2, enter=1; sum them for one side's key-count (rwx = 7). Clerks ask: who grants keys to a new paper? She smiles: no one — at birth the full base exists (666/777), then the department's rule (umask) cuts what it cuts — ours is 022: group and others are born without write-keys. A young clerk once handed every key to every room (chmod 777) — she saw chaos like every door in town flung open; since then the rule: as much key as needed, never more.</p>

<div class="code-block"># চাবির হিসাব — ৪২১:
#   r=4  w=2  x=1   |  u(মালিক) g(দল) o(অন্য)
#   rwx = 7, r-x = 5, rw- = 6, r-- = 4, --- = 0
chmod 750 deploy.sh    # মালিক:সব, দল:পড়া+চালানো, অন্য:কিছু না
chmod u+x script.sh     # প্রতীকী: মালিকে +x
ls -l deploy.sh         # -rwxr-x--- ← দেখা যাচ্ছে তাই

# মালিক বদল:
chown user:group file   # মালিক ও দল একসাথে
sudo chown root:www data/   # অন্যের জিনিসে sudo

# জন্মের নিয়ম — umask (AND-NOT, বিয়োগ নয়):
umask                   # দেখায় 0022
#   ফাইলের ভিত্তি 666: rw-rw-rw-
#   umask 022 কাটে: গ্রুপ-w (2), অন্য-w (2)
#   666 AND-NOT 022 → 644: rw-r--r--
#   ফোল্ডারের ভিত্তি 777 → 755: rwxr-xr-x
umask 077               # এখন থেকে জন্মাবে 600/700 — শুধু মালিক
touch fresh.txt && ls -l fresh.txt   # -rw------- দেখো

# স্ক্রিপ্ট চালানোর চাবি:
./script.sh             # দরকার x-bit: chmod +x script.sh
bash script.sh          # x-bit ছাড়াও চলে — bash-ই পড়ে

# সতর্কতা-সারি:
#   • chmod -R 777 কখনো নয় — সব-চাবি = দরজা নেই
#   • কারও কারও ফাইলে হঠাৎ s (setuid) দেখলে খোঁজ নাও
#   • উৎসের বাইরের ফাইল স্ক্যান-করা ছাড়া chmod নয়</div>

<table class="kv-table">
<tr><th>লক্ষণ</th><th>অক্টাল</th><th>মানে</th></tr>
<tr><td class="hl">rwxr-x---</td><td>750</td><td>স্ক্রিপ্ট: মালিক চালায়, দল দেখে-চালায়</td></tr>
<tr><td class="hl">rw-r--r--</td><td>644</td><td>দলিল: মালিক লেখে, বাকিরা পড়ে</td></tr>
<tr><td class="hll">rwxr-xr-x</td><td>755</td><td>ফোল্ডার: সবাই ঢোকে, মালিক লেখে</td></tr>
<tr><td class="hl">rw-------</td><td>600</td><td>গোপন: শুধু মালিক</td></tr>
<tr><td class="hl">umask 022</td><td>—</td><td>জন্মে 644/755 (AND-NOT)</td></tr>
</table>

<div class="diagram">
<div class="diag-title">চাবি-ঘরের নয় ঘর — The Nine Locks</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar60d6" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="30" width="160" height="40" rx="10"/><text class="lbl" x="95" y="48">মালিক (u)</text><text class="lbl-sm" x="95" y="64">rwx = 4+2+1 = 7</text>
<rect class="node" x="15" y="85" width="160" height="40" rx="10"/><text class="lbl" x="95" y="103">দল (g)</text><text class="lbl-sm" x="95" y="119">r-x = 4+0+1 = 5</text>
<rect class="node" x="15" y="140" width="160" height="40" rx="10"/><text class="lbl" x="95" y="158">অন্য (o)</text><text class="lbl-sm" x="95" y="174">--- = 0</text>
<rect class="node-cyan" x="230" y="85" width="120" height="40" rx="10"/><text class="lbl-cyan" x="290" y="103">750</text><text class="lbl-sm" x="290" y="119">rwxr-x---</text>
<rect class="node-leaf" x="415" y="85" width="130" height="40" rx="10"/><text class="lbl-leaf" x="480" y="103">chmod 750</text><text class="lbl-sm" x="480" y="119">আদেশ</text>
<line x1="175" y1="50" x2="226" y2="95" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d6)"/>
<line x1="175" y1="105" x2="226" y2="105" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d6)"/>
<line x1="175" y1="160" x2="226" y2="115" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d6)"/>
<line x1="350" y1="105" x2="411" y2="105" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d6)"/>
</svg>
<div class="diag-cap">তিন ধার × তিন চাবি → অক্টাল তিন সংখ্যা; chmod বসায়, umask জন্ম থেকে কাটে।</div>
</div>

<div class="callout warn"><span="co-icon">⚠️</span><div><strong>চাবি-রক্ষকের সতর্কতা:</strong> chmod -R 777 "মুক্তি" নয় — ওটা প্রতিটা দরজা থেকে তালা তোলা; সমস্যা সমাধানের সঠিক রাস্তা মালিক/দল ঠিক করা (chown) বা গ্রুপ-সদস্যতা। sudo চালালে মনে রেখো — ও সব চাবির মাস্টার-কী; প্রতিটা ব্যবহারের লগ রাখো মনে। আর setuid-বিট (s) থাকলে প্রোগ্রামটি মালিকের চাবিতে চলে — অপরিচিত সেটআপে দেখলে খোঁজ নাও।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span></div><div><strong>The key-keeper's caution:</strong> chmod -R 777 is not freedom — it is removing every lock from every door; the real fixes are ownership (chown) or group membership. With sudo remember: it is the master-key — log every use mentally. And a setuid bit (s) means the program runs with its owner's keys — investigate any you did not set.</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ সব-চাবির কেরানি</div>chmod -R 777 দিয়ে "ঠিক" · মালিক/দল অজানা · umask শুনেনি · কেন 644 জানে না</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ রহিমা খাতুনের রীতি</div>৪২১-হিসাব মুখস্থ নয়, বোঝা · 750/644 মানে মুখে মুখে · umask জন্ম-নিয়ম হিসাব করে · যতটুকু দরকার ততটুকু চাবি</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">r=4 w=2 x=1</div><div class="sc-label">চাবির মান</div></div>
<div class="stat-card"><div class="sc-num">750</div><div class="sc-label">u=rwx,g=rx,o=—</div></div>
<div class="stat-card"><div class="sc-num">umask 022</div><div class="sc-label">জন্মে 644/755</div></div>
<div class="stat-card"><div class="sc-num">chmod +x</div><div class="sc-label">স্ক্রিপ্টের চালানোর চাবি</div></div>
</div>

<p class="verse">আমানতের পাঠ: প্রতিটা চাবি এক দায় — কুরআন বলে আমানত হকদারকে ফিরিয়ে দাও (৪:৫৮); চাবি-ঘরও: যার দরকার তার চাবি, বাড়তি চাবি মানে বাড়তি দায়। যে সবার হাতে সব চাবি দেয়, সে আমানত রক্ষা করে না — বোঝা এড়ায়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🗝️ r=4 w=2 x=1; তিন ধার তিন সংখ্যা (750); umask জন্ম থেকে কাটে (666→644); 777 কখনো নয়।<br>কারণ: যতটুকু দরকার ততটুকু চাবি — বাকিটা দরজা নেই।</div></div>`,
  senior: {
    title: "চাবি-ঘরের খাতা — The Key-Room Ledger",
    body: `<ul class="checklist">
<li><strong>rwx = 4+2+1</strong> — তিন ধার (u/g/o) তিন সংখ্যা: 750, 644, 600।</li>
<li><strong>chmod / chown</strong> — চাবি বসাও / মালিক বদলাও; -R সাবধানে।</li>
<li><strong>umask 022</strong> — জন্মের ভিত্তি 666/777 থেকে AND-NOT; 644/755 ফল।</li>
<li><strong>chmod +x</strong> স্ক্রিপ্টে; <strong>sudo</strong> = মাস্টার-কী, দায়সহ।</li>
<li><strong>chmod -R 777 নিষেধ</strong> — সমাধান chown/গ্রুপ, তালা তোলা নয়।</li>
</ul>`
  }
});



