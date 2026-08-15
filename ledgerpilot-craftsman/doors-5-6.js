// doors-5-6.js — The Ledger Craftsman (LedgerPilot deep-dive)

// doors-6-10.js — Part II: টাকার মেঝে (Money Floor) — doors 6-10

doors.push({
  num: 5,
  icon: "🧱",
  color: "#5eead4",
  name: "সম্পর্কের ইমারত",
  subtitle: "The Edifice of Relations — Company, Client, Supervisor",
  tech: "clients app: Company vs Client, status FSM, balance-audit flag, supervisor name-not-FK (ADR-0001)",
  spirit: "শিরকাত — shirākah (partnership: distinct roles, one building)",
  secret: "আইনের গৃহ আর চুক্তির গৃহ আলাদা — Company স্থায়ী, Client বহনযোগ্য; তদারককার নাম-মাত্র, লগইন নয়।",
  recall: {
    q: "Company আর Client-এর পার্থক্য কী?",
    qen: "What separates Company from Client?",
    a: "Company = আইনি সত্তা (স্থায়ী); Client = চলমান চুক্তি (মূল্য, তদারক, আর্কাইভ-ফ্ল্যাগ বহন করে)।",
    aen: "Company = the stable legal entity; Client = the mutable engagement carrying pricing, supervisor, archive."
  },
  story: `<p class="scene-setting">পুরনো শহরের এক ইমারত-পাড়া। রাজমিস্ত্রি <strong>উস্তাদ নাসির</strong> — তাঁর নিয়ম: প্রতিটি বাড়ির
  <strong>ভিত</strong> একবার সাজানো হয় (ইটে খোদাই করা নাম, ঠিকানা — যুগ যুগ স্থায়ী), কিন্তু <strong>বাসার চুক্তি</strong>
  বদলায় — কে ভাড়া দিচ্ছে, কত ভাড়া, কার তদারকিতে, কে চলে গেছে। ভিত নাড়ানো মানে পুরো পাড়া ভাঙা; চুক্তি বদলানো
  মানে শুধু দরজার পাল্লায় নতুন তালা। আর খেয়াল করো — প্রতিটি বাসার দরজায় একটা <em>তদারককারীর নামফলক</em>: কেবল
  নাম, পদবি — সে শহরের ফটকের লগইন-তালিকার মানুষ নয়।</p>
  <p class="scene-setting en">An old quarter of townhouses. Mason <strong>Ustad Nasir</strong> — his rule: each
  house's <strong>foundation</strong> is laid once (name chiseled in brick, address — permanent), but the
  <strong>tenancy</strong> changes — who rents, for how much, under whose oversight, who has left. Moving a
  foundation means breaking the quarter; changing a tenancy means only a new lock on the door. And note the
  <em>overseer's name-plate</em> on each door: a name only — not a person from the city-gate login register.</p>
  <div class="dialogue">এক ভদ্রলোক এসে বলেন — "নাসির মিয়া, আমি চলে যাচ্ছি — বাড়িটাও মুছে দিন!"
  <br>নাসির হাসেন — "তুমি চলে গেলে চুক্তি শেষ (status='old', কেন গেলেন লেখা থাকবে) — কিন্তু ইট আমার, ভিত থাকবে।
  <strong>ভবন আর বাসা এক নয়।</strong> আর লুকিয়ে ফেলতে চাইলে ('inactive') — দরজা বন্ধ, কাগজ থাকবে; ইতিহাস মোছা নিষেধ।"</div>
  <div class="code-block">apps/clients/ — ইমারতের তিন স্তর

স্তর ১: Company (আইনি সত্তা — ভিত)
  · বিশ্বব্যাপী-অনন্য নাম + ঠিকানা
  · যুগ যুগ স্থায়ী; status নেই
  · এক Company-র একাধিক Client হতে পারে (বাস্তবে ~1:1)

স্তর ২: Client (চুক্তি — বাসা)
  · pricing_raw, standard_hourly_rate, cleanup_hourly_rate
  · monthly_minimum (ADR-0023: আসল মেঝে; price_minimum নয়!)
  · auto_pay, is_balance_audit, minimum_exempt
  · primary_supervisor (FK) + co-supervisors (join টেবিল)
  · status FSM: current → old (churn) / inactive (soft-delete)
    · old → current (পুনরায় সাইন-আপ)
    · inactive → current (undelete)
    · old ↔ inactive পথ নেই!  সেবা: status_fsm.py
  · ভুল করো না: archived_at টাইমস্ট্যাম্প; সত্য হলো status='inactive'

স্তর ৩: Supervisor (নামফলক — লগইন নয়)
  · supervisors টেবিলে; User-এর সাথে FK নেই (ADR-0001)
  · দুই জগৎ: Supervisor = চুক্তির তদারক লেবেল; User = LP-র লগইন
  · Unassigned client = current কিন্তু তদারক নেই — স্বাভাবিক অস্থায়ী অবস্থা,
    অ্যাকশন-কিউতে ওঠে

মিসরীয় কলামের দগা (is_balance_audit):
  · 1 = ক্লায়েন্ট Peter-এর balance_audit শিটে, মূল টাইমশিটে নয়
  · আলাদা Excel শিট (DD/MM/YYYY মিশ্র তারিখ), আলাদা পার্সার-পথ
  · ইনভয়েস-নম্বর offset (_get_balance_audit_rank_offset)
  · ক্লায়েন্ট ভিউতে read-only — ইনপোর্ট-সময়ে সেট, পরে বদলানো নিষেধ

ADR-0025 নাম-সংস্কার:
  পুরনো নাম          →  আসল অর্থ
  price_per_unit      →  standard_hourly_rate ($34/hr পাবলিক)
  price_minimum       →  cleanup_hourly_rate  ($45/hr — মেঝে নয়!)
  billing_minimum    →  monthly_minimum      (ADR-0023 মেঝে)
  monthly_fee         →  signup_order_in_month (ক্রমিক নম্বর, ফি নয়)</div>
  <div class="verse">শিরকাত — ইসলামী বাণিজ্য-আইনের অংশীদারত্ব: প্রত্যেক অংশীদারের দায় তার চুক্তিমাফিক, সবাই সমান নয়। নাসিরের ইমারতে তিন অংশীদার: ভিত (Company) চিরস্থায়ী, বাসা (Client) চুক্তিবদ্ধ, নামফলক (Supervisor) নির্দেশক মাত্র। একটির দায় অন্যটিতে চাপালে ইমারত কাত হয় — তাই তিনটি আলাদা টেবিল, আলাদা FSM, আর ADR-0001-এর দেয়াল।</div>
  <div class="diagram">
    <div class="diag-title">Three Tenants of One Building — Company / Client / Supervisor</div>
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowE6" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="30" y="40" width="180" height="120" rx="10" fill="rgba(100,116,139,0.12)" stroke="#94a3b8" stroke-width="2"/>
      <text x="120" y="65" text-anchor="middle" fill="#cbd5e1" font-size="11.5" font-weight="700">🏢 Company</text>
      <text x="120" y="80" text-anchor="middle" fill="#64748b" font-size="8">আইনি সত্তা — ভিত</text>
      <text x="120" y="98" text-anchor="middle" fill="#94a3b8" font-size="8">· অনন্য নাম + ঠিকানা</text>
      <text x="120" y="112" text-anchor="middle" fill="#94a3b8" font-size="8">· status নেই — চিরস্থায়ী</text>
      <text x="120" y="126" text-anchor="middle" fill="#94a3b8" font-size="8">· email contacts এখানে</text>
      <text x="120" y="145" text-anchor="middle" fill="#fbbf24" font-size="8">1 : N (বাস্তবে ~1:1)</text>
      <rect x="350" y="40" width="180" height="150" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="2"/>
      <text x="440" y="65" text-anchor="middle" fill="#5eead4" font-size="11.5" font-weight="700">🏠 Client</text>
      <text x="440" y="80" text-anchor="middle" fill="#64748b" font-size="8">চুক্তি — বাসা (মিউটেবল)</text>
      <text x="440" y="98" text-anchor="middle" fill="#94a3b8" font-size="8">· pricing, monthly_minimum</text>
      <text x="440" y="112" text-anchor="middle" fill="#94a3b8" font-size="8">· auto_pay · is_balance_audit</text>
      <text x="440" y="126" text-anchor="middle" fill="#94a3b8" font-size="8">· status: current/old/inactive</text>
      <text x="440" y="140" text-anchor="middle" fill="#94a3b8" font-size="8">· notes এখানে (email নয়)</text>
      <text x="440" y="158" text-anchor="middle" fill="#f87171" font-size="8">⚠ price_minimum = ঘণ্টা-রেট, মেঝে নয়</text>
      <text x="440" y="172" text-anchor="middle" fill="#f87171" font-size="8">⚠ monthly_fee = ক্রমিক নম্বর, ফি নয়</text>
      <rect x="120" y="215" width="320" height="52" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="280" y="235" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="600">👤 Supervisor — নামফলক মাত্র</text>
      <text x="280" y="250" text-anchor="middle" fill="#64748b" font-size="8">supervisors টেবিল · User-এ কোনো FK নেই (ADR-0001)</text>
      <line x1="210" y1="100" x2="348" y2="100" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowE6)"/>
      <text x="280" y="92" text-anchor="middle" fill="#64748b" font-size="8">এক ভিতে একাধিক চুক্তি</text>
      <line x1="440" y1="190" x2="360" y2="220" stroke="#818cf8" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#arrowE6)"/>
      <text x="420" y="212" text-anchor="middle" fill="#64748b" font-size="8">primary + co- (join)</text>
      <line x1="120" y1="160" x2="200" y2="220" stroke="#818cf8" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#arrowE6)"/>
      <text x="140" y="200" text-anchor="middle" fill="#64748b" font-size="8">সম্পর্ক নেই — দুই জগৎ</text>
    </svg>
    <div class="diag-cap">Company স্থায়ী ভিত, Client বদলযোগ্য চুক্তি, Supervisor শুধু নামফলক — তিন টেবিল, তিন দায়, এক ইমারত।</div>
  </div>
  <div class="callout info"><span class="co-icon">🎯</span><div><strong>লাইভ ডেটা (২০২৬-০৫-২৬):</strong> 531 current / 624 old / 0 inactive — soft-delete পথ তারযুক্ত কিন্তু এখনো কেউ ব্যবহার করেনি। মনে রেখো: <code>current → old → current</code> (পুনরায় সাইন-আপ) সম্ভব, কিন্তু <code>old ↔ inactive</code> কখনো নয়।</div></div>
  <div class="secret-box">🧱 ভিত চিরস্থায়ী, বাসা চুক্তিবদ্ধ, নামফলক নির্দেশক — তিনটি গুলিয়ো না, ইমারত কাত হবে। / Company is the permanent foundation, Client the mutable lease, Supervisor a name-plate — never merge the three.</div>`,
  senior: {
    title: "Clients Domain Map",
    body: `<p><code>apps/clients/</code>: Company (আইনি, statusহীন) → Client (চুক্তি: pricing, <code>monthly_minimum</code>=আসল মেঝে ADR-0023, <code>auto_pay</code>, <code>is_balance_audit</code>, <code>minimum_exempt</code>) → Supervisor (নাম-টেবিল, User-এ FK নেই — ADR-0001)। Client FSM (<code>status_fsm.py</code>): current→old/inactive, old→current, inactive→current; old↔inactive নিষেধ; <code>archived_at</code> টাইমস্ট্যাম্প মাত্র। Unassigned = স্বাভাবিক অস্থায়ী অবস্থা। ADR-0025 নাম-ম্যাপ মনে রাখো। Balance-audit: আলাদা শিট+নম্বর-offset, ভিউতে read-only।</p>`
  }
});


doors.push({
  num: 6,
  icon: "⏳",
  color: "#5eead4",
  name: "বালুর ঘড়ি ও ছাঁকনি",
  subtitle: "The Hourglass and the Sieve — Timesheet Pipeline",
  tech: "timesheets app: parse_excel, validate_row, rejected entries, cross-report dedupe, force-import",
  spirit: "ইহসান — ihsān (excellence: each grain counted, each hour witnessed)",
  secret: "প্রতিটি ঘণ্টা তিন ছাঁকনিতে — পার্স, বৈধতা, নকল-বিচার; প্রত্যাখ্যাত সারি ঝুড়িতে, কখনো মুছে নয়।",
  recall: {
    q: "একই সারি দুই রিপোর্টে এলে কী হয়?",
    qen: "The same row arrives in two reports — what happens?",
    a: "Cross-report dedup সারিটা skip করে — ক্যাননিক্যাল কী: (employee, ISO-date, jobcode, hours, start, end, item)। ডাবল-বিলিং অসম্ভব।",
    aen: "Cross-report dedupe skips it on the canonical 7-tuple key — double billing is impossible."
  },
  story: `<p class="scene-setting">মসজিদের সময়রক্ষক <strong>মুয়াজ্জিন রহিম</strong> — তাঁর সবচেয়ে প্রিয় জিনিস দুটো: এক বিশাল
  বালুর ঘড়ি, আর তিন স্তরের ছাঁকনি। কারিগররা যখন দিনের কাজের হিসাব আনে, রহিম প্রথমে <strong>ছাঁকনি-১</strong>-এ
  ঢালেন — মোটা খুচরো আটকায় (ভাঙা সারি, নেই-মেলা কলাম)। তারপর <strong>ছাঁকনি-২</strong> — বালির দানা মাপা যায়
  (ঘণ্টা ০-এর নিচে বা ২৪-এর উপরে? তারিখ রিপোর্টের বাইরে? শুরু-শেষ উল্টো?)। শেষে <strong>ছাঁকনি-৩</strong> — সবচেয়ে
  সূক্ষ্ম: এই দানা কি আগেও ঢালা হয়েছিল? (নকল বিচার)। যে দানা প্রত্যাখ্যাতো, সে ঝুড়িতে যায় — কারণসহ টিকিট
  লাগিয়ে; মুছে ফেলা হয় না। কেন জানো? কাল সেই দানাই হয়তো সংশোধনীসহ ফিরে আসবে।</p>
  <p class="scene-setting en">The mosque's timekeeper <strong>Muezzin Rahim</strong> — two treasured tools: a great
  hourglass and a three-layer sieve. When craftsmen bring their day's tally, Rahim pours through <strong>sieve 1</strong>
  (coarse debris: broken rows, missing columns), then <strong>sieve 2</strong> (each grain measured: hours outside
  0–24? dates outside the report window? start after end?), finally <strong>sieve 3</strong> — the finest: has this
  grain been poured before? (duplicate judgment). Rejected grains go to a basket, each with a reason-tag; never
  discarded. Tomorrow that grain may return with a correction.</p>
  <div class="dialogue">এক কারিগর বলে — "রহিম চাচা, ঝুড়ির সারিগুলো কেন রাখেন? ফেলে দিন না!"
  <br>রহিম — "বল তো, ঈশ্বর-ভয়ে গণনা করা আর অলসতায় ফেলে দেওয়া — কোনটা ইহসান? প্রত্যেক ঘণ্টার পেছনে একজন
  মানুষের ঘাম। <strong>প্রত্যাখ্যাত মানে অপেক্ষমাণ, মৃত নয়।</strong>"</div>
  <div class="code-block">apps/timesheets/ — বালু থেকে ইনভয়েস-বীজ

ধাপ ১: আপলোড (POST /api/timesheets/upload → TimesheetUploadView)
  · Peter-এর QuickBooks Time Excel — ফাইলনামে তারিখ-পরিসর (regex-পার্স)
  · প্রয়োজনীয় কলাম: username, fname, lname, group,
    local_date, hours, jobcode (+ঐচ্ছিক inventory item)
  · MAX_TIMESHEET_ROWS=50,000 / COLS=100 — ODM-রক্ষা, স্পষ্ট ডোমেইন-এরর

ধাপ ২: পার্স (services/parser.py — parse_excel)
  · সাধারণ শিট: native datetime
  · balance_audit শিট: মিশ্র — DD/MM/YYYY স্ট্রিং + native
    → _coerce_mixed_date() প্রতি-সারি উভয় রূপ সামলায়
  · inventory_item_code-এ হোয়াইটস্পেস কলাপ্স

ধাপ ৩: ছাঁকনি-২ বৈধতা (services/validator.py — validate_row)
  প্রত্যাখ্যান-কারণ:
    · username/fname/lname/jobcode খালি
    · hours ∉ (0, 24]
    · local_date রিপোর্ট-পরিসরের বাইরে
    · start_time > end_time

ধাপ ৪: ঝুড়ি (RejectedEntry — ts_rejected_entries)
  · raw_* কলামে মূল স্ন্যাপশট + কারণ
  · পরে force-import করা যায় (Door ৭-এর আতিক = ForceImportOperation)

ধাপ ৫: ছাঁকনি-৩ নকল-বিচার (services/duplicates.py)
  ক্যাননিক্যাল কী (৭-উপাদান):
    (employee_id, ISO-date, jobcode,
     str(float(hours)), start_time, end_time, inventory_item_code_id)
  · সাধারণ ইমপোর্টে load_existing_entry_keys
  · ফোর্স-ইমপোর্টে is_duplicate_entry(..., exclude_report_id=...)
  → ডাবল-বিলিং অসম্ভব (OWASP HIGH #4)

ফল: TimesheetReport (ts_reports)
  · upload_type ∈ {timesheet, business_audit, balance_audit}
  · report_start/end_date, imported_rows, rejected_rows, status
  · এক রিপোর্ট → পরে ঠিক একটি InvoiceSave (Door ৮-এর জন্মদাতা)

অডিট (TimesheetUploadAudit, PR #68): ইমপোর্টের আগেই সারি — আতিকের বাহির নীতির আত্মীয়।</div>
  <div class="verse">ইহসান — "আল্লাহকে এমনভাবে ভয় করো যেন তুমি তাঁকে দেখছ; তুমি না দেখলেও তিনি তোমাকে দেখছেন" (বুখারি ৫০, জিবরিল-হাদিস)। রহিমের তিন ছাঁকনি ইহসানের তিন প্রশ্ন: অন্যায়ভাবে নেওয়া হয়েছে কি (বৈধতা)? বেশি নেওয়া হয়েছে কি (সীমা)? দুইবার নেওয়া হয়েছে কি (নকল)? প্রতিটি ঘণ্টার সাক্ষী তিনি — তাই LedgerPilot-এর প্রতিটি সারি।</div>
  <div class="diagram">
    <div class="diag-title">The Three Sieves — Upload to Report</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowS7" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="190" y="10" width="180" height="40" rx="9" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="280" y="28" text-anchor="middle" fill="#fcd34d" font-size="9.5" font-weight="700">📄 QuickBooks Time Excel</text>
      <text x="280" y="42" text-anchor="middle" fill="#94a3b8" font-size="8">Peter-এর আপলোড — ফাইলনামে তারিখ-পরিসর</text>
      <rect x="190" y="65" width="180" height="36" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="82" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="600">ছাঁকনি-১ parse_excel</text>
      <text x="280" y="95" text-anchor="middle" fill="#94a3b8" font-size="8">কলাম-ম্যাপ + মিশ্র-তারিখ কোয়ার্সন</text>
      <rect x="190" y="116" width="180" height="36" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="133" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="600">ছাঁকনি-২ validate_row</text>
      <text x="280" y="146" text-anchor="middle" fill="#94a3b8" font-size="8">ঘণ্টা-সীমা · তারিখ-পরিসর · শুরু-শেষ</text>
      <rect x="190" y="167" width="180" height="36" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="184" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="600">ছাঁকনি-৩ duplicates</text>
      <text x="280" y="197" text-anchor="middle" fill="#94a3b8" font-size="8">ক্যাননিক্যাল ৭-টুপল কী-মিল</text>
      <rect x="190" y="218" width="180" height="40" rx="9" fill="rgba(52,211,153,0.14)" stroke="#34d399" stroke-width="2"/>
      <text x="280" y="236" text-anchor="middle" fill="#6ee7b7" font-size="9.5" font-weight="700">✓ TimesheetReport</text>
      <text x="280" y="250" text-anchor="middle" fill="#94a3b8" font-size="8">ts_entries + গণনা → InvoiceSave-এর বীজ</text>
      <rect x="435" y="116" width="115" height="87" rx="9" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.5"/>
      <text x="492" y="140" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">🧺 ঝুড়ি</text>
      <text x="492" y="156" text-anchor="middle" fill="#94a3b8" font-size="8">RejectedEntry</text>
      <text x="492" y="168" text-anchor="middle" fill="#94a3b8" font-size="8">raw_* স্ন্যাপশট</text>
      <text x="492" y="180" text-anchor="middle" fill="#94a3b8" font-size="8">কারণসহ টিকিট</text>
      <text x="492" y="195" text-anchor="middle" fill="#fbbf24" font-size="8">→ আতিকের দরজা ১৮ (ফোর্স)</text>
      <line x1="280" y1="50" x2="280" y2="63" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowS7)"/>
      <line x1="280" y1="101" x2="280" y2="114" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowS7)"/>
      <line x1="280" y1="152" x2="280" y2="165" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowS7)"/>
      <line x1="280" y1="203" x2="280" y2="216" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowS7)"/>
      <line x1="370" y1="134" x2="433" y2="150" stroke="#f87171" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrowS7)"/>
      <text x="402" y="128" text-anchor="middle" fill="#f87171" font-size="8">প্রত্যাখ্যাত</text>
      <rect x="15" y="116" width="130" height="87" rx="9" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.3"/>
      <text x="80" y="140" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="600">🔐 অডিট-সারি</text>
      <text x="80" y="156" text-anchor="middle" fill="#94a3b8" font-size="8">TimesheetUpload</text>
      <text x="80" y="168" text-anchor="middle" fill="#94a3b8" font-size="8">Audit — ইমপোর্টের</text>
      <text x="80" y="180" text-anchor="middle" fill="#94a3b8" font-size="8">আগেই (PR #68)</text>
      <text x="80" y="195" text-anchor="middle" fill="#fbbf24" font-size="8">বাহি-নীতির আত্মীয়</text>
      <line x1="190" y1="134" x2="147" y2="150" stroke="#818cf8" stroke-width="1.3" stroke-dasharray="4 3" marker-end="url(#arrowS7)"/>
      <text x="280" y="285" text-anchor="middle" fill="#64748b" font-size="9">তিন ছাঁকনি, এক ঝুড়ি — প্রতিটি ঘণ্টা সাক্ষীসহ যায়</text>
    </svg>
    <div class="diag-cap">আপলোড → পার্স → বৈধতা → নকল-বিচার → রিপোর্ট; প্রত্যাখ্যাত সারি কারণসহ ঝুড়িতে, অডিট-সারি আগে থেকেই।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যালেন্স-অডিট শিটের দগা:</strong> একই কলামে native datetime + DD/MM/YYYY স্ট্রিং মিশ্রিত। একক <code>pd.to_datetime(dayfirst=True)</code> কল ৭০% সারি NaT বানিয়ে ফেলে — তাই প্রতি-সারি <code>_coerce_mixed_date()</code>। এই পাঠ Door ৬-এর <code>is_balance_audit</code> পতাকার সাথে জোড়া।</div></div>
  <div class="secret-box">⏳ প্রতিটি ঘণ্টা তিন ছাঁকনিতে — পার্স, মাপ, নকল-বিচার; প্রত্যাখ্যান মানে অপেক্ষা, মৃত্যু নয়। / Every hour passes three sieves; a rejected row waits in the basket, it never dies.</div>`,
  senior: {
    title: "Timesheet Pipeline Map",
    body: `<p>পথ: <code>TimesheetUploadView</code> → <code>parser.parse_excel</code> (balance-audit মিশ্র-তারিখ সামলায়) → <code>validator.validate_row</code> (খালি ক্ষেত্র, ঘণ্টা (0,24], তারিখ-পরিসর, start≤end) → <code>RejectedEntry</code> (raw_* স্ন্যাপশট) → <code>duplicates</code> (৭-টুপল ক্যাননিক্যাল কী; ইমপোর্ট + ফোর্স উভয় পথে) → <code>TimesheetReport</code>। সীমা: 50k সারি/100 কলাম। অডিট: <code>TimesheetUploadAudit</code> ইমপোর্ট-পূর্ব। ফোর্স-পথ: দরজা ১৮ (আতিকের ForceImportOperation)। এক রিপোর্ট → এক InvoiceSave।</p>`
  }
});
