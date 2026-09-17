// ════════════════════════════════════════
// Book 59 v5 · The Terminal Craftsman — Customization Floor (26-31)
// ════════════════════════════════════════

// ── DOOR 26 · মহাফেজখানার নকশা-খাতা — The Archive's Blueprint Ledger ──
doors.push({
  num: 26,
  icon: "🗂️",
  color: "#f59e0b",
  name: "মহাফেজখানার নকশা-খাতা",
  subtitle: "The Archive's Blueprint Ledger",
  tech: "settings.json পূর্ণ কী-কোষ · env · apiKeyHelper · outputStyle · statusLine",
  spirit: "নিজাম — প্রতিটা ঘরের নিয়ম লেখা থাকে",
  secret: "কাস্টমাইজেশনের আসল খাতা settings.json — প্রতিটা কী এক ঘর: model কোন কারিগর, env বাতাস-নিয়ন্ত্রণ, permissions দরজার তালা, hooks ঘণ্টা, statusLine নিচের ফলক, outputStyle পোশাক, apiKeyHelper চাবি-রক্ষক; D23 শিখিয়েছে কোন তলা জেতে — এই দরজা শেখায় প্রতিটা ঘরে কী বসে, আর সমস্যা হলে কোথায় খোঁজো (/status → settings-reference)।",
  recall: {
    q: "তোমার দলের সবাই যেন ডিফল্ট মডেল opus পায়, স্ট্যাটাসলাইনে মডেল+ব্রাঞ্চ দেখায়, আর TEST_ENV=b57 ভেরিয়েবল সেশনে থাকে — কোন ফাইলে কোন কীগুলো লিখবে? আর কী কাজ করছে না মনে হলে প্রথম আদেশ?",
    qen: "Your team should default to opus, show model+branch in the statusline, and carry TEST_ENV=b57 — which file, which keys? And the first command when a key seems dead?",
    a: "ফাইল: .claude/settings.json (দলের — git-এ; ব্যক্তিগত হলে ~/.claude/settings.json)। কী-তিনি: { \"model\": \"opus\", \"statusLine\": { \"type\": \"command\", \"command\": \"~/.claude/statusline.sh\" }, \"env\": { \"TEST_ENV\": \"b57\" } } — model সেশন-শুরুর কারিগর ঠিক করে, statusLine-এর command প্রতি টার্নে stdin-JSON পেয়ে এক লাইন ফেরায়, env-ভেতরের ভেরিয়েবল সেশন-বাতাসে ঢোকে। মৃত-কী রোগে প্রথম আদেশ: /status — কোন ফাইলগুলো লোড হলো দেখায়; তারপর সন্দেহের তিন কারণ মনে রেখো: ① উঁচু তলা একই কী সেট করেছে (দরজা ২৩), ② এই ফাইলে ওই কী বসানোর অনুমতিই নেই (scope-সীমা), ③ JSON ভাঙা — পুরো ফাইল স্কিপ হয়ে গেছে।",
    aen: "File: .claude/settings.json (team, in git; personal → ~/.claude/settings.json). Three keys: { \"model\": \"opus\", \"statusLine\": { \"type\": \"command\", \"command\": \"~/.claude/statusline.sh\" }, \"env\": { \"TEST_ENV\": \"b57\" } } — model sets the opening craftsman; the statusLine command receives stdin-JSON per turn and returns one line; env vars enter the session air. Dead-key first aid: /status shows which files loaded; then the three suspects: ① a higher floor set the same key (Door 23), ② the key isn't allowed at this scope, ③ broken JSON — the whole file was skipped."
  },
  story: `<p class="scene-setting">মহাফেজখানার প্রধান রেজিস্ট্রার মিসেস সালমা প্রতিটা নতুন সহকারীকে প্রথম দিনেই একখানা নকশা-খাতা ধরিয়ে দেন — স্টুডিওর প্রতিটা ঘরের নিয়ম ওই খাতায় লেখা। ঘরে ঘরে ঢুকিয়ে দেখান: model-ঘরে কোন কারিগর বসবে ডিফল্টে; env-ঘর বাতাস-নিয়ন্ত্রণ — সেশনের হাওয়ায় কোন কোন ভেরিয়েবল ঘুরবে; permissions-ঘর দরজার তালার খাতা (দরজা ৬); hooks-ঘরে ঘণ্টার তালিকা (দরজা ২৯); statusLine-ঘর নিচের পিতলের ফলক — কোন স্ক্রিপ্ট প্রতি টার্নে খবর লিখবে; outputStyle-ঘরে কারিগরের পোশাক; apiKeyHelper-ঘর চাবি-রক্ষকের ঠিকানা — বাইরের স্ক্রিপ্ট থেকে টোকেন আনায়। সহকারী জিজ্ঞেস করল: ম্যাডাম, আমার লেখা নিয়ম কাজ করছে না কেন? সালমা প্রথম প্রশ্ন করেন: /status দেখে এসো — খাতাটা লোড হয়েছে কি? তারপর তিন সন্দেহ: উঁচু তলার খাতা তোমার লেখা মেজে দিয়েছে, নাকি এই ঘরে ওই নিয়ম লেখার অনুমতিই নেই, নাকি তোমার খাতার ভাষা ভাঙা (JSON) — তিন কারণেই নিয়ম নীরবে মরে।</p>
<p class="scene-setting en">Mrs. Salma, chief registrar of the archive, hands every new assistant a blueprint ledger on day one — every room's rules written there. She walks them through: the model room, which craftsman sits by default; the env room, the climate control deciding which variables ride the session air; the permissions room, the door-lock book (Door 6); the hooks room, the bell schedule (Door 29); the statusLine room, the brass plaque below — which script writes news each turn; the outputStyle room, the craftsman's costume; the apiKeyHelper room, the key-keeper's address fetching tokens from an outer script. An assistant asked: madam, why isn't my rule working? Salma's first question: run /status — did the ledger even load? Then three suspects: a higher floor's ledger overrode yours, or the key isn't permitted at this scope, or your ledger's language is broken (JSON) — in all three, rules die silently.</p>

<div class="code-block"># নকশা-খাতার পূর্ণ ঘর-পরিক্রমা (settings.json):
{
  "model": "opus",                      # কারিগর-নির্বাচন (দরজা ৩-এর গভীর)
  "env": {                              # সেশনের বাতাস
    "TEST_ENV": "b57",
    "NODE_OPTIONS": "--max-old-space-size=4096"
  },
  "permissions": {                      # দরজা ৬ — তালার খাতা
    "allow": ["Bash(npm test:*)", "Read(~/.zshrc)"],
    "deny":  ["Bash(curl:*)"]
  },
  "hooks": {                            # দরজা ২৯ — ঘণ্টা
    "PreToolUse": [{ "matcher": "Bash",
      "hooks": [{"type": "command", "command": "./check.sh"}] }]
  },
  "statusLine": {                       # নিচের ফলক
    "type": "command",
    "command": "~/.claude/statusline.sh"
  },
  "outputStyle": "Explanatory",         # পোশাক (দরজা ১৩)
  "apiKeyHelper": "~/.claude/fetch-key.sh",  # চাবি-রক্ষক
  "includeCoAuthoredBy": false,          # কমিটে সহ-লেখক লাইন
  "forceLoginMethod": "apiKey"           # লগইন-পদ্ধতি পাকা
}

# কোথায় কী লিখবে (scope-সারণী):
#   ~/.claude/settings.json      → আমি+সব প্রজেক্ট (ব্যক্তিগত স্বভাব)
#   .claude/settings.json        → দল (git-এ যায়)
#   .claude/settings.local.json  → আমি+এই প্রজেক্ট (gitignore!)
#   --settings ফাইল/JSON        → শুধু এই চালু (CI-তে সুবিধা)

# মৃত-কী রোগনির্ণয়:
/status            # কোন খাতাগুলো লোড হলো?
# ① উঁচু তলা জিতেছে? (দরজা ২৩-এর সিঁড়ি)
# ② scope-সীমা? (কিছু কী শুধু user/managed-এ বসে —
#    যেমন permissions.defaultMode-এর কঠোর মান)
# ③ JSON ভাঙা? (কমা-ভুলে পুরো ফাইল স্কিপ — /status-এ দেখা যায়)</div>

<table class="kv-table">
<tr><th>ঘর (কী)</th><th>কী নিয়ন্ত্রণ করে</th><th>সেতু</th></tr>
<tr><td class="hl">model</td><td>ডিফল্ট কারিগর</td><td>দরজা ৩</td></tr>
<tr><td class="hll">env</td><td>সেশনের ভেরিয়েবল-বাতাস</td><td>দরজা ৩০</td></tr>
<tr><td class="hl">permissions</td><td>allow/deny তালা</td><td>দরজা ৬</td></tr>
<tr><td class="hll">hooks</td><td>জীবনচক্রের ঘণ্টা</td><td>দরজা ২৯</td></tr>
<tr><td class="hl">statusLine</td><td>নিচের তথ্য-ফলক</td><td>দরজা ১৩</td></tr>
<tr><td class="hll">outputStyle</td><td>উত্তরের পোশাক</td><td>দরজা ১৩</td></tr>
<tr><td class="hl">apiKeyHelper</td><td>চাবি-আনার স্ক্রিপ্ট</td><td>দরজা ৩০</td></tr>
</table>

<div class="diagram">
<div class="diag-title">নকশা-খাতার ঘরগুলো — The Blueprint's Rooms</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d26" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="70" width="130" height="44" rx="10"/><text class="lbl" x="80" y="88">settings.json</text><text class="lbl-sm" x="80" y="104">নকশা-খাতা</text>
<rect class="node-cyan" x="205" y="18" width="90" height="34" rx="8"/><text class="lbl-sm" x="250" y="39">model</text>
<rect class="node-cyan" x="205" y="60" width="90" height="34" rx="8"/><text class="lbl-sm" x="250" y="81">env</text>
<rect class="node-cyan" x="205" y="102" width="90" height="34" rx="8"/><text class="lbl-sm" x="250" y="123">permissions</text>
<rect class="node-cyan" x="205" y="144" width="90" height="34" rx="8"/><text class="lbl-sm" x="250" y="165">hooks</text>
<rect class="node-leaf" x="365" y="38" width="90" height="34" rx="8"/><text class="lbl-sm" x="410" y="59">statusLine</text>
<rect class="node-leaf" x="365" y="80" width="90" height="34" rx="8"/><text class="lbl-sm" x="410" y="101">outputStyle</text>
<rect class="node-leaf" x="365" y="122" width="90" height="34" rx="8"/><text class="lbl-sm" x="410" y="143">apiKeyHelper</text>
<line x1="145" y1="85" x2="201" y2="36" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d26)"/>
<line x1="145" y1="89" x2="201" y2="77" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d26)"/>
<line x1="145" y1="95" x2="201" y2="119" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d26)"/>
<line x1="145" y1="100" x2="201" y2="161" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d26)"/>
<line x1="295" y1="35" x2="361" y2="55" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d26)"/>
<line x1="295" y1="77" x2="361" y2="97" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d26)"/>
<line x1="295" y1="119" x2="361" y2="139" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d26)"/>
</svg>
<div class="diag-cap">এক খাতায় সাত ঘর — প্রতিটা ঘর এক দরজার গভীর রূপ; সন্দেহে /status।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>রেজিস্ট্রারের সতর্কতা:</strong> নকশা-খাতা প্রতি সেশনে পড়া হয় না — প্রতি টার্নে; ভাঙা JSON মানে নীরব স্কিপ, কোনো চিৎকার নেই — /status-ই একমাত্র প্রহরী। env-ঘরে গোপন টোকেন লিখো না (গোপন মানেই দলের চোখেও গোপন নয় যদি git-এ যায়) — চাবি-রক্ষক apiKeyHelper বা শেল-প্রোফাইলের রাস্তা নাও। আর মনে রেখো দরজা ২৩-এর পাঠ: একই কী পাঁচ তলায় লেখা থাকলে উঁচু তলাই জেতে — অন্ধ ঘর-সাজানো নয়, সিঁড়ি-জ্ঞান আগে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The registrar's caution:</strong> the blueprint ledger is read every turn, not every session — broken JSON means silent skip with no scream; /status is the only guard. Never write secret tokens in the env room (a secret in git is a secret to nobody) — take the apiKeyHelper or shell-profile road. And remember Door 23: the same key on five floors means the highest wins — stair-awareness before room-furnishing.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অন্ধ ঘর-সাজানো</div>কোথায় কী বসে জানা নেই · গোপন env-এ প্রকাশ · ভাঙা JSON-এ নীরব মৃত্যু · /status কখনো না</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সালমার রীতি</div>কী-কোষ মুখে মুখে · গোপন চাবি-রক্ষকের রাস্তায় · /status-রোগনির্ণয় · সিঁড়ি-জ্ঞানসহ ঘর-সাজানো</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">/status</div><div class="sc-label">খাতা লোড হলো কি?</div></div>
<div class="stat-card"><div class="sc-num">env</div><div class="sc-label">সেশনের বাতাস</div></div>
<div class="stat-card"><div class="sc-num">statusLine</div><div class="sc-label">নিচের ফলক-স্ক্রিপ্ট</div></div>
<div class="stat-card"><div class="sc-num">apiKeyHelper</div><div class="sc-label">চাবি-রক্ষকের ঠিকানা</div></div>
</div>

<p class="verse">নিজামের পাঠ: উমর (রা.)-এর প্রশাসন কথিত আছে — রাতে ঘুরে দেখতেন নিয়ম মানা হচ্ছে কি না; লিখিত নিয়ম + নজরদারি = ন্যায়। সালমার মহাফেজখানাও: খাতায় লেখো, আর /status দিয়ে নজর রাখো — নইলে নিয়ম কাগজে কাগজেই থাকে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🗂️ settings-ঘর: model·env·permissions·hooks·statusLine·outputStyle·apiKeyHelper; সন্দেহে /status, গোপনে helper।<br>কারণ: প্রতিটা ঘরের নিয়ম লেখা থাকলে স্টুডিও নিজেই চলে — তুমি শুধু নকশা দেখো।</div></div>`,
  senior: {
    title: "নকশা-খাতার পাঠ — The Blueprint Ledger's Lesson",
    body: `<ul class="checklist">
<li>কী-কোষ জেনে রাখো: <strong>model / env / permissions / hooks / statusLine / outputStyle / apiKeyHelper</strong>।</li>
<li>দলের নিয়ম <strong>.claude/settings.json</strong>-এ, ব্যক্তিগত <strong>~/.claude</strong>-তে, আজকের-শুধু <strong>--settings</strong>-এ।</li>
<li>মৃত-কী: আগে <strong>/status</strong> → তিন সন্দেহ (উঁচু-তলা / scope-সীমা / ভাঙা JSON)।</li>
<li>গোপন env-এ নয় — <strong>apiKeyHelper</strong> বা শেল-প্রোফাইল।</li>
<li>সিঁড়ি-জ্ঞান (দরজা ২৩) সবসময় পাশে — ঘর-সাজানোর আগে।</li>
</ul>`
  }
});

// ── DOOR 27 · স্মৃতি-স্থাপত্যের তলা — The Memory Architecture Floor ──
doors.push({
  num: 27,
  icon: "🏛️",
  color: "#f59e0b",
  name: "স্মৃতি-স্থাপত্যের তলা",
  subtitle: "The Memory Architecture Floor",
  tech: "CLAUDE.md @import-চেইন · .claude/rules/ path-scoped · auto-memory · /init",
  spirit: "স্মৃতি — যা জমা হয়, তা-ই তুমি",
  secret: "স্মৃতি চার স্তরের স্থাপত্য: সংস্থা→ব্যক্তি→প্রজেক্ট→লোকাল CLAUDE.md, আর প্রতিটা ফাইল @import দিয়ে অন্য ফাইল টানতে পারে (৪ লাফ পর্যন্ত); বড় হলে ভাগো .claude/rules/-এ — পথ-শর্তে শুধু-দরকারি-মুহূর্তে লোড; আর কারিগরের নিজের খাতা auto-memory — তোমার তিরস্কার থেকে শিখে লেখে, /memory দিয়ে পড়ো।",
  recall: {
    q: "তোমার monorepo-তে frontend-নিয়ম আর backend-নিয়ম আলাদা, আর সবার উপরে কোম্পানি-নীতি — কীভাবে সাজাবে যেন প্রতিটা সেশনে সব না ঢুকে শুধু প্রাসঙ্গিক নিয়ম লোড হয়? আর কারিগর নিজে শেখা অভ্যাস জমায় কোথায়?",
    qen: "Your monorepo has separate frontend and backend rules, plus company policy above all — how to arrange so sessions load only relevant rules, not everything? And where does Claude accumulate learned habits itself?",
    a: "তিন-স্তর সাজানো: ① কোম্পানি-নীতি → managed CLAUDE.md (সংস্থার পথে, সবার উপরে); ② প্রজেক্টের সর্বজনীন অংশ → মূল CLAUDE.md (আড়াই-শো লাইনের নিচে, @import দিয়ে বড় খাতা টানো: @docs/standards.md — ৪ লাফ গভীরতা পর্যন্ত); ③ অংশ-নিয়ম → .claude/rules/frontend.md-জাতীয় ফাইলে frontmatter-পথ-শর্তসহ (paths: ['src/frontend/**']) — Claude যখন ওই পথের ফাইল ছোঁয় তখনই লোড। এতে প্রতিটা সেশন হালকা, নিয়ম প্রাসঙ্গিক। কারিগরের নিজ-খাতা: auto-memory — তোমার সংশোধনী থেকে শিখে নিজে নোট লেখে (প্রতি রিপোজিটরিতে আলাদা, প্রথম ২০০ লাইন/25KB লোড); /memory দিয়ে খুলে দেখো, মুছো, সম্পাদনা করো। শুরুতে /init — কোডবেস পড়ে খসড়া CLAUDE.md বানিয়ে দেয়।",
    aen: "Three-tier arrangement: ① company policy → managed CLAUDE.md (org path, above all); ② project-universal parts → root CLAUDE.md (under ~200 lines, @import pulling larger ledgers: @docs/standards.md — up to 4 hops deep); ③ part-rules → files like .claude/rules/frontend.md with frontmatter path conditions (paths: ['src/frontend/**']) — loaded only when Claude touches matching paths. Sessions stay light, rules stay relevant. Claude's own notebook: auto-memory — it writes notes from your corrections (per-repository, first 200 lines/25KB loaded); browse, edit, delete via /memory. Start with /init — it reads the codebase and drafts your CLAUDE.md.",
    you: "/init  # খসড়া বানাও; তারপর /memory দিয়ে দেখো; .claude/rules/frontend.md বানিয়ে frontmatter-এ paths: [\"src/frontend/**\"] লিখে পরীক্ষা করো"
  },
  story: `<p class="scene-setting">স্মৃতি-স্থাপত্যী আরশিয়া খাতুন বলেন — ভালো স্মৃতি বড় গুদাম নয়, বুদ্ধিমান বাড়ি। তাঁর ডিজাইনে চার তলা: সবার উপরে সংস্থার পাথরে-খোদাই-নীতি (managed CLAUDE.md — সব প্রজেক্টে সমান); তার নিচে ব্যক্তির অভ্যাস-তলা (~/.claude/CLAUDE.md — তোমার সব কাজে সঙ্গী); তার নিচে প্রজেক্টের প্রধান কক্ষ (মূল CLAUDE.md — দলের, git-এ); আর পাশের ব্যক্তিগত ডেরা (CLAUDE.local.md — শুধু তোমার, gitignore)। কিন্তু তাঁর আসল শিল্প দুটি: প্রথমত, @import-দরজা — মূল কক্ষ থেকে বড় খাতায় সরাসরি সূচী: @docs/standards.md লিখলে সেই খাতাও শুরুতেই খোলে, আর খাতা থেকে খাতায় চেইন যায় চার লাফ পর্যন্ত — গভীর স্থাপত্য, তবু সংযত; দ্বিতীয়ত, শর্ত-কক্ষ (.claude/rules/) — frontend-নিয়ম frontend-পথের ফাইল ছোঁলেই জেগে ওঠে, backend-এর কথা সেখানে নেই। এক শাগরেদ জিজ্ঞেস করল: স্মৃতি শুধু আমরাই লিখি? আরশিয়া হাসলেন: কারিগরের নিজের খাতাও আছে — auto-memory: তুমি যা শুধরে দাও, সে শিখে নোট করে রাখে; ওই খাতা তার স্মৃতি, /memory দিয়ে পড়ে দেখো — সম্পর্ক দুই দিকের।</p>
<p class="scene-setting en">Memory-architect Arshia Khatun says — good memory is not a big warehouse but an intelligent house. Her design has four floors: on top, the company's stone-carved policy (managed CLAUDE.md — same everywhere); below, your personal habit floor (~/.claude/CLAUDE.md); below, the project's main hall (root CLAUDE.md — the team's, in git); and a private side-room (CLAUDE.local.md — yours, gitignored). But her real arts are two: first, @import doors — the main hall can index straight into big ledgers: @docs/standards.md opens that ledger at launch, and ledgers chain into ledgers up to four hops — deep architecture, still disciplined; second, conditional rooms (.claude/rules/) — frontend rules wake only when frontend paths are touched; backend talk stays out. An apprentice asked: do only WE write memory? Arshia smiled: the craftsman keeps his own notebook — auto-memory: your corrections become his notes; read them via /memory — the relationship flows both ways.</p>

<div class="code-block"># চার-তলা স্থাপত্য (উপর থেকে):
# ① সংস্থা: /Library/Application Support/ClaudeCode/CLAUDE.md (macOS)
# ② ব্যক্তি: ~/.claude/CLAUDE.md
# ③ প্রজেক্ট: ./CLAUDE.md  (বা ./.claude/CLAUDE.md) — দলের
# ④ লোকাল: ./CLAUDE.local.md — আমার-ই, .gitignore-এ

# শুরুর খসড়া:
#   /init — কোডবেস পড়ে CLAUDE.md বানায় (আগে থাকলে উন্নতির পরামর্শ)
#   CLAUDE_CODE_NEW_INIT=1 — ইন্টারঅ্যাক্টিভ বহু-পর্ব ফ্লো

# @import-দরজা (৪ লাফ পর্যন্ত চেইন):
# মূল CLAUDE.md-তে লেখো:
#   স্ট্যান্ডার্ড: @docs/standards.md
#   ডিপেন্ডেন্সি: @package.json
# কোট-করা @README ইমপোর্ট হয় না — শুধু উল্লেখ থাকে

# শর্ত-কক্ষ (.claude/rules/frontend.md):
# ---
# paths:
#   - "src/frontend/**"
# ---
# এই ফাইলে frontend-নিয়ম — শুধু ওই পথ ছোঁয়ার মুহূর্তে লোড

# কারিগরের নিজ-খাতা (auto-memory):
#   তোমার সংশোধনী → কারিগরের নোট; প্রতি-রিপো আলাদা
#   প্রথম ২০০ লাইন বা 25KB পর্যন্ত সেশনে লোড
/memory          # খাতা খোলো — পড়ো, সম্পাদনা, মুছো
/context         # কোন মেমরি-ফাইল লোড হলো দেখো

# স্বাস্থ্য-নিয়ম:
#   • মূল খাতা ২০০ লাইনের নিচে — লম্বা হলে মানার শক্তি কমে
#   • দ্বন্দ্ব-নিয়ম মুছো (দুই কক্ষে উল্টো কথা = যেকোনো একটা মানবে)
#   • নির্দিষ্ট লেখো: "npm test আগে" > "টেস্ট করো"
#   • /compact-এর পরেও মূল খাতা বেঁচে থাকে — ডিস্ক থেকে আবার পড়ে</div>

<table class="kv-table">
<tr><th>স্তর</th><th>ফাইল</th><th>কার জন্য</th></tr>
<tr><td class="hl">সংস্থা</td><td>managed CLAUDE.md</td><td>সব ব্যবহারকারী</td></tr>
<tr><td class="hll">ব্যক্তি</td><td>~/.claude/CLAUDE.md</td><td>আমি — সব প্রজেক্ট</td></tr>
<tr><td class="hl">প্রজেক্ট</td><td>./CLAUDE.md</td><td>দল (git)</td></tr>
<tr><td class="hll">লোকাল</td><td>./CLAUDE.local.md</td><td>আমি+এই প্রজেক্ট (gitignore)</td></tr>
<tr><td class="hl">শর্ত-কক্ষ</td><td>.claude/rules/*.md</td><td>পথ-শর্তে লোড</td></tr>
<tr><td class="hll">নিজ-খাতা</td><td>auto-memory</td><td>কারিগরের শেখা-নোট</td></tr>
</table>

<div class="diagram">
<div class="diag-title">স্মৃতির চার তলা — The Four Floors of Memory</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<rect class="node-hot" x="15" y="12" width="530" height="30" rx="8"/><text class="lbl-sm" x="280" y="31">① সংস্থা — managed CLAUDE.md (পাথরে খোদাই)</text>
<rect class="node" x="35" y="48" width="490" height="30" rx="8"/><text class="lbl-sm" x="280" y="67">② ব্যক্তি — ~/.claude/CLAUDE.md (আমার অভ্যাস)</text>
<rect class="node-cyan" x="55" y="84" width="450" height="30" rx="8"/><text class="lbl-cyan" x="280" y="103">③ প্রজেক্ট — ./CLAUDE.md + @import-চেইন (৪ লাফ)</text>
<rect class="node" x="75" y="120" width="410" height="30" rx="8"/><text class="lbl-sm" x="280" y="139">④ লোকাল — CLAUDE.local.md (gitignore)</text>
<rect class="cell" x="15" y="158" width="530" height="36" rx="8"/>
<text class="lbl-sm" x="280" y="174">পাশের শর্ত-কক্ষ: .claude/rules/ — paths-শর্তে শুধু-মুহূর্তে লোড · কারিগরের নিজ-খাতা: auto-memory (/memory)</text>
<text class="lbl-sm" x="280" y="189">মূল খাতা /compact-কে বাঁচায় · ২০০-লাইন সীমা মানার শক্তির চাবি</text>
</svg>
<div class="diag-cap">উপরের তলা সবার, নিচের তলা ব্যক্তিগত — আর প্রতিটা কক্ষ শুধু দরকারের মুহূর্তে জাগে।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>স্থাপত্যীর সতর্কতা:</strong> সবচেয়ে সাধারণ রোগ — মেমরি-স্ফীতি: প্রতিটা সেশনে সব নিয়ম ঢুকিয়ে দেওয়া; ফল উল্টো — টোকেন-খরচ বাড়ে, মানার শক্তি কমে। খাতা যত ছোট ও নির্দিষ্ট, তত প্রাণবন্ত। দ্বিতীয় রোগ — সংঘর্ষ: দুই কক্ষে উল্টো নির্দেশ থাকলে কারিগর যেকোনো একটা বেছে নেয়, তুমি জানবেও না — মাঝে মাঝে সব তলা পড়ে দ্বন্দ্ব ছাঁটো। আর @import-চেইন গভীর হলে লুকানো নিয়ম ভুলে যেও না — চার লাফ পর্যন্ত সবই লোড হয়, কোট-করা পথ ছাড়া।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The architect's caution:</strong> the commonest disease — memory bloat: stuffing every rule into every session; the result is inverted — tokens climb, adherence falls. The smaller and more specific the ledger, the livelier it is obeyed. Second disease — conflict: contradictory instructions in two rooms make Claude pick one arbitrarily without telling you; periodically sweep all floors for clashes. And don't forget deep @import chains — everything up to four hops loads, except backtick-quoted paths.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ স্ফীত-গুদাম</div>এক CLAUDE.md-তে সব-কিছু · প্রতি সেশনে পুরো বিশ্বকোষ · দ্বন্দ্ব-নিয়ম জমা · কারিগরের নোট অজানা</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ আরশিয়ার স্থাপত্য</div>চার তলায় ভাগ · @import-চেইন সংযত · rules/-শর্তে অংশ-লোড · /memory-খাতা দুই-দিকের</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">/init</div><div class="sc-label">খসড়া-স্রষ্টা</div></div>
<div class="stat-card"><div class="sc-num">@import</div><div class="sc-label">খাতা-চেইন (৪ লাফ)</div></div>
<div class="stat-card"><div class="sc-num">.claude/rules/</div><div class="sc-label">পথ-শর্তে কক্ষ</div></div>
<div class="stat-card"><div class="sc-num">/memory</div><div class="sc-label">কারিগরের নিজ-খাতা</div></div>
</div>

<p class="verse">স্মৃতির পাঠ: কুরআন বারবার 'যারা মনে রাখে' দিয়ে শুরু করে প্রতিজ্ঞার কথা — স্মরণ নিছক ভাণ্ডার নয়, আমলের চাবি; আর হাদিসে জ্ঞান সংক্ষেপে বরকতময়। আরশিয়ার স্থাপত্যও: কম নিয়ম, গভীর মানা — এই স্মৃতির বরকত।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🏛️ চার তলা (সংস্থা→ব্যক্তি→প্রজেক্ট→লোকাল), @import ৪-লাফ, rules/-শর্তে কক্ষ; কারিগরের খাতা /memory।<br>কারণ: ভালো স্মৃতি বড় গুদাম নয় — বুদ্ধিমান বাড়ি, প্রতিটা কক্ষ দরকারে জাগে।</div></div>`,
  senior: {
    title: "স্মৃতি-স্থাপত্যের পাঠ — The Memory-Architecture Lesson",
    body: `<ul class="checklist">
<li>চার তলা: <strong>managed → ~/.claude → ./CLAUDE.md → CLAUDE.local.md</strong>।</li>
<li><strong>/init</strong> দিয়ে খসড়া; মূল খাতা <strong>২০০ লাইনের নিচে</strong>।</li>
<li>বড় খাতা <strong>@import</strong>-চেইনে (৪ লাফ); কোট-করা পথ ইমপোর্ট হয় না।</li>
<li>অংশ-নিয়ম <strong>.claude/rules/ + paths-frontmatter</strong> — পথ ছোঁলে লোড।</li>
<li>কারিগরের নোট <strong>/memory</strong>-তে — পড়ো, ছাঁটো; /context-এ লোড-যাচাই।</li>
</ul>`
  }
});

// ── DOOR 28 · কারিগর-কারখানার ডাইরেক্টরি — The Artisan-Factory Directory ──
doors.push({
  num: 28,
  icon: "🏭",
  color: "#f59e0b",
  name: "কারিগর-কারখানার ডাইরেক্টরি",
  subtitle: "The Artisan-Factory Directory",
  tech: ".claude/agents/ · frontmatter (name/description/tools/model) · @mention · persistent memory",
  spirit: "তাকসিম — প্রত্যেক কারিগরকে তার কাজ",
  secret: "একই ধরনের কাজে বারবার একই নির্দেশনা দিচ্ছ? একজন নিজস্ব কারিগর বানাও: .claude/agents/reviewer.md-এ frontmatter (নাম-বর্ণনা-হাত-মডেল) + শরীরে সিস্টেম-প্রম্পট — Claude বর্ণনা পড়ে নিজেই চিনে নেয় কখন ডাকবে; ও চলে নিজের প্রসঙ্গ-জানালায়, তোমার স্রোত পরিষ্কার থাকে; আর /agents-ই বানানোর সহজ রাস্তা — Generate with Claude তোমার বর্ণনা থেকে পুরো ফাইল লেখে।",
  recall: {
    q: "প্রতি সপ্তাহে code-review-সাব-এজেন্ট চাও — শুধু পড়ার হাত, Haiku-মডেল, নিজস্ব নির্দেশনা। ফাইলটা কোথায়, frontmatter-এ কী কী, আর কীভাবে Claude জানবে কখন ওকে ডাকবে?",
    qen: "You want a weekly code-review subagent — read-only tools, Haiku model, its own instructions. Where does the file live, what's in the frontmatter, and how does Claude know when to call it?",
    a: "ফাইল: .claude/agents/reviewer.md (প্রজেক্ট — দলের, git-এ; ~/.claude/agents/ হলে সব প্রজেক্টে)। Frontmatter: --- name: reviewer; description: কখন ডাকবে তার এক-লাইন বর্ণনা (এটাই ডাক-চেনার চাবি — লিখো কর্ম-ভিত্তিক: 'Use for code review...'); tools: Read, Grep, Glob (শুধু পড়ার হাত); model: haiku (সস্তা-দ্রুত); ইচ্ছে হলে model: inherit ---। শরীর = সিস্টেম-প্রম্পট: ভূমিকা, আচরণ, আউটপুট-ছাঁচ। ডাক-যান্ত্রিকতা: Claude সব এজেন্টের description পড়ে রাখে; তোমার কাজ মিললে নিজেই ডেলিগেট করে — তাই বর্ণনা যত স্পষ্ট, ডাক তত নিখুঁত; চাইলে সরাসরি বলো 'reviewer দিয়ে দেখাও'। ব্যবস্থাপনা: /agents — Library-ট্যাবে দেখো, এডিট করো, নতুন বানাও (Generate with Claude — মুখের বর্ণনা থেকে ফাইল লেখে)।",
    aen: "File: .claude/agents/reviewer.md (project — team, in git; ~/.claude/agents/ for all projects). Frontmatter: --- name: reviewer; description: one line on WHEN to call (the calling-key — write it task-first: 'Use for code review...'); tools: Read, Grep, Glob (read-only hands); model: haiku (cheap-fast); or model: inherit ---. Body = system prompt: role, behavior, output format. Calling: Claude reads all agents' descriptions; matching work gets delegated automatically — the clearer the description, the sharper the call; or invoke directly: 'check with reviewer'. Management: /agents — the Library tab views, edits, creates (Generate with Claude writes the file from your description).",
    you: "/agents  # Library ট্যাব → Create new agent → Personal; অথবা হাতে: mkdir -p .claude/agents && cat > .claude/agents/reviewer.md — frontmatter+শরীর লিখে টেস্ট: 'reviewer দিয়ে src/api পরীক্ষা করো'"
  },
  story: `<p class="scene-setting">কারিগর-কারখানার ডাইরেক্টর মিঃ ফারুক সাহেবের ডাইরেক্টরি-বই কারখানার প্রাণ — প্রতিটা নিবন্ধিত কারিগরের এক পাতা: নাম, কী-কাজে-ডাকবে (বর্ণনা), কোন কোন যন্ত্র হাতে পাবে (tools), কোন মডেল-শ্রেণিতে কাজ (model), আর পাতার নিচে তার কাজের নিয়মাবলি (সিস্টেম-প্রম্পট)। নতুন কারিগর নিবন্ধনের দুই রাস্তা দেখান: হাতে-লেখা পাতা (.claude/agents/reviewer.md) — নিজের নিয়মে নিজের লেখা; আর কারখানার সহকারী (/agents → Generate with Claude) — তুমি শুধু বলো কেমন কারিগর চাও, সে পুরো পাতা লিখে দেয়। তাঁর সোনার উপদেশ বর্ণনা-পাত্র নিয়ে: বর্ণনা মানে পরিচিতি নয়, ডাক-পত্র — 'সুন্দর ব্যক্তি' লেখা কারিগর কেউ ডাকবে না; 'স্ট্যান্ডার্ড-নয়-এমন কোড দেখলে ডাকো' লেখা কারিগর সবাই চেনে। আর প্রতিটা কারিগর কাজ করে নিজের ঘরে (নিজের প্রসঙ্গ-জানালায়) — মূল কারখানার স্রোত অক্ষত; শেষে শুধু ফল-রিপোর্ট ফেরে।</p>
<p class="scene-setting en">Mr. Farouk's factory directory is the workshop's heart — one page per registered artisan: name, when-to-call (description), which machines they may touch (tools), which model class works (model), and below, their working rules (the system prompt). Two roads to register a new artisan: a handwritten page (.claude/agents/reviewer.md) — your rules, your writing; and the factory assistant (/agents → Generate with Claude) — describe the artisan you want and it writes the whole page. His golden advice on the description field: a description is not an introduction, it is a calling letter — 'a nice person' gets no calls; 'call when you see non-standard code' is known by everyone. And every artisan works in their own room (their own context window) — the main workshop stream stays clean; only the result-report returns.</p>

<div class="code-block"># হাতে-লেখা কারিগর-পাতা (.claude/agents/reviewer.md):
---
name: reviewer
description: Use for reviewing code changes before commit. Checks style, security, and test coverage. Call whenever asked to review or audit code.
tools: Read, Grep, Glob      # শুধু পড়ার হাত
model: haiku                  # সস্তা-দ্রুত (inherit = মূলের মতো)
---
তুমি একজন কঠোর কোড-রিভিউয়ার। প্রতিটি ফাইলের জন্য:
1. স্টাইল-লঙ্ঘন তালিকা (লাইন-নম্বরসহ)
2. নিরাপত্তা-ঝুঁকি (উচ্চ/মাঝারি/নিম্ন)
3. টেস্ট-কভারেজের ফাঁক
আউটপুট: টেবিল আকারে, প্রতিটি আইটেম ফাইল:লাইন ঠিকানাসহ।

# সহজ রাস্তা — কারখানার সহকারী:
/agents
#   Library ট্যাব → Create new agent → Personal/Project
#   → Generate with Claude → মুখে বর্ণনা দাও → ফাইল প্রস্তুত
#   টুল-টিক, মডেল-বাছাই, রং — সব মেনুতে

# ব্যবহার:
#   Claude নিজে ডাকবে (বর্ণনা মিললে), অথবা:
> reviewer দিয়ে src/api পরীক্ষা করো

# স্কোপ-সিঁড়ি (উঁচু জেতে):
#   managed-settings → --agents ফ্ল্যাগ → .claude/agents/
#   → ~/.claude/agents/ → প্লাগইনের agents/

# persistent memory (ঐচ্ছিক): কারিগরের নিজ-স্মৃতি
#   ~/.claude/agent-memory/ — আলাপ জুড়ে শেখা জমে

# ফাইল-সংগঠন: ফোল্ডার-গুচ্ছ চলে (agents/review/…),
#   তবে name-ক্ষেত্রই পরিচয় — সব তলায় ইউনিক রাখো</div>

<table class="kv-table">
<tr><th>frontmatter</th><th>মানে</th><th>মনে রাখার ছল</th></tr>
<tr><td class="hl">name</td><td>ডাকনাম (ইউনিক)</td><td>নিবন্ধন-নম্বর</td></tr>
<tr><td class="hll">description</td><th>কখন ডাকবে</td><td>ডাক-পত্র — কর্ম-ভিত্তিক লেখো</td></tr>
<tr><td class="hl">tools</td><td>কোন হাত পাবে</td><td>যন্ত্র-অনুমতিপত্র</td></tr>
<tr><td class="hll">model</td><td>কোন শ্রেণির মস্তিষ্ক</td><td>haiku=দ্রুত, inherit=মূলের</td></tr>
</table>

<div class="diagram">
<div class="diag-title">কারখানার ডাইরেক্টরি — The Factory Directory</div>
<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d28" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="70" width="140" height="44" rx="10"/><text class="lbl" x="85" y="88">তোমার কাজ</text><text class="lbl-sm" x="85" y="104">'src/api রিভিউ করো'</text>
<rect class="node-cyan" x="205" y="70" width="150" height="44" rx="10"/><text class="lbl-cyan" x="280" y="88">বর্ণনা-মিল</text><text class="lbl-sm" x="280" y="104">description পড়ে চেনা</text>
<rect class="node-hot" x="395" y="45" width="150" height="40" rx="9"/><text class="lbl-hot" x="470" y="63">reviewer-ঘর</text><text class="lbl-sm" x="470" y="78">নিজের জানালায় কাজ</text>
<rect class="node-leaf" x="395" y="105" width="150" height="40" rx="9"/><text class="lbl-leaf" x="470" y="123">ফল-রিপোর্ট</text><text class="lbl-sm" x="470" y="139">শুধু সারাংশ ফেরে</text>
<line x1="155" y1="92" x2="201" y2="92" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d28)"/>
<line x1="355" y1="85" x2="391" y2="68" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d28)"/>
<line x1="470" y1="85" x2="470" y2="101" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d28)"/>
<rect class="cell" x="15" y="155" width="530" height="22" rx="7"/><text class="lbl-sm" x="280" y="170">পাতার চাবি description — 'কখন ডাকবে' লেখো, 'কে সে' নয় · নিজ-ঘরে কাজ, মূল-স্রোত পরিষ্কার</text>
</svg>
<div class="diag-cap">কাজ → বর্ণনা-মিল → নিজ-ঘরে কাজ → ফল ফেরা — চার পােয়ে সাব-এজেন্টের জীবন।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ডাইরেক্টরের সতর্কতা:</strong> বর্ণনা আসলেই চাবি — অস্পষ্ট বর্ণনার কারিগর চিরকাল অব্যবহৃত থাকে, আর ওভারল্যাপিং বর্ণনার দুই কারিগর একই কাজে ধাওয়া খায়; এক কাজ = এক স্পষ্ট ট্রিগার। tools-তালিকায় বেশি হাত দিলে নিরাপত্তার দরজা খোলা — রিভিউয়ারকে Write দিও না। এজেন্ট-স্তরের অনুমতি সিস্টেম মূল অনুমতির উপরে বসে, নয় তার নিচে — তবু সংযত থাকো। আর name সব তলায় ইউনিক না হলে নীরবে একজন হারাবে (কোনো সতর্কবার্তা নেই)।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The director's caution:</strong> the description truly is the key — vague artisans sit unused forever, and overlapping descriptions make two artisans race for one task; one task = one clear trigger. Generous tools-lists open security doors — never hand Write to a reviewer. Agent permissions sit atop the main permission system, not below — still, be restrained. And duplicate names across scopes silently drop one (no warning).</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ বেনামি কারিগর</div>বর্ণনা ছাড়া/অস্পষ্ট · সব-হাত দেওয়া · একই নাম দুই তলায় · রিভিউয়ারকে লেখার হাত</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ফারুক সাহেবের ডাইরেক্টরি</div>কর্ম-ভিত্তিক বর্ণনা · ন্যূনতম হাত · ইউনিক নাম · /agents-এ জীবন্ত ব্যবস্থাপনা</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">/agents</div><div class="sc-label">ডাইরেক্টরি + নির্মাণ-কেন্দ্র</div></div>
<div class="stat-card"><div class="sc-num">description</div><div class="sc-label">ডাক-পত্র — কখন-চাবি</div></div>
<div class="stat-card"><div class="sc-num">tools:</div><div class="sc-label">যন্ত্র-অনুমতিপত্র</div></div>
<div class="stat-card"><div class="sc-num">model: haiku</div><div class="sc-label">সস্তা-দ্রুত শ্রেণি</div></div>
</div>

<p class="verse">তাকসিমের পাঠ: উমর (রা.) বলেছেন — প্রত্যেক কাজ তার যোগ্যের হাতে দাও; মদিনার প্রশাসনে বিশেষজ্ঞ-নিয়োগের ঐতিহ্য ওই। কারিগর-কারখানাও: প্রতিটা কাজের নিজস্ব যোগ্য কারিগর — বর্ণনা-চাবিতে ডাকা, নিজ-ঘরে নিযুক্ত।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🏭 কারিগর-পাতা: name+description(ডাক-চাবি)+tools+model; /agents-এ বানাও-দেখো; নিজ-ঘরে কাজ, ফল ফেরে।<br>কারণ: বারবারের নির্দেশনা এক পাতায় পাকা হলে কারখানা নিজেই চলে।</div></div>`,
  senior: {
    title: "কারিগর-কারখানার পাঠ — The Artisan-Factory Lesson",
    body: `<ul class="checklist">
<li>ফাইল: <strong>.claude/agents/&lt;নাম&gt;.md</strong> (দল) / <strong>~/.claude/agents/</strong> (নিজে)।</li>
<li>Frontmatter: <strong>name · description (কখন-ডাকবে) · tools · model</strong>।</li>
<li>সহজ রাস্তা <strong>/agents → Generate with Claude</strong>; সরাসরি ডাকো নাম ধরে।</li>
<li>বর্ণনা কর্ম-ভিত্তিক; <strong>name</strong> সব তলায় ইউনিক (নইলে নীরব-ড্রপ)।</li>
<li>ন্যূনতম হাত (tools) — রিভিউয়ারে Write নয়; স্কোপ-সিঁডি managed→plugin।</li>
</ul>`
  }
});

// ── DOOR 29 · ঘটনা-নাজিরের কেন্দ্র — The Event-Observer's Hub ──
doors.push({
  num: 29,
  icon: "🔔",
  color: "#f59e0b",
  name: "ঘটনা-নাজিরের কেন্দ্র",
  subtitle: "The Event-Observer's Hub",
  tech: "hooks গভীর · ৫ জাত (command/http/mcp_tool/prompt/agent) · hookSpecificOutput · permission-rule injection",
  spirit: "নজর — ঘটনার সাথে সাথে সাড়া",
  secret: "হুক মানে পাঁচ জাতের প্রহরী: command (শেল-স্ক্রিপ্ট), http (দূরের সার্ভারে POST), mcp_tool (MCP-সার্ভারের হাত), prompt (এক-প্রসঙ্গী মডেল-বিচার), agent (টুল-সহ যাচাইকারী); প্রত্যেকে ইভেন্ট-JSON পায়, আর PreToolUse-এর রায় শুধু দরজা খোলা-বন্ধ নয় — hookSpecificOutput-এ তুমি নতুন permission-rule ঢোকাতে পারো, ব্লক-করা স্টপ-এ মানুষের চোখের সামনে কারণ টানতে পারো — জীবনচক্রের প্রতিটা ঘটনায় তোমার হাত।",
  recall: {
    q: "দলের নিয়ম: rm -rf জাতীয় কমান্ড কখনোই না চলুক, আর প্রতি Edit-এর পর ফরম্যাটার চলুক। কোন দুই ইভেন্ট, আর ব্লক-করা কমান্ডের কারণ কীভাবে দেখাবে? হুকের পাঁচ জাত কী কী?",
    qen: "Team rules: rm -rf-style commands must never run, and every Edit should trigger the formatter. Which two events, how do you surface the block reason, and what are the five hook kinds?",
    a: "① ব্লক-পাহারা: PreToolUse hook (matcher: Bash) — স্ক্রিপ্ট stdin-এ টুল-JSON পায়; command-এ rm -rf দেখলে stdout-এ কারণ-সহ JSON রায় দেয়: {\"hookSpecificOutput\": {\"hookEventName\": \"PreToolUse\", \"permissionDecision\": \"deny\", \"permissionDecisionReason\": \"rm -rf নিষিদ্ধ: দরজা ৬-এর নীতি\"}} — টুল ব্লক, কারণ Claude-র চোখে যায়, সে পথ বদলায়। ② ফরম্যাট-পাহারা: PostToolUse (matcher: Edit|Write) — প্রতি সফল এডিটে prettier চালায়। পাঁচ জাত: command (লোকাল শেল — সবচেয়ে সাধারণ), http (ইভেন্ট POST — দূরের লগ/নীতি-সার্ভার), mcp_tool (তোমার MCP-সার্ভারের টুল ডাকে), prompt (মডেলকে এক-প্রসঙ্গী হ্যাঁ/না বিচার করায়), agent (টুল-সহ সাব-এজেন্ট যাচাই — পরীক্ষামূলক)। সব হুক সমান্তরাল চলে; exit কোড ২ = stderr-বার্তা মূল-প্রসঙ্গে; JSON-রায় = সূক্ষ্ম নিয়ন্ত্রণ।",
    aen: "① Block-guard: a PreToolUse hook (matcher: Bash) — the script reads tool-JSON on stdin; spotting rm -rf, it emits a reasoned JSON verdict: {\"hookSpecificOutput\": {\"hookEventName\": \"PreToolUse\", \"permissionDecision\": \"deny\", \"permissionDecisionReason\": \"rm -rf forbidden: Door 6 policy\"}} — tool blocked, reason reaches Claude's eyes, it reroutes. ② Format-guard: PostToolUse (matcher: Edit|Write) — runs prettier after every successful edit. Five kinds: command (local shell — the common one), http (POST the event — remote log/policy server), mcp_tool (calls a tool on your MCP server), prompt (one-turn model judgment), agent (tool-wielding verification subagent — experimental). All matching hooks run in parallel; exit code 2 = stderr message into main context; JSON verdicts = fine control.",
    you: "settings-এ PreToolUse/Bash হুক বসাও যে stdin-JSON-এর tool_input.command-এ 'rm -rf' থাকলে deny-রায় প্রিন্ট করে; তারপর rm -rf /tmp/x চালাও — ব্লক-বার্তা দেখো"
  },
  story: `<p class="scene-setting">ঘটনা-নাজির কর্নেল ইমরান সাহেব স্টুডিওর নিরাপত্তা-কেন্দ্র চালান — তাঁর দেয়ালে পুরো জীবনচক্রের মানচিত্র: সেশন শুরু-শেষ, প্রম্পট জমা, টুল-কলের আগে-পরে, স্টপ, কম্প্যাক্টের আগে-পরে — প্রতিটা ঘটনার নাম লাগানো ঘণ্টা। তাঁর পাঁচ ব্যাটালিয়ন: শেল-স্কোয়াড (command — লোকাল স্ক্রিপ্ট, সবচেয়ে দ্রুত), বেতার-স্কোয়াড (http — ঘটনা দূরের সার্ভারে পাঠায়, সেখান থেকে রায় আসে), MCP-স্কোয়াড (mcp_tool — তোমার নিজের সার্ভারের হাত ধরে কাজ), বিচারক-স্কোয়াড (prompt — মডেলকেই এক প্রসঙ্গে হ্যাঁ/না বলায়), আর তদন্ত-স্কোয়াড (agent — ফাইল পড়ে-গুনে সত্য যাচাই করে, পরীক্ষামূলক)। সবাই ইভেন্ট-JSON পায় এক খামে, সমান্তরাল ছোটে। তাঁর শিক্ষা রায় লেখার: চিৎকার নয়, লিখিত রায় — PreToolUse-এ deny-সিদ্ধান্তে কারণ-লাইন থাকলে কারিগর বুঝে পথ বদলায়; exit 2-এর stderr সোজা মূল-প্রসঙ্গে গিয়ে পড়ে। ব্লক করো বুদ্ধি দিয়ে — কারণহীন ব্লকে কারিগর অন্ধ ঘোরাঘুরি করে।</p>
<p class="scene-setting en">Colonel Imran runs the studio's security hub — his wall carries the whole lifecycle map: session start/end, prompt submit, before/after tool calls, stop, pre/post compact — a bell on every event. Five battalions: the shell squad (command — local scripts, fastest), the wireless squad (http — events POSTed to a remote server, verdicts returned), the MCP squad (mcp_tool — borrowing your own server's hands), the judge squad (prompt — the model itself says yes/no in one turn), and the investigation squad (agent — reads files and verifies truth, experimental). All receive the event-JSON in one envelope, all run in parallel. His teaching on verdicts: no shouting — written rulings; a deny with a reason-line makes Claude reroute intelligently; exit 2's stderr lands straight in the main context. Block with brains — reasonless blocks make the craftsman wander blind.</p>

<div class="code-block"># হুক-ব্যাটালিয়ন নিয়োগ (settings.json):
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "jq -r '.tool_input.command' | grep -q 'rm -rf' && echo '{\"hookSpecificOutput\":{\"hookEventName\":\"PreToolUse\",\"permissionDecision\":\"deny\",\"permissionDecisionReason\":\"rm -rf নিষিদ্ধ — দরজা ৬\"}}' || true"
      }]
    }],
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{ "type": "command", "command": "npx prettier --write $(jq -r '.tool_input.file_path')" }]
    }]
  }
}

# পাঁচ জাত এক নজরে:
#   command  → লোকাল শেল-স্ক্রিপ্ট (stdin-JSON, stdout-রায়)
#   http     → ইভেন্ট POST দূরের সার্ভারে (নীতি-কেন্দ্র)
#   mcp_tool → তোমার MCP-সার্ভারের নাম-টুল ডাকে
#   prompt   → মডেলকে এক-প্রসঙ্গী বিচার (হ্যাঁ/না JSON)
#   agent    → টুল-সহ সাব-এজেন্ট যাচাই (পরীক্ষামূলক)

# রায়ের ভাষা (command-হুক):
#   exit 0   → চলুক (নীরব)
#   exit 2   → ব্লক + stderr-বার্তা মূল-প্রসঙ্গে
#   stdout JSON + hookSpecificOutput → সূক্ষ্ম রায়:
#     permissionDecision: allow | deny | ask
#     permissionDecisionReason: কারণ (কারিগর পড়বে)
#   PostToolUse-এ: additionalContext দিয়ে প্রসঙ্গ-ইনজেকশন

# ইভেন্ট-মানচিত্র (গুরুত্বপূর্ণ ঘণ্টা):
#   SessionStart/End · UserPromptSubmit · PreToolUse /
#   PostToolUse · Stop · PreCompact/PostCompact · Notification
#   · SubagentStart/Stop · PermissionRequest/Denied

# ডিবাগ:
#   claude --debug hooks   # কোন হুক কেন চলল/চলল-না
#   /hooks                 # চলতি হুক-তালিকা</div>

<table class="kv-table">
<tr><th>জাত</th><th>যন্ত্র</th><th>কখন</th></tr>
<tr><td class="hl">command</td><td>লোকাল শেল</td><td>দ্রুত স্থানীয় পাহারা</td></tr>
<tr><td class="hll">http</td><td>দূরের সার্ভার</td><td>কেন্দ্রীয় নীতি/লগ</td></tr>
<tr><td class="hl">mcp_tool</td><td>MCP-সার্ভার</td><td>নিজের টুল-জগৎ</td></tr>
<tr><td class="hll">prompt</td><td>মডেল-বিচার</td><td>জটিল হ্যাঁ/না</td></tr>
<tr><td class="hl">agent</td><td>টুল-সহ যাচাই</td><td>সত্য-অনুসন্ধান (পরীক্ষামূলক)</td></tr>
</table>

<div class="diagram">
<div class="diag-title">নিরাপত্তা-কেন্দ্রের মানচিত্র — The Security-Hub Map</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d29" viewBox="0 0 10 10" refX="9" refX2="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="75" width="130" height="44" rx="10"/><text class="lbl" x="80" y="93">জীবনচক্র</text><text class="lbl-sm" x="80" y="109">ইভেন্ট-ঘণ্টা বাজল</text>
<rect class="node-cyan" x="185" y="75" width="110" height="44" rx="10"/><text class="lbl-cyan" x="240" y="93">ইভেন্ট-JSON</text><text class="lbl-sm" x="240" y="109">এক খামে সবাই পায়</text>
<rect class="node-hot" x="335" y="18" width="90" height="32" rx="8"/><text class="lbl-sm" x="380" y="38">command</text>
<rect class="node-hot" x="335" y="56" width="90" height="32" rx="8"/><text class="lbl-sm" x="380" y="76">http</text>
<rect class="node-hot" x="335" y="94" width="90" height="32" rx="8"/><text class="lbl-sm" x="380" y="114">mcp_tool</text>
<rect class="node-hot" x="335" y="132" width="90" height="32" rx="8"/><text class="lbl-sm" x="380" y="152">prompt/agent</text>
<rect class="node-leaf" x="465" y="75" width="85" height="44" rx="10"/><text class="lbl-leaf" x="507" y="93">রায়</text><text class="lbl-sm" x="507" y="109">allow/deny+কারণ</text>
<line x1="145" y1="97" x2="181" y2="97" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d29)"/>
<line x1="295" y1="90" x2="331" y2="36" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d29)"/>
<line x1="295" y1="94" x2="331" y2="72" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d29)"/>
<line x1="295" y1="99" x2="331" y2="110" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d29)"/>
<line x1="295" y1="104" x2="331" y2="146" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d29)"/>
<line x1="425" y1="97" x2="461" y2="97" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d29)"/>
<rect class="cell" x="15" y="168" width="530" height="18" rx="7"/><text class="lbl-sm" x="280" y="181">সবাই সমান্তরাল ছোটে · exit 2 = stderr মূল-প্রসঙ্গে · JSON-রায়ে কারণসহ deny কারিগরকে পথ শেখায়</text>
</svg>
<div class="diag-cap">ঘণ্টা → JSON-খাম → পাঁচ ব্যাটালিয়ন → রায় — প্রতিটা ঘটনায় তোমার হাত, কারণসহ।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নাজিরের সতর্কতা:</strong> হুক-স্ক্রিপ্টে দ্রুত থাকো — প্রতিটা টুল-কলের আগে-পরে চলে; ২ সেকেন্ডের স্ক্রিপ্ট মানে প্রতি ধাপে ২ সেকেন্ড কর; ধীর-কাজ (টেস্ট, বিল্ড) PostToolUse-এর অ্যাসিনক্রোনাস রাস্তায় বা Stop-ঘণ্টায়। jq-নির্ভরতা টিম-মেশিনে থাকবে তা নিশ্চিত করো, নইলে হুক নীরবে ভাঙবে। matcher রেগেক্স — 'Edit|Write' লেখো, কমা নয়। আর exit 2 আর JSON-রায় একসাথে নয়: JSON থাকলে সেটাই শোনা হয়। সবশেষ: হুক-বিপদ মানে ব্লক-নয় মাত্র — একবার সব-ব্লক হুক বসালে কারিগর অচল; পরীক্ষা করে (claude --debug hooks), তারপর বসাও।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The observer's caution:</strong> keep hook scripts fast — they run before/after EVERY tool call; a 2-second script taxes every step; slow jobs (tests, builds) go async in PostToolUse or on the Stop bell. Ensure jq exists on teammate machines or hooks break silently. Matchers are regex — 'Edit|Write', not commas. And don't mix exit 2 with JSON verdicts: when JSON is present, it is what's heard. Finally: hooks can over-block — a block-everything hook paralyzes the craftsman; test (claude --debug hooks) before deploying.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ বধির পাহারা</div>কারণহীন deny · ধীর স্ক্রিপ্ট প্রতি ধাপে · exit 2 + JSON মিশ্রিত · পরীক্ষা ছাড়া বসানো</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ইমরান সাহেবের কেন্দ্র</div>রায়ে কারণ-লাইন · দ্রুত স্ক্রিপ্ট, ভার Stop-এ · জাত-বিভাজন (command→agent) · --debug-পরীক্ষা</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫ জাত</div><div class="sc-label">command·http·mcp_tool·prompt·agent</div></div>
<div class="stat-card"><div class="sc-num">exit 2</div><div class="sc-label">ব্লক + stderr প্রসঙ্গে</div></div>
<div class="stat-card"><div class="sc-num">hookSpecificOutput</div><div class="sc-label">সূক্ষ্ম রায়-JSON</div></div>
<div class="stat-card"><div class="sc-num">--debug hooks</div><div class="sc-label">হুক-ডিবাগ চোখ</div></div>
</div>

<p class="verse">নজরের পাঠ: ইসলামে হিসাব-নিকাশের ফেরেশতা লেখে-লেখে চলে — ঘটনার সাথে সাথে, বিলম্ব নয়; আর ন্যায়বিচার মানে কারণ-জ্ঞাপন — রায়ের সাথে ব্যাখ্যা। ইমরান সাহেবের কেন্দ্রও: প্রতিটা ঘটনায় সাড়া, প্রতিটা ব্লকে কারণ।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🔔 পাঁচ ব্যাটালিয়ন, এক JSON-খাম; রায় hookSpecificOutput-এ কারণসহ; ধীর-কাজ Stop-এ; --debug-এ পরীক্ষা।<br>কারণ: কারণ-জ্ঞাপিত ব্লক শাস্তি নয় — শিক্ষা; কারিগর পথ শেখে।</div></div>`,
  senior: {
    title: "ঘটনা-নাজিরের পাঠ — The Event-Observer's Lesson",
    body: `<ul class="checklist">
<li>পাঁচ জাত জেনে রাখো: <strong>command/http/mcp_tool/prompt/agent</strong> — command দ্রুত-সাধারণ।</li>
<li>ব্লক-রায়: <strong>hookSpecificOutput + permissionDecision + Reason</strong>।</li>
<li><strong>exit 2</strong> = ব্লক+stderr মূল-প্রসঙ্গে; JSON থাকলে JSON-ই শোনা হয়।</li>
<li>স্ক্রিপ্ট দ্রুত; ভারী কাজ <strong>PostToolUse-async/Stop</strong>; matcher রেগেক্স।</li>
<li>বসানোর আগে <strong>claude --debug hooks</strong> — নীরব-ভাঙা হুক সবচেয়ে বিপজ্জনক।</li>
</ul>`
  }
});

// ── DOOR 30 · ইঞ্জিন-ঘরের নিয়ন্ত্রণ-বোর্ড — The Engine Room's Control Board ──
doors.push({
  num: 30,
  icon: "⚙️",
  color: "#f59e0b",
  name: "ইঞ্জিন-ঘরের নিয়ন্ত্রণ-বোর্ড",
  subtitle: "The Engine Room's Control Board",
  tech: "ANTHROPIC_MODEL · ANTHROPIC_SMALL_FAST_MODEL · CLAUDE_CODE_* env · availableModels · opusplan",
  spirit: "মাপ-জ্ঞান — কোন ইঞ্জিন কোন কাজে",
  secret: "মডেল-নির্বাচন চার তালার দরজা: /model (সেশনে), --model (চালুতে), ANTHROPIC_MODEL env (বাতাসে), settings model-কী (নকশায়) — উপরেরটা জেতে; আর opusplan নামে জাদু-মিশ্রণ: পরিকল্পনায় opus, হাতে-কাজে sonnet; SMALL_FAST_MODEL ছোট-কাজের ইঞ্জিন ঠিক করে; সংস্থা availableModels-দিয়ে পাল্লার পথ সংকুচিত করে — ইঞ্জিন-ঘরের প্রতিটা লিভার এক দরজায়।",
  recall: {
    q: "তিন টার্মিনালে তিন মডেল চালাতে চাও একসাথে; আর পরিকল্পনায় Opus-বুদ্ধি কিন্তু এক্সিকিউশনে Sonnet-খরচ চাও। দুই সমাধান কী?",
    qen: "Three terminals, three models at once; and Opus-brain for planning with Sonnet-cost for execution. The two solutions?",
    a: "① তিন-টার্মিনাল-তিন-ইঞ্জিন: প্রতিটা চালুতে নিজের পতাকা — claude --model opus, claude --model sonnet, claude --model haiku; --model/env শুধু যে-সেশনে চালু হয়েছে সেটার — সমান্তরাল-ইঞ্জিনের এই রাস্তা (সেভ-করা ডিফল্ট সবাইকে টানবে, পতাকা জিতবে)। ② মিশ্র-মস্তিষ্ক: /model opusplan — প্ল্যান-মোডে opus চলে, এক্সিকিউশনে নিজে থেকে sonnet-এ নামে; খরচ-বুদ্ধি দুটোই। বাকি লিভার: ANTHROPIC_SMALL_FAST_MODEL (ছোট-সহায়ক কাজের আলাদা ইঞ্জিন), sonnet[1m]/opus[1m] (১০-লাখ-টোকেন জানালা), আর সংস্থার availableModels + enforceAvailableModels — পাল্লায় কী থাকবে তার তালা।",
    aen: "① Three terminals, three engines: each launch carries its own flag — claude --model opus, --model sonnet, --model haiku; --model/env bind only their own session — this is the parallel-engine road (a saved default pulls everyone; the flag wins). ② Mixed brain: /model opusplan — plan mode runs opus, execution drops to sonnet automatically; cost AND brain both. Other levers: ANTHROPIC_SMALL_FAST_MODEL (a separate small-helper engine), sonnet[1m]/opus[1m] (million-token windows), and enterprise availableModels + enforceAvailableModels — the lock on the picker."
  },
  story: `<p class="scene-setting">ইঞ্জিন-ঘরের প্রধান মিস্ত্রি ওসমান সাহেব তিনটা বয়লার একসাথে চালান — প্রতিটার গায়ে নিজের পতাকা: একটায় opus (ভারী-বুদ্ধির কাজ), একটায় sonnet (দৈনন্দিন), একটায় haiku (দ্রুত-সস্তা)। তাঁর নিয়ম: পতাকা চালুর মুহূর্তে বাঁধা হয় — claude --model opus বলে জ্বালানো বয়লার সারাজীবন opus-ই; অন্য বয়লারের সেটিং তাকে ছোঁবে না। কিন্তু তাঁর গর্ব opusplan-নামের যমজ-বয়লার: নকশা-টেবিলে opus-বুদ্ধি ভাবে, কাজে নামলে নিজে থেকে sonnet-খরচে বদলে যায় — ভারী চিন্তা, হালকা বিল। দেয়ালে আরও লিভার: SMALL_FAST_MODEL — ছোট-সহায়ক কাজের আলাদা ইঞ্জিন; ১m-সিরিজের বিশাল-জানালা — লম্বা সেশনের বড় কাচ। সংস্থার নিরাপত্তা-কক্ষ থেকে মাঝে মাঝে আদেশ: availableModels-তালিকা — পাল্লায় কী দেখানো যাবে তার সীমা; ওসমান সাহেব মানেন — নিয়ন্ত্রণ-বোর্ড যত বড়, শৃঙ্খলা তত জরুরি।</p>
<p class="scene-setting en">Chief engineer Osman runs three boilers at once — each flying its own flag: opus (heavy-brain), sonnet (daily), haiku (fast-cheap). His rule: the flag binds at lighting — a boiler started with claude --model opus stays opus for life. His pride is the twin-boiler opusplan: at the drafting table the opus-brain thinks; stepping into execution it switches itself to sonnet-cost — heavy thinking, light bill. More levers on the wall: SMALL_FAST_MODEL, a separate small-helper engine; the 1m-series giant windows. From the security room comes the availableModels list — the limit on the picker; the bigger the board, the more discipline matters.</p>

<div class="code-block"># ইঞ্জিন-নির্বাচনের চার তালা (উপরের জেতে):
#   ① /model opus          — সেশনে, তাৎক্ষণিক (Enter=ডিফল্ট-সেভ)
#   ② claude --model opus  — চালুর পতাকা (সেশন-সীমিত)
#   ③ ANTHROPIC_MODEL=opus — env-বাতাস
#   ④ settings "model": "opus" — নকশা-খাতায় স্থায়ী
# সমান্তরাল বয়লার: প্রতি টার্মিনালে নিজের পতাকা —
claude --model opus & claude --model sonnet & claude --model haiku &

# জাদু-মিশ্রণ:
claude --model opusplan     # প্ল্যানে opus → এক্সিকিউশনে sonnet

# বিশাল-জানালা (১০-লাখ টোকেন):
claude --model 'sonnet[1m]'    # লম্বা সেশন/বিশাল কোডবেস

# সহায়ক-ইঞ্জিন:
export ANTHROPIC_SMALL_FAST_MODEL=haiku   # ছোট-কাজ আলাদা বয়লারে

# সংস্থার পাল্লা-তালা (managed-settings):
{ "availableModels": ["sonnet", "haiku"],
  "enforceAvailableModels": true }
#   পাল্লা সংকুচিত; DEFAULT-ও তালিকার ভেতরে থাকবে

# ভার্সন-পিন: পূর্ণ-নাম (claude-opus-4-8) বা
#   ANTHROPIC_DEFAULT_OPUS_MODEL — এলিয়াস-ড্রিফট রোধ</div>

<table class="kv-table">
<tr><th>লিভার</th><th>কাজ</th><th>স্থায়িত্ব</th></tr>
<tr><td class="hl">--model</td><td>চালুর পতাকা</td><td>সেশন-সীমিত</td></tr>
<tr><td class="hll">/model</td><td>সেশনে বদল + ডিফল্ট-সেভ</td><td>Enter=স্থায়ী, s=সেশন</td></tr>
<tr><td class="hl">ANTHROPIC_MODEL</td><td>env-বাতাসের মডেল</td><td>এক্সপোর্ট-জীবন</td></tr>
<tr><td class="hll">opusplan</td><td>প্ল্যান opus → কাজ sonnet</td><td>সেশন-নীতি</td></tr>
<tr><td class="hl">[1m]-সিরিজ</td><td>১০-লাখ-টোকেন জানালা</td><td>মডেল-নামের অংশ</td></tr>
</table>

<div class="diagram">
<div class="diag-title">নিয়ন্ত্রণ-বোর্ডের তালা — The Control Board's Locks</div>
<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg">
<rect class="node-hot" x="15" y="12" width="530" height="26" rx="8"/><text class="lbl-sm" x="280" y="29">① /model — সেশনে তাৎক্ষণিক (Enter=ডিফল্ট-সেভ)</text>
<rect class="node" x="35" y="44" width="490" height="26" rx="8"/><text class="lbl-sm" x="280" y="61">② claude --model — চালুর পতাকা (সেশন-সীমিত; সমান্তরালের রাস্তা)</text>
<rect class="node" x="55" y="76" width="450" height="26" rx="8"/><text class="lbl-sm" x="280" y="93">③ ANTHROPIC_MODEL env — বাতাসে স্থায়ী</text>
<rect class="node-cyan" x="75" y="108" width="410" height="26" rx="8"/><text class="lbl-cyan" x="280" y="125">④ settings model-কী — নকশায় স্থায়ী</text>
<rect class="cell" x="15" y="142" width="530" height="26" rx="8"/>
<text class="lbl-sm" x="280" y="159">opusplan = জাদু-যমজ · SMALL_FAST_MODEL সহায়ক-ইঞ্জিন · availableModels পাল্লা-তালা</text>
</svg>
<div class="diag-cap">উপরের তালা জেতে; সমান্তরাল বয়লারে প্রতি-চালু পতাকা — এই দুই নিয়মে ইঞ্জিন-ঘর তোমার হাতে।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>প্রধান-মিস্ত্রির সতর্কতা:</strong> সবচেয়ে বিভ্রান্তিকর জোড়া: /model-এর সেভ-ডিফল্ট বনাম --model পতাকা — সমান্তরাল বিভিন্ন-মডেল চাইলে /model নয়, প্রতি-টার্মিনাল --model; সেভ-ডিফল্ট পরের চালুতে সবাইকে টেনে নেবে। resume-করা সেশন যে-মডেলে শেষ হয়েছিল সেটাতেই ফেরে — বর্তমান সেটিং নয়। [1m]-জানালার ভারী খরচ মনে রাখো; সংস্থার availableModels-এর বাইরে চাইলে নীরবে প্রতিস্থাপিত হয় — টিমে জানিয়ে রাখো।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The chief's caution:</strong> the most confusing pair: /model's saved default vs the --model flag — for parallel different-model terminals use per-launch --model, not /model. Resumed sessions return on the model they ended with. [1m] windows cost heavily; out-of-list models are silently substituted — keep the team informed.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ এক-ইঞ্জিনের বন্দি</div>সব কাজে ভারী-মডেল (খরচ-অগ্নি) · /model-ডিফল্ট নিয়ে টার্মিনাল-যুদ্ধ · [1m] অভ্যাস · SMALL_FAST অজানা</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ওসমান সাহেবের ঘর</div>কাজ-অনুযায়ী ইঞ্জিন · সমান্তরালে প্রতি-চালু পতাকা · opusplan-সঞ্চয় · পাল্লা-তালার সচেতনতা</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">--model</div><div class="sc-label">চালুর পতাকা (সমান্তরাল)</div></div>
<div class="stat-card"><div class="sc-num">opusplan</div><div class="sc-label">প্ল্যান opus · কাজ sonnet</div></div>
<div class="stat-card"><div class="sc-num">SMALL_FAST</div><div class="sc-label">সহায়ক-ইঞ্জিন env</div></div>
<div class="stat-card"><div class="sc-num">[1m]</div><div class="sc-label">বিশাল-জানালা সিরিজ</div></div>
</div>

<p class="verse">মাপের পাঠ: কুরআনে মিজান — প্রতিটা জিনিসের মাপ; বাড়তি-ঘাটতি দুটোই ধ্বংস। ইঞ্জিন-ঘরও: ভারী-কাজে ভারী-ইঞ্জিন, হালকা-কাজে হালকা — মাপের সম্মানই সঞ্চয়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">⚙️ চার তালা: /model > --model > env > settings; সমান্তরালে প্রতি-চালু পতাকা; জাদু opusplan।<br>কারণ: কোন ইঞ্জিন কোন কাজে — এই মাপ-জ্ঞানই খরচের সুদ।</div></div>`,
  senior: {
    title: "ইঞ্জিন-ঘরের পাঠ — The Engine-Room Lesson",
    body: `<ul class="checklist">
<li>চার তালা ক্রমে: <strong>/model → --model → ANTHROPIC_MODEL → settings.model</strong>।</li>
<li>সমান্তরাল বিভিন্ন-মডেল: প্রতি টার্মিনালে <strong>--model পতাকা</strong>।</li>
<li><strong>opusplan</strong> — প্ল্যান opus, এক্সিকিউশন sonnet; [1m] দরকারমতো।</li>
<li><strong>ANTHROPIC_SMALL_FAST_MODEL</strong> — সহায়ক কাজের আলাদা ইঞ্জিন।</li>
<li>সংস্থার <strong>availableModels</strong> — পাল্লা-সীমা; বাইরে গেলে প্রতিস্থাপন।</li>
</ul>`
  }
});



// ── DOOR 31 · সেতু-দরজার প্রহরী — The Bridge-Door's Keeper ──
doors.push({
  num: 31,
  icon: "🌉",
  color: "#22c55e",
  name: "সেতু-দরজার প্রহরী",
  subtitle: "The Bridge-Door's Keeper",
  tech: "Capstone ভূমিকা · শেখা→নির্মাণ উত্তরণ · প্রজেক্ট-নির্বাচনের মাপকাঠি",
  spirit: "উত্তরণ — জানা থেকে করা-যাওয়া",
  secret: "এই দরজা দুই জগতের সেতু: পেছনে ৩০টা দরজায় শেখা হাতের কলকব্জা, সামনে একটা প্রজেক্ট — শুরু থেকে শেষ, তোমার হাতে; ভালো capstone-এর চার মাপ: সত্যিকার দরকার (রোজ ব্যবহার হবে), বই-ছোঁয়া (প্রায় প্রতিটা দরজার হাত লাগবে), সপ্তাহান্তে-সাইজ (শেষ করা সম্ভব), আর পরীক্ষাযোগ্য হৃদয় (গণিত/আচরণ — TDD-র খোরাক)।",
  recall: {
    q: "কেন SmritiBox-ই capstone — চার মাপকাঠিতে যাচাই করো; আর প্রজেক্ট-তালিকা থেকে বাছাইয়ের সময় কোন মাপটা সবচেয়ে আগে?",
    qen: "Why is SmritiBox THE capstone — test it against the four measures; and which measure leads when shortlisting projects?",
    a: "① সত্যিকার দরকার: তুমি রোজ NotebookLM-কার্ডে পড়ো — নিজের SRS টুল প্রতিদিন খোলা হবে, ডেমো-কবরস্থানে যাবে না। ② বই-ছোঁয়া: plan-মোড (২০), CLAUDE.md (২), TDD-মন (৩৩-এ পূর্ণ), settings/hooks (২৬/২৯), স্কিল (১০/৩৪), এজেন্ট (২৮), CI (২১/৩৪), ট্যাগ-রিলিজ (৩৪) — প্রায় প্রতিটা দরজার হাত একবার লাগে। ③ সপ্তাহান্তে-সাইজ: চার ছোট মডিউল (sm2/card/store/cli), কোনো ফ্রেমওয়ার্ক নেই — শেষ-করা সম্ভব। ④ পরীক্ষাযোগ্য হৃদয়: SM-2 বিশুদ্ধ গণিত — প্রতিটা সূত্র টেস্ট লেখা যায়; TDD-র জন্য আদর্শ। বাছাইয়ের ক্রম: সত্যিকার দরকার আগে — কারণ অব্যবহৃত প্রজেক্টে বাকি তিন গুণ মরে যায়; তারপর সাইজ (শেষ-না-হওয়া প্রজেক্ট শেখায় হতাশা), তারপর পরীক্ষাযোগ্যতা, সবশেষে বই-ছোঁয়া (যা প্রায় স্বয়ংক্রিয়ভাবে আসে)।",
    aen: "① Real need: you study on NotebookLM cards daily — your own SRS tool gets opened every day, never lands in the demo-graveyard. ② Book-touching: plan mode (20), CLAUDE.md (2), TDD mind (full in 33), settings/hooks (26/29), skills (10/34), agents (28), CI (21/34), tag-release (34) — nearly every door's hand gets used once. ③ Weekend-size: four small modules (sm2/card/store/cli), no frameworks — finishable. ④ Testable heart: SM-2 is pure math — every formula testable; ideal TDD fuel. Selection order: real need FIRST — unused projects kill the other three virtues; then size (unfinished projects teach despair), then testability, and book-touching comes almost automatically.",
    you: "নিজের প্রজেক্ট-তালিকা লেখো আর চার মাপে ১-৫ নাম্বার দাও: দরকার · সাইজ · পরীক্ষাযোগ্যতা · বই-ছোঁয়া; সর্বোচ্চ-ভারযুক্ত দরকার-স্কোরই পরের প্রজেক্ট"
  },
  story: `<p class="scene-setting">দুই শহরের মাঝে নদী, আর নদীর ওপর সেতু-দরজার প্রহরী করিম বখশ — তাঁর কাজ শুধু রক্ষা নয়, বাছাই: কোন যাত্রী পার হবে, কে এখনো তীরে থাকবে। তাঁর চার প্রশ্ন বিখ্যাত: ① যাত্রার কাজ সত্যি কি? (সত্যিকার দরকার — ঘুরে আসার নয়, ওপারে তোমাকে বাস করতে হবে) ② বোঝা কত ভারী? (সপ্তাহান্তে-সাইজ — অর্ধেক রাস্তায় ক্লান্ত যাত্রী নদীতে পড়ে) ③ সঙ্গী কি গোনা যায়? (পরীক্ষাযোগ্যতা — যা মাপা যায় না, তার পথ হারায়) ④ রসদ কি শেখা কারিগরির সাথে মেলে? (বই-ছোঁয়া — যন্ত্রপাতি যা জানো, সেগুলোই লাগবে)। আজ সেতুতে SmritiBox-এর যাত্রী এসেছে — করিম বখশ চার প্রশ্ন করলেন, চার উত্তরও ঝলমলে; প্রহরী দরজা খুলে দিলেন: যাও, পরের তিন দরজা তোমার নির্মাণ-যাত্রা — নকশা-বাগান (৩২), ইট-ভাটা (৩৩), উদ্বোধন (৩৪) — শেষে সিংহাসন (৩৫) তোমারই অপেক্ষায়।</p>
<p class="scene-setting en">Between two cities runs a river, and on its bridge stands keeper Karim Bakhsh — his job not just guarding but SELECTING: which traveler crosses, who stays on this bank. His four questions are famous: ① Is the journey's purpose real? (genuine need — not a stroll; you must LIVE on the far side) ② How heavy is the load? (weekend-size — travelers exhausted mid-bridge fall into the river) ③ Can the provisions be counted? (testability — what can't be measured loses its way) ④ Does the cargo match the crafts you've learned? (book-touching — the tools you know are the ones you'll use). Today the traveler SmritiBox arrived — four questions asked, four answers bright; the keeper opened the door: go — the next three doors are your construction journey: Design Garden (32), Brick Kiln (33), Grand Opening (34) — and the Throne (35) awaits you at the end.</p>

<div class="code-block"># ── চার মাপকাঠি — নিজের প্রজেক্ট-পরীক্ষা ──
# প্রতিটা মাপে ১-৫; দরকার-স্কোর ×২ (দ্বিগুণ ভার)
মাপ                 SmritiBox   ব্যাখ্যা
─────────────────────────────────────────────────
সত্যিকার দরকার      ৫         রোজ NotebookLM-কার্ডে পড়ো
সপ্তাহান্তে-সাইজ    ৫         ৪ ছোট মডিউল, ফ্রেমওয়ার্ক নেই
পরীক্ষাযোগ্য হৃদয়   ৫         SM-2 = বিশুদ্ধ গণিত
বই-ছোঁয়া           ৫         plan/CLAUDE.md/TDD/hooks/skill/
                              agent/CI/tag — সব দরজা লাগবে

# বাছাই-ক্রম (গুরুত্ব অনুসারে):
#   ১. দরকার — অব্যবহৃত প্রজেক্টে বাকি সব গুণ মৃত
#   ২. সাইজ — অর্ধসমাপ্তি শেখায় হতাশা, আত্মবিশ্বাস নয়
#   ৩. পরীক্ষাযোগ্যতা — TDD-র খোরাক
#   ৪. বই-ছোঁয়া — প্রায় স্বয়ংক্রিয়; জোর করে ঢোকাও না

# পালানো-তালিকা (capstone-এ যা নয়):
#   ✗ ফ্রেমওয়ার্ক-শেখা-প্রজেক্ট (দুই শিখা একসাথে = দুইই অর্ধেক)
#   ✗ ডাটাবেস-স্কিমা-প্রজেক্ট (টেস্ট-হৃদয় কঠিন)
#   ✗ 'সবাই ব্যবহার করবে' ভাবনা (v1-এর ব্যবহারকারী = তুমি)

# SmritiBox যা ধরবে (৩২-৩৪ পথের মানচিত্র):
python 3.12 · pytest · argparse · JSON-লাইন ফাইল
#   SM-2 সূত্র · কার্ড-ডেটা · ফাইল-স্টোর · CLI-দরজা
#   + স্কিল · হুক · এজেন্ট · CI · ট্যাগ (৩৪-এ)</div>

<table class="kv-table">
<tr><th>মাপ</th><th>প্রশ্ন</th><th>SmritiBox</th></tr>
<tr><td class="hl">দরকার</td><td>রোজ খুলব?</td><td>৫ — নিজের পড়ার যন্ত্র</td></tr>
<tr><td class="hll">সাইজ</td><td>সপ্তাহান্তে শেষ?</td><td>৫ — ৪ মডিউল, শূন্য ফ্রেমওয়ার্ক</td></tr>
<tr><td class="hl">পরীক্ষাযোগ্যতা</td><td>গণিত/আচরণ গোনা যায়?</td><td>৫ — SM-2 সূত্র</td></tr>
<tr><td class="hll">বই-ছোঁয়া</td><td>দরজাগুলো লাগবে?</td><td>৫ — ৩০ দরজার হাত</td></tr>
</table>

<div class="diagram">
<div class="diag-title">সেতু ও চার প্রশ্ন — The Bridge and Four Questions</div>
<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d31" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#22c55e"/></marker>
</defs>
<rect class="node" x="15" y="70" width="120" height="44" rx="10"/><text class="lbl" x="75" y="88">শেখার তীর</text><text class="lbl-sm" x="75" y="104">দরজা ১–৩০</text>
<rect class="node-cyan" x="205" y="70" width="150" height="44" rx="10"/><text class="lbl-cyan" x="280" y="88">সেতু-দরজা</text><text class="lbl-sm" x="280" y="104">চার প্রশ্নে বাছাই</text>
<rect class="node-hot" x="425" y="70" width="120" height="44" rx="10"/><text class="lbl-hot" x="485" y="88">নির্মাণ-তীর</text><text class="lbl-sm" x="485" y="104">দরজা ৩২–৩৫</text>
<line x1="135" y1="92" x2="201" y2="92" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d31)"/>
<line x1="355" y1="92" x2="421" y2="92" stroke="#22c55e" stroke-width="3" fill="none" marker-end="url(#ar59d31)"/>
<rect class="cell" x="15" y="20" width="530" height="30" rx="8"/><text class="lbl-sm" x="280" y="39">প্রহরীর চার প্রশ্ন: সত্যি কাজ? · বোঝা হালকা? · রসদ গোনা যায়? · কারিগরি মেলে?</text>
<rect class="cell" x="15" y="135" width="530" height="40" rx="8"/>
<text class="lbl-sm" x="280" y="151">বাছাই-ক্রম: দরকার ×২ ভার → সাইজ → পরীক্ষাযোগ্যতা → বই-ছোঁয়া; পালাও: ফ্রেমওয়ার্ক-শেখা, স্কিমা-প্রজেক্ট, 'সবাই-ব্যবহার-করবে'</text>
<text class="lbl-sm" x="280" y="168">SmritiBox = ৪×৫ স্কোর — নিজের পড়ার যন্ত্র, নিজের হাতের ইট</text>
</svg>
<div class="diag-cap">তীর থেকে তীরে সেতু একটাই — চার প্রশ্নে উত্তীর্ণ যাত্রীই নির্মাণ-তীরে; পরের দরজায় বাগান রোপণ।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সেতু-প্রহরীর সতর্কতা:</strong> capstone-বাছাইয়ের প্রধান মৃত্যু দুটো — 'চমৎকার-আইডিয়া' (চমক আছে, দরকার নেই: কবরস্থানে যাবে) আর 'জাদু-প্রজেক্ট' (একসাথে তিনটা নতুন প্রযুক্তি শেখা: নদীতে পড়বে)। বই-ছোঁয়াকে জোর করে ঢোকাও না — সত্যিকার প্রজেক্টে হাতগুলো নিজেই আসে। আর স্কোর-খাতা লিখে রাখো: তিন মাস পরে পরের প্রজেক্ট বাছাইয়ে এই খাতাই মানদণ্ড। শেষ কথা: যে যাত্রা শেষ হয়নি, তার শিক্ষাও অর্ধেক — সাইজ-মাপ কখনো অবহেলা কোরো না।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The bridge-keeper's caution:</strong> two chief deaths in capstone selection — 'brilliant-idea' ( dazzle without need: graveyard-bound) and 'magic-project' (three new technologies at once: river-bound). Never force book-touching — real projects summon the hands themselves. And keep the score-sheet: three months later it becomes the yardstick for your next choice. Final word: an unfinished journey teaches half a lesson — never neglect the size measure.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অন্ধ যাত্রী</div>চমক-আইডিয়া তাড়া · তিন নতুন প্রযুক্তি একসাথে · 'সবাই-ব্যবহার-করবে' বাস্তব-বিভ্রম · অর্ধ-শেষ গর্ব</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ করিম বখশের বাছাই</div>চার-প্রশ্ন স্কোর-খাতা · দরকার ×২ ভার · সপ্তাহান্তে-সাইজ শপথ · SmritiBox = ৪×৫ উত্তীর্ণ</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৪ প্রশ্ন</div><div class="sc-label">দরকার · সাইজ · গণনীয়তা · ছোঁয়া</div></div>
<div class="stat-card"><div class="sc-num">দরকার ×২</div><div class="sc-label">প্রথম ও ভারী মাপ</div></div>
<div class="stat-card"><div class="sc-num">৪×৫</div><div class="sc-label">SmritiBox-এর স্কোর</div></div>
<div class="stat-card"><div class="sc-num">৩২→৩৫</div><div class="sc-label">নির্মাণ-তীরের পথ</div></div>
</div>

<p class="verse">উত্তরণের পাঠ: কুরআনে ঈমানের পর আমলের ঘোষণা — 'যারা ঈমান আনে ও সৎকাজ করে' (১০৩:৩): জানা আর করা পাশাপাশি, একাকী নয়; সাহাবায়ে কেরাম শিখেছেন যুদ্ধে দাঁড়িয়ে, বাণিজ্যে বসে। সেতু-দরজাও তাই: ৩০ দরজার জানা এখন কাজের ময়দানে নামবে — যা হাতে ধরা যায়, সেটাই সত্যিকার জ্ঞান।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🌉 চার প্রশ্নে বাছাই: দরকার(×২) → সাইজ → গণনীয়তা → ছোঁয়া; অর্ধ-শেষ নয়, শেষ-করা প্রজেক্টই শিক্ষা।<br>কারণ: সেতু শেখার তীরে নয় — পার হওয়ার জন্য; যে পার হলো, সে-ই কারিগর।</div></div>`,
  senior: {
    title: "সেতু-দরজার পাঠ — The Bridge-Door Lesson",
    body: `<ul class="checklist">
<li>চার মাপে স্কোর-খাতা: <strong>দরকার(×২) · সাইজ · পরীক্ষাযোগ্যতা · বই-ছোঁয়া</strong>।</li>
<li>বাছাই-ক্রম: <strong>দরকার আগে</strong> — অব্যবহৃত প্রজেক্ট সব গুণ মারে; তারপর সাইজ।</li>
<li>পালাও: ফ্রেমওয়ার্ক-শেখা · স্কিমা-প্রজেক্ট · 'সবাই-ব্যবহার-করবে'।</li>
<li>SmritiBox পথের মানচিত্র: <strong>python · pytest · argparse · JSON-লাইন · SM-2</strong>।</li>
<li>স্কোর-খাতা সংরক্ষণ — পরের প্রজেক্টের মানদণ্ড এটাই।</li>
</ul>`
  }
});

