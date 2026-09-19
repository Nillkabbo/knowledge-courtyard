// ════════════════════════════════════════
// Book 62 · The Twelve-Line Engine — Claude Code Under the Hood
// DOORS 09–12 · What the model is
// ════════════════════════════════════════


// ── DOOR 9 · মুনশির টুল — The Letter-Writer's Stool ──
doors.push({
  num: 9,
  icon: "✉️",
  color: "#6366f1",
  name: "মুনশির টুল",
  subtitle: "The Letter-Writer's Stool",
  tech: "Model vs Harness — what an agent really is",
  spirit: "রিসালাহ — চিঠি লেখে একজন, বয়ে নেয় আরেকজন",
  secret: "Model শুধু লেখে; হাত-পা harness-এর — লেখা আর বয়ে নেওয়ার মাঝের loop-টাই agent।",
  recall: {
    q: "Claude Code যখন pytest চালায়, আসলে কে সেটা চালায় — model, নাকি অন্য কেউ? আর model আসলে কী তৈরি করে?",
    qen: "When Claude Code runs pytest, who actually runs it — the model or something else? And what does the model actually produce?",
    a: "Model শুধু text তৈরি করে — তার একটা অংশ হলো কাঠামোবদ্ধ অনুরোধ (tool call)। pytest চালায় harness, অর্থাৎ Claude Code নামের program। ফলাফল আবার model-এর কাছে ফেরে, আর এই লেখা-বয়ে নেওয়া-ফেরত আসার loop-ই agent।",
    aen: "The model only produces text — part of which is a structured request (a tool call). The harness, the Claude Code program, runs pytest. The result goes back to the model; that write–carry–return loop is the agent."
  },
  story: `<div class="callout info"><span class="co-icon">🧭</span><div><strong>দ্বিতীয় পর্ব — ঢাকনার নিচে (দরজা ৯–১৬):</strong> প্রথম আট দরজায় তুমি Claude Code চালাতে শিখেছ। এবার প্রশ্ন বদলায় — "কীভাবে চালাব" থেকে "এটা কাজ করে কেন"। মনে করো বইয়ের শুরুর সেই কপি-পেস্টের এক ঘণ্টা; প্রথম উত্তরটা একজন মুনশির কাছে।<br><em>Part 2 — Under the hood (Doors 9–16): the first eight doors taught you to drive Claude Code. Now the question changes from "how do I use it" to "why does it work". Remember the copy-paste hour from the prologue; the first answer is with a munshi.</em></div></div>

<p class="scene-setting">ঢাকা জিপিও-র সিঁড়ির পাশে, পায়রার ডানার ঝাপট আর রাবার-স্ট্যাম্পের ধপ-ধপ শব্দের মাঝে একটা কাঠের টুল। টুলে বসে আছেন মুনশি আবদুল করিম। ডান হাতের বুড়ো আঙুলটা কালিতে এমন কালো যে আর উঠবে না — ত্রিশ বছরের কালি। বাতাসে আঠার গন্ধ, খামের গন্ধ, পুরনো কাগজের গন্ধ। তাঁর পা দুটো পোলিওতে গেছে ছেলেবেলায়; এই টুল থেকে তিনি ত্রিশ বছরে একবারও নড়েননি। অথচ তাঁর লেখা চিঠিতে জমি বিক্রি হয়েছে, বিয়ে ঠিক হয়েছে, মামলা মিটেছে — সারা দেশে।</p>
<p class="scene-setting en">Beside the steps of the Dhaka GPO, between the flutter of pigeons and the thud of rubber stamps, sits a wooden stool. On it sits Munshi Abdul Karim, his right thumb black with thirty years of ink. The air smells of gum, envelopes, old paper. Polio took his legs in childhood; he has not left this stool in thirty years — yet his letters have sold land, arranged marriages and settled lawsuits across the country.</p>

<div class="dialogue">তুমি ল্যাপটপ খুলে তাঁর পাশে বসো। বলো — চাচা, আমি আজ এক ঘণ্টা ধরে একটা AI-এর সঙ্গে কাজ করলাম। সে fix দেয়, আমি কপি করি, editor-এ বসাই, test চালাই, ভুল আসে, আবার কপি করে ওকে দেখাই। ও এত বুদ্ধিমান, তবু কাজটা শেষ হয় না কেন? মুনশি হাসলেন, কালো আঙুলে কলমটা ঘোরালেন। বললেন — তুমি এক ঘণ্টা আমার পিয়ন ছিলে, বাবা। ও লিখছিল, তুমি হাঁটছিলে।</div>
<div class="dialogue en">You open your laptop beside him: Uncle, I spent an hour with an AI today. It gives a fix, I copy it, paste it in the editor, run the tests, an error comes, I copy it back. It is so clever — why does the job never finish? The munshi smiles and turns his pen in his black fingers: For an hour you were my runner, son. It was writing; you were walking.</div>

<p>তারপর তিনি নিজের একটা ব্যর্থতার গল্প বললেন। একবার তাঁর পিয়ন ছেলেটা টাইফয়েডে পড়ল তিন দিনের জন্য। সেই তিন দিনে মুনশি চল্লিশটা চিঠি লিখলেন — নিখুঁত হাতের লেখা, নিখুঁত ভাষা। একটাও কোথাও যায়নি। একজনের জমির দলিলের তারিখ পেরিয়ে গেল, তিনি এসে টুলের সামনে কাঁদলেন। মুনশি বললেন — সেদিন বুঝেছিলাম, আমার কলমের কোনো পা নেই। লেখা যত সুন্দরই হোক, কেউ না বয়ে নিলে সেটা কাগজই থাকে।</p>
<p class="en">Then he tells you about his own failure. Once his runner boy fell ill with typhoid for three days. In those days the munshi wrote forty letters — perfect hand, perfect language. Not one went anywhere. A man's land-deed deadline passed; he came and wept in front of the stool. That day I learned my pen has no legs. However beautiful the writing, if no one carries it, it stays paper.</p>

<p>তুমি জিজ্ঞেস করো — তাহলে আপনার কাজ কী, আর পিয়নের কাজ কী? মুনশি কাগজে তিনটা ঘর আঁকলেন। প্রথম ঘর: আমি পড়ি যা আমার সামনে রাখা হয়, আর লিখি পরের চিঠি। দ্বিতীয় ঘর: পিয়ন চিঠি নিয়ে যায় — কিন্তু সব চিঠি নয়। কেউ যদি লেখায় বলে "ট্রেজারির সিন্দুক খুলে দাও", পিয়ন আগে আমার মালিককে জিজ্ঞেস করবে। তৃতীয় ঘর: শহর — উকিল, রেজিস্ট্রি অফিস, ব্যাংক। উত্তর এলে পিয়ন সেটা আমার সামনে রাখে, আমি পড়ি, পরের চিঠি লিখি। যতক্ষণ না কাজ শেষ হয়।</p>
<p class="en">You ask: so what is your job, and what is the runner's? He draws three boxes. First: I read what is placed before me and write the next letter. Second: the runner carries it — but not every letter; if a letter says "open the treasury safe", he asks my employer first. Third: the city — lawyers, the registry, the bank. When a reply comes, the runner puts it in front of me, I read it and write the next one. Until the job is done.</p>

<div class="diagram"><div class="diag-title">The Munshi's Three Boxes · মুনশির তিন ঘর</div><svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d1a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker><marker id="d1b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3dd6c4"/></marker></defs><rect class="node-purple" x="20" y="70" width="170" height="90" rx="12"/><text class="lbl" x="105" y="100">MODEL · মুনশি</text><text class="lbl-sm" x="105" y="122">reads what is placed</text><text class="lbl-sm" x="105" y="138">writes the next letter</text><rect class="node" x="235" y="70" width="170" height="90" rx="12"/><text class="lbl" x="320" y="100">HARNESS · পিয়ন</text><text class="lbl-sm" x="320" y="122">carries · asks permission</text><text class="lbl-sm" x="320" y="138">brings the reply back</text><rect class="node-cyan" x="450" y="70" width="170" height="90" rx="12"/><text class="lbl" x="535" y="100">TOOLS · শহর</text><text class="lbl-sm" x="535" y="122">files · shell · tests · web</text><text class="lbl-sm" x="535" y="138">MCP servers</text><line x1="190" y1="95" x2="232" y2="95" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d1a)"/><line x1="405" y1="95" x2="447" y2="95" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d1a)"/><line x1="447" y1="140" x2="408" y2="140" stroke="#3dd6c4" stroke-width="2" marker-end="url(#d1b)"/><line x1="232" y1="140" x2="193" y2="140" stroke="#3dd6c4" stroke-width="2" marker-end="url(#d1b)"/><text class="lbl-amber" x="211" y="60">tool call</text><text class="lbl-cyan" x="211" y="176">result</text><path d="M105,160 C105,225 535,225 535,160" fill="none" stroke="#5e5c74" stroke-width="1.5" stroke-dasharray="5 4"/><text class="lbl-sm" x="320" y="236">repeat until the model answers without asking for a tool</text><text class="lbl-hot" x="320" y="40">the model never touches the city — it only writes</text></svg><div class="diag-cap">চিত্র: model লেখে, harness বয়ে নেয় ও অনুমতি নেয়, tool কাজ করে — আর ফলাফল আবার model-এর সামনে। · Model writes, harness carries and gates, tools act, results return.</div></div>

<p>এবার তুমি নিজের এক ঘণ্টার দিকে তাকাও। তুমি ছিলে দ্বিতীয় ঘর — পিয়ন। Chat-এর AI ছিল প্রথম ঘর, আর তোমার editor, terminal, test ছিল শহর। Claude Code নতুন কোনো মুনশি আনেনি — মুনশি একই, একটা Claude model। Claude Code হলো <strong>পিয়ন</strong>: একটা program, যে model-এর লেখা অনুরোধ পড়ে file খোলে, command চালায়, অনুমতি চায়, আর ফলাফল model-এর সামনে ফিরিয়ে দেয়।</p>
<p class="en">Now look at your own hour. You were the second box — the runner. The chat AI was the first box; your editor, terminal and tests were the city. Claude Code did not bring a new munshi — the munshi is the same Claude model. Claude Code is the <strong>runner</strong>: a program that reads the model's written requests, opens files, runs commands, asks permission, and puts the results back in front of the model.</p>

<div class="code-block"># তোমার এক prompt-এর ভেতরে যা ঘটে (সরল করে)
You      : "fix the 500 when billing address is missing"
Model    : [tool request] Grep  pattern="billing_address"
Harness  : runs Grep  → 3 matches            (model never ran it)
Model    : [tool request] Read  invoices/serializers.py
Harness  : returns the file text
Model    : [tool request] Bash  "pytest -k billing -q"
Harness  : permission OK → runs → "1 failed: NoneType..."
Model    : [tool request] Edit  line 42 → handle None
Harness  : checkpoint saved → edits the file
Model    : [tool request] Bash  "pytest -q" → "142 passed"
Model    : "Fixed: the serializer assumed an address. All tests pass."
           (no tool request → the loop stops)</div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ Chat assistant</div>তুমি পিয়ন। Context তুমি নিয়ে যাও, code তুমি ফেরত আনো। Model কখনো ফলাফল নিজে দেখে না — তুমি যা বলো, তা-ই দেখে।<br><em>You are the runner; the model only sees what you remember to carry.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ Agent (Claude Code)</div>Harness পিয়ন। Model অনুরোধ লেখে, harness চালায়, ফলাফল নিজে দেখে, ভুল হলে আবার চেষ্টা করে। তুমি দিক ঠিক করো আর review করো।<br><em>The harness is the runner; you steer and review.</em></div></div>

<p class="verse">মুনশি একটু থেমে বললেন — ছোটবেলায় মক্তবে শুনেছিলাম, নবীজি ﷺ রোমের সম্রাট হেরাক্লিয়াসকে চিঠি পাঠিয়েছিলেন। তিনি মদিনা থেকে নড়েননি; চিঠি নিয়ে গিয়েছিলেন দিহইয়া আল-কালবি, বুসরার শাসকের হাতে দিয়েছিলেন, সেখান থেকে সম্রাটের কাছে পৌঁছেছিল — আর সম্রাটের প্রশ্ন, আবু সুফিয়ানের উত্তর, সবই আবার খবর হয়ে ফিরে এসেছিল (সহীহ বুখারী ৭)। লেখক এক জায়গায়, বাহক পথে, উত্তর ফিরে আসে, তারপর পরের চিঠি। সেই দিন থেকে আমি জানি — চিঠির শক্তি দুই জনের: যে লেখে, আর যে বয়ে নেয়।</p>
<p class="en">He pauses: As a boy in the maktab I heard that the Prophet ﷺ sent a letter to Heraclius, Emperor of Rome. He did not leave Madinah; Dihya al-Kalbi carried it, handed it to the governor of Busra, and it reached the emperor — and the emperor's questions and the answers returned as news (Sahih al-Bukhari 7). The writer stays in one place, the carrier walks, the reply returns, then the next letter. The power of a letter belongs to two people: the one who writes, and the one who carries.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>মুনশির সতর্কতা:</strong> AI tool নিয়ে বেশিরভাগ বিভ্রান্তি আসে দুটো ঘর গুলিয়ে ফেলা থেকে। "Model আমার file মুছে দিয়েছে" — না, model মুছতে <em>বলেছে</em>; harness মুছেছে, কারণ অনুমতি ছিল। দায় ঠিক করতে হলে জানতে হবে কোন ঘর কী করে।<br><em>Most confusion about AI tools comes from blurring the two boxes. The model asked; the harness acted because it was allowed.</em></div></div>

<p>Book 59-এর প্রথম দরজায় হাসু মিস্ত্রি তোমার হাতে হাতুড়ি দিয়েছিলেন — কীভাবে <strong>claude</strong> চালাতে হয়। মুনশি আবদুল করিম বলছেন অন্য কথা: হাতুড়ি কে ধরে, সেটা জানো। Book 12-এ স্বাধীন বুদ্ধির agent দেখেছিলে দূর থেকে; এখানে তার পেট কেটে দেখছ।</p>
<p class="en">In Book 59's first door, Hasu the mistri put a hammer in your hand — how to run <strong>claude</strong>. Munshi Abdul Karim says something else: know who holds the hammer. In Book 12 you saw agents from a distance; here you open one up.</p>

<div class="secret-box"><div class="label">দরজা ৯ — তালিসমান</div><div class="text">✉️ Model শুধু লেখে; হাত-পা harness-এর।<br><small>এই লেখা → বয়ে নেওয়া → উত্তর → আবার লেখার loop-কেই বলে <strong>agent</strong>। এক বাক্যে: agent = model + harness (tools + permissions + loop)।</small></div></div>`,
  senior: {
    title: "Quick Guide — Model vs Harness",
    body: `<p><strong>Model</strong> (Claude): takes text in, gives text out. Some of that text is a structured tool request. It has no hands, no disk, no network of its own.</p>
<p><strong>Harness</strong> (Claude Code, Codex CLI, Gemini CLI, your own script): runs tools, enforces permissions, manages memory and context, loops until the model stops asking for tools.</p>
<p><strong>Why it matters:</strong> quality problems usually live in the harness (tools, context, rules), and safety must live there too — the model can only ask.</p>
<p>মনে রাখো: যেকোনো coding agent চার জিনিসে গড়া — model call, tool registry, permission gate, context manager। দরজা ২৮-এ এই চারটাই বারো লাইনে দেখবে।</p>`
  }
});


// ── DOOR 10 · হরফের খোপ — The Type Case ──
doors.push({
  num: 10,
  icon: "🔤",
  color: "#818cf8",
  name: "হরফের খোপ",
  subtitle: "The Type Case",
  tech: "Tokenization — subword pieces, cost and limits",
  spirit: "আসমা — নামের একক দিয়েই জ্ঞানের শুরু",
  secret: "Model অক্ষর দেখে না, টুকরো দেখে — দাম, সীমা, সবকিছু গোনা হয় টুকরোয়।",
  recall: {
    q: "একই কথা ইংরেজিতে আর বাংলায় পাঠালে বাংলায় প্রায়ই বেশি token লাগে কেন? আর context-এর সীমা কীসে মাপা হয় — শব্দে, অক্ষরে, না token-এ?",
    qen: "Why does the same message often cost more tokens in Bangla than in English? And is the context limit measured in words, characters, or tokens?",
    a: "Tokenizer-এর শব্দভাণ্ডার (খোপ) মূলত বেশি-দেখা text থেকে বানানো, যেখানে ইংরেজি অনেক বেশি; তাই ইংরেজির সাধারণ টুকরো একেকটা বড় token, আর বাংলা শব্দ ভাঙে ছোট ছোট অনেক টুকরোয়। সীমা, দাম — সব মাপা হয় token-এ।",
    aen: "The tokenizer's vocabulary is built from the text it saw most, which is heavily English; common English chunks become single tokens while Bangla words split into many smaller pieces. Limits and prices are counted in tokens."
  },
  story: `<p class="scene-setting">বাংলাবাজারের এক পুরনো ছাপাখানা। কেরোসিন আর ছাপার কালির ঝাঁঝালো গন্ধ, সিলিং থেকে ঝোলা বাল্বের হলুদ আলো, আর টক-টক-টক — কম্পোজিং স্টিকে সীসার হরফ বসানোর শব্দ। কাঠের বিশাল কেসের সামনে দাঁড়িয়ে কম্পোজিটর হারাধন বসাক। তাঁর আঙুলের ডগা সীসায় ধূসর; চোখ না তুলেই তিনি খোপ থেকে হরফ তোলেন — উল্টো, আয়নার মতো, তবু ভুল হয় না। তুমি একটা হরফ হাতে নাও। ঠান্ডা, আশ্চর্য ভারী।</p>
<p class="scene-setting en">An old press in Banglabazar. The sharp smell of kerosene and printing ink, a yellow bulb hanging from the ceiling, and tock-tock-tock — lead type dropping into a composing stick. Before a huge wooden case stands compositor Haradhan Basak, fingertips grey with lead. Without looking he picks sorts from the compartments — backwards, mirror-reversed, never wrong. You lift one sort. Cold, surprisingly heavy.</p>

<div class="dialogue">তুমি বলো — কাকা, আমার AI-এর বিল দেখে মাথা ঘুরছে। আমি তো শব্দ গুনে ভেবেছিলাম কম হবে। আর বাংলায় প্রশ্ন করলে বিল আরও বেশি! হারাধন হাসলেন না। বললেন — আমিও একবার শব্দ গুনে ঠকেছিলাম। একাত্তরের পরে একটা বাংলা পুস্তিকার দাম ধরেছিলাম ইংরেজি হ্যান্ডবিলের হিসাবে — শব্দপ্রতি। তিন রাত না ঘুমিয়ে কম্পোজ করলাম, আর লোকসান গুনলাম। কারণ আমি শব্দ বেচি না, বাবা। আমি হরফ বসাই।</div>
<div class="dialogue en">You say: My AI bill makes my head spin. I counted words and expected less — and asking in Bangla costs even more! Haradhan does not smile. I was cheated by word-counting too. After seventy-one I priced a Bangla pamphlet like an English handbill — per word. Three sleepless nights of composing, and a loss. Because I do not sell words, son. I set sorts.</div>

<p>তিনি কেসটা দেখালেন। প্রতিটা খোপে একেকটা সীসার টুকরো। কিছু খোপে একটা অক্ষর। কিন্তু কিছু খোপে পুরো টুকরো ঢালাই করা — "the", "ing", "tion" — কারণ এগুলো এত বেশি লাগে যে একটা একটা অক্ষর বসানো সময়ের অপচয়। কোনো শব্দ যদি পুরো একটা হরফ হিসেবে থাকে, তিনি সেটাই তোলেন; না থাকলে ভেঙে বড় থেকে ছোট টুকরোয় সাজান। কেসটার মাপ নির্দিষ্ট — নতুন খোপ চাইলেই যোগ করা যায় না।</p>
<p class="en">He shows you the case. Each compartment holds one lead piece. Some hold a single letter. But some hold a whole cast chunk — "the", "ing", "tion" — because they are needed so often that setting them letter by letter wastes time. If a word exists as one sort, he takes it; if not, he builds it from the largest pieces available. The case has a fixed size — you cannot add compartments on a whim.</p>

<p>তারপর আসল কথা। এই কেস বানানো হয়েছিল ইংরেজি কাজের জন্য — এখানে বেশিরভাগ চাকরি ছিল ইংরেজি। তাই ইংরেজির সাধারণ টুকরোগুলোর নিজস্ব খোপ আছে। বাংলার যুক্তাক্ষর — ক্ষ, জ্ঞ, ন্ত্র — এর জন্য খোপ কম, তাই একটা বাংলা শব্দ বসাতে প্রায়ই চার-পাঁচটা ছোট টুকরো লাগে। হারাধন বললেন — একই কথা, বাংলায় বেশি সীসা। বিল হয় সীসা গুনে।</p>
<p class="en">Then the real point. This case was built for English jobs — most work here was English. So common English pieces have their own compartments. Bangla conjuncts — ক্ষ, জ্ঞ, ন্ত্র — have fewer, so one Bangla word often takes four or five small pieces. Same message, more lead in Bangla. The bill counts lead.</p>

<div class="diagram"><div class="diag-title">Same idea, different number of sorts · একই কথা, ভিন্ন সংখ্যক টুকরো</div><svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg"><text class="lbl-cyan" x="70" y="40">English</text><rect class="node-cyan" x="130" y="22" width="70" height="34" rx="6"/><text class="lbl" x="165" y="39">def</text><rect class="node-cyan" x="206" y="22" width="84" height="34" rx="6"/><text class="lbl" x="248" y="39"> invoice</text><rect class="node-cyan" x="296" y="22" width="70" height="34" rx="6"/><text class="lbl" x="331" y="39">_total</text><rect class="node-cyan" x="372" y="22" width="40" height="34" rx="6"/><text class="lbl" x="392" y="39">(</text><text class="lbl-cyan" x="560" y="39">4 pieces</text><text class="lbl-amber" x="70" y="110">বাংলা</text><rect class="node-purple" x="130" y="92" width="40" height="34" rx="6"/><text class="lbl" x="150" y="109">চা</text><rect class="node-purple" x="176" y="92" width="40" height="34" rx="6"/><text class="lbl" x="196" y="109">ল</text><rect class="node-purple" x="222" y="92" width="40" height="34" rx="6"/><text class="lbl" x="242" y="109">া</text><rect class="node-purple" x="268" y="92" width="40" height="34" rx="6"/><text class="lbl" x="288" y="109">ন</text><rect class="node-purple" x="314" y="92" width="40" height="34" rx="6"/><text class="lbl" x="334" y="109">ের</text><rect class="node-purple" x="360" y="92" width="40" height="34" rx="6"/><text class="lbl" x="380" y="109"> মো</text><rect class="node-purple" x="406" y="92" width="40" height="34" rx="6"/><text class="lbl" x="426" y="109">ট</text><text class="lbl-amber" x="560" y="109">7+ pieces</text><text class="lbl-sm" x="320" y="160">illustrative split — real tokenizers differ, but the pattern holds:</text><text class="lbl-hot" x="320" y="182">pieces the vocabulary saw often → one token; rarer scripts → many tokens</text></svg><div class="diag-cap">চিত্র: উদাহরণমূলক ভাঙন — আসল tokenizer ভিন্নভাবে ভাঙে, কিন্তু ধরনটা একই। · Illustrative only; real splits differ.</div></div>

<p>এবার model-এর দিকে ফেরো। একটা language model লেখা পড়ে না, অক্ষরও না — পড়ে <strong>টুকরো</strong>। একটা নির্দিষ্ট শব্দভাণ্ডার থাকে, সাধারণত কয়েক হাজার থেকে লাখের কাছাকাছি টুকরো; প্রতিটা টুকরোর একটা নম্বর। সবচেয়ে প্রচলিত পদ্ধতিতে (byte-pair encoding, Sennrich ও সহকর্মী, ACL ২০১৬) বারবার একসঙ্গে দেখা জোড়াগুলো জোড়া লাগিয়ে বড় টুকরো বানানো হয় — ঠিক হারাধনের ঢালাই করা "ing"-এর মতো। মোটামুটি হিসাবে ইংরেজিতে একটা টুকরো প্রায় ¾ শব্দ; code আর বাংলায় অনুপাত খারাপ।</p>
<p class="en">Now turn to the model. A language model reads neither prose nor letters — it reads <strong>pieces</strong>. It has a fixed vocabulary, typically tens of thousands to a couple of hundred thousand pieces, each with a number. The most common method, byte-pair encoding (Sennrich, Haddow and Birch, ACL 2016), repeatedly merges pairs that appear together often into bigger pieces — exactly Haradhan's cast "ing". As a rough rule an English token is about ¾ of a word; code and Bangla fare worse.</p>

<div class="code-block"># দাম জানতে শব্দ নয়, token গোনো — Anthropic API-তে count endpoint আছে
import anthropic
client = anthropic.Anthropic()

for text in ["What is the invoice total?", "চালানের মোট কত?"]:
    n = client.messages.count_tokens(
        model="claude-sonnet-4-5",          # check the current model list
        messages=[{"role": "user", "content": text}],
    )
    print(len(text), "chars →", n.input_tokens, "tokens")

# তিনটে জিনিস এখান থেকে বুঝবে:
#  ১. context-এর সীমা token-এ মাপা হয়
#  ২. দাম input আর output token আলাদা ধরে হয়
#  ৩. প্রতিটা provider-এর tokenizer আলাদা — একই লেখা, ভিন্ন সংখ্যা</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">≈ ¾</div><div class="sc-label">ইংরেজিতে এক token ≈ ¾ শব্দ (মোটামুটি)</div></div>
<div class="stat-card"><div class="sc-num">বেশি</div><div class="sc-label">code আর বাংলায় প্রতি অক্ষরে বেশি token</div></div>
<div class="stat-card"><div class="sc-num">ভিন্ন</div><div class="sc-label">প্রতিটা provider-এর নিজস্ব tokenizer</div></div>
</div>

<div class="callout tip"><span class="co-icon">💡</span><div><strong>হারাধনের হিসাব:</strong> Model কেন "strawberry"-তে কটা r আছে গুনতে হোঁচট খায়? কারণ সে অক্ষর দেখেই না — দেখে দুই-তিনটা ঢালাই করা টুকরো। অক্ষর-স্তরের কাজে (উল্টে লেখা, অক্ষর গোনা) model-কে একটা tool দাও, বা code লিখে করাতে বলো।<br><em>Models stumble at counting letters because they never see letters, only cast pieces. For character-level work, let them use code.</em></div></div>

<p class="verse">হারাধন কেসের পাশে একটা পুরনো প্রুফ-কাগজ দেখালেন। বললেন — একবার এক প্রকাশকের জন্য কুরআনের বাংলা তরজমা কম্পোজ করেছিলাম। একটা আয়াতে এসে থেমে গিয়েছিলাম: "আর তিনি আদমকে সব কিছুর নাম শিখিয়েছিলেন" (সূরা বাকারা ২:৩১, ভাবানুবাদ)। ভেবেছিলাম, জ্ঞান শুরু হয় নাম দিয়ে — প্রতিটা জিনিসের একটা একক, একটা নম্বর। আমার কেসও তা-ই: যে জিনিসের নিজের খোপ নেই, তাকে ছোট ছোট নাম জুড়ে বানাতে হয়।</p>
<p class="en">Haradhan shows an old proof sheet. Once I composed a Bangla translation of the Qur'an for a publisher. At one verse I stopped: "And He taught Adam the names — all of them" (2:31, Sahih International). Knowledge begins with names — a unit for each thing, a number. My case is the same: whatever has no compartment of its own must be built from smaller names joined together.</p>

<p>Book 8-এ (LLM দর্শন) তুমি token থেকে embedding-এ যাওয়ার পথ দেখেছিলে, Book 18-এ অর্থের জ্যামিতি। হারাধন শুধু প্রথম ধাপটা হাতে ধরিয়ে দিলেন: model-এর দুনিয়ার মুদ্রা হলো টুকরো। আর মুনশি আবদুল করিম (দরজা ৯) যা "লেখেন", তা-ও আসলে একটার পর একটা টুকরো — সেটা পরের দরজার তাঁতি দেখাবেন।</p>
<p class="en">In Book 8 you followed tokens into embeddings, in Book 18 the geometry of meaning. Haradhan hands you only the first step: the currency of the model's world is the piece. And what Munshi Abdul Karim (Door 9) "writes" is also piece after piece — the weaver of the next door will show you how.</p>

<div class="secret-box"><div class="label">দরজা ১০ — তালিসমান</div><div class="text">🔤 Model অক্ষর দেখে না, টুকরো দেখে — দাম গোনা হয় টুকরোয়।<br><small>এই টুকরোকেই বলে <strong>token</strong>, আর খোপ ভাগ করার পদ্ধতিকে <strong>tokenization</strong> (যেমন BPE)।</small></div></div>`,
  senior: {
    title: "Quick Guide — Tokens",
    body: `<p><strong>Token:</strong> a subword piece from a fixed vocabulary. Context limits, pricing and rate limits are all in tokens.</p>
<p><strong>BPE:</strong> start from bytes/characters, repeatedly merge the most frequent adjacent pair. Frequent strings become single tokens.</p>
<p><strong>Practical:</strong> measure with the token-counting endpoint instead of guessing; Bangla and code usually cost more per character; each provider's tokenizer differs, so the same prompt costs a different count elsewhere.</p>
<p>কেন কাজে লাগে: বড় file পাঠানোর আগে token গুনলে বুঝবে context কতটা খাবে — যা দরজা ১৩-এর পেশকারের টেবিলে সরাসরি লাগবে।</p>`
  }
});


// ── DOOR 11 · তাঁতির মাকু — The Weaver's Shuttle ──
doors.push({
  num: 11,
  icon: "🧵",
  color: "#a78bfa",
  name: "তাঁতির মাকু",
  subtitle: "The Weaver's Shuttle",
  tech: "Next-token prediction · sampling · temperature",
  spirit: "তানজিল — অংশে অংশে, ধারাবাহিকভাবে নাযিল",
  secret: "একবারে এক সুতো — প্রতিটি নতুন সুতো আগের সব সুতোর ওপর দাঁড়ায়, আর হাত বেছে নেয় সম্ভাব্যতা দেখে।",
  recall: {
    q: "একই prompt দুবার দিলে Claude আলাদা উত্তর দেয় কেন? আর ৫০০ token-এর উত্তর তৈরি করতে model মোটামুটি কতবার চলে?",
    qen: "Why can the same prompt give two different answers? And roughly how many times does the model run to produce a 500-token answer?",
    a: "Model প্রতিটা ধাপে সম্ভাব্য সব পরের token-এর জন্য একটা সম্ভাবনা দেয়, আর sampler সেখান থেকে একটা বেছে নেয় — temperature বেশি হলে বৈচিত্র্য বেশি। এক token বেছে নিয়ে আবার পুরো ধাপ চলে, তাই ৫০০ token মানে মোটামুটি ৫০০ বার।",
    aen: "At each step the model gives a probability for every possible next token and a sampler picks one — higher temperature means more variety. After one token is chosen the whole step runs again, so 500 tokens means roughly 500 passes."
  },
  story: `<p class="scene-setting">রূপগঞ্জের এক জামদানি তাঁতঘর। মাটির মেঝে, ভেজা ভাতের মাড়ের টক গন্ধ, বাতাসে ভাসা তুলোর আঁশ জিভে লাগে। খটাস-খট, খটাস-খট — তাঁতের ছন্দ। মাকু ছুটে যায় ডান থেকে বাঁয়ে, বাঁ থেকে ডানে। তাঁতি রহমত আলীর ডান তর্জনীতে একটা খাঁজ — চল্লিশ বছর মাকু ঠেলে ঠেলে কড়া পড়ে গেছে। সামনে কোনো আঁকা নকশা নেই। তবু শাড়িতে ফুল ফুটছে, লতা বাড়ছে।</p>
<p class="scene-setting en">A Jamdani loom-house in Rupganj. Mud floor, the sour smell of rice starch, cotton fuzz in the air that settles on your tongue. Clack-clack, clack-clack — the loom's rhythm. The shuttle flies right to left, left to right. Weaver Rahmat Ali's right index finger has a groove, forty years of callus from the shuttle. There is no drawn pattern in front of him. Still, flowers bloom in the sari and vines grow.</p>

<div class="dialogue">তুমি বলো — চাচা, আমার AI কাল একটা উত্তর দিল, আজ একই প্রশ্নে আরেকটা। ও কি ভাঙা? রহমত আলী মাকু থামিয়ে হাসলেন। বললেন — আমাকে একই শাড়ি দুবার বুনতে দাও, দুটো হুবহু এক হবে না। কিন্তু দুটোই জামদানি। আমার হাত প্রতিটা সুতোয় একটু বেছে নেয়।</div>
<div class="dialogue en">You say: Uncle, yesterday my AI gave one answer, today another to the same question. Is it broken? Rahmat Ali stops the shuttle and smiles: Give me the same sari to weave twice and the two will not be identical. But both will be Jamdani. My hand chooses a little at every thread.</div>

<p>তারপর তাঁর নিজের ব্যর্থতার কথা। এক ঈদের আগে তাড়া ছিল, বাজারে তিনটা শাড়ি দেওয়ার কথা। তিনি ভাবলেন মাঝখানের বড় ফুলটা আগে বুনে ফেলবেন, নিচের সারিগুলো পরে। মাঝখান থেকে শুরু করলেন — আর ফুলটা নিচের লতার সঙ্গে মিলল না, কোনো সুতো কোথাও গিয়ে দাঁড়াল না। দুই দিনের কাজ খুলে ফেলতে হলো। বললেন — তাঁতে কোনো লাফ নেই, বাবা। দশ নম্বর সারি বুনতে হলে আগে নয় নম্বর লাগে। আর প্রতিটা নতুন সারি আমি বুনি নিচের সব সারির দিকে তাকিয়ে।</p>
<p class="en">Then his own failure. Before one Eid he was in a hurry, three saris due at the market. He decided to weave the big central flower first and the lower rows later. He started in the middle — and the flower would not meet the vine below; no thread had anywhere to stand. Two days of work had to be unpicked. There is no jumping on a loom, son. To weave row ten you need row nine. And every new row I weave looking at all the rows beneath it.</p>

<p>তুমি জিজ্ঞেস করো — কিন্তু নকশা ছাড়া আপনি জানেন কীভাবে পরের সুতো কোথায় যাবে? রহমত আলী বললেন — হাজারটা শাড়ি বুনেছি, হাজারটা দেখেছি। এখন এই লতার পরে কী আসতে পারে, আমার হাত জানে: বেশিরভাগ সময় একটা পাতা, মাঝে মাঝে একটা কলি, খুব কম সময় একটা পাখি। যখন কোনো বউ তার মায়ের শাড়ির হুবহু নকল চায়, আমি সবচেয়ে চেনা পথে যাই। যখন কেউ বলে "চমকে দিন", তখন হাতকে একটু ছেড়ে দিই — তখন পাখিও আসে।</p>
<p class="en">You ask: but without a pattern, how do you know where the next thread goes? I have woven a thousand saris and seen a thousand more. My hand knows what can come after this vine: mostly a leaf, sometimes a bud, rarely a bird. When a bride wants an exact copy of her mother's sari, I take the most familiar path. When someone says "surprise me", I loosen my hand a little — then the bird comes too.</p>

<div class="diagram"><div class="diag-title">One thread at a time · একবারে এক সুতো</div><svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d3a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker><marker id="d3b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#ff6b35"/></marker></defs><rect class="node" x="20" y="30" width="210" height="44" rx="8"/><text class="lbl" x="125" y="52">def total(items):</text><text class="lbl-sm" x="160" y="94">everything woven so far</text><line x1="230" y1="52" x2="275" y2="52" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d3a)"/><rect class="node-purple" x="280" y="22" width="110" height="60" rx="10"/><text class="lbl" x="335" y="46">MODEL</text><text class="lbl-sm" x="335" y="66">looks at all rows</text><line x1="390" y1="52" x2="425" y2="52" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d3a)"/><text class="lbl-sm" x="470" y="22">next-token probabilities</text><rect x="430" y="32" width="150" height="14" rx="3" fill="rgba(99,102,241,.45)"/><text class="lbl-sm" x="610" y="43">41%</text><rect x="430" y="52" width="80" height="14" rx="3" fill="rgba(99,102,241,.25)"/><text class="lbl-sm" x="540" y="63">22%</text><rect x="430" y="72" width="34" height="14" rx="3" fill="rgba(99,102,241,.18)"/><text class="lbl-sm" x="490" y="83">9%</text><text class="lbl-sm" x="455" y="104" style="text-anchor:start">"return" · "total" · "\\n" …</text><rect class="node-leaf" x="370" y="150" width="260" height="50" rx="10"/><text class="lbl" x="500" y="170">SAMPLE → "return"</text><text class="lbl-sm" x="500" y="188">temperature = how loose the hand is</text><line x1="505" y1="112" x2="505" y2="146" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d3a)"/><path d="M370,175 C220,175 60,160 60,78" fill="none" stroke="#ff6b35" stroke-width="2" marker-end="url(#d3b)"/><text class="lbl-hot" x="230" y="200">append the thread, weave again</text><text class="lbl-sm" x="230" y="222">500 tokens ≈ 500 passes</text></svg><div class="diag-cap">চিত্র: model সব সম্ভাব্য পরের token-এর সম্ভাবনা দেয়, sampler একটা বাছে, সেটা যোগ হয়, আবার পুরো ধাপ। · Probabilities → one sampled token → appended → repeat.</div></div>

<p>একটা language model ঠিক এভাবেই "লেখে"। সে পুরো উত্তর একবারে জানে না। প্রতিটা ধাপে সে এ পর্যন্ত বোনা সব token দেখে (transformer-এর attention ঠিক এই "নিচের সব সারির দিকে তাকানো"; Vaswani ও সহকর্মী, ২০১৭) আর প্রতিটা সম্ভাব্য পরের token-এর জন্য একটা সম্ভাবনা দেয়। একটা <strong>sampler</strong> সেখান থেকে একটা বেছে নেয়, সেটা আগের লেখার সঙ্গে জুড়ে যায়, তারপর পুরো ধাপ আবার চলে। <strong>Temperature</strong> হলো রহমত আলীর হাত কতটা ঢিলে: কম মানে প্রায় সবসময় সবচেয়ে চেনা পথ, বেশি মানে পাখি আসার সম্ভাবনা।</p>
<p class="en">A language model "writes" exactly like this. It does not know the whole answer at once. At each step it looks at every token woven so far (the transformer's attention is exactly this "looking at all rows beneath"; Vaswani et al., 2017) and gives a probability for every possible next token. A <strong>sampler</strong> picks one, it is appended, and the whole step runs again. <strong>Temperature</strong> is how loose Rahmat Ali's hand is: low means almost always the familiar path; high means the bird may come.</p>

<div class="code-block"># ধারণাটা কয়েক লাইনে (সত্যিকারের model নয়, শুধু ছন্দটা)
text = "def total(items):"
while not finished(text):
    probs  = model(text)                 # every possible next token → probability
    token  = sample(probs, temperature)  # the hand chooses
    text  += token                       # append the thread
# 500-token answer ≈ 500 trips through this loop
# (KV cache stops earlier rows from being fully recomputed — Book 17)</div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"একই প্রশ্নে আলাদা উত্তর মানে model ভাঙা।" "Model পুরো উত্তর আগে ভেবে তারপর টাইপ করে।"<br><em>Different answers mean it is broken; it plans the whole answer first.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ তাঁতির বোঝা</div>প্রতিটা সুতো বেছে নেওয়া হয় সম্ভাবনা দেখে — তাই verification জরুরি (দরজা ২২)। আর যা আগে বোনা হয়েছে (তোমার prompt, উদাহরণ) তা-ই পরের সুতোকে সবচেয়ে জোরে টানে।<br><em>Each thread is sampled, so verify; what came before steers what comes next.</em></div></div>

<div class="callout tip"><span class="co-icon">💡</span><div><strong>রহমত আলীর কৌশল:</strong> তুমি যদি prompt-এ codebase-এর একটা উদাহরণ দেখাও ("follow the pattern in reports/exporters.py"), সেটা নিচের সারির লতার মতো — পরের সব সুতো তার দিকে ঝোঁকে। এজন্যই উদাহরণ এত শক্তিশালী।<br><em>An example in your prompt is the vine in the lower rows — every new thread leans toward it.</em></div></div>

<p class="verse">রহমত আলী মাকুতে সুতো ভরতে ভরতে বললেন — আব্বা আমাকে কুরআন শিখিয়েছিলেন এই তাঁতে বসে, রোজ একটা-দুটো আয়াত। বলতেন, কুরআনও একবারে আসেনি: "আর কুরআন আমি ভাগ ভাগ করে নাযিল করেছি, যাতে তুমি থেমে থেমে মানুষের কাছে পড়তে পারো; আর আমি তা ক্রমে ক্রমে নাযিল করেছি" (সূরা ইসরা ১৭:১০৬, ভাবানুবাদ)। অংশের পর অংশ, প্রতিটা আগেরটার ওপর দাঁড়িয়ে। তাঁতও তা-ই শেখায় — লাফ নেই, ধারা আছে।</p>
<p class="en">Filling the shuttle, Rahmat Ali says: My father taught me the Qur'an sitting at this loom, a verse or two each day. He would say even the Qur'an did not come all at once: "And it is a Qur'an which We have separated by intervals that you might recite it to the people over a prolonged period. And We have sent it down progressively" (17:106, Sahih International). Portion after portion, each standing on what came before. The loom teaches the same: no jumping, only sequence.</p>

<p>হারাধন বসাক (দরজা ১০) বলেছিলেন model টুকরো দেখে। রহমত আলী বলছেন, সে টুকরোগুলো বোনে একটা একটা করে, আর প্রতিটা বাছাই একটু অনিশ্চিত। মুনশির (দরজা ৯) "লেখা" মানে আসলে এই তাঁত — আর tool call-ও এই তাঁতেই বোনা একটা বিশেষ নকশা মাত্র। Transformer-এর ভেতরের কলকবজা বিস্তারিত দেখতে চাইলে Book 8-এর দরজাগুলো আবার খোলো।</p>
<p class="en">Haradhan (Door 10) said the model sees pieces. Rahmat Ali says it weaves them one at a time, each choice a little uncertain. The munshi's "writing" (Door 9) is this loom — and a tool call is just a special motif woven on it. For the transformer's inner machinery, revisit Book 8.</p>

<div class="secret-box"><div class="label">দরজা ১১ — তালিসমান</div><div class="text">🧵 একবারে এক সুতো — প্রতিটি নতুন সুতো আগের সব সুতোর ওপর দাঁড়ায়।<br><small>এর নাম <strong>autoregressive next-token prediction</strong>: সম্ভাবনা → <strong>sampling</strong> (temperature, top-p) → যোগ → আবার।</small></div></div>`,
  senior: {
    title: "Quick Guide — Next-Token Generation",
    body: `<p><strong>Output:</strong> a probability distribution over the vocabulary for the next token — nothing more.</p>
<p><strong>Sampling:</strong> temperature (0 ≈ most-likely path, higher = more varied), top-p/top-k (restrict to likely candidates).</p>
<p><strong>Autoregressive:</strong> the chosen token is appended and the model runs again; generation time and output price scale with output length.</p>
<p><strong>Consequences for agents:</strong> answers vary run to run → always verify with tests; context and examples steer strongly → curate them (Doors 13–14).</p>`
  }
});


// ── DOOR 12 · ওস্তাদের চার সবক — The Ustad's Four Lessons ──
doors.push({
  num: 12,
  icon: "🎼",
  color: "#c084fc",
  name: "ওস্তাদের চার সবক",
  subtitle: "The Ustad's Four Lessons",
  tech: "Training stages — pre-training → tuning → RLHF & Constitutional AI → agentic RL",
  spirit: "তাখলিক — ধাপে ধাপে গড়া, শেষে এক নতুন সৃষ্টি",
  secret: "Pre-training জ্ঞান দেয়, tuning আদব দেয়, feedback চরিত্র দেয়, আসল কাজে RL দেয় হাত।",
  recall: {
    q: "Base model আর assistant model-এর পার্থক্য কী? আর test দিলে Claude-এর agent হিসেবে কাজ ভালো হয় কেন?",
    qen: "What is the difference between a base model and an assistant model? And why does giving Claude tests make it a better agent?",
    a: "Base model শুধু লেখা চালিয়ে যায় — প্রশ্ন দিলে হয়তো আরও প্রশ্ন লেখে। Tuning আর feedback-এর পর সে উত্তর দিতে শেখে। আর agentic RL-এ model-কে যাচাইযোগ্য কাজে (test pass করা) আসল সাফল্যের জন্য পুরস্কৃত করা হয়েছে — তাই test দিলে তুমি তার শেখা ভাষাতেই কথা বলো।",
    aen: "A base model only continues text — ask it a question and it may write more questions. Tuning and feedback teach it to answer. And in agentic RL the model was rewarded for real success on checkable tasks like passing tests — so giving tests speaks the language it was trained in."
  },
  story: `<p class="scene-setting">পুরান ঢাকার এক ছাদ, মাগরিবের পর। নিচের গলি থেকে কাবাবের ধোঁয়া আর আতরের গন্ধ উঠে আসছে। মাদুরে বসে ওস্তাদ মেহের আলী খান সেতারের জওয়ারি ঠিক করছেন — তারে আঙুল রাখলে একটা মিহি গুঞ্জন কাঁপে, যেন বাতাসে মৌমাছি। তাঁর তর্জনীর রুপোর মিজরাবটা এত বছরের ঘষায় কাগজের মতো পাতলা। তুমি ইস্পাতের তারে হাত রাখো — ঠান্ডা, টানটান।</p>
<p class="scene-setting en">A rooftop in Old Dhaka after maghrib. Kebab smoke and attar drift up from the lane. On a mat, Ustad Meher Ali Khan adjusts his sitar's jawari — touch a string and a fine buzz trembles, like bees in the air. The silver mizrab on his index finger is worn paper-thin by the years. You touch a steel string: cold, taut.</p>

<div class="dialogue">তুমি বলো — ওস্তাদজি, AI তো শুধু পরের token আন্দাজ করে (দরজা ১১)। তাহলে ও প্রশ্নের উত্তর দেয় কেন, আর tool চাইতে এত পাকা কেন? ইন্টারনেটের লেখা তো উত্তর দেয় না — forum-এ একটা প্রশ্নের নিচে আরও দশটা প্রশ্ন থাকে। ওস্তাদ মিজরাব খুলে তোমার দিকে বাড়িয়ে দিলেন। বললেন — কারণ ওকেও আমার মতো চারটা সবক পার হতে হয়েছে।</div>
<div class="dialogue en">You say: Ustadji, the AI only guesses the next token (Door 11). So why does it answer questions, and why is it so good at asking for tools? Internet text does not answer — under one forum question sit ten more questions. The ustad slips off his mizrab and holds it out: Because it also had to pass four lessons, like me.</div>

<p>তারপর তাঁর নিজের লজ্জার গল্প। বিশ বছর বয়সে তাঁর রিয়াজ ছিল নিখুঁত — হাজার হাজার ঘণ্টা রাগ শুনেছেন, যেকোনো ফ্রেজ ধরিয়ে দিলে পরেরটা বাজিয়ে দিতে পারতেন। প্রথম মেহফিলে জমিদারবাড়ির কর্তা বললেন, "একটা দাদরা শোনাও।" তিনি চোখ বন্ধ করে নিজের সকালের রিয়াজটাই চালিয়ে গেলেন — আলাপ, জোড়, ঝালা — পঁয়তাল্লিশ মিনিট। চোখ খুলে দেখলেন কর্তা উঠে চলে গেছেন। বললেন — আমি জানতাম সব, কিন্তু শুনিনি কী চাওয়া হয়েছে।</p>
<p class="en">Then his shame. At twenty his riyaz was flawless — thousands of hours of listening, give him any phrase and he could play the next. At his first mehfil the host asked, "Play a dadra." He closed his eyes and continued his own morning practice — alaap, jor, jhala — forty-five minutes. When he opened them the host had left. I knew everything, but I did not hear what was asked.</p>

<div class="diagram"><div class="diag-title">Four lessons, four seasons · চার সবক</div><svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d4a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker></defs><rect class="node-moon" x="10" y="30" width="140" height="90" rx="10"/><text class="lbl" x="80" y="55">১ · শোনা</text><text class="lbl-sm" x="80" y="78">Pre-training</text><text class="lbl-sm" x="80" y="95">continue any phrase</text><rect class="node-leaf" x="170" y="30" width="140" height="90" rx="10"/><text class="lbl" x="240" y="55">২ · আদব</text><text class="lbl-sm" x="240" y="78">Instruction tuning</text><text class="lbl-sm" x="240" y="95">play what is asked</text><rect class="node" x="330" y="30" width="140" height="90" rx="10"/><text class="lbl" x="400" y="55">৩ · নজর</text><text class="lbl-sm" x="400" y="78">RLHF + Constitution</text><text class="lbl-sm" x="400" y="95">nod · frown · rules</text><rect class="node-hot" x="490" y="30" width="140" height="90" rx="10"/><text class="lbl" x="560" y="55">৪ · সঙ্গত</text><text class="lbl-sm" x="560" y="78">Agentic RL</text><text class="lbl-sm" x="560" y="95">checkable taal</text><line x1="150" y1="75" x2="167" y2="75" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d4a)"/><line x1="310" y1="75" x2="327" y2="75" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d4a)"/><line x1="470" y1="75" x2="487" y2="75" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d4a)"/><text class="lbl-cyan" x="80" y="150">base model</text><text class="lbl-cyan" x="240" y="150">answers</text><text class="lbl-cyan" x="400" y="150">helpful · honest</text><text class="lbl-cyan" x="560" y="150">tools · loops</text><text class="lbl-hot" x="320" y="200">your Claude Code sessions stand on lesson ৪</text></svg><div class="diag-cap">চিত্র: প্রতিটা সবক আগেরটার ওপর দাঁড়ায়। · Each stage builds on the one before.</div></div>

<p><strong>প্রথম সবক — শোনা।</strong> বছরের পর বছর শুধু শোনা, যতক্ষণ না যেকোনো ফ্রেজের পরেরটা হাতে চলে আসে। Model-এর জন্য এটা pre-training: বিশাল পরিমাণ লেখা আর code-এ পরের token আন্দাজ করা। ফল একটা <em>base model</em> — অনেক জানে, কিন্তু মেহফিলের আদব জানে না।</p>
<p class="en"><strong>Lesson one — listening.</strong> Years of listening until the next phrase comes to the hand by itself. For a model this is pre-training: predicting the next token over vast text and code. The result is a <em>base model</em> — knows a great deal, knows no mehfil manners.</p>

<p><strong>দ্বিতীয় সবক — আদব।</strong> শ্রোতা কিছু চাইলে সেটাই বাজাও, নিজের রিয়াজ নয়। Model-কে user আর assistant-এর পালা-করা কথোপকথনের উদাহরণ দিয়ে শেখানো হয় — instruction বা dialogue tuning। এখন প্রশ্ন দিলে সে উত্তর দেয়। Chat আসলে একটা document-এর ধরন, যেটা model একটা নির্দিষ্ট আদবে চালিয়ে যেতে শিখেছে।</p>
<p class="en"><strong>Lesson two — manners.</strong> When a listener asks, play that, not your riyaz. The model is trained on examples of turn-taking user/assistant conversations — instruction or dialogue tuning. Now a question gets an answer. Chat is a document format the model learned to continue with manners.</p>

<p><strong>তৃতীয় সবক — নজর।</strong> ওস্তাদ পাশে বসে শোনেন: মাথা নাড়েন, ভুরু কোঁচকান। শিষ্য শেখে কোনটা ভালো লাগে। আর ঘরানার একটা লিখিত নিয়মের খাতা আছে, যা দিয়ে শিষ্য নিজেই নিজের বাজনা বিচার করতে পারে। Model-এর জন্য এটা RLHF — মানুষ দুটো উত্তরের মধ্যে ভালোটা বাছে, একটা reward model সেই পছন্দ শেখে (Christiano ও সহকর্মী ২০১৭; Ouyang ও সহকর্মী ২০২২)। আর Anthropic-এর <strong>Constitutional AI</strong> (Bai ও সহকর্মী, ২০২২): একটা লিখিত নীতিমালা দিয়ে model নিজের উত্তর সমালোচনা ও সংশোধন করে, আর সেই নীতিভিত্তিক AI feedback মানুষের feedback-এর পরিপূরক হয়। Claude-এর চরিত্র — সহায়ক, সৎ, ক্ষতির ব্যাপারে সতর্ক — এখানে গড়ে ওঠে; Anthropic Claude-এর constitution প্রকাশও করেছে।</p>
<p class="en"><strong>Lesson three — the gaze.</strong> The ustad sits and listens: nods, frowns. The student learns what pleases. And the gharana keeps a written rulebook the student can judge himself by. For the model: RLHF — humans pick the better of two answers and a reward model learns the preference (Christiano et al. 2017; Ouyang et al. 2022). And Anthropic's <strong>Constitutional AI</strong> (Bai et al. 2022): a written set of principles guides the model to critique and revise its own answers, with principle-based AI feedback supplementing human feedback. Claude's character — helpful, honest, careful — is shaped here; Anthropic has also published Claude's constitution.</p>

<p><strong>চতুর্থ সবক — সঙ্গত।</strong> শেষে শিষ্যকে আসল গায়কের সঙ্গে বসানো হয়। এখানে তাল ঠিক থাকল কিনা, সেটা মতের ব্যাপার নয় — সম-এ এসে মিলল কি মিলল না, সবাই শোনে। আধুনিক Claude model-কে ঠিক এভাবে বহু-ধাপের কাজে reinforcement learning দিয়ে প্রশিক্ষণ দেওয়া হয়: tool ব্যবহার, code লেখা ও চালানো, failing test ঠিক করা। যেখানে সাফল্য যাচাই করা যায় (test pass), সেখানে আসল সাফল্যের জন্য পুরস্কার। কঠিন কাজের আগে উত্তরের আগে ভেবে নেওয়ার (extended thinking) অভ্যাসও এভাবে শেখানো যায় — যেমন কঠিন বন্দিশের আগে ওস্তাদ মনে মনে একবার গুনগুন করেন।</p>
<p class="en"><strong>Lesson four — accompaniment.</strong> Finally the student sits with a real singer. Whether the taal held is not opinion — everyone hears whether it lands on sam. Modern Claude models are trained just this way with reinforcement learning on multi-step tasks: using tools, writing and running code, fixing failing tests. Where success is checkable, real success is rewarded. Thinking before answering (extended thinking) can be trained the same way — like the ustad humming a hard bandish silently first.</p>

<div class="code-block"># চার সবক, তোমার Claude Code session-এ কোথায় দেখা যায়
১. Pre-training   → Django, FastAPI, pytest — সব আগে থেকেই চেনে
২. Tuning         → তুমি প্রশ্ন করলে উত্তর দেয়, document চালিয়ে যায় না
৩. RLHF + CAI     → অস্পষ্ট হলে জিজ্ঞেস করে, ক্ষতিকর কাজে সতর্ক হয়
৪. Agentic RL     → নিজে grep করে, test চালায়, ফেল দেখে আবার চেষ্টা করে

# তাই এই prompt ভালো কাজ করে — এটা সবক ৪-এর ভাষা:
"The test test_invoice_total fails. Make it pass without changing
 the test, then run the full suite."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ওস্তাদের সতর্কতা:</strong> Session-এর ভেতরে তুমি যা-ই বলো, model-এর weight বদলায় না। Model তোমার কাল থেকে "শেখে" না। শেখা মানে এখানে memory file, skill আর ভালো prompt — ওস্তাদের খাতা, শিষ্যের মাথা নয়।<br><em>Nothing you say in a session changes the weights. "Learning" in practice means memory files, skills and better prompts.</em></div></div>

<p class="verse">ওস্তাদ অনেকক্ষণ চুপ রইলেন, তারপর বললেন — আমার প্রথম শিষ্যকে যেদিন প্রথম মেহফিলে বাজাতে দেখলাম, মনে পড়ল সূরা মুমিনূনের আয়াত: মানুষকে মাটির নির্যাস থেকে, তারপর ধাপে ধাপে — প্রতিটা ধাপ আগেরটার ওপর — "তারপর আমি তাকে এক নতুন সৃষ্টিরূপে গড়ে তুলি" (২৩:১২–১৪, ভাবানুবাদ)। আল্লাহর সৃষ্টির সঙ্গে কোনো কিছুর তুলনা চলে না; শুধু এটুকু শিখেছি — ধাপ পেরোলে যে দাঁড়ায়, সে আগের কোনো ধাপের মতো নয়।</p>
<p class="en">The ustad is quiet a long while: The day I watched my first student play his first mehfil, I remembered Surah al-Mu'minun: man from an extract of clay, then stage by stage, each on the last — "then We developed him into another creation" (23:12–14, Sahih International). Nothing compares to Allah's creation; I only learned this much — what stands after the stages is like none of the stages before it.</p>

<p>দরজা ১১-এর তাঁতি দেখিয়েছিলেন কীভাবে সুতো বোনা হয়। মেহের আলী খান দেখালেন হাতটা কীভাবে তৈরি হলো। Fine-tuning-এর কারিগরি Book 11-এ, আর reinforcement learning-এর গণিত Book 55-এ। এখান থেকে সামনে তুমি আর model-এর ভেতরে থাকবে না — পরের দরজায় পেশকারের টেবিল, যেখানে harness ঠিক করে model কী দেখবে।</p>
<p class="en">Door 11's weaver showed how threads are woven; Meher Ali Khan showed how the hand was made. The craft of fine-tuning is in Book 11, the mathematics of RL in Book 55. From here you leave the model's insides — next is the clerk's desk, where the harness decides what the model sees.</p>

<div class="secret-box"><div class="label">দরজা ১২ — তালিসমান</div><div class="text">🎼 Pre-training জ্ঞান দেয়, tuning আদব দেয়, feedback চরিত্র দেয়, আসল কাজে RL দেয় হাত।<br><small>নামগুলো: <strong>pre-training → instruction tuning → RLHF / Constitutional AI → RL on agentic tasks</strong> (+ extended thinking)।</small></div></div>`,
  senior: {
    title: "Quick Guide — How Claude Was Trained",
    body: `<p><strong>Pre-training:</strong> next-token prediction on huge text + code → base model.</p>
<p><strong>Instruction / dialogue tuning:</strong> learns the user–assistant turn format.</p>
<p><strong>RLHF and Constitutional AI:</strong> preference learning from humans and from AI feedback guided by written principles (Bai et al. 2022).</p>
<p><strong>Agentic RL:</strong> rewarded for verified success on multi-step tool tasks — why tests, types and clear success criteria make Claude a stronger agent.</p>
<p>Opus, Sonnet, Haiku: একই পরিবার, ভিন্ন আকার ও দাম। নাম আর version প্রতি প্রজন্মে বদলায় — কোড hard-code করার আগে Anthropic-এর models পাতা দেখো।</p>`
  }
});
