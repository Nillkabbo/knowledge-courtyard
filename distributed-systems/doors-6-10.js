// ════════════════════════════════════════
// সংযোগের সেতু — DOORS 6-10
// The Bridge of Connections: MapReduce → Dynamo → Byzantine → Kleppmann → Synthesis
// ════════════════════════════════════════

doors.push({
  num: 6,
  icon: "🗺️",
  color: "#fbbf24",
  name: "ভাগ করে জয় করো",
  subtitle: "Divide and Conquer",
  tech: "MapReduce — Distributed Data Processing (Dean & Ghemawat, OSDI 2004)",
  spirit: "আয়াত — বিচ্ছিন্ন অংশ থেকে সম্পূর্ণ সত্য, ভাগ করে সমাধান",
  secret: "বিশাল কাজকে হাজার টুকরোয় ভাগ করো — প্রতিটা ছোট, সব মিলে বিশাল।",
  recall: {
    q: "MapReduce কীভাবে কাজ করে? Map এবং Reduce কী করে?",
    qen: "How does MapReduce work? What do Map and Reduce do?",
    a: "Map: প্রতিটা নোড নিজের ডেটার অংশ নিয়ে কাজ করে — key-value pair তৈরি করে। Reduce: একই key-র সব value এক জায়গায় এনে যোগ করে। যেমন: হাজার ফাইলে শব্দ গোনা — প্রতিটা নোড একটা ফাইল গোনে, তারপর সব যোগ।",
    aen: "Map: each node processes its data chunk — creates key-value pairs. Reduce: all values for same key are combined. E.g., word count across thousands of files — each node counts one file, then sum."
  },
  story: `<p class="scene-setting">মাউন্টেন ভিউ, ক্যালিফোর্নিয়া, ২০০৩। Google-এ দুজন ইঞ্জিনিয়ার একটা অসম্ভব সমস্যায় আছেন — পুরো ইন্টারনেটের ওয়েব পেজ index করতে হবে। কোটি কোটি পেজ। একটা মেশিনে এই কাজ করতে গেলে মাস লাগবে। কিন্তু Google-এর হাজার মেশিন আছে। কীভাবে কাজটা ভাগ করবে? তাঁদের নাম — জেফ্রি ডিন (Jeffrey Dean) এবং সঞ্জয় ঘেমাওয়াত (Sanjay Ghemawat)।</p>

  <p class="scene-setting en">Mountain View, California, 2003. Two engineers at Google face an impossible problem — index the entire internet's web pages. Billions of pages. On one machine this would take months. But Google has thousands of machines. How to split the work? Their names — Jeffrey Dean and Sanjay Ghemawat.</p>

  <div class="dialogue">
    <p><strong>ডিন:</strong> দুটো ধাপ। Map — প্রতিটা মেশিন নিজের অংশে কাজ করে। যেমন শব্দ গোনা: প্রতিটা মেশিন একটা ফাইল নেয়, শব্দ গোনে, key-value pair বানায় — ('বিড়াল', ৩), ('কুকুর', ৫)।</p>
    <p><strong>তুমি:</strong> তারপর?</p>
    <p><strong>ঘেমাওয়াত:</strong> Reduce — একই key-র সব value এক জায়গায় এনে যোগ। মেশিন ১ বলছে ('বিড়াল', ৩), মেশিন ২ বলছে ('বিড়াল', ৭)। Reduce বলবে — ('বিড়াল', ১০)। ভাগ করে জয় করো।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Dean:</strong> Two steps. Map — each machine works on its own chunk. E.g., word count: each machine takes a file, counts words, creates key-value pairs — ('cat', 3), ('dog', 5).</p>
    <p><strong>You:</strong> Then what?</p>
    <p><strong>Ghemawat:</strong> Reduce — all values for the same key are summed. Machine 1 says ('cat', 3), Machine 2 says ('cat', 7). Reduce says — ('cat', 10). Divide and conquer.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> Jeffrey Dean এবং Sanjay Ghemawat Google-এ কাজ করেন। MapReduce গবেষণাপত্র — <em>"MapReduce: Simplified Data Processing on Large Clusters"</em>, OSDI ২০০৪ (USENIX Symposium on Operating Systems Design and Implementation)। একই জুটি Google File System (GFS) প্রকাশ করেন SOSP ২০০৩-এ। Bigtable — Chang et al., OSDI ২০০৬ (Best Paper)। Apache Spark — Matei Zaharia et al., <em>"Resilient Distributed Datasets"</em>, NSDI ২০১২।</div></div>

  <div class="diagram">
    <div class="diag-title">MapReduce প্রবাহ — শব্দ গোনার উদাহরণ</div>
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrOrange6" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f97316"/>
        </marker>
      </defs>

      <text x="280" y="18" text-anchor="middle" font-family="Cinzel,serif" font-size="10" font-weight="700" fill="#fbbf24" letter-spacing="2">MAPREDUCE — WORD COUNT</text>

      <!-- Input files -->
      <text x="90" y="42" text-anchor="middle" font-size="9" font-weight="700" fill="#9290a8">INPUT</text>
      <rect x="45" y="50" width="90" height="22" rx="4" fill="rgba(92,92,116,0.15)" stroke="#5e5c74" stroke-width="1"/>
      <text x="90" y="64" text-anchor="middle" font-size="8" fill="#9290a8">ফাইল ১: "বিড়াল কুকুর"</text>
      <rect x="45" y="78" width="90" height="22" rx="4" fill="rgba(92,92,116,0.15)" stroke="#5e5c74" stroke-width="1"/>
      <text x="90" y="92" text-anchor="middle" font-size="8" fill="#9290a8">ফাইল ২: "বিড়াল বিড়াল"</text>

      <!-- Arrow to Map -->
      <text x="175" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#f97316">MAP</text>
      <path d="M 140 61 L 200 61" fill="none" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrOrange6)"/>
      <path d="M 140 89 L 200 89" fill="none" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrOrange6)"/>

      <!-- Map output -->
      <text x="250" y="42" text-anchor="middle" font-size="8" fill="#fbbf24">(key, ১)</text>
      <rect x="205" y="50" width="90" height="22" rx="4" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1"/>
      <text x="250" y="64" text-anchor="middle" font-size="8" fill="#f97316">(বিড়াল,১)(কুকুর,১)</text>
      <rect x="205" y="78" width="90" height="22" rx="4" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1"/>
      <text x="250" y="92" text-anchor="middle" font-size="8" fill="#f97316">(বিড়াল,১)(বিড়াল,১)</text>

      <!-- Shuffle arrow -->
      <text x="355" y="42" text-anchor="middle" font-size="9" font-weight="700" fill="#3dd6c4">SHUFFLE</text>
      <path d="M 300 61 L 360 61" fill="none" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#arrOrange6)" stroke-dasharray="4,2"/>
      <path d="M 300 89 L 360 89" fill="none" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#arrOrange6)" stroke-dasharray="4,2"/>

      <!-- Grouped -->
      <rect x="360" y="50" width="100" height="50" rx="4" fill="rgba(61,214,196,0.1)" stroke="#3dd6c4" stroke-width="1"/>
      <text x="410" y="64" text-anchor="middle" font-size="8" font-weight="700" fill="#3dd6c4">Group by key</text>
      <text x="410" y="76" text-anchor="middle" font-size="8" fill="#3dd6c4">বিড়াল: [১,১,১]</text>
      <text x="410" y="88" text-anchor="middle" font-size="8" fill="#3dd6c4">কুকুর: [১]</text>

      <!-- Reduce -->
      <text x="490" y="42" text-anchor="middle" font-size="9" font-weight="700" fill="#52c41a">REDUCE</text>
      <path d="M 465 75 L 495 75" fill="none" stroke="#52c41a" stroke-width="1.5" marker-end="url(#arrOrange6)"/>

      <!-- Output -->
      <rect x="480" y="105" width="65" height="40" rx="4" fill="rgba(82,196,26,0.1)" stroke="#52c41a" stroke-width="1"/>
      <text x="512" y="122" text-anchor="middle" font-size="9" font-weight="700" fill="#52c41a">বিড়াল: ৩</text>
      <text x="512" y="136" text-anchor="middle" font-size="9" font-weight="700" fill="#52c41a">কুকুর: ১</text>

      <!-- Scale note -->
      <rect x="40" y="170" width="480" height="70" rx="8" fill="rgba(249,115,22,0.05)" stroke="#f97316" stroke-width="0.5"/>
      <text x="280" y="190" text-anchor="middle" font-size="10" font-weight="700" fill="#fbbf24">কেন MapReduce বিপ্লবাত্মক ছিল?</text>
      <text x="280" y="208" text-anchor="middle" font-size="9" fill="#9290a8">হাজার মেশিন → কোটি পেজ → মিনিটে শেষ</text>
      <text x="280" y="223" text-anchor="middle" font-size="9" fill="#9290a8">এক মেশিনে অসম্ভব → হাজার মেশিনে সহজ</text>

      <!-- Spark -->
      <rect x="80" y="255" width="400" height="40" rx="6" fill="rgba(179,127,235,0.08)" stroke="#b37feb" stroke-width="0.5"/>
      <text x="280" y="272" text-anchor="middle" font-size="9" font-weight="700" fill="#b37feb">Apache Spark (২০১২) — MapReduce-এর উত্তরসূরি</text>
      <text x="280" y="286" text-anchor="middle" font-size="8" fill="#9290a8">In-memory processing → MapReduce-এর চেয়ে ১০-১০০x দ্রুত</text>
    </svg>
    <div class="diag-cap">Map: প্রতিটা মেশিন নিজের অংশে key-value তৈরি করে। Shuffle: একই key এক জায়গায়। Reduce: যোগ করে। ভাগ করে জয়।</div>
  </div>

  <div class="code-block"># ── STEP 1: MapReduce — divide and conquer for big data ──
# Google's 2004 paper. Process petabytes across thousands of machines.

mapreduce = """
MAPREDUCE (Dean & Ghemawat, 2004):

INSPIRATION: functional programming map() and reduce()
  map(function, list) → transformed_list
  reduce(function, list) → single_value

MAPREDUCE FOR BIG DATA:
  Input: huge dataset (terabytes)
  Split: into chunks across thousands of machines
  Map: each machine processes its chunk independently
  Shuffle: group by key
  Reduce: aggregate results

EXAMPLE: Count word frequencies in 1TB of text:

  MAP phase (parallel, per machine):
    Input: "the cat sat on the mat"
    Output: (the, 1), (cat, 1), (sat, 1), (on, 1), (the, 1), (mat, 1)

  SHUFFLE (group by key):
    (the, [1, 1]), (cat, [1]), (sat, [1]), (on, [1]), (mat, [1])

  REDUCE phase (parallel, per key):
    (the, 2), (cat, 1), (sat, 1), (on, 1), (mat, 1)

  Output: word counts for entire 1TB dataset

WHY IT WORKS:
  → Map runs in PARALLEL (each machine independently)
  → Reduce runs in PARALLEL (each key independently)
  → 1TB / 1000 machines = 1GB per machine = fast!
  → Fault tolerant: if machine fails, re-run its chunk
"""

print(mapreduce)</div>

  <div class="code-block"># ── STEP 2: MapReduce in Python ──
# Hadoop Streaming and modern alternatives.

mr_python = """
PYTHON MAPREDUCE (Hadoop Streaming):

# mapper.py:
import sys

for line in sys.stdin:
    for word in line.strip().split():
        print(f"{word}\\t1")

# reducer.py:
import sys
from collections import Counter

counts = Counter()

for line in sys.stdin:
    word, count = line.strip().split("\\t")
    counts[word] += int(count)

for word, count in counts.items():
    print(f"{word}\\t{count}")

# Run on Hadoop:
$ hadoop jar hadoop-streaming.jar \\
    -mapper mapper.py \\
    -reducer reducer.py \\
    -input /data/input.txt \\
    -output /data/wordcount/

PYTHON MRJOB (easier API):
  from mrjob.job import MRJob

  class MRWordCount(MRJob):
      def mapper(self, _, line):
          for word in line.split():
              yield word, 1

      def reducer(self, word, counts):
          yield word, sum(counts)

  if __name__ == '__main__':
      MRWordCount.run()

  # Run: python wordcount.py -r hadoop --hadoop-streaming-jar ... input.txt
"""

print(mr_python)</div>

  <div class="code-block"># ── STEP 3: Apache Spark — the modern replacement ──
# In-memory processing, 10-100x faster than MapReduce.

spark = """
APACHE SPARK (2012):

WHY SPARK BEATS MAPREDUCE:
  MapReduce: writes intermediate data to DISK between stages
  Spark: keeps data in MEMORY between stages (RDD/DataFrame)

  → Spark is 10-100x faster than MapReduce
  → Same fault tolerance (lineage-based recovery)
  → Richer API (not just map/reduce)
  → Supports SQL, streaming, ML, graph processing

SPARK ARCHITECTURE:
  Driver: coordinates the job
  Executors: worker processes on cluster nodes
  RDD/DataFrame: distributed data structure (in-memory)

PYSPARK EXAMPLE:
  from pyspark.sql import SparkSession

  spark = SparkSession.builder.appName("WordCount").getOrCreate()

  # Read 1TB text file:
  text = spark.read.text("hdfs:///data/input.txt")

  # Word count (SQL-like):
  from pyspark.sql.functions import explode, split, lower, col

  word_counts = (text
      .select(explode(split(lower(col("value")), " ")).alias("word"))
      .groupBy("word")
      .count()
      .orderBy("count", ascending=False)
  )

  word_counts.show(10)  # Top 10 most frequent words

SPARK vs MAPREDUCE:
  MapReduce: disk-based, 2 phases (map + reduce), batch only
  Spark: memory-based, multi-stage DAG, batch + streaming + ML
  → Use Spark for ALL new big data projects.
"""

print(spark)

# SPARK PERFORMANCE COMPARISON:
perf = """
PERFORMANCE (Logistic Regression on 1TB data):

MapReduce (Hadoop):  ~110 seconds per iteration
Spark:                ~4 seconds per iteration (27x faster!)

WHY?
  MapReduce reads from disk EVERY iteration
  Spark keeps data in memory between iterations

  For iterative algorithms (ML, graph):
    MapReduce: disk I/O bottleneck
    Spark: in-memory = 10-100x faster
"""
print(perf)</div>

  <div class="code-block"># ── STEP 4: Google's Big Three papers ──
# The foundation of modern big data infrastructure.

big_three = """
GOOGLE'S BIG THREE (2003-2006):

These three papers BEGAN the Big Data revolution.
Every major data system traces back to them.

1. GFS — Google File System (Ghemawat, Gobioff, Leung, 2003):
   → Distributed file system for huge files
   → Files split into 64MB chunks across thousands of machines
   → Replication: each chunk on 3 machines (fault tolerance)
   → Open source equivalent: HDFS (Hadoop Distributed File System)

2. MapReduce (Dean & Ghemawat, 2004):
   → Parallel processing framework
   → Map (process each chunk) + Reduce (aggregate)
   → Open source equivalent: Hadoop MapReduce, Apache Spark

3. Bigtable (Chang et al., 2006):
   → Distributed, sparse, sorted map
   → Billions of rows, millions of columns
   → Column families, versioned cells
   → Open source equivalents: HBase, Cassandra, DynamoDB

LEGACY:
  GFS → HDFS → S3, GCS, Azure Blob
  MapReduce → Hadoop → Spark, Flink, Beam
  Bigtable → HBase → Cassandra, DynamoDB, MongoDB

Dean & Ghemawat later built Spanner (global DB), Borg (→ Kubernetes),
and many more. Google's research papers shaped the ENTIRE industry.
"""

print(big_three)</div>

  <div class="code-block"># ── STEP 5: When to use big data tools ──
# Practical decision guide for data processing.

when_to_use = {
    "Single Machine (pandas, Python)": {
        "data_size": "< 10GB",
        "tools": "pandas, NumPy, scikit-learn",
        "use_case": "Most data science, small datasets",
        "cost": "Free (your laptop/server)",
    },
    "Dask / Polars": {
        "data_size": "10GB - 100GB",
        "tools": "Dask, Polars, Vaex",
        "use_case": "Medium data that doesn't fit in RAM",
        "cost": "Single machine (more RAM)",
    },
    "Apache Spark": {
        "data_size": "100GB - Petabytes",
        "tools": "PySpark, Spark SQL, MLlib",
        "use_case": "Big data, ETL, ML at scale",
        "cost": "Cluster (3+ machines, cloud)",
    },
    "Cloud Big Data (managed)": {
        "data_size": "Any size",
        "tools": "AWS EMR, GCP Dataproc, Databricks",
        "use_case": "Managed Spark/Hadoop (no ops)",
        "cost": "Pay per use (cloud)",
    },
    "Streaming (real-time)": {
        "data_size": "Continuous flow",
        "tools": "Kafka, Flink, Spark Streaming",
        "use_case": "Real-time analytics, IoT, alerts",
        "cost": "Cluster + message queue",
    },
}

print("WHEN TO USE BIG DATA TOOLS:")
for tier, info in when_to_use.items():
    print(f"\\n  {tier}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# BIG DATA MYTH:
myth = """
BIG DATA MYTH:

"You need Spark/Hadoop for all data processing."
FALSE! Most data fits on a single machine.

Rule of thumb:
  < 10GB → pandas (single machine is FINE)
  10-100GB → Dask/Polars (single machine with optimization)
  > 100GB → Spark (distributed cluster needed)

Don't add Spark complexity unless your data REQUIRES it.
Premature distributed computing is a common anti-pattern.
"""
print(myth)</div>

  <div class="code-block"># ── STEP 6: MapReduce/Spark best practices ──
# Production patterns for big data processing.

best_practices = [
    "Use Spark over MapReduce for new projects (10-100x faster)",
    "Keep data in memory (cache/persist intermediate results)",
    "Avoid data skew (some partitions much larger than others)",
    "Use DataFrame/SQL API (optimized by Catalyst optimizer)",
    "Partition wisely (right number, right key)",
    "Broadcast small tables (avoid shuffle in joins)",
    "Use columnar formats (Parquet, ORC) for storage",
    "Compress data (Snappy for speed, Gzip for size)",
    "Monitor: data skew, shuffle size, GC time",
    "Use Spark UI to identify bottlenecks",
    "Set appropriate executor memory and cores",
    "Use predicate pushdown (filter early)",
    "Avoid collect() on large datasets (brings to driver)",
    "Checkpoint long lineages (prevent stack overflow)",
    "Test on small sample, then scale to full data",
]

print("BIG DATA BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Tool             │ Best For                        │
# ├──────────────────┼──────────────────────────────────┤
# │ pandas           │ <10GB (most data science)       │
# │ Dask/Polars      │ 10-100GB (single machine)      │
# │ Spark            │ >100GB (distributed)            │
# │ MapReduce        │ Legacy Hadoop (don't start new) │
# │ Kafka            │ Streaming data pipelines        │
# │ Parquet          │ Columnar storage (fast reads)   │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৪ (City Builder's Codex) Door ১৩-এ Message Queues & Async Processing শিখেছিলে — MapReduce হলো সেই async processing-এর বিশাল রূপ। Book ৩৪ (Scale of Evidence) Door ২-এ Descriptive Statistics — MapReduce দিয়ে কোটি ডেটার গডেট বের করা যায়।</div></div>

  <div class="verse">
    <div class="verse-arabic">وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ</div>
    <div class="verse-translation">আর বলো: কাজ করো — আল্লাহ তোমাদের কাজ দেখবেন।</div>
    <div class="verse-ref">— কুরআন ৯:১০৫</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🗺️</div>
    <div class="secret-text">বিশাল কাজকে ভাগ করো — হাজার ছোট কাজ সহজ, এক বিশাল কাজ অসম্ভব।</div>
    <div class="secret-sub">Divide huge work — thousands of small tasks are easy, one huge task is impossible.</div>
  </div>`,
  senior: {
    title: "Spark > MapReduce আজকাল",
    body: `<p><strong>১. MapReduce বুঝো কিন্তু Spark ব্যবহার করো:</strong> MapReduce ডিস্কে লেখে — ধীর। Spark মেমরিতে রাখে — ১০-১০০x দ্রুত।</p>
    <p><strong>২. Partitioning:</strong> ডেটা কীভাবে ভাগ করবে তা shuffle-এর আগে ঠিক করো। খারাপ partitioning → data skew → কিছু নোড ব্যস্ত, কিছু অলস।</p>
    <p><strong>৩. বাস্তব ব্যবহার:</strong> Hadoop (Yahoo-এর MapReduce সংস্করণ), Spark (Databricks), Beam (Google) — সব MapReduce দর্শন থেকে এসেছে।</p>`
  }
});

doors.push({
  num: 7,
  icon: "🔮",
  color: "#f97316",
  name: "শেষ পর্যন্ত সত্য",
  subtitle: "Eventually True",
  tech: "Amazon Dynamo — Eventual Consistency, Consistent Hashing, Vector Clocks (DeCandia et al., SOSP 2007)",
  spirit: "সিলসিলা — শৃঙ্খল, ছড়িয়ে পড়া সত্য যা শেষে সব জায়গায় পৌঁছায়",
  secret: "সত্য একসাথে সব জায়গায় আসে না — কিন্তু শেষ পর্যন্ত পৌঁছায়। ধৈর্য ধরো।",
  recall: {
    q: "Dynamo কোন CAP পছন্দ করে? Consistent hashing কী?",
    qen: "Which CAP choice does Dynamo make? What is consistent hashing?",
    a: "Dynamo AP বেছে নেয় — Availability + Partition Tolerance। Consistency ছাড়ে। সব রিকোয়েস্টে উত্তর মেলে, কিন্তু কিছু সময় পুরোনো ডেটা। Consistent hashing: নোড যোগ/বিদায় হলে শুধু প্রতিবেশী প্রভাবিত, সব নয়।",
    aen: "Dynamo chooses AP — Availability + Partition Tolerance. Trades away Consistency. Every request answered, but sometimes stale data. Consistent hashing: when nodes join/leave only neighbors affected, not all."
  },
  story: `<p class="scene-setting">সিয়াটেল, ২০০৪-২০০৭। Amazon-এ একটা সমস্যা — ব্ল্যাক ফ্রাইডে। লক্ষ লক্ষ মানুষ একসাথে কেনাকাটা। শপিং কার্ট ক্র্যাশ করলে — ক্রেতা চলে যায়। উপলব্ধতা (availability) সবচেয়ে গুরুত্বপূর্ণ। একটু পুরোনো ডেটা মেনে নেওয়া যায়, কিন্তু কোনো রিকোয়েস্ট ব্যর্থ হবে না। এই দর্শন থেকে জন্ম Dynamo — Amazon-এর অভ্যন্তরীণ key-value স্টোর।</p>

  <p class="scene-setting en">Seattle, 2004-2007. Amazon faces a problem — Black Friday. Millions of people shopping simultaneously. If the shopping cart crashes — customers leave. Availability is most important. Slightly stale data is acceptable, but no request fails. This philosophy birthed Dynamo — Amazon's internal key-value store.</p>

  <div class="dialogue">
    <p><strong>ডায়নামো টিম:</strong> আমরা AP বেছে নিলাম। Availability + Partition Tolerance। Consistency ছাড়লাম। কেন? কারণ Amazon-এ বিক্রি থামলে টাকা যায়। একটু পুরোনো দাম দেখালেও ক্রেতা কিনবে। কিন্তু 'সার্ভার ডাউন' দেখালে চলে যাবে।</p>
    <p><strong>তুমি:</strong> কিন্তু পুরোনো ডেটা দেখালে সমস্যা হবে না?</p>
    <p><strong>ডায়নামো টিম:</strong> শেষ পর্যন্ত সত্য (eventual consistency)। কিছু সময় পরে সব নোডে নতুন ডেটা পৌঁছাবে। ধৈর্য ধরো। ভেক্টর ক্লক (vector clock) দিয়ে ট্র্যাক করি কোন ভার্সন নতুন।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Dynamo team:</strong> We chose AP. Availability + Partition Tolerance. We traded Consistency. Why? Because at Amazon, stopping sales loses money. Slightly old price still lets customers buy. But 'server down' sends them away.</p>
    <p><strong>You:</strong> But won't stale data cause problems?</p>
    <p><strong>Dynamo team:</strong> Eventually consistent. After some time, new data reaches all nodes. Be patient. Vector clocks track which version is newer.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> Dynamo গবেষণাপত্র — DeCandia এট আল. (২০০৭), <em>"Dynamo: Amazon's Highly Available Key-value Store"</em>, SOSP ২০০৭ (21st ACM SIGOPS Symposium)। ভার্নার ভোগেলস (Werner Vogels) — Amazon CTO। তাঁর <em>"Eventually Consistent"</em> প্রকাশিত ACM Queue, খণ্ড ৬, সংখ্যা ৬ (ডিসেম্বর ২০০৮)। Consistent hashing — Karger এট আল. (১৯৯৭), STOC '৯৭। <strong>গুরুত্বপূর্ণ:</strong> ভেক্টর ক্লক Lamport (১৯৭৮) আবিষ্কার করেননি — Lamport scalar clocks আবিষ্কার করেন। ভেক্টর ক্লক স্বাধীনভাবে আবিষ্কার করেন Fidge (ফেব্রুয়ারি ১৯৮৮) এবং Mattern (অক্টোবর ১৯৮৮)।</div></div>

  <div class="diagram">
    <div class="diag-title">Consistent Hashing — Dynamo-এর ডেটা বণ্টন</div>
    <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrOrange7" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f97316"/>
        </marker>
      </defs>

      <text x="280" y="18" text-anchor="middle" font-family="Cinzel,serif" font-size="10" font-weight="700" fill="#fbbf24" letter-spacing="2">CONSISTENT HASHING RING</text>

      <!-- Hash ring circle -->
      <circle cx="280" cy="130" r="80" fill="none" stroke="rgba(92,92,116,0.3)" stroke-width="1.5" stroke-dasharray="4,3"/>

      <!-- Nodes on ring -->
      <circle cx="280" cy="50" r="14" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="2"/>
      <text x="280" y="53" text-anchor="middle" font-size="9" font-weight="700" fill="#f97316">N₁</text>

      <circle cx="360" cy="100" r="14" fill="rgba(61,214,196,0.2)" stroke="#3dd6c4" stroke-width="2"/>
      <text x="360" y="103" text-anchor="middle" font-size="9" font-weight="700" fill="#3dd6c4">N₂</text>

      <circle cx="340" cy="195" r="14" fill="rgba(179,127,235,0.2)" stroke="#b37feb" stroke-width="2"/>
      <text x="340" y="198" text-anchor="middle" font-size="9" font-weight="700" fill="#b37feb">N₃</text>

      <circle cx="220" cy="195" r="14" fill="rgba(82,196,26,0.2)" stroke="#52c41a" stroke-width="2"/>
      <text x="220" y="198" text-anchor="middle" font-size="9" font-weight="700" fill="#52c41a">N₄</text>

      <circle cx="200" cy="100" r="14" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="2"/>
      <text x="200" y="103" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">N₅</text>

      <!-- Data items (small dots) -->
      <circle cx="250" cy="55" r="3" fill="#9290a8"/>
      <text x="240" y="44" text-anchor="middle" font-size="10" fill="#5e5c74">D₁</text>
      <circle cx="320" cy="70" r="3" fill="#9290a8"/>
      <text x="330" y="62" font-size="10" fill="#5e5c74">D₂</text>

      <!-- Explanation -->
      <rect x="40" y="225" width="480" height="30" rx="6" fill="rgba(249,115,22,0.05)" stroke="#f97316" stroke-width="0.5"/>
      <text x="280" y="244" text-anchor="middle" font-size="9" fill="#9290a8">ডেটা হ্যাশ → রিং-এর অবস্থান → ঘড়ির দিকে পরবর্তী নোডে সংরক্ষণ</text>

      <!-- Right side notes -->
      <text x="450" y="55" font-size="8" font-weight="700" fill="#fbbf24">সুবিধা:</text>
      <text x="450" y="70" font-size="10" fill="#9290a8">নোড যোগ → শুধু</text>
      <text x="450" y="80" font-size="10" fill="#9290a8">প্রতিবেশী প্রভাবিত</text>
      <text x="450" y="95" font-size="10" fill="#9290a8">নোড বিদায় → ডেটা</text>
      <text x="450" y="105" font-size="10" fill="#9290a8">পরবর্তীতে চলে যায়</text>
    </svg>
    <div class="diag-cap">Consistent hashing: ডেটা ও নোড উভয়ই একটা রিং-এ স্থাপিত। প্রতিটা ডেটা ঘড়ির দিকে পরবর্তী নোডে যায়। নোড যোগ/বিদায় হলে শুধু প্রতিবেশী প্রভাবিত হয়।</div>
  </div>

  <div class="code-block"># ── STEP 1: Amazon Dynamo — AP system design ──
# The paper that inspired Cassandra, Riak, and DynamoDB.

dynamo = """
AMAZON DYNAMO (DeCandia et al., SOSP 2007):

DESIGN CHOICE: AP (Availability + Partition Tolerance)
  → Always available (never returns errors)
  → Eventual consistency (stale data OK temporarily)
  → Perfect for: shopping cart, session management, recommendations

KEY INNOVATIONS:
  1. Consistent Hashing (data distribution)
  2. Vector Clocks (version tracking)
  3. Read Repair (fix stale data during reads)
  4. Hinted Handoff (temporarily handle failed nodes)
  5. Merkle Trees (fast anti-entropy/synchronization)

DYNAMO'S PHILOSOPHY (Werner Vogels):
  "At Amazon, we'd rather show stale product info
   than show an error page. Availability > Consistency."

LEGACY:
  DynamoDB (Amazon's public cloud database)
  Cassandra (Facebook, inspired by Dynamo)
  Riak (Basho, Dynamo clone)
  Voldemort (LinkedIn)
"""

print(dynamo)</div>

  <div class="code-block"># ── STEP 2: Consistent Hashing ──
# How Dynamo distributes data across nodes.

consistent_hashing = """
CONSISTENT HASHING:

PROBLEM: How to distribute data across N nodes?
  → Naive: hash(key) % N → but when N changes, ALL data moves!

CONSISTENT HASHING SOLUTION:
  → Place both nodes AND keys on a RING (hash space 0 to 2^32)
  → Each key goes to the NEXT node clockwise on the ring

  Ring:
    0 ---- Node_A ---- Node_B ---- Node_C ---- 2^32

  Key "user:42" hashes to position between A and B → stored on B
  Key "user:99" hashes to position between B and C → stored on C

ADVANTAGE:
  → Node joins/leaves → only NEIGHBORING keys move
  → Adding Node_D between B and C: only keys B→D move (not all!)
  → Minimal data movement = fast scaling

VIRTUAL NODES (vnodes):
  → Each physical node maps to MULTIPLE positions on ring (e.g., 128 vnodes)
  → Prevents data skew (one node getting too many keys)
  → Used by: Cassandra, Dynamo, Riak

PYTHON: Consistent Hashing:
  import hashlib

  class ConsistentHashRing:
      def __init__(self, replicas=3, vnodes=128):
          self.ring = {}  # {position: node}
          self.replicas = replicas
          self.vnodes = vnodes

      def _hash(self, key):
          return int(hashlib.md5(key.encode()).hexdigest(), 16)

      def add_node(self, node):
          for i in range(self.vnodes):
              pos = self._hash(f"{node}:{i}")
              self.ring[pos] = node

      def get_node(self, key):
          pos = self._hash(key)
          # Find first node clockwise:
          sorted_positions = sorted(self.ring.keys())
          for p in sorted_positions:
              if p >= pos:
                  return self.ring[p]
          return self.ring[sorted_positions[0]]  # wrap around

      def get_nodes_for_replication(self, key):
          \"\"\"Get N nodes for replication.\"\"\"
          # Walk clockwise to find N unique nodes:
          ...
"""

print(consistent_hashing)</div>

  <div class="code-block"># ── STEP 3: Replication strategies ──
# How Dynamo/Cassandra replicate data across nodes.

replication = """
REPLICATION STRATEGIES:

1. PRIMARY-BACKUP (Leader-Follower):
   → One primary handles writes
   → Replicates to N-1 followers
   → If primary fails, promote a follower
   → Used by: MongoDB, PostgreSQL streaming replication

2. PEER-TO-PEER (Dynamo/Cassandra):
   → No primary, all nodes equal
   → Client writes to coordinator node
   → Coordinator replicates to next N-1 nodes on ring
   → Used by: Cassandra, Dynamo, Riak

3. QUORUM-BASED:
   → Write to W replicas, read from R replicas
   → If R + W > N → strong consistency
   → Typical: N=3, W=2, R=2 (QUORUM)

REPLICATION FACTOR (RF):
  RF=1: No replication (dangerous, data lost on node failure)
  RF=3: Three copies (standard, tolerates 2 failures)
  RF=5: Five copies (high durability, expensive)

CASSANDRA REPLICATION:
  → SimpleStrategy: next N nodes on ring (regardless of DC)
  → NetworkTopologyStrategy: N replicas per datacenter, rack-aware
  → Prevents losing all replicas if a rack fails

ANTI-ENTROPY (keeping replicas in sync):
  1. Read Repair: when reading, if some replicas are stale, update them
  2. Hinted Handoff: if node down, store "hint" for later delivery
  3. Anti-Entropy Repair: periodic full sync using Merkle trees
  4. Merkle Trees: hash tree for fast comparison (find differences quickly)
"""

print(replication)</div>

  <div class="code-block"># ── STEP 4: Read repair and hinted handoff ──
# How AP systems converge to consistency (eventual consistency).

convergence = """
EVENTUAL CONSISTENCY MECHANISMS:

1. READ REPAIR:
   When reading, coordinator contacts multiple replicas.
   If some have stale data:
   → Coordinator reads from all replicas
   → Detects stale ones (older vector clock)
   → Writes newest data back to stale replicas
   → "Self-healing" on every read

   Read flow:
   Read from 3 replicas → versions: [v5, v5, v3]
   → v3 is stale → write v5 to that replica
   → Next read: all v5 (converged!)

2. HINTED HANDOFF:
   When writing, if a replica is DOWN:
   → Coordinator stores a "hint" on another node
   → "Hey, when Node_B comes back, send this write to it"
   → When Node_B recovers, the hint is delivered
   → No lost writes!

3. ANTI-ENTROPY REPAIR (periodic):
   Run periodically (e.g., nightly):
   → Compare Merkle trees between replicas
   → Find divergent ranges
   → Stream only the different data
   → Ensures convergence even without reads/writes

4. GOSSIP PROTOCOL:
   Nodes periodically exchange state information:
   → "I have version 5 of key X"
   → "I have version 3" → updates to 5
   → Information spreads like a rumor (epidemic protocol)
   → Eventually ALL nodes converge

ALL FOUR mechanisms ensure EVENTUAL CONSISTENCY:
  Given no new writes, ALL replicas eventually converge.
  This is the "E" in Dynamo's AP choice.
"""

print(convergence)</div>

  <div class="code-block"># ── STEP 5: Dynamo vs Spanner — AP vs CP in practice ──
# Two real systems with opposite design choices.

comparison = {
    "Dynamo (Amazon, AP)": {
        "cap_choice": "Availability + Partition Tolerance",
        "consistency": "Eventual (stale reads possible)",
        "latency": "Low (always responds)",
        "coordination": "None (decentralized)",
        "conflict_resolution": "Vector clocks + last-write-wins",
        "use_case": "Shopping cart, session, recommendations",
        "public_product": "Amazon DynamoDB",
    },
    "Spanner (Google, CP)": {
        "cap_choice": "Consistency + Partition Tolerance",
        "consistency": "Strong (global ACID)",
        "latency": "Higher (cross-region coordination)",
        "coordination": "Paxos per shard + TrueTime",
        "conflict_resolution": "Two-Phase Commit + Paxos",
        "use_case": "Billing, AdWords, financial",
        "public_product": "Google Cloud Spanner",
    },
    "Cassandra (Facebook, AP)": {
        "cap_choice": "Availability + Partition Tolerance",
        "consistency": "Tunable (ONE to ALL)",
        "latency": "Low (tunable)",
        "coordination": "None (decentralized, Dynamo-style)",
        "conflict_resolution": "Last-write-wins + read-repair",
        "use_case": "Time-series, IoT, social media",
        "public_product": "Apache Cassandra (open source)",
    },
}

print("AP vs CP REAL SYSTEMS:")
for system, info in comparison.items():
    print(f"\\n  {system}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# DECISION GUIDE:
decision = """
WHEN TO USE AP (Dynamo/Cassandra):
  → Need 24/7 availability (no downtime acceptable)
  → Can tolerate stale reads temporarily
  → Global scale, multi-region
  → High write throughput
  → Examples: social media, IoT, session management

WHEN TO USE CP (Spanner/MongoDB):
  → Need strong consistency (banking, billing)
  → ACID transactions across shards
  → Can tolerate brief unavailability during partitions
  → Examples: financial, inventory, configuration
"""
print(decision)</div>

  <div class="code-block"># ── STEP 6: Consistent hashing and Dynamo best practices ──
# Production patterns for AP distributed databases.

best_practices = [
    "Choose RF=3 for production (tolerates 2 node failures)",
    "Use odd number of nodes (optimal quorum calculation)",
    "Spread replicas across racks/datacenters (rack awareness)",
    "Use NetworkTopologyStrategy for multi-DC (Cassandra)",
    "Monitor replication lag (how far behind are replicas?)",
    "Run anti-entropy repair periodically (nightly/weekly)",
    "Use read-repair for self-healing (automatic convergence)",
    "Set appropriate consistency level per query",
    "Use vector clocks to detect conflicts",
    "Implement conflict resolution strategy (LWW or app-level)",
    "Monitor node health (gossip protocol status)",
    "Handle node joins/leaves carefully (data rebalancing)",
    "Use vnodes (128 per physical node) for even distribution",
    "Test partition recovery (kill nodes, verify convergence)",
    "Document CAP choice for the team (AP or CP, why?)",
]

print("DYNAMO/AP SYSTEM BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ Consistent hash  │ Ring-based data distribution    │
# │ Virtual nodes    │ 128 per physical (even spread)  │
# │ Replication (RF) │ 3 copies (tolerates 2 failures) │
# │ Read repair      │ Self-healing during reads       │
# │ Hinted handoff   │ Store for down nodes, deliver   │
# │ Merkle trees     │ Fast anti-entropy comparison    │
# │ Gossip           │ Epidemic state propagation      │
# │ Eventual consist │ Converges given no new writes   │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৪ (City Builder's Codex) Door ৮-এ Consistent Hashing শিখেছিলে। Door ৩-এ CAP বেছেছিলে — Dynamo হলো AP-র বাস্তব উদাহরণ। Door ৪-এ Consensus — Dynamo-তে strict consensus নেই, eventual consistency আছে।</div></div>

  <div class="verse">
    <div class="verse-arabic">وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا</div>
    <div class="verse-translation">আর তোমরা সবাই মিলে আল্লাহর রজ্জুকে শক্ত ধরো এবং বিচ্ছিন্ন হয়ো না।</div>
    <div class="verse-ref">— কুরআন ৩:১০৩</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🔮</div>
    <div class="secret-text">সত্য ধীরে ছড়ায় — কিন্তু শেষ পর্যন্ত সব জায়গায় পৌঁছায়।</div>
    <div class="secret-sub">Truth spreads slowly — but eventually reaches everywhere.</div>
  </div>`,
  senior: {
    title: "AP বনাম CP প্রয়োগ অনুযায়ী বেছে নাও",
    body: `<p><strong>১. কখন AP (Dynamo):</strong> সোশ্যাল মিডিয়া, শপিং কার্ট, recommendation — উপলব্ধতা গুরুত্বপূর্ণ।</p>
    <p><strong>২. কখন CP (Spanner):</strong> ব্যাংকিং, টাকা লেনদেন — সঠিক ডেটা গুরুত্বপূর্ণ।</p>
    <p><strong>৩. Cassandra:</strong> Dynamo-এর উত্তরসূরি — Facebook তৈরি করেছে, এখন Apache প্রোজেক্ট। AP মডেল, consistent hashing, tunable consistency।</p>`
  }
});

doors.push({
  num: 8,
  icon: "🛡️",
  color: "#fbbf24",
  name: "বিশ্বাসঘাতকতার সময়",
  subtitle: "Time of Betrayal",
  tech: "Byzantine Fault Tolerance — Byzantine Generals (Lamport 1982), pBFT (Castro & Liskov 1999), Bitcoin (Nakamoto 2008)",
  spirit: "আমানত — বিশ্বাস, প্রতারণা সত্ত্বেও সত্য নির্ধারণ",
  secret: "যখন কেউ মিথ্যা বলতে পারে — তখনও সত্য পৌঁছানো যায়, যদি সৎ সংখ্যাগরিষ্ঠ থাকে।",
  recall: {
    q: "Byzantine Generals Problem কী? Bitcoin কীভাবে সমাধান করে?",
    qen: "What is the Byzantine Generals Problem? How does Bitcoin solve it?",
    a: "জেনারেলরা শহর অবরোধ করেছে — একসাথে আক্রমণ বা পিছিয়ে যেতে হবে। কিন্তু কিছু জেনারেল বিশ্বাসঘাতক — মিথ্যা বার্তা পাঠায়। Byzantine Fault Tolerance: 3f+1 জেনারেল থাকলে f বিশ্বাসঘাতক সহ্য করা যায়। Bitcoin proof-of-work দিয়ে — প্রতারক হতে কম্পিউটিং শক্তি লাগে।",
    aen: "Generals besiege a city — must attack or retreat together. But some generals are traitors — send false messages. Byzantine Fault Tolerance: with 3f+1 generals, f traitors can be tolerated. Bitcoin uses proof-of-work — being a traitor costs computing power."
  },
  story: `<p class="scene-setting">একটা প্রাচীন শহর অবরোধ করা হয়েছে। কয়েকজন বাইজেন্টাইন জেনারেল শহরের চারপাশে। তাদের একমত হতে হবে — একসাথে আক্রমণ করবে নাকি পিছিয়ে যাবে। কিন্তু তারা চিঠির মাধ্যমে যোগাযোগ করে — এবং কিছু জেনারেল বিশ্বাসঘাতক! তারা মিথ্যা বার্তা পাঠায় — কাউকে আক্রমণ বলে, কাউকে পিছিয়ে যেতে। যদি তারা একমত না হয় — পরাজয় নিশ্চিত। এটাই Byzantine Generals Problem — Lamport ১৯৮২ সালে আনুষ্ঠানিকভাবে বর্ণনা করেন।</p>

  <p class="scene-setting en">An ancient city is besieged. Several Byzantine generals surround it. They must agree — attack together or retreat together. But they communicate by messages — and some generals are traitors! They send false messages — telling some to attack, others to retreat. If they don't agree — defeat is certain. This is the Byzantine Generals Problem — Lamport formally described it in 1982.</p>

  <div class="dialogue">
    <p><strong>ল্যাম্পোর্ট:</strong> যদি ৩f+১ জেনারেল থাকে, তাহলে f বিশ্বাসঘাতক সহ্য করা যায়। ৪ জেনারেল, ১ বিশ্বাসঘাতক? চলবে। কিন্তু ৩ জেনারেল, ১ বিশ্বাসঘাতক? অসম্ভব। সৎদের সংখ্যাগরিষ্ঠ দরকার।</p>
    <p><strong>তুমি:</strong> কিন্তু এটা কম্পিউটারে কেমন?</p>
    <p><strong>ল্যাম্পোর্ট:</strong> নোড = জেনারেল। Crash = অসুস্থ জেনারেল। Byzantine fault = বিশ্বাসঘাতক — শুধু crash নয়, ইচ্ছাকৃতভাবে ভুল উত্তর দেয়। হ্যাকার, দুর্নীতিপরায়ণ নোড।</p>
    <p><strong>নাকামোতো (Bitcoin):</strong> আমার সমাধান আলাদা। প্রতারক হতে গেলে — কম্পিউটিং শক্তি লাগে। অনেক শক্তি। Proof-of-work — গণিতের সমস্যা সমাধান করতে হবে। সৎ নোডগুলো যদি বেশি শক্তি রাখে, প্রতারক জিততে পারবে না।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Lamport:</strong> If there are 3f+1 generals, then f traitors can be tolerated. 4 generals, 1 traitor? Works. But 3 generals, 1 traitor? Impossible. Honest majority is needed.</p>
    <p><strong>You:</strong> But how does this apply to computers?</p>
    <p><strong>Lamport:</strong> Node = general. Crash = sick general. Byzantine fault = traitor — not just crash, deliberately wrong answers. Hackers, corrupt nodes.</p>
    <p><strong>Nakamoto (Bitcoin):</strong> My solution is different. To be a traitor — you need computing power. A lot. Proof-of-work — solve a math problem. If honest nodes have more power, the traitor can't win.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> Byzantine Generals Problem — Lamport, L., Shostak, R., Pease, M. (১৯৮২), <em>"The Byzantine Generals Problem"</em>, ACM TOPLAS (Transactions on Programming Languages and Systems), খণ্ড ৪, সংখ্যা ৩, পৃষ্ঠা ৩৮২-৪০১। <strong>গুরুত্বপূর্ণ: ভেন্যু TOPLAS, TOCS নয়।</strong> Practical BFT (pBFT) — Castro, M. এবং Liskov, B. (১৯৯৯), OSDI '৯৯, পৃষ্ঠা ১৭৩-১৮৬। Bitcoin — Nakamoto, S. (৩১ অক্টোবর ২০০৮), <em>"Bitcoin: A Peer-to-Peer Electronic Cash System"</em> — ক্রিপ্টোগ্রাফি মেইলিং লিস্টে পোস্ট করা ৯-পৃষ্ঠার PDF। Genesis block খনন: ৩ জানুয়ারি ২০০৯।</div></div>

  <div class="diagram">
    <div class="diag-title">Byzantine Generals — বিশ্বাসঘাতক সহ্য করা</div>
    <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrOrange8" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f97316"/>
        </marker>
        <marker id="arrRed8" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444"/>
        </marker>
      </defs>

      <text x="280" y="18" text-anchor="middle" font-family="Cinzel,serif" font-size="10" font-weight="700" fill="#fbbf24" letter-spacing="2">BYZANTINE FAULT TOLERANCE</text>

      <!-- Commander -->
      <rect x="235" y="35" width="90" height="28" rx="6" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="280" y="53" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">Commander</text>

      <!-- Honest generals -->
      <circle cx="120" cy="120" r="16" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="2"/>
      <text x="120" y="123" text-anchor="middle" font-size="8" font-weight="700" fill="#52c41a">G₁</text>
      <text x="120" y="146" text-anchor="middle" font-size="10" fill="#52c41a">সৎ ✓</text>

      <circle cx="440" cy="120" r="16" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="2"/>
      <text x="440" y="123" text-anchor="middle" font-size="8" font-weight="700" fill="#52c41a">G₂</text>
      <text x="440" y="146" text-anchor="middle" font-size="10" fill="#52c41a">সৎ ✓</text>

      <!-- Traitor general -->
      <circle cx="280" cy="150" r="16" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
      <text x="280" y="153" text-anchor="middle" font-size="8" font-weight="700" fill="#ef4444">G₃</text>
      <text x="280" y="176" text-anchor="middle" font-size="10" fill="#ef4444">বিশ্বাসঘাতক ✗</text>

      <!-- Messages from commander -->
      <path d="M 255 63 L 130 105" fill="none" stroke="#52c41a" stroke-width="1.5" marker-end="url(#arrOrange8)"/>
      <text x="175" y="78" text-anchor="middle" font-size="10" fill="#52c41a">"আক্রমণ"</text>

      <path d="M 280 63 L 280 134" fill="none" stroke="#ef4444" stroke-width="1" marker-end="url(#arrRed8)" stroke-dasharray="3,2"/>
      <text x="298" y="98" font-size="10" fill="#ef4444">"পিছাও"</text>

      <path d="M 305 63 L 430 105" fill="none" stroke="#52c41a" stroke-width="1.5" marker-end="url(#arrOrange8)"/>
      <text x="385" y="78" text-anchor="middle" font-size="10" fill="#52c41a">"আক্রমণ"</text>

      <!-- G₃ sends conflicting messages -->
      <path d="M 268 162 L 140 130" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arrRed8)"/>
      <path d="M 292 162 L 420 130" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arrRed8)"/>

      <!-- Bottom: formula -->
      <rect x="80" y="200" width="400" height="45" rx="8" fill="rgba(249,115,22,0.05)" stroke="#f97316" stroke-width="0.5"/>
      <text x="280" y="220" text-anchor="middle" font-size="11" font-weight="700" fill="#fbbf24">নিয়ম: N ≥ 3f + 1</text>
      <text x="280" y="236" text-anchor="middle" font-size="9" fill="#9290a8">N = মোট নোড, f = বিশ্বাসঘাতক। f=১ হলে N≥৪ দরকার</text>
    </svg>
    <div class="diag-cap">Byzantine Generals: সৎ সংখ্যাগরিষ্ঠ দরকার (3f+1)। Bitcoin: proof-of-work দিয়ে প্রতারক হতে ব্যয়বহুল করে তোলে — শক্তি ছাড়া সম্ভব নয়।</div>
  </div>

  <div class="code-block"># ── STEP 1: Byzantine Generals Problem ──
# When nodes can LIE — not just crash.

byzantine = """
BYZANTINE GENERALS PROBLEM (Lamport, Shostak, Pease, 1982):

SCENARIO:
  N generals besiege a city. Must agree: ATTACK or RETREAT.
  They communicate by messengers.
  But some generals are TRAITORS — they send different messages to different people.

CAN THE LOYAL GENERALS REACH AGREEMENT?

LAMPORT'S THEOREM:
  With 3f+1 generals, f traitors can be tolerated.
  → 4 generals, 1 traitor: SOLVABLE
  → 3 generals, 1 traitor: IMPOSSIBLE

  In general: need > 2/3 honest nodes (≥ 67% honest)

WHY 3f+1?
  → f nodes might be Byzantine (traitors)
  → f nodes might be slow/unresponsive
  → Need f+1 honest, responsive nodes to outvote traitors
  → Total: f (traitor) + f (slow) + f+1 (honest) = 3f+1

REAL-WORLD EXAMPLE:
  4 servers: A, B, C, D
  D is compromised (Byzantine).
  A says: "Value = 5"
  B says: "Value = 5"
  C says: "Value = 5"
  D says to A: "Value = 7", to B: "Value = 9", to C: "Value = 3" (lying!)

  Majority (A, B, C) agree: 5. D's lies are outvoted.
"""

print(byzantine)</div>

  <div class="code-block"># ── STEP 2: Practical BFT (pBFT) ──
# Castro & Liskov, 1999. Made BFT practical.

pbft = """
PRACTICAL BFT (pBFT, 1999):

pBFT works in 3 phases (all-to-all communication):

1. PRE-PREPARE:
   Primary (leader) sends proposal to all replicas
   "I propose value = X"

2. PREPARE:
   Each replica broadcasts to all others:
   "I received proposal X from primary"
   → Wait until 2f+1 prepare messages

3. COMMIT:
   Each replica broadcasts:
   "I'm ready to commit X"
   → Wait until 2f+1 commit messages
   → Execute and reply to client

PROPERTIES:
  → Tolerates f Byzantine nodes with 3f+1 total
  → Safety: no two correct nodes disagree
  → Liveness: eventually progresses (with timely messages)
  → Primary can be replaced if Byzantine (view change)

pBFT vs RAFT/PAXOS:
  Raft/Paxos: tolerate f crash failures with 2f+1 nodes
  pBFT: tolerate f Byzantine failures with 3f+1 nodes
  → pBFT needs MORE nodes (33% more) and MORE messages (O(n^2))

USAGE:
  → Hyperledger Fabric (enterprise blockchain)
  → Tendermint (Cosmos blockchain)
  → Some permissioned blockchain systems

LIMITATION:
  → O(n^2) message complexity
  → Doesn't scale to thousands of nodes (only dozens)
  → Bitcoin (Nakamoto consensus) solved this for thousands of nodes
"""

print(pbft)</div>

  <div class="code-block"># ── STEP 3: Bitcoin — Nakamoto consensus ──
# Satoshi's breakthrough: BFT for thousands of anonymous nodes.

bitcoin = """
BITCOIN (Nakamoto, 2008):

PROBLEM: pBFT doesn't scale beyond ~100 nodes.
  Bitcoin needs thousands of ANONYMOUS nodes (no identity verification).
  Traditional BFT assumes you KNOW who the nodes are.

NAKAMOTO'S SOLUTION: PROOF-OF-WORK (PoW)

  Instead of "majority of nodes", use "majority of COMPUTING POWER"

  1. To add a block: solve a cryptographic puzzle (hashing)
  2. Solving takes enormous computing power (electricity cost)
  3. First solver adds block + gets reward (mining)
  4. Longest chain wins (the chain with most work)

WHY THIS IS BYZANTINE-RESISTANT:
  → To lie (rewrite history), attacker needs MORE computing power
    than all honest miners combined (51% attack)
  → Lying is EXPENSIVE (wasted electricity, no reward)
  → Telling the truth is PROFITABLE (mining reward)
  → Economic incentive aligns with honesty

KEY DIFFERENCE FROM pBFT:
  pBFT: deterministic finality (once committed, never changes)
  Bitcoin: probabilistic finality (after 6 confirmations, ~immutable)

BITCOIN CONSENSUS:
  → Block time: ~10 minutes
  → Confirmation: 6 blocks (~1 hour) for high confidence
  → Throughput: ~7 transactions/second (low!)
  → Energy: enormous (comparable to a small country)

GENESIS BLOCK (Jan 3, 2009):
  "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
  → Embedded in the first Bitcoin block (timestamp proof)
"""

print(bitcoin)</div>

  <div class="code-block"># ── STEP 4: Proof-of-Stake (Ethereum's solution) ──
# Ethereum moved from PoW to PoS in 2022 (99.95% less energy).

pos = """
PROOF-OF-STAKE (PoS):

PROBLEM WITH PoW: Energy consumption is enormous.
  Bitcoin uses as much electricity as Argentina.
  Not sustainable for global scale.

PoS SOLUTION: Instead of computing power, use FINANCIAL STAKE.

  1. Validators lock up (stake) cryptocurrency as collateral
  2. Validator is randomly selected to propose a block
  3. Other validators attest to its validity
  4. If validator lies → loses their stake (SLASHING)

ECONOMICS:
  Honest: earn staking rewards (~5% annual)
  Dishonest: stake is SLASHED (lose money)
  → Incentive aligns with honesty (like PoW, but no energy waste)

ETHEREUM PoS (The Merge, September 2022):
  → Switched from PoW to PoS
  → Energy consumption: -99.95%
  → 32 ETH minimum stake to be a validator
  → Slashing for dishonest behavior

OTHER CONSENSUS MECHANISMS:
  Proof-of-Authority (PoA): trusted validators (enterprise blockchain)
  Delegated PoS (DPoS): vote for delegates (EOS, Tron)
  Proof-of-History (PoH): Solana's timestamping optimization

COMPARISON:
                    PoW (Bitcoin)    PoS (Ethereum)
  Energy:           Enormous         Minimal
  Security:         Computing power   Financial stake
  Scalability:      Low (~7 TPS)     Higher (~15-100 TPS)
  Decentralization: High (anyone)    Medium (32 ETH minimum)
  Finality:         Probabilistic     Eventually deterministic
"""

print(pos)</div>

  <div class="code-block"># ── STEP 5: CFT vs BFT — crash vs Byzantine ──
# When do you need which?

cft_vs_bft = {
    "CFT (Crash Fault Tolerance)": {
        "assumption": "Nodes only FAIL (crash), never lie",
        "min_nodes": "2f+1 to tolerate f failures",
        "algorithms": "Paxos, Raft, ZAB",
        "message_complexity": "O(n) — efficient",
        "scalability": "Thousands of nodes",
        "use_case": "Data centers, Kubernetes, cloud (trusted environment)",
        "examples": "etcd, ZooKeeper, Consul, CockroachDB",
    },
    "BFT (Byzantine Fault Tolerance)": {
        "assumption": "Nodes can LIE or act maliciously",
        "min_nodes": "3f+1 to tolerate f Byzantine faults",
        "algorithms": "pBFT, Nakamoto consensus (PoW), PoS",
        "message_complexity": "O(n^2) for pBFT, O(n) for PoW/PoS",
        "scalability": "pBFT: ~100 nodes; PoW/PoS: thousands",
        "use_case": "Blockchain, untrusted environments",
        "examples": "Bitcoin, Ethereum, Hyperledger Fabric",
    },
}

print("CFT vs BFT:")
for ft_type, info in cft_vs_bft.items():
    print(f"\\n  {ft_type}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# DECISION GUIDE:
decision = """
WHEN YOU NEED CFT (Raft/Paxos):
  → You control all nodes (data center, cloud)
  → Nodes can fail but won't lie
  → Need high performance and scalability
  → 99% of enterprise distributed systems

WHEN YOU NEED BFT:
  → Nodes are anonymous or untrusted
  → Participants might be malicious
  → Blockchain / cryptocurrency
  → Multi-organization system with no central authority
  → Financial systems where fraud is possible

MOST ENTERPRISE SYSTEMS → CFT (Raft)
BLOCKCHAIN / CRYPTO → BFT (PoW / PoS)
"""
print(decision)</div>

  <div class="code-block"># ── STEP 6: BFT in practice and best practices ──
# Production considerations for Byzantine systems.

best_practices = [
    "Use CFT (Raft) for trusted enterprise systems (default)",
    "Use BFT only when nodes are untrusted or anonymous",
    "pBFT: good for permissioned blockchain (Hyperledger)",
    "PoW: proven for public blockchain (Bitcoin), but high energy",
    "PoS: modern choice for public blockchain (Ethereum)",
    "Minimum nodes: 3f+1 for BFT, 2f+1 for CFT",
    "Monitor for Byzantine behavior (unexpected responses)",
    "Implement slashing/f penalties for dishonest nodes",
    "Use cryptographic signatures to authenticate messages",
    "Test with faulty/malicious nodes (chaos engineering)",
    "Consider economic incentives (PoW reward, PoS slashing)",
    "Document threat model (what attacks are you defending against?)",
    "Use threshold signatures for collective signing",
    "Regularly rotate keys (prevent long-term compromise)",
    "Audit consensus implementation (bugs → catastrophic)",
]

print("BFT BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Algorithm        │ Fault Type                      │
# ├──────────────────┼──────────────────────────────────┤
# │ Paxos/Raft       │ Crash faults (CFT)              │
# │ pBFT             │ Byzantine faults (BFT)          │
# │ Bitcoin (PoW)    │ Byzantine (public, anonymous)   │
# │ Ethereum (PoS)   │ Byzantine (stake-based)         │
# │ 3f+1 nodes       │ BFT minimum (tolerate f)        │
# │ 2f+1 nodes       │ CFT minimum (tolerate f)        │
# │ CFT              │ Enterprise (trusted)            │
# │ BFT              │ Blockchain (untrusted)          │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৪ (City Design) Door ৭-এ Consensus (Paxos/Raft) শিখেছিলে — সেগুলো crash fault tolerant (CFT), Byzantine fault tolerant (BFT) নয়। এই দরজায় আরও শক্ত সমস্যা — নোড crash না করে ইচ্ছাকৃতভাবে মিথ্যা বলে।</div></div>

  <div class="verse">
    <div class="verse-arabic">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَأٍ فَتَبَيَّنُوا</div>
    <div class="verse-translation">হে বিশ্বাসীরা! যদি কোনো পাপাচারী তোমাদের কাছে সংবাদ আনে, তবে তা যাচাই করে দেখো।</div>
    <div class="verse-ref">— কুরআন ৪৯:৬</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🛡️</div>
    <div class="secret-text">যখন কেউ মিথ্যা বলতে পারে — সৎ সংখ্যাগরিষ্ঠই সত্য নিশ্চিত করে।</div>
    <div class="secret-sub">When anyone can lie — honest majority secures truth.</div>
  </div>`,
  senior: {
    title: "BFT বনাম CFT — হুমকির ধরন অনুযায়ী",
    body: `<p><strong>১. CFT (Crash Fault Tolerance):</strong> নোড বন্ধ হয়ে যায় কিন্তু মিথ্যা বলে না। Paxos/Raft এই ধরন সহ্য করে। ডেটা সেন্টারে যথেষ্ট।</p>
    <p><strong>২. BFT (Byzantine Fault Tolerance):</strong> নোড ইচ্ছাকৃতভাবে মিথ্যা বলে। ব্লকচেইন, ক্রিপ্টোকারেন্সি — অজানা অংশগ্রহণকারীদের সিস্টেম।</p>
    <p><strong>৩. Proof-of-Stake:</strong> Ethereum ২০২২ সালে PoW থেকে PoS-এ চলে যায় — শক্তি খরচ ৯৯.৯৫% কম। প্রতারক তার জামানত (stake) হারায়।</p>`
  }
});

doors.push({
  num: 9,
  icon: "📖",
  color: "#f97316",
  name: "ডেটার গভীর চিন্তা",
  subtitle: "Thinking Deeply About Data",
  tech: "Modern Data Architecture — Event Sourcing, CQRS, Stream Processing (Kleppmann, 2017)",
  spirit: "হিকমাহ — প্রয়োগকৃত জ্ঞান, গভীর বোঝা",
  secret: "ডেটাবেস শুধু সংরক্ষণ নয় — এটা একটা সিদ্ধান্তের ইতিহাস। প্রতিটা ইভেন্ট একটা সত্য।",
  recall: {
    q: "Kleppmann-এর বই কেন গুরুত্বপূর্ণ? Event sourcing কী?",
    qen: "Why is Kleppmann's book important? What is event sourcing?",
    a: "Designing Data-Intensive Applications (২০১৭) বিতরণ সিস্টেমের বাইবেল। Event sourcing: বর্তমান অবস্থা নয়, সব পরিবর্তনের ইতিহাস সংরক্ষণ। পুরোনো ইভেন্ট থেকে বর্তমান তৈরি করা যায় — অডিট, রিপ্লে, ডিবাগ সব সম্ভব।",
    aen: "Designing Data-Intensive Applications (2017) is the bible of distributed systems. Event sourcing: store history of all changes, not just current state. Current state can be rebuilt from events — audit, replay, debug all possible."
  },
  story: `<p class="scene-setting">কেমব্রিজ, ইংল্যান্ড, ২০১৭। কেমব্রিজ বিশ্ববিদ্যালয়ের একজন গবেষক একটা বই লিখলেন যা বিতরণ সিস্টেমের জগতে বাইবেল হয়ে গেল। নাম — <em>Designing Data-Intensive Applications</em>। O'Reilly থেকে প্রকাশিত। তাঁর নাম — মার্টিন ক্লেপম্যান (Martin Kleppmann)। তিনি দেখালেন — ডেটাবেস, মেসেজ কিউ, ক্যাশ — সব আসলে একই জিনিসের ভিন্ন রূপ।</p>

  <p class="scene-setting en">Cambridge, England, 2017. A researcher at the University of Cambridge wrote a book that became the bible of distributed systems. Title — Designing Data-Intensive Applications. Published by O'Reilly. His name — Martin Kleppmann. He showed — databases, message queues, caches — are all variations of the same thing.</p>

  <div class="dialogue">
    <p><strong>ক্লেপম্যান:</strong> তুমি ভাবো ডেটাবেস, ক্যাশ, মেসেজ কিউ — আলাদা জিনিস। কিন্তু আমি দেখাই — সব একই। একটা write-ahead log হলো ডেটাবেস। একটা materialized view হলো ক্যাশ। একটা stream হলো message queue। অন্তর্নিহিত সত্য একটাই — ইভেন্টের ক্রম।</p>
    <p><strong>তুমি:</strong> এটা বোঝালে কী হবে?</p>
    <p><strong>ক্লেপম্যান:</strong> যখন তুমি ডেটাবেস ও ক্যাশকে একই জিনিস মনে করো — তখন তুমি event sourcing ব্যবহার করো। শুধু বর্তমান অবস্থা নয় — সব পরিবর্তনের ইতিহাস রাখো। যেকোনো সময় অতীতে ফিরে যেতে পারো, রিপ্লে করতে পারো, ডিবাগ করতে পারো।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Kleppmann:</strong> You think databases, caches, message queues — are different things. But I show — they're all one. A write-ahead log is a database. A materialized view is a cache. A stream is a message queue. The underlying truth is one — an ordered sequence of events.</p>
    <p><strong>You:</strong> What's the benefit of understanding this?</p>
    <p><strong>Kleppmann:</strong> When you see databases and caches as the same thing — you use event sourcing. Not just current state — store the full history of changes. Go back to any point in time, replay, debug.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> মার্টিন ক্লেপম্যান — কেমব্রিজ বিশ্ববিদ্যালয়ের কম্পিউটার সায়েন্স অ্যাসোসিয়েট প্রফেসর। <em>Designing Data-Intensive Applications</em> (মার্চ ২০১৭, O'Reilly Media)। গবেষণা: local-first collaboration software (CRDT), distributed systems security। বিখ্যাত টক: <em>"Turning the Database Inside-Out"</em> (মার্চ ২০১৫)। <strong>নোট:</strong> ক্লেপম্যানের কোনো ইংরেজি উইকিপিডিয়া পেজ নেই — তাঁর হোমপেজ martin.kleppmann.com থেকে তথ্য যাচাই করা হয়েছে।</p></div>

  <div class="code-block"># ── STEP 1: Turn the database inside-out (Kleppmann) ──
# Martin Kleppmann's unified philosophy of distributed systems.

philosophy = """
TURN THE DATABASE INSIDE-OUT (Kleppmann):

INSIGHT: Distributed systems and databases share the SAME concepts.

DATABASE CONCEPT → DISTRIBUTED SYSTEM EQUIVALENT:
  Write-Ahead Log (WAL) → Event log / Kafka topic
  Materialized View    → Cache / read replica
  Index                → Elasticsearch / search engine
  Trigger              → Stream processor (Flink/Spark)
  Transaction          → Exactly-once processing
  Replication          → Multi-region deployment
  Snapshot isolation   → MVCC in distributed stores

THE UNIFYING IDEA:
  Everything is an EVENT LOG.
  → Database: WAL (append-only log of changes)
  → Kafka: distributed event log
  → Git: commit log (events = commits)
  → Blockchain: transaction log (blocks)

"Internally, a database is a distributed system.
A distributed system is a database turned inside-out."
  — Martin Kleppmann, "Designing Data-Intensive Applications"
"""

print(philosophy)</div>

  <div class="code-block"># ── STEP 2: Event sourcing ──
# Store events, not current state. Reconstruct state from events.

event_sourcing = """
EVENT SOURCING:

TRADITIONAL (state-based):
  Account balance = $500
  → Overwrite old value with new value
  → History lost

EVENT SOURCING (event-based):
  Events: [Deposited $1000, Withdrew $200, Withdrew $300]
  Current state: $1000 - $200 - $300 = $500
  → Replay events to get current state
  → Complete audit trail (never lose history)
  → Can replay from any point in time (time travel!)

BENEFITS:
  → Full audit trail (every change recorded)
  → Time travel (reconstruct state at any past time)
  → Debugging (see exactly what happened and when)
  → New views (build new read models from historical events)
  → Eventual consistency (events propagate naturally)

DRAWBACKS:
  → Complexity (managing event log)
  → Storage (events accumulate forever)
  → Need snapshots (don't replay 10 years of events)
  → Eventual consistency (not immediate)

PYTHON: Event sourcing in Django:
  class Event(models.Model):
      aggregate_id = models.UUIDField()  # e.g., account_id
      event_type = models.CharField(max_length=100)  # 'deposit', 'withdrawal'
      data = models.JSONField()
      timestamp = models.DateTimeField(auto_now_add=True)

  class Account:
      def __init__(self, account_id):
          self.account_id = account_id
          self.balance = 0
          self.apply_events()

      def apply_events(self):
          events = Event.objects.filter(aggregate_id=self.account_id).order_by('timestamp')
          for event in events:
              if event.event_type == 'deposit':
                  self.balance += event.data['amount']
              elif event.event_type == 'withdrawal':
                  self.balance -= event.data['amount']

      def deposit(self, amount):
          Event.objects.create(
              aggregate_id=self.account_id,
              event_type='deposit',
              data={'amount': amount}
          )
          self.balance += amount
"""

print(event_sourcing)</div>

  <div class="code-block"># ── STEP 3: CQRS (Command Query Responsibility Segregation) ──
# Separate write model from read model.

cqrS = """
CQRS:

TRADITIONAL (CRUD):
  Same model for reads and writes (database table)

CQRS:
  Write model (Command): append-only event log
  Read model (Query): optimized materialized views

WHY?
  Reads and writes have DIFFERENT optimization needs:
  → Writes: need consistency, validation, business rules
  → Reads: need speed, denormalization, multiple views

EXAMPLE:
  Write: Event log (append deposit/withdrawal events)
  Read 1: Current balance (materialized view, fast lookup)
  Read 2: Transaction history (sorted by date)
  Read 3: Monthly summary (aggregated view)

  Each read model is optimized for its query pattern.
  All derived from the SAME event log.

CQRS + EVENT SOURCING = powerful combination:
  → Events are the single source of truth
  → Multiple read models (cache, search, analytics)
  → If a read model breaks → rebuild from events
  → Scale reads and writes independently
"""

print(cqrs)

# WHEN TO USE CQRS:
when_cqrs = """
WHEN TO USE CQRS:
  → Read-heavy systems with complex query patterns
  → Need different views of the same data
  → Read and write scale differently
  → Need audit trail (with event sourcing)

WHEN NOT TO USE CQRS:
  → Simple CRUD apps (adds unnecessary complexity)
  → Small teams (harder to maintain)
  → When eventual consistency isn't acceptable for reads

WARNING: CQRS adds complexity.
Only use when the BENEFITS outweigh the COMPLEXITY.
For simple CRUD: just use a regular database.
"""
print(when_cqrs)</div>

  <div class="code-block"># ── STEP 4: CRDTs (Conflict-free Replicated Data Types) ──
# Data structures that merge WITHOUT conflicts.

crdts = """
CRDTs (Conflict-free Replicated Data Types):

PROBLEM: Multiple users edit simultaneously (offline).
  → User A: "Hello World"
  → User B: "Hello CRDT"
  → Merge: How? Conflict!

TRADITIONAL: conflict resolution (last-write-wins, manual merge)
CRDT: mathematical guarantee — ALWAYS mergeable, no conflicts.

HOW CRDTs WORK:
  Each operation is COMMUTATIVE and ASSOCIATIVE.
  → Order doesn't matter
  → A op B = B op A (commutative)
  → (A op B) op C = A op (B op C) (associative)

  → No matter what order operations arrive, result is the SAME.

CRDT TYPES:
  G-Counter (Grow-only counter): each node increments own counter
  PN-Counter: G-Counter + decrement (two G-Counters)
  LWW-Register: Last-write-wins with timestamp
  OR-Set: Add/remove set (add wins on conflict)
  RGA (Replicated Growable Array): collaborative text editing
  LWW-Map: key-value store with last-write-wins per key

REAL-WORLD CRDTs:
  → Yjs (collaborative editing library)
  → Automerge (JSON CRDT)
  → Redis CRDT (active-active geo-replication)
  → Figma (uses CRDT for real-time collaboration)
  → Apple Notes (offline sync with CRDT)
"""

print(crdts)</div>

  <div class="code-block"># ── STEP 5: Gossip protocol ──
# Epidemic information spreading in distributed systems.

gossip = """
GOSSIP PROTOCOL (epidemic protocol):

HOW IT WORKS:
  Every T seconds, each node:
  1. Pick a RANDOM peer
  2. Exchange state information
  3. Update own state with new info

  Like a RUMOR spreading through a crowd:
  → Person tells random person → tells another → spreads exponentially
  → After O(log N) rounds, EVERYONE knows

PROPERTIES:
  → Eventually consistent (all nodes converge)
  → Fault tolerant (node failure doesn't stop gossip)
  → Scalable (O(log N) time to spread, O(1) per round)
  → No central coordinator (fully decentralized)

USED BY:
  → Cassandra: cluster membership, metadata
  → Consul: service discovery, health checking
  → Bitcoin: transaction and block propagation
  → Riak: ring state, bucket properties

GOSSIP vs CONSENSUS:
  Gossip: eventual consistency (no guarantee on timing)
  Consensus: strong consistency (Raft/Paxos)

  Gossip is for: metadata, membership, low-priority state
  Consensus is for: data writes, leader election, critical state

PYTHON: Simple gossip:
  import random

  class GossipNode:
      def __init__(self, node_id, peers):
          self.node_id = node_id
          self.peers = peers  # list of other nodes
          self.state = {}  # {key: value}

      def gossip_round(self):
          # Pick random peer:
          peer = random.choice(self.peers)
          # Exchange state:
          for key, value in peer.state.items():
              if key not in self.state or self.state[key] < value:
                  self.state[key] = value
          # Peer gets our state too:
          for key, value in self.state.items():
              if key not in peer.state or peer.state[key] < value:
                  peer.state[key] = value

  # After O(log N) rounds, all nodes have the same state.
"""

print(gossip)</div>

  <div class="code-block"># ── STEP 6: The complete distributed systems landscape ──
# Everything you've learned, unified.

landscape = """
THE DISTRIBUTED SYSTEMS LANDSCAPE:

FOUNDATION:
  → Lamport clocks (ordering events)
  → Happens-before (causality)
  → Vector clocks (concurrency detection)

COORDINATION:
  → Mutex/Semaphore (mutual exclusion)
  → Consensus (Paxos/Raft) — agree on one value
  → Leader election (who's in charge?)

TRADE-OFFS:
  → CAP theorem (C vs A during partition)
  → PACELC (Latency vs C normally)
  → Consistency models (strong, eventual, causal)

DATA DISTRIBUTION:
  → Consistent hashing (ring-based)
  → Replication (primary-backup, P2P)
  → Partitioning/sharding (horizontal split)

FAULT TOLERANCE:
  → Crash Fault Tolerance (Raft/Paxos, 2f+1)
  → Byzantine Fault Tolerance (pBFT, PoW, PoS, 3f+1)
  → Anti-entropy (read repair, hinted handoff, Merkle trees)

DATA PROCESSING:
  → MapReduce (batch processing)
  → Spark (in-memory, 10-100x faster)
  → Streaming (Kafka, Flink)

TRANSACTIONS:
  → 2PC (blocking, strong consistency)
  → Saga (compensating, eventual consistency)
  → Outbox Pattern (reliable event publishing)

ADVANCED PATTERNS:
  → Event Sourcing (store events, not state)
  → CQRS (separate read/write models)
  → CRDTs (conflict-free merge)
  → Gossip (epidemic information spreading)

REAL-WORLD SYSTEMS:
  → etcd/ZooKeeper (coordination)
  → Cassandra/DynamoDB (AP databases)
  → MongoDB/Spanner (CP databases)
  → Kafka (event streaming)
  → Bitcoin/Ethereum (blockchain BFT)
  → Kubernetes (container orchestration)

BOOKS TO READ:
  → "Designing Data-Intensive Applications" (Kleppmann) — THE bible
  → "Distributed Systems" (Tanenbaum)
  → "Database Internals" (Petrov)
"""

print(landscape)

# FINAL SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ Event log        │ Single source of truth          │
# │ Event sourcing   │ Store events, derive state      │
# │ CQRS             │ Separate read/write models      │
# │ CRDTs            │ Merge without conflicts         │
# │ Gossip           │ Epidemic info spreading         │
# │ Kleppmann        │ DB = distributed system inside  │
# │ DDIA             │ The distributed systems bible   │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৪ (City Design) পুরো বই — Kleppmann-এর দর্শন হলো সেই বইয়ের তাত্ত্বিক ভিত্তি। Door ১৩ (Message Queues), Door ১৬ (Databases) — সব একই দর্শনের অংশ। Book ১৪ (LLMOps) — LLM সিস্টেমেও event sourcing প্রাসঙ্গিক।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">📜 Event Sourcing — ইতিহাস থেকে বর্তমান</text>
  <rect x="20" y="55" width="120" height="150" rx="8" fill="#1e3a5f" stroke="#f97316" stroke-width="2"/>
  <text x="80" y="80" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="700">Event Log</text>
  <text x="80" y="105" text-anchor="middle" fill="#7dd3fc" font-size="8">e1: অর্ডার তৈরি</text>
  <text x="80" y="125" text-anchor="middle" fill="#7dd3fc" font-size="8">e2: পেমেন্ট ✓</text>
  <text x="80" y="145" text-anchor="middle" fill="#7dd3fc" font-size="8">e3: শিপড ✓</text>
  <text x="80" y="165" text-anchor="middle" fill="#7dd3fc" font-size="8">e4: ডেলিভারড ✓</text>
  <text x="80" y="192" text-anchor="middle" fill="#a5f3fc" font-size="8" font-style="italic">অপরিবর্তনীয় সত্য</text>
  <path d="M 150 130 L 200 130" stroke="#f97316" stroke-width="2" marker-end="url(#arrES9)"/>
  <defs><marker id="arrES9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316"/></marker></defs>
  <text x="175" y="120" text-anchor="middle" fill="#fbbf24" font-size="8">replay</text>
  <rect x="210" y="85" width="140" height="90" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="280" y="110" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">বর্তমান অবস্থা</text>
  <text x="280" y="135" text-anchor="middle" fill="#a7f3d0" font-size="9">status: DELIVERED</text>
  <text x="280" y="155" text-anchor="middle" fill="#86efac" font-size="8">e1+e2+e3+e4</text>
  <path d="M 360 130 L 410 130" stroke="#22c55e" stroke-width="2" marker-end="url(#arrES9b)"/>
  <defs><marker id="arrES9b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22c55e"/></marker></defs>
  <rect x="420" y="55" width="140" height="150" rx="8" fill="#1e1b4b" stroke="#a78bfa" stroke-width="2"/>
  <text x="490" y="80" text-anchor="middle" fill="#c4b5fd" font-size="10" font-weight="700">কেন Event Sourcing?</text>
  <text x="490" y="105" text-anchor="middle" fill="#a5b4fc" font-size="8">✔ অডিট — কে কখন কী</text>
  <text x="490" y="125" text-anchor="middle" fill="#a5b4fc" font-size="8">✔ রিপ্লে — নতুন ভিউ তৈরি</text>
  <text x="490" y="145" text-anchor="middle" fill="#a5b4fc" font-size="8">✔ ডিবাগ — ভুল কোথায়</text>
  <text x="490" y="165" text-anchor="middle" fill="#a5b4fc" font-size="8">✔ টাইম ট্রাভেল</text>
  <text x="490" y="192" text-anchor="middle" fill="#818cf8" font-size="8" font-style="italic">CQRS: লেখা ≠ পড়া</text>
</svg>
</div>
<div class="svg-caption">চিত্র ৯ — Event Sourcing: ইভেন্টের ইতিহাস থেকে বর্তমান অবস্থা পুনর্নির্মাণ</div>

  <div class="verse">
    <div class="verse-arabic">وَقُل رَّبِّ زِدْنِي عِلْمًا</div>
    <div class="verse-translation">হে আমার রব, আমার জ্ঞান বৃদ্ধি করো।</div>
    <div class="verse-ref">— কুরআন ২০:১১৪</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">📖</div>
    <div class="secret-text">ডেটাবেস, ক্যাশ, কিউ — সব এক। অন্তর্নিহিত সত্য একটাই: ইভেন্টের ক্রম।</div>
    <div class="secret-sub">Database, cache, queue — all one. The underlying truth: ordered events.</div>
  </div>`,
  senior: {
    title: "DDIA পড়ো — এটা বিতরণ সিস্টেমের বাইবেল",
    body: `<p><strong>১. বই পড়ো:</strong> <em>Designing Data-Intensive Applications</em> — O'Reilly। ২য় সংস্করণ ২০২৬ (Chris Riccomani সহ)। প্রতিটা অধ্যায় একটা বিশাল বিষয় কভার করে।</p>
    <p><strong>২. Event sourcing বিবেচনা করো:</strong> যদি অডিট ট্রেইল দরকার হয় — event sourcing। কিন্তু জটিলতা বাড়ে। সব জায়গায় দরকার নয়।</p>
    <p><strong>৩. Local-first:</strong> Kleppmann-এর বর্তমান গবেষণা — local-first software। অফলাইনে কাজ করো, অনলাইনে সিঙ্ক করো। CRDT (Conflict-free Replicated Data Type) দিয়ে।</p>`
  }
});

doors.push({
  num: 10,
  icon: "🌐",
  color: "#fbbf24",
  name: "সেতুতে প্রত্যাবর্তন",
  subtitle: "Return to the Bridge",
  tech: "Synthesis — The Complete Distributed Architecture: One Request's Journey",
  spirit: "জামাত — সম্মিলিত শক্তি, একতায় অবিচলতা",
  secret: "একটা রিকোয়েস্ট হাজার মেশিন পার হয় — প্রতিটা স্তরে দশটি দরজার জ্ঞান কাজ করে।",
  recall: {
    q: "একটা রিকোয়েস্ট লোড ব্যালেন্সার থেকে ডেটাবেস পর্যন্ত — কোন স্তরে কোন দরজার জ্ঞান লাগে?",
    qen: "A request from load balancer to database — which door's knowledge applies at each layer?",
    a: "লোড ব্যালেন্সার (Door ৭ hashing) → সার্ভিস (Door ২ locking) → ক্যাশ (Door ৩ CAP) → ডেটাবেস (Door ৪ consensus) → রেপ্লিকা (Door ৫ transactions) → কিউ (Door ৬ MapReduce)। সব মিলে একটা সম্পূর্ণ বিতরণ সিস্টেম।",
    aen: "Load balancer (Door 7 hashing) → Service (Door 2 locking) → Cache (Door 3 CAP) → Database (Door 4 consensus) → Replica (Door 5 transactions) → Queue (Door 6 MapReduce). Together = complete distributed system."
  },
  story: `<p class="scene-setting">তুমি এখন দাঁড়িয়ে আছো সংযোগের সেতুর শীর্ষে। পেছনে নয়টি দরজা — নয়জন স্থপতি। তাঁরা সবাই ফিরে এসেছেন। ল্যাম্পোর্ট তাঁর ঘড়ি নিয়ে, ডাইকস্ট্রা তাঁর সিগন্যাল নিয়ে, ব্রুয়ার তাঁর ত্রিভুজ নিয়ে, ল্যাম্পোর্ট আবার — এবার Paxos নিয়ে, গ্রে তাঁর ট্রানজেকশন নিয়ে, ডিন তাঁর MapReduce নিয়ে, ভোগেলস তাঁর ডায়নামো নিয়ে, নাকামোতো তাঁর ব্লকচেইন নিয়ে, ক্লেপম্যান তাঁর বই নিয়ে।</p>

  <p class="scene-setting en">You now stand at the summit of the Bridge of Connections. Behind you: nine doors, nine architects. They have all returned. Lamport with his clocks, Dijkstra with his signals, Brewer with his triangle, Lamport again — this time with Paxos, Gray with his transactions, Dean with his MapReduce, Vogels with his Dynamo, Nakamoto with his blockchain, Kleppmann with his book.</p>

  <div class="dialogue">
    <p><strong>ল্যাম্পোর্ট (১):</strong> আমি শিখিয়েছিলাম — সময়ের হিসাব ছাড়া শৃঙ্খল নেই।</p>
    <p><strong>ডাইকস্ট্রা (২):</strong> আমি বলেছিলাম — এক সময় একজন, নাহলে ধ্বংস।</p>
    <p><strong>ব্রুয়ার (৩):</strong> আমি দেখিয়েছিলাম — তিনের মধ্যে দুটো, ত্যাগ ছাড়া মুক্তি নেই।</p>
    <p><strong>ল্যাম্পোর্ট (৪):</strong> আমি শিখিয়েছিলাম — সংখ্যাগরিষ্ঠ একমত, তবু চলে।</p>
    <p><strong>গ্রে (৫):</strong> আমি বলেছিলাম — সব না কিছু, অর্ধেক নয়।</p>
    <p><strong>ডিন (৬):</strong> আমি দেখিয়েছিলাম — ভাগ করে জয়, হাজার মেশিনে।</p>
    <p><strong>ভোগেলস (৭):</strong> আমি শিখিয়েছিলাম — সত্য ধীরে ছড়ায়, কিন্তু পৌঁছায়।</p>
    <p><strong>নাকামোতো (৮):</strong> আমি দেখিয়েছিলাম — বিশ্বাসঘাতক সত্ত্বেও সত্য।</p>
    <p><strong>ক্লেপম্যান (৯):</strong> আমি বলেছিলাম — সব এক, অন্তর্নিহিত ইভেন্টের ক্রম।</p>
    <p><strong>সবাই একসাথে:</strong> এখন তুমি জানো — কীভাবে একটা সিস্টেমকে হাজার মেশিনে ছড়িয়ে দিতে হয়। এটাই বিতরণ সিস্টেম।</p>
  </div>

  <div class="diagram">
    <div class="diag-title">একটা রিকোয়েস্টের যাত্রা — One Request Through the System</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrOrange10" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f97316"/>
        </marker>
      </defs>

      <text x="280" y="18" text-anchor="middle" font-family="Cinzel,serif" font-size="10" font-weight="700" fill="#fbbf24" letter-spacing="2">ONE REQUEST'S JOURNEY</text>

      <!-- User -->
      <circle cx="280" cy="45" r="18" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="2"/>
      <text x="280" y="49" text-anchor="middle" font-size="11">👤</text>
      <text x="280" y="77" text-anchor="middle" font-size="8" fill="#9290a8">ব্যবহারকারী</text>

      <!-- Arrow down -->
      <line x1="280" y1="82" x2="280" y2="95" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrOrange10)"/>

      <!-- Load Balancer -->
      <rect x="200" y="100" width="160" height="30" rx="6" fill="rgba(61,214,196,0.12)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="280" y="120" text-anchor="middle" font-size="9" font-weight="700" fill="#3dd6c4">Load Balancer</text>
      <text x="380" y="120" font-size="10" fill="#5e5c74">D৭: Hashing</text>

      <line x1="280" y1="135" x2="280" y2="145" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrOrange10)"/>

      <!-- Service (3 nodes) -->
      <circle cx="180" cy="165" r="12" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="1.5"/>
      <text x="180" y="168" text-anchor="middle" font-size="10" fill="#f97316">S₁</text>
      <circle cx="280" cy="165" r="12" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="1.5"/>
      <text x="280" y="168" text-anchor="middle" font-size="10" fill="#f97316">S₂</text>
      <circle cx="380" cy="165" r="12" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="1.5"/>
      <text x="380" y="168" text-anchor="middle" font-size="10" fill="#f97316">S₃</text>
      <text x="440" y="168" font-size="10" fill="#5e5c74">D২: Locking</text>

      <line x1="280" y1="180" x2="280" y2="190" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrOrange10)"/>

      <!-- Cache -->
      <rect x="200" y="195" width="160" height="26" rx="6" fill="rgba(179,127,235,0.12)" stroke="#b37feb" stroke-width="1.5"/>
      <text x="280" y="213" text-anchor="middle" font-size="9" font-weight="700" fill="#b37feb">Cache (Redis)</text>
      <text x="380" y="213" font-size="10" fill="#5e5c74">D৩: CAP-AP</text>

      <line x1="280" y1="225" x2="280" y2="235" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrOrange10)"/>

      <!-- Database (Raft cluster) -->
      <circle cx="200" cy="255" r="12" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="200" y="258" text-anchor="middle" font-size="10" fill="#52c41a">DB₁</text>
      <circle cx="280" cy="255" r="12" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="280" y="258" text-anchor="middle" font-size="10" fill="#52c41a">DB₂</text>
      <circle cx="360" cy="255" r="12" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="360" y="258" text-anchor="middle" font-size="10" fill="#52c41a">DB₃</text>
      <text x="440" y="258" font-size="10" fill="#5e5c74">D৪: Raft</text>

      <line x1="280" y1="270" x2="280" y2="280" stroke="#f97316" stroke-width="1.5" marker-end="url(#arrOrange10)"/>

      <!-- Message Queue -->
      <rect x="160" y="285" width="240" height="26" rx="6" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="1"/>
      <text x="280" y="303" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">Message Queue (Kafka)</text>
      <text x="420" y="303" font-size="10" fill="#5e5c74">D৫/৬</text>
    </svg>
    <div class="diag-cap">একটা রিকোয়েস্ট: ব্যবহারকারী → লোড ব্যালেন্সার (D৭) → সার্ভিস (D২) → ক্যাশ (D৩) → ডেটাবেস Raft (D৪) → কিউ (D৫/৬)। প্রতিটা স্তরে একটা দরজার জ্ঞান কাজ করে।</div>
  </div>

  <div class="code-block"># ── STEP 1: The architect's checklist ──
# Every distributed system decision, mapped to the right concept.

checklist = """
THE ARCHITECT'S CHECKLIST:

  DECISION          QUESTION              SOLUTION
  ─────────         ──────────────        ──────────
  Ordering          Which event first?    Door 1: Lamport Clocks
  Concurrency       Multiple writers?     Door 2: Mutex/Semaphore
  CAP choice        CP or AP?             Door 3: CAP Theorem
  Agreement         Nodes must agree?     Door 4: Paxos/Raft
  Atomicity         All or nothing?       Door 5: 2PC/Saga
  Big Data          Huge data?            Door 6: MapReduce/Spark
  Data placement    How to distribute?    Door 7: Consistent Hashing
  Trust             Nodes can lie?        Door 8: BFT/Blockchain
  Philosophy        Event vs state?       Door 9: Kleppmann/DDIA
  Complete          Put it all together?  Door 10: This checklist

USE THIS WHEN DESIGNING ANY DISTRIBUTED SYSTEM:
  1. Do I need ordering? → Lamport/vector clocks
  2. Shared state? → Mutex/semaphore/locks
  3. CAP choice? → CP (banking) or AP (social)
  4. Need consensus? → Raft (default), Paxos (Google)
  5. Cross-service transactions? → Saga pattern
  6. Petabyte data? → Spark (not MapReduce)
  7. How to shard? → Consistent hashing
  8. Untrusted nodes? → BFT (PoW/PoS)
  9. Audit trail? → Event sourcing
  10. Read DDIA → the bible of distributed systems
"""

print(checklist)</div>

  <div class="code-block"># ── STEP 2: 55-year timeline of distributed systems ──
# The pioneers and their breakthroughs.

timeline = """
55-YEAR JOURNEY (1965-2020):

1965: Dijkstra — Semaphore (mutual exclusion)
1978: Lamport — Logical clocks (event ordering)
1982: Lamport — Byzantine Generals (fault tolerance)
1987: Garcia-Molina & Salem — Saga (distributed transactions)
1997: Karger et al. — Consistent Hashing
1998: Lamport — Paxos (consensus)
1999: Castro & Liskov — pBFT (practical Byzantine)
2000: Brewer — CAP Theorem (conjecture)
2002: Gilbert & Lynch — CAP proved formally
2003: Google — GFS (distributed file system)
2004: Dean & Ghemawat — MapReduce (parallel processing)
2006: Google — Bigtable (distributed table)
2007: DeCandia et al. — Dynamo (AP key-value)
2008: Nakamoto — Bitcoin (blockchain consensus)
2009: Apache — Cassandra (Dynamo-inspired)
2012: Zaharia et al. — Spark (in-memory processing)
2013: Lamport — Turing Award
2014: Ongaro & Ousterhout — Raft (understandable consensus)
2014: Kubernetes — container orchestration (uses Raft via etcd)
2017: Kleppmann — DDIA (the bible)
2022: Ethereum — The Merge (PoW → PoS)

EACH PAPER BUILT ON THE PREVIOUS:
  1965 (semaphore) → 1978 (clocks) → 1998 (Paxos) → ...
  → Standing on the shoulders of giants.
"""

print(timeline)</div>

  <div class="code-block"># ── STEP 3: System design interview questions ──
# How to answer distributed systems interview questions.

interview = """
COMMON INTERVIEW QUESTIONS (with door references):

Q: "Design a URL shortener (like bit.ly)"
  → Consistent hashing for URL→short code mapping (Door 7)
  → AP system (availability > consistency for redirects) (Door 3)
  → Cache layer (Redis) for hot URLs
  → Eventual consistency OK (stale redirect is fine)

Q: "Design Twitter's timeline"
  → Fan-out on write vs fan-out on read (trade-off)
  → AP system (eventual consistency for tweets) (Door 3)
  → Redis for timeline cache
  → Kafka for tweet event streaming

Q: "Design a distributed counter (likes/views)"
  → CRDTs (G-Counter for conflict-free counting) (Door 9)
  → Eventually consistent (likes may lag) (Door 3)
  → Write to multiple replicas, read-repair for convergence (Door 7)

Q: "How would you design distributed training for a 70B model?"
  → Data parallelism (each GPU processes different batch)
  → Model parallelism (split model layers across GPUs)
  → AllReduce for gradient synchronization (Ring AllReduce)
  → Consistent hashing for data distribution (Door 7)
  → Checkpointing for fault tolerance (event sourcing, Door 9)

Q: "Design Instagram's photo storage"
  → Content-addressable storage (hash of image = filename)
  → S3/GCS for blob storage (distributed file system)
  → CDN for fast delivery (Door 7 of Computer Networks book)
  → AP system (availability > consistency) (Door 3)

Q: "How does Google Spanner achieve global ACID?"
  → Paxos per shard (Door 4)
  → TrueTime (GPS + atomic clocks, Door 1)
  → 2PC across shards (Door 5)
  → CP system (strong consistency, Door 3)
"""

print(interview)</div>

  <div class="code-block"># ── STEP 4: Your production architecture ──
# Putting it all together for your apps (LedgerPilot, Ipractus).

your_architecture = """
YOUR PRODUCTION ARCHITECTURE:

LedgerPilot (Django + MySQL + Vue):
  Single server: no distributed consensus needed yet
  But as you scale:
  → MySQL replication (primary-backup, Door 7)
  → Redis cache (AP, eventual consistency, Door 3)
  → Celery workers (async task processing, producer-consumer Door 2)
  → Docker containers (isolation, Door 9 of OS book)
  → Nginx load balancer (multiple Django workers, Door 4 of Networks book)

  WHEN TO ADD DISTRIBUTED SYSTEMS:
  → 2+ servers: need session sharing (Redis)
  → 100+ users: need load balancing (Nginx/HAProxy)
  → 10K+ users: need database sharding (Door 7)
  → 100K+ users: need multi-region (CAP choices, Door 3)
  → Microservices: need Saga pattern (Door 5)

Ipractus (Django + PostgreSQL + React + Expo + LiveKit):
  → LiveKit uses WebRTC for video (Door 8 of Networks book)
  → WebSockets for real-time (Door 8 of Networks book)
  → Multiple DO servers: need load balancing
  → Eventually: distributed state for call sessions

PYTHON: Distributed lock for Ipractus (prevent double-booking):
  import redis

  r = redis.Redis()

  def book_appointment(doctor_id, time_slot):
      lock_key = f"appointment:{doctor_id}:{time_slot}"
      lock = r.lock(lock_key, timeout=30)

      if lock.acquire(blocking=False):
          try:
              # Check if slot is available:
              if is_slot_available(doctor_id, time_slot):
                  create_appointment(doctor_id, time_slot)
                  return {"status": "booked"}
              else:
                  return {"status": "taken"}
          finally:
              lock.release()
      else:
          return {"status": "busy", "message": "Try again"}
"""

print(your_architecture)</div>

  <div class="code-block"># ── STEP 5: Distributed systems reading list ──
# Books, papers, and resources to go deeper.

reading_list = """
ESSENTIAL BOOKS:

1. "Designing Data-Intensive Applications" (Kleppmann, 2017)
   → THE bible of distributed systems
   → Covers: replication, partitioning, transactions, consistency
   → Read this FIRST. It's the single best resource.

2. "Distributed Systems" (Tanenbaum & Van Steen)
   → Academic textbook, comprehensive
   → Good for theory and algorithms

3. "Database Internals" (Petrov, 2019)
   → Deep dive into database storage and transaction systems
   → B-trees, LSM trees, WAL, MVCC

ESSENTIAL PAPERS:

1. "MapReduce: Simplified Data Processing" (Dean & Ghemawat, 2004)
2. "Dynamo: Amazon's Highly Available Key-value Store" (DeCandia et al., 2007)
3. "Bigtable: A Distributed Storage System" (Chang et al., 2006)
4. "The Google File System" (Ghemawat et al., 2003)
5. "Paxos Made Simple" (Lamport, 2001)
6. "In Search of an Understandable Consensus Algorithm" (Raft, 2014)
7. "The Byzantine Generals Problem" (Lamport et al., 1982)
8. "Bitcoin: A Peer-to-Peer Electronic Cash System" (Nakamoto, 2008)
9. "Spanner: Google's Globally-Distributed Database" (2012)
10. "Kafka: a Distributed Messaging System" (2011)

ONLINE COURSES:
  → MIT 6.824: Distributed Systems (free, with labs)
  → UC Berkeley CS162: Operating Systems and Networking

VIDEOS:
  → Martin Kleppmann: "Turning the Database Inside-Out" (2015)
  → Diego Ongaro: Raft talk (consensus made understandable)
  → Aphyr: Jepsen talks (distributed systems testing)
"""

print(reading_list)</div>

  <div class="code-block"># ── STEP 6: The 10 doors summary and journey ──
# Everything you've learned about distributed systems.

doors = {
    "Door 1": "Lamport Clocks — logical time, happens-before",
    "Door 2": "Race Conditions — semaphores, mutexes, deadlocks",
    "Door 3": "CAP Theorem — consistency vs availability trade-off",
    "Door 4": "Consensus — Paxos, Raft, leader election",
    "Door 5": "Distributed Transactions — 2PC, Saga, Outbox",
    "Door 6": "MapReduce/Spark — big data parallel processing",
    "Door 7": "Dynamo/Consistent Hashing — AP systems, replication",
    "Door 8": "Byzantine Faults — BFT, Bitcoin, blockchain",
    "Door 9": "Kleppmann/DDIA — event sourcing, CQRS, CRDTs",
    "Door 10": "Complete Architecture — the architect's checklist",
}

print("THE 10 DOORS OF DISTRIBUTED SYSTEMS:")
for door, topic in doors.items():
    print(f"  {door}: {topic}")

# YOUR JOURNEY:
journey = """
You started knowing distributed systems as "multiple servers."
You finish as a DISTRIBUTED SYSTEMS ARCHITECT who can:

WHAT YOU CAN NOW DO:
  ✅ Design systems that survive partial failures
  ✅ Choose between CP and AP based on business needs
  ✅ Implement consensus (Raft) for agreement
  ✅ Handle distributed transactions (Saga pattern)
  ✅ Process petabyte-scale data (Spark)
  ✅ Distribute data across nodes (consistent hashing)
  ✅ Understand blockchain consensus (PoW/PoS)
  ✅ Apply event sourcing and CQRS
  ✅ Debug distributed system failures
  ✅ Ace system design interviews

"Distributed systems are HARD.
But understanding the FUNDAMENTALS — clocks, consensus, CAP,
replication, consistency — gives you power to build ANYTHING.

Every great engineer understands distributed systems.
Now you do too."

Read DDIA. Build something amazing.
Welcome to Distributed Systems mastery.
"""

print(journey)

# CONGRATULATIONS!
# You've completed the Distributed Systems book.
# From Dijkstra's semaphore (1965) to Ethereum's PoS (2022) —
# 55 years of distributed systems wisdom, in 10 doors.

# These concepts power:
#   Google Search (GFS, MapReduce, Bigtable)
#   Amazon (Dynamo, DynamoDB)
#   Bitcoin (Nakamoto consensus)
#   Kubernetes (Raft via etcd)
#   Every modern web application

# The fundamentals DON'T change.
# Master them, and you can adapt to any new technology.

# FINAL SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ Lamport clock    │ Causal ordering (not wall time) │
# │ Mutex            │ One at a time (shared resource) │
# │ CAP              │ Choose 2 of 3 (P mandatory)     │
# │ Raft             │ Understandable consensus        │
# │ Saga             │ Compensating transactions       │
# │ Spark            │ In-memory big data (10-100x)    │
# │ Consistent hash  │ Ring-based data distribution    │
# │ BFT              │ Tolerate lying nodes (3f+1)     │
# │ Event sourcing   │ Store events, derive state      │
# │ DDIA             │ The distributed systems bible   │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স — পুরো লাইব্রেরির সংযোগ:</strong> এই বই হলো <strong>infrastructure layer</strong> — Book ৪ (System Design) এর গভীরে যাওয়া। Book ৪ single-machine design শেখায়, এই বই multi-machine design শেখায়। Book ৩৪ (Statistics) বলে কীভাবে প্রমাণ করবে সিস্টেম কাজ করে — এই বই বলে কীভাবে সিস্টেম বানাবে যা কাজ করবে। PhD interview: "How would you design distributed training for a 70B model?" — এখন উত্তর দিতে পারবে।</div></div>

  <div class="checklist">
    <li>ঘড়ির উপর নির্ভর করবে না — Lamport clock ব্যবহার করো</li>
    <li>শেয়ার্ড রিসোর্সে সবসময় mutex/lock দাও</li>
    <li>CAP পছন্দ সচেতনভাবে করো — CP না AP?</li>
    <li>Consensus দরকার হলে Raft ব্যবহার করো</li>
    <li>ডিস্ট্রিবিউটেড ট্রানজেকশনে Saga বিবেচনা করো</li>
    <li>বিশাল ডেটায় MapReduce/Spark ব্যবহার করো</li>
    <li>Consistent hashing দিয়ে ডেটা বণ্টন করো</li>
    <li>অজানা অংশগ্রহণকারী থাকলে BFT দরকার</li>
    <li>ইভেন্ট সোর্সিং বিবেচনা করো — শুধু state নয়</li>
    <li>DDIA পড়ো — এটা বাইবেল</li>
  </div>

  <div class="verse">
    <div class="verse-arabic">وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا</div>
    <div class="verse-translation">আর তোমরা সবাই মিলে আল্লাহর রজ্জুকে শক্ত ধরো এবং বিচ্ছিন্ন হয়ো না।</div>
    <div class="verse-ref">— কুরআন ৩:১০৩</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🌐</div>
    <div class="secret-text">এক মেশিন থামলে সিস্টেম চলে — কারণ বাকি হাজার মেশিন জীবিত।</div>
    <div class="secret-sub">One machine stops, the system runs — because a thousand others are alive.</div>
  </div>`,
  senior: {
    title: "তুমি এখন বিতরণ মাস্টার",
    body: `<p><strong>পরবর্তী পদক্ষেপ:</strong> একটা সিস্টেম ডিজাইন করো — একটা URL shortener বা চ্যাট অ্যাপ। প্রতিটা স্তরে দশটি দরজার সিদ্ধান্ত প্রয়োগ করো।</p>
    <p><strong>পড়ার তালিকা:</strong> ১. Kleppmann (২০১৭) DDIA. ২. Lamport (১৯৭৮) Time, Clocks. ৩. DeCandia et al. (২০০৭) Dynamo. ৪. Ongaro & Ousterhout (২০১৪) Raft।</p>
    <p><strong>প্র্যাকটিস:</strong> MIT 6.824 Distributed Systems (ফ্রি অনলাইন) — Go-তে Raft ইমপ্লিমেন্ট করো। Designing Data-Intensive Applications পড়ো।</p>`
  }
});
