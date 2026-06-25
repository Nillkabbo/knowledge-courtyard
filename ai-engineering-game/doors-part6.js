// DOORS DATA — Part 6 (Door 13: Deep Currents Phase)
// Phase 3: The Deep Currents — production engineering layer
// Uses global `doors` array from doors-part1.js

doors.push({
  num:13, icon:"🔤", color:"#e8d44d", name:"রত্ন কাটকের কারখানা",
  subtitle:"The Gem Cutter's Workshop", tech:"Tokenization & Transformer Internals", spirit:"তাজবীদ — নিখুঁত বিভাজন",
  secret:"Token ≠ শব্দ। প্রতিটা ভাষা আলাদা ভাবে কাটা যায়। তাপমাত্রা = পরবর্তী শব্দে ঝুঁকি। শূন্য = নির্ধারণ।",
  recall:{
    q:"রত্ন কাটক কেন এক রত্নকে আরেকটার চেয়ে বেশি টুকরোয় কাটেন?",
    qen:"Why does the gem cutter cut one gem into more pieces than another?",
    a:"কারণ প্রতিটা রত্নের স্বভাব আলাদা। একই কাট সব রত্নে চলে না। Tokenization-ও তেমনি — ইংরেজি শব্দ এক ভাবে কাটে, বাংলা অন্য ভাবে, আরবি আরও অন্য ভাবে। ভাষাভেদে টোকেন সংখ্যা ভিন্ন — তাই খরচ আর গতিও ভিন্ন।",
    aen:"Because each gem has its own nature. One cut does not fit all. Tokenization is the same — English words split one way, Bengali another, Arabic yet another. Token counts differ by language — so cost and speed differ too."
  },
  story:`
<p class="scene-setting">তেরোতম দরজা। তুমি পাহাড়ের পাদদেশ ছেড়ে সমুদ্রের ধারে পৌঁছেছ। একটা গুহার মুখে কারখানা — চারপাশে চকচকে পাথর, চকমকের গুঁড়ো মেঝেতে, পেট্রোল ল্যাম্পের আলোয় সব রঙে ঝলসে ওঠে। কেন্দ্রে বসে আছেন জহরি বদর — কপালে চোখালোনি (loupe), আঙুলে রত্নের গুঁড়োর আবরণ, চোখ এত তীক্ষ্ণ যে একটা ফাটলও তাঁর ধরা ছাড়ে না। তাঁর সামনে ছোট ছোট বাক্স — প্রতিটায় এক একটা কাটা রত্ন। কিন্তু প্রতিটা রত্ন ভিন্ন সংখ্যক টুকরোয় কাটা।</p>
<p class="scene-setting en">The thirteenth door. You've descended from the mountain to the seashore. At a cave mouth: a workshop — glittering stones everywhere, diamond dust on the floor, oil-lamp light catching every color. At the center sits Johori Badr — a jeweler's loupe on his forehead, gem-dust on his fingers, eyes so sharp not a single crack escapes him. Before him: small boxes, each holding a cut gem. But each gem is cut into a different number of pieces.</p>

<p>তুমি কাছে গেলে। "বদর চাচা, আপনি এক রত্নকে চার টুকরোয় কাটলেন, আরেকটাকে দুইয়ে, সেটাকে একটায়। কেন আলাদা?"</p>
<p class="en">You stepped closer. "Uncle Badr, you cut one gem into four pieces, another into two, that one whole. Why different?"</p>

<div class="dialogue">কারণ প্রতিটা পাথরের স্বভাব আলাদা। এক হীরা বড়, পরিষ্কার — এটাকে এক টুকরোয় রাখা যায়। আরেকটা ক্ষুদ্র, ফাটল আছে — সাত টুকরো করতে হয়। এক কাটে সব চলে না। কাটের সংখ্যা নির্ভর করে পাথরের উপর।</div>
<div class="dialogue en">"Because each stone has its own nature. One diamond is large, clean — it stays whole. Another is tiny, has cracks — must be seven pieces. One cut does not fit all. The number of cuts depends on the stone."</div>

<p>তুমি ভাবলে — এটা তো সহজ কথা। কিন্তু বদর চাচা তাঁর বাক্সগুলো দেখালেন। "এই নাও। একই বাক্য — তিন ভাষায়। দেখো কী হয়।"</p>
<p class="en">You thought — simple enough. But Badr showed you his boxes. "Here. The same sentence — in three languages. Watch what happens."</p>

<div class="code-block">বাক্য: "জ্ঞান হলো আলো।"
English:  "Knowledge is light." → ৪ টোকেন
বাংলা:    "জ্ঞান হলো আলো।"     → ৭ টোকেন
Arabic:   "العلم نور"           → ৫ টোকেন</div>

<p>তুমি অবাক। একই অর্থ — কিন্তু ইংরেজিতে ৪ টোকেন, বাংলায় ৭, আরবিতে ৫। বাংলায় প্রায় দ্বিগুণ।</p>
<p class="en">You were stunned. Same meaning — but English costs 4 tokens, Bengali 7, Arabic 5. Bengali is nearly double.</p>

<div class="dialogue">গল্পবলিয়ে তোমাকে বলেছিলেন — LLM শব্দ বানায়। কিন্তু কীভাবে? সে কি সত্যিই শব্দ দেখে? না। সে দেখে টোকেন — শব্দের টুকরো। একটা শব্দ এক টোকেন হতে পারে, দুইয়ে, তিনে। কখনো অর্ধেক শব্দ এক টোকেন। বাংলা শব্দ ইংরেজির চেয়ে বেশি টুকরোয় কাটা যায় — কারণ মডেলটা ইংরেজিতে বেশি প্রশিক্ষিত।</div>
<div class="dialogue en">"The storyteller told you — the LLM generates words. But how? Does it truly see words? No. It sees tokens — pieces of words. A word might be one token, two, three. Sometimes half a word is one token. Bengali words are cut into more pieces than English — because the model was trained more on English."</div>

<p>বদর চাচা একটা রত্ন তুলে ধরলেন। একটা ফাটল ধরে সূক্ষ্ম ছুরি চালালেন — পাথরটা দুইয়ে ভাগ হলো। প্রতিটা টুকরো চকচকে, নিখুঁত।</p>
<p class="en">Badr held up a gem. Found a crack, drew a fine blade — the stone split in two. Each piece gleaming, perfect.</p>

<div class="dialogue">এই কাজটাকে বলে Byte Pair Encoding — BPE। মডেল প্রথমে সবকিছু একক অক্ষরে ভাগ করে। তারপর দেখে — কোন অক্ষরজোড় বারবার আসে? সেগুলো এক টুকরোয় জোড়ে। তারপর তিনটে? চারটে? যতক্ষণ না সবচেয়ে কার্যকর কাট পাওয়া যায়। আমি রত্ন কাটি — প্রথমে মোটা কাট, তারপর সূক্ষ্ম। ঠিক তেমনি।</div>
<div class="dialogue en">"This process is called Byte Pair Encoding — BPE. The model first splits everything into single characters. Then it looks — which letter-pairs appear often? Those merge into one piece. Then triples? Quadruples? Until the most efficient cut is found. I cut gems — first rough, then fine. Exactly so."</div>

<p>তারপর তিনি একটা ভুলের কথা বললেন। মুখ নামিয়ে।</p>
<p class="en">Then he spoke of a mistake. Face lowered.</p>

<div class="dialogue">বছর কয়েক আগে একজন আমাকে দুই শব্দ দিল — "straw" আর "berry"। আমি চিনি না। কাটলাম — "straw" এক টুকরো, "berry" এক টুকরো। কিন্তু সে জিজ্ঞেস করল — "strawberry"-এ কয়টা r? আমি বললাম — দুই। ভুল। তিনটি। কারণ আমি "strawberry" কে "straw" + "berry" দুই টুকরো দেখি — ভেতরের অক্ষর আলাদা করে গোনা আমার কাজ নয়। একই ভুল LLM-এ।</div>
<div class="dialogue en">"Years ago, someone gave me two words — 'straw' and 'berry.' I didn't know them. Cut them — 'straw' one piece, 'berry' one piece. But then they asked: how many r's in 'strawberry'? I said — two. Wrong. Three. Because I see 'strawberry' as 'straw' + 'berry' — two pieces. Counting letters inside isn't my job. The LLM makes the same mistake."</p>

<div class="dialogue">এটাই Tokenization-এর সীমা। মডেল অক্ষর দেখে না — টোকেন দেখে। তাই বানান গোনা, অক্ষর গণনা, বিপরীত করা — এসবে মডেল ভুল করে। গল্পবলিয়ে বলেছিলেন — সে সত্য জানে না, প্যাটার্ন জানে। এখন দেখো — সে অক্ষরও ঠিক দেখে না, টোকেন দেখে।</div>
<div class="dialogue en">"This is Tokenization's limit. The model doesn't see letters — it sees tokens. So counting letters, spelling tasks, reversing text — at these the model errs. The storyteller said he doesn't know truth, only patterns. Now see — he doesn't even see letters correctly, only tokens."</div>

<p>বদর চাচা তারপর একটা অন্য বাক্স খুললেন। ভেতরে একটা গোল পাথর — কিন্তু কাটা না। "এটা raw gem। এটাকে কতভাবে কাটা যায়?" তুমি বললে — "অনেকভাবে।" তিনি মাথা নাড়লেন। "ঠিক। আর এটাই তাপমাত্রা — temperature।"</p>
<p class="en">Badr then opened another box. Inside: a round stone — uncut. "This is a raw gem. How many ways can it be cut?" You said — "Many ways." He nodded. "Exactly. And that is temperature."</p>

<div class="code-block">Temperature (তাপমাত্রা):
0.0  = সবচেয়ে সম্ভাব্য কাট → নির্ধারিত, একঘেয়ে, নিরাপদ
0.3  = সাধারণ কাজ → স্থিতিশীল, সামান্য নমনীয়
0.7  = সৃজনশীল কাজ → বৈচিত্র্য, চমক
1.0+ = অনিয়ন্ত্রিত → ঝুঁকিপূর্ণ, অপ্রত্যাশিত</div>

<div class="dialogue">তাপমাত্রা শূন্য মানে — আমি সবসময় সবচেয়ে নিরাপদ কাট করব। একই রত্ন, একই ফল। কোনো চমক নেই, কিন্তু কোনো ভুলও নেই। তাপমাত্রা এক মানে — আমি ঝুঁকি নেওয়া শুরু করি। অদ্ভুত কাট, অপ্রত্যাশিত রত্ন। কখনো সুন্দর। কখনো ভাঙা।</div>
<div class="dialogue en">"Temperature zero means — I always make the safest cut. Same gem, same result. No surprise, but no error. Temperature one means — I start taking risks. Unusual cuts, unexpected gems. Sometimes beautiful. Sometimes shattered."</div>

<p>তুমি বুঝলে। গল্পবলিয়ে বলেছিলেন — সে সবচেয়ে সম্ভাব্য শব্দ বসায়। কিন্তু এখন দেখলে — temperature নিয়ন্ত্রণ করে সেই সম্ভাবনা কতটা নিশ্চিত। শূন্যে — সবসময় একই উত্তর। উচ্চে — প্রতিবার ভিন্ন।</p>
<p class="en">You understood. The storyteller said — he places the most probable word. But now you saw — temperature controls how certain that probability is. At zero — always the same answer. At high — different every time.</p>

<div class="dialogue">আর একটা কথা। মানচিত্রকার বলেছিলেন — অর্থকে স্থানাঙ্কে রূপান্তর। কিন্তু তার আগে কী হয়? টোকেন। প্রথমে টেক্সট টোকেনে কাটা হয়। তারপর প্রতিটা টোকেনকে সংখ্যায় রূপান্তর — token ID। তারপর সেই সংখ্যা embedding-এ যায়। তারপর মডেলের attention প্রতিটা টোকেন দেখে, সব টোকেনের সাথে সম্পর্ক বোঝে। এটাই Transformer architecture। আমি পাথর কাটি — সে সম্পর্ক কাটে।</div>
<div class="dialogue en">"And one more thing. The cartographer said — meaning becomes coordinates. But what happens before that? Tokens. First text is cut into tokens. Then each token becomes a number — a token ID. Then that number goes into embedding. Then the model's attention mechanism looks at each token, understands relationships between all tokens. This is the Transformer architecture. I cut stones — it cuts relationships."</div>

<div class="dialogue">তাজবীদ — কুরআন তেলাওয়াতের নিয়ম। প্রতিটা অক্ষর কীভাবে উচ্চারিত হবে, কোথায় দীর্ঘ হবে, কোথায় গুনগুন করবে — সব নির্ধারিত। একটা হরফ ভুল উচ্চারণ মানে অর্থ বদলে যায়। Tokenization-ও তেমনি — একটা ভুল কাট মানে অর্থ বদলে যায়। আমি রত্ন কাটি তাজবীদের নিয়মে — প্রতিটা কাট নিখুঁত, প্রতিটা টুকরো সঠিক।</div>
<div class="dialogue en">"Tajweed — the science of Quranic recitation. How each letter is pronounced, where to elongate, where to nasalize — all determined. One mispronounced letter changes the meaning. Tokenization is the same — one wrong cut changes the meaning. I cut gems with the discipline of tajweed — every cut precise, every piece correct."</div>

<div class="secret-box"><div class="label">দরজা ১৩ — রহস্য</div><div class="text">🔤 Token ≠ শব্দ। প্রতিটা ভাষা আলাদা ভাবে কাটা যায়।<br><small>Temperature নিয়ন্ত্রণ করে নিশ্চয়তা — ০ = নির্ধারিত, ১ = ঝুঁকি। Transformer attention প্রতিটা টোকেনের সম্পর্ক বোঝে।</small></div></div>`
});
