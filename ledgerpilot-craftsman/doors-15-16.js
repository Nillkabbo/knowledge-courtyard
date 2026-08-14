// doors-15-16.js — The Ledger Craftsman (LedgerPilot deep-dive)

doors.push({
  num: 15,
  icon: "🏦",
  color: "#5eead4",
  name: "টেলারের এক জানালা",
  subtitle: "The Teller's Single Window — Mutation Action",
  tech: "useMutationAction: loading flag, re-entrancy guard, toast, error modes, finally reset",
  spirit: "একাগ্রতা — one duty at a time, fully present",
  secret: "এক জানালায় এক কাজ — দ্বিতীয় ইশারা অপেক্ষায়, ডবল-ডেবিট কখনো নয়।",
  recall: {
    q: "ব্যবহারকারী approve বাটন দ্রুত দুইবার চাপলে কী হয়?",
    qen: "User double-clicks the approve button — what happens?",
    a: "running=true থাকলে দ্বিতীয় run() no-op — re-entrancy guard ডবল-মিউটেশন আটকায়।",
    aen: "Second run() is a no-op while running=true — the guard blocks double mutation."
  },
  story: `<p class="scene-setting">পুরনো ঢাকার স্টেট ব্যাংক। টেলার <strong>রুবিনা আপা</strong> — তাঁর কাউন্টারে ঠিক একটাই
  জানালা, আর জানালার পাশে একটা লাল ঘোরানো-তালা। কোনো গ্রাহকের টাকা গুনতে বসলে তিনি আগে সেই তালা ঘোরান —
  বোঝা যায় "কাজ চলছে"। জানালার নিচে লেখা: "একবারে একজন। আপনার ডেবিট দুইবার হোক, সেটা আমি হতে দেব না।"
  গুনে শেষ করে স্লিপে সিল, তারপরই তালা খোলে।</p>
  <p class="scene-setting en">Old Dhaka's State Bank. Teller <strong>Rehana Apa</strong> — one window, one red
  rotating latch beside it. Before counting any customer's money she flips the latch: "work in progress."
  A sign below the window: "One at a time. I will not let your debit happen twice." Count, seal the slip,
  then open the latch.</p>
  <div class="dialogue">এক তাড়াহুড়ো করা গ্রাহক দুইবার স্লিপ থুকে দিয়ে বলে — "আপা, দুইবার প্রসেস করেন, দ্রুত হবে!"
  <br>রুবিনা আপা চুপ করে স্লিপ ফেরত দিয়ে বলেন — "দ্রুততা আমার শপথ নয়, <strong>নিরাপত্তা</strong> আমার শপথ।
  এই তালা ঘোরানো থাকতে দ্বিতীয় স্লিপ আমি ছুঁই না।"</div>
  <div class="code-block">frontend/src/shared/composables/useMutationAction.ts

useMutationAction({ mutate, successMessage, onSuccess, errorMode })
  ├─ running = ref(false)        # 🔴 লাল তালা
  ├─ run(arg):
  │    if (running.value) return        # re-entrancy guard — দ্বিতীয় ইশারা no-op
  │    running.value = true; pending.value = arg
  │    try      { res = await mutate(arg) }
  │    catch(e) { error = getApiErrorMessage(e, fallback)
  │               errorMode !== 'inline' && toast.error(error)
  │               running=false; return }        # finally-reset সমান
  │    running.value = false
  │    toast.success(successMessage(arg, res))  # সিল-স্ট্যাম্প
  │    await onSuccess?.(res, arg)               # refetch — try-এর বাইরে!
  └─ reset() — মোডাল পুনরায় খোলার সময় পুরনো error মুছতে

ব্যবহার (কলার-সাইড মাত্র ৩ লাইন অভিপ্রায়):
  const approve = useMutationAction({
    mutate: (id) => invoiceService.transition(id, 'approve'),
    successMessage: 'Batch approved.',
    onSuccess: () => refreshAll(),
  })
  বাটনে: :disabled="approve.running.value" — বা pending arg দিয়ে per-button স্পিনার

⚠️ সীমানা: আংশিক-সাফল্যের ফ্যান-আউট (বাল্ক transition যেখানে summary
   দেখায়, throw করে না) — এই ছাঁচে জোর করে বসিয়ো না; আলাদা আকৃতি।</div>
  <div class="verse">সালাতে দাঁড়িয়ে আছো — তখন দুনিয়ার আর কিছু নেই। প্রতিটি কাজের এই একাগ্রতাই ইবাদতের ছায়া: যা হাতে আছে তা শেষ হওয়ার আগে দ্বিতীয়টা হাতে নেওয়া নয়। রুবিনা আপার লাল তালা সেই একাগ্রতার লোহার রূপ — এবং LedgerPilot-এর running ফ্ল্যাগ তার ডিজিটাল রূপ।</div>
  <div class="diagram">
    <div class="diag-title">The Latch — Re-entrancy Guard Timeline</div>
    <svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="105" x2="530" y2="105" stroke="#334155" stroke-width="2"/>
      <text x="30" y="109" fill="#64748b" font-size="9" text-anchor="middle">t₀</text>
      <text x="500" y="109" fill="#64748b" font-size="9">সময়</text>
      <circle cx="80" cy="105" r="7" fill="#fbbf24"/>
      <text x="80" y="88" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="600">ক্লিক ১</text>
      <text x="80" y="130" text-anchor="middle" fill="#94a3b8" font-size="7.5">running=true 🔴</text>
      <rect x="80" y="98" width="180" height="14" rx="7" fill="rgba(251,191,36,0.25)"/>
      <circle cx="180" cy="105" r="7" fill="#f87171"/>
      <text x="180" y="88" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="600">ক্লিক ২ → no-op</text>
      <text x="180" y="130" text-anchor="middle" fill="#94a3b8" font-size="7.5">guard: running → return</text>
      <circle cx="300" cy="105" r="7" fill="#2dd4bf"/>
      <text x="300" y="88" text-anchor="middle" fill="#5eead4" font-size="8.5" font-weight="600">API resolves</text>
      <text x="300" y="130" text-anchor="middle" fill="#94a3b8" font-size="7.5">running=false</text>
      <circle cx="400" cy="105" r="7" fill="#34d399"/>
      <text x="400" y="88" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="600">toast ✓</text>
      <circle cx="480" cy="105" r="7" fill="#818cf8"/>
      <text x="480" y="88" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="600">onSuccess → refetch</text>
      <text x="280" y="170" text-anchor="middle" fill="#64748b" font-size="9.5">তালা খোলার আগে দ্বিতীয় ক্লিক কাজে পরিণত হয় না</text>
      <text x="280" y="188" text-anchor="middle" fill="#64748b" font-size="9">ফল: একই approve দুইবার ডাকা সম্ভব নয় — ডবল-ডেবিট অসম্ভব</text>
    </svg>
    <div class="diag-cap">লাল তালার টাইমলাইন — ক্লিক ২ নিঃশব্দে মুছে যায়; toast আর refetch কমিটের পরে, try-এর বাইরে।</div>
  </div>
  <div class="secret-box">🏦 এক জানালা, এক কাজ, এক সিল — দ্বিতীয় ইশারা অপেক্ষায়। / One latch: guard → await → toast → onSuccess, and never two of anything.</div>`,
  senior: {
    title: "Mutation Action Map",
    body: `<p><code>useMutationAction</code> মালিকানা নেয়: loading ফ্ল্যাগ, re-entrancy guard, success toast (স্ট্রিং বা fn), error ('toast'|'inline'), reset। কলার দেয়: <code>mutate(arg)</code>, <code>onSuccess(res,arg)</code>, <code>successMessage</code>। <code>pending</code> = in-flight arg → per-button স্পিনার। ব্যবহার: FSM transition, assign/unassign, delete। সতর্কতা: আংশিক-সাফল্য fan-out (বাল্ক+summary) এর আকৃতি নয় — সেটা আলাদা। Door ৩-এর সাথে মিল: side-effects সবসময় commit-try-এর বাইরে।</p>`
  }
});

doors.push({
  num: 16,
  icon: "🛡️",
  color: "#5eead4",
  name: "ফটকের পাহারাদার",
  subtitle: "The Gatekeeper's Ledger — Two-Axis Access",
  tech: "Capability (User.can_*() → DRF class) vs Feature (user_has_feature, editable grants)",
  spirit: "রাব্বানি পাহারা — every flock has its shepherd",
  secret: "দুই খাতা, দুই দরজা — API-র চাবি এক খাতায়, মেনুর চাবি আরেক খাতায়; কপি নয়, উদ্দেশ্য আলাদা।",
  recall: {
    q: "মেনুতে একটা পেজ দেখাচ্ছে কিন্তু API 403 দিচ্ছে — কেন?",
    qen: "Menu shows a page but the API returns 403 — why?",
    a: "Feature (মেনু-গেট) আর Capability (API-গেট) স্বাধীন দুই অক্ষ — ভিন্ন হতে পারে; wired হলে মেলে, না হলে ভিন্ন।",
    aen: "Feature gates menus, Capability gates APIs — independent axes; they only align when the capability is wired."
  },
  story: `<p class="scene-setting">প্রাচীন শহরের দুই ফটক। প্রধান পাহারাদার <strong>মালিক জামাল</strong> — কোমরে দুটো আলাদা
  খাতা ঝোলে: বাঁ দিকের খাতায় <em>কে কোন দোকানে ঢুকতে পারবে</em> (গিল্ডের সিলমোহর লাগানো, শহরের কাউন্সিল
  বদলাতে পারে না), ডান দিকের খাতায় <em>কোন রাস্তার কোন প্রাচীরে কার নামফলক</em> (নগর-কোষাধ্যক্ষ চাইলে
  বদলে দেন)। এক ব্যবসায়ী অভিযোগ করে — "আমার নামফলক রাস্তায় আছে, তবু মসলা-গুদামে ঢুকতে দিচ্ছেন না কেন?"
  জামাল শান্তভাবে বলেন — "ফলক মানে রাস্তা দেখা। গুদাম মানে গিল্ডের সিল। <strong>দুটো এক করলে শহরে চুরি
  লাগবে।</strong>"</p>
  <p class="scene-setting en">A walled city with two gates. Chief guard <strong>Malik Jamal</strong> — two ledgers
  at his belt: left one holds <em>who may enter which warehouse</em> (guild-sealed; the council cannot change it),
  right one holds <em>whose name-plate hangs on which street</em> (the treasurer may re-hang these freely). A merchant
  complains — "My plate is on the street, yet you bar me from the spice warehouse?" Jamal replies — "A plate means
  you can see the street. The warehouse means the guild's seal. <strong>Merge the two and the city will be robbed.</strong>"</p>
  <div class="dialogue">নগর-কোষাধ্যক্ষ এসে বলেন — "জামাল, নতুন রাস্তায় ওই ব্যবসায়ীর ফলক টাঙালাম, এখন তো গুদামও খুলে দেবেন?"
  <br>জামাল মাথা নাড়েন — "ফলক আমি টানাইনি, আপনি টানিয়েছেন — ভালো। কিন্তু সিল গিল্ডের হাতে। আপনি চাইলে
  <strong>ওঁর গিল্ডে নাম লিখিয়ে</strong> দিন — সে পথেই দুই দরজাই খুলবে। শর্টকাটে নয়।"</div>
  <div class="dialogue en">The treasurer — "Jamal, I hung the merchant's plate on the new street. Now open the warehouse too?"
  <br>Jamal — "The plate was yours to hang — fine. But the seal belongs to the guild. Enroll him in the guild
  and both doors open — <strong>through the front path, not a shortcut.</strong>"</div>
  <div class="code-block">দুই অক্ষ — Capability vs Feature

অক্ষ ১: CAPABILITY (API-র চাবি — কোডের মালিকানায়)
  User.can_review_invoices()          # apps/accounts/models.py — সত্যের উৎস
    ↓ উত্তোলন
  IsInvoiceReviewerOrAdmin(BasePermission)   # apps/accounts/permissions.py
    ↓ বসানো
  permission_classes = [IsInvoiceReviewerOrAdmin]  # প্রতিটি view-তে
  FE: useCapabilities() — Set<string>, /me/capabilities/ থেকে
       → "Approve বাটন দেখাও যদি can('can_review_invoices')"

অক্ষ ২: FEATURE (মেনুর চাবি — DB-র মালিকানায়, এডিটেবল)
  user_has_feature(user, key)         # রেজল্যুশন: deny → grant → roles-এর ইউনিয়ন
  RoleFeatureGrant (প্রতি-রোল ম্যাট্রিক্স, /admin-এ টগল হয়)
  UserFeatureGrant (প্রতি-ব্যবহারকারী override — grant/deny)
  FE: useFeatureGate().hasFeature(key) → route meta + nav

🔗 সেতু: capability_feature_map.py (CAPABILITY_FEATURE_MAP)
  wired capability  = endpoint-এ has_feature চালে → মেনু-টগল API-ও বদলায়
  code-owned        = রোল-টুপল সরাসরি → মেনু-টগলের প্রভাব নেই

৫টি রোল: ROLE_ADMIN · ROLE_TIMESHEET_PROCESSOR (Peter)
  · ROLE_DATA_PROCESSOR (Sai) · ROLE_INVOICE_REVIEWER (Vicki)
  · ROLE_PAYMENT_PROCESSOR (Owen)   # স্ট্রিং লিটারেল নিষেধ — কনস্ট্যান্ট ইমপোর্ট

পাহারাদারের নিয়ম (জামালের ৩ নীতি):
  ১. অনুমতি-শ্রেণি view-তে, URL-এ নয় (OWASP API #5)
  ২. ইনলাইন role=='admin' কখনো নয় — সবসময় ক্লাস
  ৩. প্রতিটি নতুন endpoint-এ প্রতিটি রোলের ফলাফল টেস্ট (200/403/404)</div>
  <div class="verse">"প্রত্যেকেই একজন রাখওয়ার, আর প্রত্যেকেই তার রক্ষণাবেক্ষণের প্রশ্নে জিজ্ঞাসিত হবে" — সহিহ বুখারি ২৭৩। জামালের দুই খাতা সেই রাখওয়ারির বিভাজন: গিল্ড-সিল (কোড) আর নামফলক (DB) — দুই আমানত, দুই জবাবদিহি, এক শহর। কোনো খাতা অন্যটার দায় নিতে পারে না।</div>
  <div class="diagram">
    <div class="diag-title">Two Ledgers, Two Gates — Capability vs Feature</div>
    <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowG5" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="30" width="245" height="200" rx="12" fill="rgba(45,212,191,0.06)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="137" y="55" text-anchor="middle" fill="#5eead4" font-size="12" font-weight="700">CAPABILITY (API গেট)</text>
      <text x="137" y="70" text-anchor="middle" fill="#64748b" font-size="8.5">গিল্ডের সিল — কোডের মালিকানা</text>
      <rect x="35" y="85" width="205" height="34" rx="6" fill="rgba(100,116,139,0.12)"/>
      <text x="137" y="99" text-anchor="middle" fill="#cbd5e1" font-size="9">User.can_review_invoices()</text>
      <text x="137" y="112" text-anchor="middle" fill="#64748b" font-size="7.5">apps/accounts/models.py — সত্যের উৎস</text>
      <rect x="35" y="128" width="205" height="34" rx="6" fill="rgba(100,116,139,0.12)"/>
      <text x="137" y="142" text-anchor="middle" fill="#cbd5e1" font-size="9">IsInvoiceReviewerOrAdmin</text>
      <text x="137" y="155" text-anchor="middle" fill="#64748b" font-size="7.5">permissions.py — DRF ক্লাস</text>
      <rect x="35" y="171" width="205" height="34" rx="6" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf"/>
      <text x="137" y="185" text-anchor="middle" fill="#5eead4" font-size="9">permission_classes = [...]</text>
      <text x="137" y="198" text-anchor="middle" fill="#64748b" font-size="7.5">প্রতিটি view — 403/200 এখানেই</text>
      <line x1="137" y1="119" x2="137" y2="126" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowG5)"/>
      <line x1="137" y1="162" x2="137" y2="169" stroke="#5eead4" stroke-width="1.5" marker-end="url(#arrowG5)"/>
      <rect x="300" y="30" width="245" height="200" rx="12" fill="rgba(129,140,248,0.06)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="422" y="55" text-anchor="middle" fill="#a5b4fc" font-size="12" font-weight="700">FEATURE (মেনু গেট)</text>
      <text x="422" y="70" text-anchor="middle" fill="#64748b" font-size="8.5">নামফলক — DB-র মালিকানা, এডিটেবল</text>
      <rect x="320" y="85" width="205" height="34" rx="6" fill="rgba(100,116,139,0.12)"/>
      <text x="422" y="99" text-anchor="middle" fill="#cbd5e1" font-size="9">RoleFeatureGrant</text>
      <text x="422" y="112" text-anchor="middle" fill="#64748b" font-size="7.5">প্রতি-রোল ম্যাট্রিক্স — /admin-এ টগল</text>
      <rect x="320" y="128" width="205" height="34" rx="6" fill="rgba(100,116,139,0.12)"/>
      <text x="422" y="142" text-anchor="middle" fill="#cbd5e1" font-size="9">UserFeatureGrant (override)</text>
      <text x="422" y="155" text-anchor="middle" fill="#64748b" font-size="7.5">deny → grant → roles ইউনিয়ন</text>
      <rect x="320" y="171" width="205" height="34" rx="6" fill="rgba(129,140,248,0.10)" stroke="#818cf8"/>
      <text x="422" y="185" text-anchor="middle" fill="#a5b4fc" font-size="9">meta.requiresFeature + nav</text>
      <text x="422" y="198" text-anchor="middle" fill="#64748b" font-size="7.5">দেখা যাবে কি না — এখানেই</text>
      <line x1="422" y1="119" x2="422" y2="126" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrowG5)"/>
      <line x1="422" y1="162" x2="422" y2="169" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrowG5)"/>
      <path d="M 260 140 Q 280 140 298 140" fill="none" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#arrowG5)"/>
      <text x="280" y="128" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="700">সেতু</text>
      <text x="280" y="248" text-anchor="middle" fill="#64748b" font-size="8.5">CAPABILITY_FEATURE_MAP — wired হলে মেনু-টগল API-ও বদলায়; না হলে দুই অক্ষ স্বাধীন</text>
    </svg>
    <div class="diag-cap">বাঁ খাতা (কোড) গুদামের চাবি, ডান খাতা (DB) রাস্তার নামফলক। সেতু থাকলে একসাথে ঘোরে, না থাকলে আলাদা।</div>
  </div>
  <div class="callout info"><span class="co-icon">🎯</span><div><strong>পরিচিত ভিন্নতা:</strong> <code>can_access_invoice_generation</code> এ <code>invoice_reviewer</code> ঢোকে, কিন্তু <code>invoice_generation</code> ফিচার ওই রোলকে দেয় না — তাই মেনুতে পেজ নেই অথচ API-তে অনুমতি। এ ত্রুটি নয়; defense-in-depth-এর প্রকৃতি।</div></div>
  <div class="secret-box">🛡️ গুদামের চাবি কোডে, রাস্তার ফলক ডেটাবেসে — দুই খাতা মেশাবে না; চাইলে গিল্ডে নাম লেখাও। / Capability gates APIs (code-owned); Feature gates menus (DB-editable). Bridge, never merge.</div>`,
  senior: {
    title: "Access Model Map",
    body: `<p>Capability: <code>User.can_*()</code> → <code>apps/accounts/permissions.py</code> ক্লাস (<code>Is<Role></code>/<code>Can<Action></code>) → view-এর <code>permission_classes</code>; FE <code>useCapabilities()</code>। Feature: <code>user_has_feature()</code> (deny→grant→roles), <code>RoleFeatureGrant</code> + <code>UserFeatureGrant</code>; FE <code>useFeatureGate()</code>, route <code>meta.requiresFeature</code>। সেতু: <code>capability_feature_map.py</code>; wired হলে টগল API-ও বদলায়। রোল কনস্ট্যান্ট <code>apps/accounts/models.py</code> থেকে; স্ট্রিং নিষেধ। নতুন endpoint: প্রতিটি রোলের 200/403/404 টেস্ট বাধ্যতামূলক।</p>`
  }
});
