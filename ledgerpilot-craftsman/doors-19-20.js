// doors-19-20.js — The Ledger Craftsman (LedgerPilot deep-dive)

doors.push({
  num: 19,
  icon: "🪞",
  color: "#5eead4",
  name: "আয়নার প্রাসাদ",
  subtitle: "The Palace of Mirrors — The Wire Contract",
  tech: "Serializer = source of truth; api.generated.ts via dump_api_types; CI drift gate; getApiErrorMessage",
  spirit: "মীজান-উল-কিতাব — the balance that never flatters",
  secret: "সাক্ষী তার দেখাটাই বলে — serializer-ই সত্য; TS টাইপ আয়না, আয়না মুখ সাজায় না।",
  recall: {
    q: "BE-তে একটা ফিল্ড যোগ করলে FE কখন জানবে?",
    qen: "BE adds a field — when does the FE find out?",
    a: "টাইপ-চেকে নয় — dump_api_types --check CI-গেট স্কিমা-ড্রিফট ধরলেই; তাই handoff বাধ্যতামূলক।",
    aen: "Not at type-check — the dump_api_types CI drift gate catches it; hence the mandatory handoff."
  },
  story: `<p class="scene-setting">শাহজাহানের আয়না-মহল। আয়নাশিল্পী <strong>উস্তাদ জাফর</strong> — তাঁর নিয়ম একটাই: প্রতিটি আয়না
  বানানোর আগে সে <strong>মুখের মাপ</strong> নেন (যে সত্য দেখাবে), তারপর কাচ গড়েন। এক দরবারি বলল — "জাফর মিয়া, আমার
  আয়নায় আমাকে একটু লম্বা দেখাও — দাড়িতে রুপো পাবেন।" জাফর কাচ ভেঙে ফেললেন। "আয়না মিথ্যা বললে রাজপ্রাসাদে
  সবাই পথ হারাবে। <strong>মুখ যেমন, আয়না তেমন</strong> — আমি কাচ বিক্রি করি, মিথ্যা নয়।" তাঁর কারখানার দেওয়ালে
  লেখা: মাপ একবার, আয়না হাজারবার।</p>
  <p class="scene-setting en">The palace of mirrors. Mirror-maker <strong>Ustad Jafar</strong> — one rule: before
  crafting any mirror he takes the measurement of the FACE it must reflect, then pours the glass. A courtier
  offers silver — "Make me look taller in my mirror." Jafar smashed the glass. "A lying mirror loses the whole
  palace its way. <strong>The face is the truth; the mirror only pours it.</strong> I sell glass, not lies."
  On his workshop wall: measure once, mirror a thousand times.</p>
  <div class="dialogue">শাগিরদ জিজ্ঞেস করে — "উস্তাদ, TS টাইপ কি করে?"
  <br>জাফর — "TS টাইপ আমার ঢালাই-ছাঁচ। মুখ (serializer) বদলালে ছাঁচও বদলাতে হয় — নাহলে কাচ ফেটে যাবে,
  কিন্তু ফাটল দেরিতে ধরা পড়বে। তাই দরবারে (CI) এক পাহারাদার আছে — প্রতিদিন মুখ আর ছাঁচ মেলায়।"</div>
  <div class="code-block">চুক্তির স্রোত (একমুখী): DB → serializer → স্কিমা → TS

সত্যের উৎস: apps/<app>/serializers.py
  class ClientDetailSerializer(ModelSerializer):
    company_name = CharField(source='company.name', read_only=True)  # denormalized পাঠ

স্কিমা-স্ন্যাপশট (কমিটেড):
  python manage.py dump_api_types
    → frontend/src/core/types/api.schema.json   # OpenAPI
    → frontend/src/core/types/api.generated.ts  # TS টাইপ (openapi-typescript)

CI পাহারাদার (.github/workflows/rearchitect-ci.yml):
  dump_api_types --check   # কমিটেড আর্টিফ্যাক্ট ≠ লাইভ serializer → PR FAIL

FE গ্রহণ (ক্রমবর্ধমান):
  type ClientDetail = components['schemas']['ClientDetail']  # জেনারেটেড alias
  // হাতে-লেখা অবশিষ্ট: _-প্রিফিক্সড ইনলাইন স্কিমা, view-models, query-params,
  // ApiError/FormErrors/PaginatedResponse — এগুলোর জন্য handoff-ই ভরসা

টাইপ-লেখার নিয়ম:
  ① serializer-এর ফিল্ড-নাম হুবহু snake_case
  ② তারিখ-করা টিকা: // verified against backend on YYYY-MM-DD
  ③ PR #47 শিক্ষা: রেসপন্স বদলালে সব consumer grep করো: grep -rn "/api/x" frontend/src/

ত্রুটির অনুবাদক (FE-র একমাত্র দরজা):
  getApiErrorMessage(e, fallback):
    response.data.error → detail → message → error.message → fallback
    + HTML স্যানিটাইজ + 'Network Error' → কাজের কথা
  getFormErrors(e): 400 → ফিল্ড-ম্যাপ; 401/403/404/5xx → _form স্ট্রিং

রেসপন্স-খাম (codebase-actual):
  সাফল্য-তালিকা: {rows, total, page, page_size, total_pages}
  মিউটেশন: 204 বা {ok: true, ...} · ডোমেইন-ত্রুটি: {error: 'msg'}</div>
  <div class="verse">"যে সাক্ষ্য দেয় সে যা দেখেছে" — কুরআনে সাক্ষীর প্রথম শর্তই এটি: বর্ণনা হুবহু দৃষ্টের মতো, না বাড়িয়ে না ঘুঁটিয়ে। জাফরের আয়নাও সাক্ষী — serializer যা বলে তা-ই প্রতিফলিত করে। LedgerPilot-এ সেই সাক্ষীর নাম wire contract, আর দরবারের পাহারাদার dump_api_types --check।</div>
  <div class="diagram">
    <div class="diag-title">One-Way Truth Flow — Face to Mirror</div>
    <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowM8" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="80" width="115" height="60" rx="10" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.5"/>
      <text x="72" y="103" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">Model / DB</text>
      <text x="72" y="118" text-anchor="middle" fill="#94a3b8" font-size="8">Company.name</text>
      <text x="72" y="130" text-anchor="middle" fill="#94a3b8" font-size="8">মুখ</text>
      <rect x="165" y="80" width="125" height="60" rx="10" fill="rgba(45,212,191,0.12)" stroke="#2dd4bf" stroke-width="2"/>
      <text x="227" y="100" text-anchor="middle" fill="#5eead4" font-size="9.5" font-weight="700">Serializer ★</text>
      <text x="227" y="114" text-anchor="middle" fill="#94a3b8" font-size="8">company_name = source=</text>
      <text x="227" y="126" text-anchor="middle" fill="#94a3b8" font-size="8">'company.name' read_only</text>
      <text x="227" y="135" text-anchor="middle" fill="#fbbf24" font-size="8">সত্যের উৎস</text>
      <rect x="325" y="80" width="100" height="60" rx="10" fill="rgba(100,116,139,0.12)" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="375" y="103" text-anchor="middle" fill="#cbd5e1" font-size="9.5" font-weight="600">api.schema.json</text>
      <text x="375" y="118" text-anchor="middle" fill="#94a3b8" font-size="8">OpenAPI</text>
      <text x="375" y="130" text-anchor="middle" fill="#94a3b8" font-size="8">স্ন্যাপশট (কমিটেড)</text>
      <rect x="460" y="80" width="90" height="60" rx="10" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="505" y="103" text-anchor="middle" fill="#a5b4fc" font-size="9.5" font-weight="600">api.generated.ts</text>
      <text x="505" y="118" text-anchor="middle" fill="#94a3b8" font-size="8">components['schemas']</text>
      <text x="505" y="130" text-anchor="middle" fill="#94a3b8" font-size="8">আয়না / ছাঁচ</text>
      <line x1="130" y1="110" x2="163" y2="110" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowM8)"/>
      <line x1="290" y1="110" x2="323" y2="110" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowM8)"/>
      <line x1="425" y1="110" x2="458" y2="110" stroke="#5eead4" stroke-width="2" marker-end="url(#arrowM8)"/>
      <rect x="165" y="170" width="385" height="44" rx="10" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.3" stroke-dasharray="5 3"/>
      <text x="357" y="188" text-anchor="middle" fill="#f87171" font-size="9" font-weight="600">🚫 উল্টো পথ বন্ধ: TS টাইপ থেকে serializer "ঠিক" করা নিষেধ</text>
      <text x="357" y="203" text-anchor="middle" fill="#94a3b8" font-size="8">CI: dump_api_types --check — না মিললে PR ব্লক</text>
      <text x="280" y="40" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">মাপ একবার (serializer), আয়না হাজারবার (সব FE consumer)</text>
    </svg>
    <div class="diag-cap">স্রোত ডানে একমুখী। BE ফিল্ড বদলালে: স্কিমা রিজেন + TS alias + সব consumer একই PR-এ — নাহলে ফাটল নীরবে বাড়ে।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>PR #47-এর কাহিনি:</strong> BE ফেরত দিল <code>{status:'ok', account_count}</code>, FE-র টাইপ চাইত <code>{ok, detail, status_code}</code>। রেন্ডার দেখাল "✗ HTTP ?" — কারণ <code>ok</code> ছিল undefined। টাইপ-চেক পাস করেছিল, কারণ টাইপ হাতে লেখা। এই ঘটনাই CI ড্রিফট-গেটের জন্মদাতা।</div></div>
  <div class="secret-box">🪞 মুখ serializer, আয়না TS টাইপ — আয়না সাজায় না, ঢালে; উল্টো পথে হাঁটলে প্রাসাদ হারায়। / The serializer is the face; generated types only pour it. Never fix the mirror to flatter the face.</div>`,
  senior: {
    title: "Wire Contract Map",
    body: `<p>সত্য: <code>apps/*/serializers.py</code> → <code>dump_api_types</code> → <code>api.schema.json</code> + <code>api.generated.ts</code> (উভয়ই কমিটেড) → CI <code>--check</code> গেট। FE: নামডাকা স্কিমা alias করো (<code>components['schemas'][...]</code>); হাতে-লেখা অংশে তারিখ-টিকা বাধ্যতামূলক। রেসপন্স-খাম: <code>{rows,total,...}</code> তালিকা, <code>204/{ok}</code> মিউটেশন, <code>{error}</code> ডোমেইন-ত্রুটি। ত্রুটি-অনুবাদ: শুধু <code>core/http/errors.ts</code> (<code>getApiErrorMessage</code>/<code>getFormErrors</code>)। serializer বদলালে: grep consumer → টাইপ → ভিউ — একই PR; handoff YAML বিধান।</p>`
  }
});

doors.push({
  num: 20,
  icon: "🗺️",
  color: "#5eead4",
  name: "কেন্দ্রীয় মানচিত্র-ঘর",
  subtitle: "The Central Map Room — BE-Driven Navigation",
  tech: "ADR-0021: RouteEntry/MenuItem manifest, frozen component registry, admin overrides",
  spirit: "কিবলা — one reference direction for the whole city",
  secret: "রাস্তার নকশা এক ঘরে থাকে; ইট তৈরির কারখানা আলাদা — নকশা বদলায় ঘরে, ইট বদলায় কারখানায়।",
  recall: {
    q: "নতুন পেজ যোগ করতে কতটা BE 'নিয়ন্ত্রণ' পায়?",
    qen: "How much control does the BE have over adding a new page?",
    a: "শুধু দর্শন/ক্রম/গেট — component_key FE-র ফ্রোজেন রেজিস্ট্রিতে না থাকলে NotFound + drift লগ।",
    aen: "Presentation only — an unknown component_key renders NotFound and logs drift."
  },
  story: `<p class="scene-setting">সম্রাটের নগর-নকশা ঘর। প্রধান নকশাকার <strong>মিমার সেলিম</strong> — তাঁর দেওয়ালে শহরের পুরো
  রাস্তার মানচিত্র: কোন রাস্তা কোথায় যায়, কার নাম কী হবে, কারা ঢুকতে পারবে। কিন্তু এক অদ্ভুত বিভাজন খেয়াল
  করো — মানচিত্রে লেখা "এখানে মসজিদ হবে", কিন্তু <strong>ইট সে বানায় না</strong>। ইট বানায় শহরের গিল্ড-কারখানা,
  সেই পুরনো ফ্রোজেন তালিকার মতো করে। সেলিম মানচিত্রে "সোনার গম্বুজ" আঁকলেই গম্বুজ হয় না — গিল্ডের
  তালিকায় সোনার গম্বুজের নকশা থাকতে হবে; না থাকলে সেই জায়গায় দাঁড়ায় খালি মাঠ, আর কারখানার খাতায়
  লেখা পড়ে "অজানা নকশা"।</p>
  <p class="scene-setting en">The emperor's map room. Chief planner <strong>Mimar Selim</strong> — the whole city's
  street plan on his wall: which road leads where, its name, who may enter. But note the strange division —
  the map says "a mosque here," yet <strong>he pours no bricks</strong>. Bricks come from the guild's frozen
  pattern-book. If Selim draws a "golden dome" the guild has no pattern for, the lot stays an empty field and
  the factory log reads: unknown design.</p>
  <div class="dialogue">এক বণিক বলে — "মিমার আফেন্দি, আপনার মানচিত্র তো সব জানে — এক কলমে আমার দোকান সরিয়ে দিন!"
  <br>সেলিম হাসেন — "মানচিত্র রাস্তা চেনায়, দোকান বানায় না। তোমার দোকানের <strong>নকশা</strong> কি গিল্ডের
  বইয়ে আছে? থাকলে আমি রাস্তা বরাবর জায়গা করে দেব — নাম, ক্রম, কে ঢুকবে। নকশা না থাকলে আমার কলম অচল।"</div>
  <div class="code-block">apps/navigation/ (ADR-0021) — নকশা-ঘর বনাম ইট-কারখানা

মানচিত্র-ঘর (BE — apps/navigation/):
  RouteEntry(path, component_key, feature_key, allowed_roles)
  MenuItem(label, path, icon, order, category, visible, is_overridden)
  services/manifest.py → GET /api/navigation/manifest
    প্রতি-ব্যবহারকারী রেজলভড {menu, routes}
    দৃশ্যতা = user_has_feature(fk) AND (roles খালি OR রোল তালিকায়)
  services/{reseed,reconcile}.py — বেসলাইন বনাম লাইভ ড্রিফট, রিসেট-টু-সিড

ইট-কারখানা (FE — ফ্রোজেন রেজিস্ট্রি):
  app/registry/components.ts
    'xero.upload': () => import('.../XeroUploadView.vue')
    // component_key → lazy import — একটাই FE-মালিকানার অর্ধেক
  router/dynamic.ts → router.addRoute() ম্যানিফেস্ট থেকে

অ্যাডমিন-ওভাররাইডের সীমা (Phase 5):
  সম্পাদনাযোগ্য শুধু উপস্থাপনা: label · icon · order · category · visible
  অস্পৃশ্য: feature_key/allowed_roles (অ্যাক্সেস কার্নেলের) · path/component_key (ফ্রোজেন রেজিস্ট্রির)

নতুন পেজের সঠিক ক্রম:
  ① FE: কম্পোনেন্ট লিখো + রেজিস্ট্রিতে key যোগ → FE ডিপ্লয়
  ② BE: RouteEntry/MenuItem সারি → ম্যানিফেস্টে দেখা যায়
  ③ উল্টো করলে: অজানা key → NotFound + drift লগ

সতর্কতা (deep-link-এর আত্মীয়): BE-র সব target_url/path FE-র লাইভ রুটে গড়িয়ে যায় —
  রুট সরালে ম্যানিফেস্ট নয়, নোটিফিকেশন-লিংকও পচে যায়।</div>
  <div class="verse">কিবলা — এক দিকে সব নামাজ; কেন্দ্র বদলালে সব দিক বদলায়। নগরের মানচিত্র-ঘরও কিবলার মতো: রাস্তার সত্য এক ঘরে থাকে, তাই কেউ হারায় না। কিন্তু কিবলা ইট গাঁথে না — কাবার নকশা গিল্ডের বইয়ে; নকশা ঘরে বদলালে বানানোর আগে বইয়েও আনতে হয়। সেলিমের সীমা তাই আমানতের সীমা।</div>
  <div class="diagram">
    <div class="diag-title">Map Room vs Brick Factory — Who Owns What</div>
    <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowN9" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="35" width="250" height="165" rx="12" fill="rgba(45,212,191,0.07)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="140" y="60" text-anchor="middle" fill="#5eead4" font-size="11.5" font-weight="700">🗺️ মানচিত্র-ঘর (BE)</text>
      <text x="140" y="76" text-anchor="middle" fill="#64748b" font-size="8">apps/navigation — নকশা + গেট</text>
      <rect x="35" y="90" width="210" height="30" rx="6" fill="rgba(100,116,139,0.12)"/>
      <text x="140" y="109" text-anchor="middle" fill="#cbd5e1" font-size="8.5">RouteEntry: path · component_key</text>
      <rect x="35" y="128" width="210" height="30" rx="6" fill="rgba(100,116,139,0.12)"/>
      <text x="140" y="147" text-anchor="middle" fill="#cbd5e1" font-size="8.5">MenuItem: label · icon · order · visible</text>
      <rect x="35" y="166" width="210" height="30" rx="6" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf"/>
      <text x="140" y="185" text-anchor="middle" fill="#5eead4" font-size="8.5">GET /api/navigation/manifest</text>
      <rect x="295" y="35" width="250" height="165" rx="12" fill="rgba(129,140,248,0.07)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="420" y="60" text-anchor="middle" fill="#a5b4fc" font-size="11.5" font-weight="700">🧱 ইট-কারখানা (FE)</text>
      <text x="420" y="76" text-anchor="middle" fill="#64748b" font-size="8">app/registry — ফ্রোজেন কম্পোনেন্ট-বই</text>
      <rect x="315" y="90" width="210" height="30" rx="6" fill="rgba(100,116,139,0.12)"/>
      <text x="420" y="109" text-anchor="middle" fill="#cbd5e1" font-size="8.5">'xero.upload' → () =&gt; import(...)</text>
      <rect x="315" y="128" width="210" height="30" rx="6" fill="rgba(100,116,139,0.12)"/>
      <text x="420" y="147" text-anchor="middle" fill="#cbd5e1" font-size="8.5">router.addRoute() — ম্যানিফেস্ট থেকে</text>
      <rect x="315" y="166" width="210" height="30" rx="6" fill="rgba(129,140,248,0.10)" stroke="#818cf8"/>
      <text x="420" y="185" text-anchor="middle" fill="#a5b4fc" font-size="8.5">Vue কম্পোনেন্ট = ইট, FE ডিপ্লয়ে বাড়ে</text>
      <line x1="265" y1="120" x2="293" y2="120" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#arrowN9)"/>
      <text x="279" y="110" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="700">component_key</text>
      <text x="279" y="135" text-anchor="middle" fill="#64748b" font-size="8">সেতু-স্ট্রিং</text>
      <text x="280" y="222" text-anchor="middle" fill="#64748b" font-size="9">BE বলে কোথায়-কে-দেখবে; বানানোর নকশা ফ্রোজেন রেজিস্ট্রির</text>
    </svg>
    <div class="diag-cap">নকশা ঘরে, ইট কারখানায়; সেতু হলো component_key স্ট্রিং — উভয় পাশে হুবহু মিলতে হয়।</div>
  </div>
  <div class="callout info"><span class="co-icon">🎯</span><div><strong>"পূর্ণ BE-নিয়ন্ত্রণ" মানে যা নয়:</strong> BE পেজের <em>কোড</em> বদলাতে পারে না — পারে শুধু দৃশ্যতা, ক্রম, গেট, লেবেল, পথ। নতুন ভিউ = FE ডিপ্লয় (কম্পোনেন্ট + key) + BE ম্যানিফেস্ট সারি — দুই পা, এক ক্রম।</div></div>
  <div class="secret-box">🗺️ রাস্তার নকশা এক ঘরে, ইটের নকশা ফ্রোজেন বইয়ে — সেতু হলো key; বইয়ে নেই তো মাঠ খালি। / The manifest owns structure and gates; the frozen registry owns components. The bridge is a string; an unknown key renders NotFound.</div>`,
  senior: {
    title: "Navigation Manifest Map",
    body: `<p>BE <code>apps/navigation</code>: <code>RouteEntry</code>(path, component_key, feature_key, allowed_roles) + <code>MenuItem</code>; <code>services/manifest.py</code> রেজলভ করে <code>{menu,routes}</code> প্রতি-ইউজারে (দ্বৈত-গেট: <code>user_has_feature</code> AND রোল)। FE: <code>app/registry/components.ts</code> (key → lazy import, ফ্রোজেন) + <code>router.addRoute()</code>। অ্যাডমিন-ওভাররাইড শুধু উপস্থাপনা (label/icon/order/category/visible); গেট ও কাঠামো অস্পৃশ্য; <code>reconcile</code> ড্রিফট দেখায়, রিসেট-টু-সিড ফেরায়। নতুন পেজ: FE কম্পোনেন্ট+key → BE সারি; উল্টো ক্রম = NotFound।</p>`
  }
});
