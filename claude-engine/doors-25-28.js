// ════════════════════════════════════════
// Book 62 · The Twelve-Line Engine
// DOORS 25–28 · The expert's judgement · the engine
// ════════════════════════════════════════


// ── DOOR 25 · দর্জির চক-দাগ — The Tailor's Chalk ──
doors.push({
  num: 25,
  icon: "✂️",
  color: "#e879f9",
  name: "দর্জির চক-দাগ",
  subtitle: "The Tailor's Chalk",
  tech: "Extended thinking & effort — reason before answering, sized to the job",
  spirit: "তা'আন্নি — তাড়াহুড়ো নয়, মেপে তারপর কাটা",
  secret: "কঠিন কাপড়ে আগে চকের দাগ, সহজ সেলাইয়ে সরাসরি সুই — ভাবনার খরচ কাজের মাপে।",
  recall: {
    q: "Extended thinking কী, এর খরচ কোথায় ধরা হয়, আর কোন কাজে এটা অপচয়? নিজের agent loop-এ thinking block নিয়ে কোন নিয়ম মানতে হয়?",
    qen: "What is extended thinking, where is its cost counted, and for which jobs is it waste? What rule must your own agent loop follow with thinking blocks?",
    a: "উত্তরের আগে model একটা খসড়া-যুক্তি (thinking block) তৈরি করে; এর token output হিসেবে বিল হয় আর সময় লাগে। Planning, জটিল debugging, architecture-এ কাজে লাগে; variable-এর নাম বদলানো বা সাধারণ খোঁজে অপচয়। Tool loop-এ assistant-এর thinking block (signature সহ) অপরিবর্তিত অবস্থায় ফেরত পাঠাতে হয়।",
    aen: "Before answering, the model produces reasoning in a thinking block; those tokens are billed as output and add latency. It pays off for planning, hard debugging and architecture, and is waste for renames or simple lookups. In a tool loop, pass the assistant's thinking blocks (with their signature) back unchanged."
  },
  story: `<p class="scene-setting">নিউ মার্কেটের পেছনের গলিতে এক দর্জির দোকান, ঈদের আগের রাত। নতুন কাপড়ের মাড়ের গন্ধ, সেলাই মেশিনের একটানা গুনগুন, কাঁচির কচকচ। কাউন্টারের পেছনে দর্জি ওস্তাদ নূর হোসেন — গলায় সারাক্ষণ ঝোলানো হলুদ মাপের ফিতা, ডান বুড়ো আঙুলে সাদা চকের গুঁড়ো লেগে থাকে। তাঁর সামনে একটা দামি কাতান, বরের শেরওয়ানির জন্য। তিনি কাঁচি ধরেননি। প্রায় এক ঘণ্টা ধরে কাপড়ের উল্টো পিঠে চক দিয়ে দাগ টানছেন।</p>
<p class="scene-setting en">A tailor's shop in a lane behind New Market, the night before Eid. The starch smell of new cloth, the steady hum of sewing machines, the crunch of scissors. Behind the counter, master tailor Nur Hossain — a yellow tape measure always round his neck, white chalk dust on his right thumb. Before him lies expensive katan silk for a groom's sherwani. He has not touched the scissors. For almost an hour he has been drawing chalk lines on the back of the cloth.</p>

<div class="dialogue">তুমি বলো — ওস্তাদ, Claude-এর একটা setting আছে, "extended thinking" বা effort — বাড়ালে ও উত্তর দেওয়ার আগে অনেকক্ষণ ভাবে। আমি সব কাজে সর্বোচ্চ দিয়ে রেখেছি, বেশি ভাবলে তো বেশি ভালো, তাই না? নূর হোসেন চক নামিয়ে পাশের টেবিল দেখালেন, যেখানে তাঁর শাগরেদ একটা বালিশের ওয়ার নিয়ে বসে আছে। বললেন — ওই ছেলেটা এক ঘণ্টা ধরে বালিশের ওয়ারে চক টানছে। আর আমি একবার এক ঘণ্টার কাজ পাঁচ মিনিটে করতে গিয়েছিলাম।</div>
<div class="dialogue en">You say: Ustad, Claude has a setting — "extended thinking", or effort — turn it up and it thinks for a long time before answering. I set it to maximum for everything; more thinking must be better, right? Nur Hossain puts down the chalk and points to the next table, where his apprentice sits with a pillowcase. That boy has been chalking a pillowcase for an hour. And I once tried to do an hour's work in five minutes.</div>

<p>তাঁর ভুল: বহু বছর আগে এক ঈদের রাতে ভিড় ছিল প্রচণ্ড। এক বরের শেরওয়ানির দামি কাপড় তিনি চক না টেনেই কেটে ফেললেন — হাত তো পাকা, চোখেই মাপ হয়ে যাবে। কাঁধের কাট আধ ইঞ্চি ভুল হলো। সেই কাপড় আর বাজারে ছিল না। বিয়ের সকালে বরের বাবা দোকানে দাঁড়িয়ে ছিলেন, মুখে কোনো কথা নেই। নূর হোসেন বললেন — পাকা হাতেরও কঠিন কাপড়ে দাগ লাগে। কিন্তু বালিশের ওয়ারে এক ঘণ্টা চক টানা, সেটাও অপচয়।</p>
<p class="en">His mistake: years ago, on an Eid night, the rush was enormous. He cut a groom's expensive sherwani fabric without chalking — his hand was practised, his eye would measure. The shoulder cut came out half an inch wrong. That fabric was no longer in the market. On the wedding morning the groom's father stood in the shop without a word. Even a practised hand needs chalk on hard cloth. But an hour of chalk on a pillowcase is waste too.</p>

<div class="diagram"><div class="diag-title">Chalk first, then cut · আগে দাগ, তারপর কাটা</div><svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d17a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker></defs><rect class="node-moon" x="15" y="95" width="110" height="50" rx="8"/><text class="lbl" x="70" y="118">PROMPT</text><line x1="125" y1="120" x2="148" y2="120" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d17a)"/><rect x="152" y="70" width="250" height="100" rx="10" fill="rgba(179,127,235,.10)" stroke="#b37feb" stroke-dasharray="5 4"/><text class="lbl" x="275" y="92">thinking block</text><text class="lbl-sm" x="275" y="112">plan · check · reconsider</text><text class="lbl-sm" x="275" y="128">billed as output tokens</text><text class="lbl-sm" x="275" y="144">budget / effort = how long to chalk</text><line x1="402" y1="120" x2="420" y2="120" stroke="#a5b4fc" stroke-width="2" marker-end="url(#d17a)"/><rect class="node-leaf" x="425" y="95" width="200" height="50" rx="8"/><text class="lbl" x="525" y="116">ANSWER / tool_use</text><text class="lbl-sm" x="525" y="133">the actual cut</text><text class="lbl-leaf" x="160" y="210">high effort: plans, gnarly bugs,</text><text class="lbl-leaf" x="160" y="228">architecture, long agent runs</text><text class="lbl-hot" x="480" y="210">low / off: renames, lookups,</text><text class="lbl-hot" x="480" y="228">formatting, classification</text></svg><div class="diag-cap">চিত্র: উত্তরের আগে খসড়া-যুক্তি; কতটা ভাববে তা কাজের কাঠিন্য অনুযায়ী। · Reasoning before the answer, sized to the difficulty.</div></div>

<p>এটাই <strong>extended thinking</strong>। Claude উত্তর বা tool call লেখার আগে একটা <strong>thinking block</strong>-এ যুক্তি সাজাতে পারে — পরিকল্পনা, যাচাই, বিকল্প ভাবা। দরজা ১২-এ মেহের আলী খান বলেছিলেন এই অভ্যাসও প্রশিক্ষণে শেখানো; এখানে দেখো কীভাবে চালাতে হয়। কতটা ভাববে, তা ঠিক হয় একটা <strong>budget</strong> বা নতুন model-এ একটা <strong>effort</strong>/adaptive setting দিয়ে। Thinking-এর token output হিসেবে বিল হয়, আর সময় নেয় — তাই এটা নূর হোসেনের চক: দামি কাপড়ে অপরিহার্য, বালিশের ওয়ারে অপচয়। নূর হোসেন চক টানেন কাপড়ের <em>উল্টো পিঠে</em> — খদ্দের দেখে না। নতুন model-এ তোমাকেও প্রায়ই পুরো thinking নয়, একটা সারাংশ দেখানো হয়, যদিও বিল হয় পুরোটার।</p>
<p class="en">This is <strong>extended thinking</strong>. Before writing an answer or a tool call, Claude can reason in a <strong>thinking block</strong> — plan, check, consider alternatives. In Door 12 Meher Ali Khan said this habit is trained; here you see how to drive it. How much it thinks is set by a <strong>budget</strong>, or on newer models an <strong>effort</strong>/adaptive setting. Thinking tokens are billed as output and take time — so this is Nur Hossain's chalk: essential on costly cloth, waste on a pillowcase. He chalks on the <em>back</em> of the cloth, where the customer never looks. On newer models you are often shown a summary of the thinking rather than all of it, though the full thinking is billed.</p>

<div class="code-block"># API-তে চক (Python) — সঠিক parameter model অনুযায়ী বদলায়, docs দেখো
r = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=16000,
    thinking={"type": "enabled", "budget_tokens": 8000},   # budget must stay below max_tokens
    messages=[{"role": "user", "content": "Design a zero-downtime migration for a 40M-row invoices table."}],
)
for block in r.content:
    print(block.type)          # "thinking" … then "text"
# নতুন model-গুলোতে এর বদলে adaptive thinking / effort setting থাকতে পারে।

# ⚠ নিজের agent loop-এ (দরজা ২৮): tool call-এর সঙ্গে thinking এলে,
#   assistant-এর content (thinking block আর তার signature সহ) হুবহু ফেরত পাঠাও —
#   messages.append({"role": "assistant", "content": r.content})  ← already does this
#   কিছু model-এ tool call-এর মাঝখানে আবার ভাবতে পারে (interleaved thinking) —
#   নূর হোসেনের প্রতিটা ট্রায়ালের পর নতুন করে চক টানার মতো।

# Claude Code-এ (version অনুযায়ী): thinking toggle, /model-এ effort,
# বা prompt-এ "think hard about the race condition before planning"</div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ দুই রকম অপচয়</div>সব কাজে সর্বোচ্চ effort: variable-এর নাম বদলাতে দুই মিনিট, বিল তিনগুণ। অথবা উল্টোটা: 40M-row migration-এর plan thinking ছাড়া, এক টানে — কাঁধের কাট আধ ইঞ্চি ভুল।<br><em>Max effort on renames; zero thinking on a risky migration.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ নূর হোসেনের মাপ</div>Plan mode আর কঠিন debugging-এ বেশি effort; দৈনন্দিন edit-এ কম; subagent-এর সহজ খোঁজে একেবারে বন্ধ। আর দরজা ২২-এর eval শিটে মেপে দেখো, বেশি ভাবনায় আসলেই pass rate বাড়ছে কিনা।<br><em>More effort for plans and hard bugs, less for routine edits, none for simple scouts — and measure it.</em></div></div>

<p class="verse">শেষ রাতে শেরওয়ানি কাটা শেষ করে নূর হোসেন বললেন — কুরআনে একটা ছোট আয়াত আমার দোকানের দেয়ালে লেখা আছে: "আর মানুষ বড়ই তাড়াহুড়োপ্রিয়" (সূরা ইসরা ১৭:১১, ভাবানুবাদ)। তাড়াহুড়ো আমাদের স্বভাবে আছে বলেই চক আবিষ্কার হয়েছে। কিন্তু যে সবকিছুতে থেমে থাকে, সে-ও ঈদের আগে কাপড় দিতে পারে না। কোথায় থামবে, সেটাই কারিগরি।</p>
<p class="en">Finishing the sherwani near dawn, Nur Hossain says: A short verse of the Qur'an is written on my shop wall: "And man is ever hasty" (17:11, Sahih International). Chalk was invented because haste is in our nature. But the one who pauses over everything cannot deliver before Eid either. Knowing where to pause — that is the craft.</p>

<p>আক্কাস আলী (দরজা ২৪) ইঞ্জিন বসিয়েছিলেন; নূর হোসেন দেখালেন কখন তাকে বেশি জোর দিতে হয়, কখন নয়। Book 59-এর প্ল্যানার সাহেবের নকশা-টেবিল (দরজা ২০) plan mode শিখিয়েছিল — এখন জানো তার পেছনে কী ঘোরে। আর দরজা ১১-এর তাঁতি বলেছিলেন প্রতিটা সুতো একটু অনিশ্চিত; ভাবনা সেই অনিশ্চয়তাকে উত্তরের আগেই কমায়। পরের দরজায় প্রশ্নপত্রের কারিগর: কী ভাবতে বলবে, সেটা কীভাবে লিখবে।</p>
<p class="en">Akkas Ali (Door 24) fitted the engine; Nur Hossain shows when to push it hard and when not. Book 59's planner's drafting table (Door 20) taught plan mode — now you know what turns behind it. The weaver of Door 11 said every thread is a little uncertain; thinking reduces that uncertainty before the answer. Next door: the question-setter — how to write what you ask it to think about.</p>

<div class="secret-box"><div class="label">দরজা ২৫ — তালিসমান</div><div class="text">✂️ কঠিন কাপড়ে আগে চকের দাগ, সহজ সেলাইয়ে সরাসরি সুই — ভাবনার খরচ কাজের মাপে।<br><small>নাম: <strong>extended thinking</strong> (budget, effort, adaptive, interleaved) — thinking tokens বিল হয় output হিসেবে।</small></div></div>`,
  senior: {
    title: "Quick Guide — Thinking & Effort",
    body: `<p><strong>What:</strong> the model reasons in thinking blocks before its answer or tool call; more thinking usually helps hard problems.</p>
<p><strong>Cost:</strong> thinking tokens are billed as output and add latency; newer models may show summarised thinking while billing the full amount.</p>
<p><strong>Controls:</strong> a token budget (below max_tokens), or effort/adaptive settings on newer models; in Claude Code a thinking toggle, effort in /model, or asking it to think hard (varies by version).</p>
<p><strong>Harness rule:</strong> in tool loops, pass the assistant's content, including thinking blocks, back unchanged.</p>`
  }
});


// ── DOOR 26 · প্রশ্নপত্রের কারিগর — The Question-Setter ──
doors.push({
  num: 26,
  icon: "📝",
  color: "#f472b6",
  name: "প্রশ্নপত্রের কারিগর",
  subtitle: "The Question-Setter",
  tech: "Prompt craft at the API level — system prompts, tool descriptions, skills",
  spirit: "কওলে সাদীদ — সোজা, সঠিক কথা",
  secret: "লক্ষ লক্ষ পরীক্ষার্থীর মতো model পড়ে ঠিক যা লেখা আছে — কী চাও, কেন চাও, কোন ছাঁচে চাও, স্পষ্ট লেখো।",
  recall: {
    q: "API-স্তরের prompt লেখার অন্তত পাঁচটা নীতি বলো। আর নিয়মের সঙ্গে কারণ লিখলে কেন ভালো ফল আসে?",
    qen: "Name at least five principles of API-level prompt writing. And why does stating the reason behind a rule give better results?",
    a: "স্পষ্ট ও নির্দিষ্ট হও (প্রত্যাশার মাত্রাসহ); নিয়মের কারণ দাও; XML-ধাঁচের tag দিয়ে ভাগ করো; বৈচিত্র্যময় উদাহরণ দাও (model সেগুলো নকল করে); লম্বা document আগে, প্রশ্ন শেষে; কী করতে হবে বলো, শুধু কী করবে না নয়; tool-এর বর্ণনাকেও prompt হিসেবে লেখো; eval দিয়ে মাপো। কারণ জানলে model নিয়মটা এমন পরিস্থিতিতেও খাটাতে পারে যা তুমি আগে ভাবোনি।",
    aen: "Be explicit and specific, including the level of ambition; give the reason behind rules; structure with XML-style tags; use varied examples (they get copied); long documents first, the question last; say what to do, not only what not to do; write tool descriptions as prompts; measure with evals. Knowing the reason lets the model generalise the rule to cases you did not anticipate."
  },
  story: `<p class="scene-setting">বকশীবাজারের শিক্ষা বোর্ডের এক বন্ধ ঘর। ন্যাপথলিন আর পুরনো কাগজের গন্ধ, সিল করা খামের স্তূপ, মাথার ওপর ফ্যান, আর ঝরনা-কলমের খসখস শব্দ। টেবিলে অধ্যাপিকা সালেহা — চশমা সারাক্ষণ চুলের ওপর তোলা, হাতে লাল কালির পুরনো ঝরনা-কলম। তিনি প্রশ্নপত্র লেখেন। তাঁর প্রতিটা বাক্য পড়বে কয়েক লাখ ছেলেমেয়ে, একই সময়ে, কাউকে জিজ্ঞেস করার সুযোগ ছাড়াই।</p>
<p class="scene-setting en">A closed room at the education board in Bakshibazar. The smell of naphthalene and old paper, stacks of sealed envelopes, a ceiling fan, the scratch of a fountain pen. At the table sits Professor Saleha — glasses always pushed up into her hair, an old red-ink fountain pen in her hand. She writes exam papers. Every sentence she writes will be read by several hundred thousand students at the same moment, with no chance to ask anyone what she meant.</p>

<div class="dialogue">তুমি বলো — আপা, আমি নিজের agent-এর system prompt লিখছি। কখনো দারুণ কাজ করে, কখনো একেবারে অন্য কিছু করে। আমি তো পরিষ্কার লিখেছি: "Be helpful and write good code."। সালেহা লাল কলমটা নামালেন। বললেন — আমি একবার এক লাইনের প্রশ্নে সারা দেশের পরীক্ষা নষ্ট করেছিলাম।</div>
<div class="dialogue en">You say: Apa, I'm writing my agent's system prompt. Sometimes it works brilliantly, sometimes it does something else entirely. I wrote it clearly: "Be helpful and write good code." Saleha puts down the red pen. I once ruined a nationwide exam with a one-line question.</div>

<p>তাঁর ভুল: বহু বছর আগে এক বোর্ড পরীক্ষায় তিনি লিখেছিলেন, "কারণগুলো বর্ণনা করো।" তাঁর মাথায় ছিল আগের অনুচ্ছেদের একটা নির্দিষ্ট ঘটনা। কিন্তু প্রশ্নটা ছাপা হয়েছিল নতুন পাতার ওপরে, সেই অনুচ্ছেদ থেকে আলাদা হয়ে। অর্ধেক ছাত্রছাত্রী লিখল এক ঘটনার কারণ, অর্ধেক আরেকটার। প্রশ্ন বাতিল, নতুন পরীক্ষা, হাজারো পরিবারের দুশ্চিন্তা। সালেহা বললেন — সেদিন শিখেছি, লিখিত প্রশ্নে "আমি কী বোঝাতে চেয়েছি" বলে কিছু নেই। যা লেখা আছে, শুধু সেটাই আছে।</p>
<p class="en">Her mistake: years ago in a board exam she wrote, "Describe the causes." In her head was a specific event from the preceding passage. But the question was printed at the top of a new page, cut off from that passage. Half the students wrote the causes of one event, half of another. The question was cancelled, a re-exam, worry in thousands of homes. That day I learned: in a written question there is no "what I meant". Only what is written exists.</p>

<p>Model ঠিক সেই পরীক্ষার্থী (দরজা ১৩: সে শুধু টেবিলে যা আছে তা-ই দেখে)। তাই সালেহার খাতার নীতিগুলো সরাসরি খাটে তোমার system prompt, skill, subagent-এর নির্দেশ আর tool-এর বর্ণনায়:</p>
<p class="en">The model is exactly that examinee (Door 13: it sees only what is on the desk). So the principles in Saleha's notebook apply directly to your system prompt, skills, subagent instructions and tool descriptions:</p>

<div class="diagram"><div class="diag-title">Anatomy of a well-set paper · ভালো প্রশ্নপত্রের গঠন</div><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg"><rect class="node" x="120" y="14" width="400" height="272" rx="12"/><rect class="node-purple" x="140" y="30" width="360" height="30" rx="6"/><text class="lbl-sm" x="320" y="49">&lt;role&gt; who you are, for whom</text><rect class="node-hot" x="140" y="68" width="360" height="42" rx="6"/><text class="lbl-sm" x="320" y="85">&lt;rules&gt; each rule + BECAUSE …</text><text class="lbl-sm" x="320" y="100">say what to do, not only what not to</text><rect class="node-moon" x="140" y="118" width="360" height="42" rx="6"/><text class="lbl-sm" x="320" y="135">&lt;context&gt; long documents FIRST</text><text class="lbl-sm" x="320" y="150">(the passage before the question)</text><rect class="node-leaf" x="140" y="168" width="360" height="30" rx="6"/><text class="lbl-sm" x="320" y="187">&lt;examples&gt; 2–3, varied — they get copied</text><rect class="node-cyan" x="140" y="206" width="360" height="30" rx="6"/><text class="lbl-sm" x="320" y="225">&lt;task&gt; the question, LAST</text><rect x="140" y="244" width="360" height="30" rx="6" fill="rgba(252,211,77,.12)" stroke="#fbbf24"/><text class="lbl-sm" x="320" y="263">&lt;done_when&gt; how both of you know it's finished</text><text class="lbl-amber" x="60" y="150">be</text><text class="lbl-amber" x="60" y="166">explicit</text><text class="lbl-amber" x="580" y="150">measure</text><text class="lbl-amber" x="580" y="166">(Door 22)</text></svg><div class="diag-cap">চিত্র: ভূমিকা, কারণসহ নিয়ম, আগে document, বৈচিত্র্যময় উদাহরণ, শেষে প্রশ্ন, আর কখন শেষ। · Role, rules with reasons, documents first, varied examples, question last, definition of done.</div></div>

<table class="kv-table"><tr><th>সালেহার নীতি</th><th>Prompt-এ</th></tr><tr><td>প্রশ্নে বলে দাও কত শব্দে, কত নম্বরের</td><td class="hl">স্পষ্ট আর নির্দিষ্ট হও — কী চাও, কতটা উচ্চাকাঙ্ক্ষা নিয়ে; "good code" নয়, "Decimal for money, a test per endpoint"</td></tr><tr><td>"২০০ শব্দে লেখো, কারণ পরীক্ষক তিন মিনিট পাবেন"</td><td class="hl">নিয়মের কারণ দাও — model অন্য পরিস্থিতিতেও সেটা খাটাতে পারে</td></tr><tr><td>ক-বিভাগ, খ-বিভাগ, স্পষ্ট শিরোনাম</td><td class="hl">XML-ধাঁচের tag দিয়ে ভাগ করো: &lt;rules&gt;, &lt;context&gt;, &lt;task&gt;</td></tr><tr><td>নমুনা উত্তর দিলে সবাই তার ধাঁচে লেখে</td><td class="hl">উদাহরণ শক্তিশালী আর নকল হয় — বৈচিত্র্যময় আর ঠিক যেমন চাও তেমন দাও</td></tr><tr><td>আগে অনুচ্ছেদ, তারপর প্রশ্ন</td><td class="hl">লম্বা document আগে, প্রশ্ন শেষে</td></tr><tr><td>"ভুল বানান কোরো না" নয়, "প্রতিটা উত্তর পড়ে মিলিয়ে নাও"</td><td class="hl">কী করতে হবে বলো, শুধু কী করবে না তা নয়</td></tr><tr><td>উত্তরপত্রের ছাপা ছক</td><td class="hl">নির্দিষ্ট format দরকার হলে structured outputs / একটা উদাহরণ ছাঁচ</td></tr><tr><td>প্রতিটা প্রশ্ন আগের বছরের খাতায় পরখ</td><td class="hl">অনুমানে নয়, eval-এ মাপো (দরজা ২২)</td></tr></table>

<div class="code-block"># আগে — "যা বোঝাতে চেয়েছি"
SYSTEM = "Be helpful and write good code."

# পরে — সালেহার খাতা মেনে
SYSTEM = """&lt;role&gt;You are the billing-service maintainer's pair programmer.&lt;/role&gt;
&lt;rules&gt;
- Money is always Decimal, never float, because rounding errors reach customer invoices.
- Business logic lives in apps/*/services.py, because views are thin HTTP adapters.
- Before editing, read the file and its tests. After editing, run pytest for that app.
- Keep changes minimal: do not refactor unrelated code or add dependencies.
&lt;/rules&gt;
&lt;done_when&gt;Tests pass and you have summarised what changed and how you verified it.&lt;/done_when&gt;"""

# Tool description-ও একটা প্রশ্নপত্র (দরজা ১৬-এর মেনু কার্ড)
{"name": "search_invoices",
 "description": "Search invoices by customer id and date range. Use this BEFORE reading raw tables. "
                "Returns at most 50 rows; narrow the range if you need more.",
 "input_schema": {"type": "object", "properties": {
     "customer_id": {"type": "string", "description": "e.g. CUST-00123"},
     "from_date":  {"type": "string", "description": "ISO date, e.g. 2026-09-01"}},
   "required": ["customer_id"]}}</div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ "কারণগুলো বর্ণনা করো"</div>অস্পষ্ট লক্ষ্য, কারণ ছাড়া নিয়ম, সব কথা এক অনুচ্ছেদে, একটাই উদাহরণ যা model হুবহু নকল করে, "don't do X" দিয়ে ভরা, আর বদলানোর পর মেপে দেখা হয়নি।<br><em>Vague goals, reasonless rules, one blob, one copied example, all don'ts, never measured.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ সালেহার প্রশ্নপত্র</div>ভূমিকা, নিয়ম-আর-কারণ, কখন কাজ শেষ — tag দিয়ে আলাদা। Tool-এর নাম আর বর্ণনা কখন ব্যবহার করবে তা বলে। প্রতিটা বদল eval-এ পরখ। মনে রাখো: শব্দচয়নের চেয়ে টেবিলে কী আছে (দরজা ১৩) বেশি গুরুত্বপূর্ণ।<br><em>Role, rules with reasons, a definition of done; tools that say when to use them; every change tested.</em></div></div>

<div class="callout tip"><span class="co-icon">🖊️</span><div><strong>সালেহার লাল কলম:</strong> Agent-এর বেশিরভাগ মানের সমস্যা আসলে tool-নকশার সমস্যা — অস্পষ্ট নাম, দ্ব্যর্থক parameter, হৈচৈপূর্ণ output। আর নিজের prompt Claude-কে দিয়েই পড়িয়ে নাও: "এই system prompt পড়ে বলো, কোথায় তুমি দুইভাবে বুঝতে পারো?" Anthropic-এর prompt engineering guide এই খাতার বিস্তারিত রূপ।<br><em>Most agent quality problems are tool-design problems. Ask Claude where your prompt could be read two ways.</em></div></div>

<p class="verse">সালেহা খামটা সিল করতে করতে বললেন — আমার বাবা প্রতি জুমায় খুতবার শুরুর আয়াতগুলো শুনে বাসায় এসে একটাই কথা বলতেন: "হে ঈমানদারগণ, আল্লাহকে ভয় করো আর সঠিক-সোজা কথা বলো; তিনি তোমাদের কাজগুলো শুধরে দেবেন" (সূরা আহযাব ৩৩:৭০–৭১, ভাবানুবাদ)। সোজা কথা থেকে সোজা কাজ। আমার প্রশ্নপত্রে যে বাক্য বাঁকা, লাখো খাতায় তার উত্তরও বাঁকা।</p>
<p class="en">Sealing the envelope, Saleha says: My father, coming home from Friday prayer, would repeat one line from the verses recited in the sermon: "O you who have believed, fear Allah and speak words of appropriate justice. He will amend for you your deeds" (33:70–71, Sahih International). From straight words, straight deeds. A crooked sentence in my paper becomes crooked answers in a hundred thousand scripts.</p>

<p>শফিক (দরজা ১৬) মেনু কার্ড লিখতেন; সালেহা দেখালেন প্রতিটা নির্দেশই একটা মেনু কার্ড। নূর হোসেন (দরজা ২৫) বলেছিলেন কতটা ভাবাবে; সালেহা বলছেন কী নিয়ে ভাবাবে। Book 7 (বাক্যের জাদুকর) পুরো বইটাই এই কারিগরি; Book 9-এ টেবিল সাজানো। পরের দরজায় শেষ বিচারবুদ্ধির প্রশ্ন: এই প্রশ্নপত্র কাকে দেবে — কোন model, কোন নকশায়?</p>
<p class="en">Shafiq (Door 16) wrote menu cards; Saleha shows every instruction is a menu card. Nur Hossain (Door 25) said how much to think; Saleha says what to think about. Book 7 is entirely this craft; Book 9 arranges the desk. The next door asks the last judgement question: to whom do you give this paper — which model, in which design?</p>

<div class="secret-box"><div class="label">দরজা ২৬ — তালিসমান</div><div class="text">📝 Model পড়ে ঠিক যা লেখা আছে — কী চাও, কেন চাও, কোন ছাঁচে চাও, স্পষ্ট লেখো।<br><small>নাম: <strong>prompt engineering</strong> at the API level — explicit goals, reasons, XML structure, varied examples, documents first, positive instructions, tool descriptions as prompts, evals।</small></div></div>`,
  senior: {
    title: "Quick Guide — Writing for Claude",
    body: `<p><strong>Checklist:</strong> role · goal and ambition · rules with reasons · tagged sections · 2–3 varied examples · long context first, question last · what to do (not only what not to) · definition of done · exact output format when needed.</p>
<p><strong>Tools:</strong> clear names, descriptions that say when to use them, parameter examples, small and relevant outputs.</p>
<p><strong>Process:</strong> change one thing, run the eval set, keep what measurably helps.</p>
<p>একটা কৌশল: নিজের prompt Claude-কে দিয়ে "পরীক্ষার্থীর চোখে" পড়াও — কোথায় দ্ব্যর্থকতা, জিজ্ঞেস করো।</p>`
  }
});


// ── DOOR 27 · শ্রমিক-হাটের সর্দার — The Labour-Market Sardar ──
doors.push({
  num: 27,
  icon: "👷",
  color: "#fb7185",
  name: "শ্রমিক-হাটের সর্দার",
  subtitle: "The Labour-Market Sardar",
  tech: "Choosing the model and the pattern — right worker, right workflow, simplest first",
  spirit: "আমানত আহলিহা — যার কাজ, তার হাতে",
  secret: "হেড-মিস্ত্রিকে ইট বওয়াতে পাঠিয়ো না, যোগালিকে ছাদ প্লাস্টারে নয় — আর এক টালির কাজে পুরো দল নয়।",
  recall: {
    q: "Model বাছাইয়ের তিনটা প্রশ্ন কী? আর কখন agent বানানোই উচিত নয় — তার বদলে কোন সরল নকশাগুলো আছে?",
    qen: "What are the three questions for choosing a model? And when should you not build an agent at all — what simpler patterns exist instead?",
    a: "ভুল উত্তরের দাম কত (বেশি হলে শক্তিশালী model + যাচাই); কাজটা কতবার চলে (লাখোবার হলে eval পাস করা সবচেয়ে ছোট model); দেরি কি user দেখে (হলে দ্রুত স্তর, streaming, caching)। কাজ যদি এক call-এ বা নির্দিষ্ট ধাপে হয়, agent নয়: single call, prompt chaining, routing, parallelization, orchestrator–workers, evaluator–optimizer — সবচেয়ে সরলটা আগে।",
    aen: "How costly is a wrong answer (high → stronger model plus verification); how often does it run (millions → the smallest model that passes your eval); is latency user-facing (yes → faster tier, streaming, caching). If the job fits one call or fixed steps, don't build an agent: single call, prompt chaining, routing, parallelisation, orchestrator–workers, evaluator–optimizer — simplest first."
  },
  story: `<p class="scene-setting">মোহাম্মদপুর বেড়িবাঁধের মোড়, ফজরের পরপর। ভোরের কুয়াশা, চায়ের দোকানের কেটলির শোঁ-শোঁ, মাটির ঝুড়ি, কড়াই, কর্নি হাতে শত শত শ্রমিক কাজের অপেক্ষায়। ভিড়ের মাঝে সর্দার মোস্তফা — গলায় সুতোয় ঝোলানো একটা বাঁশি, হাতের তালু কড়া পড়ে পাথরের মতো, গলা সারাক্ষণ ভাঙা। প্রতি ভোরে ঠিকাদাররা তাঁকে কাজের কথা বলেন, আর তিনি ঠিক করেন কাকে কোথায় পাঠাবেন।</p>
<p class="scene-setting en">The Mohammadpur embankment crossing, just after fajr. Morning mist, the hiss of a tea stall's kettle, hundreds of labourers with earthen baskets, pans and trowels waiting for work. In the crowd stands Sardar Mostafa — a whistle hanging on a string round his neck, palms callused to stone, his voice permanently hoarse. Every dawn the contractors tell him the jobs, and he decides who goes where.</p>

<div class="dialogue">তুমি বলো — সর্দার ভাই, আমি সব কাজে সবচেয়ে বড় model দিই, Opus — সবচেয়ে বুদ্ধিমান তো। আর যেকোনো কাজে একটা agent বানিয়ে ফেলি, loop, tool, subagent সব দিয়ে। বিল দেখে মালিক চোখ কপালে তুলেছেন। মোস্তফা বাঁশিটা ঠোঁট থেকে নামালেন। বললেন — আমিও একবার এমন সর্দারি করেছিলাম। এক সপ্তাহে তিনটা কাজ নষ্ট।</div>
<div class="dialogue en">You say: Sardar bhai, I give every job to the biggest model, Opus — it's the smartest. And I build an agent for everything, with a loop, tools, subagents. The owner's eyebrows hit the ceiling when he saw the bill. Mostafa lowers the whistle from his lips. I was a sardar like that once. Three jobs ruined in a week.</div>

<p>তিনটা ভুল, এক সপ্তাহে। প্রথম দিন হেড-মিস্ত্রিকে পাঠালেন একটা সাইটে — কাজ ছিল শুধু ইট বওয়া। দিনশেষে ঠিকাদার তিনগুণ মজুরি দিলেন, আর মিস্ত্রি সারা দিন রাগে ফুঁসলেন। তৃতীয় দিন একজন নতুন যোগালিকে পাঠালেন ছাদ প্লাস্টার করতে — সস্তা, দ্রুত। এক মাস পরে ছাদ ফাটল। পঞ্চম দিন এক বাড়িতে একটা টালি আলগা হয়েছিল; তিনি পাঠালেন পুরো দল — সর্দার, মিস্ত্রি, তিন যোগালি। পাঁচজন এক বাথরুমে ধাক্কাধাক্কি, আধা বেলা শেষ। মোস্তফা বললেন — সেদিন থেকে তিনটা প্রশ্ন করি। ভুল হলে কত ক্ষতি? কাজটা রোজ কতবার? মালিক কি দাঁড়িয়ে অপেক্ষা করছেন?</p>
<p class="en">Three mistakes in one week. On day one he sent the head mason to a site where the job was only carrying bricks. The contractor paid triple wages, and the mason fumed all day. On day three he sent a new helper to plaster a ceiling — cheap, fast. A month later the ceiling cracked. On day five a house had one loose tile; he sent a whole crew — sardar, mason, three helpers. Five men jostling in one bathroom, half a day gone. Since then I ask three questions. How much damage if it goes wrong? How many times a day is this job done? Is the owner standing there waiting?</p>

<div class="diagram"><div class="diag-title">Right worker · right workflow · সঠিক শ্রমিক, সঠিক নকশা</div><svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg"><rect class="node-hot" x="20" y="20" width="185" height="70" rx="10"/><text class="lbl" x="112" y="42">OPUS · হেড-মিস্ত্রি</text><text class="lbl-sm" x="112" y="62">hard design, gnarly bugs,</text><text class="lbl-sm" x="112" y="77">planning, final review</text><rect class="node" x="228" y="20" width="185" height="70" rx="10"/><text class="lbl" x="320" y="42">SONNET · রাজ-মিস্ত্রি</text><text class="lbl-sm" x="320" y="62">everyday coding,</text><text class="lbl-sm" x="320" y="77">most agent work</text><rect class="node-leaf" x="436" y="20" width="185" height="70" rx="10"/><text class="lbl" x="528" y="42">HAIKU · যোগালি</text><text class="lbl-sm" x="528" y="62">classify, route, scout,</text><text class="lbl-sm" x="528" y="77">high-volume transforms</text><text class="lbl-amber" x="320" y="118">patterns — pick the simplest that works</text><rect class="node-cyan" x="20" y="135" width="140" height="44" rx="8"/><text class="lbl-sm" x="90" y="155">single call</text><text class="lbl-sm" x="90" y="170">one tile, one man</text><rect class="node-cyan" x="170" y="135" width="140" height="44" rx="8"/><text class="lbl-sm" x="240" y="155">prompt chaining</text><text class="lbl-sm" x="240" y="170">fixed steps in order</text><rect class="node-cyan" x="320" y="135" width="140" height="44" rx="8"/><text class="lbl-sm" x="390" y="155">routing</text><text class="lbl-sm" x="390" y="170">sardar sorts the jobs</text><rect class="node-cyan" x="470" y="135" width="150" height="44" rx="8"/><text class="lbl-sm" x="545" y="155">parallelisation</text><text class="lbl-sm" x="545" y="170">many sites at once</text><rect class="node-cyan" x="95" y="190" width="140" height="44" rx="8"/><text class="lbl-sm" x="165" y="210">orchestrator–workers</text><text class="lbl-sm" x="165" y="225">foreman + crews</text><rect class="node-cyan" x="250" y="190" width="140" height="44" rx="8"/><text class="lbl-sm" x="320" y="210">evaluator–optimizer</text><text class="lbl-sm" x="320" y="225">build, inspect, fix</text><rect class="node-purple" x="405" y="190" width="140" height="44" rx="8"/><text class="lbl-sm" x="475" y="210">autonomous agent</text><text class="lbl-sm" x="475" y="225">open-ended jobs only</text><text class="lbl-hot" x="320" y="268">complexity costs money, latency and failure modes — add it only when it pays</text></svg><div class="diag-cap">চিত্র: উপরে কোন model, নিচে কোন নকশা — বাঁ থেকে ডানে জটিলতা বাড়ে। · Model tiers above; workflow patterns below, simplest on the left.</div></div>

<p>Claude পরিবারে তিন স্তর: <strong>Opus</strong> (সবচেয়ে সক্ষম, দামি, ধীর), <strong>Sonnet</strong> (শক্তিশালী ভারসাম্য), <strong>Haiku</strong> (দ্রুত, সস্তা)। মোস্তফার তিন প্রশ্নই বাছাইয়ের পদ্ধতি: <em>ভুলের দাম</em> বেশি হলে শক্তিশালী model আর যাচাই; <em>কতবার চলে</em> — লাখোবার হলে যে সবচেয়ে ছোট model দরজা ২২-এর eval পাস করে; <em>দেরি কি user দেখে</em> — দেখলে দ্রুত স্তর, streaming, caching (দরজা ১৫)। নাম আর version প্রতি প্রজন্মে বদলায়; তিন প্রশ্ন বদলায় না।</p>
<p class="en">The Claude family has three tiers: <strong>Opus</strong> (most capable, costly, slower), <strong>Sonnet</strong> (strong balance), <strong>Haiku</strong> (fast, cheap). Mostafa's three questions are the method: if a <em>wrong answer is costly</em>, a stronger model plus verification; if it <em>runs millions of times</em>, the smallest model that passes the Door 22 eval; if <em>latency is user-facing</em>, a faster tier, streaming and caching (Door 15). Names and versions change each generation; the three questions do not.</p>

<p>আর দ্বিতীয় বাছাই: দল পাঠাবে, নাকি একজন? Anthropic-এর "Building effective agents" (Schluntz ও Zhang, ২০২৪) কয়েকটা নকশা আলাদা করে দেখায়: একটা call; <strong>prompt chaining</strong> (নির্দিষ্ট ধাপ পরপর); <strong>routing</strong> (একটা সস্তা model কাজ বাছাই করে ঠিক জায়গায় পাঠায়); <strong>parallelisation</strong>; <strong>orchestrator–workers</strong> (একজন planner subagent-দের কাজ ভাগ করে — দরজা ১৮); <strong>evaluator–optimizer</strong> (একজন বানায়, আরেকজন পরখ করে); আর শেষে খোলামেলা <strong>autonomous agent</strong>। তাদের পরামর্শ মোস্তফারই কথা: সবচেয়ে সরলটা দিয়ে শুরু করো, জটিলতা যোগ করো শুধু যখন তার দাম উঠে আসে। অনেক সমস্যায় agent লাগেই না।</p>
<p class="en">And the second choice: send a crew, or one person? Anthropic's "Building effective agents" (Schluntz and Zhang, 2024) separates several designs: a single call; <strong>prompt chaining</strong> (fixed steps in sequence); <strong>routing</strong> (a cheap model sorts the job and sends it to the right handler); <strong>parallelisation</strong>; <strong>orchestrator–workers</strong> (a planner divides work among subagents — Door 18); <strong>evaluator–optimizer</strong> (one builds, another inspects); and finally an open-ended <strong>autonomous agent</strong>. Their advice is Mostafa's: start with the simplest, add complexity only when it pays for itself. Many problems need no agent at all.</p>

<div class="code-block"># Routing — সর্দারের বাঁশি (সস্তা model বাছাই করে, ঠিক শ্রমিক কাজ করে)
ROUTE = {"simple": "claude-haiku-4-5", "code": "claude-sonnet-4-5", "design": "claude-opus-4-1"}
# ↑ example ids — check Anthropic's models page for the current names

def handle(ticket: str) -> str:
    label = client.messages.create(
        model=ROUTE["simple"], max_tokens=5,
        system="Classify the ticket as exactly one word: simple, code, or design.",
        messages=[{"role": "user", "content": ticket}],
    ).content[0].text.strip().lower()
    model = ROUTE.get(label, ROUTE["code"])
    return client.messages.create(model=model, max_tokens=4000,
                                  messages=[{"role": "user", "content": ticket}]).content[0].text

# Claude Code-এ একই চিন্তা: /model দিয়ে session-এর model; subagent-এর frontmatter-এ
# model: haiku (scout) বা model: opus (reviewer) — দরজা ১৮।</div>

<div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ সপ্তাহের তিন ভুল</div>সব কাজে Opus (হেড-মিস্ত্রি ইট বইছেন); ঝুঁকির কাজে সবচেয়ে সস্তা model (যোগালি ছাদে); এক call-এর কাজে loop, tool আর subagent (এক টালিতে পুরো দল)।<br><em>Opus for everything, the cheapest model for risky work, a full agent for a one-call job.</em></div><div class="cmp-card cmp-good"><div class="cmp-label">✅ মোস্তফার বাঁশি</div>তিন প্রশ্নে model, সবচেয়ে সরল নকশা আগে, দরকারে routing দিয়ে মিশ্রণ — planning-এ Opus, কাজে Sonnet, খোঁজে Haiku। প্রতিটা বাছাই eval শিটে মাপা।<br><em>Three questions for the model, simplest pattern first, routing to mix tiers, every choice measured.</em></div></div>

<p class="verse">সূর্য উঠলে হাট ফাঁকা হয়ে এল। মোস্তফা চায়ের কাপ হাতে বললেন — আমাদের মসজিদের খতিব একবার সূরা নিসার একটা আয়াত পড়ে সর্দারদের দিকে তাকিয়ে হেসেছিলেন: "নিশ্চয়ই আল্লাহ তোমাদের আদেশ দেন, আমানত তার হকদারের কাছে পৌঁছে দিতে" (৪:৫৮, ভাবানুবাদ)। কাজও একটা আমানত। যে কাজের যে যোগ্য, তার হাতে — বেশিও না, কমও না।</p>
<p class="en">As the sun rises the market empties. Holding his tea, Mostafa says: Our mosque's khatib once recited a verse of Surah an-Nisa and smiled at the sardars: "Indeed, Allah commands you to render trusts to whom they are due" (4:58, Sahih International). A job is a trust too. It goes to the one fit for it — not more, not less.</p>

<p>সিরাজ মিয়া (দরজা ১৮) দালাল পাঠাতেন; মোস্তফা ঠিক করেন কোন দালাল, আর আদৌ দালাল লাগবে কিনা। রেহানা (দরজা ২২) বলেছিলেন মেপে দেখো; মোস্তফার তিন প্রশ্ন বলে কী মাপবে। Book 59-এর তিন ভাই ও দাদা (দরজা ৩) model পরিবার চিনিয়েছিল; Book 14-এর routing আর Book 17-এর খরচের হিসাব এখানে এক জায়গায়। এখন তোমার হাতে সাতাশটা যন্ত্রাংশ। শেষ ছাদে মীরা অপেক্ষা করছেন।</p>
<p class="en">Siraj Mia (Door 18) sent runners; Mostafa decides which runner, and whether a runner is needed at all. Rehana (Door 22) said measure; Mostafa's three questions say what to measure. Book 59's three brothers and grandfather (Door 3) introduced the model family; Book 14's routing and Book 17's cost accounting meet here. Now you hold twenty-seven parts. On the last rooftop, Mira is waiting.</p>

<div class="secret-box"><div class="label">দরজা ২৭ — তালিসমান</div><div class="text">👷 যার কাজ, তার হাতে — বড় কাজে বড় মিস্ত্রি, সহজ কাজে যোগালি, আর এক টালির কাজে পুরো দল নয়।<br><small>নাম: <strong>model selection</strong> (Opus · Sonnet · Haiku, তিন প্রশ্ন) আর <strong>workflow patterns</strong> — chaining, routing, parallelisation, orchestrator–workers, evaluator–optimizer, agents।</small></div></div>`,
  senior: {
    title: "Quick Guide — Choosing Model and Pattern",
    body: `<p><strong>Three questions:</strong> cost of a wrong answer · volume · user-facing latency. Decide with your eval sheet, not by reputation.</p>
<p><strong>Patterns, simplest first:</strong> single call → prompt chaining → routing → parallelisation → orchestrator–workers → evaluator–optimizer → autonomous agent.</p>
<p><strong>Common mix:</strong> Opus to plan or review, Sonnet to execute, Haiku to classify, route and scout.</p>
<p>মনে রাখো: model-এর নাম আর দাম প্রতি প্রজন্মে বদলায় — code-এ hard-code করার আগে Anthropic-এর models পাতা দেখো।</p>`
  }
});


// ── DOOR 28 · বারো লাইনের ইঞ্জিন — The Twelve-Line Engine (final) ──
doors.push({
  num: 28,
  icon: "⚙️",
  color: "#6366f1",
  name: "বারো লাইনের ইঞ্জিন",
  subtitle: "The Twelve-Line Engine",
  tech: "The whole machine as one loop — trace it, then build your own agent",
  spirit: "কাররাতাইন — দৃষ্টি ফেরাও, আবার, আবার",
  secret: "Claude Code = system prompt + tools + একটা loop — বাকি সবই এই বারো লাইনের অলংকার।",
  recall: {
    q: "স্মৃতি থেকে agent loop-এর কাঠামোটা লেখো — কোন তিনটা জিনিস নিয়ে model call হয়, কখন loop থামে, আর ফলাফল কোথায় যায়? তারপর বলো: দেয়াল (দরজা ১৭) কোন লাইনে বসে?",
    qen: "From memory, write the shape of the agent loop — which three things go into the model call, when does the loop stop, and where do results go? Then: on which line does the wall (Door 17) sit?",
    a: "messages = [user prompt] → loop: model call (system + tools + messages) → assistant-এর উত্তর messages-এ যোগ → stop_reason tool_use না হলে ফেরত দাও → প্রতিটা tool_use চালাও run_tool দিয়ে → tool_result-গুলো একটা user message-এ যোগ করো → আবার। দেয়াল বসে run_tool-এর প্রথম লাইনে: if not allowed(...)।",
    aen: "messages = [user prompt] → loop: call the model with system + tools + messages → append the assistant reply → if stop_reason is not tool_use, return → run each tool_use through run_tool → append the tool_results in one user message → repeat. The wall sits on run_tool's first line: if not allowed(...)."
  },
  story: `<p class="scene-setting">মিরপুরের এক ছাদ, রাত সাড়ে বারোটা। সন্ধ্যার বৃষ্টির পর ভেজা কংক্রিটের গন্ধ, নিচে আইপিএস-এর মৃদু গুঞ্জন, দূরে মেট্রোর শেষ ট্রেনের শব্দ। প্লাস্টিকের চেয়ারে মীরা, কোলে একটা পুরনো ল্যাপটপ — E, A আর S কী-র অক্ষর ঘষে ঘষে উঠে গেছে, শুধু চকচকে ফাঁকা কালো। পাশে ফ্লাস্কে আদা-চা। আটাশ দরজার পথ তোমাকে এখানে এনেছে।</p>
<p class="scene-setting en">A rooftop in Mirpur at half past midnight. The smell of wet concrete after the evening rain, the low hum of the IPS below, the last metro train far away. On a plastic chair sits Mira, an old laptop on her knees — the E, A and S keys worn to blank shiny black. Ginger tea in a flask beside her. Twenty-eight doors of road have brought you here.</p>

<div class="dialogue">মীরা বললেন — সাতাশজন ওস্তাদের কাছে গেছ। একটা করে যন্ত্রাংশ এনেছ। এবার বলো তো, Claude Code আসলে কী? তুমি থমকে যাও — এত কিছু: token, তাঁত, টেবিল, ফাইল, পাত, চিরকুট, দেয়াল, দালাল… মীরা হাসলেন। বললেন — আমিও একসময় এভাবে ভাবতাম। প্রতি মাসে নতুন tool, নতুন shortcut, নতুন flag — মুখস্থ করতাম আর হারিয়ে যেতাম। তারপর এক রাতে বসে নিজের একটা agent লিখলাম। বারো লাইন। সেই রাতের পর আর কোনো tool আমাকে হারাতে পারেনি।</div>
<div class="dialogue en">Mira says: You have visited twenty-seven masters and brought back one part from each. Now tell me — what is Claude Code, really? You hesitate — so much: tokens, the loom, the desk, the file, the plate, the chit, the wall, the runner… Mira laughs. I used to think like that. Every month a new tool, a new shortcut, a new flag — I memorised and got lost. Then one night I sat down and wrote my own agent. Twelve lines. After that night, no tool could lose me again.</div>

<p>তারপর তাঁর ভুলটাও বললেন, লুকালেন না। সেই প্রথম রাতের agent-এ কোনো দেয়াল ছিল না। Model একটা পরিষ্কার-করার command লিখল — ভুল folder-এ। সারা দিনের পরীক্ষার ফাইল উধাও। মীরা বললেন — সেদিন জরিনার কাঁটার (দরজা ১৭) মানে বুঝেছিলাম, শরীর দিয়ে। বারো লাইনের দুটো লাইন আমি সেই রাতের পর যোগ করেছি।</p>
<p class="en">She tells her mistake too, hiding nothing. That first-night agent had no wall. The model wrote a cleanup command — in the wrong folder. A day's experiment files gone. That day I understood Jorina's scale (Door 17) with my body. Two of the twelve lines I added after that night.</p>

<p>তিনি ল্যাপটপটা তোমার দিকে ঘোরালেন। পর্দায় বারোটা লাইন:</p>
<p class="en">She turns the laptop toward you. Twelve lines on the screen:</p>

<div class="code-block">def agent(prompt):
    messages = [{"role": "user", "content": prompt}]
    while True:
        r = client.messages.create(model=M, max_tokens=4096, system=SYSTEM, tools=TOOLS, messages=messages)
        messages.append({"role": "assistant", "content": r.content})
        if r.stop_reason != "tool_use":
            return r
        results = [{"type": "tool_result", "tool_use_id": b.id, "content": run_tool(b.name, b.input)} for b in r.content if b.type == "tool_use"]
        messages.append({"role": "user", "content": results})
def run_tool(name, args):
    if not allowed(name, args): return "ERROR: denied by policy. Choose another way."
    return IMPL[name](**args)</div>

<p>তুমি পড়ো, একবার, দুবার। তারপর হঠাৎ দেখতে পাও — প্রতিটা লাইনের পেছনে একজন ওস্তাদ দাঁড়িয়ে আছেন।</p>
<p class="en">You read it once, twice. Then suddenly you see — behind every line stands one of the masters.</p>

<table class="kv-table"><tr><th>লাইন · Line</th><th>ওস্তাদ · Master</th><th>যা শিখিয়েছেন</th></tr><tr><td class="hl">Glob · Grep · Read first</td><td>আমিন জহুরুল · ১</td><td>লেখার আগে পড়া — প্রথম tool call-গুলো হাঁটা</td></tr><tr><td class="hl">while True … until verified</td><td>মনির · ২</td><td>পানিতে না নামিয়ে loop থামে না</td></tr><tr><td class="hl">SYSTEM ← CLAUDE.md</td><td>আজিজ · ৩</td><td>রুট-খাতা প্রতি শিফটে system prompt-এ</td></tr><tr><td class="hl">allowed() + checkpoints</td><td>রোকসানা · ৪</td><td>কাটার আগে সম্মতি, পরে গণনা</td></tr><tr><td class="hl">prompt templates · skills</td><td>গোপাল · ৫</td><td>message আর SYSTEM-এ বসানো রেসিপি</td></tr><tr><td class="hl">TOOLS += MCP servers</td><td>জামাল · ৬</td><td>মানসম্মত সকেটে লাগানো বাড়তি tool</td></tr><tr><td class="hl">agent() without a keyboard</td><td>আলমগীর · ৭</td><td>একই loop, -p দিয়ে, অনেক হাঁড়িতে</td></tr><tr><td class="hl">the loop, shared as files</td><td>নিজাম স্যার · ৮</td><td>plugin-এ বাঁধা পুরো কারখানা</td></tr><tr><td class="hl">client.messages.create(...)</td><td>মুনশি আবদুল করিম · ৯</td><td>Model শুধু লেখে; এই call-ই তার একমাত্র কাজ</td></tr><tr><td class="hl">max_tokens, the bill</td><td>হারাধন বসাক · ১০</td><td>সবকিছু গোনা হয় টুকরোয়</td></tr><tr><td class="hl">r.content</td><td>রহমত আলী · ১১</td><td>উত্তর বোনা হয় এক সুতো করে, একটু অনিশ্চিত</td></tr><tr><td class="hl">why it writes tool_use well</td><td>মেহের আলী খান · ১২</td><td>চতুর্থ সবক — আসল কাজে RL</td></tr><tr><td class="hl">messages=messages</td><td>নুরুন্নাহার · ১৩</td><td>Model শুধু টেবিল দেখে</td></tr><tr><td class="hl">messages.append(...)</td><td>মতিন · ১৪</td><td>প্রতিবার পুরো ফাইল — কেউ মনে রাখে না</td></tr><tr><td class="hl">system=SYSTEM (cached)</td><td>ইউসুফ · ১৫</td><td>স্থির অংশ একবার ঢালো</td></tr><tr><td class="hl">tool_use → tool_result</td><td>শফিক · ১৬</td><td>চিরকুট যায়, থালা ফেরে user message হয়ে</td></tr><tr><td class="hl">if not allowed(...)</td><td>জরিনা · ১৭</td><td>দেয়াল এখানে, prompt-এ নয়</td></tr><tr><td class="hl">IMPL["agent"] → agent(task)</td><td>সিরাজ মিয়া · ১৮</td><td>Subagent = এই function নিজেকেই নতুন খাতায় ডাকে</td></tr><tr><td class="hl">client = your provider</td><td>ফাতেমা · ১৯</td><td>একই loop, কিনারায় adapter</td></tr><tr><td class="hl">base_url of client</td><td>হাবিবুর · ২০</td><td>ঠিকানা বদলায়, ইঞ্জিন নয়</td></tr><tr><td class="hl">"content": run_tool(...)</td><td>শিরিন · ২১</td><td>ফলাফল খবর, আদেশ নয়</td></tr><tr><td class="hl">around agent()</td><td>রেহানা · ২২</td><td>পুরো loop-কে ঘিরে eval শিট</td></tr><tr><td class="hl">every tool on earth</td><td>বাবুল · ২৩</td><td>সব ব্র্যান্ডের ভেতরে এই বারো লাইন</td></tr><tr><td class="hl">from claude_agent_sdk import query</td><td>আক্কাস আলী · ২৪</td><td>এই বারো লাইন, তৈরি অবস্থায়, তোমার গাড়িতে বসানো</td></tr><tr><td class="hl">thinking={...} in create()</td><td>নূর হোসেন · ২৫</td><td>কাটার আগে কতটা চক</td></tr><tr><td class="hl">SYSTEM and tool descriptions</td><td>সালেহা · ২৬</td><td>যা লেখা আছে, শুধু সেটাই আছে</td></tr><tr><td class="hl">model=M</td><td>মোস্তফা · ২৭</td><td>যার কাজ তার হাতে — আর দরকার হলে তবেই loop</td></tr></table>

<div class="diagram"><div class="diag-title">One prompt through the engine · এক prompt-এর পুরো সফর</div><svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg"><defs><marker id="d16a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#a5b4fc"/></marker><marker id="d16b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#ff6b35"/></marker></defs><rect class="node-moon" x="15" y="10" width="110" height="32" rx="8"/><text class="lbl-sm" x="70" y="30">YOU</text><rect class="node" x="175" y="10" width="140" height="32" rx="8"/><text class="lbl-sm" x="245" y="30">CLAUDE CODE</text><rect class="node-purple" x="360" y="10" width="120" height="32" rx="8"/><text class="lbl-sm" x="420" y="30">CLAUDE API</text><rect class="node-cyan" x="515" y="10" width="115" height="32" rx="8"/><text class="lbl-sm" x="572" y="30">YOUR MACHINE</text><line x1="70" y1="42" x2="70" y2="370" stroke="#5e5c74" stroke-dasharray="4 4"/><line x1="245" y1="42" x2="245" y2="370" stroke="#5e5c74" stroke-dasharray="4 4"/><line x1="420" y1="42" x2="420" y2="370" stroke="#5e5c74" stroke-dasharray="4 4"/><line x1="572" y1="42" x2="572" y2="370" stroke="#5e5c74" stroke-dasharray="4 4"/><line x1="72" y1="62" x2="241" y2="62" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="158" y="56">"fix the failing test"</text><rect class="node" x="140" y="72" width="210" height="22" rx="5"/><text class="lbl-sm" x="245" y="87">hooks · CLAUDE.md → system</text><line x1="247" y1="112" x2="416" y2="112" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="332" y="106">POST (cached prefix)</text><line x1="418" y1="140" x2="249" y2="140" stroke="#ff6b35" stroke-width="1.8" marker-end="url(#d16b)"/><text class="lbl-hot" x="332" y="134">tool_use: Bash pytest</text><rect class="node-hot" x="140" y="150" width="210" height="22" rx="5"/><text class="lbl-sm" x="245" y="165">allowed? · PreToolUse hook</text><line x1="247" y1="190" x2="568" y2="190" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="408" y="184">run pytest</text><line x1="570" y1="214" x2="249" y2="214" stroke="#3dd6c4" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-cyan" x="408" y="208">1 failed: Decimal vs float</text><line x1="247" y1="240" x2="416" y2="240" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="332" y="234">tool_result</text><line x1="418" y1="266" x2="249" y2="266" stroke="#ff6b35" stroke-width="1.8" marker-end="url(#d16b)"/><text class="lbl-hot" x="332" y="260">tool_use: Read, then Edit</text><rect class="node" x="140" y="276" width="210" height="22" rx="5"/><text class="lbl-sm" x="245" y="291">checkpoint · edit · format hook</text><line x1="247" y1="316" x2="568" y2="316" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="408" y="310">pytest → 142 passed</text><line x1="418" y1="342" x2="249" y2="342" stroke="#ff6b35" stroke-width="1.8" marker-end="url(#d16b)"/><text class="lbl-hot" x="332" y="336">end_turn: summary</text><line x1="243" y1="364" x2="74" y2="364" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#d16a)"/><text class="lbl-sm" x="158" y="358">the fix, explained</text></svg><div class="diag-cap">চিত্র: তোমার এক prompt — harness সাজায়, model চায়, harness যাচাই করে চালায়, ফল ফেরে, আবার… end_turn পর্যন্ত। · One prompt: assemble, ask, gate, run, return, repeat until end_turn.</div></div>

<p>এবার Book 59-এর সব বৈশিষ্ট্য এই যন্ত্রের গায়ে বসিয়ে দেখো। CLAUDE.md — system prompt-এর লেখা। Skills — system prompt-এ বর্ণনা, দরকারে tool দিয়ে পড়া বাকিটা। Slash command — তোমার message-এ বসানো prompt template। Permission আর hook — run_tool-এর আগে-পরে। Subagent — agent() নিজেকেই নতুন messages দিয়ে ডাকে। MCP — TOOLS তালিকায় বাইরের server-এর tool যোগ। /clear আর /compact — messages খালি বা সারাংশ। Checkpoint — edit-এর আগে file-এর কপি। Plan mode — edit tool সরিয়ে "শুধু plan দাও"। Headless -p — একই loop, UI ছাড়া। আর কিছু নেই।</p>
<p class="en">Now hang every Book 59 feature on this machine. CLAUDE.md — text in the system prompt. Skills — descriptions in the system prompt, bodies read via tools when needed. Slash commands — prompt templates in your message. Permissions and hooks — before and after run_tool. Subagents — agent() calling itself with fresh messages. MCP — outside servers' tools added to TOOLS. /clear and /compact — empty or summarise messages. Checkpoints — a copy of the file before an edit. Plan mode — edit tools removed, "plan only". Headless -p — the same loop without a UI. Nothing else.</p>

<p>আর কিছু ভুল হলে? মীরা বললেন — এখন তোমার আর অনুমান করতে হবে না। লক্ষণ দেখে জিজ্ঞেস করো: কোন লাইনটা ভাঙছে, কোন ওস্তাদের কাছে ফিরতে হবে।</p>
<p class="en">And when something goes wrong? Mira says: you no longer need to guess. From the symptom, ask which line is breaking and which master to go back to.</p>

<table class="kv-table"><tr><th>লক্ষণ · Symptom</th><th>কোন লাইন · Line</th><th>সমাধান · Fix (দরজা)</th></tr><tr><td>Session-এর মাঝে নিয়ম ভুলে যায়</td><td class="hl">messages= (ভরা টেবিল)</td><td>/clear, ছোট CLAUDE.md, নিয়ম hook-এ (১৩, ১৭)</td></tr><tr><td>আত্মবিশ্বাসের সঙ্গে ভুল API ব্যবহার করে</td><td class="hl">model-এর পুরনো জ্ঞান</td><td>docs দাও MCP/WebFetch/skill দিয়ে; version বেঁধে দাও (১২, ১৪)</td></tr><tr><td>একই fix-এ ঘুরপাক খায়</td><td class="hl">loop-এ নতুন তথ্য ঢুকছে না</td><td>থামাও, log/repro দাও, বা নতুন prompt-সহ /clear (১১, ২৬)</td></tr><tr><td>"Test pass" কিন্তু feature ভুল</td><td class="hl">run_tool-এর যাচাই দুর্বল</td><td>শক্ত test, আসল জিনিস চালাও, স্বাধীন reviewer subagent (১৮, ২২)</td></tr><tr><td>অতিরিক্ত জটিল বানায়</td><td class="hl">SYSTEM অস্পষ্ট</td><td>কী করবে না বলো, সরল উদাহরণ দেখাও (২৬)</td></tr><tr><td>ভুল file বা জায়গায় edit</td><td class="hl">tool_use-এর input দ্ব্যর্থক</td><td>@file, সঠিক path, অনন্য context (১৬)</td></tr><tr><td>Claude-এ ভালো, অন্য provider-এ খারাপ</td><td class="hl">client = অন্য model</td><td>provider অনুযায়ী prompt, কম আর সরল tool, eval (১৯, ২২)</td></tr><tr><td>খরচ হঠাৎ বেড়ে যায়</td><td class="hl">messages + TOOLS + model</td><td>output কাটো, MCP ছাঁটো, caching, সস্তা subagent, effort কমাও (১৫, ২৫, ২৭)</td></tr><tr><td>বাইরের লেখা পড়ে অদ্ভুত কাজ চায়</td><td class="hl">tool_result = আদেশ ভাবা</td><td>দেয়াল, তিন পায়ের একটা কাটো (১৭, ২১)</td></tr></table>

<div class="callout tip"><span class="co-icon">🛠️</span><div><strong>এখন নিজে বানাও:</strong> এই বইয়ের folder-এ আছে <a href="minicc.py" download style="color:var(--teal)">minicc.py</a> — ~২৫০ লাইনের একটা provider-নিরপেক্ষ coding agent: ছয়টা tool (read, write, edit, bash, glob, grep), permission-এর দেয়াল, CLAUDE.md/AGENTS.md memory, compaction, headless -p, Anthropic আর OpenAI-compatible adapter। একটা নকল model দিয়ে পরীক্ষা করা। চালাও একটা sandbox repo-তে:<br><code>pip install anthropic openai · python minicc.py · python minicc.py --provider openai --base-url http://localhost:11434/v1 --model qwen2.5-coder</code><br>তারপর তিনটা বাড়াও: সিরাজ মিয়ার delegate() subagent, জরিনার hook, আর plan mode।<br><em>Build it: minicc.py is in this folder — six tools, a permission wall, memory, compaction, headless mode, two provider adapters. Then add a subagent, a hook, and plan mode.</em></div></div>

<div class="dialogue">মীরা চায়ের কাপ তুলে একে একে সবার নাম বললেন। প্রথম আটজন তোমাকে চালাতে শিখিয়েছিলেন — জহুরুলের হাঁটা হলো প্রথম কয়েকটা Read, মনিরের পানি-পরীক্ষা হলো loop-এর থামার শর্ত, আজিজের খাতা বসে SYSTEM-এ, রোকসানার গণনা run_tool-এর দরজায়, গোপালের কার্ড তোমার message-এ, জামালের সকেট TOOLS তালিকায়, আলমগীরের হাঁড়ি এই loop-ই কিবোর্ড ছাড়া, আর নিজাম স্যারের সিলেবাস এই সবকিছু file হিসেবে টিমের হাতে। তারপর মুনশি বলেছিলেন model শুধু লেখে — কিন্তু আমি বলি, সেই লেখাটাই একটা function call। হারাধন বলেছিলেন টুকরো গোনো — আমি বলি, সেই গোনাই max_tokens আর বিল। রহমত আলী বলেছিলেন এক সুতো করে — আমি বলি, সেই সুতোর শেষে stop_reason। মেহের আলী খান চার সবক দিয়েছিলেন — আমি বলি, চতুর্থ সবকের জন্যই এই loop কাজ করে। নুরুন্নাহারের টেবিল, মতিনের ফাইল, ইউসুফের পাত — তিনজন মিলে একটা messages তালিকা। শফিকের চিরকুট তার ভেতরের সবচেয়ে প্রাণবন্ত পাতা। জরিনা আর শিরিন পাহারা দেন run_tool-এর দরজা। সিরাজ মিয়ার দালাল এই function-ই, নতুন খাতায়। ফাতেমা আর হাবিবুর ঠিক করেন খাম কোন ভাষায়, কোন বস্তায়। রেহানা পুরো যন্ত্রকে ঘিরে চেখে দেখেন। আক্কাস আলী বলেছিলেন ইঞ্জিন কিনে বসাও — আমি বলি, কেনার আগে একবার নিজে বানাও, তাহলেই বুঝবে কী কিনছ। নূর হোসেন ঠিক করেন কতটা চক, সালেহা লেখেন কী প্রশ্ন, মোস্তফা বাছেন কোন শ্রমিক — তিনজনই বসেন এই create() call-এর parameter-এ। আর বাবুল জানেন — পৃথিবীর প্রতিটা agent-এর পেটে এই বারোটা লাইন।</div>
<div class="dialogue en">Raising her tea, Mira names them one by one. The first eight taught you to drive — Zahurul's walk is the first few Reads, Monir's water test is the loop's stopping condition, Aziz's book sits in SYSTEM, Roksana's count at run_tool's door, Gopal's cards in your message, Jamal's socket in the TOOLS list, Alamgir's pots are this loop without a keyboard, and Nizam Sir's syllabus puts all of it in the team's hands as files. Then the munshi said the model only writes — and I say that writing is a function call. Haradhan said count the pieces — I say that counting is max_tokens and the bill. Rahmat Ali said one thread at a time — I say at the end of the thread is stop_reason. Meher Ali Khan gave four lessons — I say this loop works because of the fourth. Nurunnahar's desk, Matin's file, Yusuf's plate — together, one messages list. Shafiq's chit is its liveliest page. Jorina and Shirin guard run_tool's door. Siraj Mia's runner is this very function, with a fresh ledger. Fatema and Habibur decide which language the envelope speaks and which bag it goes in. Rehana tastes the whole machine from outside. Akkas Ali said buy the engine and fit it — I say build it once yourself, and you will know what you are buying. Nur Hossain decides how much chalk, Saleha writes the question, Mostafa picks the worker — all three live in the parameters of this create() call. And Babul knows — in the belly of every agent on earth are these twelve lines.</div>

<p class="verse">রাত গভীর হলে মীরা বললেন — আমার মা প্রতি রাতে ঘুমানোর আগে সূরা মুলক পড়তেন। একটা আয়াতে এসে আমি সবসময় থামতাম: "তুমি আবার দৃষ্টি ফেরাও, কোনো ফাটল দেখতে পাও কি? তারপর আবার দৃষ্টি ফেরাও, বারবার — দৃষ্টি তোমার কাছে ফিরে আসবে ক্লান্ত ও ব্যর্থ হয়ে" (৬৭:৩–৪, ভাবানুবাদ)। আল্লাহর সৃষ্টিতে ফাটল খুঁজে পাওয়া যায় না — সেটাই আয়াতের কথা। আমাদের নিজের হাতের কাজে ঠিক উল্টো: ফাটল থাকে, তাই দেখো, পরীক্ষা করো, আবার দেখো। Agent-এর loop সেই বিনয়ের যন্ত্র — একবার দেখে থামে না।</p>
<p class="en">Deep in the night Mira says: My mother recited Surah al-Mulk every night before sleep. I always paused at one verse: "So return your vision to the sky; do you see any breaks? Then return your vision twice again. Your vision will return to you humbled while it is fatigued" (67:3–4, Sahih International). In Allah's creation no flaw can be found — that is the verse's point. In the work of our own hands it is the reverse: flaws are there, so look, test, look again. The agent loop is a machine of that humility — it does not stop after one look.</p>

<div class="secret-box"><div class="label">শেষ দরজা — তালিসমান</div><div class="text">⚙️ Claude Code = system prompt + tools + একটা loop — বাকি সবই এই বারো লাইনের অলংকার।<br><small>Model লেখে, harness করে, context-ই সব। Tool আগামী মাসে বদলাবে; loop বদলাবে না — আর তুমি loop শিখেছ।</small></div></div>`,
  senior: {
    title: "Your next 30 days",
    body: `<p><strong>Week 1:</strong> run minicc.py on a sandbox repo with Claude; read every tool call it prints.</p>
<p><strong>Week 2:</strong> add delegate() (subagent), a pre-tool hook, and plan mode; run it on a local model through the OpenAI-compatible adapter.</p>
<p><strong>Week 3:</strong> build the Door 22 eval sheet from ten real tasks; compare Claude Code, minicc-on-Claude and minicc-on-local.</p>
<p><strong>Week 4:</strong> pick one real workflow at work (for example a LedgerPilot integration check) and ship it — with the Claude Agent SDK if you want Claude Code's harness as a library, or minicc if you need provider neutrality.</p>
<p>তারপর যেকোনো নতুন tool এলে: আটটা প্রশ্ন, একদিনের drill, eval শিট।</p>`
  }
});
