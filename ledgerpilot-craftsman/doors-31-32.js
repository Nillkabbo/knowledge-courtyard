// doors-31-32.js — The Ledger Craftsman (LedgerPilot deep-dive)


doors.push({
  num: 31,
  icon: "📜",
  color: "#34d399",
  name: "নতুন দোকানের সনদপত্র",
  subtitle: "The New Shop Charter — Building a New Feature",
  tech: "Full recipe: branch → model → migration → serializer → view → url → test → schema → FE slice → handoff",
  spirit: "আমানত-প্রদান — discharging a trust end-to-end, no half-work",
  secret: "চুক্তি-প্রথম, পাতলা-ভিউ, পরীক্ষা-পাশে, খাতা-শেষে — একই ক্রম প্রতিবার, বাঁ দিক থেকে ডানে।",
  recall: {
    q: "নতুন ফিচারের প্রথম কাজ কোনটা — মডেল না ব্রাঞ্চ?",
    qen: "What comes first in a new feature — model or branch?",
    a: "ব্রাঞ্চ (development থেকে <type>/<slug>) + DoR চেকলিস্ট + চুক্তি-সিদ্ধান্ত (serializer-ই কী ফেরাবে)। তারপর BE, তারপর FE।",
    aen: "Branch + DoR + the contract decision first — then BE, then FE. Contract precedes consumption."
  },
  story: `<p class="scene-setting">রহিমা খাতুনের বাজার-ঘোরা শেষে সবাই যায় <strong>সনদ-দপ্তরে</strong> — মুহতাসিব কামালের চাচাতো ভাই,
  <strong>মুনশি ফয়েজ</strong>-এর টেবিলে। নতুন দোকানের আবেদন এলে ফয়েজ একটাই সনদপত্র বের করেন — পঁয়ত্রিশ বছরের পুরনো,
  মোড়ানো, আর <strong>কখনো বদলানো হয়নি</strong>। প্রথম পাতায় লেখা: "আবেদনকারী, আগে বসো। তোমার দোকানে কী বিক্রি হবে,
  কে কিনবে, কার মাল — <strong>এই তিন উত্তর লিখিত না আনলে কাগজ নিই নে</strong>।" তারপর ক্রম ধরে ধরে টিক দেন: জমির
  দলিল (ব্রাঞ্চ), ইটের তালিকা (মডেল+মাইগ্রেশন), দরজার নামফলক (serializer — চুক্তি!), রাস্তার ঠিকানা (url),
  দরবান (permission), পরীক্ষা-খাতা (টেস্ট), আর শেষে — <strong>উপরের তলার নকশা (FE) কেবল তখনই, যখন নিচের তলা
  চুক্তিবদ্ধ</strong>।</p>
  <p class="scene-setting en">After the market round, everyone goes to the <strong>charter office</strong> —
  <strong>Munshi Foyez</strong>, cousin of Kamal. A new shop application draws out one charter — thirty-five
  years old, rolled, <strong>never amended</strong>. First page: "Applicant, sit. What will you sell, who buys,
  whose goods — <strong>no written answers, no paperwork</strong>." Then he ticks in order: the land-deed
  (branch), the brick-list (model+migration), the name-plate (serializer — the contract!), the street address
  (url), the doorman (permission), the test-book — and last, <strong>the upper floor (FE) only once the ground
  floor is contracted</strong>.</p>
  <div class="code-block">নতুন ফিচারের সম্পূর্ণ রেসিপি — বাম থেকে ডানে, প্রতিবার

⓪ প্রস্তুতি (DoR — কোডের আগে)
  · চুক্তি সিদ্ধান্ত: serializer ঠিক কী কী ফেরাবে? (কাগজে লেখো)
  · ফাইল-মানচিত্র grep দিয়ে — স্মৃতি দিয়ে নয়
  · নতুন ডিপেন্ডেন্সি? নতুন কনভেনশন? → থামো, মানুষের অনুমতি
  · ব্রাঞ্চ: git checkout development && git pull
      && git checkout -b feat/<slug>   (বা fix/)

① ব্যাকএন্ড (চুক্তি-প্রথম)
  1. মডেল: apps/<domain>/models.py
     · Meta.db_table কেবল লিগেসি-টেবিলে
     · FSM থাকলে: ALLOWED_TRANSITIONS + can_transition_to
        (দরজা ৫-এর ছাঁচ)
  2. মাইগ্রেশন: python manage.py makemigrations <domain>
     · এক উদ্দেশ্য = এক মাইগ্রেশন
     · sqlmigrate পড়ে দেখো; ধ্বংসাত্মক? → থামো+এস্কালেট
  3. সিরিয়ালাইজার: apps/<domain>/serializers.py
     · Meta.fields স্পষ্ট (__all__ নিষেধ)
     · read_only: id/created_by/created_at অবশ্যই
     · denormalized: CharField(source='company.name', read_only=True)
  4. সেবা: apps/<domain>/services/<name>.py
     · সমতল ফাংশন; বহু-সারি লেখা → atomic
     · টাইপড ব্যতিক্রম: apps/<domain>/exceptions.py
       (Exception সাবক্লাস, APIException নয়)
     · ডোমেইন-লেখা বাইরে? → চক-কালি জোড়া (দরজা ১১)
     · নোটিফিকেশন? → handoffs.py + emit (দরজা ১৭)
     · রিজেক্ট-ওভাররাইড? → ForceImportOperation (দরজা ১৮)
  5. পারমিশন: apps/accounts/permissions.py
     · Is<Role>/Can<Action> ক্লাস; ইনলাইন রোল নিষেধ
  6. ভিউ: apps/<domain>/views.py (বা views/ প্যাকেজ)
     · APIView; permission_classes+throttle_scope+
       @extend_schema(tags=['<domain>']) প্রতি মেথডে
     · ভিউ পাতলা — যুক্তি সেবায়; ব্যতিক্রম ধরে Response
     · খাম: পাশের ২টি ভিউ পড়ে নকল
  7. URL: apps/<domain>/urls.py + ledgerpilot/urls.py-এ মাউন্ট
  8. টেস্ট: apps/<domain>/tests/test_<name>.py
     · @pytest.mark.django_db + auth_client_as(role)
     · কভার: happy path + প্রতিটি রোলের 200/403/404 +
       যাচাই-ত্রুটি + এজ-কেস
     · responses ঘোষণা করলে → wire-contract পিন (বাধ্যতামূলক)
     · raw SQL লিখলে → schema-pin (textual)

② গেট (দরজা ৩২-এর পাঁচ বাক্স)
  ruff check . && pytest apps/<domain> && manage.py check
  && makemigrations --check --dry-run
  অথবা: dump_api_types + git add (schema-স্ন্যাপশট)

③ ফ্রন্টএন্ড (চুক্তির পরে — সবসময়)
  1. স্লাইস: frontend/src/features/<name>/
     components/ views/ services/ composables/ types/ routes.ts
  2. টাইপ: নামডাকা স্কিমা → components['schemas'][...]
     alias; হাতে লিখলে // verified against backend on
     YYYY-MM-DD টিকা বাধ্যতামূলক
  3. সেবা: services/<name>Service.ts — অবজেক্ট-লিটারেল
     এক্সপোর্ট; সব HTTP apiClient দিয়ে (axios নিষেধ)
  4. ভিউ: views/<Name>View.vue — script setup TS;
     প্রিমিটিভ আগে খোঁজো; Skeleton+toast জোড়া
  5. কম্পোজেবল: মিউটেশন? → useMutationAction
     (দরজা ১২); ড্রাই-রান-লেখা? → usePreviewConfirmFlow
     (দরজা ১১); ফর্ম? → refs+useFormErrors
  6. স্টোর (যদি সত্যিই শেয়ার্ড-স্টেট হয়):
     defineStore('<id>', () => {...}) — Composition
  7. নেভিগেশন: app/registry/components.ts-এ key
     (FE-ডিপ্লয়) → তারপর BE RouteEntry/MenuItem সারি
     (দরজা ১৭) + রোল/ফিচার-কী (দরজা ১৩)
  8. টেস্ট: src/tests/features/<name>/... মিরর-পথ;
     MSW server.use(); loading/empty/populated/error কভার

④ গেট (FE)
  npm run lint && npm run type-check && npm run test:run
  && npm run build

⑤ খাতা ও হস্তান্তর
  · apps/ বা src/tests/ ছোঁয়া? → STATE.md রিজেন একই PR-এ
  · চুক্তি বদলেছে (field/endpoint/খাম)? → handoff YAML
    মূল বিধান মেনে, তারপর থামো
  · Conventional Commits: feat(<scope>): ... — এক যুক্তি=এক কমিট
  · PR → development; মার্জ মানুষের হাতে

সময়ের মোড়াবনি (কোন কাজ কার পরে):
  চুক্তি → মডেল → মাইগ্রেশন → serializer → সেবা →
  পারমিশন → ভিউ → URL → টেস্ট → গেট → schema-dump →
  FE-টাইপ → সেবা → ভিউ/কম্পোজেবল → নেভ-রেজিস্ট্রি →
  BE-ম্যানিফেস্ট → FE-টেস্ট → গেট → STATE.md → handoff</div>
  <div class="verse">আমানত প্রদান — "নিশ্চয়ই আল্লাহ তোমাদের আদেশ দেন আমানত স্বত্বাধিকারীদের কাছে ফিরিয়ে দিতে" (৪:৫৮)। নতুন ফিচার এক আমানত: ব্যবহারকারীর কাছে পৌঁছানোর আগে এর অনেক মালিক — ডেটার, চুক্তির, পাহারার, পরীক্ষার। ফয়েজের সনদ সেই ফিরিয়ে-দেওয়ার তালিকা: কোনো মালিকের হক অসম্পূর্ণ রেখে দোকান খোলা নিষেধ। অর্ধেক-কাজ = অর্ধেক-আমানত = পূর্ণ বিশ্বাসভঙ্গ।</div>
  <div class="diagram">
    <div class="diag-title">The Charter Path — New Feature, Left to Right</div>
    <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrowR22" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#5eead4"/></marker></defs>
      <rect x="30" y="12" width="500" height="36" rx="8" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1.6"/>
      <text x="280" y="30" text-anchor="middle" fill="#fcd34d" font-size="9.5" font-weight="700">⓪ DoR: চুক্তি · grep-মানচিত্র · অনুমতি · ব্রাঞ্চ feat/&lt;slug&gt;</text>
      <text x="280" y="42" text-anchor="middle" fill="#94a3b8" font-size="8">(development থেকে; fix/ বাগে)</text>
      <rect x="15" y="62" width="253" height="150" rx="10" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1.6"/>
      <text x="141" y="84" text-anchor="middle" fill="#5eead4" font-size="10.5" font-weight="700">① ব্যাকএন্ড (চুক্তি-প্রথম)</text>
      <text x="141" y="104" text-anchor="middle" fill="#94a3b8" font-size="8">1. models.py (FSM-ছাঁচ দরজা ৫)</text>
      <text x="141" y="118" text-anchor="middle" fill="#94a3b8" font-size="8">2. makemigrations — এক-উদ্দেশ্য</text>
      <text x="141" y="132" text-anchor="middle" fill="#94a3b8" font-size="8">3. serializers.py — ★ চুক্তি</text>
      <text x="141" y="146" text-anchor="middle" fill="#94a3b8" font-size="8">4. services/ + exceptions.py</text>
      <text x="141" y="160" text-anchor="middle" fill="#94a3b8" font-size="8">5. permissions.py (Is&lt;Role&gt;)</text>
      <text x="141" y="174" text-anchor="middle" fill="#94a3b8" font-size="8">6. views.py — পাতলা + @extend_schema</text>
      <text x="141" y="188" text-anchor="middle" fill="#94a3b8" font-size="8">7. urls.py + মাউন্ট</text>
      <text x="141" y="202" text-anchor="middle" fill="#94a3b8" font-size="8">8. tests/ — রোল×ফল + wire/schema-পিন</text>
      <rect x="292" y="62" width="253" height="150" rx="10" fill="rgba(129,140,248,0.08)" stroke="#818cf8" stroke-width="1.6"/>
      <text x="418" y="84" text-anchor="middle" fill="#a5b4fc" font-size="10.5" font-weight="700">③ ফ্রন্টএন্ড (চুক্তির পরে)</text>
      <text x="418" y="104" text-anchor="middle" fill="#94a3b8" font-size="8">1. features/&lt;name&gt;/ স্লাইস</text>
      <text x="418" y="118" text-anchor="middle" fill="#94a3b8" font-size="8">2. টাইপ: schemas alias + টিকা</text>
      <text x="418" y="132" text-anchor="middle" fill="#94a3b8" font-size="8">3. service — apiClient-মাত্র</text>
      <text x="418" y="146" text-anchor="middle" fill="#94a3b8" font-size="8">4. View — প্রিমিটিভ আগে + Skeleton/toast</text>
      <text x="418" y="160" text-anchor="middle" fill="#94a3b8" font-size="8">5. composable — Mutation/PreviewConfirm</text>
      <text x="418" y="174" text-anchor="middle" fill="#94a3b8" font-size="8">6. স্টোর কেবল সত্যিকার শেয়ার্ডে</text>
      <text x="418" y="188" text-anchor="middle" fill="#94a3b8" font-size="8">7. registry-key → পরে BE ম্যানিফেস্ট</text>
      <text x="418" y="202" text-anchor="middle" fill="#94a3b8" font-size="8">8. tests/ মিরর-পথ + MSW</text>
      <rect x="120" y="228" width="320" height="32" rx="8" fill="rgba(248,113,113,0.08)" stroke="#f87171" stroke-width="1.4"/>
      <text x="280" y="248" text-anchor="middle" fill="#f87171" font-size="8.5" font-weight="600">②④ গেট: ruff+pytest+check · lint+type+test+build (দরজা ২৩)</text>
      <rect x="120" y="272" width="320" height="32" rx="8" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.5"/>
      <text x="280" y="292" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="600">⑤ STATE.md রিজেন (একই PR) · handoff YAML · Conventional কমিট</text>
      <line x1="280" y1="48" x2="280" y2="60" stroke="#5eead4" stroke-width="1.8" marker-end="url(#arrowR22)"/>
      <line x1="268" y1="137" x2="292" y2="137" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#arrowR22)"/>
      <text x="280" y="128" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="700">চুক্তি যায়</text>
      <line x1="280" y1="212" x2="280" y2="226" stroke="#f87171" stroke-width="1.4" marker-end="url(#arrowR22)"/>
      <line x1="280" y1="260" x2="280" y2="270" stroke="#5eead4" stroke-width="1.4" marker-end="url(#arrowR22)"/>
      <text x="280" y="335" text-anchor="middle" fill="#64748b" font-size="9">ফয়েজের ক্রম অলঙ্ঘনীয়: নিচের তলা চুক্তিবদ্ধ না হলে উপরের তলার ইট নেই</text>
      <text x="280" y="350" text-anchor="middle" fill="#64748b" font-size="8.5">থামার বিধান: নতুন ডিপেন্সি · ধ্বংসাত্মক মাইগ্রেশন · settings-ছোঁয়া · csrf_exempt — মানুষের অনুমতি ছাড়া নয়</text>
    </svg>
    <div class="diag-cap">চুক্তি-প্রথম, FE-শেষে, গেট-মাঝে, খাতা-সবশেষে — প্রতিটি ধাপে থামার বিধান লেখা।</div>
  </div>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সবচেয়ে দামি থামা-তালিকা (AGENT_PROTOCOL):</strong> নতুন ডিপেন্ডেন্সি (requirements/package.json) · <code>settings/*.py</code> ছোঁয়া · <code>permissions.py</code>-এ নতুন রোল · <code>csrf_exempt</code> · ধ্বংসাত্মক মাইগ্রেশন · পাবলিক endpoint ভাঙা · Xero OAuth/webhook চুক্তি। এগুলো নিজে থেকে করা নিষেধ — আগে জিজ্ঞেস।</div></div>
  <div class="checklist">
    <li>⓪ চুক্তি কাগজে লিখেছি? ব্রাঞ্চ development-থেকে?</li>
    <li>① মডেল→মাইগ্রেশন→serializer→সেবা→পারমিশন→ভিউ→URL→টেস্ট — ক্রম রেখেছি?</li>
    <li>টেস্টে প্রতিটি রোলের 200/403/404 আছে? wire/schema-পিন হয়েছে?</li>
    <li>② BE-গেট চলমান আউটপুটসহ পাস? schema-dump কমিটেড?</li>
    <li>③ FE স্লাইস সম্পূর্ণ? টাইপে টিকা আছে? নেভ = key আগে, ম্যানিফেস্ট পরে?</li>
    <li>④ FE-গেট চারটিই পাস?</li>
    <li>⑤ STATE.md রিজেন? handoff YAML লিখেছি (চুক্তি বদলেছে)?</li>
    <li>কমিট Conventional? PR development-এ? মার্জ মানুষের হাতে?</li>
  </div>
  <div class="secret-box">📜 চুক্তি-প্রথম, পাতলা-ভিউ, পরীক্ষা-পাশে, FE-শেষে, খাতা-সর্বশেষে — ক্রম নিজেই নিরাপত্তা। / The order is the safety: contract first, thin views, tests beside, FE last, ledger last of all.</div>`,
  senior: {
    title: "New-Feature Recipe",
    body: `<p><strong>⓪ DoR:</strong> চুক্তি লিখিত + grep-মানচিত্র + ডিপ-অনুমতি + <code>feat|fix/&lt;slug&gt;</code> (development-ভিত্তিক)। <strong>① BE:</strong> models(FSM-ছাঁচ) → makemigrations(এক-উদ্দেশ্য; ধ্বংসাত্মক=থামো) → serializers(স্পষ্ট fields; read_only) → services(+exceptions; atomic; চক-কালি/emit/ForceImport প্রযোজ্য দরজায়) → permissions(Is&lt;Role&gt;) → views(APIView+schema+throttle; খাম=প্রতিবেশী-নকল) → urls → tests(রোল-ম্যাট্রিক্স+wire/schema-পিন)। <strong>②</strong> ruff+pytest+check+migrations-check (+dump_api_types)। <strong>③ FE:</strong> স্লাইস → টাইপ(alias+টিকা) → service(apiClient) → View(প্রিমিটিভ+Skeleton/toast) → composable(Mutation/PreviewConfirm) → স্টোর(ঐচ্ছিক) → registry-key → BE ম্যানিফেস্ট → tests(MSW)। <strong>④</strong> FE-গেট ×৪। <strong>⑤</strong> STATE.md রিজেন + handoff YAML + Conventional কমিট + PR→development। থামা-তালিকা: ডিপ/settings/রোল/csrf/ধ্বংসাত্মক/পাবলিক-ভাঙা/Xero।</p>`
  }
});


doors.push({
  num: 32,
  icon: "🧰",
  color: "#34d399",
  name: "যন্ত্রপাতির দলিল",
  subtitle: "The Tool Manifest — Pattern Selector",
  tech: "Which pattern for which job: decision table mapping task-shapes to the 10 reusable patterns + file paths",
  spirit: "হিকমাহ — hikmah (the right tool from the right shelf, at the right time)",
  secret: "কাজের আকৃতি চিনলে যন্ত্র নিজে বসে যায় — নতুন বানানোর আগে তাকে দেখো, প্রতিবার।",
  recall: {
    q: "নতুন একটা 'operator confirm করে বাইরের সিস্টেমে লেখা' — কোন যন্ত্র?",
    qen: "A new operator-confirmed write to an external system — which tool?",
    a: "দুই যন্ত্র জোড়ায়: BE-তে plan_*/commit_* + FE-তে usePreviewConfirmFlow-অ্যাডাপ্টার (দরজা ১১)।",
    aen: "The pair: plan_*/commit_* on the BE plus a usePreviewConfirmFlow adapter on the FE."
  },
  story: `<p class="scene-setting">ফয়েজের সনদ পেয়ে যখন কারিগর কাজে নামে, তখন প্রথমে যায় <strong>যন্ত্রশালায়</strong> — রহিমা খাতুনের
  বড় ভাই, <strong>কারিগর সোবহান</strong>-এর ঘরে। দেয়ালে দশটা তাক, প্রতিটার গায়ে ছবি আর নিয়ম-লেখা পিতলের ফলক।
  সোবহান নতুন শাগিরদকে শেখান একটাই কথা — <strong>"হাত বাড়াও আগে চোখ দিয়ে, না পেলে গড়ো, না পেলে জিজ্ঞেস করো।"</strong>
  এক শাগিরদ এসে বলে — "স্যার, দুইবার ক্লিক আটকাতে হবে!" সোবহান না শুনেই চতুর্থ তাক দেখান — রুবিনা আপার তালার
  ছবি। "কাজের আকৃতি বলো, যন্ত্র আমি দেব। আকৃতি না বলে যন্ত্র চাইলে তুমি হাতুড়ি দিয়ে কাপড় কাটবে।"</p>
  <p class="scene-setting en">Charter in hand, the craftsman first visits the <strong>tool-hall</strong> —
  <strong>Karigor Sobhan</strong>, Rahima's elder brother. Ten shelves, each with a picture and a brass rule.
  He teaches apprentices one line: <strong>"Reach with your eyes first; if it's not there, build; if unsure,
  ask."</strong> An apprentice bursts in — "Sir, I must block double-clicks!" Sobhan points at shelf four —
  Rehana's latch. "Tell me the job's SHAPE, I'll give the tool. Ask for a tool without a shape and you'll cut
  cloth with a hammer."</p>
  <div class="code-block">কাজের আকৃতি → যন্ত্র (১০ তাক + ফাইল-ঠিকানা)

আকৃতি: "অপারেটর confirm করে বাইরে লেখা (Xero/ব্যাংক)"
  → তাক ১৭: BE plan_*/commit_* জোড়া + FE usePreviewConfirmFlow
    ফাইল: apps/invoices/services/xero_invoice_push.py (নমুনা)
         frontend/src/shared/composables/usePreviewConfirmFlow.ts
    অ্যাডাপ্টার-নমুনা: features/invoices/composables/useInvoicePush.ts

আকৃতি: "এক-ক্লিক ডোমেস্টিক মিউটেশন (transition/assign/delete)"
  → তাক ১৮: useMutationAction
    ফাইল: shared/composables/useMutationAction.ts

আকৃতি: "সত্তার স্ট্যাটাস-গ্রাফ আছে"
  → তাক ৮: FSM সার্ভিস-ছাঁচ
    ফাইল: apps/invoices/services/fsm.py (ক্যাননিক্যাল)
    ACTION_TO_STATUS + টাইপড এক্সসেপশন + audit লাইন

আকৃতি: "রিজেক্টেড সারি ম্যানুয়ালি ফিরিয়ে আনা"
  → তাক ১৮: ForceImportOperation CM
    ফাইল: apps/core/services/force_import.py
    (audit_model+parent_model প্যারামিটারাইজড)

আকৃতি: "কাজের ধাপে কাউকে জানাতে হবে"
  → তাক ১৭: নিজ-অ্যাপে handoffs.py + emit()
    ফাইল: apps/notifications/emit.py + apps/invoices/handoffs.py
    ⚠ কেন্দ্রীয় ক্যাটালগ নিষেধ (circular-import)

আকৃতি: "নতুন endpoint-এ কে ঢুকবে ঠিক করা"
  → তাক ১৬: permissions.py-এ ক্লাস + (পাতার গেট হলে)
    role_features/user_has_feature — capability_feature_map সেতু
    ফাইল: apps/accounts/permissions.py

আকৃতি: "প্রতিদিন/নির্দিষ্ট সময়ে স্বয়ংক্রিয় কাজ"
  → নতুন যন্ত্র নয় — Celery beat: apps/<domain>/tasks.py
    @shared_task + CELERY_BEAT_SCHEDULE (settings) — idempotent
    (দরজা ৩৩)

আকৃতি: "তালিকা দেখাতে হবে পেজ-করা"
  → PageNumberPagination (50) → {rows,total,page,...} খাম
    invoices/clients ভিউ থেকে নকল

আকৃতি: "ব্যাকগ্রাউন্ড-এ ভারী কাজ, ফল পরে"
  → @shared_task + .delay() — Redis broker দিয়ে
    (web-প্রসেসেও broker-env লাগে #1190 শিক্ষা)

আকৃতি: "বাইরের পরিবর্তন শুনতে হবে"
  → webhook + HMAC (xero/webhook.py নমুনা);
    নতুন সোর্স হলে সিগনেচার-যাচাই বাধ্যতামূলক

সোবহানের তিন নিষেধ:
  ১. তাক না দেখে নতুন যন্ত্র গড়ো না (duplicate = ঋণ)
  ২. যন্ত্র ভাঙলে (স্কিল stale) সেদিনই মেরামত — patch করো
  ৩. আকৃতি দ্ব্যর্থ? জিজ্ঞেস করো — হাতুড়ি-কাপড় নয়</div>
  <div class="verse">হিকমাহ — "যাকে হিকমাহ দেওয়া হয়েছে তাকে প্রচুর কল্যাণ দেওয়া হয়েছে" (২:২৬৯)। হিকমাহ জ্ঞানের তাকে সাজানো নয়, কাজ দেখে সঠিক তাক চেনা। সোবহানের ফলকগুলো সেই হিকমাহের ইট: আকৃতি আগে, যন্ত্র পরে — কারণ সরঞ্জাম ভুল হলে কুশ্রী পরিশ্রমও অভিশাপ।</div>
  <div class="diagram">
    <div class="diag-title">Job Shape → Shelf — the Selector</div>
    <svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="530" height="300" rx="12" fill="rgba(52,211,153,0.05)" stroke="#34d399" stroke-width="1.3"/>
      <text x="280" y="40" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="700">বাঁ কলাম: কাজের আকৃতি · ডান: তাক-নম্বর (দরজা) + ফাইল</text>
      <text x="40" y="70" fill="#94a3b8" font-size="8.5">বাইরের সিস্টেমে confirm-করা লেখা</text>
      <text x="530" y="70" text-anchor="end" fill="#6ee7b7" font-size="8.5">দরজা ১১ · xero_*_push.py + usePreviewConfirmFlow</text>
      <text x="40" y="96" fill="#94a3b8" font-size="8.5">এক-ক্লিক মিউটেশন, ডাবল-ক্লিক-ভয়</text>
      <text x="530" y="96" text-anchor="end" fill="#6ee7b7" font-size="8.5">দরজা ১২ · useMutationAction</text>
      <text x="40" y="122" fill="#94a3b8" font-size="8.5">স্ট্যাটাস-গ্রাফ বা লক+অডিট-ট্রানজিশন</text>
      <text x="530" y="122" text-anchor="end" fill="#6ee7b7" font-size="8.5">দরজা ৫ · services/fsm.py ছাঁচ</text>
      <text x="40" y="148" fill="#94a3b8" font-size="8.5">রিজেক্টেড সারির ম্যানুয়াল-ফেরত</text>
      <text x="530" y="148" text-anchor="end" fill="#6ee7b7" font-size="8.5">দরজা ১৫ · core force_import.py CM</text>
      <text x="40" y="174" fill="#94a3b8" font-size="8.5">ধাপে কাউকে জানানো (fixed কপি/রোল)</text>
      <text x="530" y="174" text-anchor="end" fill="#6ee7b7" font-size="8.5">দরজা ১৪ · handoffs.py + emit</text>
      <text x="40" y="200" fill="#94a3b8" font-size="8.5">endpoint-এ প্রবেশ-নিয়ন্ত্রণ</text>
      <text x="530" y="200" text-anchor="end" fill="#6ee7b7" font-size="8.5">দরজা ১৩ · permissions.py + feature-key</text>
      <text x="40" y="226" fill="#94a3b8" font-size="8.5">নির্দিষ্ট সময়ের স্বয়ংক্রিয় কাজ</text>
      <text x="530" y="226" text-anchor="end" fill="#6ee7b7" font-size="8.5">দরজা ২৪ · tasks.py + beat</text>
      <text x="40" y="252" fill="#94a3b8" font-size="8.5">পেজ-করা তালিকা</text>
      <text x="530" y="252" text-anchor="end" fill="#6ee7b7" font-size="8.5">Pagination ৫০ + rows-খাম</text>
      <text x="40" y="278" fill="#94a3b8" font-size="8.5">ভারী/স্থগিত কাজ</text>
      <text x="530" y="278" text-anchor="end" fill="#6ee7b7" font-size="8.5">দরজা ২৪ · shared_task + delay</text>
      <text x="40" y="304" fill="#94a3b8" font-size="8.5">বাইরের ঘটনা শোনা</text>
      <text x="530" y="304" text-anchor="end" fill="#6ee7b7" font-size="8.5">webhook + HMAC (xero নমুনা)</text>
      <line x1="290" y1="60" x2="290" y2="308" stroke="#34d399" stroke-width="0.8" stroke-dasharray="3 4" opacity="0.4"/>
    </svg>
    <div class="diag-cap">আকৃতি চেনো → তাক থেকে নাও → ফাইল-নমুনা থেকে নকল; তাকে নেই এমন আকৃতি প্রথমবার? সোবহানের কাছে যাও।</div>
  </div>
  <div class="callout tip"><span class="co-icon">🔌</span><div><strong>এই বইয়ের বাইরের মানচিত্র:</strong> প্যাটার্ন-ফাইলের পূর্ণ তালিকা <code>.planning/PATTERNS.md</code>-এ, কাজ→skill-নির্বাচক <code>.planning/SKILLS-GUIDE.md</code>-এ, DoR/DoD-বিধান <code>.claude/AGENT_PROTOCOL.md</code>-এ। বই = বোঝার ঘর; ওই তিনটি = কাজের হাতিয়ার।</div></div>
  <div class="secret-box">🧰 আকৃতি আগে, যন্ত্র পরে — তাক না দেখে গড়া যন্ত্র ঋণ, সম্পদ নয়। / Match the job's shape to the shelf before forging anything new.</div>`,
  senior: {
    title: "Pattern Selector",
    body: `<p>আকৃতি→যন্ত্র: বাইরের-লেখা→plan/commit+PreviewConfirm(১১) · এক-ক্লিক→MutationAction(১২) · স্ট্যাটাস-গ্রাফ→FSM-ছাঁচ(৫) · রিজেক্ট-ফেরত→ForceImport-CM(১৫) · জানানো→handoffs+emit(১৪) · প্রবেশ→permissions+feature(১৩) · সময়-নির্ধারিত→tasks+beat(২৪) · তালিকা→Pagination+rows-খাম · ভারী-কাজ→shared_task+delay · বাইরের-ঘটনা→webhook+HMAC। প্রতিটির ফাইল-নমুনা ওপরের তালিকায়। তিন নিষেধ: duplicate নয়, stale-স্কিল সেদিনই patch, দ্ব্যর্থ হলে জিজ্ঞেস। বাইরের মানচিত্র: PATTERNS.md + SKILLS-GUIDE.md + AGENT_PROTOCOL.md।</p>`
  }
});
