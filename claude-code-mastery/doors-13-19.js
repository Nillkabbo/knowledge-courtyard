// ════════════════════════════════════════
// Book 59 v4 · The Terminal Craftsman — Complete Reference
// DOORS – 13 – 19 · doc-grounded (code.claude.com via context7)
// ════════════════════════════════════════



// ── DOOR 13 · নুসরতের সাজ-ঘর — Nusrat's Dressing Room ──
doors.push({
  num: 13,
  icon: "🎭",
  color: "#c084fc",
  name: "নুসরতের সাজ-ঘর",
  subtitle: "Nusrat's Dressing Room",
  tech: "Output styles · Statusline · Themes · vim mode",
  spirit: "জোহর — ভেতরের অলংকার বাইরে ফোটানো",
  secret: "Claude-এর জবাব কেমন হবে সেটাও তোমার পোশাক-দর্জির হাতে: output-style বদলায় সে কীভাবে বলে, statusline জানায় সে এখন কোথায়, vim-mode বদলায় তুমি কীভাবে লেখো — তিন সাজ, এক অভিনেতা।",
  recall: {
    q: "তুমি চাও Claude শুধু ব্যাখ্যা-শিক্ষকের মতো দীর্ঘ ব্যাখ্যা দিক নয়, হিসেবির মতো ছোট-শুকনো জবাব দিক; আর নিচে সবসময় দেখতে চাও কোন মডেল-ব্রাঞ্চে আছ। দুটো ইচ্ছার দুই যন্ত্র কী?",
    qen: "You want Claude to answer like a terse accountant, not a teacher; and you want the current model and branch always visible below. Which two instruments?",
    a: "① কথার পোশাক: output-style — .claude/output-styles/terse.md (বা ~/.claude/-এ ব্যক্তিগত) বানাও: frontmatter-এ name, শরীরে ধরন-নির্দেশ (ছোট জবাব, কোড-প্রথম, ব্যাখ্যা শুধু জিজ্ঞেস করলে); চালু: /output-styles বা settings-এ outputStyle — সাজ বদলায়, কাজ বদলায় না। বিল্ট-ইন সাজও আছে (Explanatory, Learning)। ② নিচের স্টিকার: statusline — .claude/statusline.sh লিখো (stdin-এ JSON আসে: মডেল, workspace; jq দিয়ে টুকে নিয়ে echo করো), settings.json-এ statusLine বসাও — প্রতি টার্নে তাজা তথ্য। বোনাস: vim-অভ্যাস হলে claude --vim বা /vim।",
    aen: "① The speech costume: output-style — .claude/output-styles/terse.md (personal under ~/.claude/): frontmatter name + body directives (short answers, code-first, explain only when asked); enable via /output-styles or the outputStyle setting — the costume changes how it speaks, not what it can do. Built-in styles exist too (Explanatory, Learning). ② The bottom sticker: statusline — .claude/statusline.sh reads JSON on stdin (model, workspace), jq-extracts, echoes; register in settings.json statusLine — fresh every turn. Bonus: vim users, claude --vim or /vim."
  },
  story: `<p class="scene-setting">নুসরত থিয়েটারের পুরোনো সাজ-ঘরের মালকিন — অভিনেতারা তাঁর কাছেই রূপ নিতে আসে। তাঁর ঘরের তিন আয়না বিখ্যাত। প্রথম আয়না — পোশাক-আয়না: একই অভিনেতা রাজা হয়ে দাঁড়ায় বা ফকির — সংলাপ এক, পরিধান বদলায়; বদলে যায় বলার ঢঙ। দ্বিতীয় — নাম-ফলক: মঞ্চের নিচে ঝুলন্ত ছোট্ট বোর্ড, প্রতি দৃশ্যে বদলায় — দর্শক জানে কে এখন কোন চরিত্রে। তৃতীয় — হাতের আয়না: অভিনেতা নিজের অভ্যাসে সাজায় নিজেকে — কেউ ডান হাতে লেখে, কেউ নিজের পুরোনো ঢঙে। এক তরুণ অভিনেতা এসে বলল: আমি শুধু নিজেকেই হতে চাই, সাজ কেন? নুসরত হাসলেন: নিজে হও — কিন্তু মঞ্চ তোমার ড্রয়িংরুম নয়; এখানে তোমার কথার পোশাকও তোমার কাজের অংশ। ছোট-শুকনো সংলাপের নাটকে দীর্ঘ ভাষণ ঢুকিয়ে দিলে নাটকই নষ্ট।</p>
<p class="scene-setting en">Nusrat owns the theatre's old dressing room — actors come to her to take shape. Her room's three mirrors are famous. First — the costume mirror: the same actor stands as king or beggar; the script stays, the dress changes — and with it, the tone of speech. Second — the name-board: a small plate hanging below the stage, changing every scene — the audience knows who plays what now. Third — the hand mirror: the actor dresses in personal habit — some write right-handed, some in their own old style. A young actor once said: I only want to be myself; why costumes? Nusrat smiled: be yourself — but the stage is not your drawing room; here even your speech's dress is part of the work. Throwing long monologues into a terse play ruins the play.</p>

<div class="code-block"># আয়না ১ — কথার পোশাক (output style):
mkdir -p .claude/output-styles
cat > .claude/output-styles/terse.md << 'EOF'
---
name: Terse
---
জবাবের ধরন: সংক্ষিপ্ত, হিসেবি।
- আগে কোড/ফলাফল, পরে (জিজ্ঞেস করলে) ব্যাখ্যা
- প্রতি জবাব ≤ ৮ লাইন; তালিকা > প্যারা
- অনুমান লিখো না — না জানলে প্রশ্ন করো
EOF
# চালু: /output-styles → terse   (settings-এ outputStyle: terse লিখলে স্থায়ী)
# বিল্ট-ইন: Explanatory, Learning — /output-styles-এই তালিকা

# আয়না ২ — নিচের নাম-ফলক (statusline):
cat > .claude/statusline.sh << 'EOF'
#!/bin/bash
input=\$(cat)      # প্রতি টার্নে JSON আসে
model=\$(echo "\$input" | jq -r '.model.display_name')
dir=\$(echo "\$input" | jq -r '.workspace.current_dir' | awk -F/ "{print \$NF}")
echo "🤖 \$model · 📁 \$dir"
EOF
chmod +x .claude/statusline.sh
# settings.json-এ:
#   { "statusLine": { "type": "command", "command": ".claude/statusline.sh" } }

# আয়না ৩ — নিজের হাতের অভ্যাস:
claude --vim          # বা চালু থাকলে /vim — vim-কী বাইন্ডিং
# থিম: /config → theme — রং-রুচি তোমার, চাকরি একই

# সাজ-ঘরের ক্রম (কম থেকে বেশি স্থায়ী):
#   /output-styles (এক সেশন) → settings outputStyle (প্রজেক্ট)
#   → ~/.claude/settings.json (সব প্রজেক্ট)</div>

<table class="kv-table">
<tr><th>সাজ</th><th>কী বদলায়</th><th>কোথায়</th></tr>
<tr><td class="hl">output-style</td><td>কীভাবে বলে (দীর্ঘ/সংক্ষিপ্ত/শিক্ষক-ঢঙ)</td><td>.claude/output-styles/*.md</td></tr>
<tr><td class="hl">statusline</td><td>নিচের স্টিকার (মডেল·ঘর·ব্রাঞ্চ)</td><td>.claude/statusline.sh</td></tr>
<tr><td class="hl">theme / vim</td><td>চোখ আর হাতের অভ্যাস</td><td>/config · --vim</td></tr>
</table>

<div class="diagram">
<div class="diag-title">তিন আয়নার সাজ-ঘর — The Three Mirrors</div>
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d13" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node-purple" x="15" y="55" width="160" height="46" rx="10"/><text class="lbl" x="95" y="73">পোশাক-আয়না</text><text class="lbl-sm" x="95" y="90">output-style — ঢঙ</text>
<rect class="node-cyan" x="205" y="55" width="160" height="46" rx="10"/><text class="lbl-cyan" x="285" y="73">নাম-ফলক</text><text class="lbl-sm" x="285" y="90">statusline — অবস্থান</text>
<rect class="node-leaf" x="395" y="55" width="150" height="46" rx="10"/><text class="lbl-leaf" x="470" y="73">হাতের আয়না</text><text class="lbl-sm" x="470" y="90">vim · theme</text>
<rect class="node" x="155" y="120" width="250" height="36" rx="10"/><text class="lbl-sm" x="280" y="142">অভিনেতা এক — Claude-ই; সাজ তিন, সবই তোমার হাতে</text>
<line x1="230.0" y1="101.0" x2="259.6" y2="120.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d13)"/>
<line x1="330.0" y1="101.0" x2="300.4" y2="120.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d13)"/>
<rect class="cell" x="15" y="10" width="530" height="30" rx="8"/><text class="lbl-sm" x="280" y="29">ক্রম: /output-styles (সেশন) → settings outputStyle (প্রজেক্ট) → ~/.claude/settings.json (সর্বত্র)</text>
</svg>
<div class="diag-cap">পোশাক বলার ঢঙ বদলায়, ফলক অবস্থান দেখায়, হাতের আয়না তোমাকে চেনায় — কাজ সবসময় এক।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সাজ-ঘরের সতর্কতা:</strong> সাজ বদলে কাজ বদলায় না — ভুল পোশাকে ভালো কাজ আর ভালো পোশাকে ভুল কাজ, দুটোই হয়; আগে দরজা ৬-এর অনুমতি, তারপর সাজ। আর statusline-এর স্ক্রিপ্ট দ্রুত হতে হবে — প্রতি টার্নে চলে; ভারী কমান্ড (git fetch-জাতীয়) ঢুকিয়ে প্রম্পট ধীর করো না। দলের সাথে কাজে প্রজেক্ট-output-style হালকা রাখো — সবার রুচি এক নয়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The dressing-room caution:</strong> costumes change speech, not capability — wrong costume on good work and good costume on wrong work both happen; permissions (Door 6) first, costume after. And statusline scripts run every turn — keep them fast; heavy commands (git fetch) slow your prompt. In teams keep project-wide styles light — tastes differ.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ড্রয়িংরুম-অভিনেতা</div>রোজের প্রতি জবাবে ঢঙ-নির্দেশ পুনরায় টাইপ করে · কোন মডেল-ঘরে আছে অনুমানে বোঝে · নিচের স্টিকার ডিফল্টই পড়ে থাকে</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ নুসরতের ঘর থেকে</div>ঢঙ একবার লেখা output-style-এ · অবস্থান statusline-এ সবসময় চোখে · হাতের অভ্যাস vim/থিমে</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৩ আয়না</div><div class="sc-label">ঢঙ · অবস্থান · অভ্যাস</div></div>
<div class="stat-card"><div class="sc-num">stdin-JSON</div><div class="sc-label">statusline-এর খাবার প্রতি টার্নে</div></div>
<div class="stat-card"><div class="sc-num">Explanatory</div><div class="sc-label">বিল্ট-ইন সাজের উদাহরণ</div></div>
<div class="stat-card"><div class="sc-num">--vim</div><div class="sc-label">নিজের হাতের আয়না</div></div>
</div>

<p class="verse">জোহর — ভেতরের সৌন্দর্য বাইরে ফোটে: ইসলামে পরিচ্ছদ দুই কাজ করে — সম্মান ঢাকে, পরিচয় বলে; আর অন্যায় পোশাক নিন্দিত। Claude-এর সাজও তাই: সৎ কাজকে স্পষ্ট পোশাক দাও — সাজ নিজে কখনো কাজ নয়, কিন্তু ভালো কাজের হক আদায়ে সাজের ভূমিকা আছে।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🎭 ঢঙ output-style-এ, অবস্থান statusline-এ, অভ্যাস vim/theme-এ — একবার লেখো, রোজ রেহাই।<br>কারণ: মঞ্চ ড্রয়িংরুম নয় — কথার পোশাকও কাজের অংশ।</div></div>`,
  senior: {
    title: "সাজ-ঘরের খাতা — The Dressing-Room Ledger",
    body: `<ul class="checklist">
<li>আজই একটা সাজ: <strong>.claude/output-styles/terse.md</strong> — /output-styles দিয়ে চালু, পছন্দ হলে settings-এ স্থায়ী।</li>
<li>নিচের ফলক: <strong>.claude/statusline.sh</strong> + settings-এ statusLine — মডেল·ঘর সবসময় চোখে।</li>
<li>স্ক্রিপ্ট হালকা রাখো — প্রতি টার্নে চলে; নেটওয়ার্ক-কল নিষেধ।</li>
<li>অভ্যাস: <strong>--vim</strong>, রুচি: <strong>/config</strong> — দুটোই এক লাইনের কাজ।</li>
<li>মনে রেখো: সাজ বদলায় বলার ঢঙ, কাজের ক্ষমতা নয় — অনুমতির ঘর (৬) আগে।</li>
</ul>`
  }
});

// ── DOOR 14 · নিজের হাতের লেখা — Your Own Handwriting ──
doors.push({
  num: 14,
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
    a: ".claude/commands/fix-issue.md (প্রজেক্ট) বা ~/.claude/commands/ (সব প্রজেক্ট)। Frontmatter-এ argument-hint; বডির ভেতরে \$ARGUMENTS — যা টাইপ করবে তা-ই জায়গায় বসবে; !\`gh issue view \$ARGUMENTS\` লাইন দিয়ে শেল আউটপুটও টেনে নেওয়া যায়। সেভ করার পরই /fix-issue 42 চলবে।",
    aen: ".claude/commands/fix-issue.md (project) or ~/.claude/commands/ (all projects). argument-hint in frontmatter; \$ARGUMENTS in the body — what you type lands in place; a !\`gh issue view \$ARGUMENTS\` line pulls shell output in too. After saving, /fix-issue 42 just works."
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

!\`gh issue view \$ARGUMENTS\`

Investigate and fix the issue above.

# ব্যবহার: /fix-issue 42
# \$ARGUMENTS-এর জায়গায় 42 বসবে; !\`...\` লাইন ঘুরে
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
input=$(cat)   # Claude Code stdin-এ JSON পাঠায় (দরজা ১২-এর চুক্তি!)
MODEL=$(echo "$input" | jq -r '.model.display_name')
PCT=$(echo "$input" | jq -r '.context_window.used_percentage // 0' | cut -d. -f1)
echo "[$MODEL] 🌊 \${PCT}% context"

chmod +x ~/.claude/statusline.sh
# settings.json-এ নথিভুক্ত করো:
{
  "statusLine": { "type": "command", "command": "~/.claude/statusline.sh" }
}</div>

<p>লক্ষ করো — স্ট্যাটাসলাইনও সেই একই চুক্তি মানে (দরজা ১২): stdin-এ JSON ঢোকে, jq পড়ে, stdout-এ এক লাইন বেরোয়। একবার চুক্তিটা শিখলে ঘড়ি-ঘণ্টা-ফলক সব এক পরিবার। আর কমান্ড বানানোর সবচেয়ে সস্তা পথ আছে: <code>/statusline</code> লিখে মুখের ভাষায় বলো কী চাও — নিজেই স্ক্রিপ্ট কেটে দেয়।</p>
<p class="en">Notice — the statusline obeys the same contract (Door 12): JSON in on stdin, jq reads, one line out on stdout. Learn the contract once and clock-bell-plaque are one family. And the cheapest path to one: type <code>/statusline</code> and describe what you want — it cuts the script for you.</p>

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


<div class="diagram">
<div class="diag-title">নিজের হাতের লেখার অঙ্গসংস্থান — Custom Command Anatomy</div>
<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d14" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>

<rect class="cell" x="15" y="12" width="530" height="34" rx="8"/>
<text class="lbl-sm" x="280" y="33">.claude/commands/review.md — ফাইলের নামই আদেশের নাম: /review</text>
<rect class="node-hot" x="15" y="66" width="250" height="46" rx="9"/><text class="lbl-hot" x="140" y="84">frontmatter</text><text class="lbl-sm" x="140" y="100">description, allowed-tools, argument-hint</text>
<rect class="node-cyan" x="295" y="66" width="250" height="46" rx="9"/><text class="lbl-cyan" x="420" y="84">\$ARGUMENTS ধাঁধা</text><text class="lbl-sm" x="420" y="100">/review src/auth — যুক্তিটা এখানে বসে</text>
<rect class="node-leaf" x="155" y="136" width="250" height="46" rx="9"/><text class="lbl-leaf" x="280" y="154">শরীর = প্রম্পট-ছাঁচ</text><text class="lbl-sm" x="280" y="170">allowed-tools-এ সীমাবদ্ধ হাত দিয়ে নির্দিষ্ট কাজ</text>
<line x1="140.0" y1="112.0" x2="238.2" y2="136.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d14)"/>
<line x1="420.0" y1="112.0" x2="321.8" y2="136.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d14)"/>
<rect class="cell" x="15" y="188" width="530" height="16" rx="6"/><text class="lbl-sm" x="280" y="200">output-style একই রকম এক ফাইলে: .claude/output-styles/ — সে বদলায় কীভাবে বলে, আদেশ বদলায় কী করে</text>
</svg>
<div class="diag-cap">ফাইল = আদেশ; নাম = ডাক; frontmatter = নিয়ম; শরীর = কাজ — চার সত্য মিলে নিজের হাতের লেখা।</div>
</div>

<div class="code-block"># .claude/commands/review.md — পূর্ণ ফাইল, হাতে-হাতে:
---
description: কোড-রিভিউ (বাংলা, সংক্ষিপ্ত)
argument-hint: [ফাইল-বা-ফোল্ডার]
allowed-tools: Read, Grep, Glob
---
\$ARGUMENTS ফাইল/ফোল্ডারটা পড়ে প্রতিক্রিয়া লেখো:
১. বাগ-ঝুঁকি (গুরুত্ব ক্রমে, লাইন-নম্বরসহ)
২. নাম-স্টাইল ভাঙা জায়গা
৩. টেস্ট-ফাঁক — কোন শাখা ঢাকা পড়েনি
৪. এক-লাইনের রায়: merge / fix-first
সর্বোচ্চ ২০ লাইন; প্রশংসা বাদ, কাজ বলো।

# চালাও:
claude
> /review src/payments
#   → \$ARGUMENTS-এর জায়গায় src/payments বসে যায়

# প্রজেক্ট-নয়, ব্যক্তিগত আদেশ: ~/.claude/commands/ — সব রিপোতে পাও

# statusline — নিচের স্টিকার (.claude/statusline.sh):
#!/bin/bash
input=\$(cat)   # JSON stdin: {model, workspace, ...}
model=\$(echo "\$input" | jq -r '.model.display_name')
branch=\$(git branch --show-current 2>/dev/null)
echo "🤖 \$model · 🌿 \$branch"
# settings.json: { "statusLine": { "type": "command", "command": ".claude/statusline.sh" } }</div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">✒️ তৃতীয়বার টাইপ করার আগে থামো — সিল কাটো (commands), ছাঁচ বদলাও (styles), ফলক পরাও (statusline)।<br>কারণ: যন্ত্র তোমার অভ্যাস শিখুক — তোমার আঙুল নয়।</div></div>`,
  senior: {
    title: "সিল-ছাঁচ-ফলক খাতা — Seals, Moulds, Plaques",
    body: `<ul class="checklist">
<li>দলের কমান্ড .claude/commands/ (git-এ), ব্যক্তিগত ~/.claude/commands/ — দুই স্তর, রাহেলার খাতার মতোই (দরজা ২)।</li>
<li>\$ARGUMENTS + argument-hint — কমান্ডের হাতে তর্জনী দাও; !\`cmd\` দিয়ে শেল-আউটপুট টেনে নাও।</li>
<li>Output style বানানোর সময় keep-coding-instructions ভেবে সেট করো — না হলে কোডিং-আচরণও বদলে যায়।</li>
<li>Statusline একই stdin-JSON চুক্তি (দরজা ১২) — jq-ই তোমার সেরা বন্ধু; /statusline দিয়ে অটো-জেনারেটও হয়। টার্মিনালও সাজানো যায়: Shift+Enter নতুন লাইন, Vim মোড, বেল — /config আর terminal-config পাতায়।</li>
<li>প্লাগইনের ভেতরেও এই তিনটাই যায় (commands/, output-styles/) — দরজা ১৬-এর বাক্সে দেখবে।</li>
</ul>`
  }
});

// ── DOOR 15 · নিজে গড়া যন্ত্র — The Machine You Build ──
doors.push({
  num: 15,
  icon: "🛠️",
  color: "#52c41a",
  name: "নিজে গড়া যন্ত্র",
  subtitle: "The Machine You Build",
  tech: "Build Your Own MCP Server",
  spirit: "সানআত — হাতের কার্য নিখাদ দক্ষতা",
  secret: "আয়েশার আংটি (দরজা ৯) অন্যের গড়া সংযোগ — কামরুল নিজে গড়ে; @tool ডেকোরেটরে একটা ফাংশন, আর তোমার কারখানার নিজস্ব যন্ত্র তৈরি।",
  recall: {
    q: "তোমার কোম্পানির ইনভেন্টরি API-কে Claude-এর হাতে দিতে চাও। এজেন্ট SDK স্ক্রিপ্টের ভেতরেই সবচেয়ে দ্রুত উপায় কী?",
    qen: "You want Claude to reach your company's inventory API. Fastest path inside an Agent SDK script?",
    a: "create_sdk_mcp_server + @tool ডেকোরেটর: ফাংশনের উপর @tool(\"নাম\", \"বর্ণনা\", {আর্গ: টাইপ}) বসাও, async def এ content list ফেরত দাও, সবগুলো এক সার্ভারে গাঁথো, ClaudeAgentOptions-এর mcp_servers={\"calc\": server} আর allowed_tools=[\"mcp__calc__add\"] — টুলের নাম প্যাটার্ন mcp__সার্ভার__টুল।",
    aen: "create_sdk_mcp_server + the @tool decorator: put @tool(\"name\", \"description\", {arg: type}) above a function, return a content list from async def, gather them into one server, pass mcp_servers={\"calc\": server} and allowed_tools=[\"mcp__calc__add\"] in ClaudeAgentOptions — tool names follow mcp__server__tool."
  },
  story: `<p class="scene-setting">শহরের মেরামত-বাজারের গভীরে কামরুলের দোকান — যন্ত্র সে বিক্রি করে না, যন্ত্র বানায়। দেয়ালে ঝুলছে তার জীবনের কাজ: একটা বাদুড়-কামরা, যেটা দিয়ে কাঠ কাটা যায়, পাথর গোল করা যায়, আর নারকেল ছালানো যায় — তিনটা কাজ, এক যন্ত্র। লোকে আসে বলে — ভাই, বাজারে এই কাজের যন্ত্র পাওয়া যায়। কামরুল মাথা নাড়ে — পাওয়া যায়, কিন্তু বাজারের যন্ত্র বাজারের মতো কাজ করে। তোমার কারখানার মাপ, তোমার লোহা, তোমার হাত — সেই মতো না বানালে যন্ত্রটা কখনো তোমার হাতের মতো চলবে না।</p>
<p class="scene-setting en">Deep in the repair market sits Kamrul's shop — he does not sell machines; he makes them. On the wall hangs his life's work: a bat-plane that cuts wood, rounds stone, and husks coconuts — three jobs, one machine. People come saying — brother, the market sells tools for this. Kamrul nods — it does, but market tools work like the market. Your workshop's measures, your iron, your hands — unless the machine is built to those, it will never move like your hand.</p>

<div class="dialogue">তুমি কামরুলের টেবিলে বসে বললে — আমার কারখানায় একটা ইনভেন্টরি-খাতা আছে, API দিয়ে। Claude-কে বললে সে চাইলে স্টক চেক করতে, অর্ডার বসাতে পারবে। কামরুল তিনটা জিনিস টেবিলে রাখল: একটা ডেকোরেটেড হাতল (@tool — যন্ত্রের নাম আর কাজ খোদাই করা), একটা ফ্রেম (create_sdk_mcp_server — সব হাতল এক বাড়িতে), আর একটা কন্ট্রাক্ট বই (input schema — কোন হাতলে কোন মাপের কাঠ ঢুকবে)। বলল — এই তিনটা দিয়ে যন্ত্র বানাও, তারপর দরজা ৯-এর মতোই পরো।</div>
<div class="dialogue en">You sit at Kamrul's table — my workshop has an inventory ledger behind an API. I want Claude to check stock and place orders. Kamrul lays three things out: a decorated handle (@tool — the tool's name and job engraved), a frame (create_sdk_mcp_server — all handles under one roof), and a contract book (input schema — which handle takes which measure of wood). He says — build the machine with these three, then wear it like Door 9's ring.</div>

<p>ডকের হিসাবে নিজের যন্ত্র বানানোর দুই পথ। <strong>সহজ পথ</strong> — এজেন্ট SDK-র ভেতরে, in-process: <code>@tool</code> ডেকোরেটর দিয়ে ফাংশন সাজাও, <code>create_sdk_mcp_server</code>-এ গাঁথো, <code>mcp_servers</code>-এ পাস করো — নতুন প্রসেস নয়, তোমার প্রোগ্রামের ভেতরেই চলে। <strong>বড় পথ</strong> — আলাদা stdio সার্ভার: ListToolsRequestSchema (সরাইয়ের তালিকা দেখাও) আর CallToolRequestSchema (ডাক এলে চালাও) হ্যান্ডলার বসাও — দরজা ৯-এর .mcp.json-এ রেজিস্টার করা যায়, সব সেশন পায়।</p>
<p class="en">The docs give two roads to your own machine. <strong>The easy road</strong> — inside the Agent SDK, in-process: dress a function with the <code>@tool</code> decorator, gather into <code>create_sdk_mcp_server</code>, pass via <code>mcp_servers</code> — no new process; it runs inside your program. <strong>The grand road</strong> — a standalone stdio server: implement ListToolsRequestSchema (show the catalogue) and CallToolRequestSchema (run when called) — register in Door 9's .mcp.json so every session gets it.</p>

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

# তারপর দরজা ৯-এর খাতায় (.mcp.json):
#   "workshop": {
#     "command": "node",
#     "args": ["./servers/workshop-server.js"]
#   }</div>

<div class="diagram">
<div class="diag-title">যন্ত্রের তিন অঙ্গ — Three Organs of a Machine</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrowK" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#52c41a"/></marker>
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

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>কামরুলের নিরাপত্তা-নিয়ম:</strong> যন্ত্র বানানো মানেই দরজা খোলা নয় — প্রতিটা টুলের আগে ভাবো সে কী ভাঙতে পারে। ইনভেন্টরি পড়া নিরাপদ; অর্ডার বসানো টাকার ব্যাপার — সেই টুলের নাম allowed_tools-এ আলাদা করে বিবেচনা করো, দরজা ৬-এর তালার খাতায় লিখে রাখো। আর টোকেন কখনো কোডে নয়, env থেকে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Kamrul's safety rule:</strong> building a machine does not mean opening every door — before each tool, ask what it can break. Reading inventory is safe; placing orders moves money — weigh that tool's name in allowed_tools separately, and record it in Door 6's keyring. And tokens never in code; from env.</div></div>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🛠️ @tool দিয়ে হাতল খোদাই, create_sdk_mcp_server-এ বাড়ি, mcp_servers-এ পরো — নিজের যন্ত্র নিজের মাপে।<br>কারণ: বাজারের যন্ত্র বাজারের মতো চলে; তোমার কারখানার যন্ত্র তোমার মতো।</div></div>`,
  senior: {
    title: "যন্ত্রশালার খাতা — The Machine-Shop Notes",
    body: `<ul class="checklist">
<li>প্রতিটা টুলে তিনটা জিনিস লাগে: নাম, বর্ণনা, input schema — বর্ণনাই Claude-কে বলে কখন ডাকবে, বিস্তারিত লেখো।</li>
<li>উত্তরের আকার সবসময় এক: <code>{"content": [{"type": "text", "text": "..."}]}</code> — এই তালিকা-ছাঁচ মনে রাখো।</li>
<li>স্ক্রিপ্টের ভেতরে দ্রুত দরকার → in-process (@tool); সব সেশনে দরকার → stdio সার্ভার + .mcp.json।</li>
<li>টুলের ডাকের নাম প্যাটার্ন: <strong>mcp__সার্ভার__টুল</strong> — allowed_tools-এ এই নামেই লিখবে।</li>
<li>লেখার টুল (অর্ডার, ডিলিট) আর পড়ার টুল আলাদা করে গণনা করো — আস্থার স্তর আলাদা (দরজা ৬)।</li>
</ul>`
  }
});

// ── DOOR 16 · পাইকারের বাক্স — The Wholesale Box ──
doors.push({
  num: 16,
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
│       └── SKILL.md       # দরজা ৯-এর পুঁথি
├── agents/
│   └── security-reviewer.md  # দরজা ৭-এর ঠিকাদার
├── commands/
│   └── audit.md           # দরজা ১৩-এর সিল
├── output-styles/
│   └── terse.md           # দরজা ১৩-এর ছাঁচ
├── hooks/
│   └── hooks.json         # দরজা ৮-এর ঘণ্টা
├── .mcp.json              # দরজা ৯/১৩-এর আংটি
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

<p>লক্ষ করো বাক্সটা কী কী জিনিস একসাথে করে: দরজা ৭-এর ঠিকাদার, ৭-এর ঘণ্টা, ৮-এর পুঁথি-আংটি, ১২-এর সিল-ছাঁচ — প্লাগইন মানে নতুন কোনো যন্ত্র নয়, <strong>আগের সব যন্ত্রের বিতরণ-একক</strong>। তাই এটা উঁচু তলার শেষ প্রায় দরজা: নিচের দরজাগুলোতে তুমি প্রতিটা যন্ত্র আলাদা করে শিখলে, এখানে শিখলে সেগুলো কীভাবে <strong>এক বিতরণ-এককে বাঁধা যায়</strong>।</p>
<p class="en">Notice what the crate gathers: Door 7's contractors, 7's bells, 8's chapbooks and rings, 12's seals and moulds — a plugin is not a new machine but <strong>the distribution unit of every machine you already built</strong>. That is why this is the last door of the advanced floors: below, you learned each machine; here, you learn to bundle them into <strong>one shippable unit</strong>.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>পাইকারের সতর্কতা:</strong> বাক্সের ভেতরের প্রতিটা জিনিসই ক্রেতার কারখানায় চলবে — তাই বাক্স বাঁধার আগে প্রতিটা ঘণ্টা-তালা নিজের কারখানায় পরীক্ষা করো। আর \${CLAUDE_PLUGIN_ROOT} ছাড়া পথ লিখলে বাক্স অন্যের ঘরে গিয়ে খুলবে না — সেটা বাক্সের ভেতরের চাবি, সব পথ এর ভাষায়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The wholesaler's caution:</strong> everything in the crate will run in the buyer's workshop — test every bell and lock in yours before sealing the box. And without \${CLAUDE_PLUGIN_ROOT}, paths written inside will not open in another's house — it is the crate's internal key; write all paths in its language.</div></div>


<div class="diagram">
<div class="diag-title">পাইকারের বাজার-পথ — The Marketplace Flow</div>
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d14" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="10" y="60" width="120" height="46" rx="10"/><text class="lbl" x="70" y="78">marketplace</text><text class="lbl-sm" x="70" y="95">add</text>
<rect class="node-cyan" x="160" y="60" width="120" height="46" rx="10"/><text class="lbl-cyan" x="220" y="78">install</text><text class="lbl-sm" x="220" y="95">প্লাগইন-বাছাই</text>
<rect class="node-hot" x="310" y="60" width="120" height="46" rx="10"/><text class="lbl-hot" x="370" y="78">update</text><text class="lbl-sm" x="370" y="95">টানা-হালনাগাদ</text>
<rect class="node-leaf" x="460" y="60" width="90" height="46" rx="10"/><text class="lbl-leaf" x="505" y="78">enable</text><text class="lbl-sm" x="505" y="95">চালু/বন্ধ</text>
<line x1="130" y1="83" x2="156" y2="83" stroke="#f97316" stroke-width="2" fill="none" marker-end="url(#ar59d14)"/>
<line x1="280" y1="83" x2="306" y2="83" stroke="#f97316" stroke-width="2" fill="none" marker-end="url(#ar59d14)"/>
<line x1="430" y1="83" x2="456" y2="83" stroke="#f97316" stroke-width="2" fill="none" marker-end="url(#ar59d14)"/>
<rect class="cell" x="10" y="12" width="540" height="28" rx="8"/><text class="lbl-sm" x="280" y="30">বাজার যোগ → প্লাগইন বসাও → হালনাগাদ টানো → প্রয়োজনে বন্ধ — সবই /plugin দিয়ে</text>
<rect class="cell" x="10" y="124" width="540" height="30" rx="8"/><text class="lbl-sm" x="280" y="143">নীতি: অচেনা পাইকারের পণ্যে হাত দেওয়ার আগে দরজা ২৫-এর বিশ্বাস-প্রশ্ন — উৎস কে?</text>
</svg>
<div class="diag-cap">এক আদেশের জীবনচক্র: বাজার → ঘর → হালনাগাদ → ব্যবহার; বিশ্বাস প্রতিবার নবায়ন করতে হয়।</div>
</div>

<div class="code-block"># বাজার-যাত্রা — হুবহু ধারা:
claude
> /plugin marketplace add anthropics/claude-code
#   → বাজার তালিকাভুক্ত (রিপো-উৎস; লোকালও যায়:
#     /plugin marketplace add ./my-marketplace)
> /plugin install lint-tools@anthropics
#   → প্লাগইন বসল: commands+skills+agents এক প্যাকেটে
> /plugin update lint-tools
#   → টেনে হালনাগাদ
> /plugin disable lint-tools
#   → খুলে রাখা, ব্যবহার বন্ধ — মুছলে uninstall

# নিজের প্লাগইন বানানোর ন্যূনতম গঠন:
my-plugin/
├── .claude-plugin/plugin.json   # { "name": "lint-tools" }
├── commands/                    # /আদেশ সমূহ
├── skills/                      # বিদ্যা-সমূহ
└── agents/                      # ঠিকাদার-সমূহ (দরজা ৭-এর ভাই)

# ⚠ ইনস্টলের আগে চোখ: প্লাগইন কী কী allowed-tools চায়,
#   hooks কী চালায় — দরজা ১২+১৬ মিলিয়ে পড়ো</div>

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

// ── DOOR 17 · বহু রান্নাঘর — The Many Kitchens ──
doors.push({
  num: 17,
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

<p>রফিকের ঠিকাদাররা (দরজা ৭) ছিল <strong>এক সেশনের ভেতরের</strong> সাহায্যকারী; শিরিনের রান্নাঘর <strong>আলাদা আলাদা পূর্ণ সেশন</strong> — এই তফাতটা মনে রাখো। ডকের হিসাবে: <strong>worktree</strong> মানে একই রিপোর আলাদা চেকআউট, আলাদা ব্রাঞ্চ — সংঘর্ষের জায়গাই নেই (gitignored ফাইল .worktreeinclude-এ নাম লিখলে কপি হয়ে যায়)। <strong>/bg</strong> মানে ব্যাকগ্রাউন্ড সেশন — এডিট শুরুর আগে Claude নিজেকে .claude/worktrees/-এ সরিয়ে নেয়। <strong>agent view</strong> মানে মাঝ-উঠানের টেবিল — কোন ঘরে কী চলছে, কোনটা তোমার মুখ খুঁজছে। আর স্বয়ংক্রিয় নজরের দুই হাত: <strong>/loop</strong> (সময় মেপে বার বার — /loop 5m check CI; সময় না দিলে Claude নিজেই তাল মেলে) আর <strong>/goal</strong> (শর্ত পূরণ না হোয়া পর্যন্ত — /goal all tests in test/auth pass)।</p>
<p class="en">Rafiq's contractors (Door 7) were helpers <strong>inside one session</strong>; Shirin's kitchens are <strong>separate full sessions</strong> — hold on to that distinction. In the docs' account: a <strong>worktree</strong> is a separate checkout of the same repo, on its own branch — no collision possible (gitignored files listed in .worktreeinclude get copied over). <strong>/bg</strong> means a background session — before editing, Claude moves itself into .claude/worktrees/. <strong>agent view</strong> is the centre table — which room runs what, which one awaits your face. And two hands of automatic watching: <strong>/loop</strong> (on a cadence — /loop 5m check CI; with no interval, Claude self-paces) and <strong>/goal</strong> (until a condition holds — /goal all tests in test/auth pass).</p>

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
<line class="edge-cyan" x1="170" y1="40" x2="240" y2="100"/>
<line class="edge-cyan" x1="170" y1="110" x2="240" y2="110"/>
<line class="edge-cyan" x1="170" y1="180" x2="240" y2="120"/>
<line x1="390" y1="40" x2="320" y2="100" stroke="#52c41a" stroke-width="1.5"/>
<line x1="390" y1="110" x2="320" y2="110" stroke="#52c41a" stroke-width="1.5"/>
<line x1="390" y1="180" x2="320" y2="120" stroke="#b37feb" stroke-width="1.5"/>
</svg>
<div class="diag-cap">বাঁয়ে তিন স্বতন্ত্র রান্নাঘর (worktree), মাঝে শিরিনের হিসাবের টেবিল, ডানে নজরের হাত — Book ১২ (Autonomous Mind)-এর বহু-এজেন্ট দর্শনের রান্নাঘর-রূপ।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>শিরিনের হিসাব-নিয়ম:</strong> যত রান্নাঘর, তত খরচ — প্রতিটা সেশন নিজের নদী (দরজা ৪) আর নিজের খাতা (দরজা ২) নিয়ে চলে; পরিকল্পনা (দরজা ১১) ছাড়া ঘর বাড়িও লাভ নেই। আর মনে রেখো — worktree বাঁধে ফাইলের হাত, মানুষের সিদ্ধান্ত নয়: কোন কাজ কোন ঘরে, সেটা এখনও তোমার মাঝ-উঠানের টেবিল থেকে ঠিক হয়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Shirin's account rule:</strong> every kitchen costs — each session runs its own river (Door 4) and its own ledger (Door 2); more rooms without planning (Door 11) is no gain. And remember — worktrees fence files, not decisions: which job goes to which room is still settled at your centre table.</div></div>

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
// ── DOOR 18 · রহিমা ঘরের ঘড়ি-মিস্ত্রি — Rahima's Clock-Winder ──
doors.push({
  num: 18,
  icon: "🔁",
  color: "#f59e0b",
  name: "রহিমার স্বয়ংক্রিয় ঘড়ি",
  subtitle: "Rahima's Self-Winding Clock",
  tech: "/loop · /goal · dynamic workflows · schedules",
  spirit: "তাওয়াক্কুল — আমল বাঁধো, ফল আল্লাহর হাতে",
  secret: "এক প্রম্পটের কাজ শেষ নয় — /loop একই আদেশ ঘুরিয়ে আনে যতক্ষণ না বলো থাম, /goal লক্ষ্য ধরে রাখে যতক্ষণ না মিলে যায়; আর ঘড়ি-মিস্ত্রির কৌশল: কাজটা বাঁধে সময়ের সাথে — সকালের রিভিউ, সাপ্তাহিক হিসাব, নিজে থেকেই চলে।",
  recall: {
    q: "তোমাকে একটা ফিচার শেষ করতে হবে যার টেস্ট এখন লাল — ফিক্স → টেস্ট → আবার লাল, এভাবে অনেকবার। কোন দুই যন্ত্রে এই চক্র নিজে থেকেই ঘুরবে — আর প্রতিবারের মাপকাঠি কে ধরে?",
    qen: "A feature is done only when its tests pass — fix, test, red again, many rounds. Which two instruments keep this cycle turning by itself — and who holds the yardstick each round?",
    a: "/loop — একই প্রম্পট বারবার: /loop 'টেস্ট চালিয়ে যে ফেইল করে তা ঠিক করো, সবুজ হলে থামো' — সে প্রতি রাউন্ডে টেস্টই মাপকাঠি, সবুজ মানেই থামা। আর লক্ষ্য বড় ও স্থায়ী হলে /goal — পুরো সেশন জুড়ে লক্ষ্য-স্মৃতি থাকে, প্রতি ধাপে নিজের অবস্থান মিলিয়ে নেয়, দশ ধাপ পরেও প্রথম প্রশ্নে ফিরে যায়। দুটোর সাধারণ নিয়ম: থামার শর্ত লেখো স্পষ্ট (নইলে ঘুরবেই), আর প্রতি রাউন্ড ছোট রাখো — ঘড়ির কাঁটা যেমন ছোট ধাপে বাঁকে।",
    aen: "/loop — the same prompt, repeated: /loop 'run the tests, fix what fails, stop when all green' — the test is the yardstick each round; green means stop. For a larger, standing objective, /goal — the goal stays in memory across the whole session, each step checks against it, and even ten steps later it returns to the first question. One rule for both: write the stop-condition explicitly (else it spins forever), and keep each round small — like a clock's ticking hand."
  },
  story: `<p class="scene-setting">রহিমা শহরের ঘড়ি-মিস্ত্রি — তাঁর বিশেষত্ব: স্বয়ংক্রিয়-ঘোরানো ঘড়ি। বড় ঘড়ির ঘরে তাঁর তৈরি যন্ত্র — একবার বাতাস দিলে কাঁটা নিজেই ঘোরে, ঘণ্টা পার হলে ঘণ্টা বাজে, সন্ধ্যায় থামে; আবার সকালে নিজেই শুরু। লোকে জিজ্ঞেস করে: ঘড়ি নিজে নিজে চলে? রহিমা বলেন: না — আমি শুধু বাতাসটা দিই; নিয়মটা আমি বাঁধে দিই যন্ত্রের ভেতরে। বাইরের কাজ তাঁর দুই রকম: ছোট কাজে স্বয়ং-ঘূর্ণায়মান কাঁটা — যতক্ষণ মাপ মিলছে না, ঘুরবেই (ঠিক আছে কি না প্রতিবার নিজেই মেপে নেয়); আর বড় কাজে লক্ষ্য-দিকাশিখা — ঘড়ির কাঁটা একবার লক্ষ্যে বসালে বাকি যন্ত্র নিজেই সেদিকে ঘোরে, দশ দিন পরেও দিক ভুল হয় না। তাঁর একটাই সতর্কতা, যা তিনি প্রতিটা ক্রেতাকে বলেন: থামার ঘণ্টাটা ঠিক করে যাও — যে যন্ত্র জানে না কখন থামতে হয়, সে যন্ত্র একদিন নিজের দাঁড়িপাল্লাই ভেঙে ফেলে।</p>
<p class="scene-setting en">Rahima is the city's clock-winder — her specialty: self-winding clocks. In the clock tower sits her machine — wound once, the hand turns by itself, strikes the hour, rests at dusk; starts again at dawn on its own. People ask: the clock runs by itself? She says: no — I only wind it; I bind the rule inside the machine. Her work comes in two kinds: for small jobs, a self-turning hand — it keeps turning until the measurement matches, checking itself each round; for big jobs, a goal-compass — once the hand is set on the target, the rest of the machine turns toward it, never losing direction even ten days later. And one caution she gives every buyer: set the stopping bell — a machine that does not know when to stop will one day break its own balance-wheel.</p>

<div class="code-block"># স্বয়ং-ঘোরানো কাঁটা — ছোট চক্র:
/loop "npm test চালাও; যে টেস্ট ফেইল করে শুধু তা ঠিক করো;
       আবার চালাও — সব পাস হলে থেমে যাও আর রিপোর্ট দাও"
#   প্রতি রাউন্ড = টেস্টই মাপকাঠি; সবুজ = থামার ঘণ্টা

# লক্ষ্য-দিকাশিখা — বড় কাজ:
/goal "মাইগ্রেশন শেষ: সব মডেল Postgres-এ, টেস্ট সবুজ, ডক আপডেটেড"
#   সেশনজুড়ে লক্ষ্য-স্মৃতি; প্রতি ধাপে নিজে মিলিয়ে নেয়

# ঘড়ির সাথে বাঁধা — নির্দিষ্ট সময়ের কাজ (docs-টেবিল):
#   ক্রন/লঞ্চএজেন্ট (নিজের মেশিন) · GitHub Actions স্ক্যাডিউল (রিপোর সাথে)
#   · claude.ai স্ক্যাডিউল (ওয়েব-দিক) — যেখানে চাও সেখানে ঘড়ি
# উদাহরণ — প্রতি সকালে PR-রিভিউ:
#   .github/workflows/morning-review.yml → schedule: cron '0 9 * * 1-5'
#   → claude -p "খোলা PR-গুলো পড়ে ঝুঁকি-টেবিল কমেন্ট করো"

# থামার নিয়ম — রহিমার সতর্কতা:
#   ✗ "কোড ভালো করো" (কখন থামবে? — অসীম ঘূর্ণন)
#   ✓ "টেস্ট সবুজ হলে থামো, রিপোর্টসহ"
#   আর মানুষের চোখ: লুপ চলাকালে Esc — হাত থাকবেই ব্রেকে</div>

<div class="diagram">
<div class="diag-title">স্বয়ংক্রিয় ঘড়ির যন্ত্রপাতি — The Clock-Work</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d18" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<circle cx="280" cy="80" r="34" class="ring"/><text class="lbl" x="280" y="76" text-anchor="middle">কাজ-চক্র</text><text class="lbl-sm" x="280" y="92" text-anchor="middle">/loop</text>
<rect class="node" x="15" y="20" width="140" height="38" rx="9"/><text class="lbl-sm" x="85" y="43">আদেশ + থামার-শর্ত</text>
<rect class="node-cyan" x="405" y="20" width="140" height="38" rx="9"/><text class="lbl-cyan" x="475" y="43">মাপকাঠি (টেস্ট)</text>
<rect class="node-leaf" x="405" y="115" width="140" height="38" rx="9"/><text class="lbl-leaf" x="475" y="138">সবুজ → থামা</text>
<rect class="node-purple" x="15" y="115" width="140" height="38" rx="9"/><text class="lbl" x="85" y="138">লাল → আবার</text>
<line x1="155.0" y1="45.0" x2="251.7" y2="61.1" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d18)"/>
<line x1="405.0" y1="45.0" x2="308.3" y2="61.1" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d18)"/>
<line x1="297.0" y1="109.5" x2="405.0" y2="128.5" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d18)"/>
<line x1="263.0" y1="109.5" x2="155.0" y2="128.5" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d18)"/>
<rect class="cell" x="15" y="162" width="530" height="22" rx="7"/><text class="lbl-sm" x="280" y="177">/goal = লক্ষ্য-দিকাশিখা: চক্রের উপরে দাঁড়ানো তীর — কোন চক্র কতদূর, সব তার হিসাবে</text>
</svg>
<div class="diag-cap">আদেশ → চক্র → মাপ: সবুজ থামা, লাল ফেরা — আর থামার-শর্তই যন্ত্রের বাতাস।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ঘড়ি-মিস্ত্রির সতর্কতা:</strong> থামার-শর্ত ছাড়া লুপ = টোকেন-পোড়ানো অসীম ঘূর্ণন; শর্ত লেখো যাচাইযোগ্য ঘটনায় (টেস্ট-সবুজ, ফাইল-নেই, সংখ্যা-নাগাল) — অনুভূতিতে নয়। লুপের প্রতিটা রাউন্ড ছোট রাখো; বড় রাউন্ড মানে ভুল জমে ঘুরছে। আর স্বয়ংক্রিয়-ঘড়ির কাজে (স্ক্যাডিউল) অনুমতি-ঘর সংকুচিত রাখো (দরজা ৬): রাতের হাত যত সরু, ঘুম তত শান্ত।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The clock-winder's caution:</strong> a loop without a stop-condition burns tokens forever; write the condition as a verifiable event (tests green, file gone, number reached) — not a feeling. Keep each round small; a big round means errors are compounding. And for scheduled runs, keep the permission room narrow (Door 6): the thinner the night hand, the sounder the sleep.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ থামা-না-জানা যন্ত্র</div>"ভালো হোক" বলে ছেড়ে দেয় · প্রতি রাউন্ড হাতে আবার-টাইপ · লক্ষ্য দশ ধাপে ভুলে যায় · রাতের স্ক্যাডিউল চওড়া-অনুমতিতে</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ রহিমার ঘড়ি</div>/loop + যাচাইযোগ্য থামা-শর্ত · /goal-এ দিক-স্মৃতি · রুটিন স্ক্যাডিউলে বাঁধা · Esc-ব্রেক সবসময় হাতে</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">/loop</div><div class="sc-label">ছোট চক্র, মাপকাঠি-চালিত</div></div>
<div class="stat-card"><div class="sc-num">/goal</div><div class="sc-label">লক্ষ্য-দিকাশিখা</div></div>
<div class="stat-card"><div class="sc-num">cron</div><div class="sc-label">ঘড়ির সাথে বাঁধা</div></div>
<div class="stat-card"><div class="sc-num">Esc</div><div class="sc-label">মানুষের ব্রেক</div></div>
</div>

<p class="verse">তাওয়াক্কুলের মতোই: আমল বাঁধা থাকে নিয়মে (ঘড়ি বাঁধো), ফলের তাগিদ হাতছাড়া নয় — থামার ঘণ্টাটাও তুমিই বাজাবে; যে বাঁধে শুধু ঘূর্ণন, থামা বাঁধে না, তার তাওয়াক্কুল নয় — অলসতা।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🔁 /loop ছোট চক্র + থামা-শর্ত যাচাইযোগ্য; /goal দিক; রুটিন ঘড়িতে; ব্রেক Esc-এ।<br>কারণ: যে যন্ত্র থামতে জানে না, সে যন্ত্র একদিন নিজেকেই ভাঙে।</div></div>`,
  senior: {
    title: "ঘড়ি-মিস্ত্রির খাতা — The Clock-Winder's Ledger",
    body: `<ul class="checklist">
<li>পুনরাবৃত্ত কাজ দেখলেই ভাবো: <strong>/loop</strong> — শর্তসহ একবার লেখা, বহুবার ঘোরা।</li>
<li>বড় মাল্টি-ধাপ কাজে <strong>/goal</strong> — দিক-স্মৃতি সেশনজুড়ে।</li>
<li>থামা-শর্ত লেখো <strong>ঘটনায়</strong>: টেস্ট-সবুজ/ফাইল-নেই/সংখ্যা — অনুভূতিতে নয়।</li>
<li>রুটিন কাজ ঘড়িতে: <strong>schedule/cron</strong> — কোথায় চলবে সেই-অনুযায়ী যন্ত্র বাছো।</li>
<li>স্ক্যাডিউল-রানে <strong>অনুমতি সরু</strong> (দরজা ৬) + প্রতি রানের রিপোর্ট পড়ার অভ্যাস।</li>
</ul>`
  }
});

// ── DOOR 19 · গোলাম কিবরিয়ার দলিল-ঘর — Golam Kibria's Deed-Room ──
doors.push({
  num: 19,
  icon: "🐙",
  color: "#86efac",
  name: "গোলাম কিবরিয়ার দলিল-ঘর",
  subtitle: "Golam Kibria's Deed-Room",
  tech: "Git workflows · gh PR · commit discipline · --worktree · PR badge",
  spirit: "শাহাদত — লেখা থাকলে সাক্ষী দেয়",
  secret: "Claude-এর প্রতিটা কাজ দলিল-ঘরে পাঠাও: ছোট commit (এক কাজ এক দলিল), শাখা থেকে PR (চোখের দরজা), gh দিয়ে তৈরি-মিলন-প্রতিক্রিয়া — আর মনে রেখো checkpoint নয়, দলিলই চিরস্থায়ী ফেরা (B61-এর ভাই)।",
  recall: {
    q: "Claude দিয়ে একটা ফিচার বানাতে বসেছ। কাজ শেষে কীভাবে জমা দেবে যেন দল দেখে মেলায় — commit-ধারা, PR, আর সেশন-PR সংযোগ? তিন ধাপের রীতি বলো।",
    qen: "Claude built a feature. How do you submit so the team reviews and merges — commit discipline, PR flow, and linking the session to the PR? Give the three-step ritual.",
    a: "① দলিল-ধারা: বড় কাজ ভাঙো ছোট commit-এ — 'এক কাজ এক দলিল'; Claude-কে বলো 'commits ছোট রাখো, বার্তায় কী-কেন' (B61-এর ছবি-আলবাম)। ② শাখা + PR: 'একটা শাখা বানিয়ে কাজ করো, শেষে gh pr create --fill' — Claude নিজেই শিরোনাম-বিবরণ লেখে, তুমি চোখ বুলাও। PR-খোলা শাখায় নিচের বাজুতে PR-নম্বর জ্বলে — সবুজ/হলুদ দাগে মিলন-যোগ্যতা। ③ প্রতিক্রিয়া-চক্র: reviewer-মন্তব্য এলে 'PR ১২৩-এর মন্তব্যগুলো ধরে ধরে ঠিক করো' — আর পরে খুঁজতে: claude --from-pr 123 (সেশন-পিকার PR-ফিল্টারে খোলে)। সাবধান: push-এর আগে হাত-রিভিউ — দলিল একবার গেলে ইতিহাস (B61)।",
    aen: "① Commit discipline: break big work into small commits — one task, one deed; tell Claude 'keep commits small, each message saying what and why' (B61's photo-album). ② Branch + PR: create a branch, then gh pr create --fill — Claude writes title and body; you eyeball them. On a PR branch the footer shows a PR badge — green/yellow marking mergeability. ③ Review cycle: when comments arrive: fix the review comments on PR 123; later, claude --from-pr 123 reopens the session picker filtered to that PR. Caution: hand-review before push — once the deed is registered, it is history (B61)."
  },
  story: `<p class="scene-setting">গোলাম কিবরিয়া জমিদার-বংশের দলিল-ঘরের রক্ষক — শ'খানেক বছরের কবলা, দাখিলা, নামজারি তাঁর আলমারিতে। তাঁর তিন নিয়ম বিখ্যাত। প্রথম: এক কাজের এক দলিল — বিক্রয়ের কাগজে বিয়ের খবর লেখা যায় না; মিশ্র-দলিল পরে সবচেয়ে বড় ঝামেলা। দ্বিতীয়: নতুন কাজ নতুন ফাইলে — খসড়া আলাদা, চূড়ান্ত আলাদা; মালিকের চোখ পড়ে তবেই খাতায় তোলে (PR-এর মতো)। তৃতীয়: প্রতিটা দলিলের প্রান্তে লাল সিল — এক নজরে বোঝা যায় কোনটা মিলন-যোগ্য, কোনটা ঝুলছে। এক নতুন লেখক জিজ্ঞেস করল: কালকের মতো আজও তো লিখলাম, তফাত কী? কিবরিয়া সাহেব খাতা উল্টে দেখালেন: কাল তোমার খসড়া ছিল টেবিলে — ফাঁকি দেওয়া যেত; আজ সে আলমারিতে — এখন সে ইতিহাস, ইতিহাস ফেরানো যায় না, শুধু নতুন দলিলে বাতিল করা যায় (revert, B61)।</p>
<p class="scene-setting en">Golam Kibria keeps the estate's deed-room — a hundred years of land deeds in his cabinets. Three famous rules. First: one deed per transaction — a sale deed must not carry wedding news; mixed deeds become the worst disputes later. Second: new work in a new file — drafts separate from the register; the owner's eye passes, then it enters the book (like a PR). Third: a red seal on each deed's edge — one glance shows which is ready to merge, which hangs. A young writer once asked: I wrote today as I wrote yesterday; what changed? Kibria turned the ledger: yesterday your draft lay on the table — it could be retracted; today it sits in the cabinet — it is history now; history is not rewritten, only cancelled by a newer deed (revert, B61).</p>

<div class="code-block"># দলিল-ধারা (Claude-কে বলো):
> এই ফিচারটা ৩-৪টা ছোট commit-এ করো; প্রতিটার
> বার্তায় কী বদলাল আর কেন — আলাদা আলাদা
#   git add -p ধাঁচের শৃঙ্খলা — B61 দরজা ২-এর পাঠ

# শাখা + PR (এক লাইনে):
> feature/payment-v2 শাখা বানাও, কাজ শেষে
> gh pr create --fill করো
#   --fill: শিরোনাম+বিবরণ Claude-ই লেখে (commit-বার্তা থেকে)
#   শাখায় থাকলে নিচের বাজু: PR #12 ✓সবুজ / টেবিল-চিহ্ন
#   (gh auth login থাকতে হবে; নইলে বাজুতেই মনে করিয়ে দেবে)

# রিভিউ-চক্র:
> PR ১২-এর review মন্তব্যগুলো একে একে ধরো, ছোট ছোট commit-এ ঠিক করো
# পরে সেশন ফিরে পেতে:
claude --from-pr 12          # সেশন-পিকার PR-ফিল্টারে

# প্রতিদ্বন্দ্বী-মুক্ত প্যারালাল (দরজা ১৭-এর সাথে):
claude --worktree fix-login   # আলাদা চেকআউট, আলাদা শাখা
#   প্রথম commit-হীন রিপোতে ব্যর্থ — আগে একটা দলিল লাগবেই

# সাবধানতা-সারি:
#   • push-এর আগে নিজের চোখে diff — দলিল একবার গেলে ইতিহাস
#   • মিশ্র-commit নয় (B61): এক কাজ এক দলিল
#   • checkpoint (দরজা ৫) ফেরায় শুধু সেশনের এডিট — দলিল নয়;
#     subagent-এডিটও নয় — ওরা git-এর জমি (B61)</div>

<table class="kv-table">
<tr><th>কাজ</th><th>আদেশ/উপায়</th><th>মনে রাখার ছল</th></tr>
<tr><td class="hl">ছোট commit</td><td>"৩-৪ commit-এ ভাঙো, বার্তায় কী-কেন"</td><td>এক কাজ এক দলিল</td></tr>
<tr><td class="hl">PR তৈরি</td><td>gh pr create --fill</td><td>খসড়া → মালিকের চোখ → খাতা</td></tr>
<tr><td class="hl">PR-অবস্থা</td><td>নিচের বাজু (gh-token লাগবে)</td><td>লাল সিল: সবুজ=মিলন-যোগ্য</td></tr>
<tr><td class="hl">রিভিউ-ফিক্স</td><td>"PR N-এর মন্তব্য ধরে ধরে ঠিক করো"</td><td>নতুন দলিলে বাতিল, ইতিহাস নয়</td></tr>
<tr><td class="hl">সেশন-ফেরা</td><td>claude --from-pr N</td><td>দলিল খুঁজে ঘরটাও পাও</td></tr>
</table>

<div class="diagram">
<div class="diag-title">দলিল-ঘরের রীতি — The Deed-Room Ritual</div>
<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d19" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="55" width="140" height="44" rx="10"/><text class="lbl" x="85" y="73">শাখা</text><text class="lbl-sm" x="85" y="89">feature/…-এ কাজ</text>
<rect class="node-cyan" x="185" y="55" width="140" height="44" rx="10"/><text class="lbl-cyan" x="255" y="73">ছোট দলিল</text><text class="lbl-sm" x="255" y="89">এক কাজ এক commit</text>
<rect class="node-hot" x="355" y="55" width="100" height="44" rx="10"/><text class="lbl-hot" x="405" y="73">PR</text><text class="lbl-sm" x="405" y="89">চোখের দরজা</text>
<rect class="node-leaf" x="475" y="55" width="70" height="44" rx="10"/><text class="lbl-leaf" x="510" y="73">মিলন</text><text class="lbl-sm" x="510" y="89">merge</text>
<line x1="155.0" y1="77.0" x2="185.0" y2="77.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d19)"/>
<line x1="325.0" y1="77.0" x2="355.0" y2="77.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d19)"/>
<line x1="455.0" y1="77.0" x2="475.0" y2="77.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d19)"/>
<rect class="cell" x="15" y="115" width="530" height="42" rx="8"/>
<text class="lbl-sm" x="280" y="131">push-এর আগে হাত-চোখ · PR-বাজুতে সিল (সবুজ/হলুদ) · রিভিউ-ফিক্স = নতুন দলিল (revert-পথ)</text>
<text class="lbl-sm" x="280" y="149">পরে ঘর ফিরে পেতে claude --from-pr N · প্যারালালে --worktree · ফেরার গভীর নিয়ম B61-এ</text>
</svg>
<div class="diag-cap">শাখা → ছোট দলিল → PR → মিলন; প্রতিটা ধাপে মানুষের চোখ — এই রীতিই দলের বিশ্বাস।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দলিল-ঘরের সতর্কতা:</strong> gh-টুলের অনুমতি আগে থেকে দিয়ে রাখো (settings-এ allow: gh pr create) নইলে প্রতি ধাপে প্রশ্ন; আর PR-বাজু চাইলে gh auth login করা থাকতে হবে। বড় কথা: Claude-এর লেখা commit-বার্তা/PR-বিবরণ চমৎকার হয় — কিন্তু চোখ বুলানো তোমার দায়িত্বই; দলিল একবার আলমারিতে গেলে সে ইতিহাস। মিশ্র-commit (এক commit-এ ফিচার+রিফ্যাক্টর+টাইপো) reviewer-এর ঘাড়-ব্যথার প্রধান কারণ।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The deed-room caution:</strong> pre-allow gh in settings (allow: gh pr create) to avoid prompt-spam; PR badges need gh auth login. And the big one: Claude's commit messages and PR bodies are excellent — but eyeballing remains your duty; once in the cabinet, it is history. Mixed commits (feature + refactor + typo in one) are reviewers' chief neck-pain.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ মিশ্র-দলিলের মালিক</div>এক commit-এ সব · সরাসরি main-এ push · PR-বিবরণ না পড়ে merge · checkpoint-কেই git ভাবে</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ কিবরিয়ার রীতি</div>শাখা → ছোট দলিল → PR → চোখ → মিলন · রিভিউ-ফিক্স নতুন দলিলে · --from-pr দিয়ে ঘর-ফেরা</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">--fill</div><div class="sc-label">PR-লেখা Claude-এর হাতে</div></div>
<div class="stat-card"><div class="sc-num">PR #N ✓</div><div class="sc-label">বাজু-সিল: সবুজ=মিলন-যোগ্য</div></div>
<div class="stat-card"><div class="sc-num">--from-pr</div><div class="sc-label">দলিল ধরে সেশন-ফেরা</div></div>
<div class="stat-card"><div class="sc-num">--worktree</div><div class="sc-label">প্যারালাল-দলিল, সংঘর্ষমুক্ত</div></div>
</div>

<p class="verse">শাহাদত: লিখিত থাকলে সাক্ষী দেয় — কুরআনের দালিলিক নির্দেশ: লিখে রাখো, সাক্ষী রাখো (২:২৮২-এর ভাবানুবাদ)। দলিল-ঘরও: প্রতিটা কাজের লিখিত দলিল (commit), মালিকের চোখ (review), সিল (CI/PR-অবস্থা) — বিশ্বাস ব্যক্তির মুখে নয়, রীতির খাতায়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">🐙 শাখায় কাজ, ছোট দলিলে জমা, PR-এ চোখ, তারপর মিলন; ফেরা --from-pr, প্যারালাল --worktree।<br>কারণ: টেবিলের খসড়া ফেরানো যায় — আলমারির দলিল ইতিহাস।</div></div>`,
  senior: {
    title: "দলিল-ঘরের খাতা — The Deed-Room Ledger",
    body: `<ul class="checklist">
<li>কাজ শুরুতেই শাখা: <strong>"feature/… বানাও"</strong> — main-এ সরাসরি নয়।</li>
<li>commit-নির্দেশ: <strong>"ছোট ছোট commit, বার্তায় কী-কেন"</strong> — মিশ্র-দলিল নিষেধ।</li>
<li>PR: <strong>gh pr create --fill</strong> + নিজে চোখ — শিরোনাম-বিবরণ যাচাই।</li>
<li>রিভিউ-মন্তব্য: <strong>"PR N-এর মন্তব্য ধরে ধরে ঠিক করো"</strong> — প্রতি ফিক্স আলাদা commit।</li>
<li>সেশন-হারালে <strong>claude --from-pr N</strong>; প্যারালাল কাজে <strong>--worktree</strong>।</li>
<li>মনে রেখো সীমানা: checkpoint-ফেরা ≠ git-ফেরা — ইতিহাসের বিধান B61-এ।</li>
</ul>`
  }
});

// ── DOOR 20 · প্ল্যানার সাহেবের নকশা-টেবিল — The Planner's Drafting Table ──
doors.push({
  num: 20,
  icon: "📐",
  color: "#7dd3fc",
  name: "প্ল্যানার সাহেবের নকশা-টেবিল",
  subtitle: "The Planner's Drafting Table",
  tech: "Plan mode · Shift+Tab · todos · verification discipline",
  spirit: "ইস্তিখারা — বড় পথে পা ফেলার আগে থামা",
  secret: "বড় কাজে আগে নকশা: Shift+Tab-এ plan মোড — Claude পড়ে-ভাবে-লেখে, হাত বাঁধা; Enter-এ নকশা তোমার চোখে, তবেই ইট-পাথর ছোঁয়; চলার পথে todo-তালিকা আর প্রতি দাবির যাচাই — নকশা ছাড়া বড় কাজ পথ হারায়।",
  recall: {
    q: "একটা বড় রিফ্যাক্টর দরকার — ভুল হলে অনেক ভাঙবে। কোন মোডে শুরু করবে, কী দেখবে, কখন কাজ শুরু হবে — আর কাজ চলাকালীন দিক-হারানো রোধের যন্ত্র কী?",
    qen: "A big refactor is due — mistakes will break much. Which mode to start in, what you review, when work begins — and which tool prevents drift mid-task?",
    a: "শুরু: plan মোড — claude --permission-mode plan বা সেশনে Shift+Tab চক্রে ⏸ plan mode on; এ মোডে Claude শুধু পড়ে ও ভাবে — এডিট/কমান্ড নয়। সে নকশা লেখে (সম্পাদনা-যোগ্য — Enter-এ খুলে নিজের হাতে ঘষামাজা); তোমার চোখ ও সম্পাদনার পর Enter — তবেই আসল কাজ শুরু। চলার পথে দুই রক্ষী: Claude নিজে নিজের todo-তালিকা টানে (Ctrl+T-তে দেখা/লুকানো) — কোন ধাপ শেষ, কোনটা বাকি; আর যাচাই-শৃঙ্খলা: প্রতিটা দাবির পর 'টেস্ট চালাও', শেষে /verify জাতীয় চূড়ান্ত প্রমাণ। নকশা → অনুমোদন → ধাপ-হিসাব → প্রমাণ: বড় কাজের চার স্তম্ভ।",
    aen: "Start: plan mode — claude --permission-mode plan, or Shift+Tab cycles to plan mode on; Claude only reads and thinks — no edits, no commands. It drafts a plan (editable — press Enter to open and adjust by hand); after your review and edits, Enter again — then real work begins. Two guards en route: Claude maintains its own todo checklist (Ctrl+T toggles visibility) — which steps are done, which remain; and the verification chain: after each claim 'run the tests', at the end /verify-style final proof. Plan → approve → step-ledger → proof: the four pillars of big work."
  },
  story: `<p class="scene-setting">শহরের প্ল্যানার সাহেব বাড়ি-আলোড়ার নকশা আঁকেন — আর তাঁর টেবিলের নিয়ম ঠিকাদারদের কাছে কিংবদন্তি। কোনো ঠিকাদার এসে বললে "কাজ শুরু দিন", তিনি আগে বসান নকশা-টেবিলে: কাগজ, মাপ, খাতা। প্রথম ধাপ: তিনি নিজে ঘুরে ঘুরে দেখেন — জমি, পথ, পানির ধার (Claude-র পড়া); দ্বিতীয়: নকশা আঁকেন — কোন দেয়াল কোথায়, কোনটা ভাঙবে, কোনটা নতুন; তৃতীয়: মালিকের চোখ — নকশা দেখান, প্রশ্ন নেন, ঘষামাজা হয়; চতুর্থ: সবুজ সিল — তারপর তবেই ইট ছোঁয়। আর কাজ শুরু হলে তাঁর সাদা বোর্ড: ধাপে ধাপে টিক দেওয়া তালিকা — কোন ঘর হয়েছে, কোনটা বাকি; কাজ শেষে হাঁটাহাঁটির পরীক্ষা — দরজা খোলে কি না, পানি নামে কি না। তাঁর বিখ্যাত উক্তি: নকশা-হীন কাজ শুধু সময় খায় না — ইট খায়; আর টিক-হীন তালিকা শুধু কাজ নয়, বিশ্বাস ভাঙে।</p>
<p class="scene-setting en">The city's planner drafts house plans — and his table's rules are legend among contractors. When a contractor says 'give me the start date', he first sits him at the drafting table: paper, measures, ledger. Step one: he walks the land himself — soil, roads, waterlines (Claude's reading); step two: he drafts — which wall goes where, what breaks, what is new; step three: the owner's eye — plan shown, questions asked, adjustments made; step four: the green seal — only then does brick touch brick. And once work starts, his white board: a checklist ticked step by step — which rooms are done, which remain; at the end, the walk-through test — do doors open, does water drain. His famous saying: planless work eats not just time — it eats bricks; and a tick-less list breaks not just work but trust.</p>

<div class="code-block"># নকশা-মোডে শুরু:
claude --permission-mode plan     # বা সেশনে Shift+Tab → "⏸ plan mode on"
> পেমেন্ট-মডিউল Postgres-এ মাইগ্রেট করার পূর্ণ পরিকল্পনা দাও:
> মডেল, মাইগ্রেশন-ক্রম, ঝুঁকি, রোলব্যাক-পথ
#   Claude শুধু পড়ে-ভাবে; এডিট নয় (দরজা ৬-এর স্কেলের বাম-প্রান্ত)
# নকশা এলে:
#   Enter → টেক্সট-এডিটরে নকশা খোলে — নিজের হাতে ঘষামাজা করো
#   (ধাপ যোগ/বাদ, বাউন্ডারি পরিষ্কার) → সেভ
#   তারপর অনুমোদন — তবেই Claude-র হাত খোলে

# চলার-পথের দুই রক্ষী:
#   ① todo-তালিকা: Claude নিজেই রাখে; Ctrl+T — দেখাও/লুকাও
#      (বড় কাজে বলো: 'todo আপডেট করে রাখো প্রতি ধাপে')
#   ② যাচাই-শৃঙ্খলা: প্রতি দাবির পর —
> টেস্ট চালাও, সবুজ দেখাও
#      চূড়ান্ত: /verify (বান্ডিল-স্কিল, দরজা ১০) — অ্যাপ
#      বানিয়ে-চালিয়ে প্রমাণ; টেস্টের ভরসায় নয়

# ছোট-বড় সিদ্ধান্ত-ছক:
#   ছোট ফিক্স → সরাসরি ডিফল্ট-মোড (নকশায় সময় নষ্ট নয়)
#   বড়/অপরিবর্তনীয় কাজ → আগে নকশা, পরে হাত
#   মাঝারি → প্রথম প্রম্পটেই বলো: "আগে পরিকল্পনা দেখাও, তারপর করো"</div>

<div class="diagram">
<div class="diag-title">নকশা-টেবিলের চার স্তম্ভ — The Four Pillars</div>
<svg viewBox="0 0 560 165" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ar59d20" viewBox="0 0 10 10" refX="9" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L0,6 L9,3 z" fill="#f97316"/></marker>
</defs>
<rect class="node" x="15" y="50" width="120" height="44" rx="10"/><text class="lbl" x="75" y="68">পড়া</text><text class="lbl-sm" x="75" y="84">জমি দেখা (read)</text>
<rect class="node-cyan" x="155" y="50" width="120" height="44" rx="10"/><text class="lbl-cyan" x="215" y="68">নকশা</text><text class="lbl-sm" x="215" y="84">খসড়া-দলিল (plan)</text>
<rect class="node-hot" x="295" y="50" width="120" height="44" rx="10"/><text class="lbl-hot" x="355" y="68">চোখ</text><text class="lbl-sm" x="355" y="84">Enter-সম্পাদনা + অনুমোদন</text>
<rect class="node-leaf" x="435" y="50" width="110" height="44" rx="10"/><text class="lbl-leaf" x="490" y="68">কাজ</text><text class="lbl-sm" x="490" y="84">todo ✓ · যাচাই ✓</text>
<line x1="135.0" y1="72.0" x2="155.0" y2="72.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d20)"/>
<line x1="275.0" y1="72.0" x2="295.0" y2="72.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d20)"/>
<line x1="415.0" y1="72.0" x2="435.0" y2="72.0" stroke="#f97316" stroke-width="3" fill="none" marker-end="url(#ar59d20)"/>
<rect class="cell" x="15" y="112" width="530" height="40" rx="8"/>
<text class="lbl-sm" x="280" y="128">Shift+Tab-চক্র: default → acceptEdits → plan → (bypass) → auto — স্ট্যাটাস-বারে মোডের নাম জ্বলে</text>
<text class="lbl-sm" x="280" y="146">নকশা শুধু বড় কাজে — ছোট ফিক্সে সরাসরি হাত; নইলে নকশা-টেবিলই অহেতুক ভিড় হয়</text>
</svg>
<div class="diag-cap">পড়া → নকশা → চোখ → কাজ; আর কাজের ভেতরে todo-টিক আর যাচাই — বিশ্বাসের দুই রক্ষী।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>প্ল্যানারের সতর্কতা:</strong> নকশা-মোড কাজ-মোড নয় — নকশা অনুমোদনের আগে Claude ইট ছোঁবে না, তাই "আরেকটু এগোও" বলে ফাঁকি দেওয়া যায় না; সবুজ সিল তোমার হাতে। নকশা সম্পাদনাযোগ্য — Enter-এ খুলে বাউন্ডারি নিজে লেখো ('এই ফাইলগুলো ছোঁবে না'); অনুমোদনের পরেও অনুমতি-ঘর (৬) পাহারা দেবে। আর প্রতিটা টাস্কে todo-না-রাখলে দশ ধাপের কাজ পাঁচে ভুলে যায় — টিক-হীন তালিকা বিশ্বাস ভাঙে।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The planner's caution:</strong> plan mode is not work mode — before approval Claude touches no brick, so 'just proceed' cannot slip through; the green seal is yours. Plans are editable — press Enter, write boundaries yourself ('do not touch these files'); after approval the permission room (6) still stands guard. And without todos, ten-step work forgets itself at step five — a tick-less list breaks trust.</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ নকশা-ছাড়া ইট</div>বড় রিফ্যাক্টর সরাসরি শুরু · নকশা পড়াই যায়নি, সিল দেওয়া · কাজ মাঝপথে দিক হারায় · "হয়ে গেছে" কথায় বিশ্বাস, প্রমাণ নয়</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ প্ল্যানারের টেবিল</div>বড় কাজ = আগে প্ল্যান-মোড · নকশা নিজের হাতে ঘষামাজা → অনুমোদন · প্রতি ধাপে todo-টিক · শেষে /verify-প্রমাণ</div>
</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">⏸ plan</div><div class="sc-label">Shift+Tab-চক্রের থামা</div></div>
<div class="stat-card"><div class="sc-num">Ctrl+T</div><div class="sc-label">todo-তালিকার চোখ</div></div>
<div class="stat-card"><div class="sc-num">Enter</div><div class="sc-label">নকশা-সম্পাদনার দরজা</div></div>
<div class="stat-card"><div class="sc-num">/verify</div><div class="sc-label">চূড়ান্ত প্রমাণ — অ্যাপ চালিয়ে</div></div>
</div>

<p class="verse">ইস্তিখারার শিক্ষা: বড় সিদ্ধান্তের আগে থামা, পরামর্শ, তারপর পথ — রাসূল নিজে শিখিয়েছেন প্রতিটি গুরুত্বপূর্ণ কাজে সালাতুল-ইস্তিখারা (বুখারি)। প্ল্যানার সাহেবের টেবিলও: পড়া, নকশা, মালিকের চোখ — তারপর ইট; ছোট কাজে যেমন জটিলতা নয়, বড় কাজে তেমন তাড়াহুড়ো নয়।</p>

<div class="secret-box"><div class="label">তালিসমান — Talisman</div><div class="text">📐 বড় কাজে আগে ⏸ plan, নকশা Enter-এ নিজের হাতে, অনুমোদন পরে ইট; পথে Ctrl+T-টিক, শেষে প্রমাণ।<br>কারণ: নকশা-হীন কাজ ইট খায়; টিক-হীন তালিকা বিশ্বাস।</div></div>`,
  senior: {
    title: "নকশা-টেবিলের খাতা — The Drafting-Table Ledger",
    body: `<ul class="checklist">
<li>বড়/অপরিবর্তনীয় কাজে প্রথম কমান্ড: <strong>plan মোড</strong> (--permission-mode plan বা Shift+Tab)।</li>
<li>নকশা এলে <strong>Enter → সম্পাদনা</strong> — বাউন্ডারি-লাইন নিজে লেখো, তারপর অনুমোদন।</li>
<li>কাজ চলাকালে <strong>Ctrl+T</strong> — Claude-র todo-তালিকা চোখে রাখো; বড় কাজে "প্রতি ধাপে todo আপডেট করো"।</li>
<li>প্রতিটা দাবির পর <strong>যাচাই-আদেশ</strong>; শেষে <strong>/verify</strong> — অ্যাপ চালিয়ে প্রমাণ।</li>
<li>ছোট ফিক্সে নকশা-টেবিল বাদ — সরাসরি হাত; নিয়মের বোঝা কাজের সমানুপাতিক।</li>
</ul>`
  }
});

