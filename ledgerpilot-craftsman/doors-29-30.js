// doors-29-30.js — The Ledger Craftsman (LedgerPilot deep-dive)

doors.push({
  num: 29,
  icon: "⚡",
  color: "#f472b6",
  name: "প্রতিবিম্বের শ্বাস",
  subtitle: "The Mirror's Breath — Vue Reactivity & TS Types Deep-Dive",
  tech: "ref vs reactive, computed/watch, props one-way flow, lifecycle, TS generics from generated schema, narrowing",
  spirit: "সাক্ষাৎ — direct witnessing: the reflection changes because the thing changed",
  secret: "ডেটা বদলাও, DOM ছোঁয়ো না — ref-এর .value, computed-এর স্মৃতি, props-এর একমুখী নদী; টাইপ জেনারেটেড না হলে সে অনুমান।",
  recall: {
    q: "props-এ সরাসরি লেখা (mutate) করলে কী হয়?",
    qen: "What happens if you mutate a prop?",
    a: "Vue সতর্ক করে + পিতা-পুত্র দ্বৈত-সত্য — একমুখী নদী ভাঙে; emit করে পিতাকে বদলাতে বলো, বা স্থানীয় ref-এ কপি নাও।",
    aen: "A warning plus dual truth; emit upward instead, or copy into a local ref."
  },
  story: `<p class="scene-setting">কাচঘরের ভেতরের কক্ষ — জোহরা আপা এখানে শেখান <strong>আয়নার শ্বাস</strong>। তাঁর হাতে তিন যন্ত্র। <strong>প্রথম —
  স্পর্শ-কাচ</strong> (ref): একটা মান, ছুঁলে বাজে (<code>.value</code>), বদলালে প্রতিবিম্ব সাথে সাথে। <strong>দ্বিতীয় —
  স্মৃতি-কাচ</strong> (computed): যা গণনা করে মনে রাখে — মূল না বদলালে দ্বিতীয়বার গণনা করে না, পুরনো উত্তর ফেরায়।
  <strong>তৃতীয় — পাহারা-কাচ</strong> (watch): চুপচাপ তাকিয়ে থাকে, বদলালে পাশের কাজটা চালায় — কিন্তু জোহরা সাবধান
  করেন, "পাহারা দিয়ে গণনা করো না — গণনা computed-এর কাজ; watch পার্শ্ব-প্রভাবের (fetch/ইতিহাস)।" আর দেয়ালে এক
  সাইনবোর্ড: <strong>"নদী একমুখে বয়"</strong> — পিতা-থেকে-পুত্র props; পুত্র বদলাতে চাইলে ফিরতি-পাখি (emit) পাঠায়,
  নিজে হাত দেয় না। নতুন শাগিরদ একদিন জিজ্ঞেস করে — "আমি ব্রাউজারে DOM বদলে দিলাম, কেন ফিরে এল?" জোহরা হাসেন —
  <strong>"তুমি প্রতিবিম্ব মুছে এঁকেছ, বস্তু বদলাওনি। পরের শ্বাসে আয়না নিজের সত্য ফিরিয়ে আনবে। বস্তু বদলাও —
  প্রতিবিম্ব নয়।"</strong></p>
  <p class="scene-setting en">The inner chamber of the glasshouse — here Zohra teaches <strong>the mirror's
  breath</strong>. Three instruments in hand. <strong>First — touch-glass</strong> (ref): one value, rings
  when touched (<code>.value</code>), reflection follows instantly. <strong>Second — memory-glass</strong>
  (computed): calculates once and remembers — unchanged source returns the old answer free.
  <strong>Third — watch-glass</strong> (watch): stares quietly, runs side-work when change comes — but Zohra
  warns, "never compute in a watcher — computation is computed's job; watch is for side-effects (fetch,
  history)." And one signboard on the wall: <strong>"the river flows one way"</strong> — parent-to-child
  props; a child wanting change sends a return-bird (emit), never its own hand. A newcomer asks — "I edited
  the DOM in devtools; why did it revert?" Zohra smiles — <strong>"you redrew the reflection, not the thing.
  At the next breath the mirror restores its truth. Change the thing — not the reflection."</strong></p>
  <div class="code-block">Vue 3.5 + TS 5.8 — প্রকল্প-রীতির নমুনায়

তিন কাচ (Composition API):
  const loading = ref(false)          // স্পর্শ: loading.value
  const rows = ref<InvoiceRow[]>([])
  const totalDue = computed(() =>
      rows.value.reduce((s, r) => s + r.amount, 0))
    // মূল না বদলালে পুনর্গণনা নেই
  watch(page, (p, old) => fetchRows(p), { immediate: false })
    // পার্শ্ব-প্রভাব কেবল; গণনা নয়
  · watchEffect — স্বয়ংক্রিয়-নির্ভরতা (সাবধানে:
    অতিরিক্ত চালানো হয়)
  · props আলাদা: defineProps&lt;{ id: number }&gt;()
    — props.x পড়া যায়, লেখা নয় (একমুখী নদী)

শ্বাসের ছন্দ (lifecycle):
  onMounted(() => fetchRows())        // প্রথম শ্বাস
  onUnmounted(() => controller.abort())
    // প্রস্থান-পরিচ্ছদ: মুলতুবি fetch/টাইমার বন্ধ
  · onBeforeUnmount-এ SSE/শ্রোতা খোলো

একমুখী নদী (props → emit):
  // পুত্র:
  const emit = defineEmits&lt;{
    (e: 'apply', id: number): void
  }&gt;()
  function onApply() { emit('apply', props.id) }
  // পিতা: &lt;Child @apply="handleApply" /&gt;
  · props-মিউটেট নিষেধ — সতর্কবার্তা+দ্বৈত-সত্য
  · দরকার হলে স্থানীয় কপি: const local = ref(props.x)

টাইপ-স্রোত (জেনারেটেড-সত্য):
  import type { components } from '@/core/types/api'
  type BatchRow =
    components['schemas']['InvoiceBatchSummary']
  · এই নামগুলো api.generated.ts-এর — হাতে
    লিখলে // verified against backend on
    <date> টিকা বাধ্যতামূলক
  · ন্যারোয়িং: if (x == null) return;
    union-ধরনে switch (x.kind) — অনুমান নয়
  · any নিষেধ; unknown+ন্যারো দরকারে

composable-ছাঁচ (প্রকল্পের মান):
  export function useBatchList() {
    const rows = ref&lt;BatchRow[]&gt;([])
    const loading = ref(false)
    async function fetch() { loading.value = true
      try { rows.value = await svc.list() }
      finally { loading.value = false } }
    onMounted(fetch)
    return { rows, loading, refresh: fetch }
  }
  · সবসময় অবস্থা+ক্রিয়া একসাথে ফেরত — ছড়িয়ে নয়

স্টোর-স্পর্শ (দরজা ২১-এর দপ্তর):
  const auth = useAuthStore()        // storeToRefs
  const { user } = storeToRefs(auth) // — প্রতিক্রিয়া
    রাখতে হলে ref-এ আনর‍্যাপ (সরাসরি ডিস্ট্রাকচারে
    প্রতিক্রিয়া মরে)
  ক্রিয়া: auth.logout() সরাসরি ঠিক</div>
  <div class="verse">সাক্ষাৎ — প্রত্যক্ষ দর্শন: আয়নার শাস্ত্র এই যে সে কখনো নিজে সিদ্ধান্ত নেয় না — বস্তুর অনুগামী। "যে তার নফসকে শুদ্ধ করেছে সে সফল" নয় বরং প্রতিবিম্বের নৈপুণ্য হলো বিশ্বস্ততা: বস্তু বদলালে বদলানো, না বদলালে স্থির থাকা, আর নিজে থেকে কিছু বানানো নয়। জোহরার সাইনবোর্ডও তাই — নদী একমুখে; উল্টো স্রোতে সাঁতার দিলে পিতা-পুত্র দুই সত্য, আর দুই সত্য মানে কোনো সত্য নয়।</div>
  <div class="diagram">
    <div class="diag-title">The Mirror's Breath — Reactivity Flow</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowV29" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="12" width="530" height="30" rx="8" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="31" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="600">বস্তু বদলাও → আয়না শ্বাস নেয় → প্রতিবিম্ব বদলায় (DOM-কে হাত দিয়ে নয়)</text>
      <rect x="15" y="56" width="165" height="104" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="97" y="78" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="700">🖐️ স্পর্শ-কাচ</text>
      <text x="97" y="94" text-anchor="middle" fill="#94a3b8" font-size="8">ref — এক মান, .value-স্পর্শ</text>
      <text x="97" y="110" text-anchor="middle" fill="#94a3b8" font-size="8">ref&lt;T&gt;(initial)</text>
      <text x="97" y="128" text-anchor="middle" fill="#64748b" font-size="8">স্ক্রিপ্টে .value, টেমপ্লেটে খালি</text>
      <text x="97" y="148" text-anchor="middle" fill="#64748b" font-size="8">শ্বাস: লেখার সাথে সাথে</text>
      <rect x="200" y="56" width="160" height="104" rx="10" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="280" y="78" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🧠 স্মৃতি-কাচ</text>
      <text x="280" y="94" text-anchor="middle" fill="#94a3b8" font-size="8">computed — গণনা+ক্যাশ</text>
      <text x="280" y="110" text-anchor="middle" fill="#94a3b8" font-size="8">মূল অপরিবর্তিত → পুরনো উত্তর</text>
      <text x="280" y="128" text-anchor="middle" fill="#818cf8" font-size="8">গণনা এখানেই, watch-এ নয়</text>
      <text x="280" y="148" text-anchor="middle" fill="#64748b" font-size="8">derived-সত্যের একমাত্র ঘর</text>
      <rect x="380" y="56" width="165" height="104" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="462" y="78" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">👁️ পাহারা-কাচ</text>
      <text x="462" y="94" text-anchor="middle" fill="#94a3b8" font-size="8">watch — পার্শ্ব-প্রভাব</text>
      <text x="462" y="110" text-anchor="middle" fill="#94a3b8" font-size="8">fetch · ইতিহাস · টাইমার</text>
      <text x="462" y="128" text-anchor="middle" fill="#fbbf24" font-size="8">watchEffect সাবধানে</text>
      <text x="462" y="148" text-anchor="middle" fill="#64748b" font-size="8">immediate/deep-সুইচ চেনো</text>
      <rect x="60" y="184" width="440" height="42" rx="10" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.4"/>
      <text x="280" y="203" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">🏞️ একমুখী নদী: props (পিতা→পুত্র) · emit (ফিরতি-পাখি) · মিউটেট নিষেধ</text>
      <text x="280" y="218" text-anchor="middle" fill="#94a3b8" font-size="8">onMounted-এ প্রথম শ্বাস · onUnmounted-এ abort/শ্রোতা-বন্ধ · storeToRefs-এ প্রতিক্রিয়া-রক্ষা</text>
      <rect x="60" y="242" width="440" height="42" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="260" text-anchor="middle" fill="#cbd5e1" font-size="8" font-weight="600">📜 টাইপ-স্রোত: components['schemas'][…] ← api.generated.ts</text>
      <text x="280" y="275" text-anchor="middle" fill="#94a3b8" font-size="8">হাতে-লেখায় verified-টিকা · any নিষেধ (unknown+ন্যারো) · composable = অবস্থা+ক্রিয়া একসাথে</text>
      <line x1="280" y1="42" x2="280" y2="54" stroke="#5eead4" stroke-width="1.4" marker-end="url(#arrowV29)"/>
      <text x="280" y="302" text-anchor="middle" fill="#64748b" font-size="8.5">বস্তু → শ্বাস → প্রতিবিম্ব; আয়না নিজে কিছু বানায় না — বিশ্বস্ত অনুগামীই তার ধর্ম</text>
    </svg>
    <div class="diag-cap">তিন কাচ (ref/computed/watch) + একমুখী নদী + জেনারেটেড টাইপ-স্রোত — Vue-র শ্বাসের পূর্ণ মানচিত্র।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>আয়না-ফাঁদ:</strong> (১) স্টোর থেকে সরাসরি ডিস্ট্রাকচার (<code>const { user } = useAuthStore()</code>) — প্রতিক্রিয়া মরে; <code>storeToRefs</code> ধরো। (২) watch-এ গণনা লেখা — দ্বৈত গণনা আর লুপ-ঝুঁকি; computed-এ নাও। (৩) <code>props.x = y</code> — একমুখী ভাঙে; emit বা স্থানীয় কপি। (৪) <code>onUnmounted</code> ভুলে মুলতুবি fetch/SSE-শ্রোতা — মেমরি-ফাঁদ আর ভুত-আপডেট।</div></div>
  <div class="secret-box">⚡ বস্তু বদলাও, প্রতিবিম্ব নয়: ref-স্পর্শ, computed-স্মৃতি, watch-পাহারা, নদী একমুখে — আর টাইপ জেনারেটেড না হলে সে অনুমান মাত্র। / Change the thing, not the reflection; three glasses, one-way river, generated types only.</div>`,
  senior: {
    title: "Vue Reactivity + TS Card",
    body: `<p><strong>ref</strong> (.value-স্ক্রিপ্টে) · <strong>computed</strong> (গণনা+ক্যাশ; watch-এ গণনা নিষেধ) · <strong>watch</strong> (পার্শ্ব-প্রভাব: fetch/ইতিহাস; watchEffect সাবধানে)। Lifecycle: onMounted-প্রথম-fetch, onBeforeUnmount/onUnmounted-এ abort+শ্রোতা-বন্ধ। Props একমুখী — <code>defineProps&lt;T&gt;</code>, মিউটেট নিষেধ; emit (<code>defineEmits&lt;{...}&gt;</code>) বা স্থানীয় ref-কপি। টাইপ: <code>components['schemas'][…]</code> ← generated; হাতে-লেখায় verified-টিকা; any→unknown+ন্যারো। Composable-ছাঁচ: অবস্থা+ক্রিয়া একসাথে ফেরত। স্টোর: <code>storeToRefs</code>। ফাঁদ: সরাসরি-ডিস্ট্রাকচার, watch-গণনা, props-লেখা, unmounted-বিস্মৃত।</p>`
  }
});


doors.push({
  num: 30,
  icon: "🏪",
  color: "#34d399",
  name: "দশ দোকানের বাজার",
  subtitle: "The Market of Ten Shops — How Each Feature Works",
  tech: "10 FE features ↔ BE apps pairing, per-feature workflow, the screens each role lives in",
  spirit: "জামাত — jamā'ah (congregation: one prayer, distinct rows)",
  secret: "প্রতিটি দোকানের নিজস্ব কর্মসূত্র — কে ঢোকে, কী বিক্রি হয়, কোন কারখানা থেকে মাল আসে।",
  recall: {
    q: "Sai-এর দৈনিক কাজের জন্য কোন কোন দোকান (ফিচার) লাগে?",
    qen: "Which feature shops does Sai's daily work use?",
    a: "data-processing (ড্যাশবোর্ড, পেমেন্ট-হিস্টরি, চেকলিস্ট, ইনভেন্টরি) + invoices (জেনারেশন, ব্যাচ) + credits — BE-তে invoices+billing+xero।",
    aen: "data-processing + invoices + credits — backed by the invoices/billing/xero apps."
  },
  story: `<p class="scene-setting">শহরের প্রধান বাজার-পরিদর্শক <strong>রহিমা খাতুন</strong> — তাঁর কোমরে দশটা সিলমোহরের আংটি,
  প্রতিটা এক দোকানের। ভোরে তিনি হাঁটেন গলি ধরে, আর প্রতিটি দোকানের সামনে দাঁড়িয়ে জানেন — <strong>কে ঢোকে, কখন
  ঢোকে, কী বিক্রি হয়, পেছনের কোন কারখানা থেকে মাল আসে</strong>। কামারের দোকানে ঢোকে মূলত পিটার (টাইমশিট তোলেন),
  নিলাম-ঘরে ভিকি (রিভিউ করেন), কোষাগারে সাই (ক্রেডিট মেলান), নদী-ঘাটে ওয়েন (টাকা পাঠান)। একই শহর — কিন্তু
  প্রতিটি মানুষের দিন আলাদা দোকান-ঘুরে গড়া। যে কারিগর নতুন দোকান খুলতে চায়, রহিমা প্রথমেই নিয়ে যান এই
  বাজার-ঘুরে — <strong>"আগে দেখ কেমন চলে, তারপর খোলো।"</strong></p>
  <p class="scene-setting en">The chief market inspector <strong>Rahima Khatun</strong> — ten seal-rings at her
  belt, one per shop. Dawn walks: at each door she knows — <strong>who enters, when, what sells, which workshop
  supplies it</strong>. Peter enters the smithy (timesheets), Vicki the auction-room (review), Sai the treasury
  (credits), Owen the river-ghat (money). One city — each person's day built around different shops. A craftsman
  wanting to open a new shop is first taken on this round: <strong>"see how the market runs, then open."</strong></p>
  <div class="code-block">দশটি দোকান — কে চালায়, কী হয়, পেছনের কারখানা

① auth ↔ accounts
  কাহিনি: LoginView (+dev quick-login), register, পাসওয়ার্ড-রিসেট
  তার: সেশন-কুকি + WerkzeugCompatBackend (JWT নেই)

② account ↔ accounts
  ProfileView · SettingsView · MyAccessView
  (নিজের ক্যাপাবিলিটি+ফিচার দেখা) · notification prefs

③ admin ↔ system_admin+navigation+accounts
  বৃহত্তম দোকান: users/supervisors/system-status(Xero connect/ping)/
  jobs/synthetic-placeholders/access-console(/admin/access —
  Users+Access দুই ট্যাব, ADR-0022) · role-features ম্যাট্রিক্স

④ timesheets ↔ timesheets
  Peter-এর দোকান: Upload portal → TimesheetProcessorDashboard
  → রিপোর্ট-ডিটেইল (rejected সারি + ফোর্স-ইমপোরট UI)

⑤ invoices ↔ invoices
  সবচেয়ে জটিল: generation (রিপোর্ট→ব্যাচ) · batch-detail
  (লাইন, FSM বাটন, push-মোডাল) · review-queue · drafts
  · alias-mapper · auto-min-check ট্যাব (Vicki)

⑥ payment ↔ billing
  Owen-এর দোকান: processor-dashboard · NACHA generate/
  reconcile/pre-submit ড্রিফট · payment checklist

⑦ data-processing ↔ invoices+billing+xero
  Sai-এর দোকান: ড্যাশবোর্ড · invoice-history (Saved+Xero
  upload-মোডাল #1192) · payment-history · payment-checklist
  · inventory-management (CSV আপলোড+rejects+ফোর্স)

⑧ billing ↔ billing
  cycle ম্যানেজমেন্ট (ReviewMeetingView-সহ) · exceptions
  ইনবক্স · archive

⑨ credits ↔ invoices (credits)
  CreditWorkflowView (file→approve→apply+ইনবক্স)
  · CreditLedgerView (ব্যালেন্স/অডিট)

⑩ messaging ↔ messaging
  1:1 inbox + SSE ব্যাজ + toasts (ADR-0026) — ঘণ্টার পাশে
  অপারেটর-কথা; ডোমেইন-সত্তার FK নেই

দিনের কর্মসূত্র (কে কোথায়):
  Peter: ④ → শেষ
  Sai: ⑦ ড্যাশবোর্ড → ⑤ জেনারেট → ⑨ ক্রেডিট → ⑤ রিভিউ-রাউন্ড
       → mark_exported → ⑦ payment-checklist
  Vicki: ⑤ review-queue+batch → ⑤ min-check → Xero হাতে
  Owen: ⑥ NACHA → reconcile → ⑥
  সবাই: ⑩ বার্তা + ② প্রোফাইল

নতুন দোকান খোলার আগে রহিমার ৩ প্রশ্ন:
  ১. কোন কারখানা (BE অ্যাপ) মাল দেবে? নেই → আগে কারখানা (দরজা ২৫)
  ২. কারা ঢুকবে (রোল/ফিচার-কী)? → দরজা ১৬/২০
  ৩. পুরনো দোকানে এর কাজ কি আংশিক আছে? → আংশিক হলে বাড়াও, নতুন খোলো না</div>
  <div class="verse">জামাত — "আর তোমার রবের রাস্তায় তাদেরকে সংগঠিতভাবে বের হতে বলো" নয় বরং সূরা ৬১:৪: "আল্লাহ ভালোবাসেন তাদের, যারা তাঁর রাস্তায় সারিবদ্ধভাবে লড়ে — যেন সীসা-গালানো প্রাচীর।" রহিমার বাজার সেই জামাত: দশটি সারি, এক নামাজ — প্রতিটি দোকান আলাদা, শহর এক। যে সারিবিন্যাস না জেনে নতুন সারি খোলে, সে প্রাচীর ভাঙে।</div>
  <div class="diagram">
    <div class="diag-title">Ten Shops Around the Pipeline — Who Works Where</div>
    <svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <text x="280" y="20" text-anchor="middle" fill="#64748b" font-size="9.5">উপরের সারি: শহরের ভিত (identity+admin) · নিচে: কর্মের দোকান</text>
      <rect x="15" y="35" width="105" height="58" rx="9" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="67" y="55" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="700">① auth</text>
      <text x="67" y="68" text-anchor="middle" fill="#64748b" font-size="8">লগইন/রেজিস্টার</text>
      <text x="67" y="80" text-anchor="middle" fill="#64748b" font-size="8">accounts</text>
      <rect x="130" y="35" width="105" height="58" rx="9" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="182" y="55" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="700">② account</text>
      <text x="182" y="68" text-anchor="middle" fill="#64748b" font-size="8">প্রোফাইল/MyAccess</text>
      <text x="182" y="80" text-anchor="middle" fill="#64748b" font-size="8">accounts</text>
      <rect x="245" y="35" width="150" height="58" rx="9" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="320" y="55" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">③ admin — বৃহত্তম</text>
      <text x="320" y="68" text-anchor="middle" fill="#64748b" font-size="8">users·Xero·jobs·access-console</text>
      <text x="320" y="80" text-anchor="middle" fill="#64748b" font-size="8">system_admin+nav+accounts</text>
      <rect x="405" y="35" width="140" height="58" rx="9" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.3"/>
      <text x="475" y="55" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">⑩ messaging</text>
      <text x="475" y="68" text-anchor="middle" fill="#64748b" font-size="8">1:1 inbox+SSE ব্যাজ</text>
      <text x="475" y="80" text-anchor="middle" fill="#64748b" font-size="8">messaging</text>
      <rect x="15" y="115" width="105" height="62" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="67" y="135" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">④ timesheets</text>
      <text x="67" y="148" text-anchor="middle" fill="#64748b" font-size="8">Peter: আপলোড</text>
      <text x="67" y="160" text-anchor="middle" fill="#64748b" font-size="8">timesheets</text>
      <rect x="130" y="115" width="120" height="62" rx="9" fill="rgba(45,212,191,0.12)" stroke="#2dd4bf" stroke-width="1.8"/>
      <text x="190" y="135" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">⑤ invoices ★</text>
      <text x="190" y="148" text-anchor="middle" fill="#64748b" font-size="8">জেনারেশন·ব্যাচ·রিভিউ</text>
      <text x="190" y="160" text-anchor="middle" fill="#64748b" font-size="8">min-check · invoices</text>
      <rect x="260" y="115" width="120" height="62" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="320" y="135" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">⑨ credits</text>
      <text x="320" y="148" text-anchor="middle" fill="#64748b" font-size="8">ওয়ার্কফ্লো+লেজার</text>
      <text x="320" y="160" text-anchor="middle" fill="#64748b" font-size="8">invoices (credits)</text>
      <rect x="390" y="115" width="155" height="62" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="467" y="135" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">⑦ data-processing</text>
      <text x="467" y="148" text-anchor="middle" fill="#64748b" font-size="8">Sai: ড্যাশবোর্ড·history</text>
      <text x="467" y="160" text-anchor="middle" fill="#64748b" font-size="8">inv+bill+xero</text>
      <rect x="15" y="200" width="165" height="62" rx="9" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="97" y="220" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">⑥ payment</text>
      <text x="97" y="233" text-anchor="middle" fill="#64748b" font-size="8">Owen: NACHA+reconcile</text>
      <text x="97" y="245" text-anchor="middle" fill="#64748b" font-size="8">billing</text>
      <rect x="190" y="200" width="165" height="62" rx="9" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="272" y="220" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">⑧ billing</text>
      <text x="272" y="233" text-anchor="middle" fill="#64748b" font-size="8">cycle+exceptions+archive</text>
      <text x="272" y="245" text-anchor="middle" fill="#64748b" font-size="8">billing · ReviewMeeting</text>
      <rect x="15" y="285" width="530" height="36" rx="9" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="303" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Sai-এর দিন: ⑦→⑤জেনারেট→⑨→⑤রিভিউ→exported→⑦চেকলিস্ট · Vicki: ⑤রিভিউ+min-check · সবাই ⑩+②</text>
    </svg>
    <div class="diag-cap">দশ দোকান এক শহরে — প্রতিটির পেছনে নাম-উল্লেখ-সহ কারখানা; নতুন দোকানের আগে তিন প্রশ্ন।</div>
  </div>
  <div class="callout tip"><span class="co-icon">🔌</span><div><strong>দোকান খোলার সবচেয়ে বড় ভুল:</strong> আংশিক-কাজ নিয়ে নতুন ফিচার-স্লাইস খোলা। যেমন "invoice-history" একসময় ছিল invoices-এর ভেতরে — Sai-এর কাজ বেড়ে গেলে তার নিজস্ব স্লাইস data-processing হলো। কাজ আগে, দোকান পরে।</div></div>
  <div class="secret-box">🏪 আগে বাজার চেনো: কে ঢোকে, কী চলে, কোন কারখানা মাল দেয় — তারপর নতুন দোকান। / Know the ten shops — their people, flows, and workshops — before opening door eleven.</div>`,
  senior: {
    title: "Feature ↔ App Pairing Map",
    body: `<p>auth/account→accounts · admin→system_admin+navigation+accounts (access-console ADR-0022) · timesheets→timesheets · invoices→invoices (জেনারেশন/ব্যাচ/রিভিউ/min-check) · payment→billing (NACHA) · data-processing→invoices+billing+xero (Sai: ড্যাশবোর্ড/history/checklist/inventory) · billing→billing (cycle+ReviewMeeting+exceptions) · credits→invoices-credits · messaging→messaging (SSE)। কর্মসূত্র: Peter=④; Sai=⑦→⑤→⑨→⑤→⑦; Vicki=⑤(রিভিউ+min-check); Owen=⑥। নতুন ফিচারের ৩ প্রশ্ন: BE-অ্যাপ? রোল/ফিচার-কী? আংশিক-কাজ আগে থেকেই আছে কি?</p>`
  }
});
