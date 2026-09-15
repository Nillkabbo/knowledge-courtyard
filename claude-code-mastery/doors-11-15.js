// ════════════════════════════════════════
// Book 59 · The Terminal Craftsman — Doors 11-15
// উঁচু তলা — The Advanced Floors
// Every command verified against the official
// Claude Code docs (code.claude.com)
// ════════════════════════════════════════

// ── DOOR 11 · ঘড়ির ভেতরের ইঞ্জিন — Inside the Clock ──
doors.push({
  num: 11,
  icon: "⚙️",
  color: "#f97316",
  name: "ঘড়ির ভেতরের ইঞ্জিন",
  subtitle: "Inside the Clock — Hook Internals",
  tech: "Hook Protocol: stdin · exit codes · JSON",
  spirit: "ইহসান — যিনি ঘড়ির ভেতরেও নিখুঁত",
  secret: "মাহমুদ (দরজা ৭) ঘণ্টা বাজায়, সিরাজ ঘড়ি বানায় — হুক মানে শুধু কমান্ড নয়, একটা চুক্তি: stdin-এ JSON ঢুকে, exit code আর stdout দিয়ে উত্তর বেরোয়।",
  recall: {
    q: "একটা PreToolUse হুক থেকে টুল কল আটকে দিয়ে Claude-কে কারণও জানাতে চাও — দুই রকম উপায় কী?",
    qen: "From a PreToolUse hook you want to block a tool call AND tell Claude why — what are the two ways?",
    a: "পথ ১: exit 2 করে stderr-এ কারণ লেখো — ব্লক হবেই। পথ ২: exit 0 করে stdout-এ JSON ছাপো — hookSpecificOutput.permissionDecision: \"deny\" (বা \"allow\"/\"ask\"), সাথে permissionDecisionReason। এক হুকে একটাই পথ বেছে নাও; exit 2 থাকলে জোর তারই।",
    aen: "Way 1: exit 2 with the reason on stderr — always blocks. Way 2: exit 0 and print JSON — hookSpecificOutput.permissionDecision: \"deny\" (or \"allow\"/\"ask\") plus permissionDecisionReason. Pick ONE path per hook; with exit 2 present, it wins."
  },
  story: `<p class="scene-setting">মাহমুদ চৌকিদারের ঘণ্টা যে রাতের পর রাত নির্ভুল বাজে, তার পেছনে একজন আছে যাকে কেউ দেখে না — সিরাজ ঘড়ির মিস্ত্রি। শহরের কেন্দ্রে তার টেবিল, চোখে আংটি-কাচের চশমা, সামনে খোলা ঘড়ির পেট: স্প্রিং, চাকা, লিভার। লোকে বলে — ঘড়ি মানে মুখ আর কাঁটা। সিরাজ হাসে — মুখ আর কাঁটা দেখায়, কিন্তু ঘড়ি চলে ভেতরের চুক্তিতে: কোন চাকা কত ঘুরবে, কোন লিভার কখন ধরবে, কোন শব্দ বাইরে যাবে, কোনটা ভেতরে থাকবে।</p>
<p class="scene-setting en">The reason watchman Mahmud's bell rings true night after night is a man nobody sees — Siraj, the clockmaker. His desk sits at the city's centre, a jeweller's loupe on his eye, an open clock's belly before him: springs, wheels, levers. People say — a clock is its face and hands. Siraj smiles — the face and hands display, but the clock runs on the contract inside: which wheel turns how far, which lever catches when, which sound goes out, which stays in.</p>

<div class="dialogue">তুমি সিরাজের টেবিলে বসে জিজ্ঞেস করলে — আমি তো ঘণ্টা পেয়েছি (দরজা ৭), এখন কী দরকার? সিরাজ খোলা ঘড়িটা তোমার দিকে ঘুরিয়ে দিলেন। দেখো এই লিভার — এটা একটা চুক্তি। ঘড়ির ভেতর থেকে একটা ছোট খাম বেরোয় (stdin), তুমি পড়ো; তোমার উত্তর দুই রকম হয় — হয় চুপ (exit 0 — আপত্তি নেই, প্রবাহ চলবে), নয় লাল সিল (exit 2 — থামাও, কারণ এই)। আর ধনী ঘড়িগুলোতে তৃতীয় ভাষা আছে — গোছানো পাতা (JSON stdout) — যেখানে শুধু থামা-না-থামা নয়, কী করতে হবে সেটাও লেখা যায়।</div>
<div class="dialogue en">You sit at Siraj's desk and ask — I already have the bell (Door 7); what more do I need? He turns the open clock toward you. See this lever — it is a contract. A small envelope emerges from inside the clock (stdin); you read it. Your answer takes two shapes — silence (exit 0 — no objection, the flow continues), or a red seal (exit 2 — stop, and here is why). And the rich clocks speak a third language — a structured page (JSON on stdout) — where you write not only stop-or-go, but exactly what should happen.</div>

<p>দরজা ৭-এ তুমি হুক <strong>বাঁধতে</strong> শিখেছিলে। এই দরজায় হুক <strong>লিখতে</strong> শিখবে। চুক্তিটা ডক থেকে: হুক চালু হলে Claude Code প্রসঙ্গটা JSON আকারে <strong>stdin</strong> দিয়ে পাঠায়; তোমার স্ক্রিপ্ট পড়ে, বুঝে, উত্তর দেয় <strong>exit code</strong> আর <strong>stdout</strong> দিয়ে। তিন রকম উত্তর: exit 0 (নীরবতা/JSON), exit 2 (ব্লক, stderr-এ কারণ), বা exit 0 + JSON (সূক্ষ্ম নিয়ন্ত্রণ)।</p>
<p class="en">Door 7 taught you to <strong>bind</strong> hooks. This door teaches you to <strong>write</strong> them. The contract, from the docs: when a hook fires, Claude Code sends the context as JSON over <strong>stdin</strong>; your script reads, decides, and answers via <strong>exit code</strong> and <strong>stdout</strong>. Three kinds of answer: exit 0 (silence/JSON), exit 2 (block, reason on stderr), or exit 0 + JSON (fine-grained control).</p>

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
<marker id="arrowC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="30" y="88" width="150" height="46" rx="10"/><text class="lbl" x="105" y="106">Claude Code</text><text class="lbl-sm" x="105" y="122">ঘড়ির বাড়ি</text>
<rect class="node-hot" x="380" y="88" width="150" height="46" rx="10"/><text class="lbl-hot" x="455" y="106">তোমার স্ক্রিপ্ট</text><text class="lbl-sm" x="455" y="122">ঘড়ির ইঞ্জিন</text>
<line x1="180" y1="96" x2="375" y2="96" stroke="#3dd6c4" stroke-width="2.5" fill="none" marker-end="url(#arrowC)"/>
<text class="lbl-cyan" x="278" y="86">stdin → JSON (session_id, tool_name, tool_input)</text>
<line x1="375" y1="126" x2="180" y2="126" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#arrowC)"/>
<text class="lbl-amber" x="278" y="145">← exit code + stdout (নীরব · লাল সিল · JSON)</text>
<rect class="cell-cyan" x="30" y="14" width="500" height="28" rx="8"/><text class="lbl-sm" x="280" y="28">exit 0 = আপত্তি নেই · exit 2 = ব্লক (stderr-এ কারণ) · exit 0 + JSON = নিয়ন্ত্রণ</text>
<rect class="cell" x="30" y="180" width="500" height="36" rx="8"/><text class="lbl-sm" x="280" y="195">মিশ্রণ নিষেধ: এক হুকে exit-2 থাকলে JSON-এর allow-ও তাকে বদলাতে পারে না — এক হুকে এক ভাষা।</text>
</svg>
<div class="diag-cap">চুক্তিটা সরল, কিন্তু মিশ্রণ করলে ভাঙে — docs: exit 2 blocks regardless of JSON allow.</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সিরাজের শ্রম-নিয়ম:</strong> হুকের stdout-এ JSON ছাড়া আর কিছু থাকবে না — শেল-প্রোফাইলের বিড়বিড়নি পার্সিং ভাঙে। সব উত্তর-স্ট্রিং ১০,০০০ অক্ষরে ক্যাপড (বেশি হলে ফাইলে গিয়ে প্রিভিউ আসে)। আর exit 0 মানে অনুমতি নয় — PreToolUse-এ exit 0 শুধু বলে আপত্তি নেই, অনুমতির স্বাভাবিক প্রবাহ (দরজা ৫) তবু চলে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Siraj's workshop rules:</strong> a hook's stdout must hold nothing but JSON — shell-profile chatter breaks parsing. All output strings cap at 10,000 characters (overflow goes to a file as a preview). And exit 0 is not approval — on PreToolUse, exit 0 only says no objection; the normal permission flow (Door 5) still runs.</div></div>

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

// ── DOOR 12 · নিজের হাতের লেখা — Your Own Handwriting ──
doors.push({
  num: 12,
  icon: "✒️",
  color: "#a78bfa",
  name: "নিজের হাতের লেখা",
  subtitle: "Your Own Handwriting",
  tech: "Custom Slash Commands · Output Styles · Statusline",
  spirit: "খাতুত — সুন্দর অক্ষরে নিজের বাণী",
  secret: "বার বার একই দীর্ঘ নির্দেশ টাইপ করা মানে তুমি নিজেই কমান্ড বানায়নি — .claude/commands/ একটা .md ফাইল, আর /fix-issue ১২৮ তে যা ১০ মিনিটে হতো।",
  recall: {
    q: "তোমার দলের বাগ-ফিক্স ওয়ার্কফ্লো প্রতিবার ২০ লাইনের প্রম্পট — এটাকে একটা স্ল্যাশ-কমান্ডে বদলাও। কোথায় ফাইল, কীভাবে আর্গুমেন্ট নেয়?",
    qen: "Your team's bugfix workflow is a 20-line prompt every time — turn it into a slash command. Where does the file live, how does it take arguments?",
    a: ".claude/commands/fix-issue.md (প্রজেক্ট) বা ~/.claude/commands/ (সব প্রজেক্ট)। Frontmatter-এ argument-hint; বডির ভেতরে $ARGUMENTS — যা টাইপ করবে তা-ই জায়গায় বসবে; !`gh issue view $ARGUMENTS` লাইন দিয়ে শেল আউটপুটও টেনে নেওয়া যায়। সেভ করার পরই /fix-issue 42 চলবে।",
    aen: ".claude/commands/fix-issue.md (project) or ~/.claude/commands/ (all projects). argument-hint in frontmatter; $ARGUMENTS in the body — what you type lands in place; a !`gh issue view $ARGUMENTS` line pulls shell output in too. After saving, /fix-issue 42 just works."
  },
  story: `<p class="scene-setting">নুসরাত শহরের শেষ ক্যালিগ্রাফার — তার কলমে জমিদারের সব দলিল লেখা হয়। তার দেয়ালে একটা কাঠের ফ্রেমে এক লাইন: যে বার বার একই কথা লেখে, সে লেখক নয়, কপিস্ট। তুমি তার দোকানে গেলে সন্ধ্যায়। সামনে চার বেহিস্তির ডালে ঝুলছে দুটো ছোট দোকান: একটা সিলমোহর-ওয়ালা — রুটি-ব্যাগে দাগ, তারিখ, দোকানের নাম এক চাপে; আরেকটা কাঠুরের — বাক্সে নকশা-কাটা ছাঁচ, যে-ই মার্কা হোক, ছাঁচে ঢুকলেই নকশা বসে। নুসরাত বলল — এই দুটোই তোমার দরকার: সিল (কমান্ড) আর ছাঁচ (স্টাইল)।</p>
<p class="scene-setting en">Nusrat is the city's last calligrapher — every deed of the zamindar is written by her pen. On her wall, in a wooden frame, one line: who writes the same words again and again is not a writer but a copyist. You visit at dusk. Two small shops hang on the lane outside: one with a seal-stamp — one press marks the bread-bag with date and shop name; another, a woodcarver's — a pattern-cut mould in a box, whatever is pressed takes the design. Nusrat says — these two are what you need: the seal (commands) and the mould (styles).</p>

<div class="dialogue">তুমি বললে — আমার কারখানায় প্রতিদিন একই তিনটা লম্বা নির্দেশ লিখি: ইস্যু ফিক্স, ডিপ্লয়-চেক, রিভিউ। নুসরাত সিলটা তুলে নিল — তাহলে তিনটা সিল কাটো। একবার কেটে রাখো, তারপর প্রতিদিন এক চাপ। তারপর ছাঁচটা দেখাল — আর যখন তোমার লেখার ঢং বদলাতে চাও — মুখ ভরা কথার বদলে দালান-নকশা আগে, কথা পরে — ছাঁচ বদলাও, কলম নয়। এমনকি কবজির উপর ছোট্ট ফলক (statusline) পরাও যায়: কোন ঘরে আছো, কটা টোকা বাজল, নদী কত ভরা — সব এক নজরে।</div>
<div class="dialogue en">You say — in my workshop I write the same three long instructions daily: fix-issue, deploy-check, review. Nusrat lifts the seal — then cut three seals. Cut once, press daily. Then she shows the mould — and when you want your writing's shape to change — floor-plan before prose — change the mould, not the pen. Even a small plaque can be worn on the wrist (statusline): which room you're in, how many strikes rang, how full the river is — all at one glance.</div>

<p>তিনটা নতুন সিল তাহলে ডক থেকে: <strong>কাস্টম স্ল্যাশ কমান্ড</strong> — .claude/commands/ ফোল্ডারে একটা .md ফাইল, টাইপ করলেই পুরো নির্দেশটা আসে; <strong>আউটপুট স্টাইল</strong> — Claude কীভাবে উত্তর দেবে সেই ছাঁচ; <strong>স্ট্যাটাসলাইন</strong> — নিচের সারিতে তোমার বানানো ছোট্ট হিসাবপাতি।</p>
<p class="en">Three new seals then, from the docs: <strong>custom slash commands</strong> — a .md file in .claude/commands/, typed and the whole instruction arrives; <strong>output styles</strong> — the mould for how Claude answers; <strong>statusline</strong> — your own little account-strip at the bottom.</p>

<div class="code-block"># ① সিল কাটা — .claude/commands/fix-issue.md
---
argument-hint: <issue-number>
---

!\`gh issue view $ARGUMENTS\`

Investigate and fix the issue above.

# ব্যবহার: /fix-issue 42
# $ARGUMENTS-এর জায়গায় 42 বসবে; !\`...\` লাইন ঘুরে
# শেল কমান্ডের আউটপুট সরাসরি প্রম্পটে টেনে আনবে।

# ~/.claude/commands/ হলে সব প্রজেক্টে পাওয়া যায়;
# .claude/commands/ হলে শুধু এই রিপো — দলের সবাই (git-এ দাও)।</div>

<div class="code-block"># ② ছাঁচ কাটা — আউটপুট স্টাইল
# ~/.claude/output-styles/diagrams-first.md
---
name: Diagrams first
description: Lead every explanation with a diagram
keep-coding-instructions: true
---

When explaining code, architecture, or data flow, start with a
Mermaid diagram showing the structure, then explain in prose.

# চালু: /config → outputStyle: Diagrams first
# (বা settings-এ "outputStyle": "Diagrams first" —
#  সেশনের মাঝে বদলালে পরের মেসেজ থেকে কার্যকর)
# বিল্ট-ইন ছাঁচও আছে: Explanatory, Learning
# keep-coding-instructions: true রাখলে কোডিং-আচরণ
# অক্ষুণ্ণ থাকে, শুধু ব্যাখ্যার ঢং বদলায়।</div>

<div class="code-block"># ③ কবজির ফলক — স্ট্যাটাসলাইন
#!/bin/bash
# ~/.claude/statusline.sh
input=$(cat)   # Claude Code stdin-এ JSON পাঠায় (দরজা ১১-এর চুক্তি!)
MODEL=$(echo "$input" | jq -r '.model.display_name')
PCT=$(echo "$input" | jq -r '.context_window.used_percentage // 0' | cut -d. -f1)
echo "[$MODEL] 🌊 \${PCT}% context"

chmod +x ~/.claude/statusline.sh
# settings.json-এ নথিভুক্ত করো:
{
  "statusLine": { "type": "command", "command": "~/.claude/statusline.sh" }
}</div>

<p>লক্ষ করো — স্ট্যাটাসলাইনও সেই একই চুক্তি মানে (দরজা ১১): stdin-এ JSON ঢোকে, jq পড়ে, stdout-এ এক লাইন বেরোয়। একবার চুক্তিটা শিখলে ঘড়ি-ঘণ্টা-ফলক সব এক পরিবার। আর কমান্ড বানানোর সবচেয়ে সস্তা পথ আছে: <code>/statusline</code> লিখে মুখের ভাষায় বলো কী চাও — নিজেই স্ক্রিপ্ট কেটে দেয়।</p>
<p class="en">Notice — the statusline obeys the same contract (Door 11): JSON in on stdin, jq reads, one line out on stdout. Learn the contract once and clock-bell-plaque are one family. And the cheapest path to one: type <code>/statusline</code> and describe what you want — it cuts the script for you.</p>

<table class="kv-table">
<tr><th>দরকার</th><th>সিল / ছাঁচ</th><th>জায়গা</th></tr>
<tr><td class="hl">বার বারের দীর্ঘ নির্দেশ → এক চাপ</td><td>Slash command (.md)</td><td>.claude/commands/ (দল) · ~/.claude/commands/ (নিজে)</td></tr>
<tr><td class="hl">উত্তরের ঢং বদল</td><td>Output style (.md)</td><td>~/.claude/output-styles/ → /config (outputStyle)</td></tr>
<tr><td class="hl">সবসময় চোখের সামনে হিসাব</td><td>Statusline (sh + jq)</td><td>~/.claude/statusline.sh + settings.json</td></tr>
</table>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>নুসরাতের মাপকাঠি:</strong> তৃতীয়বার একই নির্দেশ লিখতে গিয়ে থামো — সেটা সিল হওয়ার সংবাদ (কমান্ড); প্রতিটা উত্তরে একই অভিযোগ করছো — সেটা ছাঁচ হওয়ার সংবাদ (স্টাইল); আর প্রতিটা সেশনে একই জিনিস মুখে জিজ্ঞেস করছো — সেটা ফলকের কাজ (statusline)। কপিস্ট থেকে ক্যালিগ্রাফার হওয়ার নিয়ম এটাই।</div></div>
<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Nusrat's yardstick:</strong> the third time you write the same instruction, stop — that is a seal waiting to be cut (command); the same complaint about every answer — a mould waiting (style); the same question asked aloud every session — a plaque's job (statusline). This is the rule for moving from copyist to calligrapher.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ কপিস্ট</div>প্রতিদিন ২০ লাইনের প্রম্পট হাতে লেখে · ইতিহাস থেকে খুঁজে কপি-পেস্ট করে · Claude-এর ডিফল্ট ঢংকে অভিযোগ করে কিন্তু ছাঁচ বদলায় না · নদীর হিসাবের জন্য বার বার /context চালায়</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ক্যালিগ্রাফার</div>একবার সিল কাটে, প্রতিদিন এক চাপ — /fix-issue 42 · নিজের ঢং ছাঁচে বাঁধা — diagrams-first · কবজিতে ফলক — মডেল + নদীর হিসাব সবসময় চোখে</div>
</div>

<p class="verse">খাতুতের সম্মান — একই কলম, নতুন হাত। সুন্দর অক্ষর সৌন্দর্যের জন্য নয়, পাঠযোগ্যতার জন্য: দলিল যেন একবার পড়েই বোঝা যায়। "য়া কলমু" — কলম যা লেখে তা সম্মানের সাথে লেখা হোক, আর বার বার নয়, একবার লিখে সিলে বাঁধা হোক।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">✒️ তৃতীয়বার টাইপ করার আগে থামো — সিল কাটো (commands), ছাঁচ বদলাও (styles), ফলক পরাও (statusline)।<br>কারণ: যন্ত্র তোমার অভ্যাস শিখুক — তোমার আঙুল নয়।</div></div>`,
  senior: {
    title: "সিল-ছাঁচ-ফলক খাতা — Seals, Moulds, Plaques",
    body: `<ul class="checklist">
<li>দলের কমান্ড .claude/commands/ (git-এ), ব্যক্তিগত ~/.claude/commands/ — দুই স্তর, রাহেলার খাতার মতোই (দরজা ২)।</li>
<li>$ARGUMENTS + argument-hint — কমান্ডের হাতে তর্জনী দাও; !\`cmd\` দিয়ে শেল-আউটপুট টেনে নাও।</li>
<li>Output style বানানোর সময় keep-coding-instructions ভেবে সেট করো — না হলে কোডিং-আচরণও বদলে যায়।</li>
<li>Statusline একই stdin-JSON চুক্তি (দরজা ১১) — jq-ই তোমার সেরা বন্ধু; /statusline দিয়ে অটো-জেনারেটও হয়। টার্মিনালও সাজানো যায়: Shift+Enter নতুন লাইন, Vim মোড, বেল — /config আর terminal-config পাতায়।</li>
<li>প্লাগইনের ভেতরেও এই তিনটাই যায় (commands/, output-styles/) — দরজা ১৪-এর বাক্সে দেখবে।</li>
</ul>`
  }
});

// ── DOOR 13 · নিজে গড়া যন্ত্র — The Machine You Build ──
doors.push({
  num: 13,
  icon: "🛠️",
  color: "#52c41a",
  name: "নিজে গড়া যন্ত্র",
  subtitle: "The Machine You Build",
  tech: "Build Your Own MCP Server",
  spirit: "সানআত — হাতের কার্য নিখাদ দক্ষতা",
  secret: "আয়েশার আংটি (দরজা ৮) অন্যের গড়া সংযোগ — কামরুল নিজে গড়ে; @tool ডেকোরেটরে একটা ফাংশন, আর তোমার কারখানার নিজস্ব যন্ত্র তৈরি।",
  recall: {
    q: "তোমার কোম্পানির ইনভেন্টরি API-কে Claude-এর হাতে দিতে চাও। এজেন্ট SDK স্ক্রিপ্টের ভেতরেই সবচেয়ে দ্রুত উপায় কী?",
    qen: "You want Claude to reach your company's inventory API. Fastest path inside an Agent SDK script?",
    a: "create_sdk_mcp_server + @tool ডেকোরেটর: ফাংশনের উপর @tool(\"নাম\", \"বর্ণনা\", {আর্গ: টাইপ}) বসাও, async def এ content list ফেরত দাও, সবগুলো এক সার্ভারে গাঁথো, ClaudeAgentOptions-এর mcp_servers={\"calc\": server} আর allowed_tools=[\"mcp__calc__add\"] — টুলের নাম প্যাটার্ন mcp__সার্ভার__টুল।",
    aen: "create_sdk_mcp_server + the @tool decorator: put @tool(\"name\", \"description\", {arg: type}) above a function, return a content list from async def, gather them into one server, pass mcp_servers={\"calc\": server} and allowed_tools=[\"mcp__calc__add\"] in ClaudeAgentOptions — tool names follow mcp__server__tool."
  },
  story: `<p class="scene-setting">শহরের মেরামত-বাজারের গভীরে কামরুলের দোকান — যন্ত্র সে বিক্রি করে না, যন্ত্র বানায়। দেয়ালে ঝুলছে তার জীবনের কাজ: একটা বাদুড়-কামরা, যেটা দিয়ে কাঠ কাটা যায়, পাথর গোল করা যায়, আর নারকেল ছালানো যায় — তিনটা কাজ, এক যন্ত্র। লোকে আসে বলে — ভাই, বাজারে এই কাজের যন্ত্র পাওয়া যায়। কামরুল মাথা নাড়ে — পাওয়া যায়, কিন্তু বাজারের যন্ত্র বাজারের মতো কাজ করে। তোমার কারখানার মাপ, তোমার লোহা, তোমার হাত — সেই মতো না বানালে যন্ত্রটা কখনো তোমার হাতের মতো চলবে না।</p>
<p class="scene-setting en">Deep in the repair market sits Kamrul's shop — he does not sell machines; he makes them. On the wall hangs his life's work: a bat-plane that cuts wood, rounds stone, and husks coconuts — three jobs, one machine. People come saying — brother, the market sells tools for this. Kamrul nods — it does, but market tools work like the market. Your workshop's measures, your iron, your hands — unless the machine is built to those, it will never move like your hand.</p>

<div class="dialogue">তুমি কামরুলের টেবিলে বসে বললে — আমার কারখানায় একটা ইনভেন্টরি-খাতা আছে, API দিয়ে। Claude-কে বললে সে চাইলে স্টক চেক করতে, অর্ডার বসাতে পারবে। কামরুল তিনটা জিনিস টেবিলে রাখল: একটা ডেকোরেটেড হাতল (@tool — যন্ত্রের নাম আর কাজ খোদাই করা), একটা ফ্রেম (create_sdk_mcp_server — সব হাতল এক বাড়িতে), আর একটা কন্ট্রাক্ট বই (input schema — কোন হাতলে কোন মাপের কাঠ ঢুকবে)। বলল — এই তিনটা দিয়ে যন্ত্র বানাও, তারপর দরজা ৮-এর মতোই পরো।</div>
<div class="dialogue en">You sit at Kamrul's table — my workshop has an inventory ledger behind an API. I want Claude to check stock and place orders. Kamrul lays three things out: a decorated handle (@tool — the tool's name and job engraved), a frame (create_sdk_mcp_server — all handles under one roof), and a contract book (input schema — which handle takes which measure of wood). He says — build the machine with these three, then wear it like Door 8's ring.</div>

<p>ডকের হিসাবে নিজের যন্ত্র বানানোর দুই পথ। <strong>সহজ পথ</strong> — এজেন্ট SDK-র ভেতরে, in-process: <code>@tool</code> ডেকোরেটর দিয়ে ফাংশন সাজাও, <code>create_sdk_mcp_server</code>-এ গাঁথো, <code>mcp_servers</code>-এ পাস করো — নতুন প্রসেস নয়, তোমার প্রোগ্রামের ভেতরেই চলে। <strong>বড় পথ</strong> — আলাদা stdio সার্ভার: ListToolsRequestSchema (সরাইয়ের তালিকা দেখাও) আর CallToolRequestSchema (ডাক এলে চালাও) হ্যান্ডলার বসাও — দরজা ৮-এর .mcp.json-এ রেজিস্টার করা যায়, সব সেশন পায়।</p>
<p class="en">The docs give two roads to your own machine. <strong>The easy road</strong> — inside the Agent SDK, in-process: dress a function with the <code>@tool</code> decorator, gather into <code>create_sdk_mcp_server</code>, pass via <code>mcp_servers</code> — no new process; it runs inside your program. <strong>The grand road</strong> — a standalone stdio server: implement ListToolsRequestSchema (show the catalogue) and CallToolRequestSchema (run when called) — register in Door 8's .mcp.json so every session gets it.</p>

<div class="code-block"># সহজ পথ — এজেন্ট SDK-র ভেতরে (Python):
from claude_agent_sdk import (
    tool, create_sdk_mcp_server, ClaudeAgentOptions, query
)

@tool("check_stock", "Check inventory for a part",
      {"part_id": str})
async def check_stock(args):
    n = await inventory_api.count(args["part_id"])  # তোমার API
    return {"content": [{"type": "text",
                         "text": f"{args['part_id']}: {n} টি মজুদ"}]}

@tool("place_order", "Place a purchase order",
      {"part_id": str, "qty": int})
async def place_order(args):
    oid = await inventory_api.order(args["part_id"], args["qty"])
    return {"content": [{"type": "text", "text": f"অর্ডার #{oid}"}]}

# সব হাতল এক বাড়িতে:
workshop = create_sdk_mcp_server(
    name="workshop", version="1.0.0",
    tools=[check_stock, place_order],
)

options = ClaudeAgentOptions(
    mcp_servers={"workshop": workshop},
    allowed_tools=[
        "mcp__workshop__check_stock",   # নামের প্যাটার্ন:
        "mcp__workshop__place_order",   # mcp__সার্ভার__টুল
    ],
)</div>

<div class="code-block">// বড় পথ — আলাদা stdio সার্ভার (TypeScript):
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import ListToolsRequestSchema
  from "@modelcontextprotocol/sdk/types.js";
import CallToolRequestSchema
  from "@modelcontextprotocol/sdk/types.js";

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "reply",
    description: "Send a message back over this channel",
    inputSchema: {
      type: "object",
      properties: {
        chat_id: { type: "string" },
        text: { type: "string" },
      },
      required: ["chat_id", "text"],
    },
  }],
}));

server.setRequestHandler(CallToolRequestSchema, async req => {
  if (req.params.name === "reply") {
    const { chat_id, text } = req.params.arguments;
    await send(\`Reply to \${chat_id}: \${text}\`);
    return { content: [{ type: "text", text: "sent" }] };
  }
  throw new Error(\`unknown tool: \${req.params.name}\`);
});

# তারপর দরজা ৮-এর খাতায় (.mcp.json):
#   "workshop": {
#     "command": "node",
#     "args": ["./servers/workshop-server.js"]
#   }</div>

<div class="diagram">
<div class="diag-title">যন্ত্রের তিন অঙ্গ — Three Organs of a Machine</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowK" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#52c41a"/></marker>
</defs>
<rect class="node-leaf" x="20" y="75" width="140" height="46" rx="10"/><text class="lbl-leaf" x="90" y="93">@tool</text><text class="lbl-sm" x="90" y="109">নাম+কাজ খোদাই</text>
<rect class="node" x="210" y="75" width="170" height="46" rx="10"/><text class="lbl" x="295" y="93">create_sdk_mcp_server</text><text class="lbl-sm" x="295" y="109">সব হাতল এক বাড়িতে</text>
<rect class="node-cyan" x="430" y="75" width="110" height="46" rx="10"/><text class="lbl-cyan" x="485" y="93">mcp_servers</text><text class="lbl-sm" x="485" y="109">Claude-র হাতে</text>
<line x1="160" y1="98" x2="205" y2="98" stroke="#52c41a" stroke-width="2.5" fill="none" marker-end="url(#arrowK)"/>
<line x1="380" y1="98" x2="425" y2="98" stroke="#52c41a" stroke-width="2.5" fill="none" marker-end="url(#arrowK)"/>
<rect class="cell" x="20" y="15" width="520" height="30" rx="8"/><text class="lbl-sm" x="280" y="34">input schema = কন্ট্রাক্ট বই: কোন হাতলে কোন মাপের কাঠ · টুলের ডাক mcp__সার্ভার__টুল প্যাটার্নে</text>
</svg>
<div class="diag-cap">সহজ পথ (in-process) আর বড় পথ (stdio সার্ভার) — দুটোই একই তিন অঙ্গে গড়া।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>কামরুলের নিরাপত্তা-নিয়ম:</strong> যন্ত্র বানানো মানেই দরজা খোলা নয় — প্রতিটা টুলের আগে ভাবো সে কী ভাঙতে পারে। ইনভেন্টরি পড়া নিরাপদ; অর্ডার বসানো টাকার ব্যাপার — সেই টুলের নাম allowed_tools-এ আলাদা করে বিবেচনা করো, দরজা ৫-এর তালার খাতায় লিখে রাখো। আর টোকেন কখনো কোডে নয়, env থেকে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Kamrul's safety rule:</strong> building a machine does not mean opening every door — before each tool, ask what it can break. Reading inventory is safe; placing orders moves money — weigh that tool's name in allowed_tools separately, and record it in Door 5's keyring. And tokens never in code; from env.</div></div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🛠️ @tool দিয়ে হাতল খোদাই, create_sdk_mcp_server-এ বাড়ি, mcp_servers-এ পরো — নিজের যন্ত্র নিজের মাপে।<br>কারণ: বাজারের যন্ত্র বাজারের মতো চলে; তোমার কারখানার যন্ত্র তোমার মতো।</div></div>`,
  senior: {
    title: "যন্ত্রশালার খাতা — The Machine-Shop Notes",
    body: `<ul class="checklist">
<li>প্রতিটা টুলে তিনটা জিনিস লাগে: নাম, বর্ণনা, input schema — বর্ণনাই Claude-কে বলে কখন ডাকবে, বিস্তারিত লেখো।</li>
<li>উত্তরের আকার সবসময় এক: <code>{"content": [{"type": "text", "text": "..."}]}</code> — এই তালিকা-ছাঁচ মনে রাখো।</li>
<li>স্ক্রিপ্টের ভেতরে দ্রুত দরকার → in-process (@tool); সব সেশনে দরকার → stdio সার্ভার + .mcp.json।</li>
<li>টুলের ডাকের নাম প্যাটার্ন: <strong>mcp__সার্ভার__টুল</strong> — allowed_tools-এ এই নামেই লিখবে।</li>
<li>লেখার টুল (অর্ডার, ডিলিট) আর পড়ার টুল আলাদা করে গণনা করো — আস্থার স্তর আলাদা (দরজা ৫)।</li>
</ul>`
  }
});

// ── DOOR 14 · পাইকারের বাক্স — The Wholesale Box ──
doors.push({
  num: 14,
  icon: "📦",
  color: "#fb923c",
  name: "পাইকারের বাক্স",
  subtitle: "The Wholesale Box",
  tech: "Build Your Own Plugin & Marketplace",
  spirit: "ওয়াকালা বিল-মাবিয়া — কারিগরি আমানত বাণিজ্যে",
  secret: "একটা স্কিল নিজের, একটা প্লাগইন দলের, একটা মার্কেটপ্লেস দুনিয়ার — plugin.json আর \${CLAUDE_PLUGIN_ROOT} দিয়ে সব যন্ত্র এক বাক্সে বেঁধে বিতরণ করো।",
  recall: {
    q: "তোমার দলের review-স্কিল + security-agent + format-hook + DB-server — চারটা আলাদা সেটআপ নয়, এক ইনস্টলে চাও। কীভাবে?",
    qen: "Your team wants review-skill + security-agent + format-hook + DB-server as one install, not four setups. How?",
    a: "নিজের প্লাগইন বানাও: রুটে .claude-plugin/plugin.json (name, description, version), তারপর সেই রুটের নিচে skills/, agents/, hooks/hooks.json, .mcp.json — সব এক বাক্সে। স্ক্রিপ্টের পথ দাও \${CLAUDE_PLUGIN_ROOT} দিয়ে। ইনস্টল: নিজের মার্কেটপ্লেস বানিয়ে (my-marketplace/.claude-plugin/marketplace.json, ভেতরে plugins/) /plugin marketplace add <repo> → /plugin install <name>@<marketplace>।",
    aen: "Build your own plugin: .claude-plugin/plugin.json at the root (name, description, version), then skills/, agents/, hooks/hooks.json, .mcp.json under that root — all in one box. Reference script paths via \${CLAUDE_PLUGIN_ROOT}. Install: stand up your own marketplace (my-marketplace/.claude-plugin/marketplace.json with plugins/ inside), /plugin marketplace add <repo> → /plugin install <name>@<marketplace>."
  },
  story: `<p class="scene-setting">মোস্তফা পাইকার গলির সবচেয়ে বড় ব্যবসায়ী — তার গুদামে ঢুকলে দেখো বড় বড় কাঠের বাক্স, প্রতিটার গায়ে লাল সিল: কারখানা-সেট। একটা বাক্স খুললে ভেতরে সব: হাতুড়ি, খোঁচা, ফাইল, তালা, ঘণ্টা, আর এক পাতার ব্যবহারবিধি। ছোট কারিগর এসে বলে — ভাই, আমি শুধু হাতুড়ি নিতে এসেছি। মোস্তফা হাসে — একা হাতুড়ি কেন? এই বাক্সটা নাও — নতুন কারখানা খুললে যা যা লাগে সব একসাথে, আর গায়ের সিলেই লেখা কার বানানো, কোন সংস্করণ।</p>
<p class="scene-setting en">Mostafa the wholesaler is the lane's biggest merchant — enter his godown and you see large wooden crates, each sealed in red: workshop-set. Open one and everything is inside: hammer, awl, file, lock, bell, and a one-page manual. A young craftsman comes — brother, I only came for a hammer. Mostafa laughs — why a hammer alone? Take this crate — everything a new workshop needs, together, and the seal on the lid says whose make and which version.</p>

<div class="code-block"># বাক্স বাঁধা — নিজের প্লাগইন:
my-plugin/
├── .claude-plugin/
│   └── plugin.json        # ← বাক্সের সিল: name, version
├── skills/
│   └── code-review/
│       └── SKILL.md       # দরজা ৮-এর পুঁথি
├── agents/
│   └── security-reviewer.md  # দরজা ৬-এর ঠিকাদার
├── commands/
│   └── audit.md           # দরজা ১২-এর সিল
├── output-styles/
│   └── terse.md           # দরজা ১২-এর ছাঁচ
├── hooks/
│   └── hooks.json         # দরজা ৭-এর ঘণ্টা
├── .mcp.json              # দরজা ৮/১৩-এর আংটি
└── scripts/
    └── format-code.sh

# plugin.json — সিলের লেখা:
{
  "name": "my-plugin",
  "description": "Migrated from standalone configuration",
  "version": "1.0.0"
}

# hooks.json-এ পথ দাও এই ভাষায়:
#   "\${CLAUDE_PLUGIN_ROOT}/scripts/format-code.sh"
# ইনস্টলের পর সারমর্ম বললে: /reload-plugins</div>

<div class="code-block"># পাইকারি বাজার — নিজের মার্কেটপ্লেস:
my-marketplace/
├── .claude-plugin/
│   └── marketplace.json   # বাজারের নথি
└── plugins/
    └── my-plugin/         # উপরের বাক্সটাই, ভেতরে

# এন্ট্রি — গোছানো সিল (source: github → repo):
{
  "name": "enterprise-tools",
  "source": { "source": "github", "repo": "company/enterprise-plugin" },
  "description": "Enterprise workflow automation tools",
  "version": "2.1.0",
  "commands": ["./commands/core/", "./commands/enterprise/"],
  "agents": ["./agents/security-reviewer.md"],
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{ "type": "command",
                  "command": "\${CLAUDE_PLUGIN_ROOT}/scripts/validate.sh" }]
    }]
  },
  "mcpServers": {
    "enterprise-db": {
      "command": "\${CLAUDE_PLUGIN_ROOT}/servers/db-server",
      "args": ["--config", "\${CLAUDE_PLUGIN_ROOT}/config.json"]
    }
  }
}

# দরজা খোলা:
/plugin marketplace add <github-org>/<repo>
/plugin install my-plugin@my-marketplace

# লোকাল টেস্টে পথও চলে:
/plugin marketplace add ./my-marketplace</div>

<p>লক্ষ করো বাক্সটা কী কী জিনিস একসাথে করে: দরজা ৬-এর ঠিকাদার, ৭-এর ঘণ্টা, ৮-এর পুঁথি-আংটি, ১২-এর সিল-ছাঁচ — প্লাগইন মানে নতুন কোনো যন্ত্র নয়, <strong>আগের সব যন্ত্রের বিতরণ-একক</strong>। তাই এটা উঁচু তলার শেষ প্রায় দরজা: নিচের দরজাগুলোতে তুমি প্রতিটা যন্ত্র আলাদা করে শিখলে, এখানে শিখলে সেগুলো কীভাবে <strong>এক বিতরণ-এককে বাঁধা যায়</strong>।</p>
<p class="en">Notice what the crate gathers: Door 6's contractors, 7's bells, 8's chapbooks and rings, 12's seals and moulds — a plugin is not a new machine but <strong>the distribution unit of every machine you already built</strong>. That is why this is the last door of the advanced floors: below, you learned each machine; here, you learn to bundle them into <strong>one shippable unit</strong>.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>পাইকারের সতর্কতা:</strong> বাক্সের ভেতরের প্রতিটা জিনিসই ক্রেতার কারখানায় চলবে — তাই বাক্স বাঁধার আগে প্রতিটা ঘণ্টা-তালা নিজের কারখানায় পরীক্ষা করো। আর \${CLAUDE_PLUGIN_ROOT} ছাড়া পথ লিখলে বাক্স অন্যের ঘরে গিয়ে খুলবে না — সেটা বাক্সের ভেতরের চাবি, সব পথ এর ভাষায়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The wholesaler's caution:</strong> everything in the crate will run in the buyer's workshop — test every bell and lock in yours before sealing the box. And without \${CLAUDE_PLUGIN_ROOT}, paths written inside will not open in another's house — it is the crate's internal key; write all paths in its language.</div></div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📦 প্লাগইন = সব যন্ত্রের বিতরণ-বাক্স: plugin.json সিল, \${CLAUDE_PLUGIN_ROOT} চাবি, মার্কেটপ্লেস দুনিয়ার পাইকারি দোকান।<br>কারণ: যা বাঁধা যায় না, তা শুধু তোমার; যা বাঁধা যায়, তা সবার।</div></div>`,
  senior: {
    title: "পাইকারি খাতা — The Wholesaler's Notes",
    body: `<ul class="checklist">
<li>শুরু করো এক স্কিল দিয়ে → তারপর এক প্লাগইন → তারপর মার্কেটপ্লেস — বাক্স বড় হয় ধীরে।</li>
<li>প্রতিটা পথ \${CLAUDE_PLUGIN_ROOT} দিয়ে — বাক্স যেখানেই খুলুক, চাবি মিলবে।</li>
<li>skills/ ব্যবহার করো নতুন প্লাগইনের জন্য; commands/ (ফ্ল্যাট .md) পুরনো স্টাইল — মিশ্রিও না।</li>
<li>ইনস্টল-সারমর্মে <strong>/reload-plugins</strong> বললে চালাও — নইলে সেশন পুনরায় চালু না হলে নতুন কিছু লোড হয় না।</li>
<li>দলের ভেতরে ছড়াতে মার্কেটপ্লেস repo বানাও — /plugin marketplace add org/repo এক লাইনে সবার কারখানায় বাক্স।</li>
</ul>`
  }
});

// ── DOOR 15 · বহু রান্নাঘর — The Many Kitchens ──
doors.push({
  num: 15,
  icon: "🍽️",
  color: "#3dd6c4",
  name: "বহু রান্নাঘর",
  subtitle: "The Many Kitchens",
  tech: "Parallel Worktrees · Agent View · Teams · /loop · /goal",
  spirit: "জামাত — একসাথে, একই কিবলায়",
  secret: "এক রান্নাঘরে দশ বাবুচি ঝগড়া করে — কাজ বাড়লে রান্নাঘর বাড়াও: worktree, /bg, agent view; আর নজর রাখার জন্য /loop আর /goal।",
  recall: {
    q: "তিনটা ফিচার একসাথে এগোতে হবে, একই রিপোতে — এডিট যেন সংঘর্ষ না করে। তিনটা উপায় বলো, ছোট থেকে বড়।",
    qen: "Three features must progress at once in one repo — without edit collisions. Name three ways, small to large.",
    a: "① claude --worktree <নাম> — প্রতিটা সেশন আলাদা git worktree-তে, আলাদা ব্রাঞ্চে (রিপোতে অন্তত এক কমিট লাগে)। ② /bg বা claude --bg — ব্যাকগ্রাউন্ড সেশন, এডিটের আগে Claude নিজেই .claude/worktrees/-এ সরে যায়। ③ agent view — এক পর্দায় সব সেশন দেখা, কোনটা কী করছে, কোনটা ইনপুট চাইছে; বড় হলে agent teams আর dynamic workflows। আর নজরে: /loop 5m <প্রম্পট> নির্দিষ্ট সময়ে, /goal <শর্ত> শর্ত পূরণ পর্যন্ত।",
    aen: "① claude --worktree <name> — each session in its own git worktree and branch (repo needs one commit). ② /bg or claude --bg — background sessions; before editing, Claude moves itself into .claude/worktrees/. ③ agent view — watch every session from one screen, what it's doing, which needs input; scale further with agent teams and dynamic workflows. And to keep watch: /loop 5m <prompt> on an interval, /goal <condition> until it holds."
  },
  story: `<p class="scene-setting">বিয়ের মৌসুমে শিরিন আপার কেটারিংয়ের খ্যাতি এক লাফে বাড়ল — আর সেই সাথে সমস্যাও। এক রান্নাঘরে তিন জন বাবুচি: একজন কাচ্চির বিরিয়ানি মাখছে, একজন রুমালি রুটি টানছে, একজন ক্ষীর ফুটাচ্ছে। পাত্র ধাক্কা খেল, চামচ খুঁজে পাওয়া গেল না, আর মশলার ডিব্বা একবারই উল্টে গেল। শিরিন সেই রাতেই নকশা আঁকলেন: উঠানের চার কোণে চার ছোট রান্নাঘর — প্রতিটার নিজের চুলা, নিজের পাত্র, নিজের মশলার তাক। বাজার থেকে একবার সব কেনে তিনি, ভাগ করে ঘরে ঘরে পৌঁছে দেন — আর সন্ধ্যায় মাঝ-উঠানের টেবিলে বসে চার ঘরের হিসাব এক নজরে দেখেন।</p>
<p class="scene-setting en">In wedding season, Shirin apa's catering fame leapt — and so did the trouble. Three cooks in one kitchen: one kneading kacchi biryani, one stretching rumali roti, one simmering payesh. Pots bumped, spoons went missing, and the spice box tipped over entirely. That night Shirin drew a plan: four small kitchens at four corners of the yard — each with its own stove, its own pots, its own spice shelf. She alone buys from the market once, divides, and delivers kitchen to kitchen — and at dusk she sits at the centre table and reads all four kitchens' accounts at one glance.</p>

<div class="dialogue">তুমি শিরিনের মাঝ-উঠানের টেবিলে বসে বললে — আমার কারখানায় এখন তিনটা কাজ একসাথে চালাতে হবে: লগইন-ফিচার, পেমেন্ট-বাগ, ডক-সাফাই। এক সেশনে তিনটা ঢুকিয়েছিলাম — এডিট ধাক্কা খেল। শিরিন বললেন — তোমার দরকার তিন রান্নাঘর, এক বাজার, এক হিসাবের টেবিল। তিনটা টার্মিনাল খোলো, প্রতিটায় claude --worktree login-feature, claude --worktree payment-bug — প্রতিটা ঘরের নিজের ফাইল, নিজের ব্রাঞ্চ। হাত গুটিয়ে বসতে চাও? /bg দিয়ে পেছনে ছেড়ে দাও — এডিটের আগে শাগরেদ নিজেই নিজের ঘরে সরে যাবে। আর সব ঘর এক পর্দায় দেখতে — agent view; বড় বিয়ে হলে দল বাঁধো (agent teams), আর রেসিপি-লিপি লিখে রাখো যেন আবার চালানো যায় (dynamic workflows)।</div>
<div class="dialogue en">You sit at Shirin's centre table — my workshop now needs three jobs at once: login feature, payment bug, docs cleanup. I put all three in one session — the edits collided. Shirin says — you need three kitchens, one market, one account table. Open three terminals, in each claude --worktree login-feature, claude --worktree payment-bug — each room with its own files, its own branch. Want to sit hands-free? Release them with /bg — before editing, the apprentice moves to its own room by itself. And to watch every room on one screen — agent view; for a big wedding, bind a team (agent teams) and write the recipe-script so it can rerun (dynamic workflows).</div>

<p>রফিকের ঠিকাদাররা (দরজা ৬) ছিল <strong>এক সেশনের ভেতরের</strong> সাহায্যকারী; শিরিনের রান্নাঘর <strong>আলাদা আলাদা পূর্ণ সেশন</strong> — এই তফাতটা মনে রাখো। ডকের হিসাবে: <strong>worktree</strong> মানে একই রিপোর আলাদা চেকআউট, আলাদা ব্রাঞ্চ — সংঘর্ষের জায়গাই নেই (gitignored ফাইল .worktreeinclude-এ নাম লিখলে কপি হয়ে যায়)। <strong>/bg</strong> মানে ব্যাকগ্রাউন্ড সেশন — এডিট শুরুর আগে Claude নিজেকে .claude/worktrees/-এ সরিয়ে নেয়। <strong>agent view</strong> মানে মাঝ-উঠানের টেবিল — কোন ঘরে কী চলছে, কোনটা তোমার মুখ খুঁজছে। আর স্বয়ংক্রিয় নজরের দুই হাত: <strong>/loop</strong> (সময় মেপে বার বার — /loop 5m check CI; সময় না দিলে Claude নিজেই তাল মেলে) আর <strong>/goal</strong> (শর্ত পূরণ না হোয়া পর্যন্ত — /goal all tests in test/auth pass)।</p>
<p class="en">Rafiq's contractors (Door 6) were helpers <strong>inside one session</strong>; Shirin's kitchens are <strong>separate full sessions</strong> — hold on to that distinction. In the docs' account: a <strong>worktree</strong> is a separate checkout of the same repo, on its own branch — no collision possible (gitignored files listed in .worktreeinclude get copied over). <strong>/bg</strong> means a background session — before editing, Claude moves itself into .claude/worktrees/. <strong>agent view</strong> is the centre table — which room runs what, which one awaits your face. And two hands of automatic watching: <strong>/loop</strong> (on a cadence — /loop 5m check CI; with no interval, Claude self-paces) and <strong>/goal</strong> (until a condition holds — /goal all tests in test/auth pass).</p>

<div class="code-block"># তিন রান্নাঘর, এক বাজার:
claude --worktree login-feature   # টার্মিনাল ১
claude --worktree payment-bug     # টার্মিনাল ২
claude --worktree docs-cleanup    # টার্মিনাল ৩
# (রিপোতে অন্তত একটা কমিট থাকতে হবে, নাহলে
#  git rev-parse ব্যর্থ হয়ে তাড়া দেবে)

# gitignored জিনিস ঘরে ঘরে লাগবে? .worktreeinclude:
#   .env
#   .env.local

# হাত খালি রাখতে:
claude --bg "fix the flaky test"  # পেছনের সেশন
> /bg                             # চলতি সেশনকেই পেছনে পাঠাও

# মাঝ-উঠানের টেবিল + নজরের হাত:
> agent view খোলো                  # সব ঘর এক পর্দায়
> /loop 5m check CI on my PR      # ৫ মিনিট পর পর
> /loop check CI on my PR         # তাল Claude নিজে মেলে
> /goal all tests in test/auth pass and the lint step is clean

# কাজ শেষে ঘর ভাঙো:
git worktree remove ../project-login-feature</div>

<div class="diagram">
<div class="diag-title">উঠানের চার রান্নাঘর — The Yard of Many Kitchens</div>
<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
<rect class="cell-cyan" x="240" y="88" width="80" height="40" rx="10"/><text class="lbl-cyan" x="280" y="112">শিরিন</text>
<rect class="node" x="30" y="20" width="140" height="40" rx="10"/><text class="lbl-sm" x="100" y="40">worktree login</text>
<rect class="node" x="30" y="90" width="140" height="40" rx="10"/><text class="lbl-sm" x="100" y="110">worktree payment</text>
<rect class="node" x="30" y="160" width="140" height="40" rx="10"/><text class="lbl-sm" x="100" y="180">worktree docs</text>
<rect class="node-leaf" x="390" y="20" width="140" height="40" rx="10"/><text class="lbl-leaf" x="460" y="40">/loop — সময় মেপে</text>
<rect class="node-leaf" x="390" y="90" width="140" height="40" rx="10"/><text class="lbl-leaf" x="460" y="110">/goal — শর্ত মেপে</text>
<rect class="node-purple" x="390" y="160" width="140" height="40" rx="10"/><text class="lbl-sm" x="460" y="180">agent view — এক পর্দায়</text>
<line class="edge-cyan" x1="170" y1="40" x2="236" y2="100"/>
<line class="edge-cyan" x1="170" y1="110" x2="236" y2="110"/>
<line class="edge-cyan" x1="170" y1="180" x2="236" y2="120"/>
<line x1="390" y1="40" x2="324" y2="100" stroke="#52c41a" stroke-width="1.5"/>
<line x1="390" y1="110" x2="324" y2="110" stroke="#52c41a" stroke-width="1.5"/>
<line x1="390" y1="180" x2="324" y2="120" stroke="#b37feb" stroke-width="1.5"/>
</svg>
<div class="diag-cap">বাঁয়ে তিন স্বতন্ত্র রান্নাঘর (worktree), মাঝে শিরিনের হিসাবের টেবিল, ডানে নজরের হাত — Book ১২ (Autonomous Mind)-এর বহু-এজেন্ট দর্শনের রান্নাঘর-রূপ।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>শিরিনের হিসাব-নিয়ম:</strong> যত রান্নাঘর, তত খরচ — প্রতিটা সেশন নিজের নদী (দরজা ৪) আর নিজের খাতা (দরজা ২) নিয়ে চলে; পরিকল্পনা (দরজা ১০) ছাড়া ঘর বাড়িও লাভ নেই। আর মনে রেখো — worktree বাঁধে ফাইলের হাত, মানুষের সিদ্ধান্ত নয়: কোন কাজ কোন ঘরে, সেটা এখনও তোমার মাঝ-উঠানের টেবিল থেকে ঠিক হয়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Shirin's account rule:</strong> every kitchen costs — each session runs its own river (Door 4) and its own ledger (Door 2); more rooms without planning (Door 10) is no gain. And remember — worktrees fence files, not decisions: which job goes to which room is still settled at your centre table.</div></div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🍽️ কাজ বাড়লে রান্নাঘর বাড়াও — --worktree ঘর, /bg হাত-খালি, agent view এক-পর্দা; /loop সময় মাপে, /goal শর্ত মাপে।<br>কারণ: এক পাত্রে দশ বাবুচি নয় — সংঘর্ষ ঠেকায় না, শুধু স্থাপত্য ঠেকায়।</div></div>`,
  senior: {
    title: "বহু-রান্নাঘরের খাতা — The Many-Kitchens Notes",
    body: `<ul class="checklist">
<li>প্রথম সংঘর্ষ দেখামাত্র কাজ ভাগো: প্রতি ফিচার/বাগে একটা <strong>claude --worktree <নাম></strong> — পরে git worktree remove দিয়ে ঘর ভাঙো।</li>
<li>.env-এর মতো gitignored ফাইল দরকার? রিপো-রুটে <strong>.worktreeinclude</strong>-এ নাম লেখো।</li>
<li>নজর রাখো মাঝ-উঠান থেকে: <strong>agent view</strong> এক পর্দায় সব সেশন — কে চলছে, কে অপেক্ষায়।</li>
<li>পুনরাবৃত্ত প্রহরী: <strong>/loop 5m ...</strong> নির্দিষ্ট তালে, /loop ... স্ব-তালে; শর্ত-প্রহরী: <strong>/goal <শর্ত></strong>।</li>
<li>আরও বড় অর্কেস্ট্রেশন: dynamic workflows (লিপি লিখে অনেক সাব-এজেন্ট চালানো, আবার চালানো যায়) — Book ১২-এর গভীর ডুব।</li>
</ul>`
  }
});
