// ═══════════════════════════════════════════
// DOOR 6 — The Mathematical Contract (SRE: Error Budgets)
// ═══════════════════════════════════════════
doors.push({
  num: 6,
  icon: "📊",
  color: "#dc2626",
  name: "গাণিতিক চুক্তি",
  subtitle: "SRE — SLI, SLO, SLA, Error Budgets & Burn Rate",
  tech: "Google SRE Principles, SLI/SLO/SLA, Error Budgets, Burn Rate Alerting",
  spirit: "মিজান — ন্যায়বিচার, পরিমাপযোগ্য ভারসাম্য",
  secret: "১০০% uptime অসম্ভব। ৯৯.৯% SLO = মাসে ৪৩.২ মিনিট downtime allowed। Budget শেষ? Feature বন্ধ, reliability শুরু। এটাই dev আর ops-এর mathematical contract।",
  recall: {
    q: "Error budget কী এবং burn rate alert কীভাবে কাজ করে?",
    qen: "What is an error budget and how does burn rate alerting work?",
    a: "Error budget = (1 - SLO) × total events। 99.9% SLO + 1M requests = 1,000 failures allowed। Burn rate = কত দ্রুত budget খরচ হচ্ছে। 14.4x burn = ৩০ দিনের budget ২ দিনে শেষ! Fast burn (14.4x/1h) আর slow burn (2x/24h) — two-tier alerting।",
    aen: "Error budget = (1 - SLO) × total events. 99.9% SLO + 1M requests = 1,000 failures allowed. Burn rate = how fast budget is consumed. 14.4x burn = 30-day budget exhausted in 2 days! Fast burn (14.4x/1h) and slow burn (2x/24h) — two-tier alerting."
  },
  story: `<p class="scene-setting">তুমি একটা গাড়ি চালাচ্ছ। তোমার লক্ষ্য — ৯৯.৯% সময় নিরাপদে চালানো। কিন্তু কেউ ১০০% নিখুঁত নয়। তাই তোমার আছে একটা "জরিমানা বাজেট" — মাসে কয়েকবার নিয়ম ভাঙতে পারবে। কিন্তু বাজেট শেষ হলে — গাড়ি থামাও। আর যদি দ্রুত খরচ হয়? একজন যাত্রী বলবে — "এই গতিতে গেলে তোমার পুরো বাজেট ২ দিনে শেষ!" এটাই burn rate alert।</p>
<p class="scene-setting en">You're driving. Your goal — drive safely 99.9% of the time. But no one is 100% perfect. So you have a "ticket budget" — you can break rules a few times per month. But when the budget runs out — stop driving. And if you're spending too fast? A passenger warns — "at this rate, your entire budget will be gone in 2 days!" This is a burn rate alert.</p>

<div class="dialogue"><strong>এসআরই ইঞ্জিনিয়ার:</strong> Google ২০০৩ সালে SRE team তৈরি করেছিল — একটা সহজ আইডিয়া দিয়ে। "১০০% uptime অসম্ভব, আর চেষ্টা করলে innovation মরে যায়।" তাই একটা contract — SLO (Service Level Objective)। ৯৯.৯% মানে ০.১% error budget। এই budget শেষ হলে — dev team feature development বন্ধ করে, reliability কাজ শুরু করে। mathematically enforced সততা।</div>
<div class="dialogue en"><strong>SRE Engineer:</strong> Google created the SRE team in 2003 — with a simple idea. "100% uptime is impossible, and trying kills innovation." So a contract — SLO (Service Level Objective). 99.9% means 0.1% error budget. When this budget runs out — dev team stops feature development, starts reliability work. Mathematically enforced honesty.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Dangling Volumes:</strong> Old volumes never deleted — $2000/month wasted. Fix: automated cleanup.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <!-- SLO Gauge -->
  <rect x="20" y="20" width="540" height="240" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <text x="290" y="45" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="900">📊 Error Budget — 99.9% SLO (30-day window)</text>

  <!-- Budget bar -->
  <rect x="50" y="70" width="480" height="30" rx="5" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <rect x="50" y="70" width="430" height="30" rx="5" fill="#059669" opacity=".3"/>
  <text x="100" y="89" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="600">Uptime (99.9%)</text>
  <rect x="480" y="70" width="50" height="30" rx="0" fill="#dc2626" opacity=".4"/>
  <text x="505" y="89" text-anchor="middle" fill="#f87171" font-size="9" font-weight="600">Budget</text>
  <text x="505" y="115" text-anchor="middle" fill="#fca5a5" font-size="8">0.1% = 43.2 min</text>

  <!-- Burn rate gauge -->
  <text x="290" y="140" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="600">Burn Rate (how fast budget is consumed)</text>
  <rect x="50" y="155" width="480" height="24" rx="12" fill="#1e293b" stroke="#475569"/>
  <!-- Gradient segments -->
  <rect x="52" y="157" width="120" height="20" rx="10" fill="#059669" opacity=".5"/>
  <text x="112" y="171" text-anchor="middle" fill="#4ade80" font-size="9">1x (steady)</text>
  <rect x="174" y="157" width="120" height="20" fill="#eab308" opacity=".4"/>
  <text x="234" y="171" text-anchor="middle" fill="#facc15" font-size="9">2x (slow burn)</text>
  <rect x="296" y="157" width="120" height="20" fill="#f97316" opacity=".4"/>
  <text x="356" y="171" text-anchor="middle" fill="#fb923c" font-size="9">6x (warning)</text>
  <rect x="418" y="157" width="110" height="20" rx="10" fill="#dc2626" opacity=".5"/>
  <text x="473" y="171" text-anchor="middle" fill="#f87171" font-size="9" font-weight="700">14.4x (🔥)</text>

  <!-- Alert thresholds -->
  <rect x="50" y="200" width="230" height="45" rx="8" fill="#451a03" stroke="#f97316" stroke-width="1.5"/>
  <text x="165" y="220" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="700">⚠️ Slow Burn Alert</text>
  <text x="165" y="235" text-anchor="middle" fill="#fb923c" font-size="9">2x burn · 24h window</text>

  <rect x="300" y="200" width="230" height="45" rx="8" fill="#450a0a" stroke="#dc2626" stroke-width="1.5"/>
  <text x="415" y="220" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="700">🚨 Fast Burn Alert</text>
  <text x="415" y="235" text-anchor="middle" fill="#f87171" font-size="9">14.4x · 1h → budget gone in 2 days!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Error Budget — 99.9% SLO মানে মাত্র 43.2 min/month downtime allowed। Burn rate বলে কত দ্রুত budget শেষ হচ্ছে।</div>

<div class="code-block">
<strong>SRE শব্দকোষ (SLI → SLO → SLA):</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Term</th>
<th style="text-align:left;padding:.3rem">মানে</th>
<th style="text-align:left;padding:.3rem">উদাহরণ</th>
</tr>
<tr><td style="padding:.2rem"><strong>SLI</strong></td><td>Service Level Indicator — raw measurement</td><td>"request success rate = 99.95%"</td></tr>
<tr><td style="padding:.2rem"><strong>SLO</strong></td><td>Service Level Objective — internal target</td><td>"target = 99.9% (2.4h downtime/month)"</td></tr>
<tr><td style="padding:.2rem"><strong>SLA</strong></td><td>Service Level Agreement — external contract</td><td>"<99% = customer gets refund"</td></tr>
<tr><td style="padding:.2rem"><strong>Error Budget</strong></td><td>1 - SLO = allowed unreliability</td><td>"0.1% = 43.2 min/month allowed"</td></tr>
</table>

<br><strong>Error Budget Math:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
SLO: 99.9%
Monthly requests: 10,000,000
Error budget: (1 - 0.999) × 10M = 10,000 failures allowed

Burn rate = current error rate / error budget quota
  Burn 1.0 = steady state (exact pace)
  Burn 5.0 = 5x faster → budget শেষ in 6 days
  Burn 14.4 = 14.4x → 30-day budget শেষ in ~2 days!
</pre>

<strong>Two-Tier Burn Rate Alerting (Google SRE):</strong>
<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Type</th>
<th style="text-align:left;padding:.3rem">Threshold</th>
<th style="text-align:left;padding:.3rem">Window</th>
<th style="text-align:left;padding:.3rem">মানে</th>
</tr>
<tr><td style="padding:.2rem"><strong>Fast Burn</strong></td><td>14.4x</td><td>1 hour</td><td>🚨 জরুরি! এখনই action</td></tr>
<tr><td style="padding:.2rem"><strong>Slow Burn</strong></td><td>2x</td><td>24 hours</td><td>⚠️ ধীর ক্ষয় — investigate</td></tr>
</table>
</div>

<div class="dialogue"><strong>তুমি:</strong> এটা আসলেই কি dev team কে থামায়?</div>
<div class="dialogue en"><strong>You:</strong> Does this actually stop dev teams?</div>

<div class="dialogue"><strong>ইঞ্জিনিয়ার:</strong> হ্যাঁ! Google-এ এটা policy। Error budget exhausted = feature freeze। শুধু reliability, bug fix, infrastructure improvement। Budget থাকলে — feature ship করো, experiment করো। এটাই dev আর ops এর মধ্যে সবচেয়ে কার্যকর contract। কেউ রাগ করে না — math বলে দেয় কখন কী করতে হবে।</div>
<div class="dialogue en"><strong>Engineer:</strong> Yes! At Google this is policy. Error budget exhausted = feature freeze. Only reliability, bug fixes, infrastructure improvements. Budget remaining — ship features, experiment. This is the most effective contract between dev and ops. No one argues — math tells you what to do.</div>

<div class="verse">
<strong>তোমার App গুলোর জন্য SLO:</strong><br>
<a href="../llmops/index.html" style="color:var(--accent);font-size:.85rem">← Book 14 (LLMOps) — ML model monitoring</a><br>
• <strong>LedgerPilot (Financial):</strong> 99.9% SLO — মাত্র 43.2 min/month downtime। Fast burn 10x/1h।<br>
• <strong>Ipractus (Health/Comms):</strong> 99.5% SLO — 3.6 hours/month downtime। Slow burn 2x/24h।<br>
• <strong>KC (Static GitHub Pages):</strong> 99.99% — প্রায় zero downtime expected।<br><br>
<strong>কেন SLO আলাদা?</strong> Financial app-এ transaction integrity সবচেয়ে গুরুত্বপূর্ণ। Health app-এ availability গুরুত্বপূর্ণ কিন্তু একটু tolerant। Static site-এ GitHub-এর SLA যথেষ্ট।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> SRE error budget হলো dev আর ops-এর মধ্যে একটা mathematical contract। ১০০% অসম্ভব — তাই একটা সংখ্যা ঠিক করো। Budget শেষ = feature বন্ধ। Budget আছে = ship করো। Math সবাইকে সততাশীল করে।<br>
<em>SRE error budget is a mathematical contract between dev and ops. 100% is impossible — so pick a number. Budget exhausted = features frozen. Budget available = ship. Math keeps everyone honest.</em>
</div>`,
  senior: {
    title: "SRE প্র্যাকটিস গাইড",
    body: `<p><strong>১. Start with SLI:</strong> আগে মাপো কী — success rate? latency? এটাই SLI।</p>
<p><strong>২. Define SLO with business:</strong> "99.9% transaction < 200ms" — business team এর সাথে agree করো।</p>
<p><strong>৩. Burn rate alerts:</strong> Prometheus এ recording rule লেখো — error ratio / budget quota।</p>
<p><strong>৪. Error budget policy:</strong> লিখিত নিয়ম — "budget শেষ হলে কী হবে?" feature freeze? on-call escalation?</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 7 — The Safety Net Factory (CI/CD & GitOps)
// ═══════════════════════════════════════════
doors.push({
  num: 7,
  icon: "🔄",
  color: "#ea580c",
  name: "নিরাপত্তার জাল",
  subtitle: "CI/CD Pipelines & GitOps",
  tech: "CI/CD Pipeline Stages, GitHub Actions, ArgoCD, GitOps Principles",
  spirit: "সিলাহ — বর্ম, যা বিপদে রক্ষা করে",
  secret: "CI/CD = একটা কারখানার assembly line। প্রতিটা stage-এ test — fail হলে belt থামে। ভাঙা পণ্য কখনো customer-এর কাছে যায় না।",
  recall: {
    q: "GitOps কী এবং এটা traditional CI/CD থেকে কীভাবে আলাদা?",
    qen: "What is GitOps and how does it differ from traditional CI/CD?",
    a: "GitOps = Git repository হলো single source of truth। ArgoCD/Flux Git watch করে, cluster-এর state এর সাথে compare করে, drift detect করলে auto-sync করে। Traditional CI/CD = push-based (CI tool server-এ push করে)। GitOps = pull-based (cluster-এর agent Git থেকে pull করে)।",
    aen: "GitOps = Git repo is the single source of truth. ArgoCD/Flux watches Git, compares with cluster state, auto-syncs on drift. Traditional CI/CD = push-based (CI tool pushes to server). GitOps = pull-based (cluster agent pulls from Git)."
  },
  story: `<p class="scene-setting">তুমি একটা গাড়ির কারখানায় আছ। Assembly line চলছে — কনভেয়র বেল্টে গাড়ি এগিয়ে যায়। প্রতিটা স্টেশনে একটা পরীক্ষা — engine test, brake test, security scan। কোনো স্টেশনে fail করলে? পুরো belt থেমে যায়। ভাঙা গাড়ি কখনো showroom-এ যায় না। এটাই CI/CD pipeline। প্রতিটা <code>git push</code> = একটা নতুন গাড়ি assembly line-এ।</p>
<p class="scene-setting en">You're in a car factory. The assembly line runs — cars move on the conveyor belt. Each station tests — engine, brakes, security scan. Any station fails? The entire belt stops. No broken car reaches the showroom. This is a CI/CD pipeline. Every <code>git push</code> = a new car enters the assembly line.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Log Aggregation:</strong> Logs lost when container died. Fix: central log aggregation.</div></div>


<div class="code-block">
<strong>CI/CD Pipeline Stages:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
git push
  ↓
[CI - Continuous Integration]
  ├── Build (Docker image)
  ├── Unit Tests (pytest, jest)
  ├── Integration Tests
  ├── Security Scan (Trivy, Snyk)
  └── Push to Registry (DO Container Registry)
  ↓
[CD - Continuous Deployment]
  ├── Staging deploy
  ├── E2E Tests
  ├── Manual/Auto approval
  └── Production deploy (blue-green/canary)
  ↓
[Post-Deploy]
  ├── Health check (reconciliation!)
  └── Alert if unhealthy
</pre>

<strong>GitOps = Pull-Based Deployment:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
Traditional (Push):
  GitHub Actions → SSH to server → docker-compose up
  (সমস্যা: credentials server-এ দিতে হয়)

GitOps (Pull):
  Developer → git push → Git repo
                    ↑
  ArgoCD (in cluster) watches Git
  ArgoCD detects change → pulls → applies to cluster
  (সুবিধা: cluster-এর কাছে কোনো external credential নেই)
</pre>
</div>

<div class="dialogue"><strong>তুমি:</strong> আমি তো GitHub Actions দিয়ে SSH তে deploy করি। সেটা GitOps না?</div>
<div class="dialogue en"><strong>You:</strong> I deploy via GitHub Actions with SSH. Is that GitOps?</div>

<div class="dialogue"><strong>ইঞ্জিনিয়ার:</strong> না — সেটা push-based। GitOps এর মূল নীতি — cluster-এর ভেতরের agent (ArgoCD/Flux) Git থেকে pull করে। কেন ভালো? ১) Cluster-এ কোনো external SSH credential রাখতে হয় না। ২) Git history = deployment audit trail। ৩) Manual cluster change detect করা যায় (drift detection)। ৪) Rollback = git revert। তবে — Docker Compose-এ GitOps এর দরকার নেই। GitOps মূলত K8s-এর জন্য।</div>
<div class="dialogue en"><strong>Engineer:</strong> No — that's push-based. GitOps core principle — the in-cluster agent (ArgoCD/Flux) pulls from Git. Why better? 1) No external SSH credentials on the cluster. 2) Git history = deployment audit trail. 3) Manual cluster changes detected (drift detection). 4) Rollback = git revert. But — Docker Compose doesn't need GitOps. GitOps is mainly for K8s.</div>

<div class="verse">
<strong>তোমার LedgerPilot CI/CD (GitHub Actions + DO):</strong><br>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
on: push to main
jobs:
  test: pytest + lint
  build: docker build + push to DO registry
  deploy-staging: SSH → docker-compose up
  health-check: curl staging URL (reconciliation!)
  deploy-prod: (manual approval) → blue-green switch
</pre>
<strong>Safety net:</strong> প্রতিটা stage fail হলে pipeline থামে। ভাঙা deploy কখনো prod-এ যায় না।<br>
<a href="../software-engineering/index.html" style="color:var(--accent);font-size:.85rem">← Book 40 (SWE) — Git workflow, testing, DevOps</a>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🚀 CI/CD Pipeline: Assembly Line with Safety Nets</text>
  <rect x="10" y="55" width="80" height="45" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="50" y="78" text-anchor="middle" fill="#7dd3fc" font-size="7">Git Push</text>
  <rect x="100" y="55" width="80" height="45" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="140" y="78" text-anchor="middle" fill="#4ade80" font-size="7">Build</text>
  <rect x="190" y="55" width="80" height="45" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="230" y="78" text-anchor="middle" fill="#fcd34d" font-size="7">Test</text>
  <rect x="280" y="55" width="80" height="45" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="320" y="78" text-anchor="middle" fill="#fca5a5" font-size="7">Scan</text>
  <rect x="370" y="55" width="80" height="45" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="410" y="78" text-anchor="middle" fill="#c084fc" font-size="7">Staging</text>
  <rect x="460" y="55" width="100" height="45" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="510" y="78" text-anchor="middle" fill="#4ade80" font-size="7">Prod!</text>
  <text x="50" y="115" text-anchor="middle" fill="#22c55e" font-size="6">Gate: lint</text>
  <text x="140" y="115" text-anchor="middle" fill="#22c55e" font-size="6">Gate: compile</text>
  <text x="230" y="115" text-anchor="middle" fill="#fcd34d" font-size="6">Gate: unit+E2E</text>
  <text x="320" y="115" text-anchor="middle" fill="#fca5a5" font-size="6">Gate: security</text>
  <text x="410" y="115" text-anchor="middle" fill="#c084fc" font-size="6">Gate: smoke</text>
  <text x="510" y="115" text-anchor="middle" fill="#4ade80" font-size="6">auto-rollout</text>
  <text x="290" y="150" text-anchor="middle" fill="#f87171" font-size="7">❌ Fail = belt stops, broken code blocked</text>
  <text x="290" y="170" text-anchor="middle" fill="#94a3b8" font-size="7">GitOps: cluster pulls from Git, no manual push</text>
  <text x="290" y="190" text-anchor="middle" fill="#94a3b8" font-size="7">ArgoCD / Flux: reconcile loop</text>
</svg>
</div>
<div class="svg-caption">চিত্র: CI/CD — assembly line with safety nets। প্রতিটা stage-এ gate।</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> CI/CD = assembly line with safety nets। প্রতিটা stage-এ test। Fail = belt stop। ভাঙা code কখনো production-এ যায় না। GitOps = cluster নিজে Git থেকে pull করে — কোনো push নেই, কোনো credential leak নেই।<br>
<em>CI/CD = assembly line with safety nets. Each stage tests. Fail = belt stops. Broken code never reaches production. GitOps = cluster pulls from Git itself — no push, no credential leak.</em>
</div>`,
  senior: {
    title: "CI/CD প্র্যাকটিস গাইড",
    body: `<p><strong>১. Pipeline stages:</strong> Build → Test → Security Scan → Staging → Prod। কোনো stage skip করবে না।</p>
<p><strong>২. Health check post-deploy:</strong> <code>curl</code> দিয়ে verify করো app response দিচ্ছে। না দিলে CI fail করো।</p>
<p><strong>৩. Secrets management:</strong> GitHub Actions secrets, DO API token — কখনো code-এ রাখবে না।</p>
<p><strong>৪. When to go GitOps:</strong> Docker Compose = push-based ঠিক আছে। K8s-এ গেলে ArgoCD বিবেচনা করো।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 8 — The Invisible Guardian (Service Mesh)
// ═══════════════════════════════════════════
doors.push({
  num: 8,
  icon: "🛡️",
  color: "#0891b2",
  name: "অদৃশ্য রক্ষক",
  subtitle: "Service Mesh — Sidecar, eBPF, Cilium, Istio Ambient",
  tech: "Istio, Cilium eBPF, Envoy Sidecar, Istio Ambient Mode, kube-proxy Replacement",
  spirit: "হিফজ — সুরক্ষা, যা দৃশ্যমান নয় কিন্তু সবকিছু রক্ষা করে",
  secret: "Sidecar = প্রতিটা Pod-এ ৭০MB প্রক্সি। ১০০০ Pod = ৭০GB waste! eBPF = kernel-এর ভেতরে directly — শূন্য overhead। এটাই service mesh-এর ভবিষ্যৎ।",
  recall: {
    q: "Sidecar service mesh আর eBPF service mesh এর পার্থক্য কী?",
    qen: "What's the difference between sidecar and eBPF service mesh?",
    a: "Sidecar = প্রতিটা Pod-এ Envoy proxy inject করা (৫০-১০০MB/Pod, 1-3ms latency/hop)। eBPF = kernel-এ directly program চালানো — zero user-space proxy, O(1) lookup, socket-level load balancing। Cilium এটা করে।",
    aen: "Sidecar = inject Envoy proxy into every Pod (50-100MB/Pod, 1-3ms latency/hop). eBPF = run programs directly in kernel — zero user-space proxy, O(1) lookup, socket-level load balancing. Cilium does this."
  },
  story: `<p class="scene-setting">বিমানবন্দরে নিরাপত্তা। পুরোনো পদ্ধতি — প্রতিটা গাড়িতে একজন নিরাপত্তা রক্ষক বসানো। সব গাড়ি চেক হয় — কিন্তু কত লোক লাগে! হাজার গাড়ি = হাজার রক্ষক। নতুন পদ্ধতি — রাস্তার পিচেই scanner বসানো। গাড়ি যেমন চলবে তেমনই চলবে — scanner automatic ভাবে সব চেক করবে। কোনো অতিরিক্ত লোক লাগবে না। এটাই sidecar বনাম eBPF।</p>
<p class="scene-setting en">Airport security. Old approach — put a security guard in every car. Every car checked — but how many guards! A thousand cars = a thousand guards. New approach — embed scanners in the road itself. Cars drive normally — the scanner checks everything automatically. No extra guards needed. This is sidecar vs eBPF.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Firewall Misconfiguration:</strong> 0.0.0.0/0 on port 22 — cryptomining within hours. Fix: least-privilege networking.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <!-- Sidecar (left) -->
  <rect x="10" y="10" width="270" height="300" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <text x="145" y="32" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="900">❌ Sidecar Mode (Old)</text>

  <rect x="30" y="50" width="230" height="55" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="145" y="72" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="600">Pod 1</text>
  <rect x="45" y="78" width="90" height="20" rx="4" fill="#082f49" stroke="#0ea5e9" stroke-width="1"/>
  <text x="90" y="92" text-anchor="middle" fill="#bae6fd" font-size="8">App</text>
  <rect x="145" y="78" width="100" height="20" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <text x="195" y="92" text-anchor="middle" fill="#fca5a5" font-size="8">Envoy 70MB</text>

  <rect x="30" y="115" width="230" height="55" rx="8" fill="#581c87" stroke="#a855f7" stroke-width="1.5"/>
  <text x="145" y="137" text-anchor="middle" fill="#d8b4fe" font-size="11" font-weight="600">Pod 2</text>
  <rect x="45" y="143" width="90" height="20" rx="4" fill="#3b0764" stroke="#a855f7" stroke-width="1"/>
  <text x="90" y="157" text-anchor="middle" fill="#e9d5ff" font-size="8">App</text>
  <rect x="145" y="143" width="100" height="20" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <text x="195" y="157" text-anchor="middle" fill="#fca5a5" font-size="8">Envoy 70MB</text>

  <rect x="30" y="180" width="230" height="55" rx="8" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
  <text x="145" y="202" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="600">Pod 3</text>
  <rect x="45" y="208" width="90" height="20" rx="4" fill="#431407" stroke="#f97316" stroke-width="1"/>
  <text x="90" y="222" text-anchor="middle" fill="#fed7aa" font-size="8">App</text>
  <rect x="145" y="208" width="100" height="20" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <text x="195" y="222" text-anchor="middle" fill="#fca5a5" font-size="8">Envoy 70MB</text>

  <text x="145" y="265" text-anchor="middle" fill="#f87171" font-size="10" font-weight="700">3 Pods × 70MB = 210MB wasted</text>
  <text x="145" y="282" text-anchor="middle" fill="#fca5a5" font-size="9">1000 Pods = 70 GB waste!</text>
  <text x="145" y="298" text-anchor="middle" fill="#94a3b8" font-size="9">iptables interception · 1-3ms/hop</text>

  <!-- eBPF (right) -->
  <rect x="300" y="10" width="270" height="300" rx="12" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="435" y="32" text-anchor="middle" fill="#86efac" font-size="12" font-weight="900">✅ eBPF / Cilium (New)</text>

  <rect x="320" y="50" width="230" height="45" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="435" y="72" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="600">Pod 1 (App only — no sidecar!)</text>

  <rect x="320" y="105" width="230" height="45" rx="8" fill="#581c87" stroke="#a855f7" stroke-width="1.5"/>
  <text x="435" y="127" text-anchor="middle" fill="#d8b4fe" font-size="11" font-weight="600">Pod 2 (App only)</text>

  <rect x="320" y="160" width="230" height="45" rx="8" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
  <text x="435" y="182" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="600">Pod 3 (App only)</text>

  <!-- Kernel layer -->
  <rect x="320" y="220" width="230" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="435" y="242" text-anchor="middle" fill="#86efac" font-size="11" font-weight="700">🧠 Linux Kernel</text>
  <text x="435" y="258" text-anchor="middle" fill="#4ade80" font-size="9">eBPF programs (routing, mTLS, LB)</text>
  <text x="435" y="270" text-anchor="middle" fill="#4ade80" font-size="8">O(1) lookup · socket-level · zero proxy</text>

  <text x="435" y="290" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">3 Pods × 0MB = 0MB overhead</text>
  <text x="435" y="305" text-anchor="middle" fill="#86efac" font-size="9">1000 Pods = ~50MB/node (not per pod!)</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Sidecar বনাম eBPF — বাঁদিকে প্রতিটা Pod-এ ৭০MB proxy (1000 Pod = ৭০GB waste)। ডানদিকে eBPF kernel-এ directly — শূন্য overhead।</div>

<div class="code-block">
<strong>Service Mesh Evolution:</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Approach</th>
<th style="text-align:left;padding:.3rem">Memory/Pod</th>
<th style="text-align:left;padding:.3rem">Latency/hop</th>
<th style="text-align:left;padding:.3rem">কে ব্যবহার করে</th>
</tr>
<tr><td style="padding:.2rem"><strong>Sidecar (Istio)</strong></td><td>50-100 MB</td><td>1-3 ms</td><td>Envoy proxy per Pod</td></tr>
<tr><td style="padding:.2rem"><strong>Ambient (Istio)</strong></td><td>~50 MB/node</td><td>lower</td><td>ztunnel (L4) + waypoint (L7)</td></tr>
<tr><td style="padding:.2rem"><strong>eBPF (Cilium)</strong></td><td>~0 (kernel)</td><td>near-zero</td><td>In-kernel programs, O(1) lookup</td></tr>
</table>

<br><strong>Sidecar Problem at Scale:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
1,000 Pods × 70 MB = 70 GB memory wasted on proxies!
3-hop service chain = 3-9 ms extra latency
Every pod restart = sidecar injection + readiness check
GPU workloads: sidecar steals expensive GPU-node memory
</pre>

<strong>eBPF Solution:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
Cilium replaces kube-proxy:
  iptables: O(n) rule chain traversal (slow at scale)
  eBPF hash maps: O(1) lookup (constant time!)

Socket-level load balancing:
  Traffic intercepted at connect() syscall
  BEFORE packets enter network stack
  Zero context switches, zero proxy processes
</pre>
</div>

<div class="dialogue"><strong>তুমি:</strong> আমার DO Docker Compose setup-এ service mesh দরকার?</div>
<div class="dialogue en"><strong>You:</strong> Do I need a service mesh for my DO Docker Compose setup?</div>

<div class="dialogue"><strong>ইঞ্জিনিয়ার:</strong> এখন না। Service mesh দরকার যখন: ১) অনেক microservice (10+)। ২) mTLS সব traffic-এ দরকার। ৩) Traffic splitting (canary) দরকার। ৪) Distributed tracing automatic চাই। Docker Compose-এ তুমি নিজেই Nginx reverse proxy দিয়ে manage করো। K8s-এ গেলে Cilium (eBPF) বিবেচনা করো — sidecar নয়।</div>
<div class="dialogue en"><strong>Engineer:</strong> Not now. You need a service mesh when: 1) Many microservices (10+). 2) mTLS on all traffic. 3) Traffic splitting (canary). 4) Automatic distributed tracing. With Docker Compose, you manage with Nginx reverse proxy. On K8s, consider Cilium (eBPF) — not sidecar.</div>

<div class="verse">
<strong>eBPF = Book 42 (Architecture) এর সাথে সংযুক্ত:</strong><br>
<a href="../computer-architecture/index.html" style="color:var(--accent);font-size:.85rem">← Book 42 — kernel, syscall, hardware interaction</a><br>
eBPF = kernel-এ programmable code inject করা। XDP (eXpress Data Path) লেয়ারে — networking driver-এ directly। এটা user-space proxy এর চেয়ে শত গুণ দ্রুত কারণ context switch নেই।<br>
Cilium একসাথে: CNI (pod networking) + Network Policy + Service Mesh + Observability (Hubble) + Load Balancing — সব kernel-এ।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> Sidecar যুগ শেষ হচ্ছে। ১০০০ Pod × ৭০MB = ৭০GB waste। eBPF kernel-এ directly কাজ করে — শূন্য overhead, O(1) lookup। Cilium = ভবিষ্যৎ। তবে এখন Docker Compose-এ দরকার নেই — Nginx যথেষ্ট।<br>
<em>The sidecar era is ending. 1000 Pods × 70MB = 70GB waste. eBPF works directly in the kernel — zero overhead, O(1) lookup. Cilium = the future. But Docker Compose doesn't need it yet — Nginx suffices.</em>
</div>`,
  senior: {
    title: "Service Mesh প্র্যাকটিস গাইড",
    body: `<p><strong>১. When to adopt:</strong> 10+ microservices, mTLS needed, canary traffic splitting — তখন service mesh বিবেচনা করো।</p>
<p><strong>২. Cilium over Istio:</strong> eBPF-based, lower overhead, unified stack (CNI + mesh + observability)।</p>
<p><strong>৩. mTLS everywhere:</strong> Zero-trust networking — সব service-to-service traffic encrypted।</p>
<p><strong>৪. Don't over-engineer:</strong> Docker Compose + Nginx = sufficient for most apps। Service mesh তখনই যখন complexity justify করে।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 9 — The War Room (Deployment Strategies)
// ═══════════════════════════════════════════
doors.push({
  num: 9,
  icon: "🎯",
  color: "#16a34a",
  name: "যুদ্ধকক্ষ",
  subtitle: "Deployment Strategies — Blue-Green, Canary, Argo Rollouts",
  tech: "Blue-Green, Canary, Progressive Delivery, Argo Rollouts, Rolling Updates",
  spirit: "কাওয়ারি — চটপটে, সতর্ক, পরিমাপিত পদক্ষেপ",
  secret: "K8s default rolling update silent bugs ধরে না। Argo Rollouts metric watch করে — error rate বাড়লে auto-rollback। এটাই progressive delivery।",
  recall: {
    q: "Blue-green আর Canary deployment এর পার্থক্য কী?",
    qen: "What's the difference between blue-green and canary deployment?",
    a: "Blue-green = দুটা identical environment parallel। ১০০% traffic instant switch। Rollback instant। Canary = ধীরে ধীরে traffic shift (5%→25%→50%→100%), প্রতিটা step-এ metric watch। Problem হলে শুধু ওই অংশ affected।",
    aen: "Blue-green = two identical environments in parallel. 100% traffic instant switch. Rollback instant. Canary = gradual traffic shift (5%→25%→50%→100%), watching metrics at each step. If problems, only that fraction affected."
  },
  story: `<p class="scene-setting">তুমি একটা নতুন রেস্তোরাঁ খুলছ। দুটো পথ। প্রথম — Blue-Green: পুরোনো রেস্তোরাঁর পাশে একটা identical নতুন শাখা তৈরি করো। সব প্রস্তুত হলে — পুরোনোটার দরজা বন্ধ, নতুনটার দরজা খোলা। ১০০% গ্রাহক instant switch। সমস্যা হলে instant revert। দ্বিতীয় — Canary: soft opening। মাত্র ৫% গ্রাহককে নতুন শাখায় পাঠাও। মেট্রিক দেখো — খাবার ঠিক আছে? সন্তুষ্ট? তাহলে ২৫%, তারপর ৫০%, শেষে ১০০%।</p>
<p class="scene-setting en">You're opening a new restaurant. Two paths. First — Blue-Green: build an identical new branch next to the old one. When ready — close old doors, open new. 100% of customers switch instantly. Problem? Instant revert. Second — Canary: soft opening. Send only 5% of customers to the new branch. Watch metrics — food good? Satisfied? Then 25%, then 50%, finally 100%.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Kubernetes Pod Eviction:</strong> Node ran out of disk — pods evicted. Fix: set resource limits.</div></div>


<div class="svg-diagram">
<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <!-- Blue-Green -->
  <rect x="10" y="10" width="275" height="280" rx="12" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
  <text x="147" y="32" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="900">🔵 Blue-Green Deployment</text>

  <rect x="25" y="50" width="115" height="60" rx="8" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="82" y="72" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="700">🔵 Blue (old)</text>
  <text x="82" y="88" text-anchor="middle" fill="#60a5fa" font-size="9">v1.0 running</text>
  <text x="82" y="100" text-anchor="middle" fill="#60a5fa" font-size="9">100% traffic</text>

  <rect x="155" y="50" width="115" height="60" rx="8" fill="#065f46" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="212" y="72" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="700">🟢 Green (new)</text>
  <text x="212" y="88" text-anchor="middle" fill="#34d399" font-size="9">v2.0 ready</text>
  <text x="212" y="100" text-anchor="middle" fill="#34d399" font-size="9">0% traffic</text>

  <!-- Switch arrow -->
  <line x1="140" y1="130" x2="155" y2="130" stroke="#eab308" stroke-width="3" marker-end="url(#arrS)"/>
  <text x="147" y="125" text-anchor="middle" fill="#facc15" font-size="9" font-weight="700">SWITCH</text>
  <defs><marker id="arrS" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#eab308"/></marker></defs>

  <rect x="25" y="145" width="115" height="50" rx="8" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1" opacity=".3"/>
  <text x="82" y="170" text-anchor="middle" fill="#60a5fa" font-size="10">🔵 Blue (old)</text>
  <text x="82" y="183" text-anchor="middle" fill="#60a5fa" font-size="8">0% traffic</text>

  <rect x="155" y="145" width="115" height="50" rx="8" fill="#065f46" stroke="#10b981" stroke-width="2"/>
  <text x="212" y="170" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="700">🟢 Green (new)</text>
  <text x="212" y="183" text-anchor="middle" fill="#34d399" font-size="8">100% traffic ✅</text>

  <text x="147" y="225" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="600">Instant switch · Instant rollback</text>
  <text x="147" y="245" text-anchor="middle" fill="#60a5fa" font-size="9">Best for: LedgerPilot (financial)</text>
  <text x="147" y="265" text-anchor="middle" fill="#64748b" font-size="9">Cost: 2x resources temporarily</text>

  <!-- Canary -->
  <rect x="295" y="10" width="275" height="280" rx="12" fill="#0f172a" stroke="#eab308" stroke-width="2"/>
  <text x="432" y="32" text-anchor="middle" fill="#fde047" font-size="12" font-weight="900">🐤 Canary Deployment</text>

  <rect x="310" y="50" width="245" height="30" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <rect x="312" y="52" width="232" height="26" rx="4" fill="#1e3a5f"/>
  <text x="432" y="70" text-anchor="middle" fill="#93c5fd" font-size="10">v1.0: 100% traffic</text>

  <rect x="310" y="95" width="245" height="30" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <rect x="312" y="97" width="220" height="26" rx="4" fill="#1e3a5f"/>
  <rect x="534" y="97" width="12" height="26" rx="2" fill="#eab308"/>
  <text x="432" y="115" text-anchor="middle" fill="#93c5fd" font-size="9">v1.0: 95% · v2.0: 5% 🐤</text>

  <rect x="310" y="140" width="245" height="30" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <rect x="312" y="142" width="160" height="26" rx="4" fill="#1e3a5f"/>
  <rect x="474" y="142" width="72" height="26" rx="4" fill="#eab308"/>
  <text x="432" y="160" text-anchor="middle" fill="#93c5fd" font-size="9">v1.0: 75% · v2.0: 25%</text>

  <rect x="310" y="185" width="245" height="30" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <rect x="312" y="187" width="100" height="26" rx="4" fill="#1e3a5f"/>
  <rect x="414" y="187" width="132" height="26" rx="4" fill="#eab308"/>
  <text x="432" y="205" text-anchor="middle" fill="#93c5fd" font-size="9">v1.0: 50% · v2.0: 50%</text>

  <text x="432" y="240" text-anchor="middle" fill="#fde047" font-size="10" font-weight="600">Gradual shift · Metric-driven</text>
  <text x="432" y="258" text-anchor="middle" fill="#eab308" font-size="9">Best for: Ipractus (health/comms)</text>
  <text x="432" y="275" text-anchor="middle" fill="#64748b" font-size="9">Auto-rollback on metric breach</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Blue-Green (instant switch) বনাম Canary (gradual 5%→25%→50%→100%)। LedgerPilot-এ Blue-Green, Ipractus-এ Canary।</div>

<div class="code-block">
<strong>Deployment Strategy Comparison:</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Strategy</th>
<th style="text-align:left;padding:.3rem">Downtime</th>
<th style="text-align:left;padding:.3rem">Rollback</th>
<th style="text-align:left;padding:.3rem">Risk</th>
<th style="text-align:left;padding:.3rem">খরচ</th>
</tr>
<tr><td style="padding:.2rem"><strong>Rolling</strong></td><td>ন্যূনতম</td><td>ধীর</td><td>medium</td><td>low</td></tr>
<tr><td style="padding:.2rem"><strong>Blue-Green</strong></td><td>zero</td><td>instant ✅</td><td>low</td><td>2x resources</td></tr>
<tr><td style="padding:.2rem"><strong>Canary</strong></td><td>zero</td><td>fast</td><td>সর্বনিম্ন ✅</td><td>monitoring needed</td></tr>
<tr><td style="padding:.2rem"><strong>Recreate</strong></td><td>YES ❌</td><td>n/a</td><td>high</td><td>low</td></tr>
</table>

<br><strong>K8s Default = Rolling Update এর সীমা:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
K8s Deployment: old pods ধীরে replace → new pods
সমস্যা: pod crash না হলে rollback trigger হয় না!
Silent bug (e.g., checkout button ভাঙা) → "healthy" দেখায়
→ সব traffic new version-এ → user complaint

Argo Rollouts solution:
  - Metric-based analysis (Prometheus, Datadog)
  - Error rate বাড়লে → auto-pause বা auto-rollback
  - Progressive: 5% → watch → 25% → watch → 100%
</pre>
</div>

<div class="dialogue"><strong>তুমি:</strong> কোন app-এ কোন strategy?</div>
<div class="dialogue en"><strong>You:</strong> Which strategy for which app?</div>

<div class="dialogue"><strong>ইঞ্জিনিয়ার:</strong> সহজ নিয়ম। <strong>LedgerPilot (Financial) → Blue-Green</strong>। কারণ transaction integrity সবচেয়ে গুরুত্বপূর্ণ — instant rollback দরকার। <strong>Ipractus (Health/Comms) → Canary</strong>। কারণ WebRTC/LiveKit behavior ধীরে ধীরে test করা দরকার। <strong>KC (Static) → Atomic Git</strong>। কারণ স্ট্যাটিক সাইট, <code>git push</code> ই যথেষ্ট।</div>
<div class="dialogue en"><strong>Engineer:</strong> Simple rule. <strong>LedgerPilot (Financial) → Blue-Green</strong>. Because transaction integrity is most critical — instant rollback needed. <strong>Ipractus (Health/Comms) → Canary</strong>. Because WebRTC/LiveKit behavior needs gradual testing. <strong>KC (Static) → Atomic Git</strong>. Because static site, <code>git push</code> suffices.</div>

<div class="verse">
<strong>Argo Rollouts — Automated Progressive Delivery:</strong><br>
Argo Rollouts K8s Deployment কে replace করে একটা custom resource দিয়ে।<br>
• Canary: 5% → analysis → 25% → analysis → 100%<br>
• Analysis: Prometheus metric query (error rate, latency)<br>
• Auto-rollback: metric threshold ভাঙলে automatic revert<br>
• Blue-green: parallel environment → instant switch<br><br>
<strong>তোমার জন্য:</strong> Docker Compose-ে Argo Rollouts নেই। কিন্তু concept apply করো — GitHub Actions-এ health check step দাও, manual approval gate দাও prod-এর আগে।
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> K8s default rolling update তোমাকে নিরাপদ মনে হয় — কিন্তু silent bugs ধরে না। Argo Rollouts metric watch করে, auto-rollback করে। LedgerPilot-এ blue-green, Ipractus-এ canary। এটাই production safety।<br>
<em>K8s default rolling update feels safe — but misses silent bugs. Argo Rollouts watches metrics, auto-rolls back. LedgerPilot: blue-green. Ipractus: canary. This is production safety.</em>
</div>`,
  senior: {
    title: "Deployment Strategy প্র্যাকটিস গাইড",
    body: `<p><strong>১. Always health check:</strong> Post-deploy verification = K8s reconciliation-এর ছোট সংস্করণ। Fail হলে CI fail করো।</p>
<p><strong>২. Manual approval for prod:</strong> GitHub Actions environment protection — prod-এর আগে একজন approve করবে।</p>
<p><strong>৩. Rollback plan:</strong> সব deploy-এর আগে rollback plan থাকবে — পুরোনো image tag রেখে দাও।</p>
<p><strong>৪. Feature flags:</strong> Code deploy আর feature enable আলাদা করো — feature flag দিয়ে নিয়ন্ত্রণ করো।</p>`
  }
});

// ═══════════════════════════════════════════
// DOOR 10 — The Architect's Throne (Full-Stack DevOps & Future)
// ═══════════════════════════════════════════
doors.push({
  num: 10,
  icon: "🏰",
  color: "#7c3aed",
  name: "স্থপতির সিংহাসন",
  subtitle: "Full-Stack DevOps — Cloud Providers, GitOps, Future",
  tech: "Cattle vs Pets, Cloud Provider Selection, GitOps, K8s Readiness, Platform Engineering",
  spirit: "আমানত — দায়িত্ব, যা সবকিছু সুরক্ষিত রাখে",
  secret: "DevOps এর একটাই নীতি — automation। Manual যা করো, সেটা ভুল হবে। Automated যা করো, সেটা repeatable। Code করো, automate করো, measure করো।",
  recall: {
    q: "'Cattle vs Pets' paradigm কী এবং এটা DevOps এ কেন গুরুত্বপূর্ণ?",
    qen: "What is the 'cattle vs pets' paradigm and why does it matter in DevOps?",
    a: "Pets = প্রতিটা server-এর নাম, manually configure, নষ্ট হলে কাঁদো। Cattle = numbered, automated, interchangeable — নষ্ট হলে replace করো। DevOps = cattle model — immutable infrastructure, auto-replace, no manual fix।",
    aen: "Pets = each server has a name, manually configured, you cry when it breaks. Cattle = numbered, automated, interchangeable — if broken, replace it. DevOps = cattle model — immutable infrastructure, auto-replace, no manual fix."
  },
  story: `<p class="scene-setting">শেষ ঘর। একটা কাচের জানালা — পুরো দুর্গ দৃশ্যমান। তুমি দেখতে পাও — container (Door 1) → control plane (Door 2) → worker nodes (Door 3) → Terraform state (Door 4) → observability (Door 5) → error budgets (Door 6) → CI/CD (Door 7) → service mesh (Door 8) → deployment strategies (Door 9)। সব একসাথে। এটাই architect-এর দৃষ্টি — পুরো stack এক নজরে।</p>
<p class="scene-setting en">The final room. A glass window — the entire fortress visible. You see containers (Door 1) → control plane (Door 2) → worker nodes (Door 3) → Terraform state (Door 4) → observability (Door 5) → error budgets (Door 6) → CI/CD (Door 7) → service mesh (Door 8) → deployment strategies (Door 9). All together. This is the architect's vision — the full stack at a glance.</p>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — CI/CD Pipeline Broke Silently:</strong> Test failed but pipeline continued. Fix: fail-fast pipeline.</div></div>


<div class="code-block">
<strong>Cloud Provider Comparison (2026):</strong>

<table style="width:100%;border-collapse:collapse;margin-top:.5rem">
<tr style="border-bottom:2px solid var(--accent)">
<th style="text-align:left;padding:.3rem">Provider</th>
<th style="text-align:left;padding:.3rem">K8s</th>
<th style="text-align:left;padding:.3rem">সুবিধা</th>
<th style="text-align:left;padding:.3rem">খরচ</th>
</tr>
<tr><td style="padding:.2rem"><strong>AWS</strong></td><td>EKS</td><td>Largest ecosystem</td><td>$$$</td></tr>
<tr><td style="padding:.2rem"><strong>GCP</strong></td><td>GKE</td><td>Best DX, Autopilot</td><td>$$</td></tr>
<tr><td style="padding:.2rem"><strong>Azure</strong></td><td>AKS</td><td>Microsoft shop</td><td>$$</td></tr>
<tr><td style="padding:.2rem"><strong>DO</strong></td><td>DOKS</td><td>সহজ, সস্তা</td><td>$</td></tr>
</table>

<br><strong>Docker Compose → K8s Migration Decision:</strong>
<pre style="background:var(--bg);padding:.5rem;border-radius:.3rem">
এখন Docker Compose-এ আছ? থাকো।
মাইগ্রেট করবে যখন:
  ✅ 10+ services একসাথে চলছে
  ✅ Multi-node clustering দরকার
  ✅ Auto-scaling দরকার
  ✅ Service mesh দরকার

যখন মাইগ্রেট করবে:
  → k3s (lightweight K8s, single binary) দিয়ে শুরু
  → Docker Compose YAML → K8s manifests (kompose convert)
  → DO DOKS (managed K8s) — DO-এর built-in
</pre>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🌐 Cloud DevOps: 9 Doors of Modern Infrastructure</text>
  <rect x="180" y="50" width="220" height="35" rx="17" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">D1-2: Cloud + Terraform (IaC)</text>
  <rect x="140" y="95" width="300" height="35" rx="17" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="117" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">D3-5: Docker + K8s + Networking</text>
  <rect x="100" y="140" width="380" height="35" rx="17" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="162" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">D6-8: Helm + CI/CD + Monitoring</text>
  <rect x="60" y="185" width="460" height="35" rx="17" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="290" y="207" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">D9: Service Mesh (Istio/Linkerd)</text>
  <rect x="120" y="235" width="340" height="35" rx="17" fill="#052e16" stroke="#4ade80" stroke-width="2.5"/>
  <text x="290" y="257" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">HIKMAH: Ship Safely</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Cloud DevOps-এর যাত্রা — IaC থেকে Service Mesh পর্যন্ত।</div>

<div class="dialogue"><strong>তুমি:</strong> এখন কী করব এই জ্ঞান দিয়ে?</div>
<div class="dialogue en"><strong>You:</strong> What do I do with this knowledge?</div>

<div class="dialogue"><strong>আর্কিটেক্ট:</strong> তিনটা ধাপ। প্রথম — <strong>container hardening</strong>। তোমার Docker Compose-এ read_only, cap_drop, non-root user যোগ করো। দ্বিতীয় — <strong>observability</strong>। Prometheus + Grafana setup করো, Django metrics capture করো। তৃতীয় — <strong>IaC</strong>। Terraform দিয়ে DO resources manage করো, state remote-এ রাখো। এই তিনটা ধাপ তোমাকে tactical থেকে strategic DevOps engineer-এ পরিণত করবে।</div>
<div class="dialogue en"><strong>Architect:</strong> Three steps. First — <strong>container hardening</strong>. Add read_only, cap_drop, non-root user to your Docker Compose. Second — <strong>observability</strong>. Set up Prometheus + Grafana, capture Django metrics. Third — <strong>IaC</strong>. Manage DO resources with Terraform, state in remote backend. These three steps transform you from tactical to strategic DevOps engineer.</div>

<div class="verse">
<strong>তোমার Knowledge Courtyard-এ এই বইয়ের স্থান:</strong><br>
এই বই ১৪টি existing বইকে গভীর করে:<br>
🟢 B38 (OS) — namespaces/cgroups = OS concepts in containers<br>
🟢 B35 (Distributed) — etcd = Raft consensus, reconciliation = eventual consistency<br>
🟢 B37 (Networks) — container networking = OSI model visible<br>
🟢 B42 (Architecture) — eBPF = kernel programming<br>
🟢 B40 (SWE) — CI/CD, GitOps = delivery evolution<br>
🟢 B14 (LLMOps) — K8s for ML workloads<br>
🟢 B4 (System Design) — LB → service mesh<br>
🟢 B39 (Databases) — etcd = KV store, Terraform state = database<br>
🟢 B17 (Inference) — GPU on K8s<br>
🟢 B13 (Security) — container security<br>
🟢 B34 (Statistics) — SRE error budgets = reliability statistics<br>
🟢 B2 (DSA) — eBPF hash maps = O(1)<br>
🟢 B9 (Context) — observability = visibility<br>
🟢 B20 (PhD) — cloud-native research<br><br>
<strong>৪৩টি বইয়ের জ্ঞানের উপর DevOps-এর গভীর বোঝা যুক্ত হলো। তোমার দুর্গ এখন আকাশে।</strong>
</div>

<div class="secret-box">
<strong>🔑 গোপন সত্য:</strong> DevOps এর একটাই নীতি — automate everything। Manual যা করো, ভুল হবে। Code লেখো, test করো, deploy করো, measure করো — সব automated। Container, K8s, Terraform, CI/CD, observability — এগুলো শুধু tool নয়, এগুলো automation-এর ভাষা। তুমি এখন সেই ভাষায় কথা বলতে পারো।<br>
<em>DevOps has one principle — automate everything. Manual = mistakes. Code it, test it, deploy it, measure it — all automated. Container, K8s, Terraform, CI/CD, observability — not just tools, but the language of automation. You now speak that language.</em>
<hr>
<div style="text-align:center;font-size:.82rem">
<strong>وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ</strong><br>
"তাদের বিরুদ্ধে তোমাদের সাধ্যমতো শক্তি প্রস্তুত রাখো।" — কুরআন ৮:৬০
</div>
</div>`,
  senior: {
    title: "Full-Stack DevOps গাইড",
    body: `<p><strong>১. Next 3 actions:</strong> Container hardening → Prometheus setup → Terraform remote state।</p>
<p><strong>২. Stay on Docker Compose:</strong> যতক্ষণ না 10+ services বা multi-node দরকার। তখন k3s → DOKS।</p>
<p><strong>৩. SLO-driven:</strong> tool-এর আগে SLO define করো। LedgerPilot 99.9%, Ipractus 99.5%।</p>
<p><strong>৪. Continuous learning:</strong> "The Phoenix Project" (novel), Google SRE Book, "Accelerate" — পড়ো।</p>`
  }
});
