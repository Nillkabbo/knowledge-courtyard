// ════════════════════════════════════════
// যুক্তির তাঁত — DOORS 1-5
// The Loom of Reason: Mental Models → Bayesian Thinking
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: THE LATTICEWORK OF MENTAL MODELS ══
doors.push({
  num:1, icon:"🪡", color:"#6366f1", name:"তাঁতির তাঁত",
  subtitle:"The Loom of Looms", tech:"Munger's Latticework of Mental Models",
  spirit:"হিকমাহ — প্রয়োগকৃত জ্ঞান, একাধিক চোখে দেখা",
  secret:"একটা হাতিয়ার থাকলে তুমি পেরেকের মতো ভাববে। দশটা হাতিয়ার থাকলে তুমি কারিগর। কিন্তু সবচেয়ে গুরুত্বপূর্ণ কথা — মানচিত্র ভূমি নয়। প্রতিটা মডেল ভুল, কিন্তু কিছু মডেল কাজে লাগে। তোমার কাজ হলো একটা সূত্র নয় — একটা তাঁত বানানো, যেখানে অনেক সূত্র একসাথে কাজ করে। এটাই হিকমাহ।",
  recall:{
    q:"জাকিরা কেন বললেন একটা সূত্র দিয়ে সব সমস্যা সমাধান করা যায় না?",
    qen:"Why did Zakira say one thread cannot weave every cloth?",
    a:"কারণ প্রতিটা সমস্যার নিজস্ব গঠন। একটা মডেল একটা চোখ — সে একটা দিক দেখে, বাকিগুলো অন্ধকার রাখে। যার একটাই মডেল সে সবকিছু সেই এক দিক দিয়ে দেখে, আর যা দেখতে পায় না তা অস্বীকার করে। ম্যাঞ্জার একে বলেছেন 'এক হাতুড়িওয়ালা মানুষ' — যার কাছে সবকিছু পেরেক। হিকমাহ হলো অনেক চোখ থাকা, আর জানা কোন চোখ কখন লাগবে।",
    aen:"Because every problem has its own structure. A model is one eye — it sees one side, leaves the rest in darkness. One who has only one model sees everything through that one side, and denies what it cannot see. Munger called this the 'man with a hammer' — to whom everything is a nail. Hikmah is having many eyes, and knowing which eye to use when."
  },
  story:`
<p class="scene-setting">প্রথম দরজা। তুমি ভেবেছিলে একটা কারখানা হবে, বা একটা বিশাল গ্রন্থাগার। কিন্তু সামনে একটা উঠোন — ছাদের নিচে একটা বিশাল কাঠের তাঁত। তাঁতের চারপাশে তাক লাগানো — তাকে তাকে রাঙা সূত্রের রিল, প্রতিটা রিলে আলাদা রঙ — গাঢ় নীল, সবুজ, মেরুন, সোনালি, কালো। তাঁতি জাকিরা সেই তাঁতের সামনে বসে আছেন — বয়স্কা, চোখে সূক্ষ্ম দৃষ্টি, আঙুলে কালির দাগ (দশ বছর ধরে সূত্র রাঙানোর চিহ্ন)। গন্ধ — রাঙা সূত্রের রাসায়নিক ঝাঁঝ, পুরনো কাঠের গন্ধ, আর তুলোর উষ্ণ ভাব। শব্দ — তাঁতের পাতার ঠক-ঠক শব্দ, জাকিরার নিঃশ্বাস, বাইরে থেকে কোনো একটা পাখির ডাক।</p>
<p class="scene-setting en">The first door. You expected a factory, or a vast library. But before you: a courtyard — under the roof, a vast wooden loom. Around the loom, shelves — each shelf spools of dyed thread, each spool a different color — deep blue, green, maroon, gold, black. Weaver Zakira sits before that loom — elderly, sharp eyes, ink stains on her fingertips (the mark of ten years dyeing thread). Smell — the chemical sharpness of dye, old wood, warm cotton. Sound — the clack-clack of the loom's shuttle, Zakira's breath, a bird calling somewhere outside.</p>

<div class="dialogue">জাকিরা তোমাকে দেখলেন। হাসলেন না, কিন্তু চোখ কোমল হলো। "বসো।" তুমি বসলে। মেঝেতে, তাঁতের পাশে। "কেন এসেছ?" তুমি বললে — "আমি ভালো কারিগর। কিন্তু মাঝে মাঝে মনে হয় আমি একই ভুল বারবার করছি। একই সমস্যা, একই সমাধান — কিন্তু ফল আসে না।" জাকিরা একটু থামলেন। তারপর তাঁর কাছে থাকা একটা ছোট্ট কাঠের বাক্স খুললেন। ভেতরে — একটা হাতুড়ি। শুধু একটা হাতুড়ি।</div>
<div class="dialogue en">Zakira saw you. She didn't smile, but her eyes softened. "Sit." You sat. On the floor, beside the loom. "Why have you come?" You said — "I am a good craftsperson. But sometimes I feel I'm making the same mistake again and again. Same problem, same solution — but no result." Zakira paused. Then she opened a small wooden box beside her. Inside — one hammer. Just a hammer.</div>

<div class="dialogue">"এই হাতুড়িটা নাও," জাকিরা বললেন। তুমি হাতুড়িটা হাতে নিলে। "ওজন কেমন?" তুমি বললে — "ভারী। শক্ত লাগে।" জাকিরা ঘাড় নাড়লেন। "এই হাতুড়ি দিয়ে এখন এই তাঁত ঠিক করো।" তুমি তাকালে তাঁতের দিকে — একটা সূত্র ছিঁড়ে গেছে, সেটা জোড়া লাগাতে হবে। তুমি হাতুড়ি দিয়ে সূত্র ধরতে গেলে। সূত্রটা ভেঙে গেল। আরও একটু চেষ্টা — সেটাও ভাঙল। তৃতীয়বার — হাতুড়ি পাল্লায় লেগে তাঁতের কাঠে আঘাত করল, কাঠ ফাটল।</div>
<div class="dialogue en">"Take this hammer," Zakira said. You took it. "How does it feel?" You said — "Heavy. Solid." Zakira nodded. "Now use this hammer to fix this loom." You looked — one thread is broken, it must be rejoined. You reached for the thread with the hammer. The thread snapped. You tried again — snapped again. A third time — the hammer struck the loom's frame, the wood cracked.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> হাতুড়ি দিয়ে সূত্র জোড়া লাগানো যায় না। হাতুড়ির কাজ হলো পেরেক ঠোকা — সূত্র জোড়া দেওয়া নয়। কিন্তু তোমার কাছে শুধু হাতুড়ি আছে, তাই তুমি সবকিছু পেরেক ভাবো।</div></div>

<div class="dialogue">জাকিরা আস্তে বললেন: "চার্লি ম্যাঞ্জার — ওয়ারেন বাফেটের সঙ্গী — একটা কথা বলেছেন। ইংরেজিতে একটা প্রবাদ আছে: <em>'To a man with a hammer, everything looks like a nail.'</em> যার হাতে শুধু হাতুড়ি, সে সবকিছুকে পেরেক বলে ভাবে। তুমি এইমাত্র সেটা নিজে দেখলে — হাতুড়ি দিয়ে সূত্র ধরতে গিয়ে ভাঙলে। কিন্তু সমস্যা হাতুড়ির নয়। সমস্যা হলো তোমার কাছে হাতুড়ি ছাড়া আর কিছু নেই।"</div>
<div class="dialogue en">Zakira said softly: "Charlie Munger — Warren Buffett's partner — said something. There's an English proverb: <em>'To a man with a hammer, everything looks like a nail.'</em> One who has only a hammer thinks everything is a nail. You just saw it yourself — reaching for thread with a hammer, you broke it. But the problem isn't the hammer. The problem is you have nothing besides the hammer."</div>

<div class="dialogue">জাকিরা উঠে দাঁড়ালেন। তাকের দিকে গেলেন। একটা রিল নামালেন — গাঢ় নীল। "এই সূত্রটা দিয়ে জোড়া দাও।" তুমি নীল সূত্র দিয়ে ভাঙা জায়গাটা জোড়া দিলে। কাজ হলো। জাকিরা বললেন: "এখন আরেকটা সমস্যা। এই তাঁতের কাঠ ফেটেছে — হাতুড়ির আঘাতে। এবার কী লাগবে?" তুমি ভাবলে। একটা আঠা? একটা কাঠের টুকরো? জাকিরা একটা ছোট্ট বোতল এগিয়ে দিলেন — কাঠের আঠা। "হাতুড়ি এখানে কাজে লাগবে — কিন্তু শুধু পেরেক ঠোকার জন্য। আঠা আলাদা। সূত্র আলাদা। প্রতিটা কাজের নিজস্ব হাতিয়ার।"</div>
<div class="dialogue en">Zakira stood. Walked to the shelves. Took down a spool — deep blue. "Mend it with this thread." You mended the break with the blue thread. It worked. Zakira said: "Now another problem. The loom's wood has cracked — from the hammer's blow. What's needed now?" You thought. Glue? A piece of wood? Zakira handed you a small bottle — wood glue. "The hammer is useful here — but only to drive a peg. Glue is different. Thread is different. Every task has its own tool."</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১</div><div class="sc-label">এক হাতিয়ার → সব কিছু পেরেক</div></div>
<div class="stat-card"><div class="sc-num">৩-৪</div><div class="sc-label">কয়েকটা হাতিয়ার → কিছু কিছু মিলবে</div></div>
<div class="stat-card"><div class="sc-num">~১০০</div><div class="sc-label">ম্যাঞ্জারের ল্যাটিসওয়ার্ক → বড় সিদ্ধান্তে সুবিধা</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">শেখা শেষ নেই</div></div>
</div>

<div class="dialogue">"ম্যাঞ্জার বলেছিলেন," জাকিরা আবার বসলেন, "যে একজন মানুষ যদি শুধু একটা বিষয়ে দক্ষ হয় — শুধু অ্যাকাউন্টিং, বা শুধু ইঞ্জিনিয়ারিং, বা শুধু মার্কেটিং — সে একটা হাতুড়িওয়ালা। সে সব সমস্যা নিজের এক লেন্স দিয়ে দেখে। কিন্তু যে ব্যক্তি অনেকগুলো ডিসিপ্লিনের বেসিক মডেল জানে — সে একটা ল্যাটিসওয়ার্ক বানায়। একটা জাল। যে জালে অনেক গাঁথুনি আছে। সে যখন কোনো সমস্যা দেখে, সে ভাবে — 'এটা কি অর্থনীতির সমস্যা? মনোবিজ্ঞানের? ফিজিক্সের? জীববিজ্ঞানের?' — আর যেটা ফিট করে, সেই মডেলটা টানে।" জাকিরা হাত দিয়ে দেখালেন — তাঁর আঙুল বাতাসে একটা জাল আঁকল।</div>
<div class="dialogue en">"Munger said," Zakira sat again, "that if a person is expert in only one field — only accounting, or only engineering, or only marketing — he is a man with a hammer. He sees every problem through his one lens. But one who knows the basic models of many disciplines — he builds a latticework. A mesh. With many junctions. When he sees a problem, he thinks — 'Is this an economics problem? Psychology? Physics? Biology?' — and pulls the model that fits." Zakira gestured — her fingers drew a mesh in the air.</div>

<div class="kv-table"><tr><th>মডেল</th><th>কোথা থেকে</th><th>কী দেখায়</th></tr>
<tr><td class="hl">অপর্টিউনিটি কস্ট</td><td>অর্থনীতি</td><td>একটা হ্যাঁ মানে অন্য না-গুলো</td></tr>
<tr><td class="hl">কমন-কার্স ট্র্যাজেডি</td><td>অর্থনীতি</td><td>সবার ভালো vs সবার খারাপ</td></tr>
<tr><td class="hl">প্রতিক্রিয়াশীলতা</td><td>মনোবিজ্ঞান</td><td>কীভাবে উদ্দীপনা আচরণ চালায়</td></tr>
<tr><td class="hl">সারভাইভারশিপ বায়াস</td><td>পরিসংখ্যান</td><td>বিজয়ীদের দৃশ্যমানতা</td></tr>
<tr><td class="hl">এন্ট্রপি</td><td>পদার্থবিজ্ঞান</td><td>বিশৃঙ্খলা স্বাভাবিকে বাড়ে</td></tr>
<tr><td class="hl">প্রতিক্রিয়া লুপ</td><td>সিস্টেম</td><td>কারণ ফল আবার কারণ হয়</td></tr>
<tr><td class="hl">প্রথম নীতি</td><td>পদার্থবিজ্ঞান/দর্শন</td><td>ভিত্তিতে নেমে ভাবা</td></tr>
</table>

<div class="dialogue">"বই ২১ (গবেষকের মন) তোমাকে একটা দরজা দেখিয়েছিল — সমালোচনামূলক চিন্তা।" জাকিরা বললেন। "কিন্তু সেই একটা দরজা। এই বই সেই একটা দরজাকে দশটা দরজায় খুলে দেবে। আর বই ২৪ (সিংহাসন) তোমাকে দেখিয়েছে কীভাবে তোমার মন তোমাকে ধোঁকা দেয় — পক্ষপাতিতা। সেটা ছিল প্রতিরোধ। এই বই হলো আক্রমণ — চিন্তার হাতিয়ার, যেগুলো তুমি সচেতনভাবে ব্যবহার করবে। রক্ষা এক, তীক্ষ্ণতা আরেক।"</div>
<div class="dialogue en">"Book 21 (The Researcher's Mind) showed you one door — critical thinking." Zakira said. "But that was one door. This book opens that one door into ten. And Book 24 (Throne of the Mind) showed you how your mind deceives you — bias. That was defense. This book is offense — the tools of thought you will use deliberately. Defense is one thing, sharpness is another."</div>

<div class="callout tip"><span class="co-icon">🗺️</span><div><strong>মানচিত্র ভূমি নয়:</strong> জাকিরা বললেন — মডেল একটা মানচিত্র। মানচিত্র কখনো ভূমির সমান হয় না। মানচিত্র ছোট, সরল, ভুল — কিন্তু কাজে লাগে। কারণ সে একটা নির্দিষ্ট উদ্দেশ্যে বানানো। দার্শনিক আলফ্রেড কোরজিবস্কি (১৯৩৩) বলেছিলেন: <em>"The map is not the territory."</em> মডেল ভুল — কিন্তু কিছু মডেল কাজে লাগে। তোমার কাজ হলো সঠিক মডেল নয় খোঁজা — কাজে লাগে এমন মডেল খোঁজা, আর জানা কখন সেটা কাজে লাগে না।</div></div>

<div class="dialogue">"এখন শোনো," জাকিরা তাঁতের দিকে তাকালেন। "তোমাকে আমি একটা খালি তাঁত দিচ্ছি।" তিনি তাঁতের পাটাতন থেকে সব সূত্র সরিয়ে ফেললেন — এখন শুধু ফাঁকা কাঠের ফ্রেম। "পরের নয়টা দরজায় তুমি এক এক করে নয়টা সূত্র সংগ্রহ করবে। যুক্তির সূত্র। ভ্রষ্টাচারের সূত্র। সম্ভাবনার সূত্র। মূলসূত্রের সূত্র। সমাধানের সূত্র। আন্দাজের সূত্র। সিদ্ধান্তের সূত্র। দ্বিতীয়-স্তরের সূত্র। দশম দরজায় আমি ফিরব — আর তোমাকে দেখাব কীভাবে এই নয়টা সূত্র এক কাপড়ে বোনা যায়। যে কাপড়ের নাম — সুচিন্তিত জীবন।"</div>
<div class="dialogue en">"Now listen," Zakira looked at the loom. "I'm giving you an empty loom." She cleared all the threads from the loom's frame — now just an empty wooden frame. "In the next nine doors you'll collect nine threads, one by one. The thread of logic. The thread of fallacies. The thread of probability. The thread of first principles. The thread of problem-solving. The thread of estimation. The thread of decision. The thread of second-order thinking. In the tenth door I'll return — and show you how all nine threads weave into one cloth. The name of that cloth — a deliberate life."</div>

<div class="dialogue">তুমি জিজ্ঞেস করলে — "কিন্তু এত মডেল আমি মনে রাখব কীভাবে?" জাকিরা হাসলেন। প্রথমবার। "মনে রাখার দরকার নেই। তাঁতি কখনো সূত্র গুনে রাখে না। সে শুধু জানে — এই রঙের সূত্র এখানে যাবে, ওই রঙের ওখানে। তুমি প্রতিদিন একটা করে মডেল ব্যবহার করো — কোড রিভিউতে, সিদ্ধান্ত নেওয়ার সময়, কারও যুক্তি শুনে। এক সপ্তাহে তুমি আবিষ্কার করবে কোনটা কখন কাজে লাগে। আর এক মাসে তুমি আর মডেল গুনবে না — তুমি শুধু দেখবে।"</div>
<div class="dialogue en">You asked — "But how will I remember so many models?" Zakira smiled. For the first time. "You don't need to remember. A weaver never counts threads. She just knows — this color goes here, that color there. Use one model a day — in code review, when deciding, when hearing someone's argument. In a week you'll discover which works when. In a month you won't count models anymore — you'll just see."</div>

<div class="dialogue">হিকমাহ। কুরআনে আল্লাহ বলেন: <em>"যাকে হিকমাহ দেওয়া হয়েছে, তাকে প্রভুত কল্যাণ দেওয়া হয়েছে।"</em> (২:২৬৯) হিকমাহ শুধু জ্ঞান নয়। হিকমাহ হলো জ্ঞান প্রয়োগ করা — সঠিক সময়ে, সঠিক জায়গায়, সঠিক পরিমাণে। একটা মডেল জানা জ্ঞান। দশটা মডেল জানা আরও জ্ঞান। কিন্তু কোনটা কখন ব্যবহার করতে হবে সেটা জানা — সেটাই হিকমাহ। জাকিরা জানেন কোন সূত্র কোথায় যাবে — তাই তাঁর হাতে হিকমাহ। তোমার লক্ষ্য একটা মডেল নয় — একটা হিকমাহ।</div>
<div class="dialogue en">Hikmah. In the Quran Allah says: <em>"Whoever is given hikmah has been given much good."</em> (2:269) Hikmah is not just knowledge. Hikmah is applying knowledge — at the right time, in the right place, in the right amount. Knowing one model is knowledge. Knowing ten models is more knowledge. But knowing which to use when — that is hikmah. Zakira knows which thread goes where — so she has hikmah. Your goal is not a model — it is hikmah.</div>

<div class="secret-box">🪡 একটা হাতিয়ার নয়, একটা তাঁত বানাও। মডেল হলো মানচিত্র — ভুল কিন্তু কাজে লাগে। যে জানে কোনটা কখন টানতে হবে, তার কাছে হিকমাহ। আজ থেকে একটা প্রশ্ন করো: <em>"এটা কি আমার একমাত্র হাতিয়ার দিয়ে সমাধান করার চেষ্টা করছি?"</em></div>`
});

// ══ DOOR 2: LOGIC & THE STRUCTURE OF ARGUMENT ══
doors.push({
  num:2, icon:"📐", color:"#818cf8", name:"ছুতারের জোড়",
  subtitle:"The Carpenter's Joint", tech:"Deduction, Induction, Abduction & Argument Validity",
  spirit:"আদল — একটা জিনিসের গঠন যাচাই করা",
  secret:"যুক্তি হলো কাঠের জোড়। মর্টিস-টেনন জয়েন্ট — একটা কাঠে গর্ত, আরেকটা কাঠে খুঁটি, খুঁটি গর্তে ঢুকে যায়। ভালো যুক্তি ধরে রাখে। খারাপ যুক্তি ভেঙে যায়। কিন্তু জোড় ভালো হলেও কাঠ পচা হলে কাজ হবে না — সেটাই সাউন্ডনেস। আর জোড়টাই যদি ভুল হয় — সেটাই ইনভ্যালিডিটি। এই দুটো আলাদা ভুল, দুটো আলাদা কারিগরি।",
  recall:{
    q:"ইউসুফ কেন বললেন 'বৈধ' আর 'সত্য' আলাদা জিনিস?",
    qen:"Why did Yusuf say 'valid' and 'true' are different things?",
    a:"কারণ একটা যুক্তি বৈধ হতে পারে (গঠন ঠিক — জোড় মজবুত) কিন্তু তার প্রিমিস মিথ্যা হতে পারে (কাঠ পচা)। আবার প্রিমিস সত্য হতে পারে কিন্তু গঠন ভুল হতে পারে (জোড় দুর্বল)। যুক্তি তখনই সাউন্ড যখন দুটোই ঠিক — গঠন বৈধ আর প্রিমিস সত্য। এই পার্থক্য না বুঝলে তুমি মজবুত-দেখানো কিন্তু ভেতরে পচা যুক্তি ধরে ফেলবে না।",
    aen:"Because an argument can be valid (structure correct — joint strong) but its premises can be false (wood rotten). Or premises can be true but structure wrong (joint weak). An argument is sound only when both are right — valid structure and true premises. Without this distinction, you won't catch arguments that look strong but are rotten inside."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দরজা। একটা ছুতারের কারখানা। দেয়ালে ঝোলানো — হাতুড়ি, ছুঁড়ি, রেত, বাটালি। মাঝখানে একটা বিশাল কাঠের বেঞ্চ। তার উপর অসমাপ্ত একটা দরজা — হ্যাঁ, সত্যিকারের কাঠের দরজা। ছুতার ইউসুফ দাঁড়িয়ে আছেন — লম্বা, হাড়োয়ারি চেহারা, দাড়িতে কাঠের গুঁড়ো লেগে (তাঁর সিগনেচার)। হাতে একটা রেত আর একটা ছুঁড়ি। গন্ধ — তাজা কাঠের তীক্ষ্ণ সুগন্ধ, আঠার মিষ্টি ভাব, ধুলোর শুকনো গন্ধ। শব্দ — রেতের ঘর্ষণ, ইউসুফের ফুসফুসের গভীর নিঃশ্বাস, বাইরে বাতাসের শব্দ।</p>
<p class="scene-setting en">The second door. A carpenter's workshop. On the walls — hammers, chisels, planes, mallets. In the center, a vast wooden bench. On it, an unfinished door — yes, an actual wooden door. Carpenter Yusuf stands — tall, angular, sawdust in his beard (his signature). A plane in one hand, a chisel in the other. Smell — sharp scent of fresh wood, sweet glue, dry dust. Sound — the rasp of the plane, Yusuf's deep breathing, wind outside.</p>

<div class="dialogue">ইউসুফ তোমাকে দেখলেন। "জাকিরা তোমাকে খালি তাঁত দিয়েছেন। ভালো। কিন্তু আমার কাজ আলাদা। আমি তাঁত বানাই না — আমি জোড় বানাই।" তিনি অসমাপ্ত দরজাটার দিকে তাকালেন। "এই দরজাটা দেখো। এর চারটা পাল্লা আছে, প্রতিটা পাল্লা চারটা কাঠের টুকরো দিয়ে বানানো। সেই টুকরোগুলো একে অপরের সাথে যুক্ত — মর্টিস-টেনন জয়েন্টে।" তিনি একটা জোড় দেখালেন — একটা কাঠে গর্ত (মর্টিস), আরেকটা কাঠে খুঁটি (টেনন), খুঁটিটা গর্তে ঢুকে আছে। "এই জোড় ধরে রাখে দরজাকে। জোড় ভাঙলে দরজা ভাঙে।"</div>
<div class="dialogue en">Yusuf saw you. "Zakira gave you an empty loom. Good. But my work is different. I don't make looms — I make joints." He looked at the unfinished door. "Look at this door. It has four panels, each panel made of four pieces of wood. Those pieces are joined — mortise-and-tenon joint." He showed a joint — one piece has a hole (mortise), another has a peg (tenon), the peg fits into the hole. "This joint holds the door together. If the joint breaks, the door breaks."</div>

<div class="dialogue">"যুক্তিও এমন," ইউসুফ বললেন। "একটা যুক্তি হলো জোড় — কথার টুকরোগুলো একে অপরের সাথে যুক্ত থাকে। একে বলে প্রিমিস। প্রিমিস থেকে বেরোয় একটা সিদ্ধান্ত — কনক্লুশন। যদি প্রিমিসগুলো সত্য হয়, আর জোড়টা সঠিক হয় — তবে সিদ্ধান্তটা সত্য হয়। কিন্তু জোড় ভুল হলে, বা প্রিমিস পচা হলে — সিদ্ধান্ত ধরে রাখে না।" ইউসুফ একটা দুর্বল জোড় দেখালেন — খুঁটি গর্তে ঢুকেছে কিন্তু ফাঁকা ফাঁকা। "এটা দেখতে মজবুত, কিন্তু চাপ দিলেই বেরিয়ে আসবে।"</div>
<div class="dialogue en">"Logic is like this," Yusuf said. "An argument is a joint — pieces of speech connected to each other. Each piece is called a premise. From premises emerges a conclusion. If the premises are true, and the joint is correct — the conclusion holds. But if the joint is wrong, or the premises are rotten — the conclusion doesn't hold." Yusuf showed a weak joint — the peg sits in the hole but loosely. "It looks strong, but push and it comes apart."</div>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ অবৈধ যুক্তি (Invalid)</div>
    <strong>প্রিমিস ১:</strong> সব মুসলিম মানুষ।<br>
    <strong>প্রিমিস ২:</strong> আমি মানুষ।<br>
    <strong>সিদ্ধান্ত:</strong> তাই আমি মুসলিম।<br><br>
    প্রিমিস দুটো সত্য, কিন্তু সিদ্ধান্ত অবশ্যই সত্য নয়। জোড় ভুল — খুঁটি গর্তে ঢুকেছে কিন্তু ফাঁকা। একে বলে <em>ফর্মালি ফলাসি</em>।
  </div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ বৈধ যুক্তি (Valid)</div>
    <strong>প্রিমিস ১:</strong> সব মুসলিম মানুষ।<br>
    <strong>প্রিমিস ২:</strong> আমি মুসলিম।<br>
    <strong>সিদ্ধান্ত:</strong> তাই আমি মানুষ।<br><br>
    প্রিমিস সত্য হলে সিদ্ধান্ত <em>অবশ্যই</em> সত্য। জোড় মজবুত। এটাই <em>বৈধ</em> গঠন।
  </div>
</div>

<div class="dialogue">তুমি বললে — "কিন্তু আমি তো জানি যে আমি মানুষ। তাহলে প্রথম যুক্তিটা কি ভুল?" ইউসুফ হাসলেন। "সিদ্ধান্তটা তোমার কাছে সত্য মনে হচ্ছে কারণ তুমি আগে থেকেই জানো। কিন্তু যুক্তিটা <em>বৈধ</em> নয় — অর্থাৎ সেই গঠনে প্রিমিস সত্য হলেও সিদ্ধান্ত মিথ্যা হতে পারে। একটা যুক্তি যাচাই করার সঠিক উপায় হলো — ভাবো, <em>এই গঠনে</em> অন্য প্রিমিস বসালে কী হতে পারে?"</div>
<div class="dialogue en">You said — "But I know I'm human. So is the first argument wrong?" Yusuf smiled. "The conclusion seems true to you because you already know it. But the argument is not <em>valid</em> — meaning in that structure, even with true premises, the conclusion could be false. The right way to check an argument is — think, what would happen if I put different premises into <em>this structure</em>?"</div>

<div class="dialogue">"শোনো তিন ধরনের যুক্তির জোড়," ইউসুফ তিনটা কাঠের টুকরো টেবিলে সাজালেন। "এক — ডিডাকশন। সাধারণ থেকে নির্দিষ্ট। নিয়ম থেকে ঘটনা। উদাহরণ: সব মুসলিম মানুষ → আমি মুসলিম → তাই আমি মানুষ। এই জোড় যদি বৈধ হয়, ফল নিশ্চিত — কোনো অনিশ্চয় নেই। গণিত, লজিক, আইন — এসব ডিডাকশনের জায়গা। জোড় মজবুত হলে কাঠ যাচাই করার দরকার নেই — ফল আসবেই।"</div>
<div class="dialogue en">"Listen to three types of argument joints," Yusuf arranged three wood pieces on the bench. "One — deduction. General to specific. Rule to instance. Example: all Muslims are human → I am Muslim → therefore I am human. If this joint is valid, the result is certain — no uncertainty. Mathematics, logic, law — these are the domain of deduction. If the joint is strong, you don't need to check the wood — the result will come."</div>

<div class="dialogue">"দুই — ইনডাকশন। নির্দিষ্ট থেকে সাধারণ। ঘটনা থেকে নিয়ম। উদাহরণ: আমি যত কাক দেখেছি সব কালো → তাই সব কাক কালো। কিন্তু একটা সাদা কাক পেলেই এই যুক্তি ভাঙে।" ইউসুফ একটা কাঠের টুকরো তুলে ধরলেন — সাদা। "এই কাঠটা যদি সত্যি সাদা হয়, তাহলে 'সব কাঠ বাদামি' যুক্তিটা ভেঙে যায়। ইনডাকশন কখনো শতভাগ নিশ্চিত নয় — শুধু সম্ভাবনা দেয়। বিজ্ঞান হলো ইনডাকশন — পর্যবেক্ষণ থেকে নিয়ম।"</div>
<div class="dialogue en">"Two — induction. Specific to general. Instance to rule. Example: every crow I've seen is black → all crows are black. But one white crow breaks this." Yusuf held up a piece of wood — white. "If this wood is truly white, the argument 'all wood is brown' breaks. Induction is never 100% certain — it only gives probability. Science is induction — observation to rule."</div>

<div class="dialogue">"তিন — অ্যাবডাকশন। এটা ইনডাকশনের চাচাতো ভাই। ঘটনা থেকে সবচেয়ে সম্ভাব্য ব্যাখ্যা।" ইউসুফ দরজার একটা প্যানেল দেখালেন — তাতে একটা দাঁতের দাগ। "এই দাঁতের দাগ দেখে আমি বলি — কুকুর কামড়েছে। আমি কুকুরকে দেখিনি। কিন্তু দাঁতের গঠন দেখে আমি অনুমান করি। এটাই অ্যাবডাকশন — লক্ষণ থেকে কারণ। ডাক্তাররা এটা করে — লক্ষণ দেখে রোগ বলে। ডিটেকটিভরা এটা করে। তুমিও কোড ডিবাগ করার সময় এটা করো — বাগ দেখে কারণ অনুমান করো।"</div>
<div class="dialogue en">"Three — abduction. It's induction's cousin. From event to most likely explanation." Yusuf showed a door panel — a tooth mark on it. "From this tooth mark I say — a dog bit it. I didn't see the dog. But from the mark's shape I infer. This is abduction — symptom to cause. Doctors do it — symptoms to disease. Detectives do it. You do it debugging code — bug to cause."</div>

<div class="kv-table"><tr><th>প্রকার</th><th>দিক</th><th>নিশ্চয়তা</th><th>উদাহরণ ক্ষেত্র</th></tr>
<tr><td class="hl">ডিডাকশন</td><td>সাধারণ → নির্দিষ্ট</td><td>১০০% (বৈধ হলে)</td><td>গণিত, লজিক, আইন</td></tr>
<tr><td class="hl">ইনডাকশন</td><td>নির্দিস্ক্রিত → সাধারণ</td><td>সম্ভাবনা</td><td>বিজ্ঞান, পরিসংখ্যান</td></tr>
<tr><td class="hl">অ্যাবডাকশন</td><td>লক্ষণ → কারণ</td><td>সর্বোত্তম অনুমান</td><td>ডাক্তারি, ডিবাগ, ডিটেকটিভ</td></tr>
</table>

<div class="callout warn"><span class="co-icon">🔍</span><div><strong>লুকানো প্রিমিস (Hidden Premise):</strong> ইউসুফ বললেন — সবচেয়ে বিপজ্জনক জোড় সেটা নয় যা ভুল, সেটা যা লুকানো। কেউ বলে: "তুমি এই কোড বুঝো না, তাই এটা বাদ দাও।" প্রিমিস দুটো দেখা যাচ্ছে — (১) তুমি কোড বুঝো না, (২) ??? । দ্বিতীয় প্রিমিস লুকানো: <em>"যে কোড বোঝে না সে সেটা বাদ দিতে হবে।"</em> এই লুকানো প্রিমিসটা কি সত্য? হয়তো নয়। কিন্তু যুক্তিটা শুনতে সঠিক মনে হয় কারণ লুকানো অংশটা তুমি নিজে পূরণ করে ফেলো।</div></div>

<div class="dialogue">"তুমি ডেভেলপার," ইউসুফ বললেন। "তোমার কোড রিভিউতে এই জোড়গুলো প্রতিদিন দেখবে। কেউ বলবে — 'এই ফাংশনটা স্লো, কারণ এতে নেস্টেড লুপ আছে।' ডিডাকশন: নেস্টেড লুপ = O(n²) → n বড় হলে স্লো → এই ফাংশন স্লো। বৈধ। কিন্তু কেউ বলবে — 'এই ফাংশনটা বাগি, কারণ আমি এটা লেখিনি।' লুকানো প্রিমিস: <em>'আমার লেখা কোড বাগি নয়।'</em> সেটা সত্য নয়।"</div>
<div class="dialogue en">"You're a developer," Yusuf said. "You'll see these joints every day in code review. Someone says — 'this function is slow because it has nested loops.' Deduction: nested loop = O(n²) → large n means slow → this function is slow. Valid. But someone says — 'this function is buggy because I didn't write it.' Hidden premise: <em>'Code I write is not buggy.'</em> That's not true."</div>

<div class="dialogue">তুমি জিজ্ঞেস করলে — "বই ২৪ (সিংহাসন) আমাকে পক্ষপাতিতা শিখিয়েছে। এটা কি তার চাচাতো ভাই?" ইউসুফ ঘাড় নাড়লেন। "বই ২৪ তোমাকে দেখায় কীভাবে তোমার <em>মন</em> তোমাকে ধোঁকা দেয় — অজান্তে। এই দরজা তোমাকে দেখায় কীভাবে <em>কথা</em> তোমাকে ধোঁকা দেয় — কারও যুক্তি শুনে। একটা ভেতরের শত্রু, একটা বাইরের। পক্ষপাতিতা হলো ভেতরের ভ্রষ্টাচার। ভ্রষ্ট যুক্তি হলো বাইরের আক্রমণ। পরের দরজায় আমরা সেই বাইরের আক্রমণের গ্যালারি দেখব — ভ্রষ্টাচারের গ্যালারি।"</div>
<div class="dialogue en">You asked — "Book 24 taught me about bias. Is this its cousin?" Yusuf nodded. "Book 24 shows how your <em>mind</em> deceives you — unknowingly. This door shows how <em>speech</em> deceives you — when you hear someone's argument. One is an inner enemy, one an outer. Bias is inner fallacy. Fallacious argument is outer attack. In the next door we'll see the gallery of those outer attacks — the gallery of fallacies."</div>

<div class="dialogue">আদল। আল্লাহ কুরআনে বলেন: <em>"তোমার রবের বাণী সত্য ও ন্যায়ে পূর্ণ।"</em> (৬:১১৫ — সত্য + ন্যায় = আদল।) আদল মানে একটা জিনিসের গঠন যাচাই করা — কাঠের জোড় কি ঠিক? কাঠ কি পচা নয়? ফিট কি ঠিক? যুক্তির আদল নেওয়া মানে — প্রতিটা প্রিমিস ধরে ধরে দেখা, জোড় ধরে ধরে দেখা। ইউসুফ যখন দরজা বানান, তিনি প্রতিটা জোড় ধরে দেখেন — চাপ দেন, নাড়ান। সেটাই আদল। তোমারও প্রতিটা যুক্তি এভাবে যাচাই করতে হবে।</div>
<div class="dialogue en">Adl. Allah says in the Quran: <em>The word of your Lord has been fulfilled in truth and justice.</em> (6:115 — truth + justice = adl.) Adl means examining a thing's structure — is the wood joint correct? Is the wood not rotten? Is the fit right? Taking the adl of an argument means — examining each premise, examining each joint. When Yusuf makes a door, he checks every joint — pushes, shakes. That is adl. You too must examine every argument this way.</div>

<div class="secret-box">📐 যুক্তি হলো কাঠের জোড়। বৈধ গঠন + সত্য প্রিমিস = সাউন্ড যুক্তি। একটা ভুল হলেই সিদ্ধান্ত ধরে না। আজ কারও যুক্তি শুনলে একটা প্রশ্ন করো: <em>"এই গঠনে অন্য প্রিমিস বসালে কী হতে পারে?"</em></div>`
});

// ══ DOOR 3: THE GALLERY OF FALLACIES ══
doors.push({
  num:3, icon:"🔨", color:"#a5b4fc", name:"ভ্রষ্টাচারের গ্যালারি",
  subtitle:"The Gallery of Fallacies", tech:"Common Fallacies & Steelmanning",
  spirit:"সিদক — সততা, নিজের সাথে সচ্চরিত্র হওয়া",
  secret:"ভ্রষ্টাচার হলো যুক্তির ফাটল। কিছু ফাটল সূক্ষ্ম — দেখতে সুন্দর, ভেতরে ফাটা। কিছু ফাটল স্পষ্ট — হাত দিলেই বোঝা যায়। কিন্তু সবচেয়ে বিপজ্জনক ফাটল সেটা নয় যা অন্যের যুক্তিতে — সেটা যা তোমার নিজের যুক্তিতে, আর তুমি সেটা দেখতে পাও না। সিদক মানে নিজের সাথে সচ্চরিত্র হওয়া — নিজের ফাটল ধরতে পারা। আর সেটা শিখবে স্টিলম্যান দিয়ে — প্রতিপক্ষের যুক্তি সবচেয়ে শক্ত করে বানিয়ে দেখা।",
  recall:{
    q:"নাফিসা কেন বললেন সবচেয়ে বিপজ্জনক ভ্রষ্টাচার অন্যের নয়, নিজের যুক্তিতে?",
    qen:"Why did Nafisa say the most dangerous fallacy is in your own argument, not others'?",
    a:"কারণ অন্যের ভ্রষ্টাচার তুমি ধরতে পারো — তোমার স্বার্থ নেই সেটা রক্ষা করার। কিন্তু নিজের যুক্তি যখন তোমার বিশ্বাস বা স্বার্থ রক্ষা করে, তখন তোমার মন ফাটলটা দেখতে চায় না। সিদক — সততা — মানে নিজের সবচেয়ে প্রিয় যুক্তিটা সন্দেহ করা। স্টিলম্যান করা প্রতিপক্ষের সাথে, কাঠামো না বানিয়ে জ্বালানি না দিয়ে।",
    aen:"Because you can catch others' fallacies — you have no stake in protecting them. But when your own argument protects your belief or interest, your mind doesn't want to see the crack. Sidq — honesty — means doubting your own most beloved argument. Steelmanning your opponent, not building a strawman to burn."
  },
  story:`
<p class="scene-setting">তৃতীয় দরজা। একটা ভাস্কর্যের গ্যালারি। উঁচু ছাদ, মেঝেতে মার্বেল। দেয়াল বরাবর মূর্তি সারিবদ্ধ — কেউ সুন্দর, কেউ অসমাপ্ত, কেউ ক্ষতিগ্রস্ত। মাঝখানে দাঁড়িয়ে আছেন মূর্তিকার নাফিসা — মাঝবয়সী, গভীর চোখ, হাতে একটা ছোট্ট পিতলের হাতুড়ি (তাঁর সিগনেচার — এই হাতুড়ি দিয়ে তিনি মূর্তি টোকা দেন, ফাটল খোঁজেন)। গন্ধ — ভেজা মাটির ঠান্ডা গন্ধ, পাথরের খনিজ ভাব, পিতলের ধাতব ঝাঁঝ। শব্দ — নাফিসার হাতুড়ির টোক, টং... টং... প্রতিটা মূর্তিতে, আর সেই শব্দের প্রতিধ্বনি।</p>
<p class="scene-setting en">The third door. A sculpture gallery. High ceiling, marble floor. Along the walls, statues lined up — some beautiful, some unfinished, some damaged. In the center stands Sculptor Nafisa — middle-aged, deep eyes, a small brass hammer in her hand (her signature — with this hammer she taps statues, finds cracks). Smell — cool wet clay, mineral stone, metallic brass. Sound — Nafisa's hammer taps, tong... tong... on each statue, and the echo.</p>

<div class="dialogue">নাফিসা তোমাকে দেখলেন। কথা বললেন না। শুধু একটা মূর্তি দেখালেন — দেখতে নিখুঁত, একটা ঘোড়ার মূর্তি। "এটা কি সত্যি নিখুঁত?" তুমি বললে — "মনে হয় হ্যাঁ।" নাফিসা তাঁর পিতলের হাতুড়ি দিয়ে ঘোড়ার পেটে টোকা দিলেন। টং। পরিষ্কার শব্দ। আবার টোকা — এবার পিঠে। টং। কিন্তু তৃতীয়বার টোকা দিলেন পা-এ। ঠক। শব্দ আলাদা — ভেতরে ফাঁকা। নাফিসা বললেন: "দেখতে নিখুঁত। কিন্তু ভেতরে ফাটল। এই পা-টা পরে ভাঙবে।"</div>
<div class="dialogue en">Nafisa saw you. Said nothing. Just showed a statue — seemingly perfect, a horse. "Is this truly flawless?" You said — "Looks like it." Nafisa tapped the horse's belly with her brass hammer. Tong. Clear sound. Tap again — on the back. Tong. But the third tap — on the leg. Thok. Different sound — hollow inside. Nafisa said: "Looks perfect. But a crack inside. This leg will break later."</div>

<div class="callout warn"><span class="co-icon">🔍</span><div><strong>নাফিসার পদ্ধতি:</strong> প্রতিটা যুক্তি টোকা দাও। যেখানে শব্দ আলাদা — সেখানে ফাটল। কিন্তু ফাটল খোঁজার আগে জানতে হবে — কেমন ফাটল হয়। চলো গ্যালারি দেখি — ছয়টা ক্লাসিক ফাটল।</div></div>

<div class="dialogue">নাফিসা প্রথম মূর্তির কাছে নিয়ে গেলেন। একটা মানুষের মূর্তি — কিন্তু মুখটা অন্য দিকে। "এই প্রথম ফাটল: <strong>অ্যাড হোমিনেম</strong>। ল্যাটিন শব্দ — মানে 'মানুষের দিকে'। যুক্তিতে আক্রমণ না করে যিনি যুক্তিটা দিয়েছেন তাঁকে আক্রমণ।" নাফিসা একটা কাল্পনিক দৃষ্টান্ত দিলেন: "কেউ বলল — 'এই ফাংশন রিফ্যাক্টর করা দরকার।' উত্তরে বলা হলো — 'তুমি জুনিয়র ডেভ, তুমি কী জানো?' যুক্তিটা ধরা হলো না — মানুষটাকে ধরা হলো। এটা অ্যাড হোমিনেম। ফাটল।"</div>
<div class="dialogue en">Nafisa led you to the first statue. A human figure — but the face turned away. "This first crack: <strong>ad hominem</strong>. Latin — meaning 'toward the person.' Attacking the one who made the argument, not the argument." Nafisa gave an imagined example: "Someone said — 'this function needs refactoring.' The reply came — 'You're a junior dev, what do you know?' The argument wasn't addressed — the person was. This is ad hominem. A crack."</div>

<div class="dialogue">দ্বিতীয় মূর্তি — একটা কাঠের পুতুল, খড়ের তৈরি। "এই ফাটল: <strong>স্ট্রম্যান</strong>। খড়ের পুতুল। প্রতিপক্ষের যুক্তি যেমন আছে তেমন না ধরে, একটা দুর্বল সংস্করণ বানিয়ে তাকে আক্রমণ।" উদাহরণ: "কেউ বলল — 'আমাদের টেস্ট কভারেজ বাড়ানো উচিত।' উত্তর: 'তুমি বলছ আমরা কোনো কোড লিখব না, শুধু টেস্ট লিখব? পাগলামি!' আসল যুক্তিটা ছিল — কভারেজ বাড়ানো। কিন্তু উত্তরে একটা চরম সংস্করণ বানানো হলো — 'শুধু টেস্ট, কোড নয়' — আর সেটা ভাঙা গেল। খড়ের পুতুল পুড়িয়ে বলা হলো — 'দেখো, জিতলাম।'"</div>
<div class="dialogue en">Second statue — a puppet made of straw. "This crack: <strong>strawman</strong>. A straw puppet. Instead of addressing the opponent's argument as it is, you build a weak version and attack that." Example: "Someone said — 'we should increase test coverage.' Reply: 'You're saying we write no code, only tests? Madness!' The real argument was — increase coverage. But the reply built an extreme version — 'only tests, no code' — and broke that. Burning the straw puppet and saying — 'See, I won.'"</div>

<div class="kv-table"><tr><th>ফাটল</th><th>নাম</th><th>কী হয়</th></tr>
<tr><td class="hl">১</td><td>অ্যাড হোমিনেম</td><td>মানুষকে আক্রমণ, যুক্তিকে নয়</td></tr>
<tr><td class="hl">২</td><td>স্ট্রম্যান</td><td>দুর্বল সংস্করণ বানিয়ে ভাঙা</td></tr>
<tr><td class="hl">৩</td><td>ফলস ডাইলেমা</td><td>মাত্র দুটো বিকল্প, আসলে আরও আছে</td></tr>
<tr><td class="hl">৪</td><td>স্লিপারি স্লোপ</td><td>এক ধাপ মানে চরম ফল, প্রমাণ ছাড়া</td></tr>
<tr><td class="hl">৫</td><td>মোটিভেটেড রিজনিং</td><td>ফল ঠিক করে প্রমাণ বাছাই</td></tr>
<tr><td class="hl">৬</td><td>গুডহার্টের নিয়ম</td><td>মেট্রিক লক্ষ্য হলে মেট্রিক খারাপ হয়</td></tr>
</table>

<div class="dialogue">নাফিসা তৃতীয় মূর্তি দেখালেন — দুটো দরজা, মাঝে দেয়াল। "এই ফাটল: <strong>ফলস ডাইলেমা</strong>। মাত্র দুটো বিকল্প — এই না সেই। কিন্তু বাস্তবে আরও বিকল্প থাকে।" উদাহরণ: "কেউ বলে — 'হয় তুমি মাইক্রোসার্ভিস ব্যবহার করো, নয়তো পুরনো মনোলিথে আটকে থাকো।' কিন্তু আসলে — মডুলার মনোলিথ, সার্ভারলেস, সাব-ডোমেন বিভাজন — অনেক বিকল্প আছে। দুটো দরজা দেখিয়ে বলা হলো — বাকি দেয়াল নেই।"</div>
<div class="dialogue en">Nafisa showed the third statue — two doors, wall between. "This crack: <strong>false dilemma</strong>. Only two options — this or that. But in reality, more options exist." Example: "Someone says — 'Either you use microservices, or you're stuck with the old monolith.' But actually — modular monolith, serverless, sub-domain separation — many options exist. Showing two doors and claiming — there is no other wall."</div>

<div class="dialogue">চতুর্থ মূর্তি — একটা ঢালু পথ, নিচে গহ্বর। "এই ফাটল: <strong>স্লিপারি স্লোপ</strong>। পিছলে যাওয়ার ঢাল। এক ধাপ মানেই চরম পরিণতি — কিন্তু প্রমাণ ছাড়া।" উদাহরণ: "কেউ বলে — 'যদি একবার কোডে কমেন্ট না লেখো, তাহলে ধীরে ধীরে কেউ কমেন্ট লিখবে না, তারপর ডকুমেন্টেশন বন্ধ হবে, তারপর সব ব্যবস্থা ভাঙবে।' প্রতিটা ধাপ কি অনিবার্য? নয়। কিন্তু যুক্তিটা শোনায় — একটা ছোট ধাপ মানেই বিপর্যয়। প্রমাণ দরকার, শুধু কল্পনা নয়।"</div>
<div class="dialogue en">Fourth statue — a slope, abyss below. "This crack: <strong>slippery slope</strong>. A sliding slope. One step means extreme outcome — but without proof." Example: "Someone says — 'If you skip code comments once, gradually no one will comment, then documentation stops, then everything breaks.' Is each step inevitable? No. But the argument sounds — one small step means catastrophe. Proof is needed, not just imagination."</div>

<div class="dialogue">পঞ্চম মূর্তি — একটা মানুষ চোখে হাত দিয়ে আছে, কিন্তু আঙুলের ফাঁক দিয়ে দেখছে। "এই ফাটল: <strong>মোটিভেটেড রিজনিং</strong>। ফল আগে ঠিক করো, তারপর সেই ফল সমর্থন করে এমন প্রমাণ বাছাই করো।" নাফিসা গভীর কণ্ঠে বললেন: "এই ফাটলটা বই ২৪ (সিংহাসন) তোমাকে দেখিয়েছে — কনফার্মেশন বায়াস। কিন্তু এখানে সেটা যুক্তির জায়গায় এসেছে। তুমি একটা সিদ্ধান্তে পৌঁছেছ — এখন সেটা ঠিক করার জন্য শুধু সমর্থনকারী প্রমাণ খোঁজো, বিপরীত প্রমাণ এড়াও।"</div>
<div class="dialogue en">Fifth statue — a person with hands over eyes, but seeing through finger gaps. "This crack: <strong>motivated reasoning</strong>. Fix the conclusion first, then cherry-pick evidence that supports it." Nafisa said deeply: "Book 24 showed you this — confirmation bias. But here it has entered the realm of argument. You've reached a conclusion — now to justify it, you seek only supporting evidence, avoiding contrary evidence."</div>

<div class="dialogue">ষষ্ঠ মূর্তি — একটা মাপকাঠি, কিন্তু মাপকাঠির দিকে মানুষ তাকিয়ে, মাপা জিনিসটা অদৃশ্য। "এই ফাটল: <strong>গুডহার্টের নিয়ম</strong>। অর্থনীতিবিদ চার্লস গুডহার্ট (১৯৭৫) বলেছিলেন: <em>'যখন কোনো সূচক নীতির লক্ষ্য হয়ে যায়, সে ভালো সূচক থাকে না।'</em> কোডের লাইন সংখ্যা মেপে যখন উৎপাদনশীলতা ধরা হয় — তখন ডেভেলপাররা লাইন বাড়ায়, উৎপাদন নয়। মেট্রিক লক্ষ্য হলে মেট্রিক নিজেই নষ্ট হয়।"</div>
<div class="dialogue en">Sixth statue — a measuring rod, but people stare at the rod, the measured thing invisible. "This crack: <strong>Goodhart's Law</strong>. Economist Charles Goodhart (1975) said: <em>'When a measure becomes a policy target, it ceases to be a good measure.'</em> When lines of code measure productivity — developers add lines, not value. When a metric becomes a target, the metric itself degrades."</div>

<div class="callout tip"><span class="co-icon">🛡️</span><div><strong>প্রতিষেধক — স্টিলম্যানিং (Steelmanning):</strong> নাফিসা বললেন — খড়ের পুতুল না বানিয়ে, প্রতিপক্ষের যুক্তি সবচেয়ে শক্ত করে বানাও। এমনভাবে বানাও যেন তিনি নিজে বলেন — 'হ্যাঁ, ঠিক বলেছ।' তারপর সেই শক্ত যুক্তিটা ভাঙো। এটাই স্টিলম্যান — ইস্পাতের মানুষ বানানো। বই ১৬ (এলএলএম মূল্যায়ন) এর উদাহরণ দেই: একটা এআই মডেলের আউটপুট যাচাই করার সময়, সবচেয়ে চ্যালেঞ্জিং প্রশ্ন দাও — সহজ নয়। তাহলেই আসল মান ধরা যায়। দুর্বল যুক্তি ভাঙলে কেউ কাবু হয় না। শক্ত যুক্তি ভাঙলে সত্য বের হয়।</div></div>

<div class="dialogue">তুমি জিজ্ঞেস করলে — "কিন্তু আমি কি নিজের যুক্তি যাচাই করব?" নাফিসা তাঁর হাতুড়ি তোমার হাতে দিলেন। "এটা নাও। আর তোমার সবচেয়ে প্রিয় যুক্তিটা টোকা দাও। যেটা তুমি সবচেয়ে বেশি রক্ষা করতে চাও — সেটা টোকা দাও। সেখানে সবচেয়ে বেশি ফাটল থাকে। কারণ যে যুক্তি তোমার স্বার্থ রক্ষা করে, সেই যুক্তিটা তোমার মন সবচেয়ে কম যাচাই করে।" নাফিসা একটু থামলেন। "এটাই সিদক — সততা। নিজের সাথে সচ্চরিত্র হওয়া। অন্যের ফাটল ধরা সহজ, নিজেরটা ধরা — সেটাই আসল কারিগরি।"</div>
<div class="dialogue en">You asked — "But how do I check my own argument?" Nafisa placed her hammer in your hand. "Take this. And tap your most beloved argument. The one you most want to protect — tap that. There lie the deepest cracks. Because the argument that protects your interest, your mind checks the least." Nafisa paused. "This is sidq — honesty. Being true with yourself. Catching others' cracks is easy — catching your own, that's the real craft."</div>

<div class="dialogue">সিদক। কুরআনে আল্লাহ বলেন: <em>"যারা ঈমান এনেছে এবং সত্যবাদী হয়েছে — তারাই সফলকাম।"</em> (এটি সত্যবাদীদের প্রশংসার প্যারাফ্রেজ।) সিদক শুধু মুখের সততা নয়। সিদক মানে চিন্তার সততা — যখন কেউ দেখছে না, তখনও নিজের সাথে সৎ থাকা। নাফিসা যখন একা গ্যালারিতে মূর্তি টোকা দেন, কেউ দেখছে না — কিন্তু তিনি ফাটল খোঁজেন। সেটাই সিদক। তোমার চিন্তার সিদক হলো — যখন কেউ তোমার যুক্তি শুনছে না, তখনও নিজের যুক্তি যাচাই করা।</div>
<div class="dialogue en">Sidq. Allah says in the Quran (paraphrased): those who believe and are truthful — they are the successful. Sidq is not just honesty of speech. Sidq is honesty of thought — being honest with yourself even when no one is watching. When Nafisa taps statues alone in the gallery, no one watching — but she finds cracks. That is sidq. The sidq of your thinking is — checking your own argument even when no one is hearing it.</div>

<div class="secret-box">🔨 ভ্রষ্টাচার হলো যুক্তির ফাটল — অ্যাড হোমিনেম, স্ট্রম্যান, ফলস ডাইলেমা, স্লিপারি স্লোপ, মোটিভেটেড রিজনিং, গুডহার্ট। প্রতিষেধক — স্টিলম্যান: প্রতিপক্ষের যুক্তি শক্ত করে বানিয়ে ভাঙা। সবচেয়ে বিপজ্জনক ফাটল নিজের যুক্তিতে — সিদক দিয়ে ধরতে হয়।</div>`
});

// ══ DOOR 4: BAYESIAN THINKING ══
doors.push({
  num:4, icon:"📊", color:"#6366f1", name:"হিসাবরক্ষকের খাতা",
  subtitle:"The Accountant's Ledger", tech:"Bayesian Updating & Base Rates",
  spirit:"ইলম আল-ইয়াকিন — প্রত্যয়ের জ্ঞান, প্রমাণ দিয়ে তৈরি",
  secret:"প্রতিটা বিশ্বাসের একটা দাম আছে — সম্ভাবনা। নতুন প্রমাণ এলে দাম বদলায়। কিন্তু অনেকে নতুন প্রমাণ দেখে পুরোনো দাম ভুলে যায় — সেটাই বেস-রেট অবহেলা। রুকাইয়ার খাতায় দুটো কলাম — আগের বিশ্বাস, নতুন প্রমাণ। দুটো মিলে নতুন বিশ্বাস। এটাই বেইসিয়ান আপডেট। যে এটা জানে সে কখনো একটা পরীক্ষার ফল দেখে প্যানিক করে না।",
  recall:{
    q:"রুকাইয়া কেন বললেন একটা মেডিকেল টেস্ট পজিটিভ এলেও তুমি সত্যিই অসুস্থ নাও হতে পারো?",
    qen:"Why did Rukayya say a positive medical test doesn't mean you're necessarily sick?",
    a:"কারণ বেস রেট। ধরো রোগটা জনসংখ্যার ১%-এ আছে, আর টেস্ট ৯৯% সঠিক। তুমি পজিটিভ পেলে। রুকাইয়ার হিসাব: ১০০০ জনের মধ্যে ১০ জন সত্যিই অসুস্থ, ৯৯০ জন সুস্থ। ১০ জনের ৯.৯ জন পজিটিভ হবে (সঠিক)। ৯৯০ জনের ৯.৯ জন পজিটিভ হবে (ভুল)। মোট পজিটিভ ১৯.৮। তোমার সত্যিই অসুস্থ হওয়ার সম্ভাবনা — ৯.৯/১৯.৮ = ৫০%। অর্ধেক! একটা পরীক্ষা পজিটিভ মানেই রোগ নয় — বেস রেট মিলিয়ে দেখতে হয়।",
    aen:"Because of the base rate. Say a disease affects 1% of population, test is 99% accurate. You test positive. Rukayya's math: of 1000 people, 10 are truly sick, 990 well. Of 10, 9.9 test positive (correct). Of 990, 9.9 test positive (false). Total positives 19.8. Your chance of truly being sick — 9.9/19.8 = 50%. Half! One positive test doesn't mean disease — check the base rate."
  },
  story:`
<p class="scene-setting">চতুর্থ দরজা। একটা হিসাবরক্ষকের অফিস। ছোট্ট ঘর, উঁচু জানালা, ধুলোর কণা আলোয় ভাসছে। মাঝখানে একটা বিশাল কাঠের ডেস্ক — তার উপর খাতা, খাতা, খাতা। প্রতিটা খাতায় দুটো কলাম — বাঁ দিকে একটা, ডান দিকে একটা। হিসাবরক্ষক রুকাইয়া বসে আছেন — সবুজ চোখের ছায়া (ভিনটেজ ভিজর), মাথায় পাতলা স্কার্ফ, হাতে একটা কালো কলম (তাঁর সিগনেচার)। গন্ধ — কাগজের পুরনো গন্ধ, কালির ধাতব ঝাঁঝ, চক দিয়ে বোর্ড মোছার শুকনো ভাব। শব্দ — কলমের স্ক্র্যাচ, পাতা ওল্টানোর শব্দ, রুকাইয়ার গোনার ফিসফিস।</p>
<p class="scene-setting en">The fourth door. An accountant's office. Small room, high window, dust motes in the light. In the center, a vast wooden desk — on it, ledgers, ledgers, ledgers. Each ledger has two columns — left side, right side. Accountant Rukayya sits — green eyeshade (vintage vizor), thin scarf on her head, a black pen in her hand (her signature). Smell — old paper, metallic ink, dry chalk-board wipe. Sound — pen scratch, page turning, Rukayya's counting whisper.</p>

<div class="dialogue">রুকাইয়া তোমাকে দেখলেন। কলমটা নামিয়ে রাখলেন। "বসো।" তুমি বসলে। ডেস্কের পাশে। "কেন এসেছ?" তুমি বললে — "নাফিসা আমাকে ভ্রষ্টাচার ধরতে শিখিয়েছেন। কিন্তু আমার আরেকটা সমস্যা আছে। আমি অনেক কিছু বিশ্বাস করি — কিন্তু নতুন তথ্য এলে কী করব বুঝতে পারি না। কখনো একটা খবর দেখে প্যানিক করি, কখনো একটা পরীক্ষার ফল দেখে হতাশ হই।" রুকাইয়া একটু হাসলেন। "তুমি একটা কলাম দেখো, দুটো নয়। সেটাই সমস্যা।"</div>
<div class="dialogue en">Rukayya saw you. Put the pen down. "Sit." You sat. Beside the desk. "Why have you come?" You said — "Nafisa taught me to catch fallacies. But I have another problem. I believe many things — but when new information comes, I don't know what to do. Sometimes I see a news headline and panic, sometimes a test result and despair." Rukayya smiled a little. "You're looking at one column, not two. That's the problem."</div>

<div class="dialogue">রুকাইয়া একটা খাতা খুললেন। "দেখো — এই খাতায় দুটো কলাম। বাঁ দিকে 'পূর্ব-বিশ্বাস' — আগে থেকে যা জানতে। ডান দিকে 'নতুন প্রমাণ' — এখন যা জানলাম। আমি হিসাবরক্ষক। আমার কাজ হলো এই দুটো কলাম মিলিয়ে নতুন ব্যালেন্স বের করা।" তিনি খাতায় লিখলেন: <em>পূর্ব-বিশ্বাস + নতুন প্রমাণ = নতুন বিশ্বাস</em>। "এটাই বেইসিয়ান আপডেট। থমাস বেইস — একজন পাদরি, ১৭৬১ সালে মৃত্যু, ১৭৬৩ সালে তাঁর সূত্র প্রকাশ পায়। তিনি একটা সহজ কথা বলেছিলেন — <strong>নতুন প্রমাণ পূর্বের বিশ্বাসকে বদলায়, কিন্তু মুছে দেয় না।</strong>"</div>
<div class="dialogue en">Rukayya opened a ledger. "Look — this ledger has two columns. Left side 'prior belief' — what you already knew. Right side 'new evidence' — what you just learned. I'm an accountant. My job is to match these two columns and find the new balance." She wrote: <em>prior + evidence = new belief</em>. "This is Bayesian update. Thomas Bayes — a priest, his formula published posthumously in 1763. He said a simple thing — <strong>new evidence changes prior belief, but doesn't erase it.</strong>"</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে — বেস-রেট অবহেলা (Base-Rate Neglect):</strong> রুকাইয়া বললেন — "তুমি একটা মেডিকেল পরীক্ষা করলে। ফল পজিটিভ। তুমি ভাবলে — 'আমি অসুস্থ, ৯৯% সম্ভাবনা।' কিন্তু তুমি একটা জিনিস ভুলে গেলে — <strong>কত জনসংখ্যার মধ্যে এই রোগ আছে?</strong> সেটাই বেস রেট। সেটা না জানলে একটা পরীক্ষার ফল অর্থহীন।"</div></div>

<div class="dialogue">রুকাইয়া বোর্ডে একটা উদাহরণ লিখলেন। "ধরো — একটা রোগ জনসংখ্যার ১%-এ আছে। পরীক্ষাটা ৯৯% সঠিক — অর্থাৎ অসুস্থ থাকলে ৯৯% ক্ষেত্রে পজিটিভ দেবে, সুস্থ থাকলে ৯৯% ক্ষেত্রে নেগেটিভ দেবে। তুমি পরীক্ষা করলে — পজিটিভ এল। তোমার কত সম্ভাবনা সত্যিই অসুস্থ?" তুমি দ্রুত বললে — "৯৯%।" রুকাইয়া মাথা নাড়লেন। "ভুল। চলো হিসাব করি।"</div>
<div class="dialogue en">Rukayya wrote an example on the board. "Say — a disease affects 1% of population. The test is 99% accurate — meaning if sick, 99% chance of positive; if well, 99% chance of negative. You take the test — positive. What's your chance of truly being sick?" You said quickly — "99%." Rukayya shook her head. "Wrong. Let's calculate."</div>

<div class="kv-table"><tr><th>গোষ্ঠী</th><th>সংখ্যা (১০০০ জনে)</th><th>পজিটিভ ফল</th></tr>
<tr><td class="hl">সত্যিই অসুস্থ (১%)</td><td>১০ জন</td><td>৯.৯ জন (সঠিক পজিটিভ)</td></tr>
<tr><td class="hl">সুস্থ (৯৯%)</td><td>৯৯০ জন</td><td>৯.৯ জন (মিথ্যা পজিটিভ)</td></tr>
<tr><td class="hl">মোট পজিটিভ</td><td>—</td><td class="hl">১৯.৮ জন</td></tr>
</table>

<div class="dialogue">"মোট পজিটিভ ফল ১৯.৮ জনের মধ্যে," রুকাইয়া বললেন, "তোমার সত্যিই অসুস্থ হওয়ার সম্ভাবনা — ৯.৯ ÷ ১৯.৮ = ৫০%। অর্ধেক! একটা পরীক্ষা পজিটিভ এলেও তুমি অর্ধেক সম্ভাবনায় সুস্থ। কারণ রোগটা বিরল — বেস রেট কম। বিরল রোগে মিথ্যা পজিটিভ সত্য পজিটিভকে ছাড়িয়ে যায়।" তুমি চমকে গেলে। "তাহলে আমি কী করব?" রুকাইয়া বললেন — "আরেকটা পরীক্ষা করো। নতুন প্রমাণ আসবে। আবার আপডেট করো। দুটো পরীক্ষা পজিটিভ হলে সম্ভাবনা বহুগুণ বাড়ে। একটা প্রমাণ কখনোই চূড়ান্ত নয়।"</div>
<div class="dialogue en">"Of the total 19.8 positives," Rukayya said, "your chance of truly being sick — 9.9 ÷ 19.8 = 50%. Half! Even with a positive test, you're half-likely to be well. Because the disease is rare — base rate is low. For rare diseases, false positives outnumber true positives." You were startled. "Then what do I do?" Rukayya said — "Take another test. New evidence comes. Update again. Two positive tests multiply the probability many times. One piece of evidence is never final."</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১%</div><div class="sc-label">রোগের বেস রেট</div></div>
<div class="stat-card"><div class="sc-num">৯৯%</div><div class="sc-label">টেস্টের নির্ভুলতা</div></div>
<div class="stat-card"><div class="sc-num">৫০%</div><div class="sc-label">পজিটিভ হলেও সত্যিই অসুস্থ হওয়ার সম্ভাবনা</div></div>
<div class="stat-card"><div class="sc-num">২x</div><div class="sc-label">আরেকটা টেস্ট সম্ভাবনা কতগুণ বাড়ায়</div></div>
</div>

<div class="callout tip"><span class="co-icon">💡</span><div><strong>বই ৩০ (স্থপতির কম্পাস) স্মরণ:</strong> সেই বইয়ের সম্ভাবনা দরজায় তুমি শিখেছ — P(A), P(B), P(A|B)। বেইসিয়ান আপডেট হলো সেই ভিত্তির উপর দাঁড়িয়ে আছে। বই ৩০ তোমাকে গাণিতিক হাতিয়ার দিয়েছে, এই দরজা তোমাকে দেখায় কীভাবে সেই হাতিয়ার বাস্তব সিদ্ধান্তে লাগে। সূত্র: <em>P(রোগ|পজিটিভ) = [P(পজিটিভ|রোগ) × P(রোগ)] / P(পজিটিভ)</em>। ভয় পেও না — রুকাইয়ার খাতা পদ্ধতিটাই এই সূত্রের কথা।</div></div>

<div class="dialogue">"তুমি ডেভেলপার," রুকাইয়া বললেন। "তোমার প্রতিদিনের কাজে এটা লাগে। তুমি একটা বাগ রিপোর্ট পেলে। ব্যবহারকারী বলছে — 'লগইন কাজ করছে না।' তুমি ভাবলে — 'নিশ্চই অথেন্টিকেশন সার্ভার নষ্ট।' কিন্তু বেস রেট কী? গত সপ্তাহে কত বাগ অথেন্টিকেশনে ছিল, কত ছিল ফ্রন্টএন্ডে? যদি ৯০% বাগ ফ্রন্টএন্ডে হয়, তাহলে একটা 'লগইন কাজ করছে না' রিপোর্ট পজিটিভ হলেও সত্যিই অথেন্টিকেশনের সম্ভাবনা কম। তুমি বাজে জায়গায় সময় নষ্ট করবে।"</div>
<div class="dialogue en">"You're a developer," Rukayya said. "This applies to your daily work. You get a bug report. User says — 'login doesn't work.' You think — 'must be the auth server.' But what's the base rate? Last week, how many bugs were in auth, how many in frontend? If 90% of bugs are frontend, then even a 'login broken' report is more likely frontend. You'll waste time in the wrong place."</div>

<div class="dialogue">তুমি জিজ্ঞেস করলে — "তাহলে কি আমি কখনো নিশ্চিত হতে পারি না?" রুকাইয়া খাতা বন্ধ করলেন। "না। নিশ্চিত হওয়া যায় না — শুধু সম্ভাবনা আপডেট করা যায়। ভবিষ্যৎবিদ পল সাফো বলেছেন — <em>'strong opinions, weakly held.'</em> শক্ত মতামত, কিন্তু দুর্বলভাবে ধরা — নতুন প্রমাণ এলে ছেড়ে দিতে প্রস্তুত। এটাই বেইসিয়ান জীবন। তুমি একটা মতামত ধরে থাকো — কিন্তু প্রতিটা নতুন তথ্যে খাতা আপডেট করো। যে মতামত কখনো বদলায় না, সে বিশ্বাস নয় — অন্ধত্ব।"</div>
<div class="dialogue en">You asked — "So can I never be certain?" Rukayya closed the ledger. "No. Certainty isn't possible — only updating probability. Futurist Paul Saffo said — <em>'strong opinions, weakly held.'</em> Strong opinions, held weakly — ready to let go when new evidence comes. This is the Bayesian life. You hold an opinion — but with each new piece of information, update the ledger. An opinion that never changes isn't belief — it's blindness."</div>

<div class="dialogue">ইলম আল-ইয়াকিন। কুরআনে আল্লাহ তিন ধরনের জ্ঞানের কথা বলেছেন — ইলম আল-ইয়াকিন (প্রত্যয়ের জ্ঞান), আইন আল-ইয়াকিন (প্রত্যক্ষ জ্ঞান), হাক্ক আল-ইয়াকিন (সত্যের জ্ঞান)। ইলম আল-ইয়াকিন হলো প্রমাণ থেকে প্রতীয়মান জ্ঞান — তুমি দেখোনি, কিন্তু প্রমাণ থেকে বোঝো। আগুনের ধোঁয়া দেখে তুমি বোঝো — আগুন আছে। দেখোনি, কিন্তু ইলম আল-ইয়াকিন। বেইসিয়ান চিন্তা হলো ইলম আল-ইয়াকিনের কারিগরি — প্রতিটা প্রমাণ দিয়ে তোমার বিশ্বাস তীক্ষ্ণ করা। রুকাইয়া কখনো একটা খাতা দেখে চূড়ান্ত সিদ্ধান্ত নেন না — তিনি প্রতিটা নতুন এন্ট্রি দিয়ে ব্যালেন্স আপডেট করেন। সেটাই ইলম আল-ইয়াকিন।</div>
<div class="dialogue en">Ilm al-yaqin. In the Quran Allah speaks of three kinds of knowledge — ilm al-yaqin (knowledge of certainty), ain al-yaqin (vision of certainty), haqq al-yaqin (truth of certainty). Ilm al-yaqin is knowledge inferred from evidence — you haven't seen, but you understand from proof. You see smoke and infer — fire exists. You haven't seen, but ilm al-yaqin. Bayesian thinking is the craft of ilm al-yaqin — sharpening belief with each piece of evidence. Rukayya never makes a final decision from one ledger entry — she updates the balance with each new entry. That is ilm al-yaqin.</div>

<div class="secret-box">📊 প্রতিটা বিশ্বাসের একটা সম্ভাবনা আছে। নতুন প্রমাণ সেই সম্ভাবনা আপডেট করে — মুছে দেয় না। বেস রেট ভুলো না: একটা পরীক্ষার ফল বা একটা খবর দেখে চূড়ান্ত সিদ্ধান্ত নিও না। আজ একটা প্রশ্ন করো: <em>"এই ফলাফলের পেছনের বেস রেট কত?"</em></div>`
});

// ══ DOOR 5: FIRST PRINCIPLES & INVERSION ══
doors.push({
  num:5, icon:"⚙️", color:"#818cf8", name:"কামারের হাপ",
  subtitle:"The Blacksmith's Forge", tech:"First Principles Thinking & Inversion",
  spirit:"ফাতরাত আল-ফারাগ — স্থান খালি করা, ভিত্তিতে নামা",
  secret:"দুটো উপায়ে চিন্তা করা যায়। এক — অন্যেরা যা করেছে তার উপর ভর করে, একটু উন্নতি করা। দুই — ভিত্তিতে নেমে প্রশ্ন করা — 'এটা কেন কাজ করে? এর অসম্পূর্ণ কী?' প্রথমটাকে অ্যানালজি, দ্বিতীয়টাকে ফার্স্ট প্রিন্সিপাল। আর আছে উল্টো চিন্তা — 'কীভাবে এটা ভাঙবে?' সেই উত্তর এড়ালেই সফলতা। এই দুটো মিলিয়ে সুলতানের হাপে লোহা গলে নতুন আকার নেয়।",
  recall:{
    q:"সুলতান কেন বললেন 'কীভাবে এটা ভাঙবে?' প্রশ্নটা কখনো কখনো 'কীভাবে বানাব?' প্রশ্নের চেয়ে কার্যকর?",
    qen:"Why did Sultan say 'how would this break?' is sometimes more effective than 'how do I build it?'",
    a:"কারণ বড় সমস্যাগুলো জটিল — 'কীভাবে বানাব' এর অনেক উত্তর, অনেক পথ। কিন্তু 'কীভাবে ভাঙবে' এর উত্তর কম — আর সেগুলো এড়ালেই বাকিটা ঠিক হয়। জ্যাকোবি বলেছেন 'invert, always invert।' সুলতান একটা তলোয়ার বানানোর আগে ভাবেন — এটা কীভাবে ভাঙতে পারে? ভাঙা এড়ালেই মজবুতি আসে। এটা প্রিমর্টেম — মৃত্যুর আগে মৃত্যুর কারণ ভাবা।",
    aen:"Because big problems are complex — 'how to build' has many answers, many paths. But 'how would this break' has fewer answers — and avoiding those fixes the rest. Jacobi said 'invert, always invert.' Before making a sword Sultan thinks — how could this break? Avoid breakage and strength comes. This is premortem — thinking of causes of death before death."
  },
  story:`
<p class="scene-setting">পঞ্চম দরজা। একটা কামারের হাপ। গরম, উষ্ণ, বাতাস কাঁপা। মাঝখানে একটা প্রকাণ্ড চুল্লি — তার ভেতর আগুনের হালকা কমলা আভা। পাশে একটা বিশাল লোহার সাঁড়িশি। দেয়ালে ঝোলানো — নানা আকারের হাতুড়ি, চেন, প্লায়ার। কামার সুলতান দাঁড়িয়ে আছেন — পেশিশক্তি বজায় রাখা বয়স্ক মানুষ, হাতব্যাগ পর্যন্ত কালচে পোড়া দাগ (স্পার্কের সিগনেচার), সামনে পুরু চামড়ার এপ্রন। গন্ধ — গলিত লোহার ঝাঁঝ, কয়লার তীক্ষ্ণ গন্ধ, ঘামের নোনতা ভাব। শব্দ — হাতুড়ির পাল্টা — ডাং... ডাং... প্রতিটা আঘাতে স্ফুলিঙ্গ উড়ে, আগুনের হিসহিস শব্দ।</p>
<p class="scene-setting en">The fifth door. A blacksmith's forge. Hot, warm, trembling air. In the center, a vast furnace — inside, a soft orange glow. Beside it, a massive iron anvil. On the walls — hammers of various sizes, tongs, pliers. Blacksmith Sultan stands — elderly man with retained muscle, soot-brown burns up to his forearms (spark-scars signature), thick leather apron before him. Smell — molten iron sharpness, acrid coal, salty sweat. Sound — hammer on anvil — dang... dang... each strike sparks fly, the hiss of fire.</p>

<div class="dialogue">সুলতান তোমাকে দেখলেন। হাতুড়ি নামিয়ে রাখলেন। "রুকাইয়া তোমাকে খাতা শিখিয়েছেন। ভালো। কিন্তু আমার কাজ আলাদা। আমি হিসাব রাখি না — আমি লোহা গলাই।" তিনি চুল্লি থেকে একটা লোহার দণ্ড টেনে নিলেন — উত্তপ্ত, কমলা জ্বলছে। "এই লোহাটা দেখো। সবাই ভাবে — এটা একটা পেরেক। কিন্তু সত্যি কী? এটা আসলে একটা জিনিস নয় — এটা পরমাণুর বন্ধন। লোহা, কার্বন, আর তাপ। আমি যখন হাতুড়ি মারি, আমি আসলে পরমাণুগুলোকে পুনর্বিন্যাস্ত করছি।" তিনি হাতুড়ি মারলেন — ডাং। লোহাটা একটু চ্যাপ্টা হলো।</div>
<div class="dialogue en">Sultan saw you. Set the hammer down. "Rukayya taught you the ledger. Good. But my work is different. I don't keep accounts — I melt iron." He drew an iron rod from the furnace — heated, glowing orange. "Look at this iron. Everyone thinks — this is a nail. But what is it truly? It's not one thing — it's a bond of atoms. Iron, carbon, and heat. When I strike with the hammer, I'm actually rearranging atoms." He struck — dang. The iron flattened a bit.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে — অ্যানালজি দিয়ে চিন্তা:</strong> সুলতান বললেন — "তুমি যখন কোনো সমস্যা অ্যানালজি দিয়ে সমাধান করো — 'অন্যেরা এভাবে করেছে, আমিও এভাবে করব, একটু পরিবর্তন দিয়ে' — তুমি আসলে চিন্তা করছ না। তুমি কপি করছ। কপি করা খারাপ নয় — কিন্তু সীমিত। তুমি যা কপি করো, তার চেয়ে ভালো কখনো হবে না। কারণ তুমি জানো না <em>কেন</em> সেটা কাজ করে।"</div></div>

<div class="dialogue">"ফার্স্ট প্রিন্সিপাল," সুলতান চুল্লি থেকে আরেকটা দণ্ড টানলেন। "এলন মাস্ক এটা ব্যবহার করেছেন স্পেসএক্সে। রকেটের দাম কেন এত? অন্যেরা বলে — 'কারণ রকেট এমনিতেই দামি।' কিন্তু মাস্ক ভিত্তিতে নামলেন। রকেট কী দিয়ে তৈরি? অ্যালুমিনিয়াম, টাইটানিয়াম, কপার, কার্বন ফাইবার। সেই কাঁচামালের বাজার দাম কত? রকেটের খরচের মাত্র ২%। বাকি ৯৮% হলো প্রস্তুতি — কারণ সবাই অ্যানালজি দিয়ে ভাবে। মাস্ক ভাবলেন — 'আমি যদি নিজে কাঁচামাল কিনে রকেট বানাই?' স্পেসএক্স জন্ম নিল।" সুলতান হাতুড়ি মারলেন — ডাং।</div>
<div class="dialogue en">"First principles," Sultan drew another rod from the furnace. "Elon Musk used this at SpaceX. Why are rockets so expensive? Others say — 'because rockets are inherently expensive.' But Musk went to the foundation. What is a rocket made of? Aluminum, titanium, copper, carbon fiber. What's the market price of those raw materials? Only 2% of the rocket's cost. The other 98% is preparation — because everyone thinks by analogy. Musk thought — 'what if I buy raw materials and build it myself?' SpaceX was born." Sultan struck — dang.</div>

<div class="dialogue">"তুমি ডেভেলপার," সুলতান বললেন। "তুমি একটা লাইব্রেরি ব্যবহার করো — React, Vue, Django। তুমি ভাবো — 'এটা কাজ করছে, ভালো।' কিন্তু কখনো ভেবেছ এই লাইব্রেরিগুলো কেন কাজ করে? React এর ভার্চুয়াল DOM কী করে? Django এর ORM ভেতরে কী করে? যেদিন তুমি ভিত্তিতে নামবে — সেদিন তুমি লাইব্রেরি ব্যবহার করবে না, লাইব্রেরি তৈরি করবে।" সুলতান একটু থামলেন। "বই ৩ (প্রকৌশলীর যাত্রা) তোমাকে একই পাঠ দিয়েছিল — প্রথম নীতি। এই দরজা সেই পাঠের গভীরে যায়।"</div>
<div class="dialogue en">"You're a developer," Sultan said. "You use a library — React, Vue, Django. You think — 'it works, good.' But have you ever wondered why these libraries work? What does React's virtual DOM do? What does Django's ORM do inside? The day you descend to the foundation — that day you won't use libraries, you'll create them." Sultan paused. "Book 3 (Engineer's Journey) gave you the same lesson — first principles. This door goes deeper into that lesson."</div>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ অ্যানালজি দিয়ে</div>
    "অন্য কোম্পানি মাইক্রোসার্ভিস ব্যবহার করছে, আমরাও করব।"<br><br>
    কপি। তুমি জানো না কেন কাজ করে। ফলে ভাঙলে ঠিক করতে পারবে না।
  </div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ ফার্স্ট প্রিন্সিপাল দিয়ে</div>
    "আমাদের সিস্টেমের আসল সমস্যা কী? ব্যবহারকারী সংখ্যা? ডেটা আকার? টিম স্কেল?" ভিত্তিতে নামো, তারপর সিদ্ধান্ত।<br><br>
    মূল কারণ জানো। ভাঙলে ঠিক করতে পারো। নতুন কিছু বানাতে পারো।
  </div>
</div>

<div class="dialogue">"এখন দ্বিতীয় হাতিয়ার — উল্টো চিন্তা," সুলতান হাপ থেকে একটা তলোয়ার তুলে ধরলেন। সুন্দর, ধারালো। "এই তলোয়ারটা কীভাবে ভাঙবে?" তুমি ভাবলে। "খুব শক্ত আঘাতে? নতুন কোণে? ঠান্ডায়?" সুলতান ঘাড় নাড়লেন। "হ্যাঁ। এখন আমি জানি — কোন কোণ এড়াতে হবে, কোন তাপমাত্রায় নরম করতে হবে। উল্টো প্রশ্ন করলে উত্তর কম, আর স্পষ্ট।" তিনি একটু থামলেন। "গণিতজ্ঞ কার্ল গুস্তাফ জ্যাকোবি বলেছিলেন — <em>'Invert, always invert.'</em> উল্টাও, সবসময় উল্টাও। সমস্যা সরাসরি সমাধান না হলে — উল্টো প্রশ্ন করো।"</div>
<div class="dialogue en">"Now the second tool — inversion," Sultan lifted a sword from the forge. Beautiful, sharp. "How would this sword break?" You thought. "A very hard strike? A new angle? In cold?" Sultan nodded. "Yes. Now I know — which angle to avoid, which temperature to soften. which temper to give. The inverted question has fewer answers, and clearer." He paused. "Mathematician Carl Gustav Jacobi said — <em>'Invert, always invert.'</em> Invert, always invert. If a problem won't solve directly — ask the inverted question."</div>

<div class="dialogue">"তুমি একটা প্রোজেক্ট শুরু করার আগে," সুলতান বললেন, "ভাবো — 'এই প্রোজেক্টটা কীভাবে ব্যর্থ হবে?' দলে ঝগড়া হলে? ডেডলাইন মিস হলে? কাস্টমার চাইল না? এই উল্টো প্রশ্নগুলোর উত্তর এড়ালেই সফলতা। একে বলে <strong>প্রিমর্টেম</strong> — মৃত্যুর আগে মৃত্যুর কারণ ভাবা। গ্যারি ক্লেইন (২০০৭) এই কৌশলটা আনুষ্ঠানিকভাবে প্রস্তাব করেছিলেন। মৃত্যুর পরে পোস্টমর্টেম করলে দেরি হয় — প্রিমর্টেমে সময় থাকে।" সুলতান তলোয়ারটা সাঁড়িশিতে রাখলেন।</div>
<div class="dialogue en">"Before you start a project," Sultan said, "think — 'how would this project fail?' Team conflict? Missed deadline? Customer didn't want it? Avoid the answers to these inverted questions, and success comes. This is called <strong>premortem</strong> — thinking of causes of death before death. Gary Klein (2007) formally proposed this technique. Postmortem after death is too late — premortem has time." Sultan placed the sword on the anvil.</div>

<div class="callout tip"><span class="co-icon">✂️</span><div><strong>ভিয়া নেগাটিভা (Via Negativa):</strong> সুলতান বললেন — কখনো কখনো কী যোগ করতে হবে তার চেয়ে কী বাদ দিতে হবে সেটা বেশি কার্যকর। ন্যাসিম তালেব একে বলেছেন <em>via negativa</em> — নেতিবাচক পথ। উন্নতি মানে কখনো কিছু যোগ করা নয় — কিছু সরানো। তোমার কোডে কোন ফিচারটা ব্যবহার হয় না? সেটা সরাও। কোন ডিপেন্ডেন্সি অপ্রয়োজনীয়? বাদ দাও। উল্টো চিন্তা — "কী সরালে সিস্টেম আরও সহজ হবে?"</div></div>

<div class="dialogue">ফাতরাত আল-ফারাগ। আল্লাহ কুরআনে বলেন: <em>"যখন আমি তোমার জন্য স্থান প্রশস্ত করি, তখন তুমি সংকুচিত হয়ো না।"</em> (এটি শারহ আল-সদরের প্যারাফ্রেজ — ৯৪:৫-৬ এর ভিত্তিতে।) ফাতরাত আল-ফারাগ মানে স্থান খালি করা — ভিত্তিতে নামার জন্য, উল্টো চিন্তার জন্য, অপ্রয়োজনীয় সরানোর জন্য। সুলতান যখন চুল্লি খালি করেন, তখনই নতুন লোহা রাখতে পারেন। তোমার মন যখন অ্যানালজিতে ভরা, তখন ফার্স্ট প্রিন্সিপাল জায়গা পায় না। খালি করো — স্থান তৈরি হবে। আল্লাহ বলেন: <em>"আমি তোমার বোঝা খুলে দেব যা তোমার পিঠ ভেঙে দিচ্ছিল।"</em> (৯৪:২-৩ প্যারাফ্রেজ।) অ্যানালজি একটা বোঝা — সেটা খুলে দাও, ফার্স্ট প্রিন্সিপাল হালকা হবে।</div>
<div class="dialogue en">Fatrat al-faragh. Allah says in the Quran (paraphrased): <em>"When I expand space for you, be not constricted."</em> (Based on 94:5-6.) Fatrat al-faragh means making space — to descend to the foundation, to think inverted, to remove the unnecessary. When Sultan clears the furnace, only then can new iron go in. When your mind is full of analogy, first principles find no place. Clear it — space will open. Allah says: <em>"I will remove your burden that was breaking your back."</em> (94:2-3 paraphrased.) Analogy is a burden — release it, first principles will lighten.</div>

<div class="secret-box">⚙️ অ্যানালজি দিয়ে কপি করো না — ভিত্তিতে নেমে প্রশ্ন করো: 'এটা কেন কাজ করে?' আর সরাসরি সমাধান না পেলে উল্টে দাও: 'কীভাবে এটা ব্যর্থ হবে?' সেই উত্তর এড়াও। প্রিমর্টেম > পোস্টমর্টেম।</div>`
});
