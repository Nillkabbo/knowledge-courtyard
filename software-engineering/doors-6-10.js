doors.push({
  num: 6,
  icon: "🏗️",
  color: "#f97316",
  name: "স্থপতি",
  subtitle: "The Architect",
  tech: "Architecture Patterns — Clean Architecture (Martin 2017), Hexagonal (Cockburn 2005), Microservices (Newman 2015), Serverless, Event-Driven",
  spirit: "তাবাকা — স্তরে স্তরে গঠন, প্রতিটি স্তর আলাদা দায়িত্ব",
  secret: "Architecture = বড় ছবি। কোথায় কোন component বসবে, কে কার সাথে কথা বলবে, কীভাবে স্কেল করবে। Clean code একটি function — architecture পুরো সিস্টেম।",
  recall: {
    q: " Clean Architecture-এ dependency কোন দিকে যায়?",
    qen: "Which direction do dependencies flow in Clean Architecture?",
    a: "ভেতরের দিকে। Outer layer (DB, framework) inner layer (business logic)-এর উপর নির্ভর করে। Inner কখনো outer-কে জানে না।",
    aen: "Inward. Outer layers (DB, framework) depend on inner layers (business logic). Inner never knows about outer."
  },
  story: `<p class="scene-setting">তুমি একটি শহর ডিজাইন করছো। কোথায় বাজার, কোথায় হাসপাতাল, কোথায় স্কুল, কোথায় আবাসিক এলাকা। কোন রাস্তা কোথায় যাবে। কোথায় পার্ক, কোথায় ফায়ার স্টেশন। এটাই architecture — বড় ছবি। ভালো শহরে সবকিছু সংগঠিত, সংযুক্ত, সম্প্রসারণযোগ্য। খারাপ শহরে বিশৃঙ্খলা। সফটওয়্যারও তেমন।</p>
<p class="scene-setting en">You're designing a city. Where's the market, hospital, school, residential area. Which road goes where. Where's the park, fire station. This is architecture — the big picture. A good city is organized, connected, expandable. A bad city is chaos. Software is the same.</p>

<div class="callout info"><span class="co-icon">🏗️</span><div><strong>Architecture Patterns:</strong><br>
<strong>Layered (n-tier):</strong> Presentation → Business → Data। সবচেয়ে সাধারণ। সহজ কিন্তু layer-গুলো মিশে যেতে পারে।<br>
<strong>Clean Architecture (Martin ২০১৭):</strong> Entity → Use Case → Interface Adapter → Framework। dependency সবসময় ভেতরের দিকে। business logic framework-কে জানে না। testable।<br>
<strong>Hexagonal / Ports & Adapters (Cockburn ২০০৫):</strong> কোর logic মাঝখানে, বাইরের সবকিছু (DB, UI, API) adapter-এর মাধ্যমে। যেকোনো adapter বদলানো যায়।<br>
<strong>Microservices (Newman ২০১৫):</strong> একটি বড় অ্যাপ ছোট ছোট service-এ। প্রতিটি স্বাধীন deploy, scale, technology। কিন্তু complexity — distributed system, network latency, consistency।<br>
<strong>Serverless:</strong> কোনো server manage করো না। AWS Lambda, Cloudflare Workers। pay-per-execution। auto-scale। কিন্তু cold start, vendor lock-in।<br>
<strong>Event-Driven:</strong> component-গুলো event-এর মাধ্যমে যোগাযোগ করে। Kafka, RabbitMQ। loose coupling। কিন্তু debugging কঠিন, eventual consistency।</div></div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>Clean Architecture — Dependency Rule:</strong><br>
<center>বাইরে থেকে ভেতরে: Framework → Adapter → Use Case → Entity</center><br>
<strong>Entity:</strong> ব্যবসায়িক নিয়ম — সবচেয়ে ভেতরে। কোনো framework জানে না।<br>
<strong>Use Case:</strong> অ্যাপ্লিকেশন লজিক — "user registers", "order placed"।<br>
<strong>Interface Adapter:</strong> controller, presenter, gateway — বাইরের জগতের অনুবাদক।<br>
<strong>Framework:</strong> DB, web framework, external API — সবচেয়ে বাইরে। বদলানো যায়।<br><br>
<strong>নিয়ম:</strong> dependency সবসময় ভেতরের দিকে। Entity কখনো DB-কে জানে না। DB Entity-কে জানে।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Microservices Tradeoff:</strong> এটি silver bullet নয়!<br>
<strong>সুবিধা:</strong> independent deploy, scale per service, technology diversity, team autonomy।<br>
<strong>অসুবিধা:</strong> network latency, distributed transactions, debugging across services, operational complexity, data consistency।<br>
<strong>নিয়ম:</strong> একটি monolith দিয়ে শুরু করো। যখন দরকার — তখন ভাগ করো। "Start monolith, extract microservices when the boundaries are clear।"</div></div>

<div class="callout info"><span class="co-icon">🧩</span><div><strong>Domain-Driven Design (Evans ২০০৩):</strong> Eric Evans — software architecture ও business domain-এর মধ্যে সেতু।<br>
<strong>Bounded Context:</strong> প্রতিটি service-এর নিজস্ব model। "User" auth service-এ একটা জিনিস, billing-এ আরেকটা।<br>
<strong>Aggregate:</strong> একত্রিত entity যা একসাথে consistent থাকে।<br>
<strong>Ubiquitous Language:</strong> ডেভেলপার ও domain expert একই ভাষায় কথা বলে।</div></div>

<div class="verse">وَاللَّهُ جَعَلَ لَكُم مِّن بُيُوتِكُمْ سَكَنًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং আল্লাহ তোমাদের ঘরকে তোমাদের জন্য বিশ্রামস্থল করেছেন।" — কুরআন ১৬:৮০</div>

<p class="scene-setting">এই আয়াত বলে — আল্লাহ ঘরকে বিশ্রামস্থল করেছেন। একটি ভালো architecture-ও তেমন — এটি সিস্টেমকে স্থিতিশীল, সম্প্রসারণযোগ্য, ও বিশ্রামযোগ্য করে। খারাপ architecture-এ প্রতিটি change একটি যুদ্ধ। ভালো architecture-এ প্রতিটি change একটি সহজ পদক্ষেপ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (System Design):</strong> সম্পূর্ণ system architecture — microservices, load balancer, CDN। সেই বই large-scale, এই দরজা code-level। Book ৩৫ (Distributed): consensus, CAP — microservices-এর ভিত্তি। LedgerPilot: Django monolith → modular। Ipractus: React + Django — client-server architecture।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🏗️ Clean Architecture: Dependency Points Inward</text>
  <rect x="190" y="50" width="200" height="40" rx="20" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="290" y="75" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">Framework: Django, Vue, Express</text>
  <rect x="170" y="100" width="240" height="40" rx="20" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="125" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">Interface: Controllers, Views, API</text>
  <rect x="150" y="150" width="280" height="40" rx="20" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="175" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Use Cases: Business Logic</text>
  <rect x="130" y="200" width="320" height="40" rx="20" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="225" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">Entities: Domain Models (core business)</text>
  <text x="290" y="265" text-anchor="middle" fill="#94a3b8" font-size="8">Dependencies point INWARD → core knows nothing about outer layers</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Clean Architecture (Martin 2017) — dependency সবসময় ভেতরে। Framework বদলালেও core অপরিবর্তিত।</div>

<div class="code-block">— Django Clean Architecture —

  # Layer 1: Entity (core business)
  class Account:
      def transfer(self, target, amount):
          if amount > self.balance:
              raise InsufficientFunds()
          self.balance -= amount
          target.balance += amount

  # Layer 2: Use Case (application)
  class TransferUseCase:
      def execute(self, from_id, to_id, amount):
          source = self.repo.get(from_id)
          target = self.repo.get(to_id)
          source.transfer(target, amount)
          self.repo.save(source)
          self.repo.save(target)

  # Layer 3: Interface (Django View)
  class TransferView(APIView):
      def post(self, request):
          use_case = TransferUseCase(repo=DjangoAccountRepo())
          use_case.execute(request.data['from'],
                           request.data['to'],
                           request.data['amount'])
          return Response({"status": "ok"})

  # Layer 4: Framework (settings.py)
  # Django, DRF, database — swap without touching core</div>

<div class="secret-box">🏗️ <strong>Architecture = বড় ছবি।</strong> Layered, Clean, Hexagonal, Microservices, Serverless, Event-Driven। Clean Architecture: dependency ভেতরে। DDD: business domain ও code এক। Microservices শক্তিশালী কিন্তু জটিল — monolith দিয়ে শুরু করো। কিন্তু architecture থাকলেও — কীভাবে প্রতিদিন deploy করবে? সেই স্বয়ংক্রিয়তা আসবে পরের দরজায় — DevOps।</div>`,
  senior: {
    title: "Architecture Patterns এক নজরে",
    body: `<table class="kv-table"><tr><th>Pattern</th><th>নীতি</th></tr>
<tr><td class="hl">Layered</td><td>Presentation → Business → Data</td></tr>
<tr><td class="hl">Clean (Martin)</td><td>dependency ভেতরে — Entity কোরে</td></tr>
<tr><td class="hl">Hexagonal</td><td>Ports & Adapters — core থেকে বাইরে</td></tr>
<tr><td class="hl">Microservices</td><td>ছোট independent service</td></tr>
<tr><td class="hl">Serverless</td><td>কোনো server manage নয় — Lambda</td></tr>
<tr><td class="hl">Event-Driven</td><td>event-এর মাধ্যমে যোগাযোগ</td></tr>
<tr><td class="hl">DDD (Evans)</td><td>Bounded Context, Ubiquitous Language</td></tr>
<tr><td class="hl">Rule</td><td>monolith দিয়ে শুরু, extract when ready</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "⚙️",
  color: "#f97316",
  name: "স্বয়ংক্রিয়কারী",
  subtitle: "The Automator",
  tech: "DevOps & CI/CD — Infrastructure as Code (Terraform), observability (Prometheus, Grafana), SRE (Google), DORA metrics",
  spirit: "সিলসিলা — স্বয়ংক্রিয় শৃঙ্খল, এক commit থেকে production পর্যন্ত",
  secret: "DevOps = manual কাজ বিলোপ। প্রতিটি পরিবর্তন স্বয়ংক্রিয়ভাবে test → build → deploy। মানুষ ভুল করে — machine নির্ভুল।",
  recall: {
    q: " DORA এর ৪টি key metrics কী?",
    qen: "What are the 4 DORA key metrics?",
    a: "Deployment Frequency, Lead Time for Changes, Mean Time to Recovery (MTTR), Change Failure Rate। এগুলো DevOps maturity মাপে।",
    aen: "Deployment Frequency, Lead Time for Changes, MTTR, Change Failure Rate. These measure DevOps maturity."
  },
  story: `<p class="scene-setting">একজন রাঁধুনি প্রতিদিন একই কাজ করেন — চুলা জ্বালানো, পাত্র সাজানো, উপকরণ মাপা। একদিন তিনি একটি machine বানালেন — সব স্বয়ংক্রিয়। চুলা নিজে জ্বলে, পাত্র নিজে সাজায়, উপকরণ নিজে মাপে। তিনি শুধু recipe দেন — machine বাকি করে। এটাই DevOps — প্রতিটি manual step স্বয়ংক্রিয় করা। ডেভেলপার শুধু code push করে — pipeline বাকি সামলায়।</p>
<p class="scene-setting en">A cook does the same tasks daily — light stove, arrange pots, measure ingredients. One day she builds a machine — all automated. Stove lights itself, pots arrange themselves, ingredients measure themselves. She just provides the recipe — the machine does the rest. This is DevOps — automating every manual step. Developer just pushes code — the pipeline handles the rest.</p>

<div class="callout info"><span class="co-icon">⚙️</span><div><strong>CI/CD Pipeline:</strong><br>
<strong>Continuous Integration (CI):</strong> প্রতিটি commit → automated build + test। ভাঙলে সাথে সাথে জানো। কোনো "it works on my machine" নয়।<br>
<strong>Continuous Delivery (CD):</strong> প্রতিটি successful build production-ready। একটি button click-এ deploy।<br>
<strong>Continuous Deployment:</strong> successful build সরাসরি production — কোনো human approval নেই। সর্বোচ্চ স্বয়ংক্রিয়তা।<br>
<strong>Tools:</strong> GitHub Actions, GitLab CI, Jenkins, CircleCI, ArgoCD।</div></div>

<div class="callout info"><span class="co-icon">📋</span><div><strong>Infrastructure as Code (IaC):</strong><br>
Manual server configuration? না। একটি code file — Terraform, Ansible, Pulumi। "এই server এই রকম হবে" — code-এ লেখা। version controlled, repeatable, auditable। নতুন environment? একই code, ভিন্ন parameters।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Observability — Three Pillars:</strong><br>
<strong>Metrics:</strong> CPU, memory, request rate, error rate। Prometheus + Grafana। numbers যা alert করে।<br>
<strong>Logs:</strong> structured event records। ELK (Elasticsearch, Logstash, Kibana)। "কী ঘটেছিল?"<br>
<strong>Traces:</strong> একটি request-এর সম্পূর্ণ যাত্রা — service থেকে service। Jaeger, OpenTelemetry। "কোথায় ধীর?"<br>
<strong>Golden Signals (Google SRE):</strong> Latency, Traffic, Errors, Saturation। এগুলো দেখো প্রথম।</div></div>

<div class="callout info"><span class="co-icon">🔥</span><div><strong>SRE (Site Reliability Engineering):</strong> Google ২০০৩ সালে শুরু করেছিল — Ben Treynor Sloss। "class of operations that uses software engineering to solve operational problems।" SRE = একজন ডেভেলপার যিনি operations করেন কোড দিয়ে।<br><br>
<strong>Error Budget:</strong> ৯৯.৯% uptime = ৪৩.২ মিনিট/মাস downtime অনুমোদিত। বেশি হলে — feature development বন্ধ, reliability focus। এটাই SRE-এর মূল — reliability ও velocity-র ভারসাম্য।</div></div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>DORA Metrics (Forsgren ২০১৮):</strong> DevOps maturity মাপার ৪টি মেট্রিক্স —<br>
<strong>Deployment Frequency:</strong> কত ঘন ঘন deploy? Elite = multiple per day।<br>
<strong>Lead Time for Changes:</strong> commit থেকে production কত সময়? Elite = <১ hour।<br>
<strong>MTTR (Mean Time to Recovery):</strong> failure থেকে recovery কত সময়? Elite = <১ hour।<br>
<strong>Change Failure Rate:</strong> deploy-এর কত % fail করে? Elite = ০-১৫%।</div></div>

<div class="verse">إِنَّ اللَّهَ يُحِبُّ الَّذِينَ تَابُوا وَيُحِبُّ الَّذِينَ يَتَطَهَّرُونَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই আল্লাহ তওবা করে ও পরিচ্ছন্নতা অবলম্বন করে এমনদের ভালোবাসেন।" — কুরআন ২:২২২</div>

<p class="scene-setting">এই আয়াত পরিচ্ছন্নতা ও তওবা পছন্দ করেন। DevOps-ও তেমন — পরিচ্ছন্ন (automated, repeatable), এবং তওবা (failure থেকে recovery, rollback)। একটি ভালো DevOps culture failure-কে ভয় পায় না — কারণ recovery দ্রুত ও নিরাপদ।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>LedgerPilot DevOps:</strong> Docker → DigitalOcean → GitHub Actions = CI/CD। DOCKER/GUNICORN memory: Docker bypasses UFW → iptables। Book ৩৮ (OS) Door ৯: Containers = DevOps-এর ভিত্তি। Book ৪: System design = architecture, এই দরজা = operations।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚙️ DevOps Pipeline: Code to Production</text>
  <rect x="10" y="60" width="80" height="50" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="50" y="80" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Code</text>
  <text x="50" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">git push</text>
  <rect x="100" y="60" width="80" height="50" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="140" y="80" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Build</text>
  <text x="140" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">docker build</text>
  <rect x="190" y="60" width="80" height="50" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="230" y="80" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">Test</text>
  <text x="230" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">pytest, ruff</text>
  <rect x="280" y="60" width="80" height="50" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="320" y="80" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">Scan</text>
  <text x="320" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">bandit, trivy</text>
  <rect x="370" y="60" width="80" height="50" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="410" y="80" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Deploy</text>
  <text x="410" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">docker push</text>
  <rect x="460" y="60" width="110" height="50" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="515" y="80" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">Monitor</text>
  <text x="515" y="95" text-anchor="middle" fill="#94a3b8" font-size="10">Grafana, Sentry</text>
  <line x1="90" y1="85" x2="100" y2="85" stroke="#475569" stroke-width="1.5"/>
  <line x1="180" y1="85" x2="190" y2="85" stroke="#475569" stroke-width="1.5"/>
  <line x1="270" y1="85" x2="280" y2="85" stroke="#475569" stroke-width="1.5"/>
  <line x1="360" y1="85" x2="370" y2="85" stroke="#475569" stroke-width="1.5"/>
  <line x1="450" y1="85" x2="460" y2="85" stroke="#475569" stroke-width="1.5"/>
  <rect x="100" y="140" width="380" height="80" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
  <text x="290" y="165" text-anchor="middle" fill="#e2e8f0" font-size="9" font-weight="600">DORA Metrics</text>
  <text x="170" y="185" text-anchor="middle" fill="#4ade80" font-size="10">Deploy Freq: daily</text>
  <text x="290" y="185" text-anchor="middle" fill="#fcd34d" font-size="10">Lead Time: &lt; 1hr</text>
  <text x="410" y="185" text-anchor="middle" fill="#fca5a5" font-size="10">MTTR: &lt; 1hr</text>
  <text x="290" y="205" text-anchor="middle" fill="#c084fc" font-size="10">Change Failure: &lt; 15%</text>
  <text x="290" y="240" text-anchor="middle" fill="#94a3b8" font-size="8">Terraform: Infrastructure as Code · Prometheus: Metrics · Grafana: Dashboards</text>
</svg>
</div>
<div class="svg-caption">চিত্র: DevOps pipeline — Code → Build → Test → Scan → Deploy → Monitor। DORA metrics মাপে।</div>

<div class="code-block">— Terraform + Docker Compose: Infrastructure as Code —

  # Terraform — server as code:
  # main.tf
  resource "digitalocean_droplet" "api" {
    name   = "ledgerpilot-api"
    region = "nyc1"
    size   = "s-2vcpu-4gb"
    image  = "docker-20-04"
  }

  # Docker Compose:
  # docker-compose.yml
  services:
    api:
      build: .
      ports: ["8000:8000"]
      environment:
        - DATABASE_URL=postgres://...
        - REDIS_URL=redis://...
      depends_on: [db, redis]

    db:
      image: postgres:16
      volumes: ["pgdata:/var/lib/postgresql/data"]

    redis:
      image: redis:7-alpine

  # Deploy:
  $ terraform apply    # server create
  $ docker compose up -d  # app deploy

  # Monitoring:
  $ docker compose logs -f api
  # Sentry (errors), Grafana (metrics)</div>

<div class="secret-box">⚙️ <strong>DevOps = স্বয়ংক্রিয়তার শৃঙ্খল।</strong> CI (build+test), CD (deploy), IaC (server as code), observability (metrics/logs/traces), SRE (reliability engineering)। DORA metrics মাপে maturity। কিন্তু স্বয়ংক্রিয়তা থাকলেও — নিরাপত্তা কে দেবে? সেই যাত্রা আসবে পরের দরজায়।</div>`,
  senior: {
    title: "DevOps & CI/CD এক নজরে",
    body: `<table class="kv-table"><tr><th>Concept</th><th>বিবরণ</th></tr>
<tr><td class="hl">CI</td><td>auto build + test per commit</td></tr>
<tr><td class="hl">CD</td><td>auto deploy to production</td></tr>
<tr><td class="hl">IaC</td><td>Terraform, Ansible — server as code</td></tr>
<tr><td class="hl">Metrics</td><td>Prometheus + Grafana</td></tr>
<tr><td class="hl">Logs</td><td>ELK — structured event records</td></tr>
<tr><td class="hl">Traces</td><td>Jaeger — request journey</td></tr>
<tr><td class="hl">SRE</td><td>Google — error budget, reliability</td></tr>
<tr><td class="hl">DORA</td><td>Frequency, Lead Time, MTTR, Failure Rate</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "🛡️",
  color: "#f97316",
  name: "নিরাপত্তা কারিগর",
  subtitle: "The Security Craftsman",
  tech: "Software Security — OWASP Top 10, secure coding, supply chain security, chaos engineering, DevSecOps",
  spirit: "হিফযুল আমান — আমানত রক্ষা, ব্যবহারকারীর ডেটা ও সিস্টেমের সুরক্ষা",
  secret: "Security = প্রতিটি স্তরে প্রতিরোধ। input validation, authentication, authorization, encryption, logging — সব স্তরে।",
  recall: {
    q: " OWASP Top 10 কী?",
    qen: "What is the OWASP Top 10?",
    a: "সবচেয়ে সাধারণ ১০টি web security risk — injection, broken auth, XSS, CSRF, ইত্যাদি।",
    aen: "The 10 most common web security risks — injection, broken auth, XSS, CSRF, etc."
  },
  story: `<p class="scene-setting">তুমি একটি দুর্গ বানাচ্ছো। দেয়াল, পরিখা, পাহারা, গেট। কিন্তু একটি ছোট ফাটল রইলো দেয়ালে। সেই ফাটল দিয়ে একজন চোর ঢুকলো। পুরো দুর্গ অর্থহীন। Security-ও তেমন — একটি ছোট ভুল (SQL injection, XSS) পুরো সিস্টেম ধ্বংস করতে পারে।</p>
<p class="scene-setting en">You're building a fortress. Walls, moat, guards, gate. But one small crack remains in the wall. Through that crack, a thief enters. The entire fortress is meaningless. Security is the same — one small mistake (SQL injection, XSS) can destroy the entire system.</p>

<div class="callout info"><span class="co-icon">🛡️</span><div><strong>OWASP Top 10 (2021):</strong><br>
<strong>১. Broken Access Control:</strong> user A user B-র ডেটা দেখছে — authorization check missing<br>
<strong>২. Cryptographic Failures:</strong> weak encryption, plaintext passwords, outdated algorithms<br>
<strong>৩. Injection:</strong> SQL injection, command injection — untrusted input<br>
<strong>৪. Insecure Design:</strong> architecture-level flaw — no threat modeling<br>
<strong>৫. Security Misconfiguration:</strong> default passwords, open ports, verbose errors<br>
<strong>৬. Vulnerable Components:</strong> outdated dependencies with known CVEs<br>
<strong>৭. Auth Failures:</strong> weak password policy, no MFA, session fixation<br>
<strong>৮. Software & Data Integrity:</strong> unsigned updates, untrusted CI/CD pipeline<br>
<strong>৯. Logging Failures:</strong> no audit trail — breach undetected<br>
<strong>১০. SSRF:</strong> server making requests to untrusted URLs</div></div>

<div class="callout info"><span class="co-icon">🔒</span><div><strong>Secure Coding Practices:</strong><br>
<strong>Input Validation:</strong> সব input untrusted। validate, sanitize, parameterize।<br>
<strong>Principle of Least Privilege:</strong> প্রতিটি component-এর ন্যূনতম অনুমতি।<br>
<strong>Defense in Depth:</strong> একটি স্তর ভাঙলে পরের স্তর রক্ষা করে।<br>
<strong>Fail Securely:</strong> error হলে safe state-এ যাও — verbose error দিও না।<br>
<strong>Security by Design:</strong> শেষে security যোগ করো না। শুরু থেকে ভাবো।</div></div>

<div class="callout info"><span class="co-icon">⛓️</span><div><strong>Supply Chain Security:</strong><br>
npm/pip package-এ malicious code? SolarWinds (২০২০), Log4j (২০২১) — এই আক্রমণগুলো dependency-এর মাধ্যমে এসেছিল।<br>
<strong>SBOM (Software Bill of Materials):</strong> তোমার অ্যাপের প্রতিটি dependency-এর তালিকা।<br>
<strong>Dependabot/Renovate:</strong> automated dependency update + vulnerability alert।<br>
<strong>Signed Artifacts:</strong> container image বা binary signature verify করো।</div></div>

<div class="callout info"><span class="co-icon">🌀</span><div><strong>Chaos Engineering (Netflix ২০১১):</strong><br>
স্বেচ্ছায় failure ঘটাও — সিস্টেম কীভাবে সামলায় দেখো। Netflix-এর Chaos Monkey — production server random kill করে। উদ্দেশ্য: "ব্যর্থতা একটি অবস্থা, একটি ঘটনা নয়।" প্রতিটি failure scenario test করো আগেই — production-এ অবাক হয়ো না।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>DevSecOps:</strong> Security শুধু security team-এর কাজ নয়। প্রতিটি developer-এর কাজ। CI/CD pipeline-এ security check built-in — SAST (static analysis), DAST (dynamic analysis), dependency scan, container scan। "shift left" — security শেষে নয়, শুরুতে।</div></div>

<div class="verse">وَخُذُوا حِذْرَكُمْ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তোমরা তোমাদের সতর্কতা গ্রহণ করো।" — কুরআন ৪:৭১</div>

<p class="scene-setting">এই আয়াত সতর্কতার নির্দেশ দেয়। Software security-ও তেমন — সতর্ক থাকো, প্রতিটি input validate করো, প্রতিটি dependency check করো, প্রতিটি failure scenario test করো। নিরাপত্তা একটি অবস্থা নয় — এটি একটি নিরবচ্ছিন্ন প্রক্রিয়া।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ১৩ (LLM Security):</strong> Prompt injection, jailbreak — AI-specific security। Book ৩৭ (Networks) Door ৯: TLS, firewall, VPN — network security। LedgerPilot: Django middleware, CORS, CSRF token, HTTPS।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🛡️ OWASP Top 10: Most Critical Web Vulnerabilities</text>
  <rect x="20" y="50" width="120" height="35" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="80" y="72" text-anchor="middle" fill="#fca5a5" font-size="10">1. Broken Access</text>
  <rect x="150" y="50" width="120" height="35" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="210" y="72" text-anchor="middle" fill="#fca5a5" font-size="10">2. Crypto Failures</text>
  <rect x="280" y="50" width="120" height="35" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="340" y="72" text-anchor="middle" fill="#fca5a5" font-size="10">3. Injection</text>
  <rect x="410" y="50" width="150" height="35" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="485" y="72" text-anchor="middle" fill="#fca5a5" font-size="10">4. Insecure Design</text>
  <rect x="20" y="95" width="120" height="35" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="80" y="117" text-anchor="middle" fill="#fcd34d" font-size="10">5. Security Misconf</text>
  <rect x="150" y="95" width="120" height="35" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="210" y="117" text-anchor="middle" fill="#fcd34d" font-size="10">6. Vulnerable Deps</text>
  <rect x="280" y="95" width="120" height="35" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="340" y="117" text-anchor="middle" fill="#fcd34d" font-size="10">7. Auth Failures</text>
  <rect x="410" y="95" width="150" height="35" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="485" y="117" text-anchor="middle" fill="#fcd34d" font-size="10">8. Software/Data Integrity</text>
  <rect x="20" y="140" width="120" height="35" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="80" y="162" text-anchor="middle" fill="#7dd3fc" font-size="10">9. Logging Failures</text>
  <rect x="150" y="140" width="120" height="35" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="210" y="162" text-anchor="middle" fill="#7dd3fc" font-size="10">10. SSRF</text>
  <rect x="100" y="195" width="380" height="35" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="290" y="217" text-anchor="middle" fill="#4ade80" font-size="8">Shift Left: Security from Day 1 · SAST + DAST + SCA</text>
</svg>
</div>
<div class="svg-caption">চিত্র: OWASP Top 10 (2021)। Shift Left — security শুরুতেই।</div>

<div class="code-block">— Security Tools বাস্তবে —

  # SAST (Static Analysis):
  $ bandit -r backend/
  $ semgrep --config=auto .

  # Dependency scanning (SCA):
  $ pip-audit
  # ID    Package  Version Fix
  # PYSEC-001 requests 2.28.0  2.31.0

  $ npm audit  # Node.js
  $ trivy image ledgerpilot:latest  # Docker image

  # Django security checklist:
  # ✅ DEBUG = False (production)
  # ✅ SECRET_KEY from env
  # ✅ ALLOWED_HOSTS set
  # ✅ CSRF_TRUSTED_ORIGINS
  # ✅ SECURE_SSL_REDIRECT = True
  # ✅ SECURE_HSTS_SECONDS = 31536000
  # ✅ SESSION_COOKIE_SECURE = True
  # ✅ CORS_ALLOWED_ORIGINS whitelist

  # Password policy:
  AUTH_PASSWORD_VALIDATORS = [{
      'NAME': 'django.contrib.auth.'
              'password_validation.MinimumLengthValidator',
      'OPTIONS': {'min_length': 12},
  }]</div>

<div class="secret-box">🛡️ <strong>Security = প্রতিটি স্তরে সতর্কতা।</strong> OWASP Top 10, secure coding, supply chain, chaos engineering, DevSecOps। Shift left — security শুরুতে। কিন্তু এত প্রক্রিয়া, এত নিয়ম, এত টুল — কীভাবে মানুষ এটা সামলাবে? উত্তর: AI সাহায্য করবে। সেই যাত্রা আসবে পরের দরজায় — AI-assisted development।</div>`,
  senior: {
    title: "Software Security এক নজরে",
    body: `<table class="kv-table"><tr><th>Concept</th><th>বিবরণ</th></tr>
<tr><td class="hl">OWASP Top 10</td><td>সবচেয়ে সাধারণ ১০টি web security risk</td></tr>
<tr><td class="hl">Input Validation</td><td>সব input untrusted — validate, sanitize</td></tr>
<tr><td class="hl">Least Privilege</td><td>ন্যূনতম অনুমতি per component</td></tr>
<tr><td class="hl">Defense in Depth</td><td>একাধিক স্তরে প্রতিরোধ</td></tr>
<tr><td class="hl">Supply Chain</td><td>SBOM, signed artifacts, Dependabot</td></tr>
<tr><td class="hl">Chaos Engineering</td><td>Netflix — deliberate failure injection</td></tr>
<tr><td class="hl">DevSecOps</td><td>security in CI/CD — shift left</td></tr>
<tr><td class="hl">SAST/DAST</td><td>static + dynamic security analysis</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "🤖",
  color: "#f97316",
  name: "ভবিষ্যতের কারিগর",
  subtitle: "The Future Craftsman",
  tech: "AI-Assisted Development & Future — Copilot, Claude Code, platform engineering, WASM, edge computing, AGI implications",
  spirit: "তালাশ — অনুসন্ধান, ভবিষ্যতের দিকে তাকানো",
  secret: "AI tool প্রতিস্থাপন করছে না — পরিবর্তন করছে। typing থেকে reviewing, লেখা থেকে চিন্তা, implementation থেকে architecture। নতুন skill: AI কে নির্দেশ দেওয়া।",
  recall: {
    q: " AI-assisted development-এ মানুষের ভূমিকা কী?",
    qen: "What is the human's role in AI-assisted development?",
    a: "মানুষ review করে, architecture ঠিক করে, requirement বোঝায়, AI output যাচাই করে। typing কম, চিন্তা বেশি।",
    aen: "Human reviews, decides architecture, explains requirements, verifies AI output. Less typing, more thinking."
  },
  story: `<p class="scene-setting">তুমি একজন architect। আগে তুমি নিজে দেয়াল তুলতে, ছাদ বসাতে, রং করতে। এখন তোমার একটি robot team আছে। তুমি বলো — "এই কক্ষে দুটি জানালা, দক্ষিণ দিকে, প্রতিটি ১.৫ মিটার।" Robot-গুলো বানায়। তুমি পরীক্ষা করো, ঠিক করো, approval দাও। তোমার কাজ বদলেছে — শারীরিক থেকে মানসিক। AI-assisted development-ও তেমন।</p>
<p class="scene-setting en">You're an architect. Previously you built walls, placed roofs, painted yourself. Now you have a robot team. You say — "This room, two windows, south side, each 1.5m." Robots build. You inspect, fix, approve. Your work has changed — from physical to mental. AI-assisted development is the same.</p>

<div class="callout info"><span class="co-icon">🤖</span><div><strong>AI Coding Tools (২০২১-বর্তমান):</strong><br>
<strong>GitHub Copilot (২০২১):</strong> inline code completion — line by line suggestion।<br>
<strong>ChatGPT/Claude (২০২২+):</strong> conversational — "এই function লেখো", "এই bug দেখো"।<br>
<strong>Claude Code / Codex CLI (২০২৪+):</strong> terminal-এ autonomous — multiple file edit, test, run।<br>
<strong>v0/Cursor (২০২৪+):</strong> AI-native IDE — context-aware, multi-file editing।<br>
<strong>Devin (২০২৪):</strong> "first AI software engineer" — end-to-end task completion।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>AI-এর সীমা — মানুষের দায়িত্ব:</strong><br>
AI ভুল করে (hallucinate)। outdated library suggest করে। security hole মিস করে।<br>
<strong>মানুষের কাজ:</strong><br>
১. <strong>Requirement:</strong> কী চাই তা স্পষ্ট করা (AI জানে না তোমার business)<br>
২. <strong>Architecture:</strong> কোথায় কোন component (AI local think করে, global নয়)<br>
৩. <strong>Review:</strong> AI code যাচাই করা — security, performance, correctness<br>
৪. <strong>Testing:</strong> AI test লিখলেও মানুষ verify করে edge case<br>
৫. <strong>Judgment:</strong> "should we?" প্রশ্ন — ethics, tradeoff, business value</div></div>

<div class="callout info"><span class="co-icon">🔮</span><div><strong>Emerging Trends:</strong><br>
<strong>Platform Engineering:</strong> Internal Developer Platform — self-service। golden path, paved road। Backstage (Spotify)। ডেভেলপার focus শুধু code, platform বাকি সামলায়।<br>
<strong>WebAssembly (WASM):</strong> browser-এ near-native speed। Python/Rust/C++ browser-এ চলে। Pyodide = Python in browser (DSA Bazaar এ ব্যবহৃত!)।<br>
<strong>Edge Computing:</strong> Cloudflare Workers, Vercel Edge। computation user-এর কাছে — latency কম।<br>
<strong>Low-Code/No-Code:</strong> Retool, Bubble। কোড ছাড়া অ্যাপ। সস্তা, দ্রুত, কিন্তু সীমিত।<br>
<strong>Quantum Computing:</strong> ভবিষ্যতে cryptography threat — Shor's algorithm। post-quantum crypto প্রস্তুতি।</div></div>

<div class="callout info"><span class="co-icon">🌐</span><div><strong>The Irreplaceable Human — যা AI পারে না:</strong><br>
১. <strong>Empathy:</strong> ব্যবহারকারীর সমস্যা অনুভব করা — ডেটা থেকে আসে না<br>
২. <strong>Creativity:</strong> নতুন সমস্যার নতুন সমাধান — ০ থেকে ১<br>
৩. <strong>Ethics:</strong> "should we build this?" — moral judgment<br>
৪. <strong>Domain Expertise:</strong> business context, user behavior, market dynamics<br>
৫. <strong>Leadership:</strong> টিম চালানো, conflict resolution, vision<br><br>
Book ২৩ (Irreplaceable Craftsman) — এটাই তোমার আগের বই! AI যুগে এই skill-গুলো আরও গুরুত্বপূর্ণ।</div></div>

<div class="verse">وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তিনি আদমকে শিখিয়েছিলেন সমস্ত নাম।" — কুরআন ২:৩১</div>

<p class="scene-setting">এই আয়াত বলে — আল্লাহ মানুষকে জ্ঞান দিয়েছেন, নাম শিখিয়েছেন। AI যন্ত্র — মানুষ সৃষ্টিকর্তা। যন্ত্র সাহায্য করে, কিন্তু চিন্তা, সৃজনশীলতা, নৈতিক বিচার — সেটা মানুষের। AI যুগে মানুষের ভূমিকা শেষ হচ্ছে না — বরং আরও গভীর হচ্ছে। implementation থেকে judgment, typing থেকে thinking।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২৩ (Irreplaceable Craftsman):</strong> পুরো বইটাই এই দরজার ভিত্তি — AI যুগে কীভাবে irreplaceable হবে। Book ১২ (AI Agents): AI autonomous task — development-এ এটাই। Hermes Agent = AI coding tool।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🤖 AI-Assisted Development: Typing Less, Thinking More</text>
  <rect x="20" y="50" width="160" height="150" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="100" y="72" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">Copilot (2021)</text>
  <text x="100" y="90" text-anchor="middle" fill="#7dd3fc" font-size="10">Inline completion</text>
  <text x="100" y="105" text-anchor="middle" fill="#7dd3fc" font-size="10">PR review</text>
  <text x="100" y="120" text-anchor="middle" fill="#7dd3fc" font-size="10">Chat in IDE</text>
  <text x="100" y="140" text-anchor="middle" fill="#94a3b8" font-size="10">30-50% faster</text>
  <rect x="200" y="50" width="160" height="150" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="280" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Claude Code</text>
  <text x="280" y="90" text-anchor="middle" fill="#86efac" font-size="10">Multi-file edits</text>
  <text x="280" y="105" text-anchor="middle" fill="#86efac" font-size="10">Terminal access</text>
  <text x="280" y="120" text-anchor="middle" fill="#86efac" font-size="10">Git operations</text>
  <text x="280" y="140" text-anchor="middle" fill="#94a3b8" font-size="10">Full agent loop</text>
  <rect x="380" y="50" width="180" height="150" rx="8" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="470" y="72" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">Future: Devin / AGI</text>
  <text x="470" y="90" text-anchor="middle" fill="#d8b4fe" font-size="10">Autonomous tasks</text>
  <text x="470" y="105" text-anchor="middle" fill="#d8b4fe" font-size="10">Self-debugging</text>
  <text x="470" y="120" text-anchor="middle" fill="#d8b4fe" font-size="10">Deployment?</text>
  <text x="470" y="140" text-anchor="middle" fill="#94a3b8" font-size="10">Human: empathy, ethics</text>
  <text x="290" y="220" text-anchor="middle" fill="#94a3b8" font-size="8">Pattern: AI writes code · Human reviews, architects, decides</text>
</svg>
</div>
<div class="svg-caption">চিত্র: AI development বিবর্তন — Copilot → Claude Code → autonomous agents।</div>

<div class="code-block">— AI-Assisted Dev Workflow —

  # Claude Code: multi-file refactor
  $ claude-code "add pagination to all list views"
  # → reads models.py, views.py, serializers.py
  # → edits all 3 files
  # → runs pytest
  # → commits

  # GitHub Copilot in IDE:
  # type: def calculate_tax(amount):
  # Copilot suggests: return amount * 0.07 (Michigan)

  # AI for testing:
  $ claude "generate pytest tests for views.py"
  # → reads views.py
  # → creates test_views.py with edge cases

  # AI for review:
  $ gh pr review --ai
  # → security check, style, logic

  # What AI CANNOT do:
  # ❌ Understand business requirements
  # ❌ Make product decisions
  # ❌ Empathize with users
  # ❌ Take responsibility</div>

<div class="secret-box">🤖 <strong>AI = নতুন টুল, নতুন ভূমিকা।</strong> Copilot, Claude Code, Devin — typing কম, চিন্তা বেশি। WASM, Edge, Platform Engineering — নতুন infrastructure। কিন্তু empathy, creativity, ethics — মানুষের। এখন তুমি সব স্তর জানো — process থেকে ভবিষ্যৎ। সময় এসেছে সব একত্রিত করার — একটি feature-এর সম্পূর্ণ যাত্রা।</div>`,
  senior: {
    title: "AI-Assisted Dev & Future এক নজরে",
    body: `<table class="kv-table"><tr><th>Tool/Trend</th><th>বিবরণ</th></tr>
<tr><td class="hl">Copilot</td><td>inline code completion</td></tr>
<tr><td class="hl">Claude Code/Codex</td><td>terminal autonomous editing</td></tr>
<tr><td class="hl">Human Role</td><td>requirement, architecture, review, judgment</td></tr>
<tr><td class="hl">Platform Eng</td><td>Internal Developer Platform, golden path</td></tr>
<tr><td class="hl">WASM</td><td>browser-এ near-native — Pyodide</td></tr>
<tr><td class="hl">Edge Computing</td><td>computation user-এর কাছে</td></tr>
<tr><td class="hl">Irreplaceable</td><td>empathy, creativity, ethics, leadership</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🔨",
  color: "#f97316",
  name: "কোড নির্মাতা",
  subtitle: "The Synthesis",
  tech: "One Feature's Complete Journey — idea to production: requirement, design, SOLID code, test, review, CI/CD, deploy, monitor",
  spirit: "তাওহিদ — একত্ব, সব স্তর এক পেশার অংশ",
  secret: "তুমি যখন একটি feature বানাও — নয়টি দরজা একসাথে কাজ করে। একটি feature-এর ভেতর পুরো software engineering।",
  recall: {
    q: " একটি feature তৈরির সঠিক ক্রম কী?",
    qen: "What is the correct order for building a feature?",
    a: "Requirement → Design → Code (SOLID) → Test (TDD) → Review (PR) → CI/CD → Deploy → Monitor → Iterate।",
    aen: "Requirement → Design → Code (SOLID) → Test (TDD) → Review (PR) → CI/CD → Deploy → Monitor → Iterate."
  },
  story: `<p class="scene-setting">তুমি LedgerPilot-এ একটি নতুন feature যোগ করছো — "expense category report।" তুমি একটি feature branch খুললে: git checkout -b feature/expense-report। একটি ফাইল খুললে। কোড লিখতে শুরু করলে। কিন্তু এই সহজ কাজের পেছনে নয়টি দরজা একসাথে কাজ করছে। চলো, একটি feature-এর সম্পূর্ণ যাত্রা দেখি।</p>
<p class="scene-setting en">You're adding a new feature to LedgerPilot — "expense category report." You open a feature branch: git checkout -b feature/expense-report. Open a file. Start coding. But behind this simple action, nine doors work simultaneously. Let's follow one feature's complete journey.</p>

<div class="callout info"><span class="co-icon">📝</span><div><strong>ধাপ ১ — Requirement (দরজা ১):</strong><br>
"ব্যবহারকারী দেখতে পাবে প্রতিটি category-তে কত খরচ হয়েছে।" কে চেয়েছে? কেন? কী edge case? এটি Agile (Phase 1) — user story।</div></div>

<div class="callout info"><span class="co-icon">🏗️</span><div><strong>ধাপ ২ — Design (দরজা ৬ + ৩):</strong><br>
কোন pattern? Repository pattern for DB access। Strategy pattern for report format (chart, table, CSV)। Clean Architecture — business logic আলাদা।</div></div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>ধাপ ৩ — Code (দরজা ২):</strong><br>
SOLID অনুসরণ। ReportService একটি কাজ করে (SRP)। category Repository inject করা (DIP)। নাম স্পষ্ট — calculateCategoryTotals।</div></div>

<div class="callout info"><span class="co-icon">🧪</span><div><strong>ধাপ ৪ — Test (দরজা ৪):</strong><br>
TDD — প্রথমে test লেখো। test_calculate_category_totals। Red → Green → Refactor। edge case: empty category, negative amount, date range।</div></div>

<div class="callout info"><span class="co-icon">🌳</span><div><strong>ধাপ ৫ — Review (দরজা ৫):</strong><br>
git push → Pull Request। reviewer দেখে — architecture ঠিক? SOLID মানা? test sufficient? naming clear? ৬০% কম bug (Fagan)।</div></div>

<div class="callout info"><span class="co-icon">⚙️</span><div><strong>ধাপ ৬ — CI/CD (দরজা ৭):</strong><br>
PR merge → GitHub Actions: lint → test → build Docker image → deploy to DigitalOcean। স্বয়ংক্রিয়, নির্ভুল। DORA metrics: deployment frequency, lead time।</div></div>

<div class="callout info"><span class="co-icon">🛡️</span><div><strong>ধাপ ৭ — Security (দরজা ৮):</strong><br>
SQL injection? Django ORM parameterized। authorization? user শুধু নিজের report দেখে। OWASP check। dependency scan in CI।</div></div>

<div class="callout info"><span class="co-icon">🤖</span><div><strong>ধাপ ৮ — AI-Assist (দরজা ৯):</strong><br>
Copilot boilerplate suggest করে। Claude bug খোঁজে। Devin test লেখে। কিন্তু তুমি review করো, architecture ঠিক করো, judgment দাও।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>ধাপ ৯ — Monitor (দরজা ৭):</strong><br>
Production-এ feature চলছে। Grafana — request rate, error rate, latency। user feedback। ভুল হলে? feature flag off → fix → redeploy। Iteration।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">SE স্তর</div></div>
<div class="stat-card"><div class="sc-num">৫৫</div><div class="sc-label">বছরের বিবর্তন (Waterfall→AI)</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">প্রতিটি feature-এ প্রয়োগ</div></div>
<div class="stat-card"><div class="sc-num">১</div><div class="sc-label">পেশা — engineering</div></div>
</div>

<div class="verse">وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং মানুষের জন্য তা ছাড়া আর কিছু নেই যা সে অর্জন করে।" — কুরআন ৫৩:৩৯</div>

<p class="scene-setting">এই আয়াত বলে — মানুষ যা চেষ্টা করে তাই পায়। Software engineering একটি চিরস্থায়ী চেষ্টা — প্রতিটি feature, প্রতিটি bug fix, প্রতিটি refactor। Royce-এর ১৯৭০ সালের Waterfall থেকে আজকের AI-assisted development — ৫৫ বছরের যাত্রা। প্রতিটি প্রজন্ম আগের কষ্ট থেকে শিখে নতুন সরঞ্জাম তৈরি করেছে। এবং তুমি এখন প্রতিটি ধাপ বোঝো — একটি feature-এর আইডিয়া থেকে production পর্যন্ত। এটাই কোড নির্মাতার শিল্প।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ১ (AI Engineering) — overview। Book ৩ (Engineer Journey) — mindset। Book ৪ (System Design) — architecture। Book ১৩ (LLM Security) — application security। Book ১৪ (LLMOps) — ML DevOps। Book ২৩ (Irreplaceable) — AI যুগে মানুষ। Book ৩৩ (Critical Thinking) — problem-solving। Book ৩৪ (Statistics) — DORA metrics, A/B testing। Book ৩৮ (OS) — containers, DevOps ভিত্তি। LedgerPilot + Ipractus — প্রতিদিন এই নীতিগুলো ব্যবহার করছো।</div></div>

<div class="checklist">
<li>📖 "Clean Code" (Robert C. Martin) — সেরা SE book</li>
<li>📖 "Design Patterns" (GoF 1994) — pattern bible</li>
<li>📖 "Accelerate" (Forsgren) — DORA metrics</li>
<li>📖 "Site Reliability Engineering" (Google) — free online</li>
<li>🔧 LedgerPilot: feature branch → PR → CI/CD প্র্যাকটিস করো</li>
<li>🤖 Claude Code / Copilot — try AI-assisted development</li>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔨 One Feature: Idea to Production (9 Doors)</text>
  <rect x="30" y="50" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="80" y="75" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Door 1: Idea</text>
  <rect x="145" y="50" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="195" y="75" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Door 2: Code</text>
  <rect x="260" y="50" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="310" y="75" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Door 3: Pattern</text>
  <rect x="375" y="50" width="100" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="425" y="75" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Door 4: Test</text>
  <rect x="470" y="50" width="90" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="515" y="75" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Door 5: PR</text>
  <rect x="80" y="115" width="100" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="130" y="140" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Door 6: Arch</text>
  <rect x="195" y="115" width="100" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="245" y="140" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Door 7: CI/CD</text>
  <rect x="310" y="115" width="100" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="360" y="140" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Door 8: Secure</text>
  <rect x="425" y="115" width="100" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="475" y="140" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Door 9: AI</text>
  <rect x="190" y="185" width="200" height="50" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="210" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">PRODUCTION</text>
  <text x="290" y="225" text-anchor="middle" fill="#86efac" font-size="10">LedgerPilot /api/v1/payments/</text>
  <text x="290" y="260" text-anchor="middle" fill="#94a3b8" font-size="10">9 doors - 55 years of engineering - 1 feature shipped</text>
</svg>
</div>
<div class="svg-caption">চিত্র: একটি feature নয়টি দরজা পার হয়ে production-এ যায়।</div>

<div class="code-block">— Complete Feature: Payment API Journey —

  # Door 1: Idea (sprint planning)
  # Door 2: Code (SRP - one service per concern)
  # Door 3: Pattern (Factory for payment providers)
  # Door 4: Test (pytest + mutation)
  # Door 5: Git (feature branch + PR)
  # Door 6: Architecture (views -> services -> models)
  # Door 7: CI/CD (GitHub Actions: test -> build -> deploy)
  # Door 8: Security (validation, rate limit, idempotency)
  # Door 9: AI (Claude Code wrote boilerplate)

  $ curl -X POST https://api.ledgerpilot.com/v1/payments/
  # {"id":"pay_123","status":"succeeded"} PRODUCTION!</div>

<div class="secret-box">🔨 <strong>কোড নির্মাতার শিল্প = নয়টি দরজার সমষ্টি।</strong> SDLC মেথডলজি (দরজা ১) → Clean Code (দরজা ২) → Design Patterns (দরজা ৩) → Testing (দরজা ৪) → Version Control (দরজা ৫) → Architecture (দরজা ৬) → DevOps (দরজা ৭) → Security (দরজা ৮) → AI-Assisted Future (দরজা ৯)। Waterfall (১৯৭০) থেকে AI-assisted (২০২৪+) — ৫৫ বছরের বিবর্তন। Royce, Beck, Martin, Gamma, Torvalds, Cockburn — একেকজন একেকটি স্তম্ভ। এবং তুমি এখন প্রতিটি স্তর বোঝো। LedgerPilot-ে প্রতিদিন একটি feature এই নয়টি দরজা পার হয় — idea থেকে production পর্যন্ত। এটাই কোড নির্মাতার শিল্প — একটি নিষ্প্রাণ আইডিয়াকে জীবন্ত প্রোডাক্টে রূপান্তর।</div>`,
  senior: {
    title: "One Feature's Complete Journey",
    body: `<table class="kv-table"><tr><th>ধাপ</th><th>কী ঘটে</th><th>দরজা</th></tr>
<tr><td class="hl">১. Requirement</td><td>user story, edge case</td><td>১ (SDLC)</td></tr>
<tr><td class="hl">২. Design</td><td>pattern, architecture</td><td>৩+৬</td></tr>
<tr><td class="hl">৩. Code</td><td>SOLID, clean code</td><td>২</td></tr>
<tr><td class="hl">৪. Test</td><td>TDD, unit/integration</td><td>৪</td></tr>
<tr><td class="hl">৫. Review</td><td>PR, code review</td><td>৫</td></tr>
<tr><td class="hl">৬. CI/CD</td><td>auto build+test+deploy</td><td>৭</td></tr>
<tr><td class="hl">৭. Security</td><td>OWASP, validation</td><td>৮</td></tr>
<tr><td class="hl">৮. AI-Assist</td><td>Copilot, Claude review</td><td>৯</td></tr>
<tr><td class="hl">৯. Monitor</td><td>metrics, logs, iterate</td><td>৭</td></tr></table>
<p style="margin-top:1rem"><strong>মোট স্তর:</strong> ৯টি | <strong>বছর:</strong> ১৯৭০-২০২৪ | <strong>পেশা:</strong> Software Engineer</p>`
  }
});
