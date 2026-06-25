// DOORS DATA — Part 10 (Doors 19-20: Builder's Quay Phase)
// Uses global `doors` array from doors-part1.js

doors.push({
  num:19, icon:"💧", color:"#26c6da", name:"সাক্কার নল",
  subtitle:"The Water Bearer's Spout", tech:"Streaming Responses (SSE, Token Delivery)", spirit:"তাদরিজ — ক্রমিক অবতরণ",
  secret:"ব্যবহারকারী অপেক্ষা করে না — দেখতে চায়। টোকেনে টোকেনে পৌঁছে দাও। Time-to-first-token সবচেয়ে গুরুত্বপূর্ণ।",
  recall:{
    q:"সাক্কা কেন পুরো গ্লাস ভরে দেন না, বরং ধীরে ধীরে ঢালেন?",
    qen:"Why does the water bearer pour slowly instead of filling the glass all at once?",
    a:"কারণ তৃষ্ণার্ত মানুষ অপেক্ষা করতে পারে না। এক ঢোঁক পানি দেখলেই আশা জন্মায়। পুরো গ্লাস ভরে দিতে সময় লাগে — কিন্তু প্রথম ফোঁটা দ্রুত। Streaming-ও তেমনি — প্রথম টোকেন দ্রুত, বাকি ধীরে ধীরে।",
    aen:"Because a thirsty person can't wait. Seeing the first sip gives hope. Filling the whole glass takes time — but the first drop is fast. Streaming is the same — first token fast, the rest gradually."
  },
  story:`
<p class="scene-setting">উনিশতম দরজা। ঘাটের পাশেই একটা পাথরের ঝরনা-ঘর। ভেতরে ব্রাসের নল, কাঠের বালতি, মাটির গ্লাস — সারিবদ্ধ। সাক্কা মুনির দাঁড়িয়ে আছেন — নলের হাতলে ফোসকা পড়া হাত, পরিষ্কার সাদা পাটি, একটা মাটির গ্লাস হাতে। একজন তৃষ্ণার্ত মুসাফির এসেছে — মুখ শুকনো, চোখে ক্লান্তি। সে পানি চায়। কিন্তু মুনির পুরো গ্লাস ভরে দিচ্ছেন না। বরং — এক ঢেলে এক ঢেলে ঢালছেন।</p>
<p class="scene-setting en">The nineteenth door. Beside the quay: a stone fountain house. Inside: brass spouts, wooden buckets, clay glasses — in rows. Sakka Munir stands — calloused palms from the brass spout handle, a clean white apron, a clay glass in hand. A thirsty traveler has come — dry mouth, tired eyes. He wants water. But Munir isn't filling the glass completely. Instead — he pours in small measures.</p>

<p>তুমি অবাক। "মুনির ভাই, পুরো গ্লাস ভরে দিন না কেন? লোকটা তৃষ্ণার্ত!"</p>
<p class="en">You were surprised. "Brother Munir, why not fill the glass? The man is thirsty!"</p>

<div class="dialogue">দেখো তাকে।" মুনির ইশারা করলেন। মুসাফিরের চোখ গ্লাসে — প্রথম ঢেলে পানি পড়ল। তার চোখে স্বস্তি। গ্লাস এখনো অর্ধেক — কিন্তু সে জানে পানি আসছে। সে অপেক্ষা করে, কিন্তু হতাশ নয়। কারণ সে দেখতে পাচ্ছে।</div>
<div class="dialogue en">"Look at him." Munir gestured. The traveler's eyes are on the glass — the first pour of water lands. Relief in his eyes. The glass is half-full — but he knows water is coming. He waits, but isn't despairing. Because he can see."</div>

<div class="dialogue">আমি যদি পুরো গ্লাস ভরে দিতে যেতাম — কতক্ষণ? দশ সেকেন্ড। এই দশ সেকেন্ড সে অন্ধকারে অপেক্ষা করত। জানত না পানি আসছে কি না। ভয় পেত — হয়তো নল বন্ধ। হয়তো পানি নেই। কিন্তু আমি ধীরে ঢালি — প্রথম ঢেলে দ্রুত। সে দেখে — আছে। বাকিটা সময় নেয়, কিন্তু সে শান্ত।</div>
<div class="dialogue en">"If I tried to fill the whole glass — how long? Ten seconds. For those ten seconds he'd wait in darkness. Not knowing if water is coming. He'd fear — maybe the spout is closed. Maybe there's no water. But I pour gradually — the first pour is fast. He sees — it's there. The rest takes time, but he's calm."</div>

<div class="dialogue">রত্ন কাটক বলেছিলেন — মডেল টোকেনে টোকেনে উত্তর বানায়। আমি বলি — সেই টোকেনগুলো যেভাবে পৌঁছে দেওয়া হয়, সেটাই পার্থক্য। সব একসাথে বা একটা একটা করে। ব্যবহারকারীর কাছে — একটা একটা করে সবচেয়ে ভালো।</div>
<div class="dialogue en">"The gem cutter said — the model builds answers token by token. I say — how those tokens are delivered makes the difference. All at once, or one by one. To the user — one by one is best."</div>

<div class="code-block">দুই পদ্ধতি — Two Delivery Methods:

১. বাফারড (Buffered) — পুরো উত্তর একসাথে
   মডেল চলে → সম্পূর্ণ উত্তর তৈরি → একবারে পাঠাও
   
   ব্যবহারকারী দেখে: ... ... ... (৫ সেকেন্ড নীরবতা) ... পুরো উত্তর
   সমস্যা: ৫ সেকেন্ড ফাঁকা স্ক্রিন। মনে হয় ভাঙা বা হ্যাং করেছে।

২. স্ট্রিমিং (Streaming) — টোকেনে টোকেনে
   মডেল চলে → প্রতিটা টোকেন সাথে সাথে পাঠাও
   
   ব্যবহারকারী দেখে: প্র...থম... শ...ব্দ... আসছে... (টাইপ হচ্ছে)
   সুবিধা: প্রথম টোকেন দ্রুত। ব্যবহারকারী দেখে — কাজ হচ্ছে।</div>

<div class="dialogue">গবেষণা কী বলে? মানুষ স্ট্রিমিং উত্তরকে ৪০% বেশি দ্রুত মনে করে — এমনকি আসল গতি এক হলেও। কারণ মস্তিষ্ক অপেক্ষা নয় — অগ্রগতি পছন্দ করে। একটা ফোঁটা পানি দেখলে তৃষ্ণা কমে — যদিও গ্লাস এখনো অর্ধেক।</div>
<div class="dialogue en">"What does research say? People perceive streaming answers as 40% faster — even when actual speed is the same. Because the brain likes progress, not waiting. Seeing a drop of water reduces thirst — even if the glass is still half-empty."</div>

<div class="code-block">গুরুত্বপূর্ণ মাপকাঠি — Key Metrics:

TTFT (Time to First Token):
  ব্যবহারকারী প্রশ্ন করল → প্রথম টোকেন পেতে কত সেকেন্ড?
  → এটাই সবচেয়ে গুরুত্বপূর্ণ। ১ সেকেন্ডের নিচে = তাৎক্ষণিক।

TPS (Tokens Per Second):
  প্রতি সেকেন্ডে কত টোকেন আসে?
  → পড়ার গতির সাথে মিল হতে হবে। ৮-১২ টোকেন/সেকেন্ড = আরামদায়ক।

প্রযুক্তি: SSE (Server-Sent Events)
  → সার্ভার থেকে ব্রাউজারে একমুখী স্ট্রিম
  → WebSocket-এর চেয়ে সহজ, হালকা, পর্যাপ্ত</div>

<p>তারপর মুনির একটা জটিলতার কথা বললেন।</p>
<p class="en">Then Munir spoke of a complication.</p>

<div class="dialogue">কিন্তু স্ট্রিমিং সবসময় সহজ নয়। স্থপতি বলেছিলেন — Structured Output, JSON schema। কিন্তু স্ট্রিমিংয়ে পুরো JSON একসাথে আসে না — অর্ধেক আসে। তুমি কী করবে অর্ধেক JSON নিয়ে? এটাই চ্যালেঞ্জ। স্ট্রিমিং + Structured Output একসাথে — দুনিয়া দুটো।</div>
<div class="dialogue en">"But streaming isn't always easy. The architect said — Structured Output, JSON schema. But in streaming, the full JSON doesn't arrive at once — half arrives. What do you do with half a JSON? That's the challenge. Streaming + Structured Output together — two worlds."</div>

<div class="code-block">স্ট্রিমিং + Structured Output সমস্যা:

টোকেন ১-১০: {"name": "Mohamm
টোকেন ১১-২০: ed", "city": "Dh
টোকেন ২১-৩০: aka", "phone": "01

→ প্রতিটা টুকরো ভাঙা JSON। সম্পূর্ণ নয়।
→ সমাধান: স্ট্রিম শেষ হলে পুরো JSON যাচাই করো।
→ অথবা: incremental parsing (ধীরে ধীরে বিল্ড করো)।</div>

<div class="dialogue">সাক্কা হিসেবে আমি শুধু পানি ঢাইি না। আমি নিশ্চিত করি — প্রতিটা ঢেলে পরিমিত, নিরাপদ, দরকারমতো। খুব দ্রুত ঢাললে ছিটকে পড়ে। খুব ধীরে ঢাললে তৃষ্ণা বাড়ে। সঠিক গতি — সেটাই শিল্প। Streaming-এও তেমনি — খুব দ্রুত হলে ব্যবহারকারী পড়তে পারে না, খুব ধীরে হলে ধৈর্য শেষ।</div>
<div class="dialogue en">"As a water bearer, I don't just pour water. I ensure — each pour is measured, safe, as needed. Too fast and it splashes. Too slow and thirst grows. The right speed — that's the art. In streaming too — too fast and the user can't read, too slow and patience runs out."</div>

<div class="dialogue">তাদরিজ — কুরআন কুরআন একবারে নাজিল হয়নি। ২৩ বছর ধরে, ক্রমে ক্রমে, পরিস্থিতি অনুযায়ী। হাদিসে আছে: আয়িশা (রা) বলেছেন — কুরআন যদি একবারে নাজিল হতো, তবে কেউ তা মানত না। ক্রমিক অবতরণ সহজ ছিল — মানুষ হজম করতে পেরেছে। আমার নলও তেমনি — একবারে নয়, ক্রমে ক্রমে। ব্যবহারকারী হজম করে, বোঝে, স্বস্তি পায়।</div>
<div class="dialogue en">"Tadrij — the Quran wasn't revealed all at once. Over 23 years, gradually, according to circumstances. A hadith: Aisha (RA) said — if the Quran had been revealed all at once, no one would have accepted it. Gradual revelation was easier — people could digest it. My spout is the same — not all at once, but gradually. The user digests, understands, finds relief."</div>

<div class="secret-box"><div class="label">দরজা ১৯ — রহস্য</div><div class="text">💧 ব্যবহারকারী অপেক্ষা করে না — দেখতে চায়।<br><small>টোকেনে টোকেনে পৌঁছে দাও। Time-to-first-token সবচেয়ে গুরুত্বপূর্ণ। SSE দিয়ে স্ট্রিমিং। ৪০% বেশি দ্রুত মনে হয়।</small></div></div>`
});

doors.push({
  num:20, icon:"🧵", color:"#ab47bc", name:"তাঁতির তক্তা",
  subtitle:"The Weaver's Loom", tech:"Conversation Memory & Multi-Turn Management", spirit:"মুখতাসার — সংক্ষেপে সংরক্ষণ",
  secret:"Context window ভরে গেলে পুরনো কথা হারায়। সারাংশ বানাও, পুরনো টুকরো চেপে রাখো, নতুন জায়গা করো।",
  recall:{
    q:"তাঁতি কেন পুরনো সুতো ফেলে দেন না, বরং চেপে নতুন সুতোর নিচে লুকিয়ে রাখেন?",
    qen:"Why does the weaver not discard old thread, but presses it beneath the new thread?",
    a:"কারণ পুরনো সুতো ছাড়া নতুন সুতোর কোনো ভিত্তি নেই। কাপড় ছিঁড়ে যায়। কিন্তু সব পুরনো সুতো উপরে রাখলে নতুন বোনা যায় না। তাই পুরনো সুতো চেপে রাখা হয় — ভিত্তি হিসেবে, কিন্তু প্রকাশ্যে নয়। কথোপকথনের স্মৃতিও তেমনি — পুরনো কথা সংক্ষিপ্ত করে ভিত্তি হিসেবে রাখা হয়।",
    aen:"Because without old thread, new thread has no foundation. The cloth tears. But if all old thread stays on top, you can't weave new. So old thread is pressed down — as foundation, but not visible. Conversation memory is the same — old talk is compressed and kept as foundation."
  },
  story:`
<p class="scene-setting">বিশতম দরজা। ঘাটের কোণে একটা তাঁতির কারখানা। সুতোর গন্ধ, কাঠের তক্তার শব্দ, রঙিন সুতোর সারি। তাঁতি রাবিয়া বসে আছেন — চুলে রূপালো সুতোর আংটা, আঙুলে কালির দাগ, তক্তায় দ্রুত হাত চলছে। তাঁর তক্তা অদ্ভুত — কাপড় বোনা হচ্ছে, কিন্তু একটা সমস্যা। তক্তা নির্দিষ্ট দৈর্ঘ্যের। যত বোনা হয়, তত জায়গা ভরে যায়। পুরনো অংশ শেষে বেরিয়ে যায়। সে অংশ হারিয়ে যায়।</p>
<p class="scene-setting en">The twentieth door. At the corner of the quay: a weaver's workshop. The smell of thread, the sound of the wooden loom, rows of colored yarn. Tatni Rabia sits — silver thread-rings in her hair, ink-stained fingers, hands moving swiftly across the loom. Her loom is strange — cloth is being woven, but there's a problem. The loom has a fixed length. As she weaves, space fills up. Old sections get pushed out the end. Those sections are lost.</p>

<p>তুমি জিজ্ঞেস করলে: "আপা, পুরনো অংশ বেরিয়ে গেলে কী হয়?"</p>
<p class="en">You asked: "Sister, what happens when old sections get pushed out?"</p>

<div class="dialogue">ঠিক সেটাই সমস্যা।" রাবিয়া থামলেন। তাঁর তক্তায় একটা কাপড় — শুরুতে সবুজ, মাঝে নীল, শেষে লাল। কিন্তু তিনি আরও বোনা শুরু করলেন — সোনালি সুতো। সবুজ অংশ ধীরে ধীরে তক্তার শেষে ঠেলে গেল। এক সময় — বেরিয়ে গেল। সবুজ অংশ হারিয়ে গেল। কাপড়ে আর সবুজ নেই। কিন্তু সবুজ ছাড়া কাপড় অসম্পূর্ণ।</div>
<div class="dialogue en">"That's exactly the problem." Rabia paused. On her loom: a cloth — green at the start, blue in the middle, red at the end. But she began weaving more — golden thread. The green section slowly pushed toward the end of the loom. Eventually — it fell off. The green was gone. The cloth has no green anymore. But without green, the cloth is incomplete."</div>

<div class="dialogue">রাষ্ট্রদূত বলেছিলেন — context window নির্দিষ্ট মাপের। একসাথে এতটুকুই বসে। যা ভরবে, তাই থাকবে। বেশি দিলে পুরনো বেরিয়ে যায়। আমার তক্তাও সেই context window। নির্দিষ্ট দৈর্ঘ্যের। বেশি বোনলে পুরনো হারায়।</div>
<div class="dialogue en">"The ambassador said — the context window has a fixed size. Only this much fits at once. What you fill, stays. Add too much and old things spill out. My loom is that context window. Fixed length. Weave too much and the old is lost."</div>

<p>তুমি বললে: "তাহলে কী করবেন? হারিয়ে যাক?"</p>
<p class="en">You said: "Then what will you do? Let it be lost?"</p>

<div class="dialogue">না।" রাবিয়া হাসলেন। তিনি একটা কৌশল দেখালেন। তক্তার শেষে সবুজ অংশ ঠেলে যাওয়ার আগে, তিনি একটা ছোট টুকরো কেটে নিলেন — সবুজ অংশের সারাংশ। সেই ছোট টুকরো তিনি নতুন সুতোর নিচে চেপে রাখলেন। উপরে নতুন সোনালি — নিচে সবুজের সারাংশ। চোখে দেখা যায় না, কিন্তু কাপড়ের গায়ে আছে।</div>
<div class="dialogue en">"No." Rabia smiled. She showed a technique. Before the green section gets pushed off the loom, she cut a small piece — a summary of the green. She pressed that small piece beneath the new thread. Golden on top — green summary beneath. Invisible to the eye, but present in the cloth."</div>

<div class="dialogue">এটাই সারাংশ পদ্ধতি — Summarization। পুরনো কথা হারানোর আগে, একটা ছোট সারাংশ বানাই। সেই সারাংশ নতুন কথার সাথে রাখি। ব্যবহারকারী যখন বলে — আমি আগে যে বইয়ের কথা বলেছিলাম — মডেল সারাংশ থেকে খুঁজে পায়। সব নয়, কিন্তু মূল কথা আছে।</div>
<div class="dialogue en">"This is the summarization technique. Before old conversation is lost, I create a small summary. I keep that summary with the new conversation. When the user says — the book I mentioned earlier — the model finds it in the summary. Not everything, but the key points remain."</div>

<div class="code-block">তিন কৌশল — Three Memory Management Strategies:

১. সারাংশ পদ্ধতি (Summarization)
   পুরনো কথা → ছোট সারাংশ বানাও → সারাংশ রাখো, বিস্তারিত ফেলো
   ✓ দ্রুত, সস্টা
   ✗ বিস্তারিত হারায়
   → দীর্ঘ কথোপকথনের জন্য

২. স্লাইডিং উইন্ডো (Sliding Window)
   সবসময় শেষ N-টা বার্তা রাখো। পুরনো সরে যায়।
   ✓ সহজ, স্বয়ংক্রিয়
   ✗ পুরনো প্রসঙ্গ সম্পূর্ণ হারায়
   → সাধারণ চ্যাটবটের জন্য

৩. দীর্ঘমেয়াদী স্মৃতি (Long-Term Memory)
   প্রতিটা বার্তা → embedding → ভেক্টর স্টোরে সংরক্ষণ
   নতুন প্রশ্ন → পুরনো বার্তায় অনুসন্ধান → প্রাসঙ্গিক টুকরো এনো
   ✓ সবচেয়ে শক্তিশালী
   ✗ জটিল, ব্যয়বহুল
   → ব্যক্তিগত সহকারী, দীর্ঘমেয়াদী প্রসঙ্গ</div>

<div class="dialogue">বিচারপতি বলেছিলেন — সাক্ষ্য দিয়ে উত্তর দাও। আমি বলি — স্মৃতি দিয়ে ধারাবাহিকতা দাও। বিচারপতি বাইরের সাক্ষ্য আনেন। আমি ভেতরের স্মৃতি ধরে রাখি। পঞ্চাশটা বার্তা আগে ব্যবহারকারী যা বলেছে — সেটা মনে রাখা ছাড়া কথোপকথন অর্থহীন।</div>
<div class="dialogue en">"The judge said — answer with evidence. I say — maintain continuity with memory. The judge brings external evidence. I hold internal memory. What the user said fifty messages ago — without remembering that, conversation is meaningless."</div>

<div class="dialogue">কাফেলা প্রধান বলেছিলেন — এজেন্ট সিদ্ধান্ত নেয়, টুল ব্যবহার করে। কিন্তু এজেন্ট যদি ভুলে যায় সে কী করছিল? স্মৃতি ছাড়া এজেন্ট অসহায়। সে শুরু করে, ভুলে যায়, আবার শুরু করে। অসীম লুপ। স্মৃতি দিয়ে এজেন্ট ট্র্যাক রাখে — কোথায় আছি, কী করেছি, কী বাকি।</div>
<div class="dialogue en">"The caravan master said — agents decide, use tools. But what if the agent forgets what it was doing? Without memory, the agent is helpless. It starts, forgets, starts again. Infinite loop. With memory, the agent tracks — where am I, what have I done, what's left."</div>

<div class="dialogue">মুখতাসার — ইসলামি জ্ঞানে সংক্ষেপের ঐতিহ্য। ইমাম বুখারি হাজার হাজার হাদিস সংগ্রহ করেছেন। কিন্তু সবাই কি পুরো বই বহন করে? না। মুখতাসার আছে — সংক্ষিপ্ত সংস্করণ। মূল বিষয় সংরক্ষিত, বিস্তারিত সংকুচিত। যাতে জ্ঞান টিকে থাকে, কিন্তু বহন করা সম্ভব। আমার তাঁতিগিরিও মুখতাসার — পুরনো কথা সংক্ষিপ্ত করে রাখা, যাতে নতুন কথা বোনা যায়।</div>
<div class="dialogue en">"Mukhtasar — the tradition of abridgment in Islamic knowledge. Imam Bukhari collected thousands of hadith. But does everyone carry the full book? No. There's the mukhtasar — the abridged version. Core meaning preserved, details compressed. So knowledge survives, but is portable. My weaving is mukhtasar too — compressing old conversation so new conversation can be woven."</div>

<div class="secret-box"><div class="label">দরজা ২০ — রহস্য</div><div class="text">🧵 Context window ভরে গেলে পুরনো কথা হারায়।<br><small>সারাংশ বানাও, পুরনো টুকরো চেপে রাখো, নতুন জায়গা করো। স্মৃতি ছাড়া কথোপকথন অর্থহীন।</small></div></div>`
});
