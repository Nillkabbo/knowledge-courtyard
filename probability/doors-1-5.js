const doors = [];

doors.push({
  num: 1,
  icon: "🔄",
  color: "#8b5cf6",
  name: "বিশ্বাসের আপডেটার",
  subtitle: "The Belief Updater",
  tech: "Bayes Theorem — Bayes 1763, prior/posterior, base rate fallacy, evidence updating",
  spirit: "ইলম ইয়াকিন — জ্ঞানের নিশ্চয়তা, প্রমাণ দিয়ে বিশ্বাস আপডেট",
  secret: "Bayes: P(H|D) = P(D|H)·P(H)/P(D)। 99% accurate fraud test → শুধু 1% সত্যিকার fraud! কারণ healthy transactions এত বেশি যে false positive আধিক্য হয়। Base rate fallacy।",
  recall: {
    q: " Bayes theorem কী? Base rate fallacy কী?",
    qen: "What is Bayes theorem? What is the base rate fallacy?",
    a: "Bayes: P(H|D) = P(D|H)·P(H)/P(D)। Prior + evidence = posterior। Base rate fallacy: prior উপেক্ষা করা। 99% accurate test কিন্তু fraud rate 0.01% → বেশিরভাগ false positive।",
    aen: "Bayes: P(H|D) = P(D|H)·P(H)/P(D). Prior + evidence = posterior. Base rate fallacy: ignoring prior. 99% accurate test but 0.01% fraud rate → mostly false positives."
  },
  story: `<p class="scene-setting">Bayes theorem হল বিশ্বাস আপডেট করার গাণিতিক সূত্র। তুমি fraud detection model বানালে — 99% accurate! কিন্তু fraud rate 0.01% হলে, positive alert-এর সত্যিকার সম্ভাবনা শুধুমাত্র 1%! কারণ healthy transactions এত বেশি যে false positive আধিক্য হয়। এটাই base rate fallacy।</p>
<p class="scene-setting en">Bayes theorem is the mathematical formula for updating beliefs. You build a fraud detection model — 99% accurate! But if fraud rate is 0.01%, a positive alert has only a 1% chance of being real fraud! Because healthy transactions are so numerous that false positives dominate. This is the base rate fallacy.</p>

<div class="dialogue"><strong>বিশ্বাস-আপডেটকারী আলী:</strong> Reverend Thomas Bayes 1763 সালে একটি সূত্র আবিষ্কার করেন — মৃত্যুর পর প্রকাশিত। সূত্র: P(H|D) = P(D|H)·P(H)/P(D)। Prior বিশ্বাস P(H) + নতুন প্রমাণ P(D|H) = আপডেটেড বিশ্বাস P(H|D)। চিকিৎসক এটা ভুল বুঝে রোগীকে ভুল চিকিৎসা দেয়। Software engineer ভুল বুঝে false positive-এ ডুবে যায়। কিন্তু সঠিক বুঝলে — প্রতিটি পর্যবেক্ষণে বিশ্বাস নিখুঁত হয়।</div>
<div class="dialogue en"><strong>Belief Updater Ali:</strong> Reverend Thomas Bayes in 1763 discovered a formula — published posthumously. P(H|D) = P(D|H)·P(H)/P(D). Prior belief P(H) + new evidence P(D|H) = updated belief P(H|D). Doctors misunderstand this and mistreat patients. Software engineers misunderstand and drown in false positives. But understood correctly — every observation refines belief.</div>

<div class="code-block"># ── STEP 1: Probability fundamentals ──
# The mathematics of uncertainty.

basics = """
PROBABILITY FUNDAMENTALS:

SAMPLE SPACE (Ω): all possible outcomes of an experiment.
  Coin flip: Ω = {Heads, Tails}
  Dice roll: Ω = {1, 2, 3, 4, 5, 6}

EVENT (E): a subset of the sample space.
  Rolling even: E = {2, 4, 6}

PROBABILITY AXIOMS (Kolmogorov):
  1. P(E) ≥ 0 for all events E
  2. P(Ω) = 1 (something must happen)
  3. For disjoint events: P(A ∪ B) = P(A) + P(B)

KEY RULES:
  P(not A) = 1 − P(A)
  P(A ∪ B) = P(A) + P(B) − P(A ∩ B)  [inclusion-exclusion]
  P(A ∩ B) = P(A) × P(B|A)  [conditional]

CONDITIONAL PROBABILITY:
  P(A | B) = probability of A given B occurred
  P(A | B) = P(A ∩ B) / P(B)

  Example: P(rain | clouds) > P(rain)
  → Clouds increase the probability of rain.

INDEPENDENCE:
  A and B are independent if P(A ∩ B) = P(A) × P(B)
  → Knowing B doesn't change probability of A
  → Coin flips are independent
"""

print(basics)

# PYTHON: Probability basics:
prob_code = """
# Fair dice probability:
def P_dice(events):
    return len(events) / 6

print(P_dice({2, 4, 6}))    # 0.5 (even)
print(P_dice({1}))          # 0.167 (specific number)
print(P_dice({1,2,3,4,5,6}))  # 1.0 (certain)

# Conditional probability:
# Deck of cards: P(King | Face card)?
total = 52
kings = 4
face_cards = 12  # J, Q, K in 4 suits
print(f"P(King | Face) = {kings / face_cards:.4f}")  # 0.333

# Independence check:
# P(A) × P(B) = P(A ∩ B)?
# Two coin flips: P(HH) = P(H) × P(H) = 0.5 × 0.5 = 0.25 ✓
"""

print(prob_code)</div>

<div class="code-block"># ── STEP 2: Bayes' Theorem ──
# The most important formula in probability.

bayes = """
BAYES' THEOREM:

P(H | D) = P(D | H) × P(H) / P(D)

  H = Hypothesis (what we want to know)
  D = Data (evidence observed)

  P(H)     = Prior (belief before seeing data)
  P(D | H) = Likelihood (probability of data given hypothesis)
  P(D)     = Evidence (total probability of data)
  P(H | D) = Posterior (updated belief after data)

  "Update your beliefs when new evidence arrives."

FAMOUS EXAMPLE: Medical testing
  Disease prevalence: 1% (prior)
  Test sensitivity: 99% (true positive rate)
  Test specificity: 99% (true negative rate, so 1% false positive)

  Q: If you test positive, what's P(disease)?

  P(disease | positive) = P(pos | disease) × P(disease) / P(positive)
  = 0.99 × 0.01 / (0.99×0.01 + 0.01×0.99)
  = 0.0099 / 0.0198
  = 0.50 (50%!)

  Only 50%! Why? Base rate is low (1%), false positives comparable.

  THIS IS THE BASE RATE FALLACY:
  People ignore the prior and overestimate P(disease | positive).

APPLICATIONS:
  → Spam filtering (Naive Bayes)
  → Medical diagnosis
  → Drug testing
  → Machine learning (Bayesian inference)
  → A/B testing (Bayesian vs frequentist)
"""

print(bayes)

# PYTHON: Bayes theorem (fraud detection):
bayes_code = """
# Fraud detection:
P_fraud = 0.001           # 0.1% of transactions are fraud (prior)
P_alert_given_fraud = 0.99    # 99% sensitivity
P_alert_given_not = 0.01      # 1% false positive rate

# Total probability of alert (law of total probability):
P_alert = (P_alert_given_fraud * P_fraud +
           P_alert_given_not * (1 - P_fraud))

print(f"P(alert) = {P_alert:.6f}")  # ~0.010988

# Bayes: P(fraud | alert) = ?
P_fraud_given_alert = (P_alert_given_fraud * P_fraud) / P_alert

print(f"P(fraud | alert) = {P_fraud_given_alert:.4f}")
# 0.0901 → only 9% of alerts are actual fraud!

# LESSON: With rare events, even accurate tests have high false positive rates.
# This is why fraud detection needs MULTIPLE signals, not just one test.

# Sequential Bayesian updating:
# Each new piece of evidence updates the posterior:
prior = P_fraud
for evidence_strength in [0.8, 0.7, 0.9, 0.85]:
    # Update: posterior ∝ likelihood × prior
    posterior = (evidence_strength * prior) / (
        evidence_strength * prior + 0.1 * (1 - prior))
    print(f"After evidence: P(fraud) = {posterior:.4f}")
    prior = posterior  # posterior becomes new prior
"""

print(bayes_code)</div>

<div class="code-block"># ── STEP 3: Random variables and distributions ──
# Assign numbers to random outcomes.

rvs = """
RANDOM VARIABLES:

A RANDOM VARIABLE (RV) maps outcomes to numbers.
  X = result of dice roll → X ∈ {1, 2, 3, 4, 5, 6}
  Y = number of heads in 3 coin flips → Y ∈ {0, 1, 2, 3}

TWO TYPES:
  DISCRETE: countable values (dice, coin flips, counts)
  CONTINUOUS: any value in a range (height, weight, time)

PROBABILITY DISTRIBUTIONS:
  Discrete: PMF (Probability Mass Function)
    P(X = k) for each k
  Continuous: PDF (Probability Density Function)
    P(a ≤ X ≤ b) = integral of PDF from a to b

COMMON DISTRIBUTIONS:

1. BERNOULLI (p): single yes/no trial
   P(X=1) = p, P(X=0) = 1−p
   Example: coin flip (p=0.5)

2. BINOMIAL (n, p): number of successes in n trials
   P(X=k) = C(n,k) × p^k × (1−p)^(n−k)
   Example: 3 heads in 10 flips

3. GEOMETRIC (p): trials until first success
   P(X=k) = (1−p)^(k−1) × p
   Example: flips until first heads

4. POISSON (λ): number of events in time interval
   P(X=k) = (λ^k × e^−λ) / k!
   Example: customers arriving per hour

5. UNIFORM (a, b): all values equally likely
   Example: random number from 1 to 10

6. NORMAL (μ, σ): the bell curve
   Most common distribution in nature
   Mean μ, standard deviation σ

7. EXPONENTIAL (λ): time between events
   Memoryless: P(X > s+t | X > s) = P(X > t)
"""

print(rvs)

# PYTHON: Distributions:
dist_code = """
from scipy import stats
import numpy as np

# Bernoulli: P(heads) = 0.5
print(stats.bernoulli.pmf(1, 0.5))  # 0.5

# Binomial: P(3 heads in 10 flips)
print(stats.binom.pmf(3, n=10, p=0.5))  # ~0.117

# Poisson: P(5 events, λ=3)
print(stats.poisson.pmf(5, mu=3))  # ~0.10

# Normal: P(X < 0) for standard normal
print(stats.norm.cdf(0))  # 0.5 (mean = median)

# Exponential: P(X > 1) with λ=2
print(1 - stats.expon.cdf(1, scale=0.5))  # e^(-2) ≈ 0.135

# Sample from distributions:
samples = np.random.normal(loc=100, scale=15, size=10000)
print(f"Sample mean: {np.mean(samples):.2f}")  # ≈ 100
print(f"Sample std: {np.std(samples):.2f}")    # ≈ 15
"""

print(dist_code)</div>

<div class="code-block"># ── STEP 4: Expectation and variance ──
# The two most important properties of a distribution.

ev = """
EXPECTATION (Expected Value, Mean):
  E[X] = average value if we repeated infinitely.
  Discrete: E[X] = Σ k × P(X=k)
  Continuous: E[X] = ∫ x × f(x) dx

  Example: Fair dice → E[X] = (1+2+3+4+5+6)/6 = 3.5

VARIANCE:
  Var(X) = E[(X − μ)²] = spread of the distribution
  Standard deviation: σ = √(Var)

  Low variance: values cluster around mean
  High variance: values spread out

PROPERTIES:
  E[aX + b] = a×E[X] + b  (linearity)
  E[X + Y] = E[X] + E[Y]
  Var(aX + b) = a² × Var(X)
  If X, Y independent: Var(X + Y) = Var(X) + Var(Y)

LAW OF LARGE NUMBERS:
  Sample mean → E[X] as sample size → ∞
  → If you flip a coin many times, the fraction of heads → 0.5
  → Casinos profit from this (house edge compounds over many bets)

CENTRAL LIMIT THEOREM (CLT):
  The sum/average of many independent random variables
  is approximately NORMAL, regardless of the original distribution.

  → This is why the normal distribution is everywhere!
  → Heights, test scores, measurement errors...
  → Even non-normal inputs produce normal averages.

  Example: Sum of 100 dice rolls ≈ normal distribution
"""

print(ev)

# PYTHON: Expectation and variance:
ev_code = """
import numpy as np

# Fair dice: E[X] = 3.5, Var = 35/12 ≈ 2.92
dice = np.arange(1, 7)
E_X = np.mean(dice)  # 3.5
Var_X = np.var(dice)  # 2.917

print(f"E[dice] = {E_X}")      # 3.5
print(f"Var[dice] = {Var_X:.3f}")  # 2.917

# Law of Large Numbers demonstration:
np.random.seed(42)
for n in [10, 100, 1000, 10000, 100000]:
    rolls = np.random.randint(1, 7, size=n)
    print(f"n={n:6d}: mean={np.mean(rolls):.4f}")  # → 3.5

# Central Limit Theorem: sum of dice approaches normal:
import matplotlib.pyplot as plt
sums = [sum(np.random.randint(1, 7, 100)) for _ in range(10000)]
# Histogram of sums ≈ bell curve (normal distribution)
print(f"Mean of sums: {np.mean(sums):.2f}")  # ≈ 350
print(f"Std of sums: {np.std(sums):.2f}")    # ≈ 17
"""

print(ev_code)</div>

<div class="code-block"># ── STEP 5: Probability in computing ──
# Where probability meets algorithms.

cs_prob = """
PROBABILITY IN CS:

1. RANDOMIZED ALGORITHMS:
   → Use randomness to solve problems faster
   → QuickSort: random pivot → O(n log n) expected
   → Monte Carlo: approximate via random sampling
   → Las Vegas: always correct, random running time

2. HASHING:
   → Uniform distribution → few collisions
   → Random hash functions → adversarial resistance

3. MACHINE LEARNING:
   → Models = probability distributions
   → Training = maximum likelihood estimation
   → Prediction = conditional probability P(y | x)

4. CRYPTOGRAPHY:
   → Security = probability of attack succeeding
   → Random keys → unpredictable
   → Birthday paradox → collision bounds

5. PERFORMANCE ANALYSIS:
   → Average-case vs worst-case analysis
   → Expected running time = E[T(n)]

6. LOAD BALANCING:
   → Balls into bins: random assignment
   → With n balls in n bins: max load ≈ log(n)/log(log(n))

7. PROBABILISTIC DATA STRUCTURES:
   → Bloom filters (membership with false positives)
   → Count-Min Sketch (frequency estimation)
   → HyperLogLog (cardinality estimation)

8. MARKOV CHAINS:
   → Random processes with memory
   → PageRank, MCMC, queueing theory

9. INFORMATION THEORY:
   → Entropy: uncertainty in a distribution
   → H(X) = −Σ P(x) × log₂ P(x)
   → Data compression limits
"""

print(cs_prob)

# PYTHON: Monte Carlo estimation:
mc_code = """
import random
import math

# Estimate π by Monte Carlo:
# Area of circle / Area of square = π/4
# Randomly throw darts, count fraction inside circle:

def estimate_pi(n=1000000):
    inside = 0
    for _ in range(n):
        x, y = random.random(), random.random()
        if x**2 + y**2 <= 1:  # inside unit circle
            inside += 1
    return 4 * inside / n

print(f"π estimate: {estimate_pi():.6f}")  # ≈ 3.1415...
print(f"π actual:  {math.pi:.6f}")

# Probabilistic data structure — Bloom filter simulation:
class SimpleBloomFilter:
    def __init__(self, size=1000, num_hashes=3):
        self.bits = [False] * size
        self.size = size
        self.num_hashes = num_hashes

    def _hashes(self, item):
        return [hash(f"{item}{i}") % self.size for i in range(self.num_hashes)]

    def add(self, item):
        for h in self._hashes(item):
            self.bits[h] = True

    def contains(self, item):
        return all(self.bits[h] for h in self._hashes(item))

bf = SimpleBloomFilter()
for name in ['Alice', 'Bob', 'Charlie']:
    bf.add(name)

print(f"Alice in BF: {bf.contains('Alice')}")    # True
print(f"David in BF: {bf.contains('David')}")    # False (probably)
"""

print(mc_code)</div>

<div class="code-block"># ── STEP 6: Probability best practices ──
# Apply probability theory effectively.

best_practices = [
    "P(A) + P(not A) = 1 (probabilities sum to 1)",
    "Conditional: P(A|B) = P(A∩B) / P(B)",
    "Bayes: update beliefs with new evidence",
    "Watch for base rate fallacy (rare events)",
    "Independence: P(A∩B) = P(A)×P(B)",
    "E[X] = mean, Var(X) = spread",
    "Law of Large Numbers: sample mean → true mean",
    "Central Limit Theorem: averages → normal",
    "Binomial: number of successes in n trials",
    "Poisson: events in a time interval",
    "Normal: the bell curve (everywhere via CLT)",
    "Exponential: memoryless, time between events",
    "Monte Carlo: estimate via random sampling",
    "Bloom filters: probabilistic membership",
    "Entropy H(X) = uncertainty in distribution",
]

print("PROBABILITY BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Distribution     │ Use Case                        │
# ├──────────────────┼──────────────────────────────────┤
# │ Bernoulli        │ Single yes/no trial             │
# │ Binomial         │ Successes in n trials           │
# │ Poisson          │ Events in time interval         │
# │ Normal           │ Natural phenomena (CLT)         │
# │ Exponential      │ Time between events             │
# │ Uniform          │ All outcomes equally likely     │
# │ Geometric        │ Trials until first success      │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="verse">وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং যাদের জ্ঞান দেওয়া হয়েছে তারা মর্যাদায় উঁচুতে।" — কুরআন ৫৮:১১</div>

<p class="scene-setting">ইলম ইয়াকিন — জ্ঞানের নিশ্চয়তা। Bayes theorem সেই নিশ্চয়তার গাণিতিক রূপ। জ্ঞান স্থির নয় — প্রতিটি প্রমাণে আপডেট হয়। prior থেকে posterior। অজ্ঞতা থেকে জ্ঞান। যাদের জ্ঞান আছে তারা মর্যাদায় উঁচুতে — কারণ তারা সঠিকভাবে আপডেট করে।</p>
<p class="scene-setting en">Ilm Yaqeen — certainty of knowledge. Bayes theorem is the mathematical form of that certainty. Knowledge is not static — it updates with each piece of evidence. From prior to posterior. From ignorance to knowledge. Those with knowledge are elevated — because they update correctly.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৩ (Loom of Reason) Door ৫ (Bayesian):</strong> Bayesian reasoning শিখেছিলে — এখন গাণিতিক ভিত্তি! Book ৩৪ (Statistics) Door ৩: hypothesis testing = Bayes-এর বিপরীত।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs>
    <marker id="arrPB1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#a78bfa"/>
    </marker>
  </defs>
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔄 Bayes Theorem: বিশ্বাস আপডেট</text>
  <circle cx="180" cy="110" r="65" fill="#8b5cf6" fill-opacity="0.15" stroke="#8b5cf6" stroke-width="2.5"/>
  <text x="155" y="85" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="900">H</text>
  <text x="155" y="100" text-anchor="middle" fill="#a78bfa" font-size="10">Fraud</text>
  <circle cx="250" cy="110" r="65" fill="#22d3ee" fill-opacity="0.12" stroke="#22d3ee" stroke-width="2.5"/>
  <text x="280" y="85" text-anchor="middle" fill="#7dd3fc" font-size="12" font-weight="900">D</text>
  <text x="280" y="100" text-anchor="middle" fill="#7dd3fc" font-size="10">Alert</text>
  <text x="215" y="115" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">H∩D</text>
  <rect x="15" y="195" width="250" height="40" rx="6" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="140" y="213" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">সূত্র</text>
  <text x="140" y="228" text-anchor="middle" fill="#e2e8f0" font-size="8">P(H|D) = P(D|H)·P(H) / P(D)</text>
  <rect x="290" y="195" width="275" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="427" y="213" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">Prior + Evidence = Posterior</text>
  <text x="427" y="228" text-anchor="middle" fill="#4ade80" font-size="10">P(H) + P(D|H) → P(H|D)</text>
  <rect x="370" y="40" width="195" height="140" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <text x="467" y="60" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">⚠️ Base Rate Fallacy</text>
  <text x="380" y="80" fill="#e2e8f0" font-size="8">99% accurate fraud test</text>
  <text x="380" y="97" fill="#e2e8f0" font-size="8">Fraud rate: 0.01% (base rate)</text>
  <text x="380" y="115" fill="#fcd34d" font-size="8">→ Alert এলে সত্যিকার fraud:</text>
  <text x="467" y="135" text-anchor="middle" fill="#f87171" font-size="14" font-weight="900">মাত্র 1%!</text>
  <text x="380" y="158" fill="#cbd5e1" font-size="10">কারণ healthy transaction এত বেশি</text>
  <text x="380" y="172" fill="#cbd5e1" font-size="10">যে false positive আধিক্য হয়</text>
  <line x1="215" y1="175" x2="370" y2="110" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>
</div>
<div class="svg-caption">চিত্র: Bayes Theorem — Prior বিশ্বাস P(H) এবং নতুন প্রমাণ P(D|H) থেকে আপডেটেড বিশ্বাস P(H|D) পাওয়া যায়। ৯৯% নিখুঁত fraud test-ও base rate উপেক্ষা করলে ভুল ফল দেয়।</div>

<div class="secret-box">🔄 <strong>Bayes = প্রমাণ দিয়ে বিশ্বাস আপডেট। Prior → Posterior।</strong> কিন্তু বহু ঘটনা একসাথে ঘটলে? গড় কী বলে? সেই উত্তর — expectation। পরের দরজায়।</div>`,
  senior: {
    title: "Bayes Theorem এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Bayes (1763)</td><td>P(H|D) = P(D|H)·P(H)/P(D)</td></tr>
<tr><td class="hl">Prior P(H)</td><td>প্রাথমিক বিশ্বাস</td></tr>
<tr><td class="hl">Posterior P(H|D)</td><td>আপডেটেড বিশ্বাস</td></tr>
<tr><td class="hl">Base Rate Fallacy</td><td>Prior উপেক্ষা</td></tr>
<tr><td class="hl">Evidence</td><td>নতুন পর্যবেক্ষণ</td></tr></table>`
  }
});

doors.push({
  num: 2,
  icon: "📊",
  color: "#8b5cf6",
  name: "গড়ের ভবিষ্যৎকথী",
  subtitle: "The Average Oracle",
  tech: "Expectation & Variance — E[X], Var(X), linearity of expectation, law of large numbers, Chebyshev",
  spirit: "মিজান — ভারসাম্য, গড় ও বিচ্যুতি",
  secret: "E[X] = গড় ফলাফল। Var(X) = কতটা ছড়ানো। Linearity: E[aX+bY] = aE[X]+bE[Y]। Law of Large Numbers: n→∞ হলে গড় → E[X]।",
  recall: {
    q: " E[X] ও Var(X) কী? Linearity of expectation কী?",
    qen: "What are E[X] and Var(X)? What is linearity of expectation?",
    a: "E[X] = গড় ফলাফল। Var(X) = গড় থেকে বিচ্যুতির বর্গ। Linearity: E[aX+bY] = aE[X]+bE[Y] — X, Y independent হওয়া দরকার না!",
    aen: "E[X] = average outcome. Var(X) = squared deviation from mean. Linearity: E[aX+bY] = aE[X]+bE[Y] — X, Y need not be independent!"
  },
  story: `<p class="scene-setting">আলী (Door ১) তোমাকে Bayes শিখিয়েছেন। এখন একটি সহজ প্রশ্ন — একটি ছক্কা পাশার গড় কত? ১, ২, ৩, ৪, ৫, ৬ — প্রতিটি সমান সম্ভাবনা। E[X] = (১+২+৩+৪+৫+৬)/৬ = ৩.৫। কিন্তু ৩.৫ কখনো আসে না! গড় একটি প্রত্যাশা — দীর্ঘে গড় এদিকে যায়। Law of Large Numbers: যত বেশি পাশা মারবে, গড় তত ৩.৫-এর কাছে।</p>
<p class="scene-setting en">Ali (Door 1) taught you Bayes. Now a simple question — what's the average of a die roll? 1, 2, 3, 4, 5, 6 — equal probability. E[X] = (1+2+3+4+5+6)/6 = 3.5. But 3.5 never comes up! The average is an expectation — over the long run, the mean approaches it. Law of Large Numbers: the more dice you roll, the closer the average gets to 3.5.</p>

<div class="dialogue"><strong>গড়-নির্ণয়কারী ফাতিমা:</strong> E[X] = Σ x·P(x)। প্রতিটি ফলাফল তার সম্ভাবনা দিয়ে গুণ, সব যোগ। Var(X) = E[(X-E[X])²] — গড় থেকে কতটা দূরে। সবচেয়ে সুন্দর ধারণা — linearity! E[X+Y] = E[X]+E[Y] — X ও Y independent হওয়ার দরকার নেই! দুটি পাশা মারলে গড় যোগফল = ৩.৫+৩.৫ = ৭। সবসময়। এটাই গাণিতিক জাদু।</div>
<div class="dialogue en"><strong>Average Determiner Fatima:</strong> E[X] = Σ x·P(x). Multiply each outcome by its probability, sum all. Var(X) = E[(X-E[X])²] — how far from mean. The most beautiful concept — linearity! E[X+Y] = E[X]+E[Y] — X and Y need not be independent! Two dice rolled, average sum = 3.5+3.5 = 7. Always. This is mathematical magic.</div>

<div class="code-block"># ── STEP 1: Expectation (the mean) ──
# The weighted average of all outcomes.

expectation = """
EXPECTATION E[X]:

The expected value is the long-run average.
  E[X] = Σ x × P(X=x)   (discrete)
  E[X] = ∫ x × f(x) dx  (continuous)

EXAMPLES:
  Fair dice: E[X] = (1+2+3+4+5+6)/6 = 3.5
  Roulette (bet $1 on red): E[X] = -$0.053 (house always wins!)
  Insurance premium: E[X] = premium − expected payout

KEY PROPERTIES (LINEARITY):
  E[aX + b] = a·E[X] + b       (scaling)
  E[X + Y] = E[X] + E[Y]       (always true, no independence needed)
  E[XY] = E[X]·E[Y]            (only if X, Y independent)

WHY EXPECTATION MATTERS:
  → Casinos profit: E[gambler's return] < 0
  → Insurance: E[profit] = premium − expected payout > 0
  → Investing: compare E[return] vs risk
  → Algorithms: expected running time = average case
"""

print(expectation)

# PYTHON: Expectation:
ex_code = """
# Fair dice:
outcomes = [1, 2, 3, 4, 5, 6]
probs = [1/6] * 6

E_X = sum(x * p for x, p in zip(outcomes, probs))
print(f"E[X] = {E_X}")  # 3.5

# Biased dice (P(6) = 0.3, rest = 0.14):
probs_biased = [0.14, 0.14, 0.14, 0.14, 0.14, 0.30]
E_biased = sum(x * p for x, p in zip(outcomes, probs_biased))
print(f"E[biased] = {E_biased}")  # 3.8

# Roulette (American): 38 slots, bet $1 on red (18/38 win $1):
p_win = 18/38
p_lose = 20/38
E_roulette = p_win * 1 + p_lose * (-1)
print(f"E[roulette bet] = {E_roulette:.4f}")  # -0.0526

# Over 100 bets at $1 each:
print(f"Expected loss after 100 bets: " + str(round(100 * E_roulette, 2)))  # -$5.26
"""

print(ex_code)</div>

<div class="code-block"># ── STEP 2: Variance and standard deviation ──
# How spread out the values are.

variance = """
VARIANCE Var(X):

Var(X) = E[(X − μ)²] where μ = E[X]
       = E[X²] − (E[X])²

Standard Deviation: σ = √Var(X)

INTERPRETATION:
  Low variance → values cluster near mean (predictable)
  High variance → values spread widely (risky)

EXAMPLES:
  Dice: Var = 35/12 ≈ 2.92, σ ≈ 1.71
  Stock A (σ=10%): stable
  Stock B (σ=50%): volatile (risky)

PROPERTIES:
  Var(aX + b) = a² × Var(X)         (scaling)
  Var(X + Y) = Var(X) + Var(Y)      (if independent)
  Var(X + Y) = Var(X) + Var(Y) + 2Cov(X,Y)  (general)

COVARIANCE:
  Cov(X, Y) = E[(X − μ_X)(Y − μ_Y)]
  → Measures how X and Y move together
  → Positive: increase together
  → Negative: move opposite
  → Zero: uncorrelated (but not necessarily independent)

CORRELATION:
  ρ(X,Y) = Cov(X,Y) / (σ_X × σ_Y)
  → Normalized covariance, always between -1 and 1
  → ρ = 1: perfect positive linear
  → ρ = -1: perfect negative
  → ρ = 0: no linear correlation
"""

print(variance)

# PYTHON: Variance:
var_code = """
import numpy as np

# Fair dice:
dice = np.arange(1, 7)
E_X = np.mean(dice)
Var_X = np.var(dice)
print(f"Fair dice: E[X]={E_X}, Var={Var_X:.4f}, σ={np.std(dice):.4f}")
# E[X]=3.5, Var=2.9167, σ=1.7078

# Compare two investments:
returns_A = np.array([5, 6, 5, 6, 5, 6]) / 100  # stable
returns_B = np.array([-20, 30, -10, 40, 5, 25]) / 100  # volatile

print(f"Stock A: E[r]={returns_A.mean():.4f}, σ={returns_A.std():.4f}")
print(f"Stock B: E[r]={returns_B.mean():.4f}, σ={returns_B.std():.4f}")
# Same mean, but B is much riskier (higher σ)

# Covariance and correlation:
np.random.seed(42)
X = np.random.randn(1000)
Y = 2 * X + np.random.randn(1000) * 0.5  # Y depends on X
print(f"Cov(X,Y) = {np.cov(X, Y)[0,1]:.4f}")      # positive
print(f"Corr(X,Y) = {np.corrcoef(X, Y)[0,1]:.4f}")  # ≈ 0.97
"""

print(var_code)</div>

<div class="code-block"># ── STEP 3: Law of Large Numbers ──
# Why casinos always win.

lln = """
LAW OF LARGE NUMBERS (LLN):

As sample size n → ∞:
  Sample mean → Expected value E[X]

  (1/n) Σ X_i → E[X]  as n → ∞

EXAMPLE:
  Dice: each roll is random (1-6), but average → 3.5
  Coin flips: each is random, but fraction of heads → 0.5
  Casino: individual gamblers vary, but house profit → house edge

WHY CASINOS PROFIT:
  Each game has negative expectation for the player.
  Roulette: E[return] = -$0.053 per $1 bet
  Short term: individual gamblers may win big
  Long term: house ALWAYS profits (LLN guarantees it)

  → Casinos don't need to cheat — math guarantees profit
  → Same principle: insurance companies, lottery, sports betting

TWO FORMS OF LLN:

1. WEAK LLN (convergence in probability):
   For any ε > 0: P(|sample_mean − E[X]| > ε) → 0

2. STRONG LLN (almost sure convergence):
   P(sample_mean → E[X]) = 1

PRACTICAL IMPLICATIONS:
  → More data → more accurate estimates
  → Sample size matters (survey 1000, not 10)
  → Variance affects convergence rate (Chebyshev)
"""

print(lln)

# PYTHON: LLN demonstration:
lln_code = """
import numpy as np

# Dice rolls: watch mean converge to 3.5
np.random.seed(42)
rolls = np.random.randint(1, 7, size=100000)
cumulative_mean = np.cumsum(rolls) / np.arange(1, len(rolls) + 1)

for n in [10, 100, 1000, 10000, 100000]:
    print(f"n={n:6d}: mean={cumulative_mean[n-1]:.4f}")

# n=    10: mean=3.5000 (or could be 4.2, 2.8, etc.)
# n=   100: mean=3.4700
# n=  1000: mean=3.4980
# n= 10000: mean=3.4998
# n=100000: mean=3.4997 → converges to 3.5!

# Casino simulation (house edge = 5.26%):
n_bets = 10000
bet_size = 1
results = np.random.choice([1, -1], size=n_bets, p=[18/38, 20/38])
cumulative_profit = np.cumsum(results) * bet_size

print(f"After {n_bets} bets:")
print(f"  Expected: {n_bets * (-0.0526):.2f}")
print(f"  Actual:   {cumulative_profit[-1]:.2f}")
"""

print(lln_code)</div>

<div class="code-block"># ── STEP 4: Central Limit Theorem ──
# Why the normal distribution is everywhere.

clt = """
CENTRAL LIMIT THEOREM (CLT):

The sum (or average) of many independent random variables
is approximately NORMAL, regardless of the original distribution.

Formally: (X₁ + X₂ + ... + Xₙ) / n → Normal(μ, σ²/n) as n → ∞
  where μ = E[X], σ² = Var(X)

WHY THIS IS REMARKABLE:
  → Original variables can be ANY distribution
  → Their average is STILL approximately normal
  → This is why heights, test scores, errors are normal

EXAMPLES:
  → Sum of 100 dice rolls ≈ normal (even though dice is uniform)
  → Average of survey responses ≈ normal
  → Measurement errors ≈ normal (sum of many small effects)

PRACTICAL IMPLICATIONS:
  1. Confidence intervals use normal (even for non-normal data)
  2. Hypothesis testing uses normal (t-test, z-test)
  3. Statistical process control uses normal
  4. ML model errors often normal (CLT)

THE NORMAL DISTRIBUTION:
  PDF: f(x) = (1/σ√2π) × exp(−(x−μ)²/(2σ²))
  Mean = μ, Variance = σ²

  68% of data within 1σ of mean
  95% within 2σ
  99.7% within 3σ (the "three sigma rule")

STANDARD NORMAL (Z):
  Z = (X − μ) / σ  → Normal(0, 1)
  → Any normal can be standardized
  → Z-table gives probabilities
"""

print(clt)

# PYTHON: CLT demonstration:
clt_code = """
import numpy as np
np.random.seed(42)

# CLT: sum of UNIFORM random variables → normal
# Individual uniform is flat, but sum becomes bell-shaped:

for n in [1, 2, 5, 30]:
    # Sum of n uniform[0,1] variables, repeated 10000 times:
    sums = np.random.uniform(0, 1, (10000, n)).sum(axis=1)
    print(f"n={n:2d}: mean={sums.mean():.3f}, std={sums.std():.3f}")
    # n=1: flat (uniform)
    # n=2: triangular
    # n=5: starting to look normal
    # n=30: clearly normal (bell curve)

# Even DISCRETE (dice) sums → normal:
sums = np.random.randint(1, 7, (10000, 50)).sum(axis=1)
print(f"Sum of 50 dice: mean={sums.mean():.2f}, std={sums.std():.2f}")
# mean ≈ 175 (50 × 3.5), std ≈ 12

# 68-95-99.7 rule:
samples = np.random.normal(0, 1, 1000000)
for k in [1, 2, 3]:
    within = np.mean(np.abs(samples) < k) * 100
    print(f"Within {k}σ: {within:.1f}%")
# Within 1σ: 68.3%
# Within 2σ: 95.4%
# Within 3σ: 99.7%
"""

print(clt_code)</div>

<div class="code-block"># ── STEP 5: Concentration inequalities ──
# How to bound the probability of large deviations.

concentration = """
CONCENTRATION INEQUALITIES:

These bound how far a random variable can deviate from its mean.

1. MARKOV'S INEQUALITY (weakest, most general):
   For X ≥ 0: P(X ≥ a) ≤ E[X] / a

   Example: E[wait time] = 10 min → P(wait > 30) ≤ 10/30 = 33%

2. CHEBYSHEV'S INEQUALITY (uses variance):
   P(|X − μ| ≥ k) ≤ Var(X) / k²

   Example: Var = 4 → P(|X − μ| ≥ 4) ≤ 4/16 = 25%

   → Twice as far from mean needs 4× variance

3. CHERNOFF BOUND (strongest, uses moment generating function):
   P(X ≥ (1+δ)μ) ≤ exp(−μδ²/3) for δ ∈ (0,1)

   → Exponential decay! Much stronger than Chebyshev.

APPLICATIONS:
  → Tail bounds for algorithms (probability of bad case)
  → Statistical sampling (margin of error)
  → Machine learning (generalization bounds)
  → Concentration of measure (high-dimensional geometry)

CHEBYSHEV AND SAMPLE MEAN:
  P(|sample_mean − E[X]| ≥ ε) ≤ Var(X) / (nε²)
  → Doubling sample size halves the bound
  → This is the basis for LLN proof
"""

print(concentration)

# PYTHON: Concentration inequalities:
ci_code = """
import numpy as np

# Chebyshev's inequality verification:
np.random.seed(42)
n_trials = 100000
mu, sigma = 10, 2
samples = np.random.normal(mu, sigma, n_trials)

for k in [1, 2, 3, 4]:
    # Actual fraction beyond k std:
    actual = np.mean(np.abs(samples - mu) >= k * sigma)
    # Chebyshev bound:
    bound = sigma**2 / (k * sigma)**2  # = 1/k²
    print(f"k={k}: actual={actual:.4f}, Chebyshev bound={bound:.4f}")

# k=1: actual=0.3173, bound=1.0000 (bound is loose)
# k=2: actual=0.0455, bound=0.2500
# k=3: actual=0.0027, bound=0.1111
# k=4: actual=0.0001, bound=0.0625
# → Chebyshev is valid but loose (actual much smaller for normal)

# Chernoff bound for coin flips:
n = 100
p = 0.5
# P(more than 60 heads out of 100)?
actual = np.mean(np.random.binomial(n, p, 100000) >= 60)
# Chernoff: exp(-n * delta^2 / 3) where delta = 0.2
chernoff = np.exp(-n * 0.2**2 / 3)
print(f"P(≥60 heads): actual={actual:.4f}, Chernoff={chernoff:.4f}")
"""

print(ci_code)</div>

<div class="code-block"># ── STEP 6: Best practices for expectation and variance ──
# Apply these concepts effectively.

best_practices = [
    "E[X] = weighted average (mean)",
    "Var(X) = spread (E[X²] − E[X]²)",
    "σ = standard deviation = √Var",
    "Linearity: E[aX + bY] = aE[X] + bE[Y]",
    "Var(aX + b) = a²Var(X)",
    "Independence: E[XY] = E[X]·E[Y]",
    "LLN: sample mean → true mean as n grows",
    "CLT: averages → normal (any distribution)",
    "Casinos profit: LLN guarantees house edge",
    "68-95-99.7 rule for normal distribution",
    "Chebyshev: P(|X−μ|≥kσ) ≤ 1/k²",
    "Chernoff: exponential tail bounds",
    "Covariance: how variables move together",
    "Correlation: normalized covariance (−1 to 1)",
    "Risk = high variance (stocks, gambling)",
]

print("EXPECTATION & VARIANCE BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Formula                         │
# ├──────────────────┼──────────────────────────────────┤
# │ Expectation      │ E[X] = Σ x·P(x)                │
# │ Variance         │ Var = E[X²] − E[X]²            │
# │ Linearity        │ E[aX+bY] = aE[X]+bE[Y]        │
# │ LLN              │ (1/n)ΣXi → E[X]               │
# │ CLT              │ Sum → Normal                   │
# │ Chebyshev        │ P(|X-μ|≥k) ≤ σ²/k²            │
# │ 68-95-99.7       │ Within 1σ, 2σ, 3σ              │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>গুরুত্বপূর্ণ সূত্র:</strong><br>
<strong>E[X] = Σ x·P(x):</strong> গড় ফলাফল<br>
<strong>Var(X) = E[X²] - E[X]²:</strong> ছড়ানোর মাপ<br>
<strong>Linearity:</strong> E[aX+bY] = aE[X]+bE[Y]<br>
<strong>Law of Large Numbers:</strong> গড় → E[X] যখন n → ∞<br>
<strong>Chebyshev:</strong> P(|X-E[X]| ≥ k) ≤ Var/k²</div></div>

<div class="verse">وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং প্রতিটি কিছু আমরা একটি স্পষ্ট অভিলেখে গণনা করেছি।" — কুরআন ৩৬:১২</div>

<p class="scene-setting">মিজান — ভারসাম্য। E[X] সেই ভারসাম্যের কেন্দ্র — গড়। Var(X) সেই ভারসাম্য থেকে কতটা বিচ্যুতি। প্রকৃতিতে সবকিছুর একটি গড় আছে — বৃষ্টির পরিমাণ, মানুষের উচ্চতা, পাশার ফল। গড় থেকে বিচ্যুতি প্রকৃতির নিয়ম। গণনা সব লেখা আছে।</p>
<p class="scene-setting en">Mizan — balance. E[X] is the center of that balance — the mean. Var(X) is the deviation from that balance. In nature, everything has a mean — rainfall, human height, die outcomes. Deviation from the mean is nature's law. Everything is counted and recorded.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৪ (Distributions):</strong> mean ও variance এর পূর্ণ আলোচনা। Book ৩৩ (Loom of Reason) Door ৪ (Fermi): estimation = expectation এর অনুমান।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">📊 গড় ও ছড়ানো: E[X] ও Var(X)</text>
  <rect x="30" y="40" width="180" height="180" rx="8" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="120" y="58" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="700">একটি fair পাশা</text>
  <circle cx="60" cy="85" r="13" fill="#22c55e" fill-opacity="0.2" stroke="#4ade80" stroke-width="1.5"/>
  <text x="60" y="89" text-anchor="middle" fill="#4ade80" font-size="9">1</text>
  <circle cx="95" cy="85" r="13" fill="#22c55e" fill-opacity="0.4" stroke="#4ade80" stroke-width="1.5"/>
  <text x="95" y="89" text-anchor="middle" fill="#4ade80" font-size="9">2</text>
  <circle cx="130" cy="85" r="13" fill="#22c55e" fill-opacity="0.6" stroke="#4ade80" stroke-width="1.5"/>
  <text x="130" y="89" text-anchor="middle" fill="#4ade80" font-size="9">3</text>
  <circle cx="165" cy="85" r="13" fill="#22c55e" fill-opacity="0.8" stroke="#4ade80" stroke-width="1.5"/>
  <text x="165" y="89" text-anchor="middle" fill="#4ade80" font-size="9">4</text>
  <circle cx="60" cy="125" r="13" fill="#22c55e" fill-opacity="1" stroke="#4ade80" stroke-width="1.5"/>
  <text x="60" y="129" text-anchor="middle" fill="#fff" font-size="9">5</text>
  <circle cx="95" cy="125" r="13" fill="#22c55e" fill-opacity="0.9" stroke="#4ade80" stroke-width="1.5"/>
  <text x="95" y="129" text-anchor="middle" fill="#fff" font-size="9">6</text>
  <text x="120" y="165" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">E[X] = (1+2+3+4+5+6)/6</text>
  <text x="120" y="182" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="900">= 3.5</text>
  <text x="120" y="200" text-anchor="middle" fill="#cbd5e1" font-size="10">গড় ফলাফল — কখনো ৩.৫ আসে না!</text>
  <text x="120" y="213" text-anchor="middle" fill="#cbd5e1" font-size="10">কিন্তু দীর্ঘে গড় এদিকে যায়</text>
  <rect x="240" y="40" width="160" height="180" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="320" y="58" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">দুটি পাশা (Linearity)</text>
  <text x="320" y="85" text-anchor="middle" fill="#e2e8f0" font-size="8">E[X+Y] = E[X]+E[Y]</text>
  <text x="320" y="105" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="900">= 3.5 + 3.5 = 7.0</text>
  <text x="320" y="128" text-anchor="middle" fill="#cbd5e1" font-size="10">X, Y independent হওয়া</text>
  <text x="320" y="140" text-anchor="middle" fill="#cbd5e1" font-size="10">দরকার নেই! সবসময় সত্য।</text>
  <text x="320" y="170" text-anchor="middle" fill="#fbbf24" font-size="8" font-weight="700">Var(X) = E[X²] − E[X]²</text>
  <text x="320" y="190" text-anchor="middle" fill="#fcd34d" font-size="8">~= 2.917 (পাশার ছড়ানো)</text>
  <text x="320" y="208" text-anchor="middle" fill="#cbd5e1" font-size="10">গড় থেকে কতটা দূরে</text>
  <rect x="430" y="40" width="140" height="180" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="500" y="60" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Law of Large Numbers</text>
  <text x="500" y="85" text-anchor="middle" fill="#e2e8f0" font-size="10">n → ∞ হলে</text>
  <text x="500" y="100" text-anchor="middle" fill="#e2e8f0" font-size="10">গড় → E[X]</text>
  <line x1="450" y1="180" x2="550" y2="180" stroke="#64748b" stroke-width="1.5"/>
  <line x1="450" y1="120" x2="450" y2="180" stroke="#64748b" stroke-width="1.5"/>
  <text x="448" y="125" text-anchor="end" fill="#64748b" font-size="10">5</text>
  <path d="M 450,130 Q 470,135 480,165 Q 500,177 550,178" fill="none" stroke="#4ade80" stroke-width="2"/>
  <text x="500" y="200" text-anchor="middle" fill="#4ade80" font-size="10">গড় ৩.৫-এ কনভার্জ</text>
  <text x="500" y="213" text-anchor="middle" fill="#cbd5e1" font-size="10">Chebyshev: P(|X-μ|≥kσ) ≤ 1/k²</text>
</svg>
</div>
<div class="svg-caption">চিত্র: গড় E[X] = প্রত্যাশিত ফলাফল, Var(X) = গড় থেকে ছড়ানো। Linearity of expectation বলে E[X+Y] = E[X]+E[Y] — independent হওয়া দরকার নেই। Law of Large Numbers: যত বেশি চেষ্টা, গড় তত E[X]-এর কাছে।</div>

<div class="secret-box">📊 <strong>E[X] = গড়, Var(X) = ছড়ানো। Linearity = জাদু।</strong> কিন্তু গড় সব বলে না — কিছু বিতরণ একটি বিশেষ আকৃতি অনুসরণ করে। সেই আকৃতি — bell curve। পরের দরজায়।</div>`,
  senior: {
    title: "Expectation ও Variance এক নজরে",
    body: `<table class="kv-table"><tr><th>সূত্র</th><th>বিবরণ</th></tr>
<tr><td class="hl">E[X]</td><td>Σ x·P(x) — গড় ফলাফল</td></tr>
<tr><td class="hl">Var(X)</td><td>E[X²] - E[X]² — ছড়ানো</td></tr>
<tr><td class="hl">Linearity</td><td>E[aX+bY] = aE[X]+bE[Y]</td></tr>
<tr><td class="hl">Law of Large Numbers</td><td>গড় → E[X] যখন n → ∞</td></tr>
<tr><td class="hl">Chebyshev</td><td>P(|X-μ| ≥ kσ) ≤ 1/k²</td></tr></table>`
  }
});

doors.push({
  num: 3,
  icon: "🔔",
  color: "#8b5cf6",
  name: "ঘণ্টা বক্ররেখার জাদু",
  subtitle: "The Bell Curve Magic",
  tech: "Normal Distribution — Gauss 1809, Central Limit Theorem, 68-95-99.7 rule, standard deviation, z-score",
  spirit: "সানিয়াহ — প্রকাশ, সবকিছু একটি কেন্দ্রে একত্র",
  secret: "Normal distribution: ঘণ্টা আকৃতি। μ কেন্দ্রে, σ প্রসারণ। 68% ডেটা μ±σ-এর মধ্যে। CLT: যেকোনো distribution-এর নমুনা গড় → normal! এটাই প্রকৃতির সবচেয়ে গুরুত্বপূর্ণ বিতরণ।",
  recall: {
    q: " Central Limit Theorem কী? 68-95-99.7 rule কী?",
    qen: "What is the Central Limit Theorem? What is the 68-95-99.7 rule?",
    a: "CLT: যেকোনো distribution থেকে নমুনা গড় → normal distribution। 68-95-99.7: μ±σ=৬৮%, μ±২σ=৯৫%, μ±৩σ=৯৯.৭%।",
    aen: "CLT: sample means from any distribution converge to normal. 68-95-99.7: μ±σ=68%, μ±2σ=95%, μ±3σ=99.7%."
  },
  story: `<p class="scene-setting">ফাতিমা (Door ২) তোমাকে গড় ও variance শিখিয়েছেন। এখন একটি গভীর সত্য — প্রকৃতিতে সবকিছু একটি ঘণ্টা আকৃতি অনুসরণ করে! মানুষের উচ্চতা, পরীক্ষার নম্বর, রক্তচাপ — সব কেন্দ্রে বেশি, দুই প্রান্তে কম। Gauss ১৮০৯ সালে এটা গাণিতিকভাবে দেখান। কিন্তু সবচেয়ে অদ্ভুত — Central Limit Theorem। যেকোনো বিতরণ থেকে নমুনা গড় নাও — সেটা normal হয়ে যায়!</p>
<p class="scene-setting en">Fatima (Door 2) taught you mean and variance. Now a deep truth — in nature, everything follows a bell shape! Human height, test scores, blood pressure — all concentrated at center, less at extremes. Gauss showed this mathematically in 1809. But most surprising — the Central Limit Theorem. Take sample means from ANY distribution — they become normal!</p>

<div class="dialogue"><strong>বক্ররেখা-যাজক ইউসুফ:</strong> Normal distribution: f(x) = (১/√(২πσ²))·e^(-(x-μ)²/(২σ²))। ভয় পেও না — শুধু মনে রাখো ঘণ্টা। μ = কেন্দ্র, σ = প্রসারণ। ৬৮-৯৫-৯৯.৭ নিয়ম: μ±σ এর মধ্যে ৬৮% ডেটা। μ±২σ = ৯৫%। μ±৩σ = ৯৯.৭%। মানুষের গড় উচ্চতা ৫'৭" (μ), σ = ৩"। তাহলে ৬৮% মানুষ ৫'৪" থেকে ৫'১০" এর মধ্যে। ৯৯.৭% ৪'১০" থেকে ৬'৪" এর মধ্যে।</div>
<div class="dialogue en"><strong>Curve Priest Yusuf:</strong> Normal distribution: the bell curve formula. Don't worry — just remember the bell. μ = center, σ = spread. 68-95-99.7 rule: 68% data within μ±σ. μ±2σ = 95%. μ±3σ = 99.7%. Human average height 5'7" (μ), σ = 3". Then 68% of people between 5'4" and 5'10". 99.7% between 4'10" and 6'4".</div>

<div class="code-block"># ── STEP 1: The Normal distribution (bell curve) ──
# The most important distribution in all of statistics.

normal_basics = """
THE NORMAL DISTRIBUTION:

Also called Gaussian distribution or "bell curve."
  PDF: f(x) = (1/(σ√(2π))) × exp(−(x−μ)²/(2σ²))

PARAMETERS:
  μ (mu): mean (center of the bell)
  σ (sigma): standard deviation (width of the bell)

KEY PROPERTY: 68-95-99.7 RULE
  68% of data within 1σ of mean
  95% within 2σ
  99.7% within 3σ

WHY IT'S EVERYWHERE (CLT):
  Sum/average of independent random variables → normal
  → Heights, weights, test scores, measurement errors
  → Stock returns (approximately)
  → IQ scores

STANDARD NORMAL (Z-distribution):
  Standardize: Z = (X − μ) / σ
  → Z is Normal(0, 1)
  → Z-table gives cumulative probabilities
  → Any normal can be converted to Z and back

Z-SCORES:
  Z = (x − μ) / σ
  → How many σ away from mean
  → Z > 2 → top 2.3% (unusual)
  → Z > 3 → top 0.13% (very unusual)
  → Z-score standardizes comparisons across distributions
"""

print(normal_basics)

# PYTHON: Normal distribution:
normal_code = """
import numpy as np
from scipy import stats

# Human height: mean=175cm, std=7cm
mu, sigma = 175, 7

# Generate samples:
heights = np.random.normal(mu, sigma, 100000)

# 68-95-99.7 rule verification:
p1 = np.mean(np.abs(heights - mu) <= 1 * sigma)
p2 = np.mean(np.abs(heights - mu) <= 2 * sigma)
p3 = np.mean(np.abs(heights - mu) <= 3 * sigma)
print(f"Within 1σ: {p1:.3f}")  # ~0.68
print(f"Within 2σ: {p2:.3f}")  # ~0.95
print(f"Within 3σ: {p3:.3f}")  # ~0.997

# Z-score: how unusual is 190cm?
z = (190 - mu) / sigma  # 2.14
print(f"190cm Z-score: {z:.2f}")
print(f"P(height > 190cm): {1 - stats.norm.cdf(z):.4f}")  # ~1.6%

# P(between 168 and 182)?
p = stats.norm.cdf(182, mu, sigma) - stats.norm.cdf(168, mu, sigma)
print(f"P(168 < height < 182): {p:.4f}")  # ~0.68
"""

print(normal_code)</div>

<div class="code-block"># ── STEP 2: The Binomial distribution ──
# Number of successes in n independent trials.

binomial = """
THE BINOMIAL DISTRIBUTION:

X ~ Binomial(n, p): number of successes in n trials,
each with probability p of success.

PMF: P(X=k) = C(n,k) × p^k × (1−p)^(n−k)

Mean: E[X] = np
Variance: Var(X) = np(1−p)

EXAMPLES:
  → 3 heads in 10 coin flips: Binomial(10, 0.5)
  → 7 defective items in batch of 100: Binomial(100, 0.07)
  → 45 successful free throws in 50 shots: Binomial(50, 0.9)

RELATIONSHIP TO NORMAL (De Moivre-Laplace):
  When n is large, Binomial(n,p) ≈ Normal(np, np(1−p))
  → This was the FIRST version of the Central Limit Theorem!
  → Rule of thumb: valid when np ≥ 5 and n(1−p) ≥ 5

BERNOULLI:
  Binomial(1, p) is called Bernoulli(p)
  → Single trial (success/failure)
  → Building block of Binomial
"""

print(binomial)

# PYTHON: Binomial:
binom_code = """
from scipy import stats
import numpy as np

# P(exactly 3 heads in 10 flips):
print(stats.binom.pmf(3, n=10, p=0.5))  # ~0.117

# P(at most 3 heads):
print(stats.binom.cdf(3, n=10, p=0.5))  # ~0.172

# Mean and variance:
n, p = 100, 0.3
print(f"E[X] = {n*p}")          # 30
print(f"Var(X) = {n*p*(1-p)}")  # 21

# Binomial → Normal approximation:
# Binomial(100, 0.3) ≈ Normal(30, sqrt(21))
binom_samples = np.random.binomial(100, 0.3, 10000)
print(f"Binomial: mean={binom_samples.mean():.2f}, std={binom_samples.std():.2f}")
print(f"Expected: mean=30.00, std={np.sqrt(21):.2f}")  # 4.58

# A/B testing: 100 visitors, 12 conversions (12% rate)
# Is this significantly different from expected 10%?
from scipy.stats import binom_test
# P(≥12 conversions | p=0.10, n=100)?
p_value = 1 - stats.binom.cdf(11, 100, 0.10)
print(f"P(≥12 conversions if true rate is 10%): {p_value:.4f}")
"""

print(binom_code)</div>

<div class="code-block"># ── STEP 3: The Poisson distribution ──
# Number of events in a time interval.

poisson = """
THE POISSON DISTRIBUTION:

X ~ Poisson(λ): number of events in a fixed time/space interval.
  λ = average rate of events per interval

PMF: P(X=k) = (λ^k × e^(−λ)) / k!

Mean: E[X] = λ
Variance: Var(X) = λ  (mean = variance!)

EXAMPLES:
  → Customers arriving per hour (λ = 10/hour)
  → Typos per page (λ = 2/page)
  → Earthquakes per year (λ = 5/year)
  → Server requests per second (λ = 100/sec)

POISSON PROCESS:
  Events happen at constant average rate, independently.
  → Inter-arrival times are Exponential(λ)
  → Number of arrivals in time t: Poisson(λt)

POISSON VS BINOMIAL:
  Binomial(n, p) → Poisson(λ=np) when n→∞, p→0, np=λ
  → Rare events with many trials → Poisson

APPLICATIONS:
  → Queueing theory (arrival rate)
  → Insurance (claims per year)
  → Quality control (defects per unit)
  → Web servers (requests per second)
"""

print(poisson)

# PYTHON: Poisson:
poisson_code = """
from scipy import stats
import numpy as np

# Call center: average 5 calls per minute
lam = 5

# P(exactly 3 calls in a minute):
print(stats.poisson.pmf(3, mu=lam))  # ~0.140

# P(no calls in a minute):
print(stats.poisson.pmf(0, mu=lam))  # ~0.0067 (e^-5)

# P(more than 10 calls):
print(1 - stats.poisson.cdf(10, mu=lam))  # ~0.014

# Mean = variance = λ:
samples = np.random.poisson(lam, 100000)
print(f"Mean: {samples.mean():.2f}")   # ~5
print(f"Variance: {samples.var():.2f}")  # ~5

# Simulate website traffic (requests per second):
for rate in [10, 50, 100, 1000]:
    reqs = np.random.poisson(rate, 10000)
    print(f"λ={rate:4d}/sec: mean={reqs.mean():.1f}, max={reqs.max()}")
    # max gives insight into capacity planning
"""

print(poisson_code)</div>

<div class="code-block"># ── STEP 4: The Exponential distribution ──
# Time between events in a Poisson process.

exponential = """
THE EXPONENTIAL DISTRIBUTION:

X ~ Exponential(λ): time between consecutive events.
  λ = rate parameter (events per unit time)

PDF: f(x) = λ × e^(−λx) for x ≥ 0

Mean: E[X] = 1/λ
Variance: Var(X) = 1/λ²

MEMORYLESS PROPERTY (unique to exponential!):
  P(X > s + t | X > s) = P(X > t)
  → The remaining wait time doesn't depend on how long you've waited!
  → "A light bulb that has lasted 1000 hours has the same
     remaining lifetime as a new one."

  This seems counterintuitive but mathematically true for exponential.

EXAMPLES:
  → Time between customer arrivals (λ = 10/hour → E[wait] = 6 min)
  → Time until radioactive decay
  → Time between server requests
  → Lifespan of electronic components (approximate)

RELATIONSHIP TO POISSON:
  If events follow Poisson(λ) per unit time:
  → Number of events in time t: Poisson(λt)
  → Time between events: Exponential(λ)
  → Time until k-th event: Gamma(k, λ)

EXAMPLE:
  Customers arrive at rate λ=10/hour
  → Number per hour: Poisson(10)
  → Time between customers: Exponential(10), E[wait] = 0.1 hours = 6 min
  → Time until 5th customer: Gamma(5, 10), E[wait] = 0.5 hours = 30 min
"""

print(exponential)

# PYTHON: Exponential:
exp_code = """
import numpy as np
from scipy import stats

# Server requests: average 1 per second (λ=1)
lam = 1.0

# E[wait] = 1/λ = 1 second
mean_wait = 1 / lam

# P(wait > 2 seconds)?
print(f"P(wait > 2s): {1 - stats.expon.cdf(2, scale=1/lam):.4f}")  # e^-2 ≈ 0.135

# P(wait between 0.5 and 1.5)?
p = stats.expon.cdf(1.5, scale=1/lam) - stats.expon.cdf(0.5, scale=1/lam)
print(f"P(0.5 < wait < 1.5): {p:.4f}")  # ~0.383

# Memoryless property verification:
samples = np.random.exponential(1/lam, 100000)
# Among those that waited > 1s, how many waited > 3s total?
waited_1 = samples[samples > 1]
print(f"P(wait > 3 | wait > 1): {np.mean(waited_1 > 3):.4f}")
print(f"P(wait > 2)          : {np.mean(samples > 2):.4f}")
# These should be approximately equal (memoryless!)
"""

print(exp_code)</div>

<div class="code-block"># ── STEP 5: Other important distributions ──
# A catalog of useful probability distributions.

others = """
OTHER DISTRIBUTIONS:

1. GEOMETRIC(p): trials until first success
   P(X=k) = (1−p)^(k−1) × p
   E[X] = 1/p
   Example: coin flips until first heads

2. NEGATIVE BINOMIAL: trials until r-th success
   Generalization of Geometric

3. GAMMA(α, β): sum of α exponentials
   Used in Bayesian statistics (conjugate prior)

4. BETA(α, β): distribution on [0,1]
   Perfect for probabilities
   Conjugate prior for Binomial

5. UNIFORM(a, b): all values equally likely
   E[X] = (a+b)/2, Var = (b−a)²/12

6. CHI-SQUARED (χ²): sum of squared standard normals
   Used in hypothesis testing (goodness of fit)

7. STUDENT'S t: like normal but heavier tails
   Used when sample size is small
   → t-test, confidence intervals

8. F-DISTRIBUTION: ratio of chi-squareds
   Used in ANOVA (comparing variances)

9. MULTINOMIAL: generalization of Binomial
   Multiple categories (not just success/failure)

10. LOGNORMAL: exp(normal)
    → Stock prices, income distribution
    → Heavy right tail

WHEN TO USE WHICH:
  Counting events in time → Poisson
  Time between events → Exponential
  Successes in trials → Binomial
  Natural phenomena → Normal
  Probabilities → Beta
  Ratios/variances → F or Chi-squared
"""

print(others)

# PYTHON: Distribution comparison:
compare_code = """
import numpy as np
from scipy import stats

# Compare distributions:
dists = {
    'Normal(0,1)': np.random.normal(0, 1, 100000),
    'Uniform(-2,2)': np.random.uniform(-2, 2, 100000),
    'Exponential(1)': np.random.exponential(1, 100000),
    'Poisson(5)': np.random.poisson(5, 100000),
}

for name, data in dists.items():
    print(f"{name:20s}: mean={data.mean():7.3f}, std={data.std():7.3f}, "
          f"min={data.min():7.3f}, max={data.max():7.3f}")

# Beta distribution (for probabilities):
# Beta(2,2): symmetric around 0.5
beta_samples = np.random.beta(2, 2, 100000)
print(f"Beta(2,2): mean={beta_samples.mean():.3f}")  # ~0.5

# Beta(8,2): skewed toward 1
beta_skewed = np.random.beta(8, 2, 100000)
print(f"Beta(8,2): mean={beta_skewed.mean():.3f}")  # ~0.8
"""

print(compare_code)</div>

<div class="code-block"># ── STEP 6: Distributions in practice ──
# Choosing and applying the right distribution.

best_practices = [
    "Normal: natural phenomena (heights, errors, CLT)",
    "Binomial: successes in n trials",
    "Poisson: events in time/space (rate λ)",
    "Exponential: time between Poisson events",
    "Geometric: trials until first success",
    "Beta: modeling probabilities (Bayesian)",
    "Uniform: all outcomes equally likely",
    "68-95-99.7 rule: within 1σ, 2σ, 3σ of mean",
    "Z-score: (x−μ)/σ standardizes comparisons",
    "Binomial → Normal when np ≥ 5 and n(1−p) ≥ 5",
    "Binomial → Poisson when n→∞, p→0, np=λ",
    "Exponential is memoryless (unique property)",
    "Chi-squared for goodness-of-fit tests",
    "t-distribution for small samples",
    "Lognormal for positive skewed data (income)",
]

print("DISTRIBUTIONS BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Distribution     │ Mean / Variance                 │
# ├──────────────────┼──────────────────────────────────┤
# │ Normal(μ,σ)     │ μ / σ²                          │
# │ Binomial(n,p)   │ np / np(1−p)                   │
# │ Poisson(λ)      │ λ / λ                           │
# │ Exponential(λ)  │ 1/λ / 1/λ²                     │
# │ Uniform(a,b)    │ (a+b)/2 / (b−a)²/12           │
# │ Geometric(p)    │ 1/p / (1−p)/p²                 │
# │ Beta(α,β)      │ α/(α+β) / αβ/((α+β)²(α+β+1))│
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout info"><span class="co-icon">🔔</span><div><strong>Normal Distribution বৈশিষ্ট্য:</strong><br>
<strong>Shape:</strong> ঘণ্টা — কেন্দ্রে বেশি, প্রান্তে কম<br>
<strong>μ (mean):</strong> কেন্দ্র<br>
<strong>σ (std dev):</strong> প্রসারণ<br>
<strong>68-95-99.7:</strong> μ±σ, μ±২σ, μ±৩σ<br>
<strong>Z-score:</strong> (x-μ)/σ — কত σ দূরে<br>
<strong>CLT:</strong> যেকোনো distribution → sample mean → normal</div></div>

<div class="verse">وَالْأَرْضِ وَمَا طَحَاهَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"পৃথিবী ও যিনি তাকে বিস্তৃত করেছেন।" — কুরআন ৯১:৬</div>

<p class="scene-setting">সানিয়াহ — প্রকাশ, বিস্তার। Normal distribution সেই প্রকাশের রূপ — সবকিছু একটি কেন্দ্রে একত্র হয়, তারপর বিস্তৃত হয়। প্রকৃতির সব পরিমাপ — উচ্চতা, ওজন, তাপমাত্রা — এই ঘণ্টা অনুসরণ করে। CLT আরও গভীর — যেকোনো বিতরণ থেকেই গড় এই আকৃতি ধারণ করে। এটাই প্রকৃতির গণিত।</p>
<p class="scene-setting en">Saniyah — manifestation, spreading. Normal distribution is the form of that manifestation — everything gathers at a center, then spreads. All natural measurements — height, weight, temperature — follow this bell. CLT goes deeper — the mean of ANY distribution takes this shape. This is nature's mathematics.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৪ (Distributions):</strong> normal, binomial, Poisson — সব বিতরণ। Book ৩৩ (Loom of Reason) Door ৫ (Bayesian): normal = prior হিসেবে।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🔔 Normal Distribution: ঘণ্টা বক্ররেখা</text>
  <rect x="20" y="40" width="360" height="170" rx="8" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="360" y2="180" stroke="#64748b" stroke-width="1.5"/>
  <path d="M 50,180 Q 120,180 160,140 Q 190,60 200,55 Q 210,60 240,140 Q 280,180 360,180" fill="#8b5cf6" fill-opacity="0.2" stroke="#a78bfa" stroke-width="2.5"/>
  <line x1="200" y1="55" x2="200" y2="180" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="200" y="50" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">μ</text>
  <line x1="140" y1="100" x2="140" y2="180" stroke="#22d3ee" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="260" y1="100" x2="260" y2="180" stroke="#22d3ee" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="140" y="195" text-anchor="middle" fill="#7dd3fc" font-size="10">μ−σ</text>
  <text x="200" y="195" text-anchor="middle" fill="#fcd34d" font-size="10">μ</text>
  <text x="260" y="195" text-anchor="middle" fill="#7dd3fc" font-size="10">μ+σ</text>
  <line x1="90" y1="140" x2="90" y2="180" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="310" y1="140" x2="310" y2="180" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="90" y="195" text-anchor="middle" fill="#4ade80" font-size="10">μ−2σ</text>
  <text x="310" y="195" text-anchor="middle" fill="#4ade80" font-size="10">μ+2σ</text>
  <rect x="60" y="120" width="280" height="15" fill="#22d3ee" fill-opacity="0.15"/>
  <text x="200" y="131" text-anchor="middle" fill="#7dd3fc" font-size="10" font-weight="700">μ±σ: 68%</text>
  <rect x="90" y="143" width="220" height="12" fill="#22c55e" fill-opacity="0.15"/>
  <text x="200" y="152" text-anchor="middle" fill="#4ade80" font-size="10">μ±2σ: 95%</text>
  <text x="200" y="172" text-anchor="middle" fill="#f87171" font-size="10">μ±3σ: 99.7%</text>
  <rect x="400" y="40" width="170" height="100" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="485" y="60" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="700">68-95-99.7 নিয়ম</text>
  <text x="410" y="80" fill="#7dd3fc" font-size="8">μ±1σ → 68% ডেটা</text>
  <text x="410" y="97" fill="#4ade80" font-size="8">μ±2σ → 95% ডেটা</text>
  <text x="410" y="114" fill="#f87171" font-size="8">μ±3σ → 99.7% ডেটা</text>
  <text x="410" y="132" fill="#cbd5e1" font-size="10">Z-score = (x−μ)/σ</text>
  <rect x="400" y="150" width="170" height="60" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="485" y="170" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Central Limit Theorem</text>
  <text x="485" y="186" text-anchor="middle" fill="#e2e8f0" font-size="10">যেকোনো distribution</text>
  <text x="485" y="198" text-anchor="middle" fill="#e2e8f0" font-size="10">থেকে নমুনা গড়</text>
  <text x="485" y="210" text-anchor="middle" fill="#4ade80" font-size="10">→ normal হয়ে যায়!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Normal distribution — ঘণ্টা আকৃতি। μ কেন্দ্রে, σ প্রসারণ। 68-95-99.7 নিয়ম: μ±σ-এর মধ্যে ৬৮%, μ±2σ-এ ৯৫%, μ±3σ-এ ৯৯.৭%। CLT: যেকোনো বিতরণ থেকে নমুনা গড় normal হয়।</div>

<div class="secret-box">🔔 <strong>Normal = ঘণ্টা। CLT = যেকোনো থেকে normal। 68-95-99.7।</strong> কিন্তু কিছু ঘটনা স্মৃতিহীন — অতীত ভবিষ্যতকে প্রভাবিত করে না। সেই বিশেষ ক্ষেত্র — memoryless। পরের দরজায়।</div>`,
  senior: {
    title: "Normal Distribution এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Gauss (1809)</td><td>Normal distribution গাণিতিক রূপ</td></tr>
<tr><td class="hl">μ (mean)</td><td>কেন্দ্র</td></tr>
<tr><td class="hl">σ (std dev)</td><td>প্রসারণ</td></tr>
<tr><td class="hl">68-95-99.7</td><td>μ±σ, μ±২σ, μ±৩σ</td></tr>
<tr><td class="hl">Z-score</td><td>(x-μ)/σ</td></tr>
<tr><td class="hl">CLT</td><td>sample mean → normal</td></tr></table>`
  }
});

doors.push({
  num: 4,
  icon: "🎲",
  color: "#8b5cf6",
  name: "স্মৃতিহীন পথিক",
  subtitle: "The Memoryless Walker",
  tech: "Geometric & Exponential Distribution — memoryless property, hazard rate, waiting time, M/M/1 queue",
  spirit: "তাওয়াক্কুল — ভরসা, ফল আল্লাহর হাতে",
  secret: "Memoryless: P(X>s+t | X>s) = P(X>t)। অতীত ভবিষ্যতকে প্রভাবিত করে না! বাস ১০ মিনিট দেরি করেছে — পরের বাস এখনও একই সম্ভাবনায় আসে। Geometric = discrete, Exponential = continuous memoryless।",
  recall: {
    q: " Memoryless property কী? কোন দুটি distribution memoryless?",
    qen: "What is the memoryless property? Which two distributions are memoryless?",
    a: "P(X>s+t | X>s) = P(X>t)। Geometric (discrete) ও Exponential (continuous) — শুধু এই দুটি! অতীত প্রভাব ফেলে না।",
    aen: "P(X>s+t | X>s) = P(X>t). Geometric (discrete) and Exponential (continuous) — only these two! Past has no effect."
  },
  story: `<p class="scene-setting">ইউসুফ (Door ৩) তোমাকে normal distribution শিখিয়েছেন। এখন একটি অদ্ভুত ধারণা — memoryless। তুমি বাসের জন্য অপেক্ষা করছো। ১০ মিনিট হলো। সাধারণ চিন্তায় — বাস এখন বেশি সম্ভব! কিন্তু memoryless property বলে — না! বাস আসার সম্ভাবনা এখনও একই। অতীত ১০ মিনিট প্রভাব ফেলে না। এটাই exponential distribution।</p>
<p class="scene-setting en">Yusuf (Door 3) taught you normal distribution. Now a strange concept — memoryless. You wait for a bus. 10 minutes passed. Normally you'd think — the bus is more likely now! But memoryless property says — no! The probability of the bus arriving is the same. The past 10 minutes have no effect. This is exponential distribution.</p>

<div class="dialogue"><strong>স্মৃতিহীন-পথিক আমিন:</strong> Memoryless = অতীত প্রভাবহীন। P(X>২০ | X>১০) = P(X>১০)। বাস ১০ মিনিট দেরি করেছে? পরের বাস এখনও একই rate-এ আসে। Exponential: f(x) = λe^(-λx)। λ = rate (বাস প্রতি ঘণ্টায়)। Mean = ১/λ। Geometric = discrete version — কতবার চেষ্টা করলে প্রথম success? M/M/১ queue: Markovian arrival, Markovian service, ১ server।</div>
<div class="dialogue en"><strong>Memoryless Walker Amin:</strong> Memoryless = past has no effect. P(X>20 | X>10) = P(X>10). Bus 10 minutes late? Next bus arrives at the same rate. Exponential: f(x) = λe^(-λx). λ = rate. Mean = 1/λ. Geometric = discrete version — how many trials until first success? M/M/1 queue: Markovian arrival, Markovian service, 1 server.</div>

<div class="code-block"># ── STEP 1: The Memoryless property ──
# Only exponential and geometric are memoryless.

memoryless = """
THE MEMORYLESS PROPERTY:

A distribution is MEMORYLESS if:
  P(X > s + t | X > s) = P(X > t)

  "The future doesn't depend on the past."

ONLY TWO distributions are memoryless:
  1. EXPONENTIAL (continuous): time between events
  2. GEOMETRIC (discrete): trials until first success

EXPONENTIAL EXAMPLE (bus arrivals):
  Buses arrive at rate λ = 1 per 15 minutes
  E[wait] = 15 minutes

  You've waited 10 minutes. How much longer?
  → Remaining wait is STILL Exponential(λ)
  → E[remaining] = 15 minutes (same as from start!)

  P(total > 20 | already waited 10) = P(additional > 10)
  This is the memoryless property.

WHY IT SEEMS COUNTERINTUITIVE:
  In real life, if a bus is 10 minutes late, it's probably coming soon.
  But exponential says: remaining time is SAME as fresh start.

  Real bus arrivals are NOT memoryless (schedule info matters).
  But POISSON processes (random arrivals) are memoryless.

GEOMETRIC EXAMPLE (coin flips):
  P(heads) = 0.3
  You've flipped 5 tails. How many more until first heads?
  → Still Geometric(0.3), E[additional] = 1/0.3 = 3.3 flips

  "The dice has no memory."
"""

print(memoryless)

# PYTHON: Memoryless verification:
ml_code = """
import numpy as np
from scipy.stats import expon

# Exponential: λ = 1/15 (bus every 15 min on average)
lam = 1/15
scale = 1/lam  # = 15

# P(wait > 10)?
p10 = expon.sf(10, scale=scale)
print(f"P(X > 10) = {p10:.4f}")  # ~0.5134

# P(wait > 20)?
p20 = expon.sf(20, scale=scale)
print(f"P(X > 20) = {p20:.4f}")  # ~0.2636

# Memoryless: P(X>20 | X>10) should equal P(X>10)?
conditional = p20 / p10
print(f"P(X>20 | X>10) = {conditional:.4f}")  # ~0.5134
print(f"P(X>10)        = {p10:.4f}")          # ~0.5134
# EQUAL! Memoryless proven.

# Geometric (discrete): P(success) = 0.3
from scipy.stats import geom
p = 0.3
print(f"E[flips until heads] = {1/p:.1f}")  # 3.3
print(f"P(first heads on 3rd flip) = {geom.pmf(3, p):.4f}")  # 0.147
"""

print(ml_code)</div>

<div class="code-block"># ── STEP 2: Queueing theory (M/M/1) ──
# Practical application of exponential distribution.

queueing = """
QUEUEING THEORY:

M/M/1 QUEUE:
  M = Markovian (exponential inter-arrival and service times)
  M = Markovian service time
  1 = single server

PARAMETERS:
  λ = arrival rate (customers per unit time)
  μ = service rate (customers served per unit time)
  ρ = λ/μ = utilization (must be < 1 for stability)

KEY FORMULAS:
  Average number in system: L = ρ / (1 − ρ) = λ / (μ − λ)
  Average wait time:        W = 1 / (μ − λ) = L / λ (Little's Law)
  Average queue length:     Lq = ρ² / (1 − ρ)
  Average wait in queue:    Wq = ρ / (μ(μ − λ))

LITTLE'S LAW (applies to ALL queues):
  L = λ × W
  (Average number in system = arrival rate × average wait time)
  → Deceptively simple, universally true!

EXAMPLE:
  Coffee shop: λ = 10 customers/hour, μ = 15/hour
  ρ = 10/15 = 0.667 (67% utilization)
  L = 0.667 / (1 − 0.667) = 2 customers on average
  W = 2 / 10 = 0.2 hours = 12 minutes average wait

WHEN ρ → 1 (server almost overloaded):
  → L → ∞, W → ∞
  → Queue grows without bound
  → This is why 80%+ utilization is dangerous

REAL-WORLD APPLICATIONS:
  → Server capacity planning (λ = requests/sec)
  → Call center staffing
  → Traffic engineering
  → Manufacturing throughput
"""

print(queueing)

# PYTHON: M/M/1 queue simulation:
queue_code = """
import numpy as np

def mm1_simulation(arrival_rate, service_rate, hours=8):
    \"\"\"Simulate M/M/1 queue.\"\"\"
    n_customers = 10000

    # Exponential inter-arrival and service times:
    arrivals = np.random.exponential(1/arrival_rate, n_customers)
    services = np.random.exponential(1/service_rate, n_customers)

    # Calculate wait times:
    arrival_times = np.cumsum(arrivals)
    start_service = np.maximum(arrival_times, np.cumsum(services) + 
                                np.concatenate([[0], np.cumsum(services)[:-1] - arrivals[1:]]))

    # Simplified: track queue
    queue = 0
    total_wait = 0
    for i in range(n_customers):
        total_wait += queue * arrivals[i]
        queue = max(0, queue - services[i] * arrival_rate)
        queue += 1

    return total_wait / n_customers

# Coffee shop: λ=10/hr, μ=15/hr
lam, mu = 10, 15
rho = lam / mu
print(f"Utilization ρ = {rho:.3f}")

# Theoretical values:
L = rho / (1 - rho)
W = L / lam
print(f"Theoretical L (avg in system): {L:.2f}")
print(f"Theoretical W (avg wait): {W:.2f} hours = {W*60:.1f} min")

# What if arrival rate increases to 14?
lam2 = 14
rho2 = lam2 / mu
L2 = rho2 / (1 - rho2)
W2 = L2 / lam2
print(f"If λ=14: L={L2:.1f}, W={W2:.2f}h = {W2*60:.1f}min")
# Queue explodes near capacity!
"""

print(queue_code)</div>

<div class="code-block"># ── STEP 3: Poisson process ──
# The foundation of event-based probability.

poisson_process = """
POISSON PROCESS:

A process where events happen:
  1. Independently (one event doesn't affect another)
  2. At constant average rate λ
  3. One at a time (no simultaneous events)

KEY PROPERTIES:
  → Number of events in time t: Poisson(λt)
  → Time between events: Exponential(λ)
  → Time until k-th event: Gamma(k, λ)
  → Memoryless: past doesn't predict future

EXAMPLES:
  → Customers arriving at store (λ = 10/hour)
  → Server requests (λ = 1000/sec)
  → Radioactive decay (λ = constant)
  → Emails received (λ = 5/hour)

POISSON PROCESS ALLOWS US TO ANSWER:
  "How many customers in the next 30 minutes?" → Poisson(λ × 0.5)
  "How long until the next customer?" → Exponential(λ)
  "How long until the 5th customer?" → Gamma(5, λ)

SUPERPOSITION:
  Two independent Poisson processes (λ₁, λ₂) combined
  → Single Poisson(λ₁ + λ₂)

THINNING:
  Each event is type A with probability p
  → Type A events: Poisson(λp)
  → Type B events: Poisson(λ(1−p))

NON-HOMOGENEOUS POISSON:
  Rate λ(t) varies with time
  → Rush hour: high λ, nighttime: low λ
  → More realistic for traffic, calls
"""

print(poisson_process)

# PYTHON: Poisson process simulation:
pp_code = """
import numpy as np

# Simulate Poisson process: λ = 5 events per hour
lam = 5  # rate per hour
n_hours = 1000

# Method 1: Count events per hour:
counts = np.random.poisson(lam, n_hours)
print(f"Mean events/hour: {counts.mean():.2f}")  # ~5
print(f"Variance: {counts.var():.2f}")            # ~5 (mean = var)

# Method 2: Generate inter-arrival times:
inter_arrivals = np.random.exponential(1/lam, 10000)
arrival_times = np.cumsum(inter_arrivals)

# Count events in first 100 hours:
events_in_100h = np.sum(arrival_times < 100)
print(f"Events in 100 hours: {events_in_100h}")  # ~500
print(f"Expected: {100 * lam}")                  # 500

# Time until 10th event (Gamma distribution):
tenth_event_times = []
for _ in range(10000):
    times = np.cumsum(np.random.exponential(1/lam, 10))
    tenth_event_times.append(times[-1])

print(f"Mean time to 10th event: {np.mean(tenth_event_times):.2f}h")  # ~2.0
print(f"Expected (10/λ): {10/lam:.2f}h")  # 2.0
"""

print(pp_code)</div>

<div class="code-block"># ── STEP 4: Reliability engineering ──
# Failure rates and system reliability.

reliability = """
RELIABILITY ENGINEERING:

RELIABILITY FUNCTION:
  R(t) = P(system survives beyond time t) = P(X > t)

FAILURE RATE (hazard function):
  h(t) = f(t) / R(t)
  → Instantaneous rate of failure at time t

BATH-TUB CURVE:
  Three phases of product lifecycle:
  1. INFANT MORTALITY (decreasing failure rate)
     → Manufacturing defects, early failures
  2. USEFUL LIFE (constant failure rate)
     → Random failures → Exponential distribution
  3. WEAR-OUT (increasing failure rate)
     → Aging, degradation → Weibull distribution

MTBF (Mean Time Between Failures):
  MTBF = 1 / λ (for exponential)
  → Server MTBF = 10,000 hours → λ = 0.0001/hour

MTTR (Mean Time To Repair):
  Average time to fix a failed system

AVAILABILITY:
  A = MTBF / (MTBF + MTTR)
  → "99.9% availability" = 8.76 hours downtime/year
  → "99.99%" = 52.6 minutes/year
  → "99.999%" (five nines) = 5.26 minutes/year

SERIES SYSTEM:
  R_system = R₁ × R₂ × ... × Rₙ
  → If ANY component fails, system fails
  → Reliability DECREASES with more components

PARALLEL SYSTEM:
  R_system = 1 − (1−R₁)(1−R₂)...(1−Rₙ)
  → System works if ANY component works
  → Reliability INCREASES with redundancy
"""

print(reliability)

# PYTHON: Reliability calculations:
rel_code = """
import numpy as np

# Server reliability: MTBF = 10000 hours
mtbf = 10000
lam = 1/mtbf

# R(t) = P(survive beyond t):
def reliability(t, rate):
    return np.exp(-rate * t)

# Probability server survives 1 year (8760 hours):
R_1yr = reliability(8760, lam)
print(f"R(1 year) = {R_1yr:.4f}")  # ~0.416

# Series system: 5 servers, each R=0.9:
R_series = 0.9 ** 5
print(f"Series (5 servers): {R_series:.4f}")  # 0.5905

# Parallel system: 3 redundant servers, each R=0.9:
R_parallel = 1 - (1-0.9)**3
print(f"Parallel (3 redundant): {R_parallel:.4f}")  # 0.999

# Availability: MTBF=10000h, MTTR=10h:
A = 10000 / (10000 + 10)
print(f"Availability: {A:.6f}")  # 0.999001
print(f"Downtime/year: {(1-A)*8760:.1f} hours")  # ~8.75 hours

# Five nines (99.999%):
five_nines = 0.99999
print(f"99.999% downtime/year: {(1-five_nines)*8760*60:.1f} min")  # 5.26 min
"""

print(rel_code)</div>

<div class="code-block"># ── STEP 5: Continuous-time Markov chains ──
# Beyond memoryless: systems with states.

ctmc = """
CONTINUOUS-TIME MARKOV CHAINS (CTMC):

A stochastic process where:
  1. System is in one of several STATES
  2. Transitions between states follow exponential times
  3. Memoryless: next state depends only on current state

EXAMPLE: Server with 3 states
  IDLE → BUSY (rate λ = arrival rate)
  BUSY → IDLE (rate μ = service rate)
  BUSY → OVERLOAD (if queue too long)

TRANSITION RATE MATRIX (Q):
  Q[i][j] = rate of transitioning from state i to j
  Diagonal: Q[i][i] = −Σ Q[i][j] (total rate out of state i)

STEADY STATE (π):
  After long time, system reaches equilibrium.
  π_i = long-run fraction of time in state i.
  Found by solving: πQ = 0 with Σπ_i = 1

APPLICATIONS:
  → Queueing systems (M/M/1, M/M/c)
  → Inventory management
  → Reliability (up/down states)
  → Biology (population dynamics)
  → Finance (credit ratings)

DISCRETE-TIME MARKOV CHAINS (DTMC):
  Similar but transitions happen at discrete time steps.
  → Google PageRank (random walk on web graph)
  → Weather prediction (sunny → cloudy → rainy)
  → Board games (Monopoly position)
"""

print(ctmc)</div>

<div class="code-block"># ── STEP 6: Memoryless distribution best practices ──
# Apply memoryless concepts effectively.

best_practices = [
    "Only Exponential and Geometric are memoryless",
    "Memoryless: P(X>s+t | X>s) = P(X>t)",
    "Exponential: time between Poisson events",
    "Geometric: trials until first success",
    "M/M/1 queue: exponential arrival + service",
    "Little's Law: L = λ × W (universal)",
    "Utilization ρ = λ/μ must be < 1 for stability",
    "ρ → 1 causes queue explosion",
    "Poisson process: events at rate λ",
    "Reliability: R(t) = e^(−λt) for exponential",
    "MTBF = 1/λ, Availability = MTBF/(MTBF+MTTR)",
    "Series system: R = R₁×R₂×...×Rₙ (decreases)",
    "Parallel system: R = 1−(1−R₁)(1−R₂)... (increases)",
    "Five nines (99.999%) = 5.26 min downtime/year",
    "Bath-tub curve: infant mortality, useful life, wear-out",
]

print("MEMORYLESS DISTRIBUTION BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Formula                         │
# ├──────────────────┼──────────────────────────────────┤
# │ Memoryless       │ P(X>s+t|X>s) = P(X>t)         │
# │ M/M/1 L          │ ρ/(1−ρ) = λ/(μ−λ)            │
# │ M/M/1 W          │ 1/(μ−λ)                       │
# │ Little's Law     │ L = λ × W                      │
# │ Reliability R(t) │ e^(−λt)                        │
# │ Series           │ R₁ × R₂ × ...                  │
# │ Parallel         │ 1 − (1−R₁)(1−R₂)...          │
# │ Availability     │ MTBF / (MTBF + MTTR)           │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout info"><span class="co-icon">🎲</span><div><strong>Memoryless distributions:</strong><br>
<strong>Exponential (continuous):</strong> সময় পর্যন্ত অপেক্ষা — bus, server, radioactive decay<br>
<strong>Geometric (discrete):</strong> কতবার চেষ্টা — coin flip পর্যন্ত heads<br>
<strong>λ (rate):</strong> ঘটনার হার। Mean = ১/λ<br>
<strong>M/M/1 Queue:</strong> arrival = exponential, service = exponential<br>
<strong>Poisson Process:</strong> events per unit time = Poisson(λ)</div></div>

<div class="verse">قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"বলো, আমাদের কেবল তাই হবে যা আল্লাহ আমাদের জন্য লিখেছেন।" — কুরআন ৯:৫১</div>

<p class="scene-setting">তাওয়াক্কুল — ভরসা। Memoryless property সেই ভরসার গাণিতিক রূপ — অতীত ভবিষ্যতকে নির্ধারণ করে না। ফল আল্লাহর হাতে। বাস ১০ মিনিট দেরি — এর মানে এই নয় এখন বেশি সম্ভব। প্রতিটি মুহূর্ত নতুন — অতীত থেকে স্বাধীন। এটাই memoryless-এর দর্শন।</p>
<p class="scene-setting en">Tawakkul — trust. Memoryless property is the mathematical form of that trust — the past does not determine the future. Outcomes are in Allah's hands. Bus 10 minutes late — doesn't mean more likely now. Each moment is new — free from the past. This is the philosophy of memoryless.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৪ (Distributions):</strong> Poisson, exponential, geometric — সব বিতরণ। Book ৩৮ (OS) Door ৬ (Scheduler): queue theory = M/M/1।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎲 Memoryless: Exponential Distribution</text>
  <path d="M 30 200 Q 60 60 100 120 Q 140 170 200 195 Q 300 210 500 210" fill="none" stroke="#a855f7" stroke-width="2.5"/>
  <text x="380" y="200" fill="#c084fc" font-size="10">P(T &gt; t) = e^(-lambda*t)</text>
  <line x1="30" y1="210" x2="550" y2="210" stroke="#64748b" stroke-width="0.5"/>
  <line x1="30" y1="50" x2="30" y2="210" stroke="#64748b" stroke-width="0.5"/>
  <line x1="100" y1="120" x2="100" y2="210" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="100" y="225" text-anchor="middle" fill="#fcd34d" font-size="10">t=1 (63% happened)</text>
  <line x1="200" y1="195" x2="200" y2="210" stroke="#22d3ee" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="200" y="225" text-anchor="middle" fill="#7dd3fc" font-size="10">t=2 (86%)</text>
  <line x1="350" y1="205" x2="350" y2="210" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="350" y="225" text-anchor="middle" fill="#4ade80" font-size="10">t=5 (99%)</text>
  <text x="290" y="245" text-anchor="middle" fill="#94a3b8" font-size="10">Memoryless: P(T&gt;t+s | T&gt;t) = P(T&gt;s) — past doesn't matter!</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Exponential distribution — স্মৃতিহীন। অতীত ভবিষ্যতকে প্রভাবিত করে না।</div>

<div class="secret-box">🎲 <strong>Memoryless = অতীত প্রভাবহীন। Exponential ও Geometric।</strong> কিন্তু একটি বিপদ লুকানো — বিরল ঘটনা। কখনো কখনো চরম ঘটনা ঘটে। সেই ঝুঁকি — tail risk। সেই পরের দরজায়।</div>`,
  senior: {
    title: "Memoryless Distributions এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Exponential</td><td>continuous memoryless — wait time</td></tr>
<tr><td class="hl">Geometric</td><td>discrete memoryless — trials to success</td></tr>
<tr><td class="hl">Memoryless</td><td>P(X>s+t|X>s) = P(X>t)</td></tr>
<tr><td class="hl">λ (rate)</td><td>Mean = 1/λ</td></tr>
<tr><td class="hl">M/M/1</td><td>exponential arrival + service queue</td></tr>
<tr><td class="hl">Poisson Process</td><td>events per time unit</td></tr></table>`
  }
});

doors.push({
  num: 5,
  icon: "🛡️",
  color: "#8b5cf6",
  name: "সূচকীয় ঢাল",
  subtitle: "The Exponential Shield",
  tech: "Concentration Inequalities — Markov, Chebyshev, Chernoff bound, tail risk, black swan events (Taleb)",
  spirit: "হিফযু — সুরক্ষা, বিরল কিন্তু বিধ্বংসী ঘটনা থেকে",
  secret: "Chebyshev: P(|X-μ|≥kσ) ≤ ১/k²। Markov: P(X≥a) ≤ E[X]/a। Chernoff: P(X≥(১+δ)μ) ≤ e^(-δ²μ/৩)। এই সূত্রগুলো বলে — বিরল ঘটনা কতটা বিরল। কিন্তু বিরল মানে অসম্ভব নয়!",
  recall: {
    q: " Chebyshev inequality কী? Tail risk কী?",
    qen: "What is Chebyshev's inequality? What is tail risk?",
    a: "Chebyshev: P(|X-μ|≥kσ) ≤ ১/k²। k=২ হলে ≤ ২৫%। Tail risk: বিরল কিন্তু বিধ্বংসী ঘটনা। Black Swan — অকল্পনীয় কিন্তু ঘটে।",
    aen: "Chebyshev: P(|X-μ|≥kσ) ≤ 1/k². k=2 → ≤25%. Tail risk: rare but devastating events. Black Swan — unimaginable but happens."
  },
  story: `<p class="scene-setting">আমিন (Door ৪) তোমাকে memoryless শিখিয়েছেন। কিন্তু একটি বিপদ — বিরল ঘটনা। সাধারণত সব ঠিক থাকে। কিন্তু মাঝে মাঝে — এমন কিছু ঘটে যা কেউ ভাবেনি। ২০০৮ financial crisis। COVID-19। Nassim Taleb একে বলেন Black Swan — বিরল, বিধ্বংসী, পরে বোঝা যায়। Concentration inequalities বলে — এই বিরল ঘটনা গাণিতিকভাবে কতটা বিরল।</p>
<p class="scene-setting en">Amin (Door 4) taught you memoryless. But a danger — rare events. Usually everything is fine. But sometimes — something happens that nobody imagined. 2008 financial crisis. COVID-19. Nassim Taleb calls them Black Swans — rare, devastating, understood in hindsight. Concentration inequalities tell us — mathematically how rare these events are.</p>

<div class="dialogue"><strong>ঝুঁকি-প্রহরী ওমর:</strong> Markov inequality: P(X≥a) ≤ E[X]/a। সবচেয়ে সহজ — শুধু E[X] লাগে। Chebyshev: P(|X-μ|≥kσ) ≤ ১/k²। কিছুটা শক্ত — Var লাগে। k=৩ হলে সর্বোচ্চ ১/৯ ~= ১১%। কিন্তু normal-এ ৩σ = ০.৩%। Chebyshev conservative! Chernoff: সবচেয়ে শক্ত — exponential decay। Hoeffding: sample mean কতটা নির্ভরযোগ্য। এগুলো tail risk মাপে।</div>
<div class="dialogue en"><strong>Risk Guardian Umar:</strong> Markov inequality: P(X≥a) ≤ E[X]/a. Simplest — only needs E[X]. Chebyshev: P(|X-μ|≥kσ) ≤ 1/k². A bit stronger — needs Var. k=3 gives max 1/9 ~= 11%. But for normal 3σ = 0.3%. Chebyshev is conservative! Chernoff: strongest — exponential decay. Hoeffding: how reliable is sample mean. These measure tail risk.</div>

<div class="code-block"># — Python: Concentration Inequalities —

  import numpy as np

  # Markov: P(X>=a) <= E[X]/a
  EX = 10  # average loss $10
  a = 50   # threshold
  markov_bound = EX / a
  print(f"Markov: P(X>=50) <= {markov_bound:.2f}")  # 0.20

  # Chebyshev: P(|X-mu|>=k*sigma) <= 1/k^2
  for k in [2, 3, 4]:
      cheb = 1 / k**2
      print(f"Chebyshev k={k}: <= {cheb:.4f}")
  # k=2: 0.25, k=3: 0.111, k=4: 0.0625

  # Chernoff (coin flips):
  # P(>= 60 heads in 100 flips) when p=0.5
  from scipy.stats import binom
  exact = 1 - binom.cdf(59, 100, 0.5)
  print(f"Exact P(X>=60): {exact:.4f}")  # ~0.028
  # Chernoff: <= exp(-0.1^2 * 50 / 3) ~= 0.044

  # Black Swan simulation:
  # 99% of days: +1. 1% of days: -200.
  returns = np.where(
      np.random.random(10000) < 0.99, 1, -200
  )
  cumulative = np.cumsum(returns)
  # বেশিরভাগ দিন লাভ, কিন্তু rare crash সব মুছে দেয়!</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Black Swan (Taleb 2007):</strong> বিরল, বিধ্বংসী, পরে বোঝা যায়। Normal distribution এই tail ধরে না! Financial crisis, pandemic, disaster — fat tail distribution। ৩σ তে বলে ০.৩% — কিন্তু বাস্তবে বেশি ঘটে। Power law: P(X) ~ 1/x^α। লম্বা tail — বিরল কিন্তু উপেক্ষা করা যায় না।</div></div>

<div class="verse">وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তুমি তার অনুসরণ করো না যার বিষয়ে তোমার জ্ঞান নেই।" — কুরআন ১৭:৩৬</div>

<p class="scene-setting">হিফযু — সুরক্ষা। Concentration inequalities সেই সুরক্ষার গাণিতিক রূপ — ঝুঁকির সীমা নির্ধারণ। কোন পরিমাণ নিরাপদ, কোন পরিমাণ বিপজ্জনক? Chebyshev, Chernoff — এই সীমা দেয়। কিন্তু সতর্কতা — গাণিতিক সীমা কখনো Black Swan ধরে না। যার বিষয়ে জ্ঞান নেই তার অনুসরণ করো না — অজানা ঝুঁকি উপেক্ষা করো না।</p>
<p class="scene-setting en">Hifz — protection. Concentration inequalities are the mathematical form of that protection — determining risk boundaries. What amount is safe, what is dangerous? Chebyshev, Chernoff — these give boundaries. But caution — mathematical bounds don't always catch Black Swans. Do not follow what you have no knowledge of — don't ignore unknown risks.</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৪ (Statistics) Door ৮ (Causal Inference):</strong> tail risk ও confounding। Book ৩৩ (Loom of Reason) Door ৬ (Second-Order): unintended consequences = tail risk।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🛡️ Tail Risk: Normal vs Fat Tail</text>
  <path d="M 100 200 Q 200 60 290 60 Q 380 60 480 200" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <text x="380" y="100" fill="#4ade80" font-size="10">Normal (thin tail)</text>
  <path d="M 50 200 Q 150 80 290 70 Q 430 80 530 200" fill="none" stroke="#f87171" stroke-width="2.5"/>
  <text x="470" y="140" fill="#fca5a5" font-size="10">Fat tail (power law)</text>
  <line x1="30" y1="200" x2="550" y2="200" stroke="#64748b" stroke-width="0.5"/>
  <rect x="30" y="170" width="40" height="30" fill="#f87171" opacity="0.2"/>
  <rect x="510" y="170" width="40" height="30" fill="#f87171" opacity="0.2"/>
  <text x="50" y="220" text-anchor="middle" fill="#fca5a5" font-size="10">tail risk</text>
  <text x="530" y="220" text-anchor="middle" fill="#fca5a5" font-size="10">tail risk</text>
  <text x="290" y="230" text-anchor="middle" fill="#94a3b8" font-size="10">Chebyshev: P(|X-mu|&gt;k*sigma) &lt;= 1/k^2</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Normal (সরু tail) vs Fat tail (power law)। Black Swan = fat tail-এ বিধ্বংসী ঘটনা।</div>

<div class="secret-box">🛡️ <strong>Concentration = ঝুঁকির সীমা। Markov → Chebyshev → Chernoff।</strong> কিন্তু ঝুঁকি মাপলেই কি দূর হয়? না। ঝুঁকি নিয়ন্ত্রণ করতে হয় — simulation দিয়ে। সেই পরের দরজায়।</div>`,
  senior: {
    title: "Concentration Inequalities এক নজরে",
    body: `<table class="kv-table"><tr><th>সূত্র</th><th>বিবরণ</th></tr>
<tr><td class="hl">Markov</td><td>P(X≥a) ≤ E[X]/a</td></tr>
<tr><td class="hl">Chebyshev</td><td>P(|X-μ|≥kσ) ≤ 1/k²</td></tr>
<tr><td class="hl">Chernoff</td><td>P(X≥(1+δ)μ) ≤ e^(-δ²μ/3)</td></tr>
<tr><td class="hl">Hoeffding</td><td>sample mean reliability</td></tr>
<tr><td class="hl">Black Swan</td><td>rare, devastating, fat tail</td></tr>
<tr><td class="hl">Power Law</td><td>P(X) ~ 1/x^α — long tail</td></tr></table>`
  }
});
