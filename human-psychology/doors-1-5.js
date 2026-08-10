// ════════════════════════════════════════
// মনের সিংহাসন — DOORS 1-5
// Human Psychology: Helplessness → Gaslighting
// All claims backed by named research with dates
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: LEARNED HELPLESSNESS ══
doors.push({
  num:1, icon:"🧠", color:"#dc2626", name:"পরাজিত কুকুরের কক্ষ",
  subtitle:"The Broken Dog", tech:"Learned Helplessness (Seligman, 1967)",
  spirit:"নফস আম্মারা — আত্মসমর্পণকারী মন",
  secret:"১৯৬৭ সালে Seligman দেখালেন — কুকুর যখন শেখে পালানো অসম্ভব, সে আর চেষ্টাই করে না। মানুষও তেমনি। বারবার ব্যর্থ হলে মস্তিষ্ক শেখে — চেষ্টা নিরর্থক। এটাই learned helplessness। কিন্তু Seligman প্রমাণ করলেন — এটা অপরিবর্তনীয় নয়। মস্তিষ্ক পুনরায় শিখতে পারে।",
  recall:{
    q:"Seligman-এর কুকুর কেন পালানোর চেষ্টা করল না?",
    qen:"Why did Seligman's dogs not try to escape?",
    a:"কারণ তারা শিখেছিল পালানো অসম্ভব। বারবার ব্যর্থতায় মস্তিষ্ক শেখে — চেষ্টা নিরর্থক। এটাই learned helplessness। Seligman (১৯৬৭)। কিন্তু এটা পরিবর্তনযোগ্য — মস্তিষ্ক পুনরায় শিখতে পারে।",
    aen:"Because they learned escape was impossible. Repeated failure teaches the brain — effort is futile. This is learned helplessness (Seligman, 1967). But it's reversible — the brain can relearn."
  },
  story:`<p class="scene-setting">১৯৬৭ সাল। পেন্সিলভেনিয়া বিশ্ববিদ্যালয়। একটা ল্যাব। মনোবিজ্ঞানী মার্টিন সেলিগম্যান (Martin Seligman) এবং স্টিভেন মাইয়ার (Steven Maier) কুকুরদের নিয়ে পরীক্ষা করছেন। তিনটে দল। প্রথম দল: কোনো শক নেই। দ্বিতীয় দল: শক আছে, কিন্তু একটা লিভার চাপলে শক বন্ধ। তৃতীয় দল: শক আছে, কিন্তু কিছুতেই বন্ধ করা যায় না। অসহায়।</p>
<p class="scene-setting en">1967. University of Pennsylvania. A lab. Psychologist Martin Seligman and Steven Maier experimenting with dogs. Three groups. First: no shock. Second: shock, but pressing a lever stops it. Third: shock, but nothing stops it. Helpless.</p>

<div class="dialogue">পরের দিন সব কুকুরকে একটা নতুন বাক্সে রাখা হলো। বাক্সে একটা নিচু প্রাচীর — লাফ দিলেই পালানো যায়। শক শুরু হলো। প্রথম ও দ্বিতীয় দলের কুকুর লাফ দিল — পালাল। কিন্তু তৃতীয় দল? তারা শুয়ে রইল। লাফ দিল না। চেষ্টাই করল না। তারা শিখেছিল — কিছুতেই কিছু হয় না। এমনকি যখন পালানোর রাস্তা খোলা — তারা পালাল না। Seligman এর নাম দিলেন — Learned Helplessness।</div>
<div class="dialogue en">Next day, all dogs placed in a new box. Low partition — jump over to escape. Shock starts. First and second group dogs jump — escape. But the third group? They lay down. Didn't jump. Didn't even try. They had learned — nothing makes a difference. Even when escape was open — they didn't run. Seligman named it — Learned Helplessness.</div>

<table class="kv-table"><tr><th>দল (Seligman & Maier, 1967)</th><th>অবস্থা</th><th>পরে নতুন বাক্সে</th></tr>
<tr><td class="hl">Group ১</td><td>কোনো shock নেই</td><td>সহজে পালাল</td></tr>
<tr><td class="hl">Group ২</td><td>shock + control (lever)</td><td>পালাল</td></tr>
<tr><td class="hl">Group ৩</td><td>shock + কোনো control নেই</td><td>চেষ্টাই করল না — শিখেছিল response-এ কিছু হয় না</td></tr></table>

<div class="callout info"><span class="co-icon">🧬</span><div><strong>মস্তিষ্কের পরিবর্তন (Maier, 2016 reframing):</strong> dorsal raphe nucleus (DRN) hyperactive হয়, serotonin flood করে — এই surge-ই passive behavior ঘটায়। এটা অলসতা নয়, neurochemical। কিন্তু Group ৩-এর কুকুরদের যখন হাতে ধরে barrier পার করানো হলো, DRN শান্ত হলো → তারা সেরে উঠল। <strong>Helplessness reversible</strong> — এটাই মূল আবিষ্কার।</div></div>

<table class="kv-table"><tr><th>প্রেক্ষাপট</th><th>যা ঘটে</th></tr>
<tr><td class="hl">শৈশব</td><td>বারবার "তুমি পারবে না" → মস্তিষ্ক শেখে effort = হতাশা → চেষ্টা বন্ধ</td></tr>
<tr><td class="hl">প্রাপ্তবয়স্ক</td><td>বারবার ব্যর্থতা → "কিছুতেই কিছু হয় না" → বিষণ্নতা, passivity</td></tr>
<tr><td class="hl">দারিদ্র্য</td><td>systemic বাধা → "সিস্টেম rigged" → হাল ছেড়ে দেওয়া, প্রজন্মান্তরে</td></tr></table>

<div class="callout warn"><span class="co-icon">🌀</span><div><strong>Helplessness-এর ৩ উপাদান (Seligman):</strong> Internal ("এটা আমার দোষ") + Permanent ("সবসময় এমনই থাকবে") + Pervasive ("সব কিছুতে প্রভাব ফেলে")। তিনটা একসাথে = clinical depression। পরে Seligman একে "explanatory style" গবেষণায় পরিণত করেন।</div></div>

<div class="callout tip"><span class="co-icon">🌤️</span><div><strong>সুসংবাদ — Learned Optimism (1991):</strong> helplessness-এর মতো optimism-ও শেখা যায়। উপায় — explanatory style বদলানো: "আমি বোকা" → "ভালো প্রস্তুতি নিইনি"; "সবসময় fail করে" → "এই নির্দিষ্ট চেষ্টাটা fail করেছে"; "সব ভুল" → "এই একটা জিনিস ভুল"। Optimism বিভ্রম নয় — এটা সঠিক মূল্যায়ন যে setback নির্দিষ্ট, সাময়িক ও বাহ্যিক। ("Pet the dog" — কেউ তোমাকে দেখিয়ে দিলে যে পালানো সম্ভব, তখন তুমি বিশ্বাস করো।)</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arr-d1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker></defs>
<rect width="580" height="320" fill="#0f172a"/>
<text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="700">Learned Helplessness — The 3 P's (Seligman)</text>
<line x1="290" y1="40" x2="290" y2="78" stroke="#64748b" stroke-width="2" marker-end="url(#arr-d1)"/>
<circle cx="290" cy="50" r="22" fill="#7f1d1d" stroke="#fca5a5" stroke-width="2"/>
<text x="290" y="55" text-anchor="middle" fill="#fee2e2" font-size="11" font-weight="700">SETBACK</text>
<g><rect x="40" y="100" width="150" height="80" rx="10" fill="#312e81" stroke="#a5b4fc" stroke-width="1.5"/>
<text x="115" y="125" text-anchor="middle" fill="#c7d2fe" font-size="13" font-weight="700">Permanent</text>
<text x="115" y="148" text-anchor="middle" fill="#e0e7ff" font-size="10">"এমনই থাকবে"</text>
<text x="115" y="165" text-anchor="middle" fill="#a5b4fc" font-size="9">(always)</text></g>
<g><rect x="215" y="100" width="150" height="80" rx="10" fill="#581c87" stroke="#d8b4fe" stroke-width="1.5"/>
<text x="290" y="125" text-anchor="middle" fill="#e9d5ff" font-size="13" font-weight="700">Pervasive</text>
<text x="290" y="148" text-anchor="middle" fill="#f3e8ff" font-size="10">"সব কিছুতে"</text>
<text x="290" y="165" text-anchor="middle" fill="#d8b4fe" font-size="9">(everything)</text></g>
<g><rect x="390" y="100" width="150" height="80" rx="10" fill="#7c2d12" stroke="#fdba74" stroke-width="1.5"/>
<text x="465" y="125" text-anchor="middle" fill="#fed7aa" font-size="13" font-weight="700">Personal</text>
<text x="465" y="148" text-anchor="middle" fill="#ffedd5" font-size="10">"আমার দোষ"</text>
<text x="465" y="165" text-anchor="middle" fill="#fdba74" font-size="9">(me)</text></g>
<line x1="115" y1="180" x2="115" y2="215" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-d1)"/>
<line x1="290" y1="180" x2="290" y2="215" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-d1)"/>
<line x1="465" y1="180" x2="465" y2="215" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-d1)"/>
<rect x="100" y="218" width="380" height="60" rx="10" fill="#052e16" stroke="#86efac" stroke-width="2"/>
<text x="290" y="242" text-anchor="middle" fill="#bbf7d0" font-size="13" font-weight="700">3 P's একসাথে = Clinical Depression</text>
<text x="290" y="262" text-anchor="middle" fill="#86efac" font-size="10">প্রতিটা P চ্যালেঞ্জ করো → reversal সম্ভব (Maier 2016)</text>
<text x="290" y="295" text-anchor="middle" fill="#94a3b8" font-size="9" font-style="italic">Permanence * Pervasiveness * Personal → Helplessness</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Learned Helplessness-এর তিন উপাদান (Seligman). Three P's of helplessness.</div>

<div class="code-block">Seligman Explanatory Style — Self-Test (count your pattern)
──────────────────────────────────────────────────────────────────────
When something bad happens, do you say:
  P  "এটা সবসময়ই হয়"            (Permanent)    → "এই বার হলো"
  P  "সব কিছুতে এমন"             (Pervasive)    → "শুধু এই কাজে"
  P  "আমি বোকা/অক্ষম"           (Personal)     → "আমি প্রস্তুতি নিইনি"

Reframing (Learned Optimism, Seligman 1991):
  Bad event → specific, temporary, external
  "Math পরীক্ষায় কাটছিল"     ≠  "আমি বোকা"
  "এই চেষ্টায় প্রস্তুতি কম"   ≠  "আমি কিছুতেই পারি না"
──────────────────────────────────────────────────────────────────────
# Reversal proof (Maier 2016): DRN serotonin surge কমালে helplessness
# উল্টায়। "Pet the dog" — কেউ দেখালে পালানোর রাস্তা, কুকুর উঠে দাঁড়ায়।</div>

<div class="dialogue">নফস আম্মারা — আত্মসমর্পণকারী মন। কুরআনে আল্লাহ বলেন — "নিশ্চয় মানুষের মন খুব কঠোরভাবে খারাপ আদেশ দেয়।" (১২:৫৩)। নফস আম্মারা হলো সেই অবস্থা যেখানে মন বলে — চেষ্টা কোরো না, কিছু হবে না, তুমি পারবে না। Seligman-এর কুকুরের মতো — শুয়ে থাকো। কিন্তু কুরআন আরও বলে — "যারা জিহাদ করে (চেষ্টা করে), আমি তাদের আমার পথ দেখাই।" (২৯:৬৯)। চেষ্টা = শেখানোর শর্ত। নফস আম্মারা থেকে নফস মুতমাইন্না (প্রশান্ত মন) — এটাই যাত্রা। সম্ভব। প্রমাণিত।</div>
<div class="dialogue en">"Nafs Ammara — the self that commands to surrender. The Quran says — 'The human soul certainly commands evil.' (12:53). Nafs Ammara is the state where the mind says — don't try, nothing will happen, you can't. Like Seligman's dog — lie down. But the Quran also says — 'Those who strive, We show them Our paths.' (29:69). Effort = the condition for learning. From Nafs Ammara to Nafs Mutma'innah (the tranquil self) — this is the journey. Possible. Proven."</div>`,
  senior:{
    title:"Learned Helplessness — Are You Affected?",
    body:`<p><strong>Self-test:</strong> Do you agree with these statements? (Seligman's explanatory style assessment)</p><p>১. "I often think I can't do things well."</p><p>২. "When bad things happen, I think it will always be this way."</p><p>৩. "Failure in one area means I'll fail in everything."</p><p><strong>If 2+ yes:</strong> You may have learned helplessness patterns. The good news: Seligman proved this is REVERSIBLE. The method: change your explanatory style (Door 5-6) and experience small wins (physically cross the barrier).</p><p><strong>Key insight:</strong> Helplessness is not weakness — it's a LEARNED brain state. And what's learned can be UNLEARNED.</p>`
  }
});

// ══ DOOR 2: MANIPULATION MECHANICS ══
doors.push({
  num:2, icon:"🎭", color:"#60a5fa", name:"মুখোশের কক্ষ",
  subtitle:"The Mask Maker", tech:"Influence & Persuasion (Cialdini, 1984/2021)",
  spirit:"গাসল — ঢেকে রাখা, বিভ্রম",
  secret:"১৯৮৪ সালে Cialdini প্রমাণ করলেন — নিয়ন্ত্রণ জাদু নয়, বিজ্ঞান। ৬টি নীতি (১৯৮৪), পরে ৭ম (Unity, ২০২১) যোগ: reciprocity, commitment, social proof, authority, liking, scarcity, unity। প্রতিটা মানুষের মস্তিষ্কের shortcut — নিয়ন্ত্রকরা এই shortcut ব্যবহার করে। জানলে প্রতিরোধ করতে পারবে।",
  recall:{
    q:"Cialdini-র সাতটি নীতি কীভাবে কাজ করে?",
    qen:"How do Cialdini's seven principles work?",
    a:"মস্তিষ্কের shortcut — reciprocity, commitment, social proof, authority, liking, scarcity, unity। নিয়ন্ত্রকরা এই shortcut ব্যবহার করে। সচেতন হলে প্রতিরোধ করতে পারবে। গাসল — বিভ্রম থেকে সত্যে।",
    aen:"Brain shortcuts — reciprocity, commitment, social proof, authority, liking, scarcity, unity. Controllers exploit these. Awareness enables resistance."
  },
  story:`<p class="scene-setting">১৯৮৪ সাল। আরিজোনা স্টেট ইউনিভার্সিটি। মনোবিজ্ঞানী রবার্ট সিয়ালডিনি (Robert Cialdini) একটা অদ্ভুত কাজ করলেন। তিনি ক্লাসরুমে নয় — রাস্তায় নামলেন। বিক্রেতা, তহবিল সংগ্রহকারী, কাল্ট নেতা, দরকষাকষিকারী — তাদের সাথে কাজ করলেন। ৩ বছর। তিনি জানতে চাইলেন — এরা কীভাবে মানুষকে নিয়ন্ত্রণ করে? জাদু নয় — বিজ্ঞান। প্রথমে ৬টি নীতি (১৯৮৪), পরে ৭ম (Unity, ২০২১) যোগ হয়।</p>
<p class="scene-setting en">1984. Arizona State University. Psychologist Robert Cialdini did something unusual. Not in the classroom — on the streets. With salespeople, fundraisers, cult recruiters, negotiators — worked alongside them for 3 years. He wanted to know — how do they control people? Not magic — science. 7 principles.</p>

<div class="dialogue">Cialdini আবিষ্কার করলেন — মানুষের মস্তিষ্কে সিদ্ধান্ত নেওয়ার shortcut আছে। প্রতিদিন হাজার হাজার সিদ্ধান্ত — প্রতিটা বিশ্লেষণ করলে মস্তিষ্ক ক্লান্ত। তাই shortcut। কিন্তু এই shortcut-ই নিয়ন্ত্রকদের দুর্বলতা। যে জানে কোন shortcut কীভাবে কাজ করে, সে প্রতিরোধ করতে পারে। যে জানে না, সে নিয়ন্ত্রিত হয়।</div>
<div class="dialogue en">Cialdini discovered — the human brain has decision-making shortcuts. Thousands of daily decisions — analyzing each exhausts the brain. So shortcuts. But these shortcuts are what controllers exploit. One who knows which shortcut, how it works, can resist. One who doesn't, is controlled.</div>

<table class="kv-table"><tr><th>নীতি</th><th>গবেষণা</th><th>প্রতিরক্ষা</th></tr>
<tr><td class="hl">১. Reciprocity</td><td>bill-এর সাথে mint → tip +১৪%, দুটো mint → +২৩%</td><td>"free জিনিসের জন্য আমি ঋণী নই"</td></tr>
<tr><td class="hl">২. Commitment</td><td>foot-in-door; ছোট request → yes → বড় request → yes (Festinger dissonance, 1957)</td><td>"আমি মত বদলাতে পারি; অতীতের আমি ≠ এখনকার আমি"</td></tr>
<tr><td class="hl">৩. Social Proof</td><td>Asch conformity (1951) — ~৭৫% অন্তত একবার ভুল উত্তরে সায় দেয় (Berns fMRI, 2005: ভিন্নমতে ব্যথা-সংকেত)</td><td>"জনপ্রিয়তা ≠ সত্য (একসময় সবাই ভাবত পৃথিবী সমতল)"</td></tr>
<tr><td class="hl">৪. Authority</td><td>Milgram (1961) — ৬৫% "lethal" shock দিল কারণ authority বলল "continue"</td><td>"authority-র প্রমাণ লাগে, শুধু title নয়"</td></tr>
<tr><td class="hl">৫. Liking</td><td>বন্ধুর কাছ থেকে ৩x বেশি কেনে; attractiveness +১০% compliance (halo effect, Thorndike 1920)</td><td>"ব্যক্তি ও প্রস্তাব আলাদা করো"</td></tr>
<tr><td class="hl">৬. Scarcity</td><td>"limited time" → +৩৭% কেনা; Worchel cookie jar (1975); loss aversion ২x (Kahneman & Tversky, 1979)</td><td>"urgency বানানো; আসল মূল্য ২৪ ঘণ্টায় শেষ হয় না"</td></tr>
<tr><td class="hl">৭. Unity (২০২১)</td><td>shared identity ("we") — family, tribe, nation → compliance বাড়ে</td><td>"shared identity ≠ shared truth"</td></tr></table>

<div class="callout warn"><span class="co-icon">🎭</span><div><strong>Combination attack:</strong> নিয়ন্ত্রকরা নীতিগুলো একসাথে stack করে। Cult recruitment: Unity ("আমরা family") → Reciprocity ("free meal") → Social proof ("সবাই খুশি") → Authority ("নেতা সত্য জানেন") → Commitment ("কেন যোগ দিলে লেখো") → Scarcity ("পৃথিবী শেষ, শুধু আমরা বাঁচাতে পারি") → Liking ("আমরা তোমাকে ভালোবাসি")। প্রতিটা principle চিনতে না পারলে বের হওয়া প্রায় অসম্ভব।</div></div>

<div class="callout info"><span class="co-icon">🧠</span><div><strong>মস্তিষ্ক কেন এতে ধরা দেয়:</strong> এগুলো decision shortcut — প্রতিদিন হাজার সিদ্ধান্ত বিশ্লেষণ করলে মস্তিষ্ক ক্লান্ত হয়, তাই shortcut। authority-র সামনে prefrontal cortex (নৈতিক যুক্তি) কার্যত বন্ধ হয়ে যায়; in-group-এ oxytocin critical thinking কমায়। <strong>নিয়ম: যেকোনো বড় সিদ্ধান্তে ২৪ ঘণ্টা delay — manipulation দিনের আলোয় মরে যায়।</strong></div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arr-d2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker></defs>
<rect width="580" height="340" fill="#0f172a"/>
<text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="700">Emotional Intelligence — Recognize Your Body Signal</text>
<text x="290" y="48" text-anchor="middle" fill="#94a3b8" font-size="10">Goleman's 4 domains — self-awareness is the gateway</text>
<g><rect x="30" y="70" width="120" height="100" rx="10" fill="#0c4a6e" stroke="#7dd3fc" stroke-width="1.5"/>
<text x="90" y="95" text-anchor="middle" fill="#bae6fd" font-size="12" font-weight="700">SELF</text>
<text x="90" y="115" text-anchor="middle" fill="#e0f2fe" font-size="11">AWARENESS</text>
<text x="90" y="140" text-anchor="middle" fill="#7dd3fc" font-size="9">"কী অনুভব"</text>
<text x="90" y="155" text-anchor="middle" fill="#7dd3fc" font-size="9">"করছি?"</text></g>
<g><rect x="165" y="70" width="120" height="100" rx="10" fill="#312e81" stroke="#a5b4fc" stroke-width="1.5"/>
<text x="225" y="95" text-anchor="middle" fill="#c7d2fe" font-size="12" font-weight="700">SELF</text>
<text x="225" y="115" text-anchor="middle" fill="#e0e7ff" font-size="11">MANAGE</text>
<text x="225" y="140" text-anchor="middle" fill="#a5b4fc" font-size="9">gap-এ</text>
<text x="225" y="155" text-anchor="middle" fill="#a5b4fc" font-size="9">থামো</text></g>
<g><rect x="300" y="70" width="120" height="100" rx="10" fill="#581c87" stroke="#d8b4fe" stroke-width="1.5"/>
<text x="360" y="95" text-anchor="middle" fill="#e9d5ff" font-size="12" font-weight="700">SOCIAL</text>
<text x="360" y="115" text-anchor="middle" fill="#f3e8ff" font-size="11">AWARENESS</text>
<text x="360" y="140" text-anchor="middle" fill="#d8b4fe" font-size="9">অন্যের</text>
<text x="360" y="155" text-anchor="middle" fill="#d8b4fe" font-size="9">intent পড়ো</text></g>
<g><rect x="435" y="70" width="120" height="100" rx="10" fill="#7c2d12" stroke="#fdba74" stroke-width="1.5"/>
<text x="495" y="95" text-anchor="middle" fill="#fed7aa" font-size="12" font-weight="700">RELATION-</text>
<text x="495" y="115" text-anchor="middle" fill="#ffedd5" font-size="11">SHIP</text>
<text x="495" y="140" text-anchor="middle" fill="#fdba74" font-size="9">সীমা</text>
<text x="495" y="155" text-anchor="middle" fill="#fdba74" font-size="9">টানো</text></g>
<text x="290" y="200" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="700">Manipulation-এর Body Signals (২৪ ঘণ্টা rule)</text>
<g><rect x="40" y="215" width="250" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
<text x="165" y="235" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700">⚠️ URGENCY SIGNALS</text>
<text x="50" y="255" fill="#cbd5e1" font-size="10">• বুকে চাপ / গলা শুকিয়ে যাওয়া</text>
<text x="50" y="272" fill="#cbd5e1" font-size="10">• পেটে নড়াচড়া (gut punch)</text>
<text x="50" y="289" fill="#cbd5e1" font-size="10">• হাত ঠান্ডা / ঘাম</text>
<text x="50" y="306" fill="#fbbf24" font-size="10" font-style="italic">→ চিন → pause → Cialdini check</text></g>
<g><rect x="300" y="215" width="250" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
<text x="425" y="235" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">✅ GROUNDED SIGNALS</text>
<text x="310" y="255" fill="#cbd5e1" font-size="10">• শ্বাস গভীর, মন পরিষ্কার</text>
<text x="310" y="272" fill="#cbd5e1" font-size="10">• পেশি শিথিল</text>
<text x="310" y="289" fill="#cbd5e1" font-size="10">• নিজের মূল্যবোধে স্থির</text>
<text x="310" y="306" fill="#fbbf24" font-size="10" font-style="italic">→ decide সময় নাও</text></g>
</svg>
</div>
<div class="svg-caption">চিত্র: আবেগজ্ঞানের চার স্তর ও ম্যানিপুলেশন-সংকেত। Four EI domains + body cues.</div>

<div class="code-block">Emotional Intelligence — Cialdini Trigger Check (24h Rule)
──────────────────────────────────────────────────────────────────────
Feeling pressured? Run this checklist (any YES = pause 24 hours):

  [ ]  ঋণী বোধ?        → Reciprocity trap  (free meal, gift, favor)
  [ ]  ধারাবাহিকতা চাপ?  → Commitment lock   ("you said last week...")
  [ ]  "সবাই করছে"?     → Social proof      (popularity != truth)
  [ ]  title/uniform?   → Authority bias    (Milgram 1961: 65% obeyed)
  [ ]  ভালোবাসো বলে?    → Liking exploit    (separate person / offer)
  [ ]  "শেষ সুযোগ"?      → Scarcity fake     (real value doesn't expire)
  [ ]  "আমরা family"?    → Unity bypass      (identity != shared truth)

Body signal log (nightly, 2 minutes):
  time | trigger | body cue | which principle | decision (delayed/y/n)
  09:15 | boss "now" | gut punch | authority | delayed 24h
──────────────────────────────────────────────────────────────────────
# Goleman: EQ 4x stronger predictor of success than IQ (1995).</div>

<div class="dialogue">গাসল — covering, concealing, deception। কুরআনে আল্লাহ বলেন — "শয়তান তাদের কাজ সুশোভন করে তোলে।" (১৬:৬৩)। গাসল হলো সত্যকে ঢেকে রেখে মিথ্যা সুন্দর করে দেখানো। Cialdini-র নীতিগুলো গাসলের বিজ্ঞান — প্রতিটা shortcut মানুষের মস্তিষ্কের দুর্বলতা যা নিয়ন্ত্রক ব্যবহার করে। কিন্তু যে জানে, সে দেখে। যে দেখে, সে প্রতিরোধ করে। গাসল থেকে কাশফ (প্রকাশ) — এটাই সচেতনতার পথ।</div>
<div class="dialogue en">"Ghasl — covering, concealing, deception. Allah says — 'Satan makes their deeds appear fair to them.' (16:63). Ghasl is hiding truth while making falsehood appear beautiful. Cialdini's principles are the science of ghasl — each shortcut is a brain vulnerability that controllers exploit. But one who knows, sees. One who sees, resists. From ghasl to kashf (uncovering) — this is the path of awareness."</div>`,
  senior:{
    title:"Defense Against Manipulation",
    body:`<p><strong>When you feel pressured to decide, ask:</strong></p><p>১. Is someone doing me a "favor" that creates obligation? (Reciprocity)</p><p>২. Am I being pushed to be consistent with a past statement? (Commitment)</p><p>৩. Is "everyone doing it" the main argument? (Social proof)</p><p>৪. Am I obeying because of title/uniform, not evidence? (Authority)</p><p>৫. Do I like this person, and is that clouding judgment? (Liking)</p><p>৬. Is there artificial urgency? "Last chance"? (Scarcity)</p><p>৭. Is shared identity being used to bypass logic? (Unity)</p><p><strong>Rule:</strong> 24-hour delay on any significant decision. Manipulation dies in daylight.</p>`
  }
});

// ══ DOOR 3: POWER & THE BRAIN ══
doors.push({
  num:3, icon:"⚡", color:"#dc2626", name:"ক্ষমতার অধিকারী",
  subtitle:"The Power Paradox", tech:"Power Neuroscience (Keltner, Sapolsky)",
  spirit:"সুলতান আন-নাফস — আত্মার সার্বভৌমত্ব",
  secret:"Dacher Keltner (২০০৭) দেখালেন — ক্ষমতা মানুষকে পরিবর্তন করে। prefrontal cortex বন্ধ হয়, empathy কমে, impulsivity বাড়ে। Keltner এর নাম — Power Paradox। ক্ষমতা পেতে empathy লাগে, কিন্তু ক্ষমতা পেলে empathy মরে। সচেতন হলে প্রতিরোধ করা যায়।",
  recall:{
    q:"Keltner-র Power Paradox কী?",
    qen:"What is Keltner's Power Paradox?",
    a:"ক্ষমতা পেতে empathy লাগে, কিন্তু ক্ষমতা পেলে empathy মরে। prefrontal cortex বন্ধ, impulsivity বাড়ে। Keltner (২০০৭)। সচেতন হলে প্রতিরোধ সম্ভব।",
    aen:"Power requires empathy to gain, but power kills empathy. Prefrontal cortex shuts down, impulsivity rises. Keltner (2007). Awareness enables prevention."
  },
  story:`<p class="scene-setting">২০০৭ সাল। ইউসিএ বার্কলে। মনোবিজ্ঞানী ড্যাচার কেল্টনার (Dacher Keltner) ২০ বছরের গবেষণা প্রকাশ করলেন — The Power Paradox (২০০৭ সালে গবেষণাপত্র, ২০১৬ সালে বই)। তিনি দেখালেন এমন কিছু যা সবাই জানে কিন্তু কেউ স্বীকার করে না। ক্ষমতা মানুষকে পরিবর্তন করে। ভালো মানুষ ক্ষমতা পেলে — খারাপ হয়ে যায়। কেন?</p>
<p class="scene-setting en">2007. UC Berkeley. Psychologist Dacher Keltner published a book with 20 years of research — The Power Paradox. He showed something everyone knows but nobody admits. Power changes people. Good people get power — become worse. Why?</p>

<div class="dialogue">Cialdini বলেছিলেন — কীভাবে নিয়ন্ত্রণ করা হয়। কিন্তু আমি বলি — ক্ষমতা পেলে মস্তিষ্কে কী হয়? Keltner দেখালেন — prefrontal cortex বন্ধ হয়ে যায়। empathy কমে। মানুষ বস্তু হয়ে যায় — মানুষ না। Sapolsky দেখালেন — পদমর্যাদায় নিচে থাকলে ক্রনিক স্ট্রেস, উপরে থাকলে empathy loss। দুই পক্ষই ক্ষতিগ্রস্ত।</div>
<div class="dialogue en">"Cialdini said — how people are controlled. But I say — what happens to the brain when you GET power? Keltner showed — the prefrontal cortex shuts down. Empathy drops. People become objects — not humans. Sapolsky showed — low rank = chronic stress, high rank = empathy loss. Both sides suffer."</div>

<div class="callout warn"><span class="co-icon">⚡</span><div><strong>The Power Paradox (Keltner):</strong> মানুষ ক্ষমতা <em>পায়</em> empathy, generosity ও collaboration দিয়ে — অন্যরা স্বেচ্ছায় অনুসরণ করে। কিন্তু ক্ষমতা তাদের <em>যা করে</em>: empathy কমায়, impulsivity বাড়ায় — তারা এমন মানুষ হয়ে ওঠে যাকে কেউ অনুসরণ করত না। "Cookie experiment" (2003): এলোমেলোভাবে নিযুক্ত "leader" বেশি খেল, শেষ cookie না-বলে নিল — random ক্ষমতাও অসচেতন-স্বার্থপর বানায়।</div></div>

<table class="kv-table"><tr><th>মস্তিষ্ক অঞ্চল</th><th>ক্ষমতার প্রভাব</th></tr>
<tr><td class="hl">Prefrontal cortex</td><td>নিষ্ক্রিয় — mirror neuron কম, অন্যের আবেগ পড়তে পারে না</td></tr>
<tr><td class="hl">Amygdala</td><td>অন্যের distress-সংকেতে কম সাড়া</td></tr>
<tr><td class="hl">Reward circuit</td><td>নিজের reward-এ hypersensitive, অন্যের ব্যথায় অন্ধ</td></tr></table>

<div class="callout info"><span class="co-icon">🔬</span><div>fMRI (Hogeveen, 2014): high-power অংশগ্রহণকারীদের mirror-neuron activity কমে যায় — তারা আক্ষরিক অর্থে অন্যের অনুভূতি simulate করতে পারে না। ক্ষমতা তোমাকে অন্য মানুষের প্রতি অন্ধ করে।</div></div>

<table class="kv-table"><tr><th>Sapolsky ও Whitehall</th><th>ফলাফল</th></tr>
<tr><td class="hl">নিচু র‍্যাঙ্কের baboon</td><td>উচ্চ cortisol, ছোট আয়ু, hippocampus সংকুচিত</td></tr>
<tr><td class="hl">উঁচু র‍্যাঙ্ক (স্থিতিশীল)</td><td>কম cortisol — কিন্তু অস্থিতিশীল hierarchy-তে সবাই stressed</td></tr>
<tr><td class="hl">Whitehall (Marmot, 1967+)</td><td>একই healthcare-এও নিচু র‍্যাঙ্কে ৩x হৃদরোগ-মৃত্যু; র‍্যাঙ্ক ধূমপানের চেয়েও বেশি স্বাস্থ্য-ভবিষ্যদ্বাণী করে</td></tr></table>

<div class="callout warn"><span class="co-icon">🎯</span><div><strong>মূল আবিষ্কার:</strong> "control-এর অভাবের অনুভূতি" = #১ stressor, প্রকৃত কষ্টের চেয়েও বেশি। control-হীন middle manager বিশাল কাজের CEO-র চেয়ে বেশি stressed। <strong>Workload নয়, control-ই আসল।</strong> (তুলনীয়: Zimbardo Stanford Prison 1971 — random ক্ষমতা ২ দিনে guard-দের sadistic করে; Milgram 1961 — ৬৫% authority-র আদেশে ক্ষতিকর কাজ করে।)</div></div>

<div class="callout tip"><span class="co-icon">🕊️</span><div><strong>প্রতিষেধক — servant leadership:</strong> Keltner-এর গবেষণা বলে ক্ষমতা <em>টেকে</em> শুধু তখনই যখন empathy ধরে রাখা হয় — সচেতনভাবে perspective-taking চর্চা করো, ground truth-এর (user, front line) সাথে যুক্ত থাকো, dissent আমন্ত্রণ করো (yes-men নয়)। যারা টেকে, তারা ক্ষমতার মস্তিষ্ক-পরিবর্তনকে সচেতনভাবে প্রতিরোধ করে — নম্রতা ও শোনাকে বেছে নেয়।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arr-d3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker></defs>
<rect width="580" height="320" fill="#0f172a"/>
<text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="700">Power Paradox — What Power Does to the Brain</text>
<g><rect x="40" y="55" width="240" height="120" rx="12" fill="#052e16" stroke="#86efac" stroke-width="2"/>
<text x="160" y="80" text-anchor="middle" fill="#bbf7d0" font-size="13" font-weight="700">BEFORE POWER</text>
<text x="55" y="105" fill="#dcfce7" font-size="11">✓ empathy high (mirror neuron সক্রিয়)</text>
<text x="55" y="125" fill="#dcfce7" font-size="11">✓ generosity, collaboration</text>
<text x="55" y="145" fill="#dcfce7" font-size="11">✓ perspective-taking</text>
<text x="55" y="165" fill="#86efac" font-size="10" font-style="italic">→ মানুষ স্বেচ্ছায় অনুসরণ করে</text></g>
<g><rect x="310" y="55" width="240" height="120" rx="12" fill="#7f1d1d" stroke="#fca5a5" stroke-width="2"/>
<text x="430" y="80" text-anchor="middle" fill="#fee2e2" font-size="13" font-weight="700">AFTER POWER</text>
<text x="325" y="105" fill="#fecaca" font-size="11">✗ empathy কমে (PFC নিষ্ক্রিয়)</text>
<text x="325" y="125" fill="#fecaca" font-size="11">✗ impulsivity বাড়ে</text>
<text x="325" y="145" fill="#fecaca" font-size="11">✗ অন্যের ব্যথায় অন্ধ</text>
<text x="325" y="165" fill="#fca5a5" font-size="10" font-style="italic">→ এমন মানুষ হয় যাকে কেউ ফলো করত না</text></g>
<line x1="280" y1="115" x2="310" y2="115" stroke="#fbbf24" stroke-width="3" marker-end="url(#arr-d3)"/>
<text x="290" y="200" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="700">The Sapolsky Hierarchy — Stress by Rank</text>
<g><rect x="40" y="215" width="170" height="85" rx="8" fill="#312e81" stroke="#a5b4fc" stroke-width="1"/>
<text x="125" y="238" text-anchor="middle" fill="#c7d2fe" font-size="12" font-weight="700">HIGH RANK (stable)</text>
<text x="55" y="258" fill="#e0e7ff" font-size="10">কম cortisol, control</text>
<text x="55" y="275" fill="#e0e7ff" font-size="10">কিন্তু empathy loss risk</text>
<text x="55" y="290" fill="#a5b4fc" font-size="9" font-style="italic">→ servant-leader থাকো</text></g>
<g><rect x="220" y="215" width="170" height="85" rx="8" fill="#7c2d12" stroke="#fdba74" stroke-width="1"/>
<text x="305" y="238" text-anchor="middle" fill="#fed7aa" font-size="12" font-weight="700">MIDDLE (no control)</text>
<text x="235" y="258" fill="#ffedd5" font-size="10">সবচেয়ে বেশি stressed</text>
<text x="235" y="275" fill="#ffedd5" font-size="10">Whitehall: ৩x হৃদরোগ</text>
<text x="235" y="290" fill="#fdba74" font-size="9" font-style="italic">→ control খোঁজো</text></g>
<g><rect x="400" y="215" width="170" height="85" rx="8" fill="#7f1d1d" stroke="#fca5a5" stroke-width="1"/>
<text x="485" y="238" text-anchor="middle" fill="#fee2e2" font-size="12" font-weight="700">LOW RANK</text>
<text x="415" y="258" fill="#fecaca" font-size="10">chronic cortisol spike</text>
<text x="415" y="275" fill="#fecaca" font-size="10">hippocampus shrink</text>
<text x="415" y="290" fill="#fca5a5" font-size="9" font-style="italic">→ small wins (Bandura)</text></g>
</svg>
</div>
<div class="svg-caption">চিত্র: ক্ষমতা ও পদমর্যাদার স্নায়বিজ্ঞান (Keltner + Sapolsky). Power & hierarchy neuroscience.</div>

<div class="code-block">Power Dynamics — Stress-by-Control Audit (Sapolsky / Whitehall)
──────────────────────────────────────────────────────────────────────
Question                    Low control     High control
─────────────────────────── ─────────────── ───────────────
কাজের ধারা কে ঠিক করে?      অন্য কেউ        আমি
কখন বিরতি নেবে?             নিয়ম করে দেয়    আমি বলি
কোন task করবে?              assigned        choose
ভুল হলে কার consequences?   আমার উপর        shared
─────────────────────────── ─────────────── ───────────────
Health impact (Marmot Whitehall, 1967+):
  lowest rank → 3x cardiac mortality (vs highest, same healthcare)
  "control-হীনতা" = #1 stressor, &gt; workload, &gt; smoking

Self-check: list 5 daily tasks. Mark C (you control) or N (not).
  N-count &gt; 3  → your cortisol profile resembles a low-rank baboon.
  Fix: reclaim ONE control-point this week (when/how/what).
──────────────────────────────────────────────────────────────────────
# Keltner (2003) "cookie experiment": random "leader" ate more,
# took the last cookie without asking. Power corrupts even randomly.</div>

<div class="dialogue">সুলতান আন-নাফস — sovereignty over the self। সুফি ঐতিহ্যে সর্বোচ্চ স্তর — নিজের মনের উপর সম্পূর্ণ সার্বভৌমত্ব। কুরআনে আল্লাহ বলেন — "নিশ্চয় আল্লাহ তাদের ভালোবাসেন যারা তাদের মনকে নিয়ন্ত্রণ করে।" Keltner দেখালেন — বাইরের ক্ষমতা যদি চিত্তবিনোদনমূলক হয়, ভেতরের ক্ষমতা ধ্বংস হয়। কিন্তু যে নিজের মনের সুলতান, সে বাইরের ক্ষমতায় অহংকারী হয় না। সুলতান আন-নাফস — আত্মসার্বভৌমত্ব, বাইরের ক্ষমতা নয়।</div>
<div class="dialogue en">"Sultan an-Nafs — sovereignty over the self. In Sufi tradition, the highest level — complete sovereignty over one's own mind. Allah says — 'Allah loves those who control themselves.' Keltner showed — external power, if intoxicating, destroys internal power. But one who is sultan of their own mind, doesn't become arrogant with external power. Sultan an-Nafs — self-sovereignty, not external power."</div>`,
  senior:{
    title:"Power Awareness — Protecting Yourself",
    body:`<p><strong>If you have power:</strong> Actively practice perspective-taking. Spend time with frontline people. Invite dissent. Ask: what do I NOT see? Mirror neurons degrade under power — fight this consciously.</p><p><strong>If someone has power over you:</strong> Remember — their empathy may be impaired. Don't expect fairness from power. Document everything. Build alternatives. Your plan B is your freedom.</p><p><strong>The Whitehall lesson:</strong> Perceived lack of control is the #1 stressor. If you feel powerless at work, the health damage is equivalent to smoking. This is not psychological — it's physiological (cortisol damages hippocampus).</p><p><strong>Key insight:</strong> Power is not about position. It's about CONTROL over your response. Frankl's lesson (Door 9): the last human freedom is choosing your attitude.</p>`
  }
});

// ══ DOOR 4: GASLIGHTING ══
doors.push({
  num:4, icon:"🪤", color:"#60a5fa", name:"অদৃশ্য খাঁচা",
  subtitle:"The Invisible Cage", tech:"Gaslighting & Coercive Control",
  spirit:"তাদলিস — প্রতারণা, মিথ্যা বিশ্বাস গ্রহণ",
  secret:"১৯৪৪ সালের একটা সিনেমা — স্বামী পত্নীকে বিশ্বাস করায় সে পাগল। এটাই gaslighting — ধীরে ধীরে কারো বাস্তবতা চুরি করা। তুমি নিশ্চিত ছিলে — কিন্তু এখন সন্দেহ করো। এটা পাগল হওয়া নয় — এটা নিয়ন্ত্রণের সবচেয়ে গভীর রূপ। বাস্তবতা ফেরত নেওয়া যায় — সচেতনতা দিয়ে।",
  recall:{
    q:"Gaslighting কীভাবে কাজ করে?",
    qen:"How does gaslighting work?",
    a:"ধীরে ধীরে কারো বাস্তবতা চুরি করা। তুমি নিশ্চিত ছিলে — এখন সন্দেহ করো। ১৯৪৪ সিনেমার নাম থেকে। এটা নিয়ন্ত্রণের সবচেয়ে গভীর রূপ। সচেতনতা দিয়ে বাস্তবতা ফেরত নেওয়া যায়।",
    aen:"Gradually stealing someone's reality. You were sure — now you doubt. Named from the 1944 film. The deepest form of control. Reality can be reclaimed through awareness."
  },
  story:`<p class="scene-setting">১৯৪৪ সাল। একটা সিনেমা — Gaslight। একজন স্বামী তার পত্নীকে ধীরে ধীরে বিশ্বাস করায় যে সে পাগল হয়ে যাচ্ছে। সে বাতি কমায় (gaslight), কিন্তু স্বামী বলে — বাতি কমেনি, তুমি কল্পনা করছ। সে জিনিস সরায়, স্বামী বলে — তুমি ভুলে গেছ। ধীরে ধীরে পত্নী নিজের চোখকে অবিশ্বাস করতে শুরু করে। এটাই gaslighting — বাস্তবতা চুরি করার শিল্প।</p>
<p class="scene-setting en">1944. A film — Gaslight. A husband slowly convinces his wife she's going insane. He dims the lights (gaslight), but says — the lights didn't dim, you're imagining. He moves things, says — you forgot. Gradually the wife stops trusting her own eyes. This is gaslighting — the art of stealing reality.</p>

<div class="dialogue">Power paradox বলেছিলেন — ক্ষমতা মস্তিষ্ক পরিবর্তন করে। কিন্তু আমি বলি — সবচেয়ে ভয়ংকর নিয়ন্ত্রণ ক্ষমতা দিয়ে নয়, বাস্তবতা চুরি করে। Gaslighting। তুমি জানো কী দেখেছ, কিন্তু কেউ বারবার বলে — তুমি ভুল দেখেছ। ধীরে ধীরে তুমি নিজেকে অবিশ্বাস করো। নিজের মন থেকে বেরিয়ে যাও। এটাই অদৃশ্য খাঁচা।</div>
<div class="dialogue en">"The power paradox said — power changes the brain. But I say — the most terrifying control isn't through power, but through stealing reality. Gaslighting. You know what you saw, but someone repeatedly says — you saw wrong. Gradually you distrust yourself. Leave your own mind. This is the invisible cage."</div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">Stage ১</div><div class="tl-title">🚫 Disproof</div><div class="tl-body">"সেটা কখনো ঘটেনি", "তুমি বড় বেশি sensitive", "আমি তো বলিনি" — victim-এর নিশ্চয়তা অস্বীকারের মুখোমুখি।</div></div>
<div class="tl-step"><div class="tl-when">Stage ২</div><div class="tl-title">❓ Confusion</div><div class="tl-body">"আমি কি সত্যিই ভুল শুনেছি/দেখেছি?" — second-guessing শুরু, তবু আংশিক নিজের উপর বিশ্বাস।</div></div>
<div class="tl-step"><div class="tl-when">Stage ৩</div><div class="tl-title">🔗 Dependence</div><div class="tl-body">"হয়তো তারাই ঠিক, আমারই মনে নেই" — gaslighter-এর version মানতে শুরু, self-trust ক্ষয়।</div></div>
<div class="tl-step"><div class="tl-when">Stage ৪</div><div class="tl-title">🌑 Depression</div><div class="tl-body">"নিজের মনকেই বিশ্বাস করতে পারি না" — উদ্বেগ, বিষণ্নতা, "reality"-র জন্য সম্পূর্ণ gaslighter-নির্ভর। (Robin Stern, 2007)</div></div>
</div>

<div class="callout info"><span class="co-icon">🧠</span><div><strong>কেন কাজ করে:</strong> মস্তিষ্ক contradiction ঘৃণা করে — বিশ্বস্ত কেউ তোমার বাস্তবতা অস্বীকার করলে মস্তিষ্ক সম্পর্ক রক্ষার্থে নিজেকেই সন্দেহ করতে চায়। তার উপর, মানব-স্মৃতি সত্যিই অনির্ভরযোগ্য (Loftus, 1970s+) — "হয়তো ভুল মনে করেছি" plausible শোনায়। Isolation এই দুর্বলতা বাড়ায় — কোনো external reality-check থাকে না।</div></div>

<table class="kv-table"><tr><th>প্রেক্ষাপট</th><th>gaslighting-এর রূপ</th></tr>
<tr><td class="hl">সম্পর্ক (partner)</td><td>"তুমি পাগল, সেটা ঘটেনি, তুমি বড্ড sensitive"</td></tr>
<tr><td class="hl">কর্মক্ষেত্র (boss)</td><td>"আমি promotion-এর কথা দিইনি, তুমি ভুল বুঝেছ"</td></tr>
<tr><td class="hl">পরিবার (parent)</td><td>"তোমার শৈশব দারুণ ছিল, তুমি বানিয়ে বলছ"</td></tr>
<tr><td class="hl">সমাজ (systemic)</td><td>"তোমার racism/sexism-এর অভিজ্ঞতা সত্যি নয়, তুমি victim সাজছ"</td></tr></table>

<div class="callout warn"><span class="co-icon">🚩</span><div><strong>লক্ষণ — তোমাকে gaslight করা হচ্ছে:</strong> সবসময় নিজেকে second-guess করো · ভাবো তুমি "বড় বেশি sensitive" · সারাক্ষণ ক্ষমা চাও · বুঝতে পারো না কেন অসুখী · gaslighter-এর জন্য অজুহাত বানাও · সবসময় confused · আগে আত্মবিশ্বাসী ছিলে, এখন সব সন্দেহ করো। (এটা larger "coercive control"-এর অংশ — Evan Stark 2007; UK-তে ২০১৫ থেকে অপরাধ।)</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>বেরোনোর পথ:</strong> ① <strong>লিখে রাখো</strong> — কী ঘটল, কখন, কী বলা হলো; এই record gaslighting-প্রতিরোধী। ② <strong>অন্যদের সাথে reconnect</strong> — "এটা কি স্বাভাবিক শোনায়?" ③ <strong>শরীরকে বিশ্বাস করো</strong> — tension, dread মিথ্যা বলে না। ④ <strong>Professional help</strong> — therapist objective reality-check; CBT self-trust পুনর্গঠন করে। ⑤ <strong>সব document করো।</strong> মনে রেখো — confusion-ই gaslighting-এর <em>উপসর্গ</em>, তোমার অক্ষমতার প্রমাণ নয়।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arr-d4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker></defs>
<rect width="580" height="340" fill="#0f172a"/>
<text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="700">Gaslighting — The Anxiety Spiral (Stern, 2007)</text>
<g><circle cx="120" cy="100" r="42" fill="#7f1d1d" stroke="#fca5a5" stroke-width="2"/>
<text x="120" y="95" text-anchor="middle" fill="#fee2e2" font-size="10" font-weight="700">STAGE 1</text>
<text x="120" y="110" text-anchor="middle" fill="#fecaca" font-size="9">Disproof</text>
<text x="120" y="165" text-anchor="middle" fill="#94a3b8" font-size="8">"সেটা ঘটেনি"</text></g>
<g><circle cx="290" cy="100" r="42" fill="#581c87" stroke="#d8b4fe" stroke-width="2"/>
<text x="290" y="95" text-anchor="middle" fill="#e9d5ff" font-size="10" font-weight="700">STAGE 2</text>
<text x="290" y="110" text-anchor="middle" fill="#f3e8ff" font-size="9">Confusion</text>
<text x="290" y="165" text-anchor="middle" fill="#94a3b8" font-size="8">"হয়তো ভুল?"</text></g>
<g><circle cx="460" cy="100" r="42" fill="#7c2d12" stroke="#fdba74" stroke-width="2"/>
<text x="460" y="95" text-anchor="middle" fill="#fed7aa" font-size="10" font-weight="700">STAGE 3</text>
<text x="460" y="110" text-anchor="middle" fill="#ffedd5" font-size="9">Dependence</text>
<text x="460" y="165" text-anchor="middle" fill="#94a3b8" font-size="8">"তারাই ঠিক"</text></g>
<line x1="162" y1="100" x2="248" y2="100" stroke="#64748b" stroke-width="2" marker-end="url(#arr-d4)"/>
<line x1="332" y1="100" x2="418" y2="100" stroke="#64748b" stroke-width="2" marker-end="url(#arr-d4)"/>
<line x1="460" y1="142" x2="120" y2="142" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arr-d4)"/>
<text x="290" y="155" text-anchor="middle" fill="#64748b" font-size="8" font-style="italic">(loop)</text>
<text x="290" y="200" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="700">Anxiety Symptoms — শরীর মিথ্যা বলে না</text>
<g><rect x="40" y="215" width="250" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
<text x="165" y="235" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700">⚠️ FEAR / ANXIETY (amygdala)</text>
<text x="50" y="255" fill="#cbd5e1" font-size="10">• hypervigilance — সব কিছু স্ক্যান</text>
<text x="50" y="272" fill="#cbd5e1" font-size="10">• chronic dread — কিছু খারাপ হবে</text>
<text x="50" y="289" fill="#cbd5e1" font-size="10">• ঘুম নষ্ট, ক্লান্তি, tension</text>
<text x="50" y="310" fill="#fbbf24" font-size="10" font-style="italic">→ body = anchor, mind = corrupted</text></g>
<g><rect x="300" y="215" width="250" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
<text x="425" y="235" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">🧭 RECOVERY ANCHORS</text>
<text x="310" y="255" fill="#cbd5e1" font-size="10">① লিখে রাখো (date, quote, fact)</text>
<text x="310" y="272" fill="#cbd5e1" font-size="10">② external reality-check (friend)</text>
<text x="310" y="289" fill="#cbd5e1" font-size="10">③ body signal trust (gut, sleep)</text>
<text x="310" y="310" fill="#86efac" font-size="10" font-style="italic">④ therapist — CBT rebuilds self-trust</text></g>
</svg>
</div>
<div class="svg-caption">চিত্র: গ্যাসলাইটিং চক্র ও উদ্বেগের লক্ষণ। Gaslighting spiral + anxiety body cues.</div>

<div class="code-block">Gaslighting Recovery — Reality Anchor Journal (Stern 2007)
──────────────────────────────────────────────────────────────────────
Template (fill nightly, 3 minutes):

  DATE: ____  EVENT: _____________________________
  WHAT I SAW/HEARD: ________________________________
  WHAT THEY SAID LATER: ____________________________
  DISCREPANCY? (y/n): ___  BODY CUE: _______________
  OUTSIDE CHECK (did I ask someone?): ______________

Red-flag phrases (Stern's gaslight inventory):
  "তুমি বড্ড sensitive হয়ে গেছ"      → minimization
  "সেটা কখনোই ঘটেনি"            → flat denial
  "তুমি ভুল মনে করছ"             → memory doubt
  "সবাই তোমাকে এড়িয়ে চলে"      → social isolation
  "তুমি পাগল হয়ে যাচ্ছ"          → reality theft

Weekly review (Sunday):
  count discrepancies → pattern or one-off?
  count body-cue days → chronic anxiety = GT signal
  one action this week: reconnect / document / boundary
──────────────────────────────────────────────────────────────────────
# Stark (2007) coercive control: GT is part of a pattern,
# not isolated. UK 2015: criminal offense. CBT rebuilds
# self-trust in 12-16 weeks (Beck Institute).</div>

<div class="dialogue">তাদলিস — deception, fraud, misleading। ইসলামী ফিকহে তাদলিস একটা গুরুতর অপরাধ — কাউকে মিথ্যা বিশ্বাস গ্রহণ করানো। কুরআনে আল্লাহ বলেন — "শয়তান তাদের কাজ সুশোভন করে তোলে।" (১৬:৬৩)। Gaslighting হলো তাদলিসের সবচেয়ে গভীর রূপ — কাউকে তার নিজের বাস্তবতা থেকে বিচ্ছিন্ন করা। কিন্তু কুরআন আরও বলে — "সত্য এসেছে, মিথ্যা বিলুপ্ত।" (১৭:৮১)। সচেতনতা = সত্যের আলো। যে আলো জালে, সে তাদলিস দেখে। যে অন্ধকারে, সে বিভ্রান্ত হয়।</div>
<div class="dialogue en">"Tadlis — deception, fraud, misleading. In Islamic jurisprudence, tadlis is a serious offense — making someone accept a false belief. Allah says — 'Satan makes their deeds appear fair.' (16:63). Gaslighting is the deepest form of tadlis — disconnecting someone from their own reality. But the Quran also says — 'Truth has come, falsehood has vanished.' (17:81). Awareness = the light of truth. One who has light, sees tadlis. One in darkness, is deceived."</div>`,
  senior:{
    title:"Gaslighting Recovery — Practical Steps",
    body:`<p><strong>Right now:</strong> Write down what you're experiencing. Dates, quotes, what happened. This journal is your anchor to reality — gaslighting can't steal written records.</p><p><strong>Reconnect:</strong> Talk to someone OUTSIDE the gaslighting relationship. Say: "Does this sound normal?" External reality checks are the antidote to isolation.</p><p><strong>Trust your body:</strong> Your gut, your sleep, your anxiety — these don't lie. If you feel awful consistently around someone, your body knows what your mind can't accept yet.</p><p><strong>Professional help:</strong> A therapist is a trained reality-checker. They can distinguish gaslighting from normal conflict. CBT (Cognitive Behavioral Therapy) specifically rebuilds self-trust.</p><p><strong>Remember:</strong> You're not crazy. Confusion is the SYMPTOM of gaslighting, not evidence of your inadequacy. The confusion lifts when you re-connect with reality.</p>`
  }
});

// ══ DOOR 5: LOCUS OF CONTROL ══
doors.push({
  num:5, icon:"💎", color:"#dc2626", name:"নিয়ন্ত্রণের কেন্দ্র",
  subtitle:"The Diamond Mind", tech:"Locus of Control (Rotter, 1966) + Scarcity (Mullainathan/Shafir)",
  spirit:"তাওয়াক্কুল + আকল — ভরসা ও যুক্তি",
  secret:"১৯৬৬ সালে Julian Rotter দেখালেন — মানুষ দুই ধরনের: যারা বিশ্বাস করে তারা নিয়ন্ত্রণ করে (internal), আর যারা বিশ্বাস করে ভাগ্য নিয়ন্ত্রণ করে (external)। ৫০ বছরের গবেষণা: internal locus = সাফল্য, স্বাস্থ্য, সুখ। Mullainathan দেখালেন — দারিদ্র্য মস্তিষ্কের bandwidth কমায়। কিন্তু locus of control পরিবর্তনযোগ্য।",
  recall:{
    q:"Internal ও external locus of control-এর পার্থক্য কী?",
    qen:"Difference between internal and external locus?",
    a:"Internal = আমি নিয়ন্ত্রণ করি। External = ভাগ্য নিয়ন্ত্রণ করে। Rotter (১৯৬৬)। ৫০ বছরের গবেষণা: internal = সাফল্য, সুখ, স্বাস্থ্য। Mullainathan: দারিদ্র্য bandwidth কমায়। কিন্তু পরিবর্তনযোগ্য।",
    aen:"Internal = I control. External = fate controls. Rotter (1966). 50 years of research: internal = success, happiness, health. Mullainathan: poverty reduces bandwidth. But changeable."
  },
  story:`<p class="scene-setting">১৯৬৬ সাল। ওহিও স্টেট ইউনিভার্সিটি। মনোবিজ্ঞানী জুলিয়ান রটার (Julian Rotter) একটা সাধারণ প্রশ্ন করলেন — সাফল্য কে নির্ধারণ করে? তুমি নাকি ভাগ্য? একই পরীক্ষায় কেউ বলল — আমি পড়াশোনা করিনি, তাই ফেল করেছি (internal)। কেউ বলল — প্রশ্ন কঠিন ছিল, ভাগ্য খারাপ (external)। Rotter দেখলেন — এই বিশ্বাসই জীবনের গতি নির্ধারণ করে।</p>
<p class="scene-setting en">1966. Ohio State University. Psychologist Julian Rotter asked a simple question — who determines success? You or fate? In the same exam, someone said — I didn't study, so I failed (internal). Someone said — questions were hard, bad luck (external). Rotter saw — this belief shapes life's trajectory.</p>

<div class="dialogue">Gaslighting বলেছিলেন — কীভাবে বাস্তবতা চুরি হয়। কিন্তু আমি বলি — কেউ বাস্তবতা না চুরি করলেও কেউ নিয়ন্ত্রিত হয় কেন? কারণ তারা বিশ্বাস করে — আমি নিয়ন্ত্রণ করি না। ভাগ্য নিয়ন্ত্রণ করে। Rotter দেখালেন — এই বিশ্বাসই সবকিছু। Internal locus = আমি নিয়ন্ত্রণ করি। External locus = ভাগ্য নিয়ন্ত্রণ করে। ৫০ বছরের গবেষণা — internal মানুষের জীবন ভালো হয়, সব ক্ষেত্রে।</div>
<div class="dialogue en">"Gaslighting said — how reality is stolen. But I say — even without gaslighting, why are some controlled? Because they believe — I don't control. Fate controls. Rotter showed — this belief is everything. Internal locus = I control. External locus = fate controls. 50 years of research — internal people do better in life, in everything."</div>

<table class="kv-table"><tr><th>Internal locus</th><th>External locus</th></tr>
<tr><td>"পরিশ্রম করেছি বলে সফল হয়েছি"</td><td>"ভাগ্য ভালো ছিল বলে সফল"</td></tr>
<tr><td>"প্রস্তুতি নিইনি বলে fail করেছি"</td><td>"পরীক্ষা অন্যায্য ছিল"</td></tr>
<tr><td>"আমার সিদ্ধান্তই আমার জীবন গড়ে"</td><td>"ভাগ্য/অন্যরা আমার জীবন নিয়ন্ত্রণ করে"</td></tr></table>

<div class="callout info"><span class="co-icon">📊</span><div><strong>৫০ বছরের গবেষণা (Rotter, 1966+):</strong> Internal locus-এর মানুষ — বেশি academic achievement, ভালো শারীরিক স্বাস্থ্য, কম বিষণ্নতা, বেশি job satisfaction, business শুরুর সম্ভাবনা বেশি, দীর্ঘ আয়ু। External locus — বেশি learned helplessness, উদ্বেগ, passive coping, খারাপ পরিস্থিতিতে আটকে থাকা।</div></div>

<div class="callout warn"><span class="co-icon">🧠</span><div><strong>Scarcity mindset (Mullainathan & Shafir, 2013):</strong> ভারতীয় আখ-চাষিদের harvest-এর আগে (গরিব, stressed) ও পরে (টাকা পেয়ে) পরীক্ষা করা হলো — একই মানুষ, harvest-এর আগে IQ ~১৩ পয়েন্ট কমে গেল (এক রাত না-ঘুমানোর সমান)। <strong>দারিদ্র্য নিজেই cognitive capacity কমায়</strong> — চরিত্রদোষ নয়, stress-এ prefrontal cortex দুর্বল হওয়ার neurological ফল। scarcity "tunnel vision" আনে → short-term সিদ্ধান্ত → খারাপ long-term ফল → loop।</div></div>

<table class="kv-table"><tr><th>Victim (External)</th><th>Creator (Internal)</th></tr>
<tr><td>"তারা আমার সাথে এটা করল"</td><td>"আমি বেছে নিলাম..."</td></tr>
<tr><td>"কিছুই করার নেই"</td><td>"আমি কী করতে পারি?"</td></tr>
<tr><td>যা নিয়ন্ত্রণে নেই তাতে focus</td><td>যা নিয়ন্ত্রণ করা যায় তাতে focus</td></tr>
<tr><td>অভিযোগ করে, উদ্ধারের অপেক্ষা</td><td>কাজ করে, পরিবর্তন তৈরি করে</td></tr></table>

<div class="callout tip"><span class="co-icon">🔄</span><div><strong>Locus বদলানোর উপায় (evidence-based):</strong> ① <strong>Small wins</strong> (Bandura, 1977) — খুব ছোট থেকে শুরু (বিছানা গোছানো), প্রতিটা জয় self-efficacy গড়ে। ② <strong>Circle of control</strong> (Covey/Stoics) — যা নিয়ন্ত্রণ করা যায় তাতেই শক্তি দাও। ③ <strong>Setback reframe</strong> — "সবসময় আমার সাথেই হয়" নয়, "কী শিখলাম, ভিন্নভাবে কী করব?" ④ প্রতিদিন <strong>একটা action</strong> — তুমি বেছে নিয়েছ এমন। ⑤ <strong>Complaint time সীমিত করো</strong> (৫ মিনিট), তারপর — "কোন action নেব?" এটা victim থেকে creator-এ রূপান্তর। (এটাই তাওয়াক্কুল + আকল — যা পারো তাতে চেষ্টা, বাকিটা ভরসা।)</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs><marker id="arr-d5" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker></defs>
<rect width="580" height="340" fill="#0f172a"/>
<text x="290" y="28" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="700">Motivation — Internal vs External Locus (Rotter)</text>
<g><circle cx="160" cy="120" r="80" fill="#052e16" stroke="#86efac" stroke-width="2"/>
<text x="160" y="95" text-anchor="middle" fill="#bbf7d0" font-size="14" font-weight="700">INTERNAL</text>
<text x="160" y="115" text-anchor="middle" fill="#dcfce7" font-size="10">"আমি পারি"</text>
<text x="160" y="135" text-anchor="middle" fill="#dcfce7" font-size="10">effort = result</text>
<text x="160" y="155" text-anchor="middle" fill="#86efac" font-size="9" font-style="italic">high achievement</text></g>
<g><circle cx="420" cy="120" r="80" fill="#7f1d1d" stroke="#fca5a5" stroke-width="2"/>
<text x="420" y="95" text-anchor="middle" fill="#fee2e2" font-size="14" font-weight="700">EXTERNAL</text>
<text x="420" y="115" text-anchor="middle" fill="#fecaca" font-size="10">"ভাগ্য ঠিক করে"</text>
<text x="420" y="135" text-anchor="middle" fill="#fecaca" font-size="10">helpless, passive</text>
<text x="420" y="155" text-anchor="middle" fill="#fca5a5" font-size="9" font-style="italic">anxiety, low agency</text></g>
<line x1="240" y1="120" x2="340" y2="120" stroke="#64748b" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arr-d5)"/>
<text x="290" y="110" text-anchor="middle" fill="#fbbf24" font-size="9">shift via small wins</text>
<text x="290" y="220" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="700">Scarcity Drain — Bandwidth Theft (Mullainathan &amp; Shafir)</text>
<g><rect x="40" y="235" width="240" height="85" rx="8" fill="#0c4a6e" stroke="#7dd3fc" stroke-width="1"/>
<text x="160" y="258" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="700">BEFORE SCARCITY</text>
<text x="55" y="278" fill="#e0f2fe" font-size="10">IQ 100, bandwidth পূর্ণ</text>
<text x="55" y="295" fill="#e0f2fe" font-size="10">long-term সিদ্ধান্ত সক্ষম</text>
<text x="55" y="312" fill="#7dd3fc" font-size="9" font-style="italic">sugarcane farmer (post-harvest)</text></g>
<g><rect x="300" y="235" width="240" height="85" rx="8" fill="#7c2d12" stroke="#fdba74" stroke-width="1"/>
<text x="420" y="258" text-anchor="middle" fill="#fed7aa" font-size="11" font-weight="700">DURING SCARCITY</text>
<text x="315" y="278" fill="#ffedd5" font-size="10">IQ ~87 (−১৩), tunnel vision</text>
<text x="315" y="295" fill="#ffedd5" font-size="10">short-term সিদ্ধান্ত, ঋণ loop</text>
<text x="315" y="312" fill="#fdba74" font-size="9" font-style="italic">একই মানুষ, pre-harvest (stressed)</text></g>
</svg>
</div>
<div class="svg-caption">চিত্র: অন্তর্নিহিত বনাম বাহ্যিক নিয়ন্ত্রণ ও দারিদ্র্যের সংজ্ঞানাত্মক প্রভাব। Locus + scarcity bandwidth.</div>

<div class="code-block">Motivation Audit — Circle of Control + Small-Wins Protocol
──────────────────────────────────────────────────────────────────────
Step 1: Draw two circles. List 10 daily concerns.

  INNER (you control)          OUTER (you don't)
  ────────────────────         ────────────────────────
  effort, attitude             others' opinions
  when you wake                weather, past
  what you read                market, boss mood
  how you respond              outcome of effort

  Rule: 90% energy → INNER. 10% → adapt to OUTER.

Step 2: Small-wins ladder (Bandura self-efficacy, 1977)
  Day 1-3:  make bed (2 min)           → "I did it"
  Day 4-7:  10-min walk daily          → body proves agency
  Day 8-14: one focused work block     → competence evidence
  Day 15+:  progressively harder       → self-efficacy compounds

Step 3: Reframe script (victim → creator)
  VICTIM:  "Why does this always happen to me?"
  CREATOR: "What can I do about this right now?"

Step 4: Scarcity slack (Mullainathan 2013)
  Create buffer: $50 emergency, 30-min margin, one backup plan.
  Slack restores ~13 IQ points of bandwidth.
──────────────────────────────────────────────────────────────────────
# Rotter (1966): internal locus → +achievement, +health, +longevity
# across 50 years of replication. Shift is TRAINABLE.</div>

<div class="dialogue">তাওয়াক্কুল + আকল — trust + reason। কুরআনে আল্লাহ বলেন — "তোমরা চেষ্টা করো, তারপর আল্লাহর উপর তাওয়াক্কুল করো।" (৩:১৫৯)। তাওয়াক্কুল অলসতা নয় — চেষ্টার পর ফলাফলে ভরসা। আকল হলো যুক্তি — কী নিয়ন্ত্রণ করা যায়, কী নয়। Internal locus of control = তাওয়াক্কুল + আকল। যা নিয়ন্ত্রণ করা যায়, তা নিয়ে চেষ্টা (আকল)। যা নিয়ন্ত্রণে নেই, তা আল্লাহর উপর ছাড়া (তাওয়াক্কুল)। এটাই সঠিক অবস্থান। External locus = শুধু ভাগ্যের অপেক্ষা — আকল ছাড়া তাওয়াক্কুল, যা অলসতা। Internal locus = আকল সহ তাওয়াক্কুল — যা সঠিক কর্ম।</div>
<div class="dialogue en">"Tawakkul + Aql — trust + reason. Allah says — 'Strive, then trust in Allah.' (3:159). Tawakkul is not laziness — it's trusting the outcome AFTER effort. Aql is reason — what can be controlled, what can't. Internal locus of control = tawakkul + aql. Control what you can (aql). Trust Allah with what you can't (tawakkul). This is the correct position. External locus = waiting for fate — tawakkul without aql, which is laziness. Internal locus = tawakkul with aql — which is right action."</div>`,
  senior:{
    title:"Shift Your Locus — This Week",
    body:`<p><strong>Self-assessment:</strong> For the next week, notice your self-talk. Internal: "I can change this." External: "This always happens to me." Count which is more common.</p><p><strong>Circle of Control:</strong> Draw two circles. Inner = what you control (effort, attitude, choices). Outer = what you don't (others, past, weather). Spend 90% energy on inner circle.</p><p><strong>Small wins:</strong> Set ONE tiny goal daily. Complete it. This builds self-efficacy — Bandura proved that experiencing success literally rewires the brain to believe "I can."</p><p><strong>Reframe:</strong> Instead of "Why does this always happen to me?" → "What can I do about this right now?" Not self-blame — accurate responsibility + action.</p><p><strong>Scarcity awareness:</strong> If you're stressed about money/time, your IQ literally drops. Recognize this is neurological, not personal failure. Create slack — buffer time, emergency savings — to restore cognitive bandwidth.</p>`
  }
});
