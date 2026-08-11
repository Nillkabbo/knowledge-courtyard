// ════════════════════════════════════════
// প্রমাণের দাঁড়িপাল্লা — DOORS 6-10
// The Scale of Evidence: Experimental Design → A/B Testing → Causal Inference → Replication Crisis → Synthesis
// ════════════════════════════════════════

doors.push({
  num: 6,
  icon: "🌱",
  color: "#5eead4",
  name: "ক্ষেতের নকশা",
  subtitle: "The Field Design",
  tech: "Experimental Design — Randomization, Replication, Blocking (Fisher, 1935)",
  spirit: "মিজান — ভারসাম্য, পরীক্ষার ন্যায্যতার দাঁড়িপাল্লা",
  secret: "যদি নকশা ভুল হয় — ফলাফল যা-ই হোক, তা অর্থহীন। পদ্ধতিই সত্য।",
  recall: {
    q: "Fisher-এর পরীক্ষা-নকশার তিনটি মূলনীতি কী? প্রতিটির এক বাক্যে ব্যাখ্যা দাও।",
    qen: "What are Fisher's three principles of experimental design? Explain each in one sentence.",
    a: "১. এলোমেলোকরণ (randomization) — চিকিৎসা এলোমেলোভাবে বরাদ্দ করো। ২. পুনরাবৃত্তি (replication) — পর্যাপ্ত নমুনা নাও। ৩. ব্লকিং (blocking) — মিলযুক্ত এককগুলো একসাথে দলবদ্ধ করো।",
    aen: "1. Randomization — assign treatments randomly. 2. Replication — take enough samples. 3. Blocking — group similar units together."
  },
  story: `<p class="scene-setting">হার্পেনডেন, ইংল্যান্ড, ১৯১৯। একজন তরুণ গণিতজ্ঞ Rothamsted Experimental Station-এ যোগ দিলেন। ৭০ বছরের পুরোনো কৃষি ডেটা তাঁর সামনে — কোন সার কতটুকু দিলে আলু কত ফলে, সেটা বোঝার চেষ্টা। কিন্তু সমস্যা হলো — মাটির গুণমান সব জায়গায় এক নয়। কিছু জায়গায় উর্বর, কিছু জায়গায় শুষ্ক। তাহলে কীভাবে বলবে সার কাজ করেছে, নাকি মাটি ভালো ছিল? রোনাল্ড ফিশার একটা সমাধান তৈরি করলেন।</p>

  <p class="scene-setting en">Harpenden, England, 1919. A young mathematician joined Rothamsted Experimental Station. 70 years of agricultural data lay before him — trying to understand how much fertilizer yields how many potatoes. But the problem: soil quality varies everywhere. Some plots fertile, some dry. How to tell if the fertilizer worked, or the soil was just good? Ronald Fisher built a solution.</p>

  <div class="dialogue">
    <p><strong>ফিশার:</strong> তুমি দুই ধরনের জমিতে আলু লাগিয়েছ। একটায় সার দিলে, একটায় দিলে না। সার দেওয়া জমিতে ফলন বেশি। কিন্তু — সেই জমি আগে থেকেই উর্বর হলে? তাহলে ফলন বেশি হওয়ার কারণ সার নয়, মাটি।</p>
    <p><strong>তুমি:</strong> তাহলে কীভাবে জানব সার কাজ করেছে?</p>
    <p><strong>ফিশার:</strong> তিনটি নিয়ম। প্রথম — এলোমেলোকরণ (randomization)। কোন জমিতে সার দেবে সেটা এলোমেলো বেছে নাও। তাহলে মাটির গুণমানের পার্থক্য গডেট হয়ে যায়। দ্বিতীয় — পুনরাবৃত্তি (replication)। একটা জমি নয়, অনেক জমিতে করো। তৃতীয় — ব্লকিং (blocking)। মিলযুক্ত মাটিগুলো একসাথে দলবদ্ধ করো, যাতে পার্থক্য স্পষ্ট হয়।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Fisher:</strong> You planted potatoes in two fields. Fertilized one, not the other. The fertilized field yielded more. But — what if that field was already more fertile? Then the yield difference is due to soil, not fertilizer.</p>
    <p><strong>You:</strong> Then how do I know the fertilizer worked?</p>
    <p><strong>Fisher:</strong> Three rules. First — randomization. Which field gets fertilizer is chosen randomly. Then soil quality differences average out. Second — replication. Not one field, many fields. Third — blocking. Group similar soils together, so the difference becomes clear.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> ফিশারের বই <em>The Design of Experiments</em> (১৯৩৫, এডিনবার্গ: Oliver and Boyd) পরীক্ষা-নকশার ভিত্তি স্থাপন করে। তিনি এই বইয়ে randomization, replication, blocking এবং Latin square আনুষ্ঠানিকভাবে উপস্থাপন করেন। তাঁর ১৯২৩ সালের গবেষণাপত্র — <em>"Studies in Crop Variation. II. The Manurial Response of Different Potato Varieties"</em> (Journal of Agricultural Science, ১৩(৩): ৩১১–৩২০) — Rothamsted-এ আলু সার পরীক্ষার প্রথম দিককার কাজ। ফিশার ১৯১৯–১৯৩৩ সাল পর্যন্ত Rothamsted-এ ছিলেন।</div></div>

  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গারবেজ-ইন, গারবেজ-আউট:</strong> সবচেয়ে উন্নত পরিসংখ্যানও ভুল নকশার ডেটা থেকে সত্য বের করতে পারে না। যদি তুমি শুধু উর্বর জমিতে সার দাও — পরিসংখ্যান বলবে 'সার দারুণ!' কিন্তু সত্য হলো জমি ভালো ছিল। নকশা ভুল হলে ফলাফল বিভ্রান্তিকর। এটাই Door ৯-এ Ioannidis-এর সতর্কতার শেকড়।</div></div>

  <div class="diagram">
    <div class="diag-title">পরীক্ষা-নকশার তিন নীতি — Three Principles of Experimental Design</div>
    <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal6" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2dd4bf"/>
        </marker>
      </defs>
      <!-- Three columns -->
      <rect class="cell-cyan" x="20" y="30" width="160" height="70" rx="12"/>
      <text class="lbl-cyan" x="100" y="55" text-anchor="middle" font-weight="700">১. এলোমেলোকরণ</text>
      <text class="lbl-cyan" x="100" y="70" text-anchor="middle">Randomization</text>
      <text class="lbl-sm" x="100" y="85" text-anchor="middle">কোন জমিতে সার?</text>
      <text class="lbl-sm" x="100" y="95" text-anchor="middle">এলোমেলো বাছো</text>
      <g transform="translate(45,105)">
        <rect class="cell-good" width="16" height="16" rx="2"/><text class="lbl-sm" x="24" y="12">A</text>
        <rect class="cell-hot" x="40" width="16" height="16" rx="2"/><text class="lbl-sm" x="64" y="12">B</text>
        <rect class="cell-good" x="80" width="16" height="16" rx="2"/><text class="lbl-sm" x="104" y="12">A</text>
      </g>

      <rect class="cell-hot" x="200" y="30" width="160" height="70" rx="12"/>
      <text class="lbl-hot" x="280" y="55" text-anchor="middle" font-weight="700">২. পুনরাবৃত্তি</text>
      <text class="lbl-hot" x="280" y="70" text-anchor="middle">Replication</text>
      <text class="lbl-sm" x="280" y="85" text-anchor="middle">অনেক জমিতে করো</text>
      <text class="lbl-sm" x="280" y="95" text-anchor="middle">n বাড়াও</text>
      <g transform="translate(235,105)">
        <rect class="cell-good" width="12" height="12" rx="2"/>
        <rect class="cell-good" x="16" width="12" height="12" rx="2"/>
        <rect class="cell-good" x="32" width="12" height="12" rx="2"/>
        <rect class="cell-good" x="48" width="12" height="12" rx="2"/>
        <rect class="cell-good" x="64" width="12" height="12" rx="2"/>
      </g>

      <rect class="cell-leaf" x="380" y="30" width="160" height="70" rx="12"/>
      <text class="lbl-leaf" x="460" y="55" text-anchor="middle" font-weight="700">৩. ব্লকিং</text>
      <text class="lbl-leaf" x="460" y="70" text-anchor="middle">Blocking</text>
      <text class="lbl-sm" x="460" y="83" text-anchor="middle">মিলযুক্ত মাটি</text>
      <text class="lbl-sm" x="460" y="95" text-anchor="middle">একসাথে দলবদ্ধ</text>
      <g transform="translate(395,105)">
        <rect class="cell-cyan" width="35" height="16" rx="2"/><text class="lbl-sm" x="17" y="12" text-anchor="middle">ব্লক ১</text>
        <rect class="cell-purple" x="43" width="35" height="16" rx="2"/><text class="lbl-sm" x="60" y="12" text-anchor="middle">ব্লক ২</text>
      </g>

      <!-- Arrows down -->
      <line class="edge-cyan" x1="100" y1="135" x2="100" y2="170" marker-end="url(#arrTeal6)"/>
      <line class="edge-hot" x1="280" y1="135" x2="280" y2="170" marker-end="url(#arrTeal6)"/>
      <line class="edge-amber" x1="460" y1="135" x2="460" y2="170" marker-end="url(#arrTeal6)"/>

      <!-- Bottom -->
      <rect class="cell" x="80" y="175" width="400" height="55" rx="12"/>
      <text class="lbl" x="280" y="198" text-anchor="middle" font-weight="700" font-size="13">ন্যায্য পরীক্ষা = নির্ভরযোগ্য ফলাফল</text>
      <text class="lbl-sm" x="280" y="215" text-anchor="middle">Fair experiment = reliable result</text>
    </svg>
    <div class="diag-cap">এলোমেলোকরণ পক্ষপাত দূর করে, পুনরাবৃত্তি নির্ভুলতা বাড়ায়, ব্লকিং পার্থক্য স্পষ্ট করে। তিনটি মিলে একটা ন্যায্য পরীক্ষা তৈরি করে।</div>
  </div>

  <div class="code-block"># ── STEP 1: Experimental design types ──
# Choosing the right design for your experiment.

design_types = """
TYPES OF EXPERIMENTAL DESIGN:

1. COMPLETELY RANDOMIZED DESIGN (CRD):
   → Randomly assign subjects to treatments
   → Simplest design
   → Good when subjects are homogeneous
   → Example: 100 plants, randomly assign 4 fertilizers

2. RANDOMIZED COMPLETE BLOCK (RCBD):
   → Group similar subjects into blocks
   → Randomize WITHIN each block
   → Reduces variability from known sources
   → Example: block by soil type, randomize fertilizer within

3. LATIN SQUARE:
   → Control for TWO sources of variability
   → Each treatment appears once per row and column
   → Example: 4 treatments, 4x4 grid, control for position

4. FACTORIAL DESIGN (2^k):
   → Test multiple factors simultaneously
   → 2 levels × k factors = 2^k groups
   → Finds INTERACTIONS between factors
   → Example: 2 diets × 2 exercise = 4 groups

5. SPLIT-PLOT:
   → Some factors hard to change (whole plot)
   → Others easy (split plot)
   → Example: irrigation (hard) × fertilizer (easy)

6. CROSSOVER:
   → Each subject receives ALL treatments (in sequence)
   → Controls for individual differences
   → Need "washout" period between treatments
   → Example: drug A for 2 weeks, washout, drug B for 2 weeks

FISHER'S THREE PRINCIPLES:
  1. RANDOMIZATION: eliminates systematic bias
  2. REPLICATION: more subjects → more precision
  3. BLOCKING: reduce variability from known sources

ANOVA (Analysis of Variance):
  Compares 3+ group means.
  F = between-group variance / within-group variance
  Large F → groups differ significantly
"""

print(design_types)</div>

  <div class="code-block"># ── STEP 2: ANOVA in practice ──
# Comparing multiple groups.

anova = """
ANOVA (ANALYSIS OF VARIANCE):

Tests if 3+ group means are significantly different.
  H₀: all means equal (μ₁ = μ₂ = ... = μₖ)
  H₁: at least one mean differs

F-STATISTIC:
  F = MSB / MSW
  MSB = between-group variance (how different groups are)
  MSW = within-group variance (natural variability)

  Large F → groups differ more than expected by chance

ONE-WAY ANOVA:
  One factor (e.g., 3 teaching methods)
  H₀: method 1 = method 2 = method 3

TWO-WAY ANOVA:
  Two factors (e.g., diet × exercise)
  Tests main effects AND interaction

POST-HOC TESTS (after significant ANOVA):
  ANOVA tells you "at least one differs"
  Post-hoc tells you WHICH pairs differ:
  → Tukey HSD (honest significant difference)
  → Bonferroni correction
  → Scheffé test

ASSUMPTIONS:
  → Normality (residuals)
  → Homogeneity of variance (equal σ² across groups)
  → Independence

KRUSKAL-WALLIS (non-parametric ANOVA):
  When assumptions violated (non-normal data)
  Based on ranks instead of means

PYTHON:
  from scipy import stats

  # One-way ANOVA:
  F, p = stats.f_oneway(group1, group2, group3)

  # Two-way ANOVA:
  import statsmodels.api as sm
  from statsmodels.formula.api import ols

  model = ols('score ~ C(diet) + C(exercise) + C(diet):C(exercise)', data).fit()
  anova_table = sm.stats.anova_lm(model, typ=2)
"""

print(anova)

# PYTHON: ANOVA:
anova_code = """
import numpy as np
from scipy import stats

# Three teaching methods, test scores:
method_A = [75, 78, 82, 79, 76, 80, 77, 81]
method_B = [85, 88, 84, 87, 86, 89, 83, 85]
method_C = [70, 73, 71, 74, 72, 75, 69, 73]

# One-way ANOVA:
F_stat, p_value = stats.f_oneway(method_A, method_B, method_C)
print(f"F-statistic: {F_stat:.4f}")
print(f"p-value: {p_value:.8f}")
# p < 0.05 → at least one method differs

# Post-hoc: Tukey HSD (which pairs differ?):
from scipy.stats import tukey_hsd  # scipy 1.8+
result = stats.tukey_hsd(method_A, method_B, method_C)
print(result)
# Shows pairwise comparisons with significance

# Effect size (eta-squared):
grand_mean = np.mean(method_A + method_B + method_C)
ss_between = sum(len(g) * (np.mean(g) - grand_mean)**2 for g in [method_A, method_B, method_C])
ss_total = sum((x - grand_mean)**2 for x in method_A + method_B + method_C)
eta_squared = ss_between / ss_total
print(f"η² (effect size): {eta_squared:.4f}")
"""

print(anova_code)</div>

  <div class="code-block"># ── STEP 3: Sample size and power ──
# How many subjects do you need?

power = """
SAMPLE SIZE AND POWER:

POWER (1 − β):
  Probability of detecting a TRUE effect.
  → High power = unlikely to miss a real effect
  → Standard target: 80% power

FACTORS AFFECTING SAMPLE SIZE:
  1. Effect size (larger effect → easier to detect → fewer needed)
  2. Significance level α (stricter → more needed)
  3. Power desired (higher → more needed)
  4. Variability σ (higher → more needed)

RULES OF THUMB:
  → Small effect (d=0.2): ~400 per group
  → Medium effect (d=0.5): ~64 per group
  → Large effect (d=0.8): ~26 per group

COHEN'S d (effect size for t-test):
  d = (μ₁ − μ₂) / σ_pooled
  d = 0.2: small (barely noticeable)
  d = 0.5: medium (visible to observer)
  d = 0.8: large (obvious)

WHY POWER MATTERS:
  → Underpowered study: can't detect real effects
  → Overpowered study: detects trivially small effects
  → Publish "null results" (failed to detect → inconclusive)
  → Publication bias: only significant results published

A/B TEST SAMPLE SIZE:
  For conversion rate difference:
  n = 16 × σ² / δ²
  where δ = minimum detectable effect

  Example: baseline 5%, want to detect 0.5% absolute change:
  n = 16 × 0.05 × 0.95 / 0.005² ≈ 30,400 per group
"""

print(power)

# PYTHON: Power analysis:
power_code = """
import numpy as np
from scipy import stats

# Sample size for two-sample t-test:
def sample_size_ttest(effect_size, alpha=0.05, power=0.80):
    z_alpha = stats.norm.ppf(1 - alpha/2)
    z_beta = stats.norm.ppf(power)
    n = 2 * ((z_alpha + z_beta) / effect_size) ** 2
    return int(np.ceil(n))

print("Sample sizes needed (per group):")
for name, d in [('Small (0.2)', 0.2), ('Medium (0.5)', 0.5), ('Large (0.8)', 0.8)]:
    n = sample_size_ttest(d)
    print(f"  {name}: {n}")

# A/B test sample size:
def ab_sample_size(baseline, mde, alpha=0.05, power=0.80):
    \"\"\"Minimum detectable effect for conversion rate.\"\"\"
    z_alpha = stats.norm.ppf(1 - alpha/2)
    z_beta = stats.norm.ppf(power)
    p1, p2 = baseline, baseline + mde
    p_avg = (p1 + p2) / 2
    n = ((z_alpha * np.sqrt(2*p_avg*(1-p_avg)) +
          z_beta * np.sqrt(p1*(1-p1) + p2*(1-p2))) / mde) ** 2
    return int(np.ceil(n))

# Detect 0.5% absolute change from 5% baseline:
n = ab_sample_size(0.05, 0.005)
print(f"\\nA/B test (5% → 5.5%, detect 0.5%): {n:,} per group")

# Power curve: power vs sample size:
for n in [50, 100, 200, 500, 1000]:
    d = 0.3  # medium effect
    ncp = d * np.sqrt(n/2)  # non-centrality parameter
    power = 1 - stats.norm.cdf(stats.norm.ppf(0.975) - ncp)
    print(f"n={n:4d}: power={power:.3f} (effect d=0.3)")
"""

print(power_code)</div>

  <div class="code-block"># ── STEP 4: Online A/B testing ──
# Modern experimentation at tech companies.

online_ab = """
ONLINE A/B TESTING (TECH INDUSTRY):

THE PROCESS:
  1. Define hypothesis and success metric
  2. Calculate required sample size
  3. Randomly assign users (50/50 or asymmetric)
  4. Run experiment for sufficient duration
  5. Analyze results (statistical + practical significance)
  6. Decide: ship, iterate, or kill

KEY CONCEPTS:
  → CONTROL: current version (A)
  → TREATMENT: new version (B)
  → RANDOMIZATION UNIT: user, session, device
  → NOVELTY EFFECT: temporary boost from change
  → LEARNING EFFECT: long-term behavioral change

COMMON METRICS:
  → Conversion rate (clicks, signups, purchases)
  → Revenue per user
  → Engagement (time on site, page views)
  → Retention (return rate)
  → Load time, error rate

TRAPS TO AVOID:
  1. PEEKING: checking p-value repeatedly → inflates false positives
     → Fix: fixed-horizon testing or sequential analysis

  2. MULTIPLE COMPARISONS: testing many metrics
     → Fix: Bonferroni correction or hierarchical testing

  3. SIMPSON'S PARADOX: aggregate hides segment effects
     → Fix: always segment by device, geography, user type

  4. INTERFERENCE: users in different groups affect each other
     → Fix: cluster randomization (geo-based)

  5. SHORT-RUN VS LONG-RUN: immediate effect differs from long-term
     → Fix: run long enough to see steady state

KOHAVI'S BING STORY:
  → Small UI change → 12% revenue increase ($100M+/year)
  → Nobody predicted this impact
  → "Only 1/3 of ideas work. Test everything."
  → Trustworthy Online Controlled Experiments (Kohavi et al., 2020)
"""

print(online_ab)</div>

  <div class="code-block"># ── STEP 5: Quasi-experiments and natural experiments ──
# When you can't randomize.

quasi = """
QUASI-EXPERIMENTS:

When randomization isn't possible (ethical, practical, or financial):

1. DIFFERENCE-IN-DIFFERENCES (DiD):
   Compare treatment and control BEFORE and AFTER.
   Effect = (After_A − Before_A) − (After_B − Before_B)

   Example: minimum wage increase in NJ vs PA
   → Compare employment before/after in both states
   → Difference = effect of minimum wage

2. REGRESSION DISCONTINUITY:
   Treatment assigned by a THRESHOLD.
   → Compare people just above and just below threshold
   → Example: scholarships for GPA > 3.5

3. INSTRUMENTAL VARIABLES (IV):
   Find a variable that affects treatment but not outcome directly.
   → Example: distance to hospital affects treatment but not health directly
   → Two-stage least squares (2SLS)

4. PROPENSITY SCORE MATCHING:
   Match treated and untreated on observable characteristics.
   → Creates "pseudo-randomized" groups
   → Not as good as RCT (can't control unobservables)

5. NATURAL EXPERIMENTS:
   Events that create quasi-random assignment.
   → Vietnam draft lottery (random birthday → service)
   → Oregon Medicaid lottery (random selection)
   → Berlin Wall division

LIMITATIONS:
  → Still observational (not true randomization)
  → Can't control for unobserved confounders
  → Results may not generalize
  → Weaker causal claims than RCT

PYTHON:
  # Difference-in-Differences:
  import statsmodels.api as sm

  # DiD model: y = β₀ + β₁(treated) + β₂(after) + β₃(treated×after) + ε
  # β₃ = treatment effect
"""

print(quasi)</div>

  <div class="code-block"># ── STEP 6: Experimental design best practices ──
# Design experiments that produce valid conclusions.

best_practices = [
    "Randomize to eliminate confounders",
    "Replicate: enough subjects for power",
    "Block: group similar subjects to reduce variance",
    "Control: compare to baseline/placebo",
    "Pre-register hypothesis (prevent p-hacking)",
    "Power analysis: ensure adequate sample size",
    "Blind/double-blind: prevent observer bias",
    "ANOVA for 3+ groups, t-test for 2 groups",
    "Post-hoc tests (Tukey) after significant ANOVA",
    "A/B testing: don't peek, use fixed horizon",
    "Segment analysis (watch for Simpson's paradox)",
    "Run long enough for novelty/learning effects",
    "Quasi-experiments when RCT impossible",
    "DiD, IV, RDD for observational causal inference",
    "Report effect size AND confidence interval",
]

print("EXPERIMENTAL DESIGN BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Design           │ Use Case                        │
# ├──────────────────┼──────────────────────────────────┤
# │ CRD              │ Simple, homogeneous subjects    │
# │ RCBD             │ Block known variability         │
# │ Factorial        │ Multiple factors + interactions │
# │ Crossover        │ Same subjects, multiple drugs   │
# │ A/B test         │ Online, two versions            │
# │ DiD              │ Policy evaluation               │
# │ RDD              │ Threshold-based assignment      │
# │ IV               │ Unobserved confounders          │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৪ (City Builder's Codex / System Design) Door ৮-এ Idempotency শিখেছিলে — একই ইনপুটে একই আউটপুট। Fisher-এর replication হলো সেই একই নীতি — একই পরিস্থিতিতে একই ফল পাওয়ার নিশ্চয়তা। Book ৩১ (Classic ML) Door ৯ Cross-Validation — সেখানেও পুনরাবৃত্তি দিয়ে নির্ভরযোগ্যতা যাচাই করা হয়।</div></div>

  <div class="verse">
    <div class="verse-arabic">وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ</div>
    <div class="verse-translation">আর আকাশকে তিনি সমুচ্চয় করেছেন এবং দাঁড়িপাল্লা স্থাপন করেছেন।</div>
    <div class="verse-ref">— কুরআন ৫৫:৭</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🌱</div>
    <div class="secret-text">নকশা ভুল হলে ফলাফল অর্থহীন — পদ্ধতিই সত্যের ভিত্তি।</div>
    <div class="secret-sub">If the design is wrong, the result is meaningless — method is the foundation of truth.</div>
  </div>`,
  senior: {
    title: "পরীক্ষা শুরু করার আগে নকশা করো",
    body: `<p><strong>১. এলোমেলোকরণ বাধ্যতামূলক:</strong> কোনো পক্ষপাত নয়। কম্পিউটার দিয়ে এলোমেলো বরাদ্দ করো। মানুষের হাতে বরাদ্দ করলে অবচেতন পক্ষপাত আসে।</p>
    <p><strong>২. নমুনা আকার:</strong> কত বড় নমুনা লাগবে তা power analysis দিয়ে নির্ধারণ করো। খুব ছোট নমুনা = সত্য ধরা পড়ে না।</p>
    <p><strong>৩. কনফাউন্ডার সনাক্ত করো:</strong> কোন প্রভাবক ফলাফলকে প্রভাবিত করতে পারে? সেগুলো blocking দিয়ে নিয়ন্ত্রণ করো।</p>`
  }
});

doors.push({
  num: 7,
  icon: "🧪",
  color: "#2dd4bf",
  name: "দুই পথের পরীক্ষা",
  subtitle: "The Two-Path Test",
  tech: "A/B Testing — Online Controlled Experiments, Sample Size, Effect Size (Kohavi, 2007–2020)",
  spirit: "ইনসাফ — ন্যায্য বিচার, প্রতিটি ধারণাকে পরীক্ষার কাঠগড়ায় দাঁড় করানো",
  secret: "বিশেষজ্ঞও ভুল ভবিষ্যদ্বাণী করে — তাই প্রতিটি আইডিয়া পরীক্ষা করো, বিশ্বাস করো না।",
  recall: {
    q: "Kohavi-এর মতে A/B testing কেন প্রয়োজন? Bing-এর $100M গল্পটি কী?",
    qen: "Why is A/B testing necessary according to Kohavi? What is the Bing $100M story?",
    a: "Bing-এ একজন কর্মীর আইডিয়া ৬ মাস ফেলে রাখা হয়েছিল। পরীক্ষা করলে — ১২% রাজস্ব বৃদ্ধি! বছরে $100M+। Kohavi বলেন — বিশেষজ্ঞরাও নির্ভুলভাবে বলতে পারে না কোন আইডিয়া কাজ করবে। তাই পরীক্ষা করো।",
    aen: "At Bing, an employee's idea was shelved for 6 months. When tested — 12% revenue increase! $100M+/year. Kohavi says — even experts can't predict which ideas will work. So test."
  },
  story: `<p class="scene-setting">রেডমন্ড, ওয়াশিংটন, ২০১২। Microsoft Bing-এর একজন ইঞ্জিনিয়ার একটা ছোট পরিবর্তনের প্রস্তাব দিলেন — বিজ্ঞাপনের শিরোনাম একটু আলাদাভাবে দেখানো। ম্যানেজমেন্ট বলল — এটা অগ্রাধিকার নয়। ৬ মাস ধরে আইডিয়াটা ফেলে রাখা হলো। শেষে রন কোহাভি (Ron Kohavi) বললেন — পরীক্ষা করে দেখা যাক। A/B test চালানো হলো। কয়েক ঘণ্টার মধ্যে ফলাফল স্পষ্ট — রাজস্ব ১২% বেড়ে গেল। বছরে $100 মিলিয়নের বেশি। একটা ছোট পরিবর্তন, যা কেউ গুরুত্ব দেয়নি।</p>

  <p class="scene-setting en">Redmond, Washington, 2012. A Microsoft Bing engineer proposed a small change — displaying ad headlines slightly differently. Management said — not a priority. The idea sat for 6 months. Finally Ron Kohavi said — let's test it. An A/B test was run. Within hours, results were clear — revenue increased 12%. Over $100 million per year. A small change no one took seriously.</p>

  <div class="dialogue">
    <p><strong>কোহাভি:</strong> তুমি ভাবো তোমার আইডিয়া ভালো। কিন্তু কত ভালো? ১%? ৫%? ২০%? প্রতিটা আইডিয়া পরীক্ষা করো — এলোমেলো দুই গ্রুপে। একটায় নতুন (Treatment), একটায় পুরোনো (Control)। পার্থক্য দেখো। এটাই A/B test।</p>
    <p><strong>তুমি:</strong> কিন্তু আমি তো জানি আমার আইডিয়া ভালো!</p>
    <p><strong>কোহাভি:</strong> Bing-এর ইঞ্জিনিয়ারও জানত। কিন্তু সে জানত না ১২% বাড়বে। বিশেষজ্ঞরা ৬০-৯০% আইডিয়া ভুল ভবিষ্যদ্বাণী করে। এমনকি Amazon, Google, Microsoft-এর সেরা ইঞ্জিনিয়াররাও। তাই — বিশ্বাস করো না, পরীক্ষা করো।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Kohavi:</strong> You think your idea is good. But how good? 1%? 5%? 20%? Test every idea — in two random groups. One gets the new (Treatment), one stays old (Control). See the difference. This is A/B testing.</p>
    <p><strong>You:</strong> But I know my idea is good!</p>
    <p><strong>Kohavi:</strong> The Bing engineer knew too. But didn't know it would increase 12%. Experts wrongly predict 60-90% of ideas. Even the best engineers at Amazon, Google, Microsoft. So — don't trust, test.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> রন কোহাভি বড় স্কেলে অনলাইন নিয়ন্ত্রিত পরীক্ষার (A/B testing) প্রধান প্রবক্তা। তিনি Amazon-এ Weblab (পরীক্ষা প্ল্যাটফর্ম) পরিচালনা করেন, তারপর Microsoft-এ Technical Fellow এবং Experimentation Platform (ExP)-এর প্রধান (২০০৬–২০১৯), পরে Airbnb-তে Vice President। তাঁর গুরুত্বপূর্ণ গবেষণাপত্র: Kohavi, Henne, Sommerfield (২০০৭), <em>"Practical guide to controlled experiments on the web"</em>, KDD ২০০৭। বই: Kohavi, Tang, Xu (২০২০), <em>Trustworthy Online Controlled Experiments</em>, Cambridge University Press — সহ-লেখক Diane Tang (Google) এবং Ya Xu (LinkedIn)।</div></div>

  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>HiPPO সমস্যা:</strong> Kohavi-এর সংজ্ঞায় HiPPO = Highest Paid Person's Opinion। যখন কোনো পরীক্ষা নেই, সিদ্ধান্ত নেয় সবচেয়ে বেশি বেতনপ্রাপ্ত ব্যক্তির মতামত। কিন্তু HiPPO-ও ভুল করে — ৬০-৯০% সময়। ডেটা ছাড়া সিদ্ধান্ত = অনুমান।</div></div>

  <div class="diagram">
    <div class="diag-title">A/B Test কীভাবে কাজ করে — How A/B Testing Works</div>
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal7" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2dd4bf"/>
        </marker>
      </defs>
      <!-- User pool -->
      <ellipse class="cell-cyan" cx="280" cy="30" rx="100" ry="22"/>
      <text class="lbl-cyan" x="280" y="35" text-anchor="middle" font-weight="700">ব্যবহারকারী (Users)</text>
      <!-- Random split -->
      <line class="edge-cyan" x1="220" y1="50" x2="140" y2="95" marker-end="url(#arrTeal7)"/>
      <line class="edge-cyan" x1="340" y1="50" x2="420" y2="95" marker-end="url(#arrTeal7)"/>
      <text class="lbl-sm" x="160" y="70" text-anchor="middle">৫০% এলোমেলো</text>
      <text class="lbl-sm" x="400" y="70" text-anchor="middle">৫০% এলোমেলো</text>
      <!-- Group A (Control) -->
      <rect class="cell" x="60" y="95" width="160" height="70" rx="12"/>
      <text class="lbl" x="140" y="118" text-anchor="middle" font-weight="700">গ্রুপ A — Control</text>
      <text class="lbl-sm" x="140" y="135" text-anchor="middle">পুরোনো ডিজাইন</text>
      <text class="lbl-sm" x="140" y="150" text-anchor="middle">রূপান্তর হার: ৩.২%</text>
      <!-- Group B (Treatment) -->
      <rect class="cell-hot" x="340" y="95" width="160" height="70" rx="12"/>
      <text class="lbl-hot" x="420" y="118" text-anchor="middle" font-weight="700">গ্রুপ B — Treatment</text>
      <text class="lbl-sm" x="420" y="135" text-anchor="middle">নতুন ডিজাইন</text>
      <text class="lbl-sm" x="420" y="150" text-anchor="middle">রূপান্তর হার: ৩.৮%</text>
      <!-- Comparison -->
      <line class="edge-hot" x1="220" y1="140" x2="340" y2="140" stroke-dasharray="4,3"/>
      <text class="lbl-hot" x="280" y="135" text-anchor="middle" font-weight="700">+০.৬%</text>
      <text class="lbl-sm" x="280" y="150" text-anchor="middle">lift</text>
      <!-- Result -->
      <line class="edge-cyan" x1="140" y1="170" x2="220" y2="210" marker-end="url(#arrTeal7)"/>
      <line class="edge-cyan" x1="420" y1="170" x2="340" y2="210" marker-end="url(#arrTeal7)"/>
      <rect class="cell-leaf" x="180" y="210" width="200" height="50" rx="12"/>
      <text class="lbl-leaf" x="280" y="232" text-anchor="middle" font-weight="700">p < ০.০৫? → নতুন ডিজাইন চালু</text>
      <text class="lbl-sm" x="280" y="248" text-anchor="middle">statistically significant → ship it</text>
    </svg>
    <div class="diag-cap">ব্যবহারকারীদের এলোমেলো দুই ভাগে ভাগ করো। Control পুরোনো, Treatment নতুন। পার্থক্য গুরুত্বপূর্ণ হলে (p < ০.০৫) — নতুন চালু করো।</div>
  </div>

  <div class="code-block"># ── STEP 1: A/B testing metrics and analysis ──
# Measuring success in online experiments.

ab_metrics = """
A/B TEST METRICS & ANALYSIS:

PRIMARY METRIC (OEC - Overall Evaluation Criterion):
  → The ONE metric that determines success
  → Should be measurable in short-term but reflect long-term value
  → Examples: revenue per user, retention rate, engagement

GUARDRAIL METRICS:
  → Metrics that should NOT degrade
  → Examples: page load time, error rate, latency
  → Even if primary metric improves, guardrail regression kills the experiment

SECONDARY METRICS:
  → Provide context and diagnostics
  → Examples: click rate, time on page, bounce rate
  → Not decision criteria but help understand WHY

STATISTICAL ANALYSIS:
  1. TWO-PROPORTION Z-TEST (conversion rates):
     z = (p̂_B − p̂_A) / SE
     SE = √(p̄(1−p̄)(1/n_A + 1/n_B))

  2. TWO-SAMPLE t-TEST (continuous metrics):
     t = (x̄_B − x̄_A) / √(s²_A/n_A + s²_B/n_B)

  3. MANN-WHITNEY U (non-normal, e.g., revenue):
     Rank-based, robust to outliers

  4. BOOTSTRAP (any metric):
     Resample to get confidence intervals
     Good for complex metrics (percentiles, ratios)

EFFECT SIZE INTERPRETATION:
  Relative lift = (metric_B − metric_A) / metric_A
  Absolute lift = metric_B − metric_A

  Example: conversion 5.0% → 5.3%
  Absolute: +0.3 percentage points
  Relative: +6% (0.3/5.0)

  "Statistically significant" ≠ "practically significant"
  → +0.01% might be significant with millions of users but not worth shipping
"""

print(ab_metrics)</div>

  <div class="code-block"># ── STEP 2: A/B testing pitfalls ──
# Common mistakes and how to avoid them.

pitfalls = """
A/B TESTING PITFALLS:

1. PEEKING (optional stopping):
   → Checking p-value repeatedly during experiment
   → Each check inflates false positive rate
   → p < 0.05 checked 20 times → actual α ≈ 0.15
   → FIX: Pre-determine sample size, use sequential testing (SPRT)

2. MULTIPLE COMPARISONS:
   → Testing 20 metrics → 1 likely false positive (at α=0.05)
   → FIX: Bonferroni (α/m), False Discovery Rate, hierarchical testing

3. SIMPSON'S PARADOX:
   → Treatment better overall, but worse for each subgroup
   → Example: Desktop shows +2%, Mobile shows +2%
   → But overall −1% (different mix of users)
   → FIX: Always segment analysis

4. NOVELTY EFFECT:
   → Users react to CHANGE itself (not the improvement)
   → Effect fades after 1-2 weeks
   → FIX: Run long enough (at least 1-2 weeks)

5. LEARNING EFFECT:
   → Users take time to learn new interface
   → Initially worse, then better
   → FIX: Run long enough to see steady state

6. INTERFERENCE (network effects):
   → Users in different groups interact
   → Example: social network, ride-sharing (driver supply)
   → FIX: Cluster randomization (geo-based, time-based)

7. SELECTION BIAS:
   → Only analyze users who SAW the experiment
   → Excludes users with slow connections, ad blockers
   → FIX: Intent-to-treat analysis (all assigned users)

8. SAMPLE RATIO MISMATCH (SRM):
   → 50/50 split but actually 51/49
   → Indicates a bug in assignment or tracking
   → FIX: Always check SRM FIRST (chi-squared goodness of fit)

KOHAVI'S LAWS:
  → "Only 1/3 of ideas are positive"
  → "1/3 are negative, 1/3 are neutral"
  → "The biggest sin is NOT running experiments"
"""

print(pitfalls)</div>

  <div class="code-block"># ── STEP 3: Multi-armed bandits ──
# Adaptive experimentation.

bandits = """
MULTI-ARMED BANDITS:

Traditional A/B test: fixed allocation (50/50) for fixed duration.
  → Wastes traffic on the loser for the entire experiment

BANDIT: adaptively allocate traffic to the better-performing arm.
  → Sends more traffic to the winner as evidence accumulates
  → Reduces "regret" (opportunity cost of showing inferior version)

NAMED AFTER SLOT MACHINES ("one-armed bandits"):
  → Multiple machines (arms), each with unknown payout
  → Explore (try each) vs Exploit (play the best so far)

ALGORITHMS:

1. EPSILON-GREEDY:
   → With probability ε: explore (random arm)
   → With probability 1−ε: exploit (best arm so far)
   → Simple, ε usually 0.1

2. UPPER CONFIDENCE BOUND (UCB):
   → Pick arm with highest upper confidence bound
   → "Optimism in the face of uncertainty"
   → Balances exploration and exploitation automatically

3. THOMPSON SAMPLING (Bayesian):
   → Maintain posterior distribution for each arm
   → Sample from each posterior, pick highest sample
   → Natural exploration-exploitation balance
   → Converges faster than epsilon-greedy

WHEN TO USE BANDITS:
  → Short-lived content (news, ads)
  → Continuous optimization (recommendations)
  → When you can't afford to wait for A/B test to complete

WHEN NOT TO USE:
  → Need rigorous statistical proof
  → Learning effect/novelty effect (bandit may kill too early)
  → Need to understand WHY (A/B test provides cleaner data)

PYTHON:
  # Thompson sampling for conversion rate optimization:
  from scipy.stats import beta

  # For each variant, maintain Beta(α, β) posterior
  # α = 1 + conversions, β = 1 + failures
  variants = {
      'A': {'alpha': 1, 'beta': 1},
      'B': {'alpha': 1, 'beta': 1},
      'C': {'alpha': 1, 'beta': 1},
  }

  for _ in range(experiment_duration):
      # Sample from each posterior:
      samples = {v: beta(alpha, beta).rvs() for v, params in variants.items()}
      # Pick variant with highest sample:
      winner = max(samples, key=samples.get)
      # Show winner, observe result, update:
      if user_converts:
          variants[winner]['alpha'] += 1
      else:
          variants[winner]['beta'] += 1
"""

print(bandits)</div>

  <div class="code-block"># ── STEP 4: Causal inference ──
# Moving beyond correlation to causation.

causal = """
CAUSAL INFERENCE:

"Correlation does not imply causation."
But sometimes we NEED to know causation.

THE FUNDAMENTAL PROBLEM OF CAUSAL INFERENCE:
  We can only observe ONE outcome per person:
  → Either treated OR not treated (never both)
  → The "counterfactual" (what would have happened) is unobserved

POTENTIAL OUTCOMES FRAMEWORK (Neyman-Rubin):
  Y₁ᵢ = outcome if person i is treated
  Y₀ᵢ = outcome if person i is NOT treated
  Treatment effect for person i: Y₁ᵢ − Y₀ᵢ
  Average Treatment Effect (ATE): E[Y₁ − Y₀]

  Problem: we only observe Y₁ OR Y₀, never both.

METHODS TO ESTIMATE CAUSAL EFFECTS:

1. RANDOMIZED CONTROLLED TRIAL (RCT):
   → Randomization makes treated/control groups identical
   → ATE = mean(treated) − mean(control)
   → Gold standard but often expensive/impossible

2. DIFFERENCE-IN-DIFFERENCES (DiD):
   → Before/after for treatment AND control
   → Assumes parallel trends (without treatment)
   → Effect = (Δ treatment) − (Δ control)

3. INSTRUMENTAL VARIABLES (IV):
   → Find instrument Z that affects treatment but not outcome
   → Two-stage: regress treatment on Z, then outcome on predicted treatment
   → Example: military draft lottery → education → earnings

4. REGRESSION DISCONTINUITY (RDD):
   → Treatment assigned by threshold (GPA > 3.5 → scholarship)
   → Compare people just above/below threshold
   → Local average treatment effect (LATE)

5. PROPENSITY SCORE MATCHING:
   → Match on observed covariates
   → Estimate propensity: P(treatment | covariates)
   → Match treated/untreated with same propensity
   → Can't control for UNOBSERVED confounders

6. DO-CALCULUS (Judea Pearl):
   → Graphical models (DAGs) for causal relationships
   → backdoor criterion, front-door criterion
   → Identifies when causal effects can be estimated

PYTHON:
  # DoWhy library (Microsoft):
  from dowhy import CausalModel

  model = CausalModel(data, treatment, outcome, graph)
  identified = model.identify_effect()
  estimate = model.estimate_effect(identified)
"""

print(causal)</div>

  <div class="code-block"># ── STEP 5: Meta-analysis ──
# Combining evidence from multiple studies.

meta = """
META-ANALYSIS:

Systematic review + quantitative synthesis of multiple studies.
  → "Standing on the shoulders of giants"
  → More powerful than any single study

THE PROCESS:
  1. SYSTEMATIC REVIEW:
     → Search ALL relevant studies (published + unpublished)
     → Pre-defined inclusion/exclusion criteria
     → Avoid cherry-picking

  2. EFFECT SIZE EXTRACTION:
     → Convert each study's result to common metric
     → Cohen's d, odds ratio, relative risk, correlation
     → Standardize for comparison

  3. POOLING (fixed vs random effects):
     Fixed effects: assume all studies share ONE true effect
     Random effects: assume true effect varies across studies
     → Weight each study by inverse variance

  4. HETEROGENEITY ASSESSMENT:
     → Q-statistic, I² (proportion of variance from heterogeneity)
     → High I² → studies disagree → explore why

  5. PUBLICATION BIAS:
     → Funnel plot: effect size vs sample size
     → Asymmetric → publication bias (missing small studies)
     → Trim-and-fill: estimate missing studies

  6. META-REGRESSION:
     → Regress effect size on study characteristics
     → Example: does effect vary by age, setting, year?

FOREST PLOT:
  → Visual summary of all studies
  → Each row = one study
  → Point estimate + confidence interval
  → Diamond at bottom = pooled estimate

FAMOUS META-ANALYSES:
  → Cochrane Collaboration (medicine)
  → What Works Clearinghouse (education)
  → Campbell Collaboration (social policy)

WHEN META-ANALYSIS MISLEADS:
  → "Garbage in, garbage out": bad studies → bad meta-analysis
  → Publication bias (file drawer problem)
  → Heterogeneity (mixing apples and oranges)
  → Need quality assessment of included studies
"""

print(meta)</div>

  <div class="code-block"># ── STEP 6: Experimentation best practices ──
# Run experiments that produce trustworthy conclusions.

best_practices = [
    "Define OEC (primary metric) before experiment",
    "Calculate sample size via power analysis",
    "Check SRM (sample ratio mismatch) FIRST",
    "Don't peek (use sequential testing if needed)",
    "Correct for multiple comparisons (Bonferroni/FDR)",
    "Segment analysis (Simpson's paradox check)",
    "Run long enough for novelty/learning effects",
    "Report effect size AND confidence interval",
    "Guardrail metrics: don't degrade latency/errors",
    "Bandits for short-lived content optimization",
    "RCT for causation, observational for hypothesis",
    "DiD/IV/RDD when RCT impossible",
    "DoWhy for causal model identification",
    "Meta-analysis: follow PRISMA guidelines",
    "Pre-register to prevent p-hacking and HARKing",
]

print("EXPERIMENTATION BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Method           │ Use Case                        │
# ├──────────────────┼──────────────────────────────────┤
# │ A/B test         │ Two versions, online             │
# │ Bandit           │ Adaptive, short-lived            │
# │ RCT              │ Gold standard causation          │
# │ DiD              │ Policy, before/after             │
# │ IV               │ Unobserved confounders           │
# │ RDD              │ Threshold assignment             │
# │ Meta-analysis    │ Combine multiple studies         │
# │ Do-calculus      │ Causal graph identification      │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৪ (City Builder's Codex / System Design) Door ১১-এ Observability & Monitoring শিখেছিলে। A/B test হলো observability-এর সক্রিয় রূপ — শুধু দেখা নয়, পরীক্ষা করা। Book ১৪ (LLMOps) Door ৫-এ Cost Optimization — A/B test দিয়ে দেখা যায় কোন মডেল বেশি লাভজনক।</div></div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ HiPPO সিদ্ধান্ত</div>
      সিইও বললেন নতুন ডিজাইন ভালো দেখায় — তাই চালু করো। কোনো পরীক্ষা নেই।
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ A/B Test সিদ্ধান্ত</div>
      ৫০% ব্যবহারকারীতে নতুন ডিজাইন দেখালাম। রূপান্তর হার ৩.২% → ৩.৮% (p < ০.০৫)। ডেটা বলছে চালু করো।
    </div>
  </div>

  <div class="verse">
    <div class="verse-arabic">وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ</div>
    <div class="verse-translation">আর তোমরা যখন মানুষের মধ্যে বিচার করবে তখন ন্যায্যবিচার করবে।</div>
    <div class="verse-ref">— কুরআন ৪:৫৮</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🧪</div>
    <div class="secret-text">বিশেষজ্ঞও ভুল বলে — প্রতিটি আইডিয়া পরীক্ষা করো।</div>
    <div class="secret-sub">Experts err too — test every idea.</div>
  </div>`,
  senior: {
    title: "বিশ্বাস করো না, পরীক্ষা করো",
    body: `<p><strong>১. প্রতিটি ফিচার A/B test করো:</strong> বড় বা ছোট — প্রতিটি পরিবর্তন পরীক্ষা করো। ৬০-৯০% আইডিয়া ভুল বা নিরপেক্ষ।</p>
    <p><strong>২. আগে থেকে সময় নির্ধারণ করো:</strong> কতদিন চলবে তা আগে বেঁধে ফেলো। Peeking (মাঝপথে দেখা) p-value নষ্ট করে।</p>
    <p><strong>৩. Effect size + significance:</strong> শুধু 'p < ০.০৫' দেখলে হবে না — পার্থক্য কত বড় তাও দেখো। +০.০১% গুরুত্বপূর্ণ হতে পারে পরিসংখ্যানে, কিন্তু অর্থহীন ব্যবসায়।</p>`
  }
});

doors.push({
  num: 8,
  icon: "🔗",
  color: "#5eead4",
  name: "কারণের শৃঙ্খল",
  subtitle: "The Chain of Causes",
  tech: "Causal Inference — DAGs, Confounders, Do-Operator (Pearl, 2000)",
  spirit: "সাবাব — কারণ ও ফল, উপায় ও পরিণতি",
  secret: "সম্পর্ক কার্যকারণ নয় — প্রতিটি সম্পর্কে জিজ্ঞেস করো: কারণ, নাকি কেবল সঙ্গতি?",
  recall: {
    q: "Pearl-এর do-operator কী? পর্যবেক্ষণ বনাম হস্তক্ষেপের পার্থক্য কী?",
    qen: "What is Pearl's do-operator? What is the difference between observation and intervention?",
    a: "P(Y|X) = X দেখলে Y-এর সম্ভাবনা (পর্যবেক্ষণ)। P(Y|do(X)) = X বলপ্রয়োগ করলে Y-এর সম্ভাবনা (হস্তক্ষেপ)। ব্যবহার: বরফের বিক্রি ও পানিতে ডোবার সম্পর্ক আছে, কিন্তু বরফ কিনলে কেউ ডোবে না — কারণ হলো গরম আবহাওয়া।",
    aen: "P(Y|X) = probability of Y seeing X (observation). P(Y|do(X)) = probability of Y forcing X (intervention). Example: ice cream sales and drowning correlate, but buying ice cream doesn't cause drowning — the cause is hot weather."
  },
  story: `<p class="scene-setting">লস অ্যাঞ্জেলেস, ১৯৯০-এর দশক। UCLA-তে একজন কম্পিউটার বিজ্ঞানী একটা সাধারণ কিন্তু গভীর প্রশ্ন নিয়ে ভাবছেন। সম্পর্ক (correlation) আর কার্যকারণ (causation)-এর মধ্যে পার্থক্য কী? সবাই বলে 'correlation is not causation' — কিন্তু কেউ বলে না কীভাবে causation চিনব। তাঁর নাম — জুডিয়া পার্ল (Judea Pearl)। তিনি একটা গাণিতিক ভাষা তৈরি করলেন যা কার্যকারণ বোঝার চাবিকাঠি।</p>

  <p class="scene-setting en">Los Angeles, 1990s. At UCLA, a computer scientist pondered a simple but profound question. What is the difference between correlation and causation? Everyone says 'correlation is not causation' — but no one says how to identify causation. His name — Judea Pearl. He built a mathematical language that is the key to understanding causation.</p>

  <div class="dialogue">
    <p><strong>পার্ল:</strong> তুমি দেখলে বরফের বিক্রি বাড়লে পানিতে ডোবার ঘটনাও বাড়ে। তুমি ভাবলে — বরফ খেলে মানুষ ডোবে! বোকামি। আসল কারণ হলো গরম আবহাওয়া — যা বরফের বিক্রিও বাড়ায় এবং সাঁতার কাটার সময়ও। গরম হলো confounder — যা দুটোকেই প্রভাবিত করে।</p>
    <p><strong>তুমি:</strong> তাহলে কীভাবে জানব কোনটা আসল কারণ?</p>
    <p><strong>পার্ল:</strong> দুই উপায়। প্রথম — randomized experiment। এলোমেলোভাবে কিছু মানুষকে বরফ খেতে দাও, কিছুকে না। দেখো কারা বেশি ডোবে। (spoiler: কেউ ডোবে না।) দ্বিতীয় — যদি পরীক্ষা করতে না পারো, তাহলে do-operator ব্যবহার করো। P(drowning | do(ice cream)) — বরফ খাওয়ানো হলে ডোবার সম্ভাবনা। এটা P(drowning | ice cream) থেকে আলাদা।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Pearl:</strong> You see ice cream sales increase with drowning. You think — eating ice cream makes people drown! Nonsense. The real cause is hot weather — which increases both ice cream sales and swimming time. Heat is the confounder — affecting both.</p>
    <p><strong>You:</strong> Then how do I know the real cause?</p>
    <p><strong>Pearl:</strong> Two ways. First — randomized experiment. Randomly give some people ice cream, not others. See who drowns more. (spoiler: no one.) Second — if you can't experiment, use the do-operator. P(drowning | do(ice cream)) — probability of drowning when forced to eat ice cream. This differs from P(drowning | ice cream).</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> জুডিয়া পার্ল (জন্ম সেপ্টেম্বর ৪, ১৯৩৬, তেল আবিব) এখনও জীবিত (বয়স ৮৯)। তাঁর মূল বই <em>Causality: Models, Reasoning, and Inference</em> (২০০০, Cambridge University Press; ২য় সংস্করণ ২০০৯)। সাধারণ পাঠকের জন্য: <em>The Book of Why: The New Science of Cause and Effect</em> (মে ১৫, ২০১৮, Basic Books, সহ-লেখক Dana Mackenzie)। তিনি ২০১১ সালে Turing Award পান — 'probabilistic and causal reasoning-এর জন্য।' তিনি UCLA Samueli School of Engineering-এ (১৯৭০ সাল থেকে) আছেন। do-calculus এবং DAG (Directed Acyclic Graph) তাঁর মূল অবদান।</div></div>

  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যক্তিগত নোট:</strong> জুডিয়া পার্ল হলেন ড্যানিয়েল পার্ল-এর পিতা — ওয়াল স্ট্রিট জার্নাল-এর সাংবাদিক যিনি ২০০২ সালে পাকিস্তানে নিহত হন। তাঁর মৃত্যুর পর জুডিয়া পার্ল Daniel Pearl Foundation প্রতিষ্ঠা করেন।</div></div>

  <div class="diagram">
    <div class="diag-title">DAG — Directed Acyclic Graph for Causal Relationships</div>
    <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal8" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2dd4bf"/>
        </marker>
        <marker id="arrHot8" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444"/>
        </marker>
      </defs>
      <!-- Confounder: Heat -->
      <circle class="node-hot" cx="280" cy="30" r="28"/>
      <text class="lbl-hot" x="280" y="28" text-anchor="middle" font-weight="700">গরম</text>
      <text class="lbl-sm" x="280" y="40" text-anchor="middle">Heat</text>
      <text class="lbl-sm" x="280" y="50" text-anchor="middle" font-style="italic">(confounder)</text>
      <!-- Ice cream -->
      <circle class="node-cyan" cx="140" cy="180" r="32"/>
      <text class="lbl-cyan" x="140" y="178" text-anchor="middle" font-weight="700">বরফের</text>
      <text class="lbl-cyan" x="140" y="190" text-anchor="middle" font-weight="700">বিক্রি</text>
      <text class="lbl-sm" x="140" y="225" text-anchor="middle">Ice Cream Sales</text>
      <!-- Drowning -->
      <circle class="node-purple" cx="420" cy="180" r="32"/>
      <text class="lbl-leaf" x="420" y="178" text-anchor="middle" font-weight="700">পানিতে</text>
      <text class="lbl-leaf" x="420" y="190" text-anchor="middle" font-weight="700">ডোবা</text>
      <text class="lbl-sm" x="420" y="225" text-anchor="middle">Drowning</text>
      <!-- Arrows from Heat -->
      <path d="M 260 50 Q 200 100 160 150" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrHot8)"/>
      <path d="M 300 50 Q 360 100 400 150" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrHot8)"/>
      <!-- Fake correlation (dashed) -->
      <line class="edge-cyan" x1="175" y1="180" x2="385" y2="180" stroke-dasharray="5,4" stroke-width="2"/>
      <text class="lbl-cyan" x="280" y="175" text-anchor="middle" font-weight="700">ভুয়া সম্পর্ক</text>
      <text class="lbl-sm" x="280" y="195" text-anchor="middle">fake correlation</text>
      <!-- Labels for arrows -->
      <text class="lbl-sm" x="195" y="105" font-style="italic" fill="#ef4444">cause</text>
      <text class="lbl-sm" x="345" y="105" font-style="italic" fill="#ef4444">cause</text>
    </svg>
    <div class="diag-cap">গরম (confounder) বরফের বিক্রিও বাড়ায় এবং সাঁতারও বাড়ায়। বরফ ও ডোবার মধ্যে সম্পর্ক আছে (নীল ভাঙা রেখা), কিন্তু কার্যকারণ নেই। do(ice cream) = drowning কে প্রভাবিত করে না।</div>
  </div>

  <div class="code-block">
    <h4>🔬 কার্যকারণ তত্ত্ব — Causal Inference Concepts</h4>
    <table class="kv-table">
      <tr><th>ধারণা</th><th>সংজ্ঞা</th><th>উদাহরণ</th></tr>
      <tr><td class="hl">Confounder</td><td>তৃতীয় চলক যা উভয়কে প্রভাবিত করে</td><td>গরম → বরফ + ডোবা</td></tr>
      <tr><td class="hl">P(Y|X)</td><td>পর্যবেক্ষণ — X দেখলে Y</td><td>বরফ কিনলে ডোবার সম্ভাবনা বেশি</td></tr>
      <tr><td class="hl">P(Y|do(X))</td><td>হস্তক্ষেপ — X বাধ্য করলে Y</td><td>বরফ খাওয়ালে ডোবার সম্ভাবনা স্বাভাবিক</td></tr>
      <tr><td class="hl">Back-door path</td><td>পরোক্ষ পথ যা confounder তৈরি করে</td><td>বরফ ← গরম → ডোবা</td></tr>
      <tr><td class="hl">Front-door path</td><td>সরাসরি পথ কারণ থেকে ফলে</td><td>সার → উদ্ভিদ বৃদ্ধি → ফলন</td></tr>
      <tr><td class="hl">DAG</td><td>কার্যকারণের গ্রাফিকাল উপস্থাপন</td><td>তীর দিয়ে কারণ-ফল দেখায়</td></tr>
    </table>
    <br>
    <p><strong>পার্লের ব্রেকথ্রু:</strong> দশকের পর দশক পরিসংখ্যানবিদরা বলতেন 'correlation ≠ causation' এবং সেখানেই থেমে গেছেন। পার্ল বললেন — থামো না। একটা গাণিতিক ভাষা তৈরি করো যা কার্যকারণ বোঝে। do-calculus হলো সেই ভাষা — এটা বলে কোন confounder নিয়ন্ত্রণ করতে হবে, কোনটা ছাড়তে হবে।</p>
  </div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৩৩ (যুক্তির তাঁত) Door ৯-এ Second-Order Thinking শিখেছিলে — প্রতিটা কারণের ফল আছে, সেই ফলেরও ফল আছে। Pearl-এর DAG হলো সেই চিন্তার গাণিতিক রূপ। Book ৩১ (Classic ML) Door ৪ Decision Trees — সেখানে প্রতিটা শাখা একটা কার্যকারণ সম্পর্ক।</div></div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল সিদ্ধান্ত</div>
      বরফের বিক্রি ও ডোবার সম্পর্ক আছে (r = ০.৮) → বরফের বিক্রি নিষিদ্ধ করো!
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক সিদ্ধান্ত</div>
      গরম (confounder) দুটোকেই চালিত করে। P(drowning | do(ice cream)) = P(drowning)। বরফ নিষিদ্ধ করলে ডোবা কমবে না।
    </div>
  </div>

  <div class="verse">
    <div class="verse-arabic">إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ</div>
    <div class="verse-translation">নিশ্চয় আল্লাহ কোনো সম্প্রদায়ের অবস্থা পরিবর্তন করেন না যতক্ষণ না তারা নিজেদের অবস্থা পরিবর্তন করে।</div>
    <div class="verse-ref">— কুরআন ১৩:১১</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🔗</div>
    <div class="secret-text">সম্পর্ক কার্যকারণ নয় — প্রতিটা সম্পর্কে জিজ্ঞেস করো: কেন?</div>
    <div class="secret-sub">Correlation is not causation — for every link, ask: why?</div>
  </div>`,
  senior: {
    title: "প্রতিটা সম্পর্কে 'কেন' জিজ্ঞেস করো",
    body: `<p><strong>১. Confounder খোঁজো:</strong> দুটো চলক সম্পর্কিত দেখলে জিজ্ঞেস করো — কোনো তৃতীয় চলক কি দুটোকেই চালাচ্ছে?</p>
    <p><strong>২. Randomization = confounder নির্মূল:</strong> এলোমেলো ভাগ করলে confounder-এর প্রভাব গডেট হয়ে যায়। এটাই Fisher-এর উপহার (Door ৬)।</p>
    <p><strong>৩. do(X) চিন্তা করো:</strong> যেকোনো সম্পর্কে জিজ্ঞেস করো — 'আমি যদি X বাধ্য করি, Y পরিবর্তিত হবে?' যদি না হয় — সম্পর্ক ভুয়া।</p>`
  }
});

doors.push({
  num: 9,
  icon: "🚨",
  color: "#2dd4bf",
  name: "সংকটের সতর্কবার্তা",
  subtitle: "The Crisis Alert",
  tech: "Replication Crisis — p-hacking, Multiple Comparisons, Preregistration (Ioannidis, 2005)",
  spirit: "সিদক — সততা, নিজের সাথে সচ্চরিত্র হওয়া",
  secret: "বেশিরভাগ প্রকাশিত গবেষণা ভুল — কারণ পদ্ধতি ভুল। সততা ছাড়া পরিসংখ্যান মিথ্যার হাতিয়ার।",
  recall: {
    q: "Ioannidis (২০০৫) কী দাবি করেছিলেন? Reproducibility Project (২০১৫)-এর ফল কী ছিল?",
    qen: "What did Ioannidis (2005) claim? What was the result of the Reproducibility Project (2015)?",
    a: "Ioannidis দাবি করেন — বেশিরভাগ প্রকাশিত গবেষণার ফল ভুল। Reproducibility Project (২০১৫, Nosek) ১০০টা সাইকোলজি গবেষণা পুনরায় চালায় — মাত্র ৩৬% সফল! ৯৭টায় আগে গুরুত্বপূর্ণ ফল ছিল, পুনরাবৃত্তিতে মাত্র ৩৬%।",
    aen: "Ioannidis claimed — most published research findings are false. Reproducibility Project (2015, Nosek) replicated 100 psychology studies — only 36% succeeded! 97 originally had significant results, only 36% replicated."
  },
  story: `<p class="scene-setting">স্ট্যানফোর্ড, ২০০৫। একজন চিকিৎসক-গবেষক একটা গবেষণাপত্র লিখলেন যা বিজ্ঞানের জগতে ভূমিকম্প তৈরি করবে। শিরোনাম: <em>"Why Most Published Research Findings Are False"</em>। তিনি দাবি করলেন — বিজ্ঞানের সবচেয়ে নামকরা জার্নালে প্রকাশিত বেশিরভাগ গবেষণার ফল ভুল। তাঁর নাম — জন ইয়োয়ানিডিস (John Ioannidis)। তাঁর যুক্তি সহজ কিন্তু ভয়ংকর — পরিসংখ্যানের ভুল ব্যবহার গবেষণাকে বিভ্রান্তিকর করে তোলে।</p>

  <p class="scene-setting en">Stanford, 2005. A physician-researcher wrote a paper that would create an earthquake in science. Title: "Why Most Published Research Findings Are False." He claimed — most findings published in the most prestigious journals are wrong. His name — John Ioannidis. His argument was simple but devastating — misuse of statistics makes research misleading.</p>

  <div class="dialogue">
    <p><strong>ইয়োয়ানিডিস:</strong> তুমি ভাবো যদি ১০০০টা গবেষক ২০টা করে পরীক্ষা করে, তাহলে ২০,০০০টা ফল আসবে। শূন্য অনুকল্প সত্যি হলে, ৫% ফল দুর্ঘটনাক্রমে গুরুত্বপূর্ণ হবে (p < ০.০৫)। মানে ১,০০০টা ফল ভুলভাবে 'গুরুত্বপূর্ণ' হবে। কিন্তু মানুষ শুধু সেই ১,০০০টা প্রকাশ করে — বাকি ১৯,০০০টা লুকিয়ে রাখে। এটাই publication bias।</p>
    <p><strong>তুমি:</strong> তাহলে কি বিজ্ঞান ভুল?</p>
    <p><strong>ইয়োয়ানিডিস:</strong> বিজ্ঞান ভুল নয় — পদ্ধতি ভুল। সমাধান: ১. Preregistration — আগে থেকে বলো কী পরীক্ষা করবে। ২. Open data — সবাই দেখুক ডেটা। ৩. Replication — বারবার পরীক্ষা করো। সততা ছাড়া পরিসংখ্যান অস্ত্রে পরিণত হয়।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Ioannidis:</strong> If 1,000 researchers run 20 experiments each, that's 20,000 results. If the null is true, 5% will accidentally be significant (p < 0.05). That's 1,000 falsely 'significant' results. But people only publish those 1,000 — hiding the other 19,000. This is publication bias.</p>
    <p><strong>You:</strong> Then is science wrong?</p>
    <p><strong>Ioannidis:</strong> Science isn't wrong — method is. Solution: 1. Preregistration — declare what you'll test beforehand. 2. Open data — let everyone see. 3. Replication — test again and again. Without honesty, statistics becomes a weapon.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> জন ইয়োয়ানিডিস (জন্ম আগস্ট ২১, ১৯৬৫, নিউ ইয়র্ক) স্ট্যানফোর্ডে মেডিসিন, এপিডেমিওলজি, এবং পরিসংখ্যানের অধ্যাপক। তাঁর গবেষণাপত্র <em>"Why Most Published Research Findings Are False"</em> প্রকাশিত হয় <strong>PLOS Medicine</strong>, খণ্ড ২, সংখ্যা ৮, নিবন্ধ e124 (আগস্ট ৩০, ২০০৫)-এ। এটি PLOS-এর ইতিহাসে সবচেয়ে বেশি অ্যাক্সেস করা নিবন্ধ — ৩০ লক্ষ+ ভিউ (২০২০ সাল পর্যন্ত)। তিনি স্ট্যানফোর্ডে Meta-Research Innovation Center (METRIC)-এর সহ-পরিচালক।</div></div>

  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">৩৬%</div><div class="sc-label">সাইকোলজি গবেষণা পুনরাবৃত্তি সফল (Nosek, ২০১৫)</div></div>
    <div class="stat-card"><div class="sc-num">৩০ লক্ষ+</div><div class="sc-label">Ioannidis-এর নিবন্ধের ভিউ</div></div>
    <div class="stat-card"><div class="sc-num">৮৫%</div><div class="sc-label">ক্যানসার বায়োলজি ফলাফল ছোট (Reproducibility Project, ২০২১)</div></div>
    <div class="stat-card"><div class="sc-num">২০০৫</div><div class="sc-label">ICMJE preregistration বাধ্যতামূলক করে</div></div>
  </div>

  <div class="diagram">
    <div class="diag-title">p-hacking — How Researchers Fool Themselves</div>
    <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrHot9" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444"/>
        </marker>
      </defs>
      <!-- Funnel of 20 tests -->
      <text class="lbl-sm" x="50" y="30" font-weight="700">২০টি পরীক্ষা চালানো হলো</text>
      <text class="lbl-sm" x="50" y="42">20 experiments run</text>
      <g transform="translate(30,50)">
        <rect class="cell-cyan" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="16" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="32" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="48" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="64" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" y="14" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="16" y="14" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="32" y="14" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="48" y="14" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="64" y="14" width="12" height="10" rx="1"/>
      </g>
      <!-- Arrow narrowing -->
      <path d="M 120 60 L 220 100" stroke="#ef4444" stroke-width="2" marker-end="url(#arrHot9)" fill="none"/>
      <path d="M 120 85 L 220 105" stroke="#ef4444" stroke-width="2" fill="none"/>
      <text class="lbl-hot" x="160" y="78" text-anchor="middle" font-size="10">শুধু ১টা p&lt;০.০৫</text>
      <!-- Published -->
      <text class="lbl-sm" x="280" y="85" font-weight="700" text-anchor="middle">প্রকাশিত</text>
      <rect class="cell-hot" x="250" y="95" width="60" height="25" rx="4"/>
      <text class="lbl-hot" x="280" y="112" text-anchor="middle" font-weight="700">p = ০.০৪!</text>
      <!-- Arrow -->
      <line class="edge-hot" x1="320" y1="108" x2="390" y2="108" marker-end="url(#arrHot9)"/>
      <!-- Result -->
      <text class="lbl-sm" x="440" y="95" font-weight="700" text-anchor="middle">ফলাফল</text>
      <rect class="cell-hot" x="400" y="100" width="90" height="30" rx="4"/>
      <text class="lbl-hot" x="445" y="120" text-anchor="middle" font-size="11">ব্রেকথ্রু!</text>
      <!-- Hidden -->
      <text class="lbl-sm" x="280" y="165" font-weight="700" text-anchor="middle" fill="#5e5c74">১৯টা লুকানো হলো</text>
      <text class="lbl-sm" x="280" y="177" text-anchor="middle" fill="#5e5c74">(19 hidden in file drawer)</text>
      <g transform="translate(220,185)" opacity="0.3">
        <rect class="cell-cyan" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="16" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="32" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="48" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="64" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" y="14" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="16" y="14" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="32" y="14" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="48" y="14" width="12" height="10" rx="1"/>
        <rect class="cell-cyan" x="64" y="14" width="12" height="10" rx="1"/>
      </g>
      <text class="lbl-sm" x="280" y="220" text-anchor="middle" font-style="italic" fill="#ef4444">এটাই বিজ্ঞানের বৃহত্তম সমস্যা</text>
    </svg>
    <div class="diag-cap">p-hacking: ২০টা পরীক্ষা করো, ১টায় দুর্ঘটনাক্রমে p < ০.০৫ পাবে। সেটাই প্রকাশ করো — বাকিগুলো লুকাও। এটাই Ioannidis-এর সতর্কতা।</div>
  </div>

  <div class="code-block">
    <h4>🔬 সংকট ও সমাধান — Crisis & Solutions</h4>
    <table class="kv-table">
      <tr><th>সমস্যা</th><th>ব্যাখ্যা</th><th>সমাধান</th></tr>
      <tr><td class="hl">p-hacking</td><td>অনেক পরীক্ষা করে গুরুত্বপূর্ণ ফল খোঁজা</td><td>Preregistration — আগে থেকে পরিকল্পনা</td></tr>
      <tr><td class="hl">Publication bias</td><td>শুধু গুরুত্বপূর্ণ ফল প্রকাশ করা</td><td>Open access — সব ফল প্রকাশ করো</td></tr>
      <tr><td class="hl">HARKing</td><td>ফলাফল দেখে অনুকল্প বানানো</td><td>অনুকল্প আগে থেকে লেখো</td></tr>
      <tr><td class="hl">Multiple comparisons</td><td>অনেক মেট্রিক দেখা</td><td>Bonferroni correction</td></tr>
      <tr><td class="hl">Small sample</td><td>অল্প নমুনায় ফল পাওয়া</td><td>Power analysis — আগে থেকে n নির্ধারণ</td></tr>
    </table>
    <br>
    <p><strong>Reproducibility Project: Psychology (২০১৫):</strong> Brian Nosek এবং Open Science Collaboration ১০০টা সাইকোলজি গবেষণা (২০০৮ সালে প্রকাশিত) পুনরায় চালান। ফল: মূল গবেষণার ৯৭%-এ গুরুত্বপূর্ণ ফল ছিল, কিন্তু পুনরাবৃত্তিতে মাত্র <strong>৩৬%</strong>-এ গুরুত্বপূর্ণ ফল পাওয়া গেছে। প্রকাশিত: <em>Science</em> ৩৪৯(৬২৫১): aac4716 (২০১৫)।</p>
    <p><strong>Reproducibility Project: Cancer Biology (২০২১):</strong> ৫৩টা শীর্ষ ক্যানসার গবেষণার ১৯৩টি পরীক্ষা থেকে মাত্র ৫০টি পরীক্ষা (২৩টি গবেষণা থেকে) পুনরাবৃত্তি করা গেছে। প্রভাবের আকার গড়ে ৮৫% ছোট।</p>
    <p><strong>ইতিহাস:</strong> p-hacking শব্দটি ২০১৪ সালে Uri Simonsohn, Leif Nelson, এবং Joseph Simmons চালু করেন (Data Colada ব্লগ)। Preregistration ক্লিনিক্যাল ট্রায়ালে ২০০৫ সাল থেকে বাধ্যতামূলক (ICMJE)। Center for Open Science (Brian Nosek, Jeffrey Spies) ২০১৩ সালের জানুয়ারিতে প্রতিষ্ঠিত।</p>
  </div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ২৪ (Throne of the Mind / Human Psychology) Door ৮-এ Replication Crisis শিখেছিলে — Amy Cuddy power posing (২০১০) পুনরাবৃত্তি ব্যর্থ (২০১৫)। Book ২৭ (Research Paper Craftsman) Door ৭-এ Peer Review শিখেছিলে — peer review p-hacking ধরতে পারে না। এই বই হলো সেই সতর্কতার পরিসংখ্যান ভিত্তি।</div></div>

  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ বিভ্রান্তিকর গবেষণা</div>
      ২০টা পরীক্ষা করলাম, ১টায় p < ০.০৫ পেলাম। সেটাই প্রকাশ করলাম — 'নতুন আবিষ্কার!'
    </div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সৎ গবেষণা</div>
      আগে থেকে বললাম — এই পরীক্ষা করব। প্রকাশ করলাম সব ফল (p = ০.০৪ এবং p = ০.৩২ সহ)। স্বাধীন দল পুনরাবৃত্তি করবে।
    </div>
  </div>

  <div class="verse">
    <div class="verse-arabic">يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ</div>
    <div class="verse-translation">হে বিশ্বাসীরা! আল্লাহকে ভয় করো এবং সত্যবাদীদের সাথে থাকো।</div>
    <div class="verse-ref">— কুরআন ৯:১১৯</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🚨</div>
    <div class="secret-text">সততা ছাড়া পরিসংখ্যান মিথ্যার হাতিয়ার — পদ্ধতি ন্যায্য হোক।</div>
    <div class="secret-sub">Without honesty, statistics is a weapon of lies — keep method fair.</div>
  </div>`,
  senior: {
    title: "সততা সবচেয়ে গুরুত্বপূর্ণ পরিসংখ্যান",
    body: `<p><strong>১. Preregister করো:</strong> ডেটা দেখার আগে অনুকল্প, পদ্ধতি, এবং বিশ্লেষণ লিখে ফেলো। পরে পরিবর্তন করবে না।</p>
    <p><strong>২. Null results প্রকাশ করো:</strong> p > ০.০৫ মানে ফলাফল অকার্যকর — সেটাও গুরুত্বপূর্ণ! জানালে অন্যরা ভুল পুনরাবৃত্তি করবে না।</p>
    <p><strong>৩. সংশয়বাদী হও:</strong> যেকোনো গবেষণার ফল দেখলে জিজ্ঞেস করো — কত নমুনা? প্রিরেজিস্টার্ড? পুনরাবৃত্তি হয়েছে? p-hacked নয় তো?</p>`
  }
});

doors.push({
  num: 10,
  icon: "⚖️",
  color: "#5eead4",
  name: "প্রমাণের প্রত্যাবর্তন",
  subtitle: "Return to the Scale",
  tech: "Synthesis — The Complete Evidence Pipeline: Hypothesis → Design → Analysis → Truth",
  spirit: "শহাদাত — প্রমাণ সহ সাক্ষ্য দেওয়া, জ্ঞানের চূড়ান্ত দায়িত্ব",
  secret: "একটা ধারণা থেকে সত্যে যাত্রা — প্রমাণের দশটি ধাপ। এটাই গবেষকের পথ।",
  recall: {
    q: "একটা গবেষণা প্রশ্ন থেকে নিশ্চিত সত্যে পৌঁছাতে কোন কোন ধাপ আছে? প্রতিটি ধাপে কোন দরজার জ্ঞান লাগে?",
    qen: "What are the steps from a research question to confirmed truth? Which door's knowledge applies at each step?",
    a: "১. প্রশ্ন (Door ১ Al-Kindi) → ২. ডেটা সংগ্রহ (Door ২ Graunt) → ৩. বণ্টন দেখো (Door ৩ Gauss) → ৪. অনুকল্প বানাও (Door ৪ Fisher) → ৫. সীমা নির্ধারণ (Door ৫ Neyman) → ৬. নকশা করো (Door ৬ Fisher) → ৭. পরীক্ষা চালাও (Door ৭ Kohavi) → ৮. কার্যকারণ যাচাই (Door ৮ Pearl) → ৯. সততা ধরো (Door ৯ Ioannidis) → ১০. সত্য।",
    aen: "1. Question (Door 1) → 2. Gather data (Door 2) → 3. See distribution (Door 3) → 4. Make hypothesis (Door 4) → 5. Set bounds (Door 5) → 6. Design experiment (Door 6) → 7. Run test (Door 7) → 8. Verify causation (Door 8) → 9. Maintain honesty (Door 9) → 10. Truth."
  },
  story: `<p class="scene-setting">তুমি এখন দাঁড়িয়ে আছো প্রমাণের দাঁড়িপাল্লার সামনে। পেছনে নয়টি দরজা — নয়জন প্রমাণ-কারিগর। তাঁরা সবাই ফিরে এসেছেন। আল-কিন্দি তাঁর কালির দাগযুক্ত আঙুল নিয়ে, গ্র্যান্ট তাঁর মৃত্যুর হিসাব নিয়ে, গাউস তাঁর বক্ররেখা নিয়ে, ফিশার তাঁর আলু ও চায়ের কাপ নিয়ে, নেইম্যান তাঁর সীমা নিয়ে, কোহাভি তাঁর A/B পরীক্ষা নিয়ে, পার্ল তাঁর DAG নিয়ে, আর ইয়োয়ানিডিস তাঁর সতর্কবার্তা নিয়ে। নয়জনই একসাথে বলছেন — সত্য একটা যাত্রা, গন্তব্য নয়।</p>

  <p class="scene-setting en">You now stand before the Scale of Evidence. Behind you: nine doors, nine evidence-craftsmen. They have all returned. Al-Kindi with his ink-stained fingers, Graunt with his death ledgers, Gauss with his bell curve, Fisher with his potatoes and tea cup, Neyman with his intervals, Kohavi with his A/B tests, Pearl with his DAGs, and Ioannidis with his warning. All nine say together — truth is a journey, not a destination.</p>

  <div class="dialogue">
    <p><strong>আল-কিন্দি:</strong> আমি তোমাকে শিখিয়েছিলাম — গণনা করো, প্যাটার্ন দেখো।</p>
    <p><strong>গ্র্যান্ট:</strong> আমি বলেছিলাম — সসীম সংখ্যায় অসীম কাহিনি।</p>
    <p><strong>গাউস:</strong> আমি দেখিয়েছিলাম — প্রকৃতির ছন্দ, ঘণ্টার বক্রতা।</p>
    <p><strong>ফিশার:</strong> আমি শিখিয়েছিলাম — নিজেকে ভুল প্রমাণ করো।</p>
    <p><strong>নেইম্যান:</strong> আমি বলেছিলাম — সীমা ছাড়া সংখ্যা অর্থহীন।</p>
    <p><strong>কোহাভি:</strong> আমি দেখিয়েছিলাম — বিশেষজ্ঞও ভুল, পরীক্ষা করো।</p>
    <p><strong>পার্ল:</strong> আমি শিখিয়েছিলাম — সম্পর্ক কার্যকারণ নয়।</p>
    <p><strong>ইয়োয়ানিডিস:</strong> আমি সতর্ক করেছিলাম — সততা ছাড়া সব মিথ্যা।</p>
    <p><strong>সবাই একসাথে:</strong> এখন তুমি জানো — কীভাবে একটা ধারণাকে সত্যে রূপান্তর করতে হয়। এটাই গবেষকের পথ।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Al-Kindi:</strong> I taught you — count, observe patterns.</p>
    <p><strong>Graunt:</strong> I said — finite numbers, infinite stories.</p>
    <p><strong>Gauss:</strong> I showed — nature's rhythm, the bell curve.</p>
    <p><strong>Fisher:</strong> I taught — try to prove yourself wrong.</p>
    <p><strong>Neyman:</strong> I said — without bounds, numbers are meaningless.</p>
    <p><strong>Kohavi:</strong> I showed — experts err, test everything.</p>
    <p><strong>Pearl:</strong> I taught — correlation is not causation.</p>
    <p><strong>Ioannidis:</strong> I warned — without honesty, all is false.</p>
    <p><strong>All together:</strong> Now you know — how to transform an idea into truth. This is the researcher's path.</p>
  </div>

  <div class="diagram">
    <div class="diag-title">প্রমাণের সম্পূর্ণ পথ — The Complete Evidence Pipeline</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal10" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2dd4bf"/>
        </marker>
      </defs>
      <!-- Pipeline stages -->
      <rect class="cell-cyan" x="20" y="20" width="120" height="40" rx="8"/>
      <text class="lbl-cyan" x="80" y="38" text-anchor="middle" font-weight="700">১. প্রশ্ন</text>
      <text class="lbl-sm" x="80" y="52" text-anchor="middle">Al-Kindi (৮৫০)</text>

      <rect class="cell-cyan" x="160" y="20" width="120" height="40" rx="8"/>
      <text class="lbl-cyan" x="220" y="38" text-anchor="middle" font-weight="700">২. ডেটা</text>
      <text class="lbl-sm" x="220" y="52" text-anchor="middle">Graunt (১৬৬২)</text>

      <rect class="cell-cyan" x="300" y="20" width="120" height="40" rx="8"/>
      <text class="lbl-cyan" x="360" y="38" text-anchor="middle" font-weight="700">৩. বণ্টন</text>
      <text class="lbl-sm" x="360" y="52" text-anchor="middle">Gauss (১৮০৯)</text>

      <rect class="cell-cyan" x="440" y="20" width="100" height="40" rx="8"/>
      <text class="lbl-cyan" x="490" y="38" text-anchor="middle" font-weight="700">৪. অনুকল্প</text>
      <text class="lbl-sm" x="490" y="52" text-anchor="middle">Fisher (১৯২৫)</text>

      <!-- Arrows down -->
      <line class="edge-cyan" x1="80" y1="65" x2="80" y2="95" marker-end="url(#arrTeal10)"/>
      <line class="edge-cyan" x1="220" y1="65" x2="220" y2="95" marker-end="url(#arrTeal10)"/>
      <line class="edge-cyan" x1="360" y1="65" x2="360" y2="95" marker-end="url(#arrTeal10)"/>
      <line class="edge-cyan" x1="490" y1="65" x2="490" y2="95" marker-end="url(#arrTeal10)"/>

      <rect class="cell-hot" x="20" y="100" width="120" height="40" rx="8"/>
      <text class="lbl-hot" x="80" y="118" text-anchor="middle" font-weight="700">৫. সীমা</text>
      <text class="lbl-sm" x="80" y="132" text-anchor="middle">Neyman (১৯৩৭)</text>

      <rect class="cell-hot" x="160" y="100" width="120" height="40" rx="8"/>
      <text class="lbl-hot" x="220" y="118" text-anchor="middle" font-weight="700">৬. নকশা</text>
      <text class="lbl-sm" x="220" y="132" text-anchor="middle">Fisher (১৯৩৫)</text>

      <rect class="cell-hot" x="300" y="100" width="120" height="40" rx="8"/>
      <text class="lbl-hot" x="360" y="118" text-anchor="middle" font-weight="700">৭. পরীক্ষা</text>
      <text class="lbl-sm" x="360" y="132" text-anchor="middle">Kohavi (২০০৭)</text>

      <rect class="cell-hot" x="440" y="100" width="100" height="40" rx="8"/>
      <text class="lbl-hot" x="490" y="118" text-anchor="middle" font-weight="700">৮. কারণ</text>
      <text class="lbl-sm" x="490" y="132" text-anchor="middle">Pearl (২০০০)</text>

      <!-- Arrows down -->
      <line class="edge-hot" x1="80" y1="145" x2="80" y2="175" marker-end="url(#arrTeal10)"/>
      <line class="edge-hot" x1="220" y1="145" x2="220" y2="175" marker-end="url(#arrTeal10)"/>
      <line class="edge-hot" x1="360" y1="145" x2="360" y2="175" marker-end="url(#arrTeal10)"/>
      <line class="edge-hot" x1="490" y1="145" x2="490" y2="175" marker-end="url(#arrTeal10)"/>

      <rect class="cell-leaf" x="20" y="180" width="120" height="40" rx="8"/>
      <text class="lbl-leaf" x="80" y="198" text-anchor="middle" font-weight="700">৯. সততা</text>
      <text class="lbl-sm" x="80" y="212" text-anchor="middle">Ioannidis (২০০৫)</text>

      <!-- Convergence arrows -->
      <line class="edge-amber" x1="80" y1="225" x2="220" y2="255" marker-end="url(#arrTeal10)"/>
      <line class="edge-amber" x1="220" y1="225" x2="260" y2="255" marker-end="url(#arrTeal10)"/>
      <line class="edge-amber" x1="360" y1="225" x2="300" y2="255" marker-end="url(#arrTeal10)"/>
      <line class="edge-amber" x1="490" y1="225" x2="340" y2="255" marker-end="url(#arrTeal10)"/>

      <!-- Truth -->
      <rect class="cell-good" x="180" y="260" width="200" height="45" rx="12"/>
      <text class="lbl-leaf" x="280" y="280" text-anchor="middle" font-weight="700" font-size="14">১০. সত্য / Truth</text>
      <text class="lbl-sm" x="280" y="295" text-anchor="middle">প্রমাণিত, নির্ভরযোগ্য, পুনরাবৃত্তিযোগ্য</text>
    </svg>
    <div class="diag-cap">৯টি ধাপ একসাথে — ধারণা থেকে সত্য। এটাই প্রমাণের পূর্ণ পথ। ১১৬৭ বছরের জ্ঞান (৮৫০-২০১৭) একটি পাইপলাইনে।</div>
  </div>

  <div class="code-block">
    <h4>🔬 গবেষকের চেকলিস্ট — The Researcher's Evidence Checklist</h4>
    <table class="kv-table">
      <tr><th>ধাপ</th><th>প্রশ্ন</th><th>দরজা</th></tr>
      <tr><td class="hl">১</td><td>আমার প্রশ্ন কী? কী প্যাটার্ন খুঁজছি?</td><td>১ — Al-Kindi</td></tr>
      <tr><td class="hl">২</td><td>ডেটা কোথা থেকে? কত নমুনা?</td><td>২ — Graunt</td></tr>
      <tr><td class="hl">৩</td><td>বণ্টন কীরকম? গডেট, মধ্যমা, σ?</td><td>৩ — Gauss</td></tr>
      <tr><td class="hl">৪</td><td>অনুকল্প কী? শূন্য কী?</td><td>৪ — Fisher</td></tr>
      <tr><td class="hl">৫</td><td>সীমা কত? CI কত চওড়া?</td><td>৫ — Neyman</td></tr>
      <tr><td class="hl">৬</td><td>নকশা ন্যায্য? এলোমেলো? ব্লক করা?</td><td>৬ — Fisher</td></tr>
      <tr><td class="hl">৭</td><td>পরীক্ষা চালানো হয়েছে? effect size?</td><td>৭ — Kohavi</td></tr>
      <tr><td class="hl">৮</td><td>কার্যকারণ নিশ্চিত? confounder নেই?</td><td>৮ — Pearl</td></tr>
      <tr><td class="hl">৯</td><td>প্রিরেজিস্টার্ড? সব ফল প্রকাশিত?</td><td>৯ — Ioannidis</td></tr>
      <tr><td class="hl">১০</td><td>পুনরাবৃত্তি হয়েছে? স্বাধীন দল নিশ্চিত করেছে?</td><td>সবাই</td></tr>
    </table>
    <br>
    <p><strong>সময়রেখা — ১১৬৭ বছরের যাত্রা:</strong></p>
    <p>• <strong>৮৫০:</strong> আল-কিন্দি — ফ্রিকোয়েন্সি বিশ্লেষণ (প্যাটার্ন ধরা)</p>
    <p>• <strong>১৬৬২:</strong> গ্র্যান্ট — জীবন-সারণি (ডেটা দিয়ে সমাজ বোঝা)</p>
    <p>• <strong>১৮০৯:</strong> গাউস — স্বাভাবিক বণ্টন (প্রকৃতির ছন্দ)</p>
    <p>• <strong>১৯২৫:</strong> ফিশার — p-value ও hypothesis testing (অনুকল্প পরীক্ষা)</p>
    <p>• <strong>১৯৩৫:</strong> ফিশার — experimental design (ন্যায্য পরীক্ষা)</p>
    <p>• <strong>১৯৩৭:</strong> নেইম্যান — confidence intervals (অনিশ্চয়তার সীমা)</p>
    <p>• <strong>২০০০:</strong> পার্ল — causal inference (কারণ বনাম সম্পর্ক)</p>
    <p>• <strong>২০০৫:</strong> ইয়োয়ানিডিস — replication crisis (সততার সতর্কতা)</p>
    <p>• <strong>২০০৭:</strong> কোহাভি — A/B testing (ডিজিটাল যুগের পরীক্ষা)</p>
  </div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স — পুরো লাইব্রেরির সংযোগ:</strong> এই বই হলো <strong>প্রমাণের ভিত্তি</strong> — এটা ছাড়া বাকি সব বই অসম্পূর্ণ। Book ৩০ (Math for ML) গণিত শেখায়, কিন্তু প্রমাণ শেখায় না। Book ৩১ (Classic ML) অ্যালগরিদম শেখায়, কিন্তু validation শেখায় না। Book ৩৩ (Critical Thinking) চিন্তা শেখায়, কিন্তু পরিসংখ্যান শেখায় না। Book ২৮ (Knowledge Web) সংযোগ শেখায় — এই বই হলো সেই সংযোগের প্রমাণ ভিত্তি। প্রতিটা গবেষণায় এই দশটি ধাপ লাগবে।</div></div>

  <div class="checklist">
    <li>প্রতিটা দাবির পেছনে প্রমাণ জিজ্ঞেস করো</li>
    <li>গডেট একা দেখো না — মধ্যমা, σ, বণ্টন দেখো</li>
    <li>p-value ভুল ব্যাখ্যা করো না — এটা সত্যতার প্রমাণ নয়</li>
    <li>Confidence interval সবসময় রিপোর্ট করো</li>
    <li>নকশা ভুল হলে ফলাফল অর্থহীন — আগে নকশা করো</li>
    <li>বিশেষজ্ঞও ভুল — প্রতিটা আইডিয়া পরীক্ষা করো</li>
    <li>সম্পর্ক কার্যকারণ নয় — confounder খোঁজো</li>
    <li>প্রিরেজিস্টার করো — সততা সবচেয়ে গুরুত্বপূর্ণ</li>
    <li>পুনরাবৃত্তি ছাড়া কোনো ফল বিশ্বাস করো না</li>
    <li>সত্য = প্রমাণিত + নির্ভরযোগ্য + পুনরাবৃত্তিযোগ্য</li>
  </div>

  <div class="verse">
    <div class="verse-arabic">وَقُل رَّبِّ زِدْنِي عِلْمًا</div>
    <div class="verse-translation">হে আমার রব, আমার জ্ঞান বৃদ্ধি করো।</div>
    <div class="verse-ref">— কুরআন ২০:১১৪</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">⚖️</div>
    <div class="secret-text">একটা ধারণা থেকে সত্যে যাত্রা — দশটি ধাপ, একটি পথ।</div>
    <div class="secret-sub">From idea to truth — ten steps, one path.</div>
  </div>`,
  senior: {
    title: "তুমি এখন বুরহান অধিকারী",
    body: `<p><strong>পরবর্তী পদক্ষেপ:</strong> একটা গবেষণা প্রশ্ন বেছে নাও। দশটি ধাপ প্রয়োগ করো। প্রথমবার ভুল হবে — দ্বিতীয়বার ভালো হবে। তৃতীয়বার নিখুঁত।</p>
    <p><strong>Andrew Gelman-এর পরামর্শ:</strong> "Statistics is not math — it's science." পরিসংখ্যান কেবল সংখ্যা নয় — এটা সত্য খোঁজার পদ্ধতি।</p>
    <p><strong>পড়ার তালিকা:</strong> ১. Fisher (১৯২৫) Statistical Methods for Research Workers. ২. Pearl (২০১৮) The Book of Why. ৩. Kohavi, Tang, Xu (২০২০) Trustworthy Online Controlled Experiments. ৪. Ioannidis (২০০৫) Why Most Published Research Findings Are False.</p>`
  }
});
