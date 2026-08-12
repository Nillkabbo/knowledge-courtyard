// ════════════════════════════════════════
// CITY BUILDER'S CODEX — DOORS 1-4
// 1. Scaling  2. Load Balancing  3. Caching  4. Microservices
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: SCALING FUNDAMENTALS ══
doors.push({
  num:1, icon:"🧱", color:"#ffc857", name:"ভিত্তি রক্ষকের কারখানা",
  subtitle:"The Foundation Mason's Yard", tech:"Scaling Fundamentals (Vertical vs Horizontal, State)",
  spirit:"তাওসিয়া — প্রশস্ত করা, প্রসারিত করা",
  secret:"একটা বাড়ি বড় করার দুটো উপায় — উপরে তলা যোগ (vertical), পাশে নতুন বাড়ি (horizontal)। সার্ভারেও তাই — শক্তিশালী মেশিন বা অনেক মেশিন। stateless সহজে পাশে যায়, stateful কঠিন।",
  recall:{
    q:"ভিত্তি রক্ষক কেন সবসময় এক বাড়ি উঁচু করেন না, মাঝে মাঝে নতুন বাড়ি বানান?",
    qen:"Why doesn't the foundation mason always build one house taller, sometimes building new houses beside it?",
    a:"কারণ এক বাড়ি উঁচু করার সীমা আছে — ভিত্তি ধসে যায়। অনেক বাড়ি সস্তা, নমনীয়, একটা ধসলে বাকিরা থাকে। Vertical scaling-এ সীমা, horizontal scaling-এ প্রসার। stateless horizontal-এর জন্য তৈরি।",
    aen:"Because one house can only rise so far — the foundation gives way. Many houses are cheaper, flexible, one falling doesn't doom the rest. Vertical scaling has limits; horizontal has reach. Stateless is built for horizontal."
  },
  story:`
<p class="scene-setting">প্রথম স্থান। ভিত্তি রক্ষকের কারখানা। মাটির স্তূপ, ইটের সারি, দড়ির দাগ। উস্তাদ বাসির দাঁড়িয়ে আছেন — হাতে পরিমাপের কাঠি, চোখে স্থপতির দৃষ্টি। একজন শিষ্য এলেন: "গ্রামে মানুষ বাড়ছে। এক বাড়িতে সব কুলাচ্ছে না। উপরে আর তলা যোগ করি?" বাসির হাসলেন। "এক তলায় সীমা আছে। ভিত্তি ধসে যাবে। ভাবো — উপরে না, পাশে।"</p>
<p class="scene-setting en">The first place. The Foundation Mason's yard. Piles of earth, rows of brick, chalk lines. Ustad Baseer stands — measuring rod in hand, the architect's gaze. A student came: "The village is growing. One house can't hold everyone. Shall I add another floor?" Baseer smiled. "One floor has a limit. The foundation will crack. Think — not up, but beside."</p>

<div class="dialogue">তুমি একটা অ্যাপ বানিয়েছ। একটা সার্ভারে চলছে। ইউজার বাড়ছে — সার্ভার হাঁপাচ্ছে। এখন প্রশ্ন: কীভাবে বড় করবে? দুটো রাস্তা — একটা সহজ মনে হয়, একটা সত্যিকারের সমাধান।</div>
<div class="dialogue en">"You built an app. It runs on one server. Users grow — the server pants. Now the question: how to grow? Two roads — one seems easy, one is the real answer."</div>

<div class="diagram">
  <div class="diag-title">দুই ধরনের Scaling — উপরে নাকি পাশে?</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowAmber" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#ffc857"/></marker>
      <marker id="arrowTeal" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#3dd6c4"/></marker>
    </defs>
    <!-- VERTICAL -->
    <text class="lbl-sm" x="140" y="22" fill="#ff6b35" style="font-size:13px">VERTICAL — উপরে (Scale Up)</text>
    ${[0,1,2,3].map(i=>`<rect class="${i===3?'cell-hot':'cell'}" x="${110}" y="${180-i*36}" width="60" height="32" rx="3" style="${i===3?'fill:rgba(255,107,53,.3)':''}"/><text class="lbl-sm" x="140" y="${198-i*36}">${i===3?'⚠ সীমা':('তলা '+['১','২','৩'][i])}</text>`).join('')}
    <text class="lbl-sm" x="140" y="208" fill="#ff6b35">এক মেশিন, বড় করো — দ্রুত কিন্তু সীমিত</text>

    <!-- HORIZONTAL -->
    <text class="lbl-sm" x="420" y="22" fill="#3dd6c4" style="font-size:13px">HORIZONTAL — পাশে (Scale Out)</text>
    ${[0,1,2,3,4].map(i=>`<rect class="cell-good" x="${280+i*32}" y="${150}" width="26" height="34" rx="3" style="fill:rgba(82,196,26,.22)"/><text class="lbl-sm" x="${293+i*32}" y="${170}" style="font-size:9px">S${i+1}</text>`).join('')}
    <text class="lbl-sm" x="420" y="205" fill="#52c41a">অনেক মেশিন — সস্তা, নমনীয়, অসীম প্রসার</text>
    <line class="edge-cyan" x1="140" y1="100" x2="280" y2="130"/>
    <text class="lbl-sm" x="210" y="115" text-anchor="middle" fill="#9290a8">উভয়েই কাজে লাগে</text>
  </svg>
  <div class="diag-cap">শুরুতে vertical সহজ। কিন্তু যখন সত্যিকারের scale দরকার — horizontal।</div>
</div>

<div class="code-block"># ── STEP 1: Scaling — vertical vs horizontal ──
# The fundamental decision in system design.

# 1. VERTICAL SCALING (Scale Up):
#    Make ONE server more powerful: 4 CPU → 16 CPU → 64 CPU
#    ✅ Easy: no code changes needed
#    ✅ Fast: same machine
#    ❌ Limit: even the biggest machine runs out
#    ❌ SPOF: single point of failure
#    ❌ Cost: top-tier machines are exponentially expensive

# 2. HORIZONTAL SCALING (Scale Out):
#    Add MORE servers: 1 → 10 → 100 → 1000
#    ✅ Flexible: add as many as needed
#    ✅ Cheap: commodity hardware
#    ✅ Fault-tolerant: one dies, others continue
#    ❌ Complex: must be stateless, needs load balancer
#    ❌ Data management: where is the data? where are sessions?

# STATEFUL vs STATELESS — THE KEY QUESTION:

# STATEFUL: server remembers (login, cart, page state)
#   → Can't send to any server (wrong server = no context)
#   → Horizontal scaling is HARD

# STATELESS: server remembers NOTHING (all info in request or DB)
#   → Any server can handle any request
#   → Horizontal scaling is EASY

# RULE: make it stateless → scale horizontally
#       keep state OUTSIDE: database, cache, client (JWT)

# WHEN TO SCALE (signals):
# → CPU average > 70%
# → Memory > 80%
# → Disk I/O at limit
# → Latency increasing
# → Queue building up
# → Scale BEFORE users notice

# THE SCALING CUBE (3 axes):
# X-axis: clone (horizontal) — N identical servers behind load balancer
# Y-axis: split by function (microservices) — separate services
# Z-axis: split by data (sharding) — partition data across servers

# PYTHON (capacity planning):
def capacity_plan(current_rps, target_rps, rps_per_server):
    """Calculate how many servers needed."""
    servers_needed = target_rps / rps_per_server
    current_servers = current_rps / rps_per_server
    new_servers = servers_needed - current_servers

    return {
        "current_servers": current_servers,
        "needed_servers": servers_needed,
        "add_servers": new_servers,
        "headroom": rps_per_server * servers_needed - target_rps,
    }

plan = capacity_plan(current_rps=1000, target_rps=10000, rps_per_server=500)
print(f"Servers now: {plan['current_servers']}")
print(f"Servers needed: {plan['needed_servers']}")
print(f"Add: {plan['add_servers']} servers")
print(f"Headroom: {plan['headroom']} RPS spare")</div>

<div class="code-block"># ── STEP 2: Load balancing algorithms ──
# Distributing traffic across multiple servers.

# LOAD BALANCING ALGORITHMS:

algorithms = {
    "Round Robin": {
        "how": "Send to server 1, then 2, then 3, repeat",
        "pros": "Simple, fair distribution",
        "cons": "Doesn't consider server load",
        "use": "Uniform servers, simple setups",
    },
    "Least Connections": {
        "how": "Send to server with fewest active connections",
        "pros": "Balances actual load",
        "cons": "Slightly more overhead to track",
        "use": "Variable request times",
    },
    "IP Hash": {
        "how": "Hash client IP → always same server (sticky)",
        "pros": "Session affinity (stateful apps)",
        "cons": "Adding/removing servers redistributes all",
        "use": "When you NEED sticky sessions",
    },
    "Weighted Round Robin": {
        "how": "More powerful servers get more requests",
        "pros": "Heterogeneous server farms",
        "cons": "Must configure weights manually",
        "use": "Mixed server sizes (old + new)",
    },
    "Least Response Time": {
        "how": "Send to fastest-responding server",
        "pros": "Best user experience",
        "cons": "Measures latency, not actual load",
        "use": "Latency-sensitive applications",
    },
    "Random": {
        "how": "Pick a random server",
        "pros": "Zero overhead",
        "cons": "Can be uneven",
        "use": "Very large clusters (random ≈ uniform)",
    },
}

for algo, details in algorithms.items():
    print(f"\n{algo}:")
    for key, value in details.items():
        print(f"  {key}: {value}")

# HEALTH CHECKS:
# → Load balancer pings each server periodically
# → If server doesn't respond → removed from rotation
# → If server recovers → added back
# → Types: HTTP health check, TCP check, custom script

# L4 vs L7 LOAD BALANCING:
# Layer 4 (transport): routes by IP/port (fast, dumb)
#   → Nginx stream, AWS NLB, HAProxy in TCP mode
# Layer 7 (application): routes by URL, headers, cookies (smart)
#   → Nginx http, AWS ALB, HAProxy in HTTP mode
#   → Can do path-based routing: /api → backend, /static → CDN

# PYTHON (simple load balancer simulation):
import random

class LoadBalancer:
    def __init__(self, servers):
        self.servers = {s: 0 for s in servers}  # server → connection count
        self.healthy = set(servers)

    def request(self, algorithm="least_connections"):
        if not self.healthy:
            return "ERROR: No healthy servers"

        if algorithm == "round_robin":
            server = self._round_robin()
        elif algorithm == "least_connections":
            server = min(self.healthy, key=lambda s: self.servers[s])
        elif algorithm == "random":
            server = random.choice(list(self.healthy))

        self.servers[server] += 1
        return f"→ Routed to {server} (conns: {self.servers[server]})"

    def _round_robin(self):
        return min(self.healthy, key=lambda s: self.servers[s])

    def health_check(self, server, is_healthy):
        if is_healthy:
            self.healthy.add(server)
        else:
            self.healthy.discard(server)

lb = LoadBalancer(["srv-1", "srv-2", "srv-3"])
for _ in range(10):
    print(lb.request("least_connections"))
lb.health_check("srv-2", False)  # srv-2 goes down
print("srv-2 removed. Next requests:")
for _ in range(5):
    print(lb.request("least_connections"))</div>

<div class="code-block"># ── STEP 3: Caching strategies ──
# The #1 performance optimization in system design.

# CACHE STRATEGIES:

strategies = {
    "CACHE-ASIDE (Lazy Loading)": {
        "how": "App checks cache → miss → read DB → fill cache",
        "pros": "Only requested data is cached (memory efficient)",
        "cons": "Cache miss = slow (DB read)",
        "use": "Most common pattern (Redis + Django/Flask)",
    },
    "WRITE-THROUGH": {
        "how": "Write to cache AND database simultaneously",
        "pros": "Cache always consistent with DB",
        "cons": "Write latency (two writes)",
        "use": "Write-heavy apps needing consistency",
    },
    "WRITE-BEHIND (Write-Back)": {
        "how": "Write to cache → async write to DB later",
        "pros": "Fast writes (cache only)",
        "cons": "Data loss risk if cache crashes before DB write",
        "use": "Logging, analytics (tolerant of small data loss)",
    },
    "CACHE-EVICTION POLICIES": {
        "LRU (Least Recently Used)": "Evict oldest unused entry",
        "LFU (Least Frequently Used)": "Evict least-accessed entry",
        "FIFO (First In First Out)": "Evict oldest entry",
        "TTL (Time To Live)": "Auto-expire after N seconds",
    },
}

for strategy, details in strategies.items():
    print(f"\n{strategy}:")
    if isinstance(details, dict):
        for key, value in details.items():
            print(f"  {key}: {value}")
    else:
        print(f"  {details}")

# CACHE HIERARCHY:
# Browser cache → CDN → API gateway cache → Application cache (Redis) → Database
# Each layer is faster than the one below it

# CDN (Content Delivery Network):
# → Edge servers worldwide cache static content (images, JS, CSS)
# → User in Asia → Asian edge server (not US origin)
# → Reduces latency from 200ms to 20ms
# → Providers: Cloudflare, CloudFront, Fastly

# PYTHON (cache-aside pattern with Redis):
import redis
import json

r = redis.Redis(host='localhost', port=6379, db=0)

def get_user_cached(user_id):
    """Cache-aside pattern: check cache → miss → DB → fill cache."""
    cache_key = f"user:{user_id}"

    # 1. Check cache:
    cached = r.get(cache_key)
    if cached:
        return json.loads(cached)  # Cache HIT!

    # 2. Cache MISS → read from database:
    user = User.objects.get(id=user_id)

    # 3. Fill cache (with TTL):
    r.setex(cache_key, 3600, json.dumps(user.to_dict()))  # 1 hour TTL

    return user.to_dict()

# CACHE STAMPEDE PREVENTION:
# When cache expires → 1000 requests hit DB simultaneously
# Solution: lock + early refresh, or probabilistic early expiration

# WHEN TO CACHE:
# ✅ Read-heavy data that changes infrequently
# ✅ Expensive computations (ML inference results)
# ✅ Database query results
# ❌ Data that changes constantly (cache invalidation nightmare)
# ❌ Data that must be real-time (stock prices, messages)</div>

<div class="code-block"># ── STEP 4: Microservices — when and how ──
# Decomposing the monolith.

# MONOLITH vs MICROSERVICES:

comparison = """
MONOLITH:
  → All code in one deployment
  → One database
  → Simple to develop, test, deploy
  → Scaling: clone the whole thing
  ✅ Good for: small teams, early stage, simple domains
  ❌ Bad for: large teams, complex domains, independent scaling

MICROSERVICES:
  → Each service: own codebase, own database, own deployment
  → Communicate via APIs (REST, gRPC) or events (Kafka)
  → Scale independently
  ✅ Good for: large teams, complex domains, independent scaling
  ❌ Bad for: small teams (overhead kills productivity)

WHEN TO MOVE TO MICROSERVICES:
  → Team > 8 people (communication overhead in monolith)
  → Different parts need different scaling
  → Deployment conflicts (team A blocks team B)
  → Clear domain boundaries exist

WHEN NOT TO:
  → Small team (< 5 people)
  → Early stage startup (move fast, fix later)
  → No clear service boundaries
  → "Distributed monolith" = worst of both worlds
"""

print(comparison)

# MICROSERVICE COMMUNICATION PATTERNS:

patterns = """
1. SYNCHRONOUS (REST/gRPC):
   → Service A calls Service B and waits for response
   → Simple but creates coupling
   → If B is down, A fails (cascade)
   → Use for: user-facing requests needing immediate response

2. ASYNCHRONOUS (Message Queue):
   → Service A publishes event → Service B consumes later
   → Decoupled: B can be down, A continues
   → Eventual consistency
   → Use for: notifications, background jobs, analytics

3. SERVICE MESH:
   → Sidecar proxy handles: routing, retries, circuit breaking
   → Istio, Linkerd
   → Use for: large microservice deployments (50+ services)

4. API GATEWAY:
   → Single entry point for all clients
   → Handles: auth, rate limiting, routing, aggregation
   → Kong, AWS API Gateway, Nginx
   → Clients call gateway, gateway routes to services
"""

print(patterns)

# DATABASE PER SERVICE:
# → Each microservice owns its data (no shared database)
# → Communicate via API, not database joins
# → If service A needs service B's data → call B's API
# → This is HARD (no more JOINs across services)
# → Solution: event-driven sync (B publishes, A caches what it needs)

# PYTHON (service communication):
import requests

class OrderService:
    """Order microservice - communicates with other services via API."""

    def create_order(self, user_id, items):
        # Call User Service:
        user = requests.get(f"http://user-service/api/users/{user_id}").json()

        # Call Inventory Service:
        for item in items:
            inv = requests.post(
                "http://inventory-service/api/reserve",
                json={"product_id": item["id"], "qty": item["qty"]}
            )
            if inv.status_code != 200:
                return {"error": "Item out of stock"}

        # Call Payment Service:
        payment = requests.post(
            "http://payment-service/api/charge",
            json={"user_id": user_id, "amount": self._total(items)}
        )

        return {"order_id": "ord_123", "status": "confirmed"}</div>

<div class="code-block"># ── STEP 5: Database scaling — sharding and replication ──
# Handling data at massive scale.

# DATABASE SCALING STRATEGIES:

scaling = """
1. READ REPLICAS:
   → Primary DB: writes only
   → Replica DBs: reads only (1 → N copies)
   → Writes go to primary, replicated to replicas
   → Good for: read-heavy apps (most apps)
   → Challenge: replication lag (replica slightly behind primary)

2. SHARDING (Horizontal Partitioning):
   → Split data across multiple databases
   → Each shard holds a subset of data
   → Shard by: user_id, geography, date range, hash
   → Good for: write-heavy, massive data
   → Challenge: cross-shard queries, resharding

   SHARDING STRATEGIES:
   → Range-based: users 1-1000 on shard A, 1001-2000 on shard B
   → Hash-based: hash(user_id) % N_shards → even distribution
   → Geographic: US users on US shard, EU users on EU shard
   → Directory: lookup table maps keys to shards

3. VERTICAL PARTITIONING:
   → Split tables across databases by function
   → User data → User DB, Orders → Order DB
   → Similar to microservices (database per service)

4. FEDERATION (Functional Split):
   → Different databases for different features
   → Sessions in Redis, logs in Elasticsearch, transactions in PostgreSQL
   → Each database optimized for its use case
"""

print(scaling)

# PYTHON (sharding example):
class ShardRouter:
    """Route queries to correct database shard."""

    def __init__(self, num_shards=4):
        self.shards = [f"postgres://shard-{i}" for i in range(num_shards)]
        self.num_shards = num_shards

    def get_shard(self, user_id):
        """Hash-based sharding: consistent distribution."""
        return hash(user_id) % self.num_shards

    def query(self, user_id, sql):
        shard_idx = self.get_shard(user_id)
        shard_url = self.shards[shard_idx]
        return execute_on_shard(shard_url, sql)

# SHARDING CHALLENGE: cross-shard queries
# → "Get all orders from last month" → must query ALL shards
# → Solution: map-reduce (query all, merge results)
# → Or: denormalize into a reporting database

# WHEN TO SHARD:
# → Data > 1TB (single DB struggles)
# → Writes > single DB capacity
# → Don't shard prematurely (start with read replicas!)

# ── DATA CONSISTENCY MODELS ──
consistency = {
    "Strong": "Always read latest write. Slow but correct (banks).",
    "Eventual": "Reads may be stale, but converge. Fast (social media).",
    "Causal": "Preserves cause-effect order. Medium.",
    "Read-your-writes": "You always see your own writes. Session consistency.",
}
for model, desc in consistency.items():
    print(f"  {model}: {desc}")</div>

<div class="code-block"># ── STEP 6: System design best practices and interview framework ──
# The complete system designer's toolkit.

best_practices = [
    "Start simple (monolith), extract services when needed",
    "Make services stateless (enables horizontal scaling)",
    "Cache aggressively (cache-aside + TTL + LRU eviction)",
    "Use CDN for static content (global edge caching)",
    "Load balance at L7 (smart routing by URL/headers)",
    "Shard only when read replicas aren't enough",
    "Design for failure (circuit breakers, graceful degradation)",
    "Async for background work (message queues, event-driven)",
    "Monitor everything (latency, throughput, error rate)",
    "Capacity plan before traffic spikes (not during)",
    "Document trade-offs (ADR: Architecture Decision Records)",
    "Use managed services (don't build your own message queue)",
    "Idempotent APIs (safe to retry without side effects)",
    "Version your APIs (v1, v2 — don't break clients)",
    "Database per service (no shared databases in microservices)",
]

print("SYSTEM DESIGN BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SYSTEM DESIGN INTERVIEW FRAMEWORK (45 min):
interview = """
1. CLARIFY REQUIREMENTS (5 min):
   → Functional: what does the system DO?
   → Non-functional: scale, latency, availability
   → "Design Twitter" → how many users? real-time? search? DMs?

2. ESTIMATE SCALE (3 min):
   → Users: 100M DAU
   → QPS: 10K reads, 100 writes
   → Storage: 500M tweets/day × 200 bytes = 100 GB/day
   → Bandwidth: 10 GB/s

3. HIGH-LEVEL DESIGN (10 min):
   → Client → CDN → Load Balancer → API Gateway → Services → DB
   → Draw boxes and arrows
   → Identify: cache, queue, database, search

4. DEEP DIVE (15 min):
   → Database schema (SQL vs NoSQL)
   → API design (REST endpoints)
   → Caching (Redis: timelines, user profiles)
   → Scaling (sharding by user_id, read replicas)
   → Async processing (Kafka for tweet fanout)

5. BOTTLENECKS (10 min):
   → Celebrity problem (millions of followers → fanout storm)
   → Solution: push to cache for normal users, pull for celebrities
   → Single point of failure → add redundancy
   → Hot partitions → consistent hashing + rebalancing

6. WRAP UP (2 min):
   → Summarize the design
   → Mention trade-offs made
   → Suggest future improvements
"""

print(interview)

# SYSTEM DESIGN COMPONENTS CHEAT SHEET:
# ┌──────────────────┬──────────────────────────────────┐
# │ Component        │ When to Use                  │
# ├──────────────────┼──────────────────────────────────┤
# │ Load Balancer    │ Multiple servers             │
# │ CDN              │ Global static content        │
# │ Cache (Redis)    │ Read-heavy, low-latency      │
# │ Message Queue    │ Async processing, decoupling │
# │ Search (ES)      │ Full-text search             │
# │ Sharding         │ Massive data/writes          │
# │ Microservices    │ Large team, complex domain   │
# │ API Gateway      │ Auth, rate limit, routing    │
# └──────────────────┴──────────────────────────────────┘</div>

STATEFUL vs STATELESS — এটাই আসল প্রশ্ন:

  STATEFUL (অবস্থাসম্পন্ন):
    সার্ভার মনে রাখে — কে লগইন, কী কিনল, কোন পেজে
    → যেকোনো সার্ভারে পাঠালে কাজ হবে না
    → horizontal scaling কঠিন
    উদাহরণ: shopping cart মেমোরিতে, user session লোকাল

  STATELESS (অবস্থাহীন):
    সার্ভার কিছু মনে রাখে না — সব তথ্য request-এ বা ডেটাবেসে
    → যেকোনো সার্ভারে পাঠালে কাজ হবে
    → horizontal scaling সহজ!
    উদাহরণ: REST API, JWT auth token

  RULE: stateless বানাও → horizontal scale করো
        state বাহিরে রাখো — ডেটাবেস, cache, ক্লায়েন্টে

WHEN TO SCALE (সংকেত):
  ✅ CPU গড়ে >৭০%
  ✅ Memory >৮০%
  ✅ Disk I/O সীমায়
  ✅ latency বাড়ছে
  ✅ queue জমছে
  → তাড়াতাড়ি স্কেল করো — ব্যবহারকারী অপেক্ষা করে না

CAPACITY PLANNING — মাপজোক:
  "100 RPS (request per second) পারি।"
  → 10,000 RPS দরকার? 100x।
  → 100 টা সার্ভার? নাকি সার্ভার প্রতি 1000 RPS?
  → কোনটা সস্তা? কোনটা সহজ?
  → আগে মাপো, তারপর স্কেল করো (Door 18 — Observability দেখো)

THE SCALING CUBE (3 axes):
  X-axis: কপি যোগ (horizontal cloning) — N টা ইদেন্টিক্যাল সার্ভার
  Y-axis: ফাংশন ভাগ (microservices) — সার্ভিস আলাদা (Door 4)
  Z-axis: ডেটা ভাগ (sharding) — ডেটা ভাগ (Door 9, 11)</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। LLM inference মূল্যবান — এক জিপিইউতে সব request নয়। horizontal: অনেক GPU, প্রতিটা মডেলের এক কপি ধরে (replica)। Batch serving — অনেক request একসাথে। Stateless inference — যেকোনো replica পারে। কিন্তু training? stateful — gradient মনে রাখতে হয়, checkpoint করতে হয়। আজকের scaling বুঝতে হলে stateless-এর গভীরতা বুঝতে হবে।</div>
<div class="dialogue en">"You're an AI engineer. LLM inference is expensive — not all requests on one GPU. Horizontal: many GPUs, each holding a replica of the model. Batch serving — many requests together. Stateless inference — any replica can serve. But training? stateful — gradients must be remembered, checkpoints saved. To understand today's scaling, understand the depth of stateless."</div>

<div class="dialogue">তাওসিয়া — প্রশস্ত করা। কুরআনে আল্লাহ বলেন — "আর আকাশ — আমরা তা নির্মাণ করেছি শক্তিতে, আর নিশ্চয়ই আমরা প্রশস্তকারী।" (৫১:৪৭)। আকাশ প্রসারিত হচ্ছে — সীমাহীন। কিন্তু প্রতিটা গ্যালাক্সি আলাদা — এক গ্যালাক্সি ভাঙলে ব্রহ্মাণ্ড থামে না। horizontal scaling — আল্লাহর সৃষ্টিতে এটাই প্যাটার্ন। এক না, অনেক। প্রতিটা স্বাধীন, কিন্তু এক ব্যবস্থায়।</div>
<div class="dialogue en">"Tawsiʿa — widening. Allah says — 'And the heaven We constructed with might, and indeed We are expanding it.' (51:47). The sky expands — without limit. But each galaxy is separate — one galaxy collapsing doesn't stop the universe. Horizontal scaling — this is the pattern in Allah's creation. Not one, but many. Each independent, yet in one order."</div><div class="callout warn" data-door="1"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> Vertical scaling failure: একটা startup সার্ভার upgrade করতে থাকলো — CPU ৪ → ৮ → ১৬ core। এক সময় hardware সীমা — আর বাড়ানো যায় না। $১০K/মাস এক মেশিনে। Horizontal scaling দিলে: ১০টা ছোট মেশিন $৫০০ প্রতি = একই ক্ষমতা।</div></div>

<div class="secret-box">🛡️ Vertical = এক মেশিন বড় করো। Horizontal = ছোট অনেক মেশিন। সীমা আছে vertical-এ, নেই horizontal-এ।</div>
`,
  senior:{
    title:"Vertical আগে, Horizontal যখন দরকার — Senior Path",
    body:`<p><strong>শুরুতে vertical:</strong> ছোট প্রোজেক্টে এক বড় মেশিন যথেষ্ট। কোড বদলানো লাগে না, devops সহজ।</p><p><strong>Stateless বানাও আগে:</strong> horizontal scale করার আগে state বাহিরে নাও — ডেটাবেস, Redis, JWT। নাহলে স্কেল করলেই ভাঙে।</p><p><strong>Cache আগে, সার্ভার পরে:</strong> সার্ভার যোগ করার চেয়ে cache (Door 3) দ্রুততর সমাধান। ৮০% ট্রাফিক cache-এ গেলে সার্ভার ১০ গুণ কম লাগে।</p><p><strong>Autoscaling:</strong> CPU দেখে স্বয়ংক্রিয় সার্ভার যোগ/বাদ। কিন্তু cold-start latency — হঠাৎ traffic spike হলে সময় লাগে। warm pool রাখো।</p>`
  }
});

// ══ DOOR 2: LOAD BALANCING ══
doors.push({
  num:2, icon:"🌐", color:"#ff6b35", name:"ফটক রক্ষকের প্রহরী",
  subtitle:"The Gate Keeper's Post", tech:"Load Balancing",
  spirit:"তওয়াফ — ঘুরে ঘুরে সবাই সমান",
  secret:"একটা সার্ভার ভাঙলে সব থেমে যায়। একাধিক সার্ভারে ভাগ করো, একটা ফটক দিয়ে পরিচালনা করো। Load Balancer = ট্রাফিকের প্রহরী।",
  recall:{
    q:"ফটক রক্ষক কেন সবাইকে এক দরজায় ঢুকতে দেন না?",
    qen:"Why doesn't the gate keeper let everyone through one door?",
    a:"কারণ এক দরজায় ভিড় হবে, ধাক্কা হবে, কেউ আহত হবে। একাধিক দরজায় ভাগ করলে সবাই দ্রুত ঢোকে। Load Balancer এটাই করে — ট্রাফিক একাধিক সার্ভারে ভাগ করে।",
    aen:"Because one door means crowding, pushing, injury. Multiple doors distribute the flow. A Load Balancer does this — distributes traffic across multiple servers."
  },
  story:`
<p class="scene-setting">দ্বিতীয় স্থান। একটা বিশাল নগরীর প্রধান ফটক। সকাল — হাজার মানুষ প্রবেশ করছে। একসাথে। ফটকে ধাক্কা, চিৎকার, কেউ পড়ে যাচ্ছে। দরোয়ান তামিম দাঁড়িয়ে আছেন — বিশাল দেহ, লাঠি হাতে, কিন্তু একাই পারছেন না। একটা দরজা, হাজার মানুষ।</p>
<p class="scene-setting en">The second place. A vast city's main gate. Morning — a thousand people entering. At once. Crowding, shouting, people falling. Gatekeeper Tamim stands — massive frame, staff in hand, but he can't manage alone. One door, a thousand people.</p>

<div class="dialogue">ভিত্তি রক্ষক শিখিয়েছিলেন — পাশে পাশে বাড়ি বানাও (horizontal scaling)। কিন্তু বাড়ি তো হলো — এখন মানুষ কোন বাড়িতে যাবে? সবাই একটাতে ছুটলে সেই একটা ভেঙে যাবে, বাকিগুলো খালি থাকবে। দরকার এক প্রহরী — যে ভাগ করে দেবে।</div>
<div class="dialogue en">"The foundation mason taught — build houses side by side (horizontal scaling). But houses are made — now which house do people go to? If everyone rushes to one, that one breaks, others stay empty. You need a guardian — who distributes."</div>

<p>তামিম একটা সিদ্ধান্ত নিলেন। তিনি ফটকের পাশে আরও চারটা দরজা খুললেন। তারপর মানুষকে ভাগ করে দিলেন — প্রথম দল দরজা ১-এ, দ্বিতীয় দল দরজা ২-এ। হঠাৎ — প্রবাহ সহজ হলো। কেউ ধাক্কা খাচ্ছে না। সবাই দ্রুত ঢুকছে।</p>
<p class="en">Tamim made a decision. He opened four more doors beside the main gate. Then divided the people — first group to door 1, second group to door 2. Suddenly — the flow eased. No pushing. Everyone entered quickly.</p>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ একটা সার্ভার</div>সব ট্রাফিক এক সার্ভারে। সার্ভার ক্র্যাশ = সব ব্যবহারকারী ব্লক। কোনো fallback নেই। SPOF (Single Point of Failure)।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Load Balancer</div>ট্রাফিক একাধিক সার্ভারে ভাগ। একটা ক্র্যাশ করলে বাকিরা কাজ চালায়। ফটক স্বয়ংক্রিয়ভাবে সুস্থ সার্ভারে পাঠায়।</div>
</div>

<div class="code-block">Load Balancing Algorithms:

Round Robin (তওয়াফ):
  Request 1 → Server A
  Request 2 → Server B
  Request 3 → Server C
  Request 4 → Server A (আবার শুরু)
  → সবাই সমান কাজ পায়

Least Connections:
  "কোন সার্ভারে সবচেয়ে কম চাপ?"
  → সেখানে পাঠাও
  → সবচেয়ে ব্যস্তকে এড়াও

IP Hash:
  একই ইউজার সবসময় একই সার্ভারে
  → session consistency (stateful হলে দরকার)

Least Response Time:
  কোন সার্ভার দ্রুত উত্তর দিচ্ছে?
  → সেখানে পাঠাও

Health Checks:
  প্রতি ৫ সেকেন্ডে: "তুমি কি সুস্থ?"
  সুস্থ না হলে → ট্রাফিক বন্ধ
  সুস্থ হলে → ট্রাফিক চালু</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। LLM serving-এ প্লেইন round robin অনেক সময় যথেষ্ট না — প্রতিটা GPU-তে ভিন্ন batch, ভিন্ন queue depth, ভিন্ন KV-cache অবস্থা। দরকার smarter routing — least-outstanding-requests বা queue-aware balancing, যাতে সবচেয়ে ফাঁকা GPU পরের request পায়। vLLM বা Triton-এর সামনের গেটওয়ে অনেক সময় request batch করে পাঠায় যাতে GPU utilization বাড়ে (continuous batching)। sticky/session-aware routing দরকার হতে পারে — একই কথোপকথন বারবার একই GPU-তে গেলে prompt-cache/KV-cache পুনর্ব্যবহার হয়, latency কমে, GPU খরচ বাঁচে।</div>
<div class="dialogue en">"You're an AI engineer. In LLM serving, plain round robin often isn't enough — each GPU carries a different batch, different queue depth, different KV-cache state. You need smarter routing — least-outstanding-requests or queue-aware balancing, so the emptiest GPU gets the next request. Gateways in front of vLLM or Triton often batch requests together to raise GPU utilization (continuous batching). Sticky/session-aware routing can matter too — sending the same conversation back to the same GPU reuses its prompt-cache/KV-cache, cutting latency and GPU cost."</div>

<div class="dialogue">তওয়াফ — ঘুরে ঘুরে সবাই সমান। কুরআনে আল্লাহ বলেন — "হে মানুষ, আমি তোমাদের সৃষ্টি করেছি এক পুরুষ ও এক নারী থেকে, আর তোমাদের বিভক্ত করেছি জাতি ও গোত্রে যাতে তোমরা পরস্পরকে চেনো। নিশ্চয় আল্লাহর কাছে তোমাদের মধ্যে সর্বাধিক সম্মানিত সে-ই, যে সর্বাধিক আল্লাহভীরু।" (৪৯:১৩)। বংশ-গোত্র কাউকে বাড়তি মর্যাদা দেয় না। তওয়াফেও তাই — সবাই ঘুরে, সবাই সমান দূরত্বে। কেউ এগিয়ে নয়, কেউ পিছিয়ে নয়। Round Robin লোড ব্যালেন্সিংও তেমনি — প্রতিটা সার্ভার সমান কাজ পায়। কেউ বেশি বোঝা বহন করে না, কেউ কম নয়। সমতা = স্থিতিশীলতা।</div>
<div class="dialogue en">"Tawaf — circling, all equal. Allah says in the Quran — 'O mankind, indeed We created you from a male and a female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you.' (49:13). Lineage grants no one extra status. In tawaf too — everyone circles, all at equal distance. No one ahead, no one behind. Round Robin load balancing is the same — each server gets equal work. No one carries more burden, no one less. Equality = stability."</div><div class="callout warn" data-door="2"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> Load balancer failure: একটা API ৯৯% traffic এক সার্ভারে পাঠাতে লাগলো — session sticky। ৯৯% সার্ভার crash, ১% অলস। Load balancer = ভার সমান ভাগ।</div></div>

<div class="secret-box">🛡️ Load balancer = ভার সমান ভাগ। Round-robin, least-connections — পদ্ধতি অনেক, লক্ষ্য এক।</div>
`,
  senior:{
    title:"Layer 4 vs Layer 7 Load Balancing",
    body:`<p><strong>Layer 4 (Transport):</strong> TCP/UDP লেভেলে কাজ করে। দ্রুত, সহজ। শুধু IP + port দেখে। NAT, DSR।</p><p><strong>Layer 7 (Application):</strong> HTTP লেভেলে কাজ করে। বুদ্ধিমান — URL, header, cookie দেখে routing করে। বেশি শক্তিশালী কিন্তু বেশি খরচ।</p><p><strong>Senior choice:</strong> API gateway = Layer 7। TCP load balancing = Layer 4। Nginx, HAProxy উভয় পারে। AWS ALB = L7, NLB = L4।</p>`
  }
});

// ══ DOOR 3: CACHING ══
doors.push({
  num:3, icon:"💾", color:"#52c41a", name:"গোলাঘর সংরক্ষকের ভাণ্ডার",
  subtitle:"The Granary Keeper's Vault", tech:"Caching",
  spirit:"হিফজ — সংরক্ষণ, স্মরণে রাখা",
  secret:"ডেটাবেস থেকে পড়া = ধীর। গোলাঘর থেকে পড়া = দ্রুত। Cache = প্রায়শই দরকারি জিনিস কাছে রাখা। কিন্তু পুরনো হতে পারে — eviction লাগে।",
  recall:{
    q:"গোলাঘর রক্ষক কেন প্রতিবার খেতে যান না, গোলাঘরে রাখেন?",
    qen:"Why does the granary keeper store grain instead of going to the field each time?",
    a:"কারণ খেতে যাওয়া দূর, ধীর, কষ্টকর। গোলাঘরে থাকলে কাছে, দ্রুত। কিন্তু শস্য পুরনো হয় — তাই নিয়মিত বদলাতে হয়। Cache-ও তেমনি — গোলাঘরের মতো।",
    aen:"Because going to the field is far, slow, painful. In the granary it's close, fast. But grain gets old — so rotate regularly. Cache is the same — like a granary."
  },
  story:`
<p class="scene-setting">তৃতীয় স্থান। নগরীর কেন্দ্রে একটা বিশাল গোলাঘর। পাথরের দেয়াল, শীতল ভেতর, সারিবদ্ধ মটরজাতীয় বস্তা। গোলাঘর রক্ষক রাবিয়া কাজ করছেন — প্রতিদিন সকালে খেত থেকে শস্য আনেন, গোলাঘরে সাজান, তারপর প্রতিটা পরিবারকে গোলাঘর থেকে দেন। খেতে যান না — গোলাঘরে থাকেন।</p>
<p class="scene-setting en">The third place. At the city's center, a vast granary. Stone walls, cool interior, sacks of grain in rows. Granary keeper Rabia works — each morning bringing grain from the field, storing it, then distributing to each family from the granary. She doesn't go to the field — stays at the granary.</p>

<div class="dialogue">ফটক রক্ষক বলেছিলেন — ট্রাফিক ভাগ করো। কিন্তু আমি বলি — ভাগ করলেও, যদি প্রতিটা অনুরোধ ডেটাবেস থেকে পড়তে হয় — ধীর। আমার কাজ হলো — যা প্রায়শই দরকার, তা কাছে রাখা। গোলাঘরের মতো।</div>
<div class="dialogue en">"The gate keeper said — distribute traffic. But I say — even distributed, if every request reads from the database — it's slow. My job is — keep what's frequently needed, close. Like a granary."</div>

<p>তুমি একটা API কল করলে — "ইউজার প্রোফাইল দাও।" সার্ভার ডেটাবেসে যায়, খুঁজে, আনে, ফেরত দেয়। ৫০ms। কিন্তু যদি একই প্রোফাইল এক দিনে ১০,০০০ বার চাওয়া হয়? ১০,০০০ বার ডেটাবেসে যাওয়া? না। একবার পড়ে cache-এ রাখো। পরের ৯,৯৯৯ বার — cache থেকে। ১ms। ৫০ গুণ দ্রুত।</p>
<p class="en">You make an API call — "give user profile." Server goes to DB, finds, returns. 50ms. But if the same profile is requested 10,000 times a day? 10,000 DB trips? No. Read once, store in cache. Next 9,999 times — from cache. 1ms. 50x faster.</p>

<div class="code-block">Cache Strategies — কোনটা কখন:

১. Cache-Aside (Lazy Loading):
   - চাও → cache-এ আছে? → দাও
   - না? → DB থেকে পড়ো → cache-এ রাখো → দাও
   - সহজ, সাধারণ। Redis + তোমার কোড।

২. Write-Through:
   - লেখো → cache + DB একসাথে
   - সবসময় fresh, কিন্তু লেখা ধীর

৩. Write-Behind (Write-Back):
   - লেখো → cache → পরে DB (async)
   - দ্রুত লেখা, কিন্তু ঝুঁকি (crash-এ ডেটা হারায়)

৪. Eviction (পুরনো বাদ):
   - LRU: সবচেয়ে বেশি দিন ব্যবহৃত হয়নি → বাদ
   - LFU: সবচেয়ে কম বার ব্যবহৃত → বাদ
   - TTL: নির্দিষ্ট সময় পরে স্বয়ংক্রিয় মুছে ফেলা

CACHE LEVELS (multi-tier):
  Browser cache → CDN edge → app server local → Redis/Memcached → DB
  প্রতিটা স্তরে ক্যাশে — দ্রুততা যোগ হয়।

CACHE STAMPede (thundering herd):
  cache expire হলে — হাজার request একসাথে DB-তে ছুটে
  → সমাধান: lock + single flight, early refresh, jittered TTL</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Cache ছাড়া</div>প্রতিটা read = DB trip। DB হাঁপায়। latency বাড়ে। ইউজার অপেক্ষা করে। স্কেল করতে গেলে প্রথমেই ভাঙে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Cache সহিত</div>বারবার দরকারি ডেটা cache-এ। DB শান্ত। latency ১ms। কিন্তু — consistency ঝুঁকি। cache invalidation = কঠিন সমস্যা।</div>
</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। LLM API খরচ বেশি — একই জিনিস বারবার পাঠালে টাকা আর সময় দুটোই নষ্ট। Prompt caching (Anthropic, OpenAI দুটোই দেয়) — বড় system prompt বা document context একবার প্রসেস করে cache করে রাখে, পরের কলে পুনর্ব্যবহার করে খরচ ও latency অনেক কমায়। Semantic caching — হুবহু একই না হলেও অর্থে কাছাকাছি query হলে embedding similarity দিয়ে মিলিয়ে cached উত্তর ফেরত দাও। আর মডেলের ভেতরেই KV-cache — প্রতিটা নতুন token তৈরির সময় আগের সব token-এর attention key/value নতুন করে না গুনে cache থেকে পড়ে নেওয়া। caching এখন প্রতিটা স্তরে — request level, semantic level, এমনকি token level।</div>
<div class="dialogue en">"You're an AI engineer. LLM API calls are expensive — sending the same thing repeatedly wastes both money and time. Prompt caching (both Anthropic and OpenAI offer it) — a large system prompt or document context is processed once and cached, then reused on later calls, cutting cost and latency significantly. Semantic caching — even when a query isn't identical, if it's close in meaning, match it by embedding similarity and return the cached answer. And inside the model itself — KV-cache — instead of recomputing every previous token's attention key/value for each new token, read them back from cache. Caching now happens at every layer — request level, semantic level, even token level."</div>

<div class="dialogue">হিফজ — সংরক্ষণ। কুরআনে আল্লাহ বলেন — "নিশ্চয় আমরাই এই কুরআন নাযিল করেছি, আর নিশ্চয় আমরাই এর সংরক্ষক।" (১৫:৯)। সংরক্ষণ আল্লাহর নিজের দায়িত্ব — কাছে রাখা, অবিকৃত রাখা, পরে ব্যবহারের জন্য প্রস্তুত রাখা। ইতিহাসে হাফসা (রা) — নবীজির (সা) স্ত্রী — কুরআনের প্রথম সংকলিত কপি নিজের কাছে সংরক্ষণ করেছিলেন, যা পরে উসমানের (রা) সময় মান নির্ণয়ে কাজে লাগে। Cache-ও তেমনি — এখন দরকারি ডেটা কাছে রাখা যাতে পরে দ্রুত ব্যবহার করা যায়। কিন্তু cache সঠিক হতে হবে — নাহলে পুরনো ভুল ডেটা দেবে। Cache invalidation হলো এই সংরক্ষণ-দায়িত্বের মতো — নিশ্চিত করা যা দেওয়া হচ্ছে তা সঠিক, পুরনো নয়।</div>
<div class="dialogue en">"Hifz — preservation. Allah says in the Quran — 'Indeed, it is We who sent down the Quran, and indeed, We will be its guardian.' (15:9). Preservation is Allah's own undertaking — keeping close, unaltered, ready for later use. Historically, Hafsa (RA) — the Prophet's wife — kept the first compiled copy of the Quran with her, which later helped standardize the text under Uthman (RA). Cache is the same — keeping frequently needed data close for fast access. But cache must be correct — otherwise it serves stale, wrong data. Cache invalidation is like this duty of preservation — ensuring what's served is correct, not old."</div><div class="callout warn" data-door="3"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> Cache failure: একটা app cache expire করায়নি — stale data। গ্রাহক পুরোনো মূল্য দেখলেন। Cache = গতি, কিন্তু invalidation ছাড়া = বিপদ।</div></div>

<div class="secret-box">🛡️ Cache = গতি। Invalidation ছাড়া = stale data = বিপদ।</div>
`,
  senior:{
    title:"Cache Invalidation — সিস্টেম ডিজাইনের সবচেয়ে কঠিন সমস্যা",
    body:`<p>"ক্যাশে ইনভ্যালিডেশন কঠিন" — এটা শুধু মজা নয়, সত্যি। কখন cache বাদ দেবে?</p><p><strong>সহজ:</strong> TTL — ৫ মিনিট পরে মুছে যায়। সহজ কিন্তু পুরনো ডেটার ঝুঁকি।</p><p><strong>কঠিন:</strong> Write-through — লেখার সাথে সাথে cache আপডেট। সঠিক কিন্তু ধীর।</p><p><strong>বাস্তব:</strong> সাধারণ TTL + write-through মিশ্রণ। গুরুত্বপূর্ণ ডেটা = write-through, কম গুরুত্বপূর্ণ = TTL।</p>`
  }
});

// ══ DOOR 4: MICROSERVICES ══
doors.push({
  num:4, icon:"🏘️", color:"#b37feb", name:"মহল্লা স্থপতির ড্রয়িং রুম",
  subtitle:"The Quarter Architect's Drawing Room", tech:"Microservices & Service Decomposition",
  spirit:"তাজযি় — সুসংগঠিত ভাগে বিভাজন",
  secret:"এক বিশাল ভবন (monolith) — সব একসাথে। ভাঙলে সব ভাঙে, বদলাতে গেলে সব বদলাতে হয়। মহল্লায় ভাগ করো — প্রতিটা স্বাধীন, আলাদাভাবে বদলানো যায়, ভাঙলে একটা ভাঙে।",
  recall:{
    q:"মহল্লা স্থপতি কেন এক বিশাল ভবন বানান না, মহল্লায় ভাগ করেন?",
    qen:"Why doesn't the quarter architect build one vast building, but divides into quarters?",
    a:"কারণ এক ভবনে সব একসাথে — একটা কল ভাঙলে সব থামে, ছাদ মেরামত করতে গেলে সব বাসিন্দা বের হতে হয়। মহল্লায় প্রতিটা স্বাধীন — আলাদায় মেরামত, আলাদায় স্কেল। Microservices তেমনি — প্রতিটা service স্বয়ংসম্পূর্ণ।",
    aen:"Because one building means everything together — one pipe breaking stops all, fixing the roof means all tenants leave. In quarters, each is independent — separate repair, separate scale. Microservices — each service self-contained."
  },
  story:`
<p class="scene-setting">চতুর্থ স্থান। মহল্লা স্থপতির ড্রয়িং রুম। দেয়ালে দুটো নীলনকশা — একটা বিশাল একক ভবন (কেন্দ্রীভূত), একটা মহল্লা-শহর (বিকেন্দ্রীভূত)। স্থপতি জয়নব তার চশমা ঠিক করে বললেন — "এই বিশাল ভবনটা দেখো। এক ছাদ, এক ভিত্তি, এক জলের লাইন। কিছু ভাঙলে সব ভাঙে। কিন্তু এই মহল্লা — প্রতিটা বাড়ি আলাদা। একটা মেরামত করো, বাকিরা চলে।"</p>
<p class="scene-setting en">The fourth place. The Quarter Architect's drawing room. Two blueprints on the wall — one vast monolithic building (centralized), one quarter-city (decentralized). Architect Zainab adjusted her spectacles and said — "Look at this vast building. One roof, one foundation, one water line. If something breaks, all breaks. But this quarter — each house separate. Repair one, others continue."</p>

<div class="dialogue">গোলাঘর রক্ষক বলেছিলেন — কাছে রাখো, দ্রুত দাও। কিন্তু আমি বলি — যখন নগরী বড় হয়, এক বিশাল ভবনে সব কাজ রাখলে সব একসাথে ধীর হয়, বদলাতে ভয়ংকর। এক টিম ইউজার কোড বদলায়, আরেক টিম পেমেন্ট কোড বদলায় — কিন্তু একই ভবন। একে অপরের পায়ে দলে।</div>
<div class="dialogue en">"The granary keeper said — keep close, serve fast. But I say — when the city grows, putting all work in one vast building makes everything slow together, change terrifying. One team changes user code, another payment code — but the same building. Stepping on each other's feet."</div>

<div class="diagram">
  <div class="diag-title">Monolith → Microservices — এক ভবন থেকে মহল্লা</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <!-- MONOLITH -->
    <text class="lbl-sm" x="100" y="22" fill="#ff6b35" style="font-size:13px">MONOLITH — এক ভবন</text>
    <rect class="cell-hot" x="30" y="40" width="140" height="170" rx="8" style="fill:rgba(255,107,53,.1);stroke:#ff6b35"/>
    <text class="lbl-sm" x="100" y="60">UI</text>
    <line class="grid-line" x1="40" y1="72" x2="160" y2="72"/>
    <text class="lbl-sm" x="100" y="92">Business Logic</text>
    <text class="lbl-sm" x="100" y="110" style="font-size:9px">(users + orders +</text>
    <text class="lbl-sm" x="100" y="122" style="font-size:9px">payment + search</text>
    <text class="lbl-sm" x="100" y="134" style="font-size:9px">+ notif... সব একসাথে)</text>
    <line class="grid-line" x1="40" y1="150" x2="160" y2="150"/>
    <text class="lbl-sm" x="100" y="170">Data Access</text>
    <text class="lbl-sm" x="100" y="190">এক DB</text>
    <text class="lbl-sm" x="100" y="228" fill="#ff6b35">সহজ শুরু · বড় হলে ভয়ংকর</text>

    <!-- MICROSERVICES -->
    <text class="lbl-sm" x="390" y="22" fill="#3dd6c4" style="font-size:13px">MICROSERVICES — মহল্লা</text>
    ${[ ['User',300,50],['Order',370,50],['Pay',440,50],['Search',510,50],
         ['Notif',300,130],['Rec',370,130],['Cart',440,130],['Ship',510,130] ].map(s=>`
      <rect class="cell-good" x="${s[1]-28}" y="${s[2]-15}" width="56" height="30" rx="5" style="fill:rgba(82,196,26,.18)"/>
      <text class="lbl-sm" x="${s[1]}" y="${s[2]}">${s[0]}</text>
    `).join('')}
    <text class="lbl-sm" x="300" y="178">প্রতিটা service — নিজ DB, নিজ টিম, নিজ deploy</text>
    <text class="lbl-sm" x="390" y="200" fill="#52c41a">API দিয়ে কথা বলে (Door 5)</text>
    <text class="lbl-sm" x="390" y="228" fill="#52c41a">বড় হলেও চালানো যায়</text>
    <line class="edge-cyan" x1="180" y1="120" x2="270" y2="90"/>
  </svg>
  <div class="diag-cap">শুরুতে monolith সহজ। বড় হলে microservices — কিন্তু complexity আসে।</div>
</div>

<div class="code-block">Microservices — কখন, কীভাবে ভাগ:

একটা সার্ভিস = একটা ব্যবসায়িক ক্ষমতা (bounded context)
  User Service → ইউজার, প্রোফাইল, auth
  Order Service → অর্ডার, ইনভেন্টরি
  Payment Service → চার্জ, রিফান্ড
  Notification Service → ইমেইল, SMS, push
  Search Service → সার্চ, র‍্যাঙ্কিং

প্রতিটা service:
  ✓ নিজস্ব ডেটাবেস (বা নিজস্ব স্কিমা) — শেয়ার্ড DB নয়!
  ✓ নিজস্ব ডেপ্লয় — একটা বদলালে অন্য থামে না
  ✓ নিজস্ব টিম — এক টিম এক সার্ভিসের মালিক
  ✓ API দিয়ে যোগাযোগ — সরাসরি DB অ্যাক্সেস নয়

ভাগ করার নীতি (DDD — bounded context):
  ১. ব্যবসায়িক ক্ষমতা অনুযায়ী ভাগ (technical নয়)
  ২. এক টিম = ২-৮ জন = "two-pizza team"
  ৩. সার্ভিস এত ছোট যে এক স্প্রিন্টে রিরাইট করা যায়
  ৪. সার্ভিস এত বড় যে সে নিজের সমস্যা সমাধান করতে পারে

প্রতিটা service স্বাধীন স্কেল:
  Search বেশি ব্যস্ত → 50 replica
  Payment কম ব্যস্ত → 5 replica
  Notification বিস্ফোরক (ছুটির দিনে) → autoscale
  → এক monolith-এ সব একসাথে স্কেল করতে হতো

THE PRICE (সব দাম আছে):
  ❌ Network call — DB call-এর চেয়ে ধীর (latency)
  ❌ Distributed transactions — কঠিন (Door 13)
  ❌ Operational complexity — monitoring, deploy, versioning
  ❌ Data consistency — eventual consistency মানতে হয়
  ❌ Service mesh — Istio, Linkerd শিখতে হয়

WHEN NOT TO SPLIT (গুরুত্বপূর্ণ):
  ✗ ছোট প্রোজেক্ট (১ টিম, ১ MVP) — monolith শুরু করো
  ✗ পরিষ্কার bounded context না থাকলে — ভাঙলে স্প্যাগেটি
  ✗ DevOps পরিণতি না থাকলে — operational nightmare
  ✗ Strong consistency চাইলে — cross-service কঠিন

"MONOLITH FIRST" pattern:
  শুরুতে monolith — শিখো domain
  → বড় হলে, বোঝলে — ভাঙো
  → শুরু থেকে microservices = premature optimization</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। আজকের AI platform সব microservices-এ চলে। Inference service — মডেল চালায়, বহু GPU, স্বাধীন স্কেল। Embedding service — ছোট, দ্রুত। Training service — ব্যাচ, সারিতে। RAG service — retrieval + generation আলাদা। Agent orchestrator — টুল service গুলো ডাকে। প্রতিটা আলাদা ডেপ্লয়, আলাদা স্কেল। Monolith হলে এক GPU-এর সমস্যায় সব থামত।</div>
<div class="dialogue en">"You're an AI engineer. Today's AI platforms all run as microservices. Inference service — runs models, many GPUs, independent scale. Embedding service — small, fast. Training service — batch, queued. RAG service — retrieval + generation separate. Agent orchestrator — calls tool services. Each separate deploy, separate scale. As a monolith, one GPU's problem would stop everything."</div>

<div class="dialogue">তাজযি় — সুসংগঠিত ভাগে বিভাজন। কুরআনে আল্লাহ বলেন — "কোনো বহনকারী অন্যের বোঝা বহন করবে না।" (৬:১৬৪)। প্রতিটা প্রাণ নিজের দায়ের জন্য দায়ী — একজনের বোঝা আরেকজন বহন করে না। ইসলামী ঐতিহ্যে প্রশাসন সবসময় বিকেন্দ্রীভূত — প্রতিটা মহল্লার নিজস্ব মসজিদ, নিজস্ব ইমাম, নিজস্ব দায়িত্ব। এক কেন্দ্রীভূত কাঠামো ভাঙলে সব থামে। Microservices সেই তাজযি়-এর ছায়া — দায়িত্ব ভাগ, প্রতিটা স্বাধীন, একটার বোঝা আরেকটা বহন করে না, সব মিলে এক নগরী।</div>
<div class="dialogue en">"Tajzīʾ — division into organized parts. Allah says in the Quran — 'No bearer of burdens will bear the burden of another.' (6:164). Every soul is accountable for its own — no one carries another's burden. In Islamic tradition, administration is always decentralized — each quarter its own mosque, its own imam, its own responsibility. One centralized structure breaks, all stops. Microservices is the shadow of that tajzīʾ — divided responsibility, each independent, one's burden not carried by another, together one city."</div><div class="callout warn" data-door="4"><span class="co-icon">⚠️</span><div><strong>বাস্তব বিপদ:</strong> Microservice failure: এক টিম monolith ভাঙলো ৫০টা microservice-এ। এক service down → ১০টা cascade fail। Network call ১০x। কখনো monolith = সহজ।</div></div>

<div class="secret-box">🛡️ Microservice = স্বাধীনতা + complexity। এক down → cascade। Monolith first, তারপর split।</div>
`,
  senior:{
    title:"Monolith vs Microservices — Senior Reality",
    body:`<p><strong>শুরু করো monolith দিয়ে</strong> — এটা canonical advice (Martin Fowler, "monolith first")। Domain না বুঝে ভাঙলে ভুল ভাগ হয়, "distributed monolith" হয় — সব খারাপ দুনিয়া।</p><p><strong>যখন ভাঙবে:</strong> (১) টিম >৮ জন হলে, (২) এক অংশ অন্যের চেয়ে ১০x ব্যস্ত, (৩) এক অংশ অন্যের চেয়ে ভিন্ন release tempo চায়।</p><p><strong>ভাঙার নিয়ম:</strong> এক সাথে এক service বের করো, পরীক্ষা করো, তারপর পরের। "Strangler Fig" pattern — পুরোনো monolith ক্রমশ গলিয়ে বের করো।</p><p><strong>Service mesh:</strong> Istio/Linkerd — sidecar proxy প্রতিটা service-এ। mTLS, retries, circuit breaking কোড ছাড়াই। কিন্তু complexity যোগ। শুরুতে দরকার নাও হতে পারে।</p>`
  }
});
