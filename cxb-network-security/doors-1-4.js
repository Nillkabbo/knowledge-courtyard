// doors-1-4.js — Cloud X Berry Series Book 4: The Network Fortress
// Source: Networking & Security playlist (12 videos)
const doors = [];

doors.push({
  num: 1,
  icon: "🗺️",
  color: "#22d3ee",
  name: "নেটওয়ার্কের মানচিত্র",
  subtitle: "Network Types + Every Networking Concept in 200 Seconds",
  tech: "PAN/LAN/WLAN/CAN/MAN/WAN; IP, gateway, DNS, packets, routing, TCP/UDP, ports",
  spirit: "বসর — প্রথমে জানা, প্রশ্নের দরজা খোলা",
  secret: "নেটওয়ার্কিং মানে একটাই গল্প — পরিচয় (IP), পথ (routing), ভাষা (protocols), আর দরজা (ports); আর জগৎটা স্কোপে বাঁধা — এক মানুষের PAN থেকে দেশভরের WAN।",
  recall: {
    q: "IP, gateway, DNS আর packet — প্রতিটার এক-লাইন ভূমিকা বলো।",
    qen: "One-line role of IP, gateway, DNS, and packet.",
    a: "IP = ডিভাইসের পরিচয়-ঠিকানা (private ঘরের ভেতরে, public রাউটারে); default gateway = লোকাল জগৎ থেকে বাইরের পৃথিবীতে বেরোনোর দরজা (সাধারণত রাউটার); DNS = নাম থেকে ঠিকানা হওয়ার ফোনবুক (google.com → IP); packet = ভাঙা ডেটার টুকরো — সাথে source/destination IP, যাতে বিপরীত পথে ফেরত পারে।",
    aen: "IP = the device's identity address; gateway = the exit door from the local network; DNS = the phonebook turning names into addresses; packet = a piece of data carrying source/destination IPs."
  },
  story: `<p class="scene-setting">সব শুরু এক প্রশ্নে — এক কম্পিউটার পৃথিবীর অন্য প্রান্তের আরেক কম্পিউটারের সাথে কথা বলে কীভাবে? উত্তরটা একটা সুশৃঙ্খল জগৎ: পরিচয় আছে, পথ আছে, ভাষা আছে, দরজা আছে। আর সেই জগতের নিজেরও স্তর আছে — এক ব্যক্তির কাছ থেকে মহাদেশ পর্যন্ত।</p>
<p class="scene-setting en">Everything begins with one question — how does one computer talk to another across the world? The answer is an ordered world: identity, paths, languages, doors — and its own layers of scale, from one person to continents.</p>
<div class="code-block">জগতের স্কোপ-সিঁড়ি (ছোট থেকে বড়):

PAN — এক ব্যক্তির জগৎ: ফোন ↔ ইয়ারবাড ↔ স্মার্টওয়াচ
      (Bluetooth-এর রাজ্য)
LAN — এক ঘর/অফিস/বিল্ডিং: ল্যাপটপ, প্রিন্টার, সার্ভার
      (Ethernet তারে বা Wi-Fi তরঙ্গে)
      ⚠️ LAN ≠ ইন্টারনেট: নেট নামলেও ঘরের ভেতরে
      ল্যাপটপ→প্রিন্টার কথা বলতেই পারে!
WLAN — বেতাঁয়ের LAN; পরের স্তর নয়, একই স্তর —
      শুধু সংযোগের মাধ্যম ওয়্যারলেস
CAN — এক ক্যাম্পাস: লাইব্রেরি + ইঞ্জিনিয়ারিং +
      অ্যাডমিন ভবনের LAN-দের জোড়া
MAN — এক শহর; WAN — দেশ/মহাদেশ — ইন্টারনেটের কাঠামো</div>
<div class="code-block">আর জগতের ভেতরের আইন-কানুন (২০০ সেকেন্ডের ভাণ্ডার):

পরিচয়: IP ঠিকানা — ঘরের ভেতরে private,
  বাইরে যায় রাউটারের এক public মুখে
সংযোগ: Wi-Fi/Ethernet ইন্টারফেস — সাথে আসে
  IP + gateway + DNS-এর ঠিকানা
যাত্রা: ডেটা যায় না এক পাখির মতো — যায়
  PACKET-এ ভেঙে; প্রতিটায় source+destination IP;
  ROUTER প্রতি হপে সেরা পথ বেছে দেয় —
  ট্রাফিকের ধারায় পথ বদলায়, তবু গন্তব্যে পৌঁছায়
ভাষা: PROTOCOL — IP (ঠিকানা+রুট), TCP
  (ক্রম-নিশ্চিত, হারালে আবার চাওয়া), UDP
  (দ্রুত, নিশ্চয়তা নেই — স্ট্রিমিং/গেমিং)
নাম-সমাধান: DNS — মানুষের ভাষা google.com
  থেকে মেশিনের ভাষা IP
দরজা: PORT — এক IP-তে কোটি সেবা;
  ৪৪৩ HTTPS, ২২ SSH — দরজার নম্বরচিহ্ন</div>
<div class="secret-box">🗺️ পরিচয়, পথ, ভাষা, দরজা — চার শব্দে পুরো নেটওয়ার্কিং; আর স্কোপ বদলায় PAN থেকে WAN — নিয়ম একই থাকে।</div>`,
  senior: {
    title: "নেটওয়ার্ক মৌলিক — দ্রুত গাইড",
    body: "<p><strong>স্কোপ-সিঁড়ি:</strong> PAN (ব্যক্তি/Bluetooth) → LAN (ঘর/অফিস; ইন্টারনেট-নিরপেক্ষ) → WLAN (বেতাঁয় LAN) → CAN (ক্যাম্পাস) → MAN → WAN (ইন্টারনেট)। <strong>আইন:</strong> IP (private/public), gateway (বাইরের দরজা), DNS (নাম→IP), packet (ভাঙা ডেটা+ঠিকানা), routing (hop-by-hop), TCP (নিশ্চিত) বনাম UDP (দ্রুত), port (সেবার দরজা: 443/22)। নিয়ম: স্কোপ যত বড়, নিয়ম একই — শুধু জায়গা বদলায়।</p>"
  }
});

doors.push({
  num: 2,
  icon: "🏛️",
  color: "#22d3ee",
  name: "সাত স্তরের যাত্রা",
  subtitle: "The Best OSI Model Explanation",
  tech: "OSI 7 layers via one YouTube request — application→presentation→session→transport→network→data link→physical",
  spirit: "মাকামাত — জ্ঞানের স্তরে স্তরে আরোহণ",
  secret: "OSI মুখস্থ নয় — একটা অনুরোধের পূর্ণ যাত্রার দিনলিপি: প্রশ্ন ওঠে স্তর ৭-এ, পৃথিবী পেরোয় ১-এর তারে, আর উত্তর ফেরে উল্টো পথে — প্রতিটা স্তর একটা নির্দিষ্ট দায়িত্ব মাত্র।",
  recall: {
    q: "OSI-র স্তর ৭, ৪, ১ — তিনটার কাজ এক লাইনে কী?",
    qen: "One-line job of OSI layers 7, 4, and 1.",
    a: "স্তর ৭ (Application) — অ্যাপের নিজের কথা: ব্রাউজার YouTube-এর জন্য অনুরোধ বানায়। স্তর ৪ (Transport) — নির্ভরযোগ্য বিতরণ: বড় অনুরোধ TCP-তে ভেঙে টুকরো, ক্রম-নম্বরসহ। স্তর ১ (Physical) — বিটের বাহন: তারে/তরঙ্গে ০-১ যাত্রা। মনে রাখার ছড়া: All People Seem To Need Data Processing (৭→১)।",
    aen: "Layer 7 (Application) builds the app's request; Layer 4 (Transport) splits it reliably (TCP); Layer 1 (Physical) carries the bits on wire/wireless. Mnemonic: All People Seem To Need Data Processing."
  },
  story: `<p class="scene-setting">তুমি youtube.com টাইপ করে Enter চাপলে। কয়েক সেকেন্ডে ভিডিও এসে যায়। কিন্তু পেছনে অনুরোধটা পেরিয়েছে ধাপে ধাপে — YouTube-কে খুঁজে, এনক্রিপ্ট করে, সেশন সাজিয়ে, টুকরোয় ভেঙে, ঠিকানা দিয়ে, তারে বইয়ে। OSI মডেল সেই যাত্রার নকশা — এবং শিক্ষকের ব্যাখ্যা তাকে বানায় সেরা কাহিনি।</p>
<p class="scene-setting en">You type youtube.com and press Enter. Seconds later the page arrives. But the request passed through steps — finding YouTube, encrypting, sessioning, segmenting, addressing, framing, riding the wire. The OSI model is that journey's blueprint.</p>
<div class="diagram">
<div class="diag-title">এক অনুরোধের সাত স্তর — শিক্ষকের চিত্র</div>
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="40" y="10" width="480" height="30" rx="6"/>
  <text class="lbl" x="60" y="30">৭ · APPLICATION</text>
  <text class="lbl-sm" x="510" y="30" text-anchor="end">ব্রাউজার অনুরোধ বানায়</text>
  <rect class="cell" x="40" y="46" width="480" height="30" rx="6"/>
  <text class="lbl" x="60" y="66">৬ · PRESENTATION</text>
  <text class="lbl-sm" x="510" y="66" text-anchor="end">এনক্রিপশন/ফরম্যাট — শুধু গন্তব্য পড়তে পারে</text>
  <rect class="cell" x="40" y="82" width="480" height="30" rx="6"/>
  <text class="lbl" x="60" y="102">৫ · SESSION</text>
  <text class="lbl-sm" x="510" y="102" text-anchor="end">কথোপকথন আলাদা রাখা — YouTube/ Gmail/ Teams</text>
  <rect class="cell" x="40" y="118" width="480" height="30" rx="6"/>
  <text class="lbl" x="60" y="138">৪ · TRANSPORT</text>
  <text class="lbl-sm" x="510" y="138" text-anchor="end">TCP/UDP — ভাঙা, ক্রম, পোর্ট</text>
  <rect class="cell" x="40" y="154" width="480" height="30" rx="6"/>
  <text class="lbl" x="60" y="174">৩ · NETWORK</text>
  <text class="lbl-sm" x="510" y="174" text-anchor="end">IP ঠিকানা + রাউটিং</text>
  <rect class="cell" x="40" y="190" width="480" height="30" rx="6"/>
  <text class="lbl" x="60" y="210">২ · DATA LINK</text>
  <text class="lbl-sm" x="510" y="210" text-anchor="end">MAC ঠিকানায় ফ্রেম — লোকাল হাতবদল</text>
  <rect class="cell" x="40" y="226" width="480" height="30" rx="6"/>
  <text class="lbl" x="60" y="246">১ · PHYSICAL</text>
  <text class="lbl-sm" x="510" y="246" text-anchor="end">বিট — তারে/তরঙ্গে ০-১</text>
  <text class="lbl-sm" x="280" y="278" text-anchor="middle">অনুরোধ নামে ৭→১, উত্তর ওঠে ১→৭ — প্রতিটা স্তর শুধু নিজের দায়িত্ব বহন করে</text>
</svg>
<div class="diag-cap">DNS-কে ভাবো ইন্টারনেটের ফোনবুক — নাম দাও, ঠিকানা পাও (৭→৩-এর সহযাত্রী)।</div>
</div>
<div class="callout tip"><span class="co-icon">🧠</span><div><strong>মুখস্থের চেয়ে চোখ:</strong> স্তরগুলো মুখস্থ কোরো না — <strong>একটা অনুরোধের গল্প মনে রাখো</strong>: প্রশ্ন (৭) → গোপনীয়তা (৬) → আলাদা কথা (৫) → ভাঙা-জোড়া (৪) → ঠিকানা (৩) → লোকাল হস্তান্তর (২) → তারে বিট (১)। গল্পটা জানলে প্রশ্নে স্তর জিজ্ঞেস করলে গল্পের দৃশ্যটাই উত্তর দেবে।</div></div>
<div class="secret-box">🏛️ OSI একটা গল্প — প্রশ্ন ওঠে উপরে, তারে নামে নিচে, উত্তর ফেরে উল্টো পথে; স্তর মানে দায়িত্বের ভাগ।</div>`,
  senior: {
    title: "OSI মডেল — দ্রুত গাইড",
    body: "<p><strong>৭ স্তর:</strong> Application (অ্যাপ-অনুরোধ) · Presentation (এনক্রিপশন/ফরম্যাট) · Session (কথোপকথন-ব্যবস্থাপনা) · Transport (TCP/UDP segment, পোর্ট, নির্ভরযোগ্যতা) · Network (IP+রাউটিং) · Data Link (MAC ফ্রেম, লোকাল) · Physical (বিট)। <strong>ব্যবহার:</strong> ডিবাগিং-এ স্তর-ভিত্তিক চিন্তা — কোন স্তরে সমস্যা, সেটাই প্রথম প্রশ্ন; DNS সমস্যা ≠ কেবল সমস্যা ≠ TLS সমস্যা। গল্প-ক্রমে শেখো, মুখস্ত নয়।</p>"
  }
});

doors.push({
  num: 3,
  icon: "🔌",
  color: "#22d3ee",
  name: "তারের নিয়ম",
  subtitle: "Ethernet Will Finally Make Sense",
  tech: "Ethernet = rules not cable; collisions, switches vs shared medium, frames, MAC vs IP",
  spirit: "নিয়ম — অগোছালো তারেও সুশৃঙ্খল সংলাপ",
  secret: "Ethernet মানে ক্যাবল নয় — লোকাল নেটওয়ার্কে কথা বলার নিয়মের বই; MAC ঠিকানা লোকাল হাতবদলের নাম, IP জার্নির — দুটো মিলে এক ফ্রেম চলে।",
  recall: {
    q: "Ethernet-কে শুধু ক্যাবল ভাবার ভুলটা কোথায়? MAC আর IP-র ভাগ কী?",
    qen: "Why is 'Ethernet = cable' wrong? MAC vs IP division?",
    a: "ক্যাবল শুধু সিগন্যালের বাহন; Ethernet হলো নিয়ম-সংহিতা — ডিভাইস লোকাল নেটে কীভাবে কথা বলবে, সংঘর্ষ (collision) হলে কী হবে, ফ্রেম কাকে বলে। MAC = নেটওয়ার্ক ইন্টারফেসের ভৌত ঠিকানা — লোকাল হাতবদলে (সুইচ ম্যাক দেখে ফরওয়ার্ড করে); IP = লজিক্যাল ঠিকানা — ইন্টারনেট-জোড়া যাত্রার।",
    aen: "The cable is just the medium; Ethernet is the rulebook for local communication, collisions, and frames. MAC = the physical address for local handoffs (switches forward by MAC); IP = the logical address for the internet journey."
  },
  story: `<p class="scene-setting">অনেকে Ethernet শুনলেই চোখের সামনে একটা নীল তার দেখে। কিন্তু শিক্ষক প্রথম ধাক্কাটাই দেন: তারটা শুধু রাস্তা — Ethernet হলো রাস্তার চলার নিয়ম। আর সেই নিয়মের সবচেয়ে সুন্দর অংশ: সংঘর্ষের সমাধান।</p>
<p class="scene-setting en">Many picture a blue cable when they hear Ethernet. The teacher's first jolt: the cable is just the road — Ethernet is the rules of driving on it. And its most beautiful part: solving collisions.</p>
<div class="code-block">সংঘর্ষ থেকে সুইচ — Ethernet-এর পরিণতি:

পুরনো দিন: সব কম্পিউটার এক শেয়ার্ড তারে।
  দুজন একসাথে বললে? COLLISION — সংকেত মুখোমুখি
  সংঘর্ষ, ডেটা নষ্ট। নেট বড় হলে অচল।

আধুনিক সমাধান: SWITCH।
  প্রত্যেক ডিভাইস সুইচের এক পোর্টে;
  সুইচ শেখে কোন পোর্টে কোন MAC বসেছে,
  আর ফ্রেম পেলে শুধু সঠিক দিকে পাঠায় —
  অন্যদের বিরক্ত করে না।</div>
<div class="code-block">ফ্রেম — লোকাল যাত্রার বাক্স:
  ভেতরে: source MAC + destination MAC + ডেটা
  সুইচ destination MAC দেখেই ঠিক করে
  কোন পোর্টে পাঠাবে।

তাহলে IP-র কাজ কী?
  MAC = এই লোকাল জগতের ঠিকানা
        (হাতবদল থেকে হাতবদল)
  IP  = পুরো ইন্টারনেট-জোড়া যাত্রার ঠিকানা
  প্যাকেট (IP) ফ্রেমের (MAC) ভেতরে বসে —
  প্রতি হপে ফ্রেম বদলায়, প্যাকেট এক থাকে।</div>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>আগের দরজার সেতু:</strong> দরজা ১-এ দেখেছিলে প্যাকেট ও রাউটিং, দরজা ২-এ OSI-র স্তর ৩ বনাম ২। আজ সেটাই বাস্তব হলো: <strong>IP (স্তর ৩) পুরো যাত্রার পরিকল্পনা করে, MAC (স্তর ২) প্রতি রাস্তার মোড়ে হাতবদল করায়</strong> — চিঠি এক, প্রতি শহরে নতুন পিয়ন।</div></div>
<div class="secret-box">🔌 তার নয়, নিয়ম — Ethernet; MAC লোকাল হাতের ঠিকানা, IP যাত্রার; প্রতি হপে ফ্রেম বদলায়, প্যাকেট এক থাকে।</div>`,
  senior: {
    title: "Ethernet — দ্রুত গাইড",
    body: "<p><strong>সংজ্ঞা:</strong> লোকাল (মূলত ওয়্যার্ড) নেটওয়ার্কের নিয়ম-পরিবার — ক্যাবল নয়। <strong>বিবর্তন:</strong> shared medium + collision → switch (পোর্ট-প্রতি ডিভাইস, MAC-শেখা ফরওয়ার্ডিং)। <strong>ফ্রেম:</strong> src MAC + dst MAC + ডেটা। <strong>MAC বনাম IP:</strong> MAC = লোকাল ইন্টারফেস-ঠিকানা (হপ-প্রতি), IP = এন্ড-টু-এন্ড লজিক্যাল ঠিকানা; প্যাকেট ফ্রেমে চড়ে, হপে হপে ফ্রেম নতুন, প্যাকেট অটল।</p>"
  }
});

doors.push({
  num: 4,
  icon: "📜",
  color: "#22d3ee",
  name: "বারো প্রোটোকলের ভাণ্ডার",
  subtitle: "12 Network Protocols Every Developer Should Know",
  tech: "HTTP(S), FTP, TCP/UDP, DNS, SMTP/IMAP, SSH, WebSocket, TLS, DHCP, NTP, ARP, SNMP",
  spirit: "রেওয়াজ — প্রতিটা সেবার নিজস্ব রীতি",
  secret: "১২টা প্রোটোকল মুখস্থ নয় — প্রতিটাকে জিজ্ঞেস করো — সে কী করে? পেজ আনে, ফাইল বয়ে আনে, নাম মেলায়, চিঠি পাঠায়, দূরের মেশিনে ঢোকে, ঘড়ি মিলায়; কাজ জানলে নাম নিজেই বসে যায়।",
  recall: {
    q: "DNS, SSH, DHCP, NTP — চারটার এক-লাইন কাজ?",
    qen: "One-line job of DNS, SSH, DHCP, and NTP?",
    a: "DNS = ডোমেইন-নাম → IP (ইন্টারনেটের ফোনবুক); SSH = এনক্রিপ্টেড দূর-প্রবেশ (২২ পোর্টে সার্ভার চালানো); DHCP = নেটে ঢুকে ঠিকানা-প্যাকেট পাওয়া (IP+gateway+DNS স্বয়ংক্রিয়); NTP = মেশিনগুলোর ঘড়ি মিলিয়ে দেওয়া (লগ-অডিটের প্রাণ)।",
    aen: "DNS = names to IPs; SSH = encrypted remote access; DHCP = automatic address assignment on join; NTP = clock synchronization across machines."
  },
  story: `<p class="scene-setting">ডেভেলপার হিসেবে প্রোটোকল তোমার দৈনন্দিন বাতাস — শুধু তুমি নামগুলো জানো না। শিক্ষক সাজান ১২টা অপরিহার্য, প্রতিটার পরিচয় কাজ দিয়ে — কারণ প্রোটোকল আসলে সেবার নাম, জাদুর শব্দ নয়।</p>
<p class="scene-setting en">As a developer, protocols are your daily air — you just don't know their names. The teacher arranges twelve essentials, each introduced by its job — because a protocol is the name of a service, not a magic word.</p>
<div class="code-block">১২ প্রোটোকল — কাজ দিয়ে পরিচয়:

ওয়েব-জগৎ:
  HTTP — request→response; ওয়েবপেজ + REST API
        (stateless — প্রতি অনুরোধ নতুন)
  HTTPS — HTTP + TLS এনক্রিপশন; লগইন/পেমেন্টে
        বাধ্যতামূলক (ব্যাংক, ই-কমার্স)
  WEBSOCKET — দুই-মুখো স্থায়ী সংযোগ; চ্যাট/লাইভ-টিকার
        (HTTP-র প্রশ্ন-উত্তরের বদলে খোলা লাইন)

ফাইল-চিঠি:
  FTP — সার্ভারে ফাইল ওঠানো/নামানো (পুরনো,
        প্লেইন-টেক্সট; নিরাপদ রূপ SFTP/FTPS)
  SMTP — চিঠি পাঠানো; IMAP — সার্ভারে পড়া/
        সিংক (ইনবক্স সব ডিভাইসে এক)

পরিবহন-ভিত্তি:
  TCP — ক্রম-নিশ্চিত, হারালে পুনরায় (নির্ভরযোগ্য)
  UDP — দ্রুত, নিশ্চয়তা নেই (স্ট্রিমিং/গেম)
  TLS — এনক্রিপ্টেড খাম; HTTPS/শপ-প্রোটোকলের নিরাপত্তা-আস্তরণ

ঠিকানা-সময়:
  DNS — নাম → IP; DHCP — নেটে ঢুকে ঠিকানা-প্যাক
        স্বয়ংক্রিয়; NTP — ঘড়ি-মিলন (লগ-ফরেনসিকের চাবি)
  ARP — IP → MAC মিলানো (লোকাল হাতবদলের আগে)
  SSH — এনক্রিপ্টেড দূর-শেল (Telnet-এর নিরাপদ উত্তরসূরি)
  SNMP — ডিভাইস-নেটওয়ার্ক নজরদারির প্রোটোকল</div>
<div class="callout tip"><span class="co-icon">📜</span><div><strong>শেখার নিয়ম:</strong> নামের তালিকা নয়, <strong>কাজের ম্যাপ</strong> বানাও — ওয়েব (HTTP/HTTPS/WebSocket), চিঠি (SMTP/IMAP), পরিবহন (TCP/UDP/TLS), অবকাঠামো (DNS/DHCP/NTP/ARP/SNMP)। বাস্তবে ডিবাগ করতেও এই ম্যাপই কাজে লাগে: সমস্যা কোন সেবায় — সেটাই প্রথম প্রশ্ন।</div></div>
<div class="secret-box">📜 প্রোটোকল = সেবার নাম — কাজ জানো, নাম নিজেই বসে যায়; ওয়েব-চিঠি-পরিবহন-অবকাঠামো, চার খাতেই সব।</div>`,
  senior: {
    title: "১২ প্রোটোকল — দ্রুত গাইড",
    body: "<p><strong>ওয়েব:</strong> HTTP (stateless req/res) · HTTPS (HTTP+TLS) · WebSocket (দুই-মুখো লাইভ)। <strong>চিঠি/ফাইল:</strong> SMTP (পাঠানো) · IMAP (সার্ভার-সিংক পড়া) · FTP (পুরনো; SFTP নাও)। <strong>পরিবহন:</strong> TCP (নিশ্চিত) · UDP (দ্রুত) · TLS (খাম)। <strong>অবকাঠামো:</strong> DNS (নাম→IP) · DHCP (ঢুকে ঠিকানা-প্যাক) · NTP (ঘড়ি-মিলন) · ARP (IP→MAC) · SSH (নিরাপদ দূর-শেল) · SNMP (নজরদারি)। নিয়ম: খাত-ম্যাপ মাথায় রাখো, নাম-তালিকা নয়।</p>"
  }
});
