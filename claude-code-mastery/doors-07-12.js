// ════════════════════════════════════════
// Book 59 v4 · The Terminal Craftsman — Complete Reference
// DOORS – 07 – 12 · doc-grounded (code.claude.com via context7)
// ════════════════════════════════════════



// ── DOOR 7 · ঠিকাদার রফিক — Rafiq the Contractor ──
doors.push({
  num: 7,
  icon: "🎖️",
  color: "#b37feb",
  name: "ঠিকাদার রফিক",
  subtitle: "Rafiq the Contractor",
  tech: "Subagents & Delegation",
  spirit: "ওয়াকালা — প্রতিনিধি দিয়ে কাজ, দায় তোমার",
  secret: "ধুলো উঠতি কাজ নিজের ঘরে টেনো না — ঠিকাদার নিজের শেডে করে এক পাতার রিপোর্ট দেয়।",
  recall: {
    q: "পুরো কোডবেস ঘেঁটে বের করতে হবে অথ সিস্টেম কীভাবে কাজ করে। মূল সেশনের কনটেক্সট ভরতি না করে কীভাবে?",
    qen: "You need the whole codebase searched to find how the auth system works. How, without flooding the main session's context?",
    a: "সাব-এজেন্টে দাও। সে নিজের আলাদা কনটেক্সট উইন্ডোতে ঘাঁটে, শুধু সারমর্ম ফেরত পাঠায়। চেহারা দাও .claude/agents/*.md (প্রজেক্ট) বা ~/.claude/agents/ (সব প্রজেক্ট) ফাইলে — YAML frontmatter-এ নাম, বর্ণনা, টুল, মডেল।",
    aen: "Delegate to a subagent. It digs in its own separate context window and returns only the summary. Give it a face in .claude/agents/*.md (project) or ~/.claude/agents/ (all projects) — name, description, tools, model in YAML frontmatter."
  },
  story: `<p class="scene-setting">কারখানার পুরনো অংশ ভাঙার কাজ এল। হাসু মিস্ত্রি নিজে গেলেন ঘাঁটতে — ইট, ধুলো, মাকড়সার জাল। বিকেলে ফিরে দেখেন নিজের অফিসের বাহির খাতার গায়ে ধুলো, চায়ের গ্লাসে বালি, আর রাহেলা খাতুনের মুখ কালো। খাতা পড়া যায় না — পাতা তিনের নিয়মটা ধুলোর নিচে হারিয়ে গেছে। পরদিন তিনি ডাকলেন ঠিকাদার রফিককে — গলির ওপারের শেডওয়ালা লোক, নিজের টুলবক্স, নিজের লোক, নিজের হিসাবখাতা।</p>
<p class="scene-setting en">Demolition work arrived for the workshop's old wing. Hasu went to survey it himself — bricks, dust, spiderwebs. By evening he returned to find dust on his office ledger, sand in the tea glass, and Rahela Khatoon's face dark. The ledger could not be read — the page-three rule was lost under dust. Next day he called Rafiq the contractor — the man with the shed across the lane: his own toolbox, his own crew, his own account book.</p>

<div class="dialogue">রফিক সারাদিন ভাঙাঘরে কাটাল — ধুলো তার শেডে, তার খাতায়, তার ফুসফুসে। সন্ধ্যায় এক পাতার একটা কাগজ এনে দিল: দেয়াল তিনটা খালি, চার নম্বরটায় বিদ্যুতের তার, ইট ব্যবহারযোগ্য নয়, খরচ আনুমানিক এত। হাসু মিস্ত্রি চায়ের কাপ ধরে বললেন — এই তো কারখানা চালানো। আমার ঘর পরিষ্কার, আর কাজের খবর পুরো। রাহেলা খাতুন মাথা নাড়লেন — এবং নিজের খাতার গা মুছে এক লাইন লিখলেন: ভাঙার কাজ ঠিকাদারকে দাও।</div>
<div class="dialogue en">Rafiq spent the whole day in the ruin — the dust stayed in his shed, his book, his lungs. In the evening he brought a single page: three walls hollow, the fourth carries wiring, bricks unusable, cost roughly this much. Hasu lifted his tea and said — this is how a workshop runs. My room stays clean, and the job's news arrives whole. Rahela Khatoon nodded — and wiped her ledger's cover to write one line: demolition goes to the contractor.</div>

<p>Claude Code-এ এই ঠিকাদারই <strong>সাব-এজেন্ট</strong>। ডক বলছে: সাব-এজেন্ট চলে <strong>নিজস্ব কনটেক্সট উইন্ডোতে</strong>, নিজের সিস্টেম প্রম্পট, নির্দিষ্ট টুল-অনুমতি নিয়ে — কাজ শেষে ফেরত আসে শুধু সারমর্ম। ফরিদার নদীর ভাষায় (দরজা ৪): বড় মাল বোঝাই বড় নৌকায় — তোমার নৌকায় শুধু এক লাইনের খবর আসে। কখন ডাকবে? যখন একটা পাশের কাজ সার্চ-রেজাল্ট, লগ, ফাইলের ভেতরটা দিয়ে তোমার মূল কথাবার্তা ভাসিয়ে দেবে।</p>
<p class="en">In Claude Code, this contractor is the <strong>subagent</strong>. The docs say: subagents run <strong>in their own context window</strong>, with a custom system prompt, specific tool access, independent permissions — and return only a summary. In Farida's river language (Door 4): heavy cargo rides the large boat — only a one-line report crosses into yours. When to call one? Whenever a side task would flood your main conversation with search results, logs, or file contents you won't reference again.</p>

<div class="diagram">
<div class="diag-title">দুই ঘর, এক রিপোর্ট — Two Rooms, One Report</div>
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowRep" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#3dd6c4"/></marker>
</defs>
<rect class="node" x="15" y="30" width="200" height="60" rx="12"/><text class="lbl" x="115" y="52">তোমার অফিস</text><text class="lbl-sm" x="115" y="70">main context — পরিষ্কার</text>
<rect class="node-hot" x="345" y="30" width="200" height="60" rx="12"/><text class="lbl-hot" x="445" y="52">রফিকের শেড</text><text class="lbl-sm" x="445" y="70">subagent context — ধুলোমাখা</text>
<rect class="cell-cyan" x="215" y="120" width="130" height="34" rx="10"/><text class="lbl-cyan" x="280" y="137">১ পাতার রিপোর্ট</text>
<line x1="345" y1="60" x2="280" y2="120" stroke="#3dd6c4" stroke-width="2" fill="none" marker-end="url(#arrowRep)"/>
<line x1="280" y1="120" x2="212" y2="66" stroke="#3dd6c4" stroke-width="2" fill="none" marker-end="url(#arrowRep)"/>
<text class="lbl-sm" x="445" y="108">নিজের টুল · নিজের হিসাব · নিজের দায়</text>
</svg>
<div class="diag-cap">সাব-এজেন্ট ঘাঁটে নিজের ঘরে, ফেরত আসে সারমর্ম — মূল সেশন পরিষ্কার থাকে। Book ১২ (The Autonomous Mind) এই এজেন্টদের গভীরে চেনায়; এখানে তাদের কারখানায় নিয়োগ।</div>
</div>

<div class="code-block"># প্রজেক্টের জন্য: .claude/agents/code-improver.md
# সব প্রজেক্টের জন্য: ~/.claude/agents/code-improver.md
---
name: code-improver
description: Scans files and suggests improvements for readability,
  performance, and best practices. Use after writing or modifying code.
tools: Read, Grep, Glob
model: sonnet
---

You are a code improvement specialist. For each issue you find, explain
the problem, show the current code, and provide an improved version.

# মূল সেশন থেকে ডাকা — মুখে বললেই:
> অথ সিস্টেমটা কীভাবে টোকেন রিফ্রেশ করে দেখো,
  আর রিইউজ করার মতো OAuth ইউটিলিটি আছে কি না —
  সাব-এজেন্ট দিয়ে ঘাঁটো।

# একবারের সেশনেই ঠিকাদার (ফাইল ছাড়া):
claude --agents '{
  "code-reviewer": {
    "description": "Expert code reviewer. Use proactively after code changes.",
    "prompt": "You are a senior code reviewer...",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  }
}'</div>

<table class="kv-table">
<tr><th>নিয়োগের ধরন</th><th>জায়গা</th><th>টেকে কতদূর</th></tr>
<tr><td class="hl">প্রজেক্টের ঠিকাদার</td><td>.claude/agents/*.md</td><td>এই রিপো, দলের সবাই পায় (git-এ দাও)</td></tr>
<tr><td class="hl">বাড়ির ঠিকাদার</td><td>~/.claude/agents/*.md</td><td>তোমার মেশিনের সব প্রজেক্ট</td></tr>
<tr><td class="hl">এক দিনের ঠিকাদার</td><td>--agents ' {...JSON...} '</td><td>শুধু এই সেশন — বন্ধ হলেই শেষ</td></tr>
</table>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>রফিকের হিসাববই:</strong> ঠিকাদারদের <strong>শৃঙ্খলে সাজাও</strong> — একজনের ভাঙার রিপোর্ট পরের জনের কাজের অর্ডার। মুখের ভাষায়: "আগে code-reviewer দিয়ে পারফরম্যান্স সমস্যা বার করো, তারপর optimizer দিয়ে সেগুলো ঠিক করাও।" প্রতিটা ধাপ নিজের ঘরে কাজ করে, হাত বদলায় শুধু এক পাতার কাগজ।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Rafiq's account book:</strong> <strong>chain your contractors</strong> — one's demolition report becomes the next one's work order. In plain words: "Use code-reviewer to find performance issues, then use optimizer to fix them." Each link works in its own room; only the one-pager changes hands.</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সীমাটা জেনে রাখো:</strong> সাব-এজেন্ট চলে এক সেশনের ভেতরে। বহু স্বাধীন সেশন একসাথে চালিয়ে এক জায়গা থেকে দেখতে চাইলে ডকের ভাষায় সেটা আলাদা জিনিস — ব্যাকগ্রাউন্ড এজেন্ট, ক্রস-সেশন মেসেজিং, এজেন্ট টিম। ঠিকাদার আর ঠিকাদার-কোম্পানি এক নয়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Know the boundary:</strong> subagents live inside a single session. Running many independent sessions monitored from one place is a different thing in the docs — background agents, cross-session messaging, agent teams. A contractor is not a contracting company.</div></div>

<p class="verse">ওয়াকালার পুরনো হিসাব — তুমি কাজ দাও, প্রতিনিধি করে, দায় থাকে তোমার ঘাড়ে। "নিশ্চয়ই আল্লাহ তোমাদের আদেশ দেন আমানত তার হকদারকে ফিরিয়ে দিতে" (কুরআন ৪:৫৮) — আর সাব-এজেন্টের রিপোর্ট যাচাই করাও মালিকের আমানত। প্রতিনিধি বানালে মালিক হালকা হয়, দায়মুক্ত হয় না।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🎖️ ঘাঁটার কাজ সাব-এজেন্টে — সে নিজের ঘরে ধুলো খায়, তুমি পাও এক পাতার সত্য।<br>কারণ: মূল নদী পরিষ্কার থাকলে মাঝি দিগন্ত দেখতে পায়।</div></div>`,
  senior: {
    title: "ঠিকাদার নিয়োগের নিয়ম — Hiring Contractors",
    body: `<ul class="checklist">
<li>বর্ণনাটাই ভাগ্য লেখে: description-এ লিখো <strong>কখন</strong> ডাকতে হবে (after code changes, for refactors...) — Claude সেই মিলেই নিয়োগ দেয়।</li>
<li>টুল সংকীর্ণ রাখো — যে শুধু পড়বে তার হাতে লেখার কলম দিয়ো না (Read, Grep, Glob)।</li>
<li>বার বার একই ধরনের কাজে একই নির্দেশ দিচ্ছো? সেটা .claude/agents/ ফাইল হওয়ার সংবাদ।</li>
<li>বড় অনুসন্ধান মূল সেশনে নয় — ঠিকাদারে; শৃঙ্খল দরকার হলে পরপর সাজাও।</li>
</ul>`
  }
});

// ── DOOR 8 · রাতের প্রহরীর ঘণ্টা — The Night Watchman's Bell ──
doors.push({
  num: 8,
  icon: "🔔",
  color: "#fbbf24",
  name: "রাতের প্রহরীর ঘণ্টা",
  subtitle: "The Night Watchman's Bell",
  tech: "Hooks — Lifecycle Automation",
  spirit: "সালাতুল ওয়াক্ত — সময়ের সংকেতে শৃঙ্খলা",
  secret: "প্রতিটা কাজের আগে-পরে ঘণ্টা বাঁধো — নিয়ম ঘরে বসে জানা যায়, কাজের মাঠে নয়।",
  recall: {
    q: "Claude যখনই ফাইল লেখে/এডিট করে, তখনই Prettier ফরম্যাট চালাতে চাও — মনে করাতে না হয়ে কীভাবে?",
    qen: "You want Prettier to run every time Claude writes/edits a file — without reminding. How?",
    a: "PostToolUse হুক: settings.json-এ hooks.PostToolUse-এ matcher \"Edit|Write\" দিয়ে একটা command বাঁধো (jq দিয়ে file_path বের করে npx prettier --write)। হুক চলে তোমার প্রসেসে, কনটেক্সট খরচ করে না — এবং PreToolUse দিয়ে বিপজ্জনক কমান্ড আটকানো যায়।",
    aen: "A PostToolUse hook: in settings.json bind a command under hooks.PostToolUse with matcher \"Edit|Write\" (jq extracts file_path, pipes to npx prettier --write). Hooks run in your process, cost no context — and PreToolUse can block dangerous commands."
  },
  story: `<p class="scene-setting">মহল্লার রাতগুলো মাহমুদ চৌকিদারের ঘণ্টায় চলে। প্রহরের পর প্রহরে লাঠির সাথে ঘণ্টা বাজে — সবাই ঘুমেও জানে, ঠিক আছে, পাহারা জেগে। মাহমুদের একটাই নিয়ম: সে কারো কাজে ঢোকে না, সে শুধু জানায়। চোর প্রবেশ করার আগে যদি কেউ দরজা খুলছে ভুল করে, সে থামায় — বাকি সময় সে শুধু ঘণ্টা আর খাতা। ভোরে হাসু মিস্ত্রি খাতা পড়েন: রাত তিনটায় পশ্চিম দরজা খোলা ছিল, বন্ধ করে দিয়েছি; পাঁচটায় বিড়ি ধরিয়েছিল এক শাগরেদ — নেভানো হয়েছে।</p>
<p class="scene-setting en">The neighbourhood's nights run on watchman Mahmud's bell. Watch after watch the bell rings with his stick — even asleep, everyone knows: the guard is awake. Mahmud's single rule: he never enters anyone's work; he only signals. If someone is about to open the wrong door for a thief, he stops it — the rest of the night he is just bell and ledger. At dawn Hasu reads the ledger: at three the west door stood open, I closed it; at five an apprentice lit a cigarette — extinguished.</p>

<div class="dialogue">তুমি একদিন মাহমুদকে জিজ্ঞেস করলে — তুমি তো কিছুই বানাও না, তাহলে এত সম্মান কেন? সে হেসে বলল — আমি বানাই না, কিন্তু আমি না থাকলে যা বানানো হয়, তার অর্ধেক পুড়ে যায়। নিয়ম যদি মাঠের মাঝখানে মনে পড়ে, তবে সে নিয়ম নয় — দুর্ঘটনা। নিয়ম হলো সেই ঘণ্টা, যেটা কাজের ঠিক আগে বাজে, পরে খাতায় ওঠে।</div>
<div class="dialogue en">One day you ask Mahmud — you build nothing, why so much respect? He laughs — I build nothing, but without me half of what gets built burns. If a rule is remembered in the middle of the field, it is not a rule — it is an accident. A rule is that bell which rings just before the work, and enters the ledger after.</div>

<p>ডকুমেন্টেশনের ভাষায় এই ঘণ্টাই <strong>হুক</strong> — লুপের নির্দিষ্ট মুহূর্তে বাজা কলব্যাক: টুল চালানোর আগে, পরে, প্রম্পট জমা হলে, এজেন্ট থামলে, সাব-এজেন্ট শুরু-শেষে, কম্প্যাকশনের আগে। সবচেয়ে বড় কথা — <strong>হুক চলে তোমার প্রসেসে, এজেন্টের কনটেক্সটে নয়</strong> (মাহমুদ ঘুমন্ত কারো ঘরে ঢুকে কথা বলে না), আর PreToolUse হুক চাইলে পুরো কল আটকে দিতে পারে — মাঠে ঢোকার আগেই দরজা বন্ধ।</p>
<p class="en">In the docs' language this bell is a <strong>hook</strong> — a callback ringing at fixed points of the loop: before a tool runs, after it returns, when a prompt is submitted, when the agent stops, when subagents start and finish, before compaction. The deepest point — <strong>hooks run in your process, not the agent's context</strong> (Mahmud never enters a sleeping man's room to talk), and a PreToolUse hook can reject a call outright — the door closed before the field is entered.</p>

<div class="code-block">// settings.json — মাহমুদের ঘণ্টার বাঁধন
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [
        { "type": "command",
          "command": "~/.claude/hooks/check-bash.sh" }
      ]
    }],
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{
        "type": "command",
        "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write"
      }]
    }]
  }
}

# কী বাজে কখন — হুকের প্রহরগুলো:
# PreToolUse        → টুল চালানোর আগে (আটকাতেও পারে)
# PostToolUse       → টুল ফিরে আসার পরে
# UserPromptSubmit  → তুমি প্রম্পট পাঠালে
# Stop              → এজেন্ট কাজ শেষ করলে
# SubagentStart/Stop → ঠিকাদার (দরজা ৭) ছাড়লে-ফিরলে
# PreCompact        → নদী সংকুচিত হওয়ার আগে</div>

<div class="diagram">
<div class="diag-title">এক ঘর, দুই ঘণ্টা — One Tool, Two Bells</div>
<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowBell" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker>
</defs>
<rect class="node-leaf" x="15" y="55" width="130" height="40" rx="10"/><text class="lbl-leaf" x="80" y="75">Claude টুল চাইল</text>
<rect class="node-hot" x="215" y="15" width="140" height="36" rx="10"/><text class="lbl-hot" x="285" y="33">PreToolUse ঘণ্টা</text>
<rect class="node" x="215" y="95" width="140" height="36" rx="10"/><text class="lbl" x="285" y="113">PostToolUse ঘণ্টা</text>
<rect class="node-cyan" x="415" y="55" width="130" height="40" rx="10"/><text class="lbl-cyan" x="480" y="75">টুল চলল</text>
<line x1="145.0" y1="65.0" x2="215.0" y2="35.9" stroke="#ff6b35" stroke-width="2" fill="none" marker-end="url(#arrowBell)"/>
<line x1="145.0" y1="85.0" x2="215.0" y2="109.8" stroke="#fbbf24" stroke-width="2" fill="none" marker-end="url(#arrowBell)"/>
<line x1="355.0" y1="38.0" x2="415.0" y2="67.5" stroke="#fbbf24" stroke-width="2" fill="none" marker-end="url(#arrowBell)"/>
<line x1="355.0" y1="108.0" x2="415.0" y2="82.9" stroke="#fbbf24" stroke-width="2" fill="none" marker-end="url(#arrowBell)"/>
<text class="lbl-sm" x="285" y="62">মঞ্জুর → চলবে · নাকচ → থামবে</text>
</svg>
<div class="diag-cap">প্রহরের ঘণ্টা কনটেক্সটে নয়, তোমার প্রসেসে বাজে — তাই নদীও পরিষ্কার, নিয়মও অটুট।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>মাহমুদের সতর্কতা:</strong> হুকের স্ক্রিপ্ট নিজেই একটা কাজ — ভাঙা স্ক্রিপ্ট মানে প্রতিটা এডিটের পরে ভাঙা ঘণ্টা। প্রথমে টার্মিনালে হাতে চালিয়ে দেখো, তারপর বাঁধো। আর টাইমআউট দাও — একটা আটকে থাকা হুক পুরো রাতের পাহারা আটকে দেয়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>মাহমুদের সতর্কতা (EN):</strong> a hook script is itself a job — a broken script means a broken bell after every edit. Run it by hand in the terminal first, then bind it. And set timeouts — one stuck hook jams the whole night's watch.</div></div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🔔 কাজের আগে-পরে ঘণ্টা: PreToolUse আটকায়, PostToolUse সাজায় — নিয়ম মাঠে নয়, বাঁধনে।<br>কারণ: মনে রাখার ভার মানুষের ঘাড় থেকে নামলে নিয়ম অটুট থাকে।</div></div>`,
  senior: {
    title: "ঘণ্টা বাঁধার নিয়ম — Binding Bells",
    body: `<ul class="checklist">
<li>ফরম্যাটিং (Prettier/Black) → <strong>PostToolUse</strong> matcher Edit|Write।</li>
<li>বিপজ্জনক কমান্ড আটকানো → <strong>PreToolUse</strong> matcher Bash — deny সিদ্ধান্ত ফেরত দিলে কল চলেই না।</li>
<li>প্রম্পটে প্রসঙ্গ ঢোকানো → <strong>UserPromptSubmit</strong>।</li>
<li>কাজ শেষে যাচাই/লগ → <strong>Stop</strong>; কম্প্যাকশনের আগে ট্রান্সক্রিপ্ট সরাতে <strong>PreCompact</strong>।</li>
<li>প্লাগইন থেকেও ঘণ্টা আসে (hooks.json) — দরজা ৯-এর বাজারে দেখবে।</li>
</ul>`
  }
});

// ── DOOR 9 · উত্তরাধিকারের আংটি — The Heirloom Ring ──
doors.push({
  num: 9,
  icon: "💍",
  color: "#3dd6c4",
  name: "উত্তরাধিকারের আংটি",
  subtitle: "The Heirloom Ring",
  tech: "MCP · Skills · Plugins",
  spirit: "সিলসিলা — হাত বদলে হাতে চলে স্রোত",
  secret: "টুল কিনো না, সংযোগ করো — আংটির মতো MCP; আর কারিগরের সেরা অভ্যাসগুলো পুঁথি করে নাও — সেটাই স্কিল।",
  recall: {
    q: "Claude-কে Notion, GitHub, Postgres-এর মতো বাইরের জগতে হাত দিতে দিতে চাও। কোন কনফিগ ফাইলে, কী লিখবে? আর বার বার ব্যবহৃত নির্দেশাবলি কীভাবে চিরস্থায়ী করবে?",
    qen: "You want Claude to reach Notion, GitHub, Postgres. Which config file, what do you write? And how do you make repeated instructions permanent?",
    a: "প্রজেক্টের রুটে .mcp.json — mcpServers-এ সার্ভারের command/args/env লিখো (টোকেন \\${VAR} আকারে, ফাইলে সরাসরি নয়); claude mcp add দিয়েও যায়। আর পুনরাবৃত্ত নির্দেশ → .claude/skills/<নাম>/SKILL.md — YAML frontmatter-এ description দাও, Claude প্রয়োজনে নিজেই খুলে পড়ে।",
    aen: ".mcp.json at project root — under mcpServers list each server's command/args/env (tokens as \\${VAR}, never inline); or use claude mcp add. Repeated instructions → .claude/skills/<name>/SKILL.md — description in YAML frontmatter; Claude loads it on demand."
  },
  story: `<p class="scene-setting">আয়েশা গলির গয়নার দোকান চালায় — নিজের হাতে গড়ে না, সংযোগে বিশ্বাসী। তার দেয়ালে একটা আংটি ঝুলছে, পাশে ছোট্ট তামার পাত: দাদির বিয়ের আংটি — যে পরলে তার সাথে আসে দাদির সম্পূর্ণ সিলসিলা: তার দাদির কথা, তার সব হিসাব, তার খরিদ্দারের নাম। কেউ জিজ্ঞেস করে — আংটিটা সোনার নয় তো? আয়েশা হাসে — সোনা কারখানায় পোড়ে, সিলসিলা কারখানায় পোড়ে না।</p>
<p class="scene-setting en">Ayesha runs the lane's jewellery shop — she crafts nothing herself; she believes in connections. On her wall hangs a ring with a small copper plaque: grandmother's wedding ring — whoever wears it inherits the grandmother's whole chain: her grandmother's story, all her accounts, her customers' names. Someone asks — the ring isn't gold, is it? Ayesha smiles — gold burns in a fire; a chain of connection doesn't burn in any fire.</p>

<div class="dialogue">তুমি আয়েশার দোকানে হাজির — বলো, আমার কারখানার শাগরেদের Notion-এর খাতা, GitHub-এর গুদাম, আর ডাটাবেসের পাথর-খনি দরকার। আয়েশা তিনটা জিনিস টেবিলে রাখল। প্রথমে আংটি — এটা MCP: বাইরের প্রতিটা জগতের সাথে খোলা প্রোটোকলের সংযোগ; পরলেই শাগরেদ ওই জগতের হাত ধরে ঢোকে। তারপর একটা পুঁথি — এটা স্কিল: তোমার কারিগরি অভ্যাস, লেখা আকারে, যেটা দরকারের মুহূর্তে খুলে পড়া হয়। আর শেষে একটা গাঢ় কাঠের বাক্স — এটা প্লাগইন: আংটি-পুঁথি-ঘণ্টা (দরজা ৮)-ঠিকাদারের চেহারা (দরজা ৭) সব একসাথে, বাজার থেকে নামিয়ে এক লাইনে চালু।</div>
<div class="dialogue en">You arrive at Ayesha's counter — my workshop's apprentice needs the Notion ledger, the GitHub warehouse, and the database quarry. Ayesha lays three things on the table. First the ring — this is MCP: an open-protocol connection to each outer world; wearing it, the apprentice holds that world's hand and enters. Then a chapbook — this is a Skill: your craft habits, written down, opened at the moment of need. And last a dark wooden box — this is a Plugin: ring + chapbook + bells (Door 8) + contractor faces (Door 7) all together, downloaded from a marketplace and enabled in one line.</div>

<p>ডকের হিসাবে তিনটে জিনিস আলাদা: <strong>MCP</strong> দেয় নতুন টুল (Slack, Jira, ডাটাবেস, ব্রাউজার — শত শত সংযোগ), <strong>Skills</strong> দেয় নতুন জ্ঞান-পদ্ধতি (দরকারের সময় লোড হয়, প্রতিটা সেশন মোটা করে না), <strong>Plugins</strong> হলো প্যাকেজ — স্কিল, ঠিকাদার, ঘণ্টা, MCP, থিম সব এক বাক্সে, মার্কেটপ্লেস থেকে। রাহেলার খাতা (দরজা ২) প্রতিটা সেশনে যায়; আয়েশার পুঁথি শুধু দরকারের মুহূর্তে খোলে — এই তফাতটাই স্কিলের আসল শক্তি।</p>
<p class="en">In the docs' account these three are distinct: <strong>MCP</strong> grants new tools (Slack, Jira, databases, browsers — hundreds of integrations); <strong>Skills</strong> grant new know-how, loaded on demand without fattening every session; <strong>Plugins</strong> are the package — skills, agents, hooks, MCP servers, themes in one box, from a marketplace. Rahela's ledger (Door 2) travels every session; Ayesha's chapbook opens only at the moment of need — that difference is a skill's real power.</p>

<div class="code-block"># ① আংটি — প্রজেক্টের সবার জন্য MCP সংযোগ:
#    প্রজেক্ট রুটে .mcp.json (রুটে, .claude/ ভেতরে নয়)
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": { "NOTION_TOKEN": "\${NOTION_TOKEN}" }
    }
  }
}

#    শুধু নিজের জন্য হলে:
claude mcp add --scope user <নাম> -- npx -y @modelcontextprotocol/server-filesystem ~/projects

# ② পুঁথি — .claude/skills/pdf-processor/SKILL.md
---
description: Extract text and tables from PDF files. Use when
  processing invoices or scanned documents.
---
পদ্ধতি এখানে লেখো — ধাপে ধাপে, যেভাবে তুমি নিজে করো।

# ③ বাক্স — মার্কেটপ্লেস থেকে প্লাগইন:
/plugin install skill-creator@claude-plugins-official</div>

<table class="kv-table">
<tr><th>দরকার</th><th>হাতিয়ার</th><th>জায়গা</th></tr>
<tr><td class="hl">বাইরের জগতে হাত (Notion, DB, ব্রাউজার)</td><td>MCP সার্ভার</td><td>.mcp.json (দল) · ~/.claude.json (নিজে) · /mcp</td></tr>
<tr><td class="hl">পুনরাবৃত্ত কারিগরি অভ্যাস</td><td>Skill (SKILL.md)</td><td>.claude/skills/ (প্রজেক্ট) · ~/.claude/skills/ (সব)</td></tr>
<tr><td class="hl">সব একসাথে, এক লাইনে</td><td>Plugin</td><td>/plugin marketplace → /plugin install</td></tr>
</table>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>আংটির সতর্কতা:</strong> প্রতিটা সংযোগ একটা খোলা দরজা। টোকেন কখনো ফাইলে সরাসরি লিখো না — \${ENV_VAR} আকারে দাও, যেন শেল থেকে উঠে আসে; আর কোন সার্ভার কোন টুল দেয়, দরজা ৬-এর তালার খাতায় হিসাব রাখো। সংযোগ যত বাড়ে, হিসাব তত জরুরি।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The ring's caution:</strong> every connection is an open door. Never write tokens inline in the file — give them as \${ENV_VAR} so they rise from the shell; and keep account, in Door 6's keyring, of which server grants which tools. The more connections, the more the account matters.</div></div>

<p class="verse">সিলসিলার শিক্ষা — মূল্য জিনিসে নয়, সংযোগে। জ্ঞানের নবীদের পরম্পরা এভাবেই হাত থেকে হাতে এসেছে: এক প্রজন্ম শেখায়, পরের প্রজন্ম বহন করে, কেউ বিচ্ছিন্ন হয় না। "নিশ্চয়ই আল্লাহ তোমাদের আদেশ দেন আমানত তার হকদারকে ফিরিয়ে দিতে" (কুরআন ৪:৫৮) — প্রতিটা সংযোগ একটা আমানত, প্রতিটা পুঁথি একটা আমানত।</p>


<div class="diagram">
<div class="diag-title">তিন উৎসের নকশা — MCP vs Skills vs Plugins</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d8" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<circle cx="280" cy="90" r="40" class="ring"/><text class="lbl" x="280" y="86" text-anchor="middle">Claude</text><text class="lbl-sm" x="280" y="102" text-anchor="middle">সেশন</text>
<rect class="node-cyan" x="15" y="150" width="160" height="40" rx="9"/><text class="lbl-cyan" x="95" y="168">MCP সার্ভার</text><text class="lbl-sm" x="95" y="183">নতুন হাত (tool)</text>
<rect class="node-leaf" x="200" y="150" width="160" height="40" rx="9"/><text class="lbl-leaf" x="280" y="168">Skills</text><text class="lbl-sm" x="280" y="183">নতুন বিদ্যা (জ্ঞান+প্রসিদ্ধি)</text>
<rect class="node-purple" x="385" y="150" width="160" height="40" rx="9"/><text class="lbl" x="465" y="168">Plugins</text><text class="lbl-sm" x="465" y="183">পুরো দোকান (সবই এক প্যাকেটে)</text>
<line x1="243" y1="106" x2="110" y2="148" stroke="#f97316" stroke-width="1.6" fill="none" marker-end="url(#ar59d8)"/>
<line x1="280" y1="130" x2="280" y2="148" stroke="#f97316" stroke-width="1.6" fill="none" marker-end="url(#ar59d8)"/>
<line x1="317" y1="106" x2="450" y2="148" stroke="#f97316" stroke-width="1.6" fill="none" marker-end="url(#ar59d8)"/>
<rect class="cell" x="15" y="10" width="530" height="26" rx="8"/><text class="lbl-sm" x="280" y="27">হাত চাই? MCP · বিদ্যা চাই? Skill · হাত+বিদ্যা+আদেশ+ঘর সব একসাথে চাই? Plugin</text>
<rect class="cell" x="15" y="44" width="530" height="26" rx="8"/><text class="lbl-sm" x="280" y="61">সব ক্ষেত্রেই চুক্তি এক: তালিকা .mcp.json / skills/ / plugin.json — ফাইল দিয়ে ঘোষণা, মুখে নয়</text>
</svg>
<div class="diag-cap">এক শরীরে তিন ধরনের সম্প্রসারণ — কোনটা কখন: আংটির ঠিকাদার (দরজা ৯-এর মূল পাঠ) এই নকশাতেই বসে।</div>
</div>

<div class="code-block"># তিন উৎসের হাতে-হাতে ফাইল-গঠন:
myproject/
├── .mcp.json                  # MCP: ঠিকাদারের তালিকা
│   { "mcpServers": {
│       "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"] }
│   }}
├── .claude/
│   ├── skills/
│   │   └── deploy-lp/
│   │       └── SKILL.md       # Skill: বিদ্যার বই — কখন-কীভাবে
│   │           (# frontmatter: name, description; শরীরে ধাপ)
│   └── settings.json          # অনুমতির খাতা (দরজা ৬)
└── .claude-plugin/
    └── plugin.json            # Plugin: দোকানের জন্মনামা
                                    # { "name": "lp-tools" }

# সেশনে দেখো কী কী হাত এসেছে:
claude
> /mcp          # সার্ভার-তালিকা + তাদের tool
> আমার কী কী skill আছে?
# সে নিজের skills/ ফোল্ডার পড়ে বলে — SKILL.md-র description-ই তার স্মৃতি</div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">💍 বাইরের জগত আংটি দিয়ে (MCP), কারিগরি স্মৃতি পুঁথিতে (Skills), সব মিলিয়ে বাক্সে (Plugins)।<br>কারণ: বিচ্ছিন্ন কারিগর ছোট থাকে, সংযুক্ত কারিগর দিগন্ত পায়।</div></div>`,
  senior: {
    title: "সংযোগ সাজানো — Arranging Connections",
    team: false,
    body: `<ul class="checklist">
<li>দলের সংযোগ .mcp.json-এ (git-এ), নিজের সংযোগ claude mcp add --scope user — দুই ভাণ্ডার গুলিয়ে ফেলো না।</li>
<li>একই নির্দেশ তৃতীয় বার দিচ্ছো? থামো — সেটা SKILL.md হওয়ার সময়। Description-এ লিখো কখন খুলবে।</li>
<li>প্লাগইন ইনস্টলের পর ইনস্টল-সারমর্মে রিলোড বললে <strong>/reload-plugins</strong> চালাও।</li>
<li>টুল বেশি হলে ডকের পথ: tool search — স্কিমাগুলো জমা থাকে, দরকারে লোড হয় (নদীর হিসাব, দরজা ৪)।</li>
<li>বাজার না পেলে: /plugin marketplace add anthropics/claude-plugins-official</li>
</ul>`
  }
});

// ── DOOR 10 · মরিয়মের রেসিপি-বাক্স — Maryam's Recipe Box ──
doors.push({
  num: 10,
  icon: "📔",
  color: "#fbbf24",
  name: "মরিয়মের রেসিপি-বাক্স",
  subtitle: "Maryam's Recipe Box",
  tech: "SKILL.md · progressive disclosure · invocation control · dynamic context",
  spirit: "ওয়াক্ত-ইলম — দরকারের ঘড়িতে ইলম তলব",
  secret: "CLAUDE.md সবসময় ঘরে থাকে; স্কিল তাকে থাকে — রান্নার সময়ই খাতা নামে: SKILL.md-র বিবরণ সবসময় লোড হয়, পুরো পাতা নামে শুধু কাজের মুহূর্তে — এজন্যই বিশ পৃষ্ঠার রেফারেন্সও প্রায় বিনামূল্যে, যতক্ষণ না ডাক পড়ে।",
  recall: {
    q: "তুমি প্রতি সপ্তাহে একই ডিপ্লয়-নির্দেশনা চ্যাটে পেস্ট করো। একে স্কিল বানাতে চাও যেন শুধু /deploy লিখলেই চলে, Claude নিজে থেকে না নেয়। ফাইলটা কোথায়, ভেতরে কী, আর নিজে-না-নেওয়ার চাবিটা কী?",
    qen: "You paste the same deploy instructions weekly. Make it a skill that runs only on /deploy, never auto-invoked. Where does the file live, what is inside, and which key prevents auto-invocation?",
    a: "ফাইল: .claude/skills/deploy/SKILL.md (প্রজেক্ট — দলের সবাই পায়; ~/.claude/skills/ হলে শুধু তুমি, সব প্রজেক্টে)। ভেতরে দুই স্তর: --- এর ভেতর frontmatter (description — কখন কাজে লাগে, এক লাইনে), তারপর markdown শরীর — আসল নির্দেশনা। নিজে-না-নেওয়ার চাবি: disable-model-invocation: true — তখন তালিকাতেও নাম ওঠে না, শুধু তোমার /deploy-ই দরজা খোলে। বিপরীত চাইলে description-ই যথেষ্ট: মানানসই প্রশ্ন এলে Claude নিজেই ডাকে। বোনাস: শরীরে !\`git diff HEAD\` লাইন দিলে স্কিল খোলার মুহূর্তে কমান্ডের তাজা আউটপুট ভেতরে বসে যায় — নির্দেশ আসে তাজা তথ্যসহ।",
    aen: "File: .claude/skills/deploy/SKILL.md (project — the whole team gets it; ~/.claude/skills/ for personal, all projects). Inside, two layers: frontmatter between --- (description — when it helps, one line), then the markdown body — the actual instructions. The no-auto key: disable-model-invocation: true — then it never even lists, only your /deploy opens the door. For auto-invocation, the description alone suffices: matching questions make Claude call it. Bonus: a !\`git diff HEAD\` line in the body inlines fresh command output the moment the skill opens — instructions arrive with live data."
  },
  story: `<p class="scene-setting">মরিয়মের রান্নাঘরে ঢুকলেই দেয়ালে টাঙানো কাঠের রেসিপি-বাক্স — শ'খানেক কার্ড, প্রতিটার গায়ে এক লাইনে নাম: কাচ্চি, রোস্ট, পায়েস। মরিয়মের নিয়ম বিখ্যাত: বাক্সের তালিকা মুখস্থ থাকে, পাতা নামে শুধু রান্নার দিন। অর্থাৎ কাচ্চির কার্ডের তিন পৃষ্ঠার হিসাব মাথায় বইতে হয় না — গায়ের ওই এক লাইনই বলে দেয় কখন কোনটা লাগবে; বিরিয়ানির দিন বিরিয়ানির পাতা নামে, বাকি আটান্নটা তাকেই থাকে। পাশের বাড়ির নববধূ সব রেসিপি এক খাতায় বেঁধে রান্নাঘরের টেবিলে রাখে — প্রতিদিন সব পাতা সব কাজে সামলাতে হয়, আর খাতাটা ভারী হয়ে টেবিলের অর্ধেক জায়গা খেয়ে ফেলে। মরিয়মের আরেকটা কৌশল আছে: কিছু কার্ডের গায়ে নাম লেখাই নেই — দরকারের সময় সে-ই খুঁজে বের করে; এগুলো তাঁর গোপন রেসিপি, যা সে নিজে না চাইলে কেউ জানেও না। আর কাচ্চির কার্ডের প্রথম লাইনে লেখা: ধান ভিজানোর তাজা হিসাব !বাজার-খাতা দেখে নাও — পাতা নামার মুহূর্তে আজকের বাজারদর বসে যায় রেসিপির ভেতরেই।</p>
<p class="scene-setting en">Enter Maryam's kitchen and you see the wooden recipe box on the wall — a hundred cards, each named in one line: kacchi, roast, payesh. Her famous rule: the box's index is memorized, pages come down only on cooking day. You never carry kacchi's three pages of arithmetic in your head — the one line on the card says when it applies; on biryani day the biryani page descends, the other fifty-eight stay shelved. The neighbour's new bride binds every recipe into one ledger kept on the kitchen table — every day all pages crowd every task, and the heavy ledger eats half the table. Maryam has another trick: some cards bear no name at all — she pulls them herself when needed; her secret recipes, unknown unless she offers. And kacchi's card begins: for today's rice-soak count !check the market ledger — the moment the page comes down, today's market prices slip inside the recipe.</p>

<div class="code-block"># প্রথম স্কিল — তিন মিনিটে:
mkdir -p .claude/skills/deploy
cat > .claude/skills/deploy/SKILL.md << 'EOF'
---
description: লেজারপাইলট ডিপ্লয় — চেকলিস্টসহ। Use when
  the user says deploy, ship, or রিলিজ.
disable-model-invocation: true
---

## আজকের অবস্থা
!\`git log --oneline -3\`

## ধাপ
১. টেস্ট: npm test --silent
২. বিল্ড: npm run build
৩. ডিপ্লয়-স্ক্রিপ্ট: ./scripts/deploy.sh
৪. ফের যাচাই: curl -sf https://app.example/health
ব্যর্থ হলে থেমে যাও, কারণ বলো — অনুমানে এগোবে না।
EOF
claude
> /deploy
#   !\`...\` লাইনটা স্কিল খোলার মুহূর্তে চলে — নির্দেশ
#   আসে git log-এর তাজা আউটপুটসহ

# কোথায় রাখলে কে পাবে (location স্কেল):
~/.claude/skills/x/SKILL.md     # ব্যক্তিগত — তোমার সব প্রজেক্ট
.claude/skills/x/SKILL.md       # প্রজেক্ট — git-এ দিলে পুরো দল
<sub>/.claude/skills/x/SKILL.md # নেস্টেড — মনোরিপোর সেই সাব-ডিরে
plugin/skills/x/SKILL.md        # প্লাগইনভুক্ত — /plugin-name:x
# পুরোনো .claude/commands/deploy.md-ও এখন /deploy-ই — commands স্কিলে মিশেছে

# কে ডাকবে — তিন মোড:
# ① বর্ণনা-মিলে স্বয়ংক্রিয়: description-ই যথেষ্ট ("Use when ...")
# ② শুধু তুমি: disable-model-invocation: true → নাম-তালিকাতেও নেই
# ③ আলাদা ঘরে: context: fork → subagent-এ চলে, ফল ফিরে আসে

# বান্ডিল-স্কিল (রেডিমেড, চালুই থাকে):
/run       # অ্যাপ চালিয়ে দেখাও
/verify    # টেস্টে ভরসা নয় — অ্যাপ বানিয়ে চালিয়ে যাচাই
/code-review · /debug · /loop · /batch · /doctor
# বন্ধ করতে: settings-এ disableBundledSkills

# স্বাস্থ্য-পরীক্ষা:
claude plugin validate .claude/skills   # frontmatter ঠিক কি না
/context        # Skills-সারি — তালিকার টোকেন-দাম
/doctor         # তালিকার খরচ + কারা ভারী</div>

<table class="kv-table">
<tr><th>স্তর</th><th>কখন লোড</th><th>খরচ</th></tr>
<tr><td class="hl">নাম + description</td><td>সেশন-শুরুতেই তালিকায়</td><td>সবসময় (বাজেট ১% জানালার)</td></tr>
<tr><td class="hl">SKILL.md শরীর</td><td>ডাক পড়লে — /name বা মানানসই প্রশ্নে</td><td>ব্যবহারের আগে শূন্য</td></tr>
<tr><td class="hl">সহায়ক ফাইল (ফোল্ডারে)</td><td>শরীর নির্দেশ করলে</td><td>ধাপে ধাপে — progressive disclosure</td></tr>
</table>

<div class="diagram">
<div class="diag-title">রেসিপি-বাক্সের স্তর — The Recipe-Box Layers</div>
<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d10" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="55" width="160" height="46" rx="10"/><text class="lbl" x="95" y="73">তাক — তালিকা</text><text class="lbl-sm" x="95" y="90">নাম+বর্ণনা (সবসময়)</text>
<rect class="node-cyan" x="205" y="55" width="160" height="46" rx="10"/><text class="lbl-cyan" x="285" y="73">পাতা — শরীর</text><text class="lbl-sm" x="285" y="90">ডাক পড়লেই SKILL.md</text>
<rect class="node-leaf" x="395" y="55" width="150" height="46" rx="10"/><text class="lbl-leaf" x="470" y="73">খাতা — সহায়ক</text><text class="lbl-sm" x="470" y="90">reference.md, scripts/</text>
<line x1="175.0" y1="78.0" x2="205.0" y2="78.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d10)"/>
<line x1="365.0" y1="78.0" x2="395.0" y2="78.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d10)"/>
<text class="lbl-sm" x="188" y="68">/deploy</text>
<text class="lbl-sm" x="378" y="68">শরীর বললে</text>
<rect class="cell-hot" x="15" y="120" width="530" height="44" rx="8"/>
<text class="lbl-sm" x="280" y="136">disable-model-invocation: true → তাক-তালিকাতেও নেই — দরজা শুধু তোমার হাতে</text>
<text class="lbl-sm" x="280" y="154">!\`কমান্ড\` → পাতা নামার মুহূর্তে তাজা আউটপুট ভেতরে — রেসিপি আসে বাজারদরসহ</text>
</svg>
<div class="diag-cap">তাক → পাতা → খাতা — প্রতিটা স্তর আগেরটার চেয়ে ভারী; ডাক পড়লে তবেই নিচে নামে।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>রেসিপি-বাক্সের সতর্কতা:</strong> তালিকার দাম আছে — জানালার ~১% বাজেট; description লম্বা হলে ছোট হয়ে যায় (ক্যাপ ১৫৩৬ অক্ষর), কম-ব্যবহৃত স্কিলের বর্ণনা আগে কাটে। বর্ণনা লিখো কাব্য নয় — "Use when ..." ধাঁচে, মূল শব্দ আগে। বেশি স্কিল জমলে /doctor দেখাবে কারা ভারী; skillOverrides-এ "name-only" দিয়ে হালকা করো। আর synced নামের ফোল্ডার নিষিদ্ধ — সে claude.ai-সিঙ্কের রাস্তা।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The recipe-box caution:</strong> the listing costs — ~1% of the window; long descriptions shrink (cap 1,536 chars), least-used ones get cut first. Write descriptions as "Use when ...", keywords first, not poetry. Too many skills? /doctor shows the heavy ones; set "name-only" in skillOverrides to lighten. And never name a folder synced — that path belongs to claude.ai sync.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ টেবিলের মোটা খাতা</div>সব নির্দেশনা CLAUDE.md-এ চাপা · প্রতি সেশনে সবই লোড, চাই বা না চাই · একই পেস্ট রোজ · বর্ণনা ছাড়া স্কিল — Claude জানেই না কখন নেবে</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ মরিয়মের বাক্স</div>ঘন ঘন পেস্ট → SKILL.md · তালিকায় নাম, পাতা নামে কাজের দিন · গোপন রেসিপি = disable-model-invocation · !কমান্ড-এ তাজা উপাত্ত</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১%</div><div class="sc-label">জানালার — তালিকার বাজেট</div></div>
<div class="stat-card"><div class="sc-num">১৫৩৬</div><div class="sc-label">অক্ষর-ক্যাপ প্রতি বর্ণনা</div></div>
<div class="stat-card"><div class="sc-num">!\`cmd\`</div><div class="sc-label">খোলার-মুহূর্তে তাজা ইনজেকশন</div></div>
<div class="stat-card"><div class="sc-num">fork</div><div class="sc-label">স্কিল আলাদা ঘরে (subagent)</div></div>
</div>

<p class="verse">ওয়াক্ত-ইলম: ইলম চাওয়া ফরজ — কিন্তু সব ইলম সব সময় নয়; ফকীহরা বলেন প্রত্যেক জ্ঞান তার ওয়াক্তে ফরজ হয় (ওয়াক্তে যা লাগবে না শেখা তার উপরে সওয়াব নয়, বিলাস)। মরিয়মের বাক্সও তাই: তালিকা মুখস্থ — দায়িত্ব; পাতা ওয়াক্তে — হিকমাহ; আর অপ্রয়োজনের ভার বহন নয়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📔 রোজের পেস্ট আজই SKILL.md; নাম+বর্ণনা তাকে, পাতা নামে কাজের দিন, তাজা উপাত্ত !কমান্ডে।<br>কারণ: যে খাতা সব পাতা মুখস্থ রাখে, তার রান্নাঘরে জায়গা থাকে না।</div></div>`,
  senior: {
    title: "রেসিপি-বাক্সের খাতা — The Recipe-Box Ledger",
    body: `<ul class="checklist">
<li>আজই একটা বানাও: <strong>.claude/skills/deploy/SKILL.md</strong> — তিন মিনিটের কাজ, প্রতি সপ্তাহের পেস্ট রেহাই।</li>
<li>বর্ণনা লেখো <strong>Use when …</strong> ধাঁচে — মূল শব্দ আগে, ১৫৩৬-অক্ষরের নিচে।</li>
<li>শুধু-নিজের হলে <strong>disable-model-invocation: true</strong>; ভারী রেফারেন্স সহায়ক-ফাইলে, শরীর ছোট।</li>
<li>তাজা তথ্য লাগলে শরীরে <strong>!\`কমান্ড\`</strong> — খোলার মুহূর্তে ইনজেক্ট হবে।</li>
<li>মাসে একবার <strong>/doctor</strong> + <strong>/context</strong> — কারা ভারী, তালিকার দাম কত।</li>
<li>বান্ডিল-স্কিল চেনো: <strong>/verify · /run · /code-review</strong> — চাকরির আগে নিজের বাক্সে আগে দেখো।</li>
</ul>`
  }
});

// ── DOOR 11 · সিংহাসন — The Throne ──
doors.push({
  num: 11,
  icon: "👑",
  color: "#fbbf24",
  name: "সিংহাসন",
  subtitle: "The Throne — Synthesis",
  tech: "The Master's Workflow — All Ten as One",
  spirit: "খিলাফত — মালিক নয়, কর্মচারী-অভিভাবক",
  secret: "দশ দরজায় যা শিখলে তার সারমর্ম: প্রসঙ্গ দাও, আস্থা মাপো, ফল যাচাই করো — এই তিন স্তম্ভেই দাঁড়িয়ে আছে কারখানা।",
  recall: {
    q: "দশটি দরজার সারমর্ম এক বাক্যে — মাস্টারি আসলে কী?",
    qen: "The essence of all ten doors in one sentence — what is mastery, really?",
    a: "Claude Code-এর মাস্টারি মানে টাইপ করা শেখা নয় — কারখানা ডিজাইন করা: প্রসঙ্গ (CLAUDE.md, /clear, সাব-এজেন্ট), আস্থার মাপ (permissions, modes, ঘেরা পরিবেশ), আর যাচাই (হুক, রিভিউ, লগ)। এই তিনের ঘুরে সব দরজা।",
    aen: "Mastery of Claude Code is not learning to type — it is designing the workshop: context (CLAUDE.md, /clear, subagents), measured trust (permissions, modes, fenced environments), and verification (hooks, review, logs). Every door circles these three."
  },
  story: `<p class="scene-setting">দশ বছর পরের এক শীতের সকাল। তুমি আর শাগরেদ নও — হাসু মিস্ত্রি তোমাকে ডাকলেন কারখানার ভেতরের ঘরে, যেখানে একটাই আসন, আর দেয়ালে নয়টা ছবি। হাসু বললেন — আজ থেকে এই আসন তোমার, কারখানার প্রথম সিংহাসন। কিন্তু বসার আগে নয়টা নাম একবার বলে যাও, যারা তোমাকে এনেছে।</p>
<p class="scene-setting en">A winter morning, ten years later. You are no apprentice now — Hasu calls you into the inner room, where a single seat stands and nine pictures hang on the wall. Hasu says — from today this seat is yours — the workshop's first throne. But before you sit, name once the nine who brought you here.</p>

<div class="dialogue">তুমি বললে — হাসু মিস্ত্রি শিখিয়েছেন প্রথম হাতুড়ি: claude লিখে শুরু, -p দিয়ে এক লাইনের কাজ (দরজা ১)। রাহেলা খাতুন শিখিয়েছেন বাহির খাতা: CLAUDE.md — প্রতিটা নতুন সেশন যেন নিয়ম জেনে আসে (দরজা ২)। করিম-সেলিম-টিটু-দাদা শিখিয়েছে কাজ দেখে মডেল বাছাই: Sonnet রোজকার, Opus জরুরি, Haiku দ্রুত, Fable গভীর (দরজা ৩)। ফরিদা শিখিয়েছে নদীর হিসাব: কনটেক্সট ভরলে /compact, /clear — নৌকা হালকা রাখো (দরজা ৪)। বেলাল শিখিয়েছে হিসাবি আস্থা: allow, deny, আর চার মোডের চাবি (দরজা ৬)। রফিক শিখিয়েছে ঠিকাদারি: ভারী ঘাঁটাঘাঁটি সাব-এজেন্টে, বাড়িতে শুধু রিপোর্ট (দরজা ৭)। মাহমুদ শিখিয়েছে ঘণ্টা বাঁধা: কাজের আগে-পরে হুক — নিয়ম মাঠে নয়, বাঁধনে (দরজা ৮)। আয়েশা শিখিয়েছে সংযোগ: MCP-আংটি, স্কিল-পুঁথি, প্লাগইন-বাক্স (দরজা ৯)। আর নাদির ভাই শিখিয়েছেন রাতের কারখানা: claude -p, JSON, @claude — ঘুমের ঘণ্টায় কাজ (দরজা ২১)।</div>
<div class="dialogue en">You say — Hasu mistri taught the first hammer: start with claude, one-line jobs with -p (Door 1). Rahela Khatoon taught the ledger: CLAUDE.md, so every new session arrives knowing the rules (Door 2). Karim-Selim-Titu-and-grandfather taught model selection by task: Sonnet daily, Opus high-stakes, Haiku fast, Fable deep (Door 3). Farida taught the river's account: as context fills, /compact, /clear — keep the boat light (Door 4). Belal taught measured trust: allow, deny, and the four-mode keys (Door 6). Rafiq taught contracting: heavy digging to subagents, only reports home (Door 7). Mahmud taught binding bells: hooks before and after — rules live in bindings, not memory (Door 8). Ayesha taught connection: the MCP ring, the skill chapbook, the plugin box (Door 9). And Nadir bhai taught the night factory: claude -p, JSON, @claude — work through sleeping hours (Door 21).</div>

<div class="dialogue">হাসু মাথা নাড়লেন। তারপর জিজ্ঞেস করলেন — নয়টা শিক্ষা, একটাও কি আলাদা? তুমি ভাবলে। খাতাও তো প্রসঙ্গ, নদীও প্রসঙ্গ, ঠিকাদারও প্রসঙ্গ বাঁচায়। চাবিও আস্থা, ঘণ্টাও আস্থা, রাতের ঘেরা উঠানও আস্থা। আর সব শেষে — ভোরের ডায়েরি, পাতার রিভিউ, ফরম্যাটের ঘণ্টা — সব যাচাই। হাসু হাসলেন: নয়টা দরজা, তিনটা স্তম্ভ, একটা সিংহাসন।</div>
<div class="dialogue en">Hasu nods. Then asks — nine lessons; is a single one separate? You think. The ledger is context; the river is context; the contractor saves context. The keys are trust; the bells are trust; the night's fenced yard is trust. And at the end of everything — the dawn diary, the page review, the formatting bell — all verification. Hasu smiles: nine doors, three pillars, one throne.</div>

<div class="diagram">
<div class="diag-title">নয় দরজা, তিন স্তম্ভ — Nine Doors, Three Pillars</div>
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowSyn" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker>
</defs>
<circle class="node-hot" cx="280" cy="150" r="0"/>
<rect class="node-hot" x="200" y="128" width="160" height="44" rx="12"/><text class="lbl-hot" x="280" y="146">সিংহাসন — মাস্টার</text><text class="lbl-sm" x="280" y="162">design the workshop</text>
<rect class="node" x="60" y="30" width="130" height="36" rx="10"/><text class="lbl-sm" x="125" y="52">১ হাতুড়ি · শুরু</text>
<rect class="node" x="60" y="82" width="130" height="36" rx="10"/><text class="lbl-sm" x="125" y="104">২ খাতা · CLAUDE.md</text>
<rect class="node" x="60" y="134" width="130" height="36" rx="10"/><text class="lbl-sm" x="125" y="156">৪ নদী · কনটেক্সট</text>
<rect class="node" x="60" y="186" width="130" height="36" rx="10"/><text class="lbl-sm" x="125" y="208">৬ ঠিকাদার · সাব-এজেন্ট</text>
<rect class="node" x="370" y="30" width="140" height="36" rx="10"/><text class="lbl-sm" x="440" y="52">৩ ভাই · মডেল</text>
<rect class="node" x="370" y="82" width="140" height="36" rx="10"/><text class="lbl-sm" x="440" y="104">৭ ঘণ্টা · হুক</text>
<rect class="node" x="370" y="134" width="140" height="36" rx="10"/><text class="lbl-sm" x="440" y="156">৮ আংটি · MCP-স্কিল</text>
<rect class="node" x="370" y="186" width="140" height="36" rx="10"/><text class="lbl-sm" x="440" y="208">৯ রাত · headless</text>
<rect class="node-leaf" x="215" y="252" width="130" height="36" rx="10"/><text class="lbl-leaf" x="280" y="274">৫ তালা · পারমিশন</text>
<line class="edge" x1="190" y1="48" x2="230" y2="130"/>
<line class="edge" x1="190" y1="100" x2="200" y2="131"/>
<line class="edge" x1="190" y1="152" x2="200" y2="150"/>
<line class="edge" x1="190" y1="204" x2="200" y2="169"/>
<line class="edge" x1="370" y1="48" x2="330" y2="130"/>
<line class="edge" x1="370" y1="100" x2="360" y2="131"/>
<line class="edge" x1="370" y1="152" x2="360" y2="150"/>
<line class="edge" x1="370" y1="204" x2="360" y2="169"/>
<line class="edge-cyan" x1="280" y1="252" x2="280" y2="176"/>
</svg>
<div class="diag-cap">বাঁ দিকে প্রসঙ্গ-ঘর, ডান দিকে আস্থা-ঘর, নিচে তালা — সব দরজা তিন স্তম্ভে উঠে যায়: প্রসঙ্গ, আস্থা, যাচাই।</div>
</div>

<p>তিন স্তম্ভের হিসাব একবার দেখো — <strong>প্রসঙ্গ (Context)</strong>: খাতা প্রতিটা সেশনে (২), নদী হালকা রাখো (৪), ভারী কাজ ঠিকাদারে (৬), পুঁথি দরকারে (৮)। <strong>আস্থা (Trust)</strong>: কাজ দেখে ভাই (৩), চাবির হিসাব (৫), ঘণ্টার বাঁধন (৭), ঘেরা রাত (৯)। <strong>যাচাই (Verification)</strong>: প্রতিটা ফল পড়া, প্রতিটা রাতের ডায়েরি, প্রতিটা বড় কাজের আগে plan মোড। Claude যা-ই লেখুক — diff পড়ো, টেস্ট চালাও, তারপর বিশ্বাস। আস্থা অন্ধ হলে সে দুর্ঘটনা, যাচাই সহ হলে সে শক্তি।</p>
<p class="en">See the three pillars once — <strong>Context</strong>: the ledger every session (2), the river kept light (4), heavy work to contractors (6), chapbooks on demand (8). <strong>Trust</strong>: the right brother per task (3), the accounted keyring (5), the bound bells (7), the fenced night (9). <strong>Verification</strong>: read every result, diary every night, plan-mode before every big job. Whatever Claude writes — read the diff, run the tests, then believe. Trust without verification is an accident; with it, a force.</p>

<div class="code-block"># মালিকের একটা দিন — দশ দরজা এক প্রবাহে:
claude                                  # ১ শুরু
> /model sonnet                         # ৩ রোজকার ভাই (কঠিন হলে opus)
> /context                              # ৪ নদীর হিসাব
# (CLAUDE.md আগেই লেখা — ২ খাতা)
> অথ সিস্টেম ঘাঁটো — সাব-এজেন্ট দিয়ে    # ৭ ঠিকাদার
> (Shift+Tab → plan মোড)               # ২০ নকশা আগে দেখাও
# (PostToolUse ঘণ্টা ফরম্যাট করছে — ৮)
# (.mcp.json-এর আংটিতে Notion-খাতা — ৯)
> টেস্ট চালাও, diff দেখাও               # যাচাই
> /clear                                # ৪ নতুন যাত্রা
# রাতে: CI claude -p --output-format json # ২১ রাতের কারখানা</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ টাইপিস্ট</div>প্রম্পট লেখে, অপেক্ষা করে, কপি-পেস্ট করে · প্রতিটা সেশনে একই কথা বলে · যা এলো তাই নেয় · এক সেশনে সারা মাস ঢোকায়</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ কারিগর-মালিক</div>নিয়ম খাতায়, কাজ ভাই-দেখে, ভারী কাজ ঠিকাদারে · আস্থা মাপা চাবিতে, ঘণ্টায়, ঘেরা রাতে · প্রতিটা ফল যাচাই করে, তারপর সই</div>
</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>সিংহাসনের প্রথম নিয়ম:</strong> এই বই শেষ মানে শেখা শেষ নয় — Claude Code প্রতি মাসে বদলায়। মাসে একবার অফিসিয়াল ডকের প্রবাহ দেখো (code.claude.com/docs), changelog ঘাঁটো, আর নিজের খাতা-চাবি-পুঁথি ছাঁটো। কারিগরের সঞ্চয় যত তাজা, কারখানা তত দ্রুত।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>First rule of the throne:</strong> finishing this book is not finishing learning — Claude Code changes monthly. Once a month, walk the official docs (code.claude.com/docs), skim the changelog, and prune your ledger, keyring, and chapbooks. The fresher the craftsman's store, the faster the factory.</div></div>

<p class="verse">আসন আসলে সিংহাসন নয় — আমানত। "আর স্মরণ করো, যখন তোমার রব ফেরেশতাদের বললেন — আমি জমিনে এক খলিফা স্থাপন করছি" (কুরআন ২:৩০)। খলিফা মানে প্রতিনিধি-অভিভাবক: কারখানা তোমার নয়, কাজের; তুমি শুধু সেই দিনটার হিসাবদার। নয়জন শিক্ষক তোমাকে হাতিয়ার দিলেন — এখন হিসাব তোমার।</p>

<div class="secret-box"><div class="label">দশ দরজার তালিসমান — The First Throne</div><div class="text">👑 মাস্টারি = প্রসঙ্গ দাও + আস্থা মাপো + ফল যাচাই করো — দশটা দরজা এই তিন স্তম্ভের তিন রকম ইট।<br>কারণ: টাইপিস্ট টুল চালায়, কারিগর কারখানা ডিজাইন করে — আর ফল দুটোর আকাশ-পাতাল তফাত।</div></div>`,
  senior: {
    title: "সিংহাসন থেকে পরের পথ — From the Throne, the Road Ahead",
    body: `<p>এই বই তোমার ভিত — এখন গভীরে যাওয়ার পথ:</p>
<ul class="checklist">
<li><strong>Book ৭ (Word Weaver's Forge)</strong> — প্রম্পট ও প্রসঙ্গ ইঞ্জিনিয়ারিংয়ের গভীর শিল্প; এই বইয়ের দরজা ৪-এর নদী সেখানে সমুদ্র।</li>
<li><strong>Book ৮ (LLM Anatomy)</strong> — মডেল পরিবারের (দরজা ৩) ভেতরের ইঞ্জিন: attention, KV cache, quantization।</li>
<li><strong>Book ১২ (Autonomous Mind)</strong> — এজেন্ট ডিজাইনের তত্ত্ব; দরজা ৭ ও ৯-এর ঠিকাদার আর রাতের কারখানার দর্শন।</li>
<li><strong>Book ১৯ (Tool Forge)</strong> — নিজের MCP সার্ভার বানানো; দরজা ৯-এর আংটি নিজে গড়া।</li>
<li>মাসে একবার: অফিসিয়াল ডক + changelog — কারিগরের ভাণ্ডার তাজা রাখো।</li>
</ul>`
  }
});

// ── DOOR 12 · ঘড়ির ভেতরের ইঞ্জিন — Inside the Clock ──
doors.push({
  num: 12,
  icon: "⚙️",
  color: "#f97316",
  name: "ঘড়ির ভেতরের ইঞ্জিন",
  subtitle: "Inside the Clock — Hook Internals",
  tech: "Hook Protocol: stdin · exit codes · JSON",
  spirit: "ইহসান — যিনি ঘড়ির ভেতরেও নিখুঁত",
  secret: "মাহমুদ (দরজা ৮) ঘণ্টা বাজায়, সিরাজ ঘড়ি বানায় — হুক মানে শুধু কমান্ড নয়, একটা চুক্তি: stdin-এ JSON ঢুকে, exit code আর stdout দিয়ে উত্তর বেরোয়।",
  recall: {
    q: "একটা PreToolUse হুক থেকে টুল কল আটকে দিয়ে Claude-কে কারণও জানাতে চাও — দুই রকম উপায় কী?",
    qen: "From a PreToolUse hook you want to block a tool call AND tell Claude why — what are the two ways?",
    a: "পথ ১: exit 2 করে stderr-এ কারণ লেখো — ব্লক হবেই। পথ ২: exit 0 করে stdout-এ JSON ছাপো — hookSpecificOutput.permissionDecision: \"deny\" (বা \"allow\"/\"ask\"), সাথে permissionDecisionReason। এক হুকে একটাই পথ বেছে নাও; exit 2 থাকলে জোর তারই।",
    aen: "Way 1: exit 2 with the reason on stderr — always blocks. Way 2: exit 0 and print JSON — hookSpecificOutput.permissionDecision: \"deny\" (or \"allow\"/\"ask\") plus permissionDecisionReason. Pick ONE path per hook; with exit 2 present, it wins."
  },
  story: `<p class="scene-setting">মাহমুদ চৌকিদারের ঘণ্টা যে রাতের পর রাত নির্ভুল বাজে, তার পেছনে একজন আছে যাকে কেউ দেখে না — সিরাজ ঘড়ির মিস্ত্রি। শহরের কেন্দ্রে তার টেবিল, চোখে আংটি-কাচের চশমা, সামনে খোলা ঘড়ির পেট: স্প্রিং, চাকা, লিভার। লোকে বলে — ঘড়ি মানে মুখ আর কাঁটা। সিরাজ হাসে — মুখ আর কাঁটা দেখায়, কিন্তু ঘড়ি চলে ভেতরের চুক্তিতে: কোন চাকা কত ঘুরবে, কোন লিভার কখন ধরবে, কোন শব্দ বাইরে যাবে, কোনটা ভেতরে থাকবে।</p>
<p class="scene-setting en">The reason watchman Mahmud's bell rings true night after night is a man nobody sees — Siraj, the clockmaker. His desk sits at the city's centre, a jeweller's loupe on his eye, an open clock's belly before him: springs, wheels, levers. People say — a clock is its face and hands. Siraj smiles — the face and hands display, but the clock runs on the contract inside: which wheel turns how far, which lever catches when, which sound goes out, which stays in.</p>

<div class="dialogue">তুমি সিরাজের টেবিলে বসে জিজ্ঞেস করলে — আমি তো ঘণ্টা পেয়েছি (দরজা ৮), এখন কী দরকার? সিরাজ খোলা ঘড়িটা তোমার দিকে ঘুরিয়ে দিলেন। দেখো এই লিভার — এটা একটা চুক্তি। ঘড়ির ভেতর থেকে একটা ছোট খাম বেরোয় (stdin), তুমি পড়ো; তোমার উত্তর দুই রকম হয় — হয় চুপ (exit 0 — আপত্তি নেই, প্রবাহ চলবে), নয় লাল সিল (exit 2 — থামাও, কারণ এই)। আর ধনী ঘড়িগুলোতে তৃতীয় ভাষা আছে — গোছানো পাতা (JSON stdout) — যেখানে শুধু থামা-না-থামা নয়, কী করতে হবে সেটাও লেখা যায়।</div>
<div class="dialogue en">You sit at Siraj's desk and ask — I already have the bell (Door 8); what more do I need? He turns the open clock toward you. See this lever — it is a contract. A small envelope emerges from inside the clock (stdin); you read it. Your answer takes two shapes — silence (exit 0 — no objection, the flow continues), or a red seal (exit 2 — stop, and here is why). And the rich clocks speak a third language — a structured page (JSON on stdout) — where you write not only stop-or-go, but exactly what should happen.</div>

<p>দরজা ৮-এ তুমি হুক <strong>বাঁধতে</strong> শিখেছিলে। এই দরজায় হুক <strong>লিখতে</strong> শিখবে। চুক্তিটা ডক থেকে: হুক চালু হলে Claude Code প্রসঙ্গটা JSON আকারে <strong>stdin</strong> দিয়ে পাঠায়; তোমার স্ক্রিপ্ট পড়ে, বুঝে, উত্তর দেয় <strong>exit code</strong> আর <strong>stdout</strong> দিয়ে। তিন রকম উত্তর: exit 0 (নীরবতা/JSON), exit 2 (ব্লক, stderr-এ কারণ), বা exit 0 + JSON (সূক্ষ্ম নিয়ন্ত্রণ)।</p>
<p class="en">Door 8 taught you to <strong>bind</strong> hooks. This door teaches you to <strong>write</strong> them. The contract, from the docs: when a hook fires, Claude Code sends the context as JSON over <strong>stdin</strong>; your script reads, decides, and answers via <strong>exit code</strong> and <strong>stdout</strong>. Three kinds of answer: exit 0 (silence/JSON), exit 2 (block, reason on stderr), or exit 0 + JSON (fine-grained control).</p>

<div class="code-block"># হুকের খামে কী আসে — stdin-এর JSON:
{
  "session_id": "abc123",
  "cwd": "/Users/sarah/myproject",
  "hook_event_name": "PreToolUse",
  "tool_name": "Bash",
  "tool_input": { "command": "npm test" }
}

# লিখো এমন স্ক্রিপ্ট — jq দিয়ে পড়ো, মন মতো সিদ্ধান্ত দাও:
#!/bin/bash
input=$(cat)                       # খামটা হাতে নাও
cmd=$(echo "$input" | jq -r '.tool_input.command')
if [[ "$cmd" == rm* ]]; then
  echo "ভাঙা কমান্ড: $cmd" >&2     # কারণ stderr-এ
  exit 2                            # লাল সিল — থামাও
fi
exit 0                              # নীরবতা — চলতে দাও</div>

<p>এখন ধনী ঘড়ির ভাষা — exit 2 শুধু থামায়, কিন্তু JSON উত্তর <strong>নিয়ন্ত্রণ দেয়</strong>: exit 0 করে stdout-এ একটা JSON ছাপলে PreToolUse-এ <code>permissionDecision</code> বলে দাও কী হবে — <code>"deny"</code> (কল বাতিল, কারণ Claude পায়), <code>"allow"</code> (প্রম্পট স্কিপ, তবে deny-নিয়ম তবু খাটে), <code>"ask"</code> (মানুষকে জিজ্ঞেস করো)। প্রতিটা ইভেন্টের নিজস্ব প্যাটার্ন আছে — PostToolUse আর Stop হুক <code>decision: "block"</code> ব্যবহার করে।</p>
<p class="en">Now the rich clock's language — exit 2 merely stops, but a JSON answer <strong>controls</strong>: exit 0 and print a JSON object to stdout; on PreToolUse its <code>permissionDecision</code> decides — <code>"deny"</code> (call cancelled, reason fed to Claude), <code>"allow"</code> (prompt skipped, though deny-rules still apply), <code>"ask"</code> (ask the human). Each event has its own pattern — PostToolUse and Stop hooks use <code>decision: "block"</code>.</p>

<div class="code-block"># ধনী ঘড়ির পাতা — JSON দিয়ে সূক্ষ্ম নিয়ন্ত্রণ:
#!/bin/bash
input=$(cat)
cmd=$(echo "$input" | jq -r '.tool_input.command')
if [[ "$cmd" == *"production"* ]]; then
  cat <<'EOF'
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "production টাচ করা নিষিদ্ধ — মালিকের আদেশ"
  }
}
EOF
  exit 0
fi
exit 0</div>

<div class="diagram">
<div class="diag-title">ঘড়ির চুক্তি — The Clock's Contract</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowC" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="30" y="88" width="150" height="46" rx="10"/><text class="lbl" x="105" y="106">Claude Code</text><text class="lbl-sm" x="105" y="122">ঘড়ির বাড়ি</text>
<rect class="node-hot" x="380" y="88" width="150" height="46" rx="10"/><text class="lbl-hot" x="455" y="106">তোমার স্ক্রিপ্ট</text><text class="lbl-sm" x="455" y="122">ঘড়ির ইঞ্জিন</text>
<line x1="180.0" y1="96.0" x2="380.0" y2="96.0" stroke="#3dd6c4" stroke-width="2.5" fill="none" marker-end="url(#arrowC)"/>
<text class="lbl-cyan" x="278" y="86">stdin → JSON (session_id, tool_name, tool_input)</text>
<line x1="380.0" y1="126.0" x2="180.0" y2="126.0" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#arrowC)"/>
<text class="lbl-amber" x="278" y="145">← exit code + stdout (নীরব · লাল সিল · JSON)</text>
<rect class="cell-cyan" x="30" y="14" width="500" height="28" rx="8"/><text class="lbl-sm" x="280" y="28">exit 0 = আপত্তি নেই · exit 2 = ব্লক (stderr-এ কারণ) · exit 0 + JSON = নিয়ন্ত্রণ</text>
<rect class="cell" x="30" y="180" width="500" height="36" rx="8"/><text class="lbl-sm" x="280" y="195">মিশ্রণ নিষেধ: এক হুকে exit-2 থাকলে JSON-এর allow-ও তাকে বদলাতে পারে না — এক হুকে এক ভাষা।</text>
</svg>
<div class="diag-cap">চুক্তিটা সরল, কিন্তু মিশ্রণ করলে ভাঙে — docs: exit 2 blocks regardless of JSON allow.</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সিরাজের শ্রম-নিয়ম:</strong> হুকের stdout-এ JSON ছাড়া আর কিছু থাকবে না — শেল-প্রোফাইলের বিড়বিড়নি পার্সিং ভাঙে। সব উত্তর-স্ট্রিং ১০,০০০ অক্ষরে ক্যাপড (বেশি হলে ফাইলে গিয়ে প্রিভিউ আসে)। আর exit 0 মানে অনুমতি নয় — PreToolUse-এ exit 0 শুধু বলে আপত্তি নেই, অনুমতির স্বাভাবিক প্রবাহ (দরজা ৬) তবু চলে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Siraj's workshop rules:</strong> a hook's stdout must hold nothing but JSON — shell-profile chatter breaks parsing. All output strings cap at 10,000 characters (overflow goes to a file as a preview). And exit 0 is not approval — on PreToolUse, exit 0 only says no objection; the normal permission flow (Door 6) still runs.</div></div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">⚙️ হুক = চুক্তি: stdin-এ JSON পড়ো, exit 2 থামায়, JSON stdout নিয়ন্ত্রণ দেয় — এক হুকে এক ভাষা।<br>কারণ: ঘণ্টা বাজানো সহজ, ঘড়ি বানানোর স্তরেই তুমি যন্ত্রের মালিক হও।</div></div>`,
  senior: {
    title: "ঘড়ির খাতা — The Clockmaker's Notes",
    body: `<ul class="checklist">
<li>ইনপুট সবসময় <strong>jq</strong> দিয়ে পড়ো — <code>tool_input.command</code>, <code>tool_name</code>, <code>session_id</code>, <code>cwd</code> হাতে আসে।</li>
<li>শুধু থামাতে হলে exit 2 + stderr; নিয়ন্ত্রণ দরকার হলে exit 0 + JSON (<code>permissionDecision</code>)।</li>
<li>UserPromptSubmit হুক exit 0-এর stdout প্রসঙ্গে যোগ হয় — প্রম্পটে গোপন নোট: exit 0 + stdout-এ JSON, যেখানে <code>additionalContext</code> থাকবে <code>hookSpecificOutput</code>-এর ভেতরে বসানো (top-level-এ দিলে নীরবে উপেক্ষা হয়)।</li>
<li>ডিবাগ: <code>claude --debug</code> বা সেশনে <code>/debug</code> — হুকের ভাঙা আউটপুট সেখানেই দেখা যায়।</li>
<li>ব্লক করার আগে ভেবে দেখো — প্রতিটা exit 2 মানে Claude-এর হাতে একটা ফিরে-আসা কারণ, সে পড়ে পথ বদলায়।</li>
</ul>`
  }
});
