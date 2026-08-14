// doors-33-34.js — The Ledger Craftsman (LedgerPilot deep-dive)


doors.push({
  num: 33,
  icon: "⚙️",
  color: "#34d399",
  name: "নদীর নিচের চাকা",
  subtitle: "The Wheel Under the River — Infra: Celery, Redis, Settings",
  tech: "Celery beat+worker, Redis DBs (cache/broker/result), settings split, docker-compose, deploy shape",
  spirit: "তাহরীর — taḥrīr (the hidden administration that keeps the visible city fed)",
  secret: "দৃশ্যমান শহরের নিচে অদৃশ্য চাকা — ঘড়ি (beat), বাহক (worker), স্মৃতি (Redis); চাকা থামলে শহর বুঝতেও পারে না।",
  recall: {
    q: "web-অ্যাপ থেকে .delay() কাজ করছে না — কেন?",
    qen: "delay() from the web app silently does nothing — why?",
    a: "Celery-র broker/result env শুধু worker-এ ছিল, web-এ ছিল না — ফলে task রিডিসে পৌঁছায়ইনি (#1190: web-কেও ঐ env দাও)।",
    aen: "The broker env lived only on the worker; the web process couldn't reach Redis (#1190)."
  },
  story: `<p class="scene-setting">শহরের নিচে দিয়ে বয়ে যাওয়া নদীর সুড়ঙ্গে তিনটা লোহার চাকা। সুড়ঙ্গ-রক্ষক <strong>মিয়া গিয়াস</strong> —
  বাইরের কেউ তাঁকে কখনো দেখে না, অথচ ভোরের ঘড়ি-বাজনা থেকে রাতের পানির চাপ পর্যন্ত সব তাঁর চাকার ওপর। <strong>প্রথম
  চাকা</strong> — ঘড়ি (beat): নির্দিষ্ট সময়ে নির্দিষ্ট কাজ ছাড়ে; ৩ তারিখের ভোরে যে চক্র-বাজনা বাজে, ১৭-তারিখের
  যে পাহারা-ডাক, দৈনিক ৬টার যে আয়না-মেলানো — সব এই চাকার দাঁতে বসানো। <strong>দ্বিতীয় চাকা</strong> — বাহক (worker):
  ঘড়ি ছাড়া কাজ কাঁধে নেয়, নদীর স্রোতে (broker) ভাসিয়ে দেয়, ফল ফেরত আনে। <strong>তৃতীয় চাকা</strong> — স্মৃতির কুয়া
  (Redis): তিনটা আলাদা জলাশয় — শহরের ক্যাশে, বাহকের স্রোত, ফলের থাম। একদিন এক নতুন কারিগর দোকান থেকে (web-প্রসেস)
  কাজ ভাসাল — কিন্তু তার দোকানে স্রোতের নাম (broker env) লেখাই ছিল না; কাজ নদীতে পড়লই না, কেউ টেরও পেল না। গিয়াস
  মৃদু হেসে বললেন — <strong>"চাকা শুধু চাকার-ঘরের ভাষা জানে; কাজ পাঠাতে হলে পাঠানোর ঘরেও সেই ভাষা লাগে।"</strong></p>
  <p class="scene-setting en">Beneath the city runs a river tunnel with three iron wheels. Keeper
  <strong>Mia Gias</strong> — no one outside ever sees him, yet the dawn chimes, the water pressure, all ride
  his wheels. <strong>Wheel one</strong> — the clock (beat): fixed jobs at fixed hours; the 3rd's cycle-bell,
  the 17th's watch-call, the daily 6 o'clock mirror-polish ride its teeth. <strong>Wheel two</strong> — the
  carrier (worker): shoulders what the clock releases, floats it down the current (broker), returns results.
  <strong>Wheel three</strong> — the memory-well (Redis): three separate basins — city cache, carrier current,
  result berth. One day a new craftsman floated a job from his SHOP (web process) — but his shop lacked the
  current's name (broker env); the job never reached the river, silently. Gias smiled — <strong>"the wheel
  knows only the wheel-house's tongue; the sending room must speak it too."</strong></p>
  <div class="code-block">অদৃশ্য চাকা-তিনের নকশা

ঘড়ি (Celery beat) — নির্ধারিত কাজ:
  mark_cycle_ready_p2 — ৩ তারিখ ০৯:০০ (আগের মাসের P2)
  mark_cycle_ready_p1 — ১৭ তারিখ ০৯:০০ (চলতি P1)
  xero.sync_current_month — দৈনিক 06:00 UTC (আয়না)
  (ADR-0024: min-check-মুখী ৩-তারিখ beat + "Sync now" বাটন)
  সংজ্ঞা: ledgerpilot/settings/base.py — CELERY_BEAT_SCHEDULE
  (বা DatabaseScheduler)

বাহক (Celery worker):
  apps/<domain>/tasks.py — @shared_task
  টেস্ট-নিয়ম: .delay() নয় — সরাসরি ফাংশন কল
    @pytest.mark.django_db-এর নিচে
  পার্শ্ব-প্রভাব-মাত্র টাস্ক idempotent হতে হবে
    (retry-এ দ্বিতীয়বার চাললে বিষ নয়)
  ⚠ #1190 শিক্ষা: web-অ্যাপ প্রসেসেও
    CELERY_BROKER_URL + CELERY_RESULT_BACKEND env দরকার —
    নইলে .delay() নীরবে নদীতে পৌঁছায় না

স্মৃতির কুয়া (Redis) — তিন জলাশয়:
  DB 0 — ক্যাশে (Django cache backend)
  DB 2 — Celery broker (কাজের স্রোত)
  DB 3 — Celery result (ফলের থাম)
  + SSE ব্যাজ-পুশও (messaging) রিডিসের ওপর

settings-তিন-ভাগ (ledgerpilot/settings/):
  base.py — ভিত্তি; DRF/CORS/থ্রটল/Celery/Xero-env
    ⚠ কখনো সরাসরি সম্পাদনা নয় — এস্কালেশন বিধান
  development.py / production.py / test.py — env-ওভাররাইড
    (django-environ; .env.example-এ সব ভেরিয়েবলের তালিকা)
  প্রোডাকশন-রক্ষা: FRONTEND_URL ডিফল্ট হলে import ব্যর্থ
    (OWASP #8) — Dockerfile-এ বিল্ড-প্লেসহোল্ডার

চাকা-ঘরের দেহ (docker-compose):
  app (gunicorn+whitenoise) · mysql · redis · celery-worker
    · celery-beat · nginx (prod-এ; dev-এ vite-প্রক্সি 5173→8000)
  dev-compose: MySQL হোস্টে 3307-এ ম্যাপড
  (লোকাল টেস্ট-env: DB_HOST=127.0.0.1 DB_PORT=3307 …)

রক্ষণাবেক্ষণ-পাঠ:
  · টাস্ক আটকে আছে? — worker-লগ দেখো; broker-এ ভেসে
    আছে কি না (Redis DB 2)
  · বিট চলছে? — beat-লগে শিডিউল-লাইন
  · আয়না পুরনো? — sync_current_month কি ভোরে চলেছিল?
    Sync-now (ADR-0024) দিয়ে হাতে টানো যায়</div>
  <div class="verse">তাহরীর — দৃশ্যমানের পেছনের অদৃশ্য ব্যবস্থাপনা; "মানুষ যা করে আল্লাহ তা দেখেন... এবং তোমাদের কাজের প্রতিদান পূর্ণরূপে দেবেন" নয় বরং ৯৯:৭-৮: "যে সদ্কর্ম করবে সে তার প্রতিদান পাবে" — প্রতিদান-হিসাব কোথাও হারায় না, যদিও হিসাবি অদৃশ্য। গিয়াসের চাকাও তাই: কেউ দেখে না, তবু প্রতিটি ঘড়ি-বাজনার হিসাব অটুট। যে নির্মাতা অদৃশ্য চাকা ভুলে যায়, তার দৃশ্যমান দোকান ঠিক সকালে খোলে না।</div>
  <div class="diagram">
    <div class="diag-title">Three Wheels Under the City — Infra Map</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowI24" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="15" width="530" height="52" rx="10" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1.4"/>
      <text x="280" y="36" text-anchor="middle" fill="#5eead4" font-size="9.5" font-weight="700">🏙️ দৃশ্যমান শহর — Django app (gunicorn) + Vue (nginx/vite)</text>
      <text x="280" y="52" text-anchor="middle" fill="#94a3b8" font-size="7.5">সব HTTP-অনুরোধ এখানে; .delay() করলে কাজ নিচে নামে (broker-env লাগে #1190)</text>
      <rect x="15" y="92" width="165" height="120" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="97" y="114" text-anchor="middle" fill="#fcd34d" font-size="9.5" font-weight="700">⏰ ঘড়ি — beat</text>
      <text x="97" y="132" text-anchor="middle" fill="#94a3b8" font-size="7.5">৩ তারিখ ০৯:০০ — P2 ready</text>
      <text x="97" y="146" text-anchor="middle" fill="#94a3b8" font-size="7.5">১৭ তারিখ ০৯:০০ — P1 ready</text>
      <text x="97" y="160" text-anchor="middle" fill="#94a3b8" font-size="7.5">দৈনিক 06:00 UTC — আয়না</text>
      <text x="97" y="182" text-anchor="middle" fill="#64748b" font-size="7">settings: BEAT_SCHEDULE</text>
      <text x="97" y="198" text-anchor="middle" fill="#64748b" font-size="7">+ DatabaseScheduler</text>
      <rect x="198" y="92" width="165" height="120" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="114" text-anchor="middle" fill="#5eead4" font-size="9.5" font-weight="700">🧺 বাহক — worker</text>
      <text x="280" y="132" text-anchor="middle" fill="#94a3b8" font-size="7.5">apps/*/tasks.py @shared_task</text>
      <text x="280" y="146" text-anchor="middle" fill="#94a3b8" font-size="7.5">কাজ কাঁধে → স্রোতে ফল ফেরত</text>
      <text x="280" y="168" text-anchor="middle" fill="#64748b" font-size="7">টেস্ট: সরাসরি কল, delay নয়</text>
      <text x="280" y="182" text-anchor="middle" fill="#64748b" font-size="7">idempotent বাধ্যতামূলক</text>
      <text x="280" y="198" text-anchor="middle" fill="#64748b" font-size="7">(retry-নিরাপদ)</text>
      <rect x="381" y="92" width="164" height="120" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="463" y="114" text-anchor="middle" fill="#a5b4fc" font-size="9.5" font-weight="700">🧠 স্মৃতি — Redis</text>
      <text x="463" y="132" text-anchor="middle" fill="#94a3b8" font-size="7.5">DB 0 — Django ক্যাশে</text>
      <text x="463" y="146" text-anchor="middle" fill="#94a3b8" font-size="7.5">DB 2 — Celery broker</text>
      <text x="463" y="160" text-anchor="middle" fill="#94a3b8" font-size="7.5">DB 3 — Celery result</text>
      <text x="463" y="182" text-anchor="middle" fill="#64748b" font-size="7">+ SSE ব্যাজ-পুশ</text>
      <text x="463" y="198" text-anchor="middle" fill="#64748b" font-size="7">(messaging)</text>
      <line x1="150" y1="67" x2="97" y2="90" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrowI24)"/>
      <line x1="280" y1="67" x2="280" y2="90" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowI24)"/>
      <line x1="420" y1="67" x2="463" y2="90" stroke="#818cf8" stroke-width="1.5" marker-end="url(#arrowI24)"/>
      <line x1="180" y1="152" x2="196" y2="152" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowI24)"/>
      <text x="188" y="142" text-anchor="middle" fill="#64748b" font-size="7">ছাড়ে</text>
      <line x1="363" y1="152" x2="379" y2="152" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowI24)"/>
      <text x="371" y="142" text-anchor="middle" fill="#64748b" font-size="7">ভাসে/ফেরে</text>
      <rect x="15" y="232" width="530" height="70" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="252" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="600">⚙️ চাকা-ঘর: docker-compose — app · mysql · redis · celery-worker · celery-beat · nginx</text>
      <text x="280" y="268" text-anchor="middle" fill="#94a3b8" font-size="8">settings: base (স্পর্শ-নিষেধ) · dev/prod/test (env) · prod-গার্ড</text>
      <text x="280" y="288" text-anchor="middle" fill="#64748b" font-size="8.5">ঘড়ি ছাড়ে → ভাসে → কাঁধে → ফল থামে → শহর দেখে; ধাপ মরলে শহর দেরি বোঝে</text>
    </svg>
    <div class="diag-cap">ঘড়ি ছাড়ে, স্রোত বয়ে, বাহক বহন করে, কুয়া মনে রাখে — web-প্রসেসেও স্রোতের নাম লাগে, নইলে .delay() নীরবে ডোবে।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নীরব-চাকার রোগ-লক্ষণ:</strong> (১) চক্র ready হচ্ছে না → beat চলছে? (২) আয়নায় আজকের তারিখ নেই → worker-এ sync_current_month চলেছিল? (৩) .delay() কিছুই করে না → web-এ broker env আছে? (#1190) — তিনটাই worker/beat-লগ না দেখলে ধরা পড়ে না।</div></div>
  <div class="secret-box">⚙️ ঘড়ি, বাহক, স্মৃতি — অদৃশ্য চাকা তিন; পাঠানোর ঘরেও স্রোতের নাম লাগে, নইলে কাজ নীরবে ডোবে। / The clock, the carrier, the well — and the sending room must speak the river's name too.</div>`,
  senior: {
    title: "Infra Map",
    body: `<p>Beat (<code>CELERY_BEAT_SCHEDULE</code>/DatabaseScheduler): ৩-তারিখ P2 · ১৭-তারিখ P1 · দৈনিক 06:00 UTC আয়না (+ADR-0024 Sync-now)। Worker: <code>apps/*/tasks.py</code> @shared_task; টেস্টে সরাসরি-কল; idempotent; <strong>#1190: web-প্রসেসেও broker/result env</strong>। Redis: DB0 ক্যাশে · DB2 broker · DB3 result (+SSE)। Settings: base (স্পর্শ-নিষেধ/এস্কালেশন) + dev/prod/test env-ওভাররাইড (.env.example); prod FRONTEND_URL-গার্ড। Compose: app+mysql+redis+worker+beat+nginx; dev MySQL 3307; লোকাল-টেস্ট env দেখো দরজা ২০। রোগ-নির্ণয়: লক্ষণ→beat/worker/broker-লগ।</p>`
  }
});


doors.push({
  num: 34,
  icon: "🧪",
  color: "#34d399",
  name: "পরীক্ষার কারখানা",
  subtitle: "The Testing Factory — Fixtures, MSW, Pins, TDD",
  tech: "conftest role fixtures, pytest-django patterns, vitest+MSW shape, wire/schema/silence pins, TDD loop",
  spirit: "ইমতিহান-প্রস্তুতি — preparing the test before the metal is poured",
  secret: "প্রথমে ব্যর্থ-পরীক্ষা লেখো, তারপর ধাতু ঢালো — পরীক্ষা না দেখে ঢালা ধাতু অন্ধ বিশ্বাস।",
  recall: {
    q: "MSW হ্যান্ডলার কোথায় সাজাও?",
    qen: "Where do MSW handlers go?",
    a: "Spec-লোকাল — server.use() দিয়ে ওই টেস্টের জন্য; গ্লোবাল ডিফল্ট tests/msw/handlers/-এ, কখনো মিউটেট নয়।",
    aen: "Spec-local via server.use(); global defaults live in tests/msw/handlers/ and are never mutated."
  },
  story: `<p class="scene-setting">কামার-পাড়ার পাশেই পরীক্ষার কারখানা। প্রধান <strong>কারিগর সেলিমা</strong> — কামারের ঢালাই শুরুর
  <em>আগে</em> তাঁর খাতায় পরীক্ষা লেখা থাকে: "এই তলোয়ার ১০০০ কোপ সইবে; না সইলে ঢালাই ব্যর্থ।" নতুন কামার হাসে —
  "তলোয়ার তো এখনো নেই, পরীক্ষা কীসের?" সেলিমা শান্ত: <strong>"পরীক্ষা আগে থাকলেই তো ব্যর্থ দেখবে — ব্যর্থ না দেখা
  পরীক্ষা অন্ধ।"</strong> ঢালাই হলো, তলোয়ার গেল তাঁর যন্ত্রে — প্রথম কোপেই ভাঙল। কামার মাথা চুলকাল; সেলিমা খাতা
  উল্টে দেখাল: ঠিক যেখানে ভাঙল, সেখানেই তাঁর লেখা ছিল "এখানে দুর্বল হবে।" তাঁর কারখানায় তিন ধরনের যন্ত্র:
  <strong>ভূমিকা-পাতা</strong> (fixtures — প্রতিটি রোলের মানুষ সাজানো, factory_boy নেই, সরাসরি সাজানো), <strong>নকল-বাজার</strong>
  (MSW — BE-এর ছায়া-দোকান, প্রতিটি পরীক্ষার নিজের ছায়া), আর <strong>সীল-ফাঁস-ধরা</strong> (পিন — চুক্তি/স্কিমা/নীরবতার)।</p>
  <p class="scene-setting en">Next to the smiths' quarter stands the testing factory. Chief <strong>Karigor
  Selima</strong> — her book carries the test BEFORE the pour: "this blade must survive 1000 strikes; else
  the pour fails." A new smith laughs — "no blade yet, test what?" Selima, calm: <strong>"the test must exist
  first to FAIL — a test that has never failed is blind."</strong>" The pour happens, the blade hits her
  machine — snaps on the first strike. The smith scratches his head; Selima flips her book: exactly where it
  snapped, she had written "weak here." Her factory has three machines: <strong>setting-pages</strong>
  (fixtures — each role's person arranged, no factory_boy), a <strong>shadow-market</strong> (MSW — the BE's
  stand-in shop, each test with its own shadow), and <strong>seal-leak-catchers</strong> (the pins).</p>
  <div class="code-block">পরীক্ষার কারখানা — দুই পাড়া, এক নিয়ম

ব্যাকএন্ড-পাড়া (pytest-django):
  ভূমিকা-পাতা: conftest.py (রুট) — auth_client,
    auth_client_as(role), রোল-ভিত্তিক user fixtures
    · factory_boy নেই — মডেল সরাসরি বানাও
    · is_staff সম্পত্তি! role='admin' দাও, is_staff=True নয়
  আকার:
    @pytest.mark.django_db
    def test_approve_forbidden_for_peter(auth_client_as):
      c = auth_client_as('timesheet_processor')
      r = c.post('/api/invoices/saved/89/transition/',
                 {'action': 'approve'})
      assert r.status_code == 403
  কভার করো: happy · প্রতি-রোল 200/403/404 ·
    যাচাই-ত্রুটি · এজ
  কভারেজ-মেঝে: 87% (pytest.ini) — র‍্যাচেট উপরেই

  তিন সীল-ফাঁস-ধরা (পিন):
  ① wire-contract pin — @extend_schema(responses)-এর
     প্রতিটি key বনাম প্রকৃত wire
     নমুনা: apps/clients/tests/test_detail_wire_contract.py
  ② schema-pin — raw SQL-এর, textual assert
     (runtime-execute নয় — MySQL ট্রানজেকশন বিষ, PR #74)
     নমুনা: apps/invoices/tests/test_payments_schema.py
  ③ নীরবতা-পিন — bare catch {} প্যাটার্ন টেস্টে আটকে:
     নতুন ইনস্ট্যান্স ঢাললে পুরনো পিন ভাঙে — সেটাই উদ্দেশ্য

  ডক-পিন: scripts/verify_docs.py — ২৩ যান্ত্রিক দাবি

ফ্রন্টএন্ড-পাড়া (vitest + MSW):
  বিন্যাস: src/tests/** — সোর্স-মিরর পথ
    features/x/views/Y.vue → tests/features/x/views/Y.spec.ts
    ⚠ co-located নিষেধ — vitest config ফেল করে
  নকল-বাজার (MSW): setup.ts বুট করে; হ্যান্ডলার
    spec-লোকাল server.use() দিয়ে — গ্লোবাল
    tests/msw/handlers/ কখনো মিউটেট নয়
  আকার:
    it('renders rows from API', async () => {
      server.use(http.get('/api/clients/', () =>
        HttpResponse.json({ rows: [mockClient], total: 1 })))
      mount(View); await flushPromises()
      expect(wrapper.text()).toContain(mockClient.company_name)
    })
  কভার: loading · empty · populated · error (৪-অবস্থা
    বাধ্যতামূলক) · রোল-ভেরিয়েশন প্রাসঙ্গিক হলে
  কম্পোনেন্ট-পরীক্ষা: @vue/test-utils mount;
    স্টোর-পরীক্ষা: setActivePinia(createPinia()) beforeEach

TDD-চক্র (সেলিমার খাতা-আগে নিয়ম):
  🔴 ব্যর্থ-পরীক্ষা লেখো (কমিট-আগে নয়, ধাতু-আগে)
  🟢 ন্যূনতম কোড দিয়ে পাস করাও
  🔵 রিফ্যাক্ট — পরীক্ষা সবুজ থাকতে থাকতে
  বাগ-ক্ষেত্রে: আগে ব্যর্থ-পরীক্ষা যেটা ওই বাগ ধরত,
    তারপর ফিক্স — "ফিক্স পরীক্ষা ছাড়া = বাগ ফিরছে"

E2E (Playwright): PR-গেটে শুধু auth.spec;
  বাকি workflow_dispatch — ক্রস-স্ট্যাক PR-এ
  ম্যানুয়াল-স্মোক নোট PR-বর্ণনায় (gotcha #5)</div>
  <div class="verse">পরীক্ষা আগে — "মৃত্যুর আগেই পাঠানো হয়েছে তোমাদের পরীক্ষা" নয় বরং ২৩:৩০-এর প্রশ্নভাব: যে মনে করে সে স্থির, সে-ই প্রথম পতিত। সেলিমার খাতা-আগে নিয়ম সেই প্রশ্নের কারিগরি রূপ: নিজের ধাতুকে ভাঙার সুযোগ দাও ঢালার আগেই — ক্রোধে নয়, ভালোবাসায়। যে পরীক্ষা কখনো ব্যর্থ হয়নি, সে সাক্ষ্য নয় — প্রশ্নচিহ্ন।</div>
  <div class="diagram">
    <div class="diag-title">Two Quarters, One Rule — Testing Layout</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="262" height="200" rx="12" fill="rgba(45,212,191,0.07)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="146" y="40" text-anchor="middle" fill="#5eead4" font-size="10.5" font-weight="700">🐍 BE-পাড়া (pytest-django)</text>
      <text x="146" y="62" text-anchor="middle" fill="#94a3b8" font-size="8">conftest.py: auth_client_as(role)</text>
      <text x="146" y="76" text-anchor="middle" fill="#94a3b8" font-size="8">factory_boy নেই · is_staff=property</text>
      <text x="146" y="100" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="600">তিন পিন:</text>
      <text x="146" y="116" text-anchor="middle" fill="#94a3b8" font-size="7.5">① wire-contract (schema↔wire)</text>
      <text x="146" y="130" text-anchor="middle" fill="#94a3b8" font-size="7.5">② schema-pin (raw SQL, textual)</text>
      <text x="146" y="144" text-anchor="middle" fill="#94a3b8" font-size="7.5">③ নীরবতা-পিন (bare catch)</text>
      <text x="146" y="168" text-anchor="middle" fill="#94a3b8" font-size="8">কভার: happy+রোল-ম্যাট্রিক্স+এজ</text>
      <text x="146" y="182" text-anchor="middle" fill="#94a3b8" font-size="8">মেঝে 87% — র‍্যাচেট উপরে</text>
      <text x="146" y="202" text-anchor="middle" fill="#64748b" font-size="7.5">+ verify_docs.py (২৩ দাবি)</text>
      <rect x="292" y="15" width="253" height="200" rx="12" fill="rgba(129,140,248,0.07)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="418" y="40" text-anchor="middle" fill="#a5b4fc" font-size="10.5" font-weight="700">📗 FE-পাড়া (vitest+MSW)</text>
      <text x="418" y="62" text-anchor="middle" fill="#94a3b8" font-size="8">src/tests/** মিরর-পথ</text>
      <text x="418" y="76" text-anchor="middle" fill="#94a3b8" font-size="8">co-located নিষেধ</text>
      <text x="418" y="100" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="600">নকল-বাজার:</text>
      <text x="418" y="116" text-anchor="middle" fill="#94a3b8" font-size="7.5">MSW server.use() spec-লোকাল</text>
      <text x="418" y="130" text-anchor="middle" fill="#94a3b8" font-size="7.5">গ্লোবাল handlers/ অ-মিউটেবল</text>
      <text x="418" y="154" text-anchor="middle" fill="#94a3b8" font-size="8">৪-অবস্থা বাধ্যতামূলক:</text>
      <text x="418" y="168" text-anchor="middle" fill="#94a3b8" font-size="8">loading · empty · populated · error</text>
      <text x="418" y="192" text-anchor="middle" fill="#94a3b8" font-size="8">স্টোর: setActivePinia প্রতি-টেস্ট</text>
      <text x="418" y="206" text-anchor="middle" fill="#64748b" font-size="7.5">E2E: auth মাত্র PR-গেটে</text>
      <rect x="100" y="238" width="360" height="52" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="280" y="258" text-anchor="middle" fill="#fcd34d" font-size="9.5" font-weight="700">সেলিমার চক্র: 🔴 ব্যর্থ-পরীক্ষা → 🟢 ন্যূনতম পাস → 🔵 রিফ্যাক্ট</text>
      <text x="280" y="276" text-anchor="middle" fill="#94a3b8" font-size="8">বাগ? আগে সেই বাগ ধরার ব্যর্থ-পরীক্ষা — ফিক্স পরীক্ষা ছাড়া মানে বাগ ফিরছে</text>
      <text x="280" y="303" text-anchor="middle" fill="#64748b" font-size="9">যে পরীক্ষা কখনো ব্যর্থ হয়নি, সে সাক্ষ্য নয় — প্রশ্নচিহ্ন</text>
    </svg>
    <div class="diag-cap">দুই পাড়া, এক খাতা-আগে নিয়ম; তিন পিন তিন ফাঁস-ধরা, নকল-বাজার প্রতি-টেস্টের নিজের।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সবচেয়ে সূক্ষ্ম ফাঁদ:</strong> (১) schema-pin-এ runtime <code>cursor.execute</code> — MySQL ট্রানজেকশন বিষ ছড়ায় পরের টেস্টও মারে (PR #74); textual assert-ই শুধু। (২) টেস্টে <code>is_staff=True</code> সেট — AttributeError; <code>role='admin'</code> লিখো। (৩) MSW-র গ্লোবাল হ্যান্ডলার মিউটেট — পাশের টেস্ট রহস্যময়ভাবে ভাঙে।</div></div>
  <div class="secret-box">🧪 আগে ব্যর্থ দেখো, পররে ঢালো — তিন পিন, চার অবস্থা, খাতা-আগে; ফিক্স পরীক্ষা ছাড়া পূর্ণ নয়। / Red first, then pour: three pins, four states — a fix without its test is unfinished.</div>`,
  senior: {
    title: "Testing Map",
    body: `<p>BE: conftest (<code>auth_client_as(role)</code>), সরাসরি-মডেল (factory_boy নেই), <code>django_db</code> মার্ক; কভারেজ-মেঝে 87%। পিন: wire-contract + schema-pin (textual) + নীরবতা-পিন + verify_docs.py। FE: <code>src/tests/**</code> মিরর-পাঠ; MSW <code>server.use()</code> spec-লোকাল; ৪-অবস্থা; স্টোর-টেস্টে setActivePinia। TDD: 🔴→🟢→🔵; বাগফিক্স = আগে-ধরা-পরীক্ষা। E2E PR-গেটে auth মাত্র। ফাঁদ: runtime-execute pin, is_staff-সেট, গ্লোবাল-MSW-মিউটেট।</p>`
  }
});
