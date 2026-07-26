// ═══════════════════════════════════════════
// DOOR 6 — The Dice Casino (Monte Carlo)
// ═══════════════════════════════════════════
doors.push({
  num: 6,
  icon: "🎲",
  color: "#f472b6",
  tagline: "পাশার ক্যাসিনো — Dice Casino",
  name: "The Dice Casino",
  secret: "Monte Carlo: simulate 10,000 scenarios → estimate VaR। Randomness কে কাজে লাগাও!",
  story: `<p class="scene-setting">Monte Carlo method — randomness কে কাজে লাগানো। কোনো deterministic solution যখন কঠিন, 10,000 বার random simulation করো। LedgerPilot: Value-at-Risk (VaR) — 10,000 portfolio scenario simulate করো, 5th percentile = 95% VaR। Randomized algorithm দুই ধরনের: Las Vegas (সবসময় সঠিক উত্তর, সময় random — যেমন randomized quicksort) আর Monte Carlo (নির্দিষ্ট সময়, উত্তর সম্ভবত সঠিক — যেমন π estimation)। Power of two choices: দুটো random server pick করে less loaded বেছে নাও → max load exponentially কমে!</p>

<div class="code-block">— Monte Carlo: π Estimation + Value-at-Risk (Python) —

  import numpy as np
  np.random.seed(11)

  — ১. π অনুমান: random points, বৃত্তের ভেতরে পড়ে কিনা —
  N = 100_000
  pts = np.random.random((N, 2))                       # unit square [0,1)²
  inside = np.sum(np.sum(pts**2, axis=1) <= 1.0)       # বৃত্তের ভেতর?
  pi_est = 4 * inside / N                              # area ratio = π/4
  print(f"π estimate: {pi_est:.4f}   (true: {np.pi:.4f})")  # → 3.1412

  — ২. Value-at-Risk: 10,000 portfolio scenario simulate করো —
  portfolio = 1_000_000                               # $1M portfolio
  shocks = np.random.normal(0, 0.02, 10_000)           # daily return σ=2%
  losses = -portfolio * shocks                        # loss in $
  var_95 = np.percentile(losses, 95)                  # 5th percentile loss
  es_95  = losses[losses >= var_95].mean()            # expected shortfall
  print(f"95% VaR (1-day):      ${var_95:,.0f}")      # → ~$32,897
  print(f"95% Expected Shortfall: ${es_95:,.0f}")     # → ~$41,500

  — ৩. Power of Two Choices: load balancing simulation —
  n = 10_000; loads_one = np.zeros(100); loads_two = np.zeros(100)
  for _ in range(n):
      s = np.random.randint(100)
      loads_one[s] += 1                               # এক random server
      a, b = np.random.randint(100, size=2)
      if loads_two[a] <= loads_two[b]: loads_two[a] += 1   # কম লোডেড
      else: loads_two[b] += 1
  print(f"max load (1 choice): {int(loads_one.max())}")    # → ~110
  print(f"max load (2 choices): {int(loads_two.max())}")   # → ~125 (much flatter)

— analytical solution নেই এমন সমস্যায় randomness দিয়ে approximate করো —</div>

<div class="dialogue"><strong>স্টানিস্লাভ উলাম:</strong> আমি ১৯৪৬ সালে solitaire খেলার সময় Monte Carlo method আবিষ্কার করেছিলাম। জটিল সমস্যা — বার বার random simulate করো। π অনুমান: একটা বর্গে random বিন্দু ফেলো, বৃত্তের ভেতরে পড়ার সম্ভাবনা = π/4। LedgerPilot-এ Value-at-Risk: 10,000 portfolio scenario simulate করো — প্রতিটা asset এ random shock দাও (Gaussian)। 5th percentile = 95% নিশ্চয়তায় সর্বোচ্চ ক্ষতি। Power of two choices: random server → max load = O(log n / log log n)। দুই random server, less loaded pick → max load = O(log log n)! শুধু একটা extra choice exponential উন্নতি!</div>`,
  recall: [
    { q: "Monte Carlo method কী এবং কিভাবে VaR তে ব্যবহৃত হয়?", a: "বার বার random simulation। VaR: 10,000 portfolio scenario, প্রতিটায় Gaussian shock, 5th percentile = 95% VaR। যখন analytical solution নেই তখন simulation দিয়ে estimate করো।" },
    { q: "Power of two choices কী?", a: "Random server pick → max load O(log n / log log n)। দুই random server pick করে less loaded → max load O(log log n)! একটা extra choice exponentially ভালো। Load balancing, hashing, distributed systems-এ ব্যবহৃত।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 7 — The Tiny Counter (Probabilistic DS)
// ═══════════════════════════════════════════
doors.push({
  num: 7,
  icon: "🐜",
  color: "#10b981",
  tagline: "ক্ষুদ্র গণনাকারী — Tiny Counter",
  name: "The Tiny Counter",
  secret: "HyperLogLog: 10⁹ unique items in 1.5KB! Bloom filter: zero false negatives। Concentration inequality এর জাদু।",
  story: `<p class="scene-setting">Probabilistic data structure — নিখুঁত নয় কিন্তু কাছাকাছি, আর প্রায় কোনো memory লাগে না। HyperLogLog: count-distinct problem — 10⁹ unique element কে 1.5KB তে গণনা করো, 2% error সহ! Redis, BigQuery, PostgreSQL সবাই ব্যবহার করে। Bloom filter: set membership test — false positive সম্ভব কিন্তু false negative অসম্ভব! তাই spam email check করতে পারো — যদি 'possibly spam' বলে, verify করো। Count-Min Sketch: streaming frequency estimation — কোনো element কত বার দেখা গেছে বড় data stream এ, পুরো stream store না করেই।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🐜 Probabilistic Data Structures: Tiny but Mighty</text>

  <!-- HyperLogLog -->
  <rect x="20" y="50" width="170" height="180" rx="10" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="105" y="72" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">HyperLogLog</text>
  <text x="105" y="90" text-anchor="middle" fill="#86efac" font-size="7">Count distinct elements</text>
  <rect x="35" y="100" width="140" height="22" rx="4" fill="#1e293b" stroke="#22c55e" stroke-width="1"/>
  <text x="105" y="115" text-anchor="middle" fill="#4ade80" font-size="7" font-family="monospace">10⁹ items → 1.5KB!</text>
  <text x="105" y="135" text-anchor="middle" fill="#86efac" font-size="7">Error: ~2%</text>
  <text x="105" y="150" text-anchor="middle" fill="#64748b" font-size="6">Leading zeros + harmonic mean</text>
  <text x="105" y="170" text-anchor="middle" fill="#22c55e" font-size="7">Redis: PFADD / PFCOUNT</text>
  <text x="105" y="185" text-anchor="middle" fill="#22c55e" font-size="7">BigQuery: APPROX_COUNT_DISTINCT</text>
  <text x="105" y="205" text-anchor="middle" fill="#fbbf24" font-size="7">LedgerPilot: unique API IPs</text>
  <text x="105" y="220" text-anchor="middle" fill="#fbbf24" font-size="7">→ ~zero memory real-time!</text>

  <!-- Bloom Filter -->
  <rect x="205" y="50" width="170" height="180" rx="10" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">Bloom Filter</text>
  <text x="290" y="90" text-anchor="middle" fill="#bae6fd" font-size="7">Set membership test</text>
  <rect x="220" y="100" width="140" height="22" rx="4" fill="#1e293b" stroke="#0ea5e9" stroke-width="1"/>
  <text x="290" y="115" text-anchor="middle" fill="#7dd3fc" font-size="7" font-family="monospace">"Possibly in" / "Definitely not"</text>
  <text x="290" y="135" text-anchor="middle" fill="#dc2626" font-size="7" font-weight="700">False positive: possible</text>
  <text x="290" y="150" text-anchor="middle" fill="#22c55e" font-size="7" font-weight="700">False negative: IMPOSSIBLE</text>
  <text x="290" y="170" text-anchor="middle" fill="#64748b" font-size="6">k hash functions → bit array</text>
  <text x="290" y="185" text-anchor="middle" fill="#0ea5e9" font-size="7">RedisBloom: BF.ADD / BF.EXISTS</text>
  <text x="290" y="205" text-anchor="middle" fill="#fbbf24" font-size="7">LedgerPilot: spam email check</text>
  <text x="290" y="220" text-anchor="middle" fill="#fbbf24" font-size="7">→ 100x faster than DB lookup</text>

  <!-- Count-Min Sketch -->
  <rect x="390" y="50" width="170" height="180" rx="10" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="475" y="72" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">Count-Min Sketch</text>
  <text x="475" y="90" text-anchor="middle" fill="#d8b4fe" font-size="7">Frequency estimation</text>
  <rect x="405" y="100" width="140" height="22" rx="4" fill="#1e293b" stroke="#a855f7" stroke-width="1"/>
  <text x="475" y="115" text-anchor="middle" fill="#c084fc" font-size="7" font-family="monospace">"How many times seen?"</text>
  <text x="475" y="135" text-anchor="middle" fill="#d8b4fe" font-size="7">Overestimate (never under)</text>
  <text x="475" y="150" text-anchor="middle" fill="#64748b" font-size="6">d hash functions × w counters</text>
  <text x="475" y="170" text-anchor="middle" fill="#a855f7" font-size="7">Streaming: no storage of stream</text>
  <text x="475" y="185" text-anchor="middle" fill="#a855f7" font-size="7">Apache Druid, ClickHouse</text>
  <text x="475" y="205" text-anchor="middle" fill="#fbbf24" font-size="7">LedgerPilot: API call frequency</text>
  <text x="475" y="220" text-anchor="middle" fill="#fbbf24" font-size="7">→ rate limiting without DB!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Probabilistic Data Structures — HyperLogLog (unique count 1.5KB), Bloom filter (membership, zero false neg), Count-Min Sketch (frequency, streaming)। Redis, BigQuery, PostgreSQL সবাই ব্যবহার করে।</div>

<div class="code-block">— Probabilistic Data Structures: Bloom Filter + HyperLogLog (Python) —

  import numpy as np
  import mmh3                                                       # MurmurHash3

  — ১. Bloom Filter: set membership, false positive সম্ভব, false negative অসম্ভব —
  class BloomFilter:
      def __init__(self, size=1000, k=7):
          self.bits = np.zeros(size, dtype=bool)
          self.size, self.k = size, k
      def add(self, item):
          for seed in range(self.k):                                # k hash functions
              idx = mmh3.hash(str(item), seed) % self.size
              self.bits[idx] = True                                 # শুধু যোগ করতে পারো
      def __contains__(self, item):
          return all(self.bits[mmh3.hash(str(item), seed) % self.size]
                     for seed in range(self.k))                     # সব bit 1 → "possibly in"

  bf = BloomFilter()
  spam = [f"spam_{i}@x.com" for i in range(200)]
  for s in spam: bf.add(s)                                          # add known spam

  fp = sum(f"honest_{i}@x.com" in bf for i in range(10_000))       # false positives
  print(f"false positive rate: {fp/10_000:.3%}")                    # → ~0.8% (k, size উপর নির্ভর)
  print(f"false negatives:     {sum(s not in bf for s in spam)}")   # → 0 (অসম্ভব!)

  — ২. HyperLogLog (সরলীকৃত): leading-zeros গণনা —
  def hll_estimate(items, b=10):                                    # 2^b registers
      m = 1 << b;  registers = np.zeros(m, dtype=int)
      for item in items:
          h = mmh3.hash(str(item), signed=False)                    # 32-bit hash
          idx = h >> (32 - b)                                       # first b bits = register
          w = (h << b) & 0xFFFFFFFF                                 # remaining bits
          registers[idx] = max(registers[idx], 32 - b - w.bit_length() + 1)
      alpha = 0.7213 / (1 + 1.079 / m)                              # bias correction
      Z = 1 / np.mean(2.0 ** -registers)                            # harmonic mean
      return int(alpha * m * m * Z)

  unique_ips = [f"10.0.{i//256}.{i%256}" for i in range(50_000)]    # 50k unique
  stream = unique_ips * 5                                           # 250k with dups
  est = hll_estimate(stream)
  print(f"HLL estimate: {est:,}   (true: 50,000)   error: {abs(est-50_000)/500:.1%}")

— পুরো stream store না করেই গণনা — concentration inequality গ্যারান্টি দেয় bounded error —</div>

<div class="dialogue"><strong>ফিলিপ ফ্লাজোলে:</strong> আমি ১৯৮৪ সালে Flajolet-Martin algorithm তৈরি করেছিলাম — যেটা পরে HyperLogLog হয়েছে। মূল ধারণা: hash করে leading zeros গণনা করো। যত বেশি leading zeros, তত বেশি unique item! Harmonic mean দিয়ে average করো → 2% error সহ অনুমান। 10⁹ unique IP 1.5KB! Bloom (1970): k hash function দিয়ে bit array তে mark করো। Check করার সময় সব k bit 1 হলে 'possibly in', কোনো bit 0 হলে 'definitely not'। False negative অসম্ভব! Count-Min Sketch (Cormode-Muthukrishnan 2003): streaming frequency — কোনো element কতবার দেখা গেছে বড় stream এ, পুরো stream store না করেই। সবই concentration inequality এর উপর দাঁড়িয়ে!</div>`,
  recall: [
    { q: "HyperLogLog কিভাবে 10⁹ unique item 1.5KB তে count করে?", a: "Hash করে leading zeros গণনা — যত বেশি zeros, তত বেশি unique! Harmonic mean দিয়ে average। Chernoff bound গ্যারান্টি দেয় 2% error। Redis PFADD/PFCOUNT।" },
    { q: "Bloom filter এ false positive আর false negative এর নিয়ম কী?", a: "False positive সম্ভব ('possibly in set')। False negative অসম্ভব ('definitely not')! কারণ k hash function সব বিট 1 হলে positive, কোনো বিট 0 হলে negative। যোগ করতে পারো, সরাতে পারো না।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 8 — The Arrival Clock (Poisson Process)
// ═══════════════════════════════════════════
doors.push({
  num: 8,
  icon: "⏱️",
  color: "#06b6d4",
  tagline: "আগমনের ঘড়ি — Arrival Clock",
  name: "The Arrival Clock",
  secret: "Poisson process: events arrive independently at rate λ। Exponential inter-arrival, memoryless!",
  story: `<p class="scene-setting">Poisson process — events arrive randomly কিন্তু average rate λ constant। API request, customer arrival, phone call — সবই Poisson process। Inter-arrival time = exponential distribution (memoryless: অতীত সময় ভবিষ্যৎকে affect করে না)। <code>P(k events in time t) = (λt)^k · e^(-λt) / k!</code>। Queuing theory এর ভিত্তি — M/M/1 queue: arrival rate λ, service rate μ, expected wait = 1/(μ-λ)। LedgerPilot: API capacity planning। 100 req/sec mean → 150+ হওয়ার সম্ভাবনা খুব কম। Server size এই λ এর উপর ভিত্তি করে করো।</p>

<div class="code-block">— Poisson Process + Queuing Theory (Python) —

  import numpy as np
  from scipy import stats
  np.random.seed(8)

  # API requests arrive at rate λ=100 req/sec (Poisson process)
  lam = 100  # mean events per second

  — ১. P(k events in 1 sec) = (λ^k · e^{-λ}) / k! —
  for k in [80, 90, 100, 110, 120, 150]:
      p_k = stats.poisson.pmf(k, lam)
      print(f"P({k:3d} req/sec) = {p_k:.6f}")           # 150 req খুবই বিরল!

  p_over_150 = 1 - stats.poisson.cdf(150, lam)
  print(f"P(arrivals > 150) = {p_over_150:.6f}")        # → ~0.000001 (capacity OK)

  — ২. Inter-arrival times = Exponential(λ), memoryless —
  waits = np.random.exponential(1/lam, 10_000)          # sec between requests
  print(f"mean inter-arrival: {waits.mean()*1000:.2f} ms (1/λ = {1000/lam:.1f} ms)")
  # memoryless proof: 3+ sec অপেক্ষা করার পরেও conditional rate অপরিবর্তিত
  old = waits[waits > 0.03]                              # already waited >30ms
  print(f"residual wait (memoryless): {old.mean()*1000:.2f} ms")   # → একই ~10ms

  — ৩. M/M/1 Queue: E[wait] = 1/(μ-λ), μ = service rate —
  mu = 200                                              # server handles 200 req/sec
  E_wait = 1 / (mu - lam)                               # = 1/100 sec = 10ms
  print(f"E[queue wait] (μ=200, λ=100): {E_wait*1000:.1f} ms")

  for utilization in [0.5, 0.8, 0.9, 0.95, 0.99]:
      mu_t = lam / utilization                          # μ = λ/ρ
      w = 1 / (mu_t - lam)
      print(f"  ρ={utilization:.2f}: E[wait]={w*1000:8.1f} ms  (capacity ratio {mu_t/lam:.2f}x)")

— λ → μ হলে wait → ∞! তাই capacity সবসময় 2× arrival rate রাখো —</div>

<div class="dialogue"><strong>সিমেওঁ দ্যনি পোয়াসোঁ:</strong> আমি ১৮৩৭ সালে এই distribution আবিষ্কার করেছিলাম। Events independent — একটা event এর পরের event এর উপর কোনো প্রভাব নেই। Average rate λ constant। Inter-arrival time = exponential, যা memoryless: একটা light bulb ৩ বছর জ্বলেছে বলে পরের মুহূর্তে না থাকার সম্ভাবনা নতুন bulb এর মতোই! LedgerPilot: API request arrival = Poisson। λ=100 req/sec হলে, এক সেকেন্ডে 150+ request আসার সম্ভাবনা খুব কম। এটা দিয়ে server capacity plan করো। Queuing: M/M/1 queue-তে expected wait = 1/(μ-λ)। μ=200, λ=100 হলে wait = 10ms। λ→μ হলে wait → ∞! তাই server capacity সবসময় arrival rate এর অনেক বেশি রাখো।</div>`,
  recall: [
    { q: "Poisson process এর মূল বৈশিষ্ট্য কী?", a: "Events independent, average rate λ constant, inter-arrival time = exponential (memoryless)। P(k events) = (λt)^k · e^(-λt) / k!। API request, customer arrival, phone call সবই Poisson।" },
    { q: "Queuing theory তে expected wait কীভাবে কাজ করে?", a: "M/M/1 queue: E[wait] = 1/(μ-λ)। μ=service rate, λ=arrival rate। λ→μ হলে wait → ∞! তাই server capacity সবসময় arrival rate এর দ্বিগুণ রাখো।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 9 — The Sampling Dance (MCMC)
// ═══════════════════════════════════════════
doors.push({
  num: 9,
  icon: "💃",
  color: "#f97316",
  tagline: "নমুনার নৃত্য — Sampling Dance",
  name: "The Sampling Dance",
  secret: "MCMC: অসম্ভব distribution থেকে sample নাও। Metropolis-Hastings: propose → accept/reject।",
  story: `<p class="scene-setting">Markov Chain Monte Carlo (MCMC) — যখন কোনো distribution থেকে সরাসরি sample নেওয়া কঠিন, একটা Markov chain বানাও যার stationary distribution হল তোমার target। Metropolis-Hastings: propose একটা new state → acceptance ratio হিসাব করো → accept বা reject। অনেক step পরে chain target distribution এ converge। Gibbs sampling: একটা সহজ ক্ষেত্রে প্রতিটা variable কন্ডিশনালি sample করো। Burn-in: প্রথম কিছু sample ফেলে দাও (chain এখনো converge করেনি)। Autocorrelation: পাশাপাশি sample correlated → effective sample size কম। LedgerPilot: Bayesian fraud model — posterior থেকে sample নাও যখন closed form নেই।</p>

<div class="code-block">— MCMC: Metropolis-Hastings Sampler (Python) —

  import numpy as np
  np.random.seed(9)

  # Target distribution: bimodal mixture of two Gaussians (hard to sample directly)
  def target_pdf(x):
      return 0.5 * np.exp(-0.5*(x+3)**2) + 0.5 * np.exp(-0.5*(x-3)**2)

  — Metropolis-Hastings: propose → acceptance ratio → accept/reject —
  def metropolis_hastings(target, x0=0.0, n=20_000, sigma=2.0):
      samples = np.empty(n); x = x0; accepted = 0
      for i in range(n):
          x_prop = x + np.random.normal(0, sigma)            # propose new state
          # α = min(1, π(x')·q(x|x') / π(x)·q(x'|x))  — symmetric q তে লুপ্ত
          ratio = target(x_prop) / target(x)
          if np.random.random() < min(1, ratio):
              x = x_prop; accepted += 1
          samples[i] = x
      return samples, accepted/n

  samples, acc_rate = metropolis_hastings(target_pdf)
  print(f"acceptance rate: {acc_rate:.2f}")                  # → ~0.4-0.6 ideal
  print(f"sample mean:     {samples.mean():.3f}  (target ~0)")   # mixture centered
  print(f"sample std:      {samples.std():.3f}  (target ~3.35)")

  — Burn-in: প্রথম 2000 sample ফেলে দাও (chain এখনো converge করেনি) —
  post_burn = samples[2000:]
  print(f"post burn-in:    mean={post_burn.mean():.3f}, std={post_burn.std():.3f}")

  — Autocorrelation: পাশাপাশি sample correlated → effective sample size কম —
  def autocorr(x, lag):
      return np.corrcoef(x[:-lag], x[lag:])[0, 1]
  ac1  = autocorr(post_burn, 1)
  ess  = len(post_burn) * (1 - ac1) / (1 + ac1)              # effective sample size
  print(f"autocorr(1)={ac1:.3f}  ESS={ess:.0f} of {len(post_burn)}")

  — তুলনা: scipy দিয়ে direct sample (যদি closed form থাকে) —
  from scipy import stats
  direct = np.concatenate([stats.norm.rvs(-3, 1, 5000),
                           stats.norm.rvs( 3, 1, 5000)])
  print(f"direct sample:   mean={direct.mean():.3f}, std={direct.std():.3f}")

— posterior closed form না থাকলে MCMC একমাত্র উপায় — asymptotically exact —</div>

<div class="dialogue"><strong>নিকোলাস মেট্রোপলিস:</strong> আমি ১৯৫৩ সালে Manhattan Project-এ এই algorithm তৈরি করেছিলাম। মূল ধারণা: propose একটা new state। Acceptance ratio α = min(1, π(x')·q(x|x') / π(x)·q(x'|x))। যদি α বেশি, accept। কম হলে random এ accept/reject। অনেক step পরে chain π distribution এ converge! কিন্তু দুটো সমস্যা: burn-in (প্রথম N sample ফেলে দাও) আর autocorrelation (পাশাপাশি sample correlated → effective sample size কম)। Variational inference একটা বিকল্প — optimization করে posterior approximate করে। MCMC asymptotically exact কিন্তু ধীর। VI দ্রুত কিন্তু approximate। LedgerPilot-এ Bayesian fraud model — posterior থেকে MCMC দিয়ে sample নাও যখন closed form নেই।</div>`,
  recall: [
    { q: "Metropolis-Hastings algorithm কিভাবে কাজ করে?", a: "Propose new state → acceptance ratio α = min(1, π(x')q(x|x')/π(x)q(x'|x)) → accept/reject। অনেক step পরে chain target distribution এ converge। Burn-in (প্রথম sample ফেলে দাও) + autocorrelation (effective sample size কম)।" },
    { q: "MCMC vs Variational Inference এর পার্থক্য কী?", a: "MCMC: asymptotically exact কিন্তু ধীর (sampling)। VI: দ্রুত কিন্তু approximate (optimization)। MCMC যখন নির্ভুলতা দরকার, VI যখন scale দরকার।" },
  ]
});

// ═══════════════════════════════════════════
// DOOR 10 — The Probabilistic Mind (ML Connection)
// ═══════════════════════════════════════════
doors.push({
  num: 10,
  icon: "🧠",
  color: "#8b5cf6",
  tagline: "সম্ভাবনার মন — Probabilistic Mind",
  name: "The Probabilistic Mind",
  secret: "Cross-entropy = MLE। Dropout = Bayesian। VAE = reparameterization। RL = MDP। সব ML probability!",
  story: `<p class="scene-setting">সব Machine Learning মূলত probability। Cross-entropy loss = negative log-likelihood (MLE) — model যত বেশি confident আর wrong, loss তত বেশি। Softmax = probability distribution over classes। Dropout = Bayesian approximation — random node disable করা মানে posterior এর Monte Carlo estimate! Variational Autoencoder (VAE): reparameterization trick দিয়ে randomness কে model parameter থেকে আলাদা করো → backprop কাজ করে। Reinforcement Learning = Markov Decision Process (MDP) — states, actions, transitions, rewards। Bellman equation দিয়ে optimal policy বের করো। LedgerPilot: fraud model = Naive Bayes (P(fraud|features))। Ipractus: user behavior prediction = Markov chain।</p>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🧠 Every ML Concept IS Probability</text>

  <!-- Cross-entropy = MLE -->
  <rect x="30" y="50" width="160" height="70" rx="8" fill="#0c4a6e" stroke="#0ea5e9" stroke-width="2"/>
  <text x="110" y="72" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">Cross-Entropy Loss</text>
  <text x="110" y="90" text-anchor="middle" fill="#bae6fd" font-size="7">= Negative Log-Likelihood</text>
  <text x="110" y="105" text-anchor="middle" fill="#64748b" font-size="6">minimizing loss = maximizing MLE</text>

  <!-- Dropout = Bayesian -->
  <rect x="210" y="50" width="160" height="70" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Dropout</text>
  <text x="290" y="90" text-anchor="middle" fill="#86efac" font-size="7">= Bayesian Approximation</text>
  <text x="290" y="105" text-anchor="middle" fill="#64748b" font-size="6">MC estimate of posterior</text>

  <!-- VAE -->
  <rect x="390" y="50" width="160" height="70" rx="8" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="470" y="72" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">VAE</text>
  <text x="470" y="90" text-anchor="middle" fill="#d8b4fe" font-size="7">= Reparameterization Trick</text>
  <text x="470" y="105" text-anchor="middle" fill="#64748b" font-size="6">decouple randomness from params</text>

  <!-- RL = MDP -->
  <rect x="30" y="140" width="160" height="70" rx="8" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="110" y="162" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">Reinforcement Learning</text>
  <text x="110" y="180" text-anchor="middle" fill="#f87171" font-size="7">= Markov Decision Process</text>
  <text x="110" y="195" text-anchor="middle" fill="#64748b" font-size="6">Bellman: Q(s,a) = r + γ·max Q(s',a')</text>

  <!-- Softmax -->
  <rect x="210" y="140" width="160" height="70" rx="8" fill="#451a03" stroke="#f97316" stroke-width="2"/>
  <text x="290" y="162" text-anchor="middle" fill="#fdba74" font-size="9" font-weight="700">Softmax</text>
  <text x="290" y="180" text-anchor="middle" fill="#fb923c" font-size="7">= Probability Distribution</text>
  <text x="290" y="195" text-anchor="middle" fill="#64748b" font-size="6">P(class_i) = e^z_i / Σ e^z_j</text>

  <!-- Naive Bayes -->
  <rect x="390" y="140" width="160" height="70" rx="8" fill="#831843" stroke="#ec4899" stroke-width="2"/>
  <text x="470" y="162" text-anchor="middle" fill="#f9a8d4" font-size="9" font-weight="700">Naive Bayes</text>
  <text x="470" y="180" text-anchor="middle" fill="#f472b6" font-size="7">= Bayes Theorem Applied</text>
  <text x="470" y="195" text-anchor="middle" fill="#64748b" font-size="6">P(y|features) ∝ P(y)·∏P(x_i|y)</text>

  <rect x="100" y="230" width="380" height="35" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
  <text x="290" y="252" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="700">💡 Probability isn't just math — it IS machine learning!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: প্রতিটা ML concept মূলত probability — Cross-entropy = MLE, Dropout = Bayesian, VAE = reparameterization, RL = MDP, Softmax = distribution, Naive Bayes = Bayes theorem।</div>

<div class="code-block">— Probability IS Machine Learning: Cross-Entropy, Dropout, Naive Bayes (Python) —

  import numpy as np
  from scipy import stats

  — ১. Cross-Entropy Loss = Negative Log-Likelihood (MLE) —
  # True label = class 1; model outputs softmax probabilities [0.2, 0.7, 0.1]
  probs = np.array([0.2, 0.7, 0.1]); true_class = 1
  nll = -np.log(probs[true_class])                  # = -ln(0.7) = 0.357
  print(f"cross-entropy loss: {nll:.4f}   (lower = better)")
  # Confident-wrong (probs=[0.9, 0.05, 0.05]) → loss = -ln(0.05) = 3.00 (high!)

  — ২. Softmax = probability distribution over classes —
  def softmax(z):
      e = np.exp(z - z.max())                       # numerical stability
      return e / e.sum()
  logits = np.array([2.0, 1.0, 0.1])
  print(f"softmax([2,1,0.1]) = {softmax(logits)}")  # → [0.66, 0.24, 0.10]

  — ৩. Naive Bayes: P(y|features) ∝ P(y) · ∏P(x_i|y) — ধরে নাও features independent —
  # Spam filter: P(spam)=0.3; word likelihoods P(word|spam)
  p_spam = 0.3
  p_word_given_spam   = {"free": 0.4, "money": 0.3, "meeting": 0.01}
  p_word_given_ham    = {"free": 0.05, "money": 0.02, "meeting": 0.2}
  def classify(words):
      log_p_spam = np.log(p_spam)
      log_p_ham  = np.log(1 - p_spam)
      for w in words:
          log_p_spam += np.log(p_word_given_spam.get(w, 1e-5))
          log_p_ham  += np.log(p_word_given_ham.get(w, 1e-5))
      p_s = 1 / (1 + np.exp(log_p_ham - log_p_spam))   # sigmoid normalize
      return "SPAM" if p_s > 0.5 else "HAM", p_s
  print(classify(["free", "money"]))                    # → SPAM, ~0.99
  print(classify(["meeting"]))                          # → HAM, ~0.04

  — ৪. Dropout = Bayesian MC estimate (Gal & Ghahramani 2016) —
  # Train-time dropout → test-time এ T forward passes → predictive mean+variance
  def dropout_mc(logits, p_drop=0.5, T=100):
      runs = []
      for _ in range(T):
          mask = (np.random.random(len(logits)) > p_drop) / (1 - p_drop)
          runs.append(softmax(logits * mask))           # stochastic forward
      runs = np.array(runs)
      return runs.mean(0), runs.std(0)                  # posterior mean, uncertainty
  mean_p, unc_p = dropout_mc(logits)
  print(f"MC Dropout: mean={mean_p}, epistemic_uncertainty={unc_p}")

— RL = MDP (Bellman), VAE = reparameterization — সব ML algorithm-এর মূলে probability —</div>

<div class="dialogue"><strong>গণিতজ্ঞ:</strong> তুমি ভাবো Deep Learning (B36) আর Probability (B49) আলাদা — ভুল! Cross-entropy loss = MLE (Maximum Likelihood Estimation)। Model যখন train করে, সে আসলে data এর probability maximize করে। Dropout = Bayesian approximation — Gal আর Ghahramani (2016) প্রমাণ করেছেন। VAE (B36): reparameterization trick, z = μ + σ·ε। RL (B12): সম্পূর্ণ MDP — Bellman equation, Q-learning। Softmax: P(class_i) = e^{z_i} / Σ e^{z_j}। Naive Bayes: P(y|x) ∝ P(y)·∏P(x_i|y)। প্রতিটা ML algorithm এর পেছনে probability আছে। এটাই কেন Probability হল ML-এর ভিত্তি — B30 (Math for ML) আর B8 (LLM Anatomy) এর পূর্বশর্ত।</div>

<p class="finale">🎉 <strong>তুমি নিয়তির পাশা জয় করেছ!</strong> Bayes থেকে Markov, concentration থেকে Monte Carlo — probability-এর পুরো landscape তোমার। প্রতিটা transaction একটা random variable, প্রতিটা alert একটা posterior, প্রতিটা average একটা Gaussian। তুমি এখন randomness-এর ভাষায় চিন্তা করতে পারো। 🎉</p>`,
  recall: [
    { q: "কেন প্রতিটা ML algorithm মূলত probability?", a: "Cross-entropy loss = MLE (likelihood maximize)। Dropout = Bayesian approximation। VAE = reparameterization trick। RL = MDP। Softmax = probability distribution। Naive Bayes = Bayes theorem। সব ML = applied probability।" },
    { q: "Variational Autoencoder (VAE) তে reparameterization trick কেন দরকার?", a: "Randomness কে model parameter থেকে আলাদা করে: z = μ + σ·ε। এতে backpropagation কাজ করে — gradient random node এর মধ্য দিয়ে যেতে পারে। ছাড়া generative model train করা অসম্ভব।" },
  ]
});
