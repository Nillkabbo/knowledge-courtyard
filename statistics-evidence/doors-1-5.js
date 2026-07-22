// ════════════════════════════════════════
// প্রমাণের দাঁড়িপাল্লা — DOORS 1-5
// The Scale of Evidence: Nature of Evidence → Descriptive Stats → Distributions → Hypothesis Testing → Confidence Intervals
// ════════════════════════════════════════
const doors = [];

doors.push({
  num: 1,
  icon: "🔍",
  color: "#2dd4bf",
  name: "প্রমাণের বীজ",
  subtitle: "The Seed of Evidence",
  tech: "Deductive, Inductive, and Abductive Evidence — From Claim to Proof",
  spirit: "বুরহান — সুস্পষ্ট প্রমাণ, দাবি থেকে সত্যে যাত্রা",
  secret: "দাবি সসীম, প্রমাণ অসীম — যে প্রমাণ দেখাতে পারে, সেই সত্য কথা বলে।",
  recall: {
    q: "Al-Kindi-এর ফ্রিকোয়েন্সি বিশ্লেষণ কী আবিষ্কার করেছিল এবং কেন এটি পরিসংখ্যানের প্রথম পদক্ষেপ?",
    qen: "What did Al-Kindi's frequency analysis discover, and why is it the first step of statistics?",
    a: "ভাষায় প্রতিটি অক্ষরের উপস্থিতির হার স্থির — আরবিতে 'আলিফ' সবচেয়ে বেশি, 'ক্বফ' কম। এই প্যাটার্ন দিয়ে সাংকেতিক লেখা ভাঙা যায়। এটি প্রথমবার দেখায় — প্যাটার্ন বোঝা = সত্য খোঁজা।",
    aen: "Each letter's frequency in a language is stable — Arabic 'alif' is most common, 'qaf' less so. This pattern breaks ciphers. It shows for the first time — understanding patterns = finding truth."
  },
  story: `<p class="scene-setting">বাগদাদ, ৮৫০ খ্রিস্টাব্দ। বাইতুল হিকমাতের গন্ধযুক্ত ঘরে বসে আছেন একজন বৃদ্ধ ব্যক্তি — ইউসুফ ইয়াকুব ইবনে ইসহাক আল-কিন্দি। তাঁর আঙুলের ডগায় কালির দাগ, চোখে ক্লান্তি, কিন্তু মুখে একটা প্রশান্তির হাসি। সামনে একটা সাংকেতিক চিঠি — যা কেউ পড়তে পারছে না।</p>

  <p class="scene-setting en">Baghdad, 850 CE. In the scented halls of the House of Wisdom sits an elderly man — Abu Yusuf Ya'qub ibn Ishaq al-Kindi. Ink stains on his fingertips, weariness in his eyes, but a serene smile. Before him: a ciphered letter no one could read.</p>

  <div class="dialogue">
    <p><strong>আল-কিন্দি:</strong> তুমি ভাবো এই লেখা অদ্ভুত, এলোমেলো, অর্থহীন। কিন্তু আমি বলছি — প্রতিটা ভাষার একটা নিজস্ব ছন্দ আছে। আরবিতে 'আলিফ' (ا) সবচেয়ে বেশি আসে, 'ক্বফ' (ق) কম। এই ছন্দ ভাঙলেই সাংকেতিক লেখা পড়া যায়।</p>
    <p><strong>তুমি:</strong> কীভাবে? এই অক্ষরগুলো তো এলোমেলো!</p>
    <p><strong>আল-কিন্দি:</strong> এলোমেলো নয়। গণনা করো। প্রতিটা প্রতীক কতবার আসছে — সেটা গুনো। যে প্রতীক সবচেয়ে বেশি আসছে, সেটা সম্ভবত 'আলিফ'। যেটা সবচেয়ে কম, সেটা হয়তো 'ক্বফ'। ভাষার প্যাটার্ন সবসময় একই থাকে। প্যাটার্ন ধরলেই — সত্য বেরিয়ে আসে।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Al-Kindi:</strong> You think this text is strange, random, meaningless. But I say — every language has a rhythm. In Arabic, 'alif' (ا) appears most, 'qaf' (ق) less. Break this rhythm and the cipher reveals itself.</p>
    <p><strong>You:</strong> How? These symbols are random!</p>
    <p><strong>Al-Kindi:</strong> Not random. Count. Count how many times each symbol appears. The most frequent is probably 'alif.' The least, perhaps 'qaf.' A language's pattern is always the same. Catch the pattern — truth emerges.</p>
  </div>

  <p class="scene-setting">তুমি গণনা শুরু করলে। একটা দুটো নয় — শত শত প্রতীক। আঙুলে কালি, কপালে ঘাম। কিন্তু ধীরে ধীরে একটা প্যাটার্ন ফুটে উঠল। একটা প্রতীক বারবার আসছে — ১৮%, আরেকটা মাত্র ১%। আল-কিন্দি হাসলেন। সেদিন প্রথমবার মানুষ প্রমাণ করল — সংখ্যা দিয়ে গোপন সত্য উন্মোচন করা যায়।</p>

  <p class="scene-setting en">You begin counting. Not one or two — hundreds of symbols. Ink on fingers, sweat on brow. But slowly a pattern emerges. One symbol appears again and again — 18%, another barely 1%. Al-Kindi smiled. That day, for the first time, a human proved — numbers can reveal hidden truth.</p>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> আল-কিন্দি (c. ৮০১–৮৭৩) বাইতুল হিকমাতে (House of Wisdom) কাজ করতেন। তাঁকে 'ফিলাসফাত আল-আরব' (ফিলোসফার অফ দ্য আরবস) বলা হয়। তাঁর গ্রন্থে — যা 'রিসালাহ ফি ইস্তিখরাজ আল-মুআম্মা' (A Manuscript on Deciphering Cryptographic Messages) নামে পরিচিত — তিনি ফ্রিকোয়েন্সি বিশ্লেষণের বর্ণনা দিয়েছেন। এটি পরিসংখ্যান ও ক্রিপ্টোগ্রাফির ইতিহাসে সবচেয়ে প্রাচীন পদ্ধতিগত বিশ্লেষণ।</div></div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৩৩ (যুক্তির তাঁত) Door ৪-এ তুমি Bayesian Updating শিখেছিলে — আগের ধারণা আপডেট করা নতুন প্রমাণ দিয়ে। আল-কিন্দির ফ্রিকোয়েন্সি বিশ্লেষণ হলো সেই একই নীতির প্রাচীন রূপ — প্রতিটা নতুন গণনা তোমার ধারণাকে আপডেট করে: 'এই প্রতীকটা বোধহয় আলিফ' → 'না, পরিসংখ্যান বলছে এটা লাম।' এটাই পরিসংখ্যানের বীজ।</div></div>

  <div class="diagram">
    <div class="diag-title">দৃষ্টান্তমূলক প্রমাণের ত্রয়ী — Three Modes of Evidence</div>
    <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2dd4bf"/>
        </marker>
      </defs>
      <!-- Three columns -->
      <rect class="cell-cyan" x="20" y="30" width="160" height="70" rx="12"/>
      <text class="lbl-cyan" x="100" y="55" text-anchor="middle" font-weight="700">নিগমন / Deductive</text>
      <text class="lbl-sm" x="100" y="75" text-anchor="middle">সাধারণ → বিশেষ</text>
      <text class="lbl-sm" x="100" y="90" text-anchor="middle">All ravens are black →</text>
      <text class="lbl-sm" x="100" y="102" text-anchor="middle">this raven is black</text>

      <rect class="cell-hot" x="200" y="30" width="160" height="70" rx="12"/>
      <text class="lbl-hot" x="280" y="55" text-anchor="middle" font-weight="700">আগমন / Inductive</text>
      <text class="lbl-sm" x="280" y="75" text-anchor="middle">বিশেষ → সাধারণ</text>
      <text class="lbl-sm" x="280" y="90" text-anchor="middle">1000 ravens observed →</text>
      <text class="lbl-sm" x="280" y="102" text-anchor="middle">all ravens are probably black</text>

      <rect class="cell-leaf" x="380" y="30" width="160" height="70" rx="12"/>
      <text class="lbl-leaf" x="460" y="55" text-anchor="middle" font-weight="700">অভিন্নকরণ / Abductive</text>
      <text class="lbl-sm" x="460" y="75" text-anchor="middle">ফলাফল → সম্ভাব্য কারণ</text>
      <text class="lbl-sm" x="460" y="90" text-anchor="middle">Wet grass → probably</text>
      <text class="lbl-sm" x="460" y="102" text-anchor="middle">it rained (best explanation)</text>

      <!-- Arrows down -->
      <line class="edge-cyan" x1="100" y1="105" x2="100" y2="145" marker-end="url(#arrTeal1)"/>
      <line class="edge-hot" x1="280" y1="105" x2="280" y2="145" marker-end="url(#arrTeal1)"/>
      <line class="edge-amber" x1="460" y1="105" x2="460" y2="145" marker-end="url(#arrTeal1)"/>

      <!-- Bottom: convergence -->
      <rect class="cell" x="120" y="150" width="320" height="60" rx="12"/>
      <text class="lbl" x="280" y="175" text-anchor="middle" font-weight="700" font-size="14">পরিসংখ্যান হলো তিনটের সংযোগ</text>
      <text class="lbl-sm" x="280" y="193" text-anchor="middle">Statistics = the bridge where evidence meets uncertainty</text>

      <!-- Al-Kindi note -->
      <text class="lbl-sm" x="280" y="235" text-anchor="middle" font-style="italic">আল-কিন্দি (c. ৮৫০): গণনা করো → প্যাটার্ন দেখো → সত্যে পৌঁছাও</text>
    </svg>
    <div class="diag-cap">পরিসংখ্যান তিন ধরনের প্রমাণকে একত্র করে — নিগমন (গ্যারান্টিযুক্ত সিদ্ধান্ত), আগমন (সম্ভাব্য সাধারণীকরণ), অভিন্নকরণ (সেরা ব্যাখ্যা)। আল-কিন্দির ফ্রিকোয়েন্সি বিশ্লেষণ ছিল আগমনের প্রথম রূপ।</div>
  </div>

  <div class="code-block">
    <h4>🔬 প্রমাণের তিন ধরন — Three Types of Evidence</h4>
    <table class="kv-table">
      <tr><th>ধরন</th><th>দিক</th><th>উদাহরণ</th><th>নিশ্চয়তা</th></tr>
      <tr><td class="hl">নিগমন (Deductive)</td><td>সাধারণ → বিশেষ</td><td>সব কাক কালো → এই কাকও কালো</td><td class="hl">১০০% (যদি সত্য হয়)</td></tr>
      <tr><td class="hl">আগমন (Inductive)</td><td>বিশেষ → সাধারণ</td><td>১০০০ কাক দেখলাম সব কালো → সম্ভবত সব কাক কালো</td><td>সম্ভাব্য (৯৯%?)</td></tr>
      <tr><td class="hl">অভিন্নকরণ (Abductive)</td><td>ফলাফল → কারণ</td><td>ঘাস ভেজা → সম্ভবত বৃষ্টি হয়েছে</td><td>সর্বোত্তম অনুমান</td></tr>
    </table>
    <br>
    <p>আল-কিন্দির ফ্রিকোয়েন্সি বিশ্লেষণ ছিল <strong>আগমন</strong> — শত শত প্রতীক গণনা করে সাধারণ নিয়ম তৈরি করা। এটিই পরিসংখ্যানের কাজ: সসীম পর্যবেক্ষণ থেকে অসীম সত্যের দিকে যাত্রা।</p>
    <p><strong>ইতিহাসে নোট:</strong> আল-কিন্দি (c. ৮০১–৮৭৩, বাগদাদ) কেবল ক্রিপ্টোগ্রাফি নয় — তিনি দর্শন, গণিত, চিকিৎসা, সঙ্গীতে অবদান রেখেছেন। তাঁকে 'ফিলাসফাত আল-আরব' (Arabs-এর দার্শনিক) বলা হয়।</p>
  </div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ প্রমাণ ছাড়া দাবি</div>
      আমার মাটির হাঁড়ি আগুনে পোড়ে না। কীভাবে জানবে? আমি বলছি! — দাবি মাত্র, পরীক্ষা নেই।
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ প্রমাণের সাথে দাবি</div>
      এই হাঁড়িটা আগুনে রাখলাম। ৩ মিনিট পর ফাটল ধরল। — পরীক্ষা দ্বারা প্রমাণিত, সংখ্যায় নির্ভুল।
    </div>
  </div>

  <div class="verse">
    <div class="verse-arabic">يَا أَيُّهَا النَّاسُ قَدْ جَاءَكُم بُرْهَانٌ مِّن رَّبِّكُمْ</div>
    <div class="verse-translation">হে মানুষ! তোমাদের কাছে তোমাদের রবের পক্ষ থেকে একটি সুস্পষ্ট প্রমাণ এসেছে।</div>
    <div class="verse-ref">— কুরআন ৪:১৭৪</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🔍</div>
    <div class="secret-text">গণনা করো, প্যাটার্ন দেখো — গোপন সত্য নিজে বেরিয়ে আসে।</div>
    <div class="secret-sub">Count, observe patterns — hidden truth reveals itself.</div>
  </div>`,
  senior: {
    title: "প্রমাণ ছাড়া কোনো দাবি গ্রহণ করো না",
    body: `<p><strong>১. প্রতিটা দাবি জিজ্ঞেস করো:</strong> প্রমাণ কোথায়? কতগুলো উদাহরণ? কোন ধরনের প্রমাণ — নিগমন, আগমন, অভিন্নকরণ?</p>
    <p><strong>২. আগমনের সীমা বোঝো:</strong> ১০০টা উদাহরণ থেকে সাধারণ নিয়ম তৈরি করা যায়, কিন্তু ১০১তম উদাহরণ ভাঙতে পারে। কালো রাজহাঁসের গল্প।</p>
    <p><strong>৩. ফ্রিকোয়েন্সি মানসিকতা:</strong> যেকোনো সমস্যায় প্রথম প্রশ্ন — এখানে কী প্যাটার্ন আছে? বারবার কী ঘটছে? সংখ্যা কী বলছে?</p>`
  }
});

doors.push({
  num: 2,
  icon: "📊",
  color: "#5eead4",
  name: "মৃত্যুর হিসাব",
  subtitle: "The Ledger of Deaths",
  tech: "Descriptive Statistics — Mean, Median, Variance, and the First Data Table (1662)",
  spirit: "হিসাব — প্রতিটা জীবনের গণনা, সমাজের আয়না",
  secret: "সসীম সংখ্যায় অসীম সত্য — একটা ডেটা টেবিল একটা শহরের কাহিনি বলে।",
  recall: {
    q: "John Graunt (১৬৬২) কেন প্রথম পরিসংখ্যানবিদ বলা হয়? তিনি কী আবিষ্কার করেছিলেন?",
    qen: "Why is John Graunt (1662) called the first statistician? What did he discover?",
    a: "তিনি লন্ডনের মৃত্যুর বিল (Bills of Mortality) বছরের পর বছর সংগ্রহ করে একটা টেবিল বানালেন — কত মানুষ মারা যাচ্ছে, কী কারণে, কোন বয়সে। এটাই ইতিহাসের প্রথম জীবন-সারণি (life table)। একজন হাবারড্যাশার (দোকানদার) বিজ্ঞানের ইতিহাস বদলে দিলেন।",
    aen: "He collected London's Bills of Mortality year after year, made a table — how many die, from what cause, at what age. This is history's first life table. A haberdasher changed science."
  },
  story: `<p class="scene-setting">লন্ডন, ১৬৬২। একটা ছোট দোকানে বসে আছেন জন গ্র্যান্ট (John Graunt) — পেশায় হাবারড্যাশার (বোতাম, ফিতা, সুতার ব্যবসায়ী)। তাঁর টেবিলে পাহাড়ের মতো কাগজ — কিন্তু সেগুলো সুতার হিসাব নয়। সেগুলো লন্ডনের মৃত্যুর হিসাব — Bills of Mortality। প্রতি সপ্তাহে প্যারিশ চার্চ রেকর্ড করত: কে মারা গেল, কী কারণে, কত বয়সে।</p>

  <p class="scene-setting en">London, 1662. John Graunt sits in his small shop — a haberdasher by trade (buttons, ribbons, thread). On his table: mountains of paper — not thread accounts, but London's death records — Bills of Mortality. Each week the parish churches recorded: who died, from what cause, at what age.</p>

  <div class="dialogue">
    <p><strong>গ্র্যান্ট:</strong> প্রতিটা মৃত্যু একটা সংখ্যা। কিন্তু একসাথে দেখো — হাজার হাজার মৃত্যু একটা গল্প বলে। লন্ডনে প্লেগের বছর মৃত্যুর হার ৩ গুণ। শিশুদের মৃত্যুর হার প্রাপ্তবয়স্কদের চেয়ে ৫ গুণ। এই সংখ্যাগুলো কেবল মৃত্যু নয় — এগুলো জীবনের ছবি।</p>
    <p><strong>তুমি:</strong> কিন্তু এই সংখ্যাগুলো দিয়ে কী হবে?</p>
    <p><strong>গ্র্যান্ট:</strong> ভবিষ্যত দেখা যায়। যদি জানি গত ২০ বছরে গড়ে কত শিশু মারা যায় — তাহলে এবার কতটা হাসপাতাল লাগবে হিসাব করতে পারি। যদি জানি কোন এলাকায় মৃত্যু বেশি — তাহলে সেখানে পরিষেবা পাঠাতে পারি। সংখ্যা নীতি বানায়, নীতি জীবন বাঁচায়।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Graunt:</strong> Each death is a number. But together — thousands of deaths tell a story. In plague years, London's death rate triples. Child mortality is 5x adult. These aren't just deaths — they are a portrait of life.</p>
    <p><strong>You:</strong> But what can be done with these numbers?</p>
    <p><strong>Graunt:</strong> You see the future. If I know the average child deaths over 20 years — I can estimate hospital needs. If I know which district has more deaths — I send services there. Numbers make policy, policy saves lives.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> জন গ্র্যান্ট (১৬২০–১৬৭৪) তাঁর বই <em>Natural and Political Observations Made upon the Bills of Mortality</em> (১৬৬২) প্রকাশ করেন। এটি পরিসংখ্যানের ইতিহাসে প্রথম বই। তিনি প্রথম জীবন-সারণি (life table) তৈরি করেন — যা বীমা, জনস্বাস্থ্য, এবং জনমিতির (demography) ভিত্তি। একজন হাবারড্যাশার বিজ্ঞানের একটা নতুন শাখা শুরু করলেন। তাঁকে Royal Society-তে নেওয়া হয় — রাজা দ্বিতীয় চার্লস নিজে তাঁকে সমর্থন দেন, বলেছিলেন আরও এমন 'ট্রেডসম্যান' থাকলে ভালো হয়।</div></div>

  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> গ্র্যান্টের ডেটা নিখুঁত ছিল না। অনেক মৃত্যু রেকর্ড হতো না, কারণ স্পষ্ট ছিল না ('aged' বা 'consumption' ছাড়া আর কিছু লেখা থাকত না)। কিন্তু গ্র্যান্ট বুঝতে পেরেছিলেন — অসম্পূর্ণ ডেটাও সিদ্ধান্তের ভিত্তি হতে পারে, যদি যথেষ্ট বড় হয়। এটাই পরিসংখ্যানের শক্তি এবং সীমা।</div></div>

  <div class="diagram">
    <div class="diag-title">কেন্দ্রীয় প্রবণতা — Measures of Central Tendency</div>
    <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2dd4bf"/>
        </marker>
      </defs>
      <!-- Distribution shape (histogram bars) -->
      <g>
        <rect class="cell-cyan" x="40" y="140" width="40" height="50" rx="2"/>
        <rect class="cell-cyan" x="82" y="100" width="40" height="90" rx="2"/>
        <rect class="cell-hot" x="124" y="70" width="40" height="120" rx="2"/>
        <rect class="cell-hot" x="166" y="55" width="40" height="135" rx="2"/>
        <rect class="cell-hot" x="208" y="60" width="40" height="130" rx="2"/>
        <rect class="cell-cyan" x="250" y="85" width="40" height="105" rx="2"/>
        <rect class="cell-cyan" x="292" y="120" width="40" height="70" rx="2"/>
        <rect class="cell-cyan" x="334" y="150" width="40" height="40" rx="2"/>
        <rect class="cell-cyan" x="376" y="170" width="40" height="20" rx="2"/>
      </g>
      <!-- Mean line -->
      <line class="edge-hot" x1="210" y1="30" x2="210" y2="190" stroke-dasharray="5,3" stroke-width="2"/>
      <text class="lbl-hot" x="210" y="25" text-anchor="middle" font-weight="700">গড় / Mean</text>
      <text class="lbl-sm" x="210" y="205" text-anchor="middle">(x̄ = Σx/n)</text>
      <!-- Median line -->
      <line class="edge-cyan" x1="170" y1="30" x2="170" y2="190" stroke-dasharray="3,3" stroke-width="2"/>
      <text class="lbl-cyan" x="125" y="25" text-anchor="middle" font-weight="700">মধ্যমা / Median</text>
      <text class="lbl-sm" x="125" y="205" text-anchor="middle">(মাঝের মান)</text>
      <!-- Mode -->
      <circle class="node-hot" cx="186" cy="55" r="5"/>
      <text class="lbl-amber" x="270" y="50" font-weight="700">বহুলক / Mode</text>
      <text class="lbl-sm" x="270" y="62">(সবচেয়ে ঘন ঘন)</text>
      <line class="edge-amber" x1="260" y1="55" x2="192" y2="55" stroke-dasharray="2,2"/>
      <!-- Baseline -->
      <line class="axis" x1="30" y1="190" x2="420" y2="190"/>
    </svg>
    <div class="diag-cap">গড় সব মানের যোগফলকে সংখ্যা দিয়ে ভাগ করে। মধ্যমা সাজানো তালিকার মাঝের মান। বহুলক সবচেয়ে বেশি বার আসা মান। গ্র্যান্ট এই তিনটেই ব্যবহার করেছিলেন — মৃত্যুর হারের গডেট, বয়সের মধ্যমা, কারণের বহুলক।</div>
  </div>

  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">৩</div><div class="sc-label">গড়ের প্রকার — Mean, Median, Mode</div></div>
    <div class="stat-card"><div class="sc-num">σ²</div><div class="sc-label">ভ্যারিয়েন্স — ছড়ানোর মাপ</div></div>
    <div class="stat-card"><div class="sc-num">১৬৬২</div><div class="sc-label">গ্র্যান্টের বইয়ের বছর</div></div>
    <div class="stat-card"><div class="sc-num">৮,০০,০০০</div><div class="sc-label">তৎকালীন লন্ডনের জনসংখ্যা (গ্র্যান্টের অনুমান)</div></div>
  </div>

  <div class="code-block">
    <h4>🔬 বর্ণনামূলক পরিসংখ্যান — Descriptive Statistics</h4>
    <table class="kv-table">
      <tr><th>ধারণা</th><th>সংজ্ঞা</th><th>উদাহরণ (গ্র্যান্টের ডেটা)</th></tr>
      <tr><td class="hl">গড় (Mean)</td><td>সব মানের যোগফল ÷ সংখ্যা</td><td>১০০ জনের বয়সের যোগফল ৪০০০ → গড় ৪০ বছর</td></tr>
      <tr><td class="hl">মধ্যমা (Median)</td><td>সাজানো তালিকার মাঝের মান</td><td>বয়স সাজালে ৫০তম ব্যক্তির বয়স</td></tr>
      <tr><td class="hl">বহুলক (Mode)</td><td>সবচেয়ে বেশি বার আসা মান</td><td>সবচেয়ে সাধারণ মৃত্যুর কারণ: 'consumption'</td></tr>
      <tr><td class="hl">ভ্যারিয়েন্স (σ²)</td><td>গড় থেকে ছড়ানোর পরিমাণ</td><td>বয়সের পরিসর যত বেশি, ভ্যারিয়েন্স তত বেশি</td></tr>
      <tr><td class="hl">পরিসর (Range)</td><td>সর্বোচ্চ − সর্বনিম্ন</td><td>০ থেকে ১০০ বছর → পরিসর ১০০</td></tr>
    </table>
    <br>
    <p><strong>গ্র্যান্টের উত্তরাধিকার:</strong> একজন সাধারণ দোকানদার প্রথমবার দেখালেন — সংখ্যা দিয়ে সমাজ বোঝা যায়। তাঁর জীবন-সারণি আধুনিক বীমা, জনস্বাস্থ্য নীতি, এবং জনমিতির ভিত্তি।</p>
    <p><strong>গ্র্যান্টের উপলব্ধি:</strong> গডেট (mean) একা বিভ্রান্তিকর হতে পারে। যদি ৯ জনের আয় ০ এবং ১ জনের ১০০০ — গড় আয় ১০০, কিন্তু বাস্তবে ৯ জন দরিদ্র। মধ্যমা (median) এখানে বেশি সত্যি — ০। এটাই Book ৩৩ Door ৪-এর Bayesian base rate-এর সাথে সংযোগ: সংখ্যা বোঝার আগে বণ্টন (distribution) বুঝতে হবে।</p>
  </div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৩০ (Architect's Compass) Door ৫-এ তুমি Probability & Bayes' Theorem শিখেছিলে। গ্র্যান্টের কাজ হলো সেই Bayes-এর পূর্বশর্ত — বণ্টন না বুঝলে Bayes কাজ করে না। এছাড়া Book ৩১ (Classic ML) Door ৯ Model Evaluation-এ গড় বনাম মধ্যমার গুরুত্ব আবার দেখবে।</div></div>

  <div class="verse">
    <div class="verse-arabic">وَكُلَّ إِنْسَانٍ أَلْزَمْنَاهُ طَائِرَهُ فِي عُنُقِهِ</div>
    <div class="verse-translation">আর প্রতিটি মানুষের কৃতকর্ম আমরা তার গলায় বেঁধে দিয়েছি।</div>
    <div class="verse-ref">— কুরআন ১৭:১৩</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">📊</div>
    <div class="secret-text">সসীম সংখ্যায় অসীম কাহিনি — ডেটা একটা জনগোষ্ঠীর আয়না।</div>
    <div class="secret-sub">In finite numbers, an infinite story — data is a mirror of a people.</div>
  </div>`,
  senior: {
    title: "গড় একা যথেষ্ট নয়",
    body: `<p><strong>১. গড় + মধ্যমা দুটোই দেখো:</strong> গডেট উচ্চ কিন্তু মধ্যমা নিচু? বণ্টন বিষম (skewed)। কয়েকজন অনেক বেশি নিচ্ছে, বাকিরা কম।</p>
    <p><strong>২. ভ্যারিয়েন্স জিজ্ঞেস করো:</strong> গডেট একই হতে পারে, কিন্তু ছড়ানো আলাদা। ৪০±৫ বনাম ৪০±৩০ — প্রথমটা স্থিতিশীল, দ্বিতীয়টা অনিশ্চিত।</p>
    <p><strong>৩. গ্র্যান্টের পাঠ:</strong> ডেটা না থাকলে নীতি অন্ধকারে। কিন্তু ভুল ডেটা আরও খারাপ — কারণ অন্ধকারেও মানুষ দাবি করবে 'আমি দেখছি'। সবসময় জিজ্ঞেস করো: এই সংখ্যা কোথা থেকে এলো?</p>`
  }
});

doors.push({
  num: 3,
  icon: "🔔",
  color: "#2dd4bf",
  name: "ঘণ্টার বক্রতা",
  subtitle: "The Bell Curve",
  tech: "Normal Distribution, Standard Deviation, and the 68-95-99.7 Rule",
  spirit: "সুনান — সৃষ্টিতে স্থাপিত নিয়ম, প্যাটার্নের অদৃশ্য ছন্দ",
  secret: "প্রকৃতি একটা ঘণ্টা বাজায় — মাঝে সবাই, পাশে কেউ কেউ, শেষে প্রায় কেউ নেই।",
  recall: {
    q: "স্বাভাবিক বণ্টনের ৬৮-৯৫-৯৯.৭ নিয়ম কী? একটা উদাহরণ দাও।",
    qen: "What is the 68-95-99.7 rule of the normal distribution? Give an example.",
    a: "গড় থেকে ±১σ ব্যবধানে ৬৮% ডেটা, ±২σ তে ৯৫%, ±৩σ তে ৯৯.৭%। যেমন গড় উচ্চতা ৬৫″ হলে — ৬৮% মানুষ ৬২″-৬৮″ এর মধ্যে, ৯৫% ৫৯″-৭১″ এর মধ্যে। মাত্র ০.৩% এর বাইরে — খুব লম্বা বা খুব খাটো।",
    aen: "Within ±1σ of the mean: 68% of data. ±2σ: 95%. ±3σ: 99.7%. E.g., mean height 65″ — 68% of people are between 62″-68″, 95% between 59″-71″. Only 0.3% beyond — very tall or very short."
  },
  story: `<p class="scene-setting">গটিঙেন, জার্মানি, ১৮০১। রাতের আকাশে একটা নতুন আলো জ্বলে উঠল — Ceres নামের একটা বামন গ্রহ (dwarf planet)। কিন্তু সেটা সূর্যের আলোয় হারিয়ে গেল। পুরো ইউরোপের জ্যোতির্বিজ্ঞানীরা চিন্তিত — গ্রহটা কোথায় গেল? একজন ২৪ বছরের গণিতবিদ একটা অদ্ভুত পদ্ধতি ব্যবহার করলেন — তিনি পূর্বের পর্যবেক্ষণগুলো নিয়ে একটা বক্ররেখা (curve) বানালেন এবং ভবিষ্যতের অবস্থান গণনা করলেন। তাঁর নাম — কার্ল ফ্রিডরিখ গাউস (Carl Friedrich Gauss)।</p>

  <p class="scene-setting en">Göttingen, Germany, 1801. A new light appeared in the night sky — a dwarf planet named Ceres. But it disappeared into the sun's glare. Astronomers across Europe despaired — where did it go? A 24-year-old mathematician used a strange method — he took previous observations, drew a curve, and calculated the future position. His name — Carl Friedrich Gauss.</p>

  <div class="dialogue">
    <p><strong>গাউস:</strong> প্রকৃতির প্রতিটা ঘটনায় একটা প্যাটার্ন আছে। শত শত পরিমাপ নাও — কখনো সব এক হয় না। কিন্তু যদি একটা গ্রাফ বানাও — মানগুলো একটা ঘণ্টার আকার ধারণ করে। মাঝে সবচেয়ে বেশি মান, দুই পাশে কম। এটাই স্বাভাবিক বণ্টন (normal distribution)।</p>
    <p><strong>তুমি:</strong> কেন ঘণ্টার মতো? কেন ত্রিভুজ বা চতুর্ভুজ নয়?</p>
    <p><strong>গাউস:</strong> কারণ প্রকৃতিতে চরম মান বিরল। খুব লম্বা মানুষ কম, খুব খাটোও কম — বেশিরভাগ মাঝারি। খুব বুদ্ধিমান কম, খুব বোকাও কম — বেশিরভাগ মাঝারি। এই ঘণ্টার চূড়া হলো গডেট — সেখানে সবচেয়ে বেশি মান। দুই পাশে বিস্তার — যত দূরে যাবে, তত কম মান।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Gauss:</strong> Every natural phenomenon has a pattern. Take a hundred measurements — they're never identical. But draw a graph — the values form a bell shape. Most values cluster in the middle, fewer at the edges. This is the normal distribution.</p>
    <p><strong>You:</strong> Why a bell? Why not a triangle or rectangle?</p>
    <strong>Gauss:</strong> Because extremes are rare in nature. Very tall people are few, very short are few — most are average. Very smart people are few, very foolish are few — most are in between. The peak of the bell is the mean — most values there. The spread on both sides — the further you go, the fewer the values.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> গাউস (১৭৭৭–১৮৫৫) স্বাভাবিক বণ্টনকে কমপক্ষে-বর্গ (least squares) পদ্ধতির সাথে যুক্ত করেন তাঁর ১৮০৯ সালের কাজে <em>Theoria Motus Corporum Coelestium</em>। তিনি Ceres-এর অবস্থান নিখুঁতভাবে গণনা করেছিলেন — জ্যোতির্বিজ্ঞানী হেনরিখ ওলবার্স (Heinrich Olbers) গাউসের গণনা অনুযায়ী আকাশে খুঁজে পান। গাউস গটিঙেন মানমন্দিরের পরিচালক ছিলেন (১৮০৭–১৮৫৫)। মজার বিষয়: কমপক্ষে-বর্গ পদ্ধতি প্রথম প্রকাশ করেন আদ্রিয়েন-মারি লেজাঁদ্র (Adrien-Marie Legendre) ১৮০৫ সালে — গাউস দাবি করেন তিনি আগে থেকেই ব্যবহার করছিলেন। এই অগ্রাধিকার নিয়ে ইতিহাসে বিতর্ক আছে।</div></div>

  <div class="diagram">
    <div class="diag-title">স্বাভাবিক বণ্টন — The Bell Curve and the 68-95-99.7 Rule</div>
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bellGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#2dd4bf;stop-opacity:0.4"/>
          <stop offset="100%" style="stop-color:#2dd4bf;stop-opacity:0.05"/>
        </linearGradient>
      </defs>
      <!-- Axis -->
      <line class="axis" x1="30" y1="210" x2="530" y2="210"/>
      <!-- Bell curve path -->
      <path d="M 50 210 Q 100 210 140 195 Q 180 180 200 140 Q 220 70 280 30 Q 340 70 360 140 Q 380 180 420 195 Q 460 210 510 210 Z" fill="url(#bellGrad3)" stroke="#5eead4" stroke-width="2"/>
      <!-- σ markers -->
      <line class="grid-line" x1="200" y1="30" x2="200" y2="210" stroke-dasharray="3,3"/>
      <line class="grid-line" x1="240" y1="50" x2="240" y2="210" stroke-dasharray="3,3"/>
      <line class="grid-line" x1="280" y1="30" x2="280" y2="210" stroke-dasharray="3,3"/>
      <line class="grid-line" x1="320" y1="50" x2="320" y2="210" stroke-dasharray="3,3"/>
      <line class="grid-line" x1="360" y1="30" x2="360" y2="210" stroke-dasharray="3,3"/>
      <!-- Labels -->
      <text class="lbl-hot" x="280" y="22" text-anchor="middle" font-weight="700" font-size="14">μ (গডেট)</text>
      <text class="lbl-sm" x="200" y="225" text-anchor="middle">−৩σ</text>
      <text class="lbl-sm" x="240" y="225" text-anchor="middle">−২σ</text>
      <text class="lbl-sm" x="280" y="225" text-anchor="middle">−১σ</text>
      <text class="lbl-sm" x="320" y="225" text-anchor="middle">+১σ</text>
      <text class="lbl-sm" x="360" y="225" text-anchor="middle">+২σ</text>
      <text class="lbl-sm" x="400" y="225" text-anchor="middle">+৩σ</text>
      <!-- Percentage bands -->
      <text class="lbl-cyan" x="300" y="100" text-anchor="middle" font-weight="700" font-size="16">৬৮%</text>
      <text class="lbl-cyan" x="280" y="155" text-anchor="middle" font-size="11">(±১σ)</text>
      <text class="lbl-leaf" x="345" y="170" text-anchor="middle" font-weight="700" font-size="13">৯৫%</text>
      <text class="lbl-leaf" x="345" y="184" text-anchor="middle" font-size="10">(±২σ)</text>
      <text class="lbl-amber" x="395" y="195" text-anchor="middle" font-weight="700" font-size="11">৯৯.৭%</text>
      <text class="lbl-amber" x="395" y="205" text-anchor="middle" font-size="9">(±৩σ)</text>
    </svg>
    <div class="diag-cap">৬৮-৯৫-৯৯.৭ নিয়ম: গডেট থেকে ±১σ ব্যবধানে ৬৮% ডেটা, ±২σ তে ৯৫%, ±৩σ তে ৯৯.৭%। বাইরে মাত্র ০.৩% — চরম বিরল। এটাই প্রকৃতির ছন্দ।</div>
  </div>

  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">৬৮%</div><div class="sc-label">গডেট থেকে ±১σ ব্যবধানে</div></div>
    <div class="stat-card"><div class="sc-num">৯৫%</div><div class="sc-label">±২σ ব্যবধানে</div></div>
    <div class="stat-card"><div class="sc-num">৯৯.৭%</div><div class="sc-label">±৩σ ব্যবধানে</div></div>
    <div class="stat-card"><div class="sc-num">০.৩%</div><div class="sc-label">চরম মান — খুবই বিরল</div></div>
  </div>

  <div class="code-block">
    <h4>🔬 স্বাভাবিক বণ্টন — Key Formulas</h4>
    <table class="kv-table">
      <tr><th>ধারণা</th><th>সংকেত</th><th>অর্থ</th></tr>
      <tr><td class="hl">গডেট (Mean)</td><td>μ (মিউ)</td><td>ডেটার কেন্দ্র — সবচেয়ে সম্ভাব্য মান</td></tr>
      <tr><td class="hl">প্রমাণ ব্যবধান (Std Dev)</td><td>σ (সিগমা)</td><td>গডেট থেকে ছড়ানোর পরিমাণ</td></tr>
      <tr><td class="hl">ভ্যারিয়েন্স (Variance)</td><td>σ²</td><td>σ এর বর্গ — ছড়ানোর ক্ষেত্রফল</td></tr>
      <tr><td class="hl">Z-স্কোর</td><td>z = (x − μ) / σ</td><td>একটা মান গডেট থেকে কত σ দূরে</td></tr>
    </table>
    <br>
    <p><strong>বাস্তব উদাহরণ:</strong> IQ টেস্টে গডেট ১০০, σ = ১৫।</p>
    <p>• ৬৮% মানুষের IQ ৮৫–১১৫ (গডেট ± ১σ)</p>
    <p>• ৯৫% মানুষের IQ ৭০–১৩০ (± ২σ)</p>
    <p>• মাত্র ২.৩% মানুষের IQ ১৩০-এর ওপরে (+১σ ছাড়িয়ে)</p>
    <p>• মাত্র ০.১৩% মানুষের IQ ১৪৫-এর ওপরে (+৩σ)</p>
    <br>
    <p><strong>গাউসের সংযোগ:</strong> গাউস Ceres-এর অবস্থান গণনা করেছিলেন পূর্বের পর্যবেক্ষণের অনিশ্চয়তা (uncertainty) মডেল করে। তিনি বুঝেছিলেন — পরিমাপের ত্রুটি এলোমেলো নয়, এটা স্বাভাবিক বণ্টন অনুসরণ করে। বেশিরভাগ ত্রুটি ছোট (ঘণ্টার মাঝে), বড় ত্রুটি বিরল (ঘণ্টার লেজে)।</p>
  </div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৩০ (Architect's Compass) Door ৬-এ Statistics & Distributions শিখেছিলে — গাউসের বক্রতা সেই একই ধারণার গভীরে যাওয়া। Book ৩১ (Classic ML) Door ৮ Bias-Variance Tradeoff — সেখানে σ² (ভ্যারিয়েন্স) বনাম bias এর ভারসাম্য দেখেছিলে। এখন বুঝতে পারো কেন ভ্যারিয়েন্স এত গুরুত্বপূর্ণ।</div></div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ব্যাখ্যা</div>
      এই ছেলের IQ ১৪০ — সে প্রতিটা বিষয়ে প্রতিভাবান! কারণ ১৪০ অনেক উঁচু।
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ব্যাখ্যা</div>
      IQ ১৪০ মানে z = (১৪০−১০০)/১৫ = ২.৬৭σ — জনসংখ্যার মাত্র ০.৪% এই স্তরে। কিন্তু একটা নির্দিষ্ট বিষয়ে পারদর্শিতা আলাদা — IQ সব ক্ষেত্রে সমান নয়।
    </div>
  </div>

  <div class="verse">
    <div class="verse-arabic">إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ</div>
    <div class="verse-translation">নিশ্চয় আসমান ও পৃথিবীর সৃষ্টিতে, রাত ও দিনের পরিবর্তনে, বোদ্ধাদের জন্য নিদর্শন রয়েছে।</div>
    <div class="verse-ref">— কুরআন ৩:১৯০</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🔔</div>
    <div class="secret-text">প্রকৃতি একটা ঘণ্টা বাজায় — মাঝে সবাই, পাশে কেউ কেউ।</div>
    <div class="secret-sub">Nature rings a bell — most in the middle, few at the edges.</div>
  </div>`,
  senior: {
    title: "বণ্টন না দেখে সিদ্ধান্ত নেবে না",
    body: `<p><strong>১. প্রথম প্রশ্ন — বণ্টন কীরকম?</strong> স্বাভাবিক (ঘণ্টা)? বিষম (একদিকে ঝুঁকে)? দ্বি-শৃঙ্গ (দুই চূড়া)? বণ্টন না জানলে গডেট বিভ্রান্তিকর।</p>
    <p><strong>২. Z-স্কোর ব্যবহার করো:</strong> যেকোনো মানকে গডেট থেকে কতদূর তা মাপতে। z > ২ বা z < −২ মানে অস্বাভাবিক।</p>
    <p><strong>৩. চরম মান সন্দেহ করো:</strong> ±৩σ এর বাইরে কিছু পেলে — হয় সত্যিই বিরল, নয়তো পরিমাপে ভুল। গাউস নিজেই Ceres-এর পর্যবেক্ষণে এটা খুঁজেছিলেন।</p>`
  }
});

doors.push({
  num: 4,
  icon: "⚖️",
  color: "#5eead4",
  name: "শূন্যের পরীক্ষা",
  subtitle: "The Test of the Null",
  tech: "Hypothesis Testing, p-value, and Statistical Significance (Fisher, 1925)",
  spirit: "ফুরকান — সত্য ও মিথ্যার মধ্যে পার্থক্যকারী মানদণ্ড",
  secret: "প্রমাণ করো না যে তুমি ঠিক — চেষ্টা করো প্রমাণ করতে যে তুমি ভুল। যদি ভুল প্রমাণ না হও — তবে হয়তো তুমি ঠিক।",
  recall: {
    q: "p-value কী এবং Fisher ০.০৫ সীমা কেন বেছেছিলেন?",
    qen: "What is a p-value and why did Fisher choose the 0.05 threshold?",
    a: "p-value হলো সম্ভাবনা যে এই ফলাফল বা তার চেয়ে চরম — শূন্য অনুকল্প সত্য হলে। Fisher ০.০৫ বেছেছিলেন কারণ এটি ১৯৬-এর কাছাকাছি — ২ প্রমাণ-ব্যবধান। ২০ বারে ১ বার সম্ভাবনা — যথেষ্ট অসম্ভাব্য।",
    aen: "p-value is the probability of this result or more extreme — if the null hypothesis is true. Fisher chose 0.05 because it approximates 1.96 — 2 standard deviations. A 1-in-20 chance — sufficiently unlikely."
  },
  story: `<p class="scene-setting">হার্পেনডেন, ইংল্যান্ড, ১৯২০-এর দশক। Rothamsted Experimental Station-এ একজন বিজ্ঞানী আলু চাষ নিয়ে হিসাব করছেন। তাঁর নাম — রোনাল্ড আইলমার ফিশার (Ronald Aylmer Fisher)। সামনে দুই ধরনের আলু — একটাতে সার দেওয়া হয়েছে, আরেকটাতে না। প্রশ্ন: সার দেওয়া আলুর ফলন সত্যিই বেশি, নাকি কেবল কাকতালীয়?</p>

  <p class="scene-setting en">Harpenden, England, 1920s. At the Rothamsted Experimental Station, a scientist is calculating potato yields. His name — Ronald Aylmer Fisher. Before him: two types of potatoes — one fertilized, one not. Question: is the fertilized potato truly higher-yielding, or just coincidence?</p>

  <div class="dialogue">
    <p><strong>ফিশার:</strong> তুমি বললে সার দেওয়া আলু বেশি ফলেছে। কিন্তু কত বেশি? যদি গডেট থেকে সামান্য বেশি — হয়তো কাকতালীয়। যদি অনেক বেশি — সম্ভবত সত্যিকারের পার্থক্য। কিন্তু 'অনেক বেশি' মানে কত? এখানেই পরিসংখ্যান প্রয়োজন।</p>
    <p><strong>তুমি:</strong> তাহলে কীভাবে জানব পার্থক্য সত্যি?</p>
    <p><strong>ফিশার:</strong> একটা অদ্ভুত কৌশল ব্যবহার করো। ধরে নাও পার্থক্য নেই — সার দিলেও না দিলেও একই। এটাই শূন্য অনুকল্প (null hypothesis)। এখন প্রশ্ন: যদি শূন্য সত্যি হয় — তাহলে তুমি যে পার্থক্য দেখলে তার সম্ভাবনা কত? যদি সম্ভাবনা খুব কম (৫%-এর কম) — তবে শূন্য অনুকল্প প্রত্যাখ্যান করো। পার্থক্য সত্যি।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Fisher:</strong> You say fertilized potatoes yielded more. But how much more? If slightly above average — perhaps coincidence. If much more — likely a real difference. But what does 'much more' mean? This is where statistics enters.</p>
    <p><strong>You:</strong> Then how do I know the difference is real?</p>
    <p><strong>Fisher:</strong> Use a strange trick. Assume there is NO difference — fertilizer or not, same yield. This is the null hypothesis. Now the question: if the null is true — what's the probability of seeing the difference you observed? If the probability is very low (below 5%) — reject the null. The difference is real.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক নির্ভুলতা:</strong> ফিশার (১৮৯০–১৯৬২) তাঁর বই <em>Statistical Methods for Research Workers</em> (১৯২৫)-এ p-value জনপ্রিয় করেন এবং ০.০৫ সীমা প্রস্তাব করেন। <strong>কিন্তু তিনি p-value আবিষ্কার করেননি।</strong> কার্ল পিয়ার্সন (Karl Pearson) ১৯০০ সালে তাঁর কাই-বর্গ (chi-squared) পরীক্ষায় P সংকেত চালু করেন। ফিশার সেটাকে প্রতিষ্ঠিত ও প্রচলিত করেন। তিনি Rothamsted-এ ১৯১৯–১৯৩৩ সাল পর্যন্ত কাজ করেন — সেখানেই আনুমানিক বৈচিত্র্য বিশ্লেষণ (ANOVA) আবিষ্কার করেন।</div></div>

  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুল বোঝাবুঝি:</strong> p-value বলে না যে শূন্য অনুকল্প সত্যি না মিথ্যা। p-value বলে — শূন্য সত্যি হলে এই ফলাফল কতটা অসম্ভাব্য। ছোট p-value = ফলাফল অস্বাভাবিক, শূন্য সন্দেহজনক। বড় p-value = ফলাফল স্বাভাবিক, শূন্য গ্রহণযোগ্য। এটা 'সত্যতার প্রমাণ' নয় — এটা 'অস্বাভাবিকতার মাপ'।</div></div>

  <div class="diagram">
    <div class="diag-title">p-value এবং গুরুত্বপূর্ণ সীমা — Visualizing the p-value</div>
    <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bellGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#2dd4bf;stop-opacity:0.35"/>
          <stop offset="100%" style="stop-color:#2dd4bf;stop-opacity:0.03"/>
        </linearGradient>
      </defs>
      <!-- Null distribution (centered) -->
      <path d="M 50 200 Q 120 200 160 180 Q 200 160 220 120 Q 240 60 280 40 Q 320 60 340 120 Q 360 160 400 180 Q 440 200 510 200 Z" fill="url(#bellGrad4)" stroke="#5eead4" stroke-width="2"/>
      <!-- Right tail (rejection region) -->
      <path d="M 430 200 Q 450 198 470 190 Q 490 180 510 200 Z" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444" stroke-width="1.5"/>
      <!-- Left tail -->
      <path d="M 50 200 Q 70 198 90 190 Q 110 180 130 200 Z" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444" stroke-width="1.5"/>
      <!-- Threshold lines -->
      <line class="grid-line" x1="130" y1="40" x2="130" y2="200" stroke-dasharray="4,3" stroke="#ef4444" stroke-width="1.5"/>
      <line class="grid-line" x1="430" y1="40" x2="430" y2="200" stroke-dasharray="4,3" stroke="#ef4444" stroke-width="1.5"/>
      <!-- Observed value marker -->
      <circle class="node-hot" cx="455" cy="190" r="6"/>
      <text class="lbl-hot" x="455" y="180" text-anchor="middle" font-weight="700">x̄</text>
      <!-- Labels -->
      <text class="lbl-sm" x="280" y="30" text-anchor="middle" font-weight="700" font-size="13">শূন্য অনুকল্প বণ্টন (H₀)</text>
      <text class="lbl-amber" x="470" y="225" text-anchor="middle" font-weight="700">α = ০.০৫</text>
      <text class="lbl-amber" x="90" y="225" text-anchor="middle" font-weight="700">α = ০.০৫</text>
      <text class="lbl-hot" x="480" y="145" text-anchor="start" font-size="11">p < ০.০৫</text>
      <text class="lbl-hot" x="480" y="158" text-anchor="start" font-size="10">(প্রত্যাখ্যান এলাকা)</text>
      <text class="lbl-sm" x="280" y="220" text-anchor="middle">গ্রহণ এলাকা (৯৫%)</text>
      <!-- Axis -->
      <line class="axis" x1="30" y1="200" x2="530" y2="200"/>
    </svg>
    <div class="diag-cap">শূন্য অনুকল্প (H₀) ধরে নেওয়া হলো বণ্টন। যদি পর্যবেক্ষিত মান (x̄) লেজে পড়ে (p < ০.০৫) — H₀ প্রত্যাখ্যান করো। মাঝে পড়ে — H₀ গ্রহণ করো।</div>
  </div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ব্যাখ্যা</div>
      p = ০.০৪ মানে ৯৬% সম্ভাবনা যে আমার অনুকল্প সত্যি!
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ব্যাখ্যা</div>
      p = ০.০৪ মানে — শূন্য অনুকল্প সত্যি হলে, এই ফলাফল বা তার চেয়ে চরম পাওয়ার সম্ভাবনা মাত্র ৪%। অর্থাৎ ফলাফল অস্বাভাবিক — কিন্তু এটা অনুকল্প সত্যি প্রমাণ করে না।
    </div>
  </div>

  <div class="code-block">
    <h4>🔬 অনুকল্প পরীক্ষা — Hypothesis Testing Steps</h4>
    <table class="kv-table">
      <tr><th>ধাপ</th><th>কাজ</th><th>উদাহরণ</th></tr>
      <tr><td class="hl">১. শূন্য অনুকল্প (H₀)</td><td>কোনো পার্থক্য নেই</td><td>সার দিলেও না দিলেও ফলন সমান</td></tr>
      <tr><td class="hl">২. বিকল্প অনুকল্প (H₁)</td><td>পার্থক্য আছে</td><td>সার দিলে ফলন বেশি</td></tr>
      <tr><td class="hl">৩. সীমা (α)</td><td>গুরুত্বপূর্ণ স্তর</td><td>α = ০.০৫ (Fisher, ১৯২৫)</td></tr>
      <tr><td class="hl">৪. পরীক্ষা পরিসংখ্যান</td><td>ডেটা থেকে গণনা</td><td>t-test, chi-square, F-test</td></tr>
      <tr><td class="hl">৫. p-value</td><td>H₀ সত্যি হলে সম্ভাবনা</td><td>p = ০.০৩</td></tr>
      <tr><td class="hl">৬. সিদ্ধান্ত</td><td>p < α → H₀ প্রত্যাখ্যান</td><td>০.০৩ < ০.০৫ → পার্থক্য গুরুত্বপূর্ণ</td></tr>
    </table>
    <br>
    <p><strong>লেডি টিস্টিং টি (Lady Tasting Tea):</strong> ফিশারের সবচেয়ে বিখ্যাত উদাহরণ — তাঁর ১৯৩৫ বই <em>The Design of Experiments</em>-এ বর্ণিত। মুরিয়েল ব্রিস্টল (Muriel Bristol) দাবি করেছিলেন তিনি বলতে পারেন কাপে আগে দুধ ঢালা হয়েছে নাকি চা। ফিশার তাঁকে ৮ কাপ দিলেন — ৪টায় আগে দুধ, ৪টায় আগে চা। ব্রিস্টল সব সঠিক চিনে নিলেন। ফিশার গণনা করলেন — শূন্য অনুকল্প (অনুমান ক্ষমতা নেই) সত্যি হলে এটা ঘটার সম্ভাবনা মাত্র ১/৭০ ≈ ১.৪%। p < ০.০৫ — তাই শূন্য প্রত্যাখ্যান। ব্রিস্টল সত্যিই পারেন।</p>
    <p><strong>টাইমলাইন নোট:</strong> ঘটনাটি ~late 1920s-এ Rothamsted-এ ঘটেছিল, কিন্তু প্রকাশিত হয় ১৯৩৫ সালে।</p>
  </div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ১৬ (The Measure / LLM Evals) Door ২-এ তুমি Evaluation Metrics শিখেছিলে। LLM evaluation-এও একই নীতি — কোনো মডেল ভালো করছে কি না, সেটা p-value দিয়ে যাচাই করা যায়। Book ৩৩ (যুক্তির তাঁত) Door ৩-এ Fallacies শিখেছিলে — p-value ভুল ব্যাখ্যা করাও একটা fallacy।</div></div>

  <div class="verse">
    <div class="verse-arabic">يَوْمَ نَبْعَثُ فِي كُلِّ أُمَّةٍ شَهِيدًا عَلَيْهِمْ</div>
    <div class="verse-translation">যেদিন আমরা প্রতিটি জাতির মধ্যে তাদের বিরুদ্ধে একজন সাক্ষী পাঠাব।</div>
    <div class="verse-ref">— কুরআন ১৬:৮৯</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">⚖️</div>
    <div class="secret-text">নিজেকে ভুল প্রমাণ করার চেষ্টা করো — যদি না পারো, হয়তো তুমি ঠিক।</div>
    <div class="secret-sub">Try to prove yourself wrong — if you can't, perhaps you're right.</div>
  </div>`,
  senior: {
    title: "p-value পবিত্র নয়",
    body: `<p><strong>১. p < ০.০৫ মানে সত্যি নয়:</strong> এটা মাত্র একটা সীমা — মানুষের তৈরি। Fisher নিজেই বলেছিলেন এটা নমনীয়। কখনো ০.০১, কখনো ০.১০।</p>
    <p><strong>২. প্রভাবের আকার (effect size):</strong> p-value বলে পার্থক্য 'আছে কি নেই', কিন্তু কত 'বড়' সেটা বলে না। সবসময় effect size দেখো।</p>
    <p><strong>৩. একাধিক পরীক্ষা:</strong> ২০টা পরীক্ষা করলে কমপক্ষে ১টায় p < ০.০৫ পাবেই — কাকতালীয়। এটাই Door ৯-এ Ioannidis-এর সতর্কতার কারণ।</p>`
  }
});

doors.push({
  num: 5,
  icon: "📐",
  color: "#2dd4bf",
  name: "বিশ্বাস্যতার সীমা",
  subtitle: "The Boundary of Belief",
  tech: "Confidence Intervals — Margin of Error, Precision, and Neyman's 1937 Framework",
  spirit: "যান — যথাযথ অনুমান, নিশ্চিত না হয়ে সম্ভাব্য জ্ঞান",
  secret: "একটা সংখ্যা মিথ্যা বলে — একটা সীমা সত্য বলে। অনুমান কখনো বিন্দু নয়, সীমা।",
  recall: {
    q: "৯৫% confidence interval কী মানে? সাধারণ ভুল ব্যাখ্যা কী?",
    qen: "What does a 95% confidence interval mean? What is the common misinterpretation?",
    a: "৯৫% CI মানে — এই পদ্ধতিতে বারবার নমুনা নিলে, ১০০টার মধ্যে ৯৫টা CI সত্যিকারের মান ধারণ করবে। ভুল ব্যাখ্যা: '৯৫% সম্ভাবনা যে সত্যিকারের মান এই সীমায় আছে' — সত্যিকারের মান স্থির, সীমা পরিবর্তনশীল।",
    aen: "95% CI means — if we repeatedly sample using this method, 95 of 100 CIs will contain the true value. Wrong interpretation: '95% probability the true value is in this range' — the true value is fixed, the interval varies."
  },
  story: `<p class="scene-setting">ওয়ারশ, ১৯৩০। ওয়াক্লাভ পিটকভস্কি (Wacław Pytkowski) নামের একজন কৃষি-অর্থনীতির ছাত্র তাঁর অধ্যাপককে একটা প্রশ্ন করলেন: 'আমি একটা নমুনা থেকে গডেট বের করলাম। কিন্তু এই গডেট কতটা নির্ভুল? পুরো জনগোষ্ঠীর গডেট থেকে কত দূরে?' অধ্যাপক চুপ করে ভাবলেন। তাঁর নাম — জের্জি নেইম্যান (Jerzy Neyman)। সেই রাতে নেইম্যান একটা ধারণা তৈরি করলেন যা পরিসংখ্যানের ইতিহাস বদলে দেবে — বিশ্বাস্যতা-ব্যবধান (confidence interval)।</p>

  <p class="scene-setting en">Warsaw, 1930. Wacław Pytkowski, a student of agricultural economics, asked his professor a question: 'I calculated a mean from a sample. But how precise is it? How far from the true population mean?' The professor thought silently. His name — Jerzy Neyman. That night, Neyman developed an idea that would change statistics — the confidence interval.</p>

  <div class="dialogue">
    <p><strong>নেইম্যান:</strong> তোমার ছাত্রের প্রশ্ন সহজ কিন্তু গভীর। একটা গডেট (point estimate) দিলে — সেটা ঠিক বা ভুল, কিন্তু কতটা ঠিক বা ভুল সেটা বলা যায় না। আমি বলছি — একটা সীমা দাও। গডেট ± কিছু পরিমাণ। এই পরিমাণ নির্ভর করে কতটা নিশ্চিত হতে চাও।</p>
    <p><strong>তুমি:</strong> কীভাবে সীমা নির্ধারণ করব?</p>
    <p><strong>নেইম্যান:</strong> গাউসের বণ্টন ব্যবহার করে। গডেট থেকে ±১.৯৬σ ব্যবধানে সত্যিকারের মান থাকার সম্ভাবনা ৯৫%। এটাই ৯৫% বিশ্বাস্যতা-ব্যবধান — ৯৫% CI। বণ্টনের উপর ভিত্তি করে নির্ভুলতার মাপ দেওয়া যায়।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Neyman:</strong> Your student's question is simple but profound. A point estimate — it's right or wrong, but how right or wrong can't be said. I say — give a range. Mean ± some amount. This amount depends on how confident you want to be.</p>
    <p><strong>You:</strong> How do I determine the range?</p>
    <p><strong>Neyman:</strong> Using Gauss's distribution. Within ±1.96σ of the mean, there's a 95% probability of the true value lying. This is the 95% confidence interval — 95% CI. Based on the distribution, precision can be measured.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> জের্জি নেইম্যান (১৮৯৪–১৯৮১, জন্ম বেন্ডেরি, মলদোভা) ১৯৩৭ সালে তাঁর গবেষণাপত্র <em>"Outline of a Theory of Statistical Estimation Based on the Classical Theory of Probability"</em> দার্শনিক লেনদেনে রয়্যাল সোসাইটি A, খণ্ড ২৩৬, পৃষ্ঠা ৩৩৩–৩৮০-এ বিশ্বাস্যতা-ব্যবধানের পূর্ণ তত্ত্ব প্রকাশ করেন। তিনি প্রথম এই ধারণা ১৯৩৪ সালে উপস্থাপন করেছিলেন। নেইম্যান এবং ইগন পিয়ার্সন (Egon Pearson) একসাথে ১৯৩৩ সালে নেইম্যান-পিয়ার্সন লেম্মা প্রকাশ করেন — যা প্রকার ২ ত্রুটি (Type II error) এবং ক্ষমতা (power) ধারণা চালু করে।</div></div>

  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নেইম্যান-ফিশার দ্বন্দ্ব:</strong> নেইম্যান এবং ফিশার ১৯৩০-এর দশকে লন্ডনের ইউনিভার্সিটি কলেজে একসাথে ছিলেন। দুজনের দর্শন আলাদা ছিল — ফিশার p-value এবং significance testing পছন্দ করতেন; নেইম্যান confidence interval এবং প্রকার ১/২ ত্রুটি পছন্দ করতেন। এই মতবিরোধ দশকের পর দশক স্থায়ী হয় — পরিসংখ্যানের ইতিহাসে সবচেয়ে বিখ্যাত বিতর্কগুলোর একটি।</div></div>

  <div class="diagram">
    <div class="diag-title">বিশ্বাস্যতা-ব্যবধান — How CI Works Across Repeated Samples</div>
    <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal5" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2dd4bf"/>
        </marker>
      </defs>
      <!-- True value line -->
      <line class="edge-hot" x1="280" y1="20" x2="280" y2="240" stroke-dasharray="6,3" stroke-width="2"/>
      <text class="lbl-hot" x="280" y="15" text-anchor="middle" font-weight="700">সত্যিকারের মান (μ)</text>
      <!-- CI bars (some capture, some miss) -->
      <!-- Bar 1: captures -->
      <line class="edge-cyan" x1="210" y1="50" x2="350" y2="50" stroke-width="3"/>
      <line class="edge-cyan" x1="210" y1="45" x2="210" y2="55" stroke-width="2"/>
      <line class="edge-cyan" x1="350" y1="45" x2="350" y2="55" stroke-width="2"/>
      <circle class="node-leaf" cx="280" cy="50" r="4"/>
      <text class="lbl-sm" x="180" y="54" text-anchor="end">নমুনা ১ ✓</text>
      <!-- Bar 2: captures -->
      <line class="edge-cyan" x1="240" y1="80" x2="370" y2="80" stroke-width="3"/>
      <line class="edge-cyan" x1="240" y1="75" x2="240" y2="85" stroke-width="2"/>
      <line class="edge-cyan" x1="370" y1="75" x2="370" y2="85" stroke-width="2"/>
      <circle class="node-leaf" cx="305" cy="80" r="4"/>
      <text class="lbl-sm" x="180" y="84" text-anchor="end">নমুনা ২ ✓</text>
      <!-- Bar 3: MISSES (doesn't contain true value) -->
      <line class="edge-amber" x1="160" y1="110" x2="260" y2="110" stroke-width="3"/>
      <line class="edge-amber" x1="160" y1="105" x2="160" y2="115" stroke-width="2"/>
      <line class="edge-amber" x1="260" y1="105" x2="260" y2="115" stroke-width="2"/>
      <circle class="node-hot" cx="210" cy="110" r="4"/>
      <text class="lbl-sm" x="130" y="114" text-anchor="end">নমুনা ৩ ✗</text>
      <!-- Bar 4: captures -->
      <line class="edge-cyan" x1="220" y1="140" x2="360" y2="140" stroke-width="3"/>
      <line class="edge-cyan" x1="220" y1="135" x2="220" y2="145" stroke-width="2"/>
      <line class="edge-cyan" x1="360" y1="135" x2="360" y2="145" stroke-width="2"/>
      <circle class="node-leaf" cx="290" cy="140" r="4"/>
      <text class="lbl-sm" x="180" y="144" text-anchor="end">নমুনা ৪ ✓</text>
      <!-- Bar 5: captures -->
      <line class="edge-cyan" x1="250" y1="170" x2="340" y2="170" stroke-width="3"/>
      <line class="edge-cyan" x1="250" y1="165" x2="250" y2="175" stroke-width="2"/>
      <line class="edge-cyan" x1="340" y1="165" x2="340" y2="175" stroke-width="2"/>
      <circle class="node-leaf" cx="295" cy="170" r="4"/>
      <text class="lbl-sm" x="180" y="174" text-anchor="end">নমুনা ৫ ✓</text>
      <!-- Legend -->
      <rect class="cell-good" x="380" y="200" width="12" height="12" rx="2"/>
      <text class="lbl-sm" x="400" y="210">ধারণ করেছে (৯৫%)</text>
      <rect class="cell-hot" x="380" y="220" width="12" height="12" rx="2"/>
      <text class="lbl-sm" x="400" y="230">মিস করেছে (৫%)</text>
    </svg>
    <div class="diag-cap">১০০টা নমুনা নিলে, ৯৫টা CI সত্যিকারের মান ধারণ করবে (সবুজ)। মাত্র ৫টা মিস করবে (লাল)। এটাই ৯৫% CI-এর অর্থ।</div>
  </div>

  <div class="code-block">
    <h4>🔬 বিশ্বাস্যতা-ব্যবধান — CI Formula & Meaning</h4>
    <table class="kv-table">
      <tr><th>ধারণা</th><th>সংকেত</th><th>অর্থ</th></tr>
      <tr><td class="hl">CI সূত্র</td><td>x̄ ± z · (σ/√n)</td><td>গডেট ± z-স্কোর × প্রমাণ-ত্রুটি</td></tr>
      <tr><td class="hl">৯৫% CI-তে z</td><td>১.৯৬</td><td>Fisher-এর ০.০৫ সীমার সাথে সংযুক্ত</td></tr>
      <tr><td class="hl">৯৯% CI-তে z</td><td>২.৫৮</td><td>আরও চওড়া — বেশি নিশ্চিত</td></tr>
      <tr><td class="hl">নমুনা আকার (n)</td><td>যত বড় → সীমা তত সরু</td><td>n বাড়লে CI সরু হয়</td></tr>
      <tr><td class="hl">প্রমাণ-ব্যবধান (σ)</td><td>যত বেশি → সীমা তত চওড়া</td><td>ডেটা ছড়ানো থাকলে CI চওড়া</td></tr>
    </table>
    <br>
    <p><strong>বাস্তব উদাহরণ:</strong> একটা জরিপে ১০০০ জনকে জিজ্ঞেস করা হলো, ৫২% 'হ্যাঁ' বলল।</p>
    <p>• প্রমাণ-ত্রুটি = √(০.৫২ × ০.৪৮ / ১০০০) ≈ ০.০১৬</p>
    <p>• ৯৫% CI = ৫২% ± ১.৯৬ × ১.৬% = ৫২% ± ৩.১%</p>
    <p>• অর্থাৎ সত্যিকারের হার ৪৮.৯% থেকে ৫৫.১%-এর মধ্যে</p>
    <p>• এই সীমা ৫০%-এর উপরে — তাই 'সংখ্যাগরিষ্ঠ' বলা যায়</p>
    <br>
    <p><strong>নেইম্যানের দার্শনিক অবদান:</strong> ফিশার বলতেন 'একটা সংখ্যা' (point estimate)। নেইম্যান বললেন 'একটা সীমা' (interval estimate)। সীমা বলে — আমরা কতটা অনিশ্চিত, কতটা নিশ্চিত। এটাই আধুনিক বিজ্ঞানে গডেট প্রকাশের প্রমিত রূপ।</p>
  </div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৩৩ (যুক্তির তাঁত) Door ৪-এ Bayesian Updating শিখেছিলে — confidence interval হলো ফ্রিকোয়েন্টিস্ট (frequentist) দর্শনের সমাধান, Bayesian credible interval-এর চচেত। দুটো আলাদা দর্শন কিন্তু একই লক্ষ্য — অনিশ্চয়তা মাপা।</div></div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ব্যাখ্যা</div>
      ৯৫% CI [৪৮.৯, ৫৫.১] মানে ৯৫% সম্ভাবনা যে সত্যিকারের মান এই সীমায় আছে।
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ব্যাখ্যা</div>
      ৯৫% CI মানে — এই পদ্ধতিতে বারবার নমুনা নিলে, ১০০টার মধ্যে ৯৫টা CI সত্যিকারের মান ধারণ করবে। সত্যিকারের মান স্থির — সীমা পরিবর্তনশীল।
    </div>
  </div>

  <div class="verse">
    <div class="verse-arabic">وَمَا يُكَذِّبُ بِهِ إِلَّا كُلُّ مُعْتَدٍ أَثِيمٍ</div>
    <div class="verse-translation">আর একে মিথ্যা বলে না কেবল প্রতিটি সীমালঙ্ঘনকারী পাপী।</div>
    <div class="verse-ref">— কুরআন ৪৫:৩২ (অনুমানের সীমা সম্পর্কে যারা নিশ্চিত হতে চায় না তাদের কথা)</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">📐</div>
    <div class="secret-text">একটা সংখ্যা মিথ্যা বলে — একটা সীমা সত্য বলে।</div>
    <div class="secret-sub">A single number lies — a range tells the truth.</div>
  </div>`,
  senior: {
    title: "সীমা ছাড়া সংখ্যা অর্থহীন",
    body: `<p><strong>১. CI সবসময় রিপোর্ট করো:</strong> 'গডেট ৫২%' নয় — '৫২% ± ৩.১% (৯৫% CI)'। অনিশ্চয়তা স্বীকার করো।</p>
    <p><strong>২. নমুনা আকার জিজ্ঞেস করো:</strong> n = ১০০ এবং n = ১০০০০-এর CI আলাদা। বড় নমুনা = সরু CI = বেশি নিশ্চিত।</p>
    <p><strong>৩. ৯৫% বনাম ৯৯%:</strong> ৯৯% CI চওড়া কিন্তু বেশি নিশ্চিত। কোনটা লাগবে তা নির্ভর করে সিদ্ধান্তের গুরুত্বের উপর।</p>`
  }
});
