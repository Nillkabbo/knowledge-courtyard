const doors = [];

doors.push({
  num: 1,
  icon: "🗼",
  color: "#22c55e",
  name: "তিন প্রহরী",
  subtitle: "The Three Watchtowers",
  tech: "Test Types — Unit (function isolation), Integration (component interaction), E2E (user journey, Playwright/Selenium)",
  spirit: "ইয়াকিন — নিশ্চয়তা, প্রতিটি স্তরে বিশ্বাস",
  secret: "Unit = একটি ফাংশন। Integration = দুটো কম্পোনেন্ট। E2E = পুরো ব্যবহারকারীর যাত্রা। গতি: Unit > Integration > E2E। নির্ভরযোগ্যতা: Unit < Integration < E2E।",
  recall: {
    q: " Unit, Integration, ও E2E test-এর পার্থক্য কী?",
    qen: "What is the difference between Unit, Integration, and E2E tests?",
    a: "Unit = একটি ফাংশন isolated (ms)। Integration = দুটো কম্পোনেন্ট একসাথে (s)। E2E = পুরো ইউজার যাত্রা ব্রাউজারে (s)। Guillermo Rauch: Mostly integration।",
    aen: "Unit = one function isolated (ms). Integration = two components together (s). E2E = full user journey in browser (s). Guillermo Rauch: Mostly integration."
  },
  story: `<p class="scene-setting">তোমার LedgerPilot-এ তিনজন প্রহরী দরকার। প্রথম প্রহরী — ইউনিট টেস্ট — শুধু একটা ফাংশন চেক করে। calculate_tax(১০০) ঠিক আছে কিনা। দ্রুত, মিলিসেকেন্ডে। দ্বিতীয় — ইন্টিগ্রেশন টেস্ট — দুটো জিনিস একসাথে। API থেকে ডেটাবেসে লেখা ঠিক আছে কিনা। তৃতীয় — E2E টেস্ট — পুরো ব্যবহারকারীর যাত্রা। ব্রাউজার খুলে লগইন করো, টাকা পাঠাও, ব্যালেন্স দেখো।</p>
<p class="scene-setting en">Your LedgerPilot needs three guards. First — unit test — checks one function. calculate_tax(100) correct? Fast, milliseconds. Second — integration test — two things together. API to database writing correct? Third — E2E test — full user journey. Open browser, login, transfer money, check balance.</p>

<div class="dialogue"><strong>প্রহরী-প্রধান তারিক:</strong> প্রতিটি প্রহরীর নিজস্ব শক্তি ও দুর্বলতা। Unit দ্রুত কিন্তু integration bug ধরে না। Integration আসল bug ধরে কিন্তু ধীর। E2E সবচেয়ে নির্ভরযোগ্য কিন্তু সবচেয়ে ধীর ও flaky। Guillermo Rauch (Vercel CEO) বলেছেন — Write tests. Not too many. Mostly integration। এটাই sweet spot।</div>
<div class="dialogue en"><strong>Chief Guard Tariq:</strong> Each guard has its own strength and weakness. Unit is fast but misses integration bugs. Integration catches real bugs but is slower. E2E is most reliable but slowest and flaky. Guillermo Rauch (Vercel CEO) said — Write tests. Not too many. Mostly integration. This is the sweet spot.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Test That Tested Nothing:</strong> Test had assert True at the end — always passed, caught zero bugs. Fix: every assert must check MEANINGFUL state.</div></div>


<div class="code-block">— pytest: তিন ধরনের টেস্ট —

  # Unit Test (একটি ফাংশন)
  def test_calculate_tax():
      assert calculate_tax(100) == 12.50
      assert calculate_tax(0) == 0
  # চলে: 0.02s — দ্রুত!

  # Integration Test (API → DB)
  def test_transfer_api(db):
      response = client.post('/api/transfer/', {
          'from': 'acc1', 'to': 'acc2', 'amount': 500
      })
      assert response.status_code == 201
      assert Account.objects.get(id='acc1').balance == 500
  # চলে: 1.8s

  # E2E Test (Playwright — ব্রাউজার)
  # npx playwright test e2e/transfer.spec.ts
  # ✓ chromium transfer.spec.ts (3.2s)

  — গতি:     Unit (0.02s) < Integration (1.8s) < E2E (4.1s) —
  — নির্ভরযোগ্যতা: Unit < Integration < E2E —</div>

<div class="verse">كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"প্রতিদিন তিনি কোনো না কোনো কাজে আছেন।" — কুরআন ৫৫:২৯</div>

<p class="scene-setting">ইয়াকিন — নিশ্চয়তা। প্রতিটি টেস্ট একটি নিশ্চয়তা — কোড কাজ করছে। Unit দ্রুত নিশ্চয়তা দেয়, Integration গভীর, E2E সম্পূর্ণ। প্রতিটি স্তরে প্রহরী — প্রতিটি পরিবর্তনে বিশ্বাস।</p>
<p class="scene-setting en">Yaqeen — certainty. Each test is a certainty — code works. Unit gives fast certainty, Integration deep, E2E complete. Guards at every level — trust in every change.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪০ (Software Engineering) Door ৬ (TDD):</strong> TDD = টেস্ট আগে লেখো। Book ৪৭ (Testing-QA) এই বই — প্রতিটি দরজায় গভীরে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a"/>
  <text x="290" y="28" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">তিন প্রহরী — গতি ও নির্ভরযোগ্যতা</text>
  <rect x="40" y="70" width="120" height="120" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="100" y="95" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">Unit</text>
  <text x="100" y="120" text-anchor="middle" fill="#86efac" font-size="9">একটি ফাংশন</text>
  <text x="100" y="145" text-anchor="middle" fill="#fbbf24" font-size="9">⚡ 0.02s</text>
  <text x="100" y="170" text-anchor="middle" fill="#fcd34d" font-size="8">দ্রুত, সীমিত</text>
  <rect x="230" y="60" width="120" height="140" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="85" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">Integration</text>
  <text x="290" y="110" text-anchor="middle" fill="#86efac" font-size="9">দুটো কম্পোনেন্ট</text>
  <text x="290" y="135" text-anchor="middle" fill="#fbbf24" font-size="9">⚡ 1.8s</text>
  <text x="290" y="160" text-anchor="middle" fill="#fcd34d" font-size="8">মাঝারি, বাস্তব</text>
  <text x="290" y="180" text-anchor="middle" fill="#7dd3fc" font-size="8">★ sweet spot</text>
  <rect x="420" y="50" width="120" height="160" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="480" y="75" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">E2E</text>
  <text x="480" y="100" text-anchor="middle" fill="#86efac" font-size="9">পুরো যাত্রা</text>
  <text x="480" y="125" text-anchor="middle" fill="#fbbf24" font-size="9">⚡ 4.1s</text>
  <text x="480" y="150" text-anchor="middle" fill="#fcd34d" font-size="8">ধীর, নির্ভরযোগ্য</text>
  <text x="480" y="170" text-anchor="middle" fill="#fca5a5" font-size="8">⚠ flaky ঝুঁকি</text>
  <defs><marker id="arrTQ1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#7dd3fc"/></marker></defs>
  <line x1="165" y1="210" x2="225" y2="210" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ1)"/>
  <line x1="355" y1="210" x2="415" y2="210" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ1)"/>
  <text x="195" y="225" text-anchor="middle" fill="#7dd3fc" font-size="8">গভীরতা ↑</text>
  <text x="385" y="225" text-anchor="middle" fill="#7dd3fc" font-size="8">বিশ্বাস ↑</text>
</svg>
</div>
<div class="svg-caption">তিন প্রহরী — গতি (Unit দ্রুত) ও নির্ভরযোগ্যতা (E2E গভীর) এর ভারসাম্য</div>
<div class="secret-box">🗼 <strong>তিন প্রহরী — গতি ও নির্ভরযোগ্যতার ভারসাম্য।</strong> কিন্তু কতটা টেস্ট লিখবে? কোন অনুপাত? সেই উত্তর — পরের দরজায়।</div>`,
  senior: {
    title: "Test Types এক নজরে",
    body: `<table class="kv-table"><tr><th>প্রকার</th><th>কী</th><th>গতি</th></tr>
<tr><td class="hl">Unit</td><td>একটি ফাংশন isolated</td><td>~ms</td></tr>
<tr><td class="hl">Integration</td><td>দুটো কম্পোনেন্ট</td><td>~s</td></tr>
<tr><td class="hl">E2E</td><td>পুরো ইউজার যাত্রা</td><td>~s</td></tr>
<tr><td class="hl">Static</td><td>লিন্টার, টাইপ চেকার</td><td>instant</td></tr>
<tr><td class="hl">Guillermo Rauch</td><td>Mostly integration</td><td>—</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "🏆",
  color: "#22c55e",
  name: "ট্রফি বনাম পিরামিড",
  subtitle: "The Trophy vs The Pyramid",
  tech: "Testing Pyramid (Cohn 2009) vs Testing Trophy (Dodds 2018), static analysis, Guillermo Rauch principle",
  spirit: "মিজান — ভারসাম্য, সঠিক অনুপাত",
  secret: "Pyramid = অনেক unit, কম integration। Trophy = integration সবচেয়ে বড়। Trophy আধুনিক — কারণ integration bug ধরে, unit নয়।",
  recall: {
    q: " Testing Pyramid ও Testing Trophy-এর পার্থক্য কী?",
    qen: "What is the difference between Testing Pyramid and Testing Trophy?",
    a: "Pyramid (Cohn ২০০৯): অনেক unit, কম integration, সামান্য E2E (৭০/২০/১০)। Trophy (Dodds ২০১৮): static base, integration সবচেয়ে বড়, E2E সামান্য। Trophy আধুনিক।",
    aen: "Pyramid (Cohn 2009): many unit, few integration, minimal E2E (70/20/10). Trophy (Dodds 2018): static base, integration biggest, minimal E2E. Trophy is modern."
  },
  story: `<p class="scene-setting">২০০৯ সালে Mike Cohn 'Testing Pyramid' প্রস্তাব করেন — অনেক unit test, কম integration, সামান্য E2E। কিন্তু ২০১৭ সালে Guillermo Rauch tweet করেন: Write tests. Not too many. Mostly integration। ২০১৮ সালে Kent C. Dodds এটাকে 'Testing Trophy' হিসেবে formalize করেন — static analysis base, integration সবচেয়ে বড়।</p>
<p class="scene-setting en">In 2009 Mike Cohn proposed the Testing Pyramid — many unit tests, fewer integration, minimal E2E. But in 2017 Guillermo Rauch tweeted: Write tests. Not too many. Mostly integration. In 2018 Kent C. Dodds formalized it as the Testing Trophy — static analysis base, integration largest.</p>

<div class="dialogue"><strong>ভারসাম্য-কারিগর নওফল:</strong> তারিক (Door ১) তোমাকে তিন প্রহরী দিয়েছেন। এখন প্রশ্ন — কোন প্রহরীকে কতজন দরকার? Cohn বলেছেন ৭০% unit। কিন্তু Dodds বলেন — integration-ই আসল। কারণ? Unit test শুধু ফাংশন ঠিক আছে কিনা দেখে। কিন্তু ফাংশন একসাথে কাজ করে কিনা — সেটা integration। বাস্তবে সবচেয়ে বেশি bug আসে integration-এ। তাই Trophy-তে integration সবচেয়ে বড়।</div>
<div class="dialogue en"><strong>Balance Artisan Nawfal:</strong> Tariq (Door 1) gave you three guards. Now the question — how many of each? Cohn said 70% unit. But Dodds says — integration is key. Why? Unit tests only check function correctness. But whether functions work together — that's integration. In practice, most bugs come from integration. So in the Trophy, integration is largest.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Flaky Test Erosion:</strong> Test passed 80% of the time — team started ignoring failures. Real bugs slipped through. Fix: flaky tests must be fixed or quarantined immediately.</div></div>


<div class="code-block">— Testing Trophy বাস্তবে —

  $ pytest --collect-only
  ==================== test session starts ====================
 collected 150 items

  # বিভাজন (Trophy model):
  # ৩০ static  (mypy, eslint — টাইপ ও সিনট্যাক্স)
  # ৫০ integration (API → DB — সবচেয়ে বেশি!)
  # ৪০ unit (বিশুদ্ধ ফাংশন — দ্রুত)
  # ১০ E2E (critical path শুধু)
  # ৫৫ contract (API চুক্তি)

  # Static Analysis (base of trophy):
  $ mypy backend/          # Python type check
  $ eslint frontend/       # JS lint
  $ pip-audit              # dependency vulnerability

  # Guillermo Rauch-এর নীতি:
  # "Write tests. Not too many. Mostly integration."
  # — Vercel CEO, 2017</div>

<div class="verse">وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং আসমানকে উঁচু করেছেন এবং স্থাপন করেছেন মিজান (তুলা)।" — কুরআন ৫৫:৭</div>

<p class="scene-setting">মিজান — ভারসাম্য। Testing Trophy সেই ভারসাম্যের রূপ — প্রতিটি স্তরে সঠিক অনুপাত। খুব বেশি unit = integration অবহেলা। খুব বেশি E2E = ধীর ও flaky। ভারসাম্য — integration সবচেয়ে বড়, static base, E2E সামান্য।</p>
<p class="scene-setting en">Mizan — balance. The Testing Trophy is the form of that balance — correct proportion at each layer. Too many unit tests = neglecting integration. Too many E2E = slow and flaky. Balance — integration largest, static base, minimal E2E.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪৭ (Testing-QA) Door ১:</strong> তারিক তিন প্রহরী দিয়েছেন — নওফল দেখাচ্ছেন কোন অনুপাতে। Book ৪৩ (Cloud DevOps) Door ৪: CI/CD pipeline-এ এই অনুপাত স্বয়ংক্রিয়।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a"/>
  <text x="290" y="28" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">পিরামিড বনাম ট্রফি — অনুপাতের বিবর্তন</text>
  <text x="135" y="55" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">Pyramid (Cohn ২০০৯)</text>
  <polygon points="135,75 75,210 195,210" fill="none" stroke="#22c55e" stroke-width="2"/>
  <text x="135" y="100" text-anchor="middle" fill="#fca5a5" font-size="9">E2E ১০%</text>
  <text x="135" y="140" text-anchor="middle" fill="#fbbf24" font-size="9">Integration ২০%</text>
  <text x="135" y="185" text-anchor="middle" fill="#4ade80" font-size="10">Unit ৭০%</text>
  <text x="435" y="55" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">Trophy (Dodds ২০১৮)</text>
  <path d="M 370 75 Q 370 70 375 70 L 495 70 Q 500 70 500 75 L 495 130 Q 493 145 480 150 L 435 155 L 390 150 Q 377 145 375 130 Z" fill="none" stroke="#22c55e" stroke-width="2"/>
  <line x1="435" y1="155" x2="435" y2="185" stroke="#22c55e" stroke-width="2"/>
  <rect x="405" y="185" width="60" height="12" rx="3" fill="none" stroke="#22c55e" stroke-width="2"/>
  <rect x="375" y="62" width="120" height="14" rx="3" fill="#052e16" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="435" y="73" text-anchor="middle" fill="#7dd3fc" font-size="8">Static base</text>
  <text x="435" y="105" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Integration ★</text>
  <text x="435" y="125" text-anchor="middle" fill="#86efac" font-size="8">সবচেয়ে বড়</text>
  <text x="455" y="180" text-anchor="middle" fill="#fca5a5" font-size="8">E2E সামান্য</text>
  <defs><marker id="arrTQ2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
  <line x1="215" y1="140" x2="360" y2="140" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrTQ2)"/>
  <text x="287" y="132" text-anchor="middle" fill="#fbbf24" font-size="9">২০১৭: Rauch</text>
  <text x="287" y="155" text-anchor="middle" fill="#fcd34d" font-size="8">"Mostly integration"</text>
</svg>
</div>
<div class="svg-caption">পিরামিডে Unit সবচেয়ে বড়, ট্রফিতে Integration সবচেয়ে বড় — আধুনিক ভারসাম্য</div>
<div class="secret-box">🏆 <strong>Trophy = integration সবচেয়ে বড়।</strong> ভারসাম্য ঠিক হলে পরের প্রশ্ন — কখন টেস্ট লিখবে? কোডের আগে নাকি পরে? সেই উত্তর — TDD। পরের দরজায়।</div>`,
  senior: {
    title: "Pyramid vs Trophy এক নজরে",
    body: `<table class="kv-table"><tr><th>মডেল</th><th>বছর</th><th>অনুপাত</th></tr>
<tr><td class="hl">Pyramid (Cohn)</td><td>২০০৯</td><td>৭০% unit, ২০% int, ১০% E2E</td></tr>
<tr><td class="hl">Trophy (Dodds)</td><td>২০১৮</td><td>integration সবচেয়ে বড়</td></tr>
<tr><td class="hl">Static base</td><td>—</td><td>mypy, eslint — ভিত্তি</td></tr>
<tr><td class="hl">Rauch principle</td><td>২০১৭</td><td>Mostly integration</td></tr>
<tr><td class="hl">E2E</td><td>—</td><td>শুধু critical path</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🔴",
  color: "#22c55e",
  name: "লাল-সবুজ-নকশা",
  subtitle: "Red-Green-Refactor",
  tech: "Test-Driven Development — Beck 2003, Red-Green-Refactor cycle, test first, design emergence",
  spirit: "সবর — ধৈর্য, ভুল থেকে সঠিকে যাত্রা",
  secret: "TDD = টেস্ট আগে লেখো। Red (ব্যর্থ) → Green (সফল) → Refactor (উন্নত)। প্রথমে ব্যর্থ দেখো — তারপর সফল করো — তারপর সুন্দর করো।",
  recall: {
    q: " TDD-এর তিনটি ধাপ কী? কেন টেস্ট আগে লিখতে হবে?",
    qen: "What are the three steps of TDD? Why write tests first?",
    a: "১. Red: টেস্ট লেখো (ব্যর্থ হবে)। ২. Green: সর্বনিম্ন কোড লেখো (সফল)। ৩. Refactor: উন্নত করো। টেস্ট আগে = সঠিক interface ডিজাইন।",
    aen: "1. Red: write test (fails). 2. Green: minimal code (passes). 3. Refactor: improve. Test first = correct interface design."
  },
  story: `<p class="scene-setting">২০০৩, কলোরাডো। Kent Beck একটি বই লিখছেন — Test-Driven Development: By Example। তার দাবি: টেস্ট আগে লেখো, কোড পরে। প্রথমে অদ্ভুত মনে হয় — কোড ছাড়া টেস্ট কীভাবে? কিন্তু উদ্দেশ্য স্পষ্ট: টেস্ট আগে লিখলে তুমি ইউজারের চোখ দিয়ে দেখো — কোন API দরকার, কোন নাম স্পষ্ট, কোন রিটার্ন প্রত্যাশিত। কোড পরে আসে — টেস্টকে সন্তুষ্ট করতে।</p>
<p class="scene-setting en">2003, Colorado. Kent Beck writes Test-Driven Development: By Example. His claim: write tests first, code later. Seems strange at first — test without code? But the purpose is clear: writing tests first means seeing through the user's eyes — what API is needed, what names are clear, what return is expected. Code comes later — to satisfy the test.</p>

<div class="dialogue"><strong>ধৈর্যশীল রাজিব:</strong> নওফল (Door ২) তোমাকে অনুপাত শিখিয়েছেন। এখন প্রশ্ন — কখন টেস্ট লিখবে? TDD বলে — আগে। চক্র: Red (টেস্ট ব্যর্থ) → Green (সর্বনিম্ন কোড) → Refactor (উন্নত)। ATM তোমার LedgerPilot-এ চেষ্টা করো — প্রথমে test_transfer_negative_amount লেখো। ব্যর্থ হবে। তারপর সর্বনিম্ন কোড — if amount < 0: raise। সফল! তারপর refactor — ValueError ব্যবহার করো।</div>
<div class="dialogue en"><strong>Patient Rajib:</strong> Nawfal (Door 2) taught you proportion. Now the question — when to write tests? TDD says — first. Cycle: Red (test fails) → Green (minimal code) → Refactor (improve). Try it in LedgerPilot — first write test_transfer_negative_amount. It fails. Then minimal code — if amount < 0: raise. Passes! Then refactor — use ValueError.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Integration Tests:</strong> All unit tests passed — production crashed because API + DB interaction was never tested. Fix: always test the seams between components.</div></div>


<div class="code-block">— TDD: Red-Green-Refactor চক্র —

  # Step 1: RED — টেস্ট লেখো (ব্যর্থ হবে)
  def test_atm_withdraw_insufficient():
      atm = ATM(balance=100)
      with pytest.raises(InsufficientFunds):
          atm.withdraw(150)  # ১০০ আছে, ১৫০ চায়!
  # $ pytest test_atm.py
  # FAILED — NameError: ATM not defined  ← RED!

  # Step 2: GREEN — সর্বনিম্ন কোড লেখো
  class ATM:
      def __init__(self, balance):
          self.balance = balance
      def withdraw(self, amount):
          if amount > self.balance:
              raise InsufficientFunds()
          self.balance -= amount
  # $ pytest test_atm.py
  # PASSED  ← GREEN!

  # Step 3: REFACTOR — উন্নত করো
  # (টেস্ট সবুজ রাখো!)
  # → ValueError ব্যবহার করো
  # → amount validation আলাদা মেথডে
  # → log যোগ করো
  # $ pytest test_atm.py → সবুজ ✅</div>

<div class="verse">إِنَّ مَعَ الْعُسْرِ يُسْرًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই কষ্টের সাথে রয়েছে স্বস্তি।" — কুরআন ৯৪:৬</div>

<p class="scene-setting">সবর — ধৈর্য। TDD ধৈর্যের চর্চা। Red = কষ্ট (ব্যর্থ)। Green = স্বস্তি (সফল)। Refactor = উন্নতি (সৌন্দর্য)। প্রতিটি চক্রে কষ্ট থেকে স্বস্তি — ভুল থেকে সঠিক। এটাই TDD-এর আত্মা — ধৈর্য ধরে সত্য খোঁজা।</p>
<p class="scene-setting en">Sabr — patience. TDD is the practice of patience. Red = difficulty (failure). Green = relief (success). Refactor = improvement (beauty). In each cycle, from difficulty to relief — from wrong to right. This is the soul of TDD — patiently seeking truth.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪০ (Software Engineering) Door ৬ (TDD):</strong> TDD-র পূর্ণ আলোচনা। Book ৪৭ (Testing-QA) Door ৩: এখানে গভীরে — প্রতিটি ধাপে কোড ও টেস্ট।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a"/>
  <text x="290" y="28" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">TDD চক্র — Red → Green → Refactor</text>
  <defs><marker id="arrTQ3" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#7dd3fc"/></marker></defs>
  <circle cx="150" cy="140" r="42" fill="#450a0a" stroke="#f87171" stroke-width="2.5"/>
  <text x="150" y="135" text-anchor="middle" fill="#fca5a5" font-size="13" font-weight="bold">🔴 Red</text>
  <text x="150" y="153" text-anchor="middle" fill="#fca5a5" font-size="8">টেস্ট ব্যর্থ</text>
  <circle cx="410" cy="100" r="42" fill="#052e16" stroke="#22c55e" stroke-width="2.5"/>
  <text x="410" y="95" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">🟢 Green</text>
  <text x="410" y="113" text-anchor="middle" fill="#4ade80" font-size="8">সর্বনিম্ন কোড</text>
  <circle cx="330" cy="200" r="42" fill="#0c4a6e" stroke="#22d3ee" stroke-width="2.5"/>
  <text x="330" y="195" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">♻ Refactor</text>
  <text x="330" y="212" text-anchor="middle" fill="#7dd3fc" font-size="8">উন্নত করো</text>
  <path d="M 190 115 Q 280 70 368 90" fill="none" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrTQ3)"/>
  <path d="M 395 140 Q 380 175 358 178" fill="none" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrTQ3)"/>
  <path d="M 290 200 Q 220 195 185 175" fill="none" stroke="#7dd3fc" stroke-width="2" marker-end="url(#arrTQ3)"/>
  <text x="278" y="68" text-anchor="middle" fill="#fbbf24" font-size="8">কোড লেখো</text>
  <text x="395" y="165" text-anchor="middle" fill="#fbbf24" font-size="8">সবুজ ✅</text>
  <text x="225" y="215" text-anchor="middle" fill="#fbbf24" font-size="8">আবার টেস্ট</text>
  <text x="290" y="240" text-anchor="middle" fill="#86efac" font-size="8" font-style="italic">প্রতিটি চক্রে ভুল থেকে সঠিক, সঠিক থেকে সুন্দর</text>
</svg>
</div>
<div class="svg-caption">TDD চক্র — প্রথমে ব্যর্থ (Red), তারপর সফল (Green), তারপর উন্নত (Refactor)</div>
<div class="secret-box">🔴 <strong>TDD = Red → Green → Refactor।</strong> ভুল থেকে সঠিক, সঠিক থেকে সুন্দর। কিন্তু কোড কতটা ভালো? ১০০% coverage যথেষ্ট? নাকি আরও কিছু দরকার? সেই উত্তর — পরের দরজায়।</div>`,
  senior: {
    title: "TDD এক নজরে",
    body: `<table class="kv-table"><tr><th>ধাপ</th><th>কী</th></tr>
<tr><td class="hl">Red</td><td>টেস্ট লেখো — ব্যর্থ হবে</td></tr>
<tr><td class="hl">Green</td><td>সর্বনিম্ন কোড — সফল করো</td></tr>
<tr><td class="hl">Refactor</td><td>উন্নত করো — সবুজ রাখো</td></tr>
<tr><td class="hl">Kent Beck (2003)</td><td>TDD: By Example</td></tr>
<tr><td class="hl">Benefit</td><td>সঠিক interface, কম bug, ডিজাইন</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "🧬",
  color: "#22c55e",
  name: "মিউটেশনের চোখ",
  subtitle: "The Mutation Eye",
  tech: "Coverage vs Mutation Testing — line/branch coverage, mutmut, mutation score, surviving mutants",
  spirit: "বুরহান — প্রমাণ, সত্যিকারের গভীরতা",
  secret: "১০০% coverage মানে সব লাইন চলে — কিন্তু সব ঠিক আছে না। Mutation testing: কোড এক বিট বদলাও (mutant) — টেস্ট ধরবে কি? যদি না ধরে — টেস্ট দুর্বল।",
  recall: {
    q: " Mutation testing কী? Coverage-এর চেয়ে কেন শক্তিশালী?",
    qen: "What is mutation testing? Why is it stronger than coverage?",
    a: "Mutation = কোড বদলাও (>= → >) → টেস্ট ধরবে কি? Coverage শুধু লাইন চলে কিনা দেখে। Mutation লাইন সঠিক কিনা যাচাই করে।",
    aen: "Mutation = change code (>= → >) → does test catch it? Coverage only checks if line ran. Mutation verifies the line is correct."
  },
  story: `<p class="scene-setting">রাজিব (Door ৩) তোমাকে TDD শিখিয়েছেন। কিন্তু একটি প্রশ্ন — তোমার টেস্ট কতটা ভালো? ১০০% coverage? ভুল! coverage শুধু দেখে লাইন চলেছে কিনা। assert ছাড়াও coverage হয়। Mutation testing সেই ফাঁক ধরে — কোড বদলাও, টেস্ট ধরবে কি?</p>
<p class="scene-setting en">Rajib (Door 3) taught you TDD. But one question — how good are your tests? 100% coverage? Wrong! Coverage only checks if lines ran. You get coverage even without asserts. Mutation testing catches that gap — change the code, will the test catch it?</p>

<div class="dialogue"><strong>প্রমাণ-কারিগর সুমাইয়া:</strong> তারিক (Door ১) বলেছেন ইউনিট টেস্ট দরকার। কিন্তু কোন টেস্ট ভালো? ধরো তোমার কোড: if amount >= 100। আমি >= কে > করে দিলাম (mutant)। তোমার টেস্ট কি ধরবে? যদি test(amount=100) না থাকে — ধরবে না! টেস্ট দুর্বল। Mutation score = কত mutant ধরা গেলো। ৮০%+ লক্ষ্য।</div>
<div class="dialogue en"><strong>Proof Artisan Sumayya:</strong> Tariq (Door 1) said unit tests are needed. But which tests are good? Say your code: if amount >= 100. I change >= to > (mutant). Will your test catch it? If test(amount=100) doesn't exist — it won't! Test is weak. Mutation score = how many mutants caught. 80%+ target.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Testing Implementation, Not Behavior:</strong> Test checked internal variable names — refactor broke all tests. Fix: test the PUBLIC interface, not private implementation.</div></div>


<div class="code-block">— Mutation Testing (mutmut) —

  # কোড:
  def is_eligible(age):
      return age >= 18

  # টেস্ট:
  def test_eligible():
      assert is_eligible(18) == True   # catches >= → >
      assert is_eligible(17) == False

  # Mutation: >= → >
  # Mutant: return age > 18
  # test(18): is_eligible(18) → False ≠ True → CAUGHT! ✅

  $ mutmut run --paths-to-mutate=eligibility.py
  $ mutmut results
   2. is_eligible (>= → >):  killed ✅
   3. is_eligible (18 → 19): killed ✅
   4. is_eligible (return → continue): killed ✅

  mutation score: 100% — সব mutant ধরা গেছে!

  — Coverage বনাম Mutation:
  # 100% coverage সহ দুর্বল টেস্ট:
  def test_bad():
      is_eligible(25)  # চলে, কিন্তু assert নেই!
  # coverage: 100% ✅ (ভুল!)
  # mutation: 0% ❌ (সত্য!)</div>

<div class="verse">قُلْ هَاتُوا بُرْهَانَكُمْ إِن كُنتُمْ صَادِقِينَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"বলো, তোমাদের প্রমাণ আনো যদি তোমরা সত্যবাদী হও।" — কুরআন ২:১১১</div>

<p class="scene-setting">বুরহান — প্রমাণ। Mutation testing সেই প্রমাণের টেস্ট। coverage বলে লাইন চলেছে — কিন্তু সঠিক কিনা নয়। Mutation বলে সত্যিকারের গভীরতা — কোড বদলালে টেস্ট ধরবে কি? প্রমাণ ছাড়া দাবি অর্থহীন।</p>
<p class="scene-setting en">Burhan — proof. Mutation testing is the test of that proof. Coverage says a line ran — but not whether it's correct. Mutation reveals true depth — if code changes, will tests catch it? Claims without proof are meaningless.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৬ (Hypothesis):</strong> mutation testing = hypothesis testing! নাল হাইপোথিসিস: কোড সঠিক। মিউট্যান্ট: বিকল্প হাইপোথিসিস। টেস্ট ধরলে = নাল প্রত্যাখ্যান।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a"/>
  <text x="290" y="28" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">Coverage বনাম Mutation — গভীরতার পার্থক্য</text>
  <text x="150" y="60" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">দুর্বল টেস্ট (assert নেই)</text>
  <rect x="70" y="75" width="160" height="28" rx="4" fill="#1e293b" stroke="#334155"/>
  <rect x="72" y="77" width="156" height="24" rx="3" fill="#22c55e"/>
  <text x="150" y="93" text-anchor="middle" fill="#052e16" font-size="10" font-weight="bold">Coverage ১০০% ✅</text>
  <rect x="70" y="115" width="160" height="28" rx="4" fill="#1e293b" stroke="#334155"/>
  <rect x="72" y="117" width="2" height="24" rx="1" fill="#ef4444"/>
  <text x="150" y="133" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="bold">Mutation ০% ❌</text>
  <text x="150" y="165" text-anchor="middle" fill="#94a3b8" font-size="8">লাইন চলেছে, কিন্তু যাচাই নেই</text>
  <text x="430" y="60" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">শক্তিশালী টেস্ট</text>
  <rect x="350" y="75" width="160" height="28" rx="4" fill="#1e293b" stroke="#334155"/>
  <rect x="352" y="77" width="156" height="24" rx="3" fill="#22c55e"/>
  <text x="430" y="93" text-anchor="middle" fill="#052e16" font-size="10" font-weight="bold">Coverage ১০০% ✅</text>
  <rect x="350" y="115" width="160" height="28" rx="4" fill="#1e293b" stroke="#334155"/>
  <rect x="352" y="117" width="140" height="24" rx="3" fill="#22d3ee"/>
  <text x="430" y="133" text-anchor="middle" fill="#0c4a6e" font-size="10" font-weight="bold">Mutation ৮৮% ✅</text>
  <text x="430" y="165" text-anchor="middle" fill="#94a3b8" font-size="8">কোড বদলালে টেস্ট ধরে</text>
  <defs><marker id="arrTQ4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#fbbf24"/></marker></defs>
  <rect x="150" y="185" width="100" height="22" rx="4" fill="#052e16" stroke="#22c55e"/>
  <text x="200" y="200" text-anchor="middle" fill="#4ade80" font-size="9">if age &gt;= 18</text>
  <line x1="255" y1="196" x2="320" y2="196" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrTQ4)"/>
  <text x="287" y="188" text-anchor="middle" fill="#fbbf24" font-size="8">mutant</text>
  <rect x="325" y="185" width="100" height="22" rx="4" fill="#450a0a" stroke="#f87171"/>
  <text x="375" y="200" text-anchor="middle" fill="#fca5a5" font-size="9">if age &gt; 18</text>
  <text x="490" y="200" text-anchor="middle" fill="#4ade80" font-size="9">→ ধরা! ✅</text>
</svg>
</div>
<div class="svg-caption">Coverage শুধু লাইন চলেছে কিনা দেখে; Mutation কোড বদলালে টেস্ট ধরবে কিনা যাচাই করে</div>
<div class="secret-box">🧬 <strong>Mutation = কোড বদলাও, টেস্ট ধরবে কি?</strong> coverage-এর চেয়ে গভীর। কিন্তু টেস্ট কাকে কল করবে? সত্যিকারের অবজেক্ট নাকি নকল? সেই প্রশ্ন — পরের দরজায়।</div>`,
  senior: {
    title: "Coverage vs Mutation এক নজরে",
    body: `<table class="kv-table"><tr><th>মেট্রিক</th><th>কী মাপে</th></tr>
<tr><td class="hl">Line Coverage</td><td>কত লাইন চলেছে</td></tr>
<tr><td class="hl">Branch Coverage</td><td>কত if/else চলেছে</td></tr>
<tr><td class="hl">Mutation Score</td><td>কত mutant ধরা গেছে</td></tr>
<tr><td class="hl">mutmut</td><td>Python mutation testing tool</td></tr>
<tr><td class="hl">100% coverage</td><td>❌ যথেষ্ট নয়</td></tr>
<tr><td class="hl">80%+ mutation</td><td>✅ আসল গুণমান</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "🎭",
  color: "#22c55e",
  name: "পাঁচটি মুখোশ",
  subtitle: "The Five Masks",
  tech: "Test Doubles — Dummy, Stub, Spy, Mock, Fake (Meszaros 2007), MagicMock, pytest fixtures",
  spirit: "মিসবাহ — আলো, নকল দিয়ে সত্য পরীক্ষা",
  secret: "পাঁচটি test double: Dummy (কিছু করে না), Stub (নির্দিষ্ট উত্তর), Spy (রেকর্ড করে), Mock (প্রত্যাশা যাচাই), Fake (সরল বাস্তবায়ন)। প্রতিটি নিজস্ব উদ্দেশ্য।",
  recall: {
    q: " Mock ও Stub-এর পার্থক্য কী? কখন Fake ব্যবহার করবে?",
    qen: "What is the difference between Mock and Stub? When to use Fake?",
    a: "Stub = নির্দিষ্ট উত্তর দেয় (get_user → {name: ali})। Mock = কল হয়েছে কিনা যাচাই (send_email called?)। Fake = সরল বাস্তবায়ন (InMemoryDB)।",
    aen: "Stub = returns fixed answer. Mock = verifies call happened. Fake = simplified implementation (InMemoryDB)."
  },
  story: `<p class="scene-setting">সুমাইয়া (Door ৪) তোমাকে mutation শিখিয়েছেন। এখন একটি সমস্যা — তোমার টেস্টে ইমেইল পাঠাতে হবে। কিন্তু সত্যিকারের ইমেল পাঠাবে না! সমাধান? Test double — নকল। পাঁচ ধরনের নকল, প্রতিটি নিজস্ব উদ্দেশ্য। Gerarld Meszaros ২০০৭ সালে এই শ্রেণিবিন্যাস দিয়েছেন।</p>
<p class="scene-setting en">Sumayya (Door 4) taught you mutation. Now a problem — your test needs to send email. But you won't send a real email! Solution? Test double — a fake. Five types of fakes, each with its own purpose. Gerald Meszaros classified them in 2007.</p>

<div class="dialogue"><strong>মুখোশ-কারিগর জাইন:</strong> পাঁচটি মুখোশ মনে রাখো: Dummy — কিছু করে না, শুধু প্যারামিটার লাগে। Stub — নির্দিষ্ট উত্তর দেয়, get_user() সবসময় {name: ali} ফেরত দেয়। Spy — কল রেকর্ড করে, পরে দেখো কতবার কল হয়েছে। Mock — প্রত্যাশা যাচাই, send_email কল হয়েছে কিনা? Fake — সরল বাস্তবায়ন, InMemoryDB যা সত্যিকার DB-এর মতো আচরণ করে কিন্তু সরল।</div>
<div class="dialogue en"><strong>Mask Artisan Zain:</strong> Remember five masks: Dummy — does nothing, just needed as parameter. Stub — gives fixed answer, get_user() always returns {name: ali}. Spy — records calls, later you check how many times called. Mock — verifies expectations, was send_email called? Fake — simplified implementation, InMemoryDB that behaves like real DB but simpler.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Mock Everything:</strong> Every dependency mocked — test passed but real API returned different format. Fix: don't mock what you don't own, use contract tests.</div></div>


<div class="code-block"># — Python: পাঁচটি Test Double —

  from unittest.mock import MagicMock, patch

  # ১. DUMMY — কিছু করে না
  def test_with_dummy(logger):
      process(data, logger=None)  # logger দরকার, কিন্তু ব্যবহার হয় না

  # ২. STUB — নির্দিষ্ট উত্তর
  def test_with_stub():
      user_repo = MagicMock()
      user_repo.get_user.return_value = {"name": "ali"}
      # সবসময় ali ফেরত দেয়
      result = service.process(user_repo)
      assert result == "Hello ali"

  # ৩. SPY — কল রেকর্ড
  def test_with_spy():
      email_service = MagicMock()
      service.register(email_service)
      email_service.send.assert_called_once()
      # send কল হয়েছে কিনা যাচাই

  # ৪. MOCK — প্রত্যাশা যাচাই
  def test_with_mock():
      payment = MagicMock()
      payment.charge.return_value = True
      order.complete(payment)
      payment.charge.assert_called_with(100)
      # charge(100) কল হয়েছে কিনা

  # ৫. FAKE — সরল বাস্তবায়ন
  class InMemoryUserDB:
      def __init__(self): self.users = {}
      def save(self, u): self.users[u.id] = u
      def get(self, id): return self.users.get(id)
  # সত্যিকার DB-এর মতো, কিন্তু মেমরিতে</div>

<div class="verse">إِنَّا جَعَلْنَا مَا عَلَى الْأَرْضِ زِينَةً لَّهَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আমরা পৃথিবীতে যা আছে তা তার জন্য অলংকার করেছি।" — কুরআন ১৮:৭</div>

<p class="scene-setting">মিসবাহ — আলো। Test double সেই আলোর নকল রূপ — সত্যিকার অবজেক্ট নয়, কিন্তু সত্যিকারের মতো আচরণ করে। নকল দিয়ে সত্য পরীক্ষা — এটাই test double-এর উদ্দেশ্য। যেমন পৃথিবী এক পরীক্ষাগার — আলংকারিক কিন্তু সত্যিকার।</p>
<p class="scene-setting en">Misbah — light. Test doubles are the fake form of that light — not real objects, but behaving like real. Testing truth with fakes — this is the purpose of test doubles. Like the world is a testing ground — ornamental but real.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪০ (Software Engineering) Door ৬ (TDD):</strong> TDD-তে test double প্রতিদিন ব্যবহৃত। Book ৪৭ Door ৫: এখানে গভীরে — পাঁচটি প্রকার ও কখন কোনটা।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="0" y="0" width="580" height="250" fill="#0f172a"/>
  <text x="290" y="28" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">পাঁচটি মুখোশ — Test Doubles শ্রেণিবিন্যাস</text>
  <defs><marker id="arrTQ5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#7dd3fc"/></marker></defs>
  <rect x="20" y="60" width="95" height="110" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <circle cx="67" cy="90" r="16" fill="#0f172a" stroke="#4ade80" stroke-width="2"/>
  <text x="67" y="95" text-anchor="middle" fill="#4ade80" font-size="14">😶</text>
  <text x="67" y="125" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Dummy</text>
  <text x="67" y="142" text-anchor="middle" fill="#86efac" font-size="10">কিছু করে না</text>
  <text x="67" y="155" text-anchor="middle" fill="#94a3b8" font-size="10">শুধু প্যারামিটার</text>
  <rect x="130" y="55" width="95" height="120" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <circle cx="177" cy="85" r="16" fill="#0f172a" stroke="#4ade80" stroke-width="2"/>
  <text x="177" y="90" text-anchor="middle" fill="#4ade80" font-size="14">🎁</text>
  <text x="177" y="120" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Stub</text>
  <text x="177" y="137" text-anchor="middle" fill="#86efac" font-size="10">নির্দিষ্ট উত্তর</text>
  <text x="177" y="150" text-anchor="middle" fill="#94a3b8" font-size="10">get_user → {ali}</text>
  <rect x="240" y="50" width="95" height="130" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <circle cx="287" cy="80" r="16" fill="#0f172a" stroke="#4ade80" stroke-width="2"/>
  <text x="287" y="85" text-anchor="middle" fill="#4ade80" font-size="14">👁</text>
  <text x="287" y="115" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold">Spy</text>
  <text x="287" y="132" text-anchor="middle" fill="#86efac" font-size="10">কল রেকর্ড</text>
  <text x="287" y="145" text-anchor="middle" fill="#94a3b8" font-size="10">কতবার কল?</text>
  <rect x="350" y="45" width="95" height="140" rx="8" fill="#052e16" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="397" cy="75" r="16" fill="#0f172a" stroke="#fcd34d" stroke-width="2"/>
  <text x="397" y="80" text-anchor="middle" fill="#fcd34d" font-size="14">✓</text>
  <text x="397" y="110" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="bold">Mock</text>
  <text x="397" y="127" text-anchor="middle" fill="#fde68a" font-size="10">প্রত্যাশা যাচাই</text>
  <text x="397" y="140" text-anchor="middle" fill="#94a3b8" font-size="10">called_once?</text>
  <rect x="460" y="40" width="95" height="150" rx="8" fill="#0c4a6e" stroke="#22d3ee" stroke-width="2"/>
  <circle cx="507" cy="70" r="16" fill="#0f172a" stroke="#7dd3fc" stroke-width="2"/>
  <text x="507" y="75" text-anchor="middle" fill="#7dd3fc" font-size="14">🏛</text>
  <text x="507" y="105" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="bold">Fake</text>
  <text x="507" y="122" text-anchor="middle" fill="#bae6fd" font-size="10">সরল বাস্তবায়ন</text>
  <text x="507" y="135" text-anchor="middle" fill="#94a3b8" font-size="10">InMemoryDB</text>
  <line x1="20" y1="210" x2="545" y2="210" stroke="#7dd3fc" stroke-width="1.5" marker-end="url(#arrTQ5)"/>
  <text x="282" y="225" text-anchor="middle" fill="#7dd3fc" font-size="8">সরল → জটিল (আচরণের গভীরতা বাড়ে)</text>
</svg>
</div>
<div class="svg-caption">পাঁচটি test double — Dummy (কিছু না) থেকে Fake (সরল বাস্তবায়ন) পর্যন্ত আচরণের ক্রম</div>
<div class="secret-box">🎭 <strong>পাঁচ মুখোশ: Dummy, Stub, Spy, Mock, Fake।</strong> প্রতিটি নিজস্ব উদ্দেশ্য। কিন্তু সব নকল ইনপুট দিয়ে টেস্ট যথেষ্ট নয় — কখনো এলোমেলো ইনপুট দরকার। সেই উপায় — property-based testing। পরের দরজায়।</div>`,
  senior: {
    title: "Test Doubles এক নজরে",
    body: `<table class="kv-table"><tr><th>প্রকার</th><th>কী করে</th></tr>
<tr><td class="hl">Dummy</td><td>কিছু করে না — শুধু প্যারামিটার</td></tr>
<tr><td class="hl">Stub</td><td>নির্দিষ্ট উত্তর দেয়</td></tr>
<tr><td class="hl">Spy</td><td>কল রেকর্ড করে</td></tr>
<tr><td class="hl">Mock</td><td>প্রত্যাশা যাচাই করে</td></tr>
<tr><td class="hl">Fake</td><td>সরল বাস্তবায়ন (InMemoryDB)</td></tr>
<tr><td class="hl">Meszaros (2007)</td><td>xUnit Test Patterns</td></tr></table>`
  }
});
