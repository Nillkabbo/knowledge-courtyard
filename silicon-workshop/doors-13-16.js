// ═══ DOORS 13-16 (stub) ═══

// ── DOOR 13: পত্রের দপ্তর (UART, SPI, I2C) ──
doors.push({
  num:13, icon:"📮", color:"#38bdf8", name:"পত্রের দপ্তর",
  subtitle:"The Post Office of Chips", tech:"UART (Serial), SPI, I2C/Two-Wire, Addressing, Bus Arbitration (I2C 1980/pat. 1982; SPI early-1980s; RS-232 1960s)",
  spirit:"সুলাইমানের পত্র — 'এ তো সম্মানিত পত্র, এসেছে সুলাইমানের কাছ থেকে' (২৭:২৯-৩০)",
  secret:"তিন ডাক-ব্যবস্থা: UART দুই পক্ষের ব্যক্তিগত চিঠি, SPI এক প্রভুর দ্রুত আঙুল-ইশারা, I2C এক রাস্তায় সবার ঠিকানা-চিঠি — চিপের সমাজ গড়ে ওঠে চিঠিতেই।",
  recall:{
    q:"UART, SPI, I2C-এর তিন ডাক-স্বভাব এক-লাইনে কেমন — আর I2C-তে দুই মাস্টার একসাথে কথা বলতে গেলে কী হয়?",
    qen:"One line each for the three mail-systems — and what happens when two I2C masters speak at once?",
    a:"UART: দুই তার (TX→RX, RX←TX), দুই পক্ষ, নির্দিষ্ট বিট-হার (৯৬০০/১১৫২০০) ও ফ্রেম (start+৮ডেটা+stop) — ব্যক্তিগত-চিঠি, কোনো ঠিকানা নেই, দুজনের বাইরে কেউ নেই; ক্লক-তারও নেই — দুজনের ঘড়ি আগে-থেকে মিলানো (বিট-হার চুক্তি)। SPI: চার তার (MOSI/MISO/SCK/SS) — এক মাস্টার একাধিক দাস; দ্রুততম (দশ MHz+), কিন্তু প্রতি দাসে আলাদা SS-নির্বাচন-তার লাগে আর কোনো স্বীকৃতি (ack) নেই — প্রভু-আঙুল-ইশারা, চোখের ইশারায় চলে। I2C: মাত্র দুই তার (SDA+SCL) টেনে-তোলা-সহ (open-drain+pull-up), সবাই একই রাস্তায় — প্রতিটা চিপের ৭-বিট ঠিকানা; মাস্টার ঠিকানা-ডাক দেয় (START+addr+R/W), দাস স্বীকৃতি-বিট (ACK) টেনে জানায় 'পেয়েছি' — পোস্ট-অফিস, এক রাস্তায় ১০০+ চিপ। দুই মাস্টার একসাথে শুরু করলে arbitration: উভয় লেখে, কিন্তু SDA টেনে-তোলা-যায় — যে ১-লিখেছিল কিন্তু রাস্তায় ০-দেখলো, সে বুঝলো হেরেছে, চুপ হয়ে গেল (নিম্ন-বিট জয়ী) — কোনো চিঠি নষ্ট হয় না, কারও মুখ কালো হয় না। DS3231 (Door ১১) ঠিক এভাবেই বসে: ঠিকানা ০x68। তিনের ব্যবহার-নিয়ম: দ্রুত-বেশি-ডেটা (ফ্ল্যাশ-স্ক্রিন) → SPI; সরু-সংখ্যা-বেশি-যন্ত্র (সেন্সর-RTC) → I2C; মানুষের সাথে/দুই-বোর্ড → UART।",
    aen:"UART: two wires, two parties, agreed bit-rate, no addresses (private letters). SPI: four wires, one master many slaves, fastest, per-slave select, no acks. I2C: two open-drain wires with pull-ups, 7-bit addresses + ACK — a post office; dual masters resolve by arbitration (loser sees the 0 and yields). DS3231 sits at 0x68. Fast bulk → SPI; many small sensors → I2C; humans/two boards → UART."
  },
  story:`
<p class="scene-setting">ত্রয়োদশ দরজা। পাটুয়াটুলির মোড়ে পুরনো ডাকঘর-ভবনের নিচতলা — হাসান সাহেবের রিটায়ার্ড-আসর: কাচের শোকেসে সাজানো পুরনো সিলমোহর-দিয়ে-ছাপা খামের স্তূপ, দেয়ালে ঝুলছে তাঁর চাকরির আমলের 'টাকা-খাতা'র খালি ফর্ম, টেবিলে আধুনিক ডেভ-বোর্ড তিনটে — প্রতিটার সাথে আলাদা তারের গুচ্ছ। হাসান সাহেব — ষাট-পার, চুল সাদা, গায়ে ধুতি-পাঞ্জাবি, চোখে হালকা রিডিং-গ্লাস, আর তাঁর সিগনেচার: বুকপকেটে সবসময় একটা পুরনো স্টিলের তারিখ-সীল (date-stamp) — কথার মাঝে কোনো সংখ্যা-তারিখ এলেই সীলটা বের করে হাতে ঘোরান, যেন মুখের সংখ্যাটাও অফিসিয়াল করে নিতে হয়। গন্ধ — পুরনো কাগজ, গামলা, চা। শব্দ — রাস্তার ভনিতা, টেবিলে বোর্ড-তার লাগানোর টুক-টাক, দূরে ডাক-পিয়নের সাইকেলের ঘণ্টি।</p>
<p class="scene-setting en">The thirteenth door. Ground floor of the old post-office building at Patuatuli's corner — Hasan's retired den: heaps of old wax-sealed envelopes in a glass case, blank ledger-forms of his service years on the wall, three modern dev boards on the table, each with its own wire-bunch. Hasan — past sixty, white hair, dhuti-panjabi, reading glasses, and his signature: an old steel date-stamp always in his breast pocket — whenever a number or date enters the conversation, out comes the stamp, twirled in hand, as if the spoken number too must be made official. Old paper, glue-pot, tea; street horns, board-wires clicking, a postman's bicycle bell far off.</p>

<div class="dialogue">তুমি সিঁড়িতে সালাম দিলে। হাসান সাহেব গ্লাস তুলে হাসলেন। "রুবেল ভাইয়ের আংশিক-দান দেখে এসেছ? এখন চিপ দেখতেও পায়, মাপা-শক্তিতে ছোঁয়ও। তারপর?"
"তারপর... একা চিপ তো একা — সেন্সর, স্ক্রিন, আরেক চিপ — সবার সাথে কথা?"
"বাহ!" তিনি সীল ঘোরালেন। "সেই প্রশ্নটাই আমার জীবনের প্রশ্ন। আমি চৌত্রিশ বছর ডাকঘরে কাটিয়েছি — একটা চিঠি কীভাবে ঠিকানা পায়, কীভাবে স্বীকৃতি পায়, কোন চিঠি কোন বাক্সে — এসব আমার রক্তে। অবসরের পর নাতিকে বোর্ড ধরাতে গিয়ে দেখলাম — রে বাবা! চিপের দুনিয়াও তো আমারই ডাকঘর! আজ তোমাকে শিখাব সেই ডাকঘর — তিন রকম চিঠির ব্যবস্থা।"</div>
<div class="dialogue en">You greeted him on the stairs. Hasan lifted his glasses and smiled. "Seen Rubel's partial-gift? So the chip sees now, and touches with measured power. Then?"
"Then... a chip alone is alone — sensors, screens, another chip — how do they talk?"
"Ah!" He twirled the stamp. "That is my life's question. I spent thirty-four years in the post office — how a letter gets an address, an acknowledgment, which box receives which — all in my blood. Retired, teaching my grandson boards, I found — good heavens! The chip's world is my own post office! Today I'll teach you that post office — three kinds of mail systems."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে (ডাকঘরের বিখ্যাত গল্প):</strong> হাসান সাহেবের নাতির প্রথম I2C-প্রজেক্ট — সেন্সর থেকে সারাক্ষণ ভুল-পাঠ ০xFF। খুঁটতে খুঁটতে দেখা গেল: SDA/SCL-এর পুল-আপ-রেজিস্টর বসানোই হয়নি — টেনে-তোলা-তার (open-drain) মানে দড়ি শুধু টানা যায়, ছাড়া হয় না নিজে থেকে; পুল-আপই দড়িটা 'ছাড়ে'। <strong>চিঠির ডাক-ব্যবস্থায় রাস্তার নিয়ম (pull-up) ভুললে ডাকই ওঠে না — স্বীকৃতি তো দূরের কথা।</strong> (দ্বিতীয় পাঠ: ঠিকানা ০x68-এর ভুল ০x86 — bit-shift করা ঠিকানা — ডাক-ফেরত রহস্যের আরেক পুরনো আসল কারণ।)</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">TX·RX</div><div class="sc-label">UART — দুই তার, দুই পক্ষ, বিট-হার-চুক্তি; মানুষের সিরিয়াল-জানালাও</div></div>
<div class="stat-card"><div class="sc-num">৪ তার</div><div class="sc-label">SPI — MOSI/MISO/SCK/SS; দ্রুততম, প্রতি-দাসে নির্বাচন-তার</div></div>
<div class="stat-card"><div class="sc-num">৭-বিট</div><div class="sc-label">I2C ঠিকানা — এক দুই-তার রাস্তায় ১০০+ চিপ; ACK-স্বীকৃতি</div></div>
<div class="stat-card"><div class="sc-num">১৯৮০</div><div class="sc-label">I2C-র জন্ম ফিলিপসে (১৯৮২-প্যাটেন্ট); SPI ৮০-এর দশকের গোড়া — মোটরোলা</div></div>
</div>

<div class="diagram">
<div class="diag-title">তিন ডাক-ব্যবস্থার মানচিত্র — তার-সংযোগ এক নজরে</div>
<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
  <!-- UART -->
  <text class="lbl-cyan" x="120" y="24" font-size="12">UART — ব্যক্তিগত চিঠি</text>
  <rect class="cell-cyan" x="30" y="40" width="90" height="36"/>
  <text class="lbl-sm" x="75" y="62">চিপ A</text>
  <rect class="cell-cyan" x="160" y="40" width="90" height="36"/>
  <text class="lbl-sm" x="205" y="62">চিপ B</text>
  <path class="edge-cyan" d="M 120 50 L 160 64" fill="none"/>
  <path class="edge-cyan" d="M 120 64 L 160 50" fill="none"/>
  <text class="lbl-sm" x="140" y="36" font-size="10">TX→RX · RX←TX</text>
  <text class="lbl-sm" x="120" y="96">৯৬০০/৮N১ — দুজনের ঘড়ি-চুক্তি</text>
  <!-- SPI -->
  <text class="lbl-hot" x="120" y="130" font-size="12">SPI — প্রভুর ইশারা</text>
  <rect class="cell-hot" x="30" y="146" width="90" height="36"/>
  <text class="lbl-sm" x="75" y="168">মাস্টার</text>
  <rect class="cell" x="160" y="120" width="70" height="28"/>
  <text class="lbl-sm" x="195" y="138" font-size="10">দাস ১</text>
  <rect class="cell" x="160" y="156" width="70" height="28"/>
  <text class="lbl-sm" x="195" y="174" font-size="10">দাস ২</text>
  <rect class="cell" x="160" y="192" width="70" height="28"/>
  <text class="lbl-sm" x="195" y="210" font-size="10">দাস ৩</text>
  <path class="edge-hot" d="M 120 158 L 160 134 M 120 160 L 160 170 M 120 164 L 160 206" fill="none"/>
  <text class="lbl-sm" x="300" y="126" font-size="10">MOSI ↓ MISO ↑ SCK ⇄</text>
  <text class="lbl-sm" x="300" y="144" font-size="10">SS১/SS২/SS৩ — আলাদা তার</text>
  <!-- I2C -->
  <text class="lbl" x="450" y="24" font-size="12">I2C — পোস্ট-অফিস</text>
  <rect class="cell" x="380" y="40" width="90" height="30"/>
  <text class="lbl-sm" x="425" y="59">মাস্টার</text>
  <line class="edge" x1="420" y1="70" x2="420" y2="200"/>
  <line class="edge" x1="440" y1="70" x2="440" y2="200"/>
  <text class="lbl-sm" x="452" y="110" font-size="10">SDA</text>
  <text class="lbl-sm" x="404" y="110" font-size="10">SCL</text>
  <rect class="cell-cyan" x="470" y="95" width="70" height="24"/>
  <text class="lbl-sm" x="505" y="111" font-size="10">০x৬৮ RTC</text>
  <rect class="cell-cyan" x="470" y="135" width="70" height="24"/>
  <text class="lbl-sm" x="505" y="151" font-size="10">০x৪A সেন্সর</text>
  <rect class="cell-cyan" x="470" y="175" width="70" height="24"/>
  <text class="lbl-sm" x="505" y="191" font-size="10">০x3C স্ক্রিন</text>
  <line class="edge" x1="440" y1="107" x2="470" y2="107"/>
  <line class="edge" x1="440" y1="147" x2="470" y2="147"/>
  <line class="edge" x1="440" y1="187" x2="470" y2="187"/>
  <!-- pullup note -->
  <text class="lbl-hot" x="425" y="220" font-size="10">↑পুল-আপ-রেজিস্টর দুই তারেই বাধ্য</text>
  <text class="lbl-sm" x="425" y="234" font-size="10">(open-drain — টানা সবাই পারে, ছাড়া পুল-আপ)</text>
  <!-- verdict strip -->
  <rect class="cell" x="30" y="248" width="330" height="14" visibility="hidden"/>
  <text class="lbl" x="280" y="250" font-size="11">দ্রুত-ভলিউম → SPI · বেশি-যন্ত্র-সরু-ডেটা → I2C · দুই-পক্ষ/মানুষ → UART</text>
</svg>
<div class="diag-cap">ওপরে UART-এর দুই-তার ক্রস-চিঠি; মাঝে SPI-র চার-তার প্রভু-দাস; ডানে I2C-র এক-রাস্তায় ঠিকানা-চিঠি (SDA/SCL + পুল-আপ) — তিন সমাজ-নির্মাণের তিন রুট।</div>
</div>

<div class="dialogue">হাসান সাহেব তিন বোর্ড সাজিয়ে তোমাকে একে-একে চালাতে দিলেন। প্রথমে UART: তোমার টার্মিনালে চিপের পাঠা প্রতিটা অক্ষর — "এ তো মানুষের সাথেও চলে, আর দুই বোর্ডের মধ্যেও — ব্যক্তিগত ডাক-সড়ক।" তারপর SPI: স্ক্রিনে ছবি উঠলো ঝলঝলে — "দেখো গতি! কিন্তু খেয়াল করো — প্রতিটা দাসের জন্য আলাদা নির্বাচন-তার। চিঠি নয়, আঙুল-ইশারা — বাড়তি যন্ত্র বাড়ালে তারও বাড়াতে হয়।" শেষে I2C: DS3231-এর ঠিকানায় ০x68 পাঠাতেই রেজিস্টার থেকে সময় ফিরে এলো — ACK-বিটে ছোট্ট টান! "দেখলে স্বীকৃতি? ডাকঘরের প্রাণ এই-ই — পাঠিয়েছি মাত্র নয়, <em>পৌঁছেছে</em> জানা।" তারপর তিনি দুই মাস্টারের গল্প বললেন — একই রাস্তায় দুজন একসাথে শুরু করলে ক্ষতি নেই: যে নিজের ১-এর জায়গায় রাস্তায় ০ দেখে, সে-ই পিছিয়ে যায় — "ডাকঘরে একে বলতাম সৌজন্য-প্রতিযোগিতা; চিপের ভাষায় arbitration। রাস্তা একটাই, অহংকার নয়।"</div>
<div class="dialogue en">Hasan set the three boards and let you drive each. First UART: every character the chip sent in your terminal — "this works with humans too, and between two boards — a private mail-road." Then SPI: a screen lit crisp — "see the speed! But note — a separate select-wire per slave. Not letters, finger-signals; add a device, add a wire." Finally I2C: address 0x68 to the DS3231 — time came back from its registers, a tiny pull on the ACK bit! "Saw the acknowledgment? The post office's soul is this — not merely sent, but <em>known to arrive</em>." Then the two-master story — both starting on one road, harmlessly: whoever writes 1 and sees 0 on the wire yields — "in the post office I called it courteous contention; in chip-tongue, arbitration. One road, no egos."</div>

<div class="code-block">ডাক-ব্যবস্থার নামাবলি — UART/SPI/I2C in code:

UART — দুই-পক্ষ চিঠি (মানুষের সিরিয়াল-জানালা):
  আর্দুইনো: Serial.begin(115200);
             Serial.println("হ্যালো পাটুয়াটুলি!");
  বেয়ার-মেটাল সার: UBRR০ = বিট-হার-ভাগক; UCSR০B = RXEN|TXEN;
    পাঠাও: UDR০ = 'A'; পড়ো: c = UDR০;
  ফ্রেম: START + ৮ ডেটা (+parity) + STOP — ঘড়ি-চুক্তি (বিট-হার)

SPI — দ্রুত-ভলিউম (চার তার):
  #include &lt;SPI.h&gt;
  SPI.begin();
  digitalWrite(SS, LOW);        // দাস-নির্বাচন (নিজের তার)
  SPI.transfer(0x2A);           // পাঠাও-এবং-পড়ো একই ঘড়িতে
  digitalWrite(SS, HIGH);       // ছাড়া
  মোড-চতুষ্টয় (CPOL/CPHA): ঘড়ির ধার-সংস্করণ ৪টি —
  দাসের ডেটাশিট কোনটি চায়, আগে পড়ো

I2C — ঠিকানা-চিঠি (দুই তার, পুল-আপ বাধ্য):
  #include &lt;Wire.h&gt;
  Wire.begin();                        // মাস্টার
  Wire.beginTransmission(0x68);       // DS3231-এর ঠিকানা
  Wire.write(0x00);                   // রেজিস্টার-পয়েন্টার
  Wire.endTransmission();             // STOP — স্বীকৃতি এলো?
  Wire.requestFrom(0x68, 7);          // ৭ বাইট (সময়!) চাও
  while (Wire.available()) b = Wire.read();

  ঠিকানা-নোট: ৭-বিট ঠিকানা → ফ্রেমে ৮ম বিট R/W
  (০x68 লেখা হয় বাসে ০xD0 হিসেবে — নাতির ০x86-রহস্যের জবাব!)
  স্ক্যানার-ছোট-কাজ: ১ থেকে ১২৭ পর্যন্ত ডেকে ACK-দাতার তালিকা —
  অচেনা বাসের প্রথম কাজ এক্কেবারে

কোনটা কখন (ডাকঘর-নিয়ম):
  মানুষ/পিসি/দুই-বোর্ড লগ → UART
  স্ক্রিন-ফ্ল্যাশ-ADC-চিপ, MHz-বিট-হার → SPI
  অনেক সরু-সেন্সর কম তারে → I2C
  দূরের যন্ত্র (মিটার-দশ মিটার) → দরজা ১৫-এর রেডিও-ডাক

গভীর-জলের চিঠি (জেনে রাখুন):
  বাফার+ডাক: RX-ডাক (Door ১০) এলে বাইট তুলে রাখো —
    লুপ-মধ্যে পড়া বিলম্ব হলে ওভাররান-হারানো চিঠি
  I2C clock-stretching: ধীর-দাস SCL ধরে রাখে — সবুরের অধিকার
  বহু-মাস্টার arbitration: পরাজিত শান্ত, রাস্তা নিরাপদ
  RS-232/485: UART-এর দূর-দূরান্ত আত্মীয় (১৯৬০-এর দশকের চুক্তি;
    485-এর ডিফারেনশিয়াল-জোড়া কারখানার লম্বা তারে বিদ্যুৎ-শব্দ কাটে)</div>

<div class="dialogue">সন্ধ্যার আজানের সময় হাসান সাহেব সীলটা বুকপকেটে ঢুকিয়ে বললেন: "শেষ কথা। সুলাইমান-আলাইহিস-সালাম সাবার রানীর কাছে পাঠালেন এক পত্র — কুরআন বলছে: 'এ তো সম্মানিত পত্র, সুলাইমানের কাছ থেকে এসেছে, আল্লাহর নামে, দয়াময়ের নামে' (২৭:২৯-৩০)। লক্ষ্য করো — পত্রের গায়ে তিনটা জিনিস: প্রেরক, প্রাপক, উদ্দেশ্য — আর হুদহুদ নিয়ে গেল, রানী স্বীকার করলো, উত্তর ফিরলো। এ যে আমার প্রোটোকল-পাঠের চেয়েও নিখুঁত চিঠির ব্যাকরণ: হেডার, ঠিকানা, ACK! তোমার চিপের প্রতিটা I2C-ফ্রেম ওই পত্রেরই নাতি-নাতনি। যে যন্ত্র সম্মানের সাথে চিঠি পাঠায় — ঠিকানা, স্বীকৃতি, সৌজন্য — তার সমাজ টেকে। কাল আরিফ ভাইয়ের কাছে যাও — যাত্রার শেষ-প্রস্তুতি: বুট-দরজা, RTOS আর ডিবাগ-ঘাট — মিকাতের মতো নিয়ত-স্থির করার দপ্তর।"</div>
<div class="dialogue en">At the evening adhan, Hasan slipped the stamp into his pocket: "Last word. Solomon sent a letter to the queen of Sheba — the Quran says: 'It is a noble letter, from Solomon, in the name of Allah, the Merciful' (27:29-30). Mark — three things on its face: sender, recipient, purpose; the hoopoe carried it, the queen acknowledged, the reply returned. A more perfect grammar of letters than any protocol lecture: header, address, ACK! Every I2C frame in your chip is that letter's grandchild. A machine that sends letters with honor — address, acknowledgment, courtesy — its society endures. Tomorrow — Arif's: the journey's final preparation — the boot gate, RTOS, and the debug wharf; the department of fixing intention, like the miqat."</div>



<div class="photo-frame"><img src="photos/arduino.jpg" alt="Arduino Uno R3 — বুট-শেখার প্রথম বোর্ড"><div class="photo-cap">Arduino Uno R3 — বুট-শেখার প্রথম বোর্ড · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — USB-সিরিয়াল সেতু ও RS-485-এর লম্বা-তার</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="30" y="40" width="130" height="70"/>
  <text class="lbl" x="95" y="66">CH34০/CP২১০২</text>
  <text class="lbl-sm" x="95" y="88" font-size="10">USB↔UART সেতু</text>
  <text class="lbl-sm" x="95" y="104" font-size="10">ল্যাপটপ↔চিপ-বন্ধু</text>
  <rect class="cell-cyan" x="200" y="40" width="150" height="70"/>
  <text class="lbl-cyan" x="275" y="66">MAX৪৮৫</text>
  <text class="lbl-sm" x="275" y="88" font-size="10">UART↔ডিফারেনশিয়াল</text>
  <text class="lbl-sm" x="275" y="104" font-size="10">কিমি-তার, কারখানা-শব্দ-সহ</text>
  <rect class="cell" x="390" y="40" width="140" height="70"/>
  <text class="lbl" x="460" y="66">লেভেল-নিয়ম</text>
  <text class="lbl-sm" x="460" y="88" font-size="10">TTL: ৩.৩V/৫V-লজিক</text>
  <text class="lbl-sm" x="460" y="104" font-size="10">RS-232: ±১২V — মেলানো নিষেধ!</text>
  <path class="edge" d="M 330 76 Q 360 130 390 76" fill="none"/>
  <path class="edge-hot" d="M 275 110 Q 275 170 400 170 Q 520 170 520 110" fill="none"/>
  <text class="lbl-hot" x="400" y="192" font-size="10">A/B-জোড়া তার — দুই-প্রান্তে ১২০Ω টার্মিনেটর</text>
</svg>
<div class="diag-cap">তিন প্রহরী: USB-সেতু (ল্যাপটপের ভাষা), RS-485 (কারখানার লম্বা-দূরত্ব, শব্দ-কাটা জোড়া-তার), আর লেভেল-শৃঙ্খলা — TTL-চিপ সরাসরি RS-232-এর ±১২V সহ্য করে না।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — UART-ফ্রেমের বিট-বিট ব্যান্ডেলথ-চিত্র</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <line class="axis" x1="40" y1="40" x2="40" y2="150"/>
  <path class="edge-cyan" d="M 40 140 L 70 140 L 70 60 L 100 60 L 100 140 L 130 140 L 130 60 L 160 60 L 160 140 L 190 140 L 190 60 L 220 60 L 220 140 L 250 140 L 250 60 L 280 60 L 280 140 L 310 140 L 310 60 L 340 60 L 340 140 L 370 140" fill="none"/>
  <text class="lbl-sm" x="55" y="164" font-size="10">START</text>
  <text class="lbl-sm" x="130" y="164" font-size="10">ডেটা-বিট ×৮ (LSB-আগে)</text>
  <text class="lbl-sm" x="310" y="164" font-size="10">STOP</text>
  <text class="lbl" x="200" y="196" font-size="10">অক্ষর 'A' = ০b০১০০০০০১ — উল্টো-ক্রমে তারে!</text>
  <rect class="cell" x="60" y="208" width="440" height="22"/>
  <text class="lbl-sm" x="280" y="223" font-size="10">৯৬০০ baud = প্রতি-বিট ১০৪μs → এক-ফ্রেম ≈ ১.০৪ms — দুই প্রান্তের ঘড়ি-সম্মতির সীমা ২-৩%</text>
</svg>
<div class="diag-cap">এক-অক্ষরের পূর্ণ-যাত্রা: নিম্ন-START → ৮-বিট (LSB-প্রথমে!) → STOP — কোনো ক্লক-তার নেই, শুধু বিট-সময়ের চুক্তি; দুই ঘড়ি ভাসলে বিট-সীমানা ঝাপসা → আবর্জনা-অক্ষর।</div>
</div>

<div class="verse">
<div class="verse-arabic">إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
<div class="verse-translation">নিশ্চয়ই এটি সুলাইমানের পক্ষ থেকে, আর নিশ্চয়ই এটি 'পরম করুণাময় অসীম দয়ালু আল্লাহর নামে'।</div>
<div class="verse-ref">— কুরআন ২৭:৩০</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 13 — চিঠি-পথ — ওয়াক্ত-খাতা যুক্ত:</strong> DS3231 I2C-তে (০x68): ঠিকানা-ডাক → ACK → রেজিস্টার-পয়েন্টার → ৭-বাইট সময়। <strong>কেন-লগ:</strong> টাইমস্ট্যাম্প-ছাড়া ডেটা অনাথ — মেঘের খাতায় কোন পাঠ কখনের, তা-ই প্রশ্ন হয়ে যেত। এখন প্রতিটা পাঠের সাথে সময়ের সনদ; আর স্ক্যানার-স্কেচ দিয়ে বাস-জরিপ — কে কোন ঠিকানায় বসে আছে।</div></div>
<div class="secret-box"><div class="label">দরজা ১৩ — রহস্য</div><div class="text">📮 চিপের সমাজ চিঠিতে: UART ব্যক্তিগত-দুই-পক্ষ, SPI প্রভু-আঙুল-দ্রুত, I2C এক-রাস্তায় ঠিকানা+স্বীকৃতি — সৌজন্যই প্রোটোকল।<br><small>TX/RX বিট-হার-চুক্তি; SS-নির্বাচন; SDA/SCL+পুল-আপ, ACK, arbitration; ০x68→বাসে ০xD0। পত্র: ২৭:২৯-৩০।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>তিন-ব্যবস্থার চরিত্র-বিভাজন:</strong> তার-সংখ্যা, ঠিকানা-থাকা, ACK-থাকা, গতি — চার-মাত্রার টেবিল মুখে বলা যাবে; নতুন পেরিফেরিয়াল পেলে কোনটা বেছে নেবে, সিদ্ধান্ত-সহ।</li>
<li><strong>I2C-হাতে-চালানো:</strong> DS3231-পাঠের পূর্ণ সিকোয়েন্স (ঠিকানা→পয়েন্টার→read) — Wire-লাইব্রেরি দিয়ে আজই একবার চালাও; স্ক্যানার-স্কেচও লিখে ফেলো।</li>
<li><strong>ঠিকানা-শিফট-রহস্য:</strong> ৭-বিট ০x68 বনাম বাস-বাইট ০xD0 — ডেটাশিটের দুই রকম লেখার কারণ এখন পরিষ্কার।</li>
<li><strong>পুল-আপ-অন্তর্দৃষ্টি:</strong> open-drain মানে 'সবাই টানতে পারে, কেউ একা ছাড়তে পারে না' — পুল-আপই ছাড়ে; arbitration-এর ভিত্তিও একই।</li>
<li><strong>ইতিহাস-শুদ্ধ:</strong> I2C — ফিলিপস, ১৯৮০-সালে উদ্ভাবিত (১৯৮২-প্যাটেন্ট/প্রকাশ); SPI — মোটরোলা, ৮০-এর দশকের গোড়া; RS-232 — ১৯৬০-এর দশকের EIA-চুক্তি।</li>
</ul>`
  }
});

// ── DOOR 14: মিকাত — যাত্রার ঘাট (MEMORY MAP, BOOT, RTOS, DEBUG) ──
doors.push({
  num:14, icon:"🕋", color:"#fbbf24", name:"মিকাত — যাত্রার ঘাট",
  subtitle:"The Station of Departure", tech:"Memory Map, Boot Process, Bootloader, Bare-Metal vs RTOS (FreeRTOS 2003), Tasks/Scheduler, Debug: SWD/JTAG (IEEE 1149.1-1990)",
  spirit:"মিকাত — হজ-যাত্রীর নির্ধারিত সীমানা; ইহরাম বাঁধার ঘাট — যাত্রা শুরুর আগে নিয়ত-প্রস্তুতির স্থেশন",
  secret:"পাওয়ার-অন মানে তাৎক্ষণিক তোমার কোড নয় — শহর জেগে রেজিস্টার-পুনর্বাসনের স্তর পেরিয়ে আসে; আর রাস্তায় কে আগে যাবে সেটাই শিডিউলারের ফয়সালা।",
  recall:{
    q:"পাওয়ার-অন থেকে তোমার main() পর্যন্ত কী কী স্তর পেরোয় — আর bare-metal লুপ বনাম RTOS-টাস্ক কখন কোনটা, JTAG তোমাকে কী ক্ষমতা দেয়?",
    qen:"What layers pass between power-on and your main() — bare-metal loop vs RTOS task when which, and what power does JTAG give you?",
    a:"বুট-স্তর: (১) রিসেট-ভেক্টরে CPU লাফ (ঠিকানা চিপ-নকশায় নির্ধারিত; AVR-এ ফ্ল্যাশের ০x0000, ARM-এ ভেক্টর-টেবিলের প্রথম এন্ট্রি) → (২) স্টার্টআপ-কোড/বুটলোডার: স্ট্যাক-পয়েন্টার বসানো, .data কপি (ফ্ল্যাশ→RAM), .bss শূন্য-করণ, ঘড়ি-প্রি-স্কেলার স্থিরকরণ → (৩) তারপর main()। আর্দুইনো-বোর্ডে মাঝখানে বুটলোডার বসে: রিসেটে কয়েক সেকেন্ড সিরিয়াল-পোর্ট শোনে — নতুন কোড এলে ফ্ল্যাশে নিজেই লেখে, না এলে তোমার কোডে হাল ছাড়ে; এজন্যই 'আপলোড-বোতাম' চলে প্রোগ্রামার ছাড়াই। Memory map = শহরের জমিন-হাতবই: ঠিকানা-জগতে ফ্ল্যাশ/RAM/পেরিফেরিয়াল-রেজিস্টার কোথায় বসেছে — MCU-তে প্রায়ই একই ঠিকানা-স্রোতে মিশ্র (মেমোরি-ম্যাপড I/O, Door ৮-এর চিঠি-পদ্ধতির ভিত্তি!)। bare-metal বনাম RTOS: bare-metal মানে এক লুপ + ইন্টারাপ্ট — সরল, নির্ভরযোগ্য, ছোট; RTOS (FreeRTOS — রিচার্ড ব্যারি, ২০০৩; এখন AWS-এর হেফাজতে) মানে অনেক টাস্ক নিজেদের 'একসাথে চলার' বিভ্রমে চলে — শিডিউলার প্রতি টিকে সিদ্ধান্ত নেয় কে চলবে (অগ্রাধিকার-ভিত্তিক, প্রিএম্পশন-সহ), প্রতিটা টাস্কের নিজস্ব স্ট্যাক; সেমাফোর/কিউ দিয়ে টাস্ক-সময়/সম্পদ-ভাগ। সিদ্ধান্ত-নিয়ম: কয়েকটা স্বাধীন-সময়ের কাজ + কঠিন-সময়-সীমা + বড় কোড → RTOS; এক-লাইনের নিয়ন্ত্রণ → bare-metal-ই সরল। JTAG/SWD = পেছনের দরজা-ডাক্তার: চিপ চলার সময় ভেতরে ঢুকে দেখো — রেজিস্টার-মান পড়া, ব্রেক-পয়েন্টে থামানো, এক-ধাপ করে চালানো, এমনকি ফ্ল্যাশ-প্রোগ্রামিং। JTAG = IEEE 1149.1-১৯৯০ প্রমিত (৪-৫ পিন), SWD = ARM-এর দুই-তার সংক্ষিপ্ত রূপ — পেশাদার বোর্ডে সোনার প্যাডগুলো ওরাই। printf-ডিবাগ যেখানে অন্ধ, ওখানে এ-চোখ সর্বদৃষ্ট।",
    aen:"Boot: reset-vector jump → startup (stack, .data copy, .bss zero, clocks) → main(). Arduino's bootloader listens on serial a few seconds, self-flashing, else hands off. Memory map: the address book placing Flash/RAM/peripherals. Bare-metal = one loop + interrupts; RTOS (FreeRTOS, Barry 2003, AWS-stewarded) = many tasks, priority preemptive scheduler, per-task stacks, semaphores/queues. JTAG (IEEE 1149.1-1990, 4-5 pins) / SWD (ARM 2-wire) = live register view, breakpoints, single-step, flashing."
  },
  story:`
<p class="scene-setting">চতুর্দশ দরজা। কারিগরখানার ওপরের তলায় আরিফ ভাইয়ের আর্কিটেক্ট-কোণ — শান্ত, ঠান্ডা ঘর: দেয়ালে ছাপা দুইটা বড় ম্যাপ — একটা MCU-র মেমোরি-ম্যাপ, একটা বুট-প্রবাহের ডায়াগ্রাম; টেবিলে ল্যাপটপের সাথে ST-Link জাতীয় ছোট্ট ডিবাগ-প্রোব, তার চার-পিন একটা বোর্ডের সোনালি প্যাডে যুক্ত। আরিফ ভাই — শেষ ত্রিশের গোড়া, শান্ত-গম্ভীর মুখ, গায়ে পাকা-ইস্ত্রির শার্ট, আর তাঁর সিগনেচার: ডান হাতের তর্জনীতে ছোট্ট একটা কাচের লুপ-চেইন আংটা — ডেটাশিটের সূক্ষ্ম ফুটনোট পড়ার সময় লুপটা চোখে তোলেন, বাকি সময় আঙুলে ঝুলিয়ে রাখেন; তাঁর কথা কম, প্রতিটা বাক্য পরিমাপ-করা। গন্ধ — ঠান্ডা প্লাস্টিক, কফি, পুরনো কাগজ। শব্দ — ঘরের নীরবতা, ল্যাপটপের ফ্যানের ফিসফিস, মাঝে মাঝে ডিবাগ-প্রোবের সংযোগ-টোন।</p>
<p class="scene-setting en">The fourteenth door. Arif's architect corner upstairs — a quiet, cool room: two large printed maps on the wall — an MCU memory map, a boot-flow diagram; a small ST-Link-style debug probe wired by four pins to a board's gold pads. Arif — early thirties, calm grave face, pressed shirt, and his signature: a small glass loupe on a chain around his right index finger — raised to his eye for datasheet footnotes, otherwise hanging; his words few, each measured. Cold plastic, coffee, old paper; the room's silence, a laptop fan's whisper, now and then the probe's connect-tone.</p>

<div class="dialogue">তুমি নিঃশব্দে ঢুকলে। আরিফ ভাই লুপ-চেইন আঙুলে নামিয়ে মেমোরি-ম্যাপের দিকে ইশারা করলেন। "হাসান সাহেবের চিঠি-দপ্তর দেখে এসেছ। জানো ঠিকানা। এবার জানো শহরের জমিন-হাতবই।" তিনি ম্যাপের তিনটা অঞ্চল দেখালেন — ফ্ল্যাশ, RAM, পেরিফেরিয়াল। "প্রতিটা ঠিকানার পেছনে নির্দিষ্ট জিনিস বসেছে — কোড, ভেরিয়েবল, না ডিভাইস। চিঠি ভুল ঠিকানায় গেলে যা হয়, সেটাই হয় — হার্ডফল্ট।" তারপর বুট-ম্যাপের দিকে ফিরলেন। "আজ শেষ প্রস্তুতি — তিনটা প্রশ্নে: শহর কীভাবে জাগে, রাস্তায় কে আগে চলে, আর রোগ ধরা যায় কোন চোখে।"</div>
<div class="dialogue en">You entered quietly. Arif slid the loupe-chain off his finger and gestured at the memory map. "Seen Hasan's post office; you know addresses. Now — the city's land-book." He showed three regions — Flash, RAM, peripherals. "Behind every address sits a definite thing — code, variable, or device. A letter to the wrong address gets exactly what it deserves — hardfault." He turned to the boot map. "Today, the final preparation — three questions: how the city wakes, who walks first, and with which eye disease is caught."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে (আরিফ ভাইয়ের কাছের গল্প):</strong> তাঁর দলের এক প্রজেক্ট — মাঝে মাঝেই ডিভাইস বুটের পর মরে থাকতো, লগ-এ কিছু নেই। printf দিয়ে ঘণ্টা নষ্ট; শেষে JTAG-প্রোব লাগালেন — ব্রেক-পয়েন্ট বুট-শুরুতে, এক-ধাপ-এক-ধাপ: দেখা গেল .data-কপির আগে স্ট্যাক-পয়েন্টার বসেনি (লিংকার-স্ক্রিপ্টের ভুল) — প্রথম ফাংশন-কলেই শহর-পতন, বার্তা দেওয়ার আগেই। <strong>চোখের ডাক্তার অন্ধ-ব্যথার আগেই রোগ দেখে — এমন ফাঁদে printf-অন্ধতা মারাত্মক।</strong></div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">০x০০০০</div><div class="sc-label">রিসেট-ভেক্টর — জাগরণের প্রথম ঠিকানা; ARM-এ ভেক্টর-টেবিলের প্রথম এন্ট্রি</div></div>
<div class="stat-card"><div class="sc-num">.data/.bss</div><div class="sc-label">স্টার্টআপের দুই কাজ: ফ্ল্যাশ→RAM কপি; শূন্য-স্ফীতি</div></div>
<div class="stat-card"><div class="sc-num">২০০৩</div><div class="sc-label">FreeRTOS — রিচার্ড ব্যারি; এখন AWS-হেফাজতে (২০১৭-থেকে)</div></div>
<div class="stat-card"><div class="sc-num">SWD·২ তার</div><div class="sc-label">ARM-এর সংক্ষিপ্ত ডিবাগ-দরজা; JTAG=IEEE 1149.1-১৯৯০ (৪-৫ পিন)</div></div>
</div>

<div class="diagram">
<div class="diag-title">জাগরণের সিঁড়ি ও রাস্তার ফয়সালা — বুট-প্রবাহ + শিডিউলার</div>
<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
  <!-- boot ladder -->
  <text class="lbl-hot" x="150" y="24" font-size="12">পাওয়ার-অন → তোমার কোড</text>
  <rect class="cell-hot" x="60" y="36" width="180" height="30"/>
  <text class="lbl-sm" x="150" y="55">১. রিসেট-ভেক্টরে লাফ</text>
  <line class="edge" x1="150" y1="66" x2="150" y2="80"/>
  <rect class="cell" x="60" y="80" width="180" height="30"/>
  <text class="lbl-sm" x="150" y="99">২. স্ট্যাক-পয়েন্টার বসাও</text>
  <line class="edge" x1="150" y1="110" x2="150" y2="124"/>
  <rect class="cell" x="60" y="124" width="180" height="30"/>
  <text class="lbl-sm" x="150" y="143">৩. .data কপি · .bss শূন্য</text>
  <line class="edge" x1="150" y1="154" x2="150" y2="168"/>
  <rect class="cell" x="60" y="168" width="180" height="30"/>
  <text class="lbl-sm" x="150" y="187">৪. ঘড়ি-কনফিগ · বুটলোডার-শ্রবণ</text>
  <line class="edge" x1="150" y1="198" x2="150" y2="212"/>
  <rect class="cell-cyan" x="60" y="212" width="180" height="30"/>
  <text class="lbl-cyan" x="150" y="231">৫. main() — হাল তোমার হাতে</text>
  <!-- RTOS scheduler -->
  <text class="lbl" x="420" y="24" font-size="12">RTOS-শিডিউলার — কে চলবে?</text>
  <rect class="cell" x="320" y="40" width="200" height="26"/>
  <text class="lbl-sm" x="420" y="57">টাস্ক-কিউ (অগ্রাধিকার-সারি)</text>
  <rect class="cell-hot" x="330" y="80" width="80" height="30"/>
  <text class="lbl-sm" x="370" y="99">সেন্সর (উ)</text>
  <rect class="cell" x="430" y="80" width="80" height="30"/>
  <text class="lbl-sm" x="470" y="99">লগ (ম)</text>
  <rect class="cell" x="330" y="122" width="80" height="30"/>
  <text class="lbl-sm" x="370" y="141">রেডিও (উ+)</text>
  <rect class="cell" x="430" y="122" width="80" height="30"/>
  <text class="lbl-sm" x="470" y="141">ঘুম (অ)</text>
  <line class="edge-cyan" x1="420" y1="152" x2="420" y2="170"/>
  <rect class="cell-cyan" x="330" y="170" width="180" height="30"/>
  <text class="lbl-cyan" x="420" y="189">প্রতি টিকে প্রিএম্পটিভ ফয়সালা</text>
  <text class="lbl-sm" x="420" y="222">উচ্চ-অগ্রাধিকার প্রস্তুত? → লাফ</text>
  <text class="lbl-sm" x="420" y="238">না? → চলন্ত টাস্ক চলতেই থাকে</text>
  <!-- bare metal note -->
  <rect class="cell" x="60" y="248" width="440" height="14" visibility="hidden"/>
  <text class="lbl" x="280" y="260" font-size="11">bare-metal = এক-লুপ+ইন্টারাপ্ট · RTOS = বহু-টাস্ক+শিডিউলার — দুই-ই সৎ, প্রশ্ন জটিলতায়</text>
</svg>
<div class="diag-cap">বাঁয়ে জাগরণের পাঁচ-সিঁড়ি (ভেক্টর→স্ট্যাক→ডেটা→কনফিগ→main); ডানে শিডিউলারের প্রতি-টিক-ফয়সালা — মিকাতের মতো: যাত্রার আগে প্রতিটা স্তর নিয়ত-বাঁধা।</div>
</div>

<div class="code-block">যাত্রার ঘাটের নামাবলি — Boot, RTOS, Debug:

বুট-স্তরের খাতা (linker-দৃষ্টিতে):
  .text  → ফ্ল্যাশ (কোড + ধ্রুবক)     .data → RAM (শুরুর-মানসহ;
  .bss   → RAM (শূন্য-স্ফীতি)             মান ফ্ল্যাশে, বুটে কপি!)
  স্টার্টআপ সার: SP বসাও → .data নামাও →
  .bss মুছো → SystemInit (ঘড়ি) → main
  ARM-এ ভেক্টর-টেবিল: SP-মান + রিসেট-হ্যান্ডলার +
  প্রতিটা ইন্টারাপ্টের ঠিকানা (Door ১০-এর খাতা এখানেই বসে)

বুটলোডার-জীবন (আর্দুইনোর গোপন):
  রিসেট → বুটলোডার ২-৩ সে. সিরিয়াল-শ্রবণ
  নতুন .hex এলো? → ফ্ল্যাশ-নিজে-লেখা → রিসেট → নতুন কোড
  নীরবতা? → তোমার আগের কোডে হস্তান্তর
  ESP32-তে দ্বৈত-বুটলোডার + OTA (দরজা ১৫-এ মেঘ-পাঠ)

RTOS-হাতে-ছোট-প্রতিমা (FreeRTOS-স্বাদ):
  void vSensorTask(void *p) {
    for(;;) {
      read_sensor();
      xQueueSend(q, &reading, 0);     // চিঠি-দপ্তর (Door ১৩!)
      vTaskDelay(pdMS_TO_TICKS(1000)); // ওয়াক্ত-ঘোষণা (Door ১১!)
    }
  }
  xTaskCreate(vSensorTask, "sen", 256, NULL, 2, NULL);
  vTaskStartScheduler();   // শহরের বিচারক জেগে উঠলো
  ভাগের হাতিয়ার: কিউ (চিঠি), সেমাফোর (তালা),
  mutex (নাম-লেখা তালা), নিজস্ব-স্ট্যাক প্রতি টাস্কে

bare-metal বনাম RTOS — সিদ্ধান্ত-স্কেল:
  এক-স্রোত, সরল সময় → bare-metal (ডিউটি-চক্রের লুপ)
  বহু স্বাধীন-সময়ের কাজ + কঠিন-সময়-সীমা → RTOS
  বাড়তি খরচ: প্রতি-টাস্ক স্ট্যাক + কনটেক্সট-সুইচ (~μs)

ডিবাগ-দরজা (SWD/JTAG — চলন্ত শহরে প্রবেশ):
  সংযোগ: SWDIO+SWCLK (২ তার) / JTAG-এর TDI-TDO-TMS-TCK
  ক্ষমতা: রেজিস্টার-মান পড়া · ব্রেক-পয়েন্ট · সিঙ্গেল-স্টেপ ·
    ফ্ল্যাশ-প্রোগ্রামিং · ক্র্যাশে কল-স্ট্যাক-ময়না
  GDB-সাথী: arm-none-eabi-gdb + প্রোব = জীবন্ত-শহরের ভিডিও-কল
  শিষ্টাচার: ডিবাগ-ঘুম কমাও (ঘুম-ডিবাগ-যুদ্ধ), প্রোব-প্যাড
    বোর্ডে রাখো — ফিল্ডে একমাত্র নাড়ি-ধরার জায়গা</div>

<div class="dialogue">সন্ধ্যায় আরিফ ভাই লুপ-চেইন চোখে তুলে বুট-ম্যাপের শেষ লাইনটা পড়লেন — তারপর নামিয়ে বললেন: "হজ-যাত্রীরা জানো মিকাতে থামে — নির্দিষ্ট স্থানে ইহরাম বাঁধে, নিয়ত ঠিক করে, তারপর যাত্রা। চিপের জাগরণও তাই: পাঁচটা মিকাত — ভেক্টর, স্ট্যাক, ডেটা, ঘড়ি, বুটলোডার — প্রতিটা স্তরে নিয়ত-বাঁধা হয়, তারপর main()-এর যাত্রা শুরু। যে ডেভেলপার এই স্তরগুলো জানে, তার কাছে 'ম্যাজিক' বলে কিছু থাকে না — বুট-ব্যর্থতাও তদন্তযোগ্য রহস্য, অন্ধকার নয়। আর মনে রেখো — শিডিউলার যত সামর্থ্যবান, নিয়ত-পরীক্ষাও তত সূক্ষ্ম: অগ্রাধিকার-উল্টো-নিয়ম (priority inversion) আর ডেডলক — এই দুই শিকারির নাম আজই মুখস্থ করে যাও। কাল শেষ প্রয়োগ-দরজা — সাদিয়া আপা: বাতাসের সাথে কথা। বাগানের ফসল মেঘে যাবে।"</div>
<div class="dialogue en">At dusk Arif raised the loupe to read the boot map's last line, then lowered it: "Pilims stop at the miqat — at fixed stations they don the ihram, set their intention, then journey. The chip's waking is the same: five miqats — vector, stack, data, clock, bootloader — intention bound at each layer, and only then the journey of main(). A developer who knows these layers has no 'magic' left — even boot failure becomes an investigable mystery, not darkness. And remember — the mightier the scheduler, the subtler the trial: priority inversion and deadlock — memorize these two hunters' names before you go. Tomorrow, the last applied door — Sadiya: speaking with the wind. The garden's harvest goes to the cloud."</div>



<div class="photo-frame"><img src="photos/esp32.jpg" alt="ESP32 দেভ-বোর্ড — প্রজেক্টের নির্বাচিত শহর"><div class="photo-cap">ESP32 দেভ-বোর্ড — প্রজেক্টের নির্বাচিত শহর · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — ডিবাগ-প্রোব-পরিবার ও টেস্ট-পয়েন্ট</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-hot" x="30" y="36" width="140" height="80"/>
  <text class="lbl-hot" x="100" y="60">ST-Link</text>
  <text class="lbl-sm" x="100" y="82" font-size="10">SWD: SWDIO+SWCLK</text>
  <text class="lbl-sm" x="100" y="100" font-size="10">+৩.৩V-সেন্স · GND</text>
  <rect class="cell" x="200" y="36" width="140" height="80"/>
  <text class="lbl" x="270" y="60">J-Link</text>
  <text class="lbl-sm" x="270" y="82" font-size="10">প্রো-শ্রেণি; JTAG+SWD</text>
  <text class="lbl-sm" x="270" y="100" font-size="10">গতি+ফ্ল্যাশ-বিস্তার</text>
  <rect class="cell-cyan" x="370" y="36" width="160" height="80"/>
  <text class="lbl-cyan" x="450" y="60">টেস্ট-পয়েন্ট-শিষ্টাচার</text>
  <text class="lbl-sm" x="450" y="82" font-size="10">GND-প্যাড · SWD-জোড়া</text>
  <text class="lbl-sm" x="450" y="100" font-size="10">UART-TX রিং-প্যাড</text>
  <rect class="cell" x="30" y="150" width="500" height="56"/>
  <text class="lbl-sm" x="280" y="172" font-size="10">বোর্ড-নকশায় ডিবাগ-দরজা রেখো: চার-প্যাড (৩.৩V·GND·SWDIO·SWCLK) কোণে — ফিল্ড-মেরামতের নাড়ি-পরীক্ষার জায়গা</text>
  <text class="lbl-sm" x="280" y="192" font-size="10">প্রোডাক্টে SWD-প্যাড থাকা মানে অসুস্থ-ডিভাইসও চোখের সামনে জীবিত-পরীক্ষা সম্ভব</text>
</svg>
<div class="diag-cap">ডাক্তারের যন্ত্রের মতো: প্রোব-জাত আছে, কিন্তু রোগীর শরীরে নাড়ির-জায়গাও থাকতে হয় — টেস্ট-পয়েন্ট-সহ নকশাই পেশাদার-বোর্ডের চিহ্ন।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — লিংকার-ম্যাপ পড়া: .text/.data/.bss-এর দেশান্তর</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="40" y="36" width="230" height="90"/>
  <text class="lbl" x="155" y="58">ফ্ল্যাশ-জমি (কোড-দেশ)</text>
  <rect class="cell-hot" x="55" y="70" width="200" height="14"/>
  <text class="lbl-sm" x="155" y="98" font-size="10">.text — নির্দেশাবলি (কম্পাইলের ফসল)</text>
  <rect class="cell-cyan" x="55" y="90" width="150" height="14"/>
  <text class="lbl-sm" x="155" y="118" font-size="10">.rodata — ধ্রুবক-স্ট্রিং</text>
  <rect class="cell" x="300" y="36" width="230" height="90"/>
  <text class="lbl" x="415" y="58">RAM-জমি (চলমান-দেশ)</text>
  <rect class="cell-hot" x="315" y="70" width="180" height="14"/>
  <text class="lbl-sm" x="415" y="98" font-size="10">.data — শুরু-মানসহ ভেরিয়েবল</text>
  <rect class="cell-cyan" x="315" y="90" width="140" height="14"/>
  <text class="lbl-sm" x="415" y="118" font-size="10">.bss — শূন্য-শুরু (বুটে মুছে)</text>
  <path class="edge" d="M 270 90 Q 285 90 300 84" fill="none" stroke-dasharray="4,4"/>
  <text class="lbl-sm" x="280" y="76" font-size="10">বুট-কপি</text>
  <rect class="cell" x="40" y="160" width="500" height="50"/>
  <text class="lbl-sm" x="290" y="182" font-size="10">avr-size চালাও: ফ্ল্যাশ=(text+data), RAM=(data+bss+স্ট্যাক)</text>
  <text class="lbl-sm" x="290" y="200" font-size="10">স্ট্যাক-হিসাব ভুলো না: ২KB-RAM-এ গভীর-রিকার্শন = নীরব-পতন (hardfault)</text>
</svg>
<div class="diag-cap">কোড কোথায় বাসে তার ভূগোল: নির্দেশ-ফসল ফ্ল্যাশে, চলমান-ভেরিয়েবল RAM-এ — আর .data দুই-বাড়ির ভাড়াটে (মান ফ্ল্যাশে, বসবাস RAM-এ, বুটে পাড়ি)।</div>
</div>

<div class="verse">
<div class="verse-arabic">وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ</div>
<div class="verse-translation">মানুষের মধ্যে ঘোষণা করো হজের — তারা আসবে পায়ে-হেঁটে ও সব ধরনের ক্ষীণকায় উষ্ট্রে, আসবে দূর-দূরান্তের পথ থেকে।</div>
<div class="verse-ref">— কুরআন ২২:২৭</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 14 — বুট-শৃঙ্খলা ও নাড়ি-পরীক্ষা:</strong> লিংকার-খাতা: .text/.data/.bss-এর ম্যাপ দেখলাম — ফ্ল্যাশ-দখল ৪২%, RAM ১৮% (স্ট্যাক-সতর্কতাসহ)। <strong>নিয়ম-স্থাপন:</strong> SWD-প্যাড বোর্ডে + প্রথম-বুট-লগ; watchdog-স্বাক্ষর যাচাই। ডিবাগ-প্রোব লাগিয়ে এক-ব্রেক-পয়েন্টে ওয়াক্ত-ফাংশনের ভেতরে ঢুকে দেখা — শহর-পতনের রহস্য নয়, এখন সব তদন্তযোগ্য।</div></div>
<div class="secret-box"><div class="label">দরজা ১৪ — রহস্য</div><div class="text">🕋 পাওয়ার-অন = পাঁচ মিকাত: ভেক্টর→স্ট্যাক→ডেটা→ঘড়ি→বুটলোডার→main; রাস্তার ফয়সালা শিডিউলারের, রোগের চোখ SWD/JTAG।<br><small>.data-কপি/.bss-শূন্য; বুটলোডার-শ্রবণ; FreeRTOS ২০০৩; অগ্রাধিকার+প্রিএম্পশন; ব্রেক-পয়েন্ট-জীবন। মিকাত: ২২:২৭।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>বুট-সিঁড়ি বিনা-নোটে বলা:</strong> পাঁচ স্তরের নাম-কাজ — আর্দুইনো-বোতামের পেছনের পূর্ণ নাটক এখন তোমার জানা।</li>
<li><strong>.data/.bss-বিভেদ:</strong> কেন .data-র শুরুর-মান ফ্ল্যাশে থাকে আর .bss শুধু শূন্য হয় — লিংকার-ম্যাপ পড়ার প্রথম চাবি।</li>
<li><strong>সিদ্ধান্ত-স্কেল মুখস্থ নয়, হাতে:</strong> নিজের পরের প্রজেক্টে টাস্ক-তালিকা লিখে ঠিক করো — bare-metal নাকি RTOS; যুক্তি লিখে রাখো।</li>
<li><strong>দুই শিকারির নাম:</strong> priority inversion (উল্টো-অগ্রাধিকার) আর deadlock (মরা-জড়ো) — RTOS-জীবনের প্রথম দুই শত্রু; সেমাফোর/মিউটেক্স কোথায় ঢাল।</li>
<li><strong>ডিবাগ-শিষ্টাচার:</strong> printf-অন্ধতা নয় — প্রোব-প্যাড-বোর্ডে-রাখা অভ্যাস আজই শুরু; GDB-সিঙ্গেল-স্টেপ একবার হলেও স্বাদ নাও।</li>
</ul>`
  }
});

// ── DOOR 15: বাতাসের সাথে কথা (WIRELESS, MQTT, OTA, SECURITY) ──
doors.push({
  num:15, icon:"📡", color:"#22d3ee", name:"বাতাসের সাথে কথা",
  subtitle:"Speaking with the Wind", tech:"WiFi (802.11-1997), BLE, LoRa/LoRaWAN (Cycleo→Semtech 2012), MQTT Pub-Sub (Stanford-Clark & Nipper 1999; OASIS 2014), OTA, TLS",
  spirit:"জামাত — ইমাম ও সারি; এক কেন্দ্রে সমবেত, এক সুরে দাঁড়ানো (৬১:৪-এর কাতার-চেতনা)",
  secret:"বাতাসে কথা মানে প্রজ্ঞাপন-দপ্তর: কেউ বিষয় প্রকাশ করে (publish), কেউ শোনে (subscribe) — ব্রোকার ডাক-বেষ্টনী; আর প্রতিটা পাখি যেন নিজের বাসা থেকেই নতুন পালক পায় (OTA)।",
  recall:{
    q:"MQTT-র প্রজ্ঞাপন-মডেল কেন সরাসরি-সংযোগের (HTTP রিকোয়েস্ট-রেসপন্স) চেয়ে IoT-এ জেতে — আর TLS ছাড়া খোলা WiFi-বার্তা মানে কী?",
    qen:"Why does MQTT's broker model beat direct HTTP for IoT — and what does an unencrypted WiFi message mean?",
    a:"কারণ তিনটা: (১) স্কেল ও মুক্তি — ডিভাইস আর সার্ভার পরস্পরকে চেনে না; সবাই শুধু ব্রোকারকে চেনে (হাজার ডিভাইস ↔ অনেক অ্যাপ, যোগ-বিয়োগ স্বাধীন); (২) হালকা — MQTT-হেডার মাত্র ২ বাইট হতে পারে, সংযোগ-স্থায়ী (TCP দীর্ঘ-সেশন), ঘুম-জাগার ছন্দে মানায়; HTTP-র প্রতি-বার হেডার-পাহাড় ব্যাটারি-শত্রু; (৩) প্রকৃতি — সেন্সর 'প্রকাশ' করে (publish: temperature/রুম১ = ২৮), যে-কেউ 'সাবস্ক্রাইব' করে ওই বিষয়ে (topic) — ডেটা উৎপাদক/ভোক্তা একে অন্যকে না জেনেই জামাতে দাঁড়ায়; QoS-স্তর (০/১/২) দিয়ে নিশ্চয়তা-মাত্রা বাছো। জন্মকথা: ১৯৯৯, অ্যান্ডি স্ট্যানফোর্ড-ক্লার্ক (IBM) ও আর্লেন নিপার — তেল-পাইপলাইনের স্যাটেলাইট-টেলিমেট্রির জন্য; OASIS-মান ২০১৪ (ISO/IEC ২০৯২২)। TLS ছাড়া খোলা-বার্তা মানে: যে-কেউ বাতাস শুনে পড়তে পারে (eavesdrop), নকল পাঠাতে পারে (spoof), কমান্ড-ছদ্মবেশে দরজা খুলতে পারে — তাই TLS (এনক্রিপশন-স্তর) + সার্টিফিকেট/কী-ভিত্তিক পরিচয়; ফার্মওয়্যার-সাইনিং ছাড়া OTA মানে হাতিয়ার হাতে দেওয়া — প্রতিটা আপডেট-প্যাকেজ স্বাক্ষরিত হবে, চিপ স্বাক্ষর যাচাই করে তারপরই বসাবে। বেতার-প্রজাতি-বাছাই: WiFi (৮০২.১১, ১৯৯৭-জন্ম) — বেশি-ব্যান্ডউইথ, বাড়ি-অফিস; BLE — কম-খরচ সংক্ষিপ্ত-বার্তা (সেন্সর-ট্যাগ); LoRa (সাইক্লিও→Semtech ২০১২; LoRaWAN-স্পেক ২০১৫) — কিলোমিটার-দূরত্ব, μA-ঘুম, বছর-ব্যাটারি — কৃষি-শহর-স্মার্ট-মিটারের রাজপথ।",
    aen:"MQTT wins by: broker decoupling (devices know only the broker), tiny headers over persistent TCP (battery-friendly), and topic-based pub/sub with QoS levels — born 1999 (Stanford-Clark & Nipper, oil-pipeline telemetry; OASIS 2014/ISO 20922). Without TLS, the wind can be read and forged; unsigned OTA hands over the keys. Radios: WiFi (1997) bandwidth, BLE short bursts, LoRa (Semtech 2012; LoRaWAN 2015) kilometer-range year-battery."
  },
  story:`
<p class="scene-setting">পঞ্চদশ দরজা। কারিগরখানার সবচেয়ে উঁচু তলা — সাদিয়া আপার নেটওয়ার্ক-কোণ: জানালার পাশে টেবিল, তাতে ESP32-বোর্ড ল্যান্টেনা-সহ, পাশে ছোট্ট লোরা-মডিউল, দেয়ালে ছাপা WiFi-চ্যানেল-চার্ট আর MQTT-টপিক-গাছের পোস্টার; ল্যাপটপের পাশে বাইরের সবুজ পাহাড়ের দিকে তাকানো একটা ছোট্ট অ্যান্টেনা-স্ট্যান্ড। সাদিয়া আপা — শেষ বিশের দিকে, চুল খোঁপা, গায়ে হালকা সালোয়ার-কামিজ আর কাঁধে ঝোলানো টুল-বেল্ট (নারী-ইঞ্জিনিয়ারদের মতোই সরঞ্জাম-প্রিয়), আর তাঁর সিগনেচার: কানে ঝুলের বদলে একটা ছোট্ট WiFi-ডাঙ্গল-পেন্ডেন্ট — পুরনো প্রজেক্টের প্রথম সফল মডিউলের স্মৃতি; সংযোগ পরীক্ষায় সফল হলে পেন্ডেন্টটা একবার ছোঁয়া তাঁর রীত। গন্ধ — তাজা বাতাস (জানালা খোলা), গরম সোল্ডার-আয়রনের আভাস, চা। শব্দ — ল্যাপটপে টার্মিনালের টিক-টিক লগ-লাইন, দূরে শহরের গুঞ্জন, মাঝে মাঝে বোর্ডের সংযোগ-এলইডির দ্বি-ঝলক।</p>
<p class="scene-setting en">The fifteenth door. The workshop's topmost floor — Sadiya's network corner: a table by the window with an antenna'd ESP32, a small LoRa module beside it, a printed WiFi channel-chart and an MQTT topic-tree poster on the wall; by the laptop, a small antenna-stand aimed at the green hills. Sadiya — late twenties, braided bun, salwar-kameez with a tool-belt slung shoulder-wise (tool-loving like any engineer), and her signature: instead of an earring, a tiny WiFi-dongle pendant — memory of her first project's first successful module; on every successful connection test she touches the pendant once. Fresh window air, a hint of hot solder, tea; terminal ticks of log lines, the city's hum below, now and then the board's two-blink connect-LED.</p>

<div class="dialogue">তুমি সিঁড়ি ভেঙে উঠলে সাদিয়া আপা ঠিক একটা পাবলিশ-লগ দেখে হাসছিলেন। "আরিফ ভাইয়ের মিকাত-সিঁড়ি দেখে এসেছ? শহর জাগানো শিখেছ?"
"জি — পাঁচ স্তরে main()।"
"তাহলে এবার শহরটা বাতাসে ভাসাও।" তিনি জানালার বাইরে আকাশের দিকে ইশারা করলেন। "আজ পর্যন্ত তোমার সব কাজ ছিল তারে-বাঁধা — এখন শিখবে রেডিও-জগৎ। কিন্তু আসল কথা রেডিও নয় — আসল কথা <em>সমাজ-গঠন</em>। বাতাসে কোটি ডিভাইস কথা বলে; কে কাকে বলবে, কে শুনবে, কার বার্তা ভরসাযোগ্য — এই তিন প্রশ্নের জবাবই আজকের দরজা। আর জবাবটা এক শব্দে: ব্রোকার।"</div>
<div class="dialogue en">You climbed the stairs as Sadiya smiled at a publish-log. "Seen Arif's miqat-ladder? Learned to wake the city?"
"Yes — five layers to main()."
"Then now, set the city afloat on the wind." She gestured at the sky beyond the window. "Until today all your work was wire-bound — now the radio world. But the real story isn't radio — it's <em>organizing society</em>. A million devices speak into the air; who speaks to whom, who listens, whose message is trustworthy — today's door answers these three. And the answer in one word: broker."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে (সাদিয়া আপার প্রথম ফিল্ড-কাণ্ড):</strong> তাঁর প্রথম স্মার্ট-বাড়ি-প্রজেক্ট — ঠিক ছিল, কিন্তু HTTP-র প্রতি-সেকেন্ড-রিকোয়েস্টে ব্যাটারি তিন দিনে শেষ; আরও বড় বিপদ — TLS ছাড়া বসিয়েছিলেন: প্রতিবেশীর ছেলে ফোন থেকে ওপেন-টপিকে মজা করে 'লাইট অন' পাঠাতো, বাড়ির বাতি নিজে-নিজে নাচতো! দুই শিক্ষা এক সাথে: <strong>হালকা-প্রোটোকল (MQTT) ব্যাটারির জন্য, এনক্রিপশন+পরিচয় (TLS/কী) সম্মানের জন্য — দুটোই ফিল্ডের বাধ্যতামূলক পোশাক।</strong></div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৯৯৯</div><div class="sc-label">MQTT-জন্ম — স্ট্যানফোর্ড-ক্লার্ক (IBM) ও নিপার; তেল-পাইপলাইন টেলিমেট্রি</div></div>
<div class="stat-card"><div class="sc-num">২-বাইট</div><div class="sc-label">MQTT-হেডারের ন্যূনতম রূপ — HTTP-হেডার-পাহাড়ের বিপরীতে</div></div>
<div class="stat-card"><div class="sc-num">কিমি</div><div class="sc-label">LoRa-পথ (Cycleo→Semtech ২০১২; LoRaWAN ২০১৫) — মাইল-জোড়া, বছর-ব্যাটারি</div></div>
<div class="stat-card"><div class="sc-num">TLS+সাইন</div><div class="sc-label">বাতাস-পোশাক: গোপনীয়তা+পরিচয়; OTA-প্যাকেজ স্বাক্ষরিত না হলে হাতিয়ার-হস্তান্তর</div></div>
</div>

<div class="diagram">
<div class="diag-title">জামাতের মানচিত্র — ব্রোকারকেন্দ্রিক প্রজ্ঞাপন-জগৎ</div>
<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
  <!-- broker center -->
  <rect class="cell-hot" x="215" y="105" width="130" height="50"/>
  <text class="lbl-hot" x="280" y="126">ব্রোকার</text>
  <text class="lbl-sm" x="280" y="144">ডাক-বেষ্টনীর কেন্দ্র</text>
  <!-- publishers left -->
  <rect class="cell-cyan" x="30" y="40" width="120" height="34"/>
  <text class="lbl-cyan" x="90" y="61">সেন্সর-ডিভাইস</text>
  <rect class="cell-cyan" x="30" y="105" width="120" height="34"/>
  <text class="lbl-cyan" x="90" y="126">আরেক সেন্সর</text>
  <rect class="cell-cyan" x="30" y="170" width="120" height="34"/>
  <text class="lbl-cyan" x="90" y="191">ফোন-অ্যাপ</text>
  <!-- subscribers right -->
  <rect class="cell" x="410" y="40" width="120" height="34"/>
  <text class="lbl-sm" x="470" y="61">ড্যাশবোর্ড</text>
  <rect class="cell" x="410" y="105" width="120" height="34"/>
  <text class="lbl-sm" x="470" y="126">এলার্ট-সার্ভিস</text>
  <rect class="cell" x="410" y="170" width="120" height="34"/>
  <text class="lbl-sm" x="470" y="191">ডেটাবেস-লেখক</text>
  <!-- wires -->
  <path class="edge" d="M 150 57 Q 185 57 215 115" fill="none"/>
  <path class="edge" d="M 150 122 L 215 128" fill="none"/>
  <path class="edge" d="M 150 187 Q 185 187 215 143" fill="none"/>
  <path class="edge-cyan" d="M 345 115 Q 380 57 410 57" fill="none"/>
  <path class="edge-cyan" d="M 345 128 L 410 122" fill="none"/>
  <path class="edge-cyan" d="M 345 143 Q 380 187 410 187" fill="none"/>
  <!-- topic labels -->
  <text class="lbl-sm" x="185" y="92" font-size="10">publish ▸ home/রুম১/তাপ</text>
  <text class="lbl-sm" x="380" y="222" font-size="10">subscribe ◂ home/রুম১/#</text>
  <!-- QoS + security strip -->
  <rect class="cell" x="60" y="232" width="440" height="26"/>
  <text class="lbl-sm" x="280" y="249">QoS ০/১/২ = নিশ্চয়তার তিন মাত্রা · TLS = বাতাস-পোশাক · স্বাক্ষরিত OTA = নিরাপদ নতুন পালক</text>
  <!-- OTA cloud -->
  <rect class="cell-cyan" x="215" y="20" width="130" height="26"/>
  <text class="lbl-cyan" x="280" y="37">মেঘ: OTA-সংস্করণ</text>
  <line class="edge-cyan" x1="280" y1="46" x2="280" y2="105" stroke-dasharray="3,4"/>
</svg>
<div class="diag-cap">কেউ প্রকাশ করে, কেউ শোনে, ব্রোকার মেলায় — ইমামকেন্দ্রিক কাতারের মতো: সবাই কেন্দ্র চেনে, পরস্পরকে নয়; বিষয়-নামই দাঁড়ানোর স্থান।</div>
</div>

<div class="code-block">বাতাস-নামাবলি — MQTT, OTA, security:

প্রকাশ-শ্রবণ (ESP32 + Arduino-লাইব্রেরি):
  #include &lt;WiFi.h&gt;
  #include &lt;PubSubClient.h&gt;
  WiFiClient net; PubSubClient mqtt(net);
  void setup() {
    WiFi.begin("SSID", "PASS");
    mqtt.setServer("broker.local", 1883);  // TLS হলে 8883
    mqtt.setCallback(onMsg);               // সাবস্ক্রাইব-বার্তার ডাক
    mqtt.connect("পাখি-০১");
    mqtt.subscribe("home/রুম১/কমান্ড/#");
  }
  void loop() { mqtt.loop();                 // সংযোগ-প্রাণ বাঁচিয়ে রাখো
    if (পাঠ-সময়) mqtt.publish("home/রুম১/তাপ", "28.4");
  }

টপিক-গাছের ব্যাকরণ:
  home/রুম১/তাপ        — নির্দিষ্ট এক পাঠ
  home/+/তাপ           — যেকোনো রুমের তাপ (+ = এক স্তর)
  home/#               — ঘরের সব (# = সব স্তর)
  কাতারের সারি-ভাষা যেন: রুম-নাম-বিষয়

QoS-ত্রয়ী (নিশ্চয়তার সিঁড়ি):
  ০ — একবার পাঠালাম, ভগ্নাংশ-হারানো মানি (সেন্সর-ধারা)
  ১ — অন্তত একবার পৌঁছাক (ACK-পুনরায়) — ডিফল্ট-বাস্তব
  ২ — ঠিক একবারই (চার-দফা হ্যান্ডশেক) — বিল/কমান্ড
  ব্যাটারি বনাম নিশ্চয়তা — স্তর বাছো, বাধ্য হয়ো না

OTA — নিজের বাসা থেকে নতুন পালক:
  সংস্করণ-চেক (মেঘে) → স্বাক্ষরিত প্যাকেজ নামাও →
  চিপে যাচাই (পাবলিক-কী) → দ্বৈত-ব্যাংকে (dual-bank) নতুন-সংস্করণ
  → রিবুট-নতুনে → সফল? চিহ্নিত; ব্যর্থ? পুরনো ব্যাংকে ফেরা
  (ESP32-এর দ্বৈত-পার্টিশন এ-রক্ষার জন্মগত রূপ)

নিরাপত্তার তিন-তালা:
  ১. TLS (৮৮৮৩): বাতাস-পোশাক — পড়া/ছেঁড়া রোধ
  ২. পরিচয়: সার্টিফিকেট/ইউজার-পাস/ক্লায়েন্ট-আইডি — ব্রোকার জানে কে
  ৩. অনুমতি-তালিকা: কে কোন টপিকে পাঠাতে/শুনতে পারবে
  + ফার্মওয়্যার-সাইনিং: স্বাক্ষর ছাড়া প্যাকেজ বসবেই না

বেতার-প্রজাতি-বাছাই (দূরত্ব×খরচ×গতি):
  WiFi (৮০২.১১-১৯৯৭): মেগাবিট, বাড়ির-বাতাস, mA-খিদার
  BLE: সংক্ষিপ্ত-বার্তা, ব্যাটারি-বন্ধু, ফোন-পাড়া
  LoRa/LoRaWAN (Semtech ২০১২ / স্পেক ২০১৫): কিমি-দূরত্ব,
    μA-ঘুম — কিন্তু বাইট-হিসেবে স্বল্প (মাঝে মাঝে ছোট চিঠি)</div>

<div class="dialogue">সাদিয়া আপা তোমাকে পুরো চেইন চালাতে দিলেন: ESP32 WiFi-তে যুক্ত → ব্রোকারে connect → তাপ-প্রকাশ → টার্মিনালে ড্যাশবোর্ড-সাবস্ক্রাইবারের সারিতে তোমার সংখ্যা ভেসে উঠলো; তারপর উল্টো দিক — ফোন থেকে 'কমান্ড' প্রকাশ, বোর্ডের LED সাড়া দিলো। দুই দিকেই বাতাস। সংযোগ-সফল হলে তিনি পেন্ডেন্ট ছুঁলেন — রীতি। "মনে আছে, আয়েশা খালা তোমাকে কামান-ঘোরানো শিখিয়েছিলেন (বই ৫৫-এর গল্প শুনেছ নিশ্চয়ই)? ব্রোকার তেমনি — ডিভাইস-কোটির কামান, এক কেন্দ্রে। কুরআন বলে — যারা কাতারবন্দি হয়ে সারি-সারি আল্লাহর রাস্তায় থাকে, তাদের উপমা সুনির্মিত প্রাচীর (৬১:৪)। আমার ব্রোকার-চিত্রে ওই প্রাচীর: প্রতিটা ডিভাইস নিজের সারিতে, কেন্দ্র একটাই, সুর একটাই। কেউ একা নাচলে জামাত ভাঙে — তাই ক্লায়েন্ট-আইডি দুইবার এলে ব্রোকার পুরনোটা ফেলে দেয়, শৃঙ্খলা রক্ষার জন্যই।"</div>
<div class="dialogue en">Sadiya let you run the whole chain: ESP32 onto WiFi → connect to broker → publish temperature → your number surfacing in the dashboard-subscriber's terminal row; then the reverse — a command published from the phone, the board's LED answering. Wind both ways. On the success she touched her pendant — the rite. "Remember Ayesha of the other book, teaching rudder-turns? The broker is that for a million devices — the keel at one center. The Quran says — those who rank themselves in rows for Allah's path are like a well-built wall (61:4). That wall is my broker-image: each device in its row, one center, one melody. If one dances alone the jamaat breaks — so when a client-id comes twice, the broker drops the old one; discipline preserved."</div>

<div class="dialogue">রাত নামতে সাদিয়া আপা অ্যান্টেনা-স্ট্যান্ডটা জানালার দিকে ঘুরিয়ে রাখলেন। "শেষ কথা — নিরাপত্তার। বাতাস সবার; তাই বাতাসে কথা মানেই জনতার সামনে কথা। TLS হলো গোপন-ভাষা, সার্টিফিকেট হলো পরিচয়পত্র, স্বাক্ষর হলো মোহর — তিনটা ছাড়া ইন্টারনেটে কথা বলা যায়, কিন্তু বিশ্বাসে বলা যায় না। তোমার ডিভাইস যদি একদিন কারও দরজা-তালা হয়, কারও ওষুধ-মিক্সার হয় — তাহলে 'মজা' দেখানো ছেলেটার গল্প মনে রেখো: দুর্বল তালা মানে তালাহীন। কাল শেষ দরজা — সবার ফেরা। মোস্তাফিজ চাচা ডেকেছেন; ষোলো দরজার হিসাব মিলবে এক বাগানে।"</div>
<div class="dialogue en">As night fell, Sadiya turned the antenna-stand toward the window. "Last word — on security. The wind belongs to all; speaking on the wind means speaking before the crowd. TLS is the secret tongue, the certificate the identity-card, the signature the seal — without the three, the internet can be spoken, but not trusted. If your device someday becomes someone's door-lock, someone's medicine-mixer — remember the boy who played with lights: a weak lock is no lock. Tomorrow, the last door — everyone returns. Mostafiz chacha has called; sixteen doors' account will reconcile in one garden."</div>



<div class="photo-frame"><img src="photos/multimeter.jpg" alt="মাল্টিমিটার — ফিল্ড-মেরামতের সঙ্গী"><div class="photo-cap">মাল্টিমিটার — ফিল্ড-মেরামতের সঙ্গী · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — অ্যান্টেনা-জ্যামিতি ও মডিউল-পরিবার</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="30" y="36" width="150" height="80"/>
  <text class="lbl" x="105" y="60">ESP32-WROOM</text>
  <text class="lbl-sm" x="105" y="82" font-size="10">WiFi+BT · PCB-অ্যান্টেনা</text>
  <text class="lbl-sm" x="105" y="100" font-size="10">সস্তা-সর্বজনীন</text>
  <rect class="cell-cyan" x="210" y="36" width="150" height="80"/>
  <text class="lbl-cyan" x="285" y="60">SX১২৭৬ (LoRa)</text>
  <text class="lbl-sm" x="285" y="82" font-size="10">সংবেদনশীল-রিসিভার</text>
  <text class="lbl-sm" x="285" y="100" font-size="10">−১৪৮dBm পর্যন্ত</text>
  <rect class="cell-hot" x="390" y="36" width="140" height="80"/>
  <text class="lbl-hot" x="460" y="60">nRF২৪L০১</text>
  <text class="lbl-sm" x="460" y="82" font-size="10">২.৪GHz SPI-রেডিও</text>
  <text class="lbl-sm" x="460" y="100" font-size="10">দ্রুত-সস্তা-সংক্ষিপ্ত</text>
  <line class="edge" x1="105" y1="116" x2="105" y2="150"/>
  <path class="edge" d="M 100 150 L 110 150 L 105 170 Z" fill="none"/>
  <text class="lbl-sm" x="105" y="192" font-size="10">λ/৪-মনোপোল ~৩.১cm @২.৪GHz</text>
  <text class="lbl-sm" x="105" y="210" font-size="10">তারের দৈর্ঘ্য = তরঙ্গের ভগ্নাংশ — জ্যামিতিই দক্ষতা</text>
  <rect class="cell" x="220" y="150" width="310" height="60"/>
  <text class="lbl-sm" x="375" y="172" font-size="10">ড্রপ-শিষ্টাচার: VCC-শেষ-এ কানেক্ট, অ্যান্টেনা-ছাড়া টিএক্স নিষেধ (PA-পোড়া)</text>
  <text class="lbl-sm" x="375" y="192" font-size="10">লোরা-ফিডার: RG৫৮/লিটজ — ক্ষয়-মিলিয়ে দৈর্ঘ্য ছোট রাখো</text>
</svg>
<div class="diag-cap">বাতাসের দরজার জ্যামিতি: অ্যান্টেনার দৈর্ঘ্য তরঙ্গদৈর্ঘ্যের ভগ্নাংশ-হলে সবচেয়ে দক্ষ — ২.৪GHz-এ ~৩সেমি; অ্যান্টেনা-ছাড়া পাঠানো চিপের অ্যামপ্লিফায়ার পোড়ানোর শাস্তি।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — MQTT-জীবনচক্র: জন্ম-থেকে-পুনর্জন্ম (LWT-সহ)</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-cyan" x="40" y="30" width="120" height="40"/>
  <text class="lbl-cyan" x="100" y="54" font-size="10">পাখি জাগলো</text>
  <rect class="cell" x="200" y="30" width="130" height="40"/>
  <text class="lbl-sm" x="265" y="54" font-size="10">CONNECT + LWT-ওয়াদা</text>
  <rect class="cell" x="380" y="30" width="150" height="40"/>
  <text class="lbl-sm" x="455" y="54" font-size="10">CONNACK — ব্রোকার রাজি</text>
  <line class="edge" x1="160" y1="50" x2="200" y2="50"/>
  <line class="edge" x1="330" y1="50" x2="380" y2="50"/>
  <rect class="cell" x="40" y="100" width="120" height="40"/>
  <text class="lbl-sm" x="100" y="124" font-size="10">PUBLISH তাপ</text>
  <rect class="cell" x="200" y="100" width="130" height="40"/>
  <text class="lbl-sm" x="265" y="124" font-size="10">keep-alive পিং</text>
  <rect class="cell-hot" x="380" y="100" width="150" height="40"/>
  <text class="lbl-hot" x="455" y="118" font-size="10">ডিভাইস মারা গেলে:</text>
  <text class="lbl-sm" x="455" y="134" font-size="10">ব্রোকার LWT প্রকাশ করে!</text>
  <line class="edge" x1="160" y1="120" x2="200" y2="120"/>
  <line class="edge" x1="330" y1="120" x2="380" y2="120"/>
  <rect class="cell" x="40" y="170" width="490" height="44"/>
  <text class="lbl-sm" x="285" y="188" font-size="10">LWT (Last Will): সংযোগের সময়ই বলে যাও — 'আমি নিঃশব্দে গেলে এ-খবর প্রকাশ কো'</text>
  <text class="lbl-sm" x="285" y="206" font-size="10">সুস্থ-ডিভাইস পিং দেয়, অসুস্থ-ডিভাইসের হয়ে ওয়াদা-বার্তা যায় — জামাতে কে জীবিত, সবাই জানে</text>
</svg>
<div class="diag-cap">সংযোগের নাটক: CONNECT→CONNACK→পাঠ-চক্র→keep-alive — আর মৃত্যু-চুক্তি LWT: নীরব-বিচ্ছিন্ন ডিভাইসের হয়ে ব্রোকারই শোক-সংবাদ পাঠায়; সন্দেহ নয়, ঘোষণা।</div>
</div>

<div class="verse">
<div class="verse-arabic">إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُم بُنيَانٌ مَّرْصُوصٌ</div>
<div class="verse-translation">নিশ্চয়ই আল্লাহ তাদের ভালোবাসেন যারা তাঁর পথে কাতারবন্দি হয়ে লড়ে — যেন তারা সুনির্মিত প্রাচীর।</div>
<div class="verse-ref">— কুরআন ৬১:৪</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 15 — বাতাস-জমায়েত — মেঘে প্রথম পাঠ:</strong> WiFi→ব্রোকার→টপিক farm/plot1/# — TLS-পোশাক, LWT-ওয়াদা, QoS-১। <strong>ফল:</strong> ফোনের ড্যাশবোর্ডে প্রথম বাঁক! দুই-দিকে প্রমাণ: পাঠ-গ্রাফ ওঠে, কমান্ড-LED সাড়া দেয়। OTA-প্রথম-সংস্করণ স্বাক্ষরসহ পাঠালাম — টেবিল থেকেই দ্বিতীয়-বিছানা আপডেট।</div></div>
<div class="secret-box"><div class="label">দরজা ১৫ — রহস্য</div><div class="text">📡 বাতাসে সমাজ = ব্রোকারকেন্দ্রিক জামাত: প্রকাশ-শ্রবণ বিষয়-সূত্রে, QoS-নিশ্চয়তায়, TLS-পোশাকে — আর OTA-পালক স্বাক্ষরিত না হলে বিষ।<br><small>MQTT ১৯৯৯/OASIS ২০১৪; ২-বাইট-হেডার; +/# বনী-চিহ্ন; WiFi/BLE/LoRa-বাছাই; কাতার-প্রাচীর: ৬১:৪।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>প্রজ্ঞাপন-বোধ:</strong> কেন ডিভাইস-সার্ভার পরস্পরকে চেনে না — ব্রোকার-মুক্তির স্কেল-যুক্তি ইন্টারভিউ-প্রশ্নে এক নিঃশ্বাসে বলো।</li>
<li><strong>টপিক-গাছ হাতে:</strong> নিজের বাড়ির নকশা করো — কোন সেন্সর কোন শাখায়, ড্যাশবোর্ড কোন +# শুনবে।</li>
<li><strong>QoS-সিদ্ধান্ত:</strong> তাপ-ধারা QoS০, কমান্ড QoS১, পেমেন্ট QoS২ — কেন, নিজের উদাহরণে।</li>
<li><strong>নিরাপত্তা-ত্রয়ী অভ্যাসে:</strong> TLS+পরিচয়+অনুমতি — আজ থেকে কোনো প্রজেক্ট 'ওয়ার্কিং দেখাও'-এর নামে খোলা-বাতাসে নয়।</li>
<li><strong>রেডিও-বাছাই-টেবিল:</strong> দূরত্ব×ব্যান্ডউইথ×ব্যাটারি — কৃষি-ক্ষেতের জন্য কোনটা, বাড়ির বাতির জন্য কোনটা, এখনই বলতে পারবে।</li>
</ul>`
  }
});

// ── DOOR 16: বজ্র থেকে মেঘে (CAPSTONE — THE FULL SYSTEM) ──
doors.push({
  num:16, icon:"🌾", color:"#22c55e", name:"বজ্র থেকে মেঘে",
  subtitle:"From Lightning to the Cloud", tech:"Capstone: Sensor→Divider→ADC→Firmware (interrupt+timer+duty)→I2C/SPI→WiFi→MQTT/TLS→Cloud→OTA — the whole sixteen-door chain in one system",
  spirit:"খিলাফত — আমানতের বহন; জমিন-আসমান যা বইতে পারেনি, মানুষ বহন করেছে (৩৩:৭২)",
  secret:"বজ্র দেখে যে যাত্রা — ভোল্টেজ-নদী, দুয়ারের দরওয়ান, কুন-এর চিঠি, বাতাসের জামাত — সব স্রোত মিলেছে এক মেঘে; এখন তুমি বহন করো: এই শহরের খিলাফত তোমার আমানত।",
  recall:{
    q:"ষোলো দরজার চেইন ধরে বলো — একটা কৃষি-সেন্সর ডিভাইস মাঠ থেকে তোমার ফোনের গ্রাফ পর্যন্ত কী কী স্তরে পাড়ি দেয়, কোন দরজা-জ্ঞান কোথায় লাগে?",
    qen:"Trace the sixteen-door chain — what layers does a farm-sensor cross from field to your phone's graph, and which door-knowledge works where?",
    a:"চেইন: (১) মাটি-আর্দ্রতা-সেন্সর = রোধ-পরিবর্তনশীল উপাদান → (২) ডিভাইডার (দরজা ৬: V=Vin·R₂/(R₁+R₂)) ভোল্টেজ বানায় → (৩) ADC (দরজা ১২) সংখ্যায় পড়ে → (৪) ফার্মওয়্যার: টাইমার (দরজা ১১) ওয়াক্ত-জাগরণ ঠিক করে, ঘুম-ডিউটি (দরজা ৪) ব্যাটারি বাঁচায়, বাটন/অ্যালার্ম-ডাক ইন্টারাপ্টে (দরজা ১০), রেজিস্টার-চিঠি (দরজা ৯) সব চালায়, বুট-মিকাত (দরজা ১৪) জাগায় → (৫) RTC (দরজা ১১/১৩) I2C-তে সময় দেয় → (৬) রেডিও (দরজা ১৫) WiFi/LoRa-বাছাই → (৭) MQTT-publish (দরজা ১৫) TLS-পোশাকে ব্রোকারে → (৮) মেঘ: ডেটাবেস+ড্যাশবোর্ড → ফোন সাবস্ক্রাইব → গ্রাফ → (৯) উল্টো দিক: কমান্ড/সেচ-ভালভ → PWM (দরজা ১২) মোটর-গতি → পানি মাঠে → (১০) OTA-স্বাক্ষরিত প্যাকেজ নতুন প্যাচ পাঠায় (দরজা ১৪-১৫)। হার্ডওয়্যার-ভিত্তি: ডিভাইডার-রেজিস্টর ও ডিকোউপলিং-ক্যাপ (দরজা ২) বোর্ডে, ট্রানজিস্টর-দরওয়ান (দরজা ৩) ভালভ-মোটর চালায়, পাওয়ার-বাজেট (দরজা ৪) বছরের হিসাব দেয়, নকশা-ভাষা (দরজা ৫) সব লেখা থাকে, ওহম-কার্শফ (দরজা ১-৬) প্রতিটা মান যাচাই করে, লজিক-গেট (দরজা ৭) ভেতরে-ভেতরে সব সিদ্ধান্ত বহন করে। ষোলো দরজা = এক সিস্টেমের ষোলো অঙ্গ — এটাই capstone-এর সার: কোনো দরজা একা যন্ত্র বানায় না; সব দরজা মিলে একটা জীবিত ডিভাইস।",
    aen:"Soil sensor (resistance) → divider (D6) → ADC (D12) → firmware: timer wakes (D11), duty-sleep saves battery (D4), interrupts respond (D10), register letters run all (D9), boot miqats (D14) → RTC over I2C (D13) → radio (D15) → MQTT/TLS → broker → cloud → phone graph → reverse command → PWM valve (D12) → water → signed OTA. Sixteen doors = one system's sixteen organs — no door alone builds a machine."
  },
  story:`
<p class="scene-setting">ষোলো দরজা — শেষ। আবার সেই প্রথম কারিগরখানার মেরামত-টেবিল, কিন্তু আজ সন্ধ্যা — মোস্তাফিজ চাচার টেবিলে নতুন জিনিস: একটা সম্পূর্ণ তৈরি ডিভাইস — ছোট্ট বক্স, তাতে সেন্সর-প্রোবের তার, সোলার-প্যানেলের পাত, অ্যান্টেনা; পাশে ল্যাপটপে জীবন্ত ড্যাশবোর্ড। আর ঘরটা আজ ভরা: দরজার কারিগররা সবাই এসেছেন — রফিক মামা (ড্রয়ার-খুঁজতে-না-লাগা), শামসুল কাকা (জিভের ফিতে-ছাড়া), নুরুল ভাই (খাতা-ঝুলি-সহ), তাহমিনা আপা (লাল পেন-সহ), ইকবাল সাহেব (প্লাগ-ঘোরানো), জাহেদ ভাই (কানে-তামা-ফাঁস), ফারহান ভাই (কবজি-কয়েল), শারমিন আপা (তিন-আংটি), মুয়াজ ভাই (তাসবিহ-সহ), রুবেল ভাই (কানে-পেন্সিল), হাসান সাহেব (সীল-সহ), আরিফ ভাই (লুপ-চেইন), সাদিয়া আপা (পেন্ডেন্ট-সহ) — চৌদ্দজন দাঁড়িয়ে, সবার চোখ টেবিলের বক্সটায়। গন্ধ — সন্ধ্যার চা, কারিগরখানার চিরচেনা টিন-রোজিন। শব্দ — জানালার বাইরে বৃষ্টি নামছে মৃদু, দূরে মিনারে মাগরিবের আযানের অপেক্ষা; ভেতরে সবার নিঃশ্বাস।</p>
<p class="scene-setting en">The sixteenth door — the last. The same first repair-bench, but evening now — and on Mostafiz's table a new thing: a finished device — a small box with a sensor-probe wire, a solar-panel leaf, an antenna; beside it a laptop with a live dashboard. And the room is full: the doors' craftsmen have all come — Rafiq, Shamsul, Nurul, Tahmina, Iqbal, Jahed, Farhan, Sharmin, Muaz, Rubel, Hasan, Arif, Sadiya — fourteen standing, all eyes on the box. Evening tea, the workshop's eternal tin-and-rosin; soft rain beginning outside, the minaret awaiting the maghrib call, and inside — everyone's breath.</p>

<div class="dialogue">মোস্তাফিজ চাচা মনোকল চোখে বক্সটা তুলে ধরলেন — তারপর খুলে দিলেন: ভেতরে তোমার চেনা সব মুখ। "আজ কোনো নতুন পাঠ নেই। আজ হিসাব-মেলানো।" তিনি তোমার দিকে তাকালেন। "বলো — এই বক্সটা কী?"
তুমি এক নিঃশ্বাসে শুরু করলে — কারণ এবার তুমি জানো: "মাটির আর্দ্রতা-সেন্সর — প্রোব মাটিতে, রোধ বদলায়; ডিভাইডার ভোল্টেজ বানায়; ADC সংখ্যায় পড়ে —" রফিক মামা হাসলেন — "— আর আমার ১০০nF প্রতি পাওয়ার-পায়ে, নইলে রেডিও-জাগরণেই রিসেট!" তুমি হাসলে, মাথা নাড়লে: "— টাইমার প্রতি পনেরো মিনিটে জাগায়, বাকি সময় ঘুম — ডিউটি-চক্রে বছরের ব্যাটারি; বৃষ্টি-সেন্সরের ডাক এলে ইন্টারাপ্ট — পতাকা তুলে লুপে কাজ; I2C-তে RTC থেকে টাইমস্ট্যাম্প — ACK-সহ চিঠি; তারপর বাতাসে — MQTT, TLS-পোশাকে, ব্রোকারে প্রকাশ; মেঘে ডেটাবেস, ফোনে গ্রাফ — আর উল্টো দিকে কমান্ড এলে PWM ভালভ-মোটরে মাপা-গতি দেয়, পানি যায় মাঠে। OTA এলে স্বাক্ষর যাচাই হয়, তারপরই নতুন প্যাচ।" ঘর নীরব। মোস্তাফিজ চাচা মনোকল খুললেন। "হিসাব মিলেছে।"</div>
<div class="dialogue en">Mostafiz raised the box monocled — then opened it: inside, every face you knew. "No new lesson today. Today — reconciliation." He looked at you. "Tell me — what is this box?"
You began in one breath — because now you know: "A soil-moisture sensor — the probe in the soil, resistance changing; a divider makes voltage; the ADC reads a number —" Rafiq laughed — "— and my 100nF on every power pin, else the radio-wake resets it!" You laughed, nodded: "— the timer wakes it every fifteen minutes, sleeping the rest — duty-cycle buys a year of battery; a rain-sensor's call interrupts — flag raised, work in the loop; I2C fetches the timestamp from the RTC — letters with ACKs; then into the wind — MQTT in TLS dress, published to the broker; the cloud keeps the database, the phone draws the graph — and a command backwards sets PWM's measured speed on the valve-motor, water to the field. When OTA comes, the signature is verified — only then the patch." Silence. Mostafiz removed the monocle. "The accounts reconcile."</div>

<div class="callout info"><span class="co-icon">🌾</span><div><strong>ক্যাপস্টোনের সত্য:</strong> এই বক্সে নতুন কোনো দরজার জ্ঞান নেই — ষোলোটা দরজার জ্ঞান <em>একসাথে</em> আছে। ইঞ্জিনিয়ারিং মানে নতুন-কিছু-আবিষ্কার প্রতিদিন নয়; ইঞ্জিনিয়ারিং মানে চেনা ইটগুলো সঠিক ক্রমে, সঠিক মাপে, সঠিক সময়ে বসানো — যেন প্রতিটা ইট তার স্থান পায় এবং প্রতিটা স্থান তার ইট। তোমার পরের প্রজেক্টে ধারণা-তালিকা নয় — <strong>দরজা-তালিকা</strong> মাথায় রাখো: পাওয়ার? বাজেট? ডিভাইডার? ডাক? ওয়াক্ত? বাতাস? পোশাক? — প্রতিটা প্রশ্নের জবাব একটা দরজা, আর সব জবাব মিললেই ডিভাইস বাঁচে।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৬</div><div class="sc-label">দরজা = ১৬ অঙ্গ — সেন্সর থেকে OTA, এক জীবিত সিস্টেম</div></div>
<div class="stat-card"><div class="sc-num">১৪</div><div class="sc-label">কারিগর = তোমার শিক্ষক-চেইন — এক কারিগরখানার প্রজন্ম</div></div>
<div class="stat-card"><div class="sc-num">১৬০০XP</div><div class="sc-label">তোমার যাত্রা — বজ্র দেখা থেকে মেঘ বানানো</div></div>
<div class="stat-card"><div class="sc-num">১</div><div class="sc-label">পরবর্তী বক্স — তোমার নিজের; দরজাগুলো এখন তোমার হাতে</div></div>
</div>

<div class="diagram">
<div class="diag-title">পূর্ণ চেইনের মানচিত্র — মাঠ থেকে মেঘ, মেঘ থেকে মাঠ</div>
<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
  <!-- field left -->
  <rect class="cell-hot" x="20" y="40" width="100" height="36"/>
  <text class="lbl-hot" x="70" y="62">মাঠ · প্রোব</text>
  <text class="lbl-sm" x="70" y="92" font-size="10">আর্দ্রতা→রোধ</text>
  <!-- divider -->
  <rect class="cell" x="140" y="40" width="90" height="36"/>
  <text class="lbl-sm" x="185" y="62">ডিভাইডার</text>
  <text class="lbl-sm" x="185" y="92" font-size="10">V∝R (দরজা ৬)</text>
  <!-- MCU -->
  <rect class="cell-cyan" x="250" y="30" width="120" height="56"/>
  <text class="lbl-cyan" x="310" y="52">MCU শহর</text>
  <text class="lbl-sm" x="310" y="70" font-size="10">ADC·টাইমার·ডাক·ঘুম</text>
  <!-- RTC -->
  <rect class="cell" x="250" y="110" width="120" height="30"/>
  <text class="lbl-sm" x="310" y="129">RTC · I2C (ACK)</text>
  <!-- radio -->
  <rect class="cell" x="400" y="40" width="90" height="36"/>
  <text class="lbl-sm" x="445" y="62">রেডিও</text>
  <text class="lbl-sm" x="445" y="92" font-size="10">WiFi/LoRa</text>
  <!-- broker/cloud -->
  <rect class="cell-hot" x="400" y="120" width="140" height="44"/>
  <text class="lbl-hot" x="470" y="138">ব্রোকার · মেঘ</text>
  <text class="lbl-sm" x="470" y="156" font-size="10">MQTT/TLS · OTA</text>
  <!-- phone -->
  <rect class="cell" x="400" y="200" width="140" height="36"/>
  <text class="lbl-sm" x="470" y="222">ফোন · ড্যাশবোর্ড</text>
  <!-- valve -->
  <rect class="cell" x="140" y="200" width="110" height="36"/>
  <text class="lbl-sm" x="195" y="222">ভালভ-মোটর · PWM</text>
  <!-- water back to field -->
  <rect class="cell-hot" x="20" y="200" width="90" height="36"/>
  <text class="lbl-hot" x="65" y="222">পানি → মাঠ</text>
  <!-- arrows forward -->
  <line class="edge" x1="120" y1="58" x2="140" y2="58"/>
  <line class="edge" x1="230" y1="58" x2="250" y2="58"/>
  <line class="edge" x1="370" y1="58" x2="400" y2="58"/>
  <line class="edge" x1="445" y1="76" x2="470" y2="120"/>
  <line class="edge" x1="470" y1="164" x2="470" y2="200"/>
  <line class="edge" x1="310" y1="86" x2="310" y2="110"/>
  <!-- arrows backward -->
  <path class="edge-cyan" d="M 470 200 Q 470 260 195 240" fill="none" stroke-dasharray="4,4"/>
  <line class="edge-cyan" x1="195" y1="200" x2="195" y2="184" visibility="hidden"/>
  <path class="edge-cyan" d="M 140 218 Q 120 218 110 218" fill="none"/>
  <text class="lbl-cyan" x="330" y="252" font-size="10">উল্টো দিক: কমান্ড → PWM-ভালভ → পানি (মাপা-শক্তির ফেরত-যাত্রা)</text>
  <!-- door numbers strip -->
  <text class="lbl-sm" x="185" y="120" font-size="10">দরজা ৬·১২</text>
  <text class="lbl-sm" x="310" y="170" font-size="10">দরজা ৯·১০·১১·৪·১৪</text>
  <text class="lbl-sm" x="445" y="110" font-size="10">দরজা ১৩·১৫</text>
</svg>
<div class="diag-cap">সম্পূর্ণ বৃত্ত: মাঠের আর্দ্রতা → ডিভাইডার-ভোল্টেজ → ADC-সংখ্যা → শহরের কুন-আযান-ওয়াক্ত → বাতাসের জামাত → মেঘ → তোমার হাতের গ্রাফ — আর ফেরত: কমান্ড → PWM → পানি → মাঠ। ষোলো দরজা, এক বৃত্ত।</div>
</div>

<div class="code-block">ক্যাপস্টোন-কঙ্কাল — পূর্ণ ডিভাইসের মূল ফাইল (সংক্ষিপ্ত রূপ):

// ═══ মাঠ-পাখি: আর্দ্রতা → মেঘ (প্রতি ১৫ মিনিট) ═══
#include &lt;WiFi.h&gt;
#include &lt;PubSubClient.h&gt;
#include &lt;Wire.h&gt;

#define SOIL_PIN   A0        // ডিভাইডার-মাঝ (দরজা ৬)
#define VALVE_PIN  9         // PWM (দরজা ১২)
volatile bool rain_alarm = false;      // দরজা ১০: পতাকা

void onRain() { rain_alarm = true; }   // ISR — ছোট, নিখুঁত

void publishReading(PubSubClient &amp;m) {
  int raw = analogRead(SOIL_PIN);                    // ADC
  float v  = raw * 3.3 / 1023.0;                     // সংখ্যা→ভোল্টেজ
  int pct  = map(raw, 1023, 300, 0, 100);            // মাটি-শতকরা
  char payload[64];
  snprintf(payload, sizeof payload,
           "{\"v\":%.2f,\"pct\":%d,\"ts\":%lu}",
           v, pct, rtcNow());                        // RTC-টাইমস্ট্যাম্প
  m.publish("farm/plot1/soil", payload);             // দরজা ১৫
}

void valve(int duty) {                 // ০…২৫৫ — ইনফাক-মাপ
  analogWrite(VALVE_PIN, duty);
}

void setup() {
  bootInit();                          // দরজা ১৪: মিকাত-সারি
  Wire.begin();
  rtcInit();                           // DS3231 @০x68 (দরজা ১১·১৩)
  WiFi.begin(SSID, PASS);
  mqttConnectTLS();                    // ৮৮৮৩ — পোশাক (দরজা ১৫)
  attachInterrupt(digitalPinToInterrupt(2),
                  onRain, FALLING);    // দরজা ১০
  otaSetupSigned();                    // স্বাক্ষর-যাচাই OTA
}

void loop() {
  mqtt.loop();
  if (rain_alarm) {                    // ডাক-প্রতিক্রিয়া
    publishReading(mqtt);              // তাৎক্ষণিক পাঠ
    rain_alarm = false;
  }
  if (timeForReading()) {              // টাইমার-ওয়াক্ত (দরজা ১১)
    publishReading(mqtt);
    int pct = soilPercent();
    valve(pct &lt; 35 ? 200 :             // শুকনো → বেশি-দান
          pct &lt; 50 ? 100 : 0);         // মাঝামাঝি/ঠিক (দরজা ১২)
  }
  deepSleepTilNext();                  // ঘুম (দরজা ৪) — বছরের হিসাব
}

// ডিপ্লয়-তালিকা (তোমার প্রথম বক্স):
// ☐ নকশা-কাগজ (দরজা ৫) ☐ পাওয়ার-বাজেট (৪)
// ☐ ডিভাইডার-মান (৬) ☐ ১০০nF-প্রতি-পা (২)
// ☐ ট্রানজিস্টর-ভালভ-দরওয়ান (৩) ☐ পাল্লা-পরীক্ষা (১)
// ☐ ব্রোকার+টপিক-গাছ (১৫) ☐ TLS-কী (১৫)
// ☐ OTA-স্বাক্ষর (১৪) ☐ ডিবাগ-প্যাড-বোর্ডে (১৪)</div>

<div class="dialogue">মাগরিবের আযান উঠলো — মুয়াজ ভাই সবার আগে দাঁড়ালেন, সবাই দাঁড়ালেন; নামাজের পর ফিরে এসে মোস্তাফিজ চাচা বক্সটা তোমার হাতে তুলে দিলেন। "ষোলো দরজা আগে আমার ছিল, এখন তোমার। কুরআনের সেই আয়াত মনে আছে যেটা দিয়ে আমরা শুরু করেছিলাম — বিদ্যুৎ-চমকে ভয় ও আশা (৩০:২৪)? আর শেষ আয়াতটা এখন শোনো: 'আমি আমানত পেশ করেছিলাম আসমান-জমিন-পাহাড়ের সামনে; তারা তা বহন করতে ভয় পেল, কিন্তু মানুষ বহন করলো' (৩৩:৭২)। ভাবো একবার — আসমান বজ্র ধরে রাখে, জমিন ফসল, পাহাড় খনিজ; কিন্তু <em>আমানত</em> — দায়িত্ব, বিশ্বাস, ন্যায় — সেটা তারা নিতে সাহস করেনি। মানুষ করেছে। যে যন্ত্র তুমি বানাবে, সে-ও আমানত: কারও পানির হিসাব, কারও ওষুধের সময়, কারও ঘরের তালা। ভোল্টেজ আর কোড শেখা অর্ধেক কাজ; বাকি অর্ধেক — সেই খিলাফত: যা বহন করলে, বিশ্বস্তভাবে বহন করা। এই বক্স নাও। পরের বক্সটা তোমার নিজের হোক — আর তার নকশা-কাগজে তোমার নামের পাশে লেখো: আমানতদার।" বাইরে বৃষ্টি জমে এসেছে; বক্সের সেন্সর-প্রোব রফিক মামার হাতে একটা ফুলের টবে ঢুকিয়ে দেওয়া হলো — ড্যাশবোর্ডে প্রথম বাঁক উঠলো: ৬২%। ষোলো দরজা হাসলো একসাথে।</div>
<div class="dialogue en">The maghrib adhan rose — Muaz stood first, all stood; returning after prayer, Mostafiz placed the box in your hands. "Sixteen doors were mine; now yours. The verse we began with — lightning, fear and hope (30:24)? Now hear the last: 'We offered the trust to the heavens, the earth, the mountains; they shrank from it — but man bore it' (33:72). Think once — the sky holds lightning, the earth grain, the mountain ore; but the <em>trust</em> — duty, faith, justice — those they dared not take. Man did. The machine you will build is a trust too: someone's water-account, someone's medicine-hour, someone's door-lock. Learning voltage and code is half the work; the other half is that khilafah — if you carry it, carry it faithfully. Take this box. Let the next be your own — and on its schematic, beside your name, write: trustworthy." Rain had gathered outside; Rafiq slipped the sensor-probe into a flower pot — the dashboard's first curve rose: 62%. Sixteen doors smiled together.</div>



<div class="photo-frame"><img src="photos/breadboard.jpg" alt="ব্রেডবোর্ড — যেখানে পুরো প্রজেক্ট প্রথম হাঁটা শিখলো"><div class="photo-cap">ব্রেডবোর্ড — যেখানে পুরো প্রজেক্ট প্রথম হাঁটা শিখলো · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — BOM: পূর্ণ বক্সের বাজার-তালিকা</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="30" y="30" width="500" height="200"/>
  <text class="lbl" x="280" y="54">মাঠ-পাখির BOM (বিল অব ম্যাটেরিয়ালস)</text>
  <text class="lbl-sm" x="60" y="80" font-size="10" style="text-anchor:start">ESP32-WROOM ×১ — শহর+রেডিও</text>
  <text class="lbl-sm" x="60" y="100" font-size="10" style="text-anchor:start">CAPE-soil প্রোব ×১ + ১০kΩ ×২ — ডিভাইডার</text>
  <text class="lbl-sm" x="60" y="120" font-size="10" style="text-anchor:start">DS৩২৩১ ×১ — ওয়াক্ত-খাতা (I2C)</text>
  <text class="lbl-sm" x="60" y="140" font-size="10" style="text-anchor:start">MOSFET IRLZ৪৪N + ডায়োড + ভালভ ×১ — পানির দরজা</text>
  <text class="lbl-sm" x="60" y="160" font-size="10" style="text-anchor:start">সোলার ৬V + TP৪০৫৬ + ১৮৬৫০ + বাক — রিযিক-চেইন</text>
  <text class="lbl-sm" x="60" y="180" font-size="10" style="text-anchor:start">১০০nF ×৪ + ১০μF ×২ — দরজা-২-এর শান্ত-করা</text>
  <text class="lbl-sm" x="60" y="200" font-size="10" style="text-anchor:start">কেস + কনফর্মাল-কোটিং — বৃষ্টি-বাঁচাও</text>
  <rect class="cell-hot" x="330" y="70" width="180" height="140"/>
  <text class="lbl-hot" x="420" y="94">BOM-শিষ্টাচার</text>
  <text class="lbl-sm" x="420" y="118" font-size="10">প্রতিটা লাইনে: মান+টলারেন্স</text>
  <text class="lbl-sm" x="420" y="138" font-size="10">বিকল্প-পার্ট-নম্বর লেখো</text>
  <text class="lbl-sm" x="420" y="158" font-size="10">খরচ-কলাম — বাজেটের খাতা</text>
  <text class="lbl-sm" x="420" y="178" font-size="10">যেখানে পাবে (পাটুয়াটুলি!) নোট</text>
  <text class="lbl-sm" x="420" y="198" font-size="10">— নকশা তখনই বাস্তব</text>
</svg>
<div class="diag-cap">যন্ত্র বানানোর শেষ-পরীক্ষা কাগজের: BOM — কী লাগবে, কতটা সহনে, কোথায় পাবে, কত দাম; এই তালিকা ছাড়া নকশা ছবি মাত্র, তালিকাসহ প্রজেক্ট।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — ডিভাইস-জীবনচক্র: ডেস্ক থেকে মাঠ, মাঠ থেকে সংস্করণ-২</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-cyan" x="30" y="36" width="110" height="60"/>
  <text class="lbl-cyan" x="85" y="60" font-size="10">ডেস্ক-পরীক্ষা</text>
  <text class="lbl-sm" x="85" y="80" font-size="10">ব্রেডবোর্ড+প্রোব</text>
  <rect class="cell" x="170" y="36" width="110" height="60"/>
  <text class="lbl-sm" x="225" y="60" font-size="10">বক্স-বন্দি</text>
  <text class="lbl-sm" x="225" y="80" font-size="10">IP৬৫ কেস</text>
  <rect class="cell-hot" x="310" y="36" width="110" height="60"/>
  <text class="lbl-hot" x="365" y="60" font-size="10">মাঠে ৭-দিন</text>
  <text class="lbl-sm" x="365" y="80" font-size="10">বৃষ্টি-তাপ-শব্দ</text>
  <rect class="cell" x="450" y="36" width="100" height="60"/>
  <text class="lbl-sm" x="500" y="60" font-size="10">লগ-ময়না</text>
  <text class="lbl-sm" x="500" y="80" font-size="10">SWD-চোখ</text>
  <line class="edge" x1="140" y1="66" x2="170" y2="66"/>
  <line class="edge" x1="280" y1="66" x2="310" y2="66"/>
  <line class="edge" x1="420" y1="66" x2="450" y2="66"/>
  <path class="edge-cyan" d="M 500 96 Q 500 150 265 150 Q 85 150 85 96" fill="none" stroke-dasharray="5,4"/>
  <text class="lbl-cyan" x="265" y="172" font-size="10">শিক্ষা → OTA-সংস্করণ-২ (স্বাক্ষরিত) → আবার মাঠ</text>
  <rect class="cell" x="60" y="190" width="440" height="34"/>
  <text class="lbl-sm" x="280" y="210" font-size="10">প্রজেক্ট কখনো এক-দফায় শেষ নয়: পরীক্ষা→মোড়ানো→পরিবেশ→ময়না→সংশোধন — এই বৃত্তই ইঞ্জিনিয়ারিং-জীবন</text>
</svg>
<div class="diag-cap">আসল-জগতের বৃত্ত: টেবিলের সাফল্য মাঠের গ্যারান্টি নয় — বৃষ্টি-পরীক্ষা, লগ-ময়না, OTA-সংশোধনের ফিরে-যাওয়া; প্রতিটা ফসল পরের বীজ।</div>
</div>

<div class="verse">
<div class="verse-arabic">إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ وَالْجِبَالِ فَأَبَيْنَ أَن يَحْمِلْنَهَا وَأَشْفَقْنَ مِنْهَا وَحَمَلَهَا الْإِنسَانُ</div>
<div class="verse-translation">আমি আমানত পেশ করেছিলাম আসমান, জমিন ও পাহাড়ের সামনে; তারা তা বহন করতে অস্বীকার করলো ও ভয় পেল — কিন্তু মানুষ তা বহন করলো।</div>
<div class="verse-ref">— কুরআন ৩৩:৭২</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 16 — ফসল-মেলা — সম্পূর্ণ সার্কিটের চূড়ান্ত নকশা:</strong> সব স্তর এক কাগজে: রিযিক-চেইন (সোলার→TP4056→১৮৬৫০→MCP1700) + মাপা-শহর (ESP32+DS3231+LDR+মাটি-প্রোব) + কাজের-হাত (MOSFET+ভালভ) + ডাক-বেষ্টনী (বৃষ্টি-INT) + বাতাস-জামাত (WiFi/MQTT/TLS) + জীবন-চক্র (BOM+কেস+OTA)। <strong>এবং রেসিপি:</strong> যেকোনো নতুন সার্কিট = প্রয়োজন-খাতা → ব্লক-চিত্র → প্রতি-ব্লকে দরজা-প্রশ্ন → কেনা-লগ → ব্রেডবোর্ড-প্রমাণ → নকশা-কাগজ → পরীক্ষা-খাতা → মোড়ানো → মাঠ — এই নয়-ধাপই তোমার যেকোনো-সার্কিটের পথ।</div></div>
<div class="secret-box"><div class="label">দরজা ১৬ — রহস্য (কারিগরখানার সম্পূর্ণ ফসল)</div><div class="text">🌾 বজ্র থেকে মেঘ: সেন্সর→ডিভাইডার→ADC→কুন-আযান-ওয়াক্ত→I2C-চিঠি→বাতাস-জামাত→মেঘ→OTA — ষোলো দরজা এক বৃত্ত; এখন বৃত্তের খিলাফত তোমার আমানত।<br><small>ক্যাপস্টোন = সব-দরজা-একসাথে; ইঞ্জিনিয়ারিং = চেনা ইটের সঠিক বিন্যাস; পরের বক্স তোমার — নামের পাশে: আমানতদার। ৩০:২৪ → ৩৩:৭২।</small></div></div>`,
  senior:{
    title:"শেষ পাঠ — যা নিয়ে যাবে, যা রেখে যাবে",
    body:`<ul class="checklist">
<li><strong>চেইন-দখল:</strong> যেকোনো IoT-ডিভাইস দেখলে মনে মানচিত্র খুলবে — সেন্সর/পাওয়ার/ডিভাইডার/ADC/টাইমিং/বাস/রেডিও/নিরাপত্তা — কোন দরজা কোথায়; এই দৃষ্টিই আর্কিটেক্টের প্রথম চিহ্ন।</li>
<li><strong>নিজের বক্স:</strong> এই কঙ্কাল-কোড থেকে একটা আসল ডিভাইস বানাও — ছোট হোক, কিন্তু পূর্ণ-চেইন (টবের আর্দ্রতা-পাখিই যথেষ্ট); ডিপ্লয়-তালিকা মেলাও।</li>
<li><strong>আরও গভীরের দরজা:</strong> রেফারেন্স-ম্যানুয়াল পড়া, RTOS-প্রজেক্ট, নিজস্ব PCB-ডিজাইন (KiCad), ডিজিটাল-সিগন্যাল-প্রসেসিং — প্রতিটার জন্য এই ১৬ দরজাই ভিত্তি।</li>
<li><strong>সহায়ক বই:</strong> B42 (কম্পিউটার-আর্কিটেকচার — শহরের গভীরতর স্তর), B43 (ক্লাউড/DevOps — মেঘের ওপারে), B13 (নিরাপত্তা — তালার শাস্ত্র), B38 (OS — শিডিউলারের পূর্ণ গল্প)।</li>
<li><strong>আমানতের শিক্ষা:</strong> ৩৩:৭২ — প্রতিটা ডিভাইস কারও কল্যাণের হাতে; নকশার প্রতিটা সিদ্ধান্তে প্রশ্ন রাখো: এ-তালা কি বিশ্বাসযোগ্য হাতেই খুলবে? খিলাফত মানে এই প্রশ্ন প্রতিদিন।</li>
</ul>`
  }
});
