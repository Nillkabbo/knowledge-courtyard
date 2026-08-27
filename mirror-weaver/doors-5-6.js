
doors.push({
  num: 5,
  icon: "🕊️",
  color: "#14b8a6",
  name: "ফেরত-পাখির ডাক",
  subtitle: "The Return-Bird's Call — Custom Events (emit)",
  tech: "defineEmits, typed event payloads, emits declaration, event validation, fallthrough attributes",
  spirit: "রিসালাত — risāla (the message: the messenger carries, the sender decides)",
  secret: "পুত্র ঘোষিত পাখি ছাড়ে — নাম+ধরন চুক্তিসহ (defineEmits); সিদ্ধান্ত উজানের, খবর ভাটির।",
  recall: {
    q: "emit-চুক্তি ঘোষণা না করলে কী ঝুঁকি?",
    qen: "Risk of undeclared emits?",
    a: "নাম-বানান/পে-লোড নিয়ে পিতা-পুত্রের নীরব ভুল বোঝাবুঝি; টাইপ-ঘোষণা (defineEmits<{(e:'x', v:T):void}>) থাকলে কম্পাইলারই ধরে, আর attrs-ফলথ্রুও বিভ্রান্তি কমায়।",
    aen: "Silent parent/child mismatches on names and payloads; typed defineEmits catches them at compile time and reduces attribute fallthrough confusion."
  },
  story: `<p class="scene-setting">পাঁচ নম্বর ঘরটা একটা পাখির-বাসার ঘর। কারিগর <strong>সালমা</strong> — তাঁর কাঁধে সবুজ পালকের চাদর, হাতে ছোট্ট রুপোর সিলিঙ্গার-টিউব। প্রতিটি ফেরত-পাখির
  পায়ে তিনি দুইটা জিনিস বাঁধেন: <strong>নাম-রিং</strong> (কোন খবর) আর <strong>ওজন-চিরহার</strong> (পে-লোডের ধরন)। তিনি বলেন — <strong>"ঘোষণাহীন পাখি
  ছাড়িস নে। নাম ভুল হলে পিতার খাঁচায় পৌঁছাবেই না — চুপচাপ হাওয়ায় হারিয়ে যাবে, আর তুমি ভাববে পিতা অভদ্র।"</strong> এক শাগিরদ পাখি ছেড়েছিল
  নাম-ছাড়া নিছক <code>$emit('ok')</code> করে — পিতা <code>@ok</code>-এর বদলে <code>@confirm</code>-এ শুনছিল; দুই পাশেই কেউ দোষ ধরতে পারল না। সালমা
  তখন দেখালেন শাস্ত্রের ছাঁচ — <code>defineEmits</code>-এ নাম আর ধরন লেখো, তারপর পিতার খাঁচায় ঠিক নামের ঘণ্টি বাঁধো (<code>@confirm</code>)। শেষে
  তিনি সতর্ক করলেন এক অদৃশ্য পথের কথা — <strong>attrs-ফলথ্রু</strong>: ঘোষণা-বাহির গুণ ও শ্রোতা শিকড়ে নেমে যায়; এক-শিকড় উপাদানে ভিন্নবত্তী
  জাদু, বহু-শিকড়ে বিভ্রান্তি।</p>
  <p class="scene-setting en">Room five is a bird-nest room. Artisan <strong>Salma</strong> — a green-feathered shawl,
  a tiny silver leg-ring tube. To every return-bird's leg she ties two things: a <strong>name-ring</strong> (which
  news) and a <strong>weight-tally</strong> (the payload's type). She says — <strong>"never release an undeclared
  bird. A wrong name never reaches the parent's cage — it silently loses itself in the wind while you think the parent
  rude."</strong> One apprentice released a nameless bird — a bare <code>$emit('ok')</code> — while the parent listened
  for <code>@confirm</code>; neither side could blame the other. Salma showed the disciplined mold — declare names and
  types in <code>defineEmits</code>, then hang the bell of the exact name on the parent's cage. Finally she warned of an
  invisible path — <strong>attrs fallthrough</strong>: undeclared attributes and listeners sink to the root; useful
  magic on single-root components, confusion on multi-root ones.</p>
  <div class="dialogue">('"পাখি ফিরে এলেই দড়ি খোলো," রফিক খাঁচার দরজা খুলে পাখিটাকে আকাশে ছেড়ে দিলেন, "ওরা নিজের সন্দেশ নিজের ঠোঁটে নিয়ে আসে। তুমি শুধু নাম লিখে দাও — কোন পাখি, কী খবর। নাম-ছাড়া পাখি পুরো শহরে গুলশান করে তোলে; কেউ জানে না কার ডাক কী কাজের।"', 'পাখির ডানার ঝাপটানিতে বাতাস এসে লাগে — প্রতিটি ডাকের একটা নাম-ফলক থাকার মানেটা এবার অনুভূত হয়।')</div><div class="dialogue en">"The birds bring their own message in their own beak — you only write the name: which bird, what news. Nameless birds scatter the whole city."</div>
  <div class="dialogue">সালমা একটা পাখির ডাক শুনিয়ে জিজ্ঞেস করলেন, "এই ডাকে কী আছে — নাম, না খবর?" তুমি ভেবে বললে, "দুই-ই?" সালমা হাসলেন: "তাই তো চুক্তি দরকার। defineEmits মানে পাখির পায়ে নাম-রিং আর খবরের-ফিতা দুই-ই লেখা: (close, পেলোড শূন্য) (update, পেলোড নতুন-মান)। শুধু নাম পাঠালে শ্রোতা অনুমানে চলে — অনুমান মানে কাল ভাঙা। আর শ্রোতা-মা যখন ডাক শোনে, সে কি করবে সেটাও তার খাতায় — ডাক শুধু জানায়, আদেশ দেয় না। ইভেন্ট মানে সংবাদ, সন্তান মায়ের হাত ধরে টানে না।"</div>
<div class="dialogue en">Salma sounded a bird-call: "What’s in this call — the name, or the news?" You thought: "Both?" She laughed: "That’s why the contract. defineEmits writes both the leg-ring and the news-ribbon: (close, empty payload) (update, new value). Name alone, and listeners guess — guessing breaks tomorrow. And when the mother-listener hears, what she does is her own ledger — the call informs, never commands. An event is news; a child doesn’t drag the mother’s hand."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ মূক-সন্তান</div>সন্তান নীরবে নিজের কাজ সারে — মা-কম্পোনেন্ট কিছুই জানে না; কাজের হিসাব হারায়।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ ডাক-শৃঙ্খলা</div>টাইপ-করা ইভেন্ট-চুক্তি (defineEmits) — কে কী ডাকে, পেলোড কী, ঘোষণায় লেখা।</div></div>
  <div class="code-block">emit-শাস্ত্র — LP-নমুনাসহ (DeleteConfirmationModal.vue, প্রকৃত)

① ঘোষণা — টাইপড-চুক্তি (&lt;script setup&gt;):
  const emit = defineEmits&lt;{
    (e: 'close'): void
    (e: 'confirm'): void
    (e: 'update:deleteType', v: 'soft' | 'hard'): void
  }&gt;()
  // LedgerPilot: DeleteConfirmationModal.vue — ঠিক এই ছাঁচে
  · অ্যারে-রূপ (অ-টাইপ): emits: ['close','confirm']
  · রানটাইম-ভ্যালিডেশন (Options):
    emits: {
      submit: (payload: Form) =&gt; !!payload.email
    }

② উড়ানো — পে-লোডসহ:
  emit('close')
  emit('update:deleteType', 'soft')
  // টেমপ্লেটে সরাসরি:
  &lt;button @click="$emit('close')"&gt;✕&lt;/button&gt;
  · $event প্রয়োজনে: @change="$emit('update:deleteType',
    ($event.target as HTMLInputElement).value)"

③ পিতার খাঁচায় ঘণ্টি:
  &lt;DeleteConfirmationModal
    :show="show" :title="title"
    :delete-type="deleteType"
    @close="show = false"
    @confirm="onDelete"
    @update:deleteType="deleteType = $event" /&gt;
  · kebab/camel সেতু: update:modelValue ↔
    @update:model-value (টেমপ্লেটে kebab-ই শোনো)

④ বড় দুই সাবধান:
  · নাম-চুক্তি ছাড়া emit — নীরব-হাওয়ায়-হারানো
    খবর; টাইপড defineEmits = কম্পাইলার-পাহারা
  · update:নাম প্রথা — v-model-এর আত্মীয়
    (দরজা ৭): পিতা :নাম-বাঁধে + @update:নাম শোনে

⑤ attrs-ফলথ্রু (অদৃশ্য-পথ):
  · class/style/ইভেন্ট-শ্রোতা ঘোষণার-বাইরে হলে
    শিকড়ে নেমে যায় (inheritAttrs: false দিয়ে বন্ধ;
    v-bind="$attrs" দিয়ে ইচ্ছার-জায়গায় বসানো)
  · বহু-শিকড় উপাদানে স্বয়ংক্রিয়-নামে যায় না —
    স্পষ্ট v-bind="$attrs" লাগে (নইলে Vue-সতর্কতা)

⑥ LP-শৈলী-নোট:
  · নাম — ক্রিয়া-ভিত্তিক, অতীত নয় (close/confirm/
    apply), পে-লোড প্রয়োজনে অবজেক্ট (এক-তা,
    পরে ক্ষেত্র বাড়লে ভাঙে না)
  · ঘোষণা → ব্যবহার → পিতার-শ্রবণ তিন পাশ
    মিললে তবেই চুক্তি পূর্ণ — টেস্টে emitted()
    দিয়ে পিন করো (দরজা ২৩)</div>
  <ul class="checklist"><li>ConfirmDialog বানাও — confirm/cancel ইভেন্ট, পেলোড-সহ; মা-পর্দায় শুনে টোস্ট দেখাও</li><li>emit-ঘোষণা ছাড়া বনাম সহ — Vue-ডেভটুলসে ইভেন্ট-ট্রেস তুলনা করো</li><li>লেজারপাইলট-মডাল থেকে একটা ইভেন্ট-চুক্তি খাতায় লেখো</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 40 (Codebuilder’s Guild — ১০ দরজা) ইভেন্ট-চালিত ডিজাইন আর ঢিলা-সংযোগনের নিয়ম শেখায় — emitted-ইভেন্টের কারিগরি ভিত্তি।</div></div>
  <div class="verse">রিসালাত — বার্তবাহনের সততা: "বার্তবাহকের দায় শুধু পৌঁছে দেওয়া" (৫:৯২-এর সার) — সিদ্ধান্ত প্রেরকের, বহন বার্তবাহকের। সালমার পাখি সেই রিসালাতের প্লাবক-রূপ: নাম-রিং ও ওজন-চিরহার বাঁধা পাখি ঠিক খাঁচায় পৌঁছে দেয়, নিজে থেকে সিদ্ধান্ত নেয় না। যে কারখানায় পাখিরা নাম-ছাড়া উড়ে, সেখানে খবর আর গুজবের পার্থক্য থাকে না — আর পার্থক্যহীন খবরই সবচেয়ে বড় গুজব।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>পাখি-ফাঁদ:</strong> (১) নাম-বানান-অমিল (<code>update:modelValue</code> বনাম <code>@update:model-value</code>-এর মতো সূক্ষ্ম কেস) — টাইপড defineEmits না থাকলে ধরার উপায় নেই। (২) পে-লোডে বহু-আর্গুমেন্ট (<code>emit('x', a, b, c)</code>) — শ্রোতার সাইনবোর্ড দীর্ঘ হয়; এক-অবজেক্ট পাঠাও, পরে ক্ষেত্র বাড়লে ভাঙে না। (৩) বহু-শিকড় উপাদানে <code>$attrs</code> না-বাঁধা — Vue সতর্ক করে, শ্রোতা নীরবে হারায়।</div></div>
  <div class="secret-box">🕊️ পাখি ঘোষণা করে ছাড়ো (defineEmits), নামে-নামে ঘণ্টি বাঁধো (@close), সিদ্ধান্ত উজানে রেখো — বার্তবাহক বহন করে, শাসন করে না। / Declare the bird, bell the exact name, keep decisions upstream.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ৫-এর পাখি-বাসা: টাইপড ইভেন্ট-চুক্তি দিয়ে ConfirmDialog বানাও — ঘোষণা → উড়ানো → শ্রবণ, তিন পাখাই নমুনায় বাঁধা। / Door 5's bird-nest: build a ConfirmDialog on a typed event contract — declaration, flight, and listening all wired.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/ConfirmDialog.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
// ① ঘোষণা — নাম-রিং + ওজন-চিরহার (টাইপড-চুক্তি)
const props = defineProps&lt;{
  title: string
  danger?: boolean
}&gt;()

const emit = defineEmits&lt;{
  (e: 'confirm', payload: { source: string; at: number }): void
  (e: 'cancel'): void
}&gt;()
// অ-টাইপ বিকল্প: const emit = defineEmits(['confirm', 'cancel'])

// ② উড়ানো — পে-লোড এক-অবজেক্ট (পরে ক্ষেত্র বাড়লে ভাঙে না)
function onConfirm() {
  emit('confirm', { source: 'dialog', at: Date.now() })
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="mask" @click.self="emit('cancel')"&gt;
    &lt;div class="box" :class="{ danger }"&gt;
      &lt;h3&gt;{{ title }}&lt;/h3&gt;
      &lt;button @click="onConfirm"&gt;নিশ্চিত করো&lt;/button&gt;
      &lt;button @click="emit('cancel')"&gt;বাতিল&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.mask { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: grid; place-items: center; }
.box { background: #fff; color: #111; padding: 1.2rem 1.6rem; border-radius: 12px; text-align: center; }
.box.danger { outline: 2px solid #ef4444; }
button { margin: .25rem; padding: .4rem 1rem; border-radius: 8px; cursor: pointer; }
&lt;/style&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/CageParent.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import ConfirmDialog from './ConfirmDialog.vue'

const show = ref(false)
const log = ref&lt;string[]&gt;([])

// ③ শ্রবণ — ঘণ্টি ঠিক-নামে; সিদ্ধান্ত এখানেই
function onConfirm(p: { source: string; at: number }) {
  log.value.push(\`নিশ্চিত (\${p.source}, \${new Date(p.at).toLocaleTimeString()})\`)
  show.value = false
}
function onCancel() {
  log.value.push('বাতিল')
  show.value = false
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="show = true"&gt;মুছে ফেলো? — খাঁচা খোলো&lt;/button&gt;
    &lt;ConfirmDialog v-if="show" title="নিশ্চিত?" danger @confirm="onConfirm" @cancel="onCancel" /&gt;
    &lt;ul&gt;&lt;li v-for="(l, i) in log" :key="i"&gt;{{ l }}&lt;/li&gt;&lt;/ul&gt;
    &lt;!-- :key="i" কেবল-এইখানে-চলে: লগ append-only — মাঝ-থেকে-মুছলে
         নাম-উল্টানো-ঝুঁকি; মুছুন-তালিকায় সর্বদা আসল-id (দরজা ২২-শিক্ষা) --&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import CageParent from './CageParent.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;CageParent /&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) ConfirmDialog-এ ঘোষণা-বাদ দিয়ে শুধু emit('confirm') করে দেখো — পিতার @confirm-বেল বেজে ওঠে কি না (ফলথ্রু-পার্থক্য ডেভটুলসে)। (২) পে-লোড বদলে দুই-আর্গুমেন্ট পাঠাও — শ্রোতার সাইন কেমন জটিল হয়। (৩) mask-এ @click.self — cancel-পাখি ছাড়ে শুধু বাইরে-ক্লিকে। / Tests: try emitting without declaration; try two-argument payloads; note @click.self on the mask.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">Return-Bird — Declared Event Contract</div>
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowB5" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker><marker id="arrowP5" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
      <rect x="15" y="18" width="200" height="80" rx="11" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="115" y="40" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🏭 পিতার খাঁচা</text>
      <text x="115" y="56" text-anchor="middle" fill="#94a3b8" font-size="7">&lt;Modal @close="…" @confirm="…" /&gt;</text>
      <text x="115" y="70" text-anchor="middle" fill="#64748b" font-size="7">ঘণ্টি = ঠিক-নামের শ্রোতা</text>
      <text x="115" y="86" text-anchor="middle" fill="#64748b" font-size="7">সিদ্ধান্ত এখানেই হয় (state-বদল)</text>
      <rect x="345" y="18" width="200" height="80" rx="11" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="445" y="40" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🕊️ পুত্রের বাসা</text>
      <text x="445" y="56" text-anchor="middle" fill="#94a3b8" font-size="7">defineEmits&lt;{(e:'close'):void …}&gt;()</text>
      <text x="445" y="70" text-anchor="middle" fill="#64748b" font-size="7">নাম-রিং + ওজন-চিরহার (টাইপ)</text>
      <text x="445" y="86" text-anchor="middle" fill="#64748b" font-size="7">emit('close') — কেবল খবর</text>
      <path d="M225,45 C265,32 305,32 340,44" fill="none" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#arrowP5)"/>
      <text x="283" y="28" text-anchor="middle" fill="#a5b4fc" font-size="7.5">props (মান নামে)</text>
      <path d="M340,72 C300,86 260,86 228,74" fill="none" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#arrowB5)"/>
      <text x="283" y="99" text-anchor="middle" fill="#fbbf24" font-size="7.5" font-weight="600">emit (খবর ওঠে) — পে-লোডসহ</text>
      <rect x="15" y="118" width="530" height="64" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="280" y="139" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">চুক্তির তিন পাখা</text>
      <text x="280" y="155" text-anchor="middle" fill="#94a3b8" font-size="7.5">① defineEmits-ঘোষণা (নাম+ধরন) ② emit('নাম', পে-লোড) ③ পিতার @নাম-শ্রবণ — kebab/camel সেতু</text>
      <text x="280" y="171" text-anchor="middle" fill="#64748b" font-size="7">update:নাম প্রথা → v-model-এর আত্মীয় (দরজা ৭) · emitted() দিয়ে টেস্ট-পিন (দরজা ২৩)</text>
      <rect x="15" y="196" width="530" height="52" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="215" text-anchor="middle" fill="#cbd5e1" font-size="8" font-weight="600">অদৃশ্য-পথ: attrs-ফলথ্রু — ঘোষণাহীন গুণ/শ্রোতা শিকড়ে নামে</text>
      <text x="280" y="230" text-anchor="middle" fill="#94a3b8" font-size="7.5">এক-শিকড়ে জাদু · বহু-শিকড়ে স্পষ্ট v-bind="$attrs" লাগে · inheritAttrs:false দিয়ে নিয়ন্ত্রণ</text>
      <text x="280" y="268" text-anchor="middle" fill="#64748b" font-size="8.5">বার্তবাহকের দায় পৌঁছে দেওয়া — নাম-বাঁধা পাখি ছাড়ো, সিদ্ধান্ত উজানে রেখো</text>
    </svg>
    <div class="diag-cap">ঘোষণা → উড়ানো → শ্রবণ: তিন পাখা মিললে চুক্তি পূর্ণ; নামহীন পাখি হাওয়ায় হারায়, দোষ কারও হয় না।</div>
  </div>`,
  senior: {
    title: "Emit Card",
    body: `<p><strong>ঘোষণা</strong>: <code>defineEmits&lt;{(e:'নাম', v: ধরন): void}&gt;()</code> (টাইপড; অ্যারে/ভ্যালিডেটর-রূপও)। <strong>উড়ানো</strong>: <code>emit('নাম', পে-লোড)</code>; টেমপ্লেটে <code>$emit</code>। <strong>শ্রবণ</strong>: <code>@নাম</code> (kebab/camel-সেতু)। <strong>প্রথা</strong>: <code>update:নাম</code> → v-model-আত্মীয়; পে-লোড এক-অবজেক্ট। <strong>ফলথ্রু</strong>: inheritAttrs:false + <code>v-bind="$attrs"</code> (বহু-শিকড়ে বাধ্যতামূলক)। <strong>টেস্ট</strong>: <code>wrapper.emitted('নাম')</code>। <strong>LP-নমুনা</strong>: DeleteConfirmationModal (close/confirm/update:deleteType)। <strong>ফাঁদ</strong>: ইভেন্টের নামে camelCase/kebab-case মেশানো — টেমপ্লেটে kebab, ঘোষণায় camel; আর পেলোড-ছাড়া ইভেন্ট যখন ডেটা লাগে — আগে চুক্তি লেখো।</p>`
  }
});

doors.push({
  num: 6,
  icon: "🔌",
  color: "#10b981",
  name: "দুই-মুখী বাঁধনের সেতু",
  subtitle: "Two-Way Bridge — v-model Complete",
  tech: "v-model on inputs, checkboxes/radios/selects, modifiers (.lazy/.number/.trim), component v-model, multiple models, defineModel",
  spirit: "মীজান — mīzān (the balance: two directions, one scale)",
  secret: "v-model = :মান + @update:মান-এর চুক্তি-সংকেত; ইনপুটে প্রকৃত-মান বাঁধে, কম্পোনেন্টে defineModel দুই-মুখ খুলে দেয়।",
  recall: {
    q: "কম্পোনেন্টে v-model আসলে কী দুইয়ে ভেঙে যায়?",
    qen: "What does v-model compile to on a component?",
    a: ":modelValue + @update:modelValue — মান নামে, খবর ওঠে; Vue 3.4+ defineModel() রেফ-এই দুই-মুখ একসাথে দেয়, নাম-আর্গুমেন্টে (v-model:title) বহু-মডেল চলে।",
    aen: "It becomes :modelValue + @update:modelValue; defineModel() (3.4+) exposes both as one ref, and named args (v-model:title) allow multiple models."
  },
  story: `<p class="scene-setting">ছয় নম্বর ঘরে একটা অদ্ভুত সেতু — <strong>দুই-মুখী সেতু</strong>, এক প্রান্ত উজানে এক প্রান্ত ভাটিতে, মাঝখানে একটাই তালা-ঘড়ি। ঘড়ির
  রক্ষক কারিগর <strong>নজরুল</strong> — তাঁর চোখে দুটো ভিন্ন রঙের কাচ (নীল ওপরে তোলার, সবুজ নামার)। তিনি বলেন — <strong>"এই সেতুতে দুই স্রোত আছে ঠিকই —
  মান নামে (props), খবর ওঠে (emit) — কিন্তু তালা এক: একই নামের অবস্থা। দুই পাশ নিজের ঘড়ি বানালে সেতু ভাঙে; এক ঘড়ি দুই পাশে দেখালে মীজান।"</strong>
  পাশের টেবিলে তিনি তিন রকম ফানুস সাজিয়ে রেখেছেন — টেক্সট-ফানুস (টাইপ করলে জ্বলে), চেকবক্স-ফানুস (সত্য/মিথ্যা টগল), বাছাই-ফানুস
  (তালিকা থেকে এক/বহু) — প্রত্যেকের স্রোত-নিয়ম ভিন্ন, সেতু এক। শেষে তিনি Vue 3.4-এর নতুন যন্ত্র দেখান — <code>defineModel()</code>: এক লাইনে
  দুই-মুখ খোলা, props-emit-জোড়া নিজে বাঁধা — "পুরনো কারিগরের হাতে-গাঁথা সেতু, নতুন যন্ত্রে এক-চাপে।"</p>
  <p class="scene-setting en">Room six holds a strange bridge — <strong>a two-way bridge</strong>, one end upstream, one
  downstream, with a single lock-clock in the middle. Its keeper, artisan <strong>Nazrul</strong> — two differently
  colored lenses (blue for upward, green for downward). He says — <strong>"two currents indeed flow on this bridge —
  value comes down (props), news goes up (emit) — but one lock: a single named state. If each side builds its own
  clock, the bridge breaks; one clock shown on both sides is the balance."</strong> On the table stand three lanterns —
  a text-lantern (lights as you type), a checkbox-lantern (truth-toggle), a select-lantern (one/many from a list) —
  each with different current-rules, one bridge. Finally he shows the Vue 3.4 machine — <code>defineModel()</code>:
  both directions opened in one line, the props-emit pair tied automatically — "the old hand-built bridge, now
  one-press."</p>
  <div class="dialogue">('"দড়ির দুই মাথা একই হাতে রেখো না," সালমা বললেন, সেতুর মাঝখানে দড়ি টানটান করে দেখিয়ে, "এক মাথা ধরো, আরেক মাথা ওপারের হাতে দাও — টান দিলেই দুই পাড় একসাথে নড়ে। দুই হাতে দুই মাথা টানলে দড়ি কাটা পড়ে, আর স্রোত মাঝখানে সব নিয়ে যায়।"', 'দড়ির কাঁপন তোমার হাত ঘিরে ওপারে পৌঁছায় — দুই-মুখীর ভারসাম্য এবার মাংসে টের হয়।')</div><div class="dialogue en">"Hold one end of the rope, give the other to the far hand — pull, and both banks move together. Pull both ends yourself and the rope snaps."</div>
  <div class="dialogue">মীজানের কারিগর সেতুর দড়ি ধরে জিজ্ঞেস করলেন, "বলো — ফর্মে হর্ন লিখলে সংখ্যা হয় কখন?" তুমি হতভম্ব, "হর্ন তো হর্নই!" কারিগর বললেন, "ইনপুট-বাক্স সব স্ট্রিং-পাত্র — v-model একাই সেটা ভুলে যায়। .number-মডিফায়ার দাও, তবেই ৭ স্ট্রিং-থেকে সংখ্যা হয়; নাহলে বছরের-বয়সে স্ট্রিং-গণিত বসে — ১ আর ২ জোড়া দিলে ফল হয় ১২। আর বড়-ফর্মে .lazy দাও: প্রতি-অক্ষরে নয়, ফোকাস-হারালে একবার — যাচাই-পাহারা দিনে হাজারবার না ছুটে। দুই-মুখী সেতু সস্তা, কিন্তু শর্ত জানা থাকলে।"</div>
<div class="dialogue en">The bridge-keeper held the rope: "Tell me — when does typing in a form become a number?" You blinked: "Typing is typing!" He said: "Input boxes are string-vessels — v-model alone forgets. Give the .number modifier, or seven stays a string; string-math follows — joining one and two yields twelve. And on heavy forms use .lazy: not every keystroke, once on blur — your validation guards need not sprint a thousand times a day. The two-way bridge is cheap — if you know the terms."</div>
  <div class="compare"><div class="cmp-card cmp-bad"><div class="cmp-label">❌ হাতে-বাঁধা</div>:value + @input নিজে-নিজে জোড়া — প্রতি ফিল্ডে নতুন চাকা, মডিফায়ার-সুবিধা শূন্য।</div><div class="cmp-card cmp-good"><div class="cmp-label">✅ দুই-মুখী সেতু</div>v-model — এক-লাইনে চুক্তি; .number/.lazy/.trim মডিফায়ার বিনামূল্যে।</div></div>
  <div class="code-block">v-model-শাস্ত্র — সম্পূর্ণ (Vue 3.5, LP-প্রমাণসহ)

① ইনপুটে — প্রকৃত-মান বাঁধন:
  &lt;input v-model="firstName" /&gt;     // :value + @input
  · টেক্সট-টেক্সটরিয়া: value-ইভেন্ট শোনে
  · checkbox: checked (সত্য/মিথ্যা) বা
    অ্যারে-বাঁধন (একাধিক বাছাই):
    const picked = ref&lt;string[]&gt;([])
    &lt;input type="checkbox" v-model="picked" value="a" /&gt;
  · radio: value-স্ট্রিং বাছাই
  · select: এক-মান; multiple-এ অ্যারে
  ⚠ মডিফায়ার-ছাড়া সবসময় স্ট্রিং — .number মনে রেখো

② মডিফায়ার — স্রোতের বিধি:
  v-model.lazy="q"     // input নয়, change-এ
                       // (LP: অনুসন্ধান-ডিবাউন্স-আত্মীয়)
  v-model.number="age" // স্ট্রিং→সংখ্যা স্বয়ংক্রিয়
  v-model.trim="email" // প্রান্ত-সাদা-স্থান ছাঁটে

③ কম্পোনেন্টে — চুক্তি-সংকেত:
  &lt;Comp v-model="x" /&gt;  প্রকৃত অর্থ:
    :modelValue="x" + @update:modelValue="x = $event"
  নাম-আর্গুমেন্টে বহু-মডেল:
    &lt;BookCard v-model:title="t" v-model:page="p" /&gt;

④ defineModel (Vue 3.4+, প্রস্তাবিত-পথ):
  // পুত্রে:
  const title = defineModel&lt;string&gt;('title')
  const page  = defineModel&lt;number&gt;('page', { default: 1 })
  &lt;input v-model="title" /&gt;   // সরাসরি-ই!
  · রিড: props থেকে; রাইট: স্থানীয় + emit-ও
    (দুই-মুখ এক-রেফে); getParent-চেইন নয়,
    কম্পাইলার-জোড়া
  · পুরনো-পথ (3.3-): props + emit('update:x') —
    এখনো চলে, নতুন কোডে defineModel

⑤ ফর্ম-উপাদানের আসল-চেহারা (LP-প্রমাণ):
  // ProfileView.vue — প্রকৃত লাইন:
  &lt;input v-model="firstName" … /&gt;
  &lt;input v-model="lastName"  … /&gt;
  &lt;input v-model="email"     … /&gt;
  &lt;PasswordField v-model="currentPassword" /&gt;
  // PasswordField-ভেতরে আবার ইনপুটে v-model —
  // সেতুর ওপর সেতু, সব একই ঘড়ির দিকে

⑥ সতর্কতা:
  · বড়-ফর্মে প্রতিটি কী-স্ট্রোকে পিতা-রিরেন্ডার —
    পারফরম্যান্স প্রয়োজন হলে lazy, অথবা
    পুত্রে স্থানীয়-মডেল + সাবমিটে emit (দরজা ১৬)
  · v-model অবজেক্ট-প্রপে: ভেতরের ক্ষেত্র-লেখা
    দুই-বহির-দোষ — অবস্থা শালো-কপি করে খোলো</div>
  <ul class="checklist"><li>লগইন-ফর্ম বানাও: টেক্সট + চেকবক্স + সিলেক্ট — তিন v-model-সেতু</li><li>.number-মডিফায়ার ছাড়া/সহ নম্বর-ইনপুট — typeof দিয়ে পার্থক্য প্রমাণ করো</li><li>কম্পোনেন্টে v-model (modelValue + update:modelValue) — নিজের PasswordField বানাও</li></ul>
  <div class="callout tip"><span class="co-icon">📚</span><div><strong>আরও পড়া:</strong> Book 6 (Arena of Trials — ৮ দরজা) ফর্ম-ভেলিডেশনের সাক্ষাৎ-প্রশ্ন শেখায়, আর Book 47 (Shields of Craft) টেস্ট-দৃষ্টিতে v-model-এর দুই-মুখী চুক্তি।</div></div>
  <div class="verse">মীজান — তুলাদণ্ড: "আসমান তিনি সমুচ্চ করেছেন এবং স্থাপন করেছেন মীজান" (৫৫:৭) — দুই পাল্লা, এক দাঁড়ি। নজরুলের সেতু সেই মীজানের কারিগরি রূপ: মান নামে এক পাল্লায়, খবর ওঠে অন্য পাল্লায়, কিন্তু সত্য এক-ই ঘড়িতে। দুই পাশে দুই ঘড়ি বাঁধলে তুলাদণ্ড নয় — দুই রাজত্ব; আর দুই রাজত্বে কাপড়ের হিসাব কখনো মেলে না, কারণ প্রত্যেকে নিজের সুতো নিজেই গোনে।</div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সেতু-ফাঁদ:</strong> (১) <code>.number</code>-বিস্মৃত — বয়স/পরিমাণ ফর্মে স্ট্রিং হিসেবে জমে, পরে গণনায় জাদু-ভুল ("২"+"১"="২১")। (২) কম্পোনেন্টে <code>value</code>-প্রপ নিজে বাঁধে ফেলা — v-model-এর প্রকৃত নাম <code>modelValue</code>; ভুল নামে সেতু নীরবে খোলা থাকে। (৩) অবজেক্ট-মডেলে ভেতরের ক্ষেত্র সরাসরি লেখা — দুই-বহির-দোষ ফিরে আসে; অনুলিপি-সম্পাদনা-প্রকাশ প্যাটার্ন নাও (দরজা ১৬)।</div></div>
  <div class="secret-box">🔌 v-model = এক-নামের দুই-স্রোত: ইনপুটে প্রকৃত-মান, কম্পোনেন্টে defineModel; .lazy/.number/.trim স্রোতের বিধি। / One named state, two currents; bind true values, defineModel bridges components.</div>
  <div class="studio">
    <div class="studio-title">🧵 কারিগরের কার্যশালা — Try in Your IDE</div>
    <div class="studio-note">দরজা ৬-এর দুই-মুখী সেতু: তিন ফানুসের ফর্ম + নিজের PasswordField-কম্পোনেন্ট — defineModel-এ দুই-মুখ এক-রেফে। / Door 6's two-way bridge: a three-lantern form + your own PasswordField component on defineModel.</div>
    <div class="studio-file"><div class="studio-file-head"><span>src/PasswordField.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
// defineModel (Vue 3.4+) — এক-লাইনে দুই-মুখ খোলা:
// পড়া: পিতার মান; লেখা: আপডেট-পাখি নিজেই ওড়ে
const password = defineModel&lt;string&gt;()
const show = defineModel&lt;boolean&gt;('show', { default: false })
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;input
      :type="show ? 'text' : 'password'"
      v-model.trim="password"
      placeholder="গোপন সুতো"
    &gt;
    &lt;label&gt;
      &lt;input type="checkbox" v-model="show"&gt; দেখাও
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/BridgeForm.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import PasswordField from './PasswordField.vue'

const firstName = ref('')
const age = ref(18)
const role = ref('weaver')
const roles = ['weaver', 'dyer', 'merchant']
const password = ref('')
const showPwd = ref(false)

function proveTypes() {
  console.log('age ধরন:', typeof age.value, '=', age.value)
  console.log('firstName ছাঁটা:', JSON.stringify(firstName.value))
}
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit.prevent="proveTypes"&gt;
    &lt;!-- টেক্সট-ফানুস: value+input --&gt;
    &lt;label&gt;নাম: &lt;input v-model.trim="firstName" placeholder="  রফিক  "&gt;&lt;/label&gt;

    &lt;!-- সংখ্যা-ফানুস: .number ছাড়া স্ট্রিং জমে! --&gt;
    &lt;label&gt;বয়স: &lt;input type="number" v-model.number="age"&gt;&lt;/label&gt;

    &lt;!-- বাছাই-ফানুস: select --&gt;
    &lt;label&gt;ভূমিকা:
      &lt;select v-model="role"&gt;
        &lt;option v-for="r in roles" :key="r" :value="r"&gt;{{ r }}&lt;/option&gt;
      &lt;/select&gt;
    &lt;/label&gt;

    &lt;!-- কম্পোনেন্ট-সেতু: বহু-মডেল (v-model + v-model:show) --&gt;
    &lt;PasswordField v-model="password" v-model:show="showPwd" /&gt;

    &lt;button type="submit"&gt;ধরন-প্রমাণ (কনসোল দেখো)&lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-file"><div class="studio-file-head"><span>src/App.vue</span><button class="copy-btn" onclick="copyStudio(this)">📋 কপি</button></div><pre><code>&lt;script setup lang="ts"&gt;
import BridgeForm from './BridgeForm.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;BridgeForm /&gt;
&lt;/template&gt;</code></pre></div>
    <div class="studio-note">পরীক্ষা: (১) .number-টা সরিয়ে দাও, বয়স টাইপ করে সাবমিট — কনসোলে typeof স্ট্রিং দেখাবে; ফিরিয়ে আনো, সংখ্যা। (২) নামের আগে-পরে স্পেস দিয়ে টাইপ করো — .trim ছেঁটে দেবে। (৩) PasswordField-এর "দেখাও" চেকবক্স — v-model:show দ্বিতীয় সেতু। Context7-বোনাস: defineModel-এর ডিস্ট্রাকচার-রূপ const [model, modifiers] = defineModel() দিয়ে নিজের মডিফায়ার (যেমন .capitalize) পড়া যায়। / Tests: remove .number and check typeof; pad the name with spaces; toggle the show checkbox. Bonus: destructure defineModel() to read custom modifiers.</div>
  </div>
  <div class="diagram">
    <div class="diag-title">Two-Way Bridge — One Lock, Two Currents</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowD6" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker><marker id="arrowU6" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker></defs>
      <rect x="15" y="14" width="170" height="88" rx="11" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="100" y="36" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🏭 পিতা-প্রান্ত</text>
      <text x="100" y="52" text-anchor="middle" fill="#94a3b8" font-size="7">const x = ref('…')</text>
      <text x="100" y="66" text-anchor="middle" fill="#64748b" font-size="7">&lt;Comp v-model="x" /&gt;</text>
      <text x="100" y="82" text-anchor="middle" fill="#64748b" font-size="7">v-model:title + v-model:page — বহু</text>
      <rect x="375" y="14" width="170" height="88" rx="11" fill="rgba(66,184,131,0.10)" stroke="#6366f1" stroke-width="1.5"/>
      <text x="460" y="36" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🪞 পুত্র-প্রান্ত</text>
      <text x="460" y="52" text-anchor="middle" fill="#94a3b8" font-size="7">defineModel&lt;string&gt;('title')</text>
      <text x="460" y="66" text-anchor="middle" fill="#64748b" font-size="7">&lt;input v-model="title" /&gt;</text>
      <text x="460" y="82" text-anchor="middle" fill="#64748b" font-size="7">default-অপশনসহ</text>
      <rect x="215" y="26" width="130" height="64" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="280" y="47" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">⏱️ এক তালা-ঘড়ি</text>
      <text x="280" y="62" text-anchor="middle" fill="#94a3b8" font-size="7">:modelValue ↓</text>
      <text x="280" y="76" text-anchor="middle" fill="#94a3b8" font-size="7">@update:modelValue ↑</text>
      <line x1="185" y1="50" x2="213" y2="50" stroke="#a5b4fc" stroke-width="1.8" marker-end="url(#arrowD6)"/>
      <line x1="345" y1="66" x2="217" y2="66" stroke="#fbbf24" stroke-width="1.6" stroke-dasharray="5 3" marker-end="url(#arrowU6)"/>
      <rect x="15" y="122" width="530" height="66" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.4"/>
      <text x="280" y="143" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">ফানুস-তিনটির স্রোত-নিয়ম (ইনপুটে)</text>
      <text x="280" y="159" text-anchor="middle" fill="#94a3b8" font-size="7.5">টেক্সট/টেক্সটরিয়া: value+input · checkbox: checked (বা অ্যারে-বহুবাছাই) · radio: value · select: এক/অ্যারে(multiple)</text>
      <text x="280" y="176" text-anchor="middle" fill="#64748b" font-size="7">মডিফায়ার: .lazy (change-এ) · .number (সংখ্যা) · .trim (ছাঁটা) — স্রোতের গতি-বিধি</text>
      <rect x="15" y="204" width="530" height="58" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="224" text-anchor="middle" fill="#cbd5e1" font-size="8" font-weight="600">দুই প্রজন্মের সেতু-বাঁধাই</text>
      <text x="280" y="239" text-anchor="middle" fill="#94a3b8" font-size="7.5">পুরনো (3.3-): props + emit('update:x') হাতে-জোড়া · নতুন (3.4+): defineModel — এক-লাইনে দুই-মুখ, কম্পাইলার-জোড়া</text>
      <text x="280" y="254" text-anchor="middle" fill="#64748b" font-size="7">⚠ প্রতি-কীস্ট্রোকে পিতা-রিরেন্ডার — বড়-ফর্মে lazy বা স্থানীয়-মডেল+সাবমিট-emit (দরজা ১৬)</text>
      <text x="280" y="288" text-anchor="middle" fill="#64748b" font-size="8.5">দুই স্রোত, এক ঘড়ি — এক নামের অবস্থাই তালা; দুই ঘড়ি মানে ভাঙা মীজান</text>
    </svg>
    <div class="diag-cap">v-model মুখস্থ-বিধি নয়, চুক্তির সংকেত: মান নামে, খবর ওঠে, নাম এক — ইনপুটেও, কম্পোনেন্টেও, defineModel-এও।</div>
  </div>`,
  senior: {
    title: "v-model Card",
    body: `<p><strong>ইনপুট</strong>: v-model = <code>:value + @input</code>; checkbox (checked/অ্যারে), radio, select (এক/multiple-অ্যারে)। <strong>মডিফায়ার</strong>: .lazy/.number/.trim। <strong>কম্পোনেন্ট</strong>: <code>:modelValue + @update:modelValue</code>; বহু-মডেল <code>v-model:নাম</code>। <strong>3.4+</strong>: <code>defineModel&lt;T&gt;('নাম', {default})</code> — এক-রেফে দুই-মুখ। <strong>সতর্ক</strong>: প্রতি-কীস্ট্রোক পিতা-রিরেন্ডার (বড়-ফর্মে lazy/স্থানীয়+সাবমিট-emit); অবজেক্ট-মডেলে ভেতর-লেখা নিষেধ। <strong>LP-প্রমাণ</strong>: ProfileView (firstName/email/currentPassword — সেতুর-ওপর-সেতু PasswordField)। <strong>ফাঁদ</strong>: <code>:value</code>+<code>@input</code> হাতে-লিখে v-model-এর ছাঁচ ভাঙা — নিজের হাতে যা বানাবে তাতে .number/.lazy সুবিধা হারাবে; আর বস্তু-ভিত্তিক চেকবক্সে মান-বাঁধাই ভুলে গেলে টগল-ট্রুথি লিক।</p>`
  }
});
