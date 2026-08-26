
doors.push({
  num: 7,
  icon: "🧩",
  color: "#7ee0b0",
  name: "উত্তরাধিকারের খোপ",
  subtitle: "Pockets of Inheritance — Slots in Depth",
  tech: "default slot, named slots, scoped slots, slot props, useSlots, fallback content",
  spirit: "ওয়ারাসা — wirāsa (inheritance: the vessel receives, the heir fills)",
  secret: "props নামে মান পাঠায়, slot সন্তান-টেমপ্লেট পাঠায় — কার্ড-ছাঁচ খোপ খোলে, ভরাট পিতার হাতে; scoped-খোপ উল্টো-উপহার (ডেটা-পাল্টা)।",
  recall: {
    q: "সাধারণ-প্রপ আর scoped-slot — কখন কোনটা?",
    qen: "Regular prop vs scoped slot — when?",
    a: "মান-পাঠানো যখন যথেষ্ট (string/অবজেক্ট) props; কিন্তু পিতা-টেমপ্লেটকে পুত্রের ভেতরের ডেটা ধরে সাজাতে হলে (তালিকার-সারি, স্লাইড) scoped-slot — পুত্র slot-প্রপস ফেরত দেয়, পিতা #নাম=\"{…}\"-এ খোলে।",
    aen: "Props for values; scoped slots when the parent template must shape child-owned data — the child returns slot-props, the parent unpacks via #name=\"{…}\"."
  },
  story: `<p class="scene-setting">সাত নম্বর ঘর একটা কাঠের কার্ড-ছাঁচের কারখানা — দেয়ালে ঝোলানো শত শত ফাঁকা কার্ড, প্রতিটির মাঝে <strong>খোপ</strong> কাটা। মালিক
  <strong>হাজিরা বিবি</strong> — তাঁর আঁচলে সেলাই-কাঁচি, পাশে সোনালি ফিতার রুল। তিনি বলেন — <strong>"props আর slot — দুই রকম উপহার। props দিয়ে তুমি
  <em>মান</em> পাঠাও; slot দিয়ে তুমি <em>নিজের হাতের কাপড়</em> পাঠাও — ছাঁচের খোপে বসিয়ে দাও। ছাঁচ আমার, ভরাট তোমার।"</strong> কিছু কার্ডে একাধিক
  খোপ — শিরো, দেহ, পাদটীকা — প্রত্যেকের নাম-ফলক (<code>#header</code>, <code>#footer</code>)। আর সবচেয়ে অবাক-করা জিনিস: <strong>উল্টো-উপহারের খোপ</strong>
  — ছাঁচ নিজেই পাঠায় ভেতরের ডেটা (সারি, সূচক) ফিতে বেঁধে; পিতা সেই ফিতা ধরে নিজের পছন্দমতো সাজায়। হাজিরা বিবি বলেন — <strong>"লিস্টের-সারি
  আমার ভেতরে জন্মায়, কিন্তু কেমন দেখাবে সে-গল্প পিতার কলমে — আমি শুধু সুতো ধরিয়ে দিই।"</strong> খালি-খোপে তিনি ফলব্যাক-কাপড় বসান —
  পিতা না-পাঠালেও কার্ড খালি-খালি লাগে না।</p>
  <p class="scene-setting en">Room seven is a wooden card-mold workshop — hundreds of blank cards on the wall, each with
  a <strong>pocket</strong> cut into it. The owner, <strong>Hajira Bibi</strong> — sewing scissors in her apron, a
  golden-fiber ruler beside her. She says — <strong>"props and slots — two kinds of gifts. With props you send a
  <em>value</em>; with a slot you send <em>cloth from your own hands</em> — to set into the mold's pocket. The mold is
  mine, the filling yours."</strong> Some cards carry several pockets — head, body, footnote — each with a name-plate
  (<code>#header</code>, <code>#footer</code>). And the strangest thing: <strong>the reverse-gift pocket</strong> — the
  mold itself sends its inner data (row, index) tied to a fiber; the parent holds that fiber and arranges to taste.
  Hajira Bibi — <strong>"the list-row is born inside me, but how it looks is the parent's pen — I only hand over the
  thread."</strong> In an empty pocket she sets fallback cloth — the card never looks bare even when the parent sends
  nothing.</p>
  <div class="dialogue">('"খোলা খাঁচা ফেরত পাঠাও না খালি হাতে," হাজিরা বিবি বললেন, শূন্য খাঁচার ভেতরে রঙিন কাপড়ের ছাল বিছিয়ে, "ছাল বানিয়ে পাঠাও — পাওয়া মানুষ নিজের পালক বসাবে। আমার ছেলে একবার সব-বোনা খাঁচা পাঠিয়েছিল; ওপারে কেউ নিজের রং বসাতে পারেনি, ফেরত এসেছিল অচেনা।"', 'ছালের নরম ভাঁজে আঙুল রাখতেই বোঝা যায় — শূন্য জায়গাটাই আসল উপহার।')</div><div class="dialogue en">"Send the cage back with a cloth lining — the receiver sets their own feathers. My son once sent a fully-woven cage; it returned unrecognizable."</div>
  <div class="dialogue">হাজিরা বিবি খোপ-কাঠের আলমারি খুলে জিজ্ঞেস করলেন, "বলো — এই ফ্রেম এক, তাহলে ভেতরের সাজেজ কে ঠিক করবে?" তুমি বললে, "যে-কাপড় আনলো সে-তো!" বিবি নেড়ে বললেন, "তাই — খোপ দেয় জায়গা, সাজ দেয় অতিথি। ডিফল্ট-স্লট মানে খালি-তাক: যা-বসাও তাই-দেখায়, না-বসালে ফলব্যাক-কাপড়। নাম-দেওয়া স্লট আলমারির-দরজা: header-তাকে header-ই। স্কোপড-স্লট সবচেয়ে সূক্ষ্ম — খোপ অতিথির হাতে নিজের যন্ত্রের চাবি দেয়: row-ডেটা বাইরে পাঠিয়ে দেয়, সাজ অতিথি বসায়। দিক মনে রেখো — ডেটা খোপ থেকে বাইরে, সাজ বাইরে থেকে ভেতরে।"</div>
<div class="dialogue en">Hajira Bibi opened the niche-cabinet: "This frame is one — who decides the arrangement inside?" You said: "Whoever brought the cloth!" She shook her head: "So — the niche gives the place, the guest gives the arrangement. Default slot is an empty shelf: whatever you place shows; empty, the fallback-cloth. Named slots are cabinet doors: header on the header-shelf. Scoped slots are finest — the niche hands the guest the key to its own instrument: sends row-data out, the guest arranges. Remember the direction — data flows out of the niche, arrangement comes in from outside."</div>
  <div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল পথ</div>খাঁচা নিজে সাজানো — প্রতিটি ব্যবহারকারীর জন্য নতুন করে বোনা; দেরি ও অমিল।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক পথ</div>ছাল (slot) বানিয়ে পাঠানো — প্রত্যেকে নিজের পালক বসায়; এক খাঁচা, শত রূপ।</div>
</div>
  <div class="code-block">slot-শাস্ত্র — সম্পূর্ণ (LP-প্রমাণ: PasswordField-এর trailing-খোপ)

① ডিফল্ট-খোপ — নামহীন ভরাট:
  // পুত্র: ছাঁচ
  &lt;div class="card"&gt;
    &lt;slot&gt;ফলব্যাক: কিছু পাঠাওনি&lt;/slot&gt;
  &lt;/div&gt;
  // পিতা: ভরাট
  &lt;Card&gt;&lt;p&gt;নিজের কাপড়&lt;/p&gt;&lt;/Card&gt;

② নাম-খোপ — বহু ফাঁকা ঘর:
  // পুত্র:
  &lt;header&gt;&lt;slot name="header" /&gt;&lt;/header&gt;
  &lt;main&gt;&lt;slot /&gt;&lt;/main&gt;
  &lt;footer&gt;&lt;slot name="footer" /&gt;&lt;/footer&gt;
  // পিতা:
  &lt;template #header&gt;শিরোনাম&lt;/template&gt;
  &lt;template #footer&gt;পাদটীকা&lt;/template&gt;
  · v-slot:header = #header (সংক্ষেপ)
  · ডায়নামিক: &lt;template #[dynName]&gt;…&lt;/template&gt;

③ scoped-খোপ — উল্টো-উপহার:
  // পুত্র: ভেতরের ডেটা ফিতেয়
  &lt;ul&gt;
    &lt;li v-for="(row, i) in rows" :key="row.id"&gt;
      &lt;slot :row="row" :index="i" /&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
  // পিতা: ফিতা ধরে সাজায়
  &lt;List :rows="rows"&gt;
    &lt;template #default="{ row, index }"&gt;
      {{ index + 1 }}. &lt;strong&gt;{{ row.name }}&lt;/strong&gt;
    &lt;/template&gt;
  &lt;/List&gt;
  · পুত্রের-ডেটা + পিতার-টেমপ্লেট = উভয়ের শ্রেষ্ঠ
  · ফাঁকা-খোপ শনাক্ত: &lt;slot name="x" /&gt; পিতা-বিহীন
    হলে ফলব্যাক

④ useSlots — স্ক্রিপ্টে খোপ-তদন্ত:
  const slots = useSlots()
  const hasHeader = !!slots.header
  · শর্তসাপেক্ষ-ছাঁচ (হেডার-থাকলে-তবেই-রেল)
    এধরনের সিদ্ধান্তে

⑤ LP-প্রমাণ (PasswordField.vue):
  // "visibility toggle in the trailing slot" —
  // ছাঁচে আসল-খোপ-প্রথা:
  &lt;div class="relative"&gt;
    &lt;input … /&gt;
    &lt;slot name="trailing"&gt;          // খোপ
      &lt;EyeToggle … /&gt;                // ফলব্যাক
    &lt;/slot&gt;
  &lt;/div&gt;
  // পিতা চাইলে নিজের টগল বসায়, না-দিলে
  // ফলব্যাক-চোখ কাজ করে

⑥ হাই-অর্ডার-ছাঁচ (শৈলী-নোট):
  · টেবিল/কার্ড-লেআউট = নাম-খোপের রাজ্য
  · তালিকা-আইটেম-রেন্ডারার = scoped-খোপের
    রাজ্য (v-for ছাঁচের-ভেতরে, পিতার কলম)
  · ফর্ম-ফিল্ড-লেবেল/সহায়তা-টেক্সট =
    খোপ + ফলব্যাক (LP-TextInput-প্রথার আত্মীয়)</div>
  <ul class="checklist"><li>Card-কম্পোনেন্ট বানাও — ডিফল্ট স্লট + ফলব্যাক-লেখা; নাম-দেওয়া স্লটে header/footer</li><li>স্কোপড-স্লট: তালিকা-কম্পোনেন্ট থেকে row-ডেটা বাইরের টেমপ্লেটে পাঠাও</li><li>লেজারপাইলট-ড্যাশবোর্ডে একটা স্লট-প্যাটার্ন চিহ্নিত করে খাতায় আঁকো</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 4 (City Builder’s Codex) কম্পোজিশন-বনাম-কনফিগারেশনের ট্রেড-অফ দেয়, আর Book 28 (Knowledge Web — ১০ দরজা) স্লট-প্যাটার্নকে জ্ঞান-সংযোগের রূপক করে।</div></div>
  <div class="verse">ওয়ারাসা — উত্তরাধিকারের দুই ধারা: পাত্র পূর্বপুরুষের, ভরাট উত্তরসূরির। "মানুষের মর্যাদা তার প্রচেষ্টার" নয় বরং আয়াত-ধারা যেখানে জীবিকা ও দায় বণ্টিত (১৭:৭০-এর আত্মা) — ছাঁচ ধার দেয় গঠন, উত্তরসূরি দেয় প্রাণ। হাজিরা বিবির কার্ড সেই ওয়ারাসার কারিগরি রূপ: খোপ পূর্ব-নির্ধারিত, ভরাট প্রজন্ম-প্রজন্মান্তরে নতুন; খোপহীন কার্ড অর্থহীন, ভরাটহীন খোপ অসম্পূর্ণ — দুই-ই একসাথে মানে জীবন্ত উত্তরাধিকার।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>খোপ-ফাঁদ:</strong> (১) খোপ-নামের বানান-অমিল (<code>#footter</code>) — Vue চুপচাপ আরেকটা খোপ খুলে ফেলে, কনটেন্ট কোথাও দেখায় না; নাম-জোড়া সবসময় মিলিয়ে নাও। (২) scoped-খোপে পিতা-টেমপ্লেটে পুত্রের সব-ডেটা টানতে যাওয়া — খোপ-প্রপস সর্বনিম্ন রাখো (row+index যথেষ্ট), নইলে পুত্রের অন্তরঙ্গ সব পিতার হাতে। (৩) ডায়নামিক-খোপে খালি-স্ট্রিং বা null-নাম — রেন্ডার-এরর; ফলব্যাক-নাম বা v-if-গার্ড রাখো।</div></div>
  <div class="secret-box">🧩 ছাঁচ খোপ খোলে, পিতা ভরাট করে; scoped-খোপ উল্টো-ফিতা দেয় — পুত্রের ডেটা, পিতার কলম; ফলব্যাক খালি-ঘর বাঁচায়। / The mold opens pockets, the parent fills them; scoped slots return the thread.</div>
  <div class="diagram">
    <div class="diag-title">Pockets — Value-Gift vs Cloth-Gift vs Reverse-Gift</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowS7" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#7ee0b0"/></marker></defs>
      <rect x="15" y="14" width="165" height="92" rx="11" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.5"/>
      <text x="97" y="36" text-anchor="middle" fill="#7ee0b0" font-size="8.5" font-weight="700">📦 props-উপহার</text>
      <text x="97" y="52" text-anchor="middle" fill="#94a3b8" font-size="7">মান পাঠায় (string/অবজেক্ট)</text>
      <text x="97" y="66" text-anchor="middle" fill="#64748b" font-size="7">:title="t" · :rows="list"</text>
      <text x="97" y="84" text-anchor="middle" fill="#7ee0b0" font-size="6.8">ছাঁচ নিজে সাজায়</text>
      <text x="97" y="98" text-anchor="middle" fill="#64748b" font-size="6.5">সাধারণ-কার্ডের পথ</text>
      <rect x="197" y="14" width="165" height="92" rx="11" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.5"/>
      <text x="279" y="36" text-anchor="middle" fill="#7ee0b0" font-size="8.5" font-weight="700">🧵 slot-উপহার</text>
      <text x="279" y="52" text-anchor="middle" fill="#94a3b8" font-size="7">টেমপ্লেট-কাপড় পাঠায়</text>
      <text x="279" y="66" text-anchor="middle" fill="#64748b" font-size="7">#header · #footer · ডিফল্ট</text>
      <text x="279" y="84" text-anchor="middle" fill="#7ee0b0" font-size="6.8">ভরাট পিতার হাতে</text>
      <text x="279" y="98" text-anchor="middle" fill="#64748b" font-size="6.5">ফলব্যাক-কাপড়সহ</text>
      <rect x="379" y="14" width="166" height="92" rx="11" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="462" y="36" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">🔁 scoped-খোপ</text>
      <text x="462" y="52" text-anchor="middle" fill="#94a3b8" font-size="7">উল্টো-উপহার: পুত্রের ডেটা</text>
      <text x="462" y="66" text-anchor="middle" fill="#64748b" font-size="7">&lt;slot :row="row" :index="i" /&gt;</text>
      <text x="462" y="84" text-anchor="middle" fill="#fcd34d" font-size="6.8">পিতা #default="{row, i}"</text>
      <text x="462" y="98" text-anchor="middle" fill="#64748b" font-size="6.5">সারি-রেন্ডারারের রাজ্য</text>
      <rect x="15" y="124" width="530" height="70" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="280" y="145" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">নাম-খোপের কার্ড-ছাঁচ</text>
      <text x="280" y="161" text-anchor="middle" fill="#94a3b8" font-size="7.5">&lt;header&gt;&lt;slot name="header"/&gt;&lt;/header&gt; + &lt;main&gt;&lt;slot/&gt;&lt;/main&gt; + &lt;footer&gt;&lt;slot name="footer"/&gt;&lt;/footer&gt;</text>
      <text x="280" y="176" text-anchor="middle" fill="#64748b" font-size="7">ডায়নামিক-খোপ: #[dynName] · useSlots() দিয়ে শর্তসাপেক্ষ-ছাঁচ-সিদ্ধান্ত</text>
      <rect x="15" y="210" width="530" height="56" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="230" text-anchor="middle" fill="#cbd5e1" font-size="8" font-weight="600">LP-প্রমাণ: PasswordField-এর trailing-খোপ</text>
      <text x="280" y="245" text-anchor="middle" fill="#94a3b8" font-size="7.5">&lt;slot name="trailing"&gt;&lt;EyeToggle/&gt;&lt;/slot&gt; — পিতার-নিজের-টগল বা ফলব্যাক-চোখ; খোপ+ফলব্যাক = ফর্ম-ফিল্ডের প্রথা</text>
      <text x="280" y="260" text-anchor="middle" fill="#64748b" font-size="7">খালি-খোপ ফলব্যাকে বাঁচে; খোপ-নাম ভুল হলে নীরবে-খালি — বানান-পাহারা</text>
      <text x="280" y="288" text-anchor="middle" fill="#64748b" font-size="8.5">ছাঁচ পূর্বপুরুষের, ভরাট উত্তরসূরির — খোপ খুলে রাখো, প্রজন্ম নিজে লিখবে</text>
    </svg>
    <div class="diag-cap">তিন উপহারের মানচিত্র: মান নামে, কাপড় নামে আর সাজানোর-ফিতা ওঠে — কখন কোনটা, সেটাই নকশার বিচার।</div>
  </div>`,
  senior: {
    title: "Slot Card",
    body: `<p><strong>ডিফল্ট</strong>: <code>&lt;slot&gt;ফলব্যাক&lt;/slot&gt;</code>; পিতা-কনটেন্ট = ভরাট। <strong>নাম-খোপ</strong>: <code>name="x"</code> ↔ <code>#x</code>; ডায়নামিক <code>#[dyn]</code>। <strong>scoped</strong>: <code>&lt;slot :row :index /&gt;</code> → পিতা <code>#default="{ row, index }"</code> — তালিকা-রেন্ডারারের শাস্ত্র; খোপ-প্রপস ন্যূনতম। <strong>useSlots()</strong>: শর্তসাপেক্ষ-ছাঁচ। <strong>শৈলী</strong>: লেআউট = নাম-খোপ; আইটেম-রেন্ডার = scoped; ফিল্ড-সহায়তা = খোপ+ফলব্যাক। <strong>LP-প্রমাণ</strong>: PasswordField <code>trailing</code>-খোপ (EyeToggle-ফলব্যাক)। <strong>ফাঁদ</strong>: scoped-slot-এর ডেটা উল্টো-দিকে পাঠানো (প্যারেন্ট রেন্ডার করে, সন্তান শুধু সুযোগ দেয়) — দিক উল্টালে কম্পোজিশন ভেঙে প্রপ-কুয়াশা ফেরে।</p>`
  }
});

doors.push({
  num: 8,
  icon: "🌱",
  color: "#7ee0b0",
  name: "বীজ থেকে ছাই — জীবনচক্র",
  subtitle: "Seed to Ash — Lifecycle Hooks Complete",
  tech: "onBeforeMount/onMounted, onBeforeUpdate/onUpdated, onBeforeUnmount/onUnmounted, errorCaptured, activated/deactivated, keep-alive interplay",
  spirit: "আজল — ajal (the appointed term: every thing has its season)",
  secret: "প্রথম শ্বাসে ডেটা-আনো (onMounted), শেষ শ্বাসে সব ছাড়ো (onUnmounted) — টাইমার/শ্রোতা/abort না-ছাড়া মৃত্যু = ভুত-ফাঁদ।",
  recall: {
    q: "কেন onMounted-এ fetch, setup-এ নয়?",
    qen: "Why fetch in onMounted rather than setup?",
    a: "সার্ভার-রেন্ডারে (SSR) setup চলে কিন্তু mounted হয় না — সেখানে ব্রাউজার-API নেই; আর ক্লায়েন্টে mounted = DOM প্রস্তুত, পার্শ্ব-প্রভাবের নিরাপদ মুহূর্ত। setup-এ বিশুদ্ধ প্রস্তুতি রাখো।",
    aen: "SSR runs setup without mounting (no browser APIs); on client, mounted means DOM-ready — the safe moment for side-effects. Keep setup pure."
  },
  story: `<p class="scene-setting">আট নম্বর ঘরের দরজা খুললেই একটা উদ্যান — এবং তার মাঝে বিশাল এক <strong>জীবন-ঘড়ি</strong>। মালী <strong>ইদ্রিস</strong>
  (তাঁর টুপিতে শুকনো বীজের থলে) ঘড়ির কাঁটা ঘোরাতে ঘোরাতে বলেন — <strong>"প্রতিটি উপাদান এক বীজ। রোপণের আগে প্রস্তুতি (setup), তারপর মাটি ছোঁয়া
  (beforeMount), তারপর প্রথম পাতা (mounted) — এই মুহূর্তে ডেটা-নহর খোলো, ঘড়ি-টিক বাঁধো। প্রতিটি বদলে পুরনো-নতুন ছায়া (beforeUpdate/updated)।
  আর শেষে — উৎপাটন (beforeUnmount) আর ছাই (unmounted): সেচ-নল বন্ধ, পাখির-বাসা খোলা, নাহলে মাটির নিচে বীজ পচে পুরো উদ্যান দূষিত করে।"</strong>
  তিনি একটা পুরনো সারণি দেখান — শাগিরদ কেউ টাইমার বাঁধেছিল কিন্তু খোলেনি; পর্দা বন্ধের পরেও সংখ্যা বাড়ছিল, মেমরি ফুলে উঠছিল। ইদ্রিস বলেন —
  <strong>"উৎপাটিত গাছের সেচ চলতে থাকলে পুকুর শেষ হয়। যা বেঁধেছ, প্রস্থানে খোলো — জোড়া-হিসাব।"</strong></p>
  <p class="scene-setting en">Opening room eight reveals a garden — and at its center a great <strong>life-clock</strong>.
  The gardener <strong>Idris</strong> (a pouch of dry seeds in his cap) turns the hand and speaks — <strong>"every
  component is a seed. Preparation before planting (setup), then touching soil (beforeMount), then the first leaf
  (mounted) — open the data-channel and tie the clock-tick at THIS moment. Each change casts old-and-new shadows
  (beforeUpdate/updated). And at the end — uprooting (beforeUnmount) and ash (unmounted): close the irrigation, open
  the bird-nest, or the seed rots underground and poisons the whole garden."</strong> He shows an old ledger — an
  apprentice tied a timer but never untied it; long after the screen closed, the count kept rising, memory swelling.
  Idris — <strong>"if irrigation continues on an uprooted tree, the pond runs dry. Whatever you tied, untie at exit —
  paired accounting."</strong></p>
  <div class="dialogue">('"বীজ থেকে চারা হতে যত দিন, তত দিন মাটি খোঁড়ো না," হাজিরা বিবি বীজতলার পাশে বালতি নামিয়ে রাখলেন, "গাছ জ্যান্ত থাকতেই দড়ি বাঁধো — শুকিয়ে গেলে বাঁধলে ভাঙে। আমার ভাই গাছ কাটার পরে বাঁধতে গিয়েছিল; খেয়াল করেনি শিকড় আর নেই।"', 'ভেজা মাটির গন্ধে তোমার নাক ভরে যায় — কখন বাঁধতে হয়, কখন খুলতে হয়, তার সময়টা এবার স্পষ্ট।')</div><div class="dialogue en">"Don't dig the soil while the seed sprouts — tie the rope while the tree lives. My brother tied after cutting; the roots were already gone."</div>
  <div class="dialogue">ইদ্রিস ঘড়ির কাঁটা থামিয়ে জিজ্ঞেস করলেন, "বলো — গাছ রোপণ করলাম onMounted-এ, তাহলে সেচ-নল, সার-শক্তি কোথায় হটবে?" তুমি বললে, "গাছ বড় হলে?" ইদ্রিস মাথা নাড়লেন: "জীবন দুই-পাল্লার — যা জন্মায় তার বিদায়ও। onUnmounted-এ নল খোলো, শ্রোতা-সরাও, টাইমার-মেটাও — নাহলে মৃত-গাছের শিকড় মাটিতেই পচে থাকবে (মেমরি-লিক), বাগান অন্ধকারে কথা বলবে। আর setup-শরীরে সরাসরি সেচ-কাজ লিখো না — সে-শরীর দুইবার চালানো হতে পারে; জন্ম-হুকে নাও, মৃত্যু-হুকে বিদাও। জোড়া ছাড়া কোনো হুক নয়।"</div>
<div class="dialogue en">Idris stopped the clock-hand: "We planted a tree in onMounted — where do the hose and the fertilizer run?" You said: "When the tree grows?" He shook his head: "Life has two pan-scales — what is born must also depart. In onUnmounted, open the hose, remove the listeners, kill the timers — or the dead tree's roots rot in the soil (memory-leak), and the garden talks in the dark. And never write irrigation directly in setup’s body — that body may run twice; take it in the birth-hook, release it in the death-hook. No hook without its pair."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ ঝুলন্ত-শ্রোতা</div>onMounted-এ লিসেনার যোগ, বিদায়ে কেউ সরায় না — মেমরি-লিক, ভূতুড়ে-আচরণ।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ জন্ম-মৃত্যু জোড়া</div>প্রতিটি সেটআপের সাথে ক্লিনআপ-ফেরত (onUnmounted/স্কোপ-অটো) — ঘর ছাড়ার আগে বাতি নেভাও।</div></div>
  <div class="code-block">জীবনচক্র-শাস্ত্র — সম্পূর্ণ (LP-নমুনা: useDataFetch)

চক্রের পূর্ণ-সারণি (&lt;script setup&gt;-কম্পাইলার-স্বয়ংক্রিয়):
  ① setup()            — প্রস্তুতি: refs/computed/
                         কম্পোজেবল-কল; DOM-নেই; বিশুদ্ধ রাখো
  ② onBeforeMount      — প্রথম DOM-গাছ বানানোর আগে (বিরল-ব্যবহার)
  ③ onMounted          — DOM ঢালাই-হয়েছে:
                         ✓ fetch/API-ডেটা
                         ✓ থার্ড-পার্টি-চার্ট/এডিটর init
                         ✓ টাইমার/SSE/ইভেন্ট-শ্রোতা বাঁধা
                         ✓ ref-টার্গেট মাপা (nextTick লাগলে)
  ④ onBeforeUpdate     — DOM-প্যাচের আগে; প্রাক-মাপ নিতে
  ⑤ onUpdated          — প্যাচের পরে; ⚠ এখানে state-বদল
                         করলে লুপ (গার্ড ছাড়া)
  ⑥ onBeforeUnmount    — এখনো সব-কার্যকর; চূড়ান্ত-বিদায়
                         (মোডাল-ফোকাস ফেরত ইত্যাদি)
  ⑦ onUnmounted        — সব ভেঙেছে:
                         ✓ clearInterval / clearTimeout
                         ✓ EventSource/EventListener খোলা
                         ✓ AbortController.abort()
                         ✓ সাবস্ক্রিপশন বাতিল

বিশেষ-হুক:
  · onErrorCaptured(err, inst, info) — পুত্রের এরর
    ধরা: return false = প্রচার থামাও; errorBoundary-
    উপাদান বানানোর মূল (দরজা ২৬-এ ব্যবহার)
  · onActivated/onDeactivated — keep-alive-আবৃত
    পর্দার ঘুম-জাগা (দরজা ১২)
  · onRenderTracked/onRenderTriggered — ডিবাগ-শিংা

LP-নমুনা (useDataFetch.ts — প্রকৃত কোড):
  export function useDataFetch&lt;T&gt;(fetcher, options) {
    const loading = ref(false)
    const data = ref&lt;T | null&gt;(null)
    const error = ref&lt;string | null&gt;(null)
    async function fetch() {
      loading.value = true; error.value = null
      try { data.value = await fetcher() }
      catch (e) { /* parse+sanitize → error */ }
      finally { loading.value = false }
    }
    if (options.immediate !== false) {
      onMounted(() =&gt; { void fetch() })   // ③ প্রথম-পাতা
    }
    return { loading, error, data, refetch: fetch }
  }
  · একই-ছাঁচ তোমার প্রতিটি ড্যাশবোর্ড-অংশে —
    শাগিরদের বারবার লেখা নয়, কম্পোজেবল-একবার (দরজা ৯)

জোড়া-হিসাবের নিয়ম (ইদ্রিসের শপথ):
  বাঁধা                          → খোলা
  -------------------------------|--------------------------
  setInterval / setTimeout       → onUnmounted-এ clear…
  addEventListener               → remove…
  new EventSource()              → .close()
  new AbortController()          → .abort()
  থার্ড-পার্টি ইনস্ট্যান্স          → .destroy()

async-setup নোট:
  · top-level await করলে উপাদানটি async —
    পিতায় &lt;Suspense&gt; লাগে (দরজা ১২)</div>
  <ul class="checklist"><li>টাইমার-কম্পোনেন্ট: onMounted-এ setInterval, onUnmounted-এ clearInterval — মাউন্ট/আনমাউন্ট করে মেমরি-ট্যাব দেখো</li><li>স্ক্রল-শ্রোতা যোগ করে watchEffect-এ onCleanup দিয়ে সরাও</li><li>জীবনচক্রের ছক আঁকো — ৪-জোড়া হুক, কার কাজ কী, এক-শব্দে</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 38 (The Machine’s Soul — ১০ দরজা) প্রসেস-জীবনচক্রের অপারেটিং-সিস্টেম সংস্করণ শেখায় — কম্পোনেন্ট-লাইফসাইকেলের বড় ভাই।</div></div>
  <div class="verse">আজল — নির্ধারিত কাল: "প্রত্যেক জাতির জন্য একটি সময়সীমা আছে" (৭:৩৪, ১০:৪৯-এর সার) — বীজেরও, পাতারও, গাছেরও। ইদ্রিসের ঘড়ি সেই আজলের উদ্যান-রূপ: রোপণের মুহূর্ত আছে, ফুলের মুহূর্ত আছে, উৎপাটনের মুহূর্ত আছে — আর প্রতিটি মুহূর্তের নিজ-নিজ কাজ। যে বীজ নিজের সময়সীমা মানে না — মরার পরেও মাটি থেকে টানতে থাকে — সে নিজে বাঁচে না, উদ্যানকেও মারে। প্রস্থান-পরিচ্ছদই প্রবেশ-পরিচ্ছদের আমানত।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ঘড়ি-ফাঁদ:</strong> (১) <code>onUnmounted</code>-বিস্মৃত — ভুত-টাইমার, ভুত-fetch (প্রস্থানের পরেও state-এ লেখে), মেমরি-ফুল; বাঁধার সাথে খোলার লাইন পাশে লিখে রাখো। (২) <code>onUpdated</code>-এ state-বদল — রেন্ডার-লুপ, প্যাড-জ্বলে; গার্ড ছাড়া কিছুই না। (৩) setup-এ browser-API (window/document) — SSR-এ বিস্ফোরণ; পার্শ্ব-প্রভাব mounted-এ।</div></div>
  <div class="secret-box">🌱 প্রথম পাতায় নহর খোলো (onMounted-fetch), ছাইয়ে সব বন্ধ করো (unmounted-clear/close/abort) — বীজের কাল মানা কারিগরের শপথ। / Open channels on mount, close everything on unmount.</div>
  <div class="diagram">
    <div class="diag-title">The Life-Clock — Seed, Leaf, Shadow, Ash</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowL8" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#7ee0b0"/></marker></defs>
      <circle cx="280" cy="160" r="118" fill="rgba(66,184,131,0.05)" stroke="#42b883" stroke-width="1.4"/>
      <text x="280" y="150" text-anchor="middle" fill="#7ee0b0" font-size="10" font-weight="700">⏳ জীবন-ঘড়ি</text>
      <text x="280" y="166" text-anchor="middle" fill="#94a3b8" font-size="7">প্রতিটি উপাদান এক বীজ</text>
      <text x="280" y="180" text-anchor="middle" fill="#64748b" font-size="6.5">ঘড়ির কাঁটায় সাত-মুহূর্ত</text>
      <rect x="15" y="14" width="165" height="66" rx="10" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.4"/>
      <text x="97" y="34" text-anchor="middle" fill="#7ee0b0" font-size="8" font-weight="700">① setup()</text>
      <text x="97" y="48" text-anchor="middle" fill="#94a3b8" font-size="7">refs · computed · কম্পোজেবল</text>
      <text x="97" y="62" text-anchor="middle" fill="#64748b" font-size="6.5">DOM-নেই · বিশুদ্ধ রাখো</text>
      <rect x="380" y="14" width="165" height="66" rx="10" fill="rgba(66,184,131,0.10)" stroke="#42b883" stroke-width="1.4"/>
      <text x="462" y="34" text-anchor="middle" fill="#7ee0b0" font-size="8" font-weight="700">③ onMounted 🌱</text>
      <text x="462" y="48" text-anchor="middle" fill="#94a3b8" font-size="7">fetch · টাইমার · শ্রোতা-বাঁধা</text>
      <text x="462" y="62" text-anchor="middle" fill="#64748b" font-size="6.5">DOM প্রস্তুত — LP: useDataFetch</text>
      <rect x="380" y="248" width="165" height="66" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="462" y="268" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">④⑤ Update-ছায়া</text>
      <text x="462" y="282" text-anchor="middle" fill="#94a3b8" font-size="7">beforeUpdate → updated</text>
      <text x="462" y="296" text-anchor="middle" fill="#64748b" font-size="6.5">⚠ updated-এ state-লেখা = লুপ</text>
      <rect x="15" y="248" width="165" height="66" rx="10" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.4"/>
      <text x="97" y="268" text-anchor="middle" fill="#f87171" font-size="8" font-weight="700">⑥⑦ উৎপাটন-ছাই</text>
      <text x="97" y="282" text-anchor="middle" fill="#94a3b8" font-size="7">beforeUnmount → unmounted</text>
      <text x="97" y="296" text-anchor="middle" fill="#64748b" font-size="6.5">clear · close · abort — জোড়া-হিসাব</text>
      <rect x="185" y="14" width="180" height="0" fill="none"/>
      <path d="M180,47 C230,30 330,30 378,45" fill="none" stroke="#7ee0b0" stroke-width="1.6" marker-end="url(#arrowL8)"/>
      <path d="M462,80 C462,140 462,190 462,246" fill="none" stroke="#818cf8" stroke-width="1.4" stroke-dasharray="5 3" marker-end="url(#arrowL8)"/>
      <path d="M378,281 C300,300 180,300 182,282" fill="none" stroke="#f87171" stroke-width="1.4" stroke-dasharray="5 3" marker-end="url(#arrowL8)"/>
      <path d="M97,246 C97,190 97,140 97,82" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="2 3" marker-end="url(#arrowL8)"/>
      <rect x="185" y="120" width="190" height="76" rx="10" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="200" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">বিশেষ: onErrorCaptured (পুত্রের এরর-ধরা) · activated/deactivated (keep-alive) · renderTracked (ডিবাগ)</text>
      <text x="280" y="312" text-anchor="middle" fill="#64748b" font-size="8">যা বেঁধেছ প্রস্থানে খোলো — উৎপাটিত গাছে সেচ চলতে দিও না</text>
    </svg>
    <div class="diag-cap">সাত-মুহূর্তের ঘড়ি: setup-প্রস্তুতি, mounted-প্রথম-পাতা, update-ছায়া, unmounted-ছাই — প্রতিটি মুহূর্তের নিজ-কাজ, জোড়া-হিসাব ছাড়া মুক্তি নেই।</div>
  </div>`,
  senior: {
    title: "Lifecycle Card",
    body: `<p><strong>ক্রম</strong>: setup (বিশুদ্ধ) → beforeMount → <strong>mounted</strong> (fetch/timer/listener/থার্ড-পার্টি) → beforeUpdate→updated (⚠ state-লেখা-লুপ) → beforeUnmount → <strong>unmounted</strong> (clear/close/abort — জোড়া-হিসাব)। <strong>বিশেষ</strong>: onErrorCaptured (boundary, return false-থামাও), activated/deactivated (keep-alive), renderTracked/Triggered (ডিবাগ)। <strong>নিয়ম</strong>: বাঁধা→খোলা জোড়া; ব্রাউজার-API শুধু mounted-পরে। <strong>LP-নমুনা</strong>: useDataFetch — <code>onMounted(() =&gt; void fetch())</code>, <code>immediate:false</code>-অপশন। <strong>ফাঁদ</strong>: সাইড-ইফেক্ট setup-শরীরে সরাসরি লেখা (setup = দুইবার চলতে পারে) — <code>onMounted</code>-এ নাও; আর ক্লিনআপ-ছাড়া লিসেনার/টাইমার = মেমরি-লিক।</p>`
  }
});
