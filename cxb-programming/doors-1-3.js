// doors-1-3.js — Cloud X Berry Series Book 8: The Code Cathedral
// Source: Programming playlist (9 videos)
const doors = [];

doors.push({
  num: 1,
  icon: "🌍",
  color: "#e879f9",
  name: "ভাষার রাজত্ব ও কষ্টের মিটার",
  subtitle: "10 Languages of 2026 + Difficulty Meter",
  tech: "Go/Kotlin/Swift/TypeScript... job-market ranking; assembly→Haskell→Rust→C++→...→Python difficulty spectrum",
  spirit: "ইখতিয়ার — নিজের মানচিত্র নিজে বাছা",
  secret: "ভাষার দাম ঠিক হয় দুই বাজারে — ডেভেলপার-জনপ্রিয়তা আর চাকরির চাহিদা; আর কষ্টের মিটারে দুই মেরুর ভাষা কঠিন দুই কারণে — assembly যন্ত্রের খাতায় নেমে যায়, Haskell চিন্তার ধারা উল্টে দেয়।",
  recall: {
    q: "ভাষার র‍্যাংকিং কী দুটো জিনিস মেপে হিসেব হয়? Assembly আর Haskell — দুটোই কঠিন, কিন্তু কেন-কঠিন আলাদা কেন?",
    qen: "What two forces rank languages? Assembly and Haskell are both hard — why for opposite reasons?",
    a: "মাপকাঠি: ডেভেলপার-জনপ্রিয়তা + চাকরির চাহিদা (হায়ারিং-ডেটা, ইকোসিস্টেম, লিগ্যাসি-স্থিতি)। ২০২৬-এর তালিকায়: Go (ক্লাউড-নেটিভ, Docker/K8s-এর ভাষা), Kotlin (Android-এর অফিসিয়াল, Java-সংযোগ, কম-বয়লারপ্লেট), Swift (Apple-জগৎ), TypeScript...। Assembly কঠিন কারণ সে প্রায়-সরাসরি CPU-কে নির্দেশ দেয় — রেজিস্টার-মেমরি সরানো, প্রসেসর-আর্কিটেকচার বোঝা লাগে; অ্যাবস্ট্রাকশন প্রায় শূন্য। Haskell কঠিন অন্য কারণে — low-level নয়, বরং চিন্তার মডেলই বদলায়: pure functional, অপরিবর্তনীয় ভেরিয়েবল, higher-order ফাংশন, lazy evaluation, monad — ধাপ-চালানো নয়, ডেটার রূপান্তর বর্ণনা করতে হয়। মাঝে Rust (ownership/borrowing/lifetime-এর কড়া মেমরি-শৃঙ্খলা)।",
    aen: "Languages rank by developer popularity and hiring demand. Assembly is hard by descending to the processor; Haskell by flipping your mental model to pure transformations; Rust by strict ownership rules in between."
  },
  story: `<p class="scene-setting">প্রথম দরজায় দুই ভিডিও একসাথে প্রোগ্রামিং-জগতের ভূগোল আঁকে। প্রথমটা বাজারের মানচিত্র: ২০২৬-এ কোন ভাষা কেন রাজত্ব করছে — জনপ্রিয়তা আর চাকরির চাহিদার দুই-মুদ্রায় হিসেব। দ্বিতীয়টা কষ্টের স্পেকট্রাম: কঠিনতম থেকে বন্ধুত্তমের দিকে নেমে যাওয়া — আর প্রতিটা ধাপে প্রশ্ন: এই ভাষা কীসের জন্য এত কঠিন/সহজ?</p>
<p class="scene-setting en">Two videos draw the geography of programming: the market map of 2026's dominant languages, and the difficulty spectrum from hardest to friendliest — each step asking why.</p>
<div class="code-block">২০২৬-এর ভাষা-রাজ্য (১০ থেকে নামতে নামতে):
  GO — Google-এর সন্তান (২০০৯): ক্লাউড-ব্যাকএন্ডের
    জন্য জন্মানো — compiled, statically-typed,
    lightweight GOROUTINE-এ concurrency; Docker-
    Kubernetes-এর ভাষা হওয়াতেই DevOps-চাহিদা
  KOTLIN — JetBrains-এর, ২০১৭ থেকে Android-এর
    অফিসিয়াল; JVM-এ চলে, Java-র সাথে বিনা-
    ঘর্ষণে; বয়লারপ্লেট কম, পড়তে সহজ
  SWIFT — Apple-এর (২০১৪), Objective-C-র উত্তরসূরি;
    iOS/macOS-জগতের দরজা; নিরাপত্তা-নকশায় জন্ম
  TYPESCRIPT — JavaScript+প্রকার-নিয়ম; বড়
    কোডবেসে আস্থা
  (তালিকার ওপরে আরও: C/C++-লিগ্যাসি, Java-
  enterprise, Python-সর্বত্র, SQL-ডেটা, JS-ওয়েব)
  পাঠ: ভাষার দাম বাজারের — জনপ্রিয়তা×
  চাহিদা×ইকোসিস্টেম; ট্রেন্ড নয়, হায়ারিং-ডেটা
  দেখে বাছো।</div>
<div class="code-block">কষ্টের মিটার — শীর্ষ থেকে নামা:

ASSEMBLY (প্রায়-সর্বোচ্চ কষ্ট)
  CPU-র সাথে প্রায়-সরাসরি কথা: রেজিস্টারে-
  রেজিস্টারে ডেটা সরাও, মেমরি ছুঁয়ো, ধাপে
  ধাপে অপারেশন — দুই সংখ্যার যোগও কয়েক
  নির্দেশে; অ্যাবস্ট্রাকশন শূন্য, প্রসেসরের
  আর্কিটেকচার বুঝতেই হবে। ব্যবহার: embedded,
  firmware, performance-critical কোণ।

HASKELL (কষ্টের অন্য মেরু)
  কঠিন low-level হওয়ায় নয় — চিন্তাই বদলে
  দেয়: PURE FUNCTIONAL — প্রোগ্রাম মানে
  গাণিতিক ফাংশনের মোচড়, ধাপের সারি নয়;
  ভেরিয়েবল অপরিবর্তনীয়; higher-order ফাংশন,
  lazy evaluation, monad — "কীভাবে চালাবো" থেকে
  "ডেটার রূপান্তর বর্ণনা"য় স্থানান্তর।

RUST (মাঝ-উঁচুতে, আধুনিক কাঠিন্য)
  উচ্চ-পারফরম্যান্স+শক্ত-নিরাপত্তা; কঠিন
  OWNERSHIP-মডেলে: মেমরি কে চালাবে, কে
  ধার নেবে (borrowing), কতদিন বাঁচবে
  (lifetime) — ডেটা-প্রবাহ নিয়ে ভাবতে বাধ্য।

নিচে নামতে নামতে: C++ (ম্যানুয়াল মেমরি+বিশাল
  সুবিধা), তারপর Java/C#/JS, আর বন্ধুত্তমের
  আসনে Python — ইংরেজির মতো পড়া যায়।</div>
<div class="callout tip"><span class="co-icon">🌍</span><div><strong>বাছাই-বুদ্ধি:</strong> কষ্টের মিটার ভয় দেখাতে নয় — মানচিত্র দেখাতে: কোন ভাষা কোন কাজের দরজা, আর তার দাম কেন সেই দাম। প্রশ্ন সবসময় তিনটা: কোন জগৎ (web/mobile/cloud/systems)? কোন বাজার? কোন মাথা (ধাপ-চিন্তা না রূপান্তর-চিন্তা)?</div></div>
<div class="secret-box">🌍 ভাষার দাম দুই বাজারের — জনপ্রিয়তা আর চাহিদা; কষ্টের দুই সিঁড়ি — যন্ত্রে নামা আর চিন্তা উল্টানো; মানচিত্র চেনো, পথ নিজের।</div>`,
  senior: {
    title: "ভাষা-রাজ্য + কষ্ট-মিটার — দ্রুত গাইড",
    body: "<p><strong>র‍্যাংকিং-মুদ্রা:</strong> জনপ্রিয়তা+চাকরি-চাহিদা; ২০২৬: Go(ক্লাউড/Docker-K8s), Kotlin(Android/JVM), Swift(Apple), TS(টাইপড-ওয়েব)... <strong>কষ্ট-স্পেকট্রাম:</strong> Assembly(CPU-সরাসরি, অ্যাবস্ট্রাকশন-শূন্য) / Haskell(pure-functional, চিন্তা-মডেল-বদল) / Rust(ownership-borrowing-lifetime) / C++ → Python(বন্ধুত্তম)। <strong>বাছাই:</strong> জগৎ+বাজার+মাথা — তিন প্রশ্নে ভাষা।</p>"
  }
});

doors.push({
  num: 2,
  icon: "🧩",
  color: "#e879f9",
  name: "প্যাটার্নের চোখ",
  subtitle: "5 DSA Patterns That Solve 90% of Problems",
  tech: "Sliding window, two pointers, prefix sums(?), fast/slow pointers, hashmap frequency — pattern recognition over memorized solutions",
  spirit: "হিকমা — সমাধানের আগে চেনা",
  secret: "বেশিরভাগ কোডিং-সমস্যা নতুন নয় — গোটা কয়েক প্যাটার্নের ভিন্ন পোশাক; যে প্যাটার্ন চেনে, সে প্রথম লাইনের আগেই পথ দেখে — শিখতে হয় চোখ, উত্তর নয়।",
  recall: {
    q: "Sliding window কোন ধরনের সমস্যায়? Two pointers কীভাবে sorted তালিকায় জোড় খোঁজে?",
    qen: "When do you reach for sliding window? How do two pointers find pairs in a sorted list?",
    a: "Sliding window: লিস্টের পাশাপাশি-অংশ (continuous stretch) নিয়ে প্রশ্ন হলে — যেমন প্রতি ঘণ্টার ভিজিটরে সেরা ৩-ঘণ্টা: প্রথমে ৩টা যোগ একবার, তারপর জানালা সরলে যাওয়া-ঘণ্টা বাদ + আসা-ঘণ্টা যোগ — আগের কাজ পুনর্ব্যবহার, শূন্য থেকে নয়; ফিক্সড বা শর্তে বাড়ুন-কমুন দুই-রকমই। Two pointers: sorted তালিকায় টার্গেট-যোগফলের জোড় — শুরুতে এক কারসাজ বাঁয়ে, এক ডানে; যোগফল ছোট হলে বাঁ সরাও (বড় হবে), বড় হলে ডান সরাও (ছোট হবে) — sorted-ক্রম নিজেই বলে দেয় কোন পয়েন্টার চলবে। প্যাটার্ন-শিক্ষার নিয়ম: সমাধান মুখস্থ নয় — সমস্যার আকৃতি দেখে পথ চেনা।",
    aen: "Sliding window: questions over contiguous stretches — reuse the previous window's work instead of recomputing. Two pointers: in sorted data, small sum moves the left pointer, large sum moves the right. Learn the shapes, not the solutions."
  },
  story: `<p class="scene-setting">একই সমস্যার সামনে দুই মানুষ: প্রথমজন পরিষ্কার পল্লী ছাড়াই কোড লিখতে শুরু করে; দ্বিতীয়জন চায় — "এ তো আগে দেখা প্যাটার্ন!" শিক্ষকের ভিডিও দ্বিতীয়জনের চোখ বানায়: পাঁচটি বিগিনার-বান্ধব প্যাটার্ন, সাদামাটা উদাহরণে, আসল কোডে — কারণ সমস্যাগুলো নতুন নয়, পুরনো প্যাটার্নের নতুন পোশাক।</p>
<p class="scene-setting en">Two people face the same problem: one starts typing without a plan, the other recognizes a pattern before the first line. This video builds the second person's eye — five beginner-friendly patterns in plain examples.</p>
<div class="code-block">১. SLIDING WINDOW — চলমান জানালা
  সংকেত: পাশাপাশি-অংশের প্রশ্ন
    (ক্রমাগত স্ট্রেচ, জানালা সরতে থাকে)
  উদাহরণ: প্রতি-ঘণ্টার ভিজিটরে সেরা ৩-ঘণ্টা
  বোকা পথ: প্রতিটা ৩-ঘণ্টার দল নতুন করে যোগ
  চালাক পথ: প্রথমবার যোগ করো; জানালা ১ ঘণ্টা
    সরলে — বেরিয়ে-যাওয়া ঘণ্টা বাদ,
    ঢোকা-ঘণ্টা যোগ; পুরনো কাজ পুনর্ব্যবহার!
  আকার: ফিক্সড (৩) বা শর্তমাফিক বাড়তি-কমতি

২. TWO POINTERS — দুই আঙুলের নাচ
  সংকেত: sorted তালিকায় জোড়/তুলনা
  উদাহরণ: দামের তালিকায় টার্গেট-যোগফলের জোড়
  নিয়ম: বাঁ-শেষ দুই আঙুল; যোগফল ছোট →
    বাঁ এগোও (সংখ্যা বাড়বে); বড় → ডান পিছোও
  sorted-ক্রম নিজেই দিকনির্দেশক — অন্ধ খোঁজা নয়

৩-৫. বাকি প্যাটার্নের সারমর্ম (একই চোখে):
  FAST/SLOW — লিস্টে লুপ ধরা: দ্রুত-ধীর দুই
    পয়েন্টার কখন মিলবে, সেটাই উত্তর
  HASHMAP-গণনা — কে কতবার: পাসে-পাসে
    হিসাব জমা, জিজ্ঞেসা এলেই মুহূর্তে উত্তর
  PREFIX — জমা-হিসেব আগেই রাখো, যেকোনো
    অংশের যোগফল বিয়োগে বের করো</div>
<div class="callout tip"><span class="co-icon">🧩</span><div><strong>প্যাটার্ন-দর্শন:</strong> ৯০% সমস্যা মানে মুখস্থ-সমাধানের স্টক নয় — সংকেত-চেনার চোখ: "পাশাপাশি-অংশ?" → window; "sorted-জোড়?" → pointers; "কে-কতবার?" → hashmap। <strong>প্রশ্ন পড়ে প্যাটার্নের নাম বলতে পারলেই অর্ধেক সমাধান হয়ে গেছে।</strong></div></div>
<div class="secret-box">🧩 সমস্যা নতুন পোশাকে আসে, প্যাটার্ন পুরনো — জানালা সরাও, আঙুল নাচাও, হিসাব জমাও; চোখই আসল অস্ত্র, স্মৃতিবৃত্তি নয়।</div>`,
  senior: {
    title: "৫ DSA প্যাটার্ন — দ্রুত গাইড",
    body: "<p><strong>সংকেত→প্যাটার্ন:</strong> contiguous-stretch→sliding window (পুরনো-কাজ পুনর্ব্যবহার: বাদ+যোগ); sorted-জোড়→two pointers (ছোট-যোগ→বাঁ-এগো, বড়→ডান-পিছো); লুপ-শনাক্ত→fast/slow; গণনা-প্রশ্ন→hashmap-জমা; অংশ-যোগফল→prefix। <strong>নিয়ম:</strong> সমাধান মুখস্থ নয় — আকৃতি চেনো; প্রথম লাইনের আগে পথ দেখো।</p>"
  }
});

doors.push({
  num: 3,
  icon: "⚙️",
  color: "#e879f9",
  name: "জাদুমন্ত্রের পেছনের যন্ত্র",
  subtitle: "You're Not Bad at Coding — What Really Happens",
  tech: "Code → compiler/interpreter → machine code; app→OS→hardware chain; CPU/RAM/storage trio",
  spirit: "ইলমে ইয়াকিন — অনুমান নয়, শৃঙ্খল দেখে জানা",
  secret: "কম্পিউটার শূন্য-এক ছাড়া কিছু বোঝে না — তোমার কোড যায় অনুবাদকের (compiler/interpreter) কাছে, অ্যাপ কথা বলে OS-এর সাথে, OS হুকুম চালায় হার্ডওয়্যারে — ফল ফিরে আসে একই সিঁড়ি বেয়ে; শৃঙ্খলটা দেখলে কোড আর জাদু মনে হয় না, সিস্টেম মনে হয়।",
  recall: {
    q: "print hello লিখলে স্ক্রিনে আসা পর্যন্ত পেছনের শৃঙ্খলটা বলো। এই বোঝা কেন দরকার?",
    qen: "Trace the chain from print hello to the screen. Why does this understanding matter?",
    a: "তুমি লেখো কোড (Python/JS/Java) → কম্পিউটার সেটা বোঝে না, বোঝে শুধু machine code (০/১ — বিদ্যুৎ চলছে/নেই) → compiler/interpreter তোমার মানব-বান্ধব কোড অনুবাদ করে মেশিন-নির্দেশে → তবু সরাসরি হার্ডওয়্যারে নয়: অ্যাপ কথা বলে OS-এর সাথে (ম্যানেজার), OS সমন্বয় করে হার্ডওয়্যারের সাথে → হার্ডওয়্যার কাজ করে → ফল একই সিঁডি বেয়ে ফেরে। দরকার কারণ না-বোঝা কোড = জাদুমন্ত্র — ভাঙলে অন্ধকার; শৃঙ্খল জানলে ডিবাগিং-ও সিস্টেম-চিন্তা: কোন স্তরে ভাঙলো, সেখানেই খোঁজো (কোড? অনুবাদ? OS? হার্ডওয়্যার?)।",
    aen: "Code → compiler/interpreter → machine code; app talks to the OS, the OS to the hardware, and results climb back. Without this chain code is a magic spell; with it, debugging becomes layered reasoning."
  },
  story: `<p class="scene-setting">"তুমি কোডিং-এ খারাপ না — তুমি শুধু কখনো শেখোইনি কোড লিখলে পেছনে কী হয়।" শিক্ষকের এই কথাই ভিডিওটার মেরুদণ্ড: বেশিরভাগ শিক্ষার্থী সিনট্যাক্স টাইপ করে, কিন্তু যন্ত্র কী করছে তা জানে না — তাই কোড বোঝে যায় এলোমেলো জাদুমন্ত্র। এই দরজা জাদু খুলে দেখায় ভেতরের গিয়ার।</p>
<p class="scene-setting en">"You're not bad at coding — you just never learned what happens when you write it." The video's spine: typing syntax without knowing the machine's work makes code feel like random magic. This door opens the casing.</p>
<div class="code-block">সবচেয়ে বড় ভুল ধারণা:
  তুমি Python/JavaScript/Java লেখো —
  কম্পিউটার সেগুলো স্বাভাবিকভাবে বোঝে না।
  হার্ডওয়্যার বোঝে একটাই ভাষা: MACHINE CODE —
  শূন্য আর এক, বিদ্যুৎ চলছে কি চলছে না।

তাহলে print hello লিখলে?
  ১. কোড যায় অনুবাদকের কাছে — COMPILER বা
     INTERPRETER: মানব-বান্ধব নির্দেশ →
     মেশিন-নির্দেশ
  ২. অনুবাদিত প্রোগ্রামও সরাসরি লোহাকে ছোঁয়ে না —
     অ্যাপ কথা বলে OPERATING SYSTEM-এর সাথে
     (কম্পিউটারের ম্যানেজার)
  ৩. OS সমন্বয় করে HARDWARE-এর সাথে
  ৪. হার্ডওয়্যার কাজ করে
  ৫. ফল ফিরে আসে একই সিঁড়ি বেয়ে:
     হার্ডওয়্যার → OS → অ্যাপ → তোমার চোখে</div>
<div class="diagram">
<div class="diag-title">কোড→যন্ত্র শৃঙ্খল — শিক্ষকের চিত্র</div>
<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L0,10 L10,5 z" fill="#e879f9"/></marker>
  </defs>
  <rect class="cell" x="15" y="45" width="95" height="55" rx="10"/>
  <text class="lbl" x="62" y="68" text-anchor="middle">তোমার কোড</text>
  <text class="lbl-sm" x="62" y="86" text-anchor="middle">print hello</text>
  <rect class="cell-hot" x="140" y="45" width="115" height="55" rx="10"/>
  <text class="lbl-hot" x="197" y="68" text-anchor="middle">COMPILER /</text>
  <text class="lbl-hot" x="197" y="86" text-anchor="middle">INTERPRETER</text>
  <rect class="cell-cyan" x="285" y="45" width="105" height="55" rx="10"/>
  <text class="lbl-cyan" x="337" y="68" text-anchor="middle">OPERATING</text>
  <text class="lbl-cyan" x="337" y="86" text-anchor="middle">SYSTEM</text>
  <rect class="cell-leaf" x="420" y="45" width="125" height="55" rx="10"/>
  <text class="lbl-leaf" x="482" y="68" text-anchor="middle">HARDWARE</text>
  <text class="lbl-sm" x="482" y="86" text-anchor="middle">CPU·RAM·Storage</text>
  <line class="edge" x1="110" y1="72" x2="138" y2="72" marker-end="url(#arrowF)"/>
  <line class="edge" x1="255" y1="72" x2="283" y2="72" marker-end="url(#arrowF)"/>
  <line class="edge" x1="390" y1="72" x2="418" y2="72" marker-end="url(#arrowF)"/>
  <text class="lbl-sm" x="280" y="125" text-anchor="middle">ফল ফেরে একই সিঁড়ি বেয়ে — আর প্রতিটা ভাঙন এই স্তরগুলোর কোনো একটাতেই বসে</text>
</svg>
<div class="diag-cap">জাদু নয় — সিস্টেম; স্তর চিনলে ভাঙাও স্তরে স্তরে খোঁজা।</div>
</div>
<div class="callout tip"><span class="co-icon">⚙️</span><div><strong>ডিবাগ-দৃষ্টি:</strong> এরপর কিছু ভাঙলে অন্ধের মতো ঘাবড়াই না — শৃঙ্খল ধরে জিজ্ঞেস করো: কোডে ভুল? অনুবাদ-স্তরে (টাইপ/সিনট্যাক্স)? OS-র অনুমতি/রিসোর্স? হার্ডওয়্যারের সীমা? — <strong>প্রতিটা ভাঙনের একটা ঠিকানা আছে।</strong></div></div>
<div class="secret-box">⚙️ কোড→অনুবাদ→OS→লোহা→ফেরত সিঁড়ি — জাদুমন্ত্র ভাঙলে যা থাকে তার নাম সিস্টেম; সিস্টেম চেনা মানেই ভাঙা মেরামত করতে জানা।</div>`,
  senior: {
    title: "কোড→যন্ত্র শৃঙ্খল — দ্রুত গাইড",
    body: "<p><strong>শৃঙ্খল:</strong> সোর্স-কোড → compiler/interpreter (মানব-ভাষা→machine code ০/১) → অ্যাপ OS-কে বলে → OS হার্ডওয়্যার চালায় → ফল উল্টো-সিঁড়িতে ফেরে। <strong>কেন:</strong> না-দেখা শৃঙ্খল = জাদুমন্ত্র-শেখা; দেখা শৃঙ্খল = স্তর-ভিত্তিক ডিবাগ (কোড/অনুবাদ/OS/লোহা)। <strong>মন্ত্র:</strong> প্রতিটা ভাঙনের ঠিকানা এই স্তরগুলোর একটাতে।</p>"
  }
});
