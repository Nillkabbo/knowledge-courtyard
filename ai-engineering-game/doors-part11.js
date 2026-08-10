// DOORS DATA — Part 11 (Door 21: Builder's Quay Phase — Final)
// Uses global `doors` array from doors-part1.js

doors.push({
  num:21, icon:"🌉", color:"#78909c", name:"সেতু নির্মাতার কাঠামো",
  subtitle:"The Bridge Builder's Framework", tech:"Error Handling & Resilience (Retry, Fallback, Circuit Breaker)", spirit:"ইতিসাম — উট বাঁধো, তারপর ভরসা",
  secret:"API ভাঙবে। রেট লিমিট আসবে। টাইমআউট হবে। প্রশ্ন নয় — কখন। প্রস্তুত থাকো: পুনঃপ্রচেষ্টা, বিকল্প, সার্কিট ব্রেকার।",
  recall:{
    q:"সেতু নির্মাতা কেন একটা স্তম্ভ দিয়ে সেতু বানান না, বরং তিনটা দেন?",
    qen:"Why does the bridge builder use three supports instead of one?",
    a:"কারণ একটা স্তম্ভ ভাঙলে পুরো সেতু পড়ে। তিনটা থাকলে একটা ভাঙলেও দুটো টিকে থাকে — সেতু দাঁড়ায়। প্রোডাকশন সিস্টেমও তেমনি — একটা মডেল বা API ভাঙলে বিকল্প দরকার। নয়তো পুরো সিস্টেম পড়ে।",
    aen:"Because if one support breaks, the whole bridge falls. With three, even if one breaks, two remain — the bridge stands. Production systems too — if one model or API breaks, you need a fallback. Otherwise the whole system crashes."
  },
  story:`
<p class="scene-setting">একুশতম দরজা। তুমি ঘাটের শেষে একটা বিশাল নদীর মুখে দাঁড়িয়েছ। নদীর ওপরে একটা পাথরের সেতু — কিন্তু সাধারণ নয়। তিন স্তম্ভের উপর দাঁড়িয়ে। মুহান্দিস জাফর দাঁড়িয়ে আছেন — দড়ির দাগে আবৃত হাত, কাঁধে মাপের ছড়ি, চোখ প্রতিটা স্তম্ভে নিবদ্ধ। তাঁর পাশে একটা বড় খাতা — প্রতিটা ঝড়ের হিসাব লেখা। কখন এসেছিল, কত ক্ষতি হয়েছিল, কোন স্তম্ভ টলেছিল — সব লেখা।</p>
<p class="scene-setting en">The twenty-first door. You stand at the end of the quay, at the mouth of a great river. Over the river: a stone bridge — but not ordinary. Standing on three supports. Muhandis Jaafar stands — rope-burned hands, a measuring rod on his shoulder, eyes fixed on each support. Beside him: a large ledger — the record of every storm. When it came, how much damage, which support shook — all written.</p>

<p>তুমি কাছে গেলে। "জাফর ভাই, একটা স্তম্ভে সেতু হতো না কেন? তিনটা কেন?"</p>
<p class="en">You stepped close. "Brother Jaafar, couldn't the bridge have one support? Why three?"</p>

<div class="dialogue">কারণ নদী ভাঙবেই।" জাফর তাঁর খাতা খুললেন। "দেখো। বছর তিনেক আগে — বন্যা। প্রথম স্তম্ভ টলে গেল। কিন্তু দ্বিতীয় আর তৃতীয় টিকে রইল। সেতু দাঁড়াল। গত বছর — ভূমিকম্প। তৃতীয় স্তম্ভে ফাটল। কিন্তু প্রথম আর দ্বিতীয় টিকে রইল। একটা হলে — সেতু পড়ত। মানুষ মারা যেত।</div>
<div class="dialogue en">"Because the river will break things." Jaafar opened his ledger. "Look. Three years ago — flood. The first support shifted. But the second and third held. The bridge stood. Last year — earthquake. Crack in the third support. But the first and second held. One support — the bridge would have fallen. People would have died."</div>

<div class="dialogue">বন্দরনায়ক বলেছিলেন — নজরদারি দরকার। আমি বলি — নজরদারি শুরু, কিন্তু যখন সমস্যা আসে, তখন কী? নজরদারি বলে দেবে — বিপদ। কিন্তু বিপদ থেকে বাঁচতে হবে। সেটা আমার কাজ। ঝড় আসবেই। স্তম্ভ টলবেই। প্রশ্ন নয় — ঝড় আসবে কি না। প্রশ্ন — ঝড়ে টিকবে কি না।</div>
<div class="dialogue en">"The harbor master said — monitoring is needed. I say — monitoring is the start, but when trouble comes, then what? Monitoring tells you — danger. But you must survive the danger. That's my job. Storms will come. Supports will shift. The question isn't — will a storm come. The question is — will you survive it."</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">REQUEST</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">may fail</text><defs><marker id="ar21" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar21)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">RETRY</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">backoff</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar21)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">FALLBACK</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">backup model</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Retry + fallback + circuit breaker</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">No backoff = DDoS yourself</text></svg></div>

<div class="code-block">পাঁচটা বিপদ — Five Failure Modes:

১. API ডাউন (Outage)
   → OpenAI/Anthropic সার্ভার বন্ধ। ৫০৩ ত্রুটি।
   
২. রেট লিমিট (Rate Limit)
   → অনেক বেশি কল। ৪২৯ ত্রুটি। "ধীরে করো।"

৩. টাইমআউট (Timeout)
   → মডেল চলছে, কিন্তু ৩০ সেকেন্ডে উত্তর নেই।
   → ব্যবহারকারী অপেক্ষা করতে করতে চলে যায়।

৪. বিকৃত আউটপুট (Malformed)
   → স্থপতির কথা — JSON ভাঙা। কোমা ভুল।
   → পার্স করা যায় না।

৫. আংশিক বিপর্যয় (Cascade)
   → একটা সার্ভিস পড়ে → নির্ভর সার্ভিস পড়ে → সব পড়ে।
   → Domino effect।</div>

<div class="dialogue">এখন দেখো — এই পাঁচটা বিপদের জন্য আমার তিন স্তম্ভ কী?</div>
<div class="dialogue en">"Now see — what are my three supports for these five dangers?"</div>

<div class="code-block">তিন স্তম্ভ — Three Resilience Supports:

১. পুনঃপ্রচেষ্টা (Retry with Backoff)
   প্রথম কল ব্যর্থ? আবার চেষ্টা করো।
   কিন্তু সাথে সাথে নয় — অপেক্ষা করো:
   
   চেষ্টা ১: ব্যর্থ → ১ সেকেন্ড অপেক্ষা
   চেষ্টা ২: ব্যর্থ → ২ সেকেন্ড অপেক্ষা  
   চেষ্টা ৩: ব্যর্থ → ৪ সেকেন্ড অপেক্ষা
   
   একে বলে Exponential Backoff।
   ⚠️ গুরুত্বপূর্ণ: Jitter যোগ করো (এলোমেলো বিলম্ব)
   নাহলে সব ক্লায়েন্ট একসাথে আবার চেষ্টা করে → আবার পড়ে।

২. বিকল্প মডেল (Fallback Chain)
   প্রথম মডেল পড়ে? দ্বিতীয়া চলো।
   
   GPT-4 পড়ে → Claude-এ চলো
   Claude পড়ে → Llama-এ চলো (স্থানীয়)
   সব পড়ে → নির্ধারিত উত্তর দাও (graceful degradation)
   
   ব্যবহারকারী হ্যাং দেখে না — কম ভালো উত্তর পায়, কিন্তু পায়।

৩. সার্কিট ব্রেকার (Circuit Breaker)
   একটা API বারবার পড়ে? থামো — আর চেষ্টা করো না।
   
   বন্ধ (Closed): স্বাভাবিক → কল চলছে
   খোলা (Open): অনেক ব্যর্থতা → কল বন্ধ, ৩০ সেকেন্ড অপেক্ষা
   অর্ধেক (Half-open): একটা কল পরীক্ষা → সফল হলে ফিরে যাও
   
   কেন? কারণ বারবার চেষ্টা করলে সার্ভার আরও পড়ে।
   সার্কিট ব্রেকার সার্ভারকে সুযোগ দেয় — সুস্থ হওয়ার।</div>

<p>তারপর জাফর একটা গল্প বললেন — সবচেয়ে বড় ভুল।</p>
<p class="en">Then Jaafar told a story — the biggest mistake.</p>

<div class="dialogue">পাঁচ বছর আগে আমি একটা সেতু বানিয়েছিলাম। এক স্তম্ভের উপর। নিখুঁত। সুন্দর। সবাই প্রশংসা করল। কিন্তু আমি একটা জিনিস ভুলেছিলাম — ঝড় আসবে। প্রথম বর্ষায় স্তম্ভ ভাঙল। সেতু পড়ল। তিনজন আহত। সেদিন থেকে আমি শিখলাম — সুন্দর নয়, টেকসই বানাতে হবে। একটা স্তম্ভে নয়, তিনটায়। কারণ ঝড় আসবেই।</div>
<div class="dialogue en">"Five years ago I built a bridge. One support. Perfect. Beautiful. Everyone praised it. But I forgot one thing — storms will come. In the first monsoon, the support broke. The bridge fell. Three injured. Since that day I learned — build not beautiful, but durable. Not one support, but three. Because storms will come."</div>

<div class="dialogue">সাক্কা বলেছিলেন — টোকেনে টোকেনে পৌঁছে দাও। আমি বলি — পৌঁছে দিতে গিয়ে নল বন্ধ হলে কী? ব্যবহারকারী অর্ধেক উত্তর পেল, বাকি আসল না। স্ট্রিমিং ভাঙলে — পুনঃসংযোগ দরকার। বা বিকল্প পথ দরকার। প্রতিটা পদক্ষেপে বিপদের সম্ভাবনা — প্রতিটা পদক্ষেপে প্রস্তুতি দরকার।</div>
<div class="dialogue en">"The water bearer said — deliver token by token. I say — what if the spout stops mid-delivery? The user got half the answer, the rest didn't come. Streaming breaks — you need reconnection. Or an alternate path. At every step, the possibility of failure — at every step, preparation needed."</div>

<div class="dialogue">গল্পবলিয়ে বলেছিলেন — LLM মিথ্যা বলতে পারে। আমি বলি — LLM শূন্যও বলতে পারে। কিছুই না। সার্ভার বন্ধ, টাইমআউট, মালফর্মড — কিছুই না। সেই শূন্যতা কীভাবে পূরণ করবে, সেটাই আসল প্রশ্ন। graceful degradation — সুন্দরভাবে হাল ছেড়ে না। বরং — কম ভালো হলেও কিছু দেওয়া। সেরা উত্তর না পারো? ভালো। ভালো না পারো? মোটামুটি। মোটামুটি না পারো? অন্তত বলো — এই মুহূর্তে সমস্যা হচ্ছে, পরে চেষ্টা করো। নীরবতা নয়।</div>
<div class="dialogue en">"The storyteller said — the LLM can lie. I say — the LLM can also give nothing. Server down, timeout, malformed — nothing. How you fill that emptiness, that's the real question. Graceful degradation — not giving up beautifully. Rather — even if less good, give something. Can't give the best? Give good. Can't give good? Give decent. Can't give decent? At least say — there's a problem right now, try later. Not silence."</div>

<div class="dialogue">ইতিসাম — নবীজি (সা) বলেছেন: উট বাঁধো, তারপর আল্লাহর ওপর ভরসা করো। অর্থাৎ — সব সতর্কতা নাও, বাস্তব প্রস্তুতি করো, তারপর ফলাফল আল্লাহর ওপর ছেড়ে দাও। আমি একটা স্তম্ভে সেতু বেঁধে দুয়া করি না — তিনটা স্তম্ভ দাঁড় করাই, তারপর বলি — ঝড়ে টিকিয়ে রাখো। প্রস্তুতি আমার, ফলাফল আল্লাহর। এটাই প্রকৌশলীর ঈমান।</div>
<div class="dialogue en">"I'tisam — the Prophet (peace be upon him) said: tie your camel, then trust in Allah. Meaning — take all precautions, make practical preparations, then leave the outcome to Allah. I don't build a one-support bridge and pray — I build three supports, then say — keep it standing through the storm. Preparation is mine, outcome is Allah's. This is the engineer's faith."</div>

<div class="dialogue">তুমি একুশটি দরজা পার করেছ। গল্পবলিয়ে শিখিয়েছেন মেশিন কী। স্থপতি শিখিয়েছেন কাঠামো কী। বন্দরনায়ক শিখিয়েছেন নজরদারি কী। আর আমি শিখালাম — টিকে থাকা কী। কারণ জ্ঞান শুধু বোঝা নয়, শুধু বানানো নয় — জ্ঞান হলো বানানো জিনিসকে ঝড়ে টিকিয়ে রাখা। কিন্তু টিকে থাকার পরেও যাত্রা শেষ নয়। এখন শেখো — নিখুঁত করা, সমন্বয় করা, সংযোগ দেওয়া, সুরক্ষা দেওয়া। নগরে প্রবেশ করো।</div>
<div class="dialogue en">"You've passed twenty-one doors. The storyteller taught — what the machine is. The architect taught — what structure is. The harbor master taught — what monitoring is. And I teach — what survival is. Because knowledge isn't just understanding, isn't just building — knowledge is keeping what you've built standing through the storm. But surviving isn't the end of the journey either. Now learn — to perfect, to coordinate, to connect, to protect. Enter the city."</div>

<div class="callout warn" data-door="21"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা API timeout-এ পুরো app crash। Retry, fallback, circuit breaker — কিছুই ছিল না। ৫ মিনিট downtime = $১০K ক্ষতি।</div></div>

<div class="secret-box"><div class="label">দরজা ২১ — রহস্য</div><div class="text">🌉 API ভাঙবে। রেট লিমিট আসবে। টাইমআউট হবে।<br><small>প্রশ্ন নয় — কখন। প্রস্তুত থাকো: পুনঃপ্রচেষ্টা (backoff+jitter), বিকল্প মডেল, সার্কিট ব্রেকার। উট বাঁধো, তারপর ভরসা।</small></div></div>`
});
