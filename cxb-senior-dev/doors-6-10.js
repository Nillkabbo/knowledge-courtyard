// doors-6-10.js — Cloud X Berry Series Book 1: The Senior Developer's Code
// Doors 6-10 (continued from doors-1-5.js — no const redeclaration)

doors.push({
  num: 6,
  icon: "⏳",
  color: "#f97316",
  name: "এগারো বছরের পাঠ",
  subtitle: "10+ Years of Software Engineering Experience in 6 Minutes",
  tech: "Direction+feedback+reflection > effort; learning from others; communication; sustainability; anti-noise focus",
  spirit: "সবর — দীর্ঘ পথে ধৈর্যের শক্তি",
  secret: "ব্যস্ত থাকা আর এগিয়ে যাওয়া এক নয় — পরিশ্রমের সাথে দিক, প্রতিক্রিয়া আর প্রতিফলন লাগে; আর ক্যারিয়ার শুধু কোড নয়, মানুষ।",
  recall: {
    q: "প্রতিদিন ঘণ্টার কোডিং করেও কেউ এগোয় না কেন?",
    qen: "Why can someone code for hours daily and still not grow?",
    a: "শুধু effort যথেষ্ট নয় — বেড়ে উঠতে লাগে direction (দিকনির্দেশ), feedback (প্রতিক্রিয়া), আর reflection (প্রতিফলন)।",
    aen: "Effort alone is not enough — growth needs direction, feedback, and reflection."
  },
  story: `<p class="scene-setting">পাঁচ দরজা পেরোনোর পথে তুমি এখন কোম্পানির বিশ্বস্ত নাম — কিন্তু আজকের রাতে নিজের সামনেই স্বীকার করছ: দুই বছর ধরে প্রতিদিন ঘণ্টার কোডিং, তবু কোথায় যেন আটকে আছো। প্রমোশন আসছে না, নতুন শেখায় আগ্রহ কমছে, বিছানায় শুয়ে ফোন ঘুরছে — কাল আবার সেই একই টিকিট। এই অচল রাতে ছাদে উঠলে — আর সেখানে জানালার কাছে ধূপ না, এক টুকরো আলোর নিচে চায়ে ভেজা চোখে বসা মানুষটা তোমাকে চিনলেন।</p>
<p class="scene-setting en">Five doors deep, you are the company's trusted name — yet tonight you admit it to yourself: two years of daily coding hours and something has stalled. No promotion coming, curiosity thinning, the phone scrolling in bed — tomorrow the same tickets. On this stalled night you climb to the rooftop — where a man sits wet-eyed over tea in a sliver of light, and recognizes you.</p>
<p class="scene-setting"><strong>দার্শনিক তানজিল</strong> — কোম্পানির সবচেয়ে পুরনো ইঞ্জিনিয়ার, এগারো বছরের বিস্তার; চুলের দুই পাশে পাকা দাগ, আঙুলে কফির স্থায়ী হলুদে দাগ, ডেস্কে সবসময় একটা আধ-পড়া বই উল্টো করে রাখা। লোকে বলে তানজিল ভাই কোড কম লেখেন, কিন্তু উনি যে মিটিংয়ে ঢোকেন, সেই মিটিং ঘণ্টার কাজ দশ মিনিটে শেষ হয়। তোমার অচল-অবস্থার কথা শুনে উনি চায়ের কাপে চুমুক দিয়ে বললেন: <em>তুমি ব্যস্ত, কিন্তু ব্যস্ততা আর গতি এক নয়। বলো তো — কাল কী শিখলে? না, আজকের কাজ না — কাল শিখলে কী?</em></p>
<p class="scene-setting en">Tanjil the philosopher — the company's oldest engineer, eleven years in; grey streaks on both sides, coffee's permanent yellow on his fingers, a half-read book always face-down on his desk. People say Tanjil writes less code — but meetings he enters end in ten minutes what took an hour. Hearing your stall, he sips and asks: you are busy — but busy and moving are not the same. Tell me: what did you LEARN yesterday? Not the work — the learning.</p>
<div class="dialogue">তানজিল ভাই: তুমি যা বললে — ঘণ্টার কোডিং করেও না-এগোনো — এর নাম আমি দিই "প্যাডেল-মারা নৌকা": প্যাডেল ঘুরছে, ফেনা উঠছে, নৌকা এক জায়ায়। কারণ তিনটা জিনিসের একটাও নেই: দিক, প্রতিক্রিয়া, প্রতিফলন। শুধু পরিশ্রম — যতটা ইচ্ছে ঘোরাও প্যাডেল।</div>
<div class="dialogue en">What you describe — hours of coding, no movement — I call the pedal-boat: pedals spinning, foam rising, boat parked. Because one of three things is missing: direction, feedback, reflection. Effort alone — spin the pedal as long as you like.</div>
<div class="code-block">পাঠ ১ — অচল অবস্থায়ও ডেলিভার করা
অনির্দিষ্ট চাহিদা, টাইট ডেডলাইন — অভিজ্ঞরা তবু পথ বানায়।

পাঠ ২ — ব্যস্ত ≠ উন্নতি
প্রতিদিন ঘণ্টার কোডিং, তবু আটকে থাকা সম্ভব।
effort + direction + feedback + reflection = আসল বৃদ্ধি।

পাঠ ৩ — একা শেখা ধীর
তোমার চেয়ে ভালো মানুষের কাছে থাকলে নিজের
অজানা ফাঁকগুলোও দেখা যায় — এই exposure বছর বাঁচায়।

পাঠ ৪ — ক্যারিয়ার মানে শুধু কোড নয়
সময়ের সাথে মানুষের সাথে কথা বলা > কোড লেখা।
সিদ্ধান্ত ব্যাখ্যা, feedback সামলানো, টিম-অ্যালাইনমেন্ট —
communication টেকনিক্যাল স্কিলের সমান গুরুত্বপূর্ণ।

পাঠ ৫ — কোড চিরস্থায়ী নয়, সম্পর্ক চিরস্থায়ী
আজকের বিল্ড একদিন রিপ্লেস/রিরাইট হবে।
সম্পর্ক, কাজের ধরন, খ্যাতি — সারা ক্যারিয়ার সঙ্গী।

পাঠ ৬ — burnout বাস্তব
সবসময় নতুন কিছু, সবসময় পিছিয়ে থাকার চাপ।
বিশ্রাম ছাড়া ঠেললে ভেঙে পড়বে — দুর্বলতার জন্য নয়,
অতিরিক্ত চাপের জন্য। টেকসই গতি বেছে নাও।

পাঠ ৭ — সব noise তাড়া কোরো না
নতুন টুল-ফ্রেমওয়ার্ক-ট্রেন্ডের শেষ নেই।
কয়েকটা জিনিস বেছে সেগুলোতে গভীর হওয়াই যথেষ্ট।

পাঠ ৮ — স্বাস্থ্য ঐচ্ছিক নয়
ঘণ্টার বসা, খারাপ ভঙ্গি, নড়াচড়ার অভাব — ধীরে ধীরে
ফোকাস-শক্তি-পারফরম্যান্স নামায়।

পাঠ ৯ — সব ন্যায্য হবে না
অন্যে স্বীকৃতি পাবে, তুমি ভালো করেও প্রত্যাখ্যাত হবে।
যা নিয়ন্ত্রণে নেই তাতে আটকে থাকবে না।</div>
<div class="callout tip"><span class="co-icon">🎓</span><div><strong>তানজিল ভাইয়ের উপসংহার:</strong> ডেভেলপার হওয়া মানে সব জানা নয়, নিখুঁত কোড নয়, প্রতিটা ট্রেন্ড তাড়া করা নয় — <strong>কোনটা গুরুত্বপূর্ণ তা বোঝা, প্রস্তুত মনে হওয়ার আগেই শুরু করা, ধারাবাহিক বিল্ড করা, আসল সমস্যা সমাধান করা।</strong> বেশিরভাগ মানুষ ব্যর্থ হয় বুদ্ধি কম থাকায় নয় — overthink, দেরি, বা খুব আগে হাল ছাড়ায়।</div></div>
<div class="verse">তানজিল ভাই রাত শেষে বললেন: <em>এগারো বছরে আমি যা পেয়েছি তার সবচেয়ে বড়টা সবর — গাছ রোজ এক হাত বাড়ে, কেউ দেখে না; কুয়াশার পর ফল দেখে সবাই।</em> আর কুরআনে জোর দিয়ে বলা হয়েছে: <em>ধৈর্যশীলদের সাথে আল্লাহ আছেন</em> (বাকারা ২:১৫৩) — সবর অপেক্ষা নয়, অপেক্ষার মধ্যে কাজ: ফ্রেমে ফ্রেমে হাঁটা, প্রতিদিন সামান্য গতিতে দিক-ঠিক রেখে। ক্যারিয়ার সেই দীর্ঘ সফর — তার ব্যবস্থাপনাই এগারো বছরের পাঠ।</div>
<div class="secret-box">⏳ ব্যস্ততা নয়, দিক+প্রতিক্রিয়া+প্রতিফলন — এই তিন সঙ্গীতে পরিশ্রম সার্থক।</div>`,
  senior: {
    title: "১০+ বছরের সংক্ষিপ্ত পাঠ — দ্রুত গাইড",
    body: "<p>ডেলিভার করো অচল অবস্থাতেও; ব্যস্ততা ≠ বৃদ্ধি (direction+feedback+reflection); ভালো মানুষের সান্নিধ্য বছর বাঁচায়; communication = টেকনিক্যাল; কোড যাবে, সম্পর্ক থাকবে; burnout এড়াও; কয়েকটায় গভীর হও; স্বাস্থ্য দেখো; অন্যায্যে আটকে থাকবে না।</p>"
  }
});

doors.push({
  num: 7,
  icon: "🐍",
  color: "#f97316",
  name: "পাইথনের সাত বিধি",
  subtitle: "7 Coding Laws of Senior Python Developers",
  tech: "Specific exceptions, built-in patterns, intent-revealing names, single responsibility, clean imports, why-comments",
  spirit: "ইখলাস — উদ্দেশ্য স্পষ্ট রাখা",
  secret: "Python ভালো জানা আর ভালো Python লেখা এক নয় — PEP 8 মুখস্থ নয়, নিয়মের পেছনের কারণ বুঝলে কোড নিজেই বলে দেয় কেন।",
  recall: {
    q: "bare except কেন বিপজ্জনক এবং পরিবর্তে কী করা উচিত?",
    qen: "Why is bare except dangerous and what to do instead?",
    a: "bare except সবকিছু ধরে — KeyboardInterrupt, SystemExit-ও চাপা পড়ে, production-এ bug লুকায়। পরিবর্তে যে exception আশা করো ঠিক সেটাই ধরো (যেমন KeyError) এবং try block যত ছোট সম্ভব রাখো।",
    aen: "Bare except catches everything — even KeyboardInterrupt/SystemExit — hiding bugs in production. Catch the specific exception you expect (e.g. KeyError) and keep the try block small."
  },
  story: `<p class="scene-setting">তানজিল ভাইয়ের ছাদ-রাতের কয়েক মাস পর। তুমি তখন ইন্টারভিউ-মর্মার মধ্যে — সব রাউন্ড পেরিয়ে শেষ পর্যন্ত ক্যাম্পাসের সামনের চায়ের দোকানে বসে ফিডব্যাক-ইমেইলের অপেক্ষায়: আর সেখানেই পাশের টেবিলে খাতায় সাবধানে নোট নেওয়া এক মহিলা। তুমি কাঁপা গলায় প্রশ্ন করলে — আপা, আপনি কি ইন্টারভিউ নেন? উনি হেসে মাথা নাড়লেন। <strong>ফারহানা ম্যাডাম</strong> — দশ বছরের ইন্টারভিউয়ার; ডান হাতের কবজিতে কলমের কালির স্থায়ী দাগ, খাতার কোণা সবসময় ভাঁজ করা, চোখে সরু ফ্রেমের চশমা। শত শত জুনিয়রের ভুল দেখেছেন — কারণ নিজেও প্রতিটা ভুল নিজে করেছিলেন।</p>
<p class="scene-setting en">Months after Tanjil's rooftop night, mid-interview-storm — all rounds passed, waiting on the feedback email at the tea shop in front of campus. At the next table a woman takes careful notes on paper. You ask: do you take interviews? She smiles and nods. Farhana — ten years an interviewer; permanent ink marks on her right wrist, always folded page-corners, narrow glasses. She has watched hundreds of juniors' mistakes — because she made each one herself.</p>
<p class="scene-setting">তোমার ইনবক্সের গল্প শুনে উনি খাতা বন্ধ করে বললেন: <em>তুমি অস্বীকারপত্র গুনছ, আমি প্যাটার্ন গুনছি। দেখি তোমার তিনটা রিজেকশনে এক প্যাটার্ন আছে কিনা।</em> তুমি তিনটা টেক-অ্যাসাইনমেন্টের কোড দেখালে — টেস্ট পাস, আউটপুট ঠিক। উনি মিনিট দুয়েক পড়ে চোখ তুললেন: <em>প্যাটার্ন পেয়েছি। তোমার কোড চলে — কিন্তু পড়া যায় না।</em></p>
<div class="dialogue">ফারহানা ম্যাডাম: আমি দশ বছরে শত শত অ্যাসাইনমেন্ট পড়েছি — বাদ পড়ে যারা, তাদের বেশিরভাগের কোড চলতো, ভুল উত্তর দিতো না। ফেলে দেওয়া হয় অন্য কারণে: পরের ডেভেলপারের জন্য বোঝা কঠিন, বদলানো কঠিন। ভালো Python ডেভেলপার হওয়া আরও syntax জানা নয় — এমন কোড লেখা যা পড়তে সহজ, ডিবাগ করতে সহজ, রক্ষণাবেক্ষণ করতে সহজ। সিনিয়রদের সাত আইন আছে — খাতা খোলো।</div>
<div class="dialogue en">Ten years, hundreds of assignments — most who failed had working code, correct outputs. They failed for another reason: hard for the next developer to read, hard to change. Better Python is not more syntax — it is code easy to read, debug, maintain. Seven laws; open the notebook.</div>
<div class="code-block">আইন ১ — যে এরর বোঝো না, ধরো না
❌ bare except — সবকিছু চাপা দেয়, bug production-এ লুকায়
✅ try:
       customer = db[id]
   except KeyError:      ← যেটা আশা করছিলে, ঠিক সেটা
       ...
   + try block যত ছোট সম্ভব

আইন ২ — Python-এর বিল্ট-ইন প্যাটার্ন ব্যবহার করো
s.startswith("py")  — ম্যানুয়াল slicing নয়
enumerate(items)    — index নিজে ম্যানেজ নয়
any(...)            — শুধু মিল আছে কিনা জানতে
dict.get(key, default) — নিরাপদ lookup
উদ্দেশ্য: ছোট কোড নয় — intent স্পষ্ট কোড।

আইন ৩ — নামে অর্থ ঢালো (PEP 8)
calc_t() নয় → calculate_order_total()
lowercase + underscore; দীর্ঘ নাম লাগে না,
অর্থ বহন করলেই হলো।

আইন ৪ — দায়িত্ব পরিষ্কার রাখো
create_order() সব একা করছে? ভাঙো:
validate → build → save → confirm → update_inventory
উঁচু ফাংশন গল্প বলে, নিচু ফাংশন কাজ করে।
প্রতিটা অংশের নিজস্ব দায়িত্ব থাকুক।
(resources ছাড়ার কাজে with ব্যবহার করো।)

আইন ৫ — import পরিষ্কার রাখো
from module import * — কোথা থেকে এলো বোঝা যায় না।
dependency স্পষ্ট করো; standard / third-party / local —
আলাদা গ্রুপে সাজাও (PEP 8)।

আইন ৬ — মন্তব্যে 'কেন' বলো, 'কী' নয়
"increment count" মন্তব্য কোডের পুনরাবৃত্তি মাত্র।
অস্বাভাবিক business rule বা সিদ্ধান্তের কারণ ব্যাখ্যা করো।
বাসি মন্তব্য (কোড বদলায়, মন্তব্য বদলায় না)
কোডকে আরও কঠিন করে ফেলে।</div>
<div class="callout tip"><span class="co-icon">🔑</span><div><strong>সাত আইনের এক সূত্র:</strong> যা এরর বোঝো তাই ধরো · বিল্ট-ইন প্যাটার্ন নাও · intent স্পষ্ট করো · নামে অর্থ থাকুক · প্রতিটার স্পষ্ট দায়িত্ব · dependency দৃশ্যমান · মন্তব্যে 'কেন'। <strong>PEP 8 মুখস্থ করায় নয় — নিয়মের কারণ বুঝলে</strong> ভালো Python ডেভেলপার হওয়া যায়।</div></div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফারহানা ম্যাডামের পরীক্ষা:</strong> ৬ মাস পরে যখন পরের ডেভেলপার তোমার কোড খোলে — তোমাকে পাশে বসিয়ে ব্যাখ্যা করাতে হয় না। ক্লিন কোড সুন্দর দেখানো নয় — <strong>বোঝার জন্য দরকারি চিন্তার পরিমাণ কমানো।</strong></div></div>
<div class="verse">ফারহানা ম্যাডাম খাতার ভাঁজ-করা কোণাটা সোজা করে বললেন: <em>তোমার তিন রিজেকশনে যে-প্যাটার্ন — কোড চলে, পড়া যায় না — এর ওষুধ একটাই: কোড লেখার আগে পাঠককে ভাবো, লেখার পরে নিজে অন্যের হয়ে পড়ো।</em> আর এ তো সেই সুন্নাহর নীতি — তার জন্যই বলা হয়েছে, যে বিশ্বাস করে আর সৎকাজ করে... প্রত্যেকে নিজের প্রতিফলন দেখবে। কোডও ইবাদতের মতো: নিজের চোখে নয়, পরের পাঠকের চোখে যাকে বিচার করতে হয়।</div>
<div class="secret-box">🐍 ভালো Python মানে PEP 8 মুখস্ত নয় — ৬ মাস পরের পাঠককে ভাবতে না দেওয়া।</div>`,
  senior: {
    title: "৭ Python আইন — দ্রুত গাইড",
    body: "<p>১. Specific exception, ছোট try block। ২. Built-in patterns (startswith, enumerate, any, dict.get)। ৩. অর্থবহ নাম (calculate_order_total)। ৪. এক ফাংশন = এক দায়িত্ব; উঁচুটা গল্প বলে, নিচুরা কাজ করে। ৫. স্পষ্ট import, grouping (stdlib/3rd-party/local)। ৬. মন্তব্যে WHY, WHAT নয়; stale মন্তব্য মুছে ফেলো। <strong>মূলকথা:</strong> চিন্তা-হ্রাসই ক্লিন কোডের মাপ।</p>"
  }
});

doors.push({
  num: 8,
  icon: "⚙️",
  color: "#f97316",
  name: "C# আর .NET-এর মানচিত্র",
  subtitle: "Senior Engineer Explains C# and .NET For Beginners",
  tech: "Language vs platform; compile time vs runtime; CLR/JIT; managed code; NuGet; .NET version history; app models",
  spirit: "বাহন ও রাস্তা — ভাষা গাড়ি, প্ল্যাটফর্ম রাস্তা",
  secret: "C# ভাষা, .NET প্ল্যাটফর্ম — এক লাইন কোডের নিচে গোটা এক প্ল্যাটফর্ম: compiler → IL → CLR → JIT → মেশিন।",
  recall: {
    q: "compile time আর run time-এর পার্থক্য সহজ ভাষায়?",
    qen: "Compile time vs runtime in simple terms?",
    a: "Compile time = চালানোর আগে কম্পাইলার কোড পরীক্ষা করে ভুল ধরে (বন্ধু, তাড়াতাড়ি ধরে)। Run time = প্রোগ্রাম প্রকৃত চলার সময় — এখনকার ভুলগুলো জিনিস ভেঙে ফেলতে পারে।",
    aen: "Compile time = compiler checks code before running (your friend, catches mistakes early). Runtime = the program actually running — errors here can break real things."
  },
  story: `<p class="scene-setting">ফারহানা ম্যাডামের সাত আইন হাতে নিয়ে তুমি নতুন চাকরিতে ঢুকলে — প্রথম সপ্তাহেই মেইল: টিমের পুরনো প্রজেক্ট C#/.NET-এ লেখা, আগামী সপ্তাহে তোমার ওপর দুইটা মডিউল। তুমি এক রাতে ওপেন করে দেখলে — C# আর .NET শব্দদুটো পাশাপাশি ঘুরছে, কোনটা কী? কে কাকে চালায়? ক্লোন করে রাত দুপুরে বসে আছো। পরদিন সকালে অফিসের পেছনের গ্যারেজ-ল্যাবে — মোবাইল-ফোন খোলা এক মানুষ, হাতে রোগানো ইলেকট্রিক-পাম্প, কানে সবসময় একটা ছোট টর্চলাইট ঝুলছে।</p>
<p class="scene-setting en">With Farhana's seven laws you join the new job — week one, an email: the legacy project is C#/.NET, two modules land on you next week. You open it at midnight — C# and .NET orbiting each other: which is what? Who drives whom? Next morning at the garage-lab behind the office — a man with an open mobile phone, a soldering pump in hand, a small torchlight always hanging from his ear.</p>
<p class="scene-setting"><strong>মেকানিক সজীব</strong> — অফিস-বিল্ডিংয়ের পেছনের ছোট্ট গ্যারেজের মালিক; দিনে গাড়ি সারান, সন্ধ্যায় বসে বসে অ্যান্ড্রয়েড ফোন খোলেন; আঙুলের ডগায় স্থায়ী গ্রিসের কালো দাগ, কানে ঝোলানো টর্চলাইট। তোমার প্রশ্ন শুনে হাসলেন: <em>বাবা, এই প্রশ্নটা আমি রোজ শুনি — স্কুটার আর রাস্তা কি এক?</em></p>
<p class="scene-setting en">Sajib the mechanic — owner of the little garage behind the office; cars by day, Android phones by evening; permanent black grease on his fingertips, a torchlight hanging from his ear. Your question makes him laugh: I hear this one every day — are the scooter and the road one thing?</p>
<div class="dialogue">সজীব ভাই: ভাষা হলো বাহন — C# তোমার স্কুটার। প্ল্যাটফর্ম হলো রাস্তা — .NET। স্কুটার ছাড়া রাস্তা চলে না, রাস্তা ছাড়া স্কুটার। তুমি ফোনে একটা অ্যাপ খোলো — এই একটা কাজের নিচে গোটা এক শহর কাজ করছে: তুমি স্ক্রিন নিজে হাতে ওয়্যার করো নাই, OS-কে সরাসরি বলো নাই — রাস্তাটা সব সামলেছে।</div>
<div class="dialogue en">The language is the vehicle — C#, your scooter. The platform is the road — .NET. I hear it daily: are scooter and road one? You open an app — under that one tap an entire city works: you did not wire the screen or talk to the OS — the road handled it all.</div>
<div class="diagram">
<div class="diag-title">তোমার কোড থেকে মেশিন পর্যন্ত — সজীব ভাইয়ের ওয়ার্কশপ</div>
<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowFire" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L0,10 L10,5 z" fill="#f97316"/></marker>
  </defs>
  <rect class="cell" x="12" y="60" width="98" height="60" rx="10"/>
  <text class="lbl" x="61" y="86" text-anchor="middle">C# কোড</text>
  <text class="lbl-sm" x="61" y="104" text-anchor="middle">তুমি লেখো</text>
  <line class="edge" x1="112" y1="90" x2="150" y2="90" marker-end="url(#arrowFire)"/>
  <rect class="cell-hot" x="152" y="60" width="98" height="60" rx="10"/>
  <text class="lbl-hot" x="201" y="86" text-anchor="middle">Compiler</text>
  <text class="lbl-sm" x="201" y="104" text-anchor="middle">→ IL (মাঝারি কোড)</text>
  <line class="edge" x1="252" y1="90" x2="290" y2="90" marker-end="url(#arrowFire)"/>
  <rect class="cell-cyan" x="292" y="60" width="98" height="60" rx="10"/>
  <text class="lbl-cyan" x="341" y="86" text-anchor="middle">CLR + JIT</text>
  <text class="lbl-sm" x="341" y="104" text-anchor="middle">চালানোর সময়</text>
  <line class="edge" x1="392" y1="90" x2="430" y2="90" marker-end="url(#arrowFire)"/>
  <rect class="cell-leaf" x="432" y="60" width="116" height="60" rx="10"/>
  <text class="lbl-leaf" x="490" y="86" text-anchor="middle">মেশিন কোড</text>
  <text class="lbl-sm" x="490" y="104" text-anchor="middle">হার্ডওয়্যার চালায়</text>
  <text class="lbl-sm" x="280" y="152" text-anchor="middle">.NET = runtime + tools + libraries + compiler — পুরো ব্যবস্থা</text>
</svg>
<div class="diag-cap">একবার এই ছবিটা ক্লিক করলে এরর মেসেজ আর বিভ্রান্তিকর লাগে না।</div>
</div>
<div class="code-block">মূল জোড়া — compile time বনাম run time:
COMPILE TIME: build চাপলেই কম্পাইলার সব পরীক্ষা করে —
ভুল বানান, ভুল টাইপ, গোলমাল — সেখানেই ধরে দেয়।
সহজ ফিক্স, কোনো ক্ষতি নেই। কম্পাইলার = বন্ধু।

RUN TIME: প্রোগ্রাম প্রকৃত চলছে। সব চেক পাস —
এখনকার ভুল আসল ব্যবহারকারীর সামনে, আসল ডেটার সাথে।

MANAGED CODE:
সাধারণ C# = managed — CLR মেমরি দেখে,
দরকার নেই এমন অবজেক্ট garbage collection সরায়।
(C/C++-এর মতো হাতে allocate/free নয়।)
UNMANAGED = সেই জালের বাইরে — বেশি নিয়ন্ত্রণ,
বেশি দায়িত্ব, crash/leak/সিকিউরিটি ঝুঁকির পথ।

NuGet = .NET-এর প্যাকেজ ম্যানেজার
(JavaScript-এ npm, Python-এ pip, Java-তে Maven/Gradle)।

ভার্সনের গোলমাল পরিষ্কার:
.NET Framework (শুধু Windows, পুরনো)
→ .NET Core (Windows+Linux+Mac, দ্রুত, হালকা)
→ নাম সরল করে শুধু .NET (ভার্সন ৫ থেকে)
আজ: .NET 10 = LTS, C# 14 ডিফল্ট ভাষা-ভার্সন।
নতুন শুরু? .NET 10-ই নাও — পুরনো টিউটোরিয়ালের
"install .NET 6" মেনে নয়।
(C# 14-এ file-based app — একটা .cs ফাইলই চলে!)</div>
<div class="callout tip"><span class="co-icon">🚀</span><div><strong>কী কী বানানো যায়:</strong> ASP.NET Core (ব্যাকএন্ড API — অসংখ্য production সিস্টেমের পেছনে), Blazor (JavaScript ছাড়াই ইন্টার‌্যাক্টিভ ওয়েব UI, C# কম্পোনেন্টে), .NET MAUI (এক কোডবেসে Android+iOS+macOS+Windows), Unity (গেম — C#-ই স্ক্রিপ্টিং ভাষা), WPF/WinForms (এন্টারপ্রাইজ, পুরনো কিন্তু চলমান), .NET Aspire (ক্লাউড/ডিস্ট্রিবিউটেড)। <strong>C# এক ধরনের অ্যাপে আটকে নেই।</strong></div></div>
<div class="secret-box">⚙️ ভাষা গাড়ি, প্ল্যাটফর্ম রাস্তা — গাড়ি চিনলেই হয় না, রাস্তাটাও চিনতে হয়।</div>`,
  senior: {
    title: "C# ও .NET — দ্রুত গাইড",
    body: "<p><strong>C#</strong> = ভাষা; <strong>.NET</strong> = প্ল্যাটফর্ম (runtime+libraries+tools)। ফ্লো: C# → compiler → IL → CLR+JIT → মেশিন। Compile time ভুল ধরে (বন্ধু), runtime ভাঙে (বাস্তব)। Managed code-এ CLR+GC মেমরি দেখে; NuGet = প্যাকেজ ম্যানেজার। ভার্সন: Framework → Core → .NET 5+ (এখন .NET 10 LTS, C# 14)। App models: ASP.NET Core, Blazor, MAUI, Unity, WPF।</p>"
  }
});

doors.push({
  num: 9,
  icon: "🌱",
  color: "#f97316",
  name: "তুমি খারাপ নও, ফাঁকা জানো",
  subtitle: "You're Not Bad at Coding… You Just Never Learned This",
  tech: "What coding really is: code → translator → OS → hardware; input-processing-output; literal machines; engineer mindset",
  spirit: "নিয়ত — উদ্দেশ্য ঠিক করা, তারপর শেখা",
  secret: "কোডিং মানে কম্পিউটারের সাথে কথা নয় — মানুষ-বান্ধব নির্দেশ লেখা, যেটা হয়ে যায় translation → OS → hardware → output; কম্পিউটার বুদ্ধিমান নয়, অন্ধ দ্রুত।",
  recall: {
    q: "কোড লেখা থেকে ফলাফল দেখানো পর্যন্ত পর্দার আড়ালের ধাপগুলো কী কী?",
    qen: "What are the hidden steps from writing code to seeing output?",
    a: "তুমি কোড লেখো → compiler/interpreter মানুষ-বান্ধব কোড অনুবাদ করে → অ্যাপ OS-এর সাথে কথা বলে → OS হার্ডওয়্যার চালায় → ফল ফিরে আসে। কম্পিউটার শুধু 0/1 বোঝে।",
    aen: "You write code → compiler/interpreter translates it → the app talks to the OS → the OS drives hardware → the result returns. Computers only understand 0s and 1s."
  },
  story: `<p class="scene-setting">নতুন কাজের তৃতীয় মাস। বস তোমাকে একটা অদ্ভুত কাজ দিলেন — পুরনো এক ক্লায়েন্টের স্ক্রিপ্ট ভেঙে গেছে, কেউ বুঝতে পারছে না কেন; ওটা "magic" বলে পরিচিত, যে লিখেছিল সে কোম্পানি ছেড়েছে। তুমি স্ক্রিনে চেয়ে আছো — কোড ঠিকই, সেম-কমান্ড চালালে ফল আলাদা। রাত গড়িয়ে যায়, সকালে কম্পিউটার-ল্যাবের সামনে দাঁড়াও — আর ভেতরে ঢুকে দেখো, সার্ভার-র‍্যাকের পাশে নিচু টেবিলে বসে মানুষটা হেডফোন খুলে তোমার দিকে তাকালেন।</p>
<p class="scene-setting en">Month three at the new job. The boss hands you an odd one — an old client script is broken, nobody knows why; it is known as "magic," its author long gone. You stare — code unchanged, same command, different result. Night passes; at dawn you walk into the computer lab — by the server rack, at a low table, a man pulls off his headphones and looks up.</p>
<p class="scene-setting"><strong>অনুবাদক রুমকি ভাবি</strong> — এক সময়ের বিখ্যাত localizers-দের শেষ প্রহরা; বড় কোম্পানিগুলোর সফটওয়্যার বাংলা করতেন, এখন ল্যাবে কম্পিউটার মেরামত করেন; কানের পেছনে সবসময় একটা পেন্সিল, বাঁ হাতের কড়ে আঙুলে স্থায়ী কালি-কালো দাগ, টেবিলে সবসময় তিনটা খাতা — একটা বাংলায়, একটা ইংরেজিতে, একটা শুধু শব্দ-তালিকা। তোমার ভাঙা স্ক্রিপ্টের গল্প শুনে পেন্সিলটা কানের পেছনে গুঁজে বললেন: <em>বাবা, তোমার স্ক্রিপ্ট ভাঙেনি — তোমার অনুবাদ ভেঙেছে। আমি তোমাকে সেই দিনের কথা বলি, যেদিন আমি বুঝলাম কম্পিউটার কারা।</em></p>
<p class="scene-setting en">Rumki Bhavi the translator — last of the famed localizers; the big companies' software into Bangla once, now computers repaired in the lab; a pencil always behind an ear, permanent ink-black on his left ring finger, always three notebooks on the table — one Bangla, one English, one only word-lists. Hearing your broken script he tucks the pencil back: your script did not break — your translation did. Let me tell you of the day I understood who computers are.</p>
<div class="callout warn"><span class="co-icon">🚫</span><div><strong>রুমকি ভাবির প্রথম সতর্কতা:</strong> তুমি Python/JavaScript/Java লিখলে কম্পিউটার <strong>সরাসরি বোঝে না</strong>। কম্পিউটার বোঝে শুধু মেশিন কোড — শূন্য আর এক, বিদ্যুৎ চলছে না চলছে না। একমাত্র ভাষা হার্ডওয়্যার বোঝে।</div></div>
<div class="code-block">আসল ফ্লো (মুখস্থ কোরো না — দেখো):
১. তুমি কোড লেখো (print hello world)
২. compiler / interpreter অনুবাদ করে —
   মানুষ-বান্ধব → মেশিন-বান্ধব নির্দেশে
৩. অনুবাদিত কোডও সরাসরি হার্ডওয়্যারকে বলে না —
   মাঝে operating system (কম্পিউটারের ম্যানেজার)
৪. OS হার্ডওয়্যারকে নির্দেশ দেয়, হার্ডওয়্যার চালায়
৫. ফল ফিরে আসে উল্টো পথে — তোমার সামনে

সব সফটওয়্যার একই প্যাটার্নে:
INPUT → PROCESSING → OUTPUT
কী-বোর্ড চাপ = input; অ্যাপ প্রসেস করে; স্ক্রিনে কিছু হয় = output।
পাসওয়ার্ড দাও = input; ব্যাকএন্ড যাচাই = processing;
লগইন = output।</div>
<div class="callout info"><span class="co-icon">🌐</span><div><strong>ভাষা এতগুলো কেন?</strong> বিভিন্ন কাজের জন্য বিভিন্ন টুল: HTML ওয়েবসাইটের কাঠামো, CSS সাজায়, JavaScript ইন্টার‌্যাকশন দেয়, Python ব্যাকএন্ড/AI/অটোমেশনে জনপ্রিয়, C# গেম ও অ্যাপে। কিন্তু সবার নিচে একই ঘটনা — <strong>সবাই শেষে মেশিন-নির্দেশে অনুবাদিত হয়।</strong></div></div>
<div class="callout tip"><span class="co-icon">🧠</span><div><strong>শেষ মাইন্ডসেট-শিফট (সবচেয়ে দামি):</strong> কম্পিউটার বুদ্ধিমান নয় — <strong>অতি দ্রুত, কিন্তু হুবহু আক্ষরিক।</strong> তুমি যা বলবে ঠিক তাই করবে — বেশি নয়, কম নয়। আউটপুট ভুল মানে নির্দেশ ভুল ছিল — কম্পিউটার ব্যর্থ হয়নি, সে তোমার নির্দেশ নিখুঁতভাবে পালন করেছে। এটা বুঝলে syntax অন্ধভাবে মুখস্থ করা বন্ধ হয় — <strong>ইঞ্জিনিয়ারের মতো ভাবা শুরু হয়।</strong></div></div>
<div class="verse">রুমকি ভাবি তিন খাতা জড়ো করতে করতে বললেন: <em>ত্রিশ বছর অনুবাদ করে শিখেছি — অনুবাদকের সবচেয়ে বড় গুণ বাকপটুতা নয়, আন্তরিকতা: উৎসটাকে হুবহু বলে দেওয়া, নিজের যোগ না করে।</em> আর এ তো সেই আয়াতেরই স্বাদ — <em>আমরা কিতাব পাঠাই সত্য সহকারে, যেন মানুষ তাতে ন্যায় স্থাপন করে</em> — অনুবাদ যখন সত্যের সাথে করো, ফল বিশ্বস্ত; নিজের বুদ্ধি মেশালে ফল "magic" হয়ে যায়। কোডও তাই: হুবহু নির্দেশ, হুবহু পালন।</div>
<div class="secret-box">🌱 কম্পিউটার জাদু করে না — সে শুনে; ভুল আউটপুট মানে ভুল নির্দেশ, ভুল কম্পিউটার নয়।</div>`,
  senior: {
    title: "কোডিং আসলে কী — দ্রুত গাইড",
    body: "<p>চেইন: code → translator (compiler/interpreter) → OS → hardware → output। প্যাটার্ন: input → processing → output (সব সফটওয়্যার)। ভাষা ভিন্ন কাজে ভিন্ন টুল, নিচে সবাই মেশিন-কোডে যায়। কম্পিউটার = literal + fast, smart নয়। ভুল আউটপুট = ভুল instruction।</p>"
  }
});

doors.push({
  num: 10,
  icon: "🗝️",
  color: "#fbbf24",
  name: "জাভাস্ক্রিপ্টের দশ তালা ও এক চাবি",
  subtitle: "Top 10 JavaScript Concepts + The Unifying Principle",
  tech: "Functions, const/let, types, coercion, scope, hoisting, this, arrow functions, prototypes, async — synthesized",
  spirit: "ফাতাহ — সব তালা খোলার এক চাবি",
  secret: "দশটা ধারণা আলাদা নয় — স্তরে স্তরে বাঁধা: scope-এ ভেরিয়েবল, this/closure-এ ফাংশন, prototype-এ অবজেক্ট, async-এ সময়; স্তর ধরে ভাবলেই debug।",
  recall: {
    q: "JavaScript-এ কিছু ভাঙলে কোন স্তরে সমস্যা ভাবা শুরু করবে?",
    qen: "When something breaks in JavaScript, which layer do you think through?",
    a: "চার স্তর: ভেরিয়েবল সমস্যা → scope/hoisting; ফাংশন সমস্যা → this/closure; অবজেক্ট সমস্যা → prototype chain; ক্রম-গোলমাল → async। এলোমেলো debug নয়, স্তর-ধরে ভাবা।",
    aen: "Four layers: variable issues → scope/hoisting; function issues → this/closures; object behavior → prototype chain; out-of-order → async timing."
  },
  story: `<p class="scene-setting">শেষ দরজা। তুমি এখন প্রমোশন-পাওয়া সিনিয়র — আর আজ কোম্পানির ছাদে তোমার নিজের ডাকা এক সমাবেশ: কামরুল ভাই (চায়ের দাগে ছাপানো মগ), রুকসানা ম্যাডাম (শাড়ির আঁচলে কলম), ইদ্রিস চাচা (আঙুলে রাবার-ব্যান্ড), ফারহানা ম্যাডাম (কবজির কালি-দাগ), সজীব ভাই (আঙুলের গ্রিস), রুমকি ভাবি (কানের পেন্সিল) — সবাই এক টেবিলে, মাঝখানে একটা খালি চেয়ার। কেউ জিজ্ঞেস করেনি কার; সবাই জানে কার।</p>
<p class="scene-setting en">The final door. You are the promoted senior now — and on the office rooftop, your own convened gathering: Kamrul (tea-stained mug), Ruksana (pen in her anchal), Idris chacha (rubber band on his finger), Farhana (ink on her wrist), Sajib (grease on his fingers), Rumki bhavi (pencil behind ear) — one table, and in the middle one empty chair. Nobody asked whose; everybody knows whose.</p>
<p class="scene-setting">তুমি দাঁড়িয়ে বললে — এই প্রথম মাস হলো আমার সিনিয়র হিসেবে, এবং আমার হাতে এখন একটা পুরনো JavaScript কোডবেস — production-এ যেটা রোজ ভাঙে না, কিন্তু ভাঙলে রাত কাটে না। ভেরিয়েবল অদ্ভুত আচরণ করে, async এলোমেলো চলে। কামরুল ভাই চায়ে চুমুক দিয়ে হাসলেন: <em>শুনেছি, তোমার টিমে একটা খালি চেয়ার আছে। আজ থেকে সেটা পূরণ করবে যে নিজে ছিল না — তুমি, নতুন মাস্টার। কিন্তু আগে শেষ পাঠ।</em></p>
<p class="scene-setting en">You stand: this is my first month as senior, and in my hands an old JavaScript codebase — it does not break daily in production, but when it does, nights vanish. Variables behave oddly, async runs out of order. Kamrul sips and smiles: I hear your team has an empty chair. From today it is filled by someone who was not there — you, the new master. But first, the final lesson.</p>
<div class="code-block">১. FUNCTIONS — input → logic → output। add(2,3)=5।
   সব আসল সিস্টেম এমনই ফাংশনের মেলবন্ধন।
২. VARIABLES — const পুনঃ-assigned হয় না (error),
   let হয়।
৩. DATA TYPES — number, string, boolean, object...
৪. TYPE COERCION — "5" + 2 = "52"? টাইপ মেশালে
   JavaScript নিজে রূপান্তর করে — অপ্রত্যাশিত ফল।
৫. SCOPE — var ফাংশন-স্কোপড (পুরো ফাংশনে বেঁচে),
   let/const ব্লক-স্কোপড (ব্লকের বাইরে মৃত)।
৬. HOISTING — declaration উপরে ওঠে, value নয়।
   আগে ব্যবহার করলে undefined — error নয়।
৭. THIS — কে ডাকল তার উপর নির্ভর করে;
   person.show() এ this=person, একা ডাকলে undefined।
৮. ARROW FUNCTIONS — নিজস্ব this নেই,
   চারপাশ থেকে ধার নেয়।
৯. PROTOTYPES — dog এ method না পেলে
   animal (যেখান থেকে বানানো) খোঁজে — prototype chain।
১০. ASYNC — অপেক্ষা করে না: start → end →
    (১ সেকেন্ড পরে) hello। JS execution block করে না।</div>
<div class="diagram">
<div class="diag-title">দশ ধারণার চার স্তর — সমাবেশের সংশ্লেষণ</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="15" y="15" width="530" height="44" rx="9"/>
  <text class="lbl" x="280" y="42" text-anchor="middle">ভেরিয়েবল অদ্ভুত? → SCOPE + HOISTING (৫, ৬)</text>
  <rect class="cell-hot" x="15" y="68" width="530" height="44" rx="9"/>
  <text class="lbl-hot" x="280" y="95" text-anchor="middle">ফাংশন গোলমাল? → THIS + ARROW + CLOSURE (৭, ৮)</text>
  <rect class="cell-cyan" x="15" y="121" width="530" height="44" rx="9"/>
  <text class="lbl-cyan" x="280" y="148" text-anchor="middle">অবজেক্ট আচরণ ভাগ করছে? → PROTOTYPE CHAIN (৯)</text>
  <rect class="cell-leaf" x="15" y="174" width="530" height="44" rx="9"/>
  <text class="lbl-leaf" x="280" y="201" text-anchor="middle">ক্রম এলোমেলো? → ASYNC TIMING (১০)</text>
</svg>
<div class="diag-cap">ভাঙলে এলোমেলো debug নয় — স্তর জিজ্ঞেস করো: scope? this? prototype? async?</div>
</div>
<div class="callout tip"><span class="co-icon">🏆</span><div><strong>দশ দরজার এক চাবি (সমাবেশের মূলনীতি):</strong> দরজা ১-এ কামরুল ভাই বলেছিলেন — সিনিয়ররা জটিলতা <strong>সরায়</strong>। দরজা ৭-এ ফারহানা ম্যাডামের Python-আইন: চিন্তা-হ্রাস। দরজা ৮-এ সজীব ভাইয়ের .NET-মডেল: পর্দার আড়ালটা বোঝা। দরজা ৯-এ রুমকি ভাবি: কম্পিউটার আক্ষরিক। আর আজ: <strong>স্তর ধরে ভাবা।</strong> সব দরজার নিচে এক সত্য — <strong>সিনিয়রিটি মানে আরও জানা নয়; কম ভেবে বেশি বোঝা।</strong> Syntax লেখক আর ইঞ্জিনিয়ারের পার্থক্য এখানেই।</div></div>
<div class="verse">রাত শেষে ছয় মাস্টার উঠে দাঁড়ালেন। ইদ্রিস চাচা বললেন: <em>চিঠি বহন করেছি চল্লিশ বছর — আজ বুঝলাম, তুমিই ছিলে সেই চিঠি: নাম আর ঠিকানা সব পেয়ে গেছো, এখন নিজেই ঠিকানা হও।</em> আর এ তো সেই প্রতিশ্রুতিরই পূর্ণতা — <em>যারা আমাদের মধ্যে সবচেয়ে সম্মানিত, সে তোমাদের মধ্যে সবচেয়ে জ্ঞানী</em> — জ্ঞানের সম্মান জমা ব্যালেন্সে নয়, চালনায়: যতটা জানো ততটা দাও, খালি চেয়ারটা ভরাট করো পরের যাত্রীর জন্য। তুমি খালি চেয়ারে বসলে — শেষ দরজাটা তোমার পিছনে বন্ধ হলো, আর প্রথম দরজাটা কারও জন্য খুলে গেলো।</div>
<div class="secret-box">🗝️ দশ তালা, চার স্তর, এক চাবি — কম ভেবে বেশি বোঝাই সিনিয়রিটি।</div>`,
  senior: {
    title: "JS ১০ ধারণা + সিরিজ-সংশ্লেষণ — দ্রুত গাইড",
    body: "<p><strong>১০টা ধারণা:</strong> functions, const/let, types, coercion, scope (var=function, let=block), hoisting (declaration ওঠে, value নয়), this (caller-নির্ভর), arrow (নিজস্ব this নেই), prototype chain, async (block করে না)। <strong>Debug-স্তর:</strong> ভেরিয়েবল→scope/hoisting, ফাংশন→this/closure, অবজেক্ট→prototype, ক্রম→async। <strong>সিরিজ-চাবি:</strong> সিনিয়রিটি = চিন্তা-হ্রাস।</p>"
  }
});



