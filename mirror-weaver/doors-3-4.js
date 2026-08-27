
doors.push({
  num: 3,
  icon: "⚡",
  color: "#a78bfa",
  name: "প্রতিবিম্বের শ্বাস",
  subtitle: "The Mirror's Breath — Reactivity in Depth",
  tech: "ref vs reactive, shallowRef, computed (cached), watch vs watchEffect, side-effects, lifecycle hooks",
  spirit: "তাসাররুফ — taṣarruf (the flow: power moves only through its proper channels)",
  secret: "বস্তু বদলাও, DOM ছোঁয়ো না — ref-এর .value, computed-এর স্মৃতি, watch-এর পাহারা; গণনা computed-এ, পার্শ্ব-প্রভাব watch-এ।",
  recall: {
    q: "store থেকে সরাসরি ডিস্ট্রাকচার করলে প্রতিক্রিয়া কেন মরে, আর বাঁচার উপায়?",
    qen: "Why does direct destructuring kill reactivity, and the fix?",
    a: "একবার কপি হয়ে যায় — পরে সোর্স বদলালে কপি জানে না। বাঁচার পথ: computed দিয়ে মোড়ো, অথবা storeToRefs (Pinia) দিয়ে ref-এ আনর‍্যাপ করো; ফাংশন সরাসরি কল করা যায়।",
    aen: "The copy detaches from the source. Fix: wrap in computed, or unwrap via storeToRefs (Pinia); actions can be called directly."
  },
  story: `<p class="scene-setting">কারখানার তৃতীয় ঘর — <strong>শ্বাস-ঘর</strong>। জোহরা আপা এখানে তিনটি যন্ত্র দেখান। <strong>স্পর্শ-কাচ</strong> (<code>ref</code>): একটা মান, স্ক্রিপ্টে
  ছুঁলে বাজে — <code>.value</code>; টেমপ্লেটে খালি নামেই খোলে। <strong>স্মৃতি-কাচ</strong> (<code>computed</code>): গণনা একবার করে মনে রাখে — মূল না বদলালে
  দ্বিতীয়বার গণনা নেই, পুরনো উত্তর ফেরায়। <strong>পাহারা-কাচ</strong> (<code>watch</code>): চুপচাপ তাকিয়ে থাকে, বদলালে পাশের কাজ চালায় — fetch, ইতিহাস,
  ডিবাউন্স। তারপর তিনি একটা পুরনো ভাঙা তাঁত দেখান — যেখানে শাগিরদ স্টোর থেকে <code>const { user } = store</code> লিখেছিল; প্রথম দিন চলল, পরে
  কেউ লগইন-তথ্য বদলালে পর্দা বোবা হয়ে রইল। জোহরা বলেন — <strong>"তুমি নদী থেকে এক গ্লাস পানি তুলে নিয়েছিলে — নদী বইলে গ্লাস বাসী পানিই দেয়।
  প্রতিক্রিয়া চাইলে নদীর সাথেই থাকো: computed বা storeToRefs।"</strong> শেষে তিনি <code>watchEffect</code>-এর খোলা-চোখ দেখিয়ে সাবধান করেন —
  সে নিজেই নির্ভরতা খুঁজে নেয়, চালানো-সংখ্যা বেশি হয়ে যেতে পারে; নির্ভরতা স্পষ্ট হলে <code>watch</code>-ই শাস্ত্র।</p>
  <p class="scene-setting en">The third room — <strong>the breath-room</strong>. Zohra shows three instruments. The
  <strong>touch-glass</strong> (<code>ref</code>): one value, rings in script via <code>.value</code>, unwraps bare in
  templates. The <strong>memory-glass</strong> (<code>computed</code>): calculates once and remembers — unchanged source
  returns the cached answer. The <strong>watch-glass</strong> (<code>watch</code>): stares quietly, runs side-work on
  change — fetch, history, debounce. Then an old broken loom: an apprentice had written <code>const { user } = store</code>;
  it worked on day one, then a login change left the screen deaf. Zohra — <strong>"you took a glass of water from the
  river — when the river flows, the glass still holds stale water. To stay reactive, stay with the river: computed or
  storeToRefs."</strong> Finally she cautions about <code>watchEffect</code>'s open eye — it discovers its own
  dependencies and may over-run; when dependencies are explicit, <code>watch</code> is the discipline.</p>
  <div class="dialogue">('"শ্বাস থামলে শরীর তো মরে না সাথে সাথে," রফিক তাঁর বাঁশির পাশে বসা পাখির খাঁচার দিকে ইশারা করলেন, "কিছুক্ষণ নড়ে, তারপর থামে। প্রতিক্রিয়াও তাই — যাকে কেউ পড়ে না, সে ধীরে ধীরে নীরব হয়ে যায়। আমি একবার পুরো তালিকা গভীর-পাহারায় রেখেছিলাম — দশ স্তর নিচের এক মান বদলালেও ওপরে কিছুই জানে না।"', 'খাঁচার পাখিটা ঠোঁট খুলে আধ-সুর তুলে থামে — তুমি বুঝলে, না-দেখা নির্ভরতার নীরবতাও এমনই।')</div><div class="dialogue en">"What no one reads slowly falls silent. I once put an entire list under deep watch — ten layers below changed, and the top never knew."</div>
  <div class="dialogue">তুমি খাতা উল্টে জিজ্ঞেস করলে, "আপা, computed আর watch — কার কাজ কী, সবসময় গুলিয়ে যায়।" জোহরা আপা তাঁতের দুই যন্ত্র দেখালেন: "computed = মাপ-কাঠি — ডেটা থেকে বের-করা-মান, মাগলেই দেয়, না-মাগলে বসে থাকে (ক্যাশে); একে লিখতে দিও না, কাঠি পাল্লা নয়। watch = পাহারাদার — একটা মান বদলালে সে অন্য কাজ করে (API-ডাক, টাইমার)। প্রশ্নটা একটাই: আমি কি বের করছি, না করছি? বের-করা → কাঠি; করা → পাহারা। নতুনরা পাহারা বসিয়ে কাঠির কাজ করায় — তাঁত ভারী হয়, কাপড় নয়।"</div>
<div class="dialogue en">You turned the ledger: "Sister, computed vs watch — I always mix them." Johra showed two loom-parts: "computed is the measuring-stick — a value derived from data, given on demand, idle otherwise (cached); never write to it, a stick is not a scale-pan. watch is the guard — when a value changes, it acts (API calls, timers). One question: am I deriving, or doing? Deriving → stick; doing → guard. Novices post guards to do a stick’s work — the loom grows heavy, not the cloth."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ ঘড়ি-পাগল</div>প্রতিটা মানের জন্য watch — কোড ভরা ঘড়ি, অনুমান স্টক-সংখ্যায় রেখে দেয়।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ যন্ত্র-বাছাই</div>বের-করা-মান → computed (ক্যাশে-সুবিধা); প্রতিক্রিয়া-কাজ → watch/watchEffect — প্রশ্নই ছাঁকনি।</div></div>
  <div class="code-block">প্রতিক্রিয়া-তন্ত্র — LedgerPilot-নমুনাসহ (Vue 3.5)

① স্পর্শ-কাচ — ref (মান-প্রতিক্রিয়া):
  const loading = ref(false)
  const rows = ref&lt;InvoiceRow[]&gt;([])
  loading.value = true          // স্ক্রিপ্টে .value
  &lt;div v-if="loading"&gt;…&lt;/div&gt;    // টেমপ্লেটে খালি-নাম
  · যেকোনো ধরন (অবজেক্টসহ) — গভীর-প্রতিক্রিয়া
  · shallowRef — উপরের-স্তরের .value-বদল
    শুধু (বড়-তালিকা পারফরম্যান্স: পুরো গাছ
    প্রতিক্রিয়া-করা বৃথা); triggerRef() দিয়ে জোর-জানানো

② স্মৃতি-কাচ — computed (উদ্ভূত-সত্য):
  const totalDue = computed(() =&gt;
    rows.value.reduce((s, r) =&gt; s + r.amount, 0))
  · ক্যাশড: নির্ভরতা না বদলালে পুনর্গণনা নেই
  · লেখা-যোগ্য computed (get+set) — বিরল; দরকার
    হলে সাবধানে (দুই-মুখী বাঁধন জটিল)
  ⚠ computed-এ পার্শ্ব-প্রভাব (fetch/set) নিষেধ —
    সে শুধু ফেরায়

③ পাহারা-কাচ — watch (পার্শ্ব-প্রভাব):
  watch(page, (p, old) =&gt; fetchRows(p))        // সূত্র
  watch([a, b], ([na, nb]) =&gt; …)               // বহু-সূত্র
  watch(() =&gt; obj.deep, (v) =&gt; …)              // গভীর-পথ
  watch(list, cb, { deep: true })               // গভীর-বলয়
  · { immediate: true } — চালু-হলেই প্রথম চালনা
  · { once: true } — প্রথম বদলেই পাহারা শেষ
  · flush: 'pre' (ডিফল্ট) / 'post' (DOM-পরে)
    / 'sync'
  · পরিচ্ছন্ন-প্রিভিউ: onCleanup দিয়ে আগের কাজ বাতিল
    (ডিবাউন্স/abort):
    watch(q, async (val, _, onCleanup) =&gt; {
      const c = new AbortController()
      onCleanup(() =&gt; c.abort())
      await search(val, c.signal)
    })

④ খোলা-চোখ — watchEffect:
  watchEffect(() =&gt; {
    document.title = \`(\${unread.value}) ইনবক্স\`
  })
  · নিজেই নির্ভরতা সংগ্রহ করে; sync-পার্শ্ব-প্রভাবে
    সুবিধাজনক, নিয়ন্ত্রণ কম
  ⚠ গণনা কখনো নয়; বার-বার চালনার ঝুঁকি

⑤ নদীর শিক্ষা — বিচ্ছিন্ন-করণ-ফাঁদ (LP-auth.store):
  ✗ const { user } = useAuthStore()      // একবার-কপি
  ✓ const auth = useAuthStore()
    const { user } = storeToRefs(auth)   // ref-এ আনর‍্যাপ
    auth.logout()                        // ক্রিয়া সরাসরি
  ✓ অথবা: const name = computed(() =&gt;
        useAuthStore().user?.first_name)

⑥ জীবনচক্র — শ্বাসের ছন্দ (দরজা ৯-এ পূর্ণ):
  onMounted(() =&gt; fetchRows())     // প্রথম শ্বাস
  onBeforeUnmount(() =&gt; ctrl.abort())
  onUnmounted(() =&gt; clearInterval(id))
  · SSE/টাইমার/ইভেন্ট-শ্রোতা: প্রস্থানে বন্ধ —
    নইলে ভুত-আপডেট আর মেমরি-ফাঁদ

Vue 3.5 স্বাদ:
  · reactive-props-destructure: const { msg = 'হ্যালো' }
    = defineProps&lt;…&gt;() — কম্পাইলার-নিরাপদ
  · watch(v, cb, { deep: 1..N }) — গভীরতা-সংখ্যা
  · paused: watch-পাহারা সাময়িক থামানো</div>
  <div class="stat-grid">
  <div class="stat-card"><div class="sc-num">ref</div><div class="sc-label">ছোঁয়া যায় · .value</div></div>
  <div class="stat-card"><div class="sc-num">computed</div><div class="sc-label">মনে রাখে · ক্যাশড</div></div>
  <div class="stat-card"><div class="sc-num">watch</div><div class="sc-label">পাহারা · পার্শ্ব-প্রভাব</div></div>
  <div class="stat-card"><div class="sc-num">watchEffect</div><div class="sc-label">তাৎক্ষণিক · স্বয়ং-সনাক্ত</div></div>
</div>
  <ul class="checklist"><li>computed-বনাম-method — একই ফিল্টার দুইভাবে লিখে কনসোল-লগ দিয়ে রি-রান গুনো</li><li>watchEffect-এর অটো-নির্ভরতা দেখো: কোন রেফ ছুঁলে কাজ চলে</li><li>লেজারপাইলট-গেটার একটা computed-এ নামিয়ে আনার খসড়া আঁকো</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 4 (City Builder’s Codex — ২০ দরজা) reactive-সিস্টেমের আর্কিটেকচার-দৃষ্টি (cache/invalidate) দেয়, আর Book 49 (Dice of Destiny) নির্ভরতা-গ্রাফের গণিত।</div></div>
  <div class="verse">তাসাররুফ — প্রবাহের শাস্ত্র: শক্তি যায় কেবল নিজ-নিজ পথে। জোহরা আপার তিন কাচ সেই পথের নকশা — স্পর্শ মান বদলায়, স্মৃতি উদ্ভূত-সত্য গণনা করে, পাহারা পার্শ্ব-কাজ চালায়; একজনের কাজ অন্যজনে ঢুকলে তাঁত বিষময় হয়। "প্রত্যেকে সে-ই যা সে অর্জন করে" (৫৩:৩৯-এর ভাব) — যন্ত্র নিজ-নিজ অর্জনে বাঁচে; এক যন্ত্রে সব-কাজ চাপালে কেউ কিছুই ভালো করে না।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>শ্বাস-ফাঁদ:</strong> (১) watch-এ গণনা লেখা — দ্বৈত-গণনা/লুপ-ঝুঁকি; computed-এ নাও। (২) স্টোর-ডিস্ট্রাকচার ভুলে যাওয়া — পর্দা বোবা হয়ে যায়, কোনো এরর ছাড়াই। (৩) <code>onUnmounted</code> বিস্মৃত — মুলতুবি fetch প্রস্থানের পরেও state-এ লেখে (ভুত-আপডেট) আর টাইমার চুপচাপ মেমরি খায়।</div></div>
  <div class="secret-box">⚡ বস্তু বদলাও প্রতিবিম্ব নয় — ref ছোঁয় (.value), computed মনে রাখে, watch পাহারা দেয়; নদীর সাথে থাকো, গ্লাসে নয়। / Change the thing: ref touches, computed remembers, watch guards — stay with the river, not the glass.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ৩-এর শ্বাস-ঘর: তিন যন্ত্র এক ফাইলে — ref ছুঁয়ে দেখো, computed-এর ক্যাশ গুনো, watch-এর পাহারা চালাও। কনসোল-লগগুলোই তোমার পরীক্ষা-নমুনা। / Door 3's breath-room: three instruments in one file — touch refs, count computed-cache runs, fire watches. Console logs are your test bench.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/ReactiveBreath.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { ref, computed, watch, watchEffect, onWatcherCleanup } from 'vue'

// ① স্পর্শ-কাচ — ref
const qty = ref(2)
const price = ref(150)
const runs = { computed: 0, effect: 0 }

// ② স্মৃতি-কাচ — computed (উদ্ভূত-সত্য; ক্যাশড)
const total = computed(() =&gt; {
  runs.computed++
  return qty.value * price.value
})

// ③ পাহারা-কাচ — watch (পার্শ্ব-প্রভাব; ডিবাউন্স-নমুনা)
let searchTimer: number | undefined
const query = ref('')
const results = ref&lt;string[]&gt;([])
watch(query, (q) =&gt; {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() =&gt; {
    // নকল-API — সত্যিকারে এখানে fetch বসত
    results.value = q ? [\`\${q} — সুতো\`, \`\${q} — কাপড়\`] : []
  }, 300)
})

// onWatcherCleanup (Vue 3.5+ — Context7-যাচাইকৃত পছন্দের পথ)
watch(query, async (q) =&gt; {
  const ctrl = new AbortController()
  onWatcherCleanup(() =&gt; ctrl.abort())
  // await fetch('/api/search?q=' + q, { signal: ctrl.signal })
})

// ④ খোলা-চোখ — watchEffect (স্বয়ং-নির্ভরতা)
watchEffect(() =&gt; {
  runs.effect++
  document.title = \`মোট: \${total.value} টাকা\`
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;পরিমাণ: &lt;input type="number" v-model.number="qty"&gt; × দাম: &lt;input type="number" v-model.number="price"&gt;&lt;/p&gt;
    &lt;h3&gt;মোট (computed): {{ total }} টাকা&lt;/h3&gt;
    &lt;p&gt;computed চলেছে {{ runs.computed }} বার — একই মান দুইবার রেন্ডার করে দেখো, সংখ্যা বাড়ে না (ক্যাশ!)&lt;/p&gt;

    &lt;input v-model="query" placeholder="খোঁজো… (watch + ডিবাউন্স)"&gt;
    &lt;ul&gt;&lt;li v-for="r in results" :key="r"&gt;{{ r }}&lt;/li&gt;&lt;/ul&gt;

    &lt;p&gt;watchEffect চলেছে {{ runs.effect }} বার — ট্যাব-শিরোনামও বদলায়&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import ReactiveBreath from './ReactiveBreath.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;ReactiveBreath /&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-note">পরীক্ষা-প্রশ্ন: (১) qty দুইবার বদলাও — runs.computed কত বাড়ল? (২) একই মান আবার সেট করো (qty=5 → আবার 5) — watch চলে কি? (৩) ব্রাউজার-ট্যাবের শিরোনাম দেখো — watchEffect জীবিত। Vue 3.5+: props-ডিস্ট্রাকচার এখন reactive; onWatcherCleanup পছন্দের ক্লিনআপ। / Test: change qty twice and count computed runs; set same value twice and see if watch fires; watch the tab title for the living effect.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">The Breath — Three Instruments, One River Rule</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowR3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
      <rect x="15" y="12" width="165" height="104" rx="10" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="97" y="34" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🖐️ স্পর্শ-কাচ</text>
      <text x="97" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">ref — মান; .value (স্ক্রিপ্টে)</text>
      <text x="97" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">shallowRef — উপরের-স্তর</text>
      <text x="97" y="84" text-anchor="middle" fill="#a5b4fc" font-size="6.8">যেকোনো-ধরন গভীর-প্রতিক্রিয়া</text>
      <text x="97" y="104" text-anchor="middle" fill="#64748b" font-size="6.5">বড়-তালিকায় shallowRef+triggerRef</text>
      <rect x="200" y="12" width="160" height="104" rx="10" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="280" y="34" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🧠 স্মৃতি-কাচ</text>
      <text x="280" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">computed — গণনা+ক্যাশ</text>
      <text x="280" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">নির্ভরতা অপরিবর্তিত → পুরনো</text>
      <text x="280" y="84" text-anchor="middle" fill="#a5b4fc" font-size="6.8">উদ্ভূত-সত্যের একমাত্র ঘর</text>
      <text x="280" y="104" text-anchor="middle" fill="#64748b" font-size="6.5">⚠ পার্শ্ব-প্রভাব নিষেধ</text>
      <rect x="380" y="12" width="165" height="104" rx="10" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="462" y="34" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">👁️ পাহারা-কাচ</text>
      <text x="462" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">watch — পার্শ্ব-প্রভাব</text>
      <text x="462" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">immediate/once/deep/flush</text>
      <text x="462" y="84" text-anchor="middle" fill="#a5b4fc" font-size="6.8">onCleanup → abort/ডিবাউন্স</text>
      <text x="462" y="104" text-anchor="middle" fill="#64748b" font-size="6.5">watchEffect: খোলা-চোখ, সাবধানে</text>
      <rect x="15" y="136" width="530" height="58" rx="10" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.4"/>
      <text x="280" y="157" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="700">🏞️ নদীর শিক্ষা — বিচ্ছিন্ন-করণ-ফাঁদ</text>
      <text x="280" y="173" text-anchor="middle" fill="#94a3b8" font-size="7.5">✗ const { user } = store (গ্লাস-কপি, নদী বইলেও বাসী) ✓ storeToRefs(auth) / computed(() =&gt; store.user)</text>
      <text x="280" y="187" text-anchor="middle" fill="#64748b" font-size="7">ক্রিয়া (actions) সরাসরি কল-যোগ্য — শুধু অবস্থা-পড়াই মোড়া লাগে</text>
      <rect x="15" y="210" width="530" height="56" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="230" text-anchor="middle" fill="#cbd5e1" font-size="8" font-weight="600">শ্বাসের ছন্দ: onMounted-প্রথম-fetch · onUnmounted-এ abort+শ্রোতা+টাইমার-বন্ধ</text>
      <text x="280" y="246" text-anchor="middle" fill="#94a3b8" font-size="7.5">Vue 3.5: props-destructure (ডিফল্টসহ, কম্পাইলার-নিরাপদ) · deep: N সংখ্যা · paused-watch</text>
      <text x="280" y="262" text-anchor="middle" fill="#64748b" font-size="7">LP-প্রমাণ: auth.store-এ userRoles/featureGrants-সব computed — উদ্ভূত-সত্য কখনো স্ক্র্যাচ-নয়</text>
      <line x1="97" y1="116" x2="97" y2="134" stroke="#a5b4fc" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#arrowR3)"/>
      <line x1="280" y1="116" x2="280" y2="134" stroke="#a5b4fc" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#arrowR3)"/>
      <line x1="462" y1="116" x2="462" y2="134" stroke="#a5b4fc" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#arrowR3)"/>
      <text x="280" y="290" text-anchor="middle" fill="#64748b" font-size="8.5">বস্তু বদলাও → শ্বাস পড়ে → প্রতিবিম্ব বদলায়; যন্ত্র নিজ-পথে চললে তাঁত নীরবে নিখুঁত</text>
    </svg>
    <div class="diag-cap">তিন যন্ত্র + এক নিয়ম: ref মান ধরে, computed গণনা মনে রাখে, watch পার্শ্ব-কাজ চালায় — আর নদীর সাথে থাকতে হোক, গ্লাসে নয়।</div>
  </div>`,
  senior: {
    title: "Reactivity Card",
    body: `<p><strong>ref</strong> (.value-স্ক্রিপ্টে) + <strong>shallowRef</strong> (বড়-তালিকা, triggerRef)। <strong>computed</strong> — উদ্ভূত-সত্য, ক্যাশড, পার্শ্ব-প্রভাব-নিষেধ। <strong>watch</strong> — পার্শ্ব-প্রভাব: সূত্র/বহু/গেটার/গভীর; immediate/once/deep/flush; onCleanup→abort। <strong>watchEffect</strong> — স্বয়ংক্রিয়-নির্ভরতা, সাবধানে। <strong>বিচ্ছিন্ন-ফাঁদ</strong>: storeToRefs/computed — সরাসরি ডিস্ট্রাকচার মরে। <strong>লাইফসাইকেল</strong>: onMounted-fetch, onUnmounted-abort। <strong>3.5</strong>: props-destructure, deep:N, paused। LP-প্রমাণ: auth.store — সব-গেটার computed।</p>`
  }
});

doors.push({
  num: 4,
  icon: "🎁",
  color: "#22d3ee",
  name: "উপহারের একমুখী নদী",
  subtitle: "One-Way River of Gifts — Props in Depth",
  tech: "defineProps, type-only props, withDefaults, prop validation, one-way data flow, props → emit contract",
  spirit: "আমানত — amāna (the entrusted gift: the receiver guards, never alters)",
  secret: "props একমুখে বয় — পুত্র মিউটেট করে না, ফেরত-পাখি (emit) পাঠায়; ধরন-চুক্তি defineProps-এ, ডিফল্ট withDefaults-এ।",
  recall: {
    q: "পুত্র-কম্পোনেন্টে props বদলাতে চাইলে করবে কী?",
    qen: "How should a child change a prop's value?",
    a: "সরাসরি নয় — ঘোষিত ইভেন্ট emit করে পিতাকে বদলাতে বলবে, অথবা স্থানীয় ref-এ প্রাথমিক-মান কপি নেবে; দ্বৈত-সত্য এড়াতে বদল-উৎস সবসময় পিতা।",
    aen: "Never directly — emit a declared event asking the parent to change it, or copy the initial value into a local ref; the source of change stays with the parent."
  },
  story: `<p class="scene-setting">চতুর্থ ঘরে প্রবেশ করলে প্রথমেই শোনা যায় জলের শব্দ — ঘরের মাঝখান দিয়ে বয়ে গেছে <strong>উপহার-নদী</strong>, উজান পিতা-কারখানার
  দিকে। নদীর পাশে বসে আছেন কারিগর <strong>রফিক</strong> — তাঁর ডান হাতে রুপোর তালা, যা তিনি শুধু আগমনী উপহার খোলায়। তিনি ব্যাখ্যা করেন —
  <strong>"প্রতিটি props এক আমানত-উপহার। উজান থেকে ভেসে আসে, তুমি গ্রহণ করো, সাজাও, দেখাও — কিন্তু মূল্য বদলাও না। উপহার বদলাতে চাইলে
  ফিরতি-পাখি পাঠাও (emit, দরজা ৫), উজান নিজে বদলাক।"</strong> এক শাগিরদ <code>props.label = 'নতুন'</code> লিখে বসল — Vue সতর্কবার্তা দিল, আর
  পরের রি-রেন্ডারে বদলটা মুছে গেল: পিতার টানে আবার আগের উপহারই ভেসে এল। রফিক মৃদু হেসে বলেন — <strong>"নদীর স্রোতের সাথে যুদ্ধ করো না।
  তোমার যা সত্যিই নিজের (স্থানীয় অবস্থা), সেটা কুয়া খুঁড়ে নাও — <code>ref(props.label)</code>; আর যা উজানের, সেটা নদীরই থাক।"</strong></p>
  <p class="scene-setting en">Entering the fourth room you hear water — an <strong>gift-river</strong> flows through its
  middle, upstream at the parent-workshop. Beside it sits artisan <strong>Rafiq</strong> — a silver lock in his right
  hand, used only to open arriving gifts. He explains — <strong>"every prop is an entrusted gift. It floats down from
  upstream; you receive, arrange, display — but never alter the value. To change the gift, send the return-bird
  (emit, door 5) and let upstream change it."</strong> One apprentice writes <code>props.label = 'new'</code> — Vue warns,
  and the next render erases it: the parent's pull floats the old gift back. Rafiq smiles — <strong>"don't fight the
  current. What is truly yours (local state), dig a well — <code>ref(props.label)</code>; what is upstream's, leave to
  the river."</strong></p>
  <div class="dialogue">('"উপহারের প্যাঁচে হাত দিয়ো না," রফিক মৃদু হেসে মোড়া কাপড়ের ফিতা টানটান করলেন, "খুললে সে আর উপহার থাকে না — নোংরা হাতের ছাপ পড়ে যায়। মা-বাবা যা পাঠালেন, তা-ই দেখাও; নিজের কিছু বানাতে চাইলে নিজের বোতাম বানাও, নিচে থেকে ডাকো।"', 'ফিতার টানে তোমার আঙুল সরে যায় — নিজের জিনিস বদলানোর লোভ থাকলেও নিয়মটা এবার শরীরে বসে গেল।')</div><div class="dialogue en">"Don't touch the gift's wrapping — unopened it stays a gift. Show what the parents sent; build your own button below and call upward."</div>
  <div class="dialogue">রফিক নদীর দিকে ইশারা করে জিজ্ঞেস করলেন, "বলো — সন্তান-কারিগর যদি উপহার নিজে বদলে ফেলে, কী হবে?" তুমি বললে, "উজান জানবে না — হিসাব ভুল হবে।" রফিক মাথা নাড়লেন: "শুধু হিসাব নয় — অন্ধ-সন্তানও। props মানে উপহার: খোলা যায়, ব্যবহার হয়, পাল্টানো যায় না। বদলাতে চাইলে ফেরত-পাখি পাঠাও (emit) — উজান নিজে বদলাবে, নতুন উপহার পাঠাবে। এক-মুখী নদী মানে অবজ্ঞা নয়; মানে — প্রতিটি বদলের এক-দায়িত্ব, এক-জবাবদিহি। দুই-মুখী করলে দুই-পাশ পরস্পরের অন্ধ, বাগ দুই-পাশেই লুকায়।"</div>
<div class="dialogue en">Rafiq gestured at the river: "Say the child-craftsman alters the gift himself — what happens?" You said: "The upstream never knows — accounts go wrong." He nodded: "Not just accounts — a blind child too. props are gifts: open them, use them, never mutate. To change, send the return-bird (emit) — upstream changes it and sends a new gift. One-way river is not disrespect; it means every change has one owner, one accountability. Two-way, and both banks are blind to each other — bugs hide on both."</div>
  <div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল পথ</div>প্রপ-মিউটেশন: <code>props.item.done = true</code> — উজানে চুপচাপ বদল, রিঅ্যাক্টিভিটি ভাঙে, ওয়ার্নিং।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক পথ</div>লোকাল-কপি বা emit: <code>emit('toggle', id)</code> — সিদ্ধান্ত উজানে, নদী একমুখে বয়।</div>
</div>
  <div class="code-block">props-শাস্ত্র — LP-নমুনাসহ (LoadingBlock.vue, প্রকৃত কোড)

① ঘোষণা — ধরন-চুক্তি (type-only, &lt;script setup&gt;):
  // LedgerPilot: shared/components/LoadingBlock.vue
  withDefaults(defineProps&lt;{ label?: string }&gt;(),
                { label: 'Loading…' })
  · টাইপ-চুক্তি প্রথম-শ্রেণি: string/number/boolean/
    অবজেক্ট/অ্যারে/ইউনিয়ন/লিটারাল
  · withDefaults — ঐচ্ছিক প্রপের ডিফল্ট
  · Vue 3.5: সরাসরি-ডিস্ট্রাকচারও নিরাপদ:
    const { label = 'লোড হচ্ছে…' } = defineProps&lt;…&gt;()
    (কম্পাইলার প্রতিক্রিয়া রাখে — নদী-নিয়ম ভাঙে না)

② রানটাইম-ঘোষণা (Options-API বা অ-টাইপ):
  props: {
    rows:   { type: Array,  required: true },
    status: { type: String,
              validator: (v) =&gt; ['idle','busy'].includes(v) }
  }
  · ভ্যালিডেটর-এরর ডেভ-কনসোলে — প্রোডাকশনে নীরব

③ নাম-বিধি — দুই জগতের সেতু:
  ঘোষণা (camelCase):  greetingText
  টেমপ্লেট (kebab):    &lt;Comp greeting-text="সালাম" /&gt;
  · স্ট্রিং-নয় মান সবসময় :v-bind

④ একমুখী নদী — বিধি ও বাঁধন:
  ✗ props.x = '…'            (Vue-সতর্কতা+পরের রেন্ডারে মুছা)
  ✓ emit('update:x', val)     (পিতা বদলায় — দরজা ৫/৭)
  ✓ স্থানীয়-কপি: const local = ref(props.x)
    ⚠ কপি মূলের পরের বদল পায় না — সচেতন-পছন্দ
  ✓ উদ্ভূত: const disp = computed(() =&gt; props.x.trim())

⑤ প্রপ-বিবর্তন (prop drilling → provide/inject):
  গভীর-বংশে ৫+ স্তর প্রপ পাঠানো = drilling-গন্ধ;
  দরজা ১১-এ provide/inject — বংশ-ঝর্না এড়ানোর শাস্ত্র

⑥ LP-প্যাটার্ন-প্রমাণ (Dashboard-অংশ-নমুনা):
  // পিতা: উজান-সত্য + নিচে প্রবাহ
  &lt;RecentImportsPanel
    :imports="imports" :loading="loading" :error="error" /&gt;
  // পুত্র: শুধু গ্রহণ+প্রদর্শন, শূন্য-মিউটেশন
  const props = defineProps&lt;{
    imports: TimesheetImport[] | null
    loading: boolean
    error: string | null
  }&gt;()
  · টেস্ট-সুবিধা: প্পস-ইনজেক্টে mount —
    mount(Panel, { props: { imports: mock, … } })
    (দরজা ২৩-এ পূর্ণ পরীক্ষা-গল্প)</div>
  <ul class="checklist"><li>PropsCard বানাও: টাইপ-অনলোডী প্রপ + withDefaults — ভুল-টাইপ পাঠিয়ে কনসোল-সতর্কতা দেখো</li><li>প্রপ-বদলের চেষ্টা করে যে-ওয়ার্নিং আসে সেটা নোট করো — চুক্তির প্রমাণ</li><li>লেজারপাইলট-কম্পোনেন্ট থেকে এক-জোড়া props/emits-চুক্তি খাতায় তুলে আনো</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 54 (LedgerPilot Craftsman — ৩৭ দরজা) props→emits-প্যাটার্নের বাস্তব রূপ দেখায়, আর Book 4 (City Builder’s Codex) এক-মুখী-প্রবাহের সিস্টেম-যুক্তি।</div></div>
  <div class="verse">আমানত — গৃহস্থের আমানত তার হাতে থাকে, প্রাপ্তের হাতে খরচের অধিকার নয়: "নিশ্চয়ই আল্লাহ তোমাদের আদেশ দেন আমানত তার হকদারকে ফিরিয়ে দিতে" (৪:৫৮)। রফিকের নদী সেই আয়াতের বোনা-রূপ: উপহার উজানের হক — প্রাপ্ত সাজায়, দেখায়, বদলাতে চাইলে খবর পাঠায়; চুরি করে না। যে কারখানায় প্রাপ্ত আমানত নিজের বলে খরচ করে, সেখানে দুই হিসাববহি — আর দুই বহি মানে কোনো বহিই না।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নদী-ফাঁদ:</strong> (১) অবজেক্ট/অ্যারে-প্রপের ভেতরের ক্ষেত্র বদলানো (<code>props.row.done = true</code>) — রেফারেন্স শেয়ার্ড, পিতার সত্যও নীরবে বদলে যায়; দুই বহির দোষ একই। (২) স্থানীয়-কপিরেফ প্রপ-আপডেট পায় না — দরকার হলে computed বা watch দিয়ে সিঙ্ক করো। (৩) বহু-স্তর প্রপ-পাঠানো (drilling) — ৪-৫ স্তর পার হলে নকশা-গন্ধ; provide/inject (দরজা ১১) বা স্টোর (দরজা ১০) বিবেচনা করো।</div></div>
  <div class="secret-box">🎁 props = আমানত: গ্রহণ করো, সাজাও, দেখাও — বদল চাইলে ফেরত-পাখি (emit) পাঠাও; ধরন-চুক্তি defineProps, ডিফল্ট withDefaults। / Props are trusts: receive, arrange, display; emit the return-bird for change.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ৪-এর উপহার-নদী: পিতা→পুত্র একমুখী প্রবাহ। পুত্র প্রপ ছোঁয় না — খবর পাঠায়। ডেভ-কনসোলে মিউটেশন-সতর্কতা নিজে দেখো। / Door 4's gift-river: parent→child one-way. The child never touches the prop — it reports. Watch the mutation warning yourself in devtools.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/GiftChild.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
// ধরন-চুক্তি (type-only) + ডিফল্ট — দুই পথ:
// পথ-A (Vue 3.4-ধাঁচ, সর্বত্র চলে):
import { ref, computed } from 'vue'

const props = withDefaults(defineProps&lt;{
  label?: string
  items?: string[]
}&gt;(), {
  label: 'উপহার-তালিকা',
  items: () =&gt; ['সুতো', 'কাপড়']
})
// পথ-B (Vue 3.5+): const { label = 'উপহার-তালিকা' } = defineProps&lt;…&gt;()

const emit = defineEmits&lt;{ select: [name: string] }&gt;()

// স্থানীয়-কুয়া (নিজের সত্য): প্রাথমিক-মান কপি — মূলের পরের বদল পায় না
const note = ref('')

// উদ্ভূত-প্রদর্শন: প্রপ থেকে গণনা — মিউটেশন ছাড়াই
const count = computed(() =&gt; props.items.length)

function pick(name: string) {
  emit('select', name)          // ফেরত-পাখি — সিদ্ধান্ত উজানে
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;{{ label }} ({{ count }}টি)&lt;/h3&gt;
    &lt;ul&gt;
      &lt;li v-for="item in items" :key="item"&gt;
        {{ item }}
        &lt;button @click="pick(item)"&gt;বেছে নাও&lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;input v-model="note" placeholder="নিজের নোট (স্থানীয়-কুয়া)"&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/RiverParent.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import GiftChild from './GiftChild.vue'

// উজানের সত্য — বদলের একচ্ছত্র ঘর এখানেই
const gifts = ref(['রুপোর তালা', 'কাচের পাখি', 'মসলিন'])
const chosen = ref('')

function onSelect(name: string) {
  chosen.value = name          // ফেরত-পাখি এসে উজান বদলাল
  gifts.value = gifts.value.filter(g =&gt; g !== name)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;!-- kebab-case সেতু: greetingText → greeting-text --&gt;
    &lt;GiftChild :items="gifts" label="রফিকের উপহার" @select="onSelect" /&gt;
    &lt;p v-if="chosen"&gt;বেছে নেওয়া: &lt;strong&gt;{{ chosen }}&lt;/strong&gt; — নদী থেকে সরে গেল&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import RiverParent from './RiverParent.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;RiverParent /&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) GiftChild-এ props.items.length = 0 বসিয়ে দেখো — কনসোলে readonly-সতর্কতা আসে (তারপর মুছে ফেলো!)। (২) "বেছে নাও" চাপো — পুত্র থেকে পাখি উড়ে পিতার তালিকা বদলায়। (৩) label-প্রপ পিতা থেকে বদলে দেখো — পুত্র নিজে কিছু না করেই নতুন উপহার পায়। / Tests: force a readonly warning; watch the return-bird update the parent's list; change label upstream and see the new gift arrive.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">One-Way River — Props Flow &amp; Return-Bird</div>
    <svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowP4" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker><marker id="arrowE4" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker></defs>
      <rect x="15" y="30" width="200" height="86" rx="11" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="115" y="53" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🏭 পিতা (উজান)</text>
      <text x="115" y="70" text-anchor="middle" fill="#94a3b8" font-size="7">সত্যের মালিক · state + বদল-ক্রিয়া</text>
      <text x="115" y="86" text-anchor="middle" fill="#64748b" font-size="7">&lt;Panel :imports="rows" /&gt;</text>
      <text x="115" y="104" text-anchor="middle" fill="#64748b" font-size="7">:prop = v-bind — মান-বাঁধন</text>
      <rect x="345" y="30" width="200" height="86" rx="11" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="445" y="53" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🪞 পুত্র (ভাটি)</text>
      <text x="445" y="70" text-anchor="middle" fill="#94a3b8" font-size="7">গ্রহণ+সাজানো · defineProps&lt;T&gt;()</text>
      <text x="445" y="86" text-anchor="middle" fill="#64748b" font-size="7">computed-উদ্ভূত · স্থানীয় ref</text>
      <text x="445" y="104" text-anchor="middle" fill="#64748b" font-size="7">⚠ props.x = লেখা নিষেধ</text>
      <path d="M225,60 C270,45 315,45 340,58" fill="none" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrowP4)"/>
      <text x="283" y="40" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="600">props প্রবাহ (একমুখী)</text>
      <path d="M340,96 C300,115 260,115 228,98" fill="none" stroke="#fbbf24" stroke-width="1.6" stroke-dasharray="5 3" marker-end="url(#arrowE4)"/>
      <text x="283" y="128" text-anchor="middle" fill="#fbbf24" font-size="7.5" font-weight="600">emit('update:…') — ফেরত-পাখি</text>
      <rect x="15" y="150" width="530" height="62" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="280" y="171" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">চুক্তির দুই স্তম্ভ</text>
      <text x="280" y="187" text-anchor="middle" fill="#94a3b8" font-size="7.5">defineProps&lt;T&gt;() — ধরন-চুক্তি (TS-প্রথম-শ্রেণি) · withDefaults / 3.5-ডিস্ট্রাকচার — ডিফল্ট</text>
      <text x="280" y="202" text-anchor="middle" fill="#64748b" font-size="7">validator (রানটাইম) · camelCase↔kebab-case সেতু · গভীর-বংশে provide/inject (দরজা ১১)</text>
      <rect x="15" y="228" width="530" height="40" rx="10" fill="rgba(248,113,113,0.06)" stroke="#f87171" stroke-width="1.2"/>
      <text x="280" y="246" text-anchor="middle" fill="#f87171" font-size="8" font-weight="600">✗ পুত্রে-মিউটেশন — সতর্কতা+মুছে-যাওয়া+দ্বৈত-সত্য</text>
      <text x="280" y="260" text-anchor="middle" fill="#94a3b8" font-size="7">LP-প্রমাণ: RecentImportsPanel — প্পস-ইন/শূন্য-মিউটেশন/টেস্টে সরাসরি-প্রপস-inject</text>
      <text x="280" y="283" text-anchor="middle" fill="#64748b" font-size="8.5">উপহার নদীর স্রোতে নামে, ফেরত-পাখি উড়ে ওঠে — বদলের একচ্ছত্র ঘর উজানেই</text>
    </svg>
    <div class="diag-cap">একমুখী নদী + ফেরত-পাখি = এক-সত্য-নীতি: পিতা পাঠায়, পুত্র দেখায় ও খবর দেয়, কেউই নদীর স্রোত উল্টো করে না।</div>
  </div>`,
  senior: {
    title: "Props Card",
    body: `<p><strong>ঘোষণা</strong>: <code>defineProps&lt;T&gt;()</code> (টাইপ-চুক্তি) + <code>withDefaults</code>; 3.5 ডিস্ট্রাকচার-ডিফল্ট নিরাপদ। <strong>নাম</strong>: camelCase↔kebab; স্ট্রিং-নয় → <code>:</code>। <strong>নিয়ম</strong>: একমুখী — মিউটেট নিষেধ (অবজেক্ট-গভীরও); বদল: emit বা স্থানীয় ref (সচেতন-কপি)। <strong>উদ্ভূত</strong>: computed-প্রপ। <strong>ড্রিলিং-সীমা</strong>: ৪-৫ স্তর → provide/inject বা স্টোর। <strong>LP-নমুনা</strong>: LoadingBlock, RecentImportsPanel (প্পস-ইন, শূন্য-মিউটেশন, টেস্ট-ইনজেক্ট)। <strong>ফাঁদ</strong>: সন্তানের ভেতরে props-বদল — এক-মুখী নদীর লঙ্ঘন; বদলাতে চাইলে emit করো, নাহলে সাইলেন্ট-বাগের খনি।</p>`
  }
});
