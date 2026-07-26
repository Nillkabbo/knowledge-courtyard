// ═══════════════════════════════════════════
// DOOR 6 — The Chaos Monkey (Property-Based Testing)
// ═══════════════════════════════════════════
doors.push({
  num: 6,
  icon: "🎲",
  color: "#f97316",
  tagline: "বিশৃঙ্খল বানর — The Chaos Monkey",
  name: "The Chaos Monkey",
  secret: "Property-based testing: একটা property দাও, Hypothesis ১০০০টা random input চেষ্টা করবে।",
  story: `<p class="scene-setting">তুমি ১০টা test case লেখো — <code>test_add(1,2)==3</code>, <code>test_add(0,0)==0</code>। কিন্তু edge case miss করছো। Property-based testing বলে — একটা property লেখো: <code>add(a,b) == add(b,a)</code> (commutative)। Hypothesis নিজে ১০০০টা random input চেষ্টা করবে — negative, zero, overflow, Unicode! বাগ খুঁজে বের করলে সবচেয়ে ছোট failing case এ shrink করে।</p>

<div class="code-block">Property-Based Testing — Hypothesis দিয়ে 100টা random input:

EXAMPLE-BASED (সীমিত — শুধু ৩টা case):
  def test_add():
      assert add(1, 2) == 3
      assert add(0, 0) == 0
      assert add(-1, 1) == 0
  # edge case miss করছি — overflow? negative? float?

PROPERTY-BASED (Hypothesis — 100+ random input, auto shrink):
  from hypothesis import given, strategies as st

  @given(a=st.decimals(min_value=-1e6, max_value=1e6),
         b=st.decimals(min_value=-1e6, max_value=1e6))
  def test_add_is_commutative(a, b):
      # property: add(a,b) == add(b,a) — সব input এ সত্য হবে
      assert add(a, b) == add(b, a)

  $ pytest tests/test_add_property.py -q
  Falsifying example: test_add_is_commutative(
      a=Decimal('0.1'), b=Decimal('0.2'))
  >   assert add(a, b) == add(b, a)
  E   assert 0.30000000000000004 != 0.30000000000000004
  # 🚨 float precision bug! Hypothesis খুঁজে বের করল।

 shrinking — minimal failing case খোঁজা:
  $ pytest tests/test_add_property.py -q --hypothesis-show-statistics
  Falsifying example: a=Decimal('999999999999'), b=Decimal('-1')
  # Hypothesis shrink করল: 999999999999 → 1 → 0 → -1 (minimal!)

MONEY CONSERVATION property (LedgerPilot):
  @given(amount=st.decimals(min_value=Decimal('0.01'), max_value=Decimal('1e9')))
  def test_transfer_conerves_money(amount):
      db = InMemoryAccountDB()
      db.save(Account(id=1, balance=amount))
      db.save(Account(id=2, balance=0))
      transfer(db, from_id=1, to_id=2, amount=amount)
      # invariant: টাকা তৈরি বা ধ্বংস হয়নি
      assert db.get(1).balance + db.get(2).balance == amount

  $ pytest tests/test_transfer_property.py --hypothesis-seed=0 -q
  1 passed in 0.84s
    - 100 passing examples, 0 failing examples
    - Typical run: ~100 random inputs tested automatically</div>

<div class="dialogue"><strong>হাইপোথিসিস ইঞ্জিনিয়ার:</strong> Property-based testing হল testing এর paradigm shift। তুমি আর ১০টা example লেখো না — একটা property লেখো। 'transfer(a→b) কখনো টাকা তৈরি বা ধ্বংস করবে না।' তারপর Hypothesis কে দাও। সে ১০০টা random input generate করবে — Decimal('0.001'), Decimal('-5000'), Decimal('999999999999')! বাগ খুঁজে বের করলে shrinking শুরু করে — সবচেয়ে ছোট failing case বের করে। 'transfer(-1) করলে balance বেড়ে যায়!' LedgerPilot এ: Hypothesis দিয়ে financial calculation গুলো test করো — money conservation, rounding, negative amounts।</div>`,
  recall: [
    { q: "Property-based testing কী?", a: "Example-based এর বদলে property লেখো — invariant যা সব valid input এ সত্য। Hypothesis ১০০+ random input generate করে property check করে। Shrinking দিয়ে minimal failing case খুঁজে বের করে।" },
    { q: "Hypothesis shrinking কী?", a: "বাগ খুঁজে বের করলে Hypothesis input ছোট করতে থাকে — সবচেয়ে minimal failing case বের করে। যেমন: 999999999999 → 1 → 0 → -1 (minimal failing input)।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 7 — The Paper Trail (CI/CD Pipeline)
// ═══════════════════════════════════════════
doors.push({
  num: 7,
  icon: "📄",
  color: "#0ea5e9",
  tagline: "কাগজের পথ — The Paper Trail",
  name: "The Paper Trail",
  secret: "CI/CD pipeline = automated test runner। Push → test → deploy। Docker isolation, parallel sharding।",
  story: `<p class="scene-setting">তুমি code push করলে। GitHub Actions স্বয়ংক্রিয়ভাবে test চালায়। Unit test প্রতি push এ। Integration test প্রতি PR এ। Docker container তে isolated। Parallel shard করে দ্রুত করে। Flaky test খুঁজে বের করে quarantine করে। সব pass করলে deploy। কোনো test fail করলে deploy block। এটাই CI/CD — Continuous Integration / Continuous Deployment।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrCI" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0ea5e9"/></marker></defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">📄 CI/CD Test Pipeline</text>

  <!-- Push -->
  <rect x="20" y="50" width="100" height="50" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="70" y="72" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">git push</text>
  <text x="70" y="88" text-anchor="middle" fill="#bae6fd" font-size="7">Feature branch</text>

  <line x1="120" y1="75" x2="145" y2="75" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrCI)"/>

  <!-- Unit tests -->
  <rect x="150" y="50" width="100" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="200" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Unit tests</text>
  <text x="200" y="88" text-anchor="middle" fill="#86efac" font-size="7">⚡ Every push</text>

  <line x1="250" y1="75" x2="275" y2="75" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrCI)"/>

  <!-- Integration -->
  <rect x="280" y="50" width="100" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="330" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Integration</text>
  <text x="330" y="88" text-anchor="middle" fill="#86efac" font-size="7">🔄 Every PR</text>

  <line x1="380" y1="75" x2="405" y2="75" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrCI)"/>

  <!-- Deploy gate -->
  <rect x="410" y="50" width="80" height="50" rx="8" fill="#451a03" stroke="#f97316" stroke-width="2"/>
  <text x="450" y="72" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="700">Gate</text>
  <text x="450" y="88" text-anchor="middle" fill="#fdba74" font-size="7">can-i-deploy?</text>

  <line x1="490" y1="75" x2="515" y2="75" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrCI)"/>

  <!-- Deploy -->
  <rect x="520" y="50" width="50" height="50" rx="8" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="545" y="72" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">🚀</text>
  <text x="545" y="88" text-anchor="middle" fill="#d8b4fe" font-size="6">Deploy</text>

  <!-- Features -->
  <rect x="20" y="120" width="170" height="60" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="1"/>
  <text x="105" y="138" text-anchor="middle" fill="#7dd3fc" font-size="8">🐳 Docker Isolation</text>
  <text x="105" y="152" text-anchor="middle" fill="#bae6fd" font-size="7">Each test in clean container</text>
  <text x="105" y="168" text-anchor="middle" fill="#bae6fd" font-size="7">No noisy neighbors</text>

  <rect x="205" y="120" width="170" height="60" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="1"/>
  <text x="290" y="138" text-anchor="middle" fill="#4ade80" font-size="8">⚡ Parallel Sharding</text>
  <text x="290" y="152" text-anchor="middle" fill="#86efac" font-size="7">Split tests across workers</text>
  <text x="290" y="168" text-anchor="middle" fill="#86efac" font-size="7">Separate DB schema per shard</text>

  <rect x="390" y="120" width="170" height="60" rx="8" fill="#0f172a" stroke="#dc2626" stroke-width="1"/>
  <text x="475" y="138" text-anchor="middle" fill="#f87171" font-size="8">🔥 Flaky Quarantine</text>
  <text x="475" y="152" text-anchor="middle" fill="#fca5a5" font-size="7">Auto-detect flaky tests</text>
  <text x="475" y="168" text-anchor="middle" fill="#fca5a5" font-size="7">Remove from blocking path</text>

  <!-- Rule -->
  <rect x="60" y="210" width="460" height="50" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="230" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="700">💡 CI Golden Rule: Test failure = deploy blocked. Always.</text>
  <text x="290" y="248" text-anchor="middle" fill="#fcd34d" font-size="8">If a test is flaky, quarantine it and fix the root cause — never ignore failures.</text>
</svg>
</div>
<div class="svg-caption">চিত্র: CI/CD pipeline — push → unit → integration → gate → deploy। Docker isolation, parallel sharding, flaky quarantine। Test fail = deploy block।</div>

<div class="code-block">CI/CD Pipeline — GitHub Actions YAML + terminal output:

# .github/workflows/ci.yml
name: CI Pipeline
on: [push, pull_request]

jobs:
  unit-tests:
    runs-on: ubuntu-latest          # 🐳 Docker isolation
    steps:
      - uses: actions/checkout@v4
      - run: pip install -r requirements.txt
      - run: pytest tests/ -m "not e2e" -q    # ⚡ প্রতি push

  integration-tests:
    runs-on: ubuntu-latest
    services:
      postgres:                      # real DB, isolated container
        image: postgres:16
    steps:
      - run: pytest tests/ -m "integration" -q   # 🔄 প্রতি PR

  deploy-gate:
    needs: [unit-tests, integration-tests]
    if: github.ref == 'refs/heads/main'
    steps:
      - run: pact-broker can-i-deploy?   # 📄 contract check
      - run: ./deploy.sh                  # 🚀 সব pass → deploy

CI রানের আসল output:
  $ git push origin feature/transfer-limit
  remote: Enumerating objects: 12, done.

  ✓ unit-tests (42 tests, 3.2s)         ← ⚡ fast, every push
  ✓ integration-tests (18 tests, 28s)   ← 🔄 slower, every PR
  ✓ deploy-gate
    pact-broker can-i-deploy --pacticipant ledgerpilot
    ✓ Verification successful — safe to deploy
  → 🚀 Deployed to staging.ledgerpilot.com

Flaky test ধরা (quarantine):
  $ pytest tests/ --flake-finder -v
  tests/test_payment.py::test_stripe_charge PASSED (1/5)
  tests/test_payment.py::test_stripe_charge FAILED (2/5)  ← flaky!
  ⚠️  Flaky detected: 60% pass rate
  → Auto-moved to tests/quarantine/ (no longer blocking)
  → Issue created: "Fix timing in test_stripe_charge"

  # pytest.ini
  [pytest]
  markers =
      quarantine: flaky tests — fix root cause ASAP
  addopts = -m "not quarantine"

💡 Golden Rule: কোনো test fail করলে deploy block। কখনো ignore করো না!</div>

<div class="dialogue"><strong>সিআই/সিডি ইঞ্জিনিয়ার:</strong> তোমার CI pipeline হল তোমার test runner। প্রতি push এ unit test চলে। প্রতি PR এ integration test। Docker container তে isolated — কোনো shared state নেই। Parallel shard করে দ্রুত করে — প্রতি worker এ আলাদা DB schema। Flaky test খুঁজে বের করে auto-quarantine করে। Pact can-i-deploy দিয়ে contract verify। LedgerPilot এ: GitHub Actions, Docker container, pytest -m 'not e2e' প্রতি push। কোনো test fail করলে deploy block। কখনো ignore করো না!</div>`,
  recall: [
    { q: "CI pipeline এ flaky test কীভাবে handle করবে?", a: "Auto-detect করো (pass/fail pattern)। Quarantine করো — blocking path থেকে সরাও। Root cause fix করো (timing, shared state, async race)। কখনো ignore করবে না — trust ধ্বংস হয়।" },
    { q: "Parallel test sharding কীভাবে কাজ করে?", a: "CI তে tests কে কয়েকটা worker এ ভাগ করো। প্রতি worker একটা slice চালায়। দ্রুত হয়। কিন্তু প্রতি worker এর জন্য আলাদা DB schema দরকার — shared state = collision।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 8 — The Restless Phantom (Flaky Tests)
// ═══════════════════════════════════════════
doors.push({
  num: 8,
  icon: "👻",
  color: "#dc2626",
  tagline: "অশান্ত ভূত — Restless Phantom",
  name: "The Restless Phantom",
  secret: "Flaky tests: মাঝে pass মাঝে fail। ১৩% CI failure। Trust ধ্বংস। Root cause: timing, shared state, async।",
  story: `<p class="scene-setting">একটা test মাঝে মাঝে pass করে, মাঝে মাঝে fail করে — কোনো code change ছাড়াই। এটাই flaky test। Industry study বলে — ১৩% CI build failure flaky test এর জন্য! এটা CI/CD trust ধ্বংস করে। 'Red build? আবার run করো।' টিম test ignore করতে শুরু করে। যখন সত্যিকারের bug আসে, কেউ দেখে না। কারণ: timing/race condition, order-dependent shared state, environment instability।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">👻 Flaky Tests: The CI Trust Killer</text>

  <!-- The cycle -->
  <rect x="20" y="50" width="540" height="90" rx="10" fill="#450a0a" stroke="#dc2626" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">The Flaky Test Death Spiral</text>
  <rect x="40" y="85" width="110" height="22" rx="4" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="95" y="100" text-anchor="middle" fill="#fca5a5" font-size="7">Test fails randomly</text>
  <text x="165" y="100" text-anchor="middle" fill="#475569" font-size="9">→</text>
  <rect x="175" y="85" width="110" height="22" rx="4" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="230" y="100" text-anchor="middle" fill="#fca5a5" font-size="7">Dev: 'just rerun'</text>
  <text x="300" y="100" text-anchor="middle" fill="#475569" font-size="9">→</text>
  <rect x="310" y="85" width="110" height="22" rx="4" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="365" y="100" text-anchor="middle" fill="#fca5a5" font-size="7">Passes on retry</text>
  <text x="435" y="100" text-anchor="middle" fill="#475569" font-size="9">→</text>
  <rect x="445" y="85" width="100" height="22" rx="4" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="495" y="100" text-anchor="middle" fill="#fca5a5" font-size="7">Trust eroded</text>
  <text x="290" y="128" text-anchor="middle" fill="#dc2626" font-size="8" font-weight="700">↻ Team ignores ALL failures. Real bugs ship to production. 💀</text>

  <!-- Root causes -->
  <rect x="20" y="160" width="540" height="120" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="290" y="180" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Root Causes & Fixes</text>

  <rect x="40" y="195" width="120" height="35" rx="5" fill="#450a0a" stroke="#dc2626" stroke-width="1"/>
  <text x="100" y="210" text-anchor="middle" fill="#fca5a5" font-size="7">⏰ Timing/Race</text>
  <text x="100" y="222" text-anchor="middle" fill="#86efac" font-size="6">Fix: explicit waits</text>

  <rect x="175" y="195" width="120" height="35" rx="5" fill="#450a0a" stroke="#dc2626" stroke-width="1"/>
  <text x="235" y="210" text-anchor="middle" fill="#fca5a5" font-size="7">🔄 Order dependency</text>
  <text x="235" y="222" text-anchor="middle" fill="#86efac" font-size="6">Fix: isolate state</text>

  <rect x="310" y="195" width="120" height="35" rx="5" fill="#450a0a" stroke="#dc2626" stroke-width="1"/>
  <text x="370" y="210" text-anchor="middle" fill="#fca5a5" font-size="7">📊 Shared state</text>
  <text x="370" y="222" text-anchor="middle" fill="#86efac" font-size="6">Fix: per-test DB</text>

  <rect x="445" y="195" width="95" height="35" rx="5" fill="#450a0a" stroke="#dc2626" stroke-width="1"/>
  <text x="492" y="210" text-anchor="middle" fill="#fca5a5" font-size="7">🌐 Environment</text>
  <text x="492" y="222" text-anchor="middle" fill="#86efac" font-size="6">Fix: Docker</text>

  <text x="290" y="255" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="600">💡 Fix: Quarantine → Root Cause → Never Ignore</text>
  <text x="290" y="270" text-anchor="middle" fill="#64748b" font-size="7">13% of all CI failures are flaky tests. They destroy automation trust within weeks.</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Flaky test death spiral — random fail → rerun → pass → trust eroded → real bugs ship। Root causes: timing, order, shared state, environment।</div>

<div class="code-block">Flaky Tests — ধরা আর ঠিক করা (the trust killer):

১. TIMING/RACE — hard-coded sleep (সবচেয়ে সাধারণ):
  # ❌ BAD — flaky, timing dependent
  def test_async_balance_update():
      update_balance_async(user_id=1)
      time.sleep(0.5)                    # ← অনেক সময় short, race!
      assert get_balance(1) == 100

  # ✅ GOOD — explicit wait (polling)
  def test_async_balance_update_fixed():
      update_balance_async(user_id=1)
      assert eventually_equals(           # poll until ready
          lambda: get_balance(1), 100, timeout=5
      )

২. ORDER DEPENDENCY — test A এর data test B তে দরকার:
  # ❌ BAD — test order matters
  test_create_user()    # creates user_id=1
  test_login_user()     # depends on user_id=1 existing!

  # ✅ GOOD — প্রতি test isolated
  def test_login_user(db):
      user = baker.make(User, email="test@x.com)  # own data
      response = client.post('/login', ...)
      assert response.status_code == 200

৩. SHARED STATE — global/DB pollution:
  # ❌ BAD — leftover DB rows
  def test_count_users():
      assert User.objects.count() == 0   # fails if prior test left data

  # ✅ GOOD — Django fixture auto-truncates
  @pytest.mark.django_db
  def test_count_users(db):              # db fixture wraps in transaction
      assert User.objects.count() == 0   # clean every time

Flaky detection (CI তে চালাও):
  $ pytest tests/ --count=10 -v          # pytest-repeat plugin
  test_stripe_charge PASSED (runs 1-7)
  test_stripe_charge FAILED (run 8)      ← flaky! 20% fail rate
  test_stripe_charge PASSED (runs 9-10)
  → Quarantine: mv tests/test_payment.py tests/quarantine/

  # .github/workflows/flaky-detector.yml
  - name: Detect flaky tests
    run: pytest tests/ --count=5 --flake-finder

💡 ১৩% CI failure = flaky। Quarantine → root cause → never ignore।</div>

<div class="dialogue"><strong>সিআই ইঞ্জিনিয়ার:</strong> Flaky test হল CI এর সবচেয়ে বড় শত্রু। কোনো code change ছাড়াই test মাঝে fail করে। প্রথমে dev বলে — 'আবার run করো'। দ্বিতীয়বার pass। কিন্তু ধীরে ধীরে trust কমে। সব test কে noise মনে হয়। যখন সত্যিকারের bug আসে, কেউ দেখে না! ১৩% CI failure = flaky। কারণ: timing (sleep, race condition), order-dependent (test A এর data test B তে দরকার), shared state (global variable, DB record), environment (network, shared CI runner)। সমাধান: auto-detect, quarantine করো, root cause fix করো। কখনো ignore করবে না!</div>`,
  recall: [
    { q: "Flaky test এর ৪টা প্রধান কারণ কী?", a: "(1) Timing/race condition — hard-coded sleep। (2) Order dependency — test A এর data test B তে দরকার। (3) Shared state — global variable, DB record। (4) Environment — network, shared CI runner।" },
    { q: "Flaky test কেন trust ধ্বংস করে?", a: "Dev শিখে যায় 'rerun করলে pass হবে।' সব test কে noise মনে করে। যখন সত্যিকারের bug আসে, কেউ attention দেয় না। এটাই automation trust এর মৃত্যু।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 9 — The Blood Oath (Contract Testing)
// ═══════════════════════════════════════════
doors.push({
  num: 9,
  icon: "📜",
  color: "#fbbf24",
  tagline: "রক্তের শপথ — The Blood Oath",
  name: "The Blood Oath",
  secret: "Contract testing: consumer আর provider এর মধ্যে চুক্তি। Pact Broker, can-i-deploy gate।",
  story: `<p class="scene-setting">Ipractus mobile app থেকে Django API তে call করো। Mobile এর team 'account_balance' field expect করে। কিন্তু Django team যদি 'balance_amount' নাম বদলায়? Mobile crash! কিভাবে আগেই ধরবে? Contract testing — Pact। Consumer (mobile) একটা contract লেখে — কী request পাঠায়, কী response expect করে। Provider (Django) verify করে — সে চুক্তি মানছে কিনা। Pact Broker এ contract store করা থাকে। can-i-deploy দিয়ে deploy এর আগে check।</p>

<div class="code-block">Contract Testing — Pact দিয়ে consumer/provider চুক্তি:

CONSUMER TEST (Ipractus mobile app — expectations লেখা):
  # mobile/tests/test_balance_contract.py
  from pact import Consumer, Provider

  pact = Consumer('ipractus_mobile').has_pact_with(Provider('ledgerpilot_api'))

  @pact.given('an account with balance 1500')
  .upon_receiving('a request for balance')
  .with_request('get', '/api/balance', headers={'Authorization': 'Bearer ...'})
  .will_respond_with(200, body={
      'account_balance': 1500   # ← consumer expects THIS field name
  })
  def test_get_balance(pact):
      response = requests.get(pact.uri + '/api/balance')
      assert response.json()['account_balance'] == 1500

  $ pytest mobile/tests/test_balance_contract.py -q
  1 passed
  → Contract written to: pacts/ipractus_mobile-ledgerpilot_api.json
  → Published to Pact Broker

PROVIDER VERIFY (Django API — চুক্তি মানছে কিনা):
  # backend/tests/test_provider_verify.py
  import pytest_pact

  @pytest.mark.pact_verify(
      pact='pacts/ipractus_mobile-ledgerpilot_api.json')
  def test_provider_honors_contract():
      pass   # Django কে contract অনুযায়ী response দিতে হবে

  # ❌ BREAKING CHANGE scenario — Django 'balance_amount' নাম দিল:
  $ pytest backend/tests/test_provider_verify.py -q
  FAILED — Contract mismatch!
    Expected: 'account_balance' (from consumer contract)
    Actual:   'balance_amount'  (Django changed field name!)
  → CI fail! Deploy BLOCKED!

can-i-deploy gate (deploy এর আগে):
  $ pact-broker can-i-deploy \
      --pacticipant ledgerpilot_api \
      --version $(git rev-parse --short HEAD)
  Computer says yes ✓   → safe to deploy

  # If contract broken:
  Computer says no ❌
    The version of ledgerpilot_api currently deployed is not compatible
    → Deploy BLOCKED — fix breaking change first!

💡 Slow E2E test এর fast, deterministic বিকল্প। কোনো browser লাগে না।</div>

<div class="dialogue"><strong>প্যাক্ট ইঞ্জিনিয়ার:</strong> Contract testing হল দুটো service এর মধ্যে আইনি চুক্তি। Consumer (Ipractus mobile) তার expectations লেখে — 'আমি GET /balance call করব, response এ account_balance integer হবে।' এই contract Pact Broker এ publish হয়। Provider (Django API) তার CI তে contract verify করে। যদি Django চুক্তি ভাঙে — 'balance_amount' নাম দেয় — CI fail! Deploy block! এটা slow E2E test এর বদলে fast, deterministic contract test। Ipractus এর জন্য: mobile এ consumer test, Django তে provider verify, Pact Broker এ store।</div>`,
  recall: [
    { q: "Contract testing কী?", a: "Consumer আর provider এর মধ্যে API চুক্তি। Consumer তার expectations লেখে (contract), provider verify করে। Pact Broker এ store। can-i-deploy দিয়ে deploy gate। Slow E2E এর fast বিকল্প।" },
    { q: "can-i-deploy কীভাবে কাজ করে?", a: "Deploy এর আগে Pact Broker query করে — consumer আর provider compatible কিনা। যদি চুক্তি ভাঙা থাকে, deploy block। এটা production crash এর আগেই ধরে।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 10 — The Shield Wall (Security Testing + Strategy)
// ═══════════════════════════════════════════
doors.push({
  num: 10,
  icon: "🛡️",
  color: "#e8c547",
  tagline: "ঢালের দেয়াল — The Shield Wall",
  name: "The Shield Wall",
  secret: "SAST (source scan) + DAST (runtime attack) + Full testing strategy = সম্পূর্ণ সুরক্ষা।",
  story: `<p class="scene-setting">Security testing হল testing এর বিশেষ রূপ। SAST — source code scan করে, SQL injection pattern খোঁজে, early SDLC তে (white-box)। DAST — running app কে attack করে, runtime vulnerability খোঁজে (black-box)। Fuzzing — অবৈধ input বোমাবর্ষণ করে। এগুলো আর সব test type মিলিয়ে — Testing Trophy, TDD, mutation, property-based, contract, CI/CD — এটাই তোমার Shield Wall। LedgerPilot এর জন্য: pytest-django + model_bakery + Hypothesis + Playwright + mutmut + bandit + Pact। ৮০% coverage target, mutation score ৮০%+, flaky test quarantine।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🛡️ The Complete Shield Wall</text>

  <!-- Layer 1: Security Testing -->
  <rect x="20" y="50" width="540" height="80" rx="10" fill="#450a0a" stroke="#dc2626" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">🔒 Security Testing Layer</text>
  <rect x="40" y="85" width="160" height="35" rx="5" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="120" y="100" text-anchor="middle" fill="#fca5a5" font-size="8">🔍 SAST (White-box)</text>
  <text x="120" y="112" text-anchor="middle" fill="#fca5a5" font-size="6">bandit, pyright, ESLint</text>
  <rect x="210" y="85" width="160" height="35" rx="5" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="290" y="100" text-anchor="middle" fill="#fca5a5" font-size="8">💥 DAST (Black-box)</text>
  <text x="290" y="112" text-anchor="middle" fill="#fca5a5" font-size="6">OWASP ZAP, attack running app</text>
  <rect x="380" y="85" width="160" height="35" rx="5" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="460" y="100" text-anchor="middle" fill="#fca5a5" font-size="8">🎲 Fuzzing</text>
  <text x="460" y="112" text-anchor="middle" fill="#fca5a5" font-size="6">Bombard with invalid input</text>

  <!-- Layer 2: Test Types -->
  <rect x="20" y="145" width="540" height="80" rx="10" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="290" y="167" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">🧪 Test Types Layer</text>
  <rect x="40" y="180" width="100" height="35" rx="5" fill="#1e293b" stroke="#0ea5e9" stroke-width="1"/>
  <text x="90" y="195" text-anchor="middle" fill="#7dd3fc" font-size="7">⚡ Unit</text>
  <text x="90" y="207" text-anchor="middle" fill="#bae6fd" font-size="6">pytest</text>
  <rect x="155" y="180" width="120" height="35" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="215" y="195" text-anchor="middle" fill="#4ade80" font-size="7">🔄 Integration</text>
  <text x="215" y="207" text-anchor="middle" fill="#86efac" font-size="6">pytest-django + APIClient</text>
  <rect x="290" y="180" width="100" height="35" rx="5" fill="#1e293b" stroke="#0ea5e9" stroke-width="1"/>
  <text x="340" y="195" text-anchor="middle" fill="#7dd3fc" font-size="7">🐢 E2E</text>
  <text x="340" y="207" text-anchor="middle" fill="#bae6fd" font-size="6">Playwright</text>
  <rect x="405" y="180" width="135" height="35" rx="5" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="472" y="195" text-anchor="middle" fill="#c084fc" font-size="7">🎲 Property</text>
  <text x="472" y="207" text-anchor="middle" fill="#d8b4fe" font-size="6">Hypothesis</text>

  <!-- Layer 3: Quality Metrics -->
  <rect x="20" y="240" width="540" height="60" rx="10" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="262" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">📊 Quality Metrics Layer</text>
  <rect x="40" y="272" width="150" height="22" rx="4" fill="#1e293b" stroke="#22c55e" stroke-width="1"/>
  <text x="115" y="286" text-anchor="middle" fill="#86efac" font-size="7">📊 80% coverage (not 100%!) </text>
  <rect x="205" y="272" width="150" height="22" rx="4" fill="#1e293b" stroke="#22c55e" stroke-width="1"/>
  <text x="280" y="286" text-anchor="middle" fill="#86efac" font-size="7">🧬 80%+ mutation score</text>
  <rect x="370" y="272" width="170" height="22" rx="4" fill="#1e293b" stroke="#22c55e" stroke-width="1"/>
  <text x="455" y="286" text-anchor="middle" fill="#86efac" font-size="7">👻 0 flaky tests tolerated</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Shield Wall — Security (SAST/DAST/Fuzzing) + Test Types (Unit/Integration/E2E/Property) + Quality Metrics (80% coverage, 80% mutation, 0 flaky)।</div>

<div class="code-block">The Shield Wall — Security testing + full strategy in action:

১. SAST (Static Analysis — source code scan, white-box):
  $ bandit -r backend/ -q          # Python security linter
  [main]  INFO    profiled 142 files
  Issue: [B608:hardcoded_sql_expression] Possible SQL injection
    Location: backend/views.py:45
    44  def search(q):
  → 45      cursor.execute(f"SELECT * FROM users WHERE name='{q}'")
    # 🚨 SQL injection! সমাধান: parameterized query
  → 45      cursor.execute("SELECT * FROM users WHERE name=%s", [q])

  $ npx eslint src/ --ext .vue --rule 'no-eval: error'
  src/utils/sandbox.js
    3:1  error  eval can be harmful  no-eval

২. DAST (Dynamic Analysis — running app কে attack, black-box):
  $ zap-cli quick-scan http://localhost:8000
  Running active scan...
  🚨 Alert: Cross Site Scripting (Reflected)
     Risk: High
     URL: http://localhost:8000/search?q=<script>alert(1)</script>
  🚨 Alert: SQL Injection (timestamp parameter)
     Risk: High

৩. FUZZING — অবৈধ input বোমাবর্ষণ:
  $ python -m atheris --instrument-args=backend.validators
  # Fuzzer: invalid UTF-8, huge numbers, null bytes, nested JSON
  🚨 Crash at validate_amount(b"\xff\xfe\x00\x00")  ← buffer issue

৪. সম্পূর্ণ test suite চেকপয়েন্ট:
  $ pytest tests/ --cov=backend --cov-report=term --cov-fail-under=80
  Name                    Stmts   Miss  Cover
  -------------------------------------------
  backend/transfer.py        45      2    96%
  -------------------------------------------
  TOTAL                   1240    215    83%   ← >80% threshold ✓
  Required test coverage of 80% reached. Total coverage: 83.00%

  $ mutmut run && mutmut summary
  ⏱️  mutation score: 81%   ← >80% ✓ (financial module)

  $ pytest tests/ -m flaky --count=5
  All tests stable across 5 runs — 0 flaky ✓

  $ bandit -r backend/ && pip-audit
  No issues found ✓

🛡️ Shield Wall complete: SAST + DAST + Unit + Integration + E2E
   + Property + Mutation + Contract + CI/CD + 80% coverage + 0 flaky।</div>

<div class="dialogue"><strong>ক্যাফটসম্যান:</strong> তোমার Shield Wall হল তিন স্তরের সুরক্ষা। উপরে — Security Testing (SAST source scan, DAST runtime attack, fuzzing)। মাঝে — Test Types (unit, integration, E2E, property-based)। নিচে — Quality Metrics (80% coverage, 80% mutation score, 0 flaky tests)। LedgerPilot এর জন্য: pytest-django + model_bakery fixtures + Hypothesis property-based + Playwright E2E + mutmut monthly + bandit SAST + pip-audit। CI তে unit প্রতি push, integration প্রতি PR, mutation মাসে একবার। ৮০% coverage — ১০০% নয়। Quality > Quantity। এটাই কারিগরের ঢাল — প্রতিটা bug একটা শত্রু, প্রতিটা test একটা ঢাল।</div>`,
  recall: [
    { q: "SAST আর DAST এর পার্থক্য কী?", a: "SAST = Static Analysis, source code scan করে (white-box, early SDLC)। DAST = Dynamic Analysis, running app কে attack করে (black-box, late SDLC)। SAST false positive বেশি দেয়, DAST runtime vulnerability ধরে।" },
    { q: "LedgerPilot এর জন্য testing target কী?", a: "80% coverage (100% নয়)। 80%+ mutation score financial module এ। 0 flaky tests। TDD শুধু financial calculation এ। Playwright E2E শুধু critical path (login, transfer, balance)। Hypothesis property-based financial calculation এ।" },
  ]
});
