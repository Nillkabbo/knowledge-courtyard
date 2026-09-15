// ════════════════════════════════════════
// Book 60 · The City of Canals — Doors 6-10
// Every command verified against the GNU Bash
// manual and The Art of Command Line
// ════════════════════════════════════════

// ── DOOR 6 · ফুলজান খালার আচার — Fuljan Khala's Rituals ──
doors.push({
  num: 6,
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

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>খালার প্রথম তিন আচার (আজই বাঁধো):</strong> ① alias ll='ls -la' ② alias gs='git status' ③ mkcd() ফাংশন — এই তিনটা .bashrc-এ বসালেই শহর তোমার অভ্যাস শিখে ফেলেছে। তারপর রোজ যা টাইপ করো, তৃতীয়বার জারে তুলে নাও — দরজা ৪-এর পাঁচ-জাল সারি দিয়ে শুরু করো।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Khala's first three rituals (bind today):</strong> ① alias ll='ls -la' ② alias gs='git status' ③ the mkcd() function — with these three in .bashrc the city has learned your habits. Thereafter, the third time you type anything, jar it — start with Door 4's five-net chain.</div></div>

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
  num: 7,
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
history | grep docker     # জাল দিয়ে ছেঁকে (দরজা ৪)
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
<marker id="arrowB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#c084fc"/></marker>
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
  num: 8,
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
    a: "tmux + ssh: সার্ভারে ssh করে tmux new -s launch চালাও — টার্মিনালটা tmux-এর ভেতরে, সার্ভারেই বাঁচে; ssh-সংযোগ ছিঁড়লেও কিছু হয় না। ফিরে এসে tmux attach -t launch দিয়ে হুবহু সেই পর্দায়। Ctrl+B D মানে detach — বিচ্ছিন্ন, মৃত্যু নয়। এটাই দরজা ৫-এর nohup-এর আধুনিক ভিজ্যুয়াল রূপ: কাজ ঘাটে থাকে, তুমি চলে যাও।",
    aen: "tmux + ssh: ssh in, run tmux new -s launch — the terminal lives inside tmux on the server; a dropped ssh link kills nothing. On return, tmux attach -t launch restores the exact screen. Ctrl+B D is detach — not death. This is Door 5's nohup made modern and visual: the work stays at the ghat while you leave."
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

// ── DOOR 9 · মোসাররফ কামারের জাহাজ-গোদাম — Mosarrof Kamar's Shipyard ──
doors.push({
  num: 9,
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
<marker id="arrowM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fb923c"/></marker>
</defs>
<rect class="node-hot" x="15" y="15" width="160" height="52" rx="10"/><text class="lbl-hot" x="95" y="37">set -e</text><text class="lbl-sm" x="95" y="55">গলদ হলে থামো</text>
<rect class="node-hot" x="200" y="15" width="160" height="52" rx="10"/><text class="lbl-hot" x="280" y="37">set -u</text><text class="lbl-sm" x="280" y="55">নাম-নেই চলক নিষেধ</text>
<rect class="node-hot" x="385" y="15" width="160" height="52" rx="10"/><text class="lbl-hot" x="465" y="37">pipefail</text><text class="lbl-sm" x="465" y="55">পাইপের ডুব ধরা</text>
<rect class="node" x="15" y="105" width="230" height="52" rx="10"/><text class="lbl" x="130" y="127">tmp=\$(mktemp)</text><text class="lbl-sm" x="130" y="145">সাময়িক ঘর — অনন্য নাম</text>
<rect class="node-leaf" x="315" y="105" width="230" height="52" rx="10"/><text class="lbl-leaf" x="430" y="127">trap ... EXIT</text><text class="lbl-sm" x="430" y="145">যেভাবেই যাও, ঝাড়ু হবে</text>
<rect class="cell" x="15" y="170" width="530" height="24" rx="6"/><text class="lbl-sm" x="280" y="186">set -euo pipefail + mktemp + trap EXIT — সিরিয়াস স্ক্রিপ্টের প্রথম পাঁচ লাইন, এই ক্রমেই</text>
<line x1="95" y1="67" x2="115" y2="103" stroke="#fb923c" stroke-width="2" fill="none" marker-end="url(#arrowM)"/>
<line x1="280" y1="67" x2="265" y2="103" stroke="#fb923c" stroke-width="2" fill="none" marker-end="url(#arrowM)"/>
<line x1="465" y1="67" x2="440" y2="103" stroke="#fb923c" stroke-width="2" marker-end="url(#arrowM)"/>
</svg>
<div class="diag-cap">তিন নোঙর থামায়, ঝাড়ু-নিয়ম পরিষ্কার রাখে — জাহাজ সৎ হয় দুই দিক থেকেই।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গোদাম-সতর্কতা:</strong> set -e সব ডুব আটকায় না — if শর্তের ভেতরে বা || এর ডানে বসা কমান্ড "পরীক্ষা" গণ্য হয়, সে ফেল দিলেও স্ক্রিপ্ট চলে। এজন্যই গুরুত্বপূর্ণ ধাপে স্পষ্ট লেখো: cmd || { echo "কারণ" >&2; exit 1; }। আর trap বিহীন mktemp মানে ব্যর্থ স্ক্রিপ্টের পেছনে সারি সারি পরিত্যক্ত ঘর — প্রতিটা mktemp-এর সঙ্গে trap লেখো, একই কলমে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Shipyard caution:</strong> set -e is not omniscient — a command inside an if condition or on the right of || counts as a "test" and its failure flows past. So write critical steps explicitly: cmd || { echo "reason" >&2; exit 1; }. And mktemp without trap means a trail of abandoned rooms behind failed runs — write the trap in the same breath as the mktemp.</div></div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>কামার সাহেবের ছাঁচনামা (কপি-পেস্ট করো):</strong> প্রতিটা নতুন সিরিয়াস স্ক্রিপ্টের চূড়ায় — #!/usr/bin/env bash, তারপর set -euo pipefail, তারপর tmp=\$(mktemp) + trap 'rm -f "\$tmp"' EXIT। এই পাঁচ লাইনেই তোমার স্ক্রিপ্ট অনেকাংশে প্রোডাকশন-প্রস্তুত; বাকিটা দরজা ৪-এর জাল আর দরজা ৫-এর হিসাব।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Kamar's template (copy-paste):</strong> at the top of every serious script — #!/usr/bin/env bash, then set -euo pipefail, then tmp=\$(mktemp) + trap 'rm -f "\$tmp"' EXIT. These five lines make a script production-ready in large part; the rest is Door 4's nets and Door 5's accounting.</div></div>

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

// ── DOOR 10 · স্রোতের সিংহাসন — The Throne of Streams (Synthesis) ──
doors.push({
  num: 10,
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
#   দরজা ৫: journalctl সেবা-নৌকার কাঠামো    দরজা ৪: grep-awk-sort-uniq জাল-সারি
#   দরজা ২: | খালে খালে প্রবাহ                দরজা ৩: awk-এর ভেতরে expansion
#   দরজা ৬: mail-এর PATH, alias করে রাখো     দরজা ৭: লাইনটা Ctrl+R-এ পাবে
#   দরজা ৮: দূরের ঘাটে rsync/tmux-এ চালাও    দরজা ৯: পুরোটা এক স্ক্রিপ্টে set -euo pipefail

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
<marker id="arrowT" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker>
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
<line x1="115" y1="70" x2="245" y2="105" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="280" y1="70" x2="280" y2="76" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="445" y1="70" x2="315" y2="105" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="90" y1="85" x2="165" y2="165" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="500" y1="85" x2="405" y2="165" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="120" y1="195" x2="250" y2="210" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
<line x1="440" y1="195" x2="310" y2="125" stroke="#fbbf24" stroke-width="1.6" fill="none" marker-end="url(#arrowT)"/>
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
