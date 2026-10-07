// doors-1-3.js — Cloud X Berry Series Book 9 (Finale): The Silicon Sutra
// Source: CS Fundamentals playlist (6 videos)
const doors = [];

doors.push({
  num: 1,
  icon: "🔢",
  color: "#2dd4bf",
  name: "ষোলোর গোপন ভাষা",
  subtitle: "Hexadecimal: The Secret Language of Programmers",
  tech: "Bits/bytes, encoding vs raw data, base-16 compactness, 0x prefix, hex in debugging/memory/colors",
  spirit: "বাতিন — পর্দার পেছনের ভাষা",
  secret: "বাইনারি যন্ত্রের ভাষা, কিন্তু মানুষের চোখে শূন্য-একের দেয়াল; হেক্সাডেসিমাল (বেস-১৬) সেই একই ডেটার মানব-পাঠযোগ্য সংক্ষেপ — এক হেক্স-অঙ্কে ঠিক চার বিট, এক বাইট মানে দুই হেক্স-অঙ্ক; 0x শুধু প্রথা-চিহ্ন, নতুন মান নয়।",
  recall: {
    q: "প্রোগ্রামাররা সরাসরি বাইনারি না লিখে হেক্স ব্যবহার করে কেন? এক বাইট হেক্সে কতটা জায়া নেয়?",
    qen: "Why hex instead of raw binary? How much hex is one byte?",
    a: "কারণ হেক্স ও বাইনারি একই ডেটার দুই পোশাক, কিন্তু হেক্স অনেক সংক্ষিপ্ত: বেস-১৬-এ ১৬টা প্রতীক (0-9 + A-F); প্রতি হেক্স-অঙ্ক = ঠিক ৪ বিট (16=2^4) — তাই রূপান্তর যন্ত্রের মতো নিখুঁত, মুখে-মুখে করা যায়। এক বাইট = ৮ বিট = ঠিক ২টা হেক্স-অঙ্ক (যেমন 11111111 = FF)। ডিবাগিং/মেমরি-ডাম্প/নেটওয়ার্ক-টুলে হাজারো বিটের প্যাটার্ন হেক্সে চোখে পড়ে; 0x-উপসর্গ শুধু বলে এটা হেক্স-সংখ্যা — মান বদলায় না। আর বিট-বাইট-গুলিয়ে-ফেলার বাস্তব-দাগ: স্টোরেজ/মেমরি মাপে বাইটে, নেটওয়ার্ক-গতি মাপে বিটে।",
    aen: "Hex is the same data as binary but compact: base-16 symbols, each hex digit is exactly 4 bits, so one byte is exactly two hex digits. 0x is only notation. Note: storage in bytes, network speeds in bits."
  },
  story: `<p class="scene-setting">কোড, ডিবাগার, মেমরি-ডাম্প, নেটওয়ার্ক-টুল — সবখানেই চোখে পড়ে 0xFFF-এর মতো রহস্য-সংখ্যা। X কেন? A থেকে F পর্যন্ত অক্ষর কেন, যেখানে কম্পিউটার চলে শূন্য-একে? শিক্ষক শুরু করেন একদম মাটি থেকে — বিট, বাইট, এনকোডিং — তারপর খুলে দেনার গল্প।</p>
<p class="scene-setting en">Those mysterious 0xFFF numbers in debuggers and dumps — why the x, why letters A-F in a world of zeros and ones? The teacher starts from the ground: bits, bytes, encoding — then unwraps hex.</p>
<div class="code-block">ভিত্তি — বিট থেকে বাইট:
  ডিজিটাল-যন্ত্রের তথ্যের ক্ষুদ্রতম একক BIT:
    ০ না ১ — বন্ধ না চালু। ৮ বিট = ১ BYTE।
  ৪-বিটের উদাহরণ: 0101 → ৪-এর ঘর+১-এর ঘর
    = ৫। অর্থাৎ সেই ৪ বিট মানে "পাঁচ"।

বাইট একা কী বোঝায়? — প্রসঙ্গ ছাড়া কিছুই না:
  একই বিট-গুচ্ছ হতে পারে সংখ্যা, অক্ষর,
  ছবির অংশ, ফাইলের টুকরো — বিট হলো কাঁচা
  ডেটা; এনকোডিং (যেমন UTF-8) বলে দেয় কীভাবে
  পড়তে হবে (যেমন এক বাইট = অক্ষর S)।
  নেট থেকে আসা ডেটা, স্টোরেজ, RAM — এমনকি
  CPU-র নির্দেশও শেষমেশ বিটেই।
  বাস্তব-দাগ: মেমরি/স্টোরেজ মাপে BYTE-এ
  (16 GB RAM), নেটওয়ার্ক-গতি মাপে BIT-এ
  (10 Gbps) — এক নয়!

সমস্যা — বাইনারি মানুষের জন্য নরক:
  এক বাইট = ৮টা অঙ্ক; হাজারো বিটের দেয়ালে
  প্যাটার্ন খোঁজা যন্ত্রণাদায়ক।

সমাধান — HEXADECIMAL (বেস-১৬):
  ১৬টা প্রতীক: 0-9, তারপর A=10, B=11,
  C=12, D=13, E=14, F=15
  জাদু-সম্পর্ক: ১৬ = ২^৪ → প্রতি হেক্স-অঙ্ক
    ঠিক ৪ বিট; এক বাইট = ঠিক ২ হেক্স-অঙ্ক
    (11111111₂ = FF₁₆)
  তাই রূপান্তর নিখুঁত-ও-তাৎক্ষণিক —
    একই ডেটা, মানব-চোখে সংক্ষিপ্ত পোশাকে
  0x-উপসর্গ (0xFF) শুধু ঘোষণা: এটা হেক্স —
    মানে নতুন কিছু যোগ করে না

কোথায় দেখবে: মেমরি-ঠিকানা (0x7FFF...),
  রঙের কোড (#FF6600 — লাল-সবুজ-নীল, প্রতিটা
  দুই-হেক্সে), নেটওয়ার্ক-প্যাকেট, ডিবাগ-সেশন</div>
<div class="callout tip"><span class="co-icon">🔢</span><div><strong>সিরিজ-সংযোগ:</strong> Book ৪-এর (Network Fortress) MAC-ঠিকানা মনে আছে — কলোনে-ভাগা হেক্স-জোড়া? এখন জানো কেন: বাইট-সীমানা চোখে ধরা থাকে। <strong>হেক্স মানে নতুন গণিত নয় — পুরনো বিটের নতুন চশমা।</strong></div></div>
<div class="secret-box">🔢 যন্ত্রের ভাষা বাইনারি, প্রোগ্রামারের ভাষা হেক্স — এক অঙ্কে চার বিট, এক বাইটে দুই অঙ্ক; 0x শুধু নাম-ফলক।</div>`,
  senior: {
    title: "Hexadecimal — দ্রুত গাইড",
    body: "<p><strong>ভিত্তি:</strong> bit=০/১; ৮ বিট=১ বাইট; বিট=কাঁচা-ডেটা, এনকোডিং (UTF-8)=ব্যাখ্যা-নিয়ম। <strong>হেক্স:</strong> বেস-১৬ (0-9,A-F); ১ হেক্স-অঙ্ক=৪ বিট → ১ বাইট=২ অঙ্ক (FF=255); রূপান্তর মুখে-সম্ভব; 0x=নোটেশন-মাত্র। <strong>ব্যবহার:</strong> মেমরি-ঠিকানা, রঙ (#RRGGBB), প্যাকেট, ডিবাগ। <strong>সতর্কতা:</strong> স্টোরেজ=বাইট, নেটওয়ার্ক-স্পিড=বিট।</p>"
  }
});

doors.push({
  num: 2,
  icon: "🧮",
  color: "#2dd4bf",
  name: "ছয় প্রসেসরের পরিবার",
  subtitle: "CPU, GPU, TPU, NPU, DPU, QPU — Explained",
  tech: "CPU general-purpose, GPU massive parallel similar ops, TPU ML-specific tensor, NPU on-device AI, DPU data-infrastructure offload, QPU quantum",
  spirit: "তাকসিম — প্রত্যেকের কাজ প্রত্যেকের ঘরে",
  secret: "একদম শক্তিশালী এক প্রসেসর দিয়ে সব কাজ চালানো যায় না — কারণ কাজের ধরন ভিন্ন: CPU বহু-রকম কাজের সর্বজনীন মাস্টার, GPU লাখো-একরকম-হিসাবের সমান্তরাল-সৈনিক, তারপর বিশেষায়িত উত্তরসূরিরা — TPU/NPU (AI), DPU (ডেটা-কেন্দ্রের বোঝা), QPU (কোয়ান্টাম-ভাবনা)।",
  recall: {
    q: "এক অতি-শক্তিশালী প্রসেসর দিয়ে সব কাজ কেন নয়? GPU আর TPU-র পার্থক্য কী?",
    qen: "Why not one super-processor for everything? GPU vs TPU?",
    a: "কারণ দক্ষতা কাজের ধরনে নির্ভর করে: CPU নমনীয় — অ্যাপ, API-রিকোয়েস্ট, DB, বিজনেস-লজিক, সমন্বয়; কিন্তু হাজারো-একই-রকম হিসাবে সে আদর্শ নয়। GPU জন্মেছিল গ্রাফিক্সে — প্রতি ফ্রেমে লাখো পিক্সেলে একই-জাতীয় গণিত; তাই বিশাল সংখ্যক সমান্তরাল-ইউনিট — আর সেই গুণেই সে AI-র নিউরাল-নেটওয়ার্কের লাখো ম্যাট্রিক্স-অপারেশনে রাজা হলো। TPU (Tensor Processing Unit) আরেক ধাপ: মেশিন-লার্নিং-এর টেনসর-কাজের জন্যই বানানো বিশেষায়িত অ্যাক্সেলারেটর — GPU-র সাধারণ-সমান্তরালতা নয়, ML-নির্দিষ্ট গতি। NPU: ফোনের ভেতরের অন-ডিভাইস AI; DPU: ডেটা-সেন্টারের নেটওয়ার্ক/স্টোরেজ/নিরাপত্তার বোঝা CPU থেকে সরিয়ে নেওয়া; QPU: কোয়ান্টাম-বিটের জগৎ (পরের দরজায় পূর্ণ পাঠ)। সূত্র: নমনীয়তা বনাম বিশেষায়ন — এক প্রসেসরে দুটো একসাথে চূড়ায় যায় না।",
    aen: "Efficiency depends on workload shape: CPUs trade peak throughput for flexibility; GPUs win at massive similar parallel math (hence AI); TPUs specialize further into tensor operations; NPUs go on-device; DPUs offload data-center plumbing; QPUs compute with quantum bits. Flexibility and specialization trade off."
  },
  story: `<p class="scene-setting">প্রতিটা অ্যাপ, গেম, AI-মডেল, ক্লাউড-সেবা শেষমেশ নামে এক কথায়: গণনা। কিন্তু এক ধরনের প্রসেসর দিয়ে সব গণনা দক্ষভাবে চলে না — তাই CPU-র পাশে দাঁড়িয়ে গেছে GPU, TPU, NPU, DPU, এমনকি QPU। শিক্ষকের ভিডিও এই পরিবারের এক-একজনের জন্মকাহিনি বলে — প্রত্যেকের জন্ম আগেরজনের সীমা থেকে।</p>
<p class="scene-setting en">Every app and model reduces to computation — but no one processor fits all its shapes. This video tells the family saga: each processor born from the previous one's limit.</p>
<div class="code-block">পরিবার-পরিচয় — জন্মক্রমে:

CPU (CENTRAL) — সর্বজনীন মাস্টার
  নমনীয়তাই পরিচয়: অ্যাপ, API-রিকোয়েস্ট,
  DB-কাজ, বিজনেস-লজিক, পুরো সিস্টেমের
  সমন্বয় — বহু-রকম কাজ, বিস্তৃত নির্দেশ-ভাণ্ডার
  সীমা: হাজারো-একই-রকম হিসাবে সে-ই সেরা নয়

GPU (GRAPHICS) — সমান্তরাল-সৈনিক
  জন্ম: গেমের ফ্রেম — লাখো পিক্সেলে একই-
  জাতীয় গণিত; তাই বিশাল সংখ্যক সমান্তরাল-
  এক্সিকিউশন রিসোর্স
  দ্বিতীয় জন্ম: AI — নিউরাল নেটওয়ার্কের
  সাগর-গাঢ় সংখ্যা-গণিতও একই আকারের;
  তাই ML-বিপ্লবের ইঞ্জিন

TPU (TENSOR) — ML-বিশেষজ্ঞ
  প্রশ্ন: এই ML-কাজ এত প্রচলিত — এর জন্যই
  কি আলাদা হার্ডওয়্যার? TPU = টেনসর-গণনায়
  বিশেষায়িত অ্যাক্সেলারেটর

NPU (NEURAL) — পকেটের AI
  ফোনের-ভেতরের অন-ডিভাইস বুদ্ধি:
  ক্যামেরা, ভয়েস, অনুবাদ — মেঘ ছাড়াই

DPU (DATA) — ডেটা-কেন্দ্রের ম্যানেজার
  নেটওয়ার্ক-স্টোরেজ-নিরাপত্তার নিত্য-বোঝা
  CPU-র কাঁধ থেকে সরিয়ে নিজের ঘরে

QPU (QUANTUM) — অন্য জগতের অতিথি
  বিট নয়, কিউবিট — পরের দরজার পূর্ণ গল্প!

মূল-সূত্র: নমনীয়তা × বিশেষায়ন — ট্রেড-অফ;
  তাই ভবিষ্যৎ এক-প্রসেসরের নয়, কাজ-মাফিক
  প্রসেসর-পরিবারের।</div>
<div class="callout tip"><span class="co-icon">🧮</span><div><strong>সিরিস-সংযোগ:</strong> AI Agents Atlas-এ (Book ২) PyTorch-দরজায় GPU-র নাম এসেছিল, আজ তার পূর্ণ পরিচয়; আর প্রতিটা বইয়ের "স্কেল" কথার পেছনেও এই পরিবার — <strong>সফটওয়্যারের প্রতিটা যুগ, হার্ডওয়্যারের কোনো না কোনো ঘরে জন্ম নেয়।</strong></div></div>
<div class="secret-box">🧮 এক রাজা নয় — কাজের ধরনই প্রসেসর বাছে: নমনীয় CPU, সমান্তরাল GPU, বিশেষজ্ঞ TPU/NPU/DPU, অন্য-জগতের QPU।</div>`,
  senior: {
    title: "প্রসেসর-পরিবার — দ্রুত গাইড",
    body: "<p><strong>CPU:</strong> সর্বজনীন-নমনীয় (অ্যাপ/API/DB/সমন্বয়)। <strong>GPU:</strong> লাখো-একই-অপারেশনে সমান্তরাল-সৈন্য (গ্রাফিক্স→AI-ইঞ্জিন)। <strong>TPU:</strong> টেনসর-ML-বিশেষায়িত। <strong>NPU:</strong> অন-ডিভাইস-AI। <strong>DPU:</strong> ডেটা-কেন্দ্রের নেটওয়ার্ক/স্টোরেজ/সিকিউরিটি-অফলোড। <strong>QPU:</strong> কিউবিট-গণনা। <strong>সূত্র:</strong> নমনীয়তা-বনাম-বিশেষায়ন ট্রেড-অফ → কাজ-মাফিক প্রসেসর।</p>"
  }
});

doors.push({
  num: 3,
  icon: "📚",
  color: "#2dd4bf",
  name: "ডেটার সাজানো ঘর",
  subtitle: "Databases Explained Like I Wish Someone Had",
  tech: "Data vs information, tables/rows/columns, primary key, foreign key, relationships, why not spreadsheets, SQL as the language",
  spirit: "নিযাম — শৃঙ্খলাই অর্থের জন্ম দেয়",
  secret: "একা ডেটা অর্থহীন — 24.99 কিছু বলে না, কিন্তু 'বেস্টসেলার উপন্যাসের দাম 24.99' তথ্য; ডেটাবেস মানে সেই প্রসঙ্গ-সংযোগের সাজানো ঘর — টেবিলে সারি-কলাম, প্রাইমারি-কি পরিচয়, ফরেন-কি সম্পর্ক; স্প্রেডশিট বড় হলে ভাঙে, ডেটাবেস লাখো রেকর্ডে নিয়ম ধরে রাখে।",
  recall: {
    q: "Data আর information-এর পার্থক্য কী? Primary key আর foreign key কী কাজে?",
    qen: "Data vs information? What do primary and foreign keys do?",
    a: "Data = কাঁচা সত্য (সংখ্যা, নাম, তারিখ) — একা অর্থহীন; প্রসঙ্গ-সংযোগে তথ্য হয় (24.99 → বইয়ের দাম)। ডেটাবেস = ডিজিটাল ফাইলিং-ক্যাবিনেট — লাখো রেকর্ড, মুহূর্তে খোঁজা, আপডেট, নিয়ম। টেবিল = সারি-কলাম (Book ৬-এর MongoDB-পাঠের SQL-পাশ এখানে আদি-আকারে)। Primary key = টেবিলের প্রতিটা সারির অনন্য পরিচয় (ডুপ্লিকেট-অসম্ভব) — ঠিক এই সারিটা, বিভ্রান্তি নেই। Foreign key = এক টেবিলের কলাম যে অন্য টেবিলের primary key-কে নির্দেশ করে — সম্পর্কের সেতু (Order-এর customer_id → Customer-এর id); এভাবেই বিক্ষিপ্ত টেবিল জুড়ে এক সংযুক্ত-জগৎ। স্প্রেডশিট ভাঙে: বিশাল-রেকর্ড, একসাথে-বহু-ব্যবহারকারী, কঠোর-শুদ্ধতা-নিয়ম — সেখানেই ডেটাবেস।",
    aen: "Data is raw facts; context turns it into information. A database is the organized cabinet: tables of rows and columns, a primary key uniquely identifying each row, foreign keys pointing across tables to build relationships. Spreadsheets break at scale, concurrency, and strict rules."
  },
  story: `<p class="scene-setting">টেবিল, প্রাইমারি কি, ফরেন কি, নরমালাইজেশন — শব্দগুলো শুনেছো, কিন্তু কেউ থামিয়ে বুঝিয়ে দেয়নি। শিক্ষকের পদ্ধতি ভিন্ন: শূন্য থেকে, একটাই উদাহরণ সবশেষ পর্যন্ত — পাড়ার ছোট্ট একটা বইয়ের দোকানের ডেটাবেস; সবকিছু এক সুতোয় গাঁথা।</p>
<p class="scene-setting en">Tables, keys, normalization — heard but never unpacked. The teacher's way: from zero, one example throughout — a small neighborhood bookstore's database, everything on one thread.</p>
<div class="code-block">শুরু — ডেটা কী?
  DATA = কাঁচা সত্য: সংখ্যা, নাম, তারিখ, বর্ণনা
  "24.99" — একা এটা কিছুই বলে না
  "24.99 হলো বেস্টসেলার উপন্যাসের দাম" — INFORMATION!
  অর্থাৎ: প্রসঙ্গ-সংযোগে কাঁচা-সত্য → তথ্য

ডেটাবেস = ডিজিটাল ফাইলিং-ক্যাবিনেট
  সাজানো ফোল্ডারে লাখো রেকর্ড — যেকোনোটা
  মুহূর্তের ভগ্নাংশে খোঁজা, আপডেট, ব্যবহার

স্প্রেডশিট কেন নয়?
  ছোট-এক-মানুষের-ডেটায় ভালোই; কিন্তু —
  লাখো রেকর্ড? একসাথে বহু ব্যবহারকারী?
  কঠোর নিয়ম কী-যাবে-কোথায়? → ভেঙে পড়ে
  (১০-শাখার দোকান, ৫০,০০০ শিরোনাম, হাজারো
   দৈনিক-ক্রেতা — স্কেলের জন্ম ডেটাবেসের)

ভেতরের স্থাপত্য:
  TABLE = সারি × কলাম (Books, Customers, Sales)
  ROW = একটা রেকর্ড (একটা বই, একজন ক্রেতা)
  PRIMARY KEY = প্রতি-সারির অনন্য পরিচয় —
    ডুপ্লিকেট অসম্ভব; দোকানে প্রতি বইয়ের
    আলাদা বারকোডের মতো
  FOREIGN KEY = সম্পর্কের সেতু — এক টেবিলের
    কলাম → অন্য টেবিলের primary key
    (Sales-এ customer_id → Customers-এ id)
  এভাবে আলাদা টেবিলে থেকেও সব জুড়ে থাকে —
    কে কী কিনলো, কোন বই কতবার বিক্রি হলো

আর ভাষার নাম SQL — এই সাজানো ঘরে
  প্রশ্ন করার মানালি রূপ (Book ৬-এর শেষ দরজার
  অস্ত্রগুলো এই ঘরেই খাটে)</div>
<div class="callout tip"><span class="co-icon">📚</span><div><strong>সিরিস-বৃত্ত:</strong> Book ৬ (The Data Vault) শেখিয়েছিল কোন ডেটাবেস-ইঞ্জিন কখন; এই দরজা নেমেছে এক ধাপ গভীরে — টেবিল-কি-সম্পর্কের আদি-স্থাপত্যে। <strong>উপরের তলা বুঝতে হলে নিচের তলা চেনা লাগে — সিরিজের শেষ বই ঠিক সেই নিচের তলাই।</strong></div></div>
<div class="secret-box">📚 কাঁচা সত্যে প্রসঙ্গ জুড়লেই তথ্য; টেবিলে পরিচয় (primary key), সেতুতে সম্পর্ক (foreign key) — শৃঙ্খলাই ডেটাকে ডেটাবেস করে।</div>`,
  senior: {
    title: "ডেটাবেস-মৌলিক — দ্রুত গাইড",
    body: "<p><strong>ডেটা→তথ্য:</strong> প্রসঙ্গ-সংযোগে (24.99→বইয়ের-দাম)। <strong>স্থাপত্য:</strong> টেবিল (সারি×কলাম) → প্রতি-সারি-রেকর্ড; PK=অনন্য-পরিচয়; FK=অন্য-টেবিলের-PK-নির্দেশ (সম্পর্ক-সেতু)। <strong>স্প্রেডশিট-ভাঙন:</strong> স্কেল+একসাথে-বহু-ব্যবহারকারী+কঠোর-নিয়ম। <strong>ভাষা:</strong> SQL — সাজানো ঘরের প্রশ্ন-মানালি। <strong>Book-৬-সংযোগ:</strong> ইঞ্জিন-বাছাই আগে, স্থাপত্য-পাঠ এখানে।</p>"
  }
});
