
doors.push({
  num: 25,
  icon: "🔐",
  color: "#14b8a6",
  name: "চতুর্থ-কাপড়: বহু-মহল-প্রাসাদ",
  subtitle: "Starter 4 — Multi-Role App (RBAC + Manifest Nav)",
  tech: "complete project: auth store + login, role/feature guards, permission component &lt;Can&gt;, dynamic menu from manifest, per-role landing",
  spirit: "চতুর্থ-রাকাত — many doors, one key-ring per person",
  secret: "বহু-রোল-অ্যাপ = তিন-খাতা: পরিচয়-খাতা (auth-store), অনুমতি-খাতা (roles∩features), মেনু-খাতা (ম্যানিফেস্ট) — &lt;Can&gt; দেয়ালে, গার্ড পথে, ল্যান্ডিং রোলে।",
  recall: {
    q: "একই-বাটন রোল-অনুযায়ী লুকানোর স্থান কোথায় — টেমপ্লেটে-নাকি-গার্ডে?",
    qen: "Where does per-role button hiding live — template or guard?",
    a: "দুই-ই, দুই-স্তরে: পথ-স্তরে গার্ড (ভুল-রোল প্রবেশই-নয়), দেয়াল-স্তরে &lt;Can&gt; বা useFeatureGate (বাটন/ট্যাব-দৃশ্যতা); শুধু-দেয়ালে-লুকালে URL-সরাসরি-ঢোকা-থাকে — গার্ড-বাধ্যতামূলক।",
    aen: "Both, layered: guards stop entry at the route; &lt;Can&gt;/useFeatureGate hides UI — URL entry needs the guard."
  },
  story: `<p class="scene-setting">পঁচিশে-ওয়ার্কশপ — <strong>বহু-মহল-প্রাসাদ</strong>: এক-ফটক, কিন্তু-ভেতরে-নানা-মহল, প্রতিটি-মহলের-নিজ-পাহারা। প্রধান-দারোগা
  <strong>বদরুল</strong> (তাঁর-বেল্টে-তিন-খাতার-চাবির-গোছা: পরিচয়, অনুমতি, মেনু)। তিনি-বলেন: <strong>"এক-ব্যবহারকারী-এক-চাবি-গোছা বহন করে। প্রবেশে
  পরিচয়-খাতা মেলাও (auth-store); প্রতিটি-মহলের-দরজায় অনুমতি-খাতার-ছাপ (গার্ড); ভেতরে-হাঁটলে মেনু-খাতায় শুধু-তার-মহলগুলোই-দেখাও (ম্যানিফেস্ট-ছাঁকনি)।
  দেয়ালের-বাটন? &lt;Can&gt;-ফলক — ছাপ-নেই-তো-বাটন-নেই।"</strong> তিনি LedgerPilot-এর-সাত-রোলের-প্রাসাদ-নকশা মেলে-ধরেন — প্রত্যেক-রোলের-নিজ-অবতরণ-ঘর (role→dashboard), আর
  প্রত্যেকের-নিজ-মেনু। <strong>"প্রাসাদ-বড়, শৃঙ্খলা-সরল — তিন-খাতাই-সব।"</strong></p>
  <p class="scene-setting en">Workshop twenty-five — the <strong>many-halled palace</strong>: one gate, many halls
  inside, each with its own guard. Chief warden <strong>Badrul</strong> (a three-ledger key-ring: identity,
  permission, menu). He says: <strong>"each user carries one key-ring. At entry, match the identity-book
  (auth-store); at every hall-door, the permission-stamp (guard); walking inside, the menu-book shows only their
  halls (manifest filter). Wall buttons? The &lt;Can&gt; tablet — no stamp, no button."</strong> He holds up
  LedgerPilot's seven-role palace-plan — each role's own landing room (role→dashboard), each their own menu.
  <strong>"the palace is large, the discipline simple — three ledgers are all."</strong></p>
  <div class="dialogue">('"এক চাবি-গোছা, তিন খাতা," বদরুল তাঁর বেল্ট থেকে চাবির গোছা খুলে দেখালেন, "পরিচয়, অনুমতি, মেনু — এই তিনটাই। বাকি সব শোভা। একবার শুধু দেয়ালের রং দিয়ে পাহারা দিয়েছিলাম; রং বদলালেই রাজত্ব বদলে গিয়েছিল।"', 'চাবির ধাতব ঠান্ডা তালুয়ে — তিন খাতার শৃঙ্খলা এবার হাতের স্মৃতি।')</div><div class="dialogue en">"One key-ring, three ledgers — identity, permission, menu. The rest is decoration. I once guarded with wall-paint alone; the paint changed, so did the reign."</div>
  <div class="dialogue">বদরুল তিন-চাবির-গোছা বাজিয়ে জিজ্ঞেস করলেন, "বলো — এক-চাবিতে তিন-তালা, কেন?" তুমি বললে, "নিরাপত্তা?" বদরুল মাথা নাড়লেন: "তিন-জনের-নিরাপত্তা। মেনু-ছাঁকনি — চোখ দেখে না; ডিপ-লিংক দিয়ে সরাসরি-রুটে ঢোকা যায়, তাই রুট-গার্ড; ভেতরে-ঢুকে বাটন-টিপলে তবু সার্ভার-যাচাই — কারণ দুই-তালা কেউ-একদিন ভুলে খোলা রাখবেই। তিন-তালার-প্রাসাদে চুরি মানে তিন-জনের-একসাথে-ঘুম — দুর্লভ। আর Can-কম্পোনেন্ট মানে দরজার-নিজ-পাহারা: প্রতিটি বাটন নিজে-জিজ্ঞেস করে আমি-কি-পারি — মা-পর্দার-ভরসায় নয়।"</div>
<div class="dialogue en">Badrul jingled the three-key ring: "Why three locks, one door?" You said: "Security?" He nodded: "Three people's security. The menu-filter — the eye sees nothing; deep-links walk straight into routes, hence the route-guard; inside, a pressed button still faces server-verification — because someone, someday, leaves two locks open. In a three-locked palace, theft means three guards asleep at once — rare. And the Can-component is each door's own guard: every button asks itself may-I — never leaning on the parent screen's memory."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ এক-তালা-প্রাসাদ</div>পারমিশন শুধু মেনু-ছাঁকনিতে — ডিপ-লিংকে সরাসরি রুটে ঢোকা যায়; ভেতরে-বাটনও খোলা।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ তিন-তালা</div>রুট-গার্ড + <code>&lt;Can&gt;</code>-কন্ট্রোল + সার্ভার-যাচাই — প্রতিটি তালা স্বতন্ত্র পরীক্ষিত।</div></div>
  <div class="code-block">স্টার্টার-৪ · বহু-রোল-প্রাসাদ — মেরু-অংশসমূহ

ফাইল-১ · রোল-জগৎ (core/auth/roles.ts):
  export const ROLES = ['admin', 'manager',
    'editor', 'viewer'] as const
  export type Role = typeof ROLES[number]
  // রোল→ফিচার-মিল (স্ট্যাটিক-ভিত্তি):
  export const ROLE_FEATURES: Record&lt;Role,
      Set&lt;string&gt;&gt; = {
    admin:  new Set(['*']),
    manager: new Set(['notes.edit',
      'notes.publish', 'reports.view']),
    editor:  new Set(['notes.edit']),
    viewer:  new Set(['reports.view']),
  }

ফাইল-২ · auth-স্টোর (দরজা ১০-ছাঁচ+ভূমিকা):
  export const useAuthStore = defineStore('auth',
    () =&gt; {
      const user = ref&lt;User | null&gt;(null)
      const isAuthenticated = computed(() =&gt; !!user)
      const roles = computed&lt;Set&lt;Role&gt;&gt;(() =&gt;
        new Set(user.value?.roles ?? []))
      const can = (feature: string) =&gt; {
        if (roles.value.has('admin')) return true
        for (const r of roles.value)
          if (ROLE_FEATURES[r]?.has(feature)) return true
        return false }
      async function login(creds) { …sessionStorage… }
      function logout() { …resetAll+postLogout… }
      return { user, isAuthenticated, roles, can,
               login, logout }
    })

ফাইল-৩ · গার্ড (দরজা ১৪-শৃঙ্খল-ছাঁচ):
  router.beforeEach(async (to) =&gt; {
    const auth = useAuthStore()
    if (!to.meta.public &amp;&amp; !auth.isAuthenticated) {
      await auth.restore()
      if (!auth.isAuthenticated)
        return { name: 'login',
                 query: { next: to.fullPath } } }
    if (to.meta.roles?.length) {
      const ok = to.meta.roles.some(r =&gt;
        auth.roles.has(r))
      if (!ok) return { name: 'forbidden' }
    }
    return true   // ✓ সরল-রিটার্ন-ছাঁচ (4-এ)
  })

ফাইল-৪ · মেনু-ম্যানিফেস্ট (app/nav):
  // সার্ভার থেকে-বা-স্ট্যাটিক (ছোট-অ্যাপ):
  export interface MenuRoute {
    path: string; label: string
    roles?: Role[]           // খালি=সবাই
    feature?: string         // বা-ফিচার-ছাপ
  }
  export const MENU: MenuRoute[] = [
    { path: '/', label: '🏠 হোম' },
    { path: '/notes', label: '📋 নোট',
      feature: 'notes.edit' },
    { path: '/reports', label: '📊 রিপোর্ট',
      feature: 'reports.view' },
    { path: '/admin', label: '⚙️ অ্যাডমিন',
      roles: ['admin'] },
  ]
  // দৃশ্যমান-মেনু (auth-computed):
  const visibleMenu = computed(() =&gt;
    MENU.filter(m =&gt;
      (!m.roles || m.roles.some(r =&gt;
         auth.roles.has(r)))
      &amp;&amp; (!m.feature || auth.can(m.feature))))

ফাইল-৫ · &lt;Can&gt;-ফলক (শেয়ার্ড-কম্পোনেন্ট):
  &lt;script setup lang="ts"&gt;
  const props = defineProps&lt;{
    feature?: string
    roles?: Role[]
  }&gt;()
  const auth = useAuthStore()
  const allowed = computed(() =&gt;
    (props.roles
      ? props.roles.some(r =&gt; auth.roles.has(r))
      : true)
    &amp;&amp; (!props.feature || auth.can(props.feature)))
  &lt;/script&gt;
  &lt;template&gt;
    &lt;slot v-if="allowed" /&gt;
  &lt;/template&gt;
  // ব্যবহার:
  // &lt;Can feature="notes.publish"&gt;
  //   &lt;button @click="publish"&gt;প্রকাশ&lt;/button&gt;
  // &lt;/Can&gt;

ফাইল-৬ · রোল→অবতরণ-ঘর:
  const LANDING: Record&lt;string, string&gt; = {
    admin: 'admin-home',
    manager: 'reports',
    editor: 'notes',
    viewer: 'reports',
  }
  // লগইন-সফলে:
  router.push(route.query.next
    ?? { name: LANDING[user.primary_role] ?? 'home' })

ফাইল-৭ · App-কাঠামো:
  &lt;nav&gt;
    &lt;RouterLink v-for="m in visibleMenu"
      :key="m.path" :to="m.path"&gt;{{ m.label }}&lt;/RouterLink&gt;
    &lt;span v-if="auth.isAuthenticated"&gt;
      {{ auth.user?.name }}
      &lt;button @click="auth.logout()"&gt;প্রস্থান&lt;/button&gt;
    &lt;/span&gt;
  &lt;/nav&gt;
  &lt;RouterView /&gt;

টেস্ট-বীজ:
  ① viewer → /notes-পথ → forbidden (গার্ড)
  ② &lt;Can feature="notes.publish"&gt; viewer-এ →
    বাটন-DOM-এ-নেই
  ③ মেনু-ছাঁকনি: editor-এ-অ্যাডমিন-লিংক-নেই
  ④ লগআউট → মেনু-সর্বনিম্ন+রুট-লগইনে</div>
  <div class="stat-grid">
  <div class="stat-card"><div class="sc-num">পরিচয়</div><div class="sc-label">auth.store · প্রবেশ</div></div>
  <div class="stat-card"><div class="sc-num">অনুমতি</div><div class="sc-label">can() · গার্ড+&lt;Can&gt;</div></div>
  <div class="stat-card"><div class="sc-num">মেনু</div><div class="sc-label">ছাঁকনি · visibleMenu</div></div>
  <div class="stat-card"><div class="sc-num">ল্যান্ডিং</div><div class="sc-label">রোল→ঘর · ?next</div></div>
</div>
  <ul class="checklist"><li>auth-স্টোর বানাও: লগইন/রোল/ফিচার-ফ্ল্যাগ; Can-কম্পোনেন্ট দিয়ে বাটন-নিয়ন্ত্রণ</li><li>৪০৩-পথ E2E: রোল-ছাড়া ব্যবহারকারী রুট+বাটন দুই-জায়গায় আটকায় — প্রমাণ করো</li><li>ডিপ-লিংক-পরীক্ষা: সুরক্ষিত-URL সরাসরি খুলে লগইন-ফেরত দেখো</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 46 (Copper Fortress — ১০ দরজা) auth/রোল/পারমিশনের গভীর নকশা — বহু-মহল প্রাসাদের নিরাপত্তা-গ্রন্থ; আর Book 54 এর LedgerPilot-বাস্তব।</div></div>
  <div class="verse">চতুর্থ-রাকাত — বহু-দরজা, ব্যক্তি-অনুযায়ী-চাবি: "প্রত্যেক-দলকে-চেনা-হবে-তাদের-নিজ-নিশানে" নয় বরং সূরা-ছায়া (৫৫:৪১-এর ভাব) — নিশানভেদে-পথ, বিশৃঙ্খলায়-নয়। বদরুলের-তিন-খাতা সেই-নিশানের-প্রাসাদ-রূপ: পরিচয়-অনুমতি-মেনু — প্রত্যেক-প্রবেশ খাতায়, প্রত্যেক-দরজা ছাপে, প্রত্যেক-দেয়াল ফলকে। যে-প্রাসাদে সবাই-সব-দরজায়-ঢোকে, সে প্রাসাদ-নয়-চত্বর; আর-যেখানে-খাতা-নেই-শুধু-দরজার-রং, সেখানে-রং-বদলালেই-রাজত্ব-বদলায়।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>প্রাসাদ-ফাঁদ:</strong> (১) শুধু-দেয়ালে-লুকানো (&lt;Can&gt;-এ-ই-সন্তুষ্ট) — URL-এ-সরাসরি-ঢুকে-পড়ে; গার্ড-স্তর-অনুপস্থিত-অমার্জনীয়। (২) রোল-তালিকা কম্পোনেন্টে-হার্ডকোড — নতুন-রোলে-শত-ফাইল-খোলা; খাতায়-রাখো, ফলকে-নয়। (৩) লগআউটে-মেনু/অনুমতি-বাসী-থাকা — পরের-লগইনে-পুরনো-মহল-দেখা; resetAll-লিভার।</div></div>
  <div class="secret-box">🔐 তিন-খাতার-প্রাসাদ: পরিচয় (auth) → অনুমতি (can/গার্ড/&lt;Can&gt;) → মেনু (ছাঁকনি); পথ ও-দেয়াল দুই-স্তরে-পাহারা, ল্যান্ডিং রোলের-ঘরে। / Identity, permission, menu — layered guard on route and wall.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ২৫-এর বহু-মহল-প্রাসাদ: অধ্যায়ের ৭-ফাইল বাঁধো, তারপর চার-টেস্ট-বীজ এই-দড়িতে পিন-করো — গার্ড-৪০৩ (ভুল-রোল-পথ-বন্ধ), &lt;Can&gt;-দেয়াল (viewer-এ-প্রকাশ-বাটন-নেই), মেনু-ছাঁকনি (editor-এ-অ্যাডমিন-লিংক-নেই), লগআউট-লিভার (মেনু-সর্বনিম্ন+রুট-লগইনে)। ছায়া-স্টোর খাটো-রূপে — আসল-প্রজেক্টে Pinia-টাইপসেফ-রূপ। / Door 25's palace: build the chapter's 7 files, then pin the four test-seeds — guard-403, Can-wall, menu-filter, logout-lever.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/core/auth/rbac.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>// তিন-খাতার-খাটো-ছায়া: পরিচয়+অনুমতি (অধ্যায়ের ফাইল-১/২)
export const ROLES = ['admin', 'manager', 'editor', 'viewer'] as const
export type Role = typeof ROLES[number]

export const ROLE_FEATURES: Record&lt;Role, Set&lt;string&gt;&gt; = {
  admin:   new Set(['*']),
  manager: new Set(['notes.edit', 'notes.publish', 'reports.view']),
  editor:  new Set(['notes.edit']),
  viewer:  new Set(['reports.view']),
}

export interface User { name: string; roles: Role[]; primary_role: Role }

// ছায়া-auth-স্টোর: আসল-প্রজেক্টে Pinia defineStore (login/logout/restore)
export function createAuthShadow() {
  let user: User | null = null
  return {
    get user() { return user },
    get isAuthenticated() { return !!user },
    get roles(): Set&lt;Role&gt; { return new Set(user?.roles ?? []) },
    can(feature: string): boolean {
      if (this.roles.has('admin')) return true
      for (const r of this.roles)
        if (ROLE_FEATURES[r]?.has(feature)) return true
      return false
    },
    login(u: User) { user = u },
    logout() { user = null },              // resetAll-লিভার — বাসী-মহল-মুক্তি
  }
}
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/app/guard.ts + nav.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import type { Role } from '../core/auth/rbac'

// ── গার্ড (অধ্যায়ের ফাইল-৩) — vue-router-নথির return-ছাঁচ:
// redirect-location ফেরাও, false-এ-বাতিল, কিছু-না-ফেরালে যাওয়া-মঞ্জুর
export interface RouteLike {
  path: string
  meta: { public?: boolean; roles?: Role[] }
}

export function decideGuard(
  to: RouteLike,
  auth: { isAuthenticated: boolean; roles: Set&lt;Role&gt; },
): boolean | { name: string; query?: Record&lt;string, string&gt; } {
  if (!to.meta.public &amp;&amp; !auth.isAuthenticated) {
    return { name: 'login', query: { next: to.path } }   // ?next-সংরক্ষণ
  }
  if (to.meta.roles?.length) {
    const ok = to.meta.roles.some(r =&gt; auth.roles.has(r))
    if (!ok) return { name: 'forbidden' }                 // ৪০৩-পথ
  }
  return true
}

// ── মেনু-খাতা (অধ্যায়ের ফাইল-৪) + ছাঁকনি
export interface MenuRoute {
  path: string; label: string
  roles?: Role[]
  feature?: string
}
export const MENU: MenuRoute[] = [
  { path: '/', label: '🏠 হোম' },
  { path: '/notes', label: '📋 নোট', feature: 'notes.edit' },
  { path: '/reports', label: '📊 রিপোর্ট', feature: 'reports.view' },
  { path: '/admin', label: '⚙️ অ্যাডমিন', roles: ['admin'] },
]
export function visibleMenu(auth: { roles: Set&lt;Role&gt;; can(f: string): boolean }) {
  return MENU.filter(m =&gt;
    (!m.roles || m.roles.some(r =&gt; auth.roles.has(r)))
    &amp;&amp; (!m.feature || auth.can(m.feature)))
}

// ── Can-ফলক-নীতি (অধ্যায়ের ফাইল-৫): বাটন নিজে-জিজ্ঞেস-করে
export function canShow(
  auth: { roles: Set&lt;Role&gt;; can(f: string): boolean },
  props: { feature?: string; roles?: Role[] },
): boolean {
  return (props.roles ? props.roles.some(r =&gt; auth.roles.has(r)) : true)
    &amp;&amp; (!props.feature || auth.can(props.feature))
}

// ── রোল→অবতরণ-ঘর (অধ্যায়ের ফাইল-৬)
export const LANDING: Record&lt;string, string&gt; = {
  admin: 'admin-home', manager: 'reports', editor: 'notes', viewer: 'reports',
}
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/features/rbac/rbac.test.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { describe, it, expect } from 'vitest'
import { createAuthShadow, type Role } from '../../core/auth/rbac'
import { decideGuard, visibleMenu, canShow, LANDING } from '../../app/guard'

describe('চতুর্থ-কাপড় · বহু-মহল-প্রাসাদ', () =&gt; {
  it('① গার্ড-৪০৩: viewer→/notes পথ-বন্ধ, অন্য-রোল-খোলা', () =&gt; {
    const auth = createAuthShadow()
    auth.login({ name: 'ভি', roles: ['viewer'], primary_role: 'viewer' })
    const r = decideGuard({ path: '/notes', meta: { roles: ['editor', 'manager'] } }, auth)
    expect(r).toEqual({ name: 'forbidden' })          // পথ-স্তরে-ই-বন্ধ
    const ok = decideGuard({ path: '/reports', meta: { roles: ['viewer'] } }, auth)
    expect(ok).toBe(true)
  })

  it('② &lt;Can&gt;-দেয়াল: viewer-এ notes.publish-বাটন-নেই', () =&gt; {
    const auth = createAuthShadow()
    auth.login({ name: 'ভি', roles: ['viewer'], primary_role: 'viewer' })
    expect(canShow(auth, { feature: 'notes.publish' })).toBe(false)   // দেয়াল-স্তর
    const ed = createAuthShadow()
    ed.login({ name: 'এ', roles: ['editor'], primary_role: 'editor' })
    expect(canShow(ed, { feature: 'notes.edit' })).toBe(true)
    expect(canShow(ed, { feature: 'notes.publish' })).toBe(false)     // editor-ও-প্রকাশ-নয়
  })

  it('③ মেনু-ছাঁকনি: editor-এ অ্যাডমিন-লিংক-নেই', () =&gt; {
    const auth = createAuthShadow()
    auth.login({ name: 'এ', roles: ['editor'], primary_role: 'editor' })
    const paths = visibleMenu(auth).map(m =&gt; m.path)
    expect(paths).toContain('/')
    expect(paths).toContain('/notes')
    expect(paths).not.toContain('/admin')             // চোখ-স্তরে-ও-বন্ধ
  })

  it('④ লগআউট-লিভার: মেনু-সর্বনিম্ন + রুট-লগইনে', () =&gt; {
    const auth = createAuthShadow()
    auth.login({ name: 'এ', roles: ['editor'], primary_role: 'editor' })
    expect(visibleMenu(auth).length).toBeGreaterThan(2)
    auth.logout()                                     // resetAll
    expect(visibleMenu(auth)).toHaveLength(1)         // শুধু-হোম
    const r = decideGuard({ path: '/notes', meta: {} }, auth)
    expect(r).toEqual({ name: 'login', query: { next: '/notes' } })   // লগইন-ফেরত
  })

  it('⑤ ল্যান্ডিং: রোল→নিজ-ঘর, ?next-প্রাধান্য', () =&gt; {
    expect(LANDING['editor']).toBe('notes')
    expect(LANDING['admin']).toBe('admin-home')
    // লগইন-সফলে: router.push(route.query.next ?? { name: LANDING[primary] })
  })
})
</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) npx vitest run — পাঁচ-টেস্ট সবুজ। (২) **তিন-তালা-প্রমাণ:** টেস্ট-① পথ (গার্ড), ② দেয়াল (&lt;Can&gt;), মেনু-ছাঁকনি ③ চোখ — তিন-স্তরেই viewer-এর /notes-বন্ধ; সার্ভার-যাচাই চতুর্থ-তালা (অধ্যায়ের-কথা)। (৩) **ভাঙো:** decideGuard-এর roles-ব্লক মুছো → টেস্ট-① লাল — ডিপ-লিংক-ঢোকা নিজের-চোখে। (৪) আসল-প্রজেক্টে: Pinia auth-store (login/logout/restore), &lt;Can&gt;-SFC (slot v-if), beforeEach-তে decideGuard (vue-router-রিটার্ন-ছাঁচ: location/false/মঞ্জুর)। Context7-নোট: vuejs.org/router — গার্ড রিডাইরেক্ট-location ফেরায়, query.next-প্যাটার্ন নথিভুত। / Tests: five green; viewer blocked at path, wall, and eye — three locks; delete the guard's roles-block and watch test 1 cry.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">Starter 4 — Three Ledgers, Layered Access</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowV25" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#6ee7b7"/></marker></defs>
      <rect x="15" y="14" width="530" height="54" rx="10" fill="rgba(52,211,153,0.07)" stroke="#22d3ee" stroke-width="1.4"/>
      <text x="280" y="34" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">🗝️ এক-ব্যবহারকারী-এক-চাবি-গোছা: পরিচয় + অনুমতি + মেনু</text>
      <text x="280" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">restore→login (auth.store) · roles∩feature (can()) · ম্যানিফেস্ট-ছাঁকনি (visibleMenu)</text>
      <rect x="15" y="84" width="165" height="110" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="97" y="104" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">📕 পরিচয়-খাতা</text>
      <text x="97" y="119" text-anchor="middle" fill="#94a3b8" font-size="6">auth.store: user/roles</text>
      <text x="97" y="132" text-anchor="middle" fill="#94a3b8" font-size="6">login/logout/restore</text>
      <text x="97" y="146" text-anchor="middle" fill="#a5b4fc" font-size="6">sessionStorage-সিন্দুক</text>
      <text x="97" y="160" text-anchor="middle" fill="#64748b" font-size="6.5">গার্ড-প্রথম-স্তর: public?.isAuthenticated</text>
      <text x="97" y="176" text-anchor="middle" fill="#64748b" font-size="6.5">logout = resetAll (বাসী-রোল-মুক্তি)</text>
      <rect x="197" y="84" width="165" height="110" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="279" y="104" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">📗 অনুমতি-খাতা</text>
      <text x="279" y="119" text-anchor="middle" fill="#94a3b8" font-size="6">ROLE_FEATURES + can(f)</text>
      <text x="279" y="132" text-anchor="middle" fill="#94a3b8" font-size="6">admin='*' সর্ব-ছাপ</text>
      <text x="279" y="146" text-anchor="middle" fill="#a5b4fc" font-size="6">গার্ড-দ্বিতীয়-স্তর: meta.roles</text>
      <text x="279" y="160" text-anchor="middle" fill="#64748b" font-size="6.5">&lt;Can feature/roles&gt;-দেয়াল-ফলক</text>
      <text x="279" y="176" text-anchor="middle" fill="#64748b" font-size="6.5">useFeatureGate-কম্পোজেবল-যমজ</text>
      <rect x="379" y="84" width="166" height="110" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="462" y="104" text-anchor="middle" fill="#fcd34d" font-size="7.5" font-weight="700">📘 মেনু-খাতা</text>
      <text x="462" y="119" text-anchor="middle" fill="#94a3b8" font-size="6">MENU: path+label+roles?/feature?</text>
      <text x="462" y="132" text-anchor="middle" fill="#94a3b8" font-size="6">visibleMenu-কম্পিউটেড-ছাঁকনি</text>
      <text x="462" y="146" text-anchor="middle" fill="#fcd34d" font-size="6">বড়-অ্যাপ: সার্ভার-ম্যানিফেস্ট</text>
      <text x="462" y="160" text-anchor="middle" fill="#64748b" font-size="6.5">component_key→ফ্রোজেন-রেজিস্ট্রি</text>
      <text x="462" y="176" text-anchor="middle" fill="#64748b" font-size="6.5">নতুন-পর্দা = উভয়-খাতায়-সারি</text>
      <line x1="180" y1="139" x2="195" y2="139" stroke="#6ee7b7" stroke-width="1.4" marker-end="url(#arrowV25)"/>
      <line x1="362" y1="139" x2="377" y2="139" stroke="#6ee7b7" stroke-width="1.4" marker-end="url(#arrowV25)"/>
      <rect x="15" y="210" width="530" height="66" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="230" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">স্তর-নিয়ম: পথ = গার্ড (ভুল-রোল-প্রবেশ-নয়) · দেয়াল = &lt;Can&gt; (বাটন-দৃশ্যতা) · মেনু = ছাঁকনি (নিজ-মহল-মাত্র)</text>
      <text x="280" y="246" text-anchor="middle" fill="#94a3b8" font-size="7">ল্যান্ডিং: LANDING[primary_role] (admin→admin-home, editor→notes…) · ?next-পথ-প্রাধান্য</text>
      <text x="280" y="262" text-anchor="middle" fill="#64748b" font-size="6.5">টেস্ট: viewer→/notes=৪০৩ · &lt;Can&gt;-এ-বাটন-নেই · editor-মেনুতে-অ্যাডমিন-নেই · লগআউট→লগইন-রুট</text>
      <text x="280" y="300" text-anchor="middle" fill="#64748b" font-size="8">প্রাসাদ-বড়, শৃঙ্খলা-সরল — তিন-খাতায় প্রতিটি-দরজা, প্রতিটি-দেয়াল, প্রতিটি-মেনু</text>
    </svg>
    <div class="diag-cap">তিন-খাতার-স্তর: পরিচয় প্রবেশে, অনুমতি পথে ও দেয়ালে, মেনু চোখে — বহু-রোলেও এক-সরল-শৃঙ্খলা।</div>
  </div>`,
  senior: {
    title: "Starter-4 Card (RBAC)",
    body: `<p><strong>খাতা</strong>: auth.store (user/roles/login/logout/restore) · ROLE_FEATURES+can(feature) · MENU+visibleMenu (রোল∩ফিচার-ছাঁকনি; বড়-অ্যাপ=সার্ভার-ম্যানিফেস্ট+রেজিস্ট্রি)। <strong>স্তর</strong>: গার্ড (public→roles) + &lt;Can feature/roles&gt; (দেয়াল) + মেনু-ছাঁকনি। <strong>ল্যান্ডিং</strong>: LANDING[role]+?next। <strong>লগআউট</strong>: resetAll। <strong>টেস্ট</strong>: ৪০৩-পথ, বাটন-অনুপস্থিতি, মেনু-ছাঁকনি, লগইন-ফেরত। <strong>ফাঁদ</strong>: পারমিশন-যাচাই শুধু মেনু-ছাঁকনিতে রাখা — ডিপ-লিংক দিয়ে সরাসরি রুটে ঢোকা যাবে; রুট-গার্ড + <code>&lt;Can&gt;</code> + সার্ভার — তিন তালা।</p>`
  }
});

doors.push({
  num: 26,
  icon: "⚡",
  color: "#10b981",
  name: "পঞ্চম-কাপড়: জীবন্ত-নদী-ঘাট",
  subtitle: "Starter 5 — Realtime App (SSE + Live Notifications)",
  tech: "complete project: notification store, SSE composable (reconnect/backoff), live feed view, unread badge, toast bridge, error boundary",
  spirit: "পঞ্চম-রাকাত — the cloth that moves while you watch",
  secret: "রিয়েলটাইম = নদী (SSE) + ঘাট (কম্পোজেবল) + দুই-জলাধার (ট্রিগার/সত্য): খবর এলে-টোস্ট+ব্যাজ+তালিকা; ছিঁড়লে-backoff-পুনঃছোঁয়া+রিফেচ; সত্য সার্ভারে।",
  recall: {
    q: "সংযোগ-ছিঁড়া-অবস্থায় পর্দা কী-দেখাবে, কী-করবে?",
    qen: "What does the screen show and do while disconnected?",
    a: "স্বচ্ছতা-দেখাবে: connected-মিথ্যা → অবস্থা-ফলক ('পুনঃসংযোগ-হচ্ছে…') + পুরনো-তালিকা (বাসী-নয়, শেষ-জানা); চলবে: backoff-পুনঃছোঁয়া, পুনঃসংযোগে fetchList (missed-মিলন); করবে-না: তালিকা-মুছা বা-ভাঙা-ডেটা-দেখানো।",
    aen: "A reconnect banner, the last-known list, backoff retry, and refetch on rejoin — never blanked or broken data."
  },
  story: `<p class="scene-setting">ছাব্বিশে-ওয়ার্কশপ — শেষ-ওয়ার্কশপ: <strong>জীবন্ত-নদী-ঘাট</strong>। এখানে-কাপড় নিজে-নিজে-বোনে-চলে: ঘাটে-বসা-কারিগর
  <strong>মাজেদা</strong> (নদী-জামালের-মেয়ে — তাঁর-কাছে-বাবার-ই-দড়ি-শিল্প, নতুন-কৌশলে)। প্রজেক্ট: <strong>লাইভ-কার্য-প্রবাহ-প্যানেল</strong> — সার্ভার থেকে
  ঘটনা-ভেসে-আসে ('নতুন-অর্ডার', 'স্ট্যাটাস-বদল'), প্যানেলে-সারি-জমে, ব্যাজ-ওঠে, টোস্ট-বাজে। মাজেদা-বলেন: <strong>"নদী-জলের-রং-দেখে-অবস্থা-জানাও
  (connected-ফলক); স্রোত-থামলে-তালিকা-মুছো-না — শেষ-জানা-সত্য-রাখো; আর-ফিরে-এলে-প্রথম-কাজ-মিসড-খবরের-গণনা-মেলানো (refetch)।"</strong> তিনি-দেখান
  এক-চতুর-ছোঁয়া: প্যানেলের-শীর্ষে <strong>এরর-বাঁধ</strong> (onErrorCaptured-ঘর) — নদীর-কোনো-ঢেউ পর্দা-ভেঙে-দিলে-সে-খবর-দেয়, পুরো-ঘাট-ডোবায়-না।</p>
  <p class="scene-setting en">Workshop twenty-six — the last workshop: the <strong>living river-ghat</strong>. Here
  the cloth weaves itself: at the ghat sits <strong>Mazeda</strong> (Nadi-Jamal's daughter — her father's rope-craft,
  new technique). Project: a <strong>live activity panel</strong> — events float up from the server ('new order',
  'status change'), rows pile on the panel, the badge rises, toasts ring. Mazeda says: <strong>"show the river's
  color as state (the connected tablet); when the current stops, don't wipe the list — keep the last known truth; and
  on return, the first task is reconciling the missed count (refetch)."</strong> One clever touch: at the panel's
  crown an <strong>error-embankment</strong> (an onErrorCaptured room) — if any wave breaks the screen, it reports
  without drowning the whole ghat.</p>
  <div class="dialogue">('"নদীর রং দেখে অবস্থা বলো," মাজেদা পানিতে আঙুল ডুবিয়ে দেখালেন, "স্রোত থামলে তালিকা মুছো না — শেষ জানা সত্য রাখো। বাবা বলতেন, নদী ফিরে এলে প্রথম কাজ মিস হওয়া খবরের গণনা মেলানো। একবার না-মিলিয়ে বসেছিলাম; তিন দিন পুরনো সংখ্যা দেখিয়েছিলাম সবাইকে।"', 'পানির স্রোতের টান আঙুল ঘিরে ওঠে — জলাধার ছাড়া নদীর ওপর দাঁড়ানো যায় না।')</div><div class="dialogue en">"Read the river's color as state — when the current stops, keep the last-known truth. Father said: on return, first reconcile the missed count."</div>
  <div class="dialogue">মাজেদা দড়ির-গিঁট ছাড়িয়ে জিজ্ঞেস করলেন, "বলো — নদী মরলে ঘাট কী করবে?" তুমি বললে, "অপেক্ষা?" মাজেদা মাথা নাড়লেন: "চুপ-অপেক্ষা মানে পচা-কাপড়। তিন-কাজ: ব্যাজ-দেখাও (সংযোগ-মরা খবর গোপন নয়), ব্যাকঅফে-আবার-ধরো (১-সেকেন্ড, ২, ৪, ৮ — ঝড়ের-মধ্যে নদীর-ঘাড়ে চেঁচানো নয়), আর পুরনো-কাপড়ে সতর্ক-ছাপ (এ-ডেটা এখন বাসি)। EventSource মরলে নিজে-থেকে সংযোগ ফেরে না — তুমি পুনঃযোগ করবে; আর onUnmounted-এ দড়ি-ছাড়া মানে ট্যাব-বন্ধের-পরও সার্ভারে ঘণ্টি-বাজা। জীবন্ত-নদীর কারিগর নদীর-মৃত্যুও সাজিয়ে রাখে।"</div>
<div class="dialogue en">Majeda untied a rope-knot: "When the river dies, what does the quay do?" You said: "Wait?" She shook her head: "Silent waiting means rotten cloth. Three works: show the badge (a dead connection is no secret), catch again with backoff (1s, 2, 4, 8 — no shouting down the river's neck mid-storm), and stamp old cloth with caution (this data is stale now). A dead EventSource doesn't reconnect itself — you re-knot; and leaving the rope tied past onUnmounted means the bell keeps ringing at the server after the tab closes. The living-river craftsman dresses even the river's death."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ চুপ-নদী</div>SSE-ভাঙলে কনসোলে-চাপা — ইউজার জানেই না সংযোগ মরেছে; পুরনো-ডেটায় সিদ্ধান্ত নেয়।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ জীবন্ত-ঘাট</div>সংযোগ-অবস্থা দৃশ্যমান (লাইভ/পুনঃসংযোগ) + ব্যাকঅফ-রিকানেক্ট — নদী থামলে ঘাট জানায়।</div></div>
  <div class="code-block">স্টার্টার-৫ · রিয়েলটাইম-ঘাট — মেরু-ফাইল

ফাইল-১ · ইভেন্ট-জগৎ (features/feed/types.ts):
  export interface FeedEvent {
    id: string; kind: 'order.new'
      | 'order.status' | 'ping'
    title: string
    payload?: Record&lt;string, unknown&gt;
    at: string
  }

ফাইল-২ · সার্ভার-প্রান্ত (Node/Express-নমুনা):
  // GET /api/feed/stream — text/event-stream
  app.get('/api/feed/stream', (req, res) =&gt; {
    res.set({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive' })
    const send = (e: FeedEvent) =&gt; res.write(
      \`id: \${e.id}\n\` +
      \`event: \${e.kind}\n\` +
      \`data: \${JSON.stringify(e)}\n\n\`)
    send({ …ping })            // প্রথম-হৃদস্পন্দন
    bus.on('feed', send)       // অভ্যন্তর-ঘটনা→নদী
    req.on('close', () =&gt;
      bus.off('feed', send))   // দড়ি-ছাড়া
  })
  · প্রতি-~২৫সে হৃদস্পন্দন-পিং —
    মধ্যবর্তী-প্রক্সি-টাইমআউট-রোধ

ফাইল-৩ · ঘাট-কম্পোজেবল (useFeedStream):
  export function useFeedStream() {
    const connected = ref(false)
    const events = ref&lt;FeedEvent[]&gt;([])
    let es: EventSource | null = null
    let retry = 0; let timer: number | undefined

    function open() {
      es = new EventSource('/api/feed/stream',
        { withCredentials: true })
      es.onopen = () =&gt; {
        connected.value = true; retry = 0
        void refetchMissed() }    // মিলন-প্রথম
      const onEvent = (ev: MessageEvent) =&gt; {
        const e = JSON.parse(ev.data)
          as FeedEvent
        events.value = [e, …events.value].slice(0, 100)
        toast.info(e.title)        // টোস্ট-সেতু
        feedStore.bumpUnread()
      }
      es.addEventListener('order.new', onEvent)
      es.addEventListener('order.status', onEvent)
      es.onerror = () =&gt; {
        connected.value = false
        es?.close()
        timer = setTimeout(open,
          Math.min(30_000, 1000 * 2 ** retry++))
      }                            // পশ্চাত-পুনঃছোঁয়া
    }
    onMounted(open)
    onBeforeUnmount(() =&gt; {
      es?.close(); clearTimeout(timer) })  // দড়ি
    return { connected, events }
  }

ফাইল-৪ · সত্য-জলাধার (feed.store — সংক্ষিপ্ত):
  const unread = ref(0)
  const items = ref&lt;FeedEvent[]&gt;([])
  async function refetchMissed() {
    const page = await feedService.list(
      { since: lastSeenId.value })
    items.value = […page.results, …items.value]
      .slice(0, 200)
    unread.value = page.unread_count  // সার্ভার-সত্য
  }

ফাইল-৫ · প্যানেল-ভিউ (FeedPanel.vue):
  &lt;script setup lang="ts"&gt;
  const { connected, events } = useFeedStream()
  const feed = useFeedStore()
  const { unread } = storeToRefs(feed)
  onErrorCaptured((err) =&gt; {
    panelError.value = getApiErrorMessage(err)
    return false     // প্রচার-থামাও — ঘাট-বাঁচাও
  })
  &lt;/script&gt;
  &lt;template&gt;
    &lt;aside data-test="feed"&gt;
      &lt;header&gt;🔔 লাইভ-প্রবাহ
        &lt;span v-if="!connected" class="warn"
          data-test="conn"&gt;
          ↻ পুনঃসংযোগ…&lt;/span&gt;
        &lt;span class="badge"
          data-test="badge"&gt;{{ unread }}&lt;/span&gt;
      &lt;/header&gt;
      &lt;p v-if="panelError" class="err"&gt;
        {{ panelError }}&lt;/p&gt;
      &lt;ul&gt;
        &lt;li v-for="e in events" :key="e.id"&gt;
          &lt;time&gt;{{ shortTime(e.at) }}&lt;/time&gt;
          {{ e.title }}
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/aside&gt;
  &lt;/template&gt;

টেস্ট-বীজ (MSW-এ SSE-নকল):
  server.use(http.get(
    '/api/feed/stream', () =&gt;
      new HttpResponse(
        'event: order.new\ndata: {…}\n\n',
        { headers: { 'Content-Type':
          'text/event-stream' } })))
  ① ইভেন্ট→সারি+ব্যাজ+টোস্ট
  ② error→connected-মিথ্যা+banner
  ③ পুনঃখোলায়-refetchMissed-কলহ (গণনা)</div>
  <div class="stat-grid">
  <div class="stat-card"><div class="sc-num">নদী</div><div class="sc-label">SSE · ট্রিগার</div></div>
  <div class="stat-card"><div class="sc-num">জলাধার</div><div class="sc-label">store · সত্য</div></div>
  <div class="stat-card"><div class="sc-num">বাঁধ</div><div class="sc-label">errorCaptured</div></div>
  <div class="stat-card"><div class="sc-num">পিং</div><div class="sc-label">~২৫সে · প্রক্সি-রোধ</div></div>
</div>
  <ul class="checklist"><li>useSse+রিকানেক্ট-ব্যাকঅফ শেষ করো; সার্ভার-বন্ধ করে পুনঃসংযোগ-প্রচেষ্টা গুনো</li><li>লাইভ-ফিড-পর্দা + সংযোগ-ব্যাজ বানাও — অবস্থা-দৃশ্যমানতা</li><li>MSW-SSE-নকল দিয়ে টেস্ট: ইভেন্ট-এলে স্টোর-আপডেট + ব্যাজ-বদল</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 35 (Bridge of Connections) SSE-প্রবাহ ও পুনঃসংযোগের ডিস্ট্রিবিউটেড-বিজ্ঞান, আর Book 37 (Web of Wires) HTTP-স্ট্রিমিং — জীবন্ত নদীর দুই তীর।</div></div>
  <div class="verse">পঞ্চম-রাকাত — চলমান-কাপড়ের-সমাপ্তি: নদী-আয়াত "উভয়-জল-প্রবাহে-তার-প্রাসাদ" নয় বরং-স্রোতের-ছায়া (৫৫:১৯-২০-এর ভাব) — দুই-জল মিশে-না, নিয়মে-বাঁধা-প্রবাহে-পাশাপাশি। মাজেদার-ঘাট সেই-নিয়মের-জীবন্ত-রূপ: নদী (ট্রিগার) আর-জলাধার (সত্য) পাশাপাশি-বয়ে-যায়, মিশে-যায়-না; স্রোত-ছিঁড়লে-নদী-থামে, জলাধার-থাকে — আর-ফিরে-এলে-গণনায়-মিলে। যে-ঘাট নদীর-ই-জলে-সত্য-গড়ে, সে-ঘাটে-ঝড়ে-সব-ভাসে; জলাধার-যার-আছে, তার-ঝড়-শুধু-বিরতি-মাত্র।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ঘাট-ফাঁদ:</strong> (১) পিং-বিহীন-স্রোত — মধ্যবর্তী-প্রক্সি ~৩০-৬০সে-তে নীরবে-কেটে-দেয়; ~২৫সে-হৃদস্পন্দন। (২) ছিঁড়ায়-তালিকা-খালি-করা — ব্যবহারকারী-মনে-করে-সব-হারা; শেষ-জানা-রাখো+ফলক। (৩) unmount-এ-close-বিস্মৃত — প্রস্থানের-পরেও-ইভেন্ট-জমা+মেমরি; দড়ি-ছাড়া-অপরিহার্য।</div></div>
  <div class="secret-box">⚡ রিয়েলটাইম-ঘাট: নদী (SSE+পিং+backoff) ট্রিগার-বয়ে, জলাধার (store+refetch) সত্য-রাখে, বাঁধ (errorCaptured) ঘাট-বাঁচায় — খবর জীবন্ত, ডেটা-নোয়ানো নয়। / River triggers, reservoir holds truth, embankment guards.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ২৬-এর জীবন্ত-ঘাট: অধ্যায়ের ৫-ফাইল বাঁধো, তারপর টেস্ট-বীজ **নথিভুত-পথে** পিন-করো — MSW-র ডেডিকেটেড sse() হ্যান্ডলার (client.send — http.get+raw-body নয়) দিয়ে নকল-নদী; তিন-টেস্ট: ইভেন্ট→সারি+ব্যাজ, error→সংযোগ-মিথ্যা, পুনঃখোলায়-মিলন-কল। ⚠ jsdom-এ EventSource-নেই — setup-এ পলিফিল বাঁধো (নিচে-দেখানো)। / Door 26's living ghat: build the chapter's 5 files, then pin the seeds the documented way — MSW's dedicated sse() handler; three tests. jsdom lacks EventSource — polyfill shown.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/tests/setup.ts (EventSource-পলিফিল)</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>// npm i -D event-source-polyfill
import { EventSourcePolyfill } from 'event-source-polyfill'

// jsdom-এ EventSource-বিল্ট-ইন-নয় — পলিফিল-সুতো বাঁধো,
// তবেই MSW-র sse()-হ্যান্ডলার ধরা-দেবে
globalThis.EventSource = EventSourcePolyfill as unknown as typeof EventSource

// (setup.ts-এ MSW-জীবনচক্রও: listen/resetHandlers/close)
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/tests/msw-feed.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { setupServer } from 'msw/node'
import { sse, http, HttpResponse } from 'msw'

// নকল-নদী: sse()-হ্যান্ডলার — client.send দিয়ে ঘটনা-পাঠাও (mswjs.io-নথি-পথ)
export const feedState = { sent: 0, refetches: 0 }
export function resetFeedState() { feedState.sent = 0; feedState.refetches = 0 }

type SendFn = (e: { id: string; event: string; data: string }) =&gt; void
let pushToClient: SendFn | null = null

export const feedHandlers = [
  sse('*/api/feed/stream', ({ client }) =&gt; {
    client.send({ id: 'hi-1', event: 'ping', data: JSON.stringify({ kind: 'ping', title: 'ঘাট-চালু' }) })
    pushToClient = (e) => { feedState.sent++; client.send(e) }   // টেস্ট-হাতে-ঢেউ
  }),
  http.get('*/api/feed/events/', () =&gt; {
    feedState.refetches++                      // মিলন-কল-গণনা (জলাধার-সত্য)
    return HttpResponse.json({ results: [], unread_count: 2 })
  }),
]

// টেস্ট-থেকে-ঢেউ-পাঠাও: নদীতে-ই-ঘটনা-ফেলার-ছায়া
export function emitFeed(id: string, title: string) {
  pushToClient?.({ id, event: 'order.new', data: JSON.stringify({ id, kind: 'order.new', title, at: new Date().toISOString() }) })
}

export const server = setupServer(...feedHandlers)
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/features/feed/useFeedStream.ts (অধ্যায়ের-ফাইল-৩-ছায়া)</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { ref, onMounted, onBeforeUnmount } from 'vue'

export interface FeedEvent { id: string; kind: string; title: string; at: string }

// জলাধার-ছায়া: আসল-প্রজেক্টে Pinia-feedStore (items+unread+refetchMissed)
export function useFeedStream() {
  const connected = ref(false)
  const events = ref&lt;FeedEvent[]&gt;([])
  const unread = ref(0)
  const toastLog: string[] = []                  // টোস্ট-সেতুর-ছায়া
  let es: EventSource | null = null
  let retry = 0
  let timer: number | undefined

  async function refetchMissed() {               // মিলন-প্রথম — সার্ভার-সত্য
    const res = await fetch('/api/feed/events/')
    const page = await res.json()
    unread.value = page.unread_count
  }

  function onEvent(kind: string) {
    return (ev: MessageEvent) =&gt; {
      const e = JSON.parse(ev.data) as FeedEvent
      events.value = [e, ...events.value].slice(0, 100)   // শীর্ষ-১০০-ক্যাপ
      toastLog.push(e.title)                     // toast.info(e.title)-ছায়া
      unread.value++
    }
  }

  function open() {
    es = new EventSource('/api/feed/stream', { withCredentials: true })
    es.onopen = () =&gt; { connected.value = true; retry = 0; void refetchMissed() }
    es.addEventListener('ping', onEvent('ping'))
    es.addEventListener('order.new', onEvent('order.new'))
    es.addEventListener('order.status', onEvent('order.status'))
    es.onerror = () =&gt; {                         // স্রোত-ছিঁড়লে
      connected.value = false
      es?.close()
      timer = setTimeout(open, Math.min(30_000, 1000 * 2 ** retry++))
    }
  }

  onMounted(open)
  onBeforeUnmount(() =&gt; { clearTimeout(timer); es?.close() })   // দড়ি-ছাড়া

  return { connected, events, unread, toastLog, refetchMissed }
}
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/features/feed/feed.test.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { describe, it, expect, beforeAll, afterEach, afterAll, vi } from 'vitest'
import { effectScope, nextTick } from 'vue'
import { server, emitFeed, feedState, resetFeedState } from '../../tests/msw-feed'
import { useFeedStream } from './useFeedStream'

beforeAll(() =&gt; server.listen())
afterEach(() =&gt; { server.resetHandlers(); resetFeedState() })
afterAll(() =&gt; server.close())

// onMounted-কে-ছাড়িয়ে-সরাসরি-খোলা: scope-run-ই-যথেষ্ট (open-কে-পরীক্ষার-হাতে)
async function boot() {
  const scope = effectScope()
  const api = scope.run(() =&gt; useFeedStream())!
  await new Promise(r =&gt; setTimeout(r, 50))      // নদী-খোলার-শ্বাস
  return { api, scope }
}

describe('পঞ্চম-কাপড় · জীবন্ত-নদী-ঘাট', () =&gt; {
  it('① ইভেন্ট→সারি+ব্যাজ+টোস্ট-সেতু', async () =&gt; {
    const { api, scope } = await boot()
    expect(api.connected.value).toBe(true)       // নদী-বাঁচা (onopen)
    emitFeed('e-1', 'নতুন-অর্ডার #১০১')
    await new Promise(r =&gt; setTimeout(r, 50))
    expect(api.events.value).toHaveLength(1)     // সারি-জমা
    expect(api.events.value[0]!.title).toContain('অর্ডার')
    expect(api.toastLog).toContain('নতুন-অর্ডার #১০১')
    scope.stop()                                  // দড়ি-ছাড়া
  })

  it('② পুনঃখোলায়-মিলন: onopen→refetchMissed-কল', async () =&gt; {
    const { api, scope } = await boot()
    expect(feedState.refetches).toBeGreaterThanOrEqual(1)   // সার্ভার-সত্য-গণনা
    expect(api.unread.value).toBe(2)              // জলাধার-মিলন
    scope.stop()
  })

  it('③ দড়ি-ছাড়া: scope.stop()-এর-পরে-ঢেউ-নিষ্ফল', async () =&gt; {
    const { api, scope } = await boot()
    scope.stop()                                  // unmount-ছায়া
    const before = api.events.value.length
    emitFeed('e-2', 'পরের-ঢেউ')
    await new Promise(r =&gt; setTimeout(r, 50))
    expect(api.events.value.length).toBe(before)  // মৃত-ঘাটে-জমা-নয়
  })
})
</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) npx vitest run — তিন-টেস্ট সবুজ (setup.ts-পলিফিল-ছাড়া-প্রথম-রান-ই-শিখাবে কেন)। (২) **নথি-পথ-বনাম-ছায়া:** অধ্যায়ের-বীজ http.get+raw-body দেখালেও mswjs.io-র নথিভুত-পথ = sse() হ্যান্ডলার + client.send({event, data, id}) — স্টুডিও সেটাই; ছায়া-পথ প্রায়ই EventSource-কে ধরে-না। (৩) **ভাঙো:** onBeforeUnmount-এর es?.close() তুলে-দাও → টেস্ট-③-এর-গণনা বদলে-যেতে-পারে (পলিফিল-ভেদে) — আসল-প্রমাণ ব্রাউজারে: ট্যাব-বন্ধের-পরেও নেটওয়ার্ক-ট্যাবে stream-লাল-না-হওয়া = দড়ি-ছাড়া-বিস্মৃত। (৪) আসল-প্রজেক্টে: Pinia-feedStore + toast.info + onErrorCaptured-বাঁধ (অধ্যায়ের ফাইল-৪/৫)। Context7-নোট: mswjs.io — sse(url, resolver) + client.send({event, data, id}) নথিভুত; নামকরা-ইভেন্ট addEventListener-এ-ধরা। / Tests: three green; the documented sse() handler over the raw-body sketch; break the rope-release and watch.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">Starter 5 — The Living Ghat: River + Reservoir + Embankment</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowW26" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#6ee7b7"/></marker></defs>
      <rect x="15" y="14" width="530" height="52" rx="10" fill="rgba(52,211,153,0.08)" stroke="#22d3ee" stroke-width="1.4"/>
      <text x="280" y="34" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">🌊 দুই-জল-নিয়ম: নদী = ট্রিগার (SSE) · জলাধার = সত্য (সার্ভার-ডেটা+refetch)</text>
      <text x="280" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">server: text/event-stream + ~২৫সে-পিং · client: EventSource(withCredentials) + নামকরা-ইভেন্ট</text>
      <rect x="15" y="82" width="165" height="112" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="97" y="102" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">🌊 ঘাট-কম্পোজেবল</text>
      <text x="97" y="117" text-anchor="middle" fill="#94a3b8" font-size="6">useFeedStream()</text>
      <text x="97" y="130" text-anchor="middle" fill="#94a3b8" font-size="6">onopen: retry=0+মিলন</text>
      <text x="97" y="144" text-anchor="middle" fill="#a5b4fc" font-size="6">onerror→close+backoff</text>
      <text x="97" y="157" text-anchor="middle" fill="#94a3b8" font-size="6">1s×2^n → cap 30s</text>
      <text x="97" y="171" text-anchor="middle" fill="#64748b" font-size="6.5">onBeforeUnmount: close+clear</text>
      <text x="97" y="184" text-anchor="middle" fill="#64748b" font-size="6.5">events-শীর্ষ-১০০-ক্যাপ</text>
      <rect x="197" y="82" width="165" height="112" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="279" y="102" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">🫙 জলাধার (store)</text>
      <text x="279" y="117" text-anchor="middle" fill="#94a3b8" font-size="6">items + unread</text>
      <text x="279" y="130" text-anchor="middle" fill="#94a3b8" font-size="6">refetchMissed({since})</text>
      <text x="279" y="144" text-anchor="middle" fill="#a5b4fc" font-size="6">সার্ভার-গণনাই-সত্য</text>
      <text x="279" y="157" text-anchor="middle" fill="#64748b" font-size="6.5">ব্যাজ = unread-রেফ</text>
      <text x="279" y="171" text-anchor="middle" fill="#64748b" font-size="6.5">টোস্ট-সেতু: toast.info(title)</text>
      <text x="279" y="184" text-anchor="middle" fill="#64748b" font-size="6.5">পুনঃসংযোগে-প্রথম-মিলন</text>
      <rect x="379" y="82" width="166" height="112" rx="10" fill="rgba(248,113,113,0.06)" stroke="#f87171" stroke-width="1.4"/>
      <text x="462" y="102" text-anchor="middle" fill="#f87171" font-size="7.5" font-weight="700">🧱 এরর-বাঁধ</text>
      <text x="462" y="117" text-anchor="middle" fill="#94a3b8" font-size="6">onErrorCaptured</text>
      <text x="462" y="130" text-anchor="middle" fill="#94a3b8" font-size="6">panelError + return false</text>
      <text x="462" y="144" text-anchor="middle" fill="#f87171" font-size="6">এক-ঢেউ-ভাঙলে-ঘাট-ডোবে-না</text>
      <text x="462" y="157" text-anchor="middle" fill="#64748b" font-size="6.5">ছোট-ErrorPanel-ফলব্যাক</text>
      <text x="462" y="171" text-anchor="middle" fill="#64748b" font-size="6.5">দরজা ১২-Teleport-এ-সাজানো</text>
      <text x="462" y="184" text-anchor="middle" fill="#64748b" font-size="6.5">ক্রমের-গল্প দরজা ৮-এ</text>
      <line x1="180" y1="138" x2="195" y2="138" stroke="#6ee7b7" stroke-width="1.4" marker-end="url(#arrowW26)"/>
      <line x1="362" y1="138" x2="377" y2="138" stroke="#6ee7b7" stroke-width="1.4" marker-end="url(#arrowW26)"/>
      <rect x="15" y="210" width="530" height="66" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="230" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">ছিঁড়া-অবস্থার-চুক্তি: connected=false → '↻ পুনঃসংযোগ…'-ফলক · তালিকা = শেষ-জানা (মুছি-না) · ব্যাজ = শেষ-গণনা</text>
      <text x="280" y="246" text-anchor="middle" fill="#94a3b8" font-size="7">ফিরে-এলে: onopen → refetchMissed (since=lastSeenId) → unread-সত্যে-মিলন → প্যানেল-সদ্যতম</text>
      <text x="280" y="262" text-anchor="middle" fill="#64748b" font-size="6.5">টেস্ট: MSW-SSE-নকল (text/event-stream) · ইভেন্ট→সারি+ব্যাজ+টোস্ট · error→banner · পুনঃখোলা→মিলন-কল</text>
      <text x="280" y="300" text-anchor="middle" fill="#64748b" font-size="8">নদী-জলাধার-পাশাপাশি, বাঁধে-ঘাট-রক্ষিত — কাপড় নিজে-বোনে, নিয়মে-বাঁধা-প্রবাহে</text>
    </svg>
    <div class="diag-cap">ঘাটের-তিন-অঙ্গ: নদী-কম্পোজেবল (backoff+দড়ি), জলাধার-স্টোর (সত্য+মিলন), বাঁধ-boundary — জীবন্ত-কাপড় অবিচ্ছিন্ন-শৃঙ্খলায়।</div>
  </div>`,
  senior: {
    title: "Starter-5 Card (Realtime)",
    body: `<p><strong>সার্ভার</strong>: GET /stream — text/event-stream + নামকরা-ইভেন্ট + ~২৫সে-পিং + close-শ্রোতা। <strong>ক্লায়েন্ট</strong>: useFeedStream — EventSource(withCredentials); onopen(retry=0+refetchMissed) · নাম-শ্রোতা→সারি(১০০-ক্যাপ)+টোস্ট+ব্যাজ · onerror→close+backoff(1s×2^n, 30s-cap) · onBeforeUnmount→close। <strong>স্টোর</strong>: items+unread; refetchMissed({since}) — সার্ভার-গণনা। <strong>ভিউ</strong>: connected-ফলক+badge+তালিকা; onErrorCaptured→panelError+return-false। <strong>টেস্ট</strong>: MSW-SSE-নকল। <strong>ফাঁদ</strong>: SSE-ত্রুটি কনসোলে-চাপা দিয়ে ইউজারকে "সংযোগ-চুপ" রাখা — onErrorCaptured→panelError দেখাও; আর রিকানেক্ট-গণনাশূন্য অসীম-লুপ।</p>`
  }
});
