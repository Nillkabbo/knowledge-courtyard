// ════════════════════════════════════════
// কম্পিউটার সায়েন্সের মহাসমুদ্র — DOORS 11-15
// Sea 4: Data (D11) · Sea 5: HCI (D12-D13) · Sea 6: SE/PL (D14-D15)
// ════════════════════════════════════════

// ══ DOOR 11: DATA MINING & BIG DATA ══
doors.push({
  num:11, icon:"📊", color:"#fbbf24", name:"ডেটার পরিশোধন",
  subtitle:"The Data Refinery", tech:"Data Mining & Big Data",
  spirit:"ফিকর — গভীর চিন্তা, ডেটা থেকে অর্থ বের করা",
  secret:"Data mining + big data হলো ডেটার খনির পরবর্তী ধাপ — Lily-র খনি ডেটা ধরে, এখানে সেই ডেটা থেকে সোনা বের হয়। pattern mining, anomaly detection, recommendation, causal inference। Spark, Flink — big data processing। স্থিতিশীল ফান্ডিং, কম প্রতিযোগিতা, প্রতিটা industry-তে demand। causal inference এখন হট — correlation নয়, causation বোঝা।",
  recall:{
    q:"সামির কেন বললেন অপরিশোধিত ডেটা কাদামাটি, পরিশোধিত ডেটা সোনা?",
    qen:"Why did Samir say raw data is mud, refined data is gold?",
    a:"কারণ কাঁচা ডেটা বিশাল কিন্তু অগোছালো — কাদামাটির মতো। পরিশোধন না করলে কিছু বোঝা যায় না। কিন্তু পরিশোধন করলে — pattern, anomaly, prediction — সোনা বের হয়। Netflix জানে তুমি কী দেখবে, Amazon জানে তুমি কী কিনবে — সব এই পরিশোধনের জন্য। big data গবেষণা হলো কাদামাটি থেকে সোনা বের করার শিল্প।",
    aen:"Because raw data is vast but chaotic — like mud. Without refining, nothing is understood. But refined — patterns, anomalies, predictions — gold emerges. Netflix knows what you'll watch, Amazon what you'll buy — all from this refining. Big data research is the art of extracting gold from mud."
  },
  story:`
<p class="scene-setting">একাদশ দরজা। লিলির খনি পেরিয়ে তুমি একটা বিশাল পরিশোধন কারখানায় — কনভেয়রে চলছে কাদামাটি ভর্তি বস্তা। কিন্তু কারখানার অন্য প্রান্তে বস্তা থেকে বের হচ্ছে ঝকঝকে সোনার দানা। মাঝখানে সামির — চশমা নাকে, হাতে একটা pattern মনিটর ও একটা pipeline ডায়াগ্রাম, চোখে বিশ্লেষকের ধৈর্য। লিলি পেছনে হাসছেন — তাঁর খনির ডেটা এখানে সোনা হয়। কাদামাটির ভেজা গন্ধ, মেশিনের গর্জন, সোনার ঝনঝন।</p>
<p class="scene-setting en">The eleventh door. Past Lily's mine, you enter a vast refinery — conveyor belts carrying sacks of mud. But at the other end, gleaming gold grains emerge from the sacks. In the middle stands Samir — glasses on nose, a pattern monitor and a pipeline diagram in hand, an analyst's patience in his eyes. Lily laughs behind — her mine's data becomes gold here. Smell of wet mud, the roar of machines, the clink of gold.</p>

<div class="dialogue">লিলি বললেন, "আমি ডেটা ধরি, সামির সেই ডেটা থেকে সোনা বের করে।" সামির একটা বস্তা খুললেন — ভেতরে কাদামাটি। "এটা raw data — user click, transaction, sensor। কিছু বোঝা যায়? না। কিন্তু আমি এটা পরিশোধন করি — pattern বের করি। এই কাদামাটিতে সোনা লুকানো — কে কী কিনবে, কোন সার্ভার ভাঙবে, কোন রোগীর কী হবে। আমার কাজ হলো সেই সোনা খোঁজা।" তিনি মনিটর দেখালেন — লাখ লাখ data point-এ একটা pattern ফুটে উঠল।</div>
<div class="dialogue en">Lily said, "I hold data, Samir extracts gold from it." Samir opened a sack — mud inside. "This is raw data — user clicks, transactions, sensors. Understandable? No. But I refine it — find patterns. Gold hides in this mud — who will buy what, which server will fail, what happens to which patient. My job is finding that gold." He showed the monitor — across millions of data points, a pattern emerged.</div>

<div class="diagram">
  <div class="diag-title">Big Data Pipeline — কাঁচা ডেটা থেকে insight</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowLeaf11" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#52c41a"/></marker>
    </defs>
    <text class="lbl-sm" x="280" y="22" fill="#7dd3fc">৫টি স্তর — প্রতিটা একটা research area</text>
    ${[ ['INGEST','Kafka, Flume',40,'cell-hot','#ff6b35'], ['STORE','Lake/Iceberg',150,'cell','#9290a8'], ['PROCESS','Spark, Flink',260,'cell-cyan','#3dd6c4'], ['MINE','pattern, anom',370,'cell-good','#52c41a'], ['ACT','recsys, decision',480,'cell-purple','#b37feb'] ].map(s=>`<rect class="${s[3]}" x="${s[2]-50}" y="55" width="100" height="50" rx="8" style="stroke:${s[4]}"/><text class="lbl-sm" x="${s[2]}" y="78" fill="${s[4]}" style="font-weight:700">${s[0]}</text><text class="lbl-sm" x="${s[2]}" y="94" fill="#9290a8" style="font-size:9px">${s[1]}</text>`).join('')}
    ${[150,260,370,480].map(x=>`<line class="edge-cyan" x1="${x-50}" y1="105" x2="${x-10}" y2="105" marker-end="url(#arrowLeaf11)"/>`).join('')}
    <text class="lbl-sm" x="90" y="135" fill="#ff6b35" style="font-size:9px">million events/sec</text>
    <text class="lbl-sm" x="280" y="150" fill="#5e5c74">প্রতিটা স্তরে চ্যালেঞ্জ — scale, fault tolerance, correctness, latency</text>
    <text class="lbl-sm" x="280" y="175" fill="#52c41a">🔥 causal inference: "কেন" বোঝো — A কি B-র কারণ, নাকি শুধু সম্পর্ক?</text>
    <text class="lbl-sm" x="280" y="195" fill="#5b9eff">streaming: real-time — সবকিছু batch নয়, live pipeline</text>
    <text class="lbl-sm" x="280" y="215" fill="#b37feb">recsys: Netflix/Amazon-এর core — billion-dollar research</text>
  </svg>
  <div class="diag-cap">big data = ৫-স্তর pipeline। প্রতিটা স্তরে depth। causal inference (কেন কিছু ঘটে) এখন সবচেয়ে হট — correlation নয়, causation।</div>
</div>

<div class="code-block"># ── STEP 1: What is data mining? ──
# Data mining = finding PATTERNS and INSIGHTS from large datasets.

# Python data science stack:
import pandas as pd
import numpy as np

# Load data:
df = pd.read_csv("sales.csv")

# Explore:
print(df.head())         # first 5 rows
print(df.describe())     # statistics (mean, std, min, max)
print(df.info())         # data types, missing values

# Handle missing data:
df = df.dropna()         # remove rows with missing values
# OR:
df["price"] = df["price"].fillna(df["price"].mean())  # fill with mean

# Filter and transform:
expensive = df[df["price"] > 1000]
df["discounted"] = df["price"] * 0.9  # new column

# Group and aggregate:
summary = df.groupby("category")["price"].agg(["mean", "count", "sum"])
print(summary)
#            mean  count     sum
# category
# Books    25.50    100   2550.0
# Phones  500.00     50  25000.0</div>

<div class="code-block"># ── STEP 2: Clustering — finding groups ──
# Group similar items without labels (unsupervised).

from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# Customer segmentation:
customers = pd.DataFrame({
    "age": [25, 30, 35, 45, 50, 55, 22, 28],
    "spending": [100, 200, 150, 500, 600, 550, 50, 80]
})

# Normalize data (important for K-means!):
scaler = StandardScaler()
scaled = scaler.fit_transform(customers)

# Cluster into 3 groups:
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
customers["cluster"] = kmeans.fit_predict(scaled)

print(customers)
#    age  spending  cluster
# 0   25       100        2   (young, low spending)
# 3   45       500        0   (middle-aged, high spending)
# ...

# Choosing K (number of clusters):
# Use the elbow method or silhouette score:
from sklearn.metrics import silhouette_score

for k in range(2, 8):
    labels = KMeans(n_clusters=k, random_state=42, n_init=10).fit_predict(scaled)
    score = silhouette_score(scaled, labels)
    print(f"  k={k}: silhouette={score:.3f}")
# Pick k with highest silhouette score</div>

<div class="code-block"># ── STEP 3: Anomaly detection ──
# Find unusual data points — fraud, errors, intrusions.

from sklearn.ensemble import IsolationForest

# Detect fraudulent transactions:
transactions = pd.DataFrame({
    "amount": [10, 20, 15, 5000, 25, 30, 9999, 12, 18, 8000],
    "frequency": [5, 3, 4, 1, 6, 3, 1, 5, 4, 1]
})

# Isolation Forest — isolates anomalies:
detector = IsolationForest(contamination=0.2, random_state=42)
transactions["is_anomaly"] = detector.fit_predict(transactions)

print(transactions)
#    amount  frequency  is_anomaly
# 0      10          5           1  (normal)
# 3    5000          1          -1  (ANOMALY!)
# 6    9999          1          -1  (ANOMALY!)

# Other methods:
# - Z-score: |value - mean| / std > 3 → anomaly
# - IQR: outside [Q1-1.5*IQR, Q3+1.5*IQR] → anomaly
# - DBSCAN: points in low-density regions = anomalies

# Real-world uses:
# - Credit card fraud detection
# - Network intrusion detection
# - Manufacturing defect detection
# - Medical anomaly detection</div>

<div class="code-block"># ── STEP 4: Recommendation systems ──
# The billion-dollar algorithm — Netflix, Amazon, YouTube.

# Simple collaborative filtering:
# "Users who bought X also bought Y"

# Using surprise library:
# from surprise import Dataset, KNNBasic
# from surprise.model_selection import train_test_split
#
# # Load movie ratings dataset:
# data = Dataset.load_builtin("ml-100k")
# trainset, testset = train_test_split(data, test_size=0.2)
#
# # User-based collaborative filtering:
# algo = KNNBasic(sim_options={"name": "cosine", "user_based": True})
# algo.fit(trainset)
#
# # Predict rating:
# prediction = algo.predict(user_id=1, item_id=10)
# print(f"Predicted rating: {prediction.est:.2f}")

# Content-based filtering:
# "If you liked action movies, recommend more action movies"

# Matrix factorization (SVD):
# Factor user-item matrix into user-factors × item-factors
# This is what won the Netflix Prize!

# Modern approaches (deep learning):
# - Two-tower models (user embedding × item embedding)
# - Sequential models (based on browsing history)
# - LLM-based recommendations ("describe what you want")

# Simple popularity-based fallback:
def recommend_popular(items, interactions, top_k=5):
    """Recommend the most popular items."""
    popular = interactions.groupby("item_id").size()
    return popular.nlargest(top_k).index.tolist()</div>

<div class="code-block"># ── STEP 5: Big data with Spark ──
# When data is too large for one machine, use distributed processing.

# Using PySpark:
# from pyspark.sql import SparkSession
# from pyspark.sql.functions import col, avg, count
#
# spark = SparkSession.builder.appName("Analysis").getOrCreate()
#
# # Load large dataset (terabytes!):
# df = spark.read.parquet("s3://bucket/data/")
#
# # Process distributed across cluster:
# result = (df
#     .filter(col("year") == 2024)
#     .groupBy("category")
#     .agg(avg("price"), count("*"))
#     .orderBy("avg(price)", ascending=False)
# )
#
# result.show()  # collect results

# Pandas vs Spark:
# ┌──────────┬────────────────────────────────────┐
# │ Pandas   │ Single machine, data fits in RAM  │
# │ Spark    │ Cluster, distributed, terabytes   │
# │ Dask     │ Like Pandas but parallel          │
# │ Polars   │ Fast single-machine (10x pandas)  │
# │ DuckDB   │ SQL queries on large files        │
# └──────────┴────────────────────────────────────┘

# When to use Spark:
# ✅ Data > 100GB
# ✅ Need distributed processing
# ✅ Stream processing (real-time)
# When NOT to use Spark:
# ❌ Data &lt; 10GB (use Pandas/Polars)
# ❌ Single-machine analysis
# ❌ Simple aggregations</div>

<div class="code-block"># ── STEP 6: Data mining pipeline ──
# Complete data analysis workflow:

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Step 1: LOAD
df = pd.read_csv("customer_churn.csv")

# Step 2: CLEAN
df = df.dropna()
df = pd.get_dummies(df, columns=["contract_type"])  # encode categoricals

# Step 3: EXPLORE
print(df.describe())
print(df["churn"].value_counts(normalize=True))

# Step 4: FEATURE ENGINEERING
df["tenure_years"] = df["tenure_months"] / 12
df["avg_monthly_charge"] = df["total_charges"] / df["tenure_months"]

# Step 5: SPLIT
X = df.drop("churn", axis=1)
y = df["churn"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Step 6: MODEL
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Step 7: EVALUATE
predictions = model.predict(X_test)
print(classification_report(y_test, predictions))

# Step 8: FEATURE IMPORTANCE
importance = pd.Series(model.feature_importances_, index=X.columns)
print(importance.nlargest(5))
# Shows which features drive customer churn!</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🔥🔥 Causal</td><td>Do-calculus, IV, double ML, counterfactual</td><td>KDD, AISTATS, NeurIPS</td></tr>
<tr><td class="hl">🔥 Recsys</td><td>Deep recsys, sequential, LLM-based, bandits</td><td>RecSys, KDD, WSDM, WWW</td></tr>
<tr><td class="hl">📊 Mining</td><td>Pattern, anomaly, graph, clustering</td><td>KDD, ICDM, SDM, CIKM</td></tr>
<tr><td class="hl">🌊 Big Data Sys</td><td>Spark, Flink, streaming, lakehouse</td><td>SIGMOD, VLDB, DEEM</td></tr>
<tr><td class="hl">📈 Time/Spatial</td><td>Forecasting, geo, mobility</td><td>KDD, ICDM, SIGSPATIAL</td></tr>
<tr><td class="hl">⚖️ Fairness</td><td>Bias, fairness-aware, privacy-preserving</td><td>FAccT, KDD, AIES</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫-৮%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">$৩০০M+</div><div class="sc-label">NSF + industry ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$১৫০-৩৫০K</div><div class="sc-label">industry (Netflix, Amazon, Meta, finance)</div></div>
<div class="stat-card"><div class="sc-num">🔥 causal</div><div class="sc-label">সবচেয়ে হট, সর্বোচ্চ academic demand</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"Data mining = শুধু SQL query আর Excel chart। নতুন কিছু নেই।" ভুল। causal inference ("আমার পেপার কি তার কেনাকাটা বাড়িয়েছে?"), deep recsys (billion-parameter), graph neural net, real-time streaming fraud detection — সব active research। correlation নয়, causation — এটাই এখন KDD-র হট test।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"Data mining + big data = ডেটা থেকে actionable insight। causal inference এখন সবচেয়ে হট — কারণ industry চায় 'কেন', শুধু 'কী' নয়। recsys = Netflix/Amazon-এর মূল। stable funding, প্রতিটা industry-তে demand। গাণিতিক (statistics) ও engineering দুটোই জোড়া লাগে।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> causal inference (double ML, synthetic control — econometrics * ML), LLM-based recsys, graph neural networks, real-time streaming fraud (Flink), responsible mining (fairness, privacy), foundation models for tabular data (TabPFN, ২০২৫)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ statistics/probability ভালোবাসো · ✅ pattern খোঁজা ভালো লাগে · ✅ industry-impact (finance, e-commerce, health) · ✅ database (Door 10) পরিচিত · 💡 causal inference = সবচেয়ে হট, কম ভিড়, উচ্চ demand।</div></div>

<div class="dialogue">"ডেটা গবেষণার গভীরতা হলো," সামির বললেন, "শুধু pattern খোঁজা নয় — কারণ খোঁজা। correlation বলে 'দুটো একসাথে ঘটে'। causation বলে 'একটা আরেকটার কারণ'। Netflix জানে তুমি A দেখলে B-ও দেখবে — correlation। কিন্তু A কি তোমাকে B দেখায়? সেটা causation। industry এখন causal চায় — কারণ সিদ্ধান্ত নিতে হয়। যে causal বোঝে, সে শুধু ভবিষ্যৎ দেখে না — ভবিষ্যৎ বদলায়।"</div>
<div class="dialogue en">"The depth of data research," Samir said, "isn't just finding patterns — it's finding causes. Correlation says 'two happen together'. Causation says 'one causes the other'. Netflix knows if you watch A you'll watch B — correlation. But does A make you watch B? That's causation. Industry now wants causal — because decisions must be made. One who grasps causation, doesn't just see the future — changes it."</div>

<div class="dialogue">ফিকর — গভীর চিন্তা, প্রতিফলন। কুরআনে আল্লাহ বারবার বলেন: "তোমরা কি চিন্তা করো না?" আসমান, যমীন, নিজের সৃষ্টি — সবকিছুতে ফিকর করতে বলা হয়েছে। data mining হলো ফিকর — ডেটার ভেতরে গভীর চিন্তা করা, pattern নয় অর্থ খোঁজা। causal inference হলো সবচেয়ে গভীর ফিকর — শুধু 'কী ঘটে' নয়, 'কেন ঘটে'। যে ফিকর করে, সে আল্লাহর নিদর্শন দেখে — ডেটাতেও। প্রতিটা pattern একটা আয়াত, প্রতিটা cause একটা হিকমাহ।</div>
<div class="dialogue en">Fikr — deep thought, reflection. Allah repeatedly says: "Do you not think?" In the heavens, earth, one's own creation — fikr is urged in everything. Data mining is fikr — deep thinking within data, seeking meaning not just patterns. Causal inference is the deepest fikr — not just 'what happens' but 'why'. One who does fikr sees Allah's signs — even in data. Each pattern is an ayah, each cause a hikmah.</div>

<div class="secret-box">📊 Data Mining + Big Data: ডেটা থেকে সোনা। স্থিতিশীল ফান্ডিং, কম ভিড় (৫-৮%), প্রতিটা industry-তে demand। হট: causal inference (কেন ঘটে), deep recsys, streaming। database (Door 10) পরিচিত থাকলে সহজ।</div>`,
  senior:{
    title:"Data Mining/Big Data PhD — Senior Path",
    body:`<p><strong>Causal inference = সবচেয়ে হট:</strong> double ML, synthetic control, Do-calculus — econometrics * ML crossover। industry (tech, pharma, policy) এখন causal গবেষক খুঁজছে। "A causes B" প্রমাণ করার method = high-demand skill। Susan Athey, Guido Imbens (২০২১ নোবেল)-এর কাজ পড়ো।</p><p><strong>Recsys with LLMs:</strong> LLM-based recommendation এখন জন্ম নিচ্ছে। একটা GPT-based recsys re-implement করো — RecSys workshop-এ লক্ষ্য। Netflix, Amazon-এর প্রকাশ্য দল এই area-তে hire করে।</p><p><strong>Kaggle দিয়ে portfolio:</strong> একটা Kaggle competition-এ top-10 = concrete credential। দেখায় তুমি real data থেকে insight বের করতে পারো। KDD Cup-এ অংশ নাও।</p><p><strong>Streaming = engineering-heavy:</strong> Flink/Spark-এ একটা real-time fraud/anomaly system বানাও। SIGMOD/VLDB demo track = সহজ entry।</p>`
  }
});

// ══ DOOR 12: INTERACTION & ACCESSIBILITY ══
doors.push({
  num:12, icon:"👋", color:"#c084fc", name:"স্পর্শের সেতু",
  subtitle:"The Bridge of Touch", tech:"Interaction & Accessibility",
  spirit:"রহম — করুণা, অন্যের কষ্ট বোঝা",
  secret:"HCI হলো CS-এর সবচেয়ে কম প্রতিযোগিতার (৮-১২%) ডোমেইন — কিন্তু সবচেয়ে বেশি মানব-প্রভাব। কোড নয়, মানুষ নিয়ে কাজ — user study, interview, qualitative। প্রতিটা ইন্টারফেস, প্রতিটা accessibility feature মানুষের জীবন বদলায়। তুমি Ipractus বানিয়েছ — UI তোমার পরিচিত। এখানে সেই UI-কে সবার জন্য, বিশেষত প্রতিবন্ধী ও বৃদ্ধদের জন্য, খোলা করা হয়।",
  recall:{
    q:"আয়েশা কেন বললেন সেতু শুধু দুই পাড় যোগ করে না, মানুষকে যোগ করে?",
    qen:"Why did Ayesha say a bridge doesn't just connect two banks, it connects people?",
    a:"কারণ একটা সেতু শুধু দুটো জায়গাকে যোগ করে না — দুটো দুনিয়াকে। HCI হলো সেই সেতু — কম্পিউটার আর মানুষের মাঝে। যে সেতু বানায়, সে মানুষকে প্রযুক্তির দুনিয়ায় নিয়ে যায়। কিন্তু সেতু যদি অ্যাক্সেসিবল না হয় — অন্ধ, প্রতিবন্ধী, বৃদ্ধ পার হতে পারবে না। accessibility = সবার জন্য সেতু। এটাই রহম — কারও কষ্ট না বুঝলে সেতু অসম্পূর্ণ।",
    aen:"Because a bridge doesn't just connect two places — it connects two worlds. HCI is that bridge — between computer and human. One who builds the bridge brings people into the digital world. But if the bridge isn't accessible — the blind, disabled, elderly can't cross. Accessibility = a bridge for everyone. This is rahm — without understanding someone's struggle, the bridge is incomplete."
  },
  story:`
<p class="scene-setting">দ্বাদশ দরজা। সামিরের পরিশোধন কারখানা পেরিয়ে তুমি একটা নদীর উপর সুন্দর সেতুতে — কিন্তু একটু অদ্ভুত। সেতুর এক পাশে সিঁড়ি, অন্য পাশে র‍্যাম্প। কোথাও tactile paving (উঁচু দাগ, অন্ধদের জন্য), কোথাও audio signal। সেতুতে হাঁটছে বিভিন্ন মানুষ — একজন হাতে সাদা ছড়ি, একজন হুইলচেয়ারে, একজন বৃদ্ধ। সেতুর মাঝখানে বসে আছেন আয়েশা — হাতে একটা ক্লে-মডেল (UI prototype), চোখে সহানুভূতি, মুখে কোমল হাসি। তাঁর পাশে ছড়ানো paper prototype, color sample, user-testing note। নদীর শব্দ, কাগজের খসখস, হালকা বাতাস।</p>
<p class="scene-setting en">The twelfth door. Past Samir's refinery, you reach a beautiful bridge over a river — but slightly strange. Stairs on one side, a ramp on the other. Tactile paving (raised lines, for the blind) here, audio signal there. Various people walk — one with a white cane, one in a wheelchair, an elderly person. At the bridge's center sits Ayesha — a clay-model (UI prototype) in hand, empathy in eyes, gentle smile on face. Beside her: paper prototypes, color samples, user-testing notes. River sound, paper rustle, light breeze.</p>

<div class="dialogue">সামির পেছন থেকে বললেন, "আমি ডেটা থেকে insight বের করি, কিন্তু সেই insight কার কাছে পৌঁছায়?" আয়েশা হাসলেন। "আমার কাছে।" তিনি সেতুর দিকে তাকালেন। "এই সেতু — এটাই HCI। কম্পিউটার এক দুনিয়া, মানুষ আরেক দুনিয়া। এই দুই দুনিয়ার মাঝে সেতু — সেটাই interaction। কিন্তু সেতু যদি সবার জন্য না হয়?" তিনি হুইলচেয়ারের মানুষটিকে দেখালেন — সিঁড়ি দিয়ে উঠতে পারছে না। "অ্যাক্সেসিবিলিটি — সবার জন্য সেতু। অন্ধ, বধির, প্রতিবন্ধী, বৃদ্ধ — সবার জন্য।"</div>
<div class="dialogue en">Samir said from behind, "I extract insight from data, but to whom does that insight reach?" Ayesha smiled. "To me." She looked at the bridge. "This bridge — that's HCI. Computer is one world, human is another. The bridge between them — that's interaction. But what if the bridge isn't for everyone?" She showed the person in the wheelchair — unable to climb the stairs. "Accessibility — a bridge for everyone. The blind, deaf, disabled, elderly — for all."</div>

<div class="diagram">
  <div class="diag-title">HCI — কোড নয়, মানুষ নিয়ে গবেষণা</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowPurple12" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#b37feb"/></marker>
      <marker id="arrowCyan12" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#3dd6c4"/></marker>
    </defs>
    <text class="lbl-sm" x="100" y="40" fill="#b37feb">QUALITATIVE</text>
    <text class="lbl-sm" x="380" y="40" fill="#3dd6c4">QUANTITATIVE</text>
    <!-- Qual methods -->
    ${[ ['Interview','user-এর কথা শোনো',55], ['Observation','কী করে দেখো',55], ['Think-aloud','করতে করতে বলো',55] ].map((s,i)=>`<rect class="cell-purple" x="30" y="${60+i*32}" width="150" height="26" rx="5"/><text class="lbl-sm" x="${105}" y="${76+i*32}" fill="#b37feb">${s[0]}</text>`).join('')}
    <!-- Quant methods -->
    ${[ ['A/B test','দুটো design তুলনা',380], ['Eye-tracking','কোথায় তাকায়',380], ['Logs/metrics','click, time, error',380] ].map((s,i)=>`<rect class="cell-cyan" x="290" y="${60+i*32}" width="160" height="26" rx="5"/><text class="lbl-sm" x="${370}" y="${76+i*32}" fill="#3dd6c4">${s[0]}</text>`).join('')}
    <!-- converge to insight -->
    <line class="edge-amber" x1="180" y1="110" x2="270" y2="150" style="stroke:#b37feb"/>
    <line class="edge-amber" x1="290" y1="110" x2="270" y2="150" style="stroke:#3dd6c4"/>
    <rect class="cell-good" x="210" y="145" width="140" height="34" rx="8"/>
    <text class="lbl" x="280" y="167" fill="#52c41a">INSIGHT → DESIGN</text>
    <text class="lbl-sm" x="280" y="205" fill="#5e5c74">HCI = দুই method মিলিয়ে — সংখ্যা বলে 'কত', কথা বলে 'কেন'</text>
    <text class="lbl-sm" x="280" y="222" fill="#5e5c74">accessibility = এই insight সব মানুষের জন্য প্রয়োগ — বিশেষভাবে প্রতিবন্ধী/বৃদ্ধ</text>
  </svg>
  <div class="diag-cap">HCI একা quantitative নয়, একা qualitative নয় — দুটো মিলে। সংখ্যা বলে 'কত মানুষ ভুল করল', interview বলে 'কেন ভুল করল'। accessibility = এই গবেষণা সব মানুষের জন্য খোলা রাখা।</div>
</div>

<div class="code-block"># ── STEP 1: What is HCI? ──
# HCI (Human-Computer Interaction) = designing interfaces that
# work WELL for humans.

# Key principle: the interface should be INVISIBLE.
# Good design → user focuses on their task, not the tool.
# Bad design → user fights the interface.

# Usability principles (Nielsen's heuristics):
# 1. Visibility of system status (show progress bars)
# 2. Match real world (use familiar terms)
# 3. User control and freedom (undo, cancel)
# 4. Consistency (same button = same action everywhere)
# 5. Error prevention (confirm destructive actions)
# 6. Recognition over recall (show options, don't make user remember)
# 7. Flexibility (shortcuts for experts)
# 8. Aesthetic and minimalist design
# 9. Help users recover from errors
# 10. Help and documentation

# In code — building accessible interfaces:
# HTML with accessibility (ARIA labels):
html_template = """
&lt;button aria-label="Close dialog" onclick="close()"&gt;
  &lt;span aria-hidden="true"&gt;✕&lt;/span&gt;
&lt;/button&gt;

&lt;form&gt;
  &lt;label for="email"&gt;Email address&lt;/label&gt;
  &lt;input type="email" id="email" required
         aria-describedby="email-hint" /&gt;
  &lt;small id="email-hint"&gt;We'll never share your email.&lt;/small&gt;
&lt;/form&gt;
"""</div>

<div class="code-block"># ── STEP 2: Accessibility in practice ──
# Accessibility = making technology usable for EVERYONE.
# Including: blind, low vision, motor impaired, deaf, cognitive.

# Screen reader testing:
# A blind user navigates with a screen reader (VoiceOver, NVDA).
# Everything must work with KEYBOARD ONLY (no mouse).

# Semantic HTML is the foundation:
semantic_html = """
&lt;nav&gt;           &lt;!-- navigation --&gt;
&lt;main&gt;          &lt;!-- main content --&gt;
&lt;article&gt;       &lt;!-- standalone content --&gt;
&lt;button&gt;        &lt;!-- actionable (not &lt;div onclick&gt;) --&gt;
&lt;label&gt;         &lt;!-- form labels --&gt;
&lt;fieldset&gt;      &lt;!-- group related form fields --&gt;
"""

# WCAG guidelines (Web Content Accessibility Guidelines):
# 1. Perceivable: can be seen/heard (alt text, captions)
# 2. Operable: can be used (keyboard, no seizure triggers)
# 3. Understandable: readable and predictable
# 4. Robust: works with assistive technologies

# Color contrast check:
def check_contrast(r1, g1, b1, r2, g2, b2):
    """Check WCAG color contrast ratio."""
    def luminance(r, g, b):
        rs, gs, bs = r/255, g/255, b/255
        def adjust(c):
            return c/12.92 if c &lt;= 0.03928 else ((c+0.055)/1.055)**2.4
        return 0.2126*adjust(rs) + 0.7152*adjust(gs) + 0.0722*adjust(bs)

    l1 = luminance(r1, g1, b1)
    l2 = luminance(r2, g2, b2)
    lighter = max(l1, l2)
    darker = min(l1, l2)
    ratio = (lighter + 0.05) / (darker + 0.05)

    return f"Contrast: {ratio:.1f}:1 ({'PASS' if ratio >= 4.5 else 'FAIL'})"

print(check_contrast(0, 0, 0, 255, 255, 255))  # Contrast: 21.0:1 (PASS)
print(check_contrast(150, 150, 150, 200, 200, 200))  # Contrast: 1.8:1 (FAIL)</div>

<div class="code-block"># ── STEP 3: Usability testing ──
# Don't guess what users want — TEST with real users.

# Methods:
# 1. THINK ALOUD: user narrates their thought process
# 2. TASK-BASED: give specific tasks, measure time + errors
# 3. EYE TRACKING: where do users look?
# 4. A/B TESTING: compare two designs

# Simple usability test script:
test_tasks = [
    "Find and buy a red laptop",
    "Change your shipping address",
    "Cancel your last order",
    "Find the return policy",
]

# Metrics to track:
# - Task completion rate (% who succeed)
# - Time on task
# - Error rate
# - User satisfaction (1-10)

# System Usability Scale (SUS) — 10 question survey:
sus_questions = [
    "I think that I would like to use this system frequently",
    "I found the system unnecessarily complex",
    "I thought the system was easy to use",
    "I think that I would need support to use this system",
    "I found the various functions well integrated",
    "I thought there was too much inconsistency",
    "I would imagine most people would learn quickly",
    "I found the system very cumbersome to use",
    "I felt very confident using the system",
    "I needed to learn a lot of things before using this system",
]
# Score: 0-100. Above 68 = above average. Above 80 = excellent.

# In practice, run 5 users — they find 85% of usability problems.
# (Nielsen's research: 5 users is the sweet spot for ROI)</div>

<div class="code-block"># ── STEP 4: UI/UX design principles ──
# UI (User Interface) = how it looks
# UX (User Experience) = how it feels

# DESIGN THINKING process:
# 1. EMPATHIZE: interview users, understand needs
# 2. DEFINE: identify the core problem
# 3. IDEATE: brainstorm solutions
# 4. PROTOTYPE: build quick mockups
# 5. TEST: validate with real users

# Building a prototype with Python (Streamlit):
# import streamlit as st
#
# st.title("Task Manager")
#
# # Simple UI:
# task = st.text_input("New task:")
# priority = st.select_slider("Priority", ["Low", "Medium", "High"])
# if st.button("Add"):
#     st.session_state.tasks.append({"task": task, "priority": priority})
#
# for t in st.session_state.tasks:
#     col1, col2 = st.columns([4, 1])
#     col1.write(f"{'🔴' if t['priority']=='High' else '🟢'} {t['task']}")
#     if col2.button("Done", key=t['task']):
#         st.session_state.tasks.remove(t)

# KEY UX PRINCIPLES:
# - Progressive disclosure (don't overwhelm; reveal complexity gradually)
# - Jakob's Law: users spend most time on OTHER sites
#   → follow conventions (logo top-left, search top-right)
# - Fitts's Law: bigger + closer targets are faster to click
# - Hick's Law: more choices = slower decisions
#   → limit options (Miller's 7±2 rule)

# DARK PATTERNS (avoid these!):
# - Roach motel: easy to sign up, hard to cancel
# - Forced continuity: "free trial" requires credit card
# - Confirmshaming: "No thanks, I hate saving money"
# - Sneak into basket: adds items without consent</div>

<div class="code-block"># ── STEP 5: Voice and gesture interfaces ──
# Interaction beyond mouse and keyboard.

# Voice interface with Python:
# import speech_recognition as sr
# import pyttsx3
#
# recognizer = sr.Recognizer()
# engine = pyttsx3.init()
#
# with sr.Microphone() as source:
#     print("Listening...")
#     audio = recognizer.listen(source)
#     text = recognizer.recognize_google(audio)
#     print(f"You said: {text}")
#
#     engine.say(f"You said {text}")
#     engine.runAndWait()

# GESTURE recognition with MediaPipe:
# import cv2
# import mediapipe as mp
#
# mp_hands = mp.solutions.hands
# hands = mp_hands.Hands()
#
# cap = cv2.VideoCapture(0)
# while True:
#     ret, frame = cap.read()
#     results = hands.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
#     if results.multi_hand_landmarks:
#         for hand_landmarks in results.multi_hand_landmarks:
#             # 21 landmarks per hand
#             # Detect gestures (thumbs up, peace, fist, etc.)
#             pass

# GAZE tracking (eye tracking):
# - Determine where user is looking
# - Used for: accessibility, gaming, marketing research
# - Tools: Tobii eye trackers, webcam-based solutions

# The future of interaction:
# - Voice-first (Alexa, Siri)
# - Gesture (Vision Pro, Leap Motion)
# - Brain-computer interfaces (Neuralink)
# - AR/VR spatial computing (Apple Vision Pro)</div>

<div class="code-block"># ── STEP 6: HCI research areas ──
# ┌─────────────────────┬─────────────────────────────────────┐
# │ Area                │ What you study                     │
# ├─────────────────────┼─────────────────────────────────────┤
# │ Accessibility       │ Screen readers, motor, cognitive  │
# │ Interaction         │ Touch, gesture, voice, gaze       │
# │ CSCW                │ Collaboration tools, remote work  │
# │ Ubiquitous          │ IoT, wearables, smart home        │
# │ Accessible AI       │ AI for accessibility + vice versa │
# │ Methods/Theory      │ Design methods, human performance │
# └─────────────────────┴─────────────────────────────────────┘

# CONFERENCES:
# CHI         — THE HCI conference (largest)
# UIST        — user interface software & technology
# CSCW        — collaborative work
# ASSETS      — accessibility
# DIS         — designing interactive systems
# TEI         — tangible, embedded, embodied interaction

# HOT TOPICS:
# - AI-assisted interfaces (LLM as UI builder)
# - Accessibility for AI (make LLMs usable by everyone)
# - AR/VR interfaces (spatial computing)
# - Brain-computer interfaces
# - Remote collaboration (post-COVID)
# - Inclusive design for diverse populations

# CAREER PATHS:
# - UX Researcher (study user behavior)
# - Interaction Designer (design interfaces)
# - Accessibility Engineer (ensure inclusion)
# - Product Designer (end-to-end design)
# - HCI Researcher (academia or industry labs)

# KEY INSIGHT:
# You can have the best algorithm in the world,
# but if the interface is bad, nobody will use it.
# HCI is where technology meets HUMANITY.</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">♿ Accessibility</td><td>Screen reader, motor, cognitive, aging</td><td>ASSETS, CHI, W4A, TACCESS</td></tr>
<tr><td class="hl">👋 Interaction</td><td>Touch, gesture, voice, gaze, haptic</td><td>CHI, UIST, TEI, ISS</td></tr>
<tr><td class="hl">👥 CSCW</td><td>Collab tools, social, remote work</td><td>CSCW, CHI, GROUP</td></tr>
<tr><td class="hl">📱 UbiComp</td><td>IoT, wearables, mobile, context-aware</td><td>UbiComp, MobiCom, CHI</td></tr>
<tr><td class="hl">🔥 Accessible AI</td><td>AI for access, access of AI, inclusive LLM</td><td>ASSETS, CHI, AIES</td></tr>
<tr><td class="hl">🧠 Methods/Theory</td><td>Participatory, human perf, critical HCI</td><td>CHI, DIS, CSCW</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৮-১২%</div><div class="sc-label">গ্রহণের হার (সবচেয়ে কম প্রতিযোগিতা)</div></div>
<div class="stat-card"><div class="sc-num">$২০০M+</div><div class="sc-label">NSF HCI ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$১২০-২৮০K</div><div class="sc-label">UX researcher বেতন</div></div>
<div class="stat-card"><div class="sc-num">সর্বোচ্চ</div><div class="sc-label">মানব-প্রভাব</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"HCI = শুধু UI design, সুন্দর button বানানো। গবেষণা নয়, শিল্প।" ভুল। HCI হলো মানুষ কীভাবে প্রযুক্তি বোঝে ও ব্যবহার করে তার বিজ্ঞান — user study, statistics, cognitive modeling, behavioral experiment। Fitts' law, Hick's law — এগুলো সরাসরি বিজ্ঞান। accessibility research একটা গোটা field — অন্ধ মানুষ কীভাবে screen reader ব্যবহার করে, সেটা গবেষণা।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"HCI হলো কম্পিউটার + মানুষের intersection — বিজ্ঞান ও শিল্প দুটোই। qualitative + quantitative method দরকার। সবচেয়ে কম প্রতিযোগিতা, সবচেয়ে বেশি মানব-প্রভাব। accessibility = প্রতিটা মানুষের জন্য প্রযুক্তি খোলা করা — ন্যায্যতা, ইনসাফ। তোমার UI অভিজ্ঞতা (Ipractus) এখানে সোনা।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> accessible AI (LLM auto-caption, sign language gen, screen reader + LLM), AI agents accessibility, aging-in-place tech (dementia support), XR accessibility, participatory AI design, accessible coding tools (Copilot for blind devs)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅✅ হ্যাঁ — তুমি Ipractus (React Native) বানিয়েছ, UI পরিচিত। কম প্রতিযোগিতা (৮-১২%), সর্বোচ্চ মানব-প্রভাব। ✅ মানুষ বোঝো · ✅ design + psychology আগ্রহ · ⚠️ শুধু কোডিং নয় — qualitative skill দরকার · 💡 accessibility = সবচেয়ে গুরুত্বপূর্ণ sub-field, কম ভিড়।</div></div>

<div class="dialogue">"HCI-এর একটা বিশেষত্ব আছে," আয়েশা বললেন। "অন্যান্য ডোমেইনে তুমি শুধু কোড দিয়ে কাজ করো। HCI-তে তুমি মানুষকে নিয়ে কাজ করো। user study — মানুষকে দেখো, কথা বলো, বোঝো। এর জন্য qualitative research skill দরকার — interview, observation, thematic analysis। কিন্তু এই কারণেই HCI গবেষণা সবচেয়ে প্রভাবশালী — তুমি সরাসরি মানুষের জীবন স্পর্শ করো। তুমি Ipractus বানিয়েছ — মানুষ কীভাবে সেটা ব্যবহার করবে, সেটা ভেবেছ। এই চিন্তাই HCI।"</div>
<div class="dialogue en">"HCI has a uniqueness," Ayesha said. "In other domains you work only with code. In HCI, you work with people. User studies — watch people, talk to them, understand them. This needs qualitative skills — interview, observation, thematic analysis. But this is exactly why HCI research is most impactful — you directly touch people's lives. You built Ipractus — you thought about how people use it. That thinking is HCI."</div>

<div class="dialogue">রহম — করুণা, অন্যের কষ্ট বোঝা। আল্লাহ বলেন: "আমি তোমাদের মাঝে রহমত বানিয়েছি।" HCI গবেষণা হলো রহম — অন্যের কষ্ট বোঝা। অন্ধ মানুষ কীভাবে কম্পিউটার ব্যবহার করে? প্রতিবন্ধী মানুষ কীভাবে অ্যাক্সেস করে? বৃদ্ধ মানুষ কীভাবে প্রযুক্তি ব্যবহার করে? এই প্রশ্ন করা = রহম। যে রহম করে, সে মানুষের জীবন সহজ করে। accessibility গবেষণা হলো প্রতিটা মানুষের জন্য প্রযুক্তি খোলা করা। এটা ন্যায্যতা, এটা ইনসাফ। যে ইনসাফ করে, সে আল্লাহর প্রিয়।</div>
<div class="dialogue en">Rahm — compassion, understanding others' pain. Allah says: "We have placed mercy among you." HCI research is rahm — understanding others' pain. How does a blind person use a computer? How does a disabled person access it? How does an elderly person use technology? Asking these questions = rahm. One who is compassionate, makes people's lives easier. Accessibility research is opening technology for every person. This is equity, this is justice. One who does justice, is beloved to Allah.</div>

<div class="secret-box">👋 HCI: সবচেয়ে কম প্রতিযোগিতা (৮-১২%), সবচেয়ে বেশি human impact। কোড + qualitative (user study)। accessibility = সবার জন্য প্রযুক্তি। তোমার Ipractus UI অভিজ্ঞতা সোনা।</div>`,
  senior:{
    title:"HCI/Accessibility PhD — Senior Path",
    body:`<p><strong>সবচেয়ে কম প্রতিযোগিতা:</strong> ৮-১২% admit rate, AI-এর চেয়ে ৩-৪ গুণ বেশি সুযোগ। তোমার UI অভিজ্ঞতা (Ipractus) এখানে direct relevance — বিরল combination।</p><p><strong>Accessibility = সবচেয়ে গুরুত্বপূর্ণ:</strong> ASSETS conference (specialized), CHI accessibility track। একটা real accessibility study (যেমন "বাংলা screen reader usability") — concrete, impactful, citable। প্রতিবন্ধী community-র সাথে কাজ = deep meaning।</p><p><strong>Qualitative skill শিখো:</strong> semi-structured interview, thematic analysis (Braun &amp; Clarke), grounded theory। একটা ৫-user study একটা ৫০০-user survey-এর চেয়ে বেশি insight দিতে পারে। UX research book — 'Just Enough Research'।</p><p><strong>Accessible AI crossover:</strong> LLM দিয়ে accessibility (auto-caption, sign language, image description for blind) — এখন হট। তোমার AI আগ্রহ + HCI = এই niche। ASSETS/CHI-তে প্রথম দিকের পেপার = বড় impact।</p>`
  }
});

// ══ DOOR 13: AR/VR & BRAIN-COMPUTER INTERFACES ══
doors.push({
  num:13, icon:"🥽", color:"#c084fc", name:"অন্য দুনিয়ার দরজা",
  subtitle:"The Other-World Gate", tech:"AR/VR & Brain-Computer Interfaces",
  spirit:"মিথাক — অন্য জগতে যাত্রা, নতুন দিক",
  secret:"AR/VR + BCI হলো HCI-এর সবচেয়ে frontier অংশ — সম্পূর্ণ নতুন interaction paradigm। VR (সম্পূর্ণ অন্য দুনিয়া), AR (বাস্তবের উপর স্তর), BCI (চিন্তা দিয়ে নিয়ন্ত্রণ)। Vision Pro, Neuralink — এখন যুগ শুরু। niche, কম ভিড়, কিন্তু hardware-নির্ভর ও high-risk। যদি ভবিষ্যতের frontier-এ থাকতে চাও — এটা। কিন্তু hardware lab ও patience দরকার।",
  recall:{
    q:"নুসরাত কেন বললেন একটা গ্লাস পরলে তুমি অন্য দুনিয়ায়, কিন্তু সেই দুনিয়া সত্যি নয়?",
    qen:"Why did Nusrat say putting on a glass takes you to another world, but that world isn't real?",
    a:"কারণ VR চোখকে বোকা বানায় — সম্পূর্ণ অন্য দুনিয়া দেখায় যা সত্যি নয়। AR আংশিক — বাস্তবের উপর স্তর। BCI একদম অন্য — চিন্তা পড়ে, কোনো হাত লাগে না। এই সব frontier interaction। কিন্তু চ্যালেঞ্জ — motion sickness, latency, BCI noise, ethics। গবেষণা মানে এই সমস্যা সমাধান করা। ভবিষ্যতের কম্পিউটিং এখানে — spatial computing।",
    aen:"Because VR fools the eyes — shows a wholly other world that isn't real. AR is partial — a layer over reality. BCI is wholly different — reads thoughts, no hands needed. These are frontier interactions. But challenges — motion sickness, latency, BCI noise, ethics. Research means solving these. The future of computing is here — spatial computing."
  },
  story:`
<p class="scene-setting">ত্রয়োদশ দরজা। আয়েশার সেতু পেরিয়ে তুমি একটা অন্ধকার কক্ষে — কিন্তু দেয়ালে ভাসমান দরজা, মেঝেতে আলোর বৃত্ত। একটা টেবিলে সাজানো চশমা (ভিআর হেডসেট), হাতের মোজা (haptic glove), আর একটা মাথায় পরার রিং (BCI EEG cap)। মাঝখানে দাঁড়িয়ে নুসরাত — ছোট কালো চুল, হাতে একটা VR হেডসেট ও একটা EEG signal monitor, চোখে অভিযাত্রীর বিস্ময়। আয়েশা পেছনে ফিসফিস করে বলছেন — এটা তাঁর HCI-এর সবচেয়ে দুঃসাহসী সীমানা। প্লাস্টিক ও তারের গন্ধ, LED-র নরম আলো, দূরে সার্ভো মোটরের ঝিঁঝিঁ।</p>
<p class="scene-setting en">The thirteenth door. Past Ayesha's bridge, you enter a dark chamber — but floating doors on the walls, circles of light on the floor. On a table: glasses (VR headset), hand-gloves (haptic), and a head-ring (BCI EEG cap). In the center stands Nusrat — short black hair, a VR headset and an EEG signal monitor in hand, an explorer's wonder in her eyes. Ayesha whispers behind — this is HCI's boldest frontier. Smell of plastic and wire, soft LED light, distant servo whine.</p>

<div class="dialogue">আয়েশা বললেন, "আমি সেতু দেখালাম — কম্পিউটার ও মানুষের মাঝে। কিন্তু নুসরাত সেই সেতুকে একদম অন্য জায়গায় নিয়ে যায় — অন্য দুনিয়ায়।" নুসরাত একটা VR হেডসেট তোমার হাতে দিলেন। "এটা পরো।" তুমি পরলে — সম্পূর্ণ অন্য দুনিয়া। নদী, পাহাড়, সব কাল্পনিক কিন্তু বাস্তব মনে হচ্ছে। "এটা VR — virtual reality।" তারপর তিনি EEG রিংটা দেখালেন। "এটা শুধু দেখো না — চিন্তা দিয়ে নিয়ন্ত্রণ করো। BCI। মানুষের মস্তিষ্কের signal পড়ে কম্পিউটার চালায়। এটাই frontier।"</div>
<div class="dialogue en">Ayesha said, "I showed the bridge — between computer and human. But Nusrat takes that bridge somewhere wholly else — to another world." Nusrat placed a VR headset in your hand. "Put it on." You did — a wholly other world. Rivers, mountains, all imaginary but feeling real. "This is VR — virtual reality." Then she showed the EEG ring. "Not just see — control with thought. BCI. Reading human brain signals to drive a computer. This is the frontier."</div>

<div class="diagram">
  <div class="diag-title">Spatial Computing Spectrum — বাস্তব থেকে অন্য দুনিয়া</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowPurple13" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#b37feb"/></marker>
    </defs>
    <line class="axis" x1="40" y1="100" x2="520" y2="100"/>
    <text class="lbl-sm" x="60" y="90" fill="#52c41a">বাস্তব</text>
    <text class="lbl-sm" x="500" y="90" fill="#b37feb">অন্য দুনিয়া</text>
    ${[ ['BCI','চিন্তা দিয়ে',100,'#5b9eff'], ['AR','বাস্তবে স্তর',220,'#3dd6c4'], ['MR','মিশ্র বাস্তব',340,'#b37feb'], ['VR','সম্পূর্ণ অন্য',460,'#ef4444'] ].map(s=>`<circle cx="${s[2]}" cy="100" r="9" style="fill:${s[3]}22;stroke:${s[3]};stroke-width:2"/><text class="lbl-sm" x="${s[2]}" y="75" fill="${s[3]}" style="font-weight:700">${s[0]}</text><text class="lbl-sm" x="${s[2]}" y="130" fill="#9290a8" style="font-size:9px">${s[1]}</text>`).join('')}
    <text class="lbl-sm" x="100" y="160" fill="#5b9eff">EEG, fNIRS, spike — Neuralink</text>
    <text class="lbl-sm" x="220" y="160" fill="#3dd6c4">HoloLens, Vision Pro, Meta glasses</text>
    <text class="lbl-sm" x="340" y="160" fill="#b37feb">Quest, passthrough, depth</text>
    <text class="lbl-sm" x="460" y="160" fill="#ef4444">Quest, Apple Vision, fully immersive</text>
    <text class="lbl-sm" x="280" y="195" fill="#5e5c74">চ্যালেঞ্জ: latency (motion sickness), resolution, haptic, BCI noise</text>
    <text class="lbl-sm" x="280" y="215" fill="#5e5c74">🔥 spatial computing = next platform (Apple/Meta-র বিলিয়ন ডলার bet)</text>
  </svg>
  <div class="diag-cap">BCI → AR → MR → VR: একটা spectrum, বাস্তব থেকে কল্পনা পর্যন্ত। প্রতিটা নিজস্ব চ্যালেঞ্জ। spatial computing হলো পরবর্তী computing platform — smartphone-এর পর।</div>
</div>

<div class="code-block"># ── STEP 1: AR vs VR vs MR ──
# VR (Virtual Reality): fully immersive, can't see real world
# AR (Augmented Reality): overlay digital on real world
# MR (Mixed Reality): digital objects interact with real world

# Python AR/VR libraries:
# - Open3D: 3D processing
# - ARToolKit: marker tracking
# - Unity + Python: game engine scripting

# Reading sensor data from VR headset:
# import openvr  # SteamVR
#
# vr_system = openvr.init(openvr.VRApplication_Scene)
#
# # Get headset pose (position + rotation):
# pose = vr_system.getDeviceToAbsoluteTrackingPose(
#     openvr.TrackingUniverseStanding, 0, 1
# )
# headset_pose = pose[0].mDeviceToAbsoluteTracking
# # Extract position (x, y, z) and rotation matrix

# AR with camera (overlay on video):
import cv2
import numpy as np

# Load camera feed:
# cap = cv2.VideoCapture(0)
# while True:
#     ret, frame = cap.read()
#
#     # Detect ArUco markers (AR markers):
#     dictionary = cv2.aruco.getPredefinedDictionary(cv2.aruco.DICT_4X4_50)
#     corners, ids, _ = cv2.aruco.detectMarkers(frame, dictionary)
#
#     if ids is not None:
#         # Draw 3D object on top of marker
#         cv2.aruco.drawDetectedMarkers(frame, corners, ids)
#
#     cv2.imshow("AR", frame)

# XR spectrum:
# Reality ← → Augmented → Mixed → Virtual
# Real world only  |  Real + digital  |  Full digital</div>

<div class="code-block"># ── STEP 2: 3D rendering basics ──
# XR requires rendering 3D scenes at 90+ FPS (to prevent motion sickness).

# 3D coordinate system:
# X = left/right
# Y = up/down
# Z = forward/backward

# Transformation matrices (position, rotation, scale):
import numpy as np

def translation_matrix(x, y, z):
    """Create a translation matrix."""
    return np.array([
        [1, 0, 0, x],
        [0, 1, 0, y],
        [0, 0, 1, z],
        [0, 0, 0, 1]
    ])

def rotation_y_matrix(angle_degrees):
    """Rotate around Y axis."""
    angle = np.radians(angle_degrees)
    c, s = np.cos(angle), np.sin(angle)
    return np.array([
        [c, 0, s, 0],
        [0, 1, 0, 0],
        [-s, 0, c, 0],
        [0, 0, 0, 1]
    ])

# Combine transformations:
position = translation_matrix(0, 1.5, -3)  # 1.5m up, 3m forward
rotation = rotation_y_matrix(45)  # 45 degrees
model_matrix = position @ rotation  # matrix multiplication

# PERFORMANCE REQUIREMENTS:
# VR: 90 FPS minimum (11ms per frame)
# AR: 60 FPS minimum
# If frame drops below → MOTION SICKNESS
# This is why XR is so performance-critical!

# Techniques to maintain FPS:
# - Foveated rendering (render center of view in high detail)
# - Level of detail (reduce detail for distant objects)
# - Occlusion culling (don't render hidden objects)
# - Asynchronous timewarp (reproject previous frame)</div>

<div class="code-block"># ── STEP 3: Hand tracking and gesture ──
# Natural interaction in XR — use your hands!

# Using MediaPipe for hand tracking:
# import mediapipe as mp
# import cv2
#
# mp_hands = mp.solutions.hands
# mp_drawing = mp.solutions.drawing_utils
#
# hands = mp_hands.Hands(
#     max_num_hands=2,
#     min_detection_confidence=0.7
# )
#
# cap = cv2.VideoCapture(0)
# while True:
#     ret, frame = cap.read()
#     rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
#     results = hands.process(rgb)
#
#     if results.multi_hand_landmarks:
#         for landmarks in results.multi_hand_landmarks:
#             # 21 landmarks per hand:
#             # - 4 per finger (tip, pip, mcp)
#             # - 1 wrist
#             mp_drawing.draw_landmarks(frame, landmarks, mp_hands.HAND_CONNECTIONS)
#
#             # Detect pinch gesture:
#             thumb_tip = landmarks.landmark[4]
#             index_tip = landmarks.landmark[8]
#             distance = ((thumb_tip.x - index_tip.x)**2 +
#                         (thumb_tip.y - index_tip.y)**2)**0.5
#             if distance < 0.05:
#                 print("PINCH detected!")
#
#     cv2.imshow("Hand Tracking", frame)

# GESTURES TO RECOGNIZE:
# - Pinch: select/grab
# - Point: ray cast / aim
# - Open palm: stop / release
# - Fist: grab
# - Swipe: navigation
# - Two-hand: scale (pinch zoom)</div>

<div class="code-block"># ── STEP 4: Brain-Computer Interfaces (BCI) ──
# Read brain signals to control computers — without muscles!

# Non-invasive BCI with EEG (electroencephalography):
# - Electrodes on scalp measure brain activity
# - Machine learning decodes intent from signals
# - Used for: communication (paralyzed users), gaming, research

# Processing EEG data with Python:
# import mne  # MNE-Python for EEG analysis
# import numpy as np
#
# # Load EEG data:
# raw = mne.io.read_raw_eeglab("subject1.set", preload=True)
#
# # Filter (remove noise):
# raw.filter(l_freq=1, h_freq=40)  # bandpass 1-40 Hz
#
# # Extract epochs (time windows around events):
# events = mne.find_events(raw)
# epochs = mne.Epochs(raw, events, tmin=-0.2, tmax=0.8)
#
# # Feature extraction:
# features = epochs.get_data()  # (n_epochs, n_channels, n_times)
#
# # Classify mental states (e.g., left vs right hand imagery):
# from sklearn.linear_model import LogisticRegression
# X = features.reshape(len(features), -1)  # flatten
# clf = LogisticRegression()
# clf.fit(X_train, y_train)

# BCI paradigms:
# 1. Motor imagery: imagine moving → control cursor
# 2. P300: detect surprise → spell by highlighting letters
# 3. SSVEP: flashing lights → select by looking
# 4. Speech decoding: Neuralink decodes imagined speech

# INVASIVE BCI (Neuralink, Utah array):
# - Electrodes implanted IN the brain
# - Much higher resolution than EEG
# - Neuralink: 1024 electrodes, wireless
# -猴子 playing Pong with mind (2021 demo)
# - First human patient plays chess (2024)</div>

<div class="code-block"># ── STEP 5: SLAM for AR ──
# SLAM (Simultaneous Localization and Mapping):
# Build a map of the environment AND track position in it.

# This is how AR headsets know where they are:
# 1. Cameras/sensors detect features in the environment
# 2. Track how features move as headset moves
# 3. Build a 3D map
# 4. Locate headset within the map

# Using ORB-SLAM (popular open-source SLAM):
# Stereo cameras or RGB-D sensors → 3D map → position tracking

# Depth sensing technologies:
# - Structured light (Kinect v1, Face ID)
# - Time of flight (LiDAR, Kinect v2)
# - Stereo vision (two cameras, triangulation)
# - LiDAR (iPad Pro, iPhone Pro, Vision Pro)

# Point cloud processing (3D sensor data):
# import open3d as o3d
#
# # Load point cloud from depth sensor:
# pcd = o3d.io.read_point_cloud("scan.ply")
# print(f"Points: {len(pcd.points)}")
#
# # Downsample (reduce points for speed):
# pcd = pcd.voxel_down_sample(voxel_size=0.01)
#
# # Estimate normals (surface direction):
# pcd.estimate_normals()
#
# # Segment plane (find floor/tables):
# plane_model, inliers = pcd.segment_plane(
#     distance_threshold=0.01, ransac_n=3, num_iterations=1000
# )
# # Now you know where the floor is → place virtual objects on it</div>

<div class="code-block"># ── STEP 6: XR research and careers ──
# ┌─────────────────────┬─────────────────────────────────────┐
# │ Area                │ What you study                     │
# ├─────────────────────┼─────────────────────────────────────┤
# │ VR                  │ Rendering, presence, motion sickness│
# │ AR/MR               │ SLAM, displays, hand tracking      │
# │ Haptics             │ Force feedback, tactile sensing    │
# │ BCI                 │ EEG, Neuralink, neural decoding    │
# │ Spatial Computing   │ 3D pipelines, latency, cloud XR   │
# │ XR Applications     │ Medical, education, therapy        │
# └─────────────────────┴─────────────────────────────────────┘

# CONFERENCES:
# IEEE VR, ISMAR      — VR/AR specific
# CHI, UIST           — interaction in XR
# NeurIPS, ICLR       — neural decoding for BCI
# SIGGRAPH            — graphics + XR

# HOT TOPICS (2024-2026):
# - Apple Vision Pro (spatial computing mainstream)
# - Neuralink human trials (invasive BCI)
# - Foveated rendering (eye-tracked rendering)
# - Gaussian Splatting (fast 3D scene capture)
# - Neural speech decoding (think → type)
# - Haptic gloves and suits

# TOOLS TO LEARN:
# Unity / Unreal Engine  — XR development platforms
# OpenXR                 — cross-platform XR standard
# MediaPipe              — hand/body tracking
# Open3D                 — 3D processing
# MNE-Python             — EEG analysis
# ARKit / ARCore         — mobile AR

# CAREER PATHS:
# - XR Developer (Meta, Apple, Microsoft)
# - BCI Researcher (Neuralink, Synchron, academia)
# - Graphics Engineer (game engines, rendering)
# - Spatial Computing Designer
# - Medical VR Developer (surgical training, therapy)

# THE VISION:
# AR glasses will replace phones.
# BCI will replace keyboards.
# Spatial computing is the next platform shift.
# This is where the FUTURE of computing is being built.</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🥽 VR</td><td>Rendering, locomotion, presence, social VR</td><td>CHI, UIST, IEEE VR, ISMAR</td></tr>
<tr><td class="hl">👓 AR/MR</td><td>SLAM, display, Vision Pro, hand tracking</td><td>ISMAR, CHI, UIST, ISS</td></tr>
<tr><td class="hl">🧠 BCI</td><td>EEG, Neuralink, motor/speech decoding</td><td>CHI, NeurIPS, SfN, NER</td></tr>
<tr><td class="hl">🤚 Haptics</td><td>Force feedback, tactile, embodiment</td><td>UIST, WHC, EuroHaptics</td></tr>
<tr><td class="hl">⚡ Systems</td><td>Rendering pipeline, latency, cloud XR</td><td>MobiSys, SIGCOMM, ISMAR</td></tr>
<tr><td class="hl">🏥 Applications</td><td>Training, therapy, education, access</td><td>CHI, VRST, MICCAI</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৬-১০%</div><div class="sc-label">গ্রহণের হার (niche, hardware)</div></div>
<div class="stat-card"><div class="sc-num">$১B+</div><div class="sc-label">Meta/Apple XR research বাজেট</div></div>
<div class="stat-card"><div class="sc-num">$১৫০-৩৫০K</div><div class="sc-label">industry (Meta RLabs, Apple, Neuralink)</div></div>
<div class="stat-card"><div class="sc-num">🔥 spatial</div><div class="sc-label">next computing platform</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"VR একটা fad — Google Glass ব্যর্থ হয়েছে, Vision Pro-ও হবে। গবেষণার জায়গা নেই।" অর্ধেক সত্য। consumer VR এখনো niche, কিন্তু enterprise (training, medical, design), accessibility, BCI (Neuralink-র first human implant, ২০২৪) — এসব frontier research। spatial computing Apple/Meta-র পরবর্তী platform bet — smartphone-এর পর যা আসবে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"XR + BCI হলো HCI-র frontier — সম্পূর্ণ নতুন interaction paradigm। niche, hardware-নির্ভর, কিন্তু যারা এখন যায় তারা প্রথম প্রজন্মের spatial computing গবেষক হবে — ১৯৯০-এর web-এর মতো। BCI (Neuralink) একদম নতুন — চিন্তা দিয়ে কম্পিউটার। উচ্চ ঝুঁকি, উচ্চ পুরস্কার।"</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Reality check:</strong> XR/BCI research hardware-নির্ভর — headset, EEG, haptic device দরকার, কোড একা চলে না। lab access থাকা জরুরি। এছাড়া consumer success এখনো uncertain — Apple Vision Pro-র গ্রহণ ধীর (২০২৪-২৫)। academic research industry hype-র চেয়ে ধীর।</div></div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> Apple Vision Pro (spatial computing), Meta Quest 3 + smart glasses (Ray-Ban), Neuralink first human implant (২০২৪ — arthropod patient chess play), passthrough MR, neural speech decoding (Stanford/UCSF, ২০২৪ — ৭৮ words/min)।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ⚠️ সতর্কতার সাথে — hardware lab ও patience দরকার। ✅ frontier-এ থাকতে চাও (next platform) · ✅ HCI (Door 12) + graphics (Door 2) পরিচিত · ⚠️ consumer success uncertain · 💡 BCI neural decoding = সবচেয়ে frontier, সবচেয়ে কঠিন, সবচেয়ে প্রভাবশালী (paralysis restoration)।</div></div>

<div class="dialogue">"একটা গভীর কথা," নুসরাত বললেন। "VR শুধু খেলা নয় — এটা মানুষের empathy বাড়ায়। একজন অন্ধ মানুষের দুনিয়া VR-এ অন্যেরা অনুভব করতে পারে। একজন PTSD রোগীর ভয় VR থেরাপিতে কমানো যায়। আর BCI — একজন পক্ষাঘাতগ্রস্ত মানুষ চিন্তা দিয়ে কম্পিউটার চালাতে পারে। এটা শুধু technology নয় — মানুষের কষ্ট কমানো। frontier research হলো এটাই — সম্পূর্ণ নতুন দুনিয়া খোলা, যারা পারে না তাদের জন্য।"</div>
<div class="dialogue en">"A deep point," Nusrat said. "VR isn't just games — it grows human empathy. A blind person's world can be felt by others in VR. A PTSD patient's fear can be reduced in VR therapy. And BCI — a paralyzed person can drive a computer with thought. This isn't just technology — it's reducing human suffering. Frontier research is this — opening wholly new worlds, for those who can't."</div>

<div class="dialogue">মিথাক — অন্য জগতে যাত্রা, নতুন দিক। কুরআনে আল্লাহ বলেন: "তোমাদের জন্য জান্নাতে যা চাই, তা আছে।" (অনেক আয়াত)। জান্নাত হলো সম্পূর্ণ অন্য দুনিয়া — যা চোখে দেখা যায়নি, কানে শোনা যায়নি, মনে আসেনি। VR হলো সেই অন্য দুনিয়ার একটা ছোট reflection — কল্পনাকে দৃশ্যমান করা। BCI হলো চিন্তার সরাসরি প্রকাশ — বাক্যের আগে যা মনে আসে। গবেষক হলো সে যে নতুন দুনিয়া খোলে — শুধু বর্তমান নয়, ভবিষ্যতের। spatial computing হলো পরবর্তী যুগের দরজা। যে এই দরজা খোলে, সে নতুন দিক দেখায়।</div>
<div class="dialogue en">Mithaq — journey to another world, a new horizon. Allah says: "In Paradise you have what you desire." Paradise is a wholly other world — unseen by eyes, unheard by ears, unimagined by minds. VR is a small reflection of that other world — making imagination visible. BCI is the direct expression of thought — what comes to mind before words. A researcher is one who opens new worlds — not just the present, but the future's. Spatial computing is the door to the next era. One who opens this door shows a new horizon.</div>

<div class="secret-box">🥽 AR/VR + BCI: HCI-র frontier, spatial computing = next platform। niche, hardware-নির্ভর (৬-১০%), কিন্তু যারা এখন যায় তারা pioneer। BCI = চিন্তা দিয়ে কম্পিউটার (Neuralink)। উচ্চ ঝুঁকি, উচ্চ পুরস্কার।</div>`,
  senior:{
    title:"XR/BCI PhD — Frontier Path",
    body:`<p><strong>Lab access জরুরি:</strong> XR/BCI research-এ headset (Quest, Vision Pro), EEG/fNIRS, haptic device দরকার — একা কোডে চলে না। একটা lab সহ PI খোঁজো আগে। Meta Reality Labs, Apple, Microsoft HoloLens-এর internship = গোল্ডেন entry।</p><p><strong>WebXR দিয়ে শুরু:</strong> headset না থাকলে WebXR (browser-ভিত্তিক VR) দিয়ে শুরু করো — A-Frame, Three.js। একটা WebXR study = CHI/UIST workshop paper, hardware ছাড়া।</p><p><strong>BCI neural decoding:</strong> Stanford/UCSF-এর speech decoding paper (২০২৪) পড়ো। public EEG dataset (PhysioNet, ফ্রি) দিয়ে motor imagery classification করো — entry-level, কিন্তু concrete। NeurIPS/CHI BCI workshop।</p><p><strong>Application research:</strong> শুধু technology নয় — প্রয়োগ (medical training, phobia therapy, accessibility) এখানে প্রভাব সরাসরি। niche = কম ভিড়। medical/therapy XR = NIH funding।</p>`
  }
});

// ══ DOOR 14: SOFTWARE ENGINEERING ══
doors.push({
  num:14, icon:"⚙️", color:"#64748b", name:"কোডের কারখানা",
  subtitle:"The Code Factory", tech:"Software Engineering",
  spirit:"ইহসান — সুন্দরভাবে কাজ করা, যেন আল্লাহ দেখছেন",
  secret:"Software engineering গবেষণা হলো — কীভাবে ভালো কোড লেখা যায়, কীভাবে বিশাল সিস্টেম maintain করা যায়। niche ডোমেইন, মাঝারি প্রতিযোগিতা (৬-১০%), স্থিতিশীল ক্যারিয়ার। প্রতিটা ডেভেলপার git/testing/CI-CD ব্যবহার করে — কিন্তু কেউ ভাবে না সেটা কেন কাজ করে। গবেষক সেটা ভাবে। তুমি প্রতিদিন SE করো — তোমার অভিজ্ঞতা এখানে সরাসরি কাজে দেয়।",
  recall:{
    q:"রবার্ট কেন বললেন কারখানা বন্ধ হলে কাজ চলে, কিন্তু খারাপ কোড চলতেই থাকে?",
    qen:"Why did Robert say a factory can stop, but bad code keeps running?",
    a:"কারণ একটা কারখানা বন্ধ হলে শুধু সেই কারখানা থামে। কিন্তু খারাপ কোড একবার deploy হলে — লাখ লাখ মানুষের সিস্টেমে চলে, বাগ ছড়ায়, security hole তৈরি করে। CrowdStrike incident (২০২৪) — একটা বাগ পুরো বিশ্বের flight/hospital থামিয়ে দিয়েছিল। SE গবেষণা হলো কোডের মান বাড়ানো — যাতে কোড নিরাপদ, নির্ভরযোগ্য, maintainable হয়। ইহসান = সুন্দর কোড।",
    aen:"Because a factory stopping affects only that factory. But bad code once deployed — runs on millions of systems, spreads bugs, creates security holes. The CrowdStrike incident (2024) — one bug stopped the world's flights/hospitals. SE research is improving code quality — so code is safe, reliable, maintainable. Ihsan = beautiful code."
  },
  story:`
<p class="scene-setting">চতুর্দশ দরজা। নুসরাতের অন্য দুনিয়া পেরিয়ে তুমি একটা বিশাল কারখানায় — কনভেয়র বেল্টে কোডের ব্লক চলছে। কিছু ব্লক পরিষ্কার ঝকঝকে, কিছু জট পাকানো, কালো। দেয়ালে টানানো — test coverage গ্রাফ, bug report, code metric। মাঝখানে দাঁড়িয়ে রবার্ট — সাদা কোট, হাতে একটা ম্যাগনিফাইং গ্লাস ও একটা static analyzer, চোখে নিপুণতা। তাঁর পাশে ছড়ানো commit log, code review checklist। মেশিনের গর্জন, ধাতব ক্লিক, তেলের গন্ধ।</p>
<p class="scene-setting en">The fourteenth door. Past Nusrat's other world, you enter a vast factory — code blocks moving on conveyor belts. Some blocks clean and gleaming, some tangled, black. On the walls: test coverage graphs, bug reports, code metrics. In the center stands Robert — white coat, a magnifying glass and a static analyzer in hand, precision in his eyes. Beside him: commit logs, code review checklists. Machine roar, metallic clicks, smell of oil.</p>

<div class="dialogue">রবার্ট তোমাকে দেখলেন। "তুমি একজন developer। প্রতিদিন git করো, test লেখো, code review করো। কিন্তু কখনো ভেবেছো — এই সব কেন কাজ করে? কোন testing strategy সেরা? কোন review process বাগ ধরে? এটাই SE গবেষণা।" তিনি একটা জট পাকানো কোড ব্লক দেখালেন। "এটা legacy code। কেউ জানে না কীভাবে কাজ করে। কিন্তু চলছে বছরের পর বছর। ভাঙলে — লাখ লাখ মানুষ প্রভাবিত। CrowdStrike-এর মতো।" তিনি static analyzer চালালেন — ব্লকে লাল দাগ ফুটে উঠল, vulnerabilities। "এটাই আমার কাজ — কোড বোঝা, মাপা, মজবুত করা।"</div>
<div class="dialogue en">Robert saw you. "You're a developer. Every day you git, write tests, do code review. But have you ever wondered — why does all this work? Which testing strategy is best? Which review process catches bugs? That's SE research." He showed a tangled code block. "This is legacy code. Nobody knows how it works. But it runs for years. If it breaks — millions affected. Like CrowdStrike." He ran the static analyzer — red marks appeared on the block, vulnerabilities. "This is my job — understanding code, measuring it, strengthening it."</div>

<div class="diagram">
  <div class="diag-title">SE Research Pipeline — Code এর জীবনচক্র গবেষণা</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowGray14" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#7dd3fc"/></marker>
    </defs>
    <text class="lbl-sm" x="280" y="22" fill="#7dd3fc">code এর প্রতিটা স্তরে গবেষণা</text>
    ${[ ['WRITE','code gen, IDE, AI4SE',70,'#52c41a'], ['TEST','coverage, mutation, fuzz',200,'#3dd6c4'], ['REVIEW','static, dynamic analy.',330,'#7dd3fc'], ['DEPLOY','CI/CD, canary, DevOps',460,'#b37feb'] ].map((s,i)=>`<rect class="cell" x="${s[2]-55}" y="50" width="110" height="46" rx="8" style="stroke:${s[3]}"/><text class="lbl-sm" x="${s[2]}" y="70" fill="${s[3]}" style="font-weight:700">${s[0]}</text><text class="lbl-sm" x="${s[2]}" y="86" fill="#9290a8" style="font-size:9px">${s[1]}</text>`).join('')}
    ${[200,330,460].map(x=>`<line class="edge-cyan" x1="${x-55}" y1="73" x2="${x-65}" y2="73" marker-end="url(#arrowGray14)"/>`).join('')}
    <!-- feedback loop -->
    <path class="edge" d="M 460 100 Q 460 140 280 140 Q 70 140 70 100" fill="none" style="stroke:#ff6b35"/>
    <text class="lbl-sm" x="280" y="155" fill="#ff6b35">feedback loop — bug/telemetry থেকে শেখা</text>
    <text class="lbl-sm" x="280" y="185" fill="#5e5c74">🔥 AI4SE: Copilot/Cursor — LLM দিয়ে code gen, review, repair</text>
    <text class="lbl-sm" x="280" y="205" fill="#5e5c74">🔥 empirical SE: GitHub-scale mining — "১০০M commit থেকে কী শিখি?"</text>
    <text class="lbl-sm" x="280" y="222" fill="#5e5c74">SE-র সব গবেষণা empirical — real developer, real codebase</text>
  </svg>
  <div class="diag-cap">SE research code এর পুরো lifecycle কভার করে — write থেকে deploy পর্যন্ত। সব কিছুর উপর feedback loop। AI4SE (Door 15) এখন সবচেয়ে হট। সব গবেষণা empirical — real data।</div>
</div>

<div class="code-block"># ── STEP 1: Software engineering principles ──
# SE = building software that is correct, maintainable, and scalable.

# SOLID principles:
# S - Single Responsibility: each class does ONE thing
# O - Open/Closed: open for extension, closed for modification
# L - Liskov Substitution: subclasses must work where parent works
# I - Interface Segregation: many small interfaces, not one big
# D - Dependency Inversion: depend on abstractions, not concretions

# Example — BAD code:
class BadUserManager:
    def create_user(self, name, email):
        # Validates, saves to DB, sends email, logs — ALL in one method
        pass

# GOOD code — separated concerns:
class UserValidator:
    def validate(self, name, email):
        return "@" in email and len(name) > 0

class UserRepository:
    def save(self, user):
        database.insert(user)

class EmailService:
    def send_welcome(self, email):
        smtp.send(to=email, subject="Welcome!")

class UserManager:
    """Coordinator — delegates to specialized services."""
    def __init__(self, validator, repo, email):
        self.validator = validator
        self.repo = repo
        self.email = email

    def create_user(self, name, email):
        if not self.validator.validate(name, email):
            raise ValueError("Invalid user")
        user = {"name": name, "email": email}
        self.repo.save(user)
        self.email.send_welcome(email)
        return user</div>

<div class="code-block"># ── STEP 2: Testing ──
# Tests ensure your code WORKS and keeps working.

# Unit test with pytest:
# def test_add():
#     assert add(2, 3) == 5
#     assert add(-1, 1) == 0
#     assert add(0, 0) == 0

# Run: pytest test_math.py -v

# Test types (the pyramid):
# ┌─────────────────┐
# │   E2E (few)     │  ← slow, test full user flow
# ├─────────────────┤
# │ Integration      │  ← test components together
# ├─────────────────┤
# │  Unit (many)     │  ← fast, test individual functions
# └─────────────────┘

# Test-Driven Development (TDD):
# 1. RED: write a failing test
# 2. GREEN: write minimum code to pass
# 3. REFACTOR: improve the code

# Example TDD cycle:
def test_is_palindrome():
    # RED — no function yet
    assert is_palindrome("racecar") == True
    assert is_palindrome("hello") == False
    assert is_palindrome("a") == True
    assert is_palindrome("") == True

# Now implement (GREEN):
def is_palindrome(s):
    return s == s[::-1]

# REFACTOR: already clean!

# Mocking — replace external dependencies in tests:
from unittest.mock import Mock

# Don't call real API in tests:
api_client = Mock()
api_client.get_user.return_value = {"name": "Test User"}
result = api_client.get_user(1)
assert result["name"] == "Test User"</div>

<div class="code-block"># ── STEP 3: CI/CD pipeline ──
# CI (Continuous Integration): merge code frequently, test automatically
# CD (Continuous Deployment): deploy automatically after tests pass

# GitHub Actions workflow (.github/workflows/test.yml):
yaml_example = """
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v4
        with:
          python-version: '3.12'
      - run: pip install -r requirements.txt
      - run: pytest --cov=src --cov-report=html
      - run: flake8 src/
      - run: mypy src/

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production..."
"""

# Every push triggers:
# 1. Run tests (unit + integration)
# 2. Check code style (flake8/black)
# 3. Type checking (mypy)
# 4. Security scan (bandit)
# 5. If all pass AND on main branch → deploy

# DEPLOYMENT STRATEGIES:
# - Blue-Green: two environments, switch instantly
# - Canary: release to 5% → 25% → 100%
# - Feature flags: enable features per-user
# - Rolling: replace servers one by one

# Monitoring after deploy:
# - Sentry: error tracking
# - Prometheus + Grafana: metrics
# - ELK stack: log analysis</div>

<div class="code-block"># ── STEP 4: Code quality tools ──
# Automated tools that catch problems before humans review.

# Formatting (black):
# pip install black
# black .  # auto-formats all Python files

# Linting (flake8/ruff):
# pip install ruff
# ruff check .  # finds style issues, unused imports, bugs

# Type checking (mypy):
# pip install mypy
# mypy src/  # catches type errors

# Example — type hints catch bugs:
def calculate_total(items: list[dict]) -&gt; float:
    """Type hints help catch errors before runtime."""
    return sum(item["price"] for item in items)

# mypy will warn if you pass the wrong type!

# Pre-commit hooks (run checks before commit):
# .pre-commit-config.yaml:
# repos:
#   - repo: https://github.com/psf/black
#     rev: 24.1.0
#     hooks:
#       - id: black
#   - repo: https://github.com/astral-sh/ruff-pre-commit
#     rev: v0.1.0
#     hooks:
#       - id: ruff

# Code review checklist:
# ✅ Does it work correctly?
# ✅ Is it readable?
# ✅ Are there tests?
# ✅ No security issues?
# ✅ Performance OK?
# ✅ No breaking changes?
# ✅ Documentation updated?</div>

<div class="code-block"># ── STEP 5: Software architecture patterns ──
# How to structure large applications.

# 1. MONOLITHIC (simple):
# All code in one deployment. Good for starting.

# 2. MICROSERVICES (scalable):
# Each service is independent:
# - User service (auth, profiles)
# - Order service (cart, checkout)
# - Notification service (email, push)
# Communication via HTTP or message queue.

# 3. EVENT-DRIVEN:
# Services communicate by publishing events:
# Order created → event → Payment processes → event → Shipping

# 4. HEXAGONAL (ports and adapters):
# Core business logic isolated from external concerns.
# Easy to swap databases, APIs, UIs.

# Clean Architecture (layered):
# ┌──────────────────────┐
# │   UI / Controllers    │  ← Frameworks, Delivery
# ├──────────────────────┤
# │   Use Cases           │  ← Application logic
# ├──────────────────────┤
# │   Entities/Domain     │  ← Business rules
# ├──────────────────────┤
# │   Infrastructure      │  ← Database, External APIs
# └──────────────────────┘
# Dependencies point INWARD (UI depends on domain, not vice versa).

# DESIGN PATTERNS:
# - Factory: create objects without specifying exact class
# - Observer: notify when state changes (pub/sub)
# - Strategy: interchangeable algorithms
# - Decorator: add behavior without modifying
# - Singleton: one instance only (use sparingly!)

# THE GOLDEN RULE:
# "Simplicity is the soul of efficiency." — Austin Freeman
# Don't over-engineer. Start simple, add complexity only when needed.</div>

<div class="code-block"># ── STEP 6: SE research areas ──
# ┌─────────────────────┬─────────────────────────────────────┐
# │ Area                │ What you study                     │
# ├─────────────────────┼─────────────────────────────────────┤
# │ Testing             │ Test gen, mutation, fuzzing        │
# │ Program Analysis    │ Static/dynamic, symbolic execution │
# │ AI4SE               │ Copilot, code gen, bug finding     │
# │ Empirical SE        │ Mining repos, developer studies    │
# │ DevOps              │ CI/CD, SRE, incident analysis      │
# │ Architecture        │ Microservices, self-adaptive       │
# └─────────────────────┴─────────────────────────────────────┘

# CONFERENCES:
# ICSE, FSE, ASE, ISSTA  — top SE conferences
# OOPSLA, PLDI            — programming languages
# NeurIPS (SE workshop)   — AI for SE

# HOT TOPICS (2024-2026):
# - LLM-based code generation (Copilot, Cursor, Devin)
# - Automated bug fixing (AI suggests fixes)
# - Test generation with LLMs
# - Supply chain security (dependency vulnerabilities)
# - Empirical studies of AI coding tools
# - Developer productivity measurement

# TOOLS TO MASTER:
# Git                    — version control
# Docker                 — containerization
# CI/CD (GitHub Actions) — automated testing/deployment
# Testing (pytest)       — test your code
# Static analysis (ruff) — catch bugs early
# Type hints (mypy)      — prevent type errors

# CAREER:
# Every developer needs SE skills.
# SE researcher: study how software is built, improve tools.
# DevOps/SRE: automate deployment, ensure reliability.
# Software Architect: design system structure.

# THE INSIGHT:
# The best code is code that is:
# 1. CORRECT (does what it should)
# 2. READABLE (others can understand)
# 3. TESTABLE (can verify it works)
# 4. MAINTAINABLE (easy to change)
# 5. SIMPLE (no unnecessary complexity)</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">🧪 Test/Verify</td><td>Gen, mutation, fuzz, formal verification</td><td>ICSE, FSE, ASE, ISSTA</td></tr>
<tr><td class="hl">🔬 Analysis</td><td>Static/dynamic, symbolic, LLM-based</td><td>ICSE, FSE, OOPSLA, PLDI</td></tr>
<tr><td class="hl">🔥🔥 AI4SE</td><td>Code gen, repair, Copilot, agent</td><td>ICSE, FSE, ASE, ISSTA, NeurIPS</td></tr>
<tr><td class="hl">📊 Empirical</td><td>Mining repos, dev studies, OSS</td><td>ICSE, FSE, MSR, ESEM</td></tr>
<tr><td class="hl">☁️ DevOps</td><td>CI/CD, incident, SRE, release</td><td>ICSE, FSE, Middleware</td></tr>
<tr><td class="hl">🏗️ Architecture</td><td>Microservices, adaptive, tech debt</td><td>ICSE, WICSA, ECSA</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৬-১০%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">$১৫০M+</div><div class="sc-label">NSF SE ফান্ডিং</div></div>
<div class="stat-card"><div class="sc-num">$১৫০-৩২০K</div><div class="sc-label">industry (Microsoft, GitHub, Google)</div></div>
<div class="stat-card"><div class="sc-num">🔥 AI4SE</div><div class="sc-label">সবচেয়ে হট — Copilot era</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"SE গবেষণা মানে নতুন framework বা tool বানানো। engineering, research নয়।" ভুল। একটা tool বানানো engineering। কিন্তু "কোন testing strategy বাগ বেশি ধরে?", "Copilot কি developer productivity বাড়ায়?", "microservice কখন monolith-এর চেয়ে ভালো?" — এগুলো empirical প্রশ্ন, rigorous research method দিয়ে উত্তর হয়। ICSE/FSE full paper = real research।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"SE গবেষণা হলো software-এর বিজ্ঞান — কীভাবে ভালো কোড হয়, কেন বাগ হয়, কোন tool কাজ করে। সব empirical — real developer, real codebase। AI4SE (Copilot/Cursor) এখন সবচেয়ে হট। niche, stable, প্রতিটা কোম্পানির দরকার। তোমার developer অভিজ্ঞতা এখানে direct relevance — বিরল combination।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> AI4SE explosion (Copilot, Cursor, Claude Code, Devin — autonomous agent), LLM-based bug repair, automated code review, empirical impact study (GitHub research: Copilot ৫৫% faster), supply-chain security (SLSA, Sigstore), CrowdStrike postmortem থেকing incident research।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅✅ হ্যাঁ — তুমি developer, প্রতিদিন git/test/CI-CD করো। তোমার অভিজ্ঞতা SE-তে direct relevance। ✅ code quality নিয়ে ভাবো · ✅ developer tool বানাতে ভালোবাসো · ✅ niche, stable career · 💡 AI4SE = secondary পছন্দ (LLM দিয়ে code), তোমার AI আগ্রহের সাথে মিলে।</div></div>

<div class="dialogue">"তোমার একটা বিশাল সুবিধা আছে," রবার্ট বললেন। "তুমি developer — প্রতিদিন git, testing, CI/CD করো। তুমি জানো কোন tool কী অনুভব করায়। pure AI গবেষক এটা জানেন না। SE-তে developer experience একটা research topic — আর তুমি সেটার subject-matter expert। LedgerPilot বানিয়েছ, real codebase। এখন ভাবো — কোন decision কেন নিয়েছিলে, কোন tool কেন বেছেছিলে। এটাই empirical SE। তোমার developer অভিজ্ঞতা = research data।"</div>
<div class="dialogue en">"You have a huge advantage," Robert said. "You're a developer — every day git, testing, CI/CD. You know how tools feel. Pure AI researchers don't. In SE, developer experience is a research topic — and you're the subject-matter expert. You built LedgerPilot, a real codebase. Now think — why did you take each decision, why pick each tool. That's empirical SE. Your developer experience = research data."</div>

<div class="dialogue">ইহসান — সুন্দরভাবে কাজ করা। হাদিসে আছে: "আল্লাহ তোমাদের জন্য ইহসান পছন্দ করেন; তুমি যখন কিছু করো, তা সুন্দরভাবে করো।" কোডে ইহসান মানে — পরিষ্কার কোড, টেস্টেড কোড, ডকুমেন্টেড কোড, অন্যকে সাহায্য করে এমন কোড। শুধু কাজ করলে হয় না — সুন্দরভাবে কাজ করতে হয়। SE গবেষণা হলো কোডে ইহসান আনা — এমন পদ্ধতি, টুল, জ্ঞান যা প্রতিটা developer-কে সুন্দর কোড লিখতে সাহায্য করে। এটা শিল্প, এটা ইবাদত — কারণ সুন্দর কাজ আল্লাহ দেখেন।</div>
<div class="dialogue en">Ihsan — doing work beautifully. Hadith: "Allah loves ihsan from you; when you do something, do it well." In code, ihsan means — clean code, tested code, documented code, code that helps others. Not just working — working beautifully. SE research is bringing ihsan to code — methods, tools, knowledge that help every developer write beautiful code. This is art, this is worship — because Allah sees beautiful work.</div>

<div class="secret-box">⚙️ SE: কীভাবে ভালো কোড লেখা যায়। niche, stable (৬-১০%)। হট: AI4SE (Copilot/Cursor/Devin)। তোমার প্রতিদিনের git/test/CI-CD = direct research relevance। developer experience একটা research topic।</div>`,
  senior:{
    title:"SE PhD — Developer's Home Field",
    body:`<p><strong>তোমার developer অভিজ্ঞতা = research asset:</strong> pure AI/ML গবেষকদের কাছে নেই এমন একটা thing — তুমি real codebase, real developer workflow জানো। "developer experience" এখন SE-তে hot topic, আর তুমি সেটার expert। এটা তোমার unfair advantage।</p><p><strong>Empirical study দিয়ে শুরু:</strong> একটা open-source ecosystem mine করো (GitHub API ফ্রি) — "১০০K commit থেকে কী pattern বের হয়?" MSR (Mining Software Repositories) conference = সহজ entry। একটা paper = ICSE/FSE workshop।</p><p><strong>AI4SE crossover:</strong> Copilot/Cursor-এর impact study, LLM-based bug repair, automated code review — এখন সবচেয়ে হট। GitHub research-এর "Copilot ৫৫% faster" paper পড়ো। একটা controlled Copilot study = high-impact, তোমার AI + developer background = perfect fit।</p><p><strong>Real tool বানাও:</strong> একটা VS Code extension, GitHub Action, linter — open-source, ব্যবহার হয়। এটা concrete profile signal — SE প্রফেসররা tool-builder খোঁজেন।</p>`
  }
});

// ══ DOOR 15: PROGRAMMING LANGUAGES & AI4SE ══
doors.push({
  num:15, icon:"🔤", color:"#64748b", name:"ভাষার স্রষ্টা",
  subtitle:"The Language Maker", tech:"Programming Languages & AI4SE 🔥",
  spirit:"বায়ান — স্পষ্ট প্রকাশ, নির্ভুল ভাষা",
  secret:"PL + AI4SE হলো SE-এর সবচেয়ে গভীর ও হট সীমানা। PL — type system, compiler, Rust safety (memory bug গাণিতিকভাবে অসম্ভব)। AI4SE — LLM দিয়ে code gen, repair, review (Copilot, Cursor, Devin)। PL কঠিন (formal, গাণিতিক), AI4SE হট (industry dominance)। niche, কিন্তু প্রতিটা developer-র জীবন বদলায়। তোমার SE (Door 14) + AI আগ্রহ = secondary পছন্দের জন্য উপযুক্ত।",
  recall:{
    q:"ক্লারা কেন বললেন একটা ভালো ভাষা ভুল করাই কঠিন করে দেয়?",
    qen:"Why did Clara say a good language makes mistakes hard to even make?",
    a:"কারণ সাধারণ ভাষায় তুমি ভুল করতে পারো — runtime-এ ভাঙে। কিন্তু একটা ভালো type system ভুল করাই নিষিদ্ধ করে — compile-ই হয় না। Rust-এ null pointer dereference গাণিতিকভাবে অসম্বব — compiler বাধা দেয়। এটাই PL গবেষণা — ভাষা ডিজাইন করা যেন ভুল করাই কঠিন। বায়ান — স্পষ্ট প্রকাশ, নির্ভুল ভাষা। ভালো ভাষা মানুষকে ভুল থেকে বাঁচায়।",
    aen:"Because in an ordinary language you can err — it breaks at runtime. But a good type system forbids errors — it won't even compile. In Rust, null pointer dereference is mathematically impossible — the compiler blocks it. This is PL research — designing languages where mistakes are hard to make. Bayan — clear expression, precise language. A good language saves people from error."
  },
  story:`
<p class="scene-setting">পঞ্চদশ দরজা। রবার্টের কারখানা পেরিয়ে তুমি একটা ভাষার কারখানায় — দেয়ালে সারি সারি অক্ষর, চিহ্ন, গ্রামার নিয়ম খোদাই করা পাথরে। মাঝখানে একটা বিশাল তন্ত্র — compiler — যেখানে মানুষের লেখা ভাষা মেশিনের ভাষায় রূপান্তরিত হচ্ছে। তন্ত্রের পাশে দাঁড়িয়ে ক্লারা — ছোট কালো চুল, হাতে একটা type rule স্ক্রল ও একটা Rust playground টার্মিনাল, চোখে গণিতজ্ঞের নিখুঁততা। রবার্ট পেছনে বলছেন — এটা তাঁর SE-র সবচেয়ে গভীর সীমানা। কালি ও পাথরের গন্ধ, তন্ত্রের ক্লিক, দূরে একটা AI এজেন্ট কোড লেখার শব্দ।</p>
<p class="scene-setting en">The fifteenth door. Past Robert's factory, you enter a language workshop — walls lined with letters, symbols, grammar rules carved in stone. In the center, a vast apparatus — a compiler — where human-written language transforms into machine language. Beside it stands Clara — short black hair, a type-rule scroll and a Rust playground terminal in hand, a mathematician's precision in her eyes. Robert speaks behind — this is SE's deepest frontier. Smell of ink and stone, the apparatus clicking, distant sound of an AI agent writing code.</p>

<div class="dialogue">রবার্ট বললেন, "আমি কোড যাচাই করি। কিন্তু ক্লারা ভাষাই বানায় — যে ভাষায় কোড লেখা হয়।" ক্লারা একটা পাথর দেখালেন যেখানে লেখা — 'x: i32'। "এটা একটা type। x সর্বদা integer — কখনো string নয়, null নয়। compiler এটা নিশ্চিত করে। তুমি যদি ভুল করো — 'x + "hello"' — compiler বলবে 'না'। কোড চলবেই না।" তিনি হাসলেন। "এটাই PL — ভাষা ডিজাইন করা যেন ভুল করাই কঠিন। আর এখন?" তিনি AI এজেন্টটার দিকে ইশারা করলেন — "এখন LLM নিজে কোড লেখে। AI4SE। দুইয়ের মিলন।"</div>
<div class="dialogue en">Robert said, "I verify code. But Clara makes the language itself — in which code is written." Clara showed a stone inscribed 'x: i32'. "This is a type. x is always an integer — never a string, never null. The compiler guarantees it. If you err — 'x + "hello"' — the compiler says 'no'. The code won't even run." She smiled. "This is PL — designing languages where mistakes are hard to make. And now?" She gestured to the AI agent — "now an LLM writes code itself. AI4SE. The union of both."</div>

<div class="diagram">
  <div class="diag-title">PL + AI4SE — ভাষা ও AI-এর মিলন</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowGray15" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#7dd3fc"/></marker>
      <marker id="arrowFire15" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#ff6b35"/></marker>
    </defs>
    <text class="lbl-sm" x="140" y="30" fill="#7dd3fc">PROGRAMMING LANGUAGES</text>
    <text class="lbl-sm" x="420" y="30" fill="#ff6b35">AI4SE (LLM দিয়ে)</text>
    <!-- PL stack -->
    ${[ ['Type system','safety গাণিতিকভাবে',55,'#7dd3fc'], ['Compiler','parser, IR, optimize',55,'#7dd3fc'], ['Semantics','formal, নির্ভুল',55,'#7dd3fc'] ].map((s,i)=>`<rect class="cell-cyan" x="30" y="${50+i*32}" width="150" height="26" rx="5"/><text class="lbl-sm" x="${105}" y="${67+i*32}" fill="#7dd3fc">${s[0]}</text>`).join('')}
    <!-- AI4SE stack -->
    ${[ ['Code gen','Copilot, Cursor',380,'#ff6b35'], ['Bug repair','LLM fix',380,'#ff6b35'], ['Agent','Devin, autonomous',380,'#ff6b35'] ].map((s,i)=>`<rect class="cell-hot" x="295" y="${50+i*32}" width="150" height="26" rx="5"/><text class="lbl-sm" x="${370}" y="${67+i*32}" fill="#ff6b35">${s[0]}</text>`).join('')}
    <!-- union -->
    <line class="edge-amber" x1="180" y1="110" x2="280" y2="140" style="stroke:#b37feb" marker-end="url(#arrowFire15)"/>
    <line class="edge-amber" x1="295" y1="110" x2="280" y2="140" style="stroke:#b37feb" marker-end="url(#arrowFire15)"/>
    <rect class="cell-purple" x="210" y="140" width="140" height="34" rx="8"/>
    <text class="lbl" x="280" y="162" fill="#b37feb">SAFE + AUTONOMOUS</text>
    <text class="lbl-sm" x="280" y="200" fill="#5e5c74">🔥 LLM যা লেখে, type system যাচাই করে = reliable AI codegen</text>
    <text class="lbl-sm" x="280" y="220" fill="#5e5c74">এটাই frontier — AI agent যে কোড নিরাপদ, গাণিতিকভাবে প্রমাণিত</text>
  </svg>
  <div class="diag-cap">PL = ভাষা নিরাপদ করে (compile-ই হয় না ভুল), AI4SE = LLM কোড লেখে। দুইয়ের মিলন = AI agent যা নিরাপদ কোড লেখে। এটাই পরবর্তী frontier — verified autonomous coding।</div>
</div>

<div class="code-block"># ── STEP 1: What is a programming language? ──
# A PL is a bridge between human thought and machine execution.

# Language paradigms:
# - Imperative: step-by-step instructions (C, Python)
# - Functional: pure functions, no side effects (Haskell, Elixir)
# - Object-oriented: objects and classes (Java, Python)
# - Logic: rules and facts (Prolog)

# Python AST (Abstract Syntax Tree) — how Python sees your code:
import ast

code = """
x = 5
y = x + 3
print(y)
"""

tree = ast.parse(code)
print(ast.dump(tree, indent=2))
# Shows the structure: Assign, BinOp, Name, Constant, Call...

# Compilers translate human code to machine code:
# Source code → Lexer → Parser → AST → Optimizer → Machine code

# LEXER: breaks code into tokens
# Parser: builds tree from tokens
# Optimizer: makes code faster
# Code generator: writes machine code</div>

<div class="code-block"># ── STEP 2: Type systems ──
# Types prevent bugs by catching errors at COMPILE TIME.

# Static typing (Java, Rust, TypeScript):
# Types checked BEFORE running. Errors caught early.
# int x = "hello";  // ERROR at compile time

# Dynamic typing (Python, JavaScript):
# Types checked at RUNTIME. More flexible but errors at runtime.
x = 5          # x is int
x = "hello"    # now x is string — OK in Python

# Python type hints (gradual typing):
from typing import List, Dict, Optional

def process_users(users: List[Dict[str, str]]) -&gt; Optional[str]:
    """Type hints help tools catch bugs."""
    if not users:
        return None
    return users[0]["name"]

# Rust ownership system (zero-cost safety):
rust_example = """
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is MOVED to s2
    // println!("{}", s1);  // ERROR: s1 no longer valid!
    println!("{}", s2);     // OK
}
"""
# Rust prevents memory bugs (use-after-free, data races) at compile time
# without a garbage collector. This is why it's called "fearless concurrency."

# Type system trade-offs:
# ┌─────────────┬──────────────────┬──────────────────┐
# │ Feature     │ Static types     │ Dynamic types   │
# ├─────────────┼──────────────────┼──────────────────┤
# │ Bug catching│ Compile time     │ Runtime         │
# │ Flexibility │ Less             │ More            │
# │ Performance │ Faster (optimized)│ Slower         │
# │ Refactoring │ Easier (safe)    │ Harder          │
# │ Examples    │ Rust, Java, TS   │ Python, JS, Ruby│
# └─────────────┴──────────────────┴──────────────────┘</div>

<div class="code-block"># ── STEP 3: How compilers work ──
# A compiler translates high-level code to machine code.

# Python's compilation pipeline:
# source.py → tokens → AST → bytecode (.pyc) → interpreter

# View Python bytecode:
import dis

def add(a, b):
    return a + b

dis.dis(add)
# Shows instructions:
# LOAD_FAST (a), LOAD_FAST (b), BINARY_ADD, RETURN_VALUE

# JIT (Just-In-Time) compilation:
# PyPy compiles Python at runtime → 3-5x faster
# PyTorch 2.0's torch.compile() JIT-compiles models → 1.3-2x faster

# LLVM — the compiler infrastructure:
# Used by: Clang (C/C++), Rust, Swift, Julia
# Frontend (parse) → LLVM IR → Optimize → Backend (machine code)

# WASM (WebAssembly):
# Run fast code in the browser
# C/C++/Rust → WASM → runs at near-native speed in browser
# Python via Pyodide: runs Python in browser!

# Optimization techniques:
# - Constant folding: 2 + 3 → 5 (at compile time)
# - Dead code elimination: remove unreachable code
# - Inlining: replace function call with function body
# - Loop unrolling: repeat loop body to reduce overhead</div>

<div class="code-block"># ── STEP 4: Formal methods ──
# Proving code is correct with MATHEMATICAL certainty.

# Example — proving a sorting function:
# Property: for all inputs, output is sorted AND contains same elements

# Using Python's hypothesis library (property-based testing):
# from hypothesis import given, strategies as st
#
# @given(st.lists(st.integers()))
# def test_sort_preserves_length(lst):
#     assert len(sorted(lst)) == len(lst)
#
# @given(st.lists(st.integers()))
# def test_sort_is_ordered(lst):
#     result = sorted(lst)
#     for i in range(len(result) - 1):
#         assert result[i] &lt;= result[i + 1]
#
# hypothesis runs HUNDREDS of random inputs automatically!

# Theorem proving (Coq, Lean):
# Mathematical proof that code is correct.
# Lean is used by mathematicians AND AI (AlphaProof):

lean_example = """
theorem add_comm (n m : Nat) : n + m = m + n := by
  induction n with
  | zero => simp
  | succ n ih => simp [Nat.add_succ, Nat.succ_add]; exact ih
"""

# Why formal methods matter:
# - Cryptography: prove no vulnerability exists
# - Aerospace: prove flight control won't crash
# - Kernel: prove memory safety
# - Smart contracts: prove no funds can be stolen

# The tradeoff:
# Formal verification is EXPENSIVE (weeks per function)
# But for critical systems, it's worth it
# AI (AlphaProof) is making this faster</div>

<div class="code-block"># ── STEP 5: AI for Software Engineering (AI4SE) ──
# LLMs are transforming how code is written.

# 1. CODE GENERATION (Copilot, Cursor, Claude Code):
# Type a comment → AI generates the code
# "Write a function to validate email addresses"
# → AI generates the function

# Using GitHub Copilot API:
# from openai import OpenAI
# client = OpenAI()
# response = client.chat.completions.create(
#     model="gpt-4",
#     messages=[
#         {"role": "system", "content": "You are a Python expert."},
#         {"role": "user", "content": "Write a binary search function"},
#     ]
# )
# print(response.choices[0].message.content)

# 2. BUG DETECTION:
# AI reads code and finds potential bugs
# "This function can return None — add a check"

# 3. CODE REVIEW:
# AI reviews pull requests automatically
# Checks for: security, style, performance, correctness

# 4. AUTOMATED REPAIR:
# AI finds the bug AND suggests a fix
# SWE-bench: benchmark for autonomous bug fixing

# 5. CODE AGENTS (Devin, Claude Code):
# Autonomous software engineer
# - Reads the codebase
# - Understands the task
# - Writes code
# - Runs tests
# - Fixes errors
# - Creates pull request

# Research challenges:
# - Hallucination (AI invents non-existent APIs)
# - Large codebase context (how to fit millions of lines?)
# - Correctness verification (AI code may be subtly wrong)
# - Security (AI might introduce vulnerabilities)

# IMPACT:
# Copilot users complete tasks 55% faster (GitHub study)
# This is the biggest change in programming since IDEs</div>

<div class="code-block"># ── STEP 6: PL & AI4SE research areas ──
# ┌─────────────────────┬─────────────────────────────────────┐
# │ Area                │ What you study                     │
# ├─────────────────────┼─────────────────────────────────────┤
# │ Type Systems        │ Static, dependent, ownership       │
# │ Compilers           │ IR, optimization, LLVM, WASM       │
# │ Formal Methods      │ Theorem proving, verification      │
# │ Language Design     │ Rust, Zig, Mojo, DSLs             │
# │ AI4SE               │ Code gen, bug fix, Copilot         │
# │ AI + PL             │ Neurosymbolic, verified AI codegen │
# └─────────────────────┴─────────────────────────────────────┘

# CONFERENCES:
# POPL, OOPSLA, PLDI      — top PL conferences
# ICFP                     — functional programming
# ICSE, FSE, ASE           — software engineering
# NeurIPS (AI4SE workshop) — AI for code

# HOT TOPICS (2024-2026):
# - LLM code generation (Copilot, Claude Code, Devin)
# - SWE-bench (autonomous bug fixing benchmark)
# - AlphaProof (AI + Lean theorem proving)
# - Rust adoption (Linux kernel, Windows)
# - Mojo (Python syntax, C speed, for AI)
# - Verified AI code generation (AI writes provably correct code)

# LANGUAGE LEARNING GUIDE:
# Python  — start here (easy, versatile)
# Rust    — for systems (memory safety, performance)
# Haskell — for PL understanding (pure functional)
# C       — for understanding how computers really work
# Lean    — for theorem proving + AI math

# CAREER PATHS:
# - Compiler Engineer (GCC, LLVM, language teams)
# - PL Researcher (design new languages)
# - AI4SE Researcher (make coding tools smarter)
# - Formal Verification Engineer (prove code correct)
# - Developer Tools Engineer (Copilot, Cursor)

# THE FUTURE:
# AI won't replace programmers.
# But programmers who USE AI will replace those who don't.
# Understanding PL helps you build the AI tools that write code.</div>

<table class="kv-table"><tr><th>উপ-ক্ষেত্র</th><th>বিষয়</th><th>কনফারেন্স</th></tr>
<tr><td class="hl">📐 Type/Safety</td><td>Static, dependent, ownership, effect</td><td>POPL, OOPSLA, ICFP</td></tr>
<tr><td class="hl">⚙️ Compiler</td><td>IR, opt, JIT, WASM, LLVM</td><td>PLDI, CGO, CC</td></tr>
<tr><td class="hl">🧪 Formal</td><td>Theorem proving, verification, synthesis</td><td>POPL, CAV, TACAS, ITP</td></tr>
<tr><td class="hl">🔤 Lang Design</td><td>Rust/Zig/Mojo, DSL, meta</td><td>PLDI, OOPSLA, SPLASH</td></tr>
<tr><td class="hl">🔥🔥🔥 AI4SE</td><td>Copilot, SWE-bench, code agent</td><td>ICSE, FSE, NeurIPS, ICLR</td></tr>
<tr><td class="hl">🔥 AI+PL</td><td>LLM synthesis, AlphaProof, verified codegen</td><td>POPL, NeurIPS, ICLR</td></tr></table>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৬-১০%</div><div class="sc-label">গ্রহণের হার</div></div>
<div class="stat-card"><div class="sc-num">🔥🔥🔥</div><div class="sc-label">AI4SE = সবচেয়ে হট (industry billions)</div></div>
<div class="stat-card"><div class="sc-num">$১৮০-৪৫০K</div><div class="sc-label">industry (GitHub, Anthropic, Cursor, Modular)</div></div>
<div class="stat-card"><div class="sc-num">AlphaProof</div><div class="sc-label">২০২৪ — LLM + Lean = IMO silver</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল ধারণা</div>"PL গবেষণা 'মরা' — Java/Python হয়ে গেছে, নতুন ভাষা দরকার নেই।" ভুল। Rust (memory safety, এখন Android/Linux kernel-এ), Zig, Mojo (AI compute), WASM — সব এখন frontier। আর AI4SE? Copilot/Cursor/Devin = বিলিয়ন ডলার industry। AlphaProof (২০২৪) LLM + Lean দিয়ে IMO math silver — নতুন paradigm। PL কখনো মরেনি, AI-এর যুগে পুনর্জন্ম পাচ্ছে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক ধারণা</div>"PL + AI4SE = এখন সবচেয়ে হট। PL ভাষা নিরাপদ করে (Rust, formal verification), AI4SE কোড লেখায় (Copilot, agent)। দুইয়ের মিলন = verified autonomous coding — AlphaProof-এর মতো। niche, কিন্তু industry বিলিয়ন ঢালছে। গাণিতিক (PL) বা empirical (AI4SE) — দুটোই গভীর path।"</div>
</div>

<div class="callout info"><span class="co-icon">📈</span><div><strong>২০২৪-২৬-তে যা বড়:</strong> AI code agents (Devin, OpenHands, Cursor Composer — autonomous SWE), SWE-bench (real GitHub issue solve), AlphaProof/AlphaGeometry ২ (LLM + Lean — IMO-level math, ২০২৪-২৫), Rust in kernel (Linux, Microsoft), Mojo (AI-নেটিভ lang), WASM beyond browser।</div></div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>তোমার জন্য কি ঠিক?</strong> ✅ AI4SE = তোমার <strong>secondary</strong> পছন্দ — তুমি developer, AI আগ্রহী, প্রতিদিন SE করো। Copilot/Cursor-এর মতো tool নিয়ে গবেষণা = perfect fit। ⚠️ pure PL (formal, type theory) কঠিন — গাণিতিক শক্ত দরকার। 💡 AI + PL crossover (verified codegen, AlphaProof-style) = সবচেয়ে গভীর, সবচেয়ে হট।</div></div>

<div class="dialogue">"দুই পথ আছে," ক্লারা বললেন। "PL — গাণিতিক, গভীর, formal। type theory, semantics, proof — এটা শিখলে তুমি ভাষার স্রষ্টা হও। AI4SE — empirical, হট, industry-billion। LLM দিয়ে কোড লেখানো, agent বানানো। তোমার জন্য?" তিনি ভাবলেন। "তুমি developer, AI পছন্দ করো। AI4SE তোমার সেরা পথ — কারণ তুমি জানো real code কেমন, real bug কীভাবে হয়। এটাই LLM-কে শেখাতে হবে। Copilot-এর মতো tool এখন প্রতিটা developer-র জীবন — তুমি সেটা বানাতে পারো।"</div>
<div class="dialogue en">"Two paths," Clara said. "PL — mathematical, deep, formal. Type theory, semantics, proof — learning this, you become a language creator. AI4SE — empirical, hot, industry-billion. Making LLMs write code, building agents. For you?" She thought. "You're a developer, you like AI. AI4SE is your best path — because you know what real code is like, how real bugs happen. That's what LLMs must learn. Tools like Copilot are now in every developer's life — you can build them."</div>

<div class="dialogue">বায়ান — স্পষ্ট প্রকাশ, নির্ভুল ভাষা। কুরআনে আল্লাহ বলেন: "তিনি মানুষকে শিখিয়েছেন বায়ান — স্পষ্ট ভাষা।" (৫৫:৪)। বায়ান হলো স্পষ্ট, নির্ভুল, অম্বিগুইটি-মুক্ত প্রকাশ। PL গবেষণা হলো বায়ান — এমন ভাষা ডিজাইন করা যেখানে অম্বিগুইটি নেই, ভুল সম্ভব নয়। একটা ভালো type system হলো বায়ান — প্রতিটা শব্দের অর্থ নির্দিষ্ট। AI4SE হলো বায়ান-এর প্রসার — AI স্পষ্ট কোড লেখে, মানুষের ভাষাকে মেশিনের ভাষায় রূপান্তর করে। যে বায়ান তৈরি করে, সে যোগাযোগের স্রষ্টা।</div>
<div class="dialogue en">Bayan — clear expression, precise language. Allah says: "He taught man bayan — clear speech." (55:4). Bayan is clear, precise, unambiguous expression. PL research is bayan — designing languages where there's no ambiguity, where error is impossible. A good type system is bayan — each word's meaning is fixed. AI4SE is the extension of bayan — AI writes clear code, transforming human language into machine language. One who creates bayan, is a creator of communication.</div>

<div class="secret-box">🔤 PL + AI4SE: SE-র সবচেয়ে গভীর সীমানা। PL = ভাষা নিরাপদ (Rust, formal), AI4SE = LLM কোড (Copilot, agent, 🔥🔥🔥)। মিলন = verified autonomous coding (AlphaProof)। AI4SE = তোমার secondary পছন্দ।</div>`,
  senior:{
    title:"PL/AI4SE PhD — Secondary Pick",
    body:`<p><strong>AI4SE = তোমার secondary pick:</strong> তুমি developer, AI আগ্রহী — Copilot/Cursor নিয়ে গবেষণা = perfect fit। তুমি real codebase, real workflow জানো — এটা AI4SE-তে বিরল ও মূল্যবান। GitHub, Anthropic, Cursor, Replit — সবাই hire করে।</p><p><strong>SWE-bench দিয়ে শুরু:</strong> SWE-bench (real GitHub issue solve) একটা baseline রান করো, নতুন approach বা tool যোগ করো। একটা SWE-bench পেপার = ICSE/FSE workshop entry। এখন সবচেয়ে হট benchmark।</p><p><strong>Code agent বানাও:</strong> একটা simple autonomous SWE agent (Devin-এর মতো) GitHub-এ — tool use, planning। এটা concrete, demonstrable, high-impact। তোমার AI agent জ্ঞান (Book 12) কাজে দেবে।</p><p><strong>pure PL = গাণিতিক:</strong> formal verification, Lean/Coq — গণিত শক্ত হলে যাও। AlphaProof (LLM + Lean) crossover = সবচেয়ে গভীর frontier। 'Software Foundations' (Pierce, ফ্রি) দিয়ে type theory শুরু করো।</p>`
  }
});
