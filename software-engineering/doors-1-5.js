const doors = [];

doors.push({
  num: 1,
  icon: "📜",
  color: "#f97316",
  name: "নিয়মের জন্ম",
  subtitle: "The Birth of Process",
  tech: "SDLC & Methodologies — Waterfall (Royce 1970), Agile Manifesto (2001), Scrum, Kanban, DevOps, Platform Engineering",
  spirit: "তাবাকা — স্তরে স্তরে গঠন, প্রক্রিয়ার বিবর্তন",
  secret: "Methodology = কীভাবে কাজ করবে তার নিয়ম। Waterfall = সিঁড়ি দিয়ে নামো। Agile = ছোট কদমে চলো। DevOps = dev ও ops একসাথে।",
  recall: {
    q: " Agile এবং Waterfall-এর মূল পার্থক্য কী?",
    qen: "What is the main difference between Agile and Waterfall?",
    a: "Waterfall = ক্রমিক, একবারে সব পরিকল্পনা, শেষে ডেলিভারি। Agile = পুনরাবৃত্তিমূলক, ছোট ছোট sprint, প্রতিটিতে feedback।",
    aen: "Waterfall = sequential, all planned upfront, deliver at end. Agile = iterative, small sprints, feedback each cycle."
  },
  story: `<p class="scene-setting">১৯৭০ সাল। Winston Royce একটি পেপার লিখছেন। তিনি একটি মডেল আঁকছেন — Requirements → Design → Implementation → Testing → Maintenance। একটি সিঁড়ির মতো — এক ধাপ শেষ, তারপর পরের। তিনি এটি Waterfall নামে বর্ণনা করেছিলেন — কিন্তু আশ্চর্যের বিষয় হলো, তিনি নিজেই বলেছিলেন এটি ঝুঁকিপূর্ণ! তার পেপারের শিরোনাম ছিল "Managing the Development of Large Software Systems" — এবং তিনি পরবর্তী পৃষ্ঠাগুলোতে বলেছিলেন এই মডেল কেন কাজ করবে না। কিন্তু মানুষ শুধু প্রথম পৃষ্ঠা পড়লো।</p>
<p class="scene-setting en">1970. Winston Royce is writing a paper. He draws a model — Requirements → Design → Implementation → Testing → Maintenance. Like a staircase — one step done, then next. He described it as Waterfall — but surprisingly, he himself said it was risky! His paper's title was "Managing the Development of Large Software Systems" — and in the following pages he explained why this model wouldn't work. But people only read the first page.</p>

<div class="callout info"><span class="co-icon">📜</span><div><strong>SDLC Methodologies বিবর্তন:</strong><br>
<strong>Waterfall (Royce ১৯৭০):</strong> ক্রমিক — এক ধাপ শেষ, তারপর পরের। কোনো ফিরে যাওয়া নেই। ধীর কিন্তু সুসংগঠিত।<br>
<strong>V-Model:</strong> Waterfall + verification — প্রতিটি ধাপের সাথে একটি test phase।<br>
<strong>Spiral (Boehm ১৯৮৬):</strong> পুনরাবৃত্তিমূলক + risk analysis — প্রতিটি চক্রে risk মূল্যায়ন।<br>
<strong>Rapid Application Development (RAD):</strong> দ্রুত prototyping — ব্যবহারকারীর feedback দিয়ে দ্রুত iteration।<br>
<strong>Agile (২০০১):</strong> মানুষ ও interaction > process। কাজের software > documentation। collaboration > contract। change এর উত্তরদান > plan অনুসরণ।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>The Agile Manifesto (২০০১):</strong> ১৭ জন software developer Snowbird, Utah-তে মিলিত হয়েছিলেন। তারা ৪টি value ও ১২টি principle লিখেছিলেন। মূল ধারণা: "প্রতি কয়েক সপ্তাহে থেমে একটু একটু করে দেখো — কাজ করছে কি না।" ছোট feedback loop। বড় পরিকল্পনা নয়, ছোট পরীক্ষা।</div></div>

<div class="callout info"><span class="co-icon">🏃</span><div><strong>Agile Frameworks:</strong><br>
<strong>Scrum:</strong> ২-৪ সপ্তাহের Sprint। Daily standup। Sprint review + retrospective। Product Owner + Scrum Master + Team।<br>
<strong>Kanban:</strong> কোনো sprint নেই। একটি board — To Do → In Progress → Done। WIP limit — একসাথে কতটা কাজ। Continuous flow।<br>
<strong>Extreme Programming (XP):</strong> TDD, pair programming, continuous integration, refactoring। Beck ১৯৯৯।<br>
<strong>Shape Up (Basecamp):</strong> ৬ সপ্তাহের cycle। ২ সপ্তাহের cooldown। ছোট দল।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>DevOps (২০০৯+):</strong> Development ও Operations এক করো। CI/CD, Infrastructure as Code, monitoring। উদ্দেশ্য: ছোট ছোট change ঘন ঘন deploy। "you build it, you run it।" — Werner Vogels, AWS CTO।<br><br>
<strong>Platform Engineering (২০২০+):</strong> DevOps-এর পরবর্তী ধাপ। Internal Developer Platform — ডেভেলপারদের জন্য self-service। Kubernetes, golden paths, paved roads।</div></div>

<div class="verse">إِنَّ مَعَ الْعُسْرِ يُسْرًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই কষ্টের সাথেই রয়েছে স্বস্তি।" — কুরআন ৯৪:৬</div>

<p class="scene-setting">এই আয়াত বলে — কষ্টের পরে স্বস্তি আছে। Software methodology-ও তেমন — Waterfall-এর কষ্ট (এক বছর পর ভুল জানা) থেকে Agile-এর স্বস্তি (ছোট feedback loop)। DevOps-এর কষ্ট (manual deploy) থেকে Platform Engineering-এর স্বস্তি (self-service)। প্রতিটি প্রজন্ম আগের কষ্ট থেকে শিখে স্বস্তি তৈরি করে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩ (Engineer Journey):</strong> Engineering mindset — first principles, abstraction। সেই চিন্তার সাথে methodology যুক্ত হলে একটি পেশা তৈরি হয়। LedgerPilot: তুমি feature branch → PR → review → merge প্যাটার্ন ব্যবহার করছো — এটাই Agile + Git workflow।</div></div>

<div class="secret-box">📜 <strong>Methodology = কীভাবে কাজ করবে।</strong> Waterfall (planned), Agile (adaptive), DevOps (automated), Platform Engineering (self-service)। প্রতিটি যুগের সমাধান তার আগের যুগের সমস্যা থেকে জন্ম নেয়। কিন্তু নিয়ম জানা এক জিন্তু — ভালো কোড লেখা আরেক জিনিস। সেই কৌশল আসবে পরের দরজায় — clean code।</div>`,
  senior: {
    title: "SDLC & Methodologies এক নজরে",
    body: `<table class="kv-table"><tr><th>Methodology</th><th>নীতি</th><th>বছর</th></tr>
<tr><td class="hl">Waterfall</td><td>ক্রমিক, একবারে</td><td>১৯৭০</td></tr>
<tr><td class="hl">V-Model</td><td>Waterfall + verification</td><td>১৯৮০s</td></tr>
<tr><td class="hl">Spiral</td><td>পুনরাবৃত্তি + risk</td><td>১৯৮৬</td></tr>
<tr><td class="hl">Agile</td><td>পুনরাবৃত্তি, feedback, adapt</td><td>২০০১</td></tr>
<tr><td class="hl">Scrum</td><td>Sprint, standup, retrospective</td><td>১৯৯৫</td></tr>
<tr><td class="hl">Kanban</td><td>continuous flow, WIP limit</td><td>২০০০s</td></tr>
<tr><td class="hl">DevOps</td><td>dev+ops, CI/CD, IaC</td><td>২০০৯</td></tr>
<tr><td class="hl">Platform Eng</td><td>internal platform, self-service</td><td>২০২০+</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "📐",
  color: "#f97316",
  name: "নিয়ম পালক",
  subtitle: "The Rule Keeper",
  tech: "SOLID (Martin 2000), Clean Code (Martin 2008), naming, function design, DRY, KISS, YAGNI, Boy Scout Rule",
  spirit: "হুদুদ — সীমা, ভালো কোডের নিয়ম ও সীমাবদ্ধতা",
  secret: "Clean Code = অন্য কেউ পড়ে বুঝতে পারে, পরিবর্তন করতে পারে, ভাঙবে না। কোড শুধু মেশিনের জন্য নয় — মানুষের জন্য।",
  recall: {
    q: " SOLID-এর S (Single Responsibility) কী?",
    qen: "What is the S (Single Responsibility) in SOLID?",
    a: "একটি class-এর একটিমাত্র কারণ পরিবর্তনের হবে — একটি দায়িত্ব। অনেক দায়িত্ব = অনেক কারণ পরিবর্তনের = ঝুঁকি।",
    aen: "A class should have one reason to change — one responsibility. Many responsibilities = many reasons to change = risk."
  },
  story: `<p class="scene-setting">তুমি একটি কিচেনে ঢুকলে। দেখলে — সব জিনিস একটি ড্রয়ারে। চামচ, ছুরি, কড়াই, প্লেট — সব মিশে। একটি জিনিস খুঁজতে কতক্ষণ? এখন ভাবো — প্রতিটি ড্রয়ারে এক ধরনের জিনিস। ছুরি এক জায়গায়, চামচ আরেক জায়গায়। খুঁজতে সেকেন্ড। এটাই Single Responsibility — প্রতিটি ইউনিটের একটি কাজ।</p>
<p class="scene-setting en">You enter a kitchen. Everything in one drawer. Spoons, knives, pans, plates — mixed. How long to find one thing? Now imagine — each drawer has one type. Knives here, spoons there. Found in seconds. This is Single Responsibility — each unit has one job.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>SOLID Principles (Robert C. Martin, ২০০০):</strong><br>
<strong>S — Single Responsibility:</strong> একটি class = একটি দায়িত্ব। একটি কারণ পরিবর্তনের।<br>
<strong>O — Open/Closed:</strong> extension-এর জন্য খোলা, modification-এর জন্য বন্ধ। নতুন behavior? নতুন class। পুরোনো কোড ছুঁয়ো না।<br>
<strong>L — Liskov Substitution:</strong> child class parent-এর জায়গায় বসতে পারে — কোনো ভাঙন ছাড়া। Barbara Liskov (১৯৮৭)।<br>
<strong>I — Interface Segregation:</strong> অনেক বড় interface নয় — ছোট ছোট specific interface। ক্লায়েন্ট যা ব্যবহার করে না তা forced করো না।<br>
<strong>D — Dependency Inversion:</strong> high-level module low-level-এর উপর নির্ভর করবে না। উভয়ে abstraction-এর উপর নির্ভর করবে। dependency injection।</div></div>

<div class="callout info"><span class="co-icon">🔨</span><div><strong>Clean Code Principles (Martin ২০০৮):</strong><br>
<strong>Naming:</strong> নাম বলে কেন আছে, কী করে, কীভাবে ব্যবহার করবে। "d" নয়, "daysBetween"।<br>
<strong>Functions:</strong> ছোট। একটি কাজ। একটি স্তরের abstraction। ৩-৪ লাইনের function ভালো।<br>
<strong>Comments:</strong> ভালো কোড নিজেই বোঝায়। কমেন্ট শুধু "কেন" এর জন্য — "কী" নয়।<br>
<strong>Error Handling:</strong> exceptions > error codes। কোডের মূল লজিক error handling-এ ডুবে যাওয়া উচিত নয়।<br>
<strong>Formatting:</strong> সামঞ্জস্য। টিমের নিয়ম। vertical ও horizontal spacing।</div></div>

<div class="callout info"><span class="co-icon">💡</span><div><strong>Other Key Principles:</strong><br>
<strong>DRY (Don't Repeat Yourself):</strong> একই লজিক দুবার লিখো না। abstract করো।<br>
<strong>KISS (Keep It Simple, Stupid):</strong> সহজ সমাধান > চতুর সমাধান। complexity প্রতিটি bug-এর মূল।<br>
<strong>YAGNI (You Aren't Gonna Need It):</strong> দরকার নেই এমন feature আগে বানিয়ো না। over-engineering-এর বিপদ।<br>
<strong>Boy Scout Rule:</strong> যে কোড ছুঁয়েছো, তা আগের চেয়ে একটু ভালো রেখে যাও।<br>
<strong>Composition over Inheritance:</strong> inheritance একটি tight coupling। composition flexible।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Technical Debt:</strong> দ্রুত কাজ করতে গিয়ে shortcut নাও — কিন্তু পরে তা interest সহ চোকাতে হবে। Ward Cunningham এই রূপক দিয়েছিলেন। প্রতিটি hack, প্রতিটি duplication, প্রতিটি unclear code একটি debt। সময়ে পরিশোধ করো — refactoring দিয়ে। না হলে bankruptcy।</div></div>

<div class="verse">وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং মানুষের জন্য তা ছাড়া আর কিছু নেই যা সে অর্জন করে।" — কুরআন ৫৩:৩৯</div>

<p class="scene-setting">এই আয়াত বলে — মানুষ যা চেষ্টা করে তাই পায়। Clean code-ও তেমন — এটি কোনো accident নয়। প্রতিটি ভালো function, প্রতিটি স্পষ্ট নাম, প্রতিটি একক দায়িত্ব — চেষ্টার ফল। "working code" ও "clean code" এক জিনিস নয়। প্রথমটি মেশিনের জন্য, দ্বিতীয়টি মানুষের জন্য।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩ (Engineer Journey):</strong> Abstraction ও decomposition — clean code-এর ভিত্তি। LedgerPilot: Django models, views, serializers — প্রতিটি একটি কাজ করে = SRP। Ipractus: React components — ছোট, এক কাজ।</div></div>

<div class="secret-box">📐 <strong>Clean Code = মানুষের জন্য লেখা।</strong> SOLID (SRP, OCP, LSP, ISP, DIP)। DRY, KISS, YAGNI। Boy Scout Rule। প্রতিটি নাম বলে একটি গল্প, প্রতিটি function একটি কাজ। কিন্তু ভালো কোড লেখা এক জিনিস — একই কাঠামো বারবার ব্যবহার করা আরেক জিনিস। সেই পুনরাবৃত্তি আসবে পরের দরজায় — design patterns।</div>`,
  senior: {
    title: "SOLID & Clean Code এক নজরে",
    body: `<table class="kv-table"><tr><th>Principle</th><th>অর্থ</th></tr>
<tr><td class="hl">SRP</td><td>এক class = এক দায়িত্ব</td></tr>
<tr><td class="hl">OCP</td><td>extension খোলা, modification বন্ধ</td></tr>
<tr><td class="hl">LSP</td><td>child parent-এর জায়গায় বসতে পারে</td></tr>
<tr><td class="hl">ISP</td><td>ছোট specific interface</td></tr>
<tr><td class="hl">DIP</td><td>abstraction-এ নির্ভর, concrete নয়</td></tr>
<tr><td class="hl">DRY</td><td>পুনরাবৃত্তি নয়</td></tr>
<tr><td class="hl">KISS</td><td>সহজ রাখো</td></tr>
<tr><td class="hl">YAGNI</td><td>দরকার নেই তা বানিয়ো না</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🔧",
  color: "#f97316",
  name: "প্যাটার্ন কারিগর",
  subtitle: "The Pattern Craftsman",
  tech: "Design Patterns — GoF (Gamma-Helm-Johnson-Vlissides 1994), creational, structural, behavioral, anti-patterns",
  spirit: "সুন্নাহ — প্রমাণিত পথ, পূর্বসূরীদের অনুসৃত পদ্ধতি",
  secret: "Design Pattern = প্রমাণিত সমাধানের টেমপ্লেট। প্রতিটি সমস্যা আগেও এসেছে — কেউ একজন সমাধান খুঁজেছে। সেটাই pattern।",
  recall: {
    q: " Factory এবং Singleton pattern-এর পার্থক্য কী?",
    qen: "What is the difference between Factory and Singleton patterns?",
    a: "Factory = কোন object তৈরি করবে তা সিদ্ধান্ত নেওয়া। Singleton = শুধুমাত্র একটি instance থাকবে পুরো অ্যাপে।",
    aen: "Factory = decides which object to create. Singleton = only one instance exists in the entire app."
  },
  story: `<p class="scene-setting">একজন ছুতার মিস্ত্রি। তিনি একটি চেয়ার বানাচ্ছেন। তিনি প্রতিটি চেয়ার আলাদাভাবে ডিজাইন করেন না — তার কাছে টেমপ্লেট আছে। ডাইনিং চেয়ার, অফিস চেয়ার, রকিং চেয়ার — প্রতিটির একটি নির্দিষ্ট গঠন। এই গঠন তিনি প্রতিটি চেয়ারে প্রয়োগ করেন। ডিজাইন প্যাটার্নও তেমন — প্রমাণিত গঠন যা বারবার ব্যবহার করা যায়।</p>
<p class="scene-setting en">A carpenter. He's building a chair. He doesn't design each chair from scratch — he has templates. Dining chair, office chair, rocking chair — each has a specific structure. He applies this structure to each chair. Design patterns are the same — proven structures used repeatedly.</p>

<div class="callout info"><span class="co-icon">📖</span><div><strong>History — Gang of Four (১৯৯৪):</strong> Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides — একত্রে "Design Patterns: Elements of Reusable Object-Oriented Software" বই লিখেছিলেন। এটি software engineering-এর সবচেয়ে প্রভাবশালী বইগুলোর একটি। ২৩টি প্যাটার্ন — ৩ ভাগে: creational, structural, behavioral। এটি architecture-এর "pattern language" (Alexander ১৯৭৭) থেকে অনুপ্রাণিত।</div></div>

<div class="callout info"><span class="co-icon">🏗️</span><div><strong>Creational Patterns — কীভাবে object তৈরি করবে:</strong><br>
<strong>Singleton:</strong> একটি instance। সাধারণত বিপজ্জনক — global state, testing কঠিন। ব্যবহার: DB connection, logger।<br>
<strong>Factory Method:</strong> subclass সিদ্ধান্ত নেয় কোন object তৈরি করবে।<br>
<strong>Abstract Factory:</strong> সম্পর্কিত object-এর পরিবার তৈরি। যেমন: Mac UI বনাম Windows UI।<br>
<strong>Builder:</strong> ধাপে ধাপে জটিল object তৈরি। Django ORM queryset = builder pattern।<br>
<strong>Prototype:</strong> একটি object clone করে নতুন তৈরি।</div></div>

<div class="callout info"><span class="co-icon">🔗</span><div><strong>Structural Patterns — কীভাবে object যুক্ত করবে:</strong><br>
<strong>Adapter:</strong> দুটি incompatible interface যুক্ত করে। USB-C to HDMI adapter।<br>
<strong>Decorator:</strong> object-এ behavior যোগ করে — inheritance ছাড়া। Python decorator।<br>
<strong>Facade:</strong> জটিল subsystem-এর সামনে একটি সহজ interface। Django REST Framework = facade।<br>
<strong>Proxy:</strong> access control সহ object। lazy loading, caching, access check।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>Behavioral Patterns — কীভাবে object যোগাযোগ করে:</strong><br>
<strong>Observer:</strong> একটি object অবস্থা বদলালে সমস্ত dependent-কে জানানো দেওয়া। pub/sub।<br>
<strong>Strategy:</strong> একাধিক algorithm interchangeable। runtime-এ বদলানো যায়। sort algorithm বেছে নেওয়া।<br>
<strong>Command:</strong> একটি ক্রিয়াকে object হিসেবে wrap — undo, queue, log।<br>
<strong>Iterator:</strong> collection-এর ভেতর দিয়ে যাওয়া — কোনো implementation না জেনে।<br>
<strong>State:</strong> object-এর অবস্থা বদলালে behavior বদলায়।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Anti-Patterns — যা এড়াতে হবে:</strong><br>
<strong>God Object:</strong> একটি class সব কাজ করে — SRP ভাঙন।<br>
<strong>Spaghetti Code:</strong> সব সবার সাথে যুক্ত — কোনো কাঠামো নেই।<br>
<strong>Golden Hammer:</strong> একটি tool/প্যাটার্ন সব জায়গায় ব্যবহার — সব সমস্যায় নয়।<br>
<strong>Premature Optimization:</strong> দ্রুত করার আগে সঠিক করো। Knuth: "premature optimization is the root of all evil।"</div></div>

<div class="verse">لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই তোমাদের জন্য রাসূলুল্লাহতে রয়েছে উত্তম আদর্শ।" — কুরআন ৩৩:২১</div>

<p class="scene-setting">এই আয়াত বলে — রাসূলে উত্তম আদর্শ আছে। ডিজাইন প্যাটার্নও তেমন — পূর্বসূরীদের প্রমাণিত পথ। প্রতিটি pattern একটি আদর্শ — "এই সমস্যায় এই সমাধান কাজ করে।" নতুন কিছু আবিষ্কারের চেয়ে প্রমাণিত পথ অনুসরণ করা প্রায়ই বুদ্ধিমানের কাজ। কিন্তু প্যাটার্ন জেনেও — কখন কোনটা ব্যবহার করবে সেটাই শিল্প।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (System Design):</strong> Microservices architecture — প্যাটার্ন-এর large-scale রূপ। Book ৩৩ (Critical Thinking): pattern recognition = cognitive skill। LedgerPilot: Django ORM Manager = Factory। DRF Serializer = Facade। React Context = Observer।</div></div>

<div class="secret-box">🔧 <strong>Pattern = প্রমাণিত সমাধানের টেমপ্লেট।</strong> Creational (কীভাবে তৈরি), Structural (কীভাবে যুক্ত), Behavioral (কীভাবে যোগাযোগ)। ২৩টি GoF pattern + অসংখ্য modern pattern। কিন্তু pattern জানা যথেষ্ট নয় — নিশ্চিত করতে হবে যে কোড সঠিকভাবে কাজ করে। সেই নিশ্চয়তা আসবে পরের দরজায় — testing।</div>`,
  senior: {
    title: "Design Patterns এক নজরে",
    body: `<table class="kv-table"><tr><th>Category</th><th>Key Patterns</th></tr>
<tr><td class="hl">Creational</td><td>Singleton, Factory, Builder, Prototype</td></tr>
<tr><td class="hl">Structural</td><td>Adapter, Decorator, Facade, Proxy</td></tr>
<tr><td class="hl">Behavioral</td><td>Observer, Strategy, Command, Iterator, State</td></tr>
<tr><td class="hl">GoF ১৯৯৪</td><td>Gamma, Helm, Johnson, Vlissides</td></tr>
<tr><td class="hl">Anti-Pattern</td><td>God Object, Spaghetti, Golden Hammer</td></tr>
<tr><td class="hl">Modern</td><td>DI/IoC, Repository, CQRS, Event Sourcing</td></tr>
<tr><td class="hl">Rule</td><td>pattern জোর করো না — সমস্যা match করে তবে ব্যবহার</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "🧪",
  color: "#f97316",
  name: "পরীক্ষক",
  subtitle: "The Tester",
  tech: "Testing — TDD (Beck 2003), BDD, test pyramid, unit/integration/E2E, mocking, code coverage, property-based testing",
  spirit: "তাময়িয — সত্য ও মিথ্যা পৃথকীকরণ, কোডের সত্যতা যাচাই",
  secret: "Test = ভবিষ্যতের জন্য নিরাপত্তা। কোড আজ কাজ করছে — কিন্তু কাল কে গ্যারান্টি? Test দেয় সেই নিশ্চয়তা।",
  recall: {
    q: " TDD-এর Red-Green-Refactor চক্র কী?",
    qen: "What is the Red-Green-Refactor cycle in TDD?",
    a: "Red = প্রথমে test লেখো (fail করবে)। Green = সামান্য কোড লেখো test pass করার জন্য। Refactor = কোড পরিষ্কার করো।",
    aen: "Red = write failing test first. Green = minimal code to pass. Refactor = clean the code."
  },
  story: `<p class="scene-setting">তুমি একটি সেতু বানাচ্ছো। কিন্তু সেতুতে কোনো গাড়ি যাওয়ার আগে কি তুমি নিশ্চিত যে এটি টিকবে? না। তুমি প্রথমে ছোট ছোট ভার দিয়ে পরীক্ষা করো — একটি বাইক, তারপর একটি গাড়ি, তারপর একটি ট্রাক। যদি ধরে রাখে — বড় ভার দাও। কোডও তেমন — test ছাড়া deploy করা অন্ধের মতো সেতু পার হওয়া।</p>
<p class="scene-setting en">You're building a bridge. But before any car crosses, are you sure it'll hold? No. First you test with small weights — a bike, then a car, then a truck. If it holds — add more. Code is the same — deploying without testing is crossing a bridge blindfolded.</p>

<div class="callout info"><span class="co-icon">🧪</span><div><strong>Test Pyramid (Cohn ২০০৯):</strong><br>
<strong>Unit Tests (বেস, সবচেয়ে বেশি):</strong> একটি function/class পরীক্ষা। দ্রুত, নিরপেক্ষ, ছোট। milliseconds।<br>
<strong>Integration Tests (মধ্যম):</strong> কয়েকটি component একসাথে। DB + API + service। ধীর, কিন্তু বাস্তব।<br>
<strong>E2E Tests (শীর্ষ, সবচেয়ে কম):</strong> সম্পূর্ণ user journey। browser → API → DB → response। ধীরতম, brittle, কিন্তু সম্পূর্ণ আস্থা।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>TDD Cycle (Beck ২০০৩):</strong><br>
১. <strong>Red:</strong> একটি test লেখো যা fail করবে — কারণ feature এখনো নেই<br>
২. <strong>Green:</strong> সামান্য কোড লেখো — শুধু test pass করার জন্য। perfect নয়।<br>
৩. <strong>Refactor:</strong> কোড পরিষ্কার করো — duplicate সরাও, নাম ঠিক করো, structure উন্নত করো।<br>
৪. পুনরাবৃত্তি করো।<br><br>
Kent Beck ২০০৩ সালে "Test-Driven Development: By Example" লিখেছিলেন। তার উদ্দেশ্য ছিল না যে test বেশি হবে — উদ্দেশ্য ছিল ভালো design হবে। TDD একটি design tool, শুধু testing tool নয়।</div></div>

<div class="callout info"><span class="co-icon">📝</span><div><strong>BDD (Behavior-Driven Development):</strong><br>
Given-When-Then format। ব্যবহারকারীর ভাষায় behavior বর্ণনা।<br>
<strong>Given</strong> একজন logged-in user<br>
<strong>When</strong> সে "delete" ক্লিক করে<br>
<strong>Then</strong> আইটেম মুছে যায় এবং confirmation দেখায়<br>
Cucumber, SpecFlow — BDD framework। Dan North (২০০৬) প্রবর্তক।</div></div>

<div class="callout info"><span class="co-icon">🎭</span><div><strong>Mocking ও Stubbing:</strong><br>
<strong>Mock:</strong> নকল object যা পরীক্ষা করে — "এই function কি call হয়েছিল?"<br>
<strong>Stub:</strong> নকল object যা fixed উত্তর দেয় — "DB query → এই fixed data"<br>
<strong>Fake:</strong> একটি সরল implementation — in-memory DB<br>
<strong>Spy:</strong> আসল object কিন্তু call record রাখে</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Code Coverage ফাঁদ:</strong> ১০০% coverage = সব লাইন চলেছে। কিন্তু এর মানে সব edge case test হয়েছে না! Coverage একটি প্রতিনিধি — কিন্তু নিশ্চয়তা নয়। "১০০% coverage সহ bug-free কোড" একটি রূপকথা। Coverage ব্যবহার করো নির্দেশক হিসেবে, লক্ষ্য হিসেবে নয়।</div></div>

<div class="callout info"><span class="co-icon">🎲</span><div><strong>Property-Based Testing:</strong> traditional test = specific input → expected output। Property-based = "যেকোনো input-এর জন্য এই ধর্মটি সত্য হবে।" QuickCheck (Haskell, ২০০০), Hypothesis (Python)। একটি property-based test হাজার test case generate করে।</div></div>

<div class="verse">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَأٍ فَتَبَيَّنُوا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"হে মুমিনরা, যদি কোনো অবিশ্বাসী তোমাদের একটি সংবাদ দেয়, তবে তা যাচাই করে দেখো।" — কুরআন ৪৯:৬</div>

<p class="scene-setting">এই আয়াত তথ্য যাচাইয়ের নির্দেশ দেয় — বিশ্বাস করার আগে নিশ্চিত হও। Testing-ও তেমন — কোডের সত্যতা যাচাই করা। "এই function কি সত্যিই সঠিক?" — প্রশ্ন করো, পরীক্ষা করো, নিশ্চিত হও। কোনো কোড বিশ্বাস ছাড়া প্রোডাকশনে যাওয়া উচিত নয়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩ (Engineer Journey):</strong> Debugging = systematic investigation — testing-এর ভাই। Book ৩৪ (Statistics): A/B testing = production-এ experiment। LedgerPilot: pytest, Django TestCase। Ipractus: Jest, React Testing Library।</div></div>

<div class="secret-box">🧪 <strong>Test = আত্মবিশ্বাসের ভিত্তি।</strong> TDD (Red-Green-Refactor)। Test pyramid (unit > integration > E2E)। Mocking, BDD, property-based। Coverage নির্দেশক, লক্ষ্য নয়। কিন্তু test কীভাবে পরিবর্তন ট্র্যাক করে? কীভাবে টিম একসাথে কাজ করে? সেই যাত্রা আসবে পরের দরজায় — version control।</div>`,
  senior: {
    title: "Testing এক নজরে",
    body: `<table class="kv-table"><tr><th>Level</th><th>বিবরণ</th><th>Speed</th></tr>
<tr><td class="hl">Unit</td><td>এক function/class</td><td>ms</td></tr>
<tr><td class="hl">Integration</td><td>কয়েক component একসাথে</td><td>seconds</td></tr>
<tr><td class="hl">E2E</td><td>সম্পূর্ণ user journey</td><td>minutes</td></tr>
<tr><td class="hl">TDD</td><td>Beck ২০০৩ — Red → Green → Refactor</td><td>—</td></tr>
<tr><td class="hl">BDD</td><td>Given-When-Then, ব্যবহারকারীর ভাষা</td><td>—</td></tr>
<tr><td class="hl">Mock/Stub</td><td>নকল dependency</td><td>—</td></tr>
<tr><td class="hl">Coverage</td><td>নির্দেশক, নিশ্চয়তা নয়</td><td>—</td></tr>
<tr><td class="hl">Property-Based</td><td>র্যান্ডম input, invariant check</td><td>—</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "🌳",
  color: "#f97316",
  name: "সময়ের রক্ষক",
  subtitle: "The Time Keeper",
  tech: "Version Control — Git (Torvalds 2005), branching strategies (Git Flow, trunk-based), code review, PR workflow, monorepo vs polyrepo",
  spirit: "হিফয — সংরক্ষণ, প্রতিটি পরিবর্তনের ইতিহাস রক্ষা",
  secret: "Git = একটি টাইম মেশিন। প্রতিটি পরিবর্তন সংরক্ষিত। ভুল করলে ফিরে যাও। experiment করো — branch করো। কাজ না করলে ফেলে দাও।",
  recall: {
    q: " Git-এ merge এবং rebase-এর পার্থক্য কী?",
    qen: "What is the difference between merge and rebase in Git?",
    a: "Merge = দুটি branch যুক্ত করে, একটি merge commit তৈরি করে। Rebase = একটি branch-এর commit অন্যটির শেষে পুনঃস্থাপন করে — linear history।",
    aen: "Merge = joins two branches, creates a merge commit. Rebase = replays commits on top of another branch — linear history."
  },
  story: `<p class="scene-setting">তুমি একটি বই লিখছো। প্রতিদিন একটি কপি রাখছো — "draft_1.docx", "draft_2_final.docx", "draft_3_really_final.docx"। হাস্যকর কিন্তু সত্য — এটাই version control-এর প্রথম রূপ। Git হলো সেই প্রক্রিয়ার স্বয়ংক্রিয়, শক্তিশালী রূপ। প্রতিটি পরিবর্তন একটি snapshot — কে, কখন, কেন, কী বদলালো।</p>
<p class="scene-setting en">You're writing a book. Saving copies daily — "draft_1.docx", "draft_2_final.docx", "draft_3_really_final.docx". Funny but true — this is version control's primitive form. Git is the automated, powerful version of that process. Every change is a snapshot — who, when, why, what changed.</p>

<div class="callout info"><span class="co-icon">🌳</span><div><strong>Git (Torvalds ২০০৫):</strong> Linus Torvalds ২০০৫ সালে Git তৈরি করেছিলেন — মাত্র ১০ দিনে! Linux kernel development-এর জন্য। এটি distributed — প্রতিটি developer-এর কাছে সম্পূর্ণ history। কেন্দ্রীয় server নেই — যেকোনো দুটি clone একে অপরের সাথে sync করতে পারে।</p>
<p class="scene-setting en">Git (Torvalds 2005): Linus Torvalds created Git in 2005 — in just 10 days! For Linux kernel development. It's distributed — every developer has the full history. No central server — any two clones can sync.</div></div>

<div class="callout info"><span class="co-icon">🌿</span><div><strong>Branching Strategies:</strong><br>
<strong>Git Flow:</strong> main → develop → feature branches। release, hotfix branches। কাঠামোগত কিন্তু জটিল। enterprise।<br>
<strong>GitHub Flow:</strong> main + feature branches। PR → review → merge। সহজ, lightweight। startup।<br>
<strong>Trunk-Based Development:</strong> সবাই main-এ commit। feature flag দিয়ে নিয়ন্ত্রণ। দ্রুত deploy। Google, Facebook এটাই ব্যবহার করে।<br>
<strong>Release Flow (Microsoft):</strong> trunk-based + release branches।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>Core Git Operations:</strong><br>
<strong>commit:</strong> একটি snapshot সংরক্ষণ। প্রতিটি commit একটি unique hash।<br>
<strong>branch:</strong> একটি parallel সময়রেখা। experiment করো — মূল নিরাপদ।<br>
<strong>merge:</strong> দুটি branch যুক্ত করো। একটি merge commit তৈরি।<br>
<strong>rebase:</strong> commit-গুলো অন্য branch-এর শেষে সাজাও। linear history।<br>
<strong>cherry-pick:</strong> একটি নির্দিষ্ট commit অন্য branch-এ নাও।<br>
<strong>tag:</strong> একটি নির্দিষ্ট সংস্করণ চিহ্নিত করো — v1.0.0।</div></div>

<div class="callout info"><span class="co-icon">👀</span><div><strong>Code Review (Pull Request):</strong><br>
১. Feature branch-এ কোড লেখো<br>
২. Pull Request খোলো — "এই পরিবর্তন দেখো"<br>
৩. Reviewer পড়ে, মতামত দেয়, প্রশ্ন করে<br>
৪. লেখক ঠিক করে, push করে<br>
৫. Approve → merge<br><br>
Michael Fagan (১৯৭৬) — code inspection-এর জনক। তিনি প্রমাণ করেছিলেন: review করা কোডে ৬০% কম bug। আজ code review একটি industry standard।</div></div>

<div class="callout info"><span class="co-icon">📦</span><div><strong>Monorepo vs Polyrepo:</strong><br>
<strong>Monorepo:</strong> সব কোড এক repository। Google, Meta। সহজ sharing, atomic changes। কিন্তু বিশাল — tooling কঠিন।<br>
<strong>Polyrepo:</strong> প্রতিটি service আলাদা repo। সহজ ownership, ছোট। কিন্তু cross-repo change কঠিন।<br>
<strong>নির্বাচন:</strong> ছোট টিম → polyrepo। বড় টিম → monorepo (tooling সহ)।</div></div>

<div class="verse">وَقُل رَّبِّ زِدْنِي عِلْمًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং বলো — হে আমার রব, আমার জ্ঞান বৃদ্ধি করো।" — কুরআন ২০:১১৪</div>

<p class="scene-setting">এই আয়াত জ্ঞান বৃদ্ধির প্রার্থনা। Git-ও তেমন — প্রতিটি commit একটি শেখার রেকর্ড। কে কী শিখলো, কী ভুল করলো, কীভাবে ঠিক করলো। একটি ভালো commit history একটি জ্ঞানের ইতিহাস — শুধু কোড নয়, চিন্তার বিবর্তন।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>LedgerPilot workflow:</strong> feature branch off development → code → PR → review → merge → deploy। এটাই GitHub Flow। Book ৪ (System Design): microservices — প্রতিটি একটি repo বা monorepo-এর একটি package।</div></div>

<div class="secret-box">🌳 <strong>Git = টাইম মেশিন + সহযোগিতার ভিত্তি।</strong> Branch, commit, merge, rebase। Code review = গুণমানের কারিগর। Trunk-based দ্রুত, Git Flow কাঠামোগত। কিন্তু ভালো কোড ও ভালো process একত্রিত করলেও — সিস্টেমের কাঠামো কেমন? সেই আলোচনা আসবে পরের দরজায় — architecture patterns।</div>`,
  senior: {
    title: "Version Control এক নজরে",
    body: `<table class="kv-table"><tr><th>Concept</th><th>বিবরণ</th></tr>
<tr><td class="hl">Git</td><td>Torvalds ২০০৫ — distributed VCS</td></tr>
<tr><td class="hl">Commit</td><td>একটি snapshot — hash-identified</td></tr>
<tr><td class="hl">Branch</td><td>parallel সময়রেখা</td></tr>
<tr><td class="hl">Merge</td><td>দুটি branch যুক্ত — merge commit</td></tr>
<tr><td class="hl">Rebase</td><td>commit পুনঃসাজানো — linear history</td></tr>
<tr><td class="hl">Git Flow</td><td>main → develop → feature</td></tr>
<tr><td class="hl">Trunk-Based</td><td>সবাই main-এ, feature flag</td></tr>
<tr><td class="hl">Code Review</td><td>PR → review → approve → merge</td></tr></table>`
  }
});
