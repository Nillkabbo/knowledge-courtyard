const doors = [];

// ═══════════════════════════════════════════
// DOOR 1 — Three Watchtowers (Test Types)
// ═══════════════════════════════════════════
doors.push({
  num: 1,
  icon: "🗼",
  color: "#0ea5e9",
  tagline: "তিন প্রহরী — Three Guards",
  name: "Three Watchtowers",
  secret: "Unit = একটা ফাংশন। Integration = দুটো কম্পোনেন্ট। E2E = পুরো ব্যবহারকারীর যাত্রা।",
  story: `<p class="scene-setting">তোমার LedgerPilot-এ তিনজন প্রহরী দরকার। প্রথম প্রহরী — ইউনিট টেস্ট — শুধু একটা ফাংশন চেক করে। <code>calculate_tax(100)</code> ঠিক আছে কিনা। দ্বিতীয় — ইন্টিগ্রেশন টেস্ট — দুটো জিনিস একসাথে চেক করে। API থেকে ডেটাবেসে লেখা ঠিক আছে কিনা। তৃতীয় — E2E টেস্ট — পুরো ব্যবহারকারীর যাত্রা। ব্রাউজার খুলে লগইন করো, টাকা পাঠাও, ব্যালেন্স দেখো।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🗼 Three Test Types: Speed vs Confidence</text>

  <!-- Unit (left) -->
  <rect x="20" y="50" width="175" height="270" rx="10" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="107" y="72" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="700">⚡ Unit Test</text>
  <text x="107" y="90" text-anchor="middle" fill="#bae6fd" font-size="8">One function, isolated</text>
  <rect x="35" y="105" width="145" height="22" rx="4" fill="#1e293b" stroke="#0ea5e9" stroke-width="1"/>
  <text x="107" y="120" text-anchor="middle" fill="#7dd3fc" font-size="7" font-family="monospace">calculate_tax(100) == 12.50</text>
  <text x="107" y="145" text-anchor="middle" fill="#4ade80" font-size="8">✅ Lightning fast (ms)</text>
  <text x="107" y="160" text-anchor="middle" fill="#4ade80" font-size="8">✅ Easy to write</text>
  <text x="107" y="180" text-anchor="middle" fill="#f87171" font-size="8">❌ Misses integration bugs</text>
  <text x="107" y="200" text-anchor="middle" fill="#f87171" font-size="8">❌ Mock-heavy = fragile</text>
  <rect x="40" y="220" width="135" height="25" rx="5" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="107" y="237" text-anchor="middle" fill="#4ade80" font-size="7">LedgerPilot: tax calc, validation</text>
  <text x="107" y="265" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">Counterfeit pen — checks one thing</text>
  <text x="107" y="285" text-anchor="middle" fill="#64748b" font-size="7">Speed: ⚡⚡⚡⚡⚡</text>
  <text x="107" y="300" text-anchor="middle" fill="#64748b" font-size="7">Confidence: 📊📊</text>

  <!-- Integration (center) -->
  <rect x="205" y="50" width="175" height="270" rx="10" fill="#052e16" stroke="#22c55e" stroke-width="2.5"/>
  <text x="292" y="72" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">🔄 Integration</text>
  <text x="292" y="90" text-anchor="middle" fill="#86efac" font-size="8">Components together</text>
  <rect x="220" y="105" width="145" height="22" rx="4" fill="#1e293b" stroke="#22c55e" stroke-width="1"/>
  <text x="292" y="120" text-anchor="middle" fill="#86efac" font-size="7" font-family="monospace">POST /transfer → MySQL write → 201</text>
  <text x="292" y="145" text-anchor="middle" fill="#4ade80" font-size="8">✅ Catches real bugs!</text>
  <text x="292" y="160" text-anchor="middle" fill="#4ade80" font-size="8">✅ Tests real interaction</text>
  <text x="292" y="180" text-anchor="middle" fill="#fbbf24" font-size="8">⚠️ Slower than unit</text>
  <text x="292" y="200" text-anchor="middle" fill="#f87171" font-size="8">❌ Needs DB setup</text>
  <rect x="220" y="220" width="145" height="25" rx="5" fill="#052e16" stroke="#4ade80" stroke-width="1"/>
  <text x="292" y="237" text-anchor="middle" fill="#4ade80" font-size="7">🏆 SWEET SPOT! Most valuable</text>
  <text x="292" y="265" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">Deposit slot → vault pipeline</text>
  <text x="292" y="285" text-anchor="middle" fill="#64748b" font-size="7">Speed: ⚡⚡⚡</text>
  <text x="292" y="300" text-anchor="middle" fill="#64748b" font-size="7">Confidence: 📊📊📊📊</text>

  <!-- E2E (right) -->
  <rect x="390" y="50" width="170" height="270" rx="10" fill="#450a0a" stroke="#dc2626" stroke-width="2"/>
  <text x="475" y="72" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700">🐢 E2E Test</text>
  <text x="475" y="90" text-anchor="middle" fill="#fca5a5" font-size="8">Full user journey</text>
  <rect x="405" y="105" width="140" height="22" rx="4" fill="#1e293b" stroke="#dc2626" stroke-width="1"/>
  <text x="475" y="120" text-anchor="middle" fill="#fca5a5" font-size="6" font-family="monospace">Browser: login → click transfer → assert</text>
  <text x="475" y="145" text-anchor="middle" fill="#4ade80" font-size="8">✅ Highest confidence</text>
  <text x="475" y="160" text-anchor="middle" fill="#4ade80" font-size="8">✅ Tests real UX</text>
  <text x="475" y="180" text-anchor="middle" fill="#f87171" font-size="8">❌ Very slow (minutes)</text>
  <text x="475" y="200" text-anchor="middle" fill="#f87171" font-size="8">❌ Flaky (timing!)</text>
  <rect x="405" y="220" width="140" height="25" rx="5" fill="#450a0a" stroke="#f87171" stroke-width="1"/>
  <text x="475" y="237" text-anchor="middle" fill="#fca5a5" font-size="7">Playwright: login → transfer → balance</text>
  <text x="475" y="265" text-anchor="middle" fill="#64748b" font-size="7" font-style="italic">Mystery shopper — full experience</text>
  <text x="475" y="285" text-anchor="middle" fill="#64748b" font-size="7">Speed: ⚡</text>
  <text x="475" y="300" text-anchor="middle" fill="#64748b" font-size="7">Confidence: 📊📊📊📊📊</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Unit (দ্রুত, isolated), Integration (sweet spot, আসল bug ধরে), E2E (সর্বোচ্চ confidence, ধীর)। প্রতিটার নিজস্ব ভূমিকা।</div>

<div class="code-block">Three Watchtowers — Unit vs Integration vs E2E in action:

১. UNIT TEST (⚡ milliseconds, isolated):
  # tests/test_tax.py
  def test_calculate_tax():
      assert calculate_tax(100) == 12.50
      assert calculate_tax(0) == 0

  $ pytest tests/test_tax.py -q
  1 passed in 0.02s

২. INTEGRATION TEST (🔄 real DB, sweet spot):
  # tests/test_transfer_api.py
  def test_transfer_writes_to_db(db):
      response = client.post('/api/transfer', json={
          'from': 1, 'to': 2, 'amount': 500
      })
      assert response.status_code == 201
      assert Account.objects.get(pk=2).balance == 1500

  $ pytest tests/test_transfer_api.py -q
  1 passed in 1.84s   ← slower, but catches REAL bugs

৩. E2E TEST (🐢 full browser journey):
  # e2e/transfer.spec.ts
  test('user transfers money', async ({page}) => {
    await page.goto('/login')
    await page.fill('[name=email]', 'rakib@test.com')
    await page.click('button[type=submit]')
    await page.click('text=Transfer')
    await expect(page.locator('.balance')).toHaveText('৳১৫০০')
  })

  $ npx playwright test e2e/transfer.spec.ts
  Running 1 test using 1 worker
    ✓  chromium transfer.spec.ts (3.2s)
  1 passed (4.1s)   ← slowest, but highest confidence

স্পিড:     Unit (0.02s) < Integration (1.8s) < E2E (4.1s)
কনফিডেন্স: Unit < Integration < E2E
🏆 Integration = sweet spot — আসল interaction bug ধরে।
Guillermo Rauch: "Write tests. Not too many. Mostly integration."</div>

<div class="dialogue"><strong>টেস্ট ইঞ্জিনিয়ার:</strong> প্রতিটা test type এর নিজস্ব ভূমিকা। Unit test — একটা ফাংশন, isolated, মিলিসেকেন্ডে চলে। কিন্তু integration bug ধরে না। Integration test — দুটো জিনিস একসাথে, API→DB, আসল bug ধরে! Guillermo Rauch বলেছেন — 'Mostly integration.' E2E test — পুরো user journey, ব্রাউজারে, সবচেয়ে নির্ভরযোগ্য। কিন্তু ধীর আর flaky। LedgerPilot এ: unit দিয়ে calculate_tax, integration দিয়ে transfer API→MySQL, E2E দিয়ে login→transfer→balance check।</div>`,
  recall: [
    { q: "Integration test কেন 'sweet spot'?", a: "Integration test আসল component interaction test করে — API→DB, দুটো জিনিস একসাথে। Unit এর চেয়ে বেশি bug ধরে, E2E এর চেয়ে দ্রুত আর stable। Guillermo Rauch: 'Mostly integration.'" },
    { q: "E2E test কখন ব্যবহার করবে?", a: "শুধু critical path এর জন্য — login, transaction, balance check। Playwright দিয়ে। অনেক বেশি E2E = ধীর suite + flaky tests।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 2 — The Trophy Bearers (Pyramid vs Trophy)
// ═══════════════════════════════════════════
doors.push({
  num: 2,
  icon: "🏆",
  color: "#22c55e",
  tagline: "ট্রফি বাহক — Trophy Bearers",
  name: "The Trophy Bearers",
  secret: "Pyramid = অনেক unit। Trophy = integration ই সবচেয়ে বেশি। Trophy আধুনিক।",
  story: `<p class="scene-setting">২০০৯ সালে Mike Cohn 'Testing Pyramid' প্রস্তাব করেন — অনেক unit test, কম integration, সামান্য E2E। কিন্তু ২০১৭ সালে Guillermo Rauch tweet করেন: 'Write tests. Not too many. Mostly integration.' ২০১৮ সালে Kent C. Dodds এটাকে 'Testing Trophy' হিসেবে formalize করেন — static analysis base, integration সবচেয়ে বড়, E2E সামান্য।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🏆 Testing Pyramid vs Testing Trophy</text>

  <!-- Pyramid (left) -->
  <text x="145" y="55" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="700">Pyramid (2009)</text>
  <polygon points="120,80 170,80 185,130 105,130" fill="#dc2626" stroke="#f87171" stroke-width="1.5" opacity="0.8"/>
  <text x="145" y="110" text-anchor="middle" fill="#fee2e2" font-size="8">E2E</text>
  <polygon points="105,130 185,130 205,200 85,200" fill="#fbbf24" stroke="#fcd34d" stroke-width="1.5" opacity="0.8"/>
  <text x="145" y="170" text-anchor="middle" fill="#451a03" font-size="9">Integration</text>
  <polygon points="85,200 205,200 230,280 60,280" fill="#22c55e" stroke="#4ade80" stroke-width="1.5" opacity="0.8"/>
  <text x="145" y="245" text-anchor="middle" fill="#052e16" font-size="10" font-weight="700">Unit (lots!)</text>
  <text x="145" y="300" text-anchor="middle" fill="#64748b" font-size="8">Mike Cohn: 70/20/10 ratio</text>

  <!-- VS -->
  <text x="290" y="165" text-anchor="middle" fill="#475569" font-size="14" font-weight="900">VS</text>

  <!-- Trophy (right) -->
  <text x="435" y="55" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">Trophy (2018)</text>
  <polygon points="410,80 460,80 475,120 395,120" fill="#dc2626" stroke="#f87171" stroke-width="1.5" opacity="0.8"/>
  <text x="435" y="105" text-anchor="middle" fill="#fee2e2" font-size="8">E2E</text>
  <!-- Integration (biggest) -->
  <polygon points="375,120 495,120 510,200 360,200" fill="#22c55e" stroke="#4ade80" stroke-width="2" opacity="0.9"/>
  <text x="435" y="150" text-anchor="middle" fill="#052e16" font-size="11" font-weight="900">INTEGRATION</text>
  <text x="435" y="170" text-anchor="middle" fill="#052e16" font-size="8">🏆 MOST IMPORTANT</text>
  <!-- Unit -->
  <polygon points="390,200 480,200 490,250 380,250" fill="#a855f7" stroke="#c084fc" stroke-width="1.5" opacity="0.8"/>
  <text x="435" y="230" text-anchor="middle" fill="#f3e8ff" font-size="9">Unit (less)</text>
  <!-- Static (base) -->
  <polygon points="380,250 490,250 500,280 370,280" fill="#64748b" stroke="#94a3b8" stroke-width="1.5" opacity="0.8"/>
  <text x="435" y="270" text-anchor="middle" fill="#e2e8f0" font-size="8">Static (lint)</text>
  <text x="435" y="300" text-anchor="middle" fill="#64748b" font-size="8">Dodds: integration-heavy</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Pyramid = unit-heavy (2009)। Trophy = integration-heavy (2018)। Guillermo Rauch: 'Write tests. Not too many. Mostly integration.'</div>

<div class="code-block">Pyramid vs Trophy — তোমার test suite এর আসল অনুপাত:

PYRAMID (Mike Cohn 2009) — unit-heavy:
  $ pytest --collect-only -q | awk '{print $NF}' | sort | uniq -c
    142 tests/test_*_unit.py      ← 70% unit
     41 tests/test_*_integration.py  ← 20% integration
     18 tests/test_*_e2e.py       ← 10% E2E
  সমস্যা: unit pass, কিন্তু production এ API→DB integration bug!

TROPHY (Kent C. Dodds 2018) — integration-heavy:
  $ pytest --collect-only -q | awk '{print $NF}' | sort | uniq -c
     28 tests/test_*_unit.py
    156 tests/test_*_integration.py   ← MOSTLY integration!
      6 tests/test_*_e2e.py
     42 lint/typecheck (static)       ← base layer

  ESLint + mypy (static, সবচেয়ে দ্রুত):
  $ npx eslint src/ && mypy backend/ --no-error-summary
  ✓ No issues.  ← 0ms execution, syntax/type error আগেই ধরা

Guillermo Rauch এর tweet (2017):
  "Write tests. Not too many. Mostly integration."

টেকওয়ে: integration test আসল bug ধরে — Vue↔Django↔MySQL interaction এ।
তাই Trophy integration কে সবচেয়ে বড় রাখে।</div>

<div class="dialogue"><strong>কেন্ট সি. ডডস:</strong> আমি 2018 সালে Testing Trophy formalize করেছিলাম। Pyramid এর সমস্যা — unit test খুব isolated, আসল bug ধরে না। আধুনিক app এ Vue/React frontend, Django API, MySQL database — এদের মধ্যে interaction এ বাগ হয়। Integration test এই বাগ ধরে। তাই Trophy তে integration সবচেয়ে বড়। Static analysis (ESLint, mypy) base — syntax error আগেই ধরে। E2E সামান্য — শুধু critical path। 'Write tests. Not too many. Mostly integration.'</div>`,
  recall: [
    { q: "Trophy কেন Pyramid এর চেয়ে ভালো?", a: "Pyramid unit-heavy, কিন্তু unit test আসল interaction bug ধরে না। Trophy integration-heavy — API→DB, component interaction এ বাগ ধরে। আধুনিক app এ integration ই sweet spot।" },
    { q: "Testing Trophy এর base layer কী?", a: "Static analysis — ESLint, mypy, type checker। কোনো code execute না করে syntax আর type error ধরে। সবচেয়ে দ্রুত।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 3 — The Red-Green Forge (TDD)
// ═══════════════════════════════════════════
doors.push({
  num: 3,
  icon: "🔴",
  color: "#fbbf24",
  tagline: "লাল-সবুজ কারখানা — The Red-Green Forge",
  name: "The Red-Green Forge",
  secret: "TDD = design tool। Red (failing test) → Green (pass) → Refactor (clean)। Test আগে, code পরে।",
  story: `<p class="scene-setting">TDD মানে Test-Driven Development। কিন্তু আসলে এটা design tool। তুমি test আগে লেখো — interface ভাবতে বাধ্য হও। 'ATM $500+ withdraw করবে না' — test লেখো, সে fail করে (Red)। তারপর minimal code লেখো test pass করার জন্য (Green)। তারপর code পরিষ্কার করো (Refactor)। প্রতিটা ধাপে interface design ভাবতে হয়।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="arrTDD" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569"/></marker></defs>
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔴 TDD: Red → Green → Refactor Cycle</text>

  <!-- Red -->
  <rect x="30" y="50" width="160" height="100" rx="10" fill="#450a0a" stroke="#dc2626" stroke-width="2"/>
  <circle cx="110" cy="75" r="14" fill="#dc2626" stroke="#f87171" stroke-width="2"/>
  <text x="110" y="79" text-anchor="middle" fill="#fee2e2" font-size="10" font-weight="700">RED</text>
  <text x="110" y="105" text-anchor="middle" fill="#fca5a5" font-size="8">Write failing test</text>
  <text x="110" y="122" text-anchor="middle" fill="#fca5a5" font-size="7" font-family="monospace">test_withdraw_over_500_fails()</text>
  <text x="110" y="140" text-anchor="middle" fill="#dc2626" font-size="8">❌ Test fails — code doesn't exist</text>

  <line x1="190" y1="100" x2="220" y2="100" stroke="#475569" stroke-width="2" marker-end="url(#arrTDD)"/>

  <!-- Green -->
  <rect x="220" y="50" width="160" height="100" rx="10" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <circle cx="300" cy="75" r="14" fill="#22c55e" stroke="#4ade80" stroke-width="2"/>
  <text x="300" y="79" text-anchor="middle" fill="#052e16" font-size="10" font-weight="700">GREEN</text>
  <text x="300" y="105" text-anchor="middle" fill="#86efac" font-size="8">Write minimal code</text>
  <text x="300" y="122" text-anchor="middle" fill="#86efac" font-size="7" font-family="monospace">if amount > 500: raise Error()</text>
  <text x="300" y="140" text-anchor="middle" fill="#22c55e" font-size="8">✅ Test passes — but code is ugly</text>

  <line x1="380" y1="100" x2="410" y2="100" stroke="#475569" stroke-width="2" marker-end="url(#arrTDD)"/>

  <!-- Refactor -->
  <rect x="410" y="50" width="160" height="100" rx="10" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="490" y="75" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">♻️ REFACTOR</text>
  <text x="490" y="95" text-anchor="middle" fill="#d8b4fe" font-size="8">Clean up code</text>
  <text x="490" y="112" text-anchor="middle" fill="#d8b4fe" font-size="7" font-family="monospace">→ move to config, add validation</text>
  <text x="490" y="130" text-anchor="middle" fill="#a855f7" font-size="8">✅ Tests still pass — code is clean</text>

  <!-- Loop arrow back -->
  <path d="M 490 150 Q 300 190 110 150" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#arrTDD)"/>
  <text x="300" y="180" text-anchor="middle" fill="#64748b" font-size="8">↻ Repeat for next feature</text>

  <!-- Key insight -->
  <rect x="60" y="210" width="460" height="50" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="230" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="700">💡 TDD = Design Tool, not just testing</text>
  <text x="290" y="248" text-anchor="middle" fill="#fcd34d" font-size="8">Writing test first forces you to design the interface before implementation. "Need-driven development."</text>
</svg>
</div>
<div class="svg-caption">চিত্র: TDD cycle — Red (failing test) → Green (pass) → Refactor (clean)। আসলে এটা design tool — test আগে লিখলে interface ভাবতে বাধ্য হও।</div>

<div class="code-block">TDD Cycle — Red → Green → Refactor (live terminal session):

🔴 RED — failing test আগে লেখো:
  # tests/test_atm.py
  def test_withdraw_over_500_fails():
      atm = ATM(balance=1000)
      with pytest.raises(OverLimitError):
          atm.withdraw(600)   # $500+ should be rejected

  $ pytest tests/test_atm.py::test_withdraw_over_500_fails -q
  FAILED tests/test_atm.py::test_withdraw_over_500_fails
  E NameError: name 'OverLimitError' is not defined
  1 failed in 0.03s   ← ✅ Red! Test fails — code doesn't exist yet.

🟢 GREEN — minimal code লেখো, শুধু test pass করার জন্য:
  # atm.py
  class OverLimitError(Exception): pass

  class ATM:
      def __init__(self, balance):
          self.balance = balance

      def withdraw(self, amount):
          if amount > 500:
              raise OverLimitError("Exceeds $500 limit")
          self.balance -= amount

  $ pytest tests/test_atm.py::test_withdraw_over_500_fails -q
  1 passed in 0.02s   ← ✅ Green! Test passes — but code is minimal/ugly.

♻️ REFACTOR — code পরিষ্কার করো, tests আবার চালাও:
  # ভ্যারিয়েবল নাম বদলাও, magic number কে config এ নাও
  MAX_WITHDRAWAL = 500   # → settings.py তে move করো

  class ATM:
      def withdraw(self, amount):
          self._validate_limit(amount)   # extracted method
          self.balance -= amount

      def _validate_limit(self, amount):
          if amount > MAX_WITHDRAWAL:
              raise OverLimitError(f"Exceeds {MAX_WITHDRAWAL} limit")

  $ pytest tests/test_atm.py -q
  1 passed in 0.02s   ← ✅ Tests still pass! Code is now clean.

💡 TDD = design tool — test আগে লেখায় interface আগেই ভাবতে হয়।</div>

<div class="dialogue"><strong>টিডিডি প্র্যাকটিশনার:</strong> TDD আসলে testing এর চেয়ে design। Test আগে লেখো — ভাবতে হবে কী interface দরকার, কী behavior expected। 'ATM $500+ reject করবে' — এই test লেখো, Red (fail)। তারপন minimal code, Green (pass)। তারপর refactor। LedgerPilot এ: financial calculation গুলো TDD দিয়ে করো — transfer, tax, balance। UI component গুলো পরে test করো। TDD সব জায়গায় দরকার না — exploratory code এ নয়।</div>`,
  recall: [
    { q: "TDD কেন design tool?", a: "Test আগে লেখলে interface, API, আর dependency ভাবতে বাধ্য হও। Implementation এর আগে behavior define করো। 'Need-driven development' — প্রথমে কী দরকার ভাবো।" },
    { q: "TDD কখন ব্যবহার করবে?", a: "Critical calculation এ — financial, security, core logic। Exploratory code বা UI তে TDD নয়। LedgerPilot এ transfer/tax/balance এ TDD, Vue component এ নয়।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 4 — The Lie Detector (Coverage vs Mutation)
// ═══════════════════════════════════════════
doors.push({
  num: 4,
  icon: "🕵️",
  color: "#ef4444",
  tagline: "মিথ্যা সনাক্তকারী — The Lie Detector",
  name: "The Lie Detector",
  secret: "100% coverage = মিথ্যা নিরাপত্তা। Mutation testing: কোডে bug ঢুকিয়ে দেখো test ধরছে কিনা।",
  story: `<p class="scene-setting">তুমি 100% code coverage পেয়েছো। নিরাপদ? না! Coverage শুধু বলে কোন line execute হয়েছে — correctness নয়। একটা test যদি assert না করে, coverage 100% হবে কিন্তু bug ধরা যাবে না। সমাধান? Mutation testing — কোডে ইচ্ছে করে bug ঢুকিয়ে দাও। <code>></code> কে <code>>=</code> পাল্টে দাও, <code>+</code> কে <code>-</code> করে দাও। যদি test pass করে থাকে — mutant survived! তোমার test দুর্বল।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🕵️ Code Coverage vs Mutation Testing</text>

  <!-- Coverage (left) -->
  <rect x="20" y="50" width="260" height="120" rx="10" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="150" y="72" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="700">📊 Code Coverage (Misleading)</text>
  <text x="150" y="92" text-anchor="middle" fill="#bae6fd" font-size="8">"Every line executed!"</text>
  <rect x="40" y="105" width="220" height="22" rx="4" fill="#1e293b" stroke="#0ea5e9" stroke-width="1"/>
  <text x="150" y="120" text-anchor="middle" fill="#7dd3fc" font-size="7" font-family="monospace">def test_func(): result = calculate()</text>
  <text x="150" y="140" text-anchor="middle" fill="#f87171" font-size="8">❌ No assert! Line executed but verified nothing</text>
  <text x="150" y="158" text-anchor="middle" fill="#f87171" font-size="8">❌ 100% coverage, 0% correctness check</text>

  <!-- Mutation (right) -->
  <rect x="300" y="50" width="260" height="120" rx="10" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="430" y="72" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="700">🧬 Mutation Testing (Truth)</text>
  <text x="430" y="92" text-anchor="middle" fill="#86efac" font-size="8">"Would tests fail if code were wrong?"</text>
  <rect x="320" y="105" width="220" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="430" y="120" text-anchor="middle" fill="#86efac" font-size="7" font-family="monospace">Mutant: > changed to >= → test still passes?</text>
  <text x="430" y="140" text-anchor="middle" fill="#4ade80" font-size="8">✅ If test FAILS → mutant killed (good!)</text>
  <text x="430" y="158" text-anchor="middle" fill="#f87171" font-size="8">❌ If test PASSES → mutant survived (blind spot!)</text>

  <!-- Mutation score -->
  <rect x="60" y="190" width="460" height="110" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="290" y="212" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">🧬 Mutation Score = Killed Mutants / Total Mutants</text>

  <rect x="80" y="225" width="200" height="25" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="180" y="242" text-anchor="middle" fill="#4ade80" font-size="8">KILLED: Test caught the injected bug ✅</text>

  <rect x="300" y="225" width="200" height="25" rx="4" fill="#450a0a" stroke="#dc2626" stroke-width="1.5"/>
  <text x="400" y="242" text-anchor="middle" fill="#f87171" font-size="8">SURVIVED: Test missed the bug! ❌</text>

  <text x="290" y="275" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="600">Target: 80%+ mutation score for financial code</text>
  <text x="290" y="290" text-anchor="middle" fill="#64748b" font-size="7">Tools: mutmut (Python), Stryker (JS/TS)</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Coverage = line execute হলো (মিথ্যা নিরাপত্তা)। Mutation = bug ঢুকিয়ে দেখো test ধরছে কিনা (সত্য)। Survived mutant = test blind spot।</div>

<div class="code-block">Coverage vs Mutation — মিথ্যা নিরাপত্তা উন্মোচন:

১. CODE COVERAGE (বিভ্রান্তিকর — 100% কিন্তু কোনো assertion নেই):
  # buggy.py
  def is_adult(age):
      return age >= 18

  # tests/test_buggy.py — কোনো assert নেই!
  def test_is_adult():
      result = is_adult(20)   # ← line execute হলো, কিন্তু verify করছে না!
      # assert ভুলে গেছি!

  $ pytest --cov=buggy tests/ --cov-report=term-missing
  ---------- coverage: platform linux ----------
  Name       Stmts   Miss  Cover
  ------------------------------------
  buggy.py       2      0   100%   ← 💀 100% coverage! কিন্তু bug ধরবে না।
  ------------------------------------
  TOTAL          2      0   100%

২. MUTATION TESTING (সত্য — bug ঢুকিয়ে দেখো test ধরছে কিনা):
  $ mutmut run --paths-to-mutate=buggy.py
   2. 1. is_adult
  🧬 Mutants generated: 4

  $ mutmut results
  To apply a mutant on disk:
    mutmut show <id>

  Survived mutants (1):
    buggy.py:2:
   -     return age >= 18
   +     return age > 18    ← mutant! >= কে > বদলানো হলো

  $ mutmut show 1
  --- buggy.py
  +++ buggy.py
  @@ -1,2 +1,2 @@
   def is_adult(age):
  -    return age >= 18
  +    return age > 18

  🚨 SURVIVED! Test pass করে গেছে — মানে test এ assert নেই। Blind spot!

mutation score = killed / total = 3/4 = 75%  (target: 80%+)
→ coverage 100% ছিল, কিন্তু mutation উন্মোচন করল যে test দুর্বল।</div>

<div class="dialogue"><strong>মিউটেশন টেস্টার:</strong> Coverage তোমাকে মিথ্যা নিরাপত্তা দেয়। ১০০% coverage মানে শুধু প্রতিটা line execute হয়েছে — সেটা সঠিক কিনা কেউ চেক করেনি! Mutation testing: কোড ক্লোন করো, একটা ছোট bug ঢুকিয়ে দাও — <code>></code> কে <code>>=</code> বদলাও, <code>+</code> কে <code>-</code> করো। তারপর test চালাও। যদি test fail করে — mutant killed! তোমার test শক্তিশালী। যদি pass করে — mutant survived! তোমার test দুর্বল। LedgerPilot এ: mutmut মাসে একবার financial module এ চালাও। Target: ৮০%+ mutation score।</div>`,
  recall: [
    { q: "100% code coverage কেন মিথ্যা?", a: "Coverage শুধু বলে line execute হয়েছে। Assertion ছাড়া test চালালেও 100% হয়। Mutation testing দরকার — bug ঢুকিয়ে দেখো test ধরছে কিনা।" },
    { q: "Mutation score কী?", a: "Killed mutants / total mutants। যত বেশি, তত শক্তিশালী test suite। Survived mutant = test blind spot — একটা বাগ যা test ধরতে পারছে না।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 5 — The Five Masks (Test Doubles)
// ═══════════════════════════════════════════
doors.push({
  num: 5,
  icon: "🎭",
  color: "#a855f7",
  tagline: "পাঁচ মুখোশ — Five Masks",
  name: "The Five Masks",
  secret: "Dummy, Stub, Spy, Mock, Fake — Martin Fowler এর test doubles taxonomy। ভুল ব্যবহার = brittle test।",
  story: `<p class="scene-setting">Martin Fowler এর classic article 'Mocks Aren't Stubs' — test doubles এর ৫ ধরনের classific। Dummy = ফাঁকা placeholder (parameter fill)। Stub = canned response (Stripe always success)। Spy = record calls (কতবার call হলো)। Mock = behavior verify (একবারই call হলো কিনা)। Fake = real implementation (in-memory DB)। ভুল double ব্যবহার করলে test fragile হয়ে যায়!</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎭 Test Doubles Taxonomy (Martin Fowler)</text>

  <!-- Dummy -->
  <rect x="20" y="50" width="105" height="120" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
  <text x="72" y="72" text-anchor="middle" fill="#94a3b8" font-size="9" font-weight="700">Dummy</text>
  <text x="72" y="88" text-anchor="middle" fill="#cbd5e1" font-size="7">Placeholder</text>
  <text x="72" y="105" text-anchor="middle" fill="#94a3b8" font-size="7">Passed but never used</text>
  <rect x="30" y="118" width="85" height="18" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="72" y="131" text-anchor="middle" fill="#64748b" font-size="6">user=None</text>
  <text x="72" y="148" text-anchor="middle" fill="#64748b" font-size="6">Just fills param</text>
  <text x="72" y="162" text-anchor="middle" fill="#64748b" font-size="6">No behavior</text>

  <!-- Stub -->
  <rect x="135" y="50" width="105" height="120" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="187" y="72" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">Stub</text>
  <text x="187" y="88" text-anchor="middle" fill="#bae6fd" font-size="7">Canned answer</text>
  <text x="187" y="105" text-anchor="middle" fill="#7dd3fc" font-size="7">Pre-programmed response</text>
  <rect x="145" y="118" width="85" height="18" rx="3" fill="#1e293b" stroke="#0ea5e9" stroke-width="1"/>
  <text x="187" y="131" text-anchor="middle" fill="#7dd3fc" font-size="6">stripe.charge = success</text>
  <text x="187" y="148" text-anchor="middle" fill="#7dd3fc" font-size="6">Always same answer</text>
  <text x="187" y="162" text-anchor="middle" fill="#7dd3fc" font-size="6">State verification</text>

  <!-- Spy -->
  <rect x="250" y="50" width="105" height="120" rx="8" fill="#451a03" stroke="#f97316" stroke-width="1.5"/>
  <text x="302" y="72" text-anchor="middle" fill="#fb923c" font-size="9" font-weight="700">Spy</text>
  <text x="302" y="88" text-anchor="middle" fill="#fdba74" font-size="7">Records calls</text>
  <text x="302" y="105" text-anchor="middle" fill="#fb923c" font-size="7">Stub + information</text>
  <rect x="260" y="118" width="85" height="18" rx="3" fill="#1e293b" stroke="#f97316" stroke-width="1"/>
  <text x="302" y="131" text-anchor="middle" fill="#fb923c" font-size="6">spy.call_count == 2</text>
  <text x="302" y="148" text-anchor="middle" fill="#fb923c" font-size="6">How many times called?</text>
  <text x="302" y="162" text-anchor="middle" fill="#fb923c" font-size="6">Records info</text>

  <!-- Mock -->
  <rect x="365" y="50" width="105" height="120" rx="8" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="417" y="72" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">Mock</text>
  <text x="417" y="88" text-anchor="middle" fill="#d8b4fe" font-size="7">Expects calls</text>
  <text x="417" y="105" text-anchor="middle" fill="#c084fc" font-size="7">Behavior verification</text>
  <rect x="375" y="118" width="85" height="18" rx="3" fill="#1e293b" stroke="#a855f7" stroke-width="1"/>
  <text x="417" y="131" text-anchor="middle" fill="#c084fc" font-size="6">expect().once()</text>
  <text x="417" y="148" text-anchor="middle" fill="#c084fc" font-size="6">Strict expectations</text>
  <text x="417" y="162" text-anchor="middle" fill="#c084fc" font-size="6">Fails if wrong</text>

  <!-- Fake -->
  <rect x="480" y="50" width="80" height="120" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="520" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Fake</text>
  <text x="520" y="88" text-anchor="middle" fill="#86efac" font-size="7">Real impl</text>
  <text x="520" y="105" text-anchor="middle" fill="#4ade80" font-size="7">Working but simplified</text>
  <rect x="487" y="118" width="66" height="18" rx="3" fill="#1e293b" stroke="#22c55e" stroke-width="1"/>
  <text x="520" y="131" text-anchor="middle" fill="#4ade80" font-size="6">in-memory DB</text>
  <text x="520" y="148" text-anchor="middle" fill="#4ade80" font-size="6">Real behavior</text>
  <text x="520" y="162" text-anchor="middle" fill="#4ade80" font-size="6">⭐ Best choice!</text>

  <!-- Over-mocking warning -->
  <rect x="30" y="190" width="520" height="110" rx="8" fill="#0f172a" stroke="#dc2626" stroke-width="1.5"/>
  <text x="290" y="212" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">⚠️ Over-Mocking = Brittle Tests</text>
  <text x="290" y="232" text-anchor="middle" fill="#fca5a5" font-size="8">When tests know too much about implementation details:</text>
  <text x="290" y="250" text-anchor="middle" fill="#fca5a5" font-size="8">• Refactoring (same behavior, different code) → tests break ❌</text>
  <text x="290" y="265" text-anchor="middle" fill="#fca5a5" font-size="8">• Mocks encode assumptions → real system changes → false positive ❌</text>
  <text x="290" y="285" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="600">✅ Prefer Fake (in-memory DB) over Mock. Test behavior, not implementation.</text>
</svg>
</div>
<div class="svg-caption">চিত্র: ৫ test doubles — Dummy (placeholder), Stub (canned), Spy (record), Mock (expect), Fake (real impl)। Fake সবচেয়ে ভালো — in-memory DB। Over-mocking = brittle।</div>

<div class="code-block">Five Test Doubles — জীবন্ত উদাহরণ (Martin Fowler):

class PaymentProcessor:
    def __init__(self, gateway, logger):
        self.gateway = gateway      # Stripe এর মত
        self.logger = logger

    def charge(self, user, amount):
        result = self.gateway.pay(amount)
        self.logger.log(f"Charged {user}: {result}")
        return result

১. DUMMY — placeholder, কখনো use হয় না:
  def test_payment_init():
      dummy_logger = None   # শুধু param fill করার জন্য
      proc = PaymentProcessor(RealGateway(), dummy_logger)
      assert proc is not None   # logger কখনো call হয় না

২. STUB — canned response (state verification):
  class StripeStub:
      def pay(self, amount):
          return {"status": "success", "id": "ch_test_123"}

  def test_charge_succeeds():
      proc = PaymentProcessor(StripeStub(), RealLogger())
      result = proc.charge("rakib", 100)
      assert result["status"] == "success"   # ← fixed answer

৩. SPY — record calls (কতবার call হলো):
  class LoggerSpy:
      def __init__(self):
          self.calls = []
      def log(self, msg):
          self.calls.append(msg)

  def test_logger_was_called():
      spy = LoggerSpy()
      proc = PaymentProcessor(StripeStub(), spy)
      proc.charge("rakib", 100)
      assert len(spy.calls) == 1   # ← কতবার call হলো তা যাচাই

৪. MOCK — strict expectations (behavior verification):
  from unittest.mock import MagicMock
  def test_charge_calls_gateway_once():
      mock_gateway = MagicMock()
      mock_gateway.pay.return_value = {"status": "success"}
      proc = PaymentProcessor(mock_gateway, LoggerSpy())
      proc.charge("rakib", 100)
      mock_gateway.pay.assert_called_once_with(100)   # ← strict!

৫. FAKE ⭐ — real implementation, simplified (in-memory DB):
  class InMemoryAccountDB:
      """Real CRUD behavior, কিন্তু RAM এ — no MySQL needed."""
      def __init__(self):
          self.data = {}
      def save(self, acct):
          self.data[acct.id] = acct
      def get(self, id):
          return self.data.get(id)

  def test_transfer_between_accounts():
      db = InMemoryAccountDB()   # ← Fake! Real behavior, fast.
      db.save(Account(id=1, balance=1000))
      db.save(Account(id=2, balance=500))
      transfer(db, from_id=1, to_id=2, amount=200)
      assert db.get(1).balance == 800
      assert db.get(2).balance == 700

🏆 Best practice: Fake > Spy > Stub > Mock। Mock কমাও, behavior test করো।</div>

<div class="dialogue"><strong>মার্টিন ফাউলার:</strong> আমি 'Mocks Aren't Stubs' লিখেছিলাম কারণ অনেকে mock আর stub মিক্স করে ফেলে। পাঁচ ধরনের test double আছে — প্রতিটার নিজস্ব উদ্দেশ্য। Stub শুধু fixed answer দেয়। Mock behavior verify করে — কতবার call হলো, কী argument দিয়ে। Fake হল সবচেয়ে সুন্দর — একটা real implementation কিন্তু simplified। In-memory database = Fake। সব কিছু mock করলে test brittle হয়ে যায় — refactor করলেই ভাঙে। আমার পরামর্শ: যত বেশি Fake, তত ভালো। যত কম Mock, তত স্থিতিশীল test।</div>`,
  recall: [
    { q: "Stub আর Mock এর মূল পার্থক্য কী?", a: "Stub = canned response, state verification (কী return করল)। Mock = behavior verification (কতবার call হলো, কী argument দিয়ে)। Mock বেশি strict, বেশি brittle।" },
    { q: "Fake কেন সবচেয়ে ভালো test double?", a: "Fake = real behavior, simplified implementation। In-memory DB তে সত্যিকারের CRUD কাজ করে। Mock এর মতো assumption কোড করতে হয় না। Refactor-safe।" },
  ]
});
