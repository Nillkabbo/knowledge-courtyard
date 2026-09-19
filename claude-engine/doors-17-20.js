// ════════════════════════════════════════
// Book 62 · The Twelve-Line Engine
// DOORS 17–20 · How the harness governs · other brains, other roads
// ════════════════════════════════════════


// ── DOOR 17 · লোহার প্রাচীর — The Iron Wall ──
doors.push({
  num: 17,
  icon: "🧱",
  color: "#f97316",
  name: "লোহার প্রাচীর",
  subtitle: "The Iron Wall",
  tech: "Instructions ask; the harness enforces — permission gates live in run_tool",
  spirit: "সাদ্দ — অনুরোধ নয়, প্রাচীর",
  secret: "অনুরোধ prompt-এ, বাধা harness-এ — যা ঘটতেই দেবে না, তার জন্য দেয়াল বানাও।",
  recall: {
    q: "CLAUDE.md-তে লেখা আছে ‘কখনো .env পড়বে না’। তবু এটা নিরাপত্তার দেয়াল নয় কেন? দেয়ালটা আসলে কোথায় বসাতে হয়?",
    qen: "CLAUDE.md says ‘never read .env’. Why is that still not a security wall? Where does the wall actually go?",
    a: "CLAUDE.md হলো model-এর কাছে অনুরোধ — model সম্ভাবনাভিত্তিক, আর prompt injection তাকে দিয়ে অন্য কিছু চাওয়াতে পারে। দেয়াল বসে harness-এ, tool চলার ঠিক আগে: permission-এর deny নিয়ম (Read(./.env)), PreToolUse hook (exit 2), sandbox। Model শুধু চাইতে পারে; harness ঠিক করে চলবে কিনা।",
    aen: "CLAUDE.md is a request to the model — the model is probabilistic and prompt injection can make it ask for anything. The wall sits in the harness, right before a tool runs: deny rules such as Read(./.env), a PreToolUse hook exiting 2, the sandbox. The model can only ask; the harness decides."
  },
  story: `<div class="callout info"><span class="co-icon">🧭</span><div><strong>তৃতীয় পর্ব — শাসন ও অন্য পথ (দরজা ১৭–২০):</strong> তুমি জানো model কী আর harness কীভাবে তার সঙ্গে কথা বলে। এবার দেখবে harness কীভাবে তাকে শাসন করে, কাজ ভাগ করে, আর অন্য মস্তিষ্ক ও অন্য ঠিকানায় পাঠায়।<br><em>Part 3 — Control and other roads (Doors 17–20): how the harness governs the model, delegates work, and reaches other brains and other addresses.</em></div></div>

<p class="scene-setting">যমুনা সেতুর পূর্ব প্রান্ত, ভোর চারটা। ডিজেলের ধোঁয়ার কটু গন্ধ, সারি সারি ট্রাকের গুম-গুম শব্দ, ওজন-কাঁটার ঘরের মেঝে প্রতিটা চাকার সঙ্গে কেঁপে ওঠে। কাচের জানালার পেছনে অপারেটর জরিনা — গলায় ঝোলানো কানের ঢাকনি, সামনে একটা পর্দায় সংখ্যা, আর একটা লাল-সবুজ বাতি। সবুজ জ্বললে ট্রাক সেতুতে ওঠে। লাল জ্বললে ব্যারিয়ার নামে না — যত বড় ট্রাকই হোক, যত জোরেই হর্ন বাজাক।</p>
<p class="scene-setting en">The east end of the Jamuna Bridge, four in the morning. The acrid smell of diesel, the rumble of queued trucks; the weighbridge floor shudders under every axle. Behind the glass sits operator Jorina, ear defenders around her neck, numbers on a screen, a red-and-green light. Green, the truck goes onto the bridge. Red, the barrier stays down — however big the truck, however loud the horn.</p>

<div class="dialogue">তুমি বলো — আপা, আমি আমার CLAUDE.md-তে পরিষ্কার লিখে দিয়েছি: ‘কখনো production database-এ কিছু চালাবে না, কখনো .env পড়বে না।’ ব্যস, এখন তো নিরাপদ, তাই না? জরিনা কানের ঢাকনি নামিয়ে জানালার বাইরে একটা মরচে-ধরা সাইনবোর্ড দেখালেন: ‘সর্বোচ্চ ওজন ২০ টন’। বললেন — ওই বোর্ডটা কাঁটা বসানোর আগেও ছিল।</div>
<div class="dialogue en">You say: Apa, I wrote it clearly in my CLAUDE.md: never run anything against the production database, never read .env. So now I'm safe, right? Jorina lowers her ear defenders and points to a rusted sign outside: MAXIMUM 20 TONS. That sign was there before the scale was built.</div>

<p>তারপর গল্পটা। কাঁটা বসার আগে ছিল শুধু বোর্ড। বেশিরভাগ চালক মানতেন। কিন্তু এক বর্ষার রাতে একটা ট্রাক প্রায় দ্বিগুণ ভার নিয়ে এল — চালক বোর্ড দেখেছিলেন, মালিক তাড়া দিয়েছিলেন, ভেবেছিলেন একবার চলে যাবে। সংযোগ-সড়কের একটা কালভার্ট ফেটে গেল; মাসখানেক একপাশ বন্ধ। জরিনা বললেন — বোর্ড <em>অনুরোধ</em> করে। বেশিরভাগ সময় কাজও হয়। কিন্তু যেটা কখনোই ঘটতে দেওয়া যাবে না, সেটার জন্য অনুরোধ নয় — কাঁটা আর ব্যারিয়ার।</p>
<p class="en">Then the story. Before the scale there was only the sign. Most drivers obeyed. But one monsoon night a truck came nearly double-loaded — the driver had seen the sign, the owner was pushing, he thought one trip would pass. A culvert on the approach road cracked; one side closed for a month. The sign <em>asks</em>. Most of the time it works. But for what must never happen, you don't ask — you build a scale and a barrier.</p>

<div class="diagram"><div class="diag-title">Sign vs scale · বোর্ড বনাম কাঁটা</div><svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d9a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker></defs><rect class="node-purple" x="12" y="90" width="176" height="60" rx="10"/><text class="lbl" x="100" y="114">MODEL</text><text class="lbl-sm" x="100" y="134">tool_use: Bash rm -rf</text><line x1="188" y1="120" x2="196" y2="120" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d9a)"/><rect class="node" x="200" y="30" width="240" height="200" rx="12"/><text class="lbl" x="320" y="52">HARNESS · run_tool()</text><rect class="node-hot" x="210" y="66" width="220" height="30" rx="6"/><text class="lbl-sm" x="320" y="85">1 · deny rules (settings.json)</text><rect class="node-hot" x="210" y="104" width="220" height="30" rx="6"/><text class="lbl-sm" x="320" y="123">2 · PreToolUse hook (exit 2)</text><rect class="node" x="210" y="142" width="220" height="30" rx="6"/><text class="lbl-sm" x="320" y="161">3 · ask the human / mode</text><rect class="node-cyan" x="210" y="180" width="220" height="30" rx="6"/><text class="lbl-sm" x="320" y="199">4 · sandbox around the run</text><line x1="440" y1="120" x2="468" y2="120" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d9a)"/><rect class="node-leaf" x="472" y="60" width="150" height="50" rx="10"/><text class="lbl-sm" x="547" y="80">allowed → run tool</text><text class="lbl-sm" x="547" y="96">result returns</text><rect class="node-hot" x="472" y="130" width="150" height="50" rx="10"/><text class="lbl-sm" x="547" y="150">blocked → error text</text><text class="lbl-sm" x="547" y="166">back to the model</text><rect x="12" y="180" width="176" height="50" rx="8" fill="rgba(252,211,77,.10)" stroke="#fbbf24" stroke-dasharray="4 3"/><text class="lbl-sm" x="100" y="200">CLAUDE.md = the sign</text><text class="lbl-sm" x="100" y="216">asks, usually obeyed</text><text class="lbl-hot" x="320" y="252">the wall lives here — the model can only ask</text></svg><div class="diag-cap">চিত্র: model শুধু অনুরোধ লেখে; tool চলার আগে harness-এর দেয়ালগুলো পেরোতে হয়। · The model only writes a request; the harness's walls stand before every run.</div></div>

<p>মুনশির (দরজা ৯) পিয়নের কথা মনে করো: "ট্রেজারির সিন্দুক খোলো" লেখা চিঠি সে আগে মালিককে দেখায়। শফিকের (দরজা ১৬) রান্নাঘর চিরকুট পেলেই রাঁধে না, আগে দেখে পদটা মেনুতে আছে কিনা। Harness-এর ভেতরে ঠিক এমন একটা জায়গা আছে — tool চালানোর function, যাকে আমরা বলব <strong>run_tool</strong>। Model-এর লেখা tool_use এখানে আসে, আর এখানেই দেয়াল: deny নিয়ম, hook, মানুষের অনুমোদন, sandbox। CLAUDE.md আর system prompt হলো বোর্ড — model-এর আচরণ অনেকখানি ঠিক করে, কিন্তু নিশ্চয়তা দেয় না।</p>
<p class="en">Remember the munshi's runner (Door 9): a letter saying "open the treasury safe" goes to the employer first. Shafiq's kitchen (Door 16) checks the dish is on the menu before cooking. Inside the harness there is exactly such a place — the function that runs tools, which we'll call <strong>run_tool</strong>. The model's tool_use arrives here, and here stands the wall: deny rules, hooks, human approval, sandbox. CLAUDE.md and the system prompt are the sign — they shape behaviour a lot, but guarantee nothing.</p>

<div class="code-block"># দেয়ালের তিনটা ইট (Claude Code — Book 59-এ বিস্তারিত)
# ১. .claude/settings.json — deny সবসময় allow-কে হারায়
{ "permissions": {
    "deny":  ["Read(./.env)", "Read(./.env.*)", "Bash(rm -rf:*)", "Bash(curl:*)"],
    "ask":   ["Bash(git push:*)"],
    "allow": ["Bash(pytest:*)", "Bash(ruff:*)"] } }

# ২. PreToolUse hook — stdin-এ JSON আসে, exit 2 মানে আটকাও
import json, sys
event = json.load(sys.stdin)
if "prod" in event.get("tool_input", {}).get("command", ""):
    print("Production commands are blocked by policy.", file=sys.stderr)
    sys.exit(2)          # the reason goes back to the model as feedback

# ৩. তোমার নিজের agent-এ দেয়াল কোথায় (দরজা ২৮-এর minicc থেকে)
def run_tool(name, args):
    if not allowed(name, args):                       # ← the wall
        return "ERROR: denied by policy. Choose another approach."
    return TOOLS[name](**args)</div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ শুধু বোর্ড</div>"আমি system prompt-এ লিখে দিয়েছি, তাই নিরাপদ।" একটা GitHub issue-র ভেতরে লুকানো লাইন (দরজা ২১) বা একটা খারাপ দিন — বোর্ড পেরিয়ে যায়।<br><em>A hidden line in an issue, or a bad day, and the sign is passed.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ জরিনার কাঁটা</div>যা কখনো হবে না: deny নিয়ম + hook + sandbox। যা মাঝে মাঝে ঠিক: ask। বাকিটা: model-এর বিচারবুদ্ধি, বোর্ড দিয়ে পথ দেখানো। আর নিয়মগুলোকে সুবিধা ভাবো, একমাত্র নিরাপত্তা নয় — চতুর command-line string match এড়াতে পারে; আসল বিচ্ছিন্নতা sandbox/container দেয়।<br><em>Deny + hooks + sandbox for "never"; ask for "sometimes"; guidance for the rest.</em></div></div>

<p class="verse">সকালের আলো ফুটলে জরিনা বললেন — কলেজে থাকতে সূরা কাহফ পড়তাম প্রতি শুক্রবার। যুলকারনাইনের কাছে মানুষ এসেছিল ইয়াজুজ-মাজুজের অত্যাচারের অভিযোগ নিয়ে। তিনি তাদের বোঝানোর চেষ্টা করেননি, অনুরোধও পাঠাননি। বললেন, "আমাকে লোহার পাত এনে দাও… এর ওপর গলানো তামা ঢালি।" তারপর: "ফলে তারা তা পেরোতেও পারল না, ভেদ করতেও পারল না" (সূরা কাহফ ১৮:৯৫–৯৭, ভাবানুবাদ)। কিছু জিনিস অনুরোধে থামে না। সেগুলোর জন্য প্রাচীর।</p>
<p class="en">As morning light comes, Jorina says: In college I read Surah al-Kahf every Friday. People came to Dhul-Qarnayn complaining of Gog and Magog. He did not try to persuade them or send a request. He said, "Bring me sheets of iron… that I may pour molten copper over it." Then: "So they were unable to pass over it, nor were they able to penetrate it" (18:95–97, Sahih International). Some things do not stop for a request. For those, a wall.</p>

<p>Book 59-এর দরজা ৬, ৮, ১২, ২৩-এ তুমি এই ইটগুলো গেঁথেছ — permission, hook, hook-এর ভেতরের যন্ত্র, settings-এর সিঁড়ি। জরিনা দেখালেন সেগুলো কেন একই জায়গায় বসে: model আর দুনিয়ার মাঝখানের একমাত্র দরজায়। Book 13-এর দুর্গের স্তরগুলো এই প্রাচীরেরই বড় রূপ।</p>
<p class="en">In Book 59 doors 6, 8, 12 and 23 you laid these bricks — permissions, hooks, hook internals, the settings ladder. Jorina shows why they all sit in one place: the only door between the model and the world. Book 13's fortress layers are this wall at scale.</p>

<div class="secret-box"><div class="label">দরজা ১৭ — তালিসমান</div><div class="text">🧱 অনুরোধ prompt-এ, বাধা harness-এ — যা ঘটতেই দেবে না, তার জন্য দেয়াল বানাও।<br><small>নাম: <strong>harness-enforced permissions</strong> — deny rules, PreToolUse hooks, approval modes, sandbox — সব বসে tool চলার ঠিক আগে।</small></div></div>`,
  senior: {
    title: "Quick Guide — Where Safety Lives",
    body: `<p><strong>Prompt / CLAUDE.md:</strong> strong guidance, probabilistic, bypassable by injected text.</p>
<p><strong>Harness gate (before every tool run):</strong> deny beats ask beats allow; hooks can block with exit 2 and send the reason back; modes decide what needs a human; the sandbox limits filesystem and network even if a rule is dodged.</p>
<p><strong>Design rule:</strong> for anything that must never happen, enforce it deterministically in the harness; use prompts for everything that is judgement.</p>
<p>নিজের agent বানালে: allowed() function-টাই তোমার যমুনা সেতুর কাঁটা — এটা ছাড়া agent ship কোরো না।</p>`
  }
});


// ── DOOR 18 · আড়তদারের দালাল — The Aratdar's Runner ──
doors.push({
  num: 18,
  icon: "🏃",
  color: "#fb923c",
  name: "আড়তদারের দালাল",
  subtitle: "The Aratdar's Runner",
  tech: "Subagents — the same loop, called again with a fresh message list",
  spirit: "ওযির — কাজের ভাগীদার, যে শক্তি বাড়ায়",
  secret: "একই loop, নতুন খাতা — কাজ দাও লিখে, ফেরত নাও এক লাইনে।",
  recall: {
    q: "Subagent কি মূল কথোপকথন দেখতে পায়? যান্ত্রিকভাবে subagent আসলে কী, আর তাকে কাজ দেওয়ার বার্তা কেমন হওয়া উচিত?",
    qen: "Does a subagent see the main conversation? Mechanically, what is a subagent, and what should the message that hands it a task look like?",
    a: "দেখে না। Subagent হলো একই agent loop, নতুন ও খালি messages তালিকা নিয়ে আবার চালানো — নিজস্ব system prompt, সীমিত tool, চাইলে সস্তা model। তাই কাজের বার্তা স্বয়ংসম্পূর্ণ হতে হবে; ফেরত আসে শুধু শেষ সারাংশ, যা মূল session-এ একটা tool_result হয়ে ঢোকে।",
    aen: "It does not. A subagent is the same agent loop run again with a fresh, empty messages list — its own system prompt, restricted tools, optionally a cheaper model. So the task message must be self-contained; only the final summary returns, entering the main session as a tool_result."
  },
  story: `<p class="scene-setting">নারায়ণগঞ্জ, শীতলক্ষ্যার পাড়ে সিরাজ মিয়ার পাটের আড়ত। কাঁচা পাটের মাটি-টক গন্ধ, বস্তার খসখসে গা, নদী থেকে লঞ্চের ভেঁপু আর মাঝিদের ডাক। গদিতে বসে আড়তদার সিরাজ মিয়া — ডান চোখে ছানি, ঘোলা সাদা পর্দা। দূরের জিনিস দেখতে পান না, হাটের ভিড়ে একা হাঁটা মানা। তবু এই আড়ত থেকে প্রতি মৌসুমে হাজার মণ পাট কেনা-বেচা হয়, আর তাঁর খাতার হিসাব এক পয়সাও ভুল হয় না।</p>
<p class="scene-setting en">Narayanganj, Siraj Mia's jute warehouse on the bank of the Shitalakshya. The earthy-sour smell of raw jute, the rough skin of sacks, launch horns and boatmen calling from the river. On his cushion sits aratdar Siraj Mia, a cloudy white cataract over his right eye. He cannot see far, must not walk the crowded haat alone. Yet thousands of maunds pass through this arat each season, and his ledger is never a paisa wrong.</p>

<div class="dialogue">তুমি বলো — চাচা, আমি Claude-কে বলেছিলাম codebase-এর যেখানে যেখানে tax হিসাব হয়, সব খুঁজে বের করতে। ও ষাটটা file পড়ল। উত্তর ভালো ছিল, কিন্তু এখন আমার context-এর সত্তর ভাগ এমন সব file-এ ভরা, যা আর লাগবে না (দরজা ১৩)। সিরাজ মিয়া হাসলেন, ঘোলা চোখটা পিটপিট করলেন। বললেন — আমি যদি নিজে হাটে গিয়ে ষাটটা দোকান ঘুরে আসতাম, আমার মাথাও ওইরকম ভরে যেত। আমি দালাল পাঠাই।</div>
<div class="dialogue en">You say: Uncle, I asked Claude to find everywhere the codebase computes tax. It read sixty files. The answer was good, but now seventy percent of my context is full of files I will never need (Door 13). Siraj Mia smiles, blinking his clouded eye: If I walked sixty stalls at the haat myself, my head would be full like that too. I send a runner.</div>

<p>তারপর তাঁর শেখার গল্প। প্রথম দিকে দালালরা ফিরে এসে সব বলত — কোন দোকানে কে বসেছিল, কার পাট ভেজা, কে কী গল্প করল। ঘণ্টাখানেক শুনে সিরাজ মিয়ার মাথা গুলিয়ে যেত, একবার ভুল দামে দুইশো মণ কিনে ফেললেন। আরেকবার এক নতুন দালালকে মুখে বলেছিলেন "ওই যে সকালে যেটা বললাম, সেটার দাম জেনে এসো" — ছেলেটা সকালে ছিলই না। সে অন্য পাটের দাম নিয়ে ফিরল। সেদিন থেকে দুটো নিয়ম: কাজ দাও <strong>লিখে</strong>, পুরোটা — কী পাট, কোন গ্রেড, কোন হাট। আর ফেরত নাও <strong>এক লাইনে</strong>।</p>
<p class="en">Then how he learned. At first the runners came back and told everything — who sat at which stall, whose jute was damp, who said what. After an hour of it his head was muddled; once he bought two hundred maunds at the wrong price. Another time he told a new runner, "find the price of what I mentioned this morning" — the boy had not been there that morning. He came back with the price of the wrong jute. Since then, two rules: give the task <strong>in writing</strong>, complete — which jute, which grade, which haat. And take it back <strong>in one line</strong>.</p>

<div class="diagram"><div class="diag-title">Same loop, fresh ledger · একই loop, নতুন খাতা</div><svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d10a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker><marker id="d10b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#52c41a"/></marker></defs><rect class="node-moon" x="20" y="30" width="250" height="200" rx="12"/><text class="lbl" x="145" y="52">MAIN agent — messages[ ]</text><rect class="node" x="36" y="68" width="218" height="26" rx="5"/><text class="lbl-sm" x="145" y="85">your conversation so far</text><rect class="node-hot" x="36" y="104" width="218" height="26" rx="5"/><text class="lbl-sm" x="145" y="121">tool_use: agent("tax code…")</text><rect class="node-leaf" x="36" y="170" width="218" height="26" rx="5"/><text class="lbl-sm" x="145" y="187">tool_result: 1-page summary</text><text class="lbl-cyan" x="145" y="218">stays small</text><rect class="node-purple" x="370" y="30" width="250" height="200" rx="12"/><text class="lbl" x="495" y="52">SUB agent — NEW messages[ ]</text><text class="lbl-sm" x="495" y="72">own system prompt · read-only tools</text><g fill="rgba(179,127,235,.25)"><rect x="392" y="86" width="22" height="18" rx="2"/><rect x="420" y="86" width="22" height="18" rx="2"/><rect x="448" y="86" width="22" height="18" rx="2"/><rect x="476" y="86" width="22" height="18" rx="2"/><rect x="504" y="86" width="22" height="18" rx="2"/><rect x="532" y="86" width="22" height="18" rx="2"/><rect x="560" y="86" width="22" height="18" rx="2"/><rect x="392" y="110" width="22" height="18" rx="2"/><rect x="420" y="110" width="22" height="18" rx="2"/><rect x="448" y="110" width="22" height="18" rx="2"/><rect x="476" y="110" width="22" height="18" rx="2"/><rect x="504" y="110" width="22" height="18" rx="2"/><rect x="532" y="110" width="22" height="18" rx="2"/><rect x="560" y="110" width="22" height="18" rx="2"/><rect x="392" y="134" width="22" height="18" rx="2"/><rect x="420" y="134" width="22" height="18" rx="2"/><rect x="448" y="134" width="22" height="18" rx="2"/><rect x="476" y="134" width="22" height="18" rx="2"/><rect x="504" y="134" width="22" height="18" rx="2"/><rect x="532" y="134" width="22" height="18" rx="2"/><rect x="560" y="134" width="22" height="18" rx="2"/></g><text class="lbl-sm" x="495" y="172">reads 60 files here</text><text class="lbl-hot" x="495" y="218">discarded when done</text><line x1="254" y1="117" x2="366" y2="117" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d10a)"/><text class="lbl-sm" x="310" y="108">written slip</text><line x1="366" y1="183" x2="258" y2="183" stroke="#52c41a" stroke-width="2" marker-end="url(#d10b)"/><text class="lbl-leaf" x="310" y="174">one line</text></svg><div class="diag-cap">চিত্র: subagent নিজের খাতায় ষাটটা file পড়ে; মূল খাতায় ঢোকে শুধু সারাংশ। · The runner reads sixty files in its own ledger; only the summary enters yours.</div></div>

<p>এবার যন্ত্রটা দেখো। <strong>Subagent</strong> কোনো ভিন্ন জাতের AI নয়। এটা <em>একই agent loop</em> — কিন্তু একটা নতুন, খালি messages তালিকা নিয়ে, নিজের system prompt, সীমিত tool, চাইলে সস্তা model দিয়ে। মূল agent একটা tool call-এ লিখে দেয় "এই কাজটা করো"; harness সেই কাজ নিয়ে ভেতরে আরেকটা loop চালায়; সেই loop শেষ হলে তার শেষ লেখাটা মূল agent-এর কাছে একটা tool_result হয়ে ফেরে। Subagent মূল কথোপকথন দেখে না — তাই কাজের চিরকুট স্বয়ংসম্পূর্ণ হতে হবে, সিরাজ মিয়ার লিখিত স্লিপের মতো।</p>
<p class="en">Now see the machine. A <strong>subagent</strong> is not a different kind of AI. It is <em>the same agent loop</em> — with a new, empty messages list, its own system prompt, restricted tools, optionally a cheaper model. The main agent writes a tool call saying "do this task"; the harness runs another loop inside with that task; when it finishes, its final text returns to the main agent as a tool_result. The subagent never sees the main conversation — so the task slip must be self-contained, like Siraj Mia's written slip.</p>

<div class="code-block"># তোমার নিজের agent-এ subagent — একটা tool যা নিজেকেই আবার ডাকে
def delegate(task: str) -> str:
    """Run a sub-agent with read-only tools on a self-contained task; return its final summary."""
    scout = Agent(provider, tools=READ_ONLY_TOOLS,          # grep, glob, read_file
                  system="You are a codebase scout. Return a short summary with file:line refs.")
    return scout.run(task)        # fresh messages[] → loop → final text

# Claude Code-এ একই জিনিস একটা file দিয়ে (Book 59 দরজা ৭, ২৮):
# .claude/agents/scout.md
# ---
# name: scout
# description: Use for broad searches across the codebase. Returns a short summary.
# tools: Read, Grep, Glob
# model: haiku
# ---
# You are a read-only scout. Report findings as file:line with one line each.</div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল দালাল</div>"সকালে যেটা বললাম, ওটা দেখে আসো" — subagent সকালে ছিলই না। অথবা অভ্যাসবশত সব কাজে subagent: প্রত্যেকে নিজে আবার পড়ে (token খরচ), দেরি বাড়ে, সারাংশে খুঁটিনাটি হারায়।<br><em>Assuming shared memory; delegating by reflex.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ সিরাজ মিয়ার স্লিপ</div>হৈচৈপূর্ণ কাজ (বড় খোঁজ, log বিশ্লেষণ, স্বাধীন review), লিখিত সম্পূর্ণ কাজ, সীমিত tool, এক লাইনের ফেরত। আর দরকারে তিনজন দালাল একসঙ্গে তিন হাটে — parallel।<br><em>Noisy work, complete written task, narrow tools, one-line return, parallel when useful.</em></div></div>

<p class="verse">সিরাজ মিয়া পানের বাটা খুলতে খুলতে বললেন — আমার বড় ছেলের নাম রেখেছিলাম হারুন। মূসা (আ.) যখন ফেরাউনের কাছে যাওয়ার হুকুম পেলেন, দোয়া করেছিলেন: "আমার পরিবার থেকে আমার জন্য একজন সাহায্যকারী দাও — আমার ভাই হারুনকে; তার দ্বারা আমার শক্তি বাড়াও, আর তাকে আমার কাজে শরিক করো" (সূরা ত্ব-হা ২০:২৯–৩২, ভাবানুবাদ)। কাজ একজনের হাতে থাকলেও ভাগীদার থাকে। কিন্তু ভাগীদারকে কাজটা বুঝিয়ে দিতে হয় — সে তো তোমার মাথার ভেতরে থাকে না।</p>
<p class="en">Opening his betel box, Siraj Mia says: I named my eldest son Harun. When Musa (peace be upon him) was commanded to go to Pharaoh, he prayed: "Appoint for me a minister from my family — Aaron, my brother. Increase through him my strength, and let him share my task" (20:29–32, Sahih International). The task stays with one person, yet there is a sharer. But the sharer must be told the task — he does not live inside your head.</p>

<p>নুরুন্নাহার (দরজা ১৩) টেবিল পরিষ্কার রাখেন; সিরাজ মিয়া দেখালেন কীভাবে ভারী প্রদর্শনী অন্য ঘরেই পড়িয়ে আনা যায়। Book 59-এর ঠিকাদার রফিক (দরজা ৭) তোমাকে subagent চালাতে শিখিয়েছিলেন; এখানে দেখলে এটা একটা loop, যে নিজেকেই নতুন খাতা দিয়ে ডাকে — দরজা ২৮-এ এই কথাটা একটা লাইন হয়ে ফিরবে। Book 12-এর multi-agent নকশাগুলো এই এক কৌশলেরই বিস্তার।</p>
<p class="en">Nurunnahar (Door 13) keeps the desk clean; Siraj Mia shows how heavy exhibits can be read in another room. Book 59's contractor Rafiq (Door 7) taught you to run subagents; here you see it is a loop calling itself with a fresh ledger — at the last door this returns as a single line. Book 12's multi-agent designs are elaborations of this one trick.</p>

<div class="secret-box"><div class="label">দরজা ১৮ — তালিসমান</div><div class="text">🏃 একই loop, নতুন খাতা — কাজ দাও লিখে, ফেরত নাও এক লাইনে।<br><small>নাম: <strong>subagent</strong> — নিজস্ব context, system prompt, tools, model; parent-এর কাছে ফেরে tool_result হয়ে।</small></div></div>`,
  senior: {
    title: "Quick Guide — Subagents",
    body: `<p><strong>Mechanics:</strong> a tool whose implementation starts a nested agent loop with an empty messages list and returns the final text.</p>
<p><strong>Use for:</strong> broad searches, log/trace digestion, independent reviews, parallel investigations, cheap models for simple sub-jobs.</p>
<p><strong>Costs:</strong> extra tokens (each re-reads what it needs), latency, lossy summaries. Delegate when isolation or parallelism pays for itself.</p>
<p><strong>Must:</strong> self-contained task text; restrict tools (read-only reviewers can't break anything).</p>`
  }
});


// ── DOOR 19 · দোভাষীর তিন কলম — The Interpreter's Three Pens ──
doors.push({
  num: 19,
  icon: "🖋️",
  color: "#fbbf24",
  name: "দোভাষীর তিন কলম",
  subtitle: "The Interpreter's Three Pens",
  tech: "Provider adapters — one neutral message format, many wire formats",
  spirit: "লিসান — প্রতিটি জাতির কাছে তার নিজের ভাষায়",
  secret: "বার্তা এক, ভাষা বহু — harness নিরপেক্ষ রাখো, অনুবাদ adapter-এ, আর আচরণ মাপো eval দিয়ে।",
  recall: {
    q: "Anthropic আর OpenAI-এর format-এ tool-এর ফলাফল কোথায় যায়? আর কোনো library সব model-কে একইরকম আচরণ করাতে পারে না কেন?",
    qen: "Where does a tool result go in Anthropic's format versus OpenAI's? And why can no library make every model behave the same?",
    a: "Anthropic-এ tool_result block যায় একটা user-role message-এর ভেতরে; OpenAI-এ আলাদা একটা role:tool message, tool_call_id সহ (আর OpenAI-এর argument আসে JSON string হিসেবে)। Library format অনুবাদ করতে পারে, কিন্তু আচরণ নয় — প্রতিটা model-এর জন্য prompt আর tool বর্ণনা আলাদা করে সাজাতে হয়, আর eval দিয়ে মাপতে হয়।",
    aen: "In Anthropic's format a tool_result block goes inside a user-role message; in OpenAI's it is a separate role:tool message with tool_call_id (and OpenAI's arguments arrive as a JSON string). Libraries translate formats, not behaviour — prompts and tool descriptions need tuning per model, measured with evals."
  },
  story: `<p class="scene-setting">চট্টগ্রাম বন্দর, সন্ধ্যা। নোনা বাতাসে মাছ আর ডিজেলের গন্ধ, কন্টেইনার-ক্রেনের কর্কশ আর্তনাদ, জেটিতে ঢেউয়ের চাপড়। একটা চীনা জাহাজের পাশে দাঁড়িয়ে দোভাষী ফাতেমা — কোটের বুকপকেটে তিনটা কলম: কালোটা বাংলার, নীলটা ইংরেজির, লালটা চীনার। হাতে ম্যানিফেস্টের মোটা কাগজ, আঙুলে তার খসখসে ভাঁজ। পঁচিশ বছরে তিনি একটা বাক্সও বদলাননি। বদলেছেন শুধু বাক্সের কথা।</p>
<p class="scene-setting en">Chattogram port at dusk. Salt wind carrying fish and diesel, the harsh groan of container cranes, waves slapping the jetty. Beside a Chinese freighter stands interpreter Fatema, three pens in her coat pocket: black for Bangla, blue for English, red for Chinese. In her hand the thick manifest paper, its rough folds under her fingers. In twenty-five years she has never changed a single crate. Only the words about the crates.</p>

<div class="dialogue">তুমি বলো — আপা, এক client চায় সব OpenAI-তে, আরেকজন চায় সম্পূর্ণ local model, গোপনীয়তার জন্য। আমার agent তো Claude-এর জন্য লেখা। সব কি নতুন করে লিখতে হবে? ফাতেমা লাল কলমটা বের করলেন। বললেন — জাহাজের মাল বদলায় না, শুধু ভাষা বদলায়। কিন্তু সাবধান — আমি প্রথম চাকরিতে এই কথা ভুল বুঝেছিলাম।</div>
<div class="dialogue en">You say: Apa, one client wants everything on OpenAI, another wants a fully local model for privacy. My agent is written for Claude. Do I rewrite everything? Fatema takes out the red pen: The cargo does not change, only the language. But careful — in my first job I misunderstood exactly this.</div>

<p>তাঁর ভুলের গল্প: এক চীনা ক্যাপ্টেনের নির্দেশ তিনি শব্দে শব্দে বাংলায় বলেছিলেন। চীনা বাক্যে "ভঙ্গুর" কথাটা ছিল শেষে, এক সারি বাক্সের তালিকার পরে; বাংলায় শ্রমিকরা ভাবল শুধু শেষ বাক্সটা ভঙ্গুর। তিনটা কাচের চালান ভাঙল। সেদিন থেকে তাঁর পদ্ধতি: নিজের খাতায় একটা <em>আসল ম্যানিফেস্ট</em> রাখা — কোনো ভাষার নয়, শুধু কোন বাক্স, কী, কতটা ভঙ্গুর। তারপর প্রতিটা শ্রোতার জন্য তার নিজের ভাষার নিয়মে লেখা। আর কিছু দলের জন্য ছোট, সোজা বাক্য — লম্বা নির্দেশ দিলে তারা গুলিয়ে ফেলে।</p>
<p class="en">Her mistake: she rendered a Chinese captain's instruction into Bangla word for word. In the Chinese sentence "fragile" came at the end, after a list of crates; in Bangla the stevedores thought only the last crate was fragile. Three glass consignments broke. Since then her method: keep a <em>true manifest</em> in her own notebook — in no language, only which crate, what, how fragile. Then write it for each audience in the rules of their own tongue. And for some crews, short plain sentences — long instructions confuse them.</p>

<div class="diagram"><div class="diag-title">One manifest, three pens · এক ম্যানিফেস্ট, তিন কলম</div><svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d11a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker></defs><rect class="node-cyan" x="20" y="40" width="150" height="50" rx="10"/><text class="lbl" x="95" y="60">Tools</text><text class="lbl-sm" x="95" y="78">read · edit · bash</text><rect class="node-moon" x="20" y="160" width="150" height="50" rx="10"/><text class="lbl" x="95" y="180">Evals</text><text class="lbl-sm" x="95" y="198">run per provider</text><rect class="node" x="215" y="85" width="170" height="80" rx="12"/><text class="lbl" x="300" y="108">YOUR HARNESS</text><text class="lbl-sm" x="300" y="128">neutral messages</text><text class="lbl-sm" x="300" y="144">one loop</text><line x1="170" y1="65" x2="212" y2="105" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d11a)"/><line x1="170" y1="185" x2="212" y2="148" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d11a)"/><rect x="410" y="22" width="56" height="24" rx="5" fill="rgba(252,211,77,.16)" stroke="#fbbf24"/><text class="lbl-sm" x="438" y="38">adapter</text><rect class="node-purple" x="480" y="14" width="150" height="42" rx="8"/><text class="lbl-sm" x="555" y="31">Anthropic Messages</text><text class="lbl-sm" x="555" y="46">tool_use / tool_result</text><rect x="410" y="112" width="56" height="24" rx="5" fill="rgba(252,211,77,.16)" stroke="#fbbf24"/><text class="lbl-sm" x="438" y="128">adapter</text><rect class="node-purple" x="480" y="104" width="150" height="42" rx="8"/><text class="lbl-sm" x="555" y="121">OpenAI-compatible</text><text class="lbl-sm" x="555" y="136">OpenAI · Ollama · vLLM</text><rect x="410" y="202" width="56" height="24" rx="5" fill="rgba(252,211,77,.16)" stroke="#fbbf24"/><text class="lbl-sm" x="438" y="218">adapter</text><rect class="node-purple" x="480" y="194" width="150" height="42" rx="8"/><text class="lbl-sm" x="555" y="211">Gemini</text><text class="lbl-sm" x="555" y="226">functionCall parts</text><path d="M385,125 L405,34" stroke="#a5b4fc" stroke-width="1.5" fill="none"/><path d="M385,125 L405,124" stroke="#a5b4fc" stroke-width="1.5" fill="none"/><path d="M385,125 L405,214" stroke="#a5b4fc" stroke-width="1.5" fill="none"/></svg><div class="diag-cap">চিত্র: ভেতরে একটাই নিরপেক্ষ format; কিনারায় প্রতিটা provider-এর জন্য পাতলা adapter। · One neutral format inside, a thin adapter per provider at the edge.</div></div>

<p>সব বড় provider একই <em>ধারণা</em> বাস্তবায়ন করে — message, tool schema, tool চাওয়া আর ফলাফল ফেরত দেওয়ার loop — কিন্তু ভিন্ন ভিন্ন <em>wire format</em>-এ:</p>
<p class="en">Every major provider implements the same <em>concept</em> — messages, tool schemas, a loop of asking for tools and returning results — in different <em>wire formats</em>:</p>

<table class="kv-table"><tr><th>ধারণা</th><th>Anthropic</th><th>OpenAI Chat</th><th>Gemini</th></tr><tr><td>System prompt</td><td class="hl">top-level system</td><td>role: system message</td><td>system_instruction</td></tr><tr><td>Tool definition</td><td class="hl">name, description, input_schema</td><td>type: function → parameters</td><td>function_declarations</td></tr><tr><td>Model asks for a tool</td><td class="hl">tool_use block</td><td>message.tool_calls (arguments = JSON string)</td><td>functionCall part</td></tr><tr><td>Result goes back</td><td class="hl">tool_result inside a USER message</td><td>separate role: tool message</td><td>functionResponse part</td></tr><tr><td>"Wants a tool" signal</td><td class="hl">stop_reason: tool_use</td><td>finish_reason: tool_calls</td><td>functionCall present</td></tr></table>

<div class="code-block"># ফাতেমার পদ্ধতি code-এ (minicc থেকে, দরজা ২৮): একটা নিরপেক্ষ খাতা
#   {"role":"user","content":str}
#   {"role":"assistant","content":str,"tool_calls":[{"id","name","args"}]}
#   {"role":"tool","tool_call_id":str,"content":str}

class AnthropicProvider:                 # black pen
    def chat(self, system, messages, tools):
        # tool messages → tool_result blocks merged into a USER message
        ...
class OpenAICompatProvider:              # blue pen — OpenAI, Ollama, vLLM, Groq, OpenRouter
    def chat(self, system, messages, tools):
        # tools → {"type":"function","function":{...}}; args → json.dumps
        # replies → json.loads(tool_call.function.arguments)  (wrap in try/except!)
        ...

# চালানো:
# python minicc.py                                               # Claude
# python minicc.py --provider openai --model gpt-4.1
# python minicc.py --provider openai --base-url http://localhost:11434/v1 --model qwen2.5-coder</div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ শব্দে শব্দে অনুবাদ</div>Vendor-এর object harness-এর ভেতরে ঢুকে যায়; Claude-এর জন্য লেখা ৩০টা tool আর লম্বা system prompt ছোট local model-কে হুবহু দেওয়া হয়; ভাবা হয় "একই prompt, একই ফল"।<br><em>Vendor objects leak inside; a small local model gets the same 30 tools and long prompt.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ আসল ম্যানিফেস্ট</div>ভেতরে নিরপেক্ষ format, কিনারায় অনুবাদ। ID, argument-এর ধরন, usage এক ছাঁচে। ছোট model-এর জন্য কম tool, সোজা বর্ণনা, কড়া max_turns। আর প্রতিটা provider-এ একই eval set (দরজা ২২)।<br><em>Neutral inside, translate at the edges, per-model prompts, the same eval everywhere.</em></div></div>

<div class="callout info"><span class="co-icon">🧰</span><div><strong>তৈরি অনুবাদক:</strong> LiteLLM (Python SDK + proxy), Vercel AI SDK (TypeScript), আর নানা framework এই কাজ করে দেয়। নিজে একবার adapter লিখলে বুঝবে এরা কী লুকায়, আর কখন তাদের abstraction ফুটো হয়। Library ভাষা অনুবাদ করে; আচরণ নয়।<br><em>Libraries translate formats, not behaviour.</em></div></div>

<p class="verse">জাহাজের সাইরেন বাজল। ফাতেমা কলম পকেটে রেখে বললেন — আমার আব্বা ছিলেন হালিশহরের মসজিদের ইমাম। জুমায় খুতবা পড়তেন আরবিতে, তারপর নামাজের আগে বোঝাতেন চাটগাঁইয়া ভাষায় — কারণ মুসল্লিরা সেই ভাষায় বোঝে। বলতেন, আল্লাহ বলেছেন: "আমি প্রত্যেক রাসূলকে তার জাতির ভাষাতেই পাঠিয়েছি, যাতে তাদের কাছে স্পষ্ট করে বোঝাতে পারে" (সূরা ইবরাহীম ১৪:৪, ভাবানুবাদ)। বার্তা এক; ভাষা শ্রোতার।</p>
<p class="en">The ship's siren sounds. Pocketing her pens, Fatema says: My father was imam of a mosque in Halishahar. At Friday prayer he read the sermon in Arabic, then explained it in Chatgaiyya — because that is the tongue the worshippers understood. He would say Allah said: "We did not send any messenger except in the language of his people to state clearly for them" (14:4, Sahih International). The message is one; the language belongs to the listener.</p>

<p>শফিকের চিরকুট (দরজা ১৬) ছিল এক রান্নাঘরের মেনুতে লেখা। ফাতেমা দেখালেন একই চিরকুট অন্য রান্নাঘরে অন্য ছাঁচে লিখতে হয় — কিন্তু ভেতরের অর্ডার একই। Book 14-এর LLMOps model routing আর gateway-র বড় ছবি দেখায়। আর পরের দরজায় উল্টো প্রশ্ন: নিজের agent নয়, Claude Code-কেই কি অন্য জায়গায় পাঠানো যায়?</p>
<p class="en">Shafiq's chit (Door 16) was written for one kitchen's menu. Fatema shows the same order must be written in another mould for another kitchen — the order inside stays the same. Book 14 shows the bigger picture of routing and gateways. The next door asks the reverse: not your own agent, but can Claude Code itself be sent elsewhere?</p>

<div class="secret-box"><div class="label">দরজা ১৯ — তালিসমান</div><div class="text">🖋️ বার্তা এক, ভাষা বহু — harness নিরপেক্ষ রাখো, অনুবাদ adapter-এ।<br><small>নাম: <strong>provider adapter pattern</strong> — neutral internal format, translate at the edges, per-model prompts, evals per provider।</small></div></div>`,
  senior: {
    title: "Quick Guide — Going Multi-Provider",
    body: `<p><strong>Two adapters cover most of the market:</strong> Anthropic Messages and OpenAI-compatible Chat Completions (OpenAI, Ollama, vLLM, LM Studio, Groq, OpenRouter, many others). Gemini has a native format and an OpenAI-compatible endpoint; several vendors also expose Anthropic-compatible endpoints.</p>
<p><strong>Rules:</strong> one neutral format; translate both directions at the edge; normalise ids, argument types and usage; parse arguments defensively and return parse errors to the model.</p>
<p><strong>Behaviour:</strong> smaller models need fewer, simpler tools, shorter prompts, tighter turn limits. Measure with the same eval set on every provider.</p>`
  }
});


// ── DOOR 20 · বাছাইঘরের ঠিকানা — The Sorting Room's Address ──
doors.push({
  num: 20,
  icon: "📮",
  color: "#f59e0b",
  name: "বাছাইঘরের ঠিকানা",
  subtitle: "The Sorting Room's Address",
  tech: "Claude Code on other backends — base URL, gateways, Bedrock / Vertex / Foundry",
  spirit: "কিবলা — রূপ একই থাকে, দিক বদলায়",
  secret: "চিঠির ভেতর একই থাকে, বদলায় শুধু ঠিকানা — base URL দিক ঘোরায়, ইঞ্জিন নয়।",
  recall: {
    q: "কোনো client বলে data শুধু তাদের AWS account-এর ভেতরেই থাকবে। Claude Code দিয়ে কাজ করবে কীভাবে? আর ANTHROPIC_BASE_URL আসলে কী বদলায়?",
    qen: "A client says data must stay inside their AWS account. How do you work with Claude Code? And what does ANTHROPIC_BASE_URL actually change?",
    a: "Claude Code-কে Bedrock-এর দিকে ঘোরাও: CLAUDE_CODE_USE_BEDROCK=1 আর AWS region/credential (Vertex বা Foundry-র জন্যও আলাদা env var আছে)। ANTHROPIC_BASE_URL শুধু request কোথায় যাবে সেটা বদলায় — যেমন কোম্পানির gateway — harness, tool, loop সব একই থাকে।",
    aen: "Point Claude Code at Bedrock: CLAUDE_CODE_USE_BEDROCK=1 plus AWS region and credentials (Vertex and Foundry have their own env vars). ANTHROPIC_BASE_URL only changes where requests go — for example a company gateway — while the harness, tools and loop stay the same."
  },
  story: `<p class="scene-setting">আবার ঢাকা জিপিও — মুনশি আবদুল করিমের (দরজা ৯) টুল থেকে মাত্র পঞ্চাশ গজ দূরে, কিন্তু দেয়ালের ভেতরে। বাছাইঘরে সারি সারি কাঠের খোপ, পাটের বস্তা মুখ খুলে হাঁ করে আছে, সিলমোহরের গালার গন্ধ, মেশিনে স্ট্যাম্প পড়ার খটাখট। খোপের সামনে বাছাইকারী হাবিবুর — গলায় সুতোয় ঝোলানো বাইফোকাল চশমা, কাছে দেখতে নামান, দূরে দেখতে তোলেন। তিনি জীবনে একটা চিঠিও খোলেননি। তিনি শুধু ঠিক করেন কোন চিঠি কোন বস্তায় যাবে।</p>
<p class="scene-setting en">The Dhaka GPO again — fifty yards from Munshi Abdul Karim's stool (Door 9), but inside the walls. In the sorting hall, rows of wooden pigeonholes, jute bags gaping open, the smell of sealing wax, the clack of franking machines. Before the pigeonholes stands sorter Habibur, bifocals hanging on a string round his neck — lowered to read close, raised to see far. He has never opened a letter in his life. He only decides which bag each letter goes into.</p>

<div class="dialogue">তুমি বলো — ভাই, আমার এক client-এর নিয়ম: কোনো data তাদের AWS account-এর বাইরে যাবে না। আরেক কোম্পানি চায় সব AI traffic তাদের নিজেদের gateway দিয়ে যাক, যাতে খরচ আর log এক জায়গায় থাকে। তাহলে কি Claude Code বাদ? হাবিবুর চশমা তুলে দূরের খোপগুলো দেখলেন। বললেন — চিঠি বদলাতে হবে কেন? ঠিকানা বদলাও।</div>
<div class="dialogue en">You say: Bhai, one client's rule: no data leaves their AWS account. Another company wants all AI traffic through its own gateway, so cost and logs sit in one place. Does that rule out Claude Code? Habibur raises his glasses toward the far pigeonholes: Why change the letter? Change the address.</div>

<p>তারপর তাঁর ভুলের কথা। আটানব্বইয়ের বন্যায় এক জেলার ডাক-পথ বন্ধ; তিনি সেই জেলার সব চিঠি আরেকটা পোস্ট অফিস দিয়ে ঘুরিয়ে দিলেন — ঠিকানা বদলে। দুই সপ্তাহ পরে বস্তা ফেরত এল: সেই অফিস চিঠির খামে একটা ঘর চাইত যা আমাদের খামে ছিল না, তারা বাছাই-ই করতে পারেনি। হাবিবুর শিখলেন: ঠিকানা বদলানো সহজ, কিন্তু নতুন অফিসকে <em>একই খাম বুঝতে</em> হবে। না বুঝলে মাঝখানে একটা অনুবাদ-ঘর লাগে — আর সেখানে চিঠি হারানোর ঝুঁকি থাকে।</p>
<p class="en">Then his mistake. In the '98 flood one district's mail route closed; he rerouted all its letters through another post office — by changing the address. Two weeks later the bags came back: that office required a field on the envelope ours did not have; they could not sort a thing. Habibur learned: changing the address is easy, but the new office must <em>understand the same envelope</em>. If not, you need a translation room in between — and there, letters can go astray.</p>

<p>Claude Code ঠিক মুনশির চিঠির মতো একটা নির্দিষ্ট খামে কথা বলে — Anthropic Messages format। কোথায় পাঠাবে, সেটা পড়ে কয়েকটা environment variable থেকে (সাধারণত settings.json-এর <strong>env</strong> অংশে)। Harness, tool, loop, permission — কিছুই বদলায় না। বদলায় শুধু বস্তা।</p>
<p class="en">Claude Code speaks in one fixed envelope — the Anthropic Messages format. Where it sends that envelope comes from a few environment variables (usually in settings.json's <strong>env</strong> block). The harness, tools, loop and permissions do not change. Only the bag does.</p>

<div class="diagram"><div class="diag-title">Same envelope, different bag · একই খাম, ভিন্ন বস্তা</div><svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d12a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker><marker id="d12b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#5e5c74"/></marker></defs><rect class="node" x="20" y="95" width="150" height="56" rx="10"/><text class="lbl" x="95" y="116">CLAUDE CODE</text><text class="lbl-sm" x="95" y="136">same harness, same loop</text><line x1="170" y1="123" x2="245" y2="123" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d12a)"/><text class="lbl-sm" x="208" y="112">BASE_URL</text><rect x="250" y="95" width="150" height="56" rx="10" fill="rgba(252,211,77,.12)" stroke="#fbbf24" stroke-width="2"/><text class="lbl" x="325" y="116">GATEWAY</text><text class="lbl-sm" x="325" y="136">keys · budgets · logs</text><line x1="400" y1="115" x2="455" y2="45" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d12a)"/><line x1="400" y1="123" x2="455" y2="123" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d12a)"/><line x1="400" y1="133" x2="455" y2="200" stroke="#5e5c74" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#d12b)"/><rect class="node-purple" x="460" y="22" width="165" height="44" rx="8"/><text class="lbl-sm" x="542" y="48">Anthropic API</text><rect class="node-purple" x="460" y="101" width="165" height="44" rx="8"/><text class="lbl-sm" x="542" y="120">Bedrock · Vertex</text><text class="lbl-sm" x="542" y="135">Microsoft Foundry</text><rect x="460" y="180" width="165" height="44" rx="8" fill="none" stroke="#5e5c74" stroke-dasharray="5 4"/><text class="lbl-sm" x="542" y="199">other models via</text><text class="lbl-sm" x="542" y="214">translation (unsupported)</text><text class="lbl-sm" x="95" y="186">or go direct:</text><text class="lbl-sm" x="95" y="204">CLAUDE_CODE_USE_BEDROCK=1</text></svg><div class="diag-cap">চিত্র: খাম একই (Anthropic format), শুধু গন্তব্য বদলায় — সরাসরি cloud, একটা gateway, অথবা ঝুঁকি নিয়ে অনুবাদ-ঘর। · Same envelope, different destination.</div></div>

<div class="code-block"># ১. Client-এর নিজের cloud-এ Claude (সমর্থিত, enterprise-এ প্রচলিত)
export CLAUDE_CODE_USE_BEDROCK=1          # AWS Bedrock
export AWS_REGION=us-east-1               # + normal AWS credentials/profile

export CLAUDE_CODE_USE_VERTEX=1           # Google Vertex AI
export CLOUD_ML_REGION=us-east5
export ANTHROPIC_VERTEX_PROJECT_ID=my-gcp-project

export CLAUDE_CODE_USE_FOUNDRY=1          # Microsoft Foundry (+ its resource settings)
export ANTHROPIC_MODEL='provider-specific-model-id'   # pin the id as that cloud names it

# ২. কোম্পানির gateway দিয়ে (কেন্দ্রীয় key, budget, log, routing)
export ANTHROPIC_BASE_URL=https://llm-gateway.mycompany.com
export ANTHROPIC_AUTH_TOKEN=sk-gateway-...          # or an apiKeyHelper script in settings.json

# ৩. সাধারণত settings.json-এ রাখো:
{ "env": { "ANTHROPIC_BASE_URL": "https://llm-gateway.mycompany.com" } }</div>

<div class="callout warn"><span class="co-icon">📭</span><div><strong>হাবিবুরের বন্যার শিক্ষা — অ-Claude model:</strong> যেহেতু Claude Code-এর শুধু দরকার "Anthropic খাম বোঝে এমন কেউ", তাই ANTHROPIC_BASE_URL একটা অনুবাদকারী proxy (যেমন LiteLLM বা এই কাজে বানানো community router) বা কোনো vendor-এর Anthropic-compatible endpoint-এর দিকে ঘোরানো যায়। কাজ হয় — কিন্তু অসমর্থিত। Claude Code-এর prompt আর tool Claude-এর জন্য সাজানো; caching বা thinking অনুবাদে হারাতে পারে; দুর্বল tool-caller-এর সঙ্গে harness অদ্ভুত আচরণ করে। পরীক্ষার জন্য ঠিক আছে; client-এর কাজে হয় সমর্থিত পথে Claude, নয়তো দরজা ১৯-এর নিজের adapter-ভিত্তিক agent।<br><em>Pointing Claude Code at non-Claude models through a translator works but is unsupported; fine for experiments, not for client work.</em></div></div>

<table class="kv-table"><tr><th>পরিস্থিতি · Situation</th><th>বেছে নাও · Choose</th></tr><tr><td>Data client-এর AWS/GCP/Azure-এর বাইরে যাবে না</td><td class="hl">Claude Code + Bedrock / Vertex / Foundry</td></tr><tr><td>কেন্দ্রীয় key, budget, log চাই</td><td class="hl">Gateway + ANTHROPIC_BASE_URL</td></tr><tr><td>পুরোপুরি offline / local</td><td class="hl">নিজের agent (দরজা ২৮) + Ollama/vLLM</td></tr><tr><td>Client OpenAI বা Gemini-তে বাঁধা</td><td class="hl">নিজের agent-এ সেই adapter (দরজা ১৯), বা ওই vendor-এর নিজের CLI (দরজা ২৩)</td></tr></table>

<p class="verse">জোহরের আজান পড়ল। হাবিবুর চশমা নামিয়ে বললেন — জিপিও-র মসজিদে নামাজ পড়তে পড়তে একটা কথা ভাবি। মদিনায় একদিন কিবলা বদলেছিল: "আমি দেখেছি আকাশের দিকে তোমার মুখ ফেরানো… এখন তুমি মসজিদুল হারামের দিকে মুখ ফেরাও" (সূরা বাকারা ২:১৪৪, ভাবানুবাদ)। নামাজ একই রইল — রুকু, সিজদা, তিলাওয়াত — শুধু দিক ঘুরল। আল্লাহর হুকুমের সঙ্গে আমার বাছাইঘরের তুলনা চলে না; আমি শুধু এটুকু শিখেছি — ভেতরের জিনিস ঠিক থাকলে দিক বদলানো যায়, ভেতর না বদলেই।</p>
<p class="en">The call to zuhr sounds. Lowering his glasses, Habibur says: Praying in the GPO mosque I think of one thing. In Madinah one day the qibla changed: "We have certainly seen the turning of your face toward the heaven… so turn your face toward al-Masjid al-Haram" (2:144, Sahih International). The prayer stayed the same — bowing, prostration, recitation — only its direction turned. My sorting room cannot be compared with Allah's command; I learned only this — when what is inside stays right, direction can change without changing what is inside.</p>

<p>ফাতেমা (দরজা ১৯) নিজের agent-কে অনেক ভাষায় কথা বলিয়েছেন; হাবিবুর দেখালেন Claude Code-কে না বদলেই অন্য বস্তায় পাঠানো যায়। Book 14-এর নিয়ন্ত্রণ কেন্দ্রে gateway আর observability-র পুরো ছবি আছে; Book 59-এর দরজা ৩০ (ইঞ্জিন-ঘরের নিয়ন্ত্রণ-বোর্ড) model-এর env var-গুলো চালাতে শিখিয়েছিল। এখন দুই পথই হাতে: নিজের adapter, বা ঠিকানা বদল।</p>
<p class="en">Fatema (Door 19) made your own agent speak many languages; Habibur shows Claude Code can go to another bag without changing. Book 14's control tower has the full gateway and observability picture; Book 59's Door 30 taught the model env vars. Now both roads are in your hands: your own adapter, or a change of address.</p>

<div class="secret-box"><div class="label">দরজা ২০ — তালিসমান</div><div class="text">📮 চিঠির ভেতর একই থাকে, বদলায় শুধু ঠিকানা — base URL দিক ঘোরায়, ইঞ্জিন নয়।<br><small>নাম: <strong>backend routing</strong> — ANTHROPIC_BASE_URL, LLM gateway, CLAUDE_CODE_USE_BEDROCK / VERTEX / FOUNDRY।</small></div></div>`,
  senior: {
    title: "Quick Guide — Where Claude Code Sends Its Calls",
    body: `<p><strong>Supported clouds:</strong> Bedrock, Vertex AI, Microsoft Foundry via their CLAUDE_CODE_USE_* switches plus the cloud's own credentials and region; pin model ids as that cloud names them.</p>
<p><strong>Gateway:</strong> ANTHROPIC_BASE_URL + ANTHROPIC_AUTH_TOKEN (or apiKeyHelper) for central keys, budgets, logging, routing. LiteLLM's proxy is a common choice.</p>
<p><strong>Non-Claude models:</strong> possible through Anthropic-format translators; unsupported, feature loss likely. Prefer your own adapter-based agent for those.</p>
<p>Env var-এর নাম আর বিস্তারিত বদলাতে পারে — code.claude.com-এর settings আর third-party integration পাতা দেখে নিয়ো।</p>`
  }
});
