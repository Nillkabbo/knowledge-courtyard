// doors-4-6.js — Cloud X Berry Series Book 8: The Code Cathedral
// Doors 4-6 (continued from doors-1-3.js — no const redeclaration)

doors.push({
  num: 4,
  icon: "📊",
  color: "#e879f9",
  name: "বৃদ্ধির হিসাব — Big O-র জন্মকথা",
  subtitle: "What Separates Vibe Coders From Real Coders",
  tech: "Why timing fails (machine-dependent), counting steps, growth rate over constants (5n+3 → O(n)), Big O as machine-independent comparison",
  spirit: "মিযান — সংখ্যার ন্যায়ে তুলা",
  secret: "ঘড়ি দিয়ে অ্যালগরিদম মাপলে মাপা হয় যন্ত্রও — তাই সময় নয়, ধাপ গোনা হয়; আর গণনার গুণিতক-ভিন্নতা (5n+3 বনাম 4n+3) ঝেড়ে ফেলে যা থাকে — বৃদ্ধির হার, n-এর সাথে কেমন দ্রুত বাড়ে — সেটাই Big O; মুখস্ত নয়, উৎপন্ন করা যায়।",
  recall: {
    q: "দুই অ্যালগরিদমের সময় মেপে তুলনা করা যায় না কেন? 5n+3 থেকে O(n) কীভাবে আসে?",
    qen: "Why can't you compare algorithms by timing? How does 5n+3 become O(n)?",
    a: "সময়-মাপ একসাথে দুটো জিনিস মাপে — অ্যালগরিদম আর যে-মেশিনে চালানো হলো; মেশিন বদলালে বিজয়ীও বদলে যায় (ল্যাপটপে A জিতলো, অন্যটায় B) — আমরা যন্ত্র মাপতে চাই না, অ্যালগরিদম। তাই ধাপ গোনা হয়: assignment/তুলনা/পাটিগণিত/অ্যারে-পড়া = ১ ধাপ ধরে যোগফল বেরোয় (লুপ-যোগফলে 5n+3)। কিন্তু সেই 5 কোনো চিরসত্য নয় — গণনার রীতির ধাঁচ (কেউ 4n+3 পাবে, কেউ 6n+2); যেটায় সবাই একমত তা একটাই: রৈখিক-গুণিতক×n + ধ্রুবক — অর্থাৎ বৃদ্ধির আকার। ধ্রুবক-গুণিতক ও ছোট-পদ (n বড় হলে অর্থহীন) ফেলে দিলে থাকে O(n) — যন্ত্র-নিরপেক্ষ, গণনা-রীতি-নিরপেক্ষ খাঁটি বৃদ্ধি-হার।",
    aen: "Timing measures the machine along with the algorithm, so winners flip across machines. Count steps instead; the leading multiplier is a counting convention, so discard constants and small terms — what survives, the growth shape, is Big O: machine-independent comparison."
  },
  story: `<p class="scene-setting">দুটো অ্যালগরিদম, একই সমস্যা, দুটোই সঠিক। ল্যাপটপে প্রথমটা ২ সেকেন্ড, দ্বিতীয়টা ৫ — প্রথমটাই ভালো? অন্য মেশিনে প্রথমটা ৪, দ্বিতীয়টা ৩ — এবার দ্বিতীয়টা ভালো?! কোনোটাই বদলায়নি, বদলেছে শুধু মেশিন। শিক্ষকের ভিডিও এখান থেকে Big O-কে মুখস্থ নয়, <strong>উৎপন্ন</strong> করে — vibe-coder আর আসল কোডারের ফারাক এখানেই দেখা দেয়।</p>
<p class="scene-setting en">Two correct algorithms flip their winner when the machine changes. The video derives Big O instead of memorizing it — this is where vibe coders and real coders part ways.</p>
<div class="code-block">ধাপ ১ — ঘড়ি ফেলে দাও:
  সময়-মাপ = অ্যালগরিদম + মেশিন একসাথে মাপা;
  উদ্দেশ্য শুধু অ্যালগরিদম — তাই সময় নয়, গণনা।

ধাপ ২ — কী গণনা করছি? (গণনা-মডেল ঠিক করো)
  ১ ধাপ = একটা assignment / একটা তুলনা /
  একটা পাটিগণিত / অ্যারে থেকে একটা পড়া

ধাপ ৩ — আসল গণনা (অ্যারে-যোগফল, আকার n):
  total = 0            → ১ assignment
  লুপ-শর্ত যাচাই        → n+১ তুলনা
  i বৃদ্ধি             → n বার
  লুপের ভেতরে          → পড়া+যোগ+assign = ৩×n
  return               → ১
  মোট = ৫n + ৩

ধাপ ৪ — সবচেয়ে গোপন সত্য (বেশিরভাগ ব্যাখ্যা যা লুকায়):
  সেই ৫ অ্যালগরিদমের ধর্ম নয় — গণনার রীতির!
  অ্যারে-পড়া ফ্রি ধরলে 4n+3; লুপ-হিসাব অন্যরকম
  হলে 6n+2 — তুমি-আমি সংখ্যা নিয়ে ঝগড়া করবো।
  কিন্তু যা নিয়ে কেউ ঝগড়া করবে না:
    সবাই পাচ্ছে (কিছু-একটা)×n + ধ্রুবক।

ধাপ ৫ — বৃদ্ধির আকারই রাখো:
  ধ্রুবক-গুণিতক ঝেড়ে দাও, ছোট-পদ ঝেড়ে দাও
  (n বড় হলে ৩-এর মতো সংখ্যা অর্থই রাখে না)
  → O(n): n দ্বিগুণ হলে কাজও প্রায় দ্বিগুণ —
    যন্ত্র যা-ই হোক, রীতি যা-ই হোক।</div>
<div class="callout tip"><span class="co-icon">📊</span><div><strong>vibe-coder বনাম আসল কোডার:</strong> vibe-coder টাইপ করে, চললে খুশি, ধীর হলে মেশিনকে দোষ দেয়; আসল কোডার জিজ্ঞেস করে — আমার কোড কেমন হারে বাড়ে? n হাজারে গেলে কী হবে? <strong>Big O শেখা মানে অঙ্ক মুখস্থ নয় — এই জিজ্ঞাসার অভ্যাস।</strong></div></div>
<div class="secret-box">📊 ঘড়ি যন্ত্র মাপে, ধাপ-গণনা অ্যালগরিদম; গুণিতক-মতভেদ ঝেড়ে বাকি যা — বৃদ্ধির আকার, তার নাম Big O।</div>`,
  senior: {
    title: "Big O — দ্রুত গাইড",
    body: "<p><strong>জন্ম:</strong> সময়-মাপ মেশিন-নির্ভর → ধাপ-গণনা (assignment/তুলনা/পাটিগণিত/অ্যারে-পড়া=১) → মোট 5n+3-জাতীয় → গুণিতক=গণনা-রীতির-ধাঁচ (ভিন্নমত সম্ভব) → ধ্রুবক+ছোট-পদ বাদ → <strong>O(n)=বৃদ্ধি-আকার</strong> (যন্ত্র-ও-রীতি-নিরপেক্ষ)। <strong>প্রশ্ন-অভ্যাস:</strong> n দ্বিগুণ হলে কাজ কতগুণ? — উত্তরই ক্রম।</p>"
  }
});

doors.push({
  num: 5,
  icon: "📚",
  color: "#e879f9",
  name: "গ্রন্থাগারের সঞ্চয়",
  subtitle: "10 Programming Books That Turn Coders Into Engineers",
  tech: "Code Complete, Building Microservices, Clean Code, Refactoring + the rest of the career-shaping canon",
  spirit: "রিসালা — যারা আগে গেছেন তাদের চিঠি",
  secret: "কোডার ইঞ্জিনিয়ার হয় চর্চায়, আর চর্চার মানচিত্র আগের প্রজন্মের গ্রন্থে — নির্মাণের অভ্যাস (Code Complete), পড়ার শিল্প (Clean Code), পুরনো কোড না-ভেঙে উন্নতি (Refactoring), বিভাজিত সিস্টেমের শাসন (Microservices); বিতর্ক-সত্ত্বেও পাঠ করার মতো, কারণ আলোচনাই প্রভাবের প্রমাণ।",
  recall: {
    q: "Clean Code সম্পর্কে বিতর্ক থাকা সত্ত্বেও কেন পড়া হয়? Refactoring বইটি কোন বাস্তবতার উত্তর?",
    qen: "Why read Clean Code despite the debates? What reality does Refactoring answer?",
    a: "Clean Code: ইতিহাসের সবচেয়ে বিখ্যাত প্রোগ্রামিং-বইগুলোর একটা — পড়া-সহজ, রক্ষণ-সহজ কোডের শিল্প; কেউ পুরোপুরি একমত, কেউ অংশ-সমালোচক — কিন্তু প্রায় সবাই পড়েছে/শুনেছে; সেই আলোচনাই প্রভাবের মাপ; কোডিং-স্টাইল গড়ার সময়ে পাঠ-মূল্য অপরিসীম। Refactoring-এর বাস্তবতা: আসল কাজে সবসময় নতুন কোড লেখা পড়ে না — বেশিরভাগ সময় চলমান সিস্টেম না-ভেঙে উন্নত করা; বইটি সেই শিল্পের হাতে-কলমে পাঠ।",
    aen: "Clean Code stays essential because the debate itself proves its impact on coding style. Refactoring answers the real-world truth: most work improves existing systems without breaking them."
  },
  story: `<p class="scene-setting">"Best programming books" খুঁজলে ৫০টা সুপারিশ আর বিভ্রান্তি — শিক্ষক বেছে নেন ১০টা, যেগুলো ডেভেলপাররা বারবার সুপারিশ করে, আধুনিক ইঞ্জিনিয়ারিং-এ এখনো টেকে, আর ক্যারিয়ারের বিভিন্ন ধাপে বিভিন্ন বই ধরে রাখে। এই দরজায় সিরিজের বাকি সব প্রসঙ্গ — C#/.NET, JS-কোর, DSA-প্রয়োজন — এক মালায় গাঁথা হয় গ্রন্থের সঞ্চয়ে।</p>
<p class="scene-setting en">Fifty confusing recommendations distilled to ten that developers keep recommending and that still hold in modern engineering — this door strings the series' remaining threads into a library's treasure.</p>
<div class="code-block">গ্রন্থাগারের ১০ সঞ্চয় (১০ থেকে নামতে):
  ১০. CODE COMPLETE — Steve McConnell:
      সফটওয়্যার-নির্মাণের হাতের বই: ডিবাগ,
      সাজানো, নামকরণ, রোজকার অভ্যাস;
      শুরুর দিনের ভিত্তি-গ্রন্থ
  ৯. BUILDING MICROSERVICES — Sam Newman:
      সিস্টেম বড় হলে ভাগ হয় — সেই ভাগের শাসন,
      যোগাযোগ, দল-কাঠামোর প্রভাব
      (System Design-বইয়ের পাঠের গ্রন্থ-রূপ!)
  ৮. CLEAN CODE — Robert C. Martin:
      পড়া-সহজ কোডের শিল্প; সবচেয়ে আলোচিত,
      বিতর্কিত-ও — কিন্তু প্রায় সবাই পড়েছে;
      স্টাইল গড়ার বয়সে আবশ্যক
  ৭. REFACTORING — Martin Fowler:
      বাস্তব কাজ = পুরনো সিস্টেম না-ভেঙে উন্নতি;
      সেই শিল্পের ম্যানুয়াল
  (আর তালিকায় ওপরে উঠতে: ডিজাইন-প্যাটার্ন,
      অ্যালগরিদম-প্রাইমার, প্র্যাগম্যাটিক-চিন্তা,
      ক্যারিয়ার-পরিণতির বই — প্রতিটা
      আরেক ধাপের সিঁড়ি)

এই দরজার সঙ্গী তিন প্রসঙ্গ (একই মালায়):
  C#/.NET — ভাষা নয়, প্ল্যাটফর্ম বোঝা:
    C# পরিষ্কার ভাষা, .NET তার নিচের পুরো
    প্ল্যাটফর্ম — runtime, লাইব্রেরি, compiler:
    ফাইল-তারিখ-টেক্সট-ওয়েব-DB-নিরাপত্তা সব
    তৈরি; COMPILE TIME (বন্ধু — ভুল শুরুতেই
    ধরে) বনাম RUNTIME (প্রোগ্রাম চলার মুহূর্ত)
    প্রথম দিনেই জেনে রাখো
  JS-কোর — production ভাঙলে যা লাগে:
    ফাংশন (ইনপুট→লজিক→আউটপুট — আসল
    সিস্টেমের মূল একক), const/let-নিয়ম,
    ডেটা-টাইপ, async-শৃঙ্খলা — ভেতরটা
    বুঝলে ভাঙাও পড়ে যায়
  DSA-প্রয়োজন — ডেটা এলোমেলো থাকে না:
    Netflix-এ সার্চ (দ্রুত-খোঁজায় সাজানো), ট্রেলার-
    পাতা (একসাথে-লোডের গুছ), পূর্ণ-সিনেমা (বড়-
    ফাইলের ব্যবস্থা) — ব্যবহার ভিন্ন, তাই সাজানো
    ভিন্ন; ডেটা-স্ট্রাকচার মানে ব্যবহার-মাফিক গোছ</div>
<div class="callout tip"><span class="co-icon">📚</span><div><strong>পাঠ-ক্রমের বুদ্ধি:</strong> শুরুতে Code Complete-জাতীয় অভ্যাস-গ্রন্থ, মাঝে Clean Code+Refactoring (পড়া-ও-সুরক্ষিত-বদল), পরে Microservices+ডিজাইন-গ্রন্থ (বড় সিস্টেমের শাসন) — <strong>বইগুলো ক্যারিয়ারের ধাপের মানচিত্র, কেনার-তালিকা নয়।</strong></div></div>
<div class="secret-box">📚 কোডার থেকে ইঞ্জিনিয়ারের রাস্তা গ্রন্থ দিয়ে বোঝা নয় — গ্রন্থ মানচিত্র দেয়, হাঁটা তোমার; ভাষা-প্ল্যাটফর্ম-কোর-ডেটা চার সুতোয় গাঁথা সেই পথ।</div>`,
  senior: {
    title: "১০ গ্রন্থ + সঙ্গী-প্রসঙ্গ — দ্রুত গাইড",
    body: "<p><strong>সঞ্চয়:</strong> Code Complete (নির্মাণ-অভ্যাস), Building Microservices (বিভাজিত-শাসন), Clean Code (পাঠযোগ্যতা; বিতর্ক=প্রভাব), Refactoring (না-ভেঙে-উন্নতি) + ডিজাইন/অ্যালগরিদম/প্র্যাগম্যাটিক-গ্রন্থ। <strong>সঙ্গী:</strong> C#≠.NET (ভাষা বনাম প্ল্যাটফর্ম; compile-time-বন্ধু বনাম runtime), JS-কোর (ফাংশন/const-let/async), DSA-যুক্তি (ব্যবহার-মাফিক সাজানো)। <strong>নিয়ম:</strong> ধাপ-মাফিক পাঠ, তালিকা-জমানো নয়।</p>"
  }
});

doors.push({
  num: 6,
  icon: "⌨️",
  color: "#f5d0fe",
  name: "কারিগরের সমাপ্তি",
  subtitle: "Vibe থেকে Craft — পূর্ণ যাত্রার সমাপ্তি",
  tech: "The full arc: languages→patterns→machine→growth→books = engineer's eye",
  spirit: "ইহসান — কাজটা যেন দেখা যায়",
  secret: "ভাষার তালিকা, প্যাটার্নের চোখ, যন্ত্রের শৃঙ্খল, বৃদ্ধির হিসাব, গ্রন্থের মানচিত্র — পাঁচটা দরজা মিলে বদলায় একটাই জিনিস: কোড দেখার চোখ; vibe-coder টাইপ করে ভরসা রাখে, কারিগর বোঝে এবং বোঝে বলে।",
  recall: {
    q: "এই বইয়ের পাঁচটা দরজা এক বাক্যে কী বদলায়? পরের ধাপে কী করবে?",
    qen: "What do the five doors change in one sentence? What's the next step?",
    a: "এক বাক্যে: কোড জাদুমন্ত্র থেকে সিস্টেম হয়ে ওঠে — ভাষা বাজার-মাফিক বাছা হয় (D1), সমস্যা প্যাটার্নে পড়ে (D2), কোড→compiler→OS→হার্ডওয়্যার শৃঙ্খল চোখে ভাসে (D3), বৃদ্ধি-হার মাপা যায় যন্ত্র ছাড়াই (D4), আর গ্রন্থ-মানচিত্র দীর্ঘ পথ দেখায় (D5)। পরের ধাপ: একটা ভাষা বেছে প্যাটার্ন-চর্চা (D2-এর পাঁচটা নিজে কোডে খাটাও), Big O-জিজ্ঞাসা নিজের কোডে ঢোকাও (n দ্বিগুণ হলে?), আর একটা গ্রন্থ ধরো ধাপ-মাফিক।",
    aen: "One sentence: code stops being a magic spell and becomes a system you can see. Next: one language, patterns practiced in real code, growth questions in your own code, one book per stage."
  },
  story: `<p class="scene-setting">শেষ দরজায় ক্যাথেড্রালের ছাদ থেকে পুরো নকশা দেখা যায়। পাঁচটা দরজা পেরোনো পথ্যিক আর সে-ই নয় যে প্রথম দিনে ঢুকেছিল: ভাষার নাম মুখস্থ করা শিক্ষার্থী এখন জানে কোন ভাষা কোন দরজা, সমস্যার আকৃতি দেখে প্যাটার্ন চেনে, কোডের পেছনে যন্ত্রের শৃঙ্খল দেখতে পায়, বৃদ্ধির হিসাব জিজ্ঞেস করে, আর গ্রন্থের মানচিত্রে নিজের ধাপ চেনে।</p>
<p class="scene-setting en">From the cathedral's roof the whole design shows: the one who entered memorizing language names now reads shapes, chains, growth, and maps — the vibe coder has become a craftsman.</p>
<div class="code-block">পাঁচ দরজার সঞ্চয় — এক নজরে:

D1 ভাষা-রাজ্য → বাছাই-বুদ্ধি: জগৎ+বাজার+মাথা
D2 প্যাটার্ন-চোখ → সংকেত দেখে পথ চেনা
D3 যন্ত্র-শৃঙ্খল → জাদু নয়, স্তরে স্তরে সিস্টেম
D4 বৃদ্ধি-হিসাব → Big O জিজ্ঞাসা: n দ্বিগুণ হলে?
D5 গ্রন্থ-মানচিত্র → ধাপ-মাফিক পাঠ, তালিকা নয়

আর সব দরজার নিচে এক ভিত্তি:
  প্রোগ্রামিং শেখা মানে টাইপ করা নয় —
  বোঝা; বোঝার প্রমাণ প্রশ্নে: যে প্রশ্ন করতে
  জানে, কোড তার কাছে স্বীকার করে নিজের সত্য।</div>
<div class="callout tip"><span class="co-icon">🏁</span><div><strong>সিরিজের পরের প্রাঙ্গণ:</strong> এই বইয়ের পাশে দাঁড়িয়ে আছে সিরিজের বাকি ক্যাথেড্রালগুলো — Linux-এর টার্মিনাল (Book ৩), নেটওয়ার্কের দুর্গ (Book ৪), নীলনকশা (Book ৫), ডেটার ভাণ্ডার (Book ৬), মেঘের কারখানা (Book ৭) — প্রতিটা এই কারিগরের হাতে আরেকটা যন্ত্র। <strong>শেষ কথা: vibe থেকে craft-এর দূরত্ব পাঁচ দরজা নয় — পাঁচটা প্রশ্নের অভ্যাস, আর সে অভ্যাস আজ থেকেই।</strong></div></div>
<div class="secret-box">⌨️ টাইপ করা নয়, বোঝা — ভাষা বাছো, প্যাটার্ন চেনো, শৃঙ্খল দেখো, বৃদ্ধি মাপো, গ্রন্থ মানচিত্রে হাঁটো; কারিগরের ক্যাথেড্রাল প্রশ্নে গাঁথা।</div>`,
  senior: {
    title: "সমাপ্তি-সঞ্চয় — দ্রুত গাইড",
    body: "<p><strong>বৃত্ত:</strong> ভাষা-বাছাই → প্যাটার্ন-চোখ → যন্ত্র-শৃঙ্খল → Big O-জিজ্ঞাসা → গ্রন্থ-মানচিত্র = কোড জাদু→সিস্টেম। <strong>অভ্যাস-রূপ:</strong> নিজের কোডে প্রতিদিন তিন প্রশ্ন — কোন প্যাটার্ন? কোন স্তরে ভাঙবে? বৃদ্ধি-হার কত? <strong>পরের প্রাঙ্গণ:</strong> সিরিজের বাকি বইগুলো এই চোখে পুনঃপাঠ।</p>"
  }
});
