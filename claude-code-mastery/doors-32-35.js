// ════════════════════════════════════════
// Book 59 v6 · The Terminal Craftsman — Capstone Floor (32-35)
// Expert workflow floor: idea → plan → build loop → ship (follow-along guide)
// ════════════════════════════════════════

// ── DOOR 32 · নকশা-টেবিলের আলো — The Drafting Table: From Idea to Plan ──
doors.push({
  num: 32,
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

// ── DOOR 33 · কারখানা-ছন্দের মালিক — The Factory Rhythm: The Build Loop ──
doors.push({
  num: 33,
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

// ── DOOR 34 · নদী-পারাপারের মাঝি — The River Crossing: Ship It ──
doors.push({
  num: 34,
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

// ── DOOR 26 · স্থপতির সিংহাসন — The Architect's Throne ──
doors.push({
  num: 35,
  icon: "🏛️",
  color: "#fbbf24",
  name: "স্থপতির সিংহাসন",
  subtitle: "The Architect's Throne — Full Circle",
  tech: "SDK Deep Mastery · Sandbox · Precedence · Synthesis",
  spirit: "আমানতুল-ফিতরাত — প্রকৃতির ওপর অর্পিত আমানত",
  secret: "দরজা ১-১০ শেখায় চালাতে, ১১-২৫ শেখায় বানাতে ও জোড়াতে, ২৬-৩০ শেখায় গভীর কাস্টমাইজ, ৩১-৩৪ শেখায় আইডিয়া→প্রোডাক্ট — সিংহাসন সব স্রোত এক করে: প্রসঙ্গ, আস্থা, যাচাই — তিন স্তম্ভেই দাঁড়িয়ে আছে কারখানা।",
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

<div class="secret-box"><div class="label">শেষ তালিসমান — The Final Talisman</div><div class="text">🏛️ মাস্টারির তিন তলা: চালাও (১-১০) → বানাও (১১-১৪) → বাড়াও (১৫-১৬) → আইন লেখো (১৭) — SDK-তে ইঞ্জিন, sandbox-এ প্রাচীর, precedence-এ শৃঙ্খলা।<br>কারণ: যে শুধু চালায় সে চাকর, যে বানায় সে কারিগর, যে আইন লেখে সে স্থপতি।</div></div>
<div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 35 — সিংহাসন-সংশ্লেষ</span><pre class="code-block"># ── প্রম্পট ১ · তিন-স্তম্ভের নিজ-পরীক্ষা ──
&gt; আমার কারখানা মাপো তিন স্তম্ভে: প্রসঙ্গ (CLAUDE.md কত লাইন,
&gt; কতটা rules-ঘর, /context-ভার কত), আস্থা (allow/deny কয়টা,
&gt; কোন মোড ডিফল্ট), যাচাই (কয়টা হুক, CI আছে?) — এক টেবিলে দাও,
&gt; দুর্বল স্তম্ভ চিহ্নিত করো
# ← মালিকের বার্ষিক-পরীক্ষা: কোন স্তম্ভ পুরোনো, কোনটা মজবুত

# ── প্রম্পট ২ · দুর্বল স্তম্ভের ওষুধ ──
&gt; (টেবিল এলে) দুর্বলতম স্তম্ভের জন্য তিনটা বাস্তব পদক্ষেপ
&gt; লেখো — একেকটা এক সপ্তাহের কাজ, ধাপ-কমান্ডসহ
# ← রোগ-নির্ণয় নয়, চিকিৎসা-পরিকল্পনা — মাপার পর বদলানো

# ── প্রম্পট ৩ · কারখানা-নথি এক পাতায় ──
&gt; আমার পুরো সেটআপের এক-পাতার নকশা আঁকো টেক্সটে: স্তরভিত্তি
&gt; (settings-তলা), স্মৃতি-ঘর (কোন ফাইল কোথায়), ঘণ্টা-তালিকা,
&gt; এজেন্ট-দল, স্কিল-র‌্যাক — docs/factory-map.md-এ লেখো
# ← মাথার ভেতরের ছবি কাগজে — নতুন দল-সদস্যও পড়ে বুঝবে

# ── প্রম্পট ৪ · পরের বছরের তলা ──
&gt; আমি এখন ৩০ দরজার মালিক — ৩১-৩৪-এর ওয়ার্কফ্লো ছাড়াও আমার
&gt; পরের অভ্যাস-তলা কী হওয়া উচিত? আমার প্রজেক্ট দেখে
&gt; দুটো বাস্তব প্রস্তাব দাও
# ← শেষ দরজা শেষ নয় — সিংহাসন থেকে নিজের পরের তলা বাছাই

# ── প্রম্পট ৫ · উত্তরণ-শপথ ──
&gt; /loop নয় — একবারের গভীর প্রশ্ন: এই বইয়ের ৩৫ দরজার মধ্যে
&gt; আমি কোনটা আজও রোজ ব্যবহার করি না — তালিকা করো; আগামী
&gt; সপ্তাহে প্রতিদিন একটা করে চালু করার পরিকল্পনা লেখো
# ← জানা ও করা — সিংহাসনের আসল পরীক্ষা এখানেই</pre></div></div>
`,
  senior: {
    title: "স্থপতির পরের শহর — The Next City",
    body: `<p>এই বই শেষ — পথ নয়:</p>
<ul class="checklist">
<li><strong>Book ১৯ (Tool Forge)</strong> — MCP সার্ভার নির্মাণের পূর্ণ শিল্প; দরজা ১৫-এর যন্ত্রশালা সেখানে কারখানা।</li>
<li><strong>Book ১২ (Autonomous Mind)</strong> — এজেন্ট-স্থাপত্যের তত্ত্ব; দরজা ১৭-এর সংবিধানের দর্শন।</li>
<li><strong>Book ১ (Twenty-Seven Doors)</strong> — পুরো AI ইঞ্জিনিয়ারিং শহরের মানচিত্র; এই বই তার এক মহল্লা।</li>
<li>প্রথম আসল কাজ: নিজের কারখানায় একটা ছোট স্কিল → একটা প্লাগইন → নিজের মার্কেটপ্লেস — মোস্তফার সিঁড়ি নিজে ভাঙো।</li>
<li>মাসে একবার অফিসিয়াল ডক + changelog — শহরের আইন বদলায়, স্থপতিকেও খবর রাখতে হয়।</li>
</ul>
<p class="en">Book 62's Twelve-Line Engine (Door 28) fits this whole throne into one twelve-line loop — and teaches you to build it yourself.</p><p><strong>পাশের বই:</strong> Book 62-এর বারো লাইনের ইঞ্জিন (দরজা ২৮) তোমার এই সিংহাসনের সব যন্ত্র বারো লাইনের loop-এ মেলে — আর সেটা নিজে বানানো শেখায়। <em>(Book 62 · বারো লাইনের ইঞ্জিন)</em></p>`
  }
});
