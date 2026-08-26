// doors-27.js — আয়না-বোনার কারখানা (সংশ্লেষণ-পরিশিষ্ট)
var doors = globalThis.doors = globalThis.doors || [];

doors.push({
  num: 27,
  icon: "🪞",
  color: "#7ee0b0",
  name: "পূর্ণ-তাঁত: এক-ক্লিকের-শপথ",
  subtitle: "The Whole Loom — Synthesis & Senior Reference",
  tech: "vertical thread: one click through every layer; all 26 secrets in one view; the unifying principle",
  spirit: "মীজান — mīzān (the balance that holds every thread taut)",
  secret: "ছাবিশ-দরজার-এক-বাক্য: অবস্থা-বদলাও-প্রতিবিম্ব-নয়; প্রতিটি-স্তর নিজ-ধর্মে, প্রতিটি-নাম খাতায়, প্রতিটি-ব্যর্থতা শব্দ-করা।",
  recall: {
    q: "'অনুমোদন'-ক্লিক করলে কতগুলো-দরজার-শিক্ষা ঘুরে-যায়?",
    qen: "How many doors' lessons turn on one 'Approve' click?",
    a: "শপথ-ক্রমে প্রায়-সবগুলো: বাটন-v-on(২) → রি-এন্ট্র্যান্সি-গার্ড(৯) → স্টোর-ক্রিয়া(১০) → সার্ভিস+CSRF(১৫) → ফেজ/সরাসরি-মিউটেশন(১৭) → টোস্ট+রিফেচ(১৮) → গার্ড-রুট(১৪) — এক-ক্লিকে পুরো-কারখানা।",
    aen: "Nearly all: v-on → guard → store action → service+CSRF → phase/toast → refetch → guarded route — the whole workshop in one click."
  },
  story: `<p class="scene-setting">শেষ-দরজা — কারখানার-কেন্দ্রীয়-প্রাঙ্গণে সবাই-জড়ো। জোহরা-আপা একটা-বড়-বোতাম-নামিয়ে-আনেন (হাতের-তালুতে): <strong>"একবার-চাপো।"</strong>
  তুমি-চাপলে — সামনে-পর্দা-জ্বলে-ওঠে, আর-সেই-মুহূর্তে তাঁতের-নিচে দাঁড়ানো ছাবিশজন-কারিগর একসাথে-নড়ে-উঠেন: রফিকের-পাখি উড়ে-যায় (emit),
  মাজেদ-সাহেবের-পাহারা-দাঁড়ি খাড়া (গার্ড), মুসা-সরকারের-খাতায়-কলম (store), ক্যাপ্টেন-রুমানের-জাহাজ-ছাড়ে (সার্ভিস+CSRF), ওস্তাদ-নাজিরের-ঘড়ি
  ঘোরে (ফেজ), রিক্তার-বাট-বাজে (টোস্ট), আয়না ঝকঝক-করে (রি-রেন্ডার)। এক-ক্লিক — পুরো-কারখানা। জোহরা-আপা বলেন: <strong>"এই-দৃশ্যটাই
  শেষ-পাঠ: প্রতিটি-স্তর আলাদা-ছিল-শেখার-জন্য; কাজের-জগতে সব-একসাথে-বাজে। তুমি-এখন বোনাকার — এই-নাও তোমার-নিজের-ছোট-আয়না।"</strong></p>
  <p class="scene-setting en">The last door — everyone gathers in the central courtyard. Zohra Apa brings down a
  large button (in her palm): <strong>"press it once."</strong> You press — a screen lights, and at that instant
  the twenty-six artisans beneath the loom move together: Rafiq's bird flies (emit), Majed's sentry straightens
  (guard), Musa's ledger takes ink (store), Captain Roman's ship sails (service+CSRF), Ustad Nazir's clock turns
  (phase), Rikta's pot rings (toast), the mirror gleams (re-render). One click — the whole workshop. Zohra says:
  <strong>"this scene is the final lesson: each layer stood apart for learning; in the working world all sound
  together. You are a weaver now — here, your own small mirror."</strong></p>
  <div class="dialogue">('জোহরা আপা বড় বোতামটা তোমার হাতে তুলে দিলেন। "চাপো।" তুমি চাপলে — ছাবিশজন কারিগর একসাথে নড়ে উঠলেন: পাখি উড়ল, পাহারা দাঁড়াল, খাতায় কলম চলল, জাহাজ ছেড়ল, ঘড়ি ঘুরল, বাট বাজল, আয়না ঝলকাল। "দেখলে তো," তিনি মৃদু হাসলেন, "এক ক্লিকেই পুরো কারখানা। স্তরগুলো শেখার জন্য আলাদা ছিল — কাজের জগতে সব একসাথে বাজে।"', 'বোতামের চাপ থেকে ছড়িয়ে পড়া সেই কম্পন — তোমার নিজের ছোট আয়নায় এখন তুমিই মাস্টার।')</div><div class="dialogue en">"Press it." You press — twenty-six artisans move at once. "The layers stood apart for learning; in the working world they sound together."</div>
  <div class="code-block">পূর্ণ-তাঁত — উল্লম্ব-সুতো ('অনুমোদন'-ক্লিকের-যাত্রা)

@click="approve(row)"                    …দরজা ২
  ↓ (পাখি-পথ ছোট-হলে-সরাসরি)
const { running, run } = useMutationAction({  …দরজা ৯
  mutate: (r) =&gt; approvalService
    .approve(r.id),                      …দরজা ১৫
  //  ↑ apiClient: X-CSRFToken + 401/403-নিয়ম
  onSuccess: () =&gt; store.load(),        …দরজা ১০
  successMessage: 'অনুমোদিত',
})
· ব্যয়বহুল-লেখা হলে এর-বদলে
  দরজা ১৭-ঘড়ি: preview→confirm
· পর্দার-প্রবেশ আগেই-গার্ডড়
  (রোল/ফিচার)                     …দরজা ১৪/২৫
· সব-সময়: অবস্থা-বদলাও,
  DOM-ছোঁয়ো-না                    …দরজা ১/৩
· নীরবতা-নেই: এরর=টোস্ট|inline+
  logger                                …দরজা ২১

════════ সিনিয়র-রেফারেন্স: ২৬-তাবিজ-একনজরে ══════

ভিত্তি
  ১ আয়নার-শপথ … state বদলাও, DOM-নয়
  ২ বর্ণমালা … {{ }} বলে · : বাঁধে · @ শোনে · # খোলে
  ৩ শ্বাস … ref-ছোঁয় · computed-মনে-রাখে · watch-পাহারা
কম্পোনেন্ট
  ৪ উপহার-নদী … props আমানত; মিউটেট-নিষেধ
  ৫ ফেরত-পাখি … defineEmits-চুক্তি; সিদ্ধান্ত-উজানে
  ৬ দুই-মুখ-সেতু … v-model=:মান+@update; defineModel
  ৭ খোপ … slot-ছাঁচ, scoped-ফিতা, ফলব্যাক
  ৮ জীবনচক্র … mounted-বাঁধো, unmounted-খোলো
  ৯ তাবিজ-ঘর … use*: অপশন-ইন, রেফ-আউট, গার্ড-ভেতরে
অবস্থা
  ১০ কোষাগার … শেয়ার্ড=স্টোর; storeToRefs; resetAll
  ১১ ঝর্ণা … provide/inject: টাইপড-কী, গভীর-বংশে
  ১২ বারান্দা … :is+markRaw · async · Teleport(defer)
      · Suspense · KeepAlive
পথ-ও-ডেটা
  ১৩ রাস্তা-নকশা … রুট=path/name/লেজি; নামে-ডাকো
  ১৪ ফটক-শৃঙ্খল … auth→roles→feature; meta-চাহিদা
  ১৫ সমুদ্র-পথ … সার্ভিস-স্তর; CSRF/401/403; এরর-ভাষা
ফর্ম-ও-ঘটনা
  ১৬ পাণ্ডুলিপি … নোঙর+dirty; ফিল্ড-সিল; প্রস্থান-সাবধান
  ১৭ চক-কালি … preview→confirm; গার্ড-দুই-স্তর
  ১৮ ঘণ্টি-গলি … টোস্ট+ইনবক্স+SSE(backoff+close)
যন্ত্রপাতি
  ১৯ তাঁত-স্থাপন … ছয়-ধাপ; স্তর-ফোল্ডার; env-ভাগ
  ২০ মিনার … mount/MSW/scope/E2E — দাবির-তলা
  ২১ শহর-বিধান … লিন্ট-স্রোত; রেজিস্ট্রি; নীরবতা-দণ্ড
স্টার্টার-কারখানা
  ২২ টু-ডু-তাঁত … এক-ফাইলে-চার-সুতো
  ২৩ সারণি-দপতর … চার-স্তর×তিন-পর্দা CRUD
  ২৪ ফর্ম-দপতর … নোঙর+চক-কালি+রোল-ফটক
  ২৫ বহু-মহল … তিন-খাতা-প্রাসাদ (RBAC+মেনু)
  ২৬ নদী-ঘাট … SSE-জীবন্ত-কাপড় (নদী+জলাধার)

════════ স্থাপত্য-স্মৃতি (কোথায়-কী-বসে) ══════

  features/&lt;ডোমেইন&gt;/
    views/        … RouterView-পর্দা (২২-২৬-ছাঁচ)
    components/   … স্থানীয়-কার্ড/মোডাল
    composables/  … use*-প্রবাহ (৯)
    services.ts   … apiClient-মুখ (১৫)
    types.ts      … ডোমেইন-চুক্তি
  shared/  … ভিত্তি-কম্পোজেবল+কম্পোনেন্ট
  app/     … router+guards · stores · ন্যাভ-খাতা
  ui/      … primitives (Button/TextInput/…)
  core/    … http/types/utils — সর্বনিম্ন-নির্ভরতা

নতুন-প্রজেক্টের-প্রথম-সপ্তাহ (স্মৃতি-সূত্র):
  দিন-১: ১৯-ছয়-ধাপ (scaffold→dev)
  দিন-২: ১৫-http-স্তর + ১০-auth-স্টোর
  দিন-৩: ১৩-রুট + ১৪-গার্ড (meta-চাহিদা)
  দিন-৪: ২৩-স্লাইস-ছাঁচে প্রথম-CRUD
  দিন-৫: ২০-টেস্ট-বীজ + ২১-লিন্ট-আইন
  দিন-৬: ২৪-প্রয়োজনে-চক-কালি + ১৮-টোস্ট
  দিন-৭: বিশ্রাম-ও-পুনরাবৃত্তি — তাবিজ-বাক্স-খোলো</div>
  <div class="verse">মীজান — তুলাদণ্ডের-সমাপ্তি: "আমি-আসমান-সমুচ্চ-করেছি মীজান-সহ" নয় বরং-সূরা-সার (৫৫:৭-৯): ওজনে-ন্যায়, পাল্লায়-কমতি-নয়। এই-বইয়ের-ছাবিশ-দরজা ছিল-ওজন-বাঁটা — প্রতিটি-ধারণা নিজ-পাল্লায়, না-বেশি-না-কম; আজ-শেষ-পাল্লায় সব-একসাথে-বসে-ভার-নিল: এক-ক্লিকের-শপথ। জোহরা-আপার-ছোট-আয়না সেই-মীজানের-ব্যক্তিগত-রূপ: আয়নার-শপথ-ই থাক তোমার-হাতে — বস্তু-বদলাও, প্রতিবিম্ব-অনুসরণ-করবে; আর-যখন-নতুন-কারখানায়-হারিয়ে-যাবে, এই-বইয়ের-দরজা-নাম্বারগুলোই-তোমার-ফেরার-ঠিকানা।</div>
  <div class="diagram">
    <div class="diag-title">One Click — Twenty-Six Doors Turning Together</div>
    <svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowF27" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#7ee0b0"/></marker></defs>
      <rect x="205" y="12" width="150" height="52" rx="26" fill="rgba(66,184,131,0.16)" stroke="#42b883" stroke-width="1.8"/>
      <text x="280" y="36" text-anchor="middle" fill="#7ee0b0" font-size="10" font-weight="700">👆 অনুমোদন</text>
      <text x="280" y="50" text-anchor="middle" fill="#94a3b8" font-size="6.5">@click — দরজা ২</text>
      <rect x="15" y="86" width="100" height="40" rx="8" fill="rgba(66,184,131,0.08)" stroke="#42b883" stroke-width="1.2"/>
      <text x="65" y="103" text-anchor="middle" fill="#7ee0b0" font-size="6.5" font-weight="600">গার্ড ৯</text>
      <text x="65" y="115" text-anchor="middle" fill="#64748b" font-size="6.5">রি-এন্ট্র্যান্সি</text>
      <rect x="130" y="86" width="100" height="40" rx="8" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.2"/>
      <text x="180" y="103" text-anchor="middle" fill="#a5b4fc" font-size="6.5" font-weight="600">স্টোর ১০</text>
      <text x="180" y="115" text-anchor="middle" fill="#64748b" font-size="6.5">ক্রিয়া+রিফেচ</text>
      <rect x="245" y="86" width="100" height="40" rx="8" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.2"/>
      <text x="295" y="103" text-anchor="middle" fill="#fcd34d" font-size="6.5" font-weight="600">সার্ভিস ১৫</text>
      <text x="295" y="115" text-anchor="middle" fill="#64748b" font-size="6.5">CSRF+401/403</text>
      <rect x="360" y="86" width="100" height="40" rx="8" fill="rgba(66,184,131,0.08)" stroke="#42b883" stroke-width="1.2"/>
      <text x="410" y="103" text-anchor="middle" fill="#7ee0b0" font-size="6.5" font-weight="600">ফেজ ১৭?</text>
      <text x="410" y="115" text-anchor="middle" fill="#64748b" font-size="6.5">ব্যয়বহুল→চক-কালি</text>
      <rect x="475" y="86" width="70" height="40" rx="8" fill="rgba(248,113,113,0.06)" stroke="#f87171" stroke-width="1.2"/>
      <text x="510" y="103" text-anchor="middle" fill="#f87171" font-size="6.5" font-weight="600">টোস্ট ১৮</text>
      <text x="510" y="115" text-anchor="middle" fill="#64748b" font-size="6.5">সাফল্য-বার্তা</text>
      <line x1="280" y1="64" x2="280" y2="84" stroke="#7ee0b0" stroke-width="1.6" marker-end="url(#arrowF27)"/>
      <line x1="65" y1="106" x2="128" y2="106" stroke="#7ee0b0" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="180" y1="106" x2="243" y2="106" stroke="#7ee0b0" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="295" y1="106" x2="358" y2="106" stroke="#7ee0b0" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="410" y1="106" x2="473" y2="106" stroke="#7ee0b0" stroke-width="1" stroke-dasharray="2 2"/>
      <rect x="15" y="146" width="530" height="106" rx="11" fill="rgba(66,184,131,0.06)" stroke="#42b883" stroke-width="1.3"/>
      <text x="280" y="168" text-anchor="middle" fill="#7ee0b0" font-size="8.5" font-weight="700">📜 ২৬-তাবিজ — ছয়-গুচ্ছে (সিনিয়র-দেয়াল)</text>
      <text x="280" y="186" text-anchor="middle" fill="#94a3b8" font-size="7">ভিত্তি ১-৩ (শপথ·বর্ণমালা·শ্বাস) · কম্পোনেন্ট ৪-৯ (নদী·পাখি·সেতু·খোপ·চক্র·তাবিজ)</text>
      <text x="280" y="202" text-anchor="middle" fill="#94a3b8" font-size="7">অবস্থা ১০-১২ (কোষাগার·ঝর্ণা·বারান্দা) · পথ ১৩-১৫ (নকশা·ফটক·সমুদ্র)</text>
      <text x="280" y="218" text-anchor="middle" fill="#94a3b8" font-size="7">ফর্ম ১৬-১৮ (পাণ্ডুলিপি·চক-কালি·ঘণ্টি) · যন্ত্র ১৯-২১ (স্থাপন·মিনার·বিধান) · কারখানা ২২-২৬</text>
      <text x="280" y="238" text-anchor="middle" fill="#7ee0b0" font-size="7">প্রথম-সপ্তাহ-মানচিত্র: দিন-১→১৯ · ২→১৫+১০ · ৩→১৩+১৪ · ৪→২৩ · ৫→২০+২১ · ৬→২৪+১৮ · ৭→বিশ্রাম</text>
      <rect x="15" y="266" width="530" height="38" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="283" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">স্থাপত্য-স্মৃতি: features/{views,components,composables,services,types} · shared/app/ui/core — স্রোত-একমুখ</text>
      <text x="280" y="297" text-anchor="middle" fill="#64748b" font-size="7">LP-মিরর: ১১৭-ভিউ-প্রোডাকশন — এই-বইয়ের-প্রতিটি-ছাঁচ সেখানে-দাঁড়িয়ে-আছে</text>
      <text x="280" y="320" text-anchor="middle" fill="#64748b" font-size="8">বস্তু-বদলাও, প্রতিবিম্ব-অনুসরণ-করবে — আয়নার-শপথই তোমার-তাঁতের-প্রথম-ও-শেষ-সুতো</text>
    </svg>
    <div class="diag-cap">এক-ক্লিকে ছাবিশ-কারিগর-একসাথে; ছাবিশ-তাবিজ ছয়-গুচ্ছে-দেয়ালে — আর-তোমার-হাতে-নিজের-আয়না।</div>
  </div>
  <div class="callout tip"><span class="co-icon">🎓</span><div><strong>জোহরা-আপার-বিদায়-উপহার:</strong> এই-বইয়ের-প্রতিটি-কোড-নমুনা দুই-সত্য থেকে-নেওয়া — Vue 3.5-অফিশিয়াল-গাইড-এর-সর্বশেষ-রীতি, আর LedgerPilot-এর-জীবন্ত-প্রোডাকশন-প্যাটার্ন (Vue 3.5.30 · Pinia 3 · vue-router 4.6 · TS 5.8 · ১১৭-ভিউ · ২,৬০০+-টেস্ট)। নতুন-সংস্করণে-এসে-সন্দেহ-হলে আগে-অফিশিয়াল-গাইড-দেখো, তারপর-এই-বইয়ের-দরজা-নম্বর-মিলিয়ো — ছাঁচ-থাকবে, সংস্করণ-বিবরণ-বদলাবে।</div></div>
  <div class="secret-box">🪞 পূর্ণ-তাঁত: এক-ক্লিকে-সব-স্তর, ছাবিশ-তাবিজ-ছয়-গুচ্ছে, স্থাপত্য-স্মৃতি-মানচিত্রে — আর-শপথ-একটাই: অবস্থা-বদলাও, প্রতিবিম্ব অনুসরণ করবে। / The whole loom turns on one click; the oath is one line.</div>`,
  senior: {
    title: "Synthesis Card",
    body: `<p><strong>উল্লম্ব-সুতো</strong>: @click→useMutationAction(গার্ড)→store→service(CSRF)→ফেজ-প্রয়োজনে(১৭)→টোস্ট→রিফেচ — গার্ডড-রুটে-প্রবেশ, DOM-অছুঁয়ে। <strong>২৬-তাবিজ</strong>: ভিত্তি(১-৩)·কম্পোনেন্ট(৪-৯)·অবস্থা(১০-১২)·পথ(১৩-১৫)·ফর্ম(১৬-১৮)·যন্ত্র(১৯-২১)·স্টার্টার(২২-২৬)। <strong>প্রথম-সপ্তাহ</strong>: ১৯→১৫+১০→১৩+১৪→২৩→২০+২১→২৪+১৮→বিশ্রাম। <strong>স্থাপত্য</strong>: features-স্লাইস+shared/app/ui/core। <strong>সত্য-উৎস</strong>: Vue 3.5-গাইড+LP-প্রোডাকশন।</p>`
  }
});
