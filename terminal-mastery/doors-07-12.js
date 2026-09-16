// ════════════════════════════════════════
// Book 60 · The City of Canals — v2 Complete Reference (20 doors)
// নহরের নগরী · terminal-mastery · hue 195
// ════════════════════════════════════════
// Door containers loaded by index.html; engine gates on num order.

// ── DOOR 4 · জালিম মিয়ার জাল — Jalim Mia's Net ──
doors.push({
  num: 7,
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
<marker id="arrowJ" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#22d3ee"/></marker>
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
<div class="diag-cap">ছোট জাল, লম্বা সারি — Unix দর্শনের জলজ-রূপ; সারিটাই দরজা 20-এর সিংহাসনের প্রথম ধাপ।</div>
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
<li>কোন কাজ দুইবার? সারিটা একবার লিখে <strong>.bashrc-এ ফাংশন</strong> বানিয়ে ফেলো (দরজা 14)।</li>
</ul>`
  }
});

// ── DOOR 8 · সুতা-শিল্পীর কারখানা — The Thread-Artist's Workshop ──
doors.push({
  num: 8,
  icon: "🧵",
  color: "#38bdf8",
  name: "সুতা-শিল্পীর কারখানা",
  subtitle: "The Thread-Artist's Workshop",
  tech: "sed · s///flags · addresses · -i.bak · -d · -n p",
  spirit: "ইসলাহ — পুরোটা নয়, যেটুকু দরকার সেটুকু মেরামত",
  secret: "sed হলো সুতা-শিল্পী: পুরো কাপড় নতুন করে বুনে না — যে সুতাটা ছেঁড়া শুধু সেটা বদলে দেয়: s/পুরোনো/নতুন/ এ তিন চাবি — গ (সব সারি), i (ছোট-বড় না দেখা), খাতার ঠিকানা (2d, /স্টার্ট/,/শেষ/); আর -i.bak মানে কাটার আগে ফটোকপি রাখা — এক পতাকায় নিরাপত্তা।",
  recall: {
    q: "config ফাইলে সব লাইনের debug=true কে debug=false করতে হবে, আর ৩ নম্বর সারি মুছতে হবে — ব্যাকআপ রেখে। এক আদেশে (বা দুইয়ে) কীভাবে?",
    qen: "Flip every debug=true to debug=false in a config, delete line 3, keep a backup. How?",
    a: "ব্যাকআপ-সহ বদল: sed -i.bak 's/debug=true/debug=false/g' config.ini — -i.bak আগে config.ini.bak বানিয়ে রাখে, তারপর মূল ফাইলে লেখে। s///g এর g মানে প্রতি লাইনের সব মিল (g ছাড়া শুধু প্রথমটা)। সারি মোছা: sed -i '3d' config.ini — d = delete; ঠিকানা 3 মানে শুধু তৃতীয় সারি। শেষ দুই পাথ: ① আগে শুধু দেখতে চাইলে -i বাদ দাও — sed স্ক্রিনে দেখায়, ফাইল ছোঁয় না; ② একাধিক কাজ একসাথে: sed -i.bak -e 's/a/b/g' -e '/^#/d' file — কমেন্ট-লাইন মুছে বদলও।",
    aen: "Backup-then-edit: sed -i.bak 's/debug=true/debug=false/g' config.ini — -i.bak first makes config.ini.bak, then edits in place. The g in s///g = every match per line (without g, only the first). Line deletion: sed -i '3d' config.ini — d = delete, address 3 = third line only. Two pro habits: ① drop -i to preview on screen (file untouched); ② chain jobs: sed -i.bak -e 's/a/b/g' -e '/^#/d' file — delete comment lines AND substitute.",
    you: "printf 'a=1\\nb=2\\nc=3\\n' > f.ini && sed 's/2/TWO/' f.ini && sed -i.bak '2d' f.ini && cat f.ini f.ini.bak"
  },
  story: `<p class="scene-setting">পুরান শহরের সুতা-শিল্পী জনাব ফজলুল হক কাপড় মেরামত করেন না ঢালাওভাবে — তাঁর খ্যাতি কথাবার্তায়: যে সুতা ছেঁড়ে, শুধু সেটাই বদলাই। কাপড় এলে তিনি তিনটা চিহ্ন দেখেন: কোথায় (ঠিকানা — কোন সারি, কোন অংশ), কী (প্যাটার্ন — কোন সুতা), কতটুকু (গ = সব, নইলে প্রথমটা)। তাঁর বিখ্যাত তিন নিয়ম: প্রথমত, কাটার আগে ফটোকপি (-i.bak) — মেরামত ভুল হলে মূলটা হারায় না; দ্বিতীয়ত, আগে পরীক্ষা-পর্দায় দেখাও (-i বাদ) — কাপড় ছোঁয়ার আগে নকশা দেখাও; তৃতীয়ত, যেটুকু বদলাবে ঠিক সেটুকু (g-র বিবেচনা)। কেরানি একবার জিজ্ঞেস করেছিল: সাহেব, আমি পুরো কাপড় ধুয়ে ফেলি না কেন? হক সাহেব বললেন: কাপড় ধোয়া আর সুতা বদল এক নয় — প্রথমটা সব বদলায়, দ্বিতীয়টা শুধু দরকারটা। sed-ও তাই: s/// শুধু মিল বদলায়, বাকি সব অক্ষত রাখে।</p>
<p class="scene-setting en">Old-city thread-artist Fazlul Haq never mends wholesale — his motto: change only the thread that is torn. A cloth arrives; he marks three things: WHERE (address — which line, which span), WHAT (pattern), HOW MUCH (g = all, else first). Three famous rules: first, photocopy before cutting (-i.bak); second, preview on the screen first (drop -i); third, change only what needs changing (mind your g). A clerk once asked why he does not just wash the whole cloth. He said: washing is not thread-work — one changes everything, the other only the needful. sed is the same: s/// replaces the match; everything else stays untouched.</p>

<div class="code-block"># মূল কাজ — s/পুরোনো/নতুন/পতাকা:
sed 's/debug=true/debug=false/' f     # প্রতি লাইনে প্রথম মিল
sed 's/debug=true/debug=false/g' f   # প্রতি লাইনে সব মিল
sed 's/DEBUG=true/debug=false/gi' f  # i: ছোট-বড় অক্ষর উপেক্ষা
# দেখাও আগে, ছোঁও পরে:
sed 's/a/b/g' f          # স্ক্রিনে ফল — ফাইল অক্ষত (ড্রাই-রান!)
sed -i.bak 's/a/b/g' f   # ব্যাকআপ-সহ মূল ফাইলে লেখা

# ঠিকানা-সহ কাজ:
sed '3d' f               # শুধু ৩ নম্বর সারি মুছো
sed '2,5d' f             # ২–৫ নম্বর সারি মুছো
sed '/^#/d' f            # # দিয়ে শুরুর সারি (কমেন্ট) মুছো
sed '/START/,/END/s/old/new/g' f   # START..END অংশে বদল
sed -n '10,20p' f        # শুধু ১০–২০ সারি দেখাও (-n + p)

# শক্তিশালী টুকিটাকি:
sed 's/["\\t ]*$//' f    # লাইনের শেষের স্পেস-ট্যাব ছাঁটো
sed 's/.*/\\U&/' f        # পুরো লাইন বড়-অক্ষর (GNU)
echo "path/to/file" | sed 's|.*/||'   # শেষ / পর্যন্ত বাদ — ফাইলনাম

# একাধিক কাজ এক আদেশে:
sed -i.bak -e 's/foo/bar/g' -e '/^#/d' -e '/^$/d' f
#   foo→bar, কমেন্ট-সারি মুছো, খালি-সারি মুছো</div>

<table class="kv-table">
<tr><th>লক্ষণ</th><th>কাজ</th><th>মনে রাখার ছল</th></tr>
<tr><td class="hl">s/old/new/g</td><td>সব মিল বদল</td><td>g = global</td></tr>
<tr><td class="hll">-i.bak</td><td>ব্যাকআপ-সহ মূলে লেখা</td><td>ফটোকপি আগে, কাটা পরে</td></tr>
<tr><td class="hl">3d / 2,5d</td><td>সারি মোছা</td><td>ঠিকানা + d</td></tr>
<tr><td class="hl">/^#/d</td><td>প্যাটার্ন-সারি মোছা</td><td>মিললে বাদ</td></tr>
<tr><td class="hll">-n '10,20p'</td><td>শুধু অংশ দেখা</td><td>-n চুপ + p প্রিন্ট</td></tr>
</table>

<div class="diagram">
<div class="diag-title">সুতা-শিল্পীর তিন প্রশ্ন — The Three Questions</div>
<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar60d8" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="65" width="140" height="44" rx="10"/><text class="lbl" x="85" y="83">কাপড় (ফাইল)</text><text class="lbl-sm" x="85" y="99">লাইনের স্রোত</text>
<rect class="node-cyan" x="195" y="25" width="150" height="40" rx="10"/><text class="lbl-cyan" x="270" y="43">কোথায়? (ঠিকানা)</text><text class="lbl-sm" x="270" y="59">3d · /স্টার্ট/,/শেষ/</text>
<rect class="node-cyan" x="195" y="115" width="150" height="40" rx="10"/><text class="lbl-cyan" x="270" y="133">কী? (প্যাটার্ন)</text><text class="lbl-sm" x="270" y="149">s/old/new/</text>
<rect class="node-hot" x="395" y="70" width="150" height="40" rx="10"/><text class="lbl-hot" x="470" y="88">কতটুকু?</text><text class="lbl-sm" x="470" y="104">g? i? প্রথমটা?</text>
<line x1="155" y1="80" x2="191" y2="50" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d8)"/>
<line x1="155" y1="95" x2="191" y2="130" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d8)"/>
<line x1="345" y1="45" x2="391" y2="83" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d8)"/>
<line x1="345" y1="135" x2="391" y2="97" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d8)"/>
</svg>
<div class="diag-cap">ঠিকানা × প্যাটার্ন × পরিসর — এই তিন প্রশ্নের উত্তরই sed-আদেশ।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সুতা-শিল্পীর সতর্কতা:</strong> sed -i (ব্যাকআপ-প্রাপ্তি ছাড়া) macOS/BSD-তে -i '' লাগে, GNU-তে সরাসরি চলে — স্ক্রিপ্ট দুই জগতে চালালে এই পার্থক্য ভাঙবে; সবচেয়ে নিরাপদ ক্রস-প্ল্যাটফর্ম রাস্তা: আগে cp f f.bak, পরে sed -i। রেগেক্সে বিশেষ অক্ষর এস্কেপ করো (স্পেস নয়, কিন্তু . * [ ] \\)। আর মনে রেখো: sed লাইন-ভিত্তিক — একাধিক-লাইনের কাজ জটিল; সেখানে awk (দরজা ৯) বা Perl।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The thread-artist's caution:</strong> bare sed -i needs -i '' on macOS/BSD but works plain on GNU — cross-platform scripts break here; safest road: cp f f.bak first, then sed -i. Escape regex specials (. * [ ] \\). And sed is line-based — multi-line surgery belongs to awk (Door 9) or Perl.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ঢালাও মেরামত</div>হাতে এডিটর খুলে ৫০০ লাইন বদল · -i.bak ছাড়া মূলে লেখা · ড্রাই-রান নয় · g ভুলে প্রথম মিলেই থেমে</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ হক সাহেবের রীতি</div>প্রথমে পর্দায় দেখা (-i বাদ) · -i.bak ফটোকপি · ঠিকানা+প্যাটার্ন+g বিবেচনা · একাধিক কাজ -e চেইনে</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">s///g</div><div class="sc-label">প্রতি লাইনে সব মিল</div></div>
<div class="stat-card"><div class="sc-num">-i.bak</div><div class="sc-label">ফটোকপি-সহ লেখা</div></div>
<div class="stat-card"><div class="sc-num">/^#/d</div><div class="sc-label">কমেন্ট-সারি মুছো</div></div>
<div class="stat-card"><div class="sc-num">-n 'N,Mp'</div><div class="sc-label">অংশ-দর্শন</div></div>
</div>

<p class="verse">ইসলাহের পাঠ: সংস্কার মানে সব ভাঙা নয় — যেটুকু ত্রুটি, সেটুকু সংশোধন; রাসূল (সা.) শিখিয়েছেন মৃদু ভাষায় ঠিক করা। সুতা-শিল্পীও তাই: কাপড় নয়, সুতা বদল — এবং ফটোকপি রেখে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🧵 কোথায় × কী × কতটুকু = ঠিকানা + s/old/new/ + পতাকা; আগে ড্রাই-রান, পরে -i.bak।<br>কারণ: যে সুতা ছেঁড়ে শুধু সেটা বদলাও — ফটোকপি রেখে।</div></div>`,
  senior: {
    title: "সুতা-শিল্পীর খাতা — The Thread-Artist's Ledger",
    body: `<ul class="checklist">
<li>ড্রাই-রান আগে: <strong>sed 's/a/b/g' f</strong> (স্ক্রিনে) → তারপর <strong>-i.bak</strong>।</li>
<li>পতাকা: <strong>g</strong> (সব মিল), <strong>i</strong> (কেস-অগ্রাহ্য), <strong>প্রথম</strong> (g ছাড়া)।</li>
<li>ঠিকানা: <strong>3d, 2,5d, /pattern/d, /A/,/B/</strong> — লাইন-নির্বাচন।</li>
<li><strong>-n 'N,Mp'</strong> — অংশ দেখা; <strong>-e</strong> চেইনে বহু কাজ।</li>
<li>ক্রস-প্ল্যাটফর্ম: <strong>cp + sed -i</strong> সবচেয়ে নিরাপদ (macOS -i '' ফাঁদ)।</li>
</ul>`
  }
});

// ── DOOR 9 · হিসাবি পাখির ছাদ — The Counting-Bird's Roof ──
doors.push({
  num: 9,
  icon: "🦜",
  color: "#22d3ee",
  name: "হিসাবি পাখির ছাদ",
  subtitle: "The Counting-Bird's Roof",
  tech: "awk · $1/$NF · NR/NF · BEGIN/END · -F · arrays",
  spirit: "হিসাব — ন্যায্য বণ্টনের মাপকাঠি",
  secret: "awk প্রতি লাইনকে কলাম-বিশিষ্ট খাতা ধরে: $1 প্রথম ঘর, $NF শেষ ঘর, NR কত নম্বর সারি; শর্ত{কাজ} ছাঁচে লেখো — যে সারি মেলে তার ঘর নিয়ে গণিত; আর END{} ঘরে জমানো সব হিসাবের চূড়ান্ত পাতা — শুরুতে BEGIN{}, শেষে END{}, মাঝে প্রতি-সারির নিয়ম।",
  recall: {
    q: "access.log ফাইলে প্রতি লাইনে স্পেস-বিভাজিত: IP তারিখ পাথ স্ট্যাটাস সাইজ। (১) প্রতি IP কত রিকোয়েস্ট, (২) সব রিকোয়েস্টের মোট সাইজ — দুটো awk আদেশ কী?",
    qen: "Each access.log line: IP date path status size. (1) request count per IP, (2) total size of all requests — the two awk commands?",
    a: "① প্রতি-IP গণনা: awk '{count[$1]++} END {for (ip in count) print ip, count[ip]}' access.log — $1 = প্রথম কলাম (IP); অ্যারে count[] প্রতি লাইনে এক বাড়ায়; END-এ সব জমানো কী-ভ্যালু ছাপে। ② মোট সাইজ: awk '{sum += $NF} END {print sum}' access.log — $NF = শেষ কলাম; প্রতি লাইনে sum-এ যোগ, শেষে মুদ্রণ। দুটোর সাধারণ কাঠামো: শর্ত-বা-বিনা-শর্ত {কাজ} + END {চূড়ান্ত-কাজ}। বোনাস: NR মানে সারি-নম্বর (awk 'NR==1{next}' হেডার বাদ), -F',' CSV-র জন্য কমা-বিভাজক।",
    aen: "① Per-IP: awk '{count[$1]++} END {for (ip in count) print ip, count[ip]}' access.log — $1 is column one; the count[] array increments per line; END prints the accumulated keys. ② Total: awk '{sum += $NF} END {print sum}' access.log — $NF is the last column; add each line, print at the end. Common skeleton: pattern{action} + END{final}. Bonus: NR is the row number (skip headers with NR==1{next}); -F',' makes comma the splitter for CSV.",
    you: "printf 'ip1 d p 200 100\\nip2 d p 404 50\\nip1 d p 200 70\\n' > /tmp/a.log && awk '{c[$1]++} END{for(i in c) print i, c[i]}' /tmp/a.log && awk '{s+=$NF} END{print s}' /tmp/a.log"
  },
  story: `<p class="scene-setting">পাখির বাজারের হিসাবি পাখি মিঠুন সবার আগে সকালে জেগে ওঠে — মালিক বলেন ও প্রতিটা খাতার সারিকে ঘর-ভাগ করে পড়ে: প্রথম ঘর নাম, শেষ ঘর দাম ($1, $NF), আর মনে রাখে কত নম্বর সারিতে আছে (NR)। মালিক যা বলেন মিঠুন তা-ই করে — কিন্তু নিয়ম তিন রকমের: শুরুর কাজ (BEGIN — খাতা খোলা, শিরোনাম লেখা), প্রতি-সারির কাজ (মূল হিসাব), শেষের কাজ (END — মোট বের করা)। একদিন মালিক জিজ্ঞেস করলেন: কোন ক্রেতা কতবার এলো, আর সব মিলিয়ে কেনাকাটা কত? মিঠুন দুই নিয়মে উত্তর দিল: প্রতি সারিতে ক্রেতার নামে একটা টিক (count[$1]++) জমাও, শেষে টিকের খাতা ছাপো; আর প্রতি সারির শেষ-ঘর যোগ করে রাখো, শেষে মুট ছাপো। মালিক হাসলেন — এটাই তো হিসাবের আসল গোঁড়া: জমাও, শেষে দেখাও।</p>
<p class="scene-setting en">Mithun the counting-bird wakes first in the bird market — the owner says he reads every ledger row as boxes: first box the name, last box the price ($1, $NF), and he remembers the row number (NR). He follows three kinds of orders: the opening job (BEGIN — open the ledger, write the header), the per-row job (the main counting), the closing job (END — print the totals). One day the owner asked: which customer came how many times, and what was the total spend? Mithun answered in two rules: per row, add a tick under the customer's name (count[$1]++), and at the end print the tick-book; also add each row's last box to a running sum, print it at the end. The owner smiled — that is accounting's core: accumulate, then reveal.</p>

<div class="code-block"># সারি-কে-ঘরভাগ — $1 থেকে $NF:
echo "rahim 4 apple 120" | awk '{print $1, $NF}'
#   rahim 120        ← প্রথম ও শেষ ঘর
awk '{print NR, $0}' f      # সারি-নম্বর সহ পুরো লাইন
awk 'NR>1' f                # হেডার (সারি ১) বাদ
awk -F',' '{print $2}' data.csv   # কমা-বিভাজক CSV

# শর্ত{কাজ} — যে সারি মেলে:
awk '$3 == "FAIL" {print $1}' f       # ৩য় ঘর FAIL হলে নাম ছাপো
awk '$NF > 1000 {n++} END{print n}' f # ১০০০+ মানের গণনা

# অ্যারে-হিসাব — গ্রুপে ভাগ:
awk '{c[$1]++} END{for(k in c) print k, c[k]}' f
#   প্রতি কী-তে টিক জমে; END-এ খাতা ছাপা
awk '{s[$1]+=$NF} END{for(k in s) print k, s[k]}' f
#   প্রতি কী-তে যোগফল — গ্রুপ-মোট!

# BEGIN/END — খাতার প্রথম ও শেষ পাতা:
awk 'BEGIN{print "খাতা শুরু"} {s+=$2} END{print "মোট:", s}' f

# বাস্তব: অ্যাকসেস-লগ বিশ্লেষণ:
awk '{c[$1]++} END{for(i in c) print c[i], i}' access.log | sort -rn | head
#   সবচেয়ে ব্যস্ত IP-র তালিকা (দরজা ৭-এর জালের সাথে জুড়ে যায়)</div>

<table class="kv-table">
<tr><th>চিহ্ন</th><th>মানে</th><th>উদাহরণ</th></tr>
<tr><td class="hl">$1 … $NF</td><td>ঘর: প্রথম … শেষ</td><td>print $1, $NF</td></tr>
<tr><td class="hll">NR / NF</td><td>সারি-নম্বর / ঘর-সংখ্যা</td><td>NR==1 হেডার, NF কলাম-গণনা</td></tr>
<tr><td class="hl">-F','</td><td>বিভাজক কমা</td><td>CSV পড়া</td></tr>
<tr><td class="hl">শর্ত{কাজ}</td><td>মিললে কাজ</td><td>$3=="FAIL"{print}</td></tr>
<tr><td class="hll">arr[k]++</td><td>গ্রুপ-গণনা অ্যারে</td><td>c[$1]++ … END for</td></tr>
</table>

<div class="diagram">
<div class="diag-title">হিসাবি পাখির খাতা — The Counting Ledger</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar60d9" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="70" width="140" height="44" rx="10"/><text class="lbl" x="85" y="88">সারি-স্রোত</text><text class="lbl-sm" x="85" y="104">প্রতি লাইন এক এক করে</text>
<rect class="node-cyan" x="195" y="25" width="150" height="40" rx="10"/><text class="lbl-cyan" x="270" y="43">প্রতি-সারি নিয়ম</text><text class="lbl-sm" x="270" y="59">শর্ত{কাজ} — c[$1]++</text>
<rect class="node-cyan" x="195" y="120" width="150" height="40" rx="10"/><text class="lbl-cyan" x="270" y="138">ঘর-গণিত</text><text class="lbl-sm" x="270" y="154">s += $NF</text>
<rect class="node-leaf" x="405" y="70" width="140" height="44" rx="10"/><text class="lbl-leaf" x="475" y="88">END-পাতা</text><text class="lbl-sm" x="475" y="104">for(k in c) print</text>
<line x1="155" y1="85" x2="191" y2="50" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d9)"/>
<line x1="155" y1="100" x2="191" y2="135" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d9)"/>
<line x1="345" y1="45" x2="401" y2="83" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d9)"/>
<line x1="345" y1="140" x2="401" y2="102" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d9)"/>
</svg>
<div class="diag-cap">প্রতি সারিতে জমা, END-এ মুট — হিসাবি পাখির দুই-পাতার খাতা।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>হিসাবি পাখির সতর্কতা:</strong> awk-এর ডিফল্ট বিভাজক হোয়াইটস্পেস-গুচ্ছ — ট্যাব/স্পেস মিশ্রিত লগ ঠিকঠাক ভাগ হয়; কিন্তু CSV-তে কোট-করা কমা (ভেতরে কমা-সহ নাম) ঘর ভেঙে দেয় — সেখানে -F'","' জাতীয় কৌশল বা সরাসরি দরজা ১০-এর jq/mlr। আর শেষ-কলাম $NF — কলাম-সংখ্যা বদলালে স্ক্রিপ্ট নীরবে ভুল ঘর ধরবে; নির্ভরযোগ্য লগ-ফরম্যাট আগে নিশ্চিত করো।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The counting-bird's caution:</strong> awk's default splitter is whitespace-runs — mixed tabs/spaces split fine; but quoted commas in CSV break columns — use -F'","' tricks or Door 10's jq/mlr for real CSV. And $NF means LAST column — if the format changes column count, your script silently grabs the wrong box; pin the log format first.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ হাতে-হাতে গণনা</div>চোখে চোখে ৫০০ সারি গোনা · কলাম-সংখ্যা অজানা · গ্রুপ-মোট এক্সেলে নিক্ষেপ · BEGIN/END শুনেনি</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ মিঠুনের রীতি</div>সারি=ঘর ($1…$NF) · শর্ত{কাজ} · অ্যারেতে জমা END-এ মুট · হেডার NR==1 বাদ</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">$NF</div><div class="sc-label">শেষ ঘর</div></div>
<div class="stat-card"><div class="sc-num">NR==1</div><div class="sc-label">হেডার-বাদ</div></div>
<div class="stat-card"><div class="sc-num">c[$1]++</div><div class="sc-label">গ্রুপ-গণনা</div></div>
<div class="stat-card"><div class="sc-num">END{}</div><div class="sc-label">চূড়ান্ত পাতা</div></div>
</div>

<p class="verse">হিসাবের পাঠ: ইসলামে হিসাব-নিকাশ আমানত — "ওয়া য়োয়াক্কিমুনা ... ইয়াওমা ইয়াকুমুন নাস" বলে কেয়ামতের দিনকেই হিসাবের দিন বলা হয়েছে; প্রতিটা আমল জমা হয়, শেষে মুট বেরোয়। হিসাবি পাখির খাতাও তাই: প্রতি সারিতে টিক, END-পাতায় ফল — লুকানো নেই।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🦜 $1..$NF ঘর, NR সারি; শর্ত{কাজ} মাঝে, END{মুট} শেষে; গ্রুপ চাইলে অ্যারে c[k]++।<br>কারণ: জমাও প্রতি সারিতে, দেখাও শেষ পাতায় — হিসাবের স্বভাব এটাই।</div></div>`,
  senior: {
    title: "হিসাবি পাখির খাতা — The Counting-Bird's Ledger",
    body: `<ul class="checklist">
<li>ঘর-ভাগ: <strong>$1…$NF</strong>; সারি-নম্বর <strong>NR</strong>, ঘর-সংখ্যা <strong>NF</strong>; CSV-তে <strong>-F','</strong>।</li>
<li>ছাঁচ: <strong>শর্ত{কাজ}</strong>; হেডার-বাদ <strong>NR==1{next}</strong> বা <strong>NR>1</strong>।</li>
<li>গ্রুপ-হিসাব: <strong>c[$1]++</strong> / <strong>s[$1]+=$NF</strong> + <strong>END{for(k in c)…}</strong>।</li>
<li>বড় পাইপলাইনে awk-এর জায়গা: নির্বাচন+যোগফল; জটিল রেগেক্স-বদল দরজা ৮ (sed)।</li>
<li>ফরম্যাট-নির্ভরতা মনে রেখো — <strong>$NF</strong> কলাম-বদলে ভুল ঘর ধরে।</li>
</ul>`
  }
});

// ── DOOR 10 · গুদাম-রেকর্ডের টেবিল-ঘর — The Warehouse Table-Room ──
doors.push({
  num: 10,
  icon: "📦",
  color: "#38bdf8",
  name: "গুদাম-রেকর্ডের টেবিল-ঘর",
  subtitle: "The Warehouse Table-Room",
  tech: "cut · paste · join · column -t · sort/uniq -c · jq",
  spirit: "সূর্য্যস্থ — জিনিস সাজানো বোঝার প্রথম ধাপ",
  secret: "টেবিল-ডেটার তিন হাত: cut কলাম কাটে (-d, -f), join দুই টেবিলের কমন-কী জুড়ে সারি মেলায়, sort|uniq -c গুনে গুছায়; আর JSON-যুগের গুদাম-রক্ষক jq — . দিয়ে শুরু, [] দিয়ে অ্যারে-ভ্রমণ, {} দিয়ে নতুন আকৃতি: যেকোনো API-র উত্তর ওর হাতে ছেঁকে নাও।",
  recall: {
    q: "users.tsv (uid, name) আর orders.tsv (uid, item) — কোন ক্রেতা কী কিনেছে এক তালিকায়? আর GitHub API-র JSON থেকে শুধু প্রতিটা রিপোর নাম+তারকা কীভাবে ছেঁকে পাবে?",
    qen: "users.tsv (uid, name) and orders.tsv (uid, item) — one list of who bought what? And from GitHub API JSON, filter each repo's name+stars?",
    a: "টেবিল-জোড়া: join -t $'\\t' -1 1 -2 1 users.tsv orders.tsv — -1/-2 প্রতি ফাইলের কী-কলাম; শর্ত: দুই ফাইলই কী-তে sort-করা থাকতে হবে (join-এর লৌহ-শর্ত, নইলে মিল হারায়)। JSON-ছাঁকনি: curl -s api… | jq -r '.[] | \"\\(.name): \\(.stargazers_count)\"' — .[] প্রতি আইটেমে ঢোকে, \\(...) স্ট্রিং-মধ্যে মান বসায়, -r কোট খোলে। সাজানোর জোড়া: sort | uniq -c গণনা-সহ ইউনিক; sort -k2 -n দ্বিতীয় কলামে সংখ্য্য-ক্রম। column -t শেষে টেবিল-সুন্দর।",
    aen: "Table-join: join -t $'\\t' -1 1 -2 1 users.tsv orders.tsv — -1/-2 name the key column per file; iron condition: both files pre-sorted on the key (else matches vanish). JSON filter: curl -s api… | jq -r '.[] | \"\\(.name): \\(.stargazers_count)\"' — .[] walks items, \\(...) interpolates values, -r drops quotes. Ordering pair: sort | uniq -c counts uniques; sort -k2 -n sorts numerically by column 2. Finish with column -t for a tidy table.",
    you: "printf '1\\talam\\n2\\tbd\\n' > u.tsv; printf '1\\tchai\\n2\\tchaal\\n' > o.tsv; join -t $'\\t' u.tsv o.tsv; echo '[{\"n\":\"a\",\"s\":5},{\"n\":\"b\",\"s\":9}]' | jq -r '.[] | \"\\(.n): \\(.s)\"'"
  },
  story: `<p class="scene-setting">গুদাম-মহাজন মোহন সাহেবের টেবিল-ঘরে ঢুকলেই দেখবে সারি-সারি খাতা — কিন্তু তাঁর আসল শক্তি তিন কাজে। কাটা: মোটা খাতা থেকে শুধু দরকারি কলাম ছিঁড়ে নেওয়া (cut -d, -f)। জোড়া: দুই খাতার কমন-নম্বর ধরে সারি মেলানো (join) — তবে শর্ত একটাই, দুই খাতাই নম্বর-ক্রমে সাজানো থাকতে হবে; একদিন সাগরেদ আস-ক্রমের খাতা দিয়েছিল, অর্ধেক মিল হারিয়ে গিয়েছিল। গণনা: একই নাম বারবার এলে গুনে সাজানো (sort | uniq -c)। নতুন যুগে তাঁর গুদামে ঢুকেছে বিদেশি বাক্স — JSON: বন্ধ-বন্ধ করুঞ্জলী-বাক্স, মানুষের চোখে অগোছালো; মোহন সাহেব ওসময় ডাকেন বিশেষ কারিগর jq-কে — . দিয়ে শুরু করে পরতে-পরতে খোলে ([] অ্যারে, {} নতুন রূপ), ঠিক যেমন তিনি খাতার কলাম কাটেন। কারিগরের নিয়ম: JSON অগোছালো নয় — গোছানোর অপেক্ষায়।</p>
<p class="scene-setting en">Walk into warehouse-merchant Mohan Sahib's table-room and you see ledger rows — but his real power is three moves. CUT: tear just the needed column from a thick ledger (cut -d, -f). JOIN: match rows of two ledgers by common number (join) — one iron condition: both ledgers pre-sorted on that number; the day an apprentice handed him unsorted pages, half the matches vanished. COUNT: same names arriving repeatedly get counted and ranked (sort | uniq -c). In the new era his warehouse receives foreign boxes — JSON: brace-wrapped parcels, chaotic to the eye; then he calls the specialist jq — starting with . it opens layer by layer ([] arrays, {} new shapes), exactly like he cuts ledger columns. The specialist's rule: JSON is not messy — it is waiting to be arranged.</p>

<div class="code-block"># কলাম-কাটা:
cut -d':' -f1 /etc/passwd        # : বিভাজক, ১ম ঘর — ইউজার-তালিকা
cut -d',' -f2,4 data.csv         # ২য় ও ৪র্থ ঘর
cut -c1-8 long.txt               # অক্ষর-ভিত্তিক কাটা

# টেবিল-জোড়া (লৌহ-শর্ত: দুই ফাইলই কী-তে sort-করা):
join -t $'\\t' -1 1 -2 1 users.tsv orders.tsv
#   uid name item — এক সারিতে ক্রেতা+কেনা
join -a1 -t $'\\t' u.tsv o.tsv   # -a1: বাম-ফাইলের মিলহীন সারিও রাখো

# গণনা-জোড়া (দরজা ৭-এর জালের পূর্ণ রূপ):
sort ips.txt | uniq -c | sort -rn | head
#   গুনো → নামানো-ক্রম → শীর্ষ

# সুন্দর-টেবিল:
column -t data.tsv               # কলাম-ফাঁক মিলিয়ে সাজায়
paste f1 f2                      # পাশাপাশি জোড়া (উল্টো-কাটা নয়)

# JSON-কারিগর jq:
echo '{"a":1,"b":[10,20]}' | jq '.b[1]'        # 20
curl -s https://api.github.com/users/nodejs/repos | \\
  jq -r '.[] | "\\(.name): \\(.stargazers_count)"' | head
#   .[] প্রতি আইটেম; \\(...) মান-বসানো; -r কোট-মুক্ত
jq '.[] | select(.s > 100)' stars.json        # শর্ত-ছাঁকনি
jq -r '.[] | [.name, .s] | @csv' data.json    # CSV-রূপান্তর!

# শৃঙ্খলা-মন্ত্র: কাটো → জোড়া → গণনা → সাজাও → column -t</div>

<table class="kv-table">
<tr><th>হাত</th><th>আদেশ</th><th>কাজ</th></tr>
<tr><td class="hl">কাটা</td><td>cut -d: -f1</td><td>বিভাজক-ঘর ছেঁড়া</td></tr>
<tr><td class="hll">জোড়া</td><td>join -1 1 -2 1</td><td>কী-মিলে সারি-জোড়া (sort-শর্ত!)</td></tr>
<tr><td class="hl">গণনা</td><td>sort | uniq -c</td><td>ইউনিক + গণনা</td></tr>
<tr><td class="hl">সাজানো</td><td>sort -k2 -n</td><td>কলামে সংখ্য্য-ক্রম</td></tr>
<tr><td class="hll">JSON</td><td>jq -r '.[] | "\\(.x)"'</td><td>অ্যারে-ভ্রমণ + মান-বসানো</td></tr>
</table>

<div class="diagram">
<div class="diag-title">টেবিল-ঘরের তিন হাত — The Table-Room's Three Hands</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar60d10" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="63" width="130" height="44" rx="10"/><text class="lbl" x="80" y="81">দুই খাতা</text><text class="lbl-sm" x="80" y="97">users.tsv + orders.tsv</text>
<rect class="node-cyan" x="185" y="63" width="130" height="44" rx="10"/><text class="lbl-cyan" x="250" y="81">join</text><text class="lbl-sm" x="250" y="97">কী-মিল সারি-জোড়া</text>
<rect class="node-hot" x="355" y="63" width="110" height="44" rx="10"/><text class="lbl-hot" x="410" y="81">sort|uniq -c</text><text class="lbl-sm" x="410" y="97">গণনা-সাজানো</text>
<rect class="node-leaf" x="495" y="63" width="55" height="44" rx="10"/><text class="lbl-leaf" x="522" y="81">column</text><text class="lbl-sm" x="522" y="97">-t</text>
<line x1="145" y1="85" x2="181" y2="85" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d10)"/>
<line x1="315" y1="85" x2="351" y2="85" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d10)"/>
<line x1="465" y1="85" x2="491" y2="85" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d10)"/>
<rect class="cell" x="15" y="122" width="530" height="40" rx="8"/>
<text class="lbl-sm" x="280" y="138">JSON-পথ: jq '.[] | select(.s>100) | "\\(.name)"' — কাটো→ছেঁকো→বসাও, টেবিলের মতোই</text>
<text class="lbl-sm" x="280" y="156">⚠ join-এর আগে দুই ফাইল sort করা বাধ্যতামূলক — নইলে মিল নীরবে হারায়</text>
</svg>
<div class="diag-cap">কাটো → জোড়া → গণনা → সাজাও — টেবিল-ডেটার পূর্ণ শৃঙ্খলা; JSON-এ ওই একই jq-হাতে।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>মহাজনের সতর্কতা:</strong> join-এর আগে sort না করা ফাইল = হারানো মিল — নীরব ব্যর্থতা, কোনো এরর নেই; শৃঙ্খলার প্রথম প্রশ্নই "sort-করা তো?"। CSV-তে কোট-করা কমা cut/join ভেঙে দেয় — সত্যিকারের CSV হলে Python/mlr/jq-র রাস্তা নাও। আর jq-তে ফিল্টার-স্ট্রিং-এ ভেতরের কোট এস্কেপ ('\\(.name)' এর কাঠামো) ভুল হলে নীরবে খালি ফল আসে — আগে ছোট উদাহরণে পরীক্ষা।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The merchant's caution:</strong> unsorted files into join = lost matches — silent failure, no error; the pipeline's first question is always 'sorted yet?'. Quoted commas break cut/join CSVs — for real CSV take the Python/mlr/jq road. And in jq, mis-escaped quotes in the filter ('\\(.name)' structure) silently return empties — test on a tiny sample first.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ আস-ক্রমের খাতা</div>join-এ sort-হীন ফাইল · চোখে পড়া তালিকা হাতে মেলানো · JSON দেখে চোখ বন্ধ · কলাম-কাটা অজানা</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ মোহন সাহেবের রীতি</div>sort-পরীক্ষা আগে · cut/join/uniq -c শৃঙ্খলা · jq-তে .[]+select+\\() · column -t শেষে</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">join</div><div class="sc-label">কী-মিল টেবিল-জোড়া</div></div>
<div class="stat-card"><div class="sc-num">uniq -c</div><div class="sc-label">গণনা-সহ ইউনিক</div></div>
<div class="stat-card"><div class="sc-num">jq -r</div><div class="sc-label">JSON-ছাঁকনি, কোট-মুক্ত</div></div>
<div class="stat-card"><div class="sc-num">column -t</div><div class="sc-label">টেবিল-সাজানো শেষ ছোঁয়া</div></div>
</div>

<p class="verse">সাজানোর পাঠ: জ্ঞান জমা হলেই হয় না — গুছালে বোঝা যায়; সাহাবায়ে কেরাম হাদিস-সংকলনে সনদ-ক্রমে সাজিয়ে সত্য যাচাই করতেন — তালিকা মানেই শৃঙ্খলা। মোহন সাহেবের টেবিল-ঘরও: কাটো, জোড়া, গণনা, সাজাও — তবেই খাতা কথা বলে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📦 cut-কাটো, join-মেলাও (sort আগে!), uniq -c গোনো, jq '.[] | select()' JSON ছেঁকো; column -t সাজাও।<br>কারণ: গোছানো ডেটাই বোঝার দরজা — অগোছালো সংখ্যা নয়।</div></div>`,
  senior: {
    title: "টেবিল-ঘরের খাতা — The Table-Room Ledger",
    body: `<ul class="checklist">
<li>কলাম-কাটা: <strong>cut -d: -fN</strong>; পাশ-জোড়া <strong>paste</strong>।</li>
<li>টেবিল-জোড়া: <strong>join</strong> — দুই ফাইল <strong>আগে sort</strong>, তারপর মিল।</li>
<li>গণনা-শৃঙ্খলা: <strong>sort | uniq -c | sort -rn</strong>।</li>
<li>JSON: <strong>jq -r '.[] | "\\(.k)"'</strong>; শর্তে <strong>select()</strong>; CSV-বাহিরে <strong>@csv</strong>।</li>
<li>শেষ ছোঁয়া <strong>column -t</strong> — চোখের জন্য সাজানো।</li>
</ul>`
  }
});



// ── DOOR 5 · হারুন মাঝির নৌকা-ঘাট — Harun's Boat & Ghat ──
doors.push({
  num: 11,
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
    a: "cmd & দিয়ে পেছনে ছাড়ো (jobs দেখায়, fg %1 ফিরিয়ে আনে, bg চালু-ই রাখে)। টার্মিনাল বন্ধ হলে মৃত্যু এড়াতে: nohup cmd & (HUP উপেক্ষা, nohup.out-এ লেখে) বা disown; আধুনিক পথ tmux/screen-এ চালানো (দরজা 16)। থামাতে: Ctrl+C = SIGINT; জেদি নৌকায় kill -9 (SIGKILL — ধরাই যায় না)। আর প্রতিটা শেষ কমান্ডের হিসাব \$? — ০ মানে সফল, অন্যটা ব্যর্থতার কোড; || আর && দিয়ে পরের নৌকা শর্ত করে ছাড়ো।",
    aen: "Release with cmd & (jobs lists, fg %1 brings back, bg keeps running). To survive terminal close: nohup cmd & (ignores HUP, writes nohup.out) or disown; the modern way is tmux/screen (Door 16). To stop: Ctrl+C = SIGINT; for the stubborn boat, kill -9 (SIGKILL — cannot be caught). And every finished command leaves its account in \$? — 0 means success, else a failure code; chain the next boat conditionally with || and &&."
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
# (আধুনিক পথ: tmux-এ চালাও — দরজা 16-এ দেখবে)

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

# ভুল প্যাঁচি হাতে পরের নৌকা না ছাড়া — দরজা 18-এর সেতু:
make || exit 1             # স্ক্রিপ্টে লাল প্যাঁচি দেখে থেমে যাও</div>

<div class="diagram">
<div class="diag-title">নৌকার জীবনচক্র — A Boat's Life</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowH" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker>
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>হারুনের kill-নীতি:</strong> -৯ শেষ অস্ত্র, প্রথম নয় — SIGKILL-এ নৌকা পরিষ্কার করার সুযোগই পায় না, অর্ধ-লেখা ফাইল আর লক রয়ে যায়। সিঁড়ি মেনে চলো: Ctrl+C → kill → তারপরই -৯। আর একই প্যাঁচি বার বার লাল হলে নৌকা মারা নয় — কারণটা পড়ো (stderr কোথায় গেল? দরজা 3)।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Harun's kill policy:</strong> -9 is the last weapon, not the first — SIGKILL gives the boat no chance to clean up, leaving half-written files and locks. Climb the ladder: Ctrl+C → kill → only then -9. And a token repeatedly red means read the cause, not kill the boat (where did stderr go? Door 3).</div></div>

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
<li>টার্মিনাল বন্ধ হবে? <strong>nohup … &</strong> বা <strong>tmux</strong> (দরজা 16) — SIGHUP-এর হাত থেকে বাঁচাও।</li>
<li>প্রতিটা গুরুত্বপূর্ণ কমান্ডের পরে <strong>echo \$?</strong> — অভ্যাস হোক; পরে && / || দিয়ে শৃঙ্খল।</li>
<li>থামানোর সিঁড়ি: <strong>Ctrl+C → kill → kill -9</strong> — ক্রম ভাঙো না।</li>
<li>PID খুঁজতে <strong>ps aux | grep</strong> — দরজা 7-এর জাল এখানেও কাজে লাগে।</li>
</ul>`
  }
});
