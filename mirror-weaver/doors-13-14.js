
doors.push({
  num: 13,
  icon: "🗺️",
  color: "#818cf8",
  name: "শহরের রাস্তার-নকশা",
  subtitle: "The City Street-Map — vue-router Fundamentals",
  tech: "createRouter, createWebHistory, route records, dynamic segments (:id), nested routes, named routes, lazy loading",
  spirit: "সিরাত — ṣirāṭ (the path: well-marked, single source of direction)",
  secret: "রুট = পথ+নাম+উপাদান; :id-প্যারামিটার গভীর-লিংক, নেস্টেড-চিলড্রেন উপ-গলি, lazy-import বান্ডেল-ভাগ — নকশা এক-ফাইলে, দেয়াল নয়।",
  recall: {
    q: "সব ভিউ এক-বান্ডেলে না এনে lazy-import করা কেন?",
    qen: "Why lazy-import route views?",
    a: "প্রথম-লোড হালকা থাকে (শুধু বর্তমান-পর্দার চাংক নামে); ভিউগুলো প্রায়-স্বয়ংসম্পূর্ণ বড় ফাইল, চাংক-ভাগ অটো; component: () => import('…') ছাঁচ।",
    aen: "First paint stays light — only the current view's chunk loads; each view is a large near-self-contained file."
  },
  story: `<p class="scene-setting">তেরো নম্বর ঘর একটা <strong>নকশা-দপ্তর</strong> — বিশাল টেবিলে শহরের পুরো রাস্তার-মানচিত্র, দেয়ালে পথ-নামের ফলক। প্রধান নকশাকার
  <strong>ইমরান ভাই</strong> — তাঁর হাতে ছয়-রঙা মার্কার, গলায় দুইয়ন্ত্রের থুতনি-রুল। তিনি মানচিত্রে আঙুল রেখে বলেন — <strong>"প্রতিটি রুট এক-লাইনের
  ঘোষণা: পথ, নাম, উপাদান। পথ-নাম দেয়ালে লেখো না — নকশায় লেখো; দেয়ালে লেখা পথ পরের বছর কেউ খুঁজে পায় না।"</strong> তারপর তিনি গভীর-লিংক
  দেখান — পথে <code>:id</code>-ধরা ফাঁকা খিলি (ডায়নামিক সেগমেন্ট): <code>/clients/:id</code> — একই নকশা, হাজার ক্লায়েন্ট। <strong>"নেস্টেড-গলি"</strong>
  (children): এক-লেআউটের ভেতর উপ-পথ — প্যারেন্টে <code>&lt;RouterView /&gt;</code>-জানালা, সেখানেই চিলড্রেন বসে। শেষে তিনি <strong>লেজি-চালক</strong> দেখান:
  প্রতিটি পর্দার-গাড়ি গুদামে দাঁড়িয়ে, যাত্রা শুরুর মুহূর্তে ইঞ্জিন-চালু (<code>() =&gt; import()</code>) — শহরের প্রথম-দরজা হালকা থাকে। তিনি LedgerPilot-এর
  আসল নকশা-বই খুলে দেখান: স্ট্যাটিক-রুট কতকগুলো, তারপর সার্ভারের-পাঠানো ম্যানিফেস্ট রুট-জাত হয়ে যোগ হয় (দরজা ১৪-এ সে-গল্প)।</p>
  <p class="scene-setting en">Room thirteen is a <strong>mapping-office</strong> — the whole street-map on a giant table,
  path-name plaques on the wall. Chief cartographer <strong>Imran Bhai</strong> — a six-color marker in hand, a
  two-tool chin-rule at his neck. He places a finger on the map — <strong>"every route is a one-line declaration:
  path, name, component. Write paths on the map, not on walls — wall-written paths are found by no one next
  year."</strong> Then deep-links — a hollow notch in the path (dynamic segment): <code>/clients/:id</code> — one map,
  a thousand clients. <strong>Nested alleys</strong> (children): sub-paths inside one layout — the parent carries a
  <code>&lt;RouterView /&gt;</code>-window where children sit. Finally the <strong>lazy-driver</strong>: each
  screen-car waits in the garage, engine started only at departure (<code>() =&gt; import()</code>) — the city's first
  door stays light. He opens LedgerPilot's real map-book: a handful of static routes, then server-sent manifest
  routes joining in (that story in door 14).</p>
  <div class="code-block">রাউটার-শাস্ত্র — LP-র প্রকৃত নকশা-ছায়া (router/index.ts)

① তাঁত-বাঁধা — createRouter:
  import { createRouter, createWebHistory } from 'vue-router'
  const router = createRouter({
    history: createWebHistory(),     // HTML5-মোড (hash-নয়)
    routes: [ … ],
  })
  · createWebHashHistory — লিগ্যাসি/স্ট্যাটিক-
    হোস্ট-পথ; নতুন অ্যাপে history-ই

② রুট-রেকর্ড — তিন-স্তম্ভ:
  {
    path: '/login',
    name: 'login',                    // নাম — লিংকের ভরসা
    component: () =&gt; import(         // লেজি-চালক
      '@/features/auth/views/LoginView.vue'),
    meta: { public: true, title: 'লগইন' },
  }
  · path-ভিত্তিক নয় name-ভিত্তিক নেভিগেশন:
    &lt;RouterLink :to="{ name: 'client-detail',
                       params: { id: 42 } }" /&gt;
    — পথ-বদলালে লিংক-ভাঙে না

③ গভীর-লিংক — ডায়নামিক সেগমেন্ট:
  { path: '/clients/:id', name: 'client-detail',
    component: () =&gt; import('…ClientDetailView.vue') }
  // ভেতরে:
  const route = useRoute()
  const id = computed(() =&gt; route.params.id)
  · ঐচ্ছিক: :id? · একাধিক: /inv/:year/:month
  · রেগেক্স-সীমা: :id(\\d+)
  ⚠ প্যারাম-বদলে একই উপাদান পুনর্ব্যবহৃত —
    watch(() =&gt; route.params.id) দিয়ে ডেটা-রিফেচ

④ উপ-গলি — nested children:
  {
    path: '/admin', component: AdminLayout,
    children: [
      { path: '', name: 'admin-dashboard',
        component: Dashboard },        // '' = নিজ-পথ
      { path: 'users', name: 'admin-users',
        component: UserManagement },
    ],
  }
  // AdminLayout-এ জানালা:
  &lt;RouterView /&gt;

⑤ স্থানান্তর-পথ:
  { path: '/', redirect: { name: 'login' } }
  { path: '/:pathMatch(.*)*', name: 'not-found',
    component: NotFoundView }          // ধরার-জাল

⑥ প্রোগ্রাম-নেভিগেশন:
  const router = useRouter()
  router.push({ name: 'client-detail', params: { id } })
  router.replace({ name: 'login' })   // ইতিহাসে-প্রতিস্থাপন
  · query: router.push({ query: { page: 2 } })

⑦ রুট-জন্ম-স্থানান্তর (LP: ADR-0021):
  স্ট্যাটিক-বীজ (login/404/…) + প্রথম-নেভিগেশনে
  সার্ভার-ম্যনিফেস্ট → router.addRoute(…)
  · ফ্রোজেন-রেজিস্ট্রি: component_key → লেজি-লোডার
    (দরজা ১৪-এ গার্ড+ম্যানিফেস্টের পূর্ণ-গল্প)</div>
  <div class="verse">সিরাত — সুগম-পথ: "আমাকে সরল পথ দেখাও" (১:৬) — পথ এক, নির্দেশ স্পষ্ট, পথহারা নয়। ইমরান ভাইয়ের নকশা-দপ্তর সেই সিরাতের রাস্তা-রূপ: প্রতিটি পথের নাম-ফলক, প্রতিটি মোড়ে জানালা, আর ধরার-জাল — যে-পথ নকশায় নেই সেখানে পথহারা-পাতা, অন্ধকার নয়। যে শহরে রাস্তা দেয়ালে দেয়ালে লেখা, সে-শহরে প্রতিটি নতুন কারিগর পথ আবিষ্কার করে নিজের জীবন দিয়ে।</div>
  <div class="diagram">
    <div class="diag-title">The Street-Map — Path, Name, Component, Window</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowR13" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
      <rect x="15" y="14" width="530" height="56" rx="10" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="280" y="36" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🗺️ createRouter({ history: createWebHistory(), routes: […] })</text>
      <text x="280" y="52" text-anchor="middle" fill="#94a3b8" font-size="7">নকশা এক-স্থানে — পথ-নাম-উপাদান তিন-স্তম্ভ · name-ভিত্তিক RouterLink (পথ-বদলে লিংক-অক্ষত)</text>
      <rect x="15" y="88" width="165" height="84" rx="10" fill="rgba(66,184,131,0.08)" stroke="#42b883" stroke-width="1.4"/>
      <text x="97" y="108" text-anchor="middle" fill="#7ee0b0" font-size="8" font-weight="700">🏷️ স্ট্যাটিক-বীজ</text>
      <text x="97" y="123" text-anchor="middle" fill="#94a3b8" font-size="6.5">/login · /404 · redirect</text>
      <text x="97" y="137" text-anchor="middle" fill="#64748b" font-size="6">path+name+meta(public)</text>
      <text x="97" y="154" text-anchor="middle" fill="#7ee0b0" font-size="6.5">LP: হাতে-গোনা কয়েকটি</text>
      <text x="97" y="166" text-anchor="middle" fill="#64748b" font-size="6">(নকশা-বইয়ের প্রথম-পাতা)</text>
      <rect x="197" y="88" width="165" height="84" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="279" y="108" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">🔍 গভীর-লিংক</text>
      <text x="279" y="123" text-anchor="middle" fill="#94a3b8" font-size="6.5">/clients/:id — খিলিযুক্ত-পথ</text>
      <text x="279" y="137" text-anchor="middle" fill="#64748b" font-size="6">useRoute().params · :id(\\d+)</text>
      <text x="279" y="154" text-anchor="middle" fill="#fbbf24" font-size="6.5">⚠ প্যারাম-বদলে রিফেচ-নিজে-করো</text>
      <text x="279" y="166" text-anchor="middle" fill="#64748b" font-size="6">watch(params.id)</text>
      <rect x="379" y="88" width="166" height="84" rx="10" fill="rgba(66,184,131,0.08)" stroke="#42b883" stroke-width="1.4"/>
      <text x="462" y="108" text-anchor="middle" fill="#7ee0b0" font-size="8" font-weight="700">🚚 লেজি-চালক</text>
      <text x="462" y="123" text-anchor="middle" fill="#94a3b8" font-size="6.5">component: () =&gt; import(…)</text>
      <text x="462" y="137" text-anchor="middle" fill="#64748b" font-size="6">প্রতি-ভিউ এক-চাংক</text>
      <text x="462" y="154" text-anchor="middle" fill="#7ee0b0" font-size="6.5">প্রথম-লোড হালকা</text>
      <text x="462" y="166" text-anchor="middle" fill="#64748b" font-size="6">গুদাম→যাত্রায়-ইঞ্জিন</text>
      <rect x="15" y="188" width="253" height="76" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="141" y="208" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">🏠 নেস্টেড-গলি</text>
      <text x="141" y="222" text-anchor="middle" fill="#94a3b8" font-size="6.5">/admin (Layout) → children: '' · users · access</text>
      <text x="141" y="236" text-anchor="middle" fill="#64748b" font-size="6">প্যারেন্টে &lt;RouterView /&gt;-জানালায় চিলড্রেন-বসা</text>
      <text x="141" y="252" text-anchor="middle" fill="#64748b" font-size="6">catch-all: /:pathMatch(.*)* → NotFound</text>
      <rect x="290" y="188" width="255" height="76" rx="10" fill="rgba(251,191,36,0.07)" stroke="#fbbf24" stroke-width="1.3"/>
      <text x="417" y="208" text-anchor="middle" fill="#fcd34d" font-size="7.5" font-weight="600">🧭 নেভিগেশন-যন্ত্র</text>
      <text x="417" y="222" text-anchor="middle" fill="#94a3b8" font-size="6.5">&lt;RouterLink :to="{name, params}"&gt; · router.push/replace</text>
      <text x="417" y="236" text-anchor="middle" fill="#64748b" font-size="6">query-সহ · useRoute() = পড়া · useRouter() = চালনা</text>
      <text x="417" y="252" text-anchor="middle" fill="#7ee0b0" font-size="6.5">LP: ম্যানিফেস্ট → addRoute (দরজা ১৪)</text>
      <line x1="97" y1="172" x2="140" y2="186" stroke="#a5b4fc" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowR13)"/>
      <line x1="279" y1="172" x2="260" y2="186" stroke="#a5b4fc" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowR13)"/>
      <line x1="462" y1="172" x2="417" y2="186" stroke="#a5b4fc" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowR13)"/>
      <text x="280" y="286" text-anchor="middle" fill="#64748b" font-size="8">পথ নকশায় লেখো, নামে ডাকো, জানালায় বসাও — দেয়ালে লেখা রাস্তা পথহারা শহর বানায়</text>
    </svg>
    <div class="diag-cap">তিন-স্তম্ভের রুট-রেকর্ড + খিলি-পথ + উপ-গলি + লেজি-চালক: শহরের সব-চলাচল এক-নকশা থেকে।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>রাস্তা-ফাঁদ:</strong> (১) পথ-স্ট্রিং হার্ডকোড (<code>to="/clients/42"</code>) — পথ-বদলে নীরব-ভাঙা লিংক; name+params ব্যবহার করো। (২) <code>:id</code>-পরিবর্তনে একই উপাদান পুনর্ব্যবহৃত হয়ে পুরনো-ডেটা দেখানো — watch(params) দিয়ে রিফেচ। (৩) সব-ভিউ স্ট্যাটিক-import — প্রথম-বান্ডেল ফুলে-ওঠে; রুটে লেজি-ছাঁচ অভ্যাস করো।</div></div>
  <div class="secret-box">🗺️ রুট = path+name+component: নামে-ডাকো, খিলিতে-গভীরে-যাও, জানালায়-বসাও, লেজিতে-হালকা-থাকো। / Declare routes once, navigate by name, link deep, load lazily.</div>`,
  senior: {
    title: "Router Card",
    body: `<p><strong>বাঁধা</strong>: createRouter + createWebHistory। <strong>রেকর্ড</strong>: path/name/component(লেজি <code>() =&gt; import</code>)/meta। <strong>ডায়নামিক</strong>: <code>:id</code> (+regex, optional <code>?</code>); প্যারাম-বদলে watch→রিফেচ। <strong>নেস্টেড</strong>: children + প্যারেন্ট <code>&lt;RouterView /&gt;</code>। <strong>জাল</strong>: <code>/:pathMatch(.*)*</code>। <strong>নেভিগেশন</strong>: RouterLink(:to={name,params}) · push/replace/query। <strong>API</strong>: useRoute(পড়া)/useRouter(চালনা)। <strong>LP</strong>: স্ট্যাটিক-বীজ + ম্যানিফেস্ট→addRoute।</p>`
  }
});

doors.push({
  num: 14,
  icon: "🛡️",
  color: "#818cf8",
  name: "পথরক্ষকের শৃঙ্খল",
  subtitle: "The Gate-Chain — Navigation Guards",
  tech: "beforeEach global guard, meta-driven gating (public/roles/feature), order of checks, lazy hydration, role→dashboard map",
  spirit: "মীযান-নগরীর ফটক — the weighed gate: no pass, no passage",
  secret: "গার্ড-শৃঙ্খল ক্রমে চলে: প্রথমে পরিচয় (auth), তারপর রোল, তারপর ফিচার — প্রতিটি ধাপ আগেরটার ওপর দাঁড়ায়; meta-তে চাহিদা, গার্ডে বিচার।",
  recall: {
    q: "গার্ডে রোল-চেকের আগে কেন auth-স্থির করা দরকার?",
    qen: "Why settle auth before role checks in the guard?",
    a: "রিফ্রেশে প্রথম-নেভিগেশন isAuthenticated এখনো-মিথ্যা হতে পারে (fetchUser চলমান) — তখন রোল-ফাঁকা, সব-গেট বন্ধ-দেখাবে; প্রথমে সেশন-পুনরুদ্ধার (await), তারপর বিচার — LP-গার্ডের শিক্ষা।",
    aen: "On refresh the first navigation may run before fetchUser settles — settle the session first, then judge roles."
  },
  story: `<p class="scene-setting">চৌদ্দ নম্বর ঘর শহরের <strong>প্রধান-ফটক</strong> — তিনটা ধাপে ধাপে উঁচু তোরণ। ফটক-রক্ষক <strong>বাবর</strong> — কাঁধে সিরিয়াল-খাতা, হাতে
  তিন-স্তরের পাস-যন্ত্র। তিনি বলেন — <strong>"প্রতিটি পথচারী তিন তোরণে যায়। প্রথম তোরণ — পরিচয়: সেশন-মোহর আছে কি? (public-পথ ছাড়া)। দ্বিতীয় —
  পদমর্যাদা: এই পথে কোন কোন রোল ঢুকতে পারে? তৃতীয় — অনুমতি-পত্র: এই ব্যবহারকারীর কাছে নির্দিষ্ট ফিচার-চাবি আছে কি? একটি তোরণ বাদ দিলে
  শহরে ঢুকবে, কিন্তু শহর আর শহর থাকবে না।"</strong> বাবরের খাতায় প্রতিটি পথের পাশে চাহিদা-নোট (<code>meta</code>): <code>public</code>,
  <code>allowedRoles</code>, <code>requiresFeature</code> — বিচার ফটকে, চাহিদা নকশায়। তারপর তিনি দেখান চাতুরী-ধরা-পাতা: কেউ রোল-টোপ পার হয়ে
  ফিচারবিহীন-পথে ঢুকতে চায় — তৃতীয় তোরণ তাকে থামায় (defense-in-depth)। আর যার কোনো-ই অনুমতি নেই তাকে তার নিজের ড্যাশবোর্ডে ফেরত পাঠানো হয় —
  রোল-মানচিত্র বলে দেয় কার ঘর কোথায়।</p>
  <p class="scene-setting en">Room fourteen is the city's <strong>main gate</strong> — three arches rising in steps.
  Gate-keeper <strong>Babur</strong> — a serial-ledger on his shoulder, a three-tier pass-machine in hand. He says —
  <strong>"every traveler passes three arches. First — identity: is the session seal present? (save public paths).
  Second — station: which roles may enter this path? Third — the permit: does THIS user hold the specific feature-key?
  Skip one arch and the city is entered — but the city stops being a city."</strong> Babur's ledger carries a
  requirement-note beside every path (<code>meta</code>): <code>public</code>, <code>allowedRoles</code>,
  <code>requiresFeature</code> — judgment at the gate, requirements on the map. Then the trick-catching mat: someone
  passes the role-bait toward a featureless path — the third arch stops them (defense in depth). And one with no
  permit at all is returned to their own dashboard — the role-map says whose room is where.</p>
  <div class="code-block">গার্ড-শাস্ত্র — LP-র প্রকৃত শৃঙ্খল (router/guards.ts-ছায়া)

মেটা-চাহিদা (নকশায়-লেখা, ফটকে-বিচার):
  declare module 'vue-router' {
    interface RouteMeta {
      public?: boolean
      allowedRoles?: UserRole[]
      requiresFeature?: string
      hydrateFeatures?: boolean   // ঢুকতে-দাও, স্টোর-ভরো
      title?: string
    }
  }

শৃঙ্খল — তিন-তোরণ beforeEach:
  export function setupGuards(router: Router): void {
    router.beforeEach(async (to, _from, next) =&gt; {
      const auth = useAuthStore()

      // ⓪ প্রথম-নেভিগেশনে ম্যানিফেস্ট-রুট রেজিস্টার +
      //    পুনঃসমাধান (auth-স্থিরের পরেই!)
      …

      // ① তোরণ-এক — পরিচিতি:
      if (!to.meta.public &amp;&amp; !auth.isAuthenticated) {
        // প্রথম-বার: fetchUser-স্থির না-হলে রোল-ফাঁকা
        await auth.restore()      // সেশন-পুনরুদ্ধার-প্রথম
        if (!auth.isAuthenticated)
          return next({ name: 'login',
                        query: { next: to.fullPath } })
      }

      // ② তোরণ-দুই — পদমর্যাদা (ইউনিয়ন-বিচার):
      if (to.meta.allowedRoles?.length) {
        const roles = auth.userRoles   // Set&lt;UserRole&gt;
        const passes = to.meta.allowedRoles
          .some((r) =&gt; roles.has(r))
        if (!passes) {
          toast.error('এই পথে প্রবেশাধিকার নেই')
          return next({ name: 'forbidden' })
        }
      }

      // ③ তোরণ-তিন — অনুমতি-পত্র (গভীর-প্রতিরক্ষা):
      if (to.meta.requiresFeature) {
        const features = useFeaturesStore()
        if (!features.hydrated)
          await features.hydrate()     // ঢুকার-আগে-ভরা
        if (!resolveFeature(to.meta.requiresFeature))
          return next({ name: 'forbidden' })
      } else if (to.meta.hydrateFeatures) {
        // ড্যাশবোর্ড-জাত: বিচার-নেই, ভরা-আছে
        await useFeaturesStore().hydrate().catch(() =&gt; {})
      }
      next()   // ✓ তিন-তোরণ পার
    })
  }

রোল→ঘর-মানচিত্র (ভুল-পথের-মানুষ ফেরত):
  const roleDashboardMap = {
    admin: 'admin-dashboard',
    timesheet_processor: 'timesheet-processor-dashboard',
    data_processor: 'data-processor-dashboard',
    invoice_reviewer: 'invoice-reviewer-dashboard',
    payment_processor: 'payment-processor-dashboard',
    client_manager: 'admin-client-directory',
  }
  export function getDashboardForRole(role) {
    return roleDashboardMap[role] || 'login'
  }

গার্ড-পরিবার (জ্ঞাতব্য):
  · beforeEach — বিশ্ব-ফটক (এই-শাস্ত্রের ঘর)
  · beforeResolve — সব-অ্যাসিঙ্ক-শেষে, চূড়ান্ত-মুহূর্ত
  · রুট-স্তরে: beforeEnter (এক-পথের বিশেষ-শর্ত)
  · উপাদানে: beforeRouteEnter/Update/Leave
    (ফর্ম-অসংরক্ষিত-সাবধান: beforeRouteLeave-এ
    confirm — দরজা ১৬-এ ব্যবহার)
  · afterEach — শিরোনাম-বসানো/টেলিমেট্রি

ক্রমের-শপথ (কেন-এই-সাজ):
  auth → roles → feature — প্রতিটি ধাপ
  আগেরটার-ওপর-দাঁড়ায়; উল্টালে রোল-বিচার
  ফাঁকা-সেটে, ফিচার-বিচার অজানা-স্টোরে —
  সব-পথ-বন্ধ বা সব-পথ-খোলা, দুই-ই বিপর্যয়</div>
  <div class="verse">ফটকের-মীজান: "প্রবেশ করো তার দরজা দিয়ে সিজদাকারী হয়ে" নয় বরং নগর-আয়াতের শৃঙ্খলা (২:৫৮-এর ভাব) — নির্ধারিত-দরজা, নির্ধারিত-ভঙ্গি; অন্য-পথের-লোভ অবাধ্যতা। বাবরের তিন-তোরণ সেই নির্ধারিত-দরজার পাহারা: পরিচিতি-পদমর্যাদা-অনুমতি — প্রতিটি তোরণ এক-আয়াতের মতো স্পষ্ট, কেউ একা যথেষ্ট নয়, সব-মিলে শহরের-মর্যাদা। যে ফটক সবাইকে সব-পথ দেয়, সে ফটক নয় — ফাঁকা-জায়গা; আর যে নিজের-পথভুলে-অন্যের-পথে পাঠায়, সে মানচিত্র নয় — বিভ্রান্তি।</div>
  <div class="diagram">
    <div class="diag-title">Gate-Chain — Three Arches in Order</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowG14" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
      <path d="M20,180 C120,60 440,60 540,180" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 4"/>
      <rect x="25" y="120" width="150" height="88" rx="11" fill="rgba(66,184,131,0.09)" stroke="#42b883" stroke-width="1.5"/>
      <text x="100" y="142" text-anchor="middle" fill="#7ee0b0" font-size="8.5" font-weight="700">① পরিচয়-তোরণ</text>
      <text x="100" y="157" text-anchor="middle" fill="#94a3b8" font-size="6.5">meta.public? · isAuthenticated</text>
      <text x="100" y="170" text-anchor="middle" fill="#64748b" font-size="6">restore() প্রথমে — রোল-ফাঁকা-রোধ</text>
      <text x="100" y="184" text-anchor="middle" fill="#fbbf24" font-size="6.5">না-হলে → login (?next=পথ)</text>
      <text x="100" y="200" text-anchor="middle" fill="#64748b" font-size="6">রিফ্রেশ-প্রথম-নেভ এখানেই-স্থির</text>
      <rect x="205" y="120" width="150" height="88" rx="11" fill="rgba(129,140,248,0.09)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="280" y="142" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">② পদমর্যাদা-তোরণ</text>
      <text x="280" y="157" text-anchor="middle" fill="#94a3b8" font-size="6.5">meta.allowedRoles.some(…)</text>
      <text x="280" y="170" text-anchor="middle" fill="#64748b" font-size="6">Set&lt;UserRole&gt;-ইউনিয়ন-বিচার</text>
      <text x="280" y="184" text-anchor="middle" fill="#fbbf24" font-size="6.5">ব্যর্থ → forbidden + টোস্ট</text>
      <text x="280" y="200" text-anchor="middle" fill="#64748b" font-size="6">বহু-রোল-ব্যবহারকারী: যেকোনো-এক-মিললেই</text>
      <rect x="385" y="120" width="150" height="88" rx="11" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="460" y="142" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">③ অনুমতি-তোরণ</text>
      <text x="460" y="157" text-anchor="middle" fill="#94a3b8" font-size="6.5">meta.requiresFeature → resolveFeature</text>
      <text x="460" y="170" text-anchor="middle" fill="#64748b" font-size="6">hydrate() আগে — স্টোর-ভরা-নিশ্চিত</text>
      <text x="460" y="184" text-anchor="middle" fill="#fbbf24" font-size="6.5">গভীর-প্রতিরক্ষা: রোল-সঠিক+ফিচার-নেই=থামো</text>
      <text x="460" y="200" text-anchor="middle" fill="#64748b" font-size="6">hydrateFeatures: বিচার-নেই, ভরা-আছে</text>
      <line x1="175" y1="150" x2="203" y2="150" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#arrowG14)"/>
      <line x1="355" y1="150" x2="383" y2="150" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#arrowG14)"/>
      <text x="280" y="232" text-anchor="middle" fill="#7ee0b0" font-size="8.5" font-weight="700">✓ তিন-তোরণ পার → next() — ভুল-পথের-মানুষ roleDashboardMap-এ নিজ-ঘরে</text>
      <rect x="15" y="248" width="530" height="36" rx="9" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="263" text-anchor="middle" fill="#cbd5e1" font-size="7">গার্ড-পরিবার: beforeEach (বিশ্ব) · beforeResolve (চূড়ান্ত) · beforeEnter (এক-পথ) · beforeRouteLeave (ফর্ম-সাবধান — দরজা ১৬)</text>
      <text x="280" y="277" text-anchor="middle" fill="#64748b" font-size="6.5">ক্রমের-শপথ: auth → roles → feature — উল্টালে ফাঁকা-সেটে-বিচার, দুই-ই বিপর্যয়</text>
      <text x="280" y="296" text-anchor="middle" fill="#64748b" font-size="8">প্রতিটি তোরণ এক-আয়াতের-মতো স্পষ্ট — একা কেউ যথেষ্ট নয়, সব-মিলে শহরের-মর্যাদা</text>
    </svg>
    <div class="diag-cap">চাহিদা meta-তে, বিচার ফটকে, ক্রম অলঙ্ঘনীয় — পরিচয়, পদমর্যাদা, অনুমতি: তিন তোরণ পার হলে তবেই শহর।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ফটক-ফাঁদ:</strong> (১) রোল-বিচার auth-স্থির-হওয়ার-আগে — রিফ্রেশে প্রথম-নেভিগেশনে সব-গেট বন্ধ-দেখায় (LP-গার্ডের মন্তব্য-শিক্ষা); restore-প্রথম। (২) ফিচার-গেট আনহাইড্রেটেড-স্টোরে — মিথ্যা-না; hydrate-প্রথম। (৩) গার্ডে পার্শ্ব-প্রভাবের-স্তূপ (টোস্ট-বন্যা) — প্রত্যেক-বিচারে নয়, ফাঁক-রিটার্নে একবার।</div></div>
  <div class="secret-box">🛡️ চাহিদা meta-তে, বিচার beforeEach-তে, ক্রম অলঙ্ঘনীয়: পরিচয়→রোল→ফিচার; ভুল-পথের-মানুষ নিজ-ড্যাশবোর্ডে। / Requirements in meta, judgment in the guard, order unbroken.</div>`,
  senior: {
    title: "Guards Card",
    body: `<p><strong>শৃঙ্খল</strong>: beforeEach — ⓪ ম্যানিফেস্ট-রেজিস্টার (auth-স্থিরের-পরে) → ① public?/isAuthenticated (restore-প্রথম; না-হলে login+?next) → ② allowedRoles.some(roles.has) (Set-ইউনিয়ন; forbidden+টোস্ট) → ③ requiresFeature→resolveFeature (hydrate-প্রথম; hydrateFeatures=ভরা-নো-বিচার) → next()। <strong>ভুল-পথ</strong>: roleDashboardMap → নিজ-ড্যাশবোর্ড। <strong>পরিবার</strong>: beforeResolve/beforeEnter/beforeRouteLeave (ফর্ম)/afterEach (শিরোনাম)।</p>`
  }
});
