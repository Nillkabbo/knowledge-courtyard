doors.push({
  num: 6,
  icon: "🎲",
  color: "#6366f1",
  name: "শব্দ দিয়ে সত্য খোঁজা",
  subtitle: "Finding Truth Through Noise",
  tech: "Stochastic Gradient Descent — Robbins & Monro (1951), mini-batch, convergence in expectation",
  spirit: "সবর — ধৈর্য, শব্দযুক্ত পথে সত্য তল করা",
  secret: "SGD = পুরো ডেটা না দেখে একটি বা কয়েকটি নমুনা দিয়ে গ্রেডিয়েন্ট হিসাব। শব্দ আছে — কিন্তু গড়ে সত্য। সবর (ধৈর্য) — প্রতিটি পদক্ষেপ ভুল হতে পারে, কিন্তু গড়ে সঠিক দিকে।",
  recall: {
    q: " SGD এবং GD-এর পার্থক্য কী? mini-batch কী?",
    qen: "What's the difference between SGD and GD? What is mini-batch?",
    a: "GD পুরো ডেটা দিয়ে গ্রেডিয়েন্ট হিসাব করে (সঠিক কিন্তু ধীর)। SGD একটি বা কয়েকটি নমুনা দিয়ে (শব্দযুক্ত কিন্তু দ্রুত)। mini-batch = ৩২-২৫৬ নমুনা — ভারসাম্য।",
    aen: "GD uses all data (exact but slow). SGD uses one/few samples (noisy but fast). mini-batch = 32-256 samples — the balance."
  },
  story: `<p class="scene-setting">১৯৫১, আমেরিকা। Herbert Robbins ও Sutton Monro একটি পেপার লিখছেন — "A Stochastic Approximation Method।" তাদের প্রশ্ন — যদি প্রতিটি মাপ শব্দযুক্ত হয়, সত্য মান কীভাবে খুঁজবে? উত্তর: পর্যাপ্ত সংখ্যক মাপ নাও, গড়ে সত্য বের হবে — যদি পদক্ষেপের আকার ধীরে ধীরে কমে।</p>
<p class="scene-setting en">1951, USA. Herbert Robbins and Sutton Monro write "A Stochastic Approximation Method." Question: if each measurement is noisy, how to find the true value? Answer: take enough measurements, average reveals truth — if step sizes decrease over time.</p>

<div class="dialogue"><strong>ধৈর্যশীল রহিম:</strong> ভাবো তুমি একটি নদীর গভীরতা মাপছো। প্রতিটি মাপে ঢেউ একটু এদিক-ওদিক করে — শব্দ। কিন্তু তুমি ১০০ বার মাপলে গড় করলে — সত্য গভীরতা পাও। SGD ঠিক তাই — একটি ডেটা পয়েন্ট দিয়ে গ্রেডিয়েন্ট মাপো (শব্দযুক্ত), কিন্তু হাজার ধাপে গড় সঠিক দিকে যায়।</div>
<div class="dialogue en"><strong>Patient Rahim:</strong> Measure a river's depth. Each measurement has wave noise. But average 100 times — you get true depth. SGD is the same — measure gradient from one point (noisy), but thousands of steps average to the right direction.</div>

<div class="callout info"><span class="co-icon">🎲</span><div><strong>SGD বনাম GD:</strong><br>
<strong>GD (Gradient Descent):</strong> ∇f = (1/N) Σ ∇fᵢ — সব N ডেটা দিয়ে হিসাব। সঠিক কিন্তু ধীর (N = মিলিয়ন হলে অসম্ভব)।<br>
<strong>SGD:</strong> ∇f ~= ∇fᵢ — একটি নমুনা দিয়ে হিসাব। শব্দযুক্ত কিন্তু দ্রুত।<br>
<strong>Mini-batch SGD:</strong> ∇f ~= (1/B) Σ ∇fᵢ — B=৩২-২৫৬ নমুনা। ভারসাম্য — সঠিকতা ও গতির মিলন।</div></div>

<div class="code-block"># ── STEP 1: SGD theory and convergence ──
# Why stochastic optimization works.

sgd_theory = """
SGD CONVERGENCE THEORY:

ROBBINS-MONRO CONDITIONS (1951):
  For SGD to converge, learning rates must satisfy:
  1. Σ η_t = ∞ (enough total steps)
  2. Σ η_t² < ∞ (noise dies out)

  → η_t = 1/t satisfies both → converges
  → η_t = constant satisfies neither → oscillates

SGD CONVERGENCE RATES:
  Convex: E[f(x_k)] − f* ≤ O(1/√k) (slower than batch GD)
  Strongly convex: E[f(x_k)] − f* ≤ O(1/k) (still slower)
  Non-convex: converges to stationary point: E[||∇f||²] ≤ O(1/√k)

  → SGD is slower per-iteration but uses FAR fewer samples
  → Net effect: SGD reaches good solution faster (wall clock)

VARIANCE REDUCTION:
  Pure SGD noise prevents exact convergence.
  → SAG, SAGA, SVRG: reduce variance using gradient memory
  → Enables O(1/k) convergence (like batch GD) at SGD cost

POLYAK-RUPPERT AVERAGING:
  → Average iterates: x̄_k = (1/k) Σ xᵢ
  → Reduces variance of final estimate
  → Better generalization

PYTHON:
  # SGD with Polyak averaging:
  x = x0
  x_avg = x0
  for t in range(1, n_iters+1):
      grad = stochastic_grad(x)
      x = x - lr(t) * grad
      x_avg = ((t-1) * x_avg + x) / t  # running average
  return x_avg
"""

print(sgd_theory)</div>

<div class="code-block"># ── STEP 2: Distributed optimization ──
# Training across multiple GPUs/machines.

distributed = """
DISTRIBUTED OPTIMIZATION:

DATA PARALLELISM:
  → Split data across workers
  → Each worker computes gradient on its shard
  → Aggregate (all-reduce) to get full gradient
  → Scale: near-linear speedup with workers

MODEL PARALLELISM:
  → Split model across workers
  → Different layers on different GPUs
  → Needed for very large models (>GPU memory)

PIPELINE PARALLELISM:
  → Split model into stages
  → Micro-batch pipeline through stages
  → Reduces idle time vs model parallel

SYNCHRONIZATION:
  Synchronous SGD (All-Reduce):
    → Wait for ALL workers before updating
    → Exact gradient, but slowest worker limits speed

  Asynchronous SGD (Hogwild!):
    → Workers update independently (no waiting)
    → Faster but stale gradients → convergence issues

  Local SGD:
    → Workers train independently for K steps
    → Then average → reduces communication

COMMUNICATION OVERHEAD:
  → Gradients must be transferred between workers
  → Network bandwidth often bottleneck
  → Gradient compression (8-bit, 4-bit)
  → Gradient sparsification (send only large values)

LARGE BATCH TRAINING:
  → Use very large batches (8K-64K) with distributed training
  → LARS, LAMB optimizers for large-batch stability
  → Linear scaling rule: lr = lr_base × batch_size / baseline_batch

PYTHON (PyTorch DDP):
  import torch.distributed as dist
  from torch.nn.parallel import DistributedDataParallel as DDP

  model = DDP(model, device_ids=[local_rank])
  # Each process handles different data shard
  # Gradients synchronized automatically after backward()
"""

print(distributed)</div>

<div class="code-block"># ── STEP 3: Non-convex optimization ──
# Training neural networks.

nonconvex = """
NON-CONVEX OPTIMIZATION (DEEP LEARNING):

Neural network loss landscapes are highly non-convex.
  → Trillions of parameters → astronomical number of local minima
  → Saddle points even more common
  → Yet GD/Adam works remarkably well!

WHY DOES IT WORK?
  1. OVERPARAMETERIZATION:
     → More parameters than data points
     → Many global minima (interpolation)
     → GD finds one of them

  2. LOTTERY TICKET HYPOTHESIS:
     → Random init contains a good subnetwork
     → GD "finds" this subnetwork

  3. NEURAL TANGENT KERNEL:
     → In infinite-width limit, NN training = kernel regression
     → Convex problem in kernel space!

  4. IMPLICIT REGULARIZATION:
     → GD finds "simple" solutions (low norm)
     → Explains generalization despite overfitting capacity

LOSS LANDSCAPE GEOMETRY:
  → Low-dimensional: most eigenvalues of Hessian ≈ 0
  → "Flat" minima generalize better than "sharp" ones
  → Connected minima: can travel between good minima without leaving low-loss region

TECHNIQUES:
  1. DROPOUT: random masking → implicit ensemble
  2. BATCH NORM: smooth landscape → higher lr possible
  3. RESIDUAL CONNECTIONS: skip connections → smoother landscape
  4. DATA AUGMENTATION: virtual larger dataset → better generalization
  5. MIXUP/CUTMIX: interpolate samples → regularization
  6. LABEL SMOOTHING: soft targets → calibration

DOUBLE DESCENT:
  Classical: U-curve (bias-variance tradeoff)
  Modern: overparameterized regime → test error drops AGAIN
  → Interpolation threshold is MOST dangerous (worst generalization)
  → Beyond it: more parameters = better (up to a point)
"""

print(nonconvex)</div>

<div class="code-block"># ── STEP 4: Combinatorial and discrete optimization ──
# When variables are discrete.

combinatorial = """
COMBINATORIAL OPTIMIZATION:

When decision variables are DISCRETE (not continuous):
  → Can't use gradients
  → Search space is exponentially large
  → Most problems NP-hard

EXAMPLES:
  → Traveling Salesman (TSP): find shortest tour
  → Knapsack: maximize value subject to weight
  → Scheduling: assign tasks to time slots
  → Graph coloring: color without conflicts
  → Set cover: cover universe with fewest sets

EXACT METHODS:
  1. BRUTE FORCE: try all possibilities O(n!)
     → Only feasible for tiny problems

  2. BRANCH AND BOUND:
     → Tree search with pruning
     → Prune branches that can't beat current best
     → Can solve moderate TSP (100s of cities)

  3. DYNAMIC PROGRAMMING:
     → Break into overlapping subproblems
     → TSP: Held-Karp O(n² × 2ⁿ) (better than n!)

  4. INTEGER PROGRAMMING:
     → Linear program with integer constraints
     → Solvers: Gurobi, CPLEX, CBC
     → Many practical problems fit this framework

APPROXIMATION ALGORITHMS:
  → Guarantee solution within factor α of optimal
  → TSP: Christofides algorithm (1.5× optimal)
  → Vertex cover: 2× optimal
  → Knapsack: FPTAS (1+ε optimal in poly time)

METAHEURISTICS:
  → No guarantees but work well in practice
  → Simulated annealing, genetic algorithms, tabu search
  → Ant colony optimization, particle swarm

PYTHON:
  from scipy.optimize import linprog, milp, linear_sum_assignment
  import networkx as nx

  # Linear programming:
  result = linprog(c, A_ub=A, b_ub=b, bounds=bounds)

  # Integer programming (scipy 1.9+):
  result = milp(c, constraints=constraints, integrality=integrality)

  # Assignment problem (Hungarian algorithm):
  row_ind, col_ind = linear_sum_assignment(cost_matrix)
"""

print(combinatorial)</div>

<div class="code-block"># ── STEP 5: Bayesian and black-box optimization ──
# When gradients aren't available.

bayesian_opt = """
BAYESIAN OPTIMIZATION:

For EXPENSIVE BLACK-BOX functions (no gradient, slow evaluation):
  → Hyperparameter tuning (each evaluation trains a full model)
  → Drug discovery (each experiment is costly)
  → Material science (each synthesis takes time)

SURROGATE MODEL:
  → Fit a CHEAP model to expensive evaluations
  → Gaussian Process (GP) is standard choice
  → GP gives prediction + UNCERTAINTY

ACQUISITION FUNCTION:
  Decide where to evaluate next:
  1. EXPECTED IMPROVEMENT (EI):
     → Maximize expected improvement over current best
     → Balances exploration (uncertain regions) and exploitation (good regions)

  2. UPPER CONFIDENT BOUND (UCB):
     → Maximize mean + κ × std
     → κ controls exploration vs exploitation

  3. PROBABILITY OF IMPROVEMENT (PI):
     → Maximize probability of beating current best

ALGORITHM:
  1. Evaluate f at initial points
  2. Fit GP surrogate to observations
  3. Optimize acquisition function → next point
  4. Evaluate f at new point
  5. Update GP, repeat

PYTHON (Optuna, scikit-optimize):
  import optuna

  def objective(trial):
      lr = trial.suggest_float('lr', 1e-5, 1e-1, log=True)
      n_layers = trial.suggest_int('n_layers', 1, 5)
      dropout = trial.suggest_float('dropout', 0, 0.5)
      model = build_model(lr, n_layers, dropout)
      val_loss = train_and_evaluate(model)
      return val_loss

  study = optuna.create_study(direction='minimize',
                               sampler=optuna.samplers.TPESampler())
  study.optimize(objective, n_trials=100)
  print(study.best_params)
"""

print(bayesian_opt)</div>

<div class="code-block"># ── STEP 6: Optimization best practices ──
# The complete practitioner's guide.

best_practices = [
    "Always normalize/standardize input features",
    "Adam as default optimizer (lr=0.001)",
    "Learning rate is THE most important hyperparameter",
    "Use cosine annealing or OneCycleLR for scheduling",
    "Mini-batch size: 32-256 (larger for GPU efficiency)",
    "Warmup for transformers (prevent early instability)",
    "Gradient clipping for RNNs (max_norm=1.0)",
    "Weight decay for regularization (AdamW)",
    "Early stopping: monitor validation loss",
    "For convex problems: use CVXPY (declarative)",
    "For hyperparameters: use Bayesian optimization (Optuna)",
    "For combinatorial: use integer programming (Gurobi)",
    "Monitor loss curves, gradient norms, learning rate",
    "Mixed precision training (fp16) for 2x speedup",
    "Distributed training: data parallel for multi-GPU",
]

print("OPTIMIZATION BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# FINAL SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Problem Type     │ Recommended Approach            │
# ├──────────────────┼──────────────────────────────────┤
# │ Smooth convex    │ GD, Newton, L-BFGS              │
# │ Non-convex (DL)  │ Adam, SGD+momentum              │
# │ Large-scale      │ Mini-batch SGD, distributed     │
# │ Constrained      │ CVXPY, interior point           │
# │ Combinatorial    │ Integer programming, heuristics │
# │ Black-box        │ Bayesian optimization           │
# │ Hyperparameters  │ Optuna, Hyperopt                │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>SGD-এর শব্দ = আশীর্বাদ ও অভিশাপ:</strong><br>
<strong>আশীর্বাদ:</strong> শব্দ local minima থেকে বের করে নিয়ে যায় — "noise helps escape!"<br>
<strong>অভিশাপ:</strong> শেষে শব্দ converge করতে দেয় না — oscillation। সমাধান: learning rate decay (η → ০)।</div></div>

<div class="verse">يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"হে মুমিনরা, তোমরা ধৈর্য ধারণ করো এবং ধৈর্যে প্রতিযোগিতা করো।" — কুরআন ৩:২০০</div>

<p class="scene-setting">সবর — ধৈর্য। SGD-এর শব্দ প্রতিটি পদক্ষেপে ভুল করায় — কিন্তু ধৈর্য ধরলে সত্যে পৌঁছায়। Robbins ও Monro প্রমাণ করেছিলেন — পর্যাপ্ত ধৈর্য (পর্যাপ্ত ধাপ) + ক্রমশ ছোট পদক্ষেপ = convergence। এটাই SGD-এর আত্মা — শব্দযুক্ত কিন্তু বিশ্বস্ত।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩১ Door ৫ (Neural Networks):</strong> নিউরাল নেট প্রশিক্ষণ = SGD। Book ৩৬ Door ৬ (Backprop): backprop + SGD = আধুনিক deep learning। এখন তুমি বোঝো কেন mini-batch = ৩২ বা ২৫৬ — ভারসাম্য।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎲 SGD vs Full Batch: Noisy but Fast</text>
  <path d="M 30 160 Q 150 40 290 70 Q 430 100 550 60" fill="none" stroke="#6366f1" stroke-width="2"/>
  <path d="M 30 160 Q 100 100 180 80 Q 250 65 350 72 Q 430 78 550 60" fill="none" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="400" y="105" fill="#4ade80" font-size="10">Full batch (smooth)</text>
  <path d="M 30 160 Q 80 130 140 100 L 160 130 L 200 90 L 220 110 Q 280 60 350 80 L 370 100 Q 450 70 550 55" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="200" y="150" fill="#fcd34d" font-size="10">SGD (noisy path)</text>
  <circle cx="550" cy="60" r="5" fill="#22c55e"/>
  <text x="540" y="50" fill="#4ade80" font-size="10">min</text>
</svg>
</div>
<div class="svg-caption">চিত্র: SGD কোলাহলপূর্ণ পথে নামে, Full Batch মসৃণ। কিন্তু SGD দ্রুত।</div>

<div class="secret-box">🎲 <strong>SGD = শব্দযুক্ত কিন্তু বিশ্বস্ত।</strong> একটি নমুনা দিয়ে গ্রেডিয়েন্ট মাপো — ভুল হবে, কিন্তু হাজার ভুল গড়ে সত্য হয়। কিন্তু SGD শুধু ঢাল দেখে — বেগ ধরে না। পাহাড় থেকে নামার সময় যদি তুমি বেগ ধরো, দ্রুত নামতে পারো — momentum। সেই ধারণা আসবে পরের দরজায় — Adam-এর যুগ।</div>`,
  senior: {
    title: "SGD এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Robbins-Monro (1951)</td><td>Stochastic approximation</td></tr>
<tr><td class="hl">GD</td><td>সব ডেটা দিয়ে গ্রেডিয়েন্ট — সঠিক, ধীর</td></tr>
<tr><td class="hl">SGD</td><td>একটি নমুনা — শব্দযুক্ত, দ্রুত</td></tr>
<tr><td class="hl">Mini-batch</td><td>B=32-256 — ভারসাম্য</td></tr>
<tr><td class="hl">Robbins-Monro শর্ত</td><td>Ση=∞, Ση²<∞ — convergence</td></tr>
<tr><td class="hl">Learning Rate Decay</td><td>η_t → ০ — শেষে oscillation কমে</td></tr>
<tr><td class="hl">Noise as Feature</td><td>শব্দ local minima থেকে বের করে</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "⚡",
  color: "#6366f1",
  name: "বেগ ও অভিযোজন",
  subtitle: "Momentum & Adaptation",
  tech: "Momentum (Polyak 1964), AdaGrad (Duchi 2011), RMSProp (Hinton 2012), Adam (Kingma & Ba 2014)",
  spirit: "যাকাত — বৃদ্ধি, বেগ জমা হয়ে দ্রুত যাত্রা",
  secret: "Adam = Momentum (বেগ) + RMSProp (অভিযোজন)। বেগ জমা হয় — একই দিকে যাচ্ছিলে, এখন আরও দ্রুত। অভিযোজন — প্রতিটি weight-এর নিজস্ব learning rate। আজকের প্রতিটি LLM এই অপটিমাইজার ব্যবহার করে।",
  recall: {
    q: " Adam অপটিমাইজার কী দুটি ধারণাকে একত্রিত করে?",
    qen: "What two concepts does the Adam optimizer combine?",
    a: "Adam = Momentum (বেগ জমা হয় — Polyak 1964) + RMSProp (প্রতিটি weight-এর নিজস্ব learning rate — Hinton 2012)। Kingma ও Ba ২০১৪-এ একত্রিত করেন।",
    aen: "Adam = Momentum (accumulated velocity) + RMSProp (per-parameter adaptive learning rate). Combined by Kingma & Ba in 2014."
  },
  story: `<p class="scene-setting">২০১৪, এডিনবার্গ। Diederik Kingma ও Jimmy Ba একটি পেপার জমা দিচ্ছেন — ICLR 2015। তাদের ধারণা সহজ কিন্তু বিপ্লবাত্মক — দুটি পুরোনো ধারণাকে মিলিয়ে দাও। Momentum (বেগ জমা হয়) এবং AdaGrad/RMSProp (প্রতিটি weight-এর নিজস্ব learning rate)। নাম: Adam — Adaptive Moment Estimation। আজ প্রায় প্রতিটি নিউরাল নেট Adam বা এর variant ব্যবহার করে।</p>
<p class="scene-setting en">2014, Edinburgh. Diederik Kingma and Jimmy Ba submit a paper to ICLR 2015. Their idea: combine two existing concepts. Momentum (velocity accumulates) and AdaGrad/RMSProp (per-parameter learning rate). Name: Adam — Adaptive Moment Estimation. Today nearly every neural network uses Adam or its variants.</p>

<div class="dialogue"><strong>বেগবান কারিগর ফারিহা:</strong> ভাবো তুমি একটি গোল্লি গড়াও। প্রথমে ধীর। কিন্তু একই দিকে গড়াতে থাকলে বেগ বাড়ে। পাহাড়ে ঢালু রাস্তায় বেগ জমে — momentum। SGD শুধু বর্তমান ঢাল দেখে, momentum অতীতও মনে রাখে। Adam আরও একধাপ এগিয়ে — প্রতিটি weight-এর জন্য আলাদা learning rate। যে weight-এর ঢাল সবসময় বড়, তার learning rate ছোট। যে ছোট, তার বড়। সবাই সমান বেগে শেখে।</div>
<div class="dialogue en"><strong>Swift Artisan Fariha:</strong> Roll a ball. First slow. But rolling same direction builds velocity — momentum. SGD sees only current slope; momentum remembers the past. Adam goes further — each weight gets its own learning rate. Weights with consistently large gradients get smaller rates. Everyone learns at equal pace.</div>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>অপটিমাইজার বিবর্তন:</strong><br>
<strong>Momentum (Polyak 1964):</strong> v_t = β·v_{t-1} + ∇f → x = x - η·v। বেগ জমা হয়।<br>
<strong>AdaGrad (Duchi 2011):</strong> প্রতিটি weight-এর গ্রেডিয়েন্ট বর্গের সঞ্চয় → learning rate ভাগ। বড় গ্রেডিয়েন্ট = ছোট step।<br>
<strong>RMSProp (Hinton 2012):</strong> AdaGrad-এর উন্নতি — exponential decay (পুরোনো গ্রেডিয়েন্ট ভুলে যাও)।<br>
<strong>Adam (Kingma & Ba 2014):</strong> Momentum + RMSProp। প্রথম moment (mean) + দ্বিতীয় moment (uncentered variance)।</div></div>

<div class="code-block"># ── STEP 1: Adam optimizer in detail ──
# The most popular deep learning optimizer.

adam_detail = """
ADAM OPTIMIZER DETAILED:

UPDATE RULES:
  m_t = β₁·m_{t-1} + (1−β₁)·g_t       # first moment (momentum)
  v_t = β₂·v_{t-1} + (1−β₂)·g_t²      # second moment (squared gradient)
  m̂ = m_t / (1−β₁^t)                  # bias correction
  v̂ = v_t / (1−β₂^t)
  x = x − η · m̂ / (√v̂ + ε)           # update!

WHY BIAS CORRECTION?
  → m and v start at 0 → biased toward 0 early
  → Correction: divide by (1−β^t) to unbias
  → Effect: larger effective lr early (helps convergence)

HYPERPARAMETERS:
  η (lr): 0.001 (default, THE most important)
  β₁: 0.9 (momentum decay)
  β₂: 0.999 (variance decay)
  ε: 1e-8 (numerical stability)

WHY ADAM WORKS:
  → Per-parameter learning rate (adapts to each weight)
  → Rarely-updated parameters get larger steps
  → Frequently-updated parameters get smaller steps
  → Momentum dampens oscillations

ADAMW (Loshchilov & Hutter, 2017):
  → Decouples weight decay from gradient update
  → Adam's L2 regularization was WRONG
  → AdamW: x = x − η · (m̂/(√v̂+ε) + λ·x)
  → Better generalization
  → Standard for ALL transformers (GPT, BERT, LLaMA)

WHICH OPTIMIZER FOR WHAT?
  Transformers: AdamW (95% of papers)
  CNN (ResNet): SGD+momentum (better generalization)
  GANs: Adam (both generator + discriminator)
  RNNs: Adam (handles vanishing gradients)
  Classical ML: L-BFGS, Newton-CG

PYTHON (PyTorch):
  import torch

  # Standard Adam:
  optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

  # AdamW (recommended):
  optimizer = torch.optim.AdamW(model.parameters(), lr=0.001,
                                 weight_decay=0.01)

  # With gradient clipping:
  torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
"""

print(adam_detail)</div>

<div class="code-block"># ── STEP 2: Advanced optimizers ──
# Beyond Adam: latest developments.

advanced_opt = """
ADVANCED OPTIMIZERS:

1. NADAM (Dozat, 2016):
   → Adam + Nesterov momentum
   → "Look ahead" before computing gradient
   → Slightly better than Adam in practice

2. AMSGRAD (Reddi et al., 2018):
   → Fixes Adam's non-convergence on some problems
   → Uses max of past v_t (not exponential average)
   → Rarely needed in practice but theoretically sound

3. RANGER (RAdam + Lookahead):
   → RAdam: rectified Adam (handles variance in early training)
   → Lookahead: average two optimization paths
   → Popular in Kaggle competitions

4. LION (EvoLved Sign Momentum, Google 2023):
   → Discovered via neural architecture search
   → Uses SIGN of momentum (not magnitude)
   → Simpler than Adam, competitive performance
   → More memory efficient

5. SHAMPOO (Second-order):
   → Pre-conditioned gradient method
   → Block-diagonal Hessian approximation
   → Better conditioning → faster convergence
   → Used for very large models

6. SOAP (Shampoo-inspired):
   → Latest (2024)
   → Combines Adam + Shampoo ideas
   → Claims faster convergence than AdamW

ADAPTIVE VS NON-ADAPTIVE:
  Adaptive (Adam, AdaGrad):
    ✅ Less hyperparameter tuning
    ✅ Works "out of the box"
    ❌ May overfit (less implicit regularization)
    ❌ Worse generalization sometimes

  Non-adaptive (SGD):
    ✅ Better generalization (implicit regularization)
    ✅ Find flatter minima
    ❌ Requires careful lr tuning
    ❌ Slower initial progress

PYTHON (latest optimizers):
  # LION:
  from lion_pytorch import Lion
  optimizer = Lion(model.parameters(), lr=1e-4, weight_decay=1e-2)

  # Sophia (second-order clipped):
  # Uses diagonal Hessian for curvature info
"""

print(advanced_opt)</div>

<div class="code-block"># ── STEP 3: Hyperparameter optimization ──
# Tuning model hyperparameters.

hyperopt = """
HYPERPARAMETER OPTIMIZATION:

Hyperparameters: settings NOT learned from data
  → Learning rate, batch size, number of layers
  → Dropout rate, weight decay, optimizer choice

APPROACHES:

1. GRID SEARCH:
   → Try ALL combinations
   → Exhaustive but exponentially expensive
   → Curse of dimensionality
   → Example: 3 lr × 3 wd × 3 layers = 27 runs

2. RANDOM SEARCH (Bergstra & Bengio, 2012):
   → Sample randomly from ranges
   → BETTER than grid in high dimensions
   → Some hyperparameters don't matter → don't waste time on them
   → Simple and effective

3. BAYESIAN OPTIMIZATION:
   → Build surrogate model (GP) of objective
   → Smart selection of next point
   → More efficient than random for expensive evaluations
   → Tools: Optuna, Hyperopt, scikit-optimize, Weights & Biases Sweeps

4. SUCCESSIVE HALVING (Hyperband):
   → Start many configs, train briefly
   → Kill underperformers early
   → Allocate more resources to promising configs
   → Very efficient

5. POPULATION-BASED TRAINING (PBT):
   → Evolutionary approach
   → Train many models in parallel
   → Copy weights from good models, mutate hyperparameters
  → Used by DeepMind for AlphaStar, etc.

PYTHON (Optuna):
  import optuna

  def objective(trial):
      lr = trial.suggest_float('lr', 1e-5, 1e-1, log=True)
      n_layers = trial.suggest_int('n_layers', 1, 5)
      dropout = trial.suggest_float('dropout', 0, 0.5)
      hidden = trial.suggest_int('hidden', 32, 512, log=True)

      model = build_model(lr, n_layers, dropout, hidden)
      val_loss = train_and_evaluate(model)
      return val_loss

  study = optuna.create_study(direction='minimize')
  study.optimize(objective, n_trials=100, timeout=3600)
  print(f"Best params: {study.best_params}")
  print(f"Best val loss: {study.best_value:.4f}")

BEST PRACTICES:
  → Log-scale for learning rates: suggest_float('lr', 1e-5, 1, log=True)
  → Use pruning: trial.should_prune() for early termination
  → Parallelize: study.optimize(..., n_jobs=4)
  → Visualize: optuna.visualization for parameter importance
"""

print(hyperopt)</div>

<div class="code-block"># ── STEP 4: Production training pipeline ──
# Complete PyTorch training loop.

production = """
PRODUCTION TRAINING PIPELINE:

THE COMPLETE PYTORCH LOOP:

  import torch
  from torch.utils.data import DataLoader
  from torch.cuda.amp import GradScaler, autocast

  # Setup:
  model = MyModel().to(device)
  optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3, weight_decay=0.01)
  scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=100)
  scaler = GradScaler()  # for mixed precision
  loss_fn = torch.nn.CrossEntropyLoss()

  # Training loop:
  best_val_loss = float('inf')
  for epoch in range(100):
      # TRAIN:
      model.train()
      for batch in train_loader:
          x, y = batch
          x, y = x.to(device), y.to(device)

          optimizer.zero_grad()

          # Mixed precision (2x speedup):
          with autocast():
              pred = model(x)
              loss = loss_fn(pred, y)

          scaler.scale(loss).backward()

          # Gradient clipping:
          scaler.unscale_(optimizer)
          torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)

          scaler.step(optimizer)
          scaler.update()

      scheduler.step()

      # VALIDATE:
      model.eval()
      val_loss = 0
      correct = 0
      with torch.no_grad():
          for x, y in val_loader:
              x, y = x.to(device), y.to(device)
              pred = model(x)
              val_loss += loss_fn(pred, y).item()
              correct += (pred.argmax(1) == y).sum().item()

      val_loss /= len(val_loader)
      accuracy = correct / len(val_dataset)

      # EARLY STOPPING:
      if val_loss < best_val_loss:
          best_val_loss = val_loss
          torch.save(model.state_dict(), 'best_model.pt')
      else:
          patience -= 1
          if patience == 0:
              print("Early stopping!")
              break

      print(f"Epoch {epoch}: train_loss={loss:.4f}, "
            f"val_loss={val_loss:.4f}, val_acc={accuracy:.4f}")

KEY FEATURES:
  ✅ Mixed precision (fp16) — 2x speedup
  ✅ Gradient clipping — prevent explosion
  ✅ Learning rate scheduling — cosine annealing
  ✅ Early stopping — prevent overfitting
  ✅ Model checkpointing — save best model
  ✅ Train/val separation — monitor generalization
"""

print(production)</div>

<div class="code-block"># ── STEP 5: Optimization in your projects ──
# LedgerPilot and Ipractus.

your_projects = """
OPTIMIZATION IN YOUR PROJECTS:

LedgerPilot (Django + MySQL + Vue):
  → Budget optimization: linear programming (maximize savings)
  → Expense prediction: gradient descent (regression)
  → Anomaly detection: optimization-based clustering
  → Search ranking: learning-to-rank optimization
  → Resource allocation: knapsack (server budget)

Ipractus (Django + PostgreSQL + React + LiveKit):
  → Appointment scheduling: assignment problem (Hungarian)
  → Capacity planning: queueing optimization
  → Video bitrate: adaptive optimization
  → ML model serving: latency vs throughput tradeoff
  → Resource scaling: cost optimization

PRACTICAL EXAMPLES:

  1. BUDGET OPTIMIZATION (LedgerPilot):
     Maximize savings = income − essential − discretionary
     Subject to: essential ≥ minimum, discretionary ≤ budget

     import cvxpy as cp
     essential = cp.Variable()
     discretionary = cp.Variable()
     savings = income - essential - discretionary
     objective = cp.Maximize(savings)
     constraints = [essential >= min_essential,
                    discretionary >= 0,
                    discretionary <= max_discretionary]
     prob = cp.Problem(objective, constraints)
     prob.solve()

  2. APPOINTMENT SCHEDULING (Ipractus):
     # Hungarian algorithm for optimal assignment
     from scipy.optimize import linear_sum_assignment
     cost = compute_cost_matrix(doctors, time_slots)
     row_ind, col_ind = linear_sum_assignment(cost)
     for doc, slot in zip(row_ind, col_ind):
         assign(doctors[doc], time_slots[slot])

  3. ML MODEL TRAINING (both):
     # Standard PyTorch training with AdamW
     optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3)
     # ... training loop with early stopping, lr scheduling
"""

print(your_projects)</div>

<div class="code-block"># ── STEP 6: Optimization journey and next steps ──
# Your complete path forward.

journey = """
YOUR OPTIMIZATION JOURNEY:

You started seeing optimization as "finding the minimum."
You finish seeing the MATHEMATICS OF BETTER DECISIONS:

WHAT YOU'VE MASTERED:
  ✅ Convex vs non-convex optimization
  ✅ Gradient descent and all variants (SGD, Adam, etc.)
  ✅ Newton's method and quasi-Newton (BFGS)
  ✅ Convergence analysis and rates
  ✅ Constrained optimization (KKT, duality)
  ✅ SVM as a complete optimization example
  ✅ Combinatorial and discrete optimization
  ✅ Bayesian optimization for hyperparameters
  ✅ Distributed training across GPUs
  ✅ Non-convex deep learning theory
  ✅ Production training pipelines

THE OPTIMIZER'S MINDSET:
  1. "Is this convex?" (determines difficulty)
  2. "What's the right algorithm?" (GD vs Adam vs BFGS)
  3. "What learning rate?" (THE key hyperparameter)
  4. "How do I know it converged?" (diagnostics)
  5. "Can I parallelize?" (distributed training)

"Optimization is not just about finding the best solution.
 It's about understanding WHY some solutions are better."
 — Stephen Boyd (Stanford, Convex Optimization)

WHAT TO STUDY NEXT:
  → Convex Optimization (Boyd & Vandenberghe) — the bible
  → Numerical Optimization (Nocedal & Wright)
  → Deep Learning optimization (Goodfellow et al.)
  → Reinforcement Learning (optimization + decisions)
  → Meta-learning (learning to optimize)

Every ML model, every engineering decision, every business strategy
is ultimately an optimization problem.
Master optimization → master decision-making.

Welcome to optimization mastery.
"""

print(journey)

# FINAL SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Door             │ Key Concept                     │
# ├──────────────────┼──────────────────────────────────┤
# │ 1 Fundamentals   │ Objective, constraints, convexity│
# │ 2 Convex Theory  │ Jensen, smoothness, conditioning │
# │ 3 GD Variants    │ SGD, momentum, scheduling        │
# │ 4 Newton/Adam    │ Second-order, adaptive methods   │
# │ 5 Constrained    │ KKT, duality, SVM                │
# │ 6 SGD Theory     │ Robbins-Monro, variance reduction│
# │ 7 Distributed    │ Data/model/pipeline parallel     │
# │ 8 Non-convex     │ Overparameterization, flat minima│
# │ 9 Combinatorial  │ TSP, knapsack, integer program   │
# │ 10 Production    │ Full training pipeline            │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout tip"><span class="co-icon">💡</span><div><strong>AdamW (Loshchilov & Hutter 2017):</strong> Adam-এ weight decay সঠিকভাবে যোগ করা হয়নি ছিল। AdamW সেটি সংশোধন করে। বর্তমানে Transformers (GPT, BERT, LLaMA) সবাই AdamW ব্যবহার করে — কারণ regularization সঠিক।</div></div>

<div class="verse">وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং মানুষের জন্য তা ছাড়া আর কিছু নেই যা সে চেষ্টা করে।" — কুরআন ৫৩:৩৯</div>

<p class="scene-setting">"সায়" — চেষ্টা, গতি। Adam-এর momentum সেই গতি — অতীত চেষ্টা জমা হয়ে বর্তমানে সাহায্য করে। যাকাত — বৃদ্ধি, প্রতিটি weight নিজের গতিতে শেখে। কেউ দ্রুত, কেউ ধীর — কিন্তু সবাই এগিয়ে যায়।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৬ Door ৭ (Transformer):</strong> GPT, BERT, LLaMA — সবাই AdamW দিয়ে প্রশিক্ষিত। এখন তুমি জানো সেই অপটিমাইজার কী — momentum + adaptation।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚡ Adam: Momentum + Adaptive Learning Rate</text>
  <rect x="20" y="50" width="120" height="50" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="80" y="80" text-anchor="middle" fill="#7dd3fc" font-size="10">Gradient g_t</text>
  <rect x="160" y="50" width="120" height="50" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="220" y="72" text-anchor="middle" fill="#fcd34d" font-size="10">Momentum m_t</text>
  <text x="220" y="85" text-anchor="middle" fill="#fde68a" font-size="10">beta1 * m + (1-beta1)*g</text>
  <rect x="300" y="50" width="120" height="50" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="360" y="72" text-anchor="middle" fill="#c084fc" font-size="10">Velocity v_t</text>
  <text x="360" y="85" text-anchor="middle" fill="#d8b4fe" font-size="10">beta2 * v + (1-beta2)*g^2</text>
  <rect x="440" y="50" width="120" height="50" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="500" y="72" text-anchor="middle" fill="#4ade80" font-size="10">Update theta</text>
  <text x="500" y="85" text-anchor="middle" fill="#86efac" font-size="10">lr * m / (sqrt(v)+eps)</text>
  <line x1="140" y1="75" x2="160" y2="75" stroke="#475569" stroke-width="1"/>
  <line x1="280" y1="75" x2="300" y2="75" stroke="#475569" stroke-width="1"/>
  <line x1="420" y1="75" x2="440" y2="75" stroke="#475569" stroke-width="1"/>
  <text x="290" y="130" text-anchor="middle" fill="#94a3b8" font-size="10">Kingma &amp; Ba 2014: default beta1=0.9, beta2=0.999, lr=0.001</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Adam — momentum ও adaptive learning rate একসাথে। ডিফল্ট optimizer।</div>

<div class="secret-box">⚡ <strong>Adam = বেগ + অভিযোজন।</strong> ৫০ বছরের অপটিমাইজেশন গবেষণা একটি সূত্রে। কিন্তু সব পর্যন্ত একটি সমস্যা — আমরা উতলা বাটি ধরে নিচ্ছি। বাস্তব নিউরাল নেট অ-উতলা — হাজার হাজার local minima। সেখানে Adam-ও আটকে যেতে পারে। সেই অ-উতলা পৃথিবীর বাস্তবতা আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Modern Optimizers এক নজরে",
    body: `<table class="kv-table"><tr><th>অপটিমাইজার</th><th>বছর</th><th>মূল ধারণা</th></tr>
<tr><td class="hl">Momentum</td><td>1964</td><td>বেগ জমা — Polyak</td></tr>
<tr><td class="hl">AdaGrad</td><td>2011</td><td>প্রতি-weights learning rate</td></tr>
<tr><td class="hl">RMSProp</td><td>2012</td><td>Exponential decay — Hinton</td></tr>
<tr><td class="hl">Adam</td><td>2014</td><td>Momentum + RMSProp — Kingma & Ba</td></tr>
<tr><td class="hl">AdamW</td><td>2017</td><td>Weight decay fix — Transformers-এ default</td></tr>
<tr><td class="hl">β₁, β₂</td><td>—</td><td>0.9, 0.999 — momentum, variance decay</td></tr>
<tr><td class="hl">Default lr</td><td>—</td><td>0.001 — কাজ করে!</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "🏔️",
  color: "#6366f1",
  name: "অ-উতলা পর্বতের বাস্তবতা",
  subtitle: "The Reality of Non-Convex Mountains",
  tech: "Non-Convex Optimization — saddle points (Dauphin et al. 2014), local minima myth, loss landscape geometry",
  spirit: "ইমতিহান — পরীক্ষা, একাধিক ন্যূনতম ও ভুল পথ",
  secret: "নিউরাল নেটের loss landscape অ-উতলা — কোটি কোটি local minima। কিন্তু চমকপ্রদ সত্য: বেশিরভাগ আটকে যাওয়ার জায়গা local minima নয়, saddle points! এবং উচ্চ-মাত্রিক স্থানে local minima ~= global minima।",
  recall: {
    q: " Saddle point কী? কেন উচ্চ-মাত্রিক স্থানে local minima বিরল?",
    qen: "What is a saddle point? Why are local minima rare in high-dimensional spaces?",
    a: "Saddle point: এক দিকে ন্যূনতম, অন্য দিকে সর্বোচ্চ। উচ্চ-মাত্রিক স্থানে সব দিক ন্যূনতম হওয়ার সম্ভাবনা ২⁻ⁿ — n=১০⁶ হলে প্রায় অসম্ভব।",
    aen: "Saddle point: minimum in one direction, maximum in another. In high dimensions, probability of ALL directions being minima is 2⁻ⁿ — essentially impossible for large n."
  },
  story: `<p class="scene-setting">২০১৪, মন্ট্রিয়াল। Yann Dauphin ও তার সহকর্মীরা Yoshua Bengio-এর ল্যাবে একটি বিস্ময়কর আবিষ্কার করেন। তারা বড় নিউরাল নেটের loss landscape বিশ্লেষণ করেন। প্রত্যাশা — হাজার হাজার local minima, প্রশিক্ষণ সেখানে আটকে যায়। বাস্তবতা — প্রকৃত local minima প্রায় নেই! বেশিরভাগ আটকে যাওয়ার জায়গা saddle points — এক দিকে নিচু, অন্য দিকে উঁচু। ঘোড়ার জিনের মতো।</p>
<p class="scene-setting en">2014, Montreal. Yann Dauphin et al. at Yoshua Bengio's lab made a surprising discovery. They analyzed the loss landscape of large neural networks. Expectation: thousands of local minima trapping training. Reality: almost no true local minima! Most stuck points are saddle points — minimum in one direction, maximum in another.</p>

<div class="dialogue"><strong>পর্বতারোহী তামির:</strong> তুমি পাহাড়ে আটকে আছো। মনে করছো উপত্যকায় আছো — কিন্তু আসলে ঘোড়ার জিনে আছো। ডানে-বাঁয়ে নিচু, কিন্তু সামনে-পেছনে উঁচু। সামনে যাও — নিচে নামবে। উচ্চ-মাত্রিক স্থানে (মিলিয়ন weights) সব দিক একসাথে নিচু হওয়া প্রায় অসম্ভব। তাই local minima নয়, saddle points-ই আসল সমস্যা।</div>
<div class="dialogue en"><strong>Mountaineer Tamir:</strong> You're stuck on a mountain. Think you're in a valley — but you're on a horse's saddle. Left-right is low, but front-back is high. Move forward — descend. In high-dimensional space (millions of weights), ALL directions being minima simultaneously is nearly impossible.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>অ-উতলা জগতের চ্যালেঞ্জ:</strong><br>
<strong>১. Local Minima:</strong> প্রকৃতপক্ষে বিরল (২⁻ⁿ সম্ভাবনা)। n=১০⁶ হলে প্রায় ০।<br>
<strong>২. Saddle Points:</strong> প্রধান সমস্যা — গ্রেডিয়েন্ট শূন্য কিন্তু ন্যূনতম নয়। SGD এখানে ধীর হয়।<br>
<strong>৩. Plateaus:</strong> সমতল অঞ্চল — গ্রেডিয়েন্ট প্রায় শূন্য। কোন দিকে যাবে বোঝা যায় না।<br>
<strong>৪. Cliffs:</strong> খাড়া ঢাল — গ্রেডিয়েন্ট বিশাল, বিস্ফোরণ সম্ভব (gradient clipping দরকার)।</div></div>

<div class="code-block">— অ-উতলা সমস্যা মোকাবিলা —

  ১. SGD Noise         → saddle থেকে বের করে
  ২. Momentum          → সমতল অঞ্চলে বেগ ধরে রাখে
  ৩. Batch Norm        → loss landscape মসৃণ করে
  ৪. Residual (ResNet) → gradient highway — গ্রেডিয়েন্ট পৌঁছায়
  ৫. Gradient Clipping → cliff এ বিস্ফোরণ রোধ
     torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
  ৬. Learning Rate Warmup → শুরুতে ছোট η, ধীরে বাড়াও
  ৭. Random Restart    → একাধিক শুরু থেকে সেরা বেছো

— বিস্ময়কর সত্য: —
  উচ্চ-মাত্রিক স্থানে (n > ১০⁶):
  local minima-র সংখ্যা << saddle points-এর সংখ্যা
  → প্রশিক্ষণ সফল কারণ saddle থেকে বের হওয়া সহজ
  → "local minima সমস্যা" একটি পুরাণ!</div>

<div class="verse">إِنَّ مَعَ الْعُسْرِ يُسْرًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই কষ্টের সাথে রয়েছে স্বস্তি।" — কুরআন ৯৪:৬</div>

<p class="scene-setting">"অস্র সাথে যুসর" — কষ্টের সাথে স্বস্তি। অ-উতলা জগতে আটকে যাওয়া = কষ্ট। কিন্তু প্রতিটি saddle point থেকে বের হওয়ার রাস্তা আছে — স্বস্তি। SGD-এর শব্দ, momentum-এর বেগ, batch norm-এর মসৃণতা — সব সাহায্য করে। উচ্চ-মাত্রিক জগতে প্রকৃত সমস্যা local minima নয় — saddle points। সেখান থেকে বের হওয়া কঠিন নয়, ধৈর্য দরকার।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৬ Door ৬ (Backpropagation):</strong> vanishing gradient সমস্যা দেখেছিলে — সেটাই plateau। ResNet-এর skip connection = gradient highway। Book ৩৫ Door ৭ (MapReduce): distributed training = একই loss landscape, কিন্তু একাধিক machine।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🏔️ Non-Convex: Saddle Points &amp; Local Minima</text>
  <path d="M 30 150 Q 80 80 130 120 Q 180 160 230 100 Q 280 50 330 110 Q 380 170 430 90 Q 480 40 530 100" fill="none" stroke="#6366f1" stroke-width="2"/>
  <circle cx="130" cy="120" r="4" fill="#fbbf24"/>
  <text x="130" y="140" text-anchor="middle" fill="#fcd34d" font-size="10">local min</text>
  <circle cx="280" cy="55" r="4" fill="#22d3ee"/>
  <text x="280" y="48" text-anchor="middle" fill="#7dd3fc" font-size="10">saddle</text>
  <circle cx="430" cy="90" r="4" fill="#f87171"/>
  <text x="430" y="110" text-anchor="middle" fill="#fca5a5" font-size="10">local min</text>
  <circle cx="530" cy="100" r="5" fill="#22c55e"/>
  <text x="520" y="90" fill="#4ade80" font-size="10">global</text>
  <text x="290" y="180" text-anchor="middle" fill="#94a3b8" font-size="10">High dimensions: saddle points dominate, true local minima rare (Dauphin 2014)</text>
</svg>
</div>
<div class="svg-caption">চিত্র: অ-উতলা landscape — local minima ও saddle points। উচ্চ-মাত্রিক স্থানে saddle বেশি।</div>

<div class="secret-box">🏔️ <strong>অ-উতলা জগত = saddle points-এর রাজত্ব।</strong> প্রকৃত local minima বিরল — উচ্চ-মাত্রিক স্থানে প্রায় অস্তিত্বহীন। চ্যালেঞ্জ নয়, সুযোগ। কিন্তু এতদিন শুধু ধারাবাহিক (continuous) অপটিমাইজেশন নিয়ে কথা হলো। বাস্তবের অনেক সমস্যা বিচ্ছিন্ন (discrete) — কোন শহরে যাবে, কোন আইটেম বাছবে। সেখানে গ্রেডিয়েন্ট নেই। সেই বাস্তবতা আসবে পরের দরজায়।</div>`,
  senior: {
    title: "Non-Convex Optimization এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Non-Convex</td><td>একাধিক ন্যূনতম — বাস্তব NN</td></tr>
<tr><td class="hl">Saddle Point</td><td>এক দিকে min, অন্য দিকে max</td></tr>
<tr><td class="hl">Dauphin et al. (2014)</td><td>saddles >> local minima</td></tr>
<tr><td class="hl">High-dim Truth</td><td>local minima প্রায় অসম্ভব (২⁻ⁿ)</td></tr>
<tr><td class="hl">Gradient Clipping</td><td>cliff এ বিস্ফোরণ রোধ</td></tr>
<tr><td class="hl">Batch Norm</td><td>landscape মসৃণ করে</td></tr>
<tr><td class="hl">Warmup</td><td>শুরুতে ছোট η, ধীরে বাড়াও</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "🎯",
  color: "#6366f1",
  name: "বিচ্ছিন্ন সিদ্ধান্তের জগত",
  subtitle: "The World of Discrete Choices",
  tech: "Combinatorial Optimization — Dijkstra (1959), TSP, branch & bound, dynamic programming, greedy algorithms",
  spirit: "তাফসির — ব্যাখ্যা, বিচ্ছিন্ন পছন্দে সংগঠন খুঁজা",
  secret: "বাস্তবের অনেক সমস্যা বিচ্ছিন্ন — কোন শহর, কোন আইটেম, কোন ক্রম। সেখানে গ্রেডিয়েন্ট নেই। Dijkstra-এর সবচেয়ে কম দূরত্ব, TSP-এর সবচেয়ে কম পথ, knapsack-এর সবচেয়ে বেশি মূল্য — সব বিচ্ছিন্ন অপটিমাইজেশন।",
  recall: {
    q: " TSP কী? NP-hard সমস্যা কীভাবে সমাধান করা হয়?",
    qen: "What is TSP? How are NP-hard problems solved?",
    a: "TSP = সব শহর একবার করে ঘুরে ফিরে আসা সবচেয়ে কম দূরত্বে। NP-hard — ব্রুট ফোর্স O(n!)। সমাধান: approximation, heuristic, dynamic programming।",
    aen: "TSP = shortest route visiting all cities once. NP-hard — brute force O(n!). Solutions: approximation, heuristics, dynamic programming."
  },
  story: `<p class="scene-setting">১৯৫৯, আমস্টারডাম। Edsger Dijkstra একটি ক্যাফেতে বসে আছেন। তার হাতে একটি মানচিত্র। প্রশ্ন — শহর A থেকে শহর B তে সবচেয়ে কম দূরত্বের পথ কোনটা? তিনি ২০ মিনিটে একটি অ্যালগরিদম লিখেন — Dijkstra-র সবচেয়ে কম পথ। ৬৫ বছর পর এটি GPS, ইন্টারনেট রাউটিং, ও প্রতিটি navigation app-এ ব্যবহৃত হয়।</p>
<p class="scene-setting en">1959, Amsterdam. Edsger Dijkstra sits in a café with a map. Question: shortest path from city A to city B? He writes an algorithm in 20 minutes — Dijkstra's shortest path. 65 years later, it powers GPS, internet routing, and every navigation app.</p>

<div class="dialogue"><strong>বিচ্ছিন্ন স্থপতি ইয়াসিন:</strong> ধারাবাহিক জগতে তুমি গ্রেডিয়েন্ট অনুসরণ করো — ঢাল নিচে। কিন্তু বিচ্ছিন্ন জগতে ঢাল নেই! তুমি একটি শহরে আছো — পরের শহরে যাওয়ার সিদ্ধান্ত নাও। কোনো "ঢাল" নেই — শুধু সম্ভাব্য সব পথ চেক করো বা বুদ্ধিদীপ্ত অনুমান করো। এখানে গ্রেডিয়েন্ট ডিসেন্ট কাজ করে না — Dijkstra, dynamic programming, greedy কাজ করে।</div>
<div class="dialogue en"><strong>Discrete Architect Yasin:</strong> In continuous worlds, you follow gradient — downhill. But in discrete worlds, there's no slope! You're at a city — choose the next. No "gradient" — just check all paths or make smart guesses. Gradient descent doesn't work here — Dijkstra, DP, greedy do.</div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>বিচ্ছিন্ন অপটিমাইজেশনের ক্লাসিক সমস্যা:</strong><br>
<strong>১. Shortest Path (Dijkstra 1959):</strong> A থেকে B তে সবচেয়ে কম দূরত্ব। O((V+E)logV)।<br>
<strong>২. TSP (Traveling Salesman):</strong> সব শহর একবার ঘুরে ফিরে আসা। NP-hard — O(n!)।<br>
<strong>৩. Knapsack:</strong> সীমিত ওজনে সবচেয়ে বেশি মূল্যের আইটেম। DP — O(nW)।<br>
<strong>৪. Minimum Spanning Tree:</strong> সব নোড সংযুক্ত করার সবচেয়ে কম খরচের গাছ। Kruskal/Prim।<br>
<strong>৫. Graph Coloring:</strong> প্রতিটি প্রতিবেশী আলাদা রঙে — সবচেয়ে কম রঙ।</div></div>

<div class="code-block">— বিচ্ছিন্ন সমস্যার জটিলতা —

  Shortest Path:   O(E + V log V)   → সমাধানযোগ্য (Dijkstra)
  MST:             O(E log V)       → সমাধানযোগ্য (Kruskal)
  Knapsack (0/1):  O(n * W)         → DP সমাধান
  TSP (exact):     O(n!)            → ২০ শহরেই অসম্ভব!
  TSP (approx):    O(n²)            → ১.৫* সেরা (Christofides)
  Graph Coloring:  NP-complete      → heuristic দরকার

— NP-hard সমাধানের কৌশল: —

  ১. Approximation    → "যথেষ্ট ভালো" সমাধান, গ্যারান্টিযুক্ত অনুপাত
  ২. Heuristic        → অভিজ্ঞতার ভিত্তিতে, গ্যারান্টি নেই
  ৩. Local Search     → প্রতিবেশী সমাধানে যাও, আরও ভালো হলে
  ৪. Simulated Annealing → মাঝে মাঝে খারাপ সমাধানে যাও (escape!)
  ৫. Genetic Algorithm → জনসংখ্যা, প্রজনন, মিউটেশন
  ৬. Relaxation       → বিচ্ছিন্নকে ধারাবাহিক করে সমাধান (LP relaxation)</div>

<div class="verse">وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং প্রত্যেক জ্ঞানীর উপরে আছে আরও জ্ঞানী।" — কুরআন ১২:৭৬</div>

<p class="scene-setting">"ফাওকা কুল্লি যি ইলমিন আলিম" — প্রতিটি জ্ঞানীর উপরে আরও জ্ঞানী। বিচ্ছিন্ন অপটিমাইজেশন এটাই শেখায় — কিছু সমস্যার নিখুঁত সমাধান জানা নেই। NP-hard মানে — সম্ভবত কেউই দ্রুত সমাধান করতে পারে না। তখন approximation — "যথেষ্ট ভালো" গ্রহণ করা। নিখুঁত নয়, কিন্তু কার্যকর। এটাই প্রকৌশলীর জ্ঞান — আদর্শ নয়, বাস্তব।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ২ (DSA Bazaar) Door ১৫:</strong> Dijkstra-এর shortest path শিখেছিলে — সেটাই বিচ্ছিন্ন অপটিমাইজেশন! Door ১৭: Dynamic Programming — knapsack, TSP। Book ৩৫ Door ৮ (Paxos): consensus = বিচ্ছিন্ন সিদ্ধান্ত।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🎯 Combinatorial: TSP &amp; Greedy Heuristic</text>
  <circle cx="100" cy="80" r="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="100" y="83" text-anchor="middle" fill="#7dd3fc" font-size="10">A</text>
  <circle cx="250" cy="60" r="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="250" y="63" text-anchor="middle" fill="#7dd3fc" font-size="10">B</text>
  <circle cx="400" cy="90" r="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="400" y="93" text-anchor="middle" fill="#7dd3fc" font-size="10">C</text>
  <circle cx="180" cy="160" r="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="180" y="163" text-anchor="middle" fill="#7dd3fc" font-size="10">D</text>
  <circle cx="350" cy="170" r="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="350" y="173" text-anchor="middle" fill="#7dd3fc" font-size="10">E</text>
  <line x1="108" y1="82" x2="242" y2="62" stroke="#22c55e" stroke-width="2"/>
  <line x1="258" y1="62" x2="392" y2="88" stroke="#22c55e" stroke-width="2"/>
  <line x1="400" y1="98" x2="358" y2="162" stroke="#22c55e" stroke-width="2"/>
  <line x1="342" y1="165" x2="188" y2="162" stroke="#22c55e" stroke-width="2"/>
  <line x1="180" y1="152" x2="100" y2="88" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="195" text-anchor="middle" fill="#94a3b8" font-size="10">TSP: visit all cities, min distance. NP-hard! Heuristic: nearest neighbor.</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Traveling Salesman Problem (TSP) — সব শহর ভ্রমণ, সংক্ষিপ্ত পথ। NP-hard।</div>

<div class="secret-box">🎯 <strong>বিচ্ছিন্ন জগতে গ্রেডিয়েন্ট নেই — কৌশল দরকার।</strong> Approximation, heuristic, local search — নিখুঁত নয়, কিন্তু বাস্তব। এখন তুমি পুরো পথ পেরিয়েছো — উতলা বাটি থেকে অ-উতলা পর্বত, ধারাবাহিক থেকে বিচ্ছিন্ন। শেষ দরজায় সব একসাথে মেলাও — একটি ML মডেল প্রশিক্ষণের সম্পূর্ণ যাত্রা।</div>`,
  senior: {
    title: "Combinatorial Optimization এক নজরে",
    body: `<table class="kv-table"><tr><th>সমস্যা</th><th>জটিলতা</th><th>সমাধান</th></tr>
<tr><td class="hl">Shortest Path</td><td>O(E+VlogV)</td><td>Dijkstra (1959)</td></tr>
<tr><td class="hl">MST</td><td>O(ElogV)</td><td>Kruskal / Prim</td></tr>
<tr><td class="hl">Knapsack 0/1</td><td>O(nW)</td><td>Dynamic Programming</td></tr>
<tr><td class="hl">TSP (exact)</td><td>O(n!) NP-hard</td><td>Branch & Bound</td></tr>
<tr><td class="hl">TSP (approx)</td><td>O(n²)</td><td>Christofides ১.৫*</td></tr>
<tr><td class="hl">Graph Coloring</td><td>NP-complete</td><td>Greedy heuristic</td></tr>
<tr><td class="hl">NP-hard কৌশল</td><td>—</td><td>Approx, heuristic, SA, GA</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🌐",
  color: "#6366f1",
  name: "সব পথের সমন্বয়",
  subtitle: "The Synthesis of All Paths",
  tech: "Optimization in ML Practice — full training loop, choosing optimizers, learning rate schedules, the complete picture",
  spirit: "হিকমাহ — প্রয়োগিক জ্ঞান, সঠিক অপটিমাইজার বেছে নেওয়া",
  secret: "নয়টি দরজা একসাথে — একটি ML মডেল প্রশিক্ষণের সম্পূর্ণ যাত্রা। Al-Khwarizmi থেকে Kingma — ১২০০ বছরের গবেষণা একটি training loop-এ। সঠিক অপটিমাইজার বেছে নেওয়াই হিকমাহ — কেবল জ্ঞান নয়, প্রয়োগের জ্ঞান।",
  recall: {
    q: " একটি ML মডেল প্রশিক্ষণের সম্পূর্ণ ধাপ কী?",
    qen: "What are the complete steps for training an ML model?",
    a: "১. ডেটা প্রস্তুত ২. মডেল সংজ্ঞা ৩. Loss ফাংশন ৪. অপটিমাইজার বাছাই ৫. Learning rate schedule ৬. Training loop (forward→loss→backward→step) ৭. Validation ৮. Hyperparameter tuning।",
    aen: "1. Data prep 2. Model definition 3. Loss function 4. Optimizer choice 5. LR schedule 6. Training loop 7. Validation 8. Hyperparameter tuning."
  },
  story: `<p class="scene-setting">তুমি এখন নয়টি দরজা পেরিয়েছো। প্রতিটি দরজায় একজন শিক্ষক একটি কৌশল দিয়েছেন। এখন সব একসাথে মেলাও। একটি নিউরাল নেট প্রশিক্ষণ দিতে হবে। প্রতিটি দরজার শিক্ষক আসবে, তার কৌশল দেবে। এটাই সমন্বয় — নয়টি যন্ত্র একসাথে বাজে।</p>
<p class="scene-setting en">You've passed nine doors. Each teacher gave you one technique. Now combine them all. Train a neural network. Each door's teacher appears, offering their technique. This is synthesis — nine instruments playing together.</p>

<div class="callout info"><span class="co-icon">🌐</span><div><strong>সম্পূর্ণ ML প্রশিক্ষণ লুপ — নয় দরজার সমন্বয়:</strong><br>
<strong>Door ১ (Al-Khwarizmi):</strong> উদ্দেশ্য নির্ধারণ — loss function<br>
<strong>Door ২ (Minkowski):</strong> loss উতলা কিনা যাচাই<br>
<strong>Door ৩ (Cauchy):</strong> গ্রেডিয়েন্ট ডিসেন্ট — backbone<br>
<strong>Door ৪ (Newton):</strong> বক্রতা — batch norm দিয়ে landscape মসৃণ<br>
<strong>Door ৫ (Lagrange):</strong> regularization — L1/L2 শর্ত<br>
<strong>Door ৬ (Robbins-Monro):</strong> SGD — mini-batch<br>
<strong>Door ৭ (Kingma):</strong> Adam/AdamW — optimizer বাছাই<br>
<strong>Door ৮ (Dauphin):</strong> saddle points — warmup + clipping<br>
<strong>Door ৯ (Dijkstra):</strong> hyperparameter search — combinatorial</div></div>

<div class="code-block">— PyTorch: সম্পূর্ণ প্রশিক্ষণ লুপ —

  import torch
  import torch.nn as nn

  # ১. মডেল (Door ৩৬ — Architecture)
  model = ResNet50()

  # ২. Loss (Door ১ — Objective)
  criterion = nn.CrossEntropyLoss()

  # ৩. Optimizer (Door ৭ — Adam)
  optimizer = torch.optim.AdamW(
      model.parameters(),
      lr=3e-4,           # learning rate
      weight_decay=0.01  # L2 regularization (Door ৫)
  )

  # ৪. LR Schedule (Door ৬ — decay)
  scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(
      optimizer, T_max=100
  )

  # ৫. Training Loop (Door ৩+৬+৭ combined)
  for epoch in range(100):
      for batch in dataloader:        # mini-batch (Door ৬)
          x, y = batch
          logits = model(x)            # forward pass
          loss = criterion(logits, y)  # compute loss

          optimizer.zero_grad()        # clear old gradients
          loss.backward()              # backprop (Door ৩৬)
          torch.nn.utils.clip_grad_norm_(
              model.parameters(), 1.0) # clip (Door ৮)
          optimizer.step()             # update weights!

      scheduler.step()                 # decay learning rate

  — সব দরজা এক লুপে! —</div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>কোন অপটিমাইজার কখন ব্যবহার করবে:</strong><br>
<strong>SGD + Momentum:</strong> CNN (ResNet) — generalization ভালো<br>
<strong>Adam/AdamW:</strong> Transformer (GPT, BERT) — stable, fast<br>
<strong>L-BFGS:</strong> ছোট মডেল — গাণিতিক নিখুঁতি<br>
<strong>AdaGrad:</strong> sparse data (NLP, recommendation)</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১২০০</div><div class="sc-label">বছরের গবেষণা</div></div>
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">শিক্ষক</div></div>
<div class="stat-card"><div class="sc-num">৫+</div><div class="sc-label">অপটিমাইজার</div></div>
<div class="stat-card"><div class="sc-num">∞</div><div class="sc-label">প্রয়োগ</div></div>
</div>

<div class="verse">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ আসমান ও পৃথিবীর আলো।" — কুরআন ২৪:৩৫</div>

<p class="scene-setting">নূর — আলো। অপটিমাইজেশন হলো সেই আলো যা প্রতিটি ML মডেলকে জ্ঞান দেয়। বাইরে থেকে মডেল শেখে মনে হয় — কিন্তু ভেতরে চলছে এক বিশাল অপটিমাইজেশন। Al-Khwarizmi-এর algebra, Cauchy-এর ঢাল, Newton-এর বক্রতা, Lagrange-এর ভারসাম্য, Robbins-এর ধৈর্য, Kingma-এর বেগ — সব একসাথে। একটি training loop — ১২০০ বছরের গবেষণার ফল।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ৩০ (Math) → গণিতের ভিত্তি। Book ৩১ (Classic ML) → প্রতিটি অ্যালগরিদম অপটিমাইজেশন। Book ৩৬ (DL Arch) → আর্কিটেকচার ও ব্যাকপ্রপ। Book ৩৫ (Distributed) → ডিস্ট্রিবিউটেড প্রশিক্ষণ। Book ৩৪ (Statistics) → evaluation। এই বই সবার নিচে — প্রতিটি ML অ্যালগরিদমের ইঞ্জিন।</div></div>

<div class="checklist">
<li>🔬 <code>torch.optim.AdamW</code> দিয়ে একটি ছোট মডেল প্রশিক্ষণ দাও</li>
<li>📊 Learning rate sweep করো: 1e-2, 1e-3, 1e-4 — পার্থক্য দেখো</li>
<li>📐 CosineAnnealingLR schedule যোগ করো</li>
<li>🎯 Gradient clipping যোগ করো — cliff থেকে রক্ষা</li>
<li>📖 "Convex Optimization" — Boyd & Vandenberghe (২০০৪) পড়ো</li>
<li>📄 Kingma & Ba (2014) — "Adam: A Method for Stochastic Optimization" পড়ো</li>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🌐 Optimization: One Training Loop's Journey</text>
  <rect x="180" y="50" width="220" height="35" rx="17" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="72" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">D1: What is Optimization?</text>
  <rect x="140" y="95" width="300" height="35" rx="17" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="117" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">D2-D3: Convex + Gradient Descent</text>
  <rect x="100" y="140" width="380" height="35" rx="17" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="290" y="162" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">D4-D5: Newton + Lagrangian (curvature + constraints)</text>
  <rect x="60" y="185" width="460" height="35" rx="17" fill="#2e1065" stroke="#a855f7" stroke-width="2"/>
  <text x="290" y="207" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">D6-D9: SGD + Adam + Non-Convex + Combinatorial</text>
  <rect x="120" y="235" width="340" height="35" rx="17" fill="#052e16" stroke="#4ade80" stroke-width="2.5"/>
  <text x="290" y="257" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">HIKMAH: optimizer.step()</text>
</svg>
</div>
<div class="svg-caption">চিত্র: অপটিমাইজেশনের যাত্রা — Al-Khwarizmi থেকে Adam। প্রতিটি optimizer.step() এই জ্ঞান বহন করে।</div>

<div class="secret-box">🌐 <strong>অপটিমাইজেশন = ML-এর হৃদপিণ্ড।</strong> নয়টি দরজা, নয়জন শিক্ষক, একটি training loop। Al-Khwarizmi থেকে Kingma — ১২০০ বছরের গবেষণা প্রতিটি <code>optimizer.step()</code>-এ বেঁচে আছে। এখন তুমি জানো — শুধু কীভাবে নয়, কেন। কেন Adam কাজ করে। কেন SGD শব্দ সহ্য করে। কেন উতলা সহজ। কেন অ-উতলা বাস্তব। এটাই হিকমাহ — প্রয়োগের জ্ঞান। সেরা অপটিমাইজার বেছে নেওয়ার জ্ঞান। পথের সুলতান হওয়ার জ্ঞান।</div>`,
  senior: {
    title: "সম্পূর্ণ প্রশিক্ষণ এক নজরে",
    body: `<table class="kv-table"><tr><th>ধাপ</th><th>কী</th><th>দরজা</th></tr>
<tr><td class="hl">Loss ফাংশন</td><td>উদ্দেশ্য নির্ধারণ</td><td>১</td></tr>
<tr><td class="hl">Convexity যাচাই</td><td>উতলা কিনা</td><td>২</td></tr>
<tr><td class="hl">Backpropagation</td><td>গ্রেডিয়েন্ট হিসাব</td><td>৩</td></tr>
<tr><td class="hl">Batch Norm</td><td>landscape মসৃণ</td><td>৪</td></tr>
<tr><td class="hl">Regularization</td><td>L1/L2 weight decay</td><td>৫</td></tr>
<tr><td class="hl">Mini-batch</td><td>SGD — শব্দযুক্ত কিন্তু দ্রুত</td><td>৬</td></tr>
<tr><td class="hl">AdamW</td><td>Momentum + adaptation</td><td>৭</td></tr>
<tr><td class="hl">Warmup + Clip</td><td>saddle ও cliff থেকে রক্ষা</td><td>৮</td></tr>
<tr><td class="hl">Hyperparameter</td><td>lr, batch, epoch search</td><td>৯</td></tr></table>`
  }
});
