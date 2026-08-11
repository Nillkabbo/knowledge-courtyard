// ════════════════════════════════════════
// সংযোগের সেতু — DOORS 1-5
// The Bridge of Connections: Why Distribution → Consistency → CAP → Consensus → Transactions
// ════════════════════════════════════════
const doors = [];

doors.push({
  num: 1,
  icon: "⏰",
  color: "#f97316",
  name: "সময়ের হিসাব",
  subtitle: "The Accounting of Time",
  tech: "Lamport Clocks — Logical Time, Event Ordering, Happens-Before Relation (Lamport, 1978)",
  spirit: "আয়াত — বিচ্ছিন্ন নিদর্শন থেকে সংযুক্ত সত্য, ছড়ানো ঘটনাকে ক্রম দেওয়া",
  secret: "একটা ঘড়ি মিথ্যা বলে — হাজার ঘড়ি কখনো এক হয় না। কিন্তু কারণ-ফল দিয়ে সময় মাপা যায়।",
  recall: {
    q: "Lamport clock কী সমস্যা সমাধান করে? happens-before সম্পর্ক কী?",
    qen: "What problem does the Lamport clock solve? What is the happens-before relation?",
    a: "বিতরণ সিস্টেমে প্রতিটা মেশিনের নিজের ঘড়ি — কখনো এক হয় না। Lamport বলেন: ঘড়ির সময় নয়, ঘটনার ক্রম গুরুত্বপূর্ণ। A → B (happens-before) যদি A কারণ হয় B-র। প্রতিটা ইভেন্টে একটা লজিক্যাল টাইমস্ট্যাম্প দাও — বড় টাইমস্ট্যাম্প পরে ঘটেছে।",
    aen: "In distributed systems each machine has its own clock — never synchronized. Lamport said: not clock time, event order matters. A → B (happens-before) if A caused B. Give each event a logical timestamp — larger timestamp happened later."
  },
  story: `<p class="scene-setting">নিউইয়র্ক, ১৯৭৮। IBM Research-এ একজন তরুণ গণিতজ্ঞ একটা সহজ কিন্তু গভীর প্রশ্ন নিয়ে ভাবছেন — দুইটা কম্পিউটার যদি আলাদা শহরে থাকে, তাহলে কেমনে বুঝব কোন ঘটনা আগে ঘটেছে? প্রতিটা মেশিনের নিজের ঘড়ি — এক হয় না। মিলিসেকেন্ডের পার্থক্য বড় সমস্যা। তাঁর নাম — লেসলি ল্যাম্পোর্ট (Leslie Lamport)।</p>

  <p class="scene-setting en">New York, 1978. At IBM Research, a young mathematician pondered a simple but profound question — if two computers are in different cities, how do you know which event happened first? Each machine has its own clock — never identical. Milliseconds of difference = big problem. His name — Leslie Lamport.</p>

  <div class="dialogue">
    <p><strong>ল্যাম্পোর্ট:</strong> তুমি ভাবো ঘড়ি সত্যি বলে। কিন্তু একটা মেশিন লন্ডনে, আরেকটা নিউইয়র্কে। দুটোর ঘড়ি আলাদা। একটা বলছে ১২:০০:০১, আরেকটা ১২:০০:০৩। কিন্তু নিউইয়র্কের ঘড়ি হয়তো ২ সেকেন্ড পিছিয়ে। তাহলে কোন ঘটনা আগে?</p>
    <p><strong>তুমি:</strong> তাহলে কীভাবে জানব?</p>
    <p><strong>ল্যাম্পোর্ট:</strong> ঘড়ি ভুলে যাও। কারণ ও ফল দেখো। যদি মেশিন A একটা মেসেজ পাঠায় মেশিন B-কে — তাহলে A-র পাঠানো নিশ্চিতভাবে B-র পাওয়ার আগে। এটাই happens-before। প্রতিটা ঘটনাকে একটা সংখ্যা দাও — লজিক্যাল টাইমস্ট্যাম্প। মেসেজ পাঠালে নিজের সংখ্যা বাড়াও, মেসেজ পেলে প্রেরকের সংখ্যার চেয়ে বড় করো।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Lamport:</strong> You assume clocks tell truth. But one machine in London, another in New York. Different clocks. One says 12:00:01, the other 12:00:03. But New York might be 2 seconds behind. Which event was first?</p>
    <p><strong>You:</strong> Then how do I know?</p>
    <p><strong>Lamport:</strong> Forget clocks. Look at cause and effect. If machine A sends a message to machine B — then A's sending is definitely before B's receiving. This is happens-before. Give each event a number — a logical timestamp. When sending a message, increment your number. When receiving, take max of sender's number and yours, then increment.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> লেসলি ল্যাম্পোর্ট (জন্ম ফেব্রুয়ারি ৭, ১৯৪১, ব্রঙ্কস, নিউইয়র্ক) ১৯৭৮ সালে তাঁর গবেষণাপত্র <em>"Time, Clocks, and the Ordering of Events in a Distributed System"</em> যোগাযোগে ACM (Communications of the ACM), খণ্ড ২১, সংখ্যা ৭, পৃষ্ঠা ৫৫৮-৫৬৫-এ প্রকাশ করেন। এটি বিতরণ সিস্টেমের ইতিহাসে সবচেয়ে উদ্ধৃত গবেষণাপত্রগুলোর একটি। তিনি ২০১৩ সালে Turing Award পান। তিনি LaTeX টাইপসেটিং সিস্টেমও তৈরি করেছেন। বর্তমানে Microsoft Research-এ কর্মরত।</div></div>

  <div class="diagram">
    <div class="diag-title">Lamport Clock — কীভাবে লজিক্যাল সময় কাজ করে</div>
    <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrOrange1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f97316"/>
        </marker>
        <marker id="arrBlue1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#3dd6c4"/>
        </marker>
      </defs>

      <!-- Title -->
      <text x="280" y="18" text-anchor="middle" font-family="Cinzel,serif" font-size="10" font-weight="700" fill="#fbbf24" letter-spacing="2">LAMPORT CLOCK — লজিক্যাল টাইমস্ট্যাম্প</text>

      <!-- Process A (left) -->
      <text x="120" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="#f97316">মেশিন A</text>
      <line x1="120" y1="50" x2="120" y2="270" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>

      <!-- Process B (right) -->
      <text x="440" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="#3dd6c4">মেশিন B</text>
      <line x1="440" y1="50" x2="440" y2="270" stroke="#3dd6c4" stroke-width="1.5" stroke-dasharray="4,3"/>

      <!-- Events on A timeline -->
      <circle cx="120" cy="80" r="7" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="2"/>
      <text x="100" y="84" text-anchor="end" font-size="11" font-weight="700" fill="#fbbf24">A₁=১</text>
      <text x="140" y="78" font-size="9" fill="#9290a8">local event</text>

      <circle cx="120" cy="130" r="7" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="2"/>
      <text x="100" y="134" text-anchor="end" font-size="11" font-weight="700" fill="#fbbf24">A₂=২</text>
      <text x="140" y="128" font-size="9" fill="#9290a8">send message</text>

      <!-- Events on B timeline -->
      <circle cx="440" cy="100" r="7" fill="rgba(61,214,196,0.2)" stroke="#3dd6c4" stroke-width="2"/>
      <text x="460" y="104" font-size="11" font-weight="700" fill="#3dd6c4">B₁=১</text>
      <text x="420" y="98" text-anchor="end" font-size="9" fill="#9290a8">local event</text>

      <circle cx="440" cy="165" r="7" fill="rgba(61,214,196,0.2)" stroke="#3dd6c4" stroke-width="2"/>
      <text x="460" y="169" font-size="11" font-weight="700" fill="#3dd6c4">B₂=৩</text>
      <text x="420" y="163" text-anchor="end" font-size="9" fill="#9290a8">receive (max(২,১)+১)</text>

      <!-- Message arrow from A₂ to B₂ -->
      <path d="M 127 130 Q 280 145 433 165" fill="none" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrOrange1)" stroke-dasharray="6,3"/>
      <text x="280" y="140" text-anchor="middle" font-size="9" font-style="italic" fill="#fbbf24">message (carries timestamp ২)</text>

      <!-- Third events -->
      <circle cx="120" cy="210" r="7" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="2"/>
      <text x="100" y="214" text-anchor="end" font-size="11" font-weight="700" fill="#fbbf24">A₃=৩</text>
      <text x="140" y="208" font-size="9" fill="#9290a8">reply</text>

      <path d="M 433 165 Q 280 190 127 210" fill="none" stroke="#3dd6c4" stroke-width="1.5" marker-end="url(#arrBlue1)" stroke-dasharray="5,3"/>

      <!-- Bottom note -->
      <rect x="60" y="245" width="440" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/>
      <text x="280" y="262" text-anchor="middle" font-size="10" font-weight="700" fill="#fbbf24">নিয়ম: C = max(A,B) + ১</text>
      <text x="280" y="277" text-anchor="middle" font-size="9" fill="#9290a8">A পাঠায় → A বাড়ায় → B পায় → B = max(B, A) + ১</text>
    </svg>
    <div class="diag-cap">Lamport clock প্রতিটা ঘটনাকে একটা লজিক্যাল টাইমস্ট্যাম্প দেয়। মেসেজ পেলে: নতুন টাইমস্ট্যাম্প = max(নিজের, প্রেরকের) + ১। এটা ঘড়ির সময় নয় — কার্যকারণের ক্রম।</div>
  </div>

  <div class="code-block"># ── STEP 1: Why distributed systems need logical clocks ──
# In distributed systems, physical clocks (wall time) are unreliable.

clock_problem = """
THE CLOCK PROBLEM:

On a single machine: system clock works fine.
  → Event A at 10:00:01
  → Event B at 10:00:02
  → A definitely happened before B

In distributed systems: each machine has its OWN clock.
  → Machine 1 clock: 10:00:01
  → Machine 2 clock: 10:00:03 (clock skew!)
  → Machine 2's event might "happen before" Machine 1's
    even though it actually occurred later

WHY CLOCKS DISAGREE:
  → Crystal oscillator drift (~1 sec per day)
  → NTP synchronization is approximate (±10ms)
  → Network delay makes synchronization harder
  → Daylight saving, timezone changes

SOLUTION: LOGICAL CLOCKS
  → Don't measure WHEN things happen
  → Measure WHAT ORDER things happen (causality)
  → Lamport Clock (1978): order events by causality
"""

print(clock_problem)</div>

  <div class="code-block"># ── STEP 2: Lamport Clock algorithm ──
# Leslie Lamport's solution: count events, not seconds.

lamport = """
LAMPORT CLOCK ALGORITHM:

Each process maintains a counter (starting at 0).

THREE RULES:

1. LOCAL EVENT (process does something):
   counter = counter + 1
   timestamp = counter

2. SEND MESSAGE:
   counter = counter + 1
   attach counter value to the message

3. RECEIVE MESSAGE:
   counter = max(counter, message_counter) + 1
   timestamp = counter

KEY PROPERTY:
  If A happens-before B, then timestamp(A) < timestamp(B)
  → Causality is preserved
  → We can ORDER events without physical clocks

IMPORTANT LIMITATION:
  timestamp(A) < timestamp(B) does NOT mean A caused B
  → They might be concurrent (no causal relationship)
  → Vector clocks solve this (next door)
"""

print(lamport)

# PYTHON: Lamport Clock implementation:
lamport_code = """
class LamportClock:
    def __init__(self):
        self.counter = 0

    def local_event(self):
        self.counter += 1
        return self.counter

    def send_event(self):
        self.counter += 1
        return self.counter  # attached to message

    def receive_event(self, received_timestamp):
        self.counter = max(self.counter, received_timestamp) + 1
        return self.counter

# Example: two processes communicating:
clock_a = LamportClock()
clock_b = LamportClock()

t1 = clock_a.local_event()        # A does something → t=1
t2 = clock_a.send_event()         # A sends to B → t=2
t3 = clock_b.receive_event(t2)    # B receives → max(0,2)+1 = 3
t4 = clock_b.local_event()        # B does something → t=4

print(f"A local: {t1}, A send: {t2}, B recv: {t3}, B local: {t4}")
# A local: 1, A send: 2, B recv: 3, B local: 4
# Causality preserved: 1 < 2 < 3 < 4
"""

print(lamport_code)</div>

  <div class="code-block"># ── STEP 3: Happens-before relationship ──
# The foundation of distributed system ordering.

happens_before = """
HAPPENS-BEFORE RELATION (→):

A → B means "A happened before B" (A caused or influenced B).

THREE RULES:
1. Same process: if A comes before B in the same process, A → B
2. Message: if A sends a message that B receives, A → B
3. Transitivity: if A → B and B → C, then A → C

CONCURRENT EVENTS (||):
  If neither A → B nor B → A, they are CONCURRENT.
  → A || B (happened independently, no causal link)
  → Order doesn't matter

EXAMPLE:
  Process 1: A → B → C
  Process 2: X → Y

  If B sends message received at Y:
    A → B → Y (transitivity)
    X → Y (same process)
    But A || X (concurrent, no causal link)

REAL-WORLD ANALOGY:
  A: "I sent the email"
  B: "You read the email"
  A → B (clear causality)

  A: "I ate breakfast"
  B: "My friend in Tokyo ate lunch"
  A || B (concurrent, no causal link)
"""

print(happens_before)</div>

  <div class="code-block"># ── STEP 4: Vector clocks (for detecting concurrency) ──
# Vector clocks solve Lamport's limitation.

vector_clocks = """
VECTOR CLOCKS (Mattern, Fidge, 1988):

LAMPORT LIMITATION:
  timestamp(A) < timestamp(B) doesn't mean A → B
  → They might be concurrent
  → Can't distinguish causality from coincidence

VECTOR CLOCK SOLUTION:
  Each process maintains a VECTOR of counters (one per process)

  V = [c1, c2, c3, ...] where ci = process i's event count

RULES:
1. Local event: V[my_id] += 1
2. Send message: attach entire vector V
3. Receive message(m_vector): V[i] = max(V[i], m_vector[i]) for all i; V[my_id] += 1

COMPARING VECTORS:
  V1 < V2 iff V1[i] <= V2[i] for all i AND V1 != V2
  → V1 < V2 means V1 happened-before V2 (TRUE causality!)
  → V1 || V2 means concurrent (neither caused the other)

EXAMPLE:
  P1: [1,0] → [2,0] → [2,1] → [2,2]
  P2: [0,1] → [1,1] → [2,2]

  [2,2] > [1,1] → P1's [2,2] happened after P2's [1,1]
  [2,0] || [0,1] → concurrent events

VECTOR CLOCKS DETECT CONCURRENCY.
LAMPORT CLOCKS ONLY ORDER (can't detect concurrency).
"""

print(vector_clocks)

# PYTHON: Vector Clock:
vector_code = """
class VectorClock:
    def __init__(self, num_processes, my_id):
        self.clock = [0] * num_processes
        self.my_id = my_id

    def local_event(self):
        self.clock[self.my_id] += 1
        return list(self.clock)

    def send_event(self):
        self.clock[self.my_id] += 1
        return list(self.clock)  # send entire vector

    def receive_event(self, received_vector):
        for i in range(len(self.clock)):
            self.clock[i] = max(self.clock[i], received_vector[i])
        self.clock[self.my_id] += 1
        return list(self.clock)

    @staticmethod
    def compare(v1, v2):
        if all(a <= b for a, b in zip(v1, v2)) and v1 != v2:
            return "v1 happened-before v2"
        elif all(b <= a for a, b in zip(v1, v2)) and v1 != v2:
            return "v2 happened-before v1"
        else:
            return "concurrent"

# Usage:
p1 = VectorClock(num_processes=2, my_id=0)
p2 = VectorClock(num_processes=2, my_id=1)

t1 = p1.local_event()  # [1, 0]
t2 = p2.local_event()  # [0, 1]
print(VectorClock.compare(t1, t2))  # "concurrent"
"""

print(vector_code)</div>

  <div class="code-block"># ── STEP 5: Real-world applications of logical clocks ──
# Where these concepts are used in production systems.

applications = {
    "Distributed Databases": {
        "systems": "Cassandra, DynamoDB, Riak, CockroachDB",
        "use": "Order writes across replicas, detect conflicts",
        "clock_type": "Vector clocks / hybrid logical clocks",
    },
    "Version Control (Git)": {
        "systems": "Git, Mercurial",
        "use": "Track commit order, detect merge conflicts",
        "clock_type": "DAG (directed acyclic graph) of commits",
    },
    "Collaborative Editing": {
        "systems": "Google Docs, Figma, Etherpad",
        "use": "Order edits from multiple users simultaneously",
        "clock_type": "Operational Transform / CRDTs",
    },
    "Distributed Tracing": {
        "systems": "Jaeger, Zipkin, OpenTelemetry",
        "use": "Trace request flow across microservices",
        "clock_type": "Span timestamps (adjusted for clock skew)",
    },
    "Event Sourcing": {
        "systems": "Kafka, EventStoreDB",
        "use": "Order events in an event log",
        "clock_type": "Sequence numbers / vector clocks",
    },
    "Conflict-Free Replicated Data Types (CRDTs)": {
        "systems": "Redis CRDT, Automerge, Yjs",
        "use": "Merge concurrent edits without conflicts",
        "clock_type": "Vector clocks / version vectors",
    },
}

print("APPLICATIONS OF LOGICAL CLOCKS:")
for app, info in applications.items():
    print(f"\\n  {app}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# CASSANDRA EXAMPLE (real-world):
cassandra = """
CASSANDRA'S USE OF TIMESTAMPS:

Cassandra uses timestamps for conflict resolution:
  → Each write includes a timestamp
  → When replicas differ: last-write-wins (LWW)
  → Problem: clock skew → wrong winner

SOLUTION: Hybrid Logical Clocks (HLC)
  → Combines physical time + logical counter
  → Physical time for human readability
  → Logical counter for causality
  → Used in CockroachDB, YugabyteDB, Spanner
"""
print(cassandra)</div>

  <div class="code-block"># ── STEP 6: Clock synchronization (NTP and beyond) ──
# How machines try to keep physical clocks in sync.

clock_sync = """
CLOCK SYNCHRONIZATION:

NTP (Network Time Protocol):
  → Syncs machine clock to time servers
  → Accuracy: ±10ms over internet, ±1ms on LAN
  → Runs continuously (adjusts for drift)
  → Hierarchical: stratum 0 (atomic clock) → stratum 1 → stratum 2 → ...

PROBLEMS WITH NTP:
  → Still has ±10ms error
  → Clock can go BACKWARD (dangerous!)
  → Leap seconds cause jumps
  → VM migration: clock jumps

GOOGLE'S SOLUTION: TrueTime (Spanner)
  → GPS + atomic clocks in data centers
  → Returns a RANGE: [earliest, latest] (not exact time)
  → Wait for uncertainty to pass before committing
  → Cost: expensive infrastructure
  → Accuracy: ±7ms (much better than NTP)

HYBRID LOGICAL CLOCKS (HLC):
  → Combines NTP + Lamport clock
  → Physical component (for readability)
  → Logical component (for causality)
  → Used in CockroachDB, YugabyteDB
  → Best of both worlds

WHEN TO USE WHICH:
  → NTP: good enough for most apps (timestamps, logs)
  → TrueTime: Google-level data consistency
  → HLC: distributed databases without GPS
  → Lamport: when you only need causality (not wall time)
  → Vector: when you need to detect concurrency
"""

print(clock_sync)

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Clock Type       │ Best For                        │
# ├──────────────────┼──────────────────────────────────┤
# │ Physical (NTP)   │ Timestamps, logs (±10ms)       │
# │ Lamport          │ Causal ordering (simple)        │
# │ Vector           │ Detecting concurrency           │
# │ HLC              │ Distributed databases           │
# │ TrueTime         │ Global consistency (Google)     │
# │ happens-before   │ Foundation of all ordering      │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৪ (City Builder's Codex / System Design) Door ৭-এ Consensus শিখেছিলে — Paxos, Raft। সেই Paxos-এর জনক এই ল্যাম্পোর্ট। Book ৩৪ (Scale of Evidence) Door ৮-এ Causal Inference শিখেছিলে — Lamport clock হলো সেই কার্যকারণের (cause → effect) গাণিতিক রূপ।</div></div>

  <div class="verse">
    <div class="verse-arabic">إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ</div>
    <div class="verse-translation">নিশ্চয় এতে চিন্তাশীল সম্প্রদায়ের জন্য নিদর্শন রয়েছে।</div>
    <div class="verse-ref">— কুরআন ৪৫:১৩</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">⏰</div>
    <div class="secret-text">ঘড়ি নয়, কারণ বোঝো — কে আগে, কে পরে, তা কার্যকারণে নির্ধারিত।</div>
    <div class="secret-sub">Not clocks, but causality — who came first is determined by cause and effect.</div>
  </div>`,
  senior: {
    title: "প্রতিটা ইভেন্টে টাইমস্ট্যাম্প দাও",
    body: `<p><strong>১. লজিক্যাল টাইম বনাম ফিজিক্যাল টাইম:</strong> বিতরণ সিস্টেমে কখনো ফিজিক্যাল ঘড়ির উপর নির্ভর করবে না। NTP এমনকুরেট হলেও পারফেক্ট নয়।</p>
    <p><strong>২. happens-before চিন্তা করো:</strong> যেকোনো দুই ইভেন্টে জিজ্ঞেস করো — একটা কি অন্যটাকে কারণ করেছে? যদি হ্যাঁ → happens-before। যদি না → concurrent।</p>
    <p><strong>৩. Lamport clock vector clock-এর সহজ রূপ:</strong> পরের দরজায় দেখবে কীভাবে আরও নিখুঁত ordering করা যায়।</p>`
  }
});

doors.push({
  num: 2,
  icon: "🚦",
  color: "#fbbf24",
  name: "এক সময় একজন",
  subtitle: "One at a Time",
  tech: "Mutual Exclusion, Semaphores, and Race Conditions (Dijkstra, 1965)",
  spirit: "ইনসাফ — ন্যায্য ক্রম, এক সময় একজনের অধিকার",
  secret: "দুজন একসাথে দরজায় গেলে ধাক্কা — একজন আগে, একজন পরে। সিগন্যাল সেটা ঠিক করে।",
  recall: {
    q: "Race condition কী? Semaphore কীভাবে এটা সমাধান করে?",
    qen: "What is a race condition? How does a semaphore solve it?",
    a: "দুই প্রক্রিয়া একসাথে একটা শেয়ার্ড রিসোর্স ব্যবহার করতে চাইলে race condition — ফলাফল অনিশ্চিত। Semaphore একটা সিগন্যাল: অপেক্ষা করো (wait/P) → রিসোর্স নাও → কাজ শেষ → ছেড়ে দাও (signal/V)। এক সময় একজন।",
    aen: "When two processes try to use a shared resource simultaneously = race condition — result unpredictable. Semaphore is a signal: wait (P) → take resource → work → release (signal/V). One at a time."
  },
  story: `<p class="scene-setting">আমস্টারডাম, ১৯৬৫। একজন ওলন্দাজ কম্পিউটার বিজ্ঞানী একটা সমস্যা নিয়ে ভাবছেন — দুইটা প্রোগ্রাম যদি একই ফাইলে একসাথে লেখে, কী হবে? একটা প্রোগ্রাম লিখছে 'আয়' — আরেকটা একই সময়ে লিখছে 'যাও'। ফাইলে সংরক্ষিত হলো 'আয়তয়াও' — অর্থহীন। তাঁর নাম — এডসগার ডাইকস্ট্রা (Edsger Dijkstra)।</p>

  <p class="scene-setting en">Amsterdam, 1965. A Dutch computer scientist pondered a problem — if two programs write to the same file simultaneously, what happens? One writes 'come', the other writes 'go' at the same time. The file stores 'cogoome' — meaningless. His name — Edsger Dijkstra.</p>

  <div class="dialogue">
    <p><strong>ডাইকস্ট্রা:</strong> একটা রিসোর্স এক সময় একজনের। দুজন একসাথে গেলে ধ্বংস। তোমার দরজায় একটা সিগন্যাল দরকার — লাল বাতি জ্বললে অপেক্ষা করো, সবুজ জ্বললে যাও। এটাই semaphore।</p>
    <p><strong>তুমি:</strong> সিগন্যালটা কে নিয়ন্ত্রণ করে?</p>
    <p><strong>ডাইকস্ট্রা:</strong> একটা পূর্ণসংখ্যা। মান ১ হলে রিসোর্স খালি — যাও। মান ০ হলে কেউ ব্যবহার করছে — অপেক্ষা করো। প্রবেশ করলে মান কমাও (P/wait), বের হলে মান বাড়াও (V/signal)। এটাই মিউচুয়াল এক্সক্লুশন — এক সময় একজন।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Dijkstra:</strong> One resource, one person at a time. Two at once = destruction. You need a signal at the door — red light means wait, green means go. This is the semaphore.</p>
    <p><strong>You:</strong> Who controls the signal?</p>
    <p><strong>Dijkstra:</strong> An integer. Value 1 means resource free — go. Value 0 means someone is using it — wait. On entry, decrement (P/wait). On exit, increment (V/signal). This is mutual exclusion — one at a time.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> এডসগার ডাইকস্ট্রা (১৯৩০-২০০২, রটারডাম, নেদারল্যান্ডস) ১৯৬৫ সালে semaphore ধারণা প্রকাশ করেন। তিনি বিখ্যাত Dijkstra shortest-path algorithm-এর জনক। ১৯৬৮ সালে তাঁর বিখ্যাত গবেষণাপত্র <em>"Go To Statement Considered Harmful"</em> Communications of the ACM-এ প্রকাশিত — যা structured programming-এর ভিত্তি। তিনি ১৯৭২ সালে Turing Award পান।</div></div>

  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>Deadlock বিপদ:</strong> যদি A, B-র রিসোর্সের জন্য অপেক্ষা করে এবং B, A-র রিসোর্সের জন্য অপেক্ষা করে — দুজনই চিরকাল অপেক্ষা করবে। এটাই deadlock। ডাইকস্ট্রা এটাও অধ্যয়ন করেছেন — কীভাবে এড়াবে তা পরবর্তী দরজায়।</div></div>

  <div class="diagram">
    <div class="diag-title">Race Condition → Semaphore সমাধান</div>
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrOrange2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f97316"/>
        </marker>
      </defs>

      <!-- Title -->
      <text x="280" y="18" text-anchor="middle" font-family="Cinzel,serif" font-size="10" font-weight="700" fill="#fbbf24" letter-spacing="2">RACE CONDITION & SEMAPHORE</text>

      <!-- Left: Race Condition -->
      <rect x="15" y="35" width="250" height="110" rx="10" fill="rgba(239,68,68,0.08)" stroke="#ef4444" stroke-width="1.5"/>
      <text x="140" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#ef4444">❌ Race Condition</text>
      <text x="140" y="70" text-anchor="middle" font-size="9" fill="#9290a8">দুজন একসাথে — ফলাফল অর্থহীন</text>
      <circle cx="80" cy="95" r="8" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="1.5"/>
      <text x="80" y="99" text-anchor="middle" font-size="9" font-weight="700" fill="#f97316">A</text>
      <circle cx="200" cy="95" r="8" fill="rgba(61,214,196,0.2)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="200" y="99" text-anchor="middle" font-size="9" font-weight="700" fill="#3dd6c4">B</text>
      <path d="M 88 92 L 175 92" fill="none" stroke="#f97316" stroke-width="1" stroke-dasharray="3,2"/>
      <path d="M 192 98 L 105 98" fill="none" stroke="#3dd6c4" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="140" y="120" text-anchor="middle" font-size="9" fill="#ef4444">ফাইল: "আয়তয়াও" 💥</text>
      <text x="140" y="135" text-anchor="middle" font-size="8" fill="#9290a8">corrupted — no order</text>

      <!-- Right: Semaphore -->
      <rect x="295" y="35" width="250" height="110" rx="10" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="420" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#52c41a">✅ Semaphore</text>
      <text x="420" y="70" text-anchor="middle" font-size="9" fill="#9290a8">এক সময় একজন — ক্রমানুসার</text>
      <circle cx="360" cy="95" r="8" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="1.5"/>
      <text x="360" y="99" text-anchor="middle" font-size="9" font-weight="700" fill="#f97316">A</text>
      <circle cx="480" cy="95" r="8" fill="rgba(61,214,196,0.12)" stroke="#3dd6c4" stroke-width="1" opacity="0.4"/>
      <text x="480" y="99" text-anchor="middle" font-size="9" fill="#5e5c74">B</text>
      <rect x="400" y="88" width="30" height="14" rx="3" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="1"/>
      <text x="415" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#fbbf24">S=০</text>
      <text x="360" y="120" text-anchor="middle" font-size="9" fill="#52c41a">ফাইল: "আয়" ✓</text>
      <text x="360" y="135" text-anchor="middle" font-size="8" fill="#9290a8">A writes, B waits</text>

      <!-- Arrow connecting -->
      <path d="M 265 90 L 295 90" fill="none" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrOrange2)"/>
      <text x="280" y="83" text-anchor="middle" font-size="8" font-style="italic" fill="#fbbf24">সমাধান</text>

      <!-- Bottom: P/V operations -->
      <rect x="60" y="170" width="440" height="95" rx="8" fill="rgba(249,115,22,0.05)" stroke="#f97316" stroke-width="0.5"/>
      <text x="280" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="#fbbf24">Semaphore অপারেশন — P (wait) ও V (signal)</text>
      <text x="140" y="210" text-anchor="middle" font-size="10" font-weight="700" fill="#f97316">P (proberen / wait)</text>
      <text x="140" y="225" text-anchor="middle" font-size="9" fill="#9290a8">S = S - ১</text>
      <text x="140" y="240" text-anchor="middle" font-size="9" fill="#9290a8">যদি S < ০ → ব্লক</text>
      <text x="420" y="210" text-anchor="middle" font-size="10" font-weight="700" fill="#52c41a">V (verhogen / signal)</text>
      <text x="420" y="225" text-anchor="middle" font-size="9" fill="#9290a8">S = S + ১</text>
      <text x="420" y="240" text-anchor="middle" font-size="9" fill="#9290a8">অপেক্ষারত কাউকে জাগাও</text>
      <line x1="265" y1="200" x2="265" y2="245" stroke="rgba(92,92,116,0.3)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="280" y="258" text-anchor="middle" font-size="8" font-style="italic" fill="#9290a8">S=১: খালি | S=০: ব্যস্ত | S<০: ব্লকড</text>
    </svg>
    <div class="diag-cap">বাম: race condition — দুজন একসাথে লিখলে ফাইল নষ্ট। ডান: semaphore — একজন লেখে, অন্যজন অপেক্ষা করে। P (wait) রিসোর্স নেয়, V (signal) ছেড়ে দেয়।</div>
  </div>

  <div class="code-block"># ── STEP 1: Race conditions and mutual exclusion ──
# When multiple processes access shared data simultaneously → chaos.

race_condition = """
RACE CONDITION:

Two threads read/update the same variable:
  Thread 1: reads balance (100)
  Thread 2: reads balance (100)
  Thread 1: balance = 100 + 50 = 150  → writes 150
  Thread 2: balance = 100 - 30 = 70   → writes 70  ← WRONG!

  Expected: 100 + 50 - 30 = 120
  Actual: 70 (Thread 2's write overwrote Thread 1)

MUTUAL EXCLUSION (Mutex):
  → Only ONE thread can access the resource at a time
  → Thread 1 locks → does work → unlocks
  → Thread 2 waits until lock released
  → No interleaving, no data corruption

SEMAPHORE (Dijkstra, 1965):
  A counter that controls access:
  → P (wait/proberen): decrement counter, block if < 0
  → V (signal/verhogen): increment counter, wake one if <= 0
"""

print(race_condition)

# PYTHON: Race condition and mutex:
race_code = """
import threading

balance = 100

# WITHOUT LOCK (race condition):
def deposit_without_lock(amount):
    global balance
    temp = balance          # read
    temp += amount          # modify
    balance = temp          # write ← another thread might overwrite!

# WITH LOCK (safe):
lock = threading.Lock()

def deposit_with_lock(amount):
    global balance
    with lock:              # acquire lock
        temp = balance
        temp += amount
        balance = temp      # safe — no other thread can interleave
                        # lock released automatically (context manager)

# Test with 1000 threads each depositing $1:
threads = []
for _ in range(1000):
    t = threading.Thread(target=deposit_with_lock, args=(1,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print(f"Final balance: {balance}")  # Should be 1100 with lock
                                      # Might be 1047 without lock (race!)
"""

print(race_code)</div>

  <div class="code-block"># ── STEP 2: Semaphores vs Mutexes ──
# Different synchronization primitives for different needs.

comparison = {
    "Mutex (Binary Semaphore)": {
        "what": "Lock that only ONE thread can hold",
        "values": "0 (locked) or 1 (unlocked)",
        "use_case": "Mutual exclusion (one at a time)",
        "example": "Bank account update, file write",
    },
    "Counting Semaphore": {
        "what": "Counter allowing N concurrent access",
        "values": "0 to N (any positive integer)",
        "use_case": "Resource pool (N connections, N printers)",
        "example": "Connection pool (max 10 DB connections)",
    },
    "RWLock (Read-Write Lock)": {
        "what": "Multiple readers OR one writer",
        "values": "Shared (read) or exclusive (write)",
        "use_case": "Read-heavy data (cache, config)",
        "example": "Cache reads (parallel) vs cache update (exclusive)",
    },
    "Condition Variable": {
        "what": "Wait until a condition becomes true",
        "values": "Signal/broadcast to wake waiters",
        "use_case": "Producer-consumer pattern",
        "example": "Task queue (wait for tasks)",
    },
}

print("SYNCHRONIZATION PRIMITIVES:")
for prim, info in comparison.items():
    print(f"\\n  {prim}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# SEMAPHORE OPERATIONS:
sem_ops = """
SEMAPHORE OPERATIONS (Dutch names by Dijkstra):

P (proberen = "to test"):
  S = S - 1
  if S < 0: block (wait in queue)

V (verhogen = "to increase"):
  S = S + 1
  if S <= 0: wake one waiting process

BINARY SEMAPHORE (Mutex):
  S starts at 1
  P: S=0 (locked)
  V: S=1 (unlocked)
  → Only ONE process in critical section

COUNTING SEMAPHORE:
  S starts at N (e.g., 10 for connection pool)
  P: S-- (take a slot)
  V: S++ (release a slot)
  → Up to N concurrent processes
"""
print(sem_ops)</div>

  <div class="code-block"># ── STEP 3: Deadlock and how to prevent it ──
# When processes wait forever for each other's locks.

deadlock = """
DEADLOCK:

Thread 1: holds Lock A, waits for Lock B
Thread 2: holds Lock B, waits for Lock A
→ Both wait forever. Deadlock!

FOUR CONDITIONS FOR DEADLOCK (Coffman):
1. Mutual Exclusion: resources are non-shareable
2. Hold and Wait: holding one resource, waiting for another
3. No Preemption: can't forcefully take resources
4. Circular Wait: A waits B, B waits C, C waits A

PREVENTION STRATEGIES:
1. Lock Ordering: ALWAYS acquire locks in the SAME order
   → Lock A before Lock B (never B before A)
   → Eliminates circular wait

2. Lock Timeout: if can't get lock in N seconds, release all and retry
   → Eliminates hold-and-wait

3. Deadlock Detection: periodically check for cycles, kill one process
   → Used by databases (PostgreSQL, MySQL)

4. Two-Phase Locking: acquire ALL locks first, then do work, then release ALL
   → Eliminates hold-and-wait
"""

print(deadlock)

# PYTHON: Deadlock prevention:
deadlock_code = """
import threading
import time

# BAD: Different lock order → potential deadlock:
def transfer_bad(from_account, to_account, amount):
    from_account.lock.acquire()  # Lock A
    time.sleep(0.01)  # Simulate work
    to_account.lock.acquire()    # Lock B ← might deadlock!
    # ... transfer ...
    to_account.lock.release()
    from_account.lock.release()

# GOOD: Consistent lock ordering → no deadlock:
def transfer_good(account_a, account_b, amount):
    # Always lock lower-ID account first:
    first = account_a if account_a.id < account_b.id else account_b
    second = account_b if account_a.id < account_b.id else account_a

    first.lock.acquire()
    second.lock.acquire()
    # ... transfer ...
    second.lock.release()
    first.lock.release()

# This eliminates circular wait: all threads acquire locks in same order.
"""

print(deadlock_code)</div>

  <div class="code-block"># ── STEP 4: Distributed mutual exclusion ──
# Locking across multiple machines is much harder.

distributed_lock = """
DISTRIBUTED MUTUAL EXCLUSION:

Single machine: mutex/semaphore works (shared memory).
Multiple machines: no shared memory → need distributed locking.

THREE APPROACHES:

1. CENTRALIZED (simplest):
   → One "lock server" manages all locks
   → Pros: simple, correct
   → Cons: single point of failure, bottleneck

2. TOKEN PASSING (ring):
   → Machines form a logical ring
   → Token circulates; only token holder can access resource
   → Pros: fair, no central server
   → Cons: token loss, node failure

3. RAFT/PAXOS CONSENSUS:
   → Quorum of nodes agrees on who holds the lock
   → Pros: fault-tolerant, no single point of failure
   → Cons: complex, latency overhead
   → Used by: etcd, ZooKeeper, Consul, Redis Redlock
"""

print(distributed_lock)

# REDIS DISTRIBUTED LOCK (Redlock):
redis_lock = """
REDIS REDLOCK ALGORITHM:

import redis
import time
import uuid

def acquire_lock(redis_client, lock_name, timeout=10):
    identifier = str(uuid.uuid4())
    end = time.time() + timeout

    while time.time() < end:
        # SET NX = only if not exists, PX = expire after ms:
        if redis_client.set(lock_name, identifier, nx=True, px=timeout*1000):
            return identifier  # Got the lock!
        time.sleep(0.001)  # Brief wait before retry

    return None  # Timeout, couldn't get lock

def release_lock(redis_client, lock_name, identifier):
    # Only release if we still own it (check + delete atomically):
    script = '''
    if redis.call("get", KEYS[1]) == ARGV[1] then
        return redis.call("del", KEYS[1])
    else
        return 0
    end
    '''
    return redis_client.eval(script, 1, lock_name, identifier)

# Usage:
lock_id = acquire_lock(redis_client, "user:42:update")
if lock_id:
    try:
        # Critical section (only one process at a time):
        update_user(42)
    finally:
        release_lock(redis_client, "user:42:update", lock_id)
"""

print(redis_lock)</div>

  <div class="code-block"># ── STEP 5: Common concurrency patterns ──
# Reusable patterns for concurrent programming.

patterns = {
    "Producer-Consumer": {
        "how": "Producers add to queue, consumers take from queue",
        "sync": "Semaphore or condition variable for empty/full",
        "use": "Task queues, message processing, log writers",
    },
    "Readers-Writers": {
        "how": "Multiple readers OK, only one writer at a time",
        "sync": "RWLock (shared for reads, exclusive for writes)",
        "use": "Caches, configuration, databases",
    },
    "Dining Philosophers": {
        "how": "N philosophers need 2 forks to eat, N forks on table",
        "sync": "Lock ordering or resource hierarchy",
        "use": "Classic deadlock example (educational)",
    },
    "Barrier": {
        "how": "N threads wait at barrier, all proceed when N arrive",
        "sync": "CountDownLatch or CyclicBarrier",
        "use": "Parallel computation phases (MapReduce)",
    },
    "Future/Promise": {
        "how": "Start async work, get result later",
        "sync": "async/await or threading.Future",
        "use": "API calls, file I/O, parallel tasks",
    },
    "Thread Pool": {
        "how": "Fixed pool of workers processing tasks from queue",
        "sync": "Queue + semaphore",
        "use": "Web servers, background jobs",
    },
}

print("CONCURRENCY PATTERNS:")
for pattern, info in patterns.items():
    print(f"\\n  {pattern}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# PRODUCER-CONSUMER (Python):
producer_consumer = """
import threading
import queue
import time

# Thread-safe queue:
task_queue = queue.Queue(maxsize=10)

# Producer:
def producer():
    for i in range(20):
        task_queue.put(i)  # Blocks if queue full
        print(f"Produced: {i}")

# Consumer:
def consumer():
    while True:
        item = task_queue.get()  # Blocks if queue empty
        print(f"Consumed: {item}")
        task_queue.task_done()

# Start:
for _ in range(3):
    threading.Thread(target=consumer, daemon=True).start()
producer()
task_queue.join()  # Wait for all tasks done
"""

print(producer_consumer)</div>

  <div class="code-block"># ── STEP 6: Best practices for concurrent systems ──
# Avoid the most common concurrency pitfalls.

best_practices = [
    "Always use locks for shared mutable state",
    "Prefer immutable data (no locks needed if data doesn't change)",
    "Use consistent lock ordering to prevent deadlock",
    "Keep critical sections SHORT (minimize lock hold time)",
    "Never hold a lock while doing I/O (network, file, database)",
    "Use thread-safe data structures (Queue, ConcurrentHashMap)",
    "Prefer message passing (channels) over shared memory",
    "Use timeout on locks (detect deadlock early)",
    "Test with many threads (race conditions are non-deterministic)",
    "Use static analysis tools (ThreadSanitizer, Helgrind)",
    "In distributed systems: use consensus (Raft/Paxos) for locks",
    "Consider lock-free data structures (CAS, atomic operations)",
    "Document lock ordering conventions for the team",
    "Use connection pools (semaphore for limited connections)",
    "Monitor for deadlocks in production (alert if detected)",
]

print("CONCURRENCY BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ Race condition   │ Concurrent access → corruption  │
# │ Mutex            │ One thread at a time            │
# │ Semaphore        │ N threads at a time             │
# │ Deadlock         │ Circular wait → both stuck      │
# │ Lock ordering    │ Always acquire in same order    │
# │ Distributed lock │ Redis Redlock / etcd / Raft     │
# │ Producer-Consumer│ Queue + semaphore pattern       │
# │ RWLock           │ Many readers, one writer        │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ২ (Bazaar of Algorithms) Door ১৪-এ Graphs (BFS/DFS) শিখেছিলে — ডাইকস্ট্রা shortest-path algorithm সেই গ্রাফ থিওরির অংশ। Book ৪ (System Design) Door ৫-এ Transactions & ACID শিখেছিলে — ট্রানজেকশনের 'I' (Isolation) হলো mutual exclusion-এর ডেটাবেস রূপ।</div></div>

  <div class="verse">
    <div class="verse-arabic">وَأَنَّ هَٰذَا صِرَاطِي مُسْتَقِيمًا فَاتَّبِعُوهُ</div>
    <div class="verse-translation">আর এটাই আমার সরল পথ — তোমরা এটা অনুসরণ করো।</div>
    <div class="verse-ref">— কুরআন ৬:১৫৩</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🚦</div>
    <div class="secret-text">এক সময় একজন — ক্রম ছাড়া সিস্টেম ধ্বংস হয়।</div>
    <div class="secret-sub">One at a time — without order, a system destroys itself.</div>
  </div>`,
  senior: {
    title: "প্রতিটা শেয়ার্ড রিসোর্সে লক দাও",
    body: `<p><strong>১. Race condition সন্দেহ করো:</strong> দুই থ্রেড একই ভেরিয়েবল লিখলে — সবসময় race condition। Mutex দিয়ে সুরক্ষিত করো।</p>
    <p><strong>২. Deadlock এড়াও:</strong> লক ক্রম সবসময় একই — A তারপর B। কখনো B তারপর A নয়। অন্যথায় deadlock।</p>
    <p><strong>৩. বিতরণ সিস্টেমে:</strong> এক মেশিনে mutex সহজ। হাজার মেশিনে — এটাই পরবর্তী দরজাগুলোর বিষয়।</p>`
  }
});

doors.push({
  num: 3,
  icon: "🔺",
  color: "#f97316",
  name: "ত্রয়ীর দ্বন্দ্ব",
  subtitle: "The Triangle Dilemma",
  tech: "CAP Theorem — Consistency, Availability, Partition Tolerance (Brewer, 2000; Gilbert & Lynch, 2002)",
  spirit: "তাকওয়া — সীমা মেনে চলা, ত্যাগ ছাড়া লাভ নেই",
  secret: "তিনটা গুণ — কিন্তু একসাথে দুটো ছাড়া আরেকটা। পছন্দ করতেই হবে।",
  recall: {
    q: "CAP উপপাদ্য কী? কোন তিনটি গুণের কথা বলে?",
    qen: "What is the CAP theorem? Which three properties does it talk about?",
    a: "Consistency (সব নোডে একই ডেটা), Availability (সব রিকোয়েস্টে উত্তর), Partition Tolerance (নেটওয়ার্ক ভাগ হলেও কাজ)। CAP বলে — বিতরণ সিস্টেমে এই তিনের মধ্যে সর্বোচ্চ দুটো পাওয়া যায়। P বাদ দেওয়া যায় না, তাই C বা A বেছে নিতে হয়।",
    aen: "Consistency (same data everywhere), Availability (every request gets response), Partition Tolerance (works despite network splits). CAP says — in distributed systems you can have at most two. P is unavoidable, so choose C or A."
  },
  story: `<p class="scene-setting">ক্যালিফোর্নিয়া, ২০০০। PODC (Principles of Distributed Computing) সম্মেলনে একজন বিজ্ঞানী keynote দিচ্ছেন। তাঁর দাবি সহজ কিন্তু বিপ্লবাত্মক — বিতরণ সিস্টেমে তিনটা জিনিস একসাথে পাওয়া যায় না। তাঁর নাম — এরিক ব্রুয়ার (Eric Brewer)। UC Berkeley-এর অধ্যাপক এবং Inktomi (প্রথম সার্চ ইঞ্জিন কোম্পানি)-এর প্রতিষ্ঠাতা।</p>

  <p class="scene-setting en">California, 2000. At the PODC symposium, a scientist gives a keynote. His claim is simple but revolutionary — in distributed systems, you can't have three things at once. His name — Eric Brewer. Professor at UC Berkeley and founder of Inktomi (the first search engine company).</p>

  <div class="dialogue">
    <p><strong>ব্রুয়ার:</strong> তুমি চাও — সব নোডে একই ডেটা (Consistency)। চাও — সব রিকোয়েস্টে উত্তর পাও (Availability)। চাও — নেটওয়ার্ক বিভক্ত হলেও কাজ চলুক (Partition Tolerance)। কিন্তু তিনটে একসাথে অসম্ভব।</p>
    <p><strong>তুমি:</strong> কেন অসম্ভব? আমি তো চাই তিনটাই!</p>
    <p><strong>ব্রুয়ার:</strong> চিন্তা করো। দুই নোড A এবং B। নেটওয়ার্কে বিভাজন (partition) — A এবং B যোগাযোগ করতে পারছে না। এখন একজন ব্যবহারকারী A-কে বলল: ডেটা আপডেট করো। A দুটো পথ — হয় উত্তর দেবে (Available) কিন্তু B-কে জানাতে পারবে না (Inconsistent)। অথবা উত্তর দেবে না (Unavailable) কিন্তু সামঞ্জস্য রক্ষা করবে (Consistent)। দুটোই একসাথে সম্ভব নয়।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Brewer:</strong> You want — same data on all nodes (Consistency). You want — every request answered (Availability). You want — system works despite network splits (Partition Tolerance). But all three simultaneously is impossible.</p>
    <p><strong>You:</strong> Why impossible? I want all three!</p>
    <p><strong>Brewer:</strong> Think. Two nodes A and B. Network partition — A and B can't communicate. A user tells A: update the data. A has two choices — either respond (Available) but can't tell B (Inconsistent). Or refuse (Unavailable) but stay Consistent. Both at once is impossible.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> এরিক ব্রুয়ার UC Berkeley-এর কম্পিউটার সায়েন্স অধ্যাপক। Inktomi-এর সহ-প্রতিষ্ঠাতা (১৯৯৬)। CAP উপপাদ্য প্রথম উপস্থাপন করেন PODC ২০০০ keynote-এ। আনুষ্ঠানিক প্রমাণ দেন Seth Gilbert এবং Nancy Lynch ২০০২ সালে (MIT)। ব্রুয়ার পরে Google-এ VP হন। ২০১২ সালে তিনি <em>"CAP Twelve Years Later"</em> (IEEE Computer)-এ ব্যাখ্যা করেন — partition বিরল, তাই সাধারণ অবস্থায় C এবং A দুটোই সম্ভব।</div></div>

  <div class="diagram">
    <div class="diag-title">CAP Triangle — তিন গুণের দ্বন্দ্ব</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrAmber3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/>
        </marker>
      </defs>

      <!-- Title -->
      <text x="280" y="18" text-anchor="middle" font-family="Cinzel,serif" font-size="10" font-weight="700" fill="#fbbf24" letter-spacing="2">CAP THEOREM — ত্রয়ীর দ্বন্দ্ব</text>

      <!-- Triangle vertices -->
      <!-- Top: Consistency -->
      <polygon points="280,45 265,30 295,30" fill="#f97316" opacity="0.3"/>
      <circle cx="280" cy="55" r="22" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="2"/>
      <text x="280" y="52" text-anchor="middle" font-size="10" font-weight="700" fill="#f97316">C</text>
      <text x="280" y="64" text-anchor="middle" font-size="8" fill="#9290a8">Consistency</text>

      <!-- Bottom left: Availability -->
      <circle cx="130" cy="220" r="22" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="2"/>
      <text x="130" y="217" text-anchor="middle" font-size="10" font-weight="700" fill="#52c41a">A</text>
      <text x="130" y="229" text-anchor="middle" font-size="8" fill="#9290a8">Availability</text>

      <!-- Bottom right: Partition -->
      <circle cx="430" cy="220" r="22" fill="rgba(91,158,255,0.15)" stroke="#5b9eff" stroke-width="2"/>
      <text x="430" y="217" text-anchor="middle" font-size="10" font-weight="700" fill="#5b9eff">P</text>
      <text x="430" y="229" text-anchor="middle" font-size="8" fill="#9290a8">Partition Tol.</text>

      <!-- Triangle edges -->
      <line x1="280" y1="77" x2="152" y2="198" stroke="rgba(92,92,116,0.3)" stroke-width="1" stroke-dasharray="5,3"/>
      <line x1="280" y1="77" x2="408" y2="198" stroke="rgba(92,92,116,0.3)" stroke-width="1" stroke-dasharray="5,3"/>
      <line x1="152" y1="220" x2="408" y2="220" stroke="rgba(92,92,116,0.3)" stroke-width="1" stroke-dasharray="5,3"/>

      <!-- Edge labels -->
      <text x="180" y="135" text-anchor="middle" font-size="8" fill="#9290a8" font-style="italic">CA (RDBMS)</text>
      <text x="380" y="135" text-anchor="middle" font-size="8" fill="#9290a8" font-style="italic">CP (HBase)</text>
      <text x="280" y="235" text-anchor="middle" font-size="8" fill="#9290a8" font-style="italic">AP (Dynamo, Cassandra)</text>

      <!-- System examples -->
      <text x="180" y="150" text-anchor="middle" font-size="10" fill="#5e5c74">MySQL, PostgreSQL</text>
      <text x="380" y="150" text-anchor="middle" font-size="10" fill="#5e5c74">MongoDB, HBase</text>
      <text x="280" y="250" text-anchor="middle" font-size="10" fill="#5e5c74">DynamoDB, Cassandra</text>

      <!-- Bottom explanation -->
      <rect x="40" y="265" width="480" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/>
      <text x="280" y="282" text-anchor="middle" font-size="10" font-weight="700" fill="#fbbf24">P অনিবার্য — তাই আসল পছন্দ: CP না AP?</text>
      <text x="280" y="297" text-anchor="middle" font-size="9" fill="#9290a8">নেটওয়ার্ক বিভাজন বিরল — সাধারণ সময়ে C ও A দুটোই সম্ভব (Brewer, ২০১২)</text>
    </svg>
    <div class="diag-cap">CAP ত্রিভুজ: C (সব নোডে একই ডেটা), A (সব রিকোয়েস্টে উত্তর), P (বিভাজন সহনশীলতা)। বিতরণ সিস্টেমে P বাদ দেওয়া যায় না — তাই CP বা AP বেছে নিতে হয়।</div>
  </div>

  <div class="code-block"># ── STEP 1: CAP Theorem — the fundamental trade-off ──
# Brewer's conjecture (2000), proved by Gilbert & Lynch (2002).

cap_theorem = """
CAP THEOREM:

In any distributed system, you can have AT MOST TWO of:

C - Consistency: All nodes see the same data simultaneously
A - Availability: Every request gets a response (no errors)
P - Partition Tolerance: System works despite network failures

THE HARD TRUTH:
  → Network partitions (P) are UNAVOIDABLE in distributed systems
  → You MUST choose between C and A when a partition occurs
  → P is not optional — networks WILL fail

WHEN PARTITION HAPPENS:
  Choose C: Block requests until consistency is restored
    → Users get errors/timeouts
    → Data is always correct

  Choose A: Serve requests with potentially stale data
    → Users get responses (fast)
    → Data might be inconsistent temporarily
"""

print(cap_theorem)

# THE THREE COMBINATIONS:
combinations = {
    "CP (Consistency + Partition Tolerance)": {
        "meaning": "Always consistent, may be unavailable during partition",
        "systems": "HBase, MongoDB, Redis Cluster, etcd, ZooKeeper",
        "behavior": "Blocks writes/reads during network split",
        "use_case": "Banking, financial transactions, configuration",
    },
    "AP (Availability + Partition Tolerance)": {
        "meaning": "Always available, may be temporarily inconsistent",
        "systems": "DynamoDB, Cassandra, CouchDB, Riak",
        "behavior": "Serves stale data during partition, resolves later",
        "use_case": "Social media, shopping cart, content feeds",
    },
    "CA (Consistency + Availability)": {
        "meaning": "Consistent and available, but no partition tolerance",
        "systems": "PostgreSQL (single node), MySQL (single node)",
        "behavior": "Works perfectly on single machine, no network",
        "use_case": "Traditional single-server databases",
    },
}

print("CAP COMBINATIONS:")
for combo, info in combinations.items():
    print(f"\\n  {combo}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

  <div class="code-block"># ── STEP 2: Real-world CAP examples ──
# How popular databases make the CAP trade-off.

examples = """
REAL-WORLD CAP EXAMPLES:

CP SYSTEMS (consistency first):
  MongoDB: Replica set with primary. If primary fails and partition
    occurs, system blocks until new primary is elected.
    → May return errors during election (seconds)
    → Data is ALWAYS consistent

  etcd/ZooKeeper: Configuration stores. Always consistent.
    → Used for distributed locking, service discovery
    → Block during partition rather than risk inconsistency

AP SYSTEMS (availability first):
  Cassandra: Tunable consistency. Default = available with eventual consistency.
    → Writes always succeed (even during partition)
    → Reads might return stale data (resolved via read-repair)

  DynamoDB: Always available. Uses vector clocks for conflict resolution.
    → Never returns errors due to partition
    → Conflicts resolved with last-write-wins or application logic

CHOOSING YOUR SYSTEM:
  Banking/Payments → CP (correctness > availability)
    "I'd rather my transaction fail than lose money"

  Social Media → AP (availability > correctness)
    "I'd rather see old posts than get an error"

  E-commerce → Mixed (cart = AP, checkout = CP)
    "Cart can be eventually consistent, payment must be consistent"
"""

print(examples)</div>

  <div class="code-block"># ── STEP 3: PACELC — beyond CAP ──
# PACELC extends CAP to include normal operation trade-offs.

pacelc = """
PACELC THEOREM (Abadi, 2010):

CAP only addresses what happens DURING a partition (P).
But what about when there's NO partition?

PACELC: If Partition (P): choose Availability or Consistency
        Else (E): choose Latency or Consistency

PRONOUNCED: "Pack-elk"

MEANING:
  During Partition: A vs C (same as CAP)
  During normal operation (Else): Latency vs Consistency

WHY THIS MATTERS:
  Even without partitions, there's a trade-off:
  → Strong consistency = more coordination = higher latency
  → Low latency = less coordination = weaker consistency

PACELC CLASSIFICATION:
  PA/EL: DynamoDB, Cassandra (AP + low latency, eventual consistency)
  PC/EC: MongoDB, HBase (CP + strong consistency, higher latency)
  PA/EC: MongoDB (tunable: can be PA during partition, EC normally)
  PC/EL: PNUTS (Yahoo's system)

EXAMPLE:
  Cassandra (PA/EL):
    Partition → Available (A), may be stale
    Normal → Low latency (L), eventual consistency

  MongoDB (PC/EC):
    Partition → Consistent (C), may block
    Normal → Strong consistency (C), higher latency
"""

print(pacelc)</div>

  <div class="code-block"># ── STEP 4: Eventual vs strong consistency ──
# The two main consistency models in distributed systems.

consistency_models = {
    "STRONG CONSISTENCY": {
        "what": "All reads see the latest write, immediately",
        "guarantee": "After write completes, ALL subsequent reads see it",
        "latency": "Higher (needs coordination across replicas)",
        "availability": "May block during network issues",
        "use_case": "Banking, financial transactions, inventory",
        "systems": "MongoDB (primary), etcd, Spanner",
    },
    "EVENTUAL CONSISTENCY": {
        "what": "Reads may see stale data, but eventually all converge",
        "guarantee": "Given enough time without new writes, all replicas converge",
        "latency": "Lower (no waiting for all replicas)",
        "availability": "Always available (even during partitions)",
        "use_case": "Social media, content feeds, caches",
        "systems": "Cassandra, DynamoDB, Riak",
    },
    "CAUSAL CONSISTENCY": {
        "what": "Causally related operations are seen in order",
        "guarantee": "If A causes B, all nodes see A before B",
        "latency": "Medium (between strong and eventual)",
        "availability": "High (no global coordination)",
        "use_case": "Comments, collaborative editing",
        "systems": "COPS, Bayou, some CRDT systems",
    },
    "READ-YOUR-WRITES": {
        "what": "You always see your own writes",
        "guarantee": "After you write X, your subsequent reads always see X",
        "latency": "Low (session-level tracking)",
        "availability": "High",
        "use_case": "User profile updates, settings",
        "systems": "Most modern systems (session sticky)",
    },
}

print("CONSISTENCY MODELS:")
for model, info in consistency_models.items():
    print(f"\\n  {model}")
    for key, value in info.items():
        print(f"    {key}: {value}")</div>

  <div class="code-block"># ── STEP 5: Tunable consistency in Cassandra ──
# Cassandra lets you choose consistency level per query.

tunable = """
CASSANDRA TUNABLE CONSISTENCY:

You choose consistency level PER QUERY:

  ONE: Wait for 1 replica to respond (fast, may be stale)
  QUORUM: Wait for majority (51%+) to respond (balanced)
  ALL: Wait for ALL replicas (strongest, slowest)
  LOCAL_QUORUM: Majority in local datacenter (fast, DC-aware)
  EACH_QUORUM: Majority in EACH datacenter (multi-DC strong)

PYTHON (cassandra-driver):
  from cassandra.cluster import Cluster
  from cassandra import ConsistencyLevel

  cluster = Cluster(['node1', 'node2', 'node3'])
  session = cluster.connect()

  # Write with QUORUM consistency:
  session.execute(
      "INSERT INTO users (id, name) VALUES (?, ?)",
      (user_id, name),
      consistency=ConsistencyLevel.QUORUM
  )

  # Read with ONE (fast, may be stale):
  result = session.execute(
      "SELECT * FROM users WHERE id = ?",
      (user_id,),
      consistency=ConsistencyLevel.ONE
  )

DECIDING CONSISTENCY LEVEL:
  Write financial data → ALL (must be durable)
  Write user profile → QUORUM (balance)
  Write analytics event → ONE (speed > accuracy)
  Read critical data → QUORUM
  Read cache-like data → ONE (fast)

FORMULA:
  QUORUM = floor(N/2) + 1
  For 3 replicas: QUORUM = 2
  For 5 replicas: QUORUM = 3

  R + W > N guarantees strong consistency
  (Read replicas + Write replicas > Total replicas)
"""

print(tunable)</div>

  <div class="code-block"># ── STEP 6: Brewer's clarification and practical CAP ──
# Brewer himself clarified CAP in 2012: it's not as simple as "pick two."

clarification = """
BREWER'S CLARIFICATION (2012):

"CAP forbids only a tiny part of the design space:
 perfectly consistent communications during a partition."

KEY INSIGHTS:
1. Partitions are RARE (not the normal state)
2. During normal operation (no partition): you CAN have C and A
3. Only DURING a partition must you choose
4. The choice is not permanent — systems can switch strategies

MODERN VIEW (PACELC):
  Normal operation: trade Latency vs Consistency
  Partition: trade Availability vs Consistency
  → Both are continuous trade-offs, not binary choices

PRACTICAL CAP DECISION TREE:
  1. Is this system distributed? → P is mandatory
  2. During partition: what's more important?
     → C (correctness) → CP system (banking, config)
     → A (responsiveness) → AP system (social, content)
  3. During normal operation: what's the latency budget?
     → Low latency → eventual consistency
     → Can afford latency → strong consistency
  4. Can you mix?
     → Yes! Different operations can have different consistency
     → Payment: strong consistency
     → Feed: eventual consistency
"""

print(clarification)

# CAP DECISION CHECKLIST:
checklist = [
    "Identify your system type: CP or AP",
    "Banking/financial → CP (correctness over availability)",
    "Social/content → AP (availability over correctness)",
    "Consider mixed: different operations, different consistency",
    "Use tunable consistency if available (Cassandra)",
    "Understand PACELC: normal operation has Latency vs C trade-off",
    "Partitions are rare: optimize for normal operation",
    "Plan for partition: what happens when network splits?",
    "Monitor consistency lag (how stale is stale?)",
    "Test partition recovery (does data converge correctly?)",
    "Document your CAP choices for the team",
    "Consider multi-datacenter: LOCAL_QUORUM vs EACH_QUORUM",
    "Think about user experience: stale data vs error",
    "Use CRDTs for conflict-free eventual consistency",
    "Consider read-repair for eventual consistency convergence",
]

print("CAP PRACTICAL CHECKLIST:")
for item in checklist:
    print(f"  ☐ {item}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Concept          │ Key Point                       │
# ├──────────────────┼──────────────────────────────────┤
# │ CAP theorem      │ Choose 2 of 3 (C, A, P)         │
# │ P is mandatory   │ Network WILL partition          │
# │ CP systems       │ MongoDB, etcd (consistency)     │
# │ AP systems       │ Cassandra, DynamoDB (avail)     │
# │ Strong vs Eventual│ Immediate vs eventually same   │
# │ PACELC           │ Extends CAP (normal op: L vs C) │
# │ Tunable          │ Per-query consistency (Cassandra)│
# │ Quorum           │ Majority (N/2 + 1)              │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৪ (City Builder's Codex / System Design) Door ১৬-এ Databases & Replication শিখেছিলে — CAP সেখানে সংক্ষেপে ছিল। এই দরজায় গভীরে গেলে। Door ৭-এ Consensus শিখেছিলে — CP সিস্টেমে consensus (Paxos/Raft) দরকার।</div></div>

  <div class="verse">
    <div class="verse-arabic">وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ</div>
    <div class="verse-translation">আর তোমরা সত্যকে মিথ্যার সাথে মিশিয়ো না।</div>
    <div class="verse-ref">— কুরআন ২:৪২</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🔺</div>
    <div class="secret-text">তিনের মধ্যে দুই — ত্যাগ ছাড়া লাভ নেই, পছন্জ করতেই হবে।</div>
    <div class="secret-sub">Two of three — no gain without sacrifice, you must choose.</div>
  </div>`,
  senior: {
    title: "CAP পছন্দ সচেতনভাবে করো",
    body: `<p><strong>১. প্রশ্ন করো:</strong> partition হলে কী বেশি গুরুত্বপূর্ণ — সঠিক ডেটা (C) না উত্তর পাওয়া (A)? ব্যাংকিং → C। সোশ্যাল মিডিয়া → A।</p>
    <p><strong>২. Partition বিরল:</strong> সাধারণ সময়ে C এবং A দুটোই দেওয়ার চেষ্টা করো। পুরোনো CAP বোঝাবুঝি এড়াও।</p>
    <p><strong>৩. PACELC:</strong> আরও নিখুঁত মডেল — Partition হলে: Else (সাধারণ সময়ে): Latency বনাম Consistency।</p>`
  }
});

doors.push({
  num: 4,
  icon: "🗳️",
  color: "#fbbf24",
  name: "ঐকমত্যের পথ",
  subtitle: "The Path of Consensus",
  tech: "Consensus — Paxos (Lamport, 1998), Raft (Ongaro & Ousterhout, 2014)",
  spirit: "জামাত — সম্মিলিত সিদ্ধান্ত, একতায় শক্তি",
  secret: "হাজার নোডে এক সিদ্ধান্ত — কেউ মিথ্যা বললেও সত্য পৌঁছায়। কিন্তু পথ কঠিন।",
  recall: {
    q: "Paxos কী সমস্যা সমাধান করে? Raft কেন তৈরি করা হলো?",
    qen: "What problem does Paxos solve? Why was Raft created?",
    a: "Paxos বিতরণ সিস্টেমে consensus (ঐকমত্য) অর্জন করে — নোডগুলো একটা মানের উপর একমত হয়, এমনকি কিছু নোড বিফল হলেও। Raft তৈরি করা হলো কারণ Paxos বুঝতে কঠিন — Raft সহজ, একই কাজ করে।",
    aen: "Paxos achieves consensus in distributed systems — nodes agree on a value, even if some fail. Raft was created because Paxos is hard to understand — Raft is simpler, does the same job."
  },
  story: `<p class="scene-setting">গল্পের শহর প্যাক্সোস, ১৯৯৮। ল্যাম্পোর্ট একটা রূপক গল্প লিখলেন — একটা কাল্পনিক দ্বীপের সংসদ। সাংসদরা আইন পাস করতে চায়, কিন্তু কেউ কেউ দ্বীপ ছেড়ে যায় (crash), চিঠি হারিয়ে যায় (message loss)। তবু তাদের একমত হতেই হবে। এটাই 'The Part-Time Parliament' — Paxos-এর জন্ম। কিন্তু গল্পটা এত জটিল যে কেউ বুঝত না। ২০১৪ সালে Diego Ongaro এবং John Ousterhout একটা সহজ সংস্করণ বানালেন — Raft।</p>

  <p class="scene-setting en">The fictional island of Paxos, 1998. Lamport wrote an allegorical story — a fictional island parliament. Parliament members want to pass laws, but some leave the island (crash), letters get lost (message loss). Still, they must agree. This is 'The Part-Time Parliament' — the birth of Paxos. But the story was so complex that nobody understood it. In 2014, Diego Ongaro and John Ousterhout created a simpler version — Raft.</p>

  <div class="dialogue">
    <p><strong>ল্যাম্পোর্ট (Paxos):</strong> তিন ধরনের ভূমিকা — Proposer (প্রস্তাব দেয়), Acceptor (গ্রহণ করে), Learner (শেখে)। Proposer একটা মান প্রস্তাব করে। Acceptor-রা ভোট দেয়। সংখ্যাগরিষ্ঠ (majority) রাজি হলে — সিদ্ধান্ত চূড়ান্ত।</p>
    <p><strong>তুমি:</strong> কিন্তু কেউ crash করলে?</p>
    <p><strong>ল্যাম্পোর্ট:</strong> সংখ্যাগরিষ্ঠ জীবিত থাকলেই চলবে। ৫টার মধ্যে ৩টা জীবিত? কাজ চলবে। এটাই quorum।</p>
    <p><strong>Ongaro (Raft):</strong> আমার পদ্ধতি সহজ। একজন Leader থাকে — সে সব সিদ্ধান্ত নেয়। Leader crash করলে নতুন Leader নির্বাচন হয়। সব কাজ একটা log-এ লেখা হয় — Leader লেখে, followers অনুসরণ করে।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Lamport (Paxos):</strong> Three roles — Proposer (proposes), Acceptor (accepts), Learner (learns). Proposer proposes a value. Acceptors vote. Majority agrees — decision is final.</p>
    <p><strong>You:</strong> But what if someone crashes?</p>
    <p><strong>Lamport:</strong> If majority is alive, it works. 3 out of 5 alive? It works. This is quorum.</p>
    <p><strong>Ongaro (Raft):</strong> My method is simpler. One Leader — makes all decisions. If Leader crashes, a new Leader is elected. Everything written to a log — Leader writes, followers copy.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> Paxos গবেষণাপত্র — Lamport, L. (১৯৯৮) <em>"The Part-Time Parliament"</em>, ACM Transactions on Computer Systems, ১৬(২): ১৩৩-১৬৯। ল্যাম্পোর্ট ~১৯৮৯-৯০ সালে লিখেছিলেন, কিন্তু প্রকাশ হয় ১৯৯৮ সালে। ২০০১ সালে <em>"Paxos Made Simple"</em> (ACM SIGACT News, ৩২(৪): ৫১-৫৮) প্রকাশ করেন — সহজ ব্যাখ্যা। Raft — Ongaro, D. এবং Ousterhout, J. (২০১৪), <em>"In Search of an Understandable Consensus Algorithm"</em>, USENIX ATC ২০১৪।</div></div>

  <div class="diagram">
    <div class="diag-title">Paxos বনাম Raft — Consensus প্রবাহ</div>
    <svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrOrange4" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f97316"/>
        </marker>
      </defs>

      <!-- Title -->
      <text x="280" y="18" text-anchor="middle" font-family="Cinzel,serif" font-size="10" font-weight="700" fill="#fbbf24" letter-spacing="2">CONSENSUS: PAXOS VS RAFT</text>

      <!-- Left: Paxos -->
      <rect x="15" y="35" width="260" height="120" rx="10" fill="rgba(249,115,22,0.08)" stroke="#f97316" stroke-width="1.5"/>
      <text x="145" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#f97316">Paxos (১৯৯৮)</text>

      <!-- Proposer -->
      <rect x="30" y="62" width="80" height="24" rx="4" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="1"/>
      <text x="70" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">Proposer</text>

      <!-- Acceptors -->
      <circle cx="120" cy="110" r="9" fill="rgba(61,214,196,0.15)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="120" y="113" text-anchor="middle" font-size="10" fill="#3dd6c4">A₁</text>
      <circle cx="155" cy="110" r="9" fill="rgba(61,214,196,0.15)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="155" y="113" text-anchor="middle" font-size="10" fill="#3dd6c4">A₂</text>
      <circle cx="190" cy="110" r="9" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="1" opacity="0.3"/>
      <text x="190" y="113" text-anchor="middle" font-size="10" fill="#ef4444">A₃✗</text>

      <!-- Learner -->
      <rect x="210" y="62" width="55" height="24" rx="4" fill="rgba(179,127,235,0.15)" stroke="#b37feb" stroke-width="1"/>
      <text x="237" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#b37feb">Learner</text>

      <!-- Arrows -->
      <path d="M 100 82 Q 110 95 115 102" fill="none" stroke="#fbbf24" stroke-width="1" marker-end="url(#arrOrange4)"/>
      <path d="M 165 102 Q 200 90 210 82" fill="none" stroke="#3dd6c4" stroke-width="1" marker-end="url(#arrOrange4)"/>
      <text x="145" y="135" text-anchor="middle" font-size="8" fill="#9290a8">২/৩ রাজি → চূড়ান্ত</text>
      <text x="145" y="148" text-anchor="middle" font-size="10" fill="#5e5c74">quorum = majority</text>

      <!-- Right: Raft -->
      <rect x="285" y="35" width="260" height="120" rx="10" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="415" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#52c41a">Raft (২০১৪)</text>

      <!-- Leader -->
      <rect x="360" y="62" width="70" height="28" rx="4" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="395" y="80" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">Leader</text>

      <!-- Followers -->
      <circle cx="320" cy="115" r="9" fill="rgba(61,214,196,0.15)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="320" y="118" text-anchor="middle" font-size="10" fill="#3dd6c4">F₁</text>
      <circle cx="355" cy="115" r="9" fill="rgba(61,214,196,0.15)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="355" y="118" text-anchor="middle" font-size="10" fill="#3dd6c4">F₂</text>
      <circle cx="430" cy="115" r="9" fill="rgba(61,214,196,0.15)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="430" y="118" text-anchor="middle" font-size="10" fill="#3dd6c4">F₃</text>

      <!-- Arrows Leader → Followers -->
      <path d="M 375 90 Q 350 100 325 108" fill="none" stroke="#fbbf24" stroke-width="1" marker-end="url(#arrOrange4)"/>
      <path d="M 395 90 L 358 108" fill="none" stroke="#fbbf24" stroke-width="1" marker-end="url(#arrOrange4)"/>
      <path d="M 410 90 L 425 108" fill="none" stroke="#fbbf24" stroke-width="1" marker-end="url(#arrOrange4)"/>
      <text x="415" y="135" text-anchor="middle" font-size="8" fill="#9290a8">Leader → Followers</text>
      <text x="415" y="148" text-anchor="middle" font-size="10" fill="#5e5c74">log replication</text>

      <!-- Comparison table -->
      <rect x="40" y="175" width="480" height="100" rx="8" fill="rgba(249,115,22,0.05)" stroke="#f97316" stroke-width="0.5"/>
      <text x="280" y="193" text-anchor="middle" font-size="10" font-weight="700" fill="#fbbf24">তুলনা — Paxos vs Raft</text>
      <text x="120" y="213" text-anchor="middle" font-size="9" font-weight="700" fill="#f97316">Paxos</text>
      <text x="440" y="213" text-anchor="middle" font-size="9" font-weight="700" fill="#52c41a">Raft</text>
      <text x="120" y="230" text-anchor="middle" font-size="8" fill="#9290a8">জটিল, কঠিন বোঝা</text>
      <text x="440" y="230" text-anchor="middle" font-size="8" fill="#9290a8">সহজ, understandable</text>
      <text x="120" y="245" text-anchor="middle" font-size="8" fill="#9290a8">ভূমিকা: P/A/L</text>
      <text x="440" y="245" text-anchor="middle" font-size="8" fill="#9290a8">Leader/Follower</text>
      <text x="120" y="260" text-anchor="middle" font-size="8" fill="#9290a8">প্রমাণিত, শক্তিশালী</text>
      <text x="440" y="260" text-anchor="middle" font-size="8" fill="#9290a8">ব্যবহার সহজ, জনপ্রিয়</text>
    </svg>
    <div class="diag-cap">Paxos: Proposer প্রস্তাব করে, Acceptors ভোট দেয়, quorum (সংখ্যাগরিষ্ঠ) চাই। Raft: Leader সব সিদ্ধান্ত নেয়, Followers অনুসরণ করে। দুটোই consensus অর্জন করে।</div>
  </div>

  <div class="code-block"># ── STEP 1: What is distributed consensus? ──
# Getting independent nodes to AGREE on a single value.

consensus = """
DISTRIBUTED CONSENSUS:

PROBLEM: Multiple nodes need to agree on ONE decision.
  → "Who is the leader?"
  → "What is the value of X?"
  → "Should we commit this transaction?"

CHALLENGES:
  → Nodes can crash (fail-stop)
  → Messages can be lost (network issues)
  → Messages can be delayed (unpredictable)
  → Byzantine failures (nodes lie/misbehave) — harder variant

REQUIREMENTS FOR CONSENSUS:
  1. AGREEMENT: No two nodes decide different values
  2. VALIDITY: The decided value was proposed by some node
  3. TERMINATION: All correct nodes eventually decide
  4. INTEGRITY: A node decides at most once

THE FLP IMPOSSIBILITY (1985):
  → In ASYNC systems with even ONE faulty process,
    deterministic consensus is IMPOSSIBLE
  → Practical solution: add randomness or timing assumptions
  → Paxos/Raft work around FLP with leader election + timeouts

QUORUM:
  → Majority (N/2 + 1) must agree
  → 5 nodes: quorum = 3 (can tolerate 2 failures)
  → 3 nodes: quorum = 2 (can tolerate 1 failure)
"""

print(consensus)

# QUORUM CALCULATION:
quorum = """
QUORUM = floor(N/2) + 1
FAULT TOLERANCE = N - QUORUM

3 nodes: quorum=2, tolerates 1 failure
5 nodes: quorum=3, tolerates 2 failures
7 nodes: quorum=4, tolerates 3 failures

ODD number preferred (even numbers waste a node):
  4 nodes: quorum=3, tolerates 1 failure (same as 3!)
  5 nodes: quorum=3, tolerates 2 failures (better!)
"""
print(quorum)</div>

  <div class="code-block"># ── STEP 2: Paxos — the original consensus algorithm ──
# Lamport's 1998 algorithm (based on 1989 technical report).

paxos = """
PAXOS (Lamport, 1998):

THREE ROLES:
  Proposer: proposes a value
  Acceptor: votes on proposals
  Learner: learns the decided value

TWO PHASES:

PHASE 1 — PREPARE/PROMISE:
  Proposer → Acceptor: "Prepare(n)" (n = proposal number)
  Acceptor → Proposer: "Promise(n)" (promise not to accept lower n)

  If Acceptor already promised higher n → reject

PHASE 2 — ACCEPT/ACCEPTED:
  Proposer → Acceptor: "Accept(n, value)"
  Acceptor → Proposer: "Accepted(n)"

  If MAJORITY of Acceptors accept → value is CHOSEN

KEY PROPERTY:
  Once a value is chosen, it can NEVER be changed.
  → Safety: different nodes never disagree
  → Liveness: eventually a value is chosen (with stable leader)

PAXOS PROBLEMS:
  → Extremely hard to understand
  → No leader (Multi-Paxos adds one)
  → Complex to implement correctly
  → "The Part-Time Parliament" paper confused everyone

USAGE:
  Google Chubby, Spanner (Google's global database)
  ZooKeeper (uses ZAB, a Paxos variant)
"""

print(paxos)</div>

  <div class="code-block"># ── STEP 3: Raft — the understandable consensus ──
# Ongaro & Ousterhout, 2014. Designed for UNDERSTANDABILITY.

raft = """
RAFT (2014):

DESIGN GOAL: Same guarantees as Paxos, but UNDERSTANDABLE.

THREE ROLES:
  Leader: handles ALL client requests (one leader at a time)
  Follower: passive, accepts requests from leader
  Candidate: requests votes to become leader

LEADER ELECTION:
  1. Followers have a random election timeout (150-300ms)
  2. If no heartbeat from leader before timeout → become Candidate
  3. Candidate requests votes from all nodes
  4. If majority votes → become Leader
  5. Leader sends heartbeats to maintain authority

LOG REPLICATION:
  1. Client sends command to Leader
  2. Leader appends to its log
  3. Leader sends AppendEntries to Followers
  4. Followers append, reply ACK
  5. When MAJORITY ACK → Leader commits
  6. Leader sends commit notification to Followers
  7. Result returned to client

SAFETY GUARANTEE:
  → If a log entry is committed, it's NEVER lost
  → Leader completeness: committed entries exist on all future leaders

WHY RAFT IS EASIER THAN PAXOS:
  → Problem decomposition: leader election + log replication + safety
  → Strong leader: all writes go through leader (simpler)
  → State machine: clear state transitions
  → "In Search of an Understandable Consensus Algorithm" (paper title)

USAGE:
  etcd (Kubernetes core store)
  Consul (HashiCorp service mesh)
  CockroachDB (distributed SQL)
  Redis Cluster (simplified Raft for cluster metadata)
"""

print(raft)

# RAFT STATE TRANSITIONS:
state_transitions = """
RAFT STATE TRANSITIONS:

  Follower → (timeout, no heartbeat) → Candidate
  Candidate → (wins majority) → Leader
  Candidate → (loses election) → Follower
  Candidate → (timeout, new election) → Candidate
  Leader → (discovers higher term) → Follower

TERM (logical clock):
  → Each election increments the term
  → Higher term = newer authority
  → Stale leaders step down when they see higher term
"""
print(state_transitions)</div>

  <div class="code-block"># ── STEP 4: Paxos vs Raft comparison ──
# Side-by-side comparison of the two consensus giants.

comparison = {
    "Year": {"Paxos": "1989/1998", "Raft": "2014"},
    "Complexity": {"Paxos": "Very high", "Raft": "Moderate (by design)"},
    "Understandability": {"Paxos": "Infamously hard", "Raft": "Clear and teachable"},
    "Roles": {
        "Paxos": "Proposer, Acceptor, Learner",
        "Raft": "Leader, Follower, Candidate"
    },
    "Leader": {
        "Paxos": "Not in basic Paxos (Multi-Paxos adds it)",
        "Raft": "Core part of the algorithm"
    },
    "Log Structure": {
        "Paxos": "Separate consensus per log entry",
        "Raft": "Replicated log (entries in order)"
    },
    "Membership Change": {
        "Paxos": "Complex, not well specified",
        "Raft": "Joint consensus (clean approach)"
    },
    "Production Use": {
        "Paxos": "Google Chubby, Spanner, ZooKeeper (ZAB)",
        "Raft": "etcd (Kubernetes), Consul, CockroachDB"
    },
    "Turing Award": {
        "Paxos": "Lamport won Turing Award 2013",
        "Raft": "Ongaro PhD thesis at Berkeley"
    },
}

print("PAXOS vs RAFT:")
for feature, values in comparison.items():
    print(f"\\n  {feature}:")
    for algo, value in values.items():
        print(f"    {algo}: {value}")

# WHEN TO USE WHICH:
when = """
WHEN TO USE PAXOS:
  → Need maximum theoretical rigor
  → Existing Paxos infrastructure (Google)
  → Byzantine fault tolerance needed (BFT-Paxos variants)

WHEN TO USE RAFT:
  → Most modern systems (default choice)
  → Need understandability for team
  → Kubernetes ecosystem (etcd uses Raft)
  → Building a new distributed system

DEFAULT: CHOOSE RAFT
  → Easier to implement, debug, and understand
  → Production-proven (etcd runs Kubernetes)
  → Excellent documentation and community
"""
print(when)</div>

  <div class="code-block"># ── STEP 5: Byzantine Fault Tolerance (BFT) ──
# When nodes can LIE (not just crash).

bft = """
BYZANTINE FAULT TOLERANCE:

CRASH FAULT (Raft/Paxos handle this):
  → Node stops responding (crashes)
  → Node doesn't lie or misbehave
  → Tolerated by quorum (majority)

BYZANTINE FAULT (BFT needed):
  → Node can LIE, send wrong data, act maliciously
  → Named after "Byzantine Generals Problem" (Lamport, 1982)
  → Scenario: generals surround a city, must agree to attack or retreat
    But traitors among them send conflicting messages!

BYZANTINE GENERALS PROBLEM:
  → N generals, some traitors
  → Loyal generals must agree on same plan
  → Requires 3f+1 generals to tolerate f traitors
  → Quorum: 2f+1 out of 3f+1 must agree

PRACTICAL BFT (pBFT):
  → Castro & Liskov, 1999
  → Works in 3 phases: pre-prepare, prepare, commit
  → Used in: Hyperledger Fabric, some blockchain systems

BLOCKCHAIN BFT:
  → Bitcoin (PoW): probabilistic consensus (Nakamoto consensus)
  → Ethereum (PoS): Casper FFG (finality gadget)
  → Tendermint: instant finality BFT

WHEN YOU NEED BFT:
  → Untrusted environments (blockchain)
  → Multiple organizations sharing infrastructure
  → Adversarial settings (some nodes malicious)

WHEN YOU DON'T NEED BFT:
  → Single organization (Google, your company)
  → All nodes controlled by same operator
  → Crash fault tolerance (Raft/Paxos) is enough
  → BFT is 3x slower (needs more messages)
"""

print(bft)</div>

  <div class="code-block"># ── STEP 6: Consensus in practice (etcd, Kubernetes) ──
# Real-world consensus systems you'll encounter.

practice = """
REAL-WORLD CONSENSUS SYSTEMS:

etcd (Raft-based):
  → Key-value store used by Kubernetes
  → Stores cluster state, configuration, secrets
  → All Kubernetes API server reads/writes go through etcd
  → Typically 3 or 5 nodes for quorum

ZooKeeper (ZAB = Paxos variant):
  → Coordination service for distributed apps
  → Used by: Kafka, Hadoop, HBase
  → ZAB (ZooKeeper Atomic Broadcast) = simplified Paxos
  → Strong consistency, hierarchical namespace

Consul (Raft-based):
  → Service discovery + health checking
  → HashiCorp ecosystem (Vault, Nomad, Terraform)
  → Key-value store with Raft consensus

CockroachDB (Raft-based):
  → Distributed SQL database
  → Each "range" of data has its own Raft group
  → PostgreSQL-compatible, globally distributed

Spanner (Paxos-based):
  → Google's global database
  → Uses Paxos for each shard
  → TrueTime (GPS + atomic clocks) for external consistency
  → Powers Google AdWords, Gmail, Play

PYTHON: Using etcd for distributed coordination:
  import etcd3

  client = etcd3.client(host='localhost', port=2379)

  # Distributed lock (uses Raft consensus internally):
  lock = client.lock('my-lock', ttl=60)
  lock.acquire()
  try:
      # Critical section — only one process at a time:
      do_work()
  finally:
      lock.release()

  # Distributed configuration:
  client.put('/config/db_host', 'db.example.com')
  value, _ = client.get('/config/db_host')
  print(value)  # b'db.example.com'

  # Watch for changes:
    for event in client.watch('/config/'):
        print(f"Config changed: {event}")
"""

print(practice)

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Algorithm        │ Key Property                    │
# ├──────────────────┼──────────────────────────────────┤
# │ Paxos            │ Original, hard to understand    │
# │ Raft             │ Understandable, modern default  │
# │ pBFT             │ Handles Byzantine (lying) nodes │
# │ Quorum           │ Majority (N/2 + 1)              │
# │ Leader election  │ Raft: heartbeat timeout         │
# │ Log replication  │ Leader → followers (Raft)       │
# │ etcd             │ Kubernetes's Raft store         │
# │ ZooKeeper        │ Kafka's ZAB coordinator         │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৪ (City Builder's Codex) Door ৭-এ Consensus সংক্ষেপে শিখেছিলে — Paxos, Raft, leader election। এই দরজায় সেই একই ধারণার গভীরে গেলে। Book ৩৪ (Scale of Evidence) Door ৪-এ hypothesis testing — quorum হলো 'majority vote' যেমন p-value হলো 'evidence threshold'।</div></div>

  <div class="verse">
    <div class="verse-arabic">وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ</div>
    <div class="verse-translation">আর তাদের কাজ পারস্পরিক পরামর্শের মাধ্যমে হয়।</div>
    <div class="verse-ref">— কুরআন ৪২:৩৮</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🗳️</div>
    <div class="secret-text">সংখ্যাগরিষ্ঠ রাজি হলে সিদ্ধান্ত চূড়ান্ত — একজন বিফল হলেও সিস্টেম চলে।</div>
    <div class="secret-sub">When majority agrees, the decision is final — even if one fails, the system runs.</div>
  </div>`,
  senior: {
    title: "Consensus সবসময় প্রয়োজন নয়",
    body: `<p><strong>১. কখন consensus দরকার:</strong> লিডার নির্বাচন, কনফিগ আপডেট, ডেটা রেপ্লিকেশন। যেখানে সব নোড একমত হতে হবে।</p>
    <p><strong>২. কখন দরকার নয়:</strong> সাধারণ read, eventual consistency গ্রহণযোগ্য হলে। Gossip protocol যথেষ্ট।</p>
    <p><strong>৩. Raft শিখো:</strong> আজকের বাস্তব প্রোজেক্টে (Kubernetes, etcd, Consul) Raft বেশি ব্যবহৃত। Paxos বোঝা গুরুত্বপূর্ণ, কিন্তু ডিবাগিং কঠিন।</p>`
  }
});

doors.push({
  num: 5,
  icon: "🔄",
  color: "#f97316",
  name: "সব না কিছু",
  subtitle: "All or Nothing",
  tech: "Distributed Transactions — 2PC, 3PC, Saga Pattern (Gray 1978; Garcia-Molina & Salem 1987)",
  spirit: "আমানত — সম্পূর্ণ বিশ্বস্ততা, অর্ধেক নয়",
  secret: "একটা ট্রানজেকশন সব নোডে সম্পূর্ণ হবে, না হবে একটাতেও নয় — অর্ধেক নয়।",
  recall: {
    q: "Two-Phase Commit (2PC) কীভাবে কাজ করে? এর সমস্যা কী?",
    qen: "How does Two-Phase Commit (2PC) work? What is its problem?",
    a: "Phase ১: Coordinator সব নোডকে জিজ্ঞেস করে — 'প্রস্তুত?' সব 'হ্যাঁ' হলে Phase ২: 'কমিট করো'। সমস্যা: Coordinator crash করলে নোডগুলো চিরকাল ব্লক থাকে।",
    aen: "Phase 1: Coordinator asks all nodes 'ready?' If all 'yes' → Phase 2: 'commit'. Problem: if Coordinator crashes, nodes block forever."
  },
  story: `<p class="scene-setting">১৯৭৮। IBM-এর জিম গ্রে (Jim Gray) একটা সমস্যা নিয়ে ভাবছেন — টাকা এক ব্যাংক থেকে আরেক ব্যাংকে পাঠাতে হবে। ব্যাংক A থেকে ১০০ টাকা কাটবে, ব্যাংক B-তে ১০০ টাকা যোগ করবে। কিন্তু যদি মাঝপথে নেটওয়ার্ক বিভক্ত হয়? A থেকে টাকা কাটা হলো, B-তে পৌঁছালো না। টাকা উবে গেল! এটাই atomic transaction সমস্যা। গ্রে-এর সমাধান — Two-Phase Commit (2PC)।</p>

  <p class="scene-setting en">1978. Jim Gray at IBM pondered a problem — transfer money from Bank A to Bank B. Deduct 100 from A, add 100 to B. But what if the network splits mid-transfer? Money deducted from A, never reaches B. Money vanishes! This is the atomic transaction problem. Gray's solution — Two-Phase Commit (2PC).</p>

  <div class="dialogue">
    <p><strong>গ্রে:</strong> দুই ধাপ। প্রথম ধাপ — prepare: Coordinator সব নোডকে বলে, 'তোমরা কি প্রস্তুত?' সব নোড যদি 'হ্যাঁ' বলে — দ্বিতীয় ধাপ — commit: 'কাজ সম্পূর্ণ করো।' যদি একজনও 'না' বলে — abort: 'সব বাতিল।' সব না কিছু — অর্ধেক নয়।</p>
    <p><strong>তুমি:</strong> কিন্তু Coordinator নিজে crash করলে?</p>
    <p><strong>গ্রে:</strong> সেটাই সমস্যা। নোডগুলো 'prepared' অবস্থায় আটকে থাকে — কমিট করতে পারে না, বাতিলও করতে পারে না। এটাই blocking problem। এই সমস্যা সমাধানের জন্য Saga pattern তৈরি হলো — প্রতিটা ধাপে compensate করার সুযোগ।</p>
  </div>

  <div class="dialogue en">
    <p><strong>Gray:</strong> Two phases. First — prepare: Coordinator asks all nodes, 'Are you ready?' If all say 'yes' — second phase — commit: 'Complete the work.' If even one says 'no' — abort: 'Cancel everything.' All or nothing — no half.</p>
    <p><strong>You:</strong> But what if the Coordinator itself crashes?</p>
    <p><strong>Gray:</strong> That's the problem. Nodes stay stuck in 'prepared' state — can't commit, can't abort. This is the blocking problem. To solve this, the Saga pattern was created — each step can be compensated.</p>
  </div>

  <div class="callout info"><span class="co-icon">📜</span><div><strong>ঐতিহাসিক তথ্য:</strong> Two-Phase Commit জিম গ্রে (Jim Gray) আনুষ্ঠানিকভাবে বর্ণনা করেন ১৯৭৮ সালে (<em>"Notes on Data Base Operating Systems"</em>)। গ্রে ১৯৯৮ সালে Turing Award পান (ডেটাবেস ও ট্রানজেকশন প্রসেসিংয়ে অবদানের জন্য)। Saga pattern — Garcia-Molina, H. এবং Salem, K. (১৯৮৭), <em>"Sagas"</em>, Proceedings of SIGMOD 1987। Three-Phase Commit (3PC) — Skeen, D. (১৯৮১)।</div></div>

  <div class="diagram">
    <div class="diag-title">2PC প্রবাহ — Two-Phase Commit</div>
    <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrOrange5" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f97316"/>
        </marker>
        <marker id="arrGreen5" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#52c41a"/>
        </marker>
        <marker id="arrRed5" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444"/>
        </marker>
      </defs>

      <text x="280" y="18" text-anchor="middle" font-family="Cinzel,serif" font-size="10" font-weight="700" fill="#fbbf24" letter-spacing="2">TWO-PHASE COMMIT (2PC)</text>

      <!-- Coordinator -->
      <rect x="235" y="35" width="90" height="30" rx="6" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="280" y="54" text-anchor="middle" font-size="10" font-weight="700" fill="#fbbf24">Coordinator</text>

      <!-- Phase 1: Prepare -->
      <text x="280" y="85" text-anchor="middle" font-size="9" font-weight="700" fill="#f97316">Phase ১: PREPARE</text>
      <path d="M 250 67 L 120 95" fill="none" stroke="#f97316" stroke-width="1" marker-end="url(#arrOrange5)"/>
      <path d="M 280 67 L 280 95" fill="none" stroke="#f97316" stroke-width="1" marker-end="url(#arrOrange5)"/>
      <path d="M 310 67 L 440 95" fill="none" stroke="#f97316" stroke-width="1" marker-end="url(#arrOrange5)"/>

      <!-- Nodes -->
      <circle cx="120" cy="108" r="14" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="120" y="111" text-anchor="middle" font-size="8" font-weight="700" fill="#52c41a">A</text>
      <text x="120" y="128" text-anchor="middle" font-size="10" fill="#9290a8">✓ ready</text>

      <circle cx="280" cy="108" r="14" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="280" y="111" text-anchor="middle" font-size="8" font-weight="700" fill="#52c41a">B</text>
      <text x="280" y="128" text-anchor="middle" font-size="10" fill="#9290a8">✓ ready</text>

      <circle cx="440" cy="108" r="14" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="440" y="111" text-anchor="middle" font-size="8" font-weight="700" fill="#52c41a">C</text>
      <text x="440" y="128" text-anchor="middle" font-size="10" fill="#9290a8">✓ ready</text>

      <!-- Phase 2: Commit -->
      <text x="280" y="155" text-anchor="middle" font-size="9" font-weight="700" fill="#52c41a">Phase ২: COMMIT (সব রাজি)</text>
      <path d="M 250 135 L 120 165" fill="none" stroke="#52c41a" stroke-width="1.5" marker-end="url(#arrGreen5)"/>
      <path d="M 280 135 L 280 165" fill="none" stroke="#52c41a" stroke-width="1.5" marker-end="url(#arrGreen5)"/>
      <path d="M 310 135 L 440 165" fill="none" stroke="#52c41a" stroke-width="1.5" marker-end="url(#arrGreen5)"/>

      <!-- Result -->
      <rect x="180" y="175" width="200" height="30" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
      <text x="280" y="194" text-anchor="middle" font-size="10" font-weight="700" fill="#52c41a">✓ সব নোডে সম্পূর্ণ</text>

      <!-- Abort path -->
      <text x="280" y="225" text-anchor="middle" font-size="9" font-weight="700" fill="#ef4444">যদি একজনও 'না' বলে → ABORT (সব বাতিল)</text>
      <rect x="160" y="235" width="240" height="20" rx="4" fill="rgba(239,68,68,0.08)" stroke="#ef4444" stroke-width="0.5"/>
      <text x="280" y="248" text-anchor="middle" font-size="8" fill="#ef4444">সমস্যা: Coordinator crash → নোডগুলো ব্লক ⚠️</text>
    </svg>
    <div class="diag-cap">2PC: Phase ১ (prepare) সব নোড জিজ্ঞেস করে। সব রাজি হলে Phase ২ (commit)। একজন না বললে abort। সমস্যা: Coordinator crash → blocking।</div>
  </div>

  <div class="code-block"># ── STEP 1: The distributed transaction problem ──
# How to update multiple services atomically (all or nothing).

dt_problem = """
DISTRIBUTED TRANSACTION PROBLEM:

Transfer $100 from Bank A to Bank B:
  → Deduct $100 from Bank A's database
  → Add $100 to Bank B's database

What if Bank A succeeds but Bank B's network fails?
  → Money deducted but never added → MONEY LOST!

SOLUTION: Distributed transactions ensure ATOMICITY:
  → Both succeed → commit both
  → Either fails → rollback both
  → "All or nothing"

THREE APPROACHES:
  1. Two-Phase Commit (2PC) — blocking, strong consistency
  2. Three-Phase Commit (3PC) — non-blocking (theoretical)
  3. Saga Pattern — compensating transactions, eventual consistency
"""

print(dt_problem)</div>

  <div class="code-block"># ── STEP 2: Two-Phase Commit (2PC) ──
# Jim Gray's 1978 solution. Coordinator-based.

two_pc = """
TWO-PHASE COMMIT (2PC):

ROLES:
  Coordinator: manages the transaction
  Participants: the databases/services involved

PHASE 1 — PREPARE:
  Coordinator → all Participants: "Can you commit?"
  Each Participant: "YES" (prepared) or "NO" (abort)

  If ALL say YES → proceed to Phase 2
  If ANY says NO → ABORT

PHASE 2 — COMMIT/ABORT:
  If all prepared:
    Coordinator → all: "COMMIT"
    Each Participant commits, replies "ACK"

  If any refused:
    Coordinator → all: "ABORT"
    Each Participant rolls back

THE BLOCKING PROBLEM:
  If Coordinator crashes after Phase 1 but before Phase 2:
  → Participants are stuck in "prepared" state
  → Can't commit (might have been aborted)
  → Can't abort (might have been committed)
  → Wait indefinitely for Coordinator to recover

  This is why 2PC is rarely used in microservices.
"""

print(two_pc)

# PYTHON: 2PC simulation:
two_pc_code = """
class Coordinator:
    def commit_transaction(self, participants, transaction):
        # Phase 1: PREPARE
        prepared = []
        for p in participants:
            try:
                response = p.prepare(transaction)
                if response == 'YES':
                    prepared.append(p)
                else:
                    # Any NO → abort all:
                    self.abort(participants)
                    return 'ABORTED'
            except:
                self.abort(participants)
                return 'ABORTED'

        # Phase 2: COMMIT (all prepared)
        for p in prepared:
            p.commit(transaction)

        return 'COMMITTED'

    def abort(self, participants):
        for p in participants:
            p.rollback()

# Problem: if Coordinator crashes between Phase 1 and 2:
# Participants stay in 'prepared' state → blocked forever.
"""

print(two_pc_code)</div>

  <div class="code-block"># ── STEP 3: Saga Pattern (modern microservices) ──
# Break large transactions into smaller compensable steps.

saga = """
SAGA PATTERN (Garcia-Molina & Salem, 1987):

Instead of one big atomic transaction:
  → Break into SEQUENCE of smaller transactions
  → Each step has a COMPENSATING action (undo)
  → If any step fails, run compensating actions in reverse

EXAMPLE: Travel Booking
  T1: Book Flight → C1: Cancel Flight
  T2: Book Hotel  → C2: Cancel Hotel
  T3: Book Car    → C3: Cancel Car

  If T3 (Car) fails:
  → Run C2 (Cancel Hotel)
  → Run C1 (Cancel Flight)
  → User gets refund

TWO SAGA COORDINATION STYLES:

1. CHOREOGRAPHY (event-driven, decentralized):
   Each service emits events. Other services react.
   Flight Service → "FlightBooked" event → Hotel Service listens → books hotel
   If hotel fails → "HotelBookingFailed" → Flight Service cancels

   Pros: no central coordinator, loose coupling
   Cons: harder to track, circular dependencies

2. ORCHESTRATION (central coordinator):
   Orchestrator calls each service in sequence.
   Orchestrator → Book Flight → Book Hotel → Book Car
   If car fails → Orchestrator → Cancel Hotel → Cancel Flight

   Pros: clear flow, easy debugging
   Cons: orchestrator is single point of failure
"""

print(saga)

# PYTHON: Saga with orchestration:
saga_code = """
class TravelBookingSaga:
    def execute(self, booking_request):
        steps = [
            (self.book_flight, self.cancel_flight),
            (self.book_hotel, self.cancel_hotel),
            (self.book_car, self.cancel_car),
        ]

        completed = []
        for action, compensate in steps:
            try:
                result = action(booking_request)
                completed.append((compensate, result))
            except Exception as e:
                # FAILURE → compensate in reverse order:
                for comp, res in reversed(completed):
                    try:
                        comp(res)
                    except:
                        log_error("Compensation failed!")
                return {"status": "failed", "error": str(e)}

        return {"status": "success"}

    def book_flight(self, req):
        response = flight_service.book(req.flight_id)
        if response.status != 200:
            raise Exception("Flight booking failed")
        return response.reservation_id

    def cancel_flight(self, reservation_id):
        flight_service.cancel(reservation_id)
"""

print(saga_code)</div>

  <div class="code-block"># ── STEP 4: 2PC vs 3PC vs Saga comparison ──
# Choose the right distributed transaction approach.

comparison = {
    "2PC (Two-Phase Commit)": {
        "consistency": "Strong (ACID)",
        "blocking": "Yes (coordinator crash → stuck)",
        "complexity": "Moderate",
        "latency": "High (2 round trips)",
        "use_case": "Single-database, within one DC",
        "example": "PostgreSQL prepared transactions",
    },
    "3PC (Three-Phase Commit)": {
        "consistency": "Strong (ACID)",
        "blocking": "No (theoretical, needs sync network)",
        "complexity": "Very high",
        "latency": "Very high (3 round trips)",
        "use_case": "Rarely used in practice",
        "example": "Almost none (theoretical interest)",
    },
    "Saga (Compensating)": {
        "consistency": "Eventual (BASE)",
        "blocking": "No (non-blocking)",
        "complexity": "Moderate (per-service logic)",
        "latency": "Low (async, per-step)",
        "use_case": "Microservices, cross-service",
        "example": "Amazon checkout, Uber ride",
    },
}

print("DISTRIBUTED TRANSACTION COMPARISON:")
for method, info in comparison.items():
    print(f"\\n  {method}")
    for key, value in info.items():
        print(f"    {key}: {value}")

# WHEN TO USE WHICH:
when = """
2PC:
  → Within a single database (PostgreSQL distributed)
  → When strong consistency is critical
  → When blocking is acceptable (same DC)
  → NOT for microservices

SAGA:
  → Microservices (different databases per service)
  → When eventual consistency is acceptable
  → When you need fault tolerance (non-blocking)
  → Modern cloud-native apps (default choice)

3PC:
  → Almost never (theoretical improvement over 2PC)
  → Requires synchronous network assumption (unrealistic)
"""
print(when)</div>

  <div class="code-block"># ── STEP 5: Outbox Pattern and Event-Driven Sagas ──
# Reliable event publishing for distributed transactions.

outbox = """
OUTBOX PATTERN:

PROBLEM: Microservice updates database AND publishes event.
  → If DB update succeeds but event publish fails → inconsistent!
  → If event published but DB update fails → inconsistent!

SOLUTION: Outbox Pattern
  1. Write to business table AND outbox table in SAME transaction
  2. Background worker reads outbox table, publishes events
  3. After publishing, mark as "sent"

  DB Transaction {
    INSERT INTO orders (id, ...) VALUES (...);
    INSERT INTO outbox (event_type, payload) VALUES ('order_created', ...);
  }

  → Atomic: both inserts succeed or both fail
  → No lost events!

PYTHON (Django + Celery outbox):
  # models.py:
  class Order(models.Model):
      user = models.ForeignKey(User)
      total = models.DecimalField(...)
      # ... order fields

  class OutboxEvent(models.Model):
      event_type = models.CharField(max_length=100)
      payload = models.JSONField()
      created_at = models.DateTimeField(auto_now_add=True)
      sent = models.BooleanField(default=False)

  # views.py:
  @transaction.atomic
  def create_order(request):
      order = Order.objects.create(**order_data)

      # Write to outbox in SAME transaction:
      OutboxEvent.objects.create(
          event_type='order_created',
          payload={'order_id': order.id, 'total': str(order.total)}
      )

      return Response({'status': 'created'})

  # tasks.py (Celery worker):
  @shared_task
  def process_outbox():
      events = OutboxEvent.objects.filter(sent=False)
      for event in events:
          publish_to_kafka(event.event_type, event.payload)
          event.sent = True
          event.save()
"""

print(outbox)</div>

  <div class="code-block"># ── STEP 6: Best practices for distributed transactions ──
# Production-ready patterns for reliable distributed operations.

best_practices = [
    "Prefer Saga over 2PC for microservices",
    "Use choreography for simple flows, orchestration for complex",
    "Design compensating actions for EVERY step",
    "Make operations IDEMPOTENT (safe to retry)",
    "Use Outbox Pattern for reliable event publishing",
    "Log every step (for debugging and audit)",
    "Handle compensation failures (dead letter queue)",
    "Set timeouts on each step (don't block forever)",
    "Use circuit breakers (don't cascade failures)",
    "Consider eventual consistency (don't force ACID everywhere)",
    "Test failure scenarios (what if step 3 fails?)",
    "Monitor in-flight sagas (how many are stuck?)",
    "Use event sourcing for full audit trail",
    "Consider TCC (Try-Confirm-Cancel) as alternative to Saga",
    "Document the saga flow for the team",
]

print("DISTRIBUTED TRANSACTION BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# SUMMARY TABLE:
# ┌──────────────────┬──────────────────────────────────┐
# │ Method           │ Best For                        │
# ├──────────────────┼──────────────────────────────────┤
# │ 2PC              │ Single DB, strong consistency   │
# │ Saga             │ Microservices, eventual consist │
# │ Outbox           │ Reliable event publishing       │
# │ Choreography     │ Decentralized event-driven     │
# │ Orchestration    │ Central, easy to debug          │
# │ Idempotency      │ Safe retries                    │
# │ Compensation     │ Undo failed steps              │
# │ Circuit breaker  │ Prevent cascading failures     │
# └──────────────────┴──────────────────────────────────┘</div>

  <div class="callout tip"><span class="co-icon">🔗</span><div><strong>ক্রস-রেফারেন্স:</strong> Book ৪ (City Builder's Codex) Door ৫-এ Transactions, ACID & Isolation Levels শিখেছিলে — এই দরজা সেই একই ধারণার বিতরণ সংস্করণ। Book ৩৪ (Scale of Evidence) Door ৮-এ Causal Inference — ট্রানজেকশন commit/abort হলো কার্যকারণ চেইন: প্রতিটা ধাপ আগের ধাপের উপর নির্ভর করে।</div></div>

  <div class="verse">
    <div class="verse-arabic">إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ</div>
    <div class="verse-translation">নিশ্চয় আল্লাহ তাদের ভালোবাসেন যারা বারবার ফিরে আসে এবং পবিত্র থাকে।</div>
    <div class="verse-ref">— কুরআন ২:২২২</div>
  </div>

  <div class="secret-box">
    <div class="secret-icon">🔄</div>
    <div class="secret-text">সব না কিছু — অর্ধেক সম্পন্ন অবস্থা সবচেয়ে খারাপ।</div>
    <div class="secret-sub">All or nothing — a half-completed state is the worst.</div>
  </div>`,
  senior: {
    title: "Microservices-এ Saga ব্যবহার করো",
    body: `<p><strong>১. 2PC এড়াও:</strong> Microservices-এ 2PC ধীর ও blocking। সাগা প্যাটার্ন বেশি উপযুক্ত।</p>
    <p><strong>২. Compensating action:</strong> প্রতিটা ধাপের জন্য undo পথ রাখো। যদি ভুল হয় — compensate করো।</p>
    <p><strong>৩. Idempotency:</strong> প্রতিটা অপারেশন idempotent হোক — দুইবার চালালেও একই ফল। Book ৪ Door ৮-এ শিখেছিলে।</p>`
  }
});
