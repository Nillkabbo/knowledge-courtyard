// doors-23-24.js — The Ledger Craftsman (LedgerPilot deep-dive)

doors.push({
  num: 23,
  icon: "🧪",
  color: "#5eead4",
  name: "পরীক্ষকের দরবার",
  subtitle: "The Examiner's Court — Quality Gates & STATE.md",
  tech: "ruff+pytest+manage.py check / FE lint+type+test+build; STATE.md regen; wire-pins, schema-pins, coverage 87%",
  spirit: "ইমতিহান — imtihān (the test that purifies)",
  secret: "দাবির আগে দড়ি টানো — প্রতিটি গেট চলমান আউটপুটসহ; STATE.md না রিজেন করলে পরের সব ঠেলা আটকে যায়।",
  recall: {
    q: "apps/ বা frontend/src/tests/ ছুঁলে কোন ভুল সবচেয়ে সহজ?",
    qen: "Easiest mistake when touching apps/ or tests?",
    a: "STATE.md রিজেন ভুলে যাওয়া — merge-এ drift-check ফেল করে, পরবর্তী dev-পুশ ব্লক। একই PR-এ: python3 scripts/generate_state.py > .planning/STATE.md && git add -f।",
    aen: "Forgetting STATE.md regen — the drift check fails the merge and blocks later pushes. Regen in the same PR."
  },
  story: `<p class="scene-setting">রাজপথের শেষে পরীক্ষকের দরবার। প্রধান পরীক্ষক <strong>কাজি মুবারক</strong> — তাঁর টেবিলে পাঁচটা তালা-বাক্স,
  প্রতিটার গায়ে নাম: ছাঁচ-পরীক্ষা (lint), একক-পরীক্ষা (unit), চাবি-পরীক্ষা (type), দালান-পরীক্ষা (build), হিসাব-খাতা
  (STATE.md)। কারিগর কাজ শেষ করে দাবি করে — "হয়ে গেছে, কাজী!" মুবারক প্রশ্ন করেন একটাই — <strong>"দড়ি টেনেছ?"</strong> —
  মানে: ফলাফলের কথা বলো না, চলমান আউটপুট দেখাও। "পারবে ভাবি" মানে এখানে "পারেনি"। আর সবচেয়ে কড়া নিয়ম হিসাব-খাতার:
  শহরের যেকোনো কারখানার ইট সরালে (apps/) বা পরীক্ষা-গ্রামে ঘর বাড়ালে (src/tests/) — <strong>খাতার সংখ্যা সেদিনই
  আঁটো</strong>; না আঁটলে পরের যে-কেউ শহরের ফটকে (merge-এ) আটকে বসবে, রাগ করবে, কাজ থেমে থাকবে।</p>
  <p class="scene-setting en">The examiner's court at the road's end. Chief examiner <strong>Qazi Mubarak</strong>
  — five locked boxes on his table: lint, unit, type, build, and the ledger (STATE.md). A craftsman finishes
  and claims — "Done, Qazi!" Mubarak asks one thing — <strong>"Did you pull the rope?"</strong> — meaning:
  don't tell me your result, show me the running output. "I think it will pass" here means "it didn't." And
  the sternest rule guards the ledger: move a brick in any workshop (apps/) or add a house in the test village
  (src/tests/) — <strong>update the ledger's counts the same day</strong>; otherwise the next soul at the city
  gate (merge) gets stuck, angry, stopped.</p>
  <div class="code-block">পাঁচ তালা-বাক্স — দাবির আগে সব খোলো

ব্যাকএন্ড গেট (প্রতিটি টাচ করা অ্যাপে):
  ruff check .                      # pyproject [tool.ruff] — E4/E7/E9/F
  pytest                            # coverage floor 87% (pytest.ini) —
                                   # র‍্যাচেট উপরেই যায়, নিচে নয়
  python manage.py check
  python manage.py makemigrations --check --dry-run
    → "No changes detected" (বা migration কমিটেড)

ফ্রন্টএন্ড গেট:
  npm run lint          # eslint — FSD-বিচ্ছিন্নতা + ui-টোকেন আইন
  npm run type-check    # vue-tsc
  npm run test:run      # vitest (MSW)
  npm run build
  npm run check         # সবগুলোর সমষ্টি — সহজ পথ

হিসাব-খাতা (STATE.md — সবচেয়ে সহজে ভুলে যাওয়া):
  apps/ বা frontend/src/tests/ ছুঁলে একই PR-এ:
    python3 scripts/generate_state.py > .planning/STATE.md
    git add -f .planning/STATE.md
  নইলে: development-এ merge-এ drift-check ফেল →
    পরবর্তী সব dev-পুশ ব্লক (প্রমাণিত ব্যথা)

পিন-পরীক্ষার দুই জাত (চুক্তি-পাহারা):
  wire-contract pin — @extend_schema(responses)-এর প্রতিটি key
    বনাম প্রকৃত wire; রেফারেন্স: test_detail_wire_contract.py
    (PR #96-104 সুইপের ফসল — ১ প্রোডাকশন বাগ ধরা)
  schema-pin — প্রতিটি raw-SQL ব্লকের; textual assert
    (runtime-execute নয় — MySQL ট্রানজেকশন বিষ মারে, PR #74)
  পিন ভাঙলে টেস্টই আগে কাঁদে — প্রোডাকশন নয়

নীরবতা-পিন (আগের যুগের শিক্ষা):
  bare catch {} / (err as Error).message — এই প্যাটার্ন
  টেস্টে পিন করা; নতুন ইনস্ট্যান্স যোগ করলে পুরোনো পিন ভাঙবে

ডক-পরীক্ষা:
  scripts/verify_docs.py — ২৩ যান্ত্রিক দাবি (সংখ্যা/পথ)
  PR-এ সংখ্যা বদলালে সেটাও চালাও

ইউন্ট-পরীক্ষা (e2e):
  Playwright — PR-গেটে শুধু auth.spec; বাকি workflow_dispatch
  (gotcha #5) — ক্রস-স্ট্যাক PR-এ ম্যানুয়াল স্মোক নোট করো

শাখা-নীতি:
  feature → development (CI নেই — দ্রুত)
  promotion development → production (CI + deploy)
  main/production-এ সরাসরি পুশ কখনো নয়, অনুরোধ ছাড়া

স্থানীয় টেস্ট-এনভি (ডকার কম্পোজের বাইরে):
  DB_HOST=127.0.0.1 DB_PORT=3307
  REDIS_URL=redis://127.0.0.1:6379/0 .venv/bin/python -m pytest apps/&lt;domain&gt;</div>
  <div class="verse">ইমতিহান — "আমি অবশ্যই তোমাদের পরীক্ষা করব, ভয় ও ক্ষুধা দিয়ে... আর সুসংবাদ দাও ধৈর্যশীলদের" (২:১৫৫) এবং "মৃত্যুর আগে তোমাদের পরীক্ষা করা হবে কি না, ভেবে দেখেছ কি?" (২৩:৩০-এর ভাব)। কাজী মুবারকের দড়ি-টানা সেই ইমতিহানের রীতি: দাবি সস্তা, প্রমাণ মূল্যবান। যে কাজ পরীক্ষা ছাড়া জাহাজে ওঠে, সে সমুদ্রেই ডোবে — শহরে নয়।</div>
  <div class="diagram">
    <div class="diag-title">Five Boxes Before the Claim — Gate Checklist</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowQ22" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="30" y="15" width="230" height="120" rx="10" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="145" y="40" text-anchor="middle" fill="#5eead4" font-size="10.5" font-weight="700">🐍 ব্যাকএন্ড বাক্স</text>
      <text x="145" y="60" text-anchor="middle" fill="#94a3b8" font-size="8.5">ruff check .</text>
      <text x="145" y="76" text-anchor="middle" fill="#94a3b8" font-size="8.5">pytest (floor 87%)</text>
      <text x="145" y="92" text-anchor="middle" fill="#94a3b8" font-size="8.5">manage.py check</text>
      <text x="145" y="108" text-anchor="middle" fill="#94a3b8" font-size="8.5">makemigrations --check</text>
      <text x="145" y="126" text-anchor="middle" fill="#fbbf24" font-size="8">আউটপুট উদ্ধৃত করো — অনুমান নয়</text>
      <rect x="300" y="15" width="230" height="120" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="415" y="40" text-anchor="middle" fill="#a5b4fc" font-size="10.5" font-weight="700">📗 ফ্রন্টএন্ড বাক্স</text>
      <text x="415" y="60" text-anchor="middle" fill="#94a3b8" font-size="8.5">npm run lint</text>
      <text x="415" y="76" text-anchor="middle" fill="#94a3b8" font-size="8.5">npm run type-check</text>
      <text x="415" y="92" text-anchor="middle" fill="#94a3b8" font-size="8.5">npm run test:run</text>
      <text x="415" y="108" text-anchor="middle" fill="#94a3b8" font-size="8.5">npm run build</text>
      <text x="415" y="126" text-anchor="middle" fill="#818cf8" font-size="8">সমষ্টি: npm run check</text>
      <rect x="100" y="160" width="360" height="42" rx="10" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.6"/>
      <text x="280" y="178" text-anchor="middle" fill="#f87171" font-size="9.5" font-weight="700">📒 হিসাব-খাতা — STATE.md (সবচেয়ে ভুলে-যাওয়া)</text>
      <text x="280" y="194" text-anchor="middle" fill="#94a3b8" font-size="8">apps/ বা src/tests/ ছোঁয়া মাত্র: generate_state.py → git add -f — একই PR-এ, নইলে merge-আটকা</text>
      <rect x="100" y="218" width="360" height="42" rx="10" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="236" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="600">📌 পিন-দুয়ার: wire-contract (schema↔wire) + schema-pin (raw SQL, textual)</text>
      <text x="280" y="251" text-anchor="middle" fill="#94a3b8" font-size="8">+ নীরবতা-পিন (bare catch) + verify_docs.py (২৩ দাবি) + Playwright (auth মাত্র PR-গেটে)</text>
      <line x1="145" y1="135" x2="230" y2="158" stroke="#5eead4" stroke-width="1.4" marker-end="url(#arrowQ22)"/>
      <line x1="415" y1="135" x2="330" y2="158" stroke="#818cf8" stroke-width="1.4" marker-end="url(#arrowQ22)"/>
      <text x="280" y="285" text-anchor="middle" fill="#64748b" font-size="9">দড়ি টানো, তারপর দাবি — "পারবে ভাবি" মানে এখানে "পারেনি"</text>
    </svg>
    <div class="diag-cap">পাঁচ বাক্স খোলা বিনা কোনো দাবি গ্রহণীয় নয়; খাতা-বাক্স ভুললে শহরের ফটকে সবাই আটকে।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>প্রমাণিত ব্যথার তালিকা:</strong> (১) STATE.md-না-রিজেন → merge-ব্লক, পরবর্তী পুশ আটকা। (২) Schema-pin ছাড়া raw SQL → দুটি প্রোডাকশন-নীরব বাগ (PR #75: ACH-রপ্তানি ভাঙা; PR #84: চক্র ১০ দিন আটকা)। (৩) "টেস্ট পাস করবে ভেবেছিলাম" — কাজীর বিচারে সমান ব্যর্থতা। চলমান আউটপুটই সাক্ষ্য।</div></div>
  <div class="secret-box">🧪 দড়ি টানো, খাতা আঁটো, পিন বাঁধো — দাবি শেষ ধাপ, প্রথম নয়। / Pull the rope, regen the ledger, keep the pins: claims come last, with quoted output.</div>`,
  senior: {
    title: "Quality Gates Map",
    body: `<p>BE: <code>ruff check .</code> + <code>pytest</code> (floor 87%, ratchet-up) + <code>manage.py check</code> + <code>makemigrations --check --dry-run</code>। FE: lint + type-check + test:run + build (<code>npm run check</code>)। STATE.md: apps/ বা <code>frontend/src/tests/</code> টাচ মাত্র একই PR-এ regen + <code>git add -f</code>। পিন: wire-contract (responses↔wire), schema-pin (textual), নীরবতা-পিন (bare catch), verify_docs.py। E2E: PR-গেটে auth মাত্র। শাখা: feature→development→(promotion)→production; সরাসরি পুশ নিষেধ। লোকাল-env: DB 3307/Redis 6379। সব দাবি চলমান আউটপুটসহ।</p>`
  }
});

doors.push({
  num: 24,
  icon: "🏗️",
  color: "#f472b6",
  name: "ORM-এর ভাষা-ঘর",
  subtitle: "The ORM Language House — Django Models Deep-Dive",
  tech: "Meta options, managers, select_related/prefetch_related, F/Q expressions, annotations, migrations internals",
  spirit: "কালাম — kalām (the word: models speak, the database obeys)",
  secret: "মডেল-শ্রেণি মানে টেবিলের জন্ম-সনদ — ক্ষেত্র মানে স্তম্ভ, Meta মানে বংশলতিকা, Manager মানে দরবারের দাওয়াই।",
  recall: {
    q: "N+১ কোয়েরি-সমস্যা কীভাবে ধরা হয় এখানে?",
    qen: "How is the N+1 problem caught here?",
    a: "সম্পর্ক ছোঁলেই select_related (FK-জয়েন) বা prefetch_related (আলাদা IN-কোয়েরি) — টেস্টে assertNumQueries(<N>) পিন করে সংখ্যা বেঁধে দেওয়া।",
    aen: "select_related for FK joins, prefetch_related for IN-queries — and assertNumQueries pins the count in tests."
  },
  story: `<p class="scene-setting">ভাটার পেছনের গলিতে এক ভাষা-ঘর — মুনশি <strong>ওসমান</strong>-এর দফতর। শহরের প্রতিটি কারখানা তাঁর কাছে আসে দুই কাজে:
  <strong>জন্মসনদ লেখাতে</strong> (মডেল — টেবিলের অস্তিত্বের ঘোষণা) আর <strong>দাওয়া পাঠাতে</strong> (QuerySet — মাটির সাথে কথা বলার
  আবেদন)। ওসমানের নিয়ম কঠিন: সনদে প্রতিটি স্তম্ভের নাম-ধরন-বিধি স্পষ্ট লিখতে হবে, আর বংশলতিকা (Meta) — কার ঔরসজাত,
  টেবিলের নাম কী, কোন ক্রমে সাজবে। এক নতুন কারিগর এসে বলে — "আমি তো সরাসরি SQL লিখে দেব!" ওসমান চশমা খুলে বলেন —
  <strong>"লিখতে পারো। কিন্তু প্রতিটি সনদ-বহি আমার কাছে থাকে (migrations), যেন কাল কেউ খুঁজে পায় কে কখন কী বদলেছে।
  তোমার হাতের লেখা সেই বহিতে নেই — অতএব তোমার টেবিল শহরের ইতিহাসের বাইরে।"</strong></p>
  <p class="scene-setting en">In the lane behind the kiln stands a language-house — clerk <strong>Osman</strong>'s
  office. Every workshop comes to him for two things: <strong>birth-certificates</strong> (models — declaring a
  table's existence) and <strong>petitions</strong> (QuerySets — speaking to the earth). Osman's rules are
  strict: every column's name, type, and law written plainly on the certificate, plus the lineage (Meta) —
  parentage, table name, ordering. A newcomer says — "I'll just write raw SQL!" Osman removes his spectacles —
  <strong>"You may. But every certificate-book stays with me (migrations), so tomorrow anyone can find who
  changed what, when. Your handwriting isn't in that book — so your table lives outside the city's
  history."</strong></p>
  <div class="dialogue">কারিগর: "মুনশি সাহেব, আমার তালিকায় প্রতি সারিতে কোম্পানির নাম লাগে — আমি লুপ করে বারবার জিজ্ঞেস করছি।"
  <br>ওসমান: "শোনো — এক দাওয়ায় জোড়া লাগাও (select_related), মাটি একবারই খোলা হবে। বহু-সন্তানের বেলায় দুই দফায়
  (prefetch_related) — প্রথমে মূল তালিকা, তারপর সন্তানদের এক ঝাঁকে। <strong>প্রতি অতিথির জন্য আলাদা দরজা খোলা মানে
  মাটির দুর্বলতা নিমন্ত্রণ।</strong>"</div>
  <div class="code-block">apps/*/models.py — প্রকল্পের জীবন্ত নমুনাসহ

সনদ-লেখার বিধি (মডেল-ঘোষণা):
  class InvoiceSave(models.Model):
      report = models.ForeignKey(TimesheetReport,
          on_delete=models.PROTECT, db_column='report_id')
        # PROTECT = পিতা মুছলে সন্তান আটকাবে (CASCADE এখানে
        # বিরল — আর্থিক-সারি অনাথ হয় না)
      period_number = models.SmallIntegerField(choices=[(1,'P1'),(2,'P2')])
      class Meta:
          db_table = 'invoices'        # লিগেসি-নাম মানা
          constraints = [models.UniqueConstraint(
              fields=['report','period_year','period_month','period_number'],
              name='uq_invoice_batch')]   # চার-মাঠ পরিচয় DB-স্তরে
          ordering = ['-created_at']
  · auto_now_add (জন্ম) / auto_now (স্পর্শ)
  · db_column দিয়ে পুরনো স্তম্ভ-নাম আঁকড়ে থাকা
  · choices → get_FOO_display() ফ্রি
  · @property is_staff-ধর্ম (User-এ; কলাম নয়!)

দাওয়া-পাঠানোর শিল্প (QuerySet):
  জোড়া (FK/OneToOne — SQL JOIN):
    InvoiceSave.objects.select_related(
        'report', 'report__client')
  ঝাঁক (M2M/এক-থেকে-বহু — দ্বিতীয় IN-কোয়েরি):
    Client.objects.prefetch_related(
        'supervisors', 'bank_account')
  · .only()/.defer() — ভারী TEXT-কলাম পিছিয়ে রাখো
  · iterator(chunk_size=...) — মেমরি-বান্ধন এড়াও
    (নমুনা: রপ্তানি-সারি পড়া)

অভিব্যক্তি-ঘর:
  from django.db.models import F, Q, Count, Sum, Case, When
  · F('billed') — পাইথন-মান নয়, স্তম্ভের সাথে তুলনা
    (race-নিরাপদ বৃদ্ধি: .update(balance=F('balance')-x))
  · Q(status='current') | Q(status='old')
  · annotate(c=Count('lines', distinct=True))
  · Case/When → শর্তাধীন স্তম্ভ (min-check র‍্যাংকিং)

ট্রানজেকশন-নীতি (দরজা ৩০-এর সনদ):
  with transaction.atomic():
      select_for_update() আগে, লেখা পরে
  নমুনা: fsm.py — রুম-তালা ধরে ট্রানজিশন

মাইগ্রেশন-বহি (জন্ম-ইতিহাস):
  makemigrations → নতুন পাতা; sqlmigrate → পড়ে দেখো
  · প্রয়োগ-হওয়া পাতা কখনো সম্পাদনা নয়
  · ধ্বংসাত্মক? Expand→Migrate→Contract
  · ১১৭ পাতা জমেছে (accounts ২১, billing ১৯, clients ১৮)

N+১-পাহারা (টেস্টে):
  with self.assertNumQueries(3):
      resp = self.client.get(list_url)
  কোয়েরি-সংখ্যা পিন — নতুন লুপ-ফাঁদ ঢুকলে টেস্ট কাঁদে

লিগেসি-সমঝোতা:
  ts_* টেবিল unmanaged (managed=False) —
  পুরনো হাতের লেখা, বহিতে নেই; তাই raw SQL +
  schema-pin (দরজা ২৩)। ORM-টেবিল যতটা পারো এমন
  managed=False বাড়াও না — দুই ইতিহাস এক হয় না</div>
  <div class="verse">কালাম — বাক্যের শক্তি: "তিনি মানুষকে শেখালেন বয়ন" নয় বরং কলম ও জ্ঞান (৯৬:৪-৫)-এর ধারাবাহিকতায় — সৃষ্টি বাক্যে, বাক্য হিসাবে। ওসমানের সনদবহি সেই কালামের দপ্তর: প্রতিটি টেবিলের জন্ম-মৃত্যু-বিবাহ লেখা থাকে, যেন কেউ অস্বীকার করতে না পারে। যে শহরের মাটির কোনো ইতিহাস নেই, সেই শহরের হিসাবে বিশ্বাস হয় না।</div>
  <div class="diagram">
    <div class="diag-title">The Language House — Model → Migration → Query</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowO24" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="15" y="15" width="165" height="110" rx="10" fill="rgba(45,212,191,0.10)" stroke="#2dd4bf" stroke-width="1.5"/>
      <text x="97" y="38" text-anchor="middle" fill="#5eead4" font-size="10" font-weight="700">📜 জন্মসনদ</text>
      <text x="97" y="55" text-anchor="middle" fill="#94a3b8" font-size="8">models.Model শ্রেণি</text>
      <text x="97" y="72" text-anchor="middle" fill="#94a3b8" font-size="8">ক্ষেত্র = স্তম্ভ · Meta = বংশলতিকা</text>
      <text x="97" y="89" text-anchor="middle" fill="#94a3b8" font-size="8">PROTECT-FK · UniqueConstraint</text>
      <text x="97" y="108" text-anchor="middle" fill="#fbbf24" font-size="8">db_column-এ লিগেসি-নাম</text>
      <rect x="200" y="15" width="165" height="110" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="282" y="38" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">📖 বহি</text>
      <text x="282" y="55" text-anchor="middle" fill="#94a3b8" font-size="8">migrations/ (১১৭ পাতা)</text>
      <text x="282" y="72" text-anchor="middle" fill="#94a3b8" font-size="8">প্রয়োগ-হওয়া = অসম্পাদনীয়</text>
      <text x="282" y="89" text-anchor="middle" fill="#94a3b8" font-size="8">ধ্বংসাত্মক → Expand-Contract</text>
      <text x="282" y="108" text-anchor="middle" fill="#fbbf24" font-size="8">ts_* = unmanaged (বহিরাগত)</text>
      <rect x="385" y="15" width="160" height="110" rx="10" fill="rgba(129,140,248,0.10)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="465" y="38" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="700">📨 দাওয়া</text>
      <text x="465" y="55" text-anchor="middle" fill="#94a3b8" font-size="8">QuerySet — অলস-মূল্যায়ন</text>
      <text x="465" y="72" text-anchor="middle" fill="#94a3b8" font-size="8">select_related = JOIN</text>
      <text x="465" y="89" text-anchor="middle" fill="#94a3b8" font-size="8">prefetch_related = IN</text>
      <text x="465" y="108" text-anchor="middle" fill="#818cf8" font-size="8">F/Q/annotate/Case-When</text>
      <rect x="60" y="160" width="440" height="52" rx="10" fill="rgba(100,116,139,0.10)" stroke="#94a3b8" stroke-width="1.3"/>
      <text x="280" y="181" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="600">🔐 atomic() + select_for_update — তালা আগে, লেখা পরে</text>
      <text x="280" y="198" text-anchor="middle" fill="#94a3b8" font-size="8">assertNumQueries(৩) পিন — N+১ লুপ ঢুকলেই টেস্ট কাঁদে</text>
      <line x1="180" y1="70" x2="198" y2="70" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowO24)"/>
      <line x1="365" y1="70" x2="383" y2="70" stroke="#5eead4" stroke-width="1.6" marker-end="url(#arrowO24)"/>
      <line x1="280" y1="125" x2="280" y2="158" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3" marker-end="url(#arrowO24)"/>
      <text x="280" y="243" text-anchor="middle" fill="#64748b" font-size="8.5">সনদ লেখো → বহিতে পাতা যোগো → দাওয়া পাঠাও — ইতিহাসহীন টেবিল শহরের নয়</text>
      <text x="280" y="262" text-anchor="middle" fill="#64748b" font-size="8.5">প্রকল্প-প্রমাণ: fsm.py-র ট্রানজিশন-তালা · min-check-এর Case/When · রপ্তানির iterator()</text>
    </svg>
    <div class="diag-cap">মডেল → মাইগ্রেশন → কোয়েরি: তিন দফতর এক ভাষায়; যার ইতিহাস নেই তার স্তম্ভ অনাথ।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সবচেয়ে দামি ফাঁদ:</strong> (১) লুপের ভেতরে সম্পর্ক-অ্যাক্সেস (<code>inv.report.client</code>) — প্রতি সারিতে নতুন কোয়েরি; সবসময় <code>select_related</code> আগে। (২) <code>.update(F(...))</code> ছাড়া read-modify-write — দুই অনুরোধে একই ব্যালেন্স মুছে ফেলে (race)। (৩) unmanaged টেবিলে <code>migrate</code> ভরসা — ওর schema বহিরাগত, পিন-টেস্টই একমাত্র পাহারা।</div></div>
  <div class="secret-box">🏗️ সনদ-বহি-দাওয়া: মডেল ঘোষণা, মাইগ্রেশন ইতিহাস, কোয়েরি শিল্প — তিনটাই ORM-এর ভাষা; বাইরের হাতের লেখা ইতিহাস পায় না। / Declare, record, query: three offices of the ORM's language — history-less tables are orphans.</div>`,
  senior: {
    title: "Django ORM Card",
    body: `<p><strong>মডেল</strong>: স্পষ্ট ক্ষেত্র; <code>db_column</code> লিগেসি-নামে; FK-তে <code>PROTECT</code>; Meta-তে <code>UniqueConstraint</code> (InvoiceSave-এর ৪-মাঠ), ordering; <code>auto_now/add</code>; <code>@property</code>-ধর্ম (is_staff)। <strong>কোয়েরি</strong>: <code>select_related</code> (JOIN) বনাম <code>prefetch_related</code> (IN); <code>only/defer</code>; <code>iterator(chunk_size)</code> রপ্তানিতে; F/Q/Count/Sum/Case-When (min-check)। <strong>ট্রানজেকশন</strong>: atomic + select_for_update (fsm-নমুনা)। <strong>মাইগ্রেশন</strong>: এক-উদ্দেশ্য, অ-সম্পাদনীয়, ধ্বংসাত্মকে Expand→Contract; ১১৭ পাতা; <code>ts_*</code> unmanaged → raw SQL + schema-pin। <strong>পিন</strong>: assertNumQueries। ফাঁদ: লুপ-সম্পর্ক, read-modify-write, unmanaged-ভরসা।</p>`
  }
});
