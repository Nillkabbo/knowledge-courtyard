// DOORS DATA — Part 14 (Door 25: Frontier Phase)
// Phase 6: The Frontier — emerging technologies shaping the future of AI engineering
// Uses global `doors` array from doors-part1.js

doors.push({
  num:25, icon:"🏛️", color:"#6a1b9a", name:"শিল্পী সংঘের পরিষদ",
  subtitle:"The Council of Guilds", tech:"Multi-Agent Orchestration (5 Workflow Patterns)", spirit:"ওয়াকালা — প্রতিনিধিত্ব ও অর্পণ",
  secret:"এক এজেন্ট এক কাজ। কঠিন কাজে অনেক এজেন্ট — কেউ ভাগ করে, কেউ সমান্তরালে চলে, কেউ যাচাই করে। কিন্তু সমন্বয় চাই।",
  recall:{
    q:"পরিষদের নায়ক কেন নিজে সব কাজ করেন না, বরং প্রতিটা গিল্ডকে আলাদা দায়িত্ব দেন?",
    qen:"Why doesn't the council leader do everything himself instead of giving each guild a separate task?",
    a:"কারণ একজন মানুষ একসাথে সব পারে না। কাঠমিস্ত্রি কাঠ কাটে, স্থপতি নকশা দেয়, রঙমিস্ত্রি রাঙায় — প্রতিটা গিল্ড এক কাজে সেরা। পরিষদ সমন্বয় করে। এক এজেন্ট এক কাজে ভালো, কিন্তু জটিল কাজে অনেক এজেন্ট দরকার — প্রতিটা নিজের ভূমিকায়।",
    aen:"Because one person can't do everything at once. The carpenter cuts wood, the architect designs, the painter paints — each guild is best at one thing. The council coordinates. One agent is good at one task, but complex work needs many agents — each in its own role."
  },
  story:`
<p class="scene-setting">পঁচিশতম দরজা। নগরের কেন্দ্রে একটা বিশাল গোলাকার কক্ষ — পরিষদের ঘর। ছাদে ঝুলন্ত বাতি, দেয়ালে প্রতিটা গিল্ডের পতাকা, মাঝখানে একটা গোল টেবিল। রাইস তামিম বসে আছেন — গাঢ় সবুজ পোশাক, হাতে একটা কাঠের হাতুড়ি (সব গিল্ডের প্রতীক), চোখ প্রতিটা প্রবেশদ্বারে। তাঁর চারপাশে পাঁচটা দরজা — প্রতিটা দরজা এক একটা গিল্ডের দিকে যায়। একজন বণিক এসেছে — সে চায় একটা সুন্দর ঘর বানানো। কিন্তু তামিম নিজে হাতুড়ি তুলছেন না। তিনি প্রতিটা গিল্ডকে ডাকছেন।</p>
<p class="scene-setting en">The twenty-fifth door. At the city's center: a vast circular chamber — the council hall. Hanging lanterns from the ceiling, each guild's banner on the walls, a round table in the middle. Ra'is Tamim sits — dark green robes, a wooden hammer in his hand (the symbol of all guilds), eyes on every entrance. Around him: five doors — each leading to a different guild. A merchant has come — he wants a beautiful room built. But Tamim isn't lifting a hammer himself. He's calling each guild.</p>

<p>তুমি কাছে গেলে। "তামিম ভাই, আপনি নিজে বানান না কেন? আপনি তো পারেন।"</p>
<p class="en">You stepped close. "Brother Tamim, why don't you build it yourself? You can."</p>

<div class="dialogue">আমি একটা ঘর পারি। কিন্তু একটা সুন্দর ঘর? সে জন্য পাঁচ গিল্ড লাগে। কাঠমিস্ত্রি — কাঠ কাটবে, দেয়াল বানাবে। স্থপতি — নকশা দেবে, মাপ ঠিক করবে। রঙমিস্ত্রি — রাঙাবে। মেজর — মেঝে সমান করবে। আলোর কারিগর — জানালা বসাবে। আমি একা করলে — একটা কাজ ভালো, বাকি চারটা মোটামুটি। কিন্তু পাঁচজন মিললে — প্রতিটা কাজ সেরা।</div>
<div class="dialogue en">"I can build one room. But a beautiful room? That needs five guilds. Carpenter — cuts wood, builds walls. Architect — designs, fixes measurements. Painter — paints. Floorer — levels the floor. Light artisan — places windows. If I do it alone — one task good, the other four mediocre. But five together — every task excellent."</div>

<div class="dialogue">কাফেলা প্রধান বলেছিলেন — এক এজেন্ট সিদ্ধান্ত নিয়ে টুল ব্যবহার করে। আমি বলি — এক এজেন্ট ভালো, কিন্তু যখন কাজ বড়, যখন একাধিক ধাপ, যখন একাধিক দক্ষতা দরকার — তখন এক এজেন্ট কাফেলা নয়, পুরো কাফেলা দরকার। প্রতিটা এজেন্ট এক গিল্ড।</div>
<div class="dialogue en">"The caravan master said — one agent decides and uses tools. I say — one agent is good, but when the task is large, when there are multiple steps, when multiple skills are needed — then you don't need one agent, you need a whole caravan. Each agent is one guild."</div>

<div class="code-block">পাঁচ কর্মপ্রবাহ — Five Multi-Agent Patterns:

১. ধারাবাহিক শৃঙ্খল (Prompt Chaining)
   এক এজেন্টের আউটপুট → পরের এজেন্টের ইনপুট
   
   এজেন্ট ১: প্রশ্ন বুঝো → সারাংশ দাও
   এজেন্ট ২: সারাংশ নাও → অনুবাদ করো
   এজেন্ট ৩: অনুবাদ নাও → যাচাই করো
   
   ✓ সহজ, নিয়ন্ত্রিত, প্রতিটা ধাপ যাচাইযোগ্য
   ✗ ধীর — প্রতিটা ধাপ আগেরটা সম্পূর্ণ না হলে শুরু হয় না

২. রাউটিং (Routing)
   প্রশ্ন এসেছে → কোন বিশেষজ্ঞ দরকার? → সেই বিশেষজ্ঞকে দাও
   
   প্রশ্ন: "আমার কোড ভাঙা" → রাউটার: কোড এজেন্ট
   প্রশ্ন: "আমার চুল্লি ভাঙা" → রাউটার: মেরামত এজেন্ট
   প্রশ্ন: "আমার হিসাব ভুল" → রাউটার: হিসাব এজেন্ট
   
   ✓ প্রতিটা বিশেষজ্ঞ নিজের কাজে সেরা
   ✗ ভুল রাউট হলে ভুল উত্তর

৩. সমান্তরাল (Parallelization)
   এক প্রশ্ন → একাধিক এজেন্ট একসাথে → ফলাফল এক করো
   
   এজেন্ট A: আইনি দিক দেখো (একই সময়ে)
   এজেন্ট B: আর্থিক দিক দেখো (একই সময়ে)
   এজেন্ট C: প্রযুক্তিগত দিক দেখো (একই সময়ে)
   → তিনটি ফলাফল একত্রিত করো
   
   ✓ দ্রুত — সব একসাথে চলে
   ✗ সমন্বয় কঠিন — ফলাফল মেলানো কঠিন

৪. সংগঠক-কর্মী (Orchestrator-Workers)
   এক সংগঠক → কাজ ভাগ করে → কর্মীরা করে → সংগঠক একত্রিত করে
   
   সংগঠক: এই বড় প্রতিবেদন লেখো
   → কর্মী ১: প্রথম অধ্যায় লেখো
   → কর্মী ২: দ্বিতীয় অধ্যায় লেখো
   → কর্মী ৩: তৃতীয় অধ্যায় লেখো
   সংগঠক: তিনটি মেলাও, সম্পূর্ণ প্রতিবেদন দাও
   
   ✓ বড় কাজে সেরা — ভাগ করে জয়
   ✗ জটিল — সংগঠক চতুর হতে হয়

৫. মূল্যায়ক-সংশোধক (Evaluator-Optimizer)
   এজেন্ট কাজ করে → মূল্যায়ক দেখে → ভালো না হলে আবার করো
   
   লেখক: উত্তর লেখো
   মূল্যায়ক: এই উত্তর কি সঠিক? সম্পূর্ণ? নিরাপদ?
   → যদি না হয়: লেখককে ফিডব্যাক দাও → আবার লেখো
   → যতক্ষণ না মূল্যায়ক সন্তুষ্ট
   
   ✓ সবচেয়ে নিখুঁত — আত্ম-সংশোধন
   ✗ ধীর ও ব্যয়বহুল — একাধিক চক্র</div>

<div class="dialogue">বাজপালক বলেছিলেন — একাধিক উৎস থেকে সাক্ষ্য আনো। আমি বলি — একাধিক এজেন্ট থেকে কাজ করাও। কিন্তু সব কৌশল সব কাজের জন্য নয়। সহজ কাজে এক এজেন্ট। মাঝারি কাজে চেইন বা রাউটিং। জটিল কাজে সমান্তরাল বা সংগঠক। নিখুঁত কাজে মূল্যায়ক। কোনটা কখন — সেটাই সিদ্ধান্ত।</div>
<div class="dialogue en">"The falconer said — bring evidence from multiple sources. I say — make multiple agents work. But not every technique fits every task. Easy tasks: one agent. Medium: chaining or routing. Complex: parallel or orchestrator. Perfect work: evaluator. Which when — that's the decision."</div>

<p>তারপর তামিম একটা গল্প বললেন — বড় ভুল।</p>
<p class="en">Then Tamim told a story — a big mistake.</p>

<div class="dialogue">গত বছর একজন চাইল একটা প্রাসাদ বানাতে। আমি ভাবলাম — আমি পারব। নিজে শুরু করলাম। কাঠ কাটলাম, দেয়াল বানালাম, ছাদ চাপালাম — সব একসাথে। কিন্তু কাঠের মাপ স্থপতির নকশার সাথে মিলল না। ছাদ দেয়ালের ওপর বসল না। সব ভাঙতে হলো। এক মাস নষ্ট। কারণ আমি সব গিল্ডের কাজ নিজে করতে গেছি। এক এজেন্ট দিয়ে পাঁচ গিল্ডের কাজ করালে এটাই হয়।</div>
<div class="dialogue en">"Last year someone wanted a palace built. I thought — I can do it. Started alone. Cut wood, built walls, placed the roof — all at once. But the wood measurements didn't match the architect's design. The roof didn't sit on the walls. Had to demolish everything. A month wasted. Because I tried to do all guilds' work myself. One agent doing five guilds' work — this is what happens."</div>

<div class="dialogue">স্বর্ণকার বলেছিলেন — প্রতিটা গহনা পরখ করো। আমি বলি — প্রতিটা এজেন্টের আউটপুট পরখ করো। এজেন্ট A ভালো কাজ করল কিনা? এজেন্ট B? একত্রিত ফলাফল সঠিক? একটা এজেন্ট ভুল করলে পুরো শৃঙ্খল ভাঙে। তাই মূল্যায়ক-সংশোধক প্যাটার্ন সবচেয়ে গুরুত্বপূর্ণ — স্বয়ংক্রিয় যাচাই।</div>
<div class="dialogue en">"The goldsmith said — test every piece. I say — test every agent's output. Did agent A do good work? Agent B? Is the combined result correct? If one agent errs, the whole chain breaks. So the evaluator-optimizer pattern is most important — automated verification."</div>

<div class="dialogue">ওয়াকালা — ইসলামি আইনে প্রতিনিধিত্ব। তুমি কাউকে তোমার হয়ে কাজ করতে পাঠাতে পারো — কিন্তু দায়িত্ব তোমার। নবীজি (সা) গভর্নর নিযুক্ত করতেন, বিচারপতি নিযুক্ত করতেন, দূত পাঠাতেন — প্রতিটা প্রতিনিধি নির্দিষ্ট ক্ষমতায়। কিন্তু চূড়ান্ত দায়িত্ব নবীজির। মাল্টি-এজেন্ট সিস্টেমও তেমনি — প্রতিটা এজেন্ট একটা গিল্ড, কিন্তু সমন্বয় ও দায়িত্ব সংগঠকের। ওয়াকালা ছাড়া অরাজকতা। সমন্বয় ছাড়া পাঁচ এজেন্ট = পাঁচটা ভিন্ন ভুল।</div>
<div class="dialogue en">"Wakalah — agency in Islamic law. You can send someone to act on your behalf — but the responsibility is yours. The Prophet (peace be upon him) appointed governors, judges, envoys — each delegate with specific authority. But ultimate responsibility was his. Multi-agent systems too — each agent is one guild, but coordination and responsibility belong to the orchestrator. Without wakalah, chaos. Without coordination, five agents = five different mistakes."</div>

<div class="secret-box"><div class="label">দরজা ২৫ — রহস্য</div><div class="text">🏛️ এক এজেন্ট এক কাজ। কঠিন কাজে অনেক এজেন্ট।<br><small>৫ প্যাটার্ন: চেইন, রাউটিং, সমান্তরাল, সংগঠক-কর্মী, মূল্যায়ক-সংশোধক। সমন্বয় চাই — ওয়াকালা।</small></div></div>`
});
