// ════════════════════════════════════════
// CITY BUILDER'S CODEX — DOORS 13-16
// 13. Transactions & ACID [NEW]
// 14. Consensus (Raft/Paxos) [NEW]
// 15. Idempotency & Exactly-Once [NEW]
// 16. Consistent Hashing [NEW]
// ════════════════════════════════════════

// ══ DOOR 13: TRANSACTIONS & ACID ══
doors.push({
  num:13, icon:"📒", color:"#f0c75e", name:"হিসাব রক্ষকের দাপ্তর",
  subtitle:"The Ledger Keeper's Office", tech:"Transactions, ACID & Isolation Levels",
  spirit:"বারাআত — মুক্তি, সম্পূর্ণ নিষ্পত্তি",
  secret:"এক কাজ অনেক ধাপ — পেমেন্ট + ইনভেন্টরি + রসিদ। সব একসাথে হবে, বা কিছুই না। Atomicity। কিন্তু concurrent অনেক transaction — কে আগে? isolation level সেই সিদ্ধান্ত।",
  recall:{
    q:"হিসাব রক্ষক কেন অর্ধেক লেনদেন রেকর্ড করেন না — পুরো না হলে?",
    qen:"Why doesn't the ledger keeper record half a transaction — if not complete?",
    a:"কারণ অর্ধেক লেনদেন ভয়ংকর — টাকা গেল, কিন্তু রসিদ নেই। বা মাল গেল, টাকা এল না। Atomicity — সব বা কিছু না। কিন্তু অনেক transaction একসাথে চললে isolation দরকার — একটা অন্যটাকে না গিলে।",
    aen:"Because a half transaction is terrifying — money gone, no receipt. Or goods gone, money not received. Atomicity — all or nothing. But many transactions running together need isolation — one not swallowing another."
  },
  story:`
<p class="scene-setting">ত্রয়োদশ স্থান। হিসাব রক্ষকের দাপ্তর। সারিবদ্ধ খাতা, মোহরের কালি, দেয়ালে ঘড়ি। কাতিব হারুণ একটা জটিল লেনদেন করছেন — এক ব্যবসায়ী বাংলা থেকে মশলা কিনল, দাম চুক্তি হলো, কর পড়ল, শিল্পীকে দেওয়া হলো, কুরিয়ার বুক করা হলো। "এই পাঁচটা কাজ," হারুণ বললেন, "একসাথে হবে। একটা বাদ পড়লে পুরোটা বাতিল। অর্ধেক হলে নগরীর হিসাব ভেঙে যায়।"</p>
<p class="scene-setting en">The thirteenth place. The Ledger Keeper's office. Ledgers in rows, seal ink, a clock on the wall. Katib Harun is processing a complex transaction — a merchant bought spices from Bengal, price agreed, tax applied, paid the artisan, courier booked. "These five tasks," Harun said, "happen together. If one fails, all is cancelled. Half done breaks the city's books."</p>

<div class="dialogue">চৌরাস্তার মানচিত্রকার শিখিয়েছিলেন — আপস বেছে নাও (CAP)। কিন্তু আমি বলি — আপসের আগে সঠিকতা। কিছু কাজ এমন — সব বা কিছু না। টাকা স্থানান্তর — এক অ্যাকাউন্ট থেকে কাটলাম, অন্যটাতে দিলাম না? টাকা হারালো। এটাই transaction — একটা অবিভাজ্য একক।</div>
<div class="dialogue en">"The crossroads cartographer taught — choose trade-offs (CAP). But I say — before trade-offs, correctness. Some tasks are all-or-nothing. Transfer money — deducted from one account, not added to another? Money vanishes. This is a transaction — an indivisible unit."</div>

<div class="diagram">
  <div class="diag-title">ACID — চার গুণ, এক Transaction</div>
  <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg">
    <!-- A -->
    <rect class="cell-hot" x="25" y="30" width="125" height="80" rx="8"/>
    <text class="lbl-hot" x="87" y="52">A — Atomicity</text>
    <text class="lbl-sm" x="87" y="72">সব বা কিছু না</text>
    <text class="lbl-sm" x="87" y="88" style="font-size:9px">পেমেন্ট: deduct +</text>
    <text class="lbl-sm" x="87" y="100" style="font-size:9px">credit — একসাথে</text>
    <!-- C -->
    <rect class="cell-good" x="160" y="30" width="125" height="80" rx="8"/>
    <text class="lbl-leaf" x="222" y="52">C — Consistency</text>
    <text class="lbl-sm" x="222" y="72">নিয়ম অক্ষুণ্ণ</text>
    <text class="lbl-sm" x="222" y="88" style="font-size:9px">balance ঋণাত্মক</text>
    <text class="lbl-sm" x="222" y="100" style="font-size:9px">হতে পারে না</text>
    <!-- I -->
    <rect class="cell-cyan" x="295" y="30" width="125" height="80" rx="8"/>
    <text class="lbl-cyan" x="357" y="52">I — Isolation</text>
    <text class="lbl-sm" x="357" y="72">concurrent স্বাধীন</text>
    <text class="lbl-sm" x="357" y="88" style="font-size:9px">দুই txn একসাথে —</text>
    <text class="lbl-sm" x="357" y="100" style="font-size:9px">এক ফল হবে</text>
    <!-- D -->
    <rect class="cell-moon" x="430" y="30" width="125" height="80" rx="8"/>
    <text class="lbl-sm" x="492" y="52" fill="#5b9eff" style="font-size:11px;font-weight:700">D — Durability</text>
    <text class="lbl-sm" x="492" y="72">চিরস্থায়ী</text>
    <text class="lbl-sm" x="492" y="88" style="font-size:9px">commit হলে —</text>
    <text class="lbl-sm" x="492" y="100" style="font-size:9px">ক্র্যাশেও থাকে</text>
    <text class="lbl-sm" x="280" y="145" text-anchor="middle">ব্যাংক স্থানান্তর: A (দুই হিসাব একসাথে), C (balance ≥ 0),</text>
    <text class="lbl-sm" x="280" y="162" text-anchor="middle">I (দুই স্থানান্তর একসাথে না), D (ক্র্যাশেও টাকা নিরাপদ)</text>
    <text class="lbl-sm" x="280" y="185" text-anchor="middle" fill="#9290a8">এক দুর্বল হলে — টাকা হারায়, ডবল হয়, বা ক্র্যাশে মুছে যায়।</text>
  </svg>
</div>

<div class="code-block">ACID — The Four Guarantees:

A — ATOMICITY (সব বা কিছু না)
   transaction = এক অবিভাজ্য একক
   একটা ধাপ ব্যর্থ? পুরো rollback
   → money transfer: deduct + credit, উভয় বা কোনোটা নয়

C — CONSISTENCY (নিয়ম অক্ষুণ্ণ)
   transaction শেষে DB valid state-এ
   constraints, triggers, foreign keys মানা হয়
   → balance ঋণাত্মক হতে পারে না (নিয়ম)

I — ISOLATION (concurrent স্বাধীনতা)
   একসাথে চলা transaction একে অপরকে প্রভাবিত করে না
   যেন পরপর চলল (serializable)
   → দুই ইউজার এক সিট বুক করলে — একজন পায়, অন্যজন নয়

D — DURABILITY (চিরস্থায়ী)
   commit হলে — ক্র্যাশ, power loss, কিছুতেই হারায় না
   → WAL (write-ahead log), fsync to disk

ISOLATION LEVELS — কতটা আলাদা? (spectrum, দাম বাড়ে):

  READ UNCOMMITTED (সবচেয়ে দুর্বল)
    "dirty read" — অন্যের অসমাপ্ত লেখা পড়তে পারো
    ❌ খুব খারাপ, কখনো বাস্তবে নয়

  READ COMMITTED (PostgreSQL default)
    শুধু committed ডেটা পড়ো
    ❌ "non-repeatable read" — এক query-তে দুইবার পড়লে ভিন্ন

  REPEATABLE READ (MySQL default)
    এক transaction-এ এক row দুইবার পড়লে একই
    ❌ "phantom read" — নতুন row যুক্ত হতে পারে

  SERIALIZABLE (সবচেয়ে শক্তিশালী, সবচেয়ে ধীর)
    একসাথে চলা যেন পরপর চলল
    ✅ কোনো anomaly নেই
    ❌ throughput কম, locks বেশি

ANOMALIES (কী ভাঙে):
  Dirty Read       — অসমাপ্ত txn পড়া
  Non-repeatable  — এক row দুইবার ভিন্ন
  Phantom          — নতুন row যুক্ত
  Lost Update      — দুই txn এক row বদলালে একটা হারায়
  Write Skew       — প্রতিটা txn আলাদাভাবে constraint মানে, কিন্তু একসাথে চললে নিয়ম ভাঙে

CONCURRENCY CONTROL:
  ১. PESSIMISTIC (2PL — Two-Phase Locking)
     আগেই lock — "আগে আমি, তুমি অপেক্ষা"
     ✅ নিরাপদ ❌ deadlock, ধীর
  ২. OPTIMISTIC (OCC, প্রায়ই MVCC দিয়ে বাস্তবায়িত)
     শেষে যাচাই — "ভাবি কেউ নেই, conflict হলে retry"
     (MVCC নিজে শুধু versioning — OCC হলো commit-এ validate করার কৌশল)
     ✅ দ্রুত (low conflict) ❌ retry storm (high conflict)
  ৩. SSI (Serializable Snapshot Isolation)
     MVCC + conflict-detection — PostgreSQL SERIALIZABLE এর পথ
     ✅ সম্পূর্ণ serializable (আসল গ্যারান্টি!), কিন্তু traditional
        lock-based 2PL serializable-এর চেয়ে কম overhead

DISTRIBUTED TRANSACTIONS (একাধিক service/DB):
  ২PC (Two-Phase Commit):
    Phase 1: coordinator "প্রস্তুত?" সবকে জিজ্ঞেস
    Phase 2: সব হ্যাঁ হলে commit, একজন না হলে abort
    ❌ blocking — coordinator ক্র্যাশ হলে সব থামে
  SAGA:
    দীর্ঘ transaction = ছোট local txn-এর সিরিজ
    প্রতিটা ধাপে compensating txn (rollback নয়, undo)
    ✅ distributed-friendly ❌ eventual, জটিল</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। AI platform-এ transactions সবখানে। ক্রেডিট কাটা + LLM API কল — atomic? সাধারণত নয় (LLM কল অনিশ্চিত) — saga প্যাটার্ন। RAG: ডকুমেন্ট আপলোড + embedding তৈরি + index যোগ — এক transaction বা outbox pattern (Door 15)। Training run: checkpoint atomic — partial checkpoint কাজে লাগে না। Vector DB লেখা — durability দরকার, ক্র্যাশে হারালে আবার embed! ACID ভাবো প্রতিটা critical state change-এ।</div>
<div class="dialogue en">"You're an AI engineer. Transactions everywhere in AI platforms. Credit deduction + LLM API call — atomic? Usually not (LLM call uncertain) — saga pattern. RAG: doc upload + embedding creation + index add — one transaction or outbox pattern (Door 15). Training: checkpoint atomic — partial checkpoint useless. Vector DB writes — durability needed, lose it on crash and re-embed! Think ACID for every critical state change."</div>

<div class="dialogue">বারাআত — মুক্তি, সম্পূর্ণ নিষ্পত্তি। ইসলামী ঐতিহ্যে লেনদেন (মুআমালাত) সুস্পষ্ট নিয়মে — ঋণ লেখা হবে, সাক্ষী থাকবে, সময় নির্দিষ্ট থাকবে। কুরআনে আল্লাহ বলেন — "হে বিশ্বাসীরা, যখন একে অপরের সাথে নির্দিষ্ট মেয়াদে ঋণের লেনদেন করো, তখন তা লিখে রাখো।" (২:২৮২)। লিখিত, সাক্ষী, নির্দিষ্ট — এটাই ACID-এর আত্মিক রূপ: atomic (পুরো লেনদেন লেখা), durable (লিখিত নথি), consistent (নিয়ম মানা), isolated (একে অপরের থেকে স্বাধীন)। আধুনিক transaction প্রাচীন প্রজ্ঞারই কোডে রূপ।</div>
<div class="dialogue en">"Bara'at — clearance, complete settlement. In Islamic tradition, transactions (muamalat) follow clear rules — debts recorded, witnesses present, terms fixed. Allah says — 'O believers, when you contract a debt for a fixed term, write it down.' (2:282). Written, witnessed, fixed — this is ACID's spiritual form: atomic (whole transaction written), durable (written record), consistent (rules met), isolated (independent of others). Modern transactions are ancient wisdom in code."</div>`,
  senior:{
    title:"Isolation Level বাছাই — Production Reality",
    body:`<p><strong>PostgreSQL default:</strong> READ COMMITTED। বেশিরভাগ অ্যাপ এতে থাকে। anomaly হলে সাবধানে গন্তব্য করো।</p><p><strong>MySQL InnoDB default:</strong> REPEATABLE READ। একটু বেশি শক্তিশালী, একটু বেশি overhead।</p><p><strong>SERIALIZABLE সাবধানে:</strong> সবচেয়ে নিরাপদ কিন্তু সবচেয়ে ধীর। ব্যাংকিং, inventory oversell প্রতিরোধে দরকার।</p><p><strong>নিয়ম:</strong> শুরু READ COMMITTED দিয়ে, anomaly ধরা পড়লে বাড়াও। সব SERIALIZABLE করলে throughput পড়ে।</p><p><strong>Long-running txn = সমস্যা:</strong> দীর্ঘ txn lock ধরে রাখে, বাকি txn ব্লক। short txn রাখো, বা saga প্যাটার্নে ভাঙো।</p>`
  }
});

// ══ DOOR 14: CONSENSUS & DISTRIBUTED COORDINATION ══
doors.push({
  num:14, icon:"🏛️", color:"#b37feb", name:"প্রবীণ পরিষদের কক্ষ",
  subtitle:"The Council of Elders' Chamber", tech:"Consensus (Raft, Paxos, Leader Election, 2PC)",
  spirit:"শূরা — পারস্পরিক পরামর্শ, একমত",
  secret:"বিকেন্দ্রীভূত নোডে কীভাবে একমত হবে? এক নেতা বাছাই করো (leader election), সে সিদ্ধান্ত নেয়, সবাই মেনে নেয়। কিন্তু নেতা ক্র্যাশ হলে? নতুন নেতা। সব নোড একই ক্রমে সিদ্ধান্ত রাখে — এটাই consensus।",
  recall:{
    q:"প্রবীণ পরিষদ কীভাবে দূর দূরান্তে একই সিদ্ধান্তে পৌঁছান?",
    qen:"How does the council of elders reach the same decision across vast distances?",
    a:"এক নেতা বাছাই করে (election), সে প্রস্তাব দেয়, সবাই মেনে নেয় (replicate)। নেতা ক্র্যাশ? নতুন নেতা বাছাই। এটাই Raft/Paxos। কিন্তু সম্পূর্ণ async সিস্টেমে consensus অসম্ভব (FLP) — তাই partially sync ধরা হয়।",
    aen:"One leader is chosen (election), proposes, all accept (replicate). Leader crashes? New election. This is Raft/Paxos. But fully async consensus is impossible (FLP) — so we assume partial synchrony."
  },
  story:`
<p class="scene-setting">চতুর্দশ স্থান। প্রবীণ পরিষদের কক্ষ। গোল টেবিল, চারপাশে পাঁচজন প্রবীণ — প্রত্যেকে আলাদা শহর থেকে এসেছেন। দূর দূরান্ত, বার্তা আসতে সময়। এক সিদ্ধান্ত নিতে হবে — কর বাড়ানো হবে কি না। কিন্তু কে সভাপতি? সভাপতি অসুস্থ হলে? এক প্রবীণের বার্তা হারালে? শায়খ আনওয়ার বললেন — "একমত কঠিন, কিন্তু সম্ভব। এক সভাপতি, স্পষ্ট নিয়ম, সংখ্যাগরিষ্ঠতা।"</p>
<p class="scene-setting en">The fourteenth place. The Council of Elders' chamber. A round table, five elders around it — each from a different city. Vast distances, messages take time. One decision needed — shall taxes rise? But who chairs? What if the chair falls ill? What if one elder's message is lost? Shaykh Anwar said — "Agreement is hard, but possible. One chair, clear rules, majority."</p>

<div class="dialogue">হিসাব রক্ষক শিখিয়েছিলেন — এক transaction এক জায়গায় নিয়ম মানে (ACID)। কিন্তু আমি বলি — ডেটা অনেক নোডে ছড়ানো। পাঁচটা নোড কীভাবে এক সিদ্ধান্তে আসবে? একটা ভাঙলে, বার্তা হারালে, দেরি হলে? এটাই consensus — সিস্টেম ডিজাইনের সবচেয়ে গভীর সমস্যা।</div>
<div class="dialogue en">"The ledger keeper taught — one transaction follows rules in one place (ACID). But I say — data is spread across many nodes. How do five nodes reach one decision? If one breaks, messages lost, delays? This is consensus — system design's deepest problem."</div>

<div class="diagram">
  <div class="diag-title">Raft — Leader Election ও Log Replication</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrF14" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#ff6b35"/></marker>
      <marker id="arrT14" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L5,3.5 L0,7" fill="#3dd6c4"/></marker>
    </defs>
    <text class="lbl-sm" x="280" y="22" text-anchor="middle" fill="#ffc857" style="font-size:13px">Term 5 — এক Leader, ৩ Follower</text>
    <!-- leader -->
    <rect class="node-hot" x="240" y="40" width="80" height="44" rx="8"/>
    <text class="lbl" x="280" y="58">Leader</text>
    <text class="lbl-sm" x="280" y="74" style="font-size:9px">term=5, log=[1,2,3]</text>
    <!-- followers -->
    <rect class="node-cyan" x="80" y="120" width="80" height="44" rx="8"/>
    <text class="lbl-sm" x="120" y="140" style="font-size:11px;font-weight:700">Follower A</text>
    <text class="lbl-sm" x="120" y="156" style="font-size:9px">log=[1,2,3] ✓</text>
    <rect class="node-cyan" x="240" y="120" width="80" height="44" rx="8"/>
    <text class="lbl-sm" x="280" y="140" style="font-size:11px;font-weight:700">Follower B</text>
    <text class="lbl-sm" x="280" y="156" style="font-size:9px">log=[1,2,3] ✓</text>
    <rect class="node-moon" x="400" y="120" width="80" height="44" rx="8"/>
    <text class="lbl-sm" x="440" y="140" style="font-size:11px;font-weight:700">Follower C</text>
    <text class="lbl-sm" x="440" y="156" style="font-size:9px">log=[1,2] ⚠ পিছিয়ে</text>
    <!-- AppendEntries arrows -->
    <line class="edge-cyan" x1="260" y1="84" x2="130" y2="120" marker-end="url(#arrT14)"/>
    <line class="edge-cyan" x1="280" y1="84" x2="280" y2="120" marker-end="url(#arrT14)"/>
    <line class="edge-cyan" x1="300" y1="84" x2="430" y2="120" marker-end="url(#arrT14)"/>
    <text class="lbl-sm" x="200" y="105" style="font-size:9px" fill="#3dd6c4">AppendEntries (heartbeat)</text>
    <!-- ack back -->
    <text class="lbl-sm" x="280" y="195" text-anchor="middle" style="font-size:10px" fill="#52c41a">৩/৪ quorum ✓ → commit entry ৩</text>
    <text class="lbl-sm" x="280" y="215" text-anchor="middle" style="font-size:10px">C পিছিয়ে — পরে ধরবে (leader log ধরে রাখে)</text>
    <text class="lbl-sm" x="280" y="240" text-anchor="middle" fill="#9290a8">Leader ভাঙলে → election timeout → Candidate → majority vote → new Leader (new term)</text>
  </svg>
</div>

<div class="code-block">Consensus — Reaching Agreement:

THE PROBLEM:
  N টা node, এক সিদ্ধান্ত। কিছু node crash, বার্তা হারায়।
  সব সুস্থ node একই ক্রমে একই সিদ্ধান্ত দেখে।

USE CASES:
  • Leader election — কে নেতা?
  • Replicated log — সব node-এ একই ক্রমে কমান্ড
  • Distributed lock — এক সময়ে এক মালিক
  • Configuration change — ক্লাস্টার সেটিং আপডেট
  • Membership — কে ক্লাস্টারে, কে নয়

RAFT — Understandable Consensus (প্রিয় পছন্দ):

  তিন role:
    FOLLOWER — নেতার কথা শোনে, লগ রেখে রাখে
    CANDIDATE — নেতা হতে চায়, ভোট চায়
    LEADER — সব কমান্ড গ্রহণ করে, সবাইতে replicate করে

  TERM — মনোনীয়ভাবে বাড়া সংখ্যা (logical clock)
    প্রতিটা election নতুন term শুরু করে
    পুরোনো term কমান্ড উপেক্ষা করা হয়

  LEADER ELECTION:
    ১. Follower election timeout (এলোমেলো 150-300ms)
    ২. → Candidate হয়, term বাড়ায়, নিজেকে ভোট দেয়
    ৩. RequestVote RPC সবাইতে পাঠায়
    ৪. সংখ্যাগরিষ্ঠতা (majority, ⌊N/2⌋+1) → Leader
    ৫. হারলে → আবার Follower, নতুন term অপেক্ষা

  LOG REPLICATION:
    ১. Client কমান্ড Leader-কে পাঠায়
    ২. Leader লগে যোগ করে (এখনও uncommitted)
    ৩. AppendEntries RPC সব follower-এ
    ৪. সংখ্যাগরিষ্ঠতা replicate হলে → commit
    ৫. client-কে সাফল্য, follower-কে commit জানায়

  SAFETY (৫ guarantee, Raft paper-এর মূল সংজ্ঞা):
    • Election Safety — এক term-এ সর্বোচ্চ এক leader (majority vote,
      + voting restriction: candidate-এর log সবচেয়ে up-to-date না হলে ভোট নেই)
    • Leader Append-Only — leader নিজের লগ থেকে কখনো মোছে না, শুধু যোগ করে
    • Log Matching — same index+term = আগের সব entry পর্যন্ত identical
    • Leader Completeness — committed entry পরের কোনো leader-এর log থেকে হারায় না
    • State Machine Safety — এক index-এ apply হলে সব server-এ same entry

PAXOS — ক্লাসিক, কিন্তু কঠিন বোঝা
  Leslie Lamport 1989। তিন role: Proposer, Acceptor, Learner।
  Multi-Paxos = এক leader-এ অনেক decision (Raft-এর মতো)।
  → Raft মূলত Paxos-এর understandable re-packaging।

2PC (Two-Phase Commit) — সহজ কিন্তু blocking
  Phase 1 (PREPARE): coordinator সবাইতে "প্রস্তুত?"
  Phase 2 (COMMIT/ABORT): সব OK হলে commit
  ❌ coordinator ক্র্যাশ → সব অংশগ্রহণকারী blocked (forever)
  → শুধু distributed transaction-এ, leader election-এ নয়

WHY CONSENSUS IS HARD — FLP IMPOSSIBILITY:
  Fischer-Lynch-Paterson (1985) প্রমাণ করেছেন:
  সম্পূর্ণ asynchronous সিস্টেমে, এমনকি একটা faulty node থাকলেও,
  কোনো deterministic consensus algorithm termination guarantee দিতে পারে না।

  অর্থাৎ — consensus সবসময় "solved" নয়। কিন্তু বাস্তবে:
  • partially synchronous ধরেন (মূল্যবান timeout)
  • randomness যোগ করেন (Ben-Or)
  → কার্যত কাজ করে (কিন্তু তাত্ত্বিকভাবে কখনো আটকে যেতে পারে)

QUORUM (সংখ্যাগরিষ্ঠতা) — মূল চাবি:
  N টা node, fault-tolerant of F faults:
    → N = 2F + 1 (3 nodes tolerate 1 fault, 5 tolerate 2)
  quorum = ⌊N/2⌋ + 1
  দুই quorum সবসময় overlap → দুই leader একসাথে অসম্ভব</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। Consensus লুকিয়ে আছে সব distributed AI infrastructure-এ। etcd / Consul — Kubernetes ক্লাস্টার state (Raft)। Zookeeper — Kafka-র metadata (Zab, Paxos-variant)। Vector DB ক্লাস্টার — leader election, shard ownership। Distributed training — gradient sync এক রাউন্ডে (all-reduce, আংশিক consensus)। Model registry — কোন মডেল production-এ? এক সত্য, সবাই মেনে নেয়। RAG: কোন ডকুমেন্ট ভার্সন "official"? consensus দরকার।</div>
<div class="dialogue en">"You're an AI engineer. Consensus hides in all distributed AI infrastructure. etcd/Consul — Kubernetes cluster state (Raft). Zookeeper — Kafka's metadata (Zab, Paxos variant). Vector DB cluster — leader election, shard ownership. Distributed training — gradient sync in one round (all-reduce, partial consensus). Model registry — which model is in production? One truth, all accept. RAG: which document version is 'official'? Consensus needed."</div>

<div class="dialogue">শূরা — পারস্পরিক পরামর্শ, একমত। কুরআনে আল্লাহ মুমিনদের প্রশংসা করেছেন — "যাদের কাজ পারস্পরিক পরামর্শে।" (৪২:৩৮)। শূরা মানে এক নেতা নয় — সবাই একমত। কিন্তু একমত কঠিন, তাই নেতা বাছাই (leader), সে প্রস্তাব দেয়, সবাই যাচাই করে। এটাই Raft-এর মডেল — leader proposes, followers verify, majority commits। কোনো নেতা একা সিদ্ধান্ত নেয় না — সবসময় কোরাম (quorum) সঙ্গে। এটাই ইসলামী শূরা — নেতৃত্ব আছে, কিন্তু পরামর্শ ছাড়া কিছু নয়।</div>
<div class="dialogue en">"Shura — mutual consultation, agreement. Allah praised believers — 'whose affairs are by mutual consultation.' (42:38). Shura means not one leader — all agree. But agreement is hard, so a leader is chosen, proposes, all verify. This is Raft's model — leader proposes, followers verify, majority commits. No leader decides alone — always with quorum. This is Islamic shura — leadership exists, but nothing without consultation."</div>`,
  senior:{
    title:"Consensus in Practice — When, What",
    body:`<p><strong>নিজে লেখো না:</strong> etcd, Consul, Zookeeper, Spanner — production-grade। নিজে Raft লেখা ভয়ংকর (subtle bugs)।</p><p><strong>কখন consensus দরকার:</strong> এক সত্য চাই (leader, config, lock), একাধিক node একমত হতে হবে, fault-tolerant দরকার।</p><p><strong>কখন নয়:</strong> (১) single node, (২) eventual consistency চলে (CAP-এ AP বেছেছ), (৩) business logic consensus (CRDT, saga)।</p><p><strong>Quorum হিসাব:</strong> ৩ node = ১ fault tolerate (২ quorum)। ৫ node = ২ fault (৩ quorum)। ৭ node = ৩ fault (৪ quorum)। সাধারণত ৩ বা ৫ যথেষ্ট।</p><p><strong>Split-brain প্রতিরোধ:</strong> দুই leader একসাথে অসম্ভব কারণ দুই majority quorum overlap করে — কমপক্ষে এক node উভয় quorum-এ। সে দ্বিতীয় vote দিতে পারে না (one vote per term)।</p>`
  }
});

// ══ DOOR 15: IDEMPOTENCY & EXACTLY-ONCE ══
doors.push({
  num:15, icon:"🔏", color:"#ff6b35", name:"মোহরদারের ডেস্ক",
  subtitle:"The Seal Registrar's Desk", tech:"Idempotency & Exactly-Once Semantics",
  spirit:"খাতম — সিল, চূড়ান্ততা",
  secret:"একই কাজ দুইবার হওয়া ভয়ংকর — দুই অর্ডার, দুই চার্জ। সমাধান: idempotency — একই কল বারবার = একই ফল। কিন্তু exactly-once সত্যিকারে অসম্ভব — এটা আসলে at-least-once + idempotent।",
  recall:{
    q:"মোহরদার কেন একই নথিতে দুইবার সিল দেন না?",
    qen:"Why doesn't the seal registrar stamp the same document twice?",
    a:"কারণ এক সিল চূড়ান্ত। দুই সিল = দ্বিধা। idempotency সেই সিল — একই কাজ বারবার করলেও ফল এক। ক্লায়েন্ট retry করলে, নেটওয়ার্ক ডুপ্লিকেট দিলে — নিরাপদ। সিল ছাড়া retry = দুই চার্জ।",
    aen:"Because one seal is final. Two seals = confusion. Idempotency is that seal — same action repeated yields one result. Client retries, network duplicates — safe. Retry without seal = two charges."
  },
  story:`
<p class="scene-setting">পঞ্চদশ স্থান। মোহরদারের ডেস্ক। মোহরের সিল, কালির পাত্র, সামনে সারিবদ্ধ নথি। মোহরদার সালিম এক নথিতে সিল দিচ্ছেন। একজন কেরানি ছুটে এলেন — "এই নথিতে সিল দিন, আগের বার্তা হারিয়ে গেছে!" সালিম খাতা দেখলেন — "এর আগেই দিয়েছি। একই নথিতে দুইবার সিল নয়। চূড়ান্ত চূড়ান্ত।"</p>
<p class="scene-setting en">The fifteenth place. The Seal Registrar's desk. Seal stamps, ink pots, queued documents. Registrar Salim stamps one. A clerk rushes in — "Stamp this document, the previous message was lost!" Salim checks the ledger — "Already done. Not twice on the same document. Final is final."</p>

<div class="dialogue">প্রবীণ পরিষদ শিখিয়েছিলেন — নোডে একমত (consensus)। কিন্তু আমি বলি — ক্লায়েন্ট ও সার্ভারের মধ্যেও এক সমস্যা। ক্লায়েন্ট "পেমেন্ট করো" বলল, নেটওয়ার্ক ব্যর্থ হলো, retry করল। সার্ভার আসলে প্রথমবারেই পেমেন্ট করেছিল। এখন আবার? ইউজার দুইবার চার্জ হলো। এটাই আমার কাজ — চূড়ান্ততা নিশ্চিত করা। idempotency।</div>
<div class="dialogue en">"The council of elders taught — agreement among nodes (consensus). But I say — there's a problem between client and server too. Client says 'pay,' network fails, retries. Server actually paid the first time. Now again? User charged twice. This is my job — ensure finality. Idempotency."</div>

<div class="diagram">
  <div class="diag-title">তিন Delivery Semantic — বার্তা কতবার?</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <!-- at-most-once -->
    <rect class="cell-moon" x="25" y="30" width="160" height="90" rx="8"/>
    <text class="lbl-sm" x="105" y="50" fill="#5b9eff" style="font-size:12px;font-weight:700">AT-MOST-ONCE</text>
    <text class="lbl-sm" x="105" y="72">০ বা ১ বার</text>
    <text class="lbl-sm" x="105" y="90" style="font-size:9px">হারালে OK</text>
    <text class="lbl-sm" x="105" y="104" style="font-size:9px">→ metrics, logs</text>
    <text class="lbl-sm" x="105" y="116" style="font-size:9px">→ fire-and-forget</text>
    <!-- at-least-once -->
    <rect class="cell-hot" x="200" y="30" width="160" height="90" rx="8"/>
    <text class="lbl-hot" x="280" y="50">AT-LEAST-ONCE</text>
    <text class="lbl-sm" x="280" y="72">১ বা ততোধিক</text>
    <text class="lbl-sm" x="280" y="90" style="font-size:9px">হারায় না, ডুপ্লিকেট হয়</text>
    <text class="lbl-sm" x="280" y="104" style="font-size:9px">→ retry, message queue</text>
    <text class="lbl-sm" x="280" y="116" style="font-size:9px">→ idempotent দরকার!</text>
    <!-- exactly-once -->
    <rect class="cell-good" x="375" y="30" width="160" height="90" rx="8"/>
    <text class="lbl-leaf" x="455" y="50">EXACTLY-ONCE</text>
    <text class="lbl-sm" x="455" y="72">ঠিক ১ বার</text>
    <text class="lbl-sm" x="455" y="90" style="font-size:9px">✨ আদর্শ ✨</text>
    <text class="lbl-sm" x="455" y="104" style="font-size:9px">কিন্তু আসলে...</text>
    <text class="lbl-sm" x="455" y="116" style="font-size:9px">at-least + idempotent</text>
    <text class="lbl-sm" x="280" y="160" text-anchor="middle">"exactly-once" সত্যিকারে অসম্ভব — নেটওয়ার্ক অনিশ্চিত।</text>
    <text class="lbl-sm" x="280" y="178" text-anchor="middle" fill="#52c41a">প্রকৌশলগত সত্য: at-least-once delivery + idempotent consumer = exactly-once effect</text>
    <text class="lbl-sm" x="280" y="200" text-anchor="middle" fill="#9290a8">Kafka "exactly-once" = idempotent producer + transactional consumer</text>
  </svg>
</div>

<div class="code-block">Idempotency — The Seal of Finality:

ইডেম্পোটেন্ট (idempotent) = একই অপারেশন বারবার করলে ফল এক
  f(x) = f(f(x)) = f(f(f(x))) ...
  উদাহরণ: x = 5 (set) — idempotent। x += 1 (increment) — নয়।

HTTP methods (Door 5 দেখো):
  GET, PUT, DELETE — idempotent (ডিজাইন অনুযায়ী)
  POST — non-idempotent (দুইবার কল = দুটো অর্ডার!)

সমাধান — IDEMPOTENCY KEY:
  ক্লায়েন্ট প্রতিটা কাজে এক UUID পাঠায়
    POST /payments
    Idempotency-Key: 7c8d2e1f-...
    { amount: 100, to: "user_123" }
  সার্ভার key দেখে:
    ✓ নতুন? → কাজ করো, ফল cache করো (DB-তে)
    ✓ পুরোনো? → cached ফল ফেরত দাও (আবার কাজ নয়!)

  স্টোরেজ: idempotency_key, request_hash, response, status, expires_at
    CREATE TABLE idempotency (
      key TEXT PRIMARY KEY,
      request_hash TEXT,  -- একই key ভিন্ন request? প্রতারণা!
      response JSONB,
      status TEXT,
      created_at TIMESTAMP
    );

DELIVERY SEMANTICS (গুরুত্বপূর্ণ):
  AT-MOST-ONCE — হয়তো পৌঁছাবে, হয়তো না
    → metrics, লগ — হারালে সমস্যা না
    → UDP, fire-and-forget
  AT-LEAST-ONCE — অন্তত একবার, হয়তো দুইবার
    → retry, ack + timeout, message queue
    → সবসময় এটাই প্রকৌশলগত বাস্তবতা
  EXACTLY-ONCE — ঠিক একবার
    → ⚠️ সত্যিকারে অসম্ভব (নেটওয়ার্ক অনিশ্চিত)
    → কৌশল: at-least-once + idempotent consumer
    → Kafka: idempotent producer + transactional consumer

AT-MOST-ONCE পৃথিবীতে যা করবেন:
  ১. Consumer idempotent বানাও — একই বার্তা দুইবার = একবার
  ২. Idempotency key ব্যবহার করো (UUID)
  ৩. Dedup table — প্রক্রিয়াকৃত ID মনে রাখো (TTL সহ)
  ৪. Versioned writes — optimistic concurrency
     UPDATE accounts SET balance = balance - 100
     WHERE id = X AND version = 5;  -- দুইবার হবে না

OUTBOX PATTERN — reliable event publishing:
  সমস্যা: DB লেখা হলো, কিন্তু event publish ব্যর্থ?
    → ডেটা ও event inconsistent
  সমাধান: এক transaction-এ
    ১. business data লেখো
    ২. outbox table-এ event লেখো (একই txn — atomic!)
    আলাদা worker outbox পড়ে, publish করে, mark করে
    → অন্তত একবার publish নিশ্চিত (idempotent consumer সহ)

COMMON PITFALLS:
  ❌ "Retry on failure" — POST retry করলে ডুপ্লিকেট অর্ডার
  ❌ Webhook দুইবার — ইউজার দুইবার active
  ❌ "Check then act" — race condition (TOCTOU)
     if not exists(order_id) { create_order() }  ← দুই request একসাথে?
  ✅ Atomic check-and-insert — DB constraint, UPSERT</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। LLM API কল — দামি। ডুপ্লিকেট কল = ডবল খরচ! idempotency key দাও। Webhook থেকে LLM টাস্ক trigger — webhook retry করে, দুইবার inference নয়। RAG indexing — একই ডকুমেন্ট দুইবার embed নয় (content hash dedup)। Training data — duplicate samples মডেল বিকৃত করে। Feature store writes — idempotent upsert (user_id + timestamp key)। প্রতিটা দামি বা side-effect সহ ক্রিয়ায় idempotency চিন্তো — এটাই production AI-এর সারকথা।</div>
<div class="dialogue en">"You're an AI engineer. LLM API calls — expensive. Duplicate = double cost! Add idempotency keys. Webhook triggers LLM task — webhook retries, no double inference. RAG indexing — don't embed the same doc twice (content hash dedup). Training data — duplicate samples distort the model. Feature store writes — idempotent upsert (user_id + timestamp key). Think idempotency for every expensive or side-effecting action — this is the core of production AI."</div>

<div class="dialogue">খাতম — সিল, চূড়ান্ততা, শেষ। কুরআনে আল্লাহ নবীকে "খাতামান্নাবিয়্যিন" — নবীদের সীল, শেষ নবী বলেছেন (৩৩:৪০)। খাতম মানে চূড়ান্ত — একবার, পরিপূর্ণ, পুনরাবৃত্তি নয়। Idempotency সেই খাতম-এর ছায়া — একবার হলে চূড়ান্ত, বারবার নয়। সিল ছাড়া retry = বিভ্রান্তি, ডুপ্লিকেট, ক্ষতি। সিল সহ retry = নিরাপত্তা, নিশ্চয়তা, চূড়ান্ততা। প্রতিটা গুরুত্বপূর্ণ ক্রিয়ায় সিল দাও — idempotency key।</div>
<div class="dialogue en">"Khatm — seal, finality, end. Allah called the Prophet 'khataman nabiyyin' — the seal of prophets, the last (33:40). Khatm means final — once, complete, no repetition. Idempotency is the shadow of khatm — once done is final, not repeated. Retry without seal = confusion, duplication, harm. Retry with seal = safety, certainty, finality. Stamp every important action — idempotency key."</div>`,
  senior:{
    title:"Idempotency — Production Checklist",
    body:`<p><strong>প্রতিটা POST/PATCH-এ idempotency key:</strong> Stripe-এর প্যাটার্ন অনুসরণ করো — <code>Idempotency-Key</code> header, server মনে রাখে।</p><p><strong>Database এ ডুপ্লিকেট প্রতিরোধ:</strong> UNIQUE constraint, UPSERT (<code>ON CONFLICT DO NOTHING</code>)। application-level check একা পর্যাপ্ত নয় — race condition।</p><p><strong>Outbox pattern:</strong> DB write + event publish atomic করতে। আলাদা করলে inconsistency।</p><p><strong>Webhook receiver idempotent:</strong> webhook প্রদানকারী retry করে — দুইবার process করবে না (event_id dedup)।</p><p><strong>"exactly-once" দাবি সাবধানে:</strong> সত্যিকারে অসম্ভব। "at-least-once + idempotent" বলো, এটাই সত্য। Kafka transactions জটিল — শুধু কোন consumer participate করলে কাজ করে।</p>`
  }
});

// ══ DOOR 16: CONSISTENT HASHING ══
doors.push({
  num:16, icon:"⭕", color:"#3dd6c4", name:"রিং মানচিত্রকারের বেলট",
  subtitle:"The Ring Cartographer's Belt", tech:"Consistent Hashing",
  spirit:"দাওয়াম আল-হালকা — চিরস্থায়ী রিং",
  secret:"node যোগ/বাদ করলে সব ডেটা পুনরায় ভাগ নয় — শুধু প্রতিবেশীর অংশ move। এটাই consistent hashing — ring-এ hash ছড়িয়ে, minimal rebalancing। DynamoDB, Cassandra, CDN, load balancer — সব এতে চলে।",
  recall:{
    q:"রিং মানচিত্রকার কেন সোজা রেখায় নয়, বৃত্তে ম্যাপ করেন?",
    qen:"Why does the ring cartographer map on a circle, not a straight line?",
    a:"কারণ বৃত্তে এক node সরলে শুধু তার প্রতিবেশীদের অংশ বদলায়। সোজা রেখায় (hash % N) এক node যোগ হলে সব key-এর ভাগ বদলে — ভয়ংকর। বৃত্ত = minimal movement। এটাই consistent hashing।",
    aen:"Because on a circle, removing one node only changes its neighbors' shares. On a line (hash % N), adding one node changes every key's assignment — terrible. Circle = minimal movement. This is consistent hashing."
  },
  story:`
<p class="scene-setting">ষোড়শ স্থান। রিং মানচিত্রকারের কামরা। মাস্টার ইলিয়াস দাঁড়িয়ে আছেন — সামনে একটা বিশাল চামড়ার বেলট, গোটা একটা বৃত্তে বাঁধা। বৃত্তের উপর ছোট ছোট চিহ্ন — কিছু node-এর নাম, কিছু key-এর নাম। "এক node সরাও," ইলিয়াস বললেন। এক শিষ্য সরাল। শুধু তার পাশের দুই node-এর অংশ বদলাল। "দেখো," ইলিয়াস হাসলেন, "এক node সরালে পুরো মানচিত্র পুনরায় নয় — শুধু প্রতিবেশী। এটাই রিং-এর জাদু।"</p>
<p class="scene-setting en">The sixteenth place. The Ring Cartographer's chamber. Master Ilyas stands — a vast leather belt before him, bound into a circle. Small marks on the circle — some node names, some key names. "Remove one node," Ilyas said. A student removed one. Only its two neighbors' shares changed. "See," Ilyas smiled, "removing one node doesn't redo the whole map — only neighbors. This is the ring's magic."</p>

<div class="dialogue">মোহরদার শিখিয়েছিলেন — চূড়ান্ততা (idempotency)। কিন্তু আমি বলি — চূড়ান্ততার আগে ভাগ। ডেটা কোথায় যাবে? কোন node-এ? সবসময় এক node-এ গেলে সে পোড়ে (hotspot)। ভাগ দরকার। কিন্তু ভাগ করলে node যোগ হলে কী হবে? সব পুনরায়? না — রিং বলে সামান্য move।</div>
<div class="dialogue en">"The seal registrar taught — finality (idempotency). But I say — before finality, division. Where does data go? Which node? If always one, it burns (hotspot). Division needed. But on division, what when a node joins? Redo everything? No — the ring says minimal movement."</div>

<div class="diagram">
  <div class="diag-title">Consistent Hashing — রিংয়ে ছড়িয়ে, Minimal Rebalance</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <!-- ring -->
    <circle class="ring" cx="280" cy="140" r="100" fill="none"/>
    <text class="lbl-sm" x="280" y="145" text-anchor="middle" style="font-size:10px" fill="#9290a8">hash ring</text>
    <!-- nodes positioned around ring -->
    ${(()=>{
      const nodes=[['N1',270],['N2',160],['N3',60],['N4',340]];
      return nodes.map(n=>{
        const a=(n[1]-90)*Math.PI/180;const x=280+Math.cos(a)*100;const y=140+Math.sin(a)*100;
        return `<rect class="node-hot" x="${x-24}" y="${y-14}" width="48" height="28" rx="6"/><text class="lbl-sm" x="${x}" y="${y+1}" style="font-size:10px;font-weight:700">${n[0]}</text>`;
      }).join('');
    })()}
    <!-- some keys -->
    ${(()=>{
      const keys=[['k1',300],['k2',200],['k3',100],['k4',20],['k5',350]];
      return keys.map(k=>{
        const a=(k[1]-90)*Math.PI/180;const x=280+Math.cos(a)*70;const y=140+Math.sin(a)*70;
        return `<circle class="node-leaf" cx="${x}" cy="${y}" r="9"/><text class="lbl-sm" x="${x}" y="${y+2}" style="font-size:8px">${k[0]}</text>`;
      }).join('');
    })()}
    <!-- N5 new node joining at ~220 -->
    ${(()=>{
      const a=(220-90)*Math.PI/180;const x=280+Math.cos(a)*100;const y=140+Math.sin(a)*100;
      return `<rect class="node-cyan" x="${x-26}" y="${y-16}" width="52" height="32" rx="6" style="stroke-dasharray:3,2"/><text class="lbl-sm" x="${x}" y="${y+1}" style="font-size:10px;font-weight:700" fill="#3dd6c4">N5 NEW</text>`;
    })()}
    <text class="lbl-sm" x="280" y="265" text-anchor="middle">N5 যোগ হলে — শুধু N1 থেকে কিছু key N5-এ যায় (N2-N1 এর মাঝে বসে N5 সেগুলো আটকায়)</text>
    <text class="lbl-sm" x="280" y="278" text-anchor="middle">বাকি সব key যেখানে ছিল সেখানেই থাকে — minimal rebalance ✨</text>
  </svg>
  <div class="diag-cap">প্রতিটা key → ঘড়ির কাঁটায় নিকটস্থ node-এ। node যোগ/বাদ = শুধু সেই অংশের key সরে।</div>
</div>

<div class="code-block">Consistent Hashing — The Ring:

THE PROBLEM (hash % N):
  hash(key) % N → node
  N=4: hash(k) % 4 → 0,1,2,3 (ম্যাপ node 0,1,2,3)
  N=5 (এক node যোগ): hash(k) % 5 → সব key পুনরায় ভাগ!
  ❌ এক node যোগ/বাদ = প্রায় সব ডেটা move — ভয়ংকর

THE SOLUTION (consistent hashing):
  ১. ring কল্পনা করো — 0 থেকে 2³²-1, গোটায়
  ২. প্রতিটা node-এ hash(node_id) → ring-এ এক অবস্থান
  ৩. প্রতিটা key → hash(key) → ring-এ অবস্থান
  ৪. key যায় → ঘড়ির কাঁটায় নিকটস্থ node-এ (clockwise)

  node যোগ হলে:
    নতুন node-এর অবস্থানের আগের node থেকে
    নতুন node পর্যন্ত key-গুলো move করে
    → শুধু সেই অংশ! বাকি সব key যেখানে আছে সেখানেই

  node বাদ হলে:
    তার key গুলো ঘড়ির কাঁটায় পরের node-এ যায়
    → আবার, শুধু সেই অংশ

  পরিসংখ্যান: N node, এক node পরিবর্তনে ~K/N key move (K=মোট key)
    → বনাম hash%N: প্রায় সব K key move

VIRTUAL NODES (replicas) — সমান ভাগের চাবি:
  সমস্যা: ৩-৪ node-এ এলোমেলো অবস্থান → অসমান ভাগ (hotspot)
  সমাধান: প্রতিটা physical node-কে অনেক virtual node-এ ম্যাপ
    N1 → N1_v1, N1_v2, ..., N1_v150 (ring-এ ১৫০ অবস্থান)
    N2 → N2_v1, N2_v2, ..., N2_v150
  → ১৫০ × N অবস্থান ring-এ — সমান ভাগ নিশ্চিত
  → ১৫০-২০০ virtual node per physical সাধারণ

WHERE IT'S USED (সব জায়গা!):
  • DynamoDB — partition assignment
  • Cassandra — token ring
  • Memcached, Redis Cluster — client-side routing
  • Akamai, Cloudflare CDN — edge node selection
  • Envoy, HAProxy — load balancing with affinity
  • Discord, Vimeo — sharded user content

WHY IT MATTERS:
  • horizontal scaling সহজ — node যোগ/বাদ সস্তা
  • no central coordinator (peer-to-peer lookup)
  • natural load balancing (virtual nodes সহ)
  • graceful degradation — কিছু node বাদ হলেও কাজ চলে</div>

<div class="dialogue">তুমি AI ইঞ্জিনিয়ার। AI infrastructure-এ consistent hashing সবখানে। Vector DB cluster — embedding কোন shard-এ? consistent hash (key = doc_id)। RAG cache — query cache কোন node-এ? ring। Distributed inference — এক মডেল অনেক GPU, request কোন replica? hash(user_id) → sticky (cache locality)। Training data sharding — sample_id ring-এ। Feature store — user_id shard। LLM token routing — session_id hash → session এক replica-তে (KV cache reuse!)। বিনা consistent hashing-এ distributed AI অসম্ভব।</div>
<div class="dialogue en">"You're an AI engineer. Consistent hashing everywhere in AI infra. Vector DB cluster — which shard holds the embedding? Consistent hash (key = doc_id). RAG cache — which node has the query cache? Ring. Distributed inference — one model many GPUs, which replica? hash(user_id) → sticky (cache locality). Training data sharding — sample_id on ring. Feature store — user_id shard. LLM token routing — session_id hash → session on one replica (KV cache reuse!). Distributed AI is impossible without consistent hashing."</div>

<div class="dialogue">দাওয়াম আল-হালকা — চিরস্থায়ী রিং। কুরআনে আল্লাহ বলেন — "সূর্যের সাধ্য নেই চাঁদকে ধরার, রাত্রিও দিনের আগে যায় না; প্রত্যেকে নিজ নিজ কক্ষপথে (ফালাক) সাঁতরাচ্ছে।" (৩৬:৪০)। সূর্য, চাঁদ, গ্রহ — সব বৃত্তাকার পথে। প্রকৃতিতে সব চক্র — ঋতু, জীবন, জল। বৃত্তের জাদু: এক অংশ সরলে পুরো বৃত্ত নষ্ট হয় না, প্রতিবেশী সামঞ্জস্য রাখে। consistent hashing সেই প্রাকৃতিক প্যাটার্ন — বৃত্তে ছড়িয়ে, পরিবর্তন স্থানীয়, সমষ্টি স্থিতিশীল।</div>
<div class="dialogue en">"Dawam al-halqa — the enduring ring. Allah says — 'It is not for the sun to overtake the moon, nor does the night outstrip the day; each swims in an orbit (falak) of its own.' (36:40). Sun, moon, planets — all on circular paths. In nature everything is cyclic — seasons, life, water. The circle's magic: one part moving doesn't break the whole, neighbors maintain balance. Consistent hashing is that natural pattern — spread on a ring, change local, sum stable."</div>`,
  senior:{
    title:"Consistent Hashing — Implementation Notes",
    body:`<p><strong>নিজে লেখো না:</strong> লাইব্রেরি আছে — Python <code>hashring</code>, Go <code>consistent</code>, Jump Consistent Hash (Google)। subtle edge cases অনেক।</p><p><strong>Virtual nodes সংখ্যা:</strong> ১০০-২০০ per physical সাধারণ। বেশি = সমান ভাগ কিন্তু lookup ধীর (sorted structure-এ search)।</p><p><strong>Lookup কৌশল:</strong> node অবস্থানগুলো sorted array → key hash → binary search (next clockwise)। O(log N) per lookup।</p><p><strong>Jump Consistent Hash:</strong> Google-এর সহজ সংস্করণ — শুধু এক ফাংশন, কোনো ring নয়। কিন্তু node যোগ/বাদ ক্রম নির্দিষ্ট (0..N)। সীমিত ক্ষেত্রে দ্রুত।</p><p><strong>Replication সহ:</strong> প্রতিটা key শুধু নিকটস্থ নয়, পরের দুই-তিন node-এও (replication factor R)। Cassandra এভাবে — ring-এ পরের R node = replicas।</p>`
  }
});
