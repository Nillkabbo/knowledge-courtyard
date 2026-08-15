// doors-9-10.js — The Ledger Craftsman (LedgerPilot deep-dive)


doors.push({
  num: 9,
  icon: "📏",
  color: "#5eead4",
  name: "মাপের রজ্জু",
  subtitle: "The Measuring Line — Min-Check & Client Groups",
  tech: "min_check.py: gross floor, ClientGroup aggregation, exceptions, grace rules, awaiting_reply",
  spirit: "সাত্তার — sattār (the veiler: mercy before penalty)",
  secret: "মেঝে মাপা হয় মোট কাজে (gross), একবার, মাস-শেষে — ক্ষমা-তালিকা মাপের আগে দেখা হয়।",
  recall: {
    q: "৩ তারিখে চলতি মাসের P1 মাপা হয়?",
    qen: "On the 3rd, do we min-check the current month's P1?",
    a: "না — ৩ তারিখে আগের মাসের P2 বন্ধ হয়: দুই পাক্ষিক যোগ একবার মাপা হয়। ১৭ তারিখ শুধু পর্যালোচনা — দ্বিতীয়ার্ধ এখনো বিল হয়নি (ADR-0023 d6)।",
    aen: "No — the 3rd closes the PRIOR month's P2: both halves summed, floor tested once. The 17th is review-only (decision 6)."
  },
  story: `<p class="scene-setting">কাপড়ের বাজারের মাপুই <strong>মিয়া বশির সর্দার</strong> — কাঁধে ৫০ হাত লম্বা রজ্জু, হাতে
  একটা চামড়ার খাতা। তাঁর তিনটি নিয়ম শহরে প্রবাদ। <strong>নিয়ম এক</strong>: কাপড় মাপা হয় <em>কাঁচা-পুরোটা</em> ধরে —
  ভাঁজ, রেয়াত, ফেরত বাদ দিয়ে মাপলে চুরি লুকায়। <strong>নিয়ম দুই</strong>: এক মালিকের তিন দোকান এক রজ্জুতে মাপা হয় —
  আলাদা নয় (গ্রুপ!)। <strong>নিয়ম তিন</strong>: মাপার <em>আগে</em> খাতা খোলেন — কার নামে মাফ (<strong>ওয়েভার</strong>),
  কার আংশিক (<strong>পার্শিয়াল</strong>), কার এ-মাসেই দোকান-খোলা (<strong>গ্রেস</strong>)। মাপ কম পড়লে গালাগালি নয় —
  খাতায় লেখেন: "অমুকের ঘাটতি এত, ৪৬২ পাথর দিয়ে পূরণ করা যাবে।" পাথরটা তিনি <strong>নিজে কখনো বসান না</strong> — বলে
  দেন, দোকানদার নিজ হাতে বসাবে (Vicki)।</p>
  <p class="scene-setting en">The cloth-market measurer <strong>Mia Bashir Sardar</strong> — a 50-cubit rope over
  his shoulder, a leather book in hand. Three rules, proverbial in the city. <strong>One</strong>: cloth is
  measured <em>gross, whole</em> — fold discounts hide thefts. <strong>Two</strong>: one owner's three shops are
  measured on one rope (groups!). <strong>Three</strong>: the book opens <em>before</em> measuring — who has
  waiver, who partial, who opened shop this very month (grace). A shortfall earns an entry, not a scolding:
  "this much gap; fill it with stone 462." He never sets the stone himself — the shopkeeper does, by hand.</p>
  <div class="dialogue">এক দোকানদার বলেন — "সর্দার, ১৭ তারিখেই মেপে দিন না, দুই সপ্তাহ আগে!"
  <br>বশির সর্দার হাসেন — "১৭ তারিখে তোর দ্বিতীয়ার্ধের কাপড়ই আসেনি — অদৃশ্য কাপড় মাপি কীসে? মাপ হয়
  <strong>সম্পূর্ণ মালে, মাস শেষে, একবার</strong>। বিচার দ্বিগুণ করলে ন্যায় অর্ধেক হয়।"</div>
  <div class="code-block">apps/invoices/services/min_check*.py — রজ্জুর বিচারশাস্ত্র

মাপের সূত্র (ADR-0023):
  floor = Client.monthly_minimum
        ?? ClientGroup.minimum_override
        ?? DEFAULT_MINIMUM ($460)     # 300 থেকে বাড়ানো d4
  মাপা হয় GROSS billed work-এ (d2) —
    ক্রেডিট (amount_credited) মেঝে নামায় না, বাড়ায় না
    রিঅ্যাক্টিভেশন + নন-বিলেবল কোড বিয়োগ হয়

কখন মাপা হয় (d6):
  ~৩ তারিখে: আগের মাসের P1+P2 যোগ → একবার মেঝে-পরীক্ষা
  ~১৭ তারিখে: শুধু পর্যালোচনা — P2 এখনো বিল হয়নি

এক রজ্জুতে তিন দোকান (ClientGroup):
  · মেম্বাররা স্বাভাবিক বিল পায়; মেঝে যাচাই হয় সম্মিলিত মোটে একবার
  · ঘাটতি হলে 462 পড়ে গ্রুপের মালিক-সদস্যে (explicit owner — d5, অনুমান নয়)
  · গ্রুপিং+মালিকানা শুধু LP-তে (Xero-তে parent-লিঙ্ক নেই)
  · গ্রুপহীন Client = এক-সদস্যের গ্রুপ

মাপের আগে খাতা (BillingException):
  প্রকার: waive_minimum · partial_minimum · note · no_charge(ইনবক্স)
  source: manual/slack/trello · applied=0 মানে খোলা
  ইনবক্স (#726): ভিকি প্রতিটি অনুরোধ নিষ্পত্তি করেন —
    accept a no_charge → waive_minimum ফাইল হয়
    dismiss → শুধু বন্ধ
  খোলা অনুরোধ + ঘাটতি = অবস্থা awaiting_reply
  (র‍্যাংক: মওকুফ > নিষ্পত্তি-হওয়া > pending > সাধারণ below/ok)

মাফের সিঁড়ি (প্রাধান্য-ক্রমে):
  ১. minimum_exempt পতাকা — "কখনোই নয়" (অফবোর্ডিং/লো-ভলিউম)
  ২. SignupMonthGraceRule — এ-মাসে সাইন-আপ = এ-চক্র মাফ
     (মাস-কী; ১ তারিখে বা ৩১-এ সাইন-আপ একই গ্রেস — দিন-গণনা নয়)
  ৩. ওয়েভার/পার্শিয়াল (BillingException, আবেদন-নিষ্পত্তি)
  ৪. তারপরই নগণ্য below — gap + 462 প্রস্তাব

স্ট্যাটাস-সারি: below · ok · exempt · waived · awaiting_reply
ট্যাব পড়ে XeroInvoice আয়না (দৈনিক sync বা "Sync now" ADR-0024)
— লাইভ Xero নয়, আয়নাই (Explorer পৃথক, লাইভ, রিড-ওনলি)

462-লাইনের নিয়ম (d1): LP লেখক নয় — পাঠক-গণক।
  ভিকি Xero-তে হাতে বসান; LP-র নতুন পথ: Apply → "Mark done" ack (#1187-91)</div>
  <div class="verse">সাত্তার — আল্লাহর সুন্দর নামগুলোর একটি: যিনি ঢেকে রাখেন, অপমানের আগে ক্ষমা করেন। বশির সর্দারের খাতা-আগে-নিয়ম সেই সাত্তারের ছায়া: মাপ নেওয়ার আগেই মাফের তালিকা মেলানো — যেন কোনো হকদার লজ্জিত না হয়। আর মোট-কাপড়ে-মাপ (gross) তার ন্যায়: রেয়াতের নামে মাপ ছেঁটে দিলে মেঝে মিথ্যা বলে।</div>
  <div class="diagram">
    <div class="diag-title">One Rope, Many Shops — Min-Check Decision Flow</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowM9" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker>
      <marker id="arrowY9" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker></defs>
      <rect x="190" y="10" width="180" height="36" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="28" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="700">~৩ তারিখ: আগের মাস বন্ধ</text>
      <text x="280" y="41" text-anchor="middle" fill="#94a3b8" font-size="8">P1+P2 যোগ → GROSS মোট (ক্রেডিট বাদ নয়)</text>
      <rect x="190" y="62" width="180" height="36" rx="9" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="280" y="80" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">📖 খাতা আগে (exceptions)</text>
      <text x="280" y="93" text-anchor="middle" fill="#94a3b8" font-size="8">ওয়েভার? পার্শিয়াল? খোলা অনুরোধ?</text>
      <rect x="20" y="130" width="150" height="46" rx="9" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="1.5"/>
      <text x="95" y="150" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="700">exempt</text>
      <text x="95" y="164" text-anchor="middle" fill="#94a3b8" font-size="8">minimum_exempt / এ-মাস সাইন-আপ</text>
      <rect x="192" y="130" width="150" height="46" rx="9" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="267" y="150" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">waived</text>
      <text x="267" y="164" text-anchor="middle" fill="#94a3b8" font-size="8">ওয়েভার-নিষ্পত্তি (no_charge accept)</text>
      <rect x="364" y="130" width="150" height="46" rx="9" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="439" y="150" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">awaiting_reply</text>
      <text x="439" y="164" text-anchor="middle" fill="#94a3b8" font-size="8">ঘাটতি আছে + অনুরোধ খোলা</text>
      <rect x="192" y="200" width="150" height="46" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="267" y="220" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="700">ok</text>
      <text x="267" y="234" text-anchor="middle" fill="#94a3b8" font-size="8">gross ≥ floor — কিছু করার নেই</text>
      <rect x="20" y="200" width="150" height="46" rx="9" fill="rgba(248,113,113,0.10)" stroke="#f87171" stroke-width="1.5"/>
      <text x="95" y="220" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">below</text>
      <text x="95" y="234" text-anchor="middle" fill="#94a3b8" font-size="8">gap হিসাব + 462 প্রস্তাব</text>
      <rect x="364" y="200" width="176" height="46" rx="9" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="452" y="220" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="600">🪨 462-প্রস্তাব</text>
      <text x="452" y="234" text-anchor="middle" fill="#94a3b8" font-size="8">Vicki Xero-তে হাতে বসান (d1)</text>
      <line x1="280" y1="46" x2="280" y2="60" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowM9)"/>
      <line x1="230" y1="98" x2="100" y2="128" stroke="#fbbf24" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrowY9)"/>
      <line x1="267" y1="98" x2="267" y2="128" stroke="#fbbf24" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrowY9)"/>
      <line x1="330" y1="98" x2="435" y2="128" stroke="#fbbf24" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrowY9)"/>
      <line x1="95" y1="176" x2="95" y2="198" stroke="#f87171" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrowM9)"/>
      <line x1="95" y1="246" x2="362" y2="226" stroke="#f87171" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrowM9)"/>
      <text x="230" y="270" text-anchor="middle" fill="#64748b" font-size="9">গ্রুপ: মোট এক রজ্জুতে — 462 গ্রুপ-মালিকের নামে (d5)</text>
      <text x="280" y="290" text-anchor="middle" fill="#64748b" font-size="9">১৭ তারিখ = পর্যালোচনা-মাত্র (P2 অদৃশ্য — অদৃশ্য কাপড় মাপা হয় না)</text>
      <text x="280" y="308" text-anchor="middle" fill="#64748b" font-size="9">ডেটা-উৎস: XeroInvoice আয়না (দৈনিক sync / Sync-now) — লাইভ Explorer নয়</text>
    </svg>
    <div class="diag-cap">মোট-মাপ → খাতা-আগে → রায়; ঘাটতি মানে প্রস্তাব, শাস্তি নয় — পাথর বসায় মানুষের হাত।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সবচেয়ে বিপজ্জনক ভুল:</strong> <code>price_minimum</code>-কে মেঝে ভাবা। না — সে ক্লিন-আপ ঘণ্টা-রেট ($38-45)। আসল মেঝে <code>monthly_minimum</code> (ADR-0023 Amendment 2026-06-05)। লাইভ ডেটা প্রমাণ: price_minimum-এ কখনো ~$460 ছিল না — তাই গ্রুপহীন ক্লায়েন্টের মেঝে-চেক নীরবে কখনো চলতই না।</div></div>
  <div class="secret-box">📏 মোট কাপড়ে মাপ, খাতা মাপের আগে, মাস-শেষে একবার — ঘাটতি প্রস্তাব, পাথর মানুষের হাতে। / Measure gross, consult the exception book first, test once at month-end; the gap is a proposal, the stone is set by human hand.</div>`,
  senior: {
    title: "Min-Check Map",
    body: `<p>সূত্র: floor = <code>monthly_minimum</code> → group override → $460; মাপা GROSS-এ (ক্রেডিট উপেক্ষা; রিঅ্যাক্টিভেশন/নন-বিলেবল বিয়োগ)। কাল: ৩ তারিখ = আগের মাস P1+P2 একবার; ১৭ = রিভিউ-মাত্র (d6)। ClientGroup: সম্মিলিত মোটে একবার যাচাই, 462 গ্রুপ-owner-এ (d5); গ্রুপিং LP-এ চিরস্থায়ী তথ্য। BillingException: waive/partial/note/no_charge; ইনবক্সে ভিকি-নিষ্পত্তি; খোলা+ঘাটতি = <code>awaiting_reply</code>। র‍্যাংক: exempt(পতাকা/এ-মাস গ্রেস) &gt; waived &gt; awaiting &gt; below/ok। 462: LP গণক-মাত্র (d1), ভিকি হাতে; নতুন ack-পথ #1187-91। ডেটা: আয়না (sync/Sync-now)।</p>`
  }
});


doors.push({
  num: 10,
  icon: "🎁",
  color: "#5eead4",
  name: "দুই ধরনের উপহার",
  subtitle: "The Two Gifts — Carry-Forward & One-Cycle Credits",
  tech: "CreditLedger (lifecycle FSM, allocations) vs client_credits (raw-SQL, staged deprecation)",
  spirit: "দায়েন — dayn (the debt owed: every credit is a trust to return)",
  secret: "চক্র-ছাড়া বহনযোগ্য ঋণ বনাম একবারের উপহার — দুই খাতা, দুই নিয়ম; বাসি খাতা সরানো হয় ধাপে ধাপে।",
  recall: {
    q: "CreditLedger আর client_credits — কোনটা জীবিত সত্য?",
    qen: "CreditLedger vs client_credits — which is the live truth?",
    a: "CreditLedger (carry-forward) জীবিত; client_credits (one-cycle) সুপারসেডেড — কোনো লাইভ FE কলার নেই, staged deprecation-এ (ADR-0014 d2 লক্ষ্য)।",
    aen: "CreditLedger (carry-forward) is live; client_credits (one-cycle) is superseded legacy on a staged deprecation path."
  },
  story: `<p class="scene-setting">শহরের কোষাগারে দুটি তাক। কোষাধ্যক্ষ <strong>সাইয়্যেদ আমানত আলি</strong> — বাঁ তাকে <strong>লাল ফিতার
  থলি</strong>: গ্রাহকের জমানো ভার (carry-forward credit) — চক্রে চক্রে খরচ হয়, বাকি থাকলে পরের চক্রে যায়; প্রতিটি
  খরচের পেছনে দুটো লেখা: খরচের আগের ব্যালেন্স, পরের ব্যালেন্স। ডান তাকে <strong>সাদা খাম</strong>: একবারের ছুঁড়ে-দেওয়া
  উপহার (one-cycle credit) — এক ইনভয়েসে লাগে, শেষ। আমানত আলির নাতি-নাতনিরা একসময় সাদা খামের তাক ভুলে গেছে —
  নিয়ম বইয়ের রেফারেন্স ছাড়া কেউ ছোঁয় না; তবু তাক সরানো হয়নি, কারণ একটা পুরোনো হিসাব-খাতায় তার একটা রেফারেন্স
  এখনো পড়ে আছে।</p>
  <p class="scene-setting en">Two shelves in the treasury. Keeper <strong>Sayyid Amanat Ali</strong> — the left
  shelf holds <strong>red-ribbon pouches</strong>: a customer's carried weight (carry-forward credit), spent
  cycle by cycle, remainder rolling forward; every spend writes two numbers — balance before, balance after.
  The right shelf holds <strong>white envelopes</strong>: single-use gifts (one-cycle credits) — applied to one
  invoice, done. His grandchildren forgot the white shelf — no one touches it except through the rulebook's
  references; yet it stands, because one old ledger still reads from it.</p>
  <div class="dialogue">নতুন হিসায়রক্ষী জিজ্ঞেস করে — "চাচা, দুই তাক কেন? এক করে ফেলি না কেন?"
  <br>আমানত আলি — "লাল থলির ঋণ ফেরার প্রতিশ্রুতি — চক্র পেরোয়, ভার বহন করে। সাদা খাম এক দফার দান — খোলা
  মাত্র শেষ। <strong>প্রতিশ্রুতি আর দান এক খাতায় লিখলে দুটোই নষ্ট হয়।</strong> আর পুরোনো তাক ভাঙা? মিয়া, যে
  খাতা তাকে পড়ে সে খাতা আগে সরাও — তারপর তাক।"</div>
  <div class="code-block">দুই ক্রেডিট-জগৎ (2026-05-29 সংশোধিত সত্য)

জগৎ ১: Carry-Forward — CreditLedger (জীবিত ✅)
  টেবিল: credit_ledger
  জীবনচক্র FSM:
    pending_approval → approved → active
                  → fully_applied / cancelled
  বহন করে: credit_type, ঘণ্টা×রেট, remaining_balance
  Xero credit-note লিংকেজ
  প্রতিটি প্রয়োগ = CreditAllocation সারি
    (balance_before / balance_after — অডিট-শৃঙ্খলা)
  ওপেন ক্রেডিট = active + remaining_balance > 0
  ~১৭ endpoint: /api/invoices/credits/
  FE: CreditWorkflowView (ওয়ার্কফ্লো — রিকোয়েস্ট →
    approve → apply + ইনবক্স) · CreditLedgerView (ব্যালেন্স/অডিট)
  জন্ম-পথ: সারপ্লাস থেকে? OverpaymentCreateView →
    create_overpayment (G7 রিফ্যাক্টর)

জগৎ ২: One-Cycle — client_credits (সুপারসেডেড ⏳)
  টেবিল: client_credits + client_credits_audit
  মডেল ClientCredit পাতলা — চালিত raw SQL দিয়ে
    (apps/invoices/services/simple_credits.py)
  স্ট্যাটাস: open / applied / expired
  CRUD: SimpleCreditView (GET/POST …/credits/simple/)
    + create_credit_from_surplus() / apply_simple_credit()
  FE: কোনো লাইভ কলার নেই (2026-06-01 যাচাইিত) —
    CreditWorkflow একসময় এটা চালাত, G7 রিফ্যাক্টর রুট
    বদলে credit_ledger-এর ওভারপেমেন্ট পথে নিয়েছে
  ডরম্যান্ট ক্রিয়েট-পথ: শুধু সরাসরি ম্যানুয়াল API কলে
  ফসিল নয়: payments.py এখনো credits_applied পড়ে,
    ১টি ঐতিহাসিক সারি আছে

স্টেজড ডিপ্রিকেশন (ADR-0014 d2-এর শান্ত পথ):
  ① পড়া-পৃষ্ঠ সরাও → credit_ledger-এ
    (ClientCreditsView, SimpleCreditView GET,
     payments.py credits_applied সাবকুয়েরি)
  ② একমাত্র সারি মাইগ্রেট/এক্সপায়ার
  ③ তবেই টেবিল বাদ (অন্ধ ডিলিট নয়)
  খোলা প্রশ্ন: CreditLedger-এর ঘরবাড়ি
    invoices → billing পুনর্বিবেচনা — ডিপ্রিকেশনের পরে

কর্মী-নিয়ম: ওপেন ক্রেডিট সাই প্রতি ব্যাচে Xero-আপলোডের
পরে প্রয়োগ করেন (auto-min-check ট্যাবের পাশের ধাপ)</div>
  <div class="verse">দায়েন — ২:২৮২ ঋণ লিপিবদ্ধ করার আদেশ দেয়, যেন হক নিয়ে বিবাদ না বাঁধে। আমানত আলির লাল ফিতা সেই আদেশের কারিগরি রূপ: প্রতিটি খরচে আগে-পরে ব্যালেন্স, যেন কোনো ভার নীরবে উধাও না হয়। আমানত আলির লাল ফিতা সেই পথ — প্রতিটি খরচে আগে-পরে ব্যালেন্স, যেন কোনো ভার নীরবে উধাও না হয়। আর বাসি খামের তাক? "নিশ্চয়ই আল্লাহ ন্যায়পরায়ণ — তিনি হক আদায় করেন" — তবে ধাপে ধাপে, খাতা না ভেঙে।</div>
  <div class="diagram">
    <div class="diag-title">Two Shelves — Carry-Forward vs One-Cycle</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowC10" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="25" width="262" height="170" rx="12" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.6"/>
      <text x="146" y="50" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700">🔴 লাল ফিতার থলি — জীবিত</text>
      <text x="146" y="66" text-anchor="middle" fill="#94a3b8" font-size="8">CreditLedger · credit_ledger</text>
      <rect x="35" y="80" width="222" height="26" rx="6" fill="rgba(100,116,139,0.12)"/>
      <text x="146" y="97" text-anchor="middle" fill="#cbd5e1" font-size="8">pending_approval → approved → active</text>
      <rect x="35" y="112" width="222" height="26" rx="6" fill="rgba(100,116,139,0.12)"/>
      <text x="146" y="129" text-anchor="middle" fill="#cbd5e1" font-size="8">→ fully_applied / cancelled</text>
      <text x="146" y="152" text-anchor="middle" fill="#94a3b8" font-size="8">প্রতি প্রয়োগে CreditAllocation:</text>
      <text x="146" y="164" text-anchor="middle" fill="#94a3b8" font-size="8">balance_before → balance_after</text>
      <text x="146" y="182" text-anchor="middle" fill="#34d399" font-size="8">✅ FE: CreditWorkflow + CreditLedger লাইভ</text>
      <rect x="298" y="25" width="247" height="170" rx="12" fill="rgba(100,116,139,0.07)" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="6 3"/>
      <text x="421" y="50" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="700">⚪ সাদা খাম — সুপারসেডেড</text>
      <text x="421" y="66" text-anchor="middle" fill="#94a3b8" font-size="8">client_credits + audit · raw SQL</text>
      <rect x="318" y="80" width="207" height="26" rx="6" fill="rgba(100,116,139,0.10)"/>
      <text x="421" y="97" text-anchor="middle" fill="#94a3b8" font-size="8">open → applied / expired</text>
      <rect x="318" y="112" width="207" height="26" rx="6" fill="rgba(100,116,139,0.10)"/>
      <text x="421" y="129" text-anchor="middle" fill="#94a3b8" font-size="8">এক ইনভয়েসে প্রয়োগ — শেষ</text>
      <text x="421" y="152" text-anchor="middle" fill="#94a3b8" font-size="8">FE কলার: শূন্য (G7 রিফ্যাক্টর)</text>
      <text x="421" y="164" text-anchor="middle" fill="#94a3b8" font-size="8">payments.py এখনো পড়ে · ১ সারি</text>
      <text x="421" y="182" text-anchor="middle" fill="#fbbf24" font-size="8">⏳ staged deprecation পথে</text>
      <rect x="60" y="218" width="440" height="60" rx="10" fill="rgba(45,212,191,0.07)" stroke="#2dd4bf" stroke-width="1.3"/>
      <text x="280" y="240" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="600">স্টেজড ডিপ্রিকেশন (ADR-0014 d2 লক্ষ্যে)</text>
      <text x="280" y="256" text-anchor="middle" fill="#94a3b8" font-size="8">① পড়া-পৃষ্ঠ → credit_ledger ② সারি মাইগ্রেট ③ টেবিল বাদ</text>
      <line x1="280" y1="195" x2="280" y2="216" stroke="#5eead4" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arrowC10)"/>
      <text x="280" y="292" text-anchor="middle" fill="#64748b" font-size="9">প্রতিশ্রুতি বহন করে চক্র পেরোয়; দান একবার খোলে — দুই খাতা এক করলে দুটোই নষ্ট</text>
    </svg>
    <div class="diag-cap">লাল থলি জীবিত সত্য (allocations-শৃঙ্খলাসহ); সাদা খাম অপেক্ষমাণ-legacy — খাতা সরিয়ে তারপর তাক।</div>
  </div>
  <div class="callout info"><span class="co-icon">🎯</span><div><strong>নতুন কাজে কোনটা?</strong> সবসময় <code>CreditLedger</code> (carry-forward)। One-cycle পথে নতুন FE সংযোগ নিষেধ — সে ডরম্যান্ট এবং অপসারণের পথে। ওভারপেমেন্ট থেকে ক্রেডিট বানাতে: <code>OverpaymentCreateView → create_overpayment</code> (G7 পথ), <code>POST /credits/simple/</code> নয়।</div></div>
  <div class="secret-box">🎁 প্রতিশ্রুতি চক্র পেরোয়, দান একবার খোলে — জীবিত খাতা লাল ফিতার; বাসি খাতা সরাও ধাপে ধাপে, খাতা আগে। / Carry-forward is the live promise with a before/after chain; the one-cycle shelf retires read-surface first.</div>`,
  senior: {
    title: "Credits Domain Map",
    body: `<p><strong>জীবিত</strong>: <code>CreditLedger</code> — FSM (pending→approved→active→fully_applied/cancelled), <code>remaining_balance</code>, <code>CreditAllocation</code> (before/after), Xero credit-note লিংক, ~১৭ endpoint, FE: CreditWorkflowView+CreditLedgerView; ওভারপেমেন্ট-জন্ম <code>create_overpayment</code>। <strong>Legacy</strong>: <code>client_credits</code> (raw SQL, simple_credits.py; open/applied/expired; SimpleCreditView) — FE কলার নেই, create ডরম্যান্ট; payments.py <code>credits_applied</code> পড়ে, ১ সারি। অপসারণ: read-surfaces → migrate row → drop (ADR-0014 d2)। রি-হোম invoices→billing: পরে সিদ্ধান্ত। কর্মী-পথ: সাই ব্যাচ-আপলোডের পরে ওপেন ক্রেডিট প্রয়োগ করেন।</p>`
  }
});
