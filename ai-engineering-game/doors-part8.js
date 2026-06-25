// DOORS DATA — Part 8 (Doors 16-17: Deep Currents Phase — Final)
// Uses global `doors` array from doors-part1.js

doors.push({
  num:16, icon:"⚓", color:"#42a5f5", name:"বন্দরনায়কের চূড়া",
  subtitle:"The Harbor Master's Tower", tech:"LLMOps & Production Monitoring", spirit:"মুরাকাবা — নিরন্তর পর্যবেক্ষণ",
  secret:"একবার বানালে চলে না। প্রতিদিন দেখো — গতি, খরচ, ভুল, পরিবর্তন। না দেখলে ক্ষয় হয়।",
  recall:{
    q:"বন্দরনায়ক কেন তাঁর চূড়া ছেড়ে নিচে নামেন না, সবসময় ওপরে থাকেন?",
    qen:"Why does the harbor master never leave his tower, always staying above?",
    a:"কারণ ওপর থেকেই সব জাহাজ দেখা যায় — কে কোথায়, কে ধীরে যাচ্ছে, কার মাল ক্ষয় হচ্ছে। নিচে নামলে দৃশ্য হারায়। LLMOps-ও তেমনি — প্রোডাকশন মডেল চালু হলে নজরদারি শুরু। না দেখলে সিস্টেম নীরবে ক্ষয় হয়।",
    aen:"Because from above, all ships are visible — who goes where, who is slow, whose cargo is leaking. Descend and you lose the view. LLMOps is the same — once a model is in production, monitoring begins. Without it, the system silently degrades."
  },
  story:`
<p class="scene-setting">ষোলোতম দরজা। সমুদ্রের মাঝখানে একটা বিশাল পাথরের চূড়া। তার ওপরে — একটা পাহারার কুঠি। দূরবীন, সংকেত-পতাকা, হিসাবের খাতা, ঘণ্টা। মুলতাজিম আব্দুর রহমান দাঁড়িয়ে আছেন — শ্যাওলায় মাড়ানো পোশাক, হাতে পিতলের দূরবীন, চোখ কখনো সমুদ্র থেকে সরে না। নিচে বন্দর — শত শত জাহাজ। প্রতিটা জাহাজ একটা করে কাজ নিয়ে যাচ্ছে। প্রতিটার গতি আলাদা, মাল আলাদা, গন্তব্য আলাদা। রহমান সব দেখছেন। কিছু মিস হয় না।</p>
<p class="scene-setting en">The sixteenth door. At the center of the sea: a great stone tower. Atop it — a watch house. Spyglass, signal flags, ledger book, bell. Multazim Abdur Rahman stands — barnacle-stained robes, a brass spyglass in his hand, eyes never leaving the sea. Below: the harbor — hundreds of ships. Each carries a task. Each has different speed, cargo, destination. Rahman watches all. Nothing is missed.</p>

<p>তুমি চূড়ায় উঠলে। "ভাই, আপনি সারাদিন দাঁড়িয়ে আছেন কেন? জাহাজ তো নিজে চলে।"</p>
<p class="en">You climbed the tower. "Brother, why do you stand all day? The ships sail themselves."</p>

<p>রহমান হাসলেন না। মুখ গম্ভীর করে বললেন: "আস। দেখাই।"</p>
<p class="en">Rahman didn't smile. Face grave, he said: "Come. I'll show you."</p>

<p>তিনি দূরবীন তুলে দেখালেন — একটা জাহাজ ধীরে যাচ্ছে। "এটা গতকাল থেকে ধীর। তিন ঘণ্টা লাগছে যেখানে এক ঘণ্টা লাগত। কিছু একটা গণ্ডগোল।" তারপর আরেকটা দেখালেন — "এই জাহাজটা গত সপ্তাহে ঠিক ছিল। কিন্তু কাল থেকে ভুল মাল নিয়ে যাচ্ছে। মালের মান বদলেছে।" আরেকটা — "এই জাহাজটা সবসময় একই রাস্তায় যেত। কাল থেকে হঠাৎ ভিন্ন রাস্তায়। কিছু বদলেছে।"</p>
<p class="en">He raised the spyglass and showed — one ship moving slowly. "This one has been slow since yesterday. Three hours where it used to take one. Something is wrong." Then another — "This ship was fine last week. But since yesterday it carries the wrong cargo. Quality has changed." Another — "This one always took the same route. Since yesterday, suddenly different route. Something has shifted."</p>

<div class="dialogue">জাহাজ নিজে চলে — ঠিক। কিন্তু কতটা দ্রুত? কোন মাল নিয়ে? কোন রাস্তায়? কত মাল নষ্ট হয়? এসব না দেখলে — একদিন বন্দর ধ্বংস হয়। একটা জাহাজ ডুবে যায়, তুমি জানোও না। একটা জাহাজ ভুল মাল নিয়ে যায়, গ্রাহক অভিযোগ করে, তুমি দেখোই না। নজরদারি না থাকলে — সব নীরবে ক্ষয় হয়।</div>
<div class="dialogue en">"Ships sail themselves — true. But how fast? What cargo? Which route? How much spoilage? Without watching all this — one day the harbor is destroyed. A ship sinks and you don't even know. A ship carries wrong cargo, customers complain, and you never look. Without monitoring — everything decays silently."</div>

<p>তারপর তিনি একটা গল্প বললেন। মুখ নামিয়ে।</p>
<p class="en">Then he told a story. Face lowered.</p>

<div class="dialogue">তিন বছর আগে আমি ক্লান্ত হয়েছিলাম। বললাম — জাহাজ তো চলেই, আমি একদিন বিশ্রাম নেই। নিচে নামলাম। মাত্র একদিন। সেদিন তিনটা জাহাজ পাথরে আটকে গেল। দুটোর মাল উল্টে গেল। একটা ভাসিয়ে নিয়ে গেল স্রোত। যখন জানলাম — অনেক দেরি হয়ে গেছে। দুই দিন লাগল সব ঠিক করতে। একদিনের বিশ্রামে দুই দিনের ক্ষতি।</div>
<div class="dialogue en">"Three years ago I was exhausted. I thought — the ships run fine, I'll rest one day. I went below. Just one day. That day, three ships ran aground. Two had their cargo overturned. One was swept away by the current. By the time I knew — it was too late. Two days to fix everything. One day's rest, two days of damage."</div>

<div class="dialogue">তারপর থেকে আমি নামি না। কারণ প্রতিটা জাহাজ বদলায়। আজ যেটা ভালো, কাল সেটা খারাপ। আজ যেটা দ্রুত, কাল সেটা ধীর। একটা পাথর অদৃশ্য হয়েছে সমুদ্রের তলায়, একটা স্রোত বদলেছে — সব সময় সব বদলায়। আমি দেখি বলেই জানি।</div>
<div class="dialogue en">"Since then I don't descend. Because every ship changes. What's good today is bad tomorrow. What's fast today is slow tomorrow. A rock has appeared underwater, a current has shifted — everything changes all the time. I know because I watch."</div>

<p>তুমি বুঝলে — এটা LLMOps। প্রোডাকশনে মডেল চালু হলে কাজ শেষ নয়। কাজ শুরু।</p>
<p class="en">You understood — this is LLMOps. Launching a model in production is not the end. It's the beginning.</p>

<div class="code-block">চারটে দিক — Four Pillars of Monitoring:

১. গতি (Latency)
   কত সেকেন্ডে উত্তর আসে?
   → ধীরে গেলে: গ্রাহক অপেক্ষা করতে করতে চলে যায়।
   → রেকর্ড করো: p50, p95, p99 — মধ্যম, ধীর, সবচেয়ে ধীর।

২. খরচ (Cost)
   প্রতিটা কলে কত টোকেন খরচ?
   → হঠাৎ বেড়ে গেলে: কোথাও লিক আছে।
   → দৈনিক হিসাব রাখো। বাজেট নির্ধারণ করো।

৩. গুণমান (Quality)
   উত্তর সঠিক? প্রাসঙ্গিক? নিরাপদ?
   → সুগন্ধি বলেছিলেন — পাঁচটা মাত্রায় মাপো।
   → প্রোডাকশনে: নমুনা যাচাই, গ্রাহক প্রতিক্রিয়া, স্বয়ংক্রিয় যাচাই।

৪. পরিবর্তন (Drift)
   ইনপুট বদলেছে? আউটপুট বদলেছে?
   → মানুষ আগে সহজ প্রশ্ন করত, এখন কঠিন — drift।
   → আগে সংক্ষিপ্ত উত্তর, এখন দীর্ঘ — drift।
   → মাপার সময় এসেছে নতুন করে।</div>

<div class="dialogue">প্রহরী বলেছিলেন — শত্রু থেকে রক্ষা করতে হয়। আমি বলি — শত্রু শুধু বাইরে নয়। শত্রু ভেতরেও — ক্ষয়, বদল, জীর্ণতা। একটা মডেল ছয় মাস আগে নিখুঁত ছিল, আজ কেন ভুল করছে? Drift। গ্রাহকের প্রশ্ন বদলেছে, কিন্তু মডেল আগের মতোই উত্তর দিচ্ছে। মান পড়ে গেছে — কিন্তু কেউ দেখছে না।</div>
<div class="dialogue en">"The watchman said — protect from enemies. I say — enemies aren't only outside. Enemies are within — decay, drift, staleness. A model that was perfect six months ago, why is it wrong today? Drift. Customer questions have changed, but the model answers the same old way. Quality has dropped — but no one is watching."</div>

<div class="code-block">LLMOps পাইপলাইন — Production Lifecycle:

বিকাশ → পরীক্ষা → মোতায়েন → নজরদারি → বদল → পুনরাবৃত্তি
(Develop → Test → Deploy → Monitor → Update → Repeat)

  • CI/CD: কোড বদলালে স্বয়ংক্রিয় পরীক্ষা
  • Versioning: প্রতিটা সংস্করণ সংরক্ষিত
  • A/B Testing: দুই সংস্করণ তুলনা
  • Alerting: কিছু গণ্ডগোল হলে সতর্কবার্তা
  • Logging: প্রতিটা কলের রেকর্ড</div>

<div class="dialogue">কোষাধ্যক্ষ বলেছিলেন — খরচ মাপতে হয়। আমি বলি — শুধু আজকের খরচ নয়। গত সপ্তাহের সাথে তুলনা। গত মাসের সাথে তুলনা। প্রবণতা দেখো — কোথায় যাচ্ছে। আজ সস্তা, কাল দামি — কেন? আজ দ্রুত, কাল ধীর — কেন? এই প্রশ্ন না করলে একদিন ধাক্কা খাও।</div>
<div class="dialogue en">"The treasurer said — measure cost. I say — not just today's cost. Compare with last week. Last month. See the trend — where is it heading. Cheap today, expensive tomorrow — why? Fast today, slow tomorrow — why? Without these questions, one day you crash."</div>

<div class="dialogue">মুরাকাবা — সূফি চর্চায় নিরন্তর সচেতনতা। বিশ্বাস যে আল্লাহ সবকিছু দেখেন, সব সময়। "তিনি তোমার সাথে আছেন তুমি যেখানেই থাকো" (৫৭:৪)। এই সচেতনতা বদলে দেয়। যে জানে দেখা হচ্ছে — সে সচেতন থাকে। প্রোডাকশন AI-ও তেমনি। তুমি জানো সবকিছু লেখা হচ্ছে, মাপা হচ্ছে। তাই তুমি সচেতন। আমি এই চূড়ায় দাঁড়িয়ে মুরাকাবা করি — নিরন্তর নজরদারি। নিরন্তর সচেতনতা।</div>
<div class="dialogue en">"Muraqabah — in Sufi practice, constant watchfulness. The awareness that Allah sees everything, always. 'He is with you wherever you are' (57:4). This awareness transforms. One who knows he is watched — stays alert. Production AI is the same. You know everything is logged, measured. So you stay alert. I stand on this tower in muraqabah — constant vigilance. Constant awareness."</div>

<div class="secret-box"><div class="label">দরজা ১৬ — রহস্য</div><div class="text">⚓ একবার বানালে চলে না। প্রতিদিন দেখো।<br><small>গতি, খরচ, গুণমান, পরিবর্তন — চারটে দিক। না দেখলে নীরব ক্ষয়। LLMOps = নিরন্তর নজরদারি।</small></div></div>`
});

doors.push({
  num:17, icon:"🌬️", color:"#ff8a65", name:"হাপর কারিগরের কামারখানা",
  subtitle:"The Bellows Master's Foundry", tech:"Inference Optimization (Quantization, Distillation, Batching)", spirit:"যুহদ — কম দিয়ে বেশি",
  secret:"একই মডেল, কম জ্বালানি। Quantize, distill, batch, cache। প্রোডাকশন ইনফারেন্স মেমরিতে আটকে, গণনায় নয়।",
  recall:{
    q:"কারিগর কেন বড় আগুনের বদলে ছোট শিখায় লোহা গলান?",
    qen:"Why does the blacksmith melt iron with a small flame instead of a huge fire?",
    a:"কারণ বড় আগুন বেশি জ্বালানি খায়, অধিকাংশ নষ্ট হয়। সঠিক কৌশলে ছোট শিখাতেই লোহা গলে — কম খরচে। ইনফারেন্স অপ্টিমাইজেশনও তেমনি — একই ফল, কম মেমরি, কম খরচ।",
    aen:"Because a huge fire consumes more fuel, most wasted. With the right technique, a small flame melts iron — at less cost. Inference optimization is the same — same result, less memory, less cost."
  },
  story:`
<p class="scene-setting">সতেরোতম দরজা। একটা কামারখানা। তপ্ত লোহার গন্ধ, হাপরের (bellows) শ্বাস-প্রশ্বাস, ধাতব টানের শব্দ, দেয়ালে সোজা আগুনের আভা। নাসির আল-হাদ্দাদ দাঁড়িয়ে আছেন — বিশাল বাহু, কালো ধোঁয়ায় মাখা চামড়ার পাটি, হাতে ভারী হাতুড়ি, চোখে আগুনের বোঝা। তাঁর সামনে একটা আগুন — কিন্তু ছোট। অথচ সেই ছোট আগুনে একটা লোহার দণ্ড গলে যাচ্ছে। তুমি অবাক — এত ছোট আগুনে এত বড় কাজ?</p>
<p class="scene-setting en">The seventeenth door. A foundry. The smell of hot iron, the breathing of bellows, the ring of hammer on metal, the glow of fire on the walls. Nasir al-Haddad stands — massive arms, a leather apron blackened with soot, a heavy hammer in his hand, fire in his understanding. Before him: a fire — but small. Yet that small fire melts an iron rod. You're stunned — such a small fire, such great work?</p>

<p>"নাসির ভাই, এই ছোট আগুনে লোহা গলছে কীভাবে? আমি বড় চুলায় দেখেছি — সেখানে দাউদাউ করে জ্বলে, এখানে নিভে যাচ্ছে মনে হচ্ছে।"</p>
<p class="en">"Brother Nasir, how does this small fire melt iron? I've seen big furnaces — they blaze roaring, here it looks like it's dying."</p>

<div class="dialogue">বড় চুলায় বড় আগুন দরকার নয়। দরকার সঠিক হাওয়া। আমার হাপর — এই পাখা — ঠিক যেখানে দরকার, ঠিক যতটা দরকার, হাওয়া পাঠায়। অগ্নিকে তখন আর আগুন নয় — তীর হয়ে যায়। একটা সূচের মতো সূক্ষ্ম, একটা তীরের মতো তীক্ষ্ণ। কম জ্বালানিতে বেশি তাপ। এটাই দক্ষতা।</div>
<div class="dialogue en">"A big furnace doesn't need a big fire. It needs the right air. My bellows — this fan — sends air exactly where needed, exactly as much as needed. Then the fire is no longer fire — it becomes an arrow. Fine as a needle, sharp as a dart. More heat from less fuel. This is efficiency."</div>

<p>তারপর নাসির বললেন — "কিন্তু আমি সবসময় এমন ছিলাম না।" তিনি একটা পুরনো চুলা দেখালেন — বিশাল, প্রায় একটা ঘরের সমান।</p>
<p class="en">Then Nasir said — "But I wasn't always like this." He showed you an old furnace — massive, nearly the size of a room.</p>

<div class="dialogue">এই চুলায় আমি শুরু করেছিলাম। প্রতিটা পেরেক বানাতে এক বস্তা কয়লা। প্রতিটা ছুরি বানাতে অর্ধেক বস্তা। কারণ আগুন সবদিকে ছড়াত — তাপের এক-তৃতীয়াংশ লোহায়, বাকি বাতাসে, দেয়ালে, মাটিতে নষ্ট। আমি ভাবলাম — এটা চলবে না। একদিন কয়লা ফুরিয়ে যাবে, আর পেরেক বাকি থাকবে না।</div>
<div class="dialogue en">"I started with this furnace. Each nail cost a sack of coal. Each knife, half a sack. Because the fire spread everywhere — one-third of the heat reached the iron, the rest wasted to air, walls, ground. I thought — this won't do. One day the coal runs out, and no nails remain."</div>

<div class="dialogue">তারপর আমি চারটা কৌশল শিখলাম। তিনি চারটা হাতিয়ার সাজিয়ে দিলেন:</div>
<div class="dialogue en">"Then I learned four techniques." He laid out four tools:</div>

<div class="code-block">চার কৌশল — Four Optimization Techniques:

১. Quantization (কোয়ান্টাইজেশন) — "ছোট বাক্সে মাল"
   মডেলের প্রতিটা সংখ্যা ১৬-বিট ফ্লোট → ৪-বিট পূর্ণসংখ্যা।
   মানে: কম মেমরিতে একই মডেল।
   → GGUF, GPTQ, AWQ — এই প্রযুক্তিগুলো।
   → হার: ৭০% ছোট, ২-৩% নির্ভুলতা কম।
   → নাসিরের উপমা: বড় বস্তা কয়লা → ছোট বস্তায় সংকুচিত।

২. Distillation (ডিস্টিলেশন) — "ছাত্র শিক্ষক থেকে শেখে"
   বড় মডেল (শিক্ষক) → ছোট মডেল (ছাত্র) শেখায়।
   ছোট মডেল বড় মডেলের জ্ঞান নকল করে — কিন্তু কম মেমরিতে।
   → উদাহরণ: GPT-4 → GPT-4o-mini এই পদ্ধতিতে শেখে।
   → নাসিরের উপমা: শিক্ষকের হাত দেখে ছাত্র শেখে।

৩. Batching (ব্যাচিং) — "একসাথে অনেক"
   একটা সময় একটা কাজ নয় — একসাথে ৩২, ৬৪, ১২৮।
   GPU একসাথে প্রসেস করে — ব্যবহার বাড়ে।
   → নাসিরের উপমা: একটা লোহা নয় — দশটা একসাথে গরম করো।

৪. KV Cache (কে-ভি ক্যাশ) — "পুরনো হিসাব মনে রাখো"
   প্রতিটা টোকেন তৈরি করার সময় পুরনো টোকেনের হিসাব লাগে।
   সেই হিসাব বারবার না করে — মনে রাখো। দ্রুত।
   → নাসিরের উপমা: একই ধরনের পেরেক বানালে — হাত মনে রাখে।</div>

<div class="dialogue">কারিগর বলেছিলেন — fine-tuning মডেলের স্বভাব বদলায়। আমি বলি — স্বভাব বদলানোর দরকার নেই। দরকার — সেই স্বভাবকে কম জ্বালানিতে কাজ করানো। লোহা একই — কিন্তু চুলা বদলেছে। মডেল একই — কিন্তু সার্ভার বদলেছে।</div>
<div class="dialogue en">"The blacksmith said — fine-tuning changes the model's character. I say — you don't need to change the character. You need to make the same character work with less fuel. The iron is the same — but the furnace has changed. The model is the same — but the server has changed."</div>

<p>তুমি জিজ্ঞেস করলে: "কত সাশ্রয় হয়?"</p>
<p class="en">You asked: "How much does it save?"</p>

<div class="code-block">উদাহরণ — একটা মডেল:

বিনা অপ্টিমাইজেশন:
  • ১৬-বিট, এক কাজ এক সময়
  • GPU মেমরি: ৪০ GB
  • গতি: ১০ টোকেন/সেকেন্ড
  • খরচ: $1000/মাস

অপ্টিমাইজড:
  • ৪-বিট + ব্যাচিং + KV Cache
  • GPU মেমরি: ১০ GB (৭৫% কম!)
  • গতি: ৮০ টোকেন/সেকেন্ড (৮ গুণ!)
  • খরচ: $150/মাস (৮৫% কম!)</div>

<p>তুমি চোখ বড় করলে। "৮৫% সাশ্রয়!"</p>
<p class="en">Your eyes widened. "Eighty-five percent savings!"</p>

<div class="dialogue">আর একটা কথা — সবচেয়ে গুরুত্বপূর্ণ। ২০২৫-এর গবেষণা বলে: প্রোডাকশন LLM-এর বেশিরভাগ কাজ গণনায় আটকে নয় — মেমরিতে আটকে। Memory-bound। মানে: প্রসেসর দ্রুত, কিন্তু মেমরি থেকে ডেটা আনতে সময় লাগে। তাই কৌশল হলো — মেমরি কমানো। Quantization মেমরি কমায়। KV Cache মেমরি পুনরায় ব্যবহার করে। এটাই বোঝা দরকার — দ্রুত GPU কিনলেই চলে না। সঠিক কৌশল চাই।</div>
<div class="dialogue en">"And one more thing — most important. 2025 research shows: most production LLM work is bottlenecked not on computation — but on memory. Memory-bound. Meaning: the processor is fast, but fetching data from memory takes time. So the strategy is — reduce memory. Quantization reduces memory. KV Cache reuses memory. You must understand this — buying a faster GPU isn't enough. The right technique is needed."</div>

<div class="dialogue">যুহদ — প্রয়োজনে সন্তুষ্টি। অতিরিক্ত নয়, পরিমিত। প্রাথমিক যুগের মুসলিমরা সাম্রাজ্য জয় করেছেন — অল্প সম্পদে, অল্প অস্ত্রে। কারণ তাঁদের কাছে ছিল না সম্পদের অহংকার — ছিল দক্ষতা। যে কম দিয়ে বেশি করে — সে টিকে থাকে। যে বেশি নিয়ে কম করে — সে একদিন শেষ হয়। কামারখানায় যুহদ — কম জ্বালানি, বেশি ফল। ইনফারেন্সে যুহদ — কম মেমরি, বেশি গতি। এটাই শেষ রহস্য।</div>
<div class="dialogue en">"Zuhd — contentment with sufficiency. Not excess, but proportion. The early Muslims conquered empires — with little wealth, few weapons. Because they had not the arrogance of resources — they had skill. One who does more with less — endures. One who takes more to do less — ends one day. Zuhd in the foundry — less fuel, more output. Zuhd in inference — less memory, more speed. This is the final secret."</div>

<div class="dialogue">তুমি সতেরোটি দরজা পার করেছ। গল্পবলিয়ে শিখিয়েছেন — মেশিন কী। ক্যালিগ্রাফার শিখিয়েছেন — কীভাবে জিজ্ঞেস করতে হয়। আর আমি শিখালাম — কীভাবে টিকে থাকতে হয়। কারণ জ্ঞান শুধু বোঝা নয় — জ্ঞান হলো সেই বোঝাকে কাজে লাগানো, কম খরচে, দীর্ঘকাল। কিন্তু বোঝা আর টিকিয়ে রাখা — এই দুটোই যথেষ্ট নয়। এখন শেখো কীভাবে বানাতে হয়। স্রোতের গভীর থেকে তীরে ফেরো — নির্মাতার ঘাটে।</div>
<div class="dialogue en">"You've passed seventeen doors. The storyteller taught — what the machine is. The calligrapher taught — how to ask. And I teach — how to endure. Because knowledge isn't just understanding — knowledge is putting that understanding to work, at less cost, for longer. But understanding and surviving — these two aren't enough either. Now learn how to build. Return from the deep currents to shore — to the Builder's Quay."</div>

<div class="secret-box"><div class="label">দরজা ১৭ — রহস্য</div><div class="text">🌬️ একই মডেল, কম জ্বালানি।<br><small>Quantize (৪-বিট), Distill (ছোট মডেল), Batch (একসাথে), KV Cache (পুরনো হিসাব)। প্রোডাকশন ইনফারেন্স মেমরিতে আটকে — গণনায় নয়।</small></div></div>`
});
