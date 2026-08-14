// doors-21-22.js — The Ledger Craftsman (LedgerPilot deep-dive)

doors.push({
  num: 21,
  icon: "🧭",
  color: "#5eead4",
  name: "স্তরে স্তরে শহর",
  subtitle: "The Layered City — Frontend Architecture",
  tech: "FSD layers (core/shared/app/features/ui/tests), ESLint isolation, apiClient singleton, session stores",
  spirit: "তাকওয়া — taqwā (the guardrail: discipline before freedom)",
  secret: "উপরের স্তর নিচের স্তর চায়, নিচ কখনো উপরে ওঠে না — ভাই প্রদেশে হাত ঢুকিয়ে বোনের ঘর লঙ্ঘন নিষেধ।",
  recall: {
    q: "এক feature থেকে আরেক feature ইমপোর্ট করলে কী হয়?",
    qen: "What happens if one feature imports from another?",
    a: "ESLint flat config বিল্ডই ফেল করে — cross-feature import নিষেধ; যৌথ জিনিস shared/ বা core/-এ ওঠে।",
    aen: "ESLint fails the build — cross-feature imports are banned; shared logic rises to shared/ or core/."
  },
  story: `<p class="scene-setting">পাহাড়ের গায়ে স্তরে স্তরে গড়া শহর। নগরপতি <strong>মিমার আয়েশা</strong> — তাঁর নকশার প্রথম দফতরে লেখা:
  <strong>উপরের মহল্লা নিচের কুয়া থেকে জল টানতে পারবে; নিচের মহল্লা উপরের ছাদে সিঁড়ি দিতে পারবে না।</strong> সবচেয়ে
  নিচে পাথরের গাৎ (core/ — কুয়া, রাস্তা, হাতুড়ি); তার উপরে সব মহল্লার বাজার (shared/ — কাঁচি, মাপ, যে-কারও কাজে
  লাগে); তার উপরে শহরের দেওয়ানা (app/ — চাবির গুচ্ছ, পাহারা); আর চারদিকে বিভিন্ন কারিগর-মহল্লা (features/ —
  কামার, ছুতার, রংমিস্ত্রি)। কামার মহল্লার ছুতারের আসল কামড়ানো যাবে না — দরকার হলে বাজারে (shared/) নামবে।
  শহরের একমাত্র প্রধান ফটক (apiClient) — সব বাহন সেখান দিয়েই, গলির গোপন দরজা নিষেধ; ফটকেই পাহারা (CSRF টোকেন),
  ফটকেই হিসাব (401-এ সেশন-শেষ)।</p>
  <p class="scene-setting en">A city terraced up a mountainside. Mayor <strong>Mimar Ayesha</strong> — the first
  page of her plan reads: <strong>an upper ward may draw water from the lower well; a lower ward may never stair
  onto an upper roof.</strong> Lowest, the stone guts (core/ — wells, roads, hammers); above, the common bazaar
  (shared/ — shears, measures, anything any ward needs); above, the city divan (app/ — keyring, watch); around,
  the craft wards (features/ — smiths, carpenters, painters). The smith ward may not bite the carpenter's
  workshop — if needed, it descends to the bazaar. And one principal gate (apiClient) — every vehicle passes
  it, no alley doors; the token-check and the 401 ledger live at the gate.</p>
  <div class="code-block">frontend/src/ — স্তর-শৃঙ্খলা (ESLint-জারিত)

        ┌─────────────────────────────────────┐
        │ features/  ×১০  কারিগর-মহল্লা        │  উপর
        │  account·admin·auth·billing·credits │
        │  data-processing·invoices·messaging│
        │  payment·timesheets                 │
        │  প্রতিটিতে: components/ views/       │
        │   services/ composables/            │
        │   stores/ types/ routes.ts          │
        ├─────────────────────────────────────┤
        │ app/       দেওয়ানা                   │
        │  session/{auth,capabilities,         │
        │   features,navMenu}.store.ts         │
        │  registry/components.ts (ফ্রোজেন)    │
        │  router/ · layout/ · errorHandler    │
        ├─────────────────────────────────────┤
        │ shared/    বাজার                     │
        │  composables/ (usePreviewConfirmFlow,│
        │   useMutationAction, useForm*)       │
        │  components/ (মোডাল, স্কেলেটন-নয়)     │
        ├─────────────────────────────────────┤
        │ core/      পাথরের গাৎ                │
        │  http/ apiClient·csrf·errors         │
        │  auth/ types/ utils/                 │
        ├─────────────────────────────────────┤
        │ ui/        রাজমিস্ত্রির মান-দণ্ড          │
        │  tokens/ primitives/ (Button,Toast,  │
        │   Skeleton*) — শুধু টোকেন; arbitrary   │
        │   Tailwind নিষেধ (ESLint)             │
        └─────────────────────────────────────┘
  পরীক্ষা আলাদা শহরতলীতে: src/tests/** — সোর্সের
  পাশে কখনো নয় (vitest config প্রত্যাখ্যান করে)

একমাত্র ফটক: core/http/apiClient.ts
  · axios সিঙ্গেলটন, withCredentials:true
  · CSRF অটো-ফেচ + 403-এ রিফ্রেশ-রিট্রাই
  · 401 → expireSession() (একবার-ফায়ার)
  ⚠ 'axios' সরাসরি ইমপোর্ট = বাগ (grep-এ ধরা যায়)

তিন দেওয়ানি-দপ্তর (Composition-API Pinia):
  auth.store      user·userRole·userRoles·overrides
                 sessionStorage 'lp_auth_state' + 5min TTL
  capabilities    Set<string> ← /me/capabilities/ (can_*)
  features        ← /me/features/ (composed: ∪grants − denies)
  সবই computed(user) থেকে — সমান্তরাল সত্য নেই;
  লগআউটে resetAllSessionScopedStores()

রাস্তার নিয়ম (গার্ড-পাইপলাইন, router/guards.ts):
  public? → auth? → allowedRoles? → requiresFeature?
  বাইপাস নেই; নতুন সুরক্ষিত রুট meta-তে অপ্ট-ইন

ভাষার নিয়ম:
  · <script setup lang="ts"> একটাই রূপ
  · defineProps<T>() — রানটাইম ঘোষণা নিষেধ
  · Pinia: defineStore('id', () => {...})
  · সেবা = অবজেক্ট-লিটারেল এক্সপোর্ট
    (export const authService = { login, ... })
  · ফর্ম = refs + useFormErrors/useFormSubmit
    (vee-validate/zod নিষেধ — ডিপ ছাড়া এস্কালেশন)
  · লগ = logger.* — console.log কখনো নয়</div>
  <div class="verse">তাকওয়া — সীমার প্রতি লক্ষ্য: "এসব সীমান্ত, তা অতিক্রম করো না" (কুরআন ৬:১৫২ থেকে; এবং "এভাবেই আমরা প্রতিটি নবীর শত্রু করেছি" নয় — মূল ভাব: সীমা-রক্ষা ঈমানের অঙ্গ)। আয়েশার নকশা তাকওয়ার স্থাপত্য: উপর নিচ চায়, নিচ উপরে ওঠে না; ফটক এক, ফটকেই পাহারা। স্বাধীনতা স্তরের ভেতরে, লুটপাট স্তরের সীমান্তে থামে।</div>
  <div class="diagram">
    <div class="diag-title">The Terraced City — Dependency Flows Down Only</div>
    <svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowF20" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="30" y="15" width="500" height="52" rx="10" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.6"/>
      <text x="280" y="37" text-anchor="middle" fill="#a5b4fc" font-size="10.5" font-weight="700">features/ — ১০টি কারিগর-মহল্লা</text>
      <text x="280" y="53" text-anchor="middle" fill="#94a3b8" font-size="8">account · admin · auth · billing · credits · data-processing · invoices · messaging · payment · timesheets</text>
      <rect x="105" y="82" width="350" height="44" rx="10" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="280" y="100" text-anchor="middle" fill="#5eead4" font-size="10" font-weight="600">app/ — দেওয়ানা (session stores · registry · router)</text>
      <text x="280" y="116" text-anchor="middle" fill="#94a3b8" font-size="8">auth/capabilities/features/navMenu · ফ্রোজেন components.ts · guards</text>
      <rect x="140" y="141" width="280" height="44" rx="10" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="280" y="159" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="600">shared/ — বাজার (composables · components)</text>
      <text x="280" y="175" text-anchor="middle" fill="#94a3b8" font-size="8">usePreviewConfirmFlow · useMutationAction · useForm* · মোডাল</text>
      <rect x="175" y="200" width="210" height="44" rx="10" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.5"/>
      <text x="280" y="218" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="600">core/ — পাথরের গাৎ</text>
      <text x="280" y="234" text-anchor="middle" fill="#94a3b8" font-size="8">http/ (apiClient·csrf·errors) · auth · types · utils</text>
      <rect x="192" y="259" width="176" height="40" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="280" y="276" text-anchor="middle" fill="#fcd34d" font-size="9.5" font-weight="600">ui/ — মান-দণ্ড</text>
      <text x="280" y="291" text-anchor="middle" fill="#94a3b8" font-size="7.5">tokens + primitives — arbitrary Tailwind নিষেধ</text>
      <line x1="280" y1="67" x2="280" y2="80" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowF20)"/>
      <line x1="280" y1="126" x2="280" y2="139" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowF20)"/>
      <line x1="280" y1="185" x2="280" y2="198" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowF20)"/>
      <line x1="280" y1="244" x2="280" y2="257" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowF20)"/>
      <rect x="410" y="141" width="135" height="60" rx="9" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.4"/>
      <text x="477" y="163" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="700">🚫 নিষেধ-তীর</text>
      <text x="477" y="177" text-anchor="middle" fill="#94a3b8" font-size="7.5">feature ↔ feature</text>
      <text x="477" y="189" text-anchor="middle" fill="#94a3b8" font-size="7.5">নিচ → উপর</text>
      <line x1="408" y1="171" x2="532" y2="171" stroke="#f87171" stroke-width="0.5" stroke-dasharray="2 2"/>
      <text x="42" y="171" fill="#64748b" font-size="7.5" transform="rotate(-90 42 171)">নির্ভরতা নিচে প্রবাহিত ⬇</text>
      <text x="280" y="322" text-anchor="middle" fill="#64748b" font-size="9">পরীক্ষা পাশের শহরতলীতে (src/tests/**) · ফটক এক (apiClient) · স্টোর তিন, সব computed(user)</text>
    </svg>
    <div class="diag-cap">পাঁচ স্তরের সোপান — প্রতিটি তীর নিচমুখী; ভাই-মহল্লার সরাসরি হাত বাজারে যায়, ঘরে নয়।</div>
  </div>
  <div class="callout tip"><span class="co-icon">🔌</span><div><strong>নতুন পৃষ্ঠা লিখতে বসেছ?</strong> আগে খুঁজো প্রিমিটিভ (<code>ls ui/primitives/</code>) আর শেয়ার্ড কম্পোজেবল — ডুপ্লিকেট বানানো এই শহরে অপরাধ। লোডিং-এর জোড়া নিয়ম: <code>Skeleton*</code> + <code>useToast()</code> একসাথে — একা কেউ যায় না। MSW হ্যান্ডলার spec-লোকাল (<code>server.use()</code>), গ্লোবাল কখনো মিউটেট নয়।</div></div>
  <div class="secret-box">🧭 উপর নিচ চায়, নিচ উপরে নয়; ফটক এক, পরীক্ষা পাশের গ্রামে — এই সোপানেই শহর টেকে। / Dependencies flow down, one gate, tests in their own village: the terrace holds.</div>`,
  senior: {
    title: "FE Architecture Map",
    body: `<p>FSD স্তর: <code>features</code>(১০) → <code>app</code>(session stores: auth/capabilities/features/navMenu — সব Composition Pinia, computed(user); registry; guards) → <code>shared</code>(composables: usePreviewConfirmFlow/useMutationAction/useForm*; components) → <code>core</code>(http: apiClient সিঙ্গেলটন — CSRF+403-রিট্রাই+401-এক্সপায়ার; auth; types; utils) → <code>ui</code>(tokens+primitives)। ESLint: cross-feature নিষেধ, ui-তে arbitrary Tailwind নিষেধ। টেস্ট: <code>src/tests/**</code> মিরর-পথ, co-located নিষেধ; MSW spec-লোকাল। ভাষা: script-setup TS, defineProps&lt;T&gt;, object-literal services, ম্যানুয়াল ফর্ম (vee-validate/zod নিষেধ), logger। রুট-গার্ড: public→auth→roles→feature।</p>`
  }
});

doors.push({
  num: 22,
  icon: "🏛️",
  color: "#5eead4",
  name: "এগারো কারখানার সনদ",
  subtitle: "The Charter of Eleven Workshops — Backend Conventions",
  tech: "11 apps, APIView default, service-layer rules, plain exceptions, migrations discipline, wire envelopes",
  spirit: "সুন্নাত — sunnah (the proven path: consistency is worship)",
  secret: "APIView-ই রাস্তা, সেবা-স্তরে যুক্তি, ব্যতিক্রম সাধারণ Exception — প্রতিষ্ঠিত পথ ছেড়ে 'আধুনিকতা' অহংকার।",
  recall: {
    q: "নতুন endpoint-এ ModelViewSet ব্যবহার করা যাবে?",
    qen: "May a new endpoint use ModelViewSet?",
    a: "না — কোথাও নেই, কখনো নয়। APIView প্রকল্পের ডিফল্ট; viewsets.ViewSet মাত্র ২টি দুর্ঘটনা, তৃতীয়টি নিষেধ।",
    aen: "Never — no ModelViewSet exists anywhere; APIView is the default and the two ViewSet outliers must not propagate."
  },
  story: `<p class="scene-setting">রাজধানীর কারিগর-সনদের দফতর। মুখ্য দপ্তরি <strong>মুহতাসিব কামাল</strong> — তাঁর হাতে এগারোটি কারখানার
  সনদপত্র, আর দেয়ালে এক পাথরের ফলক: <strong>"প্রমাণিত পথই রাস্তা।"</strong> নতুন কোনো কারিগর এসে জিজ্ঞেস করে — "স্যার,
  শহরে নতুন রাস্তা বানাব — সিনেমার মতো ঘোরানো গোল চত্বর (ModelViewSet)?" কামাল ফলকের দিকে ইশারা করেন —
  "এই শহরে এগারোটি কারখানা, একশো বাইরের দরজা — সব সরলরেখায় (APIView)। দুটো ঘোরানো চত্বর আছে, দুর্ঘটনায়
  হয়েছে — তৃতীয়টির অনুমতি আমার নেই। <strong>রাস্তার ধরন বদলানো মজুরি নয়, বিদ্রোহ।</strong>" আর প্রতিটি নতুন দরজার
  নকশায় তিনি চান: কার প্রবেশ (permission), কত দ্রুত (throttle), আর দরজার নাম-ফলক (@extend_schema) —
  নামহীন দরজা তিনি খোলেন না।</p>
  <p class="scene-setting en">The guild-charter office of the capital. Chief registrar <strong>Muhtasib Kamal</strong>
  — eleven workshop charters in hand, a stone tablet on the wall: <strong>"The proven path IS the road."</strong>
  A newcomer asks — "May I build a spinning roundabout (ModelViewSet)?" Kamal points at the tablet — "Eleven
  workshops, a hundred outer doors — all straight lines (APIView). Two roundabouts exist, born of accident;
  I cannot license a third. <strong>Changing the road's shape is not labor, it is rebellion.</strong>" And every
  new door's blueprint needs three things: who may enter (permission), how fast (throttle), and a name-plate
  (@extend_schema) — he opens no anonymous door.</p>
  <div class="code-block">apps/ — এগারো কারখানা, এক সনদ

accounts   User + ৫ রোল + permissions.py (সব Is<Role>/Can<Action>-এর ঘর)
           + role_features.py (৩০ key) + capability_feature_map
billing    চক্র + NACHA + ব্যাংক-সনদ + অ্যাক্সেপশন + অটো-পে (raw-SQL ভারী)
clients    Company/Client/Supervisor + status FSM + ব্যাংক-ক্রিপ্টো
core       ফোর্স-ইমপোর্ট CM + সিনথেটিক-ক্লিনআপ + অডিট সেবা
invoices   ব্যাচ-জেন + FSM + মিন-চেক + ক্রেডিট + push (সবচেয়ে বড়)
messaging  ১:১ কথা + SSE ব্যাজ (ADR-0026) — ঘণ্টার ভাই নয়
navigation ম্যানিফেস্ট + রিসিড + রিকনসাইল (ADR-0021)
notifications emit + HandoffEvent + চ্যানেল (ADR-0020)
system_admin ড্যাশবোর্ড + অডিট + ব্যবহারকারী + sync
timesheets আপলোড + পার্স + রিজেক্ট + ফোর্স (ts_* লিগেসি)
xero       OAuth + Fernet + webhook + আয়না + ৩ push

রাস্তার সনদ (প্রতিটি নতুন endpoint):
  ① APIView — ModelViewSet কোথাও নেই, কখনো নয়;
     viewsets.ViewSet = ২টি দুর্ঘটনা (clients, system_admin), তৃতীয় নিষেধ
  ② permission_classes = [Is<Role>...] — ইনলাইন রোল-স্ট্রিং নিষেধ
  ③ throttle_scope — DEFAULT_THROTTLE_RATES থেকে; হার্ডকোড নিষেধ
  ④ @extend_schema(tags=['<domain>']) প্রতিটি মেথডে
     + responses থাকলে → wire-contract পিন টেস্ট বাধ্যতামূলক
  ⑤ pagination: PAGE_SIZE=50; invoices/clients {rows,total,...}

সেবা-স্তরের সনদ:
  apps/<domain>/services/<name>.py — সমতল ফাংশন, snake_case
  বহু-সারি লেখা → transaction.atomic
  ব্যতিক্রম = সাধারণ Exception সাবক্লাস (apps/<domain>/exceptions.py)
    ⚠ APIException নিষেধ — view ধরে Response দেয়
  raw SQL হলে → schema-pin টেস্ট (textual assert, runtime-execute নয়)
    + dict(zip([c[0] for c in cur.description], row)) —
    পজিশনাল আনপ্যাক BOLA-শ্রেণির ঝুঁকি (PR #90/92 শিক্ষা)

মাইগ্রেশন-শৃঙ্খলা:
  এক মাইগ্রেশন = এক উদ্দেশ্য; প্রয়োগ-হওয়া কখনো সম্পাদনা নয়
  ধ্বংসাত্মক (drop/rename/NOT NULL জনসমাগমে)? → থামো, এস্কালেট
    Expand → Migrate → Contract (৩-ডিপ্লয় নাচ)
  sqlmigrate পড়ে তারপর প্রয়োগ

খামের সনদ (সব view পড়ে ২টি বেছে নকল করো):
  তালিকা: {rows, total, page, page_size, total_pages}
  মিউটেশন: 204 বা {ok: true, ...}
  যাচাই-ত্রুটি: {field: [msg]} / {detail}
  ডোমেইন-ত্রুটি: {error: msg} (400/422)

নির্ভরতার সনদ: নতুন লাইন requirements/package.json-এ
  চুপচাপ নয় — আগে মানুষের অনুমতি (উভয় দিকেই)

লগের সনদ: bare except: pass কবরস্থান —
  logger.exception(...) ছাড়া গিলে ফেলা নিষেধ (দুইটি
  প্রোডাকশন-নীরব বাগের শিক্ষা: PR #75, #84)</div>
  <div class="verse">সুন্নাত — প্রমাণিত পথ: "তোমাদের মধ্যে সর্বোত্তম সে, যার আচরণ সর্বোত্তম" (ভাবার্থ); এবং রাসূলের পথ অনুসরণের আদেশ — "যা রাসূল তোমাদের দেন তা গ্রহণ করো, যা নিষেধ করেন ত্যাগ করো" (৫৯:৭)। কামালের ফলক সেই সুন্নাতের ইট: পথ প্রমাণিত, তাই পথ অলঙ্ঘনীয়। নতুনত্ব স্বাগত — সনদ ভেঙে নয়, সনদ মেনে।</div>
  <div class="diagram">
    <div class="diag-title">Eleven Workshops, One Charter — Request Lifecycle</div>
    <svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowB21" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="120" y="12" width="320" height="34" rx="8" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="280" y="33" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="600">🌐 apiClient (CSRF+session) → /api/&lt;app&gt;/</text>
      <rect x="120" y="58" width="320" height="40" rx="8" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.6"/>
      <text x="280" y="76" text-anchor="middle" fill="#5eead4" font-size="9.5" font-weight="700">① APIView — সরলরেখা রাস্তা</text>
      <text x="280" y="90" text-anchor="middle" fill="#94a3b8" font-size="7.5">permission_classes ✓ throttle_scope ✓ @extend_schema ✓</text>
      <rect x="120" y="110" width="320" height="36" rx="8" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.4"/>
      <text x="280" y="128" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="600">② Serializer — চুক্তির দোভাষী</text>
      <text x="280" y="141" text-anchor="middle" fill="#94a3b8" font-size="7.5">source='company.name' read_only · Meta.fields স্পষ্ট</text>
      <rect x="120" y="158" width="320" height="36" rx="8" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.4"/>
      <text x="280" y="176" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="600">③ Service — যুক্তির ঘর (সমতল ফাংশন, atomic)</text>
      <text x="280" y="189" text-anchor="middle" fill="#94a3b8" font-size="7.5">টাইপড ব্যতিক্রম ছুড়ে — Exception সাবক্লাস, APIException নয়</text>
      <rect x="120" y="206" width="320" height="36" rx="8" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.4"/>
      <text x="280" y="224" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="600">④ Model / raw SQL — সত্যের থাম</text>
      <text x="280" y="237" text-anchor="middle" fill="#94a3b8" font-size="7.5">raw SQL হলে schema-pin টেস্ট + dict-zip আনপ্যাক</text>
      <rect x="80" y="256" width="400" height="34" rx="8" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.3"/>
      <text x="280" y="277" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="600">খাম: {rows,total,…} · 204/{ok} · {error} — পাশের ২টি view পড়ে নকল</text>
      <line x1="280" y1="46" x2="280" y2="56" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowB21)"/>
      <line x1="280" y1="98" x2="280" y2="108" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowB21)"/>
      <line x1="280" y1="146" x2="280" y2="156" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowB21)"/>
      <line x1="280" y1="194" x2="280" y2="204" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowB21)"/>
      <line x1="280" y1="242" x2="280" y2="254" stroke="#fbbf24" stroke-width="1.3" stroke-dasharray="4 3" marker-end="url(#arrowB21)"/>
      <text x="280" y="312" text-anchor="middle" fill="#64748b" font-size="9">এগারো কারখানা · ১২৪ view (১২২ APIView + ২ দুর্ঘটনা) · এক সনদ: প্রমাণিত পথই রাস্তা</text>
    </svg>
    <div class="diag-cap">অনুরোধ সরলরেখায় নামে — view পাতলা, যুক্তি সেবায়, ব্যতিক্রম টাইপড, খাম প্রতিবেশীর মতো।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>is_staff-এর ফাঁদ:</strong> User.is_staff কোনো কলাম নয় — role থেকে উদ্ভূত <code>@property</code>। টেস্টে <code>user.is_staff = True</code> লিখলে AttributeError; সঠিক পথ <code>create_user(..., role='admin')</code>। একাধিক xero-auth view এই ধর্মের উপর দাঁড়ানো।</div></div>
  <div class="secret-box">🏛️ প্রমাণিত পথই রাস্তা — APIView, সেবা-স্তর, সাধারণ Exception, সনদমাফিক খাম; বিদ্রোহ নয়, নকল। / Follow the charter: thin views, typed exceptions, neighbor-shaped envelopes — copy, don't invent.</div>`,
  senior: {
    title: "BE Conventions Map",
    body: `<p>১১ অ্যাপ (মনে রাখার মানচিত্র দেখো)। নতুন endpoint: <code>APIView</code> (ModelViewSet নিষেধ; ২ ViewSet-দুর্ঘটনা অনুকরণ নয়) + permission ক্লাস (ইনলাইন রোল-স্ট্রিং নিষেধ — ROLE_* কনস্ট্যান্ট) + <code>throttle_scope</code> (settings-থেকে) + <code>@extend_schema</code> + wire-pin (responses থাকলে)। সেবা: সমতল ফাংশন, atomic, Exception সাবক্লাস (APIException নয়)। raw SQL: schema-pin (textual) + dict-zip। মাইগ্রেশন: এক-উদ্দেশ্য, প্রয়োগ-অসম্পাদনীয়, ধ্বংসাত্মক হলে expand→migrate→contract + এস্কালেট। খাম: প্রতিবেশী-নকল। নির্ভরতা: অনুমতি-আগে। <code>is_staff</code>=property। bare-except নিষেধ।</p>`
  }
});
