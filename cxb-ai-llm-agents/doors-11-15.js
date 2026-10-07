// doors-11-15.js — Cloud X Berry Series Book 2: The AI Agents Atlas
// Doors 11-15 (continued from doors-1-5.js and doors-6-10.js — no const redeclaration)

doors.push({
  num: 11,
  icon: "🛠️",
  color: "#c084fc",
  name: "কোডিং যুগের নতুন নিয়ম",
  subtitle: "Why Claude Won + Cursor's Origin",
  tech: "Agentic coding tools (goal→steps, real codebase, tool loop); agent-native platforms vs glued-together systems",
  spirit: "জামাত — আলাদা টুকরো নয়, সমন্বিত সব",
  secret: "AI কোডিংয়ের আসল লাফ এক ফাইলের কোড লেখা নয় — পুরো কোডবেসকে লক্ষ্য দিয়ে চালানো; আর পরের লাফ: টুকরো টুকরো টুল আঠায় জোড়া নয়, এজেন্টকে কেন্দ্র করে পুরো ওয়ার্কফ্লো ডিজাইন।",
  recall: {
    q: "Claude Code-কে 'agentic' করে যা, সেটা কী? আর Cursor Origin এনে কী বদলালো?",
    qen: "What makes Claude Code agentic, and what does Cursor's Origin change?",
    a: "Agentic = ছোট প্রশ্নের উত্তর নয় — বড় লক্ষ্য নিয়ে নিজেই ধাপে ভাঙা, সত্যি কোডবেসে টুল চালানো (ফাইল পড়া, সার্চ, কমান্ড, টেস্ট), ফল দেখে ঠিক করা। Origin বদলায় স্থাপত্য: আলাদা AI-টুল + GitHub + CI/CD-কে MCP-আঠায় জোড়ার বদলে রিপো-এজেন্ট-অটোমেশন-রিভিউ এক ইকোসিস্টেমে — এজেন্টকে ঘিরে ডিজাইন।",
    aen: "Agentic = taking a large goal, breaking it into steps, using tools on the real codebase (inspect, search, run, test), iterating on results. Origin changes the architecture: instead of gluing separate tools with MCP, the repo, agent, automation, and review are one ecosystem designed around agents."
  },
  story: `<p class="scene-setting">ডেভেলপার হিসেবে তুমি জানো ফারাকটা কোথায় — AI-কে একটা ফাংশন লিখতে বলা, আর AI-কে একটা পুরো কোডবেস সামলাতে দেওয়া। প্রথমটা চ্যাটবটের কাজ, দ্বিতীয়টা সহকর্মীর। শিক্ষকের প্রথম ভিডিও দেখায় Claude Code কেন সেই দ্বিতীয় জায়গায় জিতলো — আর দ্বিতীয় ভিডিওতে প্রশ্ন: GitHub-এর জায়গায় Cursor-এর Origin এনে আসলে কী বদলালো?</p>
<p class="scene-setting en">As a developer you know the gap: asking AI to write one function versus handing it a whole codebase. The first is a chatbot's job; the second is a colleague's. Video one shows why Claude Code won the second space — video two asks what Cursor's Origin actually changes versus GitHub.</p>
<div class="code-block">CLAUDE CODE — কেন জিতলো (শিক্ষকের ৭ ফিচারের মূল সুর):

১. AGENTIC — ছোট অনুরোগ নয়, বড় লক্ষ্য
   "এই প্রজেক্ট অ্যানালাইজ করে ব্যাখ্যা করো" —
   নিজেই রিপো ঘুরে, ডিরেক্টরি-ফাইল দেখে,
   কম্পোনেন্ট-সংযোগ বুঝে হাই-লেভেল ব্যাখ্যা।
   নতুন চাকরির প্রথম সপ্তাহের কাজ মিনিটে।

২. সত্যি কোডবেস — চ্যাটে পেস্ট নয়
   প্রজেক্ট ডিরেক্টরির বিপরীতে চলে:
   সোর্স, কনফিগ, ডিপেন্ডেন্সি, টেস্ট, ডক।
   আসল ইঞ্জিনিয়ারিংয়ের কষ্ট: "কোথায় বদলাব?
   এর উপর কী নির্ভর করে? কোন কনভেনশন?"

৩. টুল লুপ — এজেন্টের প্রাণ
   "টেস্ট ফেল কেন খুঁজে ফিক্স করো" মানে:
   প্রজেক্ট দেখো → রিলেভেন্ট কোড পাও →
   টেস্ট চালাও → ফেল চেনো → কোড বদলাও →
   আবার চালাও → সবুজ হলে থামো।
   (দরজা ৪-এর হার্নেস-লুপ, এবার চোখের সামনে)</div>
<div class="dialogue">এবার Origin-এর গল্প। প্রথম দর্শনে সাধারণ GitHub-ক্লোন: রিপো হোস্ট, PR, কানেক্টর। কিন্তু শিক্ষকের প্রশ্ন ধারালো — এজেন্ট তো আগেই GitHub API/MCP দিয়ে ব্রাঞ্চ-কমিট-PR করতে পারে, তাহলে নতুন কী? উত্তর: সম্ভব হওয়া আর জন্মগতভাবে ডিজাইন হওয়া এক নয়।</div>
<div class="diagram">
<div class="diag-title">আঠার জোড়া বনাম এক ইকোসিস্টেম — শিক্ষকের তুলনা</div>
<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
  <text class="lbl" x="140" y="30" text-anchor="middle">আগে: আলাদা সিস্টেম</text>
  <rect class="cell" x="15" y="50" width="76" height="46" rx="8"/>
  <text class="lbl-sm" x="53" y="78" text-anchor="middle">AI টুল</text>
  <rect class="cell" x="105" y="50" width="76" height="46" rx="8"/>
  <text class="lbl-sm" x="143" y="78" text-anchor="middle">GitHub</text>
  <rect class="cell" x="195" y="50" width="70" height="46" rx="8"/>
  <text class="lbl-sm" x="230" y="78" text-anchor="middle">CI/CD</text>
  <line class="edge" x1="91" y1="73" x2="105" y2="73"/>
  <line class="edge" x1="181" y1="73" x2="195" y2="73"/>
  <text class="lbl-sm" x="140" y="122" text-anchor="middle">MCP/API আঠায় জোড়া</text>
  <text class="lbl-sm" x="140" y="144" text-anchor="middle">প্রত্যেকে আলাদা মালিকানায়</text>
  <text class="lbl" x="420" y="30" text-anchor="middle">Origin: এক ইকোসিস্টেম</text>
  <circle cx="420" cy="95" r="58" fill="rgba(192,132,252,.10)" stroke="#c084fc" stroke-width="1.5"/>
  <text class="lbl-sm" x="420" y="62" text-anchor="middle">রিপো</text>
  <text class="lbl-sm" x="420" y="84" text-anchor="middle">এজেন্ট</text>
  <text class="lbl-sm" x="420" y="106" text-anchor="middle">অটোমেশন</text>
  <text class="lbl-sm" x="420" y="128" text-anchor="middle">রিভিউ</text>
  <text class="lbl-sm" x="420" y="178" text-anchor="middle">সব অংশ এজেন্ট-কেন্দ্রিক</text>
  <text class="lbl-sm" x="420" y="198" text-anchor="middle">এক নকশায় জন্মায়</text>
</svg>
<div class="diag-cap">PR-এ ফিডব্যাক এলো বা চেক ফেল করলো — একই সিস্টেমে এজেন্ট বুঝে বুঝে ঠিক করে চালিয়ে যেতে পারে।</div>
</div>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>দুই ভিডিওর এক সুর:</strong> Claude Code জিতেছে এজেন্ট-লুপ আর সত্যি কোডবেস-অ্যাক্সেসে (মডেলের বাইরের স্থাপত্য — দরজা ৪ ও ১০-এর পুরনো পাঠ), Origin এগোচ্ছে এক ধাপ এhead — <strong>এজেন্টকে বাইরের অতিথি নয়, সিস্টেমের নাগরিক বানিয়ে</strong>।</div></div>
<div class="secret-box">🛠️ কোড লেখানো থেকে কাজ সমর্পণ — এটাই নতুন যুগ; আর সেই কাজ যত গভীরে যায়, টুলগুলো তত এক-সুরে বাজাতে হয়।</div>`,
  senior: {
    title: "Claude Code + Cursor Origin — দ্রুত গাইড",
    body: "<p><strong>Claude Code (agentic কোডিং):</strong> লক্ষ্য→ধাপ, আসল কোডবেস-অ্যাক্সেস (সোর্স/কনফিগ/টেস্ট/ডক), টুল-লুপ (inspect→run→fix→rerun)। <strong>Cursor Origin:</strong> GitHub-এর বিকল্প নয় শুধু — রিপো+এজেন্ট+অটোমেশন+রিভিউ এক ইকোসিস্টেম; এজেন্ট-নেটিভ ডিজাইনে PR-ফিডব্যাক/চেক-ফেল পেলেও এজেন্ট নিজেই ঠিক করে চালায়। প্যাটার্ন: MCP-আঠার জোড়া টুল → এক-নকশার ইকোসিস্টেম।</p>"
  }
});

doors.push({
  num: 12,
  icon: "⚖️",
  color: "#c084fc",
  name: "দাম, বিকল্প ও সত্যের ছাপ",
  subtitle: "$200 Claude/Codex Killers + Claude Watermark",
  tech: "Open coding models ranked by use (reasoning/agentic/multimodal); watermarking via biased token selection",
  spirit: "মীযান — টাকার পাল্লা আর সত্যের পাল্লা",
  secret: "কোডিং AI বাছাই সবচেয়ে বুদ্ধিমান মডেল খোঁজা নয় — কাজের ধরন মিলিয়ে খোঁজা; আর AI-লেখা চেনার উপায় লেখার পরে দাগ দেওয়া নয় — জেনারেশনের মুহূর্তে পছন্দকে সামান্য বাঁকানো।",
  recall: {
    q: "Claude-এর ওয়াটারমার্ক টেক্সটে কীভাবে লুকানো থাকে?",
    qen: "How is Claude's watermark hidden inside text?",
    a: "টেক্সট লেখার পরে কিছু যোগ না করে — জেনারেশনের সময়ই প্রতিটা ধাপে সম্ভাব্য পরের-টোকেনগুলোকে গোপন নিয়মে দুই দলে ভাগ করা হয়; পছন্দের দলের টোকেন সামান্য বেশি সম্ভাবনা পায়। এক-একটা পছন্দ অদৃশ্য, কিন্তু পুরো লেখায় পরিসংখ্যানগত প্যাটার্ন জমে — সেটাই ডিটেক্টর পড়ে।",
    aen: "Nothing is added after writing — during generation, at each step a secret rule splits candidate next-tokens into two groups; the preferred group gets slightly higher probability. Each choice is invisible, but the statistical pattern accumulates across the text, and that is what a detector reads."
  },
  story: `<p class="scene-setting">দুটো ভিডিও, দুটো প্রশ্ন, এক থিম। প্রথম প্রশ্ন: মাসে $২০০ Claude/Codex-এর বিকল্প কি ওপেন-সোর্স জগতে আছে? শিক্ষক সাজান ১০টা ওপেন কোডিং মডেল — নম্বর দিয়ে নয়, কাজ দিয়ে। দ্বিতীয় প্রশ্ন: AI-লেখা আর মানুষের লেখা তো আর আলাদা করা যায় না — তাহলে চিনব কীভাবে? উত্তর: ওয়াটারমার্ক, কিন্তু ছবির মতো নয়।</p>
<p class="scene-setting en">Two videos, two questions, one theme. First: are there open-source rivals to $200/month Claude/Codex? The teacher ranks ten open coding models by what each is for. Second: AI text looks human — how to identify it? Watermarking, but not like images.</p>
<div class="code-block">১০ ওপেন কোডিং মডেল — শিক্ষকের বাছাই-যুক্তি
("সবচেয়ে স্মার্ট" নয়, "কী জন্য" — এটাই মূল পাঠ):

১০. GPS — reasoning-ঘেঁষা: কোড লেখা সহজ,
    আসল কষ্ট সমস্যা বোঝা — লগ+কুয়েরি+এরর
    পড়ে রোগ ধরা (ডিবাগিং/আর্কিটেকচার)
৯. DEVSTRAL SMALL — agentic: কোড দেওয়ার পর
    থামা নয় — সার্চ, এডিট, রান, ফল দেখা,
    ঠিক করা... investigate→change→test→adjust লুপ
৮. MINIMAX M3 — multimodal: ভাঙা UI-র স্ক্রিনশট
    দিলে ছবিটাই কনটেক্সট — শব্দে বোঝানো
    কঠিন সমস্যা চোখে দেখা যায়
... এভাবে নামতি মানে: প্রতিটা মডেল একটা
    "কেন" বহন করে — ranking নয়, mapping।

শিক্ষকের সিদ্ধান্ত-নিয়ম:
  কোডিং AI বাছাই = smartest খোঁজা নয়,
  তোমার কাজের ধরন মিলানো।</div>
<div class="dialogue">এবার ওয়াটারমার্কের গোড়ার সমস্যাটা বোঝো। ছবিতে সহজ — লক্ষ লক্ষ পিক্সেল, কটায় অদৃশ্য বদল কেউ টের পায় না। কিন্তু টেক্সটে? "Thank you for your support" — মাত্র কয়েকটা শব্দ; একটা বদলালেই অর্থ বদলে যায়। তাহলে দাগ কোথায় লুকাবে? উত্তরটা চমৎকার: লুকানোর জায়গা শব্দে নয় — <strong>পছন্দের প্যাটার্নে</strong>।</div>
<div class="code-block">টোকেন-পছন্দের ওয়াটারমার্ক (ধাপে ধাপে):

Claude একবারে প্যারাগ্রাফ লেখে না —
টোকেন-পর-টোকেন (দরজা ৯)।
"Thank you for your ___" — পরের টোকেন হতে পারে:
  help / support / assistance / guidance
সবগুলোই মানানসই — মডেলের কাছে সম্ভাবনার তালিকা।

গোপন নিয়ম এসে টোকেনগুলোকে দুই দলে ভাগে:
  দল ক: help, assistance (পছন্দ)
  দল খ: support, guidance
পছন্দের দল সামান্য বেশি সম্ভাবনা পায় —
Claude এখনো যেকোনো মানানসই শব্দ বেছে নিতে পারে,
কিন্তু পালা পেরেলে পছন্দের দিকে সামান্য ঝোঁক।

ফল: প্রতিটা বাক্য স্বাভাবিক থাকে,
কিন্তু শত শত পছন্দ জমা হলে
পরিসংখ্যানে প্যাটার্ন ফুটে ওঠে —
ডিটেক্টর সেই প্যাটার্ন পড়ে বলে:
এই লেখা মেশিনের।</div>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সংযোগ:</strong> দরজা ৯-এ শিখেছিলে LLM-এর জীবন next-token prediction — সেই একই যন্ত্র এখানে ওয়াটারমার্কের আধার। আর দরজা ১২-এর প্রথম ভিডিওর শিক্ষা (কাজ মিলিয়ে মডেল) দরজা ১৫-এ পুরো মডেল-ফ্যামিলি ম্যাপে রূপ নেবে।</div></div>
<div class="secret-box">⚖️ মডেল বাছো কাজ মিলিয়ে, দাম মাপো পাল্লায় — আর মেশিনের লেখা চিনতে গোপন ঝোঁকের প্যাটার্ন পড়া যায়, দাগ দেখা নয়।</div>`,
  senior: {
    title: "Open Coding Models + Watermark — দ্রুত গাইড",
    body: "<p><strong>ওপেন কোডিং মডেল:</strong> প্রতিটার একটা করে কাজ — reasoning-ঘেঁষা (GPS: সমস্যা-বোঝা), agentic (Devstral: investigate→change→test→adjust লুপ), multimodal (Minimax M3: স্ক্রিনশট-কনটেক্সট) ইত্যাদি; নিয়ম: স্মার্ট-সার্চ নয়, কাজ-ম্যাপিং। <strong>ওয়াটারমার্ক:</strong> পোস্ট-হক দাগ নয় — জেনারেশনে প্রতি ধাপে প্রার্থী টোকেন গোপন নিয়মে দুই দলে, পছন্দের দলে সামান্য বায়াস; একক পছন্দ অদৃশ্য, সঞ্চিত প্যাটার্ন ডিটেক্টেবল।</p>"
  }
});

doors.push({
  num: 13,
  icon: "🛡️",
  color: "#c084fc",
  name: "ক্ষমতা আর সতর্কতা",
  subtitle: "Data Privacy + OpenClaw",
  tech: "Three AI deployment tiers (local / business-API / public chatbot) and their privacy risk; autonomous agents that act on your system",
  spirit: "আমানত — ক্ষমতা যত বড়, জিম্মাদারি তত গভীর",
  secret: "AI-এর সবচেয়ে বড় ঝুঁকি প্রায়ই মডেল নয় — কোথায় চলছে আর কতটা ক্ষমতা দিয়েছ: প্রাইভেট ডেটার প্রশ্ন 'কোথায় প্রসেস হচ্ছে', আর এজেন্টের প্রশ্ন 'ভুল হলে শুধু উত্তর ভুল নয়, কাজ ভুল হবে'।",
  recall: {
    q: "AI-এর তিনটা privacy-স্তর কী কী, আর কোনটায় ঝুঁকি সবচেয়ে কম কেন?",
    qen: "What are the three privacy tiers of AI tools and which is lowest-risk?",
    a: "১) Local AI — মডেল নিজের মেশিনে (LM Studio/Ollama), প্রম্পট বাইরে যায় না; ২) Business/API — চুক্তির ভিত্তিতে প্রোভাইডারে; ৩) Public chatbot — সবচেয়ে বেশি ঝুঁকি, ডেটা তাদের সার্ভারে। Local একটা বড় ঝুঁকি (ডেটা বাইরে যাওয়া) কমায়, কিন্তু কম্পিউটারের স্বাভাবিক সাইবার-ঝুঁকি যায় না।",
    aen: "1) Local — model on your machine, prompts never leave; 2) Business/API — provider under contract; 3) Public chatbot — highest risk. Local removes the data-egress risk but not ordinary cybersecurity risks."
  },
  story: `<p class="scene-setting">কোনো গোপন ডকুমেন্ট AI-টুলে আপলোড করার আগে এক সেকেন্ড থামো — প্রশ্ন একটাই: আমার ডেটা আসলে কোথায় যাচ্ছে? শিক্ষকের প্রথম ভিডিও দেখায়: একই মডেল ভিন্ন ভিন্ন জায়গায় চললে ঝুঁকি সম্পূর্ণ আলাদা। আর দ্বিতীয় ভিডিও একেবারে অন্য দিক থেকে একই সতর্কতা শেখায় — এবার ঝুঁকিটা তোমার ডেটার নয়, তোমার সিস্টেমের।</p>
<p class="scene-setting en">Before uploading a confidential document to any AI tool, pause one second: where is my data actually going? Video one: the same model carries totally different risk depending on where it runs. Video two flips the lens — now the risk is not your data, but your system.</p>
<div class="code-block">তিন স্তরের AI — তিন রকম ঝুঁকি:

১. LOCAL AI — নিজের মেশিনে মডেল
   LM Studio/Ollama (দরজা ৮) — মডেল ফাইল
   নামানোর পর চ্যাট-ডকুমেন্ট-বিশ্লেষণ
   ইন্টারনেট ছাড়াই; কথা ডিভাইসেই থাকে।
   লোকাল embeddings + লোকাল ভেক্টর DB +
   লোকাল মডেল = পুরো ওয়ার্কফ্লো তোমার ঘরে।
   ⚠️ কিন্তু local ≠ magically secure:
   ম্যালওয়্যার, আন-এনক্রিপ্টেড ডিস্ক, এক্সপোজড
   সার্ভার, অপরিচিত এক্সটেনশন — পুরনো সব
   সাইবার-ঝুঁকি থেকেই যায়।

২. BUSINESS/API — চুক্তিবদ্ধ প্রোভাইডার
   অ্যাপ থেকে API কল; ডেটা-হ্যান্ডলিং
   চুক্তি আর কনফিগের ভিত্তিতে।

৩. PUBLIC CHATBOT — সবচেয়ে বেশি এক্সপোজার
   কথা প্রোভাইডারের সার্ভারে; গোপন ডকুমেন্টের
   জায়গা নয়।

নিয়ম: যত সংবেদনশীল ডেটা,
তত কাছের (local) স্তর বেছে নাও।</div>
<div class="dialogue">এবার OpenClaw-এর গল্প — শুরুটা নাটকীয়: "OpenClaw ব্যবহার কোরো না। অন্তত এখনো না।" কারণ এটা হয়তো এখনকার সবচেয়ে ক্ষমতাবান AI টুলগুলোর একটা — আর সবচেয়ে সহজে নিজের সিস্টেম নষ্ট করার উপায়ও। জন্মকথাটা সুন্দর: এক ডেভেলপারের বিরক্তি থেকে — ব্রাউজার খুলে AI-কে বলা ঝামেলার — নিজের মেশিনে ছোট্ট স্ক্রিপ্ট: বন্ধুকে মেসেজ পাঠানোর মতো কম্পিউটারকে কাজ বলা। ব্যক্তিগত হ্যাক থেকে আন্দোলনে।</div>
<div class="code-block">OPENCLAW — ক্ষমতা আর বিপদ এক কয়েনের দুই পিঠ:

ক্ষমতা (যখন কাজ করে, জাদুর মতো):
  তুমি বাইরে, কেউ বাগ রিপোর্ট করলো —
  WhatsApp-এ মেসেজ দিলে, ২০ মিনিটে ফিক্স,
  কমিট, ইউজার-নোটিফিকেশন। ল্যাপটপ নেই।

বিপদ (যা কেউ বলে না):
  - কোড এক্সিকিউট করে, ফাইল ছোঁয়া, অ্যাপে
    ঢোকে — কী করছে পুরোপুরি বুঝে না।
  - ভুল হলে শুধু ভুল উত্তর নয় —
    ভুল কাজ সম্পন্ন হয়।
  - সবচেয়ে ভয়েরটা: জোরে ফেল দেয় না —
    "সব হয়ে গেছে" বলে, যখন হয়নি।
    তুমি বিশ্বাস করো — সেখানেই আঘাত।

শিক্ষকের রায়: শক্তিশালী, কিন্তু হাতে
  নেওয়ার আগে বুঝে নাও কী ছেড়ে দিচ্ছ।</div>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দুই ভিডিওর এক উপদেশ:</strong> প্রথমটা বলছে ডেটা কোথায় যাচ্ছে ভেবে পাঠাও, দ্বিতীয়টা বলছে সিস্টেমের চাবি কাকে দিচ্ছ ভেবে দাও। <strong>AI-যুগের নিরাপত্তা দুই প্রশ্নে: আমার তথ্য কোথায়? আর আমার যন্ত্রে সে কতটা হাত পাবে?</strong></div></div>
<div class="secret-box">🛡️ যত গোপন তথ্য, তত কাছে চালাও; যত বড় ক্ষমতা, তত বেশি ভেবে দাও।</div>`,
  senior: {
    title: "Data Privacy + OpenClaw — দ্রুত গাইড",
    body: "<p><strong>তিন স্তর:</strong> local (LM Studio/Ollama — ডেটা ঘরে, তবে সাধারণ সাইবার-ঝুঁকি বাসি) &lt; business/API (চুক্তি-নির্ভর) &lt; public chatbot (সর্বোচ্চ এক্সপোজার)। <strong>OpenClaw:</strong> WhatsApp→সিস্টেম-অ্যাকশন এজেন্ট — ক্ষমতা: দূর থেকে ফিক্স-কমিট-নোটিফাই; ঝুঁকি: অর্ধ-বোঝা অ্যাকশন, ভুল কাজ সম্পন্ন হয়, silent failure (হয়ে গেছে বলে যখন হয়নি)। নিয়ম: sensitivity ↑ → tier কাছে; autonomy ↑ → guardrail বাড়াও।</p>"
  }
});

doors.push({
  num: 14,
  icon: "📚",
  color: "#c084fc",
  name: "ভাষা ও চোখ",
  subtitle: "20 AI Terminologies + OpenCV",
  tech: "AI→ML→DL→model→training/inference→foundation model→LLM→tokens→RAG→embeddings→agents (ordered); computer vision without ML, pixel ops, OpenCV building blocks",
  spirit: "ইলম — নাম জানা থেকে অর্থ জানায় যাত্রা",
  secret: "AI-এর শব্দগুলো এলোমেলো নয় — একটার উপর একটা দাঁড়ায়; আর সব দেখার কাজে মেশিন-লার্নিং লাগে না — নিয়ম জানা গেলে সরাসরি নিয়ম চালাও (OpenCV-র পাঠ)।",
  recall: {
    q: "Training আর inference-এর পার্থক্য এক লাইনে? আর কোন CV-কাজে ML লাগে না?",
    qen: "Training vs inference in one line? And which CV tasks need no ML?",
    a: "Training = মডেল ডেটা থেকে শেখে (প্যারামিটার বদলায়); inference = শেখা মডেল নতুন ইনপুটে ব্যবহার হয়। Resize/crop/grayscale/edge-detection-এর মতো নিয়ম-জানা কাজে ML লাগে না — OpenCV-র সরাসরি ফাংশনই থাকে; ML লাগে যখন নিয়ম লিখে প্রকাশ করা যায় না (যেমন ছবিতে বিড়াল চেনা)।",
    aen: "Training = the model learns from data (parameters adjust); inference = the trained model is used on new input. Rule-known tasks (resize, crop, grayscale, edges) need no ML — OpenCV does them directly; ML is for rules you cannot write down, like recognizing a cat."
  },
  story: `<p class="scene-setting">AI-এর জগতে ঢুকলে শব্দের ভার বর্ষণ — LLM, RAG, embeddings, tokens, agents... সব ভিডিওতে, সব পোস্টে। শিক্ষকের প্রথম ভিডিওর মূল কথা: এই শব্দগুলো র‍্যান্ডম নয়, <strong>একটার উপর আরেকটা তৈরি</strong> — তাই সঠিক ক্রমে শিখলেই বোঝা যায়। আর দ্বিতীয় ভিডিও নিয়ে এসে দেখায় — চোখের জগতেও (কম্পিউটার ভিশন) একই বিচার-বুদ্ধি খাটে: সব সমস্যায় মেশিন-লার্নিং নয়।</p>
<p class="scene-setting en">Entering AI means a flood of terms — LLM, RAG, embeddings, tokens, agents. Video one's core message: these terms are not random; each builds on the previous, so order matters. Video two brings the same judgment to vision: not every problem needs machine learning.</p>
<div class="code-block">২০টা শব্দ — সিঁড়ির ক্রমে (যেভাবে শিখতে হয়):

ভিত্তি-স্তর:
  ১. AI — মানুষের-বুদ্ধি-লাগানো কাজে মেশিন
  ২. ML — নিয়ম হাতে লেখা নয়, ডেটা থেকে শেখা
  ৩. DEEP LEARNING — অনেক-স্তরের নিউরাল নেট
  ৪. NEURAL NETWORK — উদাহরণ থেকে প্যাটার্ন-শেখা স্তর
  ৫. MODEL — ট্রেনিংয়ের ফলে জন্মানো শেখা-সিস্টেম
  ৬. TRAINING — শেখার প্রক্রিয়া (ভুল→সংশোধন→উন্নতি)
  ৭. INFERENCE — শেখা মডেলের ব্যবহার

আধুনিক স্তর:
  ৮. FOUNDATION MODEL — বিশাল ডেটায় বস্ত্রাদি-ক্ষমতা
  ৯. LLM — ভাষার ফাউন্ডেশন মডেল
  ১০. TOKENS — মডেলের ভাষার একক (দরজা ৯)
  ১১. CONTEXT WINDOW — একবারে যতটুকু পড়ে
  ১২. EMBEDDINGS — অর্থের ভেক্টর (দরজা ৬)
  ১৩. RAG — খুঁজে এনে পড়ানো (দরজা ৬)
  ১৪. AGENTS — মডেল+মেমরি+টুলে কাজ শেষ (দরজা ৫)
  ... বাকিগুলোও একই সিঁড়িতে বাঁধা।

খেয়াল করো — এই বইয়ের আগের দরজাগুলো
আসলে এই সিঁড়ির ধাপগুলোই!</div>
<div class="code-block">OPENCV — কম্পিউটার ভিশনের হাতিয়ার-বাক্স:

চোখ দিয়ে দেখা মানে কী মেশিনের কাছে?
  ছবি = সংখ্যার পিক্সেল-গ্রিড।
  কম্পিউটার ভিশন = সেই সংখ্যা পড়ে অর্থ বের করা।

OpenCV = ওপেন-সোর্স লাইব্রেরি —
  ছবি পড়া/লেখা, ভিডিও প্রসেস, resize/crop,
  rotate/flip, grayscale, edge detection...

আর এখানেই শিক্ষকের বড় পাঠ:
  সব ভিশন-সমস্যায় ML লাগে না।

  নিয়ম জানা গেলে → নিয়ম সরাসরি চালাও
    (resize করতে নিউরাল নেট লাগে না!)
  নিয়ম লেখা যায় না → তবেই ML
    (ছবিতে বিড়াল আছে কিনা — এর নিয়ম
     কেউ হাতে লিখতে পারবে না)

  অকারণে ML ঢালা = অকারণ জটিলতা।</div>
<div class="callout tip"><span class="co-icon">🔗</span><div><strong>দুই ভিডিওর এক বুদ্ধি:</strong> শব্দভান্ডার ক্রমে শেখো কারণ ধারণাগুলো ক্রমে দাঁড়িয়ে; আর টুল বাছাই করো সমস্যা দেখে — <strong>নিয়ম বের করা যায় তো নিয়ম, না গেলে মেশিন-লার্নিং।</strong> দুটোই একই গুণের নাম: অন্ধ অনুকরণ নয়, বুঝে ব্যবহার।</div></div>
<div class="secret-box">📚 শব্দ শেখো সিঁড়ি-ক্রমে, টুল বাছো সমস্যা-দেখে — নিয়ম জানলে নিয়মই যথেষ্ট।</div>`,
  senior: {
    title: "AI Terminologies + OpenCV — দ্রুত গাইড",
    body: "<p><strong>শব্দ-সিঁড়ি:</strong> AI → ML → deep learning → neural network → model → training (শেখা) / inference (ব্যবহার) → foundation model → LLM → tokens → context window → embeddings → RAG → agents — প্রতিটা আগেরটার উপর দাঁড়ায়; ক্রম রক্ষা করে শিখো। <strong>OpenCV:</strong> পিক্সেল-অপারেশনের ওপেন-সোর্স টুলবক্স (read/write, resize, grayscale, edges); নিয়ম-জানা কাজে ML নয় — সরাসরি অ্যালগরিদম; ML শুধু তখনই যখন নিয়ম লিখে প্রকাশ করা যায় না।</p>"
  }
});

doors.push({
  num: 15,
  icon: "🏁",
  color: "#e9d5ff",
  name: "অটোমেশন ও বিচারশক্তি",
  subtitle: "n8n + How To Choose The Right AI Model — পূর্ণ যাত্রার সমাপ্তি",
  tech: "Workflow automation (trigger→nodes→data flow); model families mapped to jobs (GPT general / Claude careful-long / Gemini multimodal / Llama open-weight)",
  spirit: "মাকাম — যাত্রার শেষ মঞ্জিল, নতুন যাত্রার দুয়ার",
  secret: "n8n শেখায় কাজগুলো জোড়া লাগানোর নকশা (trigger-নোড-প্রবাহ), মডেল-বাছাই শেখায় চূড়ান্ত বিচার: কাজ দেখে টুল — আর এই দুই বিচার মিলেই এআই ইঞ্জিনিয়ারের আসন।",
  recall: {
    q: "n8n-এ workflow-এর তিনটি মূল ধারণা? আর চার মডেল-পরিবার কাদের কাজে কাদের?",
    qen: "n8n's three workflow concepts? And the four model families mapped to jobs?",
    a: "n8n: trigger (কখন শুরু — ফর্ম/ইমেইল/সময়/API), node (একেকটা ছোট কাজের ব্লক), data flow (এক নোডের আউটপুট পরেরটার ইনপুট)। মডেল: GPT — সর্বজনীন শুরু (Swiss Army knife); Claude — সাবধানী দীর্ঘ-কাজ (দীর্ঘ ডকুমেন্ট, ভালো-লেখা, যত্নে-কোড); Gemini — মাল্টিমোডাল (ছবি/ভিডিও/PDF/বিশাল context); Llama — ওপেন-ওয়েট (নিজে চালাও, ডেটা বাইরে নয়)।",
    aen: "n8n: trigger (when to start), node (small task block), data flow (one node's output feeds the next). Models: GPT — universal default; Claude — careful, long-context work; Gemini — multimodal inputs; Llama — open-weight, self-hosted."
  },
  story: `<p class="scene-setting">শেষ দরজায় দুটো ভিডিও — একটা শেখায় কীভাবে কাজগুলো নিজে নিজে চলে, আরেকটা শেখায় কোন কাজে কোন মডেল। মনে হয় দুটো আলাদা; আসলে একই প্রশ্নের দুই রূপ: <strong>সিস্টেমটা কেমন হবে, আর তার হৃদয়ে কোন ইঞ্জিন?</strong> এই দুই বিচার মিললেই তুমি শুধু AI-ব্যবহারকারী নয় — AI-সিস্টেম নির্মাতা।</p>
<p class="scene-setting en">The final door holds two videos — one teaches how work runs itself, the other teaches which engine fits which job. They seem separate; both are one question: what does the system look like, and which model is its heart?</p>
<div class="code-block">N8N — কাজ যখন নিজেই চলে:

দৃশ্য: কেউ তোমার সাইটে ফর্ম পূরণ করলো।
ম্যানুয়াল পথ: বিবরণ CRM-এ ঢুকাও →
ওয়েলকাম ইমেইল → Slack-এ টিম জানাও →
ফলো-আপ টাস্ক। কোনটাই কঠিন নয় —
কিন্তু প্রতিটা নতুন কাস্টমারে বারবার।

N8N-এর পথ — তিনটি শব্দ:
  TRIGGER — কখন শুরু: ফর্ম-সাবমিট,
    নতুন ইমেইল, সকাল ৯টার শিডিউল,
    ঢোকা API রিকোয়েস্ট
  NODE — ছোট ছোট কাজের ব্লক:
    একটা CRM-এ জমা করে, একটা ইমেইল
    পাঠায়, একটা Slack-এ জানায়
  DATA FLOW — নাম-ইমেইল-মেসেজ
    এক নোড থেকে পরেরটায় বয়ে চলে;
    প্রত্যেক নোড ব্যবহার করে, বদলায়, পাঠায়

ফল: প্রতিটা নতুন কাস্টমার ঠিক একই পথে,
কারো হাত ছাড়াই। Workflow = সিদ্ধান্তের
স্থাপত্য — একবার বানাও, চিরদিন চলে।</div>
<div class="diagram">
<div class="diag-title">চার মডেল-পরিবার — শিক্ষকের মানচিত্র</div>
<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg">
  <rect class="cell" x="15" y="25" width="255" height="88" rx="10"/>
  <text class="lbl" x="142" y="52" text-anchor="middle">GPT (OpenAI)</text>
  <text class="lbl-sm" x="142" y="74" text-anchor="middle">সর্বজনীন শুরু-বিন্দু — Swiss Army knife</text>
  <text class="lbl-sm" x="142" y="94" text-anchor="middle">চ্যাট/কোড/এজেন্ট/ওয়ার্কফ্লো — সবেতে ভালো</text>
  <rect class="cell-hot" x="290" y="25" width="255" height="88" rx="10"/>
  <text class="lbl-hot" x="417" y="52" text-anchor="middle">Claude (Anthropic)</text>
  <text class="lbl-sm" x="417" y="74" text-anchor="middle">যত্নের কাজ — Haiku/Sonnet/Opus স্তরে</text>
  <text class="lbl-sm" x="417" y="94" text-anchor="middle">দীর্ঘ ডকুমেন্ট, ভালো-লেখা, গভীর-ব্যাখ্যা কোড</text>
  <rect class="cell-cyan" x="15" y="128" width="255" height="88" rx="10"/>
  <text class="lbl-cyan" x="142" y="155" text-anchor="middle">Gemini (Google)</text>
  <text class="lbl-sm" x="142" y="177" text-anchor="middle">মাল্টিমোডাল — ছবি/অডিও/ভিডিও/PDF</text>
  <text class="lbl-sm" x="142" y="197" text-anchor="middle">Pro কঠিন-যুক্তি, Flash দ্রুত, Flash-Lite সস্তা- bulk</text>
  <rect class="cell-leaf" x="290" y="128" width="255" height="88" rx="10"/>
  <text class="lbl-leaf" x="417" y="155" text-anchor="middle">Llama (Meta)</text>
  <text class="lbl-sm" x="417" y="177" text-anchor="middle">ওপেন-ওয়েট — ডাউনলোড করে নিজে চালাও</text>
  <text class="lbl-sm" x="417" y="197" text-anchor="middle">ডেটা নেটওয়ার্ক ছাড়া করবে না (দরজা ৮)</text>
  <text class="lbl-sm" x="280" y="228" text-anchor="middle">তুলনার মাপকাঠি: ট্রেনিং ডেটা · আর্কিটেকচার · গতি · দাম · context · যুক্তি-ক্ষমতা</text>
</svg>
<div class="diag-cap">শিক্ষকের নিয়ম: কোথায় নতুন, জানো না — GPT দিয়ে শুরু; সাবধানী-দীর্ঘ কাজ — Claude; ইনপুট টেক্সট ছাড়া — Gemini; নিয়ন্ত্রণ/প্রাইভেসি — Llama।</div>
</div>
<div class="dialogue">আর এখানেই পুরো যাত্রা জোড়া লাগে। মডেল-বাছাইয়ের প্রশ্ন (দরজা ১২-১৫) যখন ভাবো তুমি আসলে AI→ML→মডেল-সিঁড়ি (দরজা ১৪) বেয়ে উঠছো; নিয়ন্ত্রণ চাইলে Llama+Ollama (দরজা ৮), প্রাইভেসির স্তর মাপছো (দরজা ১৩); আর বাছাই করা মডেলটাকে ট্রিগার-নোড-প্রবাহে বসিয়ে দিলেই (আজকের n8n) জন্ম নেয় একটা সত্যিকারের সিস্টেম — যার প্রতিটা অংশ তুমি এই পনেরোটা দরজায় হাতে-হাতে চিনেছো।</div>
<div class="callout tip"><span class="co-icon">🏁</span><div><strong>সিরিজের সারমর্ম — ১৫ দরজায় ১৫ সিদ্ধান্ত-নিয়ম:</strong> MCP মানে প্রমিত-সংযোগ (১), প্রশিক্ষিত-মডেল জোটাও (২), বানাও+দেখো (৩), নকশা গ্রাফে (৪), creates-decides-acts গুলিয়ো না (৫), মুখস্ত নয় খোঁজা (৬), লুপই শেখা (৭), ভারসাম্যে লোকাল (৮), context-ই স্মৃতি (৯), স্থাপত্যই মূল্য (১০), কাজ সমর্পণ নতুন যুগ (১১), কাজ-মিলিয়ে মডেল (১২), ক্ষমতায় সতর্কতা (১৩), শব্দ-সিঁড়ি আর নিয়ম-আগে (১৪), আর আজ — সিস্টেম জোড়া দাও, ইঞ্জিন বেছে নাও (১৫)।</div></div>
<div class="secret-box">🏁 যন্ত্র চিনেছ, সিদ্ধান্ত চিনেছ — এখন সব জোড়া দিয়ে নিজের সিস্টেম বানাও; এই দরজা শেষ নয়, তোমার নির্মাণের প্রথম।</div>`,
  senior: {
    title: "n8n + Model Selection — দ্রুত গাইড",
    body: "<p><strong>n8n:</strong> workflow অটোমেশন — trigger (ফর্ম/ইমেইল/শিডিউল/API), node (এক-কাজের ব্লক: CRM/ইমেইল/Slack), data flow (আউটপুট→পরের ইনপুট); AI নোড যোগ করলে এজেন্ট-ওয়ার্কফ্লো। <strong>মডেল-ম্যাপ:</strong> GPT = ডিফল্ট সর্বজনীন; Claude (Haiku/Sonnet/Opus) = যত্নে-দীর্ঘ-সূক্ষ্ম কাজ; Gemini (Pro/Flash/Flash-Lite) = মাল্টিমোডাল+বিশাল context; Llama = ওপেন-ওয়েট স্ব-হোস্টেড। নিয়ম: কাজ দেখে ইঞ্জিন, আর নকশা দেখে সিস্টেম।</p>"
  }
});




