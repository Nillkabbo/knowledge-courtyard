
doors.push({
  num: 11,
  icon: "🫗",
  color: "#6366f1",
  name: "বংশধারার ঝর্ণা",
  subtitle: "The Ancestral Spring — provide / inject",
  tech: "provide(), inject(), typed injection keys, default values, reactivity through provide, readonly guard",
  spirit: "সিলসিলা — silsila (the chain: blessings flow down the lineage without each link re-fetching)",
  secret: "গভীর-বংশে প্রপ-ঝর্না নয় — উপরে provide, নিচে inject; কী-টাইপসহ নাম, ডিফল্ট-সহ নিরাপত্তা, readonly-ঘেরা উজান।",
  recall: {
    q: "provide/inject আর props-চেইন — কখন কোনটা?",
    qen: "When to use provide/inject over a props chain?",
    a: "৩-৪+ স্তর গভীর বংশে একই মান পৌঁছাতে (থিম, লোকেল, ফর্ম-কাঠামো) inject — মাঝের উপাদানগুলো অপরিচিত প্রপ বইতে থাকে না; ১-২ স্তরে props-ই স্পষ্ট ও শোয়েবল।",
    aen: "For values 3+ levels deep (theme, locale, form context) inject; for 1-2 levels props stay clearer and searchable."
  },
  story: `<p class="scene-setting">এগারো নম্বর ঘরের মাঝে একটা <strong>ঝর্ণা</strong> — কিন্তু আশ্চর্যের কাজটা নিচে নয়, <em>বংশ-বরাবর</em>: এক ঊর্ধ্বতন উঠান থেকে
  পানি সরাসরি নিচের যে-কোনো প্রজন্মের কলসে নামে, মাঝের উঠানগুলো বালতি ধরে ধরে বসে থাকে না। ঝর্ণার রক্ষক <strong>আব্বা করিম</strong> — দাড়িতে
  সাদা রেখা, হাতে তামার পাইপ-রিচ। তিনি বলেন — <strong>"props-বাহক প্রতি উঠানে থামে, প্রত্যেকে বালতি হাতে নাম-করে বয়ে নেয় — পাঁচ প্রজন্মে পাঁচবার
  হাতবদল, প্রতিবার একটু পানি পড়ে। ঝর্ণা সে-শ্রম মেটায়: ঊর্ধ্বতন উঠান provide করে, যে-প্রজন্মে দরকার সে-ই inject করে।"</strong> তারপর তিনি দুইটা
  নিয়মের ফলক দেখান — <strong>নাম-কী খোদাই করো</strong> (InjectionKey-টাইপ, নইলে ভুল-কলসে পানি), <strong>আর উজানের পানি readonly-ঢাকনায় মোড়ো</strong>
  (নিচের প্রজন্ম নিজে বদলাতে গেলে খবর পাঠাক, ঢাকনা খুলে না)। পাশে তিনি দেখান ফর্ম-কাঠামোর বড় পরিবার — এক-ফর্মে বিশ ইনপুট: ঊর্ধ্বতন ফর্ম-উঠান
  provide করে সংগ্রহ+যাচাই-পাইপ, প্রতিটি ইনপুট-ঘর শুধু inject করে খোলে।</p>
  <p class="scene-setting en">Room eleven holds a <strong>spring</strong> — but the wonder is not downward, it is
  <em>lineage-wise</em>: from one upper courtyard water drops straight into any generation's jug below, without the
  middle courtyards passing buckets. The keeper, <strong>Abba Karim</strong> — a white streak in his beard, a copper
  pipe-wrench. He says — <strong>"props-carriers stop at every courtyard; each one names and carries a bucket — five
  generations, five hand-offs, a little water spilled each time. The spring ends that labor: the upper courtyard
  provides; whichever generation needs, injects."</strong> Then two rule-tablets — <strong>engrave the name-key</strong>
  (typed InjectionKey, or water lands in the wrong jug), <strong>and cap the upstream water readonly</strong> (a lower
  generation wanting change sends word, not unscrews the cap). Beside him, the great form-family — one form, twenty
  inputs: the upper form-courtyard provides the collection+validation pipe; each input-room only injects and opens.</p>
  <div class="dialogue">('"ঝর্ণার জল ময়দান ভরে না ঢেলো," আব্বা করিম নলের মুখে সরু বাঁশ লাগালেন, "যার গাছ, তার গোড়ায় সরু সরু নালা ছাড়ো। সব কিছু সবার কাছে পাঠালে কেউ পায় না — শুধু কাদা বাড়ে। একবার পুরো পুকুর এক গাছে ঢেলেছিলাম; গাছ ডুবে গিয়েছিল, পাশের সব তেতুল পানিশূন্য হয়ে গিয়েছিল।"', 'সরু নালার ছলাৎ-ছলাৎ শব্দে চোখ বুজতেই দেখা যায় — লক্ষ্যবিহীন দান কেবল ক্ষতি বাড়ায়।')</div><div class="dialogue en">"Don't flood the field — narrow channels to each tree's root. I once poured a whole pond into one tree; it drowned, the tamarinds went dry."</div>
  <div class="dialogue">তুমি ঝর্ণার নিচের কলস তুলে জিজ্ঞেস করলে, "এই পানি কি প্রতিটি উঠান ঘুরে আসে?" ঊর্ধ্বতন কারিগর উঁচু থেকে বললেন, "না — ঝর্ণা মানে সরাসরি-পথ: দাদা-উঠান থেকে নাতি-উঠানে, মাঝের বালতিগুলো খালি-হাতে পার হয়। এ-ই provide/inject। কিন্তু শর্ত আছে: গভীর-বংশে আর ক্রস-কাটিং বিষয়ে (থিম, লোকেল, প্রমাণীকরণ) — দুই-স্তরে গেলে পাইপ (props) যথেষ্ট, ঝর্ণা খোঁড়া অহেতুক। আর প্রতিটি পানির নলে নাম-ট্যাগ (InjectionKey) দাও — নাম-ছাড়া নলে অন্য-উঠানের পানি ঢুকে যায়, কেউ ধরতে পারে না। দৃশ্যমানতা বিলাসিতা নয় — পরের কারিগরের পথ।"</div>
<div class="dialogue en">You lifted the lowest jug: "Does this water tour every courtyard?" The elder called from above: "No — the fountain is a direct path: grandfather's courtyard to grandson's, the middle buckets pass empty-handed. That is provide/inject. But conditions: for deep lineage and cross-cutting concerns (theme, locale, auth) — two levels deep, pipes (props) suffice; digging a fountain is waste. And name-tag every pipe (InjectionKey) — unnamed, another courtyard's water slips in, none the wiser. Visibility is not luxury — it is the next craftsman's road."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ সব-কিছু-ইনজেকশন</div>দুই-স্তরের দূরত্বেও provide/inject — উৎস অদৃশ্য, নতুন কারিগর খুঁজে পায় না কোথা থেকে আসে।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ গভীর-প্রবাহ</div>৩+ স্তরে ক্রস-কাটিং প্রয়োজনে টাইপড-কী ইনজেকশন; অগভীরে props — দৃশ্যমানতা আগে।</div></div>
  <div class="code-block">provide/inject-শাস্ত্র — টাইপড-কী ছাঁচে

① নাম-কী খোদাই (টাইপসহ — ভুল-কলস রোধ):
  // keys.ts — বংশ-জুড়ে এক-সত্য
  import type { InjectionKey, Ref } from 'vue'
  export const ThemeCtx: InjectionKey&lt;Ref&lt;'light' | 'dark'&gt;&gt; =
    Symbol('ThemeCtx')

② উজান — provide (ঊর্ধ্বতন উপাদান):
  // App.vue
  const theme = ref&lt;'light' | 'dark'&gt;('light')
  provide(ThemeCtx, theme)
  · অবস্থা-সহ provide → নিচে প্রতিক্রিয়া-জীবিত
  · শাসন-চাইলে readonly-ঢাকনা:
    provide(ThemeCtx, readonly(theme))
    (নিচে .value-লেখা সতর্কতা-উঁচু নীরব-ব্যর্থ)

③ ভাটি — inject (যে-প্রজন্মে দরকার):
  // ৪-স্তর-নিচের InputLabel.vue
  const theme = inject(ThemeCtx)          // Ref | undefined
  · ডিফল্ট-সহ নিরাপত্তা:
    const theme = inject(ThemeCtx, ref('light'))
  · বাধ্যতামূলক-না-হলে কারখানা-ডিফল্ট:
    inject(ThemeCtx, () =&gt; ref('light'), true)

④ নিচ থেকে বদল — খবর-পথ (ঢাকনা নয়):
  // উজান provide করে: state + ক্রিয়া
  provide(ThemeCtx, {
    theme: readonly(theme),
    setTheme: (v) =&gt; { theme.value = v },
  })
  // ভাটি: ctx.setTheme('dark') — সিদ্ধান্ত উজানে

⑤ বাস্তব-কুঠিরি (কখন-কোথায়):
  · থিম/লোকেল/স্ক্রিন-আকার — অ্যাপ-মূলে
  · বহু-ইনপুট-ফর্ম: সংগ্রহ+যাচাই-পাইপ — ফর্ম-
    মূলে (প্রতিটি ফিল্ড inject করে নিজ-ক্ষেত্র)
  · কম্পোনেন্ট-লাইব্রেরির অন্তরঙ্গ-সংযোগ (এখানে
    শাস্ত্র-সবচেয়ে-প্রযোজ্য — ব্যবহারকারী প্রপ-বৃষ্টি
    দেখে না)
  ⚠ ১-২ স্তরে props-ই বিশ্বাস্য — inject স্পষ্টতা
    কেনে, সুবিধা বেচে

⑥ LP-সংযোগ-নোট:
  · LedgerPilot-এ সেশন-সত্য স্টোরে (দরজা ১০) —
    কারণ বহু-বংশ+পারসিস্ট+রিসেট-দরকার ছিল;
    inject থাকত প্রপ-জটে শ্বাসরুদ্ধ
  · ছাঁচ-নিয়ম: ক্রস-পর্দা-সত্য → স্টোর;
    বংশ-ভেতরের-অন্তরঙ্গ → provide/inject</div>
  <ul class="checklist"><li>InjectionKey বানিয়ে টাইপড provide/inject — দাদা-নাতি পর্দায় মান পাঠাও</li><li>ডিফল্ট-মান সহ inject লেখো — চাবি-না-থাকলে কী হয় দেখো</li><li>সিদ্ধান্ত-ছক: কখন props / provide / store — তিন-সারির নিজের নিয়ম লেখো</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 4 (City Builder’s Codex) নির্ভরতা-ইনজেকশনের আর্কিটেকচার-যুক্তি দেয়, আর Book 28 (Knowledge Web) বংশধারা-প্রবাহকে জ্ঞান-বৃক্ষের রূপকে বাঁধে।</div></div>
  <div class="verse">সিলসিলা — ধারাবাহিকতার শৃঙ্খল: জ্ঞান ঊর্ধ্ব থেকে নিচে নামে, প্রতিটি প্রজন্ম পাত্র ধরে — কিন্তু পাত্র বহনকারী নয়, প্রাপক। "তাদের পর এলো উত্তরসূরিরা" (২:১৩৪-এর সার) — প্রত্যেকে নিজ-হিসাবে গ্রহণ করে, ধারাটি এক থাকে। আব্বা করিমের ঝর্ণা সেই সিলসিলার নল-রূপ: উজানের দান প্রজন্ম-প্রজন্মান্তরে অবিচ্ছিন্ন, মাঝের কেউ দানের মালিক হয়ে বসে না — শুধু বয়ে রাখে, প্রয়োজনে readonly-ঢাকনায় সযত্নে।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ঝর্ণা-ফাঁদ:</strong> (১) স্ট্রিং-কী (<code>inject('theme')</code>) — বানান-সংঘর্ষে ভুল-কলসে নীরব-অনির্ধারিত; সবসময় Symbol-টাইপড-কী। (২) নিচে <code>theme.value = 'dark'</code> — readonly-ঢাকনায় ব্যর্থ/সতর্কতা; বদল-ক্রিয়া পথ করো। (৩) অ্যাপ-জুড়ে-সত্য inject দিয়ে ছড়ানো — স্টোরের কাজ ইনজেক্টে চাপানো; সীমা মেনে চলো।</div></div>
  <div class="secret-box">🫗 গভীর-বংশে ঝর্ণা খোলো: provide টাইপড-কীতে, inject ডিফল্টসহ, বদল ক্রিয়া-পথে — বালতি-বাহক বংশ বিদায়। / Provide once with typed keys; inject anywhere with defaults; change via action.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ১১-এর ঝর্ণা: দাদা-উঠান থেকে নাতি-উঠানে সরাসরি পানি — মাঝের তিন প্রজন্ম খালি-হাতে। টাইপড-কী + readonly-ঢাকনা + বদল-ক্রিয়া। / Door 11's spring: water from grandfather's courtyard straight to the grandson's — three middle generations passing empty-handed. Typed key, readonly cap, change-action.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/keys.ts</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>import type { InjectionKey, Ref } from 'vue'

// ① নাম-কী খোদাই — টাইপসহ (ভুল-কলস রোধ)
export const ThemeCtx: InjectionKey&lt;{
  theme: Ref&lt;'light' | 'dark'&gt;   // readonly-ঢাকনায়
  setTheme: (v: 'light' | 'dark') =&gt; void
}&gt; = Symbol('ThemeCtx')</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/CourtyardRoot.vue (প্রজন্ম-১)</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { ref, provide, readonly } from 'vue'
import { ThemeCtx } from './keys'
import MiddleLayer from './MiddleLayer.vue'

// ② উজান: state + ক্রিয়া — ঢাকনায়-সত্য, খবরে-বদল
const theme = ref&lt;'light' | 'dark'&gt;('light')
provide(ThemeCtx, {
  theme: readonly(theme),
  setTheme: (v) =&gt; { theme.value = v },   // সিদ্ধান্ত উজানে
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div :style="{ background: theme === 'dark' ? '#1e1b2e' : '#f5f3e7', padding: '1rem' }"&gt;
    &lt;h3&gt;🏡 দাদা-উঠান (প্রজন্ম-১)&lt;/h3&gt;
    &lt;MiddleLayer /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/MiddleLayer.vue (প্রজন্ম-২,৩ একসাথে)</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
// মাঝের-বাহক: কোনো প্রপ-বই নেই, কোনো inject-ও নেই — খালি-হাতে পার
import DeepField from './DeepField.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;div style="padding: .8rem; border: 1px dashed #818cf8"&gt;
    &lt;em&gt;প্রজন্ম-২ (বালতি-ধরে-না)&lt;/em&gt;
    &lt;div style="padding: .8rem"&gt;
      &lt;em&gt;প্রজন্ম-৩ (এও-না)&lt;/em&gt;
      &lt;DeepField /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/DeepField.vue (প্রজন্ম-৪)</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { inject } from 'vue'
import { ThemeCtx } from './keys'

// ③ ভাটি: ডিফল্ট-সহ নিরাপদ inject (কী-না-থাকলেও পর্দা বাঁচে)
const ctx = inject(ThemeCtx, {
  theme: { value: 'light' } as const,
  setTheme: () =&gt; {},
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;থিম (প্রজন্ম-৪ পড়ছে): &lt;strong&gt;{{ ctx.theme.value }}&lt;/strong&gt;&lt;/p&gt;
    &lt;button @click="ctx.setTheme(ctx.theme.value === 'dark' ? 'light' : 'dark')"&gt;
      🌓 বদলাও (খবর উজানে যায়)
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import CourtyardRoot from './CourtyardRoot.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;CourtyardRoot /&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) নাতি-বোতাম চাপো — গোটা গাছের রং বদলায় (দাদার ref, readonly-ঢাকনায়, খবর-পথে)। (২) MiddleLayer-খুলে দেখো — থিম-শব্দটিই নেই (বালতি-বাহক বিদায়)। (৩) প্রমাণ-ফাঁদ: DeepField-এ ctx.theme.value = 'dark' সরাসরি লেখার চেষ্টা করো — readonly-ঢাকনা সতর্ক করে (গাইডের নিজের নমুনা)। / Tests: the grandson's button recolors the whole tree; the middle layers never mention theme; try writing through the readonly cap and get warned.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">Ancestral Spring — One provide, Any-Depth inject</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowJ11" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
      <rect x="185" y="12" width="190" height="64" rx="11" fill="rgba(66,184,131,0.12)" stroke="#6366f1" stroke-width="1.6"/>
      <text x="280" y="33" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🫗 ঊর্ধ্বতন-উঠান</text>
      <text x="280" y="48" text-anchor="middle" fill="#94a3b8" font-size="7">provide(ThemeCtx, readonly(theme))</text>
      <text x="280" y="62" text-anchor="middle" fill="#64748b" font-size="6.5">+ setTheme ক্রিয়া — বদল-খবরের পথ</text>
      <rect x="185" y="104" width="190" height="46" rx="10" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="123" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">মাঝের-উঠান × N</text>
      <text x="280" y="138" text-anchor="middle" fill="#64748b" font-size="6.5">বালতি-ধরে-না — প্রপ-বইবে-না</text>
      <rect x="100" y="182" width="160" height="56" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="180" y="201" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">প্রজন্ম-৪: InputLabel</text>
      <text x="180" y="215" text-anchor="middle" fill="#94a3b8" font-size="6.5">inject(ThemeCtx) — সরাসরি</text>
      <text x="180" y="228" text-anchor="middle" fill="#64748b" font-size="6">ডিফল্ট-সহ নিরাপদ</text>
      <rect x="300" y="182" width="160" height="56" rx="10" fill="rgba(66,184,131,0.08)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="380" y="201" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="700">প্রজন্ম-৬: DeepField</text>
      <text x="380" y="215" text-anchor="middle" fill="#94a3b8" font-size="6.5">inject(ThemeCtx) — যত-গভীরেই</text>
      <text x="380" y="228" text-anchor="middle" fill="#64748b" font-size="6">হাতবদল-শূন্য</text>
      <line x1="280" y1="76" x2="280" y2="102" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#arrowJ11)"/>
      <line x1="280" y1="150" x2="200" y2="180" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrowJ11)"/>
      <line x1="290" y1="150" x2="368" y2="180" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrowJ11)"/>
      <rect x="15" y="258" width="530" height="30" rx="9" fill="rgba(129,140,248,0.07)" stroke="#818cf8" stroke-width="1.2"/>
      <text x="280" y="277" text-anchor="middle" fill="#a5b4fc" font-size="7.5" font-weight="600">কী = InjectionKey&lt;T&gt; খোদাই · বদল = ক্রিয়া-পথ · ১-২ স্তরে props-ই · ক্রস-পর্দা-সত্য = স্টোর</text>
      <text x="280" y="298" text-anchor="middle" fill="#64748b" font-size="8">দান ঊর্ধ্ব থেকে অবিচ্ছিন্ন নামে — প্রজন্ম শুধু পাত্র ধরে, মালিক হয় না</text>
    </svg>
    <div class="diag-cap">পাঁচ-হাতবদলের বালতি-বৃষ্টি নয় — এক নল বংশ-জুড়ে: টাইপড-কী, readonly-ঢাকনা, বদল-খবরের ক্রিয়া-পথ।</div>
  </div>`,
  senior: {
    title: "provide/inject Card",
    body: `<p><strong>কী</strong>: <code>InjectionKey&lt;T&gt;</code> = Symbol (টাইপড)। <strong>উজান</strong>: <code>provide(k, state)</code> — রেফ-সহ দিলে নিচে প্রতিক্রিয়া-জীবিত; শাসনে <code>readonly()</code>। <strong>ভাটি</strong>: <code>inject(k, default)</code> / ফ্যাক্টরি-ডিফল্ট (তৃতীয়-আর্গ true)। <strong>বদল-পথ</strong>: state+action-অবজেক্ট provide → নিচ ক্রিয়া কল। <strong>ব্যবহার-সীমা</strong>: ৩+ স্তর-গভীর/লাইব্রেরি-অন্তরঙ্গ; ১-২ স্তরে props; ক্রস-পর্দা-সত্য → স্টোর (LP-নির্বাচনের কারণ)। <strong>ফাঁদ</strong>: provide/inject-কে গ্লোবাল-বাস্তার মতো ব্যবহার — ৩+ স্তর গভীর না হলে props-ই থাকো; ইনজেকশন-কী ছাড়া স্ট্রিং-কী = নাম-সংঘর্ষের ফাঁদ।</p>`
  }
});

doors.push({
  num: 12,
  icon: "🌀",
  color: "#818cf8",
  name: "উন্নত যন্ত্রের বারান্দা",
  subtitle: "The Advanced Balcony — Dynamic/Async, Teleport, Suspense, keep-alive",
  tech: "component :is, markRaw, defineAsyncComponent, Teleport (defer), Suspense, KeepAlive (include/activate)",
  spirit: "তাহরীফ — taḥrīf (transposition: moving without changing essence)",
  secret: "কম্পোনেন্ট রাতে বদলায় (:is+markRaw), দেরিতে আসে (async+স্কেলটন), অন্য দেয়ালে ফুটে (Teleport defer), অপেক্ষায় সাজে (Suspense), ঘুমায়-জাগে (KeepAlive) — সারাংশ অক্ষত।",
  recall: {
    q: "component :is-এ বস্তু সরাসরি দিলে কী হয়?",
    qen: "What happens passing a raw object to :is?",
    a: "Vue তাকে reactive-বানাতে চায় — অপ্রয়োজনীয়-গভীর-প্রতিক্রিয়া + সতর্কতা; markRaw দিয়ে চিহ্নিত করো ('এটি বস্তু-নয়, উপাদান'), তারপর :is-এ বাঁধো।",
    aen: "Vue tries to make it deeply reactive — wasteful; wrap the component in markRaw before binding to :is."
  },
  story: `<p class="scene-setting">বারো নম্বর ঘর কারখানার সবচেয়ে উঁচু বারান্দা — এখানে পাঁচটা অসাধারণ যন্ত্র একসাথে দাঁড়িয়ে। বারান্দার মালিক <strong>নাইমা
  খালা</strong> — তাঁর চুড়িবাজি প্রায় অদৃশ্য হাতের কৌশলে। <strong>যন্ত্র এক — রাতের-ঘুরানো-ফ্রেম</strong> (<code>:is</code>): দেয়ালে এক ফ্রেম, রাতে-রাতে ভেতরের ছবি
  বদলায় — কারিগর চাইলে markRaw-মোহরে ছবি মুড়িয়ে দেয় যেন ফ্রেম তার ভেতর নাড়াতে না পারে। <strong>যন্ত্র দুই — দেরিতে-আসা-মাল</strong>
  (<code>defineAsyncComponent</code>): দূরের কারখানা থেকে ভারী অংশ লোড হয়ে আসে, ততক্ষণ স্কেলটন-দেখানো কাপড় ঝুলে। <strong>যন্ত্র তিন — অন্য-দেয়ালে-
  ফুটা</strong> (<code>Teleport</code>): মোডাল-জাতীয় জিনিস বংশের গভীরে থেকেও শরীরের একদম-শেষ দেয়ালে ফুটে — z-index-জট ও ওভারফ্লো-ফাঁদ এড়িয়ে;
  3.5-এর <code>defer</code>-পাখায় লক্ষ্য-দেয়াল পরে-বাঁধলেও চলে। <strong>যন্ত্র চার — অপেক্ষার-মঞ্চ</strong> (<code>Suspense</code>): async-সেটআপ-উপাদান
  প্রস্তুত হওয়া পর্যন্ত fallback-পর্দা নামে থাকে, তারপর পাল্টে যায়। <strong>যন্ত্র পাঁচ — ঘুমের-আলমারি</strong> (<code>KeepAlive</code>): ট্যাব বদলালে
  পুরনো-পর্দা নষ্ট হয় না, ঘুমায় (deactivated) আর ফিরলে জাগে (activated) — স্ক্রল, ফর্ম, মন সব যথাস্থান।</p>
  <p class="scene-setting en">Room twelve is the highest balcony — five extraordinary machines standing together.
  The owner, <strong>Naima Khala</strong> — bangles moving with near-invisible skill. <strong>Machine one — the
  night-turning frame</strong> (<code>:is</code>): one frame on the wall, its picture changes nightly — the artisan
  wraps pictures in the markRaw seal so the frame cannot stir the inside. <strong>Machine two — late-arriving
  cargo</strong> (<code>defineAsyncComponent</code>): heavy parts load from a distant workshop while skeleton-cloth
  hangs in place. <strong>Machine three — sprouting on another wall</strong> (<code>Teleport</code>): modal-like
  things sprout at the body's outermost wall even when born deep in the lineage — escaping z-index knots and
  overflow-traps; with 3.5's <code>defer</code> fin, the target wall may even be mounted later. <strong>Machine four —
  the waiting stage</strong> (<code>Suspense</code>): a fallback curtain hangs until async-setup components are ready,
  then swaps. <strong>Machine five — the sleep-wardrobe</strong> (<code>KeepAlive</code>): on tab-switch the old
  screen isn't destroyed — it sleeps (deactivated) and wakes (activated) with scroll, form, and mind intact.</p>
  <div class="dialogue">('"এক কাঠে সব ঘর হয় না," শেখ নেয়ামত উঠোনে বাঁকানো তক্তা দেখালেন, "সস্তার ঘর বারান্দায় বসে, ভারী ঘর পাথরের মাথায়। তাই বটল-মেশিনে সবাই সমান — সামনে থাকলে আমি এক প্রশ্নে চিনে ফেলি, কে বানিয়েছে। নাম-না-জানা কাঠ দিয়ে মসজিদের দরজা বানাতে গিয়েছিলাম — দুই বছরে ফাটল ধরেছিল।"', 'তক্তার আঁকাবাঁকা রেখা আঙুলে ঠেকে বোঝা যায় — কোন কাঠ কোন ভার বইতে পারে, তা চেহারায়ই লেখা।')</div><div class="dialogue en">"One wood doesn't make every house — cheap rooms sit on the arcade, heavy rooms on stone. Unknown wood once cracked my mosque door in two years."</div>
  <div class="dialogue">নাইমা খালা ভারী-মালের ঠেলাগাড়ি দেখিয়ে জিজ্ঞেস করলেন, "প্রথম-সকালেই পুরো-শহরের মাল বই কি বুদ্ধিমানের কাজ?" তুমি বললে, "মাল তো সব লাগবেই!" খালা মাথা নাড়লেন: "লাগবে — কিন্তু কখন? যে-দপতরে ঢুকবে না সে-মাল প্রথম-দিনেই কেন? defineAsyncComponent মানে দরকারের-দিনের-বই: যে-পর্দা ডাকবে সে-মাল সে-সময় আসবে (চাংক-ভাগ)। KeepAlive মানে ফেরা-দপতরের স্মৃতি: গেল-দপতরের ঘর-সাজ রইগে যায়, নতুন-করে গুছাতে হয় না। আর Teleport — মেলার-মিনার যেখানেই থাকুক, ঘণ্টি শহরের-চূড়ায়: DOM-জায়গা আর যুক্তি-জায়গা আলাদা হতে পারে, দরজা ঠিক রেখে।"</div>
<div class="dialogue en">Naima Khala showed the heavy wagon: "Is hauling the whole town's freight at dawn wise?" You said: "All of it is needed!" She shook her head: "Needed — but when? Why ship the never-entered department's freight on day one? defineAsyncComponent is the day-of-need load: the screen that calls, gets its freight then (chunk-split). KeepAlive is the returning department's memory: last room-arrangement stays, no re-ordering. And Teleport — wherever the fair-tower stands, the bell hangs at the city's crown: DOM-place and logic-place may differ, doors intact."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ সব-সময়-সব-লোড</div>পুরো অ্যাপ প্রথম-মুহূর্তে টানা — প্রথম-পর্দা ধীর, ব্যান্ডউইথ-অপচাশীল।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ দরকারে-দরজা</div>defineAsyncComponent + Suspense — যে-পর্দা যখন লাগে তখন; KeepAlive দিয়ে ফেরা-পর্দা বিনামূল্যে।</div></div>
  <div class="code-block">উন্নত-পাঁচযন্ত্র — প্রতিটির ছাঁচ (Vue 3.5)

① রাতের-ফ্রেম — &lt;component :is&gt;:
  &lt;component :is="currentTab" /&gt;
  const tabs = {
    profile: markRaw(ProfilePanel),   // মোহর — নাড়াবে-না
    billing: markRaw(BillingPanel),
  }
  const currentTab = shallowRef(tabs.profile)
  · স্ট্রিং-নাম সমাধান: স্থানীয়-রেজিস্টার্ড
    &lt;component :is="ProfilePanel" /&gt; = &lt;ProfilePanel /&gt;
  ⚠ raw-অবজেক্ট হাতে-বাঁধলে reactive-প্রয়াস+
    সতর্কতা — markRaw বাধ্যতামূলক-শৃঙ্খলা

② দেরিতে-মাল — defineAsyncComponent:
  const HeavyChart = defineAsyncComponent(
    () =&gt; import('./HeavyChart.vue'))
  · লোডিং+ব্যর্থতার-কাপড়:
  const HeavyChart = defineAsyncComponent({
    loader: () =&gt; import('./HeavyChart.vue'),
    loadingComponent: SkeletonChart,
    errorComponent: ChartError,
    delay: 200,          // ফ্ল্যাশ-রোধ
    timeout: 10000,
  })
  · রুট-স্তরে ভারী-পর্দা: রাউটারের lazy
    () =&gt; import(…) — দরজা ১৩-এ একই-সুতো

③ অন্য-দেয়ালে-ফুটা — Teleport:
  &lt;Teleport to="#modal-root"&gt;
    &lt;div class="modal"&gt;…&lt;/div&gt;
  &lt;/Teleport&gt;
  · বংশ-গভীরে জন্ম, DOM-শেষে প্রদর্শন —
    z-index/ওভারফ্লো/প্যাডিং-ফাঁদ এড়ানো
  · Vue 3.5 — defer-পাখা:
    &lt;Teleport defer to="#late-root"&gt;
    লক্ষ্য-দেয়াল একই-রেন্ডারে পরে-লাগলেও কাজ
  · শর্ত-টগল: :disabled="isMobile"

④ অপেক্ষার-মঞ্চ — Suspense:
  &lt;Suspense&gt;
    &lt;template #default&gt;&lt;AsyncDashboard /&gt;&lt;/template&gt;
    &lt;template #fallback&gt;&lt;SkeletonScreen /&gt;&lt;/template&gt;
  &lt;/Suspense&gt;
  · top-level await-সেটআপ প্রস্তুত হওয়া পর্যন্ত
    fallback; তারপর পাল্টে
  · onErrorCaptured-সাথে ব্যর্থতা-নিয়ন্ত্রণ
  ⚠ পরীক্ষায়-সমর্থন পাতলা — সাধারণ পথ:
    onMounted+স্কেলটন (LP-ধারা) যথেষ্ট

⑤ ঘুমের-আলমারি — KeepAlive:
  &lt;KeepAlive include="TabA,TabB" :max="5"&gt;
    &lt;component :is="currentTab" /&gt;
  &lt;/KeepAlive&gt;
  · আনমাউন্ট-নয় — deactivated (ঘুম) / activated (জাগা)
  · include/exclude (নাম-ভিত্তি), :max (LRU-সীমা)
  · প্রজন্ম-পর্দা যেগুলো দামি-পুনর্নির্মাণ (ফর্ম/
    ফিল্টার-অবস্থা) — সেগুলোর বিশ্রামাগার

পাঁচযন্ত্র-একসাথে (ট্যাব-অ্যাপ নকশা):
  &lt;KeepAlive :max="4"&gt;
    &lt;Suspense&gt;
      &lt;component :is="tabs[cur]" /&gt;
      &lt;template #fallback&gt;&lt;Skeleton /&gt;&lt;/template&gt;
    &lt;/Suspense&gt;
  &lt;/KeepAlive&gt;
  …মোডালগুলো Teleport-এ, ভারী-প্যানেল async</div>
  <ul class="checklist"><li>ভারী-কম্পোনেন্ট async বানিয়ে নেটওয়ার্ক-ট্যাবে চাংক-বিভাজন দেখো</li><li>ট্যাব-ইন্টারফেস KeepAlive দিয়ে — include-তালিকা মিলিয়ে দেখো অবস্থা টিকে থাকে</li><li>Teleport দিয়ে মডাল body-তে পাঠাও — z-index-যুদ্ধ শেষ</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 4 (City Builder’s Codex — ২০ দরজা) কম্পোনেন্ট-লেজি-লোডিং আর সাসপেন্স-সীমানার সিস্টেম-নকশা; আর Book 43 (Sky Fortress) CDN-স্তরের লেজি-লোডিং।</div></div>
  <div class="verse">তাহরীফ — স্থানান্তর অবিকৃতির সাথে: সত্তা স্থান বদলায়, ধাতু বদলায় না। "পাহাড়কে সে দেখবে ভ্রমে চলমান" (২৭:৮৮-এর ভাব) — চলমানতার দৃষ্টিনন্দন, কিন্তু পাহাড়ের সত্য অক্ষত। নাইমা খালার পাঁচযন্ত্র সেই তাহরীফের কারিগরি পাঠশালা: ফ্রেম বদলায় ছবি নয়, দেয়াল বদলায় মূর্তি নয়, ঘুম আসে মৃত্যু নয় — স্থান-কাল-অবস্থার স্থানান্তর, সারাংশের নয়। যে কারিগর স্থানান্তরকে ধ্বংস ভাবে, সে হয় সব-কিছু পুনর্নির্মাণ করে ক্লান্ত, নয় সব-কিছু ধরে রাখে ফুলিয়ে।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>বারান্দা-ফাঁদ:</strong> (১) <code>:is</code>-এ markRaw-বিহীন কম্পোনেন্ট-অবজেক্ট — গভীর-প্রতিক্রিয়ার অপচয়+সতর্কতা। (২) Teleport-লক্ষ্য মাউন্ট-পূর্বে থাকা — পুরনো বিধিতে ব্যর্থ; 3.5-এ <code>defer</code> দাও বা লক্ষ্য-এলিমেন্ট index.html-এ আগে-রাখো। (৩) KeepAlive-এ সাইড-এফেক্ট-ভারী উপাদান <code>include</code>-বিহীন — মেমরি ফুলবে; নাম-তালিকা সচেতন রাখো আর <code>:max</code> বাঁধো।</div></div>
  <div class="secret-box">🌀 উন্নত-পাঁচ: :is+markRaw বদলায়, async বিলম্বিত-আনে, Teleport defer-সহ স্থানান্তরে, Suspense অপেক্ষা-সাজায়, KeepAlive ঘুম-জাগায় — সারাংশ অক্ষত। / Five machines move place and time, never essence.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ১২-এর বারান্দা: পাঁচযন্ত্র এক-অ্যাপে — ট্যাব-বদল (:is+markRaw), ভারী-মাল (async+স্কেলটন), মোডাল (Teleport), অপেক্ষা (Suspense), ঘুম-আলমারি (KeepAlive)। index.html-এর body-র শেষে &lt;div id="modal-root"&gt;&lt;/div&gt; যোগ করতে ভুলো না। / Door 12's balcony: all five machines in one app. Don't forget &lt;div id="modal-root"&gt; at the end of index.html's body.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/tabs/CounterTab.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { ref, onActivated, onDeactivated } from 'vue'

// KeepAlive-পরীক্ষার জন্য: অবস্থা ধরে রাখো
const count = ref(0)
onActivated(() =&gt; console.log('🟢 CounterTab জাগল'))
onDeactivated(() =&gt; console.log('😴 CounterTab ঘুমাল (ভাঙল না)'))
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;গুনি: {{ count }} — ট্যাব বদলেও মনে থাকবে&lt;/p&gt;
    &lt;button @click="count++"&gt;+১&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/tabs/HeavyTab.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
// top-level await — Suspense-এর অপেক্ষা-মঞ্চ এটিকেই দেখে
const goods = await new Promise&lt;string[]&gt;((resolve) =&gt;
  setTimeout(() =&gt; resolve(['ভারী-তাঁত', 'রুপোর-কাঁচি', 'রেশম-গাঁথনি']), 1500))
&lt;/script&gt;

&lt;template&gt;
  &lt;ul&gt;&lt;li v-for="g in goods" :key="g"&gt;📦 {{ g }}&lt;/li&gt;&lt;/ul&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/BalconyApp.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { shallowRef, markRaw, defineAsyncComponent, ref } from 'vue'
import CounterTab from './tabs/CounterTab.vue'

// ① রাতের-ফ্রেম: markRaw-মোহর + shallowRef
const HeavyTab = markRaw(defineAsyncComponent(
  () =&gt; import('./tabs/HeavyTab.vue')))
const tabs = {
  counter: markRaw(CounterTab),
  heavy: HeavyTab,
}
const current = shallowRef(tabs.counter)
const currentName = ref('counter')
function switchTab(name: 'counter' | 'heavy') {
  currentName.value = name
  current.value = tabs[name]
}

// ③ Teleport-মোডাল
const showModal = ref(false)
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;🌀 বারান্দা — পাঁচযন্ত্র&lt;/h3&gt;

    &lt;button @click="switchTab('counter')"&gt;🧮 কাউন্টার-ট্যাব&lt;/button&gt;
    &lt;button @click="switchTab('heavy')"&gt;📦 ভারী-ট্যাব (async)&lt;/button&gt;
    &lt;button @click="showModal = true"&gt;🌀 মোডাল খোলো (Teleport)&lt;/button&gt;

    &lt;!-- ⑤+④+①: ঘুমের-আলমারি ⊃ অপেক্ষার-মঞ্চ ⊃ ফ্রেম --&gt;
    &lt;KeepAlive include="CounterTab"&gt;
      &lt;Suspense&gt;
        &lt;component :is="current" /&gt;
        &lt;template #fallback&gt;
          &lt;p&gt;⏳ ভারী-মাল আসছে… (স্কেলটন-কাপড়)&lt;/p&gt;
        &lt;/template&gt;
      &lt;/Suspense&gt;
    &lt;/KeepAlive&gt;

    &lt;!-- ③: বংশে জন্ম, body-র শেষ-দেয়ালে প্রদর্শন --&gt;
    &lt;Teleport to="#modal-root"&gt;
      &lt;div v-if="showModal" class="mask" @click.self="showModal = false"&gt;
        &lt;div class="box"&gt;মিনারের ঘণ্টি — DOM শহরের চূড়ায়, যুক্তি বংশের গভীরে&lt;/div&gt;
      &lt;/div&gt;
    &lt;/Teleport&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.mask { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: grid; place-items: center; }
.box { background: #fff; color: #111; padding: 1rem 1.4rem; border-radius: 12px; }
&lt;/style&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import BalconyApp from './BalconyApp.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;BalconyApp /&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) কাউন্টারে গুনো, ভারী-ট্যাবে যাও, ফেরো — **গুনি রয়ে গেছে** (KeepAlive-ঘুম; কনসোলে 😴→🟢)। (২) ভারী-ট্যাবে প্রথম-গেলে ১.৫ সেকেন্ড স্কেলটন (Suspense #fallback; দ্বিতীয়বার তাৎক্ষণিক — চাংক ক্যাশে)। (৩) মোডাল খোলো — ডেভটুলসে দেখো সে #modal-root-এ বসে (Teleport); বাবার z-index-জট নেই। (৪) নেটওয়ার্ক-ট্যাব: ভারী-ট্যাব প্রথম-ক্লিকেই HeavyTab-চাংক লোড হয়। Context7-নোট: KeepAlive-এর include কম্পোনেন্টের name-এর সাথে মিলতে হয় — script-setup-এ সে-নাম defineOptions({ name: 'CounterTab' }) বা ফাইল-নাম থেকে আসে; না-মিললে নীরব-নো-অপ। / Tests: the counter survives tab switches (sleep/wake logs); the heavy tab shows the skeleton once then caches; the modal sits in #modal-root; the chunk loads on first click only.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">The Advanced Balcony — Five Machines</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="12" width="164" height="104" rx="10" fill="rgba(66,184,131,0.09)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="97" y="33" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">🖼️ :is + markRaw</text>
      <text x="97" y="48" text-anchor="middle" fill="#94a3b8" font-size="6.5">রাতে-ফ্রেম-বদল</text>
      <text x="97" y="62" text-anchor="middle" fill="#64748b" font-size="6.5">shallowRef + markRaw(Comp)</text>
      <text x="97" y="78" text-anchor="middle" fill="#a5b4fc" font-size="6.5">⚠ raw-বাঁধা = reactive-অপচয়</text>
      <text x="97" y="98" text-anchor="middle" fill="#64748b" font-size="6">ট্যাব-বদলের মূল-যন্ত্র</text>
      <rect x="196" y="12" width="164" height="104" rx="10" fill="rgba(66,184,131,0.09)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="278" y="33" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">🚚 async component</text>
      <text x="278" y="48" text-anchor="middle" fill="#94a3b8" font-size="6.5">দেরিতে-আসা-ভারী-মাল</text>
      <text x="278" y="62" text-anchor="middle" fill="#64748b" font-size="6.5">loading/error + delay/timeout</text>
      <text x="278" y="78" text-anchor="middle" fill="#a5b4fc" font-size="6.5">বান্ডেল-ভাগ + স্কেলটন</text>
      <text x="278" y="98" text-anchor="middle" fill="#64748b" font-size="6">রাউট-লেজির আত্মীয় (দরজা ১৩)</text>
      <rect x="377" y="12" width="168" height="104" rx="10" fill="rgba(66,184,131,0.09)" stroke="#6366f1" stroke-width="1.4"/>
      <text x="461" y="33" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">🌀 Teleport (defer)</text>
      <text x="461" y="48" text-anchor="middle" fill="#94a3b8" font-size="6.5">অন্য-দেয়ালে-ফুটা</text>
      <text x="461" y="62" text-anchor="middle" fill="#64748b" font-size="6.5">to="#modal-root" · :disabled</text>
      <text x="461" y="78" text-anchor="middle" fill="#a5b4fc" font-size="6.5">3.5: defer — লেট-টার্গেট ও চলে</text>
      <text x="461" y="98" text-anchor="middle" fill="#64748b" font-size="6">z-index/ওভারফ্লো-ফাঁদ-মুক্তি</text>
      <rect x="105" y="136" width="164" height="104" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="187" y="157" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="700">🎭 Suspense</text>
      <text x="187" y="172" text-anchor="middle" fill="#94a3b8" font-size="6.5">অপেক্ষার-মঞ্চ</text>
      <text x="187" y="186" text-anchor="middle" fill="#64748b" font-size="6.5">#default + #fallback</text>
      <text x="187" y="202" text-anchor="middle" fill="#a5b4fc" font-size="6.5">top-level-await প্রস্তুত-পর্যন্ত</text>
      <text x="187" y="222" text-anchor="middle" fill="#64748b" font-size="6">সাধারণ-পথ: onMounted+স্কেলটন</text>
      <rect x="290" y="136" width="164" height="104" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="372" y="157" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">🛏️ KeepAlive</text>
      <text x="372" y="172" text-anchor="middle" fill="#94a3b8" font-size="6.5">ঘুমের-আলমারি</text>
      <text x="372" y="186" text-anchor="middle" fill="#64748b" font-size="6.5">include/exclude · :max (LRU)</text>
      <text x="372" y="202" text-anchor="middle" fill="#fcd34d" font-size="6.5">activated/deactivated — জাগা/ঘুম</text>
      <text x="372" y="222" text-anchor="middle" fill="#64748b" font-size="6">ফর্ম-ফিল্টার-স্ক্রল যথাস্থান</text>
      <rect x="15" y="258" width="530" height="34" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="279" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">একসাথে: KeepAlive ⊃ Suspense ⊃ component :is + টেলিপোর্টেড মোডাল + async-প্যানেল — স্থানান্তর অবিকৃতির সাথে</text>
      <text x="280" y="301" text-anchor="middle" fill="#64748b" font-size="8">ফ্রেম বদলায় ছবি নয়, ঘুম মৃত্যু নয় — পাঁচযন্ত্রে সারাংশ-অক্ষত স্থানান্তর</text>
    </svg>
    <div class="diag-cap">বারান্দার পাঁচযন্ত্র: বদল (is), বিলম্ব (async), স্থানান্তর (Teleport), অপেক্ষা (Suspense), ঘুম (KeepAlive) — প্রতিটি নিজ-নিজ ফাঁদ-মুক্ত পথে।</div>
  </div>`,
  senior: {
    title: "Advanced Components Card",
    body: `<p><strong>:is</strong>: <code>shallowRef + markRaw(Comp)</code>; স্ট্রিং-নাম স্থানীয়-রেজিস্ট্রিতে। <strong>async</strong>: defineAsyncComponent + loading/error/delay/timeout — বান্ডেল-ভাগ। <strong>Teleport</strong>: to="#root" (z-index/ওভারফ্লো-মুক্তি), 3.5 <code>defer</code> (লেট-টার্গেট), :disabled। <strong>Suspense</strong>: default+fallback; top-level-await; সাধারণ-বিকল্প onMounted+স্কেলটন (LP-ধারা)। <strong>KeepAlive</strong>: include/exclude/:max; activated/deactivated। <strong>ফাঁদ</strong>: <code>KeepAlive</code>-এ include-নাম কম্পোনেন্টের name-সাথে না-মেলা (সাইলেন্ট-নো-অপ); আর সব-কিছু অ্যাসিঙ্ক বানিয়ে ফেলা — যেখানে সাসপেন্স নেই সেখানে জটিলতা-কর বেড়ে যায়।</p>`
  }
});
