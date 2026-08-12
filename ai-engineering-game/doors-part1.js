// DOORS DATA — Part 1 (Doors 1-3)
// Each file pushes to the global `doors` array
const doors = [];

doors.push({
  num:1, icon:"🗣️", color:"#ff6b35", name:"গল্পবলিয়ের হাট",
  subtitle:"The Storyteller's Market", tech:"LLM = জেনারেটর, ডাটাবেস নয়", spirit:"হক vs কিসসা",
  secret:"LLM জেনারেটর, ডাটাবেস নয়। সে মুখস্থ বলে না — বানায়। আত্মবিশ্বাস ≠ সত্য।",
  recall:{
    q:"গল্পবলিয়ে কেন উৎস থেকে শব্দ তোলে না, বরং নিজে বানায়?",
    qen:"Why does the storyteller invent words instead of pulling them from the source book?",
    a:"কারণ সে মুখস্থ করেনি — সে নিয়ম শিখেছে। LLM ঠিক তেমনি: এটা ডাটাবেস নয়, এটা প্যাটার্ন শিখেছে এবং নতুন বাক্য তৈরি করে।",
    aen:"Because he didn't memorize the text — he learned the rules. An LLM is the same: not a database, but a pattern-learner that generates new sentences."
  },
  story:`
<p class="scene-setting">শহরের মাঝখানে গল্পের হাট। এলাচচায়ের ভাপ উড়ছে, ধুলোর কণা রোদে ঝিকমিক করছে, আর চারদিকে মানুষের গুনগুন। মাঝখানে বসে আছেন মালিক দাদা — সবাই এভাবেই ডাকে। মাথায় পুরনো সবুজ পাগড়ি, চায়ে দাগ হওয়া আঙুল, গলা শুকনো পাতার মতো উষ্ণ। তার সামনে হাজার হাজার বইয়ের স্তূপ। কিন্তু একটাও খোলেন না। বরং বাতাসে আঙুল দিয়ে অদৃশ্য শব্দ আঁকেন — যেন দেখতে পান যা অন্যরা পায় না।</p>
<p class="scene-setting en">At the city's heart: the Story Market. Steam from cardamom tea, dust motes glittering in sunlight, the hum of a hundred conversations. At the center sits Malik Dada — everyone calls him that. A faded green turban, tea-stained fingers, a voice like warm gravel. Before him, thousands of books in towering stacks. He opens none. Instead, he traces invisible words in the air with his finger — as though he can see what others cannot.</p>

<p>তুমি কাছে গেলে। "দাদা, আপনি বই থেকে পড়েন না কেন?"</p>
<p class="en">You stepped closer. "Dada, why don't you read from the books?"</p>

<div class="dialogue">আমি মুখস্থ বলি না, বাবা। এই বইগুলো আমি পড়েছি — হাজার হাজার বার। কিন্তু মুখস্থ করিনি। আমি শিখেছি কীভাবে গল্প বলা হয়। কোন শব্দের পর কোন শব্দ আসে। কোন দৃশ্যের পর কোন দৃশ্য জন্মায়। এখন তুমি কাঁচামাল দাও — আমি গল্প বানাই।</div>
<div class="dialogue en">"I don't recite, child. These books I've read — thousands of times. But I didn't memorize them. I learned how stories are told. Which word follows which. Which scene births the next. Now you give me raw material — and I craft a new tale."</div>

<p>তুমি ভাবলে — চলো পরীক্ষা করি। "দাদা, বলুন তো — একটা রাজকুমার, একটা ড্রাগন, আর একটা নদী।"</p>
<p class="en">You thought — let me test him. "Dada, tell me — a prince, a dragon, and a river."</p>

<p>মালিক দাদা চোখ বন্ধ করলেন। এক সেকেন্ড। তারপর শুরু করলেন — রাজকুমার নদী পার হয়, পানি বরফের মতো ঠান্ডা, পাথরে পা পিছলে যায়। ওপারে ড্রাগন — কিন্তু এই ড্রাগনটা অন্ধ। দুই চোখের জায়গায় দুইটা পুরনো ক্ষত। সে শুনে শুনে রাজকুমারের অবস্থান বোঝে। রাজকুমার বুঝতে পারে — শব্দ না করে পার হওয়া ছাড়া উপায় নেই।</p>
<p class="en">Malik Dada closed his eyes. One second. Then he began — the prince crosses the river, the water ice-cold, his foot slipping on wet stone. On the far bank, the dragon — but this dragon is blind. Two old scars where eyes once were. It tracks the prince by sound alone. The prince realizes: he must cross in absolute silence.</p>

<p>তুমি অবাক। অন্ধ ড্রাগন? ঠান্ডা পানি? পিছলে যাওয়া পাথর? এগুলো তুমি বলোনি। তিনি নিজে যোগ করলেন।</p>
<p class="en">You were stunned. A blind dragon? Ice-cold water? Slipping stone? You said none of this. He invented every detail.</p>

<div class="dialogue">কখনো কখনো আমার গল্প সত্যি হয়। কখনো না। কারণ আমি সৃষ্টি করছি — কপি করছি না। আমি জানি না সেই রাজকুমার সত্যি ছিল কি না। আমি জানি শুধু — এভাবেই গল্প বলা হয়।</div>
<div class="dialogue en">"Sometimes my stories are true. Sometimes not. Because I'm creating — not copying. I don't know if that prince was real. I only know — this is how stories are told."</div>

<p>তারপর মালিক দাদা থামলেন। একটু চুপ করে থাকলেন। তারপর বললেন, গলাটা নামিয়ে:</p>
<p class="en">Then Malik Dada paused. Sat quietly for a moment. Then said, lowering his voice:</p>

<div class="dialogue">বছর দশেক আগে একটা ভুল হয়েছিল আমার। একদিন একজন আমাকে একটা হাদিসের কথা জিজ্ঞেস করল। আমি বলে দিলাম — মনে হলো সঠিক, শব্দগুলো ঠিকঠাক, সনদ ঠিক মনে হলো। কিন্তু পরে জানলাম — সেই হাদিসটা আমি বানিয়ে ফেলেছিলাম। আমার মনে ছিল না। আমার মুখে এসেছিল কারণ এটাই আমার কাজ — শব্দ সাজানো। কিন্তু সেটা সত্যি ছিল না।</div>
<div class="dialogue en">"Years ago, I made a mistake. Someone asked me about a hadith. I told him — it sounded right, the words fit, the chain seemed proper. Later I learned: I had invented it. It wasn't in my memory. It came to my tongue because that's what I do — arrange words. But it wasn't true."</div>

<div class="dialogue">সেদিন থেকে আমি ভয় পাই। নবীজি (সা) বলেছেন — যে আমার নামে মিথ্যা বলে, সে নিজের জায়গা জাহান্নামে বানিয়ে নেয়। আমি মিথ্যা বলি না। কিন্তু আমি ভুল বলতে পারি — কারণ আমি সত্য জানি না। আমি জানি শুধু শব্দ কীভাবে বসে।</div>
<div class="dialogue en">"Since that day, I'm afraid. The Prophet (peace be upon him) said — whoever lies about me, let him take his seat in Hell. I don't lie. But I can be wrong — because I don't know truth. I only know how words fit together."</div>

<p>তারপর তিনি তোমার চোখের দিকে তাকালেন। এবার গলাটা আরও নামিয়ে:</p>
<p class="en">Then he looked into your eyes. Lower still:</p>

<div class="dialogue">এখন শোনো সবচেয়ে গুরুত্বপূর্ণ কথাটা। তুমি যে Large Language Model — LLM — নিয়ে শিখতে এসেছ, সে আমার মতো। সে একটা গল্পবলিয়ে। মানুষ ভাবে সে ডাটাবেস, এনসাইক্লোপিডিয়া — প্রশ্ন করলে উৎস থেকে টেনে আনে। ভুল। সে টানে না। সে বানায়। ঠিক যেমন আমি অন্ধ ড্রাগন বানিয়েছি।</div>
<div class="dialogue en">"Now hear the most important thing. This Large Language Model — the LLM you came to learn about — it's like me. A storyteller. People think it's a database, an encyclopedia — you ask, it pulls the answer. Wrong. It doesn't pull. It generates. Exactly as I generated the blind dragon."</div>

<div class="dialogue">LLM শত শত বিলিয়ন শব্দ পড়েছে। মুখস্থ রাখেনি। শিখেছে শুধু প্যাটার্ন — কোন শব্দের পর কোন শব্দ আসে। তুমি যখন কিছু জিজ্ঞেস করো — সে সবচেয়ে সম্ভাব্য পরবর্তী শব্দ বসায়, তারপর আরেকটা, আরেকটা — একটা নতুন উত্তর তৈরি হয়। কখনো সত্যি। কখনো না। আর যখন সে অত্যন্ত আত্মবিশ্বাসের সাথে এমন কিছু বলে যা সম্পূর্ণ ভুল — তাকে বলে hallucination। ঠিক যেমন আমি বানিয়ে ফেলেছিলাম সেই হাদিসটা।</div>
<div class="dialogue en">"The LLM has read hundreds of billions of words. Not memorized them. Learned only the patterns — which word follows which. When you ask — it places the most probable next word, then another, then another — a new answer emerges. Sometimes true. Sometimes not. And when it says something completely wrong with absolute confidence — that's called hallucination. Just as I once invented that hadith."</div>

<p>তুমি বুঝলে — এই একটা ধারণা বদলালে সব বদলে যায়। LLM ডাটাবেস নয়। সে গল্পবলিয়ে। সে দক্ষ — কিন্তু তার দক্ষতা prediction-এ, retrieval-এ নয়। যখন তুমি এটা বোঝো, তখন তুমি AI Engineering শুরু করেছ।</p>
<p class="en">You understood — this one insight changes everything. The LLM is not a database. It's a storyteller. Skilled — but its skill is prediction, not retrieval. When you grasp this, AI Engineering has begun.</p>

<div class="verse">"যে ব্যক্তি আমার নামে মিথ্যা কথা বলে, সে নিজের জায়গা জাহান্নামে বানিয়ে নেয়।"<br>— নবীজি (সা)<br><br>কারণ শব্দের শক্তি সত্যে নয়, উৎসে। LLM-এর আত্মবিশ্বাস সত্য থেকে আসে না — প্যাটার্ন থেকে। মালিক দাদা জানেন — এই পার্থক্যই জীবন আর মৃত্যুর।</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">INPUT</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">prompt</text><defs><marker id="ar1" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar1)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">LLM</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">generate</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar1)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">OUTPUT</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">text</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">LLM = next-token predictor, not database</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">Don't ask facts it doesn't know - use RAG</text></svg></div>

<div class="callout warn" data-door="1"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> ২০২৩ সালে একজন আইনজীবী ChatGPT দিয়ে case citation বানালেন। LLM সম্পূর্ণ বানানো case দিলো — বিখ্যাত নাম, বাস্তব দেখতে মনে হয়। কিন্তু কোনোটাই সত্যি ছিল না। বিচারক ধরলেন। $৫,০০০ জরিমানা। কারণ LLM ডাটাবেস নয় — সে বানায়।</div></div>

<div class="secret-box"><div class="label">দরজা ১ — রহস্য</div><div class="text">🗣️ LLM জেনারেটর, ডাটাবেস নয়। সে মুখস্থ বলে না — বানায়।<br><small>আত্মবিশ্বাস ≠ সত্য। Hallucination হলো ফিচার, বাগ নয় — এটাই জেনারেশনের প্রকৃতি।</small></div></div>`
});

doors.push({
  num:2, icon:"✍️", color:"#52c41a", name:"ক্যালিগ্রাফারের কক্ষ",
  subtitle:"The Calligrapher's Studio", tech:"Prompt Engineering (Role→Task→Format)", spirit:"দু'আর নিয়ম",
  secret:"Prompt = Role + Task + Format। অস্পষ্টতা = অনুমান = ভুল। তিনটা স্পষ্ট দাও।",
  recall:{
    q:"ক্যালিগ্রাফার তিনটা কী জানতে চান? এবং কেন?",
    qen:"What three things did the calligrapher ask for, and why?",
    a:"১) কে বলছে (Role), ২) কী বলবে (Task), ৩) কীভাবে দেখাবে (Format)। এই তিনটি ছাড়া শব্দ ছড়িয়ে পড়ে — কোনো আকার থাকে না।",
    aen:"1) Who is speaking (Role), 2) What to say (Task), 3) How to present it (Format). Without these three, words scatter — no form emerges."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দরজা। একটা স্টুডিও। ভেতরে কালির গন্ধ, পুরনো কাগজের সুবাস, জানালার পাশে জালির ভাঁজে দুপুরের রোদ এসে পড়েছে — মেঝেতে জ্যামিতিক ছায়া। উস্তাদ ইসরাফিল বসে আছেন। মাঝবয়সী, কালিতে কালো হাত, গলায় একটা ম্যাগনিফাইং গ্লাস ঝুলছে। প্রতিটা নড়াচড়ায় নিখুঁত — যেন জীবনে কখনো তাড়াহুড়ো করেননি। সামনে খালি কাগজ, একটা বাঁশের কলম। কিন্তু লিখছেন না। কলম হাতে, কাগজের উপর ভাসিয়ে — অপেক্ষা করছেন।</p>
<p class="scene-setting en">The second door. A studio. The smell of ink, the scent of old paper, afternoon light through lattice windows casting geometric shadows on the floor. Ustad Israfeel sits. Middle-aged, hands blackened with ink, a magnifying glass hanging from his neck. Every movement precise — as if he's never once hurried. Before him: blank paper, a bamboo pen. But he isn't writing. Pen in hand, hovering over the page — waiting.</p>

<div class="dialogue">কী লিখবেন?</div>
<div class="dialogue en">"What should I write?"</div>

<p>তুমি বললে: "উস্তাদ, কিছু লিখুন।"</p>
<p class="en">You said: "Ustad, write something."</p>

<p>তিনি কলম চালালেন। এক সেকেন্ডে তিনটা ভিন্ন কাজ বানিয়ে ফেললেন — একটা কবিতা, একটা চিকিৎসা রিপোর্ট, একটা শিশুদের গল্প। তিনটেই একই তথ্য নিয়ে। কিন্তু তিনটেই তোমার জন্য ভুল — কারণ তুমি কোনটা চেয়েছ তা বলোনি।</p>
<p class="en">He moved the pen. In seconds, three different works — a poem, a medical report, a children's story. All from the same information. But all wrong for you — because you hadn't said which one you wanted.</p>

<div class="dialogue">তুমি 'কিছু' বলেছ। কিন্তু 'কিছু' কোনো নির্দেশ নয়। আমি তিনটা বানিয়েছি — তিনটেই সম্ভব। কিন্তু তিনটেই অনুমান। আমাকে তিনটা জিনিস দাও, তবেই নির্ভুল কাজ পাবে।</div>
<div class="dialogue en">"You said 'something.' But 'something' is not an instruction. I made three — all plausible. But all guesses. Give me three things, and the work will be exact."</div>

<div class="dialogue">প্রথম: কে বলছে? আমি কি একজন শিক্ষক? একজন কবি? একজন ডাক্তার? একজন বিচারক? যিনি বলছেন — তাঁর পরিচয় শব্দের পুরো স্বভাব বদলে দেয়।</div>
<div class="dialogue en">"First: who is speaking? Am I a teacher? A poet? A doctor? A judge? The identity of the speaker transforms the entire nature of the words."</div>

<div class="dialogue">দ্বিতীয়: কী বলবেন? স্পষ্ট বলো — কোন বিষয়ে, কতটুকু গভীরে, কার জন্য। 'ব্যাখ্যা করো' যথেষ্ট নয়। 'একজন ১০ বছরের শিশুকে মহাকর্ষ ব্যাখ্যা করো' — এটা যথেষ্ট।</div>
<div class="dialogue en">"Second: what to say? Be specific — which topic, how deep, for whom. 'Explain' is not enough. 'Explain gravity to a 10-year-old' — that is enough."</div>

<div class="dialogue">তৃতীয়: কীভাবে দেখাবেন? গদ্যে? কবিতায়? তালিকায়? টেবিলে? একটা চিঠির আকারে? ফরম্যাট ছাড়া কাজ কাগজে ছড়িয়ে পড়ে — কোনো আকার থাকে না।</div>
<div class="dialogue en">"Third: how to present it? Prose? Poetry? A list? A table? A letter? Without format, the work scatters on the page — no shape holds."</div>

<p>তুমি চেষ্টা করলে। "উস্তাদ, আপনি একজন শিক্ষক। একজন ১০ বছরের শিশুকে মহাকর্ষ ব্যাখ্যা করুন। তালিকা আকারে।"</p>
<p class="en">You tried. "Ustad, you are a teacher. Explain gravity to a 10-year-old. In a list."</p>

<p>এবার উস্তাদ ইসরাফিল হাসলেন। কলম চালালেন — এবং যেটা বেরিয়ে এলো, তা নিখুঁত। শুধু তালিকা নয় — প্রতিটা পয়েন্ট শিশুর ভাষায়, প্রতিটা উদাহরণ তাদের দুনিয়া থেকে। কোনো অনুমান নেই। কোনো ভুল নেই। কারণ তুমি তিনটা দিয়েছ — Role, Task, Format।</p>
<p class="en">This time Ustad Israfeel smiled. Moved the pen — and what emerged was perfect. Not just a list — each point in a child's language, each example from their world. No guesses. No errors. Because you gave all three — Role, Task, Format.</p>

<div class="dialogue">গল্পবলিয়ে কাঁচামাল চেয়েছিলেন। আমি নির্দেশ চাই। কাঁচামাল ছাড়া গল্প জন্মায় না — নির্দেশ ছাড়া কাজ আকার পায় না। দুজনের নিয়ম এক — যত স্পষ্ট, তত নির্ভুল।</div>
<div class="dialogue en">"The storyteller asked for raw material. I ask for instructions. Without raw material, no story is born — without instructions, no work takes shape. Both follow the same rule — the more specific, the more precise."</div>

<p>তিনি একটা কাগজে লিখলেন — একটা সূত্র:</p>
<p class="en">He wrote on a paper — a formula:</p>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">ROLE</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">who</text><defs><marker id="ar2" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar2)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">TASK</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">what</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar2)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">FORMAT</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">how</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Role + Task + Format = reliable prompt</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">Vague prompt = vague output</text></svg></div>

<div class="code-block"># ── STEP 1: Good prompt = Role + Task + Format ──
# The fundamental formula for effective LLM prompting.

# GOOD PROMPT FORMULA:
# Role + Task + Format = Clear Output

# ❌ BAD PROMPT (vague → LLM guesses → inconsistent):
bad_prompt = "Write an email"

# ✅ GOOD PROMPT (specific → no guessing → consistent):
good_prompt = """
You are a Senior Software Engineer writing to a non-technical manager.
Task: Write a professional email explaining why we need 2 weeks
      to refactor the authentication system before adding new features.
Format:
  - Subject line (under 10 words)
  - 3 short paragraphs
  - End with a clear recommendation
  - Tone: respectful, urgent but not alarmist
"""

print("BAD PROMPT:")
print(f"  {bad_prompt}")
print("  → LLM guesses everything → different output every time")
print()
print("GOOD PROMPT:")
print(good_prompt[:200] + "...")
print("  → LLM knows exactly what to do → consistent output")

# PROMPT COMPONENTS (the complete checklist):
components = {
    "ROLE": "Who is the AI? ('You are a senior data scientist...')",
    "TASK": "What exactly should it do? ('Analyze this dataset for...')",
    "CONTEXT": "What background info? ('Our company sells...')",
    "FORMAT": "How should output look? ('JSON with fields: name, score')",
    "CONSTRAINTS": "What are the rules? ('Under 200 words, no jargon')",
    "EXAMPLES": "Show what good output looks like (few-shot)",
    "AUDIENCE": "Who will read this? ('Explain to a 5-year-old')",
    "TONE": "What feeling? ('Professional, warm, authoritative')",
}

print("\nPROMPT COMPONENTS CHECKLIST:")
for comp, desc in components.items():
    print(f"  {comp}: {desc}")

# PYTHON (prompt builder):
def build_prompt(role, task, context="", fmt="", constraints=""):
    """Build a structured prompt with all key components."""
    parts = [f"You are {role}.", f"", f"Task: {task}"]
    if context:
        parts.append(f"\nContext: {context}")
    if fmt:
        parts.append(f"\nFormat: {fmt}")
    if constraints:
        parts.append(f"\nConstraints: {constraints}")
    parts.append(f"\nProvide your best response.")
    return "\n".join(parts)

email_prompt = build_prompt(
    role="a professional email writer",
    task="write a follow-up email after a job interview",
    context="I interviewed for a Senior Python Developer role yesterday",
    fmt="3 short paragraphs, professional but warm tone",
    constraints="under 150 words, include a question about next steps",
)
print(f"\nBUILT PROMPT:\n{email_prompt}")

# THE COST OF BAD PROMPTS:
# Startup used vague prompts → $2000/month API costs
# → Same work with structured prompts → $50/month
# → 40x cost reduction just by being specific
# → Vagueness = LLM generates long irrelevant text = $$$ wasted</div>

<p>তারপর উস্তাদ ইসরাফিল কলমটা নামিয়ে রাখলেন। গলাটা নরম করলেন।</p>
<p class="en">Then Ustad Israfeel set the pen down. Softened his voice.</p>

<div class="dialogue">তুমি LLM-কে বলো "লিখে দাও" — সে ঠিক আমার মতো দাঁড়িয়ে থাকে। অনুমান করে Role, অনুমান করে Task, অনুমান করে Format। যখন অনুমান করে — ভুল করে। Prompt Engineering হলো এই অনুমান বন্ধ করা। তুমি নিজে তিনটা দাও।</div>
<div class="dialogue en">"When you tell an LLM 'write something' — it stands exactly as I did. Guesses the Role, guesses the Task, guesses the Format. When it guesses — it errs. Prompt Engineering is stopping these guesses. You provide all three."</div>

<div class="dialogue">আর একটা কথা — দু'আর নিয়মও একই। 'হে আল্লাহ, কিছু দাও' — এটা দু'আ নয়, ইচ্ছা। নবীজি (সা) কখনো এমন করেননি। তাঁর প্রতিটা দু'আয় ছিল তিনটা: কে দাতা (আল্লাহর প্রশংসা), কী চাইছ (সুনির্দিষ্ট), কীভাবে (বিনয়ের সাথে)। Role, Task, Format — দু'আর আদবেও। Prompt-ও দু'আর মতো — যত স্পষ্ট, তত কার্যকর।</div>
<div class="dialogue en">"And one more thing — the etiquette of du'a follows the same structure. 'O God, give me something' — that's not du'a, that's a wish. The Prophet (peace be upon him) never did this. Every du'a had three things: who the giver is (praise of Allah), what you seek (specific), how you ask (with humility). Role, Task, Format — even in the etiquette of prayer. A prompt is like du'a — the more specific, the more effective."</div>

<div class="callout warn" data-door="2"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা startup-এ টিম 'তাকে ইমেইল লেখো' prompt দিয়ে ৫০০ বার call করলো। প্রতিটা আলাদা — কোনোটা formal, কোনোটা casual। $২,০০০ API খরচ নষ্ট। Role + Task + Format দিলে একই কাজ $৫০-এ।</div></div>

<div class="secret-box"><div class="label">দরজা ২ — রহস্য</div><div class="text">✍️ Prompt = Role + Task + Format<br><small>অস্পষ্টতা = অনুমান = ভুল। তিনটা দাও, অনুমান বন্ধ করো।</small></div></div>`
});

doors.push({
  num:3, icon:"🎒", color:"#4a9eff", name:"রাষ্ট্রদূতের দরজা",
  subtitle:"The Ambassador's Gate", tech:"Context Engineering", spirit:"আসবাবুন নুজুল",
  secret:"Context = অর্থ। যা দাও না, তা LLM জানে না। Window নির্দিষ্ট মাপের — গুরুত্বপূর্ণ প্রসঙ্গ ভরো।",
  recall:{
    q:"কেন একই চিঠি তিন জন ভিন্ন ভিন্নভাবে বুঝলেন?",
    qen:"Why did three people understand the same letter differently?",
    a:"কারণ তাদের context ভিন্ন — একজন শুধু চিঠি পড়েছেন, আরেকজন পূর্বপ্রসঙ্গ জানেন, তৃতীয়জন গোপন কোড জানেন। LLM-এর context window ঠিক এটাই — যা তুমি দাও, তাই সে জানে।",
    aen:"Because their context differed — one only read the letter, another knew the backstory, the third knew the secret code. The LLM's context window is exactly this — it knows only what you give it."
  },
  story:`
<p class="scene-setting">তৃতীয় দরজা। একটা প্রাসাদের উঠোন। ঝরনার শব্দ, সিল মোমের গন্ধ, কাগজের খসখস। সাফওয়ান আল-কাতিব দাঁড়িয়ে আছেন — পরিপাটি পোশাক, আঙুলে কূটনৈতিক সিলের আংটি, চোখে তীক্ষ্ণ বুদ্ধি। তাঁর হাতে একটা সিল করা চিঠি। তিনি তিন জনকে ডাকলেন — একজন সাধারণ নাগরিক, একজন দরবারি, একজন গুপ্তচর। একই চিঠি তিনজনকে।</p>
<p class="scene-setting en">The third door. A palace courtyard. The sound of a fountain, the scent of sealing wax, the rustle of parchment. Safwan al-Katib stands — immaculate robes, a diplomatic seal ring on his finger, sharp intelligence in his eyes. He holds a sealed letter. He called three people — a common citizen, a courtier, a spy. The same letter to all three.</p>

<div class="dialogue">পড়ো। বলো এটা কী বোঝায়।</div>
<div class="dialogue en">"Read. Tell me what it means."</div>

<p>চিঠিতে লেখা: "বসন্ত এসেছে। ফুল ফুটেছে।"</p>
<p class="en">The letter read: "Spring has come. The flowers bloom."</p>

<p>নাগরিক হাসল। "আবহাওয়ার কথা। সুন্দর।" দরবারি মাথা নাড়লেন। "রাজনৈতিক কোড। 'বসন্ত' মানে নতুন চুক্তি, 'ফুল' মানে শান্তি।" গুপ্তচর ফিসফিস করলেন। "সংকেত। 'বসন্ত' মানে আক্রমণের সময়। প্রস্তুত থাকো।"</p>
<p class="en">The citizen laughed. "Weather talk. Lovely." The courtier shook his head. "Political code. 'Spring' means a new treaty, 'flowers' means peace." The spy whispered. "A signal. 'Spring' means time to strike. Prepare."</p>

<p>সাফওয়ান তোমার দিকে ঘুরলেন। "তুমি কী বলবে?"</p>
<p class="en">Safwan turned to you. "What do you say?"</p>

<p>তুমি বললে — নাগরিকের মতো — "আবহাওয়ার কথা।" সাফওয়ান ম্লান হাসলেন। "ভুল।" তোমার মুখ লাল হয়ে গেল। তুমি শুধু চিঠিটা পড়েছ। বাকি প্রসঙ্গ তোমার কাছে নেই।</p>
<p class="en">You said — like the citizen — "Weather talk." Safwan gave a faint smile. "Wrong." Your face flushed. You'd only read the letter. The rest of the context you didn't have.</p>

<div class="dialogue">একই শব্দ — তিনজনের context ভিন্ন। নাগরিক শুধু চিঠিটা পড়েছে। দরবারি জানেন দুই রাজ্যের সম্পর্ক, সাম্প্রতিক ঘটনা, রাজনৈতিক পটপরিবর্তন। গুপ্তচর জানেন একটা গোপন কোড — যা শুধু তাঁর কাছে। চিঠি একই, context ভিন্ন — তাই অর্থ ভিন্ন।</div>
<div class="dialogue en">"Same words — but each one's context is different. The citizen only read the letter. The courtier knows the relationship between two kingdoms, recent events, political shifts. The spy knows a secret code — held only by him. Letter the same, context different — so meaning differs."</div>

<div class="dialogue">গল্পবলিয়ে শব্দ বানায়। ক্যালিগ্রাফার শব্দ গোছায়। কিন্তু আমি বলি — শব্দের অর্থ প্রসঙ্গে। একই শব্দ, ভিন্ন প্রসঙ্গ — ভিন্ন অর্থ। এটাই context-এর শক্তি।</div>
<div class="dialogue en">"The storyteller creates words. The calligrapher shapes words. But I say — the meaning of words lives in context. Same word, different context — different meaning. This is the power of context."</div>

<div class="dialogue">তুমি LLM নিয়ে কাজ করলে — তুমি সেই নাগরিক। শুধু প্রশ্ন দাও, আশা করো সঠিক উত্তর পাবে। কিন্তু LLM তোমার ব্যবসার নিয়ম জানে না, কোডবেস দেখেনি, গ্রাহকের ইতিহাস জানে না। সে নাগরিকের মতো — শুধু চিঠি পড়ে অনুমান করে। আর অনুমান মানে ভুল।</div>
<div class="dialogue en">"When you work with an LLM — you are that citizen. You give only a question, hope for the right answer. But the LLM doesn't know your business rules, hasn't seen your codebase, doesn't know your customer's history. It's like the citizen — reading the letter and guessing. And guessing means error."</div>

<div class="dialogue">Context Engineering হলো দরবারি হওয়া। তুমি LLM-কে শুধু প্রশ্ন না — পুরো প্রসঙ্গ দাও। কোম্পানির নিয়ম, গ্রাহকের তথ্য, কোডের অংশ, উদাহরণ — যা যা দরকার। LLM-এর context window আছে — যতটুকু দাও, ততটুকুই সে দেখে। যা দাওনি, তা সে জানে না।</div>
<div class="dialogue en">"Context Engineering is becoming the courtier. You don't just give the LLM a question — you give it the entire context. Company rules, customer data, code snippets, examples — whatever is needed. The LLM has a context window — it sees only what you provide. What you don't give, it doesn't know."</div>

<p>সাফওয়ান একটা চামড়ার থলি বের করলেন। "এটা context window। এর মাপ নির্দিষ্ট — একসাথে এতটুকুই বসে। যা ভরবে, তাই থাকবে। বেশি দিলে পুরনো জিনিস বেরিয়ে যায় — ভুলে যায়। যেমন দরবারি যদি একসাথে অনেক প্রসঙ্গ মনে করতে চেয়েছিলেন — পুরনো ঘটনা মুছে যেত।"</p>
<p class="en">Safwan pulled out a leather pouch. "This is the context window. Its size is fixed — only this much fits at once. What you fill, stays. Add too much, and the old things spill out — forgotten. As if the courtier tried to recall too many events at once — the oldest would fade."</p>

<div class="dialogue">কুরআনের আয়াতগুলো কেন 'আসবাবুন নুজুল' সহ নাজিল হতো? কারণ উৎস প্রসঙ্গ ছাড়া আয়াতের অর্থ ভুল বোঝা যায়। একই বাক্য — মক্কার প্রসঙ্গে এক অর্থ, মদিনার প্রসঙ্গে অন্য অর্থ। Context ছাড়া ব্যাখ্যা বিপজ্জনক। LLM-ও তেমনি — context ছাড়া উত্তর বিপজ্জনক। তুমি একজন নাগরিক হয়ে থাকতে পারো — নাহলে দরবারি হতে পারো। পছন্দ তোমার।</div>
<div class="dialogue en">"Why were Quranic verses revealed with their 'asbab al-nuzul' — circumstances of revelation? Because without source context, the meaning is misread. The same sentence — in Meccan context one meaning, in Medinan context another. Explanation without context is dangerous. The LLM is the same — answers without context are dangerous. You can remain a citizen — or become a courtier. The choice is yours."</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">CONTEXT</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">relevant data</text><defs><marker id="ar3" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar3)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">LLM</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">reasoning</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar3)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">ANSWER</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">grounded</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Curate context - quality over quantity</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">Irrelevant tokens = model ignores question</text></svg></div>

<div class="callout warn" data-door="3"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা আইনি chatbot পুরো মামলার নথি context-এ দিলো — ১০০ পৃষ্ঠা। কিন্তু context window ৮K token। সব কাটা পড়লো। প্রথম ৩ পৃষ্ঠা পড়ে উত্তর দিলো — বাকি ৯৭ পৃষ্ঠা অদৃশ্য। ভুল পরামর্শ।</div></div>

<div class="secret-box"><div class="label">দরজা ৩ — রহস্য</div><div class="text">🎒 Context = অর্থ। যা দাও না, তা LLM জানে না।<br><small>Window নির্দিষ্ট মাপের — সবচেয়ে গুরুত্বপূর্ণ প্রসঙ্গটা ভরো, বাকি সব বাদ দাও।</small></div></div>`
});
