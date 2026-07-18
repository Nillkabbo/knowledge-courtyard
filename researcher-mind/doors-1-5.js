// ════════════════════════════════════════
// গবেষকের মন — DOORS 1-5
// The Researcher's Mind: Curiosity → Critical Thinking
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: CURIOSITY — THE CHILD'S MIND ══
doors.push({
  num:1, icon:"🌱", color:"#a78bfa", name:"শিশুর প্রশ্ন",
  subtitle:"The Child's Question", tech:"Curiosity as the Root of Research",
  spirit:"ইলম — জ্ঞান অন্বেষণ, এটি স্বভাবজাত",
  secret:"গবেষক হওয়া মানে নতুন কিছু শেখা নয় — ভুলে যাওয়া কৌতূহল ফিরে পাওয়া। প্রতিটা শিশু গবেষক। সমাজ সেটা বন্ধ করে দেয়। তোমার কাজ হলো আবার খুলে দেওয়া।",
  recall:{
    q:"নুসরাত কেন তোমাকে জিনিস সরানোর আগে প্রশ্ন করতে বললেন?",
    qen:"Why did Nusrat tell you to ask before picking anything up?",
    a:"কারণ যে প্রশ্ন করে না সে শেখে না। যে শুধু উত্তর মুখস্থ করে সে গবেষক হয় না। কৌতূহল হলো জিজ্ঞাসার আগুন — গবেষণা হলো সেই আগুনে রান্না করা খাবার। আগুন ছাড়া রান্না হয় না।",
    aen:"Because one who doesn't ask, doesn't learn. One who only memorizes answers becomes a researcher of nothing. Curiosity is the fire of inquiry — research is the food cooked on that fire. Without fire, no cooking."
  },
  story:`
<p class="scene-setting">প্রথম দরজা। তুমি ভেবেছিলে এখানে কোনো প্রাসাদ থাকবে, কোনো বিশাল গ্রন্থাগার। কিন্তু সামনে একটা ছোট্ট উঠোন। মাটির দেয়াল। ছাদে তুষের চাল। একটা বুড়ো আম গাছ। তার তলায় বসে আছেন এক বয়স্ক মহিলা — নুসরাত। তাঁর হাতে একটা ছেঁড়া খাতা, চশমা নাকের ডগায়, পাশে একটা থালা ভর্তি কাঁচা আম। গন্ধ — কাঁচা আমের টক-মিষ্টি গন্ধ, ধুলোর শুকনো গন্ধ, এবং পুরনো কাগজের ছাতা-ছাতা ভাব।</p>
<p class="scene-setting en">The first door. You expected a palace, a vast library. But before you: a small courtyard. Mud walls. Straw roof. An old mango tree. Beneath it sits an elderly woman — Nusrat. A torn notebook in her hand, glasses on the tip of her nose, beside her a plate of raw mangoes. Smell — the sour-sweet of raw mango, dry dust, and old paper.</p>

<div class="dialogue">নুসরাত তোমাকে দেখলেন। হাসলেন। বললেন: "বসো।" তুমি বসলে। উঠোনে, মাটিতে। "তুমি কেন এসেছ?" তুমি বললে — "আমি গবেষক হতে চাই।" নুসরাত একটু থামলেন। তারপর একটা কাঁচা আম তুলে তোমার হাতে দিলেন। "এটা ধরো। কিন্তু খাওয়ার আগে আমাকে বলো — এই আম কেন টক?"</div>
<div class="dialogue en">Nusrat saw you. Smiled. Said: "Sit." You sat. On the ground, in the courtyard. "Why have you come?" You said — "I want to become a researcher." Nusrat paused. Then picked up a raw mango and placed it in your hand. "Hold this. But before you eat — tell me — why is this mango sour?"</div>

<div class="dialogue">তুমি ভাবলে। "কারণ... কাঁচা আম টক হয়।" নুসরাত মাথা নাড়লেন। "সেটা তো জানি। আমি জিজ্ঞেস করেছি — কেন? এর ভেতরে কী আছে যেটা টক করে? গাছ কেন এটা টক বানায়? পাকলে মিষ্টি হয় কেন? আর কোন ফল পাকলে টক হয়?"</div>
<div class="dialogue en">You thought. "Because... raw mangoes are sour." Nusrat shook her head. "I know that. I asked — why? What's inside that makes it sour? Why does the tree make it sour? Why does it become sweet when ripe? And which other fruit becomes sour when ripe?"</div>

<div class="dialogue">তুমি চুপ করে গেলে। এগুলো তুমি কখনো ভাবোনি। নুসরাত বললেন: "এটাই প্রথম পাঠ। তুমি একজন ডেভেলপার। তুমি কোড লেখো, বিল্ড করো, ডিপ্লয় করো। কিন্তু কখন শেষবার কোনো কোড লেখার সময় ভেবেছ — এটা কেন কাজ করে? শুধু কীভাবে নয় — কেন? সেই কেন-এর জায়গা থেকেই গবেষণা শুরু হয়।"</div>
<div class="dialogue en">You went quiet. You'd never thought about these. Nusrat said: "This is the first lesson. You're a developer. You write code, build, deploy. But when did you last write code and wonder — why does this work? Not how — why? Research begins from that 'why'."</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">বয়স ৪</div><div class="sc-label">দিনে অনেক প্রশ্ন (~২০০-৪০০ বলা হয়)</div></div>
<div class="stat-card"><div class="sc-num">বয়স ৬</div><div class="sc-label">প্রায় অর্ধেকে নেমেছে</div></div>
<div class="stat-card"><div class="sc-num">বয়স ১১</div><div class="sc-label">আরও কম</div></div>
<div class="stat-card"><div class="sc-num">২৫+</div><div class="sc-label">দিনে খুব কম প্রশ্ন</div></div>
</div>

<div class="callout info"><span class="co-icon">📉</span><div>সঠিক সংখ্যা নিয়ে মতভেদ আছে, কিন্তু মূল পয়েন্ট বদলায় না: <strong>বয়সের সাথে কৌতূহল কমে</strong>। বিদ্যালয় কৌতূহলকে বদলে দেয় প্রশ্ন দিয়ে নয় — উত্তর দিয়ে। পরীক্ষা উত্তর চায়, জিজ্ঞাসা চায় না। গবেষক হলো সে, যার কৌতূহল কমেনি।</div></div>

<table class="kv-table"><tr><th>ডেভেলপার মাইন্ডসেট</th><th>গবেষক মাইন্ডসেট</th></tr>
<tr><td>"এটা কীভাবে কাজ করে?"</td><td>"এটা <em>কেন</em> কাজ করে?"</td></tr>
<tr><td>"এটা কীভাবে বানাবো?"</td><td>"এটা কি সবচেয়ে ভালো উপায়?"</td></tr>
<tr><td>"কাজ হলেই হলো।"</td><td>"ভিন্নভাবে করলে কী হয়? এটা কি সত্যিই সত্য, নাকি সবাই এটাই বিশ্বাস করে?"</td></tr></table>

<div class="dialogue">তুমি বললে — "কিন্তু আমি তো কৌতূহলী। আমি তো নতুন প্রযুক্তি শিখি।" নুসরাত আবার মাথা নাড়লেন। "নতুন জিনিস শেখা কৌতূহল নয় — সেটা FOMO। ভয় যে পিছিয়ে যাবে। কৌতূহল হলো যখন তুমি ভাবো — এই জিনিসটার পেছনের নীতিটা কী? এটা আমাকে কীভাবে ভাবায়? কোথায় এটা ভেঙে যায়? কীভাবে ভাঙবো না জেনেও কৌতূহল নিয়ে দেখি?"</div>
<div class="dialogue en">You said — "But I am curious. I learn new tech." Nusrat shook her head again. "Learning new things isn't curiosity — it's FOMO. Fear of being left behind. Curiosity is when you think — what's the principle behind this? How does it make me think? Where does it break? How do I look at it with curiosity even without knowing how to break it?"</div>

<div class="dialogue">ইলম — জ্ঞান। কুরআনে প্রথম অবতীর্ণ শব্দ: ইকরা — পড়ো। পড়া মানে শুধু বই পড়া নয়। পড়া মানে — দেখা, চিন্তা করা, প্রশ্ন করা। আল্লাহ বলেন: যে জ্ঞান দেওয়া হয়েছে তাকে, আর যাকে দেওয়া হয়নি — তারা সমান নয়। কিন্তু জ্ঞান আসে জিজ্ঞাসা থেকে। জিজ্ঞাসা আসে কৌতূহল থেকে। আর কৌতূহল — সেটা তোমার ভেতরে আছে। সবসময় ছিল। তুমি শুধু ভুলে গেছ।</div>
<div class="dialogue en">Ilm — knowledge. The first word revealed in the Quran: Iqra — Read. Reading doesn't mean only books. It means — seeing, thinking, questioning. Allah says: those given knowledge and those not given it are not equal. But knowledge comes from inquiry. Inquiry comes from curiosity. And curiosity — it's already inside you. It always was. You just forgot.</div>

<div class="secret-box">🌱 গবেষক হওয়া মানে নতুন কিছু শেখা নয় — ভুলে যাওয়া কৌতূহল ফিরে পাওয়া। প্রতিদিন একটা কেন জিজ্ঞেস করো — এমন একটা কেন যা কেউ জিজ্ঞেস করে না।</div>`
});

// ══ DOOR 2: FORMULATING QUESTIONS ══
doors.push({
  num:2, icon:"🎯", color:"#c4b5fd", name:"প্রশ্নের কারিগরি",
  subtitle:"The Craft of Questions", tech:"Formulating Research Questions",
  spirit:"ফাতহা — খোলা, উন্মোচন করা",
  secret:"ভালো গবেষণা ভালো উত্তর থেকে আসে না। ভালো প্রশ্ন থেকে আসে। একটা প্রশ্ন যদি সবাই জিজ্ঞেস করছে — সেটা গবেষণার মূল্য কম। একটা প্রশ্ন যদি কেউ জিজ্ঞেস করেনি কিন্তু উত্তর দিলে অনেককে সাহায্য করে — সেটা সোনার খনি।",
  recall:{
    q:"ইমরান কেন খোলা প্রশ্নকে বন্ধ প্রশ্নের চেয়ে দামি বললেন?",
    qen:"Why did Imran say open questions are worth more than closed ones?",
    a:"কারণ বন্ধ প্রশ্নের উত্তর একটা — হ্যাঁ বা না। খোলা প্রশ্নের উত্তর অনেক, আর প্রতিটা উত্তর নতুন প্রশ্ন জন্ম দেয়। গবেষণা হলো খোলা প্রশ্নের পিছনে দৌড় — বন্ধ প্রশ্নের উত্তর মুখস্থ করা নয়।",
    aen:"Because closed questions have one answer — yes or no. Open questions have many, and each answer births new questions. Research is chasing open questions — not memorizing answers to closed ones."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দরজা। একটা কারিগরখানা। দেয়ালে ঝোলানো হাতুড়ি, ছেনি, করাত। মাঝখানে একটা বিশাল পাথরের টেবিল — তার উপর অসমাপ্ত ভাস্কর্য। কারিগর ইমরান হাতে ছেনি নিয়ে দাঁড়িয়ে — বয়স্ক, পেশিশক্তি এখনো আছে, চোখে নিপুণতা। পাথরের গন্ধ, ধুলোর শুকনো ভাব, হাতুড়ির ধাতব টং-টং শব্দ।</p>
<p class="scene-setting en">The second door. A workshop. Hammers, chisels, saws hanging on walls. In the center: a vast stone table — on it, an unfinished sculpture. Craftsman Imran stands with chisel in hand — older, still strong, precision in his eyes. Smell of stone, dry dust, the metallic ting-ting of hammerstrikes.</p>

<div class="dialogue">ইমরান তোমাকে দেখলেন। "নুসরাত তোমাকে কৌতূহল শিখিয়েছেন। ভালো। কিন্তু কৌতূহল একা যথেষ্ট নয়। কৌতূহল হলো কাঁচা পাথর। সেই পাথর থেকে ভাস্কর্য বানাতে হবে — সেই ভাস্কর্যের নাম: প্রশ্ন।" তিনি টেবিলের একটা পাথরে আঙুল দিলেন। "দেখো — এই পাথরটায় কী লুকানো আছে? কিছুই না। কিন্তু আমি যখন ছেনি মারি, তখন একটা আকৃতি বের হয়। প্রশ্নও তেমনি — কৌতূহল থেকে তৈরি করতে হয়।"</div>
<div class="dialogue en">Imran saw you. "Nusrat taught you curiosity. Good. But curiosity alone is not enough. Curiosity is raw stone. From that stone you must sculpt — and the sculpture's name is: question." He pointed at a stone on the table. "Look — what's hidden in this stone? Nothing. But when I strike with chisel, a shape emerges. Questions too — must be crafted from curiosity."</div>

<div class="dialogue">"শুনো," ইমরান বললেন। "আমি যখন তরুণ ছিলাম, আমি ভাবতাম — ভালো প্রশ্ন মানে কঠিন প্রশ্ন। যে প্রশ্নের উত্তর কেউ জানে না, সেটাই ভালো। আমি ভুল ভাবতাম।" তিনি একটা হাতুড়ি তুলে পাথরে মারলেন — ভেঙে গেল। "এই পাথরটা আমি ভাঙলাম কারণ আমি জিজ্ঞেস করেছিলাম — এর ভেতরে কী আছে? কিন্তু সঠিক প্রশ্ন ছিল — এই পাথর দিয়ে কী বানানো যায়? ভুল প্রশ্ন মানে নষ্ট পাথর। সঠিক প্রশ্ন মানে ভাস্কর্য।"</div>
<div class="dialogue en">"Listen," Imran said. "When I was young, I thought — a good question means a hard question. One nobody knows the answer to. I was wrong." He picked up a hammer, struck a stone — it shattered. "I broke this stone because I asked — what's inside? But the right question was — what can be made from this stone? Wrong question means wasted stone. Right question means sculpture."</div>

<table class="kv-table"><tr><th>ব্লুম স্তর</th><th>উদাহরণ প্রশ্ন</th><th>গবেষণা?</th></tr>
<tr><td class="hl">১. মনে রাখা</td><td>"transformer কী?"</td><td>❌ লুকআপ</td></tr>
<tr><td class="hl">২. বোঝা</td><td>"attention কীভাবে কাজ করে?"</td><td>❌ কম্প্রিহেনশন</td></tr>
<tr><td class="hl">৩. প্রয়োগ</td><td>"attention কি আমার সিস্টেমে ব্যবহার করতে পারি?"</td><td>⚠️ engineering</td></tr>
<tr><td class="hl">৪. বিশ্লেষণ+মূল্যায়ন</td><td>"attention কেন position 128-এর পরে ভাঙে? এই সীমাবদ্ধতা মৌলিক নাকি accidental?"</td><td>✅ গবেষণা</td></tr>
<tr><td class="hl">৫. সৃষ্টি</td><td>"এই সীমাবদ্ধতা কাটিয়ে ওঠে এমন নতুন mechanism বানাতে পারি?"</td><td>✅ সর্বোচ্চ স্তর</td></tr></table>

<div class="callout tip"><span class="co-icon">🧪</span><div><strong>ভালো প্রশ্নের ৩টা পরীক্ষা — তিনটাই পাস করতে হবে:</strong></div></div>
<ul class="checklist">
<li><strong>Novelty (নতুনত্ব):</strong> উত্তর কি আগে কেউ দিয়েছে? Google Scholar-এ সার্চ করো — উত্তর থাকলে প্রশ্ন নতুন নয়।</li>
<li><strong>Significance (গুরুত্ব):</strong> উত্তর জানলে কে উপকৃত হবে? "শুধু আমি" = দুর্বল; "পুরো ফিল্ড" = শক্তিশালী।</li>
<li><strong>Feasibility (সাধ্যতা):</strong> উত্তর দেওয়ার উপায় আছে — ডেটা, কম্পিউট, সময়? না থাকলে সেটা স্বপ্ন, গবেষণা নয়।</li>
</ul>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ দুর্বল প্রশ্ন</div>"LLM কীভাবে কাজ করে?" — খুব বড়। উত্তর আছে (অনেক পেপার)। নতুন নয়। গবেষণা নয়, টিউটোরিয়াল।<br><br>"আমি কি LLM দিয়ে চ্যাটবট বানাতে পারি?" — হ্যাঁ পারো। সবাই পারে। নতুন কিছু নেই।<br><br>"কোন LLM সবচেয়ে ভালো?" — এটা benchmark, গবেষণা নয়। মাসে বদলায়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ শক্তিশালী প্রশ্ন</div>"কেন LLM সসীম প্রসঙ্গে মাঝখানের তথ্য উপেক্ষা করে (lost in the middle)?" — নির্দিষ্ট। উত্তর আংশিক আছে কিন্তু সম্পূর্ণ নয়। উত্তর দিলে NLP কমিউনিটি উপকৃত হয়। পরীক্ষা করা যায়।<br><br>"RAG সিস্টেমে retrieval ব্যর্থতার কারণ কী — model নাকি index?" — পরিমাপযোগ্য। ফিল্ডে গুরুত্বপূর্ণ। সমাধানযোগ্য।</div>
</div>

<div class="dialogue">ফাতহা — খোলা। কুরআনের প্রথম সূরা: আল-ফাতিহা — যে খোলে। গবেষণাও একটা খোলা। তুমি একটা বন্ধ দরজার সামনে দাঁড়াও — অজানা। প্রশ্ন হলো সেই চাবি যেটা দরজা খোলে। কিন্তু ভুল চাবি — দরজা খোলে না, তালা নষ্ট করে। সঠিক চাবি — সহজে খোলে, এবং ভেতরে কী আছে সেটা দেখায়। তোমার প্রশ্ন হলো চাবি। যত তীক্ষ্ণ চাবি, তত গভীর খোলা।</div>
<div class="dialogue en">Fatha — opening. The first surah of the Quran: Al-Fatihah — the opener. Research too is an opening. You stand before a closed door — the unknown. The question is the key that opens it. But the wrong key — doesn't open, breaks the lock. The right key — opens easily, reveals what's inside. Your question is the key. The sharper the key, the deeper the opening.</div>

<div class="secret-box">🎯 ভালো গবেষক ভালো উত্তর খোঁজে না — ভালো প্রশ্ন বানায়। প্রশ্নটা নতুন, গুরুত্বপূর্ণ, এবং সমাধানযোগ্য হতে হবে — তিনই। একটা বাদ দিলেই নষ্ট।</div>`
});

// ══ DOOR 3: READING PAPERS — THE WEIGHT OF LEAVES ══
doors.push({
  num:3, icon:"📖", color:"#fbbf24", name:"পাতার ভার",
  subtitle:"The Weight of Leaves", tech:"Reading Research Papers",
  spirit:"তাদবির — গভীরভাবে চিন্তা করা, পরিকল্পনা",
  secret:"পেপার পড়া বই পড়ার মতো নয়। পেপার হলো স্তরযুক্ত — title, abstract, intro, method, results। প্রথমবার সব পড়ো না। তিন-পাস পদ্ধতি: স্কিম → স্ট্রাকচার → গভীর। তারপর গাছ হয়ে যায়।",
  recall:{
    q:"সালমা কেন তোমাকে এক পেপার তিনবার পড়তে বললেন?",
    qen:"Why did Salma tell you to read one paper three times?",
    a:"কারণ পেপার একবারে বোঝা যায় না। প্রথমবার — স্কিম, বুঝো কী নিয়ে। দ্বিতীয়বার — স্ট্রাকচার, বুঝো কীভাবে। তৃতীয়বার — গভীর, বুঝো কেন এবং কী মূল্য। একবার পড়লে মাথায় থাকে না। তিনবার পড়লে শিকড় হয়।",
    aen:"Because a paper can't be understood in one pass. First — skim, understand what. Second — structure, understand how. Third — deep, understand why and what value. One pass doesn't stick. Three passes become roots."
  },
  story:`
<p class="scene-setting">তৃতীয় দরজা। একটা পাহাড়ি গুহা — কিন্তু ভেতরে আলো। দেয়ালে তাকে তাকে সাজানো পাতা — হাজার হাজার। কিছু পাতা পুরনো, হলদেটে। কিছু নতুন, সাদা। মেঝেতে বসে আছেন সালমা — শান্ত মুখ, চোখে এক ধরনের ভারী গভীরতা, হাতে একটা পাতা। পাতার কালির গন্ধ, পুরনো কাগজের শুকনো ঘ্রাণ, গুহার ঠান্ডা ভেজা বাতাস।</p>
<p class="scene-setting en">The third door. A mountain cave — but lit inside. Walls lined with shelves of papers — thousands. Some old, yellowed. Some new, white. On the floor sits Salma — calm face, eyes with a heavy depth, a paper in hand. Smell of ink, old paper, the cold damp air of the cave.</p>

<div class="dialogue">সালমা তোমাকে ইশারা করলেন — বসতে। তুমি বসলে। "ইমরান তোমাকে প্রশ্ন বানাতে শিখিয়েছেন। ভালো। কিন্তু প্রশ্ন বানানোর আগে তোমাকে জানতে হবে — অন্যরা কী প্রশ্ন বানিয়েছে। সেটা থাকে এই পাতাগুলোতে।" তিনি দেয়ালের দিকে ইশারা করলেন। "এগুলো গবেষণা পেপার। প্রতিটা পাতা একটা মানুষের বছরের কাজ। কিন্তু তুমি যদি এটাকে বই মনে করো — প্রথম পৃষ্ঠা থেকে শেষ পর্যন্ত পড়তে গেলে — তুমি ডুবে মরবে।"</div>
<div class="dialogue en">Salma gestured — sit. You sat. "Imran taught you to craft questions. Good. But before crafting, you must know — what questions others have crafted. Those live in these papers." She gestured at the walls. "These are research papers. Each paper is a person's year of work. But if you treat them like books — reading start to finish — you'll drown."</div>

<div class="dialogue">"আমি তোমাকে আমার ভুলের কথা বলি," সালমা বললেন। "প্রথমবার যখন আমি একটা পেপার পড়তে গেলাম, আমি প্রথম লাইন থেকে শুরু করলাম। তিন ঘণ্টা পরে আমি পৃষ্ঠা ৩-এ। কিছু বুঝতে পারছি না। মাথা ব্যথা। আমি ভেঙে পড়লাম। ভাবলাম — আমি বোকা।" তিনি থামলেন। "কিন্তু আমি বোকা ছিলাম না। আমি ভুল পদ্ধতিতে পড়ছিলাম। পেপার পড়ার নিজস্ব ভাষা আছে, নিজস্ব কাঠামো আছে। সেটা শিখতে হয়।"</div>
<div class="dialogue en">"Let me tell you my mistake," Salma said. "The first time I tried to read a paper, I started from the first line. Three hours later, I was on page 3. Understood nothing. Headache. I broke. I thought — I'm stupid." She paused. "But I wasn't stupid. I was reading wrong. Papers have their own language, their own structure. You have to learn it."</div>

<div class="callout info"><span class="co-icon">📚</span><div><strong>থ্রি-পাস পদ্ধতি</strong> — S. Keshav, <em>"How to Read a Paper"</em> (ACM SIGCOMM CCR, 2007)। CS-এর সবচেয়ে canonical পেপার-পড়ার পদ্ধতি।</div></div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">পাস ১ · ৫-১০ মিনিট</div><div class="tl-title">👀 স্কিম</div><div class="tl-body">পড়ো Title, Abstract, Introduction; দেখো Figures/Tables; পড়ো Conclusion-এর শেষ প্যারা। <strong>সিদ্ধান্ত: এটা কি আমার জন্য?</strong> না হলে ফেলে দাও — সময় নষ্ট কোরো না।</div></div>
<div class="tl-step"><div class="tl-when">পাস ২ · ৩০-৬০ মিনিট</div><div class="tl-title">🗂️ স্ট্রাকচার</div><div class="tl-body">পুরো পেপার পড়ো, কিন্তু গভীরে নয়। বোঝো সমস্যা/সমাধান/ফলাফল; কঠিন সেকশন চিহ্নিত করো। <strong>মূল দাবি কী?</strong> না বুঝলে reference-এর base পেপার পড়ো।</div></div>
<div class="tl-step"><div class="tl-when">পাস ৩ · ২-৪ ঘণ্টা (কয়েক দিনে)</div><div class="tl-title">🔬 গভীর</div><div class="tl-body">শুধু কঠিন সেকশন; প্রতিটা সমীকরণ ও পরীক্ষা বোঝো। প্রশ্ন করো — ফলাফল কি সঠিক? আমি কি ভিন্নভাবে করতাম? <strong>আমার গবেষণায় কীভাবে ব্যবহার করবো?</strong></div></div>
</div>

<table class="kv-table"><tr><th>সেকশন</th><th>কাজ</th></tr>
<tr><td class="hl">Title</td><td>এটা কী নিয়ে?</td></tr>
<tr><td class="hl">Abstract</td><td>৩০ সেকেন্ডে পুরো পেপারের সারাংশ</td></tr>
<tr><td class="hl">Intro</td><td>কেন এই কাজ দরকার? আগে কী হয়েছে?</td></tr>
<tr><td class="hl">Method</td><td>কীভাবে করেছি — পুনরায় করার জন্য</td></tr>
<tr><td class="hl">Results</td><td>কী পেয়েছি — সংখ্যা, গ্রাফ</td></tr>
<tr><td class="hl">Discussion</td><td>এর মানে কী? সীমাবদ্ধতা কী?</td></tr>
<tr><td class="hl">Conclusion</td><td>এক লাইনে — কী শিখলাম</td></tr></table>

<div class="dialogue">"আরেকটা কথা," সালমা বললেন। "তুমি যখন পেপার পড়ো, তুমি শুধু জ্ঞান নও নিচ্ছ — তুমি একটা কথোপকথনে যোগ দিচ্ছ। প্রতিটা পেপার আগের পেপারের জবাব। প্রতিটা পেপার ভবিষ্যতের পেপারের আমন্ত্রণ। তুমি যখন পড়ো, ভাবো — এই লেখক যদি আমার সামনে বসতেন, আমি কী জিজ্ঞেস করতাম?"</div>
<div class="dialogue en">"One more thing," Salma said. "When you read a paper, you're not just taking knowledge — you're joining a conversation. Each paper is a reply to a previous paper. Each paper is an invitation to future papers. When you read, think — if this author sat before me, what would I ask?"</div>

<div class="dialogue">তাদবির — গভীরভাবে চিন্তা করা। কুরআনে আল্লাহ বলেন: যারা তাদবির করে — গভীরভাবে চিন্তা করে — তারাই বোঝে। পেপার পড়া তাদবির — দ্রুত চোখ চলানো নয়। গভীরে যাওয়া। প্রতিটা বাক্য থামো, ভাবো, প্রশ্ন করো। একটা পেপার যদি ৩ দিনে পড়ো — সেটা শিকড় হবে। এক ঘণ্টায় পড়লে — ধুলো হবে।</div>
<div class="dialogue en">Tadabbur — deep reflection. Allah says: those who do tadabbur — reflect deeply — they understand. Reading papers is tadabbur — not skimming. Go deep. Stop at each sentence, think, question. If you read a paper in 3 days — it becomes root. In one hour — it becomes dust.</div>

<div class="secret-box">📖 পেপার পড়া বই পড়ার মতো নয়। থ্রি-পাস পদ্ধতি: স্কিম → স্ট্রাকচার → গভীর। প্রতিটা পেপার একটা কথোপকথন — তুমি সেই কথায় যোগ দিচ্ছ।</div>`
});

// ══ DOOR 4: CRITICAL THINKING — THE EYE OF DOUBT ══
doors.push({
  num:4, icon:"🔍", color:"#60a5fa", name:"সন্দেহের চোখ",
  subtitle:"The Eye of Doubt", tech:"Critical Thinking & Skepticism",
  spirit:"ইতিবাচক সন্দেহ — সত্যকে যাচাই করা",
  secret:"বিশ্বাস করা বন্ধ করো না — কিন্তু অন্ধভাবে বিশ্বাস করো না। প্রতিটা দাবিকে প্রশ্ন করো। ডেটা দেখো, পরীক্ষা দেখো, সীমাবদ্ধতা দেখো। যে পেপার নিজের সীমাবদ্ধতা স্বীকার করে — সেটা বিশ্বাসযোগ্য। যে বলে সব ঠিক আছে — সেটা সন্দেহজনক।",
  recall:{
    q:"দাউদ কেন তোমাকে সুন্দর ফলাফলকে সন্দেহ করতে বললেন?",
    qen:"Why did Dawud tell you to doubt beautiful results?",
    a:"কারণ যা খুব সুন্দর মনে হয়, তা খুব ভালো হতে পারে — বা খুব বিভ্রান্তিকর হতে পারে। সন্দেহ করা মানে অবিশ্বাস নয়। সন্দেহ মানে — দাবি করা প্রমাণ। যত বড় দাবি, তত বড় প্রমাণ দরকার।",
    aen:"Because what looks too beautiful can be too good — or too misleading. Doubting doesn't mean disbelief. Doubt means — demanding proof. The bigger the claim, the bigger the proof needed."
  },
  story:`
<p class="scene-setting">চতুর্থ দরজা। একটা প্রাসাদের বড় কক্ষ। কিন্তু সবকিছু একটু একটু করে ভুল — ছাদের খিলান একটু বাঁকা, মেঝের টাইলস কিছুটা হেলে আছে, আয়নায় তোমার ছবি একটু বড় দেখায়। মাঝখানে একটা টেবিলে বসে আছেন দাউদ — এক চোখে মোনোকল, হাতে ক্যালিপার, মুখে সূক্ষ্ম হাসি। তাঁর চারপাশে ছড়ানো গ্রাফ, সংখ্যা, মাপকাঠি। কাঠের পলিশের গন্ধ, কাগজের শুকনো শব্দ, দূরে ঘড়ির টিক-টিক।</p>
<p class="scene-setting en">The fourth door. A palace hall. But everything is slightly off — the arches a little crooked, floor tiles tilted, mirrors showing you slightly larger. At a center table sits Dawud — monocle on one eye, calipers in hand, a precise smile. Around him: graphs, numbers, rulers. Smell of wood polish, dry paper, distant ticking clock.</p>

<div class="dialogue">"বসো," দাউদ বললেন। "সালমা তোমাকে পড়তে শিখিয়েছেন। ভালো। কিন্তু পড়তে পারা মানে বিশ্বাস করা নয়।" তিনি একটা গ্রাফ তুলে ধরলেন — সুন্দর, পরিষ্কার রেখা উপরে উঠছে। "এটা কী?" তুমি বললে — "ভালো ফলাফল।" দাউদ হাসলেন। "আসলে এটা cherry-picked ডেটা। তারা ২০টা পরীক্ষা করেছে, ১টাতে ভালো ফল পেয়েছে, সেটা দেখাচ্ছে। বাকি ১৯টা কোথায়?"</div>
<div class="dialogue en">"Sit," Dawud said. "Salma taught you to read. Good. But reading is not believing." He held up a graph — beautiful, clean line going up. "What's this?" You said — "Good results." Dawud smiled. "Actually this is cherry-picked data. They ran 20 experiments, got good results in 1, showing that one. Where are the other 19?"</div>

<div class="dialogue">"আমি যখন তরুণ ছিলাম," দাউদ বললেন, "আমি পেপার পড়ে বিশ্বাস করতাম। big lab, big name, big journal — তাহলে ঠিক আছে। একবার আমি একটা পেপারের ফলাফল আমার কাজে ব্যবহার করলাম। তিন মাস নষ্ট। ফলাফলটা ভুল ছিল। তারা dataset বদলেছিল, কিন্তু পেপারে বলেনি। তখন থেকে আমি শিখলাম — বিশ্বাস করো না, যাচাই করো।"</div>
<div class="dialogue en">"When I was young," Dawud said, "I believed papers. Big lab, big name, big journal — must be right. Once I used a paper's result in my work. Three months wasted. The result was wrong. They'd changed the dataset but not mentioned it. Since then I learned — don't believe, verify."</div>

<div class="callout warn"><span class="co-icon">🔍</span><div><strong>সন্দেহের ৬টা প্রশ্ন — প্রতিটা পেপারে জিজ্ঞেস করো:</strong></div></div>
<ul class="checklist">
<li><strong>ডেটা কোথা থেকে?</strong> কত বড়, কীভাবে সংগ্রহ? ছোট ডেটা = ফলাফল সাধারণীকরণযোগ্য নয়।</li>
<li><strong>Baseline কী?</strong> আগের সেরা method-এর সাথে তুলনা, নাকি দুর্বল/random-এর সাথে? দুর্বল baseline নকল উন্নতি দেখায়।</li>
<li><strong>সংখ্যা কী বলে?</strong> ৯৫% accuracy — dataset কি balanced? ৯৫% class A হলে "সব A" বললেও ৯৫%। precision/recall/F1 দেখো, শুধু accuracy নয়।</li>
<li><strong>Reproducible?</strong> কোড ও ডেটা দিয়েছে? অন্য কেউ পুনরায় করতে পারবে? না পারলে বিশ্বাসযোগ্য নয়।</li>
<li><strong>সীমাবদ্ধতা স্বীকার করেছে?</strong> "no limitations" বলা পেপারই সবচেয়ে বিপজ্জনক।</li>
<li><strong>কে টাকা দিয়েছে?</strong> Sponsor যদি নিজের প্রোডাক্ট বিক্রি করে — ফলাফল পক্ষপাতদুষ্ট হতে পারে।</li>
</ul>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অন্ধ বিশ্বাস</div>"Stanford-এর পেপার, NeurIPS-এ published — তাহলে ঠিক আছে। তারা বলেছে ৯৭% accuracy — তাহলে সত্যি।"<br><br>ভুল। Big name ≠ সঠিক। বড় কনফারেন্সেও ভুল পেপার যায়। সংখ্যা বিশ্বাস করো না — প্রমাণ দেখো।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সন্দেহবাদী পড়া</div>"এই পেপার ৯৭% accuracy দাবি করেছে। কিন্তু dataset কী? কত বড়? baseline কী? কোড আছে? অন্য dataset-এ কাজ করে? সীমাবদ্ধতা কী?" — প্রশ্ন করো, প্রমাণ দাবি করো, নিজে যাচাই করো।</div>
</div>

<div class="dialogue">দাউদ ক্যালিপার তুলে একটা পেপারের সমীকরণ মাপলেন। "দেখো — এই পেপারের math সঠিক। কিন্তু তারা assumption করেছে যে ডেটা normal distribution ফলো করে। বাস্তবে কি তাই? সব ডেটা কি normal? এই assumption ভুল হলে — সম্পূর্ণ ফলাফল ভুল।" তিনি মোনোকল খুললেন। "গবেষক হলো সেই মানুষ যে সৌন্দর্য দেখে মুগ্ধ হয় — কিন্তু তারপর ক্যালিপার দিয়ে মাপে।"</div>
<div class="dialogue en">Dawud picked up calipers, measured a paper's equation. "Look — the math here is correct. But they assumed data follows normal distribution. In reality? Is all data normal? If this assumption is wrong — the entire result is wrong." He removed the monocle. "A researcher is someone who is moved by beauty — but then measures with calipers."</div>

<div class="dialogue">ইতিবাচক সন্দেহ — constructive skepticism। ইসলামে সন্দেহ করা শেখানো হয়েছে — কিন্তু নেতিবাচক নয়। পজিটিভ। হাদিসে আছে: খবর যাচাই করো। কুরআনে আল্লাহ বলেন: যদি কোনো ফাসিক খবর নিয়ে আসে, তবে যাচাই করো। এটা সন্দেহ নয় — এটা সত্যের সম্মান। সত্য এত মূল্যবান যে সেটা যাচাই ছাড়া গ্রহণ করা অসম্মান। গবেষকের সন্দেহ হলো সত্যের প্রতি ভালোবাসার প্রকাশ।</div>
<div class="dialogue en">Constructive skepticism. Islam teaches questioning — not negative, but positive. Hadith: verify news. Allah says: if a sinner brings news, verify it. This isn't doubt — it's respect for truth. Truth is so valuable that accepting it without verification is disrespect. A researcher's doubt is an expression of love for truth.</div>

<div class="secret-box">🔍 বিশ্বাস করা বন্ধ করো না — কিন্তু অন্ধভাবে বিশ্বাস করো না। প্রতিটা দাবির পিছনে প্রমাণ দাবি করো। যত বড় দাবি, তত বড় প্রমাণ।</div>`
});

// ══ DOOR 5: CONNECTING IDEAS — THE WEB OF CONNECTIONS ══
doors.push({
  num:5, icon:"🕸️", color:"#f472b6", name:"সংযোগের জাল",
  subtitle:"The Web of Connections", tech:"Cross-Disciplinary Thinking",
  spirit:"তাফাক্কুর — এক সৃষ্টি থেকে আরেকটায় সম্পর্ক দেখা",
  secret:"সবচেয়ে শক্তিশালী গবেষণা একটা ফিল্ডের ভেতরে নয় — দুটো ফিল্ডের মাঝে। তুমি যা জানো তার সব এক জায়গায়। কিন্তু সেগুলো আলাদা। গবেষক সেই মানুষ যে আলাদা জিনিসগুলো জোড়ে — আর নতুন সত্য দেখে।",
  recall:{
    q:"জাইনব কেন তোমাকে মৌমাছি দেখিয়ে নিউরাল নেটওয়ার্ক বুঝিয়ে দিলেন?",
    qen:"Why did Zainab show you a bee to explain neural networks?",
    a:"কারণ একটা ফিল্ডের নিয়ম অন্য ফিল্ডে প্রযোজ্য হতে পারে। মৌমাছির ঝাঁক কীভাবে সিদ্ধান্ত নেয় — সেটা নিউরনের কাজের মতো। জীববিজ্ঞান আর কম্পিউটার সায়েন্স — আলাদা ফিল্ড, কিন্তু নীতি এক। গবেষক এই সংযোগ দেখে।",
    aen:"Because one field's rules can apply to another. How a bee swarm makes decisions — that's like how neurons work. Biology and CS — different fields, same principle. A researcher sees this connection."
  },
  story:`
<p class="scene-setting">পঞ্চম দরজা। একটা বাগান — কিন্তু অদ্ভুত। এক কোণে ফুল, অন্য কোণে মৌমাছির চাকা, এক কোণে একটা ছোট পুকুরে মাছ, এক কোণে একটা গাছে পাখির বাসা। মাঝখানে মাটিতে বসে আছেন জাইনব — তাঁর চুল পাকা, হাতে একটা ডায়েরী, চোখ কৌতূহলী। তাঁর সামনে মাটিতে আঁকা — দড়ি দিয়ে জুড়ে দেওয়া নানা ছবি। ফুলের গন্ধ, মৌমাছির গুনগুন, পাখির ডাক, পুকুরের ঠান্ডা বাতাস।</p>
<p class="scene-setting en">The fifth door. A garden — but strange. In one corner flowers, another a beehive, another a small pond with fish, another a tree with a bird nest. In the center on the ground sits Zainab — grey hair, a diary in hand, curious eyes. Before her: drawings on the ground — connected by strings. Smell of flowers, buzz of bees, birdsong, cool pond breeze.</p>

<div class="dialogue">জাইনব তোমাকে দেখলেন। "দাউদ তোমাকে সন্দেহ করতে শিখিয়েছেন। ভালো। কিন্তু সন্দেহ একটা চোখ। আরেকটা চোখ লাগবে — যেটা দেখে সংযোগ।" তিনি মাটিতে আঁকা ছবিগুলো দেখালেন। "এটা কী দেখতে পাও?" একটা মৌমাছির ছবি, একটা নিউরনের ছবি, একটা কম্পিউটার নেটওয়ার্কের ছবি — দড়ি দিয়ে জুড়ে।</div>
<div class="dialogue en">Zainab saw you. "Dawud taught you to doubt. Good. But doubt is one eye. You need another — that sees connections." She pointed at the drawings on the ground. "What do you see?" A bee, a neuron, a computer network — connected by string.</div>

<div class="dialogue">"মৌমাছির ঝাঁক কীভাবে সিদ্ধান্ত নেয় কোথায় মধু আছে?" জাইনব জিজ্ঞেস করলেন। "একটা মৌমাছি ফুল খুঁজে পায়, নাচ দিয়ে বাকিদের জানায়। বাকিরা যায়। কিন্তু কোন মৌমাছির নাচ সবচেয়ে কার্যকর? যে সবচেয়ে ভালো মধু খুঁজেছে — তার নাচ দীর্ঘ, জোরালো। ঝাঁক শুধু একটার কথা শোনে না — সবার কথা শোনে, কিন্তু যার সংকেত শক্তিশালী তাকে বেশি গুরুত্ব দেয়।" তিনি নিউরনের ছবি দেখালেন। "এটা কি মৌমাছির মতো নয়?"</div>
<div class="dialogue en">"How does a bee swarm decide where honey is?" Zainab asked. "One bee finds flowers, dances to tell others. Others go. But whose dance is most effective? The one who found the best honey — her dance is longer, stronger. The swarm doesn't listen to one — listens to all, but weights the strongest signal more." She showed the neuron. "Is this not like the bee?"</div>

<table class="kv-table"><tr><th>উৎস ফিল্ড</th><th>ধারণা</th><th>→ কম্পিউটার সায়েন্স</th></tr>
<tr><td class="hl">জীববিজ্ঞান</td><td>মৌমাছির ঝাঁক / মস্তিষ্ক / বিবর্তন / প্রতিরক্ষা</td><td>Neural Nets, Deep Learning, Genetic Algorithms, Anomaly Detection</td></tr>
<tr><td class="hl">পদার্থবিজ্ঞান</td><td>কোয়ান্টাম / তাপগতি / পরিসংখ্যান</td><td>Quantum Computing, Information Theory, ML</td></tr>
<tr><td class="hl">ভাষাবিজ্ঞান</td><td>ব্যাকরণ / অর্থ / প্রসঙ্গ</td><td>Parser Trees, Semantic Embeddings, Context Windows</td></tr>
<tr><td class="hl">মনোবিজ্ঞান</td><td>স্মৃতি / মনোযোগ / শিখন</td><td>Memory Networks, Attention, Reinforcement Learning</td></tr></table>

<div class="callout tip"><span class="co-icon">⚗️</span><div><strong>নতুন গবেষণা জন্মায়:</strong> Field A-এর একটা সমস্যা + Field B-এর একটা সমাধান = নতুন গবেষণা। যেমন — game theory (অর্থনীতি) + ML = GANs; জীববিজ্ঞানের প্রতিরক্ষা + নিরাপত্তা = anomaly detection। তোমার নিজের ক্রসিং কোথায়? যে দুটো জগৎ তুমি একসাথে জানো — সেখানেই তোমার সুবিধা।</div></div>

<div class="dialogue">"কিন্তু সাবধান," জাইনব বললেন। "সংযোগ বানানো আর জোর করে জোড়া লাগানো এক নয়। দুটো জিনিস আছে বলেই সেগুলো যুক্ত হবে না। সংযোগটা গভীর হতে হবে — শুধু surface নয়। মৌমাছি আর নিউরনের সংযোগ গভীর কারণ দুটোরই নিয়ম এক: স্থানীয় সিদ্ধান্ত, গ্লোবাল ফলাফল। কিন্তু যদি বলো মৌমাছি আর গাড়ি — সেটা সংযোগ নয়, অদ্ভুত।"</div>
<div class="dialogue en">"But beware," Zainab said. "Making connections is not the same as forced joining. Two things existing doesn't mean they connect. The connection must be deep — not surface. The bee-neuron connection is deep because both share a rule: local decisions, global outcomes. But if you say bee and car — that's not connection, that's absurdity."</div>

<div class="dialogue">তাফাক্কুর — চিন্তা করা, এক সৃষ্টি থেকে আরেকটায় সম্পর্ক দেখা। কুরআনে আল্লাহ বারবার বলেন: তোমরা কি ভেবে দেখো না? আকাশ কীভাবে বানানো, পাহাড় কীভাবে পুঁতে দেওয়া, মৌমাছি কীভাবে মধু বানায়। আল্লাহ এক সৃষ্টিকে অন্যের সাথে যুক্ত করতে বলেন। কারণ সব সৃষ্টি এক স্রষ্টার — নীতি এক। যে এই সংযোগ দেখে, সে স্রষ্টাকে দেখে। গবেষক তাফাক্কুর করে — আর নতুন সত্য খুঁজে পায়।</div>
<div class="dialogue en">Tafakkur — reflection, seeing relationships between creations. Allah says again and again: do you not reflect? How the sky is built, how mountains are pegged, how bees make honey. Allah asks us to connect one creation to another. Because all creation is from one Creator — the principles are one. One who sees these connections, sees the Creator. A researcher does tafakkur — and discovers new truths.</div>

<div class="secret-box">🕸️ সবচেয়ে বড় গবেষণা এক ফিল্ডের ভেতরে নয় — দুই ফিল্ডের মাঝে। তুমি যা জানো তার সব আলাদা নয় — সব যুক্ত। সংযোগ খোঁজো।</div>`
});

// === MORE DOORS HERE ===
