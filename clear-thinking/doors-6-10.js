// ════════════════════════════════════════
// যুক্তির তাঁত — DOORS 6-10
// The Loom of Reason: Problem Solving → Synthesis
// ════════════════════════════════════════

// ══ DOOR 6: POLYA'S HOW TO SOLVE IT ══
doors.push({
  num:6, icon:"✂️", color:"#6366f1", name:"দরজির ছুরি",
  subtitle:"The Tailor's Shears", tech:"Polya's Four-Step Problem Solving",
  spirit:"তাফাক্কুর — গভীরভাবে চিন্তা করা, পদ্ধতিগত পরিশ্রম",
  secret:"প্রতিটা সমস্যা একটা পোশাক — সে শরীরে ফিট করে কিনা আগে বুঝতে হয়। পলিয়ার চার ধাপ: বুঝো → পরিকল্পনা করো → বানাও → ফিরে তাকাও। হালিমা একটা জামা বানানোর আগে মাপে নেন, প্যাটার্ন কাটেন, সেলাই করেন, ফিট দেখেন। আর সবচেয়ে গুরুত্বপূর্ণ — সেম-রিপার। ভুল হবেই। সেম-রিপার থাকে বলেই ভুল শুধরে নেওয়া যায়। যে ভুল করতে ভয় পায়, সে শেখে না। ধাপে ধাপে এই গভীর ভাবনার নামই তাফাক্কুর।",
  recall:{
    q:"হালিমা কেন বললেন 'সমস্যা বুঝতে পারা সমাধানের অর্ধেক' — আর কেন তিনি প্রতিটা জামার সাথে সেম-রিপার রাখেন?",
    qen:"Why did Halima say 'understanding the problem is half the solution' — and why does she keep a seam-ripper with every garment?",
    a:"কারণ বেশিরভাগ ভুল হয় শুরুতে — সমস্যাটা ঠিক না বুঝে সমাধানে ঝাঁপ দেওয়া। পলিয়া বলেছেন প্রথম ধাপ — বুঝো। সমস্যাটা কী চায়? কী দেওয়া আছে? কী বাধা? আর সেম-রিপার — কারণ ভুল অনিবার্য। সেলাই ভুল হলে খুলে আবার করতে হয়। কোডেও তাই — git revert, undo, refactor। যে ভুলকে ভয় পায় সে ঝুঁকি নেয় না, আর যে ঝুঁকি নেয় না সে শেখে না।",
    aen:"Because most mistakes happen at the start — jumping to solution without understanding the problem. Polya said the first step is — understand. What does the problem ask? What's given? What's the constraint? And the seam-ripper — because error is inevitable. Wrong stitch must be unpicked and redone. Same in code — git revert, undo, refactor. One who fears error takes no risk; one who takes no risk doesn't learn."
  },
  story:`
<p class=\"scene-setting\">ষষ্ঠ দরজা। একটা দরজির দোকান। জানালা থেকে আলো আসছে, ধুলোর কণা ভাসছে। মাঝখানে একটা লম্বা কাঠের টেবিল — তার উপর কাপড়ের স্তূপ, কাঁচি, সুঁচ, সুতা, এবং একটা পাতলা চক। দেয়ালে প্যাটার্ন-পেপার ঝুলছে। দরজি হালিমা দাঁড়িয়ে আছেন — মাঝবয়সী, চোখে সূক্ষ্ম মনোযোগ, মুখে কাঁচির ফোর্সেপসের মতো পিন ধরা (তাঁর সিগনেচার), গায়ে ফিটিং অসমাপ্ত একটা কোট। গন্ধ — সুতি কাপড়ের উষ্ণ ভাব, চকের খনিজ গন্ধ, নতুন কাপড়ের সতেজতা। শব্দ — কাঁচির চ্যাপ-চ্যাপ, সুঁচের স্ক্র্যাচ, হালিমার মাপে ফিসফিস।</p>
<p class=\"scene-setting en\">The sixth door. A tailor's shop. Light from the window, dust motes floating. In the center, a long wooden table — on it, piles of cloth, scissors, needles, thread, and thin chalk. Pattern paper hangs on the walls. Tailor Halima stands — middle-aged, sharp focus in her eyes, pins held in her mouth like forceps (her signature), an unfinished fitting coat on her body. Smell — warm cotton, mineral chalk, fresh fabric. Sound — scissors' chap-chap, needle scratch, Halima's measuring whisper.</p>

<div class=\"dialogue\">হালিমা তোমাকে দেখলেন। মুখ থেকে পিন সরিয়ে একটা ছোট্ট বাক্সে রাখলেন। \"বসো।\" তুমি বসলে। \"সুলতান তোমাকে লোহা গলানো শিখিয়েছেন। কিন্তু আমার কাজ আরও সূক্ষ্ম। লোহা গললে আবার শক্ত হয় — কিন্তু কাপড় কাটলে আর জুড়তে গেলে দাগ থেকে যায়। তাই দরজি হওয়া মানে — প্রথমবারেই সঠিক। আর সেটা শুধু একটা উপায়ে আসে — পদ্ধতি।\"</div>
<div class=\"dialogue en\">Halima saw you. Removed the pins from her mouth, placed them in a small box. \"Sit.\" You sat. \"Sultan taught you to melt iron. But my work is finer. Iron re-hardens when melted — but cloth, once cut, leaves a mark if rejoined. So being a tailor means — right the first time. And that comes only one way — method.\"</div>

<div class=\"callout warn\"><span class=\"co-icon\">⚠️</span><div><strong>ব্যর্থতা আগে — কোড কপি করে পেস্ট:</strong> হালিমা বললেন — \"তুমি যখন একটা সমস্যা দেখো, তোমার হাত স্ট্যাক ওভারফ্লোতে চলে যায়। কপি করো, পেস্ট করো, চালাও। কাজ করলে ভালো। কিন্তু তুমি কিছু শিখলে না। এটা হলো দরজি ছাড়া কাপড় কাটা — মাপ ছাড়া, প্যাটার্ন ছাড়া। ভুল হবেই। আর কাপড় নষ্ট।\"</div></div>

<div class=\"dialogue\">\"জর্জ পলিয়া,\" হালিমা বললেন, \"একজন হাঙ্গেরিয়ান গণিতজ্ঞ। ১৯৪৫ সালে তিনি একটা বই লিখেছিলেন — <em>How to Solve It</em>। সেই বইয়ে তিনি সমস্যা সমাধানের চারটে ধাপ দিলেন। আমি সেই চার ধাপ দিয়ে প্রতিটা জামা বানাই। তুমি সেই চার ধাপ দিয়ে প্রতিটা সমস্যা সমাধান করবে।\"</div>
<div class=\"dialogue en\">\"George Polya,\" Halima said, \"a Hungarian mathematician. In 1945 he wrote a book — <em>How to Solve It</em>. In it he gave four steps to solve problems. I make every garment with those four steps. You'll solve every problem with those four steps.\"</div>

<table class=\"kv-table\"><tr><th>ধাপ</th><th>নাম</th><th>দরজির কাজ</th><th>তোমার কাজ</th></tr>
<tr><td class=\"hl\">১</td><td>বুঝো (Understand)</td><td>শরীর মাপা, পছন্দ জানা</td><td>সমস্যা পড়ো, কী চায় বুঝো</td></tr>
<tr><td class=\"hl\">২</td><td>পরিকল্পনা (Plan)</td><td>প্যাটার্ন কাটা, ক্রম ঠিক</td><td>কৌশল বেছো, ডিজাইন</td></tr>
<tr><td class=\"hl\">৩</td><td>বানাও (Execute)</td><td>সেলাই করা, ফিটিং</td><td>কোড লেখো, বানাও</td></tr>
<tr><td class=\"hl\">৪</td><td>ফিরে তাকাও (Look back)</td><td>ফিট দেখা, পরিবর্তন</td><td>রিভিউ, রিফ্যাক্টর</td></tr>
</table>

<div class=\"dialogue\">\"প্রথম ধাপ — বুঝো,\" হালিমা একটা ফিতা তুলে নিলেন। \"আমি যখন জামা বানাই, আগে শরীর মাপি। কাঁধ, বুক, কোমর, হাত — প্রতিটা মাপ। তারপর জিজ্ঞেস করি — কেমন চান? ঢিলা? ফিট? কোথায় পকেট? না মেপে কাপড় কাটলে কী হয়?\" তুমি বললে — \"জামা ফিট হবে না।\" হালিমা ঘাড় নাড়লেন। \"ঠিক। পলিয়া বলেছেন — <em>'সমস্যাটা বুঝতে পারাই সমাধানের অর্ধেক।'</em> তুমি যখন কোনো সমস্যা পাও — আগে পড়ো। আবার পড়ো। নিজের ভাষায় লেখো। কী দেওয়া আছে? কী চাওয়া হয়েছে? কোন বাধা আছে?\"</div>
<div class=\"dialogue en\">\"First step — understand,\" Halima picked up a tape. \"When I make a garment, first I measure the body. Shoulder, chest, waist, arm — each measure. Then I ask — what do you want? Loose? Fitted? Where pockets? What happens if I cut without measuring?\" You said — \"the garment won't fit.\" Halima nodded. \"Exactly. Polya said — <em>'understanding the problem is half the solution.'</em> When you get a problem — first read. Read again. Write it in your own words. What's given? What's asked? What constraints?\"</div>

<div class=\"dialogue\">\"দ্বিতীয় ধাপ — পরিকল্পনা,\" হালিমা প্যাটার্ন-পেপার টেনে নিলেন। \"আমি মাপ নিয়ে সরাসরি কাপড় কাটি না। আগে প্যাটার্ন কাগজে কাটি। আর প্যাটার্ন কাটার আগে ভাবি — কোন অংশ আগে? হাত? বুক? কলার? ক্রম ঠিক না হলে কাপড় নষ্ট।\" তিনি চক দিয়ে প্যাটার্নে দাগ টানলেন। \"পলিয়ার দ্বিতীয় ধাপ। তুমি সমস্যা বুঝলে — এবার পরিকল্পনা। কোন অ্যালগরিদম? কোন ডেটা স্ট্রাকচার? ছোট উদাহরণ হাতে করে দেখো। উল্টো দিক থেকে ভাবো — সমাধান পেলে কী হবে, তার আগের ধাপ কী?\"</div>
<div class=\"dialogue en\">\"Second step — plan,\" Halima drew pattern paper. \"I don't cut cloth directly after measuring. First I cut on pattern paper. And before cutting pattern, I think — which part first? Sleeve? Chest? Collar? Wrong order, wasted cloth.\" She drew lines on the pattern with chalk. \"Polya's second step. You understand the problem — now plan. Which algorithm? Which data structure? Try a small example by hand. Think backwards — if the solution came, what would precede it?\"</div>

<div class=\"dialogue\">\"তৃতীয় ধাপ — বানাও,\" হালিমা সুঁচ তুলে নিলেন। \"সেলাই শুরু। প্যাটার্ন অনুযায়ী, পরিকল্পনা অনুযায়ী। কিন্তু এখানে একটা কথা — তাড়াহুড়ো নয়। প্রতিটা সেলাইয়ে ফোকাস।\" তিনি একটা সেলাই করলেন — ধীরে, নিখুঁত। \"কোডেও তাই। পরিকল্পনা পাকা। এখন লেখো। একটা ফাংশন। টেস্ট করো। আরেকটা। টেস্ট। একসাথে সব লিখলে বাগ ধরা কঠিন। ছোট ছোট ধাপে, প্রতিটা ধাপ যাচাই করে।\"</div>
<div class=\"dialogue en\">\"Third step — execute,\" Halima picked up a needle. \"Sewing begins. By pattern, by plan. But here's a thing — no rush. Focus on each stitch.\" She made a stitch — slow, perfect. \"Same in code. Plan is set. Now write. One function. Test. Another. Test. Writing everything at once makes bugs hard to find. Small steps, verify each.\"</div>

<div class=\"dialogue\">\"চতুর্থ ধাপ — ফিরে তাকাও,\" হালিমা অসমাপ্ত কোটটা তুলে ধরলেন। \"জামা বানানো হলে কাজ শেষ নয়। পরিধান করিয়ে দেখি — কোথায় টানটান? কোথায় ঢিলা? হাত নড়াচ্ছে কিনা? এই ধাপেই আসল উন্নতি হয়।\" তিনি একটু থামলেন। \"তোমার কোডও। চালু হলে শেষ নয়। পড়ো নিজের কোড। কোথায় কদর্য? কোথায় পুনরাবৃত্তি? কোথায় নাম অস্পষ্ট? এক সপ্তাহ পর নিজের কোড পড়ো — যদি বুঝতে না পারো, সেটা সমাধান নয়, বোঝা।\"</div>
<div class=\"dialogue en\">\"Fourth step — look back,\" Halima held up the unfinished coat. \"Making the garment isn't the end. I have it worn — where tight? Where loose? Does the arm move? Real improvement comes here.\" She paused. \"Your code too. Running isn't the end. Read your own code. Where ugly? Where repetitive? Where names unclear? Read your code a week later — if you can't understand, it's not a solution, it's a burden.\"</div>

<p>হালিমা আরেকটা কৌশল যোগ করলেন — ফিরে তাকানোর সবচেয়ে কঠিন পরীক্ষা: <strong>সমাধানটা লিখে ব্যাখ্যা করো, যেন একজন নতুন শিক্ষানবিশকে শেখাচ্ছ।</strong> বই ২৬ (জ্ঞানের কারিগর) এটাকেই ফাইনম্যান টেকনিক বলেছে — লেখা মানেই চিন্তা করা। যেখানে কলম আটকে যায়, সেখানেই তোমার বোঝা অসম্পূর্ণ। যে সমাধান সহজ ভাষায় ব্যাখ্যা করতে পারো না, সেটা এখনো তোমার হয়নি।</p>
<p class=\"en\">Halima added one more technique — the hardest test of looking back: <strong>write out the solution as if teaching a new apprentice.</strong> Book 26 (The Knowledge Craftsman) calls this the Feynman technique — writing is thinking. Wherever the pen gets stuck, that's where your understanding is incomplete. A solution you can't explain in simple words isn't truly yours yet.</p>

<div class=\"callout tip\"><span class=\"co-icon\">🪡</span><div><strong>পলিয়ার হিউরিস্টিক (Heuristics):</strong> হালিমা বললেন — পলিয়া শুধু চার ধাপ দেননি, কৌশলও দিয়েছেন। <strong>(১) ছোট করো:</strong> বড় সমস্যাকে ছোট ছোট ভাগে ভাগো। বই ২ (অ্যালগরিদমের বাজার) এটাই শিখিয়েছে — ডিভাইড অ্যান্ড কনকার। <strong>(২) উল্টো দিক:</strong> সমাধান থেকে শুরু করে পিছনে এসো। <strong>(৩) অনুরূপ সমস্যা:</strong> এমন কোনো সমস্যা আগে দেখেছ কি? কীভাবে সমাধান করেছিলে? <strong>(৪) সহজ উদাহরণ:</strong> সাধারণ ক্ষেত্রে আগে সমাধান করো, তারপর জটিল।</div></div>

<div class=\"dialogue\">তুমি জিজ্ঞেস করলে — \"কিন্তু আমি তো ভুল করব। সেটা কি খারাপ?\" হালিমা হাসলেন। ড্রয়ার থেকে একটা ছোট্ট হাতিয়ার বের করলেন — সেম-রিপার। সেলাই খোলার ছুরি। \"এটা কী জানো?\" তুমি বললে — \"সেম-রিপার। সেলাই খোলার জিনিস।\" হালিমা ঘাড় নাড়লেন। \"আমার টেবিলে সবচেয়ে গুরুত্বপূর্ণ জিনিস এটা। কারণ আমি ভুল করি। প্রতিটা দরজি ভুল করেন। কিন্তু সেম-রিপার আছে বলেই ভুল শুধরে নেওয়া যায়। ভুল করতে ভয় পেও না — শুধরে নেওয়ার মানসিকতা রাখো।\"</div>
<div class=\"dialogue en\">You asked — \"But I'll make mistakes. Is that bad?\" Halima smiled. Pulled a small tool from a drawer — a seam-ripper. The unsewing knife. \"Know what this is?\" You said — \"Seam-ripper. To undo stitches.\" Halima nodded. \"The most important thing on my table. Because I make mistakes. Every tailor does. But the seam-ripper exists, so mistakes can be corrected. Don't fear mistakes — keep the mindset to correct them.\"</div>

<div class=\"dialogue\">তাফাক্কুর। কুরআনে আল্লাহ বারবার বলেছেন — <em>'আল-আফাক' (দিগন্ত) দেখো, <em>'আল-আনফুস' (নিজের অন্তর) দেখো — তোমরা কি চিন্তা করবে না?</em> তাফাক্কুর মানে গভীর, পদ্ধতিগত চিন্তা — প্রতিটা ধাপে থামা, প্রতিটা ফলাফল যাচাই করা। হালিমা যখন সেলাই করেন, তিনি শুধু হাত চালান না — তিনি তাফাক্কুর করেন। এটা কি সঠিক? এটা কি মাপের সাথে মেলে? এটাই তাফাক্কুর — কাজের সাথে সাথে চিন্তা। যে তাফাক্কুর করে না, সে কাজ করে কিন্তু শেখে না।</div>
<div class=\"dialogue en\">Tafakkur. In the Quran Allah repeatedly says — look at <em>'al-afaq'</em> (the horizons), look at <em>'al-anfus'</em> (your own selves) — will you not think? Tafakkur means deep, systematic thinking — pausing at each step, verifying each result. When Halima sews, she doesn't just move her hands — she tafakkurs. Is this right? Does this match the measure? This is tafakkur — thinking alongside work. One who doesn't tafakkur works but doesn't learn.</div>

<div class=\"secret-box\">✂️ পলিয়ার চার ধাপ: বুঝো → পরিকল্পনা → বানাও → ফিরে তাকাও। প্রতিটা সমস্যা একটা পোশাক — মাপ নাও, প্যাটার্ন কাটো, সেলাই করো, ফিট দেখো। ভুল হবেই — সেম-রিপার তৈরি রাখো। কেউ প্রথমবারে নিখুঁত হয় না, কিন্তু পদ্ধতি থাকলে প্রতিবার ভালো হয়।</div>`
});

// ══ DOOR 7: FERMI ESTIMATION ══
doors.push({
  num:7, icon:"⚖️", color:"#a5b4fc", name:"মুদির আন্দাজ",
  subtitle:"The Grocer's Estimate", tech:"Fermi Estimation & Calibration",
  spirit:"জান্ন বিল-গায়িব — অদৃশ্যের গণনা, অজানা থেকে আন্দাজ",
  secret:"কতটা বড়? কত দ্রুত? কত সংখ্যা? — এই প্রশ্নগুলোর উত্তর তুমি ভাবো সঠিক জানো না। কিন্তু আন্দাজ করা যায় — ভাঙলে। বড় সংখ্যাকে ছোট ছোট অংশে ভাঙো, প্রতিটা অংশ আন্দাজ করো, গুণ করো। এটাই ফার্মি অনুমান। আর সবচেয়ে গুরুত্বপূর্ণ — ক্যালিব্রেশন। তোমার ৯০% নিশ্চিত বলা আন্দাজগুলো কি সত্যিই ৯০% সময় সঠিক? বেশিরভাগ মানুষ অতি-আত্মবিশ্বাসী। নিজেকে জানো। অজানাকে ভেঙে মাপার এই শিল্পের নামই জান্ন বিল-গায়িব।",
  recall:{
    q:"আবদুল্লাহ কীভাবে একদিনের মোট বিক্রি ৫% ভুলের মধ্যে আন্দাজ করেন — কোনো হিসাব না দেখে?",
    qen:"How does Abdullah estimate a day's total sales within 5% error — without looking at any ledger?",
    a:"তিনি ভাঙেন। ভাঙলে সমস্যা সহজ। ক'জন কাস্টমার আসবে? ~২০০। গড়ে কেউ কত খরচ করে? ~$১৫। ২০০ × ১৫ = $৩০০০। কিছু বেশি কিনবে, কিছু কম। আবদুল্লাহ প্রতিটা অংশ আলাদাভাবে আন্দাজ করেন, গুণ করেন। ফার্মি অনুমানের মূল — বিভাজন, বাউন্ডিং, স্যানিটি চেক। আর সবচেয়ে গুরুত্বপূর্ণ — ক্যালিব্রেশন: নিজের আন্দাজের ভুল জানা।",
    aen:"He decomposes. Decomposing makes it easy. How many customers? ~200. Average spend? ~$15. 200 × 15 = $3000. Some spend more, some less. Abdullah estimates each part separately, multiplies. Fermi estimation's core — decomposition, bounding, sanity check. And most important — calibration: knowing your estimate's error."
  },
  story:`
<p class=\"scene-setting\">সপ্তম দরজা। একটা মুদির দোকান। ছোট্ট, কিন্তু পরিপাটি। তাকে তাকে সাজানো — চাল, ডাল, তেল, মসলা, সাবান। মালিক আবদুল্লাহ কাউন্টারের পেছনে বসে আছেন — বয়স্ক, গোল চশমা, হাতে একটা পুরনো আবাকাস (তাঁর সিগনেচার), সামনে এক কাপ চা ঠান্ডা হচ্ছে। গন্ধ — মসলার মিশ্র ঝাঁঝ (এলাচ, দারুচিনি, জিরা), সাবানের সুগন্ধ, চালের শ্বাসরুদ্ধকর ভাব। শব্দ — আবাকাসের ক্লিক-ক্ল্যাক, দরজার ঘণ্টা যখন কেউ আসে, আবদুল্লাহর ফিসফিস গোনা।</p>
<p class=\"scene-setting en\">The seventh door. A grocery store. Small, but tidy. Shelves organized — rice, lentils, oil, spices, soap. Owner Abdullah sits behind the counter — elderly, round glasses, an old abacus in his hand (his signature), before him a cup of tea cooling. Smell — mixed spice sharpness (cardamom, cinnamon, cumin), soap scent, rice's staid breath. Sound — abacus click-clack, door bell when someone enters, Abdullah's whispering count.</p>

<div class=\"dialogue\">আবদুল্লাহ তোমাকে দেখলেন। চশমা ঠিক করলেন। \"বসো।\" তুমি বসলে। একটা স্টুলে, কাউন্টারের সামনে। \"হালিমা তোমাকে পদ্ধতি শিখিয়েছেন। ভালো। কিন্তু আমার সমস্যা আলাদা। আমি দরজি নই — আমার কাছে প্যাটার্ন নেই। প্রতিদিন আসে নতুন প্রশ্ন। আজ কত চাল বিক্রি হবে? ঈদে কত মসলা লাগবে? বৃষ্টির দিন কত কাস্টমার কমবে? এই প্রশ্নগুলোর সঠিক উত্তর আমার কাছে নেই — কিন্তু আমি আন্দাজ করি। আর সেই আন্দাজ ৫% ভুলের মধ্যে থাকে।\"</div>
<div class=\"dialogue en\">Abdullah saw you. Adjusted his glasses. \"Sit.\" You sat. On a stool, before the counter. \"Halima taught you method. Good. But my problem is different. I'm not a tailor — I have no pattern. Every day a new question. How much rice will sell today? How much spice for Eid? How many fewer customers on a rainy day? I don't have the right answer — but I estimate. And that estimate stays within 5% error.\"</div>

<div class=\"callout warn\"><span class=\"co-icon\">⚠️</span><div><strong>ব্যর্থতা আগে — 'জানি না' বলে পালানো:</strong> আবদুল্লাহ বললেন — \"তুমি যখন 'কত?' প্রশ্ন পাও, তুমি বলো — 'জানি না।' এবং থেমে যাও। কিন্তু সত্যি কি তুমি কিছুই জানো না? তুমি জানো — এই এলাকায় কত মানুষ, প্রতিটা পরিবার কত চাল খায়, দোকানে কত কাস্টমার আসে। তুমি জানো অনেক কিছু — শুধু সেই জ্ঞান যোগ করোনি।\"</div></div>

<div class=\"dialogue\">\"এনরিকো ফার্মি,\" আবদুল্লাহ বললেন। \"একজন পদার্থবিদ। ১৯৪৫ সালে — পারমাণবিক পরীক্ষা। বিস্ফোরণের পরে তিনি কাগজের টুকরো ছুঁড়লেন, দেখলেন কত দূরে পড়ে। সেই থেকে বোমার শক্তি আন্দাজ করলেন — ১০ কিলোটন। আসল ছিল ২০ কিলোটন। অর্ধেক ভুল — কিন্তু সঠিক মাত্রায় (order of magnitude)। এটাই ফার্মি অনুমান। সঠিক উত্তর নয় — সঠিক মাত্রা।\"</div>
<div class=\"dialogue en\">\"Enrico Fermi,\" Abdullah said. \"A physicist. 1945 — nuclear test. After the blast he threw pieces of paper, saw how far they landed. From that he estimated the bomb's power — 10 kilotons. Actual was 20 kilotons. Half wrong — but right order of magnitude. This is Fermi estimation. Not the exact answer — the right magnitude.\"</div>

<div class=\"dialogue\">\"ফার্মি একটা প্রশ্ন ভালোবাসতেন,\" আবদুল্লাহ বললেন। \"<em>'শিকাগোতে কতজন পিয়ানো টিউনার আছে?'</em> কেউ জানে না। কিন্তু ফার্মি বললেন — ভাঙো।\" আবদুল্লাহ আবাকাসে গোটা সাজালেন। \"এক — শিকাগোর জনসংখ্যা কত? ~৩০ লক্ষ। দুই — কত পরিবার? ~১০ লক্ষ। তিন — কত পরিবারে পিয়ানো? ধরো ২০-এ একটা। তাহলে ৫০,০০০ পিয়ানো। চার — একটা পিয়ানো বছরে কতবার টিউন করা যায়? একবার। ৫০,০০০ টিউনিং। পাঁচ — একজন টিউনার বছরে কত টিউন করেন? ধরো ১০০০। তাহলে দরকার ৫০ জন।\"</div>
<div class=\"dialogue en\">\"Fermi loved a question,\" Abdullah said. \"<em>'How many piano tuners are in Chicago?'</em> Nobody knows. But Fermi said — decompose.\" Abdullah arranged beads on the abacus. \"One — Chicago's population? ~3 million. Two — how many households? ~1 million. Three — how many have pianos? Say 1 in 20. Then 50,000 pianos. Four — how often tuned per year? Once. 50,000 tunings. Five — how many tunings per tuner per year? Say 1000. Then need 50 tuners.\"</div>

<div class=\"stat-grid\">
<div class=\"stat-card\"><div class=\"sc-num\">৩০ লক্ষ</div><div class=\"sc-label\">শিকাগোর জনসংখ্যা</div></div>
<div class=\"stat-card\"><div class=\"sc-num\">৫০,০০০</div><div class=\"sc-label\">পিয়ানো (২০-এ ১)</div></div>
<div class=\"stat-card\"><div class=\"sc-num\">১০০০</div><div class=\"sc-label\">প্রতি টিউনারে বার্ষিক টিউন</div></div>
<div class=\"stat-card\"><div class=\"sc-num\">~৫০</div><div class=\"sc-label\">টিউনার (আন্দাজ)</div></div>
</div>

<div class=\"dialogue\">\"আসল সংখ্যা কত?\" আবদুল্লাহ বললেন। \"তখন ছিল ~৬০। ৫০ এর আন্দাজ — ৬০ এর বাস্তব। কাছাকাছি! কিন্তু মূল পয়েন্ট সঠিক সংখ্যা নয় — মূল পয়েন্ট পদ্ধতি। তুমি যদি জানো কীভাবে ভাঙতে হয়, তুমি যেকোনো প্রশ্নের কাছাকাছি যেতে পারবে।\"</div>
<div class=\"dialogue en\">\"What was the actual number?\" Abdullah said. \"It was ~60. The estimate of 50 — the reality of 60. Close! But the main point isn't the exact number — it's the method. If you know how to decompose, you can approach any question.\"</div>

<div class=\"dialogue\">\"তুমি ডেভেলপার,\" আবদুল্লাহ বললেন। \"তোমার প্রতিদিন ফার্মি প্রশ্ন আসে। 'এই ডাটাবেস কত ডেটা ধরবে?' 'এই এপিআই কত রিকোয়েস্ট সামলাবে?' 'মাইগ্রেশন কতক্ষণ চলবে?' কেউ তোমাকে সঠিক উত্তর দেবে না। কিন্তু তুমি ভাঙতে পারো। ডাটাবেস — এক সারিতে কত বাইট? × কত সারি? × কত ইনডেক্স? × কত রেপ্লিকা? এপিআই — এক রিকোয়েস্টে কত সময়? × পিক আওয়ারে কত ইউজার? × কত রিকোয়েস্ট প্রতি ইউজার?\"</div>
<div class=\"dialogue en\">\"You're a developer,\" Abdullah said. \"You get Fermi questions daily. 'How much data will this DB hold?' 'How many requests can this API handle?' 'How long will the migration take?' No one gives you the exact answer. But you can decompose. DB — bytes per row? × rows? × indexes? × replicas? API — time per request? × peak users? × requests per user?\"</div>

<div class=\"callout tip\"><span class=\"co-icon\">📏</span><div><strong>স্যানিটি চেক (Sanity Check):</strong> আবদুল্লাহ বললেন — প্রতিটা আন্দাজের পর একটা প্রশ্ন করো — <em>'এই সংখ্যাটা কি সম্ভব?'</em> তুমি বললে একটা সার্ভার ১০ মিলিয়ন কাস্টমার সামলাবে — থামো। একটা সার্ভারে কত মেমোরি? কত সিপিইউ? প্রতি কাস্টমারে কত কানেকশন? আবদুল্লাহ যখন আন্দাজ করেন, তিনি শেষে বলেন — \"এটা কি সম্ভব? এটা কি বাস্তবসম্মত?\" এটাই স্যানিটি চেক।</div></div>

<div class=\"dialogue\">\"এখন সবচেয়ে কঠিন অংশ,\" আবদুল্লাহ গম্ভীর হলেন। \"ক্যালিব্রেশন। তুমি যখন বলো — 'আমি ৯০% নিশ্চিত এই সংখ্যাটা এই সীমার মধ্যে।' তোমার সেই আন্দাজগুলো কি সত্যিই ৯০% সময় সঠিক? ফিলিপ টেটলক (২০০৫) একটা দশক ধরে বিশেষজ্ঞদের আন্দাজ যাচাই করেছেন। দেখেছেন — যারা '৮০% নিশ্চিত' বলে, তাদের আসলে মাত্র ~৪৫% সময় সঠিক — টেটলক একে বলেছেন 'ছুঁড়ি মারা শিম্পাঞ্জি'। অতি-আত্মবিশ্বাস। এটাই সবচেয়ে বড় ভুল — নিজেকে না চেনা।\"</div>
<div class=\"dialogue en\">\"Now the hardest part,\" Abdullah grew serious. \"Calibration. When you say — 'I'm 90% sure this number is within this range.' Are your estimates actually right 90% of the time? Philip Tetlock (2005) verified experts' estimates over a decade. Found — those who say '80% sure' are actually right only ~45% of the time — Tetlock's famous "dart-throwing chimpanzee" result. Overconfidence. This is the biggest error — not knowing yourself.\"</div>

<table class=\"kv-table\"><tr><th>তুমি বলো</th><th>বাস্তবে সঠিক</th><th>সমস্যা</th></tr>
<tr><td class=\"hl\">৮০% নিশ্চিত</td><td>~৪৫%</td><td>অতি-আত্মবিশ্বাস (টেটলক)</td></tr>
<tr><td class=\"hl\">৫০% নিশ্চিত</td><td>~৩০%</td><td>একই সমস্যা</td></tr>
<tr><td class=\"hl\">প্রশিক্ষণ পরে</td><td>৮০%+</td><td>উন্নতি সম্ভব (সুপারফরকাস্টিং)</td></tr>
</table>

<div class=\"dialogue\">\"প্রতিকার,\" আবদুল্লাহ বললেন। \"তোমার আন্দাজের খাতা রাখো। প্রতিটা আন্দাজ লেখো — আর প্রতিটার সাথে কত শতাংশ নিশ্চিত তুমি। এক মাস পর মিলাও। তুমি যদে দেখো তোমার '৯০% নিশ্চিত' আন্দাজ মাত্র ৫০% সঠিক — তুমি অতি-আত্মবিশ্বাসী। এরপর থেকে আন্দাজ করার সময় নিজেকে সংশোধন করবে। এটাই ক্যালিব্রেশন — নিজের যন্ত্র মেলানো।\"</div>
<div class=\"dialogue en\">\"The remedy,\" Abdullah said. \"Keep an estimate journal. Write each estimate — and how confident you are. After a month, match. If you see your '90% sure' estimates are only 50% correct — you're overconfident. From then on you'll correct yourself when estimating. This is calibration — aligning your own instrument.\"</div>

<div class=\"dialogue\">জান্ন বিল-গায়িব। আল্লাহ কুরআনে বলেন: <em>"তোমরা জানো না অদৃশ্য (আল-গায়িব)। আল্লাহ জানেন।"</em> (এটি ৬:৫৯ এর প্যারাফ্রেজ।) অদৃশ্যের জ্ঞান আল্লাহর। কিন্তু আল্লাহ আমাদের আকল দিয়েছেন — অদৃশ্যের <em>আন্দাজ</em> করার জন্য। ফার্মি অনুমান হলো জান্ন বিল-গায়িবের কারিগরি — অজানাকে জানা অংশে ভাঙা, গুণ করা, স্যানিটি চেক করা। আবদুল্লাহ যখন আগামীকালের বিক্রি আন্দাজ করেন, তিনি অদৃশ্য দেখতে পান না — কিন্তু তিনি তাঁর যন্ত্র (আকল + আবাকাস) ক্যালিব্রেটেড রাখেন। তাই তাঁর আন্দাজ কাছাকাছি থাকে। যে নিজের যন্ত্র ক্যালিব্রেট করে না, সে অন্ধভাবে আন্দাজ করে — আর ভুল করে।</div>
<div class=\"dialogue en\">Jann bil-ghayb. Allah says in the Quran (paraphrased): <em>You do not know the unseen (al-ghayb). Allah knows.</em> (Based on 6:59.) Knowledge of the unseen belongs to Allah. But Allah gave us aql — to <em>estimate</em> the unseen. Fermi estimation is the craft of jann bil-ghayb — decomposing the unknown into known parts, multiplying, sanity-checking. When Abdullah estimates tomorrow's sales, he doesn't see the unseen — but he keeps his instrument (aql + abacus) calibrated. So his estimate stays close. One who doesn't calibrate estimates blindly — and errs.</div>

<div class=\"secret-box\">⚖️ বড় সংখ্যাকে ভাঙো — ছোট ছোট অংশে। প্রতিটা অংশ আন্দাজ করো, গুণ করো। স্যানিটি চেক — এই সংখ্যাটা কি সম্ভব? আর ক্যালিব্রেশন — নিজের আন্দাজের ভুল মাপো। বেশিরভাগ মানুষ অতি-আত্মবিশ্বাসী — নিজেকে চিনো।</div>`
});

// ══ DOOR 8: DECISION-MAKING UNDER UNCERTAINTY ══
doors.push({
  num:8, icon:"🧭", color:"#818cf8", name:"নাবিকের সিদ্ধান্ত",
  subtitle:"The Fisherman's Call", tech:"Expected Value, Reversible vs Irreversible Decisions, Satisficing",
  spirit:"ইস্তিখারাহ — ভালোটা বেছে নেওয়া, আল্লাহর কাছে ফয়সালা ছেড়ে দেওয়া",
  secret:"দুই ধরনের সিদ্ধান্ত — একমুখী দরজা (যাওয়া, ফিরা নেই) আর দ্বিমুখী দরজা (যাওয়া, ফেরা যায়)। একমুখী দরজায় সময় নাও, পরামর্শ নাও, প্রিমর্টেম করো। দ্বিমুখী দরজায় দ্রুত সিদ্ধান্ত নাও — ভুল হলে ফিরবে। আর সিদ্ধান্ত নেওয়ার সময় তিনটা প্রশ্ন: প্রত্যাশিত মান কত? অনুশোচনা কমানোর উপায় কী? আমি কি সবচেয়ে ভালো খুঁজছি নাকি যথেষ্ট ভালো? ইস্তিখারাহ মানে চেষ্টা করা আর ফল আল্লাহর উপর ছাড়া।",
  recall:{
    q:"ইব্রাহিম কেন একমুখী দরজায় ধীরে, কিন্তু দ্বিমুখী দরজায় দ্রুত সিদ্ধান্ত নেন?",
    qen:"Why does Ibrahim decide slowly on one-way doors, but fast on two-way doors?",
    a:"কারণ একমুখী দরজা — যেমন বন্দর ছেড়ে সমুদ্রে যাওয়া — ফেরা কঠিন বা অসম্ভব। ভুল হলে ক্ষয়ক্ষতি বড়। তাই সময় নিয়ে চিন্তা, পরামর্শ, প্রিমর্টেম। কিন্তু দ্বিমুখী দরজা — যেমন একটা নতুন টুল টেস্ট করা — ফেরা সহজ। দ্রুত সিদ্ধান্ত, দ্রুত ফিডব্যাক, দ্রুত সংশোধন। বেজোস একে বলেছেন Type 1 আর Type 2 সিদ্ধান্ত। সব সিদ্ধান্ত সমান নয় — তাই সব সিদ্ধান্তে সমান সময় নষ্ট করা বোকামি।",
    aen:"Because a one-way door — like leaving harbor for open sea — is hard or impossible to reverse. Wrong decision, large loss. So time, consultation, premortem. But a two-way door — like testing a new tool — is easy to reverse. Fast decision, fast feedback, fast correction. Bezos called these Type 1 and Type 2 decisions. Not all decisions are equal — so wasting equal time on all is folly."
  },
  story:`
<p class=\"scene-setting\">অষ্টম দরজা। একটা মাছ ধরার বন্দর। ভোর — আকাশে এখনো অন্ধকার, পূর্ব দিকে হালকা কমলা। নৌকাগুলো নোঙরে বাঁধা, জাল শুকাচ্ছে। জেলে ইব্রাহিম একটা নৌকার গলুইতে বসে আছেন — বয়স্ক, হাতে লবণে ফাটা দাগ (তাঁর সিগনেচার), চোখ আকাশের দিকে, নাক বাতাসে। গন্ধ — লবণাক্ত সমুদ্রের ঝাঁঝ, পচা মাছের গন্ধ, আলকাতরা ও কাঠের মিশ্র ভাব। শব্দ — ঢেউয়ের ছলাৎ-ছলাৎ, নৌকার কাঠের কিড়মিড়, দূরে গাঙের ঢেউয়ের গর্জন।</p>
<p class=\"scene-setting en\">The eighth door. A fishing harbor. Dawn — sky still dark, faint orange to the east. Boats moored, nets drying. Fisherman Ibrahim sits on a boat's bow — elderly, hands cracked with salt-scars (his signature), eyes on the sky, nose to the wind. Smell — salt-sea sharpness, rotting fish, mixed tar and wood. Sound — waves lapping, boat timber creaking, distant roar of the river-mouth.</p>

<div class=\"dialogue\">ইব্রাহিম তোমাকে দেখলেন। ইশারায় বসতে বললেন। তুমি বসলে। নৌকার গলুইতে, তাঁর পাশে। \"আবদুল্লাহ তোমাকে আন্দাজ শিখিয়েছেন। কিন্তু আন্দাজ করার পর কী? সিদ্ধান্ত। আমি প্রতিদিন সকালে একটা সিদ্ধান্ত নিই — সমুদ্রে যাব কিনা। এই সিদ্ধান্তে নির্ভর করে — আমার দিন, আমার আয়, আমার জীবন।\" তিনি আকাশের দিকে তাকালেন। \"দেখো — মেঘ জমছে পূর্বে। বাতাসে লবণের গন্ধ বেশি — ঝড়ের পূর্বলক্ষণ। কিন্তু মাছও থাকবে বেশি — ঝড়ের আগে মাছ জলের উপরে ওঠে। ঝুঁকি আছে, লাভও আছে। সিদ্ধান্ত নিতে হবে।\"</div>
<div class=\"dialogue en\">Ibrahim saw you. Gestured to sit. You sat. On the bow, beside him. \"Abdullah taught you estimation. But after estimation — what? Decision. Every morning I make one decision — whether to go to sea. This decision decides — my day, my income, my life.\" He looked at the sky. \"See — clouds gathering east. Wind carries more salt — sign of storm. But fish will also be more — before storms fish rise to surface. Risk exists, reward too. Decision must be made.\"</div>

<div class=\"callout warn\"><span class=\"co-icon\">⚠️</span><div><strong>ব্যর্থতা আগে — বিশ্লেষণ পক্ষাঘাত (Analysis Paralysis):</strong> ইব্রাহিম বললেন — \"আমি যখন তরুণ ছিলাম, আমি ভাবতাম — সব তথ্য দরকার, তারপর সিদ্ধান্ত। কিন্তু সমুদ্রে সব তথ্য কখনো থাকে না। আবহাওয়া বদলায়, ঢেউ আসে, মাছ সরে যায়। আমি অপেক্ষা করতাম, করতাম — আর সুযোগ চলে যেত। অন্য নৌকা আগে বেরোত, মাছ ধরত। আমি বন্দরে বসে থাকতাম — বিশ্লেষণ করে।\"</div></div>

<div class=\"dialogue\">\"জেফ বেজোস,\" ইব্রাহিম বললেন, \"আমাজনের প্রতিষ্ঠাতা। তিনি একটা কথা বলেছেন — সিদ্ধান্ত দুই ধরনের। <strong>Type 1 — একমুখী দরজা (one-way door)।</strong> একবার গেলে ফেরা কঠিন বা অসম্ভব। যেমন — চাকরি ছাড়া, শহর বদলানো, বিয়ে, বড় বিনিয়োগ। এই সিদ্ধান্তে সময় নাও। পরামর্শ নাও। প্রিমর্টেম করো — সুলতান যেমন শিখিয়েছেন। ভুল হলে ক্ষয় বড়।\"</div>
<div class=\"dialogue en\">\"Jeff Bezos,\" Ibrahim said, \"founder of Amazon. He said one thing — decisions come in two types. <strong>Type 1 — one-way door.</strong> Once through, return is hard or impossible. Like — quitting a job, moving cities, marriage, major investment. On these decisions — take time. Seek counsel. Premortem — as Sultan taught. Wrong decision, large loss.\"</div>

<div class=\"dialogue\">\"<strong>Type 2 — দ্বিমুখী দরজা (two-way door)।</strong> একবার গেলে ফেরা যায়। যেমন — নতুন টুল টেস্ট, ছোট ফিচার যোগ, একটা পরীক্ষামূলক ক্লাস নেওয়া। এই সিদ্ধান্তে সময় নষ্ট করো না। দ্রুত সিদ্ধান্ত নাও, দ্রুত চেষ্টা করো, দ্রুত ফিডব্যাক নাও। ভুল হলে ফিরে এসো — ক্ষয় কম।\" ইব্রাহিম একটু থামলেন। \"বন্দর ছেড়ে সমুদ্রে যাওয়া — Type 1। জাল ফেলা কোথায় — Type 2। আমি প্রথমটাতে ধীরে, দ্বিতীয়টাতে দ্রুত।\"</div>
<div class=\"dialogue en\">\"<strong>Type 2 — two-way door.</strong> Once through, you can return. Like — testing a new tool, adding a small feature, taking an experimental class. On these — don't waste time. Decide fast, try fast, feedback fast. If wrong, come back — low loss.\" Ibrahim paused. \"Leaving harbor for sea — Type 1. Where to cast the net — Type 2. I'm slow on the first, fast on the second.\"</div>

<div class=\"compare\">
  <div class=\"cmp-card cmp-bad\"><div class=\"cmp-label">❌ সব সিদ্ধান্তে ধীরে</div>
    বিশ্লেষণ পক্ষাঘাত। ছোট সিদ্ধান্তেও সপ্তাহ কাটে। সুযোগ হারায়। প্রতিপক্ষ এগিয়ে যায়।
  </div>
  <div class=\"cmp-card cmp-good\"><div class=\"cmp-label\">✅ সিদ্ধান্ত অনুযায়ী গতি</div>
    একমুখী দরজায় ধীরে, যত্নশীল। দ্বিমুখী দরজায় দ্রুত, পরীক্ষামূলক। সময় ও শক্তি সঠিক জায়গায়।
  </div>
</div>

<div class=\"dialogue\">\"এখন তিনটা হাতিয়ার,\" ইব্রাহিম বললেন। \"প্রথম — <strong>প্রত্যাশিত মান (Expected Value)</strong>। আমি যখন সমুদ্রে যেতে চিন্তা করি, আমি ভাবি: ভালো হলে কত মাছ? ~১০০ কেজি। খারাপ হলে কত ক্ষয়? ~নৌকা ক্ষতি, জীবন ঝুঁকি। ভালো হওয়ার সম্ভাবনা? ~৬০%। খারাপের? ~৪০%। প্রত্যাশিত মান = (০.৬ × ১০০ কেজি মাছ) − (০.৪ × নৌকা ক্ষয়)। যদি প্রত্যাশিত মান পজিটিভ হয় — যাওয়া যায়। নেগেটিভ হলে — বন্দরে থাকো।\"</div>
<div class=\"dialogue en\">\"Now three tools,\" Ibrahim said. \"First — <strong>expected value</strong>. When I consider going to sea, I think: if good, how much fish? ~100 kg. If bad, how much loss? ~boat damage, life risk. Probability of good? ~60%. Of bad? ~40%. Expected value = (0.6 × 100 kg fish) − (0.4 × boat loss). If positive — go. If negative — stay in harbor.\"</div>

<table class=\"kv-table\"><tr><th>প্রত্যাশিত মান সূত্র</th></tr>
<tr><td class=\"hl\">EV = Σ (সম্ভাবনা × ফলাফলের মান)</td></tr>
<tr><td>ভালো ফল: ৬০% × +১০০ = +৬০</td></tr>
<tr><td>খারাপ ফল: ৪০% × −৮০ = −৩২</td></tr>
<tr><td class=\"hl\">মোট EV = +৬০ − ৩২ = +২৮ (যাওয়া যায়)</td></tr>
</table>

<div class=\"dialogue\">\"দ্বিতীয় — <strong>অনুশোচনা কমানো (Regret Minimization)</strong>।\" ইব্রাহিম চোখ বন্ধ করলেন। \"আমি যখন বয়স্ক হব, শেষ বিশ্রামে শুয়ে ভাবব — আফসোস কোনটার হবে? সমুদ্রে গিয়ে ক্ষয়ের? নাকি সমুদ্রে না গিয়ে সুযোগ হারানোর? বেজোস এই ফ্রেমওয়ার্ক দিয়েছেন — সিদ্ধান্ত নাও সেটা যা না নিলে অনুশোচনা বেশি হবে।\" তিনি চোখ খুললেন। \"এই ফ্রেম সাহায্য করে যখন তথ্য অসম্পূর্ণ — কারণ অনুশোচনা একটা আবেগ, আবেগ স্পষ্ট কথা বলে।\"</div>
<div class=\"dialogue en\">\"Second — <strong>regret minimization</strong>.\" Ibrahim closed his eyes. \"When I'm old, lying at final rest, I'll think — which will I regret? Going to sea and losing? Or not going and missing the chance? Bezos gave this framework — decide what you'd regret NOT doing more.\" He opened his eyes. \"This frame helps when information is incomplete — because regret is an emotion, and emotions speak clearly.\"</div>

<div class=\"callout tip\"><span class=\"co-icon\">🎯</span><div><strong>তৃতীয় — স্যাটিসফাইসিং (Satisficing):</strong> ইব্রাহিম বললেন — \"আমি যখন জাল ফেলি, আমি সবচেয়ে বড় মাছের খোঁজে থাকি না। আমি যথেষ্ট ভালো মাছ চাই। যে সবচেয়ে বড় মাছ খোঁজে, সে ঝড়ে পড়ে।\" হার্বার্ট সাইমন (১৯৫৬) একে বলেছেন <em>satisficing</em> — satisfy + suffice। সবচেয়ে ভালো খোঁজা (maximizing) সময়সাপেক্ষ, ক্লান্তিকর, আর অনেক সময় ভুল। যথেষ্ট ভালো নেওয়া দ্রুত, কার্যকর, আর সন্তুষ্টি দেয়। বই ৩২ (মস্তিষ্কের কারিগর) তোমাকে শিখিয়েছে — মস্তিষ্কের সম্পদ সীমিত। সব সিদ্ধান্তে পারফেকশন চাইলে মস্তিষ্ক ক্লান্ত হয়।</div></div>

<div class=\"dialogue\">\"তোমার কাছে একটা সিদ্ধান্ত আছে?\" ইব্রাহিম জিজ্ঞেস করলেন। তুমি বললে — \"হ্যাঁ। PhD করব কিনা ভাবছি।\" ইব্রাহিম ঘাড় নাড়লেন। \"এটা Type 1 সিদ্ধান্ত — একমুখী দরজা। সময় নাও। পরামর্শ নাও। প্রিমর্টেম করো — ভাবো কীভাবে ব্যর্থ হবে, সেটা এড়াও। অনুশোচনা ফ্রেম ব্যবহার করো — দশ বছর পর কোনটার আফসোস বেশি? PhD না করা? নাকি PhD করে অন্য কিছু ছাড়া? আর প্রত্যাশিত মান — সম্ভাবনা × ফল। শুধু আবেগ দিয়ে সিদ্ধান্ত নিও না। আবেগ স্পষ্ট কথা বলে ঠিকই — কিন্তু সম্পূর্ণ কথা বলে না।\"</div>
<div class=\"dialogue en\">\"You have a decision?\" Ibrahim asked. You said — \"Yes. I'm thinking whether to do a PhD.\" Ibrahim nodded. \"This is a Type 1 decision — one-way door. Take time. Seek counsel. Premortem — think how it would fail, avoid that. Use the regret frame — in ten years, which will you regret more? Not doing PhD? Or doing PhD and losing something else? And expected value — probability × outcome. Don't decide by emotion alone. Emotions speak clearly — but not completely.\"</div>

<div class=\"callout info\"><span class=\"co-icon\">📝</span><div><strong>সিদ্ধান্ত খাতা (Decision Journal):</strong> ইব্রাহিম বললেন — প্রতিটা বড় সিদ্ধান্তের পরে একটা খাতায় লেখো: কী সিদ্ধান্ত নিলে, কেন, কী প্রত্যাশা, কী ভয়। ছয় মাস পর ফিরে দেখো — কী হলো? তোমার প্রত্যাশা কি ঠিক ছিল? ভয় কি সত্যি হলো? এটা তোমার সিদ্ধান্ত নেওয়ার ক্যালিব্রেশন করবে — আবদুল্লাহর আন্দাজ খাতার মতো।</div></div>

<div class=\"dialogue\">ইস্তিখারাহ। নবী সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম শিখিয়েছেন — প্রতিটা গুরুত্বপূর্ণ সিদ্ধান্তে ইস্তিখারার নামাজ পড়ো। ইস্তিখারাহ মানে — 'ভালোটা বেছে নেওয়া'। তুমি চেষ্টা করো, চিন্তা করো, পরামর্শ নাও, সম্ভাবনা হিসাব করো — আর তারপর আল্লাহর কাছে ফয়সালা ছাড়ো। \"হে আল্লাহ, যদি এই বিষয়ে কল্যাণ থাকে, তবে তুমি সহজ করো। যদি অকল্যাণ থাকে, তবে দূর করো।\" ইস্তিখারাহ অলসতা নয় — এটা চেষ্টার পরের সমর্পণ। ইব্রাহিম সব আবহাওয়া পড়েন, সব হিসাব করেন — তারপর বলেন, \"আল্লাহর উপর ভরসা।\" সেটাই ইস্তিখারাহ।</div>
<div class=\"dialogue en\">Istikhara. The Prophet (peace be upon him) taught — pray istikhara on every important decision. Istikhara means — 'seeking the good.' You try, think, seek counsel, calculate probability — then leave the outcome to Allah. \"O Allah, if there is good in this, make it easy. If harm, turn it away.\" Istikhara is not laziness — it's surrender after effort. Ibrahim reads all weather, does all calculation — then says, \"Trust in Allah.\" That is istikhara.</div>

<div class=\"secret-box\">🧭 সিদ্ধান্ত দুই ধরনের — একমুখী দরজায় ধীরে (সময়, পরামর্শ, প্রিমর্টেম), দ্বিমুখী দরজায় দ্রুত (পরীক্ষা, ফিডব্যাক, সংশোধন)। প্রত্যাশিত মান হিসাব করো, অনুশোচনা ফ্রেম ব্যবহার করো, সবচেয়ে ভালো নয় — যথেষ্ট ভালো নাও। চেষ্টার পর ফল আল্লাহর উপর ছাড়ো — ইস্তিখারাহ।</div>`
});

// ══ DOOR 9: SECOND-ORDER THINKING & SYSTEMS ══
doors.push({
  num:9, icon:"🌾", color:"#6366f1", name:"কৃষকের ঋতু",
  subtitle:"The Farmer's Seasons", tech:"Second-Order Thinking, Feedback Loops, Cobra Effect",
  spirit:"তাদবির — দূরদর্শী পরিকল্পনা, দীর্ঘমেয়াদী চিন্তা",
  secret:"প্রথম-স্তরের চিন্তা বলে — 'এটা করলে এই ফল হবে।' দ্বিতীয়-স্তরের চিন্তা বলে — 'তারপর কী?' আর তৃতীয়-স্তরের চিন্তা বলে — 'তারপরের তারপর কী?' সালমা আজ বীজ বোনেন — ফল আসবে পাঁচ বছর পর। তিনি ভাবেন মরসুমে নয়, দশকে। কারণ প্রতিটা কাজের ফল থাকে, আর সেই ফলেরও ফল থাকে। যে শুধু প্রথম ফল দেখে, সে কোবরা ইফেক্টে পড়ে — ভালো করতে গিয়ে খারাপ করে। ফলের ফল পর্যন্ত দেখার এই দূরদর্শিতার নামই তাদবির।",
  recall:{
    q:"সালমা 'কোবরা ইফেক্ট' দিয়ে কী বোঝাতে চাইলেন?",
    qen:"What did Salma mean by the 'cobra effect'?",
    a:"ব্রিটিশ আমলে দিল্লিতে কোবরা বেশি ছিল। সরকার পুরস্কার দিল — মৃত কোবরা আনলে টাকা। প্রথম-স্তরের ফল: কোবরা কমল। দ্বিতীয়-স্তরের ফল: মানুষ কোবরা পালন শুরু করল — টাকা পাওয়ার জন্য। সরকার পুরস্কার বাতিল করলে পালিত কোবরা ছেড়ে দিল — আগের চেয়ে বেশি কোবরা। ভালো করতে গিয়ে খারাপ। এটাই কোবরা ইফেক্ট — ইনসেনটিভ উল্টো ফল দেয় যখন দ্বিতীয়-স্তরের চিন্তা করা হয় না।",
    aen:"In British era, Delhi had too many cobras. Government offered bounty — dead cobra, money. First-order result: cobras decreased. Second-order result: people started breeding cobras — for the bounty. When the bounty was cancelled, bred cobras were released — more cobras than before. Good intent, bad outcome. This is the cobra effect — incentives backfire when second-order thinking is absent."
  },
  story:`
<p class=\"scene-setting\">নবম দরজা। একটা কৃষকের মাঠ। বিস্তীর্ণ সবুজ — ধানের চারা, সবুজের সমুদ্র। দূরে আম গাছের সারি। আকাশে ভরদুপুরের রোদ, কয়েকটা মেঘ ভাসছে। কৃষক সালমা মাঠের ধারে দাঁড়িয়ে আছেন — বয়স্কা, পায়ে কাদা-মাখা জুতা (তাঁর সিগনেচার), হাতে একটা ছোট্ট কোদাল, চোখ দূরে — যেখানে আকাশ মাটি মিশছে। গন্ধ — ভেজা মাটির গভীর গন্ধ, সবুজ চারার সতেজতা, রোদে পোড়া তৃণের উষ্ণ ভাব। শব্দ — বাতাসে চারার কুসুম শব্দ, দূরে গরুর ডাক, সালমার কোদালের খোঁচা মাটিতে।</p>
<p class=\"scene-setting en\">The ninth door. A farmer's field. Vast green — rice seedlings, a sea of green. Mango trees in rows in the distance. Midday sun overhead, clouds drifting. Farmer Salma stands at field's edge — elderly, mud-caked boots on her feet (her signature), a small hoe in her hand, eyes on the horizon — where sky meets earth. Smell — deep scent of wet earth, fresh green seedlings, warm sun-baked grass. Sound — soft rustle of seedlings in wind, distant cow-call, Salma's hoe poking the soil.</p>

<div class=\"dialogue\">সালমা তোমাকে দেখলেন। কোদাল মাটিতে রেখে হাত ঝাড়লেন। \"বসো।\" তুমি মাটির একটা ঢিবিতে বসলে। সালমা বললেন: \"ইব্রাহিম তোমাকে সিদ্ধান্ত শিখিয়েছেন। ভালো। কিন্তু সিদ্ধান্ত নেওয়া এক জিনিস, সেই সিদ্ধান্তের ফল সহ্য করা আরেক জিনিস। আমি কৃষক। আমি আজ বীজ বোনি — ফল পাই পাঁচ বছর পর। আমি মরসুমে ভাবি না — আমি দশকে ভাবি।\"</div>
<div class=\"dialogue en\">Salma saw you. Set the hoe on the ground, wiped her hands. \"Sit.\" You sat on a mound of earth. Salma said: \"Ibrahim taught you decision. Good. But deciding is one thing, bearing its fruit another. I'm a farmer. I sow seeds today — I get fruit five years later. I don't think in seasons — I think in decades.\"</div>

<div class=\"callout warn\"><span class=\"co-icon\">⚠️</span><div><strong>ব্যর্থতা আগে — প্রথম-স্তরের চিন্তা:</strong> সালমা বললেন — \"তুমি যখন একটা কাজ করো, তুমি ভাবো — 'এটা করলে এই ফল হবে।' শেষ। কিন্তু ফলেরও ফল আছে। আর সেই ফলেরও ফল। তুমি শুধু প্রথমটা দেখো। বাকিগুলো অপ্রত্যাশিত আসে — আর তুমি বলো — 'হায়, আমি ভাবিনি!' সমস্যা হলো তুমি ভাবোনি, নয় — তুমি স্তরে ভাবোনি।\"</div></div>

<div class=\"dialogue\">\"হাওয়ার্ড মার্কস,\" সালমা বললেন, \"একজন বিনিয়োগকারী। তিনি একটা সূত্র দিয়েছেন। <strong>প্রথম-স্তরের চিন্তা:</strong> 'এই কোম্পানির ভবিষ্যৎ ভালো, তাই শেয়ার কিনব।' সহজ, সোজা, সবাই ভাবে। <strong>দ্বিতীয়-স্তরের চিন্তা:</strong> 'এই কোম্পানির ভবিষ্যৎ ভালো, কিন্তু সবাই জানে — তাই শেয়ারের দামে সেটা ঢুকে গেছে। কিন্তু সবাই যা ভাবছে তার চেয়ে পরিস্থিতি আরও ভালো — তাহলে কিনব।' কঠিন, গভীর, কম লোক ভাবে।\"</div>
<div class=\"dialogue en\">\"Howard Marks,\" Salma said, \"an investor. He gave a formula. <strong>First-order thinking:</strong> 'This company has a good future, so I'll buy shares.' Simple, direct, everyone thinks it. <strong>Second-order thinking:</strong> 'This company has a good future, but everyone knows — so the share price already reflects it. But the situation is even better than everyone thinks — then I'll buy.' Hard, deep, few think it.\"</div>

<div class=\"compare\">
  <div class=\"cmp-card cmp-bad\"><div class=\"cmp-label\">❌ প্রথম-স্তর</div>
    \"এই ফিচারটা যোগ করলে ইউজার খুশি হবে।\"<br><br>
    শেষ। কিন্তু ইউজার খুশি হলে কী হবে? বেশি ব্যবহার? সার্ভার লোড? বাগ রিপোর্ট? মডারেশন চাপ?
  </div>
  <div class=\"cmp-card cmp-good\"><div class=\"cmp-label\">✅ দ্বিতীয়-স্তর</div>
    \"ফিচার যোগ করলে ইউজার খুশি → ব্যবহার বাড়বে → সার্ভার লোড বাড়বে → স্কেলিং দরকার → খরচ বাড়বে। প্রস্তুতি নাও।\"<br><br>
    ধাপে ধাপে, প্রতিটা ফলের ফল।
  </div>
</div>

<div class=\"dialogue\">\"এখন একটা কাল্পনিক উদাহরণ,\" সালমা মাটিতে আঙুল দিয়ে দাগ টানলেন। \"ব্রিটিশ আমলে দিল্লিতে কোবরা সাপ বেশি ছিল। সরকার একটা সিদ্ধান্ত নিল — মৃত কোবরা আনলে টাকা দেওয়া হবে।\" সালমা একটু থামলেন। \"প্রথম-স্তরের ফল কী? কোবরা কমল — মানুষ মেরে টাকা আনছে। সরকার খুশি। কিন্তু দ্বিতীয়-স্তরের ফল কী?\"</div>
<div class=\"dialogue en\">\"Now an illustrative example,\" Salma drew a line in the soil with her finger. \"In British era, Delhi had too many cobras. Government decided — bring a dead cobra, get money.\" Salma paused. \"First-order result? Cobras decreased — people killed them for money. Government happy. But second-order result?\"</div>

<div class=\"stat-grid\">
<div class=\"stat-card\"><div class=\"sc-num\">১ম স্তর</div><div class=\"sc-label\">কোবরা কমল ✓</div></div>
<div class=\"stat-card\"><div class=\"sc-num\">২য় স্তর</div><div class=\"sc-label\">মানুষ কোবরা পালন শুরু ✗</div></div>
<div class=\"stat-card\"><div class=\"sc-num\">৩য় স্তর</div><div class=\"sc-label\">পুরস্কার বাতিল</div></div>
<div class=\"stat-card\"><div class=\"sc-num\">৪র্থ স্তর</div><div class=\"sc-label\">পালিত কোবরা মুক্ত — আগের চেয়ে বেশি ✗✗</div></div>
</div>

<div class=\"dialogue\">\"দ্বিতীয়-স্তরের ফল,\" সালমা বললেন, \"মানুষ কোবরা পালন শুরু করল — টাকা পাওয়ার জন্য। সরকার যখন বুঝল, পুরস্কার বাতিল করল। তখন পালিত কোবরাগুলো ছেড়ে দেওয়া হলো — আগের চেয়ে বেশি কোবরা। ভালো করতে গিয়ে খারাপ। এটাই <strong>কোবরা ইফেক্ট</strong> — হর্স্ট সিবার্ট (১৯৭১) এই নাম দিয়েছেন। ইনসেনটিভ উল্টো ফল দেয় যখন দ্বিতীয়-স্তরের চিন্তা করা হয় না।\"</div>
<div class=\"dialogue en\">\"Second-order result,\" Salma said, \"people started breeding cobras — for the bounty. When government realized, they cancelled the reward. Then bred cobras were released — more cobras than before. Good intent, bad outcome. This is the <strong>cobra effect</strong> — Horst Siebert (1971) named it. Incentives backfire when second-order thinking is absent.\"</div>

<div class=\"callout tip\"><span class=\"co-icon\">🔄</span><div><strong>ফিডব্যাক লুপ (Feedback Loop):</strong> সালমা বললেন — প্রতিটা সিদ্ধান্ত একটা চক্র শুরু করে। <strong>পজিটিভ ফিডব্যাক</strong> (reinforcing): ফল আরও ফল জন্ম দেয়। যেমন — ভালো কোড → সহজ রিভিউ → দ্রুত ডেপ্লয় → বেশি ফিচার → বেশি ইউজার → বেশি রাজস্ব → বেশি ডেভেলপার → আরও ভালো কোড। <strong>নেগেটিভ ফিডব্যাক</strong> (balancing): ফল নিজেকে সীমিত করে। যেমন — বেশি ইউজার → সার্ভার ধীর → ইউজার ছাড়ে → লোড কমে → সার্ভার দ্রুত। বই ৪ (নগর নির্মাতার কোডেক্স) তোমাকে সিস্টেম চিন্তা শিখিয়েছে — এই দরজা সেটার গভীরে যায়।</div></div>

<div class=\"dialogue\">\"আরেকটা উদাহরণ,\" সালমা বললেন। \"বই ২৩ (অপ্রতিদ্বন্দ্বী কারিগর) তোমাকে বলেছে — সিস্টেম চিন্তা প্রথম-নীতির ভাই। তুমি একটা কোম্পানিতে কাজ করো। ম্যানেজার বললেন — 'প্রতিটা বাগ রিপোর্টের জন্য ডেভেলপারদের পুরস্কৃত করা হবে।' প্রথম-স্তর: বাগ কমবে। দ্বিতীয়-স্তর কী?\" তুমি ভাবলে। \"ডেভেলপাররা নিজেরাই বাগ রিপোর্ট করবে — পুরস্কার পাওয়ার জন্য।\" সালমা হাসলেন। \"ঠিক। আর তৃতীয়-স্তর?\"</div>
<div class=\"dialogue en\">\"Another example,\" Salma said. \"Book 23 told you — systems thinking is first principles' sibling. You work at a company. Manager says — 'developers will be rewarded for every bug report.' First-order: bugs decrease. Second-order?\" You thought. \"Developers will report bugs themselves — for the reward.\" Salma smiled. \"Exactly. And third-order?\"</div>

<div class=\"dialogue\">\"তৃতীয়-স্তর — ডেভেলপাররা ইচ্ছা করে বাগ রাখবে, পরে রিপোর্ট করবে।\" সালমা ঘাড় নাড়লেন। \"হ্যাঁ। আর চতুর্থ-স্তর — কোডের মান স্থায়ীভাবে নষ্ট। একটা ভালো উদ্দেশ্য — 'বাগ কমাও' — চার স্তর পরে কোড ধ্বংস। কোবরা ইফেক্ট।\" সালমা মাটি থেকে উঠে দাঁড়ালেন। \"প্রতিটা সিদ্ধান্তের পরে একটা প্রশ্ন করো — <strong>'তারপর কী?'</strong> আর তারপর কী? আর তারপর? যতক্ষণ না প্রতিটা উত্তর যাচাই করা যায়।\"</div>
<div class=\"dialogue en\">\"Third-order — developers will deliberately leave bugs, report later.\" Salma nodded. \"Yes. And fourth-order — code quality permanently destroyed. A good intent — 'reduce bugs' — four layers later, code ruin. Cobra effect.\" Salma stood up from the soil. \"After every decision, ask — <strong>'and then what?'</strong> And then what? And then? Until each answer can be verified.\"</div>

<div class=\"callout info\"><span class=\"co-icon\">💡</span><div><strong>ইনসেনটিভ চেক (Incentive Check):</strong> সালমা বললেন — প্রতিটা সিদ্ধান্তে ভাবো — এই সিদ্ধান্তে কার স্বার্থ কী? কে লাভবান? কে ক্ষতিগ্রস্ত? চার্লি ম্যাঞ্জার বলেছেন — <em>'Show me the incentive, I'll show you the outcome.'</em> আমাকে ইনসেনটিভ দেখাও, আমি ফল দেখাব। ইনসেনটিভ বুঝলে ফল আগে থেকেই জানা যায়।</div></div>

<div class=\"dialogue\">তাদবির। আল্লাহ কুরআনে বলেন: <em>"তোমরা প্রস্তুতি নাও তাদের জন্য যত পারো — শক্তি ও সজ্জিত ঘোড়া। যার দ্বারা আল্লাহর শত্রু ও তোমাদের শত্রুকে ভয় দেখাবে।"</em> (৮:৬০ প্যারাফ্রেজ।) তাদবির মানে দূরদর্শী পরিকল্পনা — আগে থেকে প্রস্তুতি, দীর্ঘমেয়াদী চিন্তা। সালমা যখন বীজ বোনেন, তিনি শুধু এই মরসুমের কথা ভাবেন না — তিনি ভাবেন পাঁচ বছর পরের কথা। মাটি কী হবে? জল থাকবে? রোগ আসবে? এটাই তাদবির — স্তরে স্তরে চিন্তা। আল্লাহ আরও বলেন: <em>"যে মাটি থেকে তোমাদের সৃষ্টি করেছি, তাতেই ফিরিয়ে দেব, আর সেখান থেকেই আবার বের করব।"</em> (২০:৫৫ — আল্লাহ প্রতিটা বিষয়ের ফল নির্ধারণ করেছেন।) — প্রতিটা ফলাফলের জন্য প্রস্তুতি। দ্বিতীয়-স্তরের চিন্তা হলো তাদবিরের কারিগরি।</div>
<div class=\"dialogue en\">Tadbir. Allah says in the Quran: <em>Prepare against them whatever you can — strength and mounted horses.</em> (8:60 paraphrased.) Tadbir means far-seeing planning — preparation ahead, long-term thinking. When Salma sows seeds, she doesn't think only of this season — she thinks of five years later. What will the soil be? Will water remain? Will disease come? This is tadbir — layer upon layer of thought. Allah also says: <em>From the earth We created you, and to it We will return you, and from it We will bring you out once more.</em> (20:55 — Allah has determined the outcome of every matter.) Second-order thinking is the craft of tadbir.</div>

<div class=\"secret-box\">🌾 প্রতিটা কাজের ফল আছে, আর সেই ফলেরও ফল। দ্বিতীয়-স্তরের চিন্তা বলে — 'তারপর কী?' আর তারপর কী? কোবরা ইফেক্ট — ভালো করতে গিয়ে খারাপ, যখন ইনসেনটিভ উল্টো দেয়। প্রতিটা সিদ্ধান্তে তাদবির — দীর্ঘমেয়াদী প্রস্তুতি।</div>`
});

// ══ DOOR 10: THE WEAVER'S LOOM — SYNTHESIS ══
doors.push({
  num:10, icon:"🪡", color:"#a5b4fc", name:"তাঁতের কাছে প্রত্যাবর্তন",
  subtitle:"Return to the Loom", tech:"Synthesis — Weaving All Nine Threads into One Protocol",
  spirit:"হিকমাহ — সব সূত্র এক কাপড়ে বোনা",
  secret:"নয়টা সূত্র সংগ্রহ হয়েছে — মডেল, যুক্তি, ভ্রষ্টাচার, সম্ভাবনা, মূলসূত্র, সমাধান, আন্দাজ, সিদ্ধান্ত, দ্বিতীয়-স্তর। একটা কাপড় বোনা বাকি। যে কাপড়ের নাম — সুচিন্তিত জীবন। তুমি আর এক একটা হাতিয়ার ধরো না — তুমি একটা তাঁত চালাও। প্রতিটা সমস্যায় সব সূত্র লাগে না, কিন্তু তুমি জানো কোনটা কখন লাগে। এটাই হিকমাহ। মনের ত্রয়ী সম্পূর্ণ — রক্ষা, রক্ষণাবেক্ষণ, তীক্ষ্ণতা।",
  recall:{
    q:"জাকিরা কোন নয়টা সূত্র এক কাপড়ে বুনলেন?",
    qen:"Which nine threads did Zakira weave into one cloth?",
    a:"এক — মডেলের ল্যাটিসওয়ার্ক (জাকিরা): এক হাতিয়ার নয়, একটা তাঁত। দুই — যুক্তির গঠন (ইউসুফ): প্রিমিস ও সিদ্ধান্তের জোড়। তিন — ভ্রষ্টাচারের গ্যালারি (নাফিসা): ফাটল ধরা, স্টিলম্যান। চার — সম্ভাবনার খাতা (রুকাইয়া): বেস রেট ও আপডেট। পাঁচ — মূলসূত্রের হাপ (সুলতান): ভিত্তিতে নামা, উল্টো চিন্তা। ছয় — সমাধানের কাঁচি (হালিমা): পলিয়ার চার ধাপ। সাত — আন্দাজের আবাকাস (আবদুল্লাহ): ফার্মি ও ক্যালিব্রেশন। আট — সিদ্ধান্তের নৌকা (ইব্রাহিম): এক/দ্বিমুখী, অনুশোচনা। নয় — ঋতুর চিন্তা (সালমা): দ্বিতীয়-স্তর, তাদবির।",
    aen:"One — latticework (Zakira): not one tool, a loom. Two — logic (Yusuf): joints of premises. Three — fallacies (Nafisa): finding cracks, steelmanning. Four — probability (Rukayya): base rate and updating. Five — first principles (Sultan): foundation, inversion. Six — problem-solving (Halima): Polya's four steps. Seven — estimation (Abdullah): Fermi and calibration. Eight — decision (Ibrahim): one/two-way, regret. Nine — second-order (Salma): layers, tadbir."
  },
  story:`
<p class=\"scene-setting\">দশম দরজা। তুমি ফিরে এলে — সেই উঠোনে, সেই তাঁতের সামনে। আবার সেই গন্ধ — রাঙা সূত্রের রাসায়নিক ঝাঁঝ, পুরনো কাঠ, তুলোর উষ্ণ ভাব। প্রথম দরজার সেই গন্ধ — তুমি চিনতে পারলে। তাঁতি জাকিরা আবার বসে আছেন — আঙুলে কালির দাগ, চোখে সূক্ষ্ম দৃষ্টি, ঠিক যেমন প্রথম দরজায়। কিন্তু একটা পার্থক্য — তাঁর পাশে একটা ঝুড়িতে নয়টা রঙের সূত্র। গাঢ় নীল, সবুজ, মেরুন, সোনালি, কালো, বেগুনি, রূপালি, তামাটে, সাদা। প্রতিটা সূত্রের সাথে এক একজন কারিগরের ছাপ। জাকিরা দেখলেন তোমাকে। এবার হাসলেন। \"তুমি ফিরেছ। সূত্রগুলো এনেছ?\" তুমি ঘাড় নাড়লে।</p>
<p class=\"scene-setting en\">The tenth door. You returned — to that courtyard, before that loom. Weaver Zakira sits again — ink-stained fingertips, sharp gaze, just as in the first door. But one difference — beside her, a basket of nine colored threads. Deep blue, green, maroon, gold, black, purple, silver, copper, white. Each thread carries the mark of one craftsperson. Zakira saw you. Smiled this time. \"You've returned. Brought the threads?\" You nodded.</p>

<div class=\"dialogue\">\"তাহলে শুরু করি,\" জাকিরা প্রথম সূত্র তুললেন — গাঢ় নীল। \"এটা তোমার তাঁত। এটা আমার পাঠ — মডেলের ল্যাটিসওয়ার্ক। একটা হাতিয়ার নয়, একটা তাঁত। তুমি এখানে শিখেছিলে — যার একটাই মডেল, সে হাতুড়িওয়ালা। যার অনেক, সে কারিগর। এটাই তোমার ভিত্তি।\" তিনি সূত্রটা তাঁতের চরিত্রে বসালেন — উল্লম্ব, মজবুত। \"এটাই ওয়ার্প (warp) — তাঁতের মেরুদণ্ড।\"</div>
<div class=\"dialogue en\">\"Then let's begin,\" Zakira lifted the first thread — deep blue. \"This is your loom. This is my lesson — the latticework of mental models. Not one tool, a loom. You learned here — one who has one model is a hammer-man. One who has many is a craftsperson. This is your foundation.\" She placed the thread on the loom's warp — vertical, strong. \"This is the warp — the loom's spine.\"</div>

<div class=\"dialogue\">\"এবার ওয়েফ্ট (weft) — অনুভূমিক সূত্র, যেগুলো ওয়ার্পের উপর দিয়ে যায়।\" জাকিরা একে একে বাকি আটটা সূত্র তুললেন। \"দুই — <strong style='color:#818cf8'>ছুতার ইউসুফের সূত্র</strong>। যুক্তির গঠন। প্রিমিস ও সিদ্ধান্তের জোড়। বৈধ গঠন, সত্য প্রিমিস।\" তিনি সবুজ সূত্রটা নীলের উপর দিয়ে চালালেন।</div>
<div class=\"dialogue en\">\"Now the weft — horizontal threads, passing over the warp.\" Zakira lifted the remaining eight threads one by one. \"Two — <strong style='color:#818cf8'>Carpenter Yusuf's thread</strong>. Structure of logic. Joint of premises and conclusion. Valid structure, true premise.\" She passed the green thread over the blue.</div>

<div class=\"dialogue\">\"তিন — <strong style='color:#a5b4fc'>মূর্তিকার নাফিসার সূত্র</strong>। ভ্রষ্টাচারের গ্যালারি। ফাটল ধরা। স্টিলম্যান।\" মেরুন সূত্র। \"চার — <strong style='color:#6366f1'>হিসাবরক্ষক রুকাইয়ার সূত্র</strong>। সম্ভাবনার খাতা। বেস রেট ও বেইসিয়ান আপডেট।\" সোনালি সূত্র। \"পাঁচ — <strong style='color:#818cf8'>কামার সুলতানের সূত্র</strong>। মূলসূত্রের হাপ। ভিত্তিতে নামা। উল্টো চিন্তা। প্রিমর্টেম।\" কালো সূত্র।</div>
<div class=\"dialogue en\">\"Three — <strong style='color:#a5b4fc'>Sculptor Nafisa's thread</strong>. Gallery of fallacies. Finding cracks. Steelmanning.\" Maroon thread. \"Four — <strong style='color:#6366f1'>Accountant Rukayya's thread</strong>. Ledger of probability. Base rate and Bayesian update.\" Gold thread. \"Five — <strong style='color:#818cf8'>Blacksmith Sultan's thread</strong>. Forge of first principles. Descending to foundation. Inversion. Premortem.\" Black thread.</div>

<div class=\"dialogue\">\"ছয় — <strong style='color:#6366f1'>দরজি হালিমার সূত্র</strong>। সমাধানের কাঁচি। পলিয়ার চার ধাপ। বুঝো, পরিকল্পনা, বানাও, ফিরে তাকাও।\" বেগুনি সূত্র। \"সাত — <strong style='color:#a5b4fc'>মুদি আবদুল্লাহর সূত্র</strong>। আন্দাজের আবাকাস। ফার্মি অনুমান। ক্যালিব্রেশন।\" রূপালি সূত্র। \"আট — <strong style='color:#818cf8'>জেলে ইব্রাহিমের সূত্র</strong>। সিদ্ধান্তের নৌকা। একমুখী/দ্বিমুখী দরজা। অনুশোচনা। স্যাটিসফাইসিং।\" তামাটে সূত্র। \"নয় — <strong style='color:#6366f1'>কৃষক সালমার সূত্র</strong>। ঋতুর চিন্তা। দ্বিতীয়-স্তর। ফিডব্যাক লুপ। তাদবির।\" সাদা সূত্র।</div>
<div class=\"dialogue en\">\"Six — <strong style='color:#6366f1'>Tailor Halima's thread</strong>. Shears of problem-solving. Polya's four steps. Understand, plan, execute, look back.\" Purple thread. \"Seven — <strong style='color:#a5b4fc'>Grocer Abdullah's thread</strong>. Abacus of estimation. Fermi estimation. Calibration.\" Silver thread. \"Eight — <strong style='color:#818cf8'>Fisherman Ibrahim's thread</strong>. Boat of decision. One-way/two-way doors. Regret. Satisficing.\" Copper thread. \"Nine — <strong style='color:#6366f1'>Farmer Salma's thread</strong>. Thinking in seasons. Second-order. Feedback loops. Tadbir.\" White thread.</div>

<div class=\"dialogue\">জাকিরা একটু থামলেন। নয়টা সূত্র ওয়ার্পের উপর দিয়ে চলছে। কিন্তু কাপড় হয়নি। জাকিরা বললেন — \"আগে একটা ভুল দেখাই।\" তিনি শুধু একটা সূত্র নিলেন — গাঢ় নীল, আমার নিজের। সেটা দিয়ে বুনতে শুরু করলেন। দুই সেলাই — তারপর টান দিলেন। সূত্রটা ছিঁড়ে গেল। কাপড় হলো না। \"একটা সূত্র দিয়ে কাপড় হয় না,\" জাকিরা বললেন। \"তুমি যদি শুধু যুক্তি দিয়ে সব সমস্যা সমাধান করতে চাও — যুক্তি ছিঁড়ে যাবে। শুধু সম্ভাবনা দিয়ে চাও — সম্ভাবনা ছিঁড়ে যাবে। একটা হাতিয়ার পর্যাপ্ত নয়। দরকার নয়টা — একসাথে।\" তিনি নয়টা সূত্র একসাথে ধরলেন। \"দেখো — সূত্রগুলো আলাদা। পাশাপাশি, কিন্তু মিলিত নয়। একটা কাপড় হতে হলে — সূত্রগুলো একে অপরের সাথে গাঁথতে হবে। গাঁথাই হলো সংশ্লেষণ (synthesis)।\" তিনি পাতাটা চালাতে শুরু করলেন — ঠক... ঠক... প্রতিটা সূত্র একে অপরের সাথে গাঁথা যাচ্ছে। \"এখন তুমি একটা আসল সমস্যা আনো। আমি দেখাই কীভাবে নয়টা সূত্র একসাথে কাজ করে।\"</div>
<div class=\"dialogue en\">Zakira paused. The nine threads pass over the warp. But no cloth yet. Zakira said — \"Let me show a mistake first.\" She took only one thread — the deep blue, her own. Began to weave with it. Two passes — then she pulled. The thread snapped. No cloth. \"One thread cannot make cloth,\" Zakira said. \"If you try to solve every problem with logic alone — logic will snap. With probability alone — probability will snap. One tool is not enough. Nine are needed — together.\" She held all nine at once. \"See — the threads are separate. Side by side, but not joined. To become cloth — the threads must interlock with each other. This interlocking is synthesis.\" She began to work the shuttle — clack... clack... each thread interlocking with the others. \"Now bring a real problem. I'll show how the nine threads work together.\"</div>

<div class=\"dialogue\">তুমি বললে — \"ঠিক আছে। আমার একটা আসল সমস্যা আছে।\" তুমি একটা নিঃশ্বাস নিলে। \"আমার একটা স্টার্টআপ আইডিয়া আছে — একটা AI-চালিত শিক্ষা প্ল্যাটফর্ম। আমি ভাবছি — চাকরি ছেড়ে এটায় ঝাঁপ দেব কিনা।\" জাকিরা ঘাড় নাড়লেন। \"ভালো সমস্যা। একটা সময় ছিল যখন এই সিদ্ধান্ত শুধু আবেগে নিতে হতো। এখন তোমার কাছে নয়টা সূত্র আছে। চলো দেখি।\"</div>
<div class=\"dialogue en\">You said — \"Alright. I have a real problem.\" You took a breath. \"I have a startup idea — an AI-driven education platform. I'm thinking — should I quit my job and jump into this?\" Zakira nodded. \"Good problem. Once, this decision had to be made by emotion alone. Now you have nine threads. Let's see.\"</div>

<table class=\"kv-table\"><tr><th>সূত্র</th><th>কারিগর</th><th>সমস্যায় কী বলে</th></tr>
<tr><td class=\"hl\">১ মডেল</td><td>জাকিরা</td><td>অন্য স্টার্টআপ কীভাবে শুরু হয়েছিল? শুধু এক মডেল (থ্যাল) নয়।</td></tr>
<tr><td class=\"hl\">২ যুক্তি</td><td>ইউসুফ</td><td>'AI গরম, তাই শিক্ষা AI সফল' — এই যুক্তি বৈধ কি? লুকানো প্রিমিস খোঁজো।</td></tr>
<tr><td class=\"hl\">৩ ভ্রষ্টাচার</td><td>নাফিসা</td><td>'সবাই AI স্টার্টআপ করছে' — কি ফলস ডাইলেমা? স্টিলম্যান করো প্রতিপক্ষের।</td></tr>
<tr><td class=\"hl\">৪ সম্ভাবনা</td><td>রুকাইয়া</td><td>স্টার্টআপের বেস রেট: ৯০% ব্যর্থ। একটা ভালো আইডিয়া দেখে বেস রেট ভুলো না।</td></tr>
<tr><td class=\"hl\">৫ মূলসূত্র</td><td>সুলতান</td><td>প্রিমর্টেম করো — এটা কীভাবে ব্যর্থ হবে? পাঁচটা কারণ বের করো।</td></tr>
<tr><td class=\"hl\">৬ সমাধান</td><td>হালিমা</td><td>পলিয়ার চার ধাপ। বুঝো (বাজার কী), পরিকল্পনা (MVP), বানাও, ফিরে তাকাও।</td></tr>
<tr><td class=\"hl\">৭ আন্দাজ</td><td>আবদুল্লাহ</td><td>ফার্মি: কত ইউজার? × কত মাসিক ফি? = কত আয়? স্যানিটি চেক।</td></tr>
<tr><td class=\"hl\">৮ সিদ্ধান্ত</td><td>ইব্রাহিম</td><td>এটা Type 1 সিদ্ধান্ত — একমুখী। অনুশোচনা ফ্রেম: ১০ বছর পর কোনটার আফসোস?</td></tr>
<tr><td class=\"hl\">৯ দ্বিতীয়-স্তর</td><td>সালমা</td><td>ছাড়লে কী হবে → তারপর কী → আর তারপর? ইনসেনটিভ চেক।</td></tr>
</table>

<div class=\"dialogue\">\"দেখো,\" জাকিরা বললেন, \"নয়টা সূত্র একসাথে কাজ করছে। একটা সূত্র বলছে — আবেগ দেখো। আরেকটা বলছে — বেস রেট দেখো। আরেকটা বলছে — ফিউচার দেখো। কোনো একটা সূত্র একা এই সিদ্ধান্ত দিতে পারে না। কিন্তু নয়টা মিলে একটা সম্পূর্ণ ছবি দেয়। এটাই সংশ্লেষণ।\" তিনি পাতাটা ধীরে ধীরে চালালেন। কাপড় তৈরি হচ্ছে — নয় রঙের সূত্র এক জায়গায়।</div>
<div class=\"dialogue en\">\"See,\" Zakira said, \"the nine threads work together. One says — look at emotion. Another — look at base rate. Another — look at the future. No single thread can give this decision. But nine together give a complete picture. This is synthesis.\" She worked the shuttle slowly. The cloth forms — nine colored threads as one.</div>

<div class=\"callout info\"><span class=\"co-icon\">🧠</span><div><strong>মনের ত্রয়ী (Mind Trilogy):</strong> জাকিরা বললেন — এই বই শেষ হচ্ছে, কিন্তু ত্রয়ী শেষ হচ্ছে না — ত্রয়ী <em>সম্পূর্ণ</em> হচ্ছে। <strong>বই ২৪ (সিংহাসন):</strong> তোমার মন কীভাবে ধোঁকা দেয় — প্রতিরোধ। <strong>বই ৩২ (মস্তিষ্কের কারিগর):</strong> মস্তিষ্ক কীভাবে চলে — রক্ষণাবেক্ষণ। <strong>বই ৩৩ (যুক্তির তাঁত):</strong> তুমি কীভাবে চিন্তা করবে — আক্রমণ। রক্ষা, রক্ষণাবেক্ষণ, তীক্ষ্ণতা — তিনটাই এক সাথে লাগে। একটা ছাড়া আর দুটো অর্ধেক।</div></div>

<div class=\"dialogue\">তুমি জিজ্ঞেস করলে — \"কিন্তু এত কিছু মনে রাখব কীভাবে?\" জাকিরা হাসলেন। \"মনে রাখার দরকার নেই। তাঁতি কখনো সূত্র গুনে রাখে না। সে শুধু জানে — এই রঙের সূত্র এখানে, ওই রঙের ওখানে। তুমি এক মাস এই হাতিয়ারগুলো প্রতিদিন ব্যবহার করো — একটা সংবাদ পড়ে ভাবো (ভ্রষ্টাচার?), একটা সিদ্ধান্ত নিয়ে ভাবো (Type 1 না 2?), একটা সমস্যা দেখে ভাবো (পলিয়ার চার ধাপ)। এক মাস পর তুমি আর গুনবে না — তুমি দেখবে।\"</div>
<div class=\"dialogue en\">You asked — \"But how will I remember all this?\" Zakira smiled. \"You don't need to remember. A weaver never counts threads. She just knows — this color goes here, that color there. Use these tools daily for one month — reading news, think (fallacy?); making a decision, think (Type 1 or 2?); seeing a problem, think (Polya's four steps). In a month you won't count — you'll see.\"</div>

<div class=\"dialogue\">হিকমাহ। আল্লাহ কুরআনে বলেন: <em>\"যাকে হিকমাহ দেওয়া হয়েছে, তাকে অনেক কল্যাণ দেওয়া হয়েছে। কিন্তু বোধশক্তিসম্পন্ন ছাড়া কেউ উপলব্ধি করে না।\"</em> (২:২৬৯) হিকমাহ শুধু জ্ঞান নয়। হিকমাহ হলো জ্ঞান প্রয়োগ করা — সঠিক সময়ে, সঠিক জায়গায়, সঠিক পরিমাণে। জাকিরা নয়টা সূত্র জানেন না — তিনি জানেন কোনটা কখন টানতে হবে। সেটাই হিকমাহ। তোমার লক্ষ্য একটা মডেল নয় — একটা হিকমাহ। আর হিকমাহ আসে অভ্যাস থেকে, প্রতিদিনের চর্চা থেকে, ভুল থেকে, সংশোধন থেকে। তাঁতি এক দিনে কারিগর হয় না — তিনি বুনতে বুনতে হন।</div>
<div class=\"dialogue en\">Hikmah. Allah says in the Quran: <em>Whoever is given hikmah has been given much good. But none grasp it except those of understanding.</em> (2:269) Hikmah is not just knowledge. Hikmah is applying knowledge — at the right time, in the right place, in the right amount. Zakira doesn't know nine threads — she knows which to pull when. That is hikmah. Your goal is not a model — it is hikmah. And hikmah comes from practice, daily use, error, correction. A weaver doesn't become a craftsperson in a day — she becomes by weaving.</div>

<div class=\"callout tip\"><span class=\"co-icon\">🌟</span><div><strong>পরবর্তী যাত্রা (Next Steps):</strong> জাকিরা বললেন — এই বই শেষ, কিন্তু যাত্রা শেষ নয়। <strong>(১)</strong> প্রতিদিন একটা চিন্তার খাতা রাখো — কোন সূত্র কখন ব্যবহার করলে। <strong>(২)</strong> মাসে একটা বড় সিদ্ধান্ত নেওয়ার সময় এই নয়টা সূত্র চালাও। <strong>(৩)</strong> বই ২৪, ৩২, ৩৩ একসাথে পড়ো — ত্রয়ী হিসেবে। রক্ষা + রক্ষণাবেক্ষণ + তীক্ষ্ণতা। <strong>(৪)</strong> বই ৪ (নগর নির্মাতার কোডেক্স) সিস্টেম চিন্তায় গভীরে যায় — সেটাও পড়ো।</div></div>

<div class=\"dialogue\">জাকিরা উঠে দাঁড়ালেন। তাঁতের সামনে থেকে। কাপড় প্রায় তৈরি — নয় রঙের সূত্র এক জায়গায়, এক নকশায়, এক কাপড়ে। \"এটা তোমার,\" তিনি বললেন। \"এই কাপড়ের নাম — সুচিন্তিত জীবন। তুমি এখন তাঁতের কারিগর। মনের ত্রয়ী সম্পূর্ণ। রক্ষা, রক্ষণাবেক্ষণ, তীক্ষ্ণতা — তিনটাই তোমার হাতে। এখন যাও — আর বোনো।\" তুমি উঠে দাঁড়ালে। উঠোন ছেড়ে বের হলে। পেছনে জাকিরার তাঁতের ঠক-ঠক শব্দ আসছে — সদা চালু, সদা বুনছে।</div>
<div class=\"dialogue en\">Zakira stood. From before the loom. The cloth is almost done — nine colored threads in one place, one pattern, one cloth. \"This is yours,\" she said. \"The name of this cloth — a deliberate life. You are now a weaver of the loom. The mind trilogy is complete. Defense, maintenance, sharpness — all three in your hands. Now go — and weave.\" You stood. Left the courtyard. Behind you came the clack-clack of Zakira's loom — always running, always weaving.</div>

<div class=\"secret-box\">🪡 নয়টা সূত্র এক কাপড়ে — সুচিন্তিত জীবন। জাকিরা (মডেল), ইউসুফ (যুক্তি), নাফিসা (ভ্রষ্টাচার), রুকাইয়া (সম্ভাবনা), সুলতান (মূলসূত্র), হালিমা (সমাধান), আবদুল্লাহ (আন্দাজ), ইব্রাহিম (সিদ্ধান্ত), সালমা (দ্বিতীয়-স্তর)। মনের ত্রয়ী সম্পূর্ণ: ২৪ রক্ষা, ৩২ রক্ষণাবেক্ষণ, ৩৩ তীক্ষ্ণতা। এখন তুমি তাঁতের কারিগর।</div>`
});
