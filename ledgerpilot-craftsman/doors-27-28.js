// doors-27-28.js — The Ledger Craftsman (LedgerPilot deep-dive)

doors.push({
  num: 27,
  icon: "🚚",
  color: "#f472b6",
  name: "বাহক-নদীর বিধান",
  subtitle: "The Carrier River — Celery Deep-Dive",
  tech: "broker vs backend, task lifecycle, retries, acks_late, idempotency, beat scheduling, testing pattern, #1190",
  spirit: "ওয়াকিল — wakīl (the entrusted carrier: delivers or reports, never vanishes)",
  secret: "টাস্ক এক আমানত — idempotent শরীর, retry-নীতি, আর পাঠানোর ঘরেও নদীর নাম; নইলে নীরবে ডোবে।",
  recall: {
    q: "টাস্ক retry-এ দ্বিতীয়বার চাললে কী হবে?",
    qen: "What happens if a retried task runs twice?",
    a: "কিছুই না — যদি idempotent লেখো: NACHA-জাতীয় তিন-স্তর বলয় (unique+lock+409) বা স্ট্যাম্প-তালিকায় চেক; নইলে ডাবল-লেখা।",
    aen: "Nothing — IF idempotent (unique-constraint belt or stamped checklist); otherwise double-write."
  },
  story: `<p class="scene-setting">গভীর রাতের নদীতে বাহক-নৌকার কাফেলা — <strong>মাঝি করিম</strong> তাদের সরদার। ব্যবসায়ীরা ভোরে মাল বাঁধিয়ে
  চিরুনি ফেলে যায় (কমিট-পরে-ফেরানো = <code>.delay()</code>), আর করিমের নৌকা রাতভর বয়ে নেয়। তাঁর তিন শপথ। <strong>শপথ
  এক</strong> — মাল পানিতে পড়লে (worker-crash) সে <em>জানা মাল</em> আবার তোলে (acks_late + retry): কিন্তু তার আগে
  প্রতিটি পাথরে দুইবার-না-লেখার ছাপ (idempotency) মেরে নেয় — নইলে স্রোতে ডুবে পরে জেলে একই মাল দুইবার বাজারে
  তোলবে। <strong>শপথ দুই</strong> — ঘড়ির টাওয়ার (beat) যা বাজবে ঠিক সেটাই ছাড়বে; বাজনা বাজবে মাল নয়। <strong>শপথ
  তিন</strong> — প্রতিটি মালের ফেরত-রসিদ (result backend) তিনি তীরের গুম্বজে জমান, যেন জিজ্ঞাসা করলে বলা যায়:
  পৌঁছেছে, ডুবেছে, নাকি এখনো বয়ে চলেছে। এক ব্যবসায়ী একদিন চিরুনি ফেলে ঘুমিয়ে পড়েন — ভোরে দেখেন মাল রওনা
  হয়নি। করিম বলেন — <strong>"তোমার দোকানের দরজায় নদীর নাম লেখাই নেই (#1190) — চিরুনি এসে দাঁড়াল পথ জিজ্ঞেস
  করে, আর কেউ বলল না।"</strong></p>
  <p class="scene-setting en">On the night river sails a carrier-fleet — <strong>Boatman Karim</strong> its
  captain. Merchants bind cargo at dawn and drop chits (fire-and-forget = <code>.delay()</code>); Karim's
  boats carry all night. Three oaths bind him. <strong>Oath one</strong> — if cargo falls overboard
  (worker-crash) he re-lifts <em>known cargo</em> (acks_late + retry) — but first stamps every stone against
  double-writing (idempotency), else fishermen will land the same goods twice. <strong>Oath two</strong> —
  the clock-tower (beat) may only release what it strikes; the chime sounds, not the cargo. <strong>Oath
  three</strong> — every cargo's return-receipt (result backend) is filed in the riverside vault, so any
  question gets an answer: delivered, drowned, or still afloat. One merchant drops his chit and sleeps —
  dawn shows cargo never left. Karim says — <strong>"your shop-door lacks the river's name (#1190) — the
  chit arrived, asked for the way, and nobody could say."</strong></p>
  <div class="code-block">Celery — প্রকল্প-রীতিতে (settings/base.py + apps/*/tasks.py)

নদীর তিন অংশ:
  broker (Redis DB 2)   — মাল ভাসে যে স্রোতে
  worker               — করিমের নৌকা-কাফেলা (-Q সারি ভাগ)
  result backend (DB 3) — ফেরত-রসিদ (acks-জিজ্ঞাসা, মান-ফেরত)
  ⚠ পাঠানোর ঘরেও env: web-প্রসেসে CELERY_BROKER_URL
    ছাড়া .delay() নীরবে নদীতে পৌঁছায় না (#1190)

টাস্ক-লেখার বিধান:
  @shared_task(bind=True, max_retries=3,
               default_retry_delay=60)
  def sync_current_month(self):
      try: …
      except TemporaryError as exc:
          raise self.retry(exc=exc)   # নিয়ন্ত্রিত পুনঃযাত্রা
  · শরীর idempotent — দ্বিতীয় চালে বিষ নয়:
    NACHA-জাতীয় বলয় (unique cycle + skip_locked +
    IntegrityError→409) বা স্ট্যাম্প-তালিকা
    (completed_at IS NULL + notified-পতাকা)
  · acks_late=True ভারী/বিপজ্জনক টাস্কে — কাজ শেষে
    receipt; পড়ে-গেলে পুনঃযাত্রা
  · স্থায়ী-ব্যর্থতা: retry শেষ → OnFailure-সিগন্যালে
    logger.exception + (প্রয়োজনে) হ্যান্ডঅফ-ঘটনা —
    নীরব-কবর নিষেধ (দরজা ২৩-এর নীরবতা-পিনের আত্মীয়)

ঘড়ির টাওয়ার (beat):
  CELERY_BEAT_SCHEDULE = {
    'mark-cycle-ready-p2': {'task':…,
      'schedule': crontab(day_of_month=3, hour=9)},
    'mark-cycle-ready-p1': {…day_of_month=17…},
    'xero-sync-daily': {…hour=6…},   # UTC-নোট
  }
  · DatabaseScheduler (django-celery-beat) — DB-সারি
    রানটাইমে যোগ/সম্পাদনা
  · শিডিউল-টাস্কও idempotent — দুই টিক-এক-কাজ নয়

ডাক-যাত্রার ধরন:
  অগ্নি-ত্বর (যতটা তাড়াতাড়ি): task.delay(args)
  নিয়ত-যাত্রা (নির্দিষ্ট সময়ে): task.apply_async(eta=…)
  শৃঙ্খল: chain(a.s(), b.s()) · দল: group/chord
    (প্রকল্পে বিরল — সরল থাকো)

টেস্ট-নদী (প্রকল্প-নিয়ম):
  · CELERY_TASK_ALWAYS_EAGER=True (settings/test.py)
  · টেস্টে .delay() নয় — সরাসরি ফাংশন কল
    @pytest.mark.django_db-এর নিচে
  · beat-যুক্তি টেস্ট: শিডিউল-ক্রন কেবল স্ট্রিং;
    মূল ফাংশনের নিজের টেস্ট

রোগ-নির্ণয়:
  · টাস্ক চলছে না? → worker-লগ + Redis-সারি-গভীরতা
  · দুইবার চলল? → idempotency-বলয় কোথায় ভাঙল
  · রাতভর আটকে? → acks_late/retry-বিধান পড়ো,
    visibility-timeout (Redis-broker-সীমা)</div>
  <div class="verse">ওয়াকিল — "তারা বলল: আমরা তোমাদের ওয়াকিল নই" নয় বরং সূরা ইউসুফের আমানত-প্রবাহ: যাকে মাল দেওয়া হলো সে ফেরাবে, নইলে খবর দেবে। করিমের তিন শপথ সেই ওয়াকিলের সনদ: পুনঃযাত্রায় আমানত, ঘড়িতে ন্যায়, রসিদে স্বচ্ছতা। যে বাহক নীরবে হারায়, তার নদীতে আর কেউ মাল তোলে না — কারণ আল্লাহ বিশ্বাসঘাতকদের পথ চালান না এমন বাণীর বাণিজ্যিক ভাই: নীরবতা সবচেয়ে দামি চুরি।</div>
  <div class="diagram">
    <div class="diag-title">The Carrier River — Task Lifecycle & Belts</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowC27" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="12" width="165" height="86" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="97" y="34" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="700">🏪 পাঠানোর ঘর</text>
      <text x="97" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">view/সেবা → task.delay()</text>
      <text x="97" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">#1190: web-এও broker env</text>
      <text x="97" y="86" text-anchor="middle" fill="#fbbf24" font-size="6.8">না থাকলে নীরব-ডোবা</text>
      <rect x="200" y="12" width="160" height="86" rx="10" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="280" y="34" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">🌊 স্রোত (broker)</text>
      <text x="280" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">Redis DB 2 — সারি-গভীরতা</text>
      <text x="280" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">চিরুনি এখানে ভাসে</text>
      <text x="280" y="86" text-anchor="middle" fill="#64748b" font-size="6.5">visibility-timeout সীমা</text>
      <rect x="380" y="12" width="165" height="86" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="462" y="34" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">🚤 করিম (worker)</text>
      <text x="462" y="50" text-anchor="middle" fill="#94a3b8" font-size="7">acks_late — শেষে রসিদ</text>
      <text x="462" y="66" text-anchor="middle" fill="#94a3b8" font-size="7">retry(max 3, delay 60s)</text>
      <text x="462" y="86" text-anchor="middle" fill="#64748b" font-size="6.5">-Q সারি-ভাগ</text>
      <line x1="180" y1="55" x2="198" y2="55" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowC27)"/>
      <line x1="360" y1="55" x2="378" y2="55" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowC27)"/>
      <rect x="15" y="118" width="530" height="64" rx="10" fill="rgba(248,113,113,0.07)" stroke="#f87171" stroke-width="1.5"/>
      <text x="280" y="139" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">🛡️ idempotency-বলয় — পুনঃযাত্রায় বিষ নয়</text>
      <text x="280" y="156" text-anchor="middle" fill="#94a3b8" font-size="7.5">NACHA: unique(cycle)+skip_locked+409 · চক্র: completed_at-খালি+notified-পতাকা · যেকোনো স্ট্যাম্প-তালিকা</text>
      <text x="280" y="172" text-anchor="middle" fill="#94a3b8" font-size="7.5">স্থায়ী-ব্যর্থতা → OnFailure → logger + হ্যান্ডঅফ (নীরব-কবর নিষেধ)</text>
      <rect x="15" y="200" width="253" height="72" rx="10" fill="rgba(52,211,153,0.08)" stroke="#34d399" stroke-width="1.4"/>
      <text x="141" y="222" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="700">⏰ ঘড়ির টাওয়ার (beat)</text>
      <text x="141" y="238" text-anchor="middle" fill="#94a3b8" font-size="7">৩-তারিখ ০৯:০০ P2 · ১৭-তারিখ P1</text>
      <text x="141" y="252" text-anchor="middle" fill="#94a3b8" font-size="7">দৈনিক ০৬:০০ UTC আয়না-sync</text>
      <text x="141" y="266" text-anchor="middle" fill="#64748b" font-size="6.5">DatabaseScheduler — DB-সারি</text>
      <rect x="292" y="200" width="253" height="72" rx="10" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.4"/>
      <text x="418" y="222" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="700">🧾 রসিদ-গুম্বজ (result)</text>
      <text x="418" y="238" text-anchor="middle" fill="#94a3b8" font-size="7">Redis DB 3 — state/mান</text>
      <text x="418" y="252" text-anchor="middle" fill="#94a3b8" font-size="7">পৌঁছেছে/ডুবেছে/বয়ে-চলেছে</text>
      <text x="418" y="266" text-anchor="middle" fill="#64748b" font-size="6.5">টেস্ট: ALWAYS_EAGER + সরাসরি-কল</text>
      <line x1="141" y1="98" x2="141" y2="116" stroke="#34d399" stroke-width="1.3" stroke-dasharray="4 3" marker-end="url(#arrowC27)"/>
      <text x="280" y="302" text-anchor="middle" fill="#64748b" font-size="8.5">তিন শপথ: পুনঃযাত্রায় আমানত · ঘড়িতে ন্যায় · রসিদে স্বচ্ছতা — আর পাঠানোর ঘরে নদীর নাম</text>
    </svg>
    <div class="diag-cap">ঘর → স্রোত → নৌকা → রসিদ; মাঝে idempotency-বলয় — নীরব-ডোবা আর ডাবল-লেখা দুটোই অসম্ভব।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নদী-ফাঁদ:</strong> (১) <code>.delay()</code> করে টাস্ক কাজ করছে না মনে করে ডিবাগিং — আগে web-env-এ broker আছে কি না দেখো (#1190)। (২) <code>retry</code> ছাড়া অস্থায়ী-এরর — এক নদী-ঝাপটায় মাল হারা। (৩) টেস্টে <code>.delay()</code> — EAGER-মোডেও আচরণ আলাদা; সরাসরি কলই প্রকল্প-নিয়ম।</div></div>
  <div class="secret-box">🚚 টাস্ক = আমানত: idempotent-শরীর, নিয়ন্ত্রিত-পুনঃযাত্রা, রসিদ, আর পাঠানোর ঘরে নদীর নাম — নীরবতা নদীর সবচেয়ে বড় ডাকাতি। / A task is a trust: idempotent body, bounded retry, filed receipt, and the river's name at the sending door.</div>`,
  senior: {
    title: "Celery Card",
    body: `<p>তিন অংশ: broker (Redis DB2) · worker (-Q সারি) · result (DB3); <strong>web-env-এও broker (#1190)</strong>। টাস্ক: <code>@shared_task(bind=True, max_retries=3, default_retry_delay=60)</code> + <code>self.retry(exc)</code>; শরীর idempotent (unique+skip_locked+409 / স্ট্যাম্প-তালিকা); ভারীতে acks_late; স্থায়ী-ব্যর্থতায় OnFailure→logger+হ্যান্ডঅফ। Beat: crontab(৩/১৭/দৈনিক-UTC) + DatabaseScheduler। যাত্রা: delay/apply_async(eta)/chain-group-chord (বিরল)। টেস্ট: ALWAYS_EAGER + সরাসরি-কল; ক্রন-স্ট্রিং পরীক্ষা নয়। রোগ: সারি-গভীরতা, idempotency-ভাঙা, visibility-timeout।</p>`
  }
});

doors.push({
  num: 28,
  icon: "🏺",
  color: "#f472b6",
  name: "কলস-ঘরের স্মৃতি",
  subtitle: "The Jar Room — Redis Deep-Dive",
  tech: "data types used (string/hash/set/pub-sub), TTL discipline, DB separation, cache patterns, SSE badge channel",
  spirit: "হাফিযয — hafīẓ (the remembering keeper: holds what matters, forgets what expires)",
  secret: "কলসে সত্য নয়, ছায়া থাকে — TTL-ছাড়া কলস পূজা হয়, ক্যাশে-বিষ হয়; মূল মাটিতে, প্রতিধ্বনি কলসে।",
  recall: {
    q: "ক্যাশে-অবৈধতা (invalidation) এ কোন কৌশল?",
    qen: "What's the invalidation approach?",
    a: "লেখার-সময়ে-বাতিল — সেবা-স্তরে টাস্ক সম্পন্ন হলেই সংশ্লিষ্ট কী মুছে/পুনঃলিখন; TTL শেষ-রক্ষা। কলস কখনো সত্যের উৎস নয়।",
    aen: "Write-time invalidation in the service layer plus TTL as the safety net; the jar is never the source of truth."
  },
  story: `<p class="scene-setting">শহরের স্মৃতি-কলসঘর — <strong>কলস-রক্ষিকা রাহেলা</strong>। হাজারো মাটির কলস, প্রতিটির মুখে মোম-ছাপ, আর
  ছাপে খোদাই: <strong>মেয়াদ</strong> (TTL)। কোনো কলসে পানি চিরকাল থাকে না — মেয়াদ শেষে কলস নিজেই উজান হয়ে যায়,
  খালি হয়, নতুন খোঁজ মাটির কুয়ায় (MySQL) ফেরে। রাহেলার তিন তাক: <strong>তাক এক</strong> — খোঁজ-প্রতিধ্বনি
  (ক্যাশে): প্রায়-একই দাওয়া বারবার মাটি খুলতে নয়, প্রতিধ্বনি কলসে; <strong>তাক দুই</strong> — পাখির-ডাক
  (pub/sub): নদীর সংবাদ এক চিৎকারে সব শ্রোতার দুয়ারে — সামনে-সামনে কথা নয়, পোস্টার-নদী; <strong>তাক তিন</strong> —
  ভাসমান মাল (Celery-স্রোত ও রসিদ): সে গল্প দরজা ২৭-এ। এক কারিগর এসে অভিযোগ করে — "আমি কলসে যা রাখলাম কাল
  ভিন্ন দেখছি!" রাহেলা শান্ত — <strong>"কলসে সত্য রাখোনি, ছায়া রেখেছ। ছায়া মালিকের সাথে চলে — মালিক বদলালে
  (লেখা হলে) ছায়া বদলাও, নইলে অচেনা প্রেত দেখবে (stale)। আর মেয়াদ-ছাপ ভুলে গেলে সেই প্রেত চিরকাল
  থাকবে।"</strong></p>
  <p class="scene-setting en">The city's memory jar-room — keeper <strong>Rahela</strong>. Thousands of clay
  jars, each wax-sealed, the seal engraved with an <strong>expiry</strong> (TTL). No jar holds water forever —
  at expiry the jar empties itself and fresh searches return to the earthen well (MySQL). Three shelves:
  <strong>shelf one</strong> — search-echoes (cache): near-identical petitions needn't reopen the earth;
  <strong>shelf two</strong> — bird-calls (pub/sub): river news shouted once to every listener's door, a
  poster-river not a conversation; <strong>shelf three</strong> — floating cargo (Celery's stream and
  receipts; that story lives in door 27). A craftsman complains — "what I jarred yesterday looks different
  today!" Rahela, calm — <strong>"you stored a shadow, not truth. Shadows follow their owner — when the
  owner changes (a write), change the shadow too, or you'll meet a stranger-ghost (stale). And forget the
  expiry-seal, and that ghost stays forever."</strong></p>
  <div class="code-block">Redis — প্রকল্পের ব্যবহার-মানচিত্র

তিন জলাশয়, এক নদী (settings):
  DB 0 — Django ক্যাশে (CACHES backend)
  DB 2 — Celery broker (দরজা ২৭)
  DB 3 — Celery result
  · আলাদা DB = বিস্ফোরণ-ব্যাস আলাদা: ক্যাশে-ফ্লাশে
    বাহক-স্রোত অক্ষত
  + SSE-ব্যাজ-চ্যানেলও রিডিসে (messaging, ADR-0026)

প্রকল্পের কলস-জাত (data types in use):
  string + TTL → ক্যাশে-কী (JSON-প্রতিধ্বনি)
  hash → বস্তু-ক্ষেত্র (ঐচ্ছিক; আংশিক-পড়া)
  set → অনলাইন-সদস্য/গণনা-ঝাঁক
  pub/sub → ঘণ্টা-পাখি: ব্যাজ-সংবাদ SSE-শ্রোতায়
    (চ্যানেল-নাম = ব্যবহারকারী-আইডি-জাত)

ক্যাশে-শৃঙ্খলা (সবচেয়ে জরুরি):
  ① কলস = ছায়া, সত্য = মাটি (MySQL)
    — কখনো কলসকে উৎস ধরো না
  ② প্রতিটি SET-এ মেয়াদ: cache.set(k, v,
    timeout=300) — TTL-বিহীন কী নিষেধ
  ③ লেখার-সময়ে-বাতিল: সেবা-স্তরে টাস্ক/সেভ
    শেষে cache.delete_many(সংশ্লিষ্ট-কী)
    — TTL শেষ-রক্ষা, বাতিল প্রথম-রেখা
  ④ কী-নামকরণ নামস্থানসহ:
    lp:<app>:<entity>:<id>[:<facet>]
    — বাতিল-তালিকা সহজ, গুপ্তচর-কী নয়

নমুনা-প্যাটার্ন (read-through):
  key = f'lp:invoices:batch:{id}:summary'
  hit = cache.get(key)
  if hit is None:
      hit = build_summary(id)     # মাটি থেকে
      cache.set(key, hit, 300)
  return hit
  আর লেখা-পথে: save_batch(...) শেষে
  cache.delete(key)              # ছায়া-বাতিল

pub/sub-নমুনা (SSE-ব্যাজ):
  প্রকাশ: redis.publish(f'user:{uid}:badge',
                       json.dumps({'n': count}))
  শ্রবণ: SSE-ভিউ subscribe → দুয়ারে পুশ
  · বার্তা স্থায়ী নয় — শ্রোতা না থাকলে হারায়
    (ঘণ্টা-নীতি: best-effort, ADR-003)

স্বাস্থ্য-টেবিল:
  মেমরি-বাঁধা (maxmemory+policy) দেখো —
    কলস-ঘর উপচে গেলে allkeys-lru ছায়া বিসর্জন দেয়
  INFO memory · slowlog — কোন কী স্থূল
  দীর্ঘ-কী-তালিকা (KEYS *) প্রোডাকশনে নিষেধ —
    SCAN ধরো</div>
  <div class="verse">হাফিযয — স্মৃতি-রক্ষক: "আমার রব কুরআনের হিফযকারী" নয় বরং মানুষের হিফয-ধারার আয়না — যা ধরে রাখা জরুরি তা ধরে, যা মেয়াদোত্তীর্ণ তা ছেড়ে দেয়। রাহেলার মোম-ছাপ সেই হিফযের শৃঙ্খলা: মনে রাখা এবং ভুলে যাওয়া — দুটোই নৈপুণ্য। যে স্মৃতি সব কিছু চিরকাল ধরে রাখে, সে স্মৃতি নয় — ভুতঘর; আর যা লেখার সাথে বদলায় না, সে স্মৃতি নয় — মিথ্যা।</div>
  <div class="diagram">
    <div class="diag-title">The Jar Room — Three Basins, Cache Discipline</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowJ28" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="12" width="530" height="30" rx="8" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="31" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="600">🏺 Redis — এক নদী, তিন জলাশয় (DB 0 · 2 · 3) + SSE-পাখি</text>
      <rect x="15" y="56" width="165" height="96" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="97" y="78" text-anchor="middle" fill="#5eead4" font-size="9" font-weight="700">ঢাউস ক্যাশে (DB 0)</text>
      <text x="97" y="94" text-anchor="middle" fill="#94a3b8" font-size="7">string+TTL — খোঁজ-প্রতিধ্বনি</text>
      <text x="97" y="110" text-anchor="middle" fill="#94a3b8" font-size="7">hash — বস্তু-ক্ষেত্র · set — ঝাঁক</text>
      <text x="97" y="128" text-anchor="middle" fill="#fbbf24" font-size="6.8">TTL-বিহীন কী নিষেধ</text>
      <text x="97" y="144" text-anchor="middle" fill="#64748b" font-size="6.5">কী: lp:&lt;app&gt;:&lt;entity&gt;:&lt;id&gt;</text>
      <rect x="200" y="56" width="160" height="96" rx="10" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="280" y="78" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="700">স্রোত (DB 2)</text>
      <text x="280" y="94" text-anchor="middle" fill="#94a3b8" font-size="7">Celery broker</text>
      <text x="280" y="110" text-anchor="middle" fill="#94a3b8" font-size="7">চিরুনি ভাসে — দরজা ২৭</text>
      <text x="280" y="130" text-anchor="middle" fill="#64748b" font-size="6.5">ক্যাশে-ফ্লাশে অক্ষত</text>
      <text x="280" y="144" text-anchor="middle" fill="#64748b" font-size="6.5">(বিস্ফোরণ-ব্যাস আলাদা)</text>
      <rect x="380" y="56" width="165" height="96" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="462" y="78" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">পাখি-ডাক (pub/sub)</text>
      <text x="462" y="94" text-anchor="middle" fill="#94a3b8" font-size="7">SSE ব্যাজ-চ্যানেল</text>
      <text x="462" y="110" text-anchor="middle" fill="#94a3b8" font-size="7">user:&lt;id&gt;:badge</text>
      <text x="462" y="128" text-anchor="middle" fill="#fbbf24" font-size="6.8">বার্তা স্থায়ী নয় — best-effort</text>
      <text x="462" y="144" text-anchor="middle" fill="#64748b" font-size="6.5">শ্রোতা-নেই মানে হারায়</text>
      <rect x="15" y="172" width="530" height="94" rx="10" fill="rgba(248,113,113,0.06)" stroke="#f87171" stroke-width="1.4"/>
      <text x="280" y="193" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">📜 ক্যাশে-শৃঙ্খলা — ছায়া-বিধান</text>
      <text x="280" y="211" text-anchor="middle" fill="#94a3b8" font-size="7.5">① সত্য মাটিতে, কলসে ছায়া · ② প্রতি SET-এ মেয়াদ (300s-ধরনের)</text>
      <text x="280" y="227" text-anchor="middle" fill="#94a3b8" font-size="7.5">③ লেখার-সময়ে-বাতিল: save→cache.delete(কী) — TTL শেষ-রক্ষা · ④ নামস্থান-কী</text>
      <text x="280" y="247" text-anchor="middle" fill="#94a3b8" font-size="7.5">স্বাস্থ্য: maxmemory+allkeys-lru · INFO memory · slowlog · KEYS নিষেধ, SCAN ধরো</text>
      <text x="280" y="262" text-anchor="middle" fill="#64748b" font-size="7">প্রেত-ছায়া (stale) = মালিক-বদলে-বিনা-বাতিল</text>
      <text x="280" y="292" text-anchor="middle" fill="#64748b" font-size="8.5">মনে রাখা নৈপুণ্য, ভুলে যাওয়াও নৈপুণ্য — মোম-ছাপ ছাড়া কলস ভুতঘর</text>
    </svg>
    <div class="diag-cap">তিন জলাশয়, চার শৃঙ্খলা: সত্য মাটিতে · মেয়াদ বাধ্য · লেখায় বাতিল · নামস্থান কী — কলস কেবল প্রতিধ্বনির ঘর।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>কলস-ফাঁদ:</strong> (১) TTL-ছাড়া <code>cache.set</code> — চিরস্থায়ী প্রেত-ছায়া। (২) ক্যাশে-কী-গঠন নামস্থানহীন — বাতিল-তালিকা অসম্ভব, এক ফ্লাশে সব হারানোর ভয়। (৩) pub/sub-কে স্থায়ী-সারি ভাবা — শ্রোতা না থাকলে বার্তা নদীতেই মিলিয়ে যায়; নিশ্চয়তা চাইলে সেটা Celery-সারির কাজ।</div></div>
  <div class="secret-box">🏺 কলসে ছায়া, সত্য মাটিতে — মেয়াদ বাধ্য, লেখায় বাতিল, কী-নামস্থানে; স্মৃতির শৃঙ্খলাই হিফয। / The jar holds echoes while the well holds truth: forced expiry, write-time invalidation, namespaced keys.</div>`,
  senior: {
    title: "Redis Card",
    body: `<p>বিন্যাস: DB0 Django-ক্যাশে · DB2 broker · DB3 result + SSE pub/sub (<code>user:&lt;id&gt;:badge</code>, best-effort) — আলাদা বিস্ফোরণ-ব্যাস। জাত: string+TTL (প্রতিধ্বনি), hash, set; কী <code>lp:&lt;app&gt;:&lt;entity&gt;:&lt;id&gt;</code>। শৃঙ্খলা: সত্য=MySQL; প্রতি SET-এ TTL; লেখার-সময়ে <code>cache.delete</code> (read-through নমুনা ওপরে); TTL শেষ-রক্ষা। স্বাস্থ্য: maxmemory+allkeys-lru, INFO, slowlog, SCAN (KEYS নিষেধ)। ফাঁদ: TTL-বিহীন কী, নামস্থানহীন কী, pub/sub-কে সারি ভাওয়া।</p>`
  }
});
