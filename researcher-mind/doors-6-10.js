// ════════════════════════════════════════
// গবেষকের মন — DOORS 6-10
// The Researcher's Mind: Failure → Identity
// ════════════════════════════════════════

// ══ DOOR 6: TOLERANCE FOR FAILURE ══
doors.push({
  num:6, icon:"🔥", color:"#ef4444", name:"ব্যর্থতার মিলনায়তন",
  subtitle:"The Hall of Failures", tech:"Tolerance for Failure",
  spirit:"সবর — ধৈর্য, বিপদে অটল থাকা",
  secret:"রিসার্চ হলো ব্যর্থতার আরেক নাম। ৯০% পরীক্ষা ব্যর্থ হয়। কিন্তু প্রতিটা ব্যর্থতা একটা উত্তর — এটা কাজ করে না। সেই উত্তর থেকে সঠিক পথ বের হয়। যে ব্যর্থতাকে ভয় পায়, সে গবেষক হয় না।",
  recall:{
    q:"ইব্রাহিম কেন দেয়ালে ঝোলানো ব্যর্থ পরীক্ষাগুলো সযত্নে রাখেন?",
    qen:"Why does Ibrahim carefully keep the failed experiments hanging on the wall?",
    a:"কারণ প্রতিটা ব্যর্থতা একটা উত্তর — এই পথে নয়। যে উত্তর সঠিক পথ খুঁজতে সাহায্য করে। ব্যর্থতা শত্রু নয় — গাইড। যে ব্যর্থতাকে ভালোবাসে, সে সত্য পায়।",
    aen:"Because each failure is an answer — not this path. That answer helps find the right path. Failure is not enemy — it's guide. One who loves failure, finds truth."
  },
  story:`
<p class="scene-setting">ষষ্ঠ দরজা। একটা পুরনো কারখানা — কিন্তু অদ্ভুত। দেয়ালে ফ্রেম করে ঝোলানো — ভাঙা সার্কিট, ফেটে যাওয়া কাঁচ, মুদ্রিত পেপারে লাল দাগ। প্রতিটার নিচে ছোট কার্ড — তারিখ আর নোট। মাঝখানে একটা টেবিলে বসে আছেন ইব্রাহিম — বয়স্ক, হাতে পোড়া দাগ (একসময়ের ব্যর্থ পরীক্ষা), চোখে শান্ত গভীরতা। ধোঁয়ার গন্ধ, পুরনো কাঠের ঘ্রাণ, দূরে কোথাও পানির ড্রিপ।</p>
<p class="scene-setting en">The sixth door. An old factory — but strange. On the walls, framed: broken circuits, cracked glass, printed papers with red marks. Below each, a small card — date and note. At the center table sits Ibrahim — older, burn scars on his hands (from past failed experiments), calm depth in his eyes. Smell of smoke, old wood, distant water drip.</p>

<div class="dialogue">ইব্রাহিম তোমাকে দেখলেন। দেয়ালের দিকে ইশারা করলেন। "এগুলো কী?" তুমি দেখলে — ভাঙা সার্কিট, ফেটে যাওয়া গ্লাস, লাল দাগ দেওয়া পেপার। "ব্যর্থ পরীক্ষা?" তুমি বললে। ইব্রাহিম হাসলেন। "না। এগুলো আমার শিক্ষক। প্রতিটা।"</div>
<div class="dialogue en">Ibrahim saw you. Gestured at the walls. "What are these?" You looked — broken circuits, cracked glass, red-marked papers. "Failed experiments?" you said. Ibrahim smiled. "No. These are my teachers. Each one."</div>

<div class="dialogue">"জাইনব তোমাকে সংযোগ দেখাতে শিখিয়েছেন। ভালো। কিন্তু সংযোগ বানালে তুমি পরীক্ষা করবে। আর পরীক্ষা মানে — ব্যর্থতা।" ইব্রাহিম দেয়াল থেকে একটা ফ্রেম নামিয়ে আনলেন — একটা ভাঙা সার্কিট। "এটা ২০১৭। আমি ভেবেছিলাম এই ডিজাইনে কম্পিউটেশনাল কম লাগবে। তিন মাস কাজ। ফলাফল? সার্কিট পুড়ে গেল। ব্যর্থতা। কিন্তু এই ব্যর্থতা আমাকে শিখিয়েছিল — তাপ ডিসিপেশন এই ডিজাইনে অবহেলা করা যায় না। পরের ডিজাইনে আমি সেটা ঠিক করেছি।"</div>
<div class="dialogue en">"Zainab taught you to see connections. Good. But connections lead to experiments. And experiments mean — failure." Ibrahim took down a frame from the wall — a broken circuit. "This is 2017. I thought this design would need less computation. Three months of work. Result? Circuit burned. Failure. But this failure taught me — heat dissipation can't be ignored in this design. In the next design, I fixed it."</div>

<div class="code-block">গবেষণায় ব্যর্থতা — সংখ্যা দেখো:

    গড় PhD ছাত্রের ব্যর্থ পরীক্ষা: ~৬০-৮০%
    প্রথম পেপার রিজেক্ট হার: ~৬০-৭০%  
    গ্রান্ট প্রপোজাল রিজেক্ট হার: ~৭০-৮৫%
    
    Thomas Edison: ১০,০০০ ব্যর্থতা → ১ বাল্ব
    পেনিসিলিন: ১০ বছর ব্যর্থ তদন্ত → accidental discovery
    Post-it Note: ব্যর্থ আঠা → billion-dollar product

    ডেভেলপার মাইন্ডসেট:
    ❌ "ব্যর্থ হলাম। আমি খারাপ।"
    ❌ "কাজ করল না। শেষ।"
    ❌ "এটা সম্ভব নয়।"
    
    গবেষক মাইন্ডসেট:
    ✅ "ব্যর্থ হলো। কেন? কী শিখলাম?"
    ✅ "কাজ করল না। তার মানে এই পথ 
        ভুল। অন্য পথ খুঁজি।"
    ✅ "এটা সম্ভব নয় — এই উপায়ে। 
        অন্য উপায় আছে।"

    ┌──────────────────────────────────────────┐
    │  ব্যর্থতা প্রক্রিয়াকরণ — ৪ ধাপ:          │
    │                                          │
    │  ১. স্বীকার করো — "ব্যর্থ হয়েছে"        │
    │     → অস্বীকার নয়, লুকানো নয়            │
    │                                          │
    │  ২. বিশ্লেষণ করো — "কেন ব্যর্থ হলো?"    │
    │     → কোন ধাপে ভুল? কোন assumption?     │
    │                                          │
    │  ৩. নথিভুক্ত করো — negative results    │
    │     → ভবিষ্যতের জন্য লিখে রাখো           │
    │     → অন্যরাও জানুক যে এই পথে নয়        │
    │                                          │
    │  ৪. নতুন প্রশ্ন — "তাহলে এখন কী?"      │
    │     → ব্যর্থতা নতুন প্রশ্ন জন্ম দেয়     │
    └──────────────────────────────────────────┘</div>

<div class="dialogue">"আমি তোমাকে একটা গোপন কথা বলি," ইব্রাহিম বললেন, গলা নামিয়ে। "নেতিবাচক ফলাফল — negative results — প্রকাশ করা সবচেয়ে কঠিন। কারণ journal গুলো সাফল্য চায়, ব্যর্থতা নয়। কিন্তু ব্যর্থতা প্রকাশ করা গুরুত্বপূর্ণ — যাতে অন্যরা একই ভুল না করে।" তিনি থামলেন। "আমার সবচেয়ে গর্বের পেপার? একটা negative results পেপার। সেটা ২০০ বার সাইট হয়েছে — কারণ মানুষ জানতে চায় — কোন পথে নয়।"</div>
<div class="dialogue en">"Let me tell you a secret," Ibrahim said, lowering his voice. "Negative results — publishing them is hardest. Because journals want success, not failure. But publishing failure is important — so others don't repeat the same mistake." He paused. "My proudest paper? A negative results paper. It's been cited 200 times — because people want to know — which path NOT to take."</div>

<div class="dialogue">সবর — ধৈর্য। কুরআনে আল্লাহ বলেন: ধৈর্য ধরো, আল্লাহ ধৈর্যশীলদের সাথে আছেন। গবেষণায় সবর হলো — মাসের পর মাস কাজ করা, বারবার ব্যর্থ হওয়া, তবু থামা না। ইব্রাহিম (আ) যখন কাবা বানালেন — বারবার, ধৈর্য ধরে। নূহ (আ) যখন নৌকা বানালেন — শত শত বছর, মানুষ হাসল, তিনি থামলেন না। গবেষকও তেমনি — বারবার ব্যর্থ, তবু থামে না। কারণ জানে — প্রতিটা ব্যর্থতা একটা ইট। সেই ইট দিয়েই সত্যের বাড়ি বানে।</div>
<div class="dialogue en">Sabr — patience. Allah says: be patient, Allah is with the patient. In research, sabr means — working month after month, failing again and again, yet not stopping. Ibrahim (AS) built the Kaaba — repeatedly, with patience. Nuh (AS) built the ark — hundreds of years, people laughed, he didn't stop. A researcher too — fails repeatedly, yet doesn't stop. Because they know — each failure is a brick. Those bricks build the house of truth.</div>

<div class="secret-box">🔥 রিসার্চ হলো ব্যর্থতার আরেক নাম। ৯০% ব্যর্থ, ১০% সফল। কিন্তু সেই ১০% পৃথিবী বদলায়। ব্যর্থতাকে ভয় পেও না — গাইড হিসেবে নাও।</div>`
});

// ══ DOOR 7: WRITING AS THINKING ══
doors.push({
  num:7, icon:"✍️", color:"#fbbf24", name:"কলমের শক্তি",
  subtitle:"The Power of the Pen", tech:"Writing as Thinking",
  spirit:"কলম — যে দ্বারা আল্লাহ শিখিয়েছেন, জ্ঞানের সর্বোচ্চ রূপ",
  secret:"লেখা শেখায় না — লেখা চিন্তা করায়। তুমি যখন লেখো, তখন তোমার ভাবনা স্পষ্ট হয়। অস্পষ্ট ভাবনা অস্পষ্ট লেখা দেয়। স্পষ্ট ভাবনা স্পষ্ট লেখা দেয়। যদি লেখা কঠিন লাগে — চিন্তা অস্পষ্ট। প্রথমে চিন্তা পরিষ্কার করো।",
  recall:{
    q:"মরিয়ম কেন বললেন লেখা হলো চিন্তা করার টুল, শেখানোর টুল নয়?",
    qen:"Why did Maryam say writing is a tool for thinking, not for teaching?",
    a:"কারণ যখন তুমি লেখো, তোমার মাথার ভাবনা কাগজে পড়ে। তখন দেখো — কোথায় ফাঁক, কোথায় ভুল, কোথায় অস্পষ্ট। লেখা তোমাকে শেখায় না — তোমাকে দেখায় তুমি কী জানো, কী জানো না।",
    aen:"Because when you write, your thoughts land on paper. Then you see — where are gaps, errors, fuzziness. Writing doesn't teach you — it shows you what you know and what you don't."
  },
  story:`
<p class="scene-setting">সপ্তম দরজা। একটা ছোট্ট ঘর — দেয়ালে বইয়ের তাক, জানালা দিয়ে আলো আসছে। একটা কাঠের ডেস্ক — তার উপর খাতা, কলম, চা-এর কাপ। ডেস্কে বসে আছেন মরিয়ম — তাঁর চুল বোনা, চশমা নাকে, হাতে কলম। তিনি লিখছেন — ধীরে, নিপুণভাবে। কাগজের গন্ধ, কালির শুকনো ঘ্রাণ, চায়ের মিষ্টি বাষ্প।</p>
<p class="scene-setting en">The seventh door. A small room — bookshelves on walls, light through window. A wooden desk — notebook, pen, teacup. At the desk sits Maryam — braided hair, glasses, pen in hand. She writes — slowly, precisely. Smell of paper, dry ink, sweet tea steam.</p>

<div class="dialogue">মরিয়ম তোমাকে দেখলেন। কলম রাখলেন। "ইব্রাহিম তোমাকে ব্যর্থতা শিখিয়েছেন। ভালো। কিন্তু ব্যর্থতা থেকে শেখার পর কী করবে? লিখবে।" তিনি খাতা খুললেন। "দেখো — এটা আমার গবেষণা ডায়েরি। প্রতিদিন লিখি। কী ভাবলাম, কী করলাম, কী হলো। কেন? কারণ লেখা না হলে ভাবনা উড়ে যায়। লিখলে থাকে।"</div>
<div class="dialogue en">Maryam saw you. Put down the pen. "Ibrahim taught you about failure. Good. But after learning from failure, what do you do? Write." She opened the notebook. "Look — this is my research diary. I write every day. What I thought, what I did, what happened. Why? Because without writing, thoughts fly away. Written, they stay."</div>

<div class="dialogue">"আমি তোমাকে আমার আবিষ্কারের গল্প বলি," মরিয়ম বললেন। "ছয় মাস ধরে একটা সমস্যা নিয়ে কাজ করছিলাম। মাথায় ভাবনা ঘুরছে — কিন্তু সমাধান আসছে না। একদিন আমি বসলাম লিখতে। আধ ঘণ্টা। পুরো সমস্যা কাগজে লিখলাম। মাঝখানে দেখলাম — আমি তিনটা জিনিস আলাদা ভাবছিলাম কিন্তু তিনটিই এক। লেখার সময় সেটা পরিষ্কার হলো। সমাধান এলো — কারণ সমস্যা পরিষ্কার হলো।"</div>
<div class="dialogue en">"Let me tell you the story of my discovery," Maryam said. "For six months I worked on a problem. Thoughts circled in my head — but no solution came. One day I sat to write. Half an hour. Wrote the entire problem on paper. In the middle, I realized — I was thinking of three things separately, but they were one. While writing, that became clear. The solution came — because the problem became clear."</div>

<div class="code-block">গবেষকের লেখা — পাঁচ ধরন:

১. রিসার্চ ডায়েরি (প্রতিদিন)
   ┌─────────────────────────────────────────┐
   │ তারিখ:                                  │
   │ আজ কী ভাবলাম:                          │
   │ কী পরীক্ষা করলাম:                      │
   │ ফলাফল:                                  │
   │ প্রশ্ন যা এখনো আছে:                    │
   │ আগামীকাল কী করবো:                     │
   └─────────────────────────────────────────┘
   → ১০-১৫ মিনিট। প্রতিদিন। এটা তোমার 
     চিন্তার আয়না।

২. পেপার নোটস (প্রতি পেপার পড়ার পর)
   ┌─────────────────────────────────────────┐
   │ পেপার নাম:                              │
   │ মূল দাবি (১ বাক্যে):                   │
   │ পদ্ধতি (৩ বাক্যে):                     │
   │ আমার প্রশ্ন:                            │
   │ আমার কাজে কীভাবে ব্যবহার করবো:        │
   └─────────────────────────────────────────┘

৩. কনসেপ্ট নোট (নতুন আইডিয়া)
   ┌─────────────────────────────────────────┐
   │ আইডিয়া নাম:                            │
   │ সমস্যা কী:                              │
   │ আমার সমাধান:                           │
   │ কেন কাজ করবে বলে মনে হয়:             │
   │ কীভাবে পরীক্ষা করবো:                  │
   │ সম্ভাব্য ব্যর্থতা:                      │
   └─────────────────────────────────────────┘

৪. রিসার্চ পেপার (প্রকাশের জন্য)
   - Abstract (২০০ শব্দ — পুরো পেপারের সারাংশ)
   - Introduction (কেন এই কাজ দরকার)
   - Related Work (আগে কী হয়েছে)
   - Method (আমরা কীভাবে করেছি)
   - Results (কী পেয়েছি)
   - Discussion (এর মানে কী)
   - Conclusion (এক লাইনে)

৫. পিয়ার রিভিউ (অন্যের কাজ পড়ে)
   - এই পেপারের সবচেয়ে শক্তিশালী দিক কী?
   - সবচেয়ে দুর্বল দিক কী?
   - কোন প্রশ্নের উত্তর দেয়নি?
   → এটা তোমার সন্দেহ ধারালো করে


    লেখার সোনার নিয়ম:

    ✊ লেখা = চিন্তা করা। ব্যাখ্যা করা নয়।

    যদি লেখা কঠিন হয় → চিন্তা অস্পষ্ট
    যদি লেখা সহজ হয় → চিন্তা স্পষ্ট

    ফাইনম্যান টেকনিক:
    একটা কনসেপ্ট যেমন চাইলে বাচ্চাকে 
    ব্যাখ্যা করো — কাগজে। কোথায় আটকে যাওয়া, 
    সেটাই তোমার সত্যিকারের ফাঁক।</div>

<div class="dialogue">"আরেকটা কথা," মরিয়ম বললেন। "রাইটিং ব্লক — লেখা শুরু করতে না পারা — সেটা আসলে থিংকিং ব্লক। তুমি লেখা শুরু করতে পারছ না কারণ তোমার মাথায় কিছু পরিষ্কার নেই। সমাধান? শুরু করো — যা মনে আসে লেখো। খারাপ লেখা ভালো লেখার চেয়ে ভালো, কারণ খারাপ লেখা বদলানো যায়। কিছু না লেখা বদলানো যায় না।"</div>
<div class="dialogue en">"One more thing," Maryam said. "Writer's block — inability to start writing — is actually thinking block. You can't start because your head isn't clear. Solution? Start — write whatever comes. Bad writing is better than no writing, because bad writing can be fixed. Nothing can't be fixed."</div>

<div class="dialogue">কলম — আল্লাহ বলেন: কলমের মাধ্যমে শিখিয়েছেন। কুরআনের প্রথম পাঁচটা আয়াতে দুটো জিনিস — পড়ো আর কলম। কারণ পড়া আর লেখা — এই দুটো জ্ঞানের ভিত্তি। কলম শুধু লেখার টুল নয় — কলম চিন্তার টুল। যখন তুমি লেখো, তুমি তোমার চিন্তাকে আল্লাহর দেওয়া একটা নিয়মে বাঁধো। সেই নিয়ম তোমাকে সত্য দেখায়। মরিয়মের কলম শুধু কাগজে লেখে না — মরিয়মের কলম তাঁর মনকে পরিষ্কার করে।</div>
<div class="dialogue en">Qalam — Allah says: He taught by the pen. The Quran's first five verses mention two things — read and pen. Because reading and writing are the foundations of knowledge. The pen is not just a writing tool — it's a thinking tool. When you write, you bind your thoughts to a rule Allah gave. That rule shows you truth. Maryam's pen doesn't just write on paper — it clears her mind.</div>

<div class="secret-box">✍️ লেখা শেখায় না — লেখা চিন্তা করায়। প্রতিদিন ১৫ মিনিট রিসার্চ ডায়েরি লেখো। যদি লেখা কঠিন লাগে — তোমার চিন্তা অস্পষ্ট। লেখো, পরিষ্কার হবে।</div>`
});

// ══ DOOR 8: INTELLECTUAL HUMILITY ══
doors.push({
  num:8, icon:"🤲", color:"#34d399", name:"অজ্ঞতার সাহস",
  subtitle:"The Courage of Ignorance", tech:"Intellectual Humility",
  spirit:"তাওয়াদু — বিনয়, নিজের অজ্ঞতা স্বীকার",
  secret:"গবেষক হলো সে যে বলে — আমি জানি না। এই তিনটা শব্দ সবচেয়ে কঠিন। কিন্তু যে বলতে পারে, সে শেখে। যে বলতে পারে না, সে আটকে যায়। অজ্ঞতা লজ্জা নয় — অজ্ঞতা গবেষণার শুরু।",
  recall:{
    q:"ইউসুফ কেন বললেন সবচেয়ে শক্তিশালী শব্দ হলো আমি জানি না?",
    qen:"Why did Yusuf say the most powerful words are I don't know?",
    a:"কারণ আমি জানি না বললে তুমি খোলা থাকো। নতুন জিনিস গ্রহণ করো। ভুল স্বীকার করো। শেখো। কিন্তু আমি জানি বললে তুমি বন্ধ হয়ে যাও। নতুন কিছু আসে না। আটকে যাও।",
    aen:"Because saying I don't know keeps you open. You accept new things. You admit mistakes. You learn. But saying I know closes you. Nothing new comes. You get stuck."
  },
  story:`
<p class="scene-setting">অষ্টম দরজা। একটা পাহাড়ের চূড়া। বাতাস তীব্র, ঠান্ডা। নিচে উপত্যকা — সবুজ, নদী। চূড়ায় বসে আছেন ইউসুফ — সাদা চাদর, খালি পা, চোখ বন্ধ। তাঁর কোলে একটা খাতা — খোলা, কিন্তু প্রায় ফাঁকা। পাহাড়ের ঠান্ডা বাতাস, দূরে ঈগলের ডাক, শুকনো ঘাসের গন্ধ।</p>
<p class="scene-setting en">The eighth door. A mountain peak. Wind fierce, cold. Below: a valley — green, a river. At the peak sits Yusuf — white shawl, bare feet, eyes closed. On his lap: a notebook — open, but mostly blank. Mountain cold wind, distant eagle cry, smell of dry grass.</p>

<div class="dialogue">ইউসুফ চোখ খুললেন। তোমাকে দেখলেন। "মরিয়ম তোমাকে লেখা শিখিয়েছেন। ভালো। কিন্তু লেখার আগে একটা জিনিস শিখতে হবে।" তিনি খাতা দেখালেন — ফাঁকা। "দেখো — এই ফাঁকা জায়গা। এটাই সবচেয়ে গুরুত্বপূর্ণ। এই ফাঁকা জায়গা না থাকলে নতুন কিছু লেখা যায় না।"</div>
<div class="dialogue en">Yusuf opened his eyes. Saw you. "Maryam taught you writing. Good. But before writing, you must learn one thing." He showed the notebook — blank. "Look — this empty space. This is most important. Without this empty space, nothing new can be written."</div>

<div class="dialogue">"তুমি একজন ডেভেলপার," ইউসুফ বললেন। "তুমি জানো — কীভাবে কোড লেখা যায়, কীভাবে সিস্টেম বানানো যায়। এটা ভালো। কিন্তু এই জ্ঞান যদি তোমাকে অহংকারী বানায় — তাহলে তুমি গবেষক হতে পারবে না। কারণ গবেষক হওয়া মানে — নতুন জিনিস শেখা। আর নতুন জিনিস শেখার শর্ত হলো — আমি জানি না, বলতে পারা।"</div>
<div class="dialogue en">"You're a developer," Yusuf said. "You know — how to code, how to build systems. That's good. But if this knowledge makes you arrogant — you can't be a researcher. Because being a researcher means — learning new things. And the condition for learning is — being able to say, I don't know."</div>

<div class="code-block">বুদ্ধিবৃত্তিক বিনয়ের স্তর — ৪টা ধাপ:

স্তর ১: অজ্ঞতা অস্বীকার (Denial)
  ❌ "আমি সব জানি। এটা সহজ।"
  → এখানে কেউ শেখে না। মস্তিষ্ক বন্ধ।
  
স্তর ২: অজ্ঞতা সচেতনতা (Awareness)  
  ⚠️ "হয়তো আমি সব জানি না। কিন্তু যথেষ্ট জানি।"
  → কিছু খোলা, কিন্তু অহংকার এখনো আছে।

স্তর ৩: অজ্ঞতা স্বীকার (Acceptance)
  ✅ "আমি এইটা জানি না। শিখতে চাই।"
  → গবেষকের অবস্থা। খোলা, কৌতূহলী, নম্র।

স্তর ৪: অজ্ঞতা থেকে শক্তি (Power)
  ✊ "আমি জানি না — এবং সেটাই আমার 
     শক্তি। কারণ জানি না বলেই খুঁজছি।"
  → সর্বোচ্চ স্তর। সক্রেটিস: 
     "আমি জানি যে আমি কিছুই জানি না।"


    অহংকারের ৩টা রূপ — সাবধান:

    ১. "আমি ভালো কোডার, তাই ভালো গবেষক হবো"
       → ভুল। কোডিং হলো টুল। গবেষণা হলো চিন্তা।
       ভালো ছুরিধারী মানে ভালো রাঁধুনি নয়।

    ২. "আমি এই টেকনোলজি জানি, তাই সব জানি"  
       → ভুল। একটা টুল জানা মানে সব জানা নয়।
       গবেষণা হলো সেই টুলের সীমাবদ্ধতা খোঁজা।

    ৩. "আমি অভিজ্ঞ, তাই আমার থেকে শেখার নেই"
       → ভুল। সবচেয়ে বিপজ্জনক। যে শেখা থামিয়ে দেয়,
       সে বাঁচা থামিয়ে দেয়।


    "আমি জানি না" বলার সাহস — ৩টা উপায়:

    ১. কনফারেন্সে প্রশ্ন করো:
       "এই অংশটা বুঝতে পারিনি। 
        আরেকটু ব্যাখ্যা করবেন?"
       → কেউ হাসবে না। সবাই সম্মান করবে।

    ২. সিনিয়রকে বলো:
       "এই পেপারের এই সমীকরণটা 
        কীভাবে কাজ করে?"
       → সিনিয়ররা ভালোবাসে এই প্রশ্ন।

    ৩. নিজেকে বলো:
       "আমি এখনো পুরোপুরি বুঝিনি। 
        আবার পড়বো।"
       → সবচেয়ে গুরুত্বপূর্ণ। নিজের কাছে 
         সৎ হওয়া।</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অহংকারী মন</div>"আমি ৫ বছর ধরে কোড করছি। আমি LLM জানি। RAG জানি। আমার থেকে শেখার নেই।" — এই মন গবেষক হয় না। এই মন আটকে যায়। পাঁচ বছর পরেও একই জায়গায়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ নম্র মন</div>"আমি কোড জানি, কিন্তু গবেষণা পদ্ধতি জানি না। পরিসংখ্যান জানি না। থিওরি জানি না। আমার শেখার অনেক কিছু আছে।" — এই মন গবেষক হয়। প্রতিদিন একটু একটু করে বাড়ে।</div>
</div>

<div class="dialogue">"শেষ কথা," ইউসুফ বললেন। "বিনয় মানে দুর্বলতা নয়। বিনয় মানে শক্তি। যে বলতে পারে আমি জানি না — সে শক্তিশালী। কারণ সে নতুন কিছু গ্রহণ করতে প্রস্তুত। যে বলে আমি জানি — সে দুর্বল। কারণ সে বন্ধ। গবেষণায় সবচেয়ে বড় বাধা অজ্ঞতা নয় — অজ্ঞতা স্বীকার না করা।"</div>
<div class="dialogue en">"Last word," Yusuf said. "Humility is not weakness. Humility is strength. One who can say I don't know — is strong. Because they're ready to receive new things. One who says I know — is weak. Because they're closed. In research, the biggest obstacle is not ignorance — it's not accepting ignorance."</div>

<div class="dialogue">তাওয়াদু — বিনয়। আল্লাহ বলেন: রহমানের বান্দা হলো যারা পৃথিবীতে বিনয়ে চলে। যখন অজ্ঞরা তাদের সম্বোধন করে, তারা বলে সালাম। গবেষক বিনয়ী — কারণ জানে জ্ঞান কত বিশাল, আর সে নিজে কত ছোট। প্রতিটা নতুন আবিষ্কার তাকে আরও বিনয়ী বানায় — কারণ দেখে কত কিছু সে এখনো জানে না। অহংকার মানে স্থবিরতা। বিনয় মানে প্রবাহ।</div>
<div class="dialogue en">Tawadu — humility. Allah says: the servants of the Merciful are those who walk on earth with humility. When the ignorant address them, they say peace. A researcher is humble — because they know how vast knowledge is, and how small they are. Each new discovery makes them more humble — because they see how much they still don't know. Arrogance means stagnation. Humility means flow.</div>

<div class="secret-box">🤲 গবেষক হলো সে যে বলে — আমি জানি না। এই তিন শব্দ সবচেয়ে কঠিন, কিন্তু সবচেয়ে শক্তিশালী। অজ্ঞতা লজ্জা নয় — গবেষণার শুরু।</div>`
});

// ══ DOOR 9: THE LONG GAME — PERSISTENCE ══
doors.push({
  num:9, icon:"🪨", color:"#94a3b8", name:"দীর্ঘ পথের পথিক",
  subtitle:"The Traveler of the Long Path", tech:"Persistence & Grit",
  spirit:"ইস্তিকামাহ — অটলতা, সোজা পথে স্থির থাকা",
  secret:"গবেষণা কোনো দৌড় নয় — ম্যারাথন। প্রতিদিন একটু করে। বিরক্তিকর, ধীর, একঘেয়ে। কিন্তু যে থাকে, সে পায়। প্রতিভা নয় — অধ্যবসায় জিতে। গ্রিট (grit) জিনিসটা প্রতিভার চেয়ে ১০ গুণ শক্তিশালী।",
  recall:{
    q:"খাদিজা কেন তোমাকে একটা গাছ দেখিয়ে গবেষণা বুঝিয়ে দিলেন?",
    qen:"Why did Khadija show you a tree to explain research?",
    a:"কারণ গাছ ধীরে বাড়ে — বছরে এক ইঞ্চি। কিন্তু একদিন ছায়া দেয়, ফল দেয়। গবেষণাও তেমনি — মাসের পর মাস কোনো ফল নয়, তারপর একদিন ফল। যে অপেক্ষা করতে পারে, সে গাছ পায়। যে তাড়াহুড়ো করে, সে বীজ নষ্ট করে।",
    aen:"Because a tree grows slowly — an inch a year. But one day it gives shade, gives fruit. Research too — months with no fruit, then one day fruit. One who can wait, gets the tree. One who rushes, wastes the seed."
  },
  story:`
<p class="scene-setting">নবম দরজা। একটা মরুভূমির কিনারা — কিন্তু সবুজ একটা কোণা। সেখানে একটা বিশাল পুরনো গাছ — বটবৃক্ষ, শিকড় মাটিতে গভীর, ডাল আকাশে ছড়ানো। তার তলায় বসে আছেন খাদিজা — বয়স্ক, কিন্তু মেরুদণ্ড সোজা, হাতে একটা ছোট বীজ। তাঁর পাশে একটা ঝুড়িতে পুরনো বই, নোট, শুকনো পাতা। মরুভূমির শুকনো বাতাস, গাছের ঠান্ডা ছায়া, শিকড়ের কাঠের গন্ধ।</p>
<p class="scene-setting en">The ninth door. A desert edge — but a green corner. There, a vast old tree — banyan, roots deep in earth, branches spread in sky. Beneath it sits Khadija — older, but spine straight, a small seed in her hand. Beside her, a basket of old books, notes, dry leaves. Desert dry wind, the tree's cool shade, smell of root-wood.</p>

<div class="dialogue">খাদিজা তোমাকে দেখলেন। হাতের বীজ দেখালেন। "ইউসুফ তোমাকে বিনয় শিখিয়েছেন। ভালো। কিন্তু বিনয়ী হলেও যদি থেমে যাও — তাহলে কিছু হবে না।" তিনি গাছের দিকে তাকালেন। "এই গাছটা কত বছরের? দেখো — শিকড় এত মোটা। ডাল এত বড়। এই গাছ একদিনে হয়নি। শত বছর ধরে একটু একটু করে।"</div>
<div class="dialogue en">Khadija saw you. Showed the seed in her hand. "Yusuf taught you humility. Good. But if you're humble yet stop — nothing will happen." She looked at the tree. "How old is this tree? Look — roots so thick. Branches so large. This tree didn't grow in a day. A hundred years, little by little."</div>

<div class="dialogue">"আমি যখন প্রথম গবেষণা শুরু করলাম," খাদিজা বললেন, "আমি ভেবেছিলাম — এক বছরে পেপার পাবো। দুই বছরে নাম হবে। তিন বছরে গ্রান্ট। ভুল। প্রথম পেপার পেতে আমার সাড়ে তিন বছর লেগেছে। সাড়ে তিন বছর — কোনো ফল ছাড়া। অনেকে থেমে গেল। আমি থামলাম না। কারণ জানতাম — গবেষণা গাছের মতো। প্রথমে শিকড়, তারপর কাণ্ড, তারপর ডাল, তারপর পাতা, তারপর ফুল, তারপর ফল। সব তার সময়ে।"</div>
<div class="dialogue en">"When I first started research," Khadija said, "I thought — paper in one year. Name in two. Grant in three. Wrong. My first paper took three and a half years. Three and a half years — with no fruit. Many stopped. I didn't. Because I knew — research is like a tree. First roots, then stem, then branches, then leaves, then flowers, then fruit. Everything in its time."</div>

<div class="code-block">গবেষণার টাইমলাইন — বাস্তব সংখ্যা:

    প্রথম পেপার প্রকাশ: গড়ে ১.৫-৩ বছর
    প্রথম গ্রান্ট লাভ: গড়ে ৩-৫ বছর  
    প্রথম সাইটেশন: পেপার প্রকাশের ১-২ বছর পর
    টেনিউর (অধ্যাপক): ৬-৭ বছর পোস্ট-PhD

    ┌─────────────────────────────────────────────┐
    │  গবেষণার গ্রিট স্কেল (Angela Duckworth):   │
    │                                             │
    │  প্রতিভা × প্রচেষ্টা = দক্ষতা                │
    │  দক্ষতা × প্রচেষ্টা = অর্জন                  │
    │                                             │
    │  অর্থাৎ:                                    │
    │  প্রতিভা × প্রচেষ্টা² = অর্জন                │
    │                                             │
    │  প্রচেষ্টা স্কয়ারড!                         │
    │  প্রচেষ্টা প্রতিভার চেয়ে বেশি গুরুত্বপূর্ণ! │
    └─────────────────────────────────────────────┘

    দীর্ঘমেয়াদী চিন্তা — ৩টা সময়সীমা:

    সপ্তাহ: কী পড়বো, কী পরীক্ষা করবো
      → ছোট লক্ষ্য। প্রতি সপ্তাহ একটা পেপার।
      → প্রতি সপ্তাহ একটা নোট।

    মাস: কী বুঝলাম, কী প্রশ্ন আছে  
      → মাসে একটা সামারি। কোথায় আছো?
      → কী শিখলে? কী কনসেপ্ট পরিষ্কার হলো?

    বছর: কোথায় পৌঁছাতে চাও  
      → এই বছরে একটা পেপার প্রস্তুত করবো।
      → ৫ বছরে PhD। ১০ বছরে বিশেষজ্ঞ।

    ┌──────────────────────────────────────────────┐
    │  গ্রিট বানানোর ৪টা অভ্যাস:                  │
    │                                              │
    │  ১. প্রতিদিন কাজ করো — এক ঘণ্টা হলেও       │
    │     → দৈনিক অভ্যাস > পর্বায়মান পরিশ্রম     │
    │                                              │
    │  ২. ছোট লক্ষ্য বানাও — সাপ্তাহিক            │
    │     → এক পেপার পড়ো, এক নোট লেখো           │
    │                                              │
    │  ৩. প্রগ্রেস ট্র্যাক করো — মাসে              │
    │     → কোথায় ছিলে ৩ মাস আগে, কোথায় এখন?    │
    │                                              │
    │  ৪. উদ্‌যাপন করো — প্রতিটা ছোট জয়           │
    │     → প্রথম পেপার পড়া শেষ? উদযাপন।         │
    │     → প্রথম নোট লেখা? উদযাপন।               │
    └──────────────────────────────────────────────┘</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ স্প্রিন্টার মাইন্ডসেট</div>"আমি এই মাসে একটা পেপার লিখবো!" — এক সপ্তাহ পর হতাশ। ছেড়ে দিলে। আবার শুরু। আবার ছেড়ে। এই প্যাটার্নে কিছু হয় না। গবেষণা স্প্রিন্ট নয়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ম্যারাথনার মাইন্ডসেট</div>"আমি প্রতিদিন এক ঘণ্টা পড়বো। প্রতি সপ্তাহ একটা পেপার শেষ করবো। ছয় মাসে একটা আইডিয়া প্রস্তুত করবো।" — ধীর, কিন্তু অবিরাম। এক বছর পর দেখবে — অনেক দূর এসেছ।</div>
</div>

<div class="dialogue">"শেষ কথা," খাদিজা বললেন, বীজটা মাটিতে পুঁতে। "এই বীজ আজ পুঁতেছি। এক সপ্তাহ পর কিছু দেখবে না। এক মাস পর ছোট্ট চারা। এক বছর পর গাছ। দশ বছর পর ফল। তুমি যদি এক সপ্তাহ পর এসে বলো — কোথায় ফল? — তাহলে তুমি বীজ তুলে ফেলবে। আর কিছু হবে না। গবেষণা হলো বীজ পোতা। প্রতিদিন পানি দেওয়া। ধৈর্য ধরা। ফল আসবে — তার সময়ে।"</div>
<div class="dialogue en">"Last word," Khadija said, burying the seed in soil. "This seed I planted today. In a week — nothing visible. In a month — a small shoot. In a year — a tree. In ten years — fruit. If you come in a week and say — where's the fruit? — you'll dig up the seed. And nothing will grow. Research is planting a seed. Watering every day. Being patient. The fruit will come — in its time."</div>

<div class="dialogue">ইস্তিকামাহ — অটলতা। আল্লাহ বলেন: যারা বলে আমাদের রব আল্লাহ, তারপর সোজা থাকে — তাদের কাছে ফেরেশতা নামে, ভয় করো না, দুঃখ করো না। ইস্তিকামাহ মানে — শুরু করার পর সোজা থাকা। বাধা এলেও, ব্যর্থতা এলেও, একঘেয়েমি এলেও — থামা না। গবেষকের সবচেয়ে বড় গুণ প্রতিভা নয় — ইস্তিকামাহ। কারণ প্রতিভা দিয়ে শুরু করা যায়, কিন্তু ইস্তিকামাহ ছাড়া শেষ করা যায় না।</div>
<div class="dialogue en">Istiqamah — steadfastness. Allah says: those who say our Lord is Allah, then remain firm — angels descend on them: fear not, grieve not. Istiqamah means — after starting, staying straight. Obstacles come, failures come, monotony comes — yet not stopping. A researcher's greatest quality is not talent — it's istiqamah. Because talent starts, but without istiqamah, nothing finishes.</div>

<div class="secret-box">🪨 গবেষণা ম্যারাথন — স্প্রিন্ট নয়। প্রতিদিন এক ঘণ্টা, প্রতি সপ্তাহ এক পেপার, প্রতি মাস এক সামারি। ধীর, কিন্তু অবিরাম। প্রচেষ্টা প্রতিভার চেয়ে ১০ গুণ শক্তিশালী।</div>`
});

// ══ DOOR 10: IDENTITY SYNTHESIS — THE RESEARCHER'S BIRTH ══
doors.push({
  num:10, icon:"🎓", color:"#a78bfa", name:"গবেষকের জন্ম",
  subtitle:"The Researcher's Birth", tech:"Identity Synthesis — All Nine Masters Return",
  spirit:"তাওহিদ — একত্ব, সব জ্ঞানের একত্ব",
  secret:"গবেষক হওয়া মানে কোনো দক্ষতা নয় — একটা পরিচয়। নয়টা দরজা, নয়জন শিক্ষক, নয়টা গুণ — সব এক হয়ে গেছে। তুমি এখন কৌতূহলী, প্রশ্নকারী, পাঠক, সন্দেহকারী, সংযোগকারী, ব্যর্থতা-বন্ধু, লেখক, বিনয়ী, এবং অধ্যবসায়ী। এক কথায় — তুমি গবেষক।",
  recall:{
    q:"দশটা দরজা পেরোনোর পর তুমি কী হলে? কোন একটা গুণ নাকি সব গুণ?",
    qen:"After passing ten doors, what did you become? One quality or all?",
    a:"সব গুণ। কৌতূহল থেকে শুরু, অধ্যবসায়ে শেষ — কিন্তু সবগুলো এক মানুষের ভেতরে। গবেষক হলো সে যার ভেতরে নয়টা দরজা খোলা। সে একই সাথে শিশুর মতো কৌতূহলী আর বৃদ্ধের মতো ধৈর্যশীল। সেটাই গবেষকের পরিচয়।",
    aen:"All qualities. Curiosity at start, persistence at end — but all in one person. A researcher is one whose nine doors are open. Simultaneously as curious as a child and as patient as an elder. That is the researcher's identity."
  },
  story:`
<p class="scene-setting">দশম দরজা। তুমি আবার সেই চৌরাস্তায় দাঁড়িয়ে আছো — যেখানে শুরু করেছিলে। কিন্তু এখন চার দিকের রাস্তা আর ভয়ংকর মনে হচ্ছে না। তুমি চারপাশে তাকালে — এবং দেখলে, তোমার নয়জন শিক্ষক দাঁড়িয়ে আছেন। নুসরাত, ইমরান, সালমা, দাউদ, জাইনব, ইব্রাহিম, মরিয়ম, ইউসুফ, খাদিজা। প্রত্যেকে হাসছেন। প্রত্যেকের হাতে একটা করে উপহার। বাতাসে সব গন্ধ মিশে আছে — কাঁচা আম, পাথর, কালি, ফুল, ধোঁয়া, চা, মরুভূমির ধুলো, পাহাড়ের ঠান্ডা।</p>
<p class="scene-setting en">The tenth door. You stand again at the crossroads — where you began. But the four roads no longer seem frightening. You look around — and see your nine teachers standing. Nusrat, Imran, Salma, Dawud, Zainab, Ibrahim, Maryam, Yusuf, Khadija. Each smiling. Each holding a gift. The wind carries all scents mixed — raw mango, stone, ink, flowers, smoke, tea, desert dust, mountain cold.</p>

<div class="dialogue">নুসরাত এগিয়ে এলেন — কাঁচা আম হাতে। "কৌতূহল।" ইমরান — ছেনি হাতে। "প্রশ্ন।" সালমা — পাতা হাতে। "পাঠ।" দাউদ — ক্যালিপার হাতে। "সন্দেহ।" জাইনব — ডায়েরি হাতে। "সংযোগ।" ইব্রাহিম — ভাঙা সার্কিট হাতে। "ব্যর্থতা।" মরিয়ম — কলম হাতে। "লেখনী।" ইউসুফ — ফাঁকা খাতা হাতে। "বিনয়।" খাদিজা — বীজ হাতে। "অধ্যবসায়।"</div>
<div class="dialogue en">Nusrat stepped forward — mango in hand. "Curiosity." Imran — chisel. "Question." Salma — paper. "Reading." Dawud — calipers. "Doubt." Zainab — diary. "Connection." Ibrahim — broken circuit. "Failure." Maryam — pen. "Writing." Yusuf — blank notebook. "Humility." Khadija — seed. "Persistence."</div>

<div class="dialogue">তাঁরা সবাই তোমার চারপাশে দাঁড়ালেন। খাদিজা বললেন: "তুমি ভেবেছিলে গবেষক হওয়া মানে একটা নতুন দক্ষতা শেখা। ভুল। গবেষক হওয়া মানে একটা নতুন মানুষ হওয়া। এই নয়টা গুণ আলাদা নয় — এগুলো এক মানুষের নয়টা রূপ। কৌতূহল থেকে জন্ম নেয় প্রশ্ন। প্রশ্ন থেকে পাঠ। পাঠ থেকে সন্দেহ। সন্দেহ থেকে সংযোগ। সংযোগ থেকে পরীক্ষা। পরীক্ষা থেকে ব্যর্থতা। ব্যর্থতা থেকে লেখা। লেখা থেকে বিনয়। বিনয় থেকে অধ্যবসায়। আর অধ্যবসায় থেকে আবার কৌতূহ়ল। এটা চক্র। গবেষক এই চক্রে ঘোরে — জীবনভর।"</div>
<div class="dialogue en">They all stood around you. Khadija said: "You thought becoming a researcher means learning a new skill. Wrong. Becoming a researcher means becoming a new person. These nine qualities are not separate — they are nine forms of one person. Curiosity births questions. Questions lead to reading. Reading leads to doubt. Doubt leads to connections. Connections lead to experiments. Experiments lead to failure. Failure leads to writing. Writing leads to humility. Humility leads to persistence. And persistence leads back to curiosity. It's a cycle. A researcher spins in this cycle — for life."</div>

<div class="code-block">গবেষকের চক্র — The Research Loop:

    ┌──────────────────────────────────────────┐
    │                                          │
    │    ① কৌতূহল (Curiosity)                  │
    │         ↓                                │
    │    ② প্রশ্ন (Question)                    │
    │         ↓                                │
    │    ③ পাঠ (Reading)                       │
    │         ↓                                │
    │    ④ সন্দেহ (Doubt)                      │
    │         ↓                                │
    │    ⑤ সংযোগ (Connection)                 │
    │         ↓                                │
    │    ⑥ ব্যর্থতা (Failure)                  │
    │         ↓                                │
    │    ⑦ লেখা (Writing)                      │
    │         ↓                                │
    │    ⑧ বিনয় (Humility)                    │
    │         ↓                                │
    │    ⑨ অধ্যবসায় (Persistence)             │
    │         ↓                                │
    │    ↻ আবার ① — নতুন কৌতূহল               │
    │                                          │
    │    এই চক্র থামে না। জীবনভর ঘোরে।        │
    └──────────────────────────────────────────┘

    নয়জন শিক্ষকের নয়টা গোপন কথা:

    নুসরাত 🌱  → প্রতিদিন একটা নতুন কেন
    ইমরান 🎯  → প্রশ্ন নতুন, গুরুত্বপূর্ণ, সমাধানযোগ্য
    সালমা 📖  → থ্রি-পাস পড়া — স্কিম, স্ট্রাকচার, গভীর
    দাউদ 🔍  → প্রতিটা দাবিতে প্রমাণ দাবি করো
    জাইনব 🕸️ → আলাদা ফিল্ডের মাঝে সংযোগ খোঁজো
    ইব্রাহিম 🔥 → ব্যর্থতা গাইড, শত্রু নয়
    মরিয়ম ✍️ → প্রতিদিন রিসার্চ ডায়েরি
    ইউসুফ 🤲 → আমি জানি না — সবচেয়ে শক্তিশালী শব্দ
    খাদিজা 🪨 → গ্রিট > প্রতিভা। প্রতিদিন এক ঘণ্টা

    এক কথায়:

    ┌─────────────────────────────────────────┐
    │                                         │
    │  গবেষক হওয়া মানে:                       │
    │                                         │
    │  শিশুর কৌতূহল                           │
    │    + কারিগরের নিপুণতা                   │
    │    + সন্ন্যাসীর ধৈর্য                    │
    │    + যোদ্ধার সাহস                        │
    │                                         │
    │  = একটা মানুষ যে জানে না,               │
    │    কিন্তু জানতে চায়,                    │
    │    এবং জানা পর্যন্ত থামে না              │
    │                                         │
    └─────────────────────────────────────────┘</div>

<div class="dialogue">"এখন তুমি জিজ্ঞেস করবে," খাদিজা বললেন, "আমি কি PhD পাবো?" সব শিক্ষক হাসলেন। ইউসুফ বললেন: "এই প্রশ্নটা ভুল। সঠিক প্রশ্ন — আমার কি গবেষকের মন আছে? যদি থাকে, PhD হলো শুধু একটা ফলাফল। যদি না থাকে, PhD হলো শুধু একটা কাগজ।" ইব্রাহিম যোগ করলেন: "Research Pilgrimage বইটা তোমাকে শিখিয়েছে কীভাবে PhD পাবে। এই বই তোমাকে শিখিয়েছে — PhD পাওয়ার আগে তুমি কে হবে।"</div>
<div class="dialogue en">"Now you'll ask," Khadija said, "will I get a PhD?" All teachers smiled. Yusuf said: "That's the wrong question. The right question — do I have a researcher's mind? If yes, PhD is just a result. If no, PhD is just a paper." Ibrahim added: "Research Pilgrimage taught you how to get a PhD. This book taught you — who you become before the PhD."</div>

<div class="dialogue">তাওহিদ — একত্ব। সব গুণ আসলে এক। কৌতূহল আর অধ্যবসায় — একই জিনিসের দুই মুখ। একটা জিজ্ঞাসা, একটা আগুন, একটা প্রেম — জ্ঞানের প্রতি। আল্লাহ এক। সত্য এক। জ্ঞান এক। যে জ্ঞান খোঁজে, সে সত্য খোঁজে, সে আল্লাহকে খোঁজে। কুরআনের প্রথম শব্দ — ইকরা, পড়ো। শেষ নির্দেশ — জ্ঞান বৃদ্ধি করো। এই দুইয়ের মাঝে — গবেষকের জীবন। এই জীবন তুমি এখন শুরু করছো। নয়টা দরজা পেরোলে। এখন দশম দরজা — খোলা দরজা। যে দরজা কোনো দেয়ালে নেই — তোমার মনে।</div>
<div class="dialogue en">Tawhid — oneness. All qualities are one. Curiosity and persistence — two faces of one thing. One inquiry, one fire, one love — for knowledge. Allah is one. Truth is one. Knowledge is one. One who seeks knowledge, seeks truth, seeks Allah. The Quran's first word — Iqra, read. The last command — increase knowledge. Between these two — the researcher's life. This life you now begin. You've passed nine doors. Now the tenth — an open door. A door in no wall — in your mind.</div>

<div class="secret-box">🎓 তুমি এখন গবেষক। নয়টা গুণ, নয়জন শিক্ষক, এক পরিচয়। PhD হলো শুধু একটা ফলাফল — গবেষকের মনই আসল সম্পদ। এই মন নিয়ে চলো — জ্ঞানের চক্রে, জীবনভর।</div>`
});
