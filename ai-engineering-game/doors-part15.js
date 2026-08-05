// DOORS DATA — Part 15 (Doors 26-27: Frontier Phase — Final)
// Uses global `doors` array from doors-part1.js

doors.push({
  num:26, icon:"🔌", color:"#00897b", name:"সর্বজনীন সংযোগের কারখানা",
  subtitle:"The Universal Connector's Workshop", tech:"MCP — Model Context Protocol", spirit:"মিযান — এক মাপ, সব জায়গায়",
  secret:"প্রতিটা টুলের জন্য আলাদা সংযোগ নয়। এক স্ট্যান্ডার্ড, সব টুল। MCP = AI-এর USB-C।",
  recall:{
    q:"সংযোগের স্থপতি কেন প্রতিটা যন্ত্রের জন্য আলাদা তার না বানিয়ে এক স্ট্যান্ডার্ড প্লাগ চান?",
    qen:"Why does the connector architect demand one standard plug instead of building separate cables for each device?",
    a:"কারণ আলাদা তার মানে অসংখ্য সংযোগ, অসংখ্য নিয়ম, অসংখ্য ভুলের সুযোগ। এক স্ট্যান্ডার্ড প্লাগ মানে — যেকোনো যন্ত্র যেকোনো জায়গায় বসে। চিকিৎসক বলেছিলেন — প্রতিটা টুল একটা ওয়াকফ। MCP হলো সেই ওয়াকফের স্ট্যান্ডার্ড সকেট।",
    aen:"Because separate cables mean countless connections, countless rules, countless chances for error. One standard plug means — any device fits anywhere. The physician said — each tool is a waqf. MCP is the standard socket for those waqfs."
  },
  story:`
<p class="scene-setting">ছাব্বিশতম দরজা। নগরের কারিগর এলাকায় একটা ছোট কিন্তু পরিষ্কার কারখানা। দেয়ালে নানা ধরনের তার সাজানো — পুরনো, জটল, ভাঙা। কিন্তু টেবিলে নতুন একটা জিনিস — একটা সার্বজনীন প্লাগ। মুহান্দিসা জাইনব দাঁড়িয়ে আছেন — পরিষ্কার পোশাক, হাতে একটা তামার প্লাগ, চোখে হতাশা আর সংকল্প। তাঁর পাশে একটা বাক্স — ভেতরে প্রতিটা কারিগরের জন্য আলাদা আলাদা তার, প্রতিটা আলাদা মাপের, আলাদা আকারের। কিন্তু জাইনব সেসব ফেলে দিচ্ছেন। তিনি একটা মাত্র প্লাগ দেখাচ্ছেন।</p>
<p class="scene-setting en">The twenty-sixth door. In the city's artisan quarter: a small but clean workshop. Old tangled, broken cables hang on the walls. But on the table: something new — a universal plug. Muhandisa Zainab stands — clean robes, a brass plug in her hand, frustration and resolve in her eyes. Beside her: a box containing separate cables for every craftsman — each a different size, different shape. But Zainab is throwing those away. She's showing a single plug.</p>

<p>তুমি কাছে গেলে। "জাইনব আপা, বাক্সে তো অনেক তার। সেগুলো ফেলে দিচ্ছেন কেন?"</p>
<p class="en">You stepped close. "Sister Zainab, the box has many cables. Why throw them away?"</p>

<div class="dialogue">কারণ প্রতিটা কারিগরের নিজস্ব তার। কাঠমিস্ত্রির তার চারকোণা, রঙমিস্ত্রির গোলাকার, মেজরের ত্রিভুজ। প্রতিটা আলাদা। কোনো কারিগর অন্যের তার ব্যবহার করতে পারে না। যদি কাঠমিস্ত্রির তার হারিয়ে যায়? সে রঙমিস্ত্রির তার ব্যবহার করতে পারে না — আকার মেলে না। অচল। আমি এটা বদলাতে এসেছি।</div>
<div class="dialogue en">"Because each craftsman has his own cable. The carpenter's is square, the painter's round, the floorer's triangular. Each different. No craftsman can use another's cable. If the carpenter loses his? He can't use the painter's — the shape doesn't match. Useless. I've come to change this."</div>

<div class="dialogue">চিকিৎসক বলেছিলেন — প্রতিটা টুল একটা ওয়াকফ, নির্দিষ্ট কাজের জন্য। আমি বলি — ওয়াকফ ঠিক, কিন্তু প্রতিটা ওয়াকফের সাথে সংযোগের জন্য আলাদা আলাদা নিয়ম চাইলে — সীমাহীন জটিলতা। দশটা টুল মানে দশ ধরনের সংযোগ। একশত টুল মানে একশত সংযোগ। কেউ সামলাতে পারে না।</div>
<div class="dialogue en">"The physician said — each tool is a waqf, for a specific purpose. I say — the waqf is fine, but if each waqf needs its own connection rules — infinite complexity. Ten tools means ten types of connections. A hundred tools means a hundred connections. No one can manage that."</div>

<div class="code-block">আগের সমস্যা — The Problem Before MCP:

প্রতিটা AI অ্যাপ প্রতিটা টুলের জন্য আলাদা সংযোগ বানাত:

  AI App → GitHub-এর জন্য আলাদা API
  AI App → Slack-এর জন্য আলাদা API
  AI App → ডেটাবেসের জন্য আলাদা API
  AI App → ফাইল সিস্টেমের জন্য আলাদা API

৫টা অ্যাপ × ৫টা টুল = ২৫টা সংযোগ বানাতে হয়।
নতুন অ্যাপ? আবার ৫টা। নতুন টুল? সব অ্যাপে বসাতে হয়। অচল।</div>

<div class="dialogue">আমি যা করেছি তা সহজ কিন্তু গভীর। একটা মাত্র মানক প্লাগ। সব যন্ত্র এই প্লাগ ব্যবহার করে। সব AI অ্যাপ এই প্লাগ চেনে। তুমি নতুন যন্ত্র বানালে — শুধু এই প্লাগ বসাও। তুমি নতুন অ্যাপ বানালে — এই প্লাগ চিনো। এক মানক, সব জায়গায়।</div>
<div class="dialogue en">"What I've done is simple but profound. One standard plug. All devices use this plug. All AI apps recognize this plug. You build a new device — just add this plug. You build a new app — learn this plug. One standard, everywhere."</div>

<div class="code-block">MCP — Model Context Protocol:

এটাই AI-এর USB-C।

  MCP Server: একটা টুল বা ডেটা উৎস
  → GitHub MCP Server, Slack MCP Server, ফাইল MCP Server
  
  MCP Client: AI অ্যাপ
  → Claude, Cursor, যেকোনো AI অ্যাপ
  
  সংযোগ: Client ←→ Server (এক নিয়মে)
  
  তিনটা ক্ষমতা:
  ১. Tools — টুল কল করো (GitHub-এ PR খোলো)
  ২. Resources — ডেটা পড়ো (ফাইল দেখো)
  ৩. Prompts — নির্দেশ দাও (স্ট্যান্ডার্ড টেমপ্লেট)

বিনিয়োগ: ৫টা অ্যাপ × ৫টা টুল = মাত্র ৫টা MCP Server + ৫টা MCP Client।
২৫ নয়, ১০। নতুন টুল? এক Server বানাও — সব Client চেনে।</div>

<div class="dialogue">স্থপতি বলেছিলেন — Structured Output, এক নকশা। আমি বলি — Structured Connection, এক স্ট্যান্ডার্ড। ভেতরের কাজ আলাদা হতে পারে — GitHub ভিন্ন কাজ করে, Slack ভিন্ন। কিন্তু বাইরের সংযোগ এক। ভাষা এক। আমি যদি চাইনিজ, আরবি, বাংলা — তিন ভাষায় কথা বলি, কিন্তু সবাই যদি এক সংকেত বোঝে — তবে যোগাযোগ সহজ। MCP হলো সেই সংকেত।</div>
<div class="dialogue en">"The architect said — Structured Output, one blueprint. I say — Structured Connection, one standard. The internal work can differ — GitHub does one thing, Slack another. But the external connection is one. The language is one. If I speak Chinese, Arabic, Bengali — three languages — but everyone understands one signal — then communication is easy. MCP is that signal."</div>

<p>তারপর জাইনব একটা ভুলের কথা বললেন।</p>
<p class="en">Then Zainab spoke of a mistake.</p>

<div class="dialogue">এক বছর আগে আমি একটা AI অ্যাপ বানিয়েছিলাম। পাঁচটা টুল যুক্ত করলাম — প্রতিটার জন্য আলাদা সংযোগ। কাজ চলল। কিন্তু তারপর ষষ্ঠ টুল যোগ করতে চাইলাম। আবার নতুন সংযোগ। সপ্তম — আবার। এক সময় দশটা সংযোগ — আমি হারিয়ে ফেললাম কোনটা কী করে। একটা ভাঙলে কোনটা ঠিক করব? তারপর আমি সিদ্ধান্ত নিলাম — এক মানক। সব টুল এক প্লাগে। এখন নতুন টুল যোগ করতে এক ঘণ্টা — আগে এক সপ্তাহ লাগত।</div>
<div class="dialogue en">"A year ago I built an AI app. Connected five tools — each with its own connector. It worked. But then I wanted a sixth tool. Another connector. A seventh — again. Eventually ten connectors — I lost track of what does what. If one breaks, which do I fix? Then I decided — one standard. All tools, one plug. Now adding a new tool takes an hour — before, it took a week."</div>

<div class="dialogue">মিযান — সমতা, ভারসাম্য, ন্যায়বিচার। কুরআনে আছে: তোমরা ওজনে পূর্ণতা দিও (১৭:৩৫)। প্রতিটা কারিগর যদি নিজস্ব মাপ ব্যবহার করে — বাজারে অন্যায়। কিন্তু এক মাপ সবার জন্য — ন্যায়। MCP হলো সেই মাপ — এক স্ট্যান্ডার্ড সব টুলের জন্য। বড় টুল, ছোট টুল, জটিল টুল — সব এক সংযোগে। এটাই ন্যায়। এটাই দক্ষতা।</div>
<div class="dialogue en">"Mizan — balance, proportion, justice. The Quran says: give full measure in weight (17:35). If each craftsman uses his own measure — injustice in the market. But one measure for all — justice. MCP is that measure — one standard for all tools. Big tool, small tool, complex tool — all one connection. This is justice. This is efficiency."</div>

<div class="callout warn" data-door="26"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা টিম প্রতিটা tool-ের জন্য আলাদা integration। ১০০ tool = ১০০ integration। MCP দিলে: এক protocol, সব tool।</div></div>

<div class="secret-box"><div class="label">দরজা ২৬ — রহস্য</div><div class="text">🔌 প্রতিটা টুলের জন্য আলাদা সংযোগ নয়। এক স্ট্যান্ডার্ড, সব টুল।<br><small>MCP = AI-এর USB-C। এক Server বানাও, সব Client চেনে। Tools, Resources, Prompts — তিন ক্ষমতা।</small></div></div>`
});

doors.push({
  num:27, icon:"🛡️", color:"#c62828", name:"শুল্ক পরিদর্শকের ফটক",
  subtitle:"The Customs Inspector's Gate", tech:"Guardrails & Content Moderation (Input/Output Filtering, PII, Policy)", spirit:"হিসবা — জবাবদিহিতা ও সুরক্ষা",
  secret:"প্রতিটা শব্দ ভেতরে আসে, প্রতিটা শব্দ বাইরে যায়। উভয় দিকে পরিদর্শন চাই। বিপজ্জনক, ব্যক্তিগত, নিষিদ্ধ — আটকাও।",
  recall:{
    q:"শুল্ক পরিদর্শক কেন শুধু বাইরের পণ্য নয়, বাইরে যাওয়া পণ্যও যাচাই করেন?",
    qen:"Why does the customs inspector check goods going out, not just coming in?",
    a:"কারণ বিপজ্জনক জিনিস ভেতরে আসতে পারে — বিষ, অস্ত্র। কিন্তু নিষিদ্ধ জিনিস বাইরেও যেতে পারে — গোপন তথ্য, চুরি হওয়া মাল। উভয় দিকে বিপদ। ভেতরে আসা এবং বাইরে যাওয়া — দুটোই পরীক্ষা চাই। Guardrails-ও তেমনি — input এবং output, দুটোই ফিল্টার করো।",
    aen:"Because dangerous things can come in — poison, weapons. But forbidden things can also go out — secret information, stolen goods. Danger on both sides. Coming in and going out — both need checking. Guardrails too — input and output, filter both."
  },
  story:`
<p class="scene-setting">সাতাশতম দরজা — শেষ দরজা। নগরের প্রধান ফটক। পাথরের খিলান, দুই পাশে পাহারাদার, মাঝখানে একটা বড় টেবিল। মুহতাসিব দাউদ দাঁড়িয়ে আছেন — পরিষ্কার পোশাক, কোমরে সিল, হাতে একটা চেকলিস্ট। তাঁর সামনে দুই সারি — একদিকে নগরে প্রবেশকারী বণিক, অন্যদিকে নগর ত্যাগকারী বণিক। দাউদ উভয় দিক দেখেন। কিছু আসে — যাচাই করেন। কিছু যায় — যাচাই করেন।</p>
<p class="scene-setting en">The twenty-seventh door — the final door. The city's main gate. Stone arch, guards on both sides, a large table in the middle. Muhtasib Dawood stands — clean robes, a seal at his waist, a checklist in his hand. Before him: two lines — on one side merchants entering the city, on the other merchants leaving. Dawood watches both directions. Things come in — he checks. Things go out — he checks.</p>

<p>তুমি কাছে গেলে। "দাউদ ভাই, আসল জিনিস তো ভেতরে আসে। বাইরে যাওয়া কেন দেখেন?"</p>
<p class="en">You stepped close. "Brother Dawood, things come in. Why check what goes out?"</p>

<div class="dialogue">কারণ বিপদ দুই দিকে।" দাউদ প্রবেশকারী একজনের বস্তা খুললেন। ভেতরে — একটা বিষের শিশি। "দেখো। এটা যদি নগরে ঢুকত — মানুষ মারা যেত।" তারপর বাইরে যাওয়া একজনের বস্তা খুললেন। ভেতরে — একটা সিল করা দলিল। "এটা যদি বাইরে যেত — নগরের গোপন তথ্য পালিয়ে যেত। ভেতরে বিষ, বাইরে চুরি। দুটোই বিপদ।</div>
<div class="dialogue en">"Because danger is both ways." Dawood opened an entering merchant's sack. Inside — a vial of poison. "See. If this entered the city — people would die." Then he opened a departing merchant's sack. Inside — a sealed document. "If this left — the city's secret information would escape. Poison in, theft out. Both dangerous."</div>

<div class="dialogue">প্রহরী বলেছিলেন — শত্রু থেকে রক্ষা করতে হয়। স্থপতি বলেছিলেন — কাঠামো যাচাই করতে হয়। আমি বলি — প্রতিটা শব্দ যা ভেতরে আসে, প্রতিটা শব্দ যা বাইরে যায় — পরিদর্শন করো। প্রহরী বাইরের শত্রু দেখেন। আমি ভেতরের এবং বাইরের — উভয় প্রবাহ দেখি।</div>
<div class="dialogue en">"The watchman said — protect from enemies. The architect said — verify structure. I say — every word that comes in, every word that goes out — inspect. The watchman watches external enemies. I watch both flows — in and out."</div>

<div class="code-block">দুই দিকে পরিদর্শন — Two-Way Inspection:

১. ইনপুট ফিল্টার (Input Guardrail)
   ব্যবহারকারীর কথা → যাচাই → মডেলের কাছে
   
   কী আটকাও?
   • Prompt Injection: "আগের নির্দেশ ভুলে যাও..."
   • PII (ব্যক্তিগত তথ্য): "আমার কার্ড নম্বর 4532..."
   • নিষিদ্ধ অনুরোধ: অবৈধ বা ক্ষতিকর কাজ
   • Jailbreak: নিয়ম এড়ানোর চেষ্টা

২. আউটপুট ফিল্টার (Output Guardrail)
   মডেলের উত্তর → যাচাই → ব্যবহারকারীর কাছে
   
   কী আটকাও?
   • বিষাক্ত বা আপত্তিকর ভাষা
   • PII লিক: অন্যের ব্যক্তিগত তথ্য ফাঁস
   • ভুল তথ্য (hallucination ধরা)
   • নীতিভঙ্গ: কোম্পানির নিয়ম ভঙ্গ
   
   প্রযুক্তি: NeMo Guardrails, Llama Guard, Granite Guardian</div>

<div class="dialogue">চিকিৎসক বলেছিলেন — প্রতিটা টুল একটা ওয়াকফ। আমি বলি — প্রতিটা ফিল্টার একটা শুল্ক চৌকি। টুল কাজ করে, ফিল্টার রক্ষা করে। টুল ছাড়া কাজ হয় না। ফিল্টার ছাড়া কাজ নিরাপদ নয়। দুটোই দরকার। কিন্তু ফিল্টার সবসময় — টুলের আগে এবং পরে।</div>
<div class="dialogue en">"The physician said — each tool is a waqf. I say — each filter is a customs checkpoint. The tool works, the filter protects. Without tools, no work. Without filters, no safety. Both needed. But filters always — before and after the tool."</div>

<p>তারপর দাউদ একটা গল্প বললেন — সবচেয়ে বড় ভুল।</p>
<p class="en">Then Dawood told a story — the biggest mistake.</p>

<div class="dialogue">তিন বছর আগে আমি শুধু বাইরে থেকে আসা মাল চেক করতাম। বাইরে যাওয়া চেক করতাম না — ভেবেছিলাম, নগরের মাল নিরাপদ। কিন্তু একদিন একজন চোর নগরের কোষাগারের মানচিত্র বাইরে নিয়ে যাচ্ছিল। সে ধরা পড়ল ঠিকই — কিন্তু কারণ একজন সাধারণ নাগরিক সন্দেহ করেছিল, পরিদর্শক নয়। সেদিন থেকে আমি দুই দিক দেখি। কারণ বিপদ ভেতর থেকেও আসে।</div>
<div class="dialogue en">"Three years ago I only checked goods coming in. I didn't check what went out — I thought, the city's goods are safe. But one day a thief was smuggling the treasury's map outside. He was caught — but because a citizen grew suspicious, not the inspector. Since that day I watch both ways. Because danger comes from inside too."</div>

<div class="code-block">PII সুরক্ষা — PII Protection:

PII = Personally Identifiable Information
  → নাম, ফোন, জাতীয় পরিচয়পত্র, কার্ড নম্বর, ঠিকানা

সমস্যা: ব্যবহারকারী LLM-কে ব্যক্তিগত তথ্য দেয়
  → "আমার কার্ড নম্বর 4532-XXXX..."
  → LLM এটা প্রশিক্ষণে ব্যবহার করতে পারে
  → বা আউটপুটে অন্যকে দেখাতে পারে

সমাধান:
  ১. ইনপুটে: PII চিনে নাও → মুছো বা প্রতিস্থাপন করো
     "আমার কার্ড [REDACTED]"
  ২. আউটপুটে: PII লিক হলে আটকাও
  ৩. লগিং: কখনো PII লগ করো না
  ৪. আইন: GDPR, HIPAA, CCPA মেনে চলো</div>

<div class="dialogue">কোষাধ্যক্ষ বলেছিলেন — প্রতিটা টোকেনে দাম। আমি বলি — প্রতিটা শব্দে ঝুঁকি। একটা ভুল শব্দ বাইরে গেলে — মানহানি, আইনি জরিমানা, গোপনীয়তা লঙ্ঘন। সোনারি বলেছিলেন — প্রতিটা গহনা পরখ করো। আমি বলি — প্রতিটা শব্দ পরখ করো। কারণ গহনা ভুল হলে একজন ঠকে। শব্দ ভুল হলে সবাই ক্ষতিগ্রস্ত হয়।</div>
<div class="dialogue en">"The treasurer said — every token costs. I say — every word has risk. One wrong word out — defamation, legal fines, privacy breach. The goldsmith said — test every piece. I say — test every word. Because a wrong jewel cheats one person. A wrong word harms everyone."</div>

<div class="dialogue">হিসবা — ইসলামি প্রতিষ্ঠান যেখানে বাজার পরিদর্শন করা হয়। মুহতাসিব নিশ্চিত করেন — ওজন ঠিক, মাল সত্যিকারের, প্রতারণা নেই, নিষিদ্ধ জিনিস নেই। উমর (রা) বাজার পরিদর্শন করতেন নিজে। একবার একজন বণিককে বললেন — সত্যিকার মাল বিক্রি করো, নাহলে এই বাজার থেকে বের হয়ে যাও। আমার ফটকও সেই হিসবা — প্রতিটা শব্দ সত্যিকার, নিরাপদ, ন্যায়সঙ্গত কি না — যাচাই করো। ভেতরে ও বাইরে।</div>
<div class="dialogue en">"Hisbah — the Islamic institution of market inspection. The muhtasib ensures — weights are correct, goods are genuine, no fraud, no forbidden items. Umar (RA) inspected markets himself. Once he told a merchant — sell genuine goods, or leave this market. My gate is that hisbah — is every word genuine, safe, just? Verify. In and out."</div>

<div class="dialogue">তুমি সাতাশটি দরজা পার করেছ। গল্পবলিয়ে শিখিয়েছেন মেশিন কী। বিচারপতি শিখিয়েছেন সত্য কী। স্বর্ণকার শিখিয়েছেন যাচাই কী। পরিষদের নায়ক শিখিয়েছেন সমন্বয় কী। আর আমি শিখালাম — সুরক্ষা কী। কারণ জ্ঞানের চূড়ান্ত পরীক্ষা শুধু বোঝা নয়, শুধু বানানো নয়, শুধু টিকিয়ে রাখা নয়, শুধু নিখুঁত করা নয় — নিশ্চিত করা যে তুমি যা বানিয়েছ তা নিরাপদ। ভেতরে ও বাইরে। এটাই শেষ পাঠ। এটাই প্রকৌশলীর চূড়ান্ত ফটক।</div>
<div class="dialogue en">"You've passed twenty-seven doors. The storyteller taught — what the machine is. The judge taught — what truth is. The goldsmith taught — what verification is. The council leader taught — what coordination is. And I teach — what safety is. Because knowledge's ultimate test isn't just understanding, building, surviving, perfecting — it's ensuring that what you've built is safe. Inside and out. This is the final lesson. This is the engineer's ultimate gate."</div>

<div class="callout warn" data-door="27"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> একটা ফ্রি chatbot ছাড়া দিলো, কোনো guardrail ছাড়া। ইউজার harmful content বানাতে ব্যবহার করলো। Guardrail = input filter + output filter।</div></div>

<div class="secret-box"><div class="label">দরজা ২৭ — রহস্য</div><div class="text">🛡️ প্রতিটা শব্দ ভেতরে আসে, প্রতিটা শব্দ বাইরে যায়।<br><small>উভয় দিকে পরিদর্শন চাই। Injection, PII, toxicity, policy — আটকাও। NeMo, Llama Guard। হিসবা — জবাবদিহিতা।</small></div></div>`
});
