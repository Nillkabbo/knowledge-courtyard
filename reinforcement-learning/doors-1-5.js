// ════════════════════════════════════════
// পুরস্কারের বাগান — DOORS 1-5
// 1. Bandits (explore-exploit)   2. MDP
// 3. Return & Value              4. Bellman & DP
// 5. TD Learning
// ════════════════════════════════════════
const doors = [];

// ── DOOR 1: বীজ বোনার সিদ্ধান্থ (THE BANDIT'S DILEMMA) ──
doors.push({
  num:1, icon:"🎰", color:"#22c55e", name:"বীজ বোনার সিদ্ধান্ত",
  subtitle:"The Seed-Sowing Decision", tech:"Multi-Armed Bandits: Explore vs Exploit, ε-greedy, UCB",
  spirit:"ইস্তিখারাহ — অজানার সন্ধান, জানার আস্থা",
  secret:"শুধু ফলন নিলে শেখা বন্ধ; শুধু খোঁজ করলে ফলন নেই। কিছু বীজ নতুন মাটিতে বোনো — বাকিগুলো সোনালি মাঠে।",
  recall:{
    q:"জাহিদ চাচা কেন প্রতি মৌসুমে দুটো সারি নতুন জাতে বোনেন, যদিও পুরনো জাতই সবচেয়ে ভালো ফলে?",
    qen:"Why does Uncle Jahid sow two rows of new varieties every season, even though the old variety yields best?",
    a:"কারণ শুধু জানা জাত ফলালে (exploit) নতুন কিছু জানা যায় না — হয়তো আরও ভালো জাত আছে যা সে কখনো খুঁজেই পাবেন না। আর সবসময় নতুন খুঁজলে (explore) প্রমাণিত ফলন হারায়। এই ভারসাম্যই bandit-সমস্যা: ε-greedy-তে ছোট একটা অংশ (যেমন ১০%) সবসময় অন্বেষণে রাখো, বাকিটা সেরা জানা পথে। UCB আরও বুদ্ধিমান — যে সারির ব্যাপারে সবচেয়ে কম নিশ্চিত, সেটাই আগে দেখো: অনিশ্চয়তা + গড় মিলিয়ে।",
    aen:"Pure exploitation stops learning; pure exploration starves. The bandit balance: ε-greedy keeps a fraction for trying, UCB prioritizes the least-certain row."
  },
  story:`
<p class="scene-setting">প্রথম দরজা। ভোরের আলো ফুটছে। একটা লম্বা বাগান — ডানে বাঁয়ে সারি সারি মাটির বেড, প্রান্তরে কুয়াশার চাদর। মাঝখানে বসে আছেন জাহিদ চাচা — বয়স্ক, কুঁড়ি বাঁকা পিঠ, হাতে তালি দেওয়া বাঁশের টুপি (তাঁর সিগনেচার — যে টুপি মাথায় দিলে তিনি 'কাজের মুডে' যান)। পাশে তিনটা বীজের পাটা: সোনালি, লাল, সাদা। গন্ধ — ভেজা মাটি, সারের টক গন্ধ, দূরে ধানক্ষেতের মিষ্টি বাতাস। শব্দ — টুপটাপ শিশির পড়ার, দূরে কাঠঠোকার পাখির ডাক।</p>
<p class="scene-setting en">The first door. Dawn breaking. A long garden — rows of soil beds fading into mist. At the center sits Uncle Jahid — elderly, a bent back, a lacquered bamboo hat in hand (his signature: wearing it means he is in 'work mood'). Beside him, three seed trays: gold, red, white. The smell of wet earth and sour compost; the sound of dripping dew and a distant woodpecker.</p>

<div class="dialogue">তুমি কাছে গেলে। "চাচা, তিনটা পাটা কেন? একটাই তো সবচেয়ে ভালো জাত?"
জাহিদ চাচা টুপি মাথায় দিলেন। "কোনটা সবচেয়ে ভালো — তুমি কী করে জানো?"
"মানে... গত বছর যেটা ভালো ফলেছিল!"
"গত বছর।" তিনি হাসলেন। "আর এই বাগানে আমি পঞ্চাশ বছর কাটিয়েছি। শোনো।"</div>
<div class="dialogue en">You approached. "Uncle, why three trays? One variety must be the best?"
He put on the hat. "How do you know which is best?"
"Well... last year's best yield!"
"'Last year.'" He smiled. "I've spent fifty years in this garden. Listen."</div>

<div class="dialogue">"ত্রিশ বছর আগে আমি শুধু সোনালি জাত বুনতাম। যেটা তখনকার সেরা ছিল। ফলন ভালো — কিন্তু একই, বছর বছর। এক বছর প্রতিবেশী লাল জাত আনল। আমি হাসলাম — 'ওসব নষ্ট জাত।' তার লাল জাতের ফলন আমার সোনালির দ্বিগুণ হলো। দ্বিগুণ! কারণ তার মাটিতে সেই জাতটা বাঁচত, আমারটা বাঁচত না — আমি জানতামই না। যা কখনো বোনিনি, তা নিয়ে আমার 'জানা' ছিল না — ছিল শুধু অজানা।"</div>
<div class="dialogue en">"Thirty years ago I sowed only the gold variety — then the best. Yield good, but flat. One year a neighbor brought a red variety. I laughed — 'bad seed.' His red yield was double mine. Double! Because his soil suited it and mine never got the chance to — I never sowed it. What you never try, you don't 'know' — you only don't-know."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> শুধু জানা পথে চলা = চিরকাল গড় ফলন। জাহিদ চাচার ৩০ বছর — exploit-only-এর ৩০ বছর। নতুন সম্ভাবনা আবিষ্কার শূন্য। ঠিক যেমন: একটা রেস্টুরেন্টে পছন্দের খাবার অর্ডার করে করে মানুষ অন্য সব স্বাদ থেকে বঞ্চিত থাকে।</div></div>

<div class="dialogue">"তাহলে চাচা এখন কী করেন? প্রতি বছর সব নতুন জাত?"
"না রে, পাগল হয়ে গেছি নাকো!" তিনি হাসলেন। "বাগানের আশি ভাগ সারি এখনো সোনালি — প্রমাণিত ফলন। কিন্তু প্রতি মৌসুমে দুই-তিন সারি নতুন জাতে বোনা হয়। খারাপ হলে ক্ষতি সামান্য। ভালো হলে?" তিনি চোখের ইশারায় দূরের সবুজ সারিটা দেখালেন — "ওই লালটা এখন আমার অর্ধেক বাগান।"</div>
<div class="dialogue en">"So now — everything new every year?"
"No, I'm not mad!" He laughed. "Eighty percent of my rows are still gold — proven yield. But every season, two or three rows go to new varieties. If bad, small loss. If good?" He pointed to a distant green row — "that red one is now half my garden."</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১০০%</div><div class="sc-label">exploit-only → শেখা বন্ধ, গড়ে আটকে যাওয়া</div></div>
<div class="stat-card"><div class="sc-num">১০০%</div><div class="sc-label">explore-only → ফলন ছাড়া কেবল পরীক্ষা</div></div>
<div class="stat-card"><div class="sc-num">ε=১০%</div><div class="sc-label">প্রতি মৌসুম সামান্য অন্বেষণ — দীর্ঘে সেরা জাত আবিষ্কার</div></div>
<div class="stat-card"><div class="sc-num">৫০ বছর</div><div class="sc-label">জাহিদ চাচার প্রকৃত অভিজ্ঞতা = এই গণিতের জীবন্ত প্রমাণ</div></div>
</div>

<div class="dialogue">তুমি জিজ্ঞেস করলে: "কোন নতুন জাত আগে পরীক্ষা করবেন — এটা ঠিক করেন কীভাবে?"
জাহিদ চাচা একটু থামলেন। "দুই প্রশ্ন মেলাই। এক — এ জাত কেমন ফলেছে এ পর্যন্ত (গড়)? দুই — আমি এ জাত কতটা জেনেছি (অনিশ্চয়তা)? যে জাত ভালো AND কম-দেখা — সেটাই আগে। বেশি দেখা গড় জাতের চেয়ে কম দেখা ভালো জাত বেশি প্রতিশ্রুতিশীল।" তুমি হাঁটুতে বাঁক নিলে — এ যে উচ্চ-অনিশ্চয়তার উপর বোনাস! Upper Confidence Bound।</div>
<div class="dialogue en">You asked: "How do you decide which new variety to test first?"
He paused. "I match two questions. One — how has it done so far (average)? Two — how well do I know it (uncertainty)? The variety that is good AND under-tested goes first." You blinked — that's optimism in the face of uncertainty: Upper Confidence Bound.</div>

<div class="code-block">ব্যান্ডিট সমস্যা — The Bandit Problem:

ধরো Kটা বাহু (সারি/জাত/স্লট-মেশিন), প্রতিটার অজানা পে-আউট বিতরণ।
প্রতি ধাপে: একটা বাহু টানো → পুরস্কার r ~ সেই বাহুর বিতরণ।
লক্ষ্য: T ধাপে মোট পুরস্কার সর্বোচ্চ করা।

ε-greedy:
  ε সম্ভবত দৈব বাহু নাও (explore)
  ১−ε সম্ভবত এ পর্যন্ত সর্বোচ্চ-গড় বাহু (exploit)

UCB1 (Auer et al. 2002):
  বাহু i বেছে নাও যার স্কোর সর্বোচ্চ:
  score(i) = mean(i) + √(2·ln t / n(i))
  mean = এ পর্যন্ত গড় | n(i) = কতবার টেনেছ
  কম টানা বাহু → বড় বোনাস → আগে দেখা হয়

আউচি ফাংশন u(t) = O(√(K·ln T / T)) ব্যথা:
  অনুশোচনা (regret) = সর্বোচ্চ-সম্ভব − পাওয়া = sublinear → শেখা হচ্ছে!</div>

<div class="dialogue">সন্ধ্যায় জাহিদ চাচা নামাজের আগে হাত তুললেন। তুমি জানো এই দুআ — ইস্তিখারা। "হে আল্লাহ, এ কাজে কল্যাণ থাকলে সহজ করো, অকল্যাণ থাকলে দূর করো।" তিনি বললেন: "ইস্তিখারা মানে অন্ধ ঝাঁপ নয়, বাবা। মানে — আমার জানা সীমা স্বীকার করা, আর অজানাটার দরজা খোলা রাখা। আমি চেষ্টা করব, ফলাফল আল্লাহর হাতে। এক সারি নতুন জাত বোনা আমার ইস্তিখারা — অজানাকে সুযোগ দেওয়া, জানার আস্থায় থেকে।" তোমার বুকের ভেতর কিছু নেড়ে গেল — explore আর ঈমান কত কাছাকাছি দাঁড়িয়ে।</div>
<div class="dialogue en">At evening, before prayer, Jahid raised his hands — istikhara. "O Allah, if this is good for me, make it easy; if harmful, turn it away." He said: "Istikhara isn't a blind leap, child. It's admitting the limit of my knowing and keeping the door of the unknown open. I sow; the outcome belongs to Allah. One row of new seed is my istikhara — giving the unknown a chance, from within the trust of the known."</div>

<div class="verse">
<div class="verse-arabic">وَمَا تُنفِقُوا مِنْ خَيْرٍ فَلِأَنفُسِكُمْ</div>
<div class="verse-translation">তোমরা যা কল্যাণের বীজ বোনো, তার ফল তোমাদের জন্যই।</div>
<div class="verse-ref">— কুরআন ২:২৭২ (ভাবানুবাদ)</div>
</div>

<div class="secret-box"><div class="label">দরজা ১ — রহস্য</div><div class="text">🎰 শুধু ফলন নিলে শেখা বন্ধ, শুধু খোঁজায় ফলন নেই। কিছু বীজ নতুন মাটিতে বোনো — বাকিগুলো সোনালি মাঠে।<br><small>ε-greedy: ১০% অন্বেষণ। UCB: অনিশ্চয়তা + গড় = আশাবাদ। Regret sublinear = শেখা চলছে।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>ব্যান্ডিট = এক-ধাপ-সিদ্ধান্তের শেখা:</strong> প্রতিটা পছন্দ একটা বাহু; ফল এলেই হিসাব আপডেট।</li>
<li><strong>Explore vs Exploit ট্রেড-অফ:</strong> জানা সেরা নেবে (নিরাপদ) বনাম নতুন দেখবে (শিখবে)। ১০০%-either পরাজিত।</li>
<li><strong>ε-greedy:</strong> সহজ, কাজের — ε ধীরে কমাও (প্রথমে শিখো, পরে ফলাও)।</li>
<li><strong>UCB নীতি:</strong> "optimism in the face of uncertainty" — কম-দেখা ভালো বিকল্পকে প্রথম সুযোগ।</li>
<li><strong>Interview-ready:</strong> "Explore-exploit tradeoff কী এবং UCB কেন কাজ করে?" — বাগানের গল্প দিয়েই বলতে পারবে।</li>
</ul>`
  }
});

// ── DOOR 2: বাগানের নিয়ম (THE GARDEN'S LAW — MDP) ──
doors.push({
  num:2, icon:"⚖️", color:"#f97316", name:"বাগানের নিয়ম",
  subtitle:"The Garden's Law", tech:"Markov Decision Process: States, Actions, Rewards, Transitions, Policy",
  spirit:"সুন্নাহ — সৃষ্টির অটুট নিয়ম, কারণ-ফলের ধারা",
  secret:"এই মুহূর্তের অবস্থা পুরো গল্প বলে — অতীত নয়। অবস্থা + কাজ + প্রতিক্রিয়া = পরের অবস্থা। এই ত্রিভুজই শেখার মঞ্চ।",
  recall:{
    q:"রহিমা খালা কেন প্রতিদিন সকালে মাটির ভেজা ভাব দেখেই বাগানের সব সিদ্ধান্ত নিয়ে ফেলেন — গতকালের ইতিহাস মুখস্থ রাখেন না?",
    qen:"Why does Aunt Rahima decide everything from this morning's soil moisture alone, without memorizing yesterday's history?",
    a:"কারণ বাগানের আগামী শুধু আজকের অবস্থার (state) উপর নির্ভর করে — কীভাবে এই অবস্থায় পৌঁছানো হলো তার উপর নয়। ভেজা মাটি + রোদ = আজ পানি দরকার নেই; এ জানতে গতকাল কবে বৃষ্টি হয়েছিল সে ইতিহাস লাগে না। এটাই Markov property: 'ভবিষ্যৎ অতীত থেকে স্বাধীন, বর্তমান দেওয়া থাকলে।' MDP এই ধারণার উপর দাঁড়ানো — state, action, reward, transition নিয়ম, আর policy (কোন অবস্থায় কী কাজ)। অবস্থা যদি সম্পূর্ণ বর্তমান না বলে (আধা-ভেজা মাটি কিন্তু গোড়ায় শুকনো), তখন state খারাপ — আংশিক পর্যবেক্ষণ (partial observability) সমস্যা।",
    aen:"The garden's future depends only on today's state, not the path to it — the Markov property. MDP: state, action, reward, transition, policy."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দরজা। বাগানের ভেতরের উঠোন — চারপাশে উঁচু আম-গাছের বেড়া, মাঝে কাঠের টেবিলে খোলা খাতা, পাশে মাটি-পরীক্ষার যন্ত্র আর তিনটা গ্লাসে ভেজা-আধা-শুকনো মাটির নমুনা। রহিমা খালা টেবিলে বসে — পরনে মেরুন থান, চোখে পুরু কাচের চশমা, হাতে আঙুলে গয়নার বদলে মাটির দাগ (তাঁর সিগনেচার — যে হাত কখনো ধোয়া হয় না, মাটির রেখা ঢেকে থাকে শিরার ওপর)। গন্ধ — বৃষ্টি-ভেজা মাটির ভারী সুবাস, আম-পাতার তকতক গন্ধ। শব্দ — পাখির ডাক, দূরে পাম্প-মোটরের গর্জন।</p>
<p class="scene-setting en">The second door. The garden's inner courtyard — mango-tree hedges, a wooden table with an open ledger, a soil-testing kit, three glasses of wet/half/dry soil. Aunt Rahima sits — a maroon than, thick glasses, and her signature: soil-stained fingers she never scrubs clean, the earth's lines mapped over her veins. The smell of rain-wet earth; birdsong and a distant pump-motor.</p>

<div class="dialogue">তুমি সালাম দিলে। রহিমা খালা চশমার ওপর দিয়ে তাকালেন। "প্রশ্ন আনেছো?"
"হ্যাঁ খালা। জাহিদ চাচা বললেন — কোন জাত কখন বুনব, এটাই সব। কিন্তু আপনার খাতায় তো শুধু জাতের নাম নেই — মাটি, রোদ, পোকা, পানি সব লেখা!"
তিনি হাসলেন। "জাহিদ ভাই শেখালেন তোমাকে চয়েস। আমি শেখাব নিয়ম। বসো।"</div>
<div class="dialogue en">You greeted her. She looked over her glasses. "Brought questions?"
"Yes. Uncle Jahid taught me choice. But your ledger has more than variety names — soil, sun, pests, water!"
She smiled. "Jahid taught you choice. I will teach you law. Sit."</div>

<div class="dialogue">তিনি তিনটা গ্লাস সামনে রাখলেন। "এই তিনটা দেখো — ভেজা, আধা, শুকনো। আমার বাগানের সকাল এই তিন রকমের একটাতেই হয়। এগুলোই আমার 'অবস্থা'। এবার প্রশ্ন — ভেজা মাটির সকালে আমার কী করণীয়?"
"পানি দেবেন না!"
"ঠিক। আর শুকনো সকালে?"
"পাম্প চালাবেন!"
"দুটোই কাজ। প্রতিটা সকালে আমি অবস্থা দেখি, কাজ বাছি। আর প্রতিটা কাজের পরে বাগান বদলে যায় — ভেজা শুকায়, শুকনো ভিজে ওঠে, মাঝে মাঝে আকাশ নিজেই ঢেলে দেয়।" তিনি আকাশের দিকে তাকালেন। "সেই বদলের নিয়মও আমার খাতায় লেখা — কত ভাগ সম্ভাবনায় কী হয়।"</div>
<div class="dialogue en">She set three glasses down. "Wet, half, dry — my garden's morning is always one of these three. These are my states. Now: on a wet-soil morning, what do I do?"
"No watering!"
"And on dry?"
"Run the pump!"
"Both are actions. Each morning I read the state, choose an action. And each action changes the garden — wet dries, dry moistens, sometimes the sky pours on its own." She looked up. "Even those change-rules are in my ledger — with probabilities."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> রহিমা খালার বাবা — তাঁর আমলে ছিল মোটা কাগজের বারো খাতার ইতিহাস: কোন বছর কোন দিন কী হয়েছিল। সিদ্ধান্ত নিতে তিনি সব খাতা উল্টে দেখতেন — ধীর, ভুলও বেশি। খালা যা ধরলেন: বারো খাতার ইতিহাস থেকে আসলে মাত্র তিনটা জিনিস দরকার — আজকের অবস্থা, সম্ভাব্য কাজ, রূপান্তরের নিয়ম। বাকি সব অতীতের বোঝা। অবস্থা যদি সঠিকভাবে সংজ্ঞায়িত হয়, ইতিহাসের দরকার নেই — এটাই তাঁর আবিষ্কার, Markov-এর আগেই।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৩</div><div class="sc-label">অবস্থা (state) — ভেজা/আধা/শুকনো</div></div>
<div class="stat-card"><div class="sc-num">৪</div><div class="sc-label">কাজ (action) — পানি/পাম্প/সার/অপেক্ষা</div></div>
<div class="stat-card"><div class="sc-num">P(s'|s,a)</div><div class="sc-label">রূপান্তর নিয়ম — কোথায় যাবে বাগান</div></div>
<div class="stat-card"><div class="sc-num">π(s)→a</div><div class="sc-label">নীতি (policy) — খালার আঙুলের নিয়ম</div></div>
</div>

<div class="dialogue">তুমি খাতা উল্টে দেখলে। প্রতিটা পাতায় শুধু আজকের সারি — কোনো গতকাল নেই। "খালা, ইতিহাসটা কোথায়?"
"ফেলে দিয়েছি, বাবা।" তিনি শান্ত গলায় বললেন। "আমার দরকার পুরো পথ নয় — শুধু এই মুহূর্তের ছবি। মাটি ভেজা কি শুকনো, পাতা ঝরেছে কি না, পোকা লেগেছে কি না — এই ছবি পূর্ণ হলে ভবিষ্যৎ তাতেই লেখা। ছবি অসম্পূর্ণ হলে?" তিনি মাথা নাড়লেন। "তখন আমি অন্ধের মতো আন্দাজে চলি — ভুল বাড়ে। তাই ছবি পূর্ণ করা সবচেয়ে বড় কাজ।"</div>
<div class="dialogue en">You flipped her ledger — each page held only today's row, no yesterday. "Where's the history?"
"I discarded it." Calmly. "I need no path — only the present picture. Soil wet or dry, leaves shed, pests present: if the picture is complete, the future is written in it. If incomplete?" She shook her head. "Then I walk half-blind and errors grow. Completing the picture is the real work."</div>

<div class="code-block">মার্কভ সিদ্ধান্ত প্রক্রিয়া — Markov Decision Process:

সংজ্ঞার পাঁচ স্তম্ভ:
  S = অবস্থার সেট        {ভেজা, আধা-ভেজা, শুকনো}
  A = কাজের সেট          {পাম্প, অপেক্ষা, ছিটানো}
  P(s'|s,a) = রূপান্তর    কাজ a নিলে s থেকে s' যাওয়ার সম্ভাবনা
  R(s,a) = পুরস্কার        ফলন বাড়লে +, পানিতে ডুবলে −
  γ = ডিসকাউন্ট           আজকার ফল বনাম দূরের ফলের তুলা (পরের দরজা)

Markov ধর্ম (the law):
  P(s'|s,a) — s' নির্ভর করে শুধু (s,a) এর উপর
  পথ-এর উপর নয়: P(s'|s,a, ইতিহাস) = P(s'|s,a)
  "ভবিষ্যৎ বর্তমানকে দিয়ে অতীতকে ঢেকে দেয়"

নীতি π: প্রতিটা অবস্থায় কোন কাজ — π(s) = a
  ভালো নীতি = দীর্ঘমেয়াদে পুরস্কার সর্বোচ্চ (কীভাবে মাপে? দরজা ৩)

ইতিহাস-লোভের মূল্য:
  Markov না হলে state-এ সব অতীত গোঁজাতে হয় →
  state-space বিস্ফোরিত (curse of dimensionality)
  ভালো state-ই সবচেয়ে জরুরি feature engineering!</div>

<div class="dialogue">বিকেলে খালা বললেন: "এই নিয়ম আমি বানাইনি, বাবা। এক চালি ধান একই বীজ থেকে উঠে — কেউ নিয়ম ভাঙতে পারে না, আল্লাহর সৃষ্টিতে কারণ-ফল অটুট। সুন্নাহ — আল্লাহর রাসূল ﷺ বলেছেন, বীজ বোনো, কিয়ামত আসছে জেনেও (তিরমিজি)। কারণ ফল আসবেই — নিয়মের ভাষায়। আমার খাতার P(s'|s,a) সেই নিয়মেরই সামান্য অনুবাদ। যিনি নিয়ম দিলেন তাঁর কাছে পুরো বই আছে; আমি পড়ি যতটুকু পারি।" তুমি চুপ করে রইলে — ট্রানজিশন টেবিল আর তাকদিরের খাতা পাশাপাশি রাখা যায় কি না ভাবতে লাগলে।</div>
<div class="dialogue en">At dusk she said: "I didn't write this law. One field of paddy rises by one law none can break — cause and effect stand firm in Allah's creation. The Prophet ﷺ said: sow the seed even if the Hour is coming (Tirmidhi) — because the fruit comes, by law. My ledger's P(s'|s,a) is a small translation of that law. He who wrote the law holds the whole book; I read what I can."</div>

<div class="verse">
<div class="verse-arabic">إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ</div>
<div class="verse-translation">নিশ্চয়ই আল্লাহ কোনো জাতির অবস্থা বদলান না, যতক্ষণ না তারা নিজেদের ভেতরের অবস্থা বদলায়।</div>
<div class="verse-ref">— কুরআন ১৩:১১</div>
</div>

<div class="secret-box"><div class="label">দরজা ২ — রহস্য</div><div class="text">⚖️ এই মুহূর্তের অবস্থা পুরো গল্প বলে। অবস্থা + কাজ + প্রতিক্রিয়া = পরের অবস্থা।<br><small>MDP = ⟨S, A, P, R, γ⟩ + নীতি π। Markov ধর্ম: ভবিষ্যৎ অতীত স্মরণ করে না। অসম্পূর্ণ state = আধা-অন্ধ চাল।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>MDP পঞ্চস্তম্ভ:</strong> S (state), A (action), P (transition), R (reward), γ (discount) — মুখস্থ নয়, বাগানে চেনা।</li>
<li><strong>Markov ধর্ম:</strong> ভবিষ্যৎ শর্ত-সাপেক্ষে অতীত থেকে মুক্ত — P(s'|s,a,history) = P(s'|s,a)। ইতিহাস-বহন নয়, বর্তমান-পাঠ।</li>
<li><strong>Policy π:</strong> অবস্থা→কাজ ম্যাপিং — এজেন্টের সম্পূর্ণ ব্যক্তিত্ব একটাই ফাংশন।</li>
<li><strong>State design-ই আসল কাজ:</strong> অসম্পূর্ণ state = আধা-তথ্য = ভুল নীতি (partial observability-র দিকে প্রথম ইঙ্গিত)।</li>
<li><strong>Interview-ready:</strong> "Markov ধর্ম কী এবং কেন RL এতে দাঁড়ানো?" — খাতা-ফেলানো খালার গল্প দিয়ে শুরু করো।</li>
</ul>`
  }
});

// ── DOOR 3: ফলনের হিসাব (RETURN, DISCOUNTING, VALUE) ──
doors.push({
  num:3, icon:"🧮", color:"#eab308", name:"ফলনের হিসাব",
  subtitle:"The Yield Ledger", tech:"Return G_t, Discount Factor γ, State-Value V(s) & Action-Value Q(s,a)",
  spirit:"আখিরাত-দৃষ্টি — তাৎক্ষণিক নয়, সঞ্চিত ফলনের হিসাব",
  secret:"আজকের এক টাকা কালকের এক টাকার চেয়ে ভারী। ভ্যালু = সেই অবস্থা থেকে সারা জীবনের হালকা-করা সঞ্চিত আশা।",
  recall:{
    q:"করিম মিয়া কেন আজ পাওয়া ১০০ টাকা আর এক বছর পরের ১০০ টাকা সমান ভাবেন না — আর γ=০.৯ হলে দুই-ধাপ-পরের ১০ টাকার আজকের মান কত?",
    qen:"Why does Karim treat today's 100 and next year's 100 differently — and with γ=0.9, what is today's value of 10 takas two steps away?",
    a:"কারণ আজকের টাকা বিনিয়োগ করলে বাড়ে — সময়ের সাথে পুরস্কারের মান কমে, এটাই discounting। γ হলো সেই ভাগশিয়ার: প্রতি ধাপে ভবিষ্যতের ওজন γ গুণ কমে। G = r১ + γr২ + γ²r৩ + ... । γ=0.9 হলে দুই-ধাপ-পরের ১০ টাকার আজকের মান = γ²×১০ = ০.৮১×১০ = ৮.১ টাকা। γ→১ মানে দূরদর্শী ধৈর্য (দশকের ফলন গোনে), γ→০ মানে আজকের লোভ (শুধু এখনকার টাকা গোনে)। ভ্যালু ফাংশন V(s) = অবস্থা s থেকে একটা নীতি মেনে চললে প্রত্যাশিত সম্পূর্ণ G — সিদ্ধান্তের আসল কাঁটা এটাই, তাৎক্ষণিক r নয়।",
    aen:"Reward shrinks with distance: G = r1+γr2+γ²r3+… γ=0.9 → two-step-away 10 is worth 8.1 today. V(s) = expected cumulative G from s under a policy."
  },
  story:`
<p class="scene-setting">তৃতীয় দরজা। হাটের ধারে করিম মিয়ার আড়ত — বস্তায় বস্তায় সরিষার তেল, চাল, মসুর। সামনে হিসাবের টেবিল: পাশে তাল-পাতায় টানা আবার-দামের তালিকা, একটা পুরনো হাত-গণনার কাঠ, আর তালায় বাঁধা খাতার স্তূপ। করিম মিয়া — গায়ে সাদা পাঞ্জাবি, মাথায় তালিয়া টুপি, আর তাঁর সিগনেচার: ডান তর্জনীতে সবসময় একটা পেন্সিল ঘোরে — হিসাবের ভাবনা এলেই ঘূর্ণি শুরু। গন্ধ — সরিষার তেলের ঝাঁঝ, পাটের বস্তার ধুলো। শব্দ — হাটের কোলাহল দূরে, কাছে কাঠের নুকতানির টক-টক।</p>
<p class="scene-setting en">The third door. Karim's trading post at the market edge — sacks of mustard oil, rice, lentils. On his desk: a futures list on palm-leaf, an old abacus, ledgers. Karim — white panjabi, cap, and his signature: a pencil perpetually spinning on his right index finger whenever accounts fill his head. The smell of mustard oil and jute dust; the far hum of the bazaar, the near click of wooden beads.</p>

<div class="dialogue">তুমি আড়তে ঢুকলে। করিম মিয়া পেন্সিল ঘোরাতে ঘোরাতে তাকালেন। "রহিমা খালার ছাত্র? বসো। খালা শেখাল নিয়ম; জাহিদ ভাই শেখাল চয়েস। আমার কাছে শিখবে — মাপ।"
"মাপ?"
"পুরস্কার পেলে গুনবে কীভাবে। শোনো — একটা কাণ্ড দিলাম তোমাকে।"</div>
<div class="dialogue en">You entered. Karim looked up, pencil spinning. "Rahima's student? Sit. She taught law; Jahid taught choice. From me you'll learn measurement."
"Measurement?"
"How to count reward once you get it. Listen — a proposition."</div>

<div class="dialogue">তিনি খাতা খুললেন। "ধরো, আমি তোমাকে তিনটা অফার দিলাম। এক — আজ ১০০ টাকা, কাল আর কিছু না। দুই — আজ ৫০, কাল ৬০। তিন — আজ কিছু না, কাল ২০০। কোনটা নিবে?"
তুমি ভাবলে। "তিন নম্বর! সবচেয়ে বেশি তো!"
পেন্সিলের ঘূর্ণি থামল। "আসল হিসাবি সে নয় যে বড় সংখ্যা দেখেই লাফায়। কালের ২০০ আজ কত? আজ আমার ১০০ আছে — সেটা দিয়ে মসুর কিনলাম, বিক্রি করলাম ১২০। কালের ২০০-এর মধ্যে সেই সুযোগটা হারিয়ে গেল কি না — এই হিসাব আগে।"</div>
<div class="dialogue en">He opened a ledger. "Three offers: (1) 100 today, nothing after. (2) 50 today, 60 tomorrow. (3) nothing today, 200 tomorrow. Which?"
You thought. "Three! Biggest number!"
The pencil stopped. "A real accountant doesn't jump at big numbers. What is tomorrow's 200 worth today? With today's 100 I buy lentils and sell at 120 — did taking 200 tomorrow lose me that chance? That count comes first."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> তরুণ বয়সে করিম মিয়া একবার পুরো জমা পুঁজি দিয়ে কাল-বেশি-দাম চাল কিনেছিলেন — সংখ্যা বড় দেখে। পথে বৃষ্টি, চাল ভিজে গেল, আজকের নগদ শূন্য। বড় সংখ্যা বড় মান নয়: দূরত্ব থাকলে ঝুঁকি ও সুযোগ-ব্যয় বসাতে হয়। সেদিনই তাঁর খাতায় প্রথম হালকা-করার নিয়ম জন্ম নিল — সে জানত না গণিতে এর নাম discount factor।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">G</div><div class="sc-label">রিটার্ন = r১+γr২+γ²r৩+… সঞ্চিত ভবিষ্যৎ</div></div>
<div class="stat-card"><div class="sc-num">γ=০.৯</div><div class="sc-label">প্রতি ধাপে ভবিষ্যৎ ১০% হালকা</div></div>
<div class="stat-card"><div class="sc-num">V(s)</div><div class="sc-label">অবস্থার ভ্যালু — সেখান থেকে সারা পথের প্রত্যাশিত রিটার্ন</div></div>
<div class="stat-card"><div class="sc-num">Q(s,a)</div><div class="sc-label">কাজের ভ্যালু — এই অবস্থায় এই কাজ করলে</div></div>
</div>

<div class="dialogue">তিনি কাঠের নুকতানিতে দানা সাজালেন। "এই দানাগুলো পুরস্কার। আজকেরটা প্রথম সারিতে — পুরো ওজন। কালকেরটা দ্বিতীয় সারিতে — নবই ভাগ। পরশুরটা তৃতীয় সারিতে — একশোতে একাশি ভাগ। যত দূরে, তত হালকা। সব মিলিয়ে যে মোট — সেটাই কোনো পথের ফলন।" তিনি তোমার দিকে ফিরলেন। "আর যদি জিজ্ঞেস করো — আমার এই অবস্থা কেমন? — তার জবাব: এই অবস্থা থেকে ধরে নেওয়া পথে সব দানার হালকা-করা মোট। সেই মোট-ই অবস্থার দাম। ভালো বাগান, ভালো দাম। নীতি বদলালে দামও বদলায় — কারণ পথ বদলায়।"</div>
<div class="dialogue en">He arranged beads on the abacus. "These are rewards. Today's in the first row — full weight. Tomorrow's second — ninety parts. Day-after third — eighty-one. The farther, the lighter. The weighted total is a path's yield." He turned. "And 'how good is my state?' — answer: the discounted total along the path from it. That total is the state's price. Good garden, good price. Change the policy, the price changes too — the path changes."</div>

<div class="code-block">ফলনের গণিত — Return and Value:

রিটার্ন (ধাপ t থেকে):
  G_t = r_t+1 + γ·r_t+2 + γ²·r_t+3 + …  = Σ γ^k · r_t+k+1

γ-এর মানে (০ ≤ γ ≤ ১):
  γ = ০   → চশমা আজকের: শুধু পরের পুরস্কার (লোভী)
  γ = ০.৯ → দূরদর্শী: দশ ধাপ-পরের ফলও ~৩৫% ওজনে গোনা
  γ → ১   → অনন্ত-দৃষ্টি: দীর্ঘ পথের সম্পূর্ণ যোগফল
  (γ=০.৯-এ দশ-ধাপ-পরের ১ = ০.৯^১⁰ ≈ ০.৩৫)

দুই মাপ, দুই প্রশ্ন:
  V^π(s) = E[ G_t | s_t=s, π মেনে চলা ]      "অবস্থা কেমন?"
  Q^π(s,a) = E[ G_t | s_t=s, a_t=a, তারপর π ] "এই কাজ করলে কেমন?"

গুরুত্বপূর্ণ তথ্য:
  V-আর-Q এক পরিবার: V(s) = E_a~π[ Q(s,a) ]
  একই অবস্থায় দুই নীতির V ভিন্ন — ভ্যালু সবসময় নীতি-শর্তে
  (নীতি-মুক্ত সেরা V* — তার গল্প পরের দরজায়, বেলম্যানের সাথে)</div>

<div class="dialogue">সন্ধ্যার নামাজের পর করিম মিয়া আড়ত বন্ধ করে বললেন: "বাবা, আমার এই হালকা-করার হিসাব শুধু টাকার না। দুনিয়ার লোভ γ=১ চায় — আজকের সব পেতে হবে। কিন্তু মুমিনের হিসাব উল্টো — আখিরাত-দৃষ্টিতে দূরের ফল ভারী, আজকের ত্যাগ সস্তা নয়, বিনিয়োগ। কুরআনে আছে — ক্ষণস্থায়ী দুনিয়ার ভোগের বিনিময়ে আখিরাতের প্রতিদান উত্তম ও স্থায়ী। আমি γ দিয়ে টাকা মাপি; ঈমান শেখায় কোন পুরস্কারই আসলে ভারী। এই দরজার শিক্ষা তাই — মাপ জানো, আর কীসে মাপবে সেটাও বেছে নাও।"</div>
<div class="dialogue en">After evening prayer, closing shop, Karim said: "This discounting isn't only for money. Greed wants γ=1 — everything now. A believer's ledger is inverted: through the lens of the akhirah, distant fruit weighs heavy, today's sacrifice is investment. I measure money with γ; faith teaches which reward is truly heavy. Learn to measure — and choose what you measure by."</div>

<div class="verse">
<div class="verse-arabic">بَلْ تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ</div>
<div class="verse-translation">বরং তোমরা পার্থিব জীবনকে প্রাধান্য দাও, অথচ আখিরাত উত্তম ও স্থায়ী।</div>
<div class="verse-ref">— কুরআন ৮৭:১৬-১৭</div>
</div>

<div class="secret-box"><div class="label">দরজা ৩ — রহস্য</div><div class="text">🧮 আজকের ১ টাকা কালকের ১ টাকার চেয়ে ভারী। অবস্থার দাম = সেখান থেকে সারা পথের হালকা-করা যোগফল।<br><small>G=Σγ^k·r; V(s) নীতি-শর্তে প্রত্যাশিত G; Q(s,a) কাজ-শর্তে। γ-ই ধৈর্যের গণিত।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>Return G_t:</strong> পুরস্কারের ধারা এক সংখ্যায় — Σγ^k·r। নীতির এক-সংখ্যার সারাংশ।</li>
<li><strong>γ-এর দর্শন:</strong> ০=আজকের লোভ, ১=অনন্ত-ধৈর্য। বাস্তবে ০.৯-০.৯৯ — কেন মানুষ পড়াশোনা করে, কেন কৃষক অপেক্ষা করে।</li>
<li><strong>V বনাম Q:</strong> অবস্থার ভ্যালু বনাম কাজের ভ্যালু — Q-তে কাজ জড়িত, তাই Q-শেখা (Door 6) সরাসরি নিয়ন্ত্রণ দেয়।</li>
<li><strong>নীতি-শর্ত ভুয়ো নয়:</strong> V^π — ভ্যালু সবসময় কোন নীতিতে প্রশ্নের জবাব। নীতি বদল → ভ্যালু বদল।</li>
<li><strong>Interview-ready:</strong> "γ কীভাবে আচরণ বদলায়?" ও "V আর Q-এর সম্পর্ক?" — করিম মিয়ার তিন-অফার গল্প দিয়ে শুরু।</li>
</ul>`
  }
});

// ── DOOR 4: পূর্ণ জ্ঞানে বাগান (BELLMAN EQUATION & DYNAMIC PROGRAMMING) ──
doors.push({
  num:4, icon:"🗺️", color:"#38bdf8", name:"পূর্ণ জ্ঞানে বাগান",
  subtitle:"The Garden Under Full Knowledge", tech:"Bellman Optimality Equation, Value Iteration, Policy Iteration (Bellman 1957; Howard 1960)",
  spirit:"ইলম আল-ইয়াকিন — প্রমাণের চোখে দেখা জ্ঞান, অনুমান নয়",
  secret:"অবস্থার সেরা দাম = আজকের পুরস্কার + পরের সেরা অবস্থার দাম। এই এক বাক্যে পুরো ভবিষ্যৎ ভাঁজ করা আছে — বেলম্যানের আয়না।",
  recall:{
    q:"সালমা আপা কেন মাঠের প্রতিটা বিছানার দাম জানলেই গোটা বাগানের সেরা পথ বেরিয়ে আসে বলেন — আর বেলম্যান সমীকরণটা নিজের ভাষায় বলো?",
    qen:"Why does knowing every bed's price reveal the whole garden's best path — and state the Bellman equation in your own words?",
    a:"কারণ সেরা পথ আলাদা করে খোঁজা লাগে না — প্রতিটা বিছানা থেকে সেরা প্রতিবেশীর দিকে এক ধাপ গেলেই সেটা নিজে নিজে বেরিয়ে আসে: আজকের ধাপের সবচেয়ে ভালো কাজ বেছে নিলে প্রতিটা বিছানায়, পথটা সেরা দামের বিছানাগুলো দিয়েই যায়। বেলম্যানের ভাষায়: V*(s) = max_a [ R(s,a) + γ·Σ_s' P(s'|s,a)·V*(s') ] — কোনো অবস্থার সেরা দাম = সেরা কাজের আজকের পুরস্কার + পরের অবস্থার সেরা দামের গড়। এটা recursion — ভবিষ্যৎ আজকের ভেতরে ভাঁজ করা। আর এই সমীকরণ সমাধান করার দুই পথ: value iteration (দামগুলো বারবার ধাপে ধাপে ঘষে যথার্থ করা) আর policy iteration (হাওয়ার্ডের পথ — নীতি বাছো, তার দাম মেপো, নীতি শোধরাও, আবার)।",
    aen:"V*(s) = max_a [R(s,a) + γΣP(s'|s,a)V*(s')] — the best price of a state folds the whole future into today. Value iteration polishes prices; policy iteration (Howard) improves the rule itself."
  },
  story:`
<p class="scene-setting">চতুর্থ দরজা। বাগানের উঁচু টিলার ওপর একটা কাঠের ঘর — ভেতরে বড় করে টানা পুরো জমির নকশা, দেয়ালে রঙিন পিনে চিহ্নিত বিছানাগুলো, টেবিলে রূপালি চেনির ক্যালকুলেটর। সালমা আপা — জরিপ-অফিসারের মেয়ে, গায়ে নীল থান, চুল কঠিন খোঁপায় বাঁধা, আর তাঁর সিগনেচার: গলায় ঝোলানো একটা পিতলের দূরবিন — নকশা আর মাঠ, দুই-এর মাঝে সেতু হিসেবে সেটাই তাঁর সঙ্গী। গন্ধ — কাঠের ঘরের পুরনো সুগন্ধি, তাজা কাগজ, টিলার বাতাসে ঘাস। শব্দ — জানালার পাল্লার কিৎ-কিৎ, নিচে বাগানের দূরের কোলাহল।</p>
<p class="scene-setting en">The fourth door. A wooden cabin atop the garden's high mound — a full land-map stretched large, beds pinned in color, a silver slide-rule on the table. Salma apa — the surveyor's daughter, blue than, tight bun, her signature: a brass spyglass around her neck, her bridge between map and field. The smell of old wood and fresh paper; wind in the grass below.</p>

<div class="dialogue">তুমি নকশার সামনে দাঁড়ালে। সালমা আপা দূরবিন নামিয়ে হাসলেন। "করিম মিয়ার কাছ থেকে এসেছ? মাপ শিখেছ?"
"হ্যাঁ আপা। V, Q, γ।"
"তাহলে আজকের প্রশ্ন: কারিগরের মাপ আর স্থপতির মাপের তফাত কী?"
তুমি ভাবলে। "কারিগর... এক-একটা বিছানার কথা ভাবে?"
"ঠিক। আর স্থপতি?" তিনি পুরো নকশার ওপর হাত বুলালেন। "পুরো বাগান — একসাথে। প্রতিটা বিছানার ভবিষ্যৎ-দাম জানা থাকলে সেরা পথ খোঁজা মানে প্রতিটা মোড়ে দাম-দেখে হাঁটা। কিন্তু দামগুলো আসবে কোথা থেকে? সেটাই আজকের খেলা।"</div>
<div class="dialogue en">You stood before the map. Salma lowered the spyglass and smiled. "From Karim? Learned measurement?"
"Yes — V, Q, γ."
"Today's question: what separates a craftsman's measure from an architect's?"
You thought. "A craftsman thinks bed by bed?"
"Right. And an architect?" She swept her hand over the whole map. "The entire garden — at once. If every bed's future-price is known, finding the best path is just walking price-first at every turn. But where do the prices come from? That's today's game."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> সালমা আপার প্রথম নকশায় দাম বসানো হয়েছিল আন্দাজে — প্রতিবেশীর সাথে মিলিয়ে একবারে। ফল: দূরের বিছানাগুলোর দাম ভুল, কারণ ওদের দাম আবার আরও-দূরের ভুল দামের ওপর দাঁড়িয়ে ছিল। মাপ যখন মাপের ওপর দাঁড়ায়, এক ভুল পুরো শৃঙ্খলে ছড়ায়। সমাধান তাই একবার নয় — ঘষা: প্রতিটা দাম হালনাগাদ করো, দেখো কোথাও আর নড়ছে কি না, না থামলে আবার। যতদিন দাম নড়ে, ঘষতে থাকো।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৯৫৭</div><div class="sc-label">বেলম্যান — DP ও MDP-র জন্ম (রিচার্ড বেলম্যান, Dynamic Programming)</div></div>
<div class="stat-card"><div class="sc-num">১৯৬০</div><div class="sc-label">হাওয়ার্ড — policy iteration-এর উদ্ভাবক (রোনাল্ড হাওয়ার্ড)</div></div>
<div class="stat-card"><div class="sc-num">V* = max</div><div class="sc-label">সেরা-দামের সমীকরণ — ভবিষ্যৎ আজকে ভাঁজা</div></div>
<div class="stat-card"><div class="sc-num">অভিশাপ</div><div class="sc-label">মাত্রা-অভিশাপ: বিছানা×অবস্থা বাড়লে টেবিল বিস্ফোরণ</div></div>
</div>

<div class="dialogue">তিনি নকশায় তিনটা বিছানা দেখালেন — শুরু, মাঝ, ঝর্না-পাশ। "ধরো তিনটার দাম চাই। ঝর্না-পাশের দাম কী? সেখানকার আজকের ফলন, প্লাস তার পরের বিছানাগুলোর দাম। মাঝের দাম? তার ফলন প্লাস পরের দাম। শুরুর দাম? আবার তাই। দেখো — প্রতিটা প্রশ্নের জবাব আরেকটা প্রশ্নের ভেতরে! ভবিষ্যৎ আজকের ভেতরে ভাঁজ করা।" তিনি রূপালি চেনি টানলেন। "এই ভাঁজ-ই বেলম্যানের সমীকরণ। ১৯৫৭ সালে সে দেখাল — এই রকম পুনরাবৃত্ত-সম্পর্ক ধাপে ধাপে সমাধান করা যায়: dynamic programming। আর ১৯৬০-তে হাওয়ার্ড দেখালেন আরেক পথ — আগে নীতি ধরে নাও, তার দাম মেপো, দাম দেখে নীতি শোধরাও। নীতি আর দাম পালা করে এগোয় — দুই-ই যায় সেরার দিকে।"</div>
<div class="dialogue en">She marked three beds — start, middle, falls-side. "Want three prices? The falls-side price: today's yield plus the prices after it. The middle: its yield plus prices after. The start: same. See — every answer nests inside another question! The future folded into today." She drew the slide-rule. "That fold is Bellman's equation. In 1957 he showed such recurrences solve step by step: dynamic programming. And in 1960 Howard showed another road — assume a policy, price it, fix the policy from the prices. Policy and price alternate toward the best."</div>

<div class="code-block">বেলম্যানের আয়না — The Bellman Equations:

প্রত্যাশিত-রিটার্নের পুনরাবৃত্তি (নীতি π-এর জন্য):
  V^π(s) = Σ_a π(a|s) Σ_s' P(s'|s,a) [ R + γ·V^π(s') ]
  "অবস্থার দাম = গড় আজকের ফল + গড় পরের দাম"

সর্বোচ্চতা-সমীকরণ (নীতি-মুক্ত সেরা):
  V*(s) = max_a Σ_s' P(s'|s,a) [ R(s,a) + γ·V*(s') ]
  Q*(s,a) = R(s,a) + γ·Σ_s' P(s'|s,a) max_a' Q*(s',a')

দুই সমাধান-পথ (DP — মডেল P, R জানা থাকলে):
  Value iteration (বেলম্যান ১৯৫৭):
    ১. সব দাম ০ ধরো
    ২. প্রতিটা s-এ নতুন দাম = max_a [R + γ·গড়(প্রতিবেশী দাম)]
    ৩. দাম না থামা পর্যন্ত ঘষা (contraction → অবশ্যই থামে)
    ৪. থামলে: greedy নীতি = সেরা নীতি
  Policy iteration (হাওয়ার্ড ১৯৬০):
    ১. যেকোনো নীতি π ধরো
    ২. মেপো V^π (সমীকরণ সমাধান)
    ৩. দাম দেখে নতুন π' = greedy(π)
    ৪. π' ≠ π হলে ফিরে যাও ধাপ ২-এ (প্রতি ধাপে উন্নতি, সসীমে শেষ)

সতর্কতা — মাত্রা-অভিশাপ (curse of dimensionality, বেলম্যান):
  অবস্থা সংখ্যা সূচকীয় বাড়ে → টেবিল-রাখা অসম্ভব
  (দাবার বোর্ড সম্ভব; গো-র প্যাটার্ন, রোবটের ক্যামেরা — না)
  তাই পরের দরজাগুলো: টেবিল নয়, আন্দাজ — শেখা</div>

<div class="dialogue">সন্ধ্যায় সালমা আপা দূরবিন মুছে বললেন: "আমার বাবা জরিপে যেতেন — মানচিত্র বানাতেন প্রমাণ দিয়ে, আন্দাজে নয়। ইলম আল-ইয়াকিন — প্রমাণের চোখে দেখা জ্ঞান। আজকের দরজাটা তারই: পুরো নকশা জানা থাকলে (P, R জানা) দামগুলো প্রমাণ করে বসানো যায় — কোনো লাফ নেই, প্রতিটা সংখ্যা সমীকরণ থেকে। কিন্তু মনে রেখো — এ সব স্বপ্নের শর্ত: নকশা জানা। আসল মাঠে ঝর্না কবে শুকাবে কেউ আগে বলে না।" তিনি নকশার দিকে তাকালেন। "ইয়াকিনের তিন স্তর জানো? ইলম-উল-ইয়াকিন (শুনে জানা), আইন-উল-ইয়াকিন (চোখে দেখা), হাক্ক-উল-ইয়াকিন (নিজে হয়ে যাওয়া)। DP হলো প্রথমটার গণিত — পুরো টেবিল জেনে হিসাব। আসল জীবনে পৌঁছাতে হলে বাকি দুই স্তর পার করতে হবে — সে যাত্রা পরের দরজায়।"</div>
<div class="dialogue en">At dusk, polishing her spyglass, Salma said: "My father surveyed — maps from evidence, not guesswork. Ilm al-yaqin: knowledge seen through proof. Today's door is that: when the whole map (P, R) is known, prices are placed by proof — every number from an equation, no leaps. But remember the condition: knowing the map. In the real field, no one announces when the falls run dry." She looked at the map. "Three levels of yaqin: hearing, seeing, becoming. DP is the mathematics of the first — full-table computation. Reaching real life requires the other two — that journey begins next door."</div>

<div class="verse">
<div class="verse-arabic">وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ</div>
<div class="verse-translation">তোমার রবের ইবাদত করতে থাকো, যতক্ষণ না তোমার কাছে ইয়াকিন (নিশ্চয়তা) আসে।</div>
<div class="verse-ref">— কুরআন ১৫:৯৯</div>
</div>

<div class="secret-box"><div class="label">দরজা ৪ — রহস্য</div><div class="text">🗺️ সেরা দাম = আজকের ফল + পরের সেরা দাম। ভবিষ্যৎ আজকে ভাঁজ করা — এ-ই বেলম্যান।<br><small>ভাঁয়া = recursion। DP: value iteration (দাম ঘষা) / policy iteration (হাওয়ার্ড — নীতি-দাম পালা)। শর্ত: নকশা (P,R) জানা। অভিশাপ: মাত্রা।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>বেলম্যান পুনরাবৃত্তি:</strong> V-এর সংজ্ঞা নিজের ভেতরে V-কে ডাকে — ভবিষ্যৎ আজকে ভাঁজা। এই এক লাইন মুখস্থ নয়, <em>চেনা</em>।</li>
<li><strong>দুই iteration:</strong> value iteration = দাম ঘষা থামা পর্যন্ত; policy iteration = নীতি ঠিক করা → দাম মাপা → আবার। দুটোই প্রমাণিতভাবে সেরায় পৌঁছায়।</li>
<li><strong>স্রষ্টা-তারিখ নির্ভুল:</strong> বেলম্যান ১৯৫৭ (DP-র নামকরণ ও সমীকরণ); <em>policy iteration — হাওয়ার্ড ১৯৬০</em> (শুধু বিস্তার নন, উদ্ভাবক)।</li>
<li><strong>মাত্রা-অভিশাপ:</strong> DP-র মৃত্যু-ঘণ্টা — অবস্থা-সংখ্যা সূচকীয়। পরের দরজাগুলো (TD, Q-learning) এই অভিশাপ ভাঙতেই জন্মায়।</li>
<li><strong>Interview-ready:</strong> "Bellman equation ব্যাখ্যা করো এবং value vs policy iteration-এর তফাত বলো" — নকশাঘরের গল্প দিয়ে শুরু, সমীকরণ দিয়ে শেষ।</li>
</ul>`
  }
});

// ── DOOR 5: ধাপে ধাপে শেখা (TEMPORAL DIFFERENCE LEARNING) ──
doors.push({
  num:5, icon:"🌙", color:"#a78bfa", name:"ধাপে ধাপে শেখা",
  subtitle:"Learning Step by Step", tech:"TD Learning, TD(0), TD Error δ, Bootstrapping (Sutton 1988)",
  spirit:"তাদার্রুজ — ধীরে ধীরে, ধাপে ধাপে প্রকাশ (কুরআন ১৭:১০৬)",
  secret:"শেষ পর্যন্ত অপেক্ষা নয়, প্রতিটা ধাপেই হিসাব শোধরাও: যা প্রত্যাশা করেছিলে বনাম যা পেলে — সেই ফারাক-ই শিক্ষক।",
  recall:{
    q:"ইদ্রিস কাকা কেন ভোরের ঘটনা সন্ধ্যার খাতায় লিখে পরের রাতের প্রত্যাশা একটু একটু বদলান — পুরো বছর শেষে একবারে নয়?",
    qen:"Why does Idris correct next night's expectation a little every evening, instead of once after the whole year?",
    a:"কারণ প্রতিটা রাত নতুন তথ্য দেয় — অপেক্ষা করলে সেই তথ্য শুকিয়ে যায়। প্রতি সন্ধ্যায় তিনি তুলনা করেন: গতকাল ভেবেছিলাম এ পথে বিপদ ১০ ভাগ, আজ দেখলাম ঘটল না — তাহলে আবার ৯ ভাগ ধরি। এটাই TD-শিক্ষা: V(s) ← V(s) + α[ r + γV(s') − V(s) ]। বন্ধনীর ভেতরটা δ — TD ত্রুটি: নতুন অনুমান (আজকের ফল + পরের অবস্থার বর্তমান দাম) বিয়োগ পুরনো অনুমান। δ>0 মানে চেয়ে ভালো পেলাম — দাম উপরে টানো; δ<0 মানে খারাপ — নামাও। α নিয়ন্ত্রণ করে কতটা টানবে। DP-র মতো পুরো নকশা লাগে না, অপেক্ষার মতো পুরো বছরও না — প্রতি ধাপে নিজের পরের-ধাপের আন্দাজ দিয়ে নিজেকে শোধরানো: bootstrapping।",
    aen:"V(s) ← V(s) + α[r + γV(s') − V(s)]. The bracket is the TD error δ — new estimate minus old. Positive: raise the price; negative: lower. α sets how hard. No full map (DP), no full year (MC) — correct yourself by your own next-step estimate: bootstrapping."
  },
  story:`
<p class="scene-setting">পঞ্চম দরজা। সন্ধ্যা নামছে — বাগানের চৌকিদার-ঘর, কুপির আলোয় ঝলমল করছে দেয়ালের পাহারা-খাতা। ইদ্রিস কাকা — চৌকিদার, গায়ে কাবলি, হাতে লাঠি, আর তাঁর সিগনেচার: কাঁধে ঝোলানো একটা পিতলের ঘড়ি-চেন, যার শেষে বাঁধা ছোট্ট খাতা — হাঁটতে হাঁটতেই টুক করে নোট করার অভ্যাস। গন্ধ — কুপির তেল পোড়ার ধোঁয়া, রাতের শিশির-ভেজা ঘাস। শব্দ — ঝিঁঝিঁ, দূরে শিয়ালের ডাক, লাঠির খট-খট।</p>
<p class="scene-setting en">The fifth door. Dusk — the garden's watch-house, the watch-ledger glinting in the lantern's light. Idris — the night watchman, kabuli coat, stick in hand, and his signature: a brass watch-chain over his shoulder ending in a tiny notebook — notes taken mid-stride. The smell of burning lantern oil and dew-wet grass; crickets, a distant jackal, the tap of the stick.</p>

<div class="dialogue">তুমি কুপির আলোয় ঢুকলে। ইদ্রিস কাকা খাতা বন্ধ করলেন। "সালমা মেয়েটার কাছ থেকে এসেছ? নকশা দেখে দাম বসাতে শিখেছ?"
"হ্যাঁ কাকা। কিন্তু তারা বলল — আসল মাঠে নকশা নেই।"
"নেই রে।" তিনি উঠে দাঁড়ালেন, লাঠি তুললেন। "তাহলে আজ রাতে আমার সাথে পাহারা দে। নকশা ছাড়া শেখার মঞ্চ এটাই।"</div>
<div class="dialogue en">You stepped into the lantern light. Idris closed his ledger. "From Salma? Learned to price from a map?"
"Yes. But she said — the real field has no map."
"It doesn't." He rose, lifting his stick. "Then walk my watch tonight. This is the stage of learning without a map."</div>

<div class="dialogue">প্রথম রাউন্ডে তিনি খালি হাতে হাঁটলেন — কিছু বললেন না। দ্বিতীয় রাউন্ডে থামলেন পুরনো বটের মোড়ে। "এই মোড় — আমার খাতায় লেখা: 'বিপদের ঝুঁকি ১০ ভাগ।' কেন জানো? বছর দুই আগে এখানে সাপ দেখেছিলাম। তারপর থেকে প্রতি রাতে এখানে লাঠি বেশি পেটাই।" তিনি হাসলেন। "আজ তিন মাস ধরে সাপ নেই। কিন্তু খাতায় তো ১০-ই আছে। এখন বলো — বিপদ ১০ না কি কম?"</div>
<div class="dialogue en">On the first round he walked in silence. On the second he stopped at the old banyan turn. "This corner — my ledger says: 'danger, ten parts.' Why? Two years ago, a snake. Since then I thump my stick harder here." He smiled. "Three months now, no snake. But the ledger still says ten. Tell me — is the danger still ten, or less?"</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> ইদ্রিস কাকার আগের সঙ্গী ছিল এক জেদি বুড়ো — 'বছর শেষে একবারে হিসাব করব' বলে সব ঘটনা মনে রাখত, খাতায় হাতই দিত না। ফল: বছরের মাঝে একই গলি দিয়ে তিনবার বিপদ, তিনবারই অপ্রস্তুত। পুরো-পথ-শেষে-শেখা (Monte Carlo) ধীর এবং ঝুঁকিপূর্ণ — যত অপেক্ষা, তত পুরনো তথ্য। ইদ্রিসের নিয়ম উল্টো: প্রতি রাতে, প্রতি মোড়ে, এক ধাপের ফারাক।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৯৮৮</div><div class="sc-label">সাটন — TD-শিক্ষার গণিত (Machine Learning জার্নাল)</div></div>
<div class="stat-card"><div class="sc-num">δ</div><div class="sc-label">TD ত্রুটি = নতুন অনুমান − পুরনো</div></div>
<div class="stat-card"><div class="sc-num">α</div><div class="sc-label">শেখার হার — কত জোরে টানবে</div></div>
<div class="stat-card"><div class="sc-num">১ ধাপ</div><div class="sc-label">পুরো বছর নয়, পুরো নকশা নয় — শুধু পরের ধাপ</div></div>
</div>

<div class="dialogue">তুমি বললে: "কাকা, তাহলে আজ রাতের পর মোড়ের ঝুঁকি কত ধরবেন?"
তিনি খাতায় দাগ টানলেন। "৯ ভাগ। এক ঘষা। কাল আবার শান্ত থাকলে ৮-এর দিকে। সাপ দেখা দিলেই আবার লাফিয়ে ওঠে।" তিনি তোমার চোখে চোখ রাখলেন। "দেখো — আমি যা ভেবেছিলাম (১০) আর যা দেখলাম (শান্ত রাত, অর্থাৎ ছোট বিপদ) — এই ফারাকটুকুই আমার শিক্ষক। ফারাক ধনাত্মক হলে দাম উপরে, ঋণাত্মক হলে নিচে। আর কতটা উপরে-নিচে?" তিনি কুপি নাড়লেন। "সেই ছোট্ট ঘড়ির কাঁটার মতো — একটু একটু। বেশি নাড়লে এক রাতের দুর্ঘটনায় সারা বছরের বিচার বদলে যায়।"</div>
<div class="dialogue en">You asked: "So what's the corner's risk after tonight?"
He drew a line in the ledger. "Nine parts. One polish. Calm again tomorrow — toward eight. A snake appears — it leaps back up." He held your gaze. "See — what I expected (ten) versus what I saw (a calm night): that gap is my teacher. Positive gap — raise the price; negative — lower. And by how much?" He swayed the lantern. "Like a clock's hand — a little at a time. Move too hard, and one bad night rewrites the whole year's judgment."</div>

<div class="code-block">TD-শিক্ষার গণিত — Temporal Difference:

TD(0) হালনাগাদ-নিয়ম (সাটন, ১৯৮৮):
  V(s) ← V(s) + α · δ
  যেখানে δ = [ r + γ·V(s') ] − V(s)
        ↑ নতুন অনুমান        ↑ পুরনো

  δ — TD ত্রুটি: প্রত্যাশা বনাম প্রাপ্তির ফারাক
  r + γV(s') — আজকের ফল + পরের অবস্থার বর্তমান দাম
              (দাম নিজেই আন্দাজ — আন্দাজ দিয়ে আন্দাজ শোধরানো)

তিন পথের তুলা — একই সমস্যা, তিন দর্শন:
  DP (দরজা ৪):  নকশা জানা → সমীকরণ সমাধান → পুরো টেবিল
  Monte Carlo:  পুরো পথ শেষ → G হিসাব → দাম বসানো
  TD:           এক ধাপ এগিয়ে → δ হিসাব → একটু ঘষা

  MC বনাম TD — পক্ষপাত/ভিন্নতা:
    MC-এর লক্ষ্য G প্রকৃত (অন্ধ কিন্তু সত্য), TD-র লক্ষ্য আন্দাজ
    (পক্ষপাতি কিন্তু কম ভিন্নতা, আগে শুরু, অনলাইনে চলে)
  Bootstrapping: V এর হালনাগাদ V-কেই ব্যবহার করে —
    নিজের বুট-স্ট্র্যাপ টেনে নিজেকে তোলা

কেন এটাই আসল মাঠের পথ:
  নকশা নেই (P,R অজানা) + পুরো পথের অপেক্ষা ব্যয়বহুল
  → প্রতি ধাপে শেখো: অনলাইন, ক্রমাগত, বিচ্ছিন্ন স্রোতে
  (এখান থেকেই পরের দরজা: Q-learning — একই ঘষা, কাজের খাতায়)</div>

<div class="dialogue">ফজরের আজানের আগে ফিরে এসে ইদ্রিস কাকা চেন থেকে ছোট খাতাটা খুললেন — প্রতিটা মোড়ের পাশে টুকটাক দাগের সারি। "আমার দাদার দাদারাও এভাবেই শুরু করেছিল — এক রাত, এক মোড়, এক দাগ।" তিনি আকাশের দিকে তাকালেন — ভোরের প্রথম আলো ফুটছে। "কুরআনও তো এভাবেই নাজিল হয়েছে, বাবা — একবারে নয়, তাদার্রুজ করে, কুরআন ১৭:১০৬: 'আমি একে ধীরে ধীরে পাঠ করার জন্য খণ্ডে খণ্ডে নাজিল করেছি।' বিশ তিন বছর ধরে, ঘটনার পর ঘটনা, আয়াতের পর আয়াত — প্রতিটা অবতরণ একটা হালনাগাদ। সাহাবিরা এক আয়াত শুনে বুঝত, চর্চা করত, তারপর পরেরটা। একবারে পুরো কিতাব নামলে বহনই হতো না। শেখাও তাই — তাদার্রুজ। আমার প্রতি রাতের এক ঘষা — সেই সুন্নাহর আঁচ।"</div>
<div class="dialogue en">Before the fajr call, back at the watch-house, Idris opened the little notebook — rows of tick-marks by every corner. "My grandfather's grandfather began the same way — one night, one corner, one mark." He looked up at the first light. "Even the Quran came down this way — tadarruj, piece by piece: Quran 17:106 — 'a Quran We have divided, that you may recite it to the people over a prolonged period.' Twenty-three years, event after event, verse after verse — each revelation an update. The companions learned one verse, practiced it, then the next. All at once, and it could not have been carried. So is learning — tadarruj. My nightly single polish carries the trace of that sunnah."</div>

<div class="verse">
<div class="verse-arabic">وَقُرْآنًا فَرَقْنَاهُ لِتَقْرَأَهُ عَلَى النَّاسِ عَلَىٰ مُكْثٍ</div>
<div class="verse-translation">আর এই কুরআন — আমি একে খণ্ডে খণ্ডে বিভক্ত করেছি, যাতে তুমি মানুষের কাছে ধীরে ধীরে পাঠ করতে পারো।</div>
<div class="verse-ref">— কুরআন ১৭:১০৬</div>
</div>

<div class="secret-box"><div class="label">দরজা ৫ — রহস্য</div><div class="text">🌙 প্রত্যাশা বনাম প্রাপ্তির ফারাক-ই শিক্ষক। প্রতি ধাপে এক ঘষা।<br><small>V←V+α·δ; δ=[r+γV(s')]−V(s)। নকশা নয় (DP), পুরো পথ নয় (MC) — bootstrapping। তাদার্রুজ: কুরআন ১৭:১০৬।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>TD-ত্রুটি δ:</strong> [r+γV(s')]−V(s) — নতুন বনাম পুরনো অনুমানের ফারাক। শেখার সংকেত একটাই: এই ফারাক।</li>
<li><strong>তিন দর্শন এক জায়গায়:</strong> DP (নকশা-জানা), MC (পথ-শেষ), TD (ধাপ-প্রতি) — একই গণিতের তিন সময়-দৃষ্টি। ইন্টারভিউ-প্রিয় প্রশ্ন।</li>
<li><strong>MC বনাম TD তর্ক:</strong> পক্ষপাত (TD-র লক্ষ্য আন্দাজ) বনাম ভিন্নতা (MC-র গড় দীরে বসে) — কোনটা কখন জিতে তার সূক্ষ্মতা জানো।</li>
<li><strong>Bootstrapping:</strong> আন্দাজ দিয়ে আন্দাজ শোধরানো — শক্তি ও বিপদ দুই-ই (দরজা ৭-এর deadly triad-এ ফিরবে)।</li>
<li><strong>স্রষ্টা-নির্ভুল:</strong> TD — রিচার্ড সাটন, ১৯৮৮, Machine Learning 3(1) — এক লেখক, এক বছর, এক জার্নাল; মিশ্রণ নয়।</li>
</ul>`
  }
});
