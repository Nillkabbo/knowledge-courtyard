// ═══════════════════════════════════════════════
// মেশিনের বাজার — The Marketplace of Algorithms
// Book 31 · Doors 6-10
// Classic Machine Learning
// ═══════════════════════════════════════════════
// (doors array declared in doors-1-5.js)

// ─── Door 6: কাফেলার সরাইখানা ─────────────────
doors.push({
  num:6, icon:"🏘️", color:"#2dd4bf", name:"কাফেলার সরাইখানা",
  subtitle:"The Caravanserai", tech:"k-Means Clustering & Unsupervised Learning",
  spirit:"তাহকিক — সত্যকে খুঁজে বের করা, গোষ্ঠীবদ্ধ করা",
  secret:"k-Means হলো unsupervised learning — কোনো লেবেল ছাড়াই ডেটাকে গ্রুপে ভাগ করে। কাফেলার সরাইখানার মতো — ভ্রমণকারীরা স্বাভাবিকভাবেই গ্রুপে ভাগ হয়। k টা কেন্দ্র বেছে, প্রতিটা পয়েন্ট নিকটতম কেন্দ্রে যায়, কেন্দ্র আবার আপডেট হয়।",
  recall:{
    q:"k-Means কীভাবে কাজ করে এবং unsupervised learning কী?",
    qen:"How does k-Means work and what is unsupervised learning?",
    a:"Unsupervised = কোনো লেবেল নেই, ডেটার প্যাটার্ন খুঁজি। k-Means: ১) k টা কেন্দ্র বেছো, ২) প্রতিটা পয়েন্ট নিকটতম কেন্দ্রে যায়, ৩) কেন্দ্র গড় করে আপডেট, ৪) বারবার। Converge হলে থামে।",
    aen:"Unsupervised = no labels, find patterns in data. k-Means: 1) choose k centers, 2) assign each point to nearest center, 3) update centers as mean, 4) repeat until convergence."
  },
  story:`<p class="scene-setting">রেশম পথে একটা কাফেলা সরাইখানায় এসেছে। শত শত ভ্রমণকারী — ব্যবসায়ী, তীর্থযাত্রী, পণ্ডিত। সরাইদার একটা সমস্যায় আছেন — সবাইকে কোথায় বসাবেন? তিনি লক্ষ্য করেন — মানুষ স্বাভাবিকভাবেই গ্রুপে ভাগ হয়। ব্যবসায়ীরা একসাথে, তীর্থযাত্রীরা আলাদা, পণ্ডিতরা আলাদা। কেউ বলে নি কোথায় বসতে — স্বাভাবিক আকর্ষণে গ্রুপ তৈরি হয়েছে। এটাই unsupervised learning। কোনো লেবেল নেই — প্যাটার্ন নিজে থেকে আসে।</p>
<p class="scene-setting en">A caravan arrives at a caravanserai on the Silk Road. Hundreds of travelers — merchants, pilgrims, scholars. The innkeeper faces a problem — where to seat everyone? He notices — people naturally form groups. Merchants together, pilgrims separate, scholars apart. No one was told where to sit — natural attraction created the groups. This is unsupervised learning. No labels — patterns emerge on their own.</p>

<div class="dialogue">তোমার শিক্ষক এই দরজায় হলেন আবুল-ফাদল আল-হাসান (Abu'l-Fadl al-Hasan) — ১০ম শতাব্দীর ভূগোলবিদ যিনি মানচিত্রে গ্রুপ চিহ্নিত করার পদ্ধতি তৈরি করেন। তাঁর বিশেষত্ব — তাঁর ডান হাতের আঙুলগুলো সবসময় কালি মাখানো, কারণ তিনি মানচিত্রে পয়েন্ট চিহ্নিত করতেন। তিনি বলেন — আমি শহরগুলোকে গ্রুপ করি — কে কার কাছে? কোন শহরগুলো এক অঞ্চলে? এটাই clustering। প্রতিটা গ্রুপে একটা কেন্দ্র — যেমন একটা প্রধান শহর।</div>
<div class="dialogue en">Your teacher in this door is Abu'l-Fadl al-Hasan — 10th-century geographer who developed methods for marking groups on maps. His signature — his right-hand fingers are always ink-stained, from marking points on maps. He says — I group cities — who is near whom? Which cities form a region? This is clustering. Each group has a center — like a capital city.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>k-Means অ্যালগরিদম (Lloyd, 1957):</strong>
<br>① k টা কেন্দ্র (centroid) এলোমেলোভাবে বেছো
<br>② প্রতিটা পয়েন্টকে নিকটতম কেন্দ্রে যুক্ত করো (Euclidean দূরত্ব)
<br>③ প্রতিটা কেন্দ্র আপডেট করো = সেই গ্রুপের সব পয়েন্টের গড়
<br>④ ধাপ ২-৩ বারবার — যতক্ষণ না কেন্দ্র বদলানো বন্ধ হয় (convergence)
<br>Loss = WCSS = প্রতিটা পয়েন্ট তার কেন্দ্র থেকে কতটা দূরে</div></div>

<div class="diagram">
  <div class="diag-title">k-Means — ৩ ক্লাস্টারে ভাগ</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <line class="axis" x1="40" y1="220" x2="520" y2="220"/>
    <line class="axis" x1="40" y1="220" x2="40" y2="20"/>
    <circle class="node-hot" cx="100" cy="180" r="4"/>
    <circle class="node-hot" cx="130" cy="170" r="4"/>
    <circle class="node-hot" cx="90" cy="200" r="4"/>
    <circle class="node-hot" cx="120" cy="150" r="4"/>
    <circle class="node-hot" cx="110" cy="190" r="4"/>
    <circle cx="110" cy="178" r="8" fill="none" stroke="#ff6b35" stroke-width="3"/>
    <text class="lbl-hot" x="70" y="140">Centroid ১</text>
    <circle class="node-leaf" cx="280" cy="100" r="4"/>
    <circle class="node-leaf" cx="310" cy="90" r="4"/>
    <circle class="node-leaf" cx="290" cy="110" r="4"/>
    <circle class="node-leaf" cx="320" cy="105" r="4"/>
    <circle class="node-leaf" cx="270" cy="95" r="4"/>
    <circle cx="295" cy="100" r="8" fill="none" stroke="#52c41a" stroke-width="3"/>
    <text class="lbl-leaf" x="260" y="75">Centroid ২</text>
    <circle class="node-cyan" cx="430" cy="170" r="4"/>
    <circle class="node-cyan" cx="460" cy="160" r="4"/>
    <circle class="node-cyan" cx="420" cy="180" r="4"/>
    <circle class="node-cyan" cx="450" cy="175" r="4"/>
    <circle class="node-cyan" cx="440" cy="155" r="4"/>
    <circle cx="440" cy="168" r="8" fill="none" stroke="#2dd4bf" stroke-width="3"/>
    <text class="lbl-cyan" x="420" y="140">Centroid ৩</text>
    <text class="lbl-sm" x="280" y="240" text-anchor="middle">কোনো লেবেল নেই — প্যাটার্ন নিজে থেকে আসে</text>
  </svg>
  <div class="diag-cap">k-Means: ৩ টা ক্লাস্টার — প্রতিটার নিজস্ব কেন্দ্র</div>
</div>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ Supervised (Door ১-৫)</div>লেবেল আছে — এটা ক্যাট, এটা কুকুর। মডেল লেবেল থেকে শেখে। Linear/logistic regression, decision tree, k-NN — সব supervised।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ Unsupervised (Door ৬)</div>কোনো লেবেল নেই। শুধু ডেটা। প্যাটার্ন খুঁজো — গ্রুপ, কাঠামো, আউটলায়ার। k-Means, PCA, t-SNE — unsupervised।</div>
</div>

<div class="code-block"># ── STEP 1: What is clustering? (unsupervised) ──
# Classification (supervised): you KNOW the groups (spam/not spam)
# Clustering (unsupervised): you DON'T know groups → find them

# k-Means: the simplest clustering algorithm.
# 1. Pick k random points as CENTERS (centroids)
# 2. Assign each data point to NEAREST center
# 3. Move centers to the MIDDLE of their assigned points
# 4. Repeat until centers stop moving

from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import numpy as np

# Generate data with 3 hidden groups:
X, _ = make_blobs(n_samples=300, centers=3, random_state=42)

# Cluster into 3 groups:
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
labels = kmeans.fit_predict(X)

# Each point now has a cluster label (0, 1, or 2):
print(f"Cluster sizes: {np.bincount(labels)}")
print(f"Centroids:\n{kmeans.cluster_centers_}")

# NO LABELS were given — k-Means found the groups automatically!</div>

<div class="code-block"># ── STEP 2: Choosing k (the elbow method) ──
# How many clusters? Use the ELBOW METHOD.

# WCSS = Within-Cluster Sum of Squares (how spread out are clusters?)
# As k increases, WCSS always decreases.
# The "elbow" point = where adding more clusters doesn't help much.

wcss_values = []
for k in range(1, 10):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X)
    wcss_values.append(km.inertia_)  # WCSS
    print(f"  k={k}: WCSS={km.inertia_:.0f}")

# Look for the "elbow" — where WCSS stops dropping fast.
# If k=3: WCSS=200, k=4: WCSS=180 → small drop → elbow at k=3

# SILHOUETTE SCORE (more principled):
from sklearn.metrics import silhouette_score

for k in range(2, 10):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = km.fit_predict(X)
    score = silhouette_score(X, labels)
    print(f"  k={k}: silhouette={score:.3f}")
# Highest silhouette = best k
# silhouette range: -1 (worst) to 1 (best), 0 = overlapping</div>

<div class="code-block"># ── STEP 3: k-Means from scratch ──
# Understanding how k-Means works internally:

import numpy as np

def kmeans_scratch(X, k, max_iters=100):
    """k-Means from scratch."""
    # Step 1: Initialize k random centroids:
    indices = np.random.choice(len(X), k, replace=False)
    centroids = X[indices].copy()

    for iteration in range(max_iters):
        # Step 2: Assign each point to nearest centroid:
        distances = np.zeros((len(X), k))
        for i, point in enumerate(X):
            for j, centroid in enumerate(centroids):
                distances[i][j] = np.sqrt(np.sum((point - centroid) ** 2))
        labels = np.argmin(distances, axis=1)

        # Step 3: Update centroids to mean of their points:
        new_centroids = np.array([X[labels == j].mean(axis=0) for j in range(k)])

        # Step 4: Check convergence:
        if np.all(centroids == new_centroids):
            print(f"Converged at iteration {iteration}")
            break

        centroids = new_centroids

    return labels, centroids

# Run:
labels, centroids = kmeans_scratch(X, k=3)
print(f"Centroids found:\n{centroids}")</div>

<div class="code-block"># ── STEP 4: Real-world clustering applications ──
# Customer segmentation:
# Imagine e-commerce data: [age, spending_score, visit_frequency]
# customers = np.array([...])
# segments = KMeans(n_clusters=5).fit_predict(customers)
# → "budget shoppers", "luxury buyers", "frequent visitors", etc.

# ANOMALY DETECTION:
# Points far from any centroid are anomalies:
def detect_anomalies(X, kmeans, threshold=3.0):
    """Find points far from their cluster center."""
    distances = kmeans.transform(X).min(axis=1)  # distance to nearest centroid
    mean_dist, std_dist = distances.mean(), distances.std()
    anomalies = distances > mean_dist + threshold * std_dist
    return anomalies

# IMAGE COMPRESSION:
# Reduce millions of colors to k colors:
# from sklearn.cluster import KMeans
# pixels = image.reshape(-1, 3)  # each pixel = RGB
# kmeans = KMeans(n_clusters=16).fit(pixels)  # 16 colors
# compressed = kmeans.cluster_centers_[kmeans.labels_]
# compressed.reshape(image.shape)  → compressed image!

# DOCUMENT CLUSTERING:
# Group similar news articles:
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.cluster import KMeans
#
# vectorizer = TfidfVectorizer()
# X_text = vectorizer.fit_transform(articles)
# clusters = KMeans(n_clusters=5).fit_predict(X_text)
# → "sports", "politics", "tech", "health", "entertainment"</div>

<div class="code-block"># ── STEP 5: Beyond k-Means — other clustering algorithms ──
# k-Means is simple but has limitations.
# Other algorithms handle different situations.

# DBSCAN — density-based clustering:
# Groups DENSE regions, marks sparse points as noise.
# No need to specify k! Handles non-spherical shapes.
from sklearn.cluster import DBSCAN

dbscan = DBSCAN(eps=0.5, min_samples=5)
labels_db = dbscan.fit_predict(X)
# eps: max distance between points in same cluster
# min_samples: minimum points to form a cluster

# HIERARCHICAL clustering:
# Builds a TREE of clusters (dendrogram).
# from sklearn.cluster import AgglomerativeClustering
# hc = AgglomerativeClustering(n_clusters=3, linkage="ward")
# labels_hc = hc.fit_predict(X)

# GAUSSIAN MIXTURE MODELS (GMM):
# Soft clustering — each point gets PROBABILITY for each cluster.
# from sklearn.mixture import GaussianMixture
# gmm = GaussianMixture(n_components=3)
# labels_gmm = gmm.fit_predict(X)
# probs = gmm.predict_proba(X)  # soft assignment

# ┌──────────────────┬──────────────────────────────────┐
# │ Algorithm        │ When to use                     │
# ├──────────────────┼──────────────────────────────────┤
# │ k-Means          │ spherical clusters, known k     │
# │ DBSCAN           │ arbitrary shapes, has noise     │
# │ Hierarchical     │ want a cluster tree             │
# │ GMM              │ overlapping clusters, soft      │
# │ Spectral         │ graph-based clustering          │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="code-block"># ── STEP 6: Complete clustering pipeline ──
# Full workflow: prepare → scale → cluster → evaluate → interpret

from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score, adjusted_rand_score
import numpy as np

# Step 1: Load and scale data:
X, true_labels = make_blobs(n_samples=300, centers=4, random_state=42)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Step 2: Find best k:
best_k, best_score = 2, -1
for k in range(2, 10):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = km.fit_predict(X_scaled)
    score = silhouette_score(X_scaled, labels)
    if score > best_score:
        best_k, best_score = k, score
    print(f"  k={k}: silhouette={score:.3f}")

print(f"\nBest k={best_k} (silhouette={best_score:.3f})")

# Step 3: Final clustering:
final_kmeans = KMeans(n_clusters=best_k, random_state=42, n_init=10)
cluster_labels = final_kmeans.fit_predict(X_scaled)

# Step 4: Evaluate (if we have true labels):
if len(np.unique(true_labels)) == best_k:
    ari = adjusted_rand_score(true_labels, cluster_labels)
    print(f"Agreement with true labels: {ari:.1%}")

# Step 5: Interpret clusters:
for cluster in range(best_k):
    cluster_data = X[cluster_labels == cluster]
    print(f"\nCluster {cluster} ({len(cluster_data)} points):")
    print(f"  Mean: {cluster_data.mean(axis=0).round(2)}")
    print(f"  Std:  {cluster_data.std(axis=0).round(2)}")

# CLUSTERING SUMMARY:
# Unsupervised → no labels → find patterns
# k-Means → simple, fast, spherical clusters
# Choose k → elbow method or silhouette score
# Scale features → distances must be fair
# Always interpret clusters → what do they MEAN?</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> k পূর্বে জানতে হবে — এটাই সবচেয়ে বড় সীমাবদ্ধতা। Elbow method বা silhouette score দিয়ে সেরা k অনুমান করো। আবার k-Means এলোমেলো আরম্ভ থেকে ভিন্ন ফল দিতে পারে — তাই k-means++ initialization ব্যবহার করো (sklearn default)।</div></div>

<div class="callout tip"><span class="co-icon">📖</span><div><strong>Clustering আর LLM — সংযোগ:</strong> Book ১৬ (Evals)-এ clustering evaluation আছে। Book ১৮ (Embeddings)-এ embedding clustering — একই অর্থের শব্দ এক গ্রুপে। t-SNE/UMAP হলো clustering এর visualization পদ্ধতি।</div></div>

<div class="verse">وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"এবং এতে প্রতিযোগীরা প্রতিযোগিতা করুক।" — কুরআন ৮৩:২৬</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Travelers at the caravanserai compete for the best positions — and naturally cluster with their kind. Data points do the same — attracted to the nearest centroid. Order emerges from attraction.</div>
</div>

<div class="secret-box">🏘️ <strong>বাজার রহস্য ৬:</strong> k-Means হলো unsupervised clustering — কোনো লেবেল ছাড়াই ডেটাকে গ্রুপে ভাগ। k টা কেন্দ্র, পয়েন্ট নিকটতমে যায়, কেন্দ্র আপডেট হয়। কাফেলা সরাইয়ের মতো — স্বাভাবিক আকর্ষণে গ্রুপ তৈরি।<br><span class="en">k-Means is unsupervised clustering — grouping data without labels. k centers, points join nearest, centers update. Like a caravanserai — groups form by natural attraction.</span></div>`,
  senior:{
    title:"Clustering চিন্তা — প্যাটার্ন খুঁজে বের করা",
    body:`<p><strong>Step ১:</strong> Supervised = লেবেল আছে। Unsupervised = নেই।</p>
<p><strong>Step ২:</strong> k-Means: k টা কেন্দ্র বেছে → assign → update → repeat।</p>
<p><strong>Step ৩:</strong> সেরা k: Elbow method (WCSS যেখানে ধীর হয়)।</p>
<p><strong>Step ৪:</strong> Customer segmentation, anomaly detection, image compression।</p>
<p><strong>Step ৫:</strong> Embedding clustering = একই অর্থের শব্দ এক গ্রুপে (Book ১৮)।</p>`
  }
});

// ─── Door 7: ক্যালিগ্রাফারের শিক্ষার্থী ───────────
doors.push({
  num:7, icon:"✍️", color:"#a5b4fc", name:"ক্যালিগ্রাফারের শিক্ষার্থী",
  subtitle:"The Calligrapher's Apprentice", tech:"Neural Network Fundamentals",
  spirit:"তাদরিজ — ধাপে ধাপে উন্নতি, স্তরে স্তরে শেখা",
  secret:"নিউরাল নেটওয়ার্ক হলো একাধিক logistic regression স্তরে সাজানো। প্রতিটা layer আগের layer থেকে শেখে — আরও জটিল প্যাটার্ন। একজন ক্যালিগ্রাফারের শিক্ষার্থীর মতো — প্রথমে সরলরেখা, তারপর বক্ররেখা, তারপর সম্পূর্ণ অক্ষর।",
  recall:{
    q:"নিউরাল নেটওয়ার্ক কীভাবে জটিল প্যাটার্ন শেখে?",
    qen:"How do neural networks learn complex patterns?",
    a:"প্রতিটা layer একটা রূপান্তর। প্রথম layer সরল প্যাটার্ন শেখে (edge, color)। পরের layer জটিল প্যাটার্ন (shape, object)। Activation function (ReLU) non-linearity আনে। Backpropagation প্রতিটা weight আপডেট করে।",
    aen:"Each layer is a transformation. First layers learn simple patterns (edges, colors). Deeper layers learn complex patterns (shapes, objects). Activation functions (ReLU) add non-linearity. Backpropagation updates each weight."
  },
  story:`<p class="scene-setting">একটা ক্যালিগ্রাফি স্কুলে তুমি শিক্ষার্থী। তোমার উস্তাদ — ইবনে মুকলা (Ibn Muqla) — ১০ম শতাব্দীর সবচেয়ে বিখ্যাত ক্যালিগ্রাফার। তিনি proportional script (al-khatt al-mansub) আবিষ্কার করেন — অক্ষরের অনুপাত আর মাপ। তাঁর বিশেষত্ব — তাঁর বুড়ো আঙুলে একটা স্থায়ী কালির দাগ, কারণ তিনি প্রতিদিন ১০০০ বার qalam (বাঁশকলম) ধরেন। তিনি বলেন — ক্যালিগ্রাফি একদিনে শেখা যায় না। প্রথমে সরল দাগ। তারপর বক্র দাগ। তারপর অক্ষর। তারপর শব্দ। প্রতিটা ধাপ আগের ধাপের উপর দাঁড়ায়। নিউরাল নেটওয়ার্কও একইভাবে শেখে।</p>
<p class="scene-setting en">In a calligraphy school you are an apprentice. Your master — Ibn Muqla — the most famous calligrapher of the 10th century. He invented proportional script (al-khatt al-mansub) — the proportions and measurements of letters. His signature — a permanent ink stain on his thumb, from holding the qalam (reed pen) 1000 times daily. He says — calligraphy is not learned in a day. First straight lines. Then curves. Then letters. Then words. Each step builds on the previous. Neural networks learn the same way.</p>

<div class="dialogue">ইবনে মুকলা বলেন — ভাবো, একটা ছবি চিনতে কত ধাপ লাগে? প্রথমে চোখ দেখে — কোথায় প্রান্ত (edge)? এটা প্রথম layer। তারপর — প্রান্ত থেকে আকৃতি (shape)। দ্বিতীয় layer। তারপর — আকৃতি থেকে বস্তু (object)। তৃতীয় layer। প্রতিটা layer আগের আউটপুট থেকে নতুন প্যাটার্ন তৈরি করে। এটাই hierarchical learning — স্তরে স্তরে জ্ঞান।</div>
<div class="dialogue en">Ibn Muqla says — think, how many steps to recognize a picture? First the eye sees — where are edges? That is the first layer. Then — edges form shapes. Second layer. Then — shapes form objects. Third layer. Each layer creates new patterns from the previous layer's output. This is hierarchical learning — knowledge layer by layer.</div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>একটা Neuron (Door ২ এর সাথে মিল):</strong>
<br><strong>z = W·x + b → a = ReLU(z)</strong>
<br>W = weights, x = input, b = bias, ReLU = max(0, z)
<br>একটা layer = একাধিক neuron একসাথে
<br>একটা network = একাধিক layer সাজানো
<br>Deep learning = অনেক layer (১০০+)</div></div>

<table class="kv-table"><tr><th>Layer</th><th>কী শেখে</th><th>উদাহরণ (ছবি)</th></tr>
<tr><td class="hl">Layer ১</td><td>edges, colors</td><td>সরলরেখা, গাঢ়/হালকা</td></tr>
<tr><td class="hl">Layer ২</td><td>textures, patterns</td><td>বক্ররেখা, কোণ</td></tr>
<tr><td class="hl">Layer ৩</td><td>parts, shapes</td><td>চোখ, কান, নাক</td></tr>
<tr><td class="hl">Layer ৪</td><td>objects</td><td>মুখ, গাড়ি</td></tr>
<tr><td class="hl">Layer ৫</td><td>concepts</td><td>পরিচয়, প্রসঙ্গ</td></tr></table>

<div class="diagram">
  <div class="diag-title">Neural Network — স্তরে স্তরে শেখা</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <text class="lbl-cyan" x="80" y="25" text-anchor="middle">Input</text>
    <circle class="node-cyan" cx="80" cy="80" r="8"/>
    <circle class="node-cyan" cx="80" cy="130" r="8"/>
    <circle class="node-cyan" cx="80" cy="180" r="8"/>
    <text class="lbl-sm" x="80" y="220" text-anchor="middle">pixels</text>
    <text class="lbl-amber" x="220" y="25" text-anchor="middle">Hidden ১</text>
    <circle class="node-hot" cx="220" cy="60" r="8"/>
    <circle class="node-hot" cx="220" cy="105" r="8"/>
    <circle class="node-hot" cx="220" cy="150" r="8"/>
    <circle class="node-hot" cx="220" cy="195" r="8"/>
    <text class="lbl-sm" x="220" y="220" text-anchor="middle">edges</text>
    <text class="lbl-leaf" x="360" y="25" text-anchor="middle">Hidden ২</text>
    <circle class="node-leaf" cx="360" cy="70" r="8"/>
    <circle class="node-leaf" cx="360" cy="130" r="8"/>
    <circle class="node-leaf" cx="360" cy="190" r="8"/>
    <text class="lbl-sm" x="360" y="220" text-anchor="middle">shapes</text>
    <text class="lbl-purple" x="500" y="25" text-anchor="middle">Output</text>
    <circle class="node-purple" cx="500" cy="100" r="8"/>
    <circle class="node-purple" cx="500" cy="160" r="8"/>
    <text class="lbl-sm" x="500" y="220" text-anchor="middle">cat/dog</text>
    <line class="edge" x1="88" y1="80" x2="212" y2="60" opacity=".3"/>
    <line class="edge" x1="88" y1="80" x2="212" y2="105" opacity=".3"/>
    <line class="edge" x1="88" y1="80" x2="212" y2="150" opacity=".3"/>
    <line class="edge" x1="88" y1="130" x2="212" y2="105" opacity=".3"/>
    <line class="edge" x1="88" y1="130" x2="212" y2="150" opacity=".3"/>
    <line class="edge" x1="88" y1="180" x2="212" y2="195" opacity=".3"/>
    <line class="edge" x1="228" y1="60" x2="352" y2="70" opacity=".3"/>
    <line class="edge" x1="228" y1="105" x2="352" y2="130" opacity=".3"/>
    <line class="edge" x1="228" y1="150" x2="352" y2="190" opacity=".3"/>
    <line class="edge" x1="228" y1="195" x2="352" y2="130" opacity=".3"/>
    <line class="edge" x1="368" y1="70" x2="492" y2="100" opacity=".3"/>
    <line class="edge" x1="368" y1="130" x2="492" y2="100" opacity=".3"/>
    <line class="edge" x1="368" y1="190" x2="492" y2="160" opacity=".3"/>
  </svg>
  <div class="diag-cap">প্রতিটা layer আগের আউটপুট থেকে নতুন প্যাটার্ন তৈরি করে</div>
</div>

<div class="dialogue">ইবনে মুকলা বলেন — এখন বোঝো কেন এটা Book ৮ (LLM Anatomy) আর Book ৩০ (Math for ML)-এর সাথে যুক্ত। প্রতিটা neuron হলো একটা logistic regression (Door ২)। কিন্তু একটা নয় — শত শত। স্তরে স্তরে। Activation function (ReLU) ছাড়া সব layer একটা বড় linear রূপান্তরে পরিণত হতো — কোনো জটিলতা না। ReLU non-linearity আনে। Backpropagation (Book ৩০ Door ৭) প্রতিটা weight আপডেট করে। Gradient descent (Book ৩০ Door ৬) loss কমায়। সব গণিত এক জায়গায়।</div>
<div class="dialogue en">Ibn Muqla says — now understand why this connects to Book 8 (LLM Anatomy) and Book 30 (Math for ML). Each neuron is a logistic regression (Door 2). But not one — hundreds. Layer by layer. Without activation functions (ReLU), all layers would become one big linear transform — no complexity. ReLU adds non-linearity. Backpropagation (Book 30 Door 7) updates each weight. Gradient descent (Book 30 Door 6) reduces loss. All math in one place.</div>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ Without Activation</div>শুধু W·x + b স্তরে স্তরে। কিন্তু গাণিতিকভাবে — সব স্তর একটা স্তরে পরিণত হয়। জটিল প্যাটার্ন শেখা অসম্ভব। সরলরেখা দিয়ে বৃত্ত আঁকার মতো।</div>
  <div class="cmp-card cmp-good"><div class="cmp-label">✅ With ReLU</div>ReLU(z) = max(0, z)। Non-linearity আনে। প্রতিটা স্তর সত্যিকারের নতুন প্যাটার্ন শেখে। জটিল সম্পর্ক — বৃত্ত, বক্ররেখা, মুখ — সব সম্ভব।</div>
</div>

<div class="code-block"># ── STEP 1: What is a neural network? ──
# A neural network is LAYERS of logistic regression stacked together.
# Each layer learns more complex patterns than the last.

# Simple analogy:
# Layer 1: detects EDGES (simple patterns)
# Layer 2: detects SHAPES (circles, squares)
# Layer 3: detects OBJECTS (faces, cars)
# Each layer builds on the previous.

# The KEY ingredient: NON-LINEARITY (activation functions).
# Without activation functions, multiple layers = one big linear function.
# With ReLU, the network can learn ANY complex pattern.

import numpy as np

# Activation functions:
def relu(z):
    """Rectified Linear Unit. Most common activation."""
    return np.maximum(0, z)  # negative → 0, positive → keep

def sigmoid(z):
    """Squash to 0-1. Used in output layer for binary classification."""
    return 1 / (1 + np.exp(-z))

# Visualize ReLU:
for z in [-3, -1, 0, 1, 3]:
    print(f"  relu({z:>2}) = {relu(z):>2}  sigmoid({z:>2}) = {sigmoid(z):.3f}")
# relu(-3) = 0   sigmoid(-3) = 0.047
# relu( 0) = 0   sigmoid( 0) = 0.500
# relu( 3) = 3   sigmoid( 3) = 0.953</div>

<div class="code-block"># ── STEP 2: Building a neural network from scratch ──
# 2-layer network: input(3) → hidden(4) → output(1)

import numpy as np

# Initialize weights randomly:
np.random.seed(42)
W1 = np.random.randn(3, 4) * 0.5  # input(3) → hidden(4)
b1 = np.zeros((1, 4))
W2 = np.random.randn(4, 1) * 0.5  # hidden(4) → output(1)
b2 = np.zeros((1, 1))

# Training data: XOR problem (can't solve with single logistic regression!)
X = np.array([[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]])
y = np.array([[0], [1], [1], [0]])  # XOR: output = A XOR B

lr = 0.5

def relu_derivative(z):
    return (z > 0).astype(float)

for epoch in range(1000):
    # ── FORWARD PASS ──
    z1 = X @ W1 + b1       # hidden layer: linear
    a1 = relu(z1)          # hidden layer: activation
    z2 = a1 @ W2 + b2      # output layer: linear
    y_pred = sigmoid(z2)    # output layer: activation

    loss = np.mean((y - y_pred) ** 2)  # MSE loss

    # ── BACKWARD PASS (backpropagation) ──
    # Output layer gradients:
    dz2 = (y_pred - y) * y_pred * (1 - y_pred)  # sigmoid derivative
    dW2 = a1.T @ dz2
    da1 = dz2 @ W2.T  # propagate error to hidden layer

    # Hidden layer gradients:
    dz1 = da1 * relu_derivative(z1)  # ReLU derivative
    dW1 = X.T @ dz1

    # ── UPDATE WEIGHTS ──
    W2 -= lr * dW2
    W1 -= lr * dW1

    if epoch % 200 == 0:
        print(f"Epoch {epoch}: loss={loss:.4f}")

print(f"\nPredictions: {y_pred.flatten().round(3)}")
# [0.03, 0.97, 0.97, 0.03] — solved XOR!</div>

<div class="code-block"># ── STEP 3: Neural network with PyTorch ──
# In practice, use PyTorch — automatic gradient computation.

import torch
import torch.nn as nn

# Define network architecture:
model = nn.Sequential(
    nn.Linear(3, 4),    # input(3) → hidden(4)
    nn.ReLU(),           # activation
    nn.Linear(4, 1),    # hidden(4) → output(1)
    nn.Sigmoid()         # squash to probability
)

# Loss and optimizer:
criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

# Convert data to tensors:
X_tensor = torch.FloatTensor(X)
y_tensor = torch.FloatTensor(y)

# Training loop:
for epoch in range(1000):
    # Forward:
    predictions = model(X_tensor)
    loss = criterion(predictions, y_tensor)

    # Backward:
    optimizer.zero_grad()  # clear old gradients
    loss.backward()         # compute new gradients (automatic!)
    optimizer.step()        # update weights

    if epoch % 200 == 0:
        print(f"Epoch {epoch}: loss={loss.item():.4f}")

# PyTorch does backpropagation AUTOMATICALLY with loss.backward()!
# No need to manually compute derivatives like in our scratch version.</div>

<div class="code-block"># ── STEP 4: Deep learning layers ──
# Modern neural networks have specialized layers:

# FULLY CONNECTED (Linear/Dense):
# Every input connects to every output. Good for tabular data.
fc = nn.Linear(128, 64)  # 128 inputs → 64 outputs

# CONVOLUTIONAL (Conv2d):
# Scans local regions. Good for images.
conv = nn.Conv2d(in_channels=3, out_channels=32, kernel_size=3, padding=1)
# 3 color channels → 32 feature maps

# RECURRENT (RNN/LSTM):
# Processes sequences. Good for text, time series.
lstm = nn.LSTM(input_size=64, hidden_size=128, num_layers=2)

# TRANSFORMER (Attention):
# The architecture behind GPT, BERT, etc.
# encoder_layer = nn.TransformerEncoderLayer(d_model=512, nhead=8)

# DROPOUT (regularization):
# Randomly disables neurons during training → prevents overfitting.
dropout = nn.Dropout(p=0.5)  # 50% of neurons off during training

# BATCH NORMALIZATION:
# Normalizes activations between layers → faster, more stable training.
batchnorm = nn.BatchNorm1d(64)

# ARCHITECTURE CHOICE:
# ┌─────────────────┬──────────────────────────────────┐
# │ Task            │ Architecture                    │
# ├─────────────────┼──────────────────────────────────┤
# │ Tabular data    │ Fully connected (MLP)           │
# │ Images          │ CNN (Conv2d)                    │
# │ Text            │ Transformer / LSTM              │
# │ Audio           │ CNN or Transformer on spectrogram│
# │ Time series     │ LSTM or Transformer             │
# └─────────────────┴──────────────────────────────────┘</div>

<div class="code-block"># ── STEP 5: Training techniques ──
# How to train neural networks well:

# 1. OPTIMIZER:
# SGD: simple but slow, needs careful learning rate
# Adam: adaptive, good default choice
# AdamW: Adam + weight decay (best for transformers)

# 2. LEARNING RATE SCHEDULER:
# from torch.optim.lr_scheduler import CosineAnnealingLR
# scheduler = CosineAnnealingLR(optimizer, T_max=100)
# # Gradually reduces learning rate

# 3. EARLY STOPPING:
best_loss = float('inf')
patience, counter = 5, 0

# for epoch in range(100):
#     val_loss = evaluate(model, val_loader)
#     if val_loss < best_loss:
#         best_loss = val_loss
#         counter = 0
#         torch.save(model.state_dict(), "best_model.pt")
#     else:
#         counter += 1
#         if counter >= patience:
#             print("Early stopping!")
#             break

# 4. DATA AUGMENTATION (for images):
# from torchvision import transforms
# augment = transforms.Compose([
#     transforms.RandomHorizontalFlip(),
#     transforms.RandomRotation(10),
#     transforms.ColorJitter(brightness=0.2),
# ])

# 5. TRANSFER LEARNING (use pre-trained model):
# from torchvision.models import resnet50
# model = resnet50(pretrained=True)
# model.fc = nn.Linear(2048, 10)  # replace output layer
# # Only train the new output layer:
# for param in model.parameters():
#     param.requires_grad = False
# for param in model.fc.parameters():
#     param.requires_grad = True</div>

<div class="code-block"># ── STEP 6: Neural networks — the big picture ──
# Neural networks are the FOUNDATION of modern AI.

# THE EVOLUTION:
# 1957: Perceptron (single neuron)
# 1986: Backpropagation (multi-layer training)
# 1998: LeNet (first CNN for digit recognition)
# 2012: AlexNet (deep learning revolution)
# 2017: Transformer (attention is all you need)
# 2022+: LLMs (GPT-4, Claude, Gemini)

# WHY NEURAL NETWORKS WORK:
# 1. Universal approximation: can represent ANY function
# 2. Representation learning: learn features automatically
# 3. Scalable: more data + more compute = better results
# 4. Transfer learning: pre-trained models adapt to new tasks

# ┌─────────────────────┬──────────────────────────────────┐
# │ Model               │ Parameters                      │
# ├─────────────────────┼──────────────────────────────────┤
# │ Our scratch NN      │ ~20 weights                    │
# │ LeNet (1998)        │ 60,000                         │
# │ ResNet-50 (2015)    │ 25,000,000                     │
# │ GPT-2 (2019)        │ 1,500,000,000                  │
# │ GPT-4 (2023)        │ ~1,700,000,000,000             │
# └─────────────────────┴──────────────────────────────────┘

# TO LEARN DEEP LEARNING:
# 1. Master linear regression + logistic regression first
# 2. Build a NN from scratch (like Step 2)
# 3. Learn PyTorch (most popular framework)
# 4. Start with simple projects (MNIST digits)
# 5. Progress to CNN (images) or Transformer (text)

# THE KEY INSIGHT:
# Every neural network — from the simplest to GPT-4 —
# uses the same fundamental idea:
# forward pass → compute loss → backpropagate → update weights
# Everything else is optimization, architecture, and scale.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> নিউরাল নেটওয়ার্ক overfit করতে পারে — dropout, regularization, early stopping দরকার (Book ৩০ Door ৮)। আবার vanishing gradient সমস্যা — গভীর নেটওয়ার্কে সংকেত হারিয়ে যায় (Book ৩০ Door ৭)। ReLU এই সমস্যা অংশত সমাধান করে।</div></div>

<div class="verse">اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"পড়ো, এবং তোমার রব সর্বাধিক দাতা — যিনি কলমের মাধ্যমে শিখিয়েছেন — মানুষকে শিখিয়েছেন যা সে জানত না।" — কুরআন ৯৬:৩-৫</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">The calligrapher learns stroke by stroke, letter by letter — each skill building on the last. A neural network learns layer by layer — each layer building on the last. Allah taught through the pen. We teach through the network.</div>
</div>

<div class="secret-box">✍️ <strong>বাজার রহস্য ৭:</strong> নিউরাল নেটওয়ার্ক হলো স্তরে স্তরে logistic regression — প্রতিটা layer আগের থেকে নতুন প্যাটার্ন শেখে। Activation function (ReLU) non-linearity আনে। Backpropagation প্রতিটা weight আপডেট করে। ক্যালিগ্রাফারের শিক্ষার্থীর মতো — ধাপে ধাপে উন্নতি।<br><span class="en">A neural network is layered logistic regression — each layer learns new patterns from the previous. Activation functions (ReLU) add non-linearity. Backpropagation updates each weight. Like a calligrapher's apprentice — improving step by step.</span></div>`,
  senior:{
    title:"Neural Network চিন্তা — স্তরে স্তরে জ্ঞান",
    body:`<p><strong>Step ১:</strong> প্রতিটা neuron = logistic regression। কিন্তু শত শত neuron স্তরে সাজানো।</p>
<p><strong>Step ২:</strong> প্রথম layer সরল প্যাটার্ন (edge)। পরের layer জটিল (shape)। শেষ layer সিদ্ধান্ত।</p>
<p><strong>Step ৩:</strong> ReLU = max(0, z)। Non-linearity ছাড়া সব layer এক হয়ে যায়।</p>
<p><strong>Step ৪:</strong> Backpropagation (Book ৩০ Door ৭) প্রতিটা weight আপডেট করে।</p>
<p><strong>Step ৫:</strong> Deep learning = অনেক layer। Transformer (Book ৮) হলো একটা deep neural network।</p>`
  }
});

// ─── Door 8: সত্যের আয়না ─────────────────────
doors.push({
  num:8, icon:"🪞", color:"#5eead4", name:"সত্যের আয়না",
  subtitle:"The Mirror of Truth", tech:"Model Evaluation & Cross-Validation",
  spirit:"মুহাসাবা — নিজেকে যাচাই করা, সত্যের আয়নায় দেখা",
  secret:"মডেল train করা অর্ধেক — বাকি অর্ধেক হলো সঠিকভাবে evaluate করা। Accuracy একা যথেষ্ট নয় — precision, recall, F1, confusion matrix দরকার। Cross-validation নিশ্চিত করে যে তোমার মডেল সত্যিই ভালো, শুধু lucky split নয়।",
  recall:{
    q:"Accuracy কেন যথেষ্ট নয় এবং F1 score কী?",
    qen:"Why is accuracy not enough and what is F1 score?",
    a:"Imbalanced ডেটায় accuracy ভুল তথ্য দেয় — ৯৯% negative ডেটায় সব negative বললে ৯৯% accuracy! Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1 = তাদের harmonic mean।",
    aen:"Accuracy misleads on imbalanced data — 99% negative data, always predict negative = 99% accuracy! Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1 = their harmonic mean."
  },
  story:`<p class="scene-setting">বাজারে একজন আয়না বিক্রেতা — তাঁর নাম হাবিব আল-নাজ্জার (Habib al-Najjar)। তিনি নিখুঁত আয়না বানান — যা বিকৃত না করে সত্য দেখায়। তাঁর বিশেষত্ব — তাঁর কপালে একটা আয়নার কাচ কাটার দাগ, কারণ তিনি ৪০ বছর ধরে কাচ কেটেছেন। তিনি বলেন — একটা দোষত আয়না মুখকে সুন্দর দেখায় — কিন্তু সত্য নয়। নিখুঁত আয়না সব দাগ দেখায়। মডেলও একই — accuracy হলো দোষত আয়না, সত্য নয়। সত্য দেখতে চাইলে confusion matrix দেখো।</p>
<p class="scene-setting en">In the marketplace, a mirror seller — Habib al-Najjar. He makes perfect mirrors — showing truth without distortion. His signature — a glass-cutting scar on his forehead, from 40 years of cutting glass. He says — a flawed mirror makes the face look beautiful — but not true. A perfect mirror shows every blemish. A model is the same — accuracy is the flawed mirror, not the truth. To see truth, look at the confusion matrix.</p>

<table class="kv-table"><tr><th>Metric</th><th>সূত্র</th><th>কখন ব্যবহার</th></tr>
<tr><td class="hl">Accuracy</td><td>(TP+TN)/Total</td><td>balanced ডেটা</td></tr>
<tr><td class="hl">Precision</td><td>TP/(TP+FP)</td><td>false positive খরচ বেশি</td></tr>
<tr><td class="hl">Recall</td><td>TP/(TP+FN)</td><td>false negative খরচ বেশি</td></tr>
<tr><td class="hl">F1 Score</td><td>2*P*R/(P+R)</td><td>imbalanced ডেটা</td></tr>
<tr><td class="hl">AUC-ROC</td><td>area under curve</td><td>threshold-free</td></tr></table>

<div class="diagram">
  <div class="diag-title">Confusion Matrix — সত্যের আয়না</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <rect class="cell-good" x="120" y="40" width="100" height="80" rx="6" style="fill:rgba(82,196,26,.15)"/>
    <text class="lbl-leaf" x="170" y="75" text-anchor="middle">TP</text>
    <text class="lbl-sm" x="170" y="95" text-anchor="middle">সঠিক পজিটিভ</text>
    <rect class="cell-hot" x="220" y="40" width="100" height="80" rx="6" style="fill:rgba(255,107,53,.15)"/>
    <text class="lbl-hot" x="270" y="75" text-anchor="middle">FP</text>
    <text class="lbl-sm" x="270" y="95" text-anchor="middle">ভুল পজিটিভ</text>
    <rect class="cell-hot" x="120" y="120" width="100" height="80" rx="6" style="fill:rgba(255,107,53,.1)"/>
    <text class="lbl-hot" x="170" y="155" text-anchor="middle">FN</text>
    <text class="lbl-sm" x="170" y="175" text-anchor="middle">ভুল নেগেটিভ</text>
    <rect class="cell-good" x="220" y="120" width="100" height="80" rx="6" style="fill:rgba(82,196,26,.1)"/>
    <text class="lbl-leaf" x="270" y="155" text-anchor="middle">TN</text>
    <text class="lbl-sm" x="270" y="175" text-anchor="middle">সঠিক নেগেটিভ</text>
    <text class="lbl-sm" x="60" y="80">আসল: পজিটিভ</text>
    <text class="lbl-sm" x="60" y="160">আসল: নেগেটিভ</text>
    <text class="lbl-sm" x="170" y="30" text-anchor="middle">পূর্বাভাস: পজিটিভ</text>
    <text class="lbl-sm" x="270" y="30" text-anchor="middle">পূর্বাভাস: নেগেটিভ</text>
    <text class="lbl-amber" x="440" y="80">Precision</text>
    <text class="lbl-sm" x="440" y="100">= TP / (TP + FP)</text>
    <text class="lbl-amber" x="440" y="140">Recall</text>
    <text class="lbl-sm" x="440" y="160">= TP / (TP + FN)</text>
  </svg>
  <div class="diag-cap">Confusion Matrix: শুধু accuracy নয় — কোন ধরনের ভুল করছো তা দেখো</div>
</div>

<div class="dialogue">হাবিব বলেন — ভাবো, একটা রোগ নির্ণয় মডেল। ১০০ জনে মাত্র ২ জনের রোগ আছে। যদি মডেল সবাইকে সুস্থ বলে — accuracy = ৯৮%! কিন্তু আসলে মডেল ব্যর্থ — কারণ সে ২ জন রোগীকে ধরতে পারেনি। Recall = ০। এটাই accuracy-র ফাঁদ। Imbalanced ডেটায় accuracy ভুল তথ্য দেয়।</div>
<div class="dialogue en">Habib says — think, a disease diagnosis model. Out of 100, only 2 have the disease. If the model says everyone is healthy — accuracy = 98%! But the model actually failed — because it missed both patients. Recall = 0. This is the trap of accuracy. On imbalanced data, accuracy misleads.</div>

<div class="callout tip"><span class="co-icon">📖</span><div><strong>Book ১৬ (LLM Evals) সংযোগ:</strong> এই metrics শুধু classic ML নয় — LLM evaluation-এও ব্যবহৃত। Precision@k, Recall@k, MRR — সব এই ভিত্তি থেকে। Cross-entropy loss (Book ৩০ Door ৯) আর perplexity — সব এক পরিবার।</div></div>

<div class="code-block"># ── STEP 1: Why accuracy isn't enough ──
# 90% accuracy sounds great... but what if 90% of data is one class?

# Example: disease detection
# 1000 people: 900 healthy, 100 sick
# Model: predict "healthy" for everyone → 90% accuracy!
# But it MISSED ALL 100 sick people. Terrible!

# This is the IMBALANCED DATA problem.
# Accuracy lies when classes aren't balanced.

# THE CONFUSION MATRIX shows the full picture:
#                Predicted No    Predicted Yes
# Actual No      TN (correct)    FP (false alarm)
# Actual Yes     FN (missed)     TP (caught!)

# TN = True Negative  (correctly said no)
# FP = False Positive (false alarm)
# FN = False Negative (missed case)
# TP = True Positive  (caught correctly)

from sklearn.metrics import confusion_matrix

y_true = [0]*900 + [1]*100  # 900 healthy, 100 sick
y_pred = [0]*1000            # predict everyone healthy

cm = confusion_matrix(y_true, y_pred)
print("Confusion Matrix:")
print(f"  TN={cm[0][0]}  FP={cm[0][1]}")
print(f"  FN={cm[1][0]}  TP={cm[1][1]}")
# TN=900  FP=0
# FN=100  TP=0  ← missed ALL sick people!

accuracy = (cm[0][0] + cm[1][1]) / 1000
print(f"\nAccuracy: {accuracy:.0%}")  # 90% (misleading!)</div>

<div class="code-block"># ── STEP 2: Precision and recall ──
# Two metrics that reveal the real story:

from sklearn.metrics import precision_score, recall_score, f1_score

y_true = [0]*900 + [1]*100
y_pred = [0]*850 + [1]*50 + [0]*50 + [1]*50  # some predictions

# PRECISION: of predicted positives, how many are real?
precision = precision_score(y_true, y_pred)
print(f"Precision: {precision:.1%}")
# "When I say sick, how often am I right?"
# High precision = few false alarms

# RECALL: of actual positives, how many did I catch?
recall = recall_score(y_true, y_pred)
print(f"Recall: {recall:.1%}")
# "Of all sick people, how many did I find?"
# High recall = few missed cases

# THE TRADEOFF:
# Increase threshold → higher precision, lower recall (fewer alarms)
# Decrease threshold → lower precision, higher recall (catch more)
# You can't have both perfect — choose based on cost of errors.

# F1 SCORE: harmonic mean of precision and recall
f1 = f1_score(y_true, y_pred)
print(f"F1 Score: {f1:.1%}")
# F1 punishes extreme imbalance between precision and recall</div>

<div class="code-block"># ── STEP 3: Cross-validation ──
# Don't trust a single train/test split — use CROSS-VALIDATION.

from sklearn.model_selection import cross_val_score, StratifiedKFold
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=1000, weights=[0.9, 0.1])

model = RandomForestClassifier(random_state=42)

# 5-fold cross-validation:
scores = cross_val_score(model, X, y, cv=5)
print(f"5-Fold CV: {scores.mean():.3f} ± {scores.std():.3f}")

# How it works:
# Split data into 5 equal parts.
# Train on 4 parts, test on 1. Repeat 5 times.
# Average the 5 scores. Much more reliable than one split!

# STRATIFIED CV (for imbalanced data):
# Ensures each fold has the SAME class proportion.
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
stratified_scores = cross_val_score(model, X, y, cv=skf)
print(f"Stratified CV: {stratified_scores.mean():.3f}")

# For IMBALANCED data, use stratified CV + F1 score:
f1_scores = cross_val_score(model, X, y, cv=skf, scoring="f1")
print(f"Stratified F1: {f1_scores.mean():.3f}")</div>

<div class="code-block"># ── STEP 4: Choosing the right metric ──
# Different problems need different metrics.

# ┌────────────────────────┬──────────────────────────────────┐
# │ Problem                │ Best Metric                    │
# ├────────────────────────┼──────────────────────────────────┤
# │ Balanced classes       │ Accuracy                       │
# │ Imbalanced classes     │ F1 Score, AUC-ROC             │
# │ Costly false alarms    │ Precision                      │
# │ Costly missed cases    │ Recall                         │
# │ Regression             │ MSE, MAE, R²                   │
# │ Ranking                │ NDCG, MAP                     │
# │ Probabilistic          │ Log-loss (cross-entropy)       │
# └────────────────────────┴──────────────────────────────────┘

# Example: choosing based on application:

# CANCER DETECTION (recall is critical):
# "I'd rather have false alarms than miss a cancer case"
# Optimize for RECALL

# SPAM FILTER (precision is critical):
# "I'd rather let spam through than flag real emails"
# Optimize for PRECISION

# CREDIT SCORING (balanced):
# "Both errors are costly"
# Optimize for F1 SCORE

# AUC-ROC (Area Under Curve):
# Measures how well the model RANKS positive vs negative.
# AUC = 0.5: random guessing
# AUC = 1.0: perfect ranking
# AUC = 0.9+: excellent model

from sklearn.metrics import roc_auc_score
# probs = model.predict_proba(X_test)[:, 1]
# auc = roc_auc_score(y_test, probs)</div>

<div class="code-block"># ── STEP 5: Full evaluation report ──
# A complete evaluation for any classification model:

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import (classification_report, confusion_matrix,
                              roc_auc_score, cross_val_score)
import numpy as np

# Load data:
X, y = make_classification(n_samples=1000, weights=[0.9, 0.1], random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train:
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Evaluate:
predictions = model.predict(X_test)
probabilities = model.predict_proba(X_test)[:, 1]

print("=" * 50)
print("MODEL EVALUATION REPORT")
print("=" * 50)

# Confusion matrix:
cm = confusion_matrix(y_test, predictions)
print(f"\nConfusion Matrix:")
print(f"  TN={cm[0][0]:4d}  FP={cm[0][1]:4d}")
print(f"  FN={cm[1][0]:4d}  TP={cm[1][1]:4d}")

# Detailed metrics:
print(f"\nClassification Report:")
print(classification_report(y_test, predictions))

# AUC-ROC:
auc = roc_auc_score(y_test, probabilities)
print(f"AUC-ROC: {auc:.3f}")

# Cross-validation:
cv_scores = cross_val_score(model, X, y, cv=5, scoring="f1")
print(f"\n5-Fold F1: {cv_scores.mean():.3f} ± {cv_scores.std():.3f}")

# ALWAYS evaluate with:
# 1. Confusion matrix (see the breakdown)
# 2. Precision + Recall + F1
# 3. Cross-validation (reliable estimate)
# 4. The RIGHT metric for your problem</div>

<div class="code-block"># ── STEP 6: Common evaluation mistakes ──
# MISTAKES that lead to overconfident, wrong models:

# ❌ MISTAKE 1: Testing on training data
# model.fit(X, y)
# model.score(X, y)  # 99% accuracy! (memorized, not learned)
# FIX: Always use train/test split

# ❌ MISTAKE 2: Data leakage
# scaler.fit(X)  # fit on ALL data including test
# FIX: fit scaler on TRAIN only, transform test

# ❌ MISTAKE 3: Ignoring class imbalance
# accuracy = 99% but all predictions are majority class
# FIX: Use F1, stratified CV, resampling

# ❌ MISTAKE 4: Overfitting to validation set
# Trying 100 models, picking best on validation
# FIX: Use nested CV or hold out a final test set

# ❌ MISTAKE 5: Not setting random seeds
# Results not reproducible
# FIX: random_state=42 everywhere

# GOLDEN RULES OF EVALUATION:
# 1. NEVER test on training data
# 2. Use cross-validation for reliable estimates
# 3. Choose metric based on BUSINESS COST of errors
# 4. Handle imbalanced data (stratify, resample)
# 5. Set random seeds for reproducibility
# 6. Report mean ± std, not just one number
# 7. Have a SEPARATE final test set you only use once

# EVALUATION CHECKLIST:
# ✅ Train/test split done correctly
# ✅ No data leakage
# ✅ Right metric chosen
# ✅ Cross-validation performed
# ✅ Class imbalance addressed
# ✅ Results reproducible
# ✅ Compared against a baseline

# "All models are wrong, but some are useful." — George Box
# Evaluation tells you HOW useful your model actually is.</div>

<div class="secret-box">🪞 <strong>বাজার রহস্য ৮:</strong> Accuracy একা যথেষ্ট নয়। Confusion matrix দেখো — TP, FP, FN, TN। Precision আর Recall — কোন ভুল বেশি খরচ? F1 = harmonic mean। Cross-validation নিশ্চিত করে সত্যিকারের পারফরম্যান্স।<br><span class="en">Accuracy alone is not enough. See the confusion matrix — TP, FP, FN, TN. Precision and Recall — which error costs more? F1 = harmonic mean. Cross-validation ensures true performance.</span></div>`,
  senior:{
    title:"Evaluation চিন্তা — সত্য পরীক্ষা",
    body:`<p><strong>Step ১:</strong> Accuracy imbalanced ডেটায় ভুল তথ্য দেয়। Confusion matrix দেখো।</p>
<p><strong>Step ২:</strong> Precision = পজিটিভ পূর্বাভাসে কতটা সঠিক। Recall = আসল পজিটিভ কতটা ধরতে পারলে।</p>
<p><strong>Step ৩:</strong> F1 = Precision আর Recall-এর harmonic mean। Imbalanced ডেটার সেরা metric।</p>
<p><strong>Step ৪:</strong> Cross-validation (k-fold) = ডেটা ক ভাগে ভাগ করে ক বার পরীক্ষা। নির্ভরযোগ্য।</p>
<p><strong>Step ৫:</strong> Train/test split সবসময় আলাদা। কখনো test ডেটায় train করো না।</p>`
  }
});

// ─── Door 9: ভারসাম্যের দাঁড়িপাল্লা ─────────────
doors.push({
  num:9, icon:"⚖️", color:"#fcd34d", name:"ভারসাম্যের দাঁড়িপাল্লা",
  subtitle:"The Balance Scale", tech:"Bias-Variance Tradeoff",
  spirit:"আদল — সাদৃশ্য, ভারসাম্য",
  secret:"Bias বেশি = underfitting (খুব সহজ মডেল)। Variance বেশি = overfitting (খুব জটিল মডেল)। সেরা মডেল = দুইয়ের ভারসাম্য। এটাই ML-এর চিরন্তন সত্য — যেকোনো অ্যালগরিদমে এই tradeoff আছে।",
  recall:{
    q:"Bias-variance tradeoff কী এবং কীভাবে ভারসাম্য রাখবে?",
    qen:"What is the bias-variance tradeoff and how do you balance it?",
    a:"Bias = মডেল খুব সহজ, প্যাটার্ন ধরতে পারে না (underfit)। Variance = মডেল খুব জটিল, noise মুখস্থ করে (overfit)। ভারসাম্য: regularization, সঠিক মডেল জটিলতা, cross-validation।",
    aen:"Bias = model too simple, misses pattern (underfit). Variance = model too complex, memorizes noise (overfit). Balance via regularization, right complexity, cross-validation."
  },
  story:`<p class="scene-setting">হাবিব আল-নাজ্জার (Door ৮ থেকে) ফিরে এসেছেন। এবার তাঁর হাতে একটা দাঁড়িপাল্লা — দুই পাত্রে দুই ধাতু। বাম পাত্রে bias — খুব সহজ মডেলের ভুল। ডান পাত্রে variance — খুব জটিল মডেলের ভুল। কাঁটা মাঝখানে রাখতে হবে। বাম হেললে underfitting — মডেল কিছুই শেখে না। ডান হেললে overfitting — মডেল noise মুখস্থ করে।</p>
<p class="scene-setting en">Habib al-Najjar (from Door 8) returns. Now he holds a balance scale — two pans, two metals. Left pan: bias — error of too simple a model. Right pan: variance — error of too complex a model. The needle must stay centered. Left tilt: underfitting — model learns nothing. Right tilt: overfitting — model memorizes noise.</p>

<div class="diagram">
  <div class="diag-title">Bias-Variance Tradeoff — চিরন্তন সাম্য</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <line class="axis" x1="40" y1="220" x2="520" y2="220"/>
    <text class="lbl-sm" x="40" y="240">সহজ মডেল</text>
    <text class="lbl-sm" x="430" y="240">জটিল মডেল</text>
    <text class="lbl-sm" x="260" y="240">→ জটিলতা →</text>
    <path d="M 60 200 Q 150 220 250 60 Q 350 30 460 200" fill="none" stroke="#fcd34d" stroke-width="3"/>
    <text class="lbl-amber" x="350" y="50">Total Error</text>
    <path d="M 60 200 Q 200 210 460 40" fill="none" stroke="#ff6b35" stroke-width="2" stroke-dasharray="5,3"/>
    <text class="lbl-hot" x="400" y="60">Variance ↑</text>
    <path d="M 60 40 Q 200 50 460 200" fill="none" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="5,3"/>
    <text class="lbl-cyan" x="100" y="35">Bias ↓</text>
    <circle class="node-leaf" cx="250" cy="60" r="7"/>
    <text class="lbl-leaf" x="250" y="30" text-anchor="middle">Sweet Spot</text>
  </svg>
  <div class="diag-cap">Bias কমে, Variance বাড়ে — সেরা বিন্দু মাঝখানে</div>
</div>

<div class="compare">
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ High Bias (Underfit)</div>মডেল খুব সহজ। Training error বেশি, test error বেশি। Linear regression দিয়ে বক্র ডেটা। সমাধান: জটিল মডেল, বেশি feature।</div>
  <div class="cmp-card cmp-bad"><div class="cmp-label">❌ High Variance (Overfit)</div>মডেল খুব জটিল। Training error কম, test error বেশি। Noise মুখস্থ। সমাধান: regularization, কম feature, বেশি ডেটা।</div>
</div>

<div class="code-block"># ── STEP 1: What are bias and variance? ──
# BIAS: how wrong is the model ON AVERAGE? (systematic error)
#   High bias = model too simple = UNDERFITTING
#   Example: fitting a straight line to curved data

# VARIANCE: how much does the model change with different training data?
#   High variance = model too complex = OVERFITTING
#   Example: memorizing training data, failing on test

# THE BULLSEYE ANALalogy:
# Imagine throwing darts at a target:
# Low bias, low variance  → all darts in center (perfect!)
# High bias, low variance  → all darts off-center but clustered
# Low bias, high variance  → darts scattered around center
# High bias, high variance  → darts scattered off-center (worst)

# THE TRADEOFF:
# Simple model → high bias, low variance (stable but wrong)
# Complex model → low bias, high variance (flexible but unstable)
# Goal: find the sweet spot in the middle</div>

<div class="code-block"># ── STEP 2: Detecting underfitting and overfitting ──
# The TRAINING vs TEST error gap tells you everything.

import numpy as np

# Three scenarios:

# UNDERFITTING (high bias):
#   Train error: HIGH (can't even fit training data)
#   Test error: HIGH
#   Gap: SMALL (both bad)
#   Fix: use MORE COMPLEX model

# OVERFITTING (high variance):
#   Train error: LOW (memorized training data)
#   Test error: HIGH
#   Gap: LARGE (train is much better than test)
#   Fix: regularization, more data, simpler model

# GOOD FIT:
#   Train error: LOW
#   Test error: LOW
#   Gap: SMALL (both good, generalizes well)

# Example diagnosis:
def diagnose(train_error, test_error):
    """Diagnose bias/variance from train and test errors."""
    gap = test_error - train_error

    if train_error > 0.15 and test_error > 0.15:
        return "UNDERFITTING (high bias) — use more complex model"
    elif gap > 0.05:
        return "OVERFITTING (high variance) — regularize or add data"
    elif train_error < 0.10 and test_error < 0.10:
        return "GOOD FIT — well balanced!"
    else:
        return "Acceptable — check if improvements needed"

# Test scenarios:
print(diagnose(0.20, 0.22))   # UNDERFITTING
print(diagnose(0.02, 0.15))   # OVERFITTING
print(diagnose(0.05, 0.07))   # GOOD FIT</div>

<div class="code-block"># ── STEP 3: Learning curves ──
# How does error change as you add MORE DATA?

# UNDERFITTING learning curve:
# Train and test error CONVERGE to a HIGH value.
# Adding more data doesn't help — model is too simple.
# Fix: more complex model (add features, polynomial terms)

# OVERFITTING learning curve:
# Train error stays LOW, test error stays HIGH.
# Large gap between train and test.
# Fix: more data, regularization, simpler model

# GOOD learning curve:
# Both converge to LOW error. Small gap. More data helps.

from sklearn.model_selection import learning_curve
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=1000, random_state=42)

model = RandomForestClassifier(n_estimators=50, random_state=42)

# Get learning curve data:
train_sizes, train_scores, test_scores = learning_curve(
    model, X, y, cv=5, train_sizes=[0.1, 0.3, 0.5, 0.7, 1.0]
)

print("Training set size vs Accuracy:")
for size, train_mean, test_mean in zip(
    train_sizes,
    train_scores.mean(axis=1),
    test_scores.mean(axis=1)
):
    print(f"  {size:5d} samples: train={train_mean:.3f}, test={test_mean:.3f}")

# If both converge and are high → good fit
# If train is much higher than test → overfitting
# If both are low → underfitting</div>

<div class="code-block"># ── STEP 4: Fixing underfitting ──
# UNDERFITTING = model too simple for the data.

# FIXES (in order of effectiveness):

# 1. USE A MORE COMPLEX MODEL:
# Linear regression → Polynomial regression
# Shallow tree → Deep tree
# Logistic regression → Random forest or neural network

from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression

# Too simple: linear
model_simple = LinearRegression()

# Better: polynomial (captures curves)
model_complex = Pipeline([
    ("poly", PolynomialFeatures(degree=3)),
    ("linear", LinearRegression())
])

# 2. ADD MORE FEATURES:
# Maybe important information is missing
# Feature engineering: create new features from existing ones

# 3. REDUCE REGULARIZATION:
# If using Ridge/Lasso, decrease alpha (less penalty = more freedom)

# 4. TRAIN LONGER (for neural networks):
# More epochs, higher learning rate</div>

<div class="code-block"># ── STEP 5: Fixing overfitting ──
# OVERFITTING = model memorizes training data, fails on new data.

# FIXES (in order of effectiveness):

# 1. GET MORE DATA:
# The BEST fix for overfitting. More data = better generalization.

# 2. REGULARIZATION:
from sklearn.linear_model import Ridge, Lasso

# L2 (Ridge): shrink weights toward zero
model_ridge = Ridge(alpha=10.0)  # higher alpha = more regularization

# L1 (Lasso): make some weights EXACTLY zero (feature selection)
model_lasso = Lasso(alpha=0.1)

# 3. SIMPLER MODEL:
# Deep tree → shallow tree (reduce max_depth)
# Large neural network → smaller one
# Many features → fewer features

# 4. DROPOUT (for neural networks):
# Randomly turn off neurons during training → can't memorize

# 5. EARLY STOPPING:
# Stop training BEFORE the model starts overfitting
# Monitor validation loss, stop when it starts increasing

# 6. CROSS-VALIDATION:
# Use CV to DETECT overfitting early
# If CV scores are much worse than training score → overfitting

# REGULARIZATION TECHNIQUES SUMMARY:
# ┌──────────────────┬──────────────────────────────────┐
# │ Technique        │ How it works                   │
# ├──────────────────┼──────────────────────────────────┤
# │ L1 (Lasso)       │ Shrinks some weights to zero   │
# │ L2 (Ridge)       │ Shrinks all weights uniformly  │
# │ ElasticNet       │ L1 + L2 combined               │
# │ Dropout          │ Randomly disables neurons      │
# │ Early stopping   │ Stop before overfitting        │
# │ Data augmentation│ Artificially expand data       │
# │ Batch norm       │ Stabilizes training            │
# └──────────────────┴──────────────────────────────────┘</div>

<div class="code-block"># ── STEP 6: The complete diagnosis workflow ──
# How to systematically diagnose and fix your model:

# STEP 1: Always start with a BASELINE
# from sklearn.dummy import DummyClassifier
# baseline = DummyClassifier(strategy="most_frequent")
# baseline.fit(X_train, y_train)
# Your model MUST beat this!

# STEP 2: Check train vs test error
# train_score = model.score(X_train, y_train)
# test_score = model.score(X_test, y_test)
# If train >> test → overfitting
# If both low → underfitting

# STEP 3: Plot learning curves
# from sklearn.model_selection import learning_curve
# See if more data would help

# STEP 4: Cross-validate
# scores = cross_val_score(model, X, y, cv=5)
# High variance in scores → unstable model

# THE BIAS-VARIANCE DECISION TREE:
#
# Train error HIGH?
#   → YES: UNDERFITTING
#     → Use more complex model
#     → Add features
#     → Reduce regularization
#
# Train error LOW, Test error HIGH?
#   → YES: OVERFITTING
#     → Add more data
#     → Increase regularization
#     → Simplify model
#     → Use dropout / early stopping
#
# Both LOW and close?
#   → GOOD FIT. Done!
#   → Still want better? Try ensemble methods (boosting)

# THE GOLDEN RULE:
# "Garbage in, garbage out."
# No algorithm fixes BAD DATA.
# Focus on DATA QUALITY first:
# - Clean (remove errors, outliers)
# - Enough (more data usually wins)
# - Relevant (features that matter)
# - Balanced (fair representation)
#
# Then choose the RIGHT algorithm for the data.
# Then tune hyperparameters.
# Then evaluate honestly.
# This is the ML workflow.</div>

<div class="secret-box">⚖️ <strong>বাজার রহস্য ৯:</strong> Bias বেশি = underfit, variance বেশি = overfit। সেরা মডেল = দুইয়ের সাম্য। Regularization, সঠিক জটিলতা, বেশি ডেটা, cross-validation — এই সাম্য তৈরি করে।<br><span class="en">High bias = underfit, high variance = overfit. Best model = balance of both. Regularization, right complexity, more data, cross-validation create this balance.</span></div>`,
  senior:{
    title:"Bias-Variance চিন্তা — চিরন্তন সাম্য",
    body:`<p><strong>Step ১:</strong> Bias = খুব সহজ মডেল। Variance = খুব জটিল মডেল।</p>
<p><strong>Step ২:</strong> Sweet spot = দুইয়ের মাঝখানে। Cross-validation দিয়ে খুঁজো।</p>
<p><strong>Step ৩:</strong> Underfit → জটিল মডেল, বেশি feature, কম regularization।</p>
<p><strong>Step ৪:</strong> Overfit → regularization, কম feature, বেশি ডেটা, dropout।</p>
<p><strong>Step ৫:</strong> বেশি ডেটা সবসময় variance কমায় — কিন্তু bias নয়।</p>`
  }
});

// ─── Door 10: বাজার সুলতানের তাঁবু ──────────────
doors.push({
  num:10, icon:"🏛️", color:"#2dd4bf", name:"বাজার সুলতানের তাঁবু",
  subtitle:"The Sultan's Pavilion", tech:"Synthesis: The Complete ML Toolbox",
  spirit:"হিকমাহ — সব জ্ঞানের সমন্বয়, applied wisdom",
  secret:"নয়টি অ্যালগরিদম একসাথে — এটাই তোমার ML toolbox। কোন সমস্যায় কোন অ্যালগরিদম? এটাই সবচেয়ে গুরুত্বপূর্ণ প্রশ্ন। সব অ্যালগরিদম ভালো নয় সব সমস্যায়। সঠিক অ্যালগরিদম বেছো — data size, complexity, interpretability, আর speed দেখে।",
  recall:{
    q:"কোন সমস্যায় কোন ML অ্যালগরিদম ব্যবহার করবে?",
    qen:"Which ML algorithm do you use for which problem?",
    a:"ছোট ডেটা+সহজ=linear/logistic regression। tabular ডেটা=random forest/XGBoost। উচ্চ dim=kernel SVM। কোনো লেবেল নেই=k-means। বিশাল ডেটা+জটিল=neural network। No Free Lunch — কোনো একক অ্যালগরিদম সবার জন্য সেরা নয়।",
    aen:"Small data+simple=linear/logistic regression. Tabular=random forest/XGBoost. High dim=kernel SVM. No labels=k-means. Huge data+complex=neural network. No Free Lunch — no single algorithm is best for everything."
  },
  story:`<p class="scene-setting">তুমি বাজার সুলতানের তাঁবুতে এসেছো। সুলতান তোমাকে সমস্যা দিয়েছেন — রাজ্যের সবচেয়ে কঠিন সমস্যা। তুমি কোন কারিগর ডাকবে? আল-তুসিকে (regression)? ইবনে সিনাকে (decision tree)? উস্তাদ ইসহাককে (logistic)? উমর খায়্যামকে (SVM)? প্রতিটা কারিগর একটা নির্দিষ্ট কাজে সেরা। সুলতান বলেন — সঠিক মানুষ সঠিক কাজে দাও। এটাই জ্ঞান — শুধু অ্যালগরিদম জানা নয়, কখন কোনটা ব্যবহার করতে হয় তা জানা।</p>
<p class="scene-setting en">You enter the Sultan's pavilion. The Sultan gives you a problem — the hardest in the realm. Which artisan do you call? Al-Tusi (regression)? Ibn Sina (decision tree)? Ustad Ishaq (logistic)? Omar Khayyam (SVM)? Each artisan is best at a specific task. The Sultan says — put the right person to the right task. This is wisdom — not just knowing the algorithms, but knowing when to use each.</p>

<div class="dialogue"><strong>দরজা ১ — আল-তুসি (Linear Regression):</strong> সবচেয়ে সহজ। সংখ্যা ভবিষ্যদ্বাণী। দাম, তাপমাত্রা, দূরত্ব। ছোট ডেটা, সরল সম্পর্ক।</div>
<div class="dialogue"><strong>দরজা ২ — উস্তাদ ইসহাক (Logistic Regression):</strong> হ্যাঁ/না সিদ্ধান্ত। Spam, রোগ, fraud। Sigmoid সম্ভাবনা দেয়।</div>
<div class="dialogue"><strong>দরজা ৩ — ইবনে সিনা (Decision Trees):</strong> প্রশ্নের গাছ। বোঝা সহজ। ব্যাখ্যা সহজ। Tabular ডেটার জন্য সেরা। Random forest = শত গাছের ভোট।</div>
<div class="dialogue"><strong>দরজা ৪ — উমর খায়্যাম (SVM):</strong> সবচেয়ে বড় margin। উচ্চ-মাত্রিক ডেটা। Kernel trick। ছোট-মাঝারি ডেটার জন্য সেরা।</div>
<div class="dialogue"><strong>দরজা ৫ — আল-কাশী (k-NN):</strong> নিকটতম প্রতিবেশী। কোনো training নেই। ছোট ডেটার জন্য সহজ। RAG-এর ভিত্তি (Book ১০)।</div>
<div class="dialogue"><strong>দরজা ৬ — আল-হাসান (k-Means):</strong> Unsupervised clustering। কোনো লেবেল নেই। গ্রুপ খুঁজো। Customer segmentation, anomaly detection।</div>
<div class="dialogue"><strong>দরজা ৭ — ইবনে মুকলা (Neural Networks):</strong> স্তরে স্তরে শেখা। বিশাল ডেটা, জটিল প্যাটার্ন। ছবি, ভাষা, শব্দ। Transformer এই নিয়মে।</div>
<div class="dialogue"><strong>দরজা ৮ — হাবিব (Evaluation):</strong> সত্যের আয়না। Accuracy একা যথেষ্ট নয়। Precision, recall, F1, cross-validation।</div>
<div class="dialogue"><strong>দরজা ৯ — হাবিব (Bias-Variance):</strong> চিরন্তন সাম্য। খুব সহজ নয়, খুব জটিল নয়। মাঝখানে থাাকো।</div>

<div class="diagram">
  <div class="diag-title">কোন সমস্যায় কোন অ্যালগরিদম?</div>
  <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
    <text class="lbl-amber" x="280" y="25" text-anchor="middle">Decision Tree: কোন Algorithm?</text>
    <rect class="cell" x="200" y="50" width="160" height="45" rx="10"/>
    <text class="lbl" x="280" y="78" text-anchor="middle">কত ডেটা?</text>
    <line class="edge" x1="250" y1="95" x2="120" y2="135"/>
    <text class="lbl-sm" x="170" y="120">ছোট (১০০০০)</text>
    <line class="edge" x1="310" y1="95" x2="440" y2="135"/>
    <text class="lbl-sm" x="380" y="120">বিশাল</text>
    <rect class="cell-cyan" x="50" y="135" width="140" height="40" rx="8"/>
    <text class="lbl-cyan" x="120" y="160" text-anchor="middle">কোন সমস্যা?</text>
    <rect class="cell-hot" x="370" y="135" width="140" height="40" rx="8"/>
    <text class="lbl-hot" x="440" y="160" text-anchor="middle">Neural Network</text>
    <line class="edge" x1="100" y1="175" x2="60" y2="215"/>
    <text class="lbl-sm" x="40" y="200">সংখ্যা</text>
    <line class="edge" x1="140" y1="175" x2="180" y2="215"/>
    <text class="lbl-sm" x="160" y="200">ক্লাস</text>
    <rect class="cell-good" x="20" y="215" width="80" height="35" rx="6"/>
    <text class="lbl-leaf" x="60" y="238" text-anchor="middle">Linear Reg</text>
    <rect class="cell-leaf" x="140" y="215" width="80" height="35" rx="6"/>
    <text class="lbl-leaf" x="180" y="238" text-anchor="middle">Logistic/RF</text>
    <text class="lbl-sm" x="280" y="280" text-anchor="middle">No Free Lunch: কোনো একক অ্যালগরিদম সবার জন্য সেরা নয়</text>
  </svg>
  <div class="diag-cap">সঠিক অ্যালগরিদম বেছো — data size, complexity, interpretability দেখে</div>
</div>

<div class="callout info"><span class="co-icon">🏛️</span><div><strong>No Free Lunch Theorem (Wolpert, 1996):</strong>
<br>কোনো একক ML অ্যালগরিদম সব সমস্যার জন্য সেরা নয়।
<br>এক ধরনের সমস্যায় ভালো — অন্য ধরনে খারাপ।
<br>এটাই কেন তোমাকে সব অ্যালগরিদম জানতে হবে।
<br>এটাই কেন এই বই।</div></div>

<div class="code-block"># ── STEP 1: The ML workflow ──
# Every ML project follows the same workflow:

# 1. UNDERSTAND the problem (what are we predicting?)
# 2. GET the data (collect, download, scrape)
# 3. EXPLORE the data (EDA — distributions, correlations)
# 4. PREPARE the data (clean, scale, encode, split)
# 5. CHOOSE algorithms (start simple, try multiple)
# 6. TRAIN and TUNE (cross-validation, hyperparameters)
# 7. EVALUATE (right metrics, honest assessment)
# 8. DEPLOY (model serving, monitoring)

# The most important step? Step 1 — UNDERSTAND THE PROBLEM.
# A perfect model of the wrong problem is useless.</div>

<div class="code-block"># ── STEP 2: Compare all algorithms ──
# "No Free Lunch" theorem: no single algorithm is best for ALL problems.
# Always TRY MULTIPLE algorithms and pick the winner.

from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier

X, y = load_iris(return_X_y=True)

# All algorithms to try:
models = {
    "Logistic Regression": LogisticRegression(max_iter=200),
    "Decision Tree": DecisionTreeClassifier(max_depth=5),
    "Random Forest": RandomForestClassifier(n_estimators=100),
    "Gradient Boosting": GradientBoostingClassifier(),
    "SVM (RBF)": SVC(kernel="rbf"),
    "k-NN (k=5)": KNeighborsClassifier(n_neighbors=5),
}

print("5-Fold Cross-Validation Results:")
print("-" * 40)
results = []
for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5)
    mean, std = scores.mean(), scores.std()
    results.append((name, mean, std))
    print(f"  {name:22}: {mean:.3f} ± {std:.3f}")

# Winner:
best = max(results, key=lambda x: x[1])
print(f"\nWinner: {best[0]} ({best[1]:.3f})")</div>

<div class="code-block"># ── STEP 3: When to use each algorithm ──
# THE ALGORITHM SELECTION GUIDE:

# ┌──────────────────────┬──────────────────────────────────────┐
# │ If your data is...   │ Use...                              │
# ├──────────────────────┼──────────────────────────────────────┤
# │ Linear, simple       │ Logistic/Linear Regression          │
# │ Tabular, structured  │ Random Forest or XGBoost            │
# │ Small, precise       │ SVM                                 │
# │ Small, simple        │ k-NN                                │
# │ Images               │ CNN (Convolutional Neural Network)  │
# │ Text                 │ Transformer / BERT                  │
# │ Time series          │ LSTM or Transformer                 │
# │ Need interpretability│ Decision Tree or Logistic Reg       │
# │ Need maximum accuracy│ Gradient Boosting (XGBoost/LightGBM)│
# └──────────────────────┴──────────────────────────────────────┘

# THE HIERARCHY OF TRYING:
# 1. Baseline (DummyClassifier / mean prediction)
# 2. Logistic Regression (fast, interpretable baseline)
# 3. Random Forest (strong, handles most data)
# 4. XGBoost / LightGBM (if RF works, boosting might be better)
# 5. Deep Learning (for images, text, audio — complex data)

# RULE OF THUMB:
# "Use the SIMPLEST model that achieves your accuracy target."
# Don't use a neural network when logistic regression works.</div>

<div class="code-block"># ── STEP 4: Hyperparameter tuning ──
# Finding the BEST settings for your chosen algorithm.

from sklearn.model_selection import GridSearchCV, RandomizedSearchCV

# Grid Search — try ALL combinations:
param_grid = {
    "n_estimators": [50, 100, 200],
    "max_depth": [3, 5, 7, None],
    "min_samples_split": [2, 5, 10],
}

grid_search = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid,
    cv=5,
    scoring="f1",
    n_jobs=-1  # use all CPU cores
)
grid_search.fit(X, y)

print(f"Best parameters: {grid_search.best_params_}")
print(f"Best CV score: {grid_search.best_score_:.3f}")

# Random Search — try RANDOM combinations (faster for large grids):
# random_search = RandomizedSearchCV(
#     RandomForestClassifier(),
#     param_distributions=param_grid,
#     n_iter=20,  # try 20 random combinations
#     cv=5,
#     random_state=42
# )
# random_search.fit(X, y)

# TIPS:
# - Start with coarse grid (few values), then refine
# - Use Random Search for large parameter spaces
# - Use Bayesian optimization (optuna) for expensive tuning
# - Always use CROSS-VALIDATION during tuning</div>

<div class="code-block"># ── STEP 5: Complete production pipeline ──
# A real ML pipeline includes preprocessing + model + evaluation:

from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Numeric pipeline (impute + scale):
numeric_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler()),
])

# Full pipeline (preprocessing + model):
full_pipeline = Pipeline([
    ("preprocessor", numeric_pipeline),
    ("classifier", RandomForestClassifier(n_estimators=100, random_state=42)),
])

# Split data:
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train the ENTIRE pipeline:
full_pipeline.fit(X_train, y_train)

# Evaluate:
accuracy = full_pipeline.score(X_test, y_test)
print(f"Pipeline accuracy: {accuracy:.1%}")

# Save the ENTIRE pipeline (for deployment):
# import joblib
# joblib.dump(full_pipeline, "model.pkl")
#
# # Load later (in production):
# model = joblib.load("model.pkl")
# prediction = model.predict(new_data)

# The pipeline handles EVERYTHING:
# - Missing value imputation
# - Feature scaling
# - Model prediction
# All in one consistent, reproducible flow.</div>

<div class="code-block"># ── STEP 6: The complete ML checklist ──
# Before shipping any ML model, verify:

# ┌──────────────────────┬──────────────────────────────────────┐
# │ Step                 │ Check                               │
# ├──────────────────────┼──────────────────────────────────────┤
# │ Data Quality         │ Clean, no leakage, representative  │
# │ Baseline             │ Model beats DummyClassifier         │
# │ Cross-Validation     │ Used CV, not just one split        │
# │ Multiple Algorithms  │ Tried at least 3 different models  │
# │ Hyperparameters      │ Tuned with CV, not guessed         │
# │ Right Metric         │ Matches business objective         │
# │ Error Analysis       │ Examined WHERE model fails         │
# │ Bias/Variance        │ Diagnosed and addressed            │
# │ Reproducible         │ Random seeds set, code versioned   │
# │ Model Saved          │ Pipeline serialized (joblib)       │
# │ Monitoring Plan      │ How will you detect drift?         │
# │ Documentation        │ Someone else can understand it     │
# └──────────────────────┴──────────────────────────────────────┘

# THE ML JOURNEY:
# 1. START SIMPLE: logistic regression as baseline
# 2. ADD COMPLEXITY GRADUALLY: trees, ensembles, neural nets
# 3. MEASURE EVERYTHING: track metrics, not feelings
# 4. ALWAYS COMPARE: new model vs previous model
# 5. SHIP WHEN READY: deploy, monitor, iterate

# THE 10 CLASSIC ML ALGORITHMS YOU NOW KNOW:
# 1. Linear Regression    — predict numbers
# 2. Logistic Regression  — binary classification
# 3. Decision Trees       — interpretable splits
# 4. Random Forest        — ensemble of trees
# 5. Gradient Boosting    — sequential error fixing
# 6. SVM                  — maximum margin
# 7. k-NN                 — nearest neighbors
# 8. k-Means              — unsupervised clustering
# 9. Neural Networks      — layered learning
# 10. Evaluation          — the most important skill

# CONGRATULATIONS!
# You now have the COMPLETE classic ML toolbox.
# Every modern AI technique builds on these foundations.
# GPT-4, autonomous cars, recommendation systems —
# they all started with linear regression and grew from here.
# Master the basics, and the sky is the limit.</div>

<div class="callout tip"><span class="co-icon">📖</span><div><strong>তোমার যাত্রা — কোথায় যাবে এখন?</strong>
<br>📖 <strong>Book ৮ (LLM Anatomy):</strong> Neural network-এর গভীরে — Transformer
<br>📖 <strong>Book ৩০ (Math for ML):</strong> এই অ্যালগরিদমের গাণিতিক ভিত্তি
<br>📖 <strong>Book ১৬ (Evals):</strong> আরও advanced evaluation metrics
<br>📖 <strong>Book ২২ (CS Ocean):</strong> ML theory আর AI safety
<br>📖 <strong>Book ২১ (Researcher Mindset):</strong> গবেষক হিসেবে কোন অ্যালগরিদম কেন কাজ করে — প্রমাণ করো
<br>এখন তুমি প্রস্তুত Andrew Ng, fast.ai, বা any ML PhD course-এর জন্য।</div></div>

<div class="verse">وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ
<div style="font-size:.88rem;color:var(--ink-dim);margin-top:.4rem">"এবং প্রত্যেক জ্ঞানীর উপরে আছে অধিক জ্ঞানী।" — কুরআন ১২:৭৬</div>
<div style="font-size:.82rem;color:var(--ink-mute);margin-top:.3rem">Each algorithm knows one aspect of truth. The Sultan knows all. No Free Lunch — no single tool fits all problems. Wisdom is knowing which tool for which moment. The marketplace has many artisans — the master chooses wisely.</div>
</div>

<div class="secret-box">🏛️ <strong>বাজার রহস্য ১০ (অন্তিম):</strong> নয়টি অ্যালগরিদম একসাথে — এটাই তোমার ML toolbox। No Free Lunch — কোনো একক অ্যালগরিদম সবার জন্য সেরা নয়। সঠিক অ্যালগরিদম বেছো — data size, complexity, interpretability, speed দেখে। যে জানে কখন কোনটা, সে সুলতান।<br><span class="en">Nine algorithms together — this is your ML toolbox. No Free Lunch — no single algorithm is best for all. Choose the right algorithm based on data size, complexity, interpretability, speed. One who knows when to use which — is the Sultan.</span></div>`,
  senior:{
    title:"সম্পূর্ণ ML Toolbox — তোমার হাতিয়ার",
    body:`<p><strong>Step ১:</strong> Linear/Logistic regression — ছোট ডেটা, সহজ সম্পর্ক।</p>
<p><strong>Step ২:</strong> Decision Tree/Random Forest — tabular ডেটা, ব্যাখ্যা সহজ।</p>
<p><strong>Step ৩:</strong> SVM — উচ্চ-মাত্রিক, ছোট-মাঝারি ডেটা, kernel trick।</p>
<p><strong>Step ৪:</strong> k-NN — সহজ baseline, কোনো training নেই। RAG-এর ভিত্তি।</p>
<p><strong>Step ৫:</strong> Neural Network — বিশাল ডেটা, জটিল প্যাটার্ন। Transformer এই নিয়মে। No Free Lunch — সঠিক অ্যালগরিদম বেছো।</p>`
  }
});
