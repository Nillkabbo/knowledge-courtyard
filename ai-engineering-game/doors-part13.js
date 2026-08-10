// DOORS DATA — Part 13 (Doors 23-24: Master Craftsmanship Phase — Final)
// Uses global `doors` array from doors-part1.js

doors.push({
  num:23, icon:"🚢", color:"#5c6bc0", name:"জাহাজ নির্মাতার ড্রাইডক",
  subtitle:"The Shipwright's Drydock", tech:"Deployment & Serving Infrastructure (Docker, GPU, vLLM, API Gateway)", spirit:"সফর — যাত্রার প্রস্তুতি",
  secret:"মডেল ভালো কিন্তু কোথায় বসবে? কন্টেইনার, GPU, সার্ভিং। ডক ছাড়া জাহাজ ভেসে থাকে, গন্তব্যে পৌঁছায় না।",
  recall:{
    q:"জাহাজ নির্মাতা কেন জাহাজ বানিয়েই সমুদ্রে ছেড়ে দেন না, আগে ড্রাইডকে পরীক্ষা করেন?",
    qen:"Why does the shipwright test the ship in drydock before releasing it to sea?",
    a:"কারণ সমুদ্রে গেলে ফেরা যায় না। ফুটো থাকলে ডোবে। ইঞ্জিন ভাঙলে আটকে যায়। ড্রাইডকে পরীক্ষা করে — পানি ধরে কিনা, ইঞ্জিন চলে কিনা, কার্গো ধরে কিনা। তারপর ছাড়েন। Deployment-ও তেমনি — কন্টেইনারে পরীক্ষা করো, তারপর প্রোডাকশনে।",
    aen:"Because once at sea, you can't come back. A leak sinks it. A broken engine strands it. In drydock you test — does it hold water, does the engine run, does it carry cargo. Then you release. Deployment is the same — test in container, then production."
  },
  story:`
<p class="scene-setting">তেইশতম দরজা। নগরের বন্দরে একটা বিশাল ড্রাইডক — শুকনো নৌকার কারখানা। কাঠের কাঠামোর গন্ধ, আলকাতরার ধোঁয়া, শুকনো তক্তায় একটা অর্ধ-নির্মিত জাহাজ। মাল্লা কাশেম দাঁড়িয়ে আছেন — আলকাতরায় কালো হাত, কাঁধে হাতুড়ি, পাশে একটা ব্লুপ্রিন্ট। তিনি জাহাজ বানান — কিন্তু সমুদ্রে ছাড়েন না যতক্ষণ না প্রতিটা পরীক্ষা পাস হয়। জাহাজ ভালো হলেও — সমুদ্রে টিকবে কি না, সেটাই প্রশ্ন।</p>
<p class="scene-setting en">The twenty-third door. At the city's port: a vast drydock — a dry shipyard. The smell of timber, tar smoke, a half-built ship on dry planks. Malla Kashem stands — tar-blackened hands, a hammer on his shoulder, blueprints beside him. He builds ships — but doesn't release them to sea until every test passes. The ship may be good — but will it survive the sea? That's the question.</p>

<p>তুমি কাছে গেলে। "কাশেম ভাই, জাহাজ তো প্রস্তুত। ছেড়ে দিন না কেন?"</p>
<p class="en">You stepped close. "Brother Kashem, the ship is ready. Why not release it?"</p>

<div class="dialogue">কারণ ডক ছাড়া জাহাজ ভেসে থাকে, কিন্তু গন্তব্যে পৌঁছায় না।" কাশেম একটা দড়ি টানলেন। "দেখো — এই জাহাজের তিনটা স্তম্ভ আছে। কাঠামো, ইঞ্জিন, মাল। তিনটাই ঠিক হতে হবে। কাঠামো ভাঙলে — ডোবে। ইঞ্জিন ভাঙলে — আটকে যায়। মাল না থাকলে — কেন যাবে?</div>
<div class="dialogue en">"Because a ship without a dock floats, but doesn't reach its destination." Kashem pulled a rope. "See — this ship has three supports. Structure, engine, cargo. All three must be right. Structure breaks — it sinks. Engine breaks — it's stranded. No cargo — why go?"</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">CODE</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">app</text><defs><marker id="ar23" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar23)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">DOCKER</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">container</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar23)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">GPU SERVE</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">vLLM/TGI</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Containerize for reproducibility</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">Secrets in image = disaster</text></svg></div>

<div class="code-block">তিন স্তম্ভ — Three Pillars of Deployment:

১. কাঠামো (Container) — Docker
   জাহাজের কাঠামোর মতো। সবকিছু এক বাক্সে —
   মডেল, কোড, লাইব্রেরি, ডিপেন্ডেন্সি।
   
   • Dockerfile: কীভাবে বানাবে তার রেসিপি
   • Image: বানানো বাক্স (পোর্টেবল)
   • Container: চলমান বাক্স
   
   কেন? তোমার ল্যাপটপে চলে কিন্তু সার্ভারে না?
   → ডিপেন্ডেন্সি মিলছে না।
   → Docker একই বাক্স সব জায়গায় চালায়।

২. ইঞ্জিন (Serving) — vLLM / TGI / Ollama
   জাহাজের ইঞ্জিনের মতো। মডেলকে চালায়।
   
   • vLLM: উচ্চ-থ্রুপুট সার্ভিং, KV-cache শেয়ারিং
   • TGI (Text Generation Inference): HuggingFace-এর
   • Ollama: স্থানীয়, সহজ, ব্যক্তিগত ব্যবহারের জন্য
   
   কেন? মডেল ফাইল সরাসরি চালালে ধীর।
   → সার্ভিং ইঞ্জিন batching + optimization করে।
   → হাপর কারিগরের কৌশল — একই ফল, কম জ্বালানি।

৩. মাল (GPU/Compute) — কোথায় বসবে
   জাহাজের মালের মতো। কোথায়, কত, কেমন।
   
   • GPU: NVIDIA A100/H100 (দামি কিন্তু দ্রুত)
   • Cloud: AWS, GCP, Azure (ভাড়া)
   • Local: নিজের মেশিন (সস্তা কিন্তু ধীর)
   
   কেন? মডেল চালাতে মেমরি দরকার।
   → ৭B মডেল: ~৮GB (৪-বিট quantization)
   → ৭০B মডেল: ~৪০GB+ (একাধিক GPU)</div>

<div class="dialogue">সেতু নির্মাতা বলেছিলেন — তিন স্তম্ভে সেতু টিকে থাকে। আমি বলি — তিন স্তম্ভে জাহাজ চলে। কন্টেইনার, সার্ভিং, GPU — এই তিনটি ছাড়া মডেল শুধু ফাইল। ব্যবহারকারী পৌঁছায় না। মডেল ভালো হতে পারে — কিন্তু সঠিকভাবে বসানো না হলে, কেউ তাকে ব্যবহার করতে পারে না।</div>
<div class="dialogue en">"The bridge builder said — three supports keep the bridge standing. I say — three supports keep the ship sailing. Container, serving, GPU — without these three, a model is just a file. Users can't reach it. The model may be good — but if not deployed properly, no one can use it."</div>

<p>তারপর কাশেম একটা ভুলের কথা বললেন।</p>
<p class="en">Then Kashem spoke of a mistake.</p>

<div class="dialogue">দুই বছর আগে আমি একটা জাহাজ বানিয়েছিলাম। সুন্দর। দ্রুত। কিন্তু আমি একটা জিনিস ভুলেছিলাম — কার্গো হোল্ডের সাইজ। জাহাজ দ্রুত, কিন্তু মাত্র ৫০ বস্তা বহন করে। বণিক চাইল ২০০ বস্তা। জাহাজ ফিরে এল অর্ধেক মাল ফেলে। কারণ আমি সাইজ মেপে বানাইনি। GPU-ও তেমনি — মডেলের সাইজের সাথে GPU মেলাতে হয়। ৭০B মডেল ৮GB GPU-তে চলবে না। মাপ মেলাও।</div>
<div class="dialogue en">"Two years ago I built a ship. Beautiful. Fast. But I forgot one thing — cargo hold size. The ship is fast, but carries only 50 sacks. The merchant wanted 200. The ship returned leaving half the cargo behind. Because I didn't size it right. GPU is the same — match GPU to model size. A 70B model won't run on 8GB. Match the measure."</div>

<div class="code-block">API গেটওয়ে — The Harbor Entrance:

বন্দরে প্রবেশ নিয়ন্ত্রণ আছে। জাহাজ যেখানে বাঁধে, মাল যেখানে নামে।
AI-এ সেটাই API গেটওয়ে:

  ব্যবহারকারী → API গেটওয়ে → মডেল সার্ভার
  
  গেটওয়ে কী করে?
  • Authentication: কে অনুমতিপ্রাপ্ত?
  • Rate Limiting: কেউ বেশি কল করছে? থামাও।
  • Load Balancing: একাধিক সার্ভার? ভাগ করো।
  • Logging: কে কখন কী জিজ্ঞেস করল?
  • Caching: একই প্রশ্ন? পুরনো উত্তর দাও।
  
  এটাই কোষাধ্যক্ষ আর সেতু নির্মাতার কাজ এক জায়গায়।</div>

<div class="dialogue">বন্দরনায়ক বলেছিলেন — নজরদারি দরকার। আমি বলি — নজরদারি শুরু হয় এখানে। API গেটওয়ে হলো বন্দরের ফটক। প্রতিটা কল এখান দিয়ে যায়। প্রতিটা ত্রুটি এখানে ধরা পড়ে। প্রতিটা প্রবণতা এখানে দেখা যায়। গেটওয়ে ছাড়া — তুমি অন্ধ।</div>
<div class="dialogue en">"The harbor master said — monitoring is needed. I say — monitoring starts here. The API gateway is the port's gate. Every call passes through it. Every error is caught here. Every trend is visible here. Without a gateway — you're blind."</div>

<div class="dialogue">সফর — ইসলামে যাত্রার গুরুত্ব। নবীজি (সা) হিজরত করেছেন — মক্কা থেকে মদিনা। কিন্তু তিনি যাত্রা শুরু করার আগে প্রস্তুতি নিয়েছেন। রসদ সংগ্রহ করেছেন, রাস্তা নির্বাচন করেছেন, সঙ্গী বেছেছেন। আমি জাহাজ ছাড়ার আগে প্রস্তুতি নেই — কন্টেইনার ঠিক কিনা, GPU যথেষ্ট কিনা, গেটওয়ে প্রস্তুত কিনা। সফরের আগে প্রস্তুতি — এটাই ইসলামি নীতি। এটাই deployment।</div>
<div class="dialogue en">"Safar — the importance of journeying in Islam. The Prophet (peace be upon him) made hijrah — from Mecca to Medina. But before starting, he prepared. Gathered provisions, chose the route, selected companions. Before I release a ship, I prepare — is the container right, is the GPU sufficient, is the gateway ready. Preparation before the journey — this is the Islamic principle. This is deployment."</div>

<div class="callout warn" data-door="23"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা টিম single GPU-তে সব ইউজার। Traffic বাড়লে OOM crash। No load balancing, no auto-scaling।</div></div>

<div class="secret-box"><div class="label">দরজা ২৩ — রহস্য</div><div class="text">🚢 মডেল ভালো কিন্তু কোথায় বসবে?<br><small>কন্টেইনার (Docker), সার্ভিং (vLLM/TGI), GPU। API গেটওয়ে হলো বন্দরের ফটক। ডক ছাড়া জাহাজ ভেসে থাকে, গন্তব্যে পৌঁছায় না।</small></div></div>`
});

doors.push({
  num:24, icon:"⚖️", color:"#d4af37", name:"স্বর্ণকারের পরখ",
  subtitle:"The Goldsmith's Touchstone", tech:"Testing Infrastructure (Golden Sets, Prompt Regression, CI/CD)", spirit:"তাময়িয — সত্য ও মিথ্যা পৃথকীকরণ",
  secret:"একবার ঠিক মানে সবসময় ঠিক নয়। গোল্ডেন সেট বানাও, প্রতিটা পরিবর্তনে যাচাই করো, CI/CD স্বয়ংক্রিয়।",
  recall:{
    q:"স্বর্ণকার কেন প্রতিটা গহনা বিক্রির আগে পরখ পাথরে ঘষে যাচাই করেন?",
    qen:"Why does the goldsmith test every piece of jewelry on the touchstone before selling?",
    a:"কারণ চোখে দেখে পার্থক্য বোঝা যায় না। ২২ ক্যারেট আর ১৮ ক্যারেট দেখতে এক। কিন্তু পরখ পাথরে ঘষলে রঙ ভিন্ন। বিক্রির আগে যাচাই না করলে গ্রাহক ঠকে। টেস্টিং-ও তেমনি — মডেলের উত্তর ঠিক মনে হলেও গোল্ডেন সেটে যাচাই করো।",
    aen:"Because the eye can't tell the difference. 22-carat and 18-carat look the same. But rubbed on a touchstone, the color differs. Without testing before sale, the customer is cheated. Testing is the same — even if a model's answer looks right, verify against golden sets."
  },
  story:`
<p class="scene-setting">চব্বিশতম দরজা। নগরের কেন্দ্রে একটা স্বর্ণকারের দোকান। ভেতরে পিতলের দাঁড়িপাল্লা, একটা কালো পরখ পাথর (touchstone), দেয়ালে বিভিন্ন গহনার নমুনা। সোনারি ফয়সাল বসে আছেন — আঙুলে ল্যুপ (loupe), হাতে একটা সোনার চেইন, সামনে পরখ পাথর। তিনি চেইনটা পাথরে ঘষলেন — একটা বিবর্ণ দাগ রইল। তারপর একটা পরিচিত নমুনাও ঘষলেন। তুলনা করলেন। মাথা নাড়লেন। "ঠিক আছে। ২২ ক্যারেট।"</p>
<p class="scene-setting en">The twenty-fourth door. At the city's center: a goldsmith's shop. Inside: brass scales, a black touchstone, samples of jewelry on the walls. Sonari Faisal sits — a loupe on his finger, a gold chain in his hand, a touchstone before him. He rubbed the chain on the stone — a faint streak remained. Then he rubbed a known sample. Compared. Nodded. "Good. 22-carat."</p>

<p>তুমি কাছে গেলে। "ফয়সাল ভাই, আপনি প্রতিটা গহনা এভাবে ঘষেন কেন? চোখে দেখেই বুঝবেন না?"</p>
<p class="en">You stepped close. "Brother Faisal, why do you rub every piece like this? Can't you tell by looking?"</p>

<div class="dialogue">চোখে দেখে? আস। দেখাই।" ফয়সাল দুইটা চেইন তুলে ধরলেন। দুটোই সোনালি, দুটোই চকচকে। "কোনটা ২২ ক্যারেট, কোনটা ১৮?" তুমি দেখলে — পার্থক্য নেই। ফয়সাল দুটো পাথরে ঘষলেন। একটার দাগ গাঢ় লালচে, অন্যটার ফ্যাকাশে। "এটা ২২, ওটা ১৮। চোখে এক — পরখে ভিন্ন।</div>
<div class="dialogue en">"Tell by looking? Come. I'll show you." Faisal held up two chains. Both golden, both gleaming. "Which is 22-carat, which is 18?" You looked — no difference. Faisal rubbed both on the stone. One streak was deep reddish, the other pale. "This is 22, that's 18. Same to the eye — different on the touchstone."</div>

<div class="dialogue">সুগন্ধি বলেছিলেন — পাঁচটা মাত্রায় মাপো, একটা স্কোরে নয়। আমি বলি — সুগন্ধি মাপে একবার। আমি মাপি প্রতিবার। কারণ সোনা প্রতিটা বার বিক্রি হয় না একইভাবে। কখনো খাদ বেশি, কখনো কম। প্রতিটা গহনা পরখ করো — প্রতিটা উত্তর টেস্ট করো। একবার নয়। প্রতিবার।</div>
<div class="dialogue en">"The perfumer said — measure in five dimensions, not one score. I say — the perfumer measures once. I measure every time. Because gold isn't the same every sale. Sometimes more alloy, sometimes less. Test every piece — test every answer. Not once. Every time."</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">PROMPT v1</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">baseline</text><defs><marker id="ar24" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar24)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">CHANGE</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">v2</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar24)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">REGRESSION</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">did v1 break</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Golden set catches regressions in CI</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">Update without testing = silent drop</text></svg></div>

<div class="code-block">তিন স্তর — Three Layers of Testing:

১. গোল্ডেন সেট (Golden Dataset)
   পরিচিত সঠিক উত্তরের সংগ্রহ।
   
   ১০০টা প্রশ্ন → ১০০টা জ্ঞাত সঠিক উত্তর।
   এটাই তোমার পরখ পাথর।
   
   নতুন প্রম্পট বা মডেল বদলালে:
   → ১০০টা প্রশ্ন আবার দাও
   → আগের উত্তরের সাথে তুলনা করো
   → কয়টা বদলেছে? ভালো না খারাপ?
   
   এটাই regression test — নতুন পরিবর্তনে
   পুরনো কিছু ভাঙল কি না।

২. প্রম্পট রিগ্রেশন (Prompt Regression)
   প্রম্পট একটা শব্দ বদলালে — কী হয়?
   
   পুরনো প্রম্পট: "সারাংশ দাও"
   নতুন প্রম্পট: "সংক্ষেপে বলো"
   
   একই? নাকি ভিন্ন ফলাফল?
   → গোল্ডেন সেটে যাচাই করো
   → ১০০টার মধ্যে ৯৫ মিলল? ঠিক আছে।
   → মাত্র ৬০ মিলল? কিছু ভেঙেছে। ফিরে যাও।

৩. CI/CD (Continuous Integration / Deployment)
   কোড বদলালে → স্বয়ংক্রিয় পরীক্ষা → তারপর মোতায়েন।
   
   Git-এ push করলে:
   → স্বয়ংক্রিয় গোল্ডেন সেট চলে
   → সব পাস করলে প্রোডাকশনে যায়
   → কিছু ফেল করলে থামে — মানুষ দেখে
   
   কেন? টেস্ট ভুলে গেলে — বাগ প্রোডাকশনে যায়।
   স্বয়ংক্রিয় টেস্ট ভোলে না।</div>

<div class="dialogue">বিচারপতি বলেছিলেন — সাক্ষ্য ছাড়া রায় নয়। আমি বলি — টেস্ট ছাড়া মোতায়েন নয়। বিচারপতি একবার রায় দেন, তারপর কেস বন্ধ। আমি প্রতিটা পরিবর্তনে পরীক্ষা করি — কারণ প্রতিটা পরিবর্তন নতুন কেস। প্রতিটা পরিবর্তন নতুন বিচার। প্রতিটা বিচারে সাক্ষ্য দরকার। গোল্ডেন সেট হলো সেই সাক্ষ্য।</div>
<div class="dialogue en">"The judge said — no verdict without evidence. I say — no deployment without testing. The judge gives a verdict once, then the case closes. I test at every change — because every change is a new case. Every change is a new trial. Every trial needs evidence. The golden set is that evidence."</div>

<p>তারপর ফয়সাল একটা গল্প বললেন — সবচেয়ে বড় ভুল।</p>
<p class="en">Then Faisal told a story — the biggest mistake.</p>

<div class="dialogue">ছয় মাস আগে আমি একটা নতুন সাপ্লায়ার থেকে সোনা কিনলাম। চকচকে, সস্তা। আমি ভাবলাম — ভালো। টেস্ট করিনি। দশটা গহনা বানালাম। বিক্রি করলাম। এক সপ্তাহ পর — তিনজন গ্রাহক ফিরে এল। রঙ কালচে হয়ে গেছে। খাদ বেশি ছিল। আমার সুনাম নষ্ট। একটা টেস্ট করলে বাঁচতাম। এখন আমি প্রতিটা ব্যাচ টেস্ট করি — কোন সাপ্লায়ার হোক না কেন।</div>
<div class="dialogue en">"Six months ago I bought gold from a new supplier. Shiny, cheap. I thought — good. Didn't test. Made ten pieces. Sold them. A week later — three customers returned. The color had darkened. Too much alloy. My reputation damaged. One test would have saved me. Now I test every batch — no matter the supplier."</div>

<div class="dialogue">কোষাধ্যক্ষ বলেছিলেন — প্রতিটা টোকেনে দাম। বাজপালক বলেছিলেন — উন্নত RAG ৯০%+। আমি বলি — ৯০% মানে ১০% ভুল। প্রতিটা নতুন সংস্করণে সেই ৯০% টিকে আছে কি না — সেটাই টেস্ট করো। ভুল শুধু মডেলে নয় — প্রম্পট বদলালেও আসে। টুল বদলালেও আসে। ডেটা আপডেট হলেও আসে। প্রতিটা পরিবর্তন একটা নতুন ঝুঁকি। প্রতিটা ঝুঁকি একটা নতুন পরীক্ষা চায়।</div>
<div class="dialogue en">"The treasurer said — every token costs. The falconer said — advanced RAG reaches 90%+. I say — 90% means 10% wrong. At every new version, does that 90% hold? That's what you test. Errors come not just from models — prompt changes bring them. Tool changes bring them. Data updates bring them. Every change is a new risk. Every risk demands a new test."</div>

<div class="dialogue">তাময়িয — সত্য ও মিথ্যা পৃথক করা। কুরআনে আছে: যে সত্য তা প্রকাশ পাবে, যে মিথ্যা তা মিলিয়ে যাবে (১৭:৮১)। সোনারি হিসেবে আমার কাজ শুধু গহনা বানানো নয়। আমার কাজ নিশ্চিত করা — প্রতিটা গহনা সত্যিকারের। প্রতিটা দাবি যাচাইকৃত। প্রতিটা বিক্রি ন্যায্য। টেস্টিং হলো তাময়িয — প্রতিটা উত্তর পরখ করা, সত্য আর মিথ্যা আলাদা করা, নিশ্চিত করা যে যা দেখাচ্ছে তা সত্য।</div>
<div class="dialogue en">"Tamyiz — separating truth from falsehood. The Quran says: truth has come, falsehood has vanished (17:81). As a goldsmith, my job isn't just making jewelry. My job is ensuring — every piece is genuine. Every claim is verified. Every sale is fair. Testing is tamyiz — testing every answer on the touchstone, separating true from false, ensuring that what appears is real."</div>

<div class="dialogue">তুমি চব্বিশটি দরজা পার করেছ। গল্পবলিয়ে শিখিয়েছেন মেশিন কী। বিচারপতি শিখিয়েছেন সাক্ষ্য কী। সেতু নির্মাতা শিখিয়েছেন টিকে থাকা কী। বাজপালক শিখিয়েছেন সঠিক খোঁজা কী। জাহাজ নির্মাতা শিখিয়েছেন বসানো কী। আর আমি শিখালাম — নিশ্চিত করা কী। কারণ জ্ঞানের চূড়ান্ত পরীক্ষা শুধু বোঝা নয়, শুধু বানানো নয়, শুধু টিকিয়ে রাখা নয় — নিশ্চিত করা যে তুমি যা বানিয়েছ তা সত্যিকারের। কিন্তু নিখুঁত করার পরেও যাত্রা শেষ নয়। এখন শেখো — সমন্বয় করা, সংযোগ দেওয়া, সুরক্ষা দেওয়া। সীমানার বাইরে যাও।</div>
<div class="dialogue en">"You've passed twenty-four doors. The storyteller taught — what the machine is. The judge taught — what evidence is. The bridge builder taught — what survival is. The falconer taught — what finding accurately is. The shipwright taught — what deployment is. And I teach — what certainty is. Because knowledge's ultimate test isn't just understanding, isn't just building, isn't just surviving — it's ensuring that what you've built is genuine. But perfecting isn't the end either. Now learn — to coordinate, to connect, to protect. Go beyond the frontier."</div>

<div class="callout warn" data-door="24"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা টিম prompt বদলালো, deploy করলো, কোনো test ছাড়া। ২০% case ভাঙলো। Prompt regression test = golden set রাখো।</div></div>

<div class="secret-box"><div class="label">দরজা ২৪ — রহস্য</div><div class="text">⚖️ একবার ঠিক মানে সবসময় ঠিক নয়।<br><small>গোল্ডেন সেট বানাও (১০০ জ্ঞাত উত্তর), প্রতিটা পরিবর্তনে যাচাই করো (regression), CI/CD স্বয়ংক্রিয়। পরখ পাথরের মতো।</small></div></div>`
});
