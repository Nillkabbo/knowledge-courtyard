// ════════════════════════════════════════
// প্রমাণের দাঁড়িপাল্লা — DOORS 1-5
// The Scale of Evidence: Nature of Evidence → Descriptive Stats → Distributions → Hypothesis Testing → Confidence Intervals
// ════════════════════════════════════════
const doors = [];

doors.push({
  num: 1,
  icon: "🔍",
  color: "#2dd4bf",
  name: "প্রমাণের বীজ",
  subtitle: "The Seed of Evidence",
  tech: "Deductive, Inductive, and Abductive Evidence — From Claim to Proof",
  spirit: "বুরহান — সুস্পষ্ট প্রমাণ, দাবি থেকে সত্যে যাত্রা",
  secret: "দাবি সসীম, প্রমাণ অসীম — যে প্রমাণ দেখাতে পারে, সেই সত্য কথা বলে।",
  recall: {
    q: "Al-Kindi-এর ফ্রিকোয়েন্সি বিশ্লেষণ কী আবিষ্কার করেছিল এবং কেন এটি পরিসংখ্যানের প্রথম পদক্ষেপ?",
    qen: "What did Al-Kindi's frequency analysis discover, and why is it the first step of statistics?",
    a: "ভাষায় প্রতিটি অক্ষরের উপস্থিতির হার স্থির — আরবিতে 'আলিফ' সবচেয়ে বেশি, 'ক্বফ' কম। এই প্যাটার্ন দিয়ে সাংকেতিক লেখা ভাঙা যায়। এটি প্রথমবার দেখায় — প্যাটার্ন বোঝা = সত্য খোঁজা।",
    aen: "Each letter's frequency in a language is stable — Arabic 'alif' is most common, 'qaf' less so. This pattern breaks ciphers. It shows for the first time — understanding patterns = finding truth."
  },
  story: `<p class="scene-setting">বাগদাদ, ৮৫০ খ্রিস্টাব্দ। বাইতুল হিকমাতের গন্ধযুক্ত ঘরে বসে আছেন একজন বৃদ্ধ ব্যক্তি — ইউসুফ ইয়াকুব ইবনে ইসহাক আল-কিন্দি। তাঁর আঙুলের ডগায় কালির দাগ, চোখে ক্লান্তি, কিন্তু মুখে একটা প্রশান্তির হাসি। সামনে একটা সাংকেতিক চিঠি — যা কেউ পড়তে পারছে না।</p>

  <p class="scene-setting en">Baghdad, 850 CE. In the scented halls of the House of Wisdom sits an elderly man — Abu Yusuf Ya'qub ibn Ishaq al-Kindi. Ink stains on his fingertips, weariness in his eyes, but a serene smile. Before him: a ciphered letter no one could read.</p>

  <div class="dialogue">
    <p><strong>আল-কিন্দি:</strong> তুমি ভাবো এই লেখা অদ্ভুত, এলোমেলো, অর্থহীন। কিন্তু আমি বলছি — প্রতিটা ভাষার একটা নিজস্ব ছন্দ আছে। আরবিতে 'আলিফ' (ا) সবচেয়ে বেশি আসে, 'ক্বফ' (ق) কম। এই ছন্দ ভাঙলেই সাংকেতিক লেখা পড়া যায়।</p>
    <p><strong>তুমি:</strong> কীভাবে? এই অক্ষরগুলো তো এলোমেলো!</p>
    <p><strong>আল-কিন্দি:</strong> এলোমেলো নয়। গণনা করো। প্রতিটা প্রতীক কতবার আসছে — সেটা গুনো। যে প্রতীক সবচেয়ে বেশি আসছে, সেটা সম্ভবত 'আলিফ'। যেটা সবচেয়ে কম, সেটা হয়তো 'ক্বফ'। ভাষার প্যাটার্ন সবসময় একই থাকে। প্যাটার্ন ধরলেই — সত্য বেরিয়ে আসে।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Al-Kindi:</strong> You think this text is strange, random, meaningless. But I say — every language has a rhythm. In Arabic, 'alif' (ا) appears most, 'qaf' (ق) less. Break this rhythm and the cipher reveals itself.</p>
    <p><strong>You:</strong> How? These symbols are random!</p>
    <p><strong>Al-Kindi:</strong> Not random. Count. Count how many times each symbol appears. The most frequent is probably 'alif.' The least, perhaps 'qaf.' A language's pattern is always the same. Catch the pattern — truth emerges.</p>
  </div>

  <p class="scene-setting">তুমি গণনা শুরু করলে। একটা দুটো নয় — শত শত প্রতীক। আঙুলে কালি, কপালে ঘাম। কিন্তু ধীরে ধীরে একটা প্যাটার্ন ফুটে উঠল। একটা প্রতীক বারবার আসছে — ১৮%, আরেকটা মাত্র ১%। আল-কিন্দি হাসলেন। সেদিন প্রথমবার মানুষ প্রমাণ করল — সংখ্যা দিয়ে গোপন সত্য উন্মোচন করা যায়।</p>

  <p class="scene-setting en">You begin counting. Not one or two — hundreds of symbols. Ink on fingers, sweat on brow. But slowly a pattern emerges. One symbol appears again and again — 18%, another barely 1%. Al-Kindi smiled. That day, for the first time, a human proved — numbers can reveal hidden truth.</p>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> আল-কিন্দি (c. ৮০১–৮৭৩) বাইতুল হিকমাতে (House of Wisdom) কাজ করতেন। তাঁকে 'ফিলাসফাত আল-আরব' (ফিলোসফার অফ দ্য আরবস) বলা হয়। তাঁর গ্রন্থে — যা 'রিসালাহ ফি ইস্তিখরাজ আল-মুআম্মা' (A Manuscript on Deciphering Cryptographic Messages) নামে পরিচিত — তিনি ফ্রিকোয়েন্সি বিশ্লেষণের বর্ণনা দিয়েছেন। এটি পরিসংখ্যান ও ক্রিপ্টোগ্রাফির ইতিহাসে সবচেয়ে প্রাচীন পদ্ধতিগত বিশ্লেষণ।</div></div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৩৩ (যুক্তির তাঁত) Door ৪-এ তুমি Bayesian Updating শিখেছিলে — আগের ধারণা আপডেট করা নতুন প্রমাণ দিয়ে। আল-কিন্দির ফ্রিকোয়েন্সি বিশ্লেষণ হলো সেই একই নীতির প্রাচীন রূপ — প্রতিটা নতুন গণনা তোমার ধারণাকে আপডেট করে: 'এই প্রতীকটা বোধহয় আলিফ' → 'না, পরিসংখ্যান বলছে এটা লাম।' এটাই পরিসংখ্যানের বীজ।</div></div>

  <div class="diagram">
    <div class="diag-title">দৃষ্টান্তমূলক প্রমাণের ত্রয়ী — Three Modes of Evidence</div>
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#3dd6c4"/>
        </marker>
        <marker id="arrFire1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ff6b35"/>
        </marker>
        <marker id="arrLeaf1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#52c41a"/>
        </marker>
      </defs>
      <!-- Title row -->
      <text x="280" y="18" text-anchor="middle" font-family="Cinzel,serif" font-size="11" font-weight="700" fill="#5eead4" letter-spacing="2">THREE MODES OF EVIDENCE — প্রমাণের ত্রয়ী</text>

      <!-- Column 1: Deductive -->
      <rect x="15" y="35" width="165" height="95" rx="10" fill="rgba(61,214,196,0.1)" stroke="#3dd6c4" stroke-width="1.5"/>
      <circle cx="40" cy="55" r="10" fill="rgba(61,214,196,0.2)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="40" y="59" text-anchor="middle" font-size="11" font-weight="700" fill="#3dd6c4">১</text>
      <text x="97" y="59" text-anchor="middle" font-size="12" font-weight="700" fill="#3dd6c4">নিগমন</text>
      <text x="97" y="73" text-anchor="middle" font-size="9" fill="#9290a8">Deductive</text>
      <text x="97" y="92" text-anchor="middle" font-size="9" fill="#9290a8">সাধারণ → বিশেষ</text>
      <text x="97" y="106" text-anchor="middle" font-size="9" fill="#e8e6f0">All ravens are black</text>
      <text x="97" y="119" text-anchor="middle" font-size="9" fill="#e8e6f0">→ this raven is black</text>
      <text x="97" y="138" text-anchor="middle" font-size="8" font-style="italic" fill="#52c41a">✓ ১০০% নিশ্চিত</text>

      <!-- Column 2: Inductive -->
      <rect x="197" y="35" width="165" height="95" rx="10" fill="rgba(255,107,53,0.1)" stroke="#ff6b35" stroke-width="1.5"/>
      <circle cx="222" cy="55" r="10" fill="rgba(255,107,53,0.2)" stroke="#ff6b35" stroke-width="1.5"/>
      <text x="222" y="59" text-anchor="middle" font-size="11" font-weight="700" fill="#ff6b35">২</text>
      <text x="279" y="59" text-anchor="middle" font-size="12" font-weight="700" fill="#ff6b35">আগমন</text>
      <text x="279" y="73" text-anchor="middle" font-size="9" fill="#9290a8">Inductive</text>
      <text x="279" y="92" text-anchor="middle" font-size="9" fill="#9290a8">বিশেষ → সাধারণ</text>
      <text x="279" y="106" text-anchor="middle" font-size="9" fill="#e8e6f0">1000 ravens observed</text>
      <text x="279" y="119" text-anchor="middle" font-size="9" fill="#e8e6f0">→ probably all black</text>
      <text x="279" y="138" text-anchor="middle" font-size="8" font-style="italic" fill="#fbbf24">~= সম্ভাব্য (৯৯%?)</text>

      <!-- Column 3: Abductive -->
      <rect x="379" y="35" width="165" height="95" rx="10" fill="rgba(179,127,235,0.1)" stroke="#b37feb" stroke-width="1.5"/>
      <circle cx="404" cy="55" r="10" fill="rgba(179,127,235,0.2)" stroke="#b37feb" stroke-width="1.5"/>
      <text x="404" y="59" text-anchor="middle" font-size="11" font-weight="700" fill="#b37feb">৩</text>
      <text x="461" y="59" text-anchor="middle" font-size="12" font-weight="700" fill="#b37feb">অভিন্নকরণ</text>
      <text x="461" y="73" text-anchor="middle" font-size="9" fill="#9290a8">Abductive</text>
      <text x="461" y="92" text-anchor="middle" font-size="9" fill="#9290a8">ফলাফল → কারণ</text>
      <text x="461" y="106" text-anchor="middle" font-size="9" fill="#e8e6f0">Wet grass → probably</text>
      <text x="461" y="119" text-anchor="middle" font-size="9" fill="#e8e6f0">→ it rained</text>
      <text x="461" y="138" text-anchor="middle" font-size="8" font-style="italic" fill="#fbbf24">? সর্বোত্তম অনুমান</text>

      <!-- Arrows converging down -->
      <path d="M 97 148 Q 97 165 200 185" fill="none" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#arrTeal1)"/>
      <path d="M 279 148 L 279 185" fill="none" stroke="#ff6b35" stroke-width="1.5" marker-end="url(#arrFire1)"/>
      <path d="M 461 148 Q 461 165 360 185" fill="none" stroke="#b37feb" stroke-width="1.5" marker-end="url(#arrLeaf1)"/>

      <!-- Convergence box -->
      <rect x="120" y="195" width="320" height="55" rx="10" fill="rgba(45,212,191,0.08)" stroke="#2dd4bf" stroke-width="1"/>
      <text x="280" y="215" text-anchor="middle" font-size="13" font-weight="700" fill="#5eead4">পরিসংখ্যান</text>
      <text x="280" y="230" text-anchor="middle" font-size="9" fill="#9290a8">Statistics = bridge between</text>
      <text x="280" y="242" text-anchor="middle" font-size="9" fill="#9290a8">evidence and uncertainty</text>

      <!-- Bottom note -->
      <text x="280" y="268" text-anchor="middle" font-size="9" font-style="italic" fill="#9290a8">আল-কিন্দি (c. ৮৫০): গণনা → প্যাটার্ন → সত্য</text>
    </svg>
    <div class="diag-cap">পরিসংখ্যান তিন ধরনের প্রমাণকে একত্র করে — নিগমন (গ্যারান্টিযুক্ত সিদ্ধান্ত), আগমন (সম্ভাব্য সাধারণীকরণ), অভিন্নকরণ (সেরা ব্যাখ্যা)। আল-কিন্দির ফ্রিকোয়েন্সি বিশ্লেষণ ছিল আগমনের প্রথম রূপ।</div>
  </div>

  <div class="code-block"># ── STEP 1: Three types of evidence ──
# Deductive, inductive, and abductive reasoning.

evidence_types = """
THREE TYPES OF EVIDENCE/REASONING:

1. DEDUCTIVE (general → specific):
   All ravens are black → this raven is black
   Certainty: 100% (if premises are true)
   Used in: mathematics, formal logic

2. INDUCTIVE (specific → general):
   Saw 1000 ravens, all black → probably all ravens are black
   Certainty: Probable (99%? But black swans exist!)
   Used in: science, statistics, machine learning

3. ABDUCTIVE (result → cause):
   Grass is wet → probably rained
   Certainty: Best guess (could be sprinkler)
   Used in: medical diagnosis, detective work, debugging

STATISTICS = INDUCTIVE REASONING:
  → Start with data (specific observations)
  → Infer patterns, distributions, relationships
  → Quantify UNCERTAINTY (confidence intervals, p-values)
  → Never 100% certain (unlike deduction)

THE PROBLEM OF INDUCTION (Hume):
  → No amount of observations GUARANTEES the next one
  → 1000 white swans → 1001st could be black
  → Statistics deals with this: confidence levels, margins of error
"""

print(evidence_types)</div>

  <div class="code-block"># ── STEP 2: Descriptive statistics ──
# Summarizing data with numbers.

descriptive = """
DESCRIPTIVE STATISTICS:

MEASURES OF CENTRAL TENDENCY:
  Mean (μ): average = Σxᵢ/n
  Median: middle value (50th percentile)
  Mode: most frequent value

  Mean is sensitive to outliers (billionaire raises average income)
  Median is robust (middle person's income)
  Mode is for categorical data

MEASURES OF SPREAD:
  Range: max − min
  Variance: σ² = Σ(xᵢ−μ)²/n
  Standard deviation: σ = √(variance)
  IQR: Q3 − Q1 (interquartile range, robust)

MEASURES OF SHAPE:
  Skewness: asymmetry (left/right tailed)
  Kurtosis: tail heaviness (peaked vs flat)
  Normal: skew=0, kurt=3

THE FIVE-NUMBER SUMMARY:
  Min, Q1, Median, Q3, Max
  → Box plot visualization

OUTLIER DETECTION:
  → 1.5×IQR rule: outlier if x < Q1−1.5×IQR or x > Q3+1.5×IQR
  → Z-score: |z| > 3 (more than 3σ from mean)
"""

print(descriptive)

# PYTHON: Descriptive statistics:
desc_code = """
import numpy as np
from scipy import stats

# Sample data: user session durations (seconds):
data = np.array([5, 10, 15, 8, 12, 20, 25, 7, 300, 18, 22, 14])

print(f"Mean: {np.mean(data):.2f}")
print(f"Median: {np.median(data):.2f}")
print(f"Std: {np.std(data):.2f}")
print(f"Min: {np.min(data)}, Max: {np.max(data)}")

# Five-number summary:
q1, q3 = np.percentile(data, [25, 75])
print(f"Q1: {q1}, Median: {np.median(data)}, Q3: {q3}")
print(f"IQR: {q3 - q1}")

# Outlier detection (1.5×IQR):
lower = q1 - 1.5 * (q3 - q1)
upper = q3 + 1.5 * (q3 - q1)
outliers = data[(data < lower) | (data > upper)]
print(f"Outliers: {outliers}")  # [300]

# Without outlier:
clean = data[data <= upper]
print(f"Mean (no outlier): {np.mean(clean):.2f}")  # Much lower

# Skewness and kurtosis:
print(f"Skewness: {stats.skew(data):.4f}")
print(f"Kurtosis: {stats.kurtosis(data):.4f}")
"""

print(desc_code)</div>

  <div class="code-block"># ── STEP 3: Sampling and bias ──
# How data collection affects conclusions.

sampling = """
SAMPLING AND BIAS:

POPULATION vs SAMPLE:
  Population: everyone/thing of interest (all users)
  Sample: subset we actually measure

GOOD SAMPLING:
  → Random: every member has equal chance
  → Representative: matches population demographics
  → Large enough: precision depends on size

COMMON BIASES:
  1. SELECTION BIAS: non-random sample
     → Online survey misses people without internet

  2. SURVIVORSHIP BIAS: only see survivors
     → WW2 plane armor: reinforce where NO bullet holes are

  3. RESPONSE BIAS: people lie or self-select
     → Reviews: mostly very happy or very angry

  4. CONFIRMATION BIAS: looking for expected result
     → Only counting evidence that supports hypothesis

  5. PUBLICATION BIAS: only publish significant results
     → "File drawer problem": null results never published

  6. SIMPSON'S PARADOX: trend reverses when combined
     → Treatment A better for each subgroup...
     → But Treatment B better overall (confounding)

  7. ANCHORING BIAS: influenced by first number seen
     → Price negotiation: high anchor → higher final price

LAW OF LARGE NUMBERS (for sampling):
  Larger sample → sample mean → population mean
  Standard error: SE = σ/√n
  → To halve error: quadruple sample size
"""

print(sampling)

# PYTHON: Sampling demonstration:
sampling_code = """
import numpy as np

# Population: 1 million values (Normal, μ=100, σ=15):
np.random.seed(42)
population = np.random.normal(100, 15, 1000000)
true_mean = population.mean()  # ≈ 100

# Sample sizes and their accuracy:
for n in [10, 100, 1000, 10000]:
    samples = [np.random.choice(population, n).mean() for _ in range(1000)]
    se = np.std(samples)  # standard error
    print(f"n={n:5d}: SE={se:.4f}, 95% CI width ≈ {3.96*se:.3f}")

# Biased sampling (only sample top 20%):
biased = population[population > np.percentile(population, 80)]
print(f"Biased mean: {biased.mean():.2f} (true: {true_mean:.2f})")

# Simpson's paradox:
# Group A: 60/100 men, 20/40 women → overall 80/140 = 57%
# Group B: 30/100 men, 90/100 women → overall 120/200 = 60%
# A better for each gender, but B better overall!
"""

print(sampling_code)</div>

  <div class="code-block"># ── STEP 4: Correlation vs causation ──
# The most important distinction in statistics.

correlation = """
CORRELATION vs CAUSATION:

CORRELATION: two variables move together
  r ∈ [−1, 1]
  r = 1: perfect positive
  r = −1: perfect negative
  r = 0: no linear relationship

CAUSATION: one variable CAUSES the other
  X causes Y (not just correlated)

"Correlation does not imply causation."
  → Ice cream sales and drowning deaths are correlated
  → But ice cream doesn't cause drowning!
  → Confounding variable: HOT WEATHER causes both

TYPES OF RELATIONSHIPS:
  1. X causes Y: smoking → lung cancer
  2. Y causes X: lung cancer → smoking? (reverse)
  3. Z causes both: weather → ice cream + drowning
  4. Coincidence: spurious correlation

ESTABLISHING CAUSATION:
  → RANDOMIZED CONTROLLED TRIAL (RCT): gold standard
  → Randomly assign treatment → control for confounders
  → If treatment group differs → causation (probably)

  → OBSERVATIONAL STUDIES: weaker
  → Can't control for all confounders
  → Use techniques: matching, instrumental variables, regression

PEARSON CORRELATION (r):
  r = Cov(X,Y) / (σ_X × σ_Y)
  Measures LINEAR relationship only

SPEARMAN CORRELATION (ρ):
  Rank-based, measures MONOTONIC relationship
  Robust to outliers
  Used for non-normal data

WARNING: SPURIOUS CORRELATIONS
  → Tyler Vigen's website: hilarious correlations
  → Nicholas Cage movies vs swimming pool drownings (r=0.67)
  → Margarine consumption vs divorce rate (r=0.99)
  → ALL COINCIDENCE (multiple comparisons)
"""

print(correlation)

# PYTHON: Correlation analysis:
corr_code = """
import numpy as np
from scipy import stats

# Correlation between two variables:
x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = np.array([2, 4, 5, 7, 9, 11, 12, 15, 16, 19])

# Pearson correlation:
r, p_value = stats.pearsonr(x, y)
print(f"Pearson r: {r:.4f}, p-value: {p_value:.6f}")

# Spearman rank correlation:
rho, p_rho = stats.spearmanr(x, y)
print(f"Spearman ρ: {rho:.4f}")

# Spurious correlation example:
np.random.seed(42)
a = np.random.randn(100)
b = np.random.randn(100)
r_spurious, _ = stats.pearsonr(a, b)
print(f"Random data r: {r_spurious:.4f}")  # Should be near 0

# Confounding variable:
# Temperature affects both ice_cream and drowning:
temperature = np.random.normal(25, 10, 100)
ice_cream = temperature * 100 + np.random.randn(100) * 50
drowning = temperature * 2 + np.random.randn(100) * 5

r_ice_drown, _ = stats.pearsonr(ice_cream, drowning)
print(f"Ice cream vs drowning r: {r_ice_drown:.4f}")  # High!

# But controlling for temperature:
from scipy.stats import partial_corr  # (not built-in, conceptual)
# The partial correlation drops to near 0
"""

print(corr_code)</div>

  <div class="code-block"># ── STEP 5: Statistical fallacies ──
# Common errors in data interpretation.

fallacies = """
STATISTICAL FALLACIES:

1. TEXAS SHARPSHOOTER:
   Fire at barn, paint target around cluster.
   → Finding patterns in random data
   → Multiple comparisons: test 100 things, 5 significant by chance

2. P-HACKING:
   → Try many analyses until p < 0.05
   → Drop "outliers," change variables, switch tests
   → Result: false positives
   → Solution: pre-registration, Bonferroni correction

3. BASE RATE NEGLECT:
   → Ignore prior probability
   → 99% accurate test for rare disease (0.1% prevalence)
   → P(disease|positive) = only 9%!

4. REGRESSION TO THE MEAN:
   → Extreme values tend to be followed by average values
   → "Sophomore slump": great rookie season → average second year
   → Not a real decline, just statistics

5. GAMBLER'S FALLACY:
   → "I've lost 5 times, I'm due to win!"
   → Independent events: past doesn't affect future
   → Each coin flip is 50/50 regardless of history

6. SURVIVORSHIP BIAS:
   → Only studying winners/survivors
   → Dropout billionaires → "dropouts succeed" (survivor bias)
   → Failed dropouts are invisible

7. ANSCOMBE'S QUARTET:
   → Four datasets with IDENTICAL mean, variance, correlation
   → But completely different shapes when plotted
   → ALWAYS VISUALIZE YOUR DATA

8. ecological fallacy:
   → Group-level pattern doesn't apply to individuals
   → State votes Republican, but you (individual) may not
"""

print(fallacies)

# PYTHON: Anscombe's quartet:
anscombe_code = """
import numpy as np

# Anscombe's Quartet: 4 datasets with same stats but different shapes:
datasets = {
    'I':   [(10,8.04),(8,6.95),(13,7.58),(9,8.81),(11,8.33),(14,9.96),
             (6,7.24),(4,4.26),(12,10.84),(7,4.82),(5,5.68)],
    'II':  [(10,9.14),(8,8.14),(13,8.74),(9,8.77),(11,9.26),(14,8.10),
             (6,6.13),(4,3.10),(12,9.13),(7,7.26),(5,4.74)],
    # (III and IV omitted for brevity)
}

for name, data in datasets.items():
    x = np.array([d[0] for d in data])
    y = np.array([d[1] for d in data])
    print(f"Dataset {name}: mean_x={x.mean():.2f}, var_x={x.var():.2f}, "
          f"mean_y={y.mean():.2f}, var_y={y.var():.2f}, "
          f"r={np.corrcoef(x,y)[0,1]:.4f}")
# ALL have nearly identical statistics!
# But they look COMPLETELY different when plotted.
# LESSON: Always visualize data before summarizing.

# P-hacking demonstration:
np.random.seed(42)
# Test 100 random variables against random outcome:
significant = 0
for _ in range(100):
    x = np.random.randn(50)
    y = np.random.randn(50)
    from scipy.stats import pearsonr
    r, p = pearsonr(x, y)
    if p < 0.05:
        significant += 1
print(f"\\nSignificant correlations (by chance): {significant}/100")
# ~5 should be "significant" (at α=0.05) — ALL FALSE POSITIVES!
"""

print(anscombe_code)</div>

  <div class="code-block"># ── STEP 6: Evidence and best practices ──
# How to reason correctly with data.

best_practices = [
    "Deductive: certain (math), Inductive: probable (science)",
    "Statistics = inductive reasoning with uncertainty",
    "Mean sensitive to outliers, median robust",
    "Always report standard deviation, not just mean",
    "Five-number summary: min, Q1, median, Q3, max",
    "IQR for robust spread (outlier resistant)",
    "Random sampling → representative, reduces bias",
    "Correlation ≠ causation (always check confounders)",
    "RCT = gold standard for causation",
    "Beware: p-hacking, base rate neglect, survivorship bias",
    "Always visualize data (Anscombe's quartet)",
    "Simpson's paradox: group trends can reverse combined",
    "Multiple comparisons: correct for false positives (Bonferroni)",
    "Regression to the mean: extreme values regress",
    "Pre-register hypotheses to avoid p-hacking",
]

print("EVIDENCE & STATISTICS BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ Deductive        │ 100% certain (if premises true) │
# │ Inductive        │ Probable (statistics)           │
# │ Mean             │ Average (outlier sensitive)     │
# │ Median           │ Middle (robust)                 │
# │ Correlation      │ Two variables move together     │
# │ Causation        │ One causes the other            │
# │ RCT              │ Best evidence for causation     │
# │ p-hacking        │ False positives from multiple T │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ প্রমাণ ছাড়া দাবি</div>
      আমার মাটির হাঁড়ি আগুনে পোড়ে না। কীভাবে জানবে? আমি বলছি! — দাবি মাত্র, পরীক্ষা নেই।
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ প্রমাণের সাথে দাবি</div>
      এই হাঁড়িটা আগুনে রাখলাম। ৩ মিনিট পর ফাটল ধরল। — পরীক্ষা দ্বারা প্রমাণিত, সংখ্যায় নির্ভুল।
    </div>
  </div>

  <div class="verse">
    <div class="verse-arabic">يَا أَيُّهَا النَّاسُ قَدْ جَاءَكُم بُرْهَانٌ مِّن رَّبِّكُمْ</div>
    <div class="verse-translation">হে মানুষ! তোমাদের কাছে তোমাদের রবের পক্ষ থেকে একটি সুস্পষ্ট প্রমাণ এসেছে।</div>
    <div class="verse-ref">— কুরআন ৪:১৭৪</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🔍</div>
    <div class="secret-text">গণনা করো, প্যাটার্ন দেখো — গোপন সত্য নিজে বেরিয়ে আসে।</div>
    <div class="secret-sub">Count, observe patterns — hidden truth reveals itself.</div>
  </div>`,
  senior: {
    title: "প্রমাণ ছাড়া কোনো দাবি গ্রহণ করো না",
    body: `<p><strong>১. প্রতিটা দাবি জিজ্ঞেস করো:</strong> প্রমাণ কোথায়? কতগুলো উদাহরণ? কোন ধরনের প্রমাণ — নিগমন, আগমন, অভিন্নকরণ?</p>
    <p><strong>২. আগমনের সীমা বোঝো:</strong> ১০০টা উদাহরণ থেকে সাধারণ নিয়ম তৈরি করা যায়, কিন্তু ১০১তম উদাহরণ ভাঙতে পারে। কালো রাজহাঁসের গল্প।</p>
    <p><strong>৩. ফ্রিকোয়েন্সি মানসিকতা:</strong> যেকোনো সমস্যায় প্রথম প্রশ্ন — এখানে কী প্যাটার্ন আছে? বারবার কী ঘটছে? সংখ্যা কী বলছে?</p>`
  }
});

doors.push({
  num: 2,
  icon: "📊",
  color: "#5eead4",
  name: "মৃত্যুর হিসাব",
  subtitle: "The Ledger of Deaths",
  tech: "Descriptive Statistics — Mean, Median, Variance, and the First Data Table (1662)",
  spirit: "হিসাব — প্রতিটা জীবনের গণনা, সমাজের আয়না",
  secret: "সসীম সংখ্যায় অসীম সত্য — একটা ডেটা টেবিল একটা শহরের কাহিনি বলে।",
  recall: {
    q: "John Graunt (১৬৬২) কেন প্রথম পরিসংখ্যানবিদ বলা হয়? তিনি কী আবিষ্কার করেছিলেন?",
    qen: "Why is John Graunt (1662) called the first statistician? What did he discover?",
    a: "তিনি লন্ডনের মৃত্যুর বিল (Bills of Mortality) বছরের পর বছর সংগ্রহ করে একটা টেবিল বানালেন — কত মানুষ মারা যাচ্ছে, কী কারণে, কোন বয়সে। এটাই ইতিহাসের প্রথম জীবন-সারণি (life table)। একজন হাবারড্যাশার (দোকানদার) বিজ্ঞানের ইতিহাস বদলে দিলেন।",
    aen: "He collected London's Bills of Mortality year after year, made a table — how many die, from what cause, at what age. This is history's first life table. A haberdasher changed science."
  },
  story: `<p class="scene-setting">লন্ডন, ১৬৬২। একটা ছোট দোকানে বসে আছেন জন গ্র্যান্ট (John Graunt) — পেশায় হাবারড্যাশার (বোতাম, ফিতা, সুতার ব্যবসায়ী)। তাঁর টেবিলে পাহাড়ের মতো কাগজ — কিন্তু সেগুলো সুতার হিসাব নয়। সেগুলো লন্ডনের মৃত্যুর হিসাব — Bills of Mortality। প্রতি সপ্তাহে প্যারিশ চার্চ রেকর্ড করত: কে মারা গেল, কী কারণে, কত বয়সে।</p>

  <p class="scene-setting en">London, 1662. John Graunt sits in his small shop — a haberdasher by trade (buttons, ribbons, thread). On his table: mountains of paper — not thread accounts, but London's death records — Bills of Mortality. Each week the parish churches recorded: who died, from what cause, at what age.</p>

  <div class="dialogue">
    <p><strong>গ্র্যান্ট:</strong> প্রতিটা মৃত্যু একটা সংখ্যা। কিন্তু একসাথে দেখো — হাজার হাজার মৃত্যু একটা গল্প বলে। লন্ডনে প্লেগের বছর মৃত্যুর হার ৩ গুণ। শিশুদের মৃত্যুর হার প্রাপ্তবয়স্কদের চেয়ে ৫ গুণ। এই সংখ্যাগুলো কেবল মৃত্যু নয় — এগুলো জীবনের ছবি।</p>
    <p><strong>তুমি:</strong> কিন্তু এই সংখ্যাগুলো দিয়ে কী হবে?</p>
    <p><strong>গ্র্যান্ট:</strong> ভবিষ্যত দেখা যায়। যদি জানি গত ২০ বছরে গড়ে কত শিশু মারা যায় — তাহলে এবার কতটা হাসপাতাল লাগবে হিসাব করতে পারি। যদি জানি কোন এলাকায় মৃত্যু বেশি — তাহলে সেখানে পরিষেবা পাঠাতে পারি। সংখ্যা নীতি বানায়, নীতি জীবন বাঁচায়।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Graunt:</strong> Each death is a number. But together — thousands of deaths tell a story. In plague years, London's death rate triples. Child mortality is 5x adult. These aren't just deaths — they are a portrait of life.</p>
    <p><strong>You:</strong> But what can be done with these numbers?</p>
    <p><strong>Graunt:</strong> You see the future. If I know the average child deaths over 20 years — I can estimate hospital needs. If I know which district has more deaths — I send services there. Numbers make policy, policy saves lives.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> জন গ্র্যান্ট (১৬২০–১৬৭৪) তাঁর বই <em>Natural and Political Observations Made upon the Bills of Mortality</em> (১৬৬২) প্রকাশ করেন। এটি পরিসংখ্যানের ইতিহাসে প্রথম বই। তিনি প্রথম জীবন-সারণি (life table) তৈরি করেন — যা বীমা, জনস্বাস্থ্য, এবং জনমিতির (demography) ভিত্তি। একজন হাবারড্যাশার বিজ্ঞানের একটা নতুন শাখা শুরু করলেন। তাঁকে Royal Society-তে নেওয়া হয় — রাজা দ্বিতীয় চার্লস নিজে তাঁকে সমর্থন দেন, বলেছিলেন আরও এমন 'ট্রেডসম্যান' থাকলে ভালো হয়।</div></div>

  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> গ্র্যান্টের ডেটা নিখুঁত ছিল না। অনেক মৃত্যু রেকর্ড হতো না, কারণ স্পষ্ট ছিল না ('aged' বা 'consumption' ছাড়া আর কিছু লেখা থাকত না)। কিন্তু গ্র্যান্ট বুঝতে পেরেছিলেন — অসম্পূর্ণ ডেটাও সিদ্ধান্তের ভিত্তি হতে পারে, যদি যথেষ্ট বড় হয়। এটাই পরিসংখ্যানের শক্তি এবং সীমা।</div></div>

  <div class="diagram">
    <div class="diag-title">কেন্দ্রীয় প্রবণতা — Measures of Central Tendency</div>
    <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2dd4bf"/>
        </marker>
      </defs>
      <!-- Distribution shape (histogram bars) -->
      <g>
        <rect class="cell-cyan" x="40" y="140" width="40" height="50" rx="2"/>
        <rect class="cell-cyan" x="82" y="100" width="40" height="90" rx="2"/>
        <rect class="cell-hot" x="124" y="70" width="40" height="120" rx="2"/>
        <rect class="cell-hot" x="166" y="55" width="40" height="135" rx="2"/>
        <rect class="cell-hot" x="208" y="60" width="40" height="130" rx="2"/>
        <rect class="cell-cyan" x="250" y="85" width="40" height="105" rx="2"/>
        <rect class="cell-cyan" x="292" y="120" width="40" height="70" rx="2"/>
        <rect class="cell-cyan" x="334" y="150" width="40" height="40" rx="2"/>
        <rect class="cell-cyan" x="376" y="170" width="40" height="20" rx="2"/>
      </g>
      <!-- Mean line -->
      <line class="edge-hot" x1="210" y1="30" x2="210" y2="190" stroke-dasharray="5,3" stroke-width="2"/>
      <text class="lbl-hot" x="380" y="25" text-anchor="middle" font-weight="700">গড় / Mean (x̄ = Σx/n)</text>
      <!-- Median line -->
      <line class="edge-cyan" x1="170" y1="30" x2="170" y2="190" stroke-dasharray="3,3" stroke-width="2"/>
      <text class="lbl-cyan" x="100" y="25" text-anchor="middle" font-weight="700">মধ্যমা / Median</text>
      <!-- Mode -->
      <circle class="node-hot" cx="186" cy="55" r="5"/>
      <text class="lbl-amber" x="270" y="50" font-weight="700">বহুলক / Mode</text>
      <text class="lbl-sm" x="270" y="62">(সবচেয়ে ঘন ঘন)</text>
      <line class="edge-amber" x1="260" y1="55" x2="192" y2="55" stroke-dasharray="2,2"/>
      <!-- Baseline -->
      <line class="axis" x1="30" y1="190" x2="420" y2="190"/>
    </svg>
    <div class="diag-cap">গড় সব মানের যোগফলকে সংখ্যা দিয়ে ভাগ করে। মধ্যমা সাজানো তালিকার মাঝের মান। বহুলক সবচেয়ে বেশি বার আসা মান। গ্র্যান্ট এই তিনটেই ব্যবহার করেছিলেন — মৃত্যুর হারের গডেট, বয়সের মধ্যমা, কারণের বহুলক।</div>
  </div>

  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">৩</div><div class="sc-label">গড়ের প্রকার — Mean, Median, Mode</div></div>
    <div class="stat-card"><div class="sc-num">σ²</div><div class="sc-label">ভ্যারিয়েন্স — ছড়ানোর মাপ</div></div>
    <div class="stat-card"><div class="sc-num">১৬৬২</div><div class="sc-label">গ্র্যান্টের বইয়ের বছর</div></div>
    <div class="stat-card"><div class="sc-num">৮,০০,০০০</div><div class="sc-label">তৎকালীন লন্ডনের জনসংখ্যা (গ্র্যান্টের অনুমান)</div></div>
  </div>

  <div class="code-block"># ── STEP 1: Visualizing data ──
# Pictures reveal what numbers hide.

visualization = """
DATA VISUALIZATION:

"Let the data speak." But raw numbers often hide patterns.
Visualization makes patterns VISIBLE.

TYPES OF CHARTS:
  → Histogram: distribution of one variable (bars)
  → Box plot: five-number summary (min, Q1, median, Q3, max)
  → Scatter plot: relationship between two variables
  → Line chart: trends over time
  → Bar chart: categorical comparison
  → Heatmap: 2D matrix values (correlation matrices)

ANSOOMBE'S QUARTET (why visualize?):
  4 datasets, SAME statistics (mean, variance, correlation)
  But COMPLETELY different shapes when plotted:
  → I: linear
  → II: curved (parabola)
  → III: linear but one outlier dominates
  → IV: all x same except one outlier

  LESSON: ALWAYS PLOT YOUR DATA FIRST.

GOOD VISUALIZATION PRINCIPLES:
  → Start axes at 0 (or justify otherwise)
  → Don't use 3D charts (they distort)
  → Use appropriate chart type for data
  → Label axes clearly
  → No dual y-axes (misleading)
  → Color for accessibility (colorblind-friendly)

PYTHON (matplotlib/seaborn):
  import matplotlib.pyplot as plt
  import seaborn as sns

  # Histogram:
  plt.hist(data, bins=30)
  plt.xlabel('Value')
  plt.ylabel('Frequency')

  # Scatter:
  plt.scatter(x, y, alpha=0.5)

  # Box plot:
  plt.boxplot([group1, group2, group3])
"""

print(visualization)</div>

  <div class="code-block"># ── STEP 2: Data distributions in practice ──
# Identifying distribution from data.

distributions = """
IDENTIFYING DISTRIBUTIONS:

How to tell what distribution your data follows:

1. HISTOGRAM SHAPE:
   → Bell-shaped: Normal
   → Right-skewed: Lognormal, Exponential, Gamma
   → Left-skewed: reversed (bounded above)
   → Uniform: flat
   → Bimodal: two peaks (mixture)

2. Q-Q PLOT (quantile-quantile):
   → Plot data quantiles vs theoretical distribution
   → Straight line = good fit
   → Curved = poor fit

3. GOODNESS-OF-FIT TESTS:
   → Kolmogorov-Smirnov (KS): compare to theoretical
   → Shapiro-Wilk: test for normality
   → Chi-squared: categorical goodness-of-fit

4. SUMMARY STATISTICS:
   → Mean ≈ Median → symmetric (Normal?)
   → Mean >> Median → right-skewed
   → Variance >> Mean → overdispersed (NegBin, not Poisson)

COMMON REAL-WORLD DISTRIBUTIONS:
  Heights: Normal
  Income: Lognormal (right-skewed)
  Word frequencies: Power law (Zipf)
  City sizes: Power law (Pareto)
  Wait times: Exponential
  Web traffic: Poisson
  Stock returns: approximately Normal (fat tails)
"""

print(distributions)

# PYTHON: Distribution fitting:
dist_fit = """
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

# Generate test data:
np.random.seed(42)

# 1. Normal data:
normal_data = np.random.normal(100, 15, 1000)

# Check normality:
stat, p = stats.shapiro(normal_data)
print(f"Shapiro-Wilk: stat={stat:.4f}, p={p:.4f}")
# p > 0.05 → consistent with normal

# Q-Q plot:
# stats.probplot(normal_data, plot=plt)
# If points on line → normal

# 2. Skewed data (income):
income = np.random.lognormal(10, 1, 1000)  # lognormal
print(f"Income: mean={income.mean():.0f}, median={np.median(income):.0f}")
# Mean >> Median → right-skewed

# 3. Fit distribution:
# Try fitting exponential to wait times:
wait_times = np.random.exponential(10, 1000)
loc, scale = stats.expon.fit(wait_times)
print(f"Fitted exponential: scale={scale:.2f}")

# Goodness of fit (KS test):
D, p = stats.kstest(wait_times, 'expon', args=(loc, scale))
print(f"KS test: D={D:.4f}, p={p:.4f}")
# p > 0.05 → good fit
"""

print(dist_fit)</div>

  <div class="code-block"># ── STEP 3: Exploratory Data Analysis (EDA) ──
# The essential first step in any data project.

eda = """
EXPLORATORY DATA ANALYSIS (EDA):

Before building models, UNDERSTAND your data.

THE EDA CHECKLIST:
  1. Structure: rows, columns, types
  2. Quality: missing values, duplicates, outliers
  3. Distributions: histogram for each variable
  4. Relationships: scatter plots, correlation matrix
  5. Grouping: group-by categorical variables
  6. Time: trends, seasonality (if time series)
  7. Anomalies: anything unusual

PYTHON (pandas):
  import pandas as pd

  df = pd.read_csv('data.csv')

  # Structure:
  print(df.shape)       # (rows, columns)
  print(df.dtypes)      # column types
  print(df.head())      # first 5 rows

  # Summary statistics:
  print(df.describe())  # count, mean, std, min, Q1, median, Q3, max

  # Missing values:
  print(df.isnull().sum())

  # Correlation matrix:
  print(df.corr())

  # Group by:
  print(df.groupby('category')['value'].mean())

KEY QUESTIONS:
  → How many observations? How many variables?
  → What's the distribution of each variable?
  → Are there outliers? Missing data?
  → What relationships exist between variables?
  → Is there a time component?
  → What's the granularity (per user, per day)?

EDA PREVENTS:
  → Garbage in, garbage out (GIGO)
  → Wrong model assumptions
  → Missing important patterns
  → Outlier-driven false conclusions
"""

print(eda)

# PYTHON: Full EDA:
eda_code = """
import pandas as pd
import numpy as np

# Synthetic dataset:
np.random.seed(42)
df = pd.DataFrame({
    'age': np.random.normal(40, 12, 1000).clip(18, 80),
    'income': np.random.lognormal(10.5, 0.8, 1000),
    'gender': np.random.choice(['M', 'F'], 1000),
    'department': np.random.choice(['Eng', 'Sales', 'HR', 'Ops'], 1000),
})

# 1. Structure:
print(f"Shape: {df.shape}")
print(f"\\nTypes:\\n{df.dtypes}")
print(f"\\nFirst rows:\\n{df.head()}")

# 2. Summary statistics:
print(f"\\nNumeric summary:\\n{df.describe()}")

# 3. Missing values:
print(f"\\nMissing:\\n{df.isnull().sum()}")

# 4. Group statistics:
print(f"\\nIncome by department:\\n{df.groupby('department')['income'].mean()}")

# 5. Correlation:
print(f"\\nCorrelation:\\n{df[['age', 'income']].corr()}")

# 6. Detect outliers (income):
q1, q3 = df['income'].quantile([0.25, 0.75])
iqr = q3 - q1
outliers = df[(df['income'] < q1 - 1.5*iqr) | (df['income'] > q3 + 1.5*iqr)]
print(f"\\nIncome outliers: {len(outliers)} ({len(outliers)/len(df)*100:.1f}%)")
"""

print(eda_code)</div>

  <div class="code-block"># ── STEP 4: Data cleaning ──
# Most of data science is cleaning.

cleaning = """
DATA CLEANING:

"80% of data science is cleaning data."
  → Real-world data is MESSY
  → Missing values, wrong types, duplicates, outliers

COMMON CLEANING TASKS:

1. MISSING VALUES:
   → Drop rows/columns (if few)
   → Impute (mean, median, mode, ML-based)
   → Flag as missing (indicator variable)

2. OUTLIERS:
   → Investigate (error or genuine extreme?)
   → Cap/winsorize (replace with percentile)
   → Transform (log for skewed)
   → Remove (if clearly errors)

3. TYPE CONVERSION:
   → Strings to numbers (parse)
   → Dates to datetime
   → Categories to categorical dtype

4. DUPLICATES:
   → Identify and remove exact duplicates
   → Near-duplicates (fuzzy matching)

5. ENCODING:
   → One-hot for nominal categories
   → Ordinal encoding for ordered categories
   → Target encoding (mean by category)

6. SCALING:
   → StandardScaler: (x − mean) / std
   → MinMaxScaler: (x − min) / (max − min)
   → RobustScaler: (x − median) / IQR (outlier resistant)

PYTHON:
  df.dropna()                    # drop missing
  df.fillna(df.mean())           # impute with mean
  df.drop_duplicates()           # remove duplicates
  pd.get_dummies(df['cat'])      # one-hot encoding
"""

print(cleaning)</div>

  <div class="code-block"># ── STEP 5: Summary statistics deep dive ──
# Beyond mean and std — robust statistics.

robust = """
ROBUST STATISTICS:

Standard statistics (mean, std) are SENSITIVE to outliers.
Robust statistics are RESISTANT to outliers.

ROBUST MEASURES:
  → Median instead of mean
  → IQR instead of standard deviation
  → Trimmed mean (drop top/bottom k%)
  → Winsorized mean (cap at percentile)
  → MAD (Median Absolute Deviation)

TRIMMED MEAN:
  Drop top and bottom α% before computing mean.
  → 10% trimmed mean: drop top 10% and bottom 10%
  → Used in Olympic scoring (drop highest/lowest judges)

MAD (Median Absolute Deviation):
  MAD = median(|xᵢ − median(x)|)
  → Robust alternative to standard deviation
  → σ ≈ 1.4826 × MAD (for normal data)

WINSORIZING:
  Replace values beyond percentile with the percentile value.
  → 95th winsorize: cap at 95th percentile
  → Keeps the data size but removes extreme influence

WHEN TO USE ROBUST:
  → Data has outliers
  → Distribution is heavy-tailed
  → You don't want extreme values to dominate
  → Median income is more representative than mean

PYTHON:
  from scipy.stats import trim_mean

  data = [1, 2, 3, 4, 5, 100]  # 100 is outlier
  print(f"Mean: {np.mean(data):.2f}")        # 19.17 (inflated)
  print(f"Median: {np.median(data):.2f}")    # 3.5 (robust)
  print(f"Trimmed: {trim_mean(data, 0.1):.2f}")  # ~3.5 (robust)
"""

print(robust)

# PYTHON: Robust statistics:
robust_code = """
import numpy as np
from scipy.stats import trim_mean

# Data with outlier:
data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 100])

# Standard statistics (outlier-sensitive):
print(f"Mean: {np.mean(data):.2f}")       # 14.5 (inflated by 100)
print(f"Std: {np.std(data):.2f}")         # 29.6 (inflated)

# Robust statistics:
print(f"Median: {np.median(data):.2f}")   # 5.5 (robust)
print(f"IQR: {np.percentile(data, 75) - np.percentile(data, 25):.2f}")

# Trimmed mean (remove top/bottom 10%):
print(f"Trimmed mean (10%): {trim_mean(data, 0.1):.2f}")  # ~6.0

# MAD:
median = np.median(data)
mad = np.median(np.abs(data - median))
print(f"MAD: {mad:.2f}")
print(f"Estimated σ: {1.4826 * mad:.2f}")  # robust std estimate

# Comparison: without outlier:
clean = data[data < 50]
print(f"\\nWithout outlier:")
print(f"  Mean: {np.mean(clean):.2f}")    # 5.0
print(f"  Std: {np.std(clean):.2f}")      # 2.58
"""

print(robust_code)</div>

  <div class="code-block"># ── STEP 6: Descriptive stats best practices ──
# Summarize data correctly.

best_practices = [
    "Always visualize data before summarizing",
    "Report mean AND median (outlier detection)",
    "Use IQR/MAD for robust spread",
    "Five-number summary: min, Q1, median, Q3, max",
    "Histogram reveals distribution shape",
    "Q-Q plot checks for normality",
    "Box plot shows outliers visually",
    "Scatter plot for relationships",
    "Correlation matrix for multi-variable overview",
    "Check for missing values and duplicates",
    "Clean data before analysis (GIGO)",
    "Scale features for ML (Standard/MinMax)",
    "Trimmed mean for outlier-resistant average",
    "Robust stats when data is heavy-tailed",
    "EDA is mandatory before modeling",
]

print("DESCRIPTIVE STATS BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Statistic        │ Robust Alternative              │
# ├──────────────────┼──────────────────────────────────┤
# │ Mean             │ Median, trimmed mean            │
# │ Std deviation    │ IQR, MAD                        │
# │ Range            │ IQR                             │
# │ Variance         │ MAD²                            │
# │ Pearson r        │ Spearman ρ                     │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৩০ (Architect's Compass) Door ৫-এ তুমি Probability & Bayes' Theorem শিখেছিলে। গ্র্যান্টের কাজ হলো সেই Bayes-এর পূর্বশর্ত — বণ্টন না বুঝলে Bayes কাজ করে না। এছাড়া Book ৩১ (Classic ML) Door ৯ Model Evaluation-এ গড় বনাম মধ্যমার গুরুত্ব আবার দেখবে।</div></div>

  <div class="verse">
    <div class="verse-arabic">وَكُلَّ إِنْسَانٍ أَلْزَمْنَاهُ طَائِرَهُ فِي عُنُقِهِ</div>
    <div class="verse-translation">আর প্রতিটি মানুষের কৃতকর্ম আমরা তার গলায় বেঁধে দিয়েছি।</div>
    <div class="verse-ref">— কুরআন ১৭:১৩</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">📊</div>
    <div class="secret-text">সসীম সংখ্যায় অসীম কাহিনি — ডেটা একটা জনগোষ্ঠীর আয়না।</div>
    <div class="secret-sub">In finite numbers, an infinite story — data is a mirror of a people.</div>
  </div>`,
  senior: {
    title: "গড় একা যথেষ্ট নয়",
    body: `<p><strong>১. গড় + মধ্যমা দুটোই দেখো:</strong> গডেট উচ্চ কিন্তু মধ্যমা নিচু? বণ্টন বিষম (skewed)। কয়েকজন অনেক বেশি নিচ্ছে, বাকিরা কম।</p>
    <p><strong>২. ভ্যারিয়েন্স জিজ্ঞেস করো:</strong> গডেট একই হতে পারে, কিন্তু ছড়ানো আলাদা। ৪০±৫ বনাম ৪০±৩০ — প্রথমটা স্থিতিশীল, দ্বিতীয়টা অনিশ্চিত।</p>
    <p><strong>৩. গ্র্যান্টের পাঠ:</strong> ডেটা না থাকলে নীতি অন্ধকারে। কিন্তু ভুল ডেটা আরও খারাপ — কারণ অন্ধকারেও মানুষ দাবি করবে 'আমি দেখছি'। সবসময় জিজ্ঞেস করো: এই সংখ্যা কোথা থেকে এলো?</p>`
  }
});

doors.push({
  num: 3,
  icon: "🔔",
  color: "#2dd4bf",
  name: "ঘণ্টার বক্রতা",
  subtitle: "The Bell Curve",
  tech: "Normal Distribution, Standard Deviation, and the 68-95-99.7 Rule",
  spirit: "সুনান — সৃষ্টিতে স্থাপিত নিয়ম, প্যাটার্নের অদৃশ্য ছন্দ",
  secret: "প্রকৃতি একটা ঘণ্টা বাজায় — মাঝে সবাই, পাশে কেউ কেউ, শেষে প্রায় কেউ নেই।",
  recall: {
    q: "স্বাভাবিক বণ্টনের ৬৮-৯৫-৯৯.৭ নিয়ম কী? একটা উদাহরণ দাও।",
    qen: "What is the 68-95-99.7 rule of the normal distribution? Give an example.",
    a: "গড় থেকে ±১σ ব্যবধানে ৬৮% ডেটা, ±২σ তে ৯৫%, ±৩σ তে ৯৯.৭%। যেমন গড় উচ্চতা ৬৫″ হলে — ৬৮% মানুষ ৬২″-৬৮″ এর মধ্যে, ৯৫% ৫৯″-৭১″ এর মধ্যে। মাত্র ০.৩% এর বাইরে — খুব লম্বা বা খুব খাটো।",
    aen: "Within ±1σ of the mean: 68% of data. ±2σ: 95%. ±3σ: 99.7%. E.g., mean height 65″ — 68% of people are between 62″-68″, 95% between 59″-71″. Only 0.3% beyond — very tall or very short."
  },
  story: `<p class="scene-setting">ব্রাউনশভাইগ, জার্মানি, ১৮০১। রাতের আকাশে একটা নতুন আলো জ্বলে উঠল — Ceres নামের একটা বামন গ্রহ (dwarf planet)। কিন্তু সেটা সূর্যের আলোয় হারিয়ে গেল। পুরো ইউরোপের জ্যোতির্বিজ্ঞানীরা চিন্তিত — গ্রহটা কোথায় গেল? একজন ২৪ বছরের গণিতবিদ একটা অদ্ভুত পদ্ধতি ব্যবহার করলেন — তিনি পূর্বের পর্যবেক্ষণগুলো নিয়ে একটা বক্ররেখা (curve) বানালেন এবং ভবিষ্যতের অবস্থান গণনা করলেন। তাঁর নাম — কার্ল ফ্রিডরিখ গাউস (Carl Friedrich Gauss)।</p>

  <p class="scene-setting en">Brunswick, Germany, 1801. A new light appeared in the night sky — a dwarf planet named Ceres. But it disappeared into the sun's glare. Astronomers across Europe despaired — where did it go? A 24-year-old mathematician used a strange method — he took previous observations, drew a curve, and calculated the future position. His name — Carl Friedrich Gauss.</p>

  <div class="dialogue">
    <p><strong>গাউস:</strong> প্রকৃতির প্রতিটা ঘটনায় একটা প্যাটার্ন আছে। শত শত পরিমাপ নাও — কখনো সব এক হয় না। কিন্তু যদি একটা গ্রাফ বানাও — মানগুলো একটা ঘণ্টার আকার ধারণ করে। মাঝে সবচেয়ে বেশি মান, দুই পাশে কম। এটাই স্বাভাবিক বণ্টন (normal distribution)।</p>
    <p><strong>তুমি:</strong> কেন ঘণ্টার মতো? কেন ত্রিভুজ বা চতুর্ভুজ নয়?</p>
    <p><strong>গাউস:</strong> কারণ প্রকৃতিতে চরম মান বিরল। খুব লম্বা মানুষ কম, খুব খাটোও কম — বেশিরভাগ মাঝারি। খুব বুদ্ধিমান কম, খুব বোকাও কম — বেশিরভাগ মাঝারি। এই ঘণ্টার চূড়া হলো গডেট — সেখানে সবচেয়ে বেশি মান। দুই পাশে বিস্তার — যত দূরে যাবে, তত কম মান।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Gauss:</strong> Every natural phenomenon has a pattern. Take a hundred measurements — they're never identical. But draw a graph — the values form a bell shape. Most values cluster in the middle, fewer at the edges. This is the normal distribution.</p>
    <p><strong>You:</strong> Why a bell? Why not a triangle or rectangle?</p>
    <strong>Gauss:</strong> Because extremes are rare in nature. Very tall people are few, very short are few — most are average. Very smart people are few, very foolish are few — most are in between. The peak of the bell is the mean — most values there. The spread on both sides — the further you go, the fewer the values.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> গাউস (১৭৭৭–১৮৫৫) স্বাভাবিক বণ্টনকে কমপক্ষে-বর্গ (least squares) পদ্ধতির সাথে যুক্ত করেন তাঁর ১৮০৯ সালের কাজে <em>Theoria Motus Corporum Coelestium</em>। তিনি Ceres-এর অবস্থান নিখুঁতভাবে গণনা করেছিলেন — জ্যোতির্বিজ্ঞানী হেনরিখ ওলবার্স (Heinrich Olbers) গাউসের গণনা অনুযায়ী আকাশে খুঁজে পান। গাউস গটিঙেন মানমন্দিরের পরিচালক ছিলেন (১৮০৭–১৮৫৫)। মজার বিষয়: কমপক্ষে-বর্গ পদ্ধতি প্রথম প্রকাশ করেন আদ্রিয়েন-মারি লেজাঁদ্র (Adrien-Marie Legendre) ১৮০৫ সালে — গাউস দাবি করেন তিনি আগে থেকেই ব্যবহার করছিলেন। এই অগ্রাধিকার নিয়ে ইতিহাসে বিতর্ক আছে।</div></div>

  <div class="diagram">
    <div class="diag-title">স্বাভাবিক বণ্টন — The Bell Curve and the 68-95-99.7 Rule</div>
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bellGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#2dd4bf;stop-opacity:0.4"/>
          <stop offset="100%" style="stop-color:#2dd4bf;stop-opacity:0.05"/>
        </linearGradient>
      </defs>
      <!-- Axis -->
      <line class="axis" x1="30" y1="210" x2="530" y2="210"/>
      <!-- Bell curve path -->
      <path d="M 50 210 Q 100 210 140 195 Q 180 180 200 140 Q 220 70 280 30 Q 340 70 360 140 Q 380 180 420 195 Q 460 210 510 210 Z" fill="url(#bellGrad3)" stroke="#5eead4" stroke-width="2"/>
      <!-- σ markers -->
      <line class="grid-line" x1="200" y1="30" x2="200" y2="210" stroke-dasharray="3,3"/>
      <line class="grid-line" x1="240" y1="50" x2="240" y2="210" stroke-dasharray="3,3"/>
      <line class="grid-line" x1="280" y1="30" x2="280" y2="210" stroke-dasharray="3,3"/>
      <line class="grid-line" x1="320" y1="50" x2="320" y2="210" stroke-dasharray="3,3"/>
      <line class="grid-line" x1="360" y1="30" x2="360" y2="210" stroke-dasharray="3,3"/>
      <!-- Labels -->
      <text class="lbl-hot" x="280" y="22" text-anchor="middle" font-weight="700" font-size="14">μ (গডেট)</text>
      <text class="lbl-sm" x="200" y="225" text-anchor="middle">−৩σ</text>
      <text class="lbl-sm" x="240" y="225" text-anchor="middle">−২σ</text>
      <text class="lbl-sm" x="280" y="225" text-anchor="middle">−১σ</text>
      <text class="lbl-sm" x="320" y="225" text-anchor="middle">+১σ</text>
      <text class="lbl-sm" x="360" y="225" text-anchor="middle">+২σ</text>
      <text class="lbl-sm" x="400" y="225" text-anchor="middle">+৩σ</text>
      <!-- Percentage bands -->
      <text class="lbl-cyan" x="300" y="100" text-anchor="middle" font-weight="700" font-size="16">৬৮%</text>
      <text class="lbl-cyan" x="280" y="155" text-anchor="middle" font-size="11">(±১σ)</text>
      <text class="lbl-leaf" x="345" y="170" text-anchor="middle" font-weight="700" font-size="13">৯৫%</text>
      <text class="lbl-leaf" x="345" y="184" text-anchor="middle" font-size="10">(±২σ)</text>
      <text class="lbl-amber" x="395" y="190" text-anchor="middle" font-weight="700" font-size="11">৯৯.৭%</text>
      <text class="lbl-amber" x="395" y="202" text-anchor="middle" font-size="9">(±৩σ)</text>
    </svg>
    <div class="diag-cap">৬৮-৯৫-৯৯.৭ নিয়ম: গডেট থেকে ±১σ ব্যবধানে ৬৮% ডেটা, ±২σ তে ৯৫%, ±৩σ তে ৯৯.৭%। বাইরে মাত্র ০.৩% — চরম বিরল। এটাই প্রকৃতির ছন্দ।</div>
  </div>

  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">৬৮%</div><div class="sc-label">গডেট থেকে ±১σ ব্যবধানে</div></div>
    <div class="stat-card"><div class="sc-num">৯৫%</div><div class="sc-label">±২σ ব্যবধানে</div></div>
    <div class="stat-card"><div class="sc-num">৯৯.৭%</div><div class="sc-label">±৩σ ব্যবধানে</div></div>
    <div class="stat-card"><div class="sc-num">০.৩%</div><div class="sc-label">চরম মান — খুবই বিরল</div></div>
  </div>

  <div class="code-block"># ── STEP 1: The Normal distribution deep dive ──
# The most important distribution in statistics.

normal = """
THE NORMAL DISTRIBUTION (Gaussian):

PDF: f(x) = (1/(σ√(2π))) × exp(−(x−μ)²/(2σ²))

KEY PARAMETERS:
  μ (mean): center of the bell
  σ (std dev): width of the bell

THE 68-95-99.7 RULE:
  68% of data within μ ± 1σ
  95% within μ ± 2σ
  99.7% within μ ± 3σ

Z-SCORE:
  z = (x − μ) / σ
  → How many standard deviations from mean
  → Standardizes comparison across distributions

  IQ example: μ=100, σ=15
    IQ 115: z=1.0 (top 16%)
    IQ 130: z=2.0 (top 2.3%)
    IQ 145: z=3.0 (top 0.13%)
    IQ 160: z=4.0 (top 0.003%)

GAUSS'S DISCOVERY (1801):
  Ceres (dwarf planet) disappeared into sun's glare.
  Gauss used normal distribution of measurement errors
  to predict its position → found!
  → Errors cluster around 0 (most common)
  → Large errors are rare
  → This is the normal distribution!

WHY NORMAL IS EVERYWHERE (CLT):
  Sum/average of independent variables → normal
  → Heights, weights, errors, test scores
"""

print(normal)

# PYTHON: Normal distribution:
normal_code = """
import numpy as np
from scipy import stats

# IQ distribution: μ=100, σ=15:
mu, sigma = 100, 15

# What IQ is top 5%? (95th percentile):
top5 = stats.norm.ppf(0.95, mu, sigma)
print(f"Top 5% IQ: {top5:.1f}")  # ~124.7

# P(IQ > 130)?
p_above_130 = 1 - stats.norm.cdf(130, mu, sigma)
print(f"P(IQ > 130): {p_above_130:.4f}")  # ~0.0228

# P(IQ between 85 and 115)?
p_range = stats.norm.cdf(115, mu, sigma) - stats.norm.cdf(85, mu, sigma)
print(f"P(85 < IQ < 115): {p_range:.4f}")  # ~0.683

# Z-scores for various IQs:
for iq in [70, 85, 100, 115, 130, 145]:
    z = (iq - mu) / sigma
    percentile = stats.norm.cdf(z) * 100
    print(f"IQ {iq}: z={z:.2f}, percentile={percentile:.1f}%")
"""

print(normal_code)</div>

  <div class="code-block"># ── STEP 2: Central Limit Theorem in action ──
# Why averages are normal regardless of original distribution.

clt_action = """
CENTRAL LIMIT THEOREM (CLT) — IN ACTION:

CLT: sample mean of n independent observations → Normal(μ, σ²/n)
  regardless of original distribution!

IMPLICATIONS:
  1. Sample means are normal even for non-normal data
  2. Confidence intervals use normal (or t for small samples)
  3. Hypothesis tests use normal approximation
  4. The larger n, the closer to normal

STANDARD ERROR:
  SE = σ / √n
  → Measures uncertainty in sample mean
  → Larger n → smaller SE → more precise estimate

  Example: σ=15, n=100
  SE = 15/10 = 1.5
  → Sample mean ± 1.5 has 95% CI of ± 2×1.5 = ±3

CONFIDENCE INTERVAL FOR MEAN:
  CI = x̄ ± z × (σ/√n)
  where z = 1.96 for 95% confidence

  Example: sample mean IQ = 105, σ=15, n=100
  95% CI = 105 ± 1.96 × 1.5 = [102.1, 107.9]

  → We're 95% confident the true mean is between 102.1 and 107.9

WHEN CLT DOESN'T APPLY:
  → Very skewed distributions (need larger n)
  → Heavy-tailed distributions (infinite variance)
  → Correlated observations (not independent)
"""

print(clt_action)

# PYTHON: CLT verification:
clt_verify = """
import numpy as np
np.random.seed(42)

# CLT: sample means of UNIFORM[0,1] → Normal(0.5, 1/(12n))
for n in [1, 2, 5, 30, 100]:
    means = [np.random.uniform(0, 1, n).mean() for _ in range(10000)]
    actual_mean = np.mean(means)
    actual_se = np.std(means)
    theoretical_se = np.sqrt(1/12) / np.sqrt(n)
    print(f"n={n:3d}: mean={actual_mean:.4f}, SE={actual_se:.4f} "
          f"(theory: {theoretical_se:.4f})")

# Confidence interval:
sample = np.random.normal(100, 15, 50)  # n=50
x_bar = sample.mean()
se = 15 / np.sqrt(50)  # known σ
ci_low = x_bar - 1.96 * se
ci_high = x_bar + 1.96 * se
print(f"\\n95% CI for mean: [{ci_low:.2f}, {ci_high:.2f}]")
"""

print(clt_verify)</div>

  <div class="code-block"># ── STEP 3: Other important distributions ──
# Beyond normal — real data has many shapes.

other_dists = """
IMPORTANT DISTRIBUTIONS:

1. LOGNORMAL:
   exp(Normal) → right-skewed
   Income, wealth, stock prices
   Mean > Median (skewed right)

2. POWER LAW (Pareto):
   P(X) ~ 1/x^α
   City sizes, word frequencies, wealth
   "80/20 rule": 80% of effects from 20% of causes
   Heavy tail → extreme events common

3. GAMMA:
   Generalization of exponential
   Used for waiting times, Bayesian priors

4. BETA:
   Distribution on [0, 1]
   Models probabilities (Bayesian prior for Bernoulli)
   Beta(1,1) = Uniform
   Beta(α,β) with α>β → right-skewed

5. WEIBULL:
   Reliability/failure analysis
   Flexible shape (increasing/decreasing hazard)
   Used for product lifetime modeling

6. t-DISTRIBUTION:
   Like normal but heavier tails
   Used when σ unknown and n small
   Degrees of freedom = n−1
   As n → ∞: t → Normal

7. CHI-SQUARED (χ²):
   Sum of squared standard normals
   Used in goodness-of-fit, independence tests
   Right-skewed (only positive)

8. F-DISTRIBUTION:
   Ratio of two chi-squareds
   Used in ANOVA (comparing variances)

CHOOSING THE RIGHT DISTRIBUTION:
  Heights, errors, averages → Normal
  Counts/time → Poisson/Exponential
  Income, wealth → Lognormal/Power law
  Probabilities → Beta
  Reliability → Weibull
  Ratios → F
  Small samples → t
"""

print(other_dists)

# PYTHON: Distribution comparison:
dist_compare = """
import numpy as np
from scipy import stats

# Compare distributions visually (via statistics):
np.random.seed(42)

distributions = {
    'Normal(100, 15)': np.random.normal(100, 15, 100000),
    'Lognormal(4.5, 0.5)': np.random.lognormal(4.5, 0.5, 100000),
    'Exponential(10)': np.random.exponential(10, 100000),
    'Pareto(3)': np.random.pareto(3, 100000) + 1,
    'Uniform(50, 150)': np.random.uniform(50, 150, 100000),
}

print(f"{'Distribution':25s} {'Mean':>8s} {'Median':>8s} {'Std':>8s} {'Skew':>8s}")
for name, data in distributions.items():
    print(f"{name:25s} {data.mean():8.2f} {np.median(data):8.2f} "
          f"{data.std():8.2f} {stats.skew(data):8.2f}")

# Key insight:
# Normal: mean ≈ median, skew ≈ 0
# Lognormal/Exponential: mean >> median, skew > 0 (right-skewed)
# Pareto: extreme skew, heavy tail
"""

print(dist_compare)</div>

  <div class="code-block"># ── STEP 4: Sampling distributions ──
# The distribution of statistics (not data).

sampling_dist = """
SAMPLING DISTRIBUTIONS:

A STATISTIC (mean, variance, proportion) computed from samples
also has a distribution.

SAMPLE MEAN (x̄):
  x̄ ~ Normal(μ, σ²/n) approximately (CLT)
  Standard error: SE = σ/√n

SAMPLE PROPORTION (p̂):
  p̂ ~ Normal(p, p(1-p)/n) approximately
  SE = √(p(1-p)/n)

  Example: 60/100 people prefer A → p̂=0.6
  SE = √(0.6×0.4/100) = 0.049
  95% CI: 0.6 ± 0.096 = [0.504, 0.696]

SAMPLE VARIANCE (s²):
  (n-1)s²/σ² ~ χ²(n-1)
  Chi-squared distribution with n−1 degrees of freedom

t-STATISTIC (when σ unknown):
  t = (x̄ − μ) / (s/√n)
  t ~ t(n−1) distribution

  → Used for confidence intervals and hypothesis tests
  → Heavier tails than normal (accounts for estimating σ)

WHY THIS MATTERS:
  → We can quantify UNCERTAINTY in estimates
  → Confidence intervals: "true value is in [a, b] with 95% confidence"
  → Hypothesis tests: "is the effect real or chance?"
"""

print(sampling_dist)

# PYTHON: Sampling distributions:
sd_code = """
import numpy as np
from scipy import stats

# Demonstrate: sample mean ~ Normal(μ, σ²/n):
np.random.seed(42)
mu, sigma, n = 100, 15, 50

# Draw 10000 samples, each of size n:
sample_means = [np.random.normal(mu, sigma, n).mean() for _ in range(10000)]

# The sample means should be Normal(100, 15/√50):
print(f"Sample means:")
print(f"  Mean: {np.mean(sample_means):.4f} (expected: {mu})")
print(f"  SE: {np.std(sample_means):.4f} (expected: {sigma/np.sqrt(n):.4f})")

# Sample proportion:
true_p = 0.5
n = 100
sample_props = [np.mean(np.random.choice([0,1], n, p=[1-true_p, true_p])) for _ in range(10000)]
print(f"\\nSample proportions:")
print(f"  Mean: {np.mean(sample_props):.4f} (expected: {true_p})")
print(f"  SE: {np.std(sample_props):.4f} (expected: {np.sqrt(true_p*(1-true_p)/n):.4f})")

# 95% CI for a proportion (political poll):
favor = 520
total = 1000
p_hat = favor / total
se = np.sqrt(p_hat * (1-p_hat) / total)
ci = (p_hat - 1.96*se, p_hat + 1.96*se)
print(f"\\nPoll: {favor}/{total} favor candidate")
print(f"p̂ = {p_hat:.3f}")
print(f"95% CI: [{ci[0]:.3f}, {ci[1]:.3f}]")
"""

print(sd_code)</div>

  <div class="code-block"># ── STEP 5: Parameter estimation ──
# Estimating population parameters from samples.

estimation = """
PARAMETER ESTIMATION:

We want to estimate POPULATION parameters from SAMPLE data.

METHOD 1: METHOD OF MOMENTS (MoM):
  Set sample moments = population moments.
  → Sample mean = population mean
  → Sample variance = population variance
  → Simple but not always optimal

METHOD 2: MAXIMUM LIKELIHOOD (MLE):
  Find parameters that MAXIMIZE the likelihood of observed data.
  L(θ) = P(data | θ)
  → Find θ that makes data MOST probable
  → Most popular estimation method
  → Asymptotically efficient (optimal for large n)

  Example: Normal distribution MLE
  μ̂ = x̄ (sample mean)
  σ̂² = (1/n)Σ(xᵢ−x̄)² (biased sample variance)

METHOD 3: BAYESIAN ESTIMATION:
  Combine prior belief with data:
  P(θ|data) ∝ P(data|θ) × P(θ)
  posterior ∝ likelihood × prior
  → Incorporates prior knowledge
  → Produces distribution (not point estimate)
  → Credible intervals (not confidence intervals)

BIAS vs VARIANCE (of estimator):
  Bias: E[θ̂] − θ (systematic error)
  Variance: how much θ̂ varies across samples
  MSE = Bias² + Variance

  Unbiased: sample mean (E[x̄] = μ)
  Biased: sample variance with n denominator (use n−1 for unbiased)

CONFIDENCE INTERVAL (frequentist):
  "If we repeated sampling many times, 95% of CIs would contain true θ"
  CI = θ̂ ± z × SE(θ̂)
  → NOT "95% probability θ is in CI" (common misconception)
"""

print(estimation)

# PYTHON: MLE estimation:
mle_code = """
import numpy as np
from scipy.optimize import minimize
from scipy.stats import norm

# Generate data from Normal(μ=50, σ=10):
np.random.seed(42)
true_mu, true_sigma = 50, 10
data = np.random.normal(true_mu, true_sigma, 200)

# MLE for Normal: μ̂ = x̄, σ̂² = (1/n)Σ(xᵢ−x̄)²
mu_mle = np.mean(data)
sigma_mle = np.sqrt(np.mean((data - mu_mle)**2))  # note: divides by n, not n-1
print(f"MLE: μ={mu_mle:.4f} (true: {true_mu})")
print(f"MLE: σ={sigma_mle:.4f} (true: {true_sigma})")

# Unbiased variance (divides by n-1):
sigma_unbiased = np.std(data, ddof=1)
print(f"Unbiased σ: {sigma_unbiased:.4f}")

# Generic MLE via optimization (for any distribution):
def negative_log_likelihood(params, data):
    mu, sigma = params
    if sigma <= 0:
        return np.inf
    return -np.sum(norm.logpdf(data, mu, sigma))

result = minimize(negative_log_likelihood, [40, 5], args=(data,),
                  method='Nelder-Mead')
print(f"Optimized MLE: μ={result.x[0]:.4f}, σ={result.x[1]:.4f}")

# Confidence interval for mean:
n = len(data)
se = sigma_unbiased / np.sqrt(n)
ci_low = mu_mle - 1.96 * se
ci_high = mu_mle + 1.96 * se
print(f"95% CI for μ: [{ci_low:.4f}, {ci_high:.4f}]")
"""

print(mle_code)</div>

  <div class="code-block"># ── STEP 6: Distributions best practices ──
# Choose and estimate distributions correctly.

best_practices = [
    "Normal: bell curve, μ=mean, σ=spread",
    "68-95-99.7 rule: within 1σ, 2σ, 3σ",
    "Z-score: (x−μ)/σ standardizes comparisons",
    "CLT: sample means → Normal regardless of original",
    "Standard Error: SE = σ/√n (decreases with n)",
    "Lognormal for income/wealth (right-skewed)",
    "Power law for cities/words (heavy tail)",
    "t-distribution when σ unknown and n small",
    "Chi-squared for variance, goodness-of-fit",
    "MLE: maximize likelihood of observed data",
    "Bayesian: posterior ∝ likelihood × prior",
    "CI: 95% confidence means 95% of intervals contain true value",
    "MSE = Bias² + Variance (estimator quality)",
    "Use n−1 for unbiased sample variance",
    "Always check distribution assumptions",
]

print("DISTRIBUTIONS & ESTIMATION BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Distribution     │ Parameters                      │
# ├──────────────────┼──────────────────────────────────┤
# │ Normal(μ,σ)     │ μ=mean, σ=std                   │
# │ Lognormal        │ μ,σ of log(X)                   │
# │ Exponential(λ)  │ λ=rate, mean=1/λ               │
# │ Poisson(λ)      │ λ=rate, mean=variance=λ        │
# │ Beta(α,β)      │ α,β shape parameters            │
# │ t(df)           │ df=n−1, heavier tails          │
# │ χ²(k)           │ k=df, right-skewed              │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৩০ (Architect's Compass) Door ৬-এ Statistics & Distributions শিখেছিলে — গাউসের বক্রতা সেই একই ধারণার গভীরে যাওয়া। Book ৩১ (Classic ML) Door ৮ Bias-Variance Tradeoff — সেখানে σ² (ভ্যারিয়েন্স) বনাম bias এর ভারসাম্য দেখেছিলে। এখন বুঝতে পারো কেন ভ্যারিয়েন্স এত গুরুত্বপূর্ণ।</div></div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ব্যাখ্যা</div>
      এই ছেলের IQ ১৪০ — সে প্রতিটা বিষয়ে প্রতিভাবান! কারণ ১৪০ অনেক উঁচু।
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ব্যাখ্যা</div>
      IQ ১৪০ মানে z = (১৪০−১০০)/১৫ = ২.৬৭σ — জনসংখ্যার মাত্র ০.৪% এই স্তরে। কিন্তু একটা নির্দিষ্ট বিষয়ে পারদর্শিতা আলাদা — IQ সব ক্ষেত্রে সমান নয়।
    </div>
  </div>

  <div class="verse">
    <div class="verse-arabic">إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ</div>
    <div class="verse-translation">নিশ্চয় আসমান ও পৃথিবীর সৃষ্টিতে, রাত ও দিনের পরিবর্তনে, বোদ্ধাদের জন্য নিদর্শন রয়েছে।</div>
    <div class="verse-ref">— কুরআন ৩:১৯০</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🔔</div>
    <div class="secret-text">প্রকৃতি একটা ঘণ্টা বাজায় — মাঝে সবাই, পাশে কেউ কেউ।</div>
    <div class="secret-sub">Nature rings a bell — most in the middle, few at the edges.</div>
  </div>`,
  senior: {
    title: "বণ্টন না দেখে সিদ্ধান্ত নেবে না",
    body: `<p><strong>১. প্রথম প্রশ্ন — বণ্টন কীরকম?</strong> স্বাভাবিক (ঘণ্টা)? বিষম (একদিকে ঝুঁকে)? দ্বি-শৃঙ্গ (দুই চূড়া)? বণ্টন না জানলে গডেট বিভ্রান্তিকর।</p>
    <p><strong>২. Z-স্কোর ব্যবহার করো:</strong> যেকোনো মানকে গডেট থেকে কতদূর তা মাপতে। z > ২ বা z < −২ মানে অস্বাভাবিক।</p>
    <p><strong>৩. চরম মান সন্দেহ করো:</strong> ±৩σ এর বাইরে কিছু পেলে — হয় সত্যিই বিরল, নয়তো পরিমাপে ভুল। গাউস নিজেই Ceres-এর পর্যবেক্ষণে এটা খুঁজেছিলেন।</p>`
  }
});

doors.push({
  num: 4,
  icon: "⚖️",
  color: "#5eead4",
  name: "শূন্যের পরীক্ষা",
  subtitle: "The Test of the Null",
  tech: "Hypothesis Testing, p-value, and Statistical Significance (Fisher, 1925)",
  spirit: "ফুরকান — সত্য ও মিথ্যার মধ্যে পার্থক্যকারী মানদণ্ড",
  secret: "প্রমাণ করো না যে তুমি ঠিক — চেষ্টা করো প্রমাণ করতে যে তুমি ভুল। যদি ভুল প্রমাণ না হও — তবে হয়তো তুমি ঠিক।",
  recall: {
    q: "p-value কী এবং Fisher ০.০৫ সীমা কেন বেছেছিলেন?",
    qen: "What is a p-value and why did Fisher choose the 0.05 threshold?",
    a: "p-value হলো সম্ভাবনা যে এই ফলাফল বা তার চেয়ে চরম — শূন্য অনুকল্প সত্য হলে। Fisher ০.০৫ বেছেছিলেন কারণ এটি ১৯৬-এর কাছাকাছি — ২ প্রমাণ-ব্যবধান। ২০ বারে ১ বার সম্ভাবনা — যথেষ্ট অসম্ভাব্য।",
    aen: "p-value is the probability of this result or more extreme — if the null hypothesis is true. Fisher chose 0.05 because it approximates 1.96 — 2 standard deviations. A 1-in-20 chance — sufficiently unlikely."
  },
  story: `<p class="scene-setting">হার্পেনডেন, ইংল্যান্ড, ১৯২০-এর দশক। Rothamsted Experimental Station-এ একজন বিজ্ঞানী আলু চাষ নিয়ে হিসাব করছেন। তাঁর নাম — রোনাল্ড আইলমার ফিশার (Ronald Aylmer Fisher)। সামনে দুই ধরনের আলু — একটাতে সার দেওয়া হয়েছে, আরেকটাতে না। প্রশ্ন: সার দেওয়া আলুর ফলন সত্যিই বেশি, নাকি কেবল কাকতালীয়?</p>

  <p class="scene-setting en">Harpenden, England, 1920s. At the Rothamsted Experimental Station, a scientist is calculating potato yields. His name — Ronald Aylmer Fisher. Before him: two types of potatoes — one fertilized, one not. Question: is the fertilized potato truly higher-yielding, or just coincidence?</p>

  <div class="dialogue">
    <p><strong>ফিশার:</strong> তুমি বললে সার দেওয়া আলু বেশি ফলেছে। কিন্তু কত বেশি? যদি গডেট থেকে সামান্য বেশি — হয়তো কাকতালীয়। যদি অনেক বেশি — সম্ভবত সত্যিকারের পার্থক্য। কিন্তু 'অনেক বেশি' মানে কত? এখানেই পরিসংখ্যান প্রয়োজন।</p>
    <p><strong>তুমি:</strong> তাহলে কীভাবে জানব পার্থক্য সত্যি?</p>
    <p><strong>ফিশার:</strong> একটা অদ্ভুত কৌশল ব্যবহার করো। ধরে নাও পার্থক্য নেই — সার দিলেও না দিলেও একই। এটাই শূন্য অনুকল্প (null hypothesis)। এখন প্রশ্ন: যদি শূন্য সত্যি হয় — তাহলে তুমি যে পার্থক্য দেখলে তার সম্ভাবনা কত? যদি সম্ভাবনা খুব কম (৫%-এর কম) — তবে শূন্য অনুকল্প প্রত্যাখ্যান করো। পার্থক্য সত্যি।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Fisher:</strong> You say fertilized potatoes yielded more. But how much more? If slightly above average — perhaps coincidence. If much more — likely a real difference. But what does 'much more' mean? This is where statistics enters.</p>
    <p><strong>You:</strong> Then how do I know the difference is real?</p>
    <p><strong>Fisher:</strong> Use a strange trick. Assume there is NO difference — fertilizer or not, same yield. This is the null hypothesis. Now the question: if the null is true — what's the probability of seeing the difference you observed? If the probability is very low (below 5%) — reject the null. The difference is real.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক নির্ভুলতা:</strong> ফিশার (১৮৯০–১৯৬২) তাঁর বই <em>Statistical Methods for Research Workers</em> (১৯২৫)-এ p-value জনপ্রিয় করেন এবং ০.০৫ সীমা প্রস্তাব করেন। <strong>কিন্তু তিনি p-value আবিষ্কার করেননি।</strong> কার্ল পিয়ার্সন (Karl Pearson) ১৯০০ সালে তাঁর কাই-বর্গ (chi-squared) পরীক্ষায় P সংকেত চালু করেন। ফিশার সেটাকে প্রতিষ্ঠিত ও প্রচলিত করেন। তিনি Rothamsted-এ ১৯১৯–১৯৩৩ সাল পর্যন্ত কাজ করেন — সেখানেই আনুমানিক বৈচিত্র্য বিশ্লেষণ (ANOVA) আবিষ্কার করেন।</div></div>

  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুল বোঝাবুঝি:</strong> p-value বলে না যে শূন্য অনুকল্প সত্যি না মিথ্যা। p-value বলে — শূন্য সত্যি হলে এই ফলাফল কতটা অসম্ভাব্য। ছোট p-value = ফলাফল অস্বাভাবিক, শূন্য সন্দেহজনক। বড় p-value = ফলাফল স্বাভাবিক, শূন্য গ্রহণযোগ্য। এটা 'সত্যতার প্রমাণ' নয় — এটা 'অস্বাভাবিকতার মাপ'।</div></div>

  <div class="diagram">
    <div class="diag-title">p-value এবং গুরুত্বপূর্ণ সীমা — Visualizing the p-value</div>
    <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bellGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#2dd4bf;stop-opacity:0.35"/>
          <stop offset="100%" style="stop-color:#2dd4bf;stop-opacity:0.03"/>
        </linearGradient>
      </defs>
      <!-- Null distribution (centered) -->
      <path d="M 50 200 Q 120 200 160 180 Q 200 160 220 120 Q 240 60 280 40 Q 320 60 340 120 Q 360 160 400 180 Q 440 200 510 200 Z" fill="url(#bellGrad4)" stroke="#5eead4" stroke-width="2"/>
      <!-- Right tail (rejection region) -->
      <path d="M 430 200 Q 450 198 470 190 Q 490 180 510 200 Z" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444" stroke-width="1.5"/>
      <!-- Left tail -->
      <path d="M 50 200 Q 70 198 90 190 Q 110 180 130 200 Z" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444" stroke-width="1.5"/>
      <!-- Threshold lines -->
      <line class="grid-line" x1="130" y1="40" x2="130" y2="200" stroke-dasharray="4,3" stroke="#ef4444" stroke-width="1.5"/>
      <line class="grid-line" x1="430" y1="40" x2="430" y2="200" stroke-dasharray="4,3" stroke="#ef4444" stroke-width="1.5"/>
      <!-- Observed value marker -->
      <circle class="node-hot" cx="455" cy="190" r="6"/>
      <text class="lbl-hot" x="455" y="180" text-anchor="middle" font-weight="700">x̄</text>
      <!-- Labels -->
      <text class="lbl-sm" x="280" y="30" text-anchor="middle" font-weight="700" font-size="13">শূন্য অনুকল্প বণ্টন (H₀)</text>
      <text class="lbl-amber" x="470" y="225" text-anchor="middle" font-weight="700">α = ০.০৫</text>
      <text class="lbl-amber" x="90" y="225" text-anchor="middle" font-weight="700">α = ০.০৫</text>
      <text class="lbl-hot" x="440" y="145" text-anchor="middle" font-size="11">p < ০.০৫</text>
      <text class="lbl-hot" x="440" y="158" text-anchor="middle" font-size="10">(প্রত্যাখ্যান)</text>
      <text class="lbl-sm" x="280" y="220" text-anchor="middle">গ্রহণ এলাকা (৯৫%)</text>
      <!-- Axis -->
      <line class="axis" x1="30" y1="200" x2="530" y2="200"/>
    </svg>
    <div class="diag-cap">শূন্য অনুকল্প (H₀) ধরে নেওয়া হলো বণ্টন। যদি পর্যবেক্ষিত মান (x̄) লেজে পড়ে (p < ০.০৫) — H₀ প্রত্যাখ্যান করো। মাঝে পড়ে — H₀ গ্রহণ করো।</div>
  </div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ব্যাখ্যা</div>
      p = ০.০৪ মানে ৯৬% সম্ভাবনা যে আমার অনুকল্প সত্যি!
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ব্যাখ্যা</div>
      p = ০.০৪ মানে — শূন্য অনুকল্প সত্যি হলে, এই ফলাফল বা তার চেয়ে চরম পাওয়ার সম্ভাবনা মাত্র ৪%। অর্থাৎ ফলাফল অস্বাভাবিক — কিন্তু এটা অনুকল্প সত্যি প্রমাণ করে না।
    </div>
  </div>

  <div class="code-block"># ── STEP 1: Hypothesis testing framework ──
# Fisher's framework for making decisions under uncertainty.

hypothesis = """
HYPOTHESIS TESTING (Fisher, 1925):

THE FRAMEWORK:
  1. State NULL HYPOTHESIS (H₀): "no effect/no difference"
  2. State ALTERNATIVE (H₁): "there IS an effect"
  3. Choose significance level α (usually 0.05)
  4. Compute TEST STATISTIC from data
  5. Calculate P-VALUE: P(data | H₀ true)
  6. Decision: if p < α → reject H₀

P-VALUE:
  "If H₀ were true, how surprising is this data?"
  p = 0.03 → "3% chance of seeing this data if no effect"
  → Low p → evidence AGAINST H₀

TYPE I AND TYPE II ERRORS:
  Type I (α): reject H₀ when it's TRUE (false positive)
  Type II (β): fail to reject H₀ when it's FALSE (false negative)
  Power = 1 − β = probability of correctly rejecting false H₀

THE LADY TASTING TEA (Fisher, 1935):
  Muriel Bristol claimed she could tell if milk was added
  before or after tea.
  Fisher: 8 cups (4 milk-first, 4 tea-first).
  Bristol: identified ALL correctly.
  P(all correct by chance) = 1/70 = 1.4%
  p < 0.05 → she really could tell!

  THIS WAS THE BIRTH OF MODERN STATISTICS.
"""

print(hypothesis)

# PYTHON: Hypothesis testing:
ht_code = """
import numpy as np
from scipy import stats

# Two-sample t-test: does fertilizer increase yield?
control = [20, 22, 19, 21, 23, 18, 24, 20]
treatment = [25, 27, 24, 26, 28, 23, 29, 25]

# H₀: no difference (control mean = treatment mean)
# H₁: treatment > control

t_stat, p_value = stats.ttest_ind(treatment, control)
print(f"t-statistic: {t_stat:.4f}")
print(f"p-value: {p_value:.6f}")
# p < 0.05 → reject H₀ → fertilizer works!

# Effect size (Cohen's d):
pooled_std = np.sqrt(
    ((len(control)-1)*np.var(control, ddof=1) +
     (len(treatment)-1)*np.var(treatment, ddof=1)) /
    (len(control) + len(treatment) - 2)
)
cohens_d = (np.mean(treatment) - np.mean(control)) / pooled_std
print(f"Cohen's d: {cohens_d:.4f}")  # Effect size

# Power analysis (how many samples needed?):
from statsmodels.stats.power import ttest_power
power = ttest_power(cohens_d, nobs=8, alpha=0.05, alternative='larger')
print(f"Power: {power:.4f}")
"""

print(ht_code)</div>

  <div class="code-block"># ── STEP 2: Types of hypothesis tests ──
# Choosing the right test.

tests = """
COMMON HYPOTHESIS TESTS:

1. ONE-SAMPLE t-TEST:
   Compare sample mean to known value.
   H₀: μ = μ₀
   "Is average height 170cm?"
   t = (x̄ − μ₀) / (s/√n)

2. TWO-SAMPLE t-TEST:
   Compare two group means.
   H₀: μ₁ = μ₂
   "Does fertilizer increase yield?"

3. PAIRED t-TEST:
   Compare same subjects before/after.
   "Did blood pressure drop after medication?"

4. CHI-SQUARED TEST:
   Test independence of categorical variables.
   H₀: variables are independent
   "Is gender independent of voting preference?"

5. ANOVA (Analysis of Variance):
   Compare 3+ group means.
   H₀: all group means equal
   "Do 3 teaching methods produce different scores?"

6. MANN-WHITNEY U (non-parametric):
   Compare two groups (non-normal data).
   Doesn't assume normality.

7. KOLMOGOROV-SMIRNOV:
   Test if data follows a specific distribution.
   "Is this data normally distributed?"

8. FISHER'S EXACT TEST:
   For small sample sizes (categorical).
   More accurate than chi-squared when n < 20.

CHOOSING A TEST:
  → Comparing means? → t-test (2 groups), ANOVA (3+ groups)
  → Comparing proportions? → z-test, chi-squared
  → Non-normal data? → Mann-Whitney, Wilcoxon
  → Testing distribution? → KS, Shapiro-Wilk
  → Small samples? → Fisher's exact
"""

print(tests)</div>

  <div class="code-block"># ── STEP 3: p-value controversies ──
# The ongoing debate about p-values.

controversy = """
P-VALUE CONTROVERSIES:

WHAT P-VALUE IS:
  P(data | H₀) — probability of data given null hypothesis

WHAT P-VALUE IS NOT:
  NOT P(H₀ | data) — probability null is true
  NOT effect size — just statistical significance
  NOT practical significance — small effect can be "significant"

COMMON MISINTERPRETATIONS:
  ❌ "p=0.05 means 5% chance H₀ is true"
  ✅ "p=0.05 means 5% chance of this data if H₀ is true"

  ❌ "p<0.05 proves the effect is real"
  ✅ "p<0.05 is evidence against H₀ (not proof)"

THE REPLICATION CRISIS:
  → Many published findings fail to replicate
  → Psychology, medicine, economics affected
  → Causes: p-hacking, publication bias, small samples

P-HACKING:
  → Try many analyses until p<0.05
  → Drop "outliers," change variables, switch tests
  → Solution: pre-registration, transparency

MULTIPLE COMPARISONS:
  → Test 20 hypotheses → expect 1 false positive (at α=0.05)
  → Bonferroni correction: α/m (m = number of tests)
  → False Discovery Rate (FDR): control expected proportion of false discoveries

ALTERNATIVES TO P-VALUES:
  → Effect sizes (how big is the effect?)
  → Confidence intervals (range of plausible values)
  → Bayesian methods (posterior probabilities)
  → Meta-analysis (combine multiple studies)
"""

print(controversy)</div>

  <div class="code-block"># ── STEP 4: Confidence intervals ──
# Quantifying uncertainty in estimates.

ci = """
CONFIDENCE INTERVALS (Neyman, 1937):

CI = estimate ± margin of error
  → Range of plausible values for the parameter

95% CONFIDENCE INTERVAL:
  "If we repeated sampling 100 times, 95 of the CIs
   would contain the true parameter."

  CI = x̄ ± 1.96 × SE
  SE = σ/√n (standard error)

EXAMPLE: Political poll
  520/1000 favor candidate (p̂=0.52)
  SE = √(0.52×0.48/1000) = 0.0158
  95% CI: 0.52 ± 0.031 = [0.489, 0.551]

  → "Candidate has between 48.9% and 55.1% support (95% confidence)"

MARGIN OF ERROR:
  MOE = z × SE
  For 95%: MOE = 1.96 × √(p(1-p)/n)
  → Poll with n=1000: MOE ≈ ±3%

  Larger n → smaller MOE → more precise

WHAT CI DOESN'T MEAN:
  ❌ "95% probability the true value is in [a,b]"
  ✅ "95% of similarly constructed intervals contain the true value"

  (The parameter is fixed — it's either in the CI or not)

PRACTICAL USE:
  → Report effect size AND confidence interval (not just p-value)
  → If CI includes 0 → effect not statistically significant
  → Narrow CI → precise estimate
  → Wide CI → need more data
"""

print(ci)

# PYTHON: Confidence intervals:
ci_code = """
import numpy as np
from scipy import stats

# 95% CI for a mean:
data = np.random.normal(50, 10, 100)
x_bar = np.mean(data)
se = np.std(data, ddof=1) / np.sqrt(len(data))
ci_low = x_bar - 1.96 * se
ci_high = x_bar + 1.96 * se
print(f"Mean: {x_bar:.4f}")
print(f"95% CI: [{ci_low:.4f}, {ci_high:.4f}]")

# 95% CI for a proportion (poll):
n, favor = 1000, 520
p_hat = favor / n
se_prop = np.sqrt(p_hat * (1-p_hat) / n)
ci_low_prop = p_hat - 1.96 * se_prop
ci_high_prop = p_hat + 1.96 * se_prop
print(f"\\nPoll: {favor}/{n} favor")
print(f"Proportion: {p_hat:.4f}")
print(f"95% CI: [{ci_low_prop:.4f}, {ci_high_prop:.4f}]")

# Using scipy:
ci = stats.norm.interval(0.95, loc=p_hat, scale=se_prop)
print(f"scipy CI: [{ci[0]:.4f}, {ci[1]:.4f}]")

# Sample size for desired margin of error:
# MOE = z × √(p(1-p)/n) → n = z²p(1-p)/MOE²
z = 1.96
p = 0.5  # worst case (maximizes n)
moe_target = 0.03  # ±3%
n_needed = z**2 * p * (1-p) / moe_target**2
print(f"\\nSample needed for ±3% MOE: {int(n_needed)}")  # ~1068
"""

print(ci_code)</div>

  <div class="code-block"># ── STEP 5: A/B testing in practice ──
# The commercial application of hypothesis testing.

ab_testing = """
A/B TESTING:

Compare two versions (A=control, B=variant) to see which is better.
  → Core of modern data-driven decision making
  → Used by: Google, Netflix, Amazon, Facebook

THE PROCESS:
  1. Define metric (conversion rate, click rate, revenue)
  2. Randomly assign users to A or B
  3. Collect data for sufficient time
  4. Run hypothesis test:
     H₀: conversion_A = conversion_B
     H₁: conversion_A ≠ conversion_B
  5. If p < 0.05 AND effect is practically significant → deploy winner

SAMPLE SIZE CALCULATION:
  Need enough samples to detect the effect.
  Depends on: baseline rate, minimum detectable effect, α, power

  Rule of thumb: detect 1% change needs ~100K users per group

COMMON MISTAKES:
  → Stopping early (peeking): inflate false positive rate
  → Multiple metrics: correct for multiple comparisons
  → Simpson's paradox: segment before aggregating
  → Novelty effect: temporary boost from change itself
  → Survivorship bias: only analyze completers

PYTHON (statsmodels):
  from statsmodels.stats.proportion import proportions_ztest

  clicks = [150, 180]  # A, B
  visitors = [10000, 10000]
  z, p = proportions_ztest(clicks, visitors)
"""

print(ab_testing)

# PYTHON: A/B test:
ab_code = """
import numpy as np
from scipy import stats

# Simulate A/B test:
np.random.seed(42)
n_A, n_B = 10000, 10000
conv_rate_A = 0.05  # 5% baseline
conv_rate_B = 0.06  # 6% with new design

# Generate conversions (Bernoulli):
conversions_A = np.random.binomial(1, conv_rate_A, n_A)
conversions_B = np.random.binomial(1, conv_rate_B, n_B)

# Conversion rates:
rate_A = conversions_A.mean()
rate_B = conversions_B.mean()
print(f"Conversion A: {rate_A:.4f} ({conversions_A.sum()}/{n_A})")
print(f"Conversion B: {rate_B:.4f} ({conversions_B.sum()}/{n_B})")

# Two-proportion z-test:
pooled_rate = (conversions_A.sum() + conversions_B.sum()) / (n_A + n_B)
se = np.sqrt(pooled_rate * (1 - pooled_rate) * (1/n_A + 1/n_B))
z_stat = (rate_B - rate_A) / se
p_value = 2 * (1 - stats.norm.cdf(abs(z_stat)))

print(f"\\nz-statistic: {z_stat:.4f}")
print(f"p-value: {p_value:.4f}")
if p_value < 0.05:
    print("Significant! Deploy version B")
else:
    print("Not significant. Keep version A")

# Lift:
lift = (rate_B - rate_A) / rate_A
print(f"Lift: {lift*100:.1f}%")

# Confidence interval for the difference:
ci_low = (rate_B - rate_A) - 1.96 * se
ci_high = (rate_B - rate_A) + 1.96 * se
print(f"95% CI for difference: [{ci_low:.4f}, {ci_high:.4f}]")
"""

print(ab_code)</div>

  <div class="code-block"># ── STEP 6: Hypothesis testing best practices ──
# Test correctly and interpret honestly.

best_practices = [
    "H₀: no effect, H₁: there is an effect",
    "p < α → reject H₀ (evidence against null)",
    "p-value ≠ probability H₀ is true",
    "Type I error: false positive (reject true H₀)",
    "Type II error: false negative (keep false H₀)",
    "Power = 1 − β (probability of detecting real effect)",
    "Always report effect size, not just p-value",
    "Confidence intervals show precision of estimate",
    "A/B testing: randomize, collect enough data, then test",
    "Multiple comparisons: use Bonferroni or FDR correction",
    "Pre-register hypotheses to prevent p-hacking",
    "Check assumptions (normality, equal variance)",
    "Non-parametric tests for non-normal data",
    "Practical significance ≠ statistical significance",
    "Replication is the ultimate test",
]

print("HYPOTHESIS TESTING BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Test             │ Use Case                        │
# ├──────────────────┼──────────────────────────────────┤
# │ One-sample t     │ Compare to known value          │
# │ Two-sample t     │ Compare two groups              │
# │ Paired t         │ Before/after same subjects      │
# │ Chi-squared      │ Categorical independence        │
# │ ANOVA            │ 3+ group comparison             │
# │ Mann-Whitney     │ Non-parametric 2-group          │
# │ KS test          │ Distribution fit                │
# │ Fisher exact     │ Small sample categorical        │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ১৬ (The Measure / LLM Evals) Door ২-এ তুমি Evaluation Metrics শিখেছিলে। LLM evaluation-এও একই নীতি — কোনো মডেল ভালো করছে কি না, সেটা p-value দিয়ে যাচাই করা যায়। Book ৩৩ (যুক্তির তাঁত) Door ৩-এ Fallacies শিখেছিলে — p-value ভুল ব্যাখ্যা করাও একটা fallacy।</div></div>

  <div class="verse">
    <div class="verse-arabic">يَوْمَ نَبْعَثُ فِي كُلِّ أُمَّةٍ شَهِيدًا عَلَيْهِمْ</div>
    <div class="verse-translation">যেদিন আমরা প্রতিটি জাতির মধ্যে তাদের বিরুদ্ধে একজন সাক্ষী পাঠাব।</div>
    <div class="verse-ref">— কুরআন ১৬:৮৯</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">⚖️</div>
    <div class="secret-text">নিজেকে ভুল প্রমাণ করার চেষ্টা করো — যদি না পারো, হয়তো তুমি ঠিক।</div>
    <div class="secret-sub">Try to prove yourself wrong — if you can't, perhaps you're right.</div>
  </div>`,
  senior: {
    title: "p-value পবিত্র নয়",
    body: `<p><strong>১. p < ০.০৫ মানে সত্যি নয়:</strong> এটা মাত্র একটা সীমা — মানুষের তৈরি। Fisher নিজেই বলেছিলেন এটা নমনীয়। কখনো ০.০১, কখনো ০.১০।</p>
    <p><strong>২. প্রভাবের আকার (effect size):</strong> p-value বলে পার্থক্য 'আছে কি নেই', কিন্তু কত 'বড়' সেটা বলে না। সবসময় effect size দেখো।</p>
    <p><strong>৩. একাধিক পরীক্ষা:</strong> ২০টা পরীক্ষা করলে কমপক্ষে ১টায় p < ০.০৫ পাবেই — কাকতালীয়। এটাই Door ৯-এ Ioannidis-এর সতর্কতার কারণ।</p>`
  }
});

doors.push({
  num: 5,
  icon: "📐",
  color: "#2dd4bf",
  name: "বিশ্বাস্যতার সীমা",
  subtitle: "The Boundary of Belief",
  tech: "Confidence Intervals — Margin of Error, Precision, and Neyman's 1937 Framework",
  spirit: "যান — যথাযথ অনুমান, নিশ্চিত না হয়ে সম্ভাব্য জ্ঞান",
  secret: "একটা সংখ্যা মিথ্যা বলে — একটা সীমা সত্য বলে। অনুমান কখনো বিন্দু নয়, সীমা।",
  recall: {
    q: "৯৫% confidence interval কী মানে? সাধারণ ভুল ব্যাখ্যা কী?",
    qen: "What does a 95% confidence interval mean? What is the common misinterpretation?",
    a: "৯৫% CI মানে — এই পদ্ধতিতে বারবার নমুনা নিলে, ১০০টার মধ্যে ৯৫টা CI সত্যিকারের মান ধারণ করবে। ভুল ব্যাখ্যা: '৯৫% সম্ভাবনা যে সত্যিকারের মান এই সীমায় আছে' — সত্যিকারের মান স্থির, সীমা পরিবর্তনশীল।",
    aen: "95% CI means — if we repeatedly sample using this method, 95 of 100 CIs will contain the true value. Wrong interpretation: '95% probability the true value is in this range' — the true value is fixed, the interval varies."
  },
  story: `<p class="scene-setting">ওয়ারশ, ১৯৩০। ওয়াক্লাভ পিটকভস্কি (Wacław Pytkowski) নামের একজন কৃষি-অর্থনীতির ছাত্র তাঁর অধ্যাপককে একটা প্রশ্ন করলেন: 'আমি একটা নমুনা থেকে গডেট বের করলাম। কিন্তু এই গডেট কতটা নির্ভুল? পুরো জনগোষ্ঠীর গডেট থেকে কত দূরে?' অধ্যাপক চুপ করে ভাবলেন। তাঁর নাম — জের্জি নেইম্যান (Jerzy Neyman)। সেই রাতে নেইম্যান একটা ধারণা তৈরি করলেন যা পরিসংখ্যানের ইতিহাস বদলে দেবে — বিশ্বাস্যতা-ব্যবধান (confidence interval)।</p>

  <p class="scene-setting en">Warsaw, 1930. Wacław Pytkowski, a student of agricultural economics, asked his professor a question: 'I calculated a mean from a sample. But how precise is it? How far from the true population mean?' The professor thought silently. His name — Jerzy Neyman. That night, Neyman developed an idea that would change statistics — the confidence interval.</p>

  <div class="dialogue">
    <p><strong>নেইম্যান:</strong> তোমার ছাত্রের প্রশ্ন সহজ কিন্তু গভীর। একটা গডেট (point estimate) দিলে — সেটা ঠিক বা ভুল, কিন্তু কতটা ঠিক বা ভুল সেটা বলা যায় না। আমি বলছি — একটা সীমা দাও। গডেট ± কিছু পরিমাণ। এই পরিমাণ নির্ভর করে কতটা নিশ্চিত হতে চাও।</p>
    <p><strong>তুমি:</strong> কীভাবে সীমা নির্ধারণ করব?</p>
    <p><strong>নেইম্যান:</strong> গাউসের বণ্টন ব্যবহার করে। গডেট থেকে ±১.৯৬σ ব্যবধানে সত্যিকারের মান থাকার সম্ভাবনা ৯৫%। এটাই ৯৫% বিশ্বাস্যতা-ব্যবধান — ৯৫% CI। বণ্টনের উপর ভিত্তি করে নির্ভুলতার মাপ দেওয়া যায়।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Neyman:</strong> Your student's question is simple but profound. A point estimate — it's right or wrong, but how right or wrong can't be said. I say — give a range. Mean ± some amount. This amount depends on how confident you want to be.</p>
    <p><strong>You:</strong> How do I determine the range?</p>
    <p><strong>Neyman:</strong> Using Gauss's distribution. Within ±1.96σ of the mean, there's a 95% probability of the true value lying. This is the 95% confidence interval — 95% CI. Based on the distribution, precision can be measured.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> জের্জি নেইম্যান (১৮৯৪–১৯৮১, জন্ম বেন্ডেরি, মলদোভা) ১৯৩৭ সালে তাঁর গবেষণাপত্র <em>"Outline of a Theory of Statistical Estimation Based on the Classical Theory of Probability"</em> দার্শনিক লেনদেনে রয়্যাল সোসাইটি A, খণ্ড ২৩৬, পৃষ্ঠা ৩৩৩–৩৮০-এ বিশ্বাস্যতা-ব্যবধানের পূর্ণ তত্ত্ব প্রকাশ করেন। তিনি প্রথম এই ধারণা ১৯৩৪ সালে উপস্থাপন করেছিলেন। নেইম্যান এবং ইগন পিয়ার্সন (Egon Pearson) একসাথে ১৯৩৩ সালে নেইম্যান-পিয়ার্সন লেম্মা প্রকাশ করেন — যা প্রকার ২ ত্রুটি (Type II error) এবং ক্ষমতা (power) ধারণা চালু করে।</div></div>

  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>নেইম্যান-ফিশার দ্বন্দ্ব:</strong> নেইম্যান এবং ফিশার ১৯৩০-এর দশকে লন্ডনের ইউনিভার্সিটি কলেজে একসাথে ছিলেন। দুজনের দর্শন আলাদা ছিল — ফিশার p-value এবং significance testing পছন্দ করতেন; নেইম্যান confidence interval এবং প্রকার ১/২ ত্রুটি পছন্দ করতেন। এই মতবিরোধ দশকের পর দশক স্থায়ী হয় — পরিসংখ্যানের ইতিহাসে সবচেয়ে বিখ্যাত বিতর্কগুলোর একটি।</div></div>

  <div class="diagram">
    <div class="diag-title">বিশ্বাস্যতা-ব্যবধান — How CI Works Across Repeated Samples</div>
    <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal5" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2dd4bf"/>
        </marker>
      </defs>
      <!-- True value line -->
      <line class="edge-hot" x1="280" y1="20" x2="280" y2="240" stroke-dasharray="6,3" stroke-width="2"/>
      <text class="lbl-hot" x="280" y="15" text-anchor="middle" font-weight="700">সত্যিকারের মান (μ)</text>
      <!-- CI bars (some capture, some miss) -->
      <!-- Bar 1: captures -->
      <line class="edge-cyan" x1="210" y1="50" x2="350" y2="50" stroke-width="3"/>
      <line class="edge-cyan" x1="210" y1="45" x2="210" y2="55" stroke-width="2"/>
      <line class="edge-cyan" x1="350" y1="45" x2="350" y2="55" stroke-width="2"/>
      <circle class="node-leaf" cx="280" cy="50" r="4"/>
      <text class="lbl-sm" x="180" y="54" text-anchor="end">নমুনা ১ ✓</text>
      <!-- Bar 2: captures -->
      <line class="edge-cyan" x1="240" y1="80" x2="370" y2="80" stroke-width="3"/>
      <line class="edge-cyan" x1="240" y1="75" x2="240" y2="85" stroke-width="2"/>
      <line class="edge-cyan" x1="370" y1="75" x2="370" y2="85" stroke-width="2"/>
      <circle class="node-leaf" cx="305" cy="80" r="4"/>
      <text class="lbl-sm" x="180" y="84" text-anchor="end">নমুনা ২ ✓</text>
      <!-- Bar 3: MISSES (doesn't contain true value) -->
      <line class="edge-amber" x1="160" y1="110" x2="260" y2="110" stroke-width="3"/>
      <line class="edge-amber" x1="160" y1="105" x2="160" y2="115" stroke-width="2"/>
      <line class="edge-amber" x1="260" y1="105" x2="260" y2="115" stroke-width="2"/>
      <circle class="node-hot" cx="210" cy="110" r="4"/>
      <text class="lbl-sm" x="130" y="114" text-anchor="end">নমুনা ৩ ✗</text>
      <!-- Bar 4: captures -->
      <line class="edge-cyan" x1="220" y1="140" x2="360" y2="140" stroke-width="3"/>
      <line class="edge-cyan" x1="220" y1="135" x2="220" y2="145" stroke-width="2"/>
      <line class="edge-cyan" x1="360" y1="135" x2="360" y2="145" stroke-width="2"/>
      <circle class="node-leaf" cx="290" cy="140" r="4"/>
      <text class="lbl-sm" x="180" y="144" text-anchor="end">নমুনা ৪ ✓</text>
      <!-- Bar 5: captures -->
      <line class="edge-cyan" x1="250" y1="170" x2="340" y2="170" stroke-width="3"/>
      <line class="edge-cyan" x1="250" y1="165" x2="250" y2="175" stroke-width="2"/>
      <line class="edge-cyan" x1="340" y1="165" x2="340" y2="175" stroke-width="2"/>
      <circle class="node-leaf" cx="295" cy="170" r="4"/>
      <text class="lbl-sm" x="180" y="174" text-anchor="end">নমুনা ৫ ✓</text>
      <!-- Legend -->
      <rect class="cell-good" x="360" y="200" width="12" height="12" rx="2"/>
      <text class="lbl-sm" x="378" y="210">ধারণ (৯৫%)</text>
      <rect class="cell-hot" x="360" y="220" width="12" height="12" rx="2"/>
      <text class="lbl-sm" x="378" y="230">মিস (৫%)</text>
    </svg>
    <div class="diag-cap">১০০টা নমুনা নিলে, ৯৫টা CI সত্যিকারের মান ধারণ করবে (সবুজ)। মাত্র ৫টা মিস করবে (লাল)। এটাই ৯৫% CI-এর অর্থ।</div>
  </div>

  <div class="code-block"># ── STEP 1: Confidence intervals deep dive ──
# Understanding the boundary of belief.

ci_deep = """
CONFIDENCE INTERVALS — DEEP DIVE:

CI = x̄ ± z × (σ/√n)

  x̄ = sample mean (point estimate)
  z = z-score (1.96 for 95%, 2.58 for 99%)
  σ/√n = standard error (precision of estimate)

INTERPRETATION:
  95% CI: "If we repeated this sampling 100 times,
  about 95 of the CIs would contain the true parameter."

  The PARAMETER is fixed. The INTERVAL varies (different samples → different CIs).

FACTORS AFFECTING CI WIDTH:
  → Larger n → NARROWER CI (more data = more precision)
  → Larger σ → WIDER CI (more variability = less precision)
  → Higher confidence (99% vs 95%) → WIDER CI

SAMPLE SIZE FOR DESIRED PRECISION:
  Want CI width = w?
  n = (2zσ/w)²
  Example: σ=10, want w=2 (±1), 95%:
  n = (2×1.96×10/2)² ≈ 384

DIFFERENT CONFIDENCE LEVELS:
  90% CI: z = 1.645 (narrower, less confident)
  95% CI: z = 1.96 (standard)
  99% CI: z = 2.576 (wider, more confident)
  99.9% CI: z = 3.29 (very wide)

TRADE-OFF: PRECISION vs CONFIDENCE
  → Higher confidence = wider interval = less precise
  → Lower confidence = narrower interval = more precise but risky
  → 95% is the conventional compromise
"""

print(ci_deep)

# PYTHON: CI calculations:
ci_calc = """
import numpy as np
from scipy import stats

# Sample data:
np.random.seed(42)
data = np.random.normal(100, 15, 50)
x_bar = data.mean()
s = data.std(ddof=1)
n = len(data)

# 95% CI (using t-distribution since σ unknown):
se = s / np.sqrt(n)
t_crit = stats.t.ppf(0.975, df=n-1)  # t-score for 95%
ci_low = x_bar - t_crit * se
ci_high = x_bar + t_crit * se
print(f"95% CI (t): [{ci_low:.2f}, {ci_high:.2f}]")

# 99% CI (wider):
t_crit_99 = stats.t.ppf(0.995, df=n-1)
ci_99 = (x_bar - t_crit_99 * se, x_bar + t_crit_99 * se)
print(f"99% CI (t): [{ci_99[0]:.2f}, {ci_99[1]:.2f}]")

# Sample size needed for ±1 unit margin of error:
moe_target = 1.0
z = 1.96
sigma = 15  # estimated
n_needed = (z * sigma / moe_target)**2
print(f"\\nSample needed for ±1 MOE: {int(n_needed)}")  # ~864

# Bootstrap confidence interval (no distribution assumption):
bootstrap_means = [np.random.choice(data, n, replace=True).mean() for _ in range(10000)]
ci_boot = np.percentile(bootstrap_means, [2.5, 97.5])
print(f"Bootstrap 95% CI: [{ci_boot[0]:.2f}, {ci_boot[1]:.2f}]")
"""

print(ci_calc)</div>

  <div class="code-block"># ── STEP 2: Linear regression fundamentals ──
# Modeling relationships between variables.

regression = """
LINEAR REGRESSION:

Model: y = β₀ + β₁x + ε
  y = dependent variable
  x = independent variable
  β₀ = intercept
  β₁ = slope (effect of x on y)
  ε = error (Normal, mean 0)

LEAST SQUARES:
  Minimize Σ(yᵢ − ŷᵢ)² (sum of squared residuals)
  → Find β₀, β₁ that best fit the data

R-SQUARED (R²):
  Fraction of variance in y explained by x.
  R² ∈ [0, 1]
  R² = 0: model explains nothing
  R² = 1: model explains everything (perfect fit)

ASSUMPTIONS (LINE):
  L - Linearity (relationship is linear)
  I - Independence (residuals uncorrelated)
  N - Normality (residuals normally distributed)
  E - Equal variance (homoscedasticity)

VIOLATIONS:
  Non-linear → polynomial, log transformation
  Correlated residuals → time series models
  Non-normal residuals → bootstrap, GLM
  Heteroscedasticity → weighted least squares

MULTIPLE REGRESSION:
  y = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ + ε
  → Multiple predictors
  → Each βᵢ = effect of xᵢ controlling for others

LOGISTIC REGRESSION (classification):
  P(y=1) = sigmoid(β₀ + β₁x)
  → Binary outcomes (yes/no)
  → Sigmoid squashes linear output to [0,1]
"""

print(regression)

# PYTHON: Linear regression:
lr_code = """
import numpy as np
from scipy import stats

# Data: study hours vs exam score:
hours = np.array([2, 3, 4, 5, 6, 7, 8, 9, 10])
scores = np.array([55, 60, 65, 70, 75, 80, 85, 90, 95])

# Linear regression:
slope, intercept, r_value, p_value, std_err = stats.linregress(hours, scores)
print(f"Slope (β₁): {slope:.4f}")
print(f"Intercept (β₀): {intercept:.4f}")
print(f"R²: {r_value**2:.4f}")
print(f"p-value: {p_value:.6f}")
print(f"Std error: {std_err:.4f}")

# Prediction:
def predict(hours_studied):
    return intercept + slope * hours_studied

print(f"\\nPredict score for 7.5 hours: {predict(7.5):.1f}")

# Confidence interval for slope:
df = len(hours) - 2
t_crit = stats.t.ppf(0.975, df)
ci_slope = (slope - t_crit * std_err, slope + t_crit * std_err)
print(f"95% CI for slope: [{ci_slope[0]:.4f}, {ci_slope[1]:.4f}]")

# Using sklearn for multiple regression:
# from sklearn.linear_model import LinearRegression
# model = LinearRegression()
# model.fit(X, y)  # X can have multiple columns
"""

print(lr_code)</div>

  <div class="code-block"># ── STEP 3: Multiple regression and feature selection ──
# Building predictive models with multiple variables.

multiple_reg = """
MULTIPLE REGRESSION:

y = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ + ε

Each βᵢ measures the effect of xᵢ CONTROLLING for all other variables.

EXAMPLE: House price prediction
  price = β₀ + β₁(sqft) + β₂(bedrooms) + β₃(bathrooms) + β₄(age) + ε

  β₁ = price increase per square foot (holding bedrooms etc. constant)
  β₂ = price increase per bedroom (holding sqft etc. constant)

FEATURE SELECTION:
  → Forward: start empty, add best feature one by one
  → Backward: start with all, remove worst one by one
  → LASSO: L1 penalty → drives some coefficients to 0 (sparse)
  → Ridge: L2 penalty → shrinks coefficients toward 0
  → Elastic Net: combination of L1 + L2

OVERFITTING:
  Too many features → model fits noise, not signal
  → Training R² high but test R² low
  → Solution: regularization (LASSO, Ridge), cross-validation

MULTICOLLINEARITY:
  When predictors are highly correlated with each other.
  → Coefficients become unstable
  → Solution: remove correlated features, use regularization

CROSS-VALIDATION:
  Split data: train / validation / test
  K-fold: split into K parts, train on K-1, test on 1, rotate
  → Estimates generalization error
  → Prevents overfitting

PYTHON (sklearn):
  from sklearn.linear_model import LinearRegression, Lasso, Ridge
  from sklearn.model_selection import cross_val_score

  model = Ridge(alpha=1.0)
  scores = cross_val_score(model, X, y, cv=5)
"""

print(multiple_reg)</div>

  <div class="code-block"># ── STEP 4: Bayesian statistics ──
# Updating beliefs with data.

bayesian = """
BAYESIAN STATISTICS:

FREQUENTIST (Fisher, Neyman):
  → Parameters are FIXED (unknown constants)
  → Use p-values, confidence intervals
  → "If I repeated this..."

BAYESIAN (Bayes, Laplace):
  → Parameters have DISTRIBUTIONS (uncertain)
  → Use priors, posteriors, credible intervals
  → "Given what I've seen..."

BAYES' THEOREM:
  P(θ|data) = P(data|θ) × P(θ) / P(data)
  posterior ∝ likelihood × prior

  Prior P(θ): belief before seeing data
  Likelihood P(data|θ): how well θ explains data
  Posterior P(θ|data): updated belief after data

CONJUGATE PRIORS:
  Prior + Likelihood → same family posterior
  Beta prior + Binomial likelihood → Beta posterior
  Normal prior + Normal likelihood → Normal posterior

EXAMPLE: A/B testing (Bayesian)
  Prior: conversion rate ~ Beta(1, 1) (uniform)
  Data: 60 conversions in 1000 visitors
  Posterior: Beta(61, 941)
  → P(B > A) = integrate posterior

CREDIBLE INTERVAL (Bayesian CI):
  "95% credible interval: 95% probability the parameter is in [a, b]"
  → This is what people THINK confidence intervals mean!

ADVANTAGES OF BAYESIAN:
  → Incorporates prior knowledge
  → Natural interpretation (probability of hypothesis)
  → Works with small samples
  → Handles complex models (MCMC)

DISADVANTAGES:
  → Requires specifying a prior (subjective)
  → Computationally expensive (MCMC)
  → Can be sensitive to prior choice

PYTHON:
  import pymc3 as pm  # Bayesian library

  with pm.Model():
      mu = pm.Normal('mu', mu=0, sigma=10)  # prior
      obs = pm.Normal('obs', mu=mu, sigma=1, observed=data)
      trace = pm.sample(2000)  # MCMC
"""

print(bayesian)

# PYTHON: Bayesian A/B test:
bayes_ab = """
import numpy as np
from scipy.stats import beta

# Bayesian A/B test:
# Variant A: 120 conversions / 1000 visitors
# Variant B: 150 conversions / 1000 visitors

# Prior: Beta(1, 1) = uniform
# Posterior: Beta(1+conversions, 1+failures)

prior_a = 1
prior_b = 1

conv_A, total_A = 120, 1000
conv_B, total_B = 150, 1000

# Posteriors:
post_A = beta(prior_a + conv_A, prior_b + total_A - conv_A)
post_B = beta(prior_a + conv_B, prior_b + total_B - conv_B)

# P(B > A)?
n_samples = 100000
samples_A = post_A.rvs(n_samples)
samples_B = post_B.rvs(n_samples)
p_B_better = np.mean(samples_B > samples_A)
print(f"P(B > A) = {p_B_better:.4f}")

# Expected lift:
lift = (samples_B - samples_A) / samples_A
print(f"Expected lift: {np.mean(lift)*100:.2f}%")
print(f"95% credible interval for lift: "
      f"[{np.percentile(lift, 2.5)*100:.2f}%, "
      f"{np.percentile(lift, 97.5)*100:.2f}%]")

# Conversion rate posteriors:
print(f"\\nVariant A: mean={post_A.mean():.4f}, "
      f"95% CI=[{post_A.ppf(0.025):.4f}, {post_A.ppf(0.975):.4f}]")
print(f"Variant B: mean={post_B.mean():.4f}, "
      f"95% CI=[{post_B.ppf(0.025):.4f}, {post_B.ppf(0.975):.4f}]")
"""

print(bayes_ab)</div>

  <div class="code-block"># ── STEP 5: Experimental design ──
# How to collect data that answers your question.

design = """
EXPERIMENTAL DESIGN:

"Statistics begins BEFORE data collection."
Good design → valid conclusions
Bad design → garbage in, garbage out

PRINCIPLES:
  1. RANDOMIZATION:
     Randomly assign subjects to treatment/control
     → Eliminates systematic bias
     → Confounders balance out

  2. REPLICATION:
     Enough subjects to detect effects
     → Power analysis: how many do you need?
     → More replication → more precision

  3. BLOCKING:
     Group similar subjects together
     → Reduces variability
     → Example: block by age, gender, location

  4. CONTROL:
     Compare treatment to a control group
     → Placebo in medical trials
     → "Before" in before/after studies

TYPES OF DESIGNS:

1. COMPLETELY RANDOMIZED:
   Randomly assign all subjects
   Simple but doesn't account for variability

2. RANDOMIZED BLOCK:
   Group into blocks, randomize within each
   More precise than CRD

3. FACTORIAL (2^k):
   Test multiple factors simultaneously
   Example: 2 diets × 2 exercise = 4 groups
   → Finds interactions between factors

4. CROSSOVER:
   Each subject gets BOTH treatments (in sequence)
   → Controls for individual differences
   → Must "wash out" between treatments

5. MATCHED PAIRS:
   Match subjects on key variables, then randomize
   → Twin studies, before/after

6. OBSERVATIONAL:
   No randomization (just observe)
   → Can show correlation, NOT causation
   → Useful when experiments are unethical/impossible

POWER ANALYSIS (sample size calculation):
  How many subjects to detect an effect?
  Depends on:
  → Effect size (bigger effect → easier to detect)
  → α (significance level)
  → Power (1 − β, desired detection probability)
  → Variability (σ)

  Rule: to detect small effects → need LARGE samples
"""

print(design)

# PYTHON: Power analysis:
power_code = """
import numpy as np
from scipy import stats

def power_analysis(effect_size, alpha=0.05, power=0.8):
    \"\"\"Find sample size needed for given effect size.\"\"\"
    # Approximate formula for two-sample t-test:
    z_alpha = stats.norm.ppf(1 - alpha/2)
    z_beta = stats.norm.ppf(power)
    n = 2 * ((z_alpha + z_beta) / effect_size)**2
    return int(np.ceil(n))

# Sample sizes for different effect sizes:
for effect_name, d in [('small (0.2)', 0.2), ('medium (0.5)', 0.5),
                        ('large (0.8)', 0.8)]:
    n = power_analysis(d)
    print(f"Effect {effect_name}: need n={n} per group")

# Verify with simulation:
def simulate_power(n, true_effect, n_simulations=10000):
    rejections = 0
    for _ in range(n_simulations):
        group1 = np.random.normal(0, 1, n)
        group2 = np.random.normal(true_effect, 1, n)
        _, p = stats.ttest_ind(group1, group2)
        if p < 0.05:
            rejections += 1
    return rejections / n_simulations

print(f"\\nSimulated power (n=100, effect=0.5): "
      f"{simulate_power(100, 0.5):.4f}")  # Should be ~0.94
"""

print(power_code)</div>

  <div class="code-block"># ── STEP 6: Statistics best practices ──
# Avoid common pitfalls, report honestly.

best_practices = [
    "Design experiment BEFORE collecting data",
    "Randomize to eliminate confounders",
    "Power analysis: ensure enough subjects",
    "Report effect size AND confidence interval (not just p)",
    "Check regression assumptions (LINE)",
    "Use cross-validation to prevent overfitting",
    "Multiple comparisons: correct with Bonferroni/FDR",
    "Pre-register hypotheses (prevent p-hacking)",
    "Bayesian: incorporate prior knowledge",
    "Credible interval: probability parameter is in range",
    "Confidence interval: 95% of intervals contain true value",
    "Correlation ≠ causation (need RCT for causation)",
    "Always visualize data before modeling",
    "Replication is the gold standard for truth",
    "Be transparent about all analyses performed",
]

print("STATISTICS BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ CI               │ x̄ ± z × SE                    │
# │ Regression R²    │ Fraction of variance explained  │
# │ Logistic         │ P(y=1) = sigmoid(linear)        │
# │ LASSO            │ L1 penalty → sparse features    │
# │ Ridge            │ L2 penalty → shrink coefficients│
# │ Bayesian         │ posterior ∝ likelihood × prior  │
# │ Power            │ 1 − β (detect true effect)     │
# │ Randomization    │ Eliminates confounders          │
# │ Cross-validation │ Estimate generalization         │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৩৩ (যুক্তির তাঁত) Door ৪-এ Bayesian Updating শিখেছিলে — confidence interval হলো ফ্রিকোয়েন্টিস্ট (frequentist) দর্শনের সমাধান, Bayesian credible interval-এর চচেত। দুটো আলাদা দর্শন কিন্তু একই লক্ষ্য — অনিশ্চয়তা মাপা।</div></div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ব্যাখ্যা</div>
      ৯৫% CI [৪৮.৯, ৫৫.১] মানে ৯৫% সম্ভাবনা যে সত্যিকারের মান এই সীমায় আছে।
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ব্যাখ্যা</div>
      ৯৫% CI মানে — এই পদ্ধতিতে বারবার নমুনা নিলে, ১০০টার মধ্যে ৯৫টা CI সত্যিকারের মান ধারণ করবে। সত্যিকারের মান স্থির — সীমা পরিবর্তনশীল।
    </div>
  </div>

  <div class="verse">
    <div class="verse-arabic">وَإِذَا قِيلَ إِنَّ وَعْدَ اللَّهِ حَقٌّ وَالسَّاعَةُ لَا رَيْبَ فِيهَا قُلْتُم مَّا نَدْرِي مَا السَّاعَةُ إِن نَّظُنُّ إِلَّا ظَنًّا وَمَا بِنَا مِن مُّبْصِرِينَ</div>
    <div class="verse-translation">আর যখন বলা হয় আল্লাহর প্রতিশ্রুতি সত্য এবং কিয়ামতে কোনো সন্দেহ নেই, তখন তোমরা বল — আমরা জানি না কিয়ামত কী, আমরা তো কেবল অনুমান করি, আর আমরা নিশ্চিত কিছু জানি না।</div>
    <div class="verse-ref">— কুরআন ৪৫:৩২ (যারা অনুমানেই সন্তুষ্ট, নিশ্চিত হতে চায় না তাদের কথা)</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">📐</div>
    <div class="secret-text">একটা সংখ্যা মিথ্যা বলে — একটা সীমা সত্য বলে।</div>
    <div class="secret-sub">A single number lies — a range tells the truth.</div>
  </div>`,
  senior: {
    title: "সীমা ছাড়া সংখ্যা অর্থহীন",
    body: `<p><strong>১. CI সবসময় রিপোর্ট করো:</strong> 'গডেট ৫২%' নয় — '৫২% ± ৩.১% (৯৫% CI)'। অনিশ্চয়তা স্বীকার করো।</p>
    <p><strong>২. নমুনা আকার জিজ্ঞেস করো:</strong> n = ১০০ এবং n = ১০০০০-এর CI আলাদা। বড় নমুনা = সরু CI = বেশি নিশ্চিত।</p>
    <p><strong>৩. ৯৫% বনাম ৯৯%:</strong> ৯৯% CI চওড়া কিন্তু বেশি নিশ্চিত। কোনটা লাগবে তা নির্ভর করে সিদ্ধান্তের গুরুত্বের উপর।</p>`
  }
});
