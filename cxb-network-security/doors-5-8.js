// doors-5-8.js — Cloud X Berry Series Book 4: The Network Fortress
// Doors 5-8 (continued from doors-1-4.js — no const redeclaration)

doors.push({
  num: 5,
  icon: "🔐",
  color: "#22d3ee",
  name: "নিরাপদ সংযোগের দুই রাজপথ",
  subtitle: "HTTP vs HTTPS vs SSL vs TLS + How SSH Really Works",
  tech: "HTTP plain-text risk; HTTPS = HTTP+TLS; TLS handshake; SSH: sshd/client, key-pair auth, Telnet history",
  spirit: "আমানত — পথের কথা গোপন রাখা",
  secret: "HTTPS আলাদা প্রোটোকল নয় — TLS বাহনে চড়া HTTP; আর SSH মানে Telnet-এর ভুল শুধরে যুগ: সবকিছু এনক্রিপ্টেড, পরিচয় চাবি-জোড়ায়।",
  recall: {
    q: "HTTPS = HTTP + ___? TLS handshake-এ কী কী ঘটে? SSH-তে পাসওয়ার্ডের চেয়ে key-pair ভালো কেন?",
    qen: "HTTPS = HTTP + ___? What happens in the TLS handshake? Why prefer SSH key-pairs over passwords?",
    a: "HTTPS = HTTP + TLS (SSL-এর আধুনিক উত্তরসূরি)। Handshake-এ ব্রাউজার-সার্ভার পরস্পরের পরিচয় যাচাই করে, এনক্রিপশন-পদ্ধতি মিলায়, কী বিনিময় করে — তারপর স্বাভাবিক HTTP চলে সুরক্ষিত টানেলে। SSH-তে key-pair ভালো কারণ প্রাইভেট-কী কখনো পাঠানো হয় না (পাসওয়ার্ড পাঠায়, ধরা পড়তে পারে), আর brute-force-এ ভাঙা যায় না।",
    aen: "HTTPS = HTTP + TLS. The handshake verifies identities, agrees ciphers, exchanges keys — then HTTP flows through the tunnel. SSH key-pairs win because the private key never travels and can't be brute-forced."
  },
  story: `<p class="scene-setting">দুটো ভিডিও, দুটো নিরাপদ-রাজপথ। প্রথমটা ওয়েবের: HTTP-র ডাকঘর খোলা পোস্টকার্ড — পথে যে-কেউ পড়তে পারে, এমনকি বদলেও দিতে পারে। দ্বিতীয়টা সার্ভারের: মনিটর-কীবোর্ডহীন ডেটা-সেন্টারের মেশিনগুলো চালাতে হয় দূর থেকে — নিরাপদে।</p>
<p class="scene-setting en">Two videos, two secure highways. The first is the web's: HTTP is an open postcard. The second is the server's: headless data-center machines must be driven remotely — securely.</p>
<div class="code-block">HTTP → HTTPS-এর গল্প:

HTTP-র ঝুঁকি: ডেটা যায় PLAIN TEXT-এ।
  পাবলিক Wi-Fi-র লোক, মাঝপথের যে-কেউ —
  পাসওয়ার্ড, মেসেজ, কার্ড-নম্বর পড়তে পারে;
  আরও খারাপ — বদলেও দিতে পারে।

নিরাপদ সংযোগের চার স্তম্ভ:
  CONFIDENTIALITY — শুধু প্রেরক-প্রাপক পড়ে
  INTEGRITY — পথে বদল অসম্ভব
  AUTHENTICATION — কথা বলছে আসল সাইটের সাথে
  NON-REPUDIATION — পরে অস্বীকার করা যায় না

সূত্র: HTTPS = HTTP + TLS
  (চিঠি HTTP, তালাবন্ধ বাহন TLS)
  SSL পুরনো নাম-প্রজন্ম; TLS তার আধুনিক রূপ।

শুরুতেই TLS HANDSHAKE:
  পরিচয়-যাচাই → এনক্রিপশন-পদ্ধতি মিলন →
  কী বিনিময় → টানেল তৈরি
  তারপরই স্বাভাবিক HTTP চলে — ভেতরে সব গোপন।</div>
<div class="code-block">SSH — দূরের মেশিনের চাবি:

কেন? সার্ভারের কাছে মনিটর-কীবোর্ড নেই;
  প্রশাসক-ডেভেলপার চালান দূর থেকেই।

ইতিহাসের পাঠ: আগে ছিল TELNET —
  কাজ করতো, কিন্তু SAB PLAIN TEXT-এ;
  পাসওয়ার্ডসহ সব ধরা পড়তো। SSH এসে
  সবকিছু এনক্রিপ্ট করলো — নামই বলে:
  SECURE SHELL।

দুই চরিত্র:
  SSHD (সার্ভার-প্রান্ত) — চুপচাপ বসে শোনে
  SSH CLIENT (তোমার প্রান্ত) — সংযোগ চায়
  সম্পর্ক এক লাইনে: সার্ভার শোনে, ক্লায়েন্ট জোড়ে।

Enter চাপলে দুটো ঘটনা:
  ১. এনক্রিপ্টেড টানেল তৈরি
  ২. পরিচয়-যাচাই — দুই পথ:
     PASSWORD — সহজ, কিন্তু পাঠানো হয়,
     আর brute-force-এর শিকার
     KEY-PAIR — প্রফেশনাল পথ: public কী
     সার্ভারে থাকে, private কী তোমার কাছে;
     কখনো পাঠানো হয় না — গাণিতিক প্রমাণে
     সার্ভার বোঝে তোমার কাছে প্রাইভেট কী আছে।</div>
<div class="callout tip"><span class="co-icon">🔐</span><div><strong>দুই রাজপথের এক সুর:</strong> HTTPS ও SSH — দুটোই একই ভিত্তি-পাঠে দাঁড়িয়ে: <strong>প্লেইন-টেক্সট পথ অভিশপ্ত, এনক্রিপ্টেড টানেল অপরিহার্য, আর পরিচয়-যাচাই যাত্রার শর্ত</strong>। পার্থক্য শুধু মঞ্চ: একটা ব্রাউজার-সার্ভারের, আরেকটা টার্মিনাল-সার্ভারের।</div></div>
<div class="secret-box">🔐 HTTP-কে বাঁচায় TLS-বাহন, দূরের সার্ভারকে বাঁচায় key-pair — পথে যা পাঠাও না, তালা দিয়ে পাঠাও।</div>`,
  senior: {
    title: "HTTPS/TLS + SSH — দ্রুত গাইড",
    body: "<p><strong>HTTPS:</strong> HTTP + TLS (SSL-এর উত্তরসূরি); চার স্তম্ভ — confidentiality/integrity/authentication/non-repudiation; handshake-এ যাচাই+cipher-মিলন+কী-বিনিময়, তারপর HTTP টানেলে। <strong>SSH:</strong> Telnet-এর নিরাপদ উত্তরসূরি (সব এনক্রিপ্টেড); sshd শোনে, client জোড়ে; auth — password (পাঠায়, brute-forceable) নয় key-pair (private কী কখনো যায় না)। নিয়ম: সংবেদনশীল জায়গায় plain-text নিষিদ্ধ।</p>"
  }
});

doors.push({
  num: 6,
  icon: "🧮",
  color: "#22d3ee",
  name: "ক্রিপ্টোর তিন ভাই ও গোপন টানেল",
  subtitle: "Hashing vs Encryption vs Encoding + VPN Explained",
  tech: "Encoding (format, no key) / Encryption (key, reversible) / Hashing (one-way); VPN encrypted tunnel, ISP visibility, exit identity",
  spirit: "সতর — লুকানো যায়, বদলানো যায় না",
  secret: "Encoding রূপ বদলায়, Encryption তালায় বন্ধ করে, Hashing একমুখী ছাপ দেয় — তিন ভাই তিন কাজ; আর VPN হলো পুরো রাস্তাকেই এনক্রিপ্টেড পাইপে চালানো।",
  recall: {
    q: "Hashing, encryption, encoding — কোনটা reversible, কোনটায় কী লাগে? VPN ISP-কে কী দেখতে দেয়?",
    qen: "Which of hashing/encryption/encoding is reversible and which needs a key? What does a VPN let your ISP see?",
    a: "Encoding — কী নেই, যে-কেউ ফেরাতে পারে (Base64/URL — নিরাপত্তা নয়); Encryption — কী-নির্ভর, সঠিক কী থাকলে reversible (AES/RSA); Hashing — একমুখী, ফেরানোই উদ্দেশ্য নয় (SHA — পাসওয়ার্ড সংরক্ষণ/ইন্টিগ্রিটি)। VPN-এ ISP দেখে তুমি VPN-সার্ভারের সাথে কথা বলছো — কিন্তু ভেতরের ট্রাফিক এনক্রিপ্টেড, আর গন্তব্য (যেমন Google) দেখে সংযোগ VPN-সার্ভার থেকে এসেছে, তোমার ঘর থেকে নয়।",
    aen: "Encoding — no key, anyone reverses (not security). Encryption — key-based, reversible with the key. Hashing — one-way by design. With a VPN the ISP sees you talking to a VPN server but not the encrypted contents; destinations see the VPN's identity, not yours."
  },
  story: `<p class="scene-setting">নিরাপত্তার ক্লাসে তিন শব্দ ঘুরেফিরে আসে — encoding, encryption, hashing — আর প্রায় সবাই একবার না একবার গুলিয়ে ফেলে। শিক্ষক তিন ভাইকে আলাদা করেন এক-একটা প্রশ্নে: ফেরানো যায়? কী লাগে? উদ্দেশ্য কী? আর তারপর VPN — যেখানে encryption রাস্তার পুরো নিরাপত্তা হয়ে ওঠে।</p>
<p class="scene-setting en">Three words circle every security class — encoding, encryption, hashing — and almost everyone mixes them up. The teacher separates the three brothers with questions: reversible? needs a key? purpose? Then the VPN — where encryption becomes the road itself.</p>
<div class="code-block">তিন ভাই — তিন প্রশ্নে আলাদা:

ENCODING — রূপ বদল, নিরাপত্তা নেই
  কেন: সংরক্ষণ/পরিবহনের সুবিধা —
    বাইনারি ছবিকে Base64-টেক্সট করা,
    URL-এর ঝামেলাপূর্ণ অক্ষর নিরাপদ করা
  কী? নেই। ফেরানো? যে-কেউ পারে।
  সতর্কতা: encoding-কে নিরাপত্তা ভেবে
  বড় ভুল হয়!

ENCRYPTION — তালাবন্ধ, কী-নির্ভর
  কেন: গোপনীয়তা — বার্তা, ব্যাংকিং, পাসওয়ার্ড
  কী? লাগবেই (AES, RSA)। ফেরানো?
  সঠিক কী থাকলে — ব্যস, কী ছাড়া অসম্ভব।

HASHING — একমুখী ছাপ
  কেন: যাচাই — পাসওয়ার্ড সংরক্ষণ
    (সিস্টেম hash-ই রাখে, পাসওয়ার্ড নয়;
     লগইনে নতুন hash আগেরটার সাথে মেলানো),
    ফাইল-ইন্টিগ্রিটি, deduplication
  ফেরানো? উদ্দেশ্যই নয় — একই ইনপুট
  সবসময় একই ছাপ, আর ছাপ থেকে
  ইনপুট ফেরানো যায় না।</div>
<div class="code-block">VPN — রাস্তাই যখন তালাবন্ধ:

স্বাভাবিক পথ: ডিভাইস → ISP → গন্তব্য
  (ISP দেখে কোথায় যাচ্ছো)

VPN-এর পথ: ডিভাইস → এনক্রিপ্টেড টানেল →
  VPN সার্ভার → গন্তব্য

বাক্স-ভেতর-বাক্স মডেল:
  বাইরের প্যাকেট: শুধু VPN-সার্ভারের ঠিকানা
  ভেতরের প্যাকেট: এনক্রিপ্টেড আসল ট্রাফিক

ফলে তিন পরিবর্তন:
  ISP জানে তুমি VPN-এ যুক্ত — ভেতরের
    কিছু পড়তে পারে না
  গন্তব্য (Google) দেখে সংযোগ এসেছে
    VPN-সার্ভার থেকে — তোমার ঘরের ঠিকানা নয়
  পাবলিক Wi-Fi-র লোক পায় শুধু সিল-করা বাক্স</div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>শিক্ষকের সতর্কতা:</strong> VPN anonymity-র জাদু-ছড়ি নয় — এটা টানেল-নিরাপত্তা ও পরিচয়-সরানো (VPN প্রোভাইডার নিজে কী দেখে/লগ করে তা নির্ভর করে চুক্তির উপর)। আর এই দরজার তিন ভাই মনে রাখো — পরের দরজায় পাসওয়ার্ড-হ্যাকিংয়ের গল্পে hashing আবার ফিরবে।</div></div>
<div class="secret-box">🧮 রূপ বদল (encoding), তালা (encryption), ছাপ (hashing) — তিন ভাই গুলিয়ো না; আর VPN মানে রাস্তাটাই সিল-করা।</div>`,
  senior: {
    title: "ক্রিপ্টো-ত্রয়ী + VPN — দ্রুত গাইড",
    body: "<p><strong>Encoding:</strong> ফরম্যাট-বদল, কী নেই, সবাই ফেরায় (Base64/URL) — নিরাপত্তা নয়। <strong>Encryption:</strong> কী-নির্ভর, কী থাকলে reversible (AES/RSA)। <strong>Hashing:</strong> একমুখী ছাপ — পাসওয়ার্ড সংরক্ষণ+মিলানো, ইন্টিগ্রিটি। <strong>VPN:</strong> এনক্রিপ্টেড টানেল সার্ভার পর্যন্ত; ISP দেখে সংযোগ-না ভেতরের ট্রাফিক; গন্তব্য দেখে VPN-পরিচয়; সতর্কতা: anonymity-জাদু নয়, প্রোভাইডার-নির্ভর আস্থা।</p>"
  }
});

doors.push({
  num: 7,
  icon: "🛡️",
  color: "#22d3ee",
  name: "আক্রমণের মুখোমুখি",
  subtitle: "5 Ways Hackers Steal Passwords + Every Cyber Attack Explained",
  tech: "Password guessing/harvesting/cracking/social engineering; AI attacks (poisoning/inference/evasion/extraction) + classic attacks",
  spirit: "ইত্তেকা — শত্রুকে চিনে প্রস্তুতি",
  secret: "হ্যাকার পাসওয়ার্ড ভাঙে না — মানুষ আর সিস্টেমের ফাঁক দিয়ে ঢোকে: অনুমান, প্রতারণা, চুরি-হ্যাশ-ক্র্যাকিং; আর নতুন যুগে আক্রমণের টার্গেট সিস্টেম নয় — AI নিজেই।",
  recall: {
    q: "পাসওয়ার্ড-আক্রমণের ৫টা পথ কী কী? প্রতিরোধ কী?",
    qen: "The five password-attack paths and their defenses?",
    a: "১) Guessing — অনুমান (জন্মদিন/নাম); প্রতিরোধ: দীর্ঘ-ইউনিক পাসওয়ার্ড + rate-limiting। ২) Credential harvesting — ফিশিং ইমেইল/কীলগার; প্রতিরোধ: URL-যাচাই, সন্দেহজনক লিংক নয়। ৩) Cracking — চুরি-হওয়া hash-এ ডিকশনারি/brute-force; প্রতিরোধ: bcrypt-জাতীয় ধীর hash + salt। ৪) (শিক্ষকের তালিকায় আরও) social engineering — মানুষকেই ফাঁদে ফেলা; সচেতনতাই ঢাল। ৫) ডেটা-ব্রিচ-রিইউজ — এক লিক অন্যত্র ব্যবহার; প্রতি সাইটে আলাদা পাসওয়ার্ড/ম্যানেজার।",
    aen: "Guessing (unique+long+rate-limit), phishing/keyloggers (verify URLs), cracking stolen hashes (bcrypt+salt), social engineering (awareness), breach reuse (password manager, unique per site)."
  },
  story: `<p class="scene-setting">নিরাপত্তার আসল ক্লাস শুরু হয় আক্রমণকারীর চোখে দেখা শিখলে। প্রথম ভিডিও: পাসওয়ার্ড চুরির ৫ পথ — অনুমান থেকে ক্র্যাকিং। দ্বিতীয় ভিডিও আরও গভীর: আজকের আক্রমণ শুধু ওয়েবসাইট ভাঙা নয় — AI-কেই ফাঁদানো, না ঢুকে ডেটা চুরি, না জানিয়েই সিস্টেম দখল।</p>
<p class="scene-setting en">Security class truly begins when you learn to see through the attacker's eyes. Video one: five paths to a stolen password. Video two goes deeper: today's attacks manipulate AI, steal without breaking in, and control without being noticed.</p>
<div class="code-block">পাসওয়ার্ড-চুরির ৫ পথ (আক্রমণকারীর টুলবক্স):

১. GUESSING — সরল অনুমান: নাম, জন্মদিন,
   পুরনো ব্রিচে-পড়া পাসওয়ার্ড।
   ঢাল: দীর্ঘ-ইউনিক পাসওয়ার্ড, rate-limiting,
   লকআউট — অসীম চেষ্টা বন্ধ।

২. CREDENTIAL HARVESTING — সরাসরি সংগ্রহ:
   PHISHING — বিশ্বাসঘাতক ইমেইল, নকল লগইন-পেজ;
   পাসওয়ার্ড নয়, মানুষ ফাঁদে পড়ে নিজেই দিয়ে দেয়।
   MALWARE — কীলগার টাইপিং রেকর্ড করে।
   ঢাল: প্রেরক-যাচাই, URL-চেক, অ্যান্টিভাইরাস।

৩. CRACKING — hash-এর উপর আক্রমণ:
   সিস্টেম পাসওয়ার্ড রাখে না, রাখে hash।
   চুরি হলো ডেটাবেস, আক্রমণকারী চালায়
   ডিকশনারি/brute-force — কোন ইনপুটের ছাপ মেলে?
   ঢাল: ধীর-hash (bcrypt), প্রতি-ব্যবহারকারী
   salt — প্রি-কম্পিউটেড টেবিল অচল।

৪-৫. SOCIAL ENGINEERING + BREACH-REUSE —
   মানুষকেই অস্ত্র বানানো; এক সাইটের লিক
   অন্য সাইটের চাবি। ঢাল: সচেতনতা +
   প্রতি-সাইট-ইউনিক পাসওয়ার্ড (ম্যানেজার)।</div>
<div class="code-block">সাইবার-আক্রমণের নতুন অধ্যায় — AI-ই টার্গেট:

DATA POISONING — ভাঙা নয়, বিষ দেওয়া:
  ট্রেনিং-ডেটায় ভুল/বায়াস ঢুকিয়ে দাও —
  AI ভুল শিখবে, ভুল সিদ্ধান্ত দেবে;
  সিস্টেম কাজ করছে-ই মনে হবে — এটাই ভয়ের।

INFERENCE ATTACK — না ভেঙে ফাঁস:
  AI-কে বারবার ইনপুট দাও, আউটপুট মেপে নাও —
  ধীরে ধীরে বেরিয়ে আসে কী ডেটায় সে শিখেছে;
  সিস্টেম কিছু লিক করেনি — প্যাটার্নই বিশ্বাসঘাতক।

EVASION — চলতে ফাঁদানো:
  ইনপুট সামান্য বদলাও — মানুষ ট্রাফিক-সাইন
  দেখে থামবে, গাড়ির AI ভুল পড়বে;
  AI নিজের নিয়মেই চলছে — ফাঁকটা সেখানেই।

MODEL EXTRACTION — মডেলই চুরি:
  প্রশ্ন-উত্তরে মেপে মেপে একটা নকল মডেল
  দাঁড় করানো — মেধাস্বত্বের ডাকাতি।

+ চিরায়ত আক্রমণও কম নয়: DDoS (সৈন্য-প্রবাহে
  ডুবানো), MITM (মাঝপথের গুপ্তচর), ransomware,
  injection — নতুন অধ্যায় পুরনোকে বাদ দেয় না।</div>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>দরজার সংযোগ:</strong> দরজা ৬-এর hashing এখানে যুদ্ধক্ষেত্রে — চুরি-হওয়া hash-এর উপর cracking, আর ঢাল salt+ধীর-hash। আর AI-আক্রমণগুলো মনে রাখো — আগের বইয়ের (The AI Agents Atlas) সব পাঠ এখন নিরাপত্তার প্রশ্নেও দাঁড়িয়েছে।</div></div>
<div class="secret-box">🛡️ আক্রমণকারী দেয়াল ভাঙে না — দরজার ফাঁক খোঁজে: মানুষের আস্থা, সিস্টেমের hash, AI-এর ডেটা; প্রতিটা ফাঁকের নাম জানাই প্রথম প্রাচীর।</div>`,
  senior: {
    title: "পাসওয়ার্ড + সাইবার-আক্রমণ — দ্রুত গাইড",
    body: "<p><strong>৫ পথ:</strong> guessing (rate-limit+ইউনিক), harvesting/phishing+কীলগার (যাচাই-সচেতনতা), cracking-stolen-hash (bcrypt+salt), social engineering (training), breach-reuse (ম্যানেজার+প্রতি-সাইট-ইউনিক)। <strong>AI-আক্রমণ:</strong> poisoning (ট্রেনিং-ডেটায় বিষ), inference (আউটপুট-প্যাটার্নে ট্রেনিং-ডেটা ফাঁস), evasion (ইনপুট-বাঁকানো), extraction (নকল-মডেল) + চিরায়ত DDoS/MITM/ransomware। নিয়ম: প্রতিরোধ শুরু আক্রমণের নাম জানা থেকে।</p>"
  }
});

doors.push({
  num: 8,
  icon: "🌊",
  color: "#a5f3fc",
  name: "সাগরের তিন স্তর",
  subtitle: "What is the Dark Web? — পূর্ণ যাত্রার সমাপ্তি",
  tech: "Surface web / deep web / dark web; Tor onion routing; anonymity as design",
  spirit: "জাহির-বাতিন — যা দেখা যায় তার নিচে যা দেখা যায় না",
  secret: "ইন্টারনেট তুষারবর্গের মতো — দৃশ্যমান ৫% (surface), লগইনের পেছনে বিশাল deep, আর ইচ্ছাকৃত-অদৃশ্য সামান্য অংশই dark web; বেনামী প্রযুক্তি (Tor) নিজে ভালো-মন্দ নয় — ব্যবহার যা।",
  recall: {
    q: "Surface, deep আর dark web — তিনটার পার্থক্য উদাহরণসহ বলো।",
    qen: "Surface vs deep vs dark web, with examples.",
    a: "Surface = সার্চ-ইঞ্জিনে পাওয়া যায় এমন প্রকাশ্য অংশ (YouTube, সংবাদ)। Deep = লগইন/অনুমতির পেছনের অ-ইনডেক্সড অংশ — তোমার ইনবক্স, ব্যাংক-অ্যাকাউন্ট, কোম্পানি-ড্যাশবোর্ড; বিশাল কিন্তু স্বাভাবিক। Dark = ইচ্ছাকৃতভাবে বিশেষ নেটওয়ার্কে (Tor) লুকানো, সাধারণ ব্রাউজারে অগম্য ছোট্ট অংশ — বেনামী সংবাদদাতা থেকে অবৈধ বাজার, দুই-ই আছে।",
    aen: "Surface = publicly indexed (YouTube, news). Deep = behind logins, non-indexed (inbox, banking, dashboards) — huge and normal. Dark = intentionally hidden on special networks like Tor — tiny, with both noble and criminal uses."
  },
  story: `<p class="scene-setting">শেষ দরজায় একটা ভুল ধারণা ভাঙবে — "dark web মানে ইন্টারনেটের খারাপ অংশ"। না; সে নিছক একটা স্তর, আর স্তরটা বোঝা যায় সাগরের মতো করে: যা দেখা যায়, যা গভীরে, আর যা ইচ্ছা করে অন্ধকারে।</p>
<p class="scene-setting en">The final door breaks a myth — 'the dark web is the bad part of the internet'. It is merely a layer, understood like an ocean: the visible, the deep, and the deliberately dark.</p>
<div class="diagram">
<div class="diag-title">ইন্টারনেট-সাগরের তিন স্তর — শিক্ষকের চিত্র</div>
<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-cyan" x="30" y="20" width="500" height="60" rx="10"/>
  <text class="lbl-cyan" x="280" y="45" text-anchor="middle">SURFACE WEB — দৃশ্যমান ৫%</text>
  <text class="lbl-sm" x="280" y="66" text-anchor="middle">Google/YouTube/সংবাদ — সার্চে পাওয়া যায়</text>
  <rect class="cell" x="30" y="90" width="500" height="70" rx="10"/>
  <text class="lbl" x="280" y="115" text-anchor="middle">DEEP WEB — লগইনের পেছনের বিশাল গহ্বর</text>
  <text class="lbl-sm" x="280" y="137" text-anchor="middle">ইনবক্স · ব্যাংক-অ্যাকাউন্ট · মেডিকেল রেকর্ড · কোম্পানি ড্যাশবোর্ড</text>
  <text class="lbl-sm" x="280" y="152" text-anchor="middle">অ-ইনডেক্সড কিন্তু সম্পূর্ণ স্বাভাবিক — সাগরের মূল পরিণত অংশ</text>
  <rect class="cell-hot" x="30" y="170" width="500" height="55" rx="10"/>
  <text class="lbl-hot" x="280" y="192" text-anchor="middle">DARK WEB — ইচ্ছাকৃত-অদৃশ্য ক্ষুদ্র স্তর</text>
  <text class="lbl-sm" x="280" y="212" text-anchor="middle">Tor-জাতীয় বেনামী নেটওয়ার্ক — সাধারণ ব্রাউজারে অগম্য</text>
  <text class="lbl-sm" x="280" y="240" text-anchor="middle">প্রযুক্তিটা নিরপেক্ষ — সংবাদদাতা আর অপরাধী দুজনেই ব্যবহার করে</text>
</svg>
<div class="diag-cap">Deep ≠ Dark: তোমার ইমেইল ইনবক্স deep web-এ — রহস্য নয়, শুধু পাসওয়ার্ডের পেছনে।</div>
</div>
<div class="code-block">TOR — পেঁয়াজ-রাউটার:
  সাধারণ সংযোগ: তুমি → গন্তব্য (সরলরেখা,
  দুপাশেই দেখা যায় কে কার সাথে)
  Tor-সংযোগ: এনক্রিপ্টেড স্তরে স্তরে মোড়া
    প্যাকেট, মাঝখানে কয়েকটা ভলান্টিয়ার নোড —
    প্রতিটা শুধু আগের-পরের ধাপ চেনে,
    পুরো পথ কেউ জানে না।
  নামের রহস্য: পেঁয়াজের মতো স্তরে স্তরে খোলা —
    প্রতি নোডে একটা আস্তরণ খোলে।</div>
<div class="callout tip"><span class="co-icon">🏁</span><div><strong>সিরিজ-সংযোগ, শেষ দরজায়:</strong> দরজা ১-এ প্যাকেট-রাউটিং শিখেছিলে — Tor সেই রাউটিংয়ের উপর বেনামী-স্তর; দরজা ৬-এর encryption সেই পেঁয়াজের প্রতিটা স্তর; দরজা ৭-এর আক্রমণকারীর চোখ এখানে কাজ করে উল্টো ভাবে — একই প্রযুক্তি ঢালও, তলোয়ারও। <strong>আট দরজা পেরিয়ে তুমি এখন দুর্গটা শুধু চেনো না — জানো কোথায় প্রাচীর, কোথায় ফাঁক।</strong></div></div>
<div class="secret-box">🌊 দেখা যায় ৫%, লগইনের পেছনে বিশাষ — আর ইচ্ছাকৃত অন্ধকার ক্ষুদ্র; বেনামী প্রযুক্তি নিরপেক্ষ, ব্যবহারই প্রশ্ন।</div>`,
  senior: {
    title: "Surface/Deep/Dark + Tor — দ্রুত গাইড",
    body: "<p><strong>তিন স্তর:</strong> Surface (ইনডেক্সড প্রকাশ্য — সাগরের তুষারবর্গ-চূড়া), Deep (লগইন-পেছনের অ-ইনডেক্সড, বিশাল ও স্বাভাবিক), Dark (Tor-জাতীয় নেটওয়ার্কে ইচ্ছাকৃত-অদৃশ্য, ক্ষুদ্র)। <strong>Tor:</strong> পেঁয়াজ-রাউটিং — স্তরে-স্তরে এনক্রিপ্টেড, মাঝ্য-নোড আংশিক-জ্ঞান, পূর্ণ-পথ কারো কাছে নেই। <strong>নিয়ম:</strong> Deep≠Dark; বেনামীতা = নিরপেক্ষ হাতিয়ার — সাংবাদিক সুরক্ষা থেকে অবৈধ বাজার, দুই-ই বাস্তব।</p>"
  }
});
