// doors-37.js — The Ledger Craftsman (appendix register)
var doors = globalThis.doors = globalThis.doors || [];
doors.push({
  num: 37,
  icon: "📋",
  color: "#f472b6",
  name: "পরিশিষ্ট: স্ক্রিন-নিবন্ধ",
  subtitle: "Appendix: The Screen Register — All 42 Views",
  tech: "Complete code-verified register: every nav-manifest view, one-line role, and which door tells its story",
  spirit: "ইহসাব — iḥsāb (the exact counting: nothing of the city left unlisted)",
  secret: "শহরের বাহাত্তরটি দরজার নাম এক খাতায় — কোন পর্দা কী করে, তার গল্প কোন দরজায়।",
  recall: {
    q: "নতুন কেউ জিজ্ঞেস করল: 'PaymentHistory পর্দার গল্প কোথায়?'",
    qen: "Where does PaymentHistory's story live?",
    a: "এই নিবন্ধে সারি খোঁজো: পর্দার নাম → এক-লাইন ভূমিকা → গল্পের দরজা-নম্বর। নিবন্ধই মানচিত্রের মানচিত্র।",
    aen: "This register: view → one-line role → door number. The map of the map."
  },
  story: `<p class="scene-setting">যাত্রা শেষে রহিমা খাতুন তোমাকে নিয়ে যান নগর-দপ্তরের শেষ কক্ষে — <strong>নিবন্ধ-খাতা</strong>। মুনশি
  <strong>করিমুদ্দিন</strong> সদ্য শেষ করেছেন মহাগণনা: শহরের প্রতিটি প্রকাশ্য দরজা (যেগুলো ন্যাভ-ম্যানিফেস্টে স্বীকৃত)
  তালিকাবদ্ধ — মোট <strong>বিয়াল্লিশটি</strong>। প্রতিটি সারিতে তিনটি লেখা: দরজার নাম, সে কী বিক্রি করে (এক লাইনে), আর
  <strong>তার পূর্ণ গল্প কোন দরজায়</strong>। করিমুদ্দিন বলেন — <strong>"মানচিত্র (দরজা ৩০) তোমাকে মহল্লা চেনায়; এই খাতা
  বাড়ির নম্বর দেয়। যে নির্মাতা নিবন্ধ না মেলায়, তার নতুন দোকান হয় অনাথ, নয় কপি।"</strong></p>
  <p class="scene-setting en">At journey's end Rahima leads you to the registry-office's last room — the
  <strong>register-book</strong>. Clerk <strong>Karimuddin</strong> has just finished the great census: every
  public door recognized by the nav-manifest — <strong>forty-two</strong> in all. Each row carries three
  entries: the door's name, what it sells (one line), and <strong>which door of this book tells its full
  story</strong>. Karimuddin says — <strong>"the map (door 30) teaches you the quarters; this book gives the
  house-numbers. A builder who doesn't reconcile the register builds either an orphan or a copy."</strong></p>
  <div class="code-block">স্ক্রিন-নিবন্ধ — ৪২ পর্দা (কোড-যাচাইকৃত: navigation manifest)

স্তম্ভ: পর্দা → ভূমিকা (এক লাইন) → গল্পের দরজা

── auth (২) ──────────────────────────────
LoginView            লগইন+dev quick-login      → দরজা ৪ (আমানত)
RegisterView         সেলফ-রেজিস্ট্রেশন (বন্ধ-                    ব্যবহারে) → দরজা ৪

── account (২) ───────────────────────────
ProfileView          নিজের প্রোফাইল             → দরজা ৩০
SettingsView         পাসওয়ার্ড/নোটিফিকেশন-পছন্দ  → দরজা ৩০
  (+ForcePasswordChange: প্রথম-লগইনে বাধ্য-বদল —
   MyAccess-পথের ভাই; অ্যাকাউন্ট-স্লাইসের অভ্যন্তরীণ)

── admin (২১) ────────────────────────────
AdminDashboard       সিস্টেম-সারসংক্ষেপ প্রথম প্রদর্শন → দরজা ৩০
UserManagementView   ইউজার-তালিকা/সক্রিয়তা      → দরজা ৩০+১৬
UserCreateView       নতুন ইউজার (রোল-নির্বাচন)   → দরজা ১৬
UserDetailView       এক ইউজারের পূর্ণ হিস্তি      → দরজা ১৬
AdminAccessView      Users+Access দুই-ট্যাব AccessConsole → দরজা ১৬ (ADR-0022)
UserPerUserAccessPanel  প্রতি-মানুষ feature-গ্রান্ট → দরজা ১৬
ClientDirectoryView  ৫৩১+ ক্লায়েন্টের সারণি        → দরজা ৫
ClientDetailView     এক ক্লায়েন্টের পূর্ণ ফাইল     → দরজা ৫
SupervisorsView      সুপারভাইজার-তালিকা/সম্পাদনা → দরজা ৫
SupervisorClientsView এক সুপারভাইজারের ক্লায়েন্ট  → দরজা ৫
BillingArchiveView   পুরনো-চক্রের আর্কাইভ        → দরজা ১৩+৩১
SystemStatusView     Xero-সংযোগ/Redis/DB স্বাস্থ্য  → দরজা ১২+২৮
AdminJobsView        Celery-টাস্ক/beat-পর্যবেক্ষণ → দরজা ২৭
AdminNachaConfigView NACHA-সেটিং (bank code)     → দরজা ১১
AdminOpsView         অপস-লগ/রক্ষণ-ক্রিয়া        → দরজা ২৩
AdminSettingsView    ফিচার-পতাকা/সিস্টেম-কনফিগ  → দরজা ১৬
NavMenusAdminView    মেনু-আইটেম ক্রম/দৃশ্যমানতা  → দরজা ২০
NotificationsSendView ম্যানুয়াল সম্প্রচার/রোল-হ্যান্ডঅফ → দরজা ১৭
AdminNotificationLogView পাঠানো-বার্তার ইতিহাস  → দরজা ১৭
ActionQueueView      অসাইনড/অ-সম্পন্ন কাজের কিউ → দরজা ৫+১৪
AnalyticsDashboardView পরিমাণ-গত প্রবণতা-নয়;
  ব্যবহার-স্বাস্থ্য সারসংক্ষেপ                → দরজা ৩০
XeroExplorerView     লাইভ Xero রিড-ওনলি ব্রাউজ  → দরজা ১২
ForceImportHubView   রিজেক্টেড-সারি ফেরানোর কেন্দ্র → দরজা ১৮
  (+ audit-history ও synthetic-placeholders সাব-
   পর্দা: হাবের ট্যাব; দরজা ১৮/২৩-এর গল্প)

── timesheets (৪) ────────────────────────
TimesheetUploadView  Peter-এর Excel-আপলোড       → দরজা ৬
TimesheetProcessorDashboard রিপোর্ট-তালিকা+অবস্থা → দরজা ৬
TimesheetReportDetailView এক রিপোর্ট: গণনা+রিজেক্ট → দরজা ৬
TimesheetEntryDetailView এক সারির পূর্ণ সত্য      → দরজা ৬

── data-processing (৬) ───────────────────
DataProcessorDashboard সাই-এর দৈনিক সারসংক্ষেপ   → দরজা ৩০
DataProcessorInvoiceGeneration রিপোর্ট→ব্যাচ তৈরি  → দরজা ৭
DataProcessorInvoiceHistory Saved+Xero ইতিহাস     → দরজা ১২
DataProcessorXeroUpload  push-মোডাল (চক-কালি)     → দরজা ১৪
DataProcessorInventoryManagement CSV-আয়না+রিজেক্ট → দরজা ৭
PaymentChecklistView  NACHA-পরে প্রয়োগ-তালিকা     → দরজা ১১
PaymentHistoryView    পেমেন্ট-ইতিহাস সারণি        → দরজা ১১

── invoices (৩) ──────────────────────────
InvoiceReviewerDashboard রিভিউ-কিউ (Vicki)        → দরজা ৮+৩০
InvoiceBatchDetailView এক ব্যাচ: লাইন+FSM-বাটন   → দরজা ৮
MinCheckCalcView      মেঝে-হিসাব ট্যাব           → দরজা ৯

── payment (১) ───────────────────────────
PaymentProcessorDashboard ওয়েনের NACHA+রিকনসাইল → দরজা ১১

── billing (১ nav) ───────────────────────
BillingExceptionsView এক্সেপশন-ইনবক্স (#726)     → দরজা ৯
  (+ReviewMeetingView — চক্র-বন্ধের একমাত্র বাটন
   → দরজা ১৩; ম্যানিফেস্টে ভিন্ন-পথে স্বীকৃত)

── credits (২) ───────────────────────────
CreditWorkflowView   রিকোয়েস্ট→approve→apply    → দরজা ১০
CreditLedgerView     ব্যালেন্স+অডিট-শৃঙ্খলা      → দরজা ১০

── messaging (১) ─────────────────────────
InboxView            ১:১ কথা+SSE-ব্যাজ (ADR-0026) → দরজা ৩০+২৮

নিবন্ধ-বিধি (করিমুদ্দিনের তিন নিয়ম):
  ১. নতুন পর্দা খুললে একই PR-এ ম্যানিফেস্ট-সারি +
     এই বইয়ের সারি — নিবন্ধ পিছিয়ে গেলে অনাথ-দোকান
  ২. কপি-দোকান খোলার আগে এই তালিকায় নাম মেলাও —
     বিদ্যমান পর্দার ট্যাব/মোডাল হলে নতুন নয়
  ৩. ম্যানিফেস্টে কিন্তু নিবন্ধে নয় = ডক-ঋণ;
     নিবন্ধে কিন্তু ম্যানিফেস্টে নয় = ভুত-দরজা —
     দুটোই reconcile-স্ক্রিপ্টে ধরা পড়ে (drift)</div>
  <div class="verse">ইহসাব — সুনির্দিষ্ট গণনা: "চাঁদ ও সূর্যের জন্য হিসাব" (৫৫:৫) — সৃষ্টিজগতেও নিবন্ধ চলে। করিমুদ্দিনের খাতা সেই ইহসাবের ছায়া: যা আছে সব লেখা, যা লেখা সব আছে। অগণিত দরজার শহরে নিবন্ধই বিশ্বাসের ভিত্তি — কারণ যে শহর নিজের দরজা গোনে না, সেখানে হারানো দরজার খবর কেউ দেবে না।</div>
  <div class="diagram">
    <div class="diag-title">The Register — 42 Doors by Quarter</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="12" width="530" height="278" rx="12" fill="rgba(244,114,182,0.04)" stroke="#f472b6" stroke-width="1.3"/>
      <text x="280" y="36" text-anchor="middle" fill="#f9a8d4" font-size="10" font-weight="700">📋 মহল্লা-ভিত্তিক নিবন্ধ — মোট ৪২ পর্দা</text>
      <rect x="35" y="52" width="150" height="56" rx="9" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1.3"/>
      <text x="110" y="72" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">admin — ২১</text>
      <text x="110" y="86" text-anchor="middle" fill="#94a3b8" font-size="7">সবচেয়ে বড় মহল্লা</text>
      <text x="110" y="99" text-anchor="middle" fill="#64748b" font-size="6.5">users·clients·jobs·nav·ops</text>
      <rect x="200" y="52" width="150" height="56" rx="9" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.3"/>
      <text x="275" y="72" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">data-processing — ৬</text>
      <text x="275" y="86" text-anchor="middle" fill="#94a3b8" font-size="7">সাই-এর কর্মক্ষেত্র</text>
      <text x="275" y="99" text-anchor="middle" fill="#64748b" font-size="6.5">ড্যাশবোর্ড·জেন·ইতিহাস·ইনভেন্ট</text>
      <rect x="365" y="52" width="150" height="56" rx="9" fill="rgba(52,211,153,0.08)" stroke="#34d399" stroke-width="1.3"/>
      <text x="440" y="72" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">timesheets — ৪</text>
      <text x="440" y="86" text-anchor="middle" fill="#94a3b8" font-size="7">পিটারের পাইপলাইন-মুখ</text>
      <text x="440" y="99" text-anchor="middle" fill="#64748b" font-size="6.5">আপলোড→ড্যাশ→রিপোর্ট→সারি</text>
      <rect x="35" y="122" width="150" height="56" rx="9" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.3"/>
      <text x="110" y="142" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">invoices — ৩</text>
      <text x="110" y="156" text-anchor="middle" fill="#94a3b8" font-size="7">রিভিউ+ব্যাচ+মিন-চেক</text>
      <text x="110" y="169" text-anchor="middle" fill="#64748b" font-size="6.5">ভিকির কর্মক্ষেত্র</text>
      <rect x="200" y="122" width="150" height="56" rx="9" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.3"/>
      <text x="275" y="142" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="700">auth+account — ৪</text>
      <text x="275" y="156" text-anchor="middle" fill="#94a3b8" font-size="7">পরিচয়ের মহল্লা</text>
      <text x="275" y="169" text-anchor="middle" fill="#64748b" font-size="6.5">লগইন·রেজি·প্রোফাইল·সেটিংস</text>
      <rect x="365" y="122" width="150" height="56" rx="9" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="440" y="142" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="700">বাকি — ৪</text>
      <text x="440" y="156" text-anchor="middle" fill="#94a3b8" font-size="7">payment·billing·credits·messaging</text>
      <text x="440" y="169" text-anchor="middle" fill="#64748b" font-size="6.5">প্রতি মহল্লায় ১-২টি করে</text>
      <rect x="35" y="196" width="480" height="76" rx="10" fill="rgba(244,114,182,0.05)" stroke="#f472b6" stroke-width="1.2"/>
      <text x="275" y="217" text-anchor="middle" fill="#f9a8d4" font-size="8.5" font-weight="700">🔍 reconcile-বিধান</text>
      <text x="275" y="234" text-anchor="middle" fill="#94a3b8" font-size="7.5">ম্যানিফেস্টে আছে + নিবন্ধে নেই = ডক-ঋণ · নিবন্ধে আছে + ম্যানিফেস্টে নেই = ভুত-দরজা</text>
      <text x="275" y="250" text-anchor="middle" fill="#94a3b8" font-size="7.5">নতুন পর্দার একই PR-এ: ম্যানিফেস্ট-সারি + নিবন্ধ-সারি + রেজিস্ট্রি-key (দরজা ২০)</text>
      <text x="275" y="266" text-anchor="middle" fill="#64748b" font-size="7">কপি-দোকান নয়: আগে এই তালিকায় বিদ্যমান-পর্দার ট্যাব/মোডাল মেলাও</text>
      <text x="280" y="283" text-anchor="middle" fill="#64748b" font-size="8">৪২ দরজার নাম, ৪২টি গল্পের ঠিকানা — নিবন্ধই বইয়ের সূচি-পত্র</text>
    </svg>
    <div class="diag-cap">এগারো মহল্লায় বিয়াল্লিশ প্রকাশ্য দরজা — প্রতিটির নাম, কাজ, আর গল্পের দরজা-নম্বর এক খাতায়।</div>
  </div>
  <div class="callout tip"><span class="co-icon">🔌</span><div><strong>নিবন্ধ যাচাই-রেসিপি:</strong> <code>grep -r "component_key" apps/navigation/services/ | wc -l</code> দিয়ে ম্যানিফেস্ট-গণনা, তারপর এই তালিকার সাথি মেলাও — সংখ্যা না মিললে বই বা কোড, কেউ একজন পিছিয়ে। নতুন ভিউ যোগ হলে <code>scripts/nav_baseline</code> + কভারেজ-টেস্ট নিজেই রেজিস্ট্রি-key মেলাবে (দরজা ২০-এর গল্প)।</div></div>
  <div class="secret-box">📋 মানচিত্র মহল্লা চেনায়, নিবন্ধ বাড়ি চেনায় — ৪২ দরজার নাম-ঠিকানা এক খাতায়; নিবন্ধবিহীন দোকান অনাথ, অনিবন্ধিত নাম ভুত। / The map teaches quarters, the register teaches house-numbers; unlisted shops are orphans, unregistered names are ghosts.</div>`,
  senior: {
    title: "Screen Register (42)",
    body: `<p><strong>auth</strong>(২): Login/Register → দরজা ৪। <strong>account</strong>(২): Profile/Settings → ৩০ (+ForcePasswordChange অভ্যন্তরীণ)। <strong>admin</strong>(২১): Dashboard/UserMgmt/UserCreate/UserDetail → ৩০+১৬ · AccessView+PerUserPanel → ১৬ · ClientDirectory/Detail/Supervisors×2 → ৫ · BillingArchive → ১৩+৩১ · SystemStatus → ১২+২৮ · Jobs → ২৭ · NachaConfig → ১১ · Ops/Settings → ২৩/১৬ · NavMenusAdmin → ২০ · NotificationSend/Log → ১৭ · ActionQueue → ৫+১৪ · Analytics → ৩০ · XeroExplorer → ১২ · ForceImportHub(+audit/synthetic ট্যাব) → ১৮/২৩। <strong>timesheets</strong>(৪) → ৬। <strong>data-processing</strong>(৬): ড্যাশবোর্ড→৩০, জেনারেশন→৭, ইতিহাস→১২, XeroUpload→১৪, ইনভেন্টরি→৭, Checklist/History→১১। <strong>invoices</strong>(৩) → ৮/৯। <strong>payment</strong>(১) → ১১। <strong>billing</strong>: Exceptions→৯, ReviewMeeting→১৩। <strong>credits</strong>(২) → ১০। <strong>messaging</strong>(১) → ৩০+২৮। reconcile-বিধান: manifest↔নিবন্ধ↔registry তিনমুখী; নতুন পর্দায় একই PR-এ তিন সারি।</p>`
  }
});
