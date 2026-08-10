// ═══════════════════════════════════════════════
// মেশিনের বাজার — The Marketplace of Algorithms
// Book 31 · Doors 1-5
// Classic Machine Learning
// ═══════════════════════════════════════════════

const doors = [];

// ─── Door 1: তারার নকশাকারীর দোকান ─────────────
doors.push({
  num:1, icon:"⭐", color:"#2dd4bf", name:"তারার নকশাকারীর দোকান",
  subtitle:"The Star Map Maker's Shop", tech:"Linear Regression",
  spirit:"আল-তুসি — তারার গতি থেকে নিয়ম খুঁজে বের করা",
  secret:"লিনিয়ার রিগ্রেশন হলো একটা সরলরেখা খোঁজা যা ডেটার সবচেয়ে কাছে যায়। এটাই ML-এর সবচেয়ে সহজ অ্যালগরিদম — কিন্তু এর ভেতরে gradient descent, loss function, optimization — সব আছে। যে এটা বোঝে, সে সব বোঝে।",
  recall:{
    q:"লিনিয়ার রিগ্রেশন কীভাবে কাজ করে এবং এর loss function কী?",
    qen:"How does linear regression work and what is its loss function?",
    a:"y = wx + b সরলরেখা খুঁজি যা ডেটার সবচেয়ে কাছে। Loss = MSE = Σ(yᵢ - ŷᵢ)²/n। Gradient descent দিয়ে w আর b আপডেট করি যাতে MSE সবচেয়ে কম হয়।",
    aen:"We find the line y = wx + b that best fits the data. Loss = MSE = Σ(yᵢ - ŷᵢ)²/n. We update w and b via gradient descent to minimize MSE."
  },
  story:`<p class="scene-setting">১৩শ শতাব্দী। মারাগার মানমন্দির। নাসিরুদ্দিন আল-তুসি (Nasir al-Din al-Tusi) — জ্যোতির্বিজ্ঞানী, গণিতজ্ঞ — তাঁর বিশাল জ্যোতির্বিজ্ঞানের ছক (zij) তৈরি করছেন। তাঁর সামনে শত শত তারার পর্যবেক্ষণ — কোনটা কোন দিন কোথায় ছিল। তিনি একটা নিয়ম খুঁজছেন: তারার অবস্থান আর সময়ের মধ্যে সম্পর্ক কী? তিনি পয়েন্টগুলো একটা লাইন দিয়ে যুক্ত করেন — এবং লাইনটা থেকে ভবিষ্যৎ তারার অবস্থান বলেন। এটাই রিগ্রেশনের বীজ — অতীত ডেটা থেকে ভবিষ্যৎ পূর্বাভাস।</p>
<p class="scene-setting en">13th century. Maragheh Observatory. Nasir al-Din al-Tusi — astronomer, mathematician — builds his massive astronomical tables (zij). Before him: hundreds of star observations — which star was where on which day. He seeks a rule: what is the relationship between a star's position and time? He connects the points with a line — and from the line predicts future positions. This is the seed of regression — predicting the future from past data.</p>

<div class="dialogue">আল-তুসি তাঁর সামনের ছকে আঙুল চালান। তাঁর বিশেষত্ব — তাঁর ডান হাতের কনুই স্থায়ীভাবে বাঁকা, কারণ তিনি প্রতিদিন ঘণ্টার পর ঘণ্টা জ্যোতির্বিজ্ঞানের যন্ত্র (astrolabe) ঘোরাতেন। তিনি বলেন — দেখো, এই পয়েন্টগুলো। এলোমেলো মনে হয়। কিন্তু যদি একটা সরলরেখা আঁকো যা সবচেয়ে কাছে যায় — তাহলে ভবিষ্যৎ বলা যায়। এটাই রিগ্রেশন। প্রতিটা পয়েন্ট ডেটা। লাইনটা মডেল। লাইন থেকে পয়েন্ট যত দূরে — তত বেশি ভুল।</div>
<div class="dialogue en">Al-Tusi traces his chart. His signature — his right elbow is permanently bent, from turning the astrolabe for hours daily. He says — look, these points. They seem random. But if you draw a straight line that passes closest to all of them — you can predict the future. This is regression. Each point is data. The line is the model. The farther a point from the line — the bigger the error.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>লিনিয়ার রিগ্রেশনের সূত্র:</strong>
<br><strong>ŷ = wx + b</strong>
<br>ŷ = predicted value, w = weight (slope), x = input, b = bias (intercept)
<br>Loss = MSE = <strong>Σ(yᵢ - ŷᵢ)² / n</strong>
<br>লক্ষ্য: w আর b এমনভাবে বেছো যাতে MSE সবচেয়ে কম হয়।</div></div>

<div class="diagram">
  <div class="diag-title">লিনিয়ার রিগ্রেশন — সরলরেখা ফিট করা</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <line class="axis" x1="40" y1="220" x2="520" y2="220"/>
    <line class="axis" x1="40" y1="220" x2="40" y2="20"/>
    <text class="axis-label" x="525" y="224">x (input)</text>
    <text class="axis-label" x="20" y="16">y (target)</text>
    <line stroke="#2dd4bf" stroke-width="3" x1="60" y1="200" x2="500" y2="50"/>
    <text class="lbl-amber" x="350" y="100">ŷ = wx + b</text>
    <circle class="node-leaf" cx="100" cy="190" r="5"/>
    <circle class="node-leaf" cx="160" cy="165" r="5"/>
    <circle class="node-leaf" cx="220" cy="150" r="5"/>
    <circle class="node-leaf" cx="280" cy="120" r="5"/>
    <circle class="node-leaf" cx="340" cy="100" r="5"/>
    <circle class="node-leaf" cx="400" cy="80" r="5"/>
    <circle class="node-leaf" cx="460" cy="65" r="5"/>
    <line stroke="#ff6b35" stroke-width="1.5" stroke-dasharray="3,3" x1="160" y1="165" x2="160" y2="177"/>
    <text class="lbl-hot" x="170" y="175">ত্রুটি (error)</text>
    <line stroke="#ff6b35" stroke-width="1.5" stroke-dasharray="3,3" x1="340" y1="100" x2="340" y2="120"/>
  </svg>
  <div class="diag-cap">সরলরেখা ডেটার সবচেয়ে কাছে — error যত কম তত ভালো</div>
</div>

<div class="dialogue">আল-তুসি বলেন — এখন বোঝো কেন এটা Book ৩০ (Math for ML)-এর সাথে যুক্ত। লাইন খুঁজতে আমরা gradient descent ব্যবহার করি (Door ৬)। loss function হলো MSE (Door ৮)। w আর b হলো ভেক্টর (Door ১)। সব গণিত এক জায়গায়। কিন্তু এখানে একটা নতুন ধারণা — training। আমরা ডেটা থেকে w আর b শিখি। এটাই machine learning-এর সারমর্ম।</div>
<div class="dialogue en">Al-Tusi says — now understand why this connects to Book 30 (Math for ML). To find the line we use gradient descent (Door 6). The loss function is MSE (Door 8). w and b are vectors (Door 1). All math in one place. But here is a new concept — training. We learn w and b from data. This is the essence of machine learning.</div>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>Training-এর ৩টি ধাপ (প্রতিটা ML অ্যালগরিদমে একই):</strong>
<br>① <strong>Forward:</strong> ŷ = wx + b দিয়ে prediction করো
<br>② <strong>Loss:</strong> MSE = Σ(y - ŷ)² / n গণনা করো
<br>③ <strong>Update:</strong> gradient descent দিয়ে w আর b আপডেট করো
<br>এই ৩টি ধাপ বারবার — যতক্ষণ না loss কমে যায়।</div></div>

<table class="kv-table"><tr><th>ধারণা</th><th>সংজ্ঞা</th><th>উদাহরণ</th></tr>
<tr><td class="hl">Weight (w)</td><td>ইনপুটের প্রভাব</td><td>বাড়ির সাইজ বাড়লে দাম কত বাড়ে</td></tr>
<tr><td class="hl">Bias (b)</td><td>বেসলাইন মান</td><td>বাড়ির সাইজ ০ হলেও একটা দাম আছে</td></tr>
<tr><td class="hl">MSE</td><td>গড় বর্গ ত্রুটি</td><td>ভবিষ্যদ্বাণী আর সত্যির পার্থক্য</td></tr>
<tr><td class="hl">R²</td><td>মডেলের ভালোত্ব</td><td>০-১ এর মধ্যে, ১ = নিখুঁত</td></tr></table>

<div class="code-block"># ── STEP 1: What is linear regression? ──
# Find the BEST STRAIGHT LINE through data points.
# y = w * x + b  (weight × input + bias)

# Example: predict house price from size
# Size (sq ft) → Price ($1000s)
import numpy as np

sizes = np.array([600, 800, 1000, 1200, 1400, 1600])
prices = np.array([150, 180, 210, 240, 280, 310])

# We want: price = w * size + b
# What values of w and b fit the data best?

# The line that minimizes ERRORS is the best line.
# This is what linear regression does — automatically.</div>

<div class="code-block"># ── STEP 2: The loss function (MSE) ──
# How wrong is our line? Measure with Mean Squared Error.

# MSE = average of (actual - predicted)²
def mse(y_true, y_pred):
    """Mean Squared Error — how far off are predictions?"""
    return np.mean((y_true - y_pred) ** 2)

# Try w=0.1, b=50:
w, b = 0.1, 50
predictions = w * sizes + b
error = mse(prices, predictions)
print(f"w={w}, b={b} → MSE={error:.0f}")  # w=0.1, b=50 → MSE=900

# Try w=0.15, b=50:
w, b = 0.15, 50
predictions = w * sizes + b
error = mse(prices, predictions)
print(f"w={w}, b={b} → MSE={error:.0f}")  # Lower MSE = better fit!

# Squaring does two things:
# 1. Makes everything positive (errors don't cancel out)
# 2. Punishes BIG errors more than small ones</div>

<div class="code-block"># ── STEP 3: Gradient descent — learning from mistakes ──
# How do we find the best w and b? GRADIENT DESCENT.
# It's like rolling down a hill to find the bottom.

# The algorithm:
# 1. Start with random w and b
# 2. Calculate the gradient (slope of the error)
# 3. Take a step DOWNWARD (reduce error)
# 4. Repeat until you reach the bottom

# Initialize:
w = 0.0   # weight (slope)
b = 0.0   # bias (intercept)
lr = 0.0000001  # learning rate (step size)

for epoch in range(100):
    # Forward pass — make predictions:
    y_pred = w * sizes + b

    # Calculate gradients (how to change w and b):
    dw = -2 * np.mean(sizes * (prices - y_pred))  # ∂MSE/∂w
    db = -2 * np.mean(prices - y_pred)              # ∂MSE/∂b

    # Update — take a step downhill:
    w = w - lr * dw
    b = b - lr * db

    if epoch % 20 == 0:
        error = mse(prices, y_pred)
        print(f"Epoch {epoch}: w={w:.4f}, b={b:.4f}, MSE={error:.2f}")

# The learning rate (lr) controls step size:
# Too small: learns very slowly
# Too large: overshoots, bounces around, never converges
# Just right: smooth descent to the optimal value</div>

<div class="code-block"># ── STEP 4: The complete training loop ──
import numpy as np

# Data: house size vs price
X = np.array([600, 800, 1000, 1200, 1400, 1600], dtype=float)
y = np.array([150, 180, 210, 240, 280, 310], dtype=float)

# Normalize data (important for gradient descent!):
X_norm = (X - X.mean()) / X.std()

# Initialize parameters:
w, b = 0.0, 0.0
lr = 0.01  # much better learning rate with normalized data!

# Training:
for epoch in range(200):
    y_pred = w * X_norm + b
    loss = np.mean((y - y_pred) ** 2)

    dw = -2 * np.mean(X_norm * (y - y_pred))
    db = -2 * np.mean(y - y_pred)

    w -= lr * dw
    b -= lr * db

    if epoch % 50 == 0:
        print(f"Epoch {epoch}: loss={loss:.2f}, w={w:.4f}, b={b:.4f}")

print(f"\nFinal model: price = {w:.2f} × normalized_size + {b:.2f}")
print(f"Prediction for 1500 sq ft: {w * ((1500 - X.mean()) / X.std()) + b:.1f}k")</div>

<div class="code-block"># ── STEP 5: Using scikit-learn (the easy way) ──
# In practice, use scikit-learn — it's optimized and tested.

from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Sample data:
X = np.array([[600], [800], [1000], [1200], [1400], [1600]])
y = np.array([150, 180, 210, 240, 280, 310])

# Split into train/test:
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train:
model = LinearRegression()
model.fit(X_train, y_train)

# Predict:
predictions = model.predict(X_test)

# Evaluate:
print(f"Slope (w): {model.coef_[0]:.2f}")
print(f"Intercept (b): {model.intercept_:.2f}")
print(f"R² score: {r2_score(y_test, predictions):.3f}")  # 1.0 = perfect
print(f"MSE: {mean_squared_error(y_test, predictions):.2f}")

# Predict new value:
print(f"1500 sq ft → " + str(model.predict([[1500]])[0]) + "k")

# scikit-learn does in 3 lines what took us 20 lines from scratch!
# But understanding the scratch version makes you a better ML engineer.</div>

<div class="code-block"># ── STEP 6: Beyond linear — polynomial and regularization ──
# What if the relationship isn't a straight line?

# Polynomial regression (curved line):
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline

# Degree 2 = parabola, degree 3 = cubic curve
poly_model = Pipeline([
    ("poly", PolynomialFeatures(degree=2)),
    ("linear", LinearRegression())
])
poly_model.fit(X_train, y_train)

# REGULARIZATION — prevent overfitting:
from sklearn.linear_model import Ridge, Lasso

# Ridge (L2): shrinks weights toward zero
ridge = Ridge(alpha=1.0)  # alpha = regularization strength
ridge.fit(X_train, y_train)

# Lasso (L1): can make some weights EXACTLY zero (feature selection)
lasso = Lasso(alpha=0.1)
lasso.fit(X_train, y_train)

# WHEN TO USE WHAT:
# ┌─────────────────────┬──────────────────────────────────┐
# │ Model               │ When to use                    │
# ├─────────────────────┼──────────────────────────────────┤
# │ LinearRegression    │ simple linear relationships    │
# │ Polynomial          │ curved relationships           │
# │ Ridge               │ many features, prevent overfit │
# │ Lasso               │ feature selection (sparse)     │
# │ ElasticNet          │ Ridge + Lasso combined         │
# └─────────────────────┴──────────────────────────────────┘

# KEY INSIGHT:
# Linear regression is the FOUNDATION of all ML.
# Neural networks are just MANY linear regressions stacked together
# with non-linear activation functions between them.
# Master this → understand everything.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> লিনিয়ার রিগ্রেশন ধরে নেয় সম্পর্ক সরলরৈখিক — কিন্তু বাস্তবে সব সম্পর্ক লিনিয়ার নয়। বাড়ির দাম আর সাইজের সম্পর্ক হয়তো বক্ররৈখিক। তাই polynomial regression বা অন্য অ্যালগরিদম দরকার হয়। এটাই underfitting — মডেল খুব সহজ, ডেটা জটিল।</div></div>

<div class="verse">وَالشَّمْسِ وَضُحَاهَا ۝ وَالْقَمَرِ إِذَا تَلَاهَا
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"শপথ সূর্যের এবং তার প্রখরতার, শপথ চাঁদের যখন তা অনুসরণ করে।" — কুরআন ৯১:১-২</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Al-Tusi tracked the sun and moon across the sky — finding the line that connects their positions through time. Regression is the same: finding the line that connects data points, so we can see where the next point will be.</div>
</div>

<div class="secret-box">⭐ <strong>বাজার রহস্য ১:</strong> লিনিয়ার রিগ্রেশন হলো একটা সরলরেখা খোঁজা — y = wx + b। MSE কমানোর জন্য gradient descent। এটাই ML-এর সবচেয়ে সহজ অ্যালগরিদম — কিন্তু এর ভেতরে সব ধারণা আছে: training, loss, optimization।<br><span class="en">Linear regression finds a line — y = wx + b. Gradient descent minimizes MSE. This is the simplest ML algorithm — but it contains every concept: training, loss, optimization.</span></div>`,
  senior:{
    title:"রিগ্রেশন চিন্তা — ভবিষ্যৎ দেখার সবচেয়ে সহজ উপায়",
    body:`<p><strong>Step ১:</strong> ডেটা সংগ্রহ করো — ইনপুট X আর টার্গেট y।</p>
<p><strong>Step ২:</strong> একটা সরলরেখা আন্দাজ করো — y = wx + b। শুরুতে w=০, b=০।</p>
<p><strong>Step ৩:</strong> MSE গণনা করো — কতটা ভুল করছো।</p>
<p><strong>Step ৪:</strong> Gradient descent দিয়ে w আর b আপডেট করো — ভুল কমাও।</p>
<p><strong>Step ৫:</strong> এই প্রক্রিয়া বারবার — training। শেষে একটা লাইন পাবে যা ভবিষ্যৎ বলে।</p>`
  }
});

// ─── Door 2: দাঁড়িপাল্লার কারিগর ──────────────
doors.push({
  num:2, icon:"⚖️", color:"#5eead4", name:"দাঁড়িপাল্লার কারিগর",
  subtitle:"The Scale Maker", tech:"Logistic Regression",
  spirit:"মিজান — কাঁটায় কাঁটায় সত্য বিচার",
  secret:"লজিস্টিক রিগ্রেশন হলো লিনিয়ার রিগ্রেশনের ভাই — কিন্তু এটা সংখ্যা নয়, সিদ্ধান্ত দেয়। হ্যাঁ বা না। Spam বা নয়। Sigmoid ফাংশন যেকোনো সংখ্যাকে ০ থেকে ১ এর মধ্যে নিয়ে আসে — সম্ভাবনা।",
  recall:{
    q:"লজিস্টিক রিগ্রেশন লিনিয়ার রিগ্রেশন থেকে কীভাবে আলাদা?",
    qen:"How is logistic regression different from linear regression?",
    a:"লিনিয়ার রিগ্রেশন সংখ্যা ভবিষ্যদ্বাণী করে (দাম)। লজিস্টিক রিগ্রেশন সিদ্ধান্ত দেয় (হ্যাঁ/না)। Sigmoid ফাংশন যেকোনো সংখ্যাকে ০-১ এর মধ্যে নিয়ে আসে — সম্ভাবনা হিসেবে। Loss = cross-entropy, MSE নয়।",
    aen:"Linear regression predicts numbers (price). Logistic regression predicts decisions (yes/no). The sigmoid function maps any number to 0-1 as probability. Loss = cross-entropy, not MSE."
  },
  story:`<p class="scene-setting">বাজারের এক কোণে একজন বৃদ্ধ কারিগর বসে আছেন — তাঁর নাম উস্তাদ ইসহাক (Ustad Ishaq)। তিনি দাঁড়িপাল্লা বানান — কাঁটা দিয়ে সত্য বিচার করার যন্ত্র। তাঁর বিশেষত্ব — তাঁর বাঁ হাতের পাঞ্জা পুরু, কারণ তিনি ৫০ বছর ধরে পিতল গড়েন। তিনি বলেন — আমার দাঁড়িপাল্লা দুই পাত্রে ওজন রাখে। এক পাত্রে প্রমাণ, আর এক পাত্রে পাথর। কাঁটা যেদিকে হেলে — সেদিকে সত্য। কিন্তু কাঁটা হঠাৎ হেলে না — ধীরে ধীরে হেলে। একটা সম্ভাবনা থেকে সিদ্ধান্তে যায়।</p>
<p class="scene-setting en">In a corner of the marketplace sits an old artisan — Ustad Ishaq. He makes scales — instruments that judge truth with a needle. His signature — his left palm is thick and calloused, from 50 years of molding brass. He says — my scale holds two pans. One holds evidence, the other a stone. The needle tilts toward truth. But the needle does not flip suddenly — it tilts gradually. From probability to decision.</p>

<div class="dialogue">উস্তাদ ইসহাক তোমাকে একটা দাঁড়িপাল্লা দেখান। কাঁটা মাঝখানে — তবে সামান্য ডানে হেলে আছে। তিনি বলেন — দেখো, এই কাঁটা এখন ০.৭ ডানে। অর্থাৎ ৭০% নিশ্চিত ডান পাত্রের দিকে। ৩০% এখনো অনিশ্চিত। এটাই sigmoid — শূন্য থেকে এক, ধীরে ধীরে। লজিস্টিক রিগ্রেশন এটাই করে — সংখ্যাকে সম্ভাবনায় রূপান্তর করে।</div>
<div class="dialogue en">Ustad Ishaq shows you a scale. The needle is centered — but slightly tilted right. He says — look, this needle is 0.7 to the right. That means 70% confident toward the right pan. 30% still uncertain. This is sigmoid — from zero to one, gradually. Logistic regression does this — transforms numbers into probabilities.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>লজিস্টিক রিগ্রেশনের সূত্র:</strong>
<br>① <strong>z = wx + b</strong> (লিনিয়ার রিগ্রেশনের মতো)
<br>② <strong>σ(z) = 1 / (1 + e⁻ᶻ)</strong> (sigmoid — ০ থেকে ১)
<br>③ যদি σ(z) ≥ ০.৫ → class ১, নাহলে class ০
<br>Loss = <strong>Cross-Entropy = -Σ y·log(σ) + (1-y)·log(1-σ)</strong></div></div>

<div class="diagram">
  <div class="diag-title">Sigmoid — S-কার্ভ যা সংখ্যাকে সম্ভাবনায় রূপান্তর করে</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="sigGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="rgba(255,107,53,.15)"/><stop offset="100%" stop-color="rgba(82,196,26,.15)"/></linearGradient></defs>
    <line class="axis" x1="40" y1="125" x2="520" y2="125" stroke-dasharray="4,3"/>
    <text class="axis-label" x="525" y="129">z</text>
    <line class="axis" x1="280" y1="20" x2="280" y2="220"/>
    <text class="axis-label" x="284" y="16">σ(z)</text>
    <path d="M 40 210 Q 200 210 280 125 Q 360 40 520 40" fill="none" stroke="#2dd4bf" stroke-width="3"/>
    <text class="lbl-hot" x="100" y="200">class ০</text>
    <text class="lbl-leaf" x="440" y="55">class ১</text>
    <line stroke="#5eead4" stroke-width="1" stroke-dasharray="2,2" x1="40" y1="40" x2="520" y2="40"/>
    <text class="lbl-sm" x="60" y="35">১.০ (১০০%)</text>
    <line stroke="#5eead4" stroke-width="1" stroke-dasharray="2,2" x1="40" y1="210" x2="520" y2="210"/>
    <text class="lbl-sm" x="60" y="225">০.০ (০%)</text>
    <text class="lbl-amber" x="310" y="125">০.৫</text>
    <circle class="node-leaf" cx="220" cy="180" r="5"/>
    <circle class="node-leaf" cx="280" cy="125" r="5"/>
    <circle class="node-leaf" cx="340" cy="70" r="5"/>
  </svg>
  <div class="diag-cap">Sigmoid: z=০ হলে σ=০.৫ (৫০%), z বড় হলে σ→১, z ছোট হলে σ→০</div>
</div>

<div class="dialogue">উস্তাদ ইসহাক বলেন — ভাবো, একটা email এলো। Spam না নয়? লিনিয়ার রিগ্রেশন বলতে পারে না — কারণ উত্তর সংখ্যা নয়, হ্যাঁ/না। কিন্তু লজিস্টিক রিগ্রেশন বলে — এই email-এ "FREE" শব্দটা ৩ বার আছে, "MONEY" ২ বার। z = w₁*৩ + w₂*২ + b। sigmoid(z) = ০.৮৭। অর্থাৎ ৮৭% সম্ভাবনা spam। ০.৫ এর বেশি — তাই spam।</div>
<div class="dialogue en">Ustad Ishaq says — think, an email arrives. Spam or not? Linear regression cannot say — because the answer is not a number, it is yes/no. But logistic regression says — this email has "FREE" 3 times, "MONEY" 2 times. z = w₁*3 + w₂*2 + b. sigmoid(z) = 0.87. That means 87% probability of spam. Above 0.5 — so spam.</div>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ Linear Regression</div>ŷ = wx + b → যেকোনো সংখ্যা। ক্লাস বলতে পারে না। দাম, তাপমাত্রা, দূরত্ব — যেখানে উত্তর একটা সংখ্যা।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ Logistic Regression</div>σ(wx + b) → ০ থেকে ১। ক্লাস বলে। Spam না নয়, রোগ আছে না নেই — যেখানে উত্তর হ্যাঁ/না।</div>
</div>

<div class="code-block"># ── STEP 1: What is logistic regression? ──
# Linear regression predicts a NUMBER (price, temperature).
# Logistic regression predicts a PROBABILITY (0 to 1) → classification.

# Uses the SIGMOID function to squash any value into 0-1 range:
# sigmoid(z) = 1 / (1 + e^(-z))

import numpy as np

def sigmoid(z):
    """Squash any number into 0 to 1 range."""
    return 1 / (1 + np.exp(-z))

# Visualize sigmoid:
for z in [-5, -2, -1, 0, 1, 2, 5]:
    print(f"  sigmoid({z:>2}) = {sigmoid(z):.4f}")
# sigmoid(-5) = 0.0067  → very unlikely
# sigmoid( 0) = 0.5000  → 50/50
# sigmoid( 5) = 0.9933  → very likely

# Logistic regression model:
# probability = sigmoid(w1*x1 + w2*x2 + ... + b)
# If probability &gt; 0.5 → class 1 (pass)
# If probability &lt; 0.5 → class 0 (fail)</div>

<div class="code-block"># ── STEP 2: Binary classification example ──
# Predict: will a student pass (1) or fail (0)?
# Features: [study_hours, sleep_hours]

from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
import numpy as np

# Training data:
X = np.array([[5, 7], [2, 4], [8, 8], [1, 3], [6, 6], [3, 5]])
y = np.array([1, 0, 1, 0, 1, 0])  # 1=pass, 0=fail

# Train:
model = LogisticRegression()
model.fit(X, y)

# Predict new student (7 hours study, 7 hours sleep):
new_student = np.array([[7, 7]])
probability = model.predict_proba(new_student)[0][1]
print(f"Pass probability: {probability:.1%}")
print(f"Decision: {'PASS' if probability >= 0.5 else 'FAIL'}")

# Evaluate on training data:
predictions = model.predict(X)
print(f"Accuracy: {accuracy_score(y, predictions):.1%}")
print(classification_report(y, predictions))</div>

<div class="code-block"># ── STEP 3: Cross-entropy loss ──
# Logistic regression uses CROSS-ENTROPY loss, not MSE.
# Cross-entropy punishes confident wrong answers heavily.

import numpy as np

def cross_entropy_loss(y_true, y_pred):
    """
    Cross-entropy loss for binary classification.
    y_true: actual (0 or 1)
    y_pred: predicted probability (0 to 1)
    """
    # Avoid log(0) by adding tiny epsilon:
    eps = 1e-15
    y_pred = np.clip(y_pred, eps, 1 - eps)

    # Formula: -[y*log(p) + (1-y)*log(1-p)]
    return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

# Compare MSE vs Cross-Entropy for wrong predictions:
actual = np.array([1.0])  # true answer is 1

# Model predicts 0.9 (correct, confident):
pred_correct = np.array([0.9])
print(f"  Correct (0.9): MSE={np.mean((actual-pred_correct)**2):.4f}, "
      f"CE={cross_entropy_loss(actual, pred_correct):.4f}")

# Model predicts 0.1 (wrong, confident):
pred_wrong = np.array([0.1])
print(f"  Wrong (0.1):   MSE={np.mean((actual-pred_wrong)**2):.4f}, "
      f"CE={cross_entropy_loss(actual, pred_wrong):.4f}")

# Cross-entropy punishes confident wrong answers MUCH more:
# MSE: 0.01 vs 0.81 (81x worse)
# CE:  0.10 vs 2.30 (23x worse, but CE grows faster for extreme errors)</div>

<div class="code-block"># ── STEP 4: Logistic regression from scratch ──
# Understanding the training loop:

import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Data: [study_hours, sleep_hours] → pass(1)/fail(0)
X = np.array([[5, 7], [2, 4], [8, 8], [1, 3], [6, 6], [3, 5]])
y = np.array([1, 0, 1, 0, 1, 0])

# Initialize:
w = np.zeros(2)  # one weight per feature
b = 0.0
lr = 0.1

for epoch in range(200):
    # Forward pass:
    z = X @ w + b          # linear combination
    preds = sigmoid(z)     # squash to probability

    # Cross-entropy loss:
    loss = -np.mean(y * np.log(preds + 1e-15) +
                    (1 - y) * np.log(1 - preds + 1e-15))

    # Gradients (vectorized):
    dz = preds - y         # error signal
    dw = X.T @ dz / len(y) # gradient for weights
    db = np.mean(dz)       # gradient for bias

    # Update:
    w -= lr * dw
    b -= lr * db

    if epoch % 50 == 0:
        print(f"Epoch {epoch}: loss={loss:.4f}, w={w}, b={b:.4f}")

print(f"\nFinal weights: study_hours={w[0]:.3f}, sleep_hours={w[1]:.3f}")
print("Positive weight = that feature INCREASES pass probability")</div>

<div class="code-block"># ── STEP 5: Decision boundaries and thresholds ──
# The 0.5 threshold isn't always right!

# THRESHOLD TRADEOFF:
# High threshold (0.8): fewer false positives, MORE false negatives
#   → good for: spam filter (don't flag real emails)
# Low threshold (0.3): MORE false positives, fewer false negatives
#   → good for: cancer detection (don't miss any case)

from sklearn.metrics import confusion_matrix

# Example: disease detection
y_true = [0, 0, 0, 1, 1, 1, 1, 1]
y_pred = [0, 0, 1, 1, 1, 1, 0, 1]  # predictions at 0.5 threshold

cm = confusion_matrix(y_true, y_pred)
print("Confusion Matrix:")
print("  Predicted:  No  Yes")
print(f"  Actual No:  {cm[0][0]}   {cm[0][1]}")   # TN, FP
print(f"  Actual Yes: {cm[1][0]}   {cm[1][1]}")   # FN, TP

# Metrics:
tn, fp, fn, tp = cm.ravel()
precision = tp / (tp + fp)  # of predicted positives, how many real?
recall = tp / (tp + fn)     # of actual positives, how many found?
f1 = 2 * precision * recall / (precision + recall)

print(f"\nPrecision: {precision:.2f} (no false alarms)")
print(f"Recall:    {recall:.2f} (no missed cases)")
print(f"F1 Score:  {f1:.2f} (balanced metric)")

# ┌──────────────┬──────────────────────────────────┐
# │ Metric       │ Question it answers             │
# ├──────────────┼──────────────────────────────────┤
# │ Accuracy     │ Overall, how many are right?    │
# │ Precision    │ Of positives, how many correct? │
# │ Recall       │ Of actual cases, how many found?│
# │ F1 Score     │ Balanced precision + recall     │
# └──────────────┴──────────────────────────────────┘</div>

<div class="code-block"># ── STEP 6: Multi-class logistic regression ──
# Logistic regression can classify MORE than 2 classes!

from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Iris dataset: 3 flower species from 4 measurements:
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)

# Multi-class logistic regression (softmax):
model = LogisticRegression(max_iter=200, multi_class="multinomial")
model.fit(X_train, y_train)

# Predict:
predictions = model.predict(X_test)
print(f"Accuracy: {(predictions == y_test).mean():.1%}")

# Softmax = generalization of sigmoid for multiple classes:
# softmax(z_i) = exp(z_i) / sum(exp(z_j))
# Each class gets a probability, all sum to 1.0

# WHEN TO USE LOGISTIC REGRESSION:
# ✅ Binary or multi-class classification
# ✅ Need PROBABILITY estimates (not just labels)
# ✅ Fast, interpretable, good baseline
# ✅ Features have linear relationship with log-odds

# WHEN NOT TO USE:
# ❌ Highly non-linear relationships (use trees or neural nets)
# ❌ Very complex interactions between features
# ❌ Small data with many features (prone to overfitting)

# Logistic regression is ALWAYS your first classification baseline.
# Only move to complex models if logistic regression underperforms.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> ০.৫ threshold সবসময় সঠিক নয়। যদি false positive আর false negative-এর খরচ আলাদা হয় — threshold পাল্টাও। রোগ নির্ণয়ে false negative অনেক বিপজ্জনক → threshold কমাও (০.৩)। Spam filter-এ false positive বিপজ্জনক → threshold বাড়াও (০.৭)। এটাই precision-recall tradeoff।</div></div>

<div class="verse">وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"এবং আমরা কিয়ামতের দিনের জন্য ন্যায্য দাঁড়িপাল্লা স্থাপন করব।" — কুরআন ২১:৪৭</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">The scale (mizan) weighs truth. Logistic regression is the mathematical mizan — weighing evidence to decide yes or no. The sigmoid is the needle — gradually tilting from uncertainty to decision.</div>
</div>

<div class="secret-box">⚖️ <strong>বাজার রহস্য ২:</strong> লজিস্টিক রিগ্রেশন হলো দাঁড়িপাল্লা — সংখ্যাকে সম্ভাবনায় রূপান্তর (sigmoid) করে সিদ্ধান্ত দেয়। Loss = cross-entropy, MSE নয়। এটাই classification-এর ভিত্তি।<br><span class="en">Logistic regression is a scale — it transforms numbers into probabilities (sigmoid) to make decisions. Loss = cross-entropy, not MSE. This is the foundation of classification.</span></div>`,
  senior:{
    title:"ক্লাসিফিকেশন চিন্তা — সিদ্ধান্ত নেওয়ার গণিত",
    body:`<p><strong>Step ১:</strong> Linear regression সংখ্যা দেয়, logistic regression সিদ্ধান্ত দেয় (হ্যাঁ/না)।</p>
<p><strong>Step ২:</strong> Sigmoid যেকোনো সংখ্যাকে ০-১ এ নিয়ে আসে — সম্ভাবনা।</p>
<p><strong>Step ৩:</strong> ০.৫ এর উপরে = class ১, নিচে = class ০। কিন্তু threshold পাল্টানো যায়।</p>
<p><strong>Step ৪:</strong> Loss = cross-entropy, MSE নয়। সঠিক ক্লাসের probability বাড়াও।</p>
<p><strong>Step ৫:</strong> Precision-recall tradeoff: false positive আর false negative-এর খরচ আলাদা হলে threshold পাল্টাও।</p>`
  }
});

// ─── Door 3: যুক্তির শাখাবিদ ──────────────────
doors.push({
  num:3, icon:"🌳", color:"#52c41a", name:"যুক্তির শাখাবিদ",
  subtitle:"The Logic Brancher", tech:"Decision Trees & Random Forests",
  spirit:"ইবনে সিনা — ক্যাটেগরিক্যাল লজিক, সত্যকে শাখায় ভাগ করা",
  secret:"ডিসিশন ট্রি হলো একটা গাছ — প্রতিটা শাখায় একটা প্রশ্ন। কোন প্রশ্ন সবচেয়ে বেশি তথ্য দেয়? Entropy আর information gain বলে। র‍্যান্ডম ফরেস্ট হলো শত শত গাছ — একসাথে ভোট দেয়।",
  recall:{
    q:"ডিসিশন ট্রি কোন প্রশ্নে ভাগ হয় এবং information gain কী?",
    qen:"How does a decision tree choose where to split and what is information gain?",
    a:"ডিসিশন ট্রি সেই প্রশ্নে ভাগ হয় যা সবচেয়ে বেশি entropy কমায়। Information gain = entropy(split এর আগে) - entropy(split এর পরে)। যে split সবচেয়ে বেশি entropy কমায় — সেটাই সেরা।",
    aen:"A decision tree splits on the question that reduces entropy the most. Information gain = entropy(before split) - entropy(after split). The split that reduces entropy the most is the best."
  },
  story:`<p class="scene-setting">১১শ শতাব্দী। বুখারা। ইবনে সিনা (Ibn Sina / Avicenna) — চিকিৎসক, দার্শনিক, বিজ্ঞানী — তাঁর বিখ্যাত চিকিৎসা বিশ্বকোশ আল-কানুন ফিত-তিব (The Canon of Medicine) লিখছেন। এই বই ৬০০ বছর ধরে ইউরোপের মেডিকেল টেক্সটবুক ছিল। ইবনে সিনার পদ্ধতি ছিল — রোগ নির্ণয়ে একটা গাছ বানানো। প্রথম প্রশ্ন: জ্বর আছে? যদি হ্যাঁ → পরের প্রশ্ন: কত দিন? যদি ৩ দিনের বেশি → পরের প্রশ্ন: ফুসকুড়ি আছে? প্রতিটা প্রশ্ন রোগীকে ছোট ছোট গ্রুপে ভাগ করে — যতক্ষণ না সঠিক রোগ নির্ণয় হয়। এটাই ডিসিশন ট্রি।</p>
<p class="scene-setting en">11th century. Bukhara. Ibn Sina (Avicenna) — physician, philosopher, scientist — writes his famous medical encyclopedia Al-Qanun fi al-Tibb (The Canon of Medicine). This book was Europe's medical textbook for 600 years. Ibn Sina's method: build a tree for diagnosis. First question: is there fever? If yes → next question: how many days? If more than 3 → next question: is there a rash? Each question divides the patient into smaller groups — until the correct diagnosis is reached. This is a decision tree.</p>

<div class="dialogue">ইবনে সিনার বিশেষত্ব — তাঁর কপালে সবসময় একটা কালির দাগ, কারণ তিনি ভাবার সময় কলম দিয়ে কপালে টোকা দিতেন। তিনি বলেন — চিকিৎসক হিসেবে আমি প্রতিদিন শত শত রোগী দেখি। কিন্তু প্রতিটা রোগী আলাদা। কীভাবে সঠিক রোগ নির্ণয় করব? প্রশ্ন করো। কোন প্রশ্ন সবচেয়ে বেশি তথ্য দেয় — সেটাই প্রথম প্রশ্ন। এটাই information gain। কম তথ্যে সঠিক সিদ্ধান্ত — এটাই শিল্প।</div>
<div class="dialogue en">Ibn Sina's signature — a permanent ink stain on his forehead, from tapping it with a pen while thinking. He says — as a physician I see hundreds of patients daily. But each is different. How to diagnose correctly? Ask questions. Which question gives the most information — that is the first question. This is information gain. Correct decision with minimal questions — this is art.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>ডিসিশন ট্রি গঠন:</strong>
<br>প্রতিটা node-এ একটা প্রশ্ন: feature ≤ threshold?
<br><strong>Information Gain = H(parent) - Σ(|child|/|parent|) * H(child)</strong>
<br>H = Entropy = -Σ pᵢ log₂(pᵢ) (Book ৩০, Door ৯)
<br>সবচেয়ে বেশি information gain = সেরা split।</div></div>

<div class="diagram">
  <div class="diag-title">ডিসিশন ট্রি — রোগ নির্ণয়ের গাছ</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <rect class="cell-good" x="220" y="10" width="120" height="40" rx="10"/>
    <text class="lbl-leaf" x="280" y="35" text-anchor="middle">জ্বর আছে?</text>
    <line class="edge" x1="270" y1="50" x2="180" y2="90"/>
    <text class="lbl-sm" x="210" y="75">হ্যাঁ</text>
    <line class="edge" x1="290" y1="50" x2="380" y2="90"/>
    <text class="lbl-sm" x="345" y="75">না</text>
    <rect class="cell-hot" x="120" y="90" width="120" height="40" rx="10"/>
    <text class="lbl-hot" x="180" y="115" text-anchor="middle">৩ দিন+?</text>
    <rect class="cell-cyan" x="320" y="90" width="120" height="40" rx="10"/>
    <text class="lbl-cyan" x="380" y="115" text-anchor="middle">সর্দি?</text>
    <line class="edge" x1="160" y1="130" x2="100" y2="170"/>
    <text class="lbl-sm" x="120" y="155">হ্যাঁ</text>
    <line class="edge" x1="200" y1="130" x2="260" y2="170"/>
    <text class="lbl-sm" x="240" y="155">না</text>
    <rect class="cell-purple" x="50" y="170" width="100" height="35" rx="8"/>
    <text class="lbl-sm" x="100" y="192" text-anchor="middle" fill="#b37feb">ফুসকুড়ি?</text>
    <rect class="cell" x="230" y="170" width="80" height="35" rx="8"/>
    <text class="lbl-sm" x="270" y="192" text-anchor="middle">ভাইরাস</text>
    <line class="edge" x1="350" y1="130" x2="330" y2="220"/>
    <line class="edge" x1="400" y1="130" x2="440" y2="220"/>
    <rect class="cell-leaf" x="290" y="220" width="80" height="30" rx="8"/>
    <text class="lbl-sm" x="330" y="240" text-anchor="middle">অ্যালার্জি</text>
    <rect class="cell-leaf" x="410" y="220" width="80" height="30" rx="8"/>
    <text class="lbl-sm" x="450" y="240" text-anchor="middle">সুস্থ</text>
  </svg>
  <div class="diag-cap">প্রতিটা শাখায় একটা প্রশ্ন — যতক্ষণ না সিদ্ধান্ত আসে</div>
</div>

<div class="dialogue">ইবনে সিনা বলেন — একটা গাছ ভালো, কিন্তু শত শত গাছ আরও ভালো। প্রতিটা গাছ সামান্য আলাদা প্রশ্ন করে। শেষে সব গাছ ভোট দেয় — সংখ্যাগরিষ্ঠ জেতে। এটাই র‍্যান্ডম ফরেস্ট (Breiman, 2001)। একটা গাছ ভুল করতে পারে — কিন্তু ৫০০টা গাছ কদাচিৎ ভুল করে। এটাই ensemble learning — দুর্বলতায় শক্তি।</div>
<div class="dialogue en">Ibn Sina says — one tree is good, but hundreds of trees are better. Each tree asks slightly different questions. At the end, all trees vote — majority wins. This is Random Forest (Breiman, 2001). One tree can err — but 500 trees rarely err. This is ensemble learning — strength in weakness.</div>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ Single Tree</div>একটা গাছ overfit করে। ট্রেনিং ডেটা মুখস্থ — নতুন ডেটায় ব্যর্থ। একজন চিকিৎসক যদি একটা রোগে বিশেষজ্ঞ হন — অন্য রোগে ভুল করতে পারেন।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ Random Forest</div>৫০০টা গাছ, প্রতিটা সামান্য আলাদা। ভোট দেয়। Overfitting কমে, variance কমে। ৫০০ চিকিৎসকের প্যানেল — সংখ্যাগরিষ্ঠ সিদ্ধান্ত।</div>
</div>

<table class="kv-table"><tr><th>অ্যালগরিদম</th><th>কী করে</th><th>সুবিধা</th></tr>
<tr><td class="hl">Decision Tree</td><td>প্রশ্ন দিয়ে ভাগ করে</td><td>বোঝা সহজ, দ্রুত</td></tr>
<tr><td class="hl">Random Forest</td><td>শত গাছের ভোট</td><td>overfitting কম</td></tr>
<tr><td class="hl">Gradient Boosting</td><td>প্রতিটা গাছ আগের ভুল শেখে</td><td>সবচেয়ে শক্তিশালী</td></tr>
<tr><td class="hl">XGBoost</td><td>optimized boosting</td><td>Kaggle বিজয়ী</td></tr></table>

<div class="code-block"># ── STEP 1: What is a decision tree? ──
# A decision tree asks YES/NO questions to classify data.
# It's like the game "20 Questions" — each question splits the data.

# Example: "Should I play tennis?"
# Is it raining? → Yes → Is wind &gt; 15mph? → Yes → NO
#                                  → No → YES
#                → No → YES

from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)

# Train a decision tree:
tree = DecisionTreeClassifier(max_depth=3, random_state=42)
tree.fit(X, y)

# The tree learned questions like:
# "Is petal_length &lt; 2.5?" → if yes, setosa
# "Is petal_width &lt; 1.8?" → if yes, versicolor
# etc.

# Visualize the tree (text):
# from sklearn.tree import export_text
# print(export_text(tree, feature_names=load_iris().feature_names))

# KEY CONCEPTS:
# - ROOT: first question (most informative split)
# - BRANCHES: yes/no answers
# - LEAVES: final predictions
# - DEPTH: how many questions deep (max_depth controls this)
# - INFORMATION GAIN: how much a question reduces uncertainty</div>

<div class="code-block"># ── STEP 2: Entropy and information gain ──
# How does the tree decide WHICH question to ask?
# It picks the question that reduces ENTROPY (uncertainty) the most.

import numpy as np

def entropy(labels):
    """Measure uncertainty. High = mixed, Low = pure."""
    _, counts = np.unique(labels, return_counts=True)
    probs = counts / len(labels)
    return -np.sum(probs * np.log2(probs + 1e-10))

# Before any split (50 setosa, 50 versicolor, 50 virginica):
before = entropy([0]*50 + [1]*50 + [2]*50)
print(f"Entropy before split: {before:.3f} bits")  # 1.585 (max uncertainty)

# After perfect split (all setosa in one group):
after = entropy([0]*50)  # all same class
print(f"Entropy after perfect split: {after:.3f} bits")  # 0.0 (pure!)

# Information gain = how much entropy decreased:
info_gain = before - after
print(f"Information gain: {info_gain:.3f} bits")

# The tree picks splits with HIGHEST information gain.
# This is how it "learns" the best questions automatically.</div>

<div class="code-block"># ── STEP 3: Random Forest — wisdom of the crowd ──
# One tree overfits. Solution: build MANY trees and VOTE.

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Single tree (prone to overfitting):
single_tree = DecisionTreeClassifier(max_depth=10)
single_tree.fit(X_train, y_train)
print(f"Single tree: {single_tree.score(X_test, y_test):.1%}")

# Random forest (100 trees, vote):
forest = RandomForestClassifier(
    n_estimators=100,    # number of trees
    max_depth=5,         # each tree is shallow
    random_state=42
)
forest.fit(X_train, y_train)
print(f"Random forest: {forest.score(X_test, y_test):.1%}")

# WHY RANDOM FOREST WORKS:
# Each tree sees DIFFERENT data (bootstrap sampling)
# Each tree considers DIFFERENT features (random subset)
# This diversity → less overfitting → better generalization

# "Many weak learners combine into one strong learner"</div>

<div class="code-block"># ── STEP 4: Feature importance ──
# Random forest tells you WHICH features matter most.

# Get feature importance:
importances = forest.feature_importances_
features = load_iris().feature_names

# Sort by importance:
for name, imp in sorted(zip(features, importances), key=lambda x: -x[1]):
    print(f"  {name:20}: {imp:.3f}")
# petal length (cm)  : 0.421  ← most important!
# petal width (cm)   : 0.367
# sepal length (cm)  : 0.125
# sepal width (cm)   : 0.087

# This is FREE model interpretation — no extra cost!
# Use it to:
# - Understand what drives predictions
# - Remove useless features
# - Explain to stakeholders</div>

<div class="code-block"># ── STEP 5: Gradient boosting — each tree fixes errors ──
# Boosting: trees are built SEQUENTIALLY, each fixing previous errors.
# This is the most powerful classic ML technique.

from sklearn.ensemble import GradientBoostingClassifier

# Gradient Boosting:
gb = GradientBoostingClassifier(
    n_estimators=100,    # number of trees
    learning_rate=0.1,   # how fast each tree corrects
    max_depth=3,
    random_state=42
)
gb.fit(X_train, y_train)
print(f"Gradient Boosting: {gb.score(X_test, y_test):.1%}")

# RANDOM FOREST vs GRADIENT BOOSTING:
# ┌────────────────┬─────────────────┬───────────────────┐
# │ Aspect         │ Random Forest   │ Gradient Boosting │
# ├────────────────┼─────────────────┼───────────────────┤
# │ Tree building  │ Independent     │ Sequential        │
# │ Overfitting    │ Resistant       │ Can overfit       │
# │ Accuracy       │ Good            │ Usually better    │
# │ Speed          │ Fast (parallel) │ Slower (serial)   │
# │ Tuning         │ Easy            │ Needs care        │
# └────────────────┴─────────────────┴───────────────────┘

# XGBoost / LightGBM = optimized boosting implementations
# These win most Kaggle competitions for tabular data</div>

<div class="code-block"># ── STEP 6: Complete tree pipeline ──
# Full workflow: load → split → train → evaluate → interpret

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import classification_report, confusion_matrix
import numpy as np

# Load data:
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train with cross-validation:
model = RandomForestClassifier(n_estimators=100, random_state=42)
cv_scores = cross_val_score(model, X_train, y_train, cv=5)
print(f"CV Accuracy: {cv_scores.mean():.1%} ± {cv_scores.std():.1%}")

# Final training:
model.fit(X_train, y_train)

# Evaluate:
predictions = model.predict(X_test)
print(f"Test Accuracy: {(predictions == y_test).mean():.1%}")
print("\nClassification Report:")
# print(classification_report(y_test, predictions, target_names=load_iris().target_names))

# WHEN TO USE TREE-BASED MODELS:
# ✅ Tabular data (spreadsheets, databases)
# ✅ Need interpretability (feature importance)
# ✅ Mixed data types (numerical + categorical)
# ✅ Don't need feature scaling (trees don't care)
# ✅ Non-linear relationships

# THE ML HIERARCHY:
# 1. Start with logistic regression (baseline)
# 2. Try random forest (strong, easy)
# 3. If need more accuracy → XGBoost/LightGBM
# 4. If still not enough → deep learning
# Trees are the sweet spot for most tabular ML problems.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> ডিসিশন ট্রি যদি নিয়ন্ত্রণ না করো — গাছ অসীম গভীর হয়ে যায়। প্রতিটা training point-এর জন্য একটা করে পাতা — নিখুঁত training accuracy কিন্তু নতুন ডেটায় ব্যর্থ (overfitting)। সমাধান: max_depth সীমিত করো, minimum samples per leaf নির্ধারণ করো, অথবা random forest ব্যবহার করো।</div></div>

<div class="verse">يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"আল্লাহ তোমাদের মধ্যে যারা বিশ্বাস করে এবং যাদের জ্ঞান দেওয়া হয়েছে — তাদের মর্যাদা উন্নত করেন।" — কুরআন ৫৮:১১</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Ibn Sina elevated medicine through systematic questioning. The decision tree does the same — each question raises knowledge one degree. The forest unites many questioners — each seeing a slightly different truth.</div>
</div>

<div class="secret-box">🌳 <strong>বাজার রহস্য ৩:</strong> ডিসিশন ট্রি হলো প্রশ্নের গাছ — information gain সবচেয়ে বেশি এমন প্রশ্নে ভাগ হয়। র‍্যান্ডম ফরেস্ট = শত গাছের ভোট। Boosting = প্রতিটা গাছ আগের ভুল শেখে।<br><span class="en">A decision tree is a tree of questions — splitting where information gain is highest. Random forest = vote of hundreds of trees. Boosting = each tree learns from the previous one's errors.</span></div>`,
  senior:{
    title:"ট্রি চিন্তা — প্রশ্ন দিয়ে সিদ্ধান্ত",
    body:`<p><strong>Step ১:</strong> ডিসিশন ট্রি = প্রশ্নের গাছ। প্রতিটা শাখায় একটা প্রশ্ন।</p>
<p><strong>Step ২:</strong> Information gain = কোন প্রশ্ন সবচেয়ে বেশি entropy কমায়।</p>
<p><strong>Step ৩:</strong> একটা গাছ overfit করে। Random forest (১০০+ গাছ) কমায়।</p>
<p><strong>Step ৪:</strong> Gradient boosting = ধারাবাহিক গাছ, প্রতিটা আগের ভুল শেখে।</p>
<p><strong>Step ৫:</strong> Feature importance = কোন প্রশ্ন সবচেয়ে গুরুত্বপূর্ণ ছিল। ব্যাখ্যা সহজ।</p>`
  }
});

// ─── Door 4: দূরতম প্রাচীর নির্মাতা ─────────────
doors.push({
  num:4, icon:"🛡️", color:"#ff6b35", name:"দূরতম প্রাচীর নির্মাতা",
  subtitle:"The Farthest Wall Builder", tech:"Support Vector Machines (SVM)",
  spirit:"ফার্জ — সত্য আর মিথ্যার মধ্যে সবচেয়ে বড় দূরত্ব",
  secret:"SVM হলো এমন একটা রেখা খোঁজা যা দুই ক্লাসের মধ্যে সবচেয়ে বড় ব্যবধান (margin) রাখে। কার্নেল ট্রিক দিয়ে জটিল ডেটাও আলাদা করা যায় — উচ্চতর মাত্রায় তুলে।",
  recall:{
    q:"SVM-এ margin কী এবং kernel trick কীভাবে কাজ করে?",
    qen:"What is margin in SVM and how does the kernel trick work?",
    a:"Margin = দুই ক্লাসের মধ্যে সবচেয়ে কাছের পয়েন্টদের দূরত্ব। SVM সবচেয়ে বড় margin খুঁজে। Kernel trick = ডেটাকে উচ্চতর মাত্রায় তুলে আনা যাতে linear রেখা দিয়ে আলাদা করা যায়।",
    aen:"Margin = the distance between the closest points of two classes. SVM finds the largest margin. Kernel trick = lifting data to higher dimensions so a linear boundary can separate it."
  },
  story:`<p class="scene-setting">তুমি একটা শহরে আছো। দুই গোত্র — এক গোত্র উত্তরে, আর এক গোত্র দক্ষিণে। শহরের প্রধান চান — দুই গোত্রের মধ্যে একটা দেয়াল বানাতে। কিন্তু কোথায়? দেয়াল যদি এক গোত্রের কাছে হয় — অন্য গোত্র অসন্তুষ্ট। প্রধান চান — দেয়াল ঠিক মাঝখানে। দুই পক্ষ থেকে সবচেয়ে কাছের লোকদের দূরত্ব সমান হবে। এটাই SVM-এর margin। দেয়াল যত দূরে — তত নিরাপদ।</p>
<p class="scene-setting en">You are in a city. Two tribes — one to the north, one to the south. The city chief wants to build a wall between them. But where? If the wall is close to one tribe — the other is unhappy. The chief wants the wall exactly in the middle. The distance from the closest people on each side must be equal. This is SVM's margin. The wider the wall's buffer — the safer.</p>

<div class="dialogue">তোমার শিক্ষক এই দরজায় হলেন উমর আল-খায়্যামি (Umar al-Khayyami / Omar Khayyam) — ১১শ শতাব্দীর গণিতজ্ঞ যিনি ঘন সমীকরণ (cubic equations) সমাধান করেন এবং জ্যামিতিতে উচ্চতর মাত্রার ধারণা দেন। তাঁর বিশেষত্ব — তাঁর ডান হাতের কবজিতে একটা স্থায়ী পিতলের দাগ, কারণ তিনি ঘণ্টার পর ঘণ্টা জ্যামিতির যন্ত্র বানাতেন। তিনি বলেন — কিছু সমস্যা সমাধান করা যায় না ২D-তে। কিন্তু ৩D-তে তুলে নিলে — সহজ। এটাই kernel trick।</div>
<div class="dialogue en">Your teacher in this door is Umar al-Khayyami (Omar Khayyam) — 11th-century mathematician who solved cubic equations and introduced concepts of higher dimensions in geometry. His signature — a permanent brass stain on his right wrist, from hours of crafting geometric instruments. He says — some problems cannot be solved in 2D. But lift them to 3D — easy. This is the kernel trick.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>SVM-এর সারমর্ম:</strong>
<br><strong>max margin = max(2/||w||)</strong>
<br>Support vectors = সবচেয়ে কাছের পয়েন্ট (এরাই দেয়াল ঠিক করে)
<br><strong>Kernel trick:</strong> K(xᵢ, xⱼ) = (xᵢ·xⱼ + 1)² — ডেটাকে উচ্চতর মাত্রায় তোলে বিনা খরচে।</div></div>

<div class="diagram">
  <div class="diag-title">SVM — সবচেয়ে বড় Margin</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <line class="axis" x1="40" y1="220" x2="520" y2="220"/>
    <line class="axis" x1="40" y1="220" x2="40" y2="20"/>
    <line stroke="#2dd4bf" stroke-width="2" stroke-dasharray="5,4" x1="100" y1="200" x2="460" y2="60"/>
    <text class="lbl-cyan" x="400" y="100">margin সীমা</text>
    <line stroke="#2dd4bf" stroke-width="2" stroke-dasharray="5,4" x1="80" y1="180" x2="440" y2="40"/>
    <line stroke="#ff6b35" stroke-width="3" x1="90" y1="190" x2="450" y2="50"/>
    <text class="lbl-hot" x="320" y="135">decision boundary</text>
    <circle class="node-hot" cx="120" cy="180" r="6" fill="none" stroke="#ff6b35" stroke-width="2.5"/>
    <circle class="node-hot" cx="200" cy="140" r="6" fill="none" stroke="#ff6b35" stroke-width="2.5"/>
    <text class="lbl-hot" x="110" y="210">support vector</text>
    <circle class="node-leaf" cx="150" cy="170" r="4"/>
    <circle class="node-leaf" cx="100" cy="190" r="4"/>
    <circle class="node-leaf" cx="180" cy="150" r="4"/>
    <circle class="node-cyan" cx="400" cy="80" r="6" fill="none" stroke="#2dd4bf" stroke-width="2.5"/>
    <circle class="node-cyan" cx="350" cy="95" r="6" fill="none" stroke="#2dd4bf" stroke-width="2.5"/>
    <text class="lbl-cyan" x="380" y="115">support vector</text>
    <circle class="node-moon" cx="380" cy="90" r="4"/>
    <circle class="node-moon" cx="420" cy="70" r="4"/>
    <circle class="node-moon" cx="440" cy="60" r="4"/>
    <text class="lbl-sm" x="100" y="50">class 🔴</text>
    <text class="lbl-sm" x="420" y="210">class 🔵</text>
  </svg>
  <div class="diag-cap">SVM: সবচেয়ে বড় margin খুঁজে — support vectors দেয়াল ঠিক করে</div>
</div>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ সরু margin</div>দেয়াল এক পক্ষের কাছে। সামান্য noise হলে ভুল পক্ষে চলে যায়। Overfitting। কমলা গোত্র অসন্তুষ্ট।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ প্রশস্ত margin</div>দেয়াল ঠিক মাঝখানে। দুই পক্ষ থেকে সমান দূরত্ব। Noise সহ্য করতে পারে। Generalizes ভালো।</div>
</div>

<div class="code-block"># ── STEP 1: What is SVM? ──
# SVM (Support Vector Machine) finds the WIDEST GAP (margin)
# between two classes.

# Imagine two groups of points on paper.
# You can draw many lines to separate them.
# SVM draws the line that leaves MAXIMUM SPACE on both sides.
# This "maximum margin" makes it generalize better.

from sklearn.svm import SVC
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=100, n_features=2,
                           n_informative=2, n_redundant=0, random_state=42)

# Linear SVM (straight line boundary):
svm = SVC(kernel="linear", C=1.0)
svm.fit(X, y)
print(f"Linear SVM accuracy: {svm.score(X, y):.1%}")

# KEY CONCEPTS:
# - Support vectors: the CLOSEST points to the boundary
# - Margin: the distance between boundary and support vectors
# - SVM maximizes this margin
# - Only support vectors matter (not all data points)</div>

<div class="code-block"># ── STEP 2: The kernel trick ──
# What if data can't be separated by a straight line?

# Example: concentric circles (impossible to separate linearly)
from sklearn.datasets import make_circles

X_circles, y_circles = make_circles(n_samples=100, noise=0.1, factor=0.5)

# Linear kernel FAILS:
svm_linear = SVC(kernel="linear")
svm_linear.fit(X_circles, y_circles)
print(f"Linear kernel: {svm_linear.score(X_circles, y_circles):.1%}")
# ~50% (just guessing — can't separate circles with a line)

# RBF (Radial Basis Function) kernel WORKS:
svm_rbf = SVC(kernel="rbf", C=1.0, gamma="scale")
svm_rbf.fit(X_circles, y_circles)
print(f"RBF kernel: {svm_rbf.score(X_circles, y_circles):.1%}")
# ~100% (perfectly separates circles!)

# THE KERNEL TRICK:
# Data not separable in 2D? Lift it to 3D (or higher).
# In higher dimensions, a flat plane CAN separate it.
# The kernel computes this lifting IMPLICITLY — no need
# to actually transform the data. Mathematical magic!</div>

<div class="code-block"># ── STEP 3: SVM parameters ──
# Two key parameters control SVM behavior:

# C (regularization):
# High C (100): strict — every point must be classified correctly
#   → tight boundary, risk of overfitting
# Low C (0.01): relaxed — allow some errors for wider margin
#   → loose boundary, risk of underfitting

# gamma (for RBF kernel):
# High gamma: each point only affects nearby region
#   → very wiggly boundary, overfitting
# Low gamma: each point affects far regions
#   → smooth boundary, may underfit

# Hyperparameter tuning:
from sklearn.model_selection import GridSearchCV

# Try different C and gamma values:
param_grid = {
    "C": [0.1, 1, 10, 100],
    "gamma": ["scale", 0.1, 1],
    "kernel": ["rbf"]
}

grid = GridSearchCV(SVC(), param_grid, cv=5)
grid.fit(X, y)

print(f"Best parameters: {grid.best_params_}")
print(f"Best CV score: {grid.best_score_:.1%}")

# KERNEL OPTIONS:
# ┌──────────────┬──────────────────────────────────┐
# │ Kernel       │ When to use                     │
# ├──────────────┼──────────────────────────────────┤
# │ linear       │ linearly separable data        │
# │ rbf          │ non-linear (most common)       │
# │ poly         │ polynomial relationships       │
# │ sigmoid      │ similar to neural network      │
# └──────────────┴──────────────────────────────────┘</div>

<div class="code-block"># ── STEP 4: SVM vs other algorithms ──
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)

# Compare three classifiers:
models = {
    "Logistic Regression": LogisticRegression(max_iter=200),
    "SVM (RBF)": SVC(kernel="rbf", C=1.0),
    "Random Forest": RandomForestClassifier(n_estimators=100),
}

for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5)
    print(f"  {name:25}: {scores.mean():.1%} ± {scores.std():.1%}")

# WHEN TO USE SVM:
# ✅ Small to medium datasets (&lt; 10,000 samples)
# ✅ High-dimensional data (many features)
# ✅ Need precise decision boundaries
# ✅ Text classification (with TF-IDF features)

# WHEN NOT TO USE SVM:
# ❌ Large datasets (slow: O(n²) to O(n³))
# ❌ Need probability estimates (SVM gives distances, not probs)
# ❌ Multi-class with many classes (SVM is binary by nature)

# SVM is POWERFUL but SLOW. Use for small data, not big data.</div>

<div class="code-block"># ── STEP 5: SVM for real-world problems ──
# Example: text classification with SVM

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
from sklearn.pipeline import Pipeline

# SVM is excellent for text (high-dimensional sparse data):
text_clf = Pipeline([
    ("tfidf", TfidfVectorizer(max_features=5000)),
    ("svm", LinearSVC(C=1.0)),
])

# Training data: (text, label)
texts = [
    "I love this product, amazing quality!",
    "Terrible service, never buying again.",
    "Best purchase I ever made.",
    "Worst experience, do not recommend.",
    "Great value for money.",
    "Complete waste of money.",
]
labels = ["positive", "negative", "positive", "negative", "positive", "negative"]

text_clf.fit(texts, labels)

# Predict:
test_texts = ["This is great!", "Awful and disappointing."]
predictions = text_clf.predict(test_texts)
for text, label in zip(test_texts, predictions):
    print(f"  '{text}' → {label}")

# LinearSVC: optimized SVM for linear kernels
# Faster than SVC(kernel='linear') for large data
# The standard choice for text classification</div>

<div class="code-block"># ── STEP 6: SVM summary and best practices ──
# ┌─────────────────────┬─────────────────────────────────────┐
# │ Aspect              │ Detail                             │
# ├─────────────────────┼─────────────────────────────────────┤
# │ What it does        │ Find max-margin decision boundary  │
# │ Best for            │ Small/medium data, high dimensions │
# │ Kernel trick        │ Lift to higher dims for separation │
# │ Key params          │ C (margin vs errors), gamma (RBF)  │
# │ Speed               │ Slow for large data (O(n²)+)       │
# │ Probability         │ Not native (need Platt scaling)    │
# │ Interpretability    │ Support vectors show key points    │
# └─────────────────────┴─────────────────────────────────────┘

# SVM DECISION TREE:
# 1. Is data linearly separable? → LinearSVC (fast)
# 2. Small non-linear data? → SVC(kernel='rbf')
# 3. Large non-linear data? → Use Random Forest or Neural Network
# 4. Text classification? → LinearSVC with TF-IDF
# 5. Need probabilities? → Use Logistic Regression instead

# THE BIGGER PICTURE:
# SVM was THE most popular classifier before deep learning (2000s).
# Still excellent for:
# - Small datasets (where deep learning can't train)
# - High-dimensional data (text, bioinformatics)
# - When you need a strong, principled baseline
# Deep learning replaced it for images/audio/text generation,
# but SVM is still relevant for tabular and small data.

# In practice: try SVM after Logistic Regression,
# before moving to Random Forest or Deep Learning.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> SVM বড় ডেটায় ধীর (O(n²) বা তার বেশি)। ১০০০০+ স্যাম্পল হলে neural network বা random forest বেশি কার্যকর। SVM সবচেয়ে ভালো কাজ করে ছোট-মাঝারি ডেটায় যেখানে features clear।</div></div>

<div class="verse">يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"হে বিশ্বাসীগণ! আল্লাহর জন্য ন্যায়ের উপর দাঁড়াও — সাক্ষী হও ইনসাফের।" — কুরআন ৫:৮</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Justice requires equal distance from both sides. SVM builds the wall of maximum margin — perfectly equidistant. Omar Khayyam showed that higher dimensions reveal solutions invisible below. The kernel trick is mathematical justice — fairness in a higher space.</div>
</div>

<div class="secret-box">🛡️ <strong>বাজার রহস্য ৪:</strong> SVM হলো সবচেয়ে বড় margin খোঁজা — সত্য আর মিথ্যার মধ্যে সর্বোচ্চ ব্যবধান। Kernel trick ডেটাকে উচ্চতর মাত্রায় তুলে জটিল সীমানা তৈরি করে।<br><span class="en">SVM finds the maximum margin — the widest gap between truth and falsehood. The kernel trick lifts data to higher dimensions to create complex boundaries.</span></div>`,
  senior:{
    title:"Margin চিন্তা — সত্যের সুরক্ষা",
    body:`<p><strong>Step ১:</strong> SVM = সবচেয়ে বড় margin খোঁজা। দুই ক্লাসের মধ্যে সর্বোচ্চ ব্যবধান।</p>
<p><strong>Step ২:</strong> Support vectors = সবচেয়ে কাছের পয়েন্ট। এরাই দেয়াল ঠিক করে।</p>
<p><strong>Step ৩:</strong> Linear kernel = সরলরেখা। RBF kernel = জটিল আকৃতি।</p>
<p><strong>Step ৪:</strong> C parameter = margin বনাম error এর সাম্য। বড় C = কম error, ছোট margin।</p>
<p><strong>Step ৫:</strong> বড় ডেটায় ধীর। ছোট-মাঝারি ডেটার জন্য সেরা।</p>`
  }
});

// ─── Door 5: প্রতিবেশীর প্রদীপশিখা ─────────────
doors.push({
  num:5, icon:"🏠", color:"#5b9eff", name:"প্রতিবেশীর প্রদীপশিখা",
  subtitle:"The Neighbor's Lamp", tech:"k-NN & Instance-Based Learning",
  spirit:"জিওয়ার — প্রতিবেশী, নিকটতম মানুষ",
  secret:"k-NN হলো সবচেয়ে সহজ অ্যালগরিদম — কোনো মডেল ট্রেন করে না। শুধু মনে রাখে। নতুন ডেটা এলে দেখে — কারা সবচেয়ে কাছের প্রতিবেশী? তাদের সিদ্ধান্ত অনুসরণ করে। সহজ, কিন্তু শক্তিশালী।",
  recall:{
    q:"k-NN কীভাবে কাজ করে এবং k এর মান কীভাবে বেছো?",
    qen:"How does k-NN work and how do you choose k?",
    a:"k-NN নতুন ডেটার k-তম নিকটতম প্রতিবেশী দেখে। সংখ্যাগরিষ্ঠ ক্লাস নির্বাচন করে। k ছোট = noise sensitive, k বড় = underfit। সাধারণত k=৩ থেকে ৭। sqrt(n) নিয়মও আছে।",
    aen:"k-NN looks at the k nearest neighbors of new data. It picks the majority class. Small k = noise sensitive, large k = underfit. Usually k=3 to 7. sqrt(n) rule also used."
  },
  story:`<p class="scene-setting">তুমি একটা নতুন মহল্লায় এসেছো। একটা রাস্তায় দাঁড়িয়ে আছো — জানো না কোন দোকানে কী মিলে। কী করবে? সবচেয়ে কাছের প্রতিবেশীকে জিজ্ঞেস করো। যদি ৩টা প্রতিবেশীর মধ্যে ২ জন বলে — ডানে মসজিদ, বামে বাজার — তুমি সংখ্যাগরিষ্ঠ মতে চলো। এটাই k-NN। কোনো জটিল মডেল নেই — শুধু প্রতিবেশী দেখো। যত কাছের প্রতিবেশী — তত বেশি তাদের কথা মান্য।</p>
<p class="scene-setting en">You arrive in a new neighborhood. Standing on a street — you don't know which shop sells what. What do you do? Ask the nearest neighbors. If out of 3 neighbors, 2 say — mosque to the right, market to the left — you follow the majority. This is k-NN. No complex model — just look at neighbors. The closer the neighbor — the more weight their opinion carries.</p>

<div class="dialogue">তোমার শিক্ষক এই দরজায় হলেন রুকনুদ্দিন আল-কাশী (Rukn al-Din al-Kashi) — ১৫শ শতাব্দীর গণিতজ্ঞ যিনি দূরত্ব গণনার নতুন পদ্ধতি আবিষ্কার করেন। তাঁর বিশেষত্ব — তাঁর বাঁ চোখের উপর একটা পাতলা দাগ, কারণ তিনি জ্যোতির্বিজ্ঞানের দূরত্ব মাপার যন্ত্র চোখের কাছে ধরতেন। তিনি বলেন — তারা থেকে পৃথিবীর দূরত্ব কীভাবে মাপি? কাছের তারার সাথে তুলনা করি। নিকটতম প্রতিবেশীই সবচেয়ে নির্ভরযোগ্য গাইড।</div>
<div class="dialogue en">Your teacher in this door is Rukn al-Din al-Kashi — 15th-century mathematician who discovered new methods for calculating distances. His signature — a thin scar over his left eye, from holding astronomical distance instruments close to his face. He says — how do I measure the distance to a star? I compare it with nearby stars. The nearest neighbor is the most reliable guide.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>k-NN অ্যালগরিদম:</strong>
<br>① নতুন ডেটা পয়েন্ট নাও
<br>② ট্রেনিং ডেটা থেকে k-তম নিকটতম প্রতিবেশী খুঁজে বের করো (Euclidean দূরত্ব)
<br>③ Classification: সংখ্যাগরিষ্ঠ ক্লাস নাও
<br>④ Regression: গড় নাও
<br><strong>দূরত্ব: d(x,y) = √Σ(xᵢ - yᵢ)²</strong> (Euclidean, Book ৩০ Door ১)</div></div>

<table class="kv-table"><tr><th>দূরত্ব পরিমাপ</th><th>সূত্র</th><th>ব্যবহার</th></tr>
<tr><td class="hl">Euclidean</td><td>√Σ(xᵢ-yᵢ)²</td><td>সবচেয়ে সাধারণ</td></tr>
<tr><td class="hl">Manhattan</td><td>Σ|xᵢ-yᵢ|</td><td>grid-based</td></tr>
<tr><td class="hl">Cosine</td><td>1 - cos(θ)</td><td>text/embeddings</td></tr>
<tr><td class="hl">Hamming</td><td>ভিন্ন উপাদান সংখ্যা</td><td>categorical</td></tr></table>

<div class="diagram">
  <div class="diag-title">k-NN — নতুন পয়েন্টের ৫ নিকটতম প্রতিবেশী</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <line class="axis" x1="40" y1="220" x2="520" y2="220"/>
    <line class="axis" x1="40" y1="220" x2="40" y2="20"/>
    <circle class="node-hot" cx="100" cy="180" r="4"/>
    <circle class="node-hot" cx="140" cy="160" r="4"/>
    <circle class="node-hot" cx="80" cy="200" r="4"/>
    <circle class="node-hot" cx="160" cy="190" r="4"/>
    <circle class="node-hot" cx="120" cy="140" r="4"/>
    <circle class="node-leaf" cx="380" cy="80" r="4"/>
    <circle class="node-leaf" cx="420" cy="60" r="4"/>
    <circle class="node-leaf" cx="400" cy="100" r="4"/>
    <circle class="node-leaf" cx="440" cy="90" r="4"/>
    <circle class="node-leaf" cx="360" cy="60" r="4"/>
    <circle class="node-purple" cx="250" cy="130" r="8" fill="none" stroke="#b37feb" stroke-width="3"/>
    <text class="lbl-sm" x="260" y="125">নতুন ?</text>
    <circle cx="250" cy="130" r="60" fill="none" stroke="#5eead4" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
    <text class="lbl-cyan" x="170" y="220">k=৫ ব্যাসার্ধ</text>
    <line stroke="#5eead4" stroke-width="1" stroke-dasharray="2,2" x1="250" y1="130" x2="160" y2="190"/>
    <line stroke="#5eead4" stroke-width="1" stroke-dasharray="2,2" x1="250" y1="130" x2="120" y2="140"/>
    <line stroke="#5eead4" stroke-width="1" stroke-dasharray="2,2" x1="250" y1="130" x2="140" y2="160"/>
    <line stroke="#5eead4" stroke-width="1" stroke-dasharray="2,2" x1="250" y1="130" x2="380" y2="80"/>
    <line stroke="#5eead4" stroke-width="1" stroke-dasharray="2,2" x1="250" y1="130" x2="360" y2="60"/>
    <text class="lbl-hot" x="180" y="55">৩টা 🔴</text>
    <text class="lbl-leaf" x="380" y="130">২টা 🟢</text>
    <text class="lbl-amber" x="250" y="200" text-anchor="middle">→ সিদ্ধান্ত: ক্লাস 🔴 (৩-২ ভোটে)</text>
  </svg>
  <div class="diag-cap">k=৫: নতুন পয়েন্টের ৫ নিকটতম প্রতিবেশী → সংখ্যাগরিষ্ঠ ক্লাস</div>
</div>

<div class="dialogue">আল-কাশী বলেন — k-NN-এর সৌন্দর্য একটাই: কোনো training নেই। মুখস্থ করার মতো weight নেই। শুধু ডেটা রাখো। নতুন প্রশ্ন এলে — খুঁজো, কারা কাছে? এটাই instance-based learning। কিন্তু সমস্যা — ধীর। কারণ প্রতিটা নতুন প্রশ্নে সব ডেটার সাথে তুলনা করতে হয়। এটাই lazy learning।</div>
<div class="dialogue en">Al-Kashi says — k-NN's beauty is one thing: no training. No weights to memorize. Just store the data. When a new question arrives — search, who is near? This is instance-based learning. But the problem — slow. Because every new question compares against all data. This is lazy learning.</div>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ k=১</div>শুধু এক প্রতিবেশী দেখো। Noise এলে ভুল। একজন প্রতিবেশী ভুল পথ দেখালে — তুমি ভুল। Overfitting।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ k=৫</div>৫ জন প্রতিবেশীর সংখ্যাগরিষ্ঠ। Noise কাটে। ভালো সিদ্ধান্ত। k খুব বড় হলে underfitting — সবসময় সবচেয়ে সাধারণ ক্লাস দেয়।</div>
</div>

<div class="code-block"># ── STEP 1: What is k-NN? ──
# k-NN (k-Nearest Neighbors) = "tell me who your neighbors are,
# and I'll tell you who you are."

# To classify a new point:
# 1. Find the k CLOSEST training points
# 2. Let them VOTE (majority wins)

# k-NN has NO TRAINING — it just stores all data.
# At prediction time, it searches for nearest neighbors.
# This is called "lazy learning" (no work until prediction).

# SIMPLEST possible classifier:
from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Data:
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# CRITICAL: scale features first! (k-NN uses distances)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train (actually just stores the data):
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train_scaled, y_train)
print(f"k=3 accuracy: {knn.score(X_test_scaled, y_test):.1%}")</div>

<div class="code-block"># ── STEP 2: Choosing k ──
# k controls the model's behavior:

# k=1: look at SINGLE nearest neighbor → very sensitive, overfits
# k=large: look at MANY neighbors → too smooth, underfits
# Rule of thumb: start with k = sqrt(n), make it ODD (avoid ties)

# Test different k values:
for k in [1, 3, 5, 7, 11, 21]:
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X_train_scaled, y_train)
    acc = knn.score(X_test_scaled, y_test)
    print(f"  k={k:2d}: {acc:.1%}")

# THE BIAS-VARIANCE TRADEOFF:
# k=1: high variance (captures noise), low bias
# k=large: low variance (smooth), high bias
# k=moderate: the sweet spot (usually k=5 or k=7)

# Find best k with cross-validation:
from sklearn.model_selection import cross_val_score

best_k, best_score = 1, 0
for k in range(1, 30, 2):  # odd numbers only
    knn = KNeighborsClassifier(n_neighbors=k)
    scores = cross_val_score(knn, X_train_scaled, y_train, cv=5)
    if scores.mean() > best_score:
        best_k, best_score = k, scores.mean()

print(f"\nBest k={best_k} with CV score {best_score:.1%}")</div>

<div class="code-block"># ── STEP 3: Distance metrics ──
# k-NN depends on how you measure "closeness".

import numpy as np

def euclidean(a, b):
    """Straight-line distance."""
    return np.sqrt(np.sum((a - b) ** 2))

def manhattan(a, b):
    """City-block distance (taxicab)."""
    return np.sum(np.abs(a - b))

def cosine_similarity(a, b):
    """Angle between vectors (1=identical, 0=unrelated)."""
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Example:
point_a = np.array([1, 2])
point_b = np.array([4, 6])

print(f"Euclidean: {euclidean(point_a, point_b):.2f}")    # 5.00
print(f"Manhattan: {manhattan(point_a, point_b):.2f}")    # 7.00
print(f"Cosine sim: {cosine_similarity(point_a, point_b):.4f}")  # 0.904

# In scikit-learn:
# KNeighborsClassifier(metric='euclidean')  # default
# KNeighborsClassifier(metric='manhattan')
# KNeighborsClassifier(metric='cosine')     # good for text/embeddings

# WHICH METRIC TO USE:
# ┌──────────────┬──────────────────────────────────┐
# │ Metric       │ When to use                     │
# ├──────────────┼──────────────────────────────────┤
# │ Euclidean    │ general purpose (default)       │
# │ Manhattan    │ grid-like data, high dimensions │
# │ Cosine       │ text, embeddings (direction)    │
# │ Minkowski    │ generalization of Euc/Manh      │
# └──────────────┴──────────────────────────────────┘</div>

<div class="code-block"># ── STEP 4: Feature scaling is CRITICAL ──
# k-NN uses DISTANCE — if features have different scales,
# the larger feature dominates.

from sklearn.preprocessing import StandardScaler, MinMaxScaler
import numpy as np

# BAD: unscaled data
X_bad = np.array([
    [25, 50000],    # age=25, income=50000
    [30, 60000],
    [35, 70000],
])
# Age range: 25-35 (difference ~10)
# Income range: 50000-70000 (difference ~20000)
# k-NN will be DOMINATED by income — age barely matters!

# GOOD: standardized data
scaler = StandardScaler()
X_good = scaler.fit_transform(X_bad)
print("Standardized (mean=0, std=1):")
print(X_good)
# Now both features contribute equally!

# TWO COMMON SCALERS:
# StandardScaler: (x - mean) / std → mean=0, std=1
# MinMaxScaler: (x - min) / (max - min) → range 0 to 1

# ALWAYS: fit scaler on TRAINING data only, then transform test data
# scaler.fit(X_train)  # learn mean/std from training
# X_train_s = scaler.transform(X_train)
# X_test_s = scaler.transform(X_test)  # use SAME mean/std</div>

<div class="code-block"># ── STEP 5: k-NN for regression ──
# k-NN can also predict NUMBERS (regression).

from sklearn.neighbors import KNeighborsRegressor

# Instead of voting, k-NN regression AVERAGES the neighbors:
knn_reg = KNeighborsRegressor(n_neighbors=3, weights="distance")
knn_reg.fit(X_train_scaled, y_train)

# weights options:
# "uniform": all neighbors count equally
# "distance": closer neighbors count MORE

# Predict:
predictions = knn_reg.predict(X_test_scaled)
print(f"Regression predictions: {predictions[:5]}")

# k-NN REGRESSION vs CLASSIFICATION:
# Classification: majority vote of k neighbors
# Regression: average (or weighted average) of k neighbors</div>

<div class="code-block"># ── STEP 6: k-NN connection to RAG and vector search ──
# k-NN is THE algorithm behind modern AI search!

# RAG (Retrieval Augmented Generation):
# 1. Convert query to embedding vector
# 2. Find k NEAREST document embeddings (k-NN!)
# 3. Feed those documents to the LLM as context

# This is literally k-NN on embeddings!

# Vector databases (Pinecone, Milvus, pgvector):
# They are k-NN search engines optimized for HIGH dimensions.

# Example: semantic search with k-NN
# from sentence_transformers import SentenceTransformer
# import numpy as np
#
# model = SentenceTransformer("all-MiniLM-L6-v2")
#
# # Embed documents:
# docs = ["Python is great", "I love coding", "The weather is nice"]
# doc_embeddings = model.encode(docs)
#
# # Embed query:
# query = "programming language"
# query_embedding = model.encode([query])
#
# # k-NN search (find closest documents):
# from sklearn.metrics.pairwise import cosine_similarity
# similarities = cosine_similarity(query_embedding, doc_embeddings)[0]
#
# # Sort by similarity:
# ranked = sorted(zip(docs, similarities), key=lambda x: -x[1])
# for doc, sim in ranked:
#     print(f"  {sim:.3f}: {doc}")

# WHEN TO USE k-NN:
# ✅ Simple baseline (fast to try, no training)
# ✅ Low-dimensional data (&lt; 100 features)
# ✅ Vector/embedding search (RAG, recommendation)
# ✅ Small datasets

# WHEN NOT TO USE k-NN:
# ❌ High-dimensional data (curse of dimensionality)
# ❌ Large datasets (slow: O(n) per query)
# ❌ Need fast inference (each query scans all data)

# k-NN SUMMARY:
# Simplest ML algorithm. No training.
# Just: "find nearest neighbors, vote."
# But it's the FOUNDATION of modern vector search and RAG!
# From classic ML to modern AI — k-NN connects them.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ — Feature Scaling:</strong> k-NN distance-based — তাই feature scaling অপরিহার্য। যদি feature একটার range ০-১ আর আরেকটার ০-১০০০০ — বড় feature dominate করবে। সমাধান: StandardScaler বা MinMaxScaler দিয়ে সব feature একই scale-এ আনো। এটা না করলে k-NN ব্যর্থ।</div></div>

<div class="callout tip"><span class="co-icon">📖</span><div><strong>k-NN আর LLM — সংযোগ:</strong> তুমি Book ১৮ (Embeddings) পড়েছো। RAG (Book ১০) হলো মূলত k-NN! Query embedding → vector database-এ খুঁজো k-তম নিকটতম chunk → সেগুলো দিয়ে উত্তর। k-NN শুধু classic ML নয় — modern RAG-এর ভিত্তি।</div></div>

<div class="verse">وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا ۝ وَبِالْوَالِدَيْنِ إِحْسَانًا وَبِذِي الْقُرْبَىٰ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"ইবাদত করো আল্লাহর, কাউকে শরিক করো না — এবং মাতাপিতার প্রতি ভালো ব্যবহার করো এবং আত্মীয়ের প্রতি।" — কুরআন ৪:৩৬</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">The Quran commands kindness to the nearest of kin (dhi al-qurba). k-NN follows the same principle — trust the nearest neighbors. Proximity is a form of kinship. The closest data points are the most reliable guides.</div>
</div>

<div class="secret-box">🏠 <strong>বাজার রহস্য ৫:</strong> k-NN হলো নিকটতম প্রতিবেশীর সিদ্ধান্ত মানা। কোনো training নেই — শুধু খুঁজো কারা কাছে। সহজ কিন্তু শক্তিশালী। RAG (Book ১০) মূলত k-NN — query-র নিকটতম chunk খুঁজে বের করা।<br><span class="en">k-NN follows the nearest neighbors' decision. No training — just search for who is near. Simple but powerful. RAG (Book 10) is essentially k-NN — finding the nearest chunks to a query.</span></div>`,
  senior:{
    title:"প্রতিবেশী চিন্তা — সহজ কিন্তু শক্তিশালী",
    body:`<p><strong>Step ১:</strong> k-NN = কোনো training নেই। নতুন ডেটা এলে নিকটতম k প্রতিবেশী দেখো।</p>
<p><strong>Step ২:</strong> Classification: সংখ্যাগরিষ্ঠ ভোট। Regression: গড়।</p>
<p><strong>Step ৩:</strong> k ছোট = noise sensitive (overfit)। k বড় = underfit। সাধারণত k=৩-৭।</p>
<p><strong>Step ৪:</strong> Feature scaling অপরিহার্য — নাহলে বড় feature dominate করে।</p>
<p><strong>Step ৫:</strong> RAG (Book ১০) মূলত k-NN — embeddings এর নিকটতম chunk খুঁজা।</p>`
  }
});
