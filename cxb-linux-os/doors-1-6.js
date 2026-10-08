// doors-1-6.js — Cloud X Berry Series Book 3: The Linux Terminal Path
// Source: Linux & Operating Systems playlist (6 videos) — @TheCloudXBerry
// Seven Doors Method v3.4: named masters, failure-first, lived sacred analogues
const doors = [];

doors.push({
  num: 1,
  icon: "🕰️",
  color: "#34d399",
  name: "মুচির ঝোলা",
  subtitle: "UNIX vs LINUX — The Most Confused Topic",
  tech: "Unix birth (Bell Labs 1969), Unix philosophy, C rewrite & portability, Unix-like vs Unix",
  spirit: "আসল — উৎস জানলে বর্তমান পড়া যায়",
  secret: "মহাযন্ত্র নয় — ছোট শাবল, এক কাজ, জোড়া দাও; Unix-এর গোটা দর্শন একজন মুচির কোমরের ঝোলায়।",
  recall: {
    q: "Linux কি Unix থেকে তৈরি? না কি আলাদা?",
    qen: "Was Linux created from Unix, or separately?",
    a: "আলাদা। ১৯৯১ সালে Linus Torvalds Unix-এর সোর্স না নিয়ে স্ক্র্যাচে নিজের কার্নেল লেখেন — Unix-এর ডিজাইন ও দর্শনে অনুপ্রাণিত, তাই Linux 'Unix-like'। Unix তেমনি একটা পরিবারও (AIX, Solaris, HP-UX, BSD)।",
    aen: "Separately. In 1991 Linus Torvalds wrote his own kernel from scratch — inspired by Unix design and philosophy, hence 'Unix-like'. Unix itself is also a family (AIX, Solaris, HP-UX, BSD)."
  },
  story: `<p class="scene-setting">রাত তখন আড়াইটা। প্রোডাকশন সার্ভারে হাজারো লাইনের লগ, তোমার চোখ ধাঁধিয়ে যাচ্ছে — একটা error খুঁজতে গিয়ে তুমি বারবার একই কাজ করছ: পুরো ফাইল খোলো, চোখ বুলাও, হারাও। ঘুম নেই, রাগ আছে। ভোরবেলা টিউটোরিয়ালে পড়লে এক লাইন — <strong>cat app.log | grep error | sort</strong> — তিনটে ছোট কমান্ড, একটা পাইপ-চিহ্ন, কাজ শেষ। এত সহজ কেন? উত্তর খুঁজতে গিয়ে তুমি পৌঁছে যাও এক পুরনো গলির মুচির দোকানে।</p>
<p class="scene-setting en">2:30 AM, a production server, thousands of log lines, and you repeatedly opening whole files to hunt one error. At dawn a tutorial shows one line — cat app.log | grep error | sort — three small commands, one pipe, done. Why so easy? The answer waits in an old cobbler's shop.</p>
<p class="scene-setting">চামড়ার ঝাঁ-ঝাঁ গন্ধ, আঠার তীব্র বিটক। মুচি <strong>হারুন মিয়া</strong> — ষাট ছুঁয়েছেন, কোমরের পেটিতে সারি সারি ছোট শাবল-ছেনি-রুমাল, প্রতিটার হাতলে ব্যবহারের জ্বলা দাগ। তুমি উত্তেজিত হয়ে বলো — <em>কাকা, একটা মহাযন্ত্র বানান না, যেটা সব কাজ একসাথে করে!</em> হারুন মিয়া হাসলেন না। একটা ছেঁড়া স্যান্ডেল তুলে ধরলেন, তিনটা কাজ: কাটা, সেলাই, পালিশ। তিনটা আলাদা ছোট যন্ত্র, একটার পর একটা — কাজ দশ মিনিটে শেষ। তারপর শান্ত গলায়: <em>বাবা, যে যন্ত্র সব কাজ করে, সে কোনো কাজই ভালো করে না। আর ভাঙলে পুরোটা মরে। আমার শাবল ভাঙলে পুরো দোকান থেমে থাকে না।</em></p>
<p class="scene-setting en">The smell of leather and glue. Harun Miah, sixtyish, a belt of small blades — each handle scarred by use. You ask for a grand machine that does everything; he repairs a sandal with three small tools used one after another, then says quietly: a machine that does everything does nothing well — and when it breaks, everything stops. One broken blade never stops my shop.</p>
<div class="dialogue">হারুন মিয়া: ছোট যন্ত্র, এক কাজ, ভালো করে — তারপর জোড়া দাও। এই আমার পঁয়তাল্লিশ বছরের হিসাব।</div>
<div class="dialogue en">Small tool, one job, done well — then chain them. That is my forty-five years of accounting.</div>
<p class="scene-setting">তোমার মনে পড়ে গত রাতের grep — cat পড়লো, grep ছেঁকে নিলো, sort সাজালো: তিন মুচি, এক পাইপ। Unix-এর যাঁরা জন্মদাতা, তাঁরাও একই কথা বলে গেছেন — আর সেই কথার নামই দর্শন।</p>
<div class="code-block">১৯৬৯ — BELL LABS-এ Unix-এর জন্ম:
  উচ্চাকাঙ্ক্ষী Multics প্রজেক্ট জটিল হয়ে
  অতিক্রম করতে না পেরে Ken Thompson ও
  সহকর্মীরা বানালেন ছোট, সরল Unix।

UNIX-এর আসল উপহার — দর্শন:
  ছোট টুল, যে একটা কাজ ভালো করে;
  আর সেগুলো জোড়া দেওয়ার উপায় — pipe।

  cat app.log | grep error | sort
  এক লাইনে তিনটা ছোট টুল = একটা কাজের ফ্লো।

১৯৭০-এর দশক — C-তে পুনর্লিখন:
  আগে OS হার্ডওয়্যারের সাথে আটকে থাকতো;
  C-তে লেখা হলো → portable → যেকোনো
  মেশিনে বসানো গেলো → ছড়িয়ে পড়লো।
  IBM বানালো AIX, Sun বানালো Solaris,
  HP বানালো HP-UX; BSD-ও এ পরিবারেই।
  ⇒ Unix এখন একটা পরিবার, একটা OS নয়।

১৯৯১ — HELSINKI-র এক শিক্ষার্থী:
  Linus Torvalds শেখার-জন্য Minix ব্যবহার
  করছিলেন; যা চাইলেন না পেয়ে নিজেই
  কার্নেল লিখতে শুরু করলেন।

সবচেয়ে বড় ভুল ধারণাটা এখানে:
  Linux, Unix-এর সোর্স নিয়ে বানানো নয় —
  সম্পূর্ণ স্ক্র্যাচ থেকে, Unix-এর দর্শনে
  অনুপ্রাণিত হয়ে। তাই নাম: UNIX-LIKE।</div>
<div class="verse">হারুন মিয়ার পেটির মতোই এক সত্য সাহাবী-জীবনেও: প্রসিদ্ধ কাহিনির কালা কার্তুজ — বিশ বছর ধরে ছোট ছোট খেদমত জোড়া দিয়ে সে এমন মর্যাদা পেলো যা একদিনের বীরত্ব পায় না। ছোট আমলের শৃঙ্খলাই বড় হয় — পাইপের দর্শন এই, ইতিহাসেও এই।</div>
<div class="callout tip"><span class="co-icon">🐧</span><div><strong>হারুন মিয়ার স্পষ্টীকরণ:</strong> "Linux" বলতে লোকে বোঝায় Ubuntu/Fedora-র মতো পুরো OS — কিন্তু কারিগরি ভাষায় Linux হলো <strong>শুধু কার্নেল</strong>: CPU-সময়, মেমরি, প্রসেস, ডিভাইস — সফটওয়্যার আর হার্ডওয়্যারের মাঝের সেই কোর ম্যানেজার। কার্নেল + GNU টুলস + প্যাকেজ ম্যানেজার + ডেস্কটপ = distribution।</div></div>
<div class="secret-box">🕰️ Linux Unix-এর ছেলে নয় — দর্শনের উত্তরসূরি; আর Unix-এর চিরায়ত উপহার: ছোট টুল, পাইপে জোড়া।</div>`,
  senior: {
    title: "Unix বনাম Linux — দ্রুত গাইড",
    body: "<p><strong>Unix (১৯৬৯, Bell Labs):</strong> ছোট-টুল-এক-কাজ দর্শন + pipe-জোড়া; C-তে পুনর্লিখনে portable; পরিবারে পরিণত (AIX/Solaris/HP-UX/BSD)। <strong>Linux (১৯৯১, Linus):</strong> স্ক্র্যাচ-লেখা কার্নেল, Unix-like দর্শন; কারিগরি অর্থে Linux = কার্নেল, distro = কার্নেল+টুলস+প্যাকেজ+ডেস্কটপ। মনে রাখো: দর্শন উত্তরাধিকার, কোড নয়।</p>"
  }
});

doors.push({
  num: 2,
  icon: "🗺️",
  color: "#34d399",
  name: "তিন রাজ্যের বাজার",
  subtitle: "Every Operating System Explained in 6 Minutes",
  tech: "Windows / macOS / Linux / Ubuntu landscape — users, strengths, trade-offs, install paths",
  spirit: "ওয়ায় — প্রত্যেক জগতের জায়গা আলাদা",
  secret: "সেরা OS বলে কিছু নেই — আছে কাজ-মিলানো; আর যে-বাজারে সবকিছুই এক মালিকের, সেখানে দামও মালিক ঠিক করেন।",
  recall: {
    q: "চারটা OS-জগতের প্রতিটার এক-লাইন পরিচয় দাও।",
    qen: "One-line identity of each of the four OS worlds.",
    a: "Windows — সর্বজনীন ডিফল্ট, সবচেয়ে বেশি অ্যাপ/গেম, বড় ভাইরাস-টার্গেট। macOS — Apple-হার্ডওয়্যার+সফটওয়্যার একসুর, স্থিতিশীল, দামি, গেমে দুর্বল। Linux — distro-র সমাবেশ, নিয়ন্ত্রণ+নিরাপত্তা+হালকা, সার্ভার/ক্লাউডের রাজা, নতুনদের কাছে খাড়া শেখার ঢাল। Ubuntu — বিগিনার-বান্ধব লিনাক্স, লিনাক্স-জগতে প্রথম পা রাখার সহজ দরজা।",
    aen: "Windows — universal default, most apps/games, biggest virus target. macOS — Apple-controlled smoothness, pricey, weak for games. Linux — a family of distros, control/security/lightness, rules servers, steeper for beginners. Ubuntu — beginner-friendly Linux, the easy first door."
  },
  story: `<p class="scene-setting">হারুন মিয়ার দোকান থেকে বেরিয়ে তুমি সোজা গেলে শহরের কম্পিউটার-বাজারে — নতুন ল্যাপটপ কিনতে। আর প্রথম ধাক্কাটাই খেলে: একই রকম চারটা মেশিনের পেছনে চাররকম জগৎ। এক দোকানদার চাপাচাপি করে বসে আছে — <em>ভাই, Windows-ই নাও, সব চলে!</em> তুমি ঘাবড়ে যাও। কোনটা? কেন? ঠিক তখন পেছন থেকে একটা শান্ত গলা — <em>আপনার কাজটা আগে বলুন গিয়ে।</em></p>
<p class="scene-setting en">From the cobbler's shop you walk into the computer market for a new laptop — and meet four different worlds behind similar machines. A pushy vendor insists Windows runs everything. Then a calm voice behind you: first, tell me your work.</p>
<p class="scene-setting">সে দোকানের সবচেয়ে পুরনো কর্মী <strong>জাহেনা বেগম</strong> — পাঞ্জাবির হাতা গোড়ায় তুলে বাঁধা, কপালে ঘামের দাগ, ত্রিশ বছর ধরে এই বাজারে ক্রেতাদের ঠিক জায়গায় পৌঁছে দিয়েছেন। লোকে বলে জাহেনা-আপা কখনো ব্র্যান্ড বেচেন না, কাজ বেচেন। তিনি তোমাকে নিয়ে বেড়ালেন গোটা বাজারে — চার গলি, চার জগৎ।</p>
<p class="scene-setting en">Jahena Begum, the market's oldest hand — sleeves rolled and pinned, forehead marked by sweat, thirty years of walking buyers to the right shop. She never sells brands; she sells work. She takes you through four lanes, four worlds.</p>
<div class="dialogue">জাহেনা বেগম: প্রথম গলিতে ঢুকবে — সবকিছু পাবে, সস্তাও। কিন্তু মনে রেখো, যে-গলিতে সবাই যায়, সেই গলিতে পকেটমাররাও যায়।</div>
<div class="dialogue en">First lane: everything, and cheap. But remember — the lane everyone visits, pickpockets visit too.</div>
<div class="diagram">
<div class="diag-title">চার জগৎ — জাহেনা বেগমের তুলনা-মানচিত্র</div>
<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="15" y="20" width="255" height="90" rx="10"/>
  <text class="lbl" x="142" y="46" text-anchor="middle">🪟 WINDOWS</text>
  <text class="lbl-sm" x="142" y="68" text-anchor="middle">সর্বজনীন ডিফল্ট — অফিস, গেম, সবচেয়ে বেশি অ্যাপ</text>
  <text class="lbl-sm" x="142" y="88" text-anchor="middle">দুর্বলতা: ভাইরাসের প্রধান টার্গেট, আপডেট-ঝামেলা</text>
  <rect class="cell-hot" x="290" y="20" width="255" height="90" rx="10"/>
  <text class="lbl-hot" x="417" y="46" text-anchor="middle">🍎 MACOS</text>
  <text class="lbl-sm" x="417" y="68" text-anchor="middle">হার্ডওয়্যার+সফটওয়্যার এক-নিয়ন্ত্রণে — মসৃণ, স্থিতিশীল</text>
  <text class="lbl-sm" x="417" y="88" text-anchor="middle">দুর্বলতা: দামি, হার্ডওয়্যার-অপশন কম, গেমে দুর্বল</text>
  <rect class="cell-cyan" x="15" y="125" width="255" height="90" rx="10"/>
  <text class="lbl-cyan" x="142" y="151" text-anchor="middle">🐧 LINUX (distro-র পরিবার)</text>
  <text class="lbl-sm" x="142" y="173" text-anchor="middle">নিয়ন্ত্রণ, নিরাপত্তা, হালকা — সার্ভার/ক্লাউডের রাজা</text>
  <text class="lbl-sm" x="142" y="193" text-anchor="middle">দুর্বলতা: শেখার ঢাল খাড়া, কিছু অ্যাপ/গেম নেই</text>
  <rect class="cell-leaf" x="290" y="125" width="255" height="90" rx="10"/>
  <text class="lbl-leaf" x="417" y="151" text-anchor="middle">🟠 UBUNTU</text>
  <text class="lbl-sm" x="417" y="173" text-anchor="middle">বিগিনার-বান্ধব Linux — সহজ, পরিষ্কার, বিশাল কমিউনিটি</text>
  <text class="lbl-sm" x="417" y="193" text-anchor="middle">Linux-জগতে প্রথম পা: dual-boot / full / VM</text>
  <text class="lbl-sm" x="280" y="232" text-anchor="middle">প্রশ্ন "কোনটা ভালো?" নয় — "আমার কাজ কোন জগতে সবচেয়ে ভালো চলে?"</text>
</svg>
<div class="diag-cap">ইনস্টলের তিন পথ (Linux): Windows-এর পাশে রাখা (dual-boot) / পুরো জায়গা নেওয়া / ভার্চুয়াল মেশিনে চালানো।</div>
</div>
<div class="code-block">লিনাক্সে প্রবেশের তিন দরজা:
  ১. DUAL-BOOT — চালু হলে বেছে নাও কোন OS
  ২. FULL REPLACE — পুরো মেশিন লিনাক্সের
  ৩. VIRTUAL MACHINE — Windows-এর ভেতরে Linux

আর মনে রাখো: তুমি যে ওয়েবসাইটগুলো
রোজ ব্যবহার করো, তার বেশিরভাগই চলছে
লিনাক্সে — দেখতে না পেলেও জগৎটা
তোমার চারপাশেই।</div>
<div class="verse">জাহেনা বেগম বাজার শেষে বললেন: <em>আমি ত্রিশ বছরে একটাও ক্রেতাকে ভুল দোকানে পাঠাইনি — কারণ আমি মাল চিনি না, কাজ চিনি।</em> আর এ যেন সেই পুরনো হিকমত: প্রতিটা কাজের এক উপযুক্ত যন্ত্র আছে — এক চাবিতে সব তালা খোলে না; আর যে-চাবি সব খোলে, সে কোনো তালাই নিরাপদ রাখে না।</div>
<div class="secret-box">🗺️ সেরা OS নেই — আছে তোমার কাজের মানচিত্র; আর লিনাক্স অদৃশ্য হয়ে তোমার প্রতিদিন চালায়।</div>`,
  senior: {
    title: "OS ভূগোল — দ্রুত গাইড",
    body: "<p><strong>Windows:</strong> সর্বজনীন, অ্যাপ/গেম-সর্বোচ্চ, ভাইরাস-টার্গেট। <strong>macOS:</strong> Apple-নিয়ন্ত্রিত মসৃণতা, দামি, গেম-দুর্বল। <strong>Linux:</strong> distro-পরিবার, নিয়ন্ত্রণ/নিরাপত্তা/হালকা, সার্ভার-ক্লাউডের মেরুদণ্ড। <strong>Ubuntu:</strong> বিগিনার-দরজা। প্রবেশ-পথ: dual-boot / full / VM। সিদ্ধান্ত-নিয়ম: OS বাছো কাজ দেখে, হাইপ দেখে নয়।</p>"
  }
});

doors.push({
  num: 3,
  icon: "🌲",
  color: "#34d399",
  name: "গ্রন্থাগারের এক গাছ",
  subtitle: "LINUX isn't Hard — File Directories",
  tech: "Single root tree (/), /home /root /bin /sbin /etc /usr /var — what lives where and why",
  spirit: "শাজরা — এক গোড়া থেকে সব শাখা",
  secret: "গোটা মহাবিশ্বের নকশা এক গোড়ায় — ড্রাইভের অক্ষর নয়, এক গাছ; আর প্রতিটা শাখার নাম একটা দায়িত্বের নাম।",
  recall: {
    q: "/ (root) আর /root কি একই জিনিস? /etc আর /usr-এর কাজ কী?",
    qen: "Are / and /root the same? What do /etc and /usr do?",
    a: "না। / হলো পুরো ফাইল-সিস্টেমের গোড়া; /root হলো admin (root ইউজার)-এর ব্যক্তিগত home ফোল্ডার — গাছের ভেতরের একটা ঘর মাত্র। /etc = পুরো OS-এর কনফিগারেশন-ঘর; /usr = Unix System Resources — ইউজার-প্রোগ্রাম ও রিসোর্সের বড় ভাণ্ডার (user নয়!)।",
    aen: "No. / is the root of the entire filesystem; /root is just the admin user's personal home folder. /etc = the OS-wide settings room; /usr = Unix System Resources — the big store of user programs (not 'user'!)."
  },
  story: `<p class="scene-setting">তোমার নতুন ল্যাপটপে Ubuntu বসালে — dual-boot, জাহেনা বেগমের পরামর্শে। প্রথম রাতেই টার্মিনাল খুলে তুমি হতভম্ব: <em>C ড্রাইভ কোথায়?</em> সবকিছু একটা <strong>/</strong>-এর ভেতরে। তুমি জানালার বাইরে তাকাও শ্বাস নিতে, আর দেখো পাশের বিল্ডিংয়ের ছাদে এক বুড়ো লোক অসুবিধা নিয়ে নেমে আসছেন। তাঁর হাতে লম্বা একটা তালিকা, চোখে পুরু চশমা। তুমি সিঁড়ি ধরে দৌড়াও।</p>
<p class="scene-setting en">Ubuntu installed, first night, terminal open — and you freeze: where is the C drive? Everything lives inside one /. While you catch your breath, an old man climbs down from the next roof, a long list in hand, thick glasses on. You run to help.</p>
<p class="scene-setting"><strong>রফিক চাচা</strong> — পাড়ার পুরনো গ্রন্থাগারিক, চল্লিশ বছর ধরে সদর লাইব্রেরির এক কোণে গর্ত করে জমিয়ে রাখা দলিলের সমুদ্র সামলেছেন; ডান হাতের তিন আঙুলে কাগজের কাটা দাগ, চোখে বর্তমান পড়ার চশমা — কিন্তু মাথার ভেতরে নিখুঁত নকশা। তালিকাটা হাতে নিয়ে তুমি জিজ্ঞেস করো — <em>চাচা, আপনার লাইব্রেরিতে কোনো নম্বর নেই? A-তাক, B-তাক?</em> রফিক চাচা হেসে মাথা নাড়লেন: <em>নম্বর-তাক ওই সবিত্র যারা প্রতি বছর নতুন আলমারি কেনে, তাদের ব্যাপার। আমার একটাই ঘর — ঢুকলে একটাই গোড়া, আর সেই গোড়া থেকে সব শাখা বেরোয়। প্রতিটা শাখার একটা নাম আছে, আর প্রতিটা নামের একটা দায়িত্ব আছে।</em></p>
<p class="scene-setting en">Uncle Rafiq — the neighborhood's old librarian, forty years of taming a sea of files; paper-cut scars on three fingers, reading glasses — but a flawless map in his head. You ask why his library has no A-rack, B-rack. He laughs: racks are for those who buy a new cabinet every year. My room has ONE root, and every branch grows from it — each branch named for its duty.</p>
<div class="dialogue">রফিক চাচা: আমার ছেলেবেলায় এখানে চারটা আলমারি ছিল, তারপর দশটা, তারপর নম্বর পড়ে গেছে। ক্লান্ত হয়ে একদিন সব বুঝে নিলাম — এক গোড়া, অগণিত শাখা। তারপর আর কোনোদিন হারাইনি।</div>
<div class="dialogue en">In my boyhood there were four cabinets, then ten, then numbers ran out. One day I surrendered to one root and countless branches — and never lost anything again.</div>
<p class="scene-setting">তুমি আপন হাতে তালিকাটা ফেরত দিয়ে বলো — ভাইরাসের ঝুঁকি নেই, প্রতিটা কাগজ সে জানেন কোথায়; আর তোমার মনে হয় এই লোকটাই তোমার C-ড্রাইভের উত্তর জানেন। পরদিন সকালে লাইব্রেরিতে গিয়ে বসে পড়লে রফিক চাচার কাছে — আর তিনি টানটান করে জানালার কাচে মার্কার দিয়ে এঁকে দেখালেন পুরো গাছটা।</p>
<div class="diagram">
<div class="diag-title">এক রুটের গাছ — রফিক চাচার কাচে-আঁকা</div>
<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-hot" x="240" y="15" width="80" height="40" rx="8"/>
  <text class="lbl-hot" x="280" y="40" text-anchor="middle">/ (root)</text>
  <line class="edge" x1="280" y1="55" x2="80" y2="90"/>
  <line class="edge" x1="280" y1="55" x2="280" y2="90"/>
  <line class="edge" x1="280" y1="55" x2="480" y2="90"/>
  <rect class="cell" x="20" y="90" width="120" height="28" rx="6"/>
  <text class="lbl-sm" x="80" y="109" text-anchor="middle">/home — ইউজারদের ঘর</text>
  <rect class="cell" x="220" y="90" width="120" height="28" rx="6"/>
  <text class="lbl-sm" x="280" y="109" text-anchor="middle">/root — admin-এর ঘর</text>
  <rect class="cell" x="420" y="90" width="120" height="28" rx="6"/>
  <text class="lbl-sm" x="480" y="109" text-anchor="middle">/etc — কনফিগ-ঘর</text>
  <line class="edge" x1="80" y1="118" x2="60" y2="150"/>
  <line class="edge" x1="80" y1="118" x2="170" y2="150"/>
  <line class="edge" x1="480" y1="118" x2="400" y2="150"/>
  <line class="edge" x1="480" y1="118" x2="510" y2="150"/>
  <line class="edge" x1="280" y1="118" x2="280" y2="150"/>
  <rect class="cell" x="15" y="150" width="110" height="28" rx="6"/>
  <text class="lbl-sm" x="70" y="169" text-anchor="middle">/bin — কমান্ড-টুলবক্স</text>
  <rect class="cell" x="140" y="150" width="110" height="28" rx="6"/>
  <text class="lbl-sm" x="195" y="169" text-anchor="middle">/sbin — admin-টুল</text>
  <rect class="cell" x="265" y="150" width="110" height="28" rx="6"/>
  <text class="lbl-sm" x="320" y="169" text-anchor="middle">/usr — প্রোগ্রাম-ভাণ্ডার</text>
  <rect class="cell" x="390" y="150" width="110" height="28" rx="6"/>
  <text class="lbl-sm" x="445" y="169" text-anchor="middle">/var — বদলান্ত ডেটা</text>
  <rect class="cell" x="515" y="150" width="30" height="28" rx="6"/>
  <text class="lbl-sm" x="530" y="169" text-anchor="middle">/dev</text>
  <text class="lbl-sm" x="280" y="215" text-anchor="middle">হার্ডড্রাইভ, USB — সবই এই এক গাছের কোথাও না কোথায় জুড়ে যায়</text>
  <text class="lbl-sm" x="280" y="240" text-anchor="middle">ড্রাইভের অক্ষর নয় — এক গোড়া, অগণিত শাখা</text>
</svg>
<div class="diag-cap">/home/john আর /root দুটোই "ঘর" — কিন্তু / নিজেই গোড়া; গোড়ার সাথে ঘর গুলিয়ো না।</div>
</div>
<div class="code-block">ঘরভিত্তিক স্মৃতি-সহায়:
  /home   → তোমার ব্যক্তিগত কর্মক্ষেত্র (downloads, projects…)
  /root   → admin-এর ব্যক্তিগত ঘর (গোড়া নয়!)
  /bin    → প্রাণ-কমান্ডের টুলবক্স: ls, cp, mv, cat, mkdir
  /sbin   → system-টুল: নেটওয়ার্ক, ডিস্ক, বুট, রিকভারি
  /etc    → পুরো OS-এর সেটিংস-ফোল্ডার
            (নেটওয়ার্ক, ssh, dns — সব কনফিগ এখানে)
  /usr    → Unix System Resources (user নয়!)
            ইউজার-প্রোগ্যাম ও রিসোর্সের বড় ভাণ্ডার
  /var    → ক্রমাগত বদলানো ডেটা: লগ, স্পুল, ক্যাশ</div>
<div class="verse">রফিক চাচা বই জমা দিতে দিতে বলেছিলেন: <em>আমি কাগজের নম্বর মনে রাখি না — আমি জানি কোন কাগজ কোন শাখায় জন্মায়।</em> আর তাঁর প্রিয় আয়াত: কালামের কথা নয় — <strong>শাজরা</strong>, গাছ — যার এক গোড়া, তবু শাখা আকাশমুখী; উত্তম বাণী তার উদাহরণ উত্তম গাছের মতো, শিকড় অটল, শাখা আসমানে (ইবরাহীম ১৪:২৪)। এক গোড়ায় অটল থেকে বেড়ে ওঠা — এই তো সংগঠনেরও নৈতিকতা।</div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নতুনদের সবচেয়ে বড় ভুল:</strong> /usr-কে "user" ভাবা — আসলে <strong>Unix System Resources</strong>; আর /root-কে ফাইল-সিস্টেমের রুট ভাবা — আসলে সে শুধু admin-এর home। দুটো ভুল একসাথে পুরো গাছটাই উল্টে দেয়।</div></div>
<div class="secret-box">🌲 ড্রাইভের অক্ষর নয়, এক গাছ — গোড়া /, আর প্রতিটা ঘর একটা দায়িত্বের নাম।</div>`,
  senior: {
    title: "Linux ফাইল-সিস্টেম — দ্রুত গাইড",
    body: "<p><strong>মডেল:</strong> single-root tree — সব ফাইল, ফোল্ডার, ডিভাইস, মাউন্ট এক /-এর নিচে। <strong>ঘর-ম্যাপ:</strong> /home (ইউজার কর্মক্ষেত্র), /root (admin-এর home — গোড়া নয়), /bin ও /sbin (essential ও system কমান্ড), /etc (OS-জুড়ে কনফিগ), /usr (Unix System Resources — প্রোগ্রাম-ভাণ্ডার), /var (লগ-স্পুল-ক্যাশের বদলান্ত ডেটা)। নিয়ম: ঘরের নাম = দায়িত্ব; নাম জানলে পথ নিজে বলে দেয়।</p>"
  }
});

doors.push({
  num: 4,
  icon: "⚙️",
  color: "#34d399",
  name: "দারোগার দফতর",
  subtitle: "Every Core LINUX Concept in 5 Minutes",
  tech: "Kernel, terminal/shell/PATH, everything-is-a-file, permissions+sudo, process/service/systemd, pipes, and more",
  spirit: "নিয়ম — ভেতরের নিয়ম বাইরের স্বাধীনতা",
  secret: "শহরে কেউ সরাসরি কুয়া-বিদ্যুত-সড়ক ছোঁয় না — সব যায় দফতর দিয়ে; লিনাক্সে কেউ সরাসরি হার্ডওয়্যার ছোঁয় না — সব যায় কার্নেল দিয়ে।",
  recall: {
    q: "Terminal আর shell এক নয় — পার্থক্য? 'command not found' মানে কী হয়েছে?",
    qen: "Terminal vs shell? What does 'command not found' actually mean?",
    a: "Terminal = যে জানালায় টাইপ করো ও আউটপুট দেখো; shell = সেই জানালার ভেতরের প্রোগ্রাম (bash/zsh/fish) যা তোমার লেখা বোঝে। 'Command not found' মানে কমান্ড অস্তিত্বহীন নয় — shell PATH-এ তালিকাভুক্ত ফোল্ডারগুলো খুঁজে প্রোগ্রামটা পায়নি।",
    aen: "Terminal = the window you type in; shell = the program inside it (bash/zsh/fish) that understands you. 'Command not found' means the shell searched every PATH folder and did not find the program — not that it cannot exist."
  },
  story: `<p class="scene-setting">রফিক চাচার গাছ চিনে নেওয়ার পর তুমি বেশ দাম্ভিক হয়ে গেছ — নতুন কমান্ড ইনস্টল করতে গিয়ে sudo চালিয়ে দিলে এক ঝটকায়, আর ভুল ফোল্ডারে ঢুকে পুরো সিস্টেমের সেটিংস উল্টে দিলে। মেশিন রিস্টার্টের পর আর উঠছে না। ঘাম দিয়ে গড়িয়ে পড়ছে, হাত কাঁপছে — কাল সকালে ডেমো দিতে হবে। এক বন্ধুর নম্বরে ফোন করতেই ওপাশ থেকে কড়া গলা: <em>মেশিনটা বন্ধ করে রাখো, আসছি।</em></p>
<p class="scene-setting en">Knowing the tree made you cocky: one casual sudo, one wrong folder, and the machine won't boot — demo tomorrow morning, sweat rolling, hands shaking. A friend's number, a stern voice: keep it off, I'm coming.</p>
<p class="scene-setting"><strong>কর্নেল সালাহউদ্দিন (অব.)</strong> — কোমরের বাঁ দিকে পুরনো চামড়ার মোটা খাতা, ডান হাতের তালুতে রেডিও-মাইক্রোফোনের জ্বালা-দাগ; পুলিশের দফতরে ত্রিশ বছর সার্জেন্ট, অবসরের পর পাড়ায় ফ্রি-তে মিটিমামলা মেটান। ঢুকেই মেশিনের সামনে চুপ করে দাঁড়ালেন, তারপর ধীরে ধীরে কথা শুরু: <em>তুমি একটা জিনিস বুঝোনি, বাবা। এই শহরে কেউ সরাসরি কুয়া, বিদ্যুত, সড়ক ছোঁতে পারে না। সবাই আমার দফতরে আবেদন করে — আমি সময় দিই, প্রায়োরিটি দিই, ভাগ করে দিই। তুমি রাতে ঘুমাও, পুলিশ জেগে থাকে। তোমার মেশিনেরও এমন এক দারোগা আছে — নাম কার্নেল।</em></p>
<p class="scene-setting en">Salahuddin (ret.) — a leather ledger at his hip, a radio-mic callus on his right palm; thirty years a sergeant, now settling neighborhood disputes for free. He stands silently before the dead machine, then begins: you never touched the well, the power, the roads directly — you applied through my office, and I timed, prioritized, divided. You sleep; the police stay awake. Your machine has such an officer too — its name is kernel.</p>
<div class="dialogue">কর্নেল সালাহউদ্দিন: দেখো বাবা — ছোট ভুলও মারাত্মক হয় যখন ক্ষমতা পুরো শহরের হাতে থাকে। আমাদের দফতরে কেউ এক লাইনে সব ছোঁয় না — অনুমতি আছে, তালিকা আছে, রসিদ আছে।</div>
<div class="dialogue en">Even a small mistake turns deadly when power spans the whole city. In our office nobody touches everything at once — there is permission, a list, a receipt.</div>
<div class="code-block">১০ কোর কনসেপ্ট — দারোগার দফতরের ভাষায়:

১. KERNEL — প্রোগ্রাম আর হার্ডওয়্যারের মাঝের দারোগা।
   CPU-সময়, মেমরি, ডিস্ক, নেটওয়ার্ক — কেউ
   সরাসরি হার্ডওয়্যার ছোঁয় না; সব যায় কার্নেল দিয়ে।

২. TERMINAL vs SHELL — জানালা বনাম ভেতরের অনুবাদক।
   কমান্ড not found মানে: shell PATH-এর
   সব ফোল্ডার ঘেঁটে প্রোগ্রাম পায়নি।

৩. EVERYTHING IS A FILE — সবকিছু-ফাইল।
   ডিভাইস → /dev, প্রসেস-তথ্য → /proc,
   হার্ডওয়্যার-তথ্য → /sys। একই read/write
   ভাষায় পুরো সিস্টেমের সাথে কথা।
   (দফতরের হিসাব: সব আবেদন এক ফর্মেই!)

৪. USERS, PERMISSIONS, ROOT, SUDO —
   প্রতিটা ফাইলের মালিক-গ্রুপ-অন্যরা ভাগে
   read/write/execute। root সব-ক্ষমতা;
   sudo = এক কমান্ডের জন্য সেই ক্ষমতা ধার।

৫. PROGRAM → PROCESS → SERVICE —
   প্রোগ্রাম = ডিস্কের কোড; প্রসেস = চলমান রূপ
   (নিজস্ব PID, নিজস্ব ইউজার); সার্ভিস = পেছনে
   চলা প্রসেস, systemd দিয়ে পরিচালিত।
   ⚠️ start (এখনই চালু) ≠ enable (প্রতি বুটে চালু)।

৬. STDIN/STDOUT, PIPES — কমান্ডের ইনপুট-আউটপুট
   ঘুরিয়ে দেওয়া যায়: ফাইলে, ফাইল থেকে,
   বা অন্য কমান্ডে — pipe দিয়ে। সার্চ-করা-এক-
   জিনিস-কমান্ড খোঁজো না; ছোটগুলো জোড়ো।</div>
<div class="code-block">(চলমান) ৭-১০: প্যাকেজ ম্যানেজার (apt/dnf —
   সিস্টেমের app-store), লগ (/var/log — সিস্টেমের
   ডায়েরি), নেটওয়ার্ক-টুল, আর শেল-স্ক্রিপ্ট
   (কমান্ডের ক্রম ফাইলে লিখে অটোমেশন)।
   দশটাই এক সুরে: কার্নেল দারোগা, সবকিছু-ফাইল,
   অনুমতির নিয়ম, ছোট টুলের জোড়া।</div>
<div class="verse">কর্নেল সালাহউদ্দিন মেরামত শেষে বললেন: <em>আমি সারাজীবন শিখলাম — ক্ষমতা যত বড়, নিয়ম তত ছোট হওয়া চাই।</em> এ তো সেই পুরনো হিকমতই: নামাজে দাঁড়ানো থেকে শুরু করে সবর — প্রতিটার এক নির্দিষ্ট সময় ও সীমা আছে; আর সীমা মানার মধ্যেই স্বাধীনতা। ব্যক্তি স্বাধীন থাকে নিয়মের ভেতরে — কার্নেলের জগতেও তাই, সালাতের স্রোতেও তাই।</div>
<div class="callout tip"><span class="co-icon">⚙️</span><div><strong>সূত্র ৩-এর গভীরতা:</strong> "everything is a file" মানে শুধু মজার কথা নয় — একবার ফাইল পড়া-লেখা শিখলেই তুমি ডিভাইস, প্রসেস-তথ্য, হার্ডওয়্যার-বিবরণ — সব একই ভাষায় জিজ্ঞেস করতে পারো। লিনাক্সের পুরো ইন্টারফেস-দর্শন এখানেই।</div></div>
<div class="secret-box">⚙️ কার্নেল দারোগা, সবকিছু ফাইল, অনুমতি তিন-ভাগে, ছোট টুল পাইপে জোড়া — চার সূত্রে পুরো সিস্টেম।</div>`,
  senior: {
    title: "১০ কোর কনসেপ্ট — দ্রুত গাইড",
    body: "<p><strong>চার স্তম্ভ:</strong> kernel (হার্ডওয়্যার-দারোগা), everything-is-a-file (/dev, /proc, /sys — এক ভাষায় সব), permissions (owner/group/other × r/w/x; root সর্ব-ক্ষমতা, sudo ধার-ক্ষমতা), pipes (ছোট টুল জোড়া)। <strong>বাকি:</strong> terminal≠shell, PATH-সার্চ, program/process/service + systemd (start vs enable), stdin/stdout ঘোরানো, প্যাকেজ ম্যানেজার, /var/log, শেল-স্ক্রিপ্ট। নিয়ম: স্তম্ভ চারটা আগে, বাকি সব তার উপরে।</p>"
  }
});

doors.push({
  num: 5,
  icon: "⌨️",
  color: "#34d399",
  name: "দোভাষীর অভিধান",
  subtitle: "Windows vs Linux Commands",
  tech: "Task-first command mapping: ls/dir, cp/copy, mv/move+ren, rm/del, grep/findstr, diff/fc, man/help",
  spirit: "লুগাত — কাজ এক, শব্দ আলাদা",
  secret: "ভাষা বদলালে কাজ বদলায় না — বদলায় শুধু শব্দ; দোভাষী শব্দ শেখে না, অর্থ শেখে।",
  recall: {
    q: "Linux-এ grep, diff, man — Windows কমান্ড প্রম্পটে এগুলোর জুড়ি কী?",
    qen: "Windows counterparts of grep, diff, and man?",
    a: "grep (টেক্সট-সার্চ) → findstr; diff (ফাইল-তুলনা) → fc (file compare); man (ম্যানুয়াল) → অধিকাংশ কমান্ডে /? হেল্প-অপশন। মূল পাঠ: কাজ এক — নাম আলাদা; কাজ-ভিত্তিক শিখলে দুই জগতেই চলে।",
    aen: "grep → findstr; diff → fc; man → the /? help option. The lesson: same tasks, different names — learn task-first and both worlds open."
  },
  story: `<p class="scene-setting">কর্নেল সালাহউদ্দিনের কাছ থেকে ফিরে তুমি এখন টার্মিনালে ভালোই চলো — লিনাক্সে। কিন্তু অফিসে ঢুকলেই বিপদ: সেখানে সব মেশিন Windows, আর তোমার আঙুল অটোমেটিক <strong>ls</strong> লিখে ফেলে। <em>'ls' is not recognized...</em> — লাল মুখে বসে থাকো। দুই জগতের মাঝখানে তুমি এখন নাম-শিখু বিদেশি। ঠিক তখনই হাজির হন এই কাণ্ডের সমাধানকারী।</p>
<p class="scene-setting en">Comfortable in the Linux terminal now — but at the office every machine is Windows, and your fingers autotype ls. Not recognized. You sit red-faced between two worlds like a name-learning foreigner. Enter the one who resolves exactly this.</p>
<p class="scene-setting"><strong>দোভাষী মাহমুদা</strong> — শহরের পুরনো আদালতের বাইরের বারান্দায় বসা লোকজনের দোভাষী; কাঁধে সবসময় একটা জির্ণ দুই-ভাষার খাতা, ডান কানের ওপর চুল সাদা হয়ে যাওয়া একটা টিক — ত্রিশ বছরে শত শত মামলার ভাষা বদলেছেন, কিন্তু একটাও বিচার নয়। তুমি কাঁপা গলায় বললে — <em>আপা, আমি লিনাক্সে অভ্যস্ত, উইন্ডোজের শব্দ জানি না।</em> মাহমুদা আপা খাতাটা খুলে বললেন: <em>শব্দ জানাটা সমস্যা না — সমস্যা হলো কাজ ভুলে যাওয়া। তুমি বলো কাজ, আমি বলছি শব্দ।</em></p>
<p class="scene-setting en">Mahmuda the interpreter — a worn bilingual notebook always on her shoulder, one white streak of hair above the right ear; thirty years of translating cases, never judging one. You stammer: I know Linux, not Windows words. She opens the notebook: words are not the problem — forgetting the task is. You say the task; I give the word.</p>
<div class="dialogue">মাহমুদা আপা: আদালতে দেখেছি — যে মোকদ্দমার ভাষা বদলায়, দলিলের কাগজ বদলে না, দাবিই থাকে। তুমি শুধু দাবি মনে রাখো — শব্দ আমি দেবো।</div>
<div class="dialogue en">In court I have seen cases change language — the papers change, the claim stays. Remember the claim; I will supply the words.</div>
<div class="callout info"><span class="co-icon">📖</span><div><strong>কাজ-ভিত্তিক অভিধান — মাহমুদা আপার খাতা থেকে:</strong></div></div>
<div class="code-block">কাজ                    LINUX      WINDOWS
ফাইল তালিকা           ls         dir
কপি                   cp         copy
সরানো / নাম-বদল       mv         move / ren
মুছে ফেলা             rm         del
স্ক্রিন পরিষ্কার        clear      cls
টেক্সট-সার্চ           grep       findstr
ফাইল-তুলনা            diff       fc
ম্যানুয়াল / সাহায্য     man        /? (help অপশন)
কোথায় আছি             pwd        cd (একা টাইপ)
তারিখ-সময়            date       date / time

লক্ষ করো প্যাটার্নটা:
  mv এক কমান্ডে সরানো+নাম-বদল দুটোই করে;
  Windows সেটা ভেঙেছে (move + ren)।
  Linux-এর নামগুলো ছোট — টাইপের জন্য,
  কারণ জন্ম টার্মিনাল-যুগে, দ্রুততার জন্য।</div>
<div class="verse">মাহমুদা আপা খাতা গুছাতে গুছাতে বললেন: <em>আমি ত্রিশ বছরে শিখেছি — ভাষার প্রাচীর নামে যাকে বলে, সেটা আসলে শব্দের প্রাচীর; অর্থের নদী তার নিচ দিয়েই বয়।</em> আর এই তো সেই সুন্দর দোআয়ার শিক্ষাও — <strong>লুগাত</strong> (শব্দকোষ) শেখা মানে নতুন অর্থ শেখা নয়, পুরনো অর্থের নতুন পোশাক চেনা। কাজই আসল, শব্দ তার বাহন — এই চোখ থাকলে পৃথিবীর সব টার্মিনাল তোমার।</div>
<div class="callout tip"><span class="co-icon">🧭</span><div><strong>মাহমুদা আপার মূল উপদেশ:</strong> এই তালিকা মুখস্থ করার দরকার নেই। প্যাটার্নটা ধরো — <strong>সামনে একটা কাজ (ফাইল খোঁজা, লগ-সার্চ, তুলনা), OS সেই কাজের একটা টুল দেয়, নাম-সিনট্যাক্স OS-এর</strong>। একবার এই চোখ তৈরি হলে দুই জগতের মাঝে ঘুরে বেড়ানো কঠিন নয় — আর এটাই আজকের ডেভ-বাস্তবতা: ল্যাপটপে Windows, সার্ভারে Linux।</div></div>
<div class="secret-box">⌨️ কমান্ড মুখস্ত নয় — কাজ চেনো; জগৎ বদলালে শব্দ বদলায়, কাজ থাকে।</div>`,
  senior: {
    title: "Windows ↔ Linux কমান্ড — দ্রুত গাইড",
    body: "<p><strong>ম্যাপ:</strong> ls/dir · cp/copy · mv/move+ren · rm/del · clear/cls · grep/findstr · diff/fc · man//? · pwd/cd · date/date+time। <strong>প্যাটার্ন:</strong> mv দুই-কাজ-এক-নাম, Windows ভাঙে; Linux-নাম ছোট (টার্মিনাল-জন্ম)। <strong>নিয়ম:</strong> টাস্ক-ফার্স্ট শেখো — ls মুখস্ত নয়, ফাইল-তালিকা-দেখা শেখো; দুই OS-এ টুল-নাম আলাদা, কাজ এক।</p>"
  }
});

doors.push({
  num: 6,
  icon: "🛠️",
  color: "#a7f3d0",
  name: "আস্তানার রাত — ছয় মাস্টারের সমাবেশ",
  subtitle: "10 Linux Productivity Tools — পূর্ণ যাত্রার সমাপ্তি",
  tech: "fzf, tmux, mosh, zoxide, bat, btop + more — modern upgrades over cat/grep/cd/top",
  spirit: "ইহসান — নিখুঁততার চর্চা কাজের ভেতরেই",
  secret: "ভালোবাসা ছাড়া হাতিয়ার হাতেই থাকে অচেনা; দক্ষতা ভালোবাসারই অন্য নাম — দিনে শতবারের কাজেই ছোট উন্নতি সবচেয়ে বড়।",
  recall: {
    q: "tmux আর mosh দুটো কী সমস্যা সমাধান করে? দুটো মিলিয়ে কী পাওয়া যায়?",
    qen: "What problems do tmux and mosh solve? What do you get combining them?",
    a: "tmux: দীর্ঘ কাজ চলাকালীন Wi-Fi কাটলে/ল্যাপটপ বন্ধ করলেও প্রসেস সার্ভারে চলতে থাকে — ফিরে এসে ঠিক যেখানে ছিলে সেখান থেকে; সাথে একাধিক টার্মিনাল-উইন্ডো/পেন-ব্যবস্থাপনা। mosh: অস্থির নেটওয়ার্কে SSH-সেশন মরে যাওয়া থেকে বাঁচায় — Wi-Fi↔মোবাইল-ডেটা বদলানো, ল্যাপটপ বন্ধও নিরাপদ। দুটো মিলে: দূরের সার্ভারে বিশ্বস্ত, টিকে থাকা ডেভ-পরিবেশ।",
    aen: "tmux keeps processes running on the server through disconnects and manages panes; mosh survives network switches and unstable links where SSH dies. Together: a reliable remote development setup."
  },
  story: `<p class="scene-setting">মাস ঘুরে গেছে। তুমি এখন সত্যিকারের টার্মিনাল-মানুষ — জাহেনা বেগমের বাছাই করা ল্যাপটপে, রফিক চাচার গাছে, কর্নেল সালাহউদ্দিনের নিয়মে, মাহমুদা আপার শব্দে। শুক্রবার সন্ধ্যায় তোমার ছোট্ট আস্তানায় এক অদ্ভুত সমাবেশ ডাকা হয়েছে — পাঁচ মাস্টার এক ছাদে, আর ছয় নম্বর চেয়ারটা ফাঁকা রাখা — তোমার জন্য। কেউ জানে না কে ডেকেছে; সবাই জানে কেন এসেছে।</p>
<p class="scene-setting en">Months have passed; you are truly a terminal person now. On a Friday evening your small rooftop hosts an odd gathering — five masters under one sky, the sixth chair kept empty for you. Nobody knows who called it; everybody knows why they came.</p>
<p class="scene-setting">হারুন মিয়া এসেছেন নতুন শাবল পালিশ করা হাতে, জাহেনা বেগম বাজার-থেকে-সোজা কপালে ঘামের দাগ, রফিক চাচার কাঁধে তালিকার ফাইল, কর্নেল সালাহউদ্দিনের খাতাটা স্বগোৎ। মাহমুদা আপা ঢুকলেন শেষে — কাঁধে সেই জির্ণ খাতা। তুমি চায়ের পেয়ালা হাতে বললে — আজ শেষ পাঠ। আমার টার্মিনাল এখন ভালো চলে... কিন্তু কিছু একটা নেই।</p>
<div class="dialogue">হারুন মিয়া (শাবলে হাত বুলিয়ে): বাবা, আমি পঁয়তাল্লিশ বছরে প্রতিদিন একটু করে শাবলের হাতল বদলেছি — মাপ অনুযায়ী। হাতিয়ার তোমার হাতের ছাঁচ ধরে না, তুমি হাতিয়ারকে ধরাও।</div>
<div class="dialogue en">Forty-five years, and I reshaped a handle a little every day — to fit the hand. The tool does not learn your hand; you teach it your hand.</div>
<div class="code-block">১০টা আধুনিক টুল — পুরনো বন্ধুর আধুনিক রূপ:

১. FZF — ফাজি-খোঁজা: ফাইল, ফোল্ডার, git-ব্রাঞ্চ,
   প্রসেস, Docker-কন্টেইনার, এমনকি কমান্ড-হিস্ট্রি।
   Ctrl+R-এ কয়েক অক্ষর লিখলেই সপ্তাহ-আগের
   কমান্ড হাজির — একবার অভ্যস্ত হলে পুরনো
   হিস্ট্রি-সার্চ অসহ্য লাগে।

২. TMUX — কাটা সংযোগে অবিচল: দীর্ঘ-কাজ চলার
   মধ্যে Wi-Fi গেলো? প্রসেস সার্ভারে বেঁচে;
   পরে ফিরে এসে হুবহু আগের জায়গা থেকে চালো।
   বোনাস: একাধিক টার্মিনাল-জানালা ও পেন-ব্যবস্থা।

৩. MOSH — অস্থির নেটে অমর সেশন: SSH মরে যায়
   এমন জায়গায় — নেটওয়ার্ক বদল, ল্যাপটপ বন্ধ —
   সব সয়ে যায়; দূরের সার্ভারে টাইপিংও ঝরঝরে।
   tmux + mosh = দূর-দেব-সেটআপের সোনার জোড়া।

৪. ZOXIDE — শেখা-পথের cd: কোন ফোল্ডারে ঘন যাও
   তা মনে রাখে; z portal লিখলেই দীর্ঘ পথ
   ডিঙিয়ে সরাসরি প্রজেক্টে। সপ্তাহে শত বার —
   সঞ্চয় জমে যায়।

৫. BAT — cat-এর পোশাকি রূপ: syntax highlighting,
   লাইন-নম্বর, git-ইন্টিগ্রেশন। পাইপলাইনে cat,
   মানুষের পড়ার জন্য bat।

৬. BTOP — top-এর এক্সপ্লেইনার: মেশিন ধীর?
   CPU/মেমরি/নেটওয়ার্ক/ডিস্ক এক নজরে —
   দোষী প্রসেস সঙ্গে সঙ্গে ধরা।</div>
<div class="code-block">৭. RIPGREP (rg) — grep-এর দ্রুততর রূপ: কোডবেসে
   সার্চ করে, .gitignore মানে, node_modules-এর
   মতো বাদ-দেওয়া ফোল্ডার স্বয়ংক্রিয়ভাবে এড়ায়।
   বড় প্রজেক্টে isAdmin-এর সব রেফারেন্স চাই?
   লম্বা grep-কমান্ড নয় — শুধু rg isAdmin।

৮. FD — find-এর সহজ উত্তরাধিকারী: find শক্তিশালী
   কিন্তু সিনট্যাক্স মনে রাখা কঠিন; fd util লিখলেই
   নামে util-থাকা ফাইল খুঁজে দেয় — দ্রুত, পাঠযোগ্য,
   hidden/git-ignored ফাইল ডিফল্টে এড়ায়।

৯. DELTA — git-diff পাঠক: বিশাল diff পড়া কষ্টের;
   delta দেয় syntax highlighting, লাইন-নম্বর,
   side-by-side ভিউ, অক্ষর-স্তরের হাইলাইট।
   Git বদলায় না — Git-কে পড়া-সহজ করে।

১০. LAZYDOCKER — Docker-এর এক-দফতর: docker ps,
    docker logs, docker stats, docker inspect —
    দিনে বারবার চালানো কমান্ডগুলো এক টার্মিনাল
    ইন্টারফেসে: কন্টেইনার দেখো, লগ স্ট্রিম করো,
    রিসোর্স মনিটর করো, ইমেজ-ভলিউম সামলাও।

শিক্ষকের মূল্যায়ন-নিয়ম:
  ক্লাসিক কমান্ড সর্বত্র পাবে — ভিত্তি ওরাই।
  আধুনিক টুল বাছো কাজের ঘনত্ব দেখে:
  দিনে শতবার যে-কাজ, তার ছোট উন্নতিই
  সবচেয়ে বড় সঞ্চয়।</div>
<div class="dialogue">জাহেনা বেগম: আমি দোকান বেছে দিই, কিন্তু কেনা তোমাকেই — মনে আছে? টুলও তাই: তালিকা আমাদের, বাছাই তোমার কাজের।</div>
<div class="dialogue">রফিক চাচা: fzf দেখেছো? আমার তালিকার মতোই — নাম মনে না থাকলেও অর্ধেক অক্ষরে খুঁজে দেয়। গাছ বড় হলে ডালে ডালে পাখি আসে।</div>
<div class="dialogue">কর্নেল সালাহউদ্দিন: আর সাবধান — এগুলো সব অলংকার, নিয়ম নয়। নিয়ম ভাঙলে fzf-ও বাঁচাতে পারবে না।</div>
<div class="dialogue">মাহমুদা আপা: bat কী করে? পড়ানো। zoxide? চলা। fzf? খোঁজা। rg? খোঁজা-ই, দ্রুত। fd? খোঁজা-ই, সহজ। — দেখো, কাজই থাকে, শব্দ বদলায়।</div>
<div class="dialogue en">Jahena: I choose the shop; the buying is yours. Tools too — the list is ours, the choosing is your work's. Rafiq: fzf is my list — half a word finds the whole. Salahuddin: these are ornaments, not law — break the law and no tool saves you. Mahmuda: bat reads, zoxide walks, fzf seeks, rg seeks faster, fd seeks simpler — the task stays, only the word changes.</div>
<p class="scene-setting">চাঁদ উঠেছে। তুমি চারদিকে তাকাও — মুচি, ক্রেতা-নির্দেশিকা, গ্রন্থাগারিক, দারোগা, দোভাষী — পাঁচজন মানুষ, পাঁচটা পেশা, কিন্তু সবাই একটাই কথা বলছেন নিজের ভাষায়: <strong>কাজ চেনো, নিয়ম মানো, হাতিয়ারকে নিজের করে নাও।</strong> আর ছয় নম্বর চেয়ারটা — সেটা তোমার; এই পথের পরবর্তী মাস্টার যিনি আজ থেকে অন্য কাউকে দেখাবেন। তখনই তোমার মনে পড়ে যায় প্রথম রাতের সেই এক-লাইন: cat app.log | grep error | sort — যে-লাইন দিয়ে শুরু, সেই লাইনেই শেষ: ছোট টুল, এক কাজ, জোড়া দাও। সব দরজার নিচে একই সূত্র ছিল — আজ চোখ খুলে গেলো।</p>
<p class="scene-setting en">Moonrise. Cobbler, guide, librarian, officer, interpreter — five trades, one sentence in five tongues: know the task, honor the rule, make the tool yours. And you remember the first night's line — cat app.log | grep error | sort — the journey ends where it began: small tools, one job, chained. One principle under every door; tonight it clicked.</p>
<div class="verse">কুরআনে বলা হয়েছে: <em>মানুষের জন্য তা-ই আছে, সে যার চেষ্টা করে</em> (নাজম ৫৩:৩৯) — আর চেষ্টার সবচেয়ে সূক্ষ্ম রূপ ইহসান: কাজটা এমনভাবে করো যেন দেখছে। টার্মিনাল-কারিগরের ইহসান — দিনের শত ছোট কাজে প্রতিটা অক্ষর যত্নে বাছা। হারুন মিয়ার শাবলের হাতল যেমন বছরে বছরে হাতের ছাঁচ হয়, তোমার টুল-বাছাইও তেমনি তোমার কাজের ছাঁচ ধরবে — উভয়েই একই ইবাদত: কাজকে ভালোবেসে নিখুঁত করা।</div>
<div class="callout tip"><span class="co-icon">🏁</span><div><strong>সিরিজ-সংযোগ:</strong> দরজা ১-এ Unix-দর্শন শিখেছিলে — ছোট টুল, ভালো করে, জোড়া দিয়ে; আজকের ১০ টুল সেই একই দর্শনের ২০২৬-সংস্করণ। আর দরজা ৫-এর অভিধান হাতে নিয়ে বলো — fzf কী করে? খোঁজা। bat? পড়ানো। zoxide? চলা। <strong>কাজ-ভিত্তিক চোখটাই আসল অস্ত্র, টুল তার বাহন।</strong></div></div>
<div class="secret-box">🛠️ পুরনো বন্ধু ছাড়বে না, নতুন বন্ধু বাছবে কাজ-ঘনত্ব দেখে — দিনে শতবারের কাজেই ছোট উন্নতি সবচেয়ে বড়।</div>`,
  senior: {
    title: "১০ প্রোডাক্টিভিটি টুল — দ্রুত গাইড",
    body: "<p><strong>জোড়া-ম্যাপ:</strong> fzf (ফাজি-সার্চ: ফাইল/ব্র্যাঞ্চ/হিস্ট্রি; Ctrl+R-র রূপান্তর), tmux (disconnect-proof সেশন + পেন-ব্যবস্থাপনা), mosh (অস্থির নেটে টিকে থাকা SSH-বিকল্প), zoxide (শেখা-পথের cd), bat (পোশাকি cat), btop (এক্সপ্লেইনার মনিটর), ripgrep (দ্রুত কোড-সার্চ, .gitignore-সচেতন), fd (সহজ find), delta (পাঠযোগ্য git-diff), lazydocker (Docker-এর এক-ইন্টারফেস)। <strong>নিয়ম:</strong> ক্লাসিক = ভিত্তি (সর্বত্র পাওয়া যায়); আধুনিক = ঘন-কাজের বিনিয়োগ। tmux+mosh মিলে রিমোট-ডেভের সোনার জোড়া।</p>"
  }
});
