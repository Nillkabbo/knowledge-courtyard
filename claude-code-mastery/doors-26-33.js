// ════════════════════════════════════════
// Book 59 v9 UNIFIED · ভেতর-ঘর তলা (26-33) — মেশিনের ভেতরটা
// Merged from Book 62's under-the-hood floor
// ════════════════════════════════════════

// ── DOOR 26 · মুনশির টুল — The Letter-Writer's Stool ──
doors.push({
  num: 26,
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

<div class="secret-box"><div class="label">দরজা ৯ — তালিসমান</div><div class="text">✉️ Model শুধু লেখে; হাত-পা harness-এর।<br><small>এই লেখা → বয়ে নেওয়া → উত্তর → আবার লেখার loop-কেই বলে <strong>agent</strong>। এক বাক্যে: agent = model + harness (tools + permissions + loop)।</small></div></div>  <div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 26</span><pre class="code-block"># ── প্রম্পট ১ · কে কী করছে তার বিভাজন-রেখা ──
&gt; তুমি কি model, নাকি harness? এই উত্তরের কোন অংশ তোমার ভেতরের ভাষা-মডেলের,
&gt; কোন অংশ ঘড়ির-কাঁটার (harness) — এক লাইনে ভাগ করো
# ← মডেল শুধু লেখে (পরের-টোকেন); লুপ, টুল, অনুমতি — সব কাঁটার

# ── প্রম্পট ২ · নিজের কাজ model-চোখে দেখা ──
&gt; আমার এই কাজটা তোমার কাছে কেমন দেখায়: টোকেন-লেখা বয়ে নেওয়ার স্রোত,
&gt; নাকি যন্ত্র চালানো? তোমার প্রতিটা টার্নে আসলে কী হয় — তিন বাক্যে
# ← মডেলের আত্ম-বর্ণনা প্রশিক্ষণ-জাত, তবু চোখ খোলে

# ── প্রম্পট ৩ · টুল-কল দেখে কাঁটা-চেনা ──
&gt; এবার একটা ফাইল পড়ে সারাংশ দাও — আর প্রতিটা টুল-কলের আগে এক লাইনে
&gt; বলো: এই মুহূর্তে কে সিদ্ধান্ত নিল (model) আর কে চালাল (harness)
# ← সিদ্ধান্ত=মডেল, সম্পাদনা=কাঁটা — পর্যবেক্ষণযোগ্য বিভাজন

# ── প্রম্পট ৪ · agent-সংজ্ঞা নিজ-হাতে ──
&gt; 'agent = model + harness' — এই সংজ্ঞায় আমার দৈনন্দিন Claude Code ব্যবহারের
&gt; কোন কোন দৃশ্য আসলে এজেন্সি, কোনটা শুধু চ্যাট? তিনটা উদাহরণ
# ← টুল-লুপ-সহ কাজ = এজেন্সি; এক-উত্তর = চ্যাট

# ── প্রম্পট ৫ · ভুল-দায় কার ──
&gt; টুল-আউটপুট ভুল হলে দোষ কার — model না harness? আর ভুল উত্তর হলে?
&gt; দুই ক্ষেত্রে দায়-বিভাজন ব্যাখ্যা করো
# ← ভুল-আউটপুট=কাঁটার-দায়, ভুল-সিদ্ধান্ত=মডেলের — ডিবাগের দিক-সূচক</pre></div></div>`,

senior: {
    title: "Quick Guide — Model vs Harness",
    body: `<p><strong>Model</strong> (Claude): takes text in, gives text out. Some of that text is a structured tool request. It has no hands, no disk, no network of its own.</p>
<p><strong>Harness</strong> (Claude Code, Codex CLI, Gemini CLI, your own script): runs tools, enforces permissions, manages memory and context, loops until the model stops asking for tools.</p>
<p><strong>Why it matters:</strong> quality problems usually live in the harness (tools, context, rules), and safety must live there too — the model can only ask.</p>
<p>মনে রাখো: যেকোনো coding agent চার জিনিসে গড়া — model call, tool registry, permission gate, context manager। দরজা ২৮-এ এই চারটাই বারো লাইনে দেখবে।</p>`
  }
});




// ── DOOR 27 · হরফের খোপ — The Type Case ──
doors.push({
  num: 27,
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

<div class="secret-box"><div class="label">দরজা ১০ — তালিসমান</div><div class="text">🔤 Model অক্ষর দেখে না, টুকরো দেখে — দাম গোনা হয় টুকরোয়।<br><small>এই টুকরোকেই বলে <strong>token</strong>, আর খোপ ভাগ করার পদ্ধতিকে <strong>tokenization</strong> (যেমন BPE)।</small></div></div>  <div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 27</span><pre class="code-block"># ── প্রম্পট ১ · নিজের প্রম্পটের টোকেন-হিসাব ──
&gt; /context
&gt; আমার বার্তাগুলো মোট কত টোকেন খাচ্ছে, আর CLAUDE.md কত? ভাগ-সহ বলো
# ← শব্দ≠টোকেন: বাংলা প্রায়ই ২-৩ খোপে ভাঙে — বিল তাই বাড়ে

# ── প্রম্পট ২ · খোপ-ভাঙা অনুভব করা ──
&gt; 'কারিগর', 'স্মৃতিবাক্স', 'refactor' — এই শব্দগুলো মোটামুটি কয়টা টোকেন হবে?
&gt; অনুমান করো, তারপর বলো কোন ধরনের শব্দ সস্তা আর কোনটা দামি
# ← চেনা ইংরেজি শব্দ প্রায়ই ১ খোপ; বিরল/মিশ্র শব্দ ভাঙে

# ── প্রম্পট ৩ · কনটেক্সট-বাজেট ধারণা ──
&gt; আমার কাজের ধরনে (লম্বা বাংলা-গল্পসহ স্ক্রিপ্ট) টোকেন-খরচ কমানোর
&gt; তিনটা বাস্তব উপায় বলো — ভাষা, ফাইল-নির্বাচন, সারাংশ-কৌশলে
# ← ইংরেজি-টেকনিক্যাল + বাংলা-গল্প মিশ্রণ প্রায়ই সস্তা

# ── প্রম্পট ৪ · সীমা-হিসাব ──
&gt; ২০০k টোকেনের জানালায় আমার এই প্রজেক্টের মূল ফাইলগুলো পুরো ঢুকবে,
&gt; নাকি চয়ন করতে হবে? আন্দাজ দাও — কোন ফাইল কতটা
# ← টোকেন-চেতনা নির্বাচন-চেতনা জন্মায়

# ── প্রম্পট ৫ · খরচ-তুলনা ──
&gt; একই অনুরোধ বাংলায় বনাম ইংরেজিতে — আন্দাজে কত ভিন্ন বিল হবে?
&gt; ব্যাখ্যা করো কেন
# ← লিপি-ভাঙা খরচ — বহুভাষিক কাজের বাস্তব হিসাব</pre></div></div>`,

senior: {
    title: "Quick Guide — Tokens",
    body: `<p><strong>Token:</strong> a subword piece from a fixed vocabulary. Context limits, pricing and rate limits are all in tokens.</p>
<p><strong>BPE:</strong> start from bytes/characters, repeatedly merge the most frequent adjacent pair. Frequent strings become single tokens.</p>
<p><strong>Practical:</strong> measure with the token-counting endpoint instead of guessing; Bangla and code usually cost more per character; each provider's tokenizer differs, so the same prompt costs a different count elsewhere.</p>
<p>কেন কাজে লাগে: বড় file পাঠানোর আগে token গুনলে বুঝবে context কতটা খাবে — যা দরজা ১৩-এর পেশকারের টেবিলে সরাসরি লাগবে।</p>`
  }
});




// ── DOOR 28 · তাঁতির মাকু — The Weaver's Shuttle ──
doors.push({
  num: 28,
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

<div class="secret-box"><div class="label">দরজা ১১ — তালিসমান</div><div class="text">🧵 একবারে এক সুতো — প্রতিটি নতুন সুতো আগের সব সুতোর ওপর দাঁড়ায়।<br><small>এর নাম <strong>autoregressive next-token prediction</strong>: সম্ভাবনা → <strong>sampling</strong> (temperature, top-p) → যোগ → আবার।</small></div></div>  <div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 28</span><pre class="code-block"># ── প্রম্পট ১ · পরের-শব্দ খেলা অনুভব করা ──
&gt; 'git status-এর পরে আমি সাধারণত চালাই…' — এই বাক্যটা পূরণ করো
&gt; পাঁচবার, প্রতিবার ভিন্ন — ব্যাখ্যা করো কেন ভিন্ন
# ← মডেল সম্ভাবনা-বিতরণ থেকে টানে; নিয়তি নয়, পাশা

# ── প্রম্পট ২ · temperature-প্রভাব পরীক্ষা ──
&gt; /model
&gt; একই সৃজনশীল প্রশ্ন: 'LedgerPilot-এর জন্য পাঁচটা ফিচার-আইডিয়া' —
&gt; দুইবার দাও; বলো কোন মাত্রায় বৈচিত্র্য আসছে
# ← তাপ বাড়লে বিতরণ চওড়া — নতুনত্ব বনাম গোঁজামিলের মাপকাঠি

# ── প্রম্পট ৩ · ডিটারমিনিস্টিক কাজের নিয়ম ──
&gt; কোন কাজে আমি চাই প্রতিবার হুবহু একই ফল (রিফ্যাক্টর-পরিকল্পনা),
&gt; কোনটায় চাই বৈচিত্র্য (আইডিয়া)? তাপমাত্রা-নির্বাচনের নিয়ম লেখো
# ← নির্ভরযোগ্যতা=ঠান্ডা, সৃজন=উষ্ণ — কাজ-দেখে বাছাই

# ── প্রম্পট ৪ · স্যাম্পলিং-ভুল চেনা ──
&gt; তুমি মাঝে মাঝে আত্মবিশ্বাসীভাবে ভুল API-নাম বলো — সেটা মিথ্যা
&gt; নয়, সম্ভাবনার পাশা। ব্যাখ্যা করো কেন, আর আমি যাচাই করব কীভাবে
# ← হ্যালুসিনেশন-বোঝা = স্যাম্পলিং-বোঝা; প্রতিষেধক যাচাই

# ── প্রম্পট ৫ · বীজ-পরীক্ষা ──
&gt; একই প্রম্পট দুইবার: প্রথমবারের শুরুর-পাঁচ-শব্দ মনে রেখে দ্বিতীয়বার
&gt; তুলো — কোথায় মিল, কোথায় ভিন্ন?
# ← বীজ না-দিলে প্রতি টার্ন নতুন পাশা — পরীক্ষাযোগ্য অনিশ্চয়তা</pre></div></div>`,

senior: {
    title: "Quick Guide — Next-Token Generation",
    body: `<p><strong>Output:</strong> a probability distribution over the vocabulary for the next token — nothing more.</p>
<p><strong>Sampling:</strong> temperature (0 ≈ most-likely path, higher = more varied), top-p/top-k (restrict to likely candidates).</p>
<p><strong>Autoregressive:</strong> the chosen token is appended and the model runs again; generation time and output price scale with output length.</p>
<p><strong>Consequences for agents:</strong> answers vary run to run → always verify with tests; context and examples steer strongly → curate them (Doors 13–14).</p>`
  }
});




// ── DOOR 29 · ওস্তাদের চার সবক — The Ustad's Four Lessons ──
doors.push({
  num: 29,
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

<div class="secret-box"><div class="label">দরজা ১২ — তালিসমান</div><div class="text">🎼 Pre-training জ্ঞান দেয়, tuning আদব দেয়, feedback চরিত্র দেয়, আসল কাজে RL দেয় হাত।<br><small>নামগুলো: <strong>pre-training → instruction tuning → RLHF / Constitutional AI → RL on agentic tasks</strong> (+ extended thinking)।</small></div></div>  <div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 29</span><pre class="code-block"># ── প্রম্পট ১ · তিন-ধাপ নিজ-ব্যাখ্যা ──
&gt; তোমার প্রশিক্ষণের তিন ধাপ — প্রি-ট্রেনিং, টিউনিং, RLHF — প্রতিটা
&gt; এক বাক্যে বলো: কী শিখলে, কী দিয়ে
# ← বিশ্বকোষ-পাঠ → নির্দেশ-পাঠ → রুচি-তালিম — ভিত্তি বোঝা

# ── প্রম্পট ২ · আচরণে ধাপ-চেনা ──
&gt; তোমার কোন আচরণ প্রি-ট্রেনিংয়ের (জ্ঞান), কোনটা RLHF-এর (ভদ্রতা)?
&gt; দুই-দুইটা উদাহরণ
# ← জানা আর মানা আলাদা তালিম — ডিবাগে কাজে লাগে

# ── প্রম্পট ৩ · কনস্টিটিউশন-প্রশ্ন ──
&gt; তোমার নীতি-প্রশিক্ষণ মোটামুটি কীসের ওপর দাঁড়ানো — নিজের শব্দে
&gt; তিন লাইনে
# ← মূল্য-স্রোত চেনা = আচরণের পূর্বাভাস পড়া

# ── প্রম্পট ৪ · সীমা-স্বীকারোক্তি ──
&gt; তোমার জ্ঞানের কাট-অফ আর তার পরের ঘটনা — এই সীমা নিয়ে কাজ করার
&gt; সময় আমি কী করব, তিনটা নিয়ম
# ← তাজা-ডক-টানা, যাচাই, তারিখ-জিজ্ঞাসা — সীমা-বন্ধু অভ্যাস

# ── প্রম্পট ৫ · ফাইন-টিউন কবে ──
&gt; আমার কাজ কি ফাইন-টিউনিং চায়, নাকি প্রম্পট-ই যথেষ্ট — আমার প্রজেক্ট
&gt; দেখে রায় দাও
# ← বেশিরভাগ ক্ষেত্রে প্রম্পট+কনটেক্সটই প্রথম ওষুধ</pre></div></div>`,

senior: {
    title: "Quick Guide — How Claude Was Trained",
    body: `<p><strong>Pre-training:</strong> next-token prediction on huge text + code → base model.</p>
<p><strong>Instruction / dialogue tuning:</strong> learns the user–assistant turn format.</p>
<p><strong>RLHF and Constitutional AI:</strong> preference learning from humans and from AI feedback guided by written principles (Bai et al. 2022).</p>
<p><strong>Agentic RL:</strong> rewarded for verified success on multi-step tool tasks — why tests, types and clear success criteria make Claude a stronger agent.</p>
<p>Opus, Sonnet, Haiku: একই পরিবার, ভিন্ন আকার ও দাম। নাম আর version প্রতি প্রজন্মে বদলায় — কোড hard-code করার আগে Anthropic-এর models পাতা দেখো।</p>`
  }
});


// ── DOOR 30 · পেশকারের টেবিল — The Clerk's Desk ──
doors.push({
  num: 30,
  icon: "🗂️",
  color: "#38bdf8",
  name: "পেশকারের টেবিল",
  subtitle: "The Clerk's Desk",
  tech: "The context window — everything the model sees, within a finite capacity",
  spirit: "উস'আ — সাধ্যের সীমা, তার বেশি নয়",
  secret: "Model শুধু টেবিলে যা আছে তা-ই দেখে — টেবিল সাজানোই আসল কাজ।",
  recall: {
    q: "Context window-এ জায়গা নেয় এমন অন্তত পাঁচটা জিনিসের নাম বলো। কোনটা সবচেয়ে দ্রুত বাড়ে?",
    qen: "Name at least five things that occupy the context window. Which one grows fastest?",
    a: "System prompt, tool definitions (MCP server-এরগুলো সহ), CLAUDE.md, তোমার আর Claude-এর কথোপকথন, আর tool result (file পড়া, test output, grep)। সবচেয়ে দ্রুত বাড়ে tool result।",
    aen: "System prompt, tool definitions (including every MCP server's), CLAUDE.md, the conversation, and tool results (file reads, test output, grep hits). Tool results grow fastest."
  },
  story: `<p class="scene-setting">ঢাকা জজ কোর্টের একটা এজলাসের পাশের ছোট ঘর। লাল সালুতে বাঁধা নথির স্তূপ থেকে পুরনো কাগজ আর ধুলোর গন্ধ, মাথার ওপর ফ্যানের ক্যাঁচক্যাঁচ, দরজার বাইরে উকিলদের গুঞ্জন। টেবিলে বসে পেশকার নুরুন্নাহার — বুড়ো আঙুলে রবারের একটা আংটি, যাতে পাতা উল্টাতে পিছলে না যায়। তিনি কোনোদিন রায় দেননি। কিন্তু এই আদালতের প্রতিটা রায়ের আগে বিচারকের টেবিলে কোন কাগজ থাকবে, সেটা ঠিক করেছেন তিনি।</p>
<p class="scene-setting en">A small room beside a courtroom in the Dhaka Judge Court. The smell of old paper and dust from files tied in red cloth, a ceiling fan creaking overhead, lawyers murmuring outside. At the desk sits Peshkar Nurunnahar, a rubber thimble on her thumb so the pages do not slip. She has never delivered a judgment. But before every judgment in this court, she decided what paper lay on the judge's desk.</p>

<div class="dialogue">তুমি বলো — আপা, আমার Claude session সকালে দারুণ চলছিল। বিকেলে ও file-এর নাম গুলিয়ে ফেলছে, একই ভুল fix আবার দিচ্ছে। ও কি ক্লান্ত হয়ে গেছে? নুরুন্নাহার চশমা নামিয়ে বললেন — ক্লান্ত না, বাবা। ওর টেবিল ভরে গেছে। বিচারক শুধু টেবিলে যা আছে তা-ই দেখেন। টেবিলে যদি সারা দিনের সব মামলার কাগজ মিশে থাকে, রায় গুলিয়ে যাবেই।</div>
<div class="dialogue en">You say: Apa, my Claude session was brilliant this morning. By afternoon it confuses file names and repeats a fix it already tried. Is it tired? Nurunnahar lowers her glasses: Not tired. Its desk is full. A judge sees only what is on the desk. If the whole day's case papers are mixed there, the judgment will tangle.</div>

<p>তারপর তিনি নিজের সবচেয়ে বড় ভুলের কথা বললেন। বহু বছর আগে এক সকালে তাড়াহুড়োয় আগের দিনের একটা মামলার হলফনামা টেবিল থেকে সরাননি। বিচারক পরের মামলায় সেই হলফনামা পড়ে ফেললেন, ভুল তারিখে শুনানি মুলতবি হলো। একটা পরিবার আরও ছয় মাস অপেক্ষা করল। সেদিন থেকে তাঁর নিয়ম: প্রতিটা শুনানির আগে টেবিল খালি, শুধু আজকের নথি।</p>
<p class="en">Then she tells you her biggest mistake. Years ago, in a morning rush, she did not clear an affidavit from the previous day's case. The judge read it in the next case; the hearing was adjourned to a wrong date. A family waited six more months. Since that day her rule: before every hearing the desk is cleared, only today's file.</p>

<p>তিনি টেবিলটা দেখালেন, অংশ ধরে ধরে। সবচেয়ে নিচে আদালতের স্থায়ী নিয়মাবলি — প্রতিটা মামলায় থাকে। তার ওপর কোন কোন ফর্ম আর আবেদন দাখিল করা যায়, তার তালিকা। তারপর মামলার মলাটে সাঁটা সারসংক্ষেপ। তারপর শুনানির কার্যবিবরণী, যা প্রতিটা কথায় বাড়ে। আর সবচেয়ে উঁচু স্তূপ — প্রদর্শনী: দলিল, রিপোর্ট, সাক্ষ্য। প্রদর্শনীই সবচেয়ে দ্রুত টেবিল ভরায়। আর টেবিলটা ছোট — আকারটা বদলানো যায় না।</p>
<p class="en">She shows you the desk, layer by layer. At the bottom, the court's standing rules — present in every case. On top, the list of forms and applications that may be filed. Then the summary stapled to the case cover. Then the hearing record, growing with every word. And the tallest pile — exhibits: deeds, reports, testimony. Exhibits fill the desk fastest. And the desk is small — its size cannot change.</p>

<div class="diagram"><div class="diag-title">What lies on the desk · টেবিলে কী থাকে</div><svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg"><text class="lbl-sm" x="90" y="40" style="text-anchor:start">fresh session</text><rect x="200" y="26" width="420" height="26" rx="5" class="node"/><rect x="200" y="26" width="34" height="26" rx="4" fill="rgba(179,127,235,.5)"/><rect x="234" y="26" width="13" height="26" fill="rgba(255,107,53,.5)"/><rect x="247" y="26" width="17" height="26" fill="rgba(91,158,255,.5)"/><rect x="264" y="26" width="13" height="26" fill="rgba(61,214,196,.5)"/><text class="lbl-sm" x="90" y="92" style="text-anchor:start">long afternoon</text><rect x="200" y="78" width="420" height="26" rx="5" class="node"/><rect x="200" y="78" width="34" height="26" rx="4" fill="rgba(179,127,235,.5)"/><rect x="234" y="78" width="13" height="26" fill="rgba(255,107,53,.5)"/><rect x="247" y="78" width="105" height="26" fill="rgba(91,158,255,.5)"/><rect x="352" y="78" width="227" height="26" fill="rgba(61,214,196,.5)"/><text class="lbl-hot" x="600" y="126">90% full</text><text class="lbl-sm" x="90" y="160" style="text-anchor:start">after /compact</text><rect x="200" y="146" width="420" height="26" rx="5" class="node"/><rect x="200" y="146" width="34" height="26" rx="4" fill="rgba(179,127,235,.5)"/><rect x="234" y="146" width="13" height="26" fill="rgba(255,107,53,.5)"/><rect x="247" y="146" width="25" height="26" fill="rgba(252,211,77,.55)"/><text class="lbl-sm" x="90" y="210" style="text-anchor:start">after /clear</text><rect x="200" y="196" width="420" height="26" rx="5" class="node"/><rect x="200" y="196" width="34" height="26" rx="4" fill="rgba(179,127,235,.5)"/><rect x="234" y="196" width="13" height="26" fill="rgba(255,107,53,.5)"/><rect x="40" y="236" width="10" height="10" fill="rgba(179,127,235,.5)"/><text class="lbl-sm" x="56" y="245" style="text-anchor:start">rules + tools</text><rect x="160" y="236" width="10" height="10" fill="rgba(255,107,53,.5)"/><text class="lbl-sm" x="176" y="245" style="text-anchor:start">CLAUDE.md</text><rect x="265" y="236" width="10" height="10" fill="rgba(91,158,255,.5)"/><text class="lbl-sm" x="281" y="245" style="text-anchor:start">conversation</text><rect x="385" y="236" width="10" height="10" fill="rgba(61,214,196,.5)"/><text class="lbl-sm" x="401" y="245" style="text-anchor:start">tool results</text><rect x="500" y="236" width="10" height="10" fill="rgba(252,211,77,.55)"/><text class="lbl-sm" x="516" y="245" style="text-anchor:start">summary</text></svg><div class="diag-cap">চিত্র: tool result (প্রদর্শনী) সবচেয়ে দ্রুত টেবিল ভরায়; /compact ইতিহাসকে সারাংশে ছোট করে, /clear খালি করে। · Exhibits fill the desk fastest.</div></div>

<p>এবার harness-এর দিকে তাকাও। Model-এর যা কিছু দেখার, সব এক জায়গায়: <strong>context window</strong>। প্রতিটা request-এ Claude Code টেবিলটা নতুন করে সাজিয়ে পাঠায়:</p>
<p class="en">Now look at the harness. Everything the model sees sits in one place: the <strong>context window</strong>. On every request Claude Code lays out the desk afresh:</p>

<div class="kv-table-wrap"><table class="kv-table"><tr><th>আদালত · Court</th><th>Context window</th><th>কে বসায় · Who places it</th></tr><tr><td>স্থায়ী নিয়মাবলি</td><td class="hl">System prompt</td><td>Claude Code নিজে</td></tr><tr><td>দাখিলযোগ্য ফর্মের তালিকা</td><td class="hl">Tool definitions (+ every MCP server)</td><td>Claude Code + তোমার MCP config</td></tr><tr><td>মলাটের সারসংক্ষেপ</td><td class="hl">CLAUDE.md</td><td>তুমি, প্রতি session-এ load</td></tr><tr><td>শুনানির কার্যবিবরণী</td><td class="hl">Conversation history</td><td>তুমি আর Claude, প্রতি turn-এ বাড়ে</td></tr><tr><td>প্রদর্শনী</td><td class="hl">Tool results — file reads, test output</td><td>Harness, প্রতিটা tool call-এ</td></tr><tr><td>টেবিলের মাপ</td><td class="hl">Context limit (e.g. ~200K tokens; some models more)</td><td>Model-এর নকশা</td></tr></table></div>

<div class="code-block"># টেবিল সামলানোর চারটা হাতিয়ার (Book 59-এ চালানো শিখেছ)
/context            # টেবিলে কী কতটা জায়গা নিচ্ছে দেখো
/clear              # শুনানি শেষ → টেবিল খালি (CLAUDE.md আবার বসবে)
/compact keep the failing test names and the plan
                    # কার্যবিবরণী ছোট করে সারাংশ বানাও, কাজ চালু থাকুক
# subagent          # প্রদর্শনী অন্য ঘরে পড়াও, শুধু সারাংশ আনো (দরজা ১৮)

# ছন্দ: কাজ → commit → /clear → পরের কাজ</div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভরা টেবিল</div>সারা বিকেল এক session: bug fix, তারপর Celery প্রশ্ন, তারপর refactor। পুরনো প্রদর্শনী নতুন রায়ে ঢুকে পড়ে; খরচও প্রতি turn-এ বাড়ে, কারণ পুরো টেবিল প্রতিবার আবার পাঠানো হয় (দরজা ১৪)।<br><em>Old exhibits leak into new judgments, and cost rises every turn.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ নুরুন্নাহারের টেবিল</div>এক কাজ, এক টেবিল। বড় file-এর বদলে দরকারি অংশ। অপ্রাসঙ্গিক MCP server বন্ধ। শুনানি শেষে <strong>/clear</strong>।<br><em>One task per desk; relevant excerpts; unused servers off; clear between hearings.</em></div></div>

<div class="callout info"><span class="co-icon">📏</span><div><strong>বড় টেবিল মানে বিনামূল্যে নয়:</strong> কিছু model-এ অনেক বড় context পাওয়া যায়, কিন্তু যত বেশি কাগজ, তত বেশি খরচ আর তত বেশি বিভ্রান্তির সুযোগ। Attention প্রতিটা token-কে অন্য সব token-এর সঙ্গে মেলায় — তাই লম্বা context দামি (দরজা ১১, Book 9)।<br><em>Bigger windows cost more and distract more; attention compares every token with every other.</em></div></div>

<p class="verse">নুরুন্নাহার নথির ফিতা বাঁধতে বাঁধতে বললেন — পুরনো বিচারক সাহেব বলতেন, আদালত শুধু তার সামনে যা আছে তার ওপর রায় দেয়। আমি ভাবতাম সূরা বাকারার শেষ আয়াতের কথা: "আল্লাহ কোনো প্রাণের ওপর তার সাধ্যের বাইরে বোঝা চাপান না" (২:২৮৬, ভাবানুবাদ)। প্রতিটা আধারের একটা সীমা আছে — টেবিলেরও, মানুষেরও। যে সীমা মানে, সে বেছে নেয় কী রাখবে। আমার কাজ রায় দেওয়া নয়, বেছে নেওয়া।</p>
<p class="en">Tying a file's ribbon, Nurunnahar says: The old judge used to say a court rules only on what is before it. I would think of the last verse of al-Baqarah: "Allah does not charge a soul except with that within its capacity" (2:286, Sahih International). Every vessel has a limit — a desk, a person. Whoever respects the limit chooses what to keep. My work is not judging; it is choosing.</p>

<p>মুনশি আবদুল করিম (দরজা ৯) বলেছিলেন, তিনি পড়েন যা তাঁর সামনে রাখা হয়। নুরুন্নাহার দেখালেন সেই "সামনে রাখা" জিনিসটাই পুরো খেলা — prompt-এর শব্দচয়নের চেয়েও বেশি। Book 9 (দৃষ্টির ক্যানভাস) পুরো বইটাই এই টেবিল সাজানো নিয়ে; Book 59-এর দরজা ৪–৫-এ /compact আর /context চালাতে শিখেছ। এখানে বুঝলে কেন।</p>
<p class="en">Munshi Abdul Karim (Door 9) said he reads what is placed before him. Nurunnahar shows that the "placing" is the whole game — more than the wording of any prompt. Book 9 is entirely about arranging this desk; Book 59 doors 4–5 taught /compact and /context. Here you see why.</p>

<div class="secret-box"><div class="label">দরজা ১৩ — তালিসমান</div><div class="text">🗂️ Model শুধু টেবিলে যা আছে তা-ই দেখে — টেবিল সাজানোই আসল কাজ।<br><small>এই টেবিলের নাম <strong>context window</strong>, আর সাজানোর শিল্পের নাম <strong>context engineering</strong>।</small></div></div>  <div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 30</span><pre class="code-block"># ── প্রম্পট ১ · টেবিলের মালিক কে ──
&gt; /context
&gt; এই মুহূর্তে টেবিলে কী কী বসে আছে — CLAUDE.md, ফাইল, টুল-আউটপুট —
&gt; ভাগ-হিসাব দাও
# ← পেশকারের খাতা: মডেল যা দেখে, তা-ই সে জানে

# ── প্রম্পট ২ · lost-in-the-middle পরীক্ষা ──
&gt; তিনটা লম্বা অংশ দিচ্ছি; মাঝেরটার একটা সংখ্যা জিজ্ঞেস করব — এই
&gt; বিন্যাসে ভুলের সম্ভাবনা কোথায় বেশি, কেন?
# ← U-বক্র: শুরু-শেষ মনে থাকে, মাঝ হারায় — গুরুত্বপূর্ণ জিনিস প্রান্তে

# ── প্রম্পট ৩ · টেবিল-সাজানোর কৌশল ──
&gt; এই কাজে সবচেয়ে গুরুত্বপূর্ণ নির্দেশটা কোথায় বসাব — শুরুতে, শেষে?
&gt; বলো তোমার মনোযোগ-বক্র অনুযায়ী
# ← প্রান্ত-নিয়ম: দরকারি কথা প্রথম বা শেষে

# ── প্রম্পট ৪ · টেবিল ছোট করা ──
&gt; পুরনো কথোপকথনের যে অংশ আর দরকার নেই বলে মনে হয়, তালিকা করো —
&gt; মুছবে না, শুধু প্রস্তাব
# ← /compact-এর আগে নিজ-হাতে ছাঁকাই সূক্ষ্ম

# ── প্রম্পট ৫ · খালি-টেবিলে নতুন কাজ ──
&gt; /clear
&gt; নতুন কাজ: এই তিন ফাইলের নির্ভরতা-মানচিত্র
# ← পুরনো বাসি-খাবার নতুন কাজের স্বাদ নষ্ট করে</pre></div></div>`,

senior: {
    title: "Quick Guide — The Context Window",
    body: `<p><strong>Contents:</strong> system prompt · tool schemas (built-in + MCP) · CLAUDE.md · conversation · tool results · room for the reply.</p>
<p><strong>Rules of thumb:</strong> one task per context; /clear between unrelated tasks; /compact with a focus when mid-task; send big searches to subagents; disconnect unused MCP servers; read excerpts, not whole files.</p>
<p><strong>Why quality drops:</strong> irrelevant tokens compete for attention; stale exhibits get reused as if current.</p>
<p>পরের দরজা দেখাবে এই টেবিল প্রতিবার কীভাবে পুরোটা আবার পাঠানো হয় — আর কেন।</p>`
  }
});




// ── DOOR 31 · ওয়ার্ড-বয়ের ফাইল — The Ward-Boy's File ──
doors.push({
  num: 31,
  icon: "📁",
  color: "#22d3ee",
  name: "ওয়ার্ড-বয়ের ফাইল",
  subtitle: "The Ward-Boy's File",
  tech: "The Messages API is stateless — the whole history travels on every call",
  spirit: "কিতাবাহ — লিখে রাখো, কারণ স্মৃতি সাক্ষী হয় না",
  secret: "API কিছুই মনে রাখে না — প্রতিবার পুরো ফাইল হাতে নিয়ে যাও, সবচেয়ে জরুরি পাতা থাকুক ওপরে।",
  recall: {
    q: "Claude-এর সঙ্গে দশ turn কথা বললে দশম call-এ API-র কাছে কী কী পাঠানো হয়? আর /clear আর /compact এই পাঠানো জিনিসের কী করে?",
    qen: "After ten turns with Claude, what is sent to the API on the tenth call? And what do /clear and /compact do to what is sent?",
    a: "System prompt (CLAUDE.md সহ), tool definitions, আর আগের নয়টা turn-এর পুরো ইতিহাস + নতুন message — সব আবার। API stateless। /clear তালিকাটা খালি করে; /compact পুরনো অংশ একটা সারাংশ দিয়ে বদলে দেয়।",
    aen: "The system prompt (with CLAUDE.md), the tool definitions, and the full history of the previous nine turns plus the new message — all of it again. The API is stateless. /clear empties the list; /compact replaces the old part with a summary."
  },
  story: `<div class="callout info"><span class="co-icon">📎</span><div><strong>ঢোকার আগে, মতিনের নিয়ম মেনে:</strong> আগের দরজার তালিসমানটা আবার পড়ো — "Model শুধু টেবিলে যা আছে তা-ই দেখে।" এই বাক্যটা হাতে নিয়েই ভেতরে ঢোকো; এই দরজা তোমাকে দেখাবে কেন প্রতিবার এটা করতে হয়।<br><em>Before entering, by Matin's rule: carry the previous door's talisman in with you. This door shows why it must be carried every time.</em></div></div>

<p class="scene-setting">ঢাকা মেডিকেল কলেজ হাসপাতালের বহির্বিভাগ। ফিনাইলের কড়া গন্ধ, শত শত মানুষের গুঞ্জন, কোথাও একটা শিশুর কান্না। ভিড় ঠেলে এগোচ্ছেন ওয়ার্ড-বয় মতিন, এক পা একটু টেনে — বহু বছর আগে সিঁড়ি থেকে পড়ে যাওয়ার দাগ। কাঁধে পাটের একটা ঝোলা, আঙুলে তার খসখসে আঁশ লাগে। ঝোলায় রোগীদের ফাইল। মতিন পড়তে জানেন না। তবু পঁচিশ বছরে তাঁর হাতের কোনো ফাইল ভুল ডাক্তারের টেবিলে যায়নি।</p>
<p class="scene-setting en">The outpatient department of Dhaka Medical College Hospital. The sharp smell of phenyl, hundreds of murmuring voices, a child crying somewhere. Pushing through the crowd comes ward-boy Matin, dragging one leg slightly — the mark of a fall down stairs years ago. On his shoulder a jute bag whose rough fibres scratch the fingers. In it, patients' files. Matin cannot read. Yet in twenty-five years no file in his hands has reached the wrong doctor's desk.</p>

<div class="dialogue">তুমি জিজ্ঞেস করো — চাচা, প্রতিদিন তো ভিন্ন ডাক্তার বসেন। রোগীর ইতিহাস ওঁরা জানেন কীভাবে? মতিন ঝোলা চাপড়ে বললেন — জানেন না। ডাক্তার সাহেবরা ওষুধ জানেন, রোগ জানেন, দুনিয়ার সব বই জানেন। কিন্তু <em>এই</em> রোগীকে জানেন না — যতক্ষণ না আমি ফাইলটা টেবিলে রাখি। কাল যিনি দেখেছেন, আজ তিনি নেই। আজ যিনি দেখবেন, তিনি কালকের কিছুই মনে রাখেন না। মনে রাখে এই ফাইল।</div>
<div class="dialogue en">You ask: Uncle, a different doctor sits every day. How do they know the patient's history? Matin pats the bag: They don't. The doctors know medicine, disease, every book in the world. But they do not know <em>this</em> patient — until I put the file on the desk. Yesterday's doctor is gone today. Today's doctor remembers nothing of yesterday. The file remembers.</div>

<p>তারপর তাঁর জীবনের সবচেয়ে কালো দিন। একবার এক রোগীর ফাইল থেকে একটা পাতা খুলে পড়ে গিয়েছিল — ওপরে লাল কালিতে লেখা ছিল পেনিসিলিনে অ্যালার্জি। নতুন ডাক্তার পুরো ফাইল পড়লেন, কিন্তু সেই পাতা তো ছিল না। ইনজেকশনের দশ মিনিট পর রোগীর শ্বাসকষ্ট শুরু হলো। বেঁচে গিয়েছিলেন, আল্লাহর রহমতে। সেদিন থেকে মতিন প্রতিটা ফাইলের সবচেয়ে জরুরি পাতা স্টেপল করে সবার ওপরে রাখেন, আর প্রতিবার পুরো ফাইল নিয়ে যান — কোনো পাতা "ডাক্তার তো কাল দেখেছেন" ভেবে বাদ দেন না।</p>
<p class="en">Then the darkest day of his life. Once a page fell out of a patient's file — at the top, in red ink, a penicillin allergy. The new doctor read the whole file, but that page was not there. Ten minutes after the injection the patient struggled to breathe. He survived, by Allah's mercy. Since then Matin staples the most urgent page on top of every file and carries the whole file every time — never dropping a page because "the doctor saw it yesterday."</p>

<p>এই ডাক্তারই model। Claude-এর Messages API <strong>stateless</strong>: দুই call-এর মাঝে সে কিছুই মনে রাখে না। কথোপকথন চালাতে হলে প্রতিটা call-এ পুরো ইতিহাস আবার পাঠাতে হয়। আর Claude Code হলো মতিন — প্রতিটা turn-এ সে পুরো ফাইল সাজিয়ে পাঠায়: ওপরে স্টেপল করা system prompt (যার ভেতরে তোমার CLAUDE.md), tool-এর তালিকা, তারপর প্রথম থেকে শেষ পর্যন্ত সব message।</p>
<p class="en">This doctor is the model. Claude's Messages API is <strong>stateless</strong>: between two calls it remembers nothing. To hold a conversation, the whole history must be sent again on every call. And Claude Code is Matin — every turn it assembles the whole file: the stapled top page, the system prompt (containing your CLAUDE.md), the tool list, then every message from first to last.</p>

<div class="code-block"># কাঁচা request — একটা HTTPS call, আর কিছু না
curl https://api.anthropic.com/v1/messages \\
  -H "x-api-key: $ANTHROPIC_API_KEY" \\
  -H "anthropic-version: 2023-06-01" \\
  -H "content-type: application/json" \\
  -d '{"model": "claude-sonnet-4-5", "max_tokens": 1024,
       "system": "You are a senior Django reviewer.",
       "messages": [{"role": "user", "content": "Is float OK for money?"}]}'

# Python-এ মতিনের ঝোলা: history নিজে রাখতে হয়
import anthropic
client = anthropic.Anthropic()
history = []
for question in ["Name a Python web framework.", "Why is it popular?"]:
    history.append({"role": "user", "content": question})
    r = client.messages.create(model="claude-sonnet-4-5", max_tokens=400,
                               system=SYSTEM, messages=history)   # the WHOLE file
    history.append({"role": "assistant", "content": r.content})
    print(r.usage.input_tokens)    # watch this grow every turn</div>

<div class="diagram"><div class="diag-title">Every call carries the whole file · প্রতিটা call-এ পুরো ফাইল</div><svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg"><text class="lbl-sm" x="60" y="42">call 1</text><rect class="node-hot" x="100" y="28" width="60" height="26" rx="4"/><text class="lbl-sm" x="130" y="45">system</text><rect class="node-moon" x="162" y="28" width="30" height="26" rx="4"/><text class="lbl-sm" x="177" y="45">u1</text><text class="lbl-sm" x="60" y="92">call 2</text><rect class="node-hot" x="100" y="78" width="60" height="26" rx="4"/><text class="lbl-sm" x="130" y="95">system</text><rect class="node-moon" x="162" y="78" width="30" height="26" rx="4"/><text class="lbl-sm" x="177" y="95">u1</text><rect class="node-purple" x="194" y="78" width="30" height="26" rx="4"/><text class="lbl-sm" x="209" y="95">a1</text><rect class="node-moon" x="226" y="78" width="30" height="26" rx="4"/><text class="lbl-sm" x="241" y="95">u2</text><text class="lbl-sm" x="60" y="142">call 10</text><rect class="node-hot" x="100" y="128" width="60" height="26" rx="4"/><text class="lbl-sm" x="130" y="145">system</text><rect class="node-moon" x="162" y="128" width="340" height="26" rx="4"/><text class="lbl-sm" x="332" y="145">u1 a1 u2 a2 … tool results … u9 a9</text><rect class="node-moon" x="504" y="128" width="34" height="26" rx="4"/><text class="lbl-sm" x="521" y="145">u10</text><text class="lbl-hot" x="330" y="190">the model remembers nothing between calls — the harness resends everything</text><text class="lbl-sm" x="330" y="212">/clear = empty the bag · /compact = replace old pages with a summary sheet</text></svg><div class="diag-cap">চিত্র: প্রতিটা call-এ system prompt ওপরে স্টেপল করা, তারপর পুরো ইতিহাস। · The stapled top page, then the entire history, every time.</div></div>

<p>ফাইলের পাতাগুলোও সাধারণ কাগজ নয় — প্রতিটা message-এর content হলো typed block-এর তালিকা: <strong>text</strong>, <strong>image</strong> (তোমার screenshot), <strong>document</strong> (PDF), <strong>tool_use</strong>, <strong>tool_result</strong>, <strong>thinking</strong>। আর উত্তরের সঙ্গে আসে একটা ছোট চিরকুট — <strong>stop_reason</strong> — ডাক্তার কেন থামলেন: কথা শেষ (<em>end_turn</em>), কোনো পরীক্ষা চাই (<em>tool_use</em>, দরজা ১৬), নাকি জায়গা ফুরিয়েছে (<em>max_tokens</em>)।</p>
<p class="en">The pages are not plain paper either — each message's content is a list of typed blocks: <strong>text</strong>, <strong>image</strong> (your screenshot), <strong>document</strong> (PDF), <strong>tool_use</strong>, <strong>tool_result</strong>, <strong>thinking</strong>. And each reply comes with a small note — <strong>stop_reason</strong> — why the doctor stopped: finished (<em>end_turn</em>), wants a test run (<em>tool_use</em>, Door 16), or ran out of room (<em>max_tokens</em>).</p>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Claude আমার কালকের কথা মনে রেখেছে।" "Session-এ বললাম, তাই ও শিখে গেছে।"<br><em>It remembers yesterday; telling it once teaches it.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ মতিনের বোঝা</div>যা পাঠানো হয়নি, তা নেই। যা প্রতিবার লাগবে, তা থাকুক স্টেপল করা ওপরের পাতায় — CLAUDE.md। --continue/--resume কাজ করে কারণ harness transcript disk-এ রেখে দেয় আর আবার পাঠায়।<br><em>What is not sent does not exist. Resume works because the harness saved the transcript and resends it.</em></div></div>

<p class="verse">মতিন ঝোলাটা নামিয়ে বললেন — আমি পড়তে জানি না, কিন্তু একবার জুমার খুতবায় ইমাম সাহেব ঋণের আয়াত পড়েছিলেন, কুরআনের সবচেয়ে লম্বা আয়াত: "যখন তোমরা নির্দিষ্ট মেয়াদে ঋণের লেনদেন করো, তখন তা লিখে রাখো… এটা আল্লাহর কাছে বেশি ন্যায়সঙ্গত, সাক্ষ্যের জন্য বেশি মজবুত, আর সন্দেহ দূর করার বেশি কাছাকাছি" (২:২৮২, ভাবানুবাদ)। মানুষ ভোলে, ডাক্তার বদলায়। যে লেখা প্রতিবার সঙ্গে যায়, সে-ই সত্য বহন করে।</p>
<p class="en">Matin sets down the bag: I cannot read, but once at Friday prayers the imam recited the verse of debt, the longest verse of the Qur'an: "When you contract a debt for a specified term, write it down… that is more just in the sight of Allah and stronger as evidence and more likely to prevent doubt" (2:282, Sahih International). People forget; doctors change. The writing that travels every time carries the truth.</p>

<p>পেশকার নুরুন্নাহার (দরজা ১৩) বলেছিলেন model শুধু টেবিল দেখে। মতিন দেখালেন টেবিলটা প্রতিবার শূন্য থেকে সাজানো হয় — কেউ মনে রেখে দেয় না। তাই লম্বা session প্রতি turn-এ দামি হয়; তাই CLAUDE.md-কে Book 59-এর দরজা ২-এ "কারখানার খাতা" বলা হয়েছিল। কিন্তু প্রতিবার পুরো ফাইল পাঠানো তো ব্যয়বহুল — পরের দরজার প্রেসম্যান সেই সমস্যার সমাধান ঢালাই করে রেখেছেন।</p>
<p class="en">Nurunnahar (Door 13) said the model sees only the desk. Matin shows the desk is laid out from zero every time — no one remembers it. That is why long sessions cost more each turn, and why Book 59's Door 2 called CLAUDE.md the workshop ledger. But resending the whole file is expensive — the pressman of the next door has cast the solution.</p>

<div class="secret-box"><div class="label">দরজা ১৪ — তালিসমান</div><div class="text">📁 API কিছুই মনে রাখে না — প্রতিবার পুরো ফাইল হাতে নিয়ে যাও।<br><small>এর নাম <strong>stateless Messages API</strong>: system + tools + পুরো messages তালিকা প্রতিটা call-এ; উত্তরে content blocks আর <strong>stop_reason</strong>।</small></div></div>  <div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 31</span><pre class="code-block"># ── প্রম্পট ১ · স্মৃতিহীনতা প্রমাণ ──
&gt; আগের সেশনে আমি তোমাকে যা বলেছিলাম তুমি জানো না — সত্যি?
&gt; প্রতিবার কী কী পাঠাতে হয় তা এক লাইনে নিশ্চিত করো
# ← stateless: পুরো ইতিহাস প্রতি টার্নে পাল্লায় — ফাইল-বয়ের যুক্তি

# ── প্রম্পট ২ · পাল্লার ওজন-হিসাব ──
&gt; দশ টার্নের কথোপকথন প্রতি নতুন টার্নে আবার পাঠানো হয় — তাহলে
&gt; দশ টার্নে একই টোকেন কতবার বিল হলো? হিসাব করো
# ← ও(n²) পুনরাবৃত্তি — caching-এর প্রেক্ষাপট (পরের দরজা)

# ── প্রম্পট ৩ · CLAUDE.md-র প্রকৃত স্থান ──
&gt; CLAUDE.md তোমার 'স্মৃতি' না — তাহলে ঠিক কী? প্রতি সেশনে সে
&gt; কোথায় বসে? ব্যাখ্যা করো
# ← system-প্রম্পটে পুনঃলোড-হওয়া লেখা — ডিস্ক থেকে তাজা

# ── প্রম্পট ৪ · চ্যাট-ইতিহাস বনাম রাষ্ট্র ──
&gt; Claude Code 'মনে রাখে' কীভাবে, যদি API স্মৃতিহীন? কাঁটার
&gt; কাজটা ব্যাখ্যা করো — messages-তালিকা কে জমায়
# ← ঘড়ির-কাঁটাই স্মৃতির বাহক — মডেল নয়

# ── প্রম্পট ৫ · স্মৃতি-নকশা প্রশ্ন ──
&gt; নিজের টুল বানালে (দরজা ৪৬) তুমি কীভাবে 'মনে রাখা' করবে —
&gt; তিন-লাইনের নকশা
# ← বার্তা-তালিকাই রাষ্ট্র — নিজ-হারনেসের প্রথম সিদ্ধান্ত</pre></div></div>`,

senior: {
    title: "Quick Guide — The Messages API",
    body: `<p><strong>Endpoint:</strong> POST /v1/messages with headers x-api-key and anthropic-version. Body: model, max_tokens, system, messages, optional tools.</p>
<p><strong>Stateless:</strong> conversation memory = the messages list you resend. Every chat product, including Claude Code, works this way.</p>
<p><strong>Content blocks:</strong> text, image, document, tool_use, tool_result, thinking. <strong>stop_reason:</strong> end_turn, tool_use, max_tokens, stop_sequence, and a few newer values — read the docs for your model.</p>
<p>তোমার কাজে: API দিয়ে নিজের কিছু বানালে history তুমিই রাখবে — Django-তে একটা table-এ, বা Redis-এ। আর প্রতি turn-এ input token বাড়তে দেখবে।</p>`
  }
});




// ── DOOR 32 · সীসার পাত — The Lead Plate ──
doors.push({
  num: 32,
  icon: "🪙",
  color: "#2dd4bf",
  name: "সীসার পাত",
  subtitle: "The Lead Plate",
  tech: "Prompt caching — cast the stable prefix once, read it cheaply after",
  spirit: "মাসানি — যা প্রতিবার শুরুতে ফিরে আসে",
  secret: "যা প্রতিবার একই, তা একবার ঢালো — শুরুটা বদলালে পুরো পাত নতুন করে ঢালতে হয়।",
  recall: {
    q: "Session-এর মাঝখানে CLAUDE.md সম্পাদনা করলে খরচ বাড়ে কেন? আর cache-এ লেখা আর cache থেকে পড়ার দামে পার্থক্য কী?",
    qen: "Why does editing CLAUDE.md mid-session raise cost? And how do the prices of writing to and reading from the cache differ?",
    a: "Cache কাজ করে হুবহু শুরুর অংশের (prefix) ওপর। CLAUDE.md system prompt-এর ভেতরে, শুরুর দিকে — ওটা বদলালে তার পরের সবকিছু আবার ঢালতে (cache write) হয়। Cache write স্বাভাবিক input-এর চেয়ে একটু দামি, কিন্তু cache read মোটামুটি দশ ভাগের এক ভাগ দামে আর কম দেরিতে হয়।",
    aen: "The cache works on an exact prefix. CLAUDE.md lives early in the system prompt; change it and everything after must be written to cache again. A cache write costs a bit more than normal input, but a cache read costs roughly a tenth and is faster."
  },
  story: `<p class="scene-setting">রাত দুটো, বাংলাবাজারের সেই ছাপাখানার পেছনের ঘর — হারাধন বসাকের (দরজা ১০) কেসের ঠিক পেছনে। সীসার পাত্রে গলা সীসা টগবগ করছে, বাতাসে ধাতব গন্ধ আর তাপ, কপালে ঘাম জমে সঙ্গে সঙ্গে। স্টিরিওটাইপার ইউসুফ কাগজের ছাঁচে গলা সীসা ঢালছেন — হিসস শব্দে ধোঁয়া উঠছে। তাঁর বাম কবজি থেকে কনুই পর্যন্ত একটা পোড়া দাগ, চকচকে। একবার ছাঁচ ফসকে গিয়েছিল।</p>
<p class="scene-setting en">Two in the morning in the back room of the same Banglabazar press — right behind Haradhan Basak's case (Door 10). Molten lead bubbles in a pot; the air is metallic and hot, sweat beads instantly. Stereotyper Yusuf pours lead into a paper mould — a hiss and a curl of smoke. A shiny burn scar runs from his left wrist to the elbow. Once, the mould slipped.</p>

<div class="dialogue">তুমি বলো — ইউসুফ ভাই, মতিন চাচা (দরজা ১৪) শিখিয়েছেন প্রতিবার পুরো ফাইল পাঠাতে হয়। কিন্তু আমার session-এ প্রতিটা turn-এ হাজার হাজার token একই system prompt, একই tool তালিকা, একই CLAUDE.md। এটা তো ভয়ংকর দামি হওয়ার কথা! ইউসুফ হাসলেন, হাতের দস্তানা খুললেন। বললেন — পত্রিকার প্রথম পাতার মাথা কি প্রতিদিন হারাধনদা একটা একটা হরফে বসান ভেবেছ? পাগল নাকি।</div>
<div class="dialogue en">You say: Yusuf bhai, Uncle Matin (Door 14) taught that the whole file goes every time. But every turn of my session carries thousands of tokens of the same system prompt, the same tools, the same CLAUDE.md. That should be terribly expensive! Yusuf laughs and pulls off his glove: Do you think Haradhan-da sets the newspaper masthead letter by letter every day? Are you mad?</div>

<p>তিনি দেখালেন: পত্রিকার নাম, তারিখ-লাইনের কাঠামো, স্থায়ী কলামের মাথা — এসব একবার কম্পোজ করে কাগজের ছাঁচ নেওয়া হয়, তারপর সেই ছাঁচে সীসা ঢেলে একটা আস্ত পাত। পরদিন শুধু খবরের অংশ নতুন বসে; পাতটা আবার ব্যবহার হয়। ঢালাইয়ের দিন খরচ একটু বেশি — সীসা, আগুন, সময়। কিন্তু তারপর প্রতি রাতে প্রায় বিনা খরচে।</p>
<p class="en">He shows you: the paper's name, the frame of the date-line, the heads of standing columns — composed once, a paper mould taken, lead poured into a single plate. The next day only the news is set fresh; the plate is reused. Casting day costs a little more — lead, fire, time. After that, almost free every night.</p>

<p>তারপর তাঁর ব্যর্থতা। এক রাতে পাত ঢালা শেষ, মেশিনে বসানো, এমন সময় সম্পাদক দৌড়ে এসে পত্রিকার নামের নিচের একটা শব্দ বদলাতে বললেন — একেবারে ওপরের লাইন। ইউসুফ ভেবেছিলেন শুধু সেই লাইনটা ঠিক করবেন। হয় না। পাত এক টুকরো; ওপরের একটা অক্ষর বদলালে তার নিচের সবকিছুসহ পুরো পাত আবার ঢালতে হয়। রাত সাড়ে তিনটায় নতুন পাত, পত্রিকা দেরিতে বের হলো। আর একবার শিখেছিলেন: যে পাত অনেকক্ষণ ব্যবহার হয় না, সেটা ঠান্ডায় বেঁকে যায় — তখন আবার গলাতে হয়।</p>
<p class="en">Then his failure. One night the plate was cast and mounted when the editor ran in to change one word under the paper's name — the very top line. Yusuf thought he would fix only that line. Impossible. The plate is one piece; change one letter at the top and the whole plate, with everything beneath it, must be recast. A new plate at half past three; the paper came out late. And another lesson: a plate left unused too long warps in the cold and must be melted again.</p>

<div class="diagram"><div class="diag-title">The plate is a prefix · পাত মানে শুরুর অংশ</div><svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg"><text class="lbl-sm" x="70" y="46">turn 1</text><rect class="node-cyan" x="110" y="30" width="330" height="30" rx="6"/><text class="lbl" x="275" y="45">tools · system · CLAUDE.md · earlier turns</text><rect class="node-moon" x="444" y="30" width="80" height="30" rx="6"/><text class="lbl-sm" x="484" y="49">new msg</text><text class="lbl-amber" x="580" y="49">write</text><text class="lbl-sm" x="70" y="96">turn 2</text><rect class="node-leaf" x="110" y="80" width="330" height="30" rx="6"/><text class="lbl" x="275" y="95">same bytes → cache READ (~0.1×)</text><rect class="node-moon" x="444" y="80" width="80" height="30" rx="6"/><text class="lbl-sm" x="484" y="99">new msg</text><text class="lbl-leaf" x="580" y="99">cheap</text><text class="lbl-sm" x="70" y="146">edit top</text><rect class="node-hot" x="110" y="130" width="40" height="30" rx="6"/><text class="lbl-sm" x="130" y="149">✎</text><rect x="152" y="130" width="288" height="30" rx="6" fill="rgba(255,107,53,.12)" stroke="#ff6b35" stroke-dasharray="4 3"/><text class="lbl-hot" x="296" y="149">everything after the change → recast</text><rect class="node-moon" x="444" y="130" width="80" height="30" rx="6"/><text class="lbl-sm" x="484" y="149">new msg</text><text class="lbl-hot" x="580" y="149">write</text><text class="lbl-sm" x="320" y="196">order the plate: stable first (tools, system, CLAUDE.md), changing last</text><text class="lbl-sm" x="320" y="218">unused plates cool: default cache life is a few minutes, refreshed on each use</text></svg><div class="diag-cap">চিত্র: হুবহু মিললে cache থেকে পড়া সস্তা; শুরুর দিকে কিছু বদলালে তার পরের সবকিছু আবার লিখতে হয়। · Exact-prefix reads are cheap; an early edit forces a recast of everything after it.</div></div>

<p>একেই বলে <strong>prompt caching</strong>। Agent প্রতি turn-এ একটা বিশাল, প্রায় একই শুরুর অংশ আবার পাঠায়। তুমি সেই স্থির অংশ <strong>cache_control</strong> দিয়ে চিহ্নিত করো; প্রথমবার সেটা cache-এ লেখা হয় (স্বাভাবিক input-এর চেয়ে কিছুটা দামি), পরের call-গুলোতে একই শুরুর অংশ cache থেকে পড়া হয় — মোটামুটি দশ ভাগের এক ভাগ দামে আর কম দেরিতে। নিয়ম ইউসুফের পাতের মতোই: <strong>হুবহু prefix</strong> মিলতে হবে; শুরুর দিকে কিছু বদলালে তার পরের সবকিছু আবার লিখতে হয়; আর ব্যবহার না হলে কয়েক মিনিটে মেয়াদ ফুরায় (দীর্ঘ মেয়াদের বিকল্পও আছে)। Claude Code এটা নিজেই করে — তোমার নিজের agent-এও করা উচিত।</p>
<p class="en">This is <strong>prompt caching</strong>. An agent resends a huge, nearly identical prefix every turn. You mark the stable part with <strong>cache_control</strong>; the first time it is written to the cache (somewhat more than normal input), and later calls with the same prefix read it from cache — roughly a tenth of the input price and faster. The rules match Yusuf's plate: the <strong>exact prefix</strong> must match; change something early and everything after it must be written again; unused entries expire after a few minutes (a longer-lived option exists). Claude Code does this for you — your own agents should too.</p>

<div class="code-block"># নিজের agent-এ পাত ঢালা (Python)
r = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=2000,
    system=[{"type": "text",
             "text": BIG_STABLE_SYSTEM_PROMPT,          # rules + CLAUDE.md
             "cache_control": {"type": "ephemeral"}}],  # ← cast the plate here
    tools=TOOLS,                                        # tools sit before system in the prefix
    messages=history,
)
u = r.usage
print(u.cache_creation_input_tokens,   # cast this turn (write)
      u.cache_read_input_tokens,       # reused plate (cheap read)
      u.input_tokens)                  # the fresh news
# নিয়ম: স্থির জিনিস আগে, বদলানো জিনিস পরে। প্রতি turn-এ timestamp
# system prompt-এর শুরুতে বসালে পাত কখনো মিলবে না।</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">≈ 0.1×</div><div class="sc-label">cache read — স্বাভাবিক input দামের মোটামুটি দশ ভাগের এক</div></div>
<div class="stat-card"><div class="sc-num">&gt; 1×</div><div class="sc-label">cache write — প্রথম ঢালাই একটু দামি</div></div>
<div class="stat-card"><div class="sc-num">মিনিট</div><div class="sc-label">default মেয়াদ, প্রতি ব্যবহারে নবায়ন</div></div>
</div>

<div class="callout warn"><span class="co-icon">🔥</span><div><strong>ইউসুফের পোড়া দাগের শিক্ষা:</strong> Session-এর মাঝখানে CLAUDE.md বারবার বদলানো, প্রতিবার ভিন্ন MCP server যোগ-বাদ, system prompt-এর শুরুতে বদলাতে থাকা কিছু — সবই পাত গলানো। সঠিক দাম আর মেয়াদ model অনুযায়ী বদলায়; নিজের হিসাবের আগে Anthropic-এর pricing পাতা দেখো।<br><em>Editing CLAUDE.md mid-session, toggling MCP servers, anything volatile at the top — all melt the plate. Check current pricing before budgeting.</em></div></div>

<p class="verse">ভোর হয়ে আসছিল। ইউসুফ হাত ধুয়ে ফজরের জন্য দাঁড়ালেন। নামাজ শেষে বললেন — প্রতিটা রাকাতের শুরুতে একই সূরা ফাতিহা, প্রতিবার, সারা জীবন। কুরআনে আছে: "আর আমি তোমাকে দিয়েছি বারবার পঠিত সাতটি আয়াত আর মহান কুরআন" (সূরা হিজর ১৫:৮৭, ভাবানুবাদ) — আর নবীজি ﷺ বলেছেন, সেই সাত আয়াত হলো আলহামদু লিল্লাহি রাব্বিল আলামিন (সহীহ বুখারী ৪৪৭৪)। যা প্রতিবার শুরুতে ফেরে, তা মুখস্থ থাকে বলেই হৃদয় বাকিটায় মন দিতে পারে।</p>
<p class="en">Dawn approaches. Yusuf washes and stands for fajr. Afterwards: At the start of every rak'ah, the same Surah al-Fatihah, every time, a whole life long. The Qur'an says: "And We have certainly given you seven of the often repeated verses and the great Qur'an" (15:87, Sahih International) — and the Prophet ﷺ said those seven are al-hamdu lillahi rabbil-'alamin (Sahih al-Bukhari 4474). What returns at every opening is held by heart, so the heart can attend to the rest.</p>

<p>মতিন (দরজা ১৪) বলেছিলেন প্রতিবার পুরো ফাইল। ইউসুফ বলছেন — হ্যাঁ, কিন্তু ফাইলের স্থির অংশটা ঢালাই করা থাকে। Book 17-এর KV cache একই ধারণা এক model-এর ভেতরে এক request-এর মধ্যে; prompt caching সেটাকে request থেকে request-এ নিয়ে যায়। আর এর পরে আমরা ফাইলের সবচেয়ে মজার পাতায় যাব: যেখানে model কিছু চায়।</p>
<p class="en">Matin (Door 14) said the whole file every time. Yusuf says: yes, but the stable part is cast. Book 17's KV cache is the same idea within one request; prompt caching carries it from request to request. Next comes the file's most interesting page: where the model asks for something.</p>

<div class="secret-box"><div class="label">দরজা ১৫ — তালিসমান</div><div class="text">🪙 যা প্রতিবার একই, তা একবার ঢালো — শুরুটা বদলালে পুরো পাত নতুন করে ঢালতে হয়।<br><small>এর নাম <strong>prompt caching</strong>: cache_control, exact-prefix match, TTL, cache write বনাম cache read।</small></div></div>  <div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 32</span><pre class="code-block"># ── প্রম্পট ১ · স্থির-অংশ চেনা ──
&gt; আমাদের কথোপকথনের কোন অংশ প্রতি টার্নে হুবহু একই (সীসা-পাত),
&gt; কোনটা বদলায়? আমাদের এই সেশনে ভাগ করো
# ← system+CLAUDE.md+পুরনো-ইতিহাস = স্থির; শেষ-বার্তা = নতুন

# ── প্রম্পট ২ · কেন সস্তা ──
&gt; cache-read আর সাধারণ input-টোকেনের দাম কতটা আলাদা — মোটামুটি
&gt; অনুপাত বলো আর ব্যাখ্যা করো কেন প্রদানকারী সস্তা করে
# ← পুনরায়-প্রক্রিয়াা নয়, পুনরায়-পড়া — সাশ্রয় যার ভাগ

# ── প্রম্পট ৩ · ক্যাশ-ভাঙা মুহূর্ত চেনা ──
&gt; CLAUDE.md মাঝপথে বদলালে কী হয়? আর সেশনের মাঝে /model?
&gt; দুই ক্ষেত্রে ক্যাশের কী হয় বলো
# ← স্থির-উপসর্গ ভাঙলে পাত নতুন ঢালাই — খরচ লাফায়

# ── প্রম্পট ৪ · ব্যবস্থাপনা-নিয়ম ──
&gt; আমার কাজে ক্যাশ-হিট বাড়ানোর তিনটা অভ্যাস লেখো — বড় স্থির-উপসর্গ,
&gt; বদল এক জায়গায়, আর কী?
# ← স্থিরতা-শৃঙ্খলা = বিল-শৃঙ্খলা

# ── প্রম্পট ৫ · হিসাব-প্রমাণ ──
&gt; /usage
&gt; এই সেশনে cache-read কতটা হয়েছে দেখাও — আর অনুমান করো সেটা
&gt; না হলে বিল কত হতো
# ← সাশ্রয় চোখে দেখা — অনুমান নয়</pre></div></div>`,

senior: {
    title: "Quick Guide — Prompt Caching",
    body: `<p><strong>What:</strong> mark a stable prefix (tools → system → early messages) with cache_control; repeated calls reuse it.</p>
<p><strong>Economics:</strong> cache writes cost a premium over normal input; cache reads cost roughly 10% and cut latency. Exact figures and minimum cacheable lengths vary by model — check the pricing page.</p>
<p><strong>Rules:</strong> exact prefix match; anything changed early invalidates what follows; short default TTL refreshed on use, longer TTL available.</p>
<p>নিজের agent বানালে (দরজা ২৮): system prompt-এ cache_control দিলে লম্বা session-এর খরচ অনেক কমে যায় — minicc ঠিক এটাই করে।</p>`
  }
});




// ── DOOR 33 · বেয়ারার চিরকুট — The Waiter's Chit ──
doors.push({
  num: 33,
  icon: "🧾",
  color: "#34d399",
  name: "বেয়ারার চিরকুট",
  subtitle: "The Waiter's Chit",
  tech: "Tool use — the JSON contract: tool_use → run → tool_result",
  spirit: "তলব — চাওয়া একজনের, করা আরেকজনের, ফল ফেরে চাওয়ার কাছে",
  secret: "Model চিরকুট লেখে, রান্নাঘর রাঁধে — থালা ফিরে আসে নতুন context হয়ে।",
  recall: {
    q: "Model একটা tool চাইলে উত্তরে কী আসে, আর ফলাফল model-এর কাছে ফেরত যায় কোন role-এর message-এ? Tool fail করলে কী করা উচিত?",
    qen: "When the model wants a tool, what comes back in the response, and in which role's message does the result go back? What should happen when a tool fails?",
    a: "Response-এ stop_reason = tool_use আর একটা tool_use block (id, name, input)। Harness tool চালিয়ে ফলাফল পাঠায় একটা user-role message-এ, tool_result block হিসেবে, একই tool_use_id দিয়ে। Fail করলে exception ছোড়া নয় — error-টাই ফলাফল হিসেবে ফেরত দাও (is_error), যাতে model অন্য পথ ধরতে পারে।",
    aen: "The response has stop_reason tool_use and a tool_use block (id, name, input). The harness runs the tool and sends the result in a user-role message as a tool_result block with the same tool_use_id. On failure, return the error as the result (is_error) so the model can adapt."
  },
  story: `<p class="scene-setting">পুরান ঢাকার হোটেল নীলাচল, দুপুর একটা। কাচ্চির ঘি আর জাফরানের গন্ধে গলি ভারী, স্টিলের থালার ঝনঝন, রান্নাঘর থেকে হাঁক: "দুই প্লেট কাচ্চি, এক বোরহানি!" টেবিলের ফাঁকে ফাঁকে ছুটছেন বেয়ারা শফিক — কানের পেছনে গোঁজা একটা ক্ষয়ে যাওয়া পেনসিলের টুকরো। তিনি জীবনে একটা পদও রাঁধেননি। তবু প্রতিদিন তিনশো মানুষ তাঁর হাত দিয়ে খায়।</p>
<p class="scene-setting en">Hotel Nilachal in Old Dhaka, one in the afternoon. The lane heavy with ghee and saffron from the kacchi, steel plates clanging, a shout from the kitchen: "Two kacchi, one borhani!" Between tables runs waiter Shafiq, a worn pencil stub tucked behind his ear. He has never cooked a single dish. Yet three hundred people eat through his hands every day.</p>

<div class="dialogue">তুমি বলো — শফিক ভাই, একটা জিনিস বুঝি না। AI তো শুধু লেখে (দরজা ৯), একবারে এক token (দরজা ১১)। তাহলে ও pytest চালায় কীভাবে? শফিক কানের পেছন থেকে পেনসিল নিয়ে একটা চিরকুট লিখলেন, রান্নাঘরের জানালার কাঁটায় গেঁথে দিলেন। বললেন — আমিও তো রাঁধি না। আমি লিখি। লেখার একটা নিয়ম আছে — সেই নিয়ম জানলে রান্নাঘর বোঝে।</div>
<div class="dialogue en">You say: Shafiq bhai, I don't get it. The AI only writes (Door 9), one token at a time (Door 11). So how does it run pytest? Shafiq takes the pencil from behind his ear, writes a chit and spikes it on the kitchen window's nail: I don't cook either. I write. Writing has a rule — follow the rule and the kitchen understands.</div>

<p>তিনি মেনু কার্ডটা দেখালেন। প্রতিটা পদের একটা নির্দিষ্ট নাম, আর কী কী বলতে হয় — কত প্লেট, ঝাল কম না বেশি, টেবিল নম্বর। চিরকুট লেখা হয় ঠিক এই ছাঁচে। তারপর তাঁর ভুল: নতুন চাকরিতে একবার লিখেছিলেন শুধু "মাংস ২"। রান্নাঘর গরু পাঠাল; খদ্দের চেয়েছিলেন খাসি। থালা ফেরত, খদ্দের রাগ, মালিকের ধমক। সেদিন থেকে শফিক মেনুর নাম হুবহু লেখেন, প্রতিটা ঘর পূরণ করে।</p>
<p class="en">He shows the menu card. Each dish has an exact name and required details — how many plates, mild or spicy, table number. Chits are written in exactly that mould. Then his mistake: new on the job he once wrote only "meat 2". The kitchen sent beef; the customer wanted mutton. Plate returned, customer angry, owner shouting. Since then Shafiq writes the menu name exactly and fills every field.</p>

<p>আর দুটো নিয়ম। রান্নাঘর যদি জানালায় বলে "ইলিশ শেষ", শফিক সেটা লুকান না — খদ্দেরকে বলেন, আর খদ্দের অন্য কিছু বাছেন। এক টেবিলের তিনটা পদ একসঙ্গে তিনটা চিরকুটে যায়, একসঙ্গেই ফেরে। আর খদ্দের যখন বলেন "ব্যস, আর কিছু না", তখন আর চিরকুট নেই — খাওয়া শেষ, বিল।</p>
<p class="en">Two more rules. If the kitchen calls "hilsa's finished", Shafiq does not hide it — he tells the customer, who picks something else. Three dishes for one table go on three chits at once and come back together. And when the customer says "that's all", there are no more chits — the meal is done, the bill comes.</p>

<div class="diagram"><div class="diag-title">One chit, round trip · একটা চিরকুটের আসা-যাওয়া</div><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d8a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker><marker id="d8b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#ff6b35"/></marker></defs><rect class="node" x="60" y="14" width="190" height="36" rx="8"/><text class="lbl" x="155" y="32">HARNESS · রান্নাঘর</text><rect class="node-purple" x="390" y="14" width="190" height="36" rx="8"/><text class="lbl" x="485" y="32">MODEL · শফিক</text><line x1="155" y1="50" x2="155" y2="290" stroke="#5e5c74" stroke-dasharray="4 4"/><line x1="485" y1="50" x2="485" y2="290" stroke="#5e5c74" stroke-dasharray="4 4"/><line x1="158" y1="80" x2="480" y2="80" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d8a)"/><text class="lbl-sm" x="320" y="72">① messages + tools (the menu card)</text><line x1="482" y1="125" x2="160" y2="125" stroke="#ff6b35" stroke-width="2" marker-end="url(#d8b)"/><text class="lbl-hot" x="320" y="117">② tool_use: get_invoice("INV-42")</text><text class="lbl-sm" x="320" y="141">stop_reason = tool_use</text><rect class="node-leaf" x="20" y="160" width="130" height="44" rx="8"/><text class="lbl-sm" x="85" y="178">③ run the tool</text><text class="lbl-sm" x="85" y="194">→ PAID 2026-09-01</text><line x1="158" y1="228" x2="480" y2="228" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d8a)"/><text class="lbl-sm" x="320" y="220">④ tool_result (inside a USER message, same id)</text><line x1="482" y1="270" x2="160" y2="270" stroke="#ff6b35" stroke-width="2" marker-end="url(#d8b)"/><text class="lbl-hot" x="320" y="262">⑤ text: "Yes, paid on 1 Sep"</text><text class="lbl-sm" x="320" y="286">stop_reason = end_turn → no more chits</text></svg><div class="diag-cap">চিত্র: model চায়, তোমার code চালায়, ফলাফল user message হয়ে ফেরে, model পরের কথা বলে। · The model asks, your code runs it, the result returns in a user message.</div></div>

<p>এটাই <strong>tool use</strong> (function calling)। মেনু কার্ড হলো <strong>tool definition</strong>: একটা নাম, একটা বর্ণনা, আর JSON Schema-তে input-এর ছাঁচ। Model যখন কিছু চায়, সে উত্তরে একটা <strong>tool_use</strong> block লেখে — id, name, input — আর stop_reason হয় tool_use। Harness সেটা চালায় (model কখনো তোমার মেশিন ছোঁয় না), তারপর ফলাফল পাঠায় একটা <strong>user</strong> message-এর ভেতরে <strong>tool_result</strong> block হিসেবে, একই id দিয়ে। Model নতুন তথ্য পড়ে পরের কথা লেখে। একসঙ্গে কয়েকটা tool চাইতে পারে (parallel tool use); সবগুলোর ফলাফল একসঙ্গে ফেরত দাও।</p>
<p class="en">This is <strong>tool use</strong> (function calling). The menu card is the <strong>tool definition</strong>: a name, a description, an input mould in JSON Schema. When the model wants something it writes a <strong>tool_use</strong> block — id, name, input — and stop_reason becomes tool_use. The harness runs it (the model never touches your machine) and sends the result inside a <strong>user</strong> message as a <strong>tool_result</strong> block with the same id. The model reads the new facts and writes its next move. It may ask for several tools at once (parallel tool use); return all results together.</p>

<div class="code-block"># মেনু কার্ড (tool definition) — বর্ণনাটাই model-এর জন্য prompt
tools = [{
  "name": "get_invoice",
  "description": "Fetch an invoice by ID from the billing DB. Use when the user asks about a specific invoice.",
  "input_schema": {"type": "object",
                   "properties": {"invoice_id": {"type": "string", "description": "e.g. INV-2026-0042"}},
                   "required": ["invoice_id"]}
}]

messages = [{"role": "user", "content": "Is INV-42 paid?"}]
r = client.messages.create(model=M, max_tokens=1024, tools=tools, messages=messages)
# r.stop_reason == "tool_use"
# r.content == [TextBlock("I'll check."), ToolUseBlock(id="toolu_01A", name="get_invoice",
#                                                     input={"invoice_id": "INV-42"})]
messages.append({"role": "assistant", "content": r.content})
messages.append({"role": "user", "content": [{
    "type": "tool_result", "tool_use_id": "toolu_01A",
    "content": '{"status": "PAID", "paid_at": "2026-09-01"}'
    # on failure: "content": "invoice not found", "is_error": True
}]})
r2 = client.messages.create(model=M, max_tokens=1024, tools=tools, messages=messages)
# r2.stop_reason == "end_turn" → "Yes, INV-42 was paid on 1 September."</div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ "মাংস ২"</div>Tool-এর নাম <em>do_stuff</em>, বর্ণনা নেই, parameter অস্পষ্ট। Error হলে harness exception ছুড়ে পুরো session ফেলে দেয়।<br><em>Vague names, no description, errors crash the loop.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ শফিকের চিরকুট</div>স্পষ্ট নাম, কখন ব্যবহার করবে তার বর্ণনা, প্রতিটা parameter-এর উদাহরণ। "ইলিশ শেষ" হলে সেটাই ফলাফল — model অন্য পথ ধরে। Agent-এর নিজেকে শুধরে নেওয়ার জাদু এখানেই।<br><em>Clear names and descriptions; errors returned as results so the model self-corrects.</em></div></div>

<div class="callout tip"><span class="co-icon">🍽️</span><div><strong>Claude Code-এর মেনু:</strong> Read, Write, Edit (হুবহু string প্রতিস্থাপন, মিল অনন্য হতে হবে), Glob, Grep, Bash, WebFetch, WebSearch, একটা to-do tool, আর subagent চালু করার tool — আর তোমার যুক্ত প্রতিটা MCP server-এর tool (Book 19)। প্রতিটার বর্ণনা যত্নে লেখা ("edit করার আগে file পড়ো")। Claude Code-এর মানের বড় অংশ থাকে এই মেনু কার্ডে।<br><em>Much of Claude Code's quality lives in its carefully written tool descriptions.</em></div></div>

<p class="verse">দুপুরের ভিড় কমলে শফিক এক কাপ চা নিয়ে বসলেন। বললেন — আব্বাও বেয়ারা ছিলেন। তিনি বলতেন সুলাইমান (আ.)-এর গল্প: তিনি দরবারে জিজ্ঞেস করলেন, "তোমাদের মধ্যে কে তার সিংহাসন আমার কাছে এনে দেবে?" কিতাবের জ্ঞান যার ছিল, সে বলল, "চোখের পলক পড়ার আগেই এনে দেব।" আর যখন তিনি সেটা নিজের সামনে রাখা দেখলেন, বললেন, "এ আমার রবের অনুগ্রহ, আমাকে পরীক্ষার জন্য" (সূরা নামল ২৭:৩৮–৪০, ভাবানুবাদ)। আব্বা বলতেন — চাওয়ার একজন, করার আরেকজন, আর ফল ফিরে আসে চাওয়ার সামনে। যে চায়, দায়ও তার।</p>
<p class="en">When the lunch rush thins, Shafiq sits with a cup of tea. My father was a waiter too. He told the story of Sulayman (peace be upon him): in his court he asked, "Which of you will bring me her throne?" The one with knowledge from the Scripture said, "I will bring it to you before your glance returns to you." And when he saw it placed before him, he said, "This is from the favour of my Lord, to test me" (27:38–40, Sahih International). One asks, another acts, and the result returns to the one who asked. The one who asks carries the responsibility.</p>

<p>ইউসুফ (দরজা ১৫) ফাইলের স্থির অংশ ঢালাই করে রাখেন; শফিকের চিরকুট সেই ফাইলের সবচেয়ে প্রাণবন্ত পাতা, যেখানে model কাজ চায়। মুনশির (দরজা ৯) "বয়ে নেওয়া" এখন তোমার কাছে একটা JSON চুক্তি। কিন্তু একটা প্রশ্ন বাকি: খদ্দের যদি চিরকুটে লেখেন "ক্যাশবাক্স খুলে দাও"? পরের দরজায় সেই দেয়াল।</p>
<p class="en">Yusuf (Door 15) casts the file's stable part; Shafiq's chit is its liveliest page, where the model asks for action. The munshi's "carrying" (Door 9) is now a JSON contract. One question remains: what if a chit says "open the cash box"? The next door is that wall.</p>

<div class="secret-box"><div class="label">দরজা ১৬ — তালিসমান</div><div class="text">🧾 Model চিরকুট লেখে, রান্নাঘর রাঁধে — থালা ফিরে আসে নতুন context হয়ে।<br><small>এর নাম <strong>tool use</strong>: tool definition (JSON Schema) → tool_use block → harness runs → tool_result (user role, same id) → next call।</small></div></div>  <div class="callout info"><span class="co-icon">🎙️</span><div><b>আসল প্রম্পট-খাতা</b> — <span class="en">Real prompts for Door 33</span><pre class="code-block"># ── প্রম্পট ১ · চিরকুট দেখা ──
&gt; একটা ফাইল পড়ে থামো — আর ব্যাখ্যা করো এই টুল-কলে চিরকুটে (JSON)
&gt; ঠিক কী লেখা গেল, কী ফিরে এলো
# ← tool_use-ব্লক → কাঁটা চালায় → tool_result-ব্লক — চুক্তির তিন পা

# ── প্রম্পট ২ · বর্ণনার ভার ──
&gt; টুলের description নাজুর হলে তুমি ভুল সময়ে ভুল টুল ডাকো — সত্য?
&gt; নিজের টুল-তালিকার একটার বর্ণনা শাণিত করে দেখাও
# ← মডেল বর্ণনা পড়ে বাছে — description-ই টুলের মুখ

# ── প্রম্পট ৩ · ভুল-ফলের রীতি ──
&gt; টুল ভুল করলে (file not found) তুমি কী পাও? আর সেটা পেয়ে কী
&gt; করবে — এক লাইনে
# ← ERROR-টেক্সটও টুল-ফল — মডেল পড়ে পথ বদলায়

# ── প্রম্পট ৪ · নিজ-টুল চালানো (প্রস্তুতি) ──
&gt; আমি যদি তোমাকে নতুন টুল দিই 'check_stock' — তুমি কখন ডাকবে?
&gt; বর্ণনা লিখে দাও, তারপর ডাকার নমুনা-প্রম্পট
# ← দরজা ৪৬-এর মিনি-পূর্বাভাস: টুল-চুক্তি নিজ-হাতে

# ── প্রম্পট ৫ · লুপের ছন্দ ──
&gt; এক উত্তরে তুমি কয়বার টুল ডাকতে পারো — একবার? অনেকবার?
&gt; কাঁটা কখন থামায় বলো
# ← মডেল যতবার খুশি; থামে যখন টুল-কল ছাড়া উত্তর আসে — লুপের শেষ-শর্ত</pre></div></div>`,

senior: {
    title: "Quick Guide — Tool Use",
    body: `<p><strong>Define:</strong> name, description (write it for the model: what, when, what inputs mean), input_schema.</p>
<p><strong>Round trip:</strong> response with stop_reason tool_use → run each tool_use block → reply with tool_result blocks (matching tool_use_id) in one user message → call again.</p>
<p><strong>Errors:</strong> return them as results with is_error, never crash the loop. <strong>Parallel:</strong> return all results together.</p>
<p><strong>Client vs server tools:</strong> you run client tools (Claude Code's Read/Edit/Bash); Anthropic runs server tools such as web search. Book 19 goes deeper into tool design and MCP.</p>`
  }
});

