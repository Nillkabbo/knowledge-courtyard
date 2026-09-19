// ════════════════════════════════════════
// Book 62 · The Twelve-Line Engine
// DOORS 13–16 · How the harness talks to the model
// ════════════════════════════════════════


// ── DOOR 13 · পেশকারের টেবিল — The Clerk's Desk ──
doors.push({
  num: 13,
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

<div class="secret-box"><div class="label">দরজা ১৩ — তালিসমান</div><div class="text">🗂️ Model শুধু টেবিলে যা আছে তা-ই দেখে — টেবিল সাজানোই আসল কাজ।<br><small>এই টেবিলের নাম <strong>context window</strong>, আর সাজানোর শিল্পের নাম <strong>context engineering</strong>।</small></div></div>`,
  senior: {
    title: "Quick Guide — The Context Window",
    body: `<p><strong>Contents:</strong> system prompt · tool schemas (built-in + MCP) · CLAUDE.md · conversation · tool results · room for the reply.</p>
<p><strong>Rules of thumb:</strong> one task per context; /clear between unrelated tasks; /compact with a focus when mid-task; send big searches to subagents; disconnect unused MCP servers; read excerpts, not whole files.</p>
<p><strong>Why quality drops:</strong> irrelevant tokens compete for attention; stale exhibits get reused as if current.</p>
<p>পরের দরজা দেখাবে এই টেবিল প্রতিবার কীভাবে পুরোটা আবার পাঠানো হয় — আর কেন।</p>`
  }
});


// ── DOOR 14 · ওয়ার্ড-বয়ের ফাইল — The Ward-Boy's File ──
doors.push({
  num: 14,
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

<div class="secret-box"><div class="label">দরজা ১৪ — তালিসমান</div><div class="text">📁 API কিছুই মনে রাখে না — প্রতিবার পুরো ফাইল হাতে নিয়ে যাও।<br><small>এর নাম <strong>stateless Messages API</strong>: system + tools + পুরো messages তালিকা প্রতিটা call-এ; উত্তরে content blocks আর <strong>stop_reason</strong>।</small></div></div>`,
  senior: {
    title: "Quick Guide — The Messages API",
    body: `<p><strong>Endpoint:</strong> POST /v1/messages with headers x-api-key and anthropic-version. Body: model, max_tokens, system, messages, optional tools.</p>
<p><strong>Stateless:</strong> conversation memory = the messages list you resend. Every chat product, including Claude Code, works this way.</p>
<p><strong>Content blocks:</strong> text, image, document, tool_use, tool_result, thinking. <strong>stop_reason:</strong> end_turn, tool_use, max_tokens, stop_sequence, and a few newer values — read the docs for your model.</p>
<p>তোমার কাজে: API দিয়ে নিজের কিছু বানালে history তুমিই রাখবে — Django-তে একটা table-এ, বা Redis-এ। আর প্রতি turn-এ input token বাড়তে দেখবে।</p>`
  }
});


// ── DOOR 15 · সীসার পাত — The Lead Plate ──
doors.push({
  num: 15,
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

<div class="secret-box"><div class="label">দরজা ১৫ — তালিসমান</div><div class="text">🪙 যা প্রতিবার একই, তা একবার ঢালো — শুরুটা বদলালে পুরো পাত নতুন করে ঢালতে হয়।<br><small>এর নাম <strong>prompt caching</strong>: cache_control, exact-prefix match, TTL, cache write বনাম cache read।</small></div></div>`,
  senior: {
    title: "Quick Guide — Prompt Caching",
    body: `<p><strong>What:</strong> mark a stable prefix (tools → system → early messages) with cache_control; repeated calls reuse it.</p>
<p><strong>Economics:</strong> cache writes cost a premium over normal input; cache reads cost roughly 10% and cut latency. Exact figures and minimum cacheable lengths vary by model — check the pricing page.</p>
<p><strong>Rules:</strong> exact prefix match; anything changed early invalidates what follows; short default TTL refreshed on use, longer TTL available.</p>
<p>নিজের agent বানালে (দরজা ২৮): system prompt-এ cache_control দিলে লম্বা session-এর খরচ অনেক কমে যায় — minicc ঠিক এটাই করে।</p>`
  }
});


// ── DOOR 16 · বেয়ারার চিরকুট — The Waiter's Chit ──
doors.push({
  num: 16,
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

<div class="secret-box"><div class="label">দরজা ১৬ — তালিসমান</div><div class="text">🧾 Model চিরকুট লেখে, রান্নাঘর রাঁধে — থালা ফিরে আসে নতুন context হয়ে।<br><small>এর নাম <strong>tool use</strong>: tool definition (JSON Schema) → tool_use block → harness runs → tool_result (user role, same id) → next call।</small></div></div>`,
  senior: {
    title: "Quick Guide — Tool Use",
    body: `<p><strong>Define:</strong> name, description (write it for the model: what, when, what inputs mean), input_schema.</p>
<p><strong>Round trip:</strong> response with stop_reason tool_use → run each tool_use block → reply with tool_result blocks (matching tool_use_id) in one user message → call again.</p>
<p><strong>Errors:</strong> return them as results with is_error, never crash the loop. <strong>Parallel:</strong> return all results together.</p>
<p><strong>Client vs server tools:</strong> you run client tools (Claude Code's Read/Edit/Bash); Anthropic runs server tools such as web search. Book 19 goes deeper into tool design and MCP.</p>`
  }
});
