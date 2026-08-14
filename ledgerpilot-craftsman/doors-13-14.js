// doors-13-14.js — The Ledger Craftsman (LedgerPilot deep-dive)


doors.push({
  num: 13,
  icon: "🌗",
  color: "#5eead4",
  name: "অর্ধমাসের জোয়ার",
  subtitle: "The Half-Month Tide — Billing Cycles",
  tech: "CycleLog/CycleState, P1/P2 periods, beat tasks, ready-to-complete detection, review-meeting close",
  spirit: "ওয়াক্ত — waqt (the appointed time: work moves with the tide, not against it)",
  secret: "চক্র মানে কাজের ঢেউ, পিরিয়ড মানে সময়ের জানালা — ঢেউ এক মাসে দুইবার, বন্ধ হয় রিভিউ-মিটিংয়ে, ঘড়ির কলে নয়।",
  recall: {
    q: "৩ তারিখের beat কোন পিরিয়ড প্রস্তুত করে?",
    qen: "Which period does the 3rd-of-month beat mark ready?",
    a: "আগের মাসের P2 (১৬-শেষ)। ১৭-তারিখের beat বর্তমান মাসের P1 — ঢেউ সবসময় এক ধাপ পেছন থেকে বন্ধ করে।",
    aen: "The PRIOR month's P2; the 17th closes the current month's P1 — the tide always closes one step behind."
  },
  story: `<p class="scene-setting">নদীর ঘাটে জেলেপাড়ার মুরুব্বি <strong>কাপ্তান মজিনুর</strong> — তাঁর দেওয়ালে এক অর্ধমাসের জোয়ার-ক্যালেন্ডার।
  প্রতি মাসে দুই ঢেউ: <strong>প্রথম ঢেউ</strong> ১ থেকে ১৫, <strong>দ্বিতীয় ঢেউ</strong> ১৬ থেকে শেষ। নিয়মটা প্রথমে অদ্ভুত
  লাগে — <strong>৩ তারিখে তিনি গত মাসের দ্বিতীয় ঢেউ বন্ধ করেন</strong>, আর ১৭ তারিখে এ-মাসের প্রথমটা। কেন? কারণ জালের
  মাছ যখন পুরো ওঠে (P2-এর সব ইনভয়েস জমা), তখনই তো বাজারে পাঠানোর পালা — ঢেউ শেষ হওয়া আর হিসাব-বন্ধ এক কথা নয়।
  আর বাজার-বন্ধের শেষ কথা? সে বলেন না ঘড়ি — বলে <strong>সাপ্তাহিক বৈঠকের টেবিল</strong>: যতক্ষণ না মজুনুর নিজ হাতে
  "চক্র সম্পূর্ণ" সিল দেন, খাতা খোলা থাকে — যেন শেষ স্বাক্ষরের পেছনে একটাই নাম থাকে।</p>
  <p class="scene-setting en">The fishermen's elder at the river ghat, <strong>Captain Mojinnur</strong> — a
  half-month tide-calendar on his wall. Two tides a month: <strong>first tide</strong> days 1–15, <strong>second
  tide</strong> 16–end. The rule looks odd at first — <strong>on the 3rd he closes LAST month's second tide</strong>;
  on the 17th, this month's first. Why? Because only when the whole catch is landed (all P2 invoices in) is it
  time for market — a tide ending and a ledger closing are not the same moment. And the final word on closing?
  Not the clock — the <strong>weekly meeting table</strong>: until Mojinnur sets the "cycle complete" seal by his
  own hand, the book stays open — one name behind the final signature.</p>
  <div class="code-block">Cycle বনাম Period — দুই শব্দ, দুই সত্তা

Period (সময়ের জানালা):
  (period_year, period_month, period_number ∈ {1,2})
  InvoiceSave-এর মাঠ — ডেটা
  P1 = ১-১৫ · P2 = ১৬-শেষ

Cycle (কাজের ঢেউ):
  ট্র্যাক: ts_cycle_log-এ (CycleLog)
  অবস্থা: open → ready_for_review → completed
  এক পিরিয়ডে একাধিক সারি সম্ভব (রি-রান) — তাই
  ⚠ হ্যান্ডঅফ/সমাপ্তি-সনাক্তকরণ কী দেয় পিরিয়ড-ত্রয়ী,
    কখনো cycle_id নয় (PRD #562 + ADR-003)
  CycleStateOracle — পিরিয়ডের সমষ্টিগত সত্য জিজ্ঞাসার ঘর

ঘড়ির দুই কল (Celery beat):
  mark_cycle_ready_p2 — ৩ তারিখ ০৯:০০ → আগের মাসের P2
  mark_cycle_ready_p1 — ১৭ তারিখ ০৯:০০ → চলতি মাসের P1
  (৩ তারিখ = আগের-মাস প্যাটার্ন — জোয়ার এক ধাপ পিছিয়ে বন্ধ)

সমাপ্তি-সনাক্তকরণ (cycle_progress.py):
  ready-to-complete যদি চারটিই সত্য:
  ① পিরিয়ডের প্রতিটি InvoiceSave = EXPORTED
  ② পিরিয়ডের প্রতিটি NachaEntry-র
     NachaPaymentLedger.reconciled = True
  ③ সর্বশেষ CycleLog.completed_at IS NULL
  ④ সেই সারি এখনো notified-ready হয়নি
  → পেমেন্ট-প্রসেসর + অ্যাডমিনকে হ্যান্ডঅফ (সালিমের বাঁশি)
  → স্বয়ং-বন্ধ নয়!

বন্ধের একমাত্র দরজা (এক-সত্য পৃষ্ঠা):
  POST /api/billing/cycle/complete/
  FE: শুধু ReviewMeetingView-র "Mark cycle complete" বাটন
  BE গেট: CanCompleteBillingCycle (admin-only)
  ⚠ ড্যাশবোর্ডে শর্টকাট যোগ করা নিষেধ — বন্ধ মানে
    রিভিউ-মিটিংয়ের ফলাফল, ডেটা-প্রস্তুতির ধাপ নয় (ADR-003)

হ্যান্ডঅফ-নীতি (ADR-003 নিয়ম ৬):
  চক্র-ঘটনার নোটিফিকেশন best-effort — ব্যর্থ হলে চক্র
  ফেরায় না; dedup = পিরিয়ড-কীড স্ট্যাম্প কলাম</div>
  <div class="verse">ওয়াক্ত — "নিশ্চয়ই নামাজ মুমিনদের উপর নির্ধারিত সময়ে ফরজ" (৪:১০৩)। সময়ের বাঁধন এবং সেবার আন্তরিকতা — দুটোই ওয়াক্তের শিক্ষা। মজিনুরের ক্যালেন্ডার সেই ওয়াক্ত: ঢেউ আপনি আসে, কিন্তু বন্ধের সময় নির্ধারিত, আর শেষ-সিল সবসময় একটি নামে — কারণ "প্রত্যেকেই তার কর্মের কব্জায় আটকে থাকবে" নয় বরং প্রতিটি কাজের একজন দায়ি থাকে।</div>
  <div class="diagram">
    <div class="diag-title">Two Tides a Month — Cycle Timeline</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowW19" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="20" width="245" height="120" rx="10" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="137" y="45" text-anchor="middle" fill="#5eead4" font-size="10.5" font-weight="700">🌊 জুন P1</text>
      <text x="137" y="62" text-anchor="middle" fill="#94a3b8" font-size="8">জানালা: ১-১৫ জুন</text>
      <text x="137" y="82" text-anchor="middle" fill="#94a3b8" font-size="8">১৭ জুন ০৯:00 beat → ready_for_review</text>
      <text x="137" y="100" text-anchor="middle" fill="#94a3b8" font-size="8">ব্যাচ → EXPORTED → NACHA → reconciled</text>
      <text x="137" y="122" text-anchor="middle" fill="#fbbf24" font-size="8">রিভিউ-মিটিং সিল → completed</text>
      <rect x="300" y="20" width="245" height="120" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="422" y="45" text-anchor="middle" fill="#a5b4fc" font-size="10.5" font-weight="700">🌊 জুন P2</text>
      <text x="422" y="62" text-anchor="middle" fill="#94a3b8" font-size="8">জানালা: ১৬-৩০ জুন</text>
      <text x="422" y="82" text-anchor="middle" fill="#94a3b8" font-size="8">৩ জুলাই ০৯:00 beat → ready (আগের-মাস প্যাটার্ন)</text>
      <text x="422" y="100" text-anchor="middle" fill="#94a3b8" font-size="8">+ min-check: P1+P2 যোগ একবার মেঝে-যাচাই</text>
      <text x="422" y="122" text-anchor="middle" fill="#fbbf24" font-size="8">রিভিউ-মিটিং সিল → completed</text>
      <rect x="60" y="170" width="440" height="46" rx="9" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="189" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="600">🔓 বন্ধের একমাত্র দরজা: ReviewMeetingView বাটন</text>
      <text x="280" y="205" text-anchor="middle" fill="#94a3b8" font-size="8">admin-গেটেড · ড্যাশবোর্ডে শর্টকাট নিষেধ — শেষ সিলে একটাই নাম</text>
      <rect x="60" y="232" width="440" height="40" rx="9" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.2"/>
      <text x="280" y="249" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="600">ready-to-complete সনাক্তকরণ (৪-শর্ত)</text>
      <text x="280" y="263" text-anchor="middle" fill="#94a3b8" font-size="8">সব EXPORTED · সব reconciled · completed_at খালি · অ-অবহিত → হ্যান্ডঅফ (স্বয়ং-বন্ধ নয়)</text>
      <text x="280" y="290" text-anchor="middle" fill="#64748b" font-size="9">period = জানালা (ডেটা), cycle = ঢেউ (কাজ) — কী = পিরিয়ড-ত্রয়ী</text>
    </svg>
    <div class="diag-cap">মাসে দুই ঢেউ; বন্ধ হয় এক ধাপ পিছিয়ে, রিভিউ-টেবিলে, এক নামের সিলে।</div>
  </div>
  <div class="callout info"><span class="co-icon">🎯</span><div><strong>গুলিয়ে ফেলার শীর্ষ জুটি:</strong> "cycle" আর "period" প্রতিশব্দ নয়। পিরিয়ড = অর্ধমাসের জানালা (InvoiceSave-এর মাঠ); চক্র = সেই জানালা প্রক্রিয়া করার কাজের প্রবাহ (ts_cycle_log-এর অবস্থা)। কোডে বা কথায় এক করলে হ্যান্ডঅফ-ডেডআপ ভুল কী ধরবে — সেটাই ADR-003-এর প্রথম শিক্ষা।</div></div>
  <div class="secret-box">🌗 মাসে দুই ঢেউ, বন্ধ এক ধাপ পিছিয়ে — আর শেষ সিল টেবিলে, ঘড়িতে নয়। / Two tides a month, closed one step behind, sealed at the review table — never by the clock.</div>`,
  senior: {
    title: "Cycles & Periods Map",
    body: `<p><strong>Period</strong> = (year, month, P1/P2) — InvoiceSave-এর ডেটা-মাঠ। <strong>Cycle</strong> = প্রবাহ (ts_cycle_log: open→ready_for_review→completed; রি-রানে একাধিক সারি — তাই সব সনাক্তকরণ/হ্যান্ডঅফ পিরিয়ড-ত্রয়ী-কীড, cycle_id নয়; CycleStateOracle)। Beat: ৩ তারিখ (আগের মাস P2) + ১৭ (চলতি P1)। ready-to-complete ৪-শর্ত (সব EXPORTED, সব NachaEntry reconciled, completed_at খালি, অ-অবহিত) → হ্যান্ডঅফ, স্বয়ং-বন্ধ নয়। বন্ধ: শুধু ReviewMeetingView বাটন → <code>/api/billing/cycle/complete/</code>, admin-গেটেড; ড্যাশবোর্ড শর্টকাট নিষেধ (ADR-003)। নোটিফিকেশন best-effort (নিয়ম ৬)।</p>`
  }
});

doors.push({
  num: 14,
  icon: "🖊️",
  color: "#5eead4",
  name: "কালির আগে চক",
  subtitle: "Chalk Before Ink — Preview-Confirm Flow",
  tech: "Dry-run-first writes: plan_*/commit_* pair (BE), usePreviewConfirmFlow (FE), ADR-0009",
  spirit: "ইস্তিখারাহ — istikhārah (seeking guidance before committing)",
  secret: "আসল কালি বরাবর শেষ ঢালায় — আগে চকে হলেও পুরো নকশা দেখে নাও।",
  recall: {
    q: "confirm বাটন pressed হলেই কি লেখা শুরু হয়?",
    qen: "Does pressing confirm start the write immediately?",
    a: "না — confirm শুধু 'preview' অবস্থা থেকেই সম্ভব; idle/এrror থেকে নয়। অন্ধ লেখা নিষেধ (ADR-0009)।",
    aen: "No — confirm is reachable only from the 'preview' phase; blind writes are refused."
  },
  story: `<p class="scene-setting">ইস্তাম্বুলের ক্যালিগ্রাফি কারখানা। উস্তাদ <strong>মুহসিন কাতিব</strong> — তাঁর বাঁ হাতের
  তালুতে সাদা চকের গুঁড়ো লেগে থাকে সবসময়। সুলতানের ফরমান লিখতে বসার আগে তিনি পুরো কাগজে চক দিয়ে
  লিখেন — প্রতিটি অক্ষর, প্রতিটি বিন্দু। তারপর পেছনে সরে দাঁড়িয়ে দেখেন। কোথাও একটু বাঁকা? চক মুছে
  আবার। শুধু যখন নকশা নিখুঁত — তখনই কালির দোয়াত খোলেন।</p>
  <p class="scene-setting en">An Istanbul calligraphy workshop. Master <strong>Muhsin Katib</strong> — chalk dust
  permanently on his left palm. Before writing a sultan's decree he chalks the ENTIRE design first. Steps back.
  Looks. One letter crooked? Wipe, redo. Only when the plan is perfect does he open the inkwell.</p>
  <div class="dialogue">শাগিরদ জিজ্ঞেস করে — "উস্তাদ, দুইবার লেখা — সময়ের অপচয় না?"
  <br>মুহসিন — "কালি মুছতে পারো? পারো না। চক মুছতে পারো? পারো। তাই ভুল খুঁজতে চক, আর সত্য লিখতে কালি।
  <strong>যে কালি নিজে থেকে পড়ে যায়, সে আমার দোয়াতে থাকতে পারে না।</strong>"</div>
  <div class="dialogue en">An apprentice — "Master, writing twice — isn't that waste?"
  <br>Muhsin — "Can you erase ink? No. Chalk? Yes. So errors belong to chalk, truth to ink.
  <strong>An inkwell that tips itself over has no place at my desk.</strong>"</div>
  <div class="code-block">তিনটি Xero-লেখা পথ = তিনবার একই চক-কালি ছাঁচ

BE (এক ফাইলে দুই ফাংশন):
  plan_invoice_push(save_id)      # চক: dry-run, কোনো লেখা নেই
    → প্রতি-সারি পরিকল্পনা:
      status = 'would_push' | 'skipped_already' | 'unresolved'
  commit_invoice_push(save_id, actor)  # কালি: আসল লেখা + EXPORTED transition
    # idempotent: exported সারি আবার যায় না (XeroInvoiceExport গার্ড)

  ভাইবোন: xero_payment_push.py · xero_credit_push.py (billing-এ)

FE (এক composable, তিন পাতলো অ্যাডাপ্টার):
  usePreviewConfirmFlow({ fetch(arg, dryRun), rows(res) })
    ফেজ: idle → previewing → preview → committing → done | error
    🔒 confirm() শুধু phase==='preview' থেকে — অন্ধ লেখা নিষেধ

  useInvoicePush  = অ্যাডাপ্টার (~৫০ লাইন): fetch + rows selector দেয়
  useCreditPush   = "     "     "
  usePaymentPush  = "     "     "

⚠️ অলঙ্ঘনীয় নিয়ম: side-effects onSuccess() চলে commit-try-এর বাইরে —
   লেখা কমিট হয়ে গেছে; refetch ব্যর্থ হলে error দেখানো মিথ্যা হবে।</div>
  <div class="verse">ইস্তিখারাহ — মুসাফির কোনো রাস্তায় পা দেওয়ার আগে দুই রাকাত পড়ে নিজের অজান্তেও পরামর্শ নেয়। কাজের আগে কল্যাণ খোঁজা। মুহসিনের চক সেই ইস্তিখারাহ — প্রতিশ্রুতির আগে পর্যালোচনা। LedgerPilot-এর dry-run তাই: প্রতিটি Xero-লেখার আগে একটি নিঃশব্দ প্রার্থনা — "এই পথটা কি সঠিক?"</div>
  <div class="diagram">
    <div class="diag-title">Chalk → Review → Ink — the Phase Machine</div>
    <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowP3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker>
      <marker id="arrowE3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f87171"/></marker></defs>
      <rect x="10" y="90" width="70" height="42" rx="8" fill="rgba(100,116,139,0.12)" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="45" y="108" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="600">idle</text>
      <text x="45" y="122" text-anchor="middle" fill="#64748b" font-size="7.5">শূন্য</text>
      <rect x="110" y="90" width="92" height="42" rx="8" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="156" y="108" text-anchor="middle" fill="#5eead4" font-size="10" font-weight="600">previewing</text>
      <text x="156" y="122" text-anchor="middle" fill="#64748b" font-size="7.5">fetch(dryRun=true)</text>
      <rect x="232" y="90" width="86" height="42" rx="8" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="2"/>
      <text x="275" y="112" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">preview ⚠️</text>
      <text x="275" y="122" text-anchor="middle" fill="#64748b" font-size="7.5">নকশা দেখো</text>
      <rect x="348" y="90" width="92" height="42" rx="8" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="394" y="108" text-anchor="middle" fill="#5eead4" font-size="10" font-weight="600">committing</text>
      <text x="394" y="122" text-anchor="middle" fill="#64748b" font-size="7.5">fetch(dryRun=false)</text>
      <rect x="470" y="90" width="76" height="42" rx="8" fill="rgba(52,211,153,0.14)" stroke="#34d399" stroke-width="2"/>
      <text x="508" y="108" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">done ✓</text>
      <text x="508" y="122" text-anchor="middle" fill="#64748b" font-size="7.5">+toast +refetch</text>
      <line x1="80" y1="111" x2="108" y2="111" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowP3)"/>
      <line x1="202" y1="111" x2="230" y2="111" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowP3)"/>
      <line x1="318" y1="111" x2="346" y2="111" stroke="#5eead4" stroke-width="2.5" marker-end="url(#arrowP3)"/>
      <text x="380" y="87" text-anchor="middle" fill="#fbbf24" font-size="7" font-weight="700">🔑 শুধু এই দরজায়</text>
      <line x1="440" y1="111" x2="468" y2="111" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowP3)"/>
      <rect x="232" y="170" width="86" height="36" rx="8" fill="rgba(248,113,113,0.10)" stroke="#f87171" stroke-width="1.5"/>
      <text x="275" y="185" text-anchor="middle" fill="#f87171" font-size="10" font-weight="600">error</text>
      <text x="275" y="198" text-anchor="middle" fill="#64748b" font-size="7.5">getApiErrorMessage</text>
      <line x1="156" y1="132" x2="240" y2="172" stroke="#f87171" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowE3)"/>
      <line x1="394" y1="132" x2="312" y2="172" stroke="#f87171" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowE3)"/>
      <text x="280" y="35" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="700">🔒 confirm রুট: preview ছাড়া অন্য কোথাও থেকে committing-এ পৌঁছানো যায় না</text>
      <text x="280" y="52" text-anchor="middle" fill="#64748b" font-size="9">idle থেকে সরাসরি committing = অন্ধ লেখা = ADR-0009 লঙ্ঘন</text>
    </svg>
    <div class="diag-cap">চক (plan) → পেছনে সরে দেখা (preview) → তবেই কালি (commit)। done-এর পরে refetch ব্যর্থ হলেও লেখা কমিটেডই থাকে।</div>
  </div>
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ অন্ধ লেখা</div>apiClient.post('/push/', {dryRun: false}) — প্রথম ক্লিকেই কালি। ভুল হলে Xero-তে ভুল ইনভয়েস, ফেরানোর পথ নেই।</div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ চক-আগে</div>preview(dryRun) → অপারেটর সারি দেখে ('would_push'/'skipped'/'unresolved') → confirm। ভুল ধরা পড়ে কালির আগেই।</div>
  </div>
  <div class="secret-box">🖊️ কালির আগে চক — dry-run আগে, তারপর চোখ, তারপর কালি। confirm শুধু দেখা-পরিকল্পনা থেকে। / Preview is the only door to commit: dry-run, review, then ink.</div>`,
  senior: {
    title: "Preview-Confirm Implementation Map",
    body: `<p>BE: <code>plan_*</code> (dry-run, no writes, per-row status) + <code>commit_*</code> (real writes, idempotent via <code>XeroInvoiceExport</code>) — <code>apps/invoices/services/xero_{invoice,credit}_push.py</code>, <code>apps/billing/services/xero_payment_push.py</code>। FE: <code>usePreviewConfirmFlow</code> (<code>shared/composables/</code>) ফেজ-মেশিন মালিক; <code>use{Invoice,Credit,Payment}Push</code> = পাতলো অ্যাডাপ্টার। নিয়তি: confirm শুধু preview থেকে; onSuccess commit-try-এর বাইরে। নতুন লেখা-পথ বানালে এই জোড়া কপি করো, এক ফাংশনে জোড়া দিয়ো না।</p>`
  }
});
