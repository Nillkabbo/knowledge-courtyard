
doors.push({
  num: 17,
  icon: "🖋️",
  color: "#f59e0b",
  name: "কালির আগে চক",
  subtitle: "Chalk Before Ink — The Preview-Confirm Pattern",
  tech: "dry-run-first two-phase flow (preview → confirm), phase machine, confirm-only-from-preview guard, thin adapters",
  spirit: "ইস্তিখারাহ — istikhāra (deliberation before commitment)",
  secret: "বিপজ্জনক-লেখা দুই-পর্বে: চকে-দেখাও (dryRun=true), পর্যালোচনার-পর-ই-কালি; confirm শুধু preview-অবস্থা থেকে — কখনো অন্ধভাবে নয়।",
  recall: {
    q: "confirm-কে শুধু preview-অবস্থা থেকে ঢুকতে দেওয়ার নিয়মটা কী রক্ষা করে?",
    qen: "What does the confirm-only-from-preview guard protect?",
    a: "অন্ধ-লেখা: ব্যবহারকারী যা দেখেনি তা কমিট-হওয়া রোধ; ফেজ-মেশিন idle→previewing→preview→committing→done|error — 'preview'-ছাড়া যে-অবস্থা থেকেই confirm ডাকা হোক no-op।",
    aen: "It prevents blind writes: the phase machine only admits confirm from the reviewed 'preview' state; every other state no-ops."
  },
  story: `<p class="scene-setting">সতেরো নম্বর ঘর একটা <strong>অনুলিপি-দপ্তর</strong> — আসল-কালির-দামি-দলিল লেখার আগে চক-খড়িতে পুরো-নকশা আঁকার শাস্ত্র এখানকার।
  দপ্তরি <strong>ওস্তাদ নাজির</strong> — তাঁর ডান-হাতের কনুইতে সবসময় সাদা-চকের-ধূলি। তিনি তোমাকে দুই-পাতার বই খুলে দেখান: প্রথম-পাতায় <strong>চক-নকশা</strong>
  (preview — কী-কী-লেখা-হবে-সারি-ধরে), দ্বিতীয়-পাতায় <strong>কালি-দলিল</strong> (confirm — আসল-লেখা)। <strong>"চক মুছে-ফেলা-যায়, কালি নয়,"</strong> — তিনি
  বলেন — <strong>"তাই নিয়ম: প্রতিটি দামি-লেখা দুইবার-ডাকা-হয়। প্রথম-ডাকে (dryRun=true) পর্দার-খসড়া, দ্বিতীয়-ডাকে (false) কালি — আর দ্বিতীয়-ডাক
  কেবল তখনই যখন প্রথম-পাতা চোখ-বুলিয়েছে।"</strong> তারপর তিনি দেখান তাঁর <strong>ফেজ-ঘড়ি</strong>: idle → previewing → preview → committing → done | error —
  ছয়-কাঁটার ঘড়ি, যার কালি-কাঁটা শুধু preview-ঘর থেকেই ছাড়ে। এক শাগিরদ আবেগে সরাসরি কালি-ডেকেছিল — ঘড়ি নীরবে no-op করল, দপ্তর রক্ষা পেল। শেষে
  তিনি তাঁর তিন-শাগিরদের-পাতা দেখান: চালান-ঠেলা, ক্রেডিট-নোট, পেমেন্ট — তিনেই একই-দপ্তরি-ঘড়ি, শুধু প্রত্যেকের fetch-সুতো আলাদা; এই-ই
  পাতলা-অ্যাডাপ্টারের-শিল্প।</p>
  <p class="scene-setting en">Room seventeen is a <strong>transcription-office</strong> — where costly real-ink
  documents begin as full chalk drafts. Registrar <strong>Ustad Nazir</strong> — white chalk-dust always on his right
  elbow. He opens a two-page book: page one the <strong>chalk-draft</strong> (preview — the per-row plan of what will
  be written), page two the <strong>ink-document</strong> (confirm — the real write). <strong>"Chalk erases; ink
  doesn't,"</strong> — he says — <strong>"so the rule: every costly write is called twice. First call (dryRun=true)
  brings the screen-draft; second (false) the ink — and the second only after the first page has been
  read."</strong> Then his <strong>phase-clock</strong>: idle → previewing → preview → committing → done | error —
  six hands, the ink-hand releasable only from the preview-room. An impassioned apprentice once called ink directly —
  the clock silently no-opped; the office survived. Finally, his three apprentices' pages: invoice-push,
  credit-note, payment — all three run the same registrar-clock, only each fetch-thread differs; this is the thin-adapter
  art.</p>
  <div class="code-block">চক-কালি-শাস্ত্র — usePreviewConfirmFlow (প্রকৃত LP-কোড)

ফেজ-ঘড়ি (ছয়-কাঁটা):
  export type PreviewConfirmPhase =
    'idle' | 'previewing' | 'preview'
    | 'committing' | 'done' | 'error'

চুক্তি (এক-fetch, দুই-ডাক):
  export interface PreviewConfirmOptions&lt;TArg,TRes,TRow&gt; {
    fetch: (arg: TArg, dryRun: boolean) =&gt; Promise&lt;TRes&gt;
    rows:  (res: TRes) =&gt; TRow[]
    successMessage?: string | ((res: TRes) =&gt; string)
    onSuccess?: () =&gt; Promise&lt;void&gt; | void
    errorMessage?: { preview?: string; confirm?: string }
  }

কম্পোজেবল-হৃদয় (phase-রেফ + দুই-ক্রিয়া):
  export function usePreviewConfirmFlow(options) {
    const phase = ref&lt;PreviewConfirmPhase&gt;('idle')
    const rows = ref&lt;TRow[]&gt;([])
    const result = ref&lt;TRes | null&gt;(null)
    const error = ref&lt;string | null&gt;(null)

    async function preview(arg: TArg) {
      phase.value = 'previewing'; error.value = null
      try {
        const res = await options.fetch(arg, true)  // চক
        result.value = res
        rows.value = options.rows(res)
        phase.value = 'preview'      // ✓ পাতা-১-খোলা
      } catch (e) {
        error.value = getApiErrorMessage(
          e, options.errorMessage?.preview)
        phase.value = 'error'
      }
    }

    async function confirm(arg: TArg) {
      // 🛡️ পাহারা: কালি শুধু পর্যালোচিত-preview থেকে
      if (phase.value !== 'preview') return
      phase.value = 'committing'; error.value = null
      let res: TRes
      try {
        res = await options.fetch(arg, false)       // কালি
        result.value = res; rows.value = options.rows(res)
      } catch (e) {
        error.value = getApiErrorMessage(
          e, options.errorMessage?.confirm)
        phase.value = 'error'; return
      }
      // ✓ লেখা-কমিটেড — পার্শ্ব-প্রভাব try-বাইরে:
      // ব্যর্থ-রিফেচ সফল-লেখাকে 'error'-ফেরাবে না
      phase.value = 'done'
      if (options.successMessage) toast.success(
        typeof options.successMessage === 'function'
          ? options.successMessage(res)
          : options.successMessage)
      await options.onSuccess?.()
    }
    function reset() { phase.value='idle'; rows.value=[]
      result.value=null; error.value=null }
    return { phase, rows, result, error,
             preview, confirm, reset }
  }

দেয়াল-ছাঁচ (দুই-পাতার-বই):
  &lt;Button :loading="phase==='previewing'"
    @click="preview(period)"&gt;প্রিভিউ দেখাও&lt;/Button&gt;

  &lt;table v-if="phase==='preview' || phase==='committing'"&gt;
    &lt;tr v-for="row in rows" :key="row.key"&gt;…পরিকল্পনা-সারি…&lt;/tr&gt;
  &lt;/table&gt;

  &lt;Button v-if="phase==='preview'"
    :loading="phase==='committing'"
    :disabled="rows.length === 0"
    @click="confirm(period)"&gt;✓ নিশ্চিত-করে-লেখো&lt;/Button&gt;
  · confirm-বাটন শুধু preview-পাতায়-ই-জন্মায় —
    ঘড়ির-পাহারা + দেয়ালের-পাহারা, দুই-স্তর

পাতলা-অ্যাডাপ্টার (শাগিরদের-পাতা):
  // চালান-ঠেলা — শুধু fetch+rows-সুতো:
  const invoicePush = usePreviewConfirmFlow({
    fetch: (p, dry) =&gt;
      invoiceService.pushToXero(p, dry),
    rows:  (r) =&gt; r.lines,
    successMessage: 'Xero-তে ঠেলা হলো',
    onSuccess: () =&gt; refetch(),
  })
  // ক্রেডিট-নোট / পেমেন্ট — একই-ঘড়ি,
  // ভিন্ন-সুতো; দপ্তরি-কোড শূন্য-পুনর্লিখন

কেন-দুই-ডাক (এক-ই-এন্ডপয়েন্ট):
  · সার্ভার-পরিকল্পনা = ক্লায়েন্ট-অনুমান-নয়
    (কী-বাদ-পড়বে, কী-গ্রুপ-হবে — একই-যুক্তি,
    একই-কোড-পথ)
  · ড্রাই-রান-চিহ্ন শুধু অনুরোধে, উত্তরে-নয় —
    উত্তর-আকৃতি দুই-ডাকে-একই (rows-নির্যাত্রক)</div>
  <div class="verse">ইস্তিখারাহ — অঙ্গীকারের-আগে-মন্থন: প্রবাদ-শাস্ত্র যেখানে বড়-সিদ্ধান্তে দুই-রাকাত-ভাবনা — কাজটি করব কি-না-জেনে তবে-করা। ওস্তাদ নাজিরের দপ্তর সেই ইস্তিখারার কারিগরি-রূপ: চক-পাতায়-দেখা, তারপর-কালি; যে-লেখা চোখ-ডুবায়নি, সে-লেখা দলিল-নয় — জুয়া। "তোমাদের সম্পদ নিজেদের মধ্যে অযথা খরচ করো না" (২:১৮৮-এর ভাব) — অযথা-লেখা রোধের-ই হুকুমের ছায়া, ডেটার-জগতে।</div>
  <div class="diagram">
    <div class="diag-title">Chalk Before Ink — The Six-Hand Phase Clock</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowQ17" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker></defs>
      <rect x="15" y="18" width="80" height="52" rx="9" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="55" y="40" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="700">idle</text>
      <text x="55" y="54" text-anchor="middle" fill="#64748b" font-size="6">বিশ্রাম</text>
      <rect x="130" y="18" width="96" height="52" rx="9" fill="rgba(66,184,131,0.09)" stroke="#42b883" stroke-width="1.4"/>
      <text x="178" y="40" text-anchor="middle" fill="#7ee0b0" font-size="7.5" font-weight="700">previewing</text>
      <text x="178" y="54" text-anchor="middle" fill="#64748b" font-size="6">fetch(dryRun=true)</text>
      <rect x="260" y="18" width="90" height="52" rx="9" fill="rgba(66,184,131,0.13)" stroke="#42b883" stroke-width="1.6"/>
      <text x="305" y="40" text-anchor="middle" fill="#7ee0b0" font-size="7.5" font-weight="700">preview 📋</text>
      <text x="305" y="54" text-anchor="middle" fill="#94a3b8" font-size="6">পাতা-১ খোলা</text>
      <rect x="384" y="18" width="96" height="52" rx="9" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.6"/>
      <text x="432" y="40" text-anchor="middle" fill="#fcd34d" font-size="7.5" font-weight="700">committing</text>
      <text x="432" y="54" text-anchor="middle" fill="#94a3b8" font-size="6">fetch(dryRun=false)</text>
      <rect x="508" y="18" width="37" height="52" rx="8" fill="rgba(66,184,131,0.13)" stroke="#42b883" stroke-width="1.4"/>
      <text x="526" y="40" text-anchor="middle" fill="#7ee0b0" font-size="7" font-weight="700">done</text>
      <text x="526" y="53" text-anchor="middle" fill="#94a3b8" font-size="6.5">✓</text>
      <rect x="384" y="96" width="96" height="46" rx="9" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.4"/>
      <text x="432" y="116" text-anchor="middle" fill="#f87171" font-size="7.5" font-weight="700">error</text>
      <text x="432" y="130" text-anchor="middle" fill="#94a3b8" font-size="6">→ সংশোধ-পুনঃপ্রিভিউ</text>
      <line x1="95" y1="44" x2="128" y2="44" stroke="#7ee0b0" stroke-width="1.7" marker-end="url(#arrowQ17)"/>
      <line x1="226" y1="44" x2="258" y2="44" stroke="#7ee0b0" stroke-width="1.7" marker-end="url(#arrowQ17)"/>
      <line x1="350" y1="44" x2="382" y2="44" stroke="#fbbf24" stroke-width="1.9" marker-end="url(#arrowQ17)"/>
      <text x="366" y="34" text-anchor="middle" fill="#fbbf24" font-size="6" font-weight="700">🛡️ preview-থেকেই</text>
      <line x1="480" y1="44" x2="506" y2="44" stroke="#7ee0b0" stroke-width="1.7" marker-end="url(#arrowQ17)"/>
      <line x1="432" y1="70" x2="432" y2="94" stroke="#f87171" stroke-width="1.3" stroke-dasharray="4 3" marker-end="url(#arrowQ17)"/>
      <rect x="15" y="118" width="340" height="24" rx="8" fill="rgba(248,113,113,0.05)" stroke="#f87171" stroke-width="1"/>
      <text x="185" y="134" text-anchor="middle" fill="#f87171" font-size="6.5" font-weight="600">অন্য-যেকোনো-অবস্থা থেকে confirm → no-op (অন্ধ-কালি-রোধ)</text>
      <rect x="15" y="162" width="530" height="104" rx="11" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="280" y="184" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">🖋️ দপ্তরির-দুই-শপথ</text>
      <text x="280" y="201" text-anchor="middle" fill="#94a3b8" font-size="7">① কালি শুধু পর্যালোচিত-preview থেকে — ঘড়ির-পাহারা (phase!=='preview'→return) + দেয়ালের-পাহারা (বাটন v-if="phase==='preview'")</text>
      <text x="280" y="217" text-anchor="middle" fill="#94a3b8" font-size="7">② লেখা-কমিটেডের-পরে পার্শ্ব-প্রভাব try-বাইরে — ব্যর্থ-রিফেচ(onSuccess) কমিটেড-সাফল্যকে error-এ-ফেরাবে-না</text>
      <text x="280" y="235" text-anchor="middle" fill="#64748b" font-size="6.5">done → টোস্ট (স্ট্রিং|fn(res) — সার্ভার-বার্তা-পাথেয়) → await onSuccess (রিফেচ/নেভ)</text>
      <text x="280" y="252" text-anchor="middle" fill="#64748b" font-size="6.5">reset() — মোডাল-পুনরায়-খোলায় বাসী-অবস্থা-মুছে · error-ফেজ থেকে পুনঃpreview-ই-পথ</text>
      <text x="280" y="290" text-anchor="middle" fill="#64748b" font-size="8">তিন-শাগিরদ (invoice-push · credit-note · payment) এক-ঘড়ি-তিন-সুতো — পাতলা-অ্যাডাপ্টারের-শিল্প</text>
      <text x="280" y="308" text-anchor="middle" fill="#64748b" font-size="7.5">চক মুছে-ফেলা-যায়, কালি নয় — তাই বড়-লেখা দুইবার-ডাকা-হয়</text>
    </svg>
    <div class="diag-cap">ছয়-কাঁটা-ঘড়ি + দুই-শপথ: চক-পাতা-না-দেখে কালি-ডাক অসম্ভব, আর কালি-পড়ার-পরের-ব্যর্থতা কালি-মুছে-না।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>দপ্তর-ফাঁদ:</strong> (১) confirm-গার্ড-ছাড়া ফেজ-কম্পোজেবল — v-if-তালা কেটে গেলেই অন্ধ-কালির-দরজা খোলা; দুই-স্তর-পাহারা (ঘড়ি+দেয়াল) বাধ্যতামূলক। (২) onSuccess-কে try-ভেতরে রাখা — রিফেচ-ব্যর্থ হলে 'ঠেলা-সফল'-কে error-দেখায়, ব্যবহারকারী দুইবার-ঠেলে ডাবল-লেখা; কমিটেড-পরে-বাইরে-ই। (৩) প্রতি-পৃষ্ঠে ঘড়ি-কোড হাতে-নকল — কম্পোজেবল-একবার, অ্যাডাপ্টার-পাতলা।</div></div>
  <div class="secret-box">🖋️ চক-পাতায়-দেখাও (dryRun), পর্যালোচনার-পরে-কালি (confirm) — কালি শুধু preview-থেকে, পার্শ্ব-প্রভাব কমিটের-পরে। / Preview with chalk, commit ink only from review.</div>`,
  senior: {
    title: "Preview-Confirm Card",
    body: `<p><strong>ফেজ</strong>: idle→previewing→<strong>preview</strong>→committing→done|error। <strong>চুক্তি</strong>: fetch(arg, dryRun) এক-ই-এন্ডপয়েন্ট; rows(res) উদ্ধারক। <strong>পাহারা-দুই-স্তর</strong>: confirm শুধু phase==='preview' (কম্পোজেবল-গার্ড) + বাটন v-if="phase==='preview'"। <strong>শপথ</strong>: onSuccess done-এর-পরে try-বাইরে; টোস্ট fn(res) হলে সার্ভার-বার্তা। <strong>reset()</strong>: পুনঃব্যবহার-পরিচ্ছন্ন। <strong>অ্যাডাপ্টার</strong>: প্রতি-পৃষ্ঠা fetch+rows+successMessage-মাত্র। <strong>উত্তর-আকৃতি</strong>: দুই-ডাকে-একই (rows-নির্যাত্রক)।</p>`
  }
});

doors.push({
  num: 18,
  icon: "🔔",
  color: "#f59e0b",
  name: "ঘণ্টি-বাহকের গলি",
  subtitle: "The Bell-Carrier's Lane — Notifications & Live Updates",
  tech: "toast system (useToast), notification store + inbox, SSE/EventSource pattern, unread badge, deep-links from notifications",
  spirit: "তাবলিগ — tablīgh (the delivering of the message)",
  secret: "এরর-টোস্ট কম্পোজেবল-গলির, নোটিফিকেশন স্টোর+ইনবক্স-গলির; লাইভ-খবর SSE-নদী (reconnect+প্রস্থানে-বন্ধ), ব্যাজ unread-গণনা, ক্লিক = গভীর-লিংক।",
  recall: {
    q: "SSE-নদী বন্ধ-হলে (রাত-মাঝে) কী হবে, কী হবে না?",
    qen: "On SSE drop, what happens and what doesn't?",
    a: "হবে: reconnect-পশ্চাৎ (backoff-সহ) পুনঃসংযোগ+মিসড-অবস্থা রিফেচ (unread-গণনা সত্যে-ফেরত); হবে-না: কোনো-লেখা-রোলব্যাক — নদী শুধু-খবর-বয়ে, ডেটা-উৎস-সার্ভার; প্রস্থানে close() বাধ্যতামূলক।",
    aen: "Reconnect with backoff and refetch missed state; no data rollback — SSE carries news, not truth; close() on unmount."
  },
  story: `<p class="scene-setting">আঠারো নম্বর ঘর একটা <strong>ঘণ্টি-বাহকদের-গলি</strong> — দুই-ধারে দুই-রকম-দোকান। বাঁ-দিকে <strong>টোস্ট-ভাটি</strong>: কারিগর
  <strong>রিক্তা</strong> (তাঁর তালুতে সবুজ-লাল দুই-রঙের-বাট) — এখনই-দেখাও-এখনই-মিলাও খবরের-দোকান: সার্ভিস-কলের-সাফল্য/ব্যর্থতা উঠলেই বাট বাজে,
  কয়েক-মুহূর্ত পরে নিজে-নিভে-যায়। ডান-দিকে <strong>ডাক-ঘর</strong>: কারিগর <strong>জামিলা</strong> — দীর্ঘ-স্থায়ী-খবরের-জমা: প্রতিটি-চিঠি সারি-সারি
  ইনবক্সে, পড়া/না-পড়ার-দাগ, আর দরজার-উপরে <strong>লাল-ব্যাজ</strong> (কয়টা-না-পড়া)। গলির-শেষে <strong>নদী-ঘাট</strong> — SSE-স্রোত: সার্ভার থেকে
  খবর ভেসে-আসে, ঘাটক <strong>নদী-জামাল</strong> জানালার-বাইরে শুনে টোস্ট/ব্যাজ/ইনবক্সে-ঢালে; স্রোত-ছিঁড়লে পশ্চাৎ-পশ্চাৎ-পুনঃছুঁয়ে-দেখে (backoff-reconnect)
  আর পড়ে-থাকা-খবর এক-গণনায়-ধরে (refetch)। তার দুই-শপথ: <strong>"নদী শুধু-খবর-বয়ে — ডেটা-সত্য সার্ভারের-ঘরে;</strong> আর অতিথি-গেলে-দড়ি-ছাড়া
  (unmount→close) — নইলে রাতভর পচা-খবর বাজতে-থাকে।"</p>
  <p class="scene-setting en">Room eighteen is a <strong>bell-carriers' lane</strong> — two kinds of shops on either
  side. Left, the <strong>toast-tavern</strong>: artisan <strong>Rikta</strong> (green and red pots in her palms) —
  show-now-vanish-now news: whenever a service call's success/failure rises, a pot rings and dies by itself moments
  later. Right, the <strong>post-office</strong>: artisan <strong>Jamila</strong> — durable news storage: letters
  queued in an inbox, read/unread marks, and a <strong>red badge</strong> above the door (how many unread). At the
  lane's end the <strong>river-ghat</strong> — the SSE stream: news floats from the server; ferryman
  <strong>Nadi-Jamal</strong> listens outside the window and pours into toast/badge/inbox; when the stream snaps he
  re-touches with backoff and counts what was missed (refetch). Two oaths: <strong>"the river carries news only —
  data-truth stays in the server's house; and when the guest leaves, the rope is released"</strong> (unmount→close)
  — else stale news rings all night.</p>
  <div class="code-block">ঘণ্টি-শাস্ত্র — টোস্ট + ইনবক্স + SSE (LP-ধারায়)

① টোস্ট-ভাটি (ক্ষণস্থায়ী-খবর):
  // ui/primitives/useToast.ts-ছায়া
  const toast = useToast()
  toast.success('সংরক্ষিত হলো')
  toast.error(getApiErrorMessage(e, 'ব্যর্থ'))
  · বাস্তবায়ন-ইত্যাদি: টোস্ট-স্টোর/অ্যারে+
    setTimeout-অটো-মৃত্যু; প্রতি-টোস্ট id+শেষ-প্রয়োজনে-
    ব্যবহারকারী-বন্ধ
  · প্রেরণ-স্থল: কম্পোজেবল-গলি (useMutationAction/
    usePreviewConfirmFlow-ভেতরে) — কম্পোনেন্টে-নয়

② ডাক-ঘর (স্থায়ী-নোটিফিকেশন):
  // নোটিফিকেশন-স্টোর-ছায়া
  export const useNotificationsStore =
    defineStore('notifications', () =&gt; {
      const items = ref&lt;Notification[]&gt;([])
      const unread = computed(() =&gt;
        items.value.filter(n =&gt; !n.read_at).length)
      async function fetchList() { items.value =
        (await notifService.list()).results }
      async function markRead(id) {
        await notifService.markRead(id)
        await fetchList() }        // সার্ভার-ই-সত্য
      async function markAllRead() { … }
      return { items, unread,
               fetchList, markRead, markAllRead }
    })
  · ইনবক্স-পর্দা: সারি+পড়া-দাগ+সময়;
    ব্যাজ: হেডারে unread-গণনা

③ নদী-ঘাট (SSE — লাইভ-স্রোত):
  // কম্পোজেবল-ছাঁচ: useNotificationStream
  export function useNotificationStream() {
    const connected = ref(false)
    let es: EventSource | null = null
    let retry = 0
    function open() {
      es = new EventSource(
        '/api/notifications/stream/', // withCredentials
        { withCredentials: true })
      es.onopen = () =&gt; { connected.value = true
                            retry = 0 }
      es.addEventListener('notification',
        (ev) =&gt; {
          const n = JSON.parse(ev.data)
          // তিন-ঢাল: টোস্ট + ব্যাজ-রিফেচ + তালিকা-যোগ
          toast.info(n.title)
          void notifStore.fetchList()
        })
      es.onerror = () =&gt; {          // স্রোত-ছিঁড়লে
        connected.value = false
        es?.close()
        const backoff = Math.min(
          30_000, 1000 * 2 ** retry++)  // পশ্চাৎ-পশ্চাত
        setTimeout(open, backoff)
      }
    }
    onMounted(open)
    onBeforeUnmount(() =&gt; es?.close())  // দড়ি-ছাড়া
    return { connected }
  }
  · মিসড-খবর: reconnect-পরে fetchList —
    ব্যাজ/ইনবক্স সত্যে-ফেরত (নদী = ট্রিগার,
    তালিকা = সার্ভার-ডেটা)

④ গভীর-লিংক (চিঠি→ঘর):
  · নোটিফিকেশন-বস্তুতে পথ-প্যারাম
    (/notification/{id}/ → /invoices/{batch})
  · ক্লিক: markRead → router.push(
      notificationDeepLink(n))
  · ভাঙা-পথ-রোধ: deep-link-মানচিত্র রুট-নামে,
    টেস্টে প্রতিটি-মানানসই-যাচাই (LP: একই-ফাইলে)

⑤ পছন্দ-ঘর:
  · show_message_toasts / play_notification_sound —
    প্রোফাইল-পর্দা থেকে PATCH (দরজা ১৬-এর-আত্মীয়)
  · স্টোরে-নয়-দেখালে fetchList-ই-স্কিপ</div>
  <div class="verse">তাবলিগ — পৌঁছে-দেওয়া: "হে বার্তবাহক, পৌঁছে-দাও যা-তোমার-প্রতি-নাযিল-হলো" (৫:৬৭-এর আদেশ-ছায়া) — বার্তা-পৌঁছানো-অমানত, না-পৌঁছানো-বিশ্বাসঘাতকতা। রিক্তা-জামিলা-নদী-জামালের গলি সেই তাবলিগের তিন-ঘর: ক্ষণিকের-খবর টোস্টে, স্থায়ীর-খবর ইনবক্সে, লাইভ-স্রোত নদীতে — প্রতিটি-বার্তা তার-যোগ্য-ঘরে-পৌঁছে, পড়ার-দাগে, গভীর-লিংকের-ঠিকানায়। যে-গলিতে খবর পৌঁছায়-না-বা-পৌঁছে-পচে-থাকে, সে-গলির ঘণ্টি অলংকার-নয় — প্রতারণা।</div>
  <div class="diagram">
    <div class="diag-title">Bell-Carrier's Lane — Toast Tavern, Post Office, River Ghat</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowN18" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/></marker></defs>
      <rect x="15" y="16" width="165" height="104" rx="10" fill="rgba(66,184,131,0.09)" stroke="#42b883" stroke-width="1.5"/>
      <text x="97" y="37" text-anchor="middle" fill="#7ee0b0" font-size="8.5" font-weight="700">🍞 টোস্ট-ভাটি</text>
      <text x="97" y="52" text-anchor="middle" fill="#94a3b8" font-size="6.5">useToast() — ক্ষণস্থায়ী</text>
      <text x="97" y="66" text-anchor="middle" fill="#64748b" font-size="6.5">toast.success/error(msg)</text>
      <text x="97" y="82" text-anchor="middle" fill="#7ee0b0" font-size="6.5">অটো-মৃত্যু · প্রেরণ: কম্পোজেবল-গলি</text>
      <text x="97" y="102" text-anchor="middle" fill="#64748b" font-size="6">কম্পোনেন্ট জানে-না</text>
      <rect x="197" y="16" width="165" height="104" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="279" y="37" text-anchor="middle" fill="#a5b4fc" font-size="8.5" font-weight="700">📮 ডাক-ঘর (ইনবক্স)</text>
      <text x="279" y="52" text-anchor="middle" fill="#94a3b8" font-size="6.5">notifications-store</text>
      <text x="279" y="66" text-anchor="middle" fill="#64748b" font-size="6.5">items + unread-কম্পিউটেড</text>
      <text x="279" y="82" text-anchor="middle" fill="#a5b4fc" font-size="6.5">markRead → সার্ভার → রিফেচ</text>
      <text x="279" y="102" text-anchor="middle" fill="#64748b" font-size="6">লাল-ব্যাজ = unread-গণনা</text>
      <rect x="379" y="16" width="166" height="104" rx="10" fill="rgba(66,184,131,0.09)" stroke="#42b883" stroke-width="1.5"/>
      <text x="462" y="37" text-anchor="middle" fill="#7ee0b0" font-size="8.5" font-weight="700">🌊 নদী-ঘাট (SSE)</text>
      <text x="462" y="52" text-anchor="middle" fill="#94a3b8" font-size="6.5">EventSource + withCredentials</text>
      <text x="462" y="66" text-anchor="middle" fill="#64748b" font-size="6.5">onmessage → তিন-ঢাল</text>
      <text x="462" y="82" text-anchor="middle" fill="#7ee0b0" font-size="6.5">onerror → backoff-পুনঃছোঁয়া</text>
      <text x="462" y="102" text-anchor="middle" fill="#64748b" font-size="6">onBeforeUnmount → close()</text>
      <line x1="182" y1="68" x2="195" y2="68" stroke="#fbbf24" stroke-width="1.6" marker-end="url(#arrowN18)"/>
      <line x1="362" y1="68" x2="377" y2="68" stroke="#fbbf24" stroke-width="1.6" marker-end="url(#arrowN18)"/>
      <rect x="15" y="138" width="530" height="92" rx="11" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1.4"/>
      <text x="280" y="160" text-anchor="middle" fill="#fcd34d" font-size="8.5" font-weight="700">घণ্টি-ঢালের-তিন-মুখ</text>
      <text x="280" y="177" text-anchor="middle" fill="#94a3b8" font-size="7">SSE 'notification' → ① toast.info(শিরোনাম) ② notifStore.fetchList() — ব্যাজ-সত্যে ③ ইনবক্স-তালিকা-সদ্যতম</text>
      <text x="280" y="193" text-anchor="middle" fill="#94a3b8" font-size="7">reconnect-পরে fetchList — মিসড-খবর গণনায়-ধরা; নদী=ট্রিগার, সত্য=সার্ভার-ডেটা</text>
      <text x="280" y="209" text-anchor="middle" fill="#64748b" font-size="6.5">backoff = min(30s, 1s × 2^retry) — ঝড়ে-পাগল-পুনঃছোঁয়া-নয়</text>
      <text x="280" y="224" text-anchor="middle" fill="#64748b" font-size="6.5">চিঠি-ক্লিক: markRead → notificationDeepLink(n) → router.push — গভীর-লিংক রুট-নামে (টেস্ট-পিন)</text>
      <rect x="15" y="246" width="530" height="40" rx="10" fill="rgba(100,116,139,0.08)" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="280" y="264" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="600">পছন্দ-ঘর: টোস্ট-দেখাও / শব্দ-বাজাও — প্রোফাইল-PATCH (দরজা ১৬)</text>
      <text x="280" y="279" text-anchor="middle" fill="#94a3b8" font-size="7">⚠ প্রস্থানে close() বিস্মৃত = রাতভর-পচা-খবর-বাজা · নদীতে-ডেটা-লেখা-নয়, খবর-মাত্র</text>
      <text x="280" y="302" text-anchor="middle" fill="#64748b" font-size="8">ক্ষণিক-টোস্টে, স্থায়ী-ইনবক্সে, লাইভ-নদীতে — প্রতিটি-বার্তা যোগ্য-ঘরে-পৌঁছে-দাগ-হয়</text>
    </svg>
    <div class="diag-cap">তিন-ঘরের-গলি: ভাটি-ক্ষণের, ডাক-ঘর-দীর্ঘের, নদী-লাইভের — তাবলিগের-শৃঙ্খলায় প্রতিটি-খবর পৌঁছে, পড়া-হয়, ঠিকানা-পায়।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গলি-ফাঁদ:</strong> (১) SSE-কে ডেটা-উৎস ভাবা — স্রোত-মিস হলে ইনবক্স-অবস্থা পুরনো-থাকবে; reconnect-এ fetchList-ই সত্যে-ফেরার-পথ। (২) reconnect-বিহীন বা বিনা-backoff পুনঃছোঁয়া — সার্ভার-ঝড় বা চির-নীরবতা দুই-ই; 2^n-পশ্চাত-ছোঁয়া। (৩) unmount-এ close() না-করা — প্রস্থানের-পরেও টোস্ট-বাজা আর মেমরি-ফাঁদ; দড়ি-ছাড়া বাধ্যতামূলক।</div></div>
  <div class="secret-box">🔔 ক্ষণিক→টোস্ট, স্থায়ী→ইনবক্স+ব্যাজ, লাইভ→SSE-নদী (backoff-পুনঃছোঁয়া, প্রস্থানে-বন্ধ); খবর পৌঁছে-দাগ-হয়, গভীর-লিংক-পায়। / Transient toasts, durable inbox, live river — every message delivered and marked.</div>`,
  senior: {
    title: "Notifications Card",
    body: `<p><strong>টোস্ট</strong>: useToast (success/error) — প্রেরণ কম্পোজেবল-গলিতে; অটো-মৃত্যু। <strong>ইনবক্স</strong>: notifications-store (items, unread-computed, fetchList/markRead→সার্ভার-রিফেচ); ব্যাজ=unread। <strong>SSE</strong>: EventSource(withCredentials); ইভেন্ট→টোস্ট+fetchList; onerror→close+backoff(1s×2^n, cap 30s)+পুনঃখোলা; onBeforeUnmount→close। <strong>নিয়ম</strong>: নদী=ট্রিগার-মাত্র, সত্য=সার্ভার; reconnect-পরে-রিফেচ। <strong>গভীর-লিংক</strong>: markRead→push(deepLink(n)) — রুট-নাম+টেস্ট-পিন। <strong>পছন্দ</strong>: টোস্ট/শব্দ PATCH।</p>`
  }
});
