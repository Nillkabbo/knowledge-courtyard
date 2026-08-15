// ════════════════════════════════════════
// পুরস্কারের বাগান — DOORS 6-10 (in progress)
// 6. Q-learning & SARSA    7. Function Approx & Deadly Triad
// 8. DQN                   9. Policy Gradient → PPO
// 10. Actor-Critic
// ════════════════════════════════════════

// ── DOOR 6: মাঠের খাতা (Q-LEARNING & SARSA) ──
doors.push({
  num:6, icon:"📓", color:"#f472b6", name:"মাঠের খাতা",
  subtitle:"The Field Ledger", tech:"Q-learning (Watkins 1989; Watkins & Dayan 1992), SARSA (Rummery & Niranjan 1994), Off-policy vs On-policy",
  spirit:"সিয়ার ফিল আরদ — অন্যের পরিণতি দেখে শেখা; মুহাসাবা — নিজের পদচারণা থেকে শেখা",
  secret:"দুই খাতা দুই প্রশ্ন — 'সেরা কাজ কী?' শেখে যে-খাতা সব অভিজ্ঞতা থেকে; 'আমার চালায় কী হবে?' শেখে যে-খাতা নিজের হাঁটা থেকে।",
  recall:{
    q:"তারিক ভাইয়ের দুই খাতা খাল-পাড়ের প্রশ্নে ভিন্ন জবাব দেয় কেন — আর Q-learning আর SARSA-র হালনাগাদ-সূত্রের ঠিক কোথায় তফাতটা বসে?",
    qen:"Why do Tariq's two ledgers answer the canal-path question differently — and where exactly do the Q-learning and SARSA updates diverge?",
    a:"খাল-ধরে সরু পথ ছোট কিন্তু পিছলন্ত; বাইরের বড় ঘুরানো নিরাপদ। Q-খাতা প্রতি ধাপে জিজ্ঞেস করে 'এখান থেকে সর্বোচ্চ-দামের কাজ কী?' — max_a' Q(s',a') — মানে ভবিষ্যৎকে ধরে নেয় নিখুঁত চালে, তাই সরু পথই দেখায় (অপরিচিত চালের পিছলানি ধরা পড়ে না)। SARSA-খাতা ধরে নেয় যেটা আসলেই চালানো হবে — Q(s',a'), a' নীতি থেকে (ε-ঘুঁচি সহ) — তাই নিজের পিছলানি-ভীতি খাতায় ঢুকে যায়, নিরাপদ ঘুরপথ বেছে নেয়। সূত্রে তফাত এক জায়গায়: Q-learning-এ r + γ·max_a' Q(s',a'); SARSA-তে r + γ·Q(s',a') যেখানে a' পরের ধাপে সত্যিই নেওয়া কাজ। এটাই off-policy বনাম on-policy: আগেরটা যেকোনো আচরণ থেকে (এমনকি অন্যের চাল/পুরনো রেকর্ড) সর্বোচ্চ-লক্ষ্য শেখে; পরেরটা নিজের চলতি নীতির ফল শেখে। দুটোই কাজের — প্রশ্ন ভিন্ন: চরম লক্ষ্য নাকি বাস্তব-নীতি।",
    aen:"One token differs: Q-learning targets r+γ·max_a'Q(s',a') (off-policy — learns the optimal target from any behavior); SARSA targets r+γ·Q(s',a') with the action actually taken (on-policy — learns the value of its own walking, exploration slips included)."
  },
  story:`
<p class="scene-setting">ষষ্ঠ দরজা। সকাল — বাগানের পশ্চিম প্রান্তে লম্বা এক সেচ-খাল, ধারে সরু মাটির পথ, নিচে ধীর পানি; খাল ঘুরলে বড় নিরাপদ রাস্তা। দূরে আম-গাছ — গন্তব্য। তারিক ভাই ঘাটে দাঁড়িয়ে — মাঠ-তদারককারী, গায়ে জলপাই গেঞ্জি, আর তাঁর সিগনেচার: কোমরের বেল্টে আঁটা দুটো আলাদা খাতা — একটার পাতা নীল, একটার লাল। গন্ধ — খালের কাদা, ভেজা ঘাস, দূরে সাবান-চারার ঝাঁঝ। শব্দ — পানির ছলাৎ, ব্যাঙের ডাক, দূরে কোদালের শব্দ।</p>
<p class="scene-setting en">The sixth door. Morning — a long irrigation canal at the garden's west edge, a narrow mud path along its lip, slow water below; the long safe road curves around. Far off, the mango tree — the destination. Tariq stands at the ghat — the field supervisor, olive vest, and his signature: two ledgers strapped to his belt, one blue-paged, one red. The smell of canal mud and wet grass; water lapping, frogs, a distant spade.</p>

<div class="dialogue">তুমি ঘাটে পৌঁছালে। তারিক ভাই দুই খাতা খুলে ধরলেন। "ইদ্রিস কাকার ছেলে-ছাত্র? প্রতি ধাপে ঘষা শিখেছ?"
"হ্যাঁ ভাই। δ দিয়ে দাম শোধরাই।"
"ভালো। এবার আসল খেলা।" তিনি আম-গাছ দেখালেন। "ওখানে যাবে। দুই রাস্তা — খাল-ধরে সরু পথ, দশ মিনিট; ঘুরে বড় রাস্তা, বিশ মিনিট। কোনটা?"
তুমি হাসলে। "সরু পথ! ছোট তো!"
"নীল খাতা তোমার সাথে একমত।" তিনি খাতা উল্টালেন। "লাল খাতা বলছে — ঘুরপথ। এখন বিরোধ মেটাও।"</div>
<div class="dialogue en">You reached the ghat. Tariq held up both ledgers. "Idris's student? Learned the per-step polish?"
"Yes — correct prices with δ."
"Good. Now the real game." He pointed at the mango tree. "Two roads — the narrow canal path, ten minutes; the long road around, twenty. Which?"
You laughed. "The narrow one! Shorter!"
"The blue ledger agrees." He turned pages. "The red ledger says — take the loop. Now resolve the dispute."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> গত বর্ষায় তারিক ভাই নীল খাতার কথায় নতুন এক মজুরকে খাল-পাড় দিয়ে পাঠালেন — খাতা ঠিকই বলছিল ওই পথ 'সর্বোচ্চ-দাম'। মাঝপথে পা পিছলে ছেলেটা খালে — কাঁধ পর্যন্ত পানি, ঝাঁকাতে সর্দি। খাতার হিসাবে দোষ ছিল না: সে প্রতিটা ধাপ বিচার করছিল 'এখান থেকে সবচেয়ে ভালো কাজ' ধরে — যেন ভবিষ্যতের প্রতিটা পা নিখুঁত হবে। কিন্তু নতুন মজুরের পা নিখুঁত নয় — মাঝে মাঝে এদিক-ওদিক ঘাঁটে, তখন সরু ধারে পিছলানি। খাতা পথ চিনত, হাঁটাহাঁটি চিনত না।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৯৮৯</div><div class="sc-label">ওয়াটকিন্স — Q-learning জন্ম (কেমব্রিজ থিসিস, Learning from Delayed Rewards)</div></div>
<div class="stat-card"><div class="sc-num">১৯৯২</div><div class="sc-label">ওয়াটকিন্স-দয়ান — অভিসৃতি-প্রমাণ (Machine Learning 8)</div></div>
<div class="stat-card"><div class="sc-num">১৯৯৪</div><div class="sc-label">রামেরি-নিরঞ্জন — SARSA (আগের নাম MCQ-L; 'SARSA' নাম সাটনের দেওয়া)</div></div>
<div class="stat-card"><div class="sc-num">১ শব্দ</div><div class="sc-label">off বনাম on — max বসে কোথায়, সেখানেই দর্শন</div></div>
</div>

<div class="dialogue">তুমি দুই খাতা হাতে নিলে। প্রতিটার হালনাগাদ-লাইন প্রায় একই — শুধু শেষের দিকে এক জায়গায় তফাত। তারিক ভাই দুই লাইনে আঙুল রাখলেন। "নীল খাতা লেখে: আজকের ফল, প্লাস পরের অবস্থার <em>সবচেয়ে ভালো</em> দাম। সে জিজ্ঞেস করে — সর্বোচ্চ কী? নিজে কী করবে সে-খাতির নেই। লাল খাতা লেখে: আজকের ফল, প্লাস পরের অবস্থায় <em>যেটা সত্যিই করা হবে</em> তার দাম। সে জিজ্ঞেস করে — আমার চালায় কী হয়?" তিনি খালের দিকে তাকালেন। "নীল খাতা যেকোনো ঘটনা থেকে শেখে — নিজের হাঁটা, মজুরের হাঁটা, পুরনো রেকর্ড — কারণ লক্ষ্য সে সর্বোচ্চটাই রাখে। লাল খাতা শেখে শুধু নিজের চলতি হাঁটা থেকে — পিছলানিসহ। তাই লাল খাতা খাল-পাড়কে ভয় পায়, নীল পায় না।"</div>
<div class="dialogue en">You took both ledgers. Their update lines were nearly identical — one spot differed near the end. Tariq placed a finger on each. "The blue writes: today's fruit plus the <em>best</em> price of the next state. It asks — what is the maximum? It doesn't care what it will actually do. The red writes: today's fruit plus the price of what <em>will actually be done</em> next. It asks — what happens under my walking?" He looked at the canal. "The blue learns from any experience — its own walk, the workers', old records — for it keeps only the maximal target. The red learns only from its own current walking — slips included. So the red fears the canal lip; the blue doesn't."</div>

<div class="code-block">দুই খাতার সূত্র — Q-learning & SARSA:

Q-learning (ওয়াটকিন্স ১৯৮৯ — off-policy):
  Q(s,a) ← Q(s,a) + α·[ r + γ·max_a' Q(s',a') − Q(s,a) ]
                                  └── সর্বোচ্চ লক্ষ্য, নিজের চাল নয়
  আচরণ যা-ই হোক (ε-ঘুঁচি, পুরনো ডেটা, অন্যের চাল) —
  লক্ষ্য স্থির: সর্বোচ্চ → সরাসরি সর্বোচ্চ-নীতির দিকে শেখে
  (ওয়াটকিন্স-দয়ান ১৯৯২: শর্তে অভিসৃতি-প্রমাণ)

SARSA (রামেরি-নিরঞ্জন ১৯৯৪ — on-policy):
  Q(s,a) ← Q(s,a) + α·[ r + γ·Q(s',a') − Q(s,a) ]
                                  └── a' = পরের ধাপে সত্যিই নেওয়া কাজ
  (State-Action-Reward-State-Action — নামেই সূত্রের কাঠামো;
   আদি নাম MCQ-L, 'SARSA' নামকরণ সাটনের)

খাল-পাড় রহস্য (cliff-walking, সাটন-বার্টোর বিখ্যাত দৃশ্য):
  ε > 0-তে (মাঝে মাঝে এলোমেলো পা):
    Q-learning → সরু ধার ঘেঁষে সর্বোচ্চ-পথ (চাল নিখুঁত ধরে)
    SARSA     → দূরের নিরাপদ ঘুরপথ (নিজের এলোমেলো পা-ও হিসাবে)
  ε → ০ হলে দুই খাতা মিলে যায় — সরু ধার-ই সেরা
  শিক্ষা: শেখার সময় অন্বেষণ থাকলে 'সর্বোচ্চ' আর 'বাস্তব' ভিন্ন উত্তর

কোনটা কখন:
  off-policy (Q): পুরনো/অন্যের ডেটা পুনর্ব্যবহার, সর্বোচ্চ-লক্ষ্য
  on-policy (SARSA): চলমান-নীতির বাস্তব মূল্য, নিরাপত্তা-সংবেদনশীল
  (এই দ্বৈততা পরের দরজায় ফিরবে — replay + off-policy = বিপদের ত্রয়ী)</div>

<div class="dialogue">বিকেলে মজুররা ফেরার সময় তারিক ভাই দুই খাতা বুকে চেপে বললেন: "কুরআনে দুই হুকুমই আছে, বাবা। এক — 'ভূমিতে পরিভ্রমণ করো আর দেখো পূর্ববর্তীদের পরিণতি কী হলো' (৩:১৩৭)। মিথ্যাবাদীদের শেষ দেখে শেখো — নিজে সে-পথ হাঁটোনি, তবু হিসাব নিলে। এ যে নীল খাতার বুদ্ধি: অন্যের ঘটনা থেকে সর্বোচ্চ-শিক্ষা। দুই — 'প্রত্যেকে দেখুক আগামীর জন্য কী পাঠিয়েছে' (৫৯:১৮)। নিজের পদচারণার হিসাব — মুহাসাবা। এ লাল খাতার বুদ্ধি: আমার আসল হাঁটা থেকে আমার আসল দাম। দুই-ই দরকার — ইতিহাস থেকে জ্ঞান, আর নিজের আয়নায় সততা। যে শুধু অন্যের পতন পড়ে নিজে হাঁটেনি, তার লাল খাতা ফাঁকা; আর যে শুধু নিজের ঘামে ডুবে ইতিহাস পড়েনি, তার নীল খাতা সরু।"</div>
<div class="dialogue en">At dusk, as the workers returned, Tariq pressed both ledgers to his chest: "The Quran holds both commands. One — 'Travel through the earth and see the fate of those before' (3:137): learn from ends you never walked. That is the blue ledger's wisdom — the optimal lesson from others' events. Two — 'Let every soul look at what it has sent ahead for tomorrow' (59:18): the audit of one's own steps — muhasabah. That is the red ledger's wisdom: my real price from my real walking. Both are needed — knowledge from history, honesty in one's own mirror. He who reads only others' falls but never walked has an empty red ledger; he who drowns only in his own sweat and reads no history has a thin blue one."</div>

<div class="verse">
<div class="verse-arabic">سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ كَانَ عَاقِبَةُ الْمُكَذِّبِينَ</div>
<div class="verse-translation">ভূমিতে পরিভ্রমণ করো এবং দেখো, মিথ্যাবাদীদের পরিণতি কী হয়েছিল।</div>
<div class="verse-ref">— কুরআন ৩:১৩৭</div>
</div>

<div class="secret-box"><div class="label">দরজা ৬ — রহস্য</div><div class="text">📓 নীল খাতা জিজ্ঞেস করে 'সর্বোচ্চ কী', লাল খাতা জিজ্ঞেস করে 'আমার হাঁটায় কী'।<br><small>Q: r+γ·max Q(s',a') — off-policy, সর্বোচ্চ-লক্ষ্য। SARSA: r+γ·Q(s',a') — on-policy, বাস্তব-চাল। সিয়ার (৩:১৩৭) + মুহাসাবা (৫৯:১৮)।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>দুই সূত্র পাশাপাশি মুখস্থ নয় — চোখে আঙুল:</strong> max_a'-এর জায়গায় বসে Q(s',a') — এই এক শব্দেই off বনাম on policy।</li>
<li><strong>Cliff-আচরণ ব্যাখ্যা পারা:</strong> ε>0-তে Q-learning সরু-ধার, SARSA ঘুরপথ; ε→০-তে মিলন — ইন্টারভিউ-প্রিয় গভীর প্রশ্ন।</li>
<li><strong>ইতিহাস নির্ভুল:</strong> ওয়াটকিন্স ১৯৮৯ (থিসিস) → ওয়াটকিন্স-দয়ান ১৯৯২ (প্রমাণ); SARSA ১৯৯৪ রামেরি-নিরঞ্জন, আদি নাম MCQ-L, নামকরণ সাটনের।</li>
<li><strong>কোনটা কখন:</strong> replay/অন্যের ডেটা → off-policy; চলমান ব্যবস্থার বাস্তব মূল্য/নিরাপত্তা → on-policy।</li>
<li><strong>সেতু:</strong> দরজা ৫-এর ঘষা + এই দুই লক্ষ্য → দরজা ৭-এ function approximation এসে দেখবে এই মিশ্রণ কখন বিপদ (deadly triad)।</li>
</ul>`
  }
});

// ── DOOR 7: অনুমানে বোনা (FUNCTION APPROXIMATION & THE DEADLY TRIAD) ──
doors.push({
  num:7, icon:"🎨", color:"#fb923c", name:"অনুমানে বোনা",
  subtitle:"Sowing by Pattern", tech:"Function Approximation, Generalization, The Deadly Triad (Sutton & Barto §11.3), Gradient-TD",
  spirit:"যান্ন বিল-গায়িব — অদৃশ্য সম্পর্কে ধারণা; জ্ঞান বনাম অনুমানের সীমারেখা",
  secret:"প্রতিটা বিছানার দাম মুখস্ত নয় — প্যাটার্ন শেখো, দেখানি বিছানার দাম আঁকো। কিন্তু তিন জিনিস একসাথে এলে (ছবি+নিজ-ঘষা+অন্যের খাতা) হিসাব পাগল হয়।",
  recall:{
    q:"নুসরাত আপা কেন হাজার বিছানার দামের ঘন খাতার বদলে একটা প্যাটার্ন-ছবি আঁকেন — আর deadly triad-টা কী, কেন ভয়ের?",
    qen:"Why does Nusrat draw one pattern-picture instead of a dense thousand-row ledger — and what is the deadly triad, why is it feared?",
    a:"কারণ খাতা সব বিছানা ধরে না — নতুন/দেখানি বিছানায় ফাঁকা পাতা; আর মাত্রা-অভিশাপে (Door 4) ঘন টেবিল অসম্ভব। প্যাটার্ন-ছবি (function approximation) হলো দামকে বিছানার বৈশিষ্ট্যের ফাংশন ধরা — ভেজা-উঁচু-রোদে দাম বাড়ে, এই সম্পর্ক একবার শিখলে দেখানি বিছানার দামও আঁকা যায়: generalization। এলোমেলো ছোট পার্থক্য নয় (tabular-এ যেমন), আঁকা মসৃণ — পাশাপাশি বিছানা একসাথে হালনাগাদ হয়। কিন্তু বিপদ: function approximation + bootstrapping (নিজের আন্দাজে নিজেকে শোধরানো, Door 5) + off-policy (অন্যের/পুরনো খাতা, Door 6) — এই তিন একসাথে হলে হালনাগাদ কখনো না-থামা স্ফীতি/দোলায় যেতে পারে: আন্দাজের ওপর আন্দাজ, যার ভিত্তি বাস্তবে নেই। সাটন-বার্টো একে বলেছেন deadly triad (2nd ed., §11.3)। প্রতিকারের পথ: on-policy থাকা, বা gradient-TD ধরনের স্থিতিশীল লক্ষ্য, বা error-propagation-জাত পদ্ধতি (GTD)।",
    aen:"Tabular ledgers can't cover every bed and explode under the curse of dimensionality; a pattern-picture (function approximation) prices beds from features — generalizing to unseen ones. But approximation + bootstrapping + off-policy together (the deadly triad, S&B §11.3) can diverge — estimates resting on estimates. Remedies: stay on-policy, or gradient-TD style stable updates."
  },
  story:`
<p class="scene-setting">সপ্তম দরজা। বাগানের পূর্ব ঢালে নুসরাত আপার স্টুডিও-খোপা — খড়ের চাল, ভেতরে মেঝেতে ছড়ানো রঙের প্যালেট, দেয়ালে আঁকা বড় এক কাপড়ের নকশা: গোটা বাগানের মানচিত্র কিন্তু রেখা নয় — রঙের ঢেউ (ভেজা নিচু জায়গা গাঢ় সবুজ, উঁচু রোদেলা সোনালি)। নুসরাত আপা — গায়ে মেঝে-পরা কামিজ, আঙুলে পাঁচ রঙের দাগ, আর তাঁর সিগনেচার: কানের পেছনে সবসময় একটা ছোট্ট কয়লার কাঠি — ভাবনা এলেই কাঠিটা ঠোঁটে ছুঁইয়ে নেন। গন্ধ — তেলরঙ, ভেজা কাপড়, ঢালের বাতাস। শব্দ — তুলির শব্দ নেই রেখার, শুধু কাপড়ে হালকা ঘষা, দূরে বাবুইর ডাক।</p>
<p class="scene-setting en">The seventh door. Nusrat's studio-hut on the garden's eastern slope — thatched roof, palettes on the floor, and on the wall a great painted cloth: the whole garden mapped not in lines but waves of color (wet lowlands deep green, sunlit rises gold). Nusrat — a paint-flecked kameez, five colors on her fingers, her signature: a small charcoal stick always tucked behind her ear, touched to her lips when thinking. The smell of oil-paint and damp cloth; no brush-sound, just soft rubbing on fabric, a distant babbler.</p>

<div class="dialogue">তুমি খোপায় উঠলে। নুসরাত আপা কয়লার কাঠি ঠোঁট ছুঁইয়ে ফিরলেন। "তারিক ভাইয়ের খাতাগুলো দেখে এসেছ? ধাপে ধাপে ঘষা?"
"হ্যাঁ আপা। কিন্তু তাঁর খাতায় তো সব বিছানা নেই — নতুন কোনো বেড বানালে পাতাই ফাঁকা!"
তিনি হাসলেন, দেয়ালের রঙের ঢেউয়ের দিকে তাকালেন। "সেজন্যই আমি খাতা রাখি না। আমি রাখি ছবি। দেখো —"</div>
<div class="dialogue en">You climbed into the hut. Nusrat touched the charcoal to her lips and turned. "Seen Tariq's ledgers? The step-by-step polish?"
"Yes. But his ledger doesn't hold every bed — make a new one, and the page is blank!"
She smiled, looking at the waves of color. "That's why I keep no ledger. I keep a picture. Look —"</div>

<div class="dialogue">তিনি নকশার এক কোণ দেখালেন — দুটো বিছানা পাশাপাশি, একই গাঢ় সবুজ। "এই দুটোর দাম খাতায় আলাদা লাইন; আমার ছবিতে একই ঢেউ। কেন? দুটোই ভেজা, নিচু, রোদ কম — একই <em>ধরনের</em>। ধরন এক হলে দামও কাছাকাছি। তুমি যদি জানো 'ভেজা+নিচু+ছায়া = ভালো দাম', তাহলে হাজারতম নতুন বিছানাও — যে কখনো দেখিনি — তার দাম আঁকতে পারবে। খাতা মুখস্বন করে; ছবি <em>বোঝে</em>। তারিক এক-একটা লাইন ঘষে; আমার এক টানে পাশের দশটা বিছানা একসাথে ঘষায়।" তিনি তোমার হাতে কয়লা দিলেন। "এঁকে দেখি — ওই কোণটা, যেটা আমি কখনো দেখিনি। প্যাটার্ন ধরে আঁকো।"</div>
<div class="dialogue en">She pointed to a corner — two beds side by side in the same deep green. "In a ledger these are separate lines; in my picture, the same wave. Why? Both wet, low, shaded — the same <em>kind</em>. Same kind, similar price. Know that 'wet+low+shade = good price' and you can price the thousandth new bed you've never seen. The ledger memorizes; the picture <em>understands</em>. Tariq polishes one line at a time; one stroke of mine polishes ten neighboring beds together." She handed you the charcoal. "Draw that corner I've never seen. Price it by pattern."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে (এ দরজার বিপদ সবচেয়ে গভীর):</strong> গত মৌসুমে নুসরাত আপা তারিক ভাইয়ের <em>পুরনো</em> খাতা ধার নিলেন — বিগত পাঁচ বছরের সব হাঁটা। নিজের ছবি সেই তথ্যে ঘষাতে লাগলেন, আর ছবি এঁকে ছবি শোধরাতে লাগল (নিজের আন্দাজের ওপর আন্দাজ)। এক রাতে দেখা গেল — পুরো ঢালের রঙ জ্বলে গিয়ে টকটকে, দাম আকাশে! প্যাটার্ন ছিল না; ছিল পুরনো খাতার ঘোর যা নিজের ঘুরপ্যাঁচকে আরও বড় করেছে। মাস লাগল রঙ ফেরাতে। এই তিনের মেলা — ছবি (approximation) + নিজ-ঘষা (bootstrapping) + অন্যের খাতা (off-policy) — গণিতে একটা নাম পেয়েছে: <strong>deadly triad</strong>।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">ঢেউ</div><div class="sc-label">প্যাটার্ন = দাম বৈশিষ্ট্যের ফাংশন — এক টানে অনেক বিছানা</div></div>
<div class="stat-card"><div class="sc-num">দেখানি</div><div class="sc-label">generalization — চোখে না দেখা বিছানার দামও আঁকা</div></div>
<div class="stat-card"><div class="sc-num">৩</div><div class="sc-label">deadly triad: approximation + bootstrap + off-policy</div></div>
<div class="stat-card"><div class="sc-num">§11.3</div><div class="sc-label">সাটন-বার্টো 2nd ed. (2018) — স্ফীতি/অভিসৃতি-বিচ্যুতির সতর্কতা</div></div>
</div>

<div class="dialogue">তুমি কয়লা ধরে জিজ্ঞেস করলে: "আপা, তাহলে ছবি আঁকা কি খাতার চেয়ে খারাপ?"
নুসরাত আপা মাথা নাড়লেন। "না রে। ছবি ছাড়া তো আসল মাঠ অসম্ভব — বিছানা অগণন, খাতা রাখা যায় না (তোমার সালমা আপার অভিশাপ মনে আছে?)। বিপদ ছবিতে না — <em>তিন জিনিস একসাথে</em> হলে। তুমি যদি নিজের হাঁটা থেকে শেখো (লাল খাতার মতো), ছবি শান্ত থাকে। বা ঘষার নিয়মটা এমন বাঁধো যে পুরনো আন্দাজের ঘোর না বাড়ে — gradient-TD জাতীয় স্থিতিশীল হালনাগাদ। আঁকিয়ের সততা: জানো কোথায় আঁকা, কোথায় দেখা।" তিনি জানালার বাইরে দূরের মাঠে তাকালেন — কুয়াশায় আধো-আধো দেখা যায়। "দেখো, ওই যে কুয়াশা — অদৃশ্য সীমান্ত। আমার রঙ ও পর্যন্ত বাড়ে, আরও দূরের দাম বলা চেষ্টা করলে সে আর জ্ঞান থাকে না — জান্ন হয়ে যায়।"</div>
<div class="dialogue en">You held the charcoal. "So is the picture worse than the ledger?"
She shook her head. "No. Without pictures the real field is impossible — beds uncountable (remember Salma's curse?). The danger isn't the picture — it's <em>three things at once</em>. Learn from your own walking (like the red ledger) and the picture stays calm. Or bind the update so old estimates' dizziness doesn't grow — gradient-TD style stable rules. The painter's honesty: know where seeing ends and drawing begins." She looked past the window to the far field, half-lost in mist. "See that fog — the unseen border. My color reaches to it; claim prices beyond, and it's no longer knowledge — it becomes conjecture."</div>

<div class="code-block">ছবির গণিত — Function Approximation:

সমস্যা: |S| বিশাল/অসীম → টেবিল অসম্ভব (মাত্রা-অভিশাপ)
সমাধান: দামকে বৈশিষ্ট্যের ফাংশন ধরো
  V̂(s, w) ≈ V(s)     w = ছবির রঙ-সমূহ (ওয়েট/প্যারামিটার)
  উদাহরণ: রৈখিক — V̂ = w₁·(ভেজা) + w₂·(ছায়া) + w₃·(উঁচু) + …
          গভীর নেট — রঙের ঢেউয়ের মতো জটিল প্যাটার্ন

শেখা: δ-এর সূত্র প্রায় আগেরটাই, ঘষা এখন রঙে (w-তে):
  w ← w + α·δ·∇V̂(s,w)     (semi-gradient TD)
  এক বিছানার ঘষা পাশের বিছানায়ও লাগে — একই ঢেউ (generalization)

তবে — Deadly Triad (সাটন-বার্টো §11.3):
  ① function approximation   (ছবি — আন্দাজ)
  ② bootstrapping            (নিজের আন্দাজে নিজে শোধরানো)
  ③ off-policy শেখা         (অন্যের/পুরনো খাতা থেকে)
  ─── তিনটাই একসাথে → হালনাগাদ স্ফীতি/দোলা, অভিসৃতি ভাঙতে পারে
  (আঁকা আঁকিকে বড় করে — টকটকে ঢালের গল্প)

সতর্কতার পথ:
  • on-policy থাকো (তিনের একটা বাদ) — SARSA-ঘরানা
  • স্থিতিশীল লক্ষ্য: gradient-TD (GTD/GTD2) — ঘোর না-বাড়ানো নিয়ম
  • ছোট α, অভিজ্ঞতা-পুনর্মিশ্রণে সাবধানি (পরের দরজার replay-সংযোগ)

যা পেলাম-যা হারালাম:
  পেলাম: স্কেল (অগণন বিছানা), generalization (দেখানি দাম)
  হারালাম: টেবিলের নিশ্চয়তা — এখন সব দাম কিছুটা আন্দাজ
  (জ্ঞান-মাপ প্রশ্ন: আঁকা কোথা পর্যন্ত সত্য?)</div>

<div class="dialogue">সন্ধ্যায় রঙ ধুতে ধুতে নুসরাত আপা বললেন: "কুরআনে আছে — অনেক ধারণা তো পাপ (৪৯:১২); অদৃশ্য সম্পর্কে বলা যায় না, যতটুকু প্রমাণ নেই। আমার কাজে ফিরে আসলে: আমার প্রতিটা রঙ এক-একটা অবস্থার সাক্ষ্য থেকে — কুয়াশার ওপারে আঁকা বাড়ানো মানে সাক্ষ্য ছাড়া দাবি। ফাংশন-অ্যাপ্রক্সিমেশন তাই আমার কাছে যান্ন বিল-গায়িবের সীমানা-রক্ষক: দাম আঁকব, কিন্তু জানব এ আঁকা — আর যেখানে দেখা শেষ, সেখানে দাবি শেষ। তোমার মেশিনও তাই শেখাক — প্যারামিটার আঁকুক, নিশ্চয়তার দাবি না করুক। যে ব্যবস্থা নিজের আন্দাজকে জ্ঞান বলে চালিয়ে দেয়, সে-ই তো টকটকে ঢাল হয়ে যায়।"</div>
<div class="dialogue en">Washing brushes at dusk, Nusrat said: "The Quran says much conjecture is sin (49:12) — say nothing of the unseen beyond your proof. In my craft: every color comes from a witnessed state — painting past the fog is claiming without witness. Function approximation is my guardian of the border of the unseen: I draw prices, but I know it is drawing — where seeing ends, claiming ends. Teach your machine the same — let parameters draw, but not parade estimates as certainty. A system that passes its own guessing off as knowledge becomes the burnt-orange slope."</div>

<div class="verse">
<div class="verse-arabic">وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ</div>
<div class="verse-translation">যার জ্ঞান তোমার নেই, তার পিছু নিয়ো না।</div>
<div class="verse-ref">— কুরআন ১৭:৩৬</div>
</div>

<div class="secret-box"><div class="label">দরজা ৭ — রহস্য</div><div class="text">🎨 খাতা মুখস্বন করে, ছবি বোঝে — দেখানি বিছানার দামও আঁকো। কিন্তু ছবি+নিজ-ঘষা+অন্যের খাতা একসাথে হলে রঙ পাগল হয়।<br><small>V̂(s,w): রৈখিক/নেট; w←w+α·δ·∇V̂। Deadly triad (§11.3): approximation+bootstrap+off-policy → divergence। প্রতিকার: on-policy / gradient-TD। আঁকা কোথায় সত্য — জেনে আঁকো।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>কেন approximation:</strong> টেবিল মাত্রা-অভিশাপে মরে; ফিচার-ফাংশন generalization দেয় — দেখানি অবস্থার দামও।</li>
<li><strong>Semi-gradient আপডেট:</strong> w←w+α·δ·∇V̂ — এক ঘষায় প্রতিবেশী-রাজ্য একসাথে (tabular-এর সাথে পার্থক্য বোঝো)।</li>
<li><strong>Deadly triad মুখস্থ নয় — গল্পসহ:</strong> ছবি+নিজ-ঘষা+অন্যের খাতা = স্ফীতির ঝুঁকি; কোন জোড়া নিরাপদ, কোনটা নয় — টেবিল করে বলতে পারো কি?</li>
<li><strong>প্রতিকার-নাম জানা:</strong> on-policy থাকা; gradient-TD (GTD/GTD2) স্থিতিশীলতা; পরের দরজার DQN কীভাবে triad-ঘিরে বাঁচে (replay+টার্গেট-নেট) — প্রস্তুত থাকো।</li>
<li><strong>জ্ঞানতত্ত্বের প্রশ্ন:</strong> সব দাম এখন আন্দাজ — মডেল যখন 'নিশ্চিত' সেজে ওঠে, সে-ই divergence-এর নৈতিক রূপ (১৭:৩৬)।</li>
</ul>`
  }
});

// ── DOOR 8: চোখ দিয়ে দেখে শেখা (DEEP Q-NETWORKS) ──
doors.push({
  num:8, icon:"📸", color:"#60a5fa", name:"চোখ দিয়ে দেখে শেখা",
  subtitle:"Learning Through the Lens", tech:"DQN: Experience Replay (Lin 1992), Target Network, Atari (Mnih et al. 2013/2015)",
  spirit:"হিফজ — ধারণ ও সংরক্ষণ; স্মৃতি ফিরে দেখা, বারবার শেখা",
  secret:"শেখার পর মুছে ফেলো না — জমাও। পুরনো মুহূর্ত এলোমেলো করে আবার সামনে আনলে দুই বিষ ভাঙে: ধারাবাহিকতার ঘোর আর চলন্ত লক্ষ্য।",
  recall:{
    q:"রাশেদ ভাই কেন শুধু নতুন ছবি থেকে নয়, পুরো অ্যালবাম এলোমেলো করে পুরনো ছবিও বারবার শেখেন — আর DQN-এর দুই প্রতিরক্ষা (replay + target network) কী থেকে বাঁচায়?",
    qen:"Why does Rashed learn from shuffled old album photos too — and what do DQN's two defenses (replay + target network) protect against?",
    a:"ধারাবাহিক ছবি প্রায় একই দেখায় — পরপর শিখলে মনে হয় সবাই এক কথা বলছে (correlated data), তাজা শেখা বসে যায় এবং পুরনো মুছে যায় (catastrophic forgetting); আর টার্গেট যদি নিজেই প্রতি ধাপে বদলায়, তুমি যাকে তাড়া করছ সে-ই পালায়। রাশেদ ভাইয়ের অ্যালবাম = experience replay (লিন, ১৯৯২): প্রতিটা অভিজ্ঞতা (s, a, r, s') জমা থাকে; মিনি-ব্যাচ আসে এলোমেলো নমুনা থেকে — সম্পর্ক ভাঙে, এক ডেটা বহুবার ব্যবহার হয়। Target network = আলাদা ধীর-হালনাগাদ নকল: δ-এর লক্ষ্য r + γ·max Q(s',a'; w⁻) কিছুক্ষণ স্থির থাকে, তারপর মাঝে মাঝে w⁻ ← w। এই দুই মিলে নুসরাত আপার deadly triad-এর আগুন কমায়: replay off-policy ক্ষতি পাতলা করে (প্রায়-স্বতন্ত্র, প্রায়-ভারসাম্যান), target নেট bootstrapping-এর চলমান লক্ষ্য জমাট করে। মনিম-দল ২০১৩-এ arXiv-এ এটাই দেখাল (Atari), ২০১৫-এ Nature-এ — মানুষের স্তরের নিয়ন্ত্রণ।",
    aen:"Sequential frames are near-identical (correlation → forgetting) and a self-moving target never settles. Replay (Lin 1992) samples the album randomly — breaking correlation, reusing data; a slow-updating target network freezes the bootstrap target. Together they tame the deadly triad. Mnih et al. 2013 arXiv → 2015 Nature."
  },
  story:`
<p class="scene-setting">অষ্টম দরজা। বাগানের উত্তরে রাশেদ ভাইয়ের ছায়া-আস্তাকুড় — দেয়ালে শুকনো ফিল্মের সারি, টেবিলে ক্যামেরা-কেস, পাশে বাঁধানো মোটা অ্যালবামের স্তূপ, লাল বাতির নিচে ঝুলন্ত তাজা প্রিন্ট। রাশেদ ভাই — গায়ে ফিল্ম-অ্যাপ্রন, ঘাড়ে ঝোলানো পুরনো রেঞ্জফাইন্ডার ক্যামেরা (তাঁর সিগনেচার — কথার মাঝখানে হঠাৎ ভিউফাইন্ডার চোখে তুলে 'এক সেকেন্ড' বলে থেমে যান, তারপর ঠিক আগের বাক্য থেকেই আবার শুরু করেন)। গন্ধ — ডেভেলপার-রসায়নের টক ঝাঁঝ, কাগজ, কফি। শব্দ — পাখি নেই; ঘড়ির টিকটিক, মাঝে মাঝে শাটারের খট্‌।</p>
<p class="scene-setting en">The eighth door. Rashed's darkroom-shed at the garden's north — film strips drying on lines, a camera case, stacks of bound albums, fresh prints under the red light. Rashed — a film apron, an old rangefinder camera slung at his neck (his signature: mid-sentence he suddenly raises the viewfinder, says 'one second', then resumes exactly where he stopped). The smell of developer chemistry, paper, coffee; no birds — a clock's tick, the occasional shutter's click.</p>

<div class="dialogue">তুমি লাল আলোয় ঢুকলে। রাশেদ ভাই অ্যালবাম উল্টাচ্ছিলেন। "এক সেকেন্ড।" ভিউফাইন্ডার চোখে — খট্‌। তারপর: "নুসরাত আপার ছবি দেখে এসেছ। এবার দেখবে — ছবি <em>জমানো</em>। বোস। প্রথম প্রশ্ন আমার: একটা ঘটনা ঘটল, শিখলে — তারপর?"
"তারপর... পরের ঘটনা?"
"আর প্রথমটা?"
"গেল। শেখা শেষ।"
তিনি মাথা নাড়লেন। "এটাই সবার প্রথম ভুল।"</div>
<div class="dialogue en">You stepped into the red light. Rashed was flipping an album. "One second." Viewfinder up — click. Then: "Seen Nusrat's pictures. Now you'll see pictures <em>kept</em>. Sit. My first question: an event happens, you learn from it — then?"
"Then... the next event?"
"And the first one?"
"Gone. Learned, done."
He shook his head. "That's everyone's first mistake."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> রাশেদ ভাইয়ের প্রথম শিক্ষানবিশি — ছিল ভিডিও-ঘেঁষা প্রজেক্ট: প্রতিটা ফ্রেম আসত, সে শিখত, ফেলে দিত। পরের ফ্রেম প্রায় আগেরটার মতোই — সব বলছিল একই কথা; দিন-শেষে নতুন দিনের ফ্রেম রাতের শেখা মুছে দিত (catastrophic forgetting), আর তাড়া করা লক্ষ্যটা নিজেই প্রতি ধাপে পালাত (তার নিজের আপডেটেই বদলে যেত)। ছবি একেবারে তাজা থেকে শেখা = ঘোর লাগানো ঘরে দৌড়। তারপর এল অ্যালবাম — লিনের ১৯৯২-এর বুদ্ধি, এক যুগ পরে মনিম-দল ২০১৩-এ ডিপ-নেটের সাথে জুড়ল।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৯৯২</div><div class="sc-label">লিন — অভিজ্ঞতা-পুনরাবৃত্তির (replay) জন্ম</div></div>
<div class="stat-card"><div class="sc-num">২০১৩</div><div class="sc-label">মনিম-দল — Atari + ডিপ নেট (arXiv 1312.5602)</div></div>
<div class="stat-card"><div class="sc-num">২০১৫</div><div class="sc-label">Nature — মানব-স্তরের নিয়ন্ত্রণ (৫১৮:৫২৯–৫৩৩)</div></div>
<div class="stat-card"><div class="sc-num">২ ডিফেন্স</div><div class="sc-label">replay + target network — triad-শিখার বর্ম</div></div>
</div>

<div class="dialogue">তিনি অ্যালবাম খুলে দেখালেন — প্রতিটা পাতায় এক মুহূর্ত: ছবির নিচে চার লাইন। "কোথায় ছিলাম, কী করেছিলাম, কী পেলাম, কোথায় এলাম — s, a, r, s'। প্রতিটা অভিজ্ঞতা এই চার-লাইনের কার্ড। আর শেখার সময়?" তিনি চোখ বন্ধ করে এলোমেলো পাতা উল্টালেন। "অ্যালবাম থেকে এলোমেলো মুঠো — গতকাল-আজ-তিন মাস আগে মিশে গিয়ে। সম্পর্ক ভাঙে (পরপর ফ্রেম একই কথা বলে না), এক কার্ড বারবার কাজে লাগে, আর নীল-খাতার মতো পুরনো অভিজ্ঞতাও নতুন চোখে পড়ে।" হঠাৎ: "এক সেকেন্ড।" খট্‌। "দ্বিতীয় বর্ম — দেয়ালে ওই যে আয়না।" তিনি একটা পুরনো প্রিন্ট দেখালেন, একটু হলদে। "টার্গেট-নেট = এই পুরনো প্রিন্ট। লক্ষ্য বারবার এ থেকে মাপি; নিজের তাজা ছবি থেকে নয় — নইলে যাকে মাপব, সে-ই নড়ে। মাসে একবার নতুন প্রিন্ট বসাই।"</div>
<div class="dialogue en">He opened an album — each page one moment, four lines beneath the photo. "Where I was, what I did, what I got, where I landed — s, a, r, s'. Every experience is this four-line card. And at learning time?" He shuffled pages at random. "A handful from anywhere — yesterday, today, three months ago, mixed. Correlation breaks, one card serves many lessons, and — like the blue ledger — old experience rereads with new eyes." Suddenly: "One second." Click. "The second armor — that mirror on the wall." An older, slightly yellowed print. "Target network = this old print. I measure the target from it, not from my fresh picture — else the thing I measure moves as I do. Once a while, I pin a new print."</div>

<div class="code-block">DQN-এর কারিগরি — Deep Q-Network:

রাশেদের চার-লাইন কার্ড → রিপ্লে বাফার D:
  সংরক্ষণ: (s, a, r, s') প্রতি ধাপে push (সীমা ছাড়ালে পুরনো বাদ)
  ব্যবহার: মিনি-ব্যাচ ~ ইউনিফর্ম( D ) — এলোমেলো, ধারাবাহিকতা ভাঙা

দুই নেটওয়ার্ক:
  অনলাইন Q(s, a; w)     — প্রতি ধাপে শেখে (রাশেদের তাজা ছবি)
  টার্গেট Q(s, a; w⁻)    — জমাট: w⁻ ← w প্রতি ~১০ হাজার ধাপে
                             (পুরনো প্রিন্ট — লক্ষ্য স্থির)

ক্ষতি (loss):
  L(w) = E[ ( r + γ·max_a' Q(s', a'; w⁻) − Q(s, a; w) )² ]
                       └── লক্ষ্য বর্শায় থামানো (stop-grad)
  Adam/SGD-এ w ঘষা; ε-greedy চাল (দরজা ১ ফিরেছে!)

কেন দুই বর্ম (নুসরাত আপার triad-এর প্রতিরোধ):
  replay → ডেটা প্রায়-i.i.d. + পুরনো-নতুন মিশ্রণ
        (off-policy ক্ষতি ছড়িয়ে দেয়, এক-স্রোতের ঘোর কাটে)
  target-net → bootstrapping-এর লক্ষ্য ধীর
        (আন্দাজ-ওপর-আন্দাজের স্ফীতি-চক্র ভাঙে)
  মনে রেখো: পুরোপুরি নিরাময় নয় — বর্ম, প্রতিষেধক নয়
  (মনিম ২০১৩/২০১৫: Atari-র ৪৯ খেলা, কাঁচা পিক্সেল থেকে,
   মানব-স্তরের নিয়ন্ত্রণ — তবু কিছু খেলায় ভেঙেই যায়)</div>

<div class="dialogue">রাত গভীর হলো। লাল বাতি নিভিয়ে রাশেদ ভাই অ্যালবামের প্রথম পাতায় হাত রাখলেন — সেখানে তাঁর দাদার হাতের লেখা একটাই পাতা, কাগজ পুরনো। "আমাদের বাড়িতে স্মৃতি মূল্যবান — কুরআনের সূরা হিফজ করা তো জানিস: ধারণ করা, সংরক্ষণ করা। আল্লাহ নিজে কথা দিয়েছেন — 'আমি এই কিতাব নাজিল করেছি এবং আমিই এর হিফজ করব' (১৫:৯)। হিফজ মানে শুধু পড়া নয় — এমন ধারণ যা বিকৃতি থেকে অক্ষত থাকে, প্রজন্মের পর প্রজন্ম ফিরে আসে, প্রতিবার নতুন প্রজন্ম তা থেকে নতুন করে শেখে। আমার অ্যালবাম তার ক্ষুদ্র ছায়া: মুহূর্ত ধরে রাখা, যাতে আবার-আবার শেখা যায়, যাতে আজকের চোখ কালকের ঘটনাকে নতুন করে বুঝে। যে জাতি শেখা মুছে ফেলে, সে প্রতিদিন শূন্য থেকে শুরু করে; যে ধরে রাখে ও ফিরে দেখে — সে প্রতিবার আগের চেয়ে গভীরে যায়। তোমার এজেন্টকেও হাফেজ বানাও।"</div>
<div class="dialogue en">Deep in the night, dimming the red lamp, Rashed laid a hand on the album's first page — his grandfather's single handwritten sheet. "In our house memory is precious — you know the hafiz tradition: to carry the Quran, preserved. Allah Himself promised — 'We have sent down this Reminder, and We will preserve it' (15:9). Hifz isn't mere recitation — a holding safe from distortion, returning generation after generation, each learning anew from it. My album is its tiny shadow: moments kept so they can be relearned, so today's eye rereads yesterday's event deeper. A people that erases what it learns starts from zero daily; one that keeps and revisits goes deeper each time. Make your agent a hafiz too."</div>

<div class="verse">
<div class="verse-arabic">إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ</div>
<div class="verse-translation">নিশ্চয়ই আমরাই এই স্মরণীয় বাণী (কুরআন) নাজিল করেছি, আর নিশ্চয়ই আমরাই এর সংরক্ষক।</div>
<div class="verse-ref">— কুরআন ১৫:৯</div>
</div>

<div class="secret-box"><div class="label">দরজা ৮ — রহস্য</div><div class="text">📸 শেখা মুছে ফেলিস না — অ্যালবামে জমা। এলোমেলো পাতায় ফিরে শেখা = replay; পুরনো প্রিন্ট থেকে লক্ষ্য মাপা = target-net।<br><small>(s,a,r,s')-বাফার + মিনি-ব্যাচ; Q(s,a;w) বনাম Q(s,a;w⁻); মনিম ২০১৩ arXiv → ২০১৫ Nature। Triad-বর্ম, নিরাময় নয়। হিফজ: ১৫:৯।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>দুই বর্মের কারণ ব্যাখ্যা পারা:</strong> replay = সম্পর্ক-ভাঙা + ডেটা-পুনর্ব্যবহার; target-net = চলমান লক্ষ্য জমাট — কোনটা কোন বিষের প্রতিষেধক, ম্যাপ করে বলো।</li>
<li><strong>Loss লিখে দেখাতে পারা:</strong> (r + γ·max Q(s',a';w⁻) − Q(s,a;w))² — কোথায় stop-gradient, কেন।</li>
<li><strong>ইতিহাস নির্ভুল:</strong> replay লিন ১৯৯২; DQN মনিম-দল ২০১৩ (arXiv 1312.5602) → ২০১৫ Nature (518:529–533)। দুটো আলাদা ঘটনা, এক যাত্রা।</li>
<li><strong>সীমা স্বীকার:</strong> বর্ম মানেই সার্বজনীন নিরাপত্তা নয় — Atari-র ৪৯-এ কিছুতে ভাঙে; stability-প্রশ্ন এখনো খোলা গবেষণা।</li>
<li><strong>সেতু:</strong> পরের দরজা — দাম-খাতা ছেড়ে সরাসরি নীতি: policy gradient। প্রশ্নটা বদলাবে 'কত দাম' থেকে 'কোন দিকে যাই'।</li>
</ul>`
  }
});

// ── DOOR 9: সরাসরি নীতি (POLICY GRADIENT: REINFORCE → PPO) ──
doors.push({
  num:9, icon:"🧭", color:"#34d399", name:"সরাসরি নীতি",
  subtitle:"Steering the Rudder Directly", tech:"Policy Gradient Theorem, REINFORCE (Williams 1992), TRPO (2015), PPO (Schulman et al. 2017)",
  spirit:"খুতবা — সরাসরি দিক-নির্দেশ; কথা দিয়েই পথ বদলানো",
  secret:"দামের খাতা নয় — হালের কামান ধরো। যে দিকে ফল ভালো হলো, ওই দিকে এক টুক ঘোরাও; এক ঝটকায় নয়, প্রতি ঢেউয়ে।",
  recall:{
    q:"আয়েশা খালা কেন কামানের দাম হিসাব না করে সরাসরি কামান ঘোরান — আর PPO কীভাবে 'বড় এক ঝটকা' থেকে বাঁচায়?",
    qen:"Why does Ayesha turn the rudder directly instead of pricing waters — and how does PPO avoid the one giant lurch?",
    a:"দুই কারণে সরাসরি নীতি (policy gradient): এক — কিছু সমস্যায় দাম-খাতা লাগেই না বা অসম্ভব, যেমন অবিচ্ছিন্ন কাজ (কামান কত ডিগ্রি? ৩৭.২°? — গণনায় ধরা যায় না); দুই — শেখার মাত্রা কম (θ-এর সংখ্যা দাম-টেবিলের সাম্নে নগণ্য)। গণিতের মূল এক লাইন: ∇J(θ) = E[ ∇log π_θ(a|s) · G_t ] — 'যে কাজ ভালো ফল এনেছে (G_t বড়), তার বাছাই-সম্ভাবনার ঢাল বাড়াও।' এটাই উইলিয়ামসের REINFORCE (১৯৯২)। সমস্যা: G_t-এর ঢেউ প্রচণ্ড (উচ্চ ভিন্নতা) — এক পথের দুর্ভাগ্যে পুরো কামান এলোমেলো। PPO-র সমাধান: প্রতি হালনাগাদে নতুন নীতি পুরনোর খুব কাছে থাকবে — সম্ভাবনা-অনুপাত r(θ)=π_নতুন/π_পুরনো-এর ওপর clip: L = E[min(r·A, clip(r, 1−ε, 1+ε)·A)]। বাইরে গেলে লাভ কাটা পড়ে — তাই বড় লাফ নিষ্পত্তি-হীন, ছোট ছোট নিরাপদ ঘূর্ণন। পথের ধারাবাহিকতা: TRPO (শুলম্যান ২০১৫, KL-সীমা) → PPO (২০১৭, clip) — একই বুদ্ধির সস্তা-সরল রূপ।",
    aen:"∇J(θ)=E[∇log π(a|s)·G] — raise the slope of actions that brought big returns (Williams' REINFORCE 1992). High variance tamed by clipping the probability ratio (PPO, Schulman 2017): no giant lurch, small safe turns. TRPO (2015) did it with KL bounds; PPO made it cheap."
  },
  story:`
<p class="scene-setting">নবম দরজা। নদীর মোহনায় ভোর — আয়েশা খালার নৌকা ঘাটে বাঁধা, পাল গুটানো, হালের কামানে রুমালে বাঁধা চিহ্ন-গুলো রোদে ফ্যাকাশে। আয়েশা খালা — মাঝিনী, গায়ে সাদা-নীল পাড়ের শাড়ি কোমরে গোটানো, হাতে ঘামে-চকচকে তামার বালা, আর তাঁর সিগনেচার: কবজিতে বাঁধা সাতটা গিঁটওয়ালা সুতো — প্রতি টহলের পর একটা গিঁট খুলে সে রাতের হাওয়ার দিক মনে রাখেন (সাত রাত পর সুতো ফের নতুন — পুরনো দিক-স্মৃতি ছেড়ে দেওয়া)। গন্ধ — নদীর কাদা, তারপান, ভেজা পাটের দড়ি। শব্দ — ঢেউয়ের আছড়ানো, দূরে জেলেদের হাঁক, কামানের বাঁকে কাঠের ক্যাঁচ।</p>
<p class="scene-setting en">The ninth door. Dawn at the river mouth — Ayesha's boat tied at the ghat, sail furled, the rudder's cloth-marked notches faded in the sun. Ayesha — the boatwoman, a white-blue sari tucked at the waist, a copper bangle bright with sweat, her signature: a seven-knotted cord at her wrist — after each patrol she unties one knot to remember that night's wind-direction; after seven nights, a fresh cord, old directions released. The smell of river mud, tar, wet jute rope; waves slapping, fishermen's calls, the creak of wood at the rudder's bend.</p>

<div class="dialogue">তুমি ঘাটে নামলে। আয়েশা খালা কামান মুছছিলেন। "রাশেদ ভাইয়ের অ্যালবাম দেখে এসেছ? জমানো ছবি?"
"হ্যাঁ খালা। এখন আমি জানি দাম বসাতে, ঘষতে, জমাতে।"
"ভালো।" তিনি কামানে হাত রাখলেন। "এবার আমার প্রশ্ন: নদীতে সব জায়গার 'দাম' বসানো যায়?"
তুমি ভাবলে। "মানে... জায়গা তো অগণন?"
"অগণন তো বটেই। কিন্তু বড় কথা — কামান ঘোরানো তো ডিগ্রিতে: ১০°, ২৩.৫°, ৪১.৭৫°... বলো, কতটা ঘুরব সুনির্দিষ্ট করে?" তিনি হাসলেন। "দামের খাতা লিখতে গেলে প্রতিটা ডিগ্রির ঘর লাগবে। বরং উল্টো পথ — খাতা ফেলে কামান ধরো।"</div>
<div class="dialogue en">You stepped onto the ghat. Ayesha was wiping the rudder. "Seen Rashed's albums? Kept pictures?"
"Yes. Now I can price, polish, store."
"Good." She laid a hand on the rudder. "My question: can you price every spot on a river?"
You thought. "There are... countless spots?"
"Countless, yes. But the bigger thing — the rudder turns in degrees: 10°, 23.5°, 41.75°... tell me exactly how much to turn?" She smiled. "Pricing that needs a ledger-row per degree. Take the reverse road — drop the ledger, hold the rudder."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> আয়েশা খালার প্রথম মৌসুমে এক রাতে ঝোড়ো হাওয়ায় ভালো ফল পেয়ে সে-দিকেই কামান পুরোদস্তুর ঘুরিয়ে দিয়েছিলেন — এক ঝটকায়। পরের রাত সে-দিকে বালির চর — নৌকা বসে গেল পর্যন্ত। এক রাতের ভালো ফল = সে-দিককে ভালোবাসার প্রমাণ নয়: ঢেউয়ে ঢেউয়ে ফল ওঠে-নামে, এক নমুনায় বিশ্বাস করে বড় লাফ মারা মানে দুর্ভাগ্যকে নিমন্ত্রণ। REINFORCE-এর মতোই — দিক ঠিক, কিন্তু কাঁপা হাতে জোরে টানলে নৌকা ডোবে।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৯৯২</div><div class="sc-label">উইলিয়ামস — REINFORCE (Machine Learning 8)</div></div>
<div class="stat-card"><div class="sc-num">∇J</div><div class="sc-label">E[∇log π(a|s)·G] — ভালো ফলের দিকে ঢাল</div></div>
<div class="stat-card"><div class="sc-num">২০১৫</div><div class="sc-label">TRPO — KL-সীমায় বিশ্বাস-অঞ্চল (শুলম্যান)</div></div>
<div class="stat-card"><div class="sc-num">২০১৭</div><div class="sc-label">PPO — clip(1−ε, 1+ε): সস্তা, সরল, শিল্পের রাজা</div></div>
</div>

<div class="dialogue">তিনি সুতোর গিঁটগুলো দেখালেন। "আমার রীত শোনো। প্রতি টহলের পর আমি জিজ্ঞেস করি — কোন দিকে গেলাম, কত মাছ পেলাম? যে দিকে ফল ভালো ছিল, কামান সে-দিকে এক টুক ঘোরাই। যে দিকে ফল খারাপ — সে-দিক থেকে এক টুক সরাই। প্রতি রাতে, প্রতি ঢেউয়ে — এক টুক এক টুক।" তিনি গিঁট খুললেন একটা। "গণিতের ভাষায় এই টুকটাই: ঢাল = ∇log π গুণ ফল। আর ফল বলতে আমি ব্যবহার করি আপেক্ষিক প্রশ্ন — এ রাত গড়ের চেয়ে কত ভালো/খারাপ? (advantage A, কারিম মিয়ার গড় বাদ দেওয়ার বুদ্ধি)। গড় বাদ দিলে কাঁপা অনেক কমে।" তারপর হঠাৎ গম্ভীর: "আর সাত রাতে সুতো বদলাই। কেন জানো? পুরনো নীতির প্রতি খুব ভালোবেসে গেলে নতুন জানা আর ঢোকে না। নতুন সুতো পুরনোর গিঁট-গণনার খুব কাছে — তবে রোজ সামান্য নতুন।"</div>
<div class="dialogue en">She showed the knotted cord. "My rule: after each patrol I ask — which direction, how much fish? Where the catch was good, I nudge the rudder a little that way; where poor, a little away. Every night, every wave — tiny nudges." She untied a knot. "In mathematics this nudge is: slope = ∇log π times return. And for return I use the relative question — how much better than my average? (advantage — Karim's subtract-the-mean wisdom; subtracting the mean calms the shaking.)" Then, grave: "And every seven nights, a new cord. Love the old rudder-position too much and new knowledge can't enter. The new cord stays close to the old knots — yet slightly new each day."</div>

<div class="code-block">নীতি-ঢালের গণিত — Policy Gradient:

মূল উপপাদ্য (Sutton et al. 2000; বীজ উইলিয়ামস ১৯৯২-এ):
  ∇J(θ) = E_π [ ∇log π_θ(a|s) · Ψ ]
  Ψ = ফলের মাপক: G_t (REINFORCE) থেকে
      advantage A = G − b(s) (কাঁপা-কমানো) পর্যন্ত

REINFORCE (উইলিয়ামস ১৯৯২):
  θ ← θ + α · ∇log π(a|s) · G_t
  "যে কাজ বড় ফল এনেছে — তার লগ-সম্ভাবনার ঢাল বাড়াও"
  দোষ: এক পথের দুর্ভাগ্যে পুরো দিক এলোমেলো (উচ্চ ভিন্নতা)
  প্রতিকার-পাত্র: baseline b(s) → A; পুরো পথের G নয়,
  সমালোচক-সাহায্য (পরের দরজা), batch-গড়

বিশ্বাস-অঞ্চলের ধারা:
  TRPO (শুলম্যান ২০১৫): প্রতি ধাপে KL(π_পুরনো ‖ π_নতুন) ≤ δ
    — নতুন নীতি পুরনোর 'আস্থার বৃত্তে' থাকবে; দ্বিতীয়-ক্রম অপ্টিমাইজেশন (ভারী)
  PPO (শুলম্যান ২০১৭): সম্ভাবনা-অনুপাত r = π_নতুন/π_পুরনো
    L = E[ min( r·A, clip(r, 1−ε, 1+ε)·A ) ]
    — r সীমার বাইরে গেলে লাভ-ঢাল শূন্য: বড় লাফ অর্থহীন
    প্রথম-ক্রম, সস্তা, টিউন-সহজ — আধুনিক RLHF-এর মেরুদণ্ড (দরজা ১১)

অবিচ্ছিন্ন ক্রিয়া ও নিয়তির মাপ:
  π_θ(a|s) = গাউসিয়ান(μ_θ(s), σ) → ডিগ্রি-ডিগ্রি কামান
  deterministic: μ_θ(s) সরাসরি (DDPG ঘরানা, ২০১৫)
সার-বাক্য: দাম জিজ্ঞেস নয় — দিক জিজ্ঞেস;
ঢেউয়ে ঢেউয়ে ছোট ঘূর্ণন, বিশ্বাস-বৃত্ত ছাড়া নয়</div>

<div class="dialogue">জোহরের সময় কাছের মসজিদে আজান পড়লো। আয়েশা খালা নামাজের জন্য দাঁড়ালেন, ফিরে এসে বললেন: "শুনলে খুতবা? জুমার দিন ইমাম মিম্বরে দাঁড়িয়ে সরাসরি বলেন — এ কাজ করো, ও কাজ ছাড়ো। দলীল-খাতার পাঠ নয়, একেবারে সোজা নির্দেশ; জনতা শোনে আর হাঁটা বদলায়। কুরআনে জুমার ডাক এলে কেনাবেচা ছেড়ে ছুটে যেতে বলা হয়েছে (৬২:৯) — দিক-বদল এক বাক্যে। আমার কামান-ঘোরানো তারই ছোট রূপ: আমি প্রতিটা সিদ্ধান্ত সরাসরি বলে দিই — এ দিক, এ পরিমাণ। খাতাওয়ালারা (দাম-মাপারা) পথ বর্ণনা করে; খুতবাওয়ালারা পথ <em>দেখায়</em>। দুই-ই লাগে; কিন্তু যেদিন সরাসরি বলা যায় — সেদিন ঘুরে বলা বৃথা। তোমার এজেন্ট যখন কামান ধরবে (নিউরাল নীতি), মনে রেখো — ওর খুতবা দাও, খাতা নয়।"</div>
<div class="dialogue en">At noon the call to prayer rose from the nearby mosque. Ayesha rose for salah and returned: "Did you hear the khutbah? On Fridays the imam stands and says directly — do this, leave that. Not a treatise — a straight instruction, and the crowd turns its walk. The Quran commands leaving trade and hastening at the Friday call (62:9) — a direction changed in one sentence. My rudder-turning is its small form: I state each decision outright — this direction, this much. The ledger-keepers (the pricers) describe the path; the khutbah-givers <em>point</em> it. Both matter; but when direct speech is possible, roundabout description is waste. When your agent takes the rudder (a neural policy), give it a khutbah, not a ledger."</div>

<div class="verse">
<div class="verse-arabic">يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ وَذَرُوا الْبَيْعَ</div>
<div class="verse-translation">হে মুমিনগণ! জুমার দিন যখন নামাজের জন্য ডাক দেওয়া হয়, তখন আল্লাহর স্মরণের দিকে ধাবিত হও এবং কেনাবেচা ছেড়ে দাও।</div>
<div class="verse-ref">— কুরআন ৬২:৯</div>
</div>

<div class="secret-box"><div class="label">দরজা ৯ — রহস্য</div><div class="text">🧭 খাতা নয়, কামান ধরো: ভালো ফলের দিকে ঢাল বাড়াও — এক ঝটকায় নয়, clip-ডানা পরে ছোট ছোট ঘূর্ণনে।<br><small>∇J=E[∇log π·A]; REINFORCE (উইলিয়ামস ১৯৯২) → TRPO ২০১৫ (KL) → PPO ২০১৭ (clip)। খুতবা: ৬২:৯।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>কেন policy gradient:</strong> অবিচ্ছিন্ন/উচ্চ-মাত্রার কাজ, সরল প্রয়োগ, stochastic নীতি — দাম-টেবিলের ধরাছোঁয়ার বাইরে।</li>
<li><strong>মূল লাইন হৃদয়ে:</strong> ∇J=E[∇log π·A] — 'ভালো ফল এনেছে, তবে বাড়াও সম্ভাবনা'; advantage-এ গড়-বাদ (কারিম মিয়ার বুদ্ধি) ভিন্নতা কমায়।</li>
<li><strong>REINFORCE-এর দুর্বলতা ব্যাখ্যা পারা:</strong> পুরো-পথ G-এর কোলাহল → baseline/critic প্রবেশ কেন — পরের দরজার সেতু।</li>
<li><strong>TRPO→PPO ধারা:</strong> KL-সীমা থেকে clip — 'নতুন পুরনোর কাছে থাকবে'; PPO-র loss লিখে দেখাও ও ব্যাখ্যা করো কোন পদে ঢাল মরে।</li>
<li><strong>ইতিহাস শুদ্ধ:</strong> REINFORCE উইলিয়ামস ১৯৯২; TRPO ও PPO উভয়ই শুলম্যান-দল — ২০১৫ ও ২০১৭।</li>
</ul>`
  }
});

// ── DOOR 10: দুই হাত মিলিয়ে (ACTOR-CRITIC) ──
doors.push({
  num:10, icon:"✂️", color:"#c084fc", name:"দুই হাত মিলিয়ে",
  subtitle:"Two Hands, One Cloth", tech:"Actor-Critic (Barto, Sutton & Anderson 1983; Klopf's 1970s roots), A2C/A3C (2016), DDPG (2015)",
  spirit:"শূরা — পরামর্শ; কাজের আগে মাপ, মাপের পর কাজ",
  secret:"এক হাতে কামান, এক হাতে খাতা: দর্জি সেলাই করে, কাটুরে মাপ দেয় — প্রতি কাঁচিতেই দুজনের আলাপ।",
  recall:{
    q:"মিতি-সজল জোড় একা-দর্জির চেয়ে কেন দ্রুত ও স্থির শেখে — আর actor-critic-এ দুই জনের চরিত্র ও কাজ কী?",
    qen:"Why do the Mita-Sojol pair learn faster and steadier than a lone tailor — and what are the two roles in actor-critic?",
    a:"একা-দর্জি (শুধু REINFORCE) পুরো জামা শেষ করে তবে জানে ভালো হলো কি না — ফলের কোলাহলে (high variance) দিক কাঁপে। জোড়ায় কাটুরে (critic) প্রতিটা কাঁচির পরেই বলে দেয় 'এ কাট গড়ের চেয়ে কত ভালো/খারাপ' (advantage A = δ-ভিত্তিক, TD-ত্রুটির ঘরানায়) — দর্জি (actor) সেই মাপে সূচ-দিক ঠিক করে, পুরো পথ শেষের অপেক্ষা নেই। একই ঘটনা দুইবার কাজে লাগে: actor শেখে 'কোন কাজ', critic শেখে 'কত দাম' — দুই প্রশ্ন, দুই নেটওয়ার্ক/হাত, এক কাপড়। Critic bootstrapping করে (দরজা ৫-এর ঘষা) — তাই এক-ধাপ-প্রতি-শেখা ও স্থিতি। ধারাবাহিকতা: বার্টো-সাটন-অ্যান্ডারসন ১৯৮৩-এ ধারণার জন্ম (আরও পুরনো শিকড় ক্লপ্‌ফের ১৯৭০-এর দশকের নিউরন-চিন্তা), আধুনিক রূপ A2C (এক আপডেট-দল), A3C (২০১৬ — অ্যাসিনক্রোনাস বহু শিক্ষানবিশ, অভিজ্ঞতা না-মিশিয়ে), আর অবিচ্ছিন্ন কাজে DDPG (২০১৫) — deterministic actor + critic, কামান-ডিগ্রির জগতে।",
    aen:"A lone tailor (pure REINFORCE) waits for the whole garment — noisy returns shake the direction. In the pair, the cutter (critic) rates every snip versus average (advantage, TD-style, bootstrapped); the tailor (actor) steers by that measure per step. Two questions — which action, how good — two hands, one cloth. Born Barto-Sutton-Anderson 1983 (Klopf's 1970s roots); modern: A2C/A3C 2016, DDPG 2015 for continuous action."
  },
  story:`
<p class="scene-setting">দশম দরজা। বাগান-বাড়ির উঠানে দর্জি-দম্পতির ছাউনি — দুই পাশে দুই টেবিল: বাঁয়ে সজলের কাঁচি-ফিতে-মাপের কাঠ, ডানে মিতির সেলাই-যন্ত্র-সুচ-সুতা; মাঝে বড় কাপড় বিছানো কাট-টেবিল। সজল — চোখে সোনার কাচের চশমা, গালে পুরু দাড়ি, আর তাঁর সিগনেচার: কাঁধে ঝোলানো ফিতে-জোড়া, যার এক মাথা সবসময় দাঁতে গোঁজা (মাপ নেওয়ার মাঝপ্যান্তে হাত দুটো কাপড়ে ব্যস্ত)। মিতি — মাথায় খোঁপায় গুঁজে রাখা ছোট্ট কাঁচি, আঙুলে সুতার ছলক (তাঁর সিগনেচার — কথা বলতে বলতে সূচ চলতেই থাকে, থামে না)। গন্ধ — নতুন কাপড়ের স্টার্চ, মেশিন-তেল, চুন-পানির ঝাঁঝ। শব্দ — কাঁচির ফটাফট, মেশিনের ঠকঠক, দুই জনের পরপর কথা।</p>
<p class="scene-setting en">The tenth door. In the homestead yard, the tailor-couple's awning — two tables: on the left Sojol's shears, tape, measuring board; on the right Mita's machine, needles, thread; between them the big cutting-table with cloth spread. Sojol — gold-rimmed glasses, thick beard, his signature: a measuring-tape over his shoulder, one end always clamped in his teeth (both hands busy mid-measure). Mita — a tiny scissors tucked in her bun, thread-calloused fingers (her signature: the needle never stops while she talks). The smell of new-cloth starch and machine oil; shears flashing, the machine's clatter, and the couple's running conversation.</p>

<div class="dialogue">তুমি ছাউনিতে উঠলে। মিতি মুখ না তুলে বললেন, "আয়েশা খালার ভাই-বোন? কামান ঘোরাতে শিখেছ?"
"হ্যাঁ ভাবি। ঢাল বাড়াই, clip পরি।"
সজল ফিতে-মাথা ছাড়লেন। "তাহলে এসো শেষ কারিগরি-পাঠে। একা নৌকা চালানো শেখ — এবার জোড়া। দেখো —" তিনি কাপড় দুই ভাগ করলেন। "আমি মাপি। ও সেলাই করে। কে শেখে, কী শেখে?"</div>
<div class="dialogue en">You climbed into the awning. Mita, without looking up: "Ayesha's siblings? Learned to turn the rudder?"
"Yes — raise the slope, wear the clip."
Sojol freed the tape from his teeth. "Then come to the final craft-lesson. You've learned sailing alone — now the pair. Look —" he split the cloth in two. "I measure. She sews. Who learns, and what?"</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> মিতি আগে একা কাজ করতেন — কাটতেনও, সেলাইও করতেনও। পুরো জামা সেরে তবে জানতেন ভালো হলো কি না — ততক্ষণে ভুল কাটে কাপড় গেছে, ফের শুরু। একার দোষটাও বড়: কোলাহল-মাখা ফলের টানে (ভালো কাপড় ভালো কাটকেও বাঁচায়, মন্দ কাপড় ভালো কাটকেও ডোবায়) হাত কাঁপত — আজ বড়, কাল শূন্য। জোড়া হওয়ার পর আলাদা হলো: ভালো-মন্দ কাপড়ের ঝামেলা সজলের মাপ-টেবিলে আটকে যায়, মিতির কাছে পৌঁছায় শুধু 'এ কাট গড়ের চেয়ে কত' — পরিষ্কার সংকেত।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৯৮৩</div><div class="sc-label">বার্টো-সাটন-অ্যান্ডারসন — জন্ম-কাগজ (IEEE SMC)</div></div>
<div class="stat-card"><div class="sc-num">১৯৭০-এরা</div><div class="sc-label">ক্লপ্‌ফের নিউরন-চিন্তা — ধারণার গোড়া</div></div>
<div class="stat-card"><div class="sc-num">A3C</div><div class="sc-label">২০১৬: অ্যাসিনক্রোনাস বহু শিক্ষানবিশ (মনিম-দল)</div></div>
<div class="stat-card"><div class="sc-num">DDPG</div><div class="sc-label">২০১৫: অবিচ্ছিন্ন কাজে actor+critic (লিলিক্র্যাপ-দল)</div></div>
</div>

<div class="dialogue">সজল প্রতিটা কাঁচির আগে ফিতে মেলেন, মুখে বলেন: "এ কাট গড়ের চেয়ে ভালো — দুই আঙুল আরও।" মিতির সূচ সেই কথায় সরে যায়। তুমি দেখলে — মিতি কাঁচির খবর পায় না, পায় <em>রায়</em>; সজল সুতা ছোঁয় না, ছোঁয় ফিতে। দুজনের হিসাব-খাতাও আলাদা: সজলের খাতায় কাপড়-ভেদে গড়-দাম (V, ভাবিদের ভাষায়), মিতির রোজকার বইয়ে কোন কাটে কোন ঢাল। সন্ধ্যায় দুই খাতা মেলানো হয় না — দুটো একসাথেই চলে, প্রতি মুহূর্তে। তুমি হঠাৎ চিনলে: এ তো আয়েশা খালার কামান + করিম মিয়ার খাতা — এক শরীরে! দরজার পুরো শিক্ষা এসে মিলল।</div>
<div class="dialogue en">Before every snip Sojol stretches the tape, saying: "This cut is better than average — two fingers more." Mita's needle shifts at those words. You saw — Mita doesn't receive the shears' news, she receives the <em>verdict</em>; Sojol never touches thread, only tape. Their ledgers differ too: his holds per-cloth average prices (V, in your aunts' tongue), hers holds slopes per cut. At dusk the ledgers aren't merged — both run together, every moment. Suddenly you recognized it: Ayesha's rudder + Karim's ledger — in one body! The doors' whole teaching clicked.</div>

<div class="code-block">দুই হাতের গণিত — Actor-Critic:

দুই চরিত্র, দুই প্রশ্ন:
  Actor π_θ(a|s)     — "কোন কাজ?"   (দর্জি, কামান)
  Critic V_w(s)      — "কত দাম?"    (কাটুরে, খাতা)

প্রতি ধাপে দুই হালনাগাদ (একসাথে, আলাদা লক্ষ্যে):
  δ = r + γ·V_w(s') − V_w(s)            ← critic-এর TD-ত্রুটি (দরজা ৫)
  w ← w + α_w · δ · ∇V_w(s)             ← খাতা ঘষা
  θ ← θ + α_θ · δ · ∇log π_θ(a|s)       ← সূচ-দিক: δ-ই advantage
  (G-এর কোলাহল নয় — এক-ধাপের পরিষ্কার মাপ)

পরিবার-শাখা:
  A2C — এক দল পরপর আপডেট (সিঙ্ক্রোনাস)
  A3C (মনিম-দল ২০১৬) — বহু শিক্ষানবিশ আলাদা পরিবেশে;
      অভিজ্ঞতা-মিশ্রণ ছাড়াই gradient জোগায় — replay ছাড়াই
      সম্পর্ক-ভাঙা (নুসরাত আপার triad-চিন্তার আরেক উত্তর)
  DDPG (লিলিক্র্যাপ-দল ২০১৫) — অবিচ্ছিন্ন কাজ:
      actor deterministic μ_θ(s), critic Q; কামান-ডিগ্রির জগতে
      নীল-খাতা+লাল-খাতার দুই-নেট DQN-বর্মও এসে যায়

ইতিহাসের স্তর:
  ক্লপ্‌ফের ১৯৭০-এর দশকের 'হিডোনিস্টিক নিউরন' চিন্তা
  → বার্টো-সাটন-অ্যান্ডারসন ১৯৮৩: actor-critic স্থাপত্য
  → আধুনিক সব বড় এজেন্টের কঙ্কাল (দরজা ১১-এ RLHF-ও এই হাড়ে দাঁড়ায়)

কেন জোড়া জেতে:
  একার পথ: পুরো-ফল শেষে, কোলাহলসহ (উচ্চ ভিন্নতা)
  জোড়ার পথ: প্রতি-ধাপ advantage, bootstrapped লক্ষ্য
  — দ্রুত, স্থির, অনলাইন; দুই প্রশ্ন দুই হাতে ভাগ</div>

<div class="dialogue">রাতের খাওয়ার পর দুজনে ছাউনির মাঝখানে বসে রইলেন। সজল বললেন: "বিয়ের আগে আমরা দুই গ্রামে দুই কারিগর ছিলাম। বাপ-দাদারা বলল — এক ছাউনি করো। শুরুতে ঝগড়াই লাগত: আমি বলতাম কাট খারাপ, ও বলত মাপ দেরিতে। তারপর নিয়ম হলো — ওর সূচ কথা শোনে আমার ফিতের, আমার ফিতে শোনে ওর সেলাইয়ের। পরস্পরকে ভুল ধরিয়ে দুজনে এক কাপড়।" মিতি সুতা কাটতে কাটতে বললেন: "কুরআনে নবীজিকেও বলা হয়েছে — 'তাদের সাথে পরামর্শ করো কাজে' (৩:১৫৯); আর মুমিনদের কাজ 'পরস্পর পরামর্শে' (৪২:৩৮)। শূরা মানে জোড়া-বুদ্ধি: একা দিক ভুল ধরে না, জোড়া ধরে। তোমার এজেন্টের দুই নেটও তেমনি — একটা করবে, একটা বলবে 'এতটা ভালো হয়েছে, এতটা নয়'। যে ব্যবস্থা নিজের কাজ নিজেই মাপতে পারে, সে-ই প্রতি মুহূর্তে শোধরায়।"</div>
<div class="dialogue en">After supper the two sat in the middle of the awning. Sojol: "Before marriage we were two craftsmen in two villages. The elders said — build one awning. At first we fought: I'd say the sewing was bad, she'd say the measure was late. Then the rule — her needle heeds my tape, my tape heeds her stitching. Correcting each other, one cloth." Mita, cutting thread: "The Quran told even the Prophet — 'consult them in the affair' (3:159); and the believers' work is 'by mutual consultation' (42:38). Shura means paired judgment: alone you miss your own wrong; paired, you catch it. Your agent's two nets are the same — one acts, one says 'this much good, not that much.' A system that can measure its own work corrects itself every moment."</div>

<div class="verse">
<div class="verse-arabic">وَشَاوِرْهُمْ فِي الْأَمْرِ</div>
<div class="verse-translation">এবং তাদের সাথে কাজে পরামর্শ করো।</div>
<div class="verse-ref">— কুরআন ৩:১৫৯</div>
</div>

<div class="secret-box"><div class="label">দরজা ১০ — রহস্য</div><div class="text">✂️ এক হাতে কামান, এক হাতে খাতা: দর্জি কাজ করে, কাটুরে প্রতি কাঁচিতে রায় দেয় — দুজনে এক কাপড়ে।<br><small>δ-ই advantage: θ←θ+α·δ·∇log π একই সাথে w←w+α·δ·∇V। ১৯৮৩-এর স্থাপত্য, ২০১৫-১৬-র A3C/DDPG রূপ। শূরা: ৩:১৫৯।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>দুই প্রশ্ন-বিভাজন মুখস্থ নয় — শনাক্ত করা:</strong> যেকোনো এজেন্ট-বর্ণনা পড়ে বলতে পারবে কোথায় actor, কোথায় critic, কার লক্ষ্য কী।</li>
<li><strong>δ-এর দ্বৈত জীবন:</strong> একই TD-ত্রুটি critic-কে ঘষায় (w) আর actor-কে দিক দেয় (θ) — দরজা ৫-এর সূত্র এখানে দুই হাতে বিভক্ত।</li>
<li><strong>ভিন্নতা-প্রতিকারের সিঁড়ি:</strong> REINFORCE-এর কোলাহল → baseline → critic (প্রতি-ধাপ advantage) — কোন ধাপে কত লাভ, ব্যাখ্যা করতে পারো।</li>
<li><strong>পরিবার-ম্যাপ:</strong> A2C/A3C (২০১৬, অ্যাসিনক্রোনাস), DDPG (২০১৫, deterministic+দুই-নেট বর্ম) — কোনটা কোন সমস্যায়।</li>
<li><strong>ইতিহাস শুদ্ধ:</strong> ১৯৮৩ বার্টো-সাটন-অ্যান্ডারসন; শিকড় ক্লপ্‌ফের ১৯৭০-এর দশকে — ৪০ বছরের ধারা এক লাইনে বলা যায় কি?</li>
</ul>`
  }
});
