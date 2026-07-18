// ════════════════════════════════════════
// অবিচ্ছেয্য কারিগর — DOORS 6-10
// Irreplaceable Engineer: Communication → Timeless Value
// ════════════════════════════════════════

// ══ DOOR 6: COMMUNICATION ══
doors.push({
  num:6, icon:"📝", color:"#fb923c", name:"বাক্যের কারিগর",
  subtitle:"The Communication Multiplier", tech:"Explaining Complex Ideas Simply",
  spirit:"বায়ান — স্পষ্ট বাক্য, প্রকাশ",
  secret:"১০x ইঞ্জিনিয়ার একা কাজ করে না — দল নিয়ে কাজ করে। দল নিয়ে কাজ = যোগাযোগ। যে স্পষ্ট বলে, সে ১০ জনকে এক দিকে চালায়। যে অস্পষ্ট বলে, সে একা দ্রুত, দল ধীর। বায়ান — স্পষ্ট বাক্যের নূর। যে স্পষ্ট বলে, সে আলো।",
  recall:{
    q:"ষষ্ঠ দরজায় কারিগর কেন তোমাকে বললেন গল্প বলতে?",
    qen:"Why were you told to tell a story?",
    a:"কারণ ১০x ইঞ্জিনিয়ার একা কাজ করে না — দল নিয়ে। দল = যোগাযোগ। স্পষ্ট বাক্য = ১০ জনকে এক দিকে। অস্পষ্ট = একা দ্রুত, দল ধীর। বায়ান — স্পষ্ট বাক্যের নূর।",
    aen:"Because a 10x engineer doesn't work alone — leads a team. Team = communication. Clear words = 10 people aligned. Unclear = fast alone, slow team. Bayan — light of clear speech."
  },
  story:`<p class="scene-setting">ষষ্ঠ দরজা। একটা কারখানার মেঝে। দশজন কারিগর একটা জিনিস বানাচ্ছে। কিন্তু প্রত্যেকে ভিন্ন ভিন্ন পিছন বুঝছে। কেউ বলছে গোল, কেউ চৌকো, কেউ ত্রিভুজ। কারিগর ইউসুফ এক জায়গায় দাঁড়িয়ে একটা ছবি আঁকলেন — সবাই দেখল। হঠাৎ সবাই একমত। একটা ছবি = দশজনের একতা। "এটাই communication," ইউসুফ বললেন। "স্পষ্ট বাক্য = সবাই এক দিকে।"</p>
<p class="scene-setting en">The sixth door. A factory floor. Ten craftsmen building one thing. But each understands a different blueprint. One says circle, one square, one triangle. Craftsman Yusuf draws one picture — everyone sees. Suddenly everyone agrees. One picture = ten people aligned. "This is communication," Yusuf said. "Clear words = everyone in one direction."</p>

<div class="dialogue">Problem finding বলেছিলেন — সমস্যা খুঁজো। কিন্তু আমি বলি — সমস্যা খুঁজলেও দলকে বোঝাতে না পারলে কিছু হবে না। যোগাযোগ ছাড়া তুমি একা। একা প্রতিভা সীমিত। দল প্রতিভা অসীম। স্পষ্ট বাক্য = ১০x multiplier। যে স্পষ্ট বলে, সে দল নির্দেশ দেয়। যে অস্পষ্ট বলে, সে বিভ্রান্তি ছড়ায়।</div>
<div class="dialogue en">"Problem finding said — find problems. But I say — even if you find problems, without communicating them to the team, nothing happens. Without communication, you're alone. Solo talent is limited. Team talent is infinite. Clear speech = 10x multiplier. One who speaks clearly, directs the team. One who speaks unclearly, spreads confusion."</div>

<div class="callout info"><span class="co-icon">✖️</span><div><strong>যোগাযোগ = #১ senior skill:</strong> senior-এর কাজ বেশি কোড লেখা নয় — টিমের output গুণ করা। IC = নিজের কোড = ১x। ভালো যোগাযোগকারী senior = টিম output = ৫-১০x। খারাপ যোগাযোগকারী = নিজের কোড + টিম confusion = <strong>০.৫x (negative multiplier!)</strong> — misalignment, rework, conflict।</div></div>

<table class="kv-table"><tr><th>স্তর</th><th>কাকে</th><th>কীভাবে</th></tr>
<tr><td class="hl">১. Peers</td><td>অন্য engineer</td><td>code review, design doc — shared technical understanding</td></tr>
<tr><td class="hl">২. Stakeholders</td><td>PM, business</td><td>tech → business impact ("সপ্তাহে ৫ ঘণ্টা বাঁচায়", GraphQL migration নয়)</td></tr>
<tr><td class="hl">৩. Non-technical</td><td>user, exec</td><td>tech → human value ("৫s নয়, ১s-এ load হবে")</td></tr></table>

<table class="kv-table"><tr><th>ডকুমেন্ট</th><th>উদ্দেশ্য</th></tr>
<tr><td class="hl">Design doc (RFC/ADR)</td><td>বানানোর আগে align — সপ্তাহের rework রোধ</td></tr>
<tr><td class="hl">README</td><td>নতুন dev-দের ঘণ্টায় onboard, সপ্তাহে নয়</td></tr>
<tr><td class="hl">Postmortem</td><td>ব্যর্থতা থেকে শেখা — পুনরাবৃত্তি রোধ</td></tr>
<tr><td class="hl">Decision log</td><td>X কেন ঠিক হলো — বারবার তর্ক রোধ</td></tr></table>

<div class="callout tip"><span class="co-icon">🗣️</span><div><strong>Great communication-এর ৫ প্যাটার্ন:</strong> ① <strong>Conclusion আগে</strong> — প্রথম বাক্যই উত্তর, journey নয়। ② <strong>Analogy</strong> non-technical-দের জন্য ("index হলো library catalog")। ③ <strong>সংখ্যায় বলো</strong> — "pretty fast" নয়, "৪.২s → ০.৮s, ৫x"। ④ <strong>Write once, read many</strong> — ২ ঘণ্টার doc ১৫ জন পড়ে; meeting-এর চেয়ে ৫x efficient। ⑤ <strong>Disagree gracefully</strong> — "That's wrong" নয়, "আমি ভিন্নভাবে দেখি, আমার উদ্বেগ..."।</div></div>

<div class="callout info"><span class="co-icon">🧠</span><div><strong>Feynman test:</strong> non-technical কাউকে সরলভাবে বোঝাতে না পারলে তুমি নিজেই পুরোপুরি বোঝোনি। শেষ প্রজেক্টটা দাদিকে বোঝাও — বুঝলে তুমি বুঝেছ; confused হলে তুমি jargon-এর পেছনে লুকিয়ে আছ।</div></div>

<div class="dialogue">বায়ান — clear speech, expression, manifestation। কুরআনে আল্লাহ বলেন — "তিনি মানুষকে শিখিয়েছেন বায়ান — স্পষ্ট বাক্য।" (৫৫:৩-৪)। বায়ান হলো আল্লাহর নিয়ামত — স্পষ্টভাবে প্রকাশ করার ক্ষমতা। যোগাযোগ-ও বায়ান — জটিল ধারণা স্পষ্টভাবে প্রকাশ। যে বায়ান করে, সে আলো — অন্ধকার দূর করে। যে বায়ান করতে পারে না, সে জ্ঞান ধরে রাখে অন্ধকারে। জ্ঞান + বায়ান = নূর। জ্ঞান - বায়ান = বন্দি জ্ঞান।</div>
<div class="dialogue en">"Bayan — clear speech, expression, manifestation. Allah says — 'He taught man bayan — clear speech.' (55:3-4). Bayan is Allah's gift — the ability to express clearly. Communication too is bayan — expressing complex ideas clearly. One who has bayan, is light — removes darkness. One who can't express, holds knowledge in darkness. Knowledge + bayan = light. Knowledge - bayan = imprisoned knowledge."</div>`,
  senior:{
    title:"Communication Upgrade — This Sprint",
    body:`<p><strong>১.</strong> Write a design doc for your next feature BEFORE coding. ১ page max। Lead with conclusion, then alternatives, then decision।</p><p><strong>২.</strong> Practice the Feynman Test: explain your current project to a non-tech friend in ২ minutes। If they're confused, simplify more।</p><p><strong>৩.</strong> In code reviews: lead with the solution, not the journey। First sentence = the answer।</p><p><strong>৪.</strong> Quantify: replace vague words with numbers। Not faster — ৫x faster। Not many users — ২,৪০০ users।</p><p><strong>৫.</strong> Write more, meet less। A ২-hour doc replaces a ১০-person meeting।</p>`
  }
});

// ══ DOOR 7: BUILDING PRODUCTS PEOPLE WANT ══
doors.push({
  num:7, icon:"🚢", color:"#38bdf8", name:"নৌকার স্থপতি",
  subtitle:"Building Products People Want", tech:"Product Sense for Engineers",
  spirit:"খলক — সৃষ্টি, নির্মাণ",
  secret:"দুনিয়ার সবচেয়ে সুন্দর কোড কেউ ব্যবহার না করলে মূল্যহীন। পণ্য = সমস্যা + সমাধান + মানুষ। সমাধান মাত্র এক-তৃতীয়াংশ। সমস্যা ও মানুষ বাকি দুই-তৃতীয়াংশ। যে শুধু সমাধান বানায়, সে নিঃসঙ্গ। যে সমস্যা ও মানুষ বোঝে, সে নির্মাতা। খলক — উদ্দেশ্য সহ সৃষ্টি।",
  recall:{
    q:"সপ্তম দরজায় নৌকা কেন নদী ছাড়া মূল্যহীন?",
    qen:"Why is a boat worthless without a river?",
    a:"কারণ পণ্য = সমস্যা + সমাধান + মানুষ। সমাধান মাত্র এক-তৃতীয়াংশ। যে শুধু সমাধান বানায়, সে নিঃসঙ্গ। যে সমস্যা ও মানুষ বোঝে, সে নির্মাতা। খলক — উদ্দেশ্য সহ সৃষ্টি।",
    aen:"Because product = problem + solution + people. Solution is only one-third. One who only builds solutions, is lonely. One who understands problems and people, is a creator. Khalq — creation with purpose."
  },
  story:`<p class="scene-setting">সপ্তম দরজা। একটা নদীর ধারে। কারিগর নূহ একটা নৌকা বানিয়েছেন — নিখুঁত, সুন্দর, শক্তিশালী। কিন্তু নৌকাটা স্থলভাগে পড়ে আছে। নদী থেকে অনেক দূর। তুমি ভাবলে — কী সুন্দর নৌকা! কিন্তু নূহ দুঃখিত। "নৌকা সুন্দর, কিন্তু নদী ছাড়া মূল্যহীন। আমি নৌকা বানিয়েছি, কিন্তু ভুলে গেছি — নৌকা কোথায় চলবে।" এটাই পণ্য নির্মাণের সবচেয়ে বড় ভুল — সমাধান বানানো, সমস্যা ভুলে যাওয়া।</p>
<p class="scene-setting en">The seventh door. A riverbank. Craftsman Nuh built a boat — perfect, beautiful, strong. But the boat sits on land. Far from the river. You think — what a beautiful boat! But Nuh is sad. "The boat is beautiful, but without a river, worthless. I built the boat, but forgot — where will it sail." This is the biggest product mistake — building solutions, forgetting problems.</p>

<div class="dialogue">যোগাযোগ বলেছিলেন — স্পষ্ট বলো। কিন্তু আমি বলি — স্পষ্ট বললেও ভুল জিনিস বানালে কিছু হবে না। নৌকা সুন্দর, কিন্তু নদী ছাড়া মূল্যহীন। পণ্য = সমস্যা + সমাধান + মানুষ। যে সমাধান বানায় কিন্তু সমস্যা বোঝে না, সে স্থলভাগে নৌকা বানায়। যে তিনটাই বোঝে, সে সমুদ্রে যাত্রা করে।</div>
<div class="dialogue en">"Communication said — speak clearly. But I say — even speaking clearly, if you build the wrong thing, nothing happens. The boat is beautiful, but without a river, worthless. Product = problem + solution + people. One who builds solutions without understanding problems, builds boats on land. One who understands all three, sails the ocean."</div>

<div class="callout info"><span class="co-icon">🧮</span><div><strong>Product equation:</strong> Great Product = Real Problem × Good Solution × Right People। যেকোনো factor শূন্য হলে product শূন্য।</div></div>

<table class="kv-table"><tr><th>Fail mode</th><th>কী</th><th>ব্যর্থতার %</th></tr>
<tr><td class="hl">১. কোনো real problem নেই</td><td>"Cool tech, but who needs it?"</td><td>~৭০%</td></tr>
<tr><td class="hl">২. Bad solution</td><td>"ভালো idea, বাজে execution"</td><td>~২০%</td></tr>
<tr><td class="hl">৩. Wrong people</td><td>"নিজেদের জন্য বানানো, user-এর জন্য নয়"</td><td>~১০%</td></tr></table>

<table class="kv-table"><tr><th>✅ PMF আছে</th><th>❌ PMF নেই</th></tr>
<tr><td>না বললেও user ব্যবহার করে</td><td>তুমি feature push করো, user pull করে না</td></tr>
<tr><td>user অন্যদের refer করে (organic)</td><td>retention কম (একবার try, আর ফেরে না)</td></tr>
<tr><td>down হলে user রেগে যায়</td><td>support ticket &gt; feature request</td></tr>
<tr><td>growth-এ marketing খরচ লাগে না</td><td>প্রতিটা sale-এ ভারী convincing লাগে</td></tr></table>

<div class="callout tip"><span class="co-icon">🔁</span><div><strong>Build-Measure-Learn (Lean Startup):</strong> সবচেয়ে ছোট জিনিস BUILD → MEASURE (কাজ করে?) → LEARN → আবার BUILD। Junior: ৩ মাস বানিয়ে launch করে prayer করে; senior: ১ সপ্তাহে বানিয়ে test → learn → iterate। <strong>MVP</strong> = অর্ধেক-বানানো নয়, একটা hypothesis টেস্ট করার সবচেয়ে ছোট জিনিস।</div></div>

<div class="callout info"><span class="co-icon">❓</span><div><strong>বানানোর আগে ৫ প্রশ্ন:</strong> কী সমস্যা, কার জন্য? · আজ user কীভাবে সমাধান করে? · সবচেয়ে সরল version? · সাফল্য কীভাবে মাপবো? · যদি আমরা ভুল হই? উত্তর না থাকলে — এখনো বানিও না।</div></div>

<table class="kv-table"><tr><th>Kano feature type</th><th>User reaction</th></tr>
<tr><td class="hl">Must-have (login, basic)</td><td>"অবশ্যই থাকবে" → না থাকলে ক্ষোভ</td></tr>
<tr><td class="hl">Performance (speed, quality)</td><td>"দ্রুত/ভালো = ভালো" → linear satisfaction</td></tr>
<tr><td class="hl">Delightful (surprise, AI)</td><td>"WOW, আশা করিনি!" → অসামঞ্জস্য আনন্দ, loyalty ও referral</td></tr></table>

<div class="callout warn"><span class="co-icon">🚫</span><div><strong>Anti-patterns:</strong> building blind ("PM বলল, বানালাম") · feature factory (sprint-এ ১০ feature, ব্যবহার হয় না) · reinventing · perfectionism ("আরও ৬ মাস") · vanity metrics ("১০,০০০ signup!" নয় — "২,০০০ দৈনিক ব্যবহার করে, ৫০০ pay করে")।</div></div>

<div class="dialogue">খলক — creation, making, bringing into existence। কুরআনে আল্লাহ বলেন — "তিনি আসমান ও জমিন সৃষ্টি করেছেন উদ্দেশ্য সহ।" (২১:১৬)। উদ্দেশ্য সহ সৃষ্টি = খলক। পণ্য নির্মাণ-ও খলক — উদ্দেশ্য সহ নির্মাণ। যে উদ্দেশ্য ছাড়া বানায়, সে শিল্পী — সুন্দর, কিন্তু অকেজো। যে উদ্দেশ্য সহ বানায়, সে নির্মাতা — সুন্দর ও কার্যকর। খলক — উদ্দেশ্য সহ সৃষ্টির গুণ।</div>
<div class="dialogue en">"Khalq — creation, making, bringing into existence. Allah says — 'We created the heavens and earth with purpose.' (21:16). Creation with purpose = khalq. Product building too — building with purpose. One who builds without purpose, is an artist — beautiful, but useless. One who builds with purpose, is a creator — beautiful and effective. Khalq — the virtue of purposeful creation."</div>`,
  senior:{
    title:"Product Sense — Engineer's Guide",
    body:`<p><strong>Before building ANY feature, ask ৫ questions:</strong> What problem? For whom? How solved today? Simplest version? Success metric?</p><p><strong>Talk to users:</strong> ১ per week. Understand their pain. Not surveys — conversations।</p><p><strong>Ship small, learn fast:</strong> ১-week MVP > ৩-month perfect product। Measure, learn, iterate।</p><p><strong>Track REAL metrics:</strong> Not signups — daily active users. Not features shipped — features used।</p><p><strong>Add delight:</strong> One delightful feature per release. Surprise users. Create loyalty, not just satisfaction।</p>`
  }
});

// ══ DOOR 8: INNOVATION MINDSET ══
doors.push({
  num:8, icon:"💡", color:"#fde047", name:"ক্রস-পলিনেটর",
  subtitle:"The Innovation Mindset", tech:"Connecting Ideas Across Domains",
  spirit:"তাজদিদ — নবীকরণ, পুনরুজ্জীবন",
  secret:"নতুন ধারণা শূন্য থেকে আসে না। নতুন ধারণা = পুরোনো ধারণার নতুন সংযোগ। জীববিজ্ঞান + কম্পিউটার = নিউরাল নেটওয়ার্ক। মানুষ এক জায়গায় গভীর ডুব দেয়, অন্য জায়গায় এলোমেলো ঘোরে। অবিচ্ছেয্য ইঞ্জিনিয়ার গভীরে ডুবে সংযোগ খোঁজে। তাজদিদ — পুরোনোকে নতুন সংযোগে পুনরুজ্জীবিত করা।",
  recall:{
    q:"অষ্টম দরজায় কারিগর কেন মৌমাছি পালন করেন?",
    qen:"Why keep bees?",
    a:"কারণ নতুন ধারণা = পুরোনোর নতুন সংযোগ। মৌমাছি এক ফুল থেকে অন্য ফুলে রেণু নিয়ে যায় — ক্রস-পলিনেশন। ইঞ্জিনিয়ার এক ডোমেইন থেকে অন্যে ধারণা নিয়ে যায় — ইনোভেশন। তাজদিদ — পুরোনোকে নতুন সংযোগে পুনরুজ্জীবিত করা।",
    aen:"Because new ideas = new connections of old ones. Bees carry pollen between flowers — cross-pollination. Engineers carry ideas between domains — innovation. Tajdid — reviving the old through new connections."
  },
  story:`<p class="scene-setting">অষ্টম দরজা। একটা বাগান। কারিগর যাইনব মৌমাছি পালন করেন। তুমি ভাবলে — ইঞ্জিনিয়ার কেন মৌমাছি? যাইনব বললেন — "মৌমাছি এক ফুল থেকে অন্য ফুলে রেণু নিয়ে যায়। দুটো আলাদা ফুল, কিন্তু সংযোগে নতুন ফল। আমিও তেমনি — এক ক্ষেত্র থেকে অন্যে ধারণা নিয়ে যাই। জীববিজ্ঞান + কম্পিউটার = নিউরাল নেটওয়ার্ক। এটাই ইনোভেশন — ক্রস-পলিনেশন।"</p>
<p class="scene-setting en">The eighth door. A garden. Craftswoman Zainab keeps bees. You think — why bees for an engineer? Zainab said — "Bees carry pollen from one flower to another. Two separate flowers, but connection creates new fruit. I too — carry ideas from one field to another. Biology + computers = neural networks. This is innovation — cross-pollination."</p>

<div class="dialogue">পণ্য নির্মাণ বলেছিলেন — উদ্দেশ্য সহ বানাও। কিন্তু আমি বলি — উদ্দেশ্য সহ বানালেও নতুন কিছু না থাকলে তুমি অনুকরণকারী। নতুন কীভাবে আসে? শূন্য থেকে নয়। পুরোনোর নতুন সংযোগ থেকে। এক ডোমেইনের সমাধান অন্য ডোমেইনের সমস্যায় প্রয়োগ। এটাই ইনোভেশন — ক্রস-পলিনেশন।</div>
<div class="dialogue en">"Product building said — build with purpose. But I say — even with purpose, without something new, you're an imitator. How does new come? Not from nothing. From new connections of old things. A solution from one domain applied to a problem in another. This is innovation — cross-pollination."</div>

<div class="callout info"><span class="co-icon">💡</span><div><strong>Steve Jobs (১৯৯৬):</strong> "Creativity is just connecting things... তারা কিছু DO করেনি, তারা কেবল কিছু SAW।" Innovation = অন্যরা যে সংযোগ মিস করে সেটা দেখা — এর জন্য জ্ঞানের <strong>breadth</strong> লাগে, শুধু depth নয়।</div></div>

<div class="callout tip"><span class="co-icon">🇹</span><div><strong>T-shaped engineer:</strong> উপরের বার = broad interest (design, business, psychology, biology, art, history); নিচের stem = deep expertise (তোমার tech stack)। Junior = শুধু stem (specialist)। Senior = পুরু বার + গভীর stem (T-shaped)। Irreplaceable = broad top + একাধিক stem (π-shaped)।</div></div>

<table class="kv-table"><tr><th>সংযোগ</th><th>Innovation</th></tr>
<tr><td class="hl">জীববিজ্ঞান + CS (neurons)</td><td>Neural networks</td></tr>
<tr><td class="hl">ভাষাবিজ্ঞান + CS (Chomsky)</td><td>Context-free grammars</td></tr>
<tr><td class="hl">স্থাপত্য + SW (Alexander)</td><td>Design patterns</td></tr>
<tr><td class="hl">বিবর্তন + SW</td><td>Genetic algorithms</td></tr>
<tr><td class="hl">Toyota manufacturing + SW</td><td>Lean / Agile</td></tr>
<tr><td class="hl">রেস্টুরেন্ট kitchen tickets + SW</td><td>Kanban</td></tr></table>

<div class="callout tip"><span class="co-icon">🐝</span><div><strong>Innovation mindset গড়ার উপায়:</strong> ① রোজ ৩০ মিনিট tech-এর বাইরে পড়ো। ② <strong>Analogy hunt</strong> — "এটা অন্য ডোমেইনে কীসের মতো?" (টিম coordination ~ traffic system?)। ③ Side project ভিন্ন ভাষা/ডোমেইনে। ④ Diverse network — designer, scientist, artist। ⑤ Default প্রশ্ন করো — "উল্টোটা সত্যি হলে?"</div></div>

<div class="callout warn"><span class="co-icon">📉</span><div><strong>Innovator's Dilemma:</strong> ভালো কোম্পানি ব্যর্থ হয় কারণ তারা সবকিছু "ঠিক" করে — বর্তমান customer-দের শোনে (যারা incremental চায়), disruptive innovation উপেক্ষা করে (প্রথমে ছোট মনে হয়)। প্রশ্ন করো: "আমরা আগামীকালের customer-দের সেবা করছি, নাকি গতকালের? পরের curve কোনটা?"</div></div>

<div class="dialogue">তাজদিদ — renewal, revival, restoration। ইসলামী ঐতিহ্যে তাজদিদ হলো পুরোনোকে নতুন রূপে পুনরুজ্জীবিত করা — সারমর্ম ধরে রেখে ফর্ম বদলানো। ইনোভেশন-ও তাজদিদ — পুরোনো ধারণাকে নতুন সংযোগে পুনরুজ্জীবিত করা। যে তাজদিদ করে, সে অতীত থেকে ভবিষ্যৎ বানায়। যে তাজদিদ করে না, সে অতীতে আটকে থাকে বা অতীত ছেড়ে শূন্যে পড়ে।</div>
<div class="dialogue en">"Tajdid — renewal, revival, restoration. In Islamic tradition, tajdid is reviving the old in new form — keeping essence, changing form. Innovation too — reviving old ideas through new connections. One who does tajdid, builds future from past. One who doesn't, gets stuck in the past or falls into the void."</div>`,
  senior:{
    title:"Innovation Mindset — Practical Steps",
    body:`<p><strong>Read ৩০ min/day outside tech:</strong> Psychology, biology, economics, history. Each field has transferable patterns।</p><p><strong>Analogy hunt:</strong> For every problem, ask: what is this LIKE in another domain? Write ৩ analogies। One will spark innovation।</p><p><strong>Side projects:</strong> Build ONE thing per quarter in a different language/domain. Cross-pollination happens when you work in unfamiliar territory।</p><p><strong>Diverse network:</strong> Talk to ১ person/month outside engineering. Designers, scientists, entrepreneurs। Serendipity happens at intersections।</p><p><strong>Question defaults:</strong> Pick one industry standard this month and ask: what if the opposite were true?</p>`
  }
});

// ══ DOOR 9: THE ENTREPRENEUR'S LEAP ══
doors.push({
  num:9, icon:"🌉", color:"#c084fc", name:"সেতুর লাফ",
  subtitle:"The Entrepreneur's Leap", tech:"From Engineer to Builder",
  spirit:"তাওয়াক্কুল — ভরসা, বিশ্বাস",
  secret:"ইঞ্জিনিয়ার ঝুঁকি এড়ায়। উদ্যোক্তা ঝুঁকি নেয়। কিন্তু অবিচ্ছেয্য ইঞ্জিনিয়ার উভয় — গণনাকৃত ঝুঁকি নেয়। ভয় নয়, প্রস্তুতি। অন্ধ লাফ নয়, দেখে লাফ। তাওয়াক্কুল — চেষ্টার পর ফলাফলে ভরসা। দড়ি বেঁধে, তারপর লাফ।",
  recall:{
    q:"নবম দরজায় কারিগর কেন আগে দড়ি বাঁধলেন, তারপর লাফ দিলেন?",
    qen:"Why tie the rope before jumping?",
    a:"কারণ ইঞ্জিনিয়ার ঝুঁকি এড়ায়, উদ্যোক্তা ঝুঁকি নেয়। অবিচ্ছেয্য ইঞ্জিনিয়ার গণনাকৃত ঝুঁকি নেয়। দড়ি বেঁধে লাফ। ভয় নয়, প্রস্তুতি। তাওয়াক্কুল — চেষ্টার পর ফলাফলে ভরসা।",
    aen:"Because engineers avoid risk, entrepreneurs take risk. The irreplaceable takes calculated risk. Tie the rope, then jump. Not fear — preparation. Tawakkul — trust after effort."
  },
  story:`<p class="scene-setting">নবম দরজা। একটা গিরি। উপরে কারিগর তালহা দাঁড়িয়ে। নিচে নদী। সবাই বলছে — লাফ দাও! কিন্তু তালহা দড়ি বাঁধছেন। গিরির উপরে, নিজের কোমরে। তুমি ভাবলে — সে ভীরু। কিন্তু তালহা বললেন — "আমি লাফ দেব। কিন্তু অন্ধ লাফ নয়। দড়ি দিয়ে। প্রস্তুতি ছাড়া লাফ = আত্মহত্যা। প্রস্তুতি সহ লাফ = সাহস।" এটাই উদ্যোক্তার লাফ — গণনাকৃত ঝুঁকি।</p>
<p class="scene-setting en">The ninth door. A cliff. Craftsman Talha stands above. Below, a river. Everyone says — jump! But Talha is tying a rope. To the cliff, to his waist. You think — he's a coward. But Talha said — "I will jump. But not a blind jump. With a rope. Jumping without preparation = suicide. Jumping with preparation = courage." This is the entrepreneur's leap — calculated risk.</p>

<div class="dialogue">ইনোভেশন বলেছিলেন — নতুন সংযোগ খোঁজো। কিন্তু আমি বলি — নতুন সংযোগ খুঁজলেও বাস্তবায়ন না করলে কিছু হবে না। বাস্তবায়ন = ঝুঁকি। ঝুঁকি ছাড়া কিছু নতুন হয় না। কিন্তু অন্ধ ঝুঁকি = বিপদ। গণনাকৃত ঝুঁকি = প্রবৃদ্ধি। উদ্যোক্তার লাফ — প্রস্তুতি সহ ঝুঁকি।</div>
<div class="dialogue en">"Innovation said — find new connections. But I say — even finding connections, without execution, nothing happens. Execution = risk. Without risk, nothing new happens. But blind risk = danger. Calculated risk = growth. The entrepreneur's leap — risk with preparation."</div>

<table class="kv-table"><tr><th>Engineer</th><th>Entrepreneur</th></tr>
<tr><td>জানা জিনিস optimize করে</td><td>অজানা explore করে</td></tr>
<tr><td>ঝুঁকি কমায়</td><td>গণনাকৃত ঝুঁকি নেয়</td></tr>
<tr><td>নিখুঁত solution</td><td>good enough ship করে</td></tr>
<tr><td>ব্যর্থতা এড়ায়</td><td>ব্যর্থতা থেকে শেখে</td></tr>
<tr><td>কোড = product</td><td>business = product</td></tr>
<tr><td>মাসে বেতন পায়</td><td>value তৈরি, তারপর value capture</td></tr></table>

<div class="callout info"><span class="co-icon">🎲</span><div><strong>Calculated risk (জুয়া নয়):</strong> জুয়া = অন্ধ লাফ, ভাগ্যের আশা। Calculated risk = downside (worst case) বোঝো, upside (best case) বোঝো, প্রতিটার probability — যদি downside টিকে থাকার মতো আর upside বড় হয় → LEAP।</div></div>

<div class="callout tip"><span class="co-icon">🪢</span><div><strong>লাফের আগে ৪টা দড়ি বাঁধো:</strong></div></div>
<ul class="checklist">
<li><strong>Financial:</strong> ৬-১২ মাসের runway জমানো — "শূন্য আয়ে ১২ মাস টিকতে পারি।" (মরিয়া হলে খারাপ সিদ্ধান্ত।)</li>
<li><strong>Skill:</strong> বানাতে পারো (depth) + market বোঝো (breadth) + বিক্রি করতে পারো — "ব্যর্থ হলে আমি আরও employable, কম নয়।"</li>
<li><strong>Validation:</strong> user pay করবে বলেছে (শুধু "cool idea" নয়) — waitlist, beta, LOI। "মানুষ চায়, শুধু আমি নই।"</li>
<li><strong>Network:</strong> যারা করেছে এমন mentor + একই পথের peer — "আমি একা নই।"</li>
</ul>

<div class="callout info"><span class="co-icon">🏗️</span><div><strong>Engineer → Founder:</strong> ① Employee (skill/network/savings) → ② Side-project builder (রাত/উইকএন্ডে MVP, validate) → ③ Leap (দড়ি বাঁধা → পূর্ণকালীন, ৬-১২ মাসে PMF; না হলে pivot বা নতুন skill নিয়ে ফেরত) → ④ Builder (PMF পেলে scale)। Engineer-রা ভালো founder হয় (নিজে বানাতে পারে, systems thinking) কিন্তু ব্যর্থ হয় over-build, sales উপেক্ষা, আর user এড়ানোর কারণে।</div></div>

<div class="callout warn"><span class="co-icon">💭</span><div><strong>The great idea myth:</strong> unique idea লাগে না — Google প্রথম search engine নয়, Facebook প্রথম social network নয়, Slack প্রথম chat নয়; সবাই <em>বিদ্যমান জিনিস আরও ভালো</em> করেছে। Idea সস্তা, execution-ই সব। পারফেক্ট idea-র অপেক্ষা কোরো না — real problem খোঁজো, solution বানাও, ship করো। "great idea" বানানোর <em>মধ্য দিয়ে</em> আসে, আগে নয়।</div></div>

<div class="dialogue">তাওয়াক্কুল — trust, reliance, surrender after effort। কুরআনে আল্লাহ বলেন — "যারা আল্লাহর উপর তাওয়াক্কুল করে, তিনি তাদের যথেষ্ট।" (৬৫:৩)। তাওয়াক্কুল অলসতা নয় — প্রস্তুতির পর ফলাফলে ভরসা। দড়ি বাঁধো (চেষ্টা), তারপর লাফ দাও (ঝুঁকি), তারপর ফলাফলে ভরসা (তাওয়াক্কুল)। যে তাওয়াক্কুল করে, সে জানে — চেষ্টা তার, ফল আল্লাহর। এই জ্ঞানে ভয় চলে যায়, সাহস আসে।</div>
<div class="dialogue en">"Tawakkul — trust, reliance, surrender after effort. Allah says — 'Whoever trusts in Allah, He is sufficient for them.' (65:3). Tawakkul is not laziness — it's trust in the outcome AFTER preparation. Tie the rope (effort), then jump (risk), then trust the result (tawakkul). One who has tawakkul knows — effort is theirs, result is Allah's. In this knowledge, fear departs, courage arrives."</div>`,
  senior:{
    title:"The Entrepreneur's Preparation",
    body:`<p><strong>Before leaping, tie ৪ ropes:</strong></p><p>১. <strong>Financial:</strong> ৬-১২ months runway saved। Without this, you'll make desperate decisions।</p><p>২. <strong>Skill:</strong> Can you build it AND sell it? If not, find a co-founder who complements you।</p><p>৩. <strong>Validation:</strong> Real users who want it, not just friends saying cool idea। Waitlist, beta signups, pre-orders।</p><p>৪. <strong>Network:</strong> Mentors who've done it, peers on the same journey। You can't do this alone।</p><p><strong>The great idea myth:</strong> Don't wait for a unique idea. Find a real problem. Build a solution. Ship. The idea emerges from building, not before।</p>`
  }
});

// ══ DOOR 10: THE DEEP-ROOTED TREE ══
doors.push({
  num:10, icon:"🌳", color:"#22c55e", name:"গভীর শিকড়ের বৃক্ষ",
  subtitle:"The Timeless Value Synthesis", tech:"Complete Irreplaceability Architecture",
  spirit:"বাকা — চিরস্থায়িত্ব, স্থায়িত্ব",
  secret:"নয়টি দরজা পেরিয়েছ। ফানা থেকে বাকা। পচনশীল থেকে চিরস্থায়ী। framework থেকে principle। উপরের ডাল নয়, নিচের শিকড়। যে গভীরে শিকড় দেয়, ঝড় তাকে উপড়ে ফেলতে পারে না। বাকা — যা থাকে। তুমি এখন সেই বৃক্ষ।",
  recall:{
    q:"দশম দরজায় কেন গভীর শিকড়ের বৃক্ষ?",
    qen:"Why a deep-rooted tree?",
    a:"কারণ ফানা থেকে বাকা — পচনশীল থেকে চিরস্থায়ী। framework থেকে principle। উপরের ডাল নয়, নিচের শিকড়। যে গভীরে শিকড় দেয়, ঝড় তাকে উপড়ে ফেলতে পারে না। বাকা — যা থাকে।",
    aen:"Because fana to baqa — perishable to permanent. Framework to principle. Not surface branches — deep roots. One who roots deeply, storms can't uproot. Baqa — that which remains."
  },
  story:`<p class="scene-setting">দশম দরজা। শেষ। একটা প্রাচীন বৃক্ষ — শত বছর পুরোনো। ঝড় এসেছে, বন্যার জল এসেছে, খরা এসেছে। কিন্তু বৃক্ষ দাঁড়িয়ে আছে। কারণ শিকড় গভীর। স্থপতি ইদ্রিস বৃক্ষের গোড়ায় হাত রাখলেন। "উপরে তুমি ডাল দেখো," তিনি বললেন। "কিন্তু আমি নিচে শিকড় দেখি। ডাল ভাঙে, শিকড় থাকে। তুমি নয় দরজা পেরিয়েছ — এখন তুমি শিকড়। গভীরে যাও। চিরস্থায়ী হও।"</p>
<p class="scene-setting en">The tenth door. The last. An ancient tree — hundreds of years old. Storms came, floodwaters came, drought came. But the tree stands. Because roots are deep. Architect Idris placed his hand on the tree's base. "Above, you see branches," he said. "But I see roots below. Branches break, roots remain. You've passed nine doors — now you are the root. Go deep. Become permanent."</p>

<div class="dialogue">নয়টি দরজা পেরিয়েছ। পচনশীল উপাদান বলেছিলেন — ফানা। মূল নীতি বলেছিলেন — আকল। সিস্টেম চিন্তা বলেছিলেন — কদর। ব্যবসায়িক মস্তিষ্ক বলেছিলেন — রিযিক। সমস্যা সন্ধান বলেছিলেন — তালাশ। যোগাযোগ বলেছিলেন — বায়ান। পণ্য নির্মাণ বলেছিলেন — খলক। ইনোভেশন বলেছিলেন — তাজদিদ। উদ্যোক্তা বলেছিলেন — তাওয়াক্কুল। এখন — সব একসাথে। ফানা থেকে বাকা।</div>
<div class="dialogue en">"You've passed nine doors. Perishable material said — fana. First principles said — aql. Systems thinking said — qadar. Business brain said — rizq. Problem finding said — talash. Communication said — bayan. Product building said — khalq. Innovation said — tajdid. Entrepreneur said — tawakkul. Now — all together. From fana to baqa."</div>

<table class="kv-table"><tr><th>বৃক্ষের স্তর</th><th>কী</th></tr>
<tr><td class="hl">🌿 Canopy (দৃশ্যমান)</td><td>Title, salary, shipped features, recognition — যা অন্যরা দেখে</td></tr>
<tr><td class="hl">🪵 Trunk (skill)</td><td>Technical depth (দ্বার ২), systems thinking (৩), communication (৬), business brain (৪)</td></tr>
<tr><td class="hl">🌱 Roots (invisible)</td><td>Problem finding (৫), product sense (৭), innovation (৮), entrepreneur mindset (৯), timeless principles (১)</td></tr>
<tr><td class="hl">🟤 Soil (foundation)</td><td>Curiosity, humility, integrity, purpose — যা সবকিছুকে খাওয়ায়</td></tr></table>

<div class="timeline">
<div class="tl-step"><div class="tl-when">বছর ১-২ · Leaf</div><div class="tl-title">🍃 Junior</div><div class="tl-body">tools শেখো, প্রথম প্রজেক্ট, learn-to-learn। Focus: code quality।</div></div>
<div class="tl-step"><div class="tl-when">বছর ৩-৫ · Branch</div><div class="tl-title">🌿 Mid-level</div><div class="tl-body">first principles গভীর, systems দেখা শুরু। Focus: independence।</div></div>
<div class="tl-step"><div class="tl-when">বছর ৫-৮ · Trunk</div><div class="tl-title">🪵 Senior</div><div class="tl-body">systems thinking default, business brain, communication টিমকে গুণ করে। Focus: multiplying others।</div></div>
<div class="tl-step"><div class="tl-when">বছর ৮-১২ · Roots</div><div class="tl-title">🌱 Staff/Principal</div><div class="tl-body">problem finder, cross-domain innovation, product+business intuition। Focus: direction setting।</div></div>
<div class="tl-step"><div class="tl-when">বছর ১২+ · Deep-Rooted Tree</div><div class="tl-title">🌳 Irreplaceable</div><div class="tl-body">শিকড় এত গভীর যে সরালে org ক্ষতিগ্রস্ত; tech+business+innovation-এর unique মিশ্রণ; আরও নেতা তৈরি করে। Focus: legacy।</div></div>
</div>

<div class="callout info"><span class="co-icon">🗝️</span><div><strong>যা কাউকে সত্যিই irreplaceable করে:</strong> ① <strong>Unique combination</strong> — এক জিনিসে সেরা নয়, বহু জিনিসের intersection-এ সেরা। ② <strong>Trust capital</strong> — বছরের পর বছর কথা রাখা, ভুল মানা। ③ <strong>Institutional knowledge</strong> — কেন সিস্টেম এভাবে তা জানা। ④ <strong>Force multiplier</strong> — চারপাশের সবাইকে ভালো করা। ⑤ <strong>Judgment</strong> — skill নয়, wisdom; কখন ship, কী skip — automate করা যায় না।</div></div>

<div class="callout tip"><span class="co-icon">🌳</span><div><strong>The timeless truth:</strong> Tools বদলায়, framework মরে, language বিবর্তিত হয় — কিন্তু problem-solving, systems thinking, communication, curiosity, integrity, business understanding কখনো বদলায় না। <strong>যা কখনো বদলায় না, তাতে বিনিয়োগ করো</strong> — প্রতি বছর আরও মূল্যবান হবে, বেশি tool জানার জন্য নয়, বেশি সত্য বোঝার জন্য। ফানা থেকে বাকা — পাতা থেকে শিকড়।</div></div>

<div class="verse">"তুমি কি দেখনি আল্লাহ কীভাবে উদাহরণ দিয়েছেন? একটি ভালো কালিমা পবিত্র বৃক্ষের মতো — তার শিকড় গভীর, শাখা আসমানে।"<br>— কুরআন ১৪:২৪<br><br>"Have you not seen how Allah presents an example? A good word is like a good tree — its root is firm, its branches in the sky." অবিচ্ছেয্য কারিগর সেই বৃক্ষ — শিকড় গভীর, ডাল উঁচু। ঝড় আসে, বৃক্ষ থাকে। সময় যায়, মূল্য বাড়ে। ফানা থেকে বাকা — অস্থায়ী থেকে চিরস্থায়ী। এটাই অবিচ্ছেয্যতার সারমর্ম।</div>

<div class="secret-box"><div class="label">দশম দরজা — সমন্বয়</div><div class="text">🌳 অবিচ্ছেয্যতা = Permanent Knowledge + First Principles + Systems Thinking + Business Brain + Problem Finding + Communication + Product Sense + Innovation + Entrepreneurship।<br><small>ফানা থেকে বাকা — পচনশীল থেকে চিরস্থায়ী। গভীরে শিকড় দাও। তুমি সেই বৃক্ষ।</small></div></div>`
});
