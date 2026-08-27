
doors.push({
  num: 15,
  icon: "📡",
  color: "#14b8a6",
  name: "দূতের সমুদ্র-পথ",
  subtitle: "The Envoy's Sea-Route — The API Layer",
  tech: "axios client, baseURL/timeout, CSRF ensure, 401 handler, 403-retry, error normalization (getApiErrorMessage), service-per-feature",
  spirit: "রিসালতুল-বাহর — the sea-mission: every ship returns with news, good or bad",
  secret: "কম্পোনেন্ট fetch-কোড জানে না — সার্ভিস-স্তর জানে; ইন্টারসেপ্টরে চাবি-পাসপোর্ট (CSRF), ৪০১-ঘরে-ফেরত, ৪০৩-একবার-পুনঃচেষ্টা; এরর এক-ভাষায় (নরমালাইজড) ওঠে।",
  recall: {
    q: "সব কম্পোনেন্টে axios.get সরাসরি না লিখে সার্ভিস-স্তর কেন?",
    qen: "Why a service layer over direct axios calls?",
    a: "এক-জায়গায় baseURL/CSRF/এরর-ভাষা/401-আচরণ বাঁধা যায়; কম্পোনেন্ট শুধু অর্থ জানে (svc.list()), পরিবহন নয়; টেস্টে সার্ভিস-মক এক-জায়গায়; বিশ-কম্পোনেন্টে বিশ-কপি বয়লার নয়।",
    aen: "Transport concerns (CSRF, 401, error language) bind in one place; components speak meaning, not transport; tests mock one seam."
  },
  story: `<p class="scene-setting">পনেরো নম্বর ঘর একটা <strong>বন্দর</strong>। জেটিতে সারি-সারি জাহাজ (HTTP-অনুরোধ), আর বন্দর-কর্মকর্তা <strong>ক্যাপ্টেন রুমান</strong> —
  কুঁড়িতে দুই-মুখো টেলিস্কোপ (চালু-অনুরোধ/ফেরত-উত্তর)। তাঁর তিন-নিয়মের বোর্ড ঝোলে: <strong>"প্রতিটি লেখা-জাহাজে চাবি-পাসপোর্ট লাগে"</strong>
  (CSRF-টোকেন নিশ্চিত-করে-হেডারে), <strong>"৪০১-খবরে যাত্রী ঘরে-ফেরত"</strong> (অনুমোদিত-নয় → লগইন-হ্যান্ডলার, একবারই — ঝাঁকের-সব-জাহাজ মিলে দুইবার
  নয়), <strong>"৪০৩-চাবি-পুরনো শুনে একবার নতুন-চাবিতে পুনঃযাত্রা"</strong> (একবারই, লুপ-নয়)। তারপর তিনি ফেরত-খবরের অনুবাদ-ঘর দেখান: সার্ভারের
  নানা-ভাষার এরর (নেটওয়ার্ক, টাইমআউট, {field:[…]}) এক-বন্দর-ভাষায় নামে — <code>getApiErrorMessage</code> — যেন কারিগর দেয়ালে বসেই মানুষের-মতো
  পড়তে পারে। শেষে তিনি সার্ভিস-গুদাম দেখান: প্রতি-ফিচারের নিজের সার্ভিস-ফাইল (authService, accountService…) — কম্পোনেন্ট কেবল গুদামের-ঠিকানা
  জানে, সমুদ্র-চলার-শিল্প নয়।</p>
  <p class="scene-setting en">Room fifteen is a <strong>harbor</strong>. Ships (HTTP requests) in queues on the jetty,
  and harbor-master <strong>Captain Roman</strong> — a two-eyed telescope on the bridge (outgoing/returning). His
  three-rule board hangs: <strong>"every writing-ship needs the key-passport"</strong> (CSRF token ensured into the
  header), <strong>"on 401-news the passenger goes home"</strong> (unauthorized → login handler, exactly once per
  burst), <strong>"on 403-stale-key, one retry with a fresh key"</strong> (once, never a loop). Then the
  translation-room for returning news: the server's many error tongues (network, timeout, {field:[…]}) land in one
  harbor-language — <code>getApiErrorMessage</code> — so an artisan reads it like a person from the wall. Finally the
  service-warehouse: each feature's own service file (authService, accountService…) — components know only the
  warehouse address, not the art of sailing.</p>
  <div class="dialogue">('"জাহাজের ভাড়া আগে, মাল পরে," ক্যাপ্টেন রুমান হালের কাছে দাঁড়িয়ে বললেন, "আর প্রতিটি জাহাজের নিজের পাসপোর্ট — সিল-ছাড়া মাল বন্দরে ফেরত। সবচেয়ে দামি পাঠ শিখেছিলাম এক ঝড়ের রাতে: কেউ ভুল কাঠামো নামিয়ে দিয়েছিল; এক বাক্সের ভুলে পুরো খেয়া পোড়ার ঝুঁকিতে।"', 'লোহার হালের ঠান্ডা স্পর্শে মনে পড়ে যায় — ছোট এক সিলের অভাবে কত বড় ডুব।')</div><div class="dialogue en">"Fare before cargo, and every ship carries its own passport. One storm night taught me: one box's wrong manifest risked the whole ferry."</div>
  <div class="dialogue">তুমি দূত-ঘরের দরজায় দাঁড়িয়ে জিজ্ঞেস করলে, "এত দূত কেন? প্রতিটি কম্পোনেন্ট নিজে গেলেই তো..." প্রবীণ দূত মাথা নাড়লেন: "তাহলে প্রতিযেক নিজের পথ-রক্ষা, নিজের ভাষা, নিজের পাসপোর্ট নিয়ে সমুদ্রে নামবে — নীতি বদলালে শত-দূত শত-জায়গায় মেরামত। axios-ইনস্ট্যান্স মানে এক-দূত-ঘর: baseURL এক, টাইমআউট এক, ৪০১-দেখলে টোকেন-নবায়ন এক নিয়মে, এরর এক-ভাষায় ফেরে। সার্ভিস-ফাংশন সেই ঘরের বার্তা-বাক্স: getUsers() বলে দেয় কী-চাই, কেউ কাঁচা-সমুদ্র স্পর্শ করে না। কেন্দ্রীভূত নয় — এক-নীতি, শত-বার্তা।"</div>
<div class="dialogue en">You stood at the courier-house: "Why so many couriers? Each component could just go..." The elder courier shook his head: "Then each carries its own road-guard, its own language, its own passport to the sea — policy changes mean a hundred couriers mended in a hundred places. The axios-instance is one courier-house: one baseURL, one timeout, 401 seen and the token renewed by one rule, errors return in one language. Service functions are that house's letterbox: getUsers() says what's wanted; nobody touches the raw sea. Not centralization for its own sake — one policy, a hundred messages."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ বিক্ষিপ্ত-ডাক</div>প্রতি কম্পোনেন্টে axios.get + নিজের এরর-হ্যান্ডলিং — ৪০১-নীতি বদলালে শত-জায়গায় খনি।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ এক-দূত-ঘর</div>ক্লায়েন্ট-স্তর (বেস-ইউআরএল/ইন্টারসেপ্টর/এরর-ভাষা) — নীতি এক জায়গায়, সবাই উত্তরাধিকারী।</div></div>
  <div class="code-block">API-স্তর-শাস্ত্র — LP-র প্রকৃত apiClient-ছায়া

স্থাপত্য (এক-নজরে):
  কম্পোনেন্ট → কম্পোজেবল (useDataFetch/useMutationAction)
           → সার্ভিস (authService.list() …)
           → apiClient (ইন্টারসেপ্টর: CSRF/401/403)
           → সার্ভার
  · প্রতি-ফিচারের সার্ভিস-ফাইল; apiClient এক;
    কম্পোনেন্টে axios-আমদানি নিষেধ-গন্ধ

ক্লায়েন্ট-জন্ম (createApiClient):
  const apiClient = createApiClient({
    baseURL: import.meta.env.VITE_API_URL
              ?? 'http://localhost:8000',
    timeout: 10_000,
    withCredentials: true,   // সেশন-কুকি প্রতি-জাহাজে
  })
  · ইনজেক্টেবল-অপশন: টেস্টে নিজের csrf/401-হ্যান্ডলার
    (LP-প্যাটার্ন: createApiClient(options) — ফ্যাক্টরি)

নিয়ম-এক — লেখা-জাহাজে চাবি (অনুরোধ-ইন্টারসেপ্টর):
  const WRITE = ['post', 'put', 'patch', 'delete']
  api.interceptors.request.use(async (config) =&gt; {
    if (WRITE.includes(config.method ?? '')) {
      config.headers.set('X-CSRFToken',
        await ensureCSRFToken())      // কুকি↔হেডার-মিল
    }
    return config
  })
  · ensureCSRFToken: কুকি-থাকলে-ফেরত, নইলে
    /api/accounts/csrf/ থেকে-বসানো; সমান্তরাল-ডাক
    এক-প্রমিজে-বাঁধা (ডুপ্লিকেট-রোধ)

নিয়ম-দুই — ৪০১-ঘরে-ফেরত (উত্তর-ইন্টারসেপ্টর):
  if (status === 401 &amp;&amp; !url.includes('/login/')) {
    // ঝাঁকের-সব-401 এক-হ্যান্ডলারে (শেয়ার্ড-প্রমিজ):
    return unauthorizedHandlingPromise ??= (async () =&gt; {
      onUnauthorized({ status, detail })
      // → অ্যাপ: auth.logout() + login-নেভিগেশন
    })().finally(() =&gt; unauthorizedHandlingPromise = null)
  }
  · registerUnauthorizedHandler(cb) — অ্যাপ-স্তরে-একবার

নিয়ম-তিন — ৪০৩-পুরনো-চাবি, একবার-পুনঃযাত্রা:
  if (status === 403 &amp;&amp; WRITE.includes(method)
      &amp;&amp; !config.__hasRetriedCSRF) {
    config.__hasRetriedCSRF = true          // লুপ-রোধ
    config.__csrfTokenOverride =
      await ensureCSRFToken(/* force */ true)
    return apiClient.request(config)        // একবারই
  }

অনুবাদ-ঘর — এরর-নরমালাইজেশন:
  catch (e) {
    // কাঁচা-নয়, বন্দর-ভাষায়:
    error.value = getApiErrorMessage(e,
      'সার্ভার-ত্রুটি: একটু পরে চেষ্টা করুন')
  }
  · getApiErrorMessage(e, fallback):
    – AxiosError?.response?.data?.detail
    – অথবা {field:[msg]} → প্রথম-বার্তা
    – নেটওয়ার্ক/টাইমআউট → মানব-বার্তা
    – শেষে-fallback
  · parseFormError(e) → ফিল্ড-নামে-বিভাজিত
    (ফর্ম-দরজা ১৬-এর খাবার)
  ⚠ এরর-স্ট্রিং v-html-এ নয় — টেক্সট-ই (XSS)

সার্ভিস-ফাইল (প্রতি-ফিচার-একটি):
  // features/account/services.ts
  export const accountService = {
    getNotificationPrefs: () =&gt;
      apiClient.get&lt;Prefs&gt;('/api/accounts/me/prefs/')
      .then(r =&gt; r.data),
    patchNotificationPrefs: (patch) =&gt;
      apiClient.patch&lt;Prefs&gt;('/api/accounts/me/prefs/',
        patch).then(r =&gt; r.data),
  }
  · জেনারেটেড-টাইপ ব্যবহার (drf-spectacular →
    api.generated.ts) — হাতে-লিখলে টিকা-বাধ্য

টেস্ট-সুত্র (দরজা ২৩-এর সেতু):
  MSW http.get('\${API}/api/accounts/me/') → মক-জাহাজ;
  কম্পোজেবল-টেস্ট পুরো-বন্দর-না-জেনেই চলে</div>
  <ul class="checklist"><li>axios-ইনস্ট্যান্স বানাও: baseURL + টাইমআউট + ৪০১-ইন্টারসেপ্টর — টোকেন-শেষ পরীক্ষা করো</li><li>সার্ভিস-ফাংশন লেখো: getUsers() কাঁচা axios নয় — এরর normalize করে ফেরত দেয়</li><li>MSW দিয়ে নেটওয়ার্ক-মক — সার্ভিস-টেস্ট একটা লেখো</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 37 (Web of Wires — ১০ দরজা) HTTP/TLS-এর পূর্ণ যাত্রা (এই দূতের সমুদ্রের নকশা-নথি), আর Book 4 (City Builder’s Codex) রিট্রাই/সার্কিট-ব্রেকার।</div></div>
  <div class="verse">রিসালতুল-বাহর — সমুদ্র-অভিযানের সততা: "তাদের কল্যাণে তারা সমুদ্রে চলে" নয় বরং বাণিজ্য-আয়াতের ছায়া (২:৩-এর ভাব) — যাত্রা হবেই, নিয়মে হবে। ক্যাপ্টেন রুমানের বন্দর সেই নিয়মের কারিগরি রূপ: চাবি-ছাড়া লেখা-জাহাজ ছাড়ে না, ৪০১-এ যাত্রী-হারানো-নয়-ঘরে-ফেরত, ৪০৩-এ একবারই পুনঃযাত্রা, আর সব-খবর অনুবাদ-ঘরে — কাঁচা সমুদ্রের ভাষা কারিগরের হাতে নয়। যে বন্দরে প্রতি-জাহাজ নিজের-নিয়ম বাঁধে, সেখানে একদিন চাবিহীন-জাহাজই সোনা নামায়।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>বন্দর-ফাঁদ:</strong> (১) কম্পোনেন্টে সরাসরি axios — কোন-দেয়ালে কোন-চাবি-নিয়ম চলছে তা অজানা, টেস্টে বন্দর-নকল করা যায় না; সার্ভিস-স্তর ছাড়বে না। (২) ৪০৩-রিট্রাই চিহ্ন-ছাড়া — চাবি-তাজা-করার-লুপে জাহাজ অনন্তকাল ঘোরে; <code>__hasRetriedCSRF</code>-জাত পতাকা বাধ্যতামূলক। (৩) কাঁচা এরর-স্ট্রিং দেয়ালে (<code>e.message</code>) — ব্যবহারকারী ডেভ-ভাষা পড়ে; getApiErrorMessage-ই দরজা।</div></div>
  <div class="secret-box">📡 পরিবহন বন্দরে: CSRF-চাবি লেখায়, 401-এ ঘরে, 403-এ একবার-পুনঃযাত্রা; খবর অনুবাদিত-ওঠে, কম্পোনেন্ট অর্থ-জানে। / One harbor, three rules, normalized news.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ১৫-এর বন্দর: নিজের দূত-ঘর বাঁধো — এক axios-ইনস্ট্যান্স, তিন নিয়মের ইন্টারসেপ্টর, অনুবাদ-ঘর। আগে npm install axios। / Door 15's harbor: build your own courier-house — one axios instance, three interceptor rules, the translation room. First: npm install axios.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/services/apiClient.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import axios, { AxiosError } from 'axios'

// বন্দর-জন্ম (গাইড-ছাঁচ: axios.create + baseURL/timeout)
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000',
  timeout: 10_000,
  withCredentials: true,   // সেশন-কুকি প্রতি-জাহাজে
})

// ── নিয়ম-১: লেখা-জাহাজে চাবি-পাসপোর্ট (অনুরোধ-ইন্টারসেপ্টর) ──
const WRITE = ['post', 'put', 'patch', 'delete']
let csrfPromise: Promise&lt;string&gt; | null = null   // সমান্তরাল-ডাক এক-প্রমিজে

async function ensureCSRFToken(force = false): Promise&lt;string&gt; {
  if (force || !csrfPromise) {
    csrfPromise = fetch('http://localhost:8000/api/csrf/', {
      credentials: 'include',
    }).then(() =&gt; 'নতুন-চাবি-' + Date.now())
      .catch(() =&gt; 'ফলব্যাক-চাবি')
  }
  return csrfPromise
}

apiClient.interceptors.request.use(async (config) =&gt; {
  if (WRITE.includes(config.method ?? '')) {
    config.headers.set('X-CSRFToken', await ensureCSRFToken())
  }
  return config
})

// ── নিয়ম-২+৩: উত্তর-ইন্টারসেপ্টর (401-ঘরে / 403-একবার-পুনঃযাত্রা) ──
let unauthorizedPromise: Promise&lt;void&gt; | null = null

apiClient.interceptors.response.use(
  (res) =&gt; res,
  async (err: AxiosError) =&gt; {
    const status = err.response?.status
    const url = err.config?.url ?? ''

    // নিয়ম-২: ৪০১ — ঝাঁকের-সব-জাহাজ এক-হ্যান্ডলারে
    if (status === 401 &amp;&amp; !url.includes('/login/')) {
      unauthorizedPromise ??= (async () =&gt; {
        console.warn('🚪 401 — যাত্রী ঘরে-ফেরত (একবারই)')
        // অ্যাপ-স্তরে: auth.logout() + login-নেভিগেশন
      })().finally(() =&gt; { unauthorizedPromise = null })
      return unauthorizedPromise.then(() =&gt; Promise.reject(err))
    }

    // নিয়ম-৩: ৪০৩-পুরনো-চাবি — একবার পুনঃযাত্রা (লুপ-রোধ-পতাকা)
    if (status === 403 &amp;&amp; err.config
        &amp;&amp; WRITE.includes(err.config.method ?? '')
        &amp;&amp; !(err.config as any).__hasRetriedCSRF) {
      ;(err.config as any).__hasRetriedCSRF = true
      console.warn('🔁 403 — নতুন-চাবিতে একবার-পুনঃযাত্রা')
      await ensureCSRFToken(/* force */ true)
      return apiClient.request(err.config)
    }

    return Promise.reject(err)
  }
)

// ── অনুবাদ-ঘর: এরর-নরমালাইজেশন ──
export function getApiErrorMessage(
  e: unknown, fallback = 'সার্ভার-ত্রুটি: একটু পরে চেষ্টা করুন'): string {
  if (e instanceof AxiosError) {
    const data = e.response?.data as any
    if (typeof data?.detail === 'string') return data.detail
    if (data &amp;&amp; typeof data === 'object') {
      const first = Object.values(data)[0]
      if (Array.isArray(first) &amp;&amp; first[0]) return String(first[0])  // {field:[msg]}
    }
    if (e.code === 'ECONNABORTED') return 'নেটওয়ার্ক ধীর — আবার চেষ্টা করুন'
  }
  return fallback
}</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/services/threadsService.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import { apiClient } from './apiClient'

// সার্ভিস-প্রতি-ফিচার: কম্পোনেন্ট কেবল গুদামের-ঠিকানা জানে
export const threadsService = {
  list: () =&gt;
    apiClient.get&lt;string[]&gt;('/api/threads/').then(r =&gt; r.data),
  create: (name: string) =&gt;
    apiClient.post&lt;string[]&gt;('/api/threads/', { name }).then(r =&gt; r.data),
}</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/HarborScreen.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { threadsService } from './services/threadsService'
import { getApiErrorMessage } from './services/apiClient'

const threads = ref&lt;string[]&gt;([])
const error = ref('')
const loading = ref(false)

async function load() {
  loading.value = true
  error.value = ''
  try {
    threads.value = await threadsService.list()
  } catch (e) {
    // কাঁচা-নয় — বন্দর-ভাষায় (অনুবাদ-ঘর)
    error.value = getApiErrorMessage(e)
  } finally {
    loading.value = false
  }
}

async function add() {
  try {
    await threadsService.create('নতুন-সুতো-' + Date.now())
    await load()
  } catch (e) {
    error.value = getApiErrorMessage(e)
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;📡 বন্দর-পর্দা&lt;/h3&gt;
    &lt;button @click="load"&gt;জাহাজ পাঠাও (GET)&lt;/button&gt;
    &lt;button @click="add"&gt;লেখা-জাহাজ (POST — CSRF-চাবি লাগবে)&lt;/button&gt;
    &lt;p v-if="loading"&gt;⏳ …&lt;/p&gt;
    &lt;p v-else-if="error" style="color:#ef4444"&gt;❌ {{ error }}&lt;/p&gt;
    &lt;ul v-else&gt;&lt;li v-for="t in threads" :key="t"&gt;{{ t }}&lt;/li&gt;&lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import HarborScreen from './HarborScreen.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;HarborScreen /&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) "জাহাজ পাঠাও" চাপো — সার্ভার না-থাকলে নেটওয়ার্ক-এরর **অনুবাদিত-বাংলায়** আসে (getApiErrorMessage-এর ECONNABORTED/ফলব্যাক-পথ), কাঁচা AxiosError-স্ট্রিং নয়। (২) নেটওয়ার্ক-ট্যাব দেখো — POST-এ X-CSRFToken-হেডার বসেছে (নিয়ম-১)। (৩) baseURL-এর পোর্টে কোনো নকল-সার্ভার (json-server ইত্যাদি) চালালে পূর্ণ-প্রবাহ দেখা যায়। Context7-নোট: AxiosError **কাঠামোবদ্ধ** — status/code/response বহন করে (গাইডের settle-নোট); ইন্টারসেপ্টর রিটার্ন-পথ reject না-করলে প্রমিজ-চেইন থামে না। / Tests: a dead server still yields a translated Bengali message; the CSRF header rides POSTs; a fake server shows the full flow.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">The Harbor — One Client, Three Rules, One Language</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowH15" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
      <rect x="15" y="14" width="530" height="64" rx="10" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="280" y="35" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🏗️ স্তর-স্রোত: কম্পোনেন্ট → কম্পোজেবল → সার্ভিস → apiClient → সার্ভার</text>
      <text x="280" y="51" text-anchor="middle" fill="#94a3b8" font-size="7">সার্ভিস-প্রতি-ফিচার · কম্পোনেন্টে axios-আমদানি নিষেধ · টেস্টে এক-সীমায়-মক</text>
      <text x="280" y="67" text-anchor="middle" fill="#64748b" font-size="6.5">createApiClient({ baseURL, timeout:10s, withCredentials:true }) — ফ্যাক্টরি-অপশন-ইনজেক্ট</text>
      <rect x="15" y="96" width="165" height="90" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="97" y="116" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">🔑 নিয়ম-১: CSRF</text>
      <text x="97" y="131" text-anchor="middle" fill="#94a3b8" font-size="6.5">লেখা-জাহাজে X-CSRFToken</text>
      <text x="97" y="145" text-anchor="middle" fill="#64748b" font-size="6">ensureCSRFToken() — কুকি↔হেডার</text>
      <text x="97" y="160" text-anchor="middle" fill="#a5b4fc" font-size="6.5">সমান্তরাল-ডাক এক-প্রমিজে</text>
      <text x="97" y="178" text-anchor="middle" fill="#64748b" font-size="6">অনুরোধ-ইন্টারসেপ্টর</text>
      <rect x="197" y="96" width="165" height="90" rx="10" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.4"/>
      <text x="279" y="116" text-anchor="middle" fill="#f87171" font-size="8" font-weight="700">🚪 নিয়ম-২: 401</text>
      <text x="279" y="131" text-anchor="middle" fill="#94a3b8" font-size="6.5">ঘরে-ফেরত (login-হ্যান্ডলার)</text>
      <text x="279" y="145" text-anchor="middle" fill="#64748b" font-size="6">registerUnauthorizedHandler — একবার</text>
      <text x="279" y="160" text-anchor="middle" fill="#f87171" font-size="6.5">ঝাঁকের-সব-জাহাজ → এক-প্রমিজ</text>
      <text x="279" y="178" text-anchor="middle" fill="#64748b" font-size="6">/login/-নিজে ব্যতিক্রম</text>
      <rect x="379" y="96" width="166" height="90" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="462" y="116" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">🔁 নিয়ম-৩: 403-পুনঃযাত্রা</text>
      <text x="462" y="131" text-anchor="middle" fill="#94a3b8" font-size="6.5">পুরনো-চাবি → নতুন-বাধাই-একবার</text>
      <text x="462" y="145" text-anchor="middle" fill="#64748b" font-size="6">__hasRetriedCSRF লুপ-রোধ</text>
      <text x="462" y="160" text-anchor="middle" fill="#fcd34d" font-size="6.5">শুধু লেখা-মেথডে</text>
      <text x="462" y="178" text-anchor="middle" fill="#64748b" font-size="6">force-refresh + পুনঃrequest</text>
      <rect x="15" y="202" width="530" height="68" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="223" text-anchor="middle" fill="#cbd5e1" font-size="8" font-weight="600">🔤 অনুবাদ-ঘর: getApiErrorMessage(e, fallback) + parseFormError(e)</text>
      <text x="280" y="238" text-anchor="middle" fill="#94a3b8" font-size="7">detail → {field:[msg]}-প্রথম → নেটওয়ার্ক/টাইমআউট-মানবীয় → fallback — কাঁচা-AxiosError কখনো-ই দেয়ালে নয়</text>
      <text x="280" y="254" text-anchor="middle" fill="#64748b" font-size="6.5">⚠ এরর-টেক্সট v-html-এ নিষেধ · MSW-মক এই-স্তরেই-বসে (দরজা ২৩)</text>
      <line x1="280" y1="78" x2="280" y2="94" stroke="#a5b4fc" stroke-width="1.6" marker-end="url(#arrowH15)"/>
      <text x="280" y="290" text-anchor="middle" fill="#64748b" font-size="8">সমুদ্র-চলা বন্দরের-নিয়মে: চাবি, ঘরে-ফেরত, একবার-পুনঃযাত্রা, অনুবাদিত-খবর</text>
    </svg>
    <div class="diag-cap">এক ক্লায়েন্ট-স্রোতে তিন-নিয়ম + এক-ভাষা: কম্পোনেন্ট অর্থ বলে, বন্দর পরিবহন সামলায়।</div>
  </div>`,
  senior: {
    title: "API Layer Card",
    body: `<p><strong>স্রোত</strong>: কম্পোনেন্ট→কম্পোজেবল→সার্ভিস(প্রতি-ফিচার)→apiClient→সার্ভার। <strong>ক্লায়েন্ট</strong>: createApiClient (baseURL/timeout/withCredentials; ফ্যাক্টরি-টেস্ট)। <strong>নিয়ম</strong>: ① লেখা-মেথডে ensureCSRFToken→X-CSRFToken (সমান্তরাল-ডাক-এক-প্রমিজ) ② 401→registerUnauthorizedHandler (ঝাঁক-ডিডুপ, /login/-ব্যতিক্রম) ③ 403-লেখা→একবার force-refresh+পুনঃrequest (__hasRetriedCSRF)। <strong>ভাষা</strong>: getApiErrorMessage/parseFormError — কাঁচা-এরর-নিষেধ। <strong>টেস্ট</strong>: MSW এ-স্তরে। <strong>ফাঁদ</strong>: কম্পোনেন্টে সরাসরি axios-ডাক — ক্লায়েন্ট-স্তরে বেস-ইউআরএল/ইন্টারসেপ্টর বাঁধো, নাহলে ৪০১-হ্যান্ডলিং প্রতি-কলে নকল হবে; আর এরর-বার্তা কাঁচা পাঠানো = ইউজার-আতঙ্ক।</p>`
  }
});

doors.push({
  num: 16,
  icon: "📝",
  color: "#10b981",
  name: "পাণ্ডুলিপির দপ্তর",
  subtitle: "The Manuscript Office — Forms that Survive",
  tech: "form state patterns, field errors from parseFormError, dirty-tracking, beforeRouteLeave guard, progressive disclosure, multi-step",
  spirit: "শাহাদাতুল-কিতাব — the attested document: nothing lost, nothing silent",
  secret: "ফর্মের-সত্য স্থানীয়, জমা-মুহূর্তে যাত্রা; ফিল্ড-এরর parseFormError-এর-খাঁচায়, অসংরক্ষিত-প্রস্থান beforeRouteLeave-এ সাবধান — কাঁচা-submit নয়।",
  recall: {
    q: "সার্ভারের {email:['এই ফিল্ড লাগবে']} — দেয়ালে কীভাবে পৌঁছাবে?",
    qen: "How do server field errors reach the wall?",
    a: "parseFormError(e) → Record&lt;field,string[]&gt;-খাঁচা; টেমপ্লেটে ফিল্ড-পাশে getFirstError(errors,'email')-ধরা; _form-কীতে ফর্ম-স্তরের-বার্তা। কাঁচা-JSON কখনো সরাসরি নয়।",
    aen: "parseFormError shapes it into a per-field record; the template reads getFirstError(errors,'email'); _form carries the form-level message."
  },
  story: `<p class="scene-setting">ষোলো নম্বর ঘর <strong>পাণ্ডুলিপির দপ্তর</strong> — লম্বা টেবিলে ফর্মের খসড়া, দেয়ালে লাল-সবুজ সিলমোহরের সারি। দপ্তরি <strong>মুনশি
  আফসার</strong> — তাঁর কানের-পাশে পেন্সিল-গোছা, প্রতিটি খসড়ার কোণে ছোট্ট 'খ-চিহ্ন' (dirty)। তিনি ব্যাখ্যা করেন — <strong>"খসড়া লেখকের টেবিলেই
  থাকে (স্থানীয়-অবস্থা), চূড়ান্ত-হলেই কোরিয়ার (সাবমিট)। কোরিয়ার-ফেরত দুই-রকম খবর আনে: ফর্ম-জুড়ের (ভুল-পাসওয়ার্ড) আর ফিল্ড-ধরা (এই-ঘরের
  লেখা ভুল) — দুটো আলাদা-আলাদা জায়গায় বসবে।"</strong> তারপর তিনি একটা অর্ধেক-লেখা খসড়া তুলে ধরে জানালার-দিকে যাওয়া-যাওয়া শাগিরদকে থামান —
  <strong>"অসংরক্ষিত-খসড়া নিয়ে দপ্তর-ছাড়া? একবার জিজ্ঞেস তো করো।"</strong> (<code>beforeRouteLeave</code> + dirty-চিহ্ন = প্রস্থান-সাবধান)। শেষে
  তিনি LedgerPilot-এর প্রোফাইল-পাণ্ডুলিপি খুলে দেখান চালাকি-এক: ইমেইল না-বদলালে পাসওয়ার্ড-ঘর দেখাই হয় না (progressive disclosure) —
  <em>মূল-ইমেইলের</em> সাথে তুলনায় সিদ্ধান্ত, মানে শুধু-নাম-বদল কখনো পুনঃপ্রমাণ চায় না।</p>
  <p class="scene-setting en">Room sixteen is the <strong>manuscript office</strong> — form drafts on a long table,
  rows of red-green seals on the wall. Registrar <strong>Munshi Afsar</strong> — a pencil-bunch at his ear, a small
  'draft-mark' (dirty) in each draft's corner. He explains — <strong>"drafts stay on the writer's table (local
  state); only when final does the courier go (submit). Courier-back brings two kinds of news: form-wide (wrong
  password) and field-caught (this room's writing is wrong) — each lands in its own place."</strong> Then he lifts a
  half-written draft and stops an apprentice drifting toward the window — <strong>"leaving the office with an unsaved
  draft? Ask once, at least."</strong> (<code>beforeRouteLeave</code> + dirty-mark = exit-caution). Finally he opens
  LedgerPilot's profile-manuscript to show one cleverness: unless the email changes, the password-room stays hidden
  (progressive disclosure) — decided by comparison with the <em>original</em> email, so a mere name-change never
  demands re-proof.</p>
  <div class="dialogue">('"কাগজে দাগ থাকলে তা মুছে ফেলো," মুনশি আফসার সবুজ কাগজ মেলে ধরলেন, "নোঙর ফেলে রাখো — ফিরে এসে যা বদলেছে, এক নজরে দেখা যাবে। আমার প্রথম পাণ্ডুলিপি ছিল মুছতে-ভুলে-যাওয়ার দফতর; পাঠক কোথায় বদলেছে, কেউ বলতে পারত না।"', 'সবুজ কাগজের খসখস শব্দে মন থেমে যায় — নোঙর না থাকলে বদলও অদৃশ্য, ফেরাও অসম্ভব।')</div><div class="dialogue en">"Keep the anchor, wipe the marks — my first manuscript was a forgetting-office; no reader could say what changed."</div>
  <div class="dialogue">মুনশি আফসার খসড়ার কোণের সিলমোহর দেখিয়ে জিজ্ঞেস করলেন, "বলো — কোন ফিল্ড ভুল, কে জানবে?" তুমি বললে, "সাবমিট-কারী?" আফসার মাথা নাড়লেন: "সে তো জানবে চিঠি ফিরলে — কিন্তু কোথায়-ভুল সে-খবর না-থাকলে সে অন্ধকারে তড়পাবে। সার্ভার-ত্রুটি ফিল্ড-মানচিত্রে বসাও: { name: ['নাম খালি'], email: ['ইমেইল নেওয়া হয়েছে'] } — প্রতিটি ফিল্ডের পাশে তার-নিজের লাল-মোহর। আর dirty-হিসাব রাখো: যে-ফিল্ড ছোয়া হয়নি তাকে বকা দিও না — প্রথম-দিনেই লাল-সমুদ্র দেখালে কারিগর পালিয়ে যায়। যাচাই ক্লায়েন্টে-ভদ্রতা, সত্য সার্ভারে — দুই-স্তরের শৃঙ্খলা।"</div>
<div class="dialogue en">Munshi Afsar showed the corner-seal on a draft: "Who learns which field is wrong?" You said: "The submitter?" He shook his head: "He learns when the letter returns — but without a where, he thrashes in the dark. Map server-errors onto fields: { name: ['name empty'], email: ['email taken'] } — each field's own red seal beside it. And keep dirty-accounts: don't scold untouched fields — a red sea on day one sends the craftsman fleeing. Validation is client-courtesy; truth lives on the server — a two-layer discipline."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ এক-গেলা-ফর্ম</div>সব-ফিল্ড এক ref-বস্তুতে — একটা টাইপো মুছলে সব-ভ্যালিডেশন একসাথে চিৎ; ফিল্ড-ত্রুটি আটকায় না।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ ফিল্ড-ভাগা-পাণ্ডুলিপি</div>ফিল্ড-ভিত্তিক state + সার্ভার-ত্রুটি ম্যাপে ফিল্ডে-ফিল্ডে বসানো — ইউজার ঠিক জায়গায় জানে।</div></div>
  <div class="code-block">ফর্ম-শাস্ত্র — ProfileView-এর প্রকৃত-ছায়া

① অবস্থা-বিন্যাস (স্থানীয় + মূল-নোঙর):
  const firstName = ref(auth.user?.first_name ?? '')
  const originalEmail = ref(auth.user?.email ?? '')
  const email = ref(originalEmail.value)   // নোঙর-সেট
  const currentPassword = ref('')
  const emailChanged = computed(() =&gt;
    email.value.trim() !== originalEmail.value)
  · progressive disclosure:
    &lt;PasswordField v-if="emailChanged"
      v-model="currentPassword" /&gt;
  · সফল-সাবমিটে নোঙর-পুনঃসিঙ্ক:
    originalEmail.value = email.value
    (নইলে পাসওয়ার্ড-ঘর আটকে-থাকে-খোলা)

② এরর-খাঁচা (সার্ভার-ভাষা → ফিল্ড-ভাষা):
  const fieldErrors = ref&lt;
    Record&lt;string, FieldError&gt;&gt;({})
  const formError = ref&lt;string&gt;('')
  async function onSubmit() {
    saving.value = true; formError.value = ''
    try {
      await accountService.updateProfile({
        first_name: firstName.value, … })
      toast.success('সংরক্ষিত')
    } catch (e) {
      const parsed = parseFormError(e)
      formError.value = parsed._form ?? ''
      fieldErrors.value = parsed.fields ?? {}
      // টেমপ্লেটে:
      // &lt;TextInput :error="getFirstError(
      //    fieldErrors, 'email')" … /&gt;
    } finally { saving.value = false }
  }
  · বোতাম-তালা: :disabled="saving" +
    useMutationAction-এর রি-এন্ট্র্যান্সি (দরজা ৯)

③ dirty-চিহ্ন (অসংরক্ষিত-ট্র্যাক):
  const pristine = () =&gt;
    firstName.value === (auth.user?.first_name ?? '')
    &amp;&amp; email.value === originalEmail.value
    &amp;&amp; currentPassword.value === ''
  · অথবা শুরুর-স্ন্যাপশট রেখে JSON-তুলনা

④ প্রস্থান-সাবধান (রুট-উপাদানে):
  onBeforeRouteLeave(() =&gt; {
    if (pristine()) return true
    return window.confirm(
      'অসংরক্ষিত পরিবর্তন — তবু যাবে?')
  })
  · ব্রাউজার-ট্যাব-বন্ধও ধরতে: onBeforeRouteLeave+
    beforeunload (উইন্ডো-স্তর)

⑤ ধরন-যাচাই (ক্লায়েন্ট-পাহারা, সার্ভার-চূড়ান্ত):
  · হালকা-নিয়ম: required/ইমেইল-ছাঁচ — HTML5+
    ছোট-কম্পিউটেড; জটিল হলে vee-validate-
    জাতীয় লাইব্রেরি (নতুন-নির্ভরতা বিবেচনায়)
  · সার্ভার-ই-সত্য: ক্লায়েন্ট-যাচাই UX-এর-জন্য,
    নিরাপত্তার-নয়

⑥ বহু-ধাপ-ফর্ম (উইজার্ড):
  · ধাপ = স্থানীয়-রুট বা ধাপ-অবস্থা;
    প্রতি-ধাপে আংশিক-যাচাই, শেষে-এক-সাবমিট
  · ধাপ-জুড়ে-অবস্থা: এক-উপাদানে রাখো
    (উপাদান-ত্যাগে-মৃত্যু), বা স্টোর (দরজা ১০)
  · KeepAlive (দরজা ১২) — ধাপ-পেছনে-গেলে
    পূর্বের-ভরাট-বাঁচে

⑦ বড়-ফর্মের-পারফরম্যান্স:
  · প্রতি-কীস্ট্রোকে-পিতা-বড়-রিরেন্ডার এড়াতে:
    প্রতিটি-ফিল্ড-নিজ-উপাদানে (TextInput-জাত),
    অথবা v-model.lazy + সাবমিটে-একত্র-পাঠ</div>
  <ul class="checklist">
  <li>নোঙর (anchor) রাখো — খসড়া বনাম সঞ্চিত মানের তুলনা</li>
  <li>dirty কম্পিউটেড — প্রস্থান-সাবধান শুধু dirty-তে</li>
  <li>ফিল্ড-এরর খাঁচায় — প্রতিটি ইনপুটের নিজের লাল-বার্তা</li>
  <li>saving-তালা — ডাবল-সাবমিট রোধ</li>
  <li>সফলে নোঙর-সিঙ্ক — সেভের পরেও dirty যেন না থাকে</li>
</ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 6 (Arena of Trials) ফর্ম-কেস সাক্ষাৎ, আর Book 47 (Shields of Craft) ফর্ম-টেস্টের দুর্গ — ভেলিডেশন-চুক্তি দুই দিক থেকে।</div></div>
  <div class="verse">শাহাদাতুল-কিতাব — লিপিবদ্ধ-সাক্ষ্য: "লিখে রাখো, ঋণ এক নির্দিষ্ট মেয়াদ পর্যন্ত" (২:২৮২-এর আদেশ-ছায়া) — লেখা যেন হারায় না, ভুল যেন নীরবে না থাকে। মুনশি আফসারের দপ্তর সেই লিপি-শৃঙ্খলার ফর্ম-রূপ: খসড়া-চিহ্ন, ফিল্ড-সিল, প্রস্থান-প্রশ্ন — তিনটাই এক-উদ্দেশ্যে, ব্যবহারকারীর লেখা রক্ষা। যে দপ্তরে খসড়া নীরবে-হারায়, সেখানে লোকে লেখাই ছেড়ে দেয়; আর যেখানে ভুল-সিল নীরবে-চাপা পড়ে, সে-লেখা সাক্ষ্য নয় — বোঝা।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দপ্তর-ফাঁদ:</strong> (১) সফল-সাবমিটে নোঙর (originalEmail) পুনঃসিঙ্ক-না-করা — পাসওয়ার্ড-ঘর 'আটকে-খোলা' থাকে, LP-কমেন্টের-ই শিক্ষা। (২) সব-এরর এক-ব্যানারে ঢেলে-ফিল্ড-সিল-বাদ — ব্যবহারকারী খুঁজে-বেড়ায় কোন-ঘর ভুল; খাঁচা-ভাগ করো। (৩) dirty-ট্র্যাক-ছাড়া রুট-ছাড়া — দুই-ক্লিকে দুই-ঘণ্টার-লেখা উধাও; প্রস্থান-ফটক বাধ্যতামূলক-অভ্যাস।</div></div>
  <div class="secret-box">📝 ফর্ম = লিপি-চুক্তি: খসড়া-স্থানীয়, নোঙর-প্রগতিশীল-প্রকাশ, এরর-দুই-ঠিকানায়, প্রস্থান-প্রশ্নে-সুরক্ষিত। / Local draft, anchored disclosure, two-addressed seals, gated exit.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ১৬-এর পাণ্ডুলিপি-দপ্তর: প্রোফাইল-ফর্ম বাঁধো — নোঙর + প্রগতিশীল-প্রকাশ (ইমেইল-বদলে পাসওয়ার্ড-ঘর), ফিল্ড-এরর-খাঁচা, dirty-প্রস্থান-ফটক। / Door 16's manuscript office: build a profile form — anchor, progressive disclosure, per-field error cage, dirty exit-gate.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/ManuscriptForm.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { ref, computed } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

// ① অবস্থা-বিন্যাস: খসড়া-টেবিল + মূল-নোঙর
const firstName = ref('রফিক')
const originalEmail = ref('rafik@loom.city')
const email = ref(originalEmail.value)
const currentPassword = ref('')
const saving = ref(false)

// প্রগতিশীল-প্রকাশ: ইমেইল-বদলালেই পাসওয়ার্ড-ঘর
const emailChanged = computed(() =&gt;
  email.value.trim() !== originalEmail.value)

// dirty-চিহ্ন: খসড়া নাকি নোঙর?
const pristine = () =&gt;
  firstName.value === 'রফিক'
  &amp;&amp; email.value === originalEmail.value
  &amp;&amp; currentPassword.value === ''
const isDirty = computed(() =&gt; !pristine())

// ② এরর-খাঁচা: দুই-ঠিকানা
const formError = ref('')
const fieldErrors = ref&lt;Record&lt;string, string[]&gt;&gt;({})
function getFirstError(field: string): string {
  return fieldErrors.value[field]?.[0] ?? ''
}

// নকল-সার্ভার: ফিল্ড-এরর-ফাঁদ
async function fakeSubmit(): Promise&lt;void&gt; {
  await new Promise(r =&gt; setTimeout(r, 700))
  if (email.value === 'taken@loom.city') {
    throw Object.assign(new Error(), {
      response: { data: { email: ['এই ইমেইল নেওয়া হয়েছে'],
                           _form: 'সংরক্ষণ ব্যর্থ' } } })
  }
}

async function onSubmit() {
  saving.value = true
  formError.value = ''
  fieldErrors.value = {}
  try {
    await fakeSubmit()
    // ✓ সফল — নোঙর-পুনঃসিঙ্ক (নইলে পাসওয়ার্ড-ঘর আটকে-খোলা!)
    originalEmail.value = email.value
    currentPassword.value = ''
    console.log('✓ সংরক্ষিত, নোঙর-সিঙ্কড')
  } catch (e: any) {
    const data = e?.response?.data ?? {}
    formError.value = data._form ?? 'সার্ভার-ত্রুটি'
    const { _form, ...fields } = data
    fieldErrors.value = fields as Record&lt;string, string[]&gt;
  } finally {
    saving.value = false
  }
}

// ④ প্রস্থান-ফটক: অসংরক্ষিত-খসড়ায় একবার-জিজ্ঞাসা
onBeforeRouteLeave(() =&gt; {
  if (pristine()) return true
  return window.confirm('অসংরক্ষিত পরিবর্তন — তবু যাবে?')
})
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit.prevent="onSubmit"&gt;
    &lt;h3&gt;📝 পাণ্ডুলিপি — প্রোফাইল&lt;/h3&gt;

    &lt;p v-if="formError" style="color:#ef4444"&gt;⚠️ {{ formError }}&lt;/p&gt;
    &lt;p v-if="isDirty" style="color:#fbbf24"&gt;✏️ খ-চিহ্ন: অসংরক্ষিত খসড়া&lt;/p&gt;

    &lt;label&gt;নাম:
      &lt;input v-model.trim="firstName"&gt;
      &lt;span v-if="getFirstError('first_name')" style="color:#ef4444"&gt;{{ getFirstError('first_name') }}&lt;/span&gt;
    &lt;/label&gt;&lt;br&gt;

    &lt;label&gt;ইমেইল:
      &lt;input v-model.trim="email" placeholder="taken@loom.city লিখে পরীক্ষা করো"&gt;
      &lt;span v-if="getFirstError('email')" style="color:#ef4444"&gt;{{ getFirstError('email') }}&lt;/span&gt;
    &lt;/label&gt;&lt;br&gt;

    &lt;!-- প্রগতিশীল-প্রকাশ: শুধু ইমেইল-বদলে --&gt;
    &lt;label v-if="emailChanged"&gt;বর্তমান পাসওয়ার্ড (পুনঃপ্রমাণ):
      &lt;input type="password" v-model="currentPassword"&gt;
    &lt;/label&gt;&lt;br v-if="emailChanged"&gt;

    &lt;button type="submit" :disabled="saving"&gt;
      {{ saving ? '⏳ পাঠানো হচ্ছে…' : '📦 কোরিয়ারে পাঠাও' }}
    &lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.vue + প্রস্থান-ফটক-পরীক্ষা</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>// App.vue — দরজা ১৩-১৪-এর রাউটার থাকলে সেটি ব্যবহারো;
// নিম্ন-রুট-সেটআপ (App.vue সরাসরি):
&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import ManuscriptForm from './ManuscriptForm.vue'
import { useRouter } from 'vue-router'

const showForm = ref(true)
&lt;/script&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;ManuscriptForm v-if="showForm" /&gt;
    &lt;button @click="showForm = false"&gt;অন্য-পর্দায় যাও (v-if-আনমাউন্ট)&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

// প্রস্থান-ফটক পুরোদমে দেখতে: দরজা ১৩-এর router/index.ts-এ
// ManuscriptForm-কে একটি রুটে বসাও — তারপর নেভিগেশনে-চেষ্টা করো।
// onBeforeRouteLeave কেবল রুট-উপাদানেই কাজ করে (গাইড-নোট)।</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) নাম বদলাও — "খ-চিহ্ন" জ্বলে ওঠে (dirty)। (২) ইমেইল বদলাও — **পাসওয়ার্ড-ঘর আবির্ভূত** (প্রগতিশীল-প্রকাশ); ফিরিয়ে দাও — ঘর মিলিয়ে যায়। (৩) taken@loom.city বসিয়ে সাবমিট — ফর্ম-ব্যানার + **ইমেইল-ঘরের পাশে লাল-সিল** (দুই-ঠিকানা)। (৪) সফল-সাবমিটে ইমেইল-ফিরিয়ে-না-দিলে পাসওয়ার্ড-ঘর খোলাই থাকত — নোঙর-সিঙ্ক-লাইন মন্তব্য-করে দেখো। (৫) dirty-অবস্থায় রুট-নেভিগেশন — confirm-জিজ্ঞাসা। Context7-নোট: onBeforeRouteLeave রুট-উপাদানে-সীমাবদ্ধ; window-confirm-ব্যতিক্রম ছাড়া dirty-ফর্ম নীরবে-হারে। / Tests: dirty mark, appearing password room, two-address seals, anchor-resync proof, exit confirm.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">The Manuscript Office — Draft, Courier, Seals, Exit-Gate</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowF16" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
      <rect x="15" y="14" width="253" height="96" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="141" y="34" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">📝 খসড়া-টেবিল (স্থানীয়-অবস্থা)</text>
      <text x="141" y="49" text-anchor="middle" fill="#94a3b8" font-size="6.5">refs: fields + originalEmail-নোঙর + currentPassword</text>
      <text x="141" y="63" text-anchor="middle" fill="#64748b" font-size="6.5">emailChanged-কম্পিউটেড → পাসওয়ার্ড-ঘর v-if</text>
      <text x="141" y="80" text-anchor="middle" fill="#a5b4fc" font-size="6.5">progressive disclosure — চাহিদা-মাত্র-দেখাও</text>
      <text x="141" y="98" text-anchor="middle" fill="#64748b" font-size="6">সফলে নোঙর-পুনঃসিঙ্ক, নইলে ঘর-আটকে-খোলা</text>
      <rect x="292" y="14" width="253" height="96" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="418" y="34" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">📦 কোরিয়ার (সাবমিট)</text>
      <text x="418" y="49" text-anchor="middle" fill="#94a3b8" font-size="6.5">service.updateProfile(payload) — সার্ভিস-স্তরে</text>
      <text x="418" y="63" text-anchor="middle" fill="#64748b" font-size="6.5">saving-তালা + রি-এন্ট্র্যান্সি (দরজা ৯-গার্ড)</text>
      <text x="418" y="80" text-anchor="middle" fill="#a5b4fc" font-size="6.5">সফল → টোস্ট + রিফেচ + নোঙর-সিঙ্ক</text>
      <text x="418" y="98" text-anchor="middle" fill="#64748b" font-size="6">ব্যর্থ → parseFormError-খাঁচায় নামে</text>
      <line x1="268" y1="60" x2="290" y2="60" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#arrowF16)"/>
      <rect x="15" y="128" width="530" height="76" rx="10" fill="rgba(248,113,113,0.06)" stroke="#f87171" stroke-width="1.4"/>
      <text x="280" y="149" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="700">🔴 সিলমোহর — ফেরত-খবরের দুই-ঠিকানা</text>
      <text x="280" y="165" text-anchor="middle" fill="#94a3b8" font-size="7">ফর্ম-জুড়ে: parsed._form → শিরো-ব্যানার ('বর্তমান পাসওয়ার্ড ভুল')</text>
      <text x="280" y="180" text-anchor="middle" fill="#94a3b8" font-size="7">ফিল্ড-ধরা: parsed.fields → getFirstError(errors,'email') → ঘরের-পাশে-লাল</text>
      <text x="280" y="196" text-anchor="middle" fill="#64748b" font-size="6.5">কাঁচা-JSON/আক্সিওস-বার্তা কখনো-সরাসরি-নয় · v-html-নিষেধ</text>
      <rect x="15" y="220" width="253" height="66" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="141" y="241" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">🚪 প্রস্থান-ফটক</text>
      <text x="141" y="256" text-anchor="middle" fill="#94a3b8" font-size="6.5">onBeforeRouteLeave: !pristine() → confirm</text>
      <text x="141" y="270" text-anchor="middle" fill="#64748b" font-size="6">+ beforeunload — ট্যাব-বন্ধও-ধরা</text>
      <rect x="292" y="220" width="253" height="66" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="418" y="241" text-anchor="middle" fill="#cbd5e1" font-size="8" font-weight="600">🪜 বহু-ধাপ ও পারফরম্যান্স</text>
      <text x="418" y="256" text-anchor="middle" fill="#94a3b8" font-size="6.5">উইজার্ড: ধাপ-অবস্থা/KeepAlive · শেষে-এক-সাবমিট</text>
      <text x="418" y="270" text-anchor="middle" fill="#64748b" font-size="6">বড়-ফর্ম: ফিল্ড-নিজ-উপাদানে বা .lazy — পিতা-রিরেন্ডার-হালকা</text>
      <text x="280" y="302" text-anchor="middle" fill="#64748b" font-size="8">খসড়া টেবিলে, খবর সিলে, প্রস্থান প্রশ্নে — ব্যবহারকারীর-লেখা তিন-স্তরে-রক্ষিত</text>
    </svg>
    <div class="diag-cap">স্থানীয়-খসড়া → কোরিয়ার → দুই-ঠিকানার-সিল → প্রস্থান-ফটক: ফর্ম একটি লিপি-চুক্তি, ঘটনার-স্রোত নয়।</div>
  </div>`,
  senior: {
    title: "Forms Card",
    body: `<p><strong>অবস্থা</strong>: স্থানীয়-refs + মূল-নোঙর (originalEmail); emailChanged-computed → progressive disclosure; সফলে নোঙর-পুনঃসিঙ্ক। <strong>সাবমিট</strong>: সার্ভিস-স্তর + saving-তালা + রি-এন্ট্র্যান্সি। <strong>এরর</strong>: parseFormError → _form (ব্যানার) + fields (getFirstError-ফিল্ডে)। <strong>প্রস্থান</strong>: onBeforeRouteLeave(!pristine→confirm) + beforeunload। <strong>বহু-ধাপ</strong>: ধাপ-অবস্থা/KeepAlive, শেষে-এক-সাবমিট। <strong>পারফরম্যান্স</strong>: ফিল্ড-উপাদান-ভাগ বা .lazy। <strong>নিয়ম</strong>: ক্লায়েন্ট-যাচাই UX, সার্ভার-সত্য। <strong>ফাঁদ</strong>: ফর্ম-স্টেট এক-বিশাল ref-বস্তুতে গুঁজে ফেলা — ফিল্ড-ভাগ করো, অন্যথায় dirty-ট্র্যাকিং সব-বা-কিছু-না হয়ে যাবে; আর সার্ভার-ত্রুটি ফিল্ড-মানচিত্রে না-বসানো = ইউজার অন্ধকারে।</p>`
  }
});
