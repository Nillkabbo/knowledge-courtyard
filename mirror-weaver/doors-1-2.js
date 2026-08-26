// doors-1-2.js — আয়না-বোনার কারখানা (Vue.js complete guide)
var doors = globalThis.doors = globalThis.doors || [];

doors.push({
  num: 1,
  icon: "🪞",
  color: "#42b883",
  name: "আয়নার শপথ",
  subtitle: "The Mirror's Oath — Vue's Declarative Philosophy",
  tech: "Imperative vs declarative DOM, createApp, mounting, why Vue exists",
  spirit: "সাক্ষাৎ — mushāhada (witnessing: the reflection never acts, only reflects)",
  secret: "তুমি DOM-কে বলো না কী করতে — তুমি অবস্থা বদলাও, DOM নিজে বদলায়। Change the state, not the DOM.",
  recall: {
    q: "জাভাস্ক্রিপ্টে querySelector দিয়ে textContent বদলানো আর Vue-তে ref বদলানোর মূল পার্থক্য কী?",
    qen: "Core difference between manual DOM updates and Vue reactivity?",
    a: "ম্যানুয়াল-পথে তুমি 'কীভাবে' লেখো (প্রতিটি আপডেট-ধাপ হাতে); Vue-তে তুমি 'কী' ঘোষণা করো (state → template ম্যাপিং), 'কীভাবে' ফ্রেমওয়ার্ক সামলায়।",
    aen: "Manual = you write every 'how' step; Vue = you declare the 'what' (state-to-template mapping) and the framework does the rest."
  },
  story: `<p class="scene-setting">তাঁত-শহরের প্রবেশদ্বারে দাঁড়িয়ে আছে বোনাকার <strong>জোহরা আপা</strong> — তাঁর মাথায় সবুজ ঘুঘি, কাঁধে আয়নার-কাচের মালা। তিনি এই কারখানার
  প্রবীণতম কারিগর। তোমাকে দেখে তিনি প্রথমেই একটা কাচ হাতে তুলে দেন এবং বলেন — <strong>"এই শহরের প্রথম শপথ শোনো। তোমার হাতে যা আছে সেটা আয়না।
  আয়নার কাজ দেখা নয়, দেখানো — বস্তু যেমন, প্রতিবিম্ব তেমন। আয়না কখনো নিজে থেকে কিছু আঁকে না।"</strong> তারপর তিনি তোমাকে নিয়ে যান পুরনো কারখানার
  ধ্বংসাবশেষে — যেখানে কারিগরেরা ম্যানুয়াল-পথে কাজ করত: প্রতিটি বদলে <code>querySelector</code> দিয়ে খুঁজে, <code>textContent</code> বদলে, ক্লাস জোড়া-বিয়োগ করে।
  ছোট কাপড়ে চলত; বড় কাপড়ে ধ্বংস — এক জায়গার সুতো টানলে দশ জায়গায় আঁকো-আঁকি ভুল, আর কেউ জানেই না কোন প্রতিবিম্ব সত্য। জোহরা আপা বলেন —
  <strong>"ওরা আয়নাকে বলে দিত কী আঁকতে হবে। আমরা উল্টোটা করি — বস্তু বদলাই, আয়না অনুসরণ করে। এটাই declarative-এর শপথ।"</strong></p>
  <p class="scene-setting en">At the loom-city gate stands weaver <strong>Zohra Apa</strong> — a green hair-bun, a
  necklace of mirror-glass. The oldest artisan of this workshop. She hands you a pane of glass and speaks —
  <strong>"Hear the first oath of this city. What you hold is a mirror. A mirror's job is not to see but to show —
  the reflection matches the thing. A mirror never draws on its own."</strong> Then she walks you to the ruins of the
  old workshop — where artisans worked imperatively: on every change, <code>querySelector</code> to find,
  <code>textContent</code> to set, classes to add and remove. It worked for small cloth; for large cloth, ruin — pull one
  thread and ten drawing-errors appear, and no one knows which reflection is true. Zohra says — <strong>"They
  commanded the mirror what to draw. We do the opposite — we change the thing, and the mirror follows. That is the
  declarative oath."</strong></p>
  <div class="dialogue">তুমি মুখ তুললে: "আপা, এক-টুকরো কাপড়ে আমি যা চাই তাই লিখে রাখলাম — তাহলে কি ডোম আর ছোঁব না?" জোহরা আপা মাথা নাড়লেন: "রাখবে, কিন্তু নিয়ম জেনে। এই খাতা রাষ্ট্র (state) — তাঁতের একমাত্র সত্য-উৎস। কাপড় (template) কেবল খাতার প্রতিচ্ছবি: খাতা বদলালে কাপড় নিজে-নিজে, কাপড় ছিঁড়ে খাতায় লিখতে যেও না। আর মনে রেখো — দুই জায়গায় এক-কথা রাখলে কোথাও সত্য থাকে না; LedgerPilot-এর ১১৭টি পর্দা চলে কারণ সত্য এক জায়গায়।"</div>
  <div class="dialogue en">You look up: "Sister, I wrote everything I want on one cloth — so I never touch the DOM?" Johra nodded: "You keep it — but know the rule. This ledger is the state, the loom's single source of truth. The cloth (template) is only its reflection: change the ledger and the cloth re-weaves itself; never tear the cloth to write on the ledger. And remember — one truth said in two places is truth in neither; LedgerPilot's 117 screens run because truth lives in one place."</div>
  <div class="dialogue">তুমি: "আপা, তাহলে আমি আসলে কী লিখব?"
  <br>জোহরা আপা: "দুইটা জিনিস — <strong>অবস্থা</strong> (state: ডেটা এখন কেমন আছে) আর <strong>টেমপ্লেট</strong> (template: অবস্থা
  দেখতে কেমন হবে)। এই দুইয়ের মাঝের সেতু Vue পাহারা দেয়। অবস্থা বদলাও — প্রতিবিম্ব নিজে বদলাবে। আর মনে রেখো — বড় অ্যাপে
  আসল যুদ্ধ 'কীভাবে বানাব' নয়, 'কোথায় সত্য থাকবে' — সেটাই এই বইয়ের প্রতিটি দরজার গভীর প্রশ্ন।"</div>
  <div class="code-block">প্রথম তাঁত — সবচেয়ে ছোট Vue অ্যাপ (অফিশিয়াল গাইড-ধাঁচে)

① index.html — একটাই মাউন্ট-পয়েন্ট:
  &lt;div id="app"&gt;&lt;/div&gt;
  &lt;script type="module" src="/src/main.ts"&gt;&lt;/script&gt;

② src/main.ts — তাঁত চালু:
  import { createApp } from 'vue'
  import App from './App.vue'
  createApp(App).mount('#app')
  · createApp(উপাদান) → অ্যাপ্লিকেশন-ইনস্ট্যান্স
  · mount('#app') → আয়না দেয়ালে ঝোলানো; এর ভেতরের
    সব-কিছু Vue-র দখলে

③ src/App.vue — প্রথম আয়না (Single-File Component):
  &lt;script setup lang="ts"&gt;
  import { ref } from 'vue'
  const count = ref(0)        // অবস্থা: গুনি
  &lt;/script&gt;

  &lt;template&gt;
    &lt;button @click="count++"&gt;
      চাপা হয়েছে {{ count }} বার
    &lt;/button&gt;
  &lt;/template&gt;

ঘটনার ক্রম (imperative-বনাম-declarative মেলা):
  ম্যানুয়াল-পথ (পুরনো কারখানা):
    btn.addEventListener('click', () => {
      count++
      label.textContent = \`চাপা \${count} বার\`  // প্রতিবিম্ব হাতে আঁকা
    })
  Vue-পথ (এই কারখানা):
    @click="count++"           // বস্তু বদলাল
    {{ count }}                // আয়না নিজে সজ্জিত

কেন এটাই স্কেল করে (LedgerPilot-প্রমাণ):
  · প্রোডাকশনে ১১৭টি .vue ভিউ + শতশো কম্পোনেন্ট —
    কোথাও একটি ডোম-ম্যানিপুলেশন লাইন নেই; সব অবস্থা →
    টেমপ্লেট ঘোষণা
  · Vue 3.5 + TypeScript 5.8 + Pinia 3 + vue-router 4 —
    সর্বশেষ স্থিতিশীল লাইন (এই বইয়ের সব নমুনা এই লাইনে)

SFC-এর তিন ঘর (এক .vue ফাইলে):
  &lt;script setup&gt; — যুক্তি (অবস্থা, ফাংশন)
  &lt;template&gt;     — প্রতিবিম্ব (HTML-ঘোষণা)
  &lt;style scoped&gt; — পোশাক (শুধু এই উপাদানে আঁটা CSS)

শপথের সারণি:
  করো                             | করো না
  --------------------------------|---------------------------
  state বদলাও, DOM পর্যবেক্ষণ নাও  | querySelector/textContent
  টেমপ্লেটে ঘোষণা করো              | ম্যানুয়াল আপডেট-ধাপ লিখো
  এক SFC = এক দায়িত্ব             | দশ-মেজাজি দৈত্য-উপাদান</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ হাতে-নিয়ন্ত্রণ</div>querySelector দিয়ে ডোম খুঁজে টেক্সট বদলাও — প্রতিটি পরিবর্তনে হাত-সিঙ্ক, ভুল বাড়ে প্রতি-ধাপে।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ ঘোষণা</div>state-বদলাও, পর্দা নিজে নিজে সাজায় — এক-সত্য-উৎস, ডোম কেবল প্রতিফলন।</div></div><ul class="checklist"><li>Vue CDN/স্কাফোল্ড দিয়ে তিন-লাইনের কাউন্টার বানাও — ref + interpolation + @click</li><li>একই কাউন্টার খাঁটি JS-এ (createElement) বানিয়ে দুই সংস্করণের লাইন-গুনো</li><li>লেজারপাইলট-স্ক্রিনে একটা ডোম-ম্যানিপুলেশন খুঁজে নোট করো — কেন ঘোষণা জিতলো</li></ul>
<div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 5 (Seed of Learning — ৯ দরজা) ঘোষণাবদ্ধ-চিন্তার মানসিক ভিত্তি দেয়, আর Book 26 (Knowledge Craftsman) "এক সত্য-উৎস" নোটের অভ্যাস শেখায় — Vue-দর্শনের দুই সহোদর।</div></div>
<div class="verse">সাক্ষাৎ — প্রত্যক্ষ দর্শনের শৃঙ্খলা: আয়না সদা অনুগামী, কখনো স্বেচ্ছাচারী নয়। "যে দিন কাজের ফল প্রকাশ হবে" (৮২:১৯-এর ভাব) — কর্মের ফল প্রতিবিম্বে ধরা পড়ে, প্রতিবিম্ব নিজে কর্ম করে না। জোহরা আপার কাচ সেই সাক্ষাৎের যন্ত্র: যা দেখায় তা-ই আছে, যা আছে তা-ই দেখায়। যে কারিগর আয়নায় হাত দেয়, সে শেষে দুই সত্যের মাঝে হারিয়ে যায় — কারণ তার প্রতিবিম্ব আর বিশ্বাসের যোগ্য থাকে না।</div>
  <div class="diagram">
    <div class="diag-title">The Mirror's Oath — Two Workshops Compared</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowO1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#7ee0b0"/></marker></defs>
      <rect x="15" y="15" width="250" height="130" rx="11" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.5"/>
      <text x="140" y="38" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">🏛️ পুরনো কারখানা (Imperative)</text>
      <text x="140" y="58" text-anchor="middle" fill="#94a3b8" font-size="7.5">ঘটনা → খোঁজো → হাতে আঁকো → আবার খোঁজো…</text>
      <text x="140" y="76" text-anchor="middle" fill="#94a3b8" font-size="7.5">querySelector · textContent · classList</text>
      <text x="140" y="98" text-anchor="middle" fill="#f87171" font-size="7">প্রতিটি পর্দায় নতুন আঁকো-আঁকি</text>
      <text x="140" y="118" text-anchor="middle" fill="#64748b" font-size="7">বড় কাপড়ে: দশ জায়গায় ভুল, সত্য অজানা</text>
      <rect x="295" y="15" width="250" height="130" rx="11" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.5"/>
      <text x="420" y="38" text-anchor="middle" fill="#7ee0b0" font-size="10" font-weight="700">🪞 আয়না-কারখানা (Declarative)</text>
      <text x="420" y="58" text-anchor="middle" fill="#94a3b8" font-size="7.5">অবস্থা বদলাও → আয়না অনুসরণ করে</text>
      <text x="420" y="76" text-anchor="middle" fill="#94a3b8" font-size="7.5">ref + {{ }} + :binding + @event</text>
      <text x="420" y="98" text-anchor="middle" fill="#7ee0b0" font-size="7">এক জায়গায় সত্য, সর্বত্র সংযোগ</text>
      <text x="420" y="118" text-anchor="middle" fill="#64748b" font-size="7">LedgerPilot: ১১৭ ভিউ, শূন্য DOM-ম্যানিপুলেশন</text>
      <rect x="60" y="175" width="440" height="46" rx="10" fill="rgba(66,184,131,0.07)" stroke="#42b883" stroke-width="1.3"/>
      <text x="280" y="194" text-anchor="middle" fill="#7ee0b0" font-size="8.5" font-weight="600">ধাপ: createApp(App) → mount('#app') → state ⇄ template</text>
      <text x="280" y="210" text-anchor="middle" fill="#94a3b8" font-size="7.5">SFC-এর তিন ঘর: script-setup (যুক্তি) · template (প্রতিবিম্ব) · style-scoped (পোশাক)</text>
      <line x1="265" y1="80" x2="293" y2="80" stroke="#7ee0b0" stroke-width="1.6" marker-end="url(#arrowO1)"/>
      <text x="280" y="255" text-anchor="middle" fill="#64748b" font-size="8.5">শপথ: আয়না নিজে কিছু আঁকে না — বস্তু বদলাও, প্রতিবিম্ব বদলাবে</text>
      <text x="280" y="273" text-anchor="middle" fill="#64748b" font-size="8">এই এক বাক্যই আগামী ছাবিশটি দরজার ভিত্তি</text>
    </svg>
    <div class="diag-cap">দুই কারখানার পার্থক্য এক লাইনে: পুরনোটা আয়নাকে আঁতে বলে, নতুনটা বস্তু বদলায় — বাকিটা তাঁত দেখে।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নতুনদের প্রথম ভুল:</strong> Vue শিখতে গিয়ে টেমপ্লেটে দস্তুর লিখে আবার পাশে <code>document.querySelector</code> চালিয়ে ফেলা — দুই জগতের সত্য একসাথে। ফল: Vue-র পরের রি-রেন্ডারে তোমার হাতের আঁকা মুছে যায় (দরজা ৩-এর আত্মীয় গল্প)। নিয়ম: Vue-র দেয়ালের ভেতরে DOM-কে সরাসরি ছোঁয়া নিষেধ — অবস্থা বদলাও।</div></div>
  <div class="secret-box">🪞 আয়নার শপথ: DOM-কে আঁতে বলো না — অবস্থা বদলাও, প্রতিবিম্ব নিজে সজ্জিত হবে। / Never command the DOM; change the state and let the mirror follow.</div>`,
  senior: {
    title: "Vue Philosophy Card",
    body: `<p><strong>মূল</strong>: declarative রেন্ডারিং — <code>createApp(App).mount('#app')</code>; SFC তিন-ঘর (<code>&lt;script setup&gt;</code>/<code>&lt;template&gt;</code>/<code>&lt;style scoped&gt;</code>)। <strong>নিয়ম</strong>: state এক সত্য-উৎসে, template ঘোষণামূলক, DOM-ম্যানিপুলেশন নিষিদ্ধ। <strong>স্কেল-প্রমাণ</strong>: LedgerPilot = Vue 3.5.30 + TS 5.8.3 + Pinia 3.0.4 + vue-router 4.6.4, ১১৭ ভিউ, শূন্য ম্যানুয়াল-DOM। <strong>প্রথম অ্যাপ</strong>: ref + interpolation + @click — তিন লাইনে তাঁত চালু। <strong>ফাঁদ</strong>: jQuery-মানসিকতা ফিরে আসা — কম্পোনেন্টের ভেতরে ডোম হাতড়ে <code>classList</code> বদলানো; সেটা ঘোষণার বিরুদ্ধে বিদ্রোহ, প্রথম সপ্তাহেই অভ্যাস ভাঙো।</p>`
  }
});

doors.push({
  num: 2,
  icon: "🧵",
  color: "#42b883",
  name: "সুতোর বর্ণমালা",
  subtitle: "The Thread Alphabet — Template Syntax Complete",
  tech: "Interpolation, directives (v-if/v-for/v-show/v-once/v-memo/v-html/v-text/v-cloak), all bindings (:class/:style/:attr), all event modifiers",
  spirit: "বাইয়ান — bayān (clear expression: the thread says exactly what it means)",
  secret: "মোস্তাচিল {{ }} বলে, কোলন (:) বাঁধে, @ শোনে, # খোপ খোলে — চার চিহ্নে পুরো বর্ণমালা।",
  recall: {
    q: "v-if আর v-show — কোনটা কখন?",
    qen: "v-if vs v-show — when to use which?",
    a: "v-if উপাদান সত্যিই ভাঙে/গড়ে (দুর্লভ-বদল, ভারী শাখা); v-show শুধু display লুকায় (ঘন-বদল, সস্তা-টগল)। প্রায়-না-বদলালে v-once/v-memo আরও এক ঘর ওপরে।",
    aen: "v-if truly mounts/unmounts (rare switches, heavy branches); v-show only toggles display (frequent flips). For near-static content, v-once/v-memo go one step further."
  },
  story: `<p class="scene-setting">জোহরা আপার কারখানার দ্বিতীয় ঘর — <strong>সুতোর বর্ণমালা-ঘর</strong>। দেয়ালে চারটি বিশাল চিহ্ন ঝোলানো: <code>{{ }}</code>, <code>:</code>,
  <code>@</code>, <code>#</code>। তিনি বলেন — <strong>"প্রতিটি কাপড় এই চার চিহ্নের বাক্যে লেখা। মোস্তাচিল বলে কথা বলে (মান ঢালে), কোলন বাঁধে (গুণ জোড়ে),
  ওঁতার-চিহ্ন শোনে (ঘটনা ধরে), আর হ্যাশ খোপ খোলে (slot-এর দরজা)।"</strong> এক শাগিরদ তাড়াহুড়োয় <code>href="url"</code> লিখে ফেলে — স্ট্রিং
  "url" ঢুকে যায়, মান নয়। জোহরা চুপ করে কোলনটা এঁকে দেন: <code>:href="url"</code> — আর সুতো সশরীরে বস্তুর সাথে জড়িয়ে যায়। তারপর তিনি
  <code>v-html</code>-এর সামনে একটা তালা এঁকে বলেন — <strong>"এই এক সুতো কাঁচা মাংস ছোঁয় — বিশ্বাসী উৎস ছাড়া ধরিও না, নইলে সুই-আঘাতে
  কাপড় বিষ হয় (XSS)।"</strong> শেষে তিনি দেখান যে কিছু কিছু সুতো <strong>একবারই বোনা হয়</strong> (<code>v-once</code>) আর কিছু কাপড়
  নিজেই জানে কোথায় খুঁটি পড়েনি (<code>v-memo</code>) — অতিরিক্ত টান দিয়ে পুরো তাঁত কাঁপানো বৃথা।</p>
  <p class="scene-setting en">The workshop's second room — <strong>the thread alphabet</strong>. Four giant glyphs hang
  on the wall: <code>{{ }}</code>, <code>:</code>, <code>@</code>, <code>#</code>. She says — <strong>"every cloth is
  written in the sentences of these four signs. The mustache speaks (pours values), the colon binds (joins attributes),
  the at-sign listens (catches events), the hash opens pockets (slot doors)."</strong> A hurried apprentice writes
  <code>href="url"</code> — the literal string goes in, not the value. Zohra silently draws one colon:
  <code>:href="url"</code> — and the thread wraps around the living object. Before <code>v-html</code> she draws a lock —
  <strong>"this one thread touches raw meat — never hold it unless the source is trusted, or the needle poisons the cloth
  (XSS)."</strong> Finally she shows threads that are <strong>woven once</strong> (<code>v-once</code>) and cloth that itself
  knows which stakes haven't moved (<code>v-memo</code>) — shaking the whole loom for nothing is waste.</p>
  <div class="dialogue">('"মুদ্রার ছাপ দেখেছ?" জোহরা আপা সুতোর ডগায় ছোট্ট একটা গিরা দেখালেন। "এই একটা গিরাই দুই মুখ — এক মুখে ফাঁসা বাঁধে, আরেক মুখে টানে। টেমপ্লেটও তাই: স্থির অংশ কাপড়ে বোনা, বদলানো অংশ ফাঁসায়। নতুন কারিগররা সব কাপড়ে বুনে ফেলে — তারপর এক রং বদলাতে গিয়ে পুরো কাপড় ছিঁড়ে ফেলে।"', 'তুমি ফাঁসাগুলোর সামনে আঙুল ছড়িয়ে দাও — কোথায় সুতো ঢুকবে, কোথায় ঢুকবে না, এবার চোখে পরছে।')</div><div class="dialogue en">"One knot, two faces — one binds the loop, the other pulls. Novices weave everything into cloth, then tear the whole cloth to change one color."</div>
<div class="dialogue">জোহরা আপা ফাঁসায় আঙুল রেখে জিজ্ঞেস করলেন: "বলো তো, v-if আর v-show — দুই-ই তো লুকায়, পার্থক্য কোথায়?" তুমি ভাবতে ভাবতে বললে, "একটা ছিঁড়ে ফেলে, একটা ভাঁজ করে?" আপা হাসলেন: "ঠিক ধরেছ। v-if = কাপড় থেকে সুতো তুলে নেওয়া (DOM-ই নেই, ব্যয়-ভাঙা-জোড়া); v-show = কাপড় ভাঁজ (DOM আছে, শুধু ঢাকা)। ঘন-টগল হলে ভাঁজ সস্তা, বিরল-টগল হলে তোলা। আর v-for-এ :key মানে প্রতিটি সুতোর নাম-ট্যাগ — নাম ছাড়া তালিকা বদলালে তাঁত পুরনো সুতোকেই নতুন ভেবে বাঁধে, ভুল জায়গায়।"</div>
<div class="dialogue en">Johra touched a loop: "Tell me — v-if and v-show both hide; where is the difference?" You thought: "One tears out, one folds?" She smiled: "Caught it. v-if pulls the thread from the cloth (no DOM, costly re-join); v-show folds the cloth (DOM stays, covered). Fast toggles want folding; rare ones, pulling. And :key in v-for is each thread’s name-tag — unnamed, the loom binds old threads as new when the list shifts, in wrong places."</div>
  <div class="code-block">টেমপ্লেট-বর্ণমালা — সম্পূর্ণ ছক (Vue 3.5 অফিশিয়াল)

① মোস্তাচিল — মান ঢালা (Text interpolation):
  হ্যালো {{ name }} — কম্পোনেন্ট প্রসঙ্গে একবার-মূল্যায়ন
  {{ ok ? 'হ্যাঁ' : 'না' }}        এক-লাইন অভিব্যক্তি চলে
  {{ message.split('').reverse().join('') }}
  ⚠ স্টেটমেন্ট নয় (if/var/কমা-চেইন নিষেধ);
    জটিল হলে computed (দরজা ৩)

② কোলন (v-bind-এর সংক্ষেপ) — গুণ বাঁধা:
  :id="dynamicId"          :href="url"
  :disabled="isSaving"     (null/false → গুণ খসে যায়)
  :attr="null" বা undefined → গুণ বাদ
  :class  — তিন রূপ:
    ['active', errClass]            অ্যারে
    { active: isActive, 'text-danger': hasErr }  অবজেক্ট
    activeClass সরাসরি স্ট্রিং
    (সাথে class="static" মিশে যায়)
  :style —
    { color: activeColor, fontSize: size + 'px' }
    :style="[baseStyles, overridingStyles]"  একাধিক
  :value / :checked / … — ফর্ম-বাঁধন (দরজা ৭-৮)
  .prop মডিফায়ার: :some-prop.prop="v" —
    attr-এর বদলে DOM-প্রপার্টি বাঁধে

③ ওঁতার (v-on-এর সংক্ষেপ) — ঘটনা শোনা:
  @click="handler"          @click="count++" (ইনলাইন)
  @click="say('হ্যালো', $event)" — আর্গুমেন্ট+ইভেন্ট
  মডিফায়ার-মালা (ঘটনা প্রক্রিয়াকরণের বিধি):
    .stop    — propagation থামাও
    .prevent — ডিফল্ট বন্ধ (ফর্ম-সাবমিট)
    .capture — ধরার-মোডে শোনো
    .self    — target===currentTarget হলেই
    .once    — একবারই
    .passive — স্ক্রল-পারফরম্যান্স
  কী-মডিফায়ার: @keyup.enter · .esc · .tab
    · .delete · .up/.down · ctrl.enter
    · .exact (@click.ctrl.exact)
  মাউস: @mousedown.left/.right/.middle

④ হ্যাশ — খোপ (দরজা ৮-এ গভীরে):
  &lt;template #header&gt;…&lt;/template&gt;
  &lt;Comp #body="{ row }"&gt;…&lt;/Comp&gt; (scoped)

শর্ত-সুতো:
  v-if / v-else-if / v-else — সত্যিই গড়ে/ভাঙে;
    টেমপ্লেট-র‍্যাপারে গুচ্ছ-শাখা:
    &lt;template v-if="ok"&gt;…গণ…&lt;/template&gt;
  v-show — display:none টগল; প্রাথমিক রেন্ডার
    সস্তা নয়, বদল সস্তা
  ⚠ v-if + v-for একই উপাদানে নিষেধ (৩-এ কারণ)

তালিকা-সুতো:
  &lt;li v-for="(item, index) in items" :key="item.id"&gt;
  · :key বাধ্যতামূলক-শৃঙ্খলা (আসল id, index নয়)
  · অবজেক্টে: v-for="(value, name) in obj"
  · পরিসরে: v-for="n in 10"
  · &lt;template v-for&gt; — গণ-মূল ছাড়া বোনা

একবার-সুতো (পারফরম্যান্স-ঘর):
  v-once  — প্রথম রেন্ডারেই জমে যায়, আর বদলায় না
  v-memo="[a, b]" — নির্ভরতা বদল না হলে স্কিপ
  v-text="msg"  — {{ msg }}-এর গুণ-রূপ
  v-cloak      — Vue লোড-হওয়া পর্যন্ত কাঁচা
                 {{ }} লুকায় (CSS: [v-cloak]{display:none})

বিপজ্জনক-সুতো:
  v-html="trustedRichText"
  ⚠ শুধু বিশ্বাসী-উৎসে; ব্যবহারকারীর ইনপুট কখনো নয়
    (LedgerPilot: sanitizeErrorMessage() ঠিক এই কারণে —
     এরর-বার্তাও কাঁচা ঢাকে না)

Vue 3.5-নোট:
  · সব শর্টহ্যান্ড আগের মতোই; dynamic-arg:
    :[attrName]="val" · @[eventName]="h"
    (attrName কম্পিউটেড-স্ট্রিং হলে বাঁধে)</div>
  <div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল পথ</div>সবকিছু কাপড়ে বোনা — এক রং বদলাতে গিয়ে পুরো কাপড় ছেঁড়া; মান বদলে রেখা ঢোকানো।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক পথ</div>স্থির অংশ কাপড়ে, বদলানো অংশ ফাঁসায় ({{ }} / v-bind / v-on) — এক মান বদলালে শুধু সেই ফাঁসা পূর।</div>
</div>
  <ul class="checklist"><li>v-if বনাম v-show — দুই প্যারাগ্রাফে টগল-বাটন বানিয়ে DOM-পরিবর্তন ডেভটুলসে দেখো</li><li>তালিকায় :key ছাড়া ও সহ — ইনপুট-ভ্যালু সহ সারি-সাজানো পরীক্ষা করে পার্থক্য নোট করো</li><li>v-html-এর ঝুঁকি-নোট লেখো: কখন নিষেধ, কেন sanitize</li></ul>
<div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 2 (Bazaar of Algorithms — ১৮ দরজা) ডিরেক্টিভের নিচের লজিক শেখায় (শর্ত/লুপ = অ্যালগরিদমের কাঠামো), আর Book 52 (Code Craftsman — ২১ দরজা) পরিচ্ছন্ন-টেমপ্লেটের কারিগরি নিয়ম।</div></div>
<div class="verse">বাইয়ান — স্পষ্ট প্রকাশ: "রহমান সৃষ্টি করেছেন, শিখিয়েছেন বয়ন-কলম" নয় বরং প্রকাশের আয়াত-ধারা (৫৫:৩-৪-এর ভাব) — যা ভেতরে আছে তার বাইরে স্পষ্ট রূপ। জোহরা আপার চার চিহ্ন সেই বাইয়ানের হাতিয়ার: মান, বাঁধন, শ্রবণ, খোপ — প্রতিটি চিহ্ন ঠিক যা বোঝায় তা-ই বলে, বাড়তি গোপন অর্থ নেই। যে বর্ণমালায় এক চিহ্নের দুই মানে থাকে, সে কাপড়ে সবসময় একটা সুতো ভুল জায়গায় পড়ে।</div>
  <div class="diagram">
    <div class="diag-title">The Thread Alphabet — Four Glyphs, One Grammar</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowT2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#7ee0b0"/></marker></defs>
      <rect x="15" y="12" width="122" height="96" rx="10" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.5"/>
      <text x="76" y="36" text-anchor="middle" fill="#7ee0b0" font-size="11" font-weight="700">{{ }}</text>
      <text x="76" y="54" text-anchor="middle" fill="#94a3b8" font-size="7.5">মোস্তাচিল — বলে</text>
      <text x="76" y="68" text-anchor="middle" fill="#64748b" font-size="7">{{ name }} · অভিব্যক্তি</text>
      <text x="76" y="84" text-anchor="middle" fill="#64748b" font-size="7">টেক্সটে মান ঢালে</text>
      <rect x="152" y="12" width="122" height="96" rx="10" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.5"/>
      <text x="213" y="36" text-anchor="middle" fill="#7ee0b0" font-size="12" font-weight="700">:</text>
      <text x="213" y="54" text-anchor="middle" fill="#94a3b8" font-size="7.5">কোলন — বাঁধে</text>
      <text x="213" y="68" text-anchor="middle" fill="#64748b" font-size="7">:class · :style · :href</text>
      <text x="213" y="84" text-anchor="middle" fill="#64748b" font-size="7">গুণে মান জোড়ে</text>
      <rect x="289" y="12" width="122" height="96" rx="10" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.5"/>
      <text x="350" y="36" text-anchor="middle" fill="#7ee0b0" font-size="12" font-weight="700">@</text>
      <text x="350" y="54" text-anchor="middle" fill="#94a3b8" font-size="7.5">ওঁতার — শোনে</text>
      <text x="350" y="68" text-anchor="middle" fill="#64748b" font-size="7">@click.prevent</text>
      <text x="350" y="84" text-anchor="middle" fill="#64748b" font-size="7">ঘটনা ধরে + মডিফায়ার</text>
      <rect x="426" y="12" width="119" height="96" rx="10" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.5"/>
      <text x="485" y="36" text-anchor="middle" fill="#7ee0b0" font-size="12" font-weight="700">#</text>
      <text x="485" y="54" text-anchor="middle" fill="#94a3b8" font-size="7.5">হ্যাশ — খোপ খোলে</text>
      <text x="485" y="68" text-anchor="middle" fill="#64748b" font-size="7">#header · scoped-slot</text>
      <text x="485" y="84" text-anchor="middle" fill="#64748b" font-size="7">উত্তরাধিকার-দরজা</text>
      <rect x="15" y="128" width="265" height="66" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="147" y="149" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">শর্ত-সুতো</text>
      <text x="147" y="164" text-anchor="middle" fill="#94a3b8" font-size="7.5">v-if (গড়ে/ভাঙে · দুর্লভ-বদল) ↔ v-show (display-টগল · ঘন-বদল)</text>
      <text x="147" y="180" text-anchor="middle" fill="#64748b" font-size="7">v-else-if / v-else · template-র‍্যাপারে গণ-শাখা</text>
      <rect x="296" y="128" width="249" height="66" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="420" y="149" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">তালিকা-সুতো</text>
      <text x="420" y="164" text-anchor="middle" fill="#94a3b8" font-size="7.5">v-for="(item, i) in items" :key="item.id"</text>
      <text x="420" y="180" text-anchor="middle" fill="#64748b" font-size="7">:key = আসল id · অবজেক্ট/সংখ্যা-পরিসরও চলে</text>
      <rect x="15" y="212" width="530" height="62" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="232" text-anchor="middle" fill="#cbd5e1" font-size="8" font-weight="600">একবার-সুতো: v-once (জমে-যায়) · v-memo="[deps]" (নির্ভরতা-স্কিপ) · v-cloak (লোড-লুকানো)</text>
      <text x="280" y="248" text-anchor="middle" fill="#94a3b8" font-size="7.5">🔒 v-html — শুধু বিশ্বাসী-উৎস: ব্যবহারকারীর ইনপুট = সুই-বিষ (XSS) · LP-প্রমাণ: sanitizeErrorMessage</text>
      <text x="280" y="266" text-anchor="middle" fill="#64748b" font-size="7">ডায়নামিক-আর্গ: :[name] · @[evt] — নাম নিজেই স্ট্রিং-অবস্থা</text>
      <line x1="76" y1="108" x2="76" y2="126" stroke="#7ee0b0" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#arrowT2)"/>
      <line x1="213" y1="108" x2="213" y2="126" stroke="#7ee0b0" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#arrowT2)"/>
      <line x1="350" y1="108" x2="350" y2="126" stroke="#7ee0b0" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#arrowT2)"/>
      <line x1="485" y1="108" x2="485" y2="126" stroke="#7ee0b0" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#arrowT2)"/>
      <text x="280" y="298" text-anchor="middle" fill="#64748b" font-size="8.5">চার চিহ্ন + শর্ত + তালিকা + একবার-সুতো = যেকোনো পর্দার পূর্ণ ব্যাকরণ</text>
    </svg>
    <div class="diag-cap">বর্ণমালা মুখস্থ নয় — চিহ্নের কাজ বোঝো: বলে, বাঁধে, শোনে, খোলে; বাকি সব এই চারের বাক্য।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দুই চির-ভুল:</strong> (১) <code>v-if</code> আর <code>v-for</code> একই উপাদানে — v-if আগে মূল্যায়ন হয়, লুপ-ভেরিয়েবল পায় না; কম্পিউটেড-তালিকা (দরজা ৩) বা wrapper-এ আলাদা করো। (২) <code>v-html</code>-এ ব্যবহারকারীর লেখা ঢোকানো — XSS-এর সরাসরি দরজা; LedgerPilot এরর-বার্তাও স্যানিটাইজ করে ঢাকে।</div></div>
  <div class="secret-box">🧵 {{ }} বলে · : বাঁধে · @ শোনে · # খোলে — চার চিহ্নের ব্যাকরণে পুরো পর্দা বোনা; v-html তালাবদ্ধ, কী-শূন্য v-for নিষেধ। / Four glyphs weave any screen; v-html stays locked, v-for never keyless.</div>`,
  senior: {
    title: "Template Syntax Card",
    body: `<p><strong>বাঁধন</strong>: <code>:</code> (attr/class/style; null→খসে); dynamic <code>:[name]</code>। <strong>ঘটনা</strong>: <code>@</code> + <code>.stop/.prevent/.capture/.self/.once/.passive</code> + key (<code>.enter</code>, <code>.ctrl.exact</code>) + mouse (<code>.left</code>)। <strong>শর্ত</strong>: v-if/else-if/else (মাউন্ট-টগল) বনাম v-show (display-টগল); একই উপাদানে v-if+v-for নিষেধ। <strong>তালিকা</strong>: v-for + <code>:key</code>(আসল id; index-নয়) — অ্যারে/অবজেক্ট/পরিসর/template-র‍্যাপ। <strong>একবার</strong>: v-once/v-memo/v-cloak। <strong>তালা</strong>: v-html কেবল trusted-উৎসে (LP: sanitize)। Vue 3.5: সব-শর্টহ্যান্ড + dynamic-arg বহাল। <strong>ফাঁদ</strong>: <code>v-if</code> আর <code>v-show</code> গুলিয়ে ফেলা — ঘন-টগল <code>v-show</code>, বিরল-টগল <code>v-if</code>; আর বড় তালিকায় কী-ছাড়া <code>v-for</code> = রাষ্ট্র-লিক।</p>`
  }
});
