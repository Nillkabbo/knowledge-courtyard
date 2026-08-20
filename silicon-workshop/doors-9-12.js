// ═══ DOORS 9-12 (stub) ═══

// ── DOOR 9: কুন — প্রথম ঝলক (FIRST FIRMWARE: REGISTER-LEVEL C) ──
doors.push({
  num:9, icon:"✨", color:"#fde047", name:"কুন — প্রথম ঝলক",
  subtitle:"Be! — The First Flash", tech:"Firmware Toolchain, Register Writing (DDR/PORT), Arduino vs Bare-Metal C, datasheet Reading",
  spirit:"কুন ফায়াকুন — 'হও!' বললে তা-ই হয়; নির্দেশে অমিল নেই (৩৬:৮২)",
  secret:"LED জ্বলে জাদু দিয়ে নয় — দরবারের ঠিকানায় ঠিক বিটটা লেখায়: DDR ঠিক করে 'তুমি আউটপুট', PORT লেখে 'এখন জ্বলো'।",
  recall:{
    q:"Arduino-র digitalWrite(13, HIGH) আর bare-metal-এর PORTB |= (1<<5) — মাঝে কী ঘটে, আর LED-ব্লিংকের ন্যূনতম দুই-চিঠি কীসের?",
    qen:"Between Arduino's digitalWrite and bare-metal PORTB |= (1<<5) — what happens, and what are the minimum two letters of an LED blink?",
    a:"digitalWrite হলো আর্দুইনোর অনুবাদ-স্তর: পিন-নম্বর থেকে চিপের পোর্ট/বিট বের করে, রেজিস্টার-অ্যাড্রেস বসিয়ে, নিরাপত্তা-যাচাই করে একই কাজ করে — সুবিধে সহজ, দাম ধীরতা+ওজন। Bare-metal মানে সরাসরি দরবারে চিঠি: AVR-এ (দরজা ৮-এর ঠিকানা-ব্যবস্থা) দুই রেজিস্টার লাগে — DDRB (ডেটা-ডাইরেকশন-রেজিস্টার B): বিট লিখে পিনকে আউটপুট ঘোষণা, তারপর PORTB: বিট লিখে HIGH দেওয়া। LED-ব্লিংকের ন্যূনতম রূপ: DDRB |= (1<<5); তারপর লুপে PORTB ^= (1<<5) (XOR-টগল) + দেরি। (1<<5) মানে '১ কে বামে ৫ ঘর' = 0b00100000 = PB5 পিনের বিট-মাস্ক — Arduino-Uno-তে LED ঠিক ওই পিনেই। কাজের নিয়ম: ডেটাশিট খোলো (পোর্ট-বি অধ্যায়) → রেজিস্টার-নাম ও বিট-মান পড়ো → মাস্ক লিখো → কম্পাইল→ফ্ল্যাশ→টেস্ট। টুলচেইন: avr-gcc কম্পাইল করে, avrdude ফ্ল্যাশে লেখে (অথবা আর্দুইনো-IDE সব লুকিয়ে করে); ফ্ল্যাশ-লেখা মানে কাগজাঘরে নতুন সংবিধান-বসানো — রিসেটেই চালু হয়।",
    aen:"digitalWrite is Arduino's translation layer (pin→port/bit→register, with checks — convenient, slower). Bare-metal writes the court directly: DDRB |= (1<<5) declares output; PORTB ^= (1<<5) toggles the LED. (1<<5) is the bit-mask for PB5 — Uno's LED pin. Toolchain: avr-gcc compiles, avrdude flashes; flashing = installing a new constitution in Flash."
  },
  story:`
<p class="scene-setting">নবম দরজা। কারিগরখানার নতুন আসর-ঘর — শারমিন আপার ফার্মওয়্যার-টেবিল: ল্যাপটপে খোলা কোড-এডিটরের সবুজ-কালো জানালা, পাশে USB-তে যুক্ত আর্দুইনো-বোর্ড, দেয়ালে ছাপা এক-পাতার 'AVR পোর্ট-ম্যাপ'। শারমিন আপা — শেষ বিশের দিকে, মাথায় খোঁপা, গায়ে ডেনিম-শার্টের হাতা গোটানো, আর তাঁর সিগনেচার: ডান হাতের তিন আঙুলে তিনটা আংটি — বড়মা-মা-নিজের; 'অ্যাসাইনমেন্ট শেষ করার আগে আংটি ঘোরাই না' — বলে কোড-লেখার আগে সবসময় একবার ঘোরিয়ে নেন, তারপর টাইপ শুরু। গন্ধ — নতুন ইলেকট্রনিক্স, চা, কফি। শব্দ — কীবোর্ডের টানা-টান, বোর্ডের LED-র নিঃশব্দ ছন্দ, দূরে কারিগরখানার হালকা গুঞ্জন।</p>
<p class="scene-setting en">The ninth door. The workshop's new studio-room — Sharmin's firmware table: a code editor's green-on-black window on the laptop, an Arduino board on USB, a printed one-page 'AVR port map' on the wall. Sharmin — late twenties, a bun, rolled denim sleeves, and her signature: three rings on her right hand — grandmother's, mother's, her own; 'I don't touch the rings again till the assignment's done,' she says — but she always gives them one spin before she starts typing. The smell of new electronics, tea, coffee; keyboard runs, the LED's silent rhythm, the workshop's distant hum.</p>

<div class="dialogue">তুমি টেবিলের সামনে বসলে। শারমিন আপা আংটি ঘুরিয়ে তাকালেন। "ফারহান ভাইয়ের শহর-মানচিত্র দেখে এসেছ? ঠিকানা চেনো?"
"জি — রেজিস্টার-ঠিকানায় দরবার চিঠি পাঠায়।"
"তাহলে আজ তুমি পাঠাবে।" তিনি বোর্ডটা তোমার দিকে ঠেলে দিলেন — একটা ছোট্ট LED পালস করছে তাতে। "এই জ্বলাটা এখন জাদু। আজ সন্ধ্যার মধ্যে এটা হবে তোমার লেখা বাক্য। তিনটা ধাপ: ডেটাশিট খোলো, ঠিকানা খোঁজো, চিঠি লেখো। শুরু করি সবচেয়ে পবিত্র বাক্য দিয়ে — যেটা এক আয়াতে সৃষ্টির পুরো নাটক: 'কুন ফায়াকুন — বলো হও, তা-ই হয়' (৩৬:৮২)। তোমার কুন হবে এক লাইন C।"</div>
<div class="dialogue en">You sat at the table. Sharmin spun her rings once and looked up. "Seen Farhan's city map? Know the addresses?"
"Yes — the court writes letters to register-addresses."
"Then today you write." She pushed the board toward you — a small LED pulsing on it. "For now, this glow is magic. By tonight, it'll be a sentence you wrote yourself. Three steps: open the datasheet, find the address, write the letter. Let's begin with the most sacred sentence — the whole drama of creation in one verse: 'Kun fa-yakun — Be! and it is' (36:82). Your kun will be one line of C."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> শারমিন আপার প্রথম ইন্টারভিউ-টাস্ক — বলা হয়েছিল 'একটা পিন টগল করো।' সে লিখল pinMode(13, OUTPUT); digitalWrite(13, HIGH); — কিন্তু বোর্ডে কিছু হলো না। ঘণ্টা পরে দেখা গেল বোর্ডটা আর্দুইনো নয়, খালি AVR-চিপ — পিন-১৩ বলতে কিছু নেই, pinMode-ও নেই! দুই দিন ডেটাশিট ঘেঁটে সে প্রথম শিখল DDRB-PORTB-এর নাম। <strong>সুবিধের-স্তর (Arduino API) আর শহরের ভাষা (register) — দুই-ই জানো; বোর্ড জিজ্ঞেস করবে কে তুমি।</strong></div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">DDR</div><div class="sc-label">ডেটা-ডাইরেকশন রেজিস্টার — পিনের পোশাক: ইনপুট না আউটপুট</div></div>
<div class="stat-card"><div class="sc-num">PORT</div><div class="sc-label">পোর্ট-রেজিস্টার — আউটপুট লেখা (HIGH/LOW)</div></div>
<div class="stat-card"><div class="sc-num">(1<<5)</div><div class="sc-label">বিট-মাস্ক — '১ কে ৫ ঘর বামে' = শুধু PB5-এর বিট ছোঁয়</div></div>
<div class="stat-card"><div class="sc-num">gcc→avrdude</div><div class="sc-label">কম্পাইল→ফ্ল্যাশ: কোড থেকে কাগজাঘরে সংবিধান-বসানো</div></div>
</div>

<div class="diagram">
<div class="diag-title">দুই চিঠির যাত্রা — LED-ব্লিংকের রেজিস্টার-মানচিত্র</div>
<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
  <!-- step 1: DDR -->
  <text class="lbl-cyan" x="120" y="30" font-size="12">চিঠি ১ — পোশাক ঠিক করো</text>
  <rect class="cell-cyan" x="40" y="45" width="170" height="40"/>
  <text class="lbl-cyan" x="125" y="70">DDRB |= (1&lt;&lt;5)</text>
  <text class="lbl-sm" x="125" y="105">"PB5 তুমি আউটপুট হও"</text>
  <!-- DDRB register bits -->
  <text class="lbl-sm" x="400" y="52">DDRB রেজিস্টার (৮ বিট)</text>
  <g>
    <rect class="cell" x="300" y="60" width="24" height="24"/><text class="lbl-sm" x="312" y="77">০</text>
    <rect class="cell" x="324" y="60" width="24" height="24"/><text class="lbl-sm" x="336" y="77">০</text>
    <rect class="cell" x="348" y="60" width="24" height="24"/><text class="lbl-sm" x="360" y="77">০</text>
    <rect class="cell" x="372" y="60" width="24" height="24"/><text class="lbl-sm" x="384" y="77">০</text>
    <rect class="cell" x="396" y="60" width="24" height="24"/><text class="lbl-sm" x="408" y="77">০</text>
    <rect class="cell-hot" x="420" y="60" width="24" height="24"/><text class="lbl-hot" x="432" y="77">১</text>
    <rect class="cell" x="444" y="60" width="24" height="24"/><text class="lbl-sm" x="456" y="77">০</text>
    <rect class="cell" x="468" y="60" width="24" height="24"/><text class="lbl-sm" x="480" y="77">০</text>
  </g>
  <text class="lbl-sm" x="432" y="100">↑ বিট-৫ (PB5)</text>
  <!-- step 2: PORT -->
  <text class="lbl-hot" x="120" y="140" font-size="12">চিঠি ২ — এখন জ্বলো</text>
  <rect class="cell-hot" x="40" y="155" width="170" height="40"/>
  <text class="lbl-hot" x="125" y="180">PORTB ^= (1&lt;&lt;5)</text>
  <text class="lbl-sm" x="125" y="215">"PB5 অবস্থা উল্টে যাও" (টগল)</text>
  <!-- PORT register bits -->
  <text class="lbl-sm" x="400" y="162">PORTB রেজিস্টার (৮ বিট)</text>
  <g>
    <rect class="cell" x="300" y="170" width="24" height="24"/><text class="lbl-sm" x="312" y="187">০</text>
    <rect class="cell" x="324" y="170" width="24" height="24"/><text class="lbl-sm" x="336" y="187">০</text>
    <rect class="cell" x="348" y="170" width="24" height="24"/><text class="lbl-sm" x="360" y="187">০</text>
    <rect class="cell" x="372" y="170" width="24" height="24"/><text class="lbl-sm" x="384" y="187">০</text>
    <rect class="cell" x="396" y="170" width="24" height="24"/><text class="lbl-sm" x="408" y="187">০</text>
    <rect class="cell-hot" x="420" y="170" width="24" height="24"/><text class="lbl-hot" x="432" y="187">১</text>
    <rect class="cell" x="444" y="170" width="24" height="24"/><text class="lbl-sm" x="456" y="187">০</text>
    <rect class="cell" x="468" y="170" width="24" height="24"/><text class="lbl-sm" x="480" y="187">০</text>
  </g>
  <!-- LED -->
  <line class="edge" x1="432" y1="194" x2="432" y2="225"/>
  <circle class="node-hot" cx="432" cy="235" r="12"/>
  <text class="lbl-hot" x="490" y="240">LED জ্বলছে!</text>
  <!-- flow note -->
  <text class="lbl-cyan" x="280" y="250" font-size="11">|= বিট-সেট (বাকি অক্ষত) · ^= টগল (উল্টে দাও)</text>
</svg>
<div class="diag-cap">দুই রেজিস্টার, আটটা বিট, একটা পিন: DDRB-এর বিট-৫ = পোশাক, PORTB-এর বিট-৫ = হুকুম — LED-র সম্পূর্ণ জীবন-রহস্য।</div>
</div>

<div class="dialogue">শারমিন আপা এডিটরে খালি ফাইল খুলে দিলেন। "লেখো। ভয় নেই — ভুল হলে কম্পাইলার চিৎকার করবে, চিপ নয়।" তুমি টাইপ করলে প্রথম লাইনগুলো — DDRB |= (1<<5); — কম্পাইল, ফ্ল্যাশ, এবং... কিছু হলো না। "ঠিকই তো! পোশাক দিলে, হুকুম এখনো দাও নি।" তুমি যোগ করলে PORTB ^= (1<<5); — এবং বোর্ডে অদ্ভুত এক ঝলক: LED এত দ্রুত টগল করছিল যে চোখে মিশে গেল মৃদু জ্যোতিতে! শারমিন আপা হেসে ফেললেন: "স্বাগতম বাস্তবতায় — ১৬MHz শহরে তোমার 'এক লাইন' সেকেন্ডে লাখবার চলে। দেরি-চিঠি লাগবে — সে-গল্প টাইমার-দরজায়; আপাতত _delay_ms()।" তুমি দেরি যোগ করলে — এবং প্রথমবারের মতো নিজের চোখে দেখলে: তোমার নিজের ছন্দে, তোমার নিজের LED। কুন ফায়াকুন। সেই মুহূর্তটা তুমি আর ভুলবে না।</div>
<div class="dialogue en">Sharmin opened an empty file. "Write. No fear — the compiler will shout, not the chip." You typed the first line — DDRB |= (1<<5); — compile, flash, and... nothing. "Of course! You gave the costume, not the command." You added PORTB ^= (1<<5); — and a strange glow: the LED toggled so fast it blurred, to your eye, into a steady faint glow! Sharmin laughed: "Welcome to reality — in a 16MHz city your 'one line' runs a hundred thousand times a second. You'll need a delay-letter — that's the timer-door's story; for now, _delay_ms()." You added the delay — and for the first time saw it: your rhythm, your LED. Kun fa-yakun. You will not forget that moment.</div>

<div class="code-block">তোমার প্রথম ফার্মওয়্যার — তিন রূপে এক কাজ:

রূপ ১ — আর্দুইনো-স্তর (সহজ, ধীর):
  void setup()    { pinMode(13, OUTPUT); }
  void loop()     {
    digitalWrite(13, HIGH);  // PORTB বিট-৫ সেট (লুকানো)
    delay(500);
    digitalWrite(13, LOW);
    delay(500);
  }

রূপ ২ — খালি-চিপ bare-metal (দ্রুত, সরাসরি):
  #include &lt;avr/io.h&gt;
  #include &lt;util/delay.h&gt;
  int main(void) {
    DDRB  |=  (1&lt;&lt;5);        // চিঠি ১: PB5 আউটপুট-পোশাক
    for(;;) {
      PORTB ^=  (1&lt;&lt;5);      // চিঠি ২: বিট-৫ টগল
      _delay_ms(500);
    }
  }

রূপ ৩ — বিট-অপারেশনের ব্যাকরণ (আত্মা):
  আগে দেখি (1&lt;&lt;5) আসলে বানায় কী — ধাপে-ধাপে শিফট:
    ১ = 0b00000001            (ডান-কোণায় একটা ১, বাকি সাতটা ০)
    বামে ১ ঘর  → 0b00000010
    বামে ২ ঘর  → 0b00000100
    বামে ৩ ঘর  → 0b00001000
    বামে ৪ ঘর  → 0b00010000
    বামে ৫ ঘর  → 0b00100000   ← (1&lt;&lt;5), মানে PB5-এর বিট-মাস্ক
  এবার DDRB |= (1&lt;&lt;5) নিজে-চলা করো — ধরো DDRB শুরুতে 0b00000000:
    0b00000000  (DDRB, সব-পিন এখনো ইনপুট)
  OR 0b00100000  ((1&lt;&lt;5)-মাস্ক)
  ------------
    0b00100000  (ফল — শুধু বিট-৫ উঠল, বাকি সাতটা অক্ষত-ই রইল)
  (OR-এর নিয়ম: দুই পাশের যেকোনো একটাতেও ১ থাকলে ফলে ১ — তাই |= শুধু নতুন বিট
   যোগ করে, পুরনো কোনো বিট মোছে না; এই জন্যই একে 'বিট-সেট' বলা হয়)
  একই ব্যাকরণে বাকিগুলো:
  x |= (1&lt;&lt;n)   বিট-n সেট করো, বাকি অক্ষত      (OR)
  x &amp;= ~(1&lt;&lt;n)  বিট-n খালি করো                  (AND+NOT)
  x ^= (1&lt;&lt;n)   বিট-n উল্টে দাও                   (XOR)
  if (x &amp; (1&lt;&lt;n)) বিট-n কি ১? — পড়ার ছল

টুলচেইন-প্রবাহ (আর্দুইনো-IDE যা লুকায়):
  সোর্স.c → avr-gcc (কম্পাইল) → .hex
           → avrdude (প্রোগ্রামার দিয়ে ফ্ল্যাশ-লেখা)
           → চিপ রিসেট → বুট-থেকে তোমার কোড চালু!
  (দরজা ১৪-এ বুটলোডার ও SWD/JTAG-এর পূর্ণ গল্প)

ডেটাশিট-পড়ার নিয়ম (আজকের আসল দক্ষতা):
  ১. পোর্ট-অধ্যায় খোলো (উদা: 'PORTB' সেকশন)
  ২. প্রতিটা রেজিস্টারের বিট-মানের টেবিল পড়ো
  ৩. নাম-কাঠামো চেনো: DDRx/PORTx/PINx (x=A,B,C…)
     DDR=দিক, PORT=লেখা/পুল-আপ, PIN=পড়া
  ৪. অন্য চিপে? একই পদ্ধতি, নতুন ঠিকানা —
     ম্যানুয়াল পড়াই দক্ষতা, মুখস্থ নয়

কেন bare-metal শিখবে (আর্দুইনো থাকতেই):
  মিলিসেকেন্ডে নয়, মাইক্রো-নিয়ন্ত্রণ; মেমোরি-হিসাব
  হাতে; বাগ-শিকার রেজিস্টার-স্তরে ধরা যায়;
  আর চাকরির ইন্টারভিউতে প্রশ্ন ও-স্তরেই আসে

  ── অন্য চিপে (ESP32-তে একই কাজ) ──────────
  রেজিস্টার-চিঠির বদলে লাইব্রেরি-মোড়ক:
    gpio_set_direction(GPIO_NUM_5, GPIO_MODE_OUTPUT);
    gpio_set_level(GPIO_NUM_5, 1);   // "জ্বলো"
  (Arduino-ESP32 স্তরে: pinMode/digitalWrite)
  পোশাক বদলায়, কৌশল একই: পিন = ঠিকানা,
  দিক ঠিক করো → মান লেখো।</div>

<div class="dialogue">সন্ধ্যায় LED-ছন্দ দেখতে দেখতে শারমিন আপা বললেন: "মনে রেখো এই অনুভূতি। যিনি বলেন 'হও' — সপ্তাশ্চর্য তাঁর সৃষ্টি; আর তুমি, তাঁর সামান্য ছাত্র, আজ প্রথম একটা পিনকে বললে 'জ্বলো' — আর সে জ্বলল। এই সৃষ্টি-আনন্দই ইঞ্জিনিয়ারিং-এর নেশা; এই আনন্দেই মানুষ ক্যালকুলেটর থেকে মঙ্গল-যান পর্যন্ত গড়েছে। কিন্তু কুন-এর দায়ও আছে: যে যন্ত্র তুমি জাগালে, ঘুম তারও — নগরীর নিয়ন্ত্রিত হুকুমের নায়েব তুমি। কাল মুয়াজ ভাইয়ের কাছে যাও — শহরের সবচেয়ে জরুরি ডাক: ইন্টারাপ্ট। যে ডাক এলে সব কাজ থামে। মুয়াজ্জিনের সন্তান সে — আযানের মানে তার রক্তে।"</div>
<div class="dialogue en">Watching the LED's rhythm at dusk, Sharmin said: "Remember this feeling. He who says 'Be!' — His creation is wonder; and you, His small student, today you told a pin, 'Light up' — and it lit. This joy of creation is engineering's addiction — the very same joy that built everything from calculators to Mars rovers. But kun carries duty: the machine you wake, you're also responsible for putting to sleep — you're now the steward of the city's obedient machinery. Tomorrow, go find Muaz — the city's most urgent call: the interrupt, the call that stops all work. He is a muezzin's son — the adhan runs in his blood."</div>



<div class="photo-frame"><img src="photos/led.jpg" alt="৫mm লাল LED — তোমার প্রথম কুন-এর মুখ"><div class="photo-cap">৫mm লাল LED — তোমার প্রথম কুন-এর মুখ · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — LED ও বাটনের তার-লাগানো (ব্রেডবোর্ড-ছবি)</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-cyan" x="212" y="72" width="120" height="90" rx="8"/>
  <text class="lbl-cyan" x="272" y="92">MCU</text>
  <text class="lbl-sm" x="272" y="110">৩.৩V লজিক</text>
  <text class="lbl-sm lbl-left" x="222" y="136">PD2</text>
  <text class="lbl-sm lbl-right" x="322" y="136">PB5</text>
  <use class="sym sym-dim" href="#sym-vcc" transform="translate(120,30)"/>
  <text class="lbl-sm" x="120" y="14">৩.৩V</text>
  <path class="wire" d="M120 30 V52"/>
  <use class="sym" href="#sym-r" transform="translate(120,52) rotate(90)"/>
  <text class="lbl-sm lbl-right" x="104" y="70">R_পুল-আপ</text>
  <text class="lbl-sm lbl-right" x="104" y="86">১০kΩ</text>
  <path class="wire" d="M120 92 V136"/>
  <use class="sym sym-dim" href="#sym-dot" transform="translate(120,136)"/>
  <path class="wire" d="M120 136 H212"/>
  <text class="lbl-sm" x="168" y="124">না-চাপলে ১</text>
  <path class="wire" d="M120 136 V160"/>
  <use class="sym sym-amber" href="#sym-btn" transform="translate(120,160) rotate(90)"/>
  <text class="lbl-sm lbl-right" x="98" y="178">বাটন</text>
  <text class="lbl-sm lbl-right" x="98" y="194">চাপলে ০</text>
  <path class="wire" d="M120 190 V206"/>
  <use class="sym sym-dim" href="#sym-gnd" transform="translate(120,206)"/>
  <path class="wire" d="M332 136 H366"/>
  <use class="sym" href="#sym-r" transform="translate(366,136)"/>
  <text class="lbl-sm" x="386" y="120">২২০Ω</text>
  <path class="wire" d="M406 136 H444"/>
  <use class="sym sym-hot" href="#sym-led" transform="translate(444,136) rotate(90)"/>
  <text class="lbl-hot lbl-left" x="466" y="148">LED</text>
  <text class="lbl-sm lbl-left" x="466" y="166">লম্বা পা = অ্যানোড</text>
  <path class="wire" d="M444 166 V206"/>
  <use class="sym sym-dim" href="#sym-gnd" transform="translate(444,206)"/>
  <text class="lbl-sm" x="280" y="240">বাঁয়ে পড়া (ইনপুট + পুল-আপ) · ডানে লেখা (আউটপুট + সীমক)</text>
</svg>
<div class="diag-cap">প্রথম দুই-বন্ধুর তার-চিত্র: LED শ্রেণিতে-রোধ-সহ (আউটপুট), বাটন পুল-আপে (চাপলে ০) — দরজা ৮-এর পোশাক-তালিকা এখন বাস্তব-ছবিতে।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — ব্লিংকের টাইম-চিত্র: কোড-লাইন বনাম তরঙ্গ</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
  <line class="axis" x1="50" y1="30" x2="50" y2="140"/>
  <line class="axis" x1="50" y1="140" x2="530" y2="140"/>
  <path class="edge-hot" d="M 50 130 L 90 130 L 90 50 L 200 50 L 200 130 L 310 130 L 310 50 L 420 50 L 420 130 L 530 130" fill="none"/>
  <text class="lbl-sm" x="120" y="34" font-size="10">HIGH (ON)</text>
  <text class="lbl-sm" x="255" y="122" font-size="10">LOW (OFF)</text>
  <line class="grid-line" x1="200" y1="30" x2="200" y2="140" stroke-dasharray="3,4"/>
  <text class="lbl-sm" x="145" y="160" font-size="10">delay(500) → অর্ধ-সেকেন্ড-বক্স</text>
  <rect class="cell" x="60" y="175" width="440" height="44"/>
  <text class="lbl-sm" x="280" y="192" font-size="10">লুপ-এক-পাক = এক-পর্যায় (period) = ১ সেকেন্ড</text>
  <text class="lbl-sm" x="280" y="210" font-size="10">duty = ৫০% — Door ১২-এর PWM-এর পূর্বসূরিই এই ব্লিংক!</text>
</svg>
<div class="diag-cap">তোমার প্রথম প্রোগ্রামের অসিলোসকোপ-চেহারা: চৌকো-তরঙ্গ, অর্ধেক উঁচু — কোডের প্রতিটা delay তরঙ্গের প্রস্থ; PWM-দরজার সেতু এখানেই।</div>
</div>

<div class="verse">
<div class="verse-arabic">إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَن يَقُولَ لَهُ كُن فَيَكُونُ</div>
<div class="verse-translation">তিনি যখন কোনো কিছুর ইচ্ছা করেন, তার নির্দেশ শুধু এই — 'কুন (হও)', তখনই তা হয়ে যায়।</div>
<div class="verse-ref">— কুরআন ৩৬:৮২</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 9 — প্রাণ-প্রথম কুন — ফার্মওয়্যারের জন্ম:</strong> LED-ব্লিংক দিয়ে শহর-জাগরণ যাচাই: DDR→PORT-চিঠি, কম্পাইল→ফ্ল্যাশ, আর প্রথম নিজের-ছন্দের ঝলক। <strong>নিয়ম:</strong> প্রতিটা নতুন বোর্ডে প্রথম কাজ এটাই — টুলচেইন-সেতু প্রমাণ, তারপর আসল-কাজ। আজ থেকে প্রজেক্ট-ফোল্ডার: src/ (কোড) + docs/ (খাতা) + tests/ (পরীক্ষা) — শৃঙ্খলাও ইনস্টল হলো কোডের মতো।</div></div>
<div class="secret-box"><div class="label">দরজা ৯ — রহস্য</div><div class="text">✨ LED জ্বলে যাদুতে নয় — দুই চিঠিতে: DDR 'তুমি আউটপুট', PORT 'এখন জ্বলো'; বিট-মাস্ক ছাড়া এক পিনও নড়ে না।<br><small>DDRB|=(1&lt;&lt;5) → PORTB^=(1&lt;&lt;5) + _delay_ms; |=/&amp;=/^= ব্যাকরণ; ডেটাশিট-পড়াই দক্ষতা। কুন ফায়াকুন: ৩৬:৮২।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>তিন-রূপ এক-কাজ:</strong> আর্দুইনো-API, bare-metal, বিট-ব্যাকরণ — একই ব্লিংক তিন স্তরে নিজে লিখে পার্থক্য অনুভব করো (গতি, সাইজ)।</li>
<li><strong>বিট-অপারেশন রক্তে:</strong> |= সেট, &amp;=~ খালি, ^= টগল, &amp; পড়া — এগুলো ছাড়া রেজিস্টার-জগতে এক পা-ও যাওয়া যায় না।</li>
<li><strong>ডেটাশিট-অভ্যাস:</strong> আজ থেকে প্রতিটা নতুন পেরিফেরিয়ালে প্রথম কাজ ম্যানুয়ালের রেজিস্টার-টেবিল পড়া — মুখস্থ নয়, খোঁজা।</li>
<li><strong>টুলচেইন-বোধ:</strong> কোড→হেক্স→ফ্ল্যাশ-প্রবাহ মুখে বলতে পারা; আর্দুইনো-বোতামের পেছনে কী ঘটে তার প্রশ্নের জবাব।</li>
<li><strong>দায়ের-বোধ:</strong> কুন-এর আনন্দ + নায়েবের দায় — জাগালে ঘুম পাতানোও তোমার (ডিউটি-চক্র, Door ৪-এর পাঠ এখানে ফলে)।</li>
<li><strong>সেতু — দরজা ১০:</strong> এই দরজার কোড অপেক্ষা করে (delay) — পুরো সময় CPU খালি বসে গোনে। অপেক্ষার মাঝে যদি জরুরি কিছু ঘটে — বাটন চাপা, বিপদ-সংকেত — CPU কি টের পাবে? পরের দরজায় সেই প্রশ্নের জবাব: ইন্টারাপ্ট, যে ডাক এলে কাজ থামিয়ে সাড়া দেয়।</li>
</ul>`
  }
});

// ── DOOR 10: আযানের ডাক (INTERRUPTS & ISR) ──
doors.push({
  num:10, icon:"📣", color:"#f472b6", name:"আযানের ডাক",
  subtitle:"The Call That Stops All Work", tech:"Interrupts, ISR, Vector Table, Interrupt Priority, Context Save, volatile Keyword",
  spirit:"আযান — যে ডাক এলে বাজার থামে; কাজ থেকে ডাকে অগ্রাধিকার (৬২:৯-এর জীবন্ত প্রযুক্তি-রূপ)",
  secret:"মূল কাজ চলতে চলতে জরুরি ডাক এলেই সব থেমে ডাকে সাড়া — কিন্তু ফেরার পথ মনে রাখাই (context-save) সভ্যতার শর্ত।",
  recall:{
    q:"মুয়াজ ভাইয়ের আযান-শৃঙ্খলা ISR-এ কীভাবে মেলে — আর শেয়ার-করা ভেরিয়েবলে কেন volatile লাগে, ISR-এ delay() নিষেধ কেন?",
    qen:"How does Muaz's adhan-discipline map to ISRs — why does a shared variable need volatile, and why is delay() forbidden inside an ISR?",
    a:"আযান-মডেল: মূল-কাজ (main loop) চলছে — ডাক এলো (interrupt event: পিন-পরিবর্তন, টাইমার-ওভারফ্লো, সিরিয়াল-ডেটা) → হার্ডওয়্যার সংকেত দেয় CPU-কে → CPU বর্তমান নির্দেশ শেষ করে ঠিকানা-খাতায় (vector table) খুঁজে নেয় ডাকের ধরনের সেবাদার-ফাংশনের ঠিকানা (ISR — Interrupt Service Routine) → সে চলে, শেষ হলে মূল-কাজের ঠিক যেখানে ছিল সেখানে ফেরা (context রেজিস্টারে সংরক্ষিত — স্ট্যাকে ঠেলে)। এটাই polling-এর বিপরীত: polling-এ তুমি হাজারবার দরজা দেখো (CPU-খরচ), ইন্টারাপ্টে দরজা নিজে তোলে। নিয়ম-শৃঙ্খলা: (১) ISR যত ছোট তত ভালো — পতাকা (flag) উত্তোলন করো, কাজ loop-এ; (২) ISR-এ delay() নিষেধ — ঘড়ি-টাইমারের ওপর ভরসা করে বসে থাকা মানে অন্য সব ডাক অপেক্ষায় মৃত্যু; (৩) ISR ও main-এর মাঝে শেয়ার-করা ভেরিয়েবলে volatile লাগে — নইলে অপ্টিমাইজার ভাবে 'এ তো বদলায়নি' আর পুরনো মান রেজিস্টারে আটকে রাখে, তাজা মান চোখেই পড়ে না; (৪) একই সময়ে একাধিক ডাক এলে অগ্রাধিকার-সারি (priority) ঠিক করে কে আগে — সংখ্যালঘু-বহু অস্থায়ী-নিষেধ (nested interrupt) চালু থাকলে উঁচু-অগ্রাধিকার ভেতরে ঢোকে। নাম-চেনা: INT0/INT1 (বাইরের পিন), PCINT (পিন-পরিবর্তন), TIMERx_OVF (টাইমার), USART_RX (সিরিয়াল) — প্রতিটার নিজস্ব vector-ঠিকানা।",
    aen:"Interrupt model: event → hardware signals CPU → vector table lookup → ISR runs → context-restored return. Opposite of polling (door checks itself). Discipline: tiny ISRs (set flags, work in loop), no delay() inside, volatile on shared variables (else the optimizer hides fresh values), priority queues concurrent calls. Names: INT0/PCINT/TIMER_OVF/USART_RX."
  },
  story:`
<p class="scene-setting">দশম দরজা। কারিগরখানার ছাদ-চবুতরো — পাশেই মসজিদের মিনার, বিকেলের আলোয় উজ্জ্বল; মুয়াজ ভাইয়ের ছোট্ট ইলেকট্রনিক্স-কোণ ছাদের কোণে — টেবিলে বাটন-যুক্ত টেস্ট-বোর্ড, ল্যাপটপ, আর একটা ছোট্ট স্পিকার। মুয়াজ ভাই — ত্রিশ-এক, গায়ে সাদা পাঞ্জাবি (অফিসের ব্যাগ পাশেই), চোখে প্রশান্ত দৃষ্টি, আর তাঁর সিগনেচার: ঘড়ির বদলে কবজিতে বাঁধা ছোট্ট সেবাহ-তাসবিহ — সময় দেখতে হলে ফোন, কিন্তু ভাবনার মাপ তিনি তাসবিহর দানায় গোনেন ('দশ দানা ভাবা হয়েছে — এবার হাত কোডে')। গন্ধ — ছাদের বাতাস, দূরে রান্নাঘরের ঝাঁঝ, ইনসুলেট-তার। শব্দ — নিচের গলির কোলাহল, মাঝে মাঝে মিনার থেকে ভেসে আসা ছোটদের কাতারে দাঁড়ানোর কোলাহল, স্পিকারের পরীক্ষা-টোন।</p>
<p class="scene-setting en">The tenth door. The workshop's rooftop veranda — the mosque's minaret bright beside it in afternoon light; Muaz's small electronics corner at the roof's edge — a button-wired test board, a laptop, a small speaker. Muaz — thirty-ish, white panjabi (office bag nearby), calm eyes, and his signature: a small prayer-bead misbaha on his wrist instead of a watch — for time, the phone; for measuring thought, the beads ('ten beads of thinking done — now hands to code'). Rooftop air, distant kitchen spice, wire insulation; the lane's noise below, now and then the clamor of children lining up for lessons drifting down from the minaret, a test tone from the speaker.</p>

<div class="dialogue">তুমি ছাদে উঠলে মুয়াজ ভাই তাসবিহ গুনছিলেন। দানা ছুঁয়ে থামলেন। "শারমিন আপার কুন দেখে এসেছ — LED-র জন্মদিন?"
"জি! আমার নিজের ছন্দে জ্বলছে।"
"মাশাআল্লাহ।" তিনি টেস্ট-বোর্ডের লাল বাটনটা দেখালেন। "এবার দ্বিতীয় পাঠ: ছন্দ চলতে চলতে বাইরের ডাক। এই বাটন চাপো — LED তো জ্বলবেই, কিন্তু মূল কাজ ভাঙবে না। যেমন আযান শুনলে কলম থামাই, কিন্তু কলমের খাতা হারায় না।" তিনি মিনারের দিকে তাকালেন। "আমার বাবা এই মসজিদের মুয়াজ্জিন। ছেলেবেলা থেকে দেখে আসছি — বাজার কত জমজমাটই হোক, আযান উঠলে সব থামে; সালাম ফিরিয়ে সবাই ফেরে আগের বাক্য থেকেই। আমার কাছে ইন্টারাপ্ট শেখা মানে ওই শৃঙ্খলা চিপে বসানো।"</div>
<div class="dialogue en">You climbed to the roof; Muaz was counting beads. He stopped at a bead. "Seen Sharmin's kun — the LED's birthday?"
"Yes! Blinking in my own rhythm."
"Mashallah." He showed the red button on the test board. "Now the second lesson: an outside call while the rhythm runs. Press this — the LED answers, but the main work must not break. As when the adhan rises: I stop the pen, but the ledger isn't lost." He looked at the minaret. "My father is this mosque's muezzin. Since childhood I've watched — no matter how busy the market gets, everything stops when the adhan rises — and once prayer ends, everyone picks up exactly where they left off. Learning interrupts, for me, means installing that discipline in a chip."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে (এ দরজার বিখ্যাত ফাঁদ):</strong> মুয়াজ ভাইয়ের প্রথম সিরিয়াল-প্রজেক্ট — বাটন-চাপ গুনবে, LED-ও ব্লিংক করবে। সে ISR-এর ভেতরেই লিখল দীর্ঘ কাজ + delay: ফল — বাটনের সময় অন্য সব ডাক (সিরিয়াল-ডেটা) মিস, ব্লিংক এলোমেলো, কিছুক্ষণ পরে চিপ আধ-মৃত ঝুলে। দিন-শেষে তিন নিয়ম তৈরি: <strong>ISR-এ কাজ নয়, পতাকা; delay নিষেধ; শেয়ার-ভেরিয়েবলে volatile।</strong> আযানের মানে তো কাজ থামানো নয় — সাড়া দিয়ে ফিরে আসা; ডাকের সেবাদারও তেমনি: সংক্ষিপ্ত, দ্রুত, নিখুঁত।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">ISR</div><div class="sc-label">ডাকের সেবাদার-ফাংশন — যত ছোট তত পবিত্র</div></div>
<div class="stat-card"><div class="sc-num">Vector Table</div><div class="sc-label">ডাক-ঠিকানার খাতা — কোন ডাক কোথায় সাড়া পাবে</div></div>
<div class="stat-card"><div class="sc-num">volatile</div><div class="sc-label">অপ্টিমাইজারকে বলো — 'এ মান বাইরে থেকে বদলায়, প্রতিবার পড়ো!'</div></div>
<div class="stat-card"><div class="sc-num">flag→loop</div><div class="sc-label">ISR পতাকা তোলে, মূল-লুপ কাজ করে — শৃঙ্খলার বিভাজন</div></div>
</div>

<div class="diagram">
<div class="diag-title">ডাকের যাত্রা — ইন্টারাপ্টের পূর্ণ প্রবাহ</div>
<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
  <!-- main loop box -->
  <rect class="cell-cyan" x="40" y="30" width="180" height="60"/>
  <text class="lbl-cyan" x="130" y="54">মূল-কাজ (main loop)</text>
  <text class="lbl-sm" x="130" y="72">LED-ছন্দ চলছে…</text>
  <!-- event -->
  <rect class="cell-hot" x="40" y="130" width="180" height="44"/>
  <text class="lbl-hot" x="130" y="148">লাল বাটন চাপা!</text>
  <text class="lbl-sm" x="130" y="166">(INT0 পিনে পতন)</text>
  <line class="edge-hot" x1="130" y1="90" x2="130" y2="130"/>
  <text class="lbl-hot" x="150" y="114">ডাক উঠলো</text>
  <!-- vector table -->
  <rect class="cell" x="290" y="120" width="160" height="80"/>
  <text class="lbl" x="370" y="140">Vector Table</text>
  <text class="lbl-sm" x="370" y="158">INT0 → ঠিকানা 0x002</text>
  <text class="lbl-sm" x="370" y="174">TIMER1 → 0x00A …</text>
  <line class="edge" x1="220" y1="152" x2="290" y2="152"/>
  <text class="lbl-sm" x="255" y="145">খাতা খোলো</text>
  <!-- ISR -->
  <rect class="cell-hot" x="290" y="30" width="160" height="60"/>
  <text class="lbl-hot" x="370" y="52">ISR সেবাদার</text>
  <text class="lbl-sm" x="370" y="70">flag = ১; ফিরে যাও</text>
  <line class="edge" x1="370" y1="120" x2="370" y2="90"/>
  <!-- context save -->
  <rect class="cell" x="40" y="215" width="410" height="40"/>
  <text class="lbl" x="245" y="232">ফেরার পথ: রেজিস্টার-স্ট্যাকে সঞ্চিত</text>
  <text class="lbl-sm" x="245" y="248">(ঠিক যেখান থেকে ডাক এলো সেখানেই ফেরা — খাতা হারায় না)</text>
  <line class="edge-cyan" x1="130" y1="215" x2="130" y2="174"/>
  <line class="edge-cyan" x1="450" y1="60" x2="500" y2="60"/>
  <line class="edge-cyan" x1="500" y1="60" x2="500" y2="235"/>
  <line class="edge-cyan" x1="500" y1="235" x2="450" y2="235"/>
  <text class="lbl-cyan" x="500" y="150" font-size="11">ফেরা</text>
  <!-- rules box -->
  <text class="lbl-hot" x="130" y="196" font-size="11">নিয়ম: ISR ছোট · delay নিষেধ · volatile</text>
</svg>
<div class="diag-cap">ঘটনা → খাতায় ঠিকানা → সংক্ষিপ্ত সেবা → সঞ্চিত-প্রসঙ্গে ফেরা — আযানের শৃঙ্খলা সিলিকনে: থামো, সাড়া দাও, ফিরে যাও।</div>
</div>

<div class="dialogue">মুয়াজ ভাই কোড-এডিটর খুলে দেখালেন তিন-নিয়মের বাস্তব রূপ — ISR মাত্র দুই লাইন (পতাকা তোলা), মূল-লুপ পতাকা দেখে কাজ করে, ভেরিয়েবলে volatile লেখা। "এবার তুমি।" তুমি বাটন-বোর্ডে চাপ দিলে — LED-ছন্দ এক মুহূর্তও কাঁপলো না, অথচ স্পিকারে টোন উঠলো বাটনের ঠিক মুহূর্তে। মিনার থেকে তখন মাগরিবের আযান ভেসে এলো। মুয়াজ ভাই ল্যাপটপ বন্ধ করে দাঁড়ালেন, তুমিও দাঁড়ালে। ডাকের শৃঙ্খলা — কোডেও, ছাদেও।</div>
<div class="dialogue en">Muaz opened the editor and showed the three rules in living form — an ISR of two lines (raise a flag), the main loop doing the work on the flag, volatile on the shared variable. "Now you." You pressed the button — the LED's rhythm never trembled, yet the speaker's tone rose at the exact instant. Then the maghrib adhan floated down from the minaret. Muaz closed the laptop and stood; you stood too. The discipline of the call — in code, on the rooftop.</div>

<div class="code-block">ডাকের ব্যাকরণ — Interrupts in practice:

তিন-নিয়মের শৃঙ্খলা (আয়ান-মডেল):
  ১. ISR সংক্ষিপ্ত — কাজ নয়, পতাকা
  ২. ISR-এ delay()/অপেক্ষা নিষেধ
  ৩. শেয়ার-ভেরিয়েবলে volatile বাধ্যতামূলক

  'সংক্ষিপ্ত' মানে ঠিক কতটা? পাশের টাইম-চিত্রের সৎ-পথ (flag=১; ফেরা)
  ≈৫μs, পাপী-পথ (ভেতরে delay+প্রিন্ট) ≈৫০ms — হিসাব করলে:
    ৫০ms ÷ ৫μs = ৫০,০০০μs ÷ ৫μs = ১০,০০০
  অর্থাৎ পাপী-ISR সৎ-ISR-এর দশ-হাজার গুণ বেশি সময় দরজা বন্ধ রাখে —
  ওই দশ-হাজার-গুণ সময়ে আসা প্রতিটা অন্য-ডাক (আরেকটা বাটন, সিরিয়াল-ডেটা)
  চুপচাপ হারিয়ে যায়, কারণ CPU তখনো প্রথম ডাকেই আটকে।

AVR উদাহরণ (বাটন-ডাক, পতাকা-পদ্ধতি):
  #include &lt;avr/io.h&gt;
  #include &lt;avr/interrupt.h&gt;

  volatile uint8_t button_hit = 0;   // শেয়ার — volatile ছাড়া মৃত্যু

  ISR(INT0_vect) {          // ডাকের সেবাদার (vector-খাতার ঠিকানা)
    button_hit = 1;         // শুধু পতাকা — দ্রুত ফেরা
  }

  int main(void) {
    DDRD  &amp;= ~(1&lt;&lt;2);       // PD2 ইনপুট (বাটন)
    PORTD |=  (1&lt;&lt;2);       // পুল-আপ (দরজা ৮-এর পাঠ)
    EICRA =  (1&lt;&lt;ISC01);    // পতনের ধারে ডাক (falling edge)
    EIMSK =  (1&lt;&lt;INT0);     // INT0-ডাক চালু
    sei();                  // বিশ্ব-ডাক-তালা খোলা (global enable)

    for(;;) {
      if (button_hit) {     // মূল-লুপে আসল কাজ
        PORTB ^= (1&lt;&lt;5);    // LED-টগল (দরজা ৯-এর চিঠি!)
        button_hit = 0;
      }
      // …ছন্দ-কাজ চলতেই থাকে…
    }
  }

আর্দুইনো-স্তরে একই:
  volatile bool hit = false;
  void setup() {
    pinMode(2, INPUT_PULLUP);
    attachInterrupt(digitalPinToInterrupt(2), []{ hit = true; }, FALLING);
  }
  void loop() { if (hit) { /* কাজ */ hit = false; } }

ডাকের জাতিলতিকা (vector-খাতার সারি):
  RESET        — শহর-জাগরণ (সবার আগে)
  INT0/INT1    — বাইরের পিনের ধার
  PCINT        — যেকোনো পিন-পরিবর্তন
  TIMER0_OVF   — ঘড়ি-উপচে-পড়া (দরজা ১১)
  USART_RX     — সিরিয়াল-চিঠি এসেছে (দরজা ১৩)
  ADC-ready    — অনুবাদ শেষ (দরজা ১২)

কেন polling নয়:
  polling = দরজা-দরজা ঘুরে জিজ্ঞেস — CPU-খরচ, ডাক মিস
  interrupt = দরজায় ঘণ্টা — CPU ঘুমাতেও পারে (Door ৪-এর
  ডিউটি-চক্র + এ-দরজার ডাক = বছর-ব্যাটারির সূত্র!)

গভীর-গভীরতর (জানা থাকুন):
  অগ্রাধিকার: একসাথে ডাক এলে কে আগে — নির্দিষ্ট সারি
  nested: ISR-এর ভেতরে ডাক-তালা বন্ধ থাকে (AVR-ডিফল্ট)
  race-condition: বহু-বাইট শেয়ার-ডেটা পড়া/লেখায়
    ডাক এলে ছেঁড়া-পড়া — atomic ব্লক/cli-sei দিয়ে রক্ষা

  ── অন্য চিপে (ESP32-তে একই কাজ) ──────────
  gpio_set_intr_type(GPIO_NUM_2, GPIO_NEGEDGE);
  gpio_isr_handler_add(GPIO_NUM_2, onRain, NULL);
  // ISR-এ IRAM_ATTR বাধ্য — ঘুমের ক্যাশ-ফাঁদ এড়াতে
  একই তিন-নিয়ম: ছোট ISR · delay নিষেধ ·
  শেয়ারে volatile — পোশাক বদলায়, শৃঙ্খলা এক।</div>

<div class="dialogue">আযান শেষে ফিরে বসে মুয়াজ ভাই তাসবিহর দানায় আঙুল রাখলেন। "শেষ কথা। কুরআন বলে — জুমার আযানে কেনাবেচা ছেড়ে ছুটে যাও (৬২:৯), আর সালাত শেষে 'দুনিয়ায় ছড়িয়ে পড়ো, আল্লাহর অনুগ্রহ খোঁজো' (৬২:১০)। খেয়াল করো — এ তো হুবহু ISR-এর প্রোটোকল: থামো, সাড়া দাও, ফিরে যাও কাজে। চিপ-নকশাকারীরা যে শৃঙ্খলা কোটি ট্রানজিস্টরে বসিয়েছেন, তা মুমিনের জীবনে চৌদ্দশো বছর ধরে চলছে। আমি যখন ISR লিখি, বাবার কণ্ঠ মনে পড়ে — ডাক যে দিয়েছে, সাড়া দ্রুত হবে, ভারী হবে না। কাল আবার আমার কাছেই — ওয়াক্তের হিসাব: টাইমার। বাবার সময়-শৃঙ্খলার বাকি অর্ধেক গল্প ওখানে।"</div>
<div class="dialogue en">After the adhan, settling back, Muaz set a finger on a bead. "Last word. The Quran says — at the Friday call, leave trade and hasten (62:9); and when prayer ends, 'disperse in the land and seek Allah's bounty' (62:10). Notice — this is precisely the ISR protocol: stop, respond, return to work. The discipline chip-designers etched into a billion transistors has run in a believer's life for fourteen hundred years. When I write an ISR, I hear my father's voice — the call has come; the answer is swift, never heavy. Tomorrow, again with me — the reckoning of appointed times: timers. The remaining half of my father's discipline lives there."</div>



<div class="photo-frame"><img src="photos/relay.jpg" alt="রিলে-চাকতি — ছোট সংকেতে বড় লোডের দরজা"><div class="photo-cap">রিলে-চাকতি — ছোট সংকেতে বড় লোডের দরজা · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — হল-সেন্সর ও ফটোইন্টারাপ্টার: ডাক-উৎসের জাত</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-hot" x="40" y="40" width="150" height="70"/>
  <text class="lbl-hot" x="115" y="64">হল-সেন্সর</text>
  <text class="lbl-sm" x="115" y="84" font-size="10">চুম্বক-কাছে → ভোল্টেজ-লাফ</text>
  <text class="lbl-sm" x="115" y="100" font-size="10">চাকা-গণনা · দরজা-তালা শনাক্ত</text>
  <rect class="cell-cyan" x="230" y="40" width="160" height="70"/>
  <text class="lbl-cyan" x="310" y="64">ফটোইন্টারাপ্টার</text>
  <text class="lbl-sm" x="310" y="84" font-size="10">আলো-পথে বাধা → ডাক</text>
  <text class="lbl-sm" x="310" y="100" font-size="10">প্রিন্টার-পাতা · এনকোডার-স্লট</text>
  <rect class="cell" x="430" y="40" width="110" height="70"/>
  <text class="lbl" x="485" y="64">PIR</text>
  <text class="lbl-sm" x="485" y="84" font-size="10">শরীরের-তাপের নড়াচড়া</text>
  <text class="lbl-sm" x="485" y="100" font-size="10">ঘুম-জাগানো লাইট</text>
  <rect class="cell" x="40" y="150" width="500" height="50"/>
  <text class="lbl-sm" x="290" y="162" font-size="10">তিন-জাতই ডিজিটাল-পালস দেয় — INT-পিনের খাবার</text>
  <text class="lbl-sm" x="290" y="188" font-size="10">হার্ডওয়্যার-ডাক বনাম পোলিং: ব্যাটারি-প্রশ্নে ডাক জেতে (দরজা ৪-এর হিসাব)</text>
</svg>
<div class="diag-cap">ডাক-উৎসের বাহারি: চুম্বক, আলো, তাপ — প্রতিটা বাইরের ঘটনাকে পালসে অনুবাদ করে INT-পিনে পাঠায়; এনকোডার = স্লট-চাকা + ফটো = ঘূর্ণনের গণিত।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — এমার্জেন্সি-বাটন: নেস্টিংয়ের শাস্তি-পুরস্কার</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-cyan" x="40" y="30" width="220" height="90"/>
  <text class="lbl-cyan" x="150" y="56">সৎ-ISR (ছোট)</text>
  <text class="lbl-sm" x="150" y="78" font-size="10">flag=১; ফেরা — ৫μs</text>
  <text class="lbl-sm" x="150" y="96" font-size="10">অন্য-ডাক বাঁচে · লুপ জীবিত</text>
  <rect class="cell-hot" x="300" y="30" width="230" height="90"/>
  <text class="lbl-hot" x="415" y="56">পাপী-ISR (ভারী)</text>
  <text class="lbl-sm" x="415" y="78" font-size="10">ভেতরে delay+প্রিন্ট — ৫০ms</text>
  <text class="lbl-sm" x="415" y="96" font-size="10">এমার্জেন্সি-ডাক মিস · ডেটা-হারা</text>
  <line class="axis" x1="50" y1="160" x2="530" y2="160"/>
  <path class="edge-cyan" d="M 50 155 L 120 155 L 125 135 L 135 155 L 300 155" fill="none"/>
  <text class="lbl-sm" x="170" y="180" font-size="10">সৎ-পথ: ডাক-খালি প্রায়-তাৎক্ষণিক</text>
  <path class="edge-hot" d="M 300 175 L 490 175" fill="none"/>
  <text class="lbl-sm" x="395" y="196" font-size="10">পাপী-পথ: ৫০ms ব্লক — দ্বিতীয়-ডাক ভুগে যায়</text>
</svg>
<div class="diag-cap">একই বাটন, দুই নীতি: ISR-এ পতাকা-তুলে ফিরলে সব-ডাক বাঁচে; ভারী-কাজ ভেতরে ঢুকলে জরুরি-ডাকও লাইনে মারা যায় — শৃঙ্খলার দাম টাইম-চিত্রে দেখা যায়।</div>
</div>

<div class="verse">
<div class="verse-arabic">يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسَعَوْا إِلَىٰ ذِكْرِ اللَّهِ وَذَرُوا الْبَيْعَ</div>
<div class="verse-translation">হে মুমিনগণ! জুমার দিন নামাজের ডাক দেওয়া হলে আল্লাহর স্মরণের দিকে ধাবিত হও এবং কেনাবেচা ছেড়ে দাও।</div>
<div class="verse-ref">— কুরআন ৬২:৯</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 10 — ডাক-বেষ্টনী — বৃষ্টি-সেন্সরের তার:</strong> বৃষ্টি-প্লেট INT-পিনে যুক্ত: পতন-ধারে ডাক, ISR পতাকা, লুপে তাৎক্ষণিক-পাঠ। <strong>পরীক্ষা:</strong> ভেজা-আঙুল ছোঁয়াতেই LED-ডাবল-ঝলক — ডাক-প্রবাহ প্রমাণিত। কেন পোলিং নয়? খাতার ব্যাটারি-লাইন: প্রতি-সেকেন্ড-জিজ্ঞেস মানে ঘুম নেই — ডাক-বেষ্টনীতে শহর ঘুমাতেই পারে।</div></div>
<div class="secret-box"><div class="label">দরজা ১০ — রহস্য</div><div class="text">📣 ডাক এলে থামো-সাড়া-দাও-ফিরো: ISR ছোট, delay নিষেধ, শেয়ারে volatile — আযানের শৃঙ্খলা সিলিকনে।<br><small>vector খাতা→সেবাদার→context-ফেরা; পতাকা-পদ্ধতি; polling-এর বিপরীত। আযান-প্রোটোকল: ৬২:৯-১০।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>তিন-নিয়ম আত্মস্থ:</strong> ISR-ছোট, delay-নিষেধ, volatile-বাধ্য — প্রতিটার 'কেন' এক বাক্যে বলতে পারবে (মিস-ডাক/ঝুলে-থাকা/অপ্টিমাইজার-ফাঁদ)।</li>
<li><strong>পতাকা-পদ্ধতি হাতে:</strong> ISR পতাকা তোলে + loop কাজ করে — এই বিভাজন ছাড়া বাস্তব প্রজেক্ট প্রথম সপ্তাহেই ভেঙে পড়ে।</li>
<li><strong>তিন স্তরের সম্পর্ক:</strong> ডাক-সক্রিয় (EIMSK) → বিশ্ব-তালা (sei()) → খাতার ঠিকানা (vector) — কোনটা ভুললে কী হয়, মনে রাখো।</li>
<li><strong>polling-বনাম-ইন্টারাপ্ট-সিদ্ধান্ত:</strong> কখন ঘুরে-ঘুরে-দেখা যথেষ্ট, কখন ঘণ্টা লাগে — ব্যাটারি-বাজেটের (Door ৪) সাথে মিলিয়ে ভাবো।</li>
<li><strong>গভীর-জলের মানচিত্র:</strong> অগ্রাধিকার, nested-নিষেধ, race/atomic — ইন্টারভিউ-গভীরতার প্রশ্ন এখান থেকেই আসে; নামগুলো আজই চেনা।</li>
<li><strong>সেতু — দরজা ১১:</strong> ইন্টারাপ্ট শিখলে — কিন্তু এই ডাক আসে কোথা থেকে? একটা উৎস বাইরের বাটন; আরেকটা উৎস ভেতরেরই এক নিরলস গণনাকারী — টাইমার। পরের দরজায় সেই গণনাকারীর নিয়ম: প্রেস্কেলার, ওভারফ্লো, আর নিজে থেকে জাগা।</li>
</ul>`
  }
});

// ── DOOR 11: ওয়াক্তের হিসাব (TIMERS, RTC, WATCHDOG) ──
doors.push({
  num:11, icon:"⏱️", color:"#4ade80", name:"ওয়াক্তের হিসাব",
  subtitle:"The Reckoning of Appointed Times", tech:"Timer Counters, Prescaler, Overflow, CTC Mode, millis(), RTC, Watchdog",
  spirit:"ওয়াক্ত — নামাজ সময়-নির্ধারিত; শৃঙ্খলার প্রথম নাম সময়-জ্ঞান (৪:১০৩)",
  secret:"ঘড়ি মানে গণনার নগাড়া ভাগ করা — প্রতি tick গোনো, নির্দিষ্ট সংখ্যায় ডাক দাও; আর নির্ভরযোগ্যতার শেষ রক্ষী: প্রহরী-কুকুর, দরবার আটকে গেলেই ঘণ্টা বাজে।",
  recall:{
    q:"১৬MHz শহরে ১ সেকেন্ডের ডাক পেতে prescaler-256 হলে OCR1A-তে কত বসাবে — আর watchdog কী দরবার-পতন থেকে বাঁচায়?",
    qen:"For a 1-second call at 16MHz with prescaler 256, what goes into OCR1A — and what does a watchdog rescue?",
    a:"গণনার অঙ্ক: টাইমার প্রতি প্রি-স্কেল-ধাপে ১ করে বাড়ে। ১৬MHz ÷ ২৫৬ = ৬২,৫০০ tick/সেকেন্ড — অর্থাৎ ১ সেকেন্ড = ৬২,৫০০ tick। CTC-মোডে (Clear Timer on Compare) OCR1A=৬২৪৯৯ বসালে (০ থেকে গোনা) ঠিক ১ সেকেন্ড পরপর কম্পেয়ার-ম্যাচের ডাক ওঠে — এই ম্যাচে ইন্টারাপ্ট (Door ১০-এর ডাক!) বসে — চাইলে পিন-টগলও: প্রতি ম্যাচে পিন উল্টালে আউটপুট ২ সেকেন্ডের পর্যায়ে দোলে (টগল মানেই অর্ধেক পর্যায়), তাই f_out = ১÷২ = ০.৫Hz। প্রি-স্কেলার মানে নগাড়া-ভাগ: ১৬MHz কাঁচা হলে ১ সেকেন্ডে ১.৬ কোটি গণনা — ১৬-বিট টাইমার (সর্বোচ্চ ৬৫,৫৩৫) ৪ms-এই উপচে যায়; ২৫৬-ভাগে ১৬-বিটেই সেকেন্ড-নাগাল। millis() আর্দুইনোর একই খেলার রূপ: Timer0-এর ওভারফ্লো-ডাক গুনে মিলিসেকেন্ড-খাতা। RTC (Real-Time Clock) আলাদা ঘড়ি-চিপ/উপ-ব্যবস্থা — ৩২.৭৬৮kHz ক্রিস্টালে চলে, μA-খাওয়া, বিদ্যুৎ-কাটলেও চলতে থাকে (কয়েন-ব্যাটারি) — ক্যালেন্ডার-পাল্লা নয়, চলমান টিক। Watchdog হলো স্বতন্ত্র নিম্ন-গতির RC-ঘড়ি + কাউন্টার: ফার্মওয়্যার নিয়মিত 'কুকুর-কে-ঠেলো' (wdt_reset) না করলে সে ধরে নেয় দরবার আটকেছে — রিসেট-ঘণ্টা বাজিয়ে শহর নতুন করে জাগায়। এটাই ফিল্ড-ডিভাইসের বীমা: কেউ কেনা-কাটা জায়গায় ডিভাইস ঝুলে থাকলে, কুকুর একা-একা জাগিয়ে দেয়।",
    aen:"16MHz ÷ 256 prescaler = 62,500 ticks/s → OCR1A = 62499 in CTC mode fires every 1s exactly. Prescaler divides the drum so a 16-bit timer can reach seconds; millis() counts Timer0 overflows; RTC = separate 32.768kHz low-power clock; watchdog = independent counter that resets a hung court unless fed."
  },
  story:`
<p class="scene-setting">একাদশ দরজা — পরদিন সকাল, একই ছাদ-চবুতরো; ফজরের পর ঝকঝকে বাতাস, মিনারের কাছে কাঠ-ঘড়ির মতো সুন্নতি ছায়া। মুয়াজ ভাইয়ের টেবিলে আজ নতুন জিনিস: একটা ছোট্ট DS3231 RTC-মডিউল (কয়েন-ব্যাটারি-সহ), ল্যাপটপে টাইমার-রেজিস্টারের ডেটাশিট-পাতা খোলা, পাশে তাঁর বাবার পুরনো হাত-ঘড়ি — মেরামতের পাশে সাজানো, কাচে আলতো ধুলো। মুয়াজ ভাই আজ পাঞ্জাবির ওপর সোয়েটার, তাসবিহ আজ টেবিলে রাখা — আঙুল নয়, চোখে সময় মাপছেন সকালটা। গন্ধ — সকালের ঠান্ডা বাতাস, চা-ভাপ, নতুন বোর্ডের প্লাস্টিক। শব্দ — নিচে দোকান-শাটার খোলার ধামা, দূরে পাখি, টেবিলে RTC-মডিউলের সেকেন্ড-এলইডির নীরব-মৃদু জ্বলা (১ হার্টজের হার্টবিট)।</p>
<p class="scene-setting en">The eleventh door — next morning, same rooftop veranda; crisp post-fajr air, the minaret casting a clock-like shadow. New things on Muaz's table: a small DS3231 RTC module (coin cell attached), the datasheet's timer-register page open on the laptop, and beside them his father's old wristwatch, set out by the repair corner, a thin film of dust on its glass. A sweater over the panjabi today; the misbaha on the table — this morning he measures time with eyes, not fingers. Cold morning air, tea-steam, new-board plastic; shutters clattering open below, distant birds, and the RTC module's second-LED pulsing softly — a one-hertz heartbeat.</p>

<div class="dialogue">তুমি এসে দাঁড়াতেই মুয়াজ ভাই RTC-র সেকেন্ড-বাতি দেখালেন। "দেখো — এ-ই হার্টবিট। প্রতি সেকেন্ডে এক জ্বলা, বিদ্যুৎ-কাটলেও চলবে, বছরের পর বছর। কাল তুমি ডাক শিখলে — আজ শিখবে সময়।" তিনি বাবার হাত-ঘড়িটা হাতে নিলেন। "বাবা চল্লিশ বছর এই ঘড়িতে ওয়াক্ত মিলিয়েছেন। তাঁর কথা: 'ওয়াক্ত মানে গোনা নয়, পাহারা' — পাঁচ ওয়াক্ত মানে দিনটা ভাগ, প্রতিটা ভাগে ডাক। কুরআনও তাই বলে: নামাজ মুমিনের ওপর নির্দিষ্ট সময়ে ফরজ (৪:১০৩)। চিপের টাইমার সেই পাহারারই যন্ত্র-রূপ — আর আজ দেখবে, সময় মাপার যন্ত্র আসলে গণনার যন্ত্র।"</div>
<div class="dialogue en">As you arrived, Muaz showed the RTC's second-light. "See — a heartbeat. One blink per second, running through blackouts, for years. Yesterday you learned the call; today, time." He took his father's watch. "Father kept the prayer-times on this watch for forty years. His saying: 'waqt is not counting — it is keeping watch.' Five prayers mean the day is divided, a call in each part. The Quran says it too: prayer is enjoined at fixed times (4:103). The chip's timer is that vigil made machinery — and today you'll see: a timekeeping machine is really a counting machine."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে (দুই ভাই-দরজার বিখ্যাত গল্প):</strong> মুয়াজ ভাইয়ের প্রথম মসজিদ-প্রজেক্ট — আযানের স্বয়ংক্রিয় টাইমার, ফজরের আগে ঘুম-মোডে রেখে দিয়েছিলেন রাতে। ভোরবেলা দেখা গেল ডিভাইস ঝুলে আছে — রাতের এক বিদ্যুৎ-দুলুনিতে ফার্মওয়্যার অচেতন, কেউ জাগায়নি, জামাত মিস। সেদিনই সে শিখল ফিল্ড-নিয়ম: <strong>ঘুমের আগে প্রহরী-কুকুর বসাও (watchdog) — দরবার আটকে গেলে কুকুর ঘণ্টা বাজাবে, রিসেট হবে, আযান উঠবে।</strong> এখন তাঁর প্রতিটা ফিল্ড-ডিভাইসে কুকুর আছে; বিদ্যুৎ-দুলুনিতে ডিভাইস একা-একাই ঘুম থেকে উঠে কাজে ফেরে।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৬২,৫০০</div><div class="sc-label">১৬MHz÷২৫৬-এ টিক/সেকেন্ড — OCR1A=৬২৪৯৯ মানে ১s ডাক</div></div>
<div class="stat-card"><div class="sc-num">৬৫,৫৩৫</div><div class="sc-label">১৬-বিট টাইমারের ছাদ — প্রি-স্কেলার ছাড়া ৪ms-এ উপচে</div></div>
<div class="stat-card"><div class="sc-num">৩২.৭৬৮kHz</div><div class="sc-label">RTC-ক্রিস্টাল — কয়েন-ব্যাটারিতে চলা ক্যালেন্ডার-হৃদয়</div></div>
<div class="stat-card"><div class="sc-num">WDT</div><div class="sc-label">প্রহরী-কুকুর — ঠেলা না পেলে রিসেট-ঘণ্টা; ফিল্ড-বীমা</div></div>
</div>

<div class="diagram">
<div class="diag-title">নগাড়া-ভাগের গণিত — প্রি-স্কেলার থেকে সেকেন্ড-ডাক</div>
<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
  <!-- clock source -->
  <rect class="cell-hot" x="30" y="30" width="130" height="40"/>
  <text class="lbl-hot" x="95" y="54">১৬MHz নগাড়া</text>
  <!-- prescaler -->
  <line class="edge" x1="160" y1="50" x2="205" y2="50"/>
  <rect class="cell" x="205" y="30" width="130" height="40"/>
  <text class="lbl" x="270" y="48">প্রি-স্কেলার ÷২৫৬</text>
  <text class="lbl-sm" x="270" y="64">(নগাড়া-ভাগ)</text>
  <!-- timer counter -->
  <line class="edge" x1="335" y1="50" x2="380" y2="50"/>
  <rect class="cell-cyan" x="380" y="30" width="150" height="40"/>
  <text class="lbl-cyan" x="455" y="48">TCNT1 গণতাকারী</text>
  <text class="lbl-sm" x="455" y="64">০…৬৫৫৩৫</text>
  <!-- compare -->
  <line class="edge" x1="455" y1="70" x2="455" y2="105"/>
  <rect class="cell" x="380" y="105" width="150" height="34"/>
  <text class="lbl-sm" x="455" y="126">OCR1A = ৬২৪৯৯ ?</text>
  <!-- fire -->
  <line class="edge-hot" x1="455" y1="139" x2="455" y2="170"/>
  <rect class="cell-hot" x="380" y="170" width="150" height="40"/>
  <text class="lbl-hot" x="455" y="188">১-সেকেন্ড ডাক!</text>
  <text class="lbl-sm" x="455" y="204">কম্পেয়ার-ম্যাচ ISR</text>
  <!-- reset arrow CTC -->
  <path class="edge-cyan" d="M 380 122 Q 300 122 300 70 Q 300 50 380 50" fill="none" stroke-dasharray="4,4"/>
  <text class="lbl-cyan" x="290" y="100" font-size="11">ম্যাচ → TCNT1=০ (CTC)</text>
  <!-- math strip -->
  <rect class="cell" x="30" y="170" width="300" height="58"/>
  <text class="lbl" x="180" y="192">১৬,০০০,০০০ ÷ ২৫৬ = ৬২,৫০০ টিক/স</text>
  <text class="lbl-sm" x="180" y="212">→ OCR1A = ৬২,৫০০ − ১ = ৬২,৪৯৯</text>
  <!-- prescaler choices -->
  <text class="lbl-sm" x="180" y="250">ভাগের পাল্লা: ১ · ৮ · ৬৪ · ২৫৬ · ১০২৪ — বড় সময় = বড় ভাগ</text>
</svg>
<div class="diag-cap">নগাড়া ভাগ করো (প্রি-স্কেলার) → গণতাকারী গোনো (TCNT) → নির্ধারিত সংখ্যায় মিল (OCR) → ডাক (ISR) → গণনা শূন্যে ফেরা (CTC) — সময়-পাহারার সম্পূর্ণ চক্র।</div>
</div>

<div class="dialogue">মুয়াজ ভাই ডেটাশিট-পাতা ঘুরিয়ে দেখালেন পাল্লার সারি — ১, ৮, ৬৪, ২৫৬, ১০২৪। "নগাড়া-ভাগ বেছে নেওয়া মানে ছাদ-ঠিক করা: খাড়া নগাড়ায় গণতাকারী ৪ মিলিসেকেন্ডেই ছাড়িয়ে পড়ে (৬৫,৫৩৫ ডিঙায়), ভাগ-২৫৬-এ সেকেন্ড হাতের মুঠায়। তুমি হিসাব করো — আমি চুপ।" তুমি ভাবলে, প্যাডে লিখলে: ১,৬০,০০,০০০ ÷ ২৫৬ = ৬২৫০০। "এবার?" "৬২৫০০-এক কম — ৬২৪৯৯!" — "কেন এক কম?" — "শূন্য... থেকে গোনা!" মুয়াজ ভাই হাসলেন — সেই হাসিতে বাবার ছায়া: "এই তো হিসাবি-পাতা। এখন কোডে বসাও।" তুমি OCR1A=62499 লিখলে; কম্পাইল-ফ্ল্যাশ; স্পিকারে ঠিক প্রতি সেকেন্ডে টোন — মিনারের RTC-র বাতির সাথে অক্ষরে-অক্ষরে মিল। দুই ঘড়ি, দুই জগৎ — এক হৃদস্পন্দন।</div>
<div class="dialogue en">Muaz turned the datasheet to the ladder row — 1, 8, 64, 256, 1024. "Choosing the drum-division is setting the ceiling: the fast drum overflows the counter in 4ms; divided by 256, seconds fit in your palm. You calculate — I stay quiet." You thought, wrote: 16,000,000 ÷ 256 = 62,500. "Now?" "One less — 62,499!" — "Why one less?" — "Counting... from zero!" He smiled — his father's shadow in it: "That's an accountant's page. Now seat it in code." You wrote OCR1A=62499; compile, flash; the speaker beeped exactly once a second — matching the RTC's light, beat for beat. Two clocks, two worlds — one heartbeat.</div>

<div class="code-block">সময়-পাহারার যন্ত্র — Timers in practice:

টাইমার-অভিধান:
  TCNTx — গণতাকারী (ওঠে প্রতি টিকে)
  Prescaler — নগাড়া-ভাগ (১/৮/৬৪/২৫৬/১০২৪)
  OCRxA — তুলনার সংখ্যা (ম্যাচ = ঘটনা)
  Overflow — ছাড়িয়ে-পড়া (৬৫৫৩৫→০, ডাক ওঠে)
  CTC — ম্যাচে গণনা শূন্যে (নিয়মিত পর্যায়ের রাজা)

CTC-এ ১-সেকেন্ড ডাক (১৬MHz, ÷২৫৬):
  TCCR1A = 0;                     // CTC-পতাকা TCCR1B-তে
  TCCR1B = (1&lt;&lt;WGM12) | (1&lt;&lt;CS12); // CTC + ভাগ-২৫৬
  OCR1A  = 62499;                 // ৬২৫০০−১ (শূন্য থেকে!)
  TIMSK1 = (1&lt;&lt;OCIE1A);           // ম্যাচ-ডাক চালু
  sei();
  ISR(TIMER1_COMPA_vect) { /* প্রতি সেকেন্ড এখানে */ }

হিসাব-সূত্র (মুখস্থ নয়, বের করো):
  tick = clock / prescaler
  টিক-সংখ্যা = লক্ষ্য-সময় × tick
  OCR = টিক-সংখ্যা − ১        (কেন −১? গোনা শুরু হয় ০ থেকে — ২৫০-টা
                              টিক পূর্ণ করতে গণনা যায় ০,১,২…২৪৯ পর্যন্ত,
                              অর্থাৎ ২৪৯-এ পৌঁছালেই ২৫০-তম টিক সম্পূর্ণ)
  ১ms @÷৬৪: ১,৬০,০০,০০০/৬৪ = ২,৫০,০০০/s
          → মানে ১ms = ২৫০ টিক → OCR=২৪৯

millis()-এর জন্ম (আর্দুইনো-ভিত্তি):
  Timer0 ÷৬৪, ৮-বিট → প্রথমে প্রি-স্কেলড-টিকের দৈর্ঘ্য বের করো:
    ৬৪/১৬,০০০,০০০ = ৪ns/টিক (প্রতি প্রি-স্কেল-ধাপ ৪ ন্যানোসেকেন্ড)
  ৮-বিট গণতাকারী ০-২৫৫ (মোট ২৫৬ ধাপ) ঘুরে ওভারফ্লো করে, তাই —
    ২৫৬ × ৬৪ / ১৬MHz = ১৬,৩৮৪ / ১৬,০০০,০০০ সেকেন্ড = ১০২৪ μs/ওভারফ্লো
  প্রতি-সেকেন্ডে ওভারফ্লো কতবার? ১,০০০,০০০ μs ÷ ১০২৪ μs ≈ ৯৭৬.৬ বার
  (অর্থাৎ সেকেন্ডে ≈৯৭৬.৬ বার — সংখ্যা দুটো গুলিয়ে ফেলো না)
  ১০২৪ μs ≠ ১০০০ μs — ফারাক বের করো: (১০২৪−১০০০)/১০০০ = ২৪/১০০০ = ২.৪%
  এই ২.৪% ফারাকই সংশোধন লাগে:
  → ISR-এ গণনা-সংশোধন → মিলিস-খাতা
  (তাই millis() ডাক-ভিত্তিক, লুপের বিলম্বে বাঁধা নয়;
   _delay_ms-এর মতো বসে-থাকা নয় — Door ৪-এর ঘুম-পাঠের রাজা)

RTC (ক্যালেন্ডার-হৃদয়):
  ৩২.৭৬৮kHz ক্রিস্টাল = ২^১৫ — কেন এই সংখ্যাই বেছে নেওয়া?
    ২^১৫ = ২×২×২×...( ১৫ বার) = ৩২,৭৬৮ — বাইনারি-কাউন্টার প্রতি ধাপে
    ঠিক অর্ধেক করে ভাগ করে, তাই ১৫ বার পরপর-২-ভাগ করলে
    ৩২,৭৬৮ ÷ ২ (১৫ বার) = ১ — কোনো ভগ্নাংশ-অবশিষ্ট থাকে না,
    সরল বাইনারি-ফ্লিপ-ফ্লপ চেইন দিয়েই ঠিক ১Hz বেরিয়ে আসে!
  DS3231: I2C-বাসে যুক্ত (দরজা ১৩-এর প্রথম চিঠি হবে ও-ই),
  কয়েন-ব্যাটারিতে বিদ্যুৎ-কাটায়ও চলে; তাপ-ক্ষতিপূরণসহ (±২ppm)

প্রহরী-কুকুর (watchdog):
  #include &lt;avr/wdt.h&gt;
  wdt_enable(WDTO_2S);   // ২ সেকেন্ডের কুকুর
  // মূল-লুপে নিয়মিত:
  wdt_reset();           // 'ঠেলা দাও' — দরবার বেঁচে আছে
  // আটকে গেলে ঠেলা আসে না → ২s পরে রিসেট-ঘণ্টা
  সতর্কতা: wdt_reset ভুলে গেলে 'নিজেরই' রিসেট-লুপ!
  বুটে-ডাবল-রিসেট ফাঁদ সাবধানে (bootloader-দরজায় পূর্ণ গল্প)

ঘুম-সময়-ডাকের ত্রয়ী (বছর-ব্যাটারির সূত্র):
  ঘুম (দরজা ৪) + টাইমার-ডাক (এ দরজা) + কুকুর-পাহারা
  = সেন্সর ঘুমায়, ওয়াক্তে জাগে, আটকালে নিজেই জাগে

  ── অন্য চিপে (ESP32-তে একই কাজ) ──────────
  esp_timer_start_periodic(h, 15*1000000ULL);
  // ৬৪-বিট μs-টাইমার; ঘুমেও চলে (RTC-টাইমার আলাদা)
  হিসাব-সূত্র অপরিবর্তিত: সময় × টিক-হার;
  বড় চিপে বড় গণতাকারী মানে শুধু পাল্লা বদল।

  ── নন-ব্লকিং স্টেট-মেশিন + millis()-রোলওভার ──────
  delay() আসলে ঘুম-নয়, মৃত্যু-অপেক্ষা। বাস্তব-ফার্মওয়্যারের
  মাঝ-স্তর (RTOS-এর আগে):
    enum St {IDLE, MEASURING, SENDING};
    St st = IDLE; unsigned long t0 = 0;
    loop() {
      switch (st) {
        case IDLE:      if (timeToMeasure()) { startADC(); t0 = millis(); st = MEASURING; } break;
        case MEASURING: if (adcDone()) { st = SENDING; } break;
        case SENDING:   if (sentOk())   { st = IDLE; }  break;
      }
      feedWatchdog();  // প্রতি-লুপে — ডেডলক-বিমা
    }
  রোলওভার-গণিত (৪৯.৭ দিনে unsigned long শূন্যে ফেরে):
    ভুল: if (millis() > t_last + interval)   // ফেরত-পথে আটকে
    ঠিক:  if ((long)(millis() - t_last) >= interval) // বিয়োগ-জাদু
    (হুবহু-বিয়োগে unsigned-মোড়ক নিজেই মোড়ানো-গণিত করে)
  আরও দুই পাহারা: malloc/String এড়াও (heap-খণ্ড);
    স্ট্যাক-গভীরতা মাপো (watermark) — উইচ-হান্টের দিন</div>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ রোলওভার-গ্রাসী</div><code>if (millis() &gt; t_last + interval)</code> — ৪৯.৭ দিনে গণতাকারী শূন্যে ফেরে; তখন <code>t_last + interval</code>-ও ভবিষ্যতের চেয়ে পেছনে, শর্ত আর কখনো মেলে না — কাজ চির-বন্ধ।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ বিয়োগ-জাদু</div><code>if ((long)(millis() - t_last) &gt;= interval)</code> — বিয়োগ unsigned-জগতে মোড়ানো-গণিতে নিজেই ঠিক পথে ফেরে; ঘুরপথের পার্থক্যও সঠিক বেরোয় — চক্র অটুট।</div>
</div>

<div class="dialogue">দুপুরের ছায়া মিনারের গা বেয়ে নামতে মুয়াজ ভাই বাবার ঘড়িটা বাক্সে তুললেন — যত্নে। "শেষ কথা: ওয়াক্ত শুধু গণনা হলে যন্ত্র হয়ে যায়; ওয়াক্ত পাহারা হলে জীবন হয়। কুরআন বলে — নামাজ সময়-নির্ধারিত (৪:১০৩); আর হাদিসে আছে, আল্লাহর কাছে সবচেয়ে প্রিয় আমল সে-যা নিয়মিত, অল্প হলেও (বুখারি-মুসলিমের বহুল-প্রচলিত অর্থ)। টাইমারও তাই: বিশাল কাজের বিস্ফোরণ নয় — নিয়মিত ছোট ডাক, বছরের পর বছর। তোমার ফার্মওয়্যারও ওভাবেই টিকবে: প্রতিটা কাজ ওয়াক্ত-পাওয়া, প্রতিটা ঘুম হিসাব-করা। কাল রুবেল ভাইয়ের কাছে যাও — আংশিক দান: PWM। আলো কেমন করে অর্ধেক জ্বলে, মোটর কেমন করে মাপা শক্তিতে ঘোরে — সব ওই 'হাত-পুরো-খুলো-না-পুরো-বন্ধ-না'-র গণিত।"</div>
<div class="dialogue en">As the noon shadow slid down the minaret, Muaz put the watch away in its box — carefully. "Last word: if waqt were mere counting it would be machinery; as keeping-watch it becomes life. The Quran says prayer is at fixed times (4:103); and there's a hadith — the deed most beloved to Allah is the one done consistently, even if small (the well-known sense from Bukhari and Muslim). So with timers: not the explosion of a giant task — regular small calls, year after year. That is how your firmware will survive too: every task on time, every sleep accounted for. Tomorrow, go to Rubel's — the partial gift: PWM. How a lamp burns at half, a motor turns at measured power — all the mathematics of 'neither hand fully open, nor fully closed.'"</div>



<div class="photo-frame"><img src="photos/d11-ds3231.jpg" alt="ডিজিটাল মাল্টিমিটার — কারিগরের স্টেথোস্কোপ"><div class="photo-cap">ডিজিটাল মাল্টিমিটার — কারিগরের স্টেথোস্কোপ · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — DS3231: RTC-চিপের শরীর-সারণি</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="40" y="30" width="220" height="170"/>
  <text class="lbl" x="150" y="56">DS3231 মডিউল</text>
  <text class="lbl-sm" x="150" y="82" font-size="10">±২ppm — বছরে ~১ মিনিট ভুল</text>
  <text class="lbl-sm" x="150" y="102" font-size="10">ভেতরে: ৩২.৭৬৮kHz ক্রিস্টাল</text>
  <text class="lbl-sm" x="150" y="122" font-size="10">+ তাপ-ক্ষতিপূরণ (TCXO)</text>
  <text class="lbl-sm" x="150" y="142" font-size="10">+ কয়েন-ব্যাটারি-ইনপুট</text>
  <text class="lbl-sm" x="150" y="162" font-size="10">I2C ঠিকানা 0x68</text>
  <rect class="cell-cyan" x="300" y="50" width="230" height="120"/>
  <text class="lbl-cyan" x="415" y="76">পা-সারণি</text>
  <text class="lbl-sm" x="415" y="100" font-size="10">VCC · GND · SDA · SCL</text>
  <text class="lbl-sm" x="415" y="122" font-size="10">SQW = সেকেন্ড-পালস-আউটপুট</text>
  <text class="lbl-sm" x="415" y="144" font-size="10">(১Hz-হার্টবিট — দরজা-শুরুর বাতি!)</text>
  <text class="lbl-left" x="55" y="222" font-size="10">ব্যবহার: জামাত-ওয়াক্তের হিসাব, লগ-টাইমস্ট্যাম্প, জাগরণ-অ্যালার্ম</text>
</svg>
<div class="diag-cap">RTC-র রাজা-চিপ: ক্যালেন্ডার+ঘড়ি+তাপ-সংশোধন এক শরীরে; মূল-বিদ্যুৎ গেলে কয়েন-ব্যাটারি সময় বহন করে — শহর ঘুমালেও ওয়াক্ত-খাতা জেগে।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — মিলিস-সময়চেয়ে: নন-ব্লকিং বহু-কাজ</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <line class="axis" x1="50" y1="40" x2="50" y2="200"/>
  <line class="axis" x1="50" y1="200" x2="530" y2="200"/>
  <rect class="cell-cyan" x="50" y="50" width="96" height="26"/>
  <rect class="cell-cyan" x="162" y="50" width="96" height="26"/>
  <rect class="cell-cyan" x="274" y="50" width="96" height="26"/>
  <rect class="cell-cyan" x="386" y="50" width="96" height="26"/>
  <text class="lbl-cyan" x="265" y="40" font-size="10">কাজ-ক: প্রতি ১০০ms (সেন্সর-পাঠ)</text>
  <rect class="cell-hot" x="50" y="100" width="240" height="26"/>
  <rect class="cell-hot" x="340" y="100" width="190" height="26"/>
  <text class="lbl-hot" x="265" y="92" font-size="10">কাজ-খ: প্রতি ৫০০ms (রিপোর্ট)</text>
  <text class="lbl" x="290" y="160" font-size="10">উভয় একই লুপে নন-ব্লকিংভাবে — delay() নেই</text>
  <rect class="cell" x="100" y="172" width="360" height="34"/>
  <text class="lbl-sm" x="280" y="190" font-size="10">if (millis()-t_a ≥ ১০০) {…} · if (millis()-t_b ≥ ৫০০) {…}</text>
</svg>
<div class="diag-cap">এক MCU-তে দুই ছন্দ একসাথে: প্রত্যেক কাজ নিজের শেষ-সময় মনে রাখে, লুপ ছুটে যায় — বসে-থাকা delay-এর বদলে সময়-চেয়ে-কাজ; দরজা ১১-এর বাস্তব-ফল।</div>
</div>

<div class="verse">
<div class="verse-arabic">إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا</div>
<div class="verse-translation">নিশ্চয়ই নামাজ মুমিনদের ওপর নির্ধারিত সময়ে ফরজ।</div>
<div class="verse-ref">— কুরআন ৪:১০৩</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 11 — ওয়াক্ত-ঘণ্টি — ১০-মিনিটের ছন্দ:</strong> টাইমার-CTC-এ ৬০০s-ডাক বসালাম: প্রি-স্কেলার-গণিত খাতায়, OCR-এ সংখ্যা, ডাক-দরজায় পাঠ-ফাংশন। <strong>যোগ:</strong> watchdog ৮s — ফার্মওয়্যার আটকলে নিজে-জাগরণ; আর মিলিস-বিকল্প তুলনায়: ঘুম-সামঞ্জস্যে ডাক-ভিত্তিই জিতলো (μA-বাজেট)। শহর এখন নিজের ওয়াক্ত জানে।</div></div>
<div class="secret-box"><div class="label">দরজা ১১ — রহস্য</div><div class="text">⏱️ সময় মানে গণনা: নগাড়া ভাগ করো, গোনো, নির্দিষ্ট সংখ্যায় ডাক দাও — আর দরবার-পতনের বীমা: প্রহরী-কুকুর।<br><small>OCR = clock÷prescaler×সময় − ১; CTC-নিয়মিত পর্যায়; RTC=৩২.৭৬৮kHz; WDT-রিসেট-ঘণ্টা। ওয়াক্ত: ৪:১০৩।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>হিসাব-সূত্র নিজে-বের-করা:</strong> যেকোনো সময়-প্রি-স্কেল জোড়ায় OCR বসাতে পারা (১০ms@÷৮ কত?) — মুখস্থ-তালিকা নয়, ভাগ-শূন্য-থেকে-গোনার বুদ্ধি।</li>
<li><strong>চার-মোডের নাম-চেনা:</strong> Normal-ওভারফ্লো, CTC (নিয়মিত ডাক), Fast-PWM (পরের দরজা), Input-Capture (পালস মাপা) — প্রতিটার এক-লাইন ব্যবহার।</li>
<li><strong>millis()-এর পেছন-জগৎ:</strong> বসে-থাকা delay বনাম ডাক-ভিত্তিক খাতা — কোন প্রজেক্টে কোনটা, এখন সিদ্ধান্ত দিতে পারবে।</li>
<li><strong>RTC-সংযোগ-প্রস্তুতি:</strong> DS3231 আসবে I2C-তে (দরজা ১৩) — আজ ঠিকানা-ধারণা, কাল প্রথম চিঠি।</li>
<li><strong>watchdog-শৃঙ্খলা:</strong> enable→reset-প্যাটার্ন ও তার ফাঁদ (নিজের-রিসেট-লুপ) — ফিল্ড-বীমার সাথে দায়িত্ব।</li>
<li><strong>সেতু — দরজা ১২:</strong> টাইমারের গণনা শুধু সময় গোনে না — একই হার্ডওয়্যার সামান্য মোড বদলে বানিয়ে ফেলে PWM, ডিজিটাল পিন দিয়ে অ্যানালগ-অনুভূতি। পরের দরজায় সেই কৌশল, আর তার উল্টো পথ — ADC, অ্যানালগ পড়ে ডিজিটাল সংখ্যায়।</li>
</ul>`
  }
});

// ── DOOR 12: আংশিক দান (PWM & ADC — THE ANALOG BRIDGE) ──
doors.push({
  num:12, icon:"🌗", color:"#fb7185", name:"আংশিক দান",
  subtitle:"The Partial Gift", tech:"PWM Duty Cycle, LED Dimming & Motor Speed, ADC Sampling/Resolution/Reference, AnalogRead Deep-Dive",
  spirit:"ইনফাকের মিজান — হাত পুরো খুলো না, পুরো বন্ধও না; মাপা অংশে দাও (১৭:২৯)",
  secret:"ডিজিটাল হাত অ্যানালগ জগতে দুই সেতুতে যায়: PWM-এ শক্তি দেয় মাপা-অংশে, ADC-তে অ্যানালগ পড়ে মাপা-সংখ্যায় — দুই-ই গণনা, জাদু নয়।",
  recall:{
    q:"PWM-এ 'অর্ধেক আলো' মানে ভোল্টেজ অর্ধেক নয় — তাহলে কী? আর ১০-বিট ADC-তে ৩.৩V-এর সেন্সর-ভোল্টেজ ২.৫V পড়লে সংখ্যা কত?",
    qen:"In PWM, 'half brightness' isn't half voltage — what is it? And a 10-bit ADC reading 2.5V on a 3.3V reference gives what number?",
    a:"PWM (Pulse-Width Modulation): পিন সবসময় পুরো HIGH বা পুরো LOW — কিন্তু সময়-ভাগে মাপা: duty cycle = HIGH-সময়ের ভগ্নাংশ। ৫০% duty মানে প্রতি পর্যায়ে অর্ধেক সময় পুরো-চালু, অর্ধেক পুরো-বন্ধ — LED/মোটর এত দ্রুত দোলে যে চোখ/জড়তা গড় অনুভব করে: গড় শক্তি ≈ duty × পুরো। তাই 'অর্ধেক আলো' = ৫০%-HIGH-সময়, ভোল্টেজ-অর্ধেক নয় (দ্রুত-সুইচিং ডিজিটালে লিনিয়ার-অ্যানালগের কাজ; ট্রানজিস্টর স্যাচুরেশনে দক্ষ, তাপ-সাশ্রয়ী)। মোটরে একই: জড়তা (Door ২-এর L!) গড় মেনে নেয়; বাজারের servo ঠিক এই পালস-প্রস্থ পড়ে (১ms-২ms) কোণ ঠিক করে। ADC (Analog-to-Digital Converter): উল্টো সেতু — ভোল্টেজকে সংখ্যায়। ১০-বিট = ২^১০=১০২৪ ধাপ (কোড ০ থেকে ১০২৩ পর্যন্ত — মোট ১০২৪-টা সংখ্যা, কিন্তু সর্বোচ্চ কোড ১০২৩-ই); Vref=৩.৩V হলে ধাপ = ৩.৩/১০২৪ ≈ ৩.২২mV। ২.৫V → ২.৫÷৩.২২mV ≈ ৭৭৬ (আসলে ২.৫/৩.৩×১০২৩ ≈ ৭৭৫ — দুই পথের ফারাক এই ১০২৪-বনাম-১০২৩-এই, ব্যবহারিক-ভাবে উপেক্ষণীয়)। রেজোলিউশন ধাপ-সংখ্যা (৮/১০/১২-বিট), Vref মাপ-কাঠির পুরো দৈর্ঘ্য। Nyquist-সতর্কতা: স্যাম্পল-হার সংকেতের সর্বোচ্চ কম্পনাংকের অন্তত দ্বিগুণ, নইলে ভুল-ছদ্মবেশ (aliasing)। হিসাবটা সরল গুণ — ধরো সংকেতের সর্বোচ্চ কম্পাঙ্ক ৫০Hz, তাহলে ন্যূনতম নমুনা-হার = ২ × ৫০Hz = ১০০ নমুনা/সেকেন্ড; এর কম নমুনা নিলে দ্রুত-দোলন ধীর-দোলনের ছদ্মবেশে ধরা পড়ে। ADC-পাঠে সবসময় ডিভাইডার-সেতু (Door ৬: LDR+রেজিস্টর) মনে রেখো — সেন্সর-রেজিস্টর বদলায়, ডিভাইডার ভোল্টেজ বদলায়, ADC সংখ্যায় পড়ে।",
    aen:"PWM: pin is fully HIGH or LOW; duty cycle is the HIGH fraction — loads average it (50% duty ≈ half power; motor inertia, servo 1-2ms pulses). ADC: the reverse bridge; 10-bit = 1024 steps; 2.5V on 3.3V ref → 2.5/3.3×1023 ≈ 775. Nyquist: sample at least twice the signal's highest frequency."
  },
  story:`
<p class="scene-setting">দ্বাদশ দরজা। কারিগরখানার পাশের গুদাম-ঘর — রুবেল ভাইয়ের মোটর-মেরামতি আসর: মেঝেতে সারি-সারি ফ্যান-মোটর, পানির পাম্প, সিলিং-ফ্যানের ব্লেড; টেবিলে ভাইন্ডিং-মেশিন, মাল্টিমিটার, আর একটা ডিম-মোটর (ছোট্ট ডিসি-মোটর) তার-সহ খোলা অবস্থায় পড়ে আছে। রুবেল ভাই — চল্লিশ-ছুঁইছুঁই, পেশিবল হাত, গায়ে তেল-মাখা হাফ-শার্ট, আর তাঁর সিগনেচার: ডান কানের পেছনে সবসময় একটা পেন্সিল, আর কব্জি-ঘড়ির কাচে আঁকা ছোট্ট পাখা-চিহ্ন — মোটর ঘুরতে দেখলেই তাঁর নিজের ঘড়ির দিকে চোখ যায়, যেন দুই ঘুরন্ত জিনিস কথা বলছে। গন্ধ — তেল, তামার-তারের ঝাঁঝ, পুরনো ভার্নিশ। শব্দ — ভাইন্ডিং-মেশিনের গর্জন, পরীক্ষা-মোটরের হুম-হুম, দূরে রেডিও।</p>
<p class="scene-setting en">The twelfth door. The storeroom beside the workshop — Rubel's motor-repair den: rows of fan motors, water pumps, ceiling-fan blades on the floor; a winding machine, a multimeter, and a small egg-motor (tiny DC motor) lying opened with wires. Rubel — mid-forties, muscular hands, oil-streaked half-shirt, and his signature: a pencil always behind his right ear and a tiny fan-blade drawn on his watch-glass — whenever a motor spins, his eyes go to his own watch, as if two turning things were conversing. Oil, copper-wire bite, old varnish; the winding machine's growl, test-motors humming, a radio far off.</p>

<div class="dialogue">তুমি গুদামে ঢুকলে রুবেল ভাই ঠিক একটা ফ্যান-মোটরের ব্লেড ভারসাম্যে বসাচ্ছিলেন। পেন্সিল কান থেকে নামিয়ে খড়ি-দাগে ব্লেড চিহ্নিত করলেন। "মুয়াজ ভাইয়ের ওয়াক্ত-গণনা শিখে এসেছ?"
"জি — OCR-এ সংখ্যা বসাই, সেকেন্ড-ডাক পাই।"
"তাহলে আজ সেই গণনার রসদ-দরজা।" তিনি ডিম-মোটরটা তুলে ধরলেন, তারে ব্যাটারি ছুঁইয়ে দিলেন — মোটর এক ঝটকায় পুরো গতিতে ঘুরলো; তার খুললেন — থেমে গেল। "দেখলে? দুই অবস্থা — পুরো চালু, পুরো বন্ধ। এই মোটরকে আমি যদি বলি 'অর্ধেক ঘোরো' — কী করব?" তুমি ভাবলে: "ভোল্টেজ... অর্ধেক দিলে?" তিনি হাসলেন: "চিপের হাতে অর্ধেক-ভোল্টেজ নেই রে! চিপ জানে দুই কথা — পুরো আছে, পুরো নেই। আজ শিখবে কীভাবে এই দুই-কথার জগৎ থেকে অর্ধেক-ঘোরা বেরোয়। আর উল্টোটাও — পাখার হাওয়া, পানির ভেজা, ঘরের তাপ: যেসব জিনিস ধারাবাহিক, সেগুলোকে কীভাবে চিপ পড়ে সংখ্যায়।"</div>
<div class="dialogue en">You entered as Rubel was balancing a fan-motor's blade. He took the pencil from his ear and marked the blade with chalk. "Learned Muaz's time-reckoning?"
"Yes — numbers into OCR, seconds out."
"Then today's door: how to ration that count." He held up the egg-motor, touched the battery to its wires — it spun full-speed; disconnected — stopped. "See? Two states — fully on, fully off. If I tell this motor 'turn at half' — what do I do?" You thought: "Half... voltage?" He laughed: "The chip's hand has no half-voltage! It knows two words — fully present, fully absent. Today you'll learn how half-speed emerges from that two-word world. And the reverse — the breeze of a fan, the dampness of water, the heat of a room: the continuous things, and how a chip reads them as numbers."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতা আগে:</strong> রুবেল ভাইয়ের প্রথম 'স্মার্ট-পাখা' মরসুম — গ্রাহক চেয়েছিল ধীর-গতি। সে ভোল্টেজ-ডিভাইডার দিয়ে 'অর্ধেক ভোল্টেজ' বানাল (রেজিস্টরে অর্ধেক শক্তি তাপে খোয়ানো!) — রেজিস্টার গরম, মোটর দুর্বল, দক্ষতা ভয়ানক। তারপর ভাইন্ডিং-যুগের পুরনো কৌশল মনে পড়ল — সিরিজ-রেজিস্টর (তাপে-বায়না) নয়, <strong>দ্রুত চালু-বন্ধ (সুইচিং)</strong>: ট্রানজিস্টর স্যাচুরেশনে প্রায়-শূন্য ক্ষতি, শক্তি যায় মোটরেই। <strong>অ্যানালগ-ভাগ (linear) মানে তাপে-বায়না; ডিজিটাল-ভাগ (PWM) মানে সময়ে-ভাগ — ইঞ্জিনিয়ারিং-ইতিহাসের এক বড় ধাপ।</strong></div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">Duty%</div><div class="sc-label">HIGH-সময়ের ভগ্নাংশ — গড় শক্তির মাপক (২৫/৫০/৭৫%)</div></div>
<div class="stat-card"><div class="sc-num">২^১০</div><div class="sc-label">১০-বিট ADC = ১০২৪ ধাপ — প্রতি ধাপ ৩.২mV (৩.৩V-রেফে)</div></div>
<div class="stat-card"><div class="sc-num">≈৭৭৫</div><div class="sc-label">২.৫V @৩.৩V-রেফে ১০-বিট পাঠ — ২.৫/৩.৩×১০২৩</div></div>
<div class="stat-card"><div class="sc-num">২×f</div><div class="sc-label">Nyquist — স্যাম্পল-হার কম্পনার অন্তত দ্বিগুণ, নইলে ভুল</div></div>
</div>

<div class="diagram">
<div class="diag-title">দুই সেতু — PWM-তরঙ্গ ও ADC-স্কেল</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <text class="lbl" x="290" y="22" font-size="12">PWM — সময়-অক্ষে দৃশ্যমান duty</text>
  <path class="wire-hot" d="M 100 74 L 100 40 L 140.0 40 L 140.0 74 L 260 74 L 260 40 L 300.0 40 L 300.0 74 L 420 74 L 420 40 L 460.0 40 L 460.0 74 L 580 74" fill="none"/>
<text class="lbl-left" x="30" y="62" font-size="11">২৫%</text>
<line class="grid-line" x1="260" y1="82" x2="260" y2="98" stroke-dasharray="2,3"/>
<line class="grid-line" x1="100" y1="82" x2="100" y2="98" stroke-dasharray="2,3"/>
<text class="lbl-sm" x="180.0" y="96" font-size="10">T = পর্যায়</text>

  <path class="wire-cyan" d="M 100 144 L 100 110 L 180.0 110 L 180.0 144 L 260 144 L 260 110 L 340.0 110 L 340.0 144 L 420 144 L 420 110 L 500.0 110 L 500.0 144 L 580 144" fill="none"/>
<text class="lbl-left" x="30" y="132" font-size="11">৫০%</text>
<line class="grid-line" x1="260" y1="152" x2="260" y2="168" stroke-dasharray="2,3"/>
<line class="grid-line" x1="100" y1="152" x2="100" y2="168" stroke-dasharray="2,3"/>
<text class="lbl-sm" x="180.0" y="166" font-size="10">T = পর্যায়</text>

  <path class="wire" d="M 100 214 L 100 180 L 220.0 180 L 220.0 214 L 260 214 L 260 180 L 380.0 180 L 380.0 214 L 420 214 L 420 180 L 540.0 180 L 540.0 214 L 580 214" fill="none"/>
<text class="lbl-left" x="30" y="202" font-size="11">৭৫%</text>
<line class="grid-line" x1="260" y1="222" x2="260" y2="238" stroke-dasharray="2,3"/>
<line class="grid-line" x1="100" y1="222" x2="100" y2="238" stroke-dasharray="2,3"/>

  <text class="lbl-sm" x="290" y="237" font-size="9">উঁচু = পুরো-শক্তি; গড় ≈ duty% — LED/মোটর গড়টাই অনুভব করে</text>
</svg>
<div class="diag-cap">PWM-এ ডিজিটাল-হাত মাপা-অংশে শক্তি দেয় (উপরে: ২৫% ও ৫০%-এর পালস-চিত্র); ADC-তে অ্যানালগ-জগৎ মাপা-সংখ্যায় ঢোকে (ডানে: ৩.৩V-স্কেলে ২.৫V→৭৭৫) — ইনফাকের মিজান: পুরো নয়, শূন্য নয়, মাপা অংশ।</div>
</div>

<div class="dialogue">রুবেল ভাই তোমার হাতে দুটো কাজ দিলেন। প্রথমটা — বোর্ডে PWM-পিনে ডিম-মোটর: analogWrite(pin, 64) (২৫% of ২৫৫) — মোটর ফিসফিস করে ধীরে ঘুরলো; 128 (৫০%) — মাঝ-গতি; 255 — তাঁর ব্যাটারি-দেখানো পুরো-দৌড়। "দেখলে — তোমার দুই-কথার হাত এখন হাজার কথা বলে!" দ্বিতীয়টা — তাপ-সেন্সরের ডিভাইডার-তার ADC-পিনে: analogRead() ফেরত দিল ৪১০। তুমি হিসাব করলে: প্রথমে কাঁচা-সংখ্যাকে ভগ্নাংশে আনো — ৪১০ ÷ ১০২৩ ≈ ০.৪০; তারপর মাপ-কাঠির (Vref) সাথে গুণ করো — ০.৪০ × ৩.৩V ≈ ১.৩২V; সেন্সরের খাতা মিলিয়ে — তাপ ≈ ২৮°C। রুবেল ভাই পেন্সিল কানে গুঁজে বললেন: "আজ থেকে তোমার চিপ দেখতে পায় (ADC) আর মাপা-শক্তিতে ছোঁয় (PWM)। দুনিয়ার সাথে তার দুই-মুখো সম্পর্ক পূর্ণ।"</div>
<div class="dialogue en">Rubel set you two tasks. First — the egg-motor on a PWM pin: analogWrite(pin, 64) (25% of 255) — it whirred slowly; 128 — mid; 255 — the full sprint his battery had shown. "See — your two-word hand now speaks a thousand!" Second — the temp-sensor's divider into an ADC pin: analogRead() returned 410. You computed: 410 ÷ 1023 × 3.3 ≈ 1.32V; against the sensor's chart — ≈ 28°C. Rubel tucked the pencil back: "From today your chip sees (ADC) and touches with measured power (PWM). Its two-way relationship with the world is complete."</div>

<div class="code-block">দুই সেতুর হাতে-কোড — PWM & ADC:

PWM (আর্দুইনো-স্তর — analogWrite):
  analogWrite(9, 64);    // ~২৫% (০-২৫৫ পাল্লা)
  analogWrite(9, 128);   // ৫০%
  analogWrite(9, 255);   // ১০০%
  নোট: analogWrite-এর 'অ্যানালগ' নামটি মিথ্যা-সোনা —
  ভেতরে PWM; পিন-চিহ্ন (~) বোর্ডে ও-ই বলে

PWM (bare-metal AVR — Timer0 Fast-PWM):
  DDRD |= (1&lt;&lt;6);                 // OC0A পিন-আউটপুট
  TCCR0A = (1&lt;&lt;COM0A1) | (1&lt;&lt;WGM00) | (1&lt;&lt;WGM01);
  TCCR0B = (1&lt;&lt;CS01);              // ÷৮ → ১৬MHz/(৮×২৫৬) = ৭.৮kHz
  // ফ্রিকোয়েন্সি-সূত্র: f = clock / (prescaler × ২৫৬)   [Fast PWM]
  //   ধাপে-ধাপে: প্রথমে হর বানাও — প্রি-স্কেলার × ২৫৬-ধাপ = ৮×২৫৬ = ২০৪৮
  //   তারপর ভাগ করো — ১৬,০০০,০০০ ÷ ২০৪৮ = ৭৮১২.৫Hz ≈ ৭.৮kHz
  // ফেজ-কারেক্ট মোডে (WGM01 বাদ) গণনা ওঠে-নামে → ৫১০ ধাপ (উপরে ২৫৫
  //   পর্যন্ত উঠে আবার ০-এ নামে, তাই কার্যত দ্বিগুণ-প্রায় গণনা-দৈর্ঘ্য)
  //   হর = ৮×৫১০ = ৪০৮০ → ১৬,০০০,০০০ ÷ ৪০৮০ = ৩৯২১.৬Hz ≈ ৩.৯kHz
  //   মোটরে এই মোড বেশি শান্ত (তরঙ্গ-প্রতিসাম্য বলে হারমনিক কম)
  OCR0A  = 64;                     // duty ≈ ৬৪/২৫৫
  // WGM-বিট-জোড়াই মোড-নির্বাচক (CTC-এর ভাই, দরজা ১১!)

সার্ভো-বিশেষ (পালস-প্রস্থ-ভাষা):
  প্রতি ২০ms-এ ১ms-২ms পালস → কোণ ০°-১৮০°
  (duty-ভাষার আরেক উপভাষা — মোটর-দুনিয়ার এস্পেরান্তো)

ADC (আর্দুইনো):
  int raw = analogRead(A0);        // ০…১০২৩ (১০-বিট)
  float v  = raw * 5.0 / 1023.0;   // ভোল্টেজে (Vref-মতো)
  // ৩.৩V-বোর্ডে ৩.৩ বসাও — মাপ-কাঠি মিলাও!

ADC (bare-metal AVR — এককালের পূর্ণ নামাবলি):
  ADMUX  = (1&lt;&lt;REFS0);             // Vref=AVcc, চ্যানেল ০
  ADCSRA = (1&lt;&lt;ADEN) | (1&lt;&lt;ADPS2) | (1&lt;&lt;ADPS1) | (1&lt;&lt;ADPS0);
                                   // চালু + ÷১২৮ → ১৬MHz/১২৮ = ১২৫kHz
                                   // (ডেটাশিট: পূর্ণ ১০-বিট নির্ভুলতার
                                   //  জন্য ADC-ঘড়ি ৫০–২০০kHz-এর মধ্যে;
                                   //  ÷৬৪ দিলে ২৫০kHz — সীমা ছাড়ায়!)
  ADCSRA |= (1&lt;&lt;ADSC);             // রওনা দাও
  while (ADCSRA &amp; (1&lt;&lt;ADSC));      // অনুবাদ শেষ-হওয়ার ডাক
  int raw = ADC;                   // ১০-বিট খাতা

ADC-হাতিয়ারের থলি:
  রেজোলিউশন: ৮/১০/১২-বিট — ধাপ-সংখ্যা ২^বিট
    (২^৮=২৫৬ ধাপ, ২^১০=১০২৪ ধাপ, ২^১২=৪০৯৬ ধাপ — বিট যত বাড়ে,
     সিঁড়ির ধাপ তত মিহি হয়, প্রতি-ধাপের ভোল্টেজ তত ছোট)
  Vref-নির্বাচন: AVcc/১.১V-অভ্যন্তরীণ/বাইরের —
    ছোট সংকেত? ছোট-কাঠি (১.১V) মানে সূক্ষ্মতা বাড়ে
  গড়-নেওয়া: ১০-পাঠের গড় — শব্দ কমে (ডিজিটাল-ফিল্টারের পূর্বপুরুষ)
  উৎস-রোধ: সেন্সর-ডিভাইডারের R খুব বড় হলে নমুনা-ধারক-ধারণ-
    ক্ষমতা (S/H cap) ভরতে বেশি সময় — পাঠ কাঁপে; গড় বা বাফার

সতর্কতা-জোড়া:
  ADC-ইনপুট কখনো Vref-ঊর্ধ্ব নয় (পিন-পোড়ার ঝুঁকি)
  PWM-ফ্রিকোয়েন্সি: শ্রবণ-সীমায় (≈৪৯০Hz) মোটরে 'হুঁ-হুঁ' শব্দ —
    ঊর্ধ্বে তুলো (÷১ prescale ~৩১kHz), অথবা শব্দ মেনে নাও

  ── অন্য চিপে (ESP32-তে একই কাজ) ──────────
  adc_oneshot_read(h, ADC_CHANNEL_0, &raw);
  // ১২-বিট: ০…৪০৯৫; attenuation দিয়ে পাল্লা বাছো
  PWM: ledcSetup/ledcWrite (LEDC-চ্যানেল)
  সতর্ক: ADC2-গুচ্ছ WiFi চলাকালে ব্যস্ত —
  সেন্সর ADC1-এ: বেঞ্চে ভালো, মাঠে ফাঁদ!

  ── অপ-অ্যাম্প-সেতু: বাফার কেন বাঁচায় ──────
  সেন্সর-ডিভাইডার (R_th বড়) → ADC (খিদার) মাঝে
  ভোল্টেজ-ফলোয়ার বসালে:
    ভেতরে-ইনপুট = প্রায় অসীম-রোধ → ডিভাইডার অক্ষত
    ভেতরে-আউটপুট = প্রায় শূন্য-রোধ → ADC তৃপ্ত
    V_out = V_in × ১ (গেইন-এক, কিন্তু রোধ-বদল দশ-গুণ)
  TLV9021-জাতি: রেল-টু-রেল, এক-সাপ্লাই ৩.৩V — IoT-বন্ধু
  বোনাস-দুই: নন-ইনভার্টিং গেইন (১+Rf/Rg) ক্ষুদ্র-সংকেত
  বড় করে; RC-লো-পাস (anti-alias) Nyquist-এর আগে-প্রহরী</div>

<div class="dialogue">সন্ধ্যায় গুদাম-বন্ধ করতে করতে রুবেল ভাই বললেন: "এই দরজাটা আমার কাছে দানের দরজা। কুরআনে আছে — হাত গলায় বেঁধে রেখো না (কৃপণতা), পুরো খুলেও দিয়ো না (অপচয়) (১৭:২৯)। বিদ্যুৎ-দুনিয়ায় আমি এর চেয়ে নিখুঁত উপমা পাইনি: PWM পুরো-খোলা নয়, পুরো-বন্ধ নয় — মাপা অংশে দেয়; প্রকৃতির পাখাও তাই, শ্বাসও তাই, বৃষ্টিও তাই। আর ADC উল্টো পাঠ — দুনিয়ার অগণন-ধারাবাহিক দান তুমি কত-টুকু নিলে সেটাও মাপা সংখ্যায় জানো। যে ব্যবস্থা দেয়-নেয় দুই-ই মাপে, সে-ই মিজানে চলে। কাল হাসান সাহেবের কাছে যাও — পোস্টমাস্টার; এখন দেশের সবচেয়ে সুন্দর প্রয়োগ-দরজা: সুলাইমান-আলাইহিস-সালামের পত্রের মতো চিপে-চিপে চিঠি — UART, SPI, I2C।"</div>
<div class="dialogue en">Closing the storeroom at dusk, Rubel said: "To me this is the door of giving. The Quran says — neither chain your hand to your neck (miserliness), nor stretch it fully open (waste) (17:29). In the electrical world I've found no truer image: PWM is neither fully open nor fully shut — it gives in measured part; so does the breeze through a fan, so does breath, so does rain. And ADC is the reverse reading — how much of the world's countless, ongoing gifts you took — that too, now known to you as a measured number. A system that measures both giving and receiving walks on the mizan. Tomorrow, go to Hasan the postmaster — now the loveliest applied door of all: chip-to-chip letters, like Sulaiman's messenger letters — UART, SPI, I2C."</div>



<div class="photo-frame"><img src="photos/d12-rgb.jpg" alt="ছোট তিন-রঙের RGB LED — Wikimedia Commons"><div class="photo-cap">ছোট তিন-রঙের RGB LED — Wikimedia Commons · ছবি: Wikimedia Commons (মুক্ত লাইসেন্স)</div></div>

<div class="diagram">
<div class="diag-title">কম্পোনেন্ট-চেনা — সেন্সর-পরিবার: যাদের ADC পড়ে</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="30" y="36" width="120" height="80"/>
  <text class="lbl" x="90" y="60">থার্মিস্টর</text>
  <text class="lbl-sm" x="90" y="80" font-size="10">তাপ↑ → রোধ↓ (NTC)</text>
  <text class="lbl-sm" x="90" y="98" font-size="10">ডিভাইডার-সহ তাপমাত্রা</text>
  <rect class="cell-cyan" x="170" y="36" width="120" height="80"/>
  <text class="lbl-cyan" x="230" y="60">LDR</text>
  <text class="lbl-sm" x="230" y="80" font-size="10">আলো↑ → রোধ↓</text>
  <text class="lbl-sm" x="230" y="98" font-size="10">রাত-বাতি/আলো-মাপ</text>
  <rect class="cell-hot" x="310" y="36" width="110" height="80"/>
  <text class="lbl-hot" x="365" y="60">ভোল্টেজ-</text>
  <text class="lbl-hot" x="365" y="76">সেন্সর</text>
  <text class="lbl-sm" x="365" y="98" font-size="10">ব্যাটারি-নাড়ি পড়া</text>
  <rect class="cell" x="440" y="36" width="100" height="80"/>
  <text class="lbl" x="490" y="60">পট</text>
  <text class="lbl-sm" x="490" y="80" font-size="10">ঘোরানো-ভোল্টেজ</text>
  <text class="lbl-sm" x="490" y="98" font-size="10">ভলিউম/সেট-পয়েন্ট</text>
  <rect class="cell" x="30" y="150" width="510" height="60"/>
  <text class="lbl-sm" x="285" y="164" font-size="10">সবাই ডিভাইডার-সেতুতে (দরজা ৬) বসে ADC-পিনে পৌঁছায়</text>
  <text class="lbl-sm" x="285" y="177" font-size="10">রোধ/ভোল্টেজ → সংখ্যা → খাতা → একক</text>
  <text class="lbl-sm" x="285" y="192" font-size="10">বিশেষ-জাত: DHT22 (ডিজিটাল-প্রোটোকল), MPU6050 (I2C) — তারা চিঠি-পথে কথা বলে (দরজা ১৩)</text>
</svg>
<div class="diag-cap">অ্যানালগ-জগতের প্রতিনিধিরা: তাপ, আলো, ভোল্টেজ, ঘূর্ণন — চার-ই রোধ-বা-ভোল্টেজ বদলে ডিভাইডার-সেতু পার হয়ে ADC-র সংখ্যায় যায়; ডিজিটাল-জাত সরাসরি চিঠিতে।</div>
</div>

<div class="diagram">
<div class="diag-title">বাস্তব দৃশ্য — RGB-LED মিক্সার ও ফ্যান-থ্রটল</div>
<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-cyan" x="26" y="60" width="94" height="110" rx="8"/>
  <text class="lbl-cyan" x="73" y="80">MCU</text>
  <text class="lbl-sm" x="73" y="100">PWM ×৩</text>
  <text class="lbl-sm lbl-right" x="112" y="122">~৯</text>
  <text class="lbl-sm lbl-right" x="112" y="142">~১০</text>
  <text class="lbl-sm lbl-right" x="112" y="162">~১১</text>
  <path class="wire" d="M120 122 H150"/><path class="wire" d="M120 142 H150"/><path class="wire" d="M120 162 H150"/>
  <use class="sym" href="#sym-r" transform="translate(150,122)"/>
  <use class="sym" href="#sym-r" transform="translate(150,142)"/>
  <use class="sym" href="#sym-r" transform="translate(150,162)"/>
  <text class="lbl-sm lbl-left" x="146" y="106">২২০Ω ×৩</text>
  <path class="wire" d="M190 122 H222"/><path class="wire" d="M190 142 H222"/><path class="wire" d="M190 162 H222"/>
  <use class="sym sym-hot" href="#sym-led" transform="translate(222,122)"/>
  <use class="sym sym-leaf" href="#sym-led" transform="translate(222,142)"/>
  <use class="sym sym-cyan" href="#sym-led" transform="translate(222,162)"/>
  <text class="lbl-hot" x="262" y="118">R</text>
  <text class="lbl-sm" x="262" y="138">G</text>
  <text class="lbl-sm" x="262" y="158">B</text>
  <path class="wire" d="M252 122 H276 V162 M252 142 H276 M252 162 H276 V200"/>
  <use class="sym sym-dim" href="#sym-dot" transform="translate(276,142)"/>
  <use class="sym sym-dim" href="#sym-dot" transform="translate(276,162)"/>
  <use class="sym sym-dim" href="#sym-gnd" transform="translate(276,200)"/>
  <text class="lbl-sm" x="276" y="230">সাধারণ ক্যাথোড</text>
  <path class="seq-line" d="M330 30 V240"/>
  <use class="sym sym-dim" href="#sym-vcc" transform="translate(430,36)"/>
  <text class="lbl-sm" x="430" y="20">+১২V</text>
  <path class="wire" d="M430 36 V58"/>
  <use class="sym sym-cyan" href="#sym-l-core" transform="translate(430,58) rotate(90)"/>
  <text class="lbl-cyan" x="470" y="52">ফ্যান-মোটর</text>
  <path class="wire" d="M430 98 V126"/>
  <use class="sym sym-dim" href="#sym-dot" transform="translate(430,126)"/>
  <use class="sym sym-hot" href="#sym-d" transform="translate(500,126) rotate(-90)"/>
  <path class="wire" d="M430 126 H500 M500 96 V58 H430"/>
  <text class="lbl-hot" x="500" y="160">ফ্লাইব্যাক</text>
  <use class="sym" href="#sym-nmos" transform="translate(404,150)"/>
  <text class="lbl-sm lbl-right" x="396" y="136">G</text>
  <text class="lbl" x="382" y="196">IRLZ44N</text>
  <text class="lbl-sm" x="382" y="212">লজিক-লেভেল</text>
  <path class="wire" d="M430 174 V212"/>
  <use class="sym sym-dim" href="#sym-gnd" transform="translate(430,212)"/>
  <path class="wire" d="M356 150 H404"/>
  <text class="lbl-sm" x="366" y="138">PWM</text>
</svg>
<div class="diag-cap">PWM-এর দুই মুখ: তিন চ্যানেল মিলিয়ে কোটি রঙ; এক চ্যানেলে মাপা-বাতাস — সেন্সর-পাঠ থেকে duty-সিদ্ধান্ত: এটাই অটোমেশনের প্রথম নিঃশ্বাস।</div>
</div>


<div class="diagram">
<div class="diag-title">নতুন — ADC-সিঁড়ি: ধারাবাহিক বিশ্বকে ধাপে ধাপে ভাগ (quantisation)</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <line class="axis" x1="60" y1="30" x2="60" y2="200"/>
  <line class="axis" x1="60" y1="200" x2="520" y2="200"/>
  <text class="lbl-sm" x="30" y="36" font-size="10">V</text>
  <text class="lbl-sm" x="506" y="218" font-size="10">সময়→</text>
  <path class="wire" d="M 60 195 L 110 195 L 110 172 L 160 172 L 160 149 L 210 149 L 210 126 L 260 126 L 260 103 L 310 103 L 310 80 L 360 80 L 360 57 L 410 57 L 410 40 L 470 40" fill="none"/>
  <path class="grid-line" d="M 60 195 Q 270 90 470 40" fill="none" stroke-dasharray="4,4"/>
  <text class="lbl-sm" x="85" y="215" font-size="9">০</text>
  <text class="lbl-sm" x="135" y="215" font-size="9">১</text>
  <text class="lbl-sm" x="185" y="215" font-size="9">২</text>
  <text class="lbl-sm" x="235" y="215" font-size="9">৩</text>
  <text class="lbl-sm" x="285" y="215" font-size="9">৪</text>
  <text class="lbl-sm" x="335" y="215" font-size="9">৫</text>
  <text class="lbl-sm" x="385" y="215" font-size="9">৬</text>
  <text class="lbl-sm" x="435" y="215" font-size="9">৭</text>
  <text class="lbl-cyan" x="470" y="60" font-size="10">৩-বিট = ৮ ধাপ</text>
  <text class="lbl-sm" x="330" y="180" font-size="10">ভাঙা-রেখা = সত্য সংকেত</text>
  <text class="lbl-sm" x="290" y="240" font-size="10">১০-বিট = ১০২৪ ধাপ; ধাপ-উচ্চতা = রেজোলিউশন (৩.৩V-রেফে ৩.২২mV)</text>
</svg>
<div class="diag-cap">ADC মানে সিঁড়ি-বানানো: মসৃণ দুনিয়া নির্দিষ্ট ধাপে ভাগ — ধাপ যত বেশি (বিট যত বেশি), ছবি তত মসৃণ; quantisation-error ধাপের ভেতরেই লুকায়।</div>
</div>

<div class="verse">
<div class="verse-arabic">وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً إِلَىٰ عُنُقِكَ وَلَا تَبْسُطْهَا كُلَّ الْبَسْطِ</div>
<div class="verse-translation">তোমার হাতকে গলায় বেঁধে রেখো না, আর পুরোপুরি খুলেও দিয়ো না।</div>
<div class="verse-ref">— কুরআন ১৭:২৯</div>
</div>


<div class="callout build"><span class="co-icon">🛠️</span><div><strong>নির্মাণ-পর্ব 12 — হাত-মুখ — মাপা-শক্তির দুই দিক:</strong> LDR-ডিভাইডার ADC-তে (আলো-পাঠ), ভালভ-MOSFET PWM-এ (পানি-নিয়ন্ত্রণ)। <strong>পরীক্ষা-দুই:</strong> (ক) হাত ঢাকলে কাঁচা-সংখ্যা ৭০০+ → আলো-চোখ প্রমাণিত; (খ) duty ৩০/৬০/১০০-এ বালতিতে পানি-প্রবাহ দৃশ্যমানভাবে তিন-স্তর — ইনফাকের গণিত বাস্তবে। মাপা-শক্তির দুই-মুখো সম্পর্ক এখন হাতে। <strong>কেন-LDR?</strong> খাতার ৩ নম্বর লাইনের সহায়ক: রাতে পাখি ঘুমাবে-জাগবে না তা আলো-পাঠই ঠিক করবে (সূর্যাস্ত-পরে কোনো পাঠ-বর্জন), আর মাঝরাতে হঠাৎ আলো = কেউ কেস খুলেছে — সস্তা পাহারা। প্রয়োজন-খাতার টীকা-লাইনে যোগ হলো: <em>আলো-পাঠ = ঘুম-নীতি + খোলা-কেস সতর্কতা</em>।</div></div>
<div class="secret-box"><div class="label">দরজা ১২ — রহস্য</div><div class="text">🌗 ডিজিটাল-অ্যানালগ সেতু দুইটা: PWM মাপা-অংশে দেয় (পুরো-অন/অফ-এর সময়-ভাগ), ADC মাপা-সংখ্যায় পড়ে (V÷Vref×(২^বিট−১))।<br><small>duty=গড়-শক্তি; analogWrite=PWM-মুখোশ; ১০-বিট=১০২৪ ধাপ; Nyquist ২×। ইনফাকের মিজান: ১৭:২৯।</small></div></div>`,
  senior:{
    title:"আজকের পাঠ — কী নিয়ে যাবে",
    body:`<ul class="checklist">
<li><strong>PWM-বোধ ভোল্টেজ-বোধ নয়:</strong> পিন সবসময় পুরো-HIGH/LOW; duty-ই গড় — 'অর্ধেক আলো কীভাবে?' প্রশ্নে এক-বাক্যে ব্যাখ্যা করতে পারবে।</li>
<li><strong>ADC-হিসাব হাতে:</strong> যেকোনো পাঠ → ভোল্টেজ → সেন্সর-খাতায় মান (৪১০→১.৩২V→২৮°C-এর মতো) — ডিভাইডার-সহ পূর্ণ চেইন নিজে হাঁটাও।</li>
<li><strong>bare-metal উভয়ের রেজিস্টার-নাম:</strong> COM/WGM-বিট (PWM-মোড) আর ADMUX/ADCSRA/ADSC (ADC-প্রবাহ) — ডেটাশিট-পড়ার চর্চা অব্যাহত।</li>
<li><strong>Vref-কৌশল:</strong> ছোট সংকেতে ছোট-মাপকাঠি — রেজোলিউশন-বাড়ানোর বৈধ কারিগরি; ঊর্ধ্ব-ভোল্টেজের বিপদও জানো।</li>
<li><strong>দর্শন-সেতু:</strong> ১৭:২৯-এর দুই-প্রান্ত (কৃপণতা/অপচয়) = duty-র দুই-প্রান্ত (০%/১০০%) — মিজান-জীবনের যন্ত্র-প্রতিচ্ছবি।</li>
<li><strong>সেতু — দরজা ১৩:</strong> এতক্ষণ এক পিন দিয়ে অ্যানালগ জগতের সাথে কথা — এবার প্রশ্ন, দুইটা চিপ কীভাবে নিজেদের মধ্যে কথা বলে? পরের দরজায় তিন ডাক-ব্যবস্থা — UART, SPI, I2C — হাসান সাহেবের পুরনো ডাকঘরের ভাষায়।</li>
</ul>`
  }
});
