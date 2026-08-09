doors.push({
  num: 6,
  icon: "🎲",
  color: "#22c55e",
  name: "শত হাতে পরীক্ষা",
  subtitle: "Testing with a Hundred Hands",
  tech: "Property-Based Testing — Hypothesis (MacIver 2013), QuickCheck (Claessen 2000), shrinking, invariants",
  spirit: "কাওসার — অফুরন্ত ঝরনা, অসংখ্য ইনপুট দিয়ে পরীক্ষা",
  secret: "Property-based: তুমি ইনপুট লিখো না — একটি নিয়ম (property) লেখো। টুল হাজার এলোমেলো ইনপুট চেষ্টা করে। যদি ভাঙে — shrinking দিয়ে সবচেয়ে ছোট ব্যর্থ ইনপুট খুঁজে দেয়।",
  recall: {
    q: " Property-based testing কী? Example-based থেকে পার্থক্য?",
    qen: "What is property-based testing? How does it differ from example-based?",
    a: "Example-based: assert f(2,3)==5। Property-based: for ALL a,b: f(a,b)==f(b,a)। Hypothesis হাজার ইনপুট চেষ্টা করে, ভাঙ্গলে shrink করে।",
    aen: "Example-based: assert f(2,3)==5. Property-based: for ALL a,b: f(a,b)==f(b,a). Hypothesis tries thousands of inputs, shrinks on failure."
  },
  story: `<p class="scene-setting">জাইন (Door ৫) তোমাকে test double শিখিয়েছেন। কিন্তু একটি সমস্যা — তুমি যে কয়টি ইনপুট টেস্ট করো, তার বাইরে কী? ১০০ টেস্ট করলে ১০১ তম ইনপুট ভাঙবে কি? ২০০০ সালে Koen Claessen ও John Hughes একটি বিপ্লবাত্মক ধারণা দিলেন — QuickCheck। শুধু example নয়, property লেখো। টুল হাজার এলোমেলো ইনপুট চেষ্টা করে।</p>
<p class="scene-setting en">Zain (Door 5) taught you test doubles. But one problem — the inputs you test, what about the rest? Test 100 inputs — will the 101st break? In 2000 Koen Claessen and John Hughes proposed a revolutionary idea — QuickCheck. Don't write examples, write properties. The tool tries thousands of random inputs.</p>

<div class="dialogue"><strong>অফুরন্ত-পরীক্ষক হাসান:</strong> ধরো তোমার addition ফাংশন: add(a,b)। Example-based: assert add(২,৩)==৫। কিন্তু add(১০০০, ০.১)? Property-based: for all a,b: add(a,b)==add(b,a) (commutative)। Hypothesis হাজার সংখ্যা চেষ্টা করে। ভাঙলে shrinking — সবচেয়ে ছোট ব্যর্থ ইনপুট। "add(0.1, 0.2) ভেঙেছে — এটা floating point!" এই সমস্যা example-based ধরতো না।</div>
<div class="dialogue en"><strong>Inexhaustible Tester Hasan:</strong> Say your addition function: add(a,b). Example-based: assert add(2,3)==5. But add(1000, 0.1)? Property-based: for all a,b: add(a,b)==add(b,a) (commutative). Hypothesis tries thousands of numbers. On failure — shrinking — smallest failing input. "add(0.1, 0.2) broke — it's floating point!" Example-based wouldn't catch this.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Test Data Management:</strong> Tests shared mutable data — random failures depending on execution order. Fix: each test gets isolated, fresh data.</div></div>


<div class="code-block">— Hypothesis: Property-Based Testing —

  from hypothesis import given, strategies as st

  # Property 1: Commutative (a+b = b+a)
  @given(st.integers(), st.integers())
  def test_add_commutative(a, b):
      assert add(a, b) == add(b, a)
  # Hypothesis হাজার জোড়া চেষ্টা করে!

  # Property 2: Money conservation
  # transfer(from, to, amount) → মোট টাকা অপরিবর্তিত
  @given(st.decimals(min_value=1, max_value=1000))
  def test_transfer_conerves_money(amount):
      before = account_a.balance + account_b.balance
      transfer(account_a, account_b, amount)
      after = account_a.balance + account_b.balance
      assert before == after  # টাকা তৈরি/ধ্বংস হয়নি!

  # Shrinking উদাহরণ:
  # Falsifying example: test_add(a=10000, b=-3.14)
  # Shrunk to: test_add(a=0, b=-1) ← সবচেয়ে ছোট!
  # তুমি দেখো — নেতিবাচক সংখ্যায় bug!

  # QuickCheck (Haskell, 2000):
  -- prop_reverse xs = reverse (reverse xs) == xs
  -- quickCheck prop_reverse
  -- +++ OK, passed 100 tests.</div>

<div class="verse">وَمَا تَدْرِي نَفْسٌ مَّاذَا تَكْسِبُ غَدًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং কোনো আত্মা জানে না আগামীকাল কী অর্জন করবে।" — কুরআন ৩১:৩৪</div>

<p class="scene-setting">কাওসার — অফুরন্ত ঝরনা। Property-based testing সেই অফুরন্ততার রূপ — হাজার ইনপুট, অসংখ্য সম্ভাবনা। তুমি জানো না কোন ইনপুট ভাঙাবে — কিন্তু টুল খুঁজে দেয়। অদৃশ্য ভবিষ্যৎ ইনপুটের বিরুদ্ধে সুরক্ষা।</p>
<p class="scene-setting en">Kawthar — inexhaustible spring. Property-based testing is the form of that inexhaustibility — thousands of inputs, infinite possibilities. You don't know which input will break — but the tool finds it. Protection against unseen future inputs.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৪ (Sampling):</strong> random sampling ও Hypothesis testing — property-based testing সেই একই নীতি! এলোমেলো নমুনা দিয়ে সত্য যাচাই।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a"/>
  <text x="290" y="28" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">Property-Based Testing — হাজার ইনপুট, স্বয়ংক্রিয়</text>
  <defs><marker id="arrTQ6" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#7dd3fc"/></marker></defs>
  <text x="80" y="60" text-anchor="middle" fill="#22d3ee" font-size="10" font-weight="bold">এলোমেলো ইনপুট</text>
  <rect x="30" y="70" width="100" height="20" rx="4" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="80" y="84" text-anchor="middle" fill="#7dd3fc" font-size="8">a=2, b=3</text>
  <rect x="30" y="95" width="100" height="20" rx="4" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="80" y="109" text-anchor="middle" fill="#7dd3fc" font-size="8">a=1000, b=-7</text>
  <rect x="30" y="120" width="100" height="20" rx="4" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="80" y="134" text-anchor="middle" fill="#7dd3fc" font-size="8">a=0.1, b=0.2</text>
  <text x="80" y="158" text-anchor="middle" fill="#94a3b8" font-size="7">...হাজার...</text>
  <rect x="200" y="85" width="180" height="60" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="108" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Property</text>
  <text x="290" y="125" text-anchor="middle" fill="#86efac" font-size="9">for all a,b:</text>
  <text x="290" y="138" text-anchor="middle" fill="#86efac" font-size="9">add(a,b)==add(b,a)</text>
  <line x1="135" y1="95" x2="195" y2="105" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ6)"/>
  <line x1="135" y1="115" x2="195" y2="115" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ6)"/>
  <line x1="135" y1="135" x2="195" y2="125" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ6)"/>
  <line x1="385" y1="115" x2="430" y2="115" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ6)"/>
  <rect x="435" y="85" width="120" height="60" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="495" y="105" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="bold">✗ ভাঙলে!</text>
  <text x="495" y="122" text-anchor="middle" fill="#fca5a5" font-size="8">add(0.1,0.2)≠</text>
  <text x="495" y="135" text-anchor="middle" fill="#fca5a5" font-size="8">add(0.2,0.1)</text>
  <text x="290" y="175" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">↓ Shrinking ↓</text>
  <rect x="160" y="190" width="130" height="24" rx="4" fill="#1e293b" stroke="#fbbf24"/>
  <text x="225" y="206" text-anchor="middle" fill="#fcd34d" font-size="8">a=10000, b=-3.14</text>
  <line x1="295" y1="202" x2="320" y2="202" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrTQ6)"/>
  <rect x="325" y="190" width="110" height="24" rx="4" fill="#052e16" stroke="#22c55e"/>
  <text x="380" y="206" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="bold">a=0, b=-1 ★</text>
  <text x="470" y="206" text-anchor="middle" fill="#94a3b8" font-size="7">সবচেয়ে ছোট!</text>
</svg>
</div>
<div class="svg-caption">Property-based testing — একটি নিয়ম লেখো, টুল হাজার ইনপুট চেষ্টা করে, ভাঙ্গলে shrinking দিয়ে ছোট করে</div>
<div class="secret-box">🎲 <strong>Property-based = হাজার ইনপুট, স্বয়ংক্রিয়।</strong> Example-based এর চেয়ে গভীর। কিন্তু টেস্ট লিখলে — কে চালাবে? কখন চালাবে? সেই উত্তর — CI/CD। পরের দরজায়।</div>`,
  senior: {
    title: "Property-Based Testing এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">QuickCheck (2000)</td><td>Claessen & Hughes — Haskell</td></tr>
<tr><td class="hl">Hypothesis (2013)</td><td>Python — MacIver</td></tr>
<tr><td class="hl">Property</td><td>নিয়ম — for all x: P(x)</td></tr>
<tr><td class="hl">Shrinking</td><td>সবচেয়ে ছোট ব্যর্থ ইনপুট</td></tr>
<tr><td class="hl">Example-based</td><td>assert f(2,3)==5 — সীমিত</td></tr>
<tr><td class="hl">Property-based</td><td>for all a,b: f(a,b)==f(b,a)</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "🔄",
  color: "#22c55e",
  name: "স্বয়ংক্রিয় পাইপলাইন",
  subtitle: "The Automated Pipeline",
  tech: "CI/CD Pipeline — GitHub Actions, Jenkins, deploy gates, test automation, progressive delivery",
  spirit: "সাবিক — পরিশুদ্ধ, কোড থেকে প্রোডাকশন পর্যন্ত শুদ্ধি",
  secret: "CI/CD = কোড পুশ করো → স্বয়ংক্রিয় টেস্ট → স্বয়ংক্রিয় ডেপ্লয়। মানুষের হস্তক্ষেপ নেই। প্রতিটি পরিবর্তন স্বয়ংক্রিয়ভাবে যাচাই ও প্রকাশিত।",
  recall: {
    q: " CI ও CD-এর পার্থক্য কী? deploy gate কী?",
    qen: "What is the difference between CI and CD? What is a deploy gate?",
    a: "CI = Continuous Integration — প্রতিটি পুশে স্বয়ংক্রিয় টেস্ট। CD = Continuous Delivery/Deployment — স্বয়ংক্রিয় ডেপ্লয়। Deploy gate = টেস্ট পাশ না করলে ডেপ্লয় ব্লক।",
    aen: "CI = Continuous Integration — automated tests on every push. CD = Continuous Delivery/Deployment — automated deploy. Deploy gate = block deploy if tests fail."
  },
  story: `<p class="scene-setting">হাসান (Door ৬) তোমাকে property-based testing শিখিয়েছেন। কিন্তু টেস্ট লিখলেই হবে না — কে চালাবে? প্রতিটি পুশে স্বয়ংক্রিয়ভাবে চালাতে হবে। এটাই CI/CD — Continuous Integration / Continuous Delivery। কোড পুশ → স্বয়ংক্রিয় টেস্ট → স্বয়ংক্রিয় ডেপ্লয়। মানুষের হাত ছাড়াই।</p>
<p class="scene-setting en">Hasan (Door 6) taught you property-based testing. But writing tests is not enough — who runs them? Every push must automatically run them. This is CI/CD — Continuous Integration / Continuous Delivery. Code push → automated tests → automated deploy. Without human hands.</p>

<div class="dialogue"><strong>পাইপলাইন-স্থপতি ফাহিম:</strong> GitHub Actions হল সবচেয়ে জনপ্রিয় CI/CD টুল। প্রতিটি PR-এ: lint → unit → integration → E2E → mutation → build → deploy। কোনো ধাপ ব্যর্থ হলে deploy বন্ধ। এটাই deploy gate — টেস্ট পাশ না করলে প্রোডাকশনে যাবে না। LedgerPilot-এ: pytest → mypy → bandit → docker build → deploy to server। সব স্বয়ংক্রিয়।</div>
<div class="dialogue en"><strong>Pipeline Architect Fahim:</strong> GitHub Actions is the most popular CI/CD tool. On every PR: lint → unit → integration → E2E → mutation → build → deploy. Any step fails — deploy blocked. This is the deploy gate — tests must pass before production. LedgerPilot: pytest → mypy → bandit → docker build → deploy. All automated.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Slow Test Suite:</strong> Test suite took 45 minutes — devs stopped running it before commits. Fix: split into fast unit suite (seconds) and slow integration suite.</div></div>


<div class="code-block">— GitHub Actions: CI/CD Pipeline —

  # .github/workflows/ci.yml
  name: CI/CD Pipeline
  on: [push, pull_request]

  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - name: Setup Python
          uses: actions/setup-python@v5
          with: {python-version: '3.12'}

        - name: Install
          run: pip install -r requirements.txt

        - name: Lint (static analysis)
          run: ruff check . && mypy backend/

        - name: Unit + Integration Tests
          run: pytest --cov=backend --cov-report=xml

        - name: Mutation Testing
          run: mutmut run || true  # advisory

        - name: Security Scan
          run: bandit -r backend/ && pip-audit

    deploy:
      needs: test               # deploy gate!
      if: github.ref == 'refs/heads/main'
      steps:
        - name: Build Docker
          run: docker build -t ledgerpilot .
        - name: Deploy
          run: docker push && ssh deploy

  — প্রতিটি PR: স্বয়ংক্রিয় পরীক্ষা —
  — সব পাশ → স্বয়ংক্রিয় ডেপ্লয় —</div>

<div class="verse">قَدْ أَفْلَحَ مَن زَكَّاهَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"সফল হয়েছে সে যে একে পরিশুদ্ধ করেছে।" — কুরআন ৯১:৯</div>

<p class="scene-setting">সাবিক — পরিশুদ্ধি। CI/CD সেই পরিশুদ্ধির স্বয়ংক্রিয় রূপ। প্রতিটি কোড পরিবর্তন পরীক্ষিত হয় — lint, test, scan। পরিশুদ্ধ কোডই প্রোডাকশনে যায়। অপরিশুদ্ধ আটকে যায়। এটাই deploy gate — শুদ্ধির দরজা।</p>
<p class="scene-setting en">Sabik — purification. CI/CD is the automated form of that purification. Every code change is tested — lint, test, scan. Only pure code reaches production. Impure code is blocked. This is the deploy gate — the door of purity.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৩ (Cloud DevOps) Door ৩ (CI/CD):</strong> সম্পূর্ণ CI/CD পাইপলাইন। Book ৪০ (Software Engineering) Door ৭ (DevOps): DevOps culture = CI/CD + monitoring।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a"/>
  <text x="290" y="28" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">CI/CD পাইপলাইন — পুশ থেকে প্রোডাকশন</text>
  <defs><marker id="arrTQ7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#7dd3fc"/></marker></defs>
  <rect x="15" y="70" width="70" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="50" y="90" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">git push</text>
  <text x="50" y="105" text-anchor="middle" fill="#86efac" font-size="7">কোড পাঠাও</text>
  <rect x="105" y="70" width="70" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="140" y="90" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">Lint</text>
  <text x="140" y="105" text-anchor="middle" fill="#86efac" font-size="7">mypy, ruff</text>
  <rect x="195" y="70" width="70" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="230" y="90" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">Tests</text>
  <text x="230" y="105" text-anchor="middle" fill="#86efac" font-size="7">pytest</text>
  <rect x="285" y="70" width="70" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="320" y="90" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">Mutation</text>
  <text x="320" y="105" text-anchor="middle" fill="#86efac" font-size="7">mutmut</text>
  <rect x="375" y="70" width="70" height="50" rx="8" fill="#0c4a6e" stroke="#22d3ee" stroke-width="2"/>
  <text x="410" y="90" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="bold">Security</text>
  <text x="410" y="105" text-anchor="middle" fill="#bae6fd" font-size="7">bandit</text>
  <rect x="465" y="70" width="70" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="500" y="90" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">Build</text>
  <text x="500" y="105" text-anchor="middle" fill="#86efac" font-size="7">docker</text>
  <line x1="87" y1="95" x2="102" y2="95" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ7)"/>
  <line x1="177" y1="95" x2="192" y2="95" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ7)"/>
  <line x1="267" y1="95" x2="282" y2="95" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ7)"/>
  <line x1="357" y1="95" x2="372" y2="95" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ7)"/>
  <line x1="447" y1="95" x2="462" y2="95" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ7)"/>
  <text x="290" y="150" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">▼ Deploy Gate ▼</text>
  <rect x="230" y="160" width="120" height="36" rx="8" fill="#451a03" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="178" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">সব পাশ?</text>
  <text x="290" y="190" text-anchor="middle" fill="#fde68a" font-size="7">না হলে ব্লক!</text>
  <line x1="500" y1="122" x2="350" y2="158" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrTQ7)"/>
  <rect x="230" y="210" width="120" height="30" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="230" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">🚀 প্রোডাকশন</text>
  <line x1="290" y1="198" x2="290" y2="208" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ7)"/>
</svg>
</div>
<div class="svg-caption">CI/CD পাইপলাইন — পুশ থেকে প্রোডাকশন পর্যন্ত স্বয়ংক্রিয়; deploy gate টেস্ট পাশ না করলে ব্লক করে</div>
<div class="secret-box">🔄 <strong>CI/CD = পুশ → টেস্ট → ডেপ্লয়। স্বয়ংক্রিয়।</strong> মানুষের হস্তক্ষেপ নেই। কিন্তু কিছু টেস্ট এলোমেলো ব্যর্থ হয় — কখনো পাশ, কখনো ফেল। সেই অভিশাপ — flaky tests। পরের দরজায়।</div>`,
  senior: {
    title: "CI/CD Pipeline এক নজরে",
    body: `<table class="kv-table"><tr><th>ধাপ</th><th>কী</th></tr>
<tr><td class="hl">CI</td><td>Continuous Integration — প্রতি পুশে টেস্ট</td></tr>
<tr><td class="hl">CD</td><td>Continuous Delivery/Deployment</td></tr>
<tr><td class="hl">Deploy Gate</td><td>টেস্ট পাশ না করলে ডেপ্লয় ব্লক</td></tr>
<tr><td class="hl">GitHub Actions</td><td>সবচেয়ে জনপ্রিয় CI/CD টুল</td></tr>
<tr><td class="hl">Pipeline</td><td>lint → test → build → deploy</td></tr>
<tr><td class="hl">Progressive</td><td>canary → blue-green → rollback</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "🎲",
  color: "#22c55e",
  name: "এলোমেলো ব্যর্থতা",
  subtitle: "The Random Failure",
  tech: "Flaky Tests — timing, order dependency, shared state, network, quarantine, retry strategies",
  spirit: "সবর — ধৈর্য, এলোমেলো ব্যর্থতার বিরুদ্ধে সংগ্রাম",
  secret: "Flaky test = কখনো পাশ, কখনো ফেল। কারণ: timing, order, shared state, network। সমাধান: polling (sleep নয়), isolation, deterministic data। মানুষ ট্রাস্ট হারায় — flaky test কোনো টেস্ট নয়।",
  recall: {
    q: " Flaky test কী? তিনটি সাধারণ কারণ দাও।",
    qen: "What is a flaky test? Give three common causes.",
    a: "Flaky = কখনো পাশ কখনো ফেল। কারণ: (১) sleep/timing (২) test order dependency (৩) shared database state। সমাধান: polling, isolation, deterministic data।",
    aen: "Flaky = sometimes passes, sometimes fails. Causes: (1) sleep/timing (2) test order dependency (3) shared database state. Fix: polling, isolation, deterministic data."
  },
  story: `<p class="scene-setting">ফাহিম (Door ৭) তোমাকে CI/CD শিখিয়েছেন। কিন্তু একটি অভিশাপ — flaky test। একই কোড, একই টেস্ট। কখনো পাশ, কখনো ফেল। কেন? sleep(1) — ধীর সার্ভারে ১ সেকেন্ড যথেষ্ট নয়। Test order — A আগে চললে B পাশ, B আগে চললে ফেল। Shared DB — এক টেস্টের ডেটা অন্য টেস্টে লিক। এই এলোমেলো ব্যর্থতা বিশ্বাস নষ্ট করে।</p>
<p class="scene-setting en">Fahim (Door 7) taught you CI/CD. But one curse — flaky tests. Same code, same test. Sometimes passes, sometimes fails. Why? sleep(1) — on slow servers 1 second isn't enough. Test order — if A runs first, B passes; B first, fails. Shared DB — one test's data leaks to another. This random failure destroys trust.</p>

<div class="dialogue"><strong>ধৈর্যশীল মুনতাহা:</strong> ফাহিম বলেছেন — CI/CD স্বয়ংক্রিয়। কিন্তু flaky test স্বয়ংক্রিয় বিশ্বাস ভাঙে। সমাধান: (১) sleep বাদ দাও — polling ব্যবহার করো (retry until ready)। (২) প্রতিটি টেস্ট আলাদা — কোনো shared state নয়। (৩) Deterministic ডেটা — factory দিয়ে, এলোমেলো নয়। (৪) Flaky quarantine — flaky টেস্ট আলাদা করো, ঠিক না হওয়া পর্যন্ত।</div>
<div class="dialogue en"><strong>Patient Muntaha:</strong> Fahim said — CI/CD is automated. But flaky tests break automated trust. Fix: (1) Drop sleep — use polling (retry until ready). (2) Each test isolated — no shared state. (3) Deterministic data — via factory, not random. (4) Flaky quarantine — separate flaky tests until fixed.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Production-Only Bug:</strong> Bug only appeared in production — test env had different data. Fix: test with production-like data (anonymized).</div></div>


<div class="code-block">— Flaky Test সমাধান —

  # ❌ FLAKY: sleep (timing উপর নির্ভর)
  def test_async_flaky():
      send_request()
      time.sleep(1)              # ❌ ধীর সার্ভারে ব্যর্থ!
      assert get_result() == "ok"

  # ✅ STABLE: polling (প্রস্তুত হলে চেক)
  def test_async_stable():
      send_request()
      deadline = time.time() + 10
      while time.time() < deadline:
          result = get_result()
          if result == "ok": return  # প্রস্তুত!
          time.sleep(0.1)
      assert False, "timeout"       # ১০s পরে ব্যর্থ

  # ❌ FLAKY: test order dependency
  def test_a_creates_user():
      User.objects.create(name="ali")

  def test_b_finds_user():        # A আগে চললে পাশ!
      assert User.objects.filter(name="ali").exists()

  # ✅ STABLE: প্রতিটি টেস্ট স্বাধীন
  @pytest.fixture(autouse=True)
  def reset_db(db):
      User.objects.all().delete()  # প্রতিটি টেস্টে পরিষ্কার
      yield

  # ❌ FLAKY: shared mutable state
  counter = 0
  def test_increment():
      counter += 1
      assert counter == 1  # দ্বিতীয়বার চললে ব্যর্থ!

  # ✅ STABLE: fixture দিয়ে আলাদা
  @pytest.fixture
  def counter():
      return {"value": 0}  # প্রতিটি টেস্টে নতুন</div>

<div class="verse">يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"হে মুমিনরা, তোমরা ধৈর্য ধারণ করো এবং ধৈর্যে প্রতিযোগিতা করো।" — কুরআন ৩:২০০</div>

<p class="scene-setting">সবর — ধৈর্য। Flaky test ধৈর্যের পরীক্ষা। এলোমেলো ব্যর্থতা হতাশ করে — কিন্তু ধৈর্য ধরলে সমাধান মেলে। Polling, isolation, deterministic data — প্রতিটি সমাধান ধৈর্যের ফল। "ধৈর্যে প্রতিযোগিতা করো" — flaky test নির্মূলে প্রতিযোগিতা।</p>
<p class="scene-setting en">Sabr — patience. Flaky tests are the test of patience. Random failure frustrates — but with patience solutions emerge. Polling, isolation, deterministic data — each solution the fruit of patience. "Compete in patience" — competition in eliminating flaky tests.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৩ (Cloud DevOps) Door ৫ (Observability):</strong> production-এও flaky behavior দেখা যায় — monitoring দিয়ে ধরো। Book ৪৭ Door ৭: CI/CD-তে flaky quarantine।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a"/>
  <text x="290" y="28" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">Flaky Test — এলোমেলো ব্যর্থতার রোগনির্ণয়</text>
  <defs><marker id="arrTQ8" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
  <text x="60" y="60" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="bold">❌ Flaky (আগে)</text>
  <rect x="25" y="70" width="50" height="24" rx="4" fill="#052e16" stroke="#22c55e"/>
  <text x="50" y="86" text-anchor="middle" fill="#4ade80" font-size="8">Run 1 ✅</text>
  <rect x="25" y="98" width="50" height="24" rx="4" fill="#450a0a" stroke="#f87171"/>
  <text x="50" y="114" text-anchor="middle" fill="#fca5a5" font-size="8">Run 2 ❌</text>
  <rect x="25" y="126" width="50" height="24" rx="4" fill="#052e16" stroke="#22c55e"/>
  <text x="50" y="142" text-anchor="middle" fill="#4ade80" font-size="8">Run 3 ✅</text>
  <rect x="25" y="154" width="50" height="24" rx="4" fill="#450a0a" stroke="#f87171"/>
  <text x="50" y="170" text-anchor="middle" fill="#fca5a5" font-size="8">Run 4 ❌</text>
  <text x="50" y="195" text-anchor="middle" fill="#94a3b8" font-size="7">একই কোড!</text>
  <line x1="80" y1="120" x2="130" y2="120" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrTQ8)"/>
  <rect x="135" y="65" width="120" height="24" rx="4" fill="#451a03" stroke="#fbbf24"/>
  <text x="195" y="81" text-anchor="middle" fill="#fcd34d" font-size="8">sleep(1) — timing</text>
  <rect x="135" y="95" width="120" height="24" rx="4" fill="#451a03" stroke="#fbbf24"/>
  <text x="195" y="111" text-anchor="middle" fill="#fcd34d" font-size="8">order dependency</text>
  <rect x="135" y="125" width="120" height="24" rx="4" fill="#451a03" stroke="#fbbf24"/>
  <text x="195" y="141" text-anchor="middle" fill="#fcd34d" font-size="8">shared DB state</text>
  <rect x="135" y="155" width="120" height="24" rx="4" fill="#451a03" stroke="#fbbf24"/>
  <text x="195" y="171" text-anchor="middle" fill="#fcd34d" font-size="8">network / time</text>
  <line x1="258" y1="120" x2="305" y2="120" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ8)"/>
  <text x="282" y="112" text-anchor="middle" fill="#7dd3fc" font-size="7">সমাধান</text>
  <rect x="310" y="65" width="130" height="24" rx="4" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="375" y="81" text-anchor="middle" fill="#7dd3fc" font-size="8">→ polling (retry)</text>
  <rect x="310" y="95" width="130" height="24" rx="4" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="375" y="111" text-anchor="middle" fill="#7dd3fc" font-size="8">→ isolation (fixture)</text>
  <rect x="310" y="125" width="130" height="24" rx="4" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="375" y="141" text-anchor="middle" fill="#7dd3fc" font-size="8">→ deterministic data</text>
  <rect x="310" y="155" width="130" height="24" rx="4" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="375" y="171" text-anchor="middle" fill="#7dd3fc" font-size="8">→ mock / freeze_time</text>
  <line x1="443" y1="120" x2="488" y2="120" stroke="#22c55e" stroke-width="2" marker-end="url(#arrTQ8)"/>
  <text x="520" y="60" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">✅ Stable</text>
  <rect x="488" y="70" width="50" height="24" rx="4" fill="#052e16" stroke="#22c55e"/>
  <text x="513" y="86" text-anchor="middle" fill="#4ade80" font-size="8">✅ ✅</text>
  <rect x="488" y="98" width="50" height="24" rx="4" fill="#052e16" stroke="#22c55e"/>
  <text x="513" y="114" text-anchor="middle" fill="#4ade80" font-size="8">✅ ✅</text>
  <rect x="488" y="126" width="50" height="24" rx="4" fill="#052e16" stroke="#22c55e"/>
  <text x="513" y="142" text-anchor="middle" fill="#4ade80" font-size="8">✅ ✅</text>
  <text x="513" y="165" text-anchor="middle" fill="#4ade80" font-size="7" font-weight="bold">শূন্য flaky</text>
</svg>
</div>
<div class="svg-caption">Flaky test — কখনো পাশ কখনো ফেল; কারণ (timing, order, state) খুঁজে সমাধান (polling, isolation, deterministic)</div>
<div class="secret-box">🎲 <strong>Flaky = এলোমেলো ব্যর্থতা। সমাধান: polling, isolation, deterministic।</strong> কিন্তু সবচেয়ে কঠিন সমস্যা — দুটো আলাদা টিমের কোড একসাথে কাজ করবে কীভাবে? Contract testing — পরের দরজায়।</div>`,
  senior: {
    title: "Flaky Tests এক নজরে",
    body: `<table class="kv-table"><tr><th>কারণ</th><th>সমাধান</th></tr>
<tr><td class="hl">sleep/timing</td><td>polling (retry until ready)</td></tr>
<tr><td class="hl">Order dependency</td><td>প্রতিটি টেস্ট স্বাধীন</td></tr>
<tr><td class="hl">Shared state</td><td>fixtures, reset between tests</td></tr>
<tr><td class="hl">Network</td><td>mock external services</td></tr>
<tr><td class="hl">Date/time</td><td>freeze_time, deterministic</td></tr>
<tr><td class="hl">Quarantine</td><td>flaky টেস্ট আলাদা করো</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "📜",
  color: "#22c55e",
  name: "চুক্তির দরজা",
  subtitle: "The Contract Door",
  tech: "Contract Testing — Pact (Suresh 2013), consumer-driven contracts, provider verification, can-i-deploy",
  spirit: "আহদ — চুক্তি, দুই পক্ষের সম্মতির দলিল",
  secret: "Microservice-এ দুটো টিম — frontend ও backend। কেউ নিজের API বদলালে অন্যজন ভাঙে। Contract testing: consumer বলে কী চায়, provider যাচাই করে দেয় কিনা। Pact।",
  recall: {
    q: " Consumer-driven contract testing কী? Pact কীভাবে কাজ করে?",
    qen: "What is consumer-driven contract testing? How does Pact work?",
    a: "Consumer বলে কী response চায় (contract)। Provider সেই contract verify করে। কেউ API বদলালে contract ভাঙে → can-i-deploy ব্লক করে।",
    aen: "Consumer declares expected response (contract). Provider verifies against contract. If API changes — contract breaks → can-i-deploy blocks."
  },
  story: `<p class="scene-setting">মুনতাহা (Door ৮) তোমাকে flaky test সমাধান শিখিয়েছেন। কিন্তু microservice-এ একটি বৃহত্তর সমস্যা — দুটো টিম। Frontend ও backend আলাদা। Backend API বদলালে frontend ভাঙে। কিন্তু backend জানেই না কে তার API ব্যবহার করছে! Contract testing এর উত্তর — consumer বলে কী চায়, provider যাচাই করে।</p>
<p class="scene-setting en">Muntaha (Door 8) taught you flaky test solutions. But in microservices a bigger problem — two teams. Frontend and backend separate. Backend changes API — frontend breaks. But backend doesn't even know who uses their API! Contract testing answers — consumer declares expectations, provider verifies.</p>

<div class="dialogue"><strong>চুক্তি-কারিগর ইয়াসমিন:</strong> Pact (২০১৩) হল contract testing টুল। প্রক্রিয়া: (১) Frontend টেস্ট লেখে — এই response চাই। (২) Pact সেই টেস্ট থেকে contract ফাইল তৈরি করে। (৩) Backend সেই contract verify করে — আমার API এই response দেয় কি? (৪) কেউ API বদলালে contract ভাঙে। can-i-deploy বলে — না, আগে contract ঠিক করো। এটাই consumer-driven — consumer নিয়ন্ত্রণ করে।</div>
<div class="dialogue en"><strong>Contract Artisan Yasmin:</strong> Pact (2013) is the contract testing tool. Process: (1) Frontend writes test — I expect this response. (2) Pact generates contract file from test. (3) Backend verifies contract — does my API give this response? (4) If API changes — contract breaks. can-i-deploy says — no, fix contract first. This is consumer-driven — consumer controls.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — E2E Test Maintenance Nightmare:</strong> 100 E2E tests broke on every UI change. Fix: E2E tests should cover critical paths only — keep them few.</div></div>


<div class="code-block">— Pact: Contract Testing —

  # Consumer (frontend) — চুক্তি লেখো
  def test_get_user_contract():
      # আমি এই response প্রত্যাশা করি
      pact.given("user 42 exists") \\
          .upon_receiving("a request for user 42") \\
          .with_request("GET", "/api/users/42") \\
          .will_respond_with(200, body={
              "id": 42,
              "name": "ali",
              "balance": 1500
          })

  # Pact ফাইল তৈরি: user-service-client.json
  # এটাই contract — দুই পক্ষের সম্মতির দলিল

  # Provider (backend) — চুক্তি যাচাই করো
  $ pact-verifier --pact-url=user-service-client.json \\
      --provider-base-url=http://localhost:8000

  # যদি API response বদলে:
  # ✗ Contract broken! Expected name="ali", got username="ali"
  # → can-i-deploy: NO — fix contract first!

  $ pact-broker can-i-deploy?
  # "No — consumer frontend needs updating"</div>

<div class="verse">أَوْفُوا بِالْعُقُودِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"তোমরা চুক্তি পূরণ করো।" — কুরআন ৫:১</div>

<p class="scene-setting">আহদ — চুক্তি। Contract testing সেই চুক্তির ডিজিটাল রূপ। Consumer ও provider একটি সম্মতির দলিল তৈরি করে। কেউ একতরফা বদলাতে পারে না — চুক্তি ভাঙলে deploy বন্ধ। এটাই consumer-driven — যে ব্যবহার করে, সে নিয়ন্ত্রণ করে।</p>
<p class="scene-setting en">Ahd — contract. Contract testing is the digital form of that contract. Consumer and provider create a consent document. No one can unilaterally change — if contract breaks, deploy stops. This is consumer-driven — whoever uses it, controls it.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (Distributed Systems) Door ৬ (Microservices):</strong> microservice-এ contract testing অপরিহার্য। Book ৪৩ (Cloud DevOps) Door ৪: CI/CD-তে can-i-deploy gate।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a"/>
  <text x="290" y="28" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">Contract Testing — Consumer-Driven চুক্তি</text>
  <defs><marker id="arrTQ9" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#7dd3fc"/></marker></defs>
  <rect x="20" y="60" width="120" height="100" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="80" y="82" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">Consumer</text>
  <text x="80" y="98" text-anchor="middle" fill="#86efac" font-size="8">(Frontend)</text>
  <rect x="35" y="108" width="90" height="20" rx="3" fill="#0f172a" stroke="#4ade80"/>
  <text x="80" y="121" text-anchor="middle" fill="#4ade80" font-size="7">টেস্ট: এই চাই</text>
  <text x="80" y="140" text-anchor="middle" fill="#86efac" font-size="7">GET /users/42</text>
  <text x="80" y="152" text-anchor="middle" fill="#86efac" font-size="7">→ {name: ali}</text>
  <rect x="210" y="65" width="140" height="90" rx="8" fill="#451a03" stroke="#fbbf24" stroke-width="2"/>
  <text x="280" y="88" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="bold">📜 Pact Broker</text>
  <text x="280" y="108" text-anchor="middle" fill="#fde68a" font-size="8">চুক্তির ভাণ্ডার</text>
  <rect x="225" y="118" width="110" height="18" rx="3" fill="#0f172a" stroke="#fbbf24"/>
  <text x="280" y="131" text-anchor="middle" fill="#fcd34d" font-size="7">contract.json</text>
  <text x="280" y="148" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="bold">can-i-deploy?</text>
  <line x1="142" y1="95" x2="207" y2="95" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ9)"/>
  <text x="174" y="88" text-anchor="middle" fill="#7dd3fc" font-size="7">চুক্তি পাঠাও</text>
  <rect x="420" y="60" width="140" height="100" rx="8" fill="#0c4a6e" stroke="#22d3ee" stroke-width="2"/>
  <text x="490" y="82" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">Provider</text>
  <text x="490" y="98" text-anchor="middle" fill="#bae6fd" font-size="8">(Backend API)</text>
  <rect x="435" y="108" width="110" height="20" rx="3" fill="#0f172a" stroke="#7dd3fc"/>
  <text x="490" y="121" text-anchor="middle" fill="#7dd3fc" font-size="7">verify: দিতে পারি?</text>
  <text x="490" y="140" text-anchor="middle" fill="#4ade80" font-size="8">✅ হ্যাঁ</text>
  <text x="490" y="152" text-anchor="middle" fill="#fca5a5" font-size="8">❌ ভাঙলে → ব্লক</text>
  <line x1="353" y1="95" x2="417" y2="95" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ9)"/>
  <text x="385" y="88" text-anchor="middle" fill="#7dd3fc" font-size="7">যাচাই করো</text>
  <rect x="150" y="185" width="280" height="40" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="202" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">✅ চুক্তি পূরণ → deploy অনুমোদিত</text>
  <text x="290" y="217" text-anchor="middle" fill="#fca5a5" font-size="8">❌ চুক্তি ভাঙলে → can-i-deploy: NO</text>
</svg>
</div>
<div class="svg-caption">Contract testing — consumer চুক্তি লেখে, Pact broker সংরক্ষণ করে, provider যাচাই করে; ভাঙলে deploy বন্ধ</div>
<div class="secret-box">📜 <strong>Contract = দুই পক্ষের চুক্তি। Consumer-driven।</strong> Pact দিয়ে verify। কেউ ভাঙলে deploy বন্ধ। এখন নয়টি দরজা পেরিয়েছো — শেষ দরজায় সব মেলাও।</div>`,
  senior: {
    title: "Contract Testing এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Pact (2013)</td><td>Consumer-driven contract testing</td></tr>
<tr><td class="hl">Consumer</td><td>যে API ব্যবহার করে — চুক্তি লেখে</td></tr>
<tr><td class="hl">Provider</td><td>যে API দেয় — চুক্তি যাচাই করে</td></tr>
<tr><td class="hl">can-i-deploy</td><td>চুক্তি ভাঙলে deploy বন্ধ</td></tr>
<tr><td class="hl">Pact Broker</td><td>চুক্তির কেন্দ্রীয় ভাণ্ডার</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🛡️",
  color: "#22c55e",
  name: "ঢালের দেয়াল",
  subtitle: "The Shield Wall",
  tech: "Synthesis — full testing strategy: Trophy + TDD + Mutation + Property + Doubles + CI/CD + Contract + Security (SAST/DAST)",
  spirit: "হিকমাহ — প্রয়োগিক জ্ঞান, সব প্রতিরক্ষার সমন্বয়",
  secret: "নয়টি দরজা, নয়জন শিক্ষক, একটি ঢাল — Testing Trophy + TDD + Mutation + Property-based + Test Doubles + CI/CD + Flaky fix + Contract + Security। প্রতিটি bug শত্রু, প্রতিটি test ঢাল।",
  recall: {
    q: " একটি সম্পূর্ণ testing strategy-র উপাদান কী কী?",
    qen: "What are the components of a complete testing strategy?",
    a: "Trophy (অনুপাত) + TDD (আগে টেস্ট) + Mutation (গভীরতা) + Property (হাজার ইনপুট) + Doubles (নকল) + CI/CD (স্বয়ংক্রিয়) + Flaky fix (স্থিতিশীল) + Contract (চুক্তি) + SAST/DAST (নিরাপত্তা)।",
    aen: "Trophy (proportion) + TDD (test first) + Mutation (depth) + Property (thousands of inputs) + Doubles (fakes) + CI/CD (automated) + Flaky fix (stable) + Contract (agreement) + SAST/DAST (security)."
  },
  story: `<p class="scene-setting">তুমি এখন নয়টি দরজা পেরিয়েছো। তারিক তিন প্রহরী, নওফল অনুপাত, রাজিব TDD, সুমাইয়া mutation, জাইন test double, হাসান property-based, ফাহিম CI/CD, মুনতাহা flaky fix, ইয়াসমিন contract। এখন সব মেলাও — একটি ঢাল। LedgerPilot-এর জন্য: pytest-django + model_bakery + Hypothesis + Playwright + mutmut + bandit + Pact।</p>
<p class="scene-setting en">You have passed nine doors. Tariq three guards, Nawfal proportion, Rajib TDD, Sumayya mutation, Zain test doubles, Hasan property-based, Fahim CI/CD, Muntaha flaky fix, Yasmin contract. Now combine them all — one shield. For LedgerPilot: pytest-django + model_bakery + Hypothesis + Playwright + mutmut + bandit + Pact.</p>

<div class="callout info"><span class="co-icon">🛡️</span><div><strong>সম্পূর্ণ Testing Strategy — নয় দরজার সমন্বয়:</strong><br>
<strong>Door ১ — তারিক (Types):</strong> Unit + Integration + E2E<br>
<strong>Door ২ — নওফল (Trophy):</strong> সঠিক অনুপাত — mostly integration<br>
<strong>Door ৩ — রাজিব (TDD):</strong> Red → Green → Refactor<br>
<strong>Door ৪ — সুমাইয়া (Mutation):</strong> গভীরতা — mutant ধরো<br>
<strong>Door ৫ — জাইন (Doubles):</strong> Dummy, Stub, Spy, Mock, Fake<br>
<strong>Door ৬ — হাসান (Property):</strong> হাজার ইনপুট স্বয়ংক্রিয়<br>
<strong>Door ৭ — ফাহিম (CI/CD):</strong> প্রতি পুশে স্বয়ংক্রিয়<br>
<strong>Door ৮ — মুনতাহা (Flaky):</strong> স্থিতিশীল — polling, isolation<br>
<strong>Door ৯ — ইয়াসমিন (Contract):</strong> দুই পক্ষের চুক্তি</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Forgot to Test Error Paths:</strong> All tests tested happy path — error handling was never tested, crashed in production. Fix: test edge cases: empty, null, error, timeout.</div></div>


<div class="code-block">— LedgerPilot: সম্পূর্ণ Testing Stack —

  # pytest.ini
  [pytest]
  DJANGO_SETTINGS_MODULE = config.test_settings
  addopts = --cov=backend --cov-fail-under=80 --reuse-db

  # প্রতিদিনের workflow:
  $ pytest                       # unit + integration
  $ mutmut run                   # mutation testing
  $ mypy backend/                # static analysis
  $ bandit -r backend/           # security scan (SAST)
  $ npx playwright test           # E2E

  # CI/CD pipeline:
  # push → lint → test → mutation → security → build → deploy
  # সব পাশ → production 🚀

  # Testing Checklist:
  # ✅ Trophy model (mostly integration)
  # ✅ TDD where possible
  # ✅ 80%+ coverage + 80%+ mutation
  # ✅ Property-based for pure functions
  # ✅ Contract testing for APIs
  # ✅ Zero flaky tests (quarantine if any)
  # ✅ SAST (bandit) + DAST (OWASP ZAP)
  # ✅ E2E for critical paths only</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">শিক্ষক</div></div>
<div class="stat-card"><div class="sc-num">৮০%</div><div class="sc-label">coverage লক্ষ্য</div></div>
<div class="stat-card"><div class="sc-num">০</div><div class="sc-label">flaky লক্ষ্য</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">বিশ্বাস</div></div>
</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">নূর — আলো। টেস্টিং হলো সেই আলো যা অন্ধকারে bug খুঁজে বের করে। বাইরে থেকে একটি অ্যাপ কাজ করছে মনে হয় — কিন্তু ভেতরে নয়টি স্তর প্রতিরক্ষা করছে। তারিকের প্রহরী, নওফলের অনুপাত, রাজিবের TDD, সুমাইয়ার mutation, জাইনের মুখোশ, হাসানের property, ফাহিমের pipeline, মুনতাহার স্থিতিশীলতা, ইয়াসমিনের চুক্তি — সব মিলে এক ঢাল। প্রতিটি bug শত্রু, প্রতিটি test ঢাল।</p>
<p class="scene-setting en">Nur — light. Testing is the light that finds bugs in darkness. Outside, an app seems to work — but inside, nine layers defend. Tariq's guards, Nawfal's proportion, Rajib's TDD, Sumayya's mutation, Zain's masks, Hasan's properties, Fahim's pipeline, Muntaha's stability, Yasmin's contracts — together one shield. Every bug an enemy, every test a shield.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ৪০ (Software Engineering) → TDD, SDLC, quality। Book ৪৩ (Cloud DevOps) → CI/CD pipeline, observability। Book ৪৬ (Cryptography) → SAST/DAST security testing। Book ৩৫ (Distributed Systems) → microservice contract testing।</div></div>

<div class="checklist">
<li>🔴 TDD চক্র অনুশীলন করো — Red → Green → Refactor</li>
<li>🧬 mutmut চালাও — mutation score দেখো</li>
<li>🎲 Hypothesis দিয়া একটি property টেস্ট লেখো</li>
<li>🎭 MagicMock দিয়ে একটি stub বানাও</li>
<li>🔄 GitHub Actions pipeline সেটআপ করো</li>
<li>📜 Pact দিয়ে consumer contract লেখো</li>
<li>📖 "Test-Driven Development" — Kent Beck পড়ো</li>
<li>📖 "xUnit Test Patterns" — Meszaros পড়ো</li>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a"/>
  <text x="290" y="28" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">বিশ্বাসের ঢাল — নয় স্তরের প্রতিরক্ষা</text>
  <rect x="245" y="100" width="90" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2.5"/>
  <text x="290" y="120" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">কোড</text>
  <text x="290" y="138" text-anchor="middle" fill="#86efac" font-size="8">LedgerPilot</text>
  <rect x="50" y="50" width="80" height="28" rx="6" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="90" y="68" text-anchor="middle" fill="#7dd3fc" font-size="7">১ Types</text>
  <rect x="140" y="50" width="80" height="28" rx="6" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="180" y="68" text-anchor="middle" fill="#7dd3fc" font-size="7">২ Trophy</text>
  <rect x="230" y="50" width="80" height="28" rx="6" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="270" y="68" text-anchor="middle" fill="#7dd3fc" font-size="7">৩ TDD</text>
  <rect x="320" y="50" width="80" height="28" rx="6" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="360" y="68" text-anchor="middle" fill="#7dd3fc" font-size="7">৪ Mutation</text>
  <rect x="410" y="50" width="80" height="28" rx="6" fill="#0c4a6e" stroke="#22d3ee"/>
  <text x="450" y="68" text-anchor="middle" fill="#7dd3fc" font-size="7">৫ Doubles</text>
  <rect x="50" y="105" width="80" height="28" rx="6" fill="#052e16" stroke="#22c55e"/>
  <text x="90" y="123" text-anchor="middle" fill="#4ade80" font-size="7">৬ Property</text>
  <rect x="450" y="105" width="80" height="28" rx="6" fill="#052e16" stroke="#22c55e"/>
  <text x="490" y="123" text-anchor="middle" fill="#4ade80" font-size="7">৭ CI/CD</text>
  <rect x="50" y="170" width="80" height="28" rx="6" fill="#451a03" stroke="#fbbf24"/>
  <text x="90" y="188" text-anchor="middle" fill="#fcd34d" font-size="7">৮ Flaky fix</text>
  <rect x="140" y="170" width="80" height="28" rx="6" fill="#451a03" stroke="#fbbf24"/>
  <text x="180" y="188" text-anchor="middle" fill="#fcd34d" font-size="7">৯ Contract</text>
  <rect x="230" y="170" width="80" height="28" rx="6" fill="#451a03" stroke="#fbbf24"/>
  <text x="270" y="188" text-anchor="middle" fill="#fcd34d" font-size="7">+ Security</text>
  <rect x="320" y="170" width="80" height="28" rx="6" fill="#052e16" stroke="#22c55e"/>
  <text x="360" y="188" text-anchor="middle" fill="#4ade80" font-size="7">SAST/DAST</text>
  <rect x="410" y="170" width="80" height="28" rx="6" fill="#052e16" stroke="#22c55e"/>
  <text x="450" y="188" text-anchor="middle" fill="#4ade80" font-size="7">🚀 প্রোডাকশন</text>
  <line x1="130" y1="64" x2="250" y2="105" stroke="#334155" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="220" y1="64" x2="270" y2="100" stroke="#334155" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="320" y1="64" x2="310" y2="100" stroke="#334155" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="130" y1="119" x2="245" y2="125" stroke="#334155" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="450" y1="119" x2="335" y2="125" stroke="#334155" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="130" y1="184" x2="255" y2="150" stroke="#334155" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="450" y1="184" x2="325" y2="150" stroke="#334155" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="290" y="225" text-anchor="middle" fill="#86efac" font-size="8" font-style="italic">প্রতিটি bug শত্রু, প্রতিটি test ঢাল — এটাই হিকমাহ</text>
</svg>
</div>
<div class="svg-caption">সম্পূর্ণ testing strategy — নয়টি স্তর মিলে কোডকে ঘিরে ঢাল তৈরি করে; প্রতিটি bug শত্রু, প্রতিটি test ঢাল</div>
<div class="secret-box">🛡️ <strong>টেস্টিং = বিশ্বাসের ঢাল।</strong> নয়টি দরজা, নয়জন শিক্ষক, একটি দেয়াল। প্রতিটি bug শত্রু, প্রতিটি test ঢাল। Trophy-র অনুপাত, TDD-র চক্র, mutation-এর গভীরতা, property-র অফুরন্ততা, double-এর নকল, CI/CD-র স্বয়ংক্রিয়তা, flaky-র স্থিতিশীলতা, contract-এর চুক্তি। এখন তুমি জানো — শুধু কীভাবে নয়, কেন। কেন Trophy কে integration সবচেয়ে বড়। কেন TDD আগে টেস্ট। কেন mutation coverage-এর চেয়ে গভীর। কেন flaky শূন্য হতে হবে। এটাই হিকমাহ — টেস্টিংয়ের প্রয়োগিক জ্ঞান।</div>`,
  senior: {
    title: "সম্পূর্ণ Testing Strategy এক নজরে",
    body: `<table class="kv-table"><tr><th>স্তর</th><th>কী</th><th>দরজা</th></tr>
<tr><td class="hl">Types</td><td>Unit + Integration + E2E</td><td>১</td></tr>
<tr><td class="hl">Proportion</td><td>Trophy — mostly integration</td><td>২</td></tr>
<tr><td class="hl">Process</td><td>TDD — Red → Green → Refactor</td><td>৩</td></tr>
<tr><td class="hl">Quality</td><td>Mutation — deeper than coverage</td><td>৪</td></tr>
<tr><td class="hl">Isolation</td><td>Doubles — Dummy/Stub/Spy/Mock/Fake</td><td>৫</td></tr>
<tr><td class="hl">Coverage</td><td>Property-based — thousands of inputs</td><td>৬</td></tr>
<tr><td class="hl">Automation</td><td>CI/CD — every push</td><td>৭</td></tr>
<tr><td class="hl">Stability</td><td>Flaky — zero tolerance</td><td>৮</td></tr>
<tr><td class="hl">Agreement</td><td>Contract — consumer-driven</td><td>৯</td></tr>
<tr><td class="hl">Synthesis</td><td>সব মিলে — Shield Wall</td><td>১০</td></tr></table>`
  }
});
