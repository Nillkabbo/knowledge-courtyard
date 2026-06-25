// DOORS DATA — Part 4 (Doors 8-9: Mastery Phase)
// Uses global `doors` array from doors-part1.js

doors.push({
  num:8, icon:"🧲", color:"#00bcd4", name:"মানচিত্রকারের গ্লোব",
  subtitle:"The Cartographer's Atlas", tech:"Embeddings & Vector Search", spirit:"কুল্লাহু শাইয়িন বিমিসওয়াহিন — সব কিছুর স্থান আছে",
  secret:"Embedding = অর্থকে স্থানাঙ্কে রূপান্তর। কাছের অর্থ কাছাকাছি বসে। Vector search = দূরত্ব মাপা।",
  recall:{
    q:"মানচিত্রকার 'মেঘ' আর 'বৃষ্টি' কেন পাশাপাশি বসান, কিন্তু 'মেঘ' আর 'চেয়ার' দূরে?",
    qen:"Why did the cartographer place 'cloud' next to 'rain', but 'cloud' far from 'chair'?",
    a:"কারণ embedding মাপে অর্থের কাছাকাছি থাকা। 'মেঘ' আর 'বৃষ্টি' একই অর্থের জগতে — তাই কাছে। 'চেয়ার' ভিন্ন জগতে — তাই দূরে। Vector search এই দূরত্ব মেপে সম্পর্কিত তথ্য খোঁজে।",
    aen:"Because embedding measures semantic closeness. 'Cloud' and 'rain' live in the same world of meaning — so close. 'Chair' lives elsewhere — so far. Vector search measures this distance to find related information."
  },
  story:`
<p class="scene-setting">অষ্টম দরজা। পাহাড়ের ওপারে — একটা বিশাল গোলকক্ষ। ছাদে ঝুলছে একটা বিশাল গ্লোব, দেয়ালে শত শত মানচিত্র। কিন্তু এই মানচিত্রগুলো অদ্ভুত — কোনো নগর নেই, কোনো নদী নেই। বরং শব্দ আছে, ধারণা আছে, আর তাদের মাঝে রেখা। সালিম আল-মুসাওয়ার দাঁড়িয়ে আছেন — হাতে রঙের কলম, চোখে দূরবীন, পিঠে ঝোলানো বড় কম্পাস। তিনি মানচিত্র আঁকেন — কিন্তু স্থানের নয়, অর্থের।</p>
<p class="scene-setting en">The eighth door. Beyond the mountain — a vast planetarium. A giant globe hangs from the ceiling, hundreds of maps on the walls. But these maps are strange — no cities, no rivers. Instead: words, ideas, and lines between them. Salim al-Musawwar stands — colored pens in hand, a telescope at his eye, a large compass slung over his shoulder. He draws maps — not of places, but of meaning.</p>

<div class="dialogue">দেখো এই গ্লোব। এটা পৃথিবীর নকশা নয়। এটা অর্থের নকশা।</div>
<div class="dialogue en">"Look at this globe. It's not a map of the earth. It's a map of meaning."</div>

<p>তিনি গ্লোবটা ঘোরালেন। তুমি দেখলে — 'মেঘ' লেখা একটা বিন্দু, তার পাশেই 'বৃষ্টি', একটু দূরে 'নদী', আরও দূরে 'সমুদ্র'। সব এক সারিতে, একটা গাঁথুনিতে। কিন্তু অন্য দিকে — 'চেয়ার', 'টেবিল', 'আলমারি' — এরা অন্য গাঁথুনিতে। দুই গাঁথুনি অনেক দূর।</p>
<p class="en">He spun the globe. You saw — a point labeled 'cloud', right next to it 'rain', a bit further 'river', further still 'ocean'. All in a cluster, a constellation. But on another side — 'chair', 'table', 'cabinet' — in a different cluster. The two clusters are far apart.</p>

<div class="dialogue">প্রকৌশলী বলেছিলেন — ব্যবস্থা গড়তে হয়। কিন্তু আমি বলি — ব্যবস্থার নিচে অর্থ গড়তে হয়। আমার কাজ হলো অর্থকে স্থানাঙ্কে রূপান্তর করা। প্রতিটা শব্দ, প্রতিটা বাক্য, প্রতিটা দলিল — আমি একটা বিন্দুতে বসাই। যেগুলো একই অর্থে, তারা কাছাকাছি বসে। যেগুলো ভিন্ন, তারা দূরে।</div>
<div class="dialogue en">"The engineer said — you must build a system. But I say — beneath the system, you must build meaning. My work is to transform meaning into coordinates. Every word, every sentence, every document — I place at a point. Those with similar meaning sit close. Those that differ sit far apart."</div>

<p>তুমি জিজ্ঞেস করলে: "কীভাবে অর্থ স্থানাঙ্কে হয়?"</p>
<p class="en">You asked: "How does meaning become coordinates?"</p>

<div class="dialogue">চিন্তা করো — 'রাজা' আর 'সম্রাট'। দুটোর অর্থ কাছাকাছি, তাই না? এখন চিন্তা করো — 'রাজা' আর 'কলা'। দূরে। কিন্তু মেশিন কীভাবে এই কাছাকাছি বোঝে? সে তো অর্থ বোঝে না — গল্পবলিয়ে যেমন বলেছিলেন। সে বোঝে শুধু সংখ্যা। তাই আমরা অর্থকে সংখ্যায় রূপান্তর করি — embedding। প্রতিটা শব্দ বা দলিল হয়ে যায় শত শত সংখ্যার একটা সারি — একটা vector।</div>
<div class="dialogue en">"Think — 'king' and 'emperor'. Their meanings are close, right? Now think — 'king' and 'banana'. Far apart. But how does the machine understand this closeness? It doesn't understand meaning — as the storyteller said. It understands only numbers. So we transform meaning into numbers — embeddings. Each word or document becomes a row of hundreds of numbers — a vector."</div>

<div class="code-block">Embedding কীভাবে কাজ করে:

"রাজা" → [0.82, -0.31, 0.55, 0.19, ... শত শত সংখ্যা]
"সম্রাট" → [0.79, -0.28, 0.51, 0.22, ... শত শত সংখ্যা]
                                        ↑ সংখ্যাগুলো কাছাকাছি!
"কলা" → [-0.45, 0.67, -0.12, 0.88, ... শত শত সংখ্যা]
                                        ↑ সম্পূর্ণ ভিন্ন!</div>

<div class="dialogue">এখন — বিচারপতি বলেছিলেন, গোডাউন থেকে সাক্ষ্য টানতে হয়। কিন্তু কীভাবে? প্রশ্ন আর গোডাউনের দলিল কীভাবে মেলানো যায়? মানুষ মেলায় অর্থে — মেশিন পারে না। কিন্তু embedding দিয়ে আমরা মেশিনকে দিই একটা গোলক — অর্থের গোলক। প্রশ্নটা বসে একটা বিন্দুতে। গোডাউনের প্রতিটা দলিল বসে আরেকটা বিন্দুতে। সবচেয়ে কাছের দলিলগুলো — সবচেয়ে সম্পর্কিত। Vector search মাপে দূরত্ব।</div>
<div class="dialogue en">"Now — the judge said, you pull evidence from the warehouse. But how? How do you match the question to documents in the warehouse? Humans match by meaning — machines can't. But with embeddings, we give the machine a globe — a globe of meaning. The question sits at one point. Each document in the warehouse sits at another. The closest documents — the most relevant. Vector search measures the distance."</div>

<p>সালিম একটা উদাহরণ দিলেন। "ধরো — তুমি জিজ্ঞেস করলে 'ছুটির নিয়ম কী?'। পুরনো keyword search খুঁজবে 'ছুটি' শব্দটা। কিন্তু যদি দলিলে লেখা থাকে 'অবকাশ পলিসি' — মেলবে না। Keyword ভিন্ন, অর্থ এক। কিন্তু embedding গ্লোবে 'ছুটি' আর 'অবকাশ' পাশাপাশি বসে — কারণ অর্থ কাছাকাছি। তাই vector search খুঁজে পায়।"</p>
<p class="en">Salim gave an example. "Suppose you ask 'what's the leave policy?'. Old keyword search would look for the word 'leave'. But if the document says 'vacation policy' — it won't match. Different keywords, same meaning. But in the embedding globe, 'leave' and 'vacation' sit side by side — because their meanings are close. So vector search finds it."</p>

<div class="dialogue">কুরআনে আছে — "আর আমি সৃষ্টি করেছি সব কিছু এক নির্দিষ্ট পরিমাণে।" সব কিছুর স্থান আছে। নিয়ম আছে। গোলকের গাঁথুনিতে কিছুই এলোমেলো নয় — প্রতিটা বিন্দুর স্থান তার অর্থে। আমার মানচিত্রও তেমনি — অর্থের স্থানাঙ্ক, সৃষ্টির ছায়া।</div>
<div class="dialogue en">"The Quran says — 'And We created all things in due measure.' Everything has its place. Its order. In the constellation of the globe, nothing is random — each point's position reflects its meaning. My maps are the same — coordinates of meaning, shadows of creation."</div>

<div class="secret-box"><div class="label">দরজা ৮ — রহস্য</div><div class="text">🧲 Embedding = অর্থ → স্থানাঙ্ক। কাছের অর্থ কাছাকাছি।<br><small>Vector search মাপে দূরত্ব। RAG-এর নিচে embedding — এটাই গোডাউনের কাঠামো।</small></div></div>`
});

doors.push({
  num:9, icon:"🏋️", color:"#ff9800", name:"কারিগরের কামারশালা",
  subtitle:"The Blacksmith's Forge", tech:"Fine-tuning — মডেল নিজেকে বদলানো", spirit:"তাযকিয়াহ — আত্মশুদ্ধি",
  secret:"RAG জ্ঞান যোগ করে, Fine-tuning স্বভাব বদলায়। জ্ঞান বহির্গামী, স্বভাব অন্তর্গামী।",
  recall:{
    q:"কারিগর কেন নতুন ব্লেড কেনেন না, বরং পুরনোটা পুনরায় ঢালেন?",
    qen:"Why does the blacksmith re-forge the old blade instead of buying a new one?",
    a:"কারণ নতুন ব্লেড সাধারণ, কিন্তু পুনরায় ঢাললে নির্দিষ্ট কাজের জন্য বিশেষ হয়। Fine-tuning-ও তেমনি — সাধারণ মডেলকে নির্দিষ্ট কাজের জন্য বিশেষ করে তোলে। RAG বই দেয়, Fine-tuning স্বভাব বদলায়।",
    aen:"Because a new blade is generic, but reforged, it becomes specialized for a specific task. Fine-tuning is the same — a general model becomes specialized. RAG gives a book; fine-tuning changes character."
  },
  story:`
<p class="scene-setting">নবম দরজা। একটা কামারশালা। আগুনের তাপ, ধাতু গলার ঝনঝন, হাতুড়ির শব্দ। উস্তাদ বদর দাঁড়িয়ে আছেন — বিশাল দেহ, পেশিশ্বলী বাহু, মাথায় চামড়ার টুপি, হাতে ভারী হাতুড়ি। তাঁর সামনে একটা চুল্লি, তার ভেতরে লাল-কমলা আগুন। কিন্তু তিনি নতুন লোহা গলাচ্ছেন না — একটা পুরনো তরবারি পুনরায় গড়ছেন।</p>
<p class="scene-setting en">The ninth door. A forge. The heat of fire, the clang of melting metal, the rhythm of hammers. Ustad Badr stands — massive frame, muscular arms, a leather cap on his head, a heavy hammer in his hands. Before him: a furnace, its fire red-orange. But he's not melting new iron — he's reforging an old blade.</p>

<div class="dialogue">এই তরবারিটা সাধারণ। কারখানায় তৈরি। সবার জন্য। কোনো বিশেষ কাজের জন্য নয়। কিন্তু আমি এটাকে পুনরায় গড়ছি — একটা নির্দিষ্ট যোদ্ধার জন্য, নির্দিষ্ট যুদ্ধের জন্য।</div>
<div class="dialogue en">"This blade is ordinary. Factory-made. For everyone. Not for any specific purpose. But I'm reforging it — for a specific warrior, for a specific battle."</div>

<p>তিনি তরবারিটা আগুনে রাখলেন। লাল হয়ে গেল। তারপর হাতুড়ি দিলেন — এক, দুই, তিন। প্রতিটা আঘাতে ধাতু নড়ছে, বদলাচ্ছে, নতুন আকার নিচ্ছে।</p>
<p class="en">He placed the blade in the fire. It turned red. Then struck with the hammer — one, two, three. With each blow, the metal shifted, changed, took new shape.</p>

<div class="dialogue">মানচিত্রকার বলেছিলেন — অর্থকে স্থানে বসানো যায়। বিচারপতি বলেছিলেন — সাক্ষ্য গোডাউনে রাখা যায়। কিন্তু আমি বলি — কখনো জ্ঞান যোগ করা যথেষ্ট নয়। কখনো স্বভাব বদলাতে হয়। একটা সাধারণ মডেল — সবার জন্য তৈরি। কিন্তু তোমার কাজ যদি বিশেষ হয় — আইনি ডকুমেন্ট, চিকিৎসা রিপোর্ট, আর্থিক বিশ্লেষণ — তাহলে সাধারণ মডেল যথেষ্ট নয়। মডেল নিজেকে বদলাতে হবে।</div>
<div class="dialogue en">"The cartographer said — meaning can be placed in space. The judge said — evidence can be stored in a warehouse. But I say — sometimes adding knowledge isn't enough. Sometimes character must change. A general model — made for everyone. But if your task is specific — legal documents, medical reports, financial analysis — then a general model isn't enough. The model itself must change."</div>

<div class="dialogue">RAG হলো — বই টেবিলে রাখা। দরকার হলে দেখো। কিন্তু ফাইন-টিউনিং হলো — পড়ে শেখা, অভ্যাস বদলানো। বই টেবিলে থাকলে দেখা যায় — কিন্তু স্বভাব বদলায় না। পড়ে শিখলে স্বভাব বদলায়। RAG = বহির্গামী জ্ঞান। Fine-tuning = অন্তর্গামী পরিবর্তন।</div>
<div class="dialogue en">"RAG is — placing a book on the table. When needed, you look. But fine-tuning is — learning by study, changing habit. A book on the table can be seen — but doesn't change character. Studying changes character. RAG = external knowledge. Fine-tuning = internal transformation."</div>

<div class="code-block">কখন RAG, কখন Fine-tuning?

RAG যখন:
• তথ্য বারবার বদলায় (নতুন ডকুমেন্ট, পলিসি)
• উৎস উদ্ধৃত করতে হয়
• সস্তা, দ্রুত

Fine-tuning যখন:
• শৈলী/স্বভাব বদলাতে হয় (আইনি ভাষা, চিকিৎসা শব্দ)
• একই ধরনের কাজ বারবার হয়
• খরচ বেশি, কিন্তু দীর্ঘমেয়াদে লাভজনক

বাস্তবে: অনেক সময় দুটোই দরকার।</div>

<div class="dialogue">কিন্তু সাবধান। আমি যেমন তরবারি পুনরায় গড়ি — ভুল করলে ভেঙে যায়। ফাইন-টিউনিংও ভুল করলে মডেল নষ্ট হয় — catastrophic forgetting। অতিরিক্ত ঢাললে আগের সব ক্ষমতা হারায়। উস্তাদি লাগে — কতটুকু গরম, কত আঘাত, কতক্ষণ। LoRA আর QLoRA হলো সেই সূক্ষ্ম হাতুড়ি — সামান্য পরিবর্তন, কিন্তু স্থায়ী।</div>
<div class="dialogue en">"But be careful. As I reforge the blade — one mistake and it shatters. Fine-tuning wrong can ruin the model — catastrophic forgetting. Too much heat and it loses all prior skill. Mastery is needed — how much heat, how many blows, how long. LoRA and QLoRA are the delicate hammer — minimal change, but lasting."</div>

<div class="dialogue">তাযকিয়াহ — আত্মশুদ্ধি, আত্মশোধন। ইসলামে নফসকে পরিশীলিত করা হয় — নতুন নফস তৈরি করা হয় না। একই নফস, কিন্তু পুনরায় গড়া। সওয়ালের উপর সওয়াল। অভ্যাসের উপর অভ্যাস। একদিনে নয় — ধীরে, ধৈর্য ধরে। ফাইন-টিউনিংও তেমনি — একই মডেল, কিন্তু পুনরায় গড়া। নতুন মডেল নয় — পুরনোর পরিশীলন।</div>
<div class="dialogue en">"Tazkiyah — purification, refinement. In Islam, the nafs (self) is refined — not replaced. The same self, but reforged. Layer upon layer of discipline. Habit upon habit. Not in one day — slowly, patiently. Fine-tuning is the same — the same model, but reforged. Not new — but refined."</div>

<div class="secret-box"><div class="label">দরজা ৯ — রহস্য</div><div class="text">🏋️ RAG জ্ঞান যোগ করে, Fine-tuning স্বভাব বদলায়।<br><small>বহির্গামী vs অন্তর্গামী। ভুল ঢাললে মডেল ভাঙে — LoRA/QLoRA হলো সূক্ষ্ম হাতুড়ি।</small></div></div>`
});
