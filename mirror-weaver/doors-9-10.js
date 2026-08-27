
doors.push({
  num: 9,
  icon: "🧰",
  color: "#ef4444",
  name: "যন্ত্রপাতির তাবিজ-ঘর",
  subtitle: "The Composable Forge — Reusable Logic",
  tech: "composable anatomy (state+actions returned), naming (use*), input=options-object, single vs multi-instance, useMutationAction dissected",
  spirit: "হিকমাহ — ḥikma (wisdom: a tool refined by reuse across many hands)",
  secret: "কম্পোজেবল = অবস্থা+ক্রিয়া এক-কাঠামোয়, use*-নামে, অপশন-অবজেক্টে ইন, রেফ-বান্ডেল আউট — তিন পাল্লার ফর্মের বারো-লাইন বয়লার তিন-লাইনে।",
  recall: {
    q: "composable আর util-ফাংশনের পার্থক্য কোথায়?",
    qen: "Composable vs plain util function?",
    a: "util বিশুদ্ধ-গণনা (in→out, অবস্থাহীন); composable Vue-র প্রতিক্রিয়া-তন্ত্রে অংশ নেয় — ref/computed/lifecycle ধরে রাখে ও ফেরত দেয়; use*-নাম, কম্পোনেন্টের setup-প্রসঙ্গে কল হয়।",
    aen: "A util is pure computation; a composable owns and returns reactive state and hooks — called in setup context, named use*."
  },
  story: `<p class="scene-setting">নয় নম্বর ঘর — কারখানার <strong>তাবিজ-ঘর</strong>। দেয়ালে সারি সারি ছোট ছোট রুপোর তাবিজ, প্রতিটির গায়ে খোদাই: <code>use*</code>। ঘরের
  মালিক <strong>মাজেদ সাহেব</strong> — তাঁর বাঁ হাতে ছয়-আঙুলের গ্রুভ-মাপা রুলার (সব তাবিজ একই আকারে গলায়)। তিনি ব্যাখ্যা করেন — <strong>"তাবিজ বানানোর
  তিন শপথ। এক — এক তাবিজে এক কাজ (loading? error? toast? একসাথে নয়, সব এক-বান্ডেলে)। দুই — নামে use-উপসর্গ, যেন দূর থেকেই চেনা যায়।
  তিন — ভেতরে যা বাঁধো (টাইমার, শ্রোতা), খুলেই দেবে; আর বাইরে অপশন-অবজেক্ট নেবে, রেফ-বান্ডেল ফেরাবে।"</strong> তারপর তিনি খুলে দেখান কারখানার
  সবচেয়ে বিখ্যাত তাবিজ — <code>useMutationAction</code>: ভেতরে চারটি স্প্রিং (running, pending, error, রিসেট-চাবি) আর একটি পাহারা-দাঁড়ি (re-entrancy
  গার্ড)। তিনি বলেন — <strong>"এই এক তাবিজ আমাদের প্রতিটি 'এখনই-করো' বাটনকে বারো-লাইন বয়লার থেকে মুক্ত করেছে — কারিগর শুধু তিন লাইনে
  মত জানায়: কী করবে, সফল হলে কী, ব্যর্থ হলে কোথায় দেখাবে।"</strong> শেষে সতর্কতা — <strong>এক তাবিজের দুই কপি দুই বাটনে চড়লে তাদের স্প্রিং আলাদা;
  শেয়ারড-অবস্থা চাইলে স্টোর (দরজা ১০)।"</strong></p>
  <p class="scene-setting en">Room nine — the workshop's <strong>talisman-room</strong>. Rows of small silver charms on
  the wall, each engraved <code>use*</code>. The owner, <strong>Majed Sahib</strong> — a six-grooved ruler in his left
  hand (every charm fits the same necklace). He explains — <strong>"three oaths in charm-making. One — one job per
  charm. Two — the use- prefix, recognizable from afar. Three — whatever you tie inside (timers, listeners), you
  untie yourself; outside, take an options-object, return a bundle of refs."</strong> Then he opens the workshop's most
  famous charm — <code>useMutationAction</code>: four springs inside (running, pending, error, reset-key) and one
  sentry-stand (the re-entrancy guard). He says — <strong>"this one charm freed every 'do it now' button from twelve
  lines of boilerplate — the artisan states only three lines of intent: what to do, what on success, where to show
  failure."</strong> Finally, caution — <strong>"two copies of one charm on two buttons keep separate springs; for
  shared state, the store (door 10)."</strong></p>
  <div class="dialogue">('"তাবিজ বানালে দুই দিক থেকে সিল করো," মুসা সরকার খাপের ভেতরের মখমল দেখালেন, "নকশা দিক থেকে ঠিক, কাঠ দিক থেকে ঠিক — তবেই ভেতরের জিনিস নড়ে না। নিখুঁত নকশা ভুল কাঠে বসালে যুদ্ধের মাঝে খপর খুলে যায় — আমি নিজে একবার হাড়ের বাটাম কাঠে বসিয়েছিলাম, দুই দিনেই ফেটে গিয়েছিল।"', 'মখমলের নরম ঘর্ষণে তোমার আঙুল থমকে যায় — দুই-দিকের সিল ছাড়া কোনো তাবিজই তাবিজ নয়।')</div><div class="dialogue en">"A talisman is sealed from two sides — design-side and wood-side. I once set bone buttons into wood; they cracked in two days."</div>
  <div class="dialogue">মাজেদ সাহেব তাঁর তাবিজ-বাক্স খুলে জিজ্ঞেস করলেন, "বলো — এই useFetch তাবিজ কি প্রতি-পর্দায় নতুন করে বানাতে হবে?" তুমি বললে, "একবার বানালেই তো..." মাজেদ থামিয়ে দিলেন: "তাবিজ বানানোর নিয়ম তিনটা। এক — নাম use* দিয়ে শুরু: যে-দেখে সে-বুঝে এটা যন্ত্র, কম্পোনেন্ট নয়। দুই — ভেতরের নির্ভরতা (স্টোর, প্রপ) বাইরে থেকে অপশন-হিসেবে নাও: বন্ধ-তাবিজ পরীক্ষা-করা যায় না। তিন — ফেরত দাও খাতা-আকারে { data, loading, error, refetch }: ব্যবহারকারী যা-চায় নাম-ধরে নেয়। আর মনে রেখো — তাবিজে কাপড়-রঙ নয়, শুধু যন্ত্র: পর্দার কাজ পর্দায় থাকুক।"</div>
<div class="dialogue en">Majed opened his amulet-box: "Must this useFetch amulet be re-forged per screen?" You said: "Forge once and..." He cut in: "Three rules of amulet-making. One — the name starts use*: whoever sees it knows an instrument, not a component. Two — inner dependencies (stores, props) come in as options from outside: a sealed amulet cannot be tested. Three — return it as a ledger { data, loading, error, refetch }: the user takes by name what they need. And remember — the amulet carries instruments, not cloth-colors: screen-work stays on the screen."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ কপি-পেস্ট যুক্তি</div>ফেচ-লোডিং-এরর তিন-লাইন প্রতি পর্দায় নতুন — বাগ পেলে দশ জায়গায় মেরামত।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ যন্ত্রপাতি-তাবিজ</div>এক-বার লেখা composable (useFetch) — সবাই ডাকে, বাগ-ফিক্স এক জায়গায়।</div></div>
  <div class="code-block">কম্পোজেবল-শাস্ত্র — useMutationAction ব্যবচ্ছেদ (প্রকৃত LP-কোড)

ছাঁচের তিন-শপথ (মাজেদ-নিয়ম):
  ① নাম: useXxx — সবসময়
  ② ইনপুট: অপশন-অবজেক্ট (প্রসারণযোগ্য —
     নতুন ক্ষেত্র যোগ হলে কলার ভাঙে না)
  ③ আউটপুট: refs + ফাংশনের অবজেক্ট-বান্ডেল
     (ডিস্ট্রাকচার করলেও প্রতিক্রিয়া বাঁচে, কারণ
     প্রতিটি সদস্য নিজেই রেফ/ফাংশন)

এক-নজরে useMutationAction (shared/composables):
  export interface MutationActionOptions&lt;TArg, TRes&gt; {
    mutate: (arg: TArg) =&gt; Promise&lt;TRes&gt;
    successMessage?: string
      | ((arg: TArg, res: TRes) =&gt; string)
    onSuccess?: (res: TRes, arg: TArg)
      =&gt; void | Promise&lt;void&gt;
    errorMode?: 'toast' | 'inline'
    errorMessage?: string
  }

  export function useMutationAction&lt;TArg, TRes&gt;(
    options: MutationActionOptions&lt;TArg, TRes&gt;) {
    const toast = useToast()
    const running = ref(false)
    const pending = ref&lt;TArg | null&gt;(null)
    const error   = ref&lt;string | null&gt;(null)

    async function run(arg: TArg): Promise&lt;void&gt; {
      if (running.value) return        // পাহারা-দাঁড়ি:
                                      // দ্বিতীয় ক্লিক no-op
      running.value = true
      pending.value = arg
      error.value = null
      let res: TRes
      try {
        res = await options.mutate(arg)
      } catch (e) {
        error.value = getApiErrorMessage(e, …)
        if (options.errorMode !== 'inline')
          toast.error(error.value)
        running.value = false; pending.value = null
        return
      }
      // ✓ মিউটেশন কমিটেড — পার্শ্ব-প্রভাব try-এর
      // বাইরে: onSuccess ব্যর্থ হলে সফল-লেখাকে
      // ব্যর্থ দেখাবে না
      running.value = false; pending.value = null
      if (options.successMessage) { …toast.success(…) }
      await options.onSuccess?.(res, arg)
    }
    function reset(): void { running.value=false
      pending.value=null; error.value=null }
    return { running, pending, error, run, reset }
  }

কলারের জীবন (তিন-লাইনের মত):
  const { running, error, run } = useMutationAction({
    mutate: (id) =&gt; svc.approve(id),
    successMessage: 'অনুমোদিত',
    onSuccess: () =&gt; refetch(),
  })
  &lt;Button :loading="running" @click="run(id)" /&gt;

পরিবার-মানচিত্র (LP-র তাবিজ-তাক):
  useMutationAction      — এক-পর্বের 'করো' (FSM/
                           delete/assign) + টোস্ট+গার্ড
  usePreviewConfirmFlow  — দুই-পর্বের চক-কালি
                           (দরজা ১৭-এ গভীরে)
  useDataFetch           — loading/error/data + অটো-
                           fetch (ড্যাশবোর্ড-অংশ)
  useToast / useFormErrors / useBillingPeriodSelection
                         — সাধারণ-ভিত্তি
  ফিচার-তাবিজ: useNachaStaging · useReconcileBatch ·
    useXeroForceImport · useBillingCycleProcessFlow …

নিয়ম-ছক:
  ✓ এক-তাবিজ-এক-কাজ · use*-নাম · অপশন-অবজেক্ট-ইন
  ✓ রেফ-বান্ডেল-আউট · পার্শ্ব-প্রভাব try-বাইরে
  ✓ উদাহরণ-প্রতি-স্বতন্ত্র স্প্রিং (শেয়ার্ড চাইলে স্টোর)
  ✓ টেস্ট-যোগ্য: নির্ভরতা অপশনে ঢুকিয়ে মক-করো
  ✗ কম্পোজেবলে DOM-সরাসরি · গ্লোবাবল-সিঙ্গলটন-রেফ
     (প্রতি-কলে নতুন, নইলে সব-কনজিউমার একসাথে)</div>
  <div class="stat-grid">
  <div class="stat-card"><div class="sc-num">ইনপুট: অপশন</div><div class="sc-label">রেফ-নয় · প্লেইন</div></div>
  <div class="stat-card"><div class="sc-num">আউটপুট: রেফ</div><div class="sc-label">সবসময় · আনর‍্যাপ-নয়</div></div>
  <div class="stat-card"><div class="sc-num">রি-এন্ট্র্যান্সি</div><div class="sc-label">ভেতরে · গার্ড</div></div>
  <div class="stat-card"><div class="sc-num">ক্লিনআপ</div><div class="sc-label">onUnmounted</div></div>
</div>
  <ul class="checklist"><li>useFetch লেখো: loading/error/data + অপশন-ইনপুট; দুই পর্দায় পুনর্ব্যবহার</li><li>নামকরণ-নিয়ম প্রয়োগ: use* প্রিফিক্স, রিটার্ন-অবজেক্ট — নিজের তাবিজ-তালিকা শুরু করো</li><li>লেজারপাইলট-কোড থেকে একটা পুনরাবৃত্ত-যুক্তি খুঁজে composable-খসড়া লেখো</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 40 (Codebuilder’s Guild) SOLID-নীতি শেখায় — কম্পোজেবল = এক-দায়িত্ব ও নির্ভরতা-উল্টানোর বাস্তব রূপ। আর Book 54 (LedgerPilot Craftsman)-এ প্রতিটি প্যাটার্নের প্রোডাকশন-প্রমাণ।</div></div>
  <div class="verse">হিকমাহ — প্রজ্ঞা: "যাকে হিকমাহ দেওয়া হয়েছে তাকে প্রচুর কল্যাণ দেওয়া হয়েছে" (২:২৬৯) — আর হিকমাহ জন্মায় পুনরায়-প্রয়োগে, এক-হাতে নয়। মাজেদ সাহেবের তাবিজ সেই হিকমাহর কারিগরি রূপ: প্রথম কারিগর বারো-লাইন লেখে, দ্বিতীয়জন দশ, তৃতীয়জন বুঝল — সাধারণ-সুতো তাবিজে গেঁথে দিল; এখন শত বাটন একই স্প্রিং-শৃঙ্খলায় চলে। যে কারখানা একই কষ্ট দুইবার সয়, সে হিকমাহ অস্বীকার করেছে; আর যে তাবিজ বানিয়ে দেয়ালে না ঝোলায়, সে প্রজ্ঞা কুপথে ঢেলে দেয়।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>তাবিজ-ফাঁদ:</strong> (১) মডিউল-স্কোপে <code>const x = ref()</code> কম্পোজেবল-বাইরে — সব কনজিউমার একই স্প্রিং ভাগ করে নেয়, নীরব ডেটা-মিশ্রণ; রেফ ফাংশনের ভেতরে। (২) কম্পোজেবল কল শর্তের-ভেতরে/লুপে — lifecycle-সংযুক্তি ভাঙে (setup-সিঙ্ক্রোনাস-কল)। (৩) সবকিছু এক তাবিজে ঢোকানো — useEverything-গন্ধ; ভাগ করো, নামে-ই সীমা বোঝা যাক।</div></div>
  <div class="secret-box">🧰 কম্পোজেবল = পুনর্ব্যবহারযোগ্য-জীবন্ত-যুক্তি: use*-নাম, অপশন-ইন, রেফ-আউট, পাহারা-ভেতরে — বারো-লাইন তিন-লাইনে। / Name it use*, take options, return refs, guard inside.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ৯-এর তাবিজ-কারখানা: নিজের useFetch-তাবিজ গেঁথে দুই পর্দায় ঝুলাও — একই যুক্তি, আলাদা স্প্রিং; Context7-যাচাইকৃত watchEffect+toValue-ছাঁচে। / Door 9's charm forge: forge your own useFetch and hang it on two screens — same logic, separate springs, on the guide's own watchEffect+toValue pattern.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/composables/useFetch.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { ref, watchEffect, toValue } from 'vue'

// তাবিজ-তিন-শপথ (মাজেদ-নিয়ম, Context7-যাচাইকৃত):
// ① use*-নাম ② ইনপুট নরমালাইজ (toValue: ref/getter/raw সব চলে)
// ③ রিটার্ন রেফ-বান্ডেল (ডিস্ট্রাকচারে প্রতিক্রিয়া বাঁচে)
export function useFetch&lt;T&gt;(url: string | (() =&gt; string)) {
  const data = ref&lt;T | null&gt;(null)
  const error = ref&lt;string | null&gt;(null)
  const loading = ref(false)

  // নকল-fetch — সত্যিকারে এখানে window.fetch বসবে
  function fakeFetch(u: string): Promise&lt;T&gt; {
    return new Promise((resolve, reject) =&gt;
      setTimeout(() =&gt; u.includes('bad')
        ? reject(new Error('নেটওয়ার্ক-ফাঁদ'))
        : resolve({ items: [u, 'সুতো', 'কাপড়'] } as T), 600))
  }

  const fetchData = () =&gt; {
    data.value = null
    error.value = null
    loading.value = true
    fakeFetch(toValue(url))                     // ← নরমালাইজড-ইনপুট
      .then((json) =&gt; { data.value = json })
      .catch((err) =&gt; { error.value = String(err) })
      .finally(() =&gt; { loading.value = false })
  }

  watchEffect(() =&gt; { fetchData() })            // url-বদলালে আপনা-আপনি পুনরায়

  return { data, error, loading, refetch: fetchData }
}</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/CharmScreenA.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { useFetch } from './composables/useFetch'

// পর্দা-A-র নিজের তাবিজ-কপি — নিজের স্প্রিং
const endpoint = ref('threads')
const { data, loading, error, refetch } = useFetch(
  () =&gt; \`/api/\${endpoint.value}\`            // getter-ইনপুট — বদলালে অটো-রি-ফেচ
)
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;পর্দা A — সুতো-তাক&lt;/h3&gt;
    &lt;button @click="endpoint = endpoint === 'threads' ? 'bad-url' : 'threads'"&gt;
      এন্ডপয়েন্ট বদলাও (error-পরীক্ষা)
    &lt;/button&gt;
    &lt;p v-if="loading"&gt;⏳ লোড হচ্ছে…&lt;/p&gt;
    &lt;p v-else-if="error" style="color:#ef4444"&gt;❌ {{ error }}&lt;/p&gt;
    &lt;pre v-else&gt;{{ data }}&lt;/pre&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/CharmScreenB.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { useFetch } from './composables/useFetch'

// পর্দা-B — একই তাবিজ, আলাদা কপি (শেয়ার্ড নয়!)
const { data, loading } = useFetch('/api/cloths')
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;পর্দা B — কাপড়-তাক&lt;/h3&gt;
    &lt;p v-if="loading"&gt;⏳ …&lt;/p&gt;
    &lt;pre v-else&gt;{{ data }}&lt;/pre&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import CharmScreenA from './CharmScreenA.vue'
import CharmScreenB from './CharmScreenB.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;CharmScreenA /&gt;
  &lt;hr&gt;
  &lt;CharmScreenB /&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) "এন্ডপয়েন্ট বদলাও" চাপো — পর্দা-A ত্রুটিতে যায়, **পর্দা-B অক্ষত** (আলাদা স্প্রিং — এটাই per-instance)। (২) url-getter বদলালেই অটো-পুনরায়-আনার জাদু দেখো (watchEffect)। (৩) দুই পর্দার loading-গুলো আলাদা টিপে টিপে ওঠে — শেয়ার্ড-অবস্থা চাইলে স্টোর (দরজা ১০)। / Tests: break screen A and watch B stay untouched (per-instance springs); change the getter to see auto-refetch; separate loading states prove non-shared.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">The Talisman — Composable Anatomy</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowC9" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
      <rect x="15" y="14" width="200" height="118" rx="11" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="115" y="36" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">📥 ইন: অপশন-অবজেক্ট</text>
      <text x="115" y="52" text-anchor="middle" fill="#94a3b8" font-size="7">mutate(arg) — কী করবে</text>
      <text x="115" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">successMessage / onSuccess</text>
      <text x="115" y="80" text-anchor="middle" fill="#94a3b8" font-size="7">errorMode / errorMessage</text>
      <text x="115" y="98" text-anchor="middle" fill="#a5b4fc" font-size="6.8">নতুন-ক্ষেত্র যোগে কলার ভাঙে না</text>
      <text x="115" y="118" text-anchor="middle" fill="#64748b" font-size="6.5">use*: (options) =&gt; …</text>
      <rect x="345" y="14" width="200" height="118" rx="11" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="445" y="36" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">📤 আউট: রেফ-বান্ডেল</text>
      <text x="445" y="52" text-anchor="middle" fill="#94a3b8" font-size="7">running · pending · error (refs)</text>
      <text x="445" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">run(arg) · reset() (ক্রিয়া)</text>
      <text x="445" y="84" text-anchor="middle" fill="#a5b4fc" font-size="6.8">ডিস্ট্রাকচার-নিরাপদ — প্রতিটি সদস্য স্বয়ং-প্রতিক্রিয়</text>
      <text x="445" y="104" text-anchor="middle" fill="#64748b" font-size="6.5">:loading="running" @click="run(id)"</text>
      <rect x="90" y="156" width="380" height="84" rx="11" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="280" y="178" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">🧰 ভেতরের যন্ত্র (useMutationAction)</text>
      <text x="280" y="194" text-anchor="middle" fill="#94a3b8" font-size="7">পাহারা-দাঁড়ি: if (running.value) return — দ্বিতীয় ক্লিক no-op</text>
      <text x="280" y="208" text-anchor="middle" fill="#94a3b8" font-size="7">try { mutate } catch { এরর-মোড: toast|inline }</text>
      <text x="280" y="222" text-anchor="middle" fill="#a5b4fc" font-size="7">✓ onSuccess try-এর বাইরে — রিফেচ-ব্যর্থতা মিউটেশন-সাফল্য মুছবে না</text>
      <text x="280" y="236" text-anchor="middle" fill="#64748b" font-size="6.5">reset() — মোডাল-পুনরায়-খোলায় বাসী-এরর মুছে</text>
      <line x1="217" y1="72" x2="343" y2="72" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#arrowC9)"/>
      <text x="280" y="62" text-anchor="middle" fill="#64748b" font-size="7">তাবিজের প্রবাহ</text>
      <rect x="15" y="256" width="530" height="40" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="273" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">পরিবার: usePreviewConfirmFlow (দুই-পর্ব) · useDataFetch (অটো-ফেচ) · ফিচার-তাবিজ (Nacha/Reconcile/Xero…)</text>
      <text x="280" y="288" text-anchor="middle" fill="#94a3b8" font-size="7">⚠ ইনস্ট্যান্স-প্রতি স্বতন্ত্র স্প্রিং — শেয়ার্ড-অবস্থা চাইলে স্টোর (দরজা ১০) · কম্পোজেবলে DOM-স্পর্শ নিষেধ</text>
      <text x="280" y="308" text-anchor="middle" fill="#64748b" font-size="8">এক কষ্ট দুইবার সয়ো না — সুতো তাবিজে গাঁথো, শত বাটনে একই শৃঙ্খলা</text>
    </svg>
    <div class="diag-cap">অপশন-ইন → পাহারা+স্প্রিং-ভেতরে → রেফ-বান্ডেল-আউট: বারো-লাইন বয়লারের তিন-লাইনে প্রকাশ।</div>
  </div>`,
  senior: {
    title: "Composable Card",
    body: `<p><strong>ছাঁচ</strong>: <code>useXxx(options) → { refs…, actions… }</code>; অপশন-অবজেক্ট-ইন (প্রসারণযোগ্য), রেফ-বান্ডেল-আউট (ডিস্ট্রাকচার-নিরাপদ)। <strong>শৃঙ্খলা</strong>: এক-তাবিজ-এক-কাজ; re-entrancy গার্ড; পার্শ্ব-প্রভাব try-বাইরে; reset(); ইনস্ট্যান্স-প্রতি-স্বতন্ত্র (রেফ ফাংশন-ভেতরে; শেয়ার্ড→স্টোর); setup-সিঙ্ক্রোনাস-কল। <strong>LP-তাক</strong>: useMutationAction (এক-পর্ব), usePreviewConfirmFlow (চক-কালি), useDataFetch (অটো-ফেচ), useToast/useFormErrors (ভিত্তি), ফিচার-তাবিজ। <strong>ফাঁদ</strong>: কম্পোজেবলে স্টোর-নির্ভরতা লুকিয়ে রাখা — ইনপুট অপশন-বস্তুতে যাও, নাহলে পরীক্ষা-কারখানায় ঢুকতেই প্রক্সি-জাল লাগবে।</p>`
  }
});

doors.push({
  num: 10,
  icon: "🏛️",
  color: "#ec4899",
  name: "শহরের কোষাগার",
  subtitle: "The City Treasury — Pinia State Management",
  tech: "defineStore, setup-store syntax, state/getters/actions, storeToRefs, session-scoped reset, persistence, when NOT to use a store",
  spirit: "বাইতুল-মাল — bayt al-māl (the public treasury: one source, many hands, strict accounting)",
  secret: "কম্পোনেন্ট-জুড়ে-শেয়ার্ড সত্য স্টোরে; সেটআপ-স্টোর ছাঁচে ref+computed+ফাংশন; পড়া storeToRefs, ক্রিয়া সরাসরি; লগআউটে resetAll — কোষাগার খালি না করলে পরের ব্যবহারকারী আগের সোনা পায়।",
  recall: {
    q: "কোন অবস্থা স্টোরে যায়, কোনটা কম্পোনেন্টে থাকে?",
    qen: "What state belongs in a store vs the component?",
    a: "একাধিক পর্দা/বংশ-জুড়ে শেয়ার্ড (সেশন, ন্যাভ, প্রিফারেন্স) বা লগআউটে-ফেলতে-হবে এমন অবস্থা স্টোরে; এক-ফর্মের স্থানীয় ইনপুট-সত্য কম্পোনেন্টেই — সবকিছু স্টোরে তুললে বাজেট-অফিস প্রতিটি চিলেকে নেয়।",
    aen: "Shared cross-screen state (or state that must reset on logout) goes to the store; single-form local truth stays local."
  },
  story: `<p class="scene-setting">দশ নম্বর ঘর আসলে ঘর নয় — শহরের কেন্দ্রের <strong>কোষাগার-ভবন</strong>। এর রক্ষক <strong>মুসা সরকার</strong> — কোমরে
  পিতলের চাবির-গোছা, খাতার প্রতিটি পাতায় সবুজ রুল। তিনি তোমাকে ভেতরে নিয়ে দেখান — একটাই <strong>মূল-খাতা</strong> (স্টোর), তার শাখায়
  শাখায় সাব-খাতা (auth, navMenu, capabilities, billingDefaults)। <strong>"প্রতিটি কারিগর নিজের টিলে-টিলে হিসাব রাখলে শহরে দুই সত্য
  জন্মায়,"</strong> — তিনি বলেন — <strong>"সাব-খাতাগুলো তাই কেন্দ্রে: কে প্রবেশ করেছে (auth), তার মেনু কী (navMenu), কী পারে (capabilities),
  তার ডিফল্ট কী (billingDefaults)। পড়তে এসো storeToRefs নিয়ে, কাজ করতে এসো সরাসরি-ক্রিয়ায়; আর যাওয়ার সময় —"</strong> তিনি একটা লাল লিভার
  দেখান: <strong>"লগআউট = resetAll — প্রতিটি সাব-খাতা খালি। নইলে পরের ব্যবহারকারী ঢুকে আগের জনের সোনা খুঁজে পাবে, আর ভাববে সে-ই মালিক।"</strong>
  পাশের ছোট ঘরে sessionStorage-সিন্দুক — রিফ্রেশ মানেই খাতা হারায় না।</p>
  <p class="scene-setting en">Room ten is no room — it is the city's <strong>treasury-building</strong>. Its keeper
  <strong>Musa Sorkar</strong> — a brass key-ring at his waist, green rules on every ledger page. He shows you in:
  one <strong>master-ledger</strong> (the store), with branch ledgers (auth, navMenu, capabilities, billingDefaults).
  <strong>"if every artisan keeps counts in his own hut, the city births two truths,"</strong> — he says —
  <strong>"so the branches live centrally: who entered (auth), their menu (navMenu), what they may do
  (capabilities), their defaults (billingDefaults). Come to read with storeToRefs, come to act with direct actions;
  and on leaving —"</strong> he shows a red lever: <strong>"logout = resetAll — every branch ledger emptied.
  Otherwise the next user walks in and finds the previous one's gold, and believes it his own."</strong> In the side
  chamber, a sessionStorage safe — a refresh never loses the ledger.</p>
  <div class="dialogue">('"কোষাগারের খাতা সবার হাতে এক-ই," মুসা সরকার বড় নথিটা টেবিলে ছড়িয়ে দিলেন, "কেউ নিজের পাতা লুকিয়ে রাখে না। তবে খেয়াল করো — পাতা ওল্টানোর ক্ষমতা যার, খাতার হেফাজত তার। একবার দুই লোক দুই পাতায় দুই দাম লিখেছিল; বাজার সেই দুই দামেই ভেঙে পড়েছিল।"', 'খাতার পাতার খসখস শব্দে কান খাড়া হয় — এক-সত্যের শান্তি আর দুই-সত্যের ঝগড়া, দুই-ই টের পাও।')</div><div class="dialogue en">"One ledger, the same page for all hands. Two men once wrote two prices on two pages — the market broke on both."</div>
  <div class="dialogue">মুসা সরকার চাবির-গোছা ঘুরিয়ে জিজ্ঞেস করলেন, "বলো — প্রতিটি পর্দা নিজে-নিজে কোষাগারে ঢুকলে নিয়ম কে মানবে?" তুমি বললে, "চাবি-রক্ষক তো আপনি!" মুসা সরকার হাসলেন: "আমি দরজা দিই, নিয়ম দিইনা — নিয়ম দেয় স্টোরের গঠন। state কেবল খাতায় লেখো (অ্যাকশনে), কম্পোনেন্ট থেকে সরাসরি ঘষামাজা নিষেধ; গেটার হোক computed-খাত — মাগলে মিলবে, বসে-থাকা নয়; আর যে-মান কোষাগার থেকে নাও, storeToRefs-ঝাড়ি দিয়ে নাও — খালি-হাতে টানলে সুতো ছিঁড়ে যায় (রিঅ্যাক্টিভিটি হারায়), পর্দা আর বদলায় না। তিন নিয়ম — লেখা এক-জায়গায়, পড়া ক্যাশে-সহ, নেওয়া ঝাড়ি-সহ।"</div>
<div class="dialogue en">Musa Sarkar turned his key-ring: "If every screen walks into the vault itself, who keeps the rules?" You said: "The key-keeper — you!" He laughed: "I open doors, I don't make rules — the store's structure does. Write state only in the ledger (actions); no direct tampering from components; let getters be computed-pages — served on demand, not idling; and whatever you take from the vault, take through the storeToRefs sieve — pull bare-handed and the thread snaps (reactivity lost), the screen never re-renders. Three rules — writing in one place, reading with cache, taking with the sieve."</div>
  <div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল পথ</div>প্রতিটি পর্দায় নিজের খাতা — দুই পর্দায় দুই দাম; লগআউটে বাসী-মেমরি।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক পথ</div>এক কোষাগার (store) — সব পর্দা এক সত্য পড়ে; resetAll এক লিভারে সব মুছে দেয়।</div>
</div>
  <div class="code-block">Pinia-শাস্ত্র — LP-র auth.store (প্রকৃত কোড-ছায়া)

সেটআপ-স্টোর ছাঁচ (Options-স্টোরের চেয়ে প্রস্তাবিত):
  export const useAuthStore = defineStore('auth', () =&gt; {
    // ── অবস্থা (state = refs) ──
    const user = ref&lt;User | null&gt;(null)
    const isAuthenticated = ref(false)
    const isLoading = ref(false)
    const error = ref&lt;string | null&gt;(null)

    // ── উদ্ভূত (getters = computed) ──
    const userRole = computed(() =&gt; user.value?.role ?? null)
    const userRoles = computed&lt;Set&lt;UserRole&gt;&gt;(() =&gt; {
      if (!user.value) return new Set()
      return new Set(user.value.roles ?? [user.value.role])
    })
    const fullName = computed(() =&gt;
      user.value ? \`\${user.value.first_name} \${user.value.last_name}\` : null)

    // ── ক্রিয়া (actions = সাধারণ ফাংশন) ──
    async function login(creds: LoginRequest) {
      isLoading.value = true; error.value = null
      try {
        const res = await authService.login(creds)
        user.value = res.user
        isAuthenticated.value = true
        persist()                       // sessionStorage-সিন্দুক
      } catch (e) {
        error.value = getApiErrorMessage(e, 'লগইন ব্যর্থ')
        throw e                          // কলার-কে ফর্ম-জানানোর সুযোগ
      } finally { isLoading.value = false }
    }
    function logout() {
      user.value = null; isAuthenticated.value = false
      resetAllSessionScopedStores()      // 🔴 লাল-লিভার!
      authService.postLogout().catch(() =&gt; {})
    }
    function persist() { sessionStorage.setItem(
      AUTH_STORAGE_KEY, JSON.stringify({ … })) }
    function restore() { …sessionStorage থেকে… }

    return { user, isAuthenticated, isLoading, error,
             userRole, userRoles, fullName,
             login, logout, restore }
  })

ব্যবহার — দুই-হাত নিয়ম:
  const auth = useAuthStore()
  const { user, isAuthenticated } = storeToRefs(auth)
  // পড়া/টেমপ্লেট-বাঁধন → storeToRefs (প্রতিক্রিয়া-জীবিত)
  auth.logout()                       // ক্রিয়া — সরাসরি
  auth.login(creds)                   // async-ক্রিয়া: await-যোগ্য

LP-র কোষাগার-নকশা (app/session/):
  auth.store         — পরিচয়+লগইন/আউট+sessionStorage
  navMenu.store      — মেনু-ম্যানিফেস্ট-অবস্থা
  capabilities.store — কী-পারে-তালিকা
  billingDefaults.store — ব্যবহারকারীর ডিফল্ট
  features.store     — ফিচার-গ্রান্ট (দরজা ১৪-এ গার্ড-গল্প)
  + sessionScopedStores.ts — resetAllSessionScopedStores():
    লগআউটে সব-সাব-খাতা এক-লিভারে খালি (৫ স্টোর
    হাতে-হাতে মুছলে একটাও ভুল হলে পরের-ব্যবহারকারী
    আগের-সত্য দেখে)

কবে-স্টোর, কবে-নয়:
  স্টোর ✓                          | কম্পোনেন্ট ✓
  ----------------------------------|------------------
  বহু-পর্দা-শেয়ার্ড (সেশন/ন্যাভ)     | এক-ফর্মের ইনপুট
  লগআউটে-রিসেট-প্রয়োজন             | মোডাল-খোলা/বন্ধ
  বহু-উদ্হার-কম্পোজেবলের ভাগাভাগি     | হালকা UI-অবস্থা
  পারসিস্ট/রিস্টোর লাগবে             | জন্ম-মৃত্যু পর্দার সাথে

Options-স্টোর (জ্ঞাতব্য — পুরনো কোডে দেখবে):
  defineStore('x', {
    state: () =&gt; ({ n: 0 }),
    getters: { double: (s) =&gt; s.n * 2 },
    actions: { bump() { this.n++ } },
  })
  · দুই-ছাঁচ মেশাবে না; নতুন = সেটআপ-স্টোর

SSR-নোট: সেশন-পারসিস্টেন্স প্লাগইনের
store.replaceState পথ — এই বইয়ের স্কোপ-বাইরের গভীর-জল</div>
  <ul class="checklist"><li>setup-স্টোর লেখো: state + getter + অ্যাকশন; দুই পর্দা থেকে ব্যবহার করো</li><li>storeToRefs ছাড়া ডিস্ট্রাকচার করে রিঅ্যাক্টিভিটি-হারানো প্রমাণ করো</li><li>লেজারপাইলটের auth-স্টোরের আকার নোট করো — কোন state/getter/action কী দায়িত্বে</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 54 (LedgerPilot Craftsman — ৩৭ দরজা) Pinia-স্টোরের প্রোডাকশন-নকশা (auth/session/lead স্টোর) দেখায় — এই কোষাগারের বাস্তব মানচিত্র।</div></div>
  <div class="verse">বাইতুল-মাল — পাবলিক কোষাগার: "সম্পদ যেন শুধু ধনীদের মধ্যে ঘুরে না বেড়ায়" (৫৯:৭) — কেন্দ্রীয়-হিসাব শাসনের ন্যায়ের শর্ত। মুসা সরকারের ভবন সেই বাইতুল-মালের তাঁত-রূপ: সত্য এক-খাতায়, প্রবেশাধিকার সবার, প্রস্থানে খাতা-খালি — ন্যায়ের তিন-স্তম্ভ। যে শহরে প্রত্যেকে নিজের খাতা নিজের বুকে বাঁধে, সেখানে হিসাব আছে বটে — কিন্তু শাসন নেই; আর যে কোষাগার প্রস্থানে খালি হয় না, সে চিরকাল আগের-মানুষের দখলে থাকে — এক অন্যায় যা জন্মায় শুধু ভুলে যাওয়া থেকে, ইচ্ছা থেকে নয়।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>কোষাগার-ফাঁদ:</strong> (১) সরাসরি-ডিস্ট্রাকচার (<code>const { user } = store</code>) — রিফ্রেশ-পরে বোবা-পর্দা; storeToRefs ছাড়া কেবল ক্রিয়া। (২) লগআউটে শুধু auth খালি করা — navMenu/capabilities-এ পুরনো-ব্যবহারকারীর ছায়া থাকে পরের লগইনে; resetAll-লিভার একবারই লেখো। (৩) সব-কিছু স্টোরে — টোস্ট-টিক পর্যন্ত কোষাগারে তোলা; স্থানীয়-সত্য ঘরেই থাকুক।</div></div>
  <div class="secret-box">🏛️ শেয়ার্ড-সত্য কোষাগারে: সেটআপ-স্টোর (ref+computed+ফাংশন), পড়া storeToRefs, ক্রিয়া সরাসরি, লগআউট লাল-লিভারে সব-খালি। / One ledger for shared truth; read through storeToRefs, act directly, reset everything on exit.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ১০-এর কোষাগার: নিজের setup-স্টোর বাঁধো, দুই পর্দা এক খাতা পড়ে, লাল-লিভারে সব-খালি। আগে npm install pinia + main.ts-এ app.use(createPinia())। / Door 10's treasury: build your own setup-store, two screens reading one ledger, one red lever. First: npm install pinia and app.use(createPinia()).</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/stores/threads.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// সেটআপ-স্টোর: state=ref · getters=computed · actions=ফাংশন
export const useThreadsStore = defineStore('threads', () =&gt; {
  // ── অবস্থা ──
  const threads = ref&lt;string[]&gt;(['সুতো', 'রেশম'])
  const currentUser = ref&lt;string | null&gt;(null)

  // ── উদ্ভূত (computed-খাত: মাগলে মিলবে) ──
  const count = computed(() =&gt; threads.value.length)
  const greeting = computed(() =&gt;
    currentUser.value ? \`স্বাগতম, \${currentUser.value}\` : 'অতিথি')

  // ── ক্রিয়া (খাতায়-লেখা এক-জায়গায়) ──
  function add(t: string) {
    threads.value.push(t)
  }
  function remove(t: string) {
    threads.value = threads.value.filter(x =&gt; x !== t)
  }
  function login(name: string) { currentUser.value = name }
  // 🔴 লাল-লিভার — প্রস্থানে সব-খালি
  function resetAll() {
    threads.value = []
    currentUser.value = null
  }

  return { threads, currentUser, count, greeting, add, remove, login, resetAll }
})</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/TreasuryScreenA.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { storeToRefs } from 'pinia'
import { useThreadsStore } from './stores/threads'

const store = useThreadsStore()
// দুই-হাত নিয়ম: পড়া → storeToRefs (প্রতিক্রিয়া-জীবিত)
const { threads, count } = storeToRefs(store)
// ক্রিয়া → সরাসরি ডিস্ট্রাকচার (ফাংশন, ছেঁড়ে না)
const { add } = store
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;পর্দা A — কোষাগার-পাঠ&lt;/h3&gt;
    &lt;p&gt;মোট সুতো: {{ count }}&lt;/p&gt;
    &lt;input @keyup.enter="add(($event.target as HTMLInputElement).value); ($event.target as HTMLInputElement).value = ''" placeholder="নতুন সুতো + Enter"&gt;
    &lt;ul&gt;&lt;li v-for="t in threads" :key="t"&gt;{{ t }}&lt;/li&gt;&lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/TreasuryScreenB.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { storeToRefs } from 'pinia'
import { useThreadsStore } from './stores/threads'

const store = useThreadsStore()
const { greeting, currentUser } = storeToRefs(store)
const { login, remove, resetAll } = store
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;পর্দা B — {{ greeting }}&lt;/h3&gt;
    &lt;button v-if="!currentUser" @click="login('রফিক')"&gt;প্রবেশ করো&lt;/button&gt;
    &lt;template v-else&gt;
      &lt;button @click="remove('সুতো')"&gt;সুতো সরাও&lt;/button&gt;
      &lt;button @click="resetAll" style="color:#ef4444"&gt;🔴 লগআউট-লিভার&lt;/button&gt;
    &lt;/template&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import TreasuryScreenA from './TreasuryScreenA.vue'
import TreasuryScreenB from './TreasuryScreenB.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;TreasuryScreenA /&gt;
  &lt;hr&gt;
  &lt;TreasuryScreenB /&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) A-তে সুতো যোগ করো — **B-র count-পাঠ একই মুহূর্তে বদলায়** (এক-খাতা!)। (২) B-তে প্রবেশ করো — A-এর কোথাও ছোঁয়া লাগেনি, তবু greeting জেগে ওঠে। (৩) লাল-লিভার টানো — দুই পর্দাই খালি; নতুন ব্যবহারকারী আগের সোনা পায় না। (৪) প্রমাণ-ফাঁদ: TreasuryScreenA-তে storeToRefs-এর বদলে const { threads } = store লিখে দেখো — যোগ-করা সুতো পর্দায় আসে না (রিঅ্যাক্টিভিটি-ছেঁড়া, Pinia-গাইডের নিজের সতর্কতা)। / Tests: add in A and watch B sync; pull the red lever; then break storeToRefs on purpose and watch the screen go deaf.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">The Treasury — One Ledger, Five Branches, One Red Lever</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowT10" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
      <rect x="170" y="12" width="220" height="60" rx="11" fill="rgba(66,184,131,0.12)" stroke="#6366f1" stroke-width="1.6"/>
      <text x="280" y="34" text-anchor="middle" fill="#a5b4fc" font-size="9.5" font-weight="700">🏛️ মূল-খাতা (Pinia)</text>
      <text x="280" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">defineStore('auth', () =&gt; {…}) — সেটআপ-স্টোর</text>
      <text x="280" y="64" text-anchor="middle" fill="#64748b" font-size="6.5">state=ref · getters=computed · actions=ফাংশন</text>
      <rect x="15" y="96" width="160" height="52" rx="9" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.3"/>
      <text x="95" y="115" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">auth.store</text>
      <text x="95" y="128" text-anchor="middle" fill="#94a3b8" font-size="6.5">পরিচয় · লগইন/আউট · সিন্দুক</text>
      <rect x="185" y="96" width="95" height="52" rx="9" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.3"/>
      <text x="232" y="115" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">navMenu</text>
      <text x="232" y="128" text-anchor="middle" fill="#94a3b8" font-size="6.5">মেনু-ম্যানিফেস্ট</text>
      <rect x="290" y="96" width="95" height="52" rx="9" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.3"/>
      <text x="337" y="115" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">capabilities</text>
      <text x="337" y="128" text-anchor="middle" fill="#94a3b8" font-size="6.5">কী-পারে</text>
      <rect x="395" y="96" width="150" height="52" rx="9" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.3"/>
      <text x="470" y="115" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">features + defaults</text>
      <text x="470" y="128" text-anchor="middle" fill="#94a3b8" font-size="6.5">গ্রান্ট · ডিফল্ট</text>
      <line x1="230" y1="72" x2="105" y2="94" stroke="#a5b4fc" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowT10)"/>
      <line x1="265" y1="72" x2="232" y2="94" stroke="#a5b4fc" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowT10)"/>
      <line x1="300" y1="72" x2="335" y2="94" stroke="#a5b4fc" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowT10)"/>
      <line x1="335" y1="72" x2="465" y2="94" stroke="#a5b4fc" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrowT10)"/>
      <rect x="15" y="172" width="530" height="66" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="280" y="193" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">দুই-হাত নিয়ম</text>
      <text x="280" y="209" text-anchor="middle" fill="#94a3b8" font-size="7.5">পড়া: const { user, isAuthenticated } = storeToRefs(auth) — প্রতিক্রিয়া-জীবিত</text>
      <text x="280" y="225" text-anchor="middle" fill="#94a3b8" font-size="7.5">কাজ: auth.login(creds) / auth.logout() — সরাসরি; async-ক্রিয়া await-যোগ্য</text>
      <rect x="15" y="252" width="530" height="40" rx="10" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.4"/>
      <text x="280" y="270" text-anchor="middle" fill="#f87171" font-size="8" font-weight="700">🔴 লাল-লিভার: logout → resetAllSessionScopedStores()</text>
      <text x="280" y="284" text-anchor="middle" fill="#94a3b8" font-size="7">পাঁচ সাব-খাতা এক-লিভারে খালি — খালি-না-করলে পরের ব্যবহারকারী আগের সোনা পায় · sessionStorage = রিফ্রেশ-সিন্দুক</text>
      <text x="280" y="312" text-anchor="middle" fill="#64748b" font-size="8">শহরের সত্য কেন্দ্রে এক-খাতায়; প্রবেশে ভর, প্রস্থানে খালি — দুই-ই ন্যায়ের শর্ত</text>
    </svg>
    <div class="diag-cap">এক মূল-খাতা, পাঁচ শাখা, এক লাল-লিভার: শেয়ার্ড-সত্য কেন্দ্রে, স্থানীয়-সত্য ঘরে, প্রস্থান-পরিচ্ছন্নতা শাসনের অংশ।</div>
  </div>`,
  senior: {
    title: "Pinia Card",
    body: `<p><strong>ছাঁচ</strong>: <code>defineStore('নাম', () =&gt; { refs…; computeds…; ফাংশন…; return {...} })</code> (সেটআপ-স্টোর)। <strong>ব্যবহার</strong>: পড়া <code>storeToRefs</code>, ক্রিয়া সরাসরি-কল; async-অ্যাকশন await-যোগ্য। <strong>পারফরম্যান্স-প্রয়োজনে</strong> $reset/state-প্যাচ। <strong>শৃঙ্খলা</strong>: কেন্দ্রে-শেয়ার্ড-সত্য, ঘরে-স্থানীয়; লগআউট-রিসেট কেন্দ্রীয়-লিভারে (LP: resetAllSessionScopedStores)। <strong>পারসিস্টেন্স</strong>: sessionStorage (auth)। <strong>LP-শাখা</strong>: auth · navMenu · capabilities · billingDefaults · features। <strong>ফাঁদ</strong>: <code>storeToRefs</code> ছাড়া স্টোর-ডিস্ট্রাকচার — রিঅ্যাক্টিভিটি ছিঁড়ে যায়; আর যেকোনো-কম্পোনেন্ট থেকে সরাসরি স্টোর-মিউটেশন = কোষাগারের সিঁধকি-দরজা।</p>`
  }
});
