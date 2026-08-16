// ════════════════════════════════════════
// সিলিকনের সাথে কথা — DOORS 1-4
// 1. Voltage/Current/Resistance (Ohm)   2. R-C-L
// 3. Diode/LED/Transistor               4. Power
// ════════════════════════════════════════
const doors = [];

// ── DOOR 1: বজ্রের অদ্ভুত নদী (VOLTAGE, CURRENT, RESISTANCE) ──
doors.push({
  num:1, icon:"⚡", color:"#f97316", name:"বজ্রের অদ্ভুত নদী",
  subtitle:"The Strange River of Lightning", tech:"Voltage (V), Current (I), Resistance (R), Ohm's Law V=IR (Georg Ohm, 1827)",
  spirit:"আসমানের নিদর্শন — বিদ্যুৎ ও বৃষ্টিতে ভয় ও আশা (৩০:২৪)",
  secret:"ভোল্টেজ ধাক্কা দেয়, কারেন্ট চলে, রেজিস্ট্যান্স আটকায় — V=IR মানে তিনজনের এক বাক্য।",
  recall:{
    q:"মোস্তাফিজ চাচা কেন ভাঙা রেডিওর ফিউজ বদলানোর আগে টর্চের ব্যাটারি আর পানির কথা বলেন — আর ৯V ব্যাটারিতে ১০০Ω রেজিস্টর জুড়লে কত কারেন্ট?",
    qen:"Why does Uncle Mostafiz talk about water before replacing a fuse — and how much current flows when a 100Ω resistor meets a 9V battery?",
    a:"কারণ তিনটা শব্দ পানি দিয়েই পরিষ্কার: ভোল্টেজ (V) = জলাধারের উচ্চতা-পার্থক্য — যে চাপ-ধাক্কা পানিকে নামায়; কারেন্ট (I, অ্যাম্পিয়ার) = প্রবাহের পরিমাণ — প্রতি সেকেন্ডে কত কুলম্ব চার্জ যাচ্ছে; রেজিস্ট্যান্স (R, ওহম Ω) = নালার সংকুচিত অংশ — যে প্রবাহ কমায়। ওহম ১৮২৭ সালে (Die galvanische Kette, mathematisch bearbeitet) দেখালেন তিনজনের সম্পর্ক এক সমীকরণে: V = I × R। ৯V-এ ১০০Ω: I = V/R = ৯/১০০ = ০.০৯ A = ৯০ mA। ফিউজ মরে কারণ ফিউজ-তার নিজের রেজিস্ট্যান্সে (খুব কম) বেশি I গেলে তাপ P=I²R-এ জ্বলে ওঠে — বলির পাঁঠা হয়ে বাকি সার্কিট বাঁচায়। ভোল্টেজ ছাড়া কারেন্ট নেই (ধাক্কা ছাড়া প্রবাহ নেই), কারেন্ট ছাড়া কাজ হয় না — দুটোই লাগবে, আর রেজিস্ট্যান্স ঠিক রাখবে কতটা চলবে।",
    aen:"Voltage = height difference (the push), current = flow amount, resistance = the narrowing. Ohm 1827: V=IR. 9V/100Ω = 90mA. A fuse dies by P=I²R — sacrificing itself to save the circuit."
  },
  story:`
<p class="scene-setting">প্রথম দরজা। পাটুয়াটুলির কারিগরখানা — সকাল দশটা, বাইরে রিকশার হর্ন, ভেতরে ভাঙা রেডিওর স্তূপ, দেয়ালে ঝোলানো পুরনো ভ্যাকুয়াম টিউব, সোল্ডারিং আয়রনের টিন-ধোঁয়ার গন্ধ আর রোজিনের ঝাঁঝ। মেরামত-টেবিলের মালিক মোস্তাফিজ চাচা — সত্তর ছুঁইছুঁই, সাদা পাঞ্জাবির ওপর কার্পাসের অ্যাপ্রন, আর তাঁর সিগনেচার: ডান চোখে গোঁজা পিতলের মনোকল — ভ্যাকুয়াম-টিউব যুগ থেকে রেখেছেন; সূক্ষ্ম জয়েন্ট দেখতে হলে মনোকল চোখে, নিজের মুখ কাগজের কাছে এনে বলেন, "এইখানে... এইখানেই খবর।" শব্দ — টেবিলের ওপর মাল্টিমিটারের ঝলক-শব্দ, দূরে একটা রেডিও হাফ-ভলিউমে পুরনো গান ছেড়ে আছে।</p>
<p class="scene-setting en">The first door. The Patuatuli workshop — ten in the morning, rickshaw horns outside, stacks of dead radios within, old vacuum tubes hung on the wall, the smell of tin smoke and rosin. At the repair bench, the owner — Uncle Mostafiz — nearly seventy, a cotton apron over his white panjabi, and his signature: a brass monocle clamped to his right eye, kept from the vacuum-tube era; to inspect a fine joint he sets the monocle, brings his face down to the board and says, "Here... here is the news." Sounds — a multimeter's beep, an old radio playing half-volume somewhere behind.</p>

<div class="dialogue">তুমি দরজায় দাঁড়িয়ে। মোস্তাফিজ চাচা মুখ না তুলে বললেন, "রেডিও নিয়ে এসেছো, না কৌতূহল নিয়ে?"
"কৌতূহল চাচা। ইলেকট্রনিক্স শিখতে চাই — শুরু থেকে।"
তিনি হাতের স্ক্রুড্রাইভার রাখলেন, মনোকল খুলে ঝুলিয়ে দিলেন গলায়। "শুরু মানে আমার কাছে একটাই জায়গা — বজ্র। বসো।" টেবিলের ওপর থেকে একটা টর্চ, দুইটা তার, একটা ছোট্ট বাল্ব তুলে নিলেন। "কুরআনে আছে — বিদ্যুৎ-চমক আর বৃষ্টির মধ্যে তিনি ভয় ও আশা দেখান (৩০:২৪)। দুই হাজার বছর মানুষ ওই বজ্র দেখে ভয় পেত, আশা করত — কিন্তু হাতে পায়নি। পাওয়া শুরু হলো যখর বোঝা গেল: বজ্র আসলে একটা নদী — চার্জের নদী।"</div>
<div class="dialogue en">You stood at the door. Without looking up: "Brought a radio, or curiosity?"
"Curiosity, uncle. I want to learn electronics — from the beginning."
He set down the screwdriver, unclamped the monocle to hang at his neck. "The beginning, for me, is one place — lightning. Sit." From the bench he took a torch, two wires, a small bulb. "The Quran says — in lightning and rain He shows fear and hope (30:24). For two thousand years people watched that lightning and feared, hoped — but never held it. Holding began when it was understood: lightning is a river — a river of charge."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> চাচার শিক্ষানবিশি-দিনের গল্প — এক ঝোড়ো রাতে জেনারেটর-রেডিও সারাতে গিয়ে সে মনে করেছিল "ব্যাটারি তো মানুষ হাতে ধরে — তাহলে তারও ধরা যায়।" জ্যান্ত সার্কিটের লাইভ তার ধরতেই হাতে বিদ্যুৎ-ধাক্কা — পা পিছলে পড়ে যাওয়ার দশা। সেদিন উস্তাদ শিখিয়েছিলেন প্রথম নিয়ম, যা চাচা আজও টেবিলে লিখে রাখেন: <strong>"কারেন্ট দেখা যায় না — সন্দেহ হলে মরা নিশ্চিত করো (মাল্টিমিটার/ফিউজ খুলে), তারপর হাত দাও।"</strong> নদীকে অবজ্ঞা করলে নদী ডোবায়।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">V (ভোল্ট)</div><div class="sc-label">উচ্চতা-পার্থক্য — ধাক্কার শক্তি (৯V, ৫V, ৩.৩V)</div></div>
<div class="stat-card"><div class="sc-num">I (অ্যাম্পিয়ার)</div><div class="sc-label">প্রবাহ — প্রতি সেকেন্ডে চার্জের স্রোত (mA থেকে A)</div></div>
<div class="stat-card"><div class="sc-num">R (ওহম Ω)</div><div class="sc-label">বাধা — নালার সংকোচন, প্রবাহ যে কমায়</div></div>
<div class="stat-card"><div class="sc-num">১৮২৭</div><div class="sc-label">গেয়র্গ ওহম — V=IR এক সমীকরণে তিন ভাই (Die galvanische Kette)</div></div>
</div>

<div class="dialogue">চাচা টর্চের ব্যাটারি টেবিলে সোজা করে দাঁড় করালেন। "এই লম্বা জিনিস — ভাবো ছোট্ট জলাধার। ওপরের মাথা আর নিচের মাথার মাঝে উচ্চতা-পার্থক্য আছে — সেটাই ভোল্টেজ। পার্থক্য যত বেশি, ধাক্কা তত জোর।" তার দুই মাথা বাল্বের সাথে জুড়লেন — বাল্ব জ্বলে উঠল হালকা। "পার্থক্য থাকলে পানি নামবেই — চার্জও চলবেই। সেই চলা, প্রতি সেকেন্ডে কতটা যাচ্ছে — কারেন্ট। এবার —" তিনি তারের মাঝে একটা মোটা কার্বন-রেজিস্টর জুড়লেন, বাল্ব নিভে এলো। "নালার মাঝে পাথর রাখলাম। প্রবাহ কমে গেল। এই পাথরের নাম রেজিস্ট্যান্স। তিনটা জিনিস — ধাক্কা, প্রবাহ, বাধা — কোনোটা একা নয়; একটা বদলালে অন্যটা বদলায়। জার্মান শিক্ষক গেয়র্গ ওহম দুইশো বছর আগে এই সম্পর্ক কাগজে বেঁধে ফেললেন — V সমান I গুণ R। সার্কিটের পুরো রাজত্বের প্রথম আইন।"</div>
<div class="dialogue en">He stood the torch battery upright. "This cylinder — think of a small reservoir. Between its top and bottom there is a height difference — that is voltage. The bigger the difference, the harder the push." He wired the bulb across it — a faint glow. "With difference, water must fall — charge must move. That movement per second is current. Now —" he spliced a fat carbon resistor into the wire; the bulb dimmed to nothing. "A stone in the channel. Flow reduced. That stone is resistance. Three things — push, flow, obstruction — none alone; change one, the others answer. A German teacher, Georg Ohm, bound this relation to paper two hundred years ago — V equals I times R. The first law of the circuit's whole kingdom."</div>

<div class="code-block">তিন ভাইয়ের আইন — Ohm's Law in practice:

সমীকরণ:  V = I × R
  ভোল্ট (V) = অ্যাম্পিয়ার (A) × ওহম (Ω)

তিন রূপ (একটাই সমীকরণ, তিন প্রশ্নের জবাব):
  I = V / R    "কত যাবে?"      ৯V ÷ ১০০Ω = ০.০৯ A = ৯০ mA
  V = I × R    "কত পড়ল ধাক্কায়?"  ২০ mA × ৩৩০Ω = ৬.৬ V
  R = V / I    "কত বাধা দরকার?"  ৩.৩V ÷ ২০ mA = ১৬৫ Ω

LED জ্বালানোর হিসাব (তোমার প্রথম ডিজাইন-সিদ্ধান্ত):
  লক্ষ্য: লাল LED, Vf≈২V, চাও ১৫ mA
  সোর্স ৫V → রেজিস্টরে পড়বে ৫−২ = ৩V
  R = ৩V ÷ ০.০১৫A = ২০০Ω  (২২০Ω স্ট্যান্ডার্ড নাও)

একক-বোধ:
  ১ kΩ = ১০০০ Ω | ১ mA = ১/১০০০ A
  মোবাইল চার্জার ≈ ২ A | LED ≈ ৫-২০ mA | বজ্র ≈ ৩০,০০০ A!

মাপার হাতিয়ার (চাচার টেবিলে):
  মাল্টিমিটার — ভোল্টমিটার সমান্তরালে (প্যাডের দুই পাশে),
  অ্যামিটার শ্রেণিতে (প্রবাহের পথ কেটে), ওহমমিটার মরা সার্কিটে
  (জ্যান্ত সার্কিটে ওহম মাপা নিষেধ — মিটারের নিজের ব্যাটারি প্রবাহ দেয়, মিথ্যা পড়)</div>

<div class="dialogue">বিকেলে চাচা একটা ভাঙা রেডিও খুলে ফিউজ দেখালেন — কাচের নলে গলে-যাওয়া তার। "এই মরা জিনিসটাই সার্কিটের শহিদ। কোথাও শর্ট হলে কারেন্ট হঠাৎ বাড়ে; ফিউজ-তার সরু, রেজিস্ট্যান্স আছে, I²R তাপে আগে জ্বলে যায় — নিজে মরে পুরো রেডিও বাঁচায়। বজ্রকে মানুষ যখন তারে আটকাল, তখন শেখা দরকার হলো নদীকে সম্মান। কুরআন বজ্রে ভয় ও আশা দুই-ই দেখায় — ইঞ্জিনিয়ারের কাছেও তাই: এই নদী তোমার বাতি জ্বালাবে, আবার অবহেলা করলে তোমার বোর্ড পুড়িয়ে দেবে। ভয়টা যতটুকু নিয়ম মানে, আশাটা ততটুকু ফলে। যাও — কাল রফিক মামার দোকান, তিন ভাইয়ের খবর নিও: যে বাঁধে, যে জমায়, যে জড়তা দেয়।"</div>
<div class="dialogue en">In the afternoon he opened a dead radio and showed its fuse — a melted wire in a glass tube. "This dead thing is the circuit's martyr. A short sends current soaring; the fuse wire is thin, has resistance, burns first in I²R heat — dies to save the whole radio. When man wired lightning into cables, he had to learn to respect the river. The Quran shows both fear and hope in lightning — so for the engineer: this river will light your lamp, and carelessly handled, will burn your board. Fear that obeys rules is the size of the hope that bears fruit. Go — tomorrow, Rafiq's shop: meet the three brothers — the blocker, the storer, the inertial one."</div>


<div class="diagram">
<div class="diag-title">ওহমের নদী — এক নজরে তিন ভাই</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <!-- battery as two reservoirs -->
  <rect class="cell" x="30" y="90" width="60" height="60"/>
  <text class="lbl" x="60" y="80">৯V</text>
  <text class="lbl-sm" x="32" y="170">জলাধার (V)</text>
  <!-- wire top -->
  <line class="edge" x1="90" y1="90" x2="240" y2="90"/>
  <!-- resistor (zigzag simplified as box) -->
  <rect class="cell-hot" x="240" y="70" width="80" height="40"/>
  <text class="lbl-hot" x="280" y="60">R = ১০০Ω</text>
  <text class="lbl-sm" x="238" y="130">নালার পাথর</text>
  <line class="edge" x1="320" y1="90" x2="470" y2="90"/>
  <!-- bulb -->
  <circle class="node-hot" cx="490" cy="90" r="26"/>
  <text class="lbl-hot" x="470" y="145">বাল্ব (লোড)</text>
  <!-- wire bottom -->
  <line class="edge" x1="490" y1="116" x2="490" y2="200"/>
  <line class="edge" x1="490" y1="200" x2="60" y2="200"/>
  <line class="edge" x1="60" y1="200" x2="60" y2="150"/>
  <!-- current flow arrows -->
  <text class="lbl-cyan" x="150" y="82">→ I = ৯০mA</text>
  <text class="lbl-sm" x="330" y="82">→</text>
  <!-- formula -->
  <rect class="cell-cyan" x="150" y="208" width="260" height="26"/>
  <text class="lbl-cyan" x="280" y="226">V = I × R  →  ৯ = ০.০৯ × ১০০</text>
</svg>
<div class="diag-cap">উচ্চতা-পার্থক্য (V) ধাক্কা দেয় → প্রবাহ (I) চলে → পাথর (R) সীমিত করে। এক চক্র, এক সমীকরণ।</div>
</div>

<div class="verse">
<div class="verse-arabic">وَمِنْ آيَاتِهِ يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا</div>
<div class="verse-translation">তাঁর নিদর্শনের মধ্যে — তিনি তোমাদের দেখান বিদ্যুৎ-চমক, ভয় ও আশার সাথে।</div>
<div class="verse-ref">— কুরআন ৩০:২৪</div>
</div>

<div class="secret-box"><div class="label">দরজা ১ — রহস্য</div><div class="text">⚡ ভোল্টেজ ধাক্কা দেয়, কারেন্ট চলে, রেজিস্ট্যান্স আটকায় — V=IR এক বাক্যে তিন ভাই।<br><small>নদী-রূপক: উচ্চতা-পার্থক্য/প্রবাহ/নালার পাথর। LED: (৫−২)V÷১৫mA≈২২০Ω। ফিউজ = I²R-শহিদ। বজ্র: ৩০:২৪।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>তিন পরিমাণ আলাদা করতে পারা:</strong> V (কারণ/ধাক্কা), I (ফল/প্রবাহ), R (বাধা) — কোন প্রশ্নে কোনটা, পানি-মডেল দিয়ে ব্যাখ্যা করো।</li>
<li><strong>V=IR-এর তিন রূপ মুখস্থ নয় — ব্যবহার:</strong> LED-র সিরিজ-রেজিস্টর নিজে হিসাব করে বের করো (৩.৩V বোর্ডে নীল LED, Vf≈৩.২V হলে?)।</li>
<li><strong>নিরাপত্তা-অন্তর্দৃষ্টি:</strong> কারেন্ট অদৃশ্য; মাপার আগে হাত নয়; ওহম মাপা মরা সার্কিটেই।</li>
<li><strong>ইতিহাস শুদ্ধ:</strong> গেয়র্গ ওহম, ১৮২৭, Die galvanische Kette, mathematisch bearbeitet — বইয়ের নাম পর্যন্ত বলা যাবে।</li>
<li><strong>পরের দরজার বীজ:</strong> রেজিস্টর শুধু বাধা দেয় — কিন্তু দুই ভাই বাকি: যে চার্জ জমায় (ক্যাপাসিটর), যে প্রবাহের জড়তা দেয় (ইন্ডাক্টর)। তিন ভাই মিলে সময়ের খেলা শুরু করে।</li>
</ul>`
  }
});

// ── DOOR 2: তিন ভাইয়ের দোকান (RESISTOR, CAPACITOR, INDUCTOR) ──
doors.push({
  num:2, icon:"🧺", color:"#fbbf24", name:"তিন ভাইয়ের দোকান",
  subtitle:"The Shop of Three Brothers", tech:"Resistor (R), Capacitor (C — charge storage, RC time constant), Inductor (L — magnetic inertia, LC resonance), Impedance",
  spirit:"মিজান — প্রবাহের ভারসাম্য; বাড়তি নয়, কমতি নয় (৫৫:৭-৯)",
  secret:"রেজিস্টর এখনই খরচ করে, ক্যাপাসিটর জমায় রাখে, ইন্ডাক্টর বদলে দেয় না সহজে — তিন ভাই মিলে সময়কে সার্কিটে আনে।",
  recall:{
    q:"রফিক মামার তিন ভাই কারা কী করে — আর ডিকোউপলিং-ক্যাপ ছাড়া MCU রিসেট হয় কেন, RC=১০০μF×১০Ω হলে সময় কত?",
    qen:"Who are the three brothers — and why does an MCU reset without decoupling caps? What's the time constant of 100μF×10Ω?",
    a:"তিন ভাই: (১) রেজিস্টর — প্রবাহ এখনই সীমিত করে, শক্তি তাপে খরচ (পানির নালার পাথর, Door 1); (২) ক্যাপাসিটর — দুই পাতের মাঝে চার্জ জমা রাখে, ভোল্টেজ হঠাৎ বদল সহ্য করে না (Q=CV); চার্জ/ডিসচার্জ হয় সময়ে-ধীরে: τ=RC — ১০০μF×১০Ω=১ms-এ ভোল্টেজ ৬৩% পথ যায়, প্রায় ৫τ-তে পূর্ণ; (৩) ইন্ডাক্টর — কুণ্ডলীর চৌম্বক ক্ষেত্রে শক্তি রাখে, প্রবাহ হঠাৎ বদল সহ্য করে না (V=L·di/dt) — প্রবাহের জড়তা। MCU রিসেট হয় এই কারণে: চিপ হঠাৎ বেশি কারেন্ট টানলে সাপ্লাই-তারের সামান্য ইন্ডাক্ট্যান্সে ভোল্টেজ মুহূর্তে পড়ে যায়; VCC-পায়ের পাশে ১০০nF ডিকোউপলিং-ক্যাপ কাছে-বসা ছোট জলাধারের মতো তাৎক্ষণিক চাহিদা মেটায় — ভোল্টেজ স্থির থাকে। প্রতিটা চিপের প্রতিটা পাওয়ার-পায়ে ক্যাপ রাখা তাই ধর্ম, শখ নয়।",
    aen:"Resistor spends now (heat), capacitor stores charge (Q=CV, τ=RC: 100μF·10Ω=1ms to 63%), inductor stores in magnetism (V=L·di/dt — current's inertia). Decoupling caps are nearby reservoirs meeting a chip's sudden current spikes, keeping VCC steady — hence on every power pin, always."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দরজা। পাটুয়াটুলির ভেতরের গলি — রফিক মামার কম্পোনেন্ট-দোকান: কাচের কাউন্টারের পেছনে লোহার ড্রয়ারের দেয়াল, প্রতিটা ড্রয়ারে হাজার কম্পোনেন্ট, বাইরে ঝুলন্ত রঙিন রেজিস্টরের মালা। রফিক মামা — পঞ্চাশ-ছুঁইছুঁই, চোখে মোটা ফ্রেম, গায়ে হাফ-শার্ট, পকেটে ছয়টা স্ক্রুড্রাইভার, আর তাঁর সিগনেচার: কথা বলতে বলতে চোখ বন্ধ করে ড্রয়ারের দিকে হাত বাড়ান — চোখ খুলেই ঠিক কম্পোনেন্টের ড্রয়ার টেনে ধরেন, কখনো ভুল নয়। গন্ধ — প্লাস্টিক-প্যাকেট, টিনের ঝাঁঝ, পুরনো কাগজের ট্যাগ। শব্দ — ড্রয়ারের ঠেলাঠেলি, দূরে সোল্ডারিং-স্টেশনের ফুঁসছে শব্দ, বাইরে হকারের হাঁকডাক।</p>
<p class="scene-setting en">The second door. An inner Patuatuli lane — Rafiq's component shop: a wall of steel drawers behind the glass counter, a thousand components per drawer, garlands of colored resistors hanging outside. Rafiq — nearly fifty, thick frames, half-shirt with six screwdrivers in the pocket, and his signature: eyes closed mid-sentence, hand reaching for the drawer wall — opening exactly the right drawer, never wrong. The smell of plastic packets and tin; the sound of sliding drawers, a soldering station hissing somewhere, hawkers beyond.</p>

<div class="dialogue">তুমি দোকানে ঢুকলে। রফিক মামা রেজিস্টরের মালা গুছাচ্ছিলেন। "মোস্তাফিজ ভাইয়ের ছাত্র? বৈদ্যুতিক নদী দেখে এসেছ?"
"হ্যাঁ মামা। ধাক্কা-প্রবাহ-বাধা — V=IR।"
"তিন শব্দ শিখেছ, দেখাও তো তৃতীয়টা চেনো কি না।" তিনি কাউন্টারে তিনটা জিনিস সাজালেন — একটা ডোরাকাটা সিলিন্ডার, একটা চ্যাপ্টা হলুদ চাকতি, একটা ছোট্ট কুণ্ডলী-তারের নল। "এই তিন ভাই আমার পুরো দোকানের আত্মা। চিনলে অর্ধেক ইলেকট্রনিক্স চেনা।"</div>
<div class="dialogue en">You entered. Rafiq was sorting resistor garlands. "Mostafiz's student? Seen the electric river?"
"Yes — push, flow, obstruction: V=IR."
"Three words learned; let's see if you know the third one." He laid three things on the counter — a striped cylinder, a flat yellow disk, a small coil-wound tube. "These three brothers are my shop's soul. Know them, and you know half of electronics."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> রফিক মামার নিজের প্রথম বানানো অ্যামপ্লিফায়ার-বোর্ডের গল্প — সাউন্ড এলো, তারপর কাঁপা-কাঁপা গোলমাল, তারপর চুপ। উস্তাদ-এর কাছে নিয়ে গেলে একটাই কথা: "ক্যাপ পায়ের কাছে না, দূরে বসিয়েছো — তারের ইন্ডাক্ট্যান্সই তোমাকে শেষ করেছে।" ডিকোউপলিং-ক্যাপ যত চিপের কাছে, তত কাজ করে — দূরত্ব মানে তার মানে ইন্ডাক্ট্যান্স, আর ইন্ডাক্ট্যান্স মানে হঠাৎ-চাহিদায় ভোল্টেজ-পতন। তিন ভাইকে না-চেনা মানে বোর্ড বারবার নামা।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">R</div><div class="sc-label">এখনই খরচ — I সীমিত, শক্তি → তাপ (P=I²R)</div></div>
<div class="stat-card"><div class="sc-num">C</div><div class="sc-label">চার্জ-জমা — Q=CV, τ=RC; ভোল্টেজ বদলায় ধীরে</div></div>
<div class="stat-card"><div class="sc-num">L</div><div class="sc-label">চুম্বক-জড়তা — V=L·di/dt; প্রবাহ বদলায় ধীরে</div></div>
<div class="stat-card"><div class="sc-num">১০০nF</div><div class="sc-label">প্রতি পাওয়ার-পায়ে — চিপের হঠাৎ তৃষ্ণা মেটানো কাছের জলাধার</div></div>
</div>

<div class="dialogue">মামা ডোরাকাটা সিলিন্ডার ধরলেন। "বড় ভাই — রেজিস্টর। নদীর গল্পের পাথর, তোমার চেনা। কিন্তু খেয়াল করো — সে বাধা দিয়ে শক্তি খরচ করে, তাপ বানায়। কাজেই লাগে, পুড়েও যায় — ওয়াট রেটিং দেখে নাও।" হলুদ চাকতি উঁচু করলেন। "মেঝে ভাই — ক্যাপাসিটর। দুই পাতের মাঝে চার্জ জমে; ভোল্টেজ চায় স্থির থাকুক — হঠাৎ বাড়াতে চাইলে জমায়, কমাতে চাইলে ছাড়ায়। ছোট জলাধার। তার রসিকতা: ভোল্টেজকে সে মারবে না, সময় দেবে।" কুণ্ডলী-নল হাতে নিলেন। "ছোট ভাই — ইন্ডাক্টর। উল্টো রসিক! প্রবাহকে বাধা দেয় বদলাতে; চুম্বক-ক্ষেত্রে জড়তা জমায়। মোটর, রিলে, স্পিকার — সব এই ভাইয়ের আত্মীয়।" তিনি তিনটা হাতে নিয়ে হাসলেন: "দাদা তাপে খরচ করে, মেঝে জমায়, ছোট জড়তা দেয় — তিনজন মিলে সময় নামের জিনিসটা সার্কিটে আনে। তার আগে পর্যন্ত সব ছিল হিসাব; এখন থেকে সময়ের খেলা — চার্জ-হয়, খালি-হয়, দোলে।"</div>
<div class="dialogue en">He held up the striped cylinder. "Eldest — the resistor. The river's stone, you know him. But mark: he spends energy as heat while blocking — check the watt rating." The yellow disk: "Middle — the capacitor. Charge hoarded between plates; it wants voltage steady — stores on rises, releases on falls. A small reservoir. Its joke: it won't kill a voltage change, only demand time." The coil-tube: "Youngest — the inductor. The opposite wit! It resists change in current; inertia stored in magnetism. Motors, relays, speakers — all this brother's kin." He laughed, holding all three: "The eldest spends as heat, the middle stores, the youngest adds inertia — together they bring a thing called TIME into the circuit. Until now all was arithmetic; from here, the game of time — charging, discharging, oscillating."</div>

<div class="code-block">তিন ভাইয়ের সময়-খেলা — RC, RL, LC:

ক্যাপাসিটরের ভাষা:
  Q = C × V            জমানো চার্জ = ধারণক্ষমতা × ভোল্টেজ
  i = C × dv/dt        প্রবাহ ∝ ভোল্টেজ-বদলের হার
  RC চার্জ-বক্ররেখা:   v(t) = V·(1 − e^(−t/RC))
  τ = R × C            ১ τ-তে ৬৩%, ~৫τ-তে পূর্ণ
  উদাহ: ১০μF × ১০kΩ = ১০০ms (blink-টাইমারের প্রাণ)

ইন্ডাক্টরের ভাষা:
  V = L × di/dt        ভোল্টেজ ∝ প্রবাহ-বদলের হার (জড়তা!)
  প্রবাহ ছাঁড়ালে L ভোল্টেজ-লাফ দেয় — রিলে-কয়েল খোলার মুহূর্তে
  spark/ব্যাক-EMF → ডায়োড পাশে রাখো (flyback), নইলে ট্রানজিস্টর মরে

LC দোলা (দুই ভাইয়ের দোলনা):
  f = 1 / (2π√(LC))    রেডিও-টিউনিং এখানেই — নির্দিষ্ট ফ্রিকোয়েন্সি
                      ধরে রাখা, বাকি সব ছাঁকা

কেন প্রতি চিপ-পায়ে ১০০nF (ডিকোউপলিং):
  চিপ ক্লকে-ক্লকে mA-শত টানে — সাপ্লাই-তারের L-এ ভোল্টেজ
  মুহূর্তে পড়ে (V=L·di/dt) → রিসেট/নষ্ট-ডেটা
  সমাধান: চিপের গা-ঘেঁষে ছোট C — স্থানীয় জলাধার, তৃষ্ণা
  তাৎক্ষণিক মেটায়, সাপ্লাই খবরও পায় না
  নিয়ম: প্রতি VCC-পায়ে ১০০nF + বোর্ডে ১-১০μF বাল্ক

ইম্পিডেন্স (Z) — AC-জগতে তিন ভাইয়ের মিলিত বাধা:
  X_C = 1/(2πfC)  → f বাড়লে ক্যাপ বাধা কমায় (উচ্চ-ফ্রি পাস)
  X_L = 2πfL      → f বাড়লে ইন্ডাক্টর বাধা বাড়ায় (নিম্ন-ফ্রি পাস)
  এই দুই স্বভাব মিলেই ফিল্টার, টিউনার, সুইচিং-পাওয়ারের রাজ্য</div>

<div class="dialogue">সন্ধ্যায় দোকান বন্ধ করতে করতে রফিক মামা বললেন: "কুরআনে আছে — আল্লাহ মিজান প্রতিষ্ঠা করেছেন, বলেছেন ওজনে বাড়তি-কমতি কোরো না (৫৫:৭-৯)। আমার তিন ভাই সেই মিজানেরই কারিগর: রেজিস্টর ঠিক করে কত যাবে, ক্যাপাসিটর ঠিক রাখে কত জমা, ইন্ডাক্টর ঠিক রাখে কত দ্রুত বদলাবে। কোনোটা বাড়তি হলে সার্কিট পুড়ে, কমতি হলে কাজ থামে। বোর্ডে যে সঠিক জায়গায় সঠিক ভাই বসায়, তার কাছে ইলেকট্রনিক্স মানে ওজন করা — কোথায় কতটুকু, কখন, কত দ্রুত। যাও, কাল শামসুল কাকার কাছে — একমুখী দরজার খবর: যে ভাই শুধু এক দিকে চলে।"</div>
<div class="dialogue en">Closing the shop at dusk, Rafiq said: "The Quran says — Allah raised the balance and commanded: transgress not in measure (55:7-9). My three brothers are craftsmen of that balance: the resistor sets how much flows, the capacitor sets how much is held, the inductor sets how fast change may come. Excess burns the board; deficiency stops the work. For the one who places the right brother in the right place, electronics is weighing — how much, where, when, how fast. Go — tomorrow, Uncle Shamsul: news of the one-way door, the brother who walks one direction only."</div>


<div class="diagram">
<div class="diag-title">তিন ভাইয়ের সময়-খেলা — RC চার্জ-বক্ররেখা</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <!-- axes -->
  <line class="axis" x1="50" y1="20" x2="50" y2="200"/>
  <line class="axis" x1="50" y1="200" x2="530" y2="200"/>
  <text class="lbl-sm" x="20" y="30">V</text>
  <text class="lbl-sm" x="525" y="220">t</text>
  <!-- target level -->
  <line class="grid-line" x1="50" y1="50" x2="530" y2="50" stroke-dasharray="4,4"/>
  <text class="lbl" x="330" y="42">লক্ষ্য-ভোল্টেজ (১০০%)</text>
  <!-- 63% level at tau -->
  <line class="grid-line" x1="50" y1="113" x2="530" y2="113" stroke-dasharray="2,5"/>
  <text class="lbl-cyan" x="140" y="108">৬৩% @ τ=RC</text>
  <!-- exponential curve -->
  <path class="edge-cyan" d="M 50 200 C 120 60, 200 52, 530 51" fill="none"/>
  <!-- tau marker -->
  <line class="edge" x1="160" y1="113" x2="160" y2="200"/>
  <circle class="node-cyan" cx="160" cy="113" r="5"/>
  <text class="lbl-sm" x="146" y="216">τ</text>
  <text class="lbl-sm" x="210" y="216">৫τ ≈ পূর্ণ</text>
  <!-- 5tau marker -->
  <line class="grid-line" x1="400" y1="55" x2="400" y2="200" stroke-dasharray="2,5"/>
  <!-- capacitor symbol -->
  <rect class="cell" x="470" y="30" width="44" height="26"/>
  <text class="lbl-sm" x="462" y="24">C</text>
</svg>
<div class="diag-cap">ক্যাপাসিটর জমায় ধীরে: এক τ (RC) সময়ে ৬৩%, প্রায় ৫τ-তে পূর্ণ — মোড়ের কাছে দ্রুত, শেষে ধীর (বিখ্যাত e-বক্ররেখা)।</div>
</div>

<div class="verse">
<div class="verse-arabic">وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ</div>
<div class="verse-translation">তিনি আকাশকে সমুচ্চ করেছেন এবং স্থাপন করেছেন মিজান (ভারসাম্য)।</div>
<div class="verse-ref">— কুরআন ৫৫:৭</div>
</div>

<div class="secret-box"><div class="label">দরজা ২ — রহস্য</div><div class="text">🧺 রেজিস্টর এখনই খরচ করে, ক্যাপাসিটর জমায়, ইন্ডাক্টর সহজে বদলাতে দেয় না — তিন ভাই মিলে সময় আনে।<br><small>Q=CV, τ=RC (৫τ-পূর্ণ); V=L·di/dt (flyback-ডায়োড!); f=1/(2π√LC); প্রতি পাওয়ার-পায়ে ১০০nF। মিজান: ৫৫:৭-৯।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>তিন ভাইয়ের স্বভাব-পার্থক্য গল্পে-গল্পে:</strong> R তাৎক্ষণিক (তাপ), C ভোল্টেজ-জড় (সময়), L প্রবাহ-জড় (জড়তা) — কে কীসের বদল ঠেকায়, মুখস্থ নয় চেনা।</li>
<li><strong>τ=RC হাতে-হাতে:</strong> blink-বক্ররেখা এঁকে দেখাও (৬৩%/৫τ); ১০μF+১০kΩ কত ms, বলতে পারবে।</li>
<li><strong>ডিকোউপলিং-অন্তর্দৃষ্টি:</strong> চিপ-রিসেটের রহস্য = তারের L × হঠাৎ di/dt — কাছের ১০০nF কেন ওষুধ।</li>
<li><strong>ফিল্টার-বোধ:</strong> X_C কমে ফ্রি-তে, X_L বাড়ে — লো-পাস/হাই-পাস এক লাইনে ব্যাখ্যা করো।</li>
<li><strong>সতর্কতা-রেফ্লেক্স:</strong> রিলে/মোটর-কয়েল সুইচ করলে মনে আসবে — flyback-ডায়োড, নইলে ড্রাইভার মরবে।</li>
</ul>`
  }
});


// ── DOOR 3: একমুখী দরজা (DIODE, LED, TRANSISTOR) ──
doors.push({
  num:3, icon:"💡", color:"#ef4444", name:"একমুখী দরজা",
  subtitle:"The One-Way Door", tech:"P-N Junction, Doping, Diode Drop 0.7V, LED (Holonyak 1962; blue Nobel 2014), BJT/MOSFET as Switch & Amplifier (Bardeen-Brattain-Shockley 1947)",
  spirit:"আমানত — নির্দিষ্ট দরওয়ান, নির্দিষ্ট দিক; ভুল পথে এক পাওয়া যাবে না (৪:৫৮)",
  secret:"সিলিকনে দুই ধরনের মাটি জুড়লে দরজা হয় — এক দিকে খোলা, উল্টো দিকে তালা; আর ট্রানজিস্টর সেই দরজার দরওয়ান, যার হাতে ছোট্ট সংকেতে বিশাল প্রবাহের চাবি।",
  recall:{
    q:"শামসুল কাকা কেন বলেন 'ডায়োড হলো সততার উপমা' — আর LED-র সাথে কেন সবসময় রেজিস্টর, ট্রানজিস্টর কীভাবে একটা ছোট বেস-কারেন্ট দিয়ে বড় লোড চালায়?",
    qen:"Why does Shamsul call the diode 'the parable of honesty' — why does an LED always need its resistor, and how does a transistor's small base current drive a big load?",
    a:"P-N জংশন: সিলিকনে ডোপিং দিয়ে দুই ধরনের অঞ্চল বানানো হয় — N (ইলেকট্রন-বাড়তি) আর P (হোল-বাড়তি); সীমানায় তৈরি হয় ডিপ্লেশন-অঞ্চল। ফল: এক দিকে (ফরোয়ার্ড) ভোল্টেজ ০.৭V (সিলিকন) ছাড়িয়ে গেলে প্রবাহ চলে, উল্টো দিকে (রিভার্স) আটকে যায় — একমুখী দরজা। এটাই সততার উপমা: ডিপ্লেশন-সীমা পেরোনো মানে নির্দিষ্ট দিক; উল্টো পথে চলার অনুমতি নেই। LED এই পরিবারেরই সদস্য যার জংশন-শক্তি আলো হয়ে বেরোয়: লাল ≈১.৮-২.২V (হলোনিয়াক, GE, ১৯৬২ — প্রথম দৃশ্যমান LED), নীল ≈৩.০-৩.৪V (আকাসাকি-আমানো-নাকামুরা — নোবেল ২০১৪)। রেজিস্টর লাগে কারণ LED ভোল্টেজ-দালাল নয়, কারেন্ট-প্রাণী: সীমা ছাড়ানো কারেন্টে জংশন গলে — রেজিস্টরই (V_সোর্স−V_f)÷I সেট করে দেয়। ট্রানজিস্টর (বারডিন-ব্রাটেইন-শকলি, বেল ল্যাব, ডিসেম্বর ১৯৪৭; নোবেল ১৯৫৬): তিন পা — বেস-কালেক্টর-এমিটার (BJT); বেসে ছোট্ট কারেন্ট দিলে কালেক্টর-এমিটারে বড় প্রবাহ খোলে (অ্যামপ্লিফিকেশন, β=hFE গুণ) — অথবা সম্পূর্ণ অন/অফ সুইচ: মাইক্রোকন্ট্রোলারের GPIO-র কয়েক mA দিয়ে রিলে/মোটরের শত mA-ampaire চালানো যায়। MOSFET (শকলির ১৯৪৯-তত্ত্বের বংশধর) ভোল্টেট-নিয়ন্ত্রিত দরওয়ান — গেটে কারেন্ট লাগে না প্রায়, আধুনিক চিপের কোটি কোটি দরওয়ানই MOSFET।",
    aen:"Doping makes N and P regions; their junction is a one-way door (0.7V forward, blocked reverse). LEDs are glowing junctions (red ~2V, Holonyak 1962; blue ~3.2V, Nobel 2014) — current-creatures needing (Vsrc−Vf)/I resistors. The transistor (1947 Bell Labs, Nobel 1956): a small base current opens a large collector flow — amplifier or switch; MOSFETs are its voltage-driven cousins, billions per chip."
  },
  story:`
<p class="scene-setting">তৃতীয় দরজা। কারিগরখানার বারান্দার ধারে শামসুল কাকার সাইনবোর্ড-মিস্ত্রির কোণ — দেয়ালে ঝুলছে আধ-বানানো অক্ষর-চালান: 'হোটেল আল-বারাকা'-র 'আ', 'ক্লিনিক'-এর 'ক' — ভেতরে লাল-সবুজ-নীল LED-এর সারি নিভছে-জ্বলছে পরীক্ষায়। শামসুল কাকা — পঞ্চাশ পেরিয়েছেন, গায়ে সবুজ ফতুয়া, আঙুলে সোল্ডারের পোড়া-দাগ, আর তাঁর সিগনেচার: জিভের ডগায় সবসময় একটা ছোট্ট ফিতের টুকরো — LED-র পা সোজা করার সময় ফিতেটা কামড়ে রাখেন, জিভ দিয়ে গুনে গুনে পা বাঁকান (বিশ বছরের অভ্যাস)। গন্ধ — গরম প্লাস্টিক, সীসার হালকা গন্ধ, বাতাসে ধুলো। শব্দ — মাল্টিমিটারের কন্টিনিউইটি-বিপ, দূরে কারিগরখানার রেডিও।</p>
<p class="scene-setting en">The third door. On the workshop veranda, Shamsul's signboard corner — half-built neon-style letters on the wall: the 'A' of 'Hotel Al-Baraka', the 'K' of 'Clinic', rows of red-green-blue LEDs blinking through their tests. Shamsul — past fifty, green fatua, solder-scarred fingers, and his signature: a short tape-end always at the tip of his tongue while straightening LED legs — counting bends with his tongue, a twenty-year habit. The smell of hot plastic and faint lead; a continuity beep, the workshop radio behind.</p>

<div class="dialogue">তুমি কোণে এগিয়ে গেলে। শামসুল কাকা একটা নীল অক্ষরের মালা ধরে টেস্ট করছিলেন। "রফিক মামার দোকান দেখে এসেছ? তিন ভাই?"
"জি কাকা। এবার?"
তিনি জ্বলা-নেওয়া একটা LED খুলে হাতের তালুতে রাখলেন। "তিন ভাই নিষ্ক্রিয় সৈনিক — বাধে, জমায়, দোলে। আজ চিনবে সক্রিয় সৈনিক। এই ছোট্ট জিনিস নিজে সিদ্ধান্ত নেয় — যাবে, না যাবে না। এর নাম ডায়োড। আমার কাছে এ সততার পাঠ শেখায়।"</div>
<div class="dialogue en">You approached the corner. Shamsul was testing a string of blue letters. "Seen Rafiq's shop? The three brothers?"
"Yes. Now?"
He unscrewed a lit LED and set it on his palm. "The three brothers are passive soldiers — block, store, swing. Today you meet the active soldier. This tiny thing decides on its own — pass, or refuse. Its name is diode. To me it teaches honesty."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> শামসুল কাকার প্রথম বড় জব — এক মসজিদের মিনারের নাম-বোর্ড, সব নীল LED সিরিজে সোজা ২২০V-তে লাগিয়ে দিয়েছিলেন (রেজিস্টর ছাড়া!)। প্রথম রাতেই পুরো মালা পুড়ে কালো — কারণ LED ভোল্টেজ মানে না, কারেন্ট মানে; সীমা-রেজিস্টর ছাড়া সে নিজের সীমা জানে না। মসজিদ-কমিটির সামনে লজ্জা, দ্বিতীয়বার প্রতিটা LED-র সাথে হিসাব-করা রেজিস্টর — তারপর থেকে পনেরো বছর ওই বোর্ড জ্বলছে। <strong>শিক্ষা: কারেন্ট-প্রাণীর সাথে সবসময় তার রেশনি-রেজিস্টর।</strong></div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">০.৭V</div><div class="sc-label">সিলিকন জংশনের দহন-দরজা (ফরোয়ার্ড ড্রপ)</div></div>
<div class="stat-card"><div class="sc-num">১৯৬২</div><div class="sc-label">হলোনিয়াক (GE) — প্রথম দৃশ্যমান লাল LED</div></div>
<div class="stat-card"><div class="sc-num">১৯৪৭</div><div class="sc-label">বারডিন-ব্রাটেইন-শকলি (বেল ল্যাব) — ট্রানজিস্টর; নোবেল ১৯৫৬</div></div>
<div class="stat-card"><div class="sc-num">β (hFE)</div><div class="sc-label">ছোট বেস × β = বড় কালেক্টর — দরওয়ানের চাবি-হাত</div></div>
</div>

<div class="dialogue">তিনি টেবিলে একটা ডায়োড সাজিয়ে ধরলেন — কালো দেহে রুপালি ডোরা, এক মাথায় সাদা রেখা। "সিলিকন নিজে কাপড়ের মতো নিরপেক্ষ — বিশুদ্ধ অবস্থায় অলস। কিন্তু তাতে সামান্য 'ভেজাল' দাও — ডোপিং: এক দিকে ফসফরাস-জাতীয় পদার্থ মেশালে বাড়তি ইলেকট্রন (N-অঞ্চল), অন্য দিকে বোরন-জাতীয় মেশালে বাড়তি হোল-শূন্য (P-অঞ্চল)। দুই অঞ্চল জুড়ে দাও — সীমানায় তৈরি হয় সতর্ক-রক্ষীর এলাকা (ডিপ্লেশন)। ফল অবিশ্বাস্য: এক দিক থেকে এলে ০.৭ ভোল্ট টোল দিয়ে পথ দেয়, উল্টো দিক থেকে এলে — বন্ধ। সারা জীবন এক দিকেই সৎ।" তিনি হাসলেন। "আমার কাছে ইলেকট্রনিক্সের প্রথম নৈতিক চরিত্র এটাই। আর এই দরজার দেয়ালে আলো লাগালেই LED — লাল জংশনে ১.৮-২.২V লাগে (হলোনিয়াক ১৯৬২-তে প্রথম দেখান), নীলে ৩ ভোল্টের বেশি (আকাসাকি-আমানো-নাকামুরা — নীলের জন্য নোবেল ২০১৪)। তারপর এই দরওয়ানদের সর্দার — ট্রানজিস্টর: বেল ল্যাবে ১৯৪৭-এর ডিসেম্বরে তিন বিজ্ঞানী বানালেন, ১৯৫৬-তে নোবেল পান। ছোট্ট বেস-সংকেতে সে বড় প্রবাহ খুলে দেয় — বিশ্বস্ত দরওয়ান, আমানতদার: নির্দেশ ছাড়া নড়ে না, নির্দেশে পাহাড় খোলে।"</div>
<div class="dialogue en">He set a diode on the table — black body, silver band at one end. "Silicon alone is neutral as cloth — pure, it idles. Dope it: phosphorus gives extra electrons (N-region), boron gives holes (P-region). Join them — a guard-zone forms at the border (depletion). The result is incredible: from one side, past a 0.7-volt toll, it passes; from the other — shut. Honest in one direction its whole life." He smiled. "To me this is electronics' first moral character. Put light on this door's wall and you have the LED — red junctions need ~2V (Holonyak showed the first in 1962), blue over 3 (Akasaki-Amano-Nakamura — the 2014 Nobel). And the chief of these gatekeepers — the transistor: three scientists built it at Bell Labs in December 1947, Nobel 1956. A small base-signal opens a great flow — a trusted doorman: moves nothing without orders, and on orders opens mountains."</div>

<div class="code-block">সক্রিয়-সৈনিকের ম্যানুয়াল — Diode / LED / Transistor:

ডায়োড (P-N জংশন):
  ফরোয়ার্ড: V > ০.৭V (সিলিকন) → চালু; নিচে → বন্ধ
  রিভার্স: ব্লক (যতক্ষণ না ব্রেকডাউন-ভোল্ট আসে)
  রুপালি-ব্যান্ড = ক্যাথোড (প্রবাহ ব্যান্ডের দিকে বেরোয়)
  কাজ: রেক্টিফাই (AC→DC), ফ্লাইব্যাক-রক্ষা (Door ২!),
       ভোল্টেজ-রেফারেন্স, সিগন্যাল-ডিটেক্ট

LED — আলো-বিকিরণকারী জংশন:
  লাল ~১.৮-২.২V | সবুজ/হলুদ ~২-২.৪V | নীল/সাদা ~৩.০-৩.৪V
  I = ৫-২০mA ঠিক করো; রেজিস্টর = (V_src − V_f) / I
  উদাহ: ৫V সোর্সে লাল: (৫−২)/১৫mA ≈ ২০০Ω → ২২০Ω
  রেজিস্টর ছাড়া LED = মসজিদ-বোর্ডের গল্প (পুড়ে কালো)

ট্রানজিস্টর — দুই চরিত্রে এক সৈনিক:
  BJT (NPN উদাহ): বেস ← ১kΩ ← MCU পিন
    ছোট I_B × β (১০০ ধরো) = কালেক্টর-প্রবাহ
    এমিটার → GND; লোড VCC-কালেক্টরের মাঝে
    GPIO-র ৫mA দিয়ে রিলের ১০০mA — সুইচ-মোড
  MOSFET (N-ch): গেট-ভোল্টেজ দিয়ে চ্যানেল খোলা;
    গেটে কারেন্ট ~শূন্য → লজিক-লেভেল MOSFET সরাসরি
    GPIO থেকে চলে; আধুনিক চিপের ভেতরে কোটি-কোটি মিনি-MOSFET

ট্রানজিস্টর-টোটেম (ইতিহাসের স্তর):
  ১৯৪৭ point-contact (বারডিন-ব্রাটেইন)
  → ১৯৪৯ জংশন-তত্ত্ব (শকলি, BSTJ)
  → MOSFET-যুগ → কিলবি-নয়েসের IC (১৯৫৮-৫৯)
    — ট্রানজিস্টর-দরওয়ানদের শহরে প্রথম কর্পোরেশন

ইন্টারভিউ-কোণ:
  "ডায়োড কেন একমুখী?" — ডোপিং+ডিপ্লেশন গল্প
  "LED রেজিস্টর ছাড়া পোড়ে কেন?" — কারেন্ট-প্রাণী তত্ত্ব
  "ট্রানজিস্টর সুইচ নাকি অ্যামপ্লিফায়ার?" — দুই-ই;
    স্যাচুরেশন-অঞ্চল = সুইচ, সক্রিয়-অঞ্চল = অ্যামপ</div>

<div class="dialogue">আজরের আগে শামসুল কাকা নিভু-নিভু মালা সামলে বললেন: "কুরআন বলে — আমানত তার হকদারকে ফিরিয়ে দাও (৪:৫৮)। আমার কাছে ডায়োড আর ট্রানজিস্টর আমানতদার কর্মচারীর পাঠ: ডায়োড প্রবাহকে শুধু নির্ধারিত দিকে যেতে দেয় — অন্য দিকের অধিকার না; ট্রানজিস্টর বিশাল শক্তির দরওয়ান, কিন্তু চাবি অন্যের হাতে — নির্দেশ ছাড়া সে সেই শক্তি ছোঁয় না। যে যন্ত্র নিজের সীমা জানে, সে-ই টেকে। আর যে মানুষ নিজের দায়িত্ব জানে... সে-ও। যাও — কাল নুরুল ভাইয়ের খাতার খবর: এই সব সৈনিক খায় কী, কত খায়।"</div>
<div class="dialogue en">Before Asr, gathering the dimming strings, Shamsul said: "The Quran commands — render trusts to those entitled (4:58). To me the diode and transistor teach the trusted employee: the diode lets flow only its appointed way — no claim on the other direction; the transistor holds mighty power, but the key is another's — without orders it touches nothing. The machine that knows its limits endures. So does the person who knows their charge. Go — tomorrow, Nurul's ledger: what all these soldiers eat, and how much."</div>


<div class="diagram">
<div class="diag-title">ট্রানজিস্টর — ছোট চাবিতে বিশাল দরজা (BJT সুইচ)</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <!-- MCU pin -->
  <rect class="cell-cyan" x="20" y="100" width="90" height="34"/>
  <text class="lbl-cyan" x="65" y="121">MCU পিন</text>
  <text class="lbl-sm" x="26" y="152">~৫mA</text>
  <!-- base resistor -->
  <line class="edge" x1="110" y1="117" x2="150" y2="117"/>
  <rect class="cell" x="150" y="97" width="70" height="40"/>
  <text class="lbl" x="185" y="87">১kΩ</text>
  <!-- transistor -->
  <line class="edge" x1="220" y1="117" x2="270" y2="117"/>
  <circle class="node" cx="300" cy="117" r="34" fill="none"/>
  <text class="lbl" x="300" y="172">BC547 (NPN)</text>
  <text class="lbl-sm" x="252" y="104">B</text>
  <text class="lbl-sm" x="330" y="92">C</text>
  <text class="lbl-sm" x="336" y="142">E</text>
  <!-- collector up to load -->
  <line class="edge" x1="322" y1="90" x2="322" y2="60"/>
  <rect class="cell-hot" x="292" y="20" width="60" height="40"/>
  <text class="lbl-hot" x="322" y="12">রিলে ~১০০mA</text>
  <line class="edge" x1="322" y1="20" x2="322" y2="12" visibility="hidden"/>
  <!-- emitter to ground -->
  <line class="edge" x1="322" y1="144" x2="322" y2="210"/>
  <line class="edge" x1="300" y1="210" x2="345" y2="210"/>
  <line class="edge" x1="308" y1="218" x2="337" y2="218"/>
  <line class="edge" x1="316" y1="226" x2="329" y2="226"/>
  <!-- amplification arrow -->
  <text class="lbl-hot" x="398" y="52">β ≈ ১০০</text>
  <line class="edge-hot" x1="392" y1="70" x2="470" y2="70"/>
  <text class="lbl-sm" x="386" y="88" font-size="11">৫mA × ১০০ = ৫০০mA</text>
  <!-- vcc rail -->
  <line class="edge" x1="270" y1="20" x2="500" y2="20"/>
  <text class="lbl-sm" x="505" y="24">৫V</text>
</svg>
<div class="diag-cap">বেসে অল্প কারেন্ট (MCU-র সীমায়) → কালেক্টর-এমিটারে বিশাল প্রবাহের দরজা খোলা — ছোট নির্দেশ, বড় আমানত।</div>
</div>

<div class="verse">
<div class="verse-arabic">إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا</div>
<div class="verse-translation">নিশ্চয়ই আল্লাহ আদেশ করেন — আমানত তার হকদারের কাছে পৌঁছে দাতে।</div>
<div class="verse-ref">— কুরআন ৪:৫৮</div>
</div>

<div class="secret-box"><div class="label">দরজা ৩ — রহস্য</div><div class="text">💡 ডোপিং-জোড়া এক দরজা: এক দিকে টোল-পেরোনো, উল্টোয় তালা; ট্রানজিস্টর সেই দরজার আমানতদার দরওয়ান — ছোট নির্দেশে বিশাল প্রবাহ।<br><small>০.৭V ফরোয়ার্ড; LED: (V_src−V_f)/I রেজিস্টর-বাধ্যতা; BJT β-গুণ, MOSFET ভোল্টেজ-চাবি। ১৯৪৭→নোবেল ১৯৫৬। আমানত: ৪:৫৮।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>P-N গল্প নিজেভাষায়:</strong> ডোপিং → N/P → ডিপ্লেশন → একমুখী — ইন্টারভিউয়ের "diode কেন একমুখী" প্রশ্নের পূর্ণ জবাব।</li>
<li><strong>LED-গণিত রক্তে:</strong> রঙ-ভেদে V_f আর (V_src−V_f)/I — যেকোনো LED-সার্কিট চোখের আগে হিসাব।</li>
<li><strong>ট্রানজিস্টর-সুইচ ডিজাইন:</strong> GPIO→বেস-রেজিস্টর→BJT/MOSFET→রিলে/মোটর — প্রথম হার্ডওয়্যার-নিয়ন্ত্রণ সিঁড়ি (Door ৯-এর প্রস্তুতি)।</li>
<li><strong>ইতিহাস-স্তর শুদ্ধ:</strong> ১৯৪৭ point-contact (ডিসেম্বর, বেল ল্যাব) → ১৯৪৯ জংশন-তত্ত্ব (শকলি) → MOSFET/IC যুগ; নীল LED-র নোবেল ২০১৪।</li>
<li><strong>নীতি-চরিত্র:</strong> নিজের সীমা-জানা যন্ত্র = টেকসই যন্ত্র — আমানতদার দরওয়ানের মডেল মনে রাখো।</li>
</ul>`
  }
});

// ── DOOR 4: শক্তির রিযিক (POWER, BUDGET, REGULATION) ──
doors.push({
  num:4, icon:"🔋", color:"#f59e0b", name:"শক্তির রিযিক",
  subtitle:"The Ration of Power", tech:"P=VI, Battery Capacity (mAh), LDO vs Buck/Boost Regulators, AC-DC Conversion, Power Budgeting",
  spirit:"রিযিক — নির্ধারিত বরাদ্দে চলা; অপচয় নয়, কৃপণতাও নয়",
  secret:"প্রতিটা মিলিঅ্যাম্পের হিসাব রাখো — ব্যাটারি মানে ব্যালেন্স: যা আছে তার মধ্যে চলা, দাবি যোগ করলে যোগফল দেখো।",
  recall:{
    q:"নুরুল ভাই কেন ডিভাইস ডিজাইনের আগে খাতায় সব যন্ত্রের কারেন্ট-যোগ করেন — আর ৩.৭V ২০০০mAh ব্যাটারিতে ৫০mA খেকে ডিভাইস কত দিন চলবে?",
    qen:"Why does Nurul sum every part's current before designing — and how long will a 50mA device run on a 3.7V 2000mAh cell?",
    a:"কারণ ব্যাটারি একটা রিযিকের থালা — মোট বরাদ্দ সীমিত। পাওয়ার-বাজেট: প্রতিটা যন্ত্রাংশের গড় কারেন্ট তালিকা করো (MCU সক্রিয়/ঘুম, সেন্সর, রেডিও TX/RX, LED), যোগ করো — সেটাই মোট চাহিদা। ব্যাটারির সঞ্চয় মাপা হয় mAh-তে: ২০০০mAh মানে ২০০০mA এক ঘণ্টা, বা ৫০mA চললে ২০০০÷৫০ = ৪০ ঘণ্টা ≈ ১.৭ দিন। এনার্জি হিসাবে: ৩.৭V×২Ah = ৭.৪Wh। রেগুলেটরের দক্ষতাও ধরো — LDO সরল কিন্তু ব্যর্থ-তাপে শক্তি নষ্ট করে (drop × I), buck (স্টেপ-ডাউন সুইচিং) ৮৫-৯৫% দক্ষ কিন্তু নয়েজ-তালিকা লম্বা। স্লিপ-মোডই IoT-এর প্রাণ: MCU ঘুমালে μA-তে নামে, বছরের ব্যাটারি-জীবন তখনই সম্ভব — বাজেট মানে শুধু যোগ নয়, সময়-ভাগ (ডিউটি-চক্র) ভিত্তিক গড়: গড় I = (চালু-সময়×I_চালু + ঘুম-সময়×I_ঘুম)/মোট।",
    aen:"A battery is a ration bowl. Budget: list every part's average current (active/sleep), sum it. 2000mAh ÷ 50mA = 40h ≈ 1.7 days; energy 3.7V×2Ah = 7.4Wh. LDO simple but burns drop×I; buck converters reach 85-95%. Duty-cycled average current is the secret of year-long battery life."
  },
  story:`
<p class="scene-setting">চতুর্থ দরজা। কারিগরখানার পেছন-ঘর — নুরুল ভাইয়ের পাওয়ার-কোণ: তাকে সাজানো সব আকারের ব্যাটারি আর অ্যাডাপ্টার, দেয়ালে ভোল্টেজ-চার্ট, টেবিলে লোড-টেস্টার আর একটা খাতা যার প্রতিটা পাতায় কলাম-কাটা হিসাব। নুরুল ভাই — চল্লিশ-ছুঁইছুঁই, মাথায় টুপি, গায়ে ভেস্ট-পকেটে মাল্টিমিটারের প্রোব, আর তাঁর সিগনেচার: কোমরে ঝোলানো ছোট্ট খাতা-ঝুলি — যেকোনো ডিভাইস হাতে এলেই প্রথম কাজ খাতা খুলে খালি পাতায় দুই কলাম আঁকা: "নেয়, দেয়।" গন্ধ — অ্যাসিডের হালকা ঝাঁঝ, প্লাস্টিক, নতুন তামার তার। শব্দ — লোড-টেস্টারের পাখার ঘূর্ণি, দূরে কারিগরখানার সোল্ডারিং-হাওয়া।</p>
<p class="scene-setting en">The fourth door. The workshop's back room — Nurul's power corner: batteries and adapters of every size shelved, a voltage chart on the wall, a load tester and a column-ruined ledger on the table. Nurul — mid-forties, cap, vest with meter probes in the pocket, and his signature: a small ledger holster at his waist — any device that arrives, his first act is to open the ledger and rule two columns on a fresh page: "takes, gives." The smell of faint acid and new copper; the load tester's fan whirring.</p>

<div class="dialogue">তুমি পেছন-ঘরে ঢুকলে নুরুল ভাই একটা পুরনো পাওয়ার-ব্যাংক খুলে দেখছিলেন। "রফিক মামার কাছে তিন ভাই চিনে এসেছ? এবার আমার প্রশ্ন — তিন ভাই যতই ভালো, খাবার ছাড়া চলে না। খাবার মানে শক্তি। বলো, এই পাওয়ার-ব্যাংক কেন মরে গেছে ছ মাসে — লেখা আছে '১০,০০০mAh'?"
তুমি ভাবলে। "ব্যাটারি খারাপ?"
"অর্ধেক সত্য। বাকি অর্ধেক — হিসাবের অভাব। বোসো, আজ শিখবে ইঞ্জিনিয়ারদের সবচেয়ে অসম্মানিত আর সবচেয়ে নির্ণায়ক কাজটা: রেশন-খাতা।"</div>
<div class="dialogue en">You entered the back room as Nurul opened a dead power bank. "Met the three brothers at Rafiq's? Now my question — brothers or not, nothing runs without food. Food means power. Tell me — why did this '10,000mAh' bank die in six months?"
You thought. "Bad battery?"
"Half true. The other half — no accounting. Sit; today you learn the engineer's most despised and most decisive task: the ration ledger."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> নুরুল ভাইয়ের প্রথম ফ্রিল্যান্স-জব — একটা সেন্সর-ডিভাইস, ক্লায়েন্ট চাইল "কমপক্ষে এক মাস ব্যাটারি।" তিনি বানালেন, দিলেন — সাত দিনে ফেরত। কারণ খুলে দেখা গেল: WiFi রেডিও সারাক্ষণ জাগা (১২০mA), MCU ঘুমায়নি কখনো, একটা স্ট্যাটাস-LED জ্বলছিল সারাদিন (১০mA একা!)। হিসাব-বই নেই মানে অন্ধ খরচ — রিযিক ফুরায় আগে, জবাবদিহি পরে। সেদিন থেকে নিয়ম: যেকোনো ডিভাইসের ডিজাইন শুরু হয় কম্পোনেন্ট-তালিকা নয় — খাতার "নেয়" কলাম দিয়ে।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">P=V×I</div><div class="sc-label">শক্তির মূল সমীকরণ — ৫V×০.৫A=২.৫W</div></div>
<div class="stat-card"><div class="sc-num">mAh</div><div class="sc-label">ব্যাটারির রেশন — ২০০০mAh ÷ ৫০mA = ৪০ ঘণ্টা</div></div>
<div class="stat-card"><div class="sc-num">Wh</div><div class="sc-label">সত্যিকারের খাবার — V×Ah (৩.৭×২=৭.৪Wh)</div></div>
<div class="stat-card"><div class="sc-num">μA</div><div class="sc-label">ঘুমের মুদ্রা — বছরের ব্যাটারি-জীবনের চাবি</div></div>
</div>

<div class="dialogue">তিনি খাতা খুলে দেখালেন — একটা আসল প্রজেক্টের পাতা। দেখো: "MCU ঘুম: ০.০২mA / জাগা ১০mA (১% সময়) → গড় ০.১২mA। সেন্সর: ০.৫mA। রেডিও — প্রতি ১০ মিনিটে ৩সে পাঠায়, TX ১০০mA → গড় ০.৫mA। মোট গড় ≈ ১.১mA। ২০০০mAh ÷ ১.১ ≈ ১৮১৮ ঘণ্টা ≈ ৭৫ দিন!" তুমি চোখ বড় করলে — একই ব্যাটারি, সাত দিনের বদলে পঁচাত্তর। নুরুল ভাই হাসলেন: "জাদু নয় — ঘুম। সময়-ভাগের হিসাব। যন্ত্র সারাক্ষণ জাগলে সে ভোক্তা, ওয়াক্ত-মতো জাগলে সে যায়গীন। আর রেগুলেটরের গল্প — LDO সোজা রাস্তা কিন্তু ঢালুতে শক্তি ফেলে (dropout×I তাপে যায়), buck-কনভার্টার ঘুরপথ কিন্তু কম খায় (৮৫-৯৫%)। সস্তা নয়, দক্ষতা কিনতে হয় — নয়েজ আর জটিলতার দামে।"</div>
<div class="dialogue en">He opened the ledger to a real project page: "MCU sleep 0.02mA, awake 10mA at 1% → average 0.12mA. Sensor 0.5mA. Radio: 3 seconds per 10 minutes at 100mA → 0.5mA average. Total ≈1.1mA. 2000mAh ÷ 1.1 ≈ 1818 hours ≈ 75 days!" Your eyes widened — same battery, seven days became seventy-five. Nurul smiled: "Not magic — sleep. Duty-cycle arithmetic. A device awake around the clock is a spendthrift; awake on time, a mendicant. And regulators: LDO is the straight road but spills energy on the slope (dropout×I as heat); the buck converter takes the winding road but eats less (85-95%). Efficiency isn't free — you pay in noise and complexity."</div>

<div class="code-block">রেশন-খাতার গণিত — Power Budgeting:

মৌলিক: P = V × I         (ওয়াট)
  উদাহ: ৫V × ০.৫A = ২.৫W | LED ২০mA×৩.৩V = ৬৬mW

ব্যাটারি-জীবন:
  সময়(ঘণ্টা) = ধারণক্ষমতা(mAh) ÷ গড়-কারেন্ট(mA)
  ২০০০mAh ÷ ৫০mA = ৪০ ঘণ্টা
  এনার্জি: Wh = V × Ah → ৩.৭V × ২Ah = ৭.৪Wh

ডিউটি-চক্রে গড় (IoT-এর প্রাণ):
  গড় I = (t_চালু × I_চালু + t_ঘুম × I_ঘুম) / (t_চালু + t_ঘুম)
  উদাহ: (০.০১×১০mA) + (০.৯৯×০.০২mA) ≈ ০.১২mA  ← ৮০ গুণ সাশ্রয়!

রেগুলেটর-প্রজাতি:
  LDO (linear): Vout স্থির, বাড়তি V×I তাপে বায়না
    — সরল, শান্ত (নয়েজ-কম); দক্ষতা ≈ Vout/Vin
    (৩.৭→৩.৩V: ~৮৯%; ১২→৩.৩V: ~২৮% — এখানে LDO নিষেধ!)
  Buck (স্টেপ-ডাউন সুইচিং): ইন্ডাক্টর-দোলায় শক্তি-প্যাক
    — ৮৫-৯৫% দক্ষ; খরচ: ripple, EMI, জটিলতা
  Boost (স্টেপ-আপ): ৩.৭V → ৫V (পাওয়ার-ব্যাংকের কাজ)
  AC-DC: ২২০V AC → ট্রান্সফর্মার → ব্রিজ-রেক্টিফায়ার →
         স্মুদিং-ক্যাপ → রেগুলেটর (ব্যাটারি-চার্জারের ভেতরের গল্প)

খাতা-নিয়ম (নুরুল ভাইয়ের দুই কলাম):
  "নেয়" = প্রতিটা অংশের গড় mA (সব অবস্থা মিলিয়ে)
  "দেয়" = সোর্সের সত্যিকার Wh (ক্যালেন্ডার-জীবন+পুনরাবৃত্তি-ক্ষয় ধরে)
  নেয় < দেয় × ০.৭ (মার্জিন) — তবেই ডিজাইন পাস</div>

<div class="dialogue">সন্ধ্যায় নুরুল ভাই খাতা-ঝুলি কোমরে আঁটকে বললেন: "রিযিকের কথা শোনো — যার কাছে যা আছে, তার হিসাব রাখতে হয়। কুরআনে ইবরাহিম-আলাইহিস-সালামের দোয়া: 'যেভাবে রিযিক দিয়েছেন, তা হিসাব করে খাওয়ার তাওফিক দাও' — খাওয়া জায়েজ, অপচয় নয়; আর কৃপণতাও নয়: 'হাত পুরো বন্ধ করে রেখো না' (১৭:২৯)। আমার খাতার দুই কলাম তারই ইঞ্জিনিয়ারি: নেয় কলামে অপচয় নয় (LED সারাদিন জ্বলবে কেন?), দেয় কলামে কৃপণতা নয় (যা দরকার তা-ই দাও — রেগুলেটর স্থির, ক্যাপ পর্যাপ্ত)। যে ডিভাইস তার রেশন-খাতা জানে, সে-ই মাঠে বছর টেকে। কাল যাও তাহমিনা আপার কাছে — নকশার ভাষা: যে ভাষায় এই সব হিসাব কাগজে লেখা হয়।"</div>
<div class="dialogue en">At dusk, buckling the ledger holster, Nurul said: "Hear the matter of rizq — whoever holds provision must keep its account. The Quran prays for measured consumption, and forbids both extremes: 'neither tie thy hand to thy neck nor stretch it to its utmost' (17:29). My two columns are its engineering: the 'takes' column forbids waste (why should an LED burn all day?), the 'gives' column forbids stinginess (give what's needed — steady rail, ample caps). The device that knows its ration ledger is the one that lasts a year in the field. Tomorrow — Tahmina's: the language of schematics, in which all this arithmetic is written on paper."</div>


<div class="diagram">
<div class="diag-title">পাওয়ার-বাজেট — ডিউটি-চক্রের জাদু</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <!-- timeline row 1: always-on -->
  <text class="lbl" x="175" y="18" font-size="12">সারাক্ষণ জাগা (০% ঘুম)</text>
  <rect class="cell-hot" x="170" y="22" width="360" height="28"/>
  <text class="lbl-hot" x="350" y="41">I = ১০mA</text>
  <!-- timeline row 2: duty-cycled -->
  <text class="lbl" x="175" y="72" font-size="12">১% জাগা · ৯৯% ঘুম (ডিউটি-চক্র)</text>
  <rect class="cell-hot" x="170" y="82" width="18" height="28"/>
  <rect class="cell-cyan" x="188" y="82" width="342" height="28"/>
  <text class="lbl-cyan" x="360" y="101">ঘুম ০.০২mA</text>
  <text class="lbl-sm" x="196" y="128">↑ ঝলক মাত্র ১%</text>
  <!-- result box -->
  <rect class="cell" x="170" y="150" width="360" height="70"/>
  <text class="lbl" x="350" y="178">গড় I = ০.১২mA  (৮০ গুণ সাশ্রয়!)</text>
  <text class="lbl-sm" x="350" y="202">২০০০mAh ÷ ০.১২mA ≈ ৭৫ দিন  (আগে ছিল ৮ দিন)</text>
</svg>
<div class="diag-cap">একই কাজ, ভিন্ন সময়-ভাগ: ঘুমের মুদ্রা μA — ব্যাটারি-জীবন কোটি-ভাগ নয়, শুধু ডিউটি-চক্রের হিসাব।</div>
</div>

<div class="verse">
<div class="verse-arabic">وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً إِلَىٰ عُنُقِكَ وَلَا تَبْسُطْهَا كُلَّ الْبَسْطِ</div>
<div class="verse-translation">তোমার হাতকে গলায় বেঁধে রেখো না (কৃপণতা), আর পুরোপুরি খুলেও দিয়ো না (অপচয়)।</div>
<div class="verse-ref">— কুরআন ১৭:২৯</div>
</div>

<div class="secret-box"><div class="label">দরজা ৪ — রহস্য</div><div class="text">🔋 ব্যাটারি মানে রেশন-খাতা: প্রতিটা mA-র দুই কলাম — নেয় ও দেয়; ঘুমই বছরের জীবনের চাবি।<br><small>P=VI; সময়=mAh÷গড়mA; ডিউটি-গড়: ০.১২mA-র জাদু; LDO-সরল/বাক-দক্ষ। ১৭:২৯ — দুই কলামের নীতি।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>বাজেট-কারিগরি:</strong> যেকোনো প্রজেক্টের প্রথম দস্তাবেজ = কারেন্ট-তালিকা (প্রতি অংশ, প্রতি অবস্থায়) — অভ্যাস এখনই করো।</li>
<li><strong>ডিউটি-চক্র-গড় হাতে:</strong> একটা বাস্তব উদাহ নিজে হিসাব করো (১০-মিনিট-অন্তর রিপোর্ট করা সেন্সর) — ঘুম-জাগা মিশ্রণে গড় কত।</li>
<li><strong>রেগুলেটর-নির্বাচন:</strong> ছোট dropout → LDO; বড় পার্থক্য/বেশি কারেন্ট → buck; ৩.৭→৩.৩ LDO ঠিক, ১২→৩.৩ LDO অপরাধ।</li>
<li><strong>mAh বনাম Wh:</strong> ভোল্টেজ-ভিন্ন ব্যাটারি তুলনা করতে হবে Wh-তে — বিপণন-সংখ্যায় নয়।</li>
<li><strong>নীতি-বোধ:</strong> ১৭:২৯-এর দুই কলাম — অপচয়-কৃপণতা নয়; ইঞ্জিনিয়ারের নির্ণায়ক গুণ হিসাব-নিষ্ঠা।</li>
</ul>`
  }
});
