// doors-3-4.js — The Ledger Craftsman (LedgerPilot deep-dive)


doors.push({
  num: 3,
  icon: "🚢",
  color: "#94a3b8",
  name: "জাহাজঘাট ও মালপত্র",
  subtitle: "The Dock — Tooling, Docker & Deploy",
  tech: "ruff · pytest-cov · ESLint flat · vitest · docker multi-stage · gunicorn+whitenoise · nginx · compose",
  spirit: "তাবৎ — tabwīb (the careful packing of cargo for the journey)",
  secret: "কোড লেখা অর্ধেক কাজ — বাকি অর্ধেক গাঁথা: ছাঁচ-পরীক্ষা, বাক্সবন্দি (Docker), আর নিরাপদ-পথে পাঠানো (branch→promotion)।",
  recall: {
    q: "প্রোডাকশন-ইমেজ কি dev-এর মতোই?",
    qen: "Is the production image like dev's?",
    a: "না — multi-stage: builder-স্তরে হাতিয়ার, চূড়ান্ত স্তরে শুধু চালানোর ফাইল; non-root ইউজার, gunicorn(--reload ছাড়া)+whitenoise।",
    aen: "No — multi-stage: tools in builder, runtime-only final layer; non-root user, gunicorn (no --reload) + whitenoise."
  },
  story: `<p class="scene-setting">নদীর শেষ ঘাট — জাহাজঘাট। ঘাট-রক্ষক <strong>নৌকর আবদুল</strong> — তাঁর দুই মোটা বিধান। <strong>প্রথম:
  মাল যাবে বাক্সবন্দি</strong>। "তোমার দোকানের সব হাতিয়ার, সব পাথর, সব কাপড় — এক বাক্সে গাঁথা যাবে যেন যে-কোনো ঘাটে
  খুললেই একই রকম চলে। আমার ঘাটে 'আমার মেশিনে তো চলতো' কথা নিষিদ্ধ।" <strong>দ্বিতীয়: যাত্রার সিঁড়ি
  নির্ধারিত</strong>। ছোট খেয়া (feature-নৌকা) প্রথমে ভেতরের ঘাটে (development) — সেখানে হালকা টিকটিকি; তারপর
  বড় জাহাজ (promotion) বাইরের ঘাটে (production) — সেখানে পূর্ণ পরীক্ষা-মহড়া, তারপরই কেবল ছাড়পত্র। আর
  প্রতিটি বাক্সের গায়ে দুই স্তরের ছাপ: গাঁথার স্তরে (builder) যা লাগল, চালানোর স্তরে (runtime) শুধু যা
  চলবে — <strong>ভারী হাতিয়ার যাত্রায় সঙ্গী হয় না</strong>।</p>
  <p class="scene-setting en">The last ghat — the dock. Dockkeeper <strong>Naukar Abdul</strong> — two thick
  rules. <strong>First: cargo travels boxed.</strong> "All your tools, stones, cloth — sealed so any port
  opens the same thing. 'It worked on my machine' is banned at my dock." <strong>Second: the boarding stair
  is fixed.</strong> Small ferries (feature boats) first to the inner harbor (development) — light checks;
  then the great ship (promotion) to the outer harbor (production) — full drills, then the sailing permit.
  And every box carries two-layer seals: what building needed (builder layer) stays ashore; the sailing
  layer carries only what runs — <strong>heavy tools don't travel</strong>.</p>
  <div class="code-block">ঘাটের খাতা — হাতিয়ার, বাক্স, যাত্রা

ছাঁচ-পরীক্ষক (lint):
  BE: ruff (pyproject [tool.ruff] — E4/E7/E9/F)
  FE: ESLint flat-config — FSD-বিচ্ছিন্নতা + ui-টোকেন-আইন
    + Prettier (フォーマット)
  নিয়ম: lint-সতর্কতা জমানো নয় — সেদিনই সারো

একক-পরীক্ষা:
  BE: pytest + pytest-cov (মেঝে 87%; র‍্যাচেট-উপরে)
    · pytest.ini / pyproject-এ চিহ্ন-নিয়ম
  FE: vitest + @vue/test-utils + MSW; Playwright (e2e)
  বিস্তারিত দরজা ২৮-এ (পরীক্ষার কারখানা)

বাক্স (Docker — দুই-স্তর গাঁথুনি):
  Dockerfile:
    স্তর ১ builder — gcc/wheel-হাতিয়ার, pip install
      (requirements/{base,production}.txt), collectstatic,
      FE থাকলে node-build
    স্তর ২ runtime — কেবল venv+কোড+static;
      non-root ইউজার; ENTRYPOINT gunicorn
  মনে রাখো (prod-বিধান):
    · --reload কখনো নয় (prod-এ টাইমআউট-বিপদ)
    · whitenoise স্ট্যাটিক বাড়িয়ে দেয় (nginx-হালকা)
    · FRONTEND_URL env বিল্ড-সময়ে প্রলেপ
    · কনটেইনার-লগ json-logger-এ গুছিয়ে

ঘাট-বহর (docker-compose):
  dev (docker-compose.dev.yml): mysql(3307-ম্যাপ)+redis
    + vite(5173→8000-প্রক্সি) — হালকা, দ্রুত
  prod (docker-compose.yml): app+mysql+redis
    + celery-worker+celery-beat+nginx — পূর্ণ বহর
  আরও: deploy.sh (dev-reload/verify মোড), scripts/
    (generate_state.py, verify_docs.py, dump_api_types)

যাত্রার সিঁড়ি (branch → promotion):
  feature/fix-নৌকা → development (CI নেই — দ্রুত ঘুরে)
  মানুষ দেখে মার্জ করেন (অটো-মার্জ নিষেধ)
  promotion: development → production আলাদা PR
    — CI পূর্ণ + ডিপ্লয়; main/production-এ সরাসরি পুশ
    কখনো নয়
  prod-ডিপ্লয় স্থগিত-বিষয় (এস্কালেশন বিধান) —
    ব্যবহারকারী না বললে উসকে নয়

ঘাটের স্বাস্থ্য-টেবিল:
  · জাহাজ কি বেঁচে? /api/system_admin/health/ (liveness)
  · মাল কি ঠিক? চিহ্ন-পরীক্ষা সবুজ?
  · বাক্স কি একই? CI-ইমেজ-ট্যাগ ↔ রান-ট্যাগ
  · নদীর চাকা ঘুরছে? worker/beat-লগ (দরজা ২৭)</div>
  <div class="verse">তাবৎ — মাল সুরক্ষিতভাবে গাঁথা: বাণিজ্যিক জাহাজে মাল ফেলে দেওয়া হয় না, গুছিয়ে-বাঁধা হয় — কারণ পথ দীর্ঘ ও ঝড়জল। "পরিবর্তনের প্রতিরোধ করো না" নয়; বরং "তোমাদের কাজ সবচেয়ে কঠিন সময়ের জন্য প্রস্তুত করো" — আবদুলের দুই বিধান সেই প্রস্তুতি: বাক্সবন্দি নির্ভরতা, নির্ধারিত যাত্রা-সিঁড়ি। যে ঘাটে সবাই সব-রাস্তায় চড়ে, সেখানে একদিন সবাই একসাথে আটকায়।</div>
  <div class="diagram">
    <div class="diag-title">The Dock — Two Rules, Two Harbors</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowD3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="15" width="530" height="140" rx="12" fill="rgba(148,163,184,0.05)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="38" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="700">📦 বিধান ১ — মাল বাক্সবন্দি (multi-stage Docker)</text>
      <rect x="40" y="52" width="220" height="52" rx="9" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="150" y="72" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">স্তর ১ · builder</text>
      <text x="150" y="86" text-anchor="middle" fill="#94a3b8" font-size="7.5">gcc·wheel·pip·collectstatic</text>
      <text x="150" y="97" text-anchor="middle" fill="#64748b" font-size="7">ভারী হাতিয়ার — যাত্রায় যায় না</text>
      <rect x="300" y="52" width="220" height="52" rx="9" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.4"/>
      <text x="410" y="72" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="700">স্তর ২ · runtime</text>
      <text x="410" y="86" text-anchor="middle" fill="#94a3b8" font-size="7.5">venv+কোড+static · non-root</text>
      <text x="410" y="97" text-anchor="middle" fill="#64748b" font-size="7">gunicorn (--reload ✗) + whitenoise</text>
      <line x1="260" y1="78" x2="298" y2="78" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowD3)"/>
      <text x="280" y="70" text-anchor="middle" fill="#64748b" font-size="7">শুধু চালানোর জিনিস নামে</text>
      <text x="280" y="130" text-anchor="middle" fill="#94a3b8" font-size="8">বহর: dev-compose (mysql:3307 + redis + vite-প্রক্সি) · prod-compose (app+mysql+redis+worker+beat+nginx)</text>
      <text x="280" y="146" text-anchor="middle" fill="#64748b" font-size="7.5">ছাঁচ: ruff · ESLint-flat+Prettier · পরীক্ষা: pytest-cov(87%) · vitest+MSW · Playwright</text>
      <rect x="15" y="180" width="530" height="120" rx="12" fill="rgba(45,212,191,0.05)" stroke="#2dd4bf" stroke-width="1.3"/>
      <text x="280" y="204" text-anchor="middle" fill="#5eead4" font-size="10" font-weight="700">⛵ বিধান ২ — যাত্রার সিঁড়ি (দুই ঘাট)</text>
      <rect x="45" y="220" width="130" height="50" rx="9" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.4"/>
      <text x="110" y="240" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">ছোট খেয়া</text>
      <text x="110" y="254" text-anchor="middle" fill="#94a3b8" font-size="7">feat|fix/&lt;slug&gt; নৌকা</text>
      <rect x="215" y="220" width="130" height="50" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.4"/>
      <text x="280" y="240" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">ভেতরের ঘাট</text>
      <text x="280" y="254" text-anchor="middle" fill="#94a3b8" font-size="7">development · হালকা টিকটিকি</text>
      <rect x="385" y="220" width="140" height="50" rx="9" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.4"/>
      <text x="455" y="240" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="700">বাইরের ঘাট</text>
      <text x="455" y="254" text-anchor="middle" fill="#94a3b8" font-size="7">production · CI+মহড়া+ডিপ্লয়</text>
      <line x1="175" y1="245" x2="213" y2="245" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowD3)"/>
      <line x1="345" y1="245" x2="383" y2="245" stroke="#f87171" stroke-width="1.6" stroke-dasharray="5 3" marker-end="url(#arrowD3)"/>
      <text x="365" y="234" text-anchor="middle" fill="#f87171" font-size="7">promotion-PR</text>
      <text x="280" y="290" text-anchor="middle" fill="#64748b" font-size="8">মার্জ মানুষের হাতে · main/production-এ সরাসরি পুশ নিষেধ · prod-ডিপ্লয় স্থগিত-বিষয়</text>
    </svg>
    <div class="diag-cap">মাল বাক্সবন্দি (দুই-স্তর), যাত্রা নির্ধারিত (দুই ঘাট) — ঘাটে "আমার মেশিনে চলতো" কথা নেই।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ঘাটের প্রমাণিত বিপদ:</strong> prod-এ <code>gunicorn --reload</code> — রিকোয়েস্ট-টাইমআউটের নীরব উৎস; Docker-পোর্ট প্রকাশ করলে UFW বাইপাস (ডিফল্ট-ডকার-সতর্কতা); আর সিঁড়ি বাদ দিয়ে সরাসরি বাইরের ঘাটে পুশ — কখনো নয়। এছাড়া: STATE.md-না-রিজেন = ভেতরের ঘাটের ফটক-আটকা (দরজা ২৭)।</div></div>
  <div class="secret-box">🚢 মাল বাক্সবন্দি, যাত্রা নির্ধারিত — ভারী হাতিয়ার ঘাটে থাকে, মানুষ মার্জ করে, বাইরের ঘাটে মহড়া আগে। / Boxed cargo, fixed stair: heavy tools stay ashore, humans merge, drills precede the outer harbor.</div>`,
  senior: {
    title: "Tooling & Deploy Card",
    body: `<p>লিন্ট: ruff (BE) + ESLint-flat+Prettier (FE; FSD+টোকেন-আইন)। টেস্ট: pytest-cov (87% মেঝে) + vitest/MSW + Playwright। Docker: multi-stage (builder-হাতিয়ার → runtime-মাত্র; non-root; gunicorn --reload-ছাড়া + whitenoise; FRONTEND_URL-বিল্ড-প্রলেপ; json-লগ)। Compose: dev (mysql:3307+redis+vite-প্রক্সি) · prod (app+mysql+redis+worker+beat+nginx)। স্ক্রিপ্ট: deploy.sh, generate_state.py, verify_docs.py, dump_api_types। যাত্রা: feature→development (মানুষ-মার্জ) → promotion-PR→production (CI+ডিপ্লয়); সরাসরি-পুশ নিষেধ; prod-ডিপ্লয় এস্কালেশন-স্থগিত। স্বাস্থ্য: /api/system_admin/health/।</p>`
  }
});

doors.push({
  num: 4,
  icon: "🕌",
  color: "#2dd4bf",
  name: "ক্যারাভানসেরাই",
  subtitle: "The Caravanserai — Domain Map",
  tech: "LedgerPilot domain: the 4-step pipeline, read-heavy Xero integration",
  spirit: "আমানত — amānah (custody: never write without permission)",
  secret: "LedgerPilot একটি ক্যারাভানসেরাই — সে টাকা ছোঁয় না, শুধু রাস্তা দেখায় আর হিসাব রাখে।",
  recall: {
    q: "LedgerPilot Xero-তে কখন নিজে থেকে লেখে?",
    qen: "When does LedgerPilot write to Xero automatically?",
    a: "কখনো না — মাত্র ৩টি লেখার পথ, সবই অপারেটরের হাতে, সবই dry-run আগে (ADR-0009)।",
    aen: "Never — only 3 write surfaces, all operator-triggered, all dry-run first."
  },
  story: `<p class="scene-setting">রেশম পথের ধারে এক ক্যারাভানসেরাই — বালির ঝড় থেকে ক্যারাভানদের আশ্রয়।
  মালিক <strong>ক্যারাভানবাসী হালিমা</strong>, তাঁর হাতে সবসময় একটা পেতলের দরজার হাতল। খেয়াল করো:
  হালিমা কখনো ব্যবসায়ীদের মাল খুলে দেখেন না, দাম ঠিক করেন না, কেনাবেচাও করেন না। তিনি শুধু
  রাখেন: কে ঢুকল, কে বেরোল, কার কত মাল, কোন রাতে কোন দল রওনা দিল।</p>
  <p class="scene-setting en">A caravanserai on the Silk Road. Its keeper, <strong>Halima the Caravaner</strong>,
  holds a brass door-handle. Notice: she never opens the merchants' crates, never sets prices, never trades.
  She only keeps the record — who entered, who left, whose goods, which caravan departed which night.</p>
  <div class="dialogue">তুমি জিজ্ঞেস করো — "হালিমা আম্মা, আপনি তো সব মালের মধ্যে থাকেন, একবারও বিক্রি করেন না কেন?"
  <br>হালিমা হাসেন — "বিক্রি ব্যবসায়ীর কাজ। আমার কাজ <strong>আমানত</strong>। যদি আমি নিজে থেকে একটা বাক্সও খুলি,
  কে আর আমার খাতায় বিশ্বাস করবে?"</div>
  <div class="dialogue en">You ask — "Aunt Halima, you live among all this wealth. Why never trade?"
  <br>Halima smiles — "Trading is the merchant's work. Mine is <strong>custody</strong>. If I open even one
  crate on my own, who will trust my ledger?"</div>
  <div class="code-block">LEDGERPILOT = সেই ক্যারাভানসেরাই

৪টি কদম (the 4-step pipeline):
  Peter → টাইমশিট Excel আপলোড (TimesheetReport)
  Sai   → ইনভেন্টরি CSV + InvoiceSave ব্যাচ তৈরি
  Vicki → ব্যাচ approve + auto-min-check ট্যাব
  Owen  → NACHA ফাইল → ব্যাংক ACH

Xero সম্পর্ক (read-heavy, write-manual):
  পড়া: দৈনিক আয়না (sync_current_month), webhook, Explorer
  লেখা: মাত্র ৩টি পথ — পেমেন্ট, ক্রেডিট-নোট, ইনভয়েস
        সবই অপারেটর-ট্রিগার্ড, সবই dry-run-first
        স্বয়ংক্রিয় push = প্রত্যাখ্যাত (ADR-0009)

মূল সত্য:
  InvoiceSave = অভ্যন্তরীণ রিভিউ ইউনিট (LP-র নিজের)
  XeroInvoice = কাস্টমার-মুখী দলিল (Xero-র তৈরি, LP-র আয়নায় দেখা)
  "invoice" শব্দটা একা কখনো বলা নিষেধ — সবসময় ব্যাচ না Xero বলো</div>
  <div class="verse">আমানত — আল্লাহ আদেশ করেন: "ন্যায়ের সাক্ষী হও, আল্লাহর জন্য, যদিও তা তোমার বিরুদ্ধে যায়" (কুরআন ৪:১৩৫)। হালিমার খাতা তাই আমানত — সে নিজের স্বার্থে এক অক্ষরও বদলায় না। LedgerPilot-ও তাই: Xero-র টোকেন পড়ে, আয়না রাখে, কিন্তু লেখে শুধু মানুষের আদেশে।</div>
  <div class="diagram">
    <div class="diag-title">The Caravanserai — LedgerPilot Domain Map</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowT1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="180" y="20" width="200" height="52" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="42" text-anchor="middle" fill="#5eead4" font-size="12" font-weight="600">Peter · TimesheetReport</text>
      <text x="280" y="58" text-anchor="middle" fill="#94a3b8" font-size="9">QuickBooks Time Excel</text>
      <rect x="180" y="105" width="200" height="52" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="127" text-anchor="middle" fill="#5eead4" font-size="12" font-weight="600">Sai · InvoiceSave batch</text>
      <text x="280" y="143" text-anchor="middle" fill="#94a3b8" font-size="9">DRAFT → IN_REVIEW → APPROVED</text>
      <rect x="180" y="190" width="200" height="52" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="212" text-anchor="middle" fill="#5eead4" font-size="12" font-weight="600">Owen · NACHA file</text>
      <text x="280" y="228" text-anchor="middle" fill="#94a3b8" font-size="9">auto-pay clients → bank ACH</text>
      <rect x="430" y="105" width="115" height="137" rx="10" fill="rgba(148,163,184,0.08)" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="487" y="155" text-anchor="middle" fill="#cbd5e1" font-size="13" font-weight="700">XERO</text>
      <text x="487" y="172" text-anchor="middle" fill="#94a3b8" font-size="8.5">customer-facing</text>
      <text x="487" y="184" text-anchor="middle" fill="#94a3b8" font-size="8.5">invoices</text>
      <line x1="380" y1="131" x2="428" y2="150" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowT1)"/>
      <text x="404" y="128" text-anchor="middle" fill="#5eead4" font-size="8">manual entry</text>
      <line x1="487" y1="244" x2="487" y2="268" stroke="#f97316" stroke-width="0" />
      <line x1="430" y1="216" x2="382" y2="216" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrowT1)"/>
      <text x="406" y="234" text-anchor="middle" fill="#94a3b8" font-size="8">daily mirror</text>
      <line x1="280" y1="72" x2="280" y2="103" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowT1)"/>
      <line x1="280" y1="157" x2="280" y2="188" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowT1)"/>
      <rect x="15" y="105" width="130" height="52" rx="10" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.5"/>
      <text x="80" y="127" text-anchor="middle" fill="#f87171" font-size="11" font-weight="600">Vicki · min-check</text>
      <text x="80" y="143" text-anchor="middle" fill="#94a3b8" font-size="9">XeroInvoice mirror পড়ে</text>
      <line x1="145" y1="131" x2="178" y2="131" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrowT1)"/>
      <text x="280" y="285" text-anchor="middle" fill="#64748b" font-size="9">বাঁ থেকে ডানে: সময় → ব্যাচ → টাকা। Xero ডানে — যাওয়া হাতে, ফেরা আয়নায়।</text>
    </svg>
    <div class="diag-cap">চার কদমের ক্যারাভান — Xero বাইরের বাজার; LP ভেতরের খাতা। লেখা যায় হাতে, পড়া যায় আয়নায়।</div>
  </div>
  <div class="secret-box">🕌 ক্যারাভানসেরাই মাল ছোঁয় না, খাতা রাখে — LedgerPilot Xero ছোঁয় না, আয়না রাখে। তিনটি লেখার পথ, সবই মানুষের হাতে। / Custody, not commerce: read-heavy by design, writes are operator-owned.</div>`,
  senior: {
    title: "Domain Cheat-sheet",
    body: `<p>৪ ধাপ: Peter (upload) → Sai (batch+credits) → Vicki (approve+min-check) → Owen (NACHA)। Xero সম্পর্ক: দৈনিক <code>sync_current_month</code> আয়না + ৩টি ম্যানুয়াল push (payment/credit/invoice — সব dry-run-first)। <code>InvoiceSave</code> = অভ্যন্তরীণ ব্যাচ; <code>XeroInvoice</code> = Xero-র দলিলের আয়না। বিভ্রান্তি নিষেধ: "invoice" একা বলা নয়।</p>`
  }
});
