// doors-17-18.js — The Ledger Craftsman (LedgerPilot deep-dive)

doors.push({
  num: 17,
  icon: "📯",
  color: "#5eead4",
  name: "রাতের কুরিয়ার",
  subtitle: "The Night Courier — emit + Handoff Events",
  tech: "ADR-0020: HandoffEvent owns role/copy/target_url; emit() is best-effort, never rolls back",
  spirit: "তাবলিগ — tablīgh (delivering the message, faithfully)",
  secret: "সংবাদ পৌঁছাতে ব্যর্থ হলে রাত থেমে যায় না — বার্তা সর্বোচ্চ চেষ্টায়, কাজ অটুট।",
  recall: {
    q: "ব্যাচ approve হলো কিন্তু নোটিফিকেশন ব্যর্থ হলে transition ফিরে যায়?",
    qen: "Batch approved but the notification failed — does the transition roll back?",
    a: "না — emit() সম্পূর্ণ best-effort (ADR-003 rule 6); ব্যর্থতা লগ হয়, রাত থাকে না।",
    aen: "No — emit() is best-effort end-to-end; failure is logged, the transition stays."
  },
  story: `<p class="scene-setting">মরুপথের রাতে উটের কাফেলা। কুরিয়ার <strong>সালিম রাক়ব</strong> — কাঁধে ঝোলানো চামড়ার
  ব্যাগে পাল্লা-পাল্লি সিলমোহর-দেওয়া চিঠি, গলায় একটা ছোট বাঁশি। শহর থেকে শহরে সে যায় — কিন্তু খেয়াল করো:
  তার ব্যাগে যে চিঠিগুলো, সেগুলোর ঠিকানা-কথা-পাতা লেখা আছে <em>চিঠির নিজের গায়ে</em> — সালিম শুধু বহন করে।
  আর সবচেয়ে বড় কথা: ঝড়ে একটা চিঠি হারিয়ে গেলে সালিম <strong>কাফেলাকে ফেরত নেয় না</strong>। কাফেলা চলতে থাকে;
  সালিম হারানো চিঠির খবর পরের কুরিয়ারের খাতায় টুকে রাখে।</p>
  <p class="scene-setting en">A camel caravan by night. Courier <strong>Salim Rakb</strong> — a leather bag of
  sealed letters, a small reed flute at his neck. City to city he goes — but note: each letter's address, message,
  and page are written <em>on the letter itself</em>; Salim only carries. And most important: if a letter is lost
  in a storm, Salim <strong>does not turn the caravan back</strong>. The caravan continues; the loss is recorded
  in the next courier's book.</p>
  <div class="dialogue">কাফেলার সর্দার জিজ্ঞেস করেন — "সালিম, ভিকির চিঠি পৌঁছাল না — ব্যাচ কি ফিরিয়ে আনব?"
  <br>সালিম — "আমি বাণিজ্য নই, আমি সংবাদ। বাণিজ্য থামলে লোকসান; সংবাদ থামলে শুধু দেরি।
  <strong>চিঠি হারালে ব্যাগ ভরে আবার পাঠানো যায় — কাফেলা ঘুরিয়ে আনা যায় না।</strong>"</div>
  <div class="code-block">apps/notifications/ — কুরিয়ার-ব্যবস্থা (ADR-0020)

পাইপলাইন (emit-এর ভেতরে, সবটাই best-effort):
  emit(event, actor)
    ├─ ① event.already_emitted()   → True হলে return 0 (dedup সস্তা, আগে)
    ├─ ② resolve(event.recipients(actor))  → [user_ids]
    ├─ ③ InAppChannel.deliver(...)  → ts_notifications সারি (in-app ঘণ্টা)
    └─ ④ count হলে event.mark_emitted()   # শূন্য-প্রাপকে স্ট্যাম্প নয়
  ⚠️ পুরো দেহ try/except-এ — ব্যর্থতা লগ হয়, return 0; কখনো raise নয়

চিঠির গায়ে চিঠির কথা (HandoffEvent — ডোমেইনের পাশে থাকে):
  apps/invoices/handoffs.py:
    class BatchSubmittedForReview(HandoffEvent):
      source = 'workflow'; dedup_key = None     # প্রতিবার যায়
      recipients → [Role('invoice_reviewer')]   # ভিকি
      target_url → '/invoices/batch/{id}'        # গভীর-লিংক = চুক্তি
    class BatchApproved → খোলা-ক্রেডিট শাখা: credit ledger বা batch-এ পাঠায় সাইকে

নিয়ম: notifications কোনো ডোমেইন-অ্যাপ ইমপোর্ট করে না।
  নির্ভরতা একমুখী — domain → core (বিজ্ঞপ্তি ঘর থেকে বিপরীতে যাওয়া নিষেধ)

হ্যান্ডঅফ বনাম ফ্রি-পিং:
  হ্যান্ডঅফ = কপি/রোল/লিংক ইভেন্টের গায়ে লেখা (ক্যানড বাটনসহ)
  ফ্রি-পিং = মানুষের হাতের লেখা (source=NULL, ঘণ্টায় আলাদা চিহ্ন)

গভীর-লিংকের দগা: BE পথ বানায়, FE রুট চালায় — FE রুট সরালে লিংক নীরবে মরে।</div>
  <div class="verse">তাবলিগ — "হে রাসূল, যা তোমার রবের পক্ষ থেকে এসেছে তা পৌঁছে দাও" (কুরআন ৫:৬৭)। পৌঁছে দেওয়া আমানত, কিন্তু পৌঁছানোর ফল প্রেরকের হাতে নয়। সালিম তাই দুটো জিনিস আলাদা রাখে: বার্তার সত্যতা (সিলমোহর — ইভেন্টের গায়ে) আর বহনের ভাগ্য (ঝড় — best-effort)। বার্তা বদলায় না বহনকারী ব্যর্থ হলেও।</div>
  <div class="diagram">
    <div class="diag-title">The Courier Pipeline — emit(event, actor)</div>
    <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowC6" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="60" width="120" height="70" rx="10" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="75" y="85" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="700">HandoffEvent</text>
      <text x="75" y="99" text-anchor="middle" fill="#94a3b8" font-size="8">চিঠির গায়ে চিঠির কথা:</text>
      <text x="75" y="111" text-anchor="middle" fill="#94a3b8" font-size="8">role · copy · target_url</text>
      <text x="75" y="123" text-anchor="middle" fill="#94a3b8" font-size="8">dedup_key · source</text>
      <rect x="175" y="60" width="110" height="70" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="230" y="85" text-anchor="middle" fill="#5eead4" font-size="10" font-weight="700">emit()</text>
      <text x="230" y="99" text-anchor="middle" fill="#94a3b8" font-size="8">কুরিয়ারের ব্যাগ</text>
      <text x="230" y="111" text-anchor="middle" fill="#94a3b8" font-size="8">dedup → resolve</text>
      <text x="230" y="123" text-anchor="middle" fill="#94a3b8" font-size="8">→ deliver → stamp</text>
      <rect x="325" y="60" width="100" height="70" rx="10" fill="rgba(100,116,139,0.12)" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="375" y="85" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="600">InAppChannel</text>
      <text x="375" y="99" text-anchor="middle" fill="#94a3b8" font-size="8">ts_notifications</text>
      <text x="375" y="111" text-anchor="middle" fill="#94a3b8" font-size="8">সারি লেখা</text>
      <text x="375" y="123" text-anchor="middle" fill="#94a3b8" font-size="8">(in-app ঘণ্টা)</text>
      <rect x="465" y="60" width="80" height="70" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="505" y="85" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">🔔 ঘণ্টা</text>
      <text x="505" y="99" text-anchor="middle" fill="#94a3b8" font-size="8">অপারেটরের</text>
      <text x="505" y="111" text-anchor="middle" fill="#94a3b8" font-size="8">bell প্যানেল</text>
      <line x1="135" y1="95" x2="173" y2="95" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowC6)"/>
      <line x1="285" y1="95" x2="323" y2="95" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowC6)"/>
      <line x1="425" y1="95" x2="463" y2="95" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowC6)"/>
      <rect x="175" y="160" width="370" height="60" rx="10" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.2" stroke-dasharray="5 3"/>
      <text x="360" y="182" text-anchor="middle" fill="#f87171" font-size="9.5" font-weight="600">ঝড় (যেকোনো ধাপ ব্যর্থ)</text>
      <text x="360" y="198" text-anchor="middle" fill="#94a3b8" font-size="8.5">logger.exception → return 0 — কাফেলা (transition) কখনো ফেরে না</text>
      <line x1="230" y1="130" x2="290" y2="165" stroke="#f87171" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowC6)"/>
      <text x="280" y="228" text-anchor="middle" fill="#64748b" font-size="9">নির্ভরতা একমুখী: apps/invoices → apps/notifications; কখনো উল্টো নয়</text>
    </svg>
    <div class="diag-cap">চিঠি (ইভেন্ট) নিজের ঠিকানা বহন করে; কুরিয়ার (emit) বহন করে; ঝড় এলে খবর থাকে, কাফেলা থাকে না থেমে।</div>
  </div>
  <div class="callout tip"><span class="co-icon">🔌</span><div><strong>নতুন ইভেন্ট যোগ করছ?</strong> নিজ অ্যাপে <code>handoffs.py</code> বানাও, <code>HandoffEvent</code> সাবক্লাস লেখো (role/copy/target_url কনস্ট্রাক্টরে), সার্ভিস থেকে <code>emit(BatchX(...), actor)</code> ডাকো। কেন্দ্রীয় ক্যাটালগ ফাইল বানিয়ো না — সেটা circular-import ফাঁদ।</div></div>
  <div class="secret-box">📯 বার্তার কথা বার্তার গায়ে; বহন best-effort; ব্যর্থ বার্তা কাজ ফেরায় না। / The event owns its copy and recipients; emit is best-effort; a lost letter never turns the caravan.</div>`,
  senior: {
    title: "emit / Handoff Map",
    body: `<p><code>emit(event, actor)</code>: dedup-check → resolve recipients → InAppChannel.deliver → mark_emitted (শুধু count&gt;0 হলে)। পুরোটা try/except, ব্যর্থতা → লগ + return 0 (ADR-003 rule 6)। ইভেন্ট: নিজ অ্যাপের <code>handoffs.py</code>-এ <code>HandoffEvent</code> সাবক্লাস — <code>source</code>, <code>dedup_key</code>, <code>recipients()</code>, <code>message</code>, <code>target_url</code>। উদাহরণ: <code>BatchSubmittedForReview</code> (ভিকি), <code>BatchApproved</code> (সাই, ক্রেডিট-শাখা), <code>BulkBatchesTransitioned</code> (একত্র)। নির্ভরতা: domain → notifications একমুখী। deep-link (<code>target_url</code>) = cross-stack চুক্তি; FE রুট সরালে পচে মরে।</p>`
  }
});

doors.push({
  num: 18,
  icon: "⚖️",
  color: "#5eead4",
  name: "পুনর্বিবেচনার স্ক্রল",
  subtitle: "The Scroll of Second Chance — Force-Import CM",
  tech: "ForceImportOperation context manager: audit-before-mutation, lock, dry-run, 404 vs 409",
  spirit: "শুয়াহাদাত — shahādah (testimony recorded before judgment)",
  secret: "উল্টো রায়ের আগে প্রথম সাক্ষ্যলিপি — মিউটেশনের আগেই অডিট, রোলব্যাক থেকেও বাঁচিয়ে।",
  recall: {
    q: "select_for_update(skip_locked=True) থেকে None পেলে — সারিটা লকড নাকি নেই?",
    qen: "skip_locked returns None — is the row locked or absent?",
    a: "দুই-ই হতে পারে! CM আবার .exists() চালায়: আছে → 409 (লকড), নেই → 404 (ValueError)।",
    aen: "Either! The CM re-checks .exists(): present → 409 (locked), absent → 404 (ValueError)."
  },
  story: `<p class="scene-setting">কাজির আদালতে ফেরত-আসা খারিজ-দলিলের ঝুড়ি। কেরানি <strong>মুনশি আতিক</strong> — তাঁর টেবিলের
  উপরে একটা লাল মোমবাতি, নিচে বাঁধানো সাক্ষ্য-বাহি। কেউ খারিজ দলিল ফিরিয়ে আনতে চাইলে (রায় উল্টাতে চাইলে)
  আতিক <strong>আগে</strong> সাক্ষ্য-বাহিতে লেখেন: কে আনল, কোন দলিল, কতগুলো, কেন। তারপর দলিলের উপর হাত রাখেন —
  এমনভাবে যে দ্বিতীয় কেরানি একই মুহূর্তে সেটা ধরতে পারে না। ভুল হলে? লাল মোমবাতি জ্বালিয়ে বাহির পাতায়
  লেখেন "ব্যর্থ, কারণ…" — কাগজ ছেঁড়া হয় না, বাহি বাঁচিয়ে থাকে।</p>
  <p class="scene-setting en">The qazi's court, basket of rejected documents. Clerk <strong>Munshi Atiq</strong> —
  a red candle above, a bound testimony-book below. When someone brings a rejected document back (wanting the
  verdict overturned), Atiq writes in the book FIRST: who brought it, which document, how many, why. THEN he
  places his hand on the document so no second clerk can grab it simultaneously. Error? He lights the red
  candle and writes "failed, because…" on the book's outer page — the page survives even when the ruling tears.</p>
  <div class="dialogue">কাজি জিজ্ঞেস করেন — "আতিক, রায় তো পরে লিখবে, সাক্ষ্য আগে কেন?"
  <br>আতিক — "হুজুর, রায় ভুল হলে ফিরিয়ে আনা যায় — সাক্ষ্য হারালে ফেরানো যায় না। <strong>যে খাতা রোলব্যাকে
  মুছে যায়, সে খাতা সাক্ষ্য নয়।</strong> তাই আমার বাহি atomic-এর বাইরে থাকে।"</div>
  <div class="code-block">apps/core/services/force_import.py — আতিকের বাঁধন-কাঠামো

with ForceImportOperation(
  actor_user_id=request.user.id,
  audit_model=TimesheetForceImportAudit,
  parent_model=TimesheetReport,
  parent_id=report_id, target_count=len(targets),
  dry_run=dry_run,
) as op:
  if op.dry_run:  return প্রিভিউ        # চক: লক+atomic স্কিপ, অডিট তবুও হয়
  ...ডোমেইন-মিউটেশন...                   # op.locked_parent = চেপে-ধরা দলিল
  op.audit_extras['synthetic_codes_minted'] = n
# পরিষ্কার বেরোলে: success=True + extras মার্জ
# ব্যতিক্রম হলে: error_message filter().update() দিয়ে — atomic রোলব্যাক সত্ত্বেও বাঁচে!

৫-ধাপ নিরাপত্তা-চুক্তি:
  ① অডিট-সারি মিউটেশনের আগে, atomic-এর বাইরে  # লাল মোমবাতির বাহি
  ② transaction.atomic() + select_for_update(skip_locked=True)  # দলিলে হাত
  ③ ?dry_run=1 — লক নেই, atomic নেই, অডিট আছে
  ④ ব্যর্থতা → error_message বাইরের update() দিয়ে
  ⑤ সাফল্য → success=True + audit_extras

অনুপস্থিত বনাম লকড (সূক্ষ্মতম দগা):
  skip_locked → None দুই কারণেই হয়
    ├─ সারি আছে কিন্তু অন্য কেউ ধরে আছে → .exists() পাস → ForceImportInProgressError → 409
    └─ সারিই নেই (মুছে গেছে/ভুল id)  → .exists() ফেল → ValueError → 404
  # 404-কে ভুল "already running" 409 বানানো = বিভ্রান্তিকর মিথ্যা

দুই দরজায় এক কাঠামো:
  apps/timesheets/services/force_import.py   (Peter + Admin)
  apps/xero/services/importer.py             (Sai + Admin — রোল-ডোমেইন স্কোপড)
অপারেটর-ডোমেইন নিয়ম: সাই টাইমশিট-রিজেক্ট ঠিক করতে পারে না, পিটার Xero-রিজেক্ট নয় — কেবল অ্যাডমিন উভয়ে।

⚠️ পার্শ্ব-প্রভাব: ফোর্স-ইমপোর্ট @placeholder/FORCED-* সিনথেটিক বানায় —
   পরিষ্কারের ঠিকানা নেই ক্লিনআপ-ছাড়া; undo শুধু synthetic-payload-এ (PR #549)।</div>
  <div class="verse">শুয়াহাদাত — "হে মুমিনগণ, আল্লাহর উদ্দেশ্যে ন্যায়ের উপর অটল সাক্ষী হও" (কুরআন ৪:১৩৫)। সাক্ষ্যের গুণ তিনটি: ঘটনার সাথে সাথে লেখা, দৃঢ়ভাবে সংরক্ষণ, রায় বদলেও না বদলানো। আতিকের বাহি তিনটিই মানে — তাই সে atomic-এর বাইরে: রোলব্যাক একটি রায় বাতিল করতে পারে, সাক্ষ্য নয়।</div>
  <div class="diagram">
    <div class="diag-title">Atiq's Binding Ritual — ForceImportOperation Lifecycle</div>
    <svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowA7" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker>
      <marker id="arrowX7" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f87171"/></marker></defs>
      <rect x="15" y="20" width="130" height="54" rx="9" fill="rgba(248,113,113,0.10)" stroke="#f87171" stroke-width="1.5"/>
      <text x="80" y="42" text-anchor="middle" fill="#f87171" font-size="9.5" font-weight="700">① অডিট আগে</text>
      <text x="80" y="56" text-anchor="middle" fill="#94a3b8" font-size="8">সাক্ষ্য-সারি লেখো</text>
      <text x="80" y="67" text-anchor="middle" fill="#94a3b8" font-size="8">atomic-এর বাইরে</text>
      <rect x="175" y="20" width="130" height="54" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="240" y="42" text-anchor="middle" fill="#5eead4" font-size="9.5" font-weight="700">② atomic + লক</text>
      <text x="240" y="56" text-anchor="middle" fill="#94a3b8" font-size="8">skip_locked দিয়ে পিতা-সারি</text>
      <text x="240" y="67" text-anchor="middle" fill="#94a3b8" font-size="8">দলিলে হাত</text>
      <rect x="335" y="20" width="100" height="54" rx="9" fill="rgba(100,116,139,0.12)" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="385" y="42" text-anchor="middle" fill="#cbd5e1" font-size="9.5" font-weight="600">③ মিউটেশন</text>
      <text x="385" y="56" text-anchor="middle" fill="#94a3b8" font-size="8">ডোমেইন-বডি</text>
      <text x="385" y="67" text-anchor="middle" fill="#94a3b8" font-size="8">(dry_run হলে স্কিপ)</text>
      <rect x="465" y="20" width="85" height="54" rx="9" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="1.5"/>
      <text x="507" y="42" text-anchor="middle" fill="#6ee7b7" font-size="9.5" font-weight="700">✓ সাফল্য</text>
      <text x="507" y="56" text-anchor="middle" fill="#94a3b8" font-size="8">success=True</text>
      <text x="507" y="67" text-anchor="middle" fill="#94a3b8" font-size="8">+ extras</text>
      <line x1="145" y1="47" x2="173" y2="47" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowA7)"/>
      <line x1="305" y1="47" x2="333" y2="47" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowA7)"/>
      <line x1="435" y1="47" x2="463" y2="47" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowA7)"/>
      <rect x="175" y="130" width="180" height="52" rx="9" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="265" y="152" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">None পেলাম — এখন?</text>
      <text x="265" y="166" text-anchor="middle" fill="#94a3b8" font-size="8">.exists() দিয়ে বিচ্ছেদ</text>
      <line x1="240" y1="74" x2="255" y2="128" stroke="#fbbf24" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrowA7)"/>
      <rect x="15" y="215" width="200" height="44" rx="9" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.3"/>
      <text x="115" y="233" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="600">সারি আছে → লকড → 409</text>
      <text x="115" y="247" text-anchor="middle" fill="#94a3b8" font-size="8">ForceImportInProgressError</text>
      <rect x="345" y="215" width="200" height="44" rx="9" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="445" y="233" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="600">সারি নেই → অনুপস্থিত → 404</text>
      <text x="445" y="247" text-anchor="middle" fill="#94a3b8" font-size="8">ValueError — "not found"</text>
      <line x1="220" y1="180" x2="150" y2="213" stroke="#f87171" stroke-width="1.4" marker-end="url(#arrowX7)"/>
      <line x1="310" y1="180" x2="380" y2="213" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#arrowA7)"/>
      <text x="280" y="205" text-anchor="middle" fill="#64748b" font-size="8.5">একই None — দুই রোগ, দুই ওষুধ</text>
    </svg>
    <div class="diag-cap">সাক্ষ্য আগে, হাত তারপর, কাজ শেষে; None পেলে exists() ডাকো — 409 আর 404 কখনো গুলিয়ো না।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>কেন এই CM জন্মাল:</strong> আগে দুই সার্ভিসে ~২০০ লাইন জীবনচক্র হাতে-হাতে কপি হতো (PRD #522)। এক জায়গায় বাঁধা গেলে প্রতিটি নতুন রিজেক্ট-পথ পায় লক+অডিট+ড্রাই-রান বিনামূল্যে — ডোমেইন-বডি ছাড়া আর কিছু লিখতে হয় না।</div></div>
  <div class="secret-box">⚖️ রায়ের আগে সাক্ষ্যলিপি — অডিট atomic-এর বাইরে; None মানে খোঁজো, তারপর রায়। / Write the testimony before the mutation; disambiguate None before you judge.</div>`,
  senior: {
    title: "Force-Import CM Map",
    body: `<p><code>ForceImportOperation</code> (apps/core) — context manager: <code>__enter__</code>-এ অডিট-সারি (atomic-এর বাইরে, ব্যর্থ হলে লগ+unaudited) → atomic + <code>select_for_update(skip_locked=True)</code> → None হলে <code>.exists()</code> বিচ্ছেদ (locked→409, absent→404)। <code>__exit__</code>: stack বন্ধ (কমিট/রোলব্যাক) → ব্যতিক্রমে <code>filter().update(error_message=)</code> (রোলব্যাক-নিরপেক্ষ), সাফল্যে <code>success=True + audit_extras</code>। dry_run: লক+atomic স্কিপ, অডিট হয়। ব্যবহারকারী: timesheets (Peter+Admin), xero importer (Sai+Admin)। undo: শুধু <code>forced_synthetic_payload</code> সহ (PR #549)।</p>`
  }
});
