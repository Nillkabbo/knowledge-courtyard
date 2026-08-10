doors.push({
  num: 6,
  icon: "🌐",
  color: "#2dd4bf",
  name: "বিকল্প জগত",
  subtitle: "The Alternative World",
  tech: "NoSQL — key-value (Redis), document (MongoDB), column-family (Cassandra), graph (Neo4j), CAP tradeoffs, BASE",
  spirit: "তাবাকা — বিভিন্ন স্তরে বিভিন্ন গঠন, এক আকার সবার জন্য নয়",
  secret: "NoSQL = relational নয়। প্রতিটি ধরনের ডেটার জন্য আলাদা গঠন। key-value, document, column, graph — বেছে নাও যা তোমার দরকার।",
  recall: {
    q: " NoSQL-এর ৪টি প্রধান ধরন কী কী?",
    qen: "What are the 4 main types of NoSQL databases?",
    a: "১. Key-value (Redis), ২. Document (MongoDB), ৩. Column-family (Cassandra), ৪. Graph (Neo4j)।",
    aen: "1. Key-value (Redis), 2. Document (MongoDB), 3. Column-family (Cassandra), 4. Graph (Neo4j)."
  },
  story: `<p class="scene-setting">তুমি একটি টুলবক্স খুললে। ভেতরে হাতুড়ি, স্ক্রুড্রাইভার, প্লায়ার, রেঞ্চ। প্রতিটি যন্ত্র একটি নির্দিষ্ট কাজের জন্য। একটি হাতুড়ি দিয়ে স্ক্রু টাইট করা যায় না। ডাটাবেসও তেমন — relational (SQL) একটি শক্তিশালী হাতুড়ি, কিন্তু সব কাজের জন্য সেরা নয়। কিছু কাজের জন্য আলাদা যন্ত্র দরকার — NoSQL।</p>
<p class="scene-setting en">You open a toolbox. Inside: hammer, screwdriver, pliers, wrench. Each tool for a specific job. You can't tighten a screw with a hammer. Databases too — relational (SQL) is a powerful hammer, but not best for everything. Some jobs need different tools — NoSQL.</p>

<div class="callout info"><span class="co-icon">📋</span><div><strong>NoSQL ধরনভেদ:</strong><br>
<strong>Key-Value (Redis, DynamoDB):</strong> সবচেয়ে সহজ — একটি key, একটি value। অত্যন্ত দ্রুত। Cache, session, counter।<br>
<strong>Document (MongoDB, CouchDB):</strong> JSON-এর মতো document। প্রতিটি record একটি tree। schema-less — নমনীয়। Blog post, user profile, catalog।<br>
<strong>Column-Family (Cassandra, HBase):</strong> কলাম-ভিত্তিক। বিশাল পরিমাণ ডেটা, write-heavy। IoT, time-series, log।<br>
<strong>Graph (Neo4j, Amazon Neptune):</strong> নোড ও edge। সম্পর্ক বিশ্লেষণে সেরা। Social network, recommendation, fraud detection।</div></div>

<div class="compare">
<div class="cmp-card cmp-good"><div class="cmp-label">✅ SQL</div>Structured, ACID, relational, JOIN, complex queries। সব ডেটা টেবিলে।</div>
<div class="cmp-card cmp-bad"><div class="cmp-label">🌐 NoSQL</div>Flexible, BASE, horizontal scaling, type-specific। সব ডেটা এক আকার নয়।</div>
</div>

<div class="callout info"><span class="co-icon">⚖️</span><div><strong>BASE vs ACID (NoSQL-এর দর্শন):</strong><br>
<strong>B — Basically Available:</strong> সিস্টেম সর্বদা available, partial failure সহ্য করে<br>
<strong>S — Soft State:</strong> সিস্টেমের অবস্থা external input ছাড়া বদলাতে পারে<br>
<strong>E — Eventually Consistent:</strong> শেষ পর্যন্ত consistent — কিন্তু এই মুহূর্তে নাও হতে পারে<br>
এটাই NoSQL-এর tradeoff: শক্তিশালী consistency ছেড়ে availability ও scalability নাও।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>CAP Theorem (Brewer ২০০০):</strong> Distributed system-এ তিনটির মধ্যে মাত্র দুটি থাকতে পারে:<br>
<strong>C — Consistency:</strong> সব নোড একই ডেটা দেখায়<br>
<strong>A — Availability:</strong> প্রতিটি request উত্তর পায়<br>
<strong>P — Partition Tolerance:</strong> নেটওয়ার্ক বিভাজন সহ্য করে<br>
Partition হলে (এবং হবে) — C বা A বেছে নাও। Cassandra = AP, MongoDB = CP।</div></div>

<div class="verse">وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং মানুষের জন্য তা ছাড়া আর কিছু নেই যা সে চেষ্টা করে।" — কুরআন ৫৩:৩৯</div>

<p class="scene-setting">এই আয়াত বলে — প্রতিটি কাজের জন্য উপযুক্ত প্রচেষ্টা দরকার। NoSQL-ও তেমন — প্রতিটি ধরনের ডেটার জন্য উপযুক্ত গঠন। এক আকার সবার জন্য নয়। Redis cache-এর জন্য, MongoDB document-এর জন্য, Neo4j relationship-এর জন্য। সঠিক টুল বেছে নাও।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> Microservices — প্রতিটি service-এর জন্য আলাদা database। Book ৩৫ (ডিস্ট্রিবিউটেড) Door ৩: CAP theorem deep dive। Book ১০ (RAG) Door ৩: Vector DB — NoSQL-এর নতুন ধরন।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🌐 NoSQL পরিবার — চার ধরনের ডাটাবেস</text>
  <rect x="20" y="50" width="125" height="85" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="82" y="72" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">🔑 Key-Value</text>
  <text x="82" y="90" text-anchor="middle" fill="#7dd3fc" font-size="10">Redis, DynamoDB</text>
  <rect x="35" y="98" width="95" height="16" rx="3" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1"/>
  <text x="82" y="109" text-anchor="middle" fill="#86efac" font-size="10">"user:1" → {json}</text>
  <text x="82" y="126" text-anchor="middle" fill="#94a3b8" font-size="10">O(1) cache, session</text>
  <rect x="160" y="50" width="125" height="85" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="222" y="72" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">📄 Document</text>
  <text x="222" y="90" text-anchor="middle" fill="#fde68a" font-size="10">MongoDB, CouchDB</text>
  <rect x="175" y="98" width="95" height="16" rx="3" fill="#451a0a" stroke="#fbbf24" stroke-width="1"/>
  <text x="222" y="109" text-anchor="middle" fill="#fde68a" font-size="10">{_id, name, ...}</text>
  <text x="222" y="126" text-anchor="middle" fill="#94a3b8" font-size="10">JSON tree, schemaless</text>
  <rect x="300" y="50" width="125" height="85" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="362" y="72" text-anchor="middle" fill="#c084fc" font-size="9" font-weight="700">📊 Column-Family</text>
  <text x="362" y="90" text-anchor="middle" fill="#c084fc" font-size="10">Cassandra, HBase</text>
  <rect x="315" y="98" width="95" height="16" rx="3" fill="#2e1065" stroke="#a855f7" stroke-width="1"/>
  <text x="362" y="109" text-anchor="middle" fill="#c084fc" font-size="10">row | col1 | col2</text>
  <text x="362" y="126" text-anchor="middle" fill="#94a3b8" font-size="10">write-heavy, IoT</text>
  <rect x="440" y="50" width="125" height="85" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="502" y="72" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">🔗 Graph</text>
  <text x="502" y="90" text-anchor="middle" fill="#86efac" font-size="10">Neo4j, Neptune</text>
  <circle cx="475" cy="108" r="5" fill="#22c55e"/>
  <circle cx="530" cy="105" r="5" fill="#22c55e"/>
  <line x1="480" y1="108" x2="525" y2="106" stroke="#4ade80" stroke-width="1.5"/>
  <text x="502" y="126" text-anchor="middle" fill="#94a3b8" font-size="10">nodes + edges</text>
  <rect x="120" y="160" width="340" height="70" rx="8" fill="#0f172a" stroke="#f87171" stroke-width="2"/>
  <text x="290" y="180" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">CAP Theorem — মাত্র ২টি বেছে নাও</text>
  <text x="180" y="200" text-anchor="middle" fill="#fca5a5" font-size="10">C — Consistency</text>
  <text x="290" y="200" text-anchor="middle" fill="#fca5a5" font-size="10">A — Availability</text>
  <text x="400" y="200" text-anchor="middle" fill="#fca5a5" font-size="10">P — Partition Tol.</text>
  <text x="290" y="218" text-anchor="middle" fill="#94a3b8" font-size="10">Cassandra = AP | MongoDB = CP</text>
</svg>
</div>
<div class="svg-caption">চিত্র: NoSQL-এর চার ধরন — Key-Value, Document, Column, Graph। CAP tradeoff।</div>

<div class="code-block"># ── STEP 1: What is NoSQL? ──
# NoSQL = "Not Only SQL" — databases that don't use the relational model.

# WHY NoSQL EXISTS:
# - SQL is great for structured data with relationships
# - NoSQL handles: massive scale, unstructured data, flexible schemas
# - Different NoSQL types for different problems

# FOUR TYPES OF NoSQL:
nosql_types = {
    "Key-Value": {
        "examples": "Redis, DynamoDB, memcached",
        "data_model": "Simple: key → value (like a Python dict)",
        "best_for": "Caching, sessions, counters, real-time",
        "speed": "Extremely fast (in-memory)",
    },
    "Document": {
        "examples": "MongoDB, CouchDB, Firestore",
        "data_model": "JSON-like documents (flexible schema)",
        "best_for": "User profiles, content management, catalogs",
        "speed": "Fast (flexible queries)",
    },
    "Column-Family": {
        "examples": "Cassandra, HBase, ScyllaDB",
        "data_model": "Rows with dynamic columns (optimized for writes)",
        "best_for": "Time-series, IoT, write-heavy, massive scale",
        "speed": "Very fast writes, linear scalability",
    },
    "Graph": {
        "examples": "Neo4j, Amazon Neptune, ArangoDB",
        "data_model": "Nodes and edges (relationships are first-class)",
        "best_for": "Social networks, recommendations, fraud detection",
        "speed": "Fast relationship traversals",
    },
}

print("NoSQL DATABASE TYPES:")
for ntype, info in nosql_types.items():
    print(f"\n  {ntype}:")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

<div class="code-block"># ── STEP 2: Key-Value stores (Redis) ──
# REDIS: in-memory key-value store. EXTREMELY fast (microseconds).

redis_examples = """
# Redis commands (also available via Python redis library):

# Basic key-value:
SET user:1:name "Rakib"        # store
GET user:1:name                 # → "Rakib"
DEL user:1:name                 # delete
EXPIRE session:abc 3600         # auto-delete after 1 hour
TTL session:abc                 # time until expiry (seconds)

# Atomic counter (great for view counts, likes):
INCR page_views                 # → 1
INCR page_views                 # → 2
INCRBY score 10                 # → 12

# Lists (queues):
LPUSH tasks "email_user_1"      # push to front
RPOP tasks                      # pop from back
LRANGE tasks 0 -1               # get all

# Hashes (like Python dicts):
HSET user:1 name "Rakib" age 25 email "r@x.com"
HGET user:1 name                # → "Rakib"
HGETALL user:1                  # → all fields

# Sets (unique collections):
SADD online_users "user1" "user2" "user3"
SISMEMBER online_users "user1"  # → true
SCARD online_users              # → 3

# Sorted sets (leaderboards):
ZADD leaderboard 100 "Alice" 85 "Bob" 92 "Carol"
ZREVRANGE leaderboard 0 2      # top 3: Alice, Carol, Bob
"""

print(redis_examples)

# PYTHON REDIS USAGE:
python_redis = """
import redis

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# Cache a value:
r.set('user:1:name', 'Rakib', ex=3600)  # expires in 1 hour
name = r.get('user:1:name')  # → 'Rakib'

# Atomic counter:
r.incr('page_views')

# Cache pattern (cache-aside):
def get_user(user_id):
    cache_key = f"user:{user_id}"
    cached = r.get(cache_key)
    if cached:
        return json.loads(cached)  # cache hit!

    user = User.objects.get(id=user_id)  # DB query
    r.setex(cache_key, 3600, json.dumps(user.to_dict()))  # cache for 1hr
    return user
"""

print("Python Redis:")
print(python_redis)</div>

<div class="code-block"># ── STEP 3: Document stores (MongoDB) ──
# MongoDB stores JSON-like documents. Flexible schema.

mongo_examples = """
// MongoDB (JavaScript-style queries):

// Insert a document (no predefined schema!):
db.users.insertOne({
    name: "Sara",
    email: "sara@example.com",
    age: 23,
    orders: [
        {item: "book", price: 25, date: "2025-01-15"},
        {item: "pen", price: 5, date: "2025-01-20"}
    ],
    preferences: {
        theme: "dark",
        notifications: true
    }
});

// Query (similar to SQL WHERE):
db.users.find({age: {$gte: 20}});               // age >= 20
db.users.find({"orders.price": {$gt: 20}});     // has order > $20
db.users.find({"preferences.theme": "dark"});   // nested field

// Update:
db.users.updateOne(
    {name: "Sara"},
    {$set: {age: 24}, $push: {orders: {item: "laptop", price: 999}}}
);

// Aggregation (like SQL GROUP BY):
db.orders.aggregate([
    {$group: {_id: "$user_id", total: {$sum: "$amount"}}},
    {$sort: {total: -1}},
    {$limit: 10}
]);
"""

print(mongo_examples)

# PYTHON (PyMongo):
python_mongo = """
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['myapp']

# Insert:
db.users.insert_one({'name': 'Rakib', 'age': 25})

# Query:
users = db.users.find({'age': {'$gte': 20}})
for user in users:
    print(user)

# Create index:
db.users.create_index('email', unique=True)
"""

print("Python PyMongo:")
print(python_mongo)

# WHEN TO USE MONGODB:
# ✅ Flexible/changing schema
# ✅ Nested data (JSON-like)
# ✅ Read-heavy workloads
# ✅ Rapid prototyping

# WHEN NOT TO USE MONGODB:
# ❌ Complex JOINs (relational is better)
# ❌ Transactions across collections (limited)
# ❌ Strict data integrity requirements</div>

<div class="code-block"># ── STEP 4: SQL vs NoSQL — when to use which ──
comparison = {
    "SQL (PostgreSQL, MySQL)": {
        "data_type": "Structured, relational, tabular",
        "schema": "Fixed (must define columns upfront)",
        "scaling": "Vertical (bigger server)",
        "consistency": "Strong (ACID)",
        "joins": "Excellent (relational)",
        "best_for": "Transactions, financial, e-commerce, complex queries",
    },
    "NoSQL (MongoDB, Redis)": {
        "data_type": "Flexible, document, key-value, graph",
        "schema": "Dynamic (add fields anytime)",
        "scaling": "Horizontal (more servers)",
        "consistency": "Eventual (BASE)",
        "joins": "Limited (denormalize instead)",
        "best_for": "Caching, big data, real-time, flexible schemas",
    },
}

print("SQL vs NoSQL:")
for db_type, props in comparison.items():
    print(f"\n  {db_type}:")
    for key, value in props.items():
        print(f"    {key}: {value}")

# THE REAL ANSWER: USE BOTH (polyglot persistence)
# - PostgreSQL for transactions (LedgerPilot: accounts, transactions)
# - Redis for caching (session data, rate limiting)
# - Elasticsearch for search (full-text search)
# - MongoDB for logs/events (flexible schema)

# Many modern apps use 3-4 different databases,
# each optimized for its specific workload.</div>

<div class="code-block"># ── STEP 5: Graph databases (Neo4j) ──
# Graph databases treat RELATIONSHIPS as first-class citizens.
# In SQL, relationships are expensive JOINs. In graph DB, they're instant.

# NEO4J CYPHER QUERY LANGUAGE:
cypher_examples = """
// Create nodes (entities):
CREATE (alice:Person {name: "Alice", age: 30})
CREATE (bob:Person {name: "Bob", age: 25})

// Create relationships (edges):
CREATE (alice)-[:KNOWS {since: 2020}]->(bob)
CREATE (alice)-[:WORKS_AT]->(company:Company {name: "Google"})

// Query: find all friends of Alice:
MATCH (alice:Person {name: "Alice"})-[:KNOWS]-(friend)
RETURN friend.name;

// Query: find friends of friends (2 hops):
MATCH (me:Person {name: "Alice"})-[:KNOWS*2]-(fof)
RETURN fof.name;

// Query: shortest path between two people:
MATCH path = shortestPath(
    (a:Person {name: "Alice"})-[*]-(b:Person {name: "Dave"})
)
RETURN path;
"""

print(cypher_examples)

# USE CASES FOR GRAPH DATABASES:
graph_use_cases = {
    "Social networks": "Find mutual friends, friend recommendations",
    "Recommendation engines": "Users who bought X also bought Y",
    "Fraud detection": "Find suspicious patterns in transactions",
    "Knowledge graphs": "Entity relationships (Google Knowledge Graph)",
    "Network/IT infrastructure": "Dependencies between services",
    "Route planning": "Shortest path, least cost route",
}

print("GRAPH DATABASE USE CASES:")
for use_case, desc in graph_use_cases.items():
    print(f"  {use_case}: {desc}")

# WHY GRAPHS ARE FAST FOR RELATIONSHIPS:
# SQL: find friends of friends = 2 expensive JOINs (O(n²) or worse)
# Graph: follow edges directly = O(1) per hop, O(depth) total</div>

<div class="code-block"># ── STEP 6: CAP theorem and BASE consistency ──
# THE CAP THEOREM (Brewer's Theorem):
# In a distributed system, you can have at most 2 of 3:

cap = {
    "C - Consistency": "All nodes see the same data simultaneously",
    "A - Availability": "Every request gets a response (not error)",
    "P - Partition tolerance": "System works despite network failures",
}

print("CAP THEOREM:")
for prop, desc in cap.items():
    print(f"  {prop}: {desc}")

# THE REALITY: you MUST have P (network partitions WILL happen).
# So the real choice is: CP or AP.

# CP (Consistency + Partition tolerance):
# - Prioritize correct data over availability
# - During partition: refuse requests (unavailable)
# - Examples: PostgreSQL (with sync replication), MongoDB, HBase

# AP (Availability + Partition tolerance):
# - Prioritize responding over consistency
# - During partition: respond with possibly stale data
# - Examples: Cassandra, DynamoDB, CouchDB

# BASE (NoSQL consistency model — opposite of ACID):
base = {
    "BA - Basically Available": "System remains operational (might be slow)",
    "S - Soft State": "State changes without explicit input (eventual)",
    "E - Eventually Consistent": "Given enough time, all nodes converge",
}

print("\nBASE (NoSQL alternative to ACID):")
for prop, desc in base.items():
    print(f"  {prop}: {desc}")

# EVENTUAL CONSISTENCY EXAMPLES:
# - DNS: when you change IP, it takes hours to propagate
# - Social media likes: your like might not show immediately to others
# - Shopping cart: might be slightly different on app vs web temporarily
# - Email: not instant (but eventually arrives)

# NoSQL SUMMARY:
# ┌───────────────┬────────────────┬──────────────────────────┐
# │ Type          │ Examples       │ Best For                 │
# ├───────────────┼────────────────┼──────────────────────────┤
# │ Key-Value     │ Redis, DynamoDB│ Cache, sessions          │
# │ Document      │ MongoDB        │ Flexible schema, content │
# │ Column        │ Cassandra      │ Write-heavy, time-series │
# │ Graph         │ Neo4j          │ Relationships, paths     │
# │ Search        │ Elasticsearch  │ Full-text search, logs   │
# │ Time-series   │ InfluxDB       │ Metrics, monitoring      │
# └───────────────┴────────────────┴──────────────────────────┘

# POLYGLOT PERSISTENCE:
# Modern applications use MULTIPLE databases:
# - LedgerPilot: PostgreSQL (transactions) + Redis (cache)
# - Ipractus: PostgreSQL + Redis + S3 (file storage)
# - Social app: PostgreSQL (users) + Neo4j (friendships) +
#               Redis (feed cache) + Elasticsearch (search)
# Choose the RIGHT tool for each job.</div>

<div class="secret-box">🌐 <strong>NoSQL = বিকল্প টুলবক্স।</strong> Key-value (দ্রুত), Document (নমনীয়), Column (বিশাল), Graph (সম্পর্ক)। BASE দর্শন, CAP tradeoff। কিন্তু একটি মেশিনে থাকলে সব সীমাবদ্ধ। যখন মিলিয়ন ব্যবহারকারী, হাজার সার্ভার — ডেটা বিভক্ত করতে হয়। সেই যাত্রা আসবে পরের দরজায় — distributed databases।</div>`,
  senior: {
    title: "NoSQL এক নজরে",
    body: `<table class="kv-table"><tr><th>ধরন</th><th>উদাহরণ</th><th>সেরা ব্যবহার</th></tr>
<tr><td class="hl">Key-Value</td><td>Redis, DynamoDB</td><td>Cache, session, counter</td></tr>
<tr><td class="hl">Document</td><td>MongoDB, CouchDB</td><td>User profile, blog, catalog</td></tr>
<tr><td class="hl">Column-Family</td><td>Cassandra, HBase</td><td>Time-series, IoT, write-heavy</td></tr>
<tr><td class="hl">Graph</td><td>Neo4j, Neptune</td><td>Social network, recommendation</td></tr>
<tr><td class="hl">BASE</td><td colspan="2">Basically Available, Soft State, Eventually Consistent</td></tr>
<tr><td class="hl">CAP</td><td colspan="2">Consistency OR Availability (when partitioned)</td></tr></table>`
  }
});

doors.push({
  num: 7,
  icon: "🌍",
  color: "#2dd4bf",
  name: "বিতরণ স্থপতি",
  subtitle: "The Distribution Architect",
  tech: "Distributed Databases — replication (master-slave, master-master), sharding/partitioning, consistency models, convergence",
  spirit: "সিলসিলা — শৃঙ্খল, একাধিক নোডে ডেটা ছড়িয়ে যাওয়া",
  secret: "Sharding = ডেটা ভাগ করো (প্রতিটি সার্ভারে আলাদা অংশ)। Replication = ডেটা কপি করো (প্রতিটি সার্ভারে পুরো কপি)। উভয়ে স্কেল করে।",
  recall: {
    q: " Sharding এবং Replication-এর পার্থক্য কী?",
    qen: "What is the difference between sharding and replication?",
    a: "Sharding = ডেটা ভাগ (প্রতিটি সার্ভারে আলাদা অংশ)। Replication = ডেটা কপি (প্রতিটি সার্ভারে পুরো কপি)।",
    aen: "Sharding = split data (each server has different part). Replication = copy data (each server has full copy)."
  },
  story: `<p class="scene-setting">তোমার একটি বইয়ের দোকান। ১০ লক্ষ বই। একটি স্টোরে সব রাখলে — ভিড়, ধীর, একজন কর্মী হাজার গ্রাহক সামলাতে পারে না। দুটি সমাধান: প্রথম — প্রতিটি স্টোরে সব বইয়ের কপি রাখো, গ্রাহক যে স্টোরেই যাক পাবে (replication)। দ্বিতীয় — প্রতিটি স্টোরে আলাদা বই — স্টোর A-তে A-F, স্টোর B-তে G-M (sharding)। উভয়েই স্কেল করে।</p>
<p class="scene-setting en">You have a bookstore. 1 million books. One store can't hold them all — crowded, slow, one worker can't serve thousands. Two solutions: first — copy all books to each store, customer gets them anywhere (replication). Second — different books per store — store A has A-F, store B has G-M (sharding). Both scale.</p>

<div class="callout info"><span class="co-icon">📋</span><div><strong>Replication (প্রতিলিপি):</strong><br>
<strong>Master-Slave (Primary-Replica):</strong> একটি master write নেয়, একাধিক replica read দেয়। read scaling।<br>
<strong>Master-Master (Multi-Master):</strong> একাধিক master write নেয়। conflict resolution দরকার। complex।<br>
<strong>Synchronous:</strong> master write করে, replica confirm করে, তারপর success। নিরাপদ কিন্তু ধীর।<br>
<strong>Asynchronous:</strong> master write করে, success, replica পরে আপডেট হয়। দ্রুত কিন্তু risk।</div></div>

<div class="callout info"><span class="co-icon">✂️</span><div><strong>Sharding (Horizontal Partitioning):</strong><br>
<strong>Range-based:</strong> id ১-১০০০০ → shard 1, ১০০০১-২০০০০ → shard 2<br>
<strong>Hash-based:</strong> hash(user_id) % N → কোন shard? সমানভাবে ছড়ায়।<br>
<strong>Directory-based:</strong> একটি lookup table — কোন ডেটা কোন shard-এ।<br>
<strong>Geo-based:</strong> ভৌগলিক — Asian users → Asia shard, US users → US shard।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Sharding সমস্যা:</strong><br>
<strong>Hot Spot:</strong> একটি shard-এ সব ট্রাফিক — অন্যগুলো খালি।<br>
<strong>Resharding:</strong> shard সংখ্যা বদলাতে হলে — সব ডেটা move। ব্যয়বহুল।<br>
<strong>Cross-shard Query:</strong> JOIN যদি একাধিক shard-এ হয় — ধীর ও জটিল।<br>
<strong>Transaction:</strong> একাধিক shard-এ transaction — distributed ACID, কঠিন।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>Consistency Models:</strong><br>
<strong>Strong Consistency:</strong> write হওয়ার সাথে সাথে সব নোডে দেখা যায়। ধীর, কিন্তু নিরাপদ।<br>
<strong>Eventual Consistency:</strong> শেষ পর্যন্ত সব নোডে দেখা যাবে। দ্রুত, কিন্তু কিছুক্ষণ পুরোনো ডেটা।<br>
<strong>Read-your-writes:</strong> তুমি write করলে তুমি পরের read-এ নিজের write দেখবে।<br>
<strong>Causal Consistency:</strong> কার্যকারণ সম্পর্ক মানা হয় — A → B হলে B কখনো A-র আগে দেখা যাবে না।</div></div>

<div class="verse">وَاللَّهُ خَلَقَ كُلَّ دَابَّةٍ مِن مَّاءٍ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"আল্লাহ প্রতিটি জীবকে সৃষ্টি করেছেন পানি থেকে।" — কুরআন ২৪:৪৫</div>

<p class="scene-setting">এই আয়াতে জীবের বিস্তারের কথা বলা হয়েছে। Distributed database-ও তেমন — একটি মেশিনে সব রাখা সম্ভব নয়। ডেটা বিস্তৃত করতে হয় — replication ও sharding দিয়ে। প্রতিটি নোড একটি জীব — নিজস্ব ক্ষমতা, কিন্তু সব মিলে একটি সিস্টেম।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৩৫ (ডিস্ট্রিবিউটেড সিস্টেমস) Door ৬:</strong> Amazon Dynamo — sharding + replication একসাথে। Door ৩: CAP theorem। Book ৪: Database scaling — read replica, sharding।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🌍 Distributed: Replication + Sharding</text>
  <rect x="20" y="45" width="240" height="90" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="140" y="65" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">Replication (কপি)</text>
  <rect x="35" y="75" width="60" height="24" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="65" y="91" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Master</text>
  <text x="65" y="108" text-anchor="middle" fill="#86efac" font-size="10">writes ✍️</text>
  <defs><marker id="arrD7a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="95" y1="85" x2="135" y2="85" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrD7a)"/>
  <line x1="95" y1="95" x2="135" y2="105" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrD7a)"/>
  <rect x="135" y="75" width="55" height="20" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="162" y="88" text-anchor="middle" fill="#7dd3fc" font-size="10">Replica 1</text>
  <rect x="135" y="100" width="55" height="20" rx="4" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="162" y="113" text-anchor="middle" fill="#7dd3fc" font-size="10">Replica 2</text>
  <text x="200" y="90" fill="#86efac" font-size="10">reads 📖</text>
  <text x="140" y="128" text-anchor="middle" fill="#94a3b8" font-size="10">1 write → N read copies</text>
  <rect x="280" y="45" width="280" height="90" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="420" y="65" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="700">Sharding (ভাগ)</text>
  <text x="420" y="82" text-anchor="middle" fill="#fde68a" font-size="10">hash(user_id) % 3 → shard</text>
  <rect x="295" y="90" width="75" height="35" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="332" y="105" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Shard 0</text>
  <text x="332" y="118" text-anchor="middle" fill="#94a3b8" font-size="10">id % 3 = 0</text>
  <rect x="382" y="90" width="75" height="35" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="419" y="105" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Shard 1</text>
  <text x="419" y="118" text-anchor="middle" fill="#94a3b8" font-size="10">id % 3 = 1</text>
  <rect x="469" y="90" width="75" height="35" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="506" y="105" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Shard 2</text>
  <text x="506" y="118" text-anchor="middle" fill="#94a3b8" font-size="10">id % 3 = 2</text>
  <defs><marker id="arrD7b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/></marker></defs>
  <line x1="420" y1="82" x2="332" y2="88" stroke="#22c55e" stroke-width="1" marker-end="url(#arrD7b)"/>
  <line x1="420" y1="82" x2="419" y2="88" stroke="#22c55e" stroke-width="1" marker-end="url(#arrD7b)"/>
  <line x1="420" y1="82" x2="506" y2="88" stroke="#22c55e" stroke-width="1" marker-end="url(#arrD7b)"/>
  <rect x="100" y="155" width="380" height="80" rx="8" fill="#0f172a" stroke="#f87171" stroke-width="2"/>
  <text x="290" y="175" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="700">Consistency Models</text>
  <text x="170" y="195" text-anchor="middle" fill="#fca5a5" font-size="10">Strong: সব নোড একই সাথে</text>
  <text x="290" y="195" text-anchor="middle" fill="#fca5a5" font-size="10">Eventual: শেষে মিলবে</text>
  <text x="410" y="195" text-anchor="middle" fill="#fca5a5" font-size="10">Causal: কারণ-ফল</text>
  <text x="290" y="215" text-anchor="middle" fill="#94a3b8" font-size="10">Dynamo = eventual | Spanner = strong</text>
  <text x="290" y="230" text-anchor="middle" fill="#f87171" font-size="10">CAP: partition হলে C বা A বেছে নাও</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Replication (কপি) ও Sharding (ভাগ) — consistency models সহ।</div>

<div class="code-block"># ── STEP 1: Why distributed databases? ──
# A single database server has LIMITS:
# - CPU capacity
# - RAM capacity
# - Disk I/O
# - Storage space

# When you outgrow one server, you need DISTRIBUTED databases.

# TWO SCALING APPROACHES:
scaling = {
    "Vertical (Scale Up)": {
        "how": "Buy a BIGGER server (more CPU, RAM, disk)",
        "pro": "Simple, no code changes",
        "con": "Has a hard limit, expensive, single point of failure",
    },
    "Horizontal (Scale Out)": {
        "how": "Add MORE servers (commodity hardware)",
        "pro": "Virtually unlimited, cost-effective, fault tolerant",
        "con": "Complex (consistency, network latency, coordination)",
    },
}

print("SCALING APPROACHES:")
for approach, info in scaling.items():
    print(f"\n  {approach}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# MOST MODERN DATABASES USE BOTH:
# - Vertical until you hit limits
# - Then horizontal for further growth</div>

<div class="code-block"># ── STEP 2: Replication — copying data ──
# REPLICATION: copy data to MULTIPLE servers.

# MASTER-REPLICA (Primary-Secondary):
# - Master: handles ALL writes
# - Replicas: handle reads (copy from master)
# - Writes go to ONE server (master)
# - Reads can go to MANY servers (replicas) → read scaling

# MASTER-MASTER (Multi-Primary):
# - Multiple masters accept writes
# - Must resolve conflicts (hard!)
# - Risk: write conflicts, data divergence

# SYNCHRONOUS vs ASYNCHRONOUS:
replication_types = {
    "Synchronous": {
        "how": "Master waits for ALL replicas before confirming write",
        "pro": "Strong consistency (all nodes agree)",
        "con": "Slow (waits for slowest replica)",
    },
    "Asynchronous": {
        "how": "Master confirms write immediately, replicas catch up later",
        "pro": "Fast (no waiting)",
        "con": "Eventual consistency (replicas might lag)",
    },
}

print("REPLICATION TYPES:")
for rtype, info in replication_types.items():
    print(f"\n  {rtype}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# POSTGRESQL REPLICATION SETUP (simplified):
pg_setup = """
-- On master (postgresql.conf):
wal_level = replica
max_wal_senders = 3

-- On replica (postgresql.conf):
hot_standby = on

-- On replica (recovery.conf):
standby_mode = 'on'
primary_conninfo = 'host=master_ip port=5432'
"""

print("PostgreSQL replication config:")
print(pg_setup)</div>

<div class="code-block"># ── STEP 3: Sharding — splitting data ──
# SHARDING: distribute data ACROSS multiple servers.
# Each server holds a PORTION of the data.

# SHARDING STRATEGIES:
strategies = {
    "Hash Sharding": "hash(key) % N → even distribution",
    "Range Sharding": "A-M on shard 1, N-Z on shard 2",
    "Geo Sharding": "US users on US servers, EU on EU servers",
    "Directory Sharding": "Lookup table maps keys to shards",
}

print("SHARDING STRATEGIES:")
for strategy, desc in strategies.items():
    print(f"  {strategy}: {desc}")

# PYTHON SHARDING EXAMPLE:
NUM_SHARDS = 4

def get_shard(user_id):
    """Determine which shard holds this user's data."""
    return hash(user_id) % NUM_SHARDS

# Each user's data goes to a specific shard:
for uid in [101, 102, 103, 104, 105]:
    shard = get_shard(uid)
    print(f"  User {uid} → Shard {shard}")

# POSTGRESQL DECLARATIVE PARTITIONING (sharding within one DB):
sql_partitioning = """
-- Partition by hash (even distribution):
CREATE TABLE orders (
    id SERIAL,
    user_id INT,
    amount DECIMAL,
    created_at TIMESTAMP
) PARTITION BY HASH (user_id);

-- Create 4 partitions:
CREATE TABLE orders_p0 PARTITION OF orders
    FOR VALUES WITH (modulus 4, remainder 0);
CREATE TABLE orders_p1 PARTITION OF orders
    FOR VALUES WITH (modulus 4, remainder 1);
CREATE TABLE orders_p2 PARTITION OF orders
    FOR VALUES WITH (modulus 4, remainder 2);
CREATE TABLE orders_p3 PARTITION OF orders
    FOR VALUES WITH (modulus 4, remainder 3);

-- Or partition by date (time-series):
-- CREATE TABLE events (...) PARTITION BY RANGE (created_at);
-- CREATE TABLE events_2025_01 PARTITION OF events
--     FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');
"""

print(sql_partitioning)</div>

<div class="code-block"># ── STEP 4: Consistency models in distributed DBs ──
# When data is on multiple servers, how do they stay in sync?

consistency_models = {
    "Strong Consistency": {
        "guarantee": "After write, ALL subsequent reads see the new value",
        "cost": "Slow (must coordinate all nodes)",
        "use": "Financial transactions, critical data",
    },
    "Eventual Consistency": {
        "guarantee": "Given enough time, all nodes will converge",
        "cost": "Fast (no coordination needed)",
        "use": "Social media, comments, likes",
    },
    "Read-Your-Writes": {
        "guarantee": "You always see your own writes immediately",
        "cost": "Medium (route to master for your reads)",
        "use": "User profiles, settings",
    },
    "Bounded Staleness": {
        "guarantee": "Data is at most N seconds/versions stale",
        "cost": "Medium",
        "use": "Caching, dashboards",
    },
}

print("CONSISTENCY MODELS:")
for model, info in consistency_models.items():
    print(f"\n  {model}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# THE PACELC THEOREM (extends CAP):
# PACELC: If Partitioned → choose between A and C
#         Else (normal) → choose between L (latency) and C
# You can't have perfect consistency AND low latency.</div>

<div class="code-block"># ── STEP 5: Distributed database patterns ──
# COMMON PATTERNS in distributed databases:

patterns = {
    "Read Replicas": {
        "how": "Writes → master. Reads → replicas.",
        "pro": "Read scaling, better latency",
        "con": "Replication lag, write bottleneck on master",
    },
    "Sharding": {
        "how": "Split data by key across servers",
        "pro": "Write scaling, storage scaling",
        "con": "Cross-shard queries hard, rebalancing complex",
    },
    "CQRS": {
        "how": "Separate read models from write models",
        "pro": "Optimize each independently",
        "con": "Complexity, eventual consistency",
    },
    "Event Sourcing": {
        "how": "Store events (not current state), derive state",
        "pro": "Full audit log, time travel",
        "con": "Complex, storage grows",
    },
    "Change Data Capture (CDC)": {
        "how": "Stream DB changes to other systems",
        "pro": "Real-time sync, event-driven architecture",
        "con": "Additional infrastructure",
    },
}

print("DISTRIBUTED DATABASE PATTERNS:")
for pattern, info in patterns.items():
    print(f"\n  {pattern}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# TOOLS:
# Debezium: CDC for PostgreSQL/MySQL → Kafka
# Vitess: Sharding proxy for MySQL
# Citus: Sharding extension for PostgreSQL
# CockroachDB: Distributed SQL (PostgreSQL-compatible)
# YugabyteDB: Distributed SQL (PostgreSQL-compatible)</div>

<div class="code-block"># ── STEP 6: Cloud-native distributed databases ──
# Cloud providers offer MANAGED distributed databases:

cloud_dbs = {
    "AWS Aurora": {
        "type": "Managed MySQL/PostgreSQL with distributed storage",
        "feature": "Auto-scaling storage, read replicas, multi-AZ",
    },
    "AWS DynamoDB": {
        "type": "Managed key-value/document store",
        "feature": "Auto-scaling, single-digit ms latency, global tables",
    },
    "Google Spanner": {
        "type": "Globally distributed SQL database",
        "feature": "Strong consistency + horizontal scaling (rare combo)",
    },
    "MongoDB Atlas": {
        "type": "Managed MongoDB",
        "feature": "Auto-scaling, sharding, multi-region",
    },
    "CockroachDB": {
        "type": "Distributed SQL (open source)",
        "feature": "PostgreSQL-compatible, survives node failures",
    },
}

print("CLOUD-NATIVE DISTRIBUTED DATABASES:")
for db, info in cloud_dbs.items():
    print(f"\n  {db}:")
    for key, value in info.items():
        print(f"    {key}: {value}")

# DISTRIBUTED DATABASE TRADEOFFS:
# ┌──────────────────┬──────────────────────────────────┐
# │ Benefit          │ Cost                             │
# ├──────────────────┼──────────────────────────────────┤
# │ More capacity    │ More complexity                 │
# │ Fault tolerance  │ Consistency challenges          │
# │ Geo-distribution │ Network latency                 │
# │ Scale-out        │ Operational overhead             │
# └──────────────────┴──────────────────────────────────┘

# WHEN TO GO DISTRIBUTED:
# - Single server can't handle load (CPU/RAM/disk maxed)
# - Need geo-distribution (users worldwide)
# - Need high availability (99.99%+ uptime)
# - Data exceeds single-server storage capacity

# WHEN NOT TO GO DISTRIBUTED:
# - Single server handles the load fine
# - Strong consistency is critical (hard in distributed)
# - Small team (operational overhead is significant)
# - Data fits on one machine (most apps!)

# RULE OF THUMB: "Start with one database. Distribute only when you MUST."
# Premature distribution = unnecessary complexity.
# A well-tuned PostgreSQL on a big server can handle millions of users.</div>

<div class="secret-box">🌍 <strong>Distributed = একাধিক নোডে ডেটা।</strong> Replication (কপি) + Sharding (ভাগ)। Master-slave, consistency models। কিন্তু এত স্তরে ডেটা ছড়িয়ে গেলে — query কীভাবে সঠিক নোডে যায়? কে ঠিক করে কোন plan সেরা? সেই সমাধান আসবে পরের দরজায় — query optimization।</div>`,
  senior: {
    title: "Distributed Databases এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Replication</td><td>ডেটা কপি — read scaling, high availability</td></tr>
<tr><td class="hl">Master-Slave</td><td>1 master (write) + N replicas (read)</td></tr>
<tr><td class="hl">Sharding</td><td>ডেটা ভাগ — write scaling, horizontal</td></tr>
<tr><td class="hl">Hash Sharding</td><td>hash(key) % N — সমান বণ্টন</td></tr>
<tr><td class="hl">Strong Consistency</td><td>write → সাথে সাথে visible সব নোডে</td></tr>
<tr><td class="hl">Eventual Consistency</td><td>write → শেষ পর্যন্ত visible — দ্রুত</td></tr>
<tr><td class="hl">Hot Spot</td><td>এক shard-ে সব ট্রাফিক</td></tr></table>`
  }
});

doors.push({
  num: 8,
  icon: "⚡",
  color: "#2dd4bf",
  name: "অপ্টিমাইজার",
  subtitle: "The Optimizer",
  tech: "Query Optimization — cost-based optimizer, execution plans, join strategies (nested loop, hash, merge), Selinger 1979",
  spirit: "হিকমাহ — প্রজ্ঞা, একাধিক পথের মধ্যে সেরা বেছে নেওয়া",
  secret: "Query Optimizer = GPS। একাধিক রাস্তা আছে — optimizer খুঁজে বের করে সবচেয়ে দ্রুত কোনটি। তুমি কী চাও বলো, কীভাবে পাবে সেটা optimizer সামলাবে।",
  recall: {
    q: " Cost-Based Optimizer কীভাবে কাজ করে?",
    qen: "How does a Cost-Based Optimizer work?",
    a: "একাধিক execution plan বিবেচনা করে, প্রতিটির cost (CPU, I/O) অনুমান করে, সবচেয়ে কম cost-এর plan বেছে নেয়।",
    aen: "Considers multiple execution plans, estimates cost (CPU, I/O) for each, selects the lowest-cost plan."
  },
  story: `<p class="scene-setting">তুমি GPS দিয়ে গন্তব্যে যাচ্ছো। GPS তিনটি রাস্তা দেখায় — হাইওয়ে (দ্রুত কিন্তু দীর্ঘ), শর্টকাট (ছোট কিন্তু ট্রাফিক), রিং রোড (বেশি দূর কিন্তু smooth)। GPS ট্রাফিক, দূরত্ব, সময় হিসাব করে সেরা রাস্তা বেছে নেয়। ডাটাবেসের Query Optimizer ঠিক তেমন — একাধিক পথ বিবেচনা করে, cost হিসাব করে, সেরা plan বেছে নেয়।</p>
<p class="scene-setting en">You're navigating with GPS. It shows three routes — highway (fast but long), shortcut (short but traffic), ring road (longer but smooth). GPS calculates traffic, distance, time, picks the best. The Query Optimizer works similarly — considers multiple paths, calculates cost, selects the best plan.</p>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>Query Optimization Steps:</strong><br>
১. <strong>Parse:</strong> SQL text → parse tree (syntax check)<br>
২. <strong>Logical Plan:</strong> parse tree → relational algebra (relational ops)<br>
৩. <strong>Physical Plan:</strong> relational ops → actual algorithms (scan, join, sort)<br>
৪. <strong>Cost Estimation:</strong> প্রতিটি plan-এর cost অনুমান (statistics থেকে)<br>
৫. <strong>Plan Selection:</strong> সর্বনিম্ন cost-এর plan বেছে নাও</div></div>

<div class="callout info"><span class="co-icon">🔀</span><div><strong>Join Strategies:</strong><br>
<strong>Nested Loop Join:</strong> প্রতিটি বাঁ সারির জন্য ডান টেবিলে খোঁজো। O(n*m)। ছোট টেবিলে OK।<br>
<strong>Hash Join:</strong> বাঁ টেবিলে hash table তৈরি, ডান টেবিল probe। O(n+m)। বড় টেবিলে সেরা।<br>
<strong>Merge Join:</strong> উভয় টেবিল sorted, একসাথে merge। O(n+m)। sorted data-তে দ্রুত।</div></div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Selinger Optimization (১৯৭৯):</strong> Patricia Selinger IBM-এ ১৯৭৯ সালে cost-based optimization-এর ভিত্তি স্থাপন করেছিলেন। তার পেপার "Access Path Selection in a Relational Database Management System" — এটি System R (IBM-এর প্রথম relational DB) এর জন্য ছিল। আজ প্রতিটি modern database MySQL, PostgreSQL, Oracle — Selinger-এর কাঠামো ব্যবহার করে।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>Statistics — Optimizer-এর জ্বালানি:</strong><br>
Optimizer সিদ্ধান্ত নিতে statistics ব্যবহার করে —<br>
<strong>Table size:</strong> কতটা সারি<br>
<strong>Distribution:</strong> প্রতিটি value কতবার আছে (histogram)<br>
<strong>Index cardinality:</strong> কতটা অনন্য মান<br>
<strong>Selectivity:</strong> WHERE clause কতটা ফিল্টার করে<br>
সঠিক statistics = সঠিক plan। ভুল statistics = ভুল plan = slow query। ANALYZE TABLE দিয়ে update করো।</div></div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>Common Optimization Patterns:</strong><br>
<strong>Index hint:</strong> FORCE INDEX — optimizer-কে বাধ্য করো নির্দিষ্ট index ব্যবহার করতে<br>
<strong>Query rewrite:</strong> subquery → JOIN, DISTINCT → GROUP BY<br>
<strong>Partition pruning:</strong> শুধু প্রয়োজনীয় partition পড়ো<br>
<strong>Materialized view:</strong> complex query-র ফল আগেই সংরক্ষণ</div></div>

<div class="verse">إِنَّ مَعَ الْعُسْرِ يُسْرًا</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই কষ্টের সাথেই রয়েছে স্বস্তি।" — কুরআন ৯৪:৬</div>

<p class="scene-setting">এই আয়াত বলে — কষ্টের পরে স্বস্তি আছে। Query optimization-ও তেমন — প্রথমে ধীর query একটি সমস্যা (কষ্ট), কিন্তু EXPLAIN দিয়ে বিশ্লেষণ, index যোগ, rewrite — দ্রুত query (স্বস্তি)। প্রতিটি সমস্যার সমাধান আছে।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> N+1 query problem — Django ORM-এ common। select_related/prefetch_related = optimization। Book ৩৩ (Critical Thinking): Performance debugging = systematic analysis।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">⚡ Query Optimizer: Parse → Plan → Execute</text>
  <rect x="20" y="50" width="100" height="45" rx="8" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="70" y="70" text-anchor="middle" fill="#67e8f9" font-size="8" font-weight="700">SQL Text</text>
  <text x="70" y="85" text-anchor="middle" fill="#7dd3fc" font-size="10">SELECT * ...</text>
  <defs><marker id="arrD8a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="120" y1="72" x2="148" y2="72" stroke="#a855f7" stroke-width="2" marker-end="url(#arrD8a)"/>
  <rect x="150" y="50" width="100" height="45" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
  <text x="200" y="70" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">Parser</text>
  <text x="200" y="85" text-anchor="middle" fill="#fde68a" font-size="10">→ AST tree</text>
  <defs><marker id="arrD8b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="250" y1="72" x2="278" y2="72" stroke="#a855f7" stroke-width="2" marker-end="url(#arrD8b)"/>
  <rect x="280" y="50" width="120" height="45" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="340" y="68" text-anchor="middle" fill="#c084fc" font-size="8" font-weight="700">Optimizer (CBO)</text>
  <text x="340" y="85" text-anchor="middle" fill="#c084fc" font-size="10">cost-based, stats</text>
  <defs><marker id="arrD8c" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/></marker></defs>
  <line x1="400" y1="72" x2="428" y2="72" stroke="#22c55e" stroke-width="2" marker-end="url(#arrD8c)"/>
  <rect x="430" y="50" width="100" height="45" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="480" y="70" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Execute</text>
  <text x="480" y="85" text-anchor="middle" fill="#86efac" font-size="10">→ result rows</text>
  <rect x="120" y="120" width="340" height="110" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
  <text x="290" y="140" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">Execution Plans (cost comparison)</text>
  <rect x="135" y="150" width="150" height="28" rx="4" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
  <text x="210" y="162" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">Plan A: Seq Scan</text>
  <text x="210" y="173" text-anchor="middle" fill="#f87171" font-size="10">cost: 1450.0 ❌ slow</text>
  <rect x="295" y="150" width="150" height="28" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="370" y="162" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">Plan B: Index Scan</text>
  <text x="370" y="173" text-anchor="middle" fill="#22c55e" font-size="10">cost: 8.3 ✓ best</text>
  <text x="290" y="198" text-anchor="middle" fill="#fde68a" font-size="10">Statistics থেকে cost অনুমান:</text>
  <text x="290" y="213" text-anchor="middle" fill="#94a3b8" font-size="10">rows=10000, selectivity=0.01, pages=500</text>
  <text x="290" y="226" text-anchor="middle" fill="#c084fc" font-size="10">Selinger 1979: System R optimization</text>
</svg>
</div>
<div class="svg-caption">চিত্র: Optimizer একাধিক plan তুলনা করে সর্বনিম্ন cost-এর পথ বেছে নেয়।</div>

<div class="code-block"># — SQL: EXPLAIN + Query Rewrite —

  -- Optimizer-এর সিদ্ধান্ত দেখো:
  EXPLAIN (ANALYZE, BUFFERS)
  SELECT u.name, SUM(o.amount) AS total
  FROM users u
  JOIN orders o ON u.id = o.user_id
  GROUP BY u.name;

  -- আউটপুট (খারাপ):
  -- Hash Join (cost=1450..3200 rows=5000)
  --   Seq Scan on orders  ← পুরো টেবিল পড়ছে!
  --   Hash (cost=20..20 rows=100)

  -- সমাধান: index যোগ করো
  CREATE INDEX idx_orders_uid ON orders(user_id);
  ANALYZE orders;  -- statistics আপডেট

  -- এখন plan:
  -- Hash Join (cost=45..120 rows=50)
  --   Index Scan using idx_orders_uid  ← O(log n)

  -- N+1 সমস্যা (Django):
  for u in User.objects.all():       # ❌ N+1 query
      print(u.orders.count())
  User.objects.prefetch_related('orders')  # ✅ 2 query</div>

<div class="secret-box">⚡ <strong>Optimizer = ডাটাবেসের GPS।</strong> Cost-based, statistics-driven। Selinger ১৯৭৯ থেকে আজ পর্যন্ত। কিন্তু optimization শুধু OLTP-এর (transactions) জন্য নয়। যখন মিলিয়ন সারি analyze করতে হয় — reporting, dashboard, ML training — সেখানে দরকার ভিন্ন স্থাপত্য। সেই যাত্রা আসবে পরের দরজায় — data warehousing।</div>`,
  senior: {
    title: "Query Optimization এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">Cost-Based Optimizer</td><td>একাধিক plan → সর্বনিম্ন cost বেছে নেয়</td></tr>
<tr><td class="hl">Nested Loop Join</td><td>O(n*m) — ছোট টেবিলে</td></tr>
<tr><td class="hl">Hash Join</td><td>O(n+m) — বড় টেবিলে সেরা</td></tr>
<tr><td class="hl">Merge Join</td><td>O(n+m) — sorted data-তে</td></tr>
<tr><td class="hl">Selinger ১৯৭৯</td><td>Cost-based optimization-এর ভিত্তি</td></tr>
<tr><td class="hl">Statistics</td><td>histogram, cardinality, selectivity</td></tr>
<tr><td class="hl">EXPLAIN</td><td>execution plan দেখায়</td></tr>
<tr><td class="hl">ANALYZE</td><td>statistics update</td></tr></table>`
  }
});

doors.push({
  num: 9,
  icon: "📈",
  color: "#2dd4bf",
  name: "জ্ঞানের ভাণ্ডার",
  subtitle: "The Knowledge Repository",
  tech: "Data Warehousing — Inmon (1990), Kimball (1996), OLAP vs OLTP, star schema, snowflake, ETL, columnar storage",
  spirit: "হিকমাহ — প্রজ্ঞা, কাঁচামাল থেকে অন্তর্দৃষ্টি তৈরি",
  secret: "Data Warehouse = একটি পৃথক বিশ্লেষণ ডাটাবেস। OLTP = দ্রুত transaction (INSERT/UPDATE)। OLAP = বিশাল query (SUM/COUNT over millions)। দুটি ভিন্ন কাজ, দুটি ভিন্ন স্থাপত্য।",
  recall: {
    q: " OLTP এবং OLAP-এর পার্থক্য কী?",
    qen: "What is the difference between OLTP and OLAP?",
    a: "OLTP = operational, short transactions, INSERT/UPDATE (MySQL app)। OLAP = analytical, large aggregations over millions of rows (data warehouse)।",
    aen: "OLTP = operational, short transactions (MySQL app). OLAP = analytical, large aggregations (data warehouse)."
  },
  story: `<p class="scene-setting">তোমার একটি দোকান। প্রতিদিন হাজার হাজার transaction — বিক্রি, ক্রয়, রিফান্ড। এটি OLTP — fast, short, operational। কিন্তু মাস শেষে তুমি একটি প্রশ্ন করো — "গত ৬ মাসে কোন পণ্য সবচেয়ে বেশি বিক্রি হয়েছে, কোন শাখায়, কোন মাসে?" এটি OLAP — বিশাল query, মিলিয়ন সারি aggregate। OLTP-তে এই query চালালে দোকান আটকে যায়! তাই দরকার একটি পৃথক গুদাম — data warehouse।</p>
<p class="scene-setting en">You have a shop. Thousands of daily transactions — sales, purchases, refunds. This is OLTP — fast, short, operational. But month-end you ask — "Which product sold most in 6 months, which branch, which month?" This is OLAP — massive query, aggregating millions of rows. Running this on OLTP would freeze the shop! So you need a separate warehouse — data warehouse.</p>

<div class="callout info"><span class="co-icon">📊</span><div><strong>OLTP vs OLAP:</strong><br>
<strong>OLTP:</strong> INSERT, UPDATE, DELETE। short, frequent। normalized। row-based। MySQL, PostgreSQL।<br>
<strong>OLAP:</strong> SELECT, aggregate। long, infrequent। denormalized। column-based। Snowflake, BigQuery, Redshift।</div></div>

<div class="callout info"><span class="co-icon">⭐</span><div><strong>Star Schema (Kimball ১৯৯৬):</strong><br>
<center>একটি fact table (বিক্রয়) + একাধিক dimension table (পণ্য, সময়, শাখা)।</center><br>
<strong>Fact Table:</strong> পরিমাপযোগ্য ডেটা — amount, quantity। বিশাল, বিলিয়ন সারি।<br>
<strong>Dimension Table:</strong> context — product_name, month_name, branch_city। ছোট, ধীরে বদলায়।<br>
<strong>Star:</strong> fact কেন্দ্রে, dimension চারপাশে — তারার মতো।</div></div>

<div class="callout info"><span class="co-icon">❄️</span><div><strong>Snowflake Schema:</strong> Star + dimension-ও normalized। বেশি efficient storage কিন্তু বেশি JOIN। Star সহজ, Snowflake কম্প্যাক্ট।</div></div>

<div class="callout info"><span class="co-icon">🔄</span><div><strong>ETL (Extract, Transform, Load):</strong><br>
<strong>Extract:</strong> OLTP থেকে ডেটা টানো (MySQL → staging)<br>
<strong>Transform:</strong> পরিষ্কার করো, join করো, aggregate করো, denormalize করো<br>
<strong>Load:</strong> data warehouse-এ রাখো (BigQuery, Redshift)<br>
প্রতি রাতে বা real-time (CDC — Change Data Capture)</div></div>

<div class="callout info"><span class="co-icon">📋</span><div><strong>Columnar Storage:</strong><br>
Row-based (OLTP): (id, name, age, city) সারি বাঁচায়। একটি সারি পড়ো → দ্রুত।<br>
Column-based (OLAP): প্রতিটি কলাম আলাদাভাবে বাঁচায়। SUM(age) → শুধু age কলাম পড়ো। মিলিয়ন সারিতেও দ্রুত। কম্প্রেশন ভালো — একই ধরনের ডেটা একসাথে।</div></div>

<div class="verse">إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"নিশ্চয়ই এতে বুদ্ধিমানদের জন্য নিদর্শন রয়েছে।" — কুরআন ৩:১৯০</div>

<p class="scene-setting">এই আয়াত বলে — প্রতিটি তথ্যে বুদ্ধিমানদের জন্য নিদর্শন আছে। Data warehouse-ও তেমন — কাঁচামাল (OLTP ডেটা) থেকে অন্তর্দৃষ্টি (analytics) তৈরি। বিলিয়ন ট্রানজেকশন থেকে একটি সত্য: "শীতে কফি বেশি বিক্রি হয়।" এটাই data-থেকে-জ্ঞানের যাত্রা।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>Book ৪ (সিস্টেম ডিজাইন):</strong> Reporting system — data warehouse এর উপরে। Book ৩৪ (Statistics): A/B testing — analytics data থেকে। LedgerPilot: reporting/dashboard = OLAP queries।</div></div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">📈 Data Warehouse: Star Schema + ETL</text>
  <rect x="20" y="50" width="90" height="60" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="65" y="70" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">OLTP</text>
  <text x="65" y="85" text-anchor="middle" fill="#86efac" font-size="10">MySQL/PG</text>
  <text x="65" y="98" text-anchor="middle" fill="#94a3b8" font-size="10">transactional</text>
  <defs><marker id="arrD9a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24"/></marker></defs>
  <line x1="110" y1="80" x2="138" y2="80" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrD9a)"/>
  <text x="124" y="73" text-anchor="middle" fill="#fcd34d" font-size="10">ETL</text>
  <rect x="140" y="50" width="90" height="60" rx="6" fill="#451a0a" stroke="#fbbf24" stroke-width="2"/>
  <text x="185" y="70" text-anchor="middle" fill="#fcd34d" font-size="8" font-weight="700">Transform</text>
  <text x="185" y="85" text-anchor="middle" fill="#fde68a" font-size="10">clean, agg</text>
  <text x="185" y="98" text-anchor="middle" fill="#fde68a" font-size="10">dimension</text>
  <defs><marker id="arrD9b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24"/></marker></defs>
  <line x1="230" y1="80" x2="258" y2="80" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrD9b)"/>
  <rect x="260" y="50" width="120" height="60" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="320" y="70" text-anchor="middle" fill="#4ade80" font-size="8" font-weight="700">Warehouse</text>
  <text x="320" y="85" text-anchor="middle" fill="#86efac" font-size="10">columnar storage</text>
  <text x="320" y="98" text-anchor="middle" fill="#86efac" font-size="10">Redshift, BigQuery</text>
  <text x="80" y="140" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">⭐ Star Schema</text>
  <rect x="230" y="135" width="100" height="45" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="2"/>
  <text x="280" y="153" text-anchor="middle" fill="#7dd3fc" font-size="8" font-weight="700">fact_sales</text>
  <text x="280" y="168" text-anchor="middle" fill="#94a3b8" font-size="10">amt, qty, date_id</text>
  <rect x="60" y="160" width="80" height="35" rx="5" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="100" y="175" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">dim_date</text>
  <text x="100" y="187" text-anchor="middle" fill="#c084fc" font-size="10">year, month</text>
  <rect x="60" y="200" width="80" height="35" rx="5" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="100" y="215" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">dim_product</text>
  <text x="100" y="227" text-anchor="middle" fill="#c084fc" font-size="10">name, category</text>
  <rect x="420" y="160" width="80" height="35" rx="5" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="460" y="175" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">dim_store</text>
  <text x="460" y="187" text-anchor="middle" fill="#c084fc" font-size="10">location</text>
  <rect x="420" y="200" width="80" height="35" rx="5" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
  <text x="460" y="215" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">dim_customer</text>
  <text x="460" y="227" text-anchor="middle" fill="#c084fc" font-size="10">segment</text>
  <line x1="140" y1="177" x2="228" y2="158" stroke="#475569" stroke-width="1.5"/>
  <line x1="140" y1="217" x2="228" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="420" y1="177" x2="332" y2="158" stroke="#475569" stroke-width="1.5"/>
  <line x1="420" y1="217" x2="332" y2="165" stroke="#475569" stroke-width="1.5"/>
  <text x="490" y="60" fill="#f87171" font-size="10" font-weight="700">Columnar</text>
  <text x="490" y="75" fill="#94a3b8" font-size="10">col1: [1,2,3]</text>
  <text x="490" y="87" fill="#94a3b8" font-size="10">col2: [a,b,c]</text>
  <text x="490" y="100" fill="#f87171" font-size="10">agg = দ্রুত</text>
</svg>
</div>
<div class="svg-caption">চিত্র: OLTP থেকে ETL দিয়ে Warehouse — Star Schema-তে fact ও dimension টেবিল।</div>

<div class="code-block"># — SQL: OLAP Star Schema Query —

  -- fact table: fact_sales (billions of rows)
  -- dim tables: dim_date, dim_product, dim_store

  SELECT
      d.year, d.month,
      p.category,
      SUM(f.amount) AS revenue,
      COUNT(*) AS txn_count
  FROM fact_sales f                    -- কেন্দ্রীয় fact
  JOIN dim_date d    ON f.date_id = d.id
  JOIN dim_product p ON f.product_id = p.id
  JOIN dim_store  s  ON f.store_id = s.id
  WHERE d.year = 2025
    AND s.region = 'Dhaka'
  GROUP BY d.year, d.month, p.category
  HAVING SUM(f.amount) > 100000
  ORDER BY revenue DESC;

  -- Columnar storage-এ SUM(amount):
  -- শুধু amount কলাম পড়ে — row স্ক্যান নয়
  -- বিলিয়ন row → কয়েক সেকেন্ড</div>

<div class="secret-box">📈 <strong>Data Warehouse = জ্ঞানের ভাণ্ডার।</strong> OLTP (operational) থেকে OLAP (analytical) আলাদা। Star schema, columnar storage, ETL pipeline। Inmon-Kimball দুই দর্শন। এখন তুমি সব স্তর জানো — relational model থেকে data warehouse পর্যন্ত। সময় এসেছে সব একত্রিত করার — একটি query-র সম্পূর্ণ যাত্রা।</div>`,
  senior: {
    title: "Data Warehousing এক নজরে",
    body: `<table class="kv-table"><tr><th>ধারণা</th><th>বিবরণ</th></tr>
<tr><td class="hl">OLTP</td><td>operational — INSERT/UPDATE, short, frequent</td></tr>
<tr><td class="hl">OLAP</td><td>analytical — aggregate, long, infrequent</td></tr>
<tr><td class="hl">Star Schema</td><td>Kimball 1996 — fact table + dimension tables</td></tr>
<tr><td class="hl">Snowflake</td><td>Star + normalized dimensions</td></tr>
<tr><td class="hl">ETL</td><td>Extract → Transform → Load</td></tr>
<tr><td class="hl">Columnar</td><td>column-based storage — aggregation-এ সেরা</td></tr>
<tr><td class="hl">Inmon</td><td>top-down — normalized warehouse</td></tr>
<tr><td class="hl">Kimball</td><td>bottom-up — dimensional marts</td></tr></table>`
  }
});

doors.push({
  num: 10,
  icon: "🏛️",
  color: "#2dd4bf",
  name: "উপাত্তের গুরু",
  subtitle: "The Synthesis",
  tech: "One Query's Complete Journey — SQL text to result, through parser, optimizer, executor, storage, index, transaction",
  spirit: "তাওহিদ — একত্ব, সব স্তর এক ডাটাবেসের অংশ",
  secret: "তুমি যখন SELECT * FROM users WHERE email = 'test@test.com' লেখো — নয়টি দরজা একসাথে কাজ করে। একটি query-র ভেতর পুরো ডাটাবেস।",
  recall: {
    q: " একটি SQL query-র প্রথম ধাপ কী?",
    qen: "What is the first step of a SQL query?",
    a: "Parse — SQL text কে parse tree-তে রূপান্তর করা হয়। syntax check হয়। তারপর optimizer সেরা plan বেছে নেয়।",
    aen: "Parse — SQL text is converted into a parse tree. Syntax is checked. Then the optimizer selects the best plan."
  },
  story: `<p class="scene-setting">তুমি ব্রাউজারে Django admin-এ লগইন করলে। ব্যাকএন্ডে একটি query ছুটলো: SELECT * FROM users WHERE email = 'admin@test.com'। মাত্র ২ মিলিসেকেন্ড। কিন্তু এই ২ms-এ কী ঘটে? চলো, একটি query-র সম্পূর্ণ যাত্রা দেখি — নয়টি দরজার মধ্য দিয়ে।</p>
<p class="scene-setting en">You log into Django admin. Backend fires a query: SELECT * FROM users WHERE email = 'admin@test.com'. Only 2 milliseconds. But what happens in these 2ms? Let's follow one query's complete journey — through nine doors.</p>

<div class="callout info"><span class="co-icon">📝</span><div><strong>ধাপ ১ — Parse (দরজা ২):</strong><br>
SQL text → parse tree। Syntax check — বানান ঠিক? কমা ঠিক?<br>
SELECT, FROM, WHERE — প্রতিটি keyword চেনা যায়।</div></div>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>ধাপ ২ — Optimize (দরজা ৮):</strong><br>
Optimizer একাধিক plan বিবেচনা করে:<br>
Plan A: full table scan — ১০ লক্ষ সারি → ১০০০ms<br>
Plan B: email index lookup → ৩-৪ tree step → ১ms<br>
Cost: Plan B < Plan A। Plan B বেছে নাও।</div></div>

<div class="callout info"><span class="co-icon">🗂️</span><div><strong>ধাপ ৩ — Index Lookup (দরজা ৩):</strong><br>
email index-এ B-tree traverse। root → internal → leaf। leaf-এ pointer: row ৪৫২৩।</div></div>

<div class="callout info"><span class="co-icon">🔐</span><div><strong>ধাপ ৪ — Transaction Check (দরজা ৪):</strong><br>
এই সারিতে কেউ লিখছে কি? MVCC চেক। যদি অন্য transaction লিখছে — পুরোনো version দেখাও। readers block না।</div></div>

<div class="callout info"><span class="co-icon">📊</span><div><strong>ধাপ ৫ — Storage Read (দরজা ১ + ৭):</strong><br>
row ৪৫২৩ ডিস্কের কোথায়? page table দেখো। page ৪২, offset ২৩। OS kernel ডিস্ক থেকে page পড়ে। buffer pool-এ cache করে।</div></div>

<div class="callout info"><span class="co-icon">🌍</span><div><strong>ধাপ ৬ — Distributed Check (দরজা ৭):</strong><br>
যদি sharded database হয় — hash(email) % N → কোন shard? সেই shard-এ query পাঠাও।</div></div>

<div class="callout info"><span class="co-icon">📐</span><div><strong>ধাপ ৭ — Schema Check (দরজা ৫):</strong><br>
result-এ প্রতিটি column সঠিক type? constraint মানা? normalized — একটি tuple, সব attribute সঠিক।</div></div>

<div class="callout info"><span class="co-icon">📤</span><div><strong>ধাপ ৮ — Return Result:</strong><br>
সারি পাওয়া গেছে: (id: ১, email: 'admin@test.com', name: 'Admin', role: 'superuser')। ব্রাউজারে পাঠাও। ব্যবহারকারী লগইন সফল।<br>
<strong>মোট সময়:</strong> ~২ms। ১০ লক্ষ সারির মধ্যে সঠিক সারি খুঁজে বের করা।</div></div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯</div><div class="sc-label">DB subsystems</div></div>
<div class="stat-card"><div class="sc-num">৩-৪</div><div class="sc-label">B-tree steps</div></div>
<div class="stat-card"><div class="sc-num">~২ms</div><div class="sc-label">মোট সময়</div></div>
<div class="stat-card"><div class="sc-num">১০ লক্ষ</div><div class="sc-label">সারি স্ক্যান ছাড়া</div></div>
</div>

<div class="callout info"><span class="co-icon">📡</span><div><strong>একটি query-র দৃষ্টিকোণ থেকে:</strong><br>
তুমি (query) ডাটাবেসে প্রবেশ করো → parser তোমাকে বোঝে → optimizer তোমার রাস্তা ঠিক করে → index তোমাকে দ্রুত নিয়ে যায় → storage থেকে ডেটা আসে → transaction নিশ্চিত করে consistency → result ফিরে যায়। নয়টি দরজা — এক query।</div></div>

<div class="verse">وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ</div>
<div style="font-size:.85rem;color:var(--ink-dim);text-align:center;margin-bottom:1rem">"এবং তাঁর কাছেই রয়েছে অদৃশ্যের চাবিকাঠি, যা তিনি ছাড়া কেউ জানে না।" — কুরআন ৬:৫৯</div>

<p class="scene-setting">এই আয়াত বলে — আল্লাহর কাছে সব তথ্যের চাবি আছে। ডাটাবেসও তেমন — প্রতিটি তথ্যের একটি চাবি (index) আছে যা দিয়ে সেটি খুঁজে পাওয়া যায়। Codd-এর ১৯৭০ সালের relational model থেকে আজকের distributed, NoSQL, data warehouse — ৫৫ বছরের যাত্রা। এবং তুমি এখন প্রতিটি স্তর বোঝো।</p>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>সম্পূর্ণ লাইব্রেরি সংযোগ:</strong> Book ২ (DSA) — B-tree, hash, heap সব database index-এ ব্যবহৃত। Book ৪ (সিস্টেম ডিজাইন) — database সিস্টেম ডিজাইনের কেন্দ্র। Book ৩৫ (ডিস্ট্রিবিউটেড) — CAP, replication, sharding। Book ৩৭ (Networks) — DB connection protocol। Book ৩৮ (OS) — disk I/O, buffer pool, file system। LedgerPilot MySQL + Ipractus PostgreSQL — প্রতিদিন এই যন্ত্র ব্যবহার করছো।</div></div>

<div class="checklist">
<li>📊 <code>EXPLAIN SELECT ...</code> — query plan দেখো</li>
<li>📊 <code>SHOW INDEX FROM table</code> — index তালিকা</li>
<li>🔍 <code>ANALYZE TABLE table</code> — statistics update</li>
<li>📖 "Designing Data-Intensive Applications" (Kleppmann) — সেরা DB book</li>
<li>🔧 Django: <code>print(queryset.query)</code> — ORM SQL দেখো</li>
<li>🔧 PostgreSQL: <code>pg_stat_statements</code> — slow query analysis</li>
</div>

<div class="svg-diagram">
<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <text x="290" y="25" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="900">🏛️ একটি Query-র সম্পূর্ণ যাত্রা</text>
  <rect x="10" y="50" width="85" height="40" rx="6" fill="#1e3a5f" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="52" y="68" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="700">১. Parse</text>
  <text x="52" y="80" text-anchor="middle" fill="#7dd3fc" font-size="10">SQL→AST</text>
  <defs><marker id="arrD10a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="95" y1="70" x2="113" y2="70" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrD10a)"/>
  <rect x="115" y="50" width="85" height="40" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="157" y="68" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700">২. Optimize</text>
  <text x="157" y="80" text-anchor="middle" fill="#fde68a" font-size="10">best plan</text>
  <defs><marker id="arrD10b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="200" y1="70" x2="218" y2="70" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrD10b)"/>
  <rect x="220" y="50" width="85" height="40" rx="6" fill="#0f172a" stroke="#22c55e" stroke-width="1.5"/>
  <text x="262" y="68" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="700">৩. Index</text>
  <text x="262" y="80" text-anchor="middle" fill="#86efac" font-size="10">B-tree</text>
  <defs><marker id="arrD10c" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="305" y1="70" x2="323" y2="70" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrD10c)"/>
  <rect x="325" y="50" width="85" height="40" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
  <text x="367" y="68" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="700">৪. MVCC</text>
  <text x="367" y="80" text-anchor="middle" fill="#c084fc" font-size="10">visibility</text>
  <defs><marker id="arrD10d" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/></marker></defs>
  <line x1="410" y1="70" x2="428" y2="70" stroke="#a855f7" stroke-width="1.5" marker-end="url(#arrD10d)"/>
  <rect x="430" y="50" width="85" height="40" rx="6" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
  <text x="472" y="68" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="700">৫. Storage</text>
  <text x="472" y="80" text-anchor="middle" fill="#fca5a5" font-size="10">buffer pool</text>
  <defs><marker id="arrD10e" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#22c55e"/></marker></defs>
  <line x1="472" y1="90" x2="472" y2="108" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrD10e)"/>
  <rect x="180" y="115" width="220" height="40" rx="6" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="290" y="133" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="700">৬. Result → User</text>
  <text x="290" y="148" text-anchor="middle" fill="#86efac" font-size="10">rows returned ✓</text>
  <rect x="30" y="175" width="520" height="60" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-width="1.5"/>
  <text x="290" y="193" text-anchor="middle" fill="#67e8f9" font-size="8" font-weight="700">55 বছরের অগ্রগতি এক কোয়েরিতে</text>
  <text x="120" y="210" text-anchor="middle" fill="#7dd3fc" font-size="10">Codd 1970</text>
  <text x="220" y="210" text-anchor="middle" fill="#fde68a" font-size="10">Selinger 1979</text>
  <text x="320" y="210" text-anchor="middle" fill="#c084fc" font-size="10">MVCC 1981</text>
  <text x="420" y="210" text-anchor="middle" fill="#fca5a5" font-size="10">Stonebraker PG</text>
  <text x="290" y="225" text-anchor="middle" fill="#94a3b8" font-size="10">→ আজকের distributed + columnar + vector</text>
</svg>
</div>
<div class="svg-caption">চিত্র: একটি query ৬টি স্তর অতিক্রম করে — Parse → Optimize → Index → MVCC → Storage → Result।</div>

<div class="code-block">— Trace: SELECT এর সম্পূর্ণ যাত্রা —

  -- ব্যবহারকারীর query:
  SELECT name FROM users WHERE id = 42;

  -- ১. Parser: SQL → parse tree
  --    {SelectStmt: cols=[name], from=users, where=(id=42)}

  -- ২. Optimizer: cost comparison
  --    Plan A: Seq Scan (cost=145)
  --    Plan B: Index Scan (cost=8.3) ← নির্বাচিত

  -- ৩. Index Engine: B-tree traverse
  --    root[50] → left[30] → right[42] → tuple pointer

  -- ৪. Transaction Manager (MVCC):
  --    xmin/xmax check — এই tuple কি দৃশ্যমান?

  -- ৫. Storage Engine: page → buffer pool
  --    page #42 মেমরিতে আনো → row পড়ো

  -- ৬. Result: "Karim" ব্যবহারকারীকে ফেরত দাও

  -- ⏱️ মোট সময়: 0.034 ms
  -- ৫৫ বছরের গবেষণা — এক মুহূর্তে</div>

<div class="secret-box">🏛️ <strong>উপাত্তের ভল্ট = নয়টি দরজার সমষ্টি।</strong> Relational Model (দরজা ১) → SQL (দরজা ২) → Indexing (দরজা ৩) → ACID (দরজা ৪) → Normalization (দরজা ৫) → NoSQL (দরজা ৬) → Distributed (দরজা ৭) → Optimization (দরজা ৮) → Data Warehouse (দরজা ৯)। Codd-এর ১৯৭০ সালের relational model থেকে আজকের distributed, NoSQL, columnar warehouse — ৫৫ বছরের যাত্রা। এবং তুমি এখন প্রতিটি স্তর বোঝো। LedgerPilot MySQL, Ipractus PostgreSQL — এখন তুমি জানো সেগুলোর ভেতরে কী চলছে। এটাই উপাত্তের ভল্ট — সারি থেকে অর্থ, query থেকে জ্ঞান।</div>`,
  senior: {
    title: "One Query's Complete Journey",
    body: `<table class="kv-table"><tr><th>ধাপ</th><th>কী ঘটে</th><th>সাবসিস্টেম</th></tr>
<tr><td class="hl">১. Parse</td><td>SQL → parse tree</td><td>Parser</td></tr>
<tr><td class="hl">২. Optimize</td><td>best plan বেছে নাও</td><td>Optimizer</td></tr>
<tr><td class="hl">৩. Index Lookup</td><td>B-tree traverse</td><td>Index engine</td></tr>
<tr><td class="hl">৪. Transaction</td><td>MVCC visibility check</td><td>Transaction manager</td></tr>
<tr><td class="hl">৫. Storage Read</td><td>page → buffer pool</td><td>Storage engine</td></tr>
<tr><td class="hl">৬. Distributed</td><td>shard routing</td><td>Distribution layer</td></tr>
<tr><td class="hl">৭. Schema</td><td>type + constraint check</td><td>Catalog</td></tr>
<tr><td class="hl">৮. Return</td><td>result → client</td><td>Protocol</td></tr></table>
<p style="margin-top:1rem"><strong>মোট সময়:</strong> ~২ms | <strong>সাবসিস্টেম:</strong> ৯টি | <strong>B-tree steps:</strong> ৩-৪</p>`
  }
});
