// ════════════════════════════════════════
// গভীর জ্ঞানের সভা — DOORS 1-4
// Deep Learning: Attention → Feedback Loops
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: ATTENTION AS CURRENCY ══
doors.push({
  num:1, icon:"🧭", color:"#a78bfa", name:"বাতিকরের বুরুজ",
  subtitle:"The Lighthouse Keeper's Tower", tech:"Attention in the Information Age",
  spirit:"নূর — অন্ধকারে আলো",
  secret:"তথ্যের যুগে জ্ঞান দুর্লভ নয় — মনোযোগ দুর্লভ। যা শিখবে নয়, যা উপেক্ষা করবে — সেই নির্বাচনই আসল দক্ষতা।",
  recall:{
    q:"বাতিকর কেন সব জাহাজের ডাকে সাড়া দেন না, শুধু শুধু আলো ঘোরান?",
    qen:"Why doesn't the lighthouse keeper answer every ship's call, just rotates the light?",
    a:"কারণ আলো সবার জন্য, কিন্তু মনোযোগ সবার জন্য নয়। সব তথ্য গ্রহণ করলে মস্তিষ্ক ডুবে যায়। নির্বাচন = বাতিকরের ঘূর্ণন। যা গুরুত্বপূর্ণ তার উপর আলো — বাকি অন্ধকারে।",
    aen:"Because light is for all, but attention isn't. Absorbing all information drowns the mind. Selection = the keeper's rotation. Light on what matters — the rest stays dark."
  },
  story:`
<p class="scene-setting">প্রথম আসন। একটা উঁচু বুরুজ, নিচে কুয়াশায় ঢাকা সমুদ্র। চারদিকে জাহাজের হর্ন — কেউ সাহায্য চায়, কেউ পথ জিজ্ঞেস করে, কেউ শুধু চিৎকার করে। বাতিকর জাকারিয়া শান্তভাবে দাঁড়িয়ে আছেন — বয়স্ক, দাড়ি সাদা, হাতে কোনো যন্ত্র নেই। তিনি সব হর্নের সাড়া দিচ্ছেন না। তিনি শুধু আলো ঘুরিয়ে চলেছেন — এক দিক থেকে আরেক দিকে।</p>
<p class="scene-setting en">The first seat. A tall tower, below a fog-covered sea. Ship horns from all directions — some seek help, some ask directions, some just shout. Lighthouse keeper Zakariya stands calmly — elderly, white beard, no instruments. He doesn't respond to every horn. He simply rotates the light — from one direction to another.</p>

<div class="dialogue">তুমি শুনেছ "জ্ঞান পাওয়ার" — কিন্তু পাওয়া আর রাখা আলাদা। তথ্যের যুগে সবচেয়ে বড় সমস্যা জ্ঞানের অভাব নয় — তথ্যের আধিক্য। "Complete spectrum overload" — সব পাওয়া যায়, তাই সবচেয়ে দুর্লভ সম্পদ হয়ে দাঁড়িয়েছে দৃষ্টি আর বিচার।</div>
<div class="dialogue en">"You heard about 'acquiring knowledge' — but acquiring and keeping are different. In the information age, the biggest problem isn't lack of knowledge — it's excess of information. 'Complete spectrum overload' — everything is available, so the rarest resources have become attention and discernment."</div>

<div class="dialogue">ক্লেইভ থম্পসন একে বলেছেন "complete spectrum overload।" যখন সবকিছু পাওয়া যায়, তখন সবচেয়ে দুর্লভ সম্পদ হয়ে দাঁড়ায় দৃষ্টি (attention) এবং গুণগত বিচার (discernment)। শেখার সুপারপাওয়ার আসলে "কত দ্রুত শিখছেন" তা নয়, বরং "কী শিখবেন এবং কী উপেক্ষা করবেন" — সেই নির্বাচনই আসল দক্ষতা।</div>
<div class="dialogue en">"Clive Thompson called this 'complete spectrum overload.' When everything is available, attention and discernment become the rarest resources. The learning superpower isn't 'how fast you learn' — it's 'what to learn and what to ignore' — that selection is the real skill."</div>

<div class="callout info"><span class="co-icon">🌊</span><div><strong>যা "২০-ঘণ্টা" ভিডিওটি মিস করেছে:</strong> ১৯৯০-ে একটা পেপার খুঁজতে লাইব্রেরিতে যেতে হতো; আজ কয়েক সেকেন্ড। কিন্তু <em>তথ্যের আধিক্যই</em> এখন নতুন বাধা (Clive Thompson-এর "complete spectrum overload")। সুপারপাওয়ার "কত দ্রুত শিখছ" নয় — "কী শিখবে ও কী উপেক্ষা করবে"।</div></div>

<div class="diagram">
  <div class="diag-title">Attention Lighthouse — আলো সব দিকে নয়, নির্বাচিত দিকে</div>
  <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowAmberD1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#c4b5fd"/></marker>
    </defs>
    <!-- lighthouse beam cone (focused) -->
    <path d="M 280 110 L 420 60 L 420 160 Z" fill="rgba(196,181,253,.15)" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4,3"/>
    <!-- the dark/ignored directions (faint signals) -->
    ${[200,160,240,400,440,360].map((x,i)=>`<circle cx="${x}" cy="${i%2?70:150}" r="4" fill="#5e5c74" opacity=".5"/>`).join('')}
    <!-- lighthouse body -->
    <rect class="cell" x="245" y="85" width="40" height="50" rx="3" style="stroke:#a78bfa"/>
    <rect class="cell-hot" x="255" y="70" width="20" height="15" rx="3"/>
    <text class="lbl-sm" x="265" y="150" fill="#c4b5fd">বাতিকর (নির্বাচক)</text>
    <!-- focused target -->
    <rect class="cell-good" x="425" y="95" width="80" height="32" rx="5"/>
    <text class="lbl-sm" x="465" y="115" fill="#52c41a">গুরুত্বপূর্ণ</text>
    <text class="lbl-sm" x="465" y="145" fill="#5e5c74" style="font-size:9px">আলো = attention</text>
    <!-- ignored label -->
    <text class="lbl-sm" x="120" y="50" fill="#5e5c74">noise (উপেক্ষা)</text>
    <text class="lbl-sm" x="280" y="200" fill="#5e5c74">সব তথ্যে আলো দিলে মস্তিষ্ক ডোবে — নির্বাচনই আসল দক্ষতা</text>
  </svg>
  <div class="diag-cap">বাতিকর সব জাহাজের ডাকে সাড়া দেন না — ঘোরে আলো, থাকে নির্বাচন। তোমার attention-ও তেমন: নির্বাচন করো কোথায় আলো দেবে, বাকি অন্ধকারে থাকুক।</div>
</div>

<div class="code-block"># ── STEP 1: Attention as currency ──
# In the information age, ATTENTION is your most valuable resource.
# Not money. Not time. ATTENTION — because where attention goes,
# learning follows.

# The problem: ~74,000 Google searches per second.
# Your brain can only deeply process a TINY fraction.
# Most information is NOISE. Your job: FILTER.

# THREE FILTERS before consuming any content:

filter_questions = {
    "SOURCE": "Who is saying this? Why? What evidence?",
    "RELEVANCE": "Is this related to MY goals right now?",
    "DEPTH": "Is this surface-level, or does it go deep?",
}

for filter_name, question in filter_questions.items():
    print(f"  {filter_name}: {question}")

# THE RULE:
# Before reading/watching anything, ask:
# "Is this worth my attention?"
#   YES → go deep
#   NO → ignore it

# SILENCE IS A SKILL.
# Choosing what to IGNORE is as important as choosing what to learn.</div>

<div class="code-block"># ── STEP 2: Algorithm vs intentional selection ──
# WHO decides what you learn?

# ❌ ALGORITHM-DRIVEN (passive consumer):
# - Social media feed decides what you see
# - YouTube autoplay decides what's next
# - Recommendations decide your path
# → You're a passenger, not a driver

# ✅ INTENTIONAL SELECTION (active learner):
# - YOU choose what to study
# - YOU decide the curriculum
# - YOU set the goals
# → You're the driver

# SELF-CHECK: Are you consuming or learning?
indicators = {
    "CONSUMER": [
        "Scrolling without purpose",
        "Watching whatever appears",
        "Saving bookmarks but never reading",
        "Following trends, not goals",
        "Feeling informed but can't apply",
    ],
    "LEARNER": [
        "Searching for specific answers",
        "Following a planned curriculum",
        "Taking notes and reviewing",
        "Connecting new info to existing knowledge",
        "Can explain what you learned",
    ],
}

print("CONSUMER signs:")
for sign in indicators["CONSUMER"]:
    print(f"  ❌ {sign}")

print("\nLEARNER signs:")
for sign in indicators["LEARNER"]:
    print(f"  ✅ {sign}")

# Ask yourself: which list describes me RIGHT NOW?</div>

<div class="code-block"># ── STEP 3: The deep work environment ──
# To learn deeply, you need an environment that SUPPORTS focus.

# THE FOCUS PROTOCOL:
focus_protocol = {
    "before": [
        "Phone in another room (not silent — ABSENT)",
        "Close unnecessary tabs",
        "Clear your desk",
        "Set ONE specific goal for this session",
    ],
    "during": [
        "Single-task (no switching)",
        "25-minute Pomodoro sessions",
        "Note-taking by hand (better retention)",
        "If distracted, write the thought down, return",
    ],
    "after": [
        "Review what you learned (2 min summary)",
        "Note questions that came up",
        "Plan the next session",
        "Reward yourself (dopamine helps memory)",
    ],
}

for phase, actions in focus_protocol.items():
    print(f"\n{phase.upper()}:")
    for action in actions:
        print(f"  ☐ {action}")

# THE 23-MINUTE RULE:
# Research shows it takes ~23 minutes to fully refocus
# after a phone notification. Every interruption costs
# 23 minutes of deep learning.
# This is why a SINGLE notification can ruin a study session.</div>

<div class="code-block"># ── STEP 4: Quality over quantity ──
# LESS but DEEPER beats MORE but SHALLOW.

# THE LEARNING ECONOMY:
# Reading 1 book deeply &gt; skimming 10 books
# Building 1 project &gt; watching 100 tutorials
# Teaching 1 concept &gt; passively learning 10

# DEPTH INDICATORS — signs you're going deep:
depth_indicators = [
    "Can explain it in simple words",
    "Can give an original example",
    "Can identify edge cases",
    "Can connect it to other concepts",
    "Can critique its limitations",
    "Can apply it to a new problem",
]

print("DEPTH CHECK — can you:")
for indicator in depth_indicators:
    print(f"  ❓ {indicator}?")

# If you can't answer these → you're at surface level.
# Go DEEPER. Read the original source. Build something. Teach it.</div>

<div class="code-block"># ── STEP 5: The information diet ──
# Just as you are what you eat, you THINK what you consume.

# LOW-QUALITY information (junk food for the brain):
# - Social media scrolling
# - Clickbait articles
# - Shallow video summaries
# - Gossip, drama, outrage
# → Makes you feel busy, but you learn nothing

# HIGH-QUALITY information (nutritious for the brain):
# - Books (deep, structured knowledge)
# - Research papers (primary sources)
# - Long-form articles (depth)
# - Building projects (active learning)
# - Teaching others (deepest learning)

# YOUR INFORMATION AUDIT:
audit_questions = [
    "What did I learn yesterday that I can apply today?",
    "Did I choose what to read, or did an algorithm choose?",
    "Was I a consumer or a creator this week?",
    "Can I explain the last thing I 'learned' to someone?",
    "Am I reading at my level, or below it?",
]

print("WEEKLY INFORMATION AUDIT:")
for q in audit_questions:
    print(f"  ❓ {q}")

# Apply this: spend 1 hour on a BOOK instead of 1 hour scrolling.
# The ROI is 100x.</div>

<div class="code-block"># ── STEP 6: Building the selection habit ──
# Attention management is a SKILL you can practice.

# DAILY PRACTICE:
daily_practice = {
    "morning": "Set ONE learning goal for the day",
    "before_content": "Ask: 'Is this worth my attention?'",
    "during_learning": "Take notes in your own words",
    "evening": "Review: What did I actually learn?",
    "weekly": "Audit: Where did my attention go?",
}

# THE ATTENTION ECONOMY:
# Your attention is being FOUGHT OVER by:
# - Social media companies (engagement algorithms)
# - News outlets (clickbait)
# - Advertisers (interruption)
# - Notifications (dopamine hijacking)

# YOUR DEFENSE:
# 1. Turn off ALL non-essential notifications
# 2. Use website blockers during study time
# 3. Read BOOKS, not feeds
# 4. Choose your curriculum BEFORE opening a device
# 5. Practice saying "not now" to interruptions

# THE ULTIMATE QUESTION:
# "Twenty years from now, will this hour of scrolling matter?"
# If no → close the tab. Open a book.

# REMEMBER:
# Nur — light — is FOCUSED, not scattered.
# Your attention should be the same.
# Focus on what matters. Ignore the rest.
# This is the lighthouse keeper's art.</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">~৭৪,০০০</div><div class="sc-label">Google query/সেকেন্ড — তথ্যের আধিক্য</div></div>
<div class="stat-card"><div class="sc-num">~২৩ মিনিট</div><div class="sc-label">ফোন ডিস্ট্রাকশনের পর ফোকাসে ফেরার সময় (Mark)</div></div>
<div class="stat-card"><div class="sc-num">নির্বাচন</div><div class="sc-label">সবচেয়ে দুর্লভ দক্ষতা — কী গ্রহণ, কী উপেক্ষা</div></div>
</div>

<table class="kv-table"><tr><th>ফিল্টার</th><th>প্রশ্ন</th></tr>
<tr><td class="hl">Source verification</td><td>কে বলছে? কেন? প্রমাণ কী?</td></tr>
<tr><td class="hl">Relevance filter</td><td>এটা কি আমার লক্ষ্যের সাথে সম্পর্কিত?</td></tr>
<tr><td class="hl">Depth vs surface</td><td>এটা কি পৃষ্ঠতল, নাকি গভীর?</td></tr></table>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ তথ্যের ভোক্তা</div>সব পড়ো, সব দেখো, সব কোর্স করো — FOMO দিয়ে চলো। অ্যালগরিদম যা দেখায় তা দেখো। ফলাফল: বিশাল তথ্য, শূন্য গভীরতা। "জানি" মনে হয়, প্রয়োগ করতে গেলে ফাঁকা।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ মনোযোগের নির্বাচক</div>পড়ার আগে জিজ্ঞেস করো — "এটা কি সময়ের যোগ্য?" হ্যাঁ হলে গভীরে যাও, না হলে উপেক্ষা করো। কম পড়ো কিন্তু গভীর পড়ো। নীরবতাও একটা দক্ষতা।</div>
</div>

<div class="callout tip"><span class="co-icon">🧭</span><div><strong>নিয়ম:</strong> শেখার আগে জিজ্ঞেস করো — "এটা কি আমার সময়ের যোগ্য?" হ্যাঁ হলে যাও, না হলে উপেক্ষা করো। নীরবতাও একটা দক্ষতা।</div></div>

<div class="dialogue">নূর — আলো। কুরআনে আল্লাহ বলেন — "আল্লাহ আসমান ও জমিনের নূর।" (২৪:৩৫)। আলো সব জায়গায় নয় — নির্দিষ্ট দিকে। বাতিঘরও তেমনি — সব দিকে নয়, নির্দিষ্ট পথে। তোমার মনোযোগও নূর। সব তথ্যে নয় — যা গুরুত্বপূর্ণ, ঠিক সেখানে। অন্য সব অন্ধকারে থাকুক। এটাই বাতিকরের শিল্প — নির্বাচনের শিল্প।</div>
<div class="dialogue en">"Nur — light. Allah says — 'Allah is the Light of the heavens and earth.' (24:35). Light isn't everywhere — it's focused. The lighthouse too — not all directions, a specific path. Your attention is nur too. Not all information — only what matters, precisely there. Everything else stays dark. This is the lighthouse keeper's art — the art of selection."</div>`,
  senior:{
    title:"Attention Audit — প্রতিদিন নিজেকে প্রশ্ন করো",
    body:`<p><strong>তিনটি প্রশ্ন প্রতিদিন:</strong></p><p><strong>১.</strong> আজ আমি কত সময় কাজে লাগানো তথ্যে দিয়েছি, কত সময় অর্থহীন তথ্যে?</p><p><strong>২.</strong> আমি কি সক্রিয়ভাবে বেছে নিচ্ছি কী পড়ব, নাকি অ্যালগরিদম বেছে দিচ্ছে?</p><p><strong>৩.</strong> পড়ার আগে — "এটা কি আমার লক্ষ্যের সাথে সম্পর্কিত?" পড়ার পর — "এটা কি প্রয়োগ করব?"</p>`
  }
});

// ══ DOOR 2: THREE MILESTONES ══
doors.push({
  num:2, icon:"⚖️", color:"#5b9eff", name:"তিন মাইলফলকের স্তম্ভ",
  subtitle:"The Three Milestones", tech:"20h vs 1000h vs 10000h",
  spirit:"তিন স্তরের যাত্রা",
  secret:"২০ ঘণ্টা নিয়ম শুরু — কিন্তু গন্তব্য নয়। তিনটি স্তর: 20h (কাজ চলবে), 1000h (পেশাদার), 10000h (বিশ্বসেরা)। একটাকে অন্যটার জায়গায় বসালে বিপদ।",
  recall:{
    q:"মাইলফলক রক্ষক কেন তিনটি স্তম্ভ আলাদা রেখেছেন?",
    qen:"Why does the milestone guardian keep three pillars separate?",
    a:"কারণ প্রতিটি স্তম্ভ আলাদা লক্ষ্যের জন্য। ২০ ঘণ্টা = কাজ চালানো। ১০০০ ঘণ্টা = পেশাদার। ১০,০০০ ঘণ্টা = বিশ্বসেরা। একে অপরের প্রতিদ্বন্দ্বী নয় — ভিন্ন ভিন্ন লক্ষ্য। কোনটা চাও ঠিক করো।",
    aen:"Because each pillar serves a different goal. 20h = functional. 1000h = professional. 10000h = world-class. They're not rivals — different goals. Decide which you want."
  },
  story:`
<p class="scene-setting">দ্বিতীয় আসন। একটা পাহাড়ি পথ। তিনটি পাথরের স্তম্ভ — একে একে দাঁড়িয়ে, ক্রমশ উঁচু। প্রতিটির গায়ে লেখা। প্রথমটিতে: "২০ ঘণ্টা।" দ্বিতীয়টিতে: "১,০০০ ঘণ্টা।" তৃতীয়টিতে: "১০,০০০ ঘণ্টা।" মাইলফলক রক্ষক সাকিনা পাশে দাঁড়িয়ে আছেন — হাতে কাঠের লাঠি, চোখে প্রশান্তি।</p>
<p class="scene-setting en">The second seat. A mountain path. Three stone pillars — standing in sequence, progressively taller. Each inscribed. First: "20 hours." Second: "1,000 hours." Third: "10,000 hours." Milestone guardian Sakina stands beside — wooden staff in hand, peace in eyes.</p>

<div class="dialogue">বাতিকর বলেছিলেন — নির্বাচন করো। কিন্তু আমি বলি — নির্বাচন করার পর আসে যাত্রা। আর যাত্রার তিনটি স্তর আছে। ভিডিও বলেছে "২০ ঘণ্টা।" সত্য — কিন্তু অর্ধেক সত্য। ২০ ঘণ্টা শুরু, গন্তব্য নয়।</div>
<div class="dialogue en">"The lighthouse keeper said — select. But I say — after selection comes the journey. And the journey has three levels. The video said '20 hours.' True — but half-true. 20 hours is the start, not the destination."</div>

<table class="kv-table"><tr><th>মাইলফলক</th><th>স্তর</th><th>মানে</th></tr>
<tr><td class="hl">২০ ঘণ্টা</td><td>"Decent" — কাজ চালানো (Josh Kaufman)</td><td>শূন্য → functional; ⚠️ Dunning-Kruger ঝুঁকি</td></tr>
<tr><td class="hl">~১,০০০ ঘণ্টা</td><td>পেশাদার মান</td><td>টাকা কামানো যায়, জটিল সমস্যা সমাধানযোগ্য</td></tr>
<tr><td class="hl">১০,০০০ ঘণ্টা</td><td>World-class (Ericsson)</td><td>বিশ্বসেরা; deliberate practice লাগে</td></tr></table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> Macnamara et al. (2014) meta-analysis দেখায় deliberate practice শুধু ~১-২৬% variance ব্যাখ্যা করে (game-এ বেশি, profession-এ কম)। ১০,০০০ ঘণ্টা necessary কিন্তু sufficient নয় — talent, coaching, starting age, resources-ও গুরুত্বপূর্ণ। "ঘণ্টা গোনা" নয়, "কেমন অনুশীলন" সেটাই আসল।</div></div>
<div class="callout info"><span class="co-icon">🎯</span><div>এই তিনটি একে অপরের প্রতিদ্বন্দ্বী নয় — ভিন্ন লক্ষ্যের কথা বলে। "২০ ঘণ্টাই যথেষ্ট" ভাবলে তুমি মাঝামাঝি পর্যায়ে আটকে যাবে।</div></div>

<div class="diagram">
  <div class="diag-title">তিন স্তম্ভ — তিন লক্ষ্য, তিন সময়</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <line class="axis" x1="40" y1="190" x2="520" y2="190"/>
    <!-- three pillars of increasing height -->
    <rect class="cell-good" x="80" y="150" width="80" height="40" rx="4"/>
    <text class="lbl-sm" x="120" y="143" fill="#52c41a" style="font-weight:700">২০ ঘণ্টা</text>
    <text class="lbl-sm" x="120" y="172" fill="#e8e6f0">Decent</text>
    <text class="lbl-sm" x="120" y="208" fill="#5e5c74" style="font-size:9px">কাজ চালানো</text>

    <rect class="cell-cyan" x="240" y="100" width="80" height="90" rx="4"/>
    <text class="lbl-sm" x="280" y="93" fill="#3dd6c4" style="font-weight:700">~১,০০০ ঘণ্টা</text>
    <text class="lbl-sm" x="280" y="140" fill="#e8e6f0">Professional</text>
    <text class="lbl-sm" x="280" y="208" fill="#5e5c74" style="font-size:9px">পেশাদার মান</text>

    <rect class="cell-hot" x="400" y="45" width="80" height="145" rx="4"/>
    <text class="lbl-sm" x="440" y="38" fill="#ff6b35" style="font-weight:700">১০,০০০ ঘণ্টা</text>
    <text class="lbl-sm" x="440" y="115" fill="#e8e6f0">World-class</text>
    <text class="lbl-sm" x="440" y="208" fill="#5e5c74" style="font-size:9px">বিশ্বসেরা</text>

    <text class="lbl-sm" x="280" y="225" fill="#5e5c74">একে অপরের প্রতিদ্বন্দ্বী নয় — ভিন্ন লক্ষ্য। কোনটা চাও ঠিক করো।</text>
  </svg>
  <div class="diag-cap">প্রতিটি স্তম্ভ আলাদা লক্ষ্যের জন্য। ২০ ঘণ্টা = শূন্য থেকে functional। ১,০০০ = পেশাদার। ১০,০০০ = deliberate practice দিয়ে বিশ্বসেরা। একটাকে অন্যটার জায়গায় বসিও না।</div>
</div>

<div class="code-block"># ── STEP 1: What are the three milestones? ──
# Learning any skill has THREE distinct phases.
# Each phase has different methods and timeframes.

milestones = {
    "KNOW": {
        "timeframe": "Hours to days",
        "goal": "Understand the concept",
        "method": "Read, watch, listen",
        "danger": "Stopping here = illusion of knowledge",
    },
    "DO": {
        "timeframe": "Weeks to months",
        "goal": "Apply the concept",
        "method": "Build, code, practice",
        "danger": "Skipping practice = shallow understanding",
    },
    "TEACH": {
        "timeframe": "Months to years",
        "goal": "Explain to others",
        "method": "Write, mentor, present",
        "danger": "Teaching too early = confusion",
    },
}

for phase, info in milestones.items():
    print(f"\n{phase}:")
    for key, value in info.items():
        print(f"  {key}: {value}")

# MOST PEOPLE stop at KNOW. They watch a video and think they've learned.
# True learning requires DO (practice) and ideally TEACH (explain).</div>

<div class="code-block"># ── STEP 2: Phase 1 — KNOW (understand) ──
# The fastest phase. Goal: build a MENTAL MODEL.

know_methods = [
    "Watch ONE good tutorial (not ten average ones)",
    "Read the documentation (official, not blog summaries)",
    "Understand the WHY before the HOW",
    "Write key concepts in YOUR OWN WORDS",
    "Identify what you DON'T understand (questions)",
]

print("KNOW phase — how to build understanding:")
for method in know_methods:
    print(f"  ☐ {method}")

# TIME: Hours to days
# OUTPUT: A mental model + list of questions
# TRAP: Thinking understanding = mastery (it doesn't!)

# Example learning "decorators" in Python:
# KNOW phase:
# - Watch ONE tutorial on Python decorators
# - Read the official Python docs on decorators
# - Write: "A decorator is a function that wraps another function..."
# - Question: "Why do we need @functools.wraps?"
# → Now you're ready for DO phase</div>

<div class="code-block"># ── STEP 3: Phase 2 — DO (apply) ──
# The longest phase. Goal: BUILD MUSCLE MEMORY.

do_methods = [
    "Build a project using the concept",
    "Solve practice problems (LeetCode, HackerRank)",
    "Make MISTAKES and fix them (most valuable!)",
    "Modify existing code (don't just copy tutorials)",
    "Try to break things (edge cases, errors)",
]

print("\nDO phase — how to build skill:")
for method in do_methods:
    print(f"  ☐ {method}")

# TIME: Weeks to months
# OUTPUT: Working projects + muscle memory
# TRAP: Tutorial hell (watching without building)

# Example — practicing decorators:
# DO phase:
# - Write a @timer decorator from scratch
# - Write a @log decorator that logs to a file
# - Write a @retry decorator that retries on failure
# - Use decorators in a real project (LedgerPilot!)
# - Break it: what happens if you decorate a class method?</div>

<div class="code-block"># ── STEP 4: Phase 3 — TEACH (master) ──
# The deepest phase. Goal: DEEP MASTERY.

teach_methods = [
    "Write a blog post explaining the concept",
    "Explain it to a friend or colleague",
    "Create a tutorial or documentation",
    "Answer questions on StackOverflow/forums",
    "Present at a meetup or team meeting",
]

print("\nTEACH phase — how to achieve mastery:")
for method in teach_methods:
    print(f"  ☐ {method}")

# TIME: Months to years
# OUTPUT: Deep understanding + communication skill
# TRAP: Teaching too early (before DO phase)

# THE TEACHING TEST:
# If you can't explain it simply, you don't understand it well enough.
# — Einstein (attributed)

# Teaching reveals GAPS in your understanding.
# Every question from a student makes you think deeper.
# This is why professors know their field BEST.</div>

<div class="code-block"># ── STEP 5: Time expectations by skill ──
# Realistic timelines for different skills:

skill_timelines = {
    "Python basics": {"KNOW": "1 week", "DO": "1-3 months", "TEACH": "6 months"},
    "Web framework (Django/Flask)": {"KNOW": "2 weeks", "DO": "3-6 months", "TEACH": "1 year"},
    "Machine Learning basics": {"KNOW": "1 month", "DO": "6 months", "TEACH": "2 years"},
    "Deep Learning / Transformers": {"KNOW": "2 months", "DO": "1 year", "TEACH": "3+ years"},
    "System Design": {"KNOW": "1 month", "DO": "2 years", "TEACH": "5+ years"},
}

print("REALISTIC LEARNING TIMELINES:")
print(f"{'Skill':<35} {'KNOW':<12} {'DO':<15} {'TEACH':<12}")
print("-" * 74)
for skill, times in skill_timelines.items():
    print(f"{skill:<35} {times['KNOW']:<12} {times['DO']:<15} {times['TEACH']:<12}")

# KEY INSIGHT:
# KNOW is fast (you feel productive quickly)
# DO is slow (you feel like you're struggling)
# TEACH takes years (but gives deepest reward)

# The DIP:
# After KNOW, there's a "dip" — progress slows, frustration peaks.
# Most people quit here. Push through the dip. DO phase is where
# real learning happens.</div>

<div class="code-block"># ── STEP 6: Which phase are you in? ──
# Self-assessment for your current skills:

self_assessment = """
SKILL: Python (Django)
  KNOW: ✅ (I understand MVC, ORM, views, templates)
  DO:   ✅ (LedgerPilot uses Django — daily practice)
  TEACH: ⬜ (Never taught Django to others)
  → NEXT: Write a blog post about Django patterns I use

SKILL: Vue.js
  KNOW: ✅ (Understand components, props, reactivity)
  DO:   ✅ (Ipractus uses Vue — daily practice)
  TEACH: ⬜
  → NEXT: Create a reusable component library documentation

SKILL: Machine Learning
  KNOW: ✅ (Read books, watched courses)
  DO:   ⬜ (Built a few projects, not consistent)
  TEACH: ⬜
  → NEXT: Build 5 ML projects, then write about them
"""

print(self_assessment)

# YOUR TURN: Pick 3 skills. Rate yourself on each phase.
# Identify your NEXT step for each.

# THE MILESTONE FORMULA:
# mastery = KNOW (understand) + DO (practice) + TEACH (explain)
# Each phase multiplies, not adds.
# KNOW × DO × TEACH = true expertise
# If any phase is zero, mastery is zero.</div>

  ২০ ঘণ্টা (Josh Kaufman):
    ৪৫ মিনিট/দিন * ৩০ দিন। শূন্য → "কাজ চলবে"।
    ⚠️ Dunning-Kruger ঝুঁকি — মনে হবে "পারি", আসলে অজ্ঞ।

  ~১,০০০ ঘণ্টা:
    ৬ মাস–১ বছর focused। পেশাদার — টাকা কামানো যায়।
    জটিল সমস্যা সমাধানযোগ্য। feedback loop অপরিহার্য।

  ১০,০০০ ঘণ্টা (Ericsson → Gladwell):
    ৫–১০ বছর deliberate practice + coach + resources।
    ⚠️ Macnamara (২০১৪): deliberate practice শুধু ~১–২৬% variance
       ব্যাখ্যা করে। necessary, sufficient নয়। "ঘণ্টা গোনা" নয় —
       "কেমন অনুশীলন" সেটাই আসল।</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">২০h</div><div class="sc-label">শূন্য → functional (Kaufman)</div></div>
<div class="stat-card"><div class="sc-num">~১,০০০h</div><div class="sc-label">পেশাদার মান</div></div>
<div class="stat-card"><div class="sc-num">১০,০০০h</div><div class="sc-label">বিশ্বসেরা (Ericsson)</div></div>
<div class="stat-card"><div class="sc-num">১–২৬%</div><div class="sc-label">deliberate practice-র variance (Macnamara ২০১৪)</div></div>
</div>

<div class="dialogue">জশ কফম্যান — "The First 20 Hours" বইয়ের লেখক। তিনি বলেছেন যেকোনো দক্ষতার প্রথম ২০ ঘণ্টা সবচেয়ে গুরুত্বপূর্ণ — যেখানে তুমি শূন্য থেকে কিছু করতে পারো। কিন্তু ১০,০০০ ঘণ্টার ধারণাটি অ্যান্ডার্স এরিকসনের গবেষণা থেকে — যা ম্যালকম গ্ল্যাডওয়েল "Outliers"-এ জনপ্রিয় করেছিলেন। তবে এটি কেবল world-class mastery বা বিশ্বসেরা পর্যায়ের জন্য। এই দুটি নিয়ম একে অপরের প্রতিদ্বন্দ্বী নয় — তারা ভিন্ন ভিন্ন লক্ষ্যের কথা বলে।</div>
<div class="dialogue en">"Josh Kaufman — author of 'The First 20 Hours.' He said the first 20 hours of any skill are most important — where you go from zero to functional. But the 10,000-hour concept comes from Anders Ericsson's research — popularized by Malcolm Gladwell in 'Outliers.' But that's for world-class mastery only. These two rules aren't rivals — they speak to different goals."</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">⚠️ বিপজ্জনক অন্তর্নিহিত বার্তা</div>২০ ঘণ্টাই যথেষ্ট মনে করলে তুমি মাঝামাঝি পর্যায়ে আটকে যাবে। <strong>Dunning-Kruger effect</strong> — ২০ ঘণ্টা পরে তুমি প্রায়ই তোমার অদক্ষতার পরিমাণ বুঝতেই পারবে না, কারণ তুমি এতটাই শিখেছ যে নিজেকে চমৎকার মনে হবে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক মানসিকতা</div>২০ ঘণ্টা = শুরু। এর পরে আসে প্রকৃত যাত্রা। লক্ষ্য স্পষ্ট করো: কাজ চালানো? পেশাদার? বিশ্বসেরা? প্রতিটির জন্য সময় ও পদ্ধতি আলাদা। স্তম্ভ তিনটি — তিন লক্ষ্য। একটাকে অন্যটার জায়গায় বসিও না।</div>
</div>`,
  senior:{
    title:"নিজের লক্ষ্য নির্ধারণ করো",
    body:`<p>যেকোনো নতুন দক্ষতা শেখার আগে জিজ্ঞেস করো:</p><p><strong>"আমি কোন স্তরে যেতে চাই?"</strong></p><p>• <strong>কাজ চালানো:</strong> ২০ ঘণ্টা, ৪৫ মিনিট/দিন * ৩০ দিন। যথেষ্ট।</p><p>• <strong>পেশাদার:</strong> ১,০০০ ঘণ্টা লাগবে — ৬ মাস থেকে ১ বছর ফোকাসড অনুশীলন।</p><p>• <strong>বিশ্বসেরা:</strong> ১০,০০০ ঘণ্টা — ৫-১০ বছর deliberate practice, কোচ সহ।</p><p>লক্ষ্য অনুযায়ী সময় ও পদ্ধতি নির্ধারণ করো। অস্পষ্ট লক্ষ্য = অসম্পূর্ণ যাত্রা।</p>`
  }
});

// ══ DOOR 3: ILLUSION OF COMPETENCE ══
doors.push({
  num:3, icon:"🪞", color:"#f06292", name:"বরফ-ডুবুরির হ্রদ",
  subtitle:"The Ice Diver's Lake", tech:"Dunning-Kruger & Illusion of Competence",
  spirit:"জ্ঞানের অহংকার — সবচেয়ে বড় বাধা",
  secret:"২০ ঘণ্টা পরে তুমি নিজেকে চমৎকার মনে করবে — ঠিক যখন তুমি সবচেয়ে বেশি অজ্ঞ। Dunning-Kruger effect। বিভ্রম ভাঙতে গভীরে যাও।",
  recall:{
    q:"বরফ-ডুবুরি কেন পৃষ্ঠের নিচে যান, উপরে থাকেন না?",
    qen:"Why does the ice diver go beneath the surface, not stay on top?",
    a:"কারণ পৃষ্ঠে সব স্পষ্ট মনে হয় — কিন্তু গভীরে আসল সত্য। ২০ ঘণ্টা = পৃষ্ঠ। নিজেকে চমৎকার মনে হয় — Dunning-Kruger। গভীরে গেলে বুঝবে কত কম জানো। সেই বিনয়ই আসল শেখার শুরু।",
    aen:"Because the surface seems clear — but the truth is deeper. 20 hours = surface. You feel excellent — Dunning-Kruger. Going deeper reveals how little you know. That humility is the real start of learning."
  },
  story:`
<p class="scene-setting">তৃতীয় আসন। একটা হিমশীতল হ্রদ। বরফে ঢাকা পৃষ্ঠ। কিন্তু একটা গর্ত কাটা — নীল জল দৃশ্যমান। ডুবুরি আয়েশা প্রস্তুত হচ্ছেন — শীতের পোশাক, অক্সিজেনের ট্যাঙ্ক, চোখে দৃঢ়তা। "কেন গরম জলে নয়?" তুমি জিজ্ঞেস করলে। তিনি বললেন — "কারণ উপরে সব সহজ মনে হয়। নিচে আসল সত্য।"</p>
<p class="scene-setting en">The third seat. A freezing lake. Ice-covered surface. But a hole is cut — blue water visible. Diver Ayesha prepares — cold-water suit, oxygen tank, resolve in eyes. "Why not warm water?" you asked. She said — "Because everything seems easy on top. The real truth is below."</p>

<div class="dialogue">মাইলফলক রক্ষক বলেছিলেন — তিন স্তরের যাত্রা। কিন্তু আমি বলি — যাত্রার প্রথম স্তরেই সবচেয়ে বড় বিপদ। বিপদটির নাম — Dunning-Kruger effect। ২০ ঘণ্টা পরে তুমি নিজেকে চমৎকার মনে করবে। ঠিক যখন তুমি সবচেয়ে বেশি অজ্ঞ।</div>
<div class="dialogue en">"The milestone guardian said — three levels of journey. But I say — the first level holds the biggest danger. The danger is called the Dunning-Kruger effect. After 20 hours you'll feel excellent. Right when you're most ignorant."</div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">~২০ ঘণ্টা</div><div class="tl-title">⛰️ "আমি পারি!"</div><div class="tl-body">উচ্চ আত্মবিশ্বাস, কম জ্ঞান — বিভ্রমের চূড়া।</div></div>
<div class="tl-step"><div class="tl-when">গভীরে যেতে শুরু</div><div class="tl-title">😰 Valley of Despair</div><div class="tl-body">"এত কিছু জানি না" — আত্মবিশ্বাস কমে, প্রকৃত জ্ঞান শুরু।</div></div>
<div class="tl-step"><div class="tl-when">১০০০+ ঘণ্টা</div><div class="tl-title">🧘 "সত্যিই জানি"</div><div class="tl-body">আত্মবিশ্বাস ফেরে — কিন্তু এবার বিনয়ী।</div></div>
</div>
<div class="callout warn"><span class="co-icon">🪞</span><div><strong>Illusion of competence:</strong> পড়ে মনে হয় "জানি" (আসলে মুখস্থ) · কোর্স শেষে মনে হয় "পারি" (কিন্তু প্রয়োগ?) · পরীক্ষায় ভালো করে মনে হয় "বিশেষজ্ঞ" (কিন্তু বাস্তবে?)।</div></div>
<div class="callout tip"><span class="co-icon">🔨</span><div><strong>বিভ্রম ভাঙার উপায়:</strong> নিজেকে পরীক্ষা করো (active recall) · প্রয়োগ করো (প্রজেক্ট বানাও) · অন্যকে শেখাও (গ্যাপ ধরা পড়বে)।</div></div>
<div class="callout info"><span class="co-icon">📖</span><div><strong>সতর্ক পাঠ:</strong> উপরের U-curve একটা popular visualization। Dunning-Kruger-এর আসল ফলাফল (1999) — নিচু স্তরের ব্যক্তিরা নিজের র‍্যাঙ্ক সবচেয়ে বেশি overestimate করে। আত্মবিশ্বাসের নির্দিষ্ট U-আকৃতি ধ্রুব সত্য নয়, তবে "নতুন শিক্ষার্থী নিজেকে বেশি পারদর্শী ভাবে" — এই মূল পর্যবেক্ষণ সঠিক ও প্রাসঙ্গিক।</div></div>

<div class="diagram">
  <div class="diag-title">Dunning-Kruger — আত্মবিশ্বাস বনাম প্রকৃত জ্ঞান</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <line class="axis" x1="50" y1="190" x2="520" y2="190"/>
    <line class="axis" x1="50" y1="30" x2="50" y2="190"/>
    <text class="lbl-sm" x="285" y="215" fill="#9290a8">অভিজ্ঞতা / ঘণ্টা →</text>
    <text class="lbl-sm" x="20" y="110" fill="#9290a8" transform="rotate(-90 20,110)">আত্মবিশ্বাস →</text>
    <!-- confidence curve: peak early, valley, slow rise -->
    <path d="M 50 150 Q 120 40 180 60 Q 230 160 300 150 Q 400 110 510 70" fill="none" stroke="#a78bfa" stroke-width="2.5"/>
    <!-- competence curve: steady rise -->
    <path d="M 50 180 Q 200 150 350 110 T 510 55" fill="none" stroke="#52c41a" stroke-width="2" stroke-dasharray="5,4"/>
    <!-- peak of mount stupid -->
    <circle cx="120" cy="55" r="5" class="node-hot"/>
    <text class="lbl-hot" x="120" y="40">"পারি!"</text>
    <text class="lbl-sm" x="120" y="170" fill="#ff6b35" style="font-size:9px">~২০ ঘণ্টা</text>
    <!-- valley of despair -->
    <circle cx="240" cy="155" r="5" class="node-hot"/>
    <text class="lbl-hot" x="255" y="172">Valley</text>
    <text class="lbl-sm" x="240" y="125" fill="#9290a8" style="font-size:9px">"কিছুই জানি না"</text>
    <!-- slope of enlightenment -->
    <circle cx="420" cy="95" r="5" class="node-cyan"/>
    <text class="lbl-cyan" x="445" y="92">বিনয়ী জ্ঞান</text>
    <text class="lbl-sm" x="285" y="225" fill="#5e5c74">বেগুনি = আত্মবিশ্বাস, সবুজ (ড্যাশ) = প্রকৃত দক্ষতা — দুটো একই নয়</text>
  </svg>
  <div class="diag-cap">~২০ ঘণ্টায় আত্মবিশ্বাস চূড়ায়, কিন্তু প্রকৃত দক্ষতা এখনও কম। গভীরে গেলে আত্মবিশ্বাস পড়ে (Valley) — সেখানেই আসল শেখা শুরু। বিনয়ই চাবি।</div>
</div>

<div class="code-block">Illusion of Competence — ৩ লক্ষণ ও ৩ প্রতিকার:

  লক্ষণ (তুমি বিভ্রমে আছ):
    • পড়ে মনে হয় "জানি" (আসলে মুখস্থ)
    • কোর্স শেষে "পারি" (কিন্তু প্রয়োগ?)
    • পরীক্ষায় ভালো = "বিশেষজ্ঞ" (কিন্তু বাস্তবে?)

  প্রতিকার (বিভ্রম ভাঙো):
    ১. Active recall — বই বন্ধ করে মনে করো / খালি পাতায় লেখো
    ২. Apply — প্রজেক্ট বানাও, প্রয়োগ করো
    ৩. Teach — অন্যকে শেখাও (Feynman) — gap ধরা পড়বে

  নিয়ম: যদি ১২ বছরের শিশুকে বোঝাতে না পারো —
         তুমি বুঝিনি, শুধু চিনেছ।</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৯৯৯</div><div class="sc-label">Dunning-Kruger মূল পেপার</div></div>
<div class="stat-card"><div class="sc-num">bottom quartile</div><div class="sc-label">নিজের র‍্যাঙ্ক সবচেয়ে বেশি overestimate করে</div></div>
<div class="stat-card"><div class="sc-num">৩ প্রতিকার</div><div class="sc-label">recall · apply · teach</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">⚠️ বিভ্রমের চূড়া</div>"আমি পারি!" — ২০ ঘণ্টা পর আত্মবিশ্বাস চূড়ায়, কিন্তু প্রকৃত জ্ঞান সবচেয়ে কম। পড়ে মনে হয় "জানি" (মুখস্থ মাত্র), পরীক্ষায় ভালো হলে "বিশেষজ্ঞ"। এই বিভ্রমে আটকে গেলে আর বাড়বে না — কারণ "আমি জানি" বললে শেখা বন্ধ।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Valley-র বিনয়</div>"কত কম জানি!" — গভীরে গেলে আত্মবিশ্বাস পড়ে, সেখানেই আসল শেখা শুরু। এই বিনয় ("আমি এখনও শিখছি") হলো প্রকৃত শেখার চাবি। নিজেকে পরীক্ষা করো (recall), প্রয়োগ করো, অন্যকে শেখাও — বিভ্রম ভাঙবে।</div>
</div>

<div class="dialogue">কুরআনে আল্লাহ বলেন — "তিনি তোমাদেরকে মাটি থেকে, তারপর শুক্রবিন্দু থেকে, তারপর জমাট রক্ত থেকে সৃষ্টি করেছেন।" সৃষ্টির পর্যায় ক্রমিক — প্রতিটি স্তরে আগের স্তরের অজ্ঞতা ধরা পড়ে। শেখাও তেমনি — প্রতিটি স্তরে তুমি বুঝবে আগের স্তরে কত কম জানতে। এই বিনয় — এই "আমি জানি না" — সেটাই গভীর শেখার শুরু। যে বলে "আমি জানি," সে আটকে যায়। যে বলে "আমি এখনও শিখছি," সে বাড়ে।</div>
<div class="dialogue en">"Allah says — 'He created you from dust, then from a drop, then from a clot.' Creation is staged — at each level, the previous level's ignorance is revealed. Learning too — at each level you realize how little you knew before. This humility — this 'I don't know yet' — is the start of deep learning. One who says 'I know' gets stuck. One who says 'I'm still learning' grows."</div>`,
  senior:{
    title:"বিভ্রম চেক — প্রতিদিন নিজেকে চ্যালেঞ্জ করো",
    body:`<p><strong>প্রতিটা শেখার পর নিজেকে জিজ্ঞেস করো:</strong></p><p><strong>১.</strong> "আমি কি সত্যিই এটা বুঝেছি, নাকি শুধু চিনি?"</p><p><strong>২.</strong> "আমি কি এটা কাগজে খালি পেশায় লিখতে পারব?"</p><p><strong>৩.</strong> "আমি কি এটা ১২ বছরের শিশুকে বোঝাতে পারব?"</p><p>যদি "না" হয় — তুমি বিভ্রমে আছ। ফিরে যাও, গভীরে যাও। বিনয় = প্রকৃত শেখার চাবি।</p>`
  }
});

// ══ DOOR 4: FEEDBACK LOOP ══
doors.push({
  num:4, icon:"🔁", color:"#52c41a", name:"আয়না-কারিগরের কর্মশালা",
  subtitle:"The Mirror-Maker's Workshop", tech:"The Feedback Loop",
  spirit:"সাক্ষীসহ আত্ম-হিসাব",
  secret:"ফিডব্যাক ছাড়া ২০ ঘণ্টা প্র্যাকটিস = ভুল পদ্ধতি ২০ ঘণ্টা মজবুত করা। প্রতিটা পুনরাবৃত্তিতে জানতে হবে — কোথায় ভুল করছি। নিছক পুনরাবৃত্তি = শূন্য।",
  recall:{
    q:"আয়না-কারিগর কেন কাজ শেষে প্রতিটি আয়না নিজে দেখেন?",
    qen:"Why does the mirror-maker inspect each mirror himself after making it?",
    a:"কারণ নিজের কাজ নিজে না দেখলে ত্রুটি ধরা যায় না। ফিডব্যাক ছাড়া প্র্যাকটিস = অন্ধ প্র্যাকটিস। প্রতিটা পুনরাবৃত্তিতে জানতে হবে কী ভুল, কেন ভুল, কীভাবে ঠিক করবে।",
    aen:"Because not inspecting your own work means missing flaws. Practice without feedback = blind practice. Each repetition must reveal what's wrong, why, and how to fix it."
  },
  story:`
<p class="scene-setting">চতুর্থ আসন। একটা ছোট কর্মশালা। কাঁচের টুকরো, পারদ, পালিশ করার কাপড়। আয়না-কারিগর দাউদ প্রতিটি আয়না বানানোর পর সেটি নিজে দেখেন — হাতে ম্যাগনিফাইং গ্লাস, চোখ কাছে। একটা আয়নায় সামান্য বাঁকা প্রতিফলন দেখলেন। "এটা বাতিল," তিনি বললেন। পাশের ছেলে বলল — "কিন্তু দেখে তো ঠিক আছে!" দাউদ বললেন — "তোমার চোখ বলছে, আমার চোখ জানে।"</p>
<p class="scene-setting en">The fourth seat. A small workshop. Glass fragments, mercury, polishing cloth. Mirror-maker Dawud inspects each mirror after making it — magnifying glass in hand, eye close. He spots a slightly warped reflection. "Reject," he said. The apprentice said — "But it looks fine!" Dawud said — "Your eyes say, mine know."</p>

<div class="dialogue">বরফ-ডুবুরি বলেছিলেন — গভীরে যাও। কিন্তু আমি বলি — গভীরে যাওয়ার পরে আসে প্রতিক্রিয়া। তুমি যা করছ তা ঠিক আছে কি না — কীভাবে জানবে? ফিডব্যাক ছাড়া? অসম্ভব। ভিডিও এখানে সবচেয়ে বড় জিনিস মিস করেছে — পঞ্চম ধাপ: ফিডব্যাক লুপ।</div>
<div class="dialogue en">"The ice diver said — go deeper. But I say — after going deeper comes reaction. How do you know what you're doing is right? Without feedback? Impossible. The video missed the most important thing here — the fifth step: the feedback loop."</div>

<div class="callout warn"><span class="co-icon">🔁</span><div><strong>ভিডিওর ৪ ধাপ:</strong> ① লক্ষ্য নির্ধারণ ② অংশে ভাগ ③ distraction দূর ④ ২০ ঘণ্টা practice — কিন্তু <strong>৫ম ধাপ মিসিং: feedback loop</strong>, যা ছাড়া বাকি চারটে অর্থহীন। নিছক পুনরাবৃত্তি = ভুল পদ্ধতি মজবুত করা। feedback সহ: practice → ভুল খোঁজো → কেন বুঝো → ঠিক করো → আবার practice → উন্নতি।</div></div>
<table class="kv-table"><tr><th>Feedback-এর উৎস</th><th>উদাহরণ</th></tr>
<tr><td class="hl">স্বয়ংক্রিয়</td><td>test, linter, error message</td></tr>
<tr><td class="hl">AI (২০২৪+)</td><td>Claude/ChatGPT-কে কাজ দেখাও → instant critique; Feynman partner (⚠️ AI ভুল/hallucinate করতে পারে — verify করো)</td></tr>
<tr><td class="hl">মানুষ</td><td>mentor, peer review, teacher</td></tr>
<tr><td class="hl">স্বয়ং</td><td>নিজের কাজ রিভিউ, video replay</td></tr></table>
<div class="callout tip"><span class="co-icon">✔️</span><div><strong>নিয়ম:</strong> প্রতিটা practice session-এ অন্তত একটা feedback উৎস থাকতেই হবে।</div></div>

<div class="diagram">
  <div class="diag-title">Feedback Loop — প্র্যাকটিস চক্র যা ছাড়া অগ্রগতি অসম্ভব</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowLeafD4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#52c41a"/></marker>
    </defs>
    <!-- 4 nodes in a cycle -->
    ${[ ['Practice',140,70], ['ভুল খোঁজো',380,70], ['কেন বুঝো',380,160], ['ঠিক করো',140,160] ].map(s=>`<rect class="cell-good" x="${s[1]-65}" y="${s[2]-20}" width="130" height="40" rx="8"/><text class="lbl-sm" x="${s[1]}" y="${s[2]+5}" fill="#52c41a" style="font-weight:700">${s[0]}</text>`).join('')}
    <!-- cycle arrows -->
    <line class="edge-cyan" x1="205" y1="70" x2="310" y2="70" marker-end="url(#arrowLeafD4)"/>
    <line class="edge-cyan" x1="380" y1="92" x2="380" y2="138" marker-end="url(#arrowLeafD4)"/>
    <line class="edge-cyan" x1="315" y1="160" x2="210" y2="160" marker-end="url(#arrowLeafD4)"/>
    <line class="edge-cyan" x1="140" y1="138" x2="140" y2="92" marker-end="url(#arrowLeafD4)"/>
    <!-- center label -->
    <text class="lbl-sm" x="260" y="118" fill="#c4b5fd">→ উন্নতি →</text>
    <text class="lbl-sm" x="260" y="208" fill="#5e5c74">নিছক পুনরাবৃত্তি = ভুল পদ্ধতি মজবুত করা। feedback সহ চক্র = প্রকৃত উন্নতি।</text>
  </svg>
  <div class="diag-cap">প্রতিটা practice session-এ এই চক্র ঘুরতে হবে। শুধু practice নয় — ভুল ধরা, কারণ বোঝা, ঠিক করা, আবার practice। ছাড়া এটা অন্ধ পুনরাবৃত্তি।</div>
</div>

<div class="code-block">Feedback Loop — ৫ম ধাপ যা ভিডিও মিস করেছে:

  ভিডিওর ৪ ধাপ (অসম্পূর্ণ):
    ① লক্ষ্য নির্ধারণ  ② অংশে ভাগ
    ③ distraction দূর   ④ ২০ ঘণ্টা practice
    ❌ ৫ম ধাপ মিসিং: FEEDBACK LOOP

  সঠিক চক্র (প্রতিটা session-এ):
    practice → ভুল খোঁজো → কেন বুঝো → ঠিক করো → আবার practice
    ⚠️ ছাড়া এটা: ভুল পদ্ধতি ২০ ঘণ্টা মজবুত করা = শূন্য।

  Feedback-এর ৪ উৎস:
    স্বয়ংক্রিয় (test/linter) · AI (Claude/ChatGPT, verify করো)
    মানুষ (mentor/peer) · স্বয়ং (২৪ ঘণ্টা পর নিজের কাজ দেখো)</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ অন্ধ প্র্যাকটিস</div>২০ ঘণ্টা practice — কিন্তু কোন feedback নেই। একই ভুল বারবার, সেটাই মজবুত হয়। মনে হয় "অনেক কাজ করেছি" — কিন্তু উন্নতি নেই। ঘণ্টা গোনা, পদ্ধতি নয়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ প্রতিক্রিয়াশীল প্র্যাকটিস</div>প্রতিটা session-এ অন্তত একটা feedback উৎস। practice → ভুল ধরা → কেন বোঝা → ঠিক করা → আবার। এখানেই deliberate practice শুরু — প্রতিটা পুনরাবৃত্তি তোমাকে ভালো করে।</div>
</div>

<div class="dialogue">কুরআনে আল্লাহ বলেন — "নিশ্চয় আল্লাহ তাদের কাজ দেখেন যারা সৎকর্ম করে।" প্রতিটি কাজ পর্যবেক্ষিত — ফিডব্যাক ছাড়া কিছু নয়। মুহাসাবা — নিজের কাজ যাচাই করা। উমর (রা) বলেছেন — "নিজেকে বিচার করো আগে, তোমাকে বিচার করা হবে।" প্রতিটা practice session-এ নিজেকে বিচার করো — কী ভালো হলো, কী খারাপ, কী বদলাবে। এটাই ফিডব্যাক লুপ।</div>
<div class="dialogue en">"Allah says — 'Indeed Allah sees the work of those who do good.' Every work is observed — nothing is without feedback. Muhasabah — auditing your own work. Umar (RA) said — 'Judge yourselves before you are judged.' In every practice session, judge yourself — what was good, what was bad, what to change. This is the feedback loop."</div>`,
  senior:{
    title:"Feedback খোঁজো — প্রতিটা অনুশীলনে",
    body:`<p><strong>প্রতিটা practice session-এ:</strong></p><p><strong>১. স্বয়ংক্রিয় ফিডব্যাক:</strong> কোড? টেস্ট রান করো। প্রবলেম? সলিউশন মেলাও। লেখা? Grammarly।</p><p><strong>২. মানবিক ফিডব্যাক:</strong> mentor, সিনিয়র কলিগ, study group। "এটা দেখে বলো — কী ভুল?"</p><p><strong>৩. স্ব-ফিডব্যাক:</strong> ২৪ ঘণ্টা পর নিজের কাজ দেখো — "এটা কি সত্যিই ভালো?" সময় দিলে ত্রুটি স্পষ্ট হয়।</p>`
  }
});
