
doors.push({
  num: 11,
  icon: "🫗",
  color: "#7ee0b0",
  name: "বংশধারার ঝর্ণা",
  subtitle: "The Ancestral Spring — provide / inject",
  tech: "provide(), inject(), typed injection keys, default values, reactivity through provide, readonly guard",
  spirit: "সিলসিলা — silsila (the chain: blessings flow down the lineage without each link re-fetching)",
  secret: "গভীর-বংশে প্রপ-ঝর্না নয় — উপরে provide, নিচে inject; কী-টাইপসহ নাম, ডিফল্ট-সহ নিরাপত্তা, readonly-ঘেরা উজান।",
  recall: {
    q: "provide/inject আর props-চেইন — কখন কোনটা?",
    qen: "When to use provide/inject over a props chain?",
    a: "৩-৪+ স্তর গভীর বংশে একই মান পৌঁছাতে (থিম, লোকেল, ফর্ম-কাঠামো) inject — মাঝের উপাদানগুলো অপরিচিত প্রপ বইতে থাকে না; ১-২ স্তরে props-ই স্পষ্ট ও শোয়েবল।",
    aen: "For values 3+ levels deep (theme, locale, form context) inject; for 1-2 levels props stay clearer and searchable."
  },
  story: `<p class="scene-setting">এগারো নম্বর ঘরের মাঝে একটা <strong>ঝর্ণা</strong> — কিন্তু আশ্চর্যের কাজটা নিচে নয়, <em>বংশ-বরাবর</em>: এক ঊর্ধ্বতন উঠান থেকে
  পানি সরাসরি নিচের যে-কোনো প্রজন্মের কলসে নামে, মাঝের উঠানগুলো বালতি ধরে ধরে বসে থাকে না। ঝর্ণার রক্ষক <strong>আব্বা করিম</strong> — দাড়িতে
  সাদা রেখা, হাতে তামার পাইপ-রিচ। তিনি বলেন — <strong>"props-বাহক প্রতি উঠানে থামে, প্রত্যেকে বালতি হাতে নাম-করে বয়ে নেয় — পাঁচ প্রজন্মে পাঁচবার
  হাতবদল, প্রতিবার একটু পানি পড়ে। ঝর্ণা সে-শ্রম মেটায়: ঊর্ধ্বতন উঠান provide করে, যে-প্রজন্মে দরকার সে-ই inject করে।"</strong> তারপর তিনি দুইটা
  নিয়মের ফলক দেখান — <strong>নাম-কী খোদাই করো</strong> (InjectionKey-টাইপ, নইলে ভুল-কলসে পানি), <strong>আর উজানের পানি readonly-ঢাকনায় মোড়ো</strong>
  (নিচের প্রজন্ম নিজে বদলাতে গেলে খবর পাঠাক, ঢাকনা খুলে না)। পাশে তিনি দেখান ফর্ম-কাঠামোর বড় পরিবার — এক-ফর্মে বিশ ইনপুট: ঊর্ধ্বতন ফর্ম-উঠান
  provide করে সংগ্রহ+যাচাই-পাইপ, প্রতিটি ইনপুট-ঘর শুধু inject করে খোলে।</p>
  <p class="scene-setting en">Room eleven holds a <strong>spring</strong> — but the wonder is not downward, it is
  <em>lineage-wise</em>: from one upper courtyard water drops straight into any generation's jug below, without the
  middle courtyards passing buckets. The keeper, <strong>Abba Karim</strong> — a white streak in his beard, a copper
  pipe-wrench. He says — <strong>"props-carriers stop at every courtyard; each one names and carries a bucket — five
  generations, five hand-offs, a little water spilled each time. The spring ends that labor: the upper courtyard
  provides; whichever generation needs, injects."</strong> Then two rule-tablets — <strong>engrave the name-key</strong>
  (typed InjectionKey, or water lands in the wrong jug), <strong>and cap the upstream water readonly</strong> (a lower
  generation wanting change sends word, not unscrews the cap). Beside him, the great form-family — one form, twenty
  inputs: the upper form-courtyard provides the collection+validation pipe; each input-room only injects and opens.</p>
  <div class="dialogue">('"ঝর্ণার জল ময়দান ভরে না ঢেলো," আব্বা করিম নলের মুখে সরু বাঁশ লাগালেন, "যার গাছ, তার গোড়ায় সরু সরু নালা ছাড়ো। সব কিছু সবার কাছে পাঠালে কেউ পায় না — শুধু কাদা বাড়ে। একবার পুরো পুকুর এক গাছে ঢেলেছিলাম; গাছ ডুবে গিয়েছিল, পাশের সব তেতুল পানিশূন্য হয়ে গিয়েছিল।"', 'সরু নালার ছলাৎ-ছলাৎ শব্দে চোখ বুজতেই দেখা যায় — লক্ষ্যবিহীন দান কেবল ক্ষতি বাড়ায়।')</div><div class="dialogue en">"Don't flood the field — narrow channels to each tree's root. I once poured a whole pond into one tree; it drowned, the tamarinds went dry."</div>
  <div class="code-block">provide/inject-শাস্ত্র — টাইপড-কী ছাঁচে

① নাম-কী খোদাই (টাইপসহ — ভুল-কলস রোধ):
  // keys.ts — বংশ-জুড়ে এক-সত্য
  import type { InjectionKey, Ref } from 'vue'
  export const ThemeCtx: InjectionKey&lt;Ref&lt;'light' | 'dark'&gt;&gt; =
    Symbol('ThemeCtx')

② উজান — provide (ঊর্ধ্বতন উপাদান):
  // App.vue
  const theme = ref&lt;'light' | 'dark'&gt;('light')
  provide(ThemeCtx, theme)
  · অবস্থা-সহ provide → নিচে প্রতিক্রিয়া-জীবিত
  · শাসন-চাইলে readonly-ঢাকনা:
    provide(ThemeCtx, readonly(theme))
    (নিচে .value-লেখা সতর্কতা-উঁচু নীরব-ব্যর্থ)

③ ভাটি — inject (যে-প্রজন্মে দরকার):
  // ৪-স্তর-নিচের InputLabel.vue
  const theme = inject(ThemeCtx)          // Ref | undefined
  · ডিফল্ট-সহ নিরাপত্তা:
    const theme = inject(ThemeCtx, ref('light'))
  · বাধ্যতামূলক-না-হলে কারখানা-ডিফল্ট:
    inject(ThemeCtx, () =&gt; ref('light'), true)

④ নিচ থেকে বদল — খবর-পথ (ঢাকনা নয়):
  // উজান provide করে: state + ক্রিয়া
  provide(ThemeCtx, {
    theme: readonly(theme),
    setTheme: (v) =&gt; { theme.value = v },
  })
  // ভাটি: ctx.setTheme('dark') — সিদ্ধান্ত উজানে

⑤ বাস্তব-কুঠিরি (কখন-কোথায়):
  · থিম/লোকেল/স্ক্রিন-আকার — অ্যাপ-মূলে
  · বহু-ইনপুট-ফর্ম: সংগ্রহ+যাচাই-পাইপ — ফর্ম-
    মূলে (প্রতিটি ফিল্ড inject করে নিজ-ক্ষেত্র)
  · কম্পোনেন্ট-লাইব্রেরির অন্তরঙ্গ-সংযোগ (এখানে
    শাস্ত্র-সবচেয়ে-প্রযোজ্য — ব্যবহারকারী প্রপ-বৃষ্টি
    দেখে না)
  ⚠ ১-২ স্তরে props-ই বিশ্বাস্য — inject স্পষ্টতা
    কেনে, সুবিধা বেচে

⑥ LP-সংযোগ-নোট:
  · LedgerPilot-এ সেশন-সত্য স্টোরে (দরজা ১০) —
    কারণ বহু-বংশ+পারসিস্ট+রিসেট-দরকার ছিল;
    inject থাকত প্রপ-জটে শ্বাসরুদ্ধ
  · ছাঁচ-নিয়ম: ক্রস-পর্দা-সত্য → স্টোর;
    বংশ-ভেতরের-অন্তরঙ্গ → provide/inject</div>
  <div class="verse">সিলসিলা — ধারাবাহিকতার শৃঙ্খল: জ্ঞান ঊর্ধ্ব থেকে নিচে নামে, প্রতিটি প্রজন্ম পাত্র ধরে — কিন্তু পাত্র বহনকারী নয়, প্রাপক। "তাদের পর এলো উত্তরসূরিরা" (২:১৩৪-এর সার) — প্রত্যেকে নিজ-হিসাবে গ্রহণ করে, ধারাটি এক থাকে। আব্বা করিমের ঝর্ণা সেই সিলসিলার নল-রূপ: উজানের দান প্রজন্ম-প্রজন্মান্তরে অবিচ্ছিন্ন, মাঝের কেউ দানের মালিক হয়ে বসে না — শুধু বয়ে রাখে, প্রয়োজনে readonly-ঢাকনায় সযত্নে।</div>
  <div class="diagram">
    <div class="diag-title">Ancestral Spring — One provide, Any-Depth inject</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowJ11" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#7ee0b0"/></marker></defs>
      <rect x="185" y="12" width="190" height="64" rx="11" fill="rgba(66,184,131,0.12)" stroke="#42b883" stroke-width="1.6"/>
      <text x="280" y="33" text-anchor="middle" fill="#7ee0b0" font-size="9" font-weight="700">🫗 ঊর্ধ্বতন-উঠান</text>
      <text x="280" y="48" text-anchor="middle" fill="#94a3b8" font-size="7">provide(ThemeCtx, readonly(theme))</text>
      <text x="280" y="62" text-anchor="middle" fill="#64748b" font-size="6.5">+ setTheme ক্রিয়া — বদল-খবরের পথ</text>
      <rect x="185" y="104" width="190" height="46" rx="10" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="123" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">মাঝের-উঠান × N</text>
      <text x="280" y="138" text-anchor="middle" fill="#64748b" font-size="6.5">বালতি-ধরে-না — প্রপ-বইবে-না</text>
      <rect x="100" y="182" width="160" height="56" rx="10" fill="rgba(66,184,131,0.08)" stroke="#42b883" stroke-width="1.4"/>
      <text x="180" y="201" text-anchor="middle" fill="#7ee0b0" font-size="7.5" font-weight="700">প্রজন্ম-৪: InputLabel</text>
      <text x="180" y="215" text-anchor="middle" fill="#94a3b8" font-size="6.5">inject(ThemeCtx) — সরাসরি</text>
      <text x="180" y="228" text-anchor="middle" fill="#64748b" font-size="6">ডিফল্ট-সহ নিরাপদ</text>
      <rect x="300" y="182" width="160" height="56" rx="10" fill="rgba(66,184,131,0.08)" stroke="#42b883" stroke-width="1.4"/>
      <text x="380" y="201" text-anchor="middle" fill="#7ee0b0" font-size="7.5" font-weight="700">প্রজন্ম-৬: DeepField</text>
      <text x="380" y="215" text-anchor="middle" fill="#94a3b8" font-size="6.5">inject(ThemeCtx) — যত-গভীরেই</text>
      <text x="380" y="228" text-anchor="middle" fill="#64748b" font-size="6">হাতবদল-শূন্য</text>
      <line x1="280" y1="76" x2="280" y2="102" stroke="#7ee0b0" stroke-width="1.8" marker-end="url(#arrowJ11)"/>
      <line x1="280" y1="150" x2="200" y2="180" stroke="#7ee0b0" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrowJ11)"/>
      <line x1="290" y1="150" x2="368" y2="180" stroke="#7ee0b0" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrowJ11)"/>
      <rect x="15" y="258" width="530" height="30" rx="9" fill="rgba(129,140,248,0.07)" stroke="#818cf8" stroke-width="1.2"/>
      <text x="280" y="277" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="600">কী = InjectionKey&lt;T&gt; খোদাই · বদল = ক্রিয়া-পথ · ১-২ স্তরে props-ই · ক্রস-পর্দা-সত্য = স্টোর</text>
      <text x="280" y="298" text-anchor="middle" fill="#64748b" font-size="8">দান ঊর্ধ্ব থেকে অবিচ্ছিন্ন নামে — প্রজন্ম শুধু পাত্র ধরে, মালিক হয় না</text>
    </svg>
    <div class="diag-cap">পাঁচ-হাতবদলের বালতি-বৃষ্টি নয় — এক নল বংশ-জুড়ে: টাইপড-কী, readonly-ঢাকনা, বদল-খবরের ক্রিয়া-পথ।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ঝর্ণা-ফাঁদ:</strong> (১) স্ট্রিং-কী (<code>inject('theme')</code>) — বানান-সংঘর্ষে ভুল-কলসে নীরব-অনির্ধারিত; সবসময় Symbol-টাইপড-কী। (২) নিচে <code>theme.value = 'dark'</code> — readonly-ঢাকনায় ব্যর্থ/সতর্কতা; বদল-ক্রিয়া পথ করো। (৩) অ্যাপ-জুড়ে-সত্য inject দিয়ে ছড়ানো — স্টোরের কাজ ইনজেক্টে চাপানো; সীমা মেনে চলো।</div></div>
  <div class="secret-box">🫗 গভীর-বংশে ঝর্ণা খোলো: provide টাইপড-কীতে, inject ডিফল্টসহ, বদল ক্রিয়া-পথে — বালতি-বাহক বংশ বিদায়। / Provide once with typed keys; inject anywhere with defaults; change via action.</div>`,
  senior: {
    title: "provide/inject Card",
    body: `<p><strong>কী</strong>: <code>InjectionKey&lt;T&gt;</code> = Symbol (টাইপড)। <strong>উজান</strong>: <code>provide(k, state)</code> — রেফ-সহ দিলে নিচে প্রতিক্রিয়া-জীবিত; শাসনে <code>readonly()</code>। <strong>ভাটি</strong>: <code>inject(k, default)</code> / ফ্যাক্টরি-ডিফল্ট (তৃতীয়-আর্গ true)। <strong>বদল-পথ</strong>: state+action-অবজেক্ট provide → নিচ ক্রিয়া কল। <strong>ব্যবহার-সীমা</strong>: ৩+ স্তর-গভীর/লাইব্রেরি-অন্তরঙ্গ; ১-২ স্তরে props; ক্রস-পর্দা-সত্য → স্টোর (LP-নির্বাচনের কারণ)।</p>`
  }
});

doors.push({
  num: 12,
  icon: "🌀",
  color: "#7ee0b0",
  name: "উন্নত যন্ত্রের বারান্দা",
  subtitle: "The Advanced Balcony — Dynamic/Async, Teleport, Suspense, keep-alive",
  tech: "component :is, markRaw, defineAsyncComponent, Teleport (defer), Suspense, KeepAlive (include/activate)",
  spirit: "তাহরীফ — taḥrīf (transposition: moving without changing essence)",
  secret: "কম্পোনেন্ট রাতে বদলায় (:is+markRaw), দেরিতে আসে (async+স্কেলটন), অন্য দেয়ালে ফুটে (Teleport defer), অপেক্ষায় সাজে (Suspense), ঘুমায়-জাগে (KeepAlive) — সারাংশ অক্ষত।",
  recall: {
    q: "component :is-এ বস্তু সরাসরি দিলে কী হয়?",
    qen: "What happens passing a raw object to :is?",
    a: "Vue তাকে reactive-বানাতে চায় — অপ্রয়োজনীয়-গভীর-প্রতিক্রিয়া + সতর্কতা; markRaw দিয়ে চিহ্নিত করো ('এটি বস্তু-নয়, উপাদান'), তারপর :is-এ বাঁধো।",
    aen: "Vue tries to make it deeply reactive — wasteful; wrap the component in markRaw before binding to :is."
  },
  story: `<p class="scene-setting">বারো নম্বর ঘর কারখানার সবচেয়ে উঁচু বারান্দা — এখানে পাঁচটা অসাধারণ যন্ত্র একসাথে দাঁড়িয়ে। বারান্দার মালিক <strong>নাইমা
  খালা</strong> — তাঁর চুড়িবাজি প্রায় অদৃশ্য হাতের কৌশলে। <strong>যন্ত্র এক — রাতের-ঘুরানো-ফ্রেম</strong> (<code>:is</code>): দেয়ালে এক ফ্রেম, রাতে-রাতে ভেতরের ছবি
  বদলায় — কারিগর চাইলে markRaw-মোহরে ছবি মুড়িয়ে দেয় যেন ফ্রেম তার ভেতর নাড়াতে না পারে। <strong>যন্ত্র দুই — দেরিতে-আসা-মাল</strong>
  (<code>defineAsyncComponent</code>): দূরের কারখানা থেকে ভারী অংশ লোড হয়ে আসে, ততক্ষণ স্কেলটন-দেখানো কাপড় ঝুলে। <strong>যন্ত্র তিন — অন্য-দেয়ালে-
  ফুটা</strong> (<code>Teleport</code>): মোডাল-জাতীয় জিনিস বংশের গভীরে থেকেও শরীরের একদম-শেষ দেয়ালে ফুটে — z-index-জট ও ওভারফ্লো-ফাঁদ এড়িয়ে;
  3.5-এর <code>defer</code>-পাখায় লক্ষ্য-দেয়াল পরে-বাঁধলেও চলে। <strong>যন্ত্র চার — অপেক্ষার-মঞ্চ</strong> (<code>Suspense</code>): async-সেটআপ-উপাদান
  প্রস্তুত হওয়া পর্যন্ত fallback-পর্দা নামে থাকে, তারপর পাল্টে যায়। <strong>যন্ত্র পাঁচ — ঘুমের-আলমারি</strong> (<code>KeepAlive</code>): ট্যাব বদলালে
  পুরনো-পর্দা নষ্ট হয় না, ঘুমায় (deactivated) আর ফিরলে জাগে (activated) — স্ক্রল, ফর্ম, মন সব যথাস্থান।</p>
  <p class="scene-setting en">Room twelve is the highest balcony — five extraordinary machines standing together.
  The owner, <strong>Naima Khala</strong> — bangles moving with near-invisible skill. <strong>Machine one — the
  night-turning frame</strong> (<code>:is</code>): one frame on the wall, its picture changes nightly — the artisan
  wraps pictures in the markRaw seal so the frame cannot stir the inside. <strong>Machine two — late-arriving
  cargo</strong> (<code>defineAsyncComponent</code>): heavy parts load from a distant workshop while skeleton-cloth
  hangs in place. <strong>Machine three — sprouting on another wall</strong> (<code>Teleport</code>): modal-like
  things sprout at the body's outermost wall even when born deep in the lineage — escaping z-index knots and
  overflow-traps; with 3.5's <code>defer</code> fin, the target wall may even be mounted later. <strong>Machine four —
  the waiting stage</strong> (<code>Suspense</code>): a fallback curtain hangs until async-setup components are ready,
  then swaps. <strong>Machine five — the sleep-wardrobe</strong> (<code>KeepAlive</code>): on tab-switch the old
  screen isn't destroyed — it sleeps (deactivated) and wakes (activated) with scroll, form, and mind intact.</p>
  <div class="dialogue">('"এক কাঠে সব ঘর হয় না," শেখ নেয়ামত উঠোনে বাঁকানো তক্তা দেখালেন, "সস্তার ঘর বারান্দায় বসে, ভারী ঘর পাথরের মাথায়। তাই বটল-মেশিনে সবাই সমান — সামনে থাকলে আমি এক প্রশ্নে চিনে ফেলি, কে বানিয়েছে। নাম-না-জানা কাঠ দিয়ে মসজিদের দরজা বানাতে গিয়েছিলাম — দুই বছরে ফাটল ধরেছিল।"', 'তক্তার আঁকাবাঁকা রেখা আঙুলে ঠেকে বোঝা যায় — কোন কাঠ কোন ভার বইতে পারে, তা চেহারায়ই লেখা।')</div><div class="dialogue en">"One wood doesn't make every house — cheap rooms sit on the arcade, heavy rooms on stone. Unknown wood once cracked my mosque door in two years."</div>
  <div class="code-block">উন্নত-পাঁচযন্ত্র — প্রতিটির ছাঁচ (Vue 3.5)

① রাতের-ফ্রেম — &lt;component :is&gt;:
  &lt;component :is="currentTab" /&gt;
  const tabs = {
    profile: markRaw(ProfilePanel),   // মোহর — নাড়াবে-না
    billing: markRaw(BillingPanel),
  }
  const currentTab = shallowRef(tabs.profile)
  · স্ট্রিং-নাম সমাধান: স্থানীয়-রেজিস্টার্ড
    &lt;component :is="ProfilePanel" /&gt; = &lt;ProfilePanel /&gt;
  ⚠ raw-অবজেক্ট হাতে-বাঁধলে reactive-প্রয়াস+
    সতর্কতা — markRaw বাধ্যতামূলক-শৃঙ্খলা

② দেরিতে-মাল — defineAsyncComponent:
  const HeavyChart = defineAsyncComponent(
    () =&gt; import('./HeavyChart.vue'))
  · লোডিং+ব্যর্থতার-কাপড়:
  const HeavyChart = defineAsyncComponent({
    loader: () =&gt; import('./HeavyChart.vue'),
    loadingComponent: SkeletonChart,
    errorComponent: ChartError,
    delay: 200,          // ফ্ল্যাশ-রোধ
    timeout: 10000,
  })
  · রুট-স্তরে ভারী-পর্দা: রাউটারের lazy
    () =&gt; import(…) — দরজা ১৩-এ একই-সুতো

③ অন্য-দেয়ালে-ফুটা — Teleport:
  &lt;Teleport to="#modal-root"&gt;
    &lt;div class="modal"&gt;…&lt;/div&gt;
  &lt;/Teleport&gt;
  · বংশ-গভীরে জন্ম, DOM-শেষে প্রদর্শন —
    z-index/ওভারফ্লো/প্যাডিং-ফাঁদ এড়ানো
  · Vue 3.5 — defer-পাখা:
    &lt;Teleport defer to="#late-root"&gt;
    লক্ষ্য-দেয়াল একই-রেন্ডারে পরে-লাগলেও কাজ
  · শর্ত-টগল: :disabled="isMobile"

④ অপেক্ষার-মঞ্চ — Suspense:
  &lt;Suspense&gt;
    &lt;template #default&gt;&lt;AsyncDashboard /&gt;&lt;/template&gt;
    &lt;template #fallback&gt;&lt;SkeletonScreen /&gt;&lt;/template&gt;
  &lt;/Suspense&gt;
  · top-level await-সেটআপ প্রস্তুত হওয়া পর্যন্ত
    fallback; তারপর পাল্টে
  · onErrorCaptured-সাথে ব্যর্থতা-নিয়ন্ত্রণ
  ⚠ পরীক্ষায়-সমর্থন পাতলা — সাধারণ পথ:
    onMounted+স্কেলটন (LP-ধারা) যথেষ্ট

⑤ ঘুমের-আলমারি — KeepAlive:
  &lt;KeepAlive include="TabA,TabB" :max="5"&gt;
    &lt;component :is="currentTab" /&gt;
  &lt;/KeepAlive&gt;
  · আনমাউন্ট-নয় — deactivated (ঘুম) / activated (জাগা)
  · include/exclude (নাম-ভিত্তি), :max (LRU-সীমা)
  · প্রজন্ম-পর্দা যেগুলো দামি-পুনর্নির্মাণ (ফর্ম/
    ফিল্টার-অবস্থা) — সেগুলোর বিশ্রামাগার

পাঁচযন্ত্র-একসাথে (ট্যাব-অ্যাপ নকশা):
  &lt;KeepAlive :max="4"&gt;
    &lt;Suspense&gt;
      &lt;component :is="tabs[cur]" /&gt;
      &lt;template #fallback&gt;&lt;Skeleton /&gt;&lt;/template&gt;
    &lt;/Suspense&gt;
  &lt;/KeepAlive&gt;
  …মোডালগুলো Teleport-এ, ভারী-প্যানেল async</div>
  <div class="verse">তাহরীফ — স্থানান্তর অবিকৃতির সাথে: সত্তা স্থান বদলায়, ধাতু বদলায় না। "পাহাড়কে সে দেখবে ভ্রমে চলমান" (২৭:৮৮-এর ভাব) — চলমানতার দৃষ্টিনন্দন, কিন্তু পাহাড়ের সত্য অক্ষত। নাইমা খালার পাঁচযন্ত্র সেই তাহরীফের কারিগরি পাঠশালা: ফ্রেম বদলায় ছবি নয়, দেয়াল বদলায় মূর্তি নয়, ঘুম আসে মৃত্যু নয় — স্থান-কাল-অবস্থার স্থানান্তর, সারাংশের নয়। যে কারিগর স্থানান্তরকে ধ্বংস ভাবে, সে হয় সব-কিছু পুনর্নির্মাণ করে ক্লান্ত, নয় সব-কিছু ধরে রাখে ফুলিয়ে।</div>
  <div class="diagram">
    <div class="diag-title">The Advanced Balcony — Five Machines</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="12" width="164" height="104" rx="10" fill="rgba(66,184,131,0.09)" stroke="#42b883" stroke-width="1.4"/>
      <text x="97" y="33" text-anchor="middle" fill="#7ee0b0" font-size="8" font-weight="700">🖼️ :is + markRaw</text>
      <text x="97" y="48" text-anchor="middle" fill="#94a3b8" font-size="6.5">রাতে-ফ্রেম-বদল</text>
      <text x="97" y="62" text-anchor="middle" fill="#64748b" font-size="6.5">shallowRef + markRaw(Comp)</text>
      <text x="97" y="78" text-anchor="middle" fill="#7ee0b0" font-size="6.5">⚠ raw-বাঁধা = reactive-অপচয়</text>
      <text x="97" y="98" text-anchor="middle" fill="#64748b" font-size="6">ট্যাব-বদলের মূল-যন্ত্র</text>
      <rect x="196" y="12" width="164" height="104" rx="10" fill="rgba(66,184,131,0.09)" stroke="#42b883" stroke-width="1.4"/>
      <text x="278" y="33" text-anchor="middle" fill="#7ee0b0" font-size="8" font-weight="700">🚚 async component</text>
      <text x="278" y="48" text-anchor="middle" fill="#94a3b8" font-size="6.5">দেরিতে-আসা-ভারী-মাল</text>
      <text x="278" y="62" text-anchor="middle" fill="#64748b" font-size="6.5">loading/error + delay/timeout</text>
      <text x="278" y="78" text-anchor="middle" fill="#7ee0b0" font-size="6.5">বান্ডেল-ভাগ + স্কেলটন</text>
      <text x="278" y="98" text-anchor="middle" fill="#64748b" font-size="6">রাউট-লেজির আত্মীয় (দরজা ১৩)</text>
      <rect x="377" y="12" width="168" height="104" rx="10" fill="rgba(66,184,131,0.09)" stroke="#42b883" stroke-width="1.4"/>
      <text x="461" y="33" text-anchor="middle" fill="#7ee0b0" font-size="8" font-weight="700">🌀 Teleport (defer)</text>
      <text x="461" y="48" text-anchor="middle" fill="#94a3b8" font-size="6.5">অন্য-দেয়ালে-ফুটা</text>
      <text x="461" y="62" text-anchor="middle" fill="#64748b" font-size="6.5">to="#modal-root" · :disabled</text>
      <text x="461" y="78" text-anchor="middle" fill="#7ee0b0" font-size="6.5">3.5: defer — লেট-টার্গেট ও চলে</text>
      <text x="461" y="98" text-anchor="middle" fill="#64748b" font-size="6">z-index/ওভারফ্লো-ফাঁদ-মুক্তি</text>
      <rect x="105" y="136" width="164" height="104" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="187" y="157" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">🎭 Suspense</text>
      <text x="187" y="172" text-anchor="middle" fill="#94a3b8" font-size="6.5">অপেক্ষার-মঞ্চ</text>
      <text x="187" y="186" text-anchor="middle" fill="#64748b" font-size="6.5">#default + #fallback</text>
      <text x="187" y="202" text-anchor="middle" fill="#a5b4fc" font-size="6.5">top-level-await প্রস্তুত-পর্যন্ত</text>
      <text x="187" y="222" text-anchor="middle" fill="#64748b" font-size="6">সাধারণ-পথ: onMounted+স্কেলটন</text>
      <rect x="290" y="136" width="164" height="104" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="372" y="157" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">🛏️ KeepAlive</text>
      <text x="372" y="172" text-anchor="middle" fill="#94a3b8" font-size="6.5">ঘুমের-আলমারি</text>
      <text x="372" y="186" text-anchor="middle" fill="#64748b" font-size="6.5">include/exclude · :max (LRU)</text>
      <text x="372" y="202" text-anchor="middle" fill="#fcd34d" font-size="6.5">activated/deactivated — জাগা/ঘুম</text>
      <text x="372" y="222" text-anchor="middle" fill="#64748b" font-size="6">ফর্ম-ফিল্টার-স্ক্রল যথাস্থান</text>
      <rect x="15" y="258" width="530" height="34" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="279" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">একসাথে: KeepAlive ⊃ Suspense ⊃ component :is + টেলিপোর্টেড মোডাল + async-প্যানেল — স্থানান্তর অবিকৃতির সাথে</text>
      <text x="280" y="301" text-anchor="middle" fill="#64748b" font-size="8">ফ্রেম বদলায় ছবি নয়, ঘুম মৃত্যু নয় — পাঁচযন্ত্রে সারাংশ-অক্ষত স্থানান্তর</text>
    </svg>
    <div class="diag-cap">বারান্দার পাঁচযন্ত্র: বদল (is), বিলম্ব (async), স্থানান্তর (Teleport), অপেক্ষা (Suspense), ঘুম (KeepAlive) — প্রতিটি নিজ-নিজ ফাঁদ-মুক্ত পথে।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>বারান্দা-ফাঁদ:</strong> (১) <code>:is</code>-এ markRaw-বিহীন কম্পোনেন্ট-অবজেক্ট — গভীর-প্রতিক্রিয়ার অপচয়+সতর্কতা। (২) Teleport-লক্ষ্য মাউন্ট-পূর্বে থাকা — পুরনো বিধিতে ব্যর্থ; 3.5-এ <code>defer</code> দাও বা লক্ষ্য-এলিমেন্ট index.html-এ আগে-রাখো। (৩) KeepAlive-এ সাইড-এফেক্ট-ভারী উপাদান <code>include</code>-বিহীন — মেমরি ফুলবে; নাম-তালিকা সচেতন রাখো আর <code>:max</code> বাঁধো।</div></div>
  <div class="secret-box">🌀 উন্নত-পাঁচ: :is+markRaw বদলায়, async বিলম্বিত-আনে, Teleport defer-সহ স্থানান্তরে, Suspense অপেক্ষা-সাজায়, KeepAlive ঘুম-জাগায় — সারাংশ অক্ষত। / Five machines move place and time, never essence.</div>`,
  senior: {
    title: "Advanced Components Card",
    body: `<p><strong>:is</strong>: <code>shallowRef + markRaw(Comp)</code>; স্ট্রিং-নাম স্থানীয়-রেজিস্ট্রিতে। <strong>async</strong>: defineAsyncComponent + loading/error/delay/timeout — বান্ডেল-ভাগ। <strong>Teleport</strong>: to="#root" (z-index/ওভারফ্লো-মুক্তি), 3.5 <code>defer</code> (লেট-টার্গেট), :disabled। <strong>Suspense</strong>: default+fallback; top-level-await; সাধারণ-বিকল্প onMounted+স্কেলটন (LP-ধারা)। <strong>KeepAlive</strong>: include/exclude/:max; activated/deactivated।</p>`
  }
});
