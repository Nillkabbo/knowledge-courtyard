// doors-11-12.js — The Ledger Craftsman (LedgerPilot deep-dive)


doors.push({
  num: 11,
  icon: "🏦",
  color: "#5eead4",
  name: "তিন চাবির কোষ",
  subtitle: "The Vault of Three Keys — NACHA & Encryption",
  tech: "nacha.py builder, Fernet keys (XERO_TOKEN_KEY / ACH_BANK_KEY), idempotent generation, reconcile",
  spirit: "হিফয — hifz (safeguarding: separate blast radii, never one key for all)",
  secret: "ব্যাংক-ফাইল বানায় একবারই (unique cycle), অ্যাকাউন্ট-নম্বর ঘুমায় আলাদা চাবিতে — এক চাবি হারালে পুরো শহর নয়।",
  recall: {
    q: "একই চক্রে দ্বিতীয় NACHA ফাইল বানানো যায়?",
    qen: "Can a second NACHA file be generated for the same cycle?",
    a: "না — DB unique(cycle_id) + select_for_update(skip_locked) + IntegrityError→409 (PR #94-এর তিন-স্তর বলয়)।",
    aen: "No — DB unique + skip_locked lock + IntegrityError→409: the three-layer belt (PR #94)."
  },
  story: `<p class="scene-setting">শহরের ভূগর্ভস্থ কোষগার। কোষরক্ষক <strong>বাবু সোনার ব্যানকে</strong> — তাঁর তিনটা আলাদা চাবি, তিনটা
  আলাদা তালা, কোমরের তিন আংুলে তিন রঙের ফিতা। বাণিজ্যিক রুমাল (Xero টোকেন) এক চাবিতে, গ্রাহকের ব্যাংক-সনদ
  (ACH অ্যাকাউন্ট) অন্য চাবিতে, শহরের মাস্টার-সিল (SECRET_KEY) তৃতীয় চাবিতে। শাগিরদ জিজ্ঞেস করে — "এক চাবিতে
  সব খুললে সুবিধা না?" বাবু চোখ ধার করেন — "এক চাবি হারালে কী হয় বল তো? এক ঘর লুট হয়। আর সব-চাবি হারালে?
  <strong>পুরো কোষ, পুরো শহর।</strong> তাই আগুন এক ঘরে থামে।" ACH-ফাইল বানানোর দিন তাঁর আরেকটা লোহার নিয়ম:
  <strong>এক চক্রে একবারই</strong> — দুই বার ঢাললে গ্রাহকের টাকা দুই বার কাটা হবে।</p>
  <p class="scene-setting en">The underground vault. Keeper <strong>Babu Sona Banke</strong> — three separate
  keys, three locks, three colored ribbons on his belt-fingers. The merchant silks (the Xero token) under one
  key, the customers' bank-deeds (ACH accounts) under another, the city's master-seal (SECRET_KEY) under a
  third. An apprentice asks — "one key for everything would be convenient?" Babu sharpens his glare — "lose
  one key, one room is robbed. Lose the all-key? <strong>The whole vault, the whole city.</strong> Fire stops
  at one door." And on ACH-file day, an iron rule: <strong>once per cycle</strong> — pour twice and a
  customer's money is debited twice.</p>
  <div class="code-block">apps/billing/services/nacha*.py — কোষ থেকে ব্যাংক-ফাইল

কার টাকা যায়? auto_pay=1 Client + বকেয়া > 0
  বাকিরা চেক/ওয়্যার — record_payment দিয়ে সরাসরি Payment সারি

একবার-নিয়মের তিন-স্তর বলয় (PR #94, আর্থিক-লেখার বেল্ট):
  ① DB: UniqueConstraint(cycle_id) — nacha_batches-এ
  ② select_for_update(skip_locked=True) পিতা-সারিতে
  ③ try/except IntegrityError → ডোমেইন-এরর → HTTP 409

এনক্রিপশন (ADR-0027 — আলাদা বিস্ফোরণ-ব্যাস):
  ClientBankAccount (1:1 FK Client):
    routing_number — প্লেইনটেক্সট (৯-সংখ্যার পাবলিক আইডি)
    account_number_enc — Fernet(ACH_BANK_KEY) 🔑
    account_type — checking/savings
      → transaction_code: '27' / '37'
  NachaEntry: account_number — সেই একই চাবিতে সিল
  চাবি-পৃথকীকরণ:
    XERO_TOKEN_KEY ≠ ACH_BANK_KEY ≠ SECRET_KEY
    এক ফাঁস এক ঘরে থামে
  API কখনো পুরো নম্বর ফেরত দেয় না — শুধু last4
  ডিক্রিপ্ট হয় শুধু generate_nacha_file-এর ভেতরে
  ⚠ ডিস্কে-ফাইল প্লেইনটেক্সট বহন করে (ACH-94 ফরম্যাট চায়)
    — সে কারণেই এনক্রিপ্টেড সারি রাখা: MEDIA_ROOT মুছলে
      ফাইল পুনর্জন্ম সম্ভব
  লেখার গেট: feature key manage_client_bank_info
    (admin-only seed; UserFeatureGrant-এ প্রতি-মানুষ ডেলিগেট)
  প্রতিটি বদলে ClientBankAccountAudit:
    action/who/when + fields_changed (নাম মাত্র — মান নয়)

রেকনসিলিয়েশন — এক শব্দ, দুই ক্রিয়া:
  প্রি-সাবমিট (ওয়েন): reconcile_batch(batch_id)
    · ডেটা-ইনটেগ্রিটি: Σentries vs batch.total
    · সাইকেল-ড্রিফট: বর্তমান প্রিভিউ vs সেভ মোট
    · মেম্বারশিপ-ড্রিফট: অটো-পে সেটের বদল
  পোস্ট-পোস্ট (সাই): PaymentRecord.reconciled=1
    + xero_payment_id — Xero-য় ফেরত-প্রয়োগের স্বীকৃতি

দুই বহি-খাতা পাশাপাশি (ADR-0002):
  Payment = "এই ইনভয়েস পরিশোধ" — ক্যাননিক্যাল
  NachaPaymentLedger = "এই NACHA-স্লাইস এই ইনভয়েস ঢেকেছে"
  একই ইনভয়েসে দুটোই থাকতে পারে — মিলাতে বাধ্য নয়

কাগজপত্র: get_payment_apply_checklist(batch_id) —
  প্রতি ক্লায়েন্ট×ইনভয়েস স্লাইস-সারি (সাই-এর ওয়ার্কশিট)</div>
  <div class="verse">হিফয — "নিশ্চয়ই আমরাই কুরআন নাজিল করেছি, আর নিশ্চয়ই আমরাই তার হিফযকারী" (১৫:৯)। হিফয মানে শুধু পাহারা নয় — স্তরে স্তরে পাহারা, যেন এক ফাটলে সব না ভাঙে। বাবুর তিন চাবি সেই স্তর: Xero-র ঘর, ব্যাংকের ঘর, শহরের সিল — প্রত্যেকে নিজ দরজা, নিজ ফিতা। আর এক-চক্র-এক-ঢাল মানে গ্রাহকের আমানত দুইবার কাটা হতে পারে না — সেটাও হিফয।</div>
  <div class="diagram">
    <div class="diag-title">Three Keys, One Pour — NACHA Generation</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowV17" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="20" width="165" height="110" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="97" y="42" text-anchor="middle" fill="#fcd34d" font-size="9.5" font-weight="700">🔑 চাবি-ঘর ১</text>
      <text x="97" y="57" text-anchor="middle" fill="#94a3b8" font-size="8">SECRET_KEY</text>
      <text x="97" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">শহরের মাস্টার-সিল</text>
      <text x="97" y="95" text-anchor="middle" fill="#fbbf24" font-size="8">ফাঁস হলে: সেশন/সাইনিং</text>
      <text x="97" y="115" text-anchor="middle" fill="#64748b" font-size="8">১ ঘর</text>
      <rect x="198" y="20" width="165" height="110" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="42" text-anchor="middle" fill="#5eead4" font-size="9.5" font-weight="700">🔑 চাবি-ঘর ২</text>
      <text x="280" y="57" text-anchor="middle" fill="#94a3b8" font-size="8">XERO_TOKEN_KEY</text>
      <text x="280" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">OAuth টোকেন — Fernet</text>
      <text x="280" y="95" text-anchor="middle" fill="#2dd4bf" font-size="8">ফাঁস হলে: Xero পড়া/লেখা</text>
      <text x="280" y="115" text-anchor="middle" fill="#64748b" font-size="8">১ ঘর</text>
      <rect x="381" y="20" width="164" height="110" rx="10" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.8"/>
      <text x="463" y="42" text-anchor="middle" fill="#f87171" font-size="9.5" font-weight="700">🔑 চাবি-ঘর ৩</text>
      <text x="463" y="57" text-anchor="middle" fill="#94a3b8" font-size="8">ACH_BANK_KEY (ADR-0027)</text>
      <text x="463" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">account_number_enc</text>
      <text x="463" y="95" text-anchor="middle" fill="#f87171" font-size="8">ফাঁস হলে: ব্যাংক-সনদ মাত্র</text>
      <text x="463" y="115" text-anchor="middle" fill="#64748b" font-size="8">১ ঘর — শহর নয়</text>
      <rect x="130" y="160" width="300" height="44" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="178" text-anchor="middle" fill="#5eead4" font-size="9.5" font-weight="700">generate_nacha_file(cycle)</text>
      <text x="280" y="193" text-anchor="middle" fill="#94a3b8" font-size="8">ডিক্রিপ্ট শুধু এখানেই · transaction_code 27/37 · ACH-94 ডিস্কে</text>
      <line x1="97" y1="130" x2="200" y2="162" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowV17)"/>
      <line x1="280" y1="130" x2="280" y2="158" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowV17)"/>
      <line x1="463" y1="130" x2="360" y2="162" stroke="#f87171" stroke-width="1.6" marker-end="url(#arrowV17)"/>
      <rect x="15" y="228" width="530" height="56" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="248" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="600">🔒 একবার-নিয়ম (PR #94): unique(cycle_id) + skip_locked লক + IntegrityError → 409</text>
      <text x="280" y="264" text-anchor="middle" fill="#94a3b8" font-size="8">API=last4 মাত্র · audit=নাম, মান নয় · রেকনসাইল: ওয়েন=ড্রিফট, সাই=স্বীকৃতি</text>
      <text x="280" y="298" text-anchor="middle" fill="#64748b" font-size="9">তিন চাবি, এক ঢাল — এক ফাঁস এক ঘরে থামে; এক চক্রে দ্বিতীয় ঢাল অসম্ভব</text>
    </svg>
    <div class="diag-cap">চাবি তিন, ঘর তিন, ঢাল এক — আর্থিক লেখার বেল্ট তিন-স্তর; ডিক্রিপ্ট একমাত্র জেনারেটরে।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>কোথায় ডিক্রিপ্ট বৈধ:</strong> শুধু <code>generate_nacha_file</code>-এর ভেতরে। View/serializer-এ <code>account_number_enc</code> পড়া নিষেধ — সেটা কোষরক্ষকের ঘরে ঢোকা, চুরি নয়। GET সবসময় <code>last4</code>।</div></div>
  <div class="secret-box">🏦 তিন চাবি তিন ঘর, এক চক্রে এক ঢাল — ফাঁস এক ঘরে থামে, গ্রাহক দুইবার কাটা হয় না। / Separate keys, separate blast radii, one pour per cycle — and the decrypt lives only inside the generator.</div>`,
  senior: {
    title: "NACHA & Crypto Map",
    body: `<p><code>apps/billing/services/{nacha,nacha_builder}.py</code>: auto_pay ক্লায়েন্ট+বকেয়া → এন্ট্রি; তিন-স্তর idempotency (unique cycle + skip_locked + IntegrityError→409)। এনক্রিপশন: <code>ClientBankAccount</code> (routing plaintext, <code>account_number_enc</code>=Fernet <code>ACH_BANK_KEY</code>, type→27/37) + <code>NachaEntry</code>; চাবি পৃথক (SECRET/XERO/ACH — ADR-0027); GET=last4; ডিক্রিপ্ট শুধু জেনারেটরে; ডিস্ক-ফাইল প্লেইন (ACH-94) → পুনর্জন্মের জন্যই সিল-সারি। গেট: <code>manage_client_bank_info</code> + অডিট (fields_changed)। রেকনসাইল দ্বি-অর্থ: প্রি-সাবমিট ড্রিফট (ওয়েন) vs পোস্ট-পোস্ট reconciled (সাই)। Payment বনাম NachaPaymentLedger সহাবস্থান (ADR-0002)।</p>`
  }
});


doors.push({
  num: 12,
  icon: "🔗",
  color: "#5eead4",
  name: "বাইরের বাজারের দলিল-ঘর",
  subtitle: "The Foreign Market's Registry — Xero Integration",
  tech: "OAuth2 top-level redirects, Fernet tokens, webhook HMAC, daily mirror, Explorer, 3 write surfaces",
  spirit: "আহদ — ahd (the covenant: token granted, promise kept)",
  secret: "যাওয়া ব্রাউজারের হাঁটায় (redirect), ফেরা আয়নায় (mirror); বাজারের চিরঠাস হুক HMAC-এ যাচাই — চুক্তিহীন চিঠি পোড়া হয়।",
  recall: {
    q: "Xero connect কেন XHR-এ যায় না?",
    qen: "Why doesn't Xero connect go through XHR?",
    a: "ক্রস-অরিজিন 302-রিডাইরেক্ট ব্রাউজার XHR-এ ফলো করতে পারে না — তাই window.location.assign (top-level nav, issue #40/3ddd579)।",
    aen: "Browsers refuse cross-origin redirects in XHR — hence top-level navigation (issue #40)."
  },
  story: `<p class="scene-setting">সমুদ্রপাড়ের বিদেশি বাজার। দোকানি <strong>বণিক ইউসুফ</strong> — তাঁর সাথে কাজ করার নিয়ম
  একটাই চুক্তি: <strong>প্রবেশপত্র</strong>। তুমি তাঁর দোকানে যাবে তোমার নৌকা ভেড়াতে ভেড়াতে (ব্রাউজার নিজেই যাবে —
  redirect), ঘরোয়া নৌকার দাঁড়ায় (XHR-এ) নয় — কারণ বাজারের ফটক এমনভাবে বাঁকানো যে দাঁড়ের খোলে সে বাঁক নেয় না।
  প্রবেশপত্র পেলে ইউসুফ সেটা <strong>সিল-করা খামে</strong> রাখেন (Fernet) — খোলা পাতায় নয়। বাজারের চৌকিদার প্রতিদিন
  সকালে খবর পাঠান (webhook) — কিন্তু প্রতিটি চিঠি <strong>মোহরে</strong> যাচাই হয়; মোহরহীন চিঠি আগুনে। আর ইউসুফের
  এক আয়না-ঘর আছে: প্রতিদিন ভোরে তাঁর বিক্রির খাতা কপি করে রাখেন (mirror) — যেন হিসাব মেলানো যায় বাজারে না
  গিয়েও।</p>
  <p class="scene-setting en">A foreign market across the sea. Merchant <strong>Yusuf the Trader</strong> — one
  covenant governs all work: the <strong>pass</strong>. You reach his shop by beaching your own boat (the browser
  itself — redirect), never by oar-lock (XHR) — the market gate bends in a way oars cannot follow. Granted a
  pass, Yusuf keeps it in a <strong>wax-sealed envelope</strong> (Fernet), never loose-leaf. The market watchman
  sends word daily (webhooks) — but every letter is verified against a <strong>seal</strong>; unsealed letters
  burn. And Yusuf keeps a mirror-room: each dawn his sales-book is copied (the mirror) — so accounts reconcile
  without sailing there.</p>
  <div class="code-block">apps/xero/ — চার দরজার বাজার-সম্পর্ক

দরজা ১: প্রবেশপত্র (OAuth2)
  প্রবাহ: SPA → BE /connect/ (302) → Xero লগইন
        → BE /callback/ (302) → SPA ?xero=connected
  ⚠ বাধ্য: HttpResponseRedirect — JSON দিলে OAuth ভাঙে
    (ক্রস-অরিজিন রিডাইরেক্টে XHR অসহায় — #40, 3ddd579)
  FE: window.location.assign(API_BASE + '/api/xero/auth/connect/')
  টোকেন-সংরক্ষণ: XeroConnection সারি, Fernet(XERO_TOKEN_KEY)
  রিফ্রেশ/রিভোক: services/oauth.py

দরজা ২: মোহরযুক্ত চিঠি (Webhook)
  প্রতিটি কল HMAC-SHA256 যাচাই (XERO_WEBHOOK_KEY)
    services/webhook.py — ব্যর্থ যাচাই = নীরব প্রত্যাখ্যান
  ঘটনা জমে: xero_webhook_events

দরজা ৩: আয়না-ঘর (Daily Mirror)
  xero.sync_current_month — দৈনিক 06:00 UTC Celery beat
    → XeroInvoice / XeroInvoiceLine টেবিল
    → auto-min-check ট্যাবের খাবার (দরজা ৯)
  xero.sync_period — চাহিদে-মাফিক সাময়িক জানালা
  ADR-0024: "Sync now" বাটন + ৩-তারিখ beat (min-check-মুখী)
  Explorer — লাইভ, রিড-ওনলি, feature key xero_explorer
    (admin seed + UserFeatureGrant; ADR-0010)
    ⚠ Explorer ≠ min-check ট্যাব (আয়না বনাম লাইভ নদী)

দরজা ৪: তিন হাতের লেখা (Write Surfaces)
  payment push   xero_payment_push   (billing)
  credit-note    xero_credit_push    (invoices)
  invoice        xero_invoice_push   (invoices)
  সবই: চক-কালি (দরজা ১৪) + নিজের feature key
  প্রত্যাখ্যাত-ইতিহাস: contact push + দৈনিক contact-আয়না
    ADR-0012-এ বাদ (2026-05-26) — যোগাযোগ Xero UI-তে থাকে;
    contact নাম → id মিলায় এখন XeroInvoice-আয়না fallback

কঠিন পূর্বশর্ত:
  পেমেন্ট-পুশ: BillingConfig.xero_bank_account_code ছাড়া ফাঁস
  ক্রেডিট-পুশ: account_code=697 + tax_type=EXEMPT (G18)

XeroClient SDK পড়া-পথ: accounts/contacts/invoices/items
  উত্তর-আকৃতি অন্ধভাবে বিশ্বাস নিষেধ — প্রথমে যাচাই (OWASP #10)</div>
  <div class="verse">আহদ — "আল্লাহর প্রতি তোমাদের অঙ্গীকার পূর্ণ করো" (৫:১) এবং "অঙ্গীকার ভঙ্গকারীদের আল্লাহ পছন্দ করেন না" (৮:৭-এর ভাব)। ইউসুফের প্রবেশপত্র এক আহদ: দেওয়া হয়েছে নির্দিষ্ট কাজের জন্য, রাখা হয়েছে সিলে, ফেরানো হয় সম্মানে। LedgerPilot-এর টোকেনও তাই — Fernet-খামে, নির্দিষ্ট পথে, আর মোহরহীন চিঠি কখনো গ্রহণ নয় — কারণ চুক্তিহীন খবর ফিতনার বীজ।</div>
  <div class="diagram">
    <div class="diag-title">The Covenant — Four Doors into the Market</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowX18" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="390" y="40" width="155" height="240" rx="12" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="2"/>
      <text x="467" y="68" text-anchor="middle" fill="#cbd5e1" font-size="13" font-weight="700">🏪 XERO</text>
      <text x="467" y="84" text-anchor="middle" fill="#94a3b8" font-size="8">বিদেশি বাজার</text>
      <text x="467" y="130" text-anchor="middle" fill="#94a3b8" font-size="8">লগইন-ফটক</text>
      <text x="467" y="180" text-anchor="middle" fill="#94a3b8" font-size="8">চিঠি-চৌকি</text>
      <text x="467" y="230" text-anchor="middle" fill="#94a3b8" font-size="8">বিক্রির খাতা</text>
      <rect x="15" y="30" width="330" height="38" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="180" y="46" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="600">১. প্রবেশপত্র: SPA → 302 → Xero → 302 → SPA</text>
      <text x="180" y="60" text-anchor="middle" fill="#94a3b8" font-size="8">top-level navigation · টোকেন Fernet-খামে (XERO_TOKEN_KEY)</text>
      <rect x="15" y="82" width="330" height="38" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="180" y="98" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="600">২. মোহর-চিঠি: webhook → HMAC-SHA256 যাচাই → xero_webhook_events</text>
      <text x="180" y="112" text-anchor="middle" fill="#94a3b8" font-size="8">মোহর মিললে না — চিঠি আগুনে; কোনো গ্রহণ নয়</text>
      <rect x="15" y="134" width="330" height="38" rx="9" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="180" y="150" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="600">৩. আয়না-ঘর: sync_current_month (06:00 UTC) + Sync-now</text>
      <text x="180" y="164" text-anchor="middle" fill="#94a3b8" font-size="8">mirror → min-check ট্যাব · Explorer = লাইভ, আলাদা</text>
      <rect x="15" y="186" width="330" height="38" rx="9" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="180" y="202" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="600">৪. তিন হাতের লেখা: payment · credit-note · invoice push</text>
      <text x="180" y="216" text-anchor="middle" fill="#94a3b8" font-size="8">সবই চক-কালি + নিজের key · স্বয়ংক্রিয় push নিষেধ</text>
      <rect x="15" y="238" width="330" height="42" rx="9" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="180" y="255" text-anchor="middle" fill="#cbd5e1" font-size="8">ADR-0012 (2026-05-26): contact-push + দৈনিক contact-আয়না বাদ</text>
      <text x="180" y="270" text-anchor="middle" fill="#94a3b8" font-size="8">যোগাযোগ Xero UI-তে · contact-id মিলায় এখন XeroInvoice fallback</text>
      <line x1="345" y1="49" x2="430" y2="120" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowX18)"/>
      <line x1="345" y1="100" x2="420" y2="170" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowX18)"/>
      <line x1="430" y1="228" x2="345" y2="155" stroke="#818cf8" stroke-width="1.6" stroke-dasharray="5 3" marker-end="url(#arrowX18)"/>
      <text x="395" y="205" text-anchor="middle" fill="#818cf8" font-size="8">খাতার কপি ফেরে</text>
      <line x1="345" y1="205" x2="440" y2="235" stroke="#fbbf24" stroke-width="1.6" marker-end="url(#arrowX18)"/>
      <text x="280" y="303" text-anchor="middle" fill="#64748b" font-size="9">যাওয়া ব্রাউজারে, ফেরা আয়নায়, লেখা তিন হাতে — চতুর্থ কোনো পথ নেই</text>
    </svg>
    <div class="diag-cap">প্রবেশপত্র (OAuth redirect) · মোহর (HMAC) · আয়না (mirror) · তিন-হাত (push) — ADR-0009-এর সীমানা অটুট।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সবচেয়ে সূক্ষ্ম দুই দগা:</strong> (১) <code>xeroConnect()</code> XHR-হেল্পার ইচ্ছাকৃত ভেস্টিজিয়াল — regression টেস্ট নিশ্চিত করে সে <em>কল হয় না</em>; JSON "সুবিধা" করলে OAuth পুনরায় ভাঙবে। (২) একই "invoice" শব্দে XeroInvoice (তাঁর খাতা) আর InvoiceSave (আমার ব্যাচ) গুলিয়ে ফেলা — সবসময় নাম-সহ বলো।</div></div>
  <div class="secret-box">🔗 যাওয়া ব্রাউজারে, ফেরা আয়নায়, চিঠি মোহরে, লেখা তিন হাতে — চুক্তির বাইরে এক অক্ষর নয়। / Navigate to enter, mirror to read, HMAC to trust, three hands to write — the covenant holds.</div>`,
  senior: {
    title: "Xero Integration Map",
    body: `<p>OAuth: <code>views_auth.py</code> — ৩০২-প্রবাহ, top-level nav বাধ্য (#40); টোকেন <code>XeroConnection</code>+Fernet(XERO_TOKEN_KEY)। Webhook: HMAC-SHA256 (<code>webhook.py</code>) → <code>xero_webhook_events</code>। আয়না: <code>sync_current_month</code> (06:00 UTC) + <code>sync_period</code> + Sync-now (ADR-0024) → <code>XeroInvoice(Line)</code>; Explorer আলাদা (লাইভ রিড-ওনলি, <code>xero_explorer</code> key)। লেখা: payment/credit/invoice push — প্রত্যেকে চক-কালি+নিজের key; পূর্বশর্ত: <code>xero_bank_account_code</code>; 697+EXEMPT। ADR-0012-এ contact-push/আয়না বাদ — contact-id fallback = XeroInvoice আয়না। উত্তর যাচাই করো (OWASP #10)।</p>`
  }
});
