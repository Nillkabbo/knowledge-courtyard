// doors-1-2.js — The Ledger Craftsman (LedgerPilot deep-dive)
var doors = globalThis.doors = [];


doors.push({
  num: 1,
  icon: "🔥",
  color: "#94a3b8",
  name: "ভাটার ইট-গাথুনি",
  subtitle: "The Kiln and the Bricks — Backend Stack",
  tech: "Python 3.11 · Django 4.2 · DRF 3.15 · MySQL 8 · Redis · Celery — what each is, why chosen, pins",
  spirit: "বাতিন — bāṭin (the inner layer: unseen, yet it carries everything seen)",
  secret: "শহরের ভিত ছয় রকম ইটে — কাঠামো (Django), দরজা (DRF), মাটি (MySQL), স্মৃতি (Redis), বাহক (Celery), নকশা-দোভাষী (spectacular)।",
  recall: {
    q: "Django নিজে API দেয় না — তবে DRF কী?",
    qen: "Django doesn't serve JSON APIs natively — so what is DRF?",
    a: "Django-র ওপর বসানো API-স্তর: serializer (চুক্তি), APIView, permission, throttle, pagination — আমাদের সব endpoint এর ছাদ।",
    aen: "The API layer over Django: serializers (the contract), APIView, permissions, throttling, pagination."
  },
  story: `<p class="scene-setting">শহর দেখতে আসার আগে রহিমা খাতুন সবাইকে নিয়ে যান শহরের <strong>পেছনের ভাটায়</strong> — ভাটা-মিস্ত্রি
  <strong>মিয়া ইব্রাহিম</strong>, চুল-দাড়ি চিরকাল ছাই-ধূসর। তাঁর উঠানে ছয়টা স্তূপ: <strong>কাঠামোর ইট</strong> (Django — দেয়াল,
  ছাদ, পানির লাইন সব একসাথে, নিজে থেকেই), <strong>দরজার খাঁচা</strong> (DRF — বাইরের মানুষের সাথে কথা বলার নিয়ম-সহ
  দরজা), <strong>মাটির থলি</strong> (MySQL — সব সত্য যেখানে ঘুমায়), <strong>স্মৃতির কলস</strong> (Redis — ঝরঝরে, দ্রুত, স্বল্পস্থায়ী),
  <strong>বাহকের ঝোলা</strong> (Celery — ভারী কাজ কাঁধে নিয়ে পেছনের গলিতে যায়), আর <strong>নকশা-দোভাষীর ছাতা</strong>
  (drf-spectacular — কাঠামোর ভাষা বাইরের দুনিয়ার ভাষায় অনুবাদ করে)। ইব্রাহিম বলেন — <strong>"দরজা তো দেখবে সবাই;
  ভিত দেখবে যে বানাবে। তুমি ভিত ছাড়া দোকান খুলতে এসেছ — আগে ইট চেনো।"</strong></p>
  <p class="scene-setting en">Before touring the city, Rahima Khatun takes everyone to the <strong>rear kiln</strong> —
  kiln-master <strong>Mia Ibrahim</strong>, hair permanently ash-grey. Six piles in his yard: <strong>structural
  bricks</strong> (Django — walls, roof, plumbing, all included), <strong>door-frames</strong> (DRF — doors with
  rules for talking to outsiders), <strong>earth-sacks</strong> (MySQL — where every truth sleeps),
  <strong>memory-jars</strong> (Redis — quick, clean, short-lived), <strong>carrier-satchels</strong> (Celery —
  heavy work shouldered into back lanes), and the <strong>interpreter's umbrella</strong> (drf-spectacular —
  translating the structure's language for the outside world). Ibrahim says — <strong>"everyone sees doors;
  only builders must know bricks. You came to open a shop — learn the bricks first."</strong></p>
  <div class="dialogue">তুমি জিজ্ঞেস করো — "ইব্রাহিম চাচা, Django-কে বলছেন কাঠামো — তবে JSON API দেয় কে?"
  <br>ইব্রাহিম ছাই ঝেড়ে বলেন — "Django পাতার-ভাষায় কথা বলে (HTML)। JSON বলতে DRF লাগে — সে দোভাষী-দরজা:
  serializer চুক্তি লেখে, APIView দরজা হয়, permission দরবান হয়। <strong>আর FastAPI-র লোভে যেয়ো না — এ শহরে
  ORM+admin+migration+session সব Django-র ইটে গাঁথা; ইট বদলানো মানে শহর ভাঙা।</strong>"</div>
  <div class="code-block">ছয় ইটের খতিয়ান (সংস্করণ-সহ — requirements/base.txt)

ইট ১ — কাঠামো: Django 4.2 (>=4.2,<5.0) · Python 3.11
  যা দেয়: ORM (মডেল→SQL), মাইগ্রেশন (schema-ইতিহাস),
    সেশন-অথ (কুকি; JWT নেই!), admin (/django-admin/),
    settings-ভাগ, টেমপ্লেট
  স্বভাব: সিঙ্ক — কোনো async view নেই (ভবিষ্যতে চাইলে
    sync_to_async নিয়ম; নতুন করে যোগ নিষেধ-শ্রেণির)

ইট ২ — দরজা: DRF (djangorestframework>=3.15)
  যা দেয়: Serializer (চুক্তির দোভাষী — দরজা ২২-এর সত্য),
    APIView (প্রকল্পের ডিফল্ট রাস্তা), permission-শ্রেণি,
    throttle (settings-র হার থেকে), pagination (50)
  সাথে: drf-spectacular → OpenAPI (/api/docs, /api/schema)

ইট ৩ — মাটি: MySQL 8 (mysqlclient>=2.2)
  utf8mb4 · STRICT_TRANS_TABLES · CONN_MAX_AGE=600
  কেন Postgres নয়: ts_* লিগেসি টেবিল raw SQL-এ বাঁধা —
    মাটি বদলানো মানে সব দেয়াল পুনরায় গোছানো
  ORM-ই পথ; raw SQL কেবল লিগেসিতে (+schema-pin, দরজা ২৩)

ইট ৪ — স্মৃতি: Redis
  DB 0 ক্যাশে · DB 2 Celery broker · DB 3 ফল
  + SSE ব্যাজ-পুশ (messaging) একই কলসে

ইট ৫ — বাহক: Celery + django-celery-beat
  worker (ভারী কাজ) + beat (ঘড়ি: ৩/১৭ তারিখ, দৈনিক ০৬:০০)
  বিস্তারিত দরজা ২৭-এ (নদীর নিচের চাকা)

ইট ৬ — দোভাষীর ছাতা: drf-spectacular + openapi-typescript
  serializer → OpenAPI → api.generated.ts (FE-টাইপ)
  CI-র খাম-পাহারা: dump_api_types --check (দরজা ২৫)

সহায়ক গাঁথুনি: django-environ (.env) · django-cors-headers
  (base-এ localhost:5173/3000; prod env-ওভাররাইড)
  · cryptography/Fernet (৩ চাবি — দরজা ১১) · python-json-logger
  · gunicorn + whitenoise (প্রোডাকশন-দেহ, দরজা ৩)

কেন-এই-ইট সারণি (নতুন কর্মীর কুইজ):
  "JWT কেন নেই?" → সেশন-কুকি+CSRF-ই নিরাপদ ঘরোয়া পথ
  "Postgres কেন নয়?" → লিগেসি raw-SQL বাঁধন
  "factory_boy কেন নেই?" → fixtures-ই যথেষ্ট (প্রস্তাবিত-মাত্র)
  "Django 5 কেন নয়?" → পিন <5.0; আপগ্রেড = পরিকল্পিত কর্মসূচি</div>
  <div class="verse">বাতিন — যাহিরের ভাই: এক সত্যের দুই দর্শন (দরজা ৩০-এর মূলনীতির ভিত্তিটিও এখানে)। "ভিত দেখা যায় না, তবু মিনার দাঁড়ায়" — বাতিন বহন করে, যাহির দেখায়। ইব্রাহিমের ছয় ইট সেই বাতিন: ব্যবহারকারী কখনো Redis-এর নাম শুনবে না, তবু প্রতিটি ক্লিক তার কলস ছুঁয়ে যায়। যে নির্মাতা বাতিন অবহেলা করে, তার যাহির একদিন নীরবে ধসে।</div>
  <div class="diagram">
    <div class="diag-title">Six Bricks Under One City — Backend Stack</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="530" height="270" rx="12" fill="rgba(148,163,184,0.05)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="38" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="700">🧱 ভাটার উঠান — ছয় স্তূপ (পেছন থেকে সামনে)</text>
      <rect x="35" y="55" width="150" height="56" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="110" y="76" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="700">১ · Django 4.2</text>
      <text x="110" y="90" text-anchor="middle" fill="#94a3b8" font-size="7.5">কাঠামো: ORM·মাইগ্রেশন·সেশন</text>
      <text x="110" y="102" text-anchor="middle" fill="#64748b" font-size="7">Python 3.11 · সিঙ্ক</text>
      <rect x="200" y="55" width="150" height="56" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="275" y="76" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="700">২ · DRF 3.15</text>
      <text x="275" y="90" text-anchor="middle" fill="#94a3b8" font-size="7.5">দরজা: serializer·APIView</text>
      <text x="275" y="102" text-anchor="middle" fill="#64748b" font-size="7">permission·throttle·pagination</text>
      <rect x="365" y="55" width="160" height="56" rx="9" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.5"/>
      <text x="445" y="76" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="700">৩ · MySQL 8</text>
      <text x="445" y="90" text-anchor="middle" fill="#94a3b8" font-size="7.5">মাটি: সত্যের ঘুম</text>
      <text x="445" y="102" text-anchor="middle" fill="#64748b" font-size="7">mysqlclient · utf8mb4 · STRICT</text>
      <rect x="35" y="130" width="150" height="56" rx="9" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="110" y="151" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">৪ · Redis</text>
      <text x="110" y="165" text-anchor="middle" fill="#94a3b8" font-size="7.5">স্মৃতির কলস: DB0/2/3</text>
      <text x="110" y="177" text-anchor="middle" fill="#64748b" font-size="7">ক্যাশে·broker·ফল·SSE</text>
      <rect x="200" y="130" width="150" height="56" rx="9" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="275" y="151" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">৫ · Celery</text>
      <text x="275" y="165" text-anchor="middle" fill="#94a3b8" font-size="7.5">বাহক+ঘড়ি (beat)</text>
      <text x="275" y="177" text-anchor="middle" fill="#64748b" font-size="7">worker · শিডিউল → দরজা ২৭</text>
      <rect x="365" y="130" width="160" height="56" rx="9" fill="rgba(100,116,139,0.12)" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="445" y="151" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="700">৬ · spectacular</text>
      <text x="445" y="165" text-anchor="middle" fill="#94a3b8" font-size="7.5">দোভাষী: OpenAPI</text>
      <text x="445" y="177" text-anchor="middle" fill="#64748b" font-size="7">→ api.generated.ts</text>
      <rect x="35" y="205" width="490" height="60" rx="9" fill="rgba(248,113,113,0.06)" stroke="#f87171" stroke-width="1.2"/>
      <text x="280" y="225" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="600">🔒 ইট-বিধান: সংস্করণ-পিন অলঙ্ঘনীয় (&lt;5.0) · নতুন ইট (ডিপেন্ডেন্সি) = মানুষের অনুমতি</text>
      <text x="280" y="241" text-anchor="middle" fill="#94a3b8" font-size="7.5">JWT নেই (সেশন+CSRF) · Postgres নয় (লিগেসি raw-SQL) · async view নয় · factory_boy নয়</text>
      <text x="280" y="256" text-anchor="middle" fill="#94a3b8" font-size="7">সমর্থক: django-environ · cors-headers · Fernet(৩-চাবি) · gunicorn+whitenoise</text>
    </svg>
    <div class="diag-cap">ছয় ইটে গাঁথা বাতিন — ব্যবহারকারী দেখে শুধু দরজা, নির্মাতাকে চিনতে হয় সব স্তূপ।</div>
  </div>
  <div class="callout tip"><span class="co-icon">🔌</span><div><strong>হাতে-খাতায় রাখো:</strong> সংস্করণ-সত্য <code>requirements/{base,dev,production}.txt</code> (Pipfile কেবল মেটাডেটা), সব env-চাবির তালিকা <code>.env.example</code>, আর সেটিংস-ত্রয়ী <code>ledgerpilot/settings/{base,development,production,test}.py</code> — base ছোঁয়া এস্কালেশন-বিধান (দরজা ২৫)।</div></div>
  <div class="secret-box">🔥 শহর ছয় ইটে: কাঠামো·দরজা·মাটি·স্মৃতি·বাহক·দোভাষী — ভিত অদৃশ্য, তবুই সব বহনকারী। / Six bricks carry the city: framework, API layer, database, cache, queue, schema-bridge — the unseen bāṭin.</div>`,
  senior: {
    title: "Backend Stack Card",
    body: `<p><strong>Django 4.2</strong> (পিন &lt;5.0, Py3.11, সিঙ্ক-only) — ORM/মাইগ্রেশন/সেশন-admin। <strong>DRF 3.15</strong> — serializer(APIView/permission/throttle/pagination-সহ); <strong>drf-spectacular</strong> → OpenAPI → <code>openapi-typescript</code> → <code>api.generated.ts</code>। <strong>MySQL 8</strong> (mysqlclient, utf8mb4, STRICT, CONN_MAX_AGE=600; Postgres-নয় কারণ লিগেসি raw-SQL)। <strong>Redis</strong> DB0/2/3 + SSE। <strong>Celery</strong> worker+beat। সহায়ক: environ, cors-headers, Fernet-৩চাবি, gunicorn+whitenoise, json-logger। ইট-বিধান: পিন অলঙ্ঘনীয়; নতুন-ডিপ = অনুমতি; JWT/Postgres/async/factory_boy সব "না"।</p>`
  }
});


doors.push({
  num: 2,
  icon: "🎨",
  color: "#94a3b8",
  name: "কাচঘরের আয়না-শিল্প",
  subtitle: "The Glasshouse — Frontend Stack",
  tech: "Vue 3.5 · Vite 8 · TS 5.8 · Pinia · vue-router 4 · Tailwind · ApexCharts · vitest/Playwright/MSW",
  spirit: "মুয়ামাল — mu'āmalah (the engagement layer: where the city meets its people)",
  secret: "চার কাচে এক আয়না: চেতনা (Vue), ভাষা (TS), স্মৃতি (Pinia), পথ (Router) — সাজসজ্জা (Tailwind) শুধু প্রলেপ।",
  recall: {
    q: "Options API আর Composition API — প্রকল্পে কোনটা?",
    qen: "Options or Composition API here?",
    a: "শুধু &lt;script setup lang=\"ts\&gt; — Composition API; Options-API কম্পোনেন্ট নতুন করে নিষেধ।",
    aen: "Only script-setup TypeScript; Options API is banned for new code."
  },
  story: `<p class="scene-setting">ভাটার পেছনেই কাচঘর। কারিগর <strong>বেগম জোহরা</strong> — চোখে সুক্ষ্ম কাচ-খোঁচা, হাতে হীরার খুনি। তাঁর
  মতে একটা ভালো আয়না চার স্তরে বাঁধে: <strong>চেতনা</strong> (Vue — ডেটা বদলালে প্রতিবিম্ব নিজে বদলায়, হাত লাগাতে হয় না),
  <strong>ভাষা</strong> (TypeScript — চুক্তির বাক্য ভাঙলে গড়ার সময়েই খুনি আটকায়), <strong>স্মৃতি</strong> (Pinia — শহরের
  বহু দোকানে একই খবর, এক দপ্তর থেকে), <strong>পথ</strong> (vue-router — কোন রাস্তায় কোন দরজা)। তার ওপর মোম-প্রলেপ
  (Tailwind — দেখতে সুন্দর, কিন্তু আয়নার অস্তিত্ব নয়)। জোহরা সাবধান করেন — <strong>"নতুনরা প্রলেপ দেখে আয়না বানাতে বসে;
  আগে চার কাচ কাটো।"</strong> আর তাঁর টেবিলে তিনটা যন্ত্র: ভিটরিন-পরীক্ষক (vitest), নকল-বাজার (MSW), আর সারাশহর-হাঁটা
  (Playwright)।</p>
  <p class="scene-setting en">Behind the kiln stands the glasshouse. Artisan <strong>Begum Zohra</strong> — fine
  glass-scratches at her eyes, a diamond-cutter in hand. A good mirror, she says, is bound in four layers:
  <strong>awareness</strong> (Vue — the reflection changes when the data does, hands-free), <strong>language</strong>
  (TypeScript — broken contracts stop at build time), <strong>memory</strong> (Pinia — one bureau feeding many
  shops the same news), <strong>roads</strong> (vue-router — which door on which street). Wax-polish atop
  (Tailwind — pretty, but not the mirror). Her warning — <strong>"novices see the polish and start building;
  cut the four glasses first."</strong> Three machines at her table: the vitrine-tester (vitest), the
  shadow-market (MSW), and the whole-city walk (Playwright).</p>
  <div class="dialogue">শাগিরদ বলে — "আপা, jQuery দিয়ে তো আরও সহজে প্রতিবিম্ব বদলানো যায়!"
  <br>জোহরা খুনি নামিয়ে রাখেন — "হাত দিয়ে প্রতিবিম্ব মুছে নতুন করে আঁকা আর চেতনা-সহ আয়না — এক নয়। Vue-র কাজ
  তোমার হাত বাঁচানো নয়, <strong>তোমার ভুল অসম্ভব করা</strong>। ডেটা বদলাও — প্রতিবিম্ব নিজে সাজবে। আর TS? চুক্তি
  ভাঙলে ব্রাউজারে নয়, গড়ার ঘরেই খুনি থামবে — সেটাই সস্তা ভুল।"</div>
  <div class="code-block">চার কাচ + প্রলেপ + তিন যন্ত্র (frontend/package.json)

কাচ ১ — চেতনা: Vue 3.5 (Composition API একমাত্র)
  · &lt;script setup lang="ts"&gt; — প্রকল্পের একমাত্র রূপ
  · defineProps<T>() / defineEmits<T>() — টাইপড
  · ref/computed/watch; Options API নতুন-কোডে নিষেধ
  · reactivity-transform নয়; SFC (.vue) একক

কাচ ২ — ভাষা: TypeScript 5.8 (strict)
  · টাইপের উৎস = OpenAPI-জেনারেটেড api.generated.ts
    (core/types/alias.ts-এ সংক্ষিপ্ত নাম; হাতে লিখলে
    // verified against backend on <date> টিকা বাধ্যতামূলক)
  · any/তার-আত্মীয় এড়াও; দরকার হলে unknown+ন্যারো

কাচ ৩ — স্মৃতি: Pinia (Composition-স্টোর)
  · defineStore('id', () => {...})
  · স্টোর-সত্য কম: auth/capabilities/features/navMenu —
    সব computed(user) থেকে; লগআউটে resetAll
  · নতুন স্টোর = সত্যিকারের শেয়ার্ড-স্টেট হলেই

কাচ ৪ — পথ: vue-router 4
  · createRouter + createWebHistory
  · রুট দুই স্তরে: static (auth/দ্রুত) + dynamic
    (BE-ম্যানিফেস্ট → addRoute; দরজা ৩০-এর বিষয়)
  · meta: allowedRoles/requiresFeature → guards
    (public→auth→roles→feature; দরজা ২৩)

প্রলেপ — Tailwind (v4-স্টাইল টোকেন):
  · ui/tokens থেকে সব রং/স্পেসিং; arbitrary মান নিষেধ
    (ESLint আটকায়) · ui/primitives = Button/Toast/Skeleton*
  · ApexCharts — ড্যাশবোর্ডের গ্রাফ (vue3-apexcharts)

গড়ার চুল্লি: Vite 8
  · dev-সার্ভার 5173 → 8000-প্রক্সি (/api)
  · npm run build → dist/ (prod-এ nginx পরিবেশন)

তিন যন্ত্র: vitest (@vue/test-utils) · MSW (apiClient-
  স্তরে ইন্টারসেপ্ট; spec-লোকাল server.use) · Playwright
  (e2e; PR-গেটে auth মাত্র)

সহায়ক: axios (apiClient-এ বন্দি — কম্পোনেন্টে সরাসরি নিষেধ)
  · vueuse (ঐচ্ছিক) · date-fns · ESLint(flat)+Prettier
  · @pinia/testing — setActivePinia প্রতি-টেস্ট

কেন-এই-কাচ সারণি:
  "Redux কেন নয়?" → Pinia-ই Vue-র স্বভাব-স্মৃতি
  "jsx কেন নয়?" → SFC-ই প্রকল্পের একক; মিশ্রণ নিষেধ
  "vee-validate/zod কেন নয়?" → refs+useForm* যথেষ্ট
    (ডিপ ছাড়া এস্কালেশন)</div>
  <div class="verse">মুয়ামাল — মানুষ ও শহরের মোকাবিলার স্তর: যাহিরের সবচেয়ে সামনের মুখ। জোহরার চার কাচ সেই মুয়ামালের নৈপুণ্য: চেতনা সত্যের প্রতিধ্বনি হয় (Vue-র reactivity), ভাষা চুক্তি রক্ষা করে (TS-র strictness), স্মৃতি মিথ্যা ছড়ায় না (এক Pinia-সত্য), পথ পথভ্রষ্ট করে না (গার্ডেড router)। রাসূল (সা.) বলেছেন — নেতা জাতির কর্মচারী; আয়নাও তাই: সে দর্শকের নয়, সত্যের কর্মচারী।</div>
  <div class="diagram">
    <div class="diag-title">Four Glasses, One Mirror — Frontend Stack</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="530" height="280" rx="12" fill="rgba(148,163,184,0.05)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="38" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="700">🪞 কাচঘর — আয়নার স্তর (পেছন থেকে সামনে)</text>
      <rect x="35" y="55" width="240" height="62" rx="9" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.5"/>
      <text x="155" y="76" text-anchor="middle" fill="#6ee7b7" font-size="9.5" font-weight="700">১ · Vue 3.5 — চেতনা</text>
      <text x="155" y="91" text-anchor="middle" fill="#94a3b8" font-size="7.5">Composition API · script setup TS · SFC</text>
      <text x="155" y="103" text-anchor="middle" fill="#64748b" font-size="7">reactivity: ডেটা বদলালে প্রতিবিম্ব নিজে</text>
      <rect x="290" y="55" width="235" height="62" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="407" y="76" text-anchor="middle" fill="#5eead4" font-size="9.5" font-weight="700">২ · TypeScript 5.8 — ভাষা</text>
      <text x="407" y="91" text-anchor="middle" fill="#94a3b8" font-size="7.5">strict · উৎস = api.generated.ts</text>
      <text x="407" y="103" text-anchor="middle" fill="#64748b" font-size="7">চুক্তি ভাঙলে বিল্ডেই থামে</text>
      <rect x="35" y="132" width="240" height="62" rx="9" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="155" y="153" text-anchor="middle" fill="#a5b4fc" font-size="9.5" font-weight="700">৩ · Pinia — স্মৃতি</text>
      <text x="155" y="168" text-anchor="middle" fill="#94a3b8" font-size="7.5">Composition স্টোর · ৪-টা দপ্তর মাত্র</text>
      <text x="155" y="180" text-anchor="middle" fill="#64748b" font-size="7">auth/capabilities/features/navMenu</text>
      <rect x="290" y="132" width="235" height="62" rx="9" fill="rgba(100,116,139,0.12)" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="407" y="153" text-anchor="middle" fill="#cbd5e1" font-size="9.5" font-weight="700">৪ · vue-router 4 — পথ</text>
      <text x="407" y="168" text-anchor="middle" fill="#94a3b8" font-size="7.5">static + dynamic (ম্যানিফেস্ট)</text>
      <text x="407" y="180" text-anchor="middle" fill="#64748b" font-size="7">guards: public → auth → roles → feature</text>
      <rect x="35" y="207" width="490" height="58" rx="9" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.3"/>
      <text x="280" y="228" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">✨ প্রলেপ+যন্ত্র: Tailwind-টোকেন · ApexCharts · Vite 8 (5173→8000)</text>
      <text x="280" y="247" text-anchor="middle" fill="#94a3b8" font-size="7.5">vitest · MSW (apiClient-স্তর) · Playwright · ESLint(flat)+Prettier · axios কেবল apiClient-এ</text>
      <text x="280" y="272" text-anchor="middle" fill="#64748b" font-size="8">Redux ✗ · jsx ✗ · vee-validate/zod ✗ · Options API ✗ — চার কাচ কাটা আগে, প্রলেপ পরে</text>
    </svg>
    <div class="diag-cap">চেতনা·ভাষা·স্মৃতি·পথ = আয়না; টোকেন-প্রলেপ শুধু চাকনি — নতুনরা প্রলেপে বসে নয়, কাচে বসে।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সবচেয়ে সাধারণ নতুন-ভুল:</strong> (১) কম্পোনেন্টে সরাসরি <code>import axios</code> — কেবল <code>core/http/apiClient</code>; (২) হাতে-লেখা ইন্টারফেস বেক-এন্ডের সাথে মেলানো ছাড়া PR — টিকা-বিধান ভাঙলে wire-পিন ধরবে; (৩) নতুন স্টোর খোলা যে-স্টেট এক পৃষ্ঠারই — prop/emitter-ই যথেষ্ট।</div></div>
  <div class="secret-box">🎨 চেতনা·ভাষা·স্মৃতি·পথ — চার কাচ কাটো আগে, প্রলেপ পরে; টাইপের উৎস এক: জেনারেটেড চুক্তি। / Cut the four glasses before the polish; generated types are the only truth.</div>`,
  senior: {
    title: "Frontend Stack Card",
    body: `<p><strong>Vue 3.5</strong> (Composition/script-setup-TS একমাত্র; Options নিষেধ) · <strong>TS 5.8 strict</strong> (উৎস <code>api.generated.ts</code> + alias; হাতে-লেখায় verified-টিকা) · <strong>Pinia</strong> (Composition; ৪ দপ্তর; computed(user); resetAll) · <strong>vue-router 4</strong> (static+dynamic; guards: public→auth→roles→feature) · <strong>Tailwind-টোকেন</strong> (arbitrary নিষেধ; ui/primitives) · <strong>ApexCharts</strong> · <strong>Vite 8</strong> (5173→8000 প্রক্সি) · টেস্ট: vitest+MSW+Playwright · লিন্ট: ESLint flat+Prettier। axios কেবল apiClient-এ। নিষেধ: Redux/jsx/vee-validate+zod/Options।</p>`
  }
});
