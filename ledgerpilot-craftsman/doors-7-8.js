// doors-7-8.js — The Ledger Craftsman (LedgerPilot deep-dive)


doors.push({
  num: 7,
  icon: "🧾",
  color: "#5eead4",
  name: "দামের পাথরের তাক",
  subtitle: "The Shelf of Price-Stones — Inventory & Batch Generation",
  tech: "xero_inventory_items mirror, InvoiceLine pricing, InvoiceSave identity, jobcode as client-join",
  spirit: "কায়ল-ওয়া-মীজান — the measure and the weight together",
  secret: "দাম আসে দেয়ালের তাক থেকে (inventory mirror), নাম আসে jobcode থেকে — ব্যাচের পরিচয় চার মাঠে: রিপোর্ট+পিরিয়ড+পিরিয়ড-নম্বর।",
  recall: {
    q: "InvoiceLine-এর unit_amount কোথা থেকে আসে — Xero API থেকে?",
    qen: "Where does InvoiceLine.unit_amount come from — the Xero API?",
    a: "না — XeroInventoryItem আয়না-টেবিল থেকে (Sai-এর CSV আপলোডে রিফ্রেশ হয়)। Xero API নয়।",
    aen: "No — from the XeroInventoryItem mirror table (refreshed by Sai's CSV upload), not the Xero API."
  },
  story: `<p class="scene-setting">বাজারের দাম-নির্ধারকের দোকান। <strong>মুদ্রাকর ইলিয়াস</strong> — তাঁর দেওয়ালে সারি সারি ছোট পাথরের
  টুকরো, প্রতিটিতে খোদাই: "462 — মাসিক ন্যূনতম · $460"। এই তাকই শহরের সব দামের উৎস। কারিগররা কাজের হিসাব আনলে
  (রহিমের ছাঁকনি-পার বালি) ইলিয়াস প্রতিটি সারিতে দুটো জিনিস লেখেন: <strong>কার নামে</strong> (jobcode — ব্যবসায়ীর
  ডাকনাম, আসল নামও হতে পারে উপনামও) আর <strong>কোন পাথরের দামে</strong> (inventory কোড)। কাগজের পরিচয়পত্রে লেখেন
  চারটি খুঁটিনাটি: কোন হিসাব-খাতা (report), কোন মাস, কোন পাক্ষিক, কত নম্বর — <strong>এই চার মিললেই সে এক ও একমাত্র
  দলিল</strong>; ফের লিখতে বসলে আগেরটা মুছে নতুন করে গড়া হয়।</p>
  <p class="scene-setting en">The market's price-setter. <strong>Die-cutter Ilyas</strong> — walls of small stone
  tablets, each engraved: "462 — Monthly Minimum · $460". This shelf is the source of every price in the city.
  When craftsmen bring their sieved tally, Ilyas writes two things per row: <strong>in whose name</strong> (the
  jobcode — a merchant's calling name, true name or alias) and <strong>at which stone's price</strong> (the
  inventory code). The document's identity has four parts: which ledger (report), which month, which half, which
  number — <strong>those four make it one and unique</strong>; re-writing wipes and rebuilds.</p>
  <div class="dialogue">শাগিরদ জিজ্ঞেস করে — "উস্তাদ, দাম কেন তাক থেকে? সরাসরি বাজার (Xero API) থেকে নিলে ভুল কম হতো!"
  <br>ইলিয়াস — "বাজার প্রতি মুহূর্তে নড়ে। আমার তাক সাই সাহেব প্রতি পাক্ষিকে মুছে-টিকে সাজান — CSV বাক্সে করে
  আনেন, আমি চোখে দেখে তুলি। <strong>যে দাম চোখে দেখে তোলা হয়নি, সে দাম দলিলে যায় না।</strong> আর নাম? jobcode
  মানেই ডাকনাম — আসল নাম খুঁজতে হলে আয়নার প্রাসাদে যাবি (contact resolver)।"</div>
  <div class="code-block">দাম-তাক থেকে ব্যাচ — তিনটি টেবিলের নাচ

টেবিল ১: XeroInventoryItem (দেয়ালের তাক)
  · Sai-এর CSV আপলোড: POST /api/xero/inventory/upload
    ফাইলনাম বাধ্য: InventoryItems-YYYY-MM-DD.csv (regex)
    কলাম: ItemCode, SalesUnitPrice, SalesAccount
  · সফল সারি → xero_inventory_items
  · ব্যর্থ সারি → xero_rejected_inventory (আতিকের ঝুড়ি)
  · ⚠ দামের উৎস এই টেবিল — Xero API কখনো নয়

টেবিল ২: InvoiceLine (ব্যাচের সারি)
  প্রতিটি সারি বহন করে:
    contact_name = jobcode        # কার নামে — ডাকনাম হতে পারে!
    inventory_item_code           # কোন পাথরে
    unit_amount                   # তাক থেকে টানা দাম
    quantity, description, গ্রুপিং-মাঠ
  · InvoiceLine → clients.Client কোনো FK নেই!
  · জোড়া চলে নাম দিয়ে: jobcode ≈ company-নাম/উপনাম
    (টাইমশিট থেকে এসেছে — Door ৭)

টেবিল ৩: InvoiceSave (দলিলের পরিচয়)
  অনন্য চার-মাঠ: (report_id, period_year, period_month,
                    period_number ∈ {1,2})
  · period_number: পাক্ষিক — P1 = ১-১৫, P2 = ১৬-শেষ
  · পুনরায় save = wipe + rebuild (একই চার-মাঠে)
  · স্ট্যাটাস = বশীরের FSM (দরজা ৫)
  · লাইনগুলো রপ্তানিতে contact_name ধরে গুছোয়:
    এক jobcode-গ্রুপ = এক XeroInvoice

স্মার্ট-প্রিভিউ দগা (Issue #919):
  ব্যাচ-নম্বর INV-YYMMDD-NNN টানতে _get_next_invoice_offset
  ৫ রকম জোড়া সামলায় (timesheet→balance_audit, ts→ts,
  ba→ts, ba→ba, ক্রস-পিরিয়ড) + 120s প্রিভিউ-ক্যাশ সেভ-এ ফ্লাশ
  — নইলে পুরনো প্রিভিউ নতুন সেভের নম্বর চুরি করে

মাসিক-ন্যূনতমের রহস্য (দরজা ৯-এর ভিত্তি):
  মেঝে = Client.monthly_minimum (ADR-0023)
        না থাকলে ClientGroup.minimum_override
        না থাকলে DEFAULT_MINIMUM = $460
  462-লাইন LP লেখে না — হিসাব করে দেখায়, ভিকি Xero-তে হাতে লেখেন</div>
  <div class="verse">" এবং পূর্ণ মাপে মাপো, খাটো করে মাপার কষ্ট দিয়ো না" (কুরআন ২৬:১৮১-এর আত্মা; শুআইব-আ:-এর পাঠ)। ইলিয়াসের তাক কায়ল-ওয়া-মীজানের তাক: দাম স্থির পাথরে (mirror), নাম চেনা ডাকনামে (jobcode), পরিচয় চার খুঁটিতে। যে দাম চোখে দেখে তোলা হয়নি তা দলিলে যায় না — কারণ আল্লাহ মাপে-ছেঁটে-দেওয়া অপছন্দ করেন।</div>
  <div class="diagram">
    <div class="diag-title">Shelf → Line → Batch — the Pricing Dance</div>
    <svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowP8" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="30" width="160" height="120" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="95" y="55" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">🪨 দামের তাক</text>
      <text x="95" y="70" text-anchor="middle" fill="#94a3b8" font-size="8">XeroInventoryItem</text>
      <text x="95" y="88" text-anchor="middle" fill="#94a3b8" font-size="8">· Sai-এর CSV আপলোড</text>
      <text x="95" y="100" text-anchor="middle" fill="#94a3b8" font-size="8">· InventoryItems-YYYY-MM-DD</text>
      <text x="95" y="112" text-anchor="middle" fill="#94a3b8" font-size="8">· 462 = ন্যূনতম-টপআপ $460</text>
      <text x="95" y="130" text-anchor="middle" fill="#fbbf24" font-size="8">দামের একমাত্র উৎস</text>
      <text x="95" y="142" text-anchor="middle" fill="#f87171" font-size="8">⚠ Xero API নয়</text>
      <rect x="200" y="30" width="160" height="120" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="55" text-anchor="middle" fill="#5eead4" font-size="10" font-weight="700">📄 ব্যাচের সারি</text>
      <text x="280" y="70" text-anchor="middle" fill="#94a3b8" font-size="8">InvoiceLine</text>
      <text x="280" y="88" text-anchor="middle" fill="#94a3b8" font-size="8">· contact_name = jobcode</text>
      <text x="280" y="100" text-anchor="middle" fill="#94a3b8" font-size="8">· inventory_item_code → পাথর</text>
      <text x="280" y="112" text-anchor="middle" fill="#94a3b8" font-size="8">· unit_amount ← তাক</text>
      <text x="280" y="130" text-anchor="middle" fill="#f87171" font-size="8">⚠ Client-এ FK নেই — নামে জোড়া</text>
      <text x="280" y="142" text-anchor="middle" fill="#94a3b8" font-size="8">ডাকনাম = উপনামও হতে পারে</text>
      <rect x="385" y="30" width="160" height="120" rx="10" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="465" y="55" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="700">📒 দলিল</text>
      <text x="465" y="70" text-anchor="middle" fill="#94a3b8" font-size="8">InvoiceSave</text>
      <text x="465" y="88" text-anchor="middle" fill="#94a3b8" font-size="8">পরিচয়: report + year</text>
      <text x="465" y="100" text-anchor="middle" fill="#94a3b8" font-size="8">+ month + P1/P2</text>
      <text x="465" y="112" text-anchor="middle" fill="#94a3b8" font-size="8">re-save = wipe + rebuild</text>
      <text x="465" y="130" text-anchor="middle" fill="#94a3b8" font-size="8">রপ্তানিতে jobcode-গ্রুপ</text>
      <text x="465" y="142" text-anchor="middle" fill="#94a3b8" font-size="8">= এক XeroInvoice</text>
      <line x1="175" y1="90" x2="198" y2="90" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowP8)"/>
      <text x="187" y="80" text-anchor="middle" fill="#64748b" font-size="8">unit_amount</text>
      <line x1="360" y1="90" x2="383" y2="90" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowP8)"/>
      <text x="372" y="80" text-anchor="middle" fill="#64748b" font-size="8">সারিগুলো</text>
      <rect x="15" y="190" width="530" height="66" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="212" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="600">স্মার্ট-প্রিভিউ (Issue #919): INV-YYMMDD-NNN নম্বর ৫-জোড়া অফসেটে সামলায়</text>
      <text x="280" y="228" text-anchor="middle" fill="#94a3b8" font-size="8">ts→ba · ba→ba · ক্রস-পিরিয়ড — 120s ক্যাশ ফ্লাশ (#919)</text>
      <text x="280" y="244" text-anchor="middle" fill="#94a3b8" font-size="8">মেঝে-চেইন: monthly_minimum → group override → $460 ডিফল্ট · 462-লাইন ভিকি হাতে লেখেন, LP নয়</text>
      <text x="280" y="275" text-anchor="middle" fill="#64748b" font-size="9">দাম তাকে, নাম ডাকনামে, পরিচয় চার খুঁটিতে — রপ্তানিতে এক-একটা Xero দলিল</text>
    </svg>
    <div class="diag-cap">তাক (mirror) → সারি (line) → দলিল (batch); জোড়া বিশ্বাসে নয়, নামে — তাই contact resolver আয়নায় ফেরে।</div>
  </div>
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ধারণা</div>"unit_amount Xero API থেকে লাইভ টানা হয়" — না; API তো বাজার, দলিল চাই চোখে-দেখা তাক (committed mirror)।</div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ বাস্তব</div>Sai CSV আপলোড করেন → mirror রিফ্রেশ → ব্যাচ-জেন তাক থেকে দাম টানে → পরে XeroInvoice আয়নায় ফিরে মিল হয়।</div>
  </div>
  <div class="secret-box">🧾 দাম তাক থেকে, নাম ডাকনামে, পরিচয় চার খুঁটিতে — পুনর্লিখন মানে মুছে-গড়া, সংশোধন নয়। / Price from the committed mirror, name by jobcode, identity by the four-field tuple; re-save rebuilds.</div>`,
  senior: {
    title: "Inventory & Batch Map",
    body: `<p><code>XeroInventoryItem</code> (দামের উৎস; CSV রিফ্রেশ, regex-ফাইলনাম, rejects → <code>xero_rejected_inventory</code>) → <code>InvoiceLine</code> (<code>contact_name</code>=jobcode, <code>unit_amount</code> mirror থেকে, Client-FK নেই) → <code>InvoiceSave</code> (অনন্য: report+year+month+P1/P2; re-save wipe+rebuild; FSM দরজা ৫)। রপ্তানি: jobcode-গ্রুপ = এক XeroInvoice। নম্বর: <code>_get_next_invoice_offset</code> ৫-জোড়া + ক্যাশ-ফ্লাশ (#919)। মেঝে-চেইন: <code>monthly_minimum</code> → group → $460; 462 লাইন Vicki হাতে (ADR-0023)। jobcode↔client মিলে contact resolver (আয়নার প্রাসাদ)।</p>`
  }
});

doors.push({
  num: 8,
  icon: "📜",
  color: "#5eead4",
  name: "দেওয়ানী আদালতের দলিল",
  subtitle: "The Qanungo's Register — InvoiceSave FSM",
  tech: "FSM service + typed exceptions: ACTION_TO_STATUS, select_for_update, audit append",
  spirit: "কিতাবত — kitābat (writing the record before the verdict)",
  secret: "একটি দলিলের অবস্থা বদলায় না নিজে থেকে — বদলায় একটি নির্দিষ্ট ক্রিয়া, একটি লক, আর একটি স্বাক্ষর দিয়ে।",
  recall: {
    q: "দুইজন অপারেটর একই মুহূর্তে একই ব্যাচ transition করলে কী হয়?",
    qen: "Two operators transition the same batch at once — what happens?",
    a: "select_for_update লক — দ্বিতীয়জন প্রথমজনের কমিটের অপেক্ষায় থাকে; একই রায় দুবার লেখা যায় না।",
    aen: "select_for_update lock — the second waits; the same verdict can never be written twice."
  },
  story: `<p class="scene-setting">মুঘল দেওয়ানী আদালত। দলিলখানার দারোগা <strong>কানুনগো বশীর</strong> — তাঁর ডান হাতের
  কড়ে আঙুলে চিরকালের কালির দাগ। প্রতিটি রায়ের আগে তিনি তিনটি কাজ করেন: দলিলটা টেবিলে শক্ত করে চেপে ধরেন
  (কেউ মাঝপথে টেনে নিতে না পারে), সনদের পাতায় লেখেন কোন ক্রিয়ায় অবস্থা বদলাচ্ছে, আর নিচে নাম-সময় লিখে
  রাখেন। তারপর সিলমোহর।</p>
  <p class="scene-setting en">A Mughal civil court. The registrar <strong>Kanungo Bashir</strong> — permanent ink-stain
  on his right index finger. Before any verdict: presses the document flat (nobody snatches it mid-way),
  writes which action changes its state, appends name + time. Then the seal.</p>
  <div class="dialogue">এক নবীন কেরানি বলে — "দরোগা, শুধু জবাববার্তা বদলে দিলেই তো হয়!"
  <br>বশীর চোখ তুলেন — "যে দলিল নিজে থেকে বদলায়, তার কোনো দাম নেই। আজ তুমি 'approved' লিখবে, কাল কেউ
  'exported' লিখে ফেলবে — আর কেউ জানবেই না কে লিখল। <strong>অবস্থা মানেই পথ</strong> — কোন পথে নেই, সেটা নেই।"</div>
  <div class="dialogue en">A junior clerk — "Sir, just update the status field!"
  <br>Bashir — "A document that changes itself is worthless. State means path — a state you can't reach legally doesn't exist."</div>
  <div class="code-block">apps/invoices/services/fsm.py — কানুনগোর খাতার ছাঁচ

ACTION_TO_STATUS = {                    # স্থায়ী চুক্তি: ক্রিয়া → লক্ষ্য-অবস্থা
  'submit_for_review': STATUS_IN_REVIEW,
  'approve':            STATUS_APPROVED,
  'reject':             STATUS_REJECTED,
  'reopen':             STATUS_DRAFT,
  'mark_exported':      STATUS_EXPORTED,
}

class InvalidTransition(InvoiceSaveFsmError):   # টাইপড ব্যতিক্রম — ফেরত দেয় না, ছুড়ে দেয়
  # view এটাকে HTTP 409 এ অনুবাদ করে (allowed_targets সহ!)

def transition_invoice_save(save_id, action, notes, actor):
  invoice = InvoiceSave.objects.select_for_update().get(pk=save_id)  # ① টেবিলে চাপ
  if not invoice.can_transition_to(target):                          # ② পথ আছে কি?
    raise InvalidTransition(...)                                     #    না পেলে 409
  invoice.status = target                                            # ③ চার মাঠ একসাথে:
  invoice.reviewed_by = actor                                        #    কে, কখন,
  invoice.reviewed_at = now                                          #    কী বদলাল,
  invoice.review_notes += audit_line                                 #    কেন
  invoice.save(update_fields=['status','reviewed_by','reviewed_at','review_notes'])

সমান্তরাণ (৪টি FSM একই ছাঁচে):
  apps/invoices/services/fsm.py          → InvoiceSave
  apps/billing/services/cycle_fsm.py     → billing cycle
  apps/clients/services/status_fsm.py    → Client current→old/inactive
  apps/timesheets/services/report_fsm.py → TimesheetReport

বাল্ক: প্রতিটি সারি নিজের atomic-এ, suppress_handoff=True —
  শেষে একটাই একত্র নোটিফিকেশন (N+1 স্প্যাম নয়)।</div>
  <div class="verse">কুরআন ২:২৮২ — "হে মুমিনগণ, যখন তোমরা মেয়াদি ঋণের লেনদেন কর, তখন তা লিখে রাখো"। বশীরের খাতাও তাই — রায় নয়, রায়ের পথ লেখা। review_notes-এর প্রতিটি লাইন একটি সাক্ষ্য: কে, কখন, কোন দরজা দিয়ে।</div>
  <div class="diagram">
    <div class="diag-title">The Document's Permitted Paths — InvoiceSave FSM</div>
    <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowF2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker>
      <marker id="arrowR2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f87171"/></marker></defs>
      <circle cx="70" cy="125" r="34" fill="rgba(45,212,191,0.12)" stroke="#2dd4bf" stroke-width="2"/>
      <text x="70" y="122" text-anchor="middle" fill="#5eead4" font-size="11" font-weight="700">DRAFT</text>
      <text x="70" y="136" text-anchor="middle" fill="#94a3b8" font-size="8">খসড়া</text>
      <circle cx="230" cy="125" r="34" fill="rgba(94,234,212,0.10)" stroke="#5eead4" stroke-width="2"/>
      <text x="230" y="122" text-anchor="middle" fill="#5eead4" font-size="10" font-weight="700">IN_REVIEW</text>
      <text x="230" y="136" text-anchor="middle" fill="#94a3b8" font-size="8">পর্যালোচনায়</text>
      <circle cx="390" cy="125" r="34" fill="rgba(129,140,248,0.12)" stroke="#818cf8" stroke-width="2"/>
      <text x="390" y="122" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="700">APPROVED</text>
      <text x="390" y="136" text-anchor="middle" fill="#94a3b8" font-size="8">অনুমোদিত</text>
      <circle cx="510" cy="125" r="30" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="2"/>
      <text x="510" y="122" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="700">EXPORTED</text>
      <text x="510" y="134" text-anchor="middle" fill="#94a3b8" font-size="8">Xero-য় ঢুকেছে</text>
      <line x1="104" y1="115" x2="194" y2="115" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowF2)"/>
      <text x="149" y="106" text-anchor="middle" fill="#94a3b8" font-size="8">submit_for_review</text>
      <line x1="264" y1="115" x2="354" y2="115" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowF2)"/>
      <text x="309" y="106" text-anchor="middle" fill="#94a3b8" font-size="8">approve</text>
      <line x1="424" y1="115" x2="478" y2="115" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowF2)"/>
      <text x="451" y="106" text-anchor="middle" fill="#94a3b8" font-size="8">mark_exported</text>
      <path d="M 264 140 Q 309 190 354 140" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrowR2)"/>
      <text x="309" y="200" text-anchor="middle" fill="#f87171" font-size="8">reject → REJECTED</text>
      <path d="M 194 140 Q 149 230 104 140" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrowR2)"/>
      <text x="149" y="238" text-anchor="middle" fill="#f87171" font-size="8">reopen → DRAFT</text>
      <text x="280" y="30" text-anchor="middle" fill="#64748b" font-size="9.5">প্রতিটি তীরের নিচে লেখা থাকে: কে চালাল, কখন, কেন (review_notes)</text>
      <text x="280" y="46" text-anchor="middle" fill="#64748b" font-size="9">দুইজন একসাথে টানলে — select_for_update লক; ভুল পথ ধরলে — InvalidTransition → 409</text>
    </svg>
    <div class="diag-cap">পাঁচটি ক্রিয়া, পাঁচটি পথ — পথের বাইরে এক পা নয়। প্রতিটি পদক্ষেপে স্বাক্ষর।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>অতীতের দগা:</strong> history.py-র CSV ডাউনলোড পথ একসময় নিজে থেকে APPROVED→EXPORTED করে ফেলত (can_transition_to বাইপাস, reviewed_by হারিয়ে)। FSM সার্ভিস বের করার কারণই এটা — এখন উভয় পথ এক দরজা দিয়ে।</div></div>
  <div class="secret-box">📜 অবস্থা নিজে বদলায় না — ক্রিয়া বদলায়, লকের নিচে, স্বাক্ষরসহ। / State never changes itself: action + lock + audit line, always through the one named seam.</div>`,
  senior: {
    title: "FSM Implementation Map",
    body: `<p>ছাঁচ: <code>apps/<domain>/services/fsm.py</code> (ক্যাননিক্যাল নমুনা invoices) — <code>ACTION_TO_STATUS</code> dict + <code>can_transition_to()</code> + <code>select_for_update()</code> + টাইপড এক্সসেপশন + audit লাইন। ৪ অনুরূপ FSM: invoices (ACTION→STATUS), billing cycle (open→ready→completed), clients status (current→old/inactive), timesheets। নতুন FSM-এ: অনুমোদিত-পথ টেবিল আগে, তারপর guard, তারপর লেখা; bulk-ট্রানজিশনে suppress_handoff, রিভার্সে দ্বিতীয়-ব্যাকআপ রেখো।</p>`
  }
});
