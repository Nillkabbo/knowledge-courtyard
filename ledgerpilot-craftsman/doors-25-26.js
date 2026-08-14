// doors-25-26.js — The Ledger Craftsman (LedgerPilot deep-dive)

doors.push({
  num: 25,
  icon: "🚪",
  color: "#f472b6",
  name: "দরবেশের দরজা-ঘর",
  subtitle: "The Darvish's Door-Room — DRF Deep-Dive",
  tech: "Serializer layers, APIView lifecycle, throttling, pagination, parsing/rendering, exceptions handler, spectacular",
  spirit: "দরওয়াজা-ই-রহমত — the door of mercy: open to the worthy, closed to none by malice",
  secret: "Serializer চুক্তির দোভাষী, APIView দরজার দরবেশ — অনুরোধ পাঁচ প্রহরী পেরিয়ে উত্তরে পৌঁছায়।",
  recall: {
    q: "APIException কেন নিষেধ, সাধারণ Exception কেন?",
    qen: "Why plain Exception subclasses, never APIException?",
    a: "APIException DRF-র নিজের মতে ধরে Response বানিয়ে ফেলে — খামের আকৃতি ভাঙে; সাধারণ Exception view-এ ওঠে, সেখানে আমাদের খাম-বিধানে ম্যাপ হয়।",
    aen: "APIException short-circuits into DRF's own envelope; plain exceptions rise to the view where OUR envelope mapping lives."
  },
  story: `<p class="scene-setting">শহরের প্রাচীরে এক দরবেশের দরজা-ঘর — <strong>বাবা রুকন</strong> সেখানে বসেন, পাঁচজন প্রহরী তাঁর হাতে। বাইরের প্রতিটি
  আগন্তুক (HTTP অনুরোধ) তাঁর ঘরের সামনে দাঁড়ায়, আর ভেতরে ঢুকতে পাঁচ প্রহরী পেরোতে হয়। <strong>প্রহরী এক — চেনা</strong>
  (authentication): কে তুমি? সেশন-কুকি দেখাও, নইলে ফেরত। <strong>প্রহরী দুই — পরিচয়পত্র</strong> (permission):
  নাম জানা হলেই ঢোকা নয় — এই দরজায় কোন পেশার লোক ঢোকে? <strong>প্রহরী তিন — ছলনা-পাত্র</strong> (throttle): একই
  আগন্তুক ঘণ্টায় কতবার? দরজা ক্লান্ত হয়ে গেছে, এখন বিশ্রাম। <strong>প্রহরী চার — দোভাষী</strong> (serializer): আগন্তুকের
  ভাষা শহরের ভাষায়, শহরের উত্তর আগন্তুকের ভাষায়। <strong>প্রহরী পাঁচ — বিভাজক</strong> (pagination): পুরো বাজার এক
  ঝাঁকিতে নয়, পঞ্চাশ প্রতি পাতে। এক ব্যবসায়ী রেগে বলেন — "এত প্রহরী!" রুকন হাসেন — <strong>"প্রহরী আগন্তুকের জন্য নয়,
  শহরের জন্য। দরজা উন্মুক্ত শহর একদিনে লুট হয়।"</strong></p>
  <p class="scene-setting en">On the city wall sits a darvish's door-room — <strong>Baba Rukun</strong>, with
  five guards at his command. Every outsider (HTTP request) faces five gates. <strong>Guard one —
  recognition</strong> (authentication): who are you? Show your session-cookie. <strong>Guard two —
  papers</strong> (permission): knowing your name isn't entry — which trade enters THIS door?
  <strong>Guard three — the patience-vessel</strong> (throttle): how many visits per hour? The door tires;
  now it rests. <strong>Guard four — the interpreter</strong> (serializer): the visitor's tongue into the
  city's, the city's answer into the visitor's. <strong>Guard five — the divider</strong> (pagination):
  not the whole market in one sack; fifty per page. A merchant fumes — "so many guards!" Rukun smiles —
  <strong>"the guards are for the city, not against the visitor. An unguarded door is sacked within a
  day."</strong></p>
  <div class="code-block">rest_framework — প্রকল্প-রীতিতে (সব নমুনা জীবন্ত কোড থেকে)

অনুরোধের পাঁচ-প্রহরী যাত্রা (APIView.dispatch):
  WSGI → মাঝামাঝি-স্তর (CORS/অডিট) → authentication
  → permission → throttle → serializer(যাচাই)
  → handler পদ্ধতি (get/post/…) → খাম

প্রহরী ১ — authentication (settings-এ):
  DEFAULT_AUTHENTICATION_CLASSES = [
    SessionAuthentication]   # কুকি+CSRF; JWT নেই
  · .user ভরসাযোগ্য কেবল প্রহরী-পরে

প্রহরী ২ — permission (আমাদের দুই-অক্ষ, দরজা ১৬):
  permission_classes = [IsInvoiceReviewerOrDataProcessor]
  · IsAuthenticated ভিত্তি; রোল-মিশ্রণ ক্লাসে
  · পাতা-গেট: user_has_feature(...) সেবা-স্তরে

প্রহরী ৩ — throttle (settings-থেকে হার):
  throttle_scope = 'sustained'    # view-এ শুধু নাম
  DEFAULT_THROTTLE_RATES = {'sustained':'30/min'}
  · হার্ডকোড-সংখ্যা view-এ নিষেধ

প্রহরী ৪ — serializer (চুক্তির দোভাষী, দরজা ১৯):
  পড়া:  ClientListSerializer(instance, many=True)
  লেখা: s = InputSerializer(data=req.data); s.is_valid(raise_exception=True)
       → সেবায় s.validated_data (view-এ raw req.data নয়)
  · Meta.fields স্পষ্ট · read_only: id/created_by/created_at
  · source='company.name' (denorm) · validate_<field> খাঁচা
  · SerializerMethodField কেবল সত্যিই গণনায়

প্রহরী ৫ — pagination (৫০):
  invoices/clients: {rows,total,page,page_size,total_pages}
  · DRF PageNumberPagination + কাস্টম খাম-ক্লাস

খাম-বিধান (ব্যতিক্রম-ম্যাপিং):
  সেবা ছুড়ে: TransitionNotAllowed(Exception)
  view ধরে: except → Response({'error': msg}, 4xx/409)
  · APIException নিষেধ — DRF নিজের খাম চাপায়
  · raise_exception=True যাচাই-ত্রুটিকে 400-এ
    {field:[msg]} রূপ দেয়

পার্সার/রেন্ডারার: JSON-একক (form-নয়);
  ফাইল-আপলোড ভিউতে MultiPartParser স্পষ্ট ঘোষণা

স্বয়ংক্রিয় দলিল (drf-spectacular):
  @extend_schema(tags=['invoices'], responses=OutSerializer)
  → /api/schema (OpenAPI) → /api/docs (Swagger)
  → openapi-typescript → api.generated.ts
  · responses লিখলেই wire-pin টেস্ট বাধ্যতামূলক

টেস্ট-নমুনা (প্রহরী-যাচাই):
  def test_peter_cannot_approve(auth_client_as):
      c = auth_client_as('timesheet_processor')
      r = c.post(url, {'action':'approve'})
      assert r.status_code == 403</div>
  <div class="verse">দরওয়াজা-ই-রহমত — রহমতের দরজা সবার জন্য, কিন্তু শৃঙ্খলাহীন নয়: "মানুষ যখন প্রবেশ করবে জান্নাতে দলে দলে" (৭০:২২-এর ভাব) — প্রবেশও নিয়মে। রুকনের পাঁচ প্রহরী সেই নিয়মের রহমত: চেনা-পরিচয়-ধৈর্য-ভাষা-বিভাজন — প্রতিটি অতিথির অধিকার-রক্ষা, প্রতিটি শহরের সীমা-রক্ষা। যে দরজা সবাইকে সবকিছু দেয়, সে শেষে কাউকে কিছুই রাখে না।</div>
  <div class="diagram">
    <div class="diag-title">Five Guards of the Door-Room — Request Lifecycle</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowR25" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="12" width="530" height="34" rx="8" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="280" y="33" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🌐 অনুরোধ: apiClient (CSRF-টোকেনসহ) → /api/&lt;app&gt;/…</text>
      <rect x="15" y="60" width="96" height="88" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.4"/>
      <text x="63" y="82" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">১ চেনা</text>
      <text x="63" y="98" text-anchor="middle" fill="#94a3b8" font-size="7">SessionAuth</text>
      <text x="63" y="112" text-anchor="middle" fill="#94a3b8" font-size="7">কুকি দেখাও</text>
      <text x="63" y="130" text-anchor="middle" fill="#64748b" font-size="6.5">JWT নেই</text>
      <rect x="126" y="60" width="96" height="88" rx="9" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.4"/>
      <text x="174" y="82" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="700">২ পরিচয়</text>
      <text x="174" y="98" text-anchor="middle" fill="#94a3b8" font-size="7">permission_classes</text>
      <text x="174" y="112" text-anchor="middle" fill="#94a3b8" font-size="7">Is&lt;Role&gt; ক্লাস</text>
      <text x="174" y="130" text-anchor="middle" fill="#64748b" font-size="6.5">দুই-অক্ষ (দরজা ১৬)</text>
      <rect x="237" y="60" width="96" height="88" rx="9" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="285" y="82" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">৩ ধৈর্য</text>
      <text x="285" y="98" text-anchor="middle" fill="#94a3b8" font-size="7">throttle_scope</text>
      <text x="285" y="112" text-anchor="middle" fill="#94a3b8" font-size="7">'sustained' 30/min</text>
      <text x="285" y="130" text-anchor="middle" fill="#64748b" font-size="6.5">settings-থেকে হার</text>
      <rect x="348" y="60" width="96" height="88" rx="9" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="396" y="82" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">৪ দোভাষী</text>
      <text x="396" y="98" text-anchor="middle" fill="#94a3b8" font-size="7">serializer</text>
      <text x="396" y="112" text-anchor="middle" fill="#94a3b8" font-size="7">is_valid(raise)</text>
      <text x="396" y="130" text-anchor="middle" fill="#64748b" font-size="6.5">চুক্তি (দরজা ১৯)</text>
      <rect x="459" y="60" width="86" height="88" rx="9" fill="rgba(100,116,139,0.12)" stroke="#94a3b8" stroke-width="1.4"/>
      <text x="502" y="82" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="700">৫ বিভাজক</text>
      <text x="502" y="98" text-anchor="middle" fill="#94a3b8" font-size="7">pagination</text>
      <text x="502" y="112" text-anchor="middle" fill="#94a3b8" font-size="7">50/পাতা</text>
      <text x="502" y="130" text-anchor="middle" fill="#64748b" font-size="6.5">rows-খাম</text>
      <line x1="111" y1="104" x2="125" y2="104" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowR25)"/>
      <line x1="222" y1="104" x2="236" y2="104" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowR25)"/>
      <line x1="333" y1="104" x2="347" y2="104" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowR25)"/>
      <line x1="444" y1="104" x2="458" y2="104" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowR25)"/>
      <rect x="120" y="170" width="320" height="40" rx="9" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.4"/>
      <text x="280" y="188" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="700">handler → সেবা → Model (পাতলা view, দরজা ২২)</text>
      <text x="280" y="202" text-anchor="middle" fill="#94a3b8" font-size="7.5">ব্যতিক্রম ছুড়ে ওঠে — খাম-বিধানে ম্যাপ হয় (APIException নিষেধ)</text>
      <rect x="120" y="228" width="320" height="36" rx="9" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.3"/>
      <text x="280" y="250" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="600">📤 খাম: {rows,total,…} · 204/{ok} · {field:[msg]} · {error}</text>
      <line x1="280" y1="46" x2="280" y2="58" stroke="#818cf8" stroke-width="1.5" marker-end="url(#arrowR25)"/>
      <line x1="280" y1="148" x2="280" y2="168" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowR25)"/>
      <line x1="280" y1="210" x2="280" y2="226" stroke="#f87171" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrowR25)"/>
      <text x="280" y="288" text-anchor="middle" fill="#64748b" font-size="8.5">পাঁচ প্রহরী শহরের জন্য — spectacular দলিলও এই দরজার হিসাব রাখে</text>
    </svg>
    <div class="diag-cap">চেনা → পরিচয় → ধৈর্য → দোভাষী → বিভাজক → handler → খাম — প্রতিটি ধাপ settings/ক্লাসে ঘোষিত, লুকানো জাদু নেই।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>প্রহরী-ফাঁদ:</strong> (১) view-এ <code>req.data</code> সরাসরি সেবায় পাঠানো — যাচাই-ছাড়া কাঁচা মান; সবসময় <code>s.validated_data</code>। (২) নতুন view-এ <code>throttle_scope</code> ভুলে যাওয়া — দরজা অরক্ষিত। (৩) <code>@extend_schema</code> ছাড়া endpoint — spectacular-এ অন্ধ, FE-টাইপ আর আয়না-গেট দুটোই ভাঙে।</div></div>
  <div class="secret-box">🚪 পাঁচ প্রহরী — চেনা, পরিচয়, ধৈর্য, দোভাষী, বিভাজক; প্রত্যেক ঘোষিত, কেউ লুকানো নয় — এই দরজাই চুক্তির প্রথম পাহারা। / Five declared guards stand before the handler; the door itself is the contract's first defense.</div>`,
  senior: {
    title: "DRF Card",
    body: `<p>প্রবাহ: dispatch → auth (Session; JWT নেই) → permission (<code>Is&lt;Role&gt;</code> ক্লাস; পাতা-গেট feature-key) → throttle (scope-নাম; হার settings-এ) → serializer (<code>is_valid(raise_exception=True)</code> → <code>validated_data</code>) → handler → খাম। Serializer: স্পষ্ট fields, read_only, source-denorm, validate_&lt;field&gt;; পড়া/লেখা আলাদা শ্রেণি। Pagination ৫০ + rows-খাম। ব্যতিক্রম: সেবায় Exception-সাবক্লাস → view-ম্যাপ; APIException নিষেধ। Parser: JSON-একক, MultiPart স্পষ্ট। Spectacular: <code>@extend_schema</code> প্রতি মেথডে + responses → wire-pin। টেস্ট: রোল×status-ম্যাট্রিক্স। ফাঁদ: raw req.data, scope-বিস্মৃত, schema-বিহীন view।</p>`
  }
});

doors.push({
  num: 26,
  icon: "🗄️",
  color: "#f472b6",
  name: "মাটির তল-গুম্বজ",
  subtitle: "The Earthen Vault — MySQL Deep-Dive",
  tech: "InnoDB internals, isolation levels, indexes (B+tree), EXPLAIN, utf8mb4, lock modes, ts_* legacy raw-SQL treaty",
  spirit: "আরয — arḍ (the earth: everything rests on it; nothing sees it)",
  secret: "InnoDB-র তল-গুম্বজে সারি-সংস্করণ ঘুমায় — পাঠক তালা নেয় না, লেখক সূচক-পথ ধরে; EXPLAIN না দেখে কোয়েরি ছাডা নিষেধ।",
  recall: {
    q: "READ COMMITTED-এ দুই পাঠক ভিন্ন মান দেখলে বিপদ কীসের?",
    qen: "What risk does READ COMMITTED's non-repeatable read create here?",
    a: "গণনা-দ্বৈততা — min-check-এর মতো যোগফল-প্রবাহে দুই পাঠ মিলবে না; সমাধান: atomic() + select_for_update-এ লেখক-তালা ধরে এক সত্য পড়া।",
    aen: "Double-read inconsistency in summed flows; fix: lock the writer row inside atomic() for one truth."
  },
  story: `<p class="scene-setting">মাটির নিচে এক তল-গুম্বজ — <strong>ভূ-গুপ্তপাল মাসুদ</strong> তার রক্ষক। উপরের শহর তাকে কখনো দেখে না, অথচ প্রতিটি ইট, প্রতিটি স্বর্ণমুহর তার ওপর দাঁড়িয়ে। তাঁর গুম্বজে তিন
  অদ্ভুত নিয়ম। <strong>নিয়ম এক</strong> — প্রতিটি সারির পেছনে তার <em>ছায়া-সংস্করণ</em> ঘুমায় (MVCC): পাঠক পুরনো ছায়া পড়ে,
  লেখক নতুন জন্ম দেয় — দুজনে মুখোমুখি হয় না, তালা লাগে না। <strong>নিয়ম দুই</strong> — প্রতিটি তালার শহরে সূচক-
  পথ আছে (B+TREE): মালপত্র খুঁজতে গোটা গুম্বজ তোয়াব করা নয়, শাখা-পথ ধরে তিন লাফে ঠিকানা। কিন্তু হায় — যে
  পথের নাম সূচিতে নেই (ফাংশন-মোড়ানো স্তম্ভ, ভিন্ন-ধরনের তুলনা), তার খোঁজ পূর্ণ-গুম্বজ-ঘোরা (full scan)।
  <strong>নিয়ম তিন</strong> — মাসুদ ডাক দিলে <em>তার ভাষায়</em> দিতে হয়: EXPLAIN — পথ-নকশা না দেখে কোনো দাওয়া চালানো
  নিষেধ। এক নতুন কারিগর হড়বড় করে বলে — "আমার কোয়েরি ধীর!" মাসুদ শান্তভাবে EXPLAIN চেয়ে নিয়ে দেখান —
  <strong>"তোমার খোঁজ LIKE '%x' দিয়ে শুরু — অর্থাৎ পথ ছেড়ে পুরো গুম্বজ ঘুরছ। সূচক-পথ হারালে গতি দুয়ায় নয়,
  পথে থাকে।"</strong></p>
  <p class="scene-setting en">Beneath the earth lies a vault — keeper <strong>Bhū-Guptapāl Masud</strong>. The
  city above never sees it, yet every brick and seal stands on it. Three strange rules govern his vault.
  <strong>Rule one</strong> — behind every row sleeps its <em>shadow-version</em> (MVCC): readers read old
  shadows, writers birth new ones; they never collide, no locks. <strong>Rule two</strong> — every locked
  city has index-paths (B+TREE): finding cargo isn't touring the vault, it's three hops down branch-signs.
  But woe — searches whose path-name isn't in the index (function-wrapped columns, type-mismatched
  comparisons) become full vault-tours. <strong>Rule three</strong> — when Masud is addressed, answer in
  <em>his</em> tongue: EXPLAIN — no petition runs without seeing its path-plan first. A newcomer blurts —
  "my query is slow!" Masud calmly requests EXPLAIN and shows — <strong>"your search starts with
  LIKE '%x' — you left the path and toured the vault. Speed lives in staying on the index-path, not in
  running faster."</strong></p>
  <div class="code-block">MySQL 8 · InnoDB — প্রকল্প-সত্যসহ

গুম্বজের ভিত্তি (প্রকল্প-settings):
  utf8mb4 + utf8mb4_unicode_520_ci   # পূর্ণ ইউনিকোড
  STRICT_TRANS_TABLES               # নীরব-কাটা নিষেধ —
    ভুল মান = গম্ভীর এরর (ডেটা-বিকৃতি রুখে)
  CONN_MAX_AGE=600 · mysqlclient (C-ড্রাইভার)

ছায়া-সংস্করণের শাসন (MVCC + আইসোলেশন):
  প্রকল্প: READ COMMITTED
  · ডার্টি-রিড নেই (অ-কমিট পড়া হয় না)
  · non-repeatable read সম্ভব — তাই
    গণনা-প্রবাহে (min-check-এর যোগ) atomic()+
    select_for_update: লেখক-সারি তালায় ধরে এক সত্য
  · টেস্ট-রান: ট্রানজেকশন-বিষ সাবধান (PR #74 শিক্ষা) —
    schema-pin textual, runtime-execute নয়

সূচক-পথ (B+TREE):
  · ForeignKey স্বয়ংক্রিয় সূচক; যোগ-করো যেখানে:
    তালিকা-ছাঁকনি (status+period) · অনুসন্ধান (jobcode)
    · যৌগিক সূচকে ক্রম নিয়ম: বাম-অগ্রাধিকার
      (a,b)-সূচক a-only ছাঁকনি দেয়, b-only দেয় না
  · পথহারানোর কারণ (full-scan নিমন্ত্রণ):
    LIKE '%…' প্রথম-ওয়াইল্ডকার্ড · স্তম্ভে ফাংশন
    WHERE YEAR(d)=… (বদলে পরিসর) · ভিন্ন-ধরনের তুলনা
    (str বনাম int) · OR-এ অ-সূচিত শাখা

EXPLAIN — দাওয়ার পথ-নকশা:
  EXPLAIN SELECT … → type-স্তম্ভ পড়ো:
    const/eq_ref/ref  ✅ সূচক-পথ
    range             ✅ পরিসর-পথ
    index             ⚠ সূচক-পূর্ণঘোরা
    ALL               🔴 গুম্বজ-পূর্ণঘোরা — ঠিকো
  · rows-অনুমান · key-স্তম্ভ কোন সূচক ধরা গেল
  · ধীর-লগ (settings-এ) ধরলে EXPLAIN দিয়ে বিচার

লেখকের তালা:
  SELECT … FOR UPDATE       # সারি-তালা (fsm.py)
  SELECT … FOR UPDATE OF tbl / SKIP LOCKED
    # skip_locked = NACHA-র idempotency-স্তর (PR #94)
  অন্তরঙ্গ-তালা ছোট রাখো — atomic-খণ্ড সংক্ষিপ্ত

লিগেসি-চুক্তি (ts_*):
  unmanaged টেবিল — schema বহিরাগত হাতে;
  তাই: raw SQL + dict(zip(cols,row)) আনপ্যাক +
  schema-pin (দরজা ২৩) — দুই ইতিহাস, এক পাহারা

প্রকল্প-নমুনা পথ-বিচার:
  তালিকা: .filter(status='current').order_by('name')
    → status-সূচক + ফাইলসর্ট-সম্ভব — ক্ষুদ্র ডেটায় নিরীহ
  ব্যাচ-টানা: select_related('report__client')
    → JOIN এক পথে
  গণনা: aggregate(Sum) — লুপ নয়</div>
  <div class="verse">আরয — মাটি: "পৃথিবীতে তোমাদের জন্য বিছানা বানালেন" (২:২২) — সব কিছুর নিচে, সবার চোখের বাইরে। মাসুদের গুম্বজ সেই আরযের অন্তরঙ্গ: ছায়া-সংস্করণে ধৈর্য, সূচক-পথে ন্যায়, EXPLAIN-এ স্বচ্ছতা। যে মাটির বিধান অবহেলা করে, তার প্রাসাদ নয় — ভিত্তি ধসে; আর ধস এলে উপরের তলাগুলো আগে জানতেও পারে না।</div>
  <div class="diagram">
    <div class="diag-title">Inside the Vault — MVCC, Index Paths, Locks</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowM26" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="12" width="170" height="120" rx="10" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1.4"/>
      <text x="100" y="34" text-anchor="middle" fill="#5eead4" font-size="9.5" font-weight="700">👤 ছায়া-সংস্করণ</text>
      <text x="100" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">MVCC — undo-লগে পুরনো ছায়া</text>
      <text x="100" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">পাঠক ছায়া পড়ে · লেখক নতুন জন্ম</text>
      <text x="100" y="84" text-anchor="middle" fill="#94a3b8" font-size="7">READ COMMITTED: ডার্টি-রিড নেই</text>
      <text x="100" y="102" text-anchor="middle" fill="#fbbf24" font-size="6.8">non-repeatable → atomic+lock-এ মেটো</text>
      <text x="100" y="122" text-anchor="middle" fill="#64748b" font-size="6.5">টেস্ট-রান: ট্রানজেকশন-বিষ (PR #74)</text>
      <rect x="200" y="12" width="170" height="120" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="285" y="34" text-anchor="middle" fill="#a5b4fc" font-size="9.5" font-weight="700">🌳 সূচক-পথ</text>
      <text x="285" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">B+TREE — শাখা-চিহ্নে তিন লাফ</text>
      <text x="285" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">FK স্বয়ংক্রিয় · যৌগিকে বাম-অগ্রাধিকার</text>
      <text x="285" y="84" text-anchor="middle" fill="#94a3b8" font-size="7">পথহারা: LIKE '%x' · ফাংশন-স্তম্ভ</text>
      <text x="285" y="102" text-anchor="middle" fill="#818cf8" font-size="6.8">type-mismatch → full-scan</text>
      <text x="285" y="122" text-anchor="middle" fill="#64748b" font-size="6.5">ক্রম-নিয়ম: (a,b)-সূচক ≠ b-only</text>
      <rect x="385" y="12" width="160" height="120" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="465" y="34" text-anchor="middle" fill="#fcd34d" font-size="9.5" font-weight="700">🗺️ EXPLAIN</text>
      <text x="465" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">পথ-নকশা আগে, দাওয়া পরে</text>
      <text x="465" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">const/ref/range ✅</text>
      <text x="465" y="82" text-anchor="middle" fill="#94a3b8" font-size="7">index ⚠ · ALL 🔴</text>
      <text x="465" y="100" text-anchor="middle" fill="#94a3b8" font-size="6.8">rows-অনুমান · key-সূচক পড়ো</text>
      <text x="465" y="122" text-anchor="middle" fill="#64748b" font-size="6.5">ধীর-লগ → EXPLAIN-বিচার</text>
      <rect x="60" y="160" width="440" height="54" rx="10" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.4"/>
      <text x="280" y="180" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="700">🔒 লেখকের তালা — FOR UPDATE (fsm) · SKIP LOCKED (NACHA PR #94)</text>
      <text x="280" y="198" text-anchor="middle" fill="#94a3b8" font-size="7.5">অন্তরঙ্গ-খণ্ড সংক্ষিপ্ত রাখো — তালা ধরে দীর্ঘ গল্প নয়; ডেডলক-বিচার LATEST DETECTED লগে</text>
      <rect x="60" y="232" width="440" height="52" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="251" text-anchor="middle" fill="#cbd5e1" font-size="8" font-weight="600">📜 লিগেসি-চুক্তি: ts_* unmanaged — raw SQL + dict-zip + schema-pin</text>
      <text x="280" y="268" text-anchor="middle" fill="#94a3b8" font-size="7.5">utf8mb4 · STRICT_TRANS_TABLES · CONN_MAX_AGE=600 — ভিত্তির তিন শপথ</text>
      <line x1="100" y1="132" x2="180" y2="158" stroke="#5eead4" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowM26)"/>
      <line x1="285" y1="132" x2="285" y2="158" stroke="#818cf8" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowM26)"/>
      <line x1="465" y1="132" x2="385" y2="158" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowM26)"/>
      <text x="280" y="303" text-anchor="middle" fill="#64748b" font-size="8.5">মাটি অদৃশ্য, বিধান কঠিন — ছায়ায় ধৈর্য, পথে ন্যায়, EXPLAIN-এ স্বচ্ছতা</text>
    </svg>
    <div class="diag-cap">ছায়া-সংস্করণ (MVCC) · সূচক-পথ (B+TREE) · পথ-নকশা (EXPLAIN) · লেখক-তালা — চার বিধানে গুম্বজ দাঁড়ায়।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গুম্বজ-ফাঁদ:</strong> (১) <code>WHERE YEAR(created_at)=2026</code> — সূচক মরে; <code>created_at__range</code> লেখো। (২) টেস্টে unmanaged টেবিলে <code>rollback</code>-ভরসা — MySQL-এ DDL/লিগেসি-লেখা রোলব্যাক বিষ ছড়ায় (PR #74); textual-pin। (৩) যৌগিক সূচকের ভুল ক্রম — (b,a) বানিয়ে (a,b)-ছাঁকনি খোঁজা; বাম-স্তম্ভই পথ খোলে।</div></div>
  <div class="secret-box">🗄️ মাটির বিধান: ছায়ায় পাঠ, পথে খোঁজ, তালায় লেখা, EXPLAIN-এ প্রমাণ — চারটাই মানলে গুম্বজ নীরব, ভুললে চিৎকার প্রোডাকশনে। / Read shadows, walk indexes, write under lock, prove with EXPLAIN.</div>`,
  senior: {
    title: "MySQL Card",
    body: `<p>ভিত্তি: utf8mb4+unicode_520 · STRICT_TRANS_TABLES · mysqlclient · CONN_MAX_AGE=600। <strong>MVCC</strong>: READ COMMITTED — ডার্টি-রিড নেই, non-repeatable আছে → গণনায় atomic+select_for_update; টেস্টে ট্রানজেকশন-বিষ (PR #74)। <strong>সূচক</strong>: FK-স্বয়ংক্রিয়; ছাঁকনি+ক্রম অনুযায়ী যৌগিক; বাম-অগ্রাধিকার; পথহারা: LIKE '%x'/ফাংশন-স্তম্ভ/type-mismatch/OR-অসূচিত। <strong>EXPLAIN</strong>: type পড়ো (ref/range ✅, index ⚠, ALL 🔴); ধীর-লগ→বিচার। <strong>তালা</strong>: FOR UPDATE (fsm), SKIP LOCKED (NACHA); অন্তরঙ্গ-খণ্ড ছোট। <strong>লিগেসি</strong>: ts_* unmanaged → raw SQL+dict-zip+schema-pin।</p>`
  }
});
