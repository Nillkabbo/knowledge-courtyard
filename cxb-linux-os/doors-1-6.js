// doors.js — Cloud X Berry Series Book 3: The Linux Terminal Path
// Source: Linux & Operating Systems playlist (6 videos)
const doors = [];

doors.push({
  num: 1,
  icon: "🕰️",
  color: "#34d399",
  name: "Unix-এর সূচনা",
  subtitle: "UNIX vs LINUX — The Most Confused Topic",
  tech: "Unix birth (Bell Labs 1969), Unix philosophy, C rewrite & portability, Unix-like vs Unix",
  spirit: "আসল — উৎস জানলে বর্তমান পড়া যায়",
  secret: "Linux Unix নয় — Unix-এর দর্শন নিয়ে স্ক্র্যাচে লেখা; আর Unix-এর আসল উপহার কোড নয়, ছোট-টুল-জোড়া-চেইন ভাবনার ধারা।",
  recall: {
    q: "Linux কি Unix থেকে তৈরি? না কি আলাদা?",
    qen: "Was Linux created from Unix, or separately?",
    a: "আলাদা। ১৯৯১ সালে Linus Torvalds Unix-এর সোর্স না নিয়ে স্ক্র্যাচে নিজের কার্নেল লেখেন — Unix-এর ডিজাইন ও দর্শনে অনুপ্রাণিত, তাই Linux 'Unix-like'। Unix তেমনি একটা পরিবারও (AIX, Solaris, HP-UX, BSD)।",
    aen: "Separately. In 1991 Linus Torvalds wrote his own kernel from scratch — inspired by Unix design and philosophy, hence 'Unix-like'. Unix itself is also a family (AIX, Solaris, HP-UX, BSD)."
  },
  story: `<p class="scene-setting">Unix আর Linux — দুটো নাম, রীতিমতো বিভ্রান্তির জন্ম। কমান্ড মেলে, ধারণা মেলে, দেখতে মেলে — তাহলে একই নাকি? শিক্ষক গল্পটা ধরিয়ে দেন ইতিহাসের গোড়া থেকে।</p>
<p class="scene-setting en">Unix and Linux — two names, endless confusion. Similar commands, similar concepts. Same thing? The teacher untangles it from the very beginning of the story.</p>
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
<div class="callout tip"><span class="co-icon">🐧</span><div><strong>শিক্ষকের স্পষ্টীকরণ:</strong> "Linux" বলতে লোকে বোঝায় Ubuntu/Fedora-র মতো পুরো OS — কিন্তু কারিগরি ভাষায় Linux হলো <strong>শুধু কার্নেল</strong>: CPU-সময়, মেমরি, প্রসেস, ডিভাইস — সফটওয়্যার আর হার্ডওয়্যারের মাঝের সেই কোর ম্যানেজার। কার্নেল + GNU টুলস + প্যাকেজ ম্যানেজার + ডেস্কটপ = distribution।</div></div>
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
  name: "চার জগতের ভূগোল",
  subtitle: "Every Operating System Explained in 6 Minutes",
  tech: "Windows / macOS / Linux / Ubuntu landscape — users, strengths, trade-offs, install paths",
  spirit: "ওয়ায় — প্রত্যেক জগতের জায়গা আলাদা",
  secret: "সেরা OS বলে কিছু নেই — আছে কাজ-মিলানো: Windows সর্বজনীন, macOS সূক্ষ্ম-নিয়ন্ত্রিত, Linux নিয়ন্ত্রণ-ক্ষমতা, Ubuntu লিনাক্সের সহজ দরজা।",
  recall: {
    q: "চারটা OS-জগতের প্রতিটার এক-লাইন পরিচয় দাও।",
    qen: "One-line identity of each of the four OS worlds.",
    a: "Windows — সর্বজনীন ডিফল্ট, সবচেয়ে বেশি অ্যাপ/গেম, বড় ভাইরাস-টার্গেট। macOS — Apple-হার্ডওয়্যার+সফটওয়্যার একসুর, স্থিতিশীল, দামি, গেমে দুর্বল। Linux — distro-র সমাবেশ, নিয়ন্ত্রণ+নিরাপত্তা+হালকা, সার্ভার/ক্লাউডের রাজা, নতুনদের কাছে খাড়া শেখার ঢাল। Ubuntu — বিগিনার-বান্ধব লিনাক্স, লিনাক্স-জগতে প্রথম পা রাখার সহজ দরজা।",
    aen: "Windows — universal default, most apps/games, biggest virus target. macOS — Apple-controlled smoothness, pricey, weak for games. Linux — a family of distros, control/security/lightness, rules servers, steeper for beginners. Ubuntu — beginner-friendly Linux, the easy first door."
  },
  story: `<p class="scene-setting">কোন OS "ভালো" — এই প্রশ্নটাই ভুল। শিক্ষকের মানচিত্রে প্রতিটা OS একেকটা জগৎ, নিজস্ব বাসিন্দা-সংস্কৃতি-সীমান্ত নিয়ে। ভ্রমণ করে বেড়াই চার জগতে।</p>
<p class="scene-setting en">Which OS is 'good' is the wrong question. In the teacher's map each OS is a world with its own inhabitants and borders. Let's travel.</p>
<div class="diagram">
<div class="diag-title">চার জগৎ — শিক্ষকের তুলনা-মানচিত্র</div>
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
<div class="secret-box">🗺️ সেরা OS নেই — আছে তোমার কাজের মানচিত্র; আর লিনাক্স অদৃশ্য হয়ে তোমার প্রতিদিন চালায়।</div>`,
  senior: {
    title: "OS ভূগোল — দ্রুত গাইড",
    body: "<p><strong>Windows:</strong> সর্বজনীন, অ্যাপ/গেম-সর্বাধিক, ভাইরাস-টার্গেট। <strong>macOS:</strong> Apple-নিয়ন্ত্রিত মসৃণতা, দামি, গেম-দুর্বল। <strong>Linux:</strong> distro-পরিবার, নিয়ন্ত্রণ/নিরাপত্তা/হালকা, সার্ভার-ক্লাউডের মেরুদণ্ড। <strong>Ubuntu:</strong> বিগিনার-দরজা। প্রবেশ-পথ: dual-boot / full / VM। সিদ্ধান্ত-নিয়ম: OS বাছো কাজ দেখে, হাইপ দেখে নয়।</p>"
  }
});

doors.push({
  num: 3,
  icon: "🌲",
  color: "#34d399",
  name: "এক রুটের গাছ",
  subtitle: "LINUX isn't Hard — File Directories",
  tech: "Single root tree (/), /home /root /bin /sbin /etc /usr /var — what lives where and why",
  spirit: "শাজরা — এক গোড়া থেকে সব শাখা",
  secret: "Windows-এ C-D-E ড্রাইভ, Linux-এ একটাই গাছ — রুট শুধু /, আর প্রতিটা ডিরেক্টরি একটা নির্দিষ্ট দায়িত্বের ঘর; ঘরের নাম বুঝলে পুরো সিস্টেম পড়া যায়।",
  recall: {
    q: "/ (root) আর /root কি একই জিনিস? /etc আর /usr-এর কাজ কী?",
    qen: "Are / and /root the same? What do /etc and /usr do?",
    a: "না। / হলো পুরো ফাইল-সিস্টেমের গোড়া; /root হলো admin (root ইউজার)-এর ব্যক্তিগত home ফোল্ডার — গাছের ভেতরের একটা ঘর মাত্র। /etc = পুরো OS-এর কনফিগারেশন-ঘর; /usr = Unix System Resources — ইউজার-প্রোগ্রাম ও রিসোর্সের বড় ভাণ্ডার (user নয়!)।",
    aen: "No. / is the root of the entire filesystem; /root is just the admin user's personal home folder. /etc = the OS-wide settings room; /usr = Unix System Resources — the big store of user programs (not 'user'!)."
  },
  story: `<p class="scene-setting">লিনাক্স টার্মিনাল খুললেই প্রথম ধাক্কা: C ড্রাইভ কোথায়? সবকিছু একটা /-এর ভেতরে কেন? /bin, /etc, /usr, /var — এগুলো কী আষ্টেপৃষ্ঠে নাম? শিক্ষক দেখান: এটা জটিলতা নয়, একটা সুন্দর গাছ।</p>
<p class="scene-setting en">The first shock of a Linux terminal: where is the C drive? Why is everything under one /? The teacher shows: this is not complexity — it is a beautiful tree.</p>
<div class="diagram">
<div class="diag-title">এক রুটের গাছ — শিক্ষকের চিত্র</div>
<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell-hot" x="240" y="15" width="80" height="40" rx="8"/>
  <text class="lbl-hot" x="280" y="40" text-anchor="middle">/ (root)</text>
  <line class="edge" x1="280" y1="55" x2="80" y2="90"/>
  <line class="edge" x1="280" y1="55" x2="280" y2="90"/>
  <line class="edge" x1="280" y1="55" x2="480" y2="90"/>
  <line class="edge" x1="80" y1="118" x2="80" y2="145" stroke="none"/>
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
  <text class="lbl-sm" x="280" y="215" text-anchor="middle">হার্ডড্রাইভ, USB — সবই এই এক গাছের কোথাও না কোথাও জুড়ে যায়</text>
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
            ইউজার-প্রোগ্রাম ও রিসোর্সের বড় ভাণ্ডার
  /var    → ক্রমাগত বদলানো ডেটা: লগ, স্পুল, ক্যাশ</div>
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
  name: "কার্নেলের দশ সূত্র",
  subtitle: "Every Core LINUX Concept in 5 Minutes",
  tech: "Kernel, terminal/shell/PATH, everything-is-a-file, permissions+sudo, process/service/systemd, pipes, and more",
  spirit: "নিয়ম — ভেতরের নিয়ম বাইরের স্বাধীনতা",
  secret: "লিনাক্সের দশ সূত্র এক সুরে বাঁধা: কার্নেল সবকিছুর দারোগা, সবকিছু-ফাইল, অনুমতির ত্রিমুখী নিয়ম, আর ছোট টুলের পাইপ-জোড় — এই চারটা বুঝলে বাকি ছয়টা নিজেই বসে যায়।",
  recall: {
    q: "Terminal আর shell এক নয় — পার্থক্য? 'command not found' মানে কী হয়েছে?",
    qen: "Terminal vs shell? What does 'command not found' actually mean?",
    a: "Terminal = যে জানালায় টাইপ করো ও আউটপুট দেখো; shell = সেই জানালার ভেতরের প্রোগ্রাম (bash/zsh/fish) যা তোমার লেখা বোঝে। 'command not found' মানে কমান্ড অস্তিত্বহীন নয় — shell PATH-এ তালিকাভুক্ত ফোল্ডারগুলো খুঁজে প্রোগ্রামটা পায়নি।",
    aen: "Terminal = the window you type in; shell = the program inside it (bash/zsh/fish) that understands you. 'Command not found' means the shell searched every PATH folder and did not find the program — not that it cannot exist."
  },
  story: `<p class="scene-setting">দশটা ধারণা পাশাপাশি শুনলে মাথা ঘোরে — কিন্তু শিক্ষকের তালিকায় ওগুলো একটার ভেতরে আরেকটা: কার্নেল কেন্দ্রে, বাকি সব তার চারপাশের নিয়ম। এক নিঃশ্বাসে দশ সূত্র।</p>
<p class="scene-setting en">Ten concepts side by side can dizzy you — but in the teacher's list each nests inside the next: kernel at the center, the rest as rules around it. Ten principles in one breath.</p>
<div class="code-block">১০ কোর কনসেপ্ট — শিক্ষকের ক্রমে:

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
  name: "দুই জগতের অভিধান",
  subtitle: "Windows vs Linux Commands",
  tech: "Task-first command mapping: ls/dir, cp/copy, mv/move+ren, rm/del, grep/findstr, diff/fc, man/help",
  spirit: "লুগাত — কাজ এক, শব্দ আলাদা",
  secret: "কমান্ড মুখস্থ নয়, কাজ চেনো — কাজ এক রাখলে জগৎ বদলালেও শুধু শব্দ বদলায়: ফাইল দেখো, কপি করো, খোঁজো, তুলনা করো — Linux-এ ls/cp/grep/diff, Windows-এ dir/copy/findstr/fc।",
  recall: {
    q: "Linux-এ grep, diff, man — Windows কমান্ড প্রম্পটে এগুলোর জুড়ি কী?",
    qen: "Windows counterparts of grep, diff, and man?",
    a: "grep (টেক্সট-সার্চ) → findstr; diff (ফাইল-তুলনা) → fc (file compare); man (ম্যানুয়াল) → অধিকাংশ কমান্ডে /? হেল্প-অপশন। মূল পাঠ: কাজ এক — নাম আলাদা; কাজ-ভিত্তিক শিখলে দুই জগতেই চলে।",
    aen: "grep → findstr; diff → fc; man → the /? help option. The lesson: same tasks, different names — learn task-first and both worlds open."
  },
  story: `<p class="scene-setting">Linux আর Windows দুই বিচ্ছিন্ন জগৎ মনে হয় — কিন্তু কমান্ড-লাইনে নামলে আশ্চর্য জিনিস দেখা যায়: কাজগুলো হুবহু এক, শুধু নাম আলাদা। শিক্ষকের অভিধানে প্রতিটা প্রবেশ: কাজ আগে, নাম পরে।</p>
<p class="scene-setting en">Linux and Windows seem like separate worlds — until you open both command lines: the tasks are identical, only the names differ. In the teacher's dictionary, task first, name second.</p>
<div class="code-block">কাজ-ভিত্তিক অভিধান — শিক্ষকের তালিকা:

কাজ                    LINUX      WINDOWS
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
<div class="callout tip"><span class="co-icon">🧭</span><div><strong>শিক্ষকের মূল উপদেশ:</strong> এই তালিকা মুখস্থ করার দরকার নেই। প্যাটার্নটা ধরো — <strong>সামনে একটা কাজ (ফাইল খোঁজা, লগ-সার্চ, তুলনা), OS সেই কাজের একটা টুল দেয়, নাম-সিনট্যাক্স OS-এর</strong>। একবার এই চোখ তৈরি হলে দুই জগতের মাঝে ঘুরে বেড়ানো কঠিন নয় — আর এটাই আজকের ডেভ-বাস্তবতা: ল্যাপটপে Windows, সার্ভারে Linux।</div></div>
<div class="secret-box">⌨️ কমান্ড মুখস্থ নয় — কাজ চেনো; জগৎ বদলালে শব্দ বদলায়, কাজ থাকে।</div>`,
  senior: {
    title: "Windows ↔ Linux কমান্ড — দ্রুত গাইড",
    body: "<p><strong>ম্যাপ:</strong> ls/dir · cp/copy · mv/move+ren · rm/del · clear/cls · grep/findstr · diff/fc · man//? · pwd/cd · date/date+time। <strong>প্যাটার্ন:</strong> mv দুই-কাজ-এক-নাম, Windows ভাঙে; Linux-নাম ছোট (টার্মিনাল-জন্ম)। <strong>নিয়ম:</strong> টাস্ক-ফার্স্ট শেখো — ls মুখস্থ নয়, ফাইল-তালিকা-দেখা শেখো; দুই OS-এ টুল-নাম আলাদা, কাজ এক।</p>"
  }
});

doors.push({
  num: 6,
  icon: "🛠️",
  color: "#a7f3d0",
  name: "আধুনিক অস্ত্রাগার",
  subtitle: "10 Linux Productivity Tools — পূর্ণ যাত্রার সমাপ্তি",
  tech: "fzf, tmux, mosh, zoxide, bat, btop + more — modern upgrades over cat/grep/cd/top",
  spirit: "সান্নিধ্য — সঠিক হাতিয়ারে কাজের সান্নিধ্য",
  secret: "ক্লাসিক কমান্ড যাবত না যায় — কিন্তু টার্মিনালে দিন কাটালে ছোট আপগ্রেডের চাকচিক্য জীবন বদলে দেয়: অস্পষ্ট খোঁজা fzf, কাটা-সংযোগে বাঁচানো tmux, ফুর্তির পথ zoxide।",
  recall: {
    q: "tmux আর mosh দুটো কী সমস্যা সমাধান করে? দুটো মিলিয়ে কী পাওয়া যায়?",
    qen: "What problems do tmux and mosh solve? What do you get combining them?",
    a: "tmux: দীর্ঘ কাজ চলাকালীন Wi-Fi কাটলে/ল্যাপটপ বন্ধ করলেও প্রসেস সার্ভারে চলতে থাকে — ফিরে এসে ঠিক যেখানে ছিলে সেখান থেকে; সাথে একাধিক টার্মিনাল-উইন্ডো/পেন-ব্যবস্থাপনা। mosh: অস্থির নেটওয়ার্কে SSH-সেশন মরে যাওয়া থেকে বাঁচায় — Wi-Fi↔মোবাইল-ডেটা বদলানো, ল্যাপটপ বন্ধও নিরাপদ। দুটো মিলে: দূরের সার্ভারে বিশ্বস্ত, টিকে থাকা ডেভ-পরিবেশ।",
    aen: "tmux keeps processes running on the server through disconnects and manages panes; mosh survives network switches and unstable links where SSH dies. Together: a reliable remote development setup."
  },
  story: `<p class="scene-setting">cat, grep, find, cd — বিশ্বস্ত পুরনো বন্ধু, যাবত না যাচ্ছে। কিন্তু ঘণ্টার পর ঘণ্টা টার্মিনালে কাটালে ছোট ছোট উন্নতি জমে জমে কর্মপ্রবাহ বদলে দেয়। শিক্ষকের শেষ ভিডিওতে ১০টা আধুনিক অস্ত্র — আর শেষ জিনিসটা কয়েকটা Docker কমান্ডের জায়গা নিয়ে নেয়।</p>
<p class="scene-setting en">cat, grep, find, cd — trusted old friends that are not going away. But hours in the terminal make small upgrades compound into a transformed workflow. Ten modern tools — and the last one replaces several Docker commands.</p>
<div class="code-block">১০টা আধুনিক টুল — পুরনো বন্ধুর আধুনিক রূপ:

১. FZF — ফাজি-খোঁজা: ফাইল, ফোল্ডার, git-ব্রাঞ্চ,
   প্রসেস, Docker-কন্টেইনার, এমনকি কমান্ড-হিস্ট্রি।
   Ctrl+R-এ কয়েক অক্ষর লিখলেই সপ্তাহ-আগের
   কমান্ড হাজির — একবার অভ্যস্ত হলে পুরনো
   হিস্ট্রি-সার্চ অসহ্য লাগে।

২. TMUX — কাটা সংযোগে অবিচল: দীর্ঘ-কাজ চলার
   মধ্যে Wi-Fi গেলো? প্রসেস সার্ভারে বেঁচে;
   পরে ফিরে এসে হুবহু আগের জায়গা থেকে চালো।
   বোনাস: একাধিক টার্মিনাল-জানালা ও পেন-বিন্যাস।

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
<div class="code-block">(চলমান) ৭-১০: আরও সার্চ-নেভিগেশন-মনিটরিং
   টুল আর রিমোট-অ্যাক্সেস উন্নতি — শেষ পর্যন্ত
   এমন এক টুল যে কয়েকটা Docker কমান্ডকে
   একটা সহজ ইন্টারফেসে গুছিয়ে দেয়।

শিক্ষকের মূল্যায়ন-নিয়ম:
  ক্লাসিক কমান্ড সর্বত্র পাবে — ভিত্তি ওরাই।
  আধুনিক টুল বাছো কাজের ঘনত্ব দেখে:
  দিনে শতবার যে-কাজ, তার ছোট উন্নতিই
  সবচেয়ে বড় সঞ্চয়।</div>
<div class="callout tip"><span class="co-icon">🏁</span><div><strong>সিরিজ-সংযোগ:</strong> দরজা ১-এ Unix-দর্শন শিখেছিলে — ছোট টুল, ভালো করে, জোড়া দিয়ে; আজকের ১০ টুল সেই একই দর্শনের ২০২৬-সংস্করণ। আর দরজা ৫-এর অভিধান হাতে নিয়ে বলো — fzf কী করে? খোঁজা। bat? পড়ানো। zoxide? চলা। <strong>কাজ-ভিত্তিক চোখটাই আসল অস্ত্র, টুল তার বাহন।</strong></div></div>
<div class="secret-box">🛠️ পুরনো বন্ধু ছাড়বে না, নতুন বন্ধু বাছবে কাজ-ঘনত্ব দেখে — দিনে শতবারের কাজেই ছোট উন্নতি সবচেয়ে বড়।</div>`,
  senior: {
    title: "১০ প্রোডাক্টিভিটি টুল — দ্রুত গাইড",
    body: "<p><strong>জোড়া-ম্যাপ:</strong> fzf (ফাজি-সার্চ: ফাইল/ব্রাঞ্চ/হিস্ট্রি; Ctrl+R-র রূপান্তর), tmux (disconnect-proof সেশন + পেন-ব্যবস্থাপনা), mosh (অস্থির নেটে টিকে থাকা SSH-বিকল্প), zoxide (শেখা-পথের cd), bat (পোশাকি cat), btop (এক্সপ্লেইনার মনিটর) + আরও ৪টা, শেষে Docker-এক-ইন্টারফেস। <strong>নিয়ম:</strong> ক্লাসিক = ভিত্তি (সর্বত্র পাওয়া যায়); আধুনিক = ঘন-কাজের বিনিয়োগ। tmux+mosh মিলে রিমোট-ডেভের সোনার জোড়া।</p>"
  }
});
