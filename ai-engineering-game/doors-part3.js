// DOORS DATA — Part 3 (Doors 6-7 + completion)
// Uses global `doors` array from doors-part1.js

doors.push({
  num:6, icon:"👃", color:"#36d6e7", name:"সুগন্ধি ব্যবসায়ীর বাজার",
  subtitle:"The Perfumer's Bazaar", tech:"Evals — মান যাচাই", spirit:"মুস্তালাহ আল-হাদিস",
  secret:"পাঁচটা মাত্রায় মাপো, একটা স্কোরে নয়। Accuracy, Relevance, Safety — প্রতিটা আলাদা।",
  recall:{
    q:"সুগন্ধি ব্যবসায়ী কেন একটা স্কোর দেন না, বরং পাঁচটা আলাদা মাপেন?",
    qen:"Why does the perfumer use five separate measures instead of one overall score?",
    a:"কারণ একটা সুগন্ধি ভালো গন্ধে কিন্তু দ্রুত উড়ে যায়, আরেকটা কড়া কিন্তু দীর্ঘস্থায়ী। AI-ও — Accuracy, Relevance, Safety আলাদা মাপতে হয়। একটা স্কোর যথেষ্ট নয়।",
    aen:"Because one perfume smells great but evaporates quickly, another is sharp but long-lasting. AI too — Accuracy, Relevance, Safety must be measured separately. One score is not enough."
  },
  story:`
<p class="scene-setting">ষষ্ঠ দরজা। একটা সুগন্ধির বাজার। শত শত ছোট দোকান — প্রতিটায় এক একটা সুগন্ধ, এক একটা দুনিয়া। মাঝখানে বসে আছেন আতার নুসরাত — চোখে কালো কাপড়ের ফিতা, নাক খোলা। তিনি দেখেন না — শুঁকে শুঁকে যাচাই করেন। সামনে ছোট ছোট কাঁচের বোতল। প্রতিটা নাকে ধরেন, চোখ বন্ধ, মাথা নাড়েন বা মাথা নেড়ে না দিয়ে বোতলটা একটা বাক্সে ফেলে দেন।</p>
<p class="scene-setting en">The sixth door. A perfumer's bazaar. Hundreds of tiny shops — each with a scent, each a world. At the center sits Attar Nusrat — a black cloth band over his eyes, nose uncovered. He doesn't see — he verifies by scent alone. Before him: small glass bottles. He holds each to his nose, eyes closed, nods — or shakes his head and tosses the bottle into a discard box.</p>

<p>তিনি তোমাকে একটা কাজ দিলেন: "এই সুগন্ধিগুলো যাচাই করো। ভালো নাকি খারাপ?"</p>
<p class="en">He gave you a task: "Test these perfumes. Good or bad?"</p>

<p>তুমি একটা বোতল নাকে ধরলে। "দারুণ।" আরেকটা। "ভালো।" তৃতীয়টা — অসাধারণ গন্ধ। "এটা নিখুঁত।" তুমি বললে।</p>
<p class="en">You held one bottle up. "Amazing." Another. "Good." A third — incredible scent. "This one is perfect." You declared it.</p>

<p>আতার নুসরাত সেই তৃতীয় বোতলটা নিলেন। নাকে ধরলেন। এক সেকেন্ড। তারপর তা বাতাসে ছুঁড়ে ফেললেন — সজোরে। কাঁচ ভাঙল।</p>
<p class="en">Attar Nusrat took that third bottle. Held it to his nose. One second. Then hurled it away — hard. Glass shattered.</p>

<div class="dialogue">নিখুঁত গন্ধ? হ্যাঁ। কিন্তু এতে আছে মার্কিউরি — বিষ। ত্বকে লাগলে ধীরে ধীরে স্নায়ু নষ্ট করে। গন্ধ দশমা শ্রেণীর — কিন্তু নিরাপত্তা শূন্য। তুমি একটা মাত্রায় মাপলে — গন্ধে। আমি পাঁচটায় মাপি।</div>
<div class="dialogue en">"Perfect scent? Yes. But it contains mercury — poison. On skin, it slowly destroys nerves. Scent is first-class — but safety is zero. You measured on one dimension — smell. I measure on five."</div>

<div class="dialogue">প্রথম: গন্ধ কেমন — কঠোরতা (Strength)। দ্বিতীয়: কতক্ষণ থাকে — স্থায়িত্ব (Longevity)। তৃতীয়: নিরাপদ কিনা — বিশুদ্ধতা (Purity)। চতুর্থ: দামের সাথে মেলে কিনা — মূল্য (Value)। পঞ্চম: গ্রাহকের প্রতিক্রিয়া — গ্রহণযোগ্যতা (Acceptance)। পাঁচটা মাপকাঠি — একটা স্কোর নয়।</div>
<div class="dialogue en">"First: how does it smell — strength. Second: how long does it last — longevity. Third: is it safe — purity. Fourth: does it match the price — value. Fifth: customer response — acceptance. Five measures — not one score."</div>

<div class="dialogue">চিকিৎসক বলেছিলেন — সঠিক কাজ সঠিক টুলে। কিন্তু টুল কাজ করল কি না, ভালো কাজ হলো কি না — তা কে যাচাই করবে? আমি। আমার কাজ নির্মাণ নয় — যাচাই। নির্মাতা বানায়, আমি বলি — সেটা টিকবে কি না।</div>
<div class="dialogue en">"The physician said — the right task to the right tool. But did the tool work? Was the work good? Who verifies that? I do. My job is not to build — but to verify. The builder makes, I say — will it last?"</div>

<div class="dialogue">তুমি যখন AI সিস্টেম বানাও — তোমারও ঠিক এটা দরকার। Evals — evaluations। তোমার LLM কতটা ভালো কাজ করছে? "মনে হয় ঠিক আছে" — এটা মাপ নয়। একটা সুগন্ধি গন্ধে নিখুঁত হতে পারে কিন্তু বিষাক্ত — একটা AI উত্তরে সাবলীল হতে পারে কিন্তু ভুল। তোমার দরকার নির্দিষ্ট মাপকাঠি, নির্দিষ্ট পরীক্ষা, এবং সংখ্যা।</div>
<div class="dialogue en">"When you build an AI system — you need exactly this. Evals — evaluations. How well is your LLM doing? 'Seems okay' is not a measure. A perfume can smell perfect but be toxic — an AI answer can be fluent but wrong. You need specific criteria, specific tests, and numbers."</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">TEST SET</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">golden Q&A</text><defs><marker id="ar6" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar6)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">RUN MODEL</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">compare</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar6)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">SCORE</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">accuracy</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">No evals = flying blind</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">Eval on train data = fake scores</text></svg></div>

<div class="code-block">AI Evaluation মাপকাঠি:

১. Accuracy — উত্তর সঠিক কিনা (ফ্যাক্ট চেক) ← গন্ধ ভালো কিনা
২. Relevance — প্রশ্নের সাথে মেলে কিনা ← কাজের জন্য উপযুক্ত কিনা
৩. Completeness — সব অংশ উত্তর দেয় কিনা ← স্থায়িত্ব আছে কিনা
৪. Safety — ক্ষতিকর কিছু বলে কিনা ← বিষাক্ত কিনা
৫. Consistency — একই প্রশ্নে একই উত্তর কিনা ← গ্রাহক বারবার কিনবে কিনা

প্রতিটা আলাদা মাপো। একটা স্কোর দিয়ে "ভালো" বলা — বিষাক্ত সুগন্ধিকে "নিখুঁত" বলার মতোই ভয়ংকর।</div>

<div class="dialogue">মুস্তালাহ আল-হাদিস — হাদিস যাচাইয়ের বিজ্ঞান — ঠিক এটাই। একটা হাদিস কখনো একটা মাপে গ্রহণ করা হয় না। সনদ (chain), রাবির নির্ভরযোগ্যতা, মতন (content) — একাধিক মাত্রায় যাচাই। সহিহ, হাসান, দাইফ — স্তরভিত্তিক শ্রেণি। আমি সুগন্ধি যাচাই করি পাঁচটায়। মুহাদ্দিস হাদিস যাচাই করেন তিনটায়। AI evals-ও তেমনি — একাধিক মাত্রায়, স্তরভিত্তিক।</div>
<div class="dialogue en">"Mustalah al-Hadith — the science of hadith verification — is exactly this. A hadith is never accepted on a single measure. Chain (sanad), narrator reliability, content (matn) — verification across multiple dimensions. Sahih, hasan, daif — graded levels. I verify perfume on five. The muhaddith verifies hadith on three. AI evals are the same — multi-dimensional, graded."</div>

<div class="callout warn" data-door="6"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা টিম LLM app বানালো, কোনো eval ছাড়া deploy করলো। প্রথম সপ্তাহে ৩০% উত্তর ভুল বের হলো। কেউ জানতো না — কারণ measure করছিল না। Eval ছাড়া deploy = অন্ধ পাইলট।</div></div>

<div class="secret-box"><div class="label">দরজা ৬ — রহস্য</div><div class="text">👃 পাঁচটা মাত্রায় মাপো, একটা স্কোরে নয়।<br><small>"মনে হয় ঠিক" = মাপ নয়। Accuracy, Relevance, Safety — প্রতিটা আলাদা।</small></div></div>`
});

doors.push({
  num:7, icon:"🏛️", color:"#f0c14b", name:"জলের টাওয়ার",
  subtitle:"The Water Tower", tech:"System Design — নির্ভরযোগ্যতা", spirit:"শরিয়াহ = ব্যবস্থা",
  secret:"ডেমো নয়, ব্যবস্থা। Cache, Fallback, Monitor — নির্ভরযোগ্যতা। উদ্দেশ্য ছাড়া যন্ত্র ব্যর্থ।",
  recall:{
    q:"কেন সব কল একসাথে খুললে পানি থামে? এবং এর সমাধান কী?",
    qen:"Why does water stop when all taps open at once? And what's the solution?",
    a:"কারণ পাম্প একসাথে সবার পানি দিতে পারে না। সমাধান: ট্যাঙ্ক (ক্যাশ), বাইপাস পাইপ (fallback), নিয়মিত পরিদর্শন (monitoring)। AI সিস্টেমও একই — caching, fallback, monitoring ছাড়া ভেঙে পড়ে।",
    aen:"Because the pump can't serve everyone at once. Solution: a tank (cache), a bypass pipe (fallback), regular inspection (monitoring). An AI system is the same — without caching, fallback, monitoring, it collapses."
  },
  story:`
<p class="scene-setting">সপ্তম দরজা। শহরের বাইরে, একটা পাহাড়ের উপরে — কংক্রিটের বিশাল ট্যাঙ্ক। নিচে পাম্প, উপরে আকাশ, চারদিকে শুকনো মাঠ। মুহান্দিস তারিক দাঁড়িয়ে আছেন — রোদে পোড়া ত্বক, হাতে ঘামের দাগ, গোড়ায় গুটিয়ে রাখা ব্লুপ্রিন্ট। ব্যবহারিক মানুষ — কোনো কথা নয়, কাজ।</p>
<p class="scene-setting en">The seventh door. Outside the city, atop a hill — a massive concrete tank. Below: a pump. Above: sky. All around: dry fields. Muhandis Tariq stands — sun-darkened skin, sweat-stained hands, rolled-up blueprints at his feet. A practical man — no speeches, only work.</p>

<div class="dialogue">দেখো। এই টাওয়ারটা শহরকে পানি দেয়। একটা পাম্প, শত শত বাড়ি, একসাথে। যদি সবাই একসাথে কল খোলে — কী হবে?</div>
<div class="dialogue en">"Look. This tower gives the city water. One pump, hundreds of houses, all at once. What if everyone opens their tap at the same time?"</div>

<p>তিনি একটা লিভার টানলেন। শহরের সব কল খুলে গেল — ডেমো। প্রথমে পানি এলো — জোরে, পরিষ্কার। তারপর ধীর হলো। তারপর থকথকে। তারপর — টপটপ শব্দ, বাতাস বেরোতে লাগল কল থেকে। কিছু বাড়িতে শেষ ফোঁটা গড়িয়ে পড়ল। কিছু বাড়িতে কিছুই নেই। একটা শিশুর কান্না শোনা গেল দূর থেকে — মায়ের হাতে খালি বালতি।</p>
<p class="en">He pulled a lever. All the city's taps opened — a demo. Water came first — strong, clear. Then it slowed. Then it thickened. Then — sputtering, air hissing from the faucets. In some houses, the last drops dribbled out. In others, nothing at all. A child's cry reached from a distance — in the mother's hand, an empty bucket.</p>

<div class="dialogue">এটাই হয় যখন তুমি AI সিস্টেম বানাও — কিন্তু চিন্তা নেই। একটা LLM কল — ঠিক আছে। কিন্তু ১০০ জন একসাথে? Rate limit পার হয়ে যায়। API থামে। Timeout। গ্রাহক অপেক্ষা করে — তারপর রাগ করে — তারপর চলে যায়। ঠিক সেই মায়ের মতো — খালি হাতে।</div>
<div class="dialogue en">"This is what happens when you build an AI system — without thinking. One LLM call — fine. But 100 at once? Rate limits hit. The API stops. Timeout. The customer waits — then rages — then leaves. Just like that mother — empty-handed."</div>

<p>তিনি ব্লুপ্রিন্ট খুললেন। শহরের পানি ব্যবস্থা — কিন্তু পাশে লেখা: AI System Design।</p>
<p class="en">He unrolled the blueprint. The city's water system — but beside it was written: AI System Design.</p>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">REQUEST</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">user</text><defs><marker id="ar7" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar7)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">API GATEWAY</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">rate limit</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar7)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">LLM SERVE</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">load balance</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Design for failure, not just success</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">No fallback = total outage</text></svg></div>

<div class="code-block">AI System Design = জলের টাওয়ার

১. Cache (ট্যাঙ্ক) — সাধারণ উত্তর আগেই রাখো। পাম্প ছাড়াই দাও।
২. Rate Limiting (ভালভ) — একসাথে অনেক চাহিদা এলে নিয়ন্ত্রণ করো।
৩. Fallback (বাইপাস) — মূল পাম্প থামলে বিকল্প পথ।
৪. Queue (জলাধার) — সব অনুরোধ ধরে রাখো, পর পর পরিবেশন করো।
৫. Monitoring (গেজ) — চাপ, প্রবাহ, তাপমাত্রা — সব সময় দেখো।
৬. Observability (কাঁচের পাইপ) — ভেতরে কী হচ্ছে দেখা যায়।</div>

<div class="dialogue">ছয়টা দরজা পার হয়েছ। ভাবো — গল্পবলিয়ে বলেছিলেন, ভুল উত্তর আত্মবিশ্বাসে আসে। ক্যালিগ্রাফার বলেছিলেন, অস্পষ্ট নির্দেশে কাজ ছড়ায়। রাষ্ট্রদূত বলেছিলেন, context ছাড়া অর্থ বদলায়। বিচারপতি বলেছিলেন, সাক্ষ্য ছাড়া রায় ভুল। চিকিৎসক বলেছিলেন, প্রতিটা কাজে আলাদা হাত দরকার। সুগন্ধি বিশেষজ্ঞ বলেছিলেন, প্রতিটা কাজ পাঁচ মাত্রায় যাচাই করতে হয়।</div>
<div class="dialogue en">"You've passed six doors. Think — the storyteller said wrong answers come with confidence. The calligrapher said vague instructions scatter the work. The ambassador said without context, meaning shifts. The judge said without evidence, judgment fails. The physician said each task needs a different hand. The perfumer said each work must be verified on five dimensions."</div>

<div class="dialogue">এই ছয়টা রহস্য — এক একটা টুকরো। কিন্তু একসাথে বসালে — পানির টাওয়ার দাঁড়ায়। ডেমো নয় — ব্যবস্থা। একটা কৌতুক নয় — একটা শহরের জীবন। Cache, Rate Limit, Fallback, Queue, Monitor, Observe — এই ছয়টা ছাড়া, সেই ছয়টা রহস্যও কাজ করবে না।</div>
<div class="dialogue en">"These six secrets — each a piece. But assembled together — the water tower stands. Not a demo — a system. Not a trick — a city's life. Cache, Rate Limit, Fallback, Queue, Monitor, Observe — without these six, even those six secrets won't work."</div>

<p>মুহান্দিস তারিক টাওয়ারের দিকে তাকালেন। তারপর তোমার দিকে। গলাটা নামিয়ে:</p>
<p class="en">Muhandis Tariq looked at the tower. Then at you. Lowered his voice:</p>

<div class="dialogue">কিন্তু সবচেয়ে বড় কথাটা এখন বলি। এই সব যন্ত্র — নিজে কিছু নয়। যন্ত্র কাজ করে যখন কেউ ব্যবহার করে। ভালো ব্যবহার হয় যখন কেউ বুঝে কাজ করে। কেন তুমি এই সিস্টেম বানাচ্ছ? কার জন্য? কী সমস্যা সমাধান হবে?</div>
<div class="dialogue en">"But now the biggest truth. All these instruments — they are nothing by themselves. Instruments work when someone uses them. They're used well when someone understands why. Why are you building this system? For whom? What problem does it solve?"</div>

<div class="dialogue">মালিক দাদা গল্প বানাতেন। কিন্তু কেন? মানুষের জন্য। ঔষধ বানানো হয় — কেন? রোগীর জন্য। একটা AI সিস্টেম বানানো হয় — কেন? কোন মানুষের কোন কষ্ট কমানোর জন্য? এই উত্তর না থাকলে — পানির টাওয়ার দাঁড় করালেও কেউ পানি চাইবে না। শূন্য বালতি নিয়ে কেউ দাঁড়াবে না — কারণ কেউ জানবে না যে পানি আছে।</div>
<div class="dialogue en">"Malik Dada told stories — why? For people. Medicine is made — why? For the patient. An AI system is built — why? To ease whose suffering? Without this answer — you can build a water tower and no one will come. No one will stand with an empty bucket — because no one will know the water exists."</div>

<div class="dialogue">শরিয়াহ শব্দের অর্থ — 'পানির পথ'। একটা নদী যেভাবে শুষ্ক মাঠে পানি নিয়ে আসে, জীবন দেয় — শরিয়াহ হলো সেই পথ। নিয়ম, ব্যবস্থা, কাঠামো — যা জীবনকে ধারাবাহিক রাখে। নিয়ম ছাড়া পানি বন্য হয় — কখনো বন্যা, কখনো খরা। ব্যবস্থা দিলে — প্রতিদিন, নির্ভরযোগ্য, সবার জন্য। AI সিস্টেম ডিজাইনও শরিয়াহ — পানির পথ বানানো। তবে পথ বানিয়েই শেষ নয় — জিজ্ঞেস করতে হবে: পানি কার জন্য?</div>
<div class="dialogue en">"The word Shariah means — 'the path to water.' As a river brings water to dry land, gives life — Shariah is that path. Rules, system, structure — that keep life flowing. Without rules, water is wild — sometimes flood, sometimes drought. With a system — every day, reliable, for all. AI system design is Shariah — building the water's path. But building the path isn't enough — you must ask: water for whom?"</div>

<div class="verse">"জেনে রাখো, আল্লাহর স্মরণেই হৃদয় প্রশান্তি পায়।"<br>— কুরআন ১৩:২৮<br><br>যন্ত্র প্রশান্তি দেয় না। দক্ষতা প্রশান্তি দেয় না। উদ্দেশ্য দেয়। ভালোবাসা দেয়। আল্লাহর স্মরণ — সেই উদ্দেশ্যের স্মরণ — সেটাই প্রশান্তি।<br>সাতটা দরজা শেখায় কীভাবে বানাতে হয়। কিন্তু কেন বানাতে হয় — সেটা শুধু হৃদয় জানে।</div>

<div class="callout warn" data-door="7"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা API rate limit ছাড়া ছাড়া দিলো। একজন ইউজার loop চালালো — ১ ঘণ্টায় $৫০,০০০ বিল। কারণ limit = ০। System design-এ reliability শুরুই হয় rate limit দিয়ে।</div></div>

<div class="secret-box"><div class="label">দরজা ৭ — রহস্য</div><div class="text">🏛️ ডেমো নয়, ব্যবস্থা। Cache, Fallback, Monitor — নির্ভরযোগ্যতা।<br><small>এবং — ছয়টা যন্ত্রই ব্যর্থ উদ্দেশ্য ছাড়া। কেন বানাচ্ছ, তাই প্রথম প্রশ্ন।</small></div></div>`
});
