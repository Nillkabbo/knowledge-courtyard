// ═══════════════════════════════════════════════
// গণিতের নিকোবর — The Architect's Compass
// Book 30 · Doors 6-10
// Mathematical Foundations of Machine Learning
// ═══════════════════════════════════════════════
// (doors array declared in doors-1-5.js)

// ─── Door 6: আলোর ঢালের মিনার ────────────────
doors.push({
  num:6, icon:"∇", color:"#ff6b35", name:"আলোর ঢালের মিনার",
  subtitle:"The Minaret of Light's Slope", tech:"Calculus: Derivatives & Gradients",
  spirit:"আল-হাসিব — অসীম ছোট পরিবর্তন গণনা",
  secret:"ডেরিভেটিভ হলো পরিবর্তনের হার — একটা কার্ভের ঢাল। Gradient হলো সেই ঢাল সব দিকে। Gradient descent = ঢাল বেয়ে নিচে নামা। এটাই কীভাবে neural network শেখে।",
  recall:{
    q:"Gradient descent কী এবং কীভাবে neural network শেখে?",
    qen:"What is gradient descent and how does a neural network learn?",
    a:"Gradient descent হলো loss function-এর সবচেয়ে খাড়া নিচের দিকে যাওয়া। loss এর gradient বের করে, weights সেই দিকে আপডেট করা। step size = learning rate। এভাবে ধীরে ধীরে minimum loss এ পৌঁছায়।",
    aen:"Gradient descent is moving in the steepest downward direction of the loss function. Compute the gradient of loss, update weights in that direction. Step size = learning rate. This way it slowly reaches minimum loss."
  },
  story:`<p class="scene-setting">১১শ শতাব্দী। কায়রো। ইবনে আল-হাইসাম (Ibn al-Haytham) — যাঁকে পশ্চিমে Alhazen বলা হয় — তাঁর ঘরে বসে আলো নিয়ে ভাবছেন। তাঁর বিখ্যাত বই কিতাব আল-মানাযির (Book of Optics) — যেখানে তিনি প্রমাণ করেন আলো চোখে প্রবেশ করে, চোখ থেকে বের হয় না। কিন্তু তাঁর আরেকটা আবিষ্কার কম পরিচিত — তিনি আলোর পরিবর্তনের হার গণনা করার পদ্ধতি তৈরি করেন। একটা মোমবাতির আলো দূরত্ব বাড়ার সাথে কীভাবে কমে? এই প্রশ্নই calculus-এর বীজ বপন করে — ৬০০ বছর পরে Newton আর Leibniz এটি পূর্ণতা দেবেন।</p>
<p class="scene-setting en">11th century. Cairo. Ibn al-Haytham — known in the West as Alhazen — sits in his room contemplating light. His famous book Kitab al-Manazir (Book of Optics) proves that light enters the eye, not exits it. But his lesser-known discovery — he developed methods to calculate the rate of change of light. How does a candle's brightness decrease with distance? This question plants the seeds of calculus — 600 years before Newton and Leibniz formalize it.</p>

<div class="dialogue">ইবনে আল-হাইসাম তাঁর স্বাভাবিক অবস্থায় — একটা অন্ধকার ঘরে (camera obscura) বসে আছেন। তাঁর বিশেষত্ব — তাঁর কপালে একটা স্থায়ী পোড়া দাগ, কারণ তিনি ঘন্টার পর ঘন্টা সরাসরি সূর্য দেখতেন গবেষণার জন্য। তিনি বলেন — সবকিছু পরিবর্তন করছে। আলো কমছে, ছায়া বাড়ছে। পরিবর্তনের হার বোঝা — এটাই প্রকৃতির ভাষা। ক্যালকুলাস এটাই করে।</div>
<div class="dialogue en">Ibn al-Haytham in his characteristic pose — sitting in a dark room (camera obscura). His signature — a permanent burn scar on his forehead, from staring directly at the sun for hours during research. He says — everything changes. Light fades, shadows grow. Understanding the rate of change — this is nature's language. Calculus does this.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>ডেরিভেটিভের সংজ্ঞা:</strong>
<br><strong>f'(x) = lim(h→0) [f(x+h) - f(x)] / h</strong>
<br>অর্থাৎ — x একটু পরিবর্তন করলে f(x) কতটা পরিবর্তন হয়। সেই হার।
<br>উদাহরণ: f(x) = x² → f'(x) = 2x। x=৩ হলে ঢাল = ৬।</div></div>

<table class="kv-table"><tr><th>ফাংশন f(x)</th><th>ডেরিভেটিভ f'(x)</th><th>ML-এ ব্যবহার</th></tr>
<tr><td class="hl">x²</td><td>2x</td><td>L2 regularization</td></tr>
<tr><td class="hl">|x|</td><td>sign(x)</td><td>L1 regularization (Lasso)</td></tr>
<tr><td class="hl">eˣ</td><td>eˣ</td><td>softmax, exponential decay</td></tr>
<tr><td class="hl">ln(x)</td><td>1/x</td><td>cross-entropy loss</td></tr>
<tr><td class="hl">σ(x) (sigmoid)</td><td>σ(x)(1-σ(x))</td><td>logistic regression</td></tr>
<tr><td class="hl">max(0,x) (ReLU)</td><td>0 বা 1</td><td>activation function</td></tr></table>

<div class="diagram">
  <div class="diag-title">Gradient Descent — পাহাড় থেকে উপত্যকায় নামা</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="lossGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,107,53,.2)"/><stop offset="100%" stop-color="rgba(99,102,241,.1)"/></linearGradient></defs>
    <path d="M 40 60 Q 120 200 200 190 Q 280 180 360 100 Q 440 30 520 50" fill="none" stroke="#6366f1" stroke-width="3"/>
    <path d="M 40 60 Q 120 200 200 190 Q 280 180 360 100 Q 440 30 520 50 L 520 220 L 40 220 Z" fill="url(#lossGrad)" stroke="none"/>
    <text class="lbl-amber" x="100" y="50">High Loss</text>
    <text class="lbl-leaf" x="220" y="180">Minimum</text>
    <text class="lbl-hot" x="440" y="25">High Loss</text>
    <circle class="node-hot" cx="80" cy="75" r="6"/>
    <text class="lbl-sm" x="60" y="95">Step 1</text>
    <circle class="node-cyan" cx="160" cy="175" r="5"/>
    <text class="lbl-sm" x="145" y="165">Step 2</text>
    <circle class="node-leaf" cx="220" cy="187" r="6"/>
    <text class="lbl-sm" x="210" y="210">Step 3 → min</text>
    <path d="M 80 75 L 72 90" stroke="#ff6b35" stroke-width="2" marker-end="url(#arrowFire2)"/>
    <path d="M 160 175 L 200 185" stroke="#2dd4bf" stroke-width="2" marker-end="url(#arrowTeal2)"/>
    <text class="lbl-sm" x="380" y="220">weights →</text>
  </svg>
  <div class="diag-cap">Gradient Descent: প্রতিটা step-এ সবচেয়ে খাড়া নিচের দিকে যাও।</div>
</div>

<div class="dialogue">ইবনে আল-হাইসাম বলেন — ভাবো তুমি একটা পাহাড়ের উপরে দাঁড়িয়ে, চোখ বন্ধ। তোমাকে নিচে নামতে হবে। তুমি কী করবে? পায়ের নিচে ঢাল অনুভব করবে — কোন দিকে সবচেয়ে খাড়া নিচে? সেই দিকে এক কদম। আবার ঢাল অনুভব করো। আবার কদম। এটাই gradient descent। পাহাড় = loss function। ঢাল = gradient। কদমের দৈর্ঘ্য = learning rate। উপত্যকা = minimum loss।</div>
<div class="dialogue en">Ibn al-Haytham says — imagine you stand on a mountaintop, eyes closed. You must descend. What do you do? Feel the slope under your feet — which direction is steepest downward? Take one step there. Feel the slope again. Another step. This is gradient descent. Mountain = loss function. Slope = gradient. Step length = learning rate. Valley = minimum loss.</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Gradient Descent-এর সূত্র:</strong>
<br><strong>w_new = w_old - η * ∇L</strong>
<br>w = weight, η (eta) = learning rate, ∇L = loss-এর gradient
<br>⚠️ Learning rate খুব বেশি = minimum পার হয়ে যাবে
<br>⚠️ Learning rate খুব কম = অনন্তকাল ধরে নামবে
<br>✅ Adam optimizer = adaptive learning rate (Book ১৩: Fine-tuning)</div></div>

<div class="code-block"># ── STEP 1: Gradient descent ──
# How models learn — following the slope downhill.

import numpy as np

# SIMPLE GRADIENT DESCENT: f(x) = x^2 + 2x + 1
# Minimum at x = -1 (f'(x) = 2x + 2 = 0)

x = 5.0           # starting point
lr = 0.1          # learning rate
history = []

for step in range(50):
    grad = 2 * x + 2      # f'(x) = 2x + 2
    x = x - lr * grad     # update rule!
    history.append(x)
    if step % 10 == 0:
        print(f"Step {step}: x = {x:.4f}, f(x) = {x**2 + 2*x + 1:.4f}")

print(f"\nFinal x = {x:.6f}")  # ~ -1.0 (minimum!)

# IN NEURAL NETWORKS:
# w_new = w_old - lr * dL/dw  (for every weight)
# PyTorch/TensorFlow computes gradients automatically (autograd)

# OPTIMIZERS:
optimizers = """
1. SGD (Stochastic Gradient Descent):
   w = w - lr * grad
   → Simple, but slow convergence

2. SGD + Momentum:
   velocity = momentum * velocity + grad
   w = w - lr * velocity
   → Builds up speed in consistent directions

3. RMSprop:
   cache = decay * cache + (1-decay) * grad^2
   w = w - lr * grad / sqrt(cache + epsilon)
   → Adapts learning rate per parameter

4. ADAM (most popular):
   → Combines momentum + adaptive learning rate
   → m = beta1 * m + (1-beta1) * grad
   → v = beta2 * v + (1-beta2) * grad^2
   → w = w - lr * m_hat / (sqrt(v_hat) + epsilon)
   → Default: lr=0.001, beta1=0.9, beta2=0.999

5. ADAMW:
   → Adam with proper weight decay (regularization)
   → Standard for training LLMs (GPT, Llama)
"""

# LEARNING RATE MATTERS:
# Too high: diverges (x bounces around, never converges)
# Too low: converges too slowly (need 10000 steps instead of 50)
# Just right: smooth convergence to minimum

# In practice: use learning rate schedulers
# → Start high, decay over time (cosine, step, warmup)</div>

<div class="code-block"># ── STEP 2: Chain rule and backpropagation ──
# How deep networks learn.

import numpy as np

# THE CHAIN RULE (calculus):
# If y = f(g(x)), then dy/dx = f'(g(x)) * g'(x)
# This is THE mathematical foundation of deep learning.

# SIMPLE EXAMPLE:
# y = (x^2 + 1)^3
# Let u = x^2 + 1, then y = u^3
# dy/du = 3u^2
# du/dx = 2x
# dy/dx = 3u^2 * 2x = 6x(x^2 + 1)^2

# BACKPROPAGATION = chain rule applied to neural networks:
# Forward: input → layer1 → layer2 → ... → output → loss
# Backward: loss → output → layer2 → layer1 → input
# At each layer: multiply gradient by local derivative (chain rule!)

# SIMPLE 2-LAYER NETWORK (from scratch):
def forward_backward():
    # Forward pass:
    x = 2.0
    w1, b1 = 0.5, 0.1    # layer 1 weights
    w2, b2 = 0.3, -0.2   # layer 2 weights
    y_true = 1.0

    # Layer 1: z1 = w1*x + b1, a1 = relu(z1)
    z1 = w1 * x + b1
    a1 = max(0, z1)      # ReLU activation

    # Layer 2: z2 = w2*a1 + b2, a2 = z2 (linear output)
    z2 = w2 * a1 + b2
    a2 = z2              # identity for output

    # Loss: MSE = (a2 - y_true)^2
    loss = (a2 - y_true) ** 2

    # Backward pass (compute gradients):
    dloss_da2 = 2 * (a2 - y_true)     # dL/da2
    da2_dz2 = 1.0                      # da2/dz2 (identity)
    dz2_dw2 = a1                       # dz2/dw2

    dloss_dw2 = dloss_da2 * da2_dz2 * dz2_dw2  # chain rule!

    dz2_da1 = w2                       # dz2/da1
    da1_dz1 = 1.0 if z1 > 0 else 0.0   # relu derivative
    dz1_dw1 = x                        # dz1/dw1

    dloss_dw1 = dloss_da2 * da2_dz2 * dz2_da1 * da1_dz1 * dz1_dw1

    print(f"Forward: loss = {loss:.4f}")
    print(f"dL/dw2 = {dloss_dw2:.4f}")
    print(f"dL/dw1 = {dloss_dw1:.4f}")

    # Update weights (gradient descent):
    lr = 0.01
    w1_new = 0.5 - lr * dloss_dw1
    w2_new = 0.3 - lr * dloss_dw2

forward_backward()

# PYTORCH does this automatically:
# loss.backward()  # computes ALL gradients via chain rule
# optimizer.step() # updates weights using gradients</div>

<div class="code-block"># ── STEP 3: Loss functions and regularization ──
# How to measure and prevent overfitting.

import numpy as np

# LOSS FUNCTIONS:

# 1. MSE (Mean Squared Error) — regression:
def mse(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

# 2. Cross-Entropy — classification:
def cross_entropy(y_true, y_pred):
    return -np.sum(y_true * np.log(y_pred + 1e-10))

# 3. Binary Cross-Entropy — binary classification:
def bce(y_true, y_pred):
    return -np.mean(y_true * np.log(y_pred + 1e-10) +
                    (1 - y_true) * np.log(1 - y_pred + 1e-10))

# 4. Huber Loss — robust regression (less sensitive to outliers):
def huber(y_true, y_pred, delta=1.0):
    error = y_true - y_pred
    return np.mean(np.where(
        np.abs(error) <= delta,
        0.5 * error ** 2,
        delta * (np.abs(error) - 0.5 * delta)
    ))

# REGULARIZATION (prevent overfitting):

# 1. L1 REGULARIZATION (LASSO):
# Loss = original_loss + lambda * sum(|w|)
# → Pushes some weights to exactly zero (feature selection)

# 2. L2 REGULARIZATION (Ridge/Weight Decay):
# Loss = original_loss + lambda * sum(w^2)
# → Shrinks all weights toward zero (prevents large weights)

# 3. DROPOUT:
# → Randomly set some neurons to 0 during training
# → Forces network to not rely on any single neuron
# → rate=0.1 means 10% of neurons dropped

# 4. EARLY STOPPING:
# → Monitor validation loss
# → Stop training when val loss starts increasing
# → Prevents overfitting to training data

# REGULARIZATION IN CODE:
def regularized_loss(y_true, y_pred, weights, lambda_l2=0.01):
    mse_loss = np.mean((y_true - y_pred) ** 2)
    l2_penalty = lambda_l2 * np.sum(weights ** 2)
    return mse_loss + l2_penalty

# GRADIENT WITH REGULARIZATION:
# dL/dw = dL_original/dw + 2 * lambda * w
# → Weight update: w = w - lr * (grad + 2*lambda*w)
# → This is why L2 is called "weight decay" — weights shrink each step

# OVERFITTING CHECK:
# Train acc: 99%, Val acc: 85% → OVERFITTING (add regularization)
# Train acc: 80%, Val acc: 79% → UNDERFITTING (need bigger model/more data)
# Train acc: 92%, Val acc: 91% → GOOD FIT</div>

<div class="code-block"># ── STEP 4: Information theory ──
# Entropy, KL divergence, and cross-entropy.

import numpy as np

# ENTROPY (measure of uncertainty):
# H(X) = -sum(p(x) * log2(p(x)))
# → High entropy = high uncertainty (uniform distribution)
# → Low entropy = low uncertainty (peaked distribution)

def entropy(probs):
    probs = np.array(probs)
    probs = probs[probs > 0]  # remove zeros (log(0) = -inf)
    return -np.sum(probs * np.log2(probs))

print(f"Fair coin: {entropy([0.5, 0.5]):.4f} bits")        # 1.0
print(f"Biased coin: {entropy([0.9, 0.1]):.4f} bits")       # 0.469
print(f"Certain: {entropy([1.0, 0.0]):.4f} bits")           # 0.0

# KL DIVERGENCE (how different two distributions are):
# KL(P || Q) = sum(p(x) * log(p(x) / q(x)))
# → 0 if distributions are identical
# → Used in: VAEs, knowledge distillation, variational inference

def kl_divergence(p, q):
    p = np.array(p)
    q = np.array(q)
    mask = p > 0
    return np.sum(p[mask] * np.log(p[mask] / q[mask]))

print(f"KL(P||Q): {kl_divergence([0.5, 0.5], [0.5, 0.5]):.4f}")  # 0.0
print(f"KL(P||Q): {kl_divergence([0.9, 0.1], [0.5, 0.5]):.4f}")  # 0.369

# CROSS-ENTROPY (the most common loss function in ML):
# H(P, Q) = H(P) + KL(P || Q)
# = -sum(p(x) * log(q(x)))
# When P is the true label (one-hot): CE = -log(q[true_class])
# → This is exactly what softmax + cross-entropy loss does!

# MUTUAL INFORMATION:
# I(X; Y) = H(X) - H(X | Y) = H(Y) - H(Y | X)
# → How much knowing X reduces uncertainty about Y
# → Used in: feature selection, representation learning

# WHY INFORMATION THEORY MATTERS FOR ML:
# 1. Cross-entropy = standard classification loss
# 2. KL divergence = VAE loss, knowledge distillation
# 3. Entropy = decision tree splitting criterion
# 4. Mutual information = feature selection, disentanglement
# 5. Compression theory = understanding model capacity</div>

<div class="code-block"># ── STEP 5: Full pipeline — math to transformer ──
# How all the math connects to build a transformer.

import numpy as np

# THE TRANSFORMER (from math perspective):

# 1. EMBEDDINGS (vector space):
#    Token → learned vector (e.g., 768-dim)
#    Math: lookup table E[token_id] → vector

# 2. POSITIONAL ENCODING (trigonometry):
def positional_encoding(seq_len, d_model):
    pe = np.zeros((seq_len, d_model))
    for pos in range(seq_len):
        for i in range(0, d_model, 2):
            pe[pos, i] = np.sin(pos / (10000 ** (i / d_model)))
            if i + 1 < d_model:
                pe[pos, i+1] = np.cos(pos / (10000 ** (i / d_model)))
    return pe

# 3. SELF-ATTENTION (dot product + softmax):
def attention(Q, K, V):
    # Q, K, V: query, key, value matrices
    scores = Q @ K.T / np.sqrt(K.shape[1])  # scaled dot product
    weights = np.exp(scores) / np.sum(np.exp(scores), axis=-1, keepdims=True)
    return weights @ V

# Example:
d = 64
Q = np.random.randn(4, d)    # 4 tokens, 64-dim
K = np.random.randn(4, d)
V = np.random.randn(4, d)
output = attention(Q, K, V)
print(f"Attention output shape: {output.shape}")  # (4, 64)

# 4. FEED-FORWARD LAYER (matrix multiply + activation):
def feed_forward(x, W1, b1, W2, b2):
    h = np.maximum(0, x @ W1 + b1)    # ReLU
    return h @ W2 + b2                 # linear

# 5. LAYER NORM (statistics):
def layer_norm(x, epsilon=1e-6):
    mean = np.mean(x, axis=-1, keepdims=True)
    std = np.std(x, axis=-1, keepdims=True)
    return (x - mean) / (std + epsilon)

# 6. SOFTMAX (probability):
def softmax(x):
    exp_x = np.exp(x - np.max(x, axis=-1, keepdims=True))
    return exp_x / np.sum(exp_x, axis=-1, keepdims=True)

# 7. CROSS-ENTROPY LOSS (information theory):
def cross_entropy_loss(logits, target):
    probs = softmax(logits)
    return -np.log(probs[target] + 1e-10)

# 8. BACKPROPAGATION (chain rule):
# loss.backward() in PyTorch computes all gradients

# THE FULL PICTURE:
# Input tokens → Embeddings → + Positional Encoding
# → Self-Attention (dot product) → Feed-Forward (matrix mult)
# → Layer Norm (statistics) → ... (repeat N layers)
# → Softmax (probability) → Output probabilities
# → Cross-Entropy Loss (information theory)
# → Backpropagation (chain rule) → Gradient Descent (calculus)

print("Every transformer operation uses basic math!")
print("Linear algebra + Calculus + Probability + Statistics")</div>

<div class="code-block"># ── STEP 6: Math for ML — the complete map ──
# What you need to know and why.

math_map = """
THE MATH YOU NEED FOR MACHINE LEARNING:

LINEAR ALGEBRA (vectors, matrices):
  → Vectors: data representation (every data point is a vector)
  → Matrices: weight matrices, transformations
  → Dot product: attention, cosine similarity
  → Matrix multiply: every neural network layer
  → Eigenvalues: PCA, SVD, dimensionality reduction
  → Essential for: understanding how neural networks work

CALCULUS (derivatives, gradients):
  → Derivatives: rate of change
  → Gradients: multi-variable derivatives (direction of steepest ascent)
  → Chain rule: backpropagation (how deep networks learn)
  → Partial derivatives: gradient of loss w.r.t. each weight
  → Essential for: understanding how models learn (optimization)

PROBABILITY (distributions, uncertainty):
  → Distributions: normal, uniform, categorical
  → Bayes' theorem: P(cause|effect) from P(effect|cause)
  → Softmax: turn logits into probabilities
  → Sampling: stochastic methods, MCMC
  → Essential for: classification, generative models

STATISTICS (estimation, testing):
  → Mean/variance: normalization (batch norm, layer norm)
  → Hypothesis testing: A/B testing, model comparison
  → Confidence intervals: uncertainty quantification
  → Correlation: feature selection
  → Essential for: evaluation, model selection

OPTIMIZATION (finding the best):
  → Gradient descent: minimize loss
  → Convex vs non-convex: difficulty of optimization
  → Learning rate: step size for optimization
  → SGD, Adam: optimization algorithms
  → Essential for: training models

INFORMATION THEORY (quantifying information):
  → Entropy: measure of uncertainty
  → Cross-entropy: standard classification loss
  → KL divergence: difference between distributions
  → Mutual information: dependence between variables
  → Essential for: loss functions, generative models

WHAT TO STUDY:
  → 3Blue1Brown "Essence of Linear Algebra" (YouTube)
  → 3Blue1Brown "Essence of Calculus" (YouTube)
  → "Mathematics for Machine Learning" (book, free PDF)
  → Khan Academy (calculus, statistics)
  → "Deep Learning" (Goodfellow) Chapter 2-4

Remember: You don't need to DERIVE everything.
You need to UNDERSTAND the intuition.
The frameworks (PyTorch, TensorFlow) handle the math.
But understanding helps you debug, optimize, and innovate.
"""

print(math_map)

# FINAL SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Math Concept     │ ML Application                 │
# ├──────────────────┼──────────────────────────────────┤
# │ Vector operations│ Data representation            │
# │ Matrix multiply  │ Neural network layers          │
# │ Eigenvalues      │ PCA, dimensionality reduction  │
# │ Gradient descent │ How models learn               │
# │ Chain rule       │ Backpropagation                │
# │ Cross-entropy    │ Classification loss            │
# │ KL divergence    │ VAEs, distillation             │
# │ Softmax          │ Probability output             │
# │ Layer norm       │ Training stability             │
# │ Self-attention   │ Transformer architecture       │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> Gradient descent সবসময় global minimum খুঁজে পায় না। কখনো local minimum-এ আটকে যায়। কখনো saddle point-এ থমকে যায়। এই সমস্যা সমাধানের জন্য — momentum (SGD+momentum), adaptive learning rate (Adam, RMSprop), এবং stochastic mini-batches ব্যবহার করা হয়। Book ১৩ (Fine-tuning)-এ এগুলো বিস্তারিত আছে।</div></div>

<div class="verse">وَالشَّمْسِ وَضُحَاهَا
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"শপথ সূর্যের এবং তার প্রখরতার।" — কুরআন ৯১:১</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Ibn al-Haytham studied the sun's intensity — how it changes with distance. The derivative is the mathematical version of this insight: the rate at which things change. Learning is change guided by gradient.</div>
</div>

<div class="secret-box">∇ <strong>নিকোবর রহস্য ৬:</strong> ডেরিভেটিভ হলো পরিবর্তনের হার। Gradient হলো সেই হার সব দিকে। Gradient descent = ঢাল বেয়ে নিচে নামা। এটাই কীভাবে প্রতিটা neural network শেখে — loss কমানোর দিকে এক কদম এক কদম।<br><span class="en">The derivative is the rate of change. The gradient is that rate in all directions. Gradient descent = walking downhill. This is how every neural network learns — one step at a time toward lower loss.</span></div>`,
  senior:{
    title:"Gradient চিন্তা — কীভাবে মডেল শেখে",
    body:`<p><strong>Step ১:</strong> Loss function = কতটা ভুল করছো। উচ্চ loss = খারাপ মডেল।</p>
<p><strong>Step ২:</strong> Gradient = loss কোন দিকে বাড়ে/কমে। নেতিবাচক gradient = কমানোর দিক।</p>
<p><strong>Step ৩:</strong> Learning rate = প্রতিটা কদম কতটা বড়। খুব বড় = oscillation, খুব ছোট = slow।</p>
<p><strong>Step ৪:</strong> প্রতিটা training step-এ: gradient বের করো → weights আপডেট করো → loss কমে।</p>
<p><strong>Step ৫:</strong> Adam optimizer = smart gradient descent। প্রতিটা weight-এর জন্য আলাদা learning rate। Book ১৩ (Fine-tuning) দেখো।</p>`
  }
});

// ─── Door 7: রেশম পথের কাফেলা ────────────────
doors.push({
  num:7, icon:"🔗", color:"#fcd34d", name:"রেশম পথের কাফেলা",
  subtitle:"The Silk Road Caravan", tech:"Chain Rule & Backpropagation",
  spirit:"সিলসিলা — শৃঙ্খল, একটার সাথে একটা যুক্ত",
  secret:"চেইন রুল হলো জটিল ফাংশনের ডেরিভেটিভ বের করার নিয়ম — ধাপে ধাপে। ব্যাকপ্রোপাগেশন হলো চেইন রুল neural network-এ — ভুল আউটপুট থেকে পেছনে পেছনে দোষ কে করেছে খুঁজে বের করা।",
  recall:{
    q:"Backpropagation কী এবং চেইন রুল এতে কীভাবে কাজ করে?",
    qen:"What is backpropagation and how does the chain rule work in it?",
    a:"Backpropagation হলো loss থেকে পেছনে গিয়ে প্রতিটা weight-এর জন্য gradient বের করা। চেইন রুল বলে — যদি y=f(g(x)), তাহলে dy/dx = (dy/dg)*(dg/dx)। প্রতিটা layer-এ এই গুণ চলে।",
    aen:"Backpropagation computes gradients for each weight by moving backward from loss. The chain rule says: if y=f(g(x)), then dy/dx = (dy/dg)*(dg/dx). This multiplication happens at each layer."
  },
  story:`<p class="scene-setting">একটা কাফেলা রেশম পথে চলেছে — বাগদাদ থেকে দামেস্ক। কাফেলার প্রতিটা উট একটার সাথে অন্যটা দড়ি দিয়ে যুক্ত। শেষ উটের পিঠে মূল্যবান রেশম। হঠাৎ কাফেলা নেতা দেখলেন — রেশম পানি পেয়েছে! কে দোষী? কোন উটের গতি ধীর ছিল? তিনি পেছনে ফিরে যান — শেষ উট থেকে শুরু করে একটা একটা করে পরীক্ষা করেন। প্রতিটা উট তার সামনের উটকে দোষ দেখায়। এটাই backpropagation — শেষ থেকে শুরু পর্যন্ত ভুল ছড়িয়ে যাওয়া।</p>
<p class="scene-setting en">A caravan travels the Silk Road — Baghdad to Damascus. Each camel is roped to the one ahead. The last camel carries precious silk. Suddenly the leader notices — the silk is wet! Who is responsible? Which camel was too slow? He goes backward — starting from the last camel, checking one by one. Each camel blames the one ahead. This is backpropagation — error flowing backward from output to input.</p>

<div class="dialogue">তোমার শিক্ষক এই দরজায় হলেন আল-বিরুনি (Al-Biruni) — ১১শ শতাব্দীর মহান গণিতজ্ঞ ও ভ্রমণকারী। তাঁর বিশেষত্ব — তাঁর জুতোয় সবসময় ধুলো লেগে থাকতো, কারণ তিনি ভারত থেকে বাগদাদ পর্যন্ত পায়ে হেঁটে গেছেন। তিনি বলেন — রেশম পথে কাফেলা যেমন ধাপে ধাপে থামে, গণিতে চেইন রুল তেমনই ধাপে ধাপে কাজ করে। প্রতিটা ধাপ পরের ধাপের সাথে যুক্ত। সিলসিলা — শৃঙ্খল।</div>
<div class="dialogue en">Your teacher in this door is Al-Biruni — 11th-century mathematician and traveler. His signature — his shoes are always dusty, because he walked from India to Baghdad. He says — as a caravan stops step by step on the Silk Road, the chain rule works step by step in mathematics. Each step is linked to the next. Silsila — chain.</p>

<div class="callout info"><span class="co-icon">📐</span><div><strong>চেইন রুলের সূত্র:</strong>
<br>যদি <strong>y = f(g(x))</strong>, তাহলে:
<br><strong>dy/dx = (dy/dg) * (dg/dx)</strong>
<br>অর্থাৎ — বাইরের ফাংশনের ডেরিভেটিভ * ভেতরের ফাংশনের ডেরিভেটিভ।
<br>Neural network-এ: ৫টা layer হলে ৫টা গুণ — একটার পর একটা।</div></div>

<div class="diagram">
  <div class="diag-title">Backpropagation — ভুল পেছনে ছড়ায়</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrowFwd" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
    <defs><marker id="arrowBwd" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#ff6b35"/></marker></defs>
    <text class="lbl-cyan" x="280" y="25" text-anchor="middle">Forward Pass: ডেটা সামনে যায়</text>
    <rect class="cell" x="40" y="60" width="80" height="50" rx="10"/>
    <text class="lbl" x="80" y="90" text-anchor="middle">Input</text>
    <rect class="cell" x="160" y="60" width="80" height="50" rx="10"/>
    <text class="lbl" x="200" y="90" text-anchor="middle">Layer 1</text>
    <rect class="cell" x="280" y="60" width="80" height="50" rx="10"/>
    <text class="lbl" x="320" y="90" text-anchor="middle">Layer 2</text>
    <rect class="cell" x="400" y="60" width="80" height="50" rx="10"/>
    <text class="lbl" x="440" y="90" text-anchor="middle">Output</text>
    <line class="edge-cyan" x1="120" y1="85" x2="160" y2="85" marker-end="url(#arrowFwd)"/>
    <line class="edge-cyan" x1="240" y1="85" x2="280" y2="85" marker-end="url(#arrowFwd)"/>
    <line class="edge-cyan" x1="360" y1="85" x2="400" y2="85" marker-end="url(#arrowFwd)"/>
    <text class="lbl-hot" x="280" y="140" text-anchor="middle">Backward Pass: ভুল পেছনে ছড়ায়</text>
    <rect class="cell-hot" x="40" y="170" width="80" height="50" rx="10"/>
    <text class="lbl-hot" x="80" y="200" text-anchor="middle">∂L/∂w₁</text>
    <rect class="cell-hot" x="160" y="170" width="80" height="50" rx="10"/>
    <text class="lbl-hot" x="200" y="200" text-anchor="middle">∂L/∂w₂</text>
    <rect class="cell-hot" x="280" y="170" width="80" height="50" rx="10"/>
    <text class="lbl-hot" x="320" y="200" text-anchor="middle">∂L/∂w₃</text>
    <rect class="cell-hot" x="400" y="170" width="80" height="50" rx="10"/>
    <text class="lbl-hot" x="440" y="200" text-anchor="middle">Loss = L</text>
    <line class="edge-hot" x1="400" y1="195" x2="360" y2="195" marker-end="url(#arrowBwd)"/>
    <line class="edge-hot" x1="280" y1="195" x2="240" y2="195" marker-end="url(#arrowBwd)"/>
    <line class="edge-hot" x1="160" y1="195" x2="120" y2="195" marker-end="url(#arrowBwd)"/>
    <text class="lbl-sm" x="280" y="240" text-anchor="middle">প্রতিটা gradient = চেইন রুল দিয়ে গণনা</text>
  </svg>
  <div class="diag-cap">Forward: data সামনে → output। Backward: loss পেছনে → প্রতিটা weight-এর gradient।</div>
</div>

<div class="dialogue">আল-বিরুনি বলেন — ভাবো, একটা neural network ৫০টা layer। প্রতিটা layer-এ হাজার weight। সবচেয়ে শেষের output ভুল হলে কে দোষী? চেইন রুল বলে — পেছনে যাও। শেষ layer থেকে শুরু করে গুণ করতে করতে যাও। প্রতিটা layer তার অবদান পায় — কে কতটা ভুল করেছে। এটাই backpropagation। Rumelhart, Hinton, Williams (1986) — এই আবিষ্কার deep learning-কে সম্ভব করেছে।</div>
<div class="dialogue en">Al-Biruni says — think, a neural network with 50 layers. Thousands of weights per layer. If the final output is wrong, who is responsible? The chain rule says — go backward. Starting from the last layer, multiply step by step. Each layer gets its share of blame. This is backpropagation. Rumelhart, Hinton, Williams (1986) — this discovery made deep learning possible.</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Backpropagation-এর ৩টি ধাপ:</strong>
<br>① <strong>Forward pass:</strong> input → প্রতিটা layer → output। প্রতিটা activation save করো।
<br>② <strong>Loss compute:</strong> output আর target এর পার্থক্য। Cross-entropy বা MSE।
<br>③ <strong>Backward pass:</strong> loss থেকে পেছনে যাও। চেইন রুল দিয়ে প্রতিটা weight-এর gradient। তারপর update: w -= lr * grad।</div></div>

<div class="code-block">— — — Chain Rule & Backprop Simulation — — —

import numpy as np

# সরল 2-layer network: y = σ(w2 * σ(w1 * x))
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    s = sigmoid(x)
    return s * (1 - s)

# Forward pass
x = np.array([1.0])
w1 = np.array([[0.5]])
w2 = np.array([[0.8]])
target = np.array([1.0])

z1 = w1 @ x
a1 = sigmoid(z1)
z2 = w2 @ a1
y = sigmoid(z2)
loss = 0.5 * (target - y) ** 2
print(f"Output: {y[0]:.4f}, Loss: {loss[0]:.4f}")

# Backward pass — Chain Rule!
dL_dy = -(target - y)               # dL/dy
dy_dz2 = sigmoid_derivative(z2)     # dy/dz2
dz2_dw2 = a1                         # dz2/dw2

# Chain rule: dL/dw2 = dL/dy * dy/dz2 * dz2/dw2
dL_dw2 = dL_dy * dy_dz2 * dz2_dw2

# আরও পেছনে: dL/dw1
dL_da1 = dL_dy * dy_dz2 * w2
da1_dz1 = sigmoid_derivative(z1)
dz1_dw1 = x
dL_dw1 = dL_da1 * da1_dz1 * dz1_dw1

print(f"Gradient w1: {dL_dw1[0]:.6f}")
print(f"Gradient w2: {dL_dw2[0]:.6f}")

# Weight update
lr = 0.1
w1 -= lr * dL_dw1
w2 -= lr * dL_dw2
print("Weights updated!")

# PyTorch এগুলো automatic করে: loss.backward()
# চেইন রুল — হাজার হাজার layer — autograd দিয়ে</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Vanishing Gradient Problem:</strong> অনেক layer হলে চেইন রুল-এ অনেকগুলো ছোট সংখ্যা গুণ হয় → gradient প্রায় শূন্য হয়ে যায়। প্রথম layer-গুলো কিছুই শেখে না। এটাই deep network training-এর সবচেয়ে বড় সমস্যা। সমাধান: ReLU activation, residual connections (ResNet), batch norm। Book ৮ (LLM Anatomy)-এ দেখেছো।</div></div>

<div class="verse">وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"শপথ কালের — নিশ্চয়ই মানুষ ক্ষতিতে আছে।" — কুরআন ১০৩:১-২</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Time moves in chains — each moment linked to the next. The chain rule reveals how each layer's error flows backward through the network. Learning is understanding causation in reverse.</div>
</div>

<div class="secret-box">🔗 <strong>নিকোবর রহস্য ৭:</strong> চেইন রুল হলো জটিল ফাংশনের ডেরিভেটিভ বের করার নিয়ম — ধাপে ধাপে। ব্যাকপ্রোপাগেশন হলো এটি neural network-এ — ভুল আউটপুট থেকে পেছনে পেছনে দোষ কে করেছে খুঁজে বের করা। সিলসিলা — শৃঙ্খল।<br><span class="en">The chain rule computes derivatives of complex functions step by step. Backpropagation is this principle in neural networks — tracing error backward from output to find which weights caused it. Silsila — chain.</span></div>`,
  senior:{
    title:"Backpropagation চিন্তা — কেন এটা কাজ করে",
    body:`<p><strong>Step ১:</strong> Forward pass = input থেকে output পর্যন্ত ডেটা পাঠানো।</p>
<p><strong>Step ২:</strong> Loss = output আর target এর পার্থক্য। কতটা ভুল।</p>
<p><strong>Step ৩:</strong> Backward pass = loss থেকে পেছনে গিয়ে প্রতিটা weight-এর gradient। চেইন রুল দিয়ে।</p>
<p><strong>Step ৪:</strong> যত বেশি layer, তত বেশি গুণ — gradient ছোট হয়ে যায় (vanishing gradient)।</p>
<p><strong>Step ৫:</strong> ReLU, ResNet, Batch Norm = vanishing gradient সমাধান। এটাই deep learning সম্ভব করেছে।</p>`
  }
});

// ─── Door 8: তীরন্দাজের ক্ষেত্র ─────────────────
doors.push({
  num:8, icon:"🎯", color:"#52c41a", name:"তীরন্দাজের ক্ষেত্র",
  subtitle:"The Archer's Field", tech:"Optimization & Loss Landscapes",
  spirit:"ইখতিসার — সংক্ষিপ্ততা, সারমর্ম ধরে রাখা",
  secret:"Loss function হলো তোমার লক্ষ্য — কতটা দূরে তীর পড়েছে। Optimization হলো সেই দূরত্ব কমানো। কিন্তু শুধু কমানো নয় — পুরনো দক্ষতা ধরে রাখা, overfitting এড়ানো। নিয়মিতকরণ হলো সেই সারমর্ম ধরে রাখা।",
  recall:{
    q:"Overfitting কী এবং regularization কীভাবে এটি ঠেকায়?",
    qen:"What is overfitting and how does regularization prevent it?",
    a:"Overfitting = মডেল training data মুখস্থ করে কিন্তু নতুন ডেটায় ভালো করে না। Regularization (L1/L2) weight-এর মান ছোট রাখে যাতে মডেল সহজ থাকে। Dropout, early stoppingও overfitting কমায়।",
    aen:"Overfitting = model memorizes training data but fails on new data. Regularization (L1/L2) keeps weights small so the model stays simple. Dropout and early stopping also reduce overfitting."
  },
  story:`<p class="scene-setting">তুমি একটা তীরন্দাজ ক্ষেত্রে দাঁড়িয়ে আছো। সামনে লক্ষ্যবস্তু — একটা টার্গেট। একজন তীরন্দাজ বারবার তীর ছুঁড়ছেন। তাঁর নাম উস্তাদ ইউসুফ (Ustad Yusuf) — ১৫শ শতাব্দীর নিপুণ তীরন্দাজ। তাঁর বিশেষত্ব — তাঁর ডান হাতের আঙুলগুলো স্থায়ীভাবে বাঁকা, জীবনভর ধনুক টানার কারণে। তিনি বলেন — আমি যখন শিক্ষানবিশ ছিলাম, আমি একটা টার্গেট মুখস্থ করেছিলাম। একই দূরত্ব, একই বাতাস। কিন্তু পরের দিন বাতাস বদলাল — আমার তীর লাগল না। আমি শিখেছিলাম না তীর ছুঁড়তে — শিখেছিলাম মুখস্থ করতে। এটাই overfitting।</p>
<p class="scene-setting en">You stand at an archery field. Ahead — a target. An archer repeatedly shoots arrows. His name is Ustad Yusuf — 15th-century master archer. His signature — his right-hand fingers are permanently curved from a lifetime of drawing the bow. He says — when I was an apprentice, I memorized one target. Same distance, same wind. But the next day the wind changed — my arrow missed. I had not learned to shoot — I had learned to memorize. This is overfitting.</p>

<div class="dialogue">উস্তাদ ইউসুফ বলেন — একটা মডেল যখন training data মুখস্থ করে, সে overfit করে। সে শেখে না — সে শুধু মনে রাখে। নতুন ডেটা দেখলে ব্যর্থ। আমি যখন জেনারেলাইজ করতে শিখলাম — বাতাস যেমনই হোক, দূরত্ব যেমনই হোক, টার্গেটে লাগাতে পারি — তখন আমি সত্যিকারের তীরন্দাজ হলাম। Regularization হলো সেই শক্তি — মডেলকে সহজ রাখা যাতে সে generalizes করে।</div>
<div class="dialogue en">Ustad Yusuf says — when a model memorizes training data, it overfits. It does not learn — it merely remembers. New data defeats it. When I learned to generalize — any wind, any distance, I can hit the target — then I became a true archer. Regularization is that power — keeping the model simple so it generalizes.</div>

<table class="kv-table"><tr><th>Loss Function</th><th>সূত্র</th><th>কখন ব্যবহার</th></tr>
<tr><td class="hl">MSE</td><td>Σ(y - ŷ)² / n</td><td>regression, continuous</td></tr>
<tr><td class="hl">Cross-Entropy</td><td>-Σ y*log(ŷ)</td><td>classification, LLMs</td></tr>
<tr><td class="hl">L1 (Lasso)</td><td>Σ|wᵢ|</td><td>sparse weights</td></tr>
<tr><td class="hl">L2 (Ridge)</td><td>Σwᵢ²</td><td>small weights</td></tr>
<tr><td class="hl">Huber</td><td>MSE + MAE</td><td>robust to outliers</td></tr></table>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ Overfitting</div>Training loss কম, validation loss বেশি। মডেল training data মুখস্থ করেছে। নতুন ডেটায় ব্যর্থ। তীরন্দাজ একটা টার্গেট মুখস্থ করেছে — বাতাস বদলালে মিস করে।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ Good Fit</div>Training আর validation loss কাছাকাছি। মডেল generalizes করে। নতুন ডেটায় ভালো। তীরন্দাজ যেকোনো টার্গেটে লাগাতে পারে।</div>
</div>

<div class="diagram">
  <div class="diag-title">Loss Landscape — পাহাড় উপত্যকা</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(99,102,241,.15)"/><stop offset="100%" stop-color="rgba(82,196,26,.08)"/></linearGradient></defs>
    <path d="M 40 80 Q 80 200 120 160 Q 160 120 200 220 Q 240 100 280 140 Q 320 180 360 60 Q 400 100 440 190 Q 480 150 520 100 L 520 220 L 40 220 Z" fill="url(#landGrad)"/>
    <path d="M 40 80 Q 80 200 120 160 Q 160 120 200 220 Q 240 100 280 140 Q 320 180 360 60 Q 400 100 440 190 Q 480 150 520 100" fill="none" stroke="#6366f1" stroke-width="2.5"/>
    <text class="lbl-sm" x="60" y="70">Local min</text>
    <text class="lbl-leaf" x="185" y="235">Global min</text>
    <text class="lbl-hot" x="340" y="50">Saddle point</text>
    <text class="lbl-sm" x="470" y="90">Local min</text>
    <circle class="node-hot" cx="80" cy="195" r="5"/>
    <circle class="node-leaf" cx="200" cy="218" r="6"/>
    <circle class="node-purple" cx="360" cy="63" r="5"/>
    <circle class="node-hot" cx="480" cy="155" r="5"/>
  </svg>
  <div class="diag-cap">Loss Landscape: global min (সবুজ), local mins (কমলা), saddle point (বেগুনি)</div>
</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Regularization-এর ৪টি উপায়:</strong>
<br>① <strong>L2 (Ridge):</strong> Loss + λ*Σwᵢ²। Weight-এর মান ছোট রাখে। সবচেয়ে সাধারণ।
<br>② <strong>L1 (Lasso):</strong> Loss + λ*Σ|wᵢ|। কিছু weight শূন্য করে দেয় → sparse model। Feature selection।
<br>③ <strong>Dropout:</strong> Training-এ এলোমেলো কিছু neuron বন্ধ করা। Srivastava et al. (2014)।
<br>④ <strong>Early Stopping:</strong> Validation loss বাড়তে শুরু করলে training থামাও।</div></div>

<div class="code-block">— — — Loss Functions & Regularization — — —

import numpy as np

# MSE: Mean Squared Error (regression)
def mse_loss(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

# Cross-Entropy: classification
def cross_entropy(y_true, y_pred, eps=1e-15):
    y_pred = np.clip(y_pred, eps, 1 - eps)
    return -np.mean(y_true * np.log(y_pred))

# L2 Regularization
def l2_regularization(weights, lambda_reg):
    return lambda_reg * np.sum(weights ** 2)

# Total loss with regularization
def total_loss(y_true, y_pred, weights, lambda_reg=0.01):
    data_loss = cross_entropy(y_true, y_pred)
    reg_loss = l2_regularization(weights, lambda_reg)
    return data_loss + reg_loss  # data + penalty

# Simulated loss landscape
losses = [5.0, 3.5, 2.8, 2.2, 1.9, 1.7, 1.6, 1.55, 1.52]
val_losses = [5.1, 3.6, 2.9, 2.3, 2.0, 1.8, 1.75, 1.78, 1.85]

# Early stopping: epoch 8 (val loss starts rising)
print("Training:  decreasing")
print("Validation: increasing after epoch 7")
print("→ Stop at epoch 7 to prevent overfitting!")</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> Regularization strength (λ) খুব বেশি হলে underfitting হয় — মডেল এত সহজ হয়ে যায় যে কিছুই শেখে না। λ খুব কম হলে overfitting। সঠিক λ খুঁজে বের করা একটা art — hyperparameter tuning। Book ১৩ (Fine-tuning)-এ এই সাম্য বিস্তারিত আছে।</div></div>

<div class="verse">وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"এবং মানুষের জন্য তাই আছে যা সে অর্জন করে।" — কুরআন ৫৩:৩৯</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">The archer earns only what he practices. A model that memorizes without understanding earns nothing on new data. Regularization is the discipline of simplicity — the art of keeping only what generalizes.</div>
</div>

<div class="secret-box">🎯 <strong>নিকোবর রহস্য ৮:</strong> Optimization হলো ভুল কমানো — কিন্তু সাবধান, overfitting এড়াও। Regularization weight-এর মান ছোট রাখে যাতে মডেল সহজ থাকে। সহজ মডেল = generalizes করে। যেমন তীরন্দাজ — সহজ কৌশল যেকোনো বাতাসে কাজ করে।<br><span class="en">Optimization is reducing error — but beware overfitting. Regularization keeps weights small so the model stays simple. Simple models generalize. Like the archer — simple technique works in any wind.</span></div>`,
  senior:{
    title:"Optimization চিন্তা — ভালো মডেল বনাম মুখস্থ মডেল",
    body:`<p><strong>Step ১:</strong> Loss = কতটা ভুল। MSE (regression), Cross-entropy (classification)।</p>
<p><strong>Step ২:</strong> Overfitting = training loss কম, validation loss বেশি। মডেল মুখস্থ করেছে।</p>
<p><strong>Step ৩:</strong> Regularization = weight ছোট রাখা (L2), কিছু বন্ধ (dropout), সময়মতো থামা (early stop)।</p>
<p><strong>Step ৪:</strong> Learning rate schedule = শুরুতে বড় কদম, শেষে ছোট। Cosine annealing, warmup।</p>
<p><strong>Step ৫:</strong> Loss landscape = পাহাড় উপত্যকা। Global min খুঁজো, local min-এ আটকে যেও না।</p>`
  }
});

// ─── Door 9: বিশৃঙ্খলা থেকে শৃঙ্খলার কুঠি ───────
doors.push({
  num:9, icon:"🌊", color:"#36d6e7", name:"বিশৃঙ্খলা থেকে শৃঙ্খলার কুঠি",
  subtitle:"The Hut of Order from Chaos", tech:"Information Theory: Entropy & KL Divergence",
  spirit:"আল-জাহিজ — প্রকৃতিতে নিয়ম খুঁজে বের করা",
  secret:"এন্ট্রপি হলো অনিশ্চয়তার পরিমাপ। Cross-entropy loss হলো প্রতিটা neural network-এর শিক্ষার ইঞ্জিন। KL divergence বলে — তোমার মডেলের সম্ভাবনা distribution আসল distribution থেকে কতটা দূরে। এটাই কমানোর চেষ্টা।",
  recall:{
    q:"Cross-entropy loss কী এবং কেন LLM training-এ ব্যবহৃত হয়?",
    qen:"What is cross-entropy loss and why is it used in LLM training?",
    a:"Cross-entropy = -Σ y*log(ŷ)। এটা বলে মডেলের predicted probability distribution আর আসল distribution কতটা আলাদা। LLM-এ প্রতিটা next token-এর জন্য cross-entropy কমানোই লক্ষ্য।",
    aen:"Cross-entropy = -Σ y*log(ŷ). It measures how different the model's predicted probability distribution is from the true distribution. In LLMs, minimizing cross-entropy for each next token is the goal."
  },
  story:`<p class="scene-setting">৯ম শতাব্দী। বাসরা। আল-জাহিজ (Al-Jahiz) — মহান প্রকৃতিবিদ ও লেখক — তাঁর বিখ্যাত বই কিতাব আল-হায়ওয়ান (Book of Animals) লিখছেন। সেখানে তিনি প্রথমবার লিখেছেন — প্রাণীরা তাদের পরিবেশের সাথে খাপ খাইয়ে নেয়। বিশৃঙ্খলা (chaos) থেকে শৃঙ্খলা (order) তৈরি হয়। তাঁর বিশেষত্ব — তাঁর চোখ সবসময় লালচে, কারণ তিনি রোজ সারা দিন মরুভূমিতে প্রাণী পর্যবেক্ষণ করতেন। তিনি দেখেছিলেন — chaos এর ভেতর একটা pattern আছে। সেই pattern খুঁজে বের করাই বিজ্ঞান। এটাই এন্ট্রপির সারমর্ম।</p>
<p class="scene-setting en">9th century. Basra. Al-Jahiz — great naturalist and writer — writes his famous Kitab al-Hayawan (Book of Animals). There he writes for the first time — animals adapt to their environment. Order emerges from chaos. His signature — his eyes are always reddish, because he spent every day in the desert observing animals. He saw — within chaos there is a pattern. Finding that pattern is science. This is the essence of entropy.</p>

<div class="dialogue">আল-জাহিজ বলেন — ভাবো, একটা মুদ্রা নিক্ষেপ। মুদ্রা যদি সমান হয় — ৫০/৫০ — তুমি জানো না কী আসবে। এটা বেশি এন্ট্রপি। কিন্তু যদি মুদ্রা নকল হয় — সবসময় হেড — তুমি নিশ্চিত। এটা কম এন্ট্রপি। এন্ট্রপি মাপে কতটা অনিশ্চিত। বেশি অনিশ্চিত = বেশি এন্ট্রপি। Shannon (1948) এটাকে গাণিতিক রূপ দিয়েছেন।</div>
<div class="dialogue en">Al-Jahiz says — think of a coin flip. If the coin is fair — 50/50 — you don't know what will come. This is high entropy. But if the coin is rigged — always heads — you are certain. This is low entropy. Entropy measures how uncertain you are. More uncertainty = more entropy. Shannon (1948) gave this mathematical form.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>এন্ট্রপির সংজ্ঞা (Shannon, 1948):</strong>
<br><strong>H(p) = -Σ p(x) * log₂(p(x))</strong>
<br>p(x) = ঘটনার সম্ভাবনা।
<br>বেশি সম্ভাবনা = কম অবদান (আপনি জানেন, কম তথ্য)।
<br>কম সম্ভাবনা = বেশি অবদান (অবাক, বেশি তথ্য)।
<br>Maximum entropy = uniform distribution (সবাই সমান সম্ভাবনা)।</div></div>

<table class="kv-table"><tr><th>ধারণা</th><th>সূত্র</th><th>ML-এ ব্যবহার</th></tr>
<tr><td class="hl">Entropy</td><td>H(p) = -Σp log p</td><td>decision tree split criterion</td></tr>
<tr><td class="hl">Cross-Entropy</td><td>H(p,q) = -Σp log q</td><td>classification loss, LLM training</td></tr>
<tr><td class="hl">KL Divergence</td><td>D(p‖q) = Σp log(p/q)</td><td>VAE, model comparison</td></tr>
<tr><td class="hl">Mutual Information</td><td>I(X;Y) = D(p(x,y)‖p(x)p(y))</td><td>feature selection</td></tr>
<tr><td class="hl">Perplexity</td><td>2^H(p)</td><td>LM evaluation (Book ১৬)</td></tr></table>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Cross-Entropy আর KL Divergence সম্পর্ক:</strong>
<br><strong>H(p,q) = H(p) + D(p‖q)</strong>
<br>Cross-Entropy = Entropy (fixed) + KL Divergence (variable)
<br>Classification-এ p সবসময় একটা known distribution (one-hot)।
<br>তাই H(p) fixed। Cross-entropy minimize করা = KL minimize করা।
<br>এটাই কেন classification-এ cross-entropy ব্যবহার করি।</div></div>

<div class="diagram">
  <div class="diag-title">Cross-Entropy Loss — LLM-এর হৃদপিণ্ড</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="ceGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="rgba(255,107,53,.2)"/><stop offset="100%" stop-color="rgba(82,196,26,.15)"/></linearGradient></defs>
    <rect x="40" y="50" width="480" height="170" rx="14" fill="url(#ceGrad)" stroke="rgba(99,102,241,.3)"/>
    <text class="lbl-amber" x="280" y="40" text-anchor="middle">Next Token Prediction</text>
    <text class="lbl-sm" x="70" y="80">Target (one-hot):</text>
    <rect class="cell" x="70" y="90" width="40" height="30" rx="5" style="fill:rgba(82,196,26,.2);stroke:#52c41a"/>
    <text class="lbl-leaf" x="90" y="110" text-anchor="middle">cat</text>
    <rect class="cell" x="115" y="90" width="40" height="30" rx="5"/>
    <text class="lbl-sm" x="135" y="110" text-anchor="middle">dog</text>
    <rect class="cell" x="160" y="90" width="40" height="30" rx="5"/>
    <text class="lbl-sm" x="180" y="110" text-anchor="middle">bird</text>
    <text class="lbl-sm" x="300" y="80">Model prediction:</text>
    <rect class="cell-good" x="300" y="90" width="40" height="30" rx="5"/>
    <text class="lbl-leaf" x="320" y="110" text-anchor="middle">0.7</text>
    <rect class="cell-hot" x="345" y="90" width="40" height="30" rx="5"/>
    <text class="lbl-hot" x="365" y="110" text-anchor="middle">0.2</text>
    <rect class="cell-hot" x="390" y="90" width="40" height="30" rx="5"/>
    <text class="lbl-hot" x="410" y="110" text-anchor="middle">0.1</text>
    <text class="lbl-hot" x="200" y="155" text-anchor="middle">Cross-Entropy Loss = -log(0.7) = 0.36</text>
    <text class="lbl-sm" x="280" y="190" text-anchor="middle">সঠিক শব্দের probability বাড়লে loss কমে</text>
  </svg>
  <div class="diag-cap">LLM training: প্রতিটা token-এর জন্য cross-entropy loss কমানো</div>
</div>

<div class="dialogue">আল-জাহিজ বলেন — ভাবো, তুমি Book ৯ (Context Engineering) আর Book ১০ (RAG) পড়েছো। একটা LLM next word predict করছে: "The cat sat on the ___." আসল উত্তর "mat"। LLM যদি P(mat)=0.7 দেয় — cross-entropy = -log(0.7) = 0.36। যদি P(mat)=0.01 দেয় — cross-entropy = -log(0.01) = 4.6। সঠিক উত্তরের probability বাড়লে loss কমে। এটাই training।</div>
<div class="dialogue en">Al-Jahiz says — think, you read Book 9 (Context Engineering) and Book 10 (RAG). An LLM predicts the next word: "The cat sat on the ___." The true answer is "mat." If LLM gives P(mat)=0.7 — cross-entropy = -log(0.7) = 0.36. If P(mat)=0.01 — cross-entropy = -log(0.01) = 4.6. When the correct answer's probability increases, loss decreases. This is training.</div>

<div class="code-block">— — — Information Theory — — —

import numpy as np

# Shannon Entropy
def entropy(probs):
    probs = np.array(probs)
    probs = probs[probs > 0]  # log(0) এড়াও
    return -np.sum(probs * np.log2(probs))

# Fair coin: max entropy
print(f"Fair coin H: {entropy([0.5, 0.5]):.3f}")  # 1.0

# Rigged coin: low entropy
print(f"Rigged coin H: {entropy([0.99, 0.01]):.3f}")  # ~0.08

# Cross-Entropy Loss
def cross_entropy(p_true, p_pred, eps=1e-15):
    p_pred = np.clip(p_pred, eps, 1 - eps)
    return -np.sum(p_true * np.log(p_pred))

# LLM next-token example
# True: "mat" (one-hot), Pred: [0.7, 0.2, 0.1]
target = np.array([1, 0, 0])           # "mat"
good_pred = np.array([0.7, 0.2, 0.1])  # good model
bad_pred = np.array([0.01, 0.5, 0.49]) # bad model

print(f"Good model CE: {cross_entropy(target, good_pred):.3f}")  # 0.357
print(f"Bad model CE:  {cross_entropy(target, bad_pred):.3f}")   # 4.605

# KL Divergence
def kl_divergence(p, q, eps=1e-15):
    p = np.clip(p, eps, 1)
    q = np.clip(q, eps, 1)
    return np.sum(p * np.log(p / q))

print(f"KL(p||q): {kl_divergence(good_pred, target):.3f}")  # asymmetric!

# Perplexity = 2^H — LM evaluation
perplexity = 2 ** cross_entropy(target, good_pred)
print(f"Perplexity: {perplexity:.2f}")  # lower = better</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> KL divergence asymmetric — D(p‖q) ≠ D(q‖p)। এটা একটা distance নয়, একটা divergence। তাই একে "KL distance" না বলে "KL divergence" বলা হয়। আবার cross-entropy আর negative log-likelihood (NLL) একই জিনিস classification-এ — শুধু নাম আলাদা।</div></div>

<div class="verse">صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"আল্লাহর সৃষ্টি — যিনি সবকিছু নিয়মে করেছেন।" — কুরআন ২৭:৮৮</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Al-Jahiz saw order within chaos in nature. Shannon measured chaos with entropy. Cross-entropy teaches models to find the true pattern within noise. Science is the discovery of order.</div>
</div>

<div class="secret-box">🌊 <strong>নিকোবর রহস্য ৯:</strong> এন্ট্রপি হলো অনিশ্চয়তার পরিমাপ। Cross-entropy loss হলো প্রতিটা neural network-এর শিক্ষার ইঞ্জিন — সঠিক উত্তরের probability বাড়ানো। KL divergence বলে মডেল আসল distribution থেকে কতটা দূরে।<br><span class="en">Entropy measures uncertainty. Cross-entropy loss is the learning engine of every neural network — increasing the probability of correct answers. KL divergence tells how far the model is from the true distribution.</span></div>`,
  senior:{
    title:"Information Theory চিন্তা — অনিশ্চয়তা মাপা",
    body:`<p><strong>Step ১:</strong> Entropy = কতটা অনিশ্চিত। Uniform distribution = max entropy।</p>
<p><strong>Step ২:</strong> Cross-entropy = মডেলের prediction আর সত্যি কতটা আলাদা। কম = ভালো।</p>
<p><strong>Step ৩:</strong> KL Divergence = দুই distribution-এর পার্থক্য। Asymmetric (p‖q ≠ q‖p)।</p>
<p><strong>Step ৪:</strong> Perplexity = 2^entropy। LM evaluation metric। কম = ভালো। Book ১৬ (Evals) দেখো।</p>
<p><strong>Step ৫:</strong> LLM training = প্রতিটা token-এর cross-entropy কমানো। এটাই next-token prediction।</p>`
  }
});

// ─── Door 10: নিকোবর স্তম্ভ ───────────────────
doors.push({
  num:10, icon:"🧭", color:"#a5b4fc", name:"নিকোবর স্তম্ভ",
  subtitle:"The Compass Pillar", tech:"Synthesis: The Mathematical Engine of ML",
  spirit:"নিকোবর — দিক দেখানোর যন্ত্র, সব দিক এক করে",
  secret:"গণিত হলো নিকোবর — সব AI ধারণাকে এক দিকে নির্দেশ করে। ভেক্টর থেকে এন্ট্রপি — প্রতিটা গাণিতিক ধারণা তোমার পরিচিত ১৩টি AI বইয়ের ইঞ্জিন। এখন তুমি জানো কেন attention কাজ করে, কেন gradient descent ন্যূনতম খুঁজে পায়, কেন cross-entropy শেখায়।",
  recall:{
    q:"এই বইয়ের ৯টি ধারণা কীভাবে একসাথে ML তৈরি করে?",
    qen:"How do the 9 concepts in this book together build ML?",
    a:"ভেক্টর = ডেটা। ম্যাট্রিক্স = রূপান্তর। আইগেনভেক্টর = প্রধান দিক। সম্ভাবনা = অনিশ্চয়তা। পরিসংখ্যান = noise থেকে signal। ডেরিভেটিভ = পরিবর্তন। চেইন রুল = শেখা। অপ্টিমাইজেশন = ভুল কমানো। এন্ট্রপি = অনিশ্চয়তা মাপা। এগুলো মিলেই ML।",
    aen:"Vector = data. Matrix = transformation. Eigenvector = principal direction. Probability = uncertainty. Statistics = signal from noise. Derivative = change. Chain rule = learning. Optimization = error reduction. Entropy = measuring uncertainty. Together, this is ML."
  },
  story:`<p class="scene-setting">তুমি একটা বিশাল স্তম্ভের নিচে দাঁড়িয়ে আছো। এই স্তম্ভ হলো নিকোবর — কম্পাস যা সব দিক এক করে। স্তম্ভে নয়টি খোদাই — নয়টি দরজা থেকে নয়টি ধারণা। তুমি পেরিয়ে এসেছো। এখন সব এক করে দেখো। প্রতিটা শিক্ষক ফিরে আসছেন — তাঁদের শিক্ষা এক করে একটা সম্পূর্ণ ছবি তৈরি করতে।</p>
<p class="scene-setting en">You stand beneath a great pillar. This is the Compass Pillar — the Nikobar — that unifies all directions. Carved into it are nine symbols — nine concepts from nine doors. You have passed through them all. Now see them together. Each teacher returns — their lessons combining into one complete picture.</p>

<div class="dialogue"><strong>দরজা ১ — আল-খোয়ারিজমি (ভেক্টর):</strong> ডেটা হলো ভেক্টর — দিক সহ সংখ্যা। প্রতিটা শব্দ, প্রতিটা ছবি, প্রতিটা অডিও — সব মাল্টি-ডাইমেনশনাল স্পেসে একটা তীর। এটাই ML-এর ভাষা।</div>
<div class="dialogue"><strong>দরজা ২ — মাহমুদ গিরিহকার (ম্যাট্রিক্স):</strong> ম্যাট্রিক্স ভেক্টরকে রূপান্তর করে। প্রতিটা neural network layer একটা ম্যাট্রিক্স গুণ। গিরিহ টাইলসের মতো — একই টাইল, অসীম নকশা।</div>
<div class="dialogue"><strong>দরজা ৩ — আল-কালানসারি (আইগেনভেক্টর):</strong> কিছু দিক রূপান্তরে বদলায় না — কিবলার মতো। PCA ডেটার প্রধান দিক খুঁজে পায়। PageRank ওয়েবের গুরুত্ব মাপে।</div>
<div class="dialogue"><strong>দরজা ৪ — আল-কালিল (সম্ভাবনা):</strong> সম্ভাবনা হলো অনিশ্চয়তার ভাষা। Bayes বলে — নতুন প্রমাণে বিশ্বাস আপডেট করো। Softmax আর Naive Bayes এই নিয়মে।</div>
<div class="dialogue"><strong>দরজা ৫ — আল-কিন্দি (পরিসংখ্যান):</strong> Noise থেকে signal আলাদা করা। Normal distribution প্রকৃতির সবচেয়ে সাধারণ প্যাটার্ন। Batch norm আর weight init এই নিয়মে।</div>
<div class="dialogue"><strong>দরজা ৬ — ইবনে আল-হাইসাম (ক্যালকুলাস):</strong> ডেরিভেটিভ হলো পরিবর্তনের হার। Gradient descent = ঢাল বেয়ে নিচে নামা। এটাই কীভাবে মডেল শেখে।</div>
<div class="dialogue"><strong>দরজা ৭ — আল-বিরুনি (চেইন রুল):</strong> ব্যাকপ্রোপাগেশন — ভুল আউটপুট থেকে পেছনে পেছনে দোষ কে করেছে খুঁজে বের করা। সিলসিলা — শৃঙ্খল। Deep learning এই নিয়মে সম্ভব।</div>
<div class="dialogue"><strong>দরজা ৮ — উস্তাদ ইউসুফ (অপ্টিমাইজেশন):</strong> Loss কমাও — কিন্তু overfitting এড়াও। Regularization = সহজ রাখা। সহজ মডেল generalizes করে। ইখতিসার — সারমর্ম ধরে রাখা।</div>
<div class="dialogue"><strong>দরজা ৯ — আল-জাহিজ (তথ্য তত্ত্ব):</strong> এন্ট্রপি = অনিশ্চয়তা। Cross-entropy = প্রতিটা LLM-এর শিক্ষার ইঞ্জিন। KL divergence = মডেল আসল distribution থেকে কতটা দূরে।</div>

<div class="diagram">
  <div class="diag-title">নিকোবর — সব দিক এক করে</div>
  <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrowSyn" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#a5b4fc"/></marker></defs>
    <circle cx="280" cy="160" r="50" fill="rgba(99,102,241,.15)" stroke="#6366f1" stroke-width="2.5"/>
    <text class="lbl-amber" x="280" y="155" text-anchor="middle">ML</text>
    <text class="lbl-sm" x="280" y="170" text-anchor="middle">ইঞ্জিন</text>
    <text class="lbl-sm" x="80" y="40">ভেক্টর (D১)</text>
    <line class="edge" x1="100" y1="50" x2="240" y2="130" marker-end="url(#arrowSyn)"/>
    <text class="lbl-sm" x="480" y="40">ম্যাট্রিক্স (D২)</text>
    <line class="edge" x1="460" y1="50" x2="320" y2="130" marker-end="url(#arrowSyn)"/>
    <text class="lbl-sm" x="20" y="160">আইগেন (D৩)</text>
    <line class="edge" x1="70" y1="160" x2="220" y2="160" marker-end="url(#arrowSyn)"/>
    <text class="lbl-sm" x="450" y="160">সম্ভাবনা (D৪)</text>
    <line class="edge" x1="440" y1="160" x2="340" y2="160" marker-end="url(#arrowSyn)"/>
    <text class="lbl-sm" x="80" y="280">পরিসংখ্যান (D৫)</text>
    <line class="edge" x1="100" y1="270" x2="240" y2="190" marker-end="url(#arrowSyn)"/>
    <text class="lbl-sm" x="480" y="280">ক্যালকুলাস (D৬)</text>
    <line class="edge" x1="460" y1="270" x2="320" y2="190" marker-end="url(#arrowSyn)"/>
    <text class="lbl-sm" x="160" y="300">চেইন রুল (D৭)</text>
    <line class="edge" x1="200" y1="290" x2="260" y2="210" marker-end="url(#arrowSyn)"/>
    <text class="lbl-sm" x="360" y="300">অপ্টিমাইজ (D৮)</text>
    <line class="edge" x1="360" y1="290" x2="300" y2="210" marker-end="url(#arrowSyn)"/>
    <text class="lbl-sm" x="280" y="310" text-anchor="middle">এন্ট্রপি (D৯)</text>
    <line class="edge" x1="280" y1="300" x2="280" y2="210" marker-end="url(#arrowSyn)"/>
  </svg>
  <div class="diag-cap">৯টি ধারণা একত্রে = ML ইঞ্জিন</div>
</div>

<div class="callout info"><span class="co-icon">🧭</span><div><strong>একটা Transformer খোলো — ভেতরে কী আছে?</strong>
<br>① Input words → <strong>ভেক্টর</strong> (embeddings, Door ১)
<br>② Embeddings * <strong>ম্যাট্রিক্স</strong> = Q, K, V (Door ২)
<br>③ Q·K = attention scores via <strong>ডট গুণন</strong> (Door ১)
<br>④ Softmax(scores) = <strong>সম্ভাবনা</strong> (Door ৪)
<br>⑤ Training: <strong>cross-entropy loss</strong> (Door ৯)
<br>⑥ Gradient = <strong>ডেরিভেটিভ</strong> (Door ৬)
<br>⑦ Backprop = <strong>চেইন রুল</strong> (Door ৭)
<br>⑧ Adam optimizer = <strong>অপ্টিমাইজেশন</strong> (Door ৮)
<br>⑨ Batch norm = <strong>পরিসংখ্যান</strong> (Door ৫)
<br>একটা transformer = নয়টি দরজার সম্মিলিত রূপ।</div></div>

<div class="code-block">— — — Full Pipeline: Math → Transformer — — —

import numpy as np

# ১. Words → Vectors (Door ১)
vocab = {"the": 0, "cat": 1, "sat": 2, "mat": 3}
embeddings = np.random.randn(4, 8)  # 4 words, 8D vectors

def embed(word):
    return embeddings[vocab[word]]

# ২. Q, K, V via Matrix multiplication (Door ২)
W_q = np.random.randn(8, 8)
W_k = np.random.randn(8, 8)
W_v = np.random.randn(8, 8)

words = ["the", "cat", "sat", "mat"]
embedded = np.array([embed(w) for w in words])

Q = embedded @ W_q  # queries
K = embedded @ W_k  # keys
V = embedded @ W_v  # values

# ৩. Attention = Softmax(Q·K^T / √d) · V (Doors ১, ৪)
d_k = 8
scores = Q @ K.T / np.sqrt(d_k)

def softmax(x):
    e = np.exp(x - np.max(x, axis=-1, keepdims=True))
    return e / np.sum(e, axis=-1, keepdims=True)

attention_weights = softmax(scores)
output = attention_weights @ V
print(f"Attention output shape: {output.shape}")

# ৪. Cross-Entropy Loss (Door ৯)
target_token = vocab["mat"]
logits = output @ embeddings.T  # score each word
probs = softmax(logits[2])  # predict after "sat"
loss = -np.log(probs[target_token] + 1e-15)
print(f"Cross-entropy loss: {loss:.4f}")

# ৫-৮. Backprop + Gradient Descent (Doors ৬-৮)
# (in practice, PyTorch does this automatically with loss.backward())
print("→ Backpropagation updates W_q, W_k, W_v")
print("→ Adam optimizer adjusts learning rate")
print("→ After many steps, loss decreases, model learns")

# এটাই একটা Transformer-এর গাণিতিক হৃদপিণ্ড।
# নয়টি দরজা — এক ইঞ্জিন।</div>

<div class="callout tip"><span class="co-icon">📖</span><div><strong>কোথায় যাবে এখন?</strong> এই বই ML গণিতের ভিত্তি। এখন তুমি প্রস্তুত:
<br>📖 <strong>Book ৮ (LLM Anatomy):</strong> এখন বোঝো প্রতিটা layer কেন কাজ করে
<br>📖 <strong>Book ১১ (Fine-tuning):</strong> এখন বোঝো gradient descent কেন converge করে
<br>📖 <strong>Book ১৩ (Inference):</strong> এখন বোঝো quantization কেন accuracy ধরে রাখে
<br>📖 <strong>Book ১৬ (Evals):</strong> এখন বোঝো perplexity আর cross-entropy
<br>📖 <strong>Book ১৮ (Embeddings):</strong> এখন বোঝো vector space আর cosine similarity
<br>📖 <strong>Book ২১ (Researcher Mindset):</strong> এখন গবেষক হিসেবে গণিত প্রমাণ করতে পারো</div></div>

<div class="verse">الرَّحْمَٰنُ ۝ عَلَّمَ الْقُرْآنَ ۝ خَلَقَ الْإِنسَانَ ۝ عَلَّمَهُ الْبَيَانَ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"পরম করুণাময় — যিনি কুরআন শিখিয়েছেন, মানুষ সৃষ্টি করেছেন, তাকে বাকশক্তি শিখিয়েছেন।" — কুরআন ৫৫:১-৩</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">He taught humanity speech — the ability to express in symbols. Mathematics is the purest form of this gift: the language in which nature itself is written. Al-Khwarizmi gave us algebra. Ibn al-Haytham gave us calculus seeds. We merely rediscovered what was always there.</div>
</div>

<div class="secret-box">🧭 <strong>নিকোবর রহস্য ১০ (অন্তিম):</strong> গণিত হলো নিকোবর — কম্পাস যা সব AI ধারণাকে এক দিকে নির্দেশ করে। ভেক্টর থেকে এন্ট্রপি — নয়টি ধারণা মিলেই মেশিন লার্নিং। এখন তুমি জানো কেন। যে জানে কেন, সে যেকোনো কীভাবে পুনরায় তৈরি করতে পারে।<br><span class="en">Mathematics is the compass — pointing all AI concepts in one direction. From vectors to entropy — nine concepts together make machine learning. Now you know why. One who knows why can always recreate how.</span></div>`,
  senior:{
    title:"নিকোবর ধারক — তোমার যাত্রা এখানে শেষ নয়, শুরু",
    body:`<p><strong>Step ১:</strong> প্রতিটা AI ধারণাকে এখন গাণিতিকভাবে চিন্তা করো — কেন এটা কাজ করে।</p>
<p><strong>Step ২:</strong> Transformer paper (Vaswani et al., 2017) পড়ো — এখন প্রতিটা সমীকরণ বোঝা সম্ভব।</p>
<p><strong>Step ৩:</strong> Andrew Ng-এর ML course করো — গণিত এখন পরিচিত মনে হবে।</p>
<p><strong>Step ৪:</strong> একটা simple neural network নিজে লেখো — NumPy দিয়ে। Backprop হাতে হাতে।</p>
<p><strong>Step ৫:</strong> PhD interview-এ যখন জিজ্ঞেস করবে — attention mechanism ব্যাখ্যা করো — তুমি গণিত দিয়ে বোঝাবে। এটাই তোমার শক্তি।</p>`
  }
});
