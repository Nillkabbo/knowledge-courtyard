// ════════════════════════════════════════
// Book 62 · The Twelve-Line Engine — The Claude Code Journey
// DOORS 05–08 · Part 1: Use it — shaping the workshop
// ════════════════════════════════════════


// ── DOOR 5 · ময়রার রেসিপি — The Sweet-Maker's Recipes ──
doors.push({
  num: 5,
  icon: "🍯",
  color: "#fbbf24",
  name: "ময়রার রেসিপি",
  subtitle: "The Sweet-Maker's Recipes",
  tech: "Custom slash commands and skills — package what you repeat",
  spirit: "দাওয়াম — ছোট হলেও নিয়মিত",
  secret: "যা তিনবার করো, তা যন্ত্র বানাও — নিজে ডাকলে command, দরকার বুঝে খুললে skill।",
  recall: {
    q: "Slash command আর skill-এর পার্থক্য কী? Skill-এর কোন লাইনটা সবচেয়ে গুরুত্বপূর্ণ, আর কেন অনেক skill রাখলেও context ফোলে না?",
    qen: "What is the difference between a slash command and a skill? Which line of a skill matters most, and why do many skills not bloat the context?",
    a: "Command তুমি নিজে /name লিখে চালাও; skill Claude নিজেই প্রাসঙ্গিক মনে হলে খোলে (বা তুমি ডাকো)। সবচেয়ে গুরুত্বপূর্ণ হলো description — এটাই ঠিক করে skill কখন চালু হবে। শুরুতে শুধু নাম আর বর্ণনা load হয়; SKILL.md আর বাকি file খোলে দরকার হলে (progressive disclosure)।",
    aen: "You invoke a command yourself with /name; Claude opens a skill when it judges it relevant (or you invoke it). The description matters most — it decides when the skill fires. At start only names and descriptions load; SKILL.md and other files open when needed (progressive disclosure)."
  },
  story: `<p class="scene-setting">টাঙ্গাইলের পোড়াবাড়ি, এক মিষ্টির কারখানা, ভোর পাঁচটা। বিশাল কড়াইয়ে রস ফুটছে — চিনি পোড়ার মিষ্টি ঝাঁঝ আর ছানার দুধ-গন্ধে বাতাস আঠালো, মেঝে চিটচিটে। কড়াইয়ের পাশে ময়রা গোপাল — দুই হাতের কবজিতে রসের ছিটের পুরনো পোড়া দাগ, ফোঁটা ফোঁটা। দেয়ালে কাঠের ফ্রেমে ঝুলছে চমচম, রসগোল্লা, দইয়ের রেসিপি-কার্ড। আর এক কোণে একটা তালা-দেওয়া দেরাজ।</p>
<p class="scene-setting en">Porabari in Tangail, a sweet factory at five in the morning. Syrup boils in a huge karai — the sweet bite of caramelising sugar and the milk smell of chhana make the air sticky, the floor tacky. Beside the karai stands sweet-maker Gopal, old syrup-spatter burns dotting both wrists. On the wall hang framed recipe cards: chomchom, rasgulla, doi. And in one corner, a locked drawer.</p>

<div class="dialogue">তুমি বলো — দাদা, প্রায় প্রতিদিন আমি Claude-কে একই অনুচ্ছেদ টাইপ করি: "diff-টা security, N+1 query, missing test আর float-এ টাকার ভুলের জন্য review করো…"। কখনো ভুলে একটা বাদ পড়ে। গোপাল রসের হাতা নামিয়ে দেয়ালের কার্ডগুলো দেখালেন। বললেন — আমিও একসময় রোজ মুখে বলতাম।</div>
<div class="dialogue en">You say: Dada, almost every day I type Claude the same paragraph: "review the diff for security, N+1 queries, missing tests and money-as-float bugs…". Sometimes I forget one. Gopal lowers the ladle and points at the cards on the wall. I used to say it aloud every day too.</div>

<p>তাঁর গল্প: আগে প্রতিটা নতুন কারিগরকে তিনি প্রতিদিন মুখে চমচমের পদ্ধতি বলতেন — কতটা চিনি, কতক্ষণ জ্বাল, কখন আঁচ কমাতে হয়। প্রতিদিন একটু ভিন্ন করে বলতেন, একেকদিন একেকটা কথা বাদ পড়ত। এক পূজোর বড় অর্ডারে পাঁচশো কেজি চমচম শক্ত হয়ে গেল — সেদিন জ্বালের সময়টা বলতে ভুলে গিয়েছিলেন। তারপর থেকে দুই নিয়ম। রোজকার পদগুলোর কার্ড দেয়ালে — যে বানাবে, সে কার্ড নামিয়ে পড়বে। আর বিশেষ পদ — বিয়ের জন্য ক্ষীরের সন্দেশ, বিদেশি অর্ডারের কম-মিষ্টি চমচম — সেগুলোর কার্ড, ছাঁচ আর মাপের যন্ত্র ওই দেরাজে। দেরাজের গায়ে শুধু একটা লেবেল: কখন খুলতে হবে।</p>
<p class="en">His story: he used to tell each new karigar the chomchom method aloud every day — how much sugar, how long on the fire, when to lower the heat. Each day he said it a little differently; each day something was dropped. For one big puja order, five hundred kilos of chomchom went hard — that day he forgot to mention the boiling time. Since then, two rules. Cards for daily sweets on the wall — whoever makes it takes the card down and reads it. And the special ones — kheer sandesh for weddings, low-sugar chomchom for export orders — their cards, moulds and measuring tools live in that drawer. On the drawer, just a label: when to open it.</p>

<div class="code-block"># ১. দেয়ালের কার্ড — custom slash command (তুমি নিজে ডাকো)
# .claude/commands/review-money.md
---
description: Strict review of current changes for billing risks
allowed-tools: Bash(git diff:*), Read, Grep
argument-hint: [focus-area]
---
Review git diff main...HEAD as a strict senior engineer. Check:
1. Money as float instead of Decimal/Money
2. N+1 queries in serializers or loops
3. Missing tests for new branches
4. Authorization: can a user reach another customer's invoices?
5. Extra focus: $ARGUMENTS
Output a table: severity | file:line | issue | fix.

# ব্যবহার:  /review-money celery tasks

# ২. তালা-দেওয়া দেরাজ — skill (Claude দরকার বুঝে খোলে)
# .claude/skills/django-migration/SKILL.md   (+ checklist.md, scripts/check_migration.py)
---
name: django-migration
description: Use when creating, reviewing or squashing Django migrations, or when a model field changes. Ensures zero-downtime-safe migrations.
---
1. Run python scripts/check_migration.py &lt;app&gt; to detect locking operations.
2. For NOT NULL columns on large tables follow the 3-step pattern in checklist.md.
3. Never combine a schema change and a data backfill in one migration.</div>

<div class="diagram"><div class="diag-title">Wall card, drawer, shop rules · কার্ড, দেরাজ, দোকানের নিয়ম</div><svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg"><rect class="node-hot" x="15" y="30" width="190" height="130" rx="12"/><text class="lbl" x="110" y="54">CLAUDE.md</text><text class="lbl-sm" x="110" y="76">shop rules on the wall</text><text class="lbl-sm" x="110" y="96">loaded: always</text><text class="lbl-sm" x="110" y="116">cost: every request</text><text class="lbl-sm" x="110" y="136">(Door 3)</text><rect class="node-moon" x="225" y="30" width="190" height="130" rx="12"/><text class="lbl" x="320" y="54">/command</text><text class="lbl-sm" x="320" y="76">recipe card you take down</text><text class="lbl-sm" x="320" y="96">loaded: when YOU type it</text><text class="lbl-sm" x="320" y="116">cost: only when used</text><text class="lbl-sm" x="320" y="136">$ARGUMENTS</text><rect class="node-purple" x="435" y="30" width="190" height="130" rx="12"/><text class="lbl" x="530" y="54">skill</text><text class="lbl-sm" x="530" y="76">locked drawer + label</text><text class="lbl-sm" x="530" y="96">label always · body on need</text><text class="lbl-sm" x="530" y="116">scripts, checklists inside</text><text class="lbl-sm" x="530" y="136">CLAUDE decides when</text><text class="lbl-amber" x="320" y="195">repeat → command · expertise → skill · universal rule → CLAUDE.md</text><text class="lbl-sm" x="320" y="216">the description on the drawer decides when it opens</text></svg><div class="diag-cap">চিত্র: সবসময়ের নিয়ম দেয়ালে, রোজকার পদ কার্ডে, বিশেষ পদ দেরাজে — লেবেলটাই ঠিক করে কখন খুলবে। · Always-rules on the wall, daily recipes on cards, specials in a labelled drawer.</div></div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ রোজ মুখে বলা</div>একই দীর্ঘ prompt প্রতিদিন হাতে টাইপ, প্রতিবার একটু ভিন্ন। অথবা সব বিশেষ জ্ঞান CLAUDE.md-তে ঢেলে দেওয়া — প্রতিটা request-এ দোকানের সব দেরাজ খোলা।<br><em>Retyping the same prompt; or dumping every specialism into CLAUDE.md.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ গোপালের দেয়াল আর দেরাজ</div>তিনবার লিখলে command। বিশেষ পদ্ধতি হলে skill, script-সহ, আর এমন description যাতে নাম না বললেও Claude ঠিক সময়ে খোলে। নতুন version-এ command আর skill মিশে যাচ্ছে (skill-ও /name দিয়ে ডাকা যায়) — ধারণাটা একই থাকে।<br><em>Three repeats → command; specialism → skill with scripts and a precise description.</em></div></div>

<p class="verse">দুপুরে অর্ডারের চমচম ঠান্ডা হচ্ছিল। গোপাল বললেন — আমার পাশের দোকানের রহিম চাচা একটা হাদিস বলতেন, যা আমার কারখানার নিয়ম হয়ে গেছে: "আল্লাহর কাছে সবচেয়ে প্রিয় আমল হলো যা নিয়মিত করা হয়, যদিও তা অল্প হয়" (সহীহ বুখারী ৬৪৬৪, ভাবানুবাদ)। মিষ্টির স্বাদ আসে নিয়মিত একই হাত থেকে, মাঝে মাঝে বড় কেরামতি থেকে নয়। কার্ড সেই নিয়মিততা রক্ষা করে।</p>
<p class="en">At noon the order's chomchom are cooling. Gopal says: Uncle Rahim from the next shop used to quote a hadith that became my factory's rule: "The most beloved deed to Allah is the most regular and constant, even if it were little" (Sahih al-Bukhari 6464). The taste of a sweet comes from the same hand, regularly — not from an occasional miracle. The card protects that regularity.</p>

<p>রোকসানা (দরজা ৪) স্থায়ী নির্দেশ লিখে রাখেন; গোপাল দেখালেন কাজের পদ্ধতিও লিখে প্যাকেজ করা যায়। Book 59-এ মরিয়মের রেসিপি-বাক্স (দরজা ১০) বলেছিল skill তাকে থাকে, দরকারের সময় নামে — গোপাল একই কথা বলছেন, কিন্তু যোগ করছেন: দেরাজের লেবেলটাই সবচেয়ে বড় কারিগরি। নিজের হাতের লেখা (দরজা ১৪) command-এর বাকি কৌশল দেখায়। আর কেন শুধু লেবেলটা সবসময় context-এ থাকে, সেটা দরজা ১৩-এর পেশকার বুঝিয়ে দেবেন।</p>
<p class="en">Roksana (Door 4) writes standing orders; Gopal shows that working methods can be written and packaged too. Book 59's Maryam's recipe box (Door 10) said skills wait on the shelf until needed — Gopal says the same, but adds: the drawer's label is the real craft. Your own handwriting (Door 14 there) covers the rest of commands. Why only the label always sits in context, the clerk of Door 13 will explain.</p>

<div class="secret-box"><div class="label">দরজা ৫ — তালিসমান</div><div class="text">🍯 যা তিনবার করো, তা যন্ত্র বানাও — নিজে ডাকলে command, দরকার বুঝে খুললে skill।<br><small>নাম: <strong>custom slash commands</strong> ($ARGUMENTS, allowed-tools) আর <strong>skills</strong> (SKILL.md, description, progressive disclosure)।</small></div></div>`,
  senior: {
    title: "Quick Guide — Commands and Skills",
    body: `<p><strong>Command:</strong> .claude/commands/name.md with frontmatter (description, allowed-tools, argument-hint) and a body using $ARGUMENTS; run with /name.</p>
<p><strong>Skill:</strong> .claude/skills/name/SKILL.md plus any checklists or scripts; the description decides when Claude loads it; only name and description sit in context until needed.</p>
<p><strong>Choose:</strong> CLAUDE.md for universal rules, a command for workflows you trigger, a skill for specialised know-how with resources.</p>
<p>পরীক্ষা: নাম না বলে একটা কাজ দাও — skill নিজে খুলল কিনা দেখো; না খুললে description শোধরাও।</p>`
  }
});


// ── DOOR 6 · বিদ্যুৎ-মিস্ত্রির সকেট — The Electrician's Socket ──
doors.push({
  num: 6,
  icon: "🔌",
  color: "#f59e0b",
  name: "বিদ্যুৎ-মিস্ত্রির সকেট",
  subtitle: "The Electrician's Socket",
  tech: "MCP — one standard plug connecting Claude Code to your tools and data",
  spirit: "মানাসিক — এক রীতি, সব দিক থেকে আগত",
  secret: "প্রতিটা যন্ত্রের জন্য আলাদা তার নয় — একটা মানসম্মত সকেট; connector একবার লেখো, সব জায়গায় চালাও।",
  recall: {
    q: "MCP কোন সমস্যার সমাধান করে? দুই প্রধান transport কী? আর প্রতিটা MCP server যোগ করার দুটো খরচ বা ঝুঁকি কী?",
    qen: "What problem does MCP solve? What are the two main transports? And what are two costs or risks of every MCP server you add?",
    a: "একবার connector (MCP server) লিখলে যেকোনো MCP-সক্ষম client-এ চলে — Claude Code, Claude Desktop, IDE, অন্য কোম্পানির agent। Transport: stdio (local process) আর HTTP (remote, প্রায়ই OAuth)। খরচ: প্রতিটা server-এর tool definition প্রতিটা request-এ context খায়; ঝুঁকি: server তোমার permission নিয়ে চলে আর তার output-এ prompt injection থাকতে পারে — তাই read-only credential আর বিশ্বস্ত server।",
    aen: "Write a connector (MCP server) once and use it in any MCP-capable client — Claude Code, Claude Desktop, IDEs, other vendors' agents. Transports: stdio (local process) and HTTP (remote, often OAuth). Cost: every server's tool definitions take context on every request; risk: a server runs with your permissions and its output can carry prompt injection — so read-only credentials and trusted servers."
  },
  story: `<p class="scene-setting">গুলিস্তানের স্টেডিয়াম মার্কেট, ইলেকট্রনিক্সের সরু গলি, বিকেল। ঝালাইয়ের রজনের ধোঁয়ার গন্ধ, টিউবলাইটের ঝিঁঝিঁ, দোকানে দোকানে সাজানো প্লাগ, অ্যাডাপ্টার, সুইচবোর্ড। ছোট দোকানের টুলে বিদ্যুৎ-মিস্ত্রি জামাল — ডান তর্জনীর ডগায় একটা পুরনো পোড়া দাগ, গরম তারে লাগা। তাঁর সামনে একটা নতুন বোর্ড: মানসম্মত সকেটের সারি।</p>
<p class="scene-setting en">Stadium Market in Gulistan, a narrow electronics lane in the afternoon. The smell of solder-flux smoke, the whine of tube lights, plugs, adapters and switchboards stacked in every shop. On a stool in his small shop sits electrician Jamal, an old burn on the tip of his right index finger from a hot wire. In front of him, a new board: a row of standard sockets.</p>

<div class="dialogue">তুমি বলো — ভাই, আমার ticket থাকে Jira-তে, error Sentry-তে, data PostgreSQL-এ, docs Notion-এ। Claude Code দেখে শুধু repo। প্রতিবার আমি কপি করে এনে দিই — আবার সেই পিয়নগিরি। জামাল সকেট-বোর্ডটা ঘুরিয়ে দেখালেন। বললেন — আমি একসময় প্রতিটা যন্ত্রের জন্য আলাদা তার টানতাম।</div>
<div class="dialogue en">You say: Bhai, my tickets are in Jira, errors in Sentry, data in PostgreSQL, docs in Notion. Claude Code sees only the repo. Every time I copy things in myself — being the runner again. Jamal turns the socket board toward you. I used to run a separate wire for every appliance.</div>

<p>তাঁর গল্প: নব্বইয়ের দশকে এক বড় দোকানের পুরো তারের কাজ তিনি করেছিলেন — প্রতিটা যন্ত্রের নিজের মাপের প্লাগের জন্য আলাদা করে বানানো সংযোগ। দুই বছর পর দোকান সব যন্ত্র বদলাল; পুরো তারের কাজ আবার খুলতে হলো। আর তার আগে, একটা হাতে বানানো সংযোগ গরম হয়ে আগুন ধরেছিল — তখনই আঙুলের এই দাগ। জামাল বললেন — তারপর শিখলাম মানদণ্ডের দাম। দেয়ালে একটাই মাপের সকেট; যে যন্ত্র সেই মাপের প্লাগ মানে, সে যেকোনো দেয়ালে চলে। যন্ত্র বদলালে দেয়াল বদলাতে হয় না।</p>
<p class="en">His story: in the nineties he wired a whole large shop — a custom connection built for each appliance's own plug. Two years later the shop replaced all its appliances; the entire wiring had to be torn out. And before that, one hand-made connection overheated and caught fire — hence the scar on his finger. Then I learned the value of a standard. One socket size in the wall; any appliance that follows that plug works in any wall. Change the appliance, and the wall stays.</p>

<p>AI-এর জগতে সেই মানসম্মত সকেটের নাম <strong>Model Context Protocol (MCP)</strong> — Anthropic-এর চালু করা, এখন ব্যাপকভাবে গৃহীত একটা open standard। প্রতিটা বাইরের সিস্টেম (GitHub, Sentry, database, তোমার নিজের internal API) একটা <strong>MCP server</strong> হিসেবে নিজের প্লাগ প্রকাশ করে; যেকোনো MCP-সক্ষম client — Claude Code, Claude Desktop, IDE, অন্য কোম্পানির agent — সেখানে লাগিয়ে দেয়। Server তিন জিনিস দিতে পারে: <strong>tools</strong> (model যে কাজগুলো চাইতে পারে; Claude Code-এ নাম হয় mcp__server__tool), <strong>resources</strong> (@server:resource দিয়ে উল্লেখযোগ্য data), আর <strong>prompts</strong> (slash command হিসেবে দেখা template)।</p>
<p class="en">In the AI world that standard socket is the <strong>Model Context Protocol (MCP)</strong> — an open standard introduced by Anthropic and now widely adopted. Each outside system (GitHub, Sentry, a database, your own internal API) exposes its plug as an <strong>MCP server</strong>; any MCP-capable client — Claude Code, Claude Desktop, IDEs, other vendors' agents — plugs in. A server can offer three things: <strong>tools</strong> (actions the model can request; in Claude Code named mcp__server__tool), <strong>resources</strong> (data you reference with @server:resource), and <strong>prompts</strong> (templates that appear as slash commands).</p>

<div class="code-block"># সকেটে প্লাগ লাগানো
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp          # remote, OAuth via /mcp
claude mcp add --scope project postgres -- npx -y @modelcontextprotocol/server-postgres "$DATABASE_URL_READONLY"
claude mcp list        # /mcp inside a session shows status and tools

# .mcp.json (টিমের সঙ্গে commit — secret নয়, env var)
{ "mcpServers": { "postgres": { "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-postgres", "&#36;{DATABASE_URL_READONLY}"] } } }

# নিজের সকেট — ২০ লাইনে (Python, pip install mcp)
from mcp.server.fastmcp import FastMCP
mcp = FastMCP("ledger")

@mcp.tool()
def invoice_status(invoice_id: str) -> str:
    """Return the payment status of an invoice from the internal ledger API."""
    return f"Invoice {invoice_id}: PAID on 2026-09-01"    # call your real API here

if __name__ == "__main__":
    mcp.run()             # stdio transport
# claude mcp add ledger -- python ledger_mcp.py
# docstring-টাই model-এর পড়া tool বর্ণনা — model-এর জন্য লেখো</div>

<div class="diagram"><div class="diag-title">One socket, many appliances · এক সকেট, অনেক যন্ত্র</div><svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><defs><marker id="n6a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker></defs><rect class="node" x="235" y="95" width="170" height="60" rx="12"/><text class="lbl" x="320" y="118">CLAUDE CODE</text><text class="lbl-sm" x="320" y="138">MCP client</text><rect class="node-moon" x="20" y="20" width="150" height="50" rx="8"/><text class="lbl-sm" x="95" y="41">GitHub · Sentry</text><text class="lbl-sm" x="95" y="57">remote · HTTP · OAuth</text><rect class="node-leaf" x="20" y="180" width="150" height="50" rx="8"/><text class="lbl-sm" x="95" y="201">Postgres (read-only)</text><text class="lbl-sm" x="95" y="217">local · stdio</text><rect class="node-purple" x="470" y="20" width="150" height="50" rx="8"/><text class="lbl-sm" x="545" y="41">Notion · Linear</text><text class="lbl-sm" x="545" y="57">remote · HTTP</text><rect x="470" y="180" width="150" height="50" rx="8" fill="rgba(252,211,77,.12)" stroke="#fbbf24"/><text class="lbl-sm" x="545" y="201">ledger_mcp.py</text><text class="lbl-sm" x="545" y="217">your own · stdio</text><line x1="235" y1="110" x2="173" y2="62" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n6a)"/><line x1="235" y1="140" x2="173" y2="190" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n6a)"/><line x1="405" y1="110" x2="467" y2="62" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n6a)"/><line x1="405" y1="140" x2="467" y2="190" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n6a)"/><text class="lbl-sm" x="320" y="185">tools · resources · prompts</text><text class="lbl-amber" x="320" y="205">the same servers work in any MCP client</text></svg><div class="diag-cap">চিত্র: Claude Code মাঝখানে, চারপাশে মানসম্মত প্লাগে লাগানো server — remote বা local, অন্যের বা তোমার। · One client, many standard plugs.</div></div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ জামালের পুরনো তারের কাজ</div>দশটা server জুড়ে রাখা, যার সাতটা কখনো লাগে না — প্রতিটার tool তালিকা প্রতিটা request-এ context খায়। Production database-এ লেখার অধিকারসহ credential। অচেনা উৎসের server।<br><em>Ten servers, seven unused; write access to production; unknown sources.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ মানসম্মত বোর্ড</div>যা লাগে শুধু সেগুলো জোড়ো (নতুন version tool definition দরকার না হওয়া পর্যন্ত পিছিয়ে load করতে পারে, তবু হালকাই ভালো)। Read-only credential, বিশ্বস্ত server, secret শুধু env var-এ। মনে রাখো: server-এর output-এও লুকানো নির্দেশ থাকতে পারে (দরজা ২১)।<br><em>Only what you use; read-only credentials; trusted servers; secrets in env vars.</em></div></div>

<p class="verse">জামাল দোকান বন্ধ করতে করতে বললেন — গত বছর হজে গিয়েছিলাম। আরাফাতের মাঠে দেখলাম ইন্দোনেশিয়া, নাইজেরিয়া, বসনিয়া, আমরা — ভাষা আলাদা, চেহারা আলাদা, অথচ একই পোশাক, একই রীতি, একই সময়ে। কুরআনে আছে: "মানুষের মধ্যে হজের ঘোষণা দাও; তারা আসবে পায়ে হেঁটে আর সব রকম ক্ষীণ উটে চড়ে, দূর-দূরান্তের প্রতিটা পথ দিয়ে" (সূরা হজ ২২:২৭, ভাবানুবাদ)। ইবাদতের সঙ্গে আমার সকেটের তুলনা চলে না; আমি শুধু এটুকু দেখেছি — এক রীতি থাকলে দূরের সবাই একসঙ্গে মিলতে পারে।</p>
<p class="en">Closing his shop, Jamal says: Last year I went on Hajj. On the plain of Arafat I saw Indonesia, Nigeria, Bosnia, us — different tongues, different faces, yet the same garments, the same rites, at the same time. The Qur'an says: "Proclaim to the people the Hajj; they will come to you on foot and on every lean camel; they will come from every distant pass" (22:27, Sahih International). Worship cannot be compared with my sockets; I only saw this much — with one shared rite, everyone from afar can meet.</p>

<p>গোপাল (দরজা ৫) নিজের দোকানের পদ্ধতি প্যাকেজ করেছেন; জামাল দেখালেন কীভাবে বাইরের দুনিয়াকে দোকানে লাগানো যায়। Book 59-এর উত্তরাধিকারের আংটি (দরজা ৯) আর নিজে গড়া যন্ত্র (দরজা ১৫) MCP চালানো আর বানানো শিখিয়েছে; Book 19 (সরঞ্জাম নির্মাণ) পুরো বইটাই tool-নকশা। আর প্রতিটা tool call আসলে কীভাবে যায়-আসে — দরজা ১৬-এর বেয়ারা শফিক দেখাবেন।</p>
<p class="en">Gopal (Door 5) packaged his shop's methods; Jamal shows how to plug the outside world into the shop. Book 59's heirloom ring (Door 9) and the machine you build (Door 15) taught running and building MCP servers; Book 19 is entirely tool design. How each tool call actually travels, the waiter Shafiq shows at Door 16.</p>

<div class="secret-box"><div class="label">দরজা ৬ — তালিসমান</div><div class="text">🔌 প্রতিটা যন্ত্রের জন্য আলাদা তার নয় — একটা মানসম্মত সকেট; connector একবার লেখো, সব জায়গায় চালাও।<br><small>নাম: <strong>MCP</strong> — servers (tools · resources · prompts), stdio / HTTP, claude mcp add, .mcp.json, FastMCP।</small></div></div>`,
  senior: {
    title: "Quick Guide — MCP",
    body: `<p><strong>Add:</strong> claude mcp add (use --transport http for remote servers, -- command args for local stdio ones); scopes local / project (.mcp.json, committed) / user; /mcp shows status and handles OAuth.</p>
<p><strong>Build:</strong> the MCP Python or TypeScript SDK; FastMCP turns a typed, documented function into a tool.</p>
<p><strong>Hygiene:</strong> connect only what you use; read-only credentials; secrets via env vars; treat server output as untrusted data.</p>
<p>প্রথম কাজ: একটা read-only Postgres বা Sentry server, আর নিজের ২০ লাইনের একটা — দুটোই Claude Code থেকে call করে দেখো।</p>`
  }
});


// ── DOOR 7 · দইয়ের হাঁড়ি — The Yogurt Pots ──
doors.push({
  num: 7,
  icon: "🏺",
  color: "#fb923c",
  name: "দইয়ের হাঁড়ি",
  subtitle: "The Yogurt Pots",
  tech: "Headless claude -p, CI, fan-out and parallel worktrees — Claude without a keyboard",
  spirit: "ফালাক — প্রত্যেকে নিজের কক্ষপথে",
  secret: "কাজ যখন স্পষ্ট আর পুনরাবৃত্তিমূলক, মানুষকে loop থেকে সরাও — কিন্তু পাহারা রেখে দাও।",
  recall: {
    q: "Headless mode কী, আর --max-turns ও --allowedTools কেন দরকার? বড় migration-এ এক বিশাল session-এর চেয়ে ছোট ছোট -p রানের loop কেন ভালো? Worktree কী সমস্যার সমাধান করে?",
    qen: "What is headless mode, and why do --max-turns and --allowedTools matter? Why is a loop of small -p runs better than one huge session for a big migration? What problem do worktrees solve?",
    a: "claude -p একটা prompt চালিয়ে উত্তর দিয়ে বেরিয়ে যায় — script, cron, CI-তে। --max-turns লাগামছাড়া loop থামায়, --allowedTools পাহারা দেয়, কারণ কেউ অনুমতি দিতে বসে নেই। প্রতিটা ছোট রান পরিষ্কার context পায় (টেবিল ভরে না), ব্যর্থ হলে শুধু সেটা আবার চালাও। Worktree প্রতিটা session-কে নিজের checkout দেয়, যাতে সমান্তরাল কাজ একে অপরের file-এ ধাক্কা না খায়।",
    aen: "claude -p runs one prompt, prints the answer and exits — for scripts, cron, CI. --max-turns stops runaway loops and --allowedTools guards, because nobody sits there approving. Each small run gets a clean context and failures rerun alone. A worktree gives each session its own checkout so parallel work doesn't collide."
  },
  story: `<p class="scene-setting">বগুড়ার এক দইঘর, রাত এগারোটা। জ্বাল দেওয়া দুধের ঘন, একটু পোড়া-মিষ্টি গন্ধ; কাঠের চুলার আঁচে গাল গরম; মাটির মেঝেতে সারি সারি চল্লিশটা মাটির হাঁড়ি। দই-কারিগর আলমগীর প্রতিটা হাঁড়িতে একই পুরনো দইয়ের সাজ দিচ্ছেন, প্রতিটা আলাদা ঢাকনায় ঢাকছেন — নখের নিচে মাটির গুঁড়ো, ধোয়ায়ও যায় না। তারপর তিনি ঘুমাতে যাবেন। সারা রাত দই নিজেই বসবে। ফজরের পরে তিনি একটা একটা করে পরখ করবেন।</p>
<p class="scene-setting en">A yogurt house in Bogura at eleven at night. The thick, slightly scorched-sweet smell of reduced milk; the wood fire warming your cheeks; forty clay pots in rows on the earthen floor. Doi-maker Alamgir puts the same old starter into each pot and covers each with its own lid — clay dust under his nails that no washing removes. Then he will go to sleep. All night the doi sets by itself. After fajr he will check them one by one.</p>

<div class="dialogue">তুমি বলো — ভাই, আমাদের টিমে প্রতিটা PR প্রথম review-এর জন্য এক দিন বসে থাকে। আর একটা পুরনো permission decorator তিনশো file-এ বদলাতে হবে — এক session-এ চেষ্টা করেছিলাম, মাঝপথে Claude গুলিয়ে ফেলল। আলমগীর একটা হাঁড়ির ঢাকনা সোজা করে বললেন — আমিও একবার চল্লিশ কেজি দই একটা বিশাল পাত্রে বসাতে চেয়েছিলাম।</div>
<div class="dialogue en">You say: Bhai, every PR in our team waits a day for its first review. And an old permission decorator must change across three hundred files — I tried it in one session and Claude got muddled halfway. Alamgir straightens a pot's lid: I once wanted to set forty kilos of doi in one giant vessel too.</div>

<p>তাঁর গল্প: এক ঈদের অর্ডারে সময় বাঁচাতে তিনি সব দুধ এক বড় ডেকচিতে বসিয়েছিলেন। মাঝখানটা গরম রইল, কিনারা ঠান্ডা; একপাশ টক, একপাশ জমেইনি। পুরো চল্লিশ কেজি ফেলে দিতে হলো। তার ওপর সেই রাতে দরজা খোলা ছিল, রাস্তার বিড়াল ঢুকে একটা হাঁড়ি উল্টে দিয়েছিল। আলমগীর বললেন — তারপর থেকে তিন নিয়ম। প্রতিটা হাঁড়ি আলাদা, নিজের ঢাকনায় — একটা নষ্ট হলে বাকিগুলো বাঁচে। সবগুলোতে একই সাজ, একই মাপ। আর রাতে দরজায় খিল, আর চুলা নেভানোর সময় বাঁধা — আমি ঘুমিয়ে থাকলেও।</p>
<p class="en">His story: to save time on an Eid order he set all the milk in one big cauldron. The middle stayed warm, the edges cold; one side sour, one side never set. All forty kilos went out. And that night the door was open; a street cat got in and knocked a pot over. Since then, three rules. Every pot separate, under its own lid — if one spoils, the rest survive. The same starter and the same measure in all. And at night the door is bolted and the fire's time is fixed — even while I sleep.</p>

<div class="code-block"># এক হাঁড়ি — headless / print mode
claude -p "summarise the last 10 commits as release notes"
git diff main | claude -p "review this diff for bugs; output markdown"
claude -p "list TODO comments as JSON" --output-format json | jq '.result'
#   --output-format stream-json → every event as JSON lines (build UIs and logs on it)

# চল্লিশ হাঁড়ি — fan-out migration, প্রতিটা ফাইলে নতুন context
for f in $(grep -rl "@legacy_permission" apps/); do
  claude -p "In $f replace @legacy_permission with @require_scope per docs/permissions.md. Run that app's tests." \
    --allowedTools "Read,Edit,Bash(pytest:*)" --permission-mode acceptEdits --max-turns 10
done
#   খিল = --allowedTools · চুলার সময় = --max-turns · একই সাজ = একই prompt

# রাতের কারখানা — CI
#   inside Claude Code: /install-github-app   (or the anthropics/claude-code-action workflow)
#   then @claude on a PR or issue; minimal permissions; API key in repository secrets

# পাশাপাশি হাঁড়ি — git worktrees, প্রত্যেকের নিজের checkout
git worktree add ../inv-csv  -b feature/csv-export
git worktree add ../inv-perf -b fix/invoice-n-plus-1
# terminal 1: cd ../inv-csv && claude      terminal 2: cd ../inv-perf && claude</div>

<div class="diagram"><div class="diag-title">Forty pots, one starter · চল্লিশ হাঁড়ি, এক সাজ</div><svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg"><defs><marker id="n7a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker></defs><rect class="node-purple" x="15" y="80" width="140" height="60" rx="10"/><text class="lbl" x="85" y="104">one prompt</text><text class="lbl-sm" x="85" y="124">same flags, guard</text><g><rect class="node-cyan" x="215" y="25" width="70" height="36" rx="8"/><rect class="node-cyan" x="295" y="25" width="70" height="36" rx="8"/><rect class="node-cyan" x="375" y="25" width="70" height="36" rx="8"/><rect class="node-cyan" x="215" y="92" width="70" height="36" rx="8"/><rect class="node-hot" x="295" y="92" width="70" height="36" rx="8"/><rect class="node-cyan" x="375" y="92" width="70" height="36" rx="8"/><rect class="node-cyan" x="215" y="159" width="70" height="36" rx="8"/><rect class="node-cyan" x="295" y="159" width="70" height="36" rx="8"/><rect class="node-cyan" x="375" y="159" width="70" height="36" rx="8"/></g><text class="lbl-sm" x="250" y="47">claude -p</text><text class="lbl-sm" x="330" y="47">claude -p</text><text class="lbl-sm" x="410" y="47">claude -p</text><text class="lbl-sm" x="250" y="114">claude -p</text><text class="lbl-sm" x="330" y="114">failed</text><text class="lbl-sm" x="410" y="114">claude -p</text><text class="lbl-sm" x="250" y="181">claude -p</text><text class="lbl-sm" x="330" y="181">claude -p</text><text class="lbl-sm" x="410" y="181">claude -p</text><line x1="155" y1="110" x2="210" y2="110" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n7a)"/><line x1="450" y1="110" x2="495" y2="110" stroke="#a5b4fc" stroke-width="2" marker-end="url(#n7a)"/><rect class="node-leaf" x="500" y="80" width="130" height="60" rx="10"/><text class="lbl" x="565" y="104">checked at fajr</text><text class="lbl-sm" x="565" y="124">rerun failures</text><text class="lbl-sm" x="330" y="222">each pot: own lid (clean context / worktree) · one spoils, the rest survive</text></svg><div class="diag-cap">চিত্র: একই prompt অনেক আলাদা রানে, প্রতিটা পরিষ্কার context-এ; সকালে যাচাই, শুধু ব্যর্থটা আবার। · Many isolated runs, one recipe, checked in the morning.</div></div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ এক ডেকচি, খোলা দরজা</div>তিনশো file এক session-এ — টেবিল ভরে, মাঝপথে গোলমাল। CI-তে bypass mode আর production credential। দুই session একই checkout-এ, একে অপরের file মাড়ায়।<br><em>One giant session; bypass and prod keys in CI; two sessions in one checkout.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ আলমগীরের হাঁড়ি</div>ছোট ছোট -p রান, প্রতিটা নিজের context-এ; --allowedTools আর --max-turns দিয়ে খিল; CI-তে ন্যূনতম অধিকার; সমান্তরাল কাজ worktree-তে। আর মনে রাখো: কাজ বাড়লে bottleneck হয় তোমার review — তার পরিকল্পনা রাখো।<br><em>Small isolated runs, guarded flags, least privilege in CI, worktrees; plan your review time.</em></div></div>

<p class="verse">ফজরের পরে আলমগীর হাঁড়ির ঢাকনা একটা একটা করে তুলছিলেন। বললেন — ভোরে যখন হাঁড়িগুলো দেখি, সূরা ইয়াসিনের একটা আয়াত মনে পড়ে: "সূর্যের সাধ্য নেই চাঁদকে ধরে ফেলে, রাতও দিনকে অতিক্রম করতে পারে না; প্রত্যেকে নিজ নিজ কক্ষপথে ভেসে চলে" (৩৬:৪০, ভাবানুবাদ)। প্রত্যেকে নিজের পথে, কেউ কারো সঙ্গে ধাক্কা খায় না — সেই শৃঙ্খলা আল্লাহর। আমার হাঁড়িগুলো শুধু তার একটা ছোট ছায়া: আলাদা থাকলে, সবাই একসঙ্গে ঠিকঠাক বসে।</p>
<p class="en">After fajr Alamgir lifts the lids one by one. When I look at the pots at dawn, a verse of Surah Ya-Sin comes to me: "It is not allowable for the sun to reach the moon, nor does the night overtake the day, but each, in an orbit, is swimming" (36:40, Sahih International). Each on its own path, none colliding — that order is Allah's. My pots are only a small shadow of it: kept apart, they all set well together.</p>

<p>জামাল (দরজা ৬) দুনিয়াকে দোকানে এনেছেন; আলমগীর দেখালেন দোকান কীভাবে রাতে নিজে চলে। Book 59-এর বহু রান্নাঘর (দরজা ১৭), স্বয়ংক্রিয় ঘড়ি (দরজা ১৮) আর রাতের কারখানা (দরজা ২১) এই কাজের বিস্তারিত রূপ। প্রতিটা রান কেন পরিষ্কার শুরু পায়, দরজা ১৪-এর ওয়ার্ড-বয় বোঝাবেন; আর এই -p দিয়েই দরজা ২২-এ eval শিট চলবে।</p>
<p class="en">Jamal (Door 6) brought the world into the shop; Alamgir shows how the shop runs itself at night. Book 59's many kitchens (Door 17), self-winding clock (Door 18) and night factory (Door 21) detail this work. Why each run starts clean, the ward-boy of Door 14 explains; and Door 22's eval sheet runs on this same -p.</p>

<div class="secret-box"><div class="label">দরজা ৭ — তালিসমান</div><div class="text">🏺 কাজ যখন স্পষ্ট আর পুনরাবৃত্তিমূলক, মানুষকে loop থেকে সরাও — কিন্তু পাহারা রেখে দাও।<br><small>নাম: <strong>headless mode</strong> (claude -p, --output-format, --allowedTools, --max-turns), <strong>fan-out</strong>, <strong>CI</strong>, <strong>git worktrees</strong>।</small></div></div>`,
  senior: {
    title: "Quick Guide — Claude Without a Keyboard",
    body: `<p><strong>Print mode:</strong> claude -p with --output-format text / json / stream-json; pipe input in; always set --allowedTools and --max-turns.</p>
<p><strong>Fan-out:</strong> for large migrations, loop small runs, one file or module each, so every run has a clean context and failures rerun alone.</p>
<p><strong>CI:</strong> /install-github-app or the official GitHub Action; mention @claude on PRs and issues; least-privilege permissions; key in secrets.</p>
<p><strong>Parallel:</strong> git worktrees (or cloud sessions) so sessions never share a checkout; budget your review time.</p>`
  }
});


// ── DOOR 8 · হেডমাস্টারের সিলেবাস — The Headmaster's Syllabus ──
doors.push({
  num: 8,
  icon: "🏫",
  color: "#a3e635",
  name: "হেডমাস্টারের সিলেবাস",
  subtitle: "The Headmaster's Syllabus",
  tech: "Plugins, marketplaces and team rollout — share your AI workflow like software",
  spirit: "তাওয়াসি — পরস্পরকে সত্যের উপদেশ দেওয়া",
  secret: "তোমার AI workflow-ও software — version করো, review করো, ভাগ করো।",
  recall: {
    q: "একটা plugin-এ কী কী থাকতে পারে? কখন project-এর .claude/ যথেষ্ট আর কখন plugin দরকার? আর যা কখনো override করা যাবে না, তা কোথায় বসে?",
    qen: "What can a plugin contain? When is a project's .claude/ enough and when do you need a plugin? And where do non-negotiable rules live?",
    a: "Command, skill, subagent, hook, MCP server — সব এক install-যোগ্য বান্ডিলে, marketplace (প্রায়ই একটা git repo) থেকে। এক repo-র জন্য .claude/ যথেষ্ট; অনেক repo বা অনেক মানুষের জন্য plugin। অপরিবর্তনীয় নিয়ম (যেমন .env পড়া deny, bypass বন্ধ) managed settings-এ, প্রতিষ্ঠানের স্তরে।",
    aen: "Commands, skills, subagents, hooks and MCP servers — in one installable bundle from a marketplace (often a git repo). One repo: .claude/ is enough; many repos or people: a plugin. Non-negotiables (deny reading .env, bypass disabled) go in managed settings at the organisation level."
  },
  story: `<p class="scene-setting">পুরান ঢাকার এক সরকারি বালক বিদ্যালয়, প্রধান শিক্ষকের ঘর, টিফিনের ঘণ্টা বাজার ঠিক আগে। চকের গুঁড়ো আর পুরনো রেজিস্টার খাতার গন্ধ, মাথার ওপর ফ্যানের ক্লান্ত ঘোরা, বারান্দায় ছেলেদের হইচই। টেবিলে হেডমাস্টার নিজাম স্যার — কালো কোটের ডান হাতার কনুইয়ে চকের সাদা দাগ, কখনো পুরোপুরি যায় না। তাঁর সামনে একটা বাঁধানো খাতা: পুরো স্কুলের একটাই সিলেবাস।</p>
<p class="scene-setting en">A government boys' school in Old Dhaka, the headmaster's room, just before the tiffin bell. The smell of chalk dust and old registers, a ceiling fan turning wearily, boys shouting on the veranda. At the desk, headmaster Nizam Sir — a white chalk mark on the right elbow of his black coat that never quite leaves. Before him, a bound book: one syllabus for the whole school.</p>

<div class="dialogue">তুমি বলো — স্যার, দুই সপ্তাহে আমার .claude/ folder একটা ছোট গুপ্তধন হয়ে গেছে: review command, migration skill, scout subagent, format hook, নিজের MCP server। আমার সহকর্মী তানভীর জিজ্ঞেস করল, "আমি কি এগুলো পেতে পারি?" আমি কি zip করে পাঠিয়ে দেব? নিজাম স্যার চশমার ওপর দিয়ে তাকালেন। বললেন — আমার স্কুলে একসময় প্রতিটা শিক্ষক নিজের নোট বানাতেন।</div>
<div class="dialogue en">You say: Sir, in two weeks my .claude/ folder has become a small treasure: a review command, a migration skill, a scout subagent, a format hook, my own MCP server. My colleague Tanvir asked, "Can I have all that?" Should I just zip it and send it? Nizam Sir looks over his glasses. At my school, once, every teacher made his own notes.</div>

<p>তাঁর ব্যর্থতা: প্রথম দশকে প্রতিটা শাখার শিক্ষক নিজের মতো পড়াতেন, নিজের খাতায়। এক শাখা থেকে আরেক শাখায় গেলে ছেলেরা হারিয়ে যেত; বোর্ডের ফল শাখাভেদে আকাশ-পাতাল। তারপর সবচেয়ে ভালো গণিতের শিক্ষক বদলি হলেন — আর তাঁর সব চমৎকার নোট তাঁর সঙ্গেই চলে গেল। নিজাম স্যার বললেন — সেদিন বুঝলাম, একজনের দক্ষতা যদি কাগজে না ওঠে আর সবার হাতে না যায়, সেটা স্কুলের সম্পদ নয়। তারপর চার জিনিস: একটা যৌথ সিলেবাস, প্রতিটা ক্লাসের নিজের নিয়ম, স্কুলের এমন কিছু নিয়ম যা কেউ বদলাতে পারে না, আর একটা পরিদর্শন খাতা।</p>
<p class="en">His failure: in his first decade each section's teacher taught his own way, from his own notebook. Boys who changed sections got lost; board results swung wildly between sections. Then the best mathematics teacher was transferred — and all his wonderful notes left with him. That day I understood: if one person's skill never reaches paper and everyone's hands, it is not the school's wealth. Then four things: one shared syllabus, each classroom's own rules, school rules no one can change, and an inspection register.</p>

<div class="code-block"># যৌথ সিলেবাস — একটা plugin
ojo-dev-kit/
├── .claude-plugin/plugin.json      # name, version, description, author
├── commands/review-money.md        # Door 5
├── skills/django-migration/SKILL.md
├── agents/security-reviewer.md     # Door 18
├── hooks/hooks.json                # Door 17
└── .mcp.json                       # Door 6

# marketplace = a git repo with .claude-plugin/marketplace.json listing plugins
/plugin marketplace add your-org/claude-plugins
/plugin install ojo-dev-kit@your-org

# চালু করার checklist
1. প্রতিটা repo-তে যৌথ CLAUDE.md + .claude/settings.json          (ক্লাসের নিয়ম — Doors 3, 4)
2. repo জুড়ে command, skill, agent, hook-এর জন্য একটা টিম plugin    (সিলেবাস)
3. .mcp.json-এ শুধু env-var secret                                   (Door 6)
4. অপরিবর্তনীয় নিয়ম managed settings-এ: .env deny, bypass বন্ধ       (স্কুলের আইন)
5. ব্যবহার/খরচ পর্যবেক্ষণ — OpenTelemetry export                     (পরিদর্শন খাতা)
6. ছোট একটা internal guide: "আমাদের Claude Code workflow"            (শিক্ষকের গাইড)</div>

<div class="diagram"><div class="diag-title">Syllabus, classroom, school law · সিলেবাস, ক্লাস, স্কুলের আইন</div><svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg"><defs><marker id="n8a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker></defs><rect x="15" y="15" width="610" height="40" rx="8" fill="rgba(252,211,77,.12)" stroke="#fbbf24"/><text class="lbl" x="320" y="35">MANAGED SETTINGS · school law — nobody overrides</text><rect class="node-purple" x="15" y="75" width="610" height="44" rx="8"/><text class="lbl" x="320" y="93">TEAM PLUGIN · the shared syllabus</text><text class="lbl-sm" x="320" y="110">commands · skills · agents · hooks · MCP — one install, versioned</text><rect class="node" x="15" y="140" width="190" height="56" rx="8"/><text class="lbl-sm" x="110" y="162">repo A · .claude/</text><text class="lbl-sm" x="110" y="180">CLAUDE.md + settings</text><rect class="node" x="225" y="140" width="190" height="56" rx="8"/><text class="lbl-sm" x="320" y="162">repo B · .claude/</text><text class="lbl-sm" x="320" y="180">CLAUDE.md + settings</text><rect class="node" x="435" y="140" width="190" height="56" rx="8"/><text class="lbl-sm" x="530" y="162">repo C · .claude/</text><text class="lbl-sm" x="530" y="180">CLAUDE.md + settings</text><text class="lbl-sm" x="320" y="222">personal taste → ~/.claude · usage → OpenTelemetry register</text></svg><div class="diag-cap">চিত্র: ওপরে স্কুলের আইন, মাঝে যৌথ সিলেবাস, নিচে প্রতিটা ক্লাসের নিজের নিয়ম। · Law on top, shared syllabus in the middle, each classroom's rules below.</div></div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ Zip করে পাঠানো</div>তানভীরের কপি এক সপ্তাহেই পুরনো; কেউ জানে না কার version ঠিক; ব্যক্তিগত রুচি আর টিমের নিয়ম মিশে একাকার; তুমি চলে গেলে সব তোমার সঙ্গে।<br><em>Copies drift, versions unknown, taste mixed with policy, knowledge leaves with you.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ নিজামের সিলেবাস</div>Plugin version করা, PR-এ review করা, marketplace থেকে install। ব্যক্তিগত জিনিস ~/.claude-এ; টিমের নীতি commit করা file-এ; অপরিবর্তনীয় নিয়ম managed settings-এ। প্রতি মাসে ছাঁটাই — যা কেউ ব্যবহার করে না, মুছে দাও।<br><em>Versioned, reviewed, installed; personal vs team vs law kept apart; pruned monthly.</em></div></div>

<p class="verse">টিফিনের ঘণ্টা বাজল। নিজাম স্যার খাতা বন্ধ করে বললেন — আমাদের স্কুলের সমাবেশে প্রায়ই সূরা আসর পড়া হয়: "সময়ের শপথ, মানুষ অবশ্যই ক্ষতিতে আছে — তারা ছাড়া, যারা ঈমান আনে, সৎকাজ করে, পরস্পরকে সত্যের উপদেশ দেয় আর পরস্পরকে ধৈর্যের উপদেশ দেয়" (১০৩:১–৩, ভাবানুবাদ)। একা জানা যথেষ্ট নয়। যা সত্য বলে জেনেছ, তা ভাগ করো — আর ভাগ করা নিয়ম মানার ধৈর্যও ভাগ করো।</p>
<p class="en">The tiffin bell rings. Closing the book, Nizam Sir says: At assembly we often recite Surah al-Asr: "By time, indeed mankind is in loss — except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience" (103:1–3, Sahih International). Knowing alone is not enough. What you have found true, share — and share the patience to keep shared rules too.</p>

<p>আলমগীর (দরজা ৭) রাতের কারখানা চালিয়েছেন; নিজাম স্যার দেখালেন পুরো কারখানা কীভাবে টিমের হয়। এখানেই প্রথম পর্ব শেষ: জহুরুল থেকে নিজাম স্যার পর্যন্ত আটজন তোমাকে Claude Code <em>চালাতে</em> শিখিয়েছেন। Book 59-এর পাইকারের বাক্স (দরজা ১৬) plugin আর marketplace বানানোর খুঁটিনাটি দেখায়। দরজা ২৩-এর বাবুল দেখাবেন কীভাবে AGENTS.md দিয়ে একই নিয়ম অন্য tool-এও ভাগ করা যায়। আর দরজা ৯ থেকে প্রশ্ন বদলায়: এটা কাজ করে <em>কেন</em>?</p>
<p class="en">Alamgir (Door 7) ran the night factory; Nizam Sir shows how the whole factory becomes the team's. Part 1 ends here: from Zahurul to Nizam Sir, eight masters taught you to <em>drive</em> Claude Code. Book 59's wholesale box (Door 16) details building plugins and marketplaces. Babul at Door 23 shows how AGENTS.md shares the same rules with other tools. And from Door 9 the question changes: <em>why</em> does it work?</p>

<div class="secret-box"><div class="label">দরজা ৮ — তালিসমান</div><div class="text">🏫 তোমার AI workflow-ও software — version করো, review করো, ভাগ করো।<br><small>নাম: <strong>plugins</strong> (.claude-plugin/plugin.json), <strong>marketplaces</strong>, <strong>managed settings</strong>, team rollout, OpenTelemetry।</small></div></div>`,
  senior: {
    title: "Quick Guide — Team Rollout",
    body: `<p><strong>Per repo:</strong> CLAUDE.md and .claude/settings.json committed and reviewed like code.</p>
<p><strong>Across repos:</strong> a team plugin (commands, skills, agents, hooks, MCP) distributed from a marketplace repo; version it.</p>
<p><strong>Organisation:</strong> managed settings for non-negotiables; usage and cost monitoring via OpenTelemetry; a one-page "our workflow" guide.</p>
<p><strong>Hygiene:</strong> personal taste in ~/.claude or *.local files; prune unused pieces monthly.</p>`
  }
});
