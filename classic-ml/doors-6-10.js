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

<div class="code-block">— — — Python: k-Means Clustering — — —

from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import numpy as np

# ডেটা: ৩টা গ্রুপ (কোনো লেবেল নেই!)
X, _ = make_blobs(n_samples=300, centers=3, random_state=42)

# k=৩ ক্লাস্টার
kmeans = KMeans(n_clusters=3, random_state=42)
labels = kmeans.fit_predict(X)

# প্রতিটা পয়েন্ট এখন একটা ক্লাস্টারে
print(f"Cluster sizes: {np.bincount(labels)}")
print(f"Centroids:\n{kmeans.cluster_centers_}")

# সেরা k খুঁজতে: Elbow method
for k in range(1, 10):
    km = KMeans(n_clusters=k, random_state=42)
    km.fit(X)
    print(f"  k={k}: WCSS={km.inertia_:.0f}")

# k=৩ এ elbow — WCSS হঠাৎ ধীর হয়
# এটাই সঠিক k

# Real-world: customer segmentation
# customers = [...]
# segments = KMeans(n_clusters=5).fit(customers)
# → প্রতিটা সেগমেন্ট = এক ধরনের ক্রেতা</div>

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

<div class="code-block">— — — Python: Neural Network from Scratch — — —

import numpy as np

def relu(z):
    return np.maximum(0, z)

def relu_derivative(z):
    return (z > 0).astype(float)

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# ২-layer network: input(৩) → hidden(৪) → output(১)
np.random.seed(42)
W1 = np.random.randn(3, 4) * 0.5
b1 = np.zeros((1, 4))
W2 = np.random.randn(4, 1) * 0.5
b2 = np.zeros((1, 1))

X = np.array([[0,0,1], [0,1,1], [1,0,1], [1,1,1]])
y = np.array([[0], [1], [1], [0]])

lr = 0.5

for epoch in range(1000):
    # Forward
    z1 = X @ W1 + b1
    a1 = relu(z1)
    z2 = a1 @ W2 + b2
    y_pred = sigmoid(z2)
    
    loss = np.mean((y - y_pred) ** 2)
    
    # Backprop (Chain Rule!)
    dz2 = (y_pred - y) * y_pred * (1 - y_pred)
    dW2 = a1.T @ dz2
    da1 = dz2 @ W2.T
    dz1 = da1 * relu_derivative(z1)
    dW1 = X.T @ dz1
    
    # Update
    W2 -= lr * dW2
    W1 -= lr * dW1
    
    if epoch % 200 == 0:
        print(f"Epoch {epoch}: loss={loss:.4f}")

print(f"\nPredictions: {y_pred.flatten()}")

# PyTorch দিয়ে এক লাইনে:
# model = nn.Sequential(nn.Linear(3,4), nn.ReLU(), nn.Linear(4,1), nn.Sigmoid())</div>

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
<tr><td class="hl">F1 Score</td><td>2×P×R/(P+R)</td><td>imbalanced ডেটা</td></tr>
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

<div class="code-block">— — — Python: Model Evaluation — — —

from sklearn.metrics import (classification_report,
    confusion_matrix, cross_val_score)
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=1000, weights=[0.9, 0.1])

# Imbalanced: ৯০% class ০, ১০% class ১
model = RandomForestClassifier()
model.fit(X, y)
y_pred = model.predict(X)

# Confusion matrix
cm = confusion_matrix(y, y_pred)
print("Confusion Matrix:")
print(cm)

# Full report
print(classification_report(y, y_pred))

# Cross-validation — সত্যিকারের পরীক্ষা
scores = cross_val_score(model, X, y, cv=5)
print(f"CV scores: {scores}")
print(f"Mean: {scores.mean():.3f} ± {scores.std():.3f}")

# Stratified CV (imbalanced ডেটার জন্য)
from sklearn.model_selection import StratifiedKFold
skf = StratifiedKFold(n_splits=5)
scores = cross_val_score(model, X, y, cv=skf)
print(f"Stratified CV: {scores.mean():.3f}")</div>

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

<div class="code-block">— — — Python: Diagnosing Bias vs Variance — — —

from sklearn.model_selection import learning_curve
import numpy as np

# Learning curve: training size vs error
# High bias: train আর test দুটোই high → underfit
# High variance: train low, test high → overfit

# উদাহরণ ডায়াগনোসিস
train_sizes = [100, 500, 1000, 5000, 10000]
train_errors = [5.0, 4.0, 3.5, 3.2, 3.1]  # কমছে
test_errors  = [8.0, 6.0, 5.0, 4.0, 3.5]  # কমছে

gap = [t - tr for t, tr in zip(test_errors, train_errors)]
print("Train  Test   Gap  → Diagnosis")
for i in range(len(train_sizes)):
    if gap[i] > 1.5:
        diag = "High Variance (overfit)"
    elif train_errors[i] > 4.0:
        diag = "High Bias (underfit)"
    else:
        diag = "Good fit"
    print(f"  {train_errors[i]:.1f}  {test_errors[i]:.1f}   {gap[i]:.1f}  → {diag}")</div>

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

<div class="code-block">— — — Python: Scikit-Learn দিয়ে সম্পূর্ণ Pipeline — — —

from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier

X, y = load_iris(return_X_y=True)

# সব অ্যালগরিদম পরীক্ষা — No Free Lunch!
models = {
    "Logistic": LogisticRegression(),
    "Tree": DecisionTreeClassifier(max_depth=5),
    "Forest": RandomForestClassifier(n_estimators=100),
    "SVM": SVC(kernel='rbf'),
    "k-NN": KNeighborsClassifier(n_neighbors=5),
}

print("Cross-Validation Accuracy (5-fold):")
results = []
for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5)
    mean = scores.mean()
    results.append((name, mean))
    print(f"  {name:12s}: {mean:.3f} ± {scores.std():.3f}")

# সেরা অ্যালগরিদম
best = max(results, key=lambda x: x[1])
print(f"\nWinner: {best[0]} ({best[1]:.3f})")

# কিন্তু এটা Iris ডেটার জন্য।
# অন্য ডেটায় অন্য algorithm জিততে পারে।
# → No Free Lunch!</div>

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
