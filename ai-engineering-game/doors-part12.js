// DOORS DATA — Part 12 (Door 22: Master Craftsmanship Phase)
// Phase 5: Master Craftsmanship — making production systems excellent
// Uses global `doors` array from doors-part1.js

doors.push({
  num:22, icon:"🦅", color:"#8d6e63", name:"বাজপালকের বাসা",
  subtitle:"The Falconer's Nest", tech:"Advanced RAG (Re-ranking, Hybrid Search, Query Rewriting)", spirit:"শূরা — পরামর্শ ও সমন্বয়",
  secret:"একটা উৎস একটা উত্তর। একাধিক উৎস, পুনর্বিন্যাস, প্রশ্ন বদল — নিখুঁত উত্তর। মৌলিক RAG প্রায় ৬০%, উন্নত RAG ৯০%+।",
  recall:{
    q:"বাজপালক কেন একটা বাজ না ছেড়ে একাধিক পাখি ভিন্ন ভিন্ন দিকে ছাড়েন?",
    qen:"Why does the falconer release multiple birds in different directions instead of just one?",
    a:"কারণ একটা বাজ একটা দিক দেখে, একটা শিকার ধরে। কিন্তু সেই শিকার সেরা নাও হতে পারে। একাধিক পাখি ভিন্ন দিকে গেলে বেশি বিকল্প আসে। তারপর বাজপালক সবচেয়ে ভালোটা বাছেন। Hybrid search-ও তেমনি — ভেক্টর + কিওয়ার্ড, দুই দিক থেকে খোঁজো, তারপর re-rank করো।",
    aen:"Because one falcon sees one direction, catches one prey. But that prey may not be the best. Multiple birds in different directions bring more options. Then the falconer picks the best. Hybrid search is the same — vector + keyword, search from two directions, then re-rank."
  },
  story:`
<p class="scene-setting">বাইশতম দরজা। নগরের প্রবেশপথে একটা উঁচু পাথরের মাথায় বাসা — বাজের বাসা। চারপাশে কাঠের তৈরি পার্চ, চামড়ার গ্যান্টলেট, দেয়ালে বিভিন্ন আকারের পাখির খাঁচা। শিকারি গালিব দাঁড়িয়ে আছেন — চামড়ার দস্তানা পরা হাতে একটা প্রশিক্ষিত বাজ, চোখে তীক্ষ্ণ দৃষ্টি, কাঁধে মানচিত্রের থলি। তাঁর সামনে একজন বণিক — হারিয়ে যাওয়া কাফেলার সন্ধান চায়। কিন্তু গালিব একটা বাজ ছাড়ছেন না। তিনি তিনটা প্রস্তুত করছেন — তিন দিকে।</p>
<p class="scene-setting en">The twenty-second door. At the city's gate, atop a high stone: a falcon's nest. Around it: wooden perches, a leather gauntlet, cages of birds of different sizes on the walls. Shikari Ghalib stands — a trained falcon on his leather-gloved hand, sharp eyes, a map pouch on his shoulder. Before him: a merchant seeking a lost caravan. But Ghalib isn't releasing one falcon. He's preparing three — for three directions.</p>

<p>তুমি কাছে গেলে। "গালিব ভাই, একটা বাজ কেন নয়? তিনটা কেন?"</p>
<p class="en">You stepped close. "Brother Ghalib, why not one falcon? Why three?"</p>

<div class="dialogue">কারণ একটা বাজ একটা দিক দেখে।" গালিব প্রথম বাজটা পূর্বে ছাড়লেন। সে উড়ে গেল, চক্কর দিল, ফিরে এল — একটা ধূলোমাখা রাস্তার খবর নিয়ে। "দেখো, এই বাজ বলছে — পূর্বে একটা রাস্তা আছে। কিন্তু কাফেলা সেখানে আছে কি না, সে জানে না। সে শুধু দেখতে পেরেছে — রাস্তা।</div>
<div class="dialogue en">"Because one falcon sees one direction." Ghalib released the first bird east. It flew, circled, returned — news of a dusty road. "See, this falcon says — there's a road to the east. But whether the caravan is there, it doesn't know. It only saw — a road."</div>

<p>তিনি দ্বিতীয় বাজ উত্তরে ছাড়লেন। সে ফিরে এল — কাফেলার চাকার দাগ নিয়ে। তৃতীয় বাজ দক্ষিণে — সে ফিরে এল খোঁড়া উটের খবর নিয়ে।</p>
<p class="en">He released the second bird north. It returned — with traces of caravan wheel marks. The third bird south — it returned with news of a limping camel.</p>

<div class="dialogue">এখন দেখো। একটা বাজ একটা সূত্র। কিন্তু তিনটা সূত্র একসাথে — আমি বুঝতে পারি। পূর্বে রাস্তা, উত্তরে চাকার দাগ, দক্ষিণে খোঁড়া উট। কাফেলা দক্ষিণ দিয়ে গেছে — কারণ উট খোঁড়া, ধীরে চলেছে, চাকার দাগ পূর্ব থেকে উত্তরে মোড় নিয়েছে। একটা বাজ এই সিদ্ধান্তে পৌঁছাতে পারত না। তিনটা লাগল।</div>
<div class="dialogue en">"Now see. One falcon, one clue. But three clues together — I understand. Road to the east, wheel marks to the north, limping camel to the south. The caravan went south — because the camel is limping, moving slowly, wheel marks turned from east to north. One falcon couldn't reach this conclusion. Three were needed."</div>

<div class="dialogue">বিচারপতি বলেছিলেন — গোডাউন থেকে সাক্ষ্য টেনে আনো। মোড়ল বলেছিলেন — সাক্ষ্য কেটে মাপমতো করো। আমি বলি — এক ধরনের সাক্ষ্য যথেষ্ট নয়। একাধিক উৎস থেকে সাক্ষ্য আনো, তারপর সেরাগুলো বাছো।</div>
<div class="dialogue en">"The judge said — pull evidence from the warehouse. The miller said — cut evidence to measured pieces. I say — one type of evidence isn't enough. Bring evidence from multiple sources, then pick the best."</div>

<div class="diagram"><svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="140" height="50" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">QUERY</text><text x="90" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">rewrite</text><defs><marker id="ar22" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><line x1="160" y1="55" x2="200" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar22)"/><rect x="205" y="30" width="140" height="50" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="275" y="50" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">HYBRID</text><text x="275" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">keyword+semantic</text><line x1="345" y1="55" x2="385" y2="55" stroke="#34d399" stroke-width="2" marker-end="url(#ar22)"/><rect x="390" y="30" width="140" height="50" rx="8" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="50" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">RERANK</text><text x="460" y="68" text-anchor="middle" fill="#9a93b8" font-size="9">cross-encoder</text><text x="280" y="110" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Rewrite + hybrid + rerank = prod RAG</text><text x="280" y="135" text-anchor="middle" fill="#9a93b8" font-size="9">Semantic-only misses keywords</text></svg></div>

<div class="code-block">মৌলিক RAG-এর সমস্যা — Basic RAG Problem:

বিচারপতির গোডাউন: প্রশ্ন → embedding → vector search → শীর্ষ ৫টা → LLM

সমস্যা: vector search মাঝে মাঝে ভুল সাক্ষ্য আনে।
  → অর্থের কাছাকাছি কিন্তু আসলে অপ্রাসঙ্গিক
  → নির্দিষ্ট শব্দ মিলল কিন্তু প্রসঙ্গ ভিন্ন
  → ফলাফল: প্রায় ৬০% নির্ভুলতা

সমাধান: আরও বুদ্ধি দাও — প্রশ্ন বদলো, একাধিক উৎস খোঁজো, ফলাফল পুনর্বিন্যাস করো।
ফলাফল: ৯০%+ নির্ভুলতা।</div>

<p>তুমি জিজ্ঞেস করলে: "তিনটা কৌশল কী?"</p>
<p class="en">You asked: "What are the three techniques?"</p>

<div class="code-block">তিন কৌশল — Three Advanced RAG Techniques:

১. প্রশ্ন বদল (Query Rewriting / HyDE)
   ব্যবহারকারীর প্রশ্ন সবসময় স্পষ্ট নয়।
   
   আসল প্রশ্ন: "ছুটির নিয়ম কী?"
   → অস্পষ্ট। কোন ছুটি? বার্ষিক? মেডিকেল?
   
   পুনর্লিখিত: "২০২৪ সালের বার্ষিক ছুটির নীতি অনুযায়ী
   কর্মীদের প্রাপ্য ছুটির দিন কত?"
   → স্পষ্ট। সঠিক সাক্ষ্য পাওয়া সম্ভব।
   
   HyDE (Hypothetical Document Embedding):
   প্রশ্নের একটা কাল্পনিক উত্তর বানাও →
   সেই উত্তরের embedding দিয়ে খোঁজো →
   বাস্তব সাক্ষ্য পাওয়া যায়।

২. মিশ্র অনুসন্ধান (Hybrid Search)
   এক উৎস নয় — দুই:
   
   ভেক্টর সার্চ (Dense): অর্থ দিয়ে খোঁজো
   → "জ্ঞান" এর কাছে "শিক্ষা" পাও
   
   কিওয়ার্ড সার্চ (Sparse/BM25): শব্দ দিয়ে খোঁজো
   → "Section 4.2" ঠিক মিলিয়ে পাও
   
   দুই তালিকা এক করো → আরও বেশি সাক্ষ্য
   → কিছু অর্থে মেলে, কিছু শব্দে — দুইই দরকারি

৩. পুনর্বিন্যাস (Re-ranking)
   ভেক্টর সার্চ ২০টা সাক্ষ্য এনেছে। সব সমান ভালো নয়।
   
   একটা Re-ranker মডেল (cross-encoder) প্রতিটা সাক্ষ্য যাচাই করে:
   → প্রশ্নের সাথে কতটা সত্যিকারের প্রাসঙ্গিক?
   → শুধু অর্থে নয় — গভীরে মিল আছে কি না
   
   নতুন ক্রম: সবচেয়ে প্রাসঙ্গিক → কম → সবচেয়ে কম
   → শীর্ষ ৩-৫টা LLM-কে দাও।
   
   Re-ranker ধীর কিন্তু নিখুঁত। তাই প্রথমে দ্রুত সার্চ,
   তারপর ধীরে পুনর্বিন্যাস। দুই ধাপ।</div>

<div class="dialogue">মানচিত্রকার বলেছিলেন — অর্থকে স্থানাঙ্কে রূপান্তর। আমি বলি — স্থানাঙ্ক এক জিনিস, কিওয়ার্ড আরেক জিন্ন। দুই মিলিয়ে খোঁজো। মানচিত্রকার যদি শুধু দিক নির্ভর করতেন, তাহলে অনেক ভুল জায়গায় পৌঁছাতেন। দিক + দূরত্ব — দুটোই লাগে। ভেক্টর + কিওয়ার্ড — দুটোই লাগে।</div>
<div class="dialogue en">"The cartographer said — meaning becomes coordinates. I say — coordinates are one thing, keywords are another. Search using both. If the cartographer relied only on direction, he'd reach many wrong places. Direction + distance — both needed. Vector + keyword — both needed."</div>

<p>তারপর গালিব একটা ভুলের কথা বললেন। মুখ নামিয়ে।</p>
<p class="en">Then Ghalib spoke of a mistake. Face lowered.</p>

<div class="dialogue">তিন বছর আগে আমি একটা বাজ ছেড়েছিলাম — সবচেয়ে দ্রুত, সবচেয়ে শক্তিশালী। সে উড়ে গেল, দূরে কিছু দেখল, ফিরে এল। আমি তার খবরে বিশ্বাস করে কাফেলা পাঠালাম। কিন্তু বাজটা একটা হরিণের পাল দেখেছিল — কাফেলা নয়। ভুল সন্ধান। আমি একটা উৎসে নির্ভর করেছিলাম। একটা মাত্র। এখন আমি তিনটা ছাড়ি। তারপর তুলনা করি। তারপর সিদ্ধান্ত নেই।</div>
<div class="dialogue en">"Three years ago I released one falcon — the fastest, strongest. It flew, saw something in the distance, returned. I trusted its report and sent the caravan. But the falcon had seen a herd of deer — not the caravan. Wrong intel. I relied on one source. Just one. Now I release three. Then compare. Then decide."</div>

<div class="dialogue">কোষাধ্যক্ষ বলেছিলেন — প্রতিটা টোকেনে দাম। আমি বলি — re-ranking-এ দাম বেশি, কিন্তু ভুল উত্তরের চেয়ে কম। মৌলিক RAG সস্তা কিন্তু প্রায়ই ভুল। উন্নত RAG কিছুটা ব্যয়বহুল কিন্তু প্রায় সঠিক। কোনোটা বেছে নেওয়া নয় — স্তরে স্তরে প্রয়োগ করো। সহজ প্রশ্নে মৌলিক, কঠিন প্রশ্নে উন্নত।</div>
<div class="dialogue en">"The treasurer said — every token costs. I say — re-ranking costs more, but less than wrong answers. Basic RAG is cheap but often wrong. Advanced RAG costs more but is almost right. It's not choosing one — apply in layers. Easy questions get basic, hard questions get advanced."</div>

<div class="dialogue">শূরা — পরামর্শ। কুরআনে আছে: যারা তাদের কাজ পরস্পর পরামর্শে সম্পন্ন করে (৪২:৩৮)। একজন মত দিলেন — হয়তো ভুল। দুজন মত দিলেন — সম্ভাবনা বাড়ল। তিনজন মিলে সিদ্ধান্ত নিলেন — সবচেয়ে নির্ভরযোগ্য। আমার তিন বাজ হলো শূরা — তিন উৎস, তিন মত, এক সিদ্ধান্ত। Hybrid search + re-ranking হলো ডিজিটাল শূরা।</div>
<div class="dialogue en">"Shura — consultation. The Quran says: those who conduct their affairs by mutual consultation (42:38). One opinion — possibly wrong. Two — chances improve. Three deciding together — most reliable. My three falcons are shura — three sources, three opinions, one decision. Hybrid search + re-ranking is digital shura."</div>

<div class="callout warn" data-door="22"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা RAG system wrong chunk size ব্যবহার করলো। সংশ্লিষ্ট তথ্য দুই chunk-এ ভাগ হয়ে গেলো। retrieval মিস।</div></div>

<div class="secret-box"><div class="label">দরজা ২২ — রহস্য</div><div class="text">🦅 একটা উৎস একটা উত্তর। একাধিক উৎস, পুনর্বিন্যাস, প্রশ্ন বদল — নিখুঁত উত্তর।<br><small>Hybrid search (ভেক্টর+কিওয়ার্ড), query rewriting, cross-encoder re-ranking। মৌলিক RAG ~৬০%, উন্নত RAG ৯০%+।</small></div></div>`
});
