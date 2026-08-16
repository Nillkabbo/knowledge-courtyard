// ═══ DOORS 5-8 (stub — filling next) ═══

// ── DOOR 5: নকশার ভাষা (SCHEMATICS, BREADBOARD, MEASUREMENT) ──
doors.push({
  num:5, icon:"📐", color:"#38bdf8", name:"নকশার ভাষা",
  subtitle:"The Language of Blueprints", tech:"Reading Schematics, Reference Designators, Breadboard vs PCB, Multimeter & Oscilloscope",
  spirit:"কিতাব — লিখিত জ্ঞান; কলমের মাধ্যমে শেখা (৯৬:৪-৫)",
  secret:"সার্কিটের আসল সত্য তার নকশায় — সিম্বল পড়তে পারলে পুরো ইতিহাস এক পাতায়; মাপার যন্ত্র চিনলে নকশার দাবি যাচাই হয় মাঠে।",
  recall:{
    q:"তাহমিনা আপা কেন মেরামতের আগে এক ঘণ্টা শুধু নকশা পড়ে কাটেন — আর R14, C7, U3-এর মতো নামগুলো কীসের চাবি?",
    qen:"Why does Tahmina spend an hour reading only the schematic before touching a board — and what do names like R14, C7, U3 unlock?",
    a:"কারণ নকশা (schematic) সার্কিটের ব্যাকরণ-শুদ্ধ ভাষা — বোর্ডে যা গুলিয়ে দেখায় (তারের জট, লে-আউটের বাঁক), নকশায় তা ধ্বংসাত্মকভাবে পরিষ্কার: প্রতিটা কম্পোনেন্ট আদর্শ সিম্বল, প্রতিটা সংযোগ এক রেখা, সিগন্যাল বাঁ থেকে ডানে প্রবাহিত (ইনপুট→প্রসেস→আউটপুট), পাওয়ার ওপরে-দিকে (VCC), গ্রাউন্ড নিচে (GND)। Reference designator-রা ঠিকানা: R=রেজিস্টর, C=ক্যাপাসিটর, L=ইন্ডাক্টর, D=ডায়োড, Q=ট্রানজিস্টর, U=IC-চিপ, J=কানেক্টর, Y=ক্রিস্টাল — সংখ্যার সাথে মিলে স্বতন্ত্র নাম (R14 = ১৪ নম্বর রেজিস্টর)। মেরামতে এটা রোগ-নির্ণয়ের ম্যাপ: মাল্টিমিটারে মাপি — U3-এর পা ৮-এ ৩.৩V আছে তো? — নকশা না-জানলে প্রশ্নই করা যায় না। ব্রেডবোর্ড = পরীক্ষার খেলার মাঠ (তার ছাড়াই জোড়া, ভেতরের রেল-সংযোগ), PCB = ছাপা খেলার চূড়ান্ত বোর্ড (সোল্ডার-স্থায়ী, ট্রেস=তামার নকশা-পথ)। আর অসিলোসকোপ = সময়ের খুঁটিনাটি দেখার চোখ — ভোল্টেজ-বনাম-সময়ের গ্রাফ, যেখানে মাল্টিমিটার শুধু গড় বলে।",
    aen:"A schematic is the circuit's grammatical language — ideal symbols, one line per connection, signal flowing left-to-right, VCC up, GND down. Designators are addresses: R/C/L/D/Q/U/J/Y + number. Diagnosis means asking the meter questions the schematic defines. Breadboard = playground, PCB = printed finality, oscilloscope = the eye that sees voltage versus time."
  },
  story:`
<p class="scene-setting">পঞ্চম দরজা। কারিগরখানার দোতলা — তাহমিনা আপার ডিজাইন-কোণ: বড় টেবিলে ছড়ানো A3-কাগজের নকশা, দেয়ালে টানানো পুরনো প্রজেক্টের ফ্রেম করা PCB-গুলো, তাকে দুইটা অসিলোসকোপ ঘুমিয়ে আছে সবুজ-আভায়। তাহমিনা আপা — ত্রিশের কোঠায়, চুল টাইট বানে, গায়ে ঢিলা কুর্তা আর চোখে কাজের চশমা, আর তাঁর সিগনেচার: হাতের তালুতে সবসময় একটা লাল ফেল্ট-পেন ঘোরে — নকশা পড়ার সময় প্রতিটা যাচাই-হওয়া পথে টিক দেন, যেন পাণ্ডুলিপি প্রুফ করছেন। গন্ধ — কাগজ, টোনারের ঝাঁঝ, হালকা ফ্লাক্স। শব্দ — কম্পিউটারের পাখার ফুসফুস, নিচ তলা থেকে ভেসে আসা সোল্ডারিং-স্টেশনের গুনগুন।</p>
<p class="scene-setting en">The fifth door. The workshop's upper floor — Tahmina's design corner: A3 schematics spread on a big table, framed PCBs of old projects on the wall, two oscilloscopes sleeping in green glow on the shelf. Tahmina — mid-thirties, tight bun, loose kurti, working glasses, and her signature: a red felt pen perpetually spinning in her palm — reading a schematic she ticks each verified path, proofing a manuscript. The smell of paper and toner; a computer fan, and the soldering station's hum rising from below.</p>

<div class="dialogue">তুমি সিঁড়ি ভেঙে উঠলে। তাহমিনা আপা একটা নকশায় ঝুঁকে টিক দিচ্ছিলেন। "নুরুল ভাইয়ের খাতা দেখে এসেছ? নেয়-দেয়ের হিসাব?"
"হ্যাঁ আপা। এবার?"
"এবার সেই হিসাব যে ভাষায় লেখা হয়।" তিনি লাল কলম থামিয়ে তোমার দিকে ফিরলেন। "নিচে মোস্তাফিজ চাচারা যা করেন — তার নাম মেরামত। আমি যা করি তার নাম নকশা। মেরামতের আগেও প্রথম কাজ নকশা পড়া, ডিজাইনের আগেও তাই। ভাষা না-জানলে কথাই নেই। বোসো — আজ তোমাকে পড়তে শেখাব।"</div>
<div class="dialogue en">You climbed the stairs. Tahmina was ticking paths on a schematic. "Seen Nurul's ledger? The takes-and-gives?"
"Yes. Now?"
"Now — the language that ledger is written in." She stopped the pen and turned. "What the elders do below is called repair. What I do is called design. Before either, the first task is reading the schematic. Not knowing the language, there is no conversation. Sit — today I teach you to read."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> তাহমিনা আপার প্রথম ইন্টার্ন-দিনের গল্প — সিনিয়র বলল "এই বোর্ডের ফল্ট পাও।" সে ঘণ্টাখানেক বোর্ড উল্টেপাল্টে করে কিছু বলতে পারল না — কারণ সোজা বোর্ডে তার-জটের মাঝে কোন তার কোথায় যাচ্ছে বোঝা যায় না। সিনিয়র নকশার কাগজ এগিয়ে দিলেন: "আগে ম্যাপ পড়ো, তারপর জঙ্গলে নামো।" নকশা হাতে ১০ মিনিটে ফল্ট-এলাকা পাওয়া গেল। <strong>বোর্ড দেখে সার্কিট বোঝা আর নকশা দেখে বোঝা — আকাশ-পাতাল তফাত।</strong> নকশা = সার্কিটের ব্যাকরণ; বোর্ড = শুধু তার মুদ্রিত রূপ।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">R·C·L·D·Q</div><div class="sc-label">নামের প্রথম-অক্ষর = পরিবার (রেজিস্টর/ক্যাপ/ইন্ডাক্টর/ডায়োড/ট্রানজিস্টর)</div></div>
<div class="stat-card"><div class="sc-num">U + সংখ্যা</div><div class="sc-label">IC-চিপের ঠিকানা (U3 = তৃতীয় চিপ)</div></div>
<div class="stat-card"><div class="sc-num">বাঁ→ডান</div><div class="sc-label">সিগন্যাল-প্রবাহের নিয়ম; পাওয়ার ওপরে, গ্রাউন্ড নিচে</div></div>
<div class="stat-card"><div class="sc-num">V/div·s/div</div><div class="sc-label">অসিলোসকোপের দুই মাপকাঠি — ভোল্টেজ ও সময়ের জানালা</div></div>
</div>

<div class="dialogue">তিনি একটা নকশা সামনে রাখলেন — LED-ব্লিংকারের। "পড়া শুরু তিন নিয়মে। এক — দিক: সিগন্যাল বাঁ থেকে ডানে যায়। ওই দেখো, ব্যাটারি বাঁয়ে, তারপর সুইচ, তারপর চিপ, ডানে LED। দুই — উচ্চতা: যা উঁচু ভোল্টেজ তার ওপরে (VCC-রেল শীর্ষে), যা ভিত্তি তার নিচে (গ্রাউন্ড-চিহ্নগুলো তলায়)। তিন — নাম: প্রতিটা যন্ত্রের পরিবার-নাম আর ক্রম-সংখ্যা — R1, R2, C1, U1।" তাঁর লাল কলম এক-একটা পথ ধরে এগোল: "তারপর যাচাই-পড়া: এই পথে কারেন্ট কোথা থেকে কোথায়? U1-এর কোন পা কী নামে? প্রতিটা প্রশ্নের জবাব নকশায় লেখা আছে — খুঁজে পড়াই পড়া।" তিনি হাসলেন। "মাল্টিমিটার দিয়ে আমি নকশার দাবি মাঠে যাচাই করি — 'এই পায়ে ৩.৩V থাকার কথা, আছে তো?' আর দোলনা/নয়েজ/সময়ের খেলা দেখতে অসিলোসকোপ — মিটার বলে গড়, স্কোপ দেখায় গল্প।"</div>
<div class="dialogue en">She laid out a schematic — an LED blinker. "Reading begins with three rules. One — direction: signals run left to right. See: battery left, then switch, then chip, LED at right. Two — height: higher voltages above (VCC rail at top), ground symbols below. Three — names: every part's family letter and number — R1, R2, C1, U1." Her red pen traced paths: "Then verification-reading: where does current enter, which pin of U1 is what? Every answer is written on the map — finding it IS the reading." She smiled. "With the multimeter I verify the schematic's claims in the field — 'this pin should hold 3.3V; does it?' And for oscillation, noise, anything of time — the oscilloscope. The meter tells the average; the scope tells the story."</div>

<div class="code-block">নকশার অভিধান — How to read any schematic:

পরিবার-অক্ষর (reference designators):
  R = রেজিস্টর      C = ক্যাপাসিটর     L = ইন্ডাক্টর
  D = ডায়োড/LED    Q = ট্রানজিস্টর    U = IC (চিপ)
  J/P = কানেক্টর    Y/X = ক্রিস্টাল     SW = সুইচ
  → R14 = ১৪ নম্বর রেজিস্টর (বোর্ডে ছাপাও থাকে; BOM-তালিকায় মান)

পড়ার তিন নিয়ম:
  ১. বাঁ→ডান: ইনপুট → প্রসেস → আউটপুট
  ২. ওপরে VCC (উঁচু), নিচে GND (নিচু তলা)
  ৩. প্রতি রেখা = বিদ্যুৎ-সংযোগ; জংশন-ডট = সত্যিকারের জোড়,
     ক্রস (ডট ছাড়া) = শুধু কাটাকাটি, যুক্ত নয়!

সাধারণ সিম্বল-চেনা (এক নজরে):
  রেজিস্টর: দাঁতালি-বাক্স / ক্যাপ: দুই সমান্তরাল দণ্ড
  (পোলার হলে একটা বাঁকানো) / ইন্ডাক্টর: কুণ্ডলী-ঢেউ /
  ডায়োড: ত্রিভুজ+দণ্ড (দণ্ড = প্রতি-দিক) / ট্রানজিস্টর: তীর-পা /
  গ্রাউন্ড: তিন ক্ষয়িষ্ণু দাগ / VCC: বৃত্তে +বা নাম-ট্যাগ

মাঠ-যন্ত্র:
  মাল্টিমিটার: V (সমান্তরালে!), A (শ্রেণিতে — সার্কিট কেটে),
    Ω (মরা-সার্কিটে একমাত্র), কন্টিনিউইটি-বিপ (ফিউজ/ট্রেস পরীক্ষা)
  অসিলোসকোপ: ভোল্টেজ-বনাম-সময় জানালা; V/div লম্বা মাপ,
    s/div আড়াই মাপ; ট্রিগার = থামা-ছবি ধরার কৌশল
    (PWM-দোলা দেখবে Door ১২-তে — এখানে জানালা-চেনাই যথেষ্ট)

ব্রেডবোর্ড-বনাম-PCB:
  ব্রেডবোর্ড: ছেদ-না-করে জোড়ার খেলার মাঠ; ভেতরে লুকানো
    রেল (দুই লম্বা পাওয়ার-রেল + ৫-গর্তের স্তম্ভ-শৃঙ্খল)
    → পরীক্ষা, শেখা, ভাঙা-জোড়া; ফ্রিকোয়েন্সি-বেশি হলে অবিশ্বাসী
  PCB: ছাপা-তামার পথ (ট্রেস), সোল্ডার-দ্বীপ; ডিজাইনের চূড়ান্ত উত্তর
    → নির্ভরযোগ্য, বহনযোগ্য, উৎপাদনযোগ্য

মেরামতের নকশা-আচার (তাহমিনা আপার টিক):
  ১. আগে পূর্ণ নকশা একবার পড়ো — হাত দিতে নয়
  ২. প্রশ্ন তৈরি করো: "কোন পায়ে কী থাকার কথা?"
  ৩. মিটার/স্কোপে যাচাই — প্রতিটা মিলে গেলে লাল টিক
  ৪. টিক-বিহীন পথ = ফল্টের এলাকা</div>

<div class="dialogue">রাতের টিফিনের পর তাহমিনা আপা দেয়ালের ফ্রেম-করা পুরনো নকশাগুলো দেখালেন — একটার কোণে তাঁর উস্তাদের সিগনেচার। "শিক্ষার প্রথম নাম কলম — কুরআনের ভাষায় 'যিনি কলমের মাধ্যমে শিখিয়েছেন' (৯৬:৪-৫)। সার্কিটের জ্ঞান মুখে মুখে ছড়ালে প্রজন্ম বাঁচে না — নকশায় লেখা হলে তা চলে যায় শত বছর, হাজার মাইল। আমার উস্তাদ বলতেন — 'তোমার সার্কিট ভালো হোক না হোক, নকশা রেখে যাও; যে পড়বে সে তোমার চেয়ে ভালো বানাবে।' লেখা মানে আমানত — যাকে দেখানো হয়নি, তারও জন্য। তুমি এই ভাষা শিখলে তুমিও লেখো — তোমার বোর্ডের গল্প কাগজে রেখে যাও। কাল ইকবাল সাহেবের কাছে যাও — সড়কের আইন: সিরিজ-প্যারালালের নগর, কার্শফের দুই ফরমান।"</div>
<div class="dialogue en">After evening tea she showed the framed old schematics — her mentor's signature in a corner. "The first name of teaching is the pen — in the Quran's words, 'He taught by the pen' (96:4-5). Circuit knowledge passed mouth to mouth dies with the generation; written as schematics it travels a hundred years, a thousand miles. My teacher said — 'good or bad, leave the drawing; the one who reads it will build better than you.' Writing is a trust — for those never shown. Learn this language and write too — leave your board's story on paper. Tomorrow — Iqbal's: the law of roads, series-parallel cities, Kirchhoff's two edicts."</div>


<div class="diagram">
<div class="diag-title">নকশা পড়ার তিন নিয়ম — এক LED-ব্লিংকারের মানচিত্র</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <use class="sym sym-dim" href="#sym-vcc" transform="translate(100,40)"/>
  <text class="lbl-sm" x="100" y="22">+৫V</text>
  <path class="wire" d="M100 40 V62"/>
  <use class="sym" href="#sym-sw" transform="translate(100,62) rotate(90)"/>
  <text class="lbl-sm lbl-right" x="84" y="80">SW1</text>
  <path class="wire" d="M100 92 V124"/>
  <use class="sym sym-dim" href="#sym-dot" transform="translate(100,124)"/>
  <path class="wire" d="M100 124 H196"/>
  <text class="lbl-sm" x="150" y="112">ইনপুট</text>
  <use class="sym" href="#sym-r" transform="translate(100,124) rotate(90)"/>
  <text class="lbl-sm lbl-right" x="84" y="146">R1 ১০kΩ</text>
  <text class="lbl-sm lbl-right" x="84" y="162">পুল-ডাউন</text>
  <path class="wire" d="M100 164 V198"/>
  <use class="sym sym-dim" href="#sym-gnd" transform="translate(100,198)"/>
  <rect class="cell-cyan" x="196" y="94" width="100" height="82" rx="8"/>
  <text class="lbl-cyan" x="246" y="114">U1</text>
  <text class="lbl-sm" x="246" y="134">MCU</text>
  <text class="lbl-sm" x="246" y="152">ATmega328P</text>
  <text class="lbl-sm lbl-right" x="290" y="170">PB5</text>
  <path class="wire" d="M296 124 H344"/>
  <use class="sym" href="#sym-r" transform="translate(344,124)"/>
  <text class="lbl-sm" x="364" y="108">R2 ২২০Ω</text>
  <path class="wire" d="M384 124 H432"/>
  <use class="sym sym-hot" href="#sym-led" transform="translate(432,124) rotate(90)"/>
  <text class="lbl-hot lbl-left" x="454" y="140">D1</text>
  <path class="wire" d="M432 154 V198"/>
  <use class="sym sym-dim" href="#sym-gnd" transform="translate(432,198)"/>
  <text class="lbl-sm" x="280" y="228">বাঁ→ডান পড়ো: ইনপুট (SW1+R1) → প্রসেস (U1) → আউটপুট (R2+D1)</text>
</svg>
<div class="diag-cap">তিন নিয়ম এক ছবিতে: (১) বাঁ থেকে ডানে — ইনপুট, প্রসেস, আউটপুট; (২) ওপরে VCC, নিচে GND, তাই সব বিদ্যুৎ ওপর থেকে নিচে পড়ে; (৩) কালো ডট = সত্যিকারের জোড়া। SW1 আর R1 মিলে ইনপুট-ডিভাইডার — বাটন না-চাপলে R1 পিনকে ০-এ টেনে রাখে, চাপলে ৫V ওঠে। রেফারেন্স-অক্ষর মনে রাখো: R রেজিস্টর, D ডায়োড, SW সুইচ, U চিপ।</div>
</div>



<div class="photo-frame"><img src="photos/breadboard.jpg" alt="৪০০-পয়েন্ট ব্রেডবোর্ড — পরীক্ষার খেলার মাঠ"><div class="photo-cap">৪০০-পয়েন্ট ব্রেডবোর্ড — পরীক্ষার খেলার মাঠ · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — ব্রেডবোর্ডের ভেতরের রেল</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="60" y="30" width="440" height="180"/>
  <line class="edge-hot" x1="80" y1="48" x2="480" y2="48"/>
  <line class="edge-hot" x1="80" y1="192" x2="480" y2="192"/>
  <text class="lbl-hot" x="90" y="42" font-size="10">＋ লাল-রেল (সারা-সারি এক তার)</text>
  <text class="lbl-sm" x="90" y="206" font-size="10">− নীল-রেল (GND)</text>
  <g>
    <circle class="node" cx="120" cy="80" r="3"/><circle class="node" cx="120" cy="100" r="3"/><circle class="node" cx="120" cy="120" r="3"/><circle class="node" cx="120" cy="140" r="3"/><circle class="node" cx="120" cy="160" r="3"/>
    <line class="edge-cyan" x1="120" y1="80" x2="120" y2="160"/>
    <text class="lbl-cyan" x="120" y="70" font-size="10">a b c d e — কলাম-ভাগ এক-সুড়ঙ্গ</text>
    <line class="edge" x1="150" y1="70" x2="150" y2="170" stroke-dasharray="2,4"/>
    <circle class="node" cx="180" cy="80" r="3"/><circle class="node" cx="180" cy="100" r="3"/><circle class="node" cx="180" cy="120" r="3"/><circle class="node" cx="180" cy="140" r="3"/><circle class="node" cx="180" cy="160" r="3"/>
    <line class="edge-cyan" x1="180" y1="80" x2="180" y2="160"/>
  </g>
  <line class="edge" x1="165" y1="60" x2="165" y2="180" stroke-dasharray="6,4"/>
  <text class="lbl" x="330" y="110">মাঝের খাল — বিভাজক!</text>
  <text class="lbl-sm" x="330" y="130" font-size="10">f|g সারি আলাদা; সেখানেই চিপ বসে</text>
  <text class="lbl-sm" x="330" y="150" font-size="10">উভয় পাশের পা স্বাধীন</text>
</svg>
<div class="diag-cap">ব্রেডবোর্ডের গোপন-নকশা: ওপর-নিচ লম্বা রেল দুইটা (পাওয়ার), মাঝের ৫-পা-র কলাম এক-গলা — আর মাঝের খাল দুই ভাগ করে; নকশা না জানলে সব-শর্ট এক-সুড়ঙ্গে!</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — ভোল্টেজ-ডিভাইডারে LDR দিয়ে আলো-মাপার বিছানা</div>
<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
  <use class="sym sym-dim" href="#sym-vcc" transform="translate(150,42)"/>
  <text class="lbl-sm" x="150" y="24">৩.৩V</text>
  <path class="wire" d="M150 42 V64"/>
  <use class="sym" href="#sym-r" transform="translate(150,64) rotate(90)"/>
  <text class="lbl-sm lbl-left" x="168" y="84">R1 ১০kΩ (স্থির)</text>
  <path class="wire" d="M150 104 V132"/>
  <use class="sym sym-dim" href="#sym-dot" transform="translate(150,132)"/>
  <use class="sym sym-amber" href="#sym-ldr" transform="translate(150,132) rotate(90)"/>
  <text class="lbl-sm lbl-left" x="182" y="156">LDR</text>
  <text class="lbl-sm lbl-left" x="182" y="172">আলোয় ~১kΩ</text>
  <text class="lbl-sm lbl-left" x="182" y="188">অন্ধকারে ~১০০kΩ</text>
  <path class="wire" d="M150 172 V212"/>
  <use class="sym sym-dim" href="#sym-gnd" transform="translate(150,212)"/>
  <path class="wire-cyan" d="M150 132 H300"/>
  <text class="lbl-cyan" x="228" y="120">V_out</text>
  <rect class="cell-cyan" x="300" y="108" width="96" height="48" rx="8"/>
  <text class="lbl-cyan" x="348" y="126">ADC পিন</text>
  <text class="lbl-sm" x="348" y="144">A0</text>
  <use class="sym sym-dim" href="#sym-c" transform="translate(300,180) rotate(-90)"/>
  <path class="wire" d="M300 156 V180 M300 204 V212 H150"/>
  <text class="lbl-sm lbl-left" x="316" y="186">১০০nF</text>
  <rect class="cell" x="410" y="60" width="140" height="96" rx="8"/>
  <text class="lbl-sm" x="480" y="80">V_out = ৩.৩ × R_LDR</text>
  <text class="lbl-sm" x="480" y="98">÷ (১০k + R_LDR)</text>
  <text class="lbl-sm" x="480" y="122">আলো ↑ → R_LDR ↓</text>
  <text class="lbl-sm" x="480" y="140">→ V_out ↓</text>
</svg>
<div class="diag-cap">LDR-ডিভাইডার: আলো বদলায় → রোধ বদলায় → ভাগ-অনুপাত বদলায় → ADC-সংখ্যা বদলায় — দরজা ৬-এর সূত্রের জীবন্ত প্রয়োগ, রাতের-বাতির মস্তিষ্ক।</div>
</div>

<div class="verse">
<div class="verse-arabic">الَّذِي عَلَّمَ بِالْقَلَمِ</div>
<div class="verse-translation">যিনি শিখিয়েছেন কলমের মাধ্যমে।</div>
<div class="verse-ref">— কুরআন ৯৬:৪</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 5 — নকশা-কাগজে প্রথম স্কেচ:</strong> ব্রেডবোর্ডে প্রথম পরীক্ষা-বিছানা সাজালাম — নকশা-ভাষায় লিখলাম: ওপরে ৩.৩V-রেল, নিচে GND, মাঝে MCU+ডিভাইডার+বাটন। <strong>পরীক্ষা-শৃঙ্খল:</strong> ভোল্টেজ-পয়েন্ট চিহ্নিত → মাল্টিমিটারে প্রতিটা মান খাতায় — নকশা আর বাস্তবের মিল প্রমাণ। পরের খাতা-প্রশ্ন: সেন্সর কোথায় বসবে? → ডিভাইডারের গণিত পরের দরজায়।</div></div>
<div class="secret-box"><div class="label">দরজা ৫ — রহস্য</div><div class="text">📐 বোর্ড জঙ্গল, নকশা ম্যাপ — আগে পড়ো তারপর হাত; R-C-U-নামের ঠিকানায় প্রশ্ন, মিটারে জবাব, স্কোপে গল্প।<br><small>বাঁ→ডান, VCC-ওপরে, GND-নিচে; ডট=যুক্ত, ক্রস=মুক্ত। লাল টিক-পদ্ধতিতে ফল্ট-শিকার। কিতাব: ৯৬:৪।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>তিন পড়া-নিয়ম রক্তে:</strong> বাঁ→ডান প্রবাহ, পাওয়ার-ওপরে/গ্রাউন্ড-নিচে, প্রতি-নামের ঠিকানা — অচেনা নকশা পেলে এই তিনে শুরু।</li>
<li><strong>ডট-বনাম-ক্রস চোখে:</strong> সংযোগ-ডট ছাড়া ক্রস মানে অযুক্ত — নতুনদের ১ নম্বর ভুল জায়গা।</li>
<li><strong>মিটার-স্কোপের দায়িত্ব-ভাগ:</strong> গড় বনাম গল্প — কোন প্রশ্নে কোন যন্ত্র, এখনই অভ্যাস করো।</li>
<li><strong>ব্রেডবোর্ড-আচরণ:</strong> রেল-কাঠামো মুখস্থ (পাওয়ার-রেল, ৫-খোঁচা স্তম্ভ) — পরীক্ষার ঘর ভুল-বুঝলে সার্কিটই মিথ্যা শেখায়।</li>
<li><strong>নথি-নীতি:</strong> নিজের সার্কিট বানালে নকশা আঁকো — কলমে-শেখানোর আমানত (৯৬:৪)।</li>
</ul>`
  }
});

// ── DOOR 6: দুই আইনের সড়ক (SERIES, PARALLEL, KIRCHHOFF) ──
doors.push({
  num:6, icon:"🛣️", color:"#a3e635", name:"দুই আইনের সড়ক",
  subtitle:"The Highway of Two Laws", tech:"Series & Parallel, Voltage/Current Divider, KCL (junction), KVL (loop) — Gustav Kirchhoff, 1845",
  spirit:"কদর — প্রতিটা কিছু মাপা-গোনা; এক ফোঁটাও হিসাবের বাইরে নয় (২৫:২)",
  secret:"জংশনে কারেন্টের হিসাব মেলে — যা ঢোকে তা-ই বেরোয়; লুপে ভোল্টেজের হিসাব মেলে — যা ওঠে তা-ই নামে। দুই খাতা, শূন্য ঘাটতি।",
  recall:{
    q:"ইকবাল সাহেবের এক্সচেঞ্জ-হিসাব কী বোঝায় — আর দুটো ১০kΩ রেজিস্টর সিরিজে ৯V-তে মাঝের ভোল্টেজ কত, সমান্তরালে মোট R কত?",
    qen:"What is Iqbal's exchange accounting — and with two 10kΩ resistors on 9V, what's the midpoint voltage in series, and total R in parallel?",
    a:"কার্শফের দুই আইন (গুস্তাভ কার্শফ, কনিংসবার্গ-বিশ্ববিদ্যালয়ের ছাত্র, ১৮৪৫) এক্সচেঞ্জের হিসাব: KCL (কারেন্ট-আইন) — যেকোনো জংশনে ঢোকা কারেন্টের যোগফল = বেরোনোর যোগফল (কল যেমন আসে-যায়, জমা থাকে না); KVL (ভোল্টেজ-আইন) — যেকোনো বদ্ধ লুপে ভোল্টেজ-উত্থানের যোগফল = পতনের যোগফল (পাহাড়ের ট্রেক: যত উঠবে তত নামবে, ফের শুরুর উচ্চতায়)। সিরিজে (এক পথ, পরপর): কারেন্ট সবাই সমান I, ভোল্টেজ ভাগ হয় রেজিস্ট্যান্স-অনুপাতে — দুটো সমান ১০k-এ ৯V অর্ধেক-অর্ধেক: মাঝের বিন্দুতে ৪.৫V (ভোল্টেজ-ডিভাইডার — ADC-র সেন্সর-পড়ার প্রাণ!)। সমান্তরালে (দুই পথ, পাশাপাশি): দুই মাথায় ভোল্টেজ সমান, কারেন্ট ভাগ হয়, মোট R কমে: সমান দুটোতে অর্ধেক = ৫kΩ (দুই সড়ক খুললে জ্যাম কমে!)। সূত্র: সিরিজ R=R1+R2; সমান্তরাল ১/R=১/R1+১/R2। ডিভাইডার-সূত্র: V_out = V_in × R2/(R1+R2)। MCU-ব্যবহার: LDR/থার্মিস্টর + স্থির রেজিস্টরের ডিভাইডার → ADC-পিনে অনুপাত-ভোল্টেজ → আলো/তাপ পড়া।",
    aen:"Kirchhoff (1845, Königsberg student): KCL — in = out at every junction; KVL — rises = drops around every loop. Series: same I, V divides (two 10k on 9V → midpoint 4.5V — the ADC's sensor trick). Parallel: same V, I divides, R halves (5kΩ). V_out = V_in·R2/(R1+R2)."
  },
  story:`
<p class="scene-setting">ষষ্ঠ দরজা। কারিগরখানার পাশের ভবনের দোতলায় ইকবাল সাহেবের ইন্টারকম-ওয়ার্কশপ — দেয়ালে টানানো রঙিন তারের পাঁচিল, টেবিলে খোলা মাস্টার-সুইচবোর্ড, তাতে গর্তে-গর্তে প্লাগ-সকেট, পাশে হ্যান্ডসেটের সারি। ইকবাল সাহেব — ষাট ছুঁইছুঁই, চুল ধূসর, গায়ে নীল শার্ট-হাতা গোটানো, আর তাঁর সিগনেচার: শার্টের বুকপকেটে সবসময় একটা পুরনো এক্সচেঞ্জ-প্লাগ (পিতলের দেহ, তারের লেজ) — ভাবনা এলেই প্লাগটা বের করে আঙুলে ঘোরান, যেন কল-জংশন খুঁজছেন। গন্ধ — তারের ইনসুলেশন, পুরনো বাকলাইট, বিজলি-টেপ। শব্দ — মাস্টার-বোর্ডের রিলের টুক-টুক, দূরে কারও কথা পরীক্ষা-হ্যান্ডসেটে।</p>
<p class="scene-setting en">The sixth door. Iqbal's intercom workshop on the next building's upper floor — rainbow wire looms on the walls, an open master switchboard on the table with rows of plug sockets, handsets in ranks. Iqbal — nearly sixty, grey hair, blue shirt with rolled sleeves, and his signature: an old exchange plug (brass body, wire tail) always in his shirt pocket — when thinking he spins it in his fingers, hunting a call junction. The smell of wire insulation and old bakelite; relay clicks from the master board, a test handset murmuring somewhere.</p>

<div class="dialogue">তুমি সিঁড়ি ভেঙে উঠে সালাম দিলে। ইকবাল সাহেব প্লাগ ঘোরাতে ঘোরাতে তাকালেন। "তাহমিনার নকশা পড়তে শিখেছ?"
"জি — বাঁ থেকে ডানে, ওপরে পাওয়ার।"
"ভালো। কিন্তু নকশা পড়া আর নকশার হিসাব বোঝা এক নয়।" তিনি মাস্টার-বোর্ডের সুইচ টিপলেন — টুক! দূরের হ্যান্ডসেটে বাতাস। "আমি জীবনে চল্লিশ বছর টেলিফোন-এক্সচেঞ্জে কাটিয়েছি। হাজার লাইন, হাজার কল — কোনো কল হাওয়ায় মিলিয়ে যায় না, কোনো পাল্স খাতার বাইরে নয়। সার্কিট আমার কাছে সেই এক্সচেঞ্জই — ছোট প্যামানায়। আজ শিখবে এক্সচেঞ্জের দুই খাতা।"</div>
<div class="dialogue en">You climbed up and greeted him. Iqbal looked over, spinning the plug. "Learned to read Tahmina's drawings?"
"Yes — left to right, power on top."
"Good. But reading the map and knowing its arithmetic are different things." He pressed a master-board key — clack! — a distant handset breathed. "I spent forty years in the telephone exchange. A thousand lines, a thousand calls — no call dissolves into air, no pulse outside the ledger. A circuit, to me, is that same exchange in miniature. Today: the exchange's two ledgers."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> ইকবাল সাহেবের প্রথম ইন্টারকম-জব — এক অফিসে ছয়টা সেট, তিনি সব সিরিজে বেঁধে দিয়েছিলেন (এক তারে মালা!)। ফল: যত ফোন তোলা হলো, শেষের সেটের শব্দ তত মৃদু — প্রতিটা সেট নিজের ভাগের ভোল্টেজ খেয়ে নিচ্ছিল, লাইনের শেষে কিছুই থাকছিল না। রাতারাতি পুনরায়-তার: সবাই সমান্তরালে, দুই তারের বাস — প্রতিটা সেট পুরো ভোল্টেজ পেল, কল পরিষ্কার। <strong>সিরিজ = এক পথে মালা (যার শেষে ক্ষুধা); সমান্তরাল = সবার নিজের রাস্তা (সবাই সমান ভাগ)।</strong></div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">KCL</div><div class="sc-label">জংশনের খাতা — ঢোকা = বেরোনো; কল-হিসাব মিলবেই</div></div>
<div class="stat-card"><div class="sc-num">KVL</div><div class="sc-label">লুপের খাতা — ওঠা = নামা; পাহাড়-ট্রেক শূন্যে ফেরে</div></div>
<div class="stat-card"><div class="sc-num">৪.৫V</div><div class="sc-label">৯V ÷ দুই সমান ১০k সিরিজ — ডিভাইডারের মাঝ-বিন্দু</div></div>
<div class="stat-card"><div class="sc-num">১৮৪৫</div><div class="sc-label">গুস্তাভ কার্শফ — কনিংসবার্গের ছাত্র অবস্থায় দুই আইন</div></div>
</div>

<div class="dialogue">তিনি বোর্ডে তিনটা প্লাগ-গর্ত দেখিয়ে বললেন: "প্রথম খাতা — জংশনের। ধরো তিন তার মিলেছে এক বিন্দুতে। বাইরে থেকে দুই অ্যাম্পিয়ার ঢুকছে, ভেতর থেকে এক অ্যাম্পিয়ার বেরোচ্ছে। প্রশ্ন — তৃতীয় তারে কী ঘটবে?" তুমি ভাবলে: "এক অ্যাম্পিয়ার... বেরোবে?" "অবশ্যই! কারণ জংশন কোনো জমাখানা নয় — চার্জ জমা হয় না ওখানে; যা আসে তা-ই যায়। এক্সচেঞ্জে যেমন: যত কল ঢোকে, ঠিক তত কল বেরোয় — অপেক্ষায় রাখে না।" তিনি লুপ-তার ধরলেন। "দ্বিতীয় খাতা — লুপের। যেকোনো বদ্ধ ঘেরে ব্যাটারি যত ভোল্টেজ দেয়, রাস্তার রেজিস্টরগুলো ঠিক ততটাই খরচ করে — এক মিলিভোল্ট বাড়তি নয়, ঘাটতি নয়। ট্রেকের মতো: উঁচু থেকে নেমে ফের শিবিরে এলে নিট উচ্চতা-পরিবর্তন শূন্য।"</div>
<div class="dialogue en">He pointed at three plug holes: "First ledger — the junction's. Three wires meet at a point; two amperes enter, one leaves. Question — the third wire?" You thought: "One ampere... out?" "Of course! A junction is no warehouse — charge doesn't pool there; what arrives departs. As in the exchange: however many calls enter, exactly that many leave — none kept waiting." He lifted the loop wire. "Second ledger — the loop's. In any closed circuit, whatever voltage the battery raises, the resistors along the way spend exactly — not a millivolt over or under. Like a trek: descend from the height back to camp and the net change is zero."</div>

<div class="code-block">সড়ক-গণিত — Series, Parallel, Kirchhoff:

সিরিজ (পরপর, এক সড়ক):
  R_মোট = R1 + R2 + …        (দূরত্ব যোগ)
  I সবাই সমান (একটাই স্রোত)
  V ভাগ হয়: V₁ = I×R1 (বড় রেজিস্টর বড় ভাগ)
  ব্যবহার: ভোল্টেজ-ডিভাইডার, LED+রেজিস্টর

সমান্তরাল (পাশাপাশি, বহু সড়ক):
  ১/R_মোট = ১/R1 + ১/R2 + …   (রাস্তা বাড়লে জ্যাম কমে)
  V সবাই সমান (একই দুই মাথা)
  I ভাগ হয়: I₁ = V/R1 (ছোট রেজিস্টর বেশি টানে)
  ব্যবহার: বাস-ভোল্টেজ, সব মডিউল স্বাধীন

ডিভাইডার-সূত্র (MCU-র সেন্সর-সেতু):
  V_out = V_in × R2/(R1+R2)
  উদাহ: ৫V, R1=R2=১০k → ২.৫V (অর্ধেক)
  LDR-সেন্সর: R1=স্থির ১০k, R2=LDR (আলোয় ~১k,
  অন্ধকারে ~১০০k) → V_out আলোর সাথে বদলায় →
  ADC-পিনে পড়ো (Door ১২-এর আমন্ত্রণ)

কার্শফের দুই খাতা (১৮৪৫ — ছাত্র-বয়সের কাজ!):
  KCL: ΣI_ঢোকা = ΣI_বেরোনো   (জংশন-হিসাব)
  KVL: ΣV_ওঠা = ΣV_নামা       (লুপ-হিসাব)
  শক্তি: পাওয়ারও মেলে — সোর্স যা দেয়, লোড-তাপ তা-ই খায়

মাল্টিমিটার-পাঠে দুই খাতার ব্যবহার:
  সিরিজ ভাব: লুপ ধরে V মাপো — কোন রেজিস্টরে কত পড়ল?
  জংশন ভাব: শাখা-তার কেটে I মাপো — যোগফল মিলল?
  → মিললে সার্কিট সৎ; না-মিললে সেখানেই ফাঁদ
    (শর্ট = অস্বাভাবিক বেশি I; ওপেন = শূন্য I, পুরো V-পতন)</div>

<div class="dialogue">সন্ধ্যায় বোর্ড বন্ধ করতে করতে ইকবাল সাহেব বললেন: "জীবনে আমি দেখেছি — বিশ্বাসঘাতকতা করে যে, সে হিসাব ভাঙে; বিশ্বসেবী ব্যবস্থা হিসাব রক্ষা করে। কুরআনের ভাষায় সৃষ্টির নিয়মই তা — 'তিনি প্রতিটি কিছু সৃষ্টি করেছেন এবং তার কদর — মাপ — নির্ধারণ করেছেন' (২৫:২)। আমার এক্সচেঞ্জে কল-পালস কদরের মতোই গোনা — কোনো কল হারায় না, কোনো পাল্স নীরবে বাড়ে না। সার্কিটের জংশন-লুপও তাই: দুই খাতা মিললে বুঝো সার্কিট সুস্থ; না-মিললে খোঁজো — কে হিসাব ভাঙছে, কোন ঘাটি ফাঁদ। মেরামতের আধা কাজ এই দুই খাতা মেলানো। কাল জাহেদ ভাইয়ের কাছে যাও — হ্যাঁ-না-র জগৎ: যেখানে সব কথা দুই অঙ্কে।"</div>
<div class="dialogue en">Closing the board at dusk, Iqbal said: "In life I've seen — the betrayer breaks the ledger; the faithful system keeps it. In the Quran's words, creation's very law: 'He created each thing and determined it with measure — qadar' (25:2). In my exchange, call-pulses are counted like qadar — no call lost, no pulse silently swelling. So with the circuit's junctions and loops: when both ledgers balance, the circuit is healthy; when they don't, hunt — who breaks the account, which link is the trap. Half of repair is reconciling these two ledgers. Tomorrow — Jahed's: the world of yes-and-no, where all speech is two digits."</div>


<div class="diagram">
<div class="diag-title">ভোল্টেজ-ডিভাইডার — সিরিজের ভাগ-বাঁট ও সেন্সর-সেতু</div>
<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
  <use class="sym sym-dim" href="#sym-vcc" transform="translate(110,40)"/>
  <text class="lbl-sm" x="110" y="22">৫V</text>
  <path class="wire" d="M110 40 V62"/>
  <use class="sym" href="#sym-r" transform="translate(110,62) rotate(90)"/>
  <text class="lbl-sm lbl-left" x="128" y="82">R1 ১০kΩ</text>
  <path class="wire" d="M110 102 V130"/>
  <use class="sym sym-dim" href="#sym-dot" transform="translate(110,130)"/>
  <use class="sym" href="#sym-r" transform="translate(110,130) rotate(90)"/>
  <text class="lbl-sm lbl-left" x="128" y="152">R2 ১০kΩ</text>
  <path class="wire" d="M110 170 V210"/>
  <use class="sym sym-dim" href="#sym-gnd" transform="translate(110,210)"/>
  <path class="wire-cyan" d="M110 130 H196"/>
  <text class="lbl-cyan" x="152" y="118">২.৫V</text>
  <text class="lbl-sm" x="152" y="240">লোড ছাড়া — নিখুঁত অর্ধেক</text>
  <path class="seq-line" d="M240 30 V236"/>
  <use class="sym sym-dim" href="#sym-vcc" transform="translate(330,40)"/>
  <text class="lbl-sm" x="330" y="22">৫V</text>
  <path class="wire" d="M330 40 V62"/>
  <use class="sym" href="#sym-r" transform="translate(330,62) rotate(90)"/>
  <text class="lbl-sm lbl-left" x="348" y="82">R1 ১০kΩ</text>
  <path class="wire" d="M330 102 V130"/>
  <use class="sym sym-dim" href="#sym-dot" transform="translate(330,130)"/>
  <use class="sym" href="#sym-r" transform="translate(330,130) rotate(90)"/>
  <text class="lbl-sm lbl-left" x="348" y="152">R2 ১০kΩ</text>
  <path class="wire" d="M330 170 V210"/>
  <use class="sym sym-dim" href="#sym-gnd" transform="translate(330,210)"/>
  <path class="wire-hot" d="M330 130 H430"/>
  <use class="sym sym-hot" href="#sym-r" transform="translate(430,130) rotate(90)"/>
  <text class="lbl-hot lbl-left" x="448" y="150">R_লোড ১০kΩ</text>
  <path class="wire" d="M430 170 V210 H330"/>
  <text class="lbl-hot" x="380" y="118">১.৬৭V — অর্ধেক নয়!</text>
  <text class="lbl-sm" x="392" y="240">লোড জুড়লেই ভাগ বদলে যায়</text>
  <rect class="cell-hot" x="150" y="252" width="280" height="16" rx="6"/>
  <text class="lbl-hot" x="290" y="262">নিয়ম: R_লোড ≥ ১০ × R_থেভেনিন</text>
</svg>
<div class="diag-cap">সিরিজে ভোল্টেজ রেজিস্ট্যান্স-অনুপাতে ভাগ হয় — এই মাঝ-বিন্দুই সেন্সর-জগতের দরজা: LDR/থার্মিস্টর বসালেই আলো/তাপের মান ভোল্টেজ হয়ে ADC-তে যায়।</div>
</div>



<div class="photo-frame"><img src="photos/potentiometer.jpg" alt="১০kΩ ঘোরানো-পট — হাতে-ধরা ভোল্টেজ-ডিভাইডার"><div class="photo-cap">১০kΩ ঘোরানো-পট — হাতে-ধরা ভোল্টেজ-ডিভাইডার · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — পটেনশিওমিটার: ঘোরানো ডিভাইডার</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="60" y="50" width="200" height="40"/>
  <line class="edge-cyan" x1="90" y1="42" x2="90" y2="98"/>
  <line class="edge-hot" x1="230" y1="42" x2="230" y2="98"/>
  <text class="lbl-sm" x="90" y="36" font-size="10">পা১</text>
  <text class="lbl-hot" x="230" y="36" font-size="10">পা৩</text>
  <line class="edge" x1="160" y1="60" x2="160" y2="120"/>
  <path class="edge" d="M 145 120 L 175 120 L 160 135 Z" fill="none"/>
  <text class="lbl" x="160" y="158">ওয়াইপার (পা২)</text>
  <text class="lbl-sm" x="160" y="176" font-size="10">ঘুরলে ভাগ-বিন্দু সরে</text>
  <rect class="cell" x="340" y="40" width="190" height="150"/>
  <text class="lbl" x="435" y="66">৩-পা চেনা</text>
  <text class="lbl-sm" x="435" y="92" font-size="10">দুই-প্রান্ত + মাঝের-বিন্দু</text>
  <text class="lbl-sm" x="435" y="116" font-size="10">ব্যবহার-১: ভোল্টেজ-ডিভাইডার</text>
  <text class="lbl-sm" x="435" y="138" font-size="10">ব্যবহার-২: শ্রেণি-রোধ (২-পা)</text>
  <text class="lbl-sm" x="435" y="162" font-size="10">১০k = সর্বজনীন; টিউন-নব এদেরই পরিবার</text>
</svg>
<div class="diag-cap">পট (পটেনশিওমিটার) মানে হাতে-ঘোরানো ডিভাইডার — ওয়াইপার যেখানে, ভাগ সেখানে; অ্যানালগ-নবের রাজা, প্রতিটা অ্যাম্পের ভলিউম-চাকতি।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — কারেন্ট-শান্ট মাপ: ছোট রোধে প্রবাহ-হিসাব</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <use class="sym sym-amber" href="#sym-bat" transform="translate(80,90) rotate(90)"/>
  <text class="lbl-sm lbl-right" x="64" y="86">+</text>
  <text class="lbl lbl-right" x="62" y="106">৫V</text>
  <path class="wire" d="M80 90 V50 H170"/>
  <use class="sym sym-hot" href="#sym-r" transform="translate(170,50)"/>
  <text class="lbl-hot" x="190" y="30">R_শান্ট ০.১Ω</text>
  <path class="wire" d="M210 50 H330"/>
  <use class="sym sym-cyan" href="#sym-lamp" transform="translate(330,50) rotate(90)"/>
  <text class="lbl-cyan lbl-left" x="350" y="66">লোড</text>
  <path class="wire" d="M330 78 V190 H80 V118"/>
  <use class="sym sym-dim" href="#sym-dot" transform="translate(170,50)"/>
  <use class="sym sym-dim" href="#sym-dot" transform="translate(210,50)"/>
  <path class="wire-cyan" d="M170 50 V110 M210 50 V110"/>
  <rect class="cell-cyan" x="140" y="110" width="100" height="42" rx="8"/>
  <text class="lbl-cyan" x="190" y="126">মিলিভোল্ট</text>
  <text class="lbl-sm" x="190" y="142">মিটার</text>
  <text class="lbl-sm" x="190" y="170">২২mV পড়লো</text>
  <rect class="cell" x="330" y="120" width="216" height="80" rx="8"/>
  <text class="lbl-sm lbl-left" x="344" y="140">I = V_শান্ট ÷ R_শান্ট</text>
  <text class="lbl-hot lbl-left" x="344" y="160">= ০.০২২V ÷ ০.১Ω = ০.২২A</text>
  <text class="lbl-sm lbl-left" x="344" y="182">শান্ট ছোট রাখো — নইলে সে-ই</text>
  <text class="lbl-sm lbl-left" x="344" y="198">লোডের ভোল্টেজ খেয়ে নেবে</text>
</svg>
<div class="diag-cap">প্রবাহ সরাসরি মাপা কঠিন (পথ কাটতে হয়) — বিদ্যা: পথে ০.১Ω বসাও, তার দুই মাথার ভোল্টেজ পড়ো, ওহমে ভাগ দাও; স্মার্ট-ব্যাটারি/মোটর-নিয়ন্ত্রকের ভেতরে এই শান্টই ক্যালকুলাস।</div>
</div>

<div class="verse">
<div class="verse-arabic">وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا</div>
<div class="verse-translation">তিনি প্রতিটি কিছু সৃষ্টি করেছেন এবং তার পরিমাপ নির্ধারণ করেছেন।</div>
<div class="verse-ref">— কুরআন ২৫:২</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 6 — সেন্সর-বিছানার গণিত:</strong> মাটি-প্রোব + ১০kΩ ডিভাইডার বসালাম; সূত্রে মান বসালাম: ভেজা ≈ ৩০০Ω → V_out ≈ ০.৭৬V; শুকনো ≈ ৩০kΩ → ≈ ২.৫V। <strong>কেন-লগ:</strong> ADC-র ৩.৩V-জানালায় দুই প্রান্তই সুন্দর-স্প্যান — রেজোলিউশন নষ্ট হচ্ছে না। প্রতিটা সেন্সর-বাছাই এখন সূত্রের জবাবনামা: R-র মান বদলে স্প্যান বদলাও, খাতা মেলাও।</div></div>
<div class="secret-box"><div class="label">দরজা ৬ — রহস্য</div><div class="text">🛣️ জংশনে ঢোকা=বেরোনো (KCL), লুপে ওঠা=নামা (KVL) — দুই খাতা মিললে সার্কিট সৎ; না-মিললে সেখানেই ফাঁদ।<br><small>সিরিজ: এক I, V-ভাগ; সমান্তরাল: এক V, I-ভাগ; V_out=V_in·R2/(R1+R2)। কার্শফ ১৮৪৫। কদর: ২৫:২।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>দুই সড়ক-চরিত্র আলাদা করা:</strong> সিরিজ = এক স্রোত-ভাগ-ভোল্টেজ; সমান্তরাল = এক ভোল্টেজ-ভাগ-স্রোত — যেকোনো নেটওয়ার্ক প্রথমে এই চোখে দেখো।</li>
<li><strong>ডিভাইডার-সূত্র হাতের লেখা:</strong> LDR/থার্মিস্টর-সেন্সর সার্কিট নিজে মান বের করো — MCU-সেন্সর পড়ার প্রথম সেতু।</li>
<li><strong>KCL/KVL মেরামতের অস্ত্র:</strong> "খাতা মিলছে না" = ফল্ট-এলাকা — মিললে সৎ, ভাঙলে শিকার।</li>
<li><strong>ইতিহাস শুদ্ধ:</strong> কার্শফ ১৮৪৫, কনিংসবার্গ-ছাত্র — ওহমের সাফল্যের প্রায় বিশ বছর পরের তত্ত্ব-সম্প্রসারণ।</li>
<li><strong>শক্তি-হিসাব:</strong> সোর্সের দান = লোডের খরচ — পাওয়ার-বাজেট (Door 4) এখানে তাত্ত্বিক ভিত্তি পায়।</li>
</ul>`
  }
});

// ── DOOR 7: হ্যাঁ-নার জগৎ (LOGIC GATES & DIGITAL LOGIC) ──
doors.push({
  num:7, icon:"🔀", color:"#22d3ee", name:"হ্যাঁ-নার জগৎ",
  subtitle:"The World of Yes and No", tech:"Logic Levels, AND/OR/NOT, NAND Universality, Flip-Flop & Memory (Boole 1854; Shannon 1937)",
  spirit:"নূর — উপস্থিতি ও অনুপস্থিতি; যা জ্বলে তা-ই কথা বলে (২৪:৩৫)",
  secret:"সব প্রশ্নের জবাব দুই অঙ্কে নামাও — তারপর যেকোনো যুক্তি তিনটা ইটে গাঁথা যায়: আর, অথবা, না।",
  recall:{
    q:"জাহেদ ভাইয়ের 'দুই-তারের দরজা-তালা' কী শেখায় — আর NAND দিয়ে কেন OR, AND, NOT সবই বানানো যায়, ফ্লিপ-ফ্লপ মনে রাখে কীভাবে?",
    qen:"What does Jahed's two-wire door-lock teach — why can NAND build OR, AND, NOT, and how does a flip-flop remember?",
    a:"ডিজিটালের চুক্তি: ভোল্টেজ-রেঞ্জ দুই ভাগ — যেমন ৩.৩V-ব্যবস্থায় ০~০.৮V = '০/না/LOW', ২V~৩.৩V = '১/হ্যাঁ/HIGH' (মাঝের বিস্তৃতি অ-নির্ধারিত — noise margin-এর জন্য)। জাহেদ ভাইয়ের দরজা-তালা: দুই সুইচ সিরিজে = দুই-ই চাপলে তবেই বাজে = AND; পাশাপাশি = যেকোনো একটা চাপলেই বাজে = OR; একটাই তার কিন্তু উল্টো-সংযোগ = চাপলে বন্ধ = NOT। বুল (Laws of Thought, ১৮৫৪) এই যুক্তির বীজগণিত লিখেছিলেন খাঁটি চিন্তার জন্য; শ্যানন (MIT মাস্টার্স-থিসিস, ১৯৩৭ — 'A Symbolic Analysis of Relay and Switching Circuits') দেখালেন একই বীজগণিত সুইচ-তারে বসে যায় — সেই সেতুতেই পুরো কম্পিউটার-যুগ। NAND = AND+NOT এক প্যাকেটে; সে-ই সর্বজনীন ইট: NAND(১,১)=০ আর বাকি সব ইনপুটে ১ — এর থেকে NOT (দুই পা জোড়া), AND (NAND-এর পরে আরেকটা NAND-উল্টো), OR (ডি-মর্গান: A OR B = NAND(NOT A, NOT B))। আর মনে রাখা? দুই NAND পরস্পরকে ধরে রাখে — একটার আউটপুট অন্যটার ইনপুট; যেকোনো মুহূর্তে অবস্থা ১ বা ০ — সেট-রিসেট ফ্লিপ-ফ্লপ, এক বিট মেমোরির জন্ম। কোটি ফ্লিপ-ফ্লপ = কোটি বিট — চিপের ভেতরে এভাবেই স্মৃতি বসে।",
    aen:"Two voltage bands = 0/1 (0-0.8V vs 2-3.3V). Switches in series = AND, parallel = OR, cross-wired = NOT. Boole (1854) wrote the algebra; Shannon (1937 MIT thesis) wired it to switches. NAND is universal (builds all three); two NANDs cross-latched hold one bit — the flip-flop, memory's atom."
  },
  story:`
<p class="scene-setting">সপ্তম দরজা। জাহেদ ভাইয়ের কলিং-বেল-ঘাঁটি — কারিগরখানার ছাদের কোণে টিনের ঘর, ভেতরে ইনস্টল-খাতার স্তূপ, দেয়ালে ঝুলছে নানা বিল্ডিং-এর বেল-সার্কিটের খসড়া, টেবিলে বাজার-কেনা ডোরবেল-সেট আর ছেলেদের খেলার পুশ-বাটনের মালা। জাহেদ ভাই — ত্রিশের কোঠার শুরু, রোদে পোড়া চেহারা, গায়ে গ্রে-টি, আর তাঁর সিগনেচার: কানের ওপর কাঁচা-তামার পাতলা তারের ফাঁস — নতুন কোনো ভবনের তার টানতে গিয়ে মাথায় যেখানে তার লেগেছিল, সেখানে হাসিমুখে ফাঁস পরে রাখেন ('ব্যাজ', বলেন)। গন্ধ — তামার তার, পিভিসি, চা। শব্দ — নিচে কারিগরখানার গুঞ্জন, টেবিলের বেলের পরীক্ষা-টুংটাং।</p>
<p class="scene-setting en">The seventh door. Jahed's intercom van — a tin shed at the workshop roof's corner, install ledgers stacked, bell-circuit drafts of many buildings hung on the wall, a market doorbell set and a garland of toy push-buttons on the table. Jahed — early thirties, sun-burnt, grey tee, and his signature: a loop of raw copper wire hooked over his ear — where a building wire had caught his head once, he wears the loop as a laughing 'badge.' The smell of copper and PVC and tea; the workshop's hum below, test-dings from the table bell.</p>

<div class="dialogue">তুমি ঘাঁটিতে উঠলে। জাহেদ ভাই বেল-সেট খুলছিলেন। "ইকবাল সাহেবের কাছ থেকে? এক্সচেঞ্জ-হিসাব শিখেছ?"
"জি — জংশন-লুপ দুই খাতা।"
"তাহলে এবার সবচেয়ে মজার কাজ।" তিনি দুটো পুশ-বাটন টেবিলে রাখলেন, পাশে একটা বেল আর ব্যাটারি। "ধরো এক বাড়ির মালিক বলল — দরজায় দুই বাটন: নিচের তলায় একটা, ওপরের তলায় একটা। যে-তলা থেকেই চাপুক, একই বেল বাজবে। পারবে?"
তুমি ভাবলে। "দুই বাটন... পাশাপাশি জুড়ে দিলে?"
"ঠিক! যেকোনো একটা চাপলেই পথ হবে।" তিনি হাসলেন। "এবার দ্বিতীয় মালিক — বলল, বেল বাজবে শুধু তখনই যখন দরজার তালা খোলা আর বাটন চাপা — দুই-ই সত্য হলে। এটা?"
"সিরিজে!"
"দুই মালিক, দুই চাহিদা — কিন্তু খেয়াল করো, দুই-ই প্রশ্নের জবাব দুই অঙ্কে: বাটন চাপা = ১, ছাড়া = ০; বেল বাজা = ১, নীরব = ০। এই দুই-অঙ্গুলির জগতেই আমার পুরো ব্যবসা।"</div>
<div class="dialogue en">You climbed into the van. Jahed was opening a bell set. "From Iqbal's? Learned the exchange ledgers?"
"Yes — junction and loop."
"Then the most fun work." He set two push-buttons on the table, a bell, a battery. "A house owner says: two buttons — one downstairs, one up; either rings the same bell. Can you?"
You thought. "Wire them side by side?"
"Exactly! Either press makes the path." He grinned. "Now a second owner — ring only when the door-lock is open AND the button pressed — both true."
"Series!"
"Two owners, two demands — but notice: both answer in two digits: pressed = 1, released = 0; ringing = 1, silent = 0. In this two-digit world runs my whole trade."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> জাহেদ ভাইয়ের প্রথম বড় ইনস্টল — এক স্কুলে ছিল চারতলা, প্রতিটা তলায় কল-বেল। সে সব বাটন সিরিজে বেঁধেছিল (মালিক বলেছিল 'সব বাটন এক সাথে কাজ করবে' — সে বুঝেছিল সবাই মিলে চাপলে!)। ফল: একটাও বেল বাজে না যতক্ষণ চার তলার চারটা বাটন একসাথে না চাপা হয়। মালিক রেগে ফোন করল; সারা রাত পুনরায়-তার — পাশাপাশি। <strong>গ্রাহকের 'এবং' আর 'অথবা' আগে স্পষ্ট করো — সার্কিটে অনুবাদ পরে।</strong></div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">০ / ১</div><div class="sc-label">দুই ভোল্টেজ-ব্যান্ড: ০~০.৮V = না, ২~৩.৩V = হ্যাঁ (noise margin-ফাঁক)</div></div>
<div class="stat-card"><div class="sc-num">১৮৫৪</div><div class="sc-label">জর্জ বুল — Laws of Thought: যুক্তির বীজগণিত</div></div>
<div class="stat-card"><div class="sc-num">১৯৩৭</div><div class="sc-label">ক্লদ শ্যানন — MIT থিসিস: বীজগণিত ↔ সুইচ-তারের সেতু</div></div>
<div class="stat-card"><div class="sc-num">NAND</div><div class="sc-label">সর্বজনীন ইট — একে দিয়েই AND/OR/NOT/ফ্লিপ-ফ্লপ সব</div></div>
</div>

<div class="diagram">
<div class="diag-title">তিন ইটের রাজ্য — গেট-সিম্বল ও সত্য-সারণী</div>
<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg">
  <use class="sym sym-cyan" href="#sym-and" transform="translate(40,50)"/>
  <text class="lbl-sm lbl-right" x="34" y="41">A</text>
  <text class="lbl-sm lbl-right" x="34" y="59">B</text>
  <text class="lbl-cyan" x="66" y="26">AND</text>
  <text class="lbl-sm lbl-left" x="96" y="50">Y</text>
  <text class="lbl-sm" x="66" y="86">দুই-ই ১ হলে ১</text>
  <use class="sym sym-cyan" href="#sym-or" transform="translate(215,50)"/>
  <text class="lbl-sm lbl-right" x="209" y="41">A</text>
  <text class="lbl-sm lbl-right" x="209" y="59">B</text>
  <text class="lbl-cyan" x="243" y="26">OR</text>
  <text class="lbl-sm lbl-left" x="271" y="50">Y</text>
  <text class="lbl-sm" x="243" y="86">যেকোনো ১ হলে ১</text>
  <use class="sym sym-cyan" href="#sym-not" transform="translate(390,50)"/>
  <text class="lbl-sm lbl-right" x="384" y="50">A</text>
  <text class="lbl-cyan" x="416" y="26">NOT</text>
  <text class="lbl-sm lbl-left" x="446" y="50">Y</text>
  <text class="lbl-sm" x="416" y="86">উল্টে দেয়</text>
  <use class="sym sym-hot" href="#sym-nand" transform="translate(60,150)"/>
  <text class="lbl-hot" x="86" y="126">NAND — সর্বজনীন ইট</text>
  <text class="lbl-sm lbl-right" x="54" y="141">A</text>
  <text class="lbl-sm lbl-right" x="54" y="159">B</text>
  <text class="lbl-sm lbl-left" x="116" y="150">Y</text>
  <text class="lbl-sm" x="86" y="188">শুধু এই একটাই ছাপালেই</text>
  <text class="lbl-sm" x="86" y="204">বাকি সব গেট বানানো যায়</text>
  <rect class="cell" x="200" y="118" width="150" height="150" rx="8"/>
  <text class="lbl-cyan" x="275" y="136">সত্য-সারণী</text>
  <text class="lbl-sm" x="222" y="158">A</text>
  <text class="lbl-sm" x="252" y="158">B</text>
  <text class="lbl-sm" x="288" y="158">AND</text>
  <text class="lbl-sm" x="326" y="158">NAND</text>
  <path class="wire" d="M210 166 H340"/>
  <text class="lbl-sm" x="222" y="182">০</text><text class="lbl-sm" x="252" y="182">০</text>
  <text class="lbl-sm" x="288" y="182">০</text><text class="lbl-hot" x="326" y="182">১</text>
  <text class="lbl-sm" x="222" y="204">০</text><text class="lbl-sm" x="252" y="204">১</text>
  <text class="lbl-sm" x="288" y="204">০</text><text class="lbl-hot" x="326" y="204">১</text>
  <text class="lbl-sm" x="222" y="226">১</text><text class="lbl-sm" x="252" y="226">০</text>
  <text class="lbl-sm" x="288" y="226">০</text><text class="lbl-hot" x="326" y="226">১</text>
  <text class="lbl-sm" x="222" y="248">১</text><text class="lbl-sm" x="252" y="248">১</text>
  <text class="lbl-cyan" x="288" y="248">১</text><text class="lbl-hot" x="326" y="248">০</text>
  <rect class="cell-hot" x="374" y="118" width="176" height="150" rx="8"/>
  <text class="lbl-hot" x="462" y="136">NAND থেকে বাকি সব</text>
  <text class="lbl-sm lbl-left" x="386" y="162">NOT A = NAND(A, A)</text>
  <text class="lbl-sm lbl-left" x="386" y="186">A AND B = NOT(NAND(A,B))</text>
  <text class="lbl-sm lbl-left" x="386" y="210">A OR B = NAND(¬A, ¬B)</text>
  <text class="lbl-sm lbl-left" x="386" y="240">ডি-মর্গান: ¬(A·B) = ¬A + ¬B</text>
</svg>
<div class="diag-cap">তিন ইটের আকৃতি ও সত্য-সারণী — AND শুধু দুই-ই '১' হলে '১'; OR যেকোনো '১'-এ '১'; NOT উল্টে দেয়। NAND-এ সব যুক্তি গাঁথা যায়।</div>
</div>

<div class="dialogue">তারপর জাহেদ ভাই সবচেয়ে গোপন কথাটা বললেন — বেল-বোতলের খালি গ্লাসে চা ঢালতে ঢালতে: "১৯৩৭ সাল। আমেরিকার MIT-তে বিশ বছরের এক ছাত্র মাস্টার্স-থিসিস লিখল — নাম ক্লদ শ্যানন। আর আগে ১৮৫৪-তে ইংল্যান্ডের এক শিক্ষক জর্জ বুল লিখলেন যুক্তির বীজগণিত — ভাবলেন মানুষের চিন্তার নিয়ম মেলে। কেউ ভাবেনি দুই পাণ্ডুলিপি একদিন মিলবে। শ্যানন দেখালেন — বুলের প্রতিটা সূত্র তারে-সুইচে বসে: সিরিজ হলো 'এবং', পাশাপাশি 'অথবা', দুই-তারের ক্রস 'না'। সেদিনই তার-জাল থেকে কম্পিউটারের জন্ম-সনদ। আমার এই ঘাঁটির প্রতিটা বেল-সার্কিট তাদেরই নাতি-নাতনি।" তিনি দুটো NAND-গেটের খসড়া এঁকে দেখালেন — একটার আউটপুট অন্যটার ইনপুটে ফিরে যায়, দুই-ই পরস্পরকে ধরে থাকে: "এই দেখো স্মৃতির পরমাণু — ফ্লিপ-ফ্লপ। একবার বলল '১' — ধরে রাখে যতক্ষণ না বলা হয় '০ হও'। চিপের ভেতরে কোটি কোটি এমন জোড়া — তোমার ফোনের ছবি, গান, এই মুহূর্তের কথা — সব এই ছোট্ট আঁকড়ে-থাকা জোড়ার ভিড়ে।"</div>
<div class="dialogue en">Then Jahed told the most secret part, pouring tea into a bell-bottle's empty glass: "1937. At MIT a twenty-year-old wrote a master's thesis — Claude Shannon. And back in 1854 an English teacher, George Boole, wrote the algebra of reasoning — thinking he'd found the laws of thought. No one imagined the two manuscripts would meet. Shannon showed — every law of Boole lands on wire and switch: series is 'and', parallel 'or', the crossed pair 'not.' That day the birth-certificate of the computer was signed on a telephone network. Every bell-circuit in this van is their grandchild." He sketched two NAND gates, each output feeding the other's input, both holding: "Behold memory's atom — the flip-flop. Say '1' once — it holds until told 'be 0.' Inside a chip, billions of such pairs — your phone's photos, songs, this very conversation — all live in crowds of these little clinging pairs."</div>

<div class="code-block">দুই-অঙ্কের রাজ্য — Digital Logic:

লেভেল-চুক্তি (৩.৩V-ব্যবস্থা):
  LOW  = ০ ~ ০.৮V   → '০' (না)
  HIGH = ২.০ ~ ৩.৩V → '১' (হ্যাঁ)
  মাঝের ফাঁক = অ-নির্ধারিত + noise-margin (ইচ্ছা করেই রাখা)

তিন ইট (সুইচের ভাষায়):
  AND  = সিরিজ বাটন — দুই-ই চাপলে তবেই পথ
  OR   = পাশাপাশি — যেকোনো একটা চাপলেই পথ
  NOT  = উল্টো-সংযোগ — চাপলে বন্ধ, ছাড়লে খোলা

গেট-বীজগণিত (বুল ১৮৫৪ → শ্যানন ১৯৩৭):
  A AND B, A OR B, NOT A — যেকোনো যুক্তি এই তিনের জোড়ে
  ডি-মর্গান: NOT(A AND B) = (NOT A) OR (NOT B)
           NOT(A OR B)  = (NOT A) AND (NOT B)
  NAND-সর্বজনীনতা:
    NOT A = NAND(A, A)
    A AND B = NOT(NAND(A, B))
    A OR B = NAND(NOT A, NOT B)
    → চিপ-কারখানা শুধু NAND-ই ছাপায় — বাকি সব ডিজাইনে জোড়া!

স্মৃতির জন্ম — SR ফ্লিপ-ফ্লপ:
  দুই NAND ক্রস-জোড়া: Q আর Q̄ পরস্পর-আঁকড়ে
  S=০ ধাক্কা → Q=১ (সেট, মনে রাখলো)
  R=০ ধাক্কা → Q=০ (রিসেট)
  ছেড়ে দিলে — পূর্বের অবস্থায় আঁকড়ে থাকে (মেমোরি!)
  ১ ফ্লিপ-ফ্লপ = ১ বিট | ৮টা = ১ বাইট
  → রেজিস্টার/ক্যাশ/RAM-এর সব কাহিনি এখান থেকে

MCU-সংযোগ (আগাম-পথ):
  GPIO আউটপুট = তোমার হাতের '১/০' লেখক
  ডিজিটাল-সেন্সর (দরজা-সুইচ, PIR) = পড়ার '১/০'
  লজিক-লেভেল মেলাও: ৫V-মডিউল ↔ ৩.৩V-MCU
  না-মেলালে লেভেল-শিফটার/ভোল্টেজ-ডিভাইডার (Door ৬!)</div>

<div class="dialogue">আসরের আগে জাহেদ ভাই তারের ফাঁস খুলে টুলব্যাগে ভরলেন — পরের ভবনের ইনস্টল। দরজায় দাঁড়িয়ে বললেন: "কুরআনের সবচেয়ে সুন্দর উপমাগুলোর একটা — 'আল্লাহ আসমান ও জমিনের নূর' (২৪:৩৫)। আলো মানে উপস্থিতি; অন্ধকার অনুপস্থিতি। আমার জগতেও তো তাই: পিনে ভোল্টেজ আছে = কথা বলছে; নেই = চুপ। পুরো সভ্যতা এখন এই উপস্থিতি-অনুপস্থিতির বুনোনে — কোটি কোটি হ্যাঁ-না-র তালি। নূর যেমন এক ফোঁটা থেকে পুরো ঘর ভরে, একটা ছোট্ট বাটনের ১ থেকেও পুরো শহরের বেল-জাল জেগে ওঠে। উপস্থিত থাকো, বুঝো, তারপর নিজের ১-০ লিখো। কাল ফারহান ভাইয়ের কাছে যাও — সেই ১-০-এর শহর নিজেই: চিপের ভেতরের ছোট্ট নগরী।"</div>
<div class="dialogue en">Before Asr, Jahed unhooked the wire loop and packed his tool bag — an install in the next building. At the door he said: "One of the Quran's most beautiful parables — 'Allah is the Light of the heavens and the earth' (24:35). Light is presence; darkness, absence. So in my world: voltage on a pin means it is speaking; none, silence. All civilization is now woven of presence and absence — the clapping of billions of yeses and noes. As one drop of light fills a whole house, one small button's 1 can wake a city's bell-network. Be present, understand, then write your own 1s and 0s. Tomorrow — Farhan's: that very city of 1s and 0s, the small town inside a chip."</div>



<div class="photo-frame"><img src="photos/diode.jpg" alt="1N400x সিরিজের ডায়োড — শরীরের স্ট্রাইপ দিক বলে"><div class="photo-cap">1N400x সিরিজের ডায়োড — শরীরের স্ট্রাইপ দিক বলে · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — 74HC00 চিপ: এক শরীরে চার NAND</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="180" y="30" width="200" height="180"/>
  <text class="lbl" x="280" y="52">74HC00 (DIP-১৪)</text>
  <circle class="node-hot" cx="200" cy="76" r="4"/><circle class="node" cx="200" cy="96" r="4"/><circle class="node" cx="200" cy="116" r="4"/><circle class="node" cx="200" cy="136" r="4"/>
  <circle class="node" cx="360" cy="76" r="4"/><circle class="node" cx="360" cy="96" r="4"/><circle class="node" cx="360" cy="116" r="4"/><circle class="node" cx="360" cy="136" r="4"/>
  <text class="lbl-sm" x="130" y="80" font-size="10">1A 1B 1Y 2A</text>
  <text class="lbl-sm" x="375" y="80" font-size="10">2B 2Y 3A 3B</text>
  <text class="lbl-hot" x="280" y="196" font-size="10">পা৭ = GND · পা১৪ = VCC</text>
  <text class="lbl-sm" x="280" y="216" font-size="10">নচ (উপরের-কাট) = পা-১ শনাক্তকারী</text>
  <rect class="cell-cyan" x="30" y="90" width="120" height="60"/>
  <text class="lbl-cyan" x="90" y="112">ভেতরে ৪টা</text>
  <text class="lbl-cyan" x="90" y="130">স্বাধীন NAND</text>
  <text class="lbl-sm" x="440" y="100" font-size="10">HC = দ্রুত-CMOS</text>
  <text class="lbl-sm" x="440" y="120" font-size="10">২~৬V চালু</text>
  <text class="lbl-sm" x="440" y="140" font-size="10">ব্যবহর্তা-পাওয়ার খেয়াল!</text>
</svg>
<div class="diag-cap">লজিক-চিপ এক-প্যাকেটে চার দরজা — প্রতিটার A/B/Y; কর্নার-পাওয়ার প্রথম দেখো, নচ-দিক থেকে পা গোনো; একই NAND-ই গতকালের সব-যুক্তির ইট।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — ডিবাউন্স: বাটনের কম্পন-মুছা ফ্লিপ-ফ্লপ</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <line class="axis" x1="50" y1="30" x2="50" y2="120"/>
  <line class="axis" x1="50" y1="120" x2="530" y2="120"/>
  <path class="edge-hot" d="M 50 110 L 200 110 L 208 45 L 216 108 L 224 48 L 232 106 L 240 46 L 260 46" fill="none"/>
  <text class="lbl-hot" x="160" y="30" font-size="10">কাঁচা-বাটন: খোলার ঝাঁকি (bounce)</text>
  <line class="axis" x1="50" y1="150" x2="50" y2="235"/>
  <line class="axis" x1="50" y1="235" x2="530" y2="235"/>
  <path class="edge-cyan" d="M 50 225 L 255 225 L 255 165 L 530 165" fill="none"/>
  <text class="lbl-cyan" x="300" y="150" font-size="10">SR-ফ্লিপ-ফ্লপের জবাব: এক-ই ধার</text>
  <line class="grid-line" x1="255" y1="165" x2="255" y2="235" stroke-dasharray="3,4"/>
  <text class="lbl-sm" x="400" y="205" font-size="10">দুই-ইনভার্টার ল্যাচ বা NAND-জোড়া — প্রথম ধারই ধরে রাখে</text>
  <text class="lbl-sm" x="400" y="222" font-size="10">সফটওয়্যার-বিকল্প: ২০ms-অপেক্ষা (দরজা ১১-এর মিলিস!)</text>
</svg>
<div class="diag-cap">যান্ত্রিক বাটন চাপলে ৫-২০ms কাঁপে — কাঁচা-পাঠে এক-চাপ ডজন পালস; হার্ডওয়্যার-ল্যাচ বা সফটওয়্যার-অপেক্ষা কম্পন মুছে এক-ঘটনা বানায়।</div>
</div>

<div class="verse">
<div class="verse-arabic">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div class="verse-translation">আল্লাহ আসমানসমূহ ও পৃথিবীর নূর (আলো)।</div>
<div class="verse-ref">— কুরআন ২৪:৩৫</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 7 — বুদ্ধির ইট — লজিকের স্তর:</strong> কোথায় হ্যাঁ-না হিসেব হবে? ফার্মওয়্যার লেখার আগে সিদ্ধান্ত-গাছ এঁকেছি: আর্দ্রতা < ৩৫%? → ভালভ-খোলা; বৃষ্টি-ডাক? → পাঠ-এখনই। <strong>নিয়ম:</strong> গাছের প্রতিটা নোড এক প্রশ্ন — তার জবাব এক বিট; চিপের ভেতরে কোটি NAND ঠিক এই গাছই চালায়। আমাদের গাছ এখন কাগজে — পরের দরজায় সেটা শহরে বসবে।</div></div>
<div class="secret-box"><div class="label">দরজা ৭ — রহস্য</div><div class="text">🔀 সব যুক্তি তিন ইটে — এবং/অথবা/না; NAND-এ সব ইট; দুই NAND-এর আঁকড়ানো জোড়ায় স্মৃতির জন্ম।<br><small>লেভেল-চুক্তি ০.৮/২V-ফাঁক; বুল ১৮৫৪ + শ্যানন ১৯৩৭ = তার-থেকে-কম্পিউটার সেতু; ফ্লিপ-ফ্লপ = ১ বিট। নূর: ২৪:৩৫।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>তিন ইট সুইচে হাতে-বোধ:</strong> সিরিজ=AND, পাশাপাশি=OR, ক্রস=NOT — বাটন-বেল দিয়ে নিজে জুড়ে দেখো; ট্রুথ-টেবিল তখন মুখস্থ নয়, অভিজ্ঞতা।</li>
<li><strong>লেভেল-চুক্তি মনে:</strong> দুই ব্যান্ড + মাঝের noise-margin — কেন ২.৬V '১' না '০' প্রশ্নে উত্তর পরিষ্কার দিতে পারবে।</li>
<li><strong>NAND-সর্বজনীনতা প্রমাণ-করা:</strong> NOT/AND/OR বানানোর তিন লাইন নিজে লিখে যাচাই করো (ডি-মর্গান মাথায়)।</li>
<li><strong>ফ্লিপ-ফ্লপ-অন্তর্দৃষ্টি:</strong> 'আঁকড়ে থাকা' = মেমোরির পদার্থ — রেজিস্টার থেকে RAM পর্যন্ত এক বংশলতিকা।</li>
<li><strong>ইতিহাস-জোড়া:</strong> বুল ১৮৫৪ (চিন্তার বীজগণিত) + শ্যানন ১৯৩৭ (MIT থিসিস, তারে বসানো) — দুই পাণ্ডুলিপির সাক্ষাৎকার গল্পে বলতে পারবে।</li>
</ul>`
  }
});

// ── DOOR 8: ক্ষুদ্র শহর (MICROCONTROLLER ANATOMY) ──
doors.push({
  num:8, icon:"🏙️", color:"#818cf8", name:"ক্ষুদ্র শহর",
  subtitle:"The Small City", tech:"MCU Anatomy: CPU, RAM vs Flash, GPIO, Peripherals, Buses; Intel 4004 (1971) → AVR (1996) → ARM (1985) → ESP32 (2016)",
  spirit:"শহর ও দরবার — প্রতিটা অঙ্গনায় নিজস্ব দপ্তর, এক কেন্দ্রে হুকুম (৯:১০৫ — 'কাজ করো, তিনি দেখবেন'; ২৭:৩৪-৩৮ সাবা-রানীর দরবার)",
  secret:"চিপ একটা শহর: দরবার (CPU) হুকুম দেয়, খাজাঞ্চি-খানা (RAM) খেয়াল রাখে, কাগজাঘর (Flash) চিরস্থায়ী সংবিধান ধরে, আর ফটকের দরওয়ানরা (GPIO) দুনিয়ার সাথে কথা বলে।",
  recall:{
    q:"ফারহান ভাইয়ের 'শহর-মানচিত্র' অনুযায়ী RAM আর Flash-এর কাজের পার্থক্য কী — আর GPIO পিনের মোডগুলো (ইনপুট/আউটপুট/পুল-আপ) কেন জানা দরকার?",
    qen:"In Farhan's city map, what divides RAM from Flash — and why know GPIO modes (input/output/pull-up)?",
    a:"RAM = শহরের খাজাঞ্চি-খাতা: দ্রুত পড়া-লেখা, কিন্তু বিদ্যুৎ গেলে সব মুছে যায় (volatile) — চলমান ভেরিয়েবল, স্ট্যাক, বাফার এখানে। Flash = কাগজাঘর: ধীর, কিন্তু বিদ্যুৎ ছাড়াও থাকে (non-volatile) — ফার্মওয়্যার-কোড আর ধ্রুবক-ডেটা এখানে; বুট হলে কোড এখান থেকেই চালু হয়। CPU = দরবার: নির্দেশ এক-এক করে তুলে চালায় (fetch-decode-execute); রেজিস্টার = দরবারের হাতের ট্রে-র কয়েকটা খোপ (সবচেয়ে দ্রুত স্মৃতি)। ঘড়ি (clock) = শহরের নগাড়া — প্রতি ঘণ্টায় সব দপ্তর এক সাথে পা ফেলে (১৬MHz মানে সেকেন্ডে কোটি ষোলো নগাড়া!)। GPIO = ফটকের দরওয়ান: প্রতিটা পিন ইনপুট (বাইরের হ্যাঁ-না পড়া — বাটন) বা আউটপুট (নিজের হ্যাঁ-না দেওয়া — LED) হতে পারে; ইনপুট-মোডে ভাসমান-পিন বিপদ — বাতাসের শব্দেই ০/১ লাফায়, তাই অভ্যন্তরীণ পুল-আপ/ডাউন-রেজিস্টর বসিয়ে অবস্থা স্থির করো (বাটন-পড়ার প্রথম নিয়ম)। পেরিফেরিয়াল = বিশেষ দপ্তর: টাইমার (সময়ের হিসাব), UART/SPI/I2C (চিঠির দপ্তর, Door ১৩), ADC (অ্যানালগ-অনুবাদক, Door ১২) — সবাই বাস-রাস্তায় CPU-র সাথে যুক্ত। ইতিহাসের সিঁড়ি: Intel 4004 (১৯৭১ — প্রথম বাণিজ্যিক মাইক্রোপ্রসেসর, ফাগিন-হফ-মাজর-শিমা) → AVR (১৯৯৬, Atmel — আর্দুইনোর হৃদয়) → ARM (অ্যাকর্ন ১৯৮৩-৮৫, উইলসন-ফারবার — আজকের ফোনের প্রাণ) → ESP32 (২০১৬, Espressif — WiFi+BT সহ সস্তা IoT-শহর)।",
    aen:"RAM: fast, volatile — running variables. Flash: slower, non-volatile — the firmware itself, boot source. CPU fetch-decode-executes; registers are its hand-tray. Clock = the city drum. GPIO pins are gatekeepers (input to read buttons, output to drive LEDs; pull-ups tame floating pins). Peripherals: timer, UART/SPI/I2C, ADC — departments on the bus. 4004 (1971) → AVR (1996) → ARM (1985) → ESP32 (2016)."
  },
  story:`
<p class="scene-setting">অষ্টম দরজা। কারিগরখানার সবচেয়ে ভেতরের ঘর — ফারহান ভাইয়ের এমবেডেড-কোণ: টেবিলে তিনটা ডেভ-বোর্ড (একটার ঠোঁটে লাল LED নিভছে-জ্বলছে), ঝুলন্ত USB-কেবলের ঝাড়, দেয়ালে আটকানো বড় করে ছাপা চিপের ডেটাশিটের পাতা। ফারহান ভাই — শেষ ত্রিশের দিকে, চোখে পাতলা ফ্রেম, গায়ে টি-শার্টে ছাপা 'ESP32' লোগো (পুরনো প্রজেক্টের স্মৃতি), আর তাঁর সিগনেচার: কবজিতে বাঁধা অ্যান্টিস্ট্যাটিক-ব্রেসলেটের কয়েল-তার — কোনো বোর্ড ছোঁবার আগে আগে কয়েলটা টান দিয়ে নিজের শরীরের স্ট্যাটিক মাটিতে নামিয়ে নেন, অভ্যাস এমন যে কথার মাঝেও হাত যায়। গন্ধ — গরম বোর্ড, ফ্লাক্স, কফি। শব্দ — USB-ফ্যান, দূরে টার্মিনালে ক্লিক-ক্লিক টাইপের আভাস, LED-ব্লিংকের নীরব ছন্দ।</p>
<p class="scene-setting en">The eighth door. The workshop's innermost room — Farhan's embedded corner: three dev boards on the table (one blinking a red LED), a thicket of hanging USB cables, printed datasheet pages pinned large on the wall. Farhan — late twenties, thin frames, a tee with the ESP32 logo (an old project's memory), and his signature: an anti-static wrist strap's coiled cord at his wrist — before touching any board he tugs the coil to ground himself, a habit so deep his hand moves mid-sentence. The smell of warm boards, flux, coffee; a USB fan, distant typing, the silent rhythm of a blinking LED.</p>

<div class="dialogue">তুমি ঘরে ঢুকলে ফারহান ভাই ঠিক কয়েল টেনে একটা বোর্ড ধরলেন। "জাহেদ ভাইয়ের হ্যাঁ-না দেখে এসেছ? গেট-ইট, ফ্লিপ-ফ্লপ?"
"জি — NAND-এ সব, আর দুই NAND-এ এক বিট মনে থাকে।"
"তাহলে আজ সেই বিটদের শহর।" তিনি ESP32-বোর্ডটা তোমার হাতে দিলেন — তুমি ওটা ধরার আগেই সে নিজের কবজির কয়েল দেখিয়ে হাসলেন; তুমিও শিখলে প্রথম রীতি: চিপ ছোঁয় নগ্ন হাতে নয়, স্ট্যাটিক-স্পর্শে দরজার দরওয়ান মারা যায়। "এই দানাটা — আঙুলের নখের সমান — এর ভেতরে একটা পূর্ণ শহর। প্রবেশ করবে?"</div>
<div class="dialogue en">You entered as Farhan tugged the coil and lifted a board. "Seen Jahed's yes-no? Gates, flip-flops?"
"Yes — NAND builds all, two NANDs hold a bit."
"Then today, the city of those bits." He placed the ESP32 board in your palm — and smiled, pointing at his wrist-coil before you touched it; you learned the first rite: never touch a chip bare-handed, static kills gatekeepers. "This grain — fingernail-sized — holds a whole city inside. Entering?"</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> ফারহান ভাইয়ের প্রথম প্রজেক্ট-বিস্তার — ছিল এক চালান কাস্টম-বোর্ড, সব নিখুঁত ডিজাইন, কিন্তু ফিল্ডে গেলে এলোমেলো রিসেট। মাস খুঁজে পাওয়া গেল: পাওয়ার-পায়ের কাছের ডিকোউপলিং-ক্যাপ (রফিক মামার ১০০nF!) বসানো হয়নি দুইটা চিপে — শহরের কল-ঠেলার মুহূর্তে ভোল্টেজ-দুলুনিতে দরবার অজ্ঞান। <strong>শহর যত ভালো, পানির ট্যাংক-ক্যাপ তত কাছে — নিয়ম ভাঙলে দরবার-পতন।</strong> (তিন দরজার পাঠ এক জায়গায় মিলল — এটাই এ বইয়ের ধারা।)</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৯৭১</div><div class="sc-label">Intel 4004 — প্রথম বাণিজ্যিক মাইক্রোপ্রসেসর (ফাগিন-হফ-মাজর-শিমা)</div></div>
<div class="stat-card"><div class="sc-num">RAM↔Flash</div><div class="sc-label">খাজাঞ্চি (দ্রুত, উড়ন্ত) বনাম কাগজাঘর (স্থায়ী, বুট-উৎস)</div></div>
<div class="stat-card"><div class="sc-num">GPIO</div><div class="sc-label">ফটকের দরওয়ান — ইনপুট পড়ো, আউটপুট লেখো, পুল-আপ দিয়ে স্থির করো</div></div>
<div class="stat-card"><div class="sc-num">১৬MHz</div><div class="sc-label">শহরের নগাড়া — সেকেন্ডে ১.৬ কোটি ধাপ (AVR-আর্দুইনোর হার্টবিট)</div></div>
</div>

<div class="diagram">
<div class="diag-title">চিপের শহর-মানচিত্র — এক MCU-র ভেতরের নগরী</div>
<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
  <!-- CPU core -->
  <rect class="cell-hot" x="200" y="30" width="160" height="52"/>
  <text class="lbl-hot" x="280" y="52">CPU দরবার</text>
  <text class="lbl-sm" x="280" y="70">fetch→decode→execute</text>
  <!-- clock -->
  <rect class="cell" x="420" y="30" width="110" height="30"/>
  <text class="lbl" x="475" y="45">নগাড়া ১৬MHz</text>
  <line class="edge" x1="360" y1="45" x2="420" y2="45"/>
  <!-- RAM -->
  <rect class="cell-cyan" x="40" y="110" width="130" height="44"/>
  <text class="lbl-cyan" x="105" y="128">RAM খাজাঞ্চি</text>
  <text class="lbl-sm" x="105" y="145">দ্রুত · উড়ন্ত</text>
  <!-- Flash -->
  <rect class="cell-cyan" x="200" y="110" width="130" height="44"/>
  <text class="lbl-cyan" x="265" y="128">Flash কাগজাঘর</text>
  <text class="lbl-sm" x="265" y="145">স্থায়ী · ফার্মওয়্যার</text>
  <!-- bus line connecting -->
  <line class="edge-amber" x1="60" y1="172" x2="500" y2="172"/>
  <text class="lbl-sm" x="280" y="190">শহরের প্রধান সড়ক — বাস (address+data)</text>
  <line class="edge" x1="105" y1="154" x2="105" y2="172"/>
  <line class="edge" x1="265" y1="154" x2="265" y2="172"/>
  <line class="edge" x1="280" y1="82" x2="280" y2="172"/>
  <line class="edge" x1="475" y1="60" x2="475" y2="172"/>
  <!-- peripherals row -->
  <rect class="cell" x="380" y="205" width="80" height="34"/>
  <text class="lbl-sm" x="420" y="226">টাইমার</text>
  <rect class="cell" x="470" y="205" width="80" height="34"/>
  <text class="lbl-sm" x="510" y="226">ADC/PWM</text>
  <rect class="cell" x="200" y="205" width="90" height="34"/>
  <text class="lbl-sm" x="245" y="222">UART/SPI/I2C</text>
  <line class="edge" x1="420" y1="205" x2="420" y2="172"/>
  <line class="edge" x1="510" y1="205" x2="510" y2="172"/>
  <line class="edge" x1="245" y1="205" x2="245" y2="172"/>
  <text class="lbl-sm" x="330" y="250" font-size="11">← বিশেষ দপ্তর (পেরিফেরিয়াল)</text>
  <!-- GPIO gates at bottom -->
  <rect class="cell-hot" x="40" y="205" width="110" height="34"/>
  <text class="lbl-hot" x="95" y="226">GPIO ফটক</text>
  <line class="edge" x1="95" y1="205" x2="95" y2="172"/>
  <!-- pins outside -->
  <line class="edge-hot" x1="30" y1="222" x2="14" y2="222"/>
  <line class="edge-hot" x1="30" y1="236" x2="14" y2="236"/>
  <line class="edge-hot" x1="30" y1="250" x2="14" y2="250"/>
  <text class="lbl-sm" x="150" y="262" font-size="11">দরওয়ান-পিন: LED · বাটন · সেন্সর</text>
</svg>
<div class="diag-cap">এক চিপের অঙ্গন: দরবার (CPU) নগাড়ার তালে হুকুম দেয়; খাজাঞ্চি (RAM) আর কাগজাঘর (Flash) মূল সড়কে (বাস) যুক্ত; বিশেষ দপ্তরে সময়-অনুবাদ-চিঠি; আর চারদিকে ফটকের দরওয়ান — GPIO।</div>
</div>

<div class="dialogue">ফারহান ভাই দেয়ালের ডেটাশিট-পাতায় আঙুল রাখলেন — শত শত রেজিস্টারের ঠিকানা-তালিকা। "শহরের প্রতিটা দপ্তরের একটা ঠিকানা আছে। দরবার ঠিকানায় চিঠি পাঠায় — 'টাইমার, ১ সেকেন্ড গুনো'; 'ফটকের ৫ নম্বর দরওয়ান, তুমি আউটপুট হও, LED জ্বালাও'। এই ঠিকানায়-চিঠি পাঠানোর নামই রেজিস্টার-লেখা — আর এটাই তোমার পরের দরজার ভাষা।" তিনি বোর্ডের নিভু-নিভু LED-টা দেখিয়ে বললেন: "ওই জ্বলা-নেওয়াটা এখন তোমার কাছে যাদু; কাল থেকে হবে বাক্য — কোডের এক লাইন, দরবারের এক চিঠি। ইতিহাসটাও জেনে রাখো: ১৯৭১-এ ৪০০৪ ছিল প্রথম বাণিজ্যিক মাইক্রোপ্রসেসর — জাপানি ক্যালকুলেটরের জন্য জন্ম, চার বিট, ৭৪০kHz। তারপর AVR (১৯৯৬) শখের মানুষের হাতে শহর দিল, ARM (১৯৮৫-এ জন্ম, অ্যাকর্ন-এর দুই তরুণ উইলসন-ফারবারের নকশা) পকেটের ফোনে দরবার বসাল, আর ESP32 (২০১৬) শহরের ফটকেই লাগিয়ে দিল রেডিও-মিনার — WiFi। তুমি আজ যে দানাটা হাতে ধরে আছো, পঞ্চাশ বছরের সেই সিঁড়ির শেষ ধাপ — দুই ডলারের শহর, রেডিওসহ।" তারপর তিনি টেবিলের ড্রয়ার থেকে বের করলেন আরেকটা বোর্ড — পুরনো, চেনা Arduino Uno। "আর এই দানাটা রাখো আলাদা করে চিনে: ATmega328P। আমাদের কারিগরখানায় এখন দুই চিপ, দুই পোশাকে। <strong>Uno = স্বচ্ছ চিপ</strong> — এর রেজিস্টারগুলো এত সরল যে ভেতরটা চোখে দেখা যায়; তোমার হাতে-শেখার টেবিলে ওটাই থাকবে। <strong>ESP32 = মাঠের চিপ</strong> — যেটা আমাদের প্রজেক্টে যাবে, রেডিও-দপ্তর নিয়ে। এগিয়ে যেতে যেতে দেখবে: একই কাজ দুই চিপে দুই ভাষায় লেখা হয় — স্বচ্ছ চিপে সরাসরি রেজিস্টারে চিঠি, মাঠের চিপে লাইব্রেরির মোড়কে। <em>কৌশলটা একই থাকে — পোশাক বদলায়।</em> যে দুই-ই পড়তে জানে, সে-ই যেকোনো তৃতীয় চিপে ডেটাশিট খুলে বসতে পারে।"</div>
<div class="dialogue en">Farhan laid a finger on the wall's datasheet — pages of register addresses. "Every department has an address. The court writes to addresses: 'Timer, count one second'; 'Gate-keeper five, be output, light the LED.' Writing to addresses is register-writing — your next door's language." He pointed at the blinking LED. "That glow is magic to you now; from tomorrow it becomes a sentence — one line of code, one letter from the court. Know the history too: in 1971 the 4004 became the first commercial microprocessor — born for a Japanese calculator, four bits, 740kHz. Then AVR (1996) put cities in hobbyists' hands; ARM (born 1985, drawn by two Acorn youngsters, Wilson and Furber) seated courts inside pocket phones; and ESP32 (2016) bolted a radio-minaret right onto the city gate — WiFi. The grain in your palm is that fifty-year staircase's last step — a two-dollar city, radio included."</div>

<div class="code-block">শহর-মানচিত্রের চাবি — MCU Anatomy:

তিন স্মৃতি-স্তর (দ্রুততা বনাম স্থায়িত্ব):
  রেজিস্টার — দরবারের ট্রে: ৮/৩২-বিট কয়েকটা খোপ, এক নগাড়ায়
  RAM       — খাজাঞ্চি: ভেরিয়েবল, স্ট্যাক, বাফার (বিদ্যুৎ→শূন্য)
  Flash     — কাগজাঘর: কোড+ধ্রুবক (বিদ্যুৎ নেই→তবু আছে)
  AVR উদাহ: ৩২KB Flash / ২KB RAM / ১KB EEPROM
  ESP32 উদাহ: শতশত KB RAM + WiFi/BT রেডিও-দপ্তর

নগাড়া আর ধাপ:
  clock = সব দপ্তরের এক তাল; ১৬MHz → ৬২.৫ns/ধাপ
  এক নির্দেশ ≈ ১-কয়েক ধাপ (RISC-এ কম, CISC-এ বেশি)
  MIPS বোধ: ১৬MHz ÷ ধাপ-প্রতি-নির্দেশ ≈ কোটি-নির্দেশ/সেকেন্ড

GPIO — দরওয়ানের তিন পোশাক:
  OUTPUT: লেখো — HIGH(৩.৩V)/LOW(০V); সীমা ~২০-৪০mA/পিন
  INPUT: পড়ো — কিন্তু ভাসমান-পিন বিপদ (শব্দে ০/১ লাফায়)
  INPUT_PULLUP: অভ্যন্তরীণ রেজিস্টর পিনকে HIGH-এ ধরে রাখে
    → বাটন: পিন↔বাটন↔GND; না-চাপলে ১ (পুল-আপ), চাপলে ০
  (দুই পিন কখনো সরাসরি জোড়ো না — শর্ট!)

পেরিফেরিয়াল — বিশেষ দপ্তরের ভূমিকা:
  Timer/Counter: সময় গোনা, পালস গোনা (Door ১১)
  UART/SPI/I2C: চিঠি-দপ্তর (Door ১৩)
  ADC: অ্যানালগ→ডিজিটাল অনুবাদ (Door ১২)
  PWM: ডিজিটাল→'অ্যানালগ-অনুভূতি' (Door ১২)
  Watchdog: প্রহরী-কুকুর — দরবার আটকে গেলে রিসেট-ঘণ্টা

শহর-বংশলতিকা (মানচিত্র নয়, ইতিহাস):
  ১৯৭১ Intel 4004 (ফাগিন-হফ-মাজর-শিমা) — প্রথম বাণিজ্যিক
  ১৯৮৫ ARM1 (উইলসন-ফারবার, অ্যাকর্ন) — RISC-দরবার
  ১৯৯৬ AVR (বোগেন-ভোলান → Atmel) — শখের-শহর
  ২০০৫ আর্দুইনো (ইভ্রিয়া, বানজি-দল) — AVR-এর হাতে-হাতে শিক্ষা
  ২০১৬ ESP32 (Espressif) — শহর+রেডিও, দুই ডলারে

ডেভ-বোর্ড vs খালি চিপ:
  বোর্ড = শহর + বাজার (regulator, USB, পিন-হেডার, বাটন)
  খালি চিপ = শুধু শহর — নিজের বাজার গড়তে হয় (Door ১৪-এর গল্প)</div>

<div class="dialogue">রাতের দিকে ফারহান ভাই কয়েল-ব্রেসলেট খুলে টেবিলে রাখলেন। "শহর বলতে আমি কুরআনের সাবা-র কাহিনির কথা ভাবি — রানীর দরবার, সুলাইমান-আলাইহিস-সালামের চিঠি, হুদহুদের খবর — সব দপ্তর-দপ্তর কাজ, এক কেন্দ্রে ফয়সালা। আর নগরীর নিয়ম তো সেই: 'তোমাদের কাজ বিভিন্ন পথে আগিয়ে যাও, শহরে-শহরে' — প্রতিটা পেরিফেরিয়াল নিজের পথে কাজ করে, দরবার শুধু ঠিকানা জানে আর হুকুম দেয়। স্ট্যাটিক-ব্রেসলেট পর্যন্ত আমার কাছে আমানতের পাঠ: যে শহরে কোটি দরওয়ান, তার একজনকেও অবহেলায় মারা যায় না। কাল শারমিন আপার কাছে যাও — দরবারের ভাষা: C-কোড আর রেজিস্টার-চিঠি। প্রথম LED জ্বালাবে নিজের হাতে।"</div>
<div class="dialogue en">Toward night Farhan unclipped the wrist coil and set it on the table. "By 'city' I think of the Quran's Sheba — the queen's court, Solomon's letter, the hoopoe's report — department upon department, judgment at one center. A city's rule is that: 'Work, each of you, along your paths, through the cities' — every peripheral works its own path, the court only knows addresses and commands. Even the static strap is a lesson in amanah to me: a city of billions of gatekeepers may lose none to carelessness. Tomorrow — Sharmin's: the court's own language, C and register-letters. You will light your first LED with your own hand."</div>



<div class="photo-frame"><img src="photos/crystal.jpg" alt="কোয়ার্টজ ক্রিস্টাল-ঘড়ি — শহরের হৃদস্পন্দন-উৎস"><div class="photo-cap">কোয়ার্টজ ক্রিস্টাল-ঘড়ি — শহরের হৃদস্পন্দন-উৎস · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — ক্রিস্টাল ও রেজোনেটর: শহরের হৃদস্পন্দন-উৎস</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-hot" x="50" y="40" width="110" height="44"/>
  <text class="lbl-hot" x="105" y="60">ক্রিস্টাল</text>
  <text class="lbl-sm" x="105" y="78" font-size="10">১৬.০০০ মেগাহার্টজ</text>
  <rect class="cell" x="220" y="40" width="130" height="44"/>
  <text class="lbl" x="285" y="60">সিরামিক রেজোনেটর</text>
  <text class="lbl-sm" x="285" y="78" font-size="10">সস্তা · কম-নির্ভুল</text>
  <rect class="cell-cyan" x="410" y="40" width="130" height="44"/>
  <text class="lbl-cyan" x="475" y="60">অভ্যন্তরীণ RC</text>
  <text class="lbl-sm" x="475" y="78" font-size="10">ফ্যাক্টরি-ক্যালিব্রেটেড ১%</text>
  <rect class="cell" x="50" y="130" width="490" height="70"/>
  <text class="lbl" x="295" y="154">কোয়ার্টজ-রহস্য</text>
  <text class="lbl-sm" x="295" y="174" font-size="10">চাপ দিলে বিদ্যুৎ, বিদ্যুৎ দিলে কম্পন (piezo) — নিজ-ছন্দে দোলে</text>
  <text class="lbl-sm" x="295" y="192" font-size="10">USART-বন্ধুত্ব মনে রাখো: দুই প্রান্তের বিট-হার ২-৩%-এর বেশি ভাসলে চিঠি নষ্ট</text>
</svg>
<div class="diag-cap">ঘড়ির তিন শ্রেণি: ক্রিস্টাল (নির্ভুল ±০.০০৫%), সিরামিক (±০.৫%), অভ্যন্তরীণ RC (±১-১০%) — UART-এ যথেষ্ট, RTC-তে ক্রিস্টালই (৩২.৭৬৮kHz)।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — ডেটাশিট-পাঠ: ATmega328P-র জীবন-সারণি</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="30" y="30" width="500" height="190"/>
  <text class="lbl" x="280" y="56">ATmega328P (Arduino Uno-র হৃদয়)</text>
  <text class="lbl-sm" x="150" y="86" font-size="11">Flash ৩২KB · RAM ২KB · EEPROM ১KB</text>
  <text class="lbl-sm" x="150" y="108" font-size="11">১৬MHz · ২৩-পা GPIO · ১০-বিট ADC ×৬</text>
  <text class="lbl-sm" x="150" y="130" font-size="11">টাইমার ×৩ · UART×১ · SPI×১ · I2C×১</text>
  <text class="lbl-sm" x="150" y="152" font-size="11">VCC ১.৮-৫.৫V · ঘুম-মোড ×৬</text>
  <rect class="cell-hot" x="70" y="168" width="420" height="34"/>
  <text class="lbl-hot" x="280" y="188" font-size="10">ডেটাশিট পড়ার ক্রম: প্রথম-পাতা-সার → পিন-মানচিত্র → পেরিফেরিয়াল-অধ্যায় → রেজিস্টার-টেবিল</text>
</svg>
<div class="diag-cap">যেকোনো নতুন চিপের সাথে পরিচয় এভাবে: স্পেক-সারণি মুখস্থ নয় — কোন-দরজার প্রশ্নে কোন পাতা খুলব, সেই মানচিত্র তৈরি করা।</div>
</div>

<div class="verse">
<div class="verse-arabic">وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ</div>
<div class="verse-translation">আর বলো: তোমরা কাজ করো — আল্লাহ তোমাদের কাজ দেখবেন।</div>
<div class="verse-ref">— কুরআন ৯:১০৫</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 8 — মস্তিষ্ক নির্বাচন — শহর কেনাকাটা:</strong> সিদ্ধান্তের টেবিল: লোকাল-প্রসেসিং+রেডিও একসাথে চাই → <em>ESP32-DevKit</em> নির্বাচিত (WiFi-সহ, ৩.৩V, ADC×১২, I2C/SPI-সমৃদ্ধ, দুই-ডলার)। <strong>কেন-লগ:</strong> আলাদা MCU+রেডিও-মডিউল = দুই বাজার, দুই ফাঁদ; এক-দানা-শহর = ছোট বিল, কম তার। বোর্ড-বাছাইয়ের প্রশ্ন-তালিকা এখন খাতায়: পা-সংখ্যা? ADC? রেডিও? ভোল্টেজ? দাম?</div></div>
<div class="secret-box"><div class="label">দরজা ৮ — রহস্য</div><div class="text">🏙️ চিপ এক শহর: দরবার হুকুম দেয়, RAM খেয়াল রাখে, Flash সংবিধান ধরে, GPIO দুনিয়ার দুয়ার — সব ঠিকানায় চিঠিতে চলে।<br><small>রেজিস্টার>RAM>Flash; নগাড়া-clock; পুল-আপে বাটন-পড়া; ৪০০৪→ARM→AVR→ESP32। ৯:১০৫ — কাজ করো, দেখা হবে।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>তিন স্মৃতি-স্তরের ট্রেড-অফ:</strong> রেজিস্টার/RAM/Flash — কোন ডেটা কোথায় বাঁচে, কেন volatile/non-volatile প্রশ্নে তাৎক্ষণিক জবাব।</li>
<li><strong>GPIO-ত্রয়ী হাতে:</strong> OUTPUT-লেখা, INPUT-পড়া, INPUT_PULLUP-স্থিরকরণ — বাটন-সার্কিট (পিন↔সুইচ↔GND) চোখ বন্ধ করে আঁকো।</li>
<li><strong>শহর-মানচিত্র মনে:</strong> CPU/বাস/পেরিফেরিয়াল-ব্লক-ডায়াগ্রাম — যেকোনো নতুন MCU-র ডেটাশিট খুললে প্রথম খোঁজ এই মানচিত্র।</li>
<li><strong>বংশলতিকা গল্পে:</strong> ৪০০৪-এর ক্যালকুলেটর-জন্ম থেকে ESP32-র রেডিও-ফটক — পাঁচ মাইলফলক বছরসহ বলতে পারবে।</li>
<li><strong>ডেভ-বোর্ড বনাম খালি চিপ:</strong> বোর্ড=শহর+বাজার — কাল থেকে তুমি বোর্ডে শিখবে, Door ১৪-এ খালি-চিপের জগতে নামবে।</li>
</ul>`
  }
});
