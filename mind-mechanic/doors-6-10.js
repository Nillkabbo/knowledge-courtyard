// ════════════════════════════════════════
// Book 32 · The Brain Mechanic's Codex
// Doors 6-10 · Phase 2: State Regulation
// ════════════════════════════════════════

doors.push({
  num: 6,
  icon: "☀️",
  color: "#fbbf24",
  name: "আলো ও শীত",
  subtitle: "Light & Cold",
  tech: "সারকেডিয়ান বায়োলজি · Circadian Biology & Cold Exposure",
  spirit: "ফজর — প্রথম আলো, মাস্টার ক্লক সেট করে",
  secret: "তোমার শরীরে একটা ঘড়ি আছে যা আলো দিয়ে চলে। সকালে আলো দেখলে ঘড়ি সঠিক সময়ে চলে — সারাদিন এনার্জি, রাতে ঘুম। আর ঠান্ডা পানি ডোপামিন বাড়ায় — কফির মতো, কিন্তু কফির চেয়ে বেশি সময় ধরে।",
  recall: {
    q: "সকালের আলো কেন গুরুত্বপূর্ণ এবং কত মিনিট দরকার?",
    qen: "Why is morning light important and how many minutes do you need?",
    a: "চোখের রেটিনায় ~১-২% কোষ মেলানোপসিন ধারণ করে (Hattar et al., ২০০২, Science) — এরা সরাসরি মস্তিষ্কের মাস্টার ক্লক (SCN) এর সাথে যুক্ত। সকালের নীল আলো এই কোষগুলোকে সক্রিয় করে — কর্টিসল পিক হয়, মেলাটোনিন ১৪-১৬ ঘণ্টা পর রিলিজ হয়। দরকার ৫-১০ মিনিট বাইরের আলো (মেঘলা দিনে দ্বিগুণ)। ভেতরের আলো (~৩০০ lux) বাইরের আলোর (~১০,০০০ lux) ধারেও নেই।",
    aen: "~1-2% of retinal cells contain melanopsin (Hattar et al., 2002) — they connect directly to the master clock (SCN). Morning blue light activates them — cortisol peaks, melatonin releases 14-16h later. Need 5-10 min outdoor light (double on cloudy days). Indoor light (~300 lux) is negligible vs outdoor (~10,000 lux)."
  },
  story: `<p class="scene-setting">তুমি সকালে উঠে ফোন হাতে নাও। পর্দা বন্ধ। ঘরে আলো নেই — শুধু স্ক্রিনের নীল আলো। তুমি ভাবো, এই আলোতেই হবে। কিন্তু দুপুরে তোমার চোখ ভারী, মাথা ঘুরছে, কিছুতেই মন বসছে না। কফি খাও — একটু কাজ হয়, তারপর আবার নিচে। তুমি ভাবো তোমার ইচ্ছাশক্তি কম। কিন্তু সমস্যা ইচ্ছাশক্তিতে নয় — সমস্যা তোমার ঘড়িতে। তোমার মস্তিষ্কের ঘড়িটা এখনো ঘুমাচ্ছে।</p>
  <p class="scene-setting en">You wake up and grab your phone. Curtains closed. No real light — just screen glow. By afternoon you are sluggish, unfocused. You blame willpower. But the problem is your clock — it is still asleep.</p>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুল ধারণা:</strong> 'আমি যেকোনো আলোতে সকাল শুরু করতে পারি।' <strong>সত্য:</strong> তোমার চোখের ভেতরে বিশেষ কোষ আছে যারা শুধু <em>বাইরের</em> সকালের আলোতে জেগে ওঠে। ঘরের আলো, ফোনের আলো — এরা এসবে সাড়া দেয় না।</div></div>
  <p class="scene-setting">এখন শোনো <strong>কারিগর ইব্রাহিমের</strong> গল্প। ইব্রাহিম একজন কৃষক — তার জমিতে গম হয়। সে প্রতিদিন ফজরের আজানের সাথে সাথে উঠে যায়। তার ছেলে তানভীর শহরে পড়ে — দেরি করে ঘুমায়, দুপুরে ওঠে, সারাদিন ক্লান্ত থাকে।</p>
  <div class="dialogue">
    <p><strong>তানভীর (দুপুরে উঠে, কালশিটে চোখে):</strong> আব্বা, তুমি কীভাবে সারাদিন কাজ করো? আমি একটা ঘণ্টা পড়তে গেলেই মাথা ঘোরে।</p>
    <p><strong>ইব্রাহিম:</strong> কারণ তুই সকালটা মিস করিস।</p>
    <p><strong>তানভীর:</strong> মানে? আমি তো সকালে ঘুমাই।</p>
    <p><strong>ইব্রাহিম:</strong> ঠিক সেটাই। গমের বীজ যদি সকালের রোদ না পায়, সে অঙ্কুরিত হয় না — পচে যায়। তোর মস্তিষ্কও গমের মতো। সকালের আলো না পেলে সে জেগে ওঠে না — সারাদিন ঘুমন্ত থাকে।</p>
    <p><strong>তানভীর:</strong> কিন্তু আমি তো ঘরের আলোতে উঠি।</p>
    <p><strong>ইব্রাহিম:</strong> ঘরের আলো মোমবাতির মতো। বাইরের সকালের সূর্য হলো আগুন। মোমবাতি দিয়ে গম তো অঙ্কুরিত হবে না। তোকে বাইরে যেতে হবে — পাঁচ মিনিট। শুধু পাঁচ মিনিট।</p>
  </div>
  <p class="scene-setting">ইব্রাহিম যা বললো, সেটা বিজ্ঞান একদম শব্দে শব্দে নিশ্চিত করেছে। তোমার চোখের ভেতরে একটা বিশেষ সেন্সর আছে — সেটাকে বলে মেলানোপসিন।</p>
  <div class="callout tip"><span class="co-icon">📋</span><div>
    <h4>🔧 সিস্টেম — The Light & Cold Protocol (৩টি সুইচ)</h4>
    <p><strong>সুইচ ১ — সকালের আলো (Morning Light):</strong> ঘুম থেকে ওঠার ৩০-৬০ মিনিটের মধ্যে বাইরে যাও। ৫-১০ মিনিট সূর্যের দিকে তাকাও (সরাসরি সূর্যে নয় — আকাশের দিকে)।</p>
    <table class="kv-table">
      <tr><th>অবস্থা</th><th>সময়</th></tr>
      <tr><td class="hl">পরিষ্কার আকাশ</td><td class="hl">৫ মিনিট</td></tr>
      <tr><td class="hl">মেঘলা দিন</td><td class="hl">১০-২০ মিনিট</td></tr>
      <tr><td class="hl">ঘরের ভেতর (জানালা দিয়ে)</td><td class="hl">৩০-৬০ মিনিট (কম কার্যকর)</td></tr>
    </table>
    <p><strong>কেন বাইরে?</strong> বাইরের আলো মেঘলা দিনেও ~১০,০০০ lux। ঘরের আলো ~৩০০ lux। জানালার কাঁচ নীল আলোর অর্ধেক আটকে দেয়।</p>
    <p><strong>সুইচ ২ — ঠান্ডা পানি (Cold Exposure):</strong> গোসলের শেষে ৩০-৬০ সেকেন্ড ঠান্ডা পানি (ঠান্ডা = অস্বস্তি কিন্তু সহ্য করা যায়)।</p>
    <p>ঠান্ডা পানিতে ডোপামিন বেসলাইন ~২৫০% বাড়ে, নরঅ্যাড্রেনালিন ~৫৩০% বাড়ে — এবং এই বৃদ্ধি ঘণ্টার পর ঘণ্টা স্থায়ী হয় (Srámek et al., ২০০০)। কফির স্পাইক ৩০ মিনিটে শেষ — ঠান্ডা পানির এনার্জি ঘণ্টায় ঘণ্টায়।</p>
    <p><strong>সুইচ ৩ — রাতে অন্ধকার (Evening Darkness):</strong> সূর্যাস্তের পর উজ্জ্বল আলো এড়াও। বিশেষ করে নীল আলো (ফোন, টিভি, ল্যাপটপ)। এগুলো মেলাটোনিন চুরি করে — ঘুম আসে না।</p>
    <p>সমাধান: সন্ধ্যায় ডিম লাইট ব্যবহার করো, ফোনের নাইট মোড চালু করো (এমনকি দিনেও)। ঘুমানোর ১ ঘণ্টা আগে কোনো স্ক্রিন নয়।</p>
  </div></div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>কেন কাজ করে — The Science:</strong> <strong>Samer Hattar</strong> (Johns Hopkins, এখন NIH) ও সহযোগীরা ২০০২ সালে <em>Science</em>-এ আবিষ্কার করেছেন — রেটিনার মাত্র ~১-২% গ্যাংলিয়ন কোষ <strong>মেলানোপসিন</strong> নামক একটা প্রোটিন ধারণ করে। এরা সাধারণ দৃষ্টির অংশ নয় — তারা সরাসরি মস্তিষ্কের <strong>সুপ্রাকায়াসম্যাটিক নিউক্লিয়াস (SCN)</strong> এর সাথে যুক্ত, যেটা হলো শরীরের মাস্টার ক্লক। মেলানোপসিন নীল আলোর (~৪৮০ nm) প্রতি সবচেয়ে সংবেদনশীল — তাই সকালের সূর্যের নীল আলো এই কোষগুলোকে ট্রিগার করে। <strong>Srámek et al.</strong> (২০০০, <em>European J Applied Physiology</em>) ১৪°C পানিতে ১ ঘণ্টা ডুবে থেকে দেখিয়েছেন — <strong>ডোপামিন ২৫০%, নরঅ্যাড্রেনালিন ৫৩০%</strong> বেড়েছে। <strong>Kox et al.</strong> (২০১৪, <em>PNAS</em>, Radboud) দেখিয়েছেন উইম হফ মেথডে প্রশিক্ষিত ব্যক্তিরা স্বেচ্ছায় তাদের অটোনোমিক স্নায়ুতন্ত্র ও ইমিউন সিস্টেম নিয়ন্ত্রণ করতে পারে।</div></div>
  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">~১০,০০০ lux</div><div class="sc-label">বাইরের আলো (মেঘলা দিনেও)<br>vs ঘরের ~৩০০ lux</div></div></div>
    <div class="stat-card"><div class="sc-num">২৫০%</div><div class="sc-label">ডোপামিন বৃদ্ধি ঠান্ডা পানিতে<br>Srámek et al. (2000)</div></div>
  
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নিরাপত্তা — Safety:</strong> উইম হফ শ্বাস-ব্যায়াম পানির কাছে বা পানিতে করবে না — hyperventilation-এর পর শ্বাস আটকালে রক্তে অক্সিজেন কমে হঠাৎ অজ্ঞান হয়ে যাওয়ার (shallow water blackout) ঝুঁকি থাকে, আর তা থেকে একাধিক ডুবে-মৃত্যুর ঘটনা নথিভুক্ত হয়েছে। হার্টের সমস্যা থাকলে ঠান্ডা পানি এড়াও। গর্ভবতী বা উচ্চ রক্তচাপ থাকলে চিকিৎসকের পরামর্শ নাও। ঠান্ডা পানি শুরু করো ধীরে — প্রথমে ১৫ সেকেন্ড, তারপর বাড়াও।</div></div>
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল উপায়</div>সকালে ফোন চেক করো, পর্দা বন্ধ। রাতে উজ্জ্বল আলো, ল্যাপটপ দেখো ঘুমানোর আগে। কফি দিয়ে এনার্জি চাও।</div></div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক উপায়</div>সকালে বাইরে যাও — ৫ মিনিট আকাশের দিকে তাকাও। গোসলের শেষে ৩০ সেকেন্ড ঠান্ডা পানি। রাতে ডিম লাইট, কোনো স্ক্রিন নয়।</div>
  
  <div class="callout info"><span class="co-icon">🧠</span><div><strong>পবিত্র সমতুল্য — Sacred Analogue:</strong> ফজরের নামাজ কী? একটা সারকেডিয়ান অ্যাংকর। সূর্য ওঠার আগে মানুষ জেগে ওঠে, পরিষ্কার করে, বাইরে যায় মসজিদে — সকালের আলো গায়ে লাগে। নবী ﷺ বলেছেন: <em>'যে ব্যক্তি ফজরের নামাজ জামাতের সাথে আদায় করে, সে আল্লাহর জিম্মায় থাকে।'</em> — মুসলিম। এই জিম্মায় থাকা শুধু আধ্যাত্মিক নয় — এটা biological। যে ব্যক্তি প্রতিদিন ফজরে বাইরে যায়, তার মাস্টার ক্লক সঠিকভাবে সেট হয়, মেলাটোনিন সঠিক সময়ে আসে, ঘুম ভালো হয়, এনার্জি থাকে। আল্লাহ আকাশ ও পৃথিবীর আলো (নূর) — এই আলো শুধু আধ্যাত্মিক নয়, physical-ও।</div></div>
  <div class="verse">"তিনি যিনি তোমাদের জন্য রাতকে করেছেন যেন তোমরা তাতে বিশ্রাম নাও, এবং দিনকে দেখার জন্য উজ্জ্বল করেছেন।" — কুরআন ১০:৬৭</div>
  <div class="verse en">"He it is Who made for you the night that you may rest in it, and the day to make things visible." — Quran 10:67</div>
  <div class="checklist">
    <li>আগামীকাল সকালে উঠেই বাইরে যাও — ৫ মিনিট</li>
    <li>আকাশের দিকে তাকাও (সরাসরি সূর্যে নয়)</li>
    <li>গোসলের শেষে ৩০ সেকেন্ড ঠান্ডা পানি</li>
    <li>সন্ধ্যায় ফোনের নাইট মোড চালু করো</li>
    <li>ঘুমানোর ১ ঘণ্টা আগে স্ক্রিন বন্ধ</li>
    <li>যদি ফজরের নামাজ পড়ো — মসজিদে যাও, সেটাই আলো</li>
  </div>
  <div class="diagram">
    <div class="diag-title">সারকেডিয়ান ঘড়ি · Circadian Master Clock</div>
    <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowD6" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#c4b5fd"/></marker>
      </defs>
      <line class="axis" x1="50" y1="190" x2="520" y2="190"/>
      <line class="axis" x1="50" y1="40" x2="50" y2="190"/>
      <text class="axis-label" x="285" y="212" text-anchor="middle">দিনের সময়</text>
      <text class="axis-label" x="32" y="115" text-anchor="middle" transform="rotate(-90,32,115)">হরমোন</text>
      <path d="M 70 170 Q 130 50 200 70 Q 280 180 380 90 Q 460 60 510 170" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
      <text class="lbl-sm" x="130" y="44" text-anchor="middle" style="fill:#fbbf24;font-weight:700">কর্টিসল পিক</text>
      <text class="lbl-sm" x="130" y="56" text-anchor="middle" style="fill:#fbbf24">সকালের আলো</text>
      <circle class="node-hot" cx="130" cy="58" r="4"/>
      <text class="lbl-sm" x="380" y="78" text-anchor="middle" style="fill:#5b9eff">মেলাটোনিন রিলিজ</text>
      <circle class="node-moon" cx="380" cy="90" r="4"/>
      <text class="lbl-sm" x="130" y="130" text-anchor="middle">এনার্জি শিখর</text>
      <rect class="cell-hot" x="20" y="45" width="120" height="50" rx="8"/>
      <text class="lbl-hot" x="80" y="68" text-anchor="middle">☀️ সকাল</text>
      <text class="lbl-sm" x="80" y="84" text-anchor="middle">~১০,০০০ lux · ৫ মিনিট</text>
      <rect class="cell-cyan" x="220" y="130" width="120" height="50" rx="8"/>
      <text class="lbl-cyan" x="280" y="153" text-anchor="middle">🚿 ঠান্ডা পানি</text>
      <text class="lbl-sm" x="280" y="169" text-anchor="middle">ডোপামিন ২৫০% ↑</text>
      <rect class="cell-moon" x="400" y="130" width="120" height="50" rx="8"/>
      <text class="lbl-sm" x="460" y="153" text-anchor="middle" style="fill:#5b9eff;font-weight:700">🌙 সন্ধ্যা</text>
      <text class="lbl-sm" x="460" y="169" text-anchor="middle">ডিম আলো · স্ক্রিন বন্ধ</text>
    </svg>
    <div class="diag-cap">সকালের আলো ঘড়ি সেট করে; রাতের অন্ধকার ঘুম ডাকে।</div>
  </div>
  
  <div class="secret-box">
    <div class="secret-icon">☀️</div>
    <div class="secret-line">সকালের আলো ঘড়ি সেট করে, ঠান্ডা পানি ব্যাটারি চার্জ করে।</div>
    <div class="secret-why">কারণ মেলানোপসিন কোষ শুধু বাইরের নীল আলোতে জেগে ওঠে। আর ঠান্ডা পানি ডোপামিন ও নরঅ্যাড্রেনালিন ঘণ্টার পর ঘণ্টা বাড়িয়ে রাখে। কোনো খরচ নেই — শুধু বাইরে যাও আর ঠান্ডা পানি সহ্য করো।</div>
  
</div>`,
  senior: {
    title: "আগামীকাল সকালে করো — Tomorrow Morning",
    body: "<p>আগামীকাল সকালে এই ৩টি করো:<br><strong>১.</strong> ঘুম থেকে উঠেই বাইরে যাও — ৫ মিনিট আকাশের দিকে তাকাও।<br><strong>২.</strong> গোসলের শেষে ৩০ সেকেন্ড ঠান্ডা পানি নাও (যদি সহ্য হয়)।<br><strong>৩.</strong> সন্ধ্যায় ফোনের নাইট মোড চালু করো।<br><br>এক সপ্তাহ এই তিনটা করো। তুমি নিজেই পার্থক্য টের পাবে — দুপুরের ক্লান্তি কমবে, রাতের ঘুম ভালো হবে। এটা জাদু নয় — এটা তোমার মাস্টার ক্লক সঠিকভাবে চলছে।</p>"
  }
});

// ═══ DOOR 7 ═══
doors.push({
  num: 7,
  icon: "🛡️",
  color: "#22d3ee",
  name: "ফোকাসের ঢাল",
  subtitle: "The Focus Shield",
  tech: "একাগ্রতা · Attention as a Trainable Muscle",
  spirit: "খুশু — উপস্থিত চিত্ত, অবিভক্ত মনোযোগ",
  secret: "ফোকাস একটা পেশী — যত ব্যবহার করো তত শক্ত হয়, না করলে শিথিল হয়। তুমি যখন মন সরে যাওয়া ধরো আর ফিরিয়ে আনো — সেই ফিরিয়ে আনাটাই পেশীর ব্যায়াম। এক কাজ করো। মন গেলে ফিরিয়ে আনো। আবার গেলে আবার ফিরিয়ে আনো।",
  recall: {
    q: "ফোকাস কেন 'পেশী' বলা হয় এবং এটা কীভাবে শক্ত করা যায়?",
    qen: "Why is focus called a 'muscle' and how do you strengthen it?",
    a: "কারণ ফোকাস সীমিত সম্পদ — ক্লান্ত হয়, তবে প্রশিক্ষণে শক্ত হয়। Amishi Jha (২০১০, Emotion) মার্কিন সেনাদের উপর গবেষণা করে দেখিয়েছেন — ৮ সপ্তাহ মাইন্ডফুলনেস প্রশিক্ষণে ওয়ার্কিং মেমোরি সংরক্ষিত হয়েছে যা অপ্রশিক্ষিতদের ক্ষয়প্রাপ্ত হয়েছিল। মন সরে গেলে ধরো, ফিরিয়ে আনো — এই পুনরুদ্ধারই পেশী গড়ে।",
    aen: "Because focus is limited — it fatigues, but strengthens with training. Amishi Jha (2010) showed 8 weeks of mindfulness training preserved working memory in soldiers under stress. Noticing distraction and returning IS the exercise."
  },
  story: `<p class="scene-setting">তুমি পড়তে বসেছো। পাঁচ মিনিট পড়লে। মনে হলো — ফোনটা দেখি। একটু পড়লে। মনে হলো — কাল পরীক্ষা, ভয় হচ্ছে। আবার পড়তে গেলে। মনে হলো — কি খাবো রাতে? আরেকটু পড়লে। মনে হলো — বন্ধু কী করছে? তুমি আধা ঘণ্টা ধরে একই পৃষ্ঠা পড়ছো। তুমি ভাবো — 'আমার ফোকাস নেই।' কিন্তু ফোকাস কোনো জিনিস নয় যে তোমার কাছে থাকবে বা থাকবে না। ফোকাস হলো পেশী — আর তুমি এই পেশী কখনো ব্যবহার করো নি।</p>
  <p class="scene-setting en">You sit to study. Five minutes in — check the phone. A bit more — worry about the exam. More — what's for dinner? More — what's my friend doing? Half an hour, same page. You think 'I have no focus.' But focus is not a thing you have. It is a muscle you have never used.</p>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>বড় ভুল:</strong> 'আমি একসাথে অনেক কিছু করতে পারি।' মস্তিষ্ক <em>কখনো</em> একসাথে দুটো জটিল কাজ করতে পারে না। যাকে তুমি 'মাল্টিটাস্কিং' বলো, সেটা আসলে <strong>টাস্ক-সুইচিং</strong> — এক কাজ থেকে অন্য কাজে দ্রুত লাফ। প্রতিটা লাফে সময় যায়, এনার্জি যায়, ভুল বাড়ে।</div></div>
  <p class="scene-setting">এখন শোনো <strong>কারিগর রিদওয়ানের</strong> গল্প। রিদওয়ান একজন কাঠখোদাইকারী। সে সবার চেয়ে সূক্ষ্ম নকশা খোদাই করে। তার বাঁ হাতের আঙুলগুলো এত স্থির যে মনে হয় পাথরের তৈরি। কিন্তু সে শুরুতে এমন ছিল না।</p>
  <div class="dialogue">
    <p><strong>শাগরেদ:</strong> ওস্তাদ, আপনার হাত কাঁপে না কেন? আমার তো কাঁপে। একটু খোদাই করি, তারপর অন্য কাজে মন চলে যায়।</p>
    <p><strong>রিদওয়ান:</strong> আমার হাত কাঁপতো। আমি এক সপ্তাহ শুধু একটা রেখা খোদাই করতাম। প্রতিদিন। মন সরে গেলে আবার শুরু। আবার মন গেলে আবার শুরু। শতবার।</p>
    <p><strong>শাগরেদ:</strong> শুধু একটা রেখা?</p>
    <p><strong>রিদওয়ান:</strong> একটা রেখা সোজা করা সহজ মনে হয়, কিন্তু কঠিন। কারণ মন সরে যায়। আমি যখন রেখা খোদাই করতাম আর মন সরে গেলে — আমি থামতাম না। ধরতাম যে মন গেছে, ফিরিয়ে আনতাম, আবার খোদাই করতাম। সেই ফিরিয়ে আনাই হলো পেশী গড়া।</p>
    <p><strong>শাগরেদ:</strong> তারপর?</p>
    <p><strong>রিদওয়ান:</strong> এক সপ্তাহ পর রেখা সোজা হলো। মন কম সরে গেল। আমি রেখার সাথে একটা বৃত্ত যোগ করলাম। আবার মন সরে গেলে ফিরিয়ে আনলাম। এক মাসে নকশা এলো। তবে সেটা নকশা দক্ষতা থেকে আসেনি — সেটা এসেছে <em>ফিরিয়ে আনার</em> পেশী থেকে।</p>
  </div>
  <p class="scene-setting">রিদওয়ান যা শিখালো, সেটাই ফোকাসের সত্য। ফোকাস মানে 'মন কখনো সরে যাবে না' — নয়। ফোকাস মানে 'মন সরে গেলে ধরবে আর ফিরিয়ে আনবে।' যত বার ফিরিয়ে আনবে, তত বার পেশী শক্ত হবে।</p>
  <div class="callout tip"><span class="co-icon">📋</span><div>
    <h4>🔧 সিস্টেম — The Focus Shield (৩টি স্তর)</h4>
    <p><strong>স্তর ১ — এক কাজ (Single-Task):</strong> এক সময়ে একটাই কাজ করো। ফোন অন্য ঘরে। ট্যাব বন্ধ। শুধু একটা জিনিস খোলা।</p>
    <table class="kv-table">
      <tr><th>মাল্টিটাস্কিং (ভুল)</th><th>সিঙ্গল-টাস্কিং (সঠিক)</th></tr>
      <tr><td class="hl">৫টা ট্যাব + ফোন + মিউজিক</td><td class="hl">১টা ট্যাব, ফোন অন্য ঘরে</td></tr>
      <tr><td class="hl">পড়ার সময় মেসেজ রিপ্লাই</td><td class="hl">২৫ মিনিট পড়ো, তারপর ৫ মিনিট মেসেজ</td></tr>
      <tr><td class="hl">মিটিংয়ে কাজ করা</td><td class="hl">মিটিংয়ে শুধু মিটিং</td></tr>
    </table>
    <p><strong>স্তর ২ — মন ফেরানোর ব্যায়াম (Attention Rep):</strong> একটা বিন্দুতে তাকাও — দেয়ালে একটা দাগ, স্ক্রিনে একটা শব্দ। ৩০-৬০ সেকেন্ড শুধু সেটাতে। মন সরে গেলে ধরো — 'আহা, মন গেছে।' বিনা রাগে, বিনা দোষে, ফিরিয়ে আনো। একটা rep সম্পন্ন।</p>
    <p>প্রতিদিন ৫-১০ মিনিট এই ব্যায়াম করো। এটা হলো ফোকাসের পুশআপ।</p>
    <p><strong>স্তর ৩ — আল্ট্রাডিয়ান সাইকেল (৯০-মিনিট ব্লক):</strong> মস্তিষ্ক ~৯০ মিনিট চক্রে চলে (Kleitman, ১৯৬৯)। প্রথম ~৪৫ মিনিট সবচেয়ে ফোকাসড। তারপর ক্ষয় শুরু।</p>
    <p>সূত্র: ৯০ মিনিট ডিপ ওয়ার্ক → ১৫-২০ মিনিট বিরতি (হাঁটা, পানি, কোনো স্ক্রিন নয়) → আবার ৯০ মিনিট। দিনে ২-৩টা এমন ব্লক করো — এটাই যথেষ্ট।</p>
  </div></div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>কেন কাজ করে — The Science:</strong> <strong>Amishi Jha</strong> (University of Miami) ও সহযোগীরা ২০১০ সালে <em>Emotion</em>-এ প্রকাশ করেছেন — মার্কিন সেনাদের উপর গবেষণা করে দেখিয়েছেন যে ৮ সপ্তাহের <strong>Mindfulness Training (MT)</strong> চাপের সময় ওয়ার্কিং মেমোরির ক্ষয় রোধ করেছে। অপ্রশিক্ষিত সেনাদের মেমোরি ক্ষয়প্রাপ্ত হয়েছিল; প্রশিক্ষিতদের সংরক্ষিত বা উন্নত হয়েছিল। বেশি প্র্যাকটিস = বেশি উন্নতি (dose-response)। Killingsworth & Gilbert (২০১০, <em>Science</em>) দেখিয়েছেন মানুষের মন <strong>জাগ্রত সময়ের ~৪৭%</strong> ভবিষ্যৎ বা অতীতে ঘুরে বেড়ায় — এটাই দুঃখের প্রধান কারণ। <strong>Cal Newport</strong> (Georgetown, ২০১৬, <em>Deep Work</em>) একে বলেন <em>'ডিপ ওয়ার্ক'</em> — বিকর্ষণমুক্ত অবস্থায় জ্ঞানীয় সক্ষমতার সীমায় পৌঁছানো। তাঁর মতে চার ধরনের সময়সূচী আছে: মঠবাসী (সব বাদ), দ্বিমুখী (ঋতু অনুযায়ী), ছন্দময় (প্রতিদিন একই ব্লক), সাংবাদিক (যখন যখন সময় পাও)। সবচেয়ে কার্যকর নিয়মিতদের জন্য — <strong>ছন্দময় (rhythmic)</strong>।</div></div>
  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">~৪৭%</div><div class="sc-label">জাগ্রত সময়ে মন পথভ্রষ্ট<br>Killingsworth & Gilbert (2010)</div></div></div>
    <div class="stat-card"><div class="sc-num">৯০ মিনিট</div><div class="sc-label">আল্ট্রাডিয়ান চক্র — প্রাকৃতিক ফোকাস ব্লক<br>Kleitman (1969)</div></div>
  
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল উপায়</div>৫টা ট্যাব খোলা। পড়ার সময় ফোন হাতে। মন গেলে রেগে হো। 'আমি পারছি না!' বলে ছেড়ে দাও।</div></div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক উপায়</div>একটা ট্যাব, ফোন অন্য ঘরে। মন গেলে ধরো — 'মন গেছে।' বিনা রাগে ফিরিয়ে আনো। প্রতিবার ফিরিয়ে আনা = একটা পুশআপ।</div>
  
  <div class="callout info"><span class="co-icon">🧠</span><div><strong>পবিত্র সমতুল্য — Sacred Analogue:</strong> নামাজে দাঁড়িয়ে তুমি যখন 'আল্লাহু আকবর' বলো — সব কিছু পেছনে ফেলে দাও। শুধু একটা কিবলা, একটা কাবা, একটা মহা উপস্থিতি। এটাই খুশু — অবিভক্ত উপস্থিতি। নবী ﷺ বলেছেন: <em>'আল্লাহকে এমনভাবে ইবাদত করো যেন তুমি তাঁকে দেখছো — যদি তাঁকে দেখো না, তিনি তোমাকে দেখছেন।'</em> — মুসলিম। কিন্তু মন সরে যায় — শয়তান বলে 'পরে কি খাবে?' তুমি ধরো — 'মন গেছে।' ফিরিয়ে আনো। এক রাকাআতে কতবার? শতবার? প্রতিটা ফিরিয়ে আনা একটা আমল। নামাজ শেষ হলে তুমি শুধু আধ্যাত্মিক পুণ্য অর্জন করো না — তুমি ফোকাসের পেশী গড়ো। এজন্য নামাজের পরে মন শান্ত থাকে, কাজে মন বসে। কারণ তুমি মস্তিষ্কের পেশী ব্যায়াম করেছো।</div></div>
  <div class="verse">"যারা তাদের নামাজে খুশু করে, তারাই সফলকাম্য।" — কুরআন ২৩:১-২</div>
  <div class="verse en">"Certainly will the believers have succeeded — they who are humbly submissive in their prayers." — Quran 23:1-2</div>
  <div class="checklist">
    <li>আগামীকাল একটা কাজ বেছে নাও — শুধু একটা</li>
    <li>ফোন অন্য ঘরে রাখো কাজের সময়</li>
    <li>৯০ মিনিট কাজ → ১৫ মিনিট বিরতি (কোনো স্ক্রিন নয়)</li>
    <li>প্রতিদিন ৫ মিনিট 'বিন্দু ব্যায়াম' করো — একটা দাগে তাকাও, মন গেলে ফিরিয়ে আনো</li>
    <li>মন সরে গেলে রাগ করবে না — ধরবে, ফিরিয়ে আনবে</li>
    <li>নামাজে খুশু অনুশীলন করো — সেটাই ফোকাস প্রশিক্ষণ</li>
  </div>
  <div class="diagram">
    <div class="diag-title">ফোকাস পেশী · The 90-Minute Ultradian Block</div>
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowD7" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3dd6c4"/></marker>
      </defs>
      <line class="axis" x1="60" y1="160" x2="520" y2="160"/>
      <text class="axis-label" x="290" y="182" text-anchor="middle">মিনিট</text>
      <path d="M 70 150 Q 130 50 180 55 Q 230 60 260 110 Q 290 150 330 150 Q 390 150 450 60" fill="none" stroke="#3dd6c4" stroke-width="2.5"/>
      <text class="lbl-cyan" x="160" y="42" text-anchor="middle">গভীর ফোকাস</text>
      <text class="lbl-sm" x="160" y="54" text-anchor="middle">~৪৫ মিনিট শিখর</text>
      <text class="lbl-sm" x="280" y="100" text-anchor="middle">ক্ষয় শুরু</text>
      <circle cx="160" cy="55" r="4" fill="#3dd6c4"/>
      <circle cx="260" cy="110" r="4" fill="#ff6b35"/>
      <rect class="cell-good" x="60" y="20" width="200" height="30" rx="6" opacity="0.3"/>
      <text class="lbl-sm" x="160" y="38" text-anchor="middle" style="fill:#52c41a">৯০-মিনিট ব্লক</text>
      <rect class="cell-hot" x="320" y="130" width="120" height="40" rx="6"/>
      <text class="lbl-hot" x="380" y="148" text-anchor="middle" style="font-size:10px">১৫-২০ মিনিট বিরতি</text>
      <text class="lbl-sm" x="380" y="162" text-anchor="middle">কোনো স্ক্রিন নয়</text>
      <text class="lbl-amber" x="290" y="205" text-anchor="middle">মন গেলে ধরো, বিনা রাগে ফিরিয়ে আনো — এটাই পেশীর ব্যায়াম</text>
    </svg>
    <div class="diag-cap">ফোকাস মানে মন না যাওয়া নয় — গেলে ফিরিয়ে আনা। প্রতিবার = একটা পুশআপ।</div>
  </div>
  
  <div class="secret-box">
    <div class="secret-icon">🛡️</div>
    <div class="secret-line">ফোকাস মানে মন না যাওয়া নয় — মন গেলে ফিরিয়ে আনা।</div>
    <div class="secret-why">কারণ ফোকাস একটা পেশী। মন সরে যাওয়া ধরা আর ফিরিয়ে আনাই সেই পেশীর ব্যায়াম। যত বেশি ফিরিয়ে আনবে, তত শক্ত হবে। একদিন তুমি আবিষ্কার করবে — মন আর আগের মতো সরে যায় না।</div>
  
</div>`,
  senior: {
    title: "আজই শুরু করো — Start Today",
    body: "<p>আগামীকাল একটা কাজ বেছে নাও। শুধু একটা।<br><strong>ধাপ ১:</strong> ফোন অন্য ঘরে রাখো।<br><strong>ধাপ ২:</strong> টাইমার চালাও — ২৫ মিনিট।<br><strong>ধাপ ৩:</strong> মন সরে গেলে ধরো, বিনা রাগে ফিরিয়ে আনো।<br><strong>ধাপ ৪:</strong> ২৫ মিনিট পর ৫ মিনিট বিরতি (কোনো স্ক্রিন নয় — হাঁটো, পানি খাও)।<br><br>এটাই প্রথম ফোকাস রেপ। আগামীকাল আরেকটা। এক সপ্তাহে তুমি পার্থক্য টের পাবে। নামাজে খুশু অনুশীলন করো — সেটাও ফোকাস প্রশিক্ষণ।</p>"
  }
});

// ═══ DOOR 8 ═══
doors.push({
  num: 8,
  icon: "😴",
  color: "#5eead4",
  name: "ঘুমই শেখা",
  subtitle: "Sleep is Learning",
  tech: "মেমরি কনসোলিডেশন · Memory Consolidation & Sleep Architecture",
  spirit: "নবম নিদর্শন — রাত ও ঘুম আল্লাহর নিদর্শন (৭৮:৯-১০)",
  secret: "তুমি যখন পড়ো, তখন তুমি শেখো না। তুমি যখন ঘুমাও, তখন তোমার মস্তিষ্ক পড়াটা স্থায়ী করে। ঘুম ব্যয় নয় — ঘুম হলো শেখার দ্বিতীয় অর্ধেক। যে ঘুমায় না, সে আসলে পড়াই মুছে দেয়।",
  recall: {
    q: "কেন রাত জেগে পড়ার চেয়ে ঘুমিয়ে পড়া বেশি কার্যকর?",
    qen: "Why is sleeping after studying more effective than staying up all night?",
    a: "কারণ মস্তিষ্ক জেগে থাকলে শেখে, কিন্তু ঘুমের সময় সেই শেখাকে স্থায়ী করে। Marshall & Born (২০০৬, Nature) দেখিয়েছেন ধীর-তরঙ্গ ঘুমের (deep sleep) সময় হিপোক্যাম্পাস থেকে কর্টেক্সে স্মৃতি স্থানান্তর হয়। Yoo & Walker (২০০৭, Nature Neuroscience) দেখিয়েছেন এক রাত ঘুম না হলে নতুন স্মৃতি তৈরির ক্ষমতা উল্লেখযোগ্যভাবে কমে।",
    aen: "Because the brain encodes while awake but consolidates during sleep. Marshall & Born (2006) showed slow-wave sleep transfers memory from hippocampus to cortex. Yoo & Walker (2007) showed one night of sleep deprivation significantly impairs new memory formation."
  },
  story: `<p class="scene-setting">পরীক্ষা আগামীকাল। তুমি রাত ২টায় পড়ছো। চোখ ভারী, কিন্তু তুমি ভাবো — 'আরেকটু পড়ি, ঘুমালে তো পড়া হবে না।' তুমি চা খাও, আর পড়ো। সকালে পরীক্ষায় যাও — কিছুই মনে নেই। তুমি ভাবো — 'রাত ভর পড়লাম, তবু মনে রাখতে পারলাম না।' তুমি হতাশ। কিন্তু সমস্যা তোমার বুদ্ধিতে নয় — সমস্যা তোমার ঘুমে। তুমি যেটা পড়েছো, সেটা মুছে যাওয়ার জন্য তুমি নিজেই ঘুমাতে দাওনি।</p>
  <p class="scene-setting en">Exam tomorrow. You study until 2am. In the morning — nothing. You think you didn't study enough. But the truth: you didn't SLEEP enough. You studied, then deleted it by not sleeping.</p>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>বড় ভুল:</strong> 'যত কম ঘুমাবো, তত বেশি পড়বো।' এটা একটা আত্মঘাতী ধারণা। কারণ ঘুম হলো শেখার <em>সেভ বাটন</em>। তুমি যা পড়েছো, ঘুমের সময় সেটা হার্ডড্রাইভে সেভ হয়। না ঘুমালে — সেভ হয় না। সকালে ফাইলটা খোলো, দেখো খালি।</div></div>
  <p class="scene-setting">এখন শোনো <strong>কারিগর জাকারিয়ার</strong> গল্প। জাকারিয়া একজন প্রাচীন পান্ডুলিপি সংরক্ষক। সে পুরোনো কালির লেখা পাতা থেকে মুছে ফেলে নতুন করে লেখে — কিন্তু তার একটা নিয়ম আছে।</p>
  <div class="dialogue">
    <p><strong>সহকারী:</strong> ওস্তাদ, আমি সারাদিন লিখলাম। কিন্তু সকালে দেখি কালি মুছে গেছে। কেন?</p>
    <p><strong>জাকারিয়া:</strong> তুই লিখে শেষ করে কী করলি?</p>
    <p><strong>সহকারী:</strong> পাতাটা ভাঁজ করে রাখলাম। তারপর আরেকটা পাতা লিখতে বসলাম।</p>
    <p><strong>জাকারিয়া:</strong> সেটাই ভুল। কালি ভেজা থাকলে ভাঁজ করলে এক পাতার কালি অন্য পাতায় লেগে যায়। আমি লেখার পর পাতাটা খোলা রাখি — সারা রাত শুকায়। সকালে কালি স্থায়ী হয়ে যায়। তারপর ভাঁজ করি।</p>
    <p><strong>সহকারী:</strong> মানে আপনি লেখার পর অপেক্ষা করেন?</p>
    <p><strong>জাকারিয়া:</strong> হ্যাঁ। কালি শুকাতে দিন নয় — রাত। রাতেই শুকায়। যে রাত জাগে সে লেখে, কিন্তু লেখা থাকে না। যে রাতে ঘুমায় — তার লেখা চিরকাল থাকে।</p>
  </div>
  <p class="scene-setting">তোমার মস্তিষ্কও জাকারিয়ার কালির মতো। তুমি জেগে যা পড়ো — সেটা 'ভেজা কালি।' ঘুমের সময় মস্তিষ্ক সেই কালিকে শুকায় — স্থায়ী করে। না ঘুমালে কালি মুছে যায়। পড়াই বৃথা।</p>
  <div class="callout tip"><span class="co-icon">📋</span><div>
    <h4>🔧 সিস্টেম — The Sleep Protocol (৪টি স্তর)</h4>
    <p><strong>স্তর ১ — ঘুমের স্থাপত্য (Sleep Architecture):</strong> তোমার ঘুম একটা ব্লক নয় — এটা চক্র। প্রতি রাতে ৪-৬টা চক্র, প্রতিটা ~৯০ মিনিট।</p>
    <table class="kv-table">
      <tr><th>স্তর</th><th>কী হয়</th><th>কেন গুরুত্বপূর্ণ</th></tr>
      <tr><td class="hl">NREM Stage 1-2</td><td class="hl">হালকা ঘুম</td><td class="hl">শরীর প্রস্তুত</td></tr>
      <tr><td class="hl">NREM Stage 3 (SWS)</td><td class="hl">গভীর ঘুম, ডেল্টা তরঙ্গ (০.৫-৪.৫ Hz)</td><td class="hl">তথ্য স্থানান্তর: হিপোক্যাম্পাস → কর্টেক্স</td></tr>
      <tr><td class="hl">REM</td><td class="hl">স্বপ্ন, দ্রুত চোখের নড়াচড়া</td><td class="hl">দক্ষতা, আবেগ, সৃজনশীল সংযোগ</td></tr>
    </table>
    <p><strong>গভীর ঘুম (SWS)</strong> রাতের প্রথম অর্ধে — তাই প্রথম ৪ ঘণ্টা অপরিহার্য। <strong>REM</strong> রাতের শেষ অর্ধে — তাই সকালের ঘুমও গুরুত্বপূর্ণ।</p>
    <p><strong>স্তর ২ — পড়ার সময়সূচি (Study Timing):</strong> পড়ার সেরা সময় ঘুমানোর ১-২ ঘণ্টা আগে। কারণ তখন যা পড়ো, ঘুমের প্রথম গভীর-ঘুম চক্রে সেটা স্থায়ী হয়।</p>
    <p><strong>স্তর ৩ — টেম্পারেচার ড্রপ (Temperature Drop):</strong> ঘুম আসে যখন শরীরের তাপমাত্রা ~১°C কমে। গোসল করে গরম পানি — তারপর শরীর ঠান্ডা হয়, ঘুম আসে। ঘর ঠান্ডা রাখো (১৮-২০°C)।</p>
    <p><strong>স্তর ৪ — আলো ও ক্যাফেইন (Light & Caffeine):</strong> বিকেলের পর ক্যাফেইন নয় (অর্ধেক ৬ ঘণ্টা পরও রক্তে থাকে)। সন্ধ্যায় ডিম আলো। ফোন বন্ধ।</p>
  </div></div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>কেন কাজ করে — The Science:</strong> <strong>Matthew Walker</strong> (UC Berkeley, *Why We Sleep*, ২০১৭) স্লিপ সায়েন্সের সবচেয়ে পরিচিত প্রবক্তা। <strong>Yoo, Hu, Gujar, Jolesz & Walker</strong> (২০০৭, <em>Nature Neuroscience</em>) দেখিয়েছেন — এক রাত ঘুম না হলে <strong>হিপোক্যাম্পাস</strong> (নতুন স্মৃতি তৈরির কেন্দ্র) উল্লেখযোগ্যভাবে কম সক্রিয় হয় — মানে তুমি নতুন কিছু শিখতেই পারো না। <strong>Marshall, Helgadóttir, Mölle & Born</strong> (২০০৬, <em>Nature</em>) একটা যুগান্তকারী পরীক্ষা করেছেন — গভীর ঘুমের সময় ০.৭৫ Hz ধীর তরঙ্গ কৃত্রিমভাবে উদ্দীপিত করলে <strong>স্মৃতি সংরক্ষণ উল্লেখযোগ্যভাবে বেড়ে যায়</strong>। এটা প্রমাণ করে — গভীর ঘুম কোনো নিষ্ক্রিয় সময় নয়, এটা সক্রিয় শেখার সময়। ⚠️ <em>বিতর্ক:</em> Walker-এর কিছু সংখ্যা (মৃত্যুহার সম্পর্কিত গ্রাফ) সমালোচিত হয়েছে — তিনি স্বীকার করেছেন। তবে মূল ফলাফল — ঘুম মেমরি সংরক্ষণে অপরিহার্য — সুপ্রতিষ্ঠিত।</div></div>
  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">~৪০%</div><div class="sc-label">শেখার পরে না ঘুমালে হারানো তথ্য<br>Walker (Why We Sleep, 2017)</div></div></div>
    <div class="stat-card"><div class="sc-num">৭-৯ ঘণ্টা</div><div class="sc-label">প্রাপ্তবয়স্কদের জন্য আদর্শ ঘুম<br>National Sleep Foundation</div></div>
  
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল উপায়</div>পরীক্ষার আগের রাত জাগো। চা খাও। সকালে মনে রাখার চেষ্টা করো। ফাইল খোলো — খালি।</div></div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক উপায়</div>ঘুমানোর আগে পড়ো। তারপর ঘুমাও — গভীর ঘুমে মস্তিষ্ক সেভ করে। সকালে ফাইল খোলো — ভর্তি।</div>
  
  <div class="callout info"><span class="co-icon">🧠</span><div><strong>পবিত্র সমতুল্য — Sacred Analogue:</strong> কুরআনে আল্লাহ বলেছেন: <em>'তিনি তোমাদের জন্য রাতকে করেছেন বস্ত্র, এবং ঘুমকে করেছেন বিশ্রাম।'</em> (৭৮:৯-১০)। রাত = বস্ত্র — মানে আবরণ, সুরক্ষা। দিনের ক্লান্তি, তথ্য, অভিজ্ঞতা — রাতের অন্ধকারে মস্তিষ্ক সেগুলোকে গ্রহণ করে, সাজায়। নবী ﷺ বলেছেন: <em>'তোমাদের জন্য রাতের শেষ ভাগে একটা সময় আছে যে সময় আল্লাহ বান্দার দিকে তাকান — যে জাগে।'</em> তাহাজ্জুদ — শুধু আধ্যাত্মিক নয়, এটা সারকেডিয়ান। রাতের শেষ তৃতীয়াংশে REM ঘুম সবচেয়ে গভীর — যে জাগে সে মস্তিষ্কের সবচেয়ে সৃজনশীল সময়টায় আল্লাহর সাথে কথা বলে। নবী ﷺ এর দুআ: <em>'হে আল্লাহ, আমার উম্মতের জন্য সকালের বরকত দান করো।'</em> — সকালে উঠা = বরকত। কারণ সকালে ঘুম থেকে ওঠা মস্তিষ্কের প্রাকৃতিক সারকেডিয়ান শিখর।</div></div>
  <div class="verse">"তিনি যিনি তোমাদের জন্য রাতকে করেছেন বস্ত্র, এবং ঘুমকে করেছেন বিশ্রাম, এবং দিনকে করেছেন জীবনযাপনের।" — কুরআন ৭৮:৯-১১</div>
  <div class="verse en">"And made your sleep for rest, and made the night as a covering, and made the day for livelihood." — Quran 78:9-11</div>
  <div class="checklist">
    <li>পরীক্ষার আগের রাত কখনো জাগবে না — ঘুমাবে</li>
    <li>ঘুমানোর ১-২ ঘণ্টা আগে যা পড়ো, সেটাই সবচেয়ে ভালো মনে থাকে</li>
    <li>ঘর ঠান্ডা রাখো (১৮-২০°C) — গোসল করে শুয়ে পড়ো</li>
    <li>বিকেলের পর ক্যাফেইন নয় (অর্ধেক ৬ ঘণ্টা পরও থাকে)</li>
    <li>৭-৯ ঘণ্টা ঘুম লক্ষ্য করো — এটা ব্যয় নয়, শেখার অংশ</li>
    <li>সকালে ফজরের আজানে উঠো — সারকেডিয়ান শিখর</li>
  </div>
  <div class="diagram">
    <div class="diag-title">ঘুমের স্থাপত্য · Memory Consolidation</div>
    <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowD8" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#c4b5fd"/></marker>
      </defs>
      <rect class="cell-cyan" x="20" y="40" width="100" height="50" rx="8"/>
      <text class="lbl-cyan" x="70" y="62" text-anchor="middle">জেগে পড়ো</text>
      <text class="lbl-sm" x="70" y="78" text-anchor="middle">ভেজা কালি</text>
      <line class="edge" x1="120" y1="65" x2="200" y2="65" marker-end="url(#arrowD8)"/>
      <rect class="cell-moon" x="200" y="40" width="160" height="50" rx="8"/>
      <text class="lbl-sm" x="280" y="62" text-anchor="middle" style="fill:#5b9eff;font-weight:700">গভীর ঘুম (SWS)</text>
      <text class="lbl-sm" x="280" y="78" text-anchor="middle">হিপোক্যাম্পাস → কর্টেক্স</text>
      <line class="edge" x1="360" y1="65" x2="440" y2="65" marker-end="url(#arrowD8)"/>
      <rect class="cell-purple" x="440" y="40" width="100" height="50" rx="8"/>
      <text class="lbl-sm" x="490" y="62" text-anchor="middle" style="fill:#b37feb;font-weight:700">সকাল</text>
      <text class="lbl-sm" x="490" y="78" text-anchor="middle">স্থায়ী স্মৃতি</text>
      <rect class="cell-good" x="80" y="130" width="180" height="50" rx="8"/>
      <text class="lbl-leaf" x="170" y="152" text-anchor="middle">সঠিক: ঘুমানোর আগে পড়ো</text>
      <text class="lbl-sm" x="170" y="168" text-anchor="middle">৭-৯ ঘণ্টা · ঘর ১৮-২০°C</text>
      <rect class="cell-hot" x="300" y="130" width="180" height="50" rx="8"/>
      <text class="lbl-hot" x="390" y="152" text-anchor="middle">ভুল: রাত জাগো</text>
      <text class="lbl-sm" x="390" y="168" text-anchor="middle">~৪০% তথ্য হারাও</text>
      <text class="lbl-amber" x="280" y="215" text-anchor="middle">ঘুম হলো সেভ বাটন — না ঘুমালে পড়াই মুছে যায় (Marshall &amp; Born 2006)</text>
    </svg>
    <div class="diag-cap">তুমি জেগে শেখো না — ঘুমে শেখো। ঘুম সেভ করে।</div>
  </div>
  
  <div class="secret-box">
    <div class="secret-icon">😴</div>
    <div class="secret-line">তুমি জেগে শেখো না — ঘুমে শেখো। ঘুম হলো সেভ বাটন।</div>
    <div class="secret-why">কারণ গভীর ঘুমের সময় হিপোক্যাম্পাস থেকে কর্টেক্সে তথ্য স্থানান্তর হয়। এক রাত না ঘুমালে নতুন স্মৃতি তৈরির ক্ষমতা কমে। যে ঘুমায় না, সে পড়াই মুছে দেয়।</div>
  
</div>`,
  senior: {
    title: "আজ রাতে করো — Tonight",
    body: "<p>আজ রাতে এই প্রোটোকল মেনে চলো:<br><strong>১.</strong> ঘুমানোর ১ ঘণ্টা আগে স্ক্রিন বন্ধ।<br><strong>২.</strong> গরম পানিতে গোসল (তারপর শরীর ঠান্ডা হবে, ঘুম আসবে)।<br><strong>৩.</strong> ঘর ঠান্ডা (১৮-২০°C)।<br><strong>৪.</strong> ঘুমানোর আগে যা পড়তে চাও — পড়ে নাও।<br><strong>৫.</strong> ৭-৯ ঘণ্টা ঘুমাও।<br><br>সকালে উঠে পরীক্ষা দাও — দেখবে তুমি যা পড়েছো, তার বেশি মনে আছে। কারণ রাতে তোমার মস্তিষ্ক সেভ করেছে।</p>"
  }
});

// ═══ DOOR 9 ═══
doors.push({
  num: 9,
  icon: "🔄",
  color: "#a78bfa",
  name: "অভ্যাস লুপ",
  subtitle: "The Habit Loop",
  tech: "কিউ-রুটিন-রিওয়ার্ড · Cue-Routine-Reward & Basal Ganglia",
  spirit: "সুন্নাহ গঠন — পুনরাবৃত্তি পথ তৈরি করে",
  secret: "অভ্যাস ইচ্ছাশক্তি দিয়ে হয় না — লুপ দিয়ে হয়। কিউ মস্তিষ্ককে চালু করে, রুটিন চলে, রিওয়ার্ড লুপটা সিল করে। এই তিনের মিলনই অভ্যাস। একটা বাদ দিলে অভ্যাস ভাঙে।",
  recall: {
    q: "অভ্যাস লুপের তিনটি অংশ কী এবং কোনটা সবচেয়ে গুরুত্বপূর্ণ?",
    qen: "What are the three parts of the habit loop and which is most important?",
    a: "কিউ (Cue), রুটিন (Routine), রিওয়ার্ড (Reward)। সবচেয়ে গুরুত্বপূর্ণ হলো কিউ — কারণ কিউ ছাড়া লুপ শুরুই হয় না। Jog, Kubota...Graybiel (১৯৯৯, Science) দেখিয়েছেন বেসাল গ্যাংলিয়া শেখার সময় শুরু ও শেষে ফায়ার করে — মাঝখানে চুপ। একবার লুপ গেলে মস্তিষ্ক আর চিন্তা করে না — অটোপাইলট।",
    aen: "Cue, Routine, Reward. The cue is most important — without it the loop never starts. Jog, Kubota...Graybiel (1999) showed basal ganglia neurons fire at the start and end of a learned sequence, going quiet in between — pure autopilot."
  },
  story: `<p class="scene-setting">তুমি প্রতিদিন সকালে ফোন হাতে নাও। কেন? তুমি ভাবো না — হাত নিজে চলে যায়। এটা ইচ্ছা নয় — এটা একটা লুপ। কিউ: ঘুম থেকে ওঠা। রুটিন: ফোন হাতে নেওয়া। রিওয়ার্ড: ডোপামিন (নতুন নোটিফিকেশন)। তিনটে মিলে একটা শক্ত লুপ। তুমি এটাকে ভাঙতে চাও — কিন্তু ভাঙতে পারো না। কারণ তুমি শুধু রুটিনটা ভাঙতে চাও — কিউ আর রিওয়ার্ড ছেড়ে দাওনি।</p>
  <p class="scene-setting en">Every morning you grab your phone. You don't decide — your hand moves. This is not will. This is a loop. Cue: waking. Routine: phone. Reward: dopamine. You can't break it by fighting the routine alone.</p>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুল কৌশল:</strong> 'আমি আর ফোন সকালে দেখবো না।' তুমি শুধু রুটিন ভাঙতে চাইছো — কিন্তু কিউ (ঘুম থেকে ওঠা) আছে, রিওয়ার্ড (ডোপামিন) আছে। মস্তিষ্ক বলবে — 'কিউ এসেছে, রিওয়ার্ড কোথায়?' এবং তোমাকে ফোনের দিকে ধাক্কা দেবে।</div></div>
  <p class="scene-setting">এখন শোনো <strong>কারিগর ইসহাকের</strong> গল্প। ইসহাক একজন জলপথ নির্মাতা — সে পাহাড়ের গায়ে খাল কাটে, পানি নামায়। তার হাতের তালুতে সবসময় একটা পুরোনো শাবলের দাগ।</p>
  <div class="dialogue">
    <p><strong>শাগরেদ:</strong> ওস্তাদ, আমি একটা খাল কাটতে চাই। কিন্তু পানি আসে না। কেন?</p>
    <p><strong>ইসহাক:</strong> তুই কোথায় কাটছিস?</p>
    <p><strong>শাগরেদ:</strong> পাহাড়ের মাঝে। সোজা নিচে।</p>
    <p><strong>ইসহাক:</strong> সেটাই ভুল। পানি কখনো সোজা নিচে নামে না। পানির তিনটা জিনিস লাগে — উৎস, ঢাল, গন্তব্য। উৎস থেকে ঢাল বেয়ে গন্তব্যে যায়। তুই শুধু গন্তব্য খুঁড়িস — কিন্তু উৎস কোথায়? ঢাল কোথায়?</p>
    <p><strong>শাগরেদ:</strong> মানে আমি ভুল জায়গায় খুঁড়ছি?</p>
    <p><strong>ইসহাক:</strong> ঠিক ধরেছিস। অভ্যাস হলো পানির মতো — এটা পথ খুঁজে নেয়। উৎস হলো কিউ, ঢাল হলো রুটিন, গন্তব্য হলো রিওয়ার্ড। তুই যদি পানি অন্য দিকে নিতে চাস — তোকে নতুন উৎস বানাতে হবে, নতুন ঢাল কাটতে হবে। পুরোনো গন্তব্য বন্ধ করলে পানি থামবে না — উপরে জমবে, ফেটে পড়বে।</p>
    <p><strong>শাগরেদ:</strong> তাহলে আমি কী করবো?</p>
    <p><strong>ইসহাক:</strong> নতুন খাল কাট — পুরোনোটা শুকিয়ে যাবে। কিউ-রুটিন-রিওয়ার্ড — তিনটেই নতুন করে বাঁধো।</p>
  </div>
  <p class="scene-setting">তোমার অভ্যাসও ইসহাকের পানির মতো। তুমি শুধু রুটিন ভাঙলে হবে না — পুরো লুপটা বদলাতে হবে। কিউ চিনতে হবে, রুটিন বদলাতে হবে, রিওয়ার্ড নতুন দিতে হবে।</p>
  <div class="callout tip"><span class="co-icon">📋</span><div>
    <h4>🔧 সিস্টেম — The Habit Loop Protocol (৪টি ধাপ)</h4>
    <p><strong>ধাপ ১ — কিউ চিনে নাও (Identify the Cue):</strong> তোমার অভ্যাস কখন শুরু হয়? কিউ সাধারণত ৫টা ভাগে আসে:</p>
    <table class="kv-table">
      <tr><th>কিউ-এর ধরন</th><th>উদাহরণ</th></tr>
      <tr><td class="hl">স্থান (Location)</td><td class="hl">বিছানায় শুলেই ফোন</td></tr>
      <tr><td class="hl">সময় (Time)</td><td class="hl">দুপুর ২টায় ক্ষুধা</td></tr>
      <tr><td class="hl">আবেগ (Emotional State)</td><td class="hl">ভয় পেলে খাওয়া</td></tr>
      <tr><td class="hl">অন্য মানুষ (Other People)</td><td class="hl">বন্ধু ধূমপান করলে তুমিও</td></tr>
      <tr><td class="hl">আগের কাজ (Immediately preceding action)</td><td class="hl">দাঁত মাজার পর কফি</td></tr>
    </table>
    <p>৩ দিন নোট করো — কখন অভ্যাসটা শুরু হয়। প্যাটার্ন দেখবে।</p>
    <p><strong>ধাপ ২ — রিওয়ার্ড চিনে নাও (Identify the Reward):</strong> অভ্যাসটা তোমাকে কী দেয়? শুধু কাজটা নয় — অনুভূতিটা খুঁজো।</p>
    <p>ফোন স্ক্রল = ডোপামিন (নতুন কিছু)। জাঙ্ক ফুড = আরাম (সান্ত্বনা)। ধূমপান = বিরতি (বন্ধুদের সাথে)।</p>
    <p><strong>ধাপ ৩ — নতুন রুটিন বসাও (Insert New Routine):</strong> পুরোনো কিউ + পুরোনো রিওয়ার্ড — কিন্তু নতুন রুটিন।</p>
    <p>কিউ: সকালে ওঠা। পুরোনো রুটিন: ফোন। নতুন রুটিন: বই খোলা। রিওয়ার্ড: ডোপামিন (নতুন কিছু — বইয়ের নতুন অধ্যায়)।</p>
    <p>কিউ একই, রিওয়ার্ড একই — শুধু রুটিন বদলালাম। মস্তিষ্ক বলবে — 'ঠিক আছে, কিউ এসেছে, রিওয়ার্ড পেয়েছি — নতুন রুটিনটাই চলবে।'</p>
    <p><strong>ধাপ ৪ — লুপ সিল করো (Seal the Loop):</strong> একই কিউ, একই রুটিন, একই রিওয়ার্ড — প্রতিদিন। ৬৬ দিন (Lally et al., ২০১০)। একদিন তুমি আর ভাববে না — মস্তিষ্ক নিজে চলবে।</p>
  </div></div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>কেন কাজ করে — The Science:</strong> <strong>Ann Graybiel</strong> (MIT, McGovern Institute) ও তাঁর দল বেসাল গ্যাংলিয়া — মস্তিষ্কের গভীরে একটা অংশ — নিয়ে গবেষণা করেছেন কয়েক দশক। <strong>Jog, Kubota, Connolly, Hillegaart & Graybiel</strong> (১৯৯৯, <em>Science</em>) একটা যুগান্তকারী পরীক্ষা করেছেন — ইদুরকে একটা T-maze শেখানো হলো। শেখার সময় স্ট্রিয়াটামের নিউরন <strong>পুরো সময় ফায়ার করছিল</strong>। কিন্তু একবার শিখে গেলে — নিউরন শুধু <strong>শুরুতে এবং শেষে</strong> ফায়ার করল, মাঝখানে চুপ হয়ে গেল। একে বলে <strong>'chunking'</strong> — বেসাল গ্যাংলিয়া পুরো রুটিনটাকে একটা 'চাঙ্ক'-এ পরিণত করে। একবার চাঙ্ক হলে — কিউ আসলেই পুরো চাঙ্ক চলে যায়, চিন্তা লাগে না। এটাই অটোপাইলট। <strong>Charles Duhigg</strong> (২০১২, <em>The Power of Habit</em>) এই গবেষণাকে জনসাধারণের কাছে নিয়ে এসেছেন — কিউ → রুটিন → রিওয়ার্ড লুপ। <strong>Phillippa Lally et al.</strong> (UCL, ২০১০, <em>European Journal of Social Psychology</em>) দেখিয়েছেন একটা অভ্যাস স্বয়ংক্রিয় হতে <strong>মধ্যমা ৬৬ দিন</strong> লাগে (সীমা ১৮-২৫৪ দিন)। নোট: ২১ দিনের মিথটি ভুল — সেটি Maxwell Maltz-এর প্লাস্টিক সার্জারি পর্যবেক্ষণ থেকে এসেছে, অভ্যাস গবেষণা থেকে নয়।</div></div>
  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">৬৬ দিন</div><div class="sc-label">অভ্যাস স্বয়ংক্রিয় হতে মধ্যমা (১৮-২৫৪)<br>Lally et al. (2010, UCL)</div></div></div>
    <div class="stat-card"><div class="sc-num">চাঙ্কিং</div><div class="sc-label">বেসাল গ্যাংলিয়া রুটিনকে একক করে দেয়<br>Graybiel (1999, MIT)</div></div>
  
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল উপায়</div>'আমি আর ফোন সকালে দেখবো না।' শুধু রুটিন ভাঙছো — কিউ আর রিওয়ার্ড বেঁচে আছে। মস্তিষ্ক তোমাকে আবার ফোনের দিকে ঠেলে দেবে।</div></div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক উপায়</div>কিউ চিনো (সকালে ওঠা)। রিওয়ার্ড চিনো (ডোপামিন)। নতুন রুটিন বসাও (বই খোলা)। একই কিউ, একই রিওয়ার্ড — নতুন রুটিন।</div>
  
  <div class="callout info"><span class="co-icon">🧠</span><div><strong>পবিত্র সমতুল্য — Sacred Analogue:</strong> নবী ﷺ বলেছেন: <em>'সবচেয়ে প্রিয় আমল আল্লাহর কাছে সেটা, যেটা নিয়মিত হয় — যদিও ছোট।'</em> — বুখারি। এটা একটা অভ্যাস লুপের বিবরণ। 'নিয়মিত' মানে কিউ → রুটিন → রিওয়ার্ড লুপ প্রতিদিন চলছে। ছোট মানে রুটিন ছোট — কিন্তু লুপ শক্ত। নবী ﷺ এর নিজের জীবন ছিল অভ্যাসে ভরা — প্রতিদিন একই সময়ে নামাজ, একই দিকে ঘুমানো, একই দুআ। এটাকে বলে সুন্নাহ গঠন — পুনরাবৃত্তি মস্তিষ্কে পথ কাটে। আল্লাহ বলেছেন: <em>'নিশ্চয়ই তোমাদের জন্য রাসূলে রয়েছে উত্তম আদর্শ।'</em> (৩৩:২১) — এই আদর্শ শুধু বিশ্বাসের নয়, এটা আচরণের অভ্যাস লুপ।</div></div>
  <div class="verse">"নিশ্চয়ই তোমাদের জন্য রাসূলে রয়েছে আল্লাহর উত্তম আদর্শ — যারা আল্লাহ ও শেষ দিনের প্রত্যাশা করে এবং আল্লাহকে অধিক স্মরণ করে।" — কুরআন ৩৩:২১</div>
  <div class="verse en">"There has certainly been for you in the Messenger of Allah an excellent pattern." — Quran 33:21</div>
  <div class="checklist">
    <li>একটা অভ্যাস বেছে নাও — শুধু একটা</li>
    <li>৩ দিন নোট করো: কখন এটা হয়? (কিউ)</li>
    <li>এটা তোমাকে কী দেয়? (রিওয়ার্ড — অনুভূতি)</li>
    <li>একই কিউ, একই রিওয়ার্ড — নতুন রুটিন বসাও</li>
    <li>৬৬ দিন প্রতিদিন করো — মস্তিষ্ক নিজে থেকে চলবে</li>
    <li>২১ দিনের মিথ ভুল — ধৈর্য রাখো, মধ্যমা ৬৬ দিন</li>
  </div>
  <div class="diagram">
    <div class="diag-title">অভ্যাস লুপ · Cue → Routine → Reward</div>
    <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowD9a" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#ff6b35"/></marker>
        <marker id="arrowD9b" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#52c41a"/></marker>
      </defs>
      <circle class="node-hot" cx="100" cy="100" r="40"/>
      <text class="lbl-hot" x="100" y="96" text-anchor="middle">কিউ</text>
      <text class="lbl-sm" x="100" y="112" text-anchor="middle">Cue</text>
      <circle class="node" cx="280" cy="100" r="40"/>
      <text class="lbl" x="280" y="96" text-anchor="middle">রুটিন</text>
      <text class="lbl-sm" x="280" y="112" text-anchor="middle">Routine</text>
      <circle class="node-cyan" cx="460" cy="100" r="40"/>
      <text class="lbl-cyan" x="460" y="96" text-anchor="middle">রিওয়ার্ড</text>
      <text class="lbl-sm" x="460" y="112" text-anchor="middle">Reward</text>
      <line class="edge" x1="140" y1="100" x2="235" y2="100" marker-end="url(#arrowD9a)"/>
      <line class="edge" x1="320" y1="100" x2="415" y2="100" marker-end="url(#arrowD9a)"/>
      <path d="M 460 60 Q 280 10 100 60" fill="none" stroke="#3dd6c4" stroke-width="2" marker-end="url(#arrowD9b)" stroke-dasharray="4,3"/>
      <text class="lbl-cyan" x="280" y="28" text-anchor="middle" style="font-size:10px">লুপ সিল · চাঙ্কিং</text>
      <rect class="cell-good" x="120" y="170" width="320" height="50" rx="8"/>
      <text class="lbl-leaf" x="280" y="190" text-anchor="middle">নতুন রুটিন বসাও: একই কিউ + একই রিওয়ার্ড</text>
      <text class="lbl-sm" x="280" y="208" text-anchor="middle">৬৬ দিন (Lally 2010) · বেসাল গ্যাংলিয়া অটোপাইলট</text>
    </svg>
    <div class="diag-cap">তিনে মিলে অভ্যাস — একটা বাদ দিলে ভাঙে।</div>
  </div>
  
  <div class="secret-box">
    <div class="secret-icon">🔄</div>
    <div class="secret-line">কিউ-রুটিন-রিওয়ার্ড — তিনে মিলে অভ্যাস। একটা বাদ দিলে ভাঙে।</div>
    <div class="secret-why">কারণ বেসাল গ্যাংলিয়া পুরো রুটিনকে একটা চাঙ্কে পরিণত করে। কিউ আসলেই পুরো চাঙ্ক চলে যায়। তুমি রুটিন ভাঙলে হবে না — পুরো লুপ বদলাতে হবে। নতুন কিউ + নতুন রুটিন + নতুন রিওয়ার্ড = নতুন অভ্যাস।</div>
  
</div>`,
  senior: {
    title: "আজই ম্যাপ করো — Map Your Loop Today",
    body: "<p>আজ একটা কাগজে তোমার একটা অভ্যাস ম্যাপ করো:<br><strong>কিউ:</strong> কখন এটা শুরু হয়? (সকালে ওঠা, দুপুরে ক্ষুধা, রাতে একা থাকা)<br><strong>রুটিন:</strong> তুমি কী করো? (ফোন, জাঙ্ক ফুড, স্ক্রল)<br><strong>রিওয়ার্ড:</strong> এটা তোমাকে কী দেয়? (ডোপামিন, সান্ত্বনা, বিরতি)<br><br>এখন ভাবো — একই কিউ আর একই রিওয়ার্ড দিয়ে নতুন রুটিন কী হতে পারে? উদাহরণ: কিউ = একা থাকা, রিওয়ার্ড = সান্ত্বনা। পুরোনো রুটিন = জাঙ্ক ফুড। নতুন রুটিন = পরিবারকে কল করা (একই সান্ত্বনা)।</p>"
  }
});

// ═══ DOOR 10 ═══
doors.push({
  num: 10,
  icon: "🧭",
  color: "#818cf8",
  name: "পরিচয়ের নোঙর",
  subtitle: "The Identity Anchor",
  tech: "আইডেন্টিটি-ভিত্তিক অভ্যাস · Identity-Based Habits & Self-Perception",
  spirit: "ইহসান — কে তুমি, তা নিয়ে কাজ করা; শুধু কী করছো নয়",
  secret: "লক্ষ্য বলো না — পরিচয় বলো। 'আমি পড়তে চাই' বললে মস্তিষ্ক বলে — 'তুমি পাঠক নও, তাই পড়তে কষ্ট হয়।' কিন্তু 'আমি পাঠক' বললে মস্তিষ্ক বলে — 'পাঠক পড়ে, তাই আমি পড়বো।' পরিচয় আগে, আচরণ পরে।",
  recall: {
    q: "লক্ষ্য-ভিত্তিক অভ্যাস আর পরিচয়-ভিত্তিক অভ্যাসের পার্থক্য কী?",
    qen: "What is the difference between goal-based and identity-based habits?",
    a: "লক্ষ্য-ভিত্তিক: 'আমি এই বইটা শেষ করবো।' শেষ হলে অভ্যাস থামে। পরিচয়-ভিত্তিক: 'আমি পাঠক।' পাঠক পড়ে — কোন বই শেষ হলো কি না, সেটা গুরুত্বপূর্ণ নয়। James Clear (২০১৮) বলেছেন — প্রতিটা কাজ একটা ভোট, তুমি কে হতে চাও তার জন্য। বেম (১৯৭২) এর self-perception theory বলে — মানুষ নিজের আচরণ দেখে নিজের পরিচয় তৈরি করে।",
    aen: "Goal-based: 'I will finish this book.' When done, the habit stops. Identity-based: 'I am a reader.' A reader reads — finishing doesn't matter. Clear (2018): every action is a vote for who you want to become. Bem (1972): people infer identity from observing their own behavior."
  },
  story: `<p class="scene-setting">তুমি বলো — 'আমি এই মাসে ১০ কেজি ওজন কমাবো।' দুই সপ্তাহ জিম গেলে। তারপর থামলে। কারণ তোমার লক্ষ্য ছিল ওজন কমানো — সেটা হলো বা হলো না, জিমে যাওয়ার কারণ শেষ। তুমি বলো — 'আমি এই সেমিস্টারে ৪.০ GPA পাবো।' পরীক্ষা শেষে পড়া বন্ধ। কারণ তোমার লক্ষ্য ছিল GPA — সেটা এলে পড়ার কারণ শেষ।</p>
  <p class="scene-setting en">You say 'I will lose 10kg this month.' Two weeks of gym, then you stop. The goal was weight loss — once the goal is met (or missed), the reason to continue vanishes. The goal was the anchor. When the goal goes, you drift.</p>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সমস্যা:</strong> লক্ষ্য একটা গন্তব্য — পৌঁছালে শেষ। কিন্তু তুমি গন্তব্যে পৌঁছে থামতে চাও না। তুমি চাও চলতে থাকে। আর চলতে থাকার জন্য লক্ষ্য যথেষ্ট নয় — <strong>পরিচয়</strong> দরকার।</div></div>
  <p class="scene-setting">এখন শোনো <strong>কারিগর আমিনার</strong> গল্প। আমিনা একজন কাপড় রঙ করার কারিগর। সে সবুজ রঙ বানায় — কিন্তু সে নিজেকে 'সবুজ রঙ বানানো ব্যক্তি' বলে না। সে নিজেকে বলে <em>'রাঙ্গুন কারিগর'</em> — যে রঙ করে।</p>
  <div class="dialogue">
    <p><strong>শিক্ষা:</strong> আপা, আপনি সবুজ রঙ বানান। তাহলে আপনি কি 'সবুজ রঙের কারিগর'?</p>
    <p><strong>আমিনা:</strong> না। আমি রাঙ্গুন কারিগর। আজ সবুজ বানাই, কাল লাল বানাবো। কিন্তু আমি রঙ করি — এটাই আমার পরিচয়।</p>
    <p><strong>শিক্ষা:</strong> এটা কেন গুরুত্বপূর্ণ?</p>
    <p><strong>আমিনা:</strong> কারণ যদি আমি 'সবুজ রঙের কারিগর' হই — সবুজ শেষ হলে আমি কে? বেকার। কিন্তু যদি আমি 'রাঙ্গুন কারিগর' হই — সবুজ শেষ হলে আমি লাল বানাই। কারণ আমি রঙ করি। পরিচয় আমার কাজকে ধরে রাখে।</p>
    <p><strong>শিক্ষা:</strong> তাই লক্ষ্য নয়, পরিচয়...</p>
    <p><strong>আমিনা:</strong> ঠিক ধরেছিস। একজন কবি কবিতা লেখে — কারণ সে কবি। একজন পাঠক পড়ে — কারণ সে পাঠক। তারা লক্ষ্য নিয়ে কাজ করে না — তারা <em>পরিচয়</em> নিয়ে কাজ করে। পরিচয় কখনো শেষ হয় না।</p>
  </div>
  <p class="scene-setting">তোমার সমস্যাও এটাই। তুমি বলো — 'আমি পড়তে চাই।' এটা একটা লক্ষ্য। কিন্তু তুমি যদি বলো — 'আমি পাঠক' — সেটা একটা পরিচয়। পাঠক পড়ে, কারণ পাঠক পড়ে। কোনো লক্ষ্য লাগে না।</p>
  <div class="callout tip"><span class="co-icon">📋</span><div>
    <h4>🔧 সিস্টেম — The Identity Protocol (৩টি ধাপ)</h4>
    <p><strong>ধাপ ১ — ভুল প্রশ্ন ছাড়ো, সঠিক প্রশ্ন করো:</strong></p>
    <table class="kv-table">
      <tr><th>ভুল প্রশ্ন (লক্ষ্য-ভিত্তিক)</th><th>সঠিক প্রশ্ন (পরিচয়-ভিত্তিক)</th></tr>
      <tr><td class="hl">"আমি কী করতে চাই?"</td><td class="hl">"আমি কে হতে চাই?"</td></tr>
      <tr><td class="hl">"১০ কেজি কমাবো"</td><td class="hl">"আমি সুস্থ ব্যক্তি"</td></tr>
      <tr><td class="hl">"বই শেষ করবো"</td><td class="hl">"আমি পাঠক"</td></tr>
      <tr><td class="hl">"পরীক্ষায় A পাবো"</td><td class="hl">"আমি শিক্ষার্থী"</td></tr>
      <tr><td class="hl">"মারাথন দৌড়াবো"</td><td class="hl">"আমি দৌড়বিদ"</td></tr>
    </table>
    <p><strong>ধাপ ২ — ছোট কাজ দিয়ে ভোট দাও (Vote with Small Actions):</strong></p>
    <p>তুমি পাঠক হতে চাও? একটা পৃষ্ঠা পড়ো। সেটা একটা ভোট — 'আমি পাঠক।' দুই পৃষ্ঠা পড়ো — দুই ভোট। প্রতিটা ছোট কাজ তোমার পরিচয়কে শক্ত করে।</p>
    <p>মস্তিষ্ক তোমার আচরণ দেখে পরিচয় তৈরি করে (Bem, ১৯৭২ — self-perception theory)। তুমি যা করো, তুমি তা হয়ে যাও।</p>
    <p><strong>ধাপ ৩ — প্রমাণ জমিয়ে রাখো (Collect Evidence):</strong></p>
    <p>একটা জার রাখো। প্রতিদিন পড়লে একটা পয়সা জারে ফেলো। জার ভরলে তুমি দেখবে — শত শত প্রমাণ যে তুমি পাঠক। এই প্রমাণ পরিচয়কে অপরিবর্তনীয় করে।</p>
  </div></div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>কেন কাজ করে — The Science:</strong> <strong>James Clear</strong> (২০১৮, <em>Atomic Habits</em>) এই কাঠামো জনপ্রিয় করেছেন: <em>"প্রতিটা কাজ একটা ভোট — তুমি কে হতে চাও তার জন্য।"</em> লক্ষ্য বলে তুমি কী পেতে চাও; প্রক্রিয়া বলে তুমি কী করো; পরিচয় বলে তুমি <strong>কে</strong>। এর পেছনে আছে <strong>Daryl Bem</strong> (১৯৭২, <em>Advances in Experimental Social Psychology</em>) এর <strong>Self-Perception Theory</strong> — মানুষ নিজের আচরণ পর্যবেক্ষণ করে নিজের বিশ্বাস তৈরি করে। তুমি যদি পড়ো, তোমার মস্তিষ্ক বলে — 'আমি পাঠক।' তুমি যদি দৌড়াও, মস্তিষ্ক বলে — 'আমি দৌড়বিদ।' আচরণ পরিচয় তৈরি করে, পরিচয় আচরণ চালায় — একটা উর্ধ্বমুখী চক্র। ⚠️ <em>সততা টিকা:</em> Carol Dweck এর growth mindset (২০০৬) এর সাথে এটা জড়িত — কিন্তু Dweck-এর ফলাফল নিয়ে বিতর্ক আছে। ২০১৯ সালে UK-তে ৫,০১৮ ছাত্রের উপর RCT-তে growth mindset-এর উল্লেখযোগ্য প্রভাব পাওয়া যায়নি। তবে মূল ধারণাটা — পরিচয় পরিবর্তনযোগ্য — ব্যবহারিকভাবে কার্যকর।</div></div>
  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">৩ স্তর</div><div class="sc-label">লক্ষ্য → প্রক্রিয়া → পরিচয়<br>Clear (2018, Atomic Habits)</div></div></div>
    <div class="stat-card"><div class="sc-num">ভোট</div><div class="sc-label">প্রতিটা কাজ একটা ভোট — তুমি কে তার জন্য<br>Self-Perception Theory (Bem, 1972)</div></div>
  
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ লক্ষ্য-ভিত্তিক</div>'আমি ১০ কেজি কমাবো।' লক্ষ্য পূরণ হলে বা ব্যর্থ হলে — কাজ থেমে যায়। কারণ কাজের কারণ ছিল লক্ষ্য, লক্ষ্য গেলে কারণ শেষ।</div></div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ পরিচয়-ভিত্তিক</div>'আমি সুস্থ ব্যক্তি।' সুস্থ ব্যক্তি ব্যায়াম করে — ওজন কমুক বা না কমুক। পরিচয় কখনো শেষ হয় না, তাই কাজও কখনো থামে না।</div>
  
  <div class="callout info"><span class="co-icon">🧠</span><div><strong>পবিত্র সমতুল্য — Sacred Analogue:</strong> ইসলামে সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন হলো — <em>'তুমি কে?'</em> জিব্রাঈল (আ) নবী ﷺ কে জিজ্ঞেস করেছিলেন: <em>'ইহসান কী?'</em> নবী ﷺ বলেছেন: <em>'আল্লাহকে এমনভাবে ইবাদত করা যেন তুমি তাঁকে দেখছো — যদি তাঁকে দেখো না, তিনি তোমাকে দেখছেন।'</em> — মুসলিম। এটা একটা পরিচয়। ইহসান কোনো লক্ষ্য নয় — এটা একটা সত্তা। তুমি মুমিন, তাই তুমি ইবাদত করো — না যে ইবাদত করলে মুমিন হবে। আল্লাহ বলেছেন: <em>'নিশ্চয়ই মুমিনরা কেবল তারাই যারা যখন আল্লাহর কথা বলা হয়, তাদের হৃদয় কম্পিত হয়।'</em> (৮:২) — এটা পরিচয়ের বিবরণ। তুমি বলো না — 'আমি নামাজ পড়বো।' তুমি বলো — 'আমি মুমিন।' মুমিন নামাজ পড়ে।</div></div>
  <div class="verse">"নিশ্চয়ই মুমিনরা কেবল তারাই যারা যখন আল্লাহর কথা বলা হয়, তাদের হৃদয় কম্পিত হয়, এবং যখন তাঁর আয়াতসমূহ তাদের কাছে পাঠ করা হয়, তা তাদের ঈমান বৃদ্ধি করে।" — কুরআন ৮:২</div>
  <div class="verse en">"The believers are only those who, when Allah is mentioned, their hearts become fearful, and when His verses are recited to them, it increases them in faith." — Quran 8:2</div>
  <div class="checklist">
    <li>তোমার একটা লক্ষ্যকে পরিচয়ে রূপান্তর করো ('পড়বো' → 'আমি পাঠক')</li>
    <li>প্রতিদিন একটা ছোট কাজ দিয়ে 'ভোট দাও'</li>
    <li>একটা জার বা ক্যালেন্ডারে প্রমাণ জমিয়ে রাখো</li>
    <li>লক্ষ্য পূরণ হলে থেকো না — পরিচয় ধরে রাখো</li>
    <li>যখন মন না চাইবে — নিজেকে জিজ্ঞেস করো: 'একজন পাঠক এখন কী করতো?'</li>
    <li>'আমি কে?' — এই প্রশ্নটা প্রতিদিন নিজেকে করো</li>
  </div>
  <div class="diagram">
    <div class="diag-title">পরিচয়ের নোঙর · 3 Levels of Change</div>
    <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowD10" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#c4b5fd"/></marker>
      </defs>
      <polygon points="280,30 460,190 100,190" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="1.5"/>
      <rect class="cell-hot" x="220" y="40" width="120" height="40" rx="6"/>
      <text class="lbl-hot" x="280" y="58" text-anchor="middle">পরিচয়</text>
      <text class="lbl-sm" x="280" y="72" text-anchor="middle">"আমি কে?"</text>
      <rect class="cell-cyan" x="170" y="100" width="220" height="40" rx="6"/>
      <text class="lbl-cyan" x="280" y="118" text-anchor="middle">প্রক্রিয়া</text>
      <text class="lbl-sm" x="280" y="132" text-anchor="middle">"আমি কী করি?"</text>
      <rect class="cell-good" x="120" y="160" width="320" height="40" rx="6"/>
      <text class="lbl-leaf" x="280" y="178" text-anchor="middle">লক্ষ্য</text>
      <text class="lbl-sm" x="280" y="192" text-anchor="middle">"আমি কী চাই?"</text>
      <text class="lbl-hot" x="455" y="195" text-anchor="middle" style="font-size:10px">গভীর</text>
      <text class="lbl-sm" x="100" y="195" text-anchor="end">উপরিভাগ</text>
      <rect class="cell-purple" x="20" y="200" width="0" height="0"/>
      <text class="lbl-amber" x="280" y="222" text-anchor="middle">পরিচয় আগে, আচরণ পরে · প্রতিটা কাজ একটা ভোট (Bem 1972)</text>
    </svg>
    <div class="diag-cap">লক্ষ্য শেষ হয়, পরিচয় শেষ হয় না।</div>
  </div>
  
  <div class="secret-box">
    <div class="secret-icon">🧭</div>
    <div class="secret-line">লক্ষ্য বলো না কী করবে — পরিচয় বলো কে তুমি।</div>
    <div class="secret-why">কারণ লক্ষ্য শেষ হয়, পরিচয় শেষ হয় না। তুমি যা করো, তুমি তা হয়ে যাও — self-perception theory। প্রতিটা কাজ একটা ভোট। ভোট জমলে পরিচয় শক্ত হয়। শক্ত পরিচয় আচরণ চালায় — ইচ্ছাশক্তি ছাড়াই।</div>
  
</div>`,
  senior: {
    title: "আজই পরিচয় বেছে নাও — Choose Your Identity",
    body: "<p>আজ একটা কাগজে লেখো:<br><strong>'আমি [ ]'</strong> — ফাঁকা জায়গায় তুমি কে হতে চাও তা পূরণ করো।<br><br>উদাহরণ:<br>'আমি পাঠক।' → আজ এক পৃষ্ঠা পড়ো। একটা ভোট।<br>'আমি সুস্থ ব্যক্তি।' → আজ ৫ মিনিট হাঁটো। একটা ভোট।<br>'আমি শিক্ষার্থী।' → আজ একটা নতুন জিনিস শিখো। একটা ভোট।<br><br>প্রতিদিন একটা ভোট। এক মাসে ৩০টা। তুমি আর লক্ষ্য খুঁজছো না — তুমি পরিচয় হয়ে যাচ্ছো।</p>"
  }
});
