// ════════════════════════════════════════
// Book 59 · The Terminal Craftsman — Doors 6-10
// Every command verified against the official
// Claude Code docs (code.claude.com)
// ════════════════════════════════════════

// ── DOOR 6 · ঠিকাদার রফিক — Rafiq the Contractor ──
doors.push({
  num: 6,
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
<marker id="arrowRep" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#3dd6c4"/></marker>
</defs>
<rect class="node" x="15" y="30" width="200" height="60" rx="12"/><text class="lbl" x="115" y="52">তোমার অফিস</text><text class="lbl-sm" x="115" y="70">main context — পরিষ্কার</text>
<rect class="node-hot" x="345" y="30" width="200" height="60" rx="12"/><text class="lbl-hot" x="445" y="52">রফিকের শেড</text><text class="lbl-sm" x="445" y="70">subagent context — ধুলোমাখা</text>
<rect class="cell-cyan" x="215" y="120" width="130" height="34" rx="10"/><text class="lbl-cyan" x="280" y="137">১ পাতার রিপোর্ট</text>
<line x1="345" y1="60" x2="280" y2="118" stroke="#3dd6c4" stroke-width="2" fill="none" marker-end="url(#arrowRep)"/>
<line x1="280" y1="118" x2="212" y2="66" stroke="#3dd6c4" stroke-width="2" fill="none" marker-end="url(#arrowRep)"/>
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

// ── DOOR 7 · রাতের প্রহরীর ঘণ্টা — The Night Watchman's Bell ──
doors.push({
  num: 7,
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
# SubagentStart/Stop → ঠিকাদার (দরজা ৬) ছাড়লে-ফিরলে
# PreCompact        → নদী সংকুচিত হওয়ার আগে</div>

<div class="diagram">
<div class="diag-title">এক ঘর, দুই ঘণ্টা — One Tool, Two Bells</div>
<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowBell" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker>
</defs>
<rect class="node-leaf" x="15" y="55" width="130" height="40" rx="10"/><text class="lbl-leaf" x="80" y="75">Claude টুল চাইল</text>
<rect class="node-hot" x="215" y="15" width="140" height="36" rx="10"/><text class="lbl-hot" x="285" y="33">PreToolUse ঘণ্টা</text>
<rect class="node" x="215" y="95" width="140" height="36" rx="10"/><text class="lbl" x="285" y="113">PostToolUse ঘণ্টা</text>
<rect class="node-cyan" x="415" y="55" width="130" height="40" rx="10"/><text class="lbl-cyan" x="480" y="75">টুল চলল</text>
<line x1="145" y1="65" x2="210" y2="38" stroke="#ff6b35" stroke-width="2" fill="none" marker-end="url(#arrowBell)"/>
<line x1="145" y1="85" x2="210" y2="108" stroke="#fbbf24" stroke-width="2" fill="none" marker-end="url(#arrowBell)"/>
<line x1="355" y1="38" x2="410" y2="65" stroke="#fbbf24" stroke-width="2" fill="none" marker-end="url(#arrowBell)"/>
<line x1="355" y1="108" x2="410" y2="85" stroke="#fbbf24" stroke-width="2" fill="none" marker-end="url(#arrowBell)"/>
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
<li>প্লাগইন থেকেও ঘণ্টা আসে (hooks.json) — দরজা ৮-এর বাজারে দেখবে।</li>
</ul>`
  }
});

// ── DOOR 8 · উত্তরাধিকারের আংটি — The Heirloom Ring ──
doors.push({
  num: 8,
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

<div class="dialogue">তুমি আয়েশার দোকানে হাজির — বলো, আমার কারখানার শাগরেদের Notion-এর খাতা, GitHub-এর গুদাম, আর ডাটাবেসের পাথর-খনি দরকার। আয়েশা তিনটা জিনিস টেবিলে রাখল। প্রথমে আংটি — এটা MCP: বাইরের প্রতিটা জগতের সাথে খোলা প্রোটোকলের সংযোগ; পরলেই শাগরেদ ওই জগতের হাত ধরে ঢোকে। তারপর একটা পুঁথি — এটা স্কিল: তোমার কারিগরি অভ্যাস, লেখা আকারে, যেটা দরকারের মুহূর্তে খুলে পড়া হয়। আর শেষে একটা গাঢ় কাঠের বাক্স — এটা প্লাগইন: আংটি-পুঁথি-ঘণ্টা (দরজা ৭)-ঠিকাদারের চেহারা (দরজা ৬) সব একসাথে, বাজার থেকে নামিয়ে এক লাইনে চালু।</div>
<div class="dialogue en">You arrive at Ayesha's counter — my workshop's apprentice needs the Notion ledger, the GitHub warehouse, and the database quarry. Ayesha lays three things on the table. First the ring — this is MCP: an open-protocol connection to each outer world; wearing it, the apprentice holds that world's hand and enters. Then a chapbook — this is a Skill: your craft habits, written down, opened at the moment of need. And last a dark wooden box — this is a Plugin: ring + chapbook + bells (Door 7) + contractor faces (Door 6) all together, downloaded from a marketplace and enabled in one line.</div>

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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>আংটির সতর্কতা:</strong> প্রতিটা সংযোগ একটা খোলা দরজা। টোকেন কখনো ফাইলে সরাসরি লিখো না — \${ENV_VAR} আকারে দাও, যেন শেল থেকে উঠে আসে; আর কোন সার্ভার কোন টুল দেয়, দরজা ৫-এর তালার খাতায় হিসাব রাখো। সংযোগ যত বাড়ে, হিসাব তত জরুরি।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The ring's caution:</strong> every connection is an open door. Never write tokens inline in the file — give them as \${ENV_VAR} so they rise from the shell; and keep account, in Door 5's keyring, of which server grants which tools. The more connections, the more the account matters.</div></div>

<p class="verse">সিলসিলার শিক্ষা — মূল্য জিনিসে নয়, সংযোগে। জ্ঞানের নবীদের পরম্পরা এভাবেই হাত থেকে হাতে এসেছে: এক প্রজন্ম শেখায়, পরের প্রজন্ম বহন করে, কেউ বিচ্ছিন্ন হয় না। "নিশ্চয়ই আল্লাহ তোমাদের আদেশ দেন আমানত তার হকদারকে ফিরিয়ে দিতে" (কুরআন ৪:৫৮) — প্রতিটা সংযোগ একটা আমানত, প্রতিটা পুঁথি একটা আমানত।</p>

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

// ── DOOR 9 · রাতের কারখানা — The Night Factory ──
doors.push({
  num: 9,
  icon: "🌙",
  color: "#5b9eff",
  name: "রাতের কারখানা",
  subtitle: "The Night Factory",
  tech: "Headless · CI · Agent SDK",
  spirit: "তাহাজ্জুদের বরকত — ঘুমের ঘণ্টায় কাজ, ফজরে ফল",
  secret: "দিনের কারখানায় তুমি কথা বলো, রাতের কারখানায় কথা লেখা থাকে — claude -p আর JSON-ই সেই লেখা।",
  recall: {
    q: "প্রতি PR-এ যাচাই, প্রতি কমিটে লিন্ট — মানুষের চোখ ছাড়া কীভাবে চলবে?",
    qen: "Review on every PR, lint on every commit — how does it run with no human eyes?",
    a: "claude -p (print mode) + --output-format json|stream-json: পাইপলাইনে ঢোকাও, আউটপুট মেশিন পড়ে। CI-তে --permission-mode acceptEdits, ঘেরা রানারে। GitHub-এ @claude মেনশন দিলে claude-code-action নিজেই PR বানায়। আরও গভীর অটোমেশন চাইলে Agent SDK — একই ইঞ্জিন, তোমার কোডের ভেতরে।",
    aen: "claude -p (print mode) + --output-format json|stream-json: put it in the pipeline, machines read the output. In CI use --permission-mode acceptEdits inside a fenced runner. On GitHub, mention @claude and claude-code-action builds the PR itself. Deeper automation: the Agent SDK — same engine, inside your own code."
  },
  story: `<p class="scene-setting">নাদির ভাই শহরের সবচেয়ে শান্ত কারখানার মালিক — কারণ তার কারখানা দিনে ঘুমায়। সন্ধ্যায় সে একটা লম্বা কাগজ দরজার ফাঁকে গেঁথে যায়: বিছানা আনার অর্ডার, চেয়ারের হাতল বাঁকানো, রং তিন কোট শুকানো। রাতে যন্ত্রগুলো নিজে থেকেই চলে — কেউ কথা বলে না, কাগজের লেখাই আদেশ। ভোরে নাদির এসে দেখে: কাজ শেষ, একটা ছোট্ট ডায়েরিতে লেখা — কোনটা হলো, কোনটা আটকাল, কোনটায় মানুষের চোখ দরকার। সে শুধু আটকে-থাকা গুছিটা তুলে নিয়ে যায়।</p>
<p class="scene-setting en">Nadir bhai owns the city's quietest workshop — because his factory sleeps through the day. Each evening he threads a long paper into the door slot: twenty bed frames, chair handles bent, three coats of lacquer dried. At night the machines run themselves — no one speaks; the writing on the paper is the order. At dawn Nadir finds the work done and a small diary filled in — which finished, which stalled, which needs human eyes. He picks up only the stalled bundle.</p>

<div class="dialogue">তুমি জিজ্ঞেস করলে — রাতে কেউ তো পাহারা দেয় না, ভয় করো না? নাদির বলল — ভয় করি, তাই রাতের কারখানায় দিনের সব আস্থা নেই। ভঙ্গুর জিনিস রাতে ছোঁয়া হয় না, আগুনের কাজ রাতে নয়, আর যা কাজ হয় তার প্রতিটা ধাপ ডায়েরিতে। দিনের কারখানা কথায় চলে, রাতের কারখানা লেখায় চলে — লেখা ভুল হলে সকালে ধরা পড়ে, কথা না হলে ধোঁয়া।</div>
<div class="dialogue en">You ask — no one guards it at night, aren't you afraid? Nadir says — I am, so the night factory holds none of the day's full trust. Nothing fragile is touched at night, no fire-work at night, and every step that does run is written in the diary. The day factory runs on speech; the night factory runs on writing — a wrong line is caught by morning, a missing word would be smoke.</div>

<p>দিনের কারখানা তোমার ইন্টারঅ্যাক্টিভ সেশন (দরজা ১)। রাতের কারখানা হলো <strong>headless মোড</strong>: claude -p — প্রশ্ন পাঠাও, উত্তর ছাপা হয়ে আসে, কেউ বসে থাকে না। ডক বলছে, এটাই CI পাইপলাইন, প্রি-কমিট হুক, যেকোনো অটোমেশনের দরজা — আর আউটপুট মেশিনের ভাষায় চাইলে <strong>--output-format json</strong> (একটা JSON অবজেক্ট, result ফিল্ডসহ) বা <strong>stream-json</strong> (লাইন প্রতি ইভেন্ট, শুরুতে init ইভেন্ট)।</p>
<p class="en">The day factory is your interactive session (Door 1). The night factory is <strong>headless mode</strong>: claude -p — send the question, the answer prints, nobody sits around. The docs call this the door to CI pipelines, pre-commit hooks, any automation — with machine-readable output via <strong>--output-format json</strong> (a single JSON object with a result field) or <strong>stream-json</strong> (one event per line, starting with an init event).</p>

<div class="code-block"># এক লাইনের জিজ্ঞাসা, সাধারণ উত্তর:
claude -p "Explain what this project does"

# স্ক্রিপ্টে ঢোকানোর মতো গোছানো উত্তর:
claude -p "List all API endpoints" --output-format json

# লাইভ প্রসেসিং — ইভেন্ট ধরে ধরে:
claude -p "Analyze this log file" --output-format stream-json --verbose

# CI-তে: ঘেরা রানার + সীমিত আস্থা (দরজা ৫-এর লাল খাম):
claude -p "Apply the lint fixes" --permission-mode acceptEdits</div>

<p>রাতের তিনটা ঘর: পাইপলাইনে <strong>claude -p</strong>; GitHub-এ <strong>claude-code-action</strong> — PR বা ইস্যুতে @claude লিখলেই সে কোড দেখে, ঠিক করে, কমিট ঠেলে দেয়, ইস্যু থেকে PR বানায়; আর সবচেয়ে গভীর ঘর — <strong>Agent SDK</strong>: সেই একই ইঞ্জিন তুমি নিজের প্রোগ্রামের ভেতরে বসাও, query() লুপ ঘুরিয়ে নিজের হুক-সাব-এজেন্ট-কনটেক্সট-নিয়ম সহ। দরজা ৪-এর লুপ, ৫-এর তালা, ৬-এর ঠিকাদার, ৭-এর ঘণ্টা — সব এক কোডে।</p>
<p class="en">Three rooms of the night: <strong>claude -p</strong> in pipelines; <strong>claude-code-action</strong> on GitHub — mention @claude on a PR or issue and it analyzes, fixes, pushes commits, turns issues into PRs; and the deepest room — the <strong>Agent SDK</strong>: the same engine embedded in your own program, driving query() with your own hooks, subagents, context, and rules. Door 4's loop, Door 5's locks, Door 6's contractors, Door 7's bells — all in one codebase.</p>

<div class="code-block">// Agent SDK — নাদিরের রাতের ডায়েরি নিজের হাতে (Python)
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions

async def main():
    options = ClaudeAgentOptions(
        permission_mode="acceptEdits",   # দরজা ৫-এর সীমিত আস্থা
        cwd="/repo"                      # দরজা ১-এর দুনিয়া
    )
    async for message in query(
        prompt="Fix the failing tests and summarize what broke",
        options=options
    ):
        print(message)                   # ডায়েরির লাইনগুলো

asyncio.run(main())</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নাদিরের রাতের নিয়ম:</strong> রাতে ভঙ্গুর কাজ নয়। Headless মোড মানেই অনুমতির প্রশ্নের কেউ বসে নেই — তাই ঘেরা রানার, সীমিত permission mode, আর যা চলল সব ডায়েরিতে (লগে)। প্রোডাকশন সিক্রেট রাতের কারখানার দরজায় ঝুলিয়ে রাখো না — টোকেন সিক্রেট-স্টোরে, দরজা ৮-এর \${VAR} নিয়মে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Nadir's night rule:</strong> nothing fragile at night. Headless means nobody sits at the permission prompt — so fenced runners, limited permission modes, and everything that runs goes into the diary (logs). Never hang production secrets at the night factory's door — tokens in a secret store, under Door 8's \${VAR} rule.</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">-p</div><div class="sc-label">এক প্রশ্ন, এক উত্তর — পাইপের জন্য</div></div>
<div class="stat-card"><div class="sc-num">json</div><div class="sc-label">মেশিনের ভাষায় উত্তর</div></div>
<div class="stat-card"><div class="sc-num">@claude</div><div class="sc-label">PR-এ ডাকলেই কাজ শুরু</div></div>
<div class="stat-card"><div class="sc-num">SDK</div><div class="sc-label">ইঞ্জিনটা নিজের কোডে</div></div>
</div>

<p class="verse">রাতের কাজের বরকত তাহাজ্জুদের মতো — কঠিন, নীরব, ফল ফজরে। "রাত্রি যখন শান্ত হয়ে আসে" (কুরআন ৯৩:২) তখন যে কাজ চলতে থাকে লেখার আস্থায়, সকালে তার হিসাব পরিষ্কার থাকে। অটোমেশনের নৈতিকতাও তাই: যত কম চোখ, তত বেশি লেখা হিসাব।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🌙 claude -p + JSON দিয়ে রাতের কারখানা বানাও — ঘেরা উঠানে, ডায়েরিসহ, ভঙ্গুর কাজ বাদে।<br>কারণ: দিনের সময় মূল্যবান; যা লেখা যায়, তা রাতে চলা উচিত।</div></div>`,
  senior: {
    title: "রাতের কারখানা বসানো — Setting Up the Night Shift",
    body: `<ul class="checklist">
<li>শুরু করো ছোট: প্রি-কমিট বা CI-তে claude -p দিয়ে লিন্ট-ফিক্স/সামারি — এক কাজ, এক আউটপুট।</li>
<li>স্ক্রিপ্টে উত্তর পার্স করতে <strong>--output-format json</strong>; লাইভ দেখতে stream-json --verbose।</li>
<li>GitHub-এ claude-code-action: ইস্যু লিখো → <strong>@claude</strong> ডাকো → PR নিজেই আসে।</li>
<li>নিজের প্রোডাক্টে এজেন্ট চাইলে Agent SDK — permission mode আর cwd দিয়ে সাবধানে শুরু।</li>
<li>সব রাতের কাজের লগ রাখো — সকালে যাচাই, নাদিরের ডায়েরির মতো।</li>
</ul>`
  }
});

// ── DOOR 10 · সিংহাসন — The Throne ──
doors.push({
  num: 10,
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

<div class="dialogue">তুমি বললে — হাসু মিস্ত্রি শিখিয়েছেন প্রথম হাতুড়ি: claude লিখে শুরু, -p দিয়ে এক লাইনের কাজ (দরজা ১)। রাহেলা খাতুন শিখিয়েছেন বাহির খাতা: CLAUDE.md — প্রতিটা নতুন সেশন যেন নিয়ম জেনে আসে (দরজা ২)। করিম-সেলিম-টিটু-দাদা শিখিয়েছে কাজ দেখে মডেল বাছাই: Sonnet রোজকার, Opus জরুরি, Haiku দ্রুত, Fable গভীর (দরজা ৩)। ফরিদা শিখিয়েছে নদীর হিসাব: কনটেক্সট ভরলে /compact, /clear — নৌকা হালকা রাখো (দরজা ৪)। বেলাল শিখিয়েছে হিসাবি আস্থা: allow, deny, আর চার মোডের চাবি (দরজা ৫)। রফিক শিখিয়েছে ঠিকাদারি: ভারী ঘাঁটাঘাঁটি সাব-এজেন্টে, বাড়িতে শুধু রিপোর্ট (দরজা ৬)। মাহমুদ শিখিয়েছে ঘণ্টা বাঁধা: কাজের আগে-পরে হুক — নিয়ম মাঠে নয়, বাঁধনে (দরজা ৭)। আয়েশা শিখিয়েছে সংযোগ: MCP-আংটি, স্কিল-পুঁথি, প্লাগইন-বাক্স (দরজা ৮)। আর নাদির ভাই শিখিয়েছেন রাতের কারখানা: claude -p, JSON, @claude — ঘুমের ঘণ্টায় কাজ (দরজা ৯)।</div>
<div class="dialogue en">You say — Hasu mistri taught the first hammer: start with claude, one-line jobs with -p (Door 1). Rahela Khatoon taught the ledger: CLAUDE.md, so every new session arrives knowing the rules (Door 2). Karim-Selim-Titu-and-grandfather taught model selection by task: Sonnet daily, Opus high-stakes, Haiku fast, Fable deep (Door 3). Farida taught the river's account: as context fills, /compact, /clear — keep the boat light (Door 4). Belal taught measured trust: allow, deny, and the four-mode keys (Door 5). Rafiq taught contracting: heavy digging to subagents, only reports home (Door 6). Mahmud taught binding bells: hooks before and after — rules live in bindings, not memory (Door 7). Ayesha taught connection: the MCP ring, the skill chapbook, the plugin box (Door 8). And Nadir bhai taught the night factory: claude -p, JSON, @claude — work through sleeping hours (Door 9).</div>

<div class="dialogue">হাসু মাথা নাড়লেন। তারপর জিজ্ঞেস করলেন — নয়টা শিক্ষা, একটাও কি আলাদা? তুমি ভাবলে। খাতাও তো প্রসঙ্গ, নদীও প্রসঙ্গ, ঠিকাদারও প্রসঙ্গ বাঁচায়। চাবিও আস্থা, ঘণ্টাও আস্থা, রাতের ঘেরা উঠানও আস্থা। আর সব শেষে — ভোরের ডায়েরি, পাতার রিভিউ, ফরম্যাটের ঘণ্টা — সব যাচাই। হাসু হাসলেন: নয়টা দরজা, তিনটা স্তম্ভ, একটা সিংহাসন।</div>
<div class="dialogue en">Hasu nods. Then asks — nine lessons; is a single one separate? You think. The ledger is context; the river is context; the contractor saves context. The keys are trust; the bells are trust; the night's fenced yard is trust. And at the end of everything — the dawn diary, the page review, the formatting bell — all verification. Hasu smiles: nine doors, three pillars, one throne.</div>

<div class="diagram">
<div class="diag-title">নয় দরজা, তিন স্তম্ভ — Nine Doors, Three Pillars</div>
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowSyn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker>
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
<line class="edge" x1="190" y1="100" x2="235" y2="135"/>
<line class="edge" x1="190" y1="152" x2="200" y2="150"/>
<line class="edge" x1="190" y1="204" x2="235" y2="165"/>
<line class="edge" x1="370" y1="48" x2="330" y2="130"/>
<line class="edge" x1="370" y1="100" x2="325" y2="135"/>
<line class="edge" x1="370" y1="152" x2="360" y2="150"/>
<line class="edge" x1="370" y1="204" x2="325" y2="165"/>
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
> অথ সিস্টেম ঘাঁটো — সাব-এজেন্ট দিয়ে    # ৬ ঠিকাদার
> /plan                                 # ৫ নকশা আগে দেখাও
# (PostToolUse ঘণ্টা ফরম্যাট করছে — ৭)
# (.mcp.json-এর আংটিতে Notion-খাতা — ৮)
> টেস্ট চালাও, diff দেখাও               # যাচাই
> /clear                                # ৪ নতুন যাত্রা
# রাতে: CI claude -p --output-format json # ৯ রাতের কারখানা</div>

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
<li><strong>Book ১২ (Autonomous Mind)</strong> — এজেন্ট ডিজাইনের তত্ত্ব; দরজা ৬ ও ৯-এর ঠিকাদার আর রাতের কারখানার দর্শন।</li>
<li><strong>Book ১৯ (Tool Forge)</strong> — নিজের MCP সার্ভার বানানো; দরজা ৮-এর আংটি নিজে গড়া।</li>
<li>মাসে একবার: অফিসিয়াল ডক + changelog — কারিগরের ভাণ্ডার তাজা রাখো।</li>
</ul>`
  }
});



