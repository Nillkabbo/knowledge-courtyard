const doors = [];

doors.push({
  num: 1,
  icon: "🏗️",
  color: "#38bdf8",
  name: "সাত তলার ভবন",
  subtitle: "The Seven-Story Building",
  tech: "OSI Model (ISO 1984) + TCP/IP Model (Cerf-Kahn 1974) — layered network architecture",
  spirit: "তাবাকা — স্তরে স্তরে গঠন, প্রতিটি স্তর আগের উপর নির্মিত",
  secret: "নেটওয়ার্ক = একটি সাত তলার ভবন। প্রতিটি তলে একটি নির্দিষ্ট কাজ। তুমি শুধু তোমার তল নিয়ে চিন্তা করো, উপরের বা নিচের তল প্রোটোকল সামলাবে।",
  recall: {
    q: " OSI মডেলে কয়টি স্তর আছে?",
    qen: "How many layers does the OSI model have?",
    a: "৭টি — Application, Presentation, Session, Transport, Network, Data Link, Physical।",
    aen: "7 — Application, Presentation, Session, Transport, Network, Data Link, Physical."
  },
  story: `<p class="scene-setting">তুমি একটি সাত তলার ভবনে দাঁড়িয়ে আছো। সপ্তম তলে একটি বার্তা লেখা হয়েছে। সেই বার্তাটি ষষ্ঠ তলে যায় — সেখানে একটি খামে ভরা হয়। পঞ্চম তলে একটি সেশন শুরু হয়। চতুর্থ তলে বার্তাটি ছোট ছোট টুকরোয় ভাগ করা হয়। তৃতীয় তলে প্রতিটি টুকরোর উপর ঠিকানা লেখা হয়। দ্বিতীয় তলে একটি ফ্রেমে ভরা হয়। প্রথম তলে — তারের ভেতর দিয়ে বৈদ্যুতিক সংকেত হিসেবে পাঠানো হয়।</p>
<p class="scene-setting en">You're standing in a seven-story building. On the seventh floor, a message is written. It goes to the sixth floor — put in an envelope. On the fifth, a session begins. On the fourth, the message is split into pieces. On the third, each piece gets an address. On the second, it's framed. On the first — it's sent as electrical signals through a wire.</p>

<div class="callout info"><span class="co-icon">🏢</span><div><strong>OSI মডেলের ৭টি স্তর (উপর থেকে নিচে):</strong><br>
<strong>৭. Application:</strong> ব্যবহারকারীর ইন্টারফেস — HTTP, FTP, SMTP<br>
<strong>৬. Presentation:</strong> এনক্রিপশন, কম্প্রেশন, ফরম্যাট — TLS, JPEG, JSON<br>
<strong>৫. Session:</strong> সংযোগ ব্যবস্থাপনা — সেশন খোলা/বন্ধ<br>
<strong>৪. Transport:</strong> নির্ভরযোগ্য পরিবহন — TCP, UDP<br>
<strong>৩. Network:</strong> ঠিকানা ও রাউটিং — IP<br>
<strong>২. Data Link:</strong> ফ্রেম, MAC ঠিকানা — Ethernet, Wi-Fi<br>
<strong>১. Physical:</strong> তার, সংকেত, বিট — কেবল, ফাইবার, রেডিও</div></div>

<div class="diagram">
<div class="diag-title">OSI vs TCP/IP — স্তর মিলন</div>
<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg">
<!-- Layer 7: Application -->
<rect x="20" y="30" width="370" height="38" rx="6" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/>
<circle cx="42" cy="49" r="12" fill="#52c41a"/>
<text x="42" y="49" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">7</text>
<text x="65" y="49" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Application</text>
<text x="200" y="49" fill="#9290a8" font-size="11" dominant-baseline="central">HTTP · DNS · SMTP</text>
<!-- Layer 6: Presentation -->
<rect x="20" y="72" width="370" height="38" rx="6" fill="rgba(179,127,235,.12)" stroke="#b37feb" stroke-width="1.5"/>
<circle cx="42" cy="91" r="12" fill="#b37feb"/>
<text x="42" y="91" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">6</text>
<text x="65" y="91" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Presentation</text>
<text x="200" y="91" fill="#9290a8" font-size="11" dominant-baseline="central">TLS · JPEG · JSON</text>
<!-- Layer 5: Session -->
<rect x="20" y="114" width="370" height="38" rx="6" fill="rgba(91,158,255,.12)" stroke="#5b9eff" stroke-width="1.5"/>
<circle cx="42" cy="133" r="12" fill="#5b9eff"/>
<text x="42" y="133" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">5</text>
<text x="65" y="133" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Session</text>
<text x="200" y="133" fill="#9290a8" font-size="11" dominant-baseline="central">RPC · NetBIOS</text>
<!-- Layer 4: Transport -->
<rect x="20" y="156" width="370" height="38" rx="6" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="1.5"/>
<circle cx="42" cy="175" r="12" fill="#38bdf8"/>
<text x="42" y="175" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">4</text>
<text x="65" y="175" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Transport</text>
<text x="200" y="175" fill="#9290a8" font-size="11" dominant-baseline="central">TCP · UDP</text>
<!-- Layer 3: Network -->
<rect x="20" y="198" width="370" height="38" rx="6" fill="rgba(61,214,196,.12)" stroke="#3dd6c4" stroke-width="1.5"/>
<circle cx="42" cy="217" r="12" fill="#3dd6c4"/>
<text x="42" y="217" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">3</text>
<text x="65" y="217" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Network</text>
<text x="200" y="217" fill="#9290a8" font-size="11" dominant-baseline="central">IP · ICMP · Routing</text>
<!-- Layer 2: Data Link -->
<rect x="20" y="240" width="370" height="38" rx="6" fill="rgba(251,191,36,.12)" stroke="#fbbf24" stroke-width="1.5"/>
<circle cx="42" cy="259" r="12" fill="#fbbf24"/>
<text x="42" y="259" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">2</text>
<text x="65" y="259" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Data Link</text>
<text x="200" y="259" fill="#9290a8" font-size="11" dominant-baseline="central">Ethernet · MAC · ARP</text>
<!-- Layer 1: Physical -->
<rect x="20" y="282" width="370" height="38" rx="6" fill="rgba(255,107,53,.12)" stroke="#ff6b35" stroke-width="1.5"/>
<circle cx="42" cy="301" r="12" fill="#ff6b35"/>
<text x="42" y="301" fill="#060d16" font-size="13" font-weight="800" text-anchor="middle" dominant-baseline="central">1</text>
<text x="65" y="301" fill="#e8e6f0" font-size="13" font-weight="600" dominant-baseline="central">Physical</text>
<text x="200" y="301" fill="#9290a8" font-size="11" dominant-baseline="central">Cable · Fiber · Radio</text>
<!-- TCP/IP Mapping (right side) -->
<rect x="410" y="30" width="130" height="122" rx="8" fill="rgba(82,196,26,.06)" stroke="#52c41a" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="475" y="85" fill="#52c41a" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="central">Application</text>
<text x="475" y="100" fill="#52c41a" font-size="10" text-anchor="middle" dominant-baseline="central">(TCP/IP L4)</text>
<rect x="410" y="156" width="130" height="38" rx="8" fill="rgba(56,189,248,.06)" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="475" y="175" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="central">Transport</text>
<rect x="410" y="198" width="130" height="38" rx="8" fill="rgba(61,214,196,.06)" stroke="#3dd6c4" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="475" y="217" fill="#3dd6c4" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="central">Internet</text>
<rect x="410" y="240" width="130" height="80" rx="8" fill="rgba(255,107,53,.06)" stroke="#ff6b35" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="475" y="272" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="central">Network</text>
<text x="475" y="287" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle" dominant-baseline="central">Access</text>
</svg>
<div class="diag-cap">বামে: OSI ৭-স্তর · ডানে: TCP/IP ৪-স্তর মিলন · বার্তা উপর থেকে নিচে যায় (encapsulation)</div>
</div>

<div class="dialogue"><strong>তুমি:</strong> এত স্তর কেন? এক স্তরে কাজ শেষ করলেই তো হয়?</div>
<div class="dialogue"><strong>স্থপতি আদম:</strong> ভাবো তুমি একটি বাড়ি বানাচ্ছো। ভিত্তি, দেয়াল, ছাদ, বৈদ্যুতিক, প্লাম্বিং, রং — সব একসাথে করলে কী হবে? একটি সমস্যা হলে কোনটি ঠিক করবে? স্তর থাকলে প্রতিটি স্তর আলাদাভাবে কাজ করে। Wi-Fi বদলালে HTTP বদলাতে হবে না। এটাই abstraction-এর শক্তি।</div>
<div class="dialogue en"><strong>You:</strong> Why so many layers? Why not do everything in one layer?<br><strong>Architect Adam:</strong> Imagine building a house. Foundation, walls, roof, electrical, plumbing, paint — do it all at once? If one breaks, which to fix? With layers, each works independently. Change Wi-Fi without changing HTTP. This is the power of abstraction.</div>

<p class="scene-setting">কিন্তু একটি সত্য — OSI মডেলটি একটি তাত্ত্বিক কাঠামো। বাস্তবে ইন্টারনেট চলে TCP/IP মডেলে — মাত্র ৪টি স্তর। ১৯৭৪ সালে Vint Cerf এবং Bob Kahn এটি ডিজাইন করেছিলেন।</p>
<p class="scene-setting en">But a truth — the OSI model is a theoretical framework. In practice, the internet runs on the TCP/IP model — only 4 layers. In 1974, Vint Cerf and Bob Kahn designed it.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>TCP/IP মডেলের ৪টি স্তর:</strong><br>
<strong>৪. Application:</strong> OSI-এর ৭+৬+৫ একত্রিত — HTTP, DNS, SMTP<br>
<strong>৩. Transport:</strong> TCP, UDP<br>
<strong>২. Internet:</strong> IP — OSI-এর Network স্তর<br>
<strong>১. Network Access:</strong> OSI-এর ২+১ একত্রিত — Ethernet, Wi-Fi</div></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">ওপেন কিন্তু জটিল</div>OSI — ৭ স্তর। তাত্ত্বিকভাবে সম্পূর্ণ কিন্তু বাস্তবে কয়েকটি স্তর খালি থাকে। শেখানো হয় কিন্তু ব্যবহার কম হয়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সরল এবং বাস্তব</div>TCP/IP — ৪ স্তর। বাস্তব ইন্টারনেট এটিতে চলে। সরল, প্র্যাকটিক্যাল, প্রমাণিত।</div>
</div>

<div class="verse">الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"যিনি সৃষ্টি করেছেন সাতটি আসমান স্তরে স্তরে।" — কুরআন ৬৭:৩</div>

<p class="scene-setting">এই আয়াতে সাতটি আসমানের কথা বলা হয়েছে — স্তরে স্তরে। নেটওয়ার্কের OSI মডেলেও সাতটি স্তর — প্রতিটি আলাদা কাজ করে, কিন্তু সব মিলে একটি সম্পূর্ণ ব্যবস্থা। প্রতিটি স্তর উপরের স্তরকে সহায়তা করে, নিচের স্তরের উপর নির্ভর করে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> API Gateway, Load Balancer, Microservices — এগুলো Application স্তরের ধারণা। Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস): Consensus, CAP — এগুলো Transport ও Network স্তরের উপর নির্ভর করে।</div></div>

<div class="code-block">— স্তর দেখো বাস্তবে (curl দিয়ে) —
$ curl -I https://google.com

HTTP/2 200                              ← Layer 7 (Application)
content-type: text/html                 ← Layer 6 (Presentation — format)
date: Sun, 26 Jul 2026 14:30:00 GMT     ← Layer 5 (Session — state)
age: 123                                ← Layer 4 (Transport — TCP port 443)
alt-svc: h3=":443"                      ← Layer 3 (Network — IP routing)
server: gws                             ← Layer 2 (Data Link — MAC)
                                        ← Layer 1 (Physical — তারের সংকেত)

— প্রতিটি header একটি স্তরের ইঙ্গিত দেয় —
— তুমি curl চালাও, সাতটি স্তর একসাথে কাজ করে —</div>

<div class="callout tip"><span class="co-icon">💡</span><div><strong>বাস্তবে দেখো:</strong> <code>curl -I</code> চালালে তুমি Application স্তরের উত্তর দেখো। কিন্তু ভেতরে ৭টি স্তর কাজ করেছে — DNS lookup (L7), TCP handshake (L4), IP routing (L3), Ethernet frame (L2), তারের সংকেত (L1)। তুমি শুধু শীর্ষ দেখো, ভিত্তি অদৃশ্য।</div></div>

<div class="secret-box">🏗️ <strong>নেটওয়ার্ক = সাত তলার ভবন।</strong> তুমি সপ্তম তল থেকে বার্তা পাঠাও, প্রথম তল থেকে বৈদ্যুতিক সংকেত যায়। প্রতিটি তলের নিজস্ব কাজ, নিজস্ব ভাষা। এটাই abstraction — উপরের তল জানেই না নিচে কী হচ্ছে। কিন্তু এই ভবনের ভিত্তি কী? তার এবং সংকেত। সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "OSI + TCP/IP এক নজরে",
    body: `<table class="kv-table"><tr><th>OSI স্তর</th><th>TCP/IP স্তর</th><th>প্রোটোকল</th></tr>
<tr><td class="hl">7. Application</td><td rowspan="3">Application</td><td>HTTP, DNS, SMTP, FTP</td></tr>
<tr><td class="hl">6. Presentation</td><td>TLS, JPEG, JSON</td></tr>
<tr><td class="hl">5. Session</td><td>RPC, NetBIOS</td></tr>
<tr><td class="hl">4. Transport</td><td>Transport</td><td>TCP, UDP</td></tr>
<tr><td class="hl">3. Network</td><td>Internet</td><td>IP, ICMP</td></tr>
<tr><td class="hl">2. Data Link</td><td rowspan="2">Network Access</td><td>Ethernet, Wi-Fi, ARP</td></tr>
<tr><td class="hl">1. Physical</td><td>Cables, Fiber, Radio</td></tr></table>
<p style="margin-top:.8rem"><strong>মনে রাখার কৌশল:</strong> <em>All People Seem To Need Data Processing</em> (7→1)</p>`
  }
});

doors.push({
  num: 2,
  icon: "🔌",
  color: "#38bdf8",
  name: "তারের রাজ্যে",
  subtitle: "Into the Wires",
  tech: "Physical Layer + Data Link — cables, fiber, radio, Ethernet (Metcalfe 1973), MAC addressing, CSMA/CD, switches",
  spirit: "আয়ত — নিদর্শন, দৃশ্যমান সংকেত থেকে অদৃশ্য অর্থ",
  secret: "Physical স্তর = ১ এবং ০ কে তারের ভেতর দিয়ে পাঠানো। Data Link = কার থেকে কার কাছে যাচ্ছে (MAC ঠিকানা)।",
  recall: {
    q: " MAC ঠিকানা এবং IP ঠিকানার পার্থক্য কী?",
    qen: "What's the difference between MAC and IP addresses?",
    a: "MAC হার্ডওয়্যারে পাওয়া (NIC-তে লেখা), IP লজিক্যাল (নেটওয়ার্কে দেওয়া)। MAC বদলায় না, IP বদলায়।",
    aen: "MAC is hardware (burned into NIC), IP is logical (assigned). MAC doesn't change, IP can."
  },
  story: `<p class="scene-setting">তুমি একটি কেবল ধরে আছো। তামার তার। এর ভেতর দিয়ে বিদ্যুৎ প্রবাহিত হয়। কিন্তু বিদ্যুৎ কীভাবে ডেটা হয়? উত্তর: সংকেত। উচ্চ ভোল্টেজ = ১, নিম্ন ভোল্টেজ = ০। এই ১ এবং ০-এর স্রোতই হলো সমস্ত ডেটার ভিত্তি — ছবি, ভিডিও, টেক্সট, সবকিছু।</p>
<p class="scene-setting en">You're holding a cable. Copper wire. Electricity flows through it. But how does electricity become data? Answer: signals. High voltage = 1, low voltage = 0. This stream of 1s and 0s is the foundation of all data — images, video, text, everything.</p>

<div class="callout info"><span class="co-icon">📡</span><div><strong>মাধ্যমের প্রকারভেদ:</strong><br>
<strong>তামার তার (Twisted Pair):</strong> সস্তা, সহজ — CAT6, সর্বোচ্চ ১০ Gbps, ~১০০m পর্যন্ত<br>
<strong>কো-এক্সিয়াল:</strong> কেবল TV — ব্রডব্যান্ড ইন্টারনেট<br>
<strong>ফাইবার অপটিক:</strong> আলোর স্রোত — ১০০ Gbps+, কয়েক কিলোমিটার, কোনো ইলেকট্রোম্যাগনেটিক ব্যাঘাত নেই<br>
<strong>রেডিও (Wireless):</strong> Wi-Fi, 4G/5G, স্যাটেলাইট — আলোর চেয়ে ধীর কিন্তু তার ছাড়া</div></div>

<p class="scene-setting">১৯৭৩ সাল। Xerox PARC। Bob Metcalfe একটি সমস্যায় আছেন — অফিসের কম্পিউটারগুলোকে যুক্ত করতে হবে। তিনি একটি সহজ সমাধান ভাবলেন: একটি শেয়ার্ড কেবল। সব কম্পিউটার একই কেবলে যুক্ত। কেউ বার্তা পাঠাতে চাইলে আগে শোনে — কেউ কথা বলছে কি না? যদি না বলছে, তবে সে পাঠায়। যদি দুজন একসাথে পাঠায় — collision! উভয়ে থামে, অপেক্ষা করে, আবার চেষ্টা করে।</p>
<p class="scene-setting en">1973. Xerox PARC. Bob Metcalfe has a problem — connect office computers. He thought of a simple solution: a shared cable. All computers on one cable. Before sending, listen — is anyone talking? If not, send. If two send at once — collision! Both stop, wait, retry.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Ethernet + CSMA/CD (Carrier Sense Multiple Access with Collision Detection):</strong><br>
১. শোনো — কেউ পাঠাচ্ছে কি না (Carrier Sense)<br>
২. নিরব হলে পাঠাও<br>
৩. দুজন একসাথে পাঠালে — collision detect<br>
৪. উভয়ে থামো, random time অপেক্ষা করো (backoff)<br>
৫. আবার চেষ্টা করো</div></div>

<div class="callout info"><span class="co-icon">🏠</span><div><strong>MAC ঠিকানা (Media Access Control):</strong> প্রতিটি Network Interface Card (NIC)-এ একটি অনন্য ৪৮-বিট ঠিকানা থাকে। যেমন: ৩C:5A:B4:০F:১২:৭D। এটি কারখানায় লেখা হয় — হার্ডওয়্যারে। এটি স্থানীয় নেটওয়ার্কে ফ্রেম সঠিক গন্তব্যে পৌঁছাতে সাহায্য করে।</div></div>

<div class="callout info"><span class="co-icon">🔀</span><div><strong>Switch vs Hub:</strong><br>
<strong>Hub:</strong> আসা ফ্রেম সব পোর্টে পাঠায় — সবাই শোনে, ধীর।<br>
<strong>Switch:</strong> MAC ঠিকানা দেখে শুধু সঠিক পোর্টে পাঠায় — দ্রুত, নিরাপদ। Switch একটি MAC টেবিল রাখে — কোন পোর্টে কোন MAC আছে।</div></div>

<div class="diagram">
<div class="diag-title">Switch বনাম Hub — ফ্রেম ডেলিভারি</div>
<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrFire" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#ff6b35"/></marker>
  <marker id="arrTeal" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#3dd6c4"/></marker>
</defs>
<!-- Source PC -->
<rect x="20" y="70" width="100" height="50" rx="8" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="2"/>
<text x="70" y="90" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle">PC-1</text>
<text x="70" y="107" fill="#9290a8" font-size="10" text-anchor="middle">SRC: A1:B2</text>
<!-- Switch -->
<rect x="180" y="55" width="140" height="80" rx="10" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="2"/>
<text x="250" y="78" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SWITCH</text>
<text x="250" y="95" fill="#9290a8" font-size="10" text-anchor="middle">MAC Table</text>
<text x="250" y="112" fill="#9290a8" font-size="9" text-anchor="middle">P1→A1 · P2→C3 · P3→B4</text>
<!-- Lines from source to switch -->
<line x1="120" y1="95" x2="180" y2="95" stroke="#ff6b35" stroke-width="2.5"/>
<!-- Target PC-3 -->
<rect x="370" y="20" width="100" height="45" rx="8" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/>
<text x="420" y="38" fill="#52c41a" font-size="11" font-weight="700" text-anchor="middle">PC-2</text>
<text x="420" y="53" fill="#9290a8" font-size="10" text-anchor="middle">C3:44</text>
<rect x="370" y="95" width="100" height="45" rx="8" fill="rgba(91,158,255,.12)" stroke="#5b9eff" stroke-width="1.5"/>
<text x="420" y="113" fill="#5b9eff" font-size="11" font-weight="700" text-anchor="middle">PC-3</text>
<text x="420" y="128" fill="#9290a8" font-size="10" text-anchor="middle">B4:22</text>
<rect x="370" y="170" width="100" height="45" rx="8" fill="rgba(179,127,235,.1)" stroke="#b37feb" stroke-width="1.5"/>
<text x="420" y="188" fill="#b37feb" font-size="11" font-weight="700" text-anchor="middle">PC-4</text>
<text x="420" y="203" fill="#9290a8" font-size="10" text-anchor="middle">D5:66</text>
<!-- Correct path: Switch → PC-3 only -->
<line x1="320" y1="95" x2="370" y2="117" stroke="#ff6b35" stroke-width="2.5" marker-end="url(#arrFire)"/>
<text x="345" y="95" fill="#ff6b35" font-size="9" font-weight="700">→ B4:22</text>
<!-- Bottom: Hub comparison -->
<text x="280" y="245" fill="#9290a8" font-size="11" font-weight="600" text-anchor="middle">— HUB (তুলনা) —</text>
<rect x="180" y="255" width="140" height="50" rx="8" fill="rgba(251,191,36,.08)" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="250" y="275" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">HUB</text>
<text x="250" y="290" fill="#9290a8" font-size="9" text-anchor="middle">সব পোর্টে ব্রডকাস্ট</text>
<line x1="320" y1="270" x2="370" y2="40" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="320" y1="275" x2="370" y2="115" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="320" y1="280" x2="370" y2="190" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3"/>
<text x="395" y="320" fill="#9290a8" font-size="9" text-anchor="middle">Hub সবাইকে পাঠায় · Switch শুধু গন্তব্যকে</text>
</svg>
<div class="diag-cap">Switch: MAC টেবিল দেখে শুধু সঠিক পোর্টে পাঠায় · Hub: সব পোর্টে ব্রডকাস্ট করে</div>
</div>

<div class="code-block">— তোমার NIC দেখো —
$ ip addr show eth0    (Linux)
$ ifconfig en0         (macOS)

2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP
    link/ether 3c:5a:b4:0f:12:7d brd ff:ff:ff:ff:ff:ff    ← MAC ঠিকানা
    inet 192.168.1.42/24 brd 192.168.1.255 scope global eth0  ← IP ঠিকানা

— MAC ঠিকানার গঠন: ৪৮ বিট = ৬ বাইট —
  3C:5A:B4  |  0F:12:7D
  ─────────    ─────────
  OUI (কারখানা)   NIC (পৃথক যন্ত্র)
  IEEE নির্ধারিত   কারখানায় বরাদ্দ</div>

<div class="code-block">— ARP টেবিল: IP → MAC ম্যাপিং —
$ arp -a

? (192.168.1.1)    at 00:1a:2b:3c:4d:5e  on eth0   ← রাউটার
? (192.168.1.100)  at ab:cd:ef:01:23:45  on eth0   ← প্রতিবেশী
? (192.168.1.255)  at ff:ff:ff:ff:ff:ff  on eth0   ← broadcast

— ARP কীভাবে কাজ করে —
  ১. "কে 192.168.1.1?" → broadcast (সবাই শোনে)
  ২. রাউটার বলে "আমি! আমার MAC: 00:1a:2b:3c:4d:5e"
  ৩. তোমার ARP টেবিলে সংরক্ষণ (cache, ~20 min)
  ৪. এখন ফ্রেম সরাসরি যায় — প্রতিবার broadcast লাগে না</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ARP Spoofing বিপদ:</strong> কেউ ভুল MAC বললে তোমার ফ্রেম ভুল জায়গায় যায়। এটাকে ARP poisoning বলে — Man-in-the-Middle আক্রমণের ভিত্তি। প্রতিরোধ: Dynamic ARP Inspection (DAI), static ARP entries।</div></div>

<div class="verse">أَلَمْ تَرَوْا أَنَّ اللَّهَ سَخَّرَ لَكُم مَّا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তোমরা কি দেখো না যে আল্লাহ আসমান ও পৃথিবীতে যা কিছু আছে তা তোমাদের অধীন করেছেন?" — কুরআন ৩১:২০</div>

<p class="scene-setting">এই আয়াত বলে — আল্লাহ আসমান ও পৃথিবীর সম্পদ মানুষের অধীন করেছেন। তামা, সিলিকন, আলো — এই উপাদানগুলো প্রকৃতিতে আছে। মানুষ সেগুলো দিয়ে তৈরি করেছে তার, ফাইবার, সুইচ — যা সংযোগ সম্ভব করে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস) Door ২:</strong> Dijkstra-এর semaphore শিখেছিলে — shared resource access control। CSMA/CD একই সমস্যার নেটওয়ার্ক সংস্করণ: শেয়ার্ড মাধ্যমে কে কবে কথা বলবে?</div></div>

<div class="secret-box">🔌 <strong>Physical স্তর = ভিত্তি।</strong> তারের ভেতর বিদ্যুৎ, ফাইবারের ভেতর আলো, বাতাসে রেডিও তরঙ্গ। ১ এবং ০ — এই দুটি সংখ্যা দিয়ে গড়ে উঠেছে পুরো ইন্টারনেট। আর Data Link স্তর ঠিক করে কোন ১ এবং ০ কার জন্য। কিন্তু এই ফ্রেমগুলো শুধু স্থানীয় নেটওয়ার্কেই থাকে। এক নেটওয়ার্ক থেকে আরেক নেটওয়ার্কে যেতে হলে দরকার একটি সার্বজনীন ঠিকানা। সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "Physical + Data Link এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">মাধ্যম</td><td>তামার তার, কো-এক্সিয়াল, ফাইবার, রেডিও</td></tr>
<tr><td class="hl">সংকেত</td><td>ভোল্টেজ (তামার), আলোর পালস (ফাইবার), রেডিও তরঙ্গ (Wi-Fi)</td></tr>
<tr><td class="hl">Ethernet</td><td>Metcalfe ১৯৭৩ — Xerox PARC, শেয়ার্ড কেবল</td></tr>
<tr><td class="hl">CSMA/CD</td><td>শোনো → পাঠাও → collision → থামো → অপেক্ষা → পুনরায়</td></tr>
<tr><td class="hl">MAC ঠিকানা</td><td>৪৮-বিট হার্ডওয়্যার ঠিকানা (NIC-তে লেখা)</td></tr>
<tr><td class="hl">Switch</td><td>MAC টেবিল ব্যবহার করে সঠিক পোর্টে ফ্রেম পাঠায়</td></tr>
<tr><td class="hl">ফ্রেম</td><td>ডেটা + উৎস MAC + গন্তব্য MAC + error check</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🛣️",
  color: "#38bdf8",
  name: "রাস্তার প্রহরী",
  subtitle: "The Road Guardian",
  tech: "Network Layer — IP Addressing (IPv4, IPv6), Subnetting, Routing (BGP, OSPF), TTL, Traceroute",
  spirit: "তারীক — পথ, গন্তব্যে পৌঁছানোর রাস্তা",
  secret: "IP ঠিকানা = বাড়ির ঠিকানা। রাউটার = মোড়ের সাইনবোর্ড। প্যাকেট প্রতিটি মোড়ে জিজ্ঞেস করে — এর পর কোন দিকে?",
  recall: {
    q: " IPv4 ঠিকানায় কয়টি বিট থাকে?",
    qen: "How many bits are in an IPv4 address?",
    a: "৩২ বিট — প্রায় ৪.৩ বিলিয়ন ঠিকানা। IPv6 তে ১২৮ বিট — ৩.৪*১০³⁸।",
    aen: "32 bits — about 4.3 billion addresses. IPv6 has 128 bits — 3.4*10^38."
  },
  story: `<p class="scene-setting">তুমি একটি চিঠি হাতে দাঁড়িয়ে আছো। চিঠির উপর ঠিকানা: "১৯২.১৬৮.১.১০০"। এটি একটি IP ঠিকানা। কিন্তু এটি কীভাবে গন্তব্যে পৌঁছাবে? রাস্তা কীভাবে খুঁজে পাবে?</p>
<p class="scene-setting en">You're standing with a letter. The address: "192.168.1.100." This is an IP address. But how will it reach the destination? How will it find the road?</p>

<div class="dialogue"><strong>রাস্তার প্রহরী মালেক:</strong> ভাবো তুমি একটি শহরে নতুন। একটি মোড়ে দাঁড়িয়ে আছো। তুমি জিজ্ঞেস করো — "১৯২.১৬৮ সড়কটি কোন দিকে?" একজন দেখায় — "ডানে যাও।" তুমি যাও। পরের মোড়ে আবার জিজ্ঞেস করো। এভাবে এক মোড় থেকে আরেক মোড়ে — গন্তব্যে পৌঁছাও। এটাই routing।</div>
<div class="dialogue en"><strong>Road Guardian Malik:</strong> Imagine you're new in a city. Standing at an intersection. You ask — "Which way to 192.168 Road?" Someone points — "Go right." You go. At the next intersection, you ask again. From one intersection to the next — you arrive. This is routing.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>IPv4 ঠিকানা গঠন:</strong> ৩২ বিট, ৪ ভাগে বিভক্ত — যেমন ১৯২.১৬৮.১.১০০<br>
প্রতিটি ভাগ: ০-২৫৫ (৮ বিট)। মোট: ২^৩২ = ৪,২৯৪,৯৬৭,২৯৬ ~= ৪.৩ বিলিয়ন।<br>
<strong>সাবনেট মাস্ক:</strong> কোন অংশ নেটওয়ার্ক, কোন অংশ হোস্ট — যেমন ২৫৫.২৫৫.২৫৫.০ মানে প্রথম ৩ ভাগ নেটওয়ার্ক, শেষ ভাগ হোস্ট।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>IPv4 সংকট:</strong> ৪.৩ বিলিয়ন ঠিকানা শেষ হচ্ছে! সমাধান: NAT (Network Address Translation) — একটি পাবলিক IP-তে অনেক প্রাইভেট IP লুকানো। আর IPv6 — ১২৮ বিট, ৩.৪*১০³⁸ ঠিকানা। "প্রতিটি বালুকণায় একটি করে IP দিলেও শেষ হবে না।"</div></div>

<div class="callout info"><span class="co-icon">🗺️</span><div><strong>রাউটিং প্রোটোকল:</strong><br>
<strong>OSPF (Open Shortest Path First):</strong> অভ্যন্তরীণ — Dijkstra-এর shortest path অ্যালগরিদম ব্যবহার করে।<br>
<strong>BGP (Border Gateway Protocol):</strong> ইন্টারনেটের মেরুদণ্ড — আলাদা অটোনোমাস সিস্টেম (AS) এর মধ্যে রাস্তা। BGP ইন্টারনেটকে সংযুক্ত রাখে।<br>
<strong>Routing Table:</strong> প্রতিটি রাউটারে একটি টেবিল — "এই গন্তব্যে যেতে এই পোর্টে যাও।"</div></div>

<div class="callout info"><span class="co-icon">⏱️</span><div><strong>TTL (Time To Live):</strong> প্রতিটি প্যাকেটে একটি কাউন্টার থাকে — সর্বোচ্চ কতটা রাউটার পার হতে পারবে। প্রতিটি রাউটারে ১ কমে। শূন্য হলে প্যাকেট বাতিল। কেন? যাতে প্যাকেট অনন্তকাল ঘুরে না বেড়ায়। সাধারণত TTL = ৬৪।</div></div>

<div class="callout tip"><span class="co-icon">🔍</span><div><strong>Traceroute:</strong> TTL ব্যবহার করে পথ খুঁজে বের করে। প্রথম প্যাকেট TTL=১ — প্রথম রাউটারে বাতিল, সেই রাউটারের ঠিকানা পাওয়া যায়। দ্বিতীয় TTL=২ — দ্বিতীয় রাউটার। এভাবে পুরো পথ ম্যাপ হয়।</div></div>

<div class="diagram">
<div class="diag-title">IP Routing — প্যাকেটের যাত্রা (Traceroute)</div>
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrAmber3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#fbbf24"/></marker>
</defs>
<!-- Source -->
<rect x="15" y="120" width="90" height="50" rx="8" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="2"/>
<text x="60" y="140" fill="#ff6b35" font-size="11" font-weight="700" text-anchor="middle">তোমার PC</text>
<text x="60" y="155" fill="#9290a8" font-size="9" text-anchor="middle">10.0.0.5</text>
<!-- Routers along the path -->
<rect x="140" y="120" width="80" height="50" rx="8" fill="rgba(251,191,36,.12)" stroke="#fbbf24" stroke-width="1.5"/>
<text x="180" y="138" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Router 1</text>
<text x="180" y="153" fill="#9290a8" font-size="9" text-anchor="middle">ISP Gateway</text>
<rect x="255" y="120" width="80" height="50" rx="8" fill="rgba(251,191,36,.12)" stroke="#fbbf24" stroke-width="1.5"/>
<text x="295" y="138" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Router 2</text>
<text x="295" y="153" fill="#9290a8" font-size="9" text-anchor="middle">Regional</text>
<rect x="370" y="120" width="80" height="50" rx="8" fill="rgba(251,191,36,.12)" stroke="#fbbf24" stroke-width="1.5"/>
<text x="410" y="138" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Router 3</text>
<text x="410" y="153" fill="#9290a8" font-size="9" text-anchor="middle">Backbone</text>
<!-- Destination -->
<rect x="480" y="120" width="70" height="50" rx="8" fill="rgba(82,196,26,.15)" stroke="#52c41a" stroke-width="2"/>
<text x="515" y="138" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">Server</text>
<text x="515" y="153" fill="#9290a8" font-size="9" text-anchor="middle">142.250</text>
<!-- Path lines -->
<line x1="105" y1="145" x2="140" y2="145" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrAmber3)"/>
<line x1="220" y1="145" x2="255" y2="145" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrAmber3)"/>
<line x1="335" y1="145" x2="370" y2="145" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrAmber3)"/>
<line x1="450" y1="145" x2="480" y2="145" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrAmber3)"/>
<!-- TTL labels above -->
<text x="122" y="110" fill="#ff6b35" font-size="9" font-weight="700" text-anchor="middle">TTL 64→63</text>
<text x="237" y="110" fill="#ff6b35" font-size="9" font-weight="700" text-anchor="middle">→62</text>
<text x="352" y="110" fill="#ff6b35" font-size="9" font-weight="700" text-anchor="middle">→61</text>
<!-- Traceroute output box -->
<text x="280" y="210" fill="#9290a8" font-size="10" font-weight="600" text-anchor="middle">$ traceroute google.com</text>
<rect x="60" y="220" width="440" height="65" rx="8" fill="rgba(7,10,15,.6)" stroke="rgba(56,189,248,.2)" stroke-width="1"/>
<text x="75" y="238" fill="#3dd6c4" font-size="10" font-family="monospace">hop 1  10.0.0.1     1.2ms  ← Router 1 (ISP)</text>
<text x="75" y="252" fill="#3dd6c4" font-size="10" font-family="monospace">hop 2  24.10.5.1    4.8ms  ← Router 2 (Regional)</text>
<text x="75" y="266" fill="#3dd6c4" font-size="10" font-family="monospace">hop 3  72.14.210.1  12ms   ← Router 3 (Backbone)</text>
</svg>
<div class="diag-cap">প্যাকেট প্রতিটি রাউটারে থামে · TTL ১ কমে · শূন্য হলে বাতিল · এটাই traceroute-এর কৌশল</div>
</div>

<div class="code-block">— ping: গন্তব্য আছে কি না —
$ ping -c 4 google.com

PING google.com (142.250.190.46): 56 data bytes
64 bytes from 142.250.190.46: icmp_seq=0 ttl=117 time=12.3 ms
64 bytes from 142.250.190.46: icmp_seq=1 ttl=117 time=11.8 ms
64 bytes from 142.250.190.46: icmp_seq=2 ttl=117 time=13.1 ms
64 bytes from 142.250.190.46: icmp_seq=3 ttl=117 time=12.0 ms
--- google.com ping statistics ---
4 packets transmitted, 4 received, 0.0% packet loss
round-trip min/avg/max = 11.8/12.3/13.1 ms

— পড়ো: 0% loss = সংযোগ সুস্থ · 100% loss = আটকে আছে —</div>

<div class="code-block">— traceroute: পথ দেখো হপ বাই হপ —
$ traceroute google.com

 1  192.168.1.1     1.2 ms   ← তোমার রাউটার
 2  10.50.12.1      4.5 ms   ← ISP গেটওয়ে
 3  72.14.215.1     12.1 ms  ← ISP backbone
 4  142.250.190.1   15.3 ms  ← Google-এর নেটওয়ার্ক
 5  142.250.190.46  14.8 ms  ← গন্তব্য সার্ভার

— প্রতিটি * * * = সেই হপ রেসপন্স দেয় না (ফায়ারওয়াল ব্লক) —</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>সাবনেটিং — একটি পূর্ণ উদাহরণ:</strong><br>
<strong>প্রশ্ন:</strong> ১৯২.১৬৮.১.০/২৪ নেটওয়ার্ককে ৪টি সমান সাবনেটে ভাগ করো।<br>
<strong>ধাপ ১:</strong> ৪টি সাবনেটের জন্য ২ বিট দরকার (২² = ৪)।<br>
<strong>ধাপ ২:</strong> নতুন মাস্ক: /২৬ (২৫৫.২৫৫.২৫৫.১৯২)<br>
<strong>ধাপ ৩:</strong> প্রতিটি সাবনেটে ৬৪ ঠিকানা (৬২ ব্যবহারযোগ্য)।</div></div>

<div class="code-block">— সাবনেট হিসাব —
নেটওয়ার্ক:   192.168.1.0/24   (মূল — ২৫৪ হোস্ট)
মাস্ক:       255.255.255.0    (/24)

৪ সাবনেটে ভাগ (/26 — ২ বিট ধার):
# ─────────────────────────# ───────────────# ───────────────# 
#  সাবনেট                    #  রেঞ্জ           #  ব্যবহারযোগ্য      # 
# ─────────────────────────# ───────────────# ───────────────# 
#  192.168.1.0/26          #  .0   → .63    #  .1   → .62    # 
#  192.168.1.64/26         #  .64  → .127   #  .65  → .126   # 
#  192.168.1.128/26        #  .128 → .191   #  .129 → .190   # 
#  192.168.1.192/26        #  .192 → .255   #  .193 → .254   # 
# ─────────────────────────# ───────────────# ───────────────# 

— কেন দরকার? ৫০০ জনের অফিসে এক /24 নেটওয়ার্কে —
— চারটি বিভাগ চারটি সাবনেটে — ব্রডকাস্ট কমে, নিরাপত্তা বাড়ে —</div>

<div class="verse">وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ وَفَجَّرْنَا فِيهَا أَنْهَارًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং পৃথিবীতে আমরা স্থাপন করেছি পর্বতমালা এবং সেখানে প্রবাহিত করেছি নদী।" — কুরআন ৫০:৭</div>

<p class="scene-setting">এই আয়াতে পৃথিবীর অবকাঠামোর কথা বলা হয়েছে — পর্বত স্থিতি রাখে, নদী পথ তৈরি করে। নেটওয়ার্কেও তেমন — রাউটার স্থির পয়েন্ট, রাউটিং টেবিল পথ তৈরি করে। প্যাকেট এক রাউটার থেকে আরেকটিতে যায়, নদীর মতো প্রবাহিত হয়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ১৫:</strong> Dijkstra-এর shortest path algorithm শিখেছিলে — সেটাই OSPF routing-এ ব্যবহৃত হয়! Book ২ Door ১৪: Graph BFS/DFS — নেটওয়ার্ক topology একটি graph।</div></div>

<div class="secret-box">🛣️ <strong>IP ঠিকানা = বাড়ির ঠিকানা, রাউটার = ডাকপিয়নের পথনির্দেশক।</strong> প্যাকেট প্রতিটি রাউটারে থামে, জিজ্ঞেস করে — এর পর কোন দিকে? TTL নিশ্চিত করে যে প্যাকেট চিরকাল ঘুরবে না। কিন্তু পথ পাওয়া যাবে — কিন্তু প্যাকেট পৌঁছালেই কি কাজ শেষ? না। প্যাকেট হারিয়ে গেলে? ক্রম ভুল হলে? সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Network Layer (IP + Routing) এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">IPv4</td><td>৩২ বিট — ৪.৩ বিলিয়ন ঠিকানা (শেষ হচ্ছে)</td></tr>
<tr><td class="hl">IPv6</td><td>১২৮ বিট — ৩.৪*১০³⁸ ঠিকানা (সসীম নয়)</td></tr>
<tr><td class="hl">Subnet Mask</td><td>নেটওয়ার্ক ও হোস্ট অংশ আলাদা করে — ২৫৫.২৫৫.২৫৫.০</td></tr>
<tr><td class="hl">NAT</td><td>এক পাবলিক IP-তে অনেক প্রাইভেট IP লুকানো</td></tr>
<tr><td class="hl">Router</td><td>রাউটিং টেবিল দেখে প্যাকেট সঠিক দিকে পাঠায়</td></tr>
<tr><td class="hl">OSPF</td><td>অভ্যন্তরীণ — Dijkstra shortest path</td></tr>
<tr><td class="hl">BGP</td><td>ইন্টারনেটের মেরুদণ্ড — AS এর মধ্যে রাস্তা</td></tr>
<tr><td class="hl">TTL</td><td>সর্বোচ্চ হপ কাউন্ট — সাধারণত ৬৪</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "📦",
  color: "#38bdf8",
  name: "নির্ভরযোগ্য বার্তাবাহক",
  subtitle: "The Reliable Messenger",
  tech: "Transport Layer — TCP (Cerf-Kahn 1974), 3-way handshake, UDP, ports, flow control, congestion control",
  spirit: "আমানত — আস্থা, বার্তা নিরাপদে পৌঁছানোর দায়িত্ব",
  secret: "TCP = নিবন্ধিত ডাক — প্রতিটি প্যাকেটে রসিদ। UDP = সাধারণ ডাক — পাঠাও, পৌঁছালে পৌঁছালো।",
  recall: {
    q: " TCP 3-way handshake-এর তিনটি ধাপ কী?",
    qen: "What are the three steps of TCP 3-way handshake?",
    a: "SYN → SYN-ACK → ACK। ক্লায়েন্ট অনুরোধ পাঠায়, সার্ভার স্বীকার করে, ক্লায়েন্ট নিশ্চিত করে।",
    aen: "SYN → SYN-ACK → ACK. Client requests, server acknowledges, client confirms."
  },
  story: `<p class="scene-setting">তুমি একটি গুরুত্বপূর্ণ দলিল পাঠাচ্ছো। দুটি উপায়: প্রথম — সাধারণ ডাকে পাঠাও। সস্তা, দ্রুত, কিন্তু কোনো নিশ্চয়তা নেই। পৌঁছালে ভালো, না পৌঁছালে জানবেও না। দ্বিতীয় — নিবন্ধিত ডাকে পাঠাও। প্রতিটি ধাপে স্বাক্ষর, রসিদ। দামি, ধীর, কিন্তু নিশ্চিত। প্রথমটি UDP, দ্বিতীয়টি TCP।</p>
<p class="scene-setting en">You're sending an important document. Two ways: first — regular mail. Cheap, fast, but no guarantee. Arrived? Good. Didn't? You won't know. Second — registered mail. Signature at each step, receipt. Expensive, slow, but certain. The first is UDP, the second is TCP.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>TCP (Transmission Control Protocol):</strong><br>
<strong>৩-way handshake:</strong> SYN → SYN-ACK → ACK (সংযোগ স্থাপন)<br>
<strong>Sequence Numbers:</strong> প্রতিটি বাইটের একটি ক্রম নম্বর<br>
<strong>Acknowledgment:</strong> "আমি প্যাকেট ১-৫ পেয়েছি, এখন ৬ পাঠাও"<br>
<strong>Retransmission:</strong> রসিদ না পেলে আবার পাঠাও<br>
<strong>Flow Control:</strong> প্রাপক বলে — "আমি ১০০০ বাইট ধারণ করতে পারি, বেশি পাঠিও না" (sliding window)<br>
<strong>Congestion Control:</strong> নেটওয়ার্ক ব্যস্ত হলে গতি কমাও (slow start, AIMD)</div></div>

<div class="diagram">
<div class="diag-title">TCP 3-Way Handshake — সংযোগ স্থাপন</div>
<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrCyan4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#3dd6c4"/></marker>
  <marker id="arrAmber4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#fbbf24"/></marker>
</defs>
<!-- Client lifeline -->
<rect x="40" y="20" width="120" height="40" rx="8" fill="rgba(255,107,53,.15)" stroke="#ff6b35" stroke-width="2"/>
<text x="100" y="38" fill="#ff6b35" font-size="12" font-weight="700" text-anchor="middle">CLIENT</text>
<text x="100" y="52" fill="#9290a8" font-size="9" text-anchor="middle">seq=x</text>
<line x1="100" y1="60" x2="100" y2="260" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,4"/>
<!-- Server lifeline -->
<rect x="400" y="20" width="120" height="40" rx="8" fill="rgba(82,196,26,.15)" stroke="#52c41a" stroke-width="2"/>
<text x="460" y="38" fill="#52c41a" font-size="12" font-weight="700" text-anchor="middle">SERVER</text>
<text x="460" y="52" fill="#9290a8" font-size="9" text-anchor="middle">seq=y</text>
<line x1="460" y1="60" x2="460" y2="260" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,4"/>
<!-- Step 1: SYN -->
<line x1="100" y1="100" x2="395" y2="100" stroke="#3dd6c4" stroke-width="2.5" marker-end="url(#arrCyan4)"/>
<text x="250" y="92" fill="#3dd6c4" font-size="12" font-weight="700" text-anchor="middle">SYN, seq=x</text>
<text x="250" y="112" fill="#9290a8" font-size="9" text-anchor="middle">"আমি সংযোগ চাই"</text>
<!-- Step 2: SYN-ACK -->
<line x1="460" y1="150" x2="105" y2="150" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arrAmber4)"/>
<text x="250" y="142" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">SYN-ACK, seq=y, ack=x+1</text>
<text x="250" y="162" fill="#9290a8" font-size="9" text-anchor="middle">"ঠিক আছে, আমি প্রস্তুত"</text>
<!-- Step 3: ACK -->
<line x1="100" y1="200" x2="395" y2="200" stroke="#3dd6c4" stroke-width="2.5" marker-end="url(#arrCyan4)"/>
<text x="250" y="192" fill="#3dd6c4" font-size="12" font-weight="700" text-anchor="middle">ACK, ack=y+1</text>
<text x="250" y="212" fill="#9290a8" font-size="9" text-anchor="middle">"নিশ্চিত করলাম, সংযোগ স্থাপিত"</text>
<!-- Connection established banner -->
<rect x="120" y="235" width="320" height="30" rx="15" fill="rgba(82,196,26,.1)" stroke="#52c41a" stroke-width="1.5"/>
<text x="280" y="250" fill="#52c41a" font-size="11" font-weight="700" text-anchor="middle">✓ সংযোগ স্থাপিত — ডেটা আদান-প্রদান শুরু</text>
</svg>
<div class="diag-cap">Step ১: SYN (ক্লায়েন্ট অনুরোধ) · Step ২: SYN-ACK (সার্ভার স্বীকার) · Step ৩: ACK (ক্লায়েন্ট নিশ্চিত)</div>
</div>

<div class="code-block">— TCP হেডার গঠন (২০ বাইট ন্যূনতম) —
# ───────────────────────────────────────────────────────────# 
#   সোর্স পোর্ট (১৬ বিট)    #   গন্তব্য পোর্ট (১৬ বিট)      # 
# ───────────────────────────────────────────────────────────# 
#   সিকোয়েন্স নম্বর (৩২ বিট) — প্রতিটি বাইটের ক্রম         # 
# ───────────────────────────────────────────────────────────# 
#   অ্যাকনলেজমেন্ট নম্বর (৩২ বিট) — "এত পেয়েছি"             # 
# ─────────────# ─────────────# ───────────────────────────────# 
#  Data Offset #   Flags      #   Window Size (রিসিভার ধারণ)   # 
#   (৪ বিট)    #  SYN ACK FIN #   (১৬ বিট)                     # 
# ───────────────────────────────────────────────────────────# 
#   Checksum (১৬ বিট)      #   Urgent Pointer (১৬ বিট)      # 
# ───────────────────────────────────────────────────────────# 
#   Options (ঐচ্ছিক)  ·  ·  ·  Data (তোমার আসল বার্তা)      # 
# ───────────────────────────────────────────────────────────# </div>

<div class="code-block">— সক্রিয় TCP সংযোগ দেখো —
$ netstat -tn    (Linux/macOS)

Active Internet connections (TCP)
Proto  Local Address          Foreign Address        State
tcp    192.168.1.42:52341     142.250.190.46:443     ESTABLISHED
tcp    192.168.1.42:52342     140.82.112.4:443       TIME_WAIT
tcp    192.168.1.42:52343     151.101.1.69:80        SYN_SENT   ← সংযোগ চলছে

— State পড়ো: —
  ESTABLISHED = সংযোগ চালু     LISTEN = সার্ভার অপেক্ষা
  SYN_SENT   = ক্লায়েন্ট হাতছাড়া  TIME_WAIT = বন্ধ হচ্ছে</div>

<div class="code-block">— tcpdump: TCP handshake ধরো —
$ sudo tcpdump -i eth0 -n 'tcp port 443' -c 6

11:30:01.123 IP 192.168.1.42.52341 > 142.250.190.46.443: Flags [S],    seq 1234567
    ← SYN: ক্লায়েন্ট "সংযোগ চাই"
11:30:01.135 IP 142.250.190.46.443 > 192.168.1.42.52341: Flags [S.],   seq 9876543
    ← SYN-ACK: সার্ভার "ঠিক আছে"
11:30:01.136 IP 192.168.1.42.52341 > 142.250.190.46.443: Flags [.],    ack 9876544
    ← ACK: ক্লায়েন্ট "নিশ্চিত করলাম"

— Flags: [S]=SYN  [.]=ACK  [P]=PUSH  [F]=FIN  [R]=RST —
— এটাই Wireshark দেখায় — কিন্তু টার্মিনালে বিনামূল্যে —</div>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>UDP (User Datagram Protocol):</strong><br>
কোনো সংযোগ নেই। কোনো রসিদ নেই। কোনো ক্রম নেই।<br>
শুধু — পাঠাও। দ্রুত। সস্তা।<br>
<strong>ব্যবহার:</strong> ভিডিও স্ট্রিমিং, অনলাইন গেম, VoIP, DNS — যেখানে একটু ডেটা হারিয়ে গেলেও সমস্যা নেই, কিন্তু গতি দরকার।</div></div>

<div class="compare">
<div class="cmp-card cmp-good"><div class="cmp-label">✅ TCP</div>নির্ভরযোগ্য, ক্রম ঠিক, রসিদ আছে। ওয়েব পেজ, ইমেইল, ফাইল ট্রান্সফার। ধীর কিন্তু নিশ্চিত।</div>
<div class="cmp-card cmp-bad"><div class="cmp-label">⚡ UDP</div>দ্রুত, সস্তা, কোনো নিশ্চয়তা নেই। স্ট্রিমিং, গেম, DNS। একটু হারিয়ে গেলেও চলবে।</div>
</div>

<div class="callout info"><span class="co-icon">🚪</span><div><strong>পোর্ট (Ports):</strong> একটি IP ঠিকানা = একটি ভবন। পোর্ট = ভবনের কোন কক্ষে যাবে।<br>
HTTP → পোর্ট ৮০ | HTTPS → পোর্ট ৪৪৩ | SSH → পোর্ট ২২ | DNS → পোর্ট ৫৩<br>
০-১০২৩: ওয়েল-নোন (সিস্টেম) | ১০২৪-৪৯১৫১: রেজিস্টার্ড | ৪৯১৫২-৬৫৫৩৫: ডায়নামিক</div></div>

<div class="verse">إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَى أَهْلِهَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আল্লাহ তোমাদের নির্দেশ দিচ্ছেন আমানত তার অধিকারীর কাছে পৌঁছাতে।" — কুরআন ৪:৫৮</div>

<p class="scene-setting">এই আয়াত আমানত পৌঁছানোর নির্দেশ দেয়। TCP-ও তেমন — এটি একটি আমানতদার বার্তাবাহক। প্রতিটি প্যাকেট একটি আমানত। TCP নিশ্চিত করে যে প্যাকেট সঠিকভাবে, সঠিক ক্রমে, নিরুপায় গন্তব্যে পৌঁছেছে। UDP ক্ষেত্রে — আমানত পাঠানো হলো, কিন্তু দায়িত্ব প্রাপকের।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস) Door ৫:</strong> 2PC, 3PC, Saga pattern শিখেছিলে — এগুলো TCP-এর reliability-র উপর নির্মিত। Book ৪ (সিস্টেম ডিজাইন): Load balancer, Circuit Breaker — এগুলো Transport স্তরের উপর কাজ করে।</div></div>

<div class="secret-box">📦 <strong>TCP = নিবন্ধিত ডাক, UDP = সাধারণ ডাক।</strong> প্রতিটি প্রোটোকল একটি ট্রেড-অফ — নির্ভরযোগ্যতা নাকি গতি। TCP জিনিস পৌঁছায় নিশ্চিত করে, UDP দ্রুত পাঠায়। কোনটি ব্যবহার করবে তা নির্ভর করে তুমি কী পাঠাচ্ছো তার উপর। কিন্তু তুমি "google.com" লিখে এন্টার চাপলে — কে বলে গুগলের সার্ভার কোথায় আছে? সেই সমাধান আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Transport Layer (TCP + UDP) এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">TCP</td><td>নির্ভরযোগ্য, সংযোগ-ভিত্তিক, ক্রম ঠিক</td></tr>
<tr><td class="hl">UDP</td><td>দ্রুত, সংযোগহীন, কোনো নিশ্চয়তা নেই</td></tr>
<tr><td class="hl">3-way Handshake</td><td>SYN → SYN-ACK → ACK</td></tr>
<tr><td class="hl">Sequence + ACK</td><td>প্রতিটি বাইটের ক্রম, রসিদ</td></tr>
<tr><td class="hl">Sliding Window</td><td>flow control — প্রাপক ধারণক্ষমতা জানায়</td></tr>
<tr><td class="hl">Congestion Control</td><td>slow start → AIMD → নেটওয়ার্ক সুরক্ষা</td></tr>
<tr><td class="hl">Ports</td><td>০-৬৫৫৩৫ — HTTP:৮০, HTTPS:৪৪৩, DNS:৫৩, SSH:২২</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "📖",
  color: "#38bdf8",
  name: "নামের রক্ষক",
  subtitle: "The Name Keeper",
  tech: "DNS (Domain Name System) — Mockapetris 1983, hierarchical resolution, root/TLD/authoritative servers, caching, TTL",
  spirit: "আসমা — নামকরণ, সবকিছুর একটি নাম আর একটি ঠিকানা",
  secret: "DNS = ইন্টারনেটের ফোনবুক। নাম দাও, ঠিকানা পাও। কেউ মুখস্থ করে না ১৪২.২৫০.১৯০.৪৬ — সবাই বলে google.com।",
  recall: {
    q: " DNS resolution-এ কয়টি স্তর থাকে?",
    qen: "How many levels are in DNS resolution?",
    a: "৪টি — Root (.) → TLD (.com) → Authoritative (google.com) → IP। Browser cache → OS cache → Recursive → Root → TLD → Authoritative।",
    aen: "4 — Root (.) → TLD (.com) → Authoritative (google.com) → IP."
  },
  story: `<p class="scene-setting">তুমি একটি বন্ধুকে ফোন করতে চাও। কিন্তু তার নম্বর মনে নেই। তুমি একটি ফোনবুক খোলো — "রহিম" খোঁজো। ফোনবুক বলে: "রহিম — ০১৭xxxxxxxx।" তুমি নম্বর ডায়াল করো। সংযোগ। ঠিক এভাবে DNS কাজ করে। তুমি "google.com" লেখো — DNS বলে: "১৪২.২৫০.১৯০.৪৬।" ব্রাউজার সেই ঠিকানায় যায়।</p>
<p class="scene-setting en">You want to call a friend. Don't remember the number. You open a phonebook — look up "Rahim." Phonebook says: "Rahim — 017xxxxxxxx." You dial. Connected. DNS works exactly like this. You type "google.com" — DNS says: "142.250.190.46." Browser goes there.</p>

<div class="dialogue"><strong>নামের রক্ষক ইদ্রিস:</strong> কিন্তু ফোনবুক একটি বই — DNS একটি বিশাল, বিতরণ করা ডাটাবেস। পুরো বিশ্বে ছড়িয়ে আছে। কোনো একটি সার্ভারে সব নাম রাখা সম্ভব নয় — বিলিয়ন বিলিয়ন নাম! তাই Paul Mockapetris ১৯৮৩ সালে একটি hierarchical ব্যবস্থা তৈরি করেছিলেন।</div>
<div class="dialogue en"><strong>Name Keeper Idris:</strong> But a phonebook is one book — DNS is a massive, distributed database. Spread across the entire world. No single server can hold all names — billions! So Paul Mockapetris in 1983 created a hierarchical system.</div>

<div class="callout info"><span class="co-icon">🌳</span><div><strong>DNS শ্রেণীক্রম (Hierarchy):</strong><br>
<strong>১. Root Servers (.):</strong> বিশ্বে ১৩টি logical root (হাজারো physical instances)। বলে — ".com কোথায়?"<br>
<strong>২. TLD Servers (.com, .org, .bn):</strong> Top-Level Domain। বলে — "google.com কোথায়?"<br>
<strong>৩. Authoritative Servers:</strong> প্রতিটি ডোমেইনের নিজস্ব সার্ভার। বলে — "google.com = ১৪২.২৫০.১৯০.৪৬"<br>
<strong>৪. Recursive Resolvers:</strong> তোমার ISP-এর সার্ভার। তোমার জন্য উপরের তিন স্তরে জিজ্ঞেস করে।</div></div>

<div class="callout info"><span class="co-icon">📝</span><div><strong>DNS Resolution প্রক্রিয়া:</strong><br>
১. তুমি "google.com" টাইপ করো<br>
২. ব্রাউজার cache চেক করে — আছে? ব্যবহার করো।<br>
৩. OS cache চেক করে — আছে? ব্যবহার করো।<br>
৪. Recursive Resolver (ISP) — cache চেক করে।<br>
৫. Root Server → ".com TLD-তে যাও"<br>
৬. TLD Server → "google.com-এর Authoritative-তে যাও"<br>
৭. Authoritative Server → "১৪২.২৫০.১৯০.৪৬"<br>
৮. Resolver তোমাকে দেয়, cache-এ সংরক্ষণ করে (TTL পর্যন্ত)।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>DNS Caching + TTL:</strong> প্রতিটি ডোমেইন একটি TTL সেট করে — কত সেকেন্ড এই ঠিকানা cache-এ রাখা যাবে। TTL শেষ হলে আবার জিজ্ঞেস করতে হয়। এটি ট্রাফিক কমায় কিন্তু সমস্যাও তৈরি করে — ঠিকানা বদলালে সবাই তৎক্ষণাৎ জানবে না।</div></div>

<div class="callout info"><span class="co-icon">📋</span><div><strong>DNS Record Types:</strong><br>
<strong>A:</strong> ডোমেইন → IPv4 ঠিকানা<br>
<strong>AAAA:</strong> ডোমেইন → IPv6 ঠিকানা<br>
<strong>CNAME:</strong> একটি নাম → আরেকটি নাম (alias)<br>
<strong>MX:</strong> মেইল সার্ভার ঠিকানা<br>
<strong>TXT:</strong> যাচাইকৃত টেক্সট (SPF, DKIM)<br>
<strong>NS:</strong> এই ডোমেইনের Authoritative সার্ভার কোনটি</div></div>

<div class="diagram">
<div class="diag-title">DNS শ্রেণীক্রম — নাম থেকে ঠিকানা</div>
<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="arrTeal5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#3dd6c4"/></marker>
</defs>
<!-- Root -->
<circle cx="280" cy="35" r="28" fill="rgba(251,191,36,.15)" stroke="#fbbf24" stroke-width="2"/>
<text x="280" y="32" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">Root</text>
<text x="280" y="46" fill="#9290a8" font-size="9" text-anchor="middle">(".")</text>
<!-- TLD level -->
<circle cx="130" cy="120" r="24" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="130" y="118" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">.com</text>
<text x="130" y="130" fill="#9290a8" font-size="8" text-anchor="middle">TLD</text>
<circle cx="280" cy="120" r="24" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="280" y="118" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">.org</text>
<text x="280" y="130" fill="#9290a8" font-size="8" text-anchor="middle">TLD</text>
<circle cx="430" cy="120" r="24" fill="rgba(56,189,248,.12)" stroke="#38bdf8" stroke-width="1.5"/>
<text x="430" y="118" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">.bn</text>
<text x="430" y="130" fill="#9290a8" font-size="8" text-anchor="middle">TLD</text>
<!-- Lines root→TLD -->
<line x1="265" y1="55" x2="145" y2="100" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="280" y1="63" x2="280" y2="96" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="295" y1="55" x2="415" y2="100" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<!-- Authoritative level -->
<rect x="75" y="190" width="110" height="40" rx="8" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/>
<text x="130" y="207" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">google.com</text>
<text x="130" y="220" fill="#9290a8" font-size="9" text-anchor="middle">142.250.190.46</text>
<rect x="225" y="190" width="110" height="40" rx="8" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/>
<text x="280" y="207" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">wikipedia.org</text>
<text x="280" y="220" fill="#9290a8" font-size="9" text-anchor="middle">208.80.154.224</text>
<rect x="375" y="190" width="110" height="40" rx="8" fill="rgba(82,196,26,.12)" stroke="#52c41a" stroke-width="1.5"/>
<text x="430" y="207" fill="#52c41a" font-size="10" font-weight="700" text-anchor="middle">gov.bd</text>
<text x="430" y="220" fill="#9290a8" font-size="9" text-anchor="middle">103.108.74.40</text>
<!-- Lines TLD→Auth -->
<line x1="130" y1="144" x2="130" y2="190" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="280" y1="144" x2="280" y2="190" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="430" y1="144" x2="430" y2="190" stroke="#5e5c74" stroke-width="1" stroke-dasharray="3,3"/>
<!-- Query flow (bottom) -->
<rect x="30" y="265" width="500" height="45" rx="8" fill="rgba(7,10,15,.6)" stroke="rgba(61,214,196,.2)" stroke-width="1"/>
<text x="280" y="282" fill="#3dd6c4" font-size="10" font-weight="600" text-anchor="middle">"google.com" টাইপ করো → Resolver Root-এ জিজ্ঞেস করে → ".com TLD" দেখায়</text>
<text x="280" y="298" fill="#3dd6c4" font-size="10" text-anchor="middle">→ TLD Authoritative দেখায় → "142.250.190.46" ফলাফল</text>
<!-- Arrows showing query path -->
<line x1="50" y1="210" x2="130" y2="120" stroke="#3dd6c4" stroke-width="1.5" stroke-dasharray="4,2" opacity=".5"/>
</svg>
<div class="diag-cap">Root (১৩টি) → TLD (.com/.org/.bn) → Authoritative (প্রতিটি ডোমেইনের নিজস্ব) · Resolver প্রতিটি স্তরে জিজ্ঞেস করে</div>
</div>

<div class="code-block">— dig: DNS রেজোলিউশন দেখো —
$ dig google.com

;; QUESTION SECTION:
;google.com.            IN  A

;; ANSWER SECTION:
google.com.     300  IN  A   142.250.190.46   ← TTL: 300s

;; Query time: 12 msec
;; SERVER: 192.168.1.1#53             ← তোমার resolver

— nslookup (সহজ সংস্করণ) —
$ nslookup google.com
Server:     192.168.1.1
Address:    192.168.1.1#53
Name:    google.com
Address: 142.250.190.46

— ভিন্ন রেকর্ড দেখো —
$ dig MX google.com    → মেইল সার্ভার
$ dig NS google.com    → কোন authoritative সার্ভার
$ dig AAAA google.com  → IPv6 ঠিকানা</div>

<div class="code-block">— DNS রেকর্ড টাইপ (বাস্তব উদাহরণ) —
google.com.    300   IN  A      142.250.190.46
google.com.    300   IN  AAAA   2607:f8b0:4004:800::200e
google.com.    3600  IN  MX     10 smtp.google.com
google.com.    86400 IN  NS     ns1.google.com.
www.google.com 3600  IN  CNAME  google.com.
google.com.    3600  IN  TXT    "v=spf1 include:_spf.google.com ~all"

— TTL (উপরের সংখ্যা): —
  300   = ৫ মিনিট (ঘন ঘন বদলায়)
  86400 = ১ দিন (স্থিতিশীল)
  ছোট TTL = দ্রুত আপডেট কিন্তু বেশি ট্রাফিক</div>

<div class="callout info"><span class="co-icon">🔌</span><div><strong>DHCP DORA Process (Missing Topic!):</strong> তুমি যখন Wi-Fi তে যুক্ত হও, তোমাকে একটি IP ঠিকানা দরকার। এটি DHCP প্রোটোকল দেয় — ৪টি ধাপে।<br>
<strong>D</strong>iscover: ক্লায়েন্ট ব্রডকাস্ট করে — "আমাকে IP দাও!"<br>
<strong>O</strong>ffer: DHCP সার্ভার বলে — "এই নাও ১৯২.১৬৮.১.৪২"<br>
<strong>R</strong>equest: ক্লায়েন্ট বলে — "ঠিক আছে, এটাই নিচ্ছি"<br>
<strong>A</strong>cknowledge: সার্ভার বলে — "নিশ্চিত, এটা তোমার"</div></div>

<div class="code-block">— DHCP DORA প্রক্রিয়া প্যাকেটে —
  ক্লায়েন্ট                       DHCP সার্ভার
     #                                # 
     #  ── DISCOVER (broadcast) ────→ #   "আমাকে IP দাও"
     #                                # 
     #  ←── OFFER (unicast) ────────  #   "এই 192.168.1.42"
     #                                # 
     #  ── REQUEST (broadcast) ────→  #   "এটাই চাই"
     #                                # 
     #  ←── ACK (unicast) ──────────  #   "নিশ্চিত, TTL=86400s"
     #                                # 

— Lease time: সাধারণত ২৪ ঘণ্টা — অর্ধেক হলে রিনিউ করে —
— DNS, gateway, subnet mask সব DHCP দেয় — শুধু IP নয় —</div>

<div class="verse">وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তিনি আদমকে শিখিয়েছিলেন সমস্ত নাম।" — কুরআন ২:৩১</div>

<p class="scene-setting">এই আয়াতে আল্লাহ আদমকে সমস্ত নাম শিখিয়েছিলেন — নামকরণ জ্ঞানের ভিত্তি। DNS-ও তেমন — নাম ছাড়া ইন্টারনেট ব্যবহার অসম্ভব। আমরা আইপি ঠিকানা মনে রাখি না, নাম মনে রাখি। DNS সেই নামকে ঠিকানায় অনুবাদ করে। এটিই ইন্টারনেটের প্রথম পদক্ষেপ — নাম থেকে ঠিকানা।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> CDN, Load Balancer, API Gateway — সবই DNS-এর উপর নির্ভর করে। Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস): বিতরণ করা ডাটাবেস — DNS হলো বিশ্বের সবচেয়ে বড় distributed database।</div></div>

<div class="secret-box">📖 <strong>DNS = ইন্টারনেটের ফোনবুক।</strong> নাম দাও, ঠিকানা পাও। শ্রেণীক্রমে প্রশ্ন করে — Root → TLD → Authoritative। প্রতিটি স্তরে cache করে যাতে পরের বার দ্রুত পাওয়া যায়। এখন তুমি জানো ঠিকানা পাওয়া যায় — কিন্তু সেই ঠিকানায় কীভাবে কথা বলবে? কোন ভাষায়? সেই যাত্রা শুরু হবে পরের দরজায়।</div>`,
  senior: {
    title: "DNS এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">DNS</td><td>Mockapetris ১৯৮৩ — Domain Name System</td></tr>
<tr><td class="hl">Hierarchy</td><td>Root (.) → TLD (.com) → Authoritative → IP</td></tr>
<tr><td class="hl">Root Servers</td><td>১৩টি logical, হাজারো physical instances</td></tr>
<tr><td class="hl">Recursive Resolver</td><td>ISP সার্ভার — তোমার জন্য জিজ্ঞেস করে</td></tr>
<tr><td class="hl">Caching</td><td>ব্রাউজার → OS → Resolver — TTL পর্যন্ত</td></tr>
<tr><td class="hl">A Record</td><td>ডোমেইন → IPv4</td></tr>
<tr><td class="hl">CNAME</td><td>alias — এক নাম থেকে আরেক নাম</td></tr>
<tr><td class="hl">MX Record</td><td>মেইল সার্ভার ঠিকানা</td></tr></table>`
  }
});
