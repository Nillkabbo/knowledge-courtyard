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

  <div class="code-block">
    <h4>🔬 Lamport Clock — অ্যালগরিদম</h4>
    <table class="kv-table">
      <tr><th>ঘটনা</th><th>কী করে</th><th>টাইমস্ট্যাম্প</th></tr>
      <tr><td class="hl">লোকাল ইভেন্ট</td><td>নিজের কাউন্টার +১</td><td>গডেটের চেয়ে বড়</td></tr>
      <tr><td class="hl">মেসেজ পাঠানো</td><td>কাউন্টার +১, মেসেজে টাইমস্ট্যাম্প যুক্ত</td><td>গডেটের চেয়ে বড়</td></tr>
      <tr><td class="hl">মেসেজ গ্রহণ</td><td>max(নিজের, প্রেরকের) + ১</td><td>উভয়ের চেয়ে বড়</td></tr>
    </table>
    <br>
    <p><strong>গুরুত্বপূর্ণ বৈশিষ্ট্য:</strong> যদি A → B (happens-before), তাহলে timestamp(A) < timestamp(B)। কিন্তু বিপরীত সত্য নয় — timestamp(A) < timestamp(B) মানে A আগে ঘটেছে তা নয়। তারা concurrent হতে পারে।</p>
    <p><strong>ল্যাম্পোর্টের উত্তরাধিকার:</strong> এই গবেষণাপত্র (১৯৭৮) বিতরণ সিস্টেমের ভিত্তি স্থাপন করে। Lamport পরে Paxos (১৯৯৮) এবং LaTeX তৈরি করেন — দুটোই আজও ব্যবহৃত। ২০১৩ সালে Turing Award পান।</p>
  </div>

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

  <div class="code-block">
    <h4>🔬 Semaphore — অপারেশন</h4>
    <table class="kv-table">
      <tr><th>অপারেশন</th><th>ডাচ নাম</th><th>কাজ</th></tr>
      <tr><td class="hl">P / wait</td><td>proberen (পরীক্ষা)</td><td>S কমাও। যদি S < ০, ব্লক হও</td></tr>
      <tr><td class="hl">V / signal</td><td>verhogen (বৃদ্ধি)</td><td>S বাড়াও। যদি S ≤ ০, একজনকে জাগাও</td></tr>
      <tr><td class="hl">মিউটেক্স (Mutex)</td><td>—</td><td>Binary semaphore — S শুধু ০ বা ১</td></tr>
      <tr><td class="hl">Counting semaphore</td><td>—</td><td>S যেকোনো সংখ্যা — N রিসোর্স</td></tr>
    </table>
    <br>
    <p><strong>বিতরণ সিস্টেমে গুরুত্ব:</strong> একটা মেশিনে mutual exclusion সহজ — একই মেমরি। কিন্তু হাজার মেশিনে? সেখানে কে লক ধরবে? এটাই consensus সমস্যা — Door ৪-এ Paxos দেখবে।</p>
    <p><strong>ডাইকস্ট্রার উত্তরাধিকার:</strong> Semaphore (১৯৬৫), shortest-path algorithm, structured programming প্রচার, "Go To Considered Harmful" (১৯৬৮)। Turing Award ১৯৭২। তিনি প্রোগ্রামিংকে গণিতের মতো কঠোর শাখা হিসেবে দেখতেন।</p>
  </div>

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
      <text x="180" y="150" text-anchor="middle" font-size="7" fill="#5e5c74">MySQL, PostgreSQL</text>
      <text x="380" y="150" text-anchor="middle" font-size="7" fill="#5e5c74">MongoDB, HBase</text>
      <text x="280" y="250" text-anchor="middle" font-size="7" fill="#5e5c74">DynamoDB, Cassandra</text>

      <!-- Bottom explanation -->
      <rect x="40" y="265" width="480" height="40" rx="8" fill="rgba(249,115,22,0.06)" stroke="#f97316" stroke-width="0.5"/>
      <text x="280" y="282" text-anchor="middle" font-size="10" font-weight="700" fill="#fbbf24">P অনিবার্য — তাই আসল পছন্দ: CP না AP?</text>
      <text x="280" y="297" text-anchor="middle" font-size="9" fill="#9290a8">নেটওয়ার্ক বিভাজন বিরল — সাধারণ সময়ে C ও A দুটোই সম্ভব (Brewer, ২০১২)</text>
    </svg>
    <div class="diag-cap">CAP ত্রিভুজ: C (সব নোডে একই ডেটা), A (সব রিকোয়েস্টে উত্তর), P (বিভাজন সহনশীলতা)। বিতরণ সিস্টেমে P বাদ দেওয়া যায় না — তাই CP বা AP বেছে নিতে হয়।</div>
  </div>

  <div class="code-block">
    <h4>🔬 CAP সিস্টেম উদাহরণ</h4>
    <table class="kv-table">
      <tr><th>পছন্দ</th><th>অর্থ</th><th>উদাহরণ সিস্টেম</th></tr>
      <tr><td class="hl">CP</td><td>Consistency + Partition — ডেটা সবসময় সামঞ্জস্য, কিন্তু কিছু রিকোয়েস্ট ব্লক</td><td>HBase, MongoDB, Redis Cluster</td></tr>
      <tr><td class="hl">AP</td><td>Availability + Partition — সব রিকোয়েস্টে উত্তর, কিন্তু কিছু সময় পুরোনো ডেটা</td><td>DynamoDB, Cassandra, CouchDB</td></tr>
      <tr><td class="hl">CA (single-site)</td><td>নন-ডিস্ট্রিবিউটেড — partition সম্ভব নয়</td><td>MySQL, PostgreSQL (single node)</td></tr>
    </table>
    <br>
    <p><strong>ব্রুয়ারের ২০১২ সংশোধন:</strong> partition বিরল ঘটনা। সাধারণ সময়ে (no partition) সিস্টেম C এবং A দুটোই দিতে পারে। সমস্যা শুধু partition চলাকালীন — তখন সিস্টেমকে সিদ্ধান্ত নিতে হয়। তাই CAP চিরস্থায়ী নয় — এটা একটা সীমার কাঠামো।</p>
  </div>

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
      <text x="120" y="113" text-anchor="middle" font-size="7" fill="#3dd6c4">A₁</text>
      <circle cx="155" cy="110" r="9" fill="rgba(61,214,196,0.15)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="155" y="113" text-anchor="middle" font-size="7" fill="#3dd6c4">A₂</text>
      <circle cx="190" cy="110" r="9" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="1" opacity="0.3"/>
      <text x="190" y="113" text-anchor="middle" font-size="7" fill="#ef4444">A₃✗</text>

      <!-- Learner -->
      <rect x="210" y="62" width="55" height="24" rx="4" fill="rgba(179,127,235,0.15)" stroke="#b37feb" stroke-width="1"/>
      <text x="237" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#b37feb">Learner</text>

      <!-- Arrows -->
      <path d="M 100 82 Q 110 95 115 102" fill="none" stroke="#fbbf24" stroke-width="1" marker-end="url(#arrOrange4)"/>
      <path d="M 165 102 Q 200 90 210 82" fill="none" stroke="#3dd6c4" stroke-width="1" marker-end="url(#arrOrange4)"/>
      <text x="145" y="135" text-anchor="middle" font-size="8" fill="#9290a8">২/৩ রাজি → চূড়ান্ত</text>
      <text x="145" y="148" text-anchor="middle" font-size="7" fill="#5e5c74">quorum = majority</text>

      <!-- Right: Raft -->
      <rect x="285" y="35" width="260" height="120" rx="10" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="415" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#52c41a">Raft (২০১৪)</text>

      <!-- Leader -->
      <rect x="360" y="62" width="70" height="28" rx="4" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="395" y="80" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">Leader</text>

      <!-- Followers -->
      <circle cx="320" cy="115" r="9" fill="rgba(61,214,196,0.15)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="320" y="118" text-anchor="middle" font-size="7" fill="#3dd6c4">F₁</text>
      <circle cx="355" cy="115" r="9" fill="rgba(61,214,196,0.15)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="355" y="118" text-anchor="middle" font-size="7" fill="#3dd6c4">F₂</text>
      <circle cx="430" cy="115" r="9" fill="rgba(61,214,196,0.15)" stroke="#3dd6c4" stroke-width="1.5"/>
      <text x="430" y="118" text-anchor="middle" font-size="7" fill="#3dd6c4">F₃</text>

      <!-- Arrows Leader → Followers -->
      <path d="M 375 90 Q 350 100 325 108" fill="none" stroke="#fbbf24" stroke-width="1" marker-end="url(#arrOrange4)"/>
      <path d="M 395 90 L 358 108" fill="none" stroke="#fbbf24" stroke-width="1" marker-end="url(#arrOrange4)"/>
      <path d="M 410 90 L 425 108" fill="none" stroke="#fbbf24" stroke-width="1" marker-end="url(#arrOrange4)"/>
      <text x="415" y="135" text-anchor="middle" font-size="8" fill="#9290a8">Leader → Followers</text>
      <text x="415" y="148" text-anchor="middle" font-size="7" fill="#5e5c74">log replication</text>

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

  <div class="code-block">
    <h4>🔬 Consensus অ্যালগরিদম তুলনা</h4>
    <table class="kv-table">
      <tr><th>বৈশিষ্ট্য</th><th>Paxos</th><th>Raft</th></tr>
      <tr><td class="hl">বছর</td><td>১৯৮৯/১৯৯৮</td><td>২০১৪</td></tr>
      <tr><td class="hl">জটিলতা</td><td>উচ্চ — বোঝা কঠিন</td><td>কম — ডিজাইনের লক্ষ্যই সহজ করা</td></tr>
      <tr><td class="hl">ভূমিকা</td><td>Proposer, Acceptor, Learner</td><td>Leader, Follower, Candidate</td></tr>
      <tr><td class="hl">Leader election</td><td>নেই (Multi-Paxos-এ যোগ করা হয়েছে)</td><td>মূল অংশ — heartbeat দিয়ে</td></tr>
      <tr><td class="hl">ব্যবহার</td><td>Google Chubby, Spanner</td><td>etcd (Kubernetes), Consul</td></tr>
    </table>
    <br>
    <p><strong>বাস্তব ব্যবহার:</strong> Kubernetes-এর মূল ডেটা স্টোর etcd Raft ব্যবহার করে। Google-এর Chubby ও Spanner Paxos ব্যবহার করে। ZooKeeper একটি Paxos ভ্যারিয়েন্ট (ZAB)।</p>
  </div>

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
      <text x="120" y="128" text-anchor="middle" font-size="7" fill="#9290a8">✓ ready</text>

      <circle cx="280" cy="108" r="14" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="280" y="111" text-anchor="middle" font-size="8" font-weight="700" fill="#52c41a">B</text>
      <text x="280" y="128" text-anchor="middle" font-size="7" fill="#9290a8">✓ ready</text>

      <circle cx="440" cy="108" r="14" fill="rgba(82,196,26,0.15)" stroke="#52c41a" stroke-width="1.5"/>
      <text x="440" y="111" text-anchor="middle" font-size="8" font-weight="700" fill="#52c41a">C</text>
      <text x="440" y="128" text-anchor="middle" font-size="7" fill="#9290a8">✓ ready</text>

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

  <div class="code-block">
    <h4>🔬 ডিস্ট্রিবিউটেড ট্রানজেকশন পদ্ধতি</h4>
    <table class="kv-table">
      <tr><th>পদ্ধতি</th><th>বছর</th><th>সুবিধা</th><th>অসুবিধা</th></tr>
      <tr><td class="hl">2PC</td><td>১৯৭৮</td><td>সহজ, atomic</td><td>Coordinator crash → block</td></tr>
      <tr><td class="hl">3PC</td><td>১৯৮১</td><td>Non-blocking (তাত্ত্বিকভাবে)</td><td>জটিল, বাস্তবে কম ব্যবহৃত</td></tr>
      <tr><td class="hl">Saga</td><td>১৯৮৭</td><td>No blocking, compensate</td><td>Eventual consistency</td></tr>
    </table>
    <br>
    <p><strong>Saga pattern:</strong> একটা বড় ট্রানজেকশনকে ছোট ছোট ধাপে ভাগ করো। প্রতিটা ধাপের একটা compensating action থাকে — যদি ভুল হয়, আগের ধাপ undo করো। উদাহরণ: বুকিং সিস্টেম — ফ্লাইট বুক → হোটেল বুক → গাড়ি বুক। গাড়ি বুক ব্যর্থ হলে → হোটেল ক্যানসেল → ফ্লাইট ক্যানসেল।</p>
    <p><strong>গ্রে-এর উত্তরাধিকার:</strong> জিম গ্রে (১৯৪৪-২০০৭, সমুদ্রে হারিয়ে যান) ডেটাবেস ট্রানজেকশনের জনক। ACID প্রোপার্টিজ, 2PC, locking protocols — সব তাঁর অবদান। Turing Award ১৯৯৮।</p>
  </div>

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
