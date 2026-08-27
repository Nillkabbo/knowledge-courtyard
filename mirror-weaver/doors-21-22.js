
doors.push({
  num: 21,
  icon: "🏛️",
  color: "#6366f1",
  name: "শহরের-বিধান",
  subtitle: "The City Charter — Architecture Laws",
  tech: "layer boundaries lint-enforced, registry pattern, BE-driven nav (manifest), error normalization as law, silent-failure ban",
  spirit: "শরীয়তুল-মদীনা — the city charter: the law that outlives mayors",
  secret: "প্রতিটি-শহরের-তিন-আইন: নির্ভরতা-একমুখ (লিন্টে-জোর), নাম-রেজিস্ট্রিতে (নতুন-পর্দা=নতুন-সারি), নীরবতা-নিষেধ (catch কখনো-খালি-নয়)।",
  recall: {
    q: "নতুন-পর্দা যোগ করলে কোন-তিন-জায়গায় সারি লাগবে (নব-নকশায়)?",
    qen: "Three registers touched when adding a view?",
    a: "রুট-নকশায় (স্ট্যাটিক-বীজ বা ম্যানিফেস্ট-উৎস), নেভ-তালিকায় (মেনু-দৃশ্যমানতা), আর রেজিস্ট্রিতে (component_key→লোডার — বে-ম্যানিফেস্ট-শহরে ফ্রোজেন-মানচিত্র); কম্পোজেবল-সার্ভিস-টেস্ট তার-পরে।",
    aen: "Route map, nav/menu list, and the component registry — then composables/services/tests follow."
  },
  story: `<p class="scene-setting">একুশ নম্বর ঘর শহরের-পৌরসভা — দেয়ালে খোদাই-করা <strong>তিন-আইনের-ফলক</strong>। মেয়র-প্রবীণ <strong>কাজী আনোয়ার</strong> — তাঁর হাতে
  পাথর-ছেনি, কাঁধে-কাপড়ে-পুরনো-ফলকের-ধূলি। তিনি ছেনি-ধরে পড়ে-শোনান: <strong>"আইন-এক — স্রোত একমুখে-বয়"</strong> (features পরস্পরে-ঢুকবে-না, কাঠামো
  দেয়ালে-নয়-লিন্টে-জোর)। <strong>"আইন-দুই — নাম খাতায়-লেখো, দেয়ালে-নয়"</strong> (নতুন-পর্দার-নাম রেজিস্ট্রি+নকশায়; ভাসমান-স্ট্রিং-নয়)। <strong>"আইন-তিন —
  নীরবতা অপরাধ"</strong> (খালি-catch, নিঃশব্দ-ব্যর্থতা নিষিদ্ধ — ব্যর্থতা দেখাও-বা-লগ-করো)। তারপর তিনি LedgerPilot-এর-সংবিধান-বই মেলে-ধরেন: সার্ভার-পাঠানো
  <strong>ন্যাভ-ম্যানিফেস্ট</strong> — কোথায়-কোন-পর্দা, কে-দেখবে, কোন-ক্রমে — শহরের-নকশা এক-খাতায়; প্রকৃত-কম্পোনেন্ট-ঠিকানা <strong>ফ্রোজেন-রেজিস্ট্রির</strong>
  মানচিত্রে (component_key→লোডার) — সার্ভার যা-চাইলেও অজানা-ঘর গড়তে-পারে-না। আর প্রতিটি-এরর এক-ভাষায় (দরজা ১৫-এর-অনুবাদ-ঘর) — চার্টারের-ই ধারা।</p>
  <p class="scene-setting en">Room twenty-one is the city-hall — a wall carrying <strong>three engraved
  law-tablets</strong>. Senior mayor <strong>Kazi Anwar</strong> — stone-chisel in hand, old tablet-dust on his
  shoulder-cloth. He reads with the chisel raised: <strong>"Law one — the current flows one way"</strong> (features
  never import each other; structure enforced by lint, not walls). <strong>"Law two — names live in registers, not
  on walls"</strong> (a new screen's name goes to registry+map; no floating strings). <strong>"Law three — silence
  is a crime"</strong> (empty catch, silent failure banned — show or log every failure). Then he opens LedgerPilot's
  constitution: the server-sent <strong>nav-manifest</strong> — which screen where, who sees it, in what order — the
  city's map in one book; the actual component address in the <strong>frozen registry's</strong> map
  (component_key→loader) — even the server cannot build unknown rooms. And every error in one language (door 15's
  translation-room) — a charter clause too.</p>
  <div class="dialogue">('"আইন পাথরে, কারিগরের মেজাজে নয়," কাজী আনোয়ার ছেনি দিয়ে ফলকে আঘাত করলেন, "স্রোত একমুখ, নাম খাতায়, নীরবতা দণ্ডনীয় — এই তিনটাই শহর টেকায়। আমি দেখেছি উল্টোটা: প্রতিভাবান কারিগরের শহর, পাঁচ বছরে নিজের রাস্তা হারিয়ে ফেলেছে।"', 'ছেনির ঝনঝন শব্দ উঠোন ভরে ওঠে — আইনের স্থায়িত্ব কারিগরের প্রতিভার চেয়ে বেশি টেকে।')</div><div class="dialogue en">"Laws in stone, not in the artisan's mood — one-way flow, registered names, no silence. I saw a talented city lose its own streets in five years."</div>
  <div class="dialogue">তুমি বিধান-ঘরের দেয়ালে সীমানা-রেখা দেখিয়ে জিজ্ঞেস করলে, "এই রেখা কি কাগজের-শোভা?" প্রবীণ আইন-কারিগর বললেন, "রেখা মানে শ্বাস-নেওয়ার-জায়গা। ভিউ থেকে সরাসরি সার্ভিস-ডাক? রেখা-লঙ্ঘন — লিন্ট তখনই লাল-ত্রুটি দেখাবে। কেন এ-কঠোরতা? কারণ স্মৃতি পাহারা দেয় না, যন্ত্র দেয়। দশ-বার লঙ্ঘন-করা-রেখা একাদশতে নিজে-নিজে মুছে যায়। আর নতুন-পর্দা-যাত্রার নিয়ম লেখা আছে রেজিস্ট্রিতে: রেজিস্ট্রি-নাম → ম্যানিফেস্ট-সারি → সার্ভিস-তৈরি → টেস্ট → E2E — যে-পথ প্রশ্নহীন, সে-পথ দ্রুততম। বিধান মানে বাঁধা নয় — প্রতিটি কারিগর একা-নয়-একসাথে-বোনার শপথ।"</div>
<div class="dialogue en">You pointed at the boundary-lines on the statute wall: "Are these paper-ornaments?" The elder law-craftsman said: "A line is where breathing happens. A view calling a service directly? Line-breached — lint flashes red that instant. Why so strict? Because memory doesn't guard; machines do. A line crossed ten times erases itself by the eleventh. And the new-screen journey's rule lives in the registry: registry-name → manifest-row → service-built → test → E2E — an unquestioned path is the fastest path. Statutes are not shackles — they are the oath that every craftsman weaves together, not alone."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ স্তর-মিশ্রণ</div>ভিউ থেকে সরাসরি সার্ভিস-ডাক, ফিচার-ভেতরে অন্য-ফিচার-হাত — বদলালে ভুলে-যাওয়া অশ্রুতলিঙ্গ ভাঙে।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ বিধান-বাঁধা স্তর</div>লিন্ট-জিম্বাব্বে সীমানা + রেজিস্ট্রি-নকশা — নিয়ম যন্ত্রই পাহারা দেয়, স্মৃতি নয়।</div></div>
  <div class="code-block">চার্টার-শাস্ত্র — পাঁচ-আইনের-সংহিতা

আইন-১ · স্রোত-একমুখ (লিন্টে-জোর):
  features/ ✗→ features/    (no-restricted-imports)
  ui/ → কোনো-ডোমেইন-জানে-না
  core/ → কাউকে-জানে-না
  · ভাঙলে-বিল্ড-নয়, এডিটে-ই-লাল-দাগ

আইন-২ · নাম-খাতা (রেজিস্ট্রি-প্যাটার্ন):
  // app/registry/components.ts (LP-প্রকৃত-ছায়া)
  const modules = import.meta.glob(
    '../../features/**/views/**/*.vue')
  function toKey(p) {
    return p.match(/features\/(.+)\.vue$/)[1] }
  export const COMPONENTS = Object.freeze(
    Object.fromEntries(
      Object.entries(modules)
        .map(([p, loader]) =&gt; [toKey(p), loader])))
  export function resolveComponent(key) {
    const loader = COMPONENTS[key]
    if (!loader) {
      console.error(
        \`[nav] অজানা component_key "\${key}"\`)
      return null }        // NotFound-পতন — নীরব-নয়
    return loader }
  · ফ্রোজেন-মানচিত্র: সার্ভার-চাহিদায়-নতুন-ঘর-নয়;
    নতুন-ঘর = FE-রিলিজে-রেজিস্ট্রিতে-সারি

আইন-৩ · সার্ভার-নকশা (ম্যানিফেস্ট-চালিত-ন্যাভ):
  // BE পাঠায়: { routes: [{ path, name,
  //   component_key, feature_key, allowed_roles }] }
  // FE বসায়:
  export function buildRouteRecords(routes) {
    return routes.flatMap(r =&gt; {
      const loader = resolveComponent(r.component_key)
      if (!loader) return []     // ড্রিফ্ট-স্কিপ+লগ
      return [{ path: r.path, name: r.name,
        component: loader,
        meta: metaFor(r) }] })
  }
  router.addRoute(…each)
  · মেনু+রুট+গেট এক-উৎস (সার্ভার) —
    তিন-জায়গায়-তিন-সত্য নয়

আইন-৪ · নীরবতা-নিষেধ:
  ✗ catch {}                    // অপরাধ
  ✗ catch (e) { }               // অপরাধ
  ✓ catch (e) {
      logger.error('ভিত্তি-নাম', e) }
  ✓ catch (e) { show(errorMsg(e)) }
  · টেস্টে-পিন: নতুন-খালি-catch
    ঢুকলে-রক্ষী-টেস্ট-কাঁদে (LP-প্রথা)

আইন-৫ · এরর-এক-ভাষা:
  কাঁচা-e.message-দেয়ালে-নয় →
  getApiErrorMessage(e, fallback) — দরজা ১৫
  · চার্টার-ধারা: ব্যবহারকারী-মানুষের-ভাষা-পায়

নতুন-পর্দার-নাগরিক-অনুষ্ঠান (চেক-তালিকা):
  ① features/&lt;ডোমেইন&gt;/views/NewView.vue
  ② রেজিস্ট্রি-স্বয়ং (glob-জাত) — কিন্তু
     কভারেজ-টেস্টে-সারি-যাচাই
  ③ ম্যানিফেস্ট-সারি (BE): path+key+roles+feature
  ④ মেনু-সারি (একই-ম্যানিফেস্ট-উৎস)
  ⑤ সার্ভিস+কম্পোজেবল+টেস্ট (তিন-সঙ্গী)
  ⑥ E2E-পথ-পিন</div>
  <ul class="checklist">
  <li>স্রোত একমুখ — features ✗→ features (লিন্টে-জোর)</li>
  <li>নাম খাতায় — নতুন পর্দা = রেজিস্ট্রি + ম্যানিফেস্ট-সারি</li>
  <li>নীরবতা নিষেধ — catch কখনো খালি নয়</li>
  <li>এরর এক-ভাষায় — getApiErrorMessage</li>
  <li>দুই-খাতা মিলে নতুন ঘর — FE-রিলিজ + BE-ম্যানিফেস্ট</li>
</ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 4 (City Builder’s Codex) স্তর-সীমানার আর্কিটেকচার-নীতি, আর Book 40 (Codebuilder’s Guild) রেজিস্ট্রি/manifest-প্যাটার্নের SE-নিয়ম — বিধানের দুই স্তম্ভ।</div></div>
  <div class="verse">শরীয়তুল-মদীনা — মেয়র-মরে-আইন-বাঁচে: "মানুষের-মধ্যে তোমরা-হিসাব-করো-মিনাড়ে" নয় বরং বিচার-প্রতিষ্ঠার-আয়াত-ধারা (৪:৫৮-এর-সার) — বিশ্বাস প্রতিষ্ঠানে-থাকে, ব্যক্তির-স্মৃতিতে-নয়। কাজী আনোয়ারের-ফলক সেই-সংহিতার-শহর-রূপ: স্রোতের-দিক, নামের-খাতা, নীরবতার-দণ্ড — তিন-আইন কোনো-কারিগরের-মেজাজে-নয়, পাথরে। যে-শহর আইন-ছুঁড়ে-ফেলে-দ্রুত-বাড়ে, সে-শহর পাঁচ-বছরে-নিজের-রাস্তাই-খুঁজে-পায়-না; আর যে-নীরবতা-দণ্ডহীন, সেখানে-ব্যর্থতা-অদৃশ্য-হয়ে-রাতে-ডাকাতি-করে।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>পৌরসভা-ফাঁদ:</strong> (১) 'শুধু-এবার-একটা-ফিচার-ফিচার-আমদানি' — ছোট-শহরের-এক-ভাঙা-জানালা দিয়ে-পুরো-আইন-ভাঙে; লিন্ট-ব্যতিক্রম-নয়। (২) রেজিস্ট্রি-বাইপাস-করে-ডাইনামিক-string-কম্পোনেন্ট — অজানা-ঘর-নীরব-পতন; সব-ঠিকানা-খাতায়। (৩) 'এটা-তো-ছোট-এরর' বলে-খালি-catch — রাতের-ডাকাতি-নীরবতার-মুখোশে; লগ-ন্যূনতম।</div></div>
  <div class="secret-box">🏛️ তিন-ফলক: স্রোত-একমুখ (লিন্ট), নাম-খাতায় (রেজিস্ট্রি), নীরবতা-দণ্ডনীয় (no-empty-catch) — নকশা-খাতা মিলে-ই নতুন-ঘর। / One-way imports, registered names, no silence.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ২১-এর পৌরসভা: ফ্রোজেন-রেজিস্ট্রি + BE-ম্যানিফেস্ট-রুট + চার্টার-পাহারা-টেস্ট বাঁধো — তারপর নিজে-আইন-ভাঙো: রেজিস্ট্রি-সারি মুছলে কভারেজ-পিন কাঁদবে, ম্যানিফেস্টে-অজানা-কী দিলে ড্রিফ্ট-স্কিপ+লগ ধরা-পড়বে — নীরব-পতন নয়। / Door 21's city-hall: frozen registry + manifest routes + charter guard-tests — then break each law yourself and watch the pin cry.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/app/registry.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>// আইন-২: নাম-খাতা — ফ্রোজেন-রেজিস্ট্রি
// আসল-প্রজেক্টে মানচিত্র glob-স্বয়ং-গড়ে (Vite-নথি):
//   const modules = import.meta.glob('../../features/**/views/**/*.vue')
//   → { 'features/auth/views/LoginView.vue': () =&gt; import('…'), … }
// স্টুডিও-পরীক্ষায় হাতে-লেখা-ছায়া:
const modules: Record&lt;string, () =&gt; Promise&lt;{ default: unknown }&gt;&gt; = {
  'features/auth/views/LoginView.vue': () =&gt; Promise.resolve({ default: 'LoginView' }),
  'features/timesheets/views/ImportsView.vue': () =&gt; Promise.resolve({ default: 'ImportsView' }),
  'features/account/views/ProfileView.vue': () =&gt; Promise.resolve({ default: 'ProfileView' }),
}

function toKey(p: string): string {
  return p.replace(/^.*features\//, '').replace(/\.vue$/, '')
}

export const COMPONENTS = Object.freeze(
  Object.fromEntries(
    Object.entries(modules).map(([p, loader]) =&gt; [toKey(p), loader]),
  ),
) as Record&lt;string, () =&gt; Promise&lt;{ default: unknown }&gt;&gt;

export function resolveComponent(key: string) {
  const loader = COMPONENTS[key]
  if (!loader) {
    // নীরবতা-নিষেধ: অজানা-ঠিকানা চিৎকার-করে-পড়ে — নীরব-পতন-নয়
    console.error('[nav] অজানা component_key "' + key + '" — রেজিস্ট্রিতে-নেই')
    return null
  }
  return loader
}
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/app/manifestRoutes.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { resolveComponent } from './registry'

// আইন-৩: সার্ভার-নকশা — BE-ম্যানিফেস্ট রুট-রেকর্ডে
export interface ManifestRoute {
  path: string
  name: string
  component_key: string
  feature_key: string
  allowed_roles: string[]
}

export function buildRouteRecords(routes: ManifestRoute[]) {
  return routes.flatMap((r) =&gt; {
    const loader = resolveComponent(r.component_key)
    if (!loader) return []      // ড্রিফ্ট-স্কিপ — কিন্তু লগ-সহ (resolveComponent-ই চেঁচিয়েছে)
    return [{
      path: r.path,
      name: r.name,
      component: loader,
      meta: { roles: r.allowed_roles, feature: r.feature_key },
    }]
  })
}

// আসল-প্রজেক্টে: buildRouteRecords(manifest).forEach(r =&gt; router.addRoute(r))
// রুট+মেনু+গেট এক-উৎস (সার্ভার) — তিন-জায়গায়-তিন-সত্য নয়
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/app/charter.test.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { describe, it, expect, vi } from 'vitest'
import { COMPONENTS, resolveComponent } from './registry'
import { buildRouteRecords, type ManifestRoute } from './manifestRoutes'

const manifest: ManifestRoute[] = [
  { path: '/login', name: 'login', component_key: 'auth/views/LoginView',
    feature_key: 'auth', allowed_roles: ['*'] },
  { path: '/timesheets/imports', name: 'timesheets-imports',
    component_key: 'timesheets/views/ImportsView',
    feature_key: 'timesheets', allowed_roles: ['admin', 'accountant'] },
  // BE-ড্রিফ্ট-ছায়া: সার্ভার জানে-না FE-এ-এই-ঘর-নেই
  { path: '/ghost', name: 'ghost', component_key: 'ghost/views/GhostView',
    feature_key: 'ghost', allowed_roles: ['*'] },
]

describe('আইন-২ · নাম-খাতা', () =&gt; {
  it('অজানা-কী নীরবে-নয় — লগ+null', () =&gt; {
    const err = vi.spyOn(console, 'error').mockImplementation(() =&gt; {})
    expect(resolveComponent('nope/views/None')).toBeNull()
    expect(err).toHaveBeenCalled()              // নীরবতা-নিষেধ-প্রমাণ
    err.mockRestore()
  })

  it('ফ্রোজেন-মানচিত্র — রানটাইমে-নতুন-সদস্য-নয়', () =&gt; {
    const add = () =&gt; { (COMPONENTS as Record&lt;string, unknown&gt;)['hack/views/Hack'] = 1 }
    expect(add).toThrow()                      // Object.freeze-এর-শপথ
  })

  it('কভারেজ-পিন: প্রত্যাশিত-পর্দা খাতায়-আছে', () =&gt; {
    for (const key of ['auth/views/LoginView', 'timesheets/views/ImportsView', 'account/views/ProfileView']) {
      expect(COMPONENTS[key]).toBeTruthy()     // নতুন-পর্দা = এই-সারিতে-নাম
    }
  })
})

describe('আইন-৩ · ম্যানিফেস্ট', () =&gt; {
  it('ড্রিফ্ট-স্কিপ: অজানা-কী বাদ, জানা-কী বাকি — লগ-সহ', () =&gt; {
    const err = vi.spyOn(console, 'error').mockImplementation(() =&gt; {})
    const records = buildRouteRecords(manifest)
    expect(records).toHaveLength(2)            // ghost স্কিপ্ট — অন্ধ-পতন-নয়
    expect(records[0]!.meta.roles).toEqual(['*'])
    expect(err).toHaveBeenCalled()
    err.mockRestore()
  })
})
</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) npx vitest run — পাঁচ-টেস্ট সবুজ। (২) **আইন-২-ভাঙো:** registry.ts থেকে account-সারি মুছো → কভারেজ-পিন লাল — নতুন-পর্দার নাগরিক-অনুষ্ঠান মেশিনে-পাহারা-যোগ্য। (৩) **আইন-৩-ভাঙো:** ম্যানিফেস্টে আরেকটা অজানা-কী যোগ করো → length-দাবি ধরবে, কনসোল-লগ দেখবে। (৪) আইন-৪ eslint-ফলক: no-empty ডিফল্টেই খালি-catch লাল-করে (eslint.org-সত্যায়িত) — দরজা ১৯-এর eslint.config.js-এ আইন-১-এর পাশে বসে-আছে। Context7-নোট: vitejs.org — import.meta.glob = {পথ: () =&gt; import(পথ)} লোডার-মানচিত্র; eslint.org — no-empty ডিফল্ট খালি-ব্লক নিষেধ (allowEmptyCatch:false)। / Tests: five green; delete a registry row and watch the coverage-pin cry; add a ghost manifest key and watch drift-skip+log — never a silent fall.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">City Charter — Three Tablets, One Constitution</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="14" width="164" height="106" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="97" y="36" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">📜 আইন-১: একমুখ-স্রোত</text>
      <text x="97" y="52" text-anchor="middle" fill="#94a3b8" font-size="6.5">features ✗→ features</text>
      <text x="97" y="66" text-anchor="middle" fill="#64748b" font-size="6.5">no-restricted-imports</text>
      <text x="97" y="84" text-anchor="middle" fill="#a5b4fc" font-size="6.5">লিন্ট-লাল-দাগ — বিল্ড-অপেক্ষা-নয়</text>
      <text x="97" y="104" text-anchor="middle" fill="#64748b" font-size="6">ui/core-ডোমেইন-অজ্ঞ</text>
      <rect x="197" y="14" width="164" height="106" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="279" y="36" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">📖 আইন-২: নাম-খাতা</text>
      <text x="279" y="52" text-anchor="middle" fill="#94a3b8" font-size="6.5">ফ্রোজেন-রেজিস্ট্রি</text>
      <text x="279" y="66" text-anchor="middle" fill="#64748b" font-size="6.5">import.meta.glob → key-map</text>
      <text x="279" y="84" text-anchor="middle" fill="#a5b4fc" font-size="6.5">অজানা-key → লগ+NotFound</text>
      <text x="279" y="104" text-anchor="middle" fill="#64748b" font-size="6">সার্ভারও-অজানা-ঘর-গড়তে-পারে-না</text>
      <rect x="379" y="14" width="166" height="106" rx="10" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.5"/>
      <text x="462" y="36" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="700">🔇 আইন-৩: নীরবতা-দণ্ড</text>
      <text x="462" y="52" text-anchor="middle" fill="#94a3b8" font-size="6.5">✗ catch {} — অপরাধ</text>
      <text x="462" y="66" text-anchor="middle" fill="#64748b" font-size="6.5">✗ নিঃশব্দ-ব্যর্থতা</text>
      <text x="462" y="84" text-anchor="middle" fill="#f87171" font-size="6.5">✓ logger.error / দেখাও</text>
      <text x="462" y="104" text-anchor="middle" fill="#64748b" font-size="6">রক্ষী-টেস্টে-পিন</text>
      <rect x="15" y="140" width="530" height="86" rx="11" fill="rgba(251,191,36,0.07)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="280" y="162" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">🗺️ সংবিধান-খাতা: সার্ভার-ম্যানিফেস্ট + ফ্রোজেন-মানচিত্র</text>
      <text x="280" y="178" text-anchor="middle" fill="#94a3b8" font-size="7">BE পাঠায়: path · component_key · feature_key · allowed_roles — রুট+মেনু+গেট এক-উৎস</text>
      <text x="280" y="193" text-anchor="middle" fill="#94a3b8" font-size="7">FE রাখে: কী→লোডার মানচিত্র (glob-স্বয়ং) — নতুন-পর্দা = FE-রিলিজ+ম্যানিফেস্ট-সারি, দুই-খাতা-মিলে</text>
      <text x="280" y="210" text-anchor="middle" fill="#64748b" font-size="6.5">ড্রিফ্ট হলে: অজানা-কী লগ+স্কিপ → NotFound — অন্ধ-পতন-নয়, শব্দ-করা-পতন · এরর-ভাষা: দরজা ১৫-ধারা</text>
      <rect x="15" y="242" width="530" height="44" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="260" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">নতুন-পর্দার-নাগরিক-অনুষ্ঠান: view → রেজিস্ট্রি-যাচাই → ম্যানিফেস্ট-সারি → সার্ভিস+কম্পোজেবল+টেস্ট → E2E-পিন</text>
      <text x="280" y="276" text-anchor="middle" fill="#64748b" font-size="7">ছোট-শহরে ম্যানিফেস্ট-স্টেপ বাদ-ও-চলে (স্ট্যাটিক-নকশা) — আইন-দুই-তিন-অটুট</text>
      <text x="280" y="300" text-anchor="middle" fill="#64748b" font-size="8">মেয়র-মরে-আইন-বাঁচে — স্রোত, খাতা, স্বর: তিন-ফলক পাথরে, কারিগরের-মেজাজে-নয়</text>
    </svg>
    <div class="diag-cap">তিন-ফলক+এক-খাতা: লিন্টে-স্রোত, রেজিস্ট্রিতে-নাম, দণ্ডে-নীরবতা — আর নকশা সার্ভারের-হাতে, ঠিকানা শহরের-মানচিত্রে।</div>
  </div>`,
  senior: {
    title: "Architecture Card",
    body: `<p><strong>আইন</strong>: ① লেয়ার-স্রোত (features✗→features, no-restricted-imports) ② রেজিস্ট্রি (import.meta.glob→frozen key-map; অজানা-কী=লগ+NotFound) ③ no-empty-catch (logger.error/দেখাও; টেস্ট-পিন) ④ এরর-ভাষা getApiErrorMessage ⑤ ম্যানিফেস্ট-নকশা (BE: path/key/roles; buildRouteRecords→addRoute; রুট+মেনু এক-উৎস)। <strong>নতুন-পর্দা</strong>: view→রেজিস্ট্রি→ম্যানিফেস্ট→সার্ভিস/কম্পোজেবল/টেস্ট→E2E। <strong>ফাঁদ</strong>: "এদিক-ওদিক একটু" স্তর-লঙ্ঘন করা — ভিউ থেকে সরাসরি সার্ভিস-ডাক; লিন্ট-সীমানা প্রথম লঙ্ঘনেই আটকাও, দশম লঙ্ঘনে নয়।</p>`
  }
});

doors.push({
  num: 22,
  icon: "🌱",
  color: "#818cf8",
  name: "প্রথম-কাপড়: টু-ডু-তাঁত",
  subtitle: "Starter 1 — The Todo Loom (Basic)",
  tech: "complete beginner project: scaffold, one component, ref+computed+v-for+v-model, localStorage persistence — every file shown",
  spirit: "প্রথম-রাকাত — the first unit: small, complete, whole",
  secret: "৫০-লাইনে পূর্ণ-অ্যাপ: ref-তালিকা, computed-ছাঁকনি, v-for+key, v-model-ইনপুট, localStorage-স্মৃতি — এক-ফাইল, শূন্য-নির্ভরতা-বাড়তি।",
  recall: {
    q: "এই-প্রজেক্টে কোন-চারটি-মূল-ধারণা একসাথে-ঘুরেছে?",
    qen: "Which four core ideas rotate together here?",
    a: "ref (তালিকা-অবস্থা), computed (অবশিষ্ট-গণনা — উদ্ভূত-সত্য), v-for+:key (তালিকা-বোনা), v-model (ইনপুট-সেতু) — সাথে localStorage-এ onMounted/onUpdated-জীবনচক্রের-স্বাদ।",
    aen: "ref, computed, v-for+:key, v-model — plus localStorage through lifecycle hooks."
  },
  story: `<p class="scene-setting">বাইশ নম্বর ঘর থেকে শুরু <strong>স্টার্টার-কারখানা</strong> — পাঁচটা-পূর্ণ-প্রজেক্ট, প্রতিটি-প্রতিটি-ফাইলসহ। প্রথম-ওয়ার্কশপে তোমাকে
  নিয়ে-বসলেন <strong>শাগরফা আপা</strong> — তাঁর-সামনে ছোট্ট-এক-তাঁত, পাশে-কার্ডে-লেখা: "৫০-লাইন, শূন্য-ভয়"। <strong>"প্রথম-কাপড় শেখার-কাপড়,"</strong> —
  তিনি-বলেন — <strong>"ছোট, কিন্তু পূর্ণ: যোগ-করো, গোছাও, কাটো, আটকাও-রাখো (localStorage)। এক-টু-ডু — কিন্তু এতে-ই মূল-চার-সুতো সব
  ঘুরবে।"</strong> তিনি দেখাবেন কীভাবে খালি-ফোল্ডার থেকে দশ-মিনিটে চালু-তাঁত, আর শেষে-বলবেন: <strong>"এই-কাপড় রাখো — পরের-ওয়ার্কশপে-এর-ওপরেই-বড়-নকশা।"</strong></p>
  <p class="scene-setting en">From room twenty-two begins the <strong>starter-factory</strong> — five complete
  projects, every file shown. In the first workshop sits <strong>Shagorfa Apa</strong> — a small loom before her, a
  card reading "50 lines, zero fear". <strong>"The first cloth is the learning cloth,"</strong> — she says —
  <strong>"small, but whole: add, filter, remove, persist (localStorage). A todo — yet all four core threads turn in
  it."</strong> She'll show an empty folder becoming a running loom in ten minutes, and will end: <strong>"keep this
  cloth — the next workshop builds its bigger pattern on exactly this."</strong></p>
  <div class="dialogue">('"ছোট কাপড় ফেলে দিয়ো না," শাগরফা আপা শেখা-কাপড়টা ভাঁজ করে তোমার হাতে দিলেন, "এর ওপরেই পরের বড় নকশা বসবে। একবার ভেবেছিলাম প্রথম কাপড় নষ্ট হয়ে গেছে — পরে বুঝেছি, সেটাই আমার সবচেয়ে দামি খতিয়ান।"', 'কাপড়ের নরম ভাঁজ হাতে রয়ে যায় — প্রথম শেখা কখনোই ব্যর্থতা নয়, ভিত্তি।')</div><div class="dialogue en">"Don't discard the learning cloth — the next big pattern sits on exactly this. I once thought my first cloth wasted; it became my dearest record."</div>
  <div class="dialogue">শাগরফা আপা প্রথম-কাপড় হাতে দিয়ে জিজ্ঞেস করলেন, "বলো — এই কাপড়ে কয়টা সুতো?" তুমি গুনলে: "চার — ref, computed, v-for, v-model।" আপা মাথা নাড়লেন: "চার-ই যথেষ্ট, চার-ই মুখ্য। রাউটার লাগবে না — এক-পর্দার কাপড়; Pinia লাগবে না — মাথার-উপর অন্য-কারিগরের ছাদ নয়; SSE লাগবে না — নদী এখনো দূরে। প্রথম-কাপড়ের কাজ পূর্ণতা নয় — আত্মবিশ্বাস: নিজের-হাতে-বোনা প্রমাণ যে তাঁত চলে। localStorage-সিঙ্ক শিখে নাও — বিদায়ের-সময় কাপড় থাকবে; কিন্তু সত্য-উৎস মেমরিতেই — গুদাম প্রতিফলন, রাজধানী নয়।"</div>
<div class="dialogue en">Shagrofa Apa handed you the first cloth: "How many threads in it?" You counted: "Four — ref, computed, v-for, v-model." She nodded: "Four suffice, four are the point. No router needed — a one-screen cloth; no Pinia — no stranger's roof over your head yet; no SSE — the river is still far. The first cloth's work is not completeness but confidence: proof woven by your own hands that the loom runs. Learn the localStorage-sync — the cloth survives farewell; but the source of truth stays in memory — the warehouse is a reflection, not the capital."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ প্রথম-দিনের জাদুঘর</div>টু-ডুতেই রাউটার+Pinia+SSB-সব — প্রথম কাপড় ডুবে যায় বহু-যন্ত্রের ভারে।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ চার-সুতো-কাপড়</div>ref+computed+v-for+v-model একবার হাতে-হাতে — যন্ত্র পরে আসবে, আত্মবিশ্বাস আগে।</div></div>
  <div class="code-block">স্টার্টার-১ · টু-ডু-তাঁত — প্রতিটি-ফাইল (npm থেকে-ব্রাউজার)

স্থাপন (এক-লাইন):
  npm create vite@latest todo-loom -- --template vue-ts
  cd todo-loom &amp;&amp; npm install &amp;&amp; npm run dev
  → http://localhost:5173 (HMR-প্রদীপ-জ্বলল)

ফাইল-১ · src/main.ts (অপরিবর্তিত-ছাঁচ):
  import { createApp } from 'vue'
  import App from './App.vue'
  createApp(App).mount('#app')

ফাইল-২ · src/App.vue (পুরো-কাপড় — এটাই-মূল):
  &lt;script setup lang="ts"&gt;
  import { computed, onMounted, ref,
           watch } from 'vue'

  // ── অবস্থা ──
  interface Todo {
    id: number; text: string; done: boolean
  }
  const todos = ref&lt;Todo[]&gt;(
    JSON.parse(localStorage.getItem('todos') ?? '[]'))
  const draft = ref('')
  const filter = ref&lt;'all'|'active'|'done'&gt;('all')

  // ── উদ্ভূত-সত্য (computed-ঘর) ──
  const shown = computed(() =&gt;
    filter.value === 'all'  ? todos.value
  : filter.value === 'done' ? todos.value.filter(t =&gt; t.done)
  :                          todos.value.filter(t =&gt; !t.done))
  const remaining = computed(() =&gt;
    todos.value.filter(t =&gt; !t.done).length)

  // ── ক্রিয়া ──
  function add() {
    const text = draft.value.trim()
    if (!text) return
    todos.value.push(
      { id: Date.now(), text, done: false })
    draft.value = ''
  }
  function remove(id: number) {
    todos.value = todos.value.filter(t =&gt; t.id !== id)
  }
  function clearDone() {
    todos.value = todos.value.filter(t =&gt; !t.done)
  }

  // ── স্মৃতি (localStorage-সিন্দুক) ──
  watch(todos, v =&gt;
      localStorage.setItem('todos', JSON.stringify(v)),
    { deep: true })
  onMounted(() =&gt; { /* ভবিষ্যৎ-প্রস্তুতি */ })
  &lt;/script&gt;

  &lt;template&gt;
    &lt;main class="card"&gt;
      &lt;h1&gt;🧵 টু-ডু-তাঁত&lt;/h1&gt;

      &lt;form @submit.prevent="add"&gt;
        &lt;input v-model.trim="draft"
          placeholder="নতুন সুতো…"
          data-test="draft" /&gt;
        &lt;button&gt;যোগ&lt;/button&gt;
      &lt;/form&gt;

      &lt;nav&gt;
        &lt;button v-for="f in ['all','active','done']"
          :key="f"
          :class="{ on: filter === f }"
          @click="filter = f"&gt;{{ f }}&lt;/button&gt;
      &lt;/nav&gt;

      &lt;ul&gt;
        &lt;li v-for="t in shown" :key="t.id"&gt;
          &lt;label&gt;
            &lt;input type="checkbox"
              v-model="t.done" /&gt;
            &lt;span :class="{ strike: t.done }"&gt;
              {{ t.text }}&lt;/span&gt;
          &lt;/label&gt;
          &lt;button @click="remove(t.id)"&gt;✕&lt;/button&gt;
        &lt;/li&gt;
      &lt;/ul&gt;

      &lt;footer&gt;
        {{ remaining }} বাকি
        &lt;button v-if="remaining &lt; todos.length"
          @click="clearDone"&gt;শেষ-মুছো&lt;/button&gt;
      &lt;/footer&gt;
    &lt;/main&gt;
  &lt;/template&gt;

  &lt;style scoped&gt;
  .card { max-width: 26rem; margin: 2rem auto;
    padding: 1.5rem; border-radius: 1rem;
    background: #0a1f16; color: #e2f5ec; }
  .strike { text-decoration: line-through;
    opacity: .55; }
  .on { font-weight: 700;
    border-color: #6366f1; }
  &lt;/style&gt;

কোন-সুতো-কোথায় (স্ব-পরীক্ষা):
  ref          → todos/draft/filter (তিন-অবস্থা)
  computed     → shown/remaining (উদ্ভূত, ক্যাশড)
  v-for+:key   → তালিকা-বোনা (আসল-id-কী)
  v-model      → টেক্সট+চেকবক্স-দুই-রূপই
  watch+deep   → সিন্দুক-লেখা (পার্শ্ব-প্রভাব)
  @submit.prevent → ফর্ম-ডিফল্ট-বন্ধ

পরের-ধাপের-মাছি (ঐচ্ছিক-ব্যায়াম):
  · এডিট-ইন-প্লেস (double-click → input)
  · ট্যাগ-শ্রেণি (Todo-এ category) — দ্বিতীয়-ছাঁকনি
  · প্রথম-টেস্ট: mount → add() →
    expect(todos).toHaveLength(1) (দরজা ২০-তলা-১)</div>
  <ul class="checklist">
  <li>create-vite (vue-ts) → npm install → npm run dev</li>
  <li>ref: todos/draft/filter — তিন অবস্থা</li>
  <li>computed: shown/remaining — উদ্ভূত সত্য</li>
  <li>v-for + :key (আসল id) — তালিকা বোনা</li>
  <li>v-model + .trim — ইনপুট-সেতু</li>
  <li>watch({deep}) → localStorage — স্মৃতি</li>
</ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 5 (Seed of Learning) প্রথম-প্রকল্পের শেখার-মনস্তত্ত্ব, আর Book 53 (Python City) ছোট-প্রজেক্ট-থেকে-বড়-হওয়ার পথ — প্রথম কাপড়ের দুই পথপ্রদর্শক।</div></div>
  <div class="verse">প্রথম-রাকাত — ছোট-কিন্তু-পূর্ণ-একক: নামাজ-শাস্ত্রে-যেমন-প্রথম-একাক-ই-শিক্ষা, জমা-পড়ে-না। শাগরফা-আপার-শেখা-কাপড় সেই-প্রথম-এককের-তাঁত-রূপ: পঞ্চাশ-লাইন, কিন্তু-আঙুল-তলে-গিঁট-নেই — যোগ-গোছ-কাট-স্মৃতি চার-অঙ্গ-সম্পূর্ণ। যে-শাগিরদ প্রথম-কাপড়েই-সোনার-বর্ডর-চায়, সে-দ্বিতীয়-সপ্তাহে-তাঁত-ছেড়ে-দেয়; আর-যে-ছোট-পূর্ণ-গাঁথে, তার-দ্বিতীয়-কাপড়-নিজে-নিজেই-বড়-নকশা-দাবি-করে।</div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>শাগরফা-আপার-নোট:</strong> (১) প্রতিটি-লাইন-নিজে-হাতে-টাইপ-করো — কপি-পেস্টে-আঙুল-শেখে-না। (২) এক-বার-চালিয়ে-তারপর-ভাঙো: filter-লজিক-মুছে-দেখো-কী-ভাঙে, computed-এর-জায়গায়-মেথড-বসাও — পার্থক্য-চোখে-পড়বে। (৩) :key-এর-জায়গায় index-দিয়ে-দেখো মুছতে-কী-অদ্ভুত-হয় — তারপর-আসল-id-ফেরাও; এই-এক-ভাঙা-ই :key-এর-শিক্ষা।</div></div>
  <div class="secret-box">🌱 প্রথম-কাপড়: টু-ডু-তাঁত — এক-ফাইল, চার-সুতো, সিন্দুক-স্মৃতি; হাতে-গাঁথো, ভেঙে-দেখো, রেখে-দাও। / Type it, break it, keep it — the whole loom in fifty lines.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ২২-এর টু-ডু-তাঁত: অধ্যায়ের App.vue নিজে-টাইপ-করো (ওপরের ফাইল-২), তারপর এই তিন-পরীক্ষার-দড়ি বাঁধো — প্রথম-টেস্ট (দরজা ২০-এর তলা-১: mount → add → সারি-১), :key-শিক্ষার-পিন (index-key ঢুকলেই কাঁদে), সিন্দুক-স্মৃতি-পিন (watch-deep-এ লেখা, রিফ্রেশে টিকে)। তারপর ভাঙো — শাগরফা-আপার নোট-হুবহু: computed→মেথড, :key→index — কোন-পিন কাঁদে দেখো। / Door 22's todo-loom: type the chapter's App.vue yourself, then pin it with three tests — the first mount-test, the :key-lesson pin, the localStorage-memory pin; then break it exactly as Apa's note says.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.test.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

// শাগরফা-আপার প্রথম-টেস্ট: mount → add → সারি-১ (দরজা ২০, তলা-১)
beforeEach(() =&gt; localStorage.clear())

describe('টু-ডু-তাঁত · প্রথম-কাপড়', () =&gt; {
  it('ফর্ম-লেখা → যোগ → তালিকায় সুতো', async () =&gt; {
    const w = mount(App)
    await w.find('[data-test=draft]').setValue('চালান-মিলাও')
    await w.find('form').trigger('submit.prevent')
    expect(w.findAll('li')).toHaveLength(1)
    expect(w.text()).toContain('চালান-মিলাও')
  })

  it('ফাঁকা-লেখা যোগ-হয়-না (.trim + খালি-রক্ষী)', async () =&gt; {
    const w = mount(App)
    await w.find('[data-test=draft]').setValue('   ')
    await w.find('form').trigger('submit.prevent')
    expect(w.findAll('li')).toHaveLength(0)
  })

  it('কাটা-সুতো বাকিদের-হাতে-লাগে-না (:key-শিক্ষা)', async () =&gt; {
    const w = mount(App)
    // তিন-সুতো গাঁথো
    for (const t of ['এক', 'দুই', 'তিন']) {
      await w.find('[data-test=draft]').setValue(t)
      await w.find('form').trigger('submit.prevent')
    }
    expect(w.findAll('li')).toHaveLength(3)
    // প্রথমটা কাটো — বাকি দুই-ই নিজের-নাম ধরে-রাখবে (:key = আসল-id)
    await w.findAll('li')[0]!.find('button').trigger('click')
    const texts = w.findAll('li').map(li =&gt; li.text())
    expect(texts).toEqual(['দুই', 'তিন'])
  })

  it('সিন্দুক-স্মৃতি: watch-deep লেখে, নতুন-mount পড়ে', async () =&gt; {
    const w = mount(App)
    await w.find('[data-test=draft]').setValue('স্থায়ী-খতিয়ান')
    await w.find('form').trigger('submit.prevent')
    expect(JSON.parse(localStorage.getItem('todos') ?? '[]')).toHaveLength(1)
    const w2 = mount(App)                    // রিফ্রেশের-ছায়া — নতুন-জগৎ
    expect(w2.findAll('li')).toHaveLength(1) // কাপড় টিকে-আছে
  })
})
</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/looms/extractTodos.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>// টু-ডু-তাঁতের প্রস্তুত-রশ্মি: App.vue-এর সত্য-উৎস-থেকে খালি-ফোল্ডারে পরীক্ষা-কারখানা
// (এই-ফাইলটি ব্যায়ামের-সহায়ক: পরের-স্টার্টারগুলোতে একই-ছাঁচ ফেরবে)
export interface Todo { id: number; text: string; done: boolean }

export function loadTodos(storage: Storage): Todo[] {
  try {
    const raw = storage.getItem('todos')
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed)
      ? parsed.filter(t =&gt; t &amp;&amp; typeof t.id === 'number' &amp;&amp; typeof t.text === 'string')
      : []
  } catch {
    return []                                  // পচা-সিন্দুক → খালি-কাপড় (নীরব-নয়: ডিফল্ট-নিরাপদ)
  }
}

export function saveTodos(storage: Storage, todos: Todo[]): void {
  storage.setItem('todos', JSON.stringify(todos))
}
</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) npx vitest run — চার-টেস্ট সবুজ। (২) **ভাঙো-১ (:key-শিক্ষা):** App.vue-এ :key="t.id" → :key="index" করো (v-for-এ index যোগ) → কাটা-সুতো-টেস্ট লাল — নাম-উল্টে-যাওয়া নিজের-চোখে। (৩) **ভাঙো-২ (স্মৃতি):** watch-এর {deep:true} তুলে-দাও → সিন্দুক-টেস্ট লাল। (৪) **ভাঙো-৩ (উদ্ভূদ-সত্য):** computed-এর-জায়গায় মেথড বসাও → দেখো shown আর রিয়েক্ট-করে-না যখন filter বদলায় (নতুন-প্রশ্ন: কেন?)। Context7-নোট: vuejs.org — v-model.trim ফর্ম-মডিফায়ার নথিভুত; watch-এ {deep:true} অ্যারে-গভীর-পরিবর্তনে বাধ্য — সিন্দুক-লেখার-আইন। / Tests: four green; then break :key, deep, and computed in turn — each pin cries its own lesson.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">Starter 1 — The Todo Loom, One File Whole</div>
    <svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="14" width="530" height="46" rx="10" fill="rgba(52,211,153,0.09)" stroke="#22d3ee" stroke-width="1.4"/>
      <text x="280" y="34" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">🌱 npm create vite todo-loom -- --template vue-ts → dev → প্রদীপ</text>
      <text x="280" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">দুই-ফাইল: main.ts (ছাঁচ) + App.vue (সম্পূর্ণ-কাপড়) — ৫০-লাইন, শূন্য-বাড়তি-নির্ভরতা</text>
      <rect x="15" y="78" width="253" height="120" rx="10" fill="rgba(66,184,131,0.07)" stroke="#6366f1" stroke-width="1.3"/>
      <text x="141" y="98" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">script-setup-ঘর</text>
      <text x="141" y="114" text-anchor="middle" fill="#94a3b8" font-size="6.5">ref: todos · draft · filter</text>
      <text x="141" y="128" text-anchor="middle" fill="#94a3b8" font-size="6.5">computed: shown · remaining</text>
      <text x="141" y="142" text-anchor="middle" fill="#94a3b8" font-size="6.5">add/remove/clearDone ক্রিয়া</text>
      <text x="141" y="158" text-anchor="middle" fill="#a5b4fc" font-size="6.5">watch(todos, {deep}) → localStorage</text>
      <text x="141" y="174" text-anchor="middle" fill="#64748b" font-size="6">স্মৃতি-রিফ্রেশেও-টিকে</text>
      <rect x="292" y="78" width="253" height="120" rx="10" fill="rgba(66,184,131,0.07)" stroke="#6366f1" stroke-width="1.3"/>
      <text x="418" y="98" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">template-ঘর</text>
      <text x="418" y="114" text-anchor="middle" fill="#94a3b8" font-size="6.5">form @submit.prevent + v-model.trim</text>
      <text x="418" y="128" text-anchor="middle" fill="#94a3b8" font-size="6.5">nav-ছাঁকনি-বাটন (:class-on)</text>
      <text x="418" y="142" text-anchor="middle" fill="#94a3b8" font-size="6.5">li v-for="t in shown" :key="t.id"</text>
      <text x="418" y="158" text-anchor="middle" fill="#a5b4fc" font-size="6.5">checkbox v-model="t.done" + strike</text>
      <text x="418" y="174" text-anchor="middle" fill="#64748b" font-size="6">footer: remaining + clearDone</text>
      <rect x="15" y="214" width="530" height="52" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="233" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">চার-মূল-সুতো-এক-কাপড়ে: ref · computed · v-for+:key · v-model (+watch-সিন্দুক)</text>
      <text x="280" y="248" text-anchor="middle" fill="#94a3b8" font-size="7">ব্যায়াম: এডিট-ইন-প্লেস · ট্যাগ-ছাঁকনি · প্রথম-mount-টেস্ট — দরজা ২০-এর-তলা-১</text>
      <text x="280" y="280" text-anchor="middle" fill="#64748b" font-size="8">ছোট-কিন্তু-পূর্ণ — এই-কাপড়ের-ওপরেই-পরের-ওয়ার্কশপের-বড়-নকশা</text>
    </svg>
    <div class="diag-cap">এক-ফাইলে-চার-সুতো: অবস্থা, উদ্ভূত, তালিকা, দুই-মুখ-সেতু — আর-সিন্দুকে-স্মৃতি; শেখা-কাপড়, ফেলে-দেওয়ার-নয়।</div>
  </div>`,
  senior: {
    title: "Starter-1 Card (Todo)",
    body: `<p><strong>স্থাপন</strong>: create-vite vue-ts। <strong>App.vue</strong>: ref(todos/draft/filter) + computed(shown/remaining) + add/remove/clearDone + watch(todos,{deep})→localStorage। <strong>টেমপ্লেট</strong>: @submit.prevent + v-model.trim; ছাঁকনি-বাটন-নেভ; v-for+:key(আসল-id); checkbox-v-model+strike; footer-remaining। <strong>ব্যায়াম</strong>: এডিট-ইন-প্লেস, ট্যাগ, প্রথম-টেস্ট। <strong>শিক্ষা</strong>: চার-মূল-সুতো-প্রথম-বার-একসাথে। <strong>ফাঁদ</strong>: প্রথম প্রজেক্টেই সব-ফিচার ঢোকানো — চার-সুতোর বেশি এখন নয়; আর localStorage-কে সত্য-উৎস বানানো (ইনমেমরি-স্টেট + সিঙ্ক-সেভ রাখো)।</p>`
  }
});
