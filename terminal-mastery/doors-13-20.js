// ════════════════════════════════════════
// Book 60 · The City of Canals — v2 Complete Reference (20 doors)
// নহরের নগরী · terminal-mastery · hue 195
// ════════════════════════════════════════
// Door containers loaded by index.html; engine gates on num order.

// ── DOOR 12 · চাঁদ-ঘড়ির ঘর — The Moon-Clock Room ──
doors.push({
  num: 12,
  icon: "⏱️",
  color: "#22d3ee",
  name: "চাঁদ-ঘড়ির ঘর",
  subtitle: "The Moon-Clock Room",
  tech: "date · sleep · at · crontab ৫-ঘর · anacron",
  spirit: "ওয়াক্ত — সময়ের নামায় কাজ",
  secret: "কাজের সময় হলে সে নিজে থেকেই দরজায় কড়া নাড়ে: crontab-এর পাঁচ ঘর (মিনিট ঘণ্টা দিন মাস সপ্তাহ) লিখে দাও, বাকিটা cron-এর হিসাব; একবারের কাজ at দিয়ে, পুনরাবৃত্তির কাজ cron-এ; আর ল্যাপটপ ঘুমালে anacron ঘুম ভেঙে হিসাব মেলায় — প্রতিটা সময়ের এক নাম, এক কাজ।",
  recall: {
    q: "প্রতি সোমবার সকাল ৫টায় ব্যাকআপ-স্ক্রিপ্ট চালাতে হবে, আর আজ রাত ১১টায় একবারের জন্য রিপোর্ট। crontab-লাইন আর at-আদেশ কী হবে?",
    qen: "Backup script every Monday 5am; one-time report tonight at 11. The crontab line and the at command?",
    a: "সাপ্তাহিক: crontab -e খুলে — 0 5 * * 1 /home/me/backup.sh — পাঁচ ঘর: মিনিট(0) ঘণ্টা(5) দিন(*) মাস(*) সপ্তাহ(1=সোম); তারাচিহ্ন মানে প্রতিটা। একবারের: echo '/home/me/report.sh' | at 23:00 — at-এর ভাঁজে কাজ জমা, নির্দিষ্ট সময়ে চালু। দুই সতর্কতা: ① cron-এর ঘর সব সত্য বলে না — ল্যাপটপ বন্ধ থাকলে সেই ওয়াক্ত পাস (anacron / systemd-timer ওষুধ); ② আউটপুট হাওয়ায় যায় — স্ক্রিপ্টে লগ-ফাইলে লেখা (>> /home/me/cron.log 2>&1), নইলে ব্যর্থতা নীরব।",
    aen: "Weekly: crontab -e → 0 5 * * 1 /home/me/backup.sh — five fields: minute(0) hour(5) dom(*) month(*) dow(1=Mon); asterisk = every. One-time: echo '/home/me/report.sh' | at 23:00 — at holds the job till the clock strikes. Two cautions: ① cron assumes the machine is awake — a sleeping laptop misses the waqt (anacron / systemd timers are the cure); ② output evaporates — write to a log inside the script (>> /home/me/cron.log 2>&1), else failure is silent.",
    you: "crontab -l; (crontab -l; echo '*/2 * * * * date >> /tmp/tick.log') | crontab -; sleep 130; tail -3 /tmp/tick.log; crontab -l | sed '\\$d' | crontab -"
  },
  story: `<p class="scene-setting">চাঁদ-ঘড়ির ঘরের রক্ষক বদরুল আলম সাহেব সময় মাপেন চাঁদ-ঘড়িতে — কিন্তু তাঁর আসল শক্তি ওয়াক্তের খাতা। প্রতিটা কাজের নিজস্ব সময়-ঘর আছে: পাঁচটা ঘরে লেখা যায় কখন (মিনিট, ঘণ্টা, দিন, মাস, সপ্তাহ), শেষে কী (আদেশ)। তাঁর দুই ফর্মান: প্রতিদিন ফিরে আসা কাজ খাতার মূল ঘরে (cron), আর কাল-রাতের মতো একবারের কাজ পাশের ট্রে-তে (at)। সাগরেদদের সবচেয়ে বড় শিক্ষা দুটো: প্রথমত, ওয়াক্ত পাস হলে কাজ ফেরে না — ঘড়ি-ঘুমানো ল্যাপটপের জন্য তিনি রাখেন anacron-নামের জাগ্রত-হিসাবি, যে জেগে দেখে কোন ওয়াক্ত বাদ পড়েছে তা পূরণ করে; দ্বিতীয়ত, প্রতিটা কাজের খবর লগ-খাতায় লেখো — নীরব কাজ মানে হারানো কাজ।</p>
<p class="scene-setting en">Badrul Alam keeps the Moon-Clock Room — his real power is the waqt (time) ledger. Every job gets its own five-room time address: minute, hour, day-of-month, month, day-of-week, then the command. Two filing rules: recurring work in the main ledger (cron), one-time work in the side tray (at). Two lessons for apprentices: first, a missed waqt does not return — for sleep-prone laptops he keeps anacron, the waking accountant who catches up missed runs; second, every job writes to the log-ledger — silent work is lost work.</p>

<div class="code-block"># এখনকার সময়:
date                          # মঙ্গলবার ১৬ সেপ্টেম্বর ২০২৬ ...
date +%F_%T                   # 2026-09-16_14:23:05 (ফাইলনামের জন্য)
date -d "yesterday" +%F       # গতকাল (GNU)
date -v-1d +%F                # গতকাল (macOS/BSD)

# পাঁচ ঘরের খাতা — crontab -e:
#  মিনিট ঘণ্টা দিন মাস সপ্তাহ  আদেশ
#  ─────────────────────────────────────
   0  5  *  *  1   /home/me/backup.sh    # সোম ৫টা
  */10 *  *  *  *   /home/me/ping.sh     # প্রতি ১০ মিনিটে
  30 2  1  *  *   /home/me/cleanup.sh   # ১ তারিখ রাত ২:৩০
#   */N = প্রতি N ধাপে; 1 = সোমবার (0/7=রবি)

# একবারের কাজ — at:
echo '/home/me/report.sh' | at 23:00
echo 'reboot' | at 02:00 tomorrow
atq                          # জমা-তালিকা; atrm 1 = বাতিল

# লগ-না-থাকলে নীরব মৃত্যু:
0 5 * * 1 /home/me/backup.sh >> /home/me/cron.log 2>&1

# ঘুমন্ত-মেশিনের ওষুধ:
#   ল্যাপটপ বন্ধ থাকলে cron-ওয়াক্ত পাস — anacron
#   (দিন-ভিত্তিক হিসাব, জেগে উঠে পূরণ করে) বা
#   systemd-run --on-calendar=Mon..Fri 09:00 cmd

# পরীক্ষা-ছল: প্রতি ২ মিনিটে টিক — দেখো, তারপর মুছো:
(crontab -l 2>/dev/null; echo '*/2 * * * * date >> /tmp/tick.log') | crontab -
tail -f /tmp/tick.log        # Ctrl+C থামাও; শেষে crontab -e থেকে বাদ</div>

<table class="kv-table">
<tr><th>ঘর</th><th>মানে</th><th>উদাহরণ</th></tr>
<tr><td class="hl">মিনিট</td><td>০–৫৯</td><td>0 = ঘণ্টার ঠিক শুরু</td></tr>
<tr><td class="hll">ঘণ্টা</td><td>০–২৩</td><td>5 = ভোর ৫টা</td></tr>
<tr><td class="hl">দিন / মাস</td><td>তারিখ / মাস</td><td>* = প্রতিটা</td></tr>
<tr><td class="hll">সপ্তাহ</td><td>০–৬ (রবি=০)</td><td>1 = সোমবার</td></tr>
<tr><td class="hl">*/N</td><td>প্রতি N ধাপ</td><td>*/10 = প্রতি ১০ মিনিট</td></tr>
</table>

<div class="diagram">
<div class="diag-title">পাঁচ ঘরের খাতা — The Five-Field Ledger</div>
<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar60d12" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="60" width="110" height="44" rx="10"/><text class="lbl" x="70" y="78">খাতা</text><text class="lbl-sm" x="70" y="94">crontab -e</text>
<rect class="node-cyan" x="155" y="20" width="90" height="36" rx="8"/><text class="lbl-sm" x="200" y="42">মিনিট 0</text>
<rect class="node-cyan" x="255" y="20" width="90" height="36" rx="8"/><text class="lbl-sm" x="300" y="42">ঘণ্টা 5</text>
<rect class="node-cyan" x="355" y="20" width="70" height="36" rx="8"/><text class="lbl-sm" x="390" y="42">দিন *</text>
<rect class="node-cyan" x="435" y="20" width="60" height="36" rx="8"/><text class="lbl-sm" x="465" y="42">মাস *</text>
<rect class="node-cyan" x="505" y="20" width="45" height="36" rx="8"/><text class="lbl-sm" x="527" y="42">সপ্তাহ 1</text>
<rect class="node-hot" x="155" y="95" width="395" height="36" rx="8"/><text class="lbl-sm" x="352" y="117">0 5 * * 1 /home/me/backup.sh — সোম ভোর ৫টা</text>
<line x1="70.0" y1="104.0" x2="155.0" y2="46.6" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d12)"/>
<line x1="125" y1="82" x2="151" y2="82" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d12)"/>
<line x1="200" y1="56" x2="199" y2="91" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d12)"/>
<rect class="cell" x="15" y="145" width="530" height="30" rx="7"/><text class="lbl-sm" x="280" y="164">at 23:00 = একবারের ট্রে · ল্যাপটপ-ঘুমে anacron বাদ-ওয়াক্ত পূরণ করে · প্রতি কাজে লগ (>> log 2>&1)</text>
</svg>
<div class="diag-cap">পাঁচ ঘরে সময়, শেষে আদেশ — বদরুল সাহেবের খাতা নিজে থেকেই কড়া নাড়ে।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সময়-রক্ষকের সতর্কতা:</strong> cron কাজ চালায় কিন্তু খবর রাখে না — আউটপুট-লগ না লিখলে ব্যর্থতা নীরব (মেইল-বাক্সে সঞ্চিত হয় বলে অনেকে খেয়ালই করে না); প্রতিটা স্ক্রিপ্টে >> log 2>&1 বাধ্যতামূলক করো। ঘর-লেখার ভুল বিপজ্জনক: 0 5 * * 1 (সোম ৫টা) লেখার বদলে 5 0 * * 1 লিখলে রাত ১২:০৫-এ চলবে — পাঁচ ঘরের ক্রম মুখস্থ নয়, পড়ে লেখো। % চিহ্ন cron-লাইনে বিশেষ (নতুন-লাইন) — এস্কেপ \\%। আর সার্ভারের timezone (TZ) ল্যাপটপের সাথে নাও মিলবে — date দিয়ে যাচাই করে নাও।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The time-keeper's caution:</strong> cron runs jobs but keeps no news — without an output log, failure is silent (output piles in the mail spool unnoticed); make >> log 2>&1 mandatory in every script. Field-order typos are dangerous: 5 0 * * 1 fires at 00:05, not 05:00 — read the five fields, never guess. % is special in cron lines (newline) — escape as \\%. And server TZ may differ from your laptop — verify with date first.</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">date +%F_%T</div><div class="sc-label">ফাইলনাম-স্বাস্থ্য টাইমস্ট্যাম্প</div></div>
<div class="stat-card"><div class="sc-num">0 5 * * 1</div><div class="sc-label">সোম ভোর ৫টা — পাঁচ ঘর</div></div>
<div class="stat-card"><div class="sc-num">at 23:00</div><div class="sc-label">একবারের ট্রে</div></div>
<div class="stat-card"><div class="sc-num">>> log 2>&1</div><div class="sc-label">নীরব-মৃত্যু রোধ</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ নীরব ঘড়ি</div>লগ-ছাড়া কাজ · ঘর-ক্রম অনুমান · ঘুমন্ত ল্যাপটপে ওয়াক্ত পাস · % এস্কেপ-অজানা</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ বদরুল সাহেবের রীতি</div>পাঁচ ঘর পড়ে লেখা · প্রতি কাজে লগ · anacron ঘুম-হিসাব · atq/atrm জমা-তালিকায় চোখ</div>
</div>

<p class="verse">ওয়াক্তের পাঠ: নামাজের সময় নির্ধারণ সূর্য-চাঁদের হিসাবে — নিজের ইচ্ছায় নয়; কাজের সময়ও তাই: খাতায় লেখা সময়ই সত্য, মনের নয়। আর যে ওয়াক্ত পাস হলো, তার হিসাব রাখো — anacron-এর মতো পূরণের ব্যবস্থা।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">⏱️ পাঁচ ঘর: মিনিট-ঘণ্টা-দিন-মাস-সপ্তাহ; একবারের কাজ at-এ; প্রতি কাজে লগ বাধ্যতামূলক।<br>কারণ: নীরব ঘড়ি হারানো ঘড়ি — খাতায় না লেখা কাজ কেউ দেখে না।</div></div>`,
  senior: {
    title: "চাঁদ-ঘড়ির খাতা — The Moon-Clock Ledger",
    body: `<ul class="checklist">
<li>টাইমস্ট্যাম্প: <strong>date +%F_%T</strong> — ব্যাকআপ-নামে স্বাস্থ্য।</li>
<li>পুনরাবৃত্ত কাজ <strong>crontab</strong>-এর পাঁচ ঘরে; একবারের <strong>at 23:00</strong>।</li>
<li>প্রতি কাজে <strong>>> log 2>&1</strong> — নীরব ব্যর্থতা রোধ; পরে <strong>atq/atrm</strong>।</li>
<li>ঘুমন্ত মেশিনে <strong>anacron</strong> / systemd-timer — বাদ-পড়া ওয়াক্ত পূরণ।</li>
<li>ঘর-ক্রম পড়ে লেখো; <strong>% → \\%</strong>; TZ যাচাই।</li>
</ul>`
  }
});

// ── DOOR 13 · রসদ-বাক্সের গুদাম — The Supply-Box Warehouse ──
doors.push({
  num: 13,
  icon: "📦",
  color: "#38bdf8",
  name: "রসদ-বাক্সের গুদাম",
  subtitle: "The Supply-Box Warehouse",
  tech: "tar czf/xzf · gzip · zip · curl -O · wget",
  spirit: "রিজক — রসদ জমানোর নিয়ম",
  secret: "মোটা কাপড়ে জিনিস জড়ানোর দুই কথা: tar এক বান্ডিল বাঁধে (c=create, x=extract, f=ফাইল), z-পতাকা গুঁটিয়ে ছোট করে (gzip); আর নেটওয়ার্ক-বাজার থেকে মাল আনতে curl -O (নাম-অক্ষুণ্ণ) বা wget — দুই শিল্প, এক গুদাম: বাঁধা আর আনা।",
  recall: {
    q: "প্রজেক্ট-ফোল্ডার ব্যাকআপ করতে হবে gzip-চাপানো tar হিসেবে, ৩ দিন পরে ফিরিয়ে আনতে হবে। দুই আদেশ? আর wget vs curl কখন কোনটা?",
    qen: "Archive a project folder as gzip-compressed tar; restore it 3 days later. The two commands? And wget vs curl — when which?",
    a: "বাঁধা: tar czf project-$(date +%F).tar.gz project/ — c=নতুন আর্কাইভ, z=gzip-চাপ, f=ফাইলনাম (ঘরের ক্রম c-z-f মনে রাখো: Create-Zip-File)। খোলা: tar xzf project-2026-09-16.tar.gz — x=extract; কোথায় খুলবে তা আগে cd করে ঠিক করো (tar যেখানে দাঁড়িয়ে সেখানে খোলে!)। ডাউনলোড: curl -O URL ফাইলনাম রেখে নামায় (রিজিউম-সহ বড় ফাইলে curl -C -; wget এক-লাইনে রিকার্সিভ/রিজিউম-বান্ধন পাল্লায় সহজ — দুটোই চলে, অভ্যাসের প্রশ্ন; curl তারকাঁটা হালকা যেখানে আছে, সেখানেই)। যাচাই: tar tzf f.tar.gz ভেতরের তালিকা খোলা ছাড়াই।",
    aen: "Bundle: tar czf project-$(date +%F).tar.gz project/ — c=create, z=gzip, f=file (remember c-z-f: Create-Zip-File). Restore: tar xzf project-2026-09-16.tar.gz — x=extract; cd to the target dir FIRST (tar extracts where you stand!). Download: curl -O URL keeps the name (resume big files with curl -C -; wget wins on one-line recursive/resume habits — both work, a matter of habit; curl travels light wherever installed). Verify: tar tzf f.tar.gz lists contents without extracting.",
    you: "tar czf /tmp/p-$(date +%F).tar.gz ~/practices 2>/dev/null; tar tzf /tmp/p-*.tar.gz | head -3; mkdir -p /tmp/restore && cd /tmp/restore && tar xzf /tmp/p-*.tar.gz && ls"
  },
  story: `<p class="scene-setting">রসদ-বাক্সের গুদাম-রক্ষক হাজি সাহেবের দুই কাজ: মাল বাঁধা আর মাল আনা। বাঁধার নিয়ম তাঁর তিন অক্ষরে: c — নতুন বান্ডিল শুরু, z — বাতাস-বের করে ছোট করা (gzip), f — নাম দেওয়া; খোলার এক অক্ষর: x। তাঁর সবচেয়ে বড় শিক্ষা সাগরেদদের: বাক্স খুলবে কোথায় আগে দাঁড়াও — গুদাম-রক্ষক যেখানে দাঁড়িয়ে সেখানেই খুলে দেয়, পরে অনুশোচনা লাভ নেই (tar যে-ডিরেক্টরিতে চালানো হয় সেখানেই extract)। আনার কাজে তাঁর দুই বাহক: curl — হালকা পায়ের বাহক, নাম-অক্ষুণ্ণ রেখে নামায় (-O); আর wget — গ্রাম-থেকে-শহর টানা ভারী মালের বাহক, পথ কেটে গেলে যেখান থেকে ছেড়েছিল সেখান থেকেই আবার শুরু (রিজিউম)। বাক্সের গায়ে তারিখ-সিল: $(date +%F) — কোন বাক্স কোন দিনের, এক নজরে।</p>
<p class="scene-setting en">Haji Sahib the warehouse-keeper does two things: bundle and fetch. Bundling is three letters: c — start a new bundle, z — squeeze the air out (gzip), f — name it; opening is one: x. His biggest lesson: STAND where you want the box opened — the keeper unpacks exactly where you stand (tar extracts into the working directory), regret comes later. For fetching he keeps two carriers: curl — the light-footed one, keeps the name intact (-O); and wget — the heavy carrier for long hauls that resumes from where the road broke. Every box wears a date-seal: $(date +%F) — which box from which day, at a glance.</p>

<div class="code-block"># বাঁধা (Create-Zip-File):
tar czf project-$(date +%F).tar.gz project/
#   c=নতুন আর্কাইভ z=gzip f=ফাইলনাম
tar czf backup.tar.gz dir1 dir2 file1   # বহু জিনিস এক বাক্সে
zip -r archive.zip dir/                  # zip-জগতের বাক্স (Windows-বন্ধু)

# খোলার আগে দেখো — কোথায় দাঁড়িয়ে, ভেতরে কী:
tar tzf backup.tar.gz | head            # তালিকা খোলা ছাড়াই
cd /tmp/restore && tar xzf ~/backup.tar.gz   # আগে দাঁড়াও, পরে খোলো
tar xzf backup.tar.gz path/to/one        # শুধু একটা জিনিস বের করা
unzip archive.zip                        # zip-খোলা

# gzip একা (এক ফাইল, বান্ডিল নয়):
gzip big.log                # big.log.gz (মূল হাওয়া!)
gunzip big.log.gz           # ফেরানো
zcat big.log.gz | head      # না-খুলেই পড়া

# নেটওয়ার্ক-বাজার থেকে আনা:
curl -O https://example.com/file.iso      # নাম-অক্ষুণ্ণ
curl -L -O https://.../latest            # -L: রিডাইরেক্ট অনুসরণ
curl -C - -O https://.../huge.iso        # কাটা-পথ থেকে শুরু
wget https://example.com/file.iso        # স্বয়ংক্রিয়-রিজিউম বাহক

# বাক্সের স্বাস্থ্য-পরীক্ষা:
tar tzf backup.tar.gz >/dev/null && echo "বাক্স ঠিক" || echo "বাক্স ভাঙা"
gzip -t file.gz && echo OK               # gzip-অখণ্ডতা</div>

<table class="kv-table">
<tr><th>কাজ</th><th>আদেশ</th><th>মনে রাখার ছল</th></tr>
<tr><td class="hl">বাঁধা</td><td>tar czf out.tar.gz src/</td><td>Create-Zip-File</td></tr>
<tr><td class="hll">খোলা</td><td>tar xzf in.tar.gz</td><td>x=extract; আগে cd!</td></tr>
<tr><td class="hl">তালিকা</td><td>tar tzf in.tar.gz</td><td>t=table — না-খুলে দেখা</td></tr>
<tr><td class="hll">আনা</td><td>curl -O / wget</td><td>-O নাম রাখে; -C - রিজিউম</td></tr>
<tr><td class="hl">সিল</td><td>$(date +%F)</td><td>বাক্সের গায়ে তারিখ</td></tr>
</table>

<div class="diagram">
<div class="diag-title">গুদামের দুই দরজা — The Warehouse's Two Doors</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar60d13" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="63" width="120" height="44" rx="10"/><text class="lbl" x="75" y="81">ফোল্ডার-মাল</text><text class="lbl-sm" x="75" y="97">project/</text>
<rect class="node-cyan" x="185" y="63" width="120" height="44" rx="10"/><text class="lbl-cyan" x="245" y="81">tar czf</text><text class="lbl-sm" x="245" y="97">বাঁধা + চাপা</text>
<rect class="node-leaf" x="355" y="63" width="190" height="44" rx="10"/><text class="lbl-leaf" x="450" y="81">project-2026-09-16.tar.gz</text><text class="lbl-sm" x="450" y="97">তারিখ-সিলসহ বাক্স</text>
<line x1="135" y1="85" x2="181" y2="85" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d13)"/>
<line x1="305" y1="85" x2="351" y2="85" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d13)"/>
<rect class="cell" x="15" y="125" width="530" height="36" rx="8"/>
<text class="lbl-sm" x="280" y="141">খোলা: আগে cd গন্তব্যে → tar xzf — বাক্স যেখানে দাঁড়িয়ে সেখানেই খোলে; আনা: curl -O / wget (রিজিউম -C -)</text>
<text class="lbl-sm" x="280" y="157">tar tzf = না-খুলে তালিকা · gzip -t = অখণ্ডতা · বড় বাক্স বিভক্ত: split -b 500M</text>
</svg>
<div class="diag-cap">বাঁধো (czf) → সিল দাও (তারিখ) → আনো (curl/wget) → সেখানে দাঁড়িয়ে খোলো (xzf)।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গুদাম-রক্ষকের সতর্কতা:</strong> সবচেয়ে ভয়ের ছল: tar xzf রুট-ডিরেক্টরিতে দাঁড়িয়ে চালানো — বাক্স ভেতরের গুছানো ছাড়া থাকলে শত ফাইল এলোমেলো ছড়িয়ে যায় (tarbomb); আগে tar tzf দেখো পথ-উপসর্গ আছে কি না। gzip মূল ফাইল মুছে ফেলে — দুই কপি চাইলে gzip -k। curl/wget-এ পাইপ-ইনস্টল (curl … | sh) অবিশ্বস্ত উৎসে কখনো নয় (B59 দরজা ১৬-র প্রাচীর)। বড় বাক্স পুরনো ফাইল-তৈরিতে দ্বিগুণ স্পেস লাগে — ডিস্ক-হিসাব আগে করো।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The keeper's caution:</strong> the scariest trap: tar xzf run from the root directory — if the box lacks a path prefix, hundreds of files scatter everywhere (tarbomb); check with tar tzf for a path prefix first. gzip deletes the original — use gzip -k to keep both. Never pipe-install (curl … | sh) from untrusted sources (B59 Door 16's wall). Big boxes need temporary space equal to their size — do the disk math first.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ এলোমেলো গুদাম</div>রুটে tar xzf (tarbomb!) · তারিখ-নাম নয় · না দেখে curl|sh · gzip-এ মূল হারানো
</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ হাজি সাহেবের রীতি</div>tar tzf আগে, xzf গন্তব্যে দাঁড়িয়ে · $(date +%F)-সিল · curl -O / -C - · gzip -k দ্বৈত-কপি</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">czf / xzf</div><div class="sc-label">বাঁধা / খোলা</div></div>
<div class="stat-card"><div class="sc-num">tar tzf</div><div class="sc-label">না-খুলে তালিকা</div></div>
<div class="stat-card"><div class="sc-num">curl -C -</div><div class="sc-label">কাটা-পথ রিজিউম</div></div>
<div class="stat-card"><div class="sc-num">$(date +%F)</div><div class="sc-label">বাক্সের তারিখ-সিল</div></div>
</div>

<p class="verse">রিজকের পাঠ: ইউসুফ (আ.)-এর দীর্ঘ পরিকল্পনা — সাত বছরের ফসল সংরক্ষণ (কুরআন ১২:৪৭-৪৯): জমা রাখা, গুছিয়ে রাখা, দরকারের দিনে খোলা। হাজি সাহেবের গুদামও: আজকের কাজ তারিখ-সিলে বাঁধো — কালকের দুর্দিনে খোলো।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📦 tar czf বাঁধো, xzf খোলো (আগে cd!); তালিকা tzf, আনা curl -O; সিলে তারিখ $(date +%F)।<br>কারণ: যেখানে দাঁড়িয়ে খোলো সেটাই গুদাম — না দেখে খুললে tarbomb।</div></div>`,
  senior: {
    title: "রসদ-বাক্সের খাতা — The Supply-Box Ledger",
    body: `<ul class="checklist">
<li>বাঁধা: <strong>tar czf name-$(date +%F).tar.gz src/</strong> — Create-Zip-File।</li>
<li>খোলা: <strong>আগে cd</strong>, পরে <strong>tar xzf</strong>; তালিকা <strong>tar tzf</strong>।</li>
<li>আনা: <strong>curl -O</strong> (নাম-রক্ষা), <strong>-C -</strong> রিজিউম; <strong>wget</strong> স্বয়ংক্রিয়।</li>
<li><strong>gzip -k</strong> মূল-রক্ষা; <strong>gzip -t</strong> অখণ্ডতা।</li>
<li>অবিশ্বস্ত curl|sh <strong>নিষেধ</strong> — B59-১৬ প্রাচীর মনে রাখো।</li>
</ul>`
  }
});

// ── DOOR 6 · ফুলজান খালার আচার — Fuljan Khala's Rituals ──
doors.push({
  num: 14,
  icon: "🫙",
  color: "#a3e635",
  name: "ফুলজান খালার আচার",
  subtitle: "Fuljan Khala's Rituals",
  tech: ".bashrc · .bash_profile · alias · functions · PATH",
  spirit: "সুন্নাহ — প্রতিদিনের অভ্যাসই পরিচয়",
  secret: "ঘাটে পা ফেলার সাথে সাথে শহর তোমাকে চিনে নেয় — login হলে .bash_profile পড়ে, নতুন টার্মিনালে .bashrc; alias আর ফাংশন হলো তোমার আচার: প্রতিদিন যা করো, একবার লিখে রাখো।",
  recall: {
    q: "প্রতিবার টার্মিনাল খুললেই একই পাঁচটা কমান্ড টাইপ করো। কোন ফাইলে কী লিখলে সবসময় পাওয়া যাবে — আর login/non-login তফাতটা কী?",
    qen: "You type the same five commands every time you open a terminal. Which file, what to write, and what's the login/non-login distinction?",
    a: "interactive login shell পড়ে ~/.bash_profile (বা ~/.bash_login / ~/.profile — প্রথম যেটা পাওয়া যায়), আর প্রতিটা নতুন non-login টার্মিনাল পড়ে ~/.bashrc। macOS Terminal ডিফল্ট login-shell চালায়, Linux ডেস্কটপ সাধারণত non-login — তাই .bash_profile-এ বিখ্যাত সেতুটা রাখো: if [ -f ~/.bashrc ]; then . ~/.bashrc; fi — আর সব আচার .bashrc-তে। alias ll='ls -la' ছোট বদল, mkcd() { mkdir -p \"\$1\" && cd \"\$1\"; } ছোট নৌকা, export PATH=\"\$HOME/bin:\$PATH\" নতুন ঘাট যোগ। বদল লাগাতে: source ~/.bashrc (বা . ~/.bashrc)।",
    aen: "An interactive login shell reads ~/.bash_profile (or ~/.bash_login / ~/.profile — whichever is found first); every new non-login terminal reads ~/.bashrc. macOS Terminal runs login shells by default, Linux desktops usually non-login — so put the famous bridge in .bash_profile: if [ -f ~/.bashrc ]; then . ~/.bashrc; fi — and keep all rituals in .bashrc. alias ll='ls -la' for small renames, mkcd() { mkdir -p \"\$1\" && cd \"\$1\"; } for small boats, export PATH=\"\$HOME/bin:\$PATH\" to add a ghat. To apply: source ~/.bashrc (or . ~/.bashrc)."
  },
  story: `<p class="scene-setting">ফুলজান খালার রান্নাঘর ভোরবেলার এক নজরেই চেনা যায় — কারণ সকালটা একই ভাবে শুরু হয়, বছরের পর বছর। উনুনের পাশে সব পাত্র গুছিয়ে, চায়ের পানি সন্ধ্যায়ই ভরা, মসলার কাঠের বাক্স হাতের নাগালে — যেন ঘুম থেকে উঠে ভাবতে না হয় কী দিয়ে শুরু করবেন। পাশের বাড়ির নববধূ প্রতিদিন সকালে নতুন করে সাজায়, প্রতিদিন একই জিনিস খুঁজে বেড়ায় — আর ফুলজান খালা আগুন জ্বালানোর আগেই চা তুলে ফেলেন। তাঁর কথা: যা প্রতিদিন হয়, তা প্রতিদিন ঠিক করে নয় — একবার ঠিক করে রাখলেই হয়। উঠোনের কোণে তাঁর আচারের জারের সারি — গত বছরের আম, এ বছরের কাঁচা — প্রতিটা জারে লেবেল লাগানো: কী, কখন, কে বানাল।</p>
<p class="scene-setting en">Fuljan khala's kitchen is recognizable at one morning glance — because every dawn begins the same way, year after year. Pots arranged by the stove, tea-water filled the night before, the wooden spice box within arm's reach — as if waking up never requires deciding where to start. The new bride next door sets things up fresh each morning, searches for the same things daily — while fuljan khala has tea on before the fire is even lit. Her saying: what happens every day is not decided every day — decide it once. In the yard's corner stands her row of pickle jars — last year's mango, this year's tart — each jar labelled: what, when, who made it.</p>

<div class="dialogue">তুমি ফুলজান খালার উঠোনে বসে বললে — খালা, আমি প্রতিদিন টার্মিনাল খুলে একই পাঁচটা জিনিস টাইপ করি। উনি হাসলেন — তাহলে তো তোমার রান্নাঘর নেই, রাস্তায় রান্না করছ। তিনটা জার দেখালেন। প্রথম জার — .bashrc: প্রতিটা নতুন টার্মিনাল খুললেই শেল যা পড়ে (এখানেই সব আচার)। দ্বিতীয় — .bash_profile: login শেল যা পড়ে (macOS-এর টার্মিনাল এই পথে ঢোকে); এতে শুধু এক লাইনের সেতু রাখো যেন .bashrc-ও চলে। তৃতীয় — উঠোনের কল: PATH, মানে শেল কোন কোন ঘাটে নৌকা খুঁজবে; নতুন ঘাট যোগ করলে export। তারপর জার সাজানোর তিন স্তর শেখালেন: alias মানে নতুন নাম, ফাংশন মানে ছোট রেসিপি, স্ক্রিপ্ট মানে আলাদা বড় জার (bin/ ফোল্ডারে, পরের জন্মে)।</div>
<div class="dialogue en">Sitting in her yard you say — khala, I type the same five things every time I open a terminal. She laughs — then you have no kitchen; you are cooking on the street. She shows three jars. First — .bashrc: what the shell reads every time a new terminal opens (all rituals live here). Second — .bash_profile: what a login shell reads (macOS terminals enter by this gate); keep only the one-line bridge there so .bashrc also runs. Third — the yard tap: PATH, which ghats the shell will search for boats; export to add one. Then the three tiers of arranging jars: alias means a new name, a function means a small recipe, a script means a separate big jar (in bin/, for later).</div>

<div class="code-block"># ~/.bash_profile — login শেলের একমাত্র কাজ সেতু দেওয়া:
if [ -f ~/.bashrc ]; then . ~/.bashrc; fi

# ~/.bashrc — সব আচার এখানে:

# ① alias — নতুন নাম (প্রার্থনার মতো ছোট):
alias ll='ls -la'
alias gs='git status'
alias ..='cd ..'
alias grep='grep --color=auto'

# ② ফাংশন — ছোট রেসিপি (আর্গুমেন্ট নেয়):
mkcd() { mkdir -p "\$1" && cd "\$1"; }          # বানিয়ে ঢুকো
extract() {                                      # সব জার খোলে
  case "\$1" in
    *.tar.gz) tar xzf "\$1" ;;
    *.zip)     unzip "\$1" ;;
    *) echo "জানা নয়: \$1" ;;
  esac
}
# .bashrc-এ ফাংশন = প্রতিটা শেলে হাজির;
# স্ক্রিপ্ট (~/.local/bin/)-এর মতো ডিস্কে থাকে না

# ③ PATH — কোন কোন ঘাটে নৌকা খোঁজা হবে:
export PATH="\$HOME/.local/bin:\$PATH"
echo \$PATH | tr ':' '\\n'         # এক নজরে সব ঘাট

# চলক পাঠাও — সন্তান শেলও পাবে:
export EDITOR=vim
export HISTSIZE=10000

# বদল লাগাও — রান্নাঘর নতুন করে গুছাও:
source ~/.bashrc        # অথবা: . ~/.bashrc
exec bash               # পুরো শেল নতুন করে</div>

<table class="kv-table">
<tr><th>জার — ফাইল</th><th>কে পড়ে</th><th>কী রাখবে</th></tr>
<tr><td class="hl">~/.bashrc</td><td>প্রতিটা interactive non-login টার্মিনাল</td><td>সব আচার: alias, ফাংশন, PATH, prompt</td></tr>
<tr><td class="hl">~/.bash_profile</td><td>interactive login shell (macOS Terminal ডিফল্ট)</td><td>শুধু .bashrc-র সেতু</td></tr>
<tr><td class="hl">~/.profile</td><td>fallback — bash_profile না থাকলে</td><td>একই সেতু</td></tr>
<tr><td class="hl">/etc/profile</td><td>সবার আগে, সার্ভারের সব ব্যবহারকারীর</td><td>সিস্টেম-ওয়াইড; admin-এর জমি</td></tr>
</table>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফুলজান খালার জার-সতর্কতা:</strong> সেতুটা (.bash_profile → .bashrc) না থাকলে macOS-এ আচার কাজ করবে না — login শেল .bashrc পড়বেই না, আর তুমি ভাববে alias নষ্ট। আর PATH-এ ভুল করে খালি লাইন বসালে (PATH=) সব নৌকা হারাবে — সেতু নয়, শুধু যোগ করো: PATH="\$PATH:নতুন"। লেবেল ছাড়া জার যেমন বিষ, কমেন্ট ছাড়া alias তেমনি — কেন রেখেছ লিখে রাখো।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The jar caution:</strong> without the bridge (.bash_profile → .bashrc), rituals won't run on macOS — the login shell simply never reads .bashrc, and you'll think the aliases broke. And a careless empty assignment (PATH=) loses every boat — never replace, only append: PATH="\$PATH:new". An unlabelled jar is poison; an uncommented alias likewise — write down why you kept it.</div></div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>খালার প্রথম তিন আচার (আজই বাঁধো):</strong> ① alias ll='ls -la' ② alias gs='git status' ③ mkcd() ফাংশন — এই তিনটা .bashrc-এ বসালেই শহর তোমার অভ্যাস শিখে ফেলেছে। তারপর রোজ যা টাইপ করো, তৃতীয়বার জারে তুলে নাও — দরজা 7-এর পাঁচ-জাল সারি দিয়ে শুরু করো।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Khala's first three rituals (bind today):</strong> ① alias ll='ls -la' ② alias gs='git status' ③ the mkcd() function — with these three in .bashrc the city has learned your habits. Thereafter, the third time you type anything, jar it — start with Door 7's five-net chain.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ রাস্তায় রান্না</div>প্রতিদিন একই পতাকা-সারি টাইপ করে · .bashrc-র অস্তিত্বই জানে না · PATH-এ টুল ইনস্টল করে "command not found"-এ অবাক হয়</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ আচার-বাঁধা ঘর</div>তৃতীয়বার যা টাইপ করে, jar করে (alias/ফাংশন) · .bash_profile-এ সেতু, .bashrc-তে সব · নতুন টুল → PATH-যোগ, লেবেলসহ</div>
</div>

<p class="verse">নবীজির শিক্ষা — নেক আমল সেটাই প্রিয় যা অল্প হলেও নিয়মিত (বুখারি, আয়েশা রা.-এর বর্ণনা)। ফুলজান খালার জারও তাই: বিশাল রান্না নয়, রোজকার ছোট আচার — আর সেই আচারই বছরের শেষে আচারের জার ভরে দেয়। ছোট নিয়ম, দীর্ঘ নদী।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🫙 যা রোজ হয় তা একবারই ঠিক করো: আচার .bashrc-তে, সেতু .bash_profile-এ, নতুন ঘাট PATH-এ।<br>কারণ: প্রতিদিন গুছানো রান্নাঘর নয় — গুছানো রান্নাঘরে প্রতিদিন রান্না।</div></div>`,
  senior: {
    title: "আচার-জারের খাতা — The Pickle-Jar Notes",
    body: `<ul class="checklist">
<li>আজই ~/.bashrc খোলো, তিনটা আচার বাঁধো (ll, gs, mkcd) — <strong>source ~/.bashrc</strong> দিয়ে চালু।</li>
<li>macOS হলে ~/.bash_profile-এ <strong>সেতু-লাইন</strong> নিশ্চিত করো — নইলে login টার্মিনালে কিছুই আসবে না।</li>
<li>প্রতিটা জারে লেবেল: alias/ফাংশনের উপরে <strong>এক লাইনের কমেন্ট</strong> — কেন, কবে।</li>
<li>নতুন টুল ইনস্টল হয়ে "command not found"? ঘাট যোগ করো: <strong>export PATH="\$PATH:…"</strong> (মুছে নয়!)।</li>
<li>ফাংশন vs স্ক্রিপ্ট: রোজকার ও আর্গুমেন্ট-চাওয়া ছোট কাজ → ফাংশন; বড় স্বতন্ত্র প্রক্রিয়া → ~/.local/bin/-এ ফাইল-স্ক্রিপ্ট।</li>
</ul>`
  }
});

// ── DOOR 7 · বাবুল স্মৃতিশীলের ঘর — Babul's Memory Room ──
doors.push({
  num: 15,
  icon: "🧠",
  color: "#c084fc",
  name: "বাবুল স্মৃতিশীলের ঘর",
  subtitle: "Babul's Memory Room",
  tech: "Readline · history · Ctrl+R · fc",
  spirit: "তাদাব্বুর — অতীত ভাবনার শিল্প",
  secret: "শেলের প্রতিটা কথা লেখা থাকে — Ctrl+R দিয়ে অতীত থেকে টেনে আনো, ↑ দিয়ে সদ্য-স্রোত; কিন্তু গোপন কথা HISTCONTROL-এ না লাগালে দিনের আলোতেই পড়া যায়।",
  recall: {
    q: "এক ঘণ্টা আগের একটা লম্বা docker কমান্ড মনে নেই, ইতিহাস অনেক বড়। Ctrl+R ছাড়া আর কোন পথে খুঁজবে — আর পাওয়ার পরে কীভাবে এডিট করবে?",
    qen: "You can't recall a long docker command from an hour ago and history is huge. Besides Ctrl+R, how else do you search — and once found, how do you edit it?",
    a: "grep করো স্মৃতির ঘরে: history | grep docker, অথবা আরও সরাসরি Ctrl+R docker — আঙুল এক টোকায় অতীত ফিরে আসে; আবার Ctrl+R চাপলে আগের মিলগুলো, Esc ছেড়ে দিলে লাইনটা সম্পাদনার জন্য প্রম্পটে থাকে। পাওয়ার পর সম্পাদনার পথ: Esc ছেড়ে লাইনটা প্রম্পটে আনো → এডিট → Enter; এক শব্দ বদলে সরাসরি চালাতে fc -s docker=podman; এডিটরে খুলে ঠিক করতে fc -10। সবচেয়ে নিরাপদ: Ctrl+R খুঁজে → Esc → এডিট → Enter।",
    aen: "Grep the memory room: history | grep docker, or more directly Ctrl+R docker — the past returns at one touch; pressing Ctrl+R again cycles through matches, and Esc drops the found line at the prompt for editing. Once found: don't blind-run !docker (history expansion runs the last match unseen) — edit first. The safe path: Ctrl+R → find → Esc → edit → Enter; or use fc -s docker=podman to rerun with a substitution; or press ↑ then Ctrl+A/Ctrl+E to move within the line."
  },
  story: `<p class="scene-setting">বাবুল স্মৃতিশীল শহরের স্মৃতিশীল মানুষ — প্রতিটা কথা তার খাতায় লেখা। প্রতিটা মানুষের সাথে কথা বলার সময় তিনি প্রথমে খাতা খুলে দেখেন — আগে কী বলেছিলাম? তারপর সাবধানে বোঝাপড়া করেন। তার বিশ্বাস: অতীত না জানলে বর্তমান বুঝে না। কিন্তু তাঁর সমস্যা একটাই — খাতাটা বিশাল, আর তিনি মাঝে মাঝে তাড়াহুড়োয় পুরোনো কথা না দেখে বলে দেন। একদিন সেই ভুল করে তিনি একটা গ্রাহককে খুব দামি ওষুধ ভুল ব্যক্তির কাছে পাঠিয়ে দেন — না দেখে চালানোর ফল। সেদিনই তিনি নিয়ম বাঁধেন: খাতা থেকে কিছু ফিরিয়ে আনলে আগে চোখ বুলিয়ে নাও।</p>
<p class="scene-setting en">Babul is the city's most memory-keeping man — every word written in his ledger. Before speaking with anyone he first opens the ledger — what did I say before? His belief: the past unremembered leaves the present ununderstood. But the ledger is huge, and in haste he sometimes quotes old words unread — once sending an expensive medicine to the wrong person. That day he bound a rule: whatever you pull from the ledger, run your eyes over it first.</p>

<div class="code-block"># স্মৃতির ঘরে ঢোকো:
history                   # সব দেখো
history | grep docker     # জাল দিয়ে ছেঁকে (দরজা 7)
!123                      # ১২৩ নং কমান্ড আবার চালাও (না দেখে — সাবধান!)
!!                        # আগের কমান্ডই আবার (sudo !! মাস্টারির প্রথম সিঁড়ি)
!docker                   # 'docker' দিয়ে শুরু শেষ কমান্ডটা
!$                        # আগের কমান্ডের শেষ শব্দ
echo "kap" !!:$           # শেষ আর্গুমেন্টটা ফিরিয়ে ব্যবহার
fc -s docker=podman       # শেষ docker কমান্ড, বদলে চালাও
fc -10                    # সদ্য-১০টা এডিটরে খোলো; লিখে বেরোলে চলবে

# Ctrl+R — অতীতের রাডার:
#   চাপো Ctrl+R, টাইপ docker → শেষ মিল দেখাবে
#   আবার Ctrl+R → আগের মিলে ফিরে যায়
#   Esc       → লাইনটা প্রম্পটে; এডিট করো
#   Enter     → সরাসরি চালাও (না দেখে নয়!)

# লাইনের ভেতরে হাঁটা — readline-এর কী-বোর্ড:
Ctrl+A / Ctrl+E   # লাইনের শুরু / শেষ
Alt+B / Alt+F     # শব্দে শব্দে পিছাও / এগোও
Ctrl+W            # শব্দ পেছনে কেটে দাও
Ctrl+U / Ctrl+K   # কার্সর থেকে শুরু / শেষ পর্যন্ত কাটো
Ctrl+Y            # কাটা টুকরা আবার পেস্ট (yank)
Ctrl+L            # পর্দা পরিষ্কার
Alt+.             # আগের কমান্ডের শেষ শব্দ জোড়ো

# স্মৃতি শাসন — HISTCONTROL:
HISTCONTROL=ignoredups     # পর-পর একই কথা একবারই লেখে
HISTCONTROL=ignoreboth     # dups + স্পেস-শুরু গোপন কথা
ls secret_key              # ← ভুল! প্রথমে স্পেস দিলে লেখাই হয় না
 ls secret_key             # ← ঠিক (ignoreboth/ignorespace হলে)
HISTSIZE=10000             # মেমোরিতে কতটুকু মনে রাখবে
HISTFILESIZE=20000         # ডিস্কের খাতায় কত লাইন
HISTTIMEFORMAT='%F %T '    # খাতায় সময়ের ছাপ
shopt -s histappend        # একাধিক টার্মিনালের খাতা মেশাও</div>

<div class="diagram">
<div class="diag-title">স্মৃতির ঘরের নিয়ম — Rules of the Memory Room</div>
<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowB" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#c084fc"/></marker>
</defs>
<rect class="node" x="10" y="40" width="110" height="40" rx="9"/><text class="lbl-sm" x="65" y="64">প্রম্পটে টাইপ</text>
<rect class="node-cyan" x="150" y="40" width="120" height="40" rx="9"/><text class="lbl-sm" x="210" y="64">Ctrl+R খোঁজো</text>
<rect class="node-hot" x="300" y="40" width="110" height="40" rx="9"/><text class="lbl-sm" x="355" y="64">Esc → এডিট</text>
<rect class="node-leaf" x="440" y="40" width="110" height="40" rx="9"/><text class="lbl-sm" x="495" y="64">Enter চালাও</text>
<line x1="120" y1="60" x2="146" y2="60" stroke="#c084fc" stroke-width="2" fill="none" marker-end="url(#arrowB)"/>
<line x1="270" y1="60" x2="296" y2="60" stroke="#c084fc" stroke-width="2" fill="none" marker-end="url(#arrowB)"/>
<line x1="410" y1="60" x2="436" y2="60" stroke="#c084fc" stroke-width="2" fill="none" marker-end="url(#arrowB)"/>
<rect class="cell" x="10" y="6" width="540" height="24" rx="6"/><text class="lbl-sm" x="280" y="22">sudo !! বা !docker শুধু তখনই যখন মিলটা চোখে দেখা — নাহলে Ctrl+R → Esc পথ ধরো</text>
</svg>
<div class="diag-cap">স্মৃতির ঘর থেকে টেনে আনা: খোঁজো → চোখ বুলাও → বদলাও → তারপর চালাও।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>বাবুলের ভুল তুমি করো না — !docker বা !! দিয়ে না দেখে চালানো হুবেহু সেই পুরোনো ভুলটাই — মিলটা যে শেষ docker কমান্ড তা নিশ্চিত না হলে ফাঁদ। Ctrl+R → Esc → চোখ বুলাও → এডিট → Enter। আর গোপন কথা খাতায় নেই রাখতে HISTCONTROL=ignoreboth + স্পেস-শুরু লাইন।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Babul's mistake — not yours:</strong> blind-running !docker or !! repeats the old fault unseen — if you're not certain the match is that last docker command, it's a trap. Ctrl+R → Esc → eyes over the line → edit → Enter. And to keep secrets out of the ledger: HISTCONTROL=ignoreboth + space-prefixed lines.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খাতা-নেই মানুষ</div>প্রতিটা লম্বা কমান্ড আবার টাইপ করে · ভুল করে ভুল করে টাইপ করে · ! বা !! না দেখে চালায় · স্মৃতির ঘর পাবলিক পার্ক</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ বাবুল-শাসিত স্মৃতি</div>Ctrl+R রাডার · Esc-এডিট আগে, চালানো পরে · HISTCONTROL=ignoreboth · HISTTIMEFORMAT-এ সময়ের ছাপ · histappend চালু</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">Ctrl+R</div><div class="sc-label">অতীতের রাডার</div></div>
<div class="stat-card"><div class="sc-num">HISTTIMEFORMAT</div><div class="sc-label">সময়ের ছাপ</div></div>
<div class="stat-card"><div class="sc-num">Alt+.</div><div class="sc-label">শেষ শব্দ জোড়ো</div></div>
<div class="stat-card"><div class="sc-num">!</div><div class="sc-label">সম্প্রসারণ — চোখ দিয়ে</div></div>
</div>

<p class="verse">তাদাব্বুর — অতীতের উপর চিন্তা করা; কুরআনে বার বার এসেছে তোমরা কি চিন্তা করো না / তোমরা কি বোঝো না। স্মৃতির ঘরও তাই: ইতিহাস পড়া নয়, ইতিহাস থেকে শেখা — খাতার লাইনটা ফিরিয়ে আনা তখনই কল্যাণ যখন চোখ বুলিয়ে, বুঝে, বদলে চালানো।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🧠 Ctrl+R অতীত ডাকে, Esc এডিট দেয়, Enter চালায়; গোপন কথা স্পেসে লুকাও, HISTCONTROL-এ তালা।<br>কারণ: না দেখে চালানো স্মৃতি নয় — দুর্ঘটনা।</div></div>`,
  senior: {
    title: "স্মৃতি-শাসনের খাতা — The Memory Ledger",
    body: `<ul class="checklist">
<li>আজ থেকে লম্বা কমান্ড মনে না পড়লে <strong>Ctrl+R</strong> — আর পাওয়া মাত্র <strong>Esc</strong> ছেড়ে চোখ বুলাও, তারপর এডিট।</li>
<li>চোখের সামনে কমান্ড বদলাতে readline-এর হাঁটা: <strong>Ctrl+A/E, Alt+B/F, Ctrl+W/U/K, Ctrl+Y</strong> — এই আট অক্ষর আঙুলে ধরো।</li>
<li>খাতায় সময়: <strong>HISTTIMEFORMAT='%F %T '</strong>; ডুপ্লিকেট+গোপন বাদ: <strong>HISTCONTROL=ignoreboth</strong>; মাল্টি-টার্মিনাল মেশাও: <strong>shopt -s histappend</strong>।</li>
<li>শেষ কমান্ড আবার: <strong>sudo !!</strong> মাস্টারির প্রথম সিঁড়ি — তবে চোখে দেখে, কারণ কী চালাচ্ছ জানা থাক।</li>
<li>সদ্য-কথার গুচ্ছ এডিট করতে <strong>fc -10</strong> — এডিটরে খুলে ঠিক করে চালাও; এক শব্দ বদলে পুনরায়: <strong>fc -s docker=podman</strong>।</li>
</ul>`
  }
});

// ── DOOR 8 · আয়েশা সিদ্দিকার দূরের ঘাট — Ayesha Siddiqa's Far Ghat ──
doors.push({
  num: 16,
  icon: "🌍",
  color: "#f472b6",
  name: "আয়েশা সিদ্দিকার দূরের ঘাট",
  subtitle: "Ayesha Siddiqa's Far Ghat",
  tech: "ssh · ssh-agent · tmux · rsync",
  spirit: "রিহলা — দূরের সফরের শিল্প",
  secret: "দূরের ঘাটে ঢুকতে তিনটা জিনিস: পরিচয়পত্র (key), থাকার ঘর (tmux), আর মালবাহী গরু-গাড়ি (rsync); পাসওয়ার্ড নয় — key-ই শহরের নিয়ম।",
  recall: {
    q: "লঞ্চের আগে রাতে সার্ভারে দীর্ঘ প্রোভিশনিং চালাতে হবে; নেট ছিঁড়লে বা ল্যাপটপ বন্ধ করলেও কাজ বাঁচতে হবে — কোন যুগল ব্যবহার করবে, কেন?",
    qen: "A long provisioning job must survive your net dropping or laptop closing overnight. Which pair do you use, and why?",
    a: "tmux + ssh: সার্ভারে ssh করে tmux new -s launch চালাও — টার্মিনালটা tmux-এর ভেতরে, সার্ভারেই বাঁচে; ssh-সংযোগ ছিঁড়লেও কিছু হয় না। ফিরে এসে tmux attach -t launch দিয়ে হুবহু সেই পর্দায়। Ctrl+B D মানে detach — বিচ্ছিন্ন, মৃত্যু নয়। এটাই দরজা 11-এর nohup-এর আধুনিক ভিজ্যুয়াল রূপ: কাজ ঘাটে থাকে, তুমি চলে যাও।",
    aen: "tmux + ssh: ssh in, run tmux new -s launch — the terminal lives inside tmux on the server; a dropped ssh link kills nothing. On return, tmux attach -t launch restores the exact screen. Ctrl+B D is detach — not death. This is Door 11's nohup made modern and visual: the work stays at the ghat while you leave."
  },
  story: `<p class="scene-setting">আয়েশা সিদ্দিকা নদীর ওপারের শহরগুলোর সাথে বাণিজ্য চালান — তাঁর কারবার তিনটা জিনিসে দাঁড়িয়ে: পরিচয়পত্র, থাকার ঘর, আর মালবাহী গরু-গাড়ি। পরিচয়পত্র ছাড়া ওপারের ঘাটে পা দেওয়া যায় না — আর সেটা মুখস্থ পাসওয়ার্ড নয়, দুই টুকরোর সিলমোহর: এক টুকরো তাঁর কাছে (private key), এক টুকরো ওপারের ঘাটে (public key)। দুই মিললে দরজা খোলে; কেউ কাউকে পাসওয়ার্ড বলে না। বছরের বেশি দিন তিনি ওপারে থাকেন — তাই থাকার ঘর ভাড়া করেন যেটা তাঁর অনুপস্থিতিতেও চালু থাকে (tmux): সন্ধ্যায় কাজ মাঝপথে রেখে ঘুমোতে যান, ভোরে ফিরে দেখেন আগুন নেভায়নি। আর মাল পাঠাতে গেলে গরু-গাড়ি ভর্তি করে নয় — rsync: যা বদলেছে শুধু সেটাই যায়।</p>
<p class="scene-setting en">Ayesha Siddiqa trades with the cities across the river — her house runs on three things: a passport, a room that stays, and a cargo cart. The passport is no memorised password but a two-piece seal: one piece she keeps (the private key), one sits at the far ghat (the public key); when the two match, the gate opens. She stays across most of the year — so she rents a room that survives her absence (tmux): leaving work mid-way at night, she returns at dawn to find the fire unextinguished. And cargo moves by rsync: only what changed crosses the river.</p>

<div class="dialogue">তুমি জিজ্ঞেস করলে — আন্টি, পাসওয়ার্ড তো সহজ, key-র ঝামেলা কেন? উনি হাসলেন: পাসওয়ার্ড হলো চিরঠাসা কথা — যে শুনলে সে-ই ঢুকল; আর key-জোড়া হলো সিলমোহর — ছাপ ওপারে থাকে, দলিল তোমার কাছে। মুখের কথা নকল হয়, সিলমোহর নয়। তারপর তিনটা কথা শেখালেন: ঠিকানা এক জায়গায় লিখে রাখো (~/.ssh/config — বলবে শুধু ssh prod), ঘর ভাড়া করো যেটা তোমাকে না থাকলেও চলে (tmux), আর মাল পাঠাও শুধু বদলটুকু (rsync)।</div>
<div class="dialogue en">You ask — aunt, passwords are simpler; why the key fuss? She smiles: a password is a spoken word — whoever hears it walks in; a key-pair is a seal — the stamp stays at the far ghat, the document stays with you. Spoken words get copied; seals do not. Then three lessons: keep addresses in one place (~/.ssh/config — then just ssh prod), rent a room that runs without you (tmux), and ship only the changes (rsync).</div>

<div class="code-block"># পরিচয়পত্র বানাও (দুই টুকরোর সিলমোহর):
ssh-keygen -t ed25519 -C "you@laptop"
#   ~/.ssh/id_ed25519      <- তোমার টুকরো (কখনো কাউকে দেখাবে না!)
#   ~/.ssh/id_ed25519.pub  <- ওপারের ঘাটে যাবে
ssh-copy-id user@server        # ওপারের ঘাটে তোমার টুকরো বসাও
ssh user@server                # এখন পাসওয়ার্ড লাগবে না
ssh -p 2222 user@server        # অন্য দরজা (port)
ssh -i ~/.ssh/id_builders user@host   # নির্দিষ্ট key ধরে

# ~/.ssh/config — দূরের ঘাটের ঠিকানাখানা:
Host prod
  HostName 203.0.113.10
  User deploy
  Port 22
  IdentityFile ~/.ssh/id_ed25519
# এবার শুধু: ssh prod

# এজেন্ট — সেশন জুড়ে key মনে রাখা:
eval "\$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
# এজেন্ট-ফরওয়ার্ডিং (-A): prod থেকে আরেক শহরে যেতে আবার key লাগবে না
ssh -A prod                    # ⚠ শুধু বিশ্বাসী শহরে

# গরু-গাড়ি — যা বদলেছে তাই যাবে:
rsync -avz --progress local/ prod:/srv/app/
#   -a = archive (অধিকার-সময় রক্ষা) · -v = verbose · -z = চাপা
rsync -avz prod:/srv/app/logs/ ./logs/    # ওপার থেকে টানো
rsync -avzn --delete src/ dst/  # -n = dry-run: শুধু দেখাবে, ছুঁবে না
rsync -avz --delete src/ dst/   # ⚠ নিশ্চিত হয়ে তবেই — বাড়তি মুছে দেয়

# থাকার ঘর — কাজ ঘাটে থাকে, তুমি চলে যাও:
tmux new -s launch             # ঘর ভাড়া করো
python provision.py            # দীর্ঘ কাজ
#   Ctrl+B D   -> detach — নেট ছিঁড়লেও কাজ বাঁচে
tmux ls                        # কোন কোন ঘর চালু
tmux attach -t launch          # ফিরে এসে ঢুকো
tmux kill-session -t launch    # কাজ শেষে ঘর ছাড়ো
# পর্দা ভাগ:
#   Ctrl+B %   -> পাশে জানালা (split)
#   Ctrl+B "   -> নিচে জানালা
#   Ctrl+B ↑/↓ -> জানালায় লাফ
#   Ctrl+B C   -> নতুন window · Ctrl+B N/P -> window বদল</div>

<table class="kv-table">
<tr><th>যন্ত্র</th><th>কাজ</th><th>মনে রাখার ছল</th></tr>
<tr><td class="hl">ssh</td><td>ওপারের শহরে প্রবেশ</td><td>পরিচয়পত্র — key জোড়া</td></tr>
<tr><td class="hl">ssh-agent</td><td>সেশন জুড়ে key মনে রাখা</td><td>সঙ্গী বাহক</td></tr>
<tr><td class="hl">~/.ssh/config</td><td>ঘাটের ঠিকানাখানা</td><td>পকেটের খাতা</td></tr>
<tr><td class="hl">tmux</td><td>টার্মিনাল-ঘর, detach করা যায়</td><td>থাকার ঘর — অনুপস্থিতিতেও চালু</td></tr>
<tr><td class="hl">rsync</td><td>শুধু-বদল-পাঠানো</td><td>গরু-গাড়ি: যা বদলেছে তাই যায়</td></tr>
<tr><td class="hl">mosh</td><td>রোমিং/দুর্বল নেটে ssh</td><td>নৌকা-সিপাহি — ছিঁড়লে নিজে জোড়া দেয়</td></tr>
</table>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দূরের ঘাটের সাবধানবাণী:</strong> private key যার যার — কপি নয়, স্ক্রিনে পাঠানো নয়, git-এ ঢোকানো নয়। প্রতি ঘাটে আলাদা key (আবার ssh-keygen), অচেনা সার্ভারে -A (agent-forwarding) বন্ধ — দরজা ১৬-এর বিশ্বাস-সীমা এখানেও। আর rsync --delete চালানোর আগে অবশ্যই -n (dry-run) — নইলে গন্তব্যের বাড়তি সব চিরকালের জন্য মুছে যায়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Far-ghat cautions:</strong> the private key never leaves your machine — no copying, no pasting, no git. One key per ghat, and agent-forwarding (-A) off on untrusted servers — Door 16's trust boundary applies here too. Always dry-run (-n) before rsync --delete, or the destination loses what you did not mean to remove — forever.</div></div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>আজই সেতু পার হওয়ার তিন ধাপ:</strong> ① ssh-keygen → ssh-copy-id দিয়ে নিজের সার্ভারে key বসাও ② ~/.ssh/config-এ Host prod লেখো ③ পরের দীর্ঘ কাজ tmux-এ চালাও, Ctrl+B D-তে বেরিয়ে এসো — ফিরে দেখো কাজ চলছে। LedgerPilot-এর ডিপ্লয়-স্ক্রিপ্টের ভিত্তি এই তিন ধাপই।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Cross the bridge today (3 steps):</strong> ① ssh-keygen then ssh-copy-id onto your own server ② write Host prod in ~/.ssh/config ③ run the next long job inside tmux, detach with Ctrl+B D — return to find it still running. LedgerPilot deploys stand on exactly these three.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ পাসওয়ার্ড-মুখস্থ বণিক</div>প্রতিবার পাসওয়ার্ড টাইপ · ল্যাপটপ বন্ধ = কাজ মৃত · scp দিয়ে পুরো ফোল্ডার প্রতিবার · অচেনা সার্ভারে -A চালু</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ আয়েশা-শাসিত বাণিজ্য</div>key-জোড়া + ~/.ssh/config · দীর্ঘ কাজ tmux-এ, detach-স্বাধীনতা · rsync -avz, --delete-এর আগে -n · প্রতি ঘাটে আলাদা key</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">ed25519</div><div class="sc-label">আধুনিক key-জোড়া</div></div>
<div class="stat-card"><div class="sc-num">Ctrl+B D</div><div class="sc-label">detach — কাজ বাঁচে</div></div>
<div class="stat-card"><div class="sc-num">rsync -n</div><div class="sc-label">dry-run আগে, ছোঁয়া পরে</div></div>
<div class="stat-card"><div class="sc-num">ssh prod</div><div class="sc-label">এক শব্দের ঠিকানা</div></div>
</div>

<p class="verse">রিহলা — সফরনামার চিঠি: মানুষ দেশে নিরাপদ, কিন্তু সীমানা চেনে সফরে গিয়ে। কুরআন বলে পৃথিবীতে চরে বেড়াও এবং দেখো সৃষ্টি কীভাবে শুরু হলো (২৯:২০, ভাবানুবাদ)। দূরের ঘাটও তাই: সার্ভার নয় শুধু যন্ত্র — সীমানা-পার হওয়ার অভ্যাস, নিজের সিলমোহর হাতে নিয়ে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🌍 key পরিচয়, tmux থাকার ঘর, rsync বদল-বাহী গরু-গাড়ি; অচেনা ঘাটে -A বন্ধ, --delete-এর আগে -n।<br>কারণ: যে বণিক সিলমোহর হারায়, তার সব শহর একসাথে হারায়।</div></div>`,
  senior: {
    title: "দূরের ঘাটের খাতা — The Far-Ghat Ledger",
    body: `<ul class="checklist">
<li>আজই <strong>ssh-keygen -t ed25519</strong> + <strong>ssh-copy-id</strong> — পাসওয়ার্ড-যুগ শেষ।</li>
<li><strong>~/.ssh/config</strong>-এ প্রতিটা সার্ভারের নাম-ঠিকানা — ssh prod-ই যথেষ্ট।</li>
<li>দীর্ঘ কাজ সবসময় <strong>tmux</strong>-এ: new -s নাম → কাজ → Ctrl+B D → ফিরে attach।</li>
<li>ফাইল যেতে-আসতে <strong>rsync -avz</strong>; <strong>--delete</strong> মানেই আগে <strong>-n</strong>।</li>
<li>প্রতি সার্ভারে আলাদা key; অচেনা সার্ভারে <strong>agent-forwarding বন্ধ</strong>।</li>
</ul>`
  }
});

// ── DOOR 17 · প্যানেল-বাড়ির কর্মশালা — The Panel-House Workshop ──
doors.push({
  num: 17,
  icon: "🪟",
  color: "#22d3ee",
  name: "প্যানেল-বাড়ির কর্মশালা",
  subtitle: "The Panel-House Workshop",
  tech: "tmux · session/window/pane · prefix · detach · scrollback",
  spirit: "সাহায্য — কাজ হাওয়ায় নয়, হাতে হাতে",
  secret: "tmux-এর ঘরে কাজ মরে না — SSH ছিঁড়লেও ঘর বেঁচে থাকে: এক বাড়িতে অনেক কামরা (session), কামরায় জানালা (window), জানালায় ফলক (pane); সব আদেশের আগে দরজার ঘণ্টা Ctrl-b — ঘণ্টা বাজিয়ে তারপর কথা বলো; আর d-চাবিতে বাড়ি থেকে বেরিয়ে এসো, কাজ চলতেই থাকে।",
  recall: {
    q: "রাতের ডিপ্লয় SSH-সেশনে চালাচ্ছিলে, নেট কেটে গেল — কাজটা কি মরে গেল? tmux দিয়ে এমন অবস্থা থেকে নিজেকে বাঁচানোর রীতি কী — শুরু, বেরোনো, ফেরা?",
    qen: "A night deploy is running over SSH and the net drops — is the job dead? The tmux ritual that saves you — start, leave, return?",
    a: "না, tmux-ঘরে কাজ মরে না — ঘরটা সার্ভারে বেঁচে থাকে। রীতি: ① শুরুতেই tmux new -s deploy — নাম-দেওয়া ঘর; ② ভেতরে কাজ চালাও; ③ দরজার ঘণ্টা Ctrl-b তারপর d — detach: বাড়ি থেকে বেরিয়ে এসো, SSH কেটে গেলেও ঘরের ভেতরে কাজ চলছেই; ④ ফিরে: tmux attach -t deploy — পর্দায় সব যেমন ছিল তেমন: লগ, কার্সর, চলমান আউটপুট। ব্যবস্থাপনা: tmux ls (ঘরের তালিকা), Ctrl-b $ (নাম-বদল), Ctrl-b c (নতুন জানালা), Ctrl-b %% / নিচ-ভাগ (ফলক-ভাগ), Ctrl-b [ (স্ক্রল-প্রাচীর — q দিয়ে বেরোনো)। মনে রেখো: tmux-এ কাজ চালানোর অভ্যাসটাই SSH-যুগের বিমা।",
    aen: "No — inside tmux the job lives on; the room survives on the server. Ritual: ① start with tmux new -s deploy — a named room; ② run the work inside; ③ doorbell Ctrl-b then d — detach: step out, even if SSH dies the room keeps working; ④ return with tmux attach -t deploy — screen exactly as left: logs, cursor, running output. Management: tmux ls (list rooms), Ctrl-b $ (rename), Ctrl-b c (new window), Ctrl-b %% (side split), Ctrl-b \" (below split), Ctrl-b [ (scrollback — q to exit). Remember: the habit of running work inside tmux is the insurance of the SSH era.",
    you: "tmux new -s lab; ভেতরে: top চালাও; Ctrl-b d; tmux ls; tmux attach -t lab; q দিয়ে বেরোনো; exit দিয়ে ঘর ভাঙো"
  },
  story: `<p class="scene-setting">প্যানেল-বাড়ির মালিক কামাল উদ্দিন সাহেবের বাড়ি অন্যরকম — ঢুকলেই বোঝা যায়: এক হলঘরে অনেকগুলো পর্দা-কামরা, প্রতিটা কামরায় আলাদা কাজ চলছে, আর কেউ বাইরে গেলেও কামরার কাজ থামে না। তাঁর সিস্টেম তিন তলায়: বাড়ির ভেতর কামরা (session), কামরার ভেতর জানালা (window), জানালার ভেতর ফলক (pane)। সব আদেশের আগে একটাই নিয়ম — দরজার ঘণ্টা টিপে তারপর কথা বলা (Ctrl-b, তারপর অক্ষর)। কামাল সাহেবের বিখ্যাত ঘটনা: এক ঝড়ের রাতে তাঁর সংযোগ কেটে গিয়েছিল — লোকে ভাবল কাজ মারা গেছে; সকালে তিনি শুধু দরজা খুললেন (attach) — রাতের ডিপ্লয়-লগ পর্দায় জ্বলজ্বল করছে, কাজ শেষ! সেদিন থেকে শহরে প্রবাদ: যে কাজ গুরুত্বপূর্ণ, সে কাজ প্যানেল-বাড়ির কামরায় হয়।</p>
<p class="scene-setting en">Kamal Uddin's panel-house is different — one hall with many screened rooms, each running its own work, and nobody stepping out stops the work. Three floors: rooms inside the house (sessions), windows inside rooms (windows), panes inside windows (panes). One rule before every command — ring the doorbell first, then speak (Ctrl-b, then a letter). His famous night: a storm cut his connection — everyone assumed the work died; in the morning he simply opened the door (attach) — the night's deploy log glowing on screen, job finished! Since then the town says: important work happens in the panel-house.</p>

<div class="code-block"># ঘর বানাও / দেখো / ঢুকো:
tmux new -s deploy          # নাম-দেওয়া কামরা
tmux ls                     # কামরার তালিকা
tmux attach -t deploy       # ফিরে ঢুকো (দরজা খোলো)

# দরজার ঘণ্টা = Ctrl-b, তারপর:
#   d        → বেরিয়ে এসো (detach) — কাজ চলবে!
#   c        → নতুন জানালা · n/p → পরের/আগের জানালা
#   %        → ডানে ফলক-ভাগ · " → নিচে ফলক-ভাগ
#   o        → ফলক-প্রদক্ষিণ · x → ফলক বন্ধ
#   [        → স্ক্রল-প্রাচীর (↑↓ দেখো; q বেরোনো)
#   $        → ঘরের নাম-বদল · , → জানালার নাম
#   z        → ফলক পূর্ণ-পর্দা (আবার z = ফেরত)

# টিকে-থাকার রীতি (SSH-যুগের বিমা):
ssh server
tmux new -s nightwork       # ঘরে ঢুকে কাজ চালাও
./long-deploy.sh            # ঘরের ভেতরে চলছে
#   ...নেট কাটুক — ঘর সার্ভারে বেঁচে!
ssh server && tmux attach -t nightwork   # ফিরে এসো

# কামরা-জীবন:
tmux kill-session -t old    # ঘর ভাঙো
tmux new -s work -d         # পেছনে ঘর বানাও (detach-অবস্থায়)
tmux send-keys -t lab 'make test' Enter   # দূর থেকে ঘরে আদেশ!</div>

<table class="kv-table">
<tr><th>ঘণ্টা + চাবি</th><th>কাজ</th><th>মনে রাখার ছল</th></tr>
<tr><td class="hl">Ctrl-b d</td><td>বেরোনো (detach)</td><td>কাজ চলবে, তুমি মুক্ত</td></tr>
<tr><td class="hll">Ctrl-b % / "</td><td>ফলক-ভাগ</td><td>পাশে / নিচে</td></tr>
<tr><td class="hl">Ctrl-b [</td><td>স্ক্রল-প্রাচীর</td><td>q দিয়ে বেরোনো</td></tr>
<tr><td class="hll">Ctrl-b z</td><td>পূর্ণ-পর্দা টগল</td><td>জুম-ইন/আউট</td></tr>
<tr><td class="hl">tmux attach -t</td><td>ঘরে ফেরা</td><td>দরজা খোলা</td></tr>
</table>

<div class="diagram">
<div class="diag-title">প্যানেল-বাড়ির তিন তলা — The Three Floors</div>
<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar60d17" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="65" width="130" height="44" rx="10"/><text class="lbl" x="80" y="83">বাড়ি (server)</text><text class="lbl-sm" x="80" y="99">tmux সার্ভার-প্রক্রিয়া</text>
<rect class="node-cyan" x="185" y="65" width="130" height="44" rx="10"/><text class="lbl-cyan" x="250" y="83">কামরা (session)</text><text class="lbl-sm" x="250" y="99">deploy · lab · editor</text>
<rect class="node-hot" x="355" y="40" width="90" height="36" rx="8"/><text class="lbl-sm" x="400" y="62">জানালা (window)</text>
<rect class="node-hot" x="355" y="95" width="90" height="36" rx="8"/><text class="lbl-sm" x="400" y="117">ফলক (pane)</text>
<rect class="node-leaf" x="475" y="65" width="70" height="44" rx="10"/><text class="lbl-leaf" x="510" y="83">তুমি</text><text class="lbl-sm" x="510" y="99">attach/detach</text>
<line x1="145" y1="87" x2="181" y2="87" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d17)"/>
<line x1="315" y1="80" x2="351" y2="62" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d17)"/>
<line x1="315" y1="95" x2="351" y2="110" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d17)"/>
<line x1="445" y1="87" x2="471" y2="87" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d17)"/>
<rect class="cell" x="15" y="145" width="530" height="30" rx="7"/><text class="lbl-sm" x="280" y="164">সব আদেশের আগে ঘণ্টা Ctrl-b · detach (d) = কাজ চলবে · ফিরো attach -t দিয়ে — SSH-কাটা মানে মৃত্যু নয়</text>
</svg>
<div class="diag-cap">বাড়ি → কামরা → জানালা → ফলক; তুমি শুধু দরজা খুলে ঢুকো-বেরোও — কাজ কখনো মরে না।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>প্যানেল-বাড়ির সতর্কতা:</strong> ঘরের কাজ সার্ভারে বাঁচে — কিন্তু সার্ভার রিবুট হলে সব ঘর মরে; সত্যিকারের দীর্ঘ-কাজের বিমা nohup/disown (দরজা ৫) বা systemd/tmux-উভয়ই নয়, পরিকল্পনা আলাদা। মোবাইল-SSH-ক্লায়েন্টে Ctrl-b নাও পাঠানো যায় — tmux-এর প্রেফিক্স বদলে ফেলো (set -g prefix C-a)। আর স্ক্রল-প্রাচীরে ([) ঢুকে pgup/pgdn-এ আটকে যাওয়া নতুনদের ক্লাসিক — q মনে রেখো। শেষ-কথা: পুরোনো ঘরের স্তূপ (tmux ls-এ দশটা পুরোনো) মাঝে মাঝে পরিষ্কার করো — kill-session।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The panel-house caution:</strong> rooms live on the server — a reboot kills them all; for truly long work the insurance is nohup/disown (Door 5) or systemd, planned separately. Mobile SSH clients may not send Ctrl-b — remap the prefix (set -g prefix C-a). The scrollback ([) pgup-trap is the newbie classic — remember q. Finally: clear old room piles with kill-session now and then.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অরক্ষিত SSH</div>নেট-কাটা = কাজ-মৃত্যু · এক পর্দায় সব গুলিয়ে · স্ক্রলে মাউস-হতাশা · দশটা পুরোনো ঘর-স্তূপ</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ কামাল সাহেবের রীতি</div>গুরুত্বপূর্ণ কাজ ঘরে (new -s নাম) · detach-মুক্তি, attach-প্রত্যাবর্তন · ফলকে সমান্তরাল-চোখ · [ … q স্ক্রল-শৃঙ্খলা</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">Ctrl-b d</div><div class="sc-label">detach — কাজ চলবে</div></div>
<div class="stat-card"><div class="sc-num">attach -t</div><div class="sc-label">ঘরে ফেরা</div></div>
<div class="stat-card"><div class="sc-num">% / "</div><div class="sc-label">ফলক-ভাগ: পাশে/নিচে</div></div>
<div class="stat-card"><div class="sc-num">[ … q</div><div class="sc-label">স্ক্রল-প্রাচীর খোলো/বন্ধ</div></div>
</div>

<p class="verse">সাহায্যের পাঠ: কাজে অবিরামতা এক নিয়ামত — কুরআন বলে মানুষের হিসাব রক্ষণাবেক্ষণ করার জন্য লেখনী ব্যবহার করো; প্র্যানেল-বাড়িও তাই: তোমার অনুপস্থিতিতেও কাজের হিসাব অটুট। যে কাজ থামতে নেই, সে কাজ ঘরে রাখো।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🪟 ঘণ্টা Ctrl-b, তারপর কথা; d-বেরোনো (কাজ বেঁচে), attach-t ফেরা; %/" ফলক, [ … q স্ক্রল।<br>কারণ: SSH কাটা মানে কাজের মৃত্যু নয় — ঘর সার্ভারে বেঁচে।</div></div>`,
  senior: {
    title: "প্যানেল-বাড়ির খাতা — The Panel-House Ledger",
    body: `<ul class="checklist">
<li>গুরুত্বপূর্ণ কাজ সবসময় <strong>tmux new -s নাম</strong>-এ শুরু।</li>
<li><strong>Ctrl-b d</strong> বেরোনো, <strong>tmux attach -t</strong> ফেরা; <strong>tmux ls</strong> তালিকা।</li>
<li>ফলক: <strong>% / "</strong>; পূর্ণ-পর্দা <strong>z</strong>; স্ক্রল <strong>[ … q</strong>।</li>
<li>মোবাইল-ক্লায়েন্টে প্রেফিক্স বদল (<strong>set -g prefix C-a</strong>)।</li>
<li>রিবুটে ঘর মরে — দীর্ঘ-কাজের আসল বিমা nohup/systemd (দরজা ৫)।</li>
</ul>`
  }
});

// ── DOOR 9 · মোসাররফ কামারের জাহাজ-গোদাম — Mosarrof Kamar's Shipyard ──
doors.push({
  num: 18,
  icon: "🚢",
  color: "#fb923c",
  name: "মোসাররফ কামারের জাহাজ-গোদাম",
  subtitle: "Mosarrof Kamar's Shipyard",
  tech: "set -euo pipefail · trap · mktemp · getopts",
  spirit: "আমানত — প্রতিটা কাজ ফেরত দেওয়ার নিয়ম",
  secret: "নৌকা বানানোর আগে নিয়ম লেখো: set -euo pipefail মানে গলদ হলে থেমে যাও, গোপন করো না; trap মানে যাই হোক ঘাট পরিষ্কার রেখে যাও; আর তালার খাতায় লেখো নয় — সাময়িক ঘর mktemp-এ।",
  recall: {
    q: "স্ক্রিপ্টে এক ধাপ ব্যর্থ হলেও পরের ধাপ চলে যাচ্ছে, শেষে 0 রিটার্ন করে — সবাই ভাবে সব ঠিক। কোন তিন নিয়ম দিয়ে জাহাজটাকে সৎ করবে?",
    qen: "One failed step doesn't stop the script; it barrels on and returns 0 — everyone thinks all is well. Which three rules make the ship honest?",
    a: "① set -e — কোনো কমান্ড ব্যর্থ হলে (শূন্য-নয় প্রস্থান) স্ক্রিপ্ট থামবে; ② set -u — অসংজ্ঞায়িত চলক ব্যবহারে সাথে সাথে ধরা; ③ set -o pipefail — পাইপের ভেতরের নৌকা ডুবলে পুরো সারি ব্যর্থ গণ্য। এক লাইনে: set -euo pipefail। সঙ্গে trap 'rm -f \"\$tmp\"' EXIT — যেভাবেই যাও (সফল, ব্যর্থ, Ctrl+C), সাময়িক ফাইল মুছে যাবে; আর tmp=\$(mktemp) দিয়ে ঘর নাও — /tmp ফোল্ডারে হাতে-নাম বানানো নাম নয়।",
    aen: "① set -e stops the script on any failing command; ② set -u catches undefined variables instantly; ③ set -o pipefail makes a sunken mid-pipe boat fail the whole chain. One line: set -euo pipefail. Add trap 'rm -f \"\$tmp\"' EXIT — however you leave (success, failure, Ctrl+C), the temp file gets cleaned; and take your room via tmp=\$(mktemp), never a hand-invented name in /tmp."
  },
  story: `<p class="scene-setting">মোসাররফ কামার শহরের প্রসিদ্ধ জাহাজ-গোদামের মালিক — বড় নৌকা বানান, দূরের মালবাহী যাত্রার। তাঁর গোদামের দেয়ালে তিনটা লেখা নোঙরের মতো গাঁথা: প্রথমত, কোনো তক্তা ফাটল ধরলে পরের তক্তা নয় — পুরো কাজ থামবে (একটা গলদ দ্বিতীয়টাকে ঢেকে দেয় না); দ্বিতীয়ত, ধার করা যন্ত্র হিসাব ছাড়া ব্যবহার নিষেধ (নাম-নেই জিনিসে হাত দেওয়া নিষেধ); তৃতীয়ত, দিন শেষে যেভাবেই শেষ হোক — কাজ সফল বা ঝগড়ায় ভেঙে — মেঝে ঝাড়ু হবেই। একবার এক শিক্ষানবিশ কারিগর ফাটা তক্তা ঢেকে পেঁচিয়ে জাহাজ বানিয়ে ফেলেছিল — মাঝনদীতে সেই ফাটলই মাল ডুবিয়েছিল; সেদিনই এই তিন নোঙর লেখা হয়। আর বাইরের লোক অবাক হয় যে মোসাররফ সাহেব প্রতিটা কাজ শুরুর আগে কাগজে নিয়ম লেখেন — কারিগরদের বই নয়, তাঁর বই: যা কাজে হয়নি, তা কাগজে বলে দেবে।</p>
<p class="scene-setting en">Mosarrof Kamar owns the city's famed shipyard — he builds long-haul cargo boats. Three rules are nailed to his wall like anchors: first, a cracked plank stops the whole build (one fault never gets buried under the next); second, no touching a tool that is not on the ledger (no handling nameless things); third, however the day ends — success or a broken contract — the floor gets swept. Once an apprentice buried a cracked plank under wrappings and finished the ship; mid-river that very crack sank the cargo; the three anchors were written that day. And outsiders marvel that before every job he writes the rules on paper — not the craftsmen's book, his book: what did not happen at work will say so on paper.</p>

<div class="code-block">#!/usr/bin/env bash
# জাহাজ-গোদামের তিন নোঙর + ঝাড়ু-নিয়ম — প্রতিটা সিরিয়াস স্ক্রিপ্টের প্রথম লাইনগুলো:
set -euo pipefail
#   -e        -> কোনো ধাপ ব্যর্থ? থামো (গলদ ঢাকা নিষেধ)
#   -u        -> অসংজ্ঞায়িত চলক? সাথে সাথে ধরা
#   -o pipefail -> পাইপের ভেতরের ব্যর্থতাও পুরো সারির ব্যর্থতা

# সাময়িক ঘর — হাতে-নাম নয়, সিস্টেমের দেওয়া নাম:
tmp=\$(mktemp)                # অনন্য নাম, নিরাপদ
tmpdir=\$(mktemp -d)
trap 'rm -f "\$tmp"' EXIT      # যেভাবেই যাও, ঘর ছেড়ে দাও
#   EXIT-এর জায়গায় INT হলে Ctrl+C-ও ধরে; EXIT সব-ই জোড়ে

# স্ক্রিপ্টের দরজায় পাহারা — আর্গুমেন্ট চেক:
usage() { echo "ব্যবহার: \$0 <নাম>"; exit 1; }
[ "\$#" -ge 1 ] || usage      # খালি হাতে এলে ফেরত
name="\${1:?নাম দাও}"          # না দিলে থেমে যাবে, কারণসহ (set -u-ও তো আছে)

# অপশন-পতাকা পড়া — getopts:
verbose=0
while getopts ":vo:" opt; do
  case \$opt in
    v) verbose=1 ;;
    o) outfile="\$OPTARG" ;;
    \?) echo "অজানা পতাকা: -\$OPTARG" >&2; exit 1 ;;
  esac
done
shift \$((OPTIND-1))          # পতাকা ছাড়া আসল আর্গুমেন্টে যাও

# ধাপে ধাপে সৎ রিপোর্ট:
step() { echo "==> \$*"; }
step "ব্যাকআপ নিচ্ছি"
rsync -a /srv/app "\$tmpdir/" || { echo "ব্যাকআপ ব্যর্থ" >&2; exit 1; }
step "ডিপ্লয় করছি"
./deploy.sh
step "শেষ — \$name"

# পরীক্ষার আয়না — চোখের সামনে কী চলছে:
bash -x script.sh             # প্রতিটা লাইন আগে দেখায়
bash -n script.sh             # শুধু ব্যাকরণ মিলিয়ে দেখে, চালায় না
# অথবা স্ক্রিপ্টের ভেতরে: set -x ... set +x ব্লক ধরে

# শেষ প্যাঁচি — সৎ হিসাব:
exit 0</div>

<div class="diagram">
<div class="diag-title">তিন নোঙর ও ঝাড়ু-নিয়ম — The Three Anchors and the Sweeping Rule</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowM" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fb923c"/></marker>
</defs>
<rect class="node-hot" x="15" y="15" width="160" height="52" rx="10"/><text class="lbl-hot" x="95" y="37">set -e</text><text class="lbl-sm" x="95" y="55">গলদ হলে থামো</text>
<rect class="node-hot" x="200" y="15" width="160" height="52" rx="10"/><text class="lbl-hot" x="280" y="37">set -u</text><text class="lbl-sm" x="280" y="55">নাম-নেই চলক নিষেধ</text>
<rect class="node-hot" x="385" y="15" width="160" height="52" rx="10"/><text class="lbl-hot" x="465" y="37">pipefail</text><text class="lbl-sm" x="465" y="55">পাইপের ডুব ধরা</text>
<rect class="node" x="15" y="105" width="230" height="52" rx="10"/><text class="lbl" x="130" y="127">tmp=\$(mktemp)</text><text class="lbl-sm" x="130" y="145">সাময়িক ঘর — অনন্য নাম</text>
<rect class="node-leaf" x="315" y="105" width="230" height="52" rx="10"/><text class="lbl-leaf" x="430" y="127">trap ... EXIT</text><text class="lbl-sm" x="430" y="145">যেভাবেই যাও, ঝাড়ু হবে</text>
<rect class="cell" x="15" y="170" width="530" height="24" rx="6"/><text class="lbl-sm" x="280" y="186">set -euo pipefail + mktemp + trap EXIT — সিরিয়াস স্ক্রিপ্টের প্রথম পাঁচ লাইন, এই ক্রমেই</text>
<line x1="95" y1="67" x2="115" y2="103" stroke="#fb923c" stroke-width="2" fill="none" marker-end="url(#arrowM)"/>
<line x1="280" y1="67" x2="243" y2="100" stroke="#fb923c" stroke-width="2" fill="none" marker-end="url(#arrowM)"/>
<line x1="465" y1="67" x2="440" y2="103" stroke="#fb923c" stroke-width="2" marker-end="url(#arrowM)"/>
</svg>
<div class="diag-cap">তিন নোঙর থামায়, ঝাড়ু-নিয়ম পরিষ্কার রাখে — জাহাজ সৎ হয় দুই দিক থেকেই।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গোদাম-সতর্কতা:</strong> set -e সব ডুব আটকায় না — if শর্তের ভেতরে বা || এর ডানে বসা কমান্ড "পরীক্ষা" গণ্য হয়, সে ফেল দিলেও স্ক্রিপ্ট চলে। এজন্যই গুরুত্বপূর্ণ ধাপে স্পষ্ট লেখো: cmd || { echo "কারণ" >&2; exit 1; }। আর trap বিহীন mktemp মানে ব্যর্থ স্ক্রিপ্টের পেছনে সারি সারি পরিত্যক্ত ঘর — প্রতিটা mktemp-এর সঙ্গে trap লেখো, একই কলমে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Shipyard caution:</strong> set -e is not omniscient — a command inside an if condition or on the right of || counts as a "test" and its failure flows past. So write critical steps explicitly: cmd || { echo "reason" >&2; exit 1; }. And mktemp without trap means a trail of abandoned rooms behind failed runs — write the trap in the same breath as the mktemp.</div></div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>কামার সাহেবের ছাঁচনামা (কপি-পেস্ট করো):</strong> প্রতিটা নতুন সিরিয়াস স্ক্রিপ্টের চূড়ায় — #!/usr/bin/env bash, তারপর set -euo pipefail, তারপর tmp=\$(mktemp) + trap 'rm -f "\$tmp"' EXIT। এই পাঁচ লাইনেই তোমার স্ক্রিপ্ট অনেকাংশে প্রোডাকশন-প্রস্তুত; বাকিটা দরজা 7-এর জাল আর দরজা 11-এর হিসাব।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Kamar's template (copy-paste):</strong> at the top of every serious script — #!/usr/bin/env bash, then set -euo pipefail, then tmp=\$(mktemp) + trap 'rm -f "\$tmp"' EXIT. These five lines make a script production-ready in large part; the rest is Door 7's nets and Door 11's accounting.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ নোঙরহীন জাহাজ</div>এক ধাপ ডুবলেও পরের ধাপ · শেষে exit 0 · /tmp/myfile হাতে-নাম ঘর · ব্যর্থ রানের পরেও অস্বাভাবিক শান্ত আউটপুট</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ তিন-নোঙর জাহাজ</div>set -euo pipefail · প্রতিটা mktemp-এর সঙ্গে trap EXIT · গুরুত্বপূর্ণ ধাপে || { …; exit 1; } · bash -n/-x দিয়ে পরীকhান</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">set -euo</div><div class="sc-label">তিন নোঙর, এক লাইনে</div></div>
<div class="stat-card"><div class="sc-num">trap EXIT</div><div class="sc-label">যেভাবেই যাও, ঝাড়ু</div></div>
<div class="stat-card"><div class="sc-num">mktemp</div><div class="sc-label">অনন্য সাময়িক ঘর</div></div>
<div class="stat-card"><div class="sc-num">bash -x</div><div class="sc-label">কাচের দেয়াল — ভেতর দেখো</div></div>
</div>

<p class="verse">আমানত — কাজ ফেরত দেওয়ার নিয়ম: কুরআন বলে প্রতিটা আমানত তার হকদারকে ফিরিয়ে দাও (৪:৫৮, ভাবানুবাদ)। জাহাজ-গোদামের বইখাতাও আমানত: কাজ যা করেনি, কাগজে স্পষ্ট লেখো — সফল প্যাঁচি নয়, সৎ প্যাঁচি; আর ঘাট যেভাবেই ছাড়ো, পরিষ্কার রেখে ছাড়ো।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🚢 স্ক্রিপ্টের চূড়ায় set -euo pipefail; প্রতিটা mktemp-এর সঙ্গে trap EXIT।<br>কারণ: গোপন গলদ মাঝনদীতে ডুবে — কাগজে বলা গলদ ঘাটেই থাকে।</div></div>`,
  senior: {
    title: "জাহাজ-গোদামের বিধি — The Shipyard Code",
    body: `<ul class="checklist">
<li>প্রতিটা সিরিয়াস স্ক্রিপ্টের দ্বিতীয় লাইন <strong>set -euo pipefail</strong> — আজ থেকে অভ্যাস।</li>
<li>সাময়িক ফাইল শুধু <strong>mktemp</strong> দিয়ে; সঙ্গে সঙ্গে <strong>trap 'rm -f …' EXIT</strong>।</li>
<li>আর্গুমেন্ট পাহারা: <strong>\${1:?বার্তা}</strong> বা [ "\$#" -ge 1 ] || usage।</li>
<li>গুরুত্বপূর্ণ ধাপ স্পষ্ট করো: <strong>cmd || { echo কারণ >&2; exit 1; }</strong> — set -e-এর ফাঁক পূরণ।</li>
<li>চালানোর আগে <strong>bash -n</strong>, দেখতে <strong>bash -x</strong> — কাচের দেয়ালে কাজ দেখো।</li>
</ul>`
  }
});

// ── DOOR 19 · নগর-নাড়ির দরবার — The City-Pulse Court ──
doors.push({
  num: 19,
  icon: "🫀",
  color: "#22d3ee",
  name: "নগর-নাড়ির দরবার",
  subtitle: "The City-Pulse Court",
  tech: "df/du · free · uptime · ps aux · lsof · ss -tulpn",
  spirit: "মুতাআলা — অবস্থা পড়ে সিদ্ধান্ত",
  secret: "মেশিন এক নগরী: ডাক্তারের চার প্রশ্নই যথেষ্ট — জায়গা আছে? (df/du), শক্তি আছে? (free), কে ব্যস্ত? (top/ps), কোন দরজা খোলা? (ss/lsof); প্রতিটা উত্তর এক আদেশে, আর লক্ষণগুলো একসাথে পড়লেই রোগ ধরা যায় — একা কোনো সংখ্যা রোগ নয়, প্রবণতা রোগ।",
  recall: {
    q: "সার্ভার হঠাৎ ধীর — 'ডিস্ক ফুল' নাকি 'মেমরি ফুল' নাকি 'কেউ সিপিইউ খেয়ে ফেলেছে' — তিন সন্দেহের তিনটা প্রথম আদেশ, আর কোন ফোল্ডার মেশিন ভরাট করছে তা বের করার এক-লাইন?",
    qen: "Server suddenly slow — disk full, memory full, or a CPU eater? First command per suspicion, and the one-liner to find which folder is eating the machine?",
    a: "① ডিস্ক: df -h — প্রতি ফাইলসিস্টেমের ব্যবহার%; 100% দেখলেই অপরাধী-খোঁজা: du -xh --max-depth=1 / 2>/dev/null | sort -rh | head — কোন ফোল্ডার সবচেয়ে ভারী, তার র‍্যাঙ্ক। ② মেমরি: free -h — available-লাইনই আসল সূচক (cached মেমরি ভয় নয়, ওটা সস্তা-ক্যাশ); swap-ব্যবহার বাড়লে বিপদ। ③ সিপিইউ: top (P-চাবিতে সিপিইউ-ক্রম) বা ps aux --sort=-%cpu | head — শীর্ষ-ভক্ষকের তালিকা। বোনাস-দরজা: ss -tulpn — কোন পোর্টে কে শোনে; lsof -i :8000 — নির্দিষ্ট পোর্টের মালিক। চার আদেশে নগরীর নাড়ি হাতে: জায়গা, শক্তি, ব্যস্ততা, দরজা।",
    aen: "① Disk: df -h — per-filesystem use%; at 100% hunt the culprit: du -xh --max-depth=1 / 2>/dev/null | sort -rh | head — rank the heaviest folders. ② Memory: free -h — the available line is the real indicator (cached memory is cheap, not danger); rising swap is the alarm. ③ CPU: top (press P) or ps aux --sort=-%cpu | head — list the eaters. Bonus doors: ss -tulpn — who listens where; lsof -i :8000 — port owner. Four commands hold the city's pulse: space, power, busyness, doors.",
    you: "df -h | head -5; du -xh --max-depth=1 ~ 2>/dev/null | sort -rh | head -5; free -h; ps aux --sort=-%cpu | head -4; ss -tulpn 2>/dev/null | head -5 || netstat -tulpn 2>/dev/null | head -5"
  },
  story: `<p class="scene-setting">নগর-নাড়ির দরবারে বসেন ডাক্তার জাফর — শহরের লোক তাঁকে ডাকে "মেশিন-ডাক্তার"। তাঁর পদ্ধতি অদ্ভুত সহজ: রোগী এলেই চারটা প্রশ্ন, কোনো যন্ত্র ছাড়াই। প্রথম: শহরে জায়গা আছে? (df -h — ভরা শহরে নতুন বাড়ি ওঠে না, লগও লেখা যায় না)। দ্বিতীয়: গুদামে জ্বালানি আছে? (free -h — মেমরি; তবে ক্যাশে-ভরা গুদাম ভয়ের নয়, ওটা সস্তা-মজুত)। তৃতীয়: কারা সবচেয়ে ব্যস্ত? (top/ps — এক কারিগর সব শক্তি খেয়ে ফেললে শহর থমকে যায়)। চতুর্থ: কোন দরজায় কে পাহারা? (ss -tulpn — খোলা দরজার তালিকা; অচেনা দরজা = চোরের সন্দেহ)। তাঁর বিখ্যাত উক্তি: একটা সংখ্যা রোগ নয় — প্রবণতা রোগ; আজ ৯০%, কাল ৯০%, পরশু ৯৩% — এই ধারা দেখো, তারপর ভয় পাও। আর ওষুধের আগে রোগ-নির্ণয়: কোন ফোল্ডার শহর ভরাট করছে (du -xh --max-depth=1) — সেটাই তাঁর স্টেথোস্কোপ।</p>
<p class="scene-setting en">Dr. Jafar holds the city-pulse court — people call him the machine-doctor. His method is strangely simple: four questions, no machines. One: is there space? (df -h — a full city builds no new houses, writes no logs). Two: fuel in the store? (free -h — memory; but a cache-filled store is not danger, that is cheap stock). Three: who is busiest? (top/ps — one craftsman eating all the power stalls the city). Four: who guards which door? (ss -tulpn — the open-door list; an unknown door smells of thieves). His famous line: one number is not a disease — a TREND is; 90% today, 90% tomorrow, 93% the day after — watch the slope, then worry. And diagnosis before medicine: which folder fills the city (du -xh --max-depth=1) — that is his stethoscope.</p>

<div class="code-block"># চার প্রশ্ন — নগরীর নাড়ি:
df -h                      # জায়গা: প্রতি ফাইলসিস্টেম %; 100% = বিপদ
free -h                    # জ্বালানি: available-লাইন দেখো (cached≠বিপদ)
uptime                     # লোড-গড়: 1.5 1.2 0.9 (১/৫/১৫ মিনিট; কোর-সংখ্যার সাথে তুলো)
ps aux --sort=-%cpu | head # কে শক্তি খাচ্ছে — শীর্ষ তালিকা
top                        # জীবন্ত দর্শন; P=সিপিইউ-ক্রম, M=মেমরি-ক্রম, q=বেরোনো

# অপরাধী-খোঁজা (ডিস্ক ভরাট কে?):
du -xh --max-depth=1 / 2>/dev/null | sort -rh | head
#   -x: এক ফাইলসিস্টেমে থাকো (মাউন্ট-লাফ নয়)
du -sh ~/.cache ~/Downloads/* | sort -rh | head
df -h / && du -xh --max-depth=1 /var 2>/dev/null | sort -rh | head -3

# খোলা দরজা (কে কোথায় শোনে?):
ss -tulpn                  # t=tcp u=udp l=listen p=process n=numeric
lsof -i :8000              # নির্দিষ্ট পোর্টের মালিক কে?
lsof +D /var/log           # এই ফোল্ডারের ফাইল কারা খুলে রেখেছে

# লক্ষণ-জোড়া (একসাথে পড়ো):
#   df 100% + লগ-লেখা ব্যর্থ        → লগ-রোটেশন/পুরোনো বাক্স মুছো
#   free available কম + swap ব্যস্ত → মেমরি-লিক সন্দেহ (top M)
#   load বাড়ছে + এক প্রসেস শীর্ষে   → সেই প্রসেসের খাতা পরো
#   পোর্ট খোলা কিন্তু অচেনা          → lsof -i :পোর্ট — মালিক যাচাই</div>

<table class="kv-table">
<tr><th>প্রশ্ন</th><th>আদেশ</th><th>সূচক</th></tr>
<tr><td class="hl">জায়গা?</td><td>df -h / du -xh</td><td>% ও ভারী-ফোল্ডার</td></tr>
<tr><td class="hll">জ্বালানি?</td><td>free -h</td><td>available (cached নয়)</td></tr>
<tr><td class="hl">ব্যস্ত কে?</td><td>top / ps --sort=-%cpu</td><td>শীর্ষ-প্রসেস, load</td></tr>
<tr><td class="hll">দরজা কার?</td><td>ss -tulpn / lsof -i</td><td>পোর্ট↔মালিক মিল</td></tr>
<tr><td class="hl">প্রবণতা?</td><td>বারবার মাপা</td><td>এক সংখ্যা নয়, ধারা</td></tr>
</table>

<div class="diagram">
<div class="diag-title">ডাক্তারের চার প্রশ্ন — The Doctor's Four Questions</div>
<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar60d19" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="70" width="120" height="44" rx="10"/><text class="lbl" x="75" y="88">রোগী (মেশিন)</text><text class="lbl-sm" x="75" y="104">ধীর, থমকানো</text>
<rect class="node-cyan" x="175" y="18" width="110" height="36" rx="8"/><text class="lbl-sm" x="230" y="40">df -h জায়গা</text>
<rect class="node-cyan" x="175" y="60" width="110" height="36" rx="8"/><text class="lbl-sm" x="230" y="82">free -h জ্বালানি</text>
<rect class="node-cyan" x="175" y="102" width="110" height="36" rx="8"/><text class="lbl-sm" x="230" y="124">top/ps ব্যস্ততা</text>
<rect class="node-cyan" x="175" y="144" width="110" height="36" rx="8"/><text class="lbl-sm" x="230" y="166">ss -tulpn দরজা</text>
<rect class="node-leaf" x="335" y="70" width="210" height="44" rx="10"/><text class="lbl-leaf" x="440" y="88">রোগ-নির্ণয়</text><text class="lbl-sm" x="440" y="104">লক্ষণ-জোড়া + প্রবণতা পড়ে</text>
<line x1="135" y1="80" x2="171" y2="40" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d19)"/>
<line x1="135" y1="88" x2="171" y2="78" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d19)"/>
<line x1="135" y1="96" x2="171" y2="120" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d19)"/>
<line x1="135" y1="104" x2="171" y2="160" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d19)"/>
<line x1="285" y1="92" x2="331" y2="92" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar60d19)"/>
</svg>
<div class="diag-cap">চার প্রশ্নের উত্তর জোড়া দিলেই ছবি — একটা সংখ্যা নয়, প্রবণতাই রোগ।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>মেশিন-ডাক্তারের সতর্কতা:</strong> free-র 'free' কলাম একা দেখে আতঙ্ক নয় — লিনাক্স cached-মেমরি সস্তা-মজুত হিসেবে রাখে; আসল সূচক available। ডিস্ক ভরা মানে অদ্ভুত রোগের জন্ম — লগ লেখা ব্যর্থ, ডাটাবেস লক, এমনকি ssh-লগইনও ব্যর্থ; তাই df প্রথম প্রশ্ন। du রুটে চালালে -x দাও (মাউন্ট-পয়েন্ট লাফ না করে) আর 2>/dev/null অনুমতি-গোলমাল ঢাকে। ss না থাকলে netstat -tulpn পুরোনো জগতে; lsof ভারী মেশিনে ধীর — ধৈর্য বা নির্দিষ্ট পোর্টে -i দাও।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The machine-doctor's caution:</strong> never panic at the 'free' column alone — Linux keeps cached memory as cheap stock; the real indicator is available. A full disk breeds strange diseases — failed log writes, database locks, even failed ssh logins; hence df first. When running du from root: use -x (no mount-point jumps) and 2>/dev/null to silence permission noise. No ss? netstat -tulpn is the old world; lsof is slow on loaded machines — scope it with -i :port.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ এক-সংখ্যার আতঙ্ক</div>free কম দেখে রিস্টার্ট · df একবার দেখে মুছামুছি · top-এ দাঁড়িয়ে শুধু প্রথম প্রসেস · পোর্ট-তালিকা কখনো দেখে না</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ জাফর ডাক্তারের রীতি</div>চার প্রশ্ন ক্রমে · available-সূচক · প্রবণতা-পাঠ · অপরাধী-খোঁজা du -xh · দরজায় ss -tulpn</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">df -h</div><div class="sc-label">জায়গা আছে?</div></div>
<div class="stat-card"><div class="sc-num">free -h</div><div class="sc-label">available দেখো</div></div>
<div class="stat-card"><div class="sc-num">ps --sort=-%cpu</div><div class="sc-label">শীর্ষ-ভক্ষক</div></div>
<div class="stat-card"><div class="sc-num">ss -tulpn</div><div class="sc-label">দরজা↔মালিক</div></div>
</div>

<p class="verse">মুতাআলার পাঠ: কুরআন বারবার বলে আকাশ-জমিনের অবস্থা পর্যবেক্ষণ করো; হাদিসে রোগ নির্ণয়ের আগে ওষুধ নয়। মেশিন-ডাক্তারও: প্রথমে প্রশ্ন (df/free/top/ss), তারপর ছুরি — এবং এক সংখ্যা নয়, ধারা দেখো।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🫀 নাড়ি-চার প্রশ্ন: df -h জায়গা, free -h জ্বালানি (available!), top/ps ব্যস্ততা, ss -tulpn দরজা; প্রবণতাই রোগ।<br>কারণ: ওষুধের আগে রোগ-নির্ণয় — আর রোগ ধরা যায় লক্ষণ-জোড়ায়।</div></div>`,
  senior: {
    title: "নগর-নাড়ির খাতা — The City-Pulse Ledger",
    body: `<ul class="checklist">
<li>প্রথম প্রশ্ন <strong>df -h</strong>; ভরা দেখলে <strong>du -xh --max-depth=1 … | sort -rh</strong>।</li>
<li>মেমরি: <strong>free -h</strong>-র <strong>available</strong> লাইন; swap-প্রবণতা দেখো।</li>
<li>সিপিইউ: <strong>top</strong> (P/M) বা <strong>ps aux --sort=-%cpu | head</strong>; load vs কোর-সংখ্যা।</li>
<li>পোর্ট: <strong>ss -tulpn</strong>; নির্দিষ্ট পোর্টে <strong>lsof -i :N</strong>।</li>
<li>সিদ্ধান্ত এক সংখ্যায় নয় — <strong>প্রবণতায়</strong>; লক্ষণ-জোড়া পড়ে রোগ নির্ণয়।</li>
</ul>`
  }
});

// ── DOOR 10 · স্রোতের সিংহাসন — The Throne of Streams (Synthesis) ──
doors.push({
  num: 20,
  icon: "👑",
  color: "#fbbf24",
  name: "স্রোতের সিংহাসন",
  subtitle: "The Throne of Streams",
  tech: "Unix philosophy · McIlroy's vision · synthesis",
  spirit: "তাওহীদ — বহুতে এক দেখা",
  secret: "ন-দরজার ন-উস্তাদ নয়টা যন্ত্র শেখালেন; কিন্তু সিংহাসনে বসলে দেখো — সবাই একটাই কথা বলে: সবকিছু পানি, সবকিছু স্রোত, ছোট ধার জোড়া দাও — এটাই McIlroy-র দর্শন, এটাই পুরো শহরের আইন।",
  recall: {
    q: "ন-দরজার ন-উস্তাদ কারা, আর তাঁদের সবার নিচে ধরে রাখা একটাই নীতি কী?",
    qen: "Who are the nine masters of the nine doors, and what single principle underlies them all?",
    a: "কালু মিয়া (ঘাট-পরিচয়), নসরত মিস্ত্রি (খাল/pipe), মুন্সী (ভাষা/expansion), জালিম মিয়া (জাল/filters), হারুন মাঝি (নৌকা/process), ফুলজান খালা (আচার/.bashrc), বাবুল (স্মৃতি/history), আয়েশা সিদ্দিকা (দূরের ঘাট/ssh-tmux-rsync), মোসাররফ কামার (জাহাজ-গোদাম/script safety)। সবার নিচে একটাই নীতি: সবকিছু টেক্সট-স্রোত, যন্ত্র ছোট ও ধারালো, জোড়া দিয়ে বড় কাজ — McIlroy-র বিখ্যাত নির্দেশ: এমন প্রোগ্রাম লেখো যে একটাই কাজ ভালো করে, এবং টেক্সট-স্রোতকে সর্বজনীন ইন্টারফেস ধরে চলো।",
    aen: "Kalu mia (the ghat), Nasrat the mason (canals/pipes), the Munshi (language/expansions), Jalim mia (nets/filters), Harun the boatman (processes), Fuljan khala (rituals/.bashrc), Babul (memory/history), Ayesha Siddiqa (the far ghat/ssh-tmux-rsync), Mosarrof Kamar (shipyard/script safety). Under all nine, one principle: everything is a text stream, tools are small and sharp, composition builds big work — McIlroy's famous directive: write programs that do one thing well, and treat the text stream as the universal interface."
  },
  story: `<p class="scene-setting">শহরের কেন্দ্রে একটাই সিংহাসন — স্রোতের সিংহাসন। ন-দরজার ন-উস্তাদ তোমাকে একে একে তাঁদের কারিগরি শিখিয়ে পাঠালেন; আজ তুমি সিংহাসনের সিঁড়িতে। উপরে উঠে দেখো — পুরো শহর এক নজরে: কালু মিয়ার ঘাটে নৌকা ভেড়ছে, নসরত মিস্ত্রির খালে পানি চলছে, জালিম মিয়ার জাল ঝাড়া দিচ্ছে, হারুন মাঝির খাতায় প্যাঁচি জমছে, ফুলজান খালার জার রোজ ভরছে, বাবুলের খাতায় সব লেখা, আয়েশা সিদ্দিকার গরু-গাড়ি ওপারে যাচ্ছে, মোসাররফ কামারের গোদাম থেকে নতুন জাহাজ নামছে। কিন্তু উচ্চতা থেকে চোখ মুছলে দেখো — ন-টা কারিগরখানা আলাদা নয়। সবাই একটাই নদীর ধারে: ঘাটও পানি, খালও পানি, জালও পানি ছাঁকে, নৌকাও পানি বেয়ে যায়। সবকিছু পানি — এবং পানি জোড়া দেওয়াই শহর।</p>
<p class="scene-setting en">At the city's heart stands one throne — the Throne of Streams. The nine masters taught you their crafts door by door; today you climb its stair. From the top the whole city appears at once: boats docking at Kalu's ghat, water flowing in Nasrat's canals, Jalim's nets shaking, tokens accumulating in Harun's ledger, Fuljan's jars filling daily, Babul's ledger written, Ayesha's carts crossing, new ships leaving Mosarrof's yard. But rub your eyes at that height — the nine workshops are not separate. All stand on one river: the ghat is water, the canal is water, the net strains water, the boat rides water. Everything is water — and joining water is the city.</p>

<div class="dialogue">সিংহাসনের ধারে বসে তুমি জিজ্ঞেস করো — এত যন্ত্র, এত নিয়ম, নিচে কী আছে? ন-উস্তাদ একসাথে উত্তর দেন, যেন এক মুখ: নিচে কেউ নেই — নিচে পানি আছে। কালু মিয়া বলেন: আমার ঘাট শুধু পানির সাথে দেখা। নসরত মিস্ত্রি বলেন: আমার খাল শুধু পানি চালায়। মুন্সী বলেন: আমার ভাষা পানির নাম বদলায়, পানি নয়। জালিম মিয়া বলেন: আমার জাল পানি ছাঁকে। হারুন মাঝি বলেন: আমার নৌকা পানিতে চলে, হিসাব পানির বইতে। ফুলজান খালা বলেন: আমার আচার প্রতিদিনের পানির গতিপথ। বাবুল বলেন: আমার খাতায় পানির কথা লেখা। আয়েশা সিদ্দিকা বলেন: ওপারের শহরও এই পানিরই ধারায়। মোসাররফ কামার বলেন: আমার জাহাজ পানি বাঁচাতে শেখায়। ন-জন ন-কথা — একটাই অর্থ: সবকিছু স্রোত, আর স্রোত জোড়া দেওয়াই সব।</div>
<div class="dialogue en">Seated at the throne's edge you ask — so many tools, so many rules; what lies underneath? The nine masters answer as one voice: nothing lies underneath — water lies underneath. Kalu: my ghat only meets the water. Nasrat: my canal only moves water. The Munshi: my language renames the water, never replaces it. Jalim: my nets strain water. Harun: my boats ride water, their accounts are written in water. Fuljan khala: my rituals shape the daily current. Babul: my ledger records what the water said. Ayesha: the far city drinks from this same stream. Mosarrof: my shipyard teaches the water to be survived. Nine voices — one meaning: everything is a stream, and joining streams is everything.</p>
</div>

<div class="code-block"># সিংহাসনের দৃষ্টি — এক লাইনে পুরো শহর (ন-দরজার সব কৌশল):
journalctl -u ledgerpilot --since today | grep -i error | awk '{print \$5}' | sort | uniq -c | sort -rn | head -5 | tee /tmp/top.txt | mail -s "আজকের গলদ" admin@x
#   দরজা 11: journalctl সেবা-নৌকার কাঠামো    দরজা 7: grep-awk-sort-uniq জাল-সারি
#   দরজা 3: | খালে খালে প্রবাহ                দরজা 4: awk-এর ভেতরে expansion
#   দরজা 14: mail-এর PATH, alias করে রাখো     দরজা 15: লাইনটা Ctrl+R-এ পাবে
#   দরজা 16: দূরের ঘাটে rsync/tmux-এ চালাও    দরজা 18: পুরোটা এক স্ক্রিপ্টে set -euo pipefail

# McIlroy-র নির্দেশ (ভাবানুবাদ) — সিংহাসনের শিলালিপি:
#   ১. এমন প্রোগ্রাম লেখো যে একটাই কাজ ভালো করে।
#   ২. এমন প্রোগ্রাম লেখো যে একসাথে কাজ করে।
#   ৩. টেক্সট-স্রোতকে সর্বজনীন ইন্টারফেস ধরে চলো।
#   ৪. এমন প্রোগ্রাম লেখো যে এখনই কাজে লাগে।
#   (Doug McIlroy — pipe-এর উদ্ভাবক, Unix দর্শনের জনকদের একজন)

# তোমার জাহাজের নামকরণ-চাবি (আজই বাঁধো):
alias top5='journalctl -u ledgerpilot --since today | grep -i error | awk "{print \$5}" | sort | uniq -c | sort -rn | head -5'
# এক লাইনে ন-দরজা: সেবা (৫) → ছাঁকনি (৪) → খাল (২) → ভাষা (৩) → আচার (৬) → স্মৃতি (৭)</div>

<div class="diagram">
<div class="diag-title">সিংহাসনের মানচিত্র — The Throne's Map of the Nine</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowT" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker>
</defs>
<circle cx="280" cy="125" r="46" class="ring"/><text class="lbl" x="280" y="118" text-anchor="middle">এক নদী</text><text class="lbl-sm" x="280" y="138" text-anchor="middle">সবকিছু স্রোত</text>
<circle cx="90" cy="55" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="90" y="52" text-anchor="middle">১ ঘাট</text><text class="lbl-sm" x="90" y="66" text-anchor="middle">man · cd</text>
<circle cx="280" cy="40" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="280" y="37" text-anchor="middle">২ খাল</text><text class="lbl-sm" x="280" y="51" text-anchor="middle">| · ></text>
<circle cx="470" cy="55" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="470" y="52" text-anchor="middle">৩ ভাষা</text><text class="lbl-sm" x="470" y="66" text-anchor="middle">"\$v" · \${}</text>
<circle cx="60" cy="125" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="60" y="122" text-anchor="middle">৪ জাল</text><text class="lbl-sm" x="60" y="136" text-anchor="middle">grep · sed</text>
<circle cx="500" cy="125" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="500" y="122" text-anchor="middle">৫ নৌকা</text><text class="lbl-sm" x="500" y="136" text-anchor="middle">\$? · kill</text>
<circle cx="90" cy="195" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="90" y="192" text-anchor="middle">৬ আচার</text><text class="lbl-sm" x="90" y="206" text-anchor="middle">bashrc</text>
<circle cx="280" cy="210" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="280" y="207" text-anchor="middle">৭ স্মৃতি</text><text class="lbl-sm" x="280" y="221" text-anchor="middle">Ctrl+R</text>
<circle cx="470" cy="195" r="30" fill="rgba(251,191,36,.14)" stroke="#fbbf24"/><text class="lbl-sm" x="490" y="192" text-anchor="middle">৮ দূরের ঘাট</text><text class="lbl-sm" x="470" y="206" text-anchor="middle">ssh · tmux</text>
<circle cx="175" cy="165" r="0"/><circle cx="405" cy="165" r="0"/>
<line x1="115" y1="70" x2="234" y2="110" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="280" y1="70" x2="280" y2="76" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="445" y1="70" x2="326" y2="110" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="90" y1="85" x2="233" y2="115" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="500" y1="85" x2="327" y2="116" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="120" y1="195" x2="250" y2="210" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="440" y1="195" x2="324" y2="144" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
</svg>
<div class="diag-cap">ন-দরজা এক নদীকে ঘিরে — সব জ্ঞান স্রোতের শাখা; সিংহাসন থেকেই দেখা যায়, সিংহাসনেই বসে যে বুঝল।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সিংহাসনের কঠিন সত্য:</strong> ন-দরজা শেষ নয়, শুরু। যে দরজায় হালকা লাগছে সেটাই আবার খোলো — দ্বিতীয়বার পড়া মানে গভীরে যাওয়া। আর মনে রেখো: এই শহরের সব যন্ত্র বিকল হয়ে যাবে একদিন, নদীটা থেকে যাবে — যন্ত্র শেখো নদীর জন্য, নদীর জন্য যন্ত্র নয়। (Book ৫৯-এর কথা মনে আছে? claude-ও এই নদীরই নৌকা — তার হুক-চুক্তি stdin/stdout-এ, তার স্ক্রিপ্ট এই শহরের বইতে।)</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The throne's hard truth:</strong> nine doors are a beginning, not an end. Whichever door feels light, open it again — second reading is depth. And remember: every tool in this city will one day be obsolete; the river stays. Learn tools for the river's sake, not the river for the tools'. (Book 59's claude is a boat on this same river — its hook contract lives in stdin/stdout, its scripts in this city's ledger.)</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ যন্ত্র-সংগ্রাহক</div>শত কমান্ড মুখস্থ, এক-ও বোঝে না · বিশাল এক-ফাইল স্ক্রিপ্ট · প্রতিটা কাজে নতুন স্ক্রিপ্ট · টুল বদলালে শূন্য</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ স্রোত-কারিগর</div>নীতি এক — সবকিছু স্রোত · ছোট জাল, লম্বা সারি · সারি → আচার (.bashrc) · স্রোত মনে রাখলে নতুন যন্ত্রও চেনা</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">উস্তাদ · দরজা</div></div>
<div class="stat-card"><div class="sc-num">১</div><div class="sc-label">নীতি — সবকিছু স্রোত</div></div>
<div class="stat-card"><div class="sc-num">১০০০</div><div class="sc-label">XP — নগরীর নাগরিক</div></div>
</div>

<p class="verse">তাওহীদের দৃষ্টি: বহুতে এক দেখা। ন-দরজার ন-জগৎ এক নদীতে মিলেছে — যেমন সৃষ্টিজগতের বহু নিদর্শনে এক স্রষ্টার হাত চেনা যায় (কুরআন ৪১:৫৩-এর ভাবানুবাদ: আমার নিদর্শন দেখো)। স্রোতের সিংহাসনে বসে যে দেখে সব জ্ঞান এক ধারার শাখা, তার কাছে নতুন যন্ত্র নতুন ভাষা নয় — পুরোনো নদীর নতুন নাম।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">👑 ন-উস্তাদ, এক নদী: সবকিছু টেক্সট-স্রোত — ছোট ধার জোড়া দাও, বড় কাজ দাঁড়ায়।<br>কারণ: যন্ত্র বিকল হয়, নদী থাকে — নদীর জন্য যন্ত্র শেখো।</div></div>`,
  senior: {
    title: "সিংহাসনের খাতা — The Throne Ledger",
    body: `<ul class="checklist">
<li>আজই <strong>top5 alias</strong> বাঁধো — এক লাইনে ন-দরজার মিলন তোমার রোজকার হোক।</li>
<li>McIlroy-র চার নির্দেশ মুখস্থ নয় — <strong>প্রতিটা নতুন স্ক্রিপ্টে প্রশ্ন করো</strong>: এ কি এক কাজ করে? স্রোত ধরে চলে?</li>
<li>কোন দরজা হালকা লাগছে সেটা <strong>আবার খোলো</strong> — দ্বিতীয়বার পড়াই গভীরে যাওয়া।</li>
<li>Book ৫৯-এর সাথে সেতু: claude-র হুক stdin/stdout চুক্তি, স্ক্রিপ্ট = স্রোত — <strong>দুই বই এক নদীতে</strong>।</li>
<li>শহর ছেড়ে যাওয়ার আগে নয় প্রশ্ন: আমি কি যন্ত্র জমিয়েছি, না নদী চিনেছি?</li>
</ul>`
  }
});
