// DOORS DATA — Part 2 (Doors 4-5)
// Uses global `doors` array from doors-part1.js

doors.push({
  num:4, icon:"⚖️", color:"#faad14", name:"বিচারপতির কক্ষ",
  subtitle:"The Judge's Chamber", tech:"RAG (Retrieval-Augmented Generation)", spirit:"ইস্তিফতা — সঠিক সাক্ষ্য",
  secret:"প্রশ্ন → সাক্ষ্য খোঁজো → সাক্ষ্য দাও → উত্তর নাও। RAG = স্মৃতি নয়, গোডাউন থেকে।",
  recall:{
    q:"বিচারপতি নিজের স্মৃতি নয়, সাক্ষ্য কেন দেখেন?",
    qen:"Why does the judge examine evidence rather than rely on his own memory?",
    a:"কারণ স্মৃতি ভুল হতে পারে, সাক্ষ্য স্থির। RAG-এ মডেল নিজে জেনারেট না করে — ডাটাবেস থেকে সঠিক সাক্ষ্য টেনে আনে, তারপর উত্তর দেয়।",
    aen:"Because memory can err, but evidence is fixed. In RAG, the model doesn't generate from memory — it pulls correct evidence from a database first, then answers."
  },
  story:`
<p class="scene-setting">চতুর্থ দরজা। একটা বিচারালয়। পুরনো কাঠের বেঞ্চ, কালির দাগ, ধুলোমাখা আলো। কাজী আব্দুল্লাহ বসে আছেন — নাকের ডগায় চশমা, আঙুলে রেকর্ডের কালি, প্রতিটা নড়াচড়ায় ইচ্ছাকৃত ধীরতা। সামনে একটা বিশাল গোডাউনের চাবি আর একটা খালি কাগজ। একজন বৃদ্ধ মানুষ এসেছেন — তাঁর জমির সীমানা নিয়ে মামলা। প্রাণের জমি। চোখে ভয়।</p>
<p class="scene-setting en">The fourth door. A courtroom. Old wooden bench, ink stains, dusty light. Qadi Abdullah sits — spectacles on the tip of his nose, ink-stained fingers from records, every movement deliberately slow. Before him: a key to a vast warehouse, and a blank paper. An old man has come — a dispute over his land boundary. Land that is his life. Fear in his eyes.</p>

<div class="dialogue">আপনার জমি কোথায়?</div>
<div class="dialogue en">"Where is your land?"</div>

<p>বৃদ্ধ ঠিকানা দিলেন। কাজী আব্দুল্লাহ কাগজে লিখলেন। তারপর — স্মৃতি থেকে উত্তর দিলেন। "হ্যাঁ, সেই এলাকা। উত্তর সীমানায় নদী, দক্ষিণে রাস্তা।" বৃদ্ধ থামলেন। তারপর বললেন, "আপনার কথা মতে নদী তো দশ বছর আগেও ছিল। কিন্তু পাঁচ বছর আগে সেটা ভরাট হয়ে গেছে।"</p>
<p class="en">The old man gave the address. Qadi Abdullah wrote it down. Then — answered from memory. "Yes, that area. Northern boundary is the river, south is the road." The old man paused. Then said: "By your account, the river existed ten years ago. But five years ago, it was filled in."</p>

<p>কাজী আব্দুল্লাহ চুপ করলেন। তাঁর স্মৃতি ভুল ছিল। তিনি নদীর কথা বলেছিলেন — কিন্তু সেই নদী আর নেই। পুরনো তথ্য। ভুল।</p>
<p class="en">Qadi Abdullah fell silent. His memory was wrong. He'd mentioned the river — but that river no longer existed. Old information. Wrong.</p>

<div class="dialogue">আমি বিচারপতি। কিন্তু আমি সব জানি না। আমি যা জানি — তা স্মৃতি। আর স্মৃতি ভুল হয়। পুরনো হয়। এই ভুল একটা মানুষের জমি কেড়ে নিতে পারত। তাই আমি সাক্ষ্য দেখি। গোডাউনে আছে দলিল, ম্যাপ, রেকর্ড — সত্য, লিখিত, ভুল হয় না।</div>
<div class="dialogue en">"I am a judge. But I don't know everything. What I know is memory. And memory errs. It grows old. This error could have stolen a man's land. So I examine evidence. The warehouse holds deeds, maps, records — true, written, inerrant."</div>

<p>তিনি গোডাউনের চাবি নিয়ে উঠলেন। ফিরে এলেন তিনটা দলিল নিয়ে। ম্যাপ বিছালেন। সীমানা চিহ্নিত করলেন — নদী নেই, রাস্তা সরে গেছে, নতুন পাথরের বাঁধাই দেওয়া হয়েছে। রায় দিলেন — সাক্ষ্যের উপর ভিত্তি করে। বৃদ্ধের চোখে পানি।</p>
<p class="en">He took the warehouse key and rose. Returned with three deeds. Spread out the maps. Marked the boundary — no river, the road had shifted, a new stone embankment had been built. Gave judgment — based on evidence. Tears in the old man's eyes.</p>

<div class="dialogue">গল্পবলিয়ে বলেছিলেন — সে সত্য জানে না। ক্যালিগ্রাফার বলেছিলেন — অনুমান ভুল। রাষ্ট্রদূত বলেছিলেন — context ছাড়া উত্তর বিপজ্জনক। এখন দেখো — সত্য কোথায়? গোডাউনে। সাক্ষ্যে। স্মৃতিতে নয়।</div>
<div class="dialogue en">"The storyteller said — he doesn't know truth. The calligrapher said — guesses are errors. The ambassador said — answers without context are dangerous. Now see — where is truth? In the warehouse. In evidence. Not in memory."</div>

<div class="dialogue">LLM যখন প্রশ্নের উত্তর দেয় — সে স্মৃতি থেকে দেয়। কিন্তু তার স্মৃতি training data — পুরনো, সাধারণ। তোমার নির্দিষ্ট তথ্য সেখানে নেই। যদি জিজ্ঞেস করো "আমার কোম্পানির ছুটির নিয়ম কী?" — সে সাধারণ উত্তর দেবে। আমার মতো — নদীর কথা বলবে যেটা আর নেই।</div>
<div class="dialogue en">"When the LLM answers — it answers from memory. But its memory is training data — old, generic. Your specific information isn't there. If you ask 'what's our company's leave policy?' — it gives a generic answer. Like me — mentioning a river that no longer exists."</div>

<div class="dialogue">RAG — Retrieval-Augmented Generation — হলো গোডাউনে যাওয়া। তুমি একটা গোডাউন বানাও: ডকুমেন্ট, পলিসি, কোড, ডেটা। যখন কেউ প্রশ্ন করে — প্রথমে খোঁজো। সবচেয়ে প্রাসঙ্গিক দলিলগুলো টেনে আনো। তারপর LLM-কে দাও। সে এবার সাক্ষ্য দেখে উত্তর দেয় — স্মৃতি থেকে নয়।</div>
<div class="dialogue en">"RAG — Retrieval-Augmented Generation — is going to the warehouse. You build a warehouse: documents, policies, code, data. When someone asks — search first. Pull the most relevant records. Give them to the LLM. Now it answers from evidence — not from memory."</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">QUERY</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">user question</text><defs><marker id="ar4" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar4)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">RETRIEVE</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">vector search</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar4)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">GENERATE</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">grounded answer</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">RAG = search + generate</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">Bad chunking = lost context</text></svg></div>

<div class="code-block">RAG Pipeline:
১. প্রশ্ন আসে →
২. গোডাউনে খোঁজো (embedding + vector search) →
৩. সেরা ৩-৫টা সাক্ষ্য টেনে আনো →
৪. সাক্ষ্য + প্রশ্ন একসাথে LLM-কে দাও →
৫. LLM সাক্ষ্য দেখে উত্তর দেয়</div>

<div class="dialogue">ইসলামে মুফতি যখন ফতোয়া দেন — তিনি নিজের মত দেন না। তিনি কুরআন, সুন্নাহ, ইজমা, কিয়াস থেকে দলিল আনেন। ইস্তিফতা — সঠিক সাক্ষ্য সংগ্রহ — ছাড়া ফতোয়া বৈধ নয়। আমি এই বেঞ্চে বসে যা করি — তা মুফতির কাজের মতো। সাক্ষ্য ছাড়া কোনো রায় নয়।</div>
<div class="dialogue en">"In Islam, when a mufti gives a fatwa — he doesn't give his own opinion. He brings evidence from the Quran, Sunnah, consensus, analogy. Istifta — collecting proper evidence — without it, a fatwa is invalid. What I do on this bench — it's the mufti's work. No judgment without evidence."</div>

<div class="callout warn" data-door="4"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা কোম্পানি RAG ছাড়া LLM দিয়ে নিজেদের policy জিজ্ঞেস করলো। LLM সাধারণ উত্তর দিলো — তাদের নির্দিষ্ট policy নয়। কর্মীরা ভুল নিয়ম অনুসরণ করলো।</div></div>

<div class="secret-box"><div class="label">দরজা ৪ — রহস্য</div><div class="text">⚖️ প্রশ্ন → সাক্ষ্য খোঁজো → সাক্ষ্য দাও → উত্তর নাও।<br><small>RAG = স্মৃতি থেকে নয়, গোডাউন থেকে। Hallucination কমে, সঠিকতা বাড়ে।</small></div></div>`
});

doors.push({
  num:5, icon:"🔧", color:"#b37feb", name:"চিকিৎসকের ক্লিনিক",
  subtitle:"The Physician's Clinic", tech:"Tool Use / Function Calling", spirit:"কর্মের অর্পণ",
  secret:"LLM সিদ্ধান্ত দেয়, টুল কাজ করে। ভাষা মডেলের কাজ নির্ণয় — গণনা/API নয়। সঠিক কাজ সঠিক টুলে।",
  recall:{
    q:"চিকিৎসক কেন নিজে ওষুধ বানান, নাকি ঔষধবিদকে পাঠান?",
    qen:"Why does the physician send the pharmacist rather than making the medicine himself?",
    a:"কারণ চিকিৎসক বিশেষজ্ঞ নির্ণয়ে, বানানোয় নয়। LLM-ও — সে ভাষায় দক্ষ, কিন্তু গণিত, ডেটাবেস, API-তে নয়। Tool use মানে সঠিক কাজ সঠিক বিশেষজ্ঞে দেওয়া।",
    aen:"Because the physician's expertise is diagnosis, not compounding. The LLM too — it's skilled in language, not in math, databases, or APIs. Tool use means giving the right job to the right expert."
  },
  story:`
<p class="scene-setting">পঞ্চম দরজা। একটা ক্লিনিক। ভেষজের তীক্ষ্ণ গন্ধ, তাকে সারিবদ্ধ স্ফটিকের শিশি, মেঝেতে ঠান্ডা পাথর। হাকিম রুকনুদ্দিন রোগী দেখছেন — তাঁর হাত ভেষজে সবুজ-হলুদ দাগযুক্ত, চোখ শান্ত কিন্তু দ্রুত। পাশে বই, কলম, স্টেথোস্কোপ। একজন রোগী এসেছেন — জ্বর, কাশি। সহজ রোগ।</p>
<p class="scene-setting en">The fifth door. A clinic. The sharp scent of herbs, crystal vials in neat rows on shelves, cold stone floor. Hakim Ruknuddin sees patients — his hands stained green-yellow from herbs, his eyes calm but quick. Beside him: a book, a pen, a stethoscope. A patient has come — fever, cough. A simple case.</p>

<div class="dialogue">হাকিম রুকনুদ্দিন রোগ নির্ণয় করলেন। তারপর ডোজ হিসাব করতে শুরু করলেন — নিজে। "ওজন ৬০ কেজি, প্রতি কেজিতে ৫ মিলিগ্রাম, দিনে তিনবার..." তারপর থামলেন। ভ্রু কুঁচকালেন। "৩৬০... না, ৯০০... না..." তাঁর হিসাব এলোমেলো।</div>
<div class="dialogue en">Hakim Ruknuddin diagnosed the illness. Then began calculating the dosage — himself. "Weight 60 kg, 5 mg per kg, three times daily..." Then he stopped. Frowned. "360... no, 900... no..." His math was tangled.</div>

<p>তিনি হাসলেন — লজ্জিত নয়, স্বীকারোক্তিমূলক। "দেখলে তো? আমি নির্ণয় করতে পারি — কিন্তু গুণ করতে পারি না।" তিনি পাশের ঘর থেকে একজনকে ডাকলেন — একজন তরুণ হিসাবরক্ষক। হিসাবরক্ষক এক সেকেন্ডে উত্তর দিলেন: "৯০০ মিলিগ্রাম প্রতিদিন।"</p>
<p class="en">He smiled — not embarrassed, matter-of-fact. "You see? I can diagnose — but I can't multiply." He called someone from the next room — a young accountant. The accountant answered in one second: "900 mg daily."</p>

<div class="dialogue">আমি রোগ নির্ণয় করি। কিন্তু গুণ করি না। ওষুধ বানাই না। খরচ হিসাব করি না। পৌঁছে দিই না। প্রতিটা কাজের জন্য আমি একজন বিশেষজ্ঞ ডাকি। আমি সিদ্ধান্ত দিই — তারা কাজ করে।</div>
<div class="dialogue en">"I diagnose. But I don't multiply. I don't compound medicine. I don't calculate cost. I don't deliver. For each task I call a specialist. I make the decision — they do the work."</div>

<p>তিনি দেখালেন — একটা রোগীর জন্য তিনি তিনজনকে ডাকলেন: ঔষধবিদ (ওষুধ বানাবে), হিসাবরক্ষক (খরচ গুণবে), এবং দূত (ওষুধ পৌঁছে দেবে)। তিনি শুধু নির্দেশ দিলেন।</p>
<p class="en">He showed — for one patient, he called three: the pharmacist (to compound), the accountant (to multiply cost), and the courier (to deliver). He only gave instructions.</p>

<div class="dialogue">বিচারপতি সাক্ষ্য দিয়ে সত্য খুঁজলেন। কিন্তু সাক্ষ্য পড়েই কি কাজ শেষ? না — প্রয়োগ দরকার। গুণ দরকার। বিতরণ দরকার। আমি বলি — নির্ণয় আর প্রয়োগ আলাদা। একজন মানুষ সব পারে না।</div>
<div class="dialogue en">"The judge found truth through evidence. But is the work done once you read the evidence? No — application is needed. Multiplication is needed. Distribution is needed. I say — diagnosis and execution are separate. One person cannot do everything."</div>

<div class="dialogue">LLM-ও তেমনি। সে ভাষায় অসাধারণ — বোঝে, ব্যাখ্যা করে, লেখে। কিন্তু সঠিক গণিত, রিয়েল-টাইম ডেটা, ডেটাবেস কুয়েরি, API কল — এগুলোতে সে আমার মতো। ভুল করে। কারণ সে গল্পবলিয়ে — গণনাকারী নয়।</div>
<div class="dialogue en">"The LLM is the same. Brilliant at language — understands, explains, writes. But precise math, real-time data, database queries, API calls — at these it's like me. It errs. Because it's a storyteller — not a calculator."</div>

<div class="dialogue">Function Calling — বা Tool Use — হলো আমার কাজ। তুমি LLM-কে টুল দাও: ক্যালকুলেটর, সার্চ ইঞ্জিন, ডেটাবেস, API। LLM সিদ্ধান্ত নেয় কোন টুল কখন দরকার। কিন্তু কাজটা টুল করে — LLM নিজে নয়। ঠিক যেমন আমি হিসাবরক্ষক ডাকি — নিজে গুণ করি না।</div>
<div class="dialogue en">"Function Calling — or Tool Use — is my method. You give the LLM tools: a calculator, a search engine, a database, an API. The LLM decides which tool is needed when. But the tool does the work — not the LLM. Just as I call the accountant — I don't multiply myself."</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">LLM</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">decides</text><defs><marker id="ar5" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar5)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">TOOL CALL</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">function</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar5)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">RESULT</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">back to LLM</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Function calling = LLM that acts</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">Always validate tool args</text></svg></div>

<div class="code-block">Function Calling Flow:
১. ইউজার প্রশ্ন: "আজকের আবহাওয়া কী?"
২. LLM ভাবে: "আমার রিয়েল-টাইম ডেটা নেই। weather_api টুল দরকার।"
৩. LLM বলে: weather_api(location="Dhaka")
৪. টুল চলে → ডেটা আসে: "৩২°C, বৃষ্টি"
৫. LLM ডেটা নিয়ে উত্তর দেয়: "ঢাকায় আজ ৩২ ডিগ্রি, বৃষ্টি হতে পারে।"</div>

<div class="dialogue">দেখো — LLM নিজে আবহাওয়া জানে না। কিন্তু সে জানে কোন টুল দরকার। সে নির্ণয় করে, টুল কাজ করে। চিকিৎসক আর ঔষধবিদ। আমি নির্ণয় করি — হিসাবরক্ষক গুণ করে।</div>
<div class="dialogue en">"See — the LLM doesn't know the weather itself. But it knows which tool is needed. It diagnoses, the tool executes. Physician and pharmacist. I diagnose — the accountant multiplies."</div>

<div class="dialogue">ইসলামে 'ওয়াকাফ' আছে — একটা সম্পত্তি নির্দিষ্ট কাজের জন্য আলাদা করা। মসজিদের জমি শুধু ইবাদতে, স্কুলের জমি শুধু শিক্ষায়। প্রতিটা টুল একটা ওয়াকফ — নির্দিষ্ট কাজের জন্য। ক্যালকুলেটর শুধু গণনায়, সার্চ শুধু তথ্যে। সব এক জায়গায় রাখলে বিভ্রান্তি — আলাদা রাখলে নির্ভুলতা। আমি যদি নিজে গুণ করতাম — রোগী মারা যেত।</div>
<div class="dialogue en">"In Islam there's 'waqf' — a property dedicated for a specific purpose. Mosque land only for worship, school land only for education. Each tool is a waqf — dedicated for a specific task. Calculator only for math, search only for information. Mix everything together and you get confusion — separate them and you get precision. If I multiplied myself — a patient could die."</div>

<div class="callout warn" data-door="5"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা booking agent function calling-এ JSON ফরম্যাট ভুল পাঠালো। airline API rejected। কিন্তু LLM 'booking confirmed' বলে দিলো। গ্রাহক airport-এ গিয়ে দেখলেন — কোনো ticket নেই।</div></div>

<div class="secret-box"><div class="label">দরজা ৫ — রহস্য</div><div class="text">🔧 LLM সিদ্ধান্ত দেয়, টুল কাজ করে।<br><small>ভাষা মডেলের কাজ নির্ণয় — গণনা, কুয়েরি, API নয়। সঠিক কাজ সঠিক টুলে।</small></div></div>`
});
