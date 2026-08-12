// ════════════════════════════════════════
// Book 32 · The Brain Mechanic's Codex
// Doors 1-5 · Phase 1: Instant Wins
// ════════════════════════════════════════
const doors = [];

doors.push({
  num: 1,
  icon: "🧵",
  color: "#a78bfa",
  name: "একটা সুতোর শুরু",
  subtitle: "The First Thread",
  tech: "২-মিনিট নিয়ম · Tiny Habits & Micro-Starts",
  spirit: "তাদাররুজ — ধীরে ধীরে অবতরণ, gradualness",
  secret: "বিশাল লক্ষ্য নয় — অসম্ভব ছোট শুরু। মস্তিষ্ক ভয় পায় বড় কাজ দেখলে; ছোট কাজ দেখলে হাসে।",
  recall: {
    q: "২-মিনিট নিয়ম কী এবং কেন কাজ করে?",
    qen: "What is the 2-minute rule and why does it work?",
    a: "নতুন অভ্যাস এমন ছোট হবে যে ২ মিনিটের কম সময় লাগে। কাজ করে কারণ মস্তিষ্কের প্রতিরোধ-প্রবণতা (resistance threshold) বাইপাস করে — কাজটা এত ছোট যে মস্তিষ্ক 'পরে করব' বলতে পারে না।",
    aen: "A new habit should take less than 2 minutes. It works because it bypasses the brain's resistance threshold — the task is so small the brain cannot say 'later.'"
  },
  story: `<p class="scene-setting">তোমার হাতে একটা বই। তোমার পড়তে হবে। মাথায় একটা গলা আছে — পুরো অধ্যায়টা পড়তে হবে, মানে অন্তত ৪০ পৃষ্ঠা, মানে দুই ঘণ্টা। মস্তিষ্ক এই সংখ্যাটা দেখেই বলে — <em>একটু পরে। ফোনটা দেখি।</em> তুমি বইটা রাখো। পড়া হলো না।</p>
  <p class="scene-setting en">You have a book. You need to study. Your brain calculates: 40 pages, two hours. It says — <em>later. Check the phone first.</em> You put the book down. Nothing happens.</p>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুল প্রশ্ন:</strong> 'আমি কীভাবে পড়ার ইচ্ছা জাগাবো?' <strong>সঠিক প্রশ্ন:</strong> 'আমি কীভাবে শুরুটা এত ছোট করবো যে মস্তিষ্ক প্রতিরোধ করতেই পারে না?'</div></div>
  <p class="scene-setting">এখন শোনো <strong>কারিগর বখতিয়ারের</strong> গল্প। বখতিয়ারের বাঁ হাতের বুড়ো আঙুলে একটা স্থায়ী খাঁজ — কয়েক দশক তাঁতে শাটল ধরার দাগ। সে দেশের সেরা রেশমি কাপড় বোনে।</p>
  <p class="scene-setting en">Now hear the story of <strong>Bakhtiyar the Weaver.</strong> His left thumb bears a permanent groove — the mark of decades gripping the loom's shuttle. He weaves the finest silk in the land.</p>
  <div class="dialogue">
    <p><strong>বখতিয়ার (তরুণ বয়সে):</strong> আমি এক সপ্তাহে রাজার জন্য পুরো কার্পেট বুনবো! দিনরাত কাজ করবো!</p>
    <p><strong>ফল:</strong> তিন দিন পর হাত ফুলে গেল। সুতো জট পাকাল। কার্পেট নষ্ট। রাজা রাগ করল। বখতিয়ার হারাল।</p>
    <p><strong>ওস্তাদ শামসু:</strong> বোকা ছেলে! একটা সুতো। শুধু একটা। আজ একটা বুনবি। কাল আরেকটা। এক বছর পর তুই কার্পেট পাবি — কিন্তু প্রতিটা সুতো সেই কার্পেটের অংশ।</p>
    <p><strong>বখতিয়ার (শিখেছে):</strong> আমি আর কার্পেট বোনি না। আমি শুধু একটা সুতো বোনি। আর সেটাই কার্পেট হয়ে যায়।</p>
  </div>
  <div class="dialogue en">
    <p><strong>Young Bakhtiyar:</strong> I will weave the entire carpet for the king in one week!</p>
    <p><strong>Result:</strong> Three days later — swollen hands, tangled threads, ruined carpet. The king was furious.</p>
    <p><strong>Master Shamsu:</strong> Foolish boy! One thread. Just one. Today one thread, tomorrow another. A year from now you will have a carpet — but each thread IS the carpet.</p>
  </div>
  <p class="scene-setting">তোমার মস্তিষ্কও বখতিয়ারের তাঁত। তুমি যখন 'পুরো অধ্যায় পড়বো' বলো, তুমি এক সপ্তাহে কার্পেট বোনার চেষ্টা করছো। মস্তিষ্ক ভেঙে পড়ে। কিন্তু যখন বলো — 'শুধু বইটা খুলবো, একটা বাক্য পড়বো' — সেটা একটা সুতো। মস্তিষ্ক হাসে, বলে — 'আরে, এতো সহজ!' — আর শুরু করে দেয়।</p>
  <div class="code-block"># ── STEP 1: The 2-minute habit protocol ──
# How to build habits that actually stick.

# BEHAVIOR = MOTIVATION × ABILITY × PROMPT (BJ Fogg, Stanford)
# B = MAP
# → Make it TINY (increase ability)
# → Anchor it to existing habit (add prompt)
# → Change identity (not "I want to read" but "I am a reader")

# THE 2-MINUTE RULE (James Clear, Atomic Habits):
# Shrink ANY goal until it takes 2 minutes or less:

habits = {
    # Big goal → 2-minute version:
    "Read a chapter": "Open the book, read 1 page",
    "Exercise 1 hour": "Do 2 pushups",
    "Write an essay": "Write 1 sentence",
    "Meditate 30 min": "Take 3 deep breaths",
    "Learn Python": "Open your IDE, type print('hello')",
    "Study for exam": "Open textbook, read 1 paragraph",
}

print("THE 2-MINUTE RULE:")
for big, small in habits.items():
    print(f"  ❌ {big}")
    print(f"  ✅ {small}")
    print()

# ANCHORING (habit stacking):
# "After I [EXISTING HABIT], I will [NEW TINY HABIT]"
anchors = [
    "After I pour morning tea, I will open my book and read 1 page",
    "After I brush my teeth, I will do 2 pushups",
    "After I sit at my desk, I will write 1 sentence",
    "After I start my computer, I will type one line of code",
]
for a in anchors:
    print(f"  🔗 {a}")

# IDENTITY CHANGE (most powerful):
# Don't say: "I want to read more"
# Say: "I am a reader" → every page is a VOTE for that identity
# Actions → Evidence → Identity → More Actions (positive feedback loop)

# THE SCIENCE:
# → Habits take 66 days on average to form (Lally et al., UCL 2010)
# → Range: 18-254 days depending on complexity
# → "21 days" is a myth (Maxwell Maltz, misinterpreted)
# → Consistency > intensity (daily tiny > weekly massive)
# → Never miss twice (if you miss once, don't break the chain)</div>

<div class="code-block"># ── STEP 2: Deep work and flow state ──
# Producing high-quality work in less time.

# DEEP WORK (Cal Newport):
# "Professional activity performed in a state of distraction-free
#  concentration that pushes your cognitive capabilities to their limit."

# DEEP WORK vs SHALLOW WORK:
# Deep: coding, writing, problem-solving, learning (high value, hard)
# Shallow: email, Slack, meetings, browsing (low value, easy)

# THE FLOW STATE (Csikszentmihalyi):
# Complete absorption in an activity
# → Challenge matches skill level (not too easy, not too hard)
# → Clear goals + immediate feedback
# → Distorted sense of time ("where did the hours go?")
# → Intrinsically rewarding (the work IS the reward)

# HOW TO ACHIEVE DEEP WORK:

deep_work_protocol = """
1. ELIMINATE DISTRACTIONS:
   → Phone in another room (not just face-down)
   → Close all browser tabs except the one you need
   → Block distracting sites (Cold Turkey, Freedom)
   → Noise-canceling headphones or white noise

2. SET A TIME BLOCK:
   → 90-minute focus sessions (ultradian rhythm)
   → Use a timer (pomodoro: 25min work, 5min break)
   → ONE task only (no multitasking!)

3. RITUALIZE:
   → Same time, same place every day
   → Same pre-work routine (coffee, music, setup)
   → Signal to your brain: "it's deep work time"

4. BOREDOM PRACTICE:
   → Practice being bored (no phone in line, in elevator)
   → Your attention muscle needs training
   → Resist the urge to check phone "just for a second"

5. QUIT SOCIAL MEDIA:
   → Or at least: turn off ALL notifications
   → Delete apps from phone (use browser only, with friction)
   → Social media fragments attention → destroys deep work ability
"""

print(deep_work_protocol)

# MEASURING DEEP WORK:
# → Track hours of deep work per day (aim for 3-4 hours)
# → Most people do < 1 hour of real deep work per day
# → 4 hours deep work × 5 days = 20 hours high-quality output/week
# → That's more than most people produce in 40 shallow hours</div>

<div class="code-block"># ── STEP 3: Memory and learning techniques ──
# How your brain actually learns.

# SPACED REPETITION (most powerful learning technique):
# Review information at increasing intervals:
#   Day 1 → Day 2 → Day 4 → Day 8 → Day 16 → Day 32
# → Based on Ebbinghaus forgetting curve
# → Tools: Anki, Quizlet, RemNote

# PYTHON (spaced repetition scheduler):
import datetime

def schedule_review(first_study_date, intervals=None):
    """Schedule spaced repetition reviews."""
    if intervals is None:
        intervals = [1, 2, 4, 8, 16, 32, 64]  # days

    reviews = []
    current = first_study_date
    for interval in intervals:
        current += datetime.timedelta(days=interval)
        reviews.append(current.strftime("%Y-%m-%d"))
    return reviews

start = datetime.date(2025, 1, 15)
schedule = schedule_review(start)
print("Spaced repetition schedule:")
for i, date in enumerate(schedule, 1):
    print(f"  Review {i}: {date}")

# ACTIVE RECALL (testing yourself):
# → Reading notes = passive (feels productive, isn't)
# → Recalling from memory = active (harder, 3x more effective)
# → Close the book and write everything you remember
# → Flashcards (Anki) = active recall + spaced repetition

# FEYNMAN TECHNIQUE (learn by teaching):
# 1. Choose a concept
# 2. Explain it as if teaching a 12-year-old
# 3. Identify gaps in your explanation
# 4. Go back to source material, fill gaps
# 5. Simplify and use analogies

# INTERLEAVING (mix subjects):
# → Don't study one topic for 4 hours
# → Mix: 30 min topic A, 30 min topic B, 30 min topic C
# → Forces your brain to discriminate between concepts
# → Better long-term retention than blocking

# SLEEP AND LEARNING:
# → Sleep AFTER learning: consolidates memories (hippocampus → cortex)
# → Sleep BEFORE learning: prepares brain to absorb new info
# → REM sleep: connects ideas creatively
# → Deep sleep: consolidates factual memory
# → Pulling an all-nighter = studying drunk (equally impaired)
# → 7-9 hours is non-negotiable for learning

# EXERCISE AND BRAIN:
# → Aerobic exercise: increases BDNF (brain-derived neurotrophic factor)
# → BDNF: "fertilizer" for neurons → new connections form faster
# → 20 min cardio before studying → measurably better retention</div>

<div class="code-block"># ── STEP 4: Overcoming procrastination ──
# Why you procrastinate and how to stop.

# PROCRASTINATION IS NOT LAZINESS:
# It's an EMOTION regulation problem (Sirois & Pychyl, 2013)
# → You avoid a task because it triggers negative emotion (anxiety, boredom)
# → Procrastination = short-term mood repair at long-term cost

# PROCRASTINATION TRIGGERS:
triggers = {
    "Boredom": "Task is dull/uninteresting",
    "Difficulty": "Task seems too hard or overwhelming",
    "Ambiguity": "Don't know where to start",
    "Perfectionism": "Afraid the result won't be good enough",
    "Fear of failure": "What if I try and fail?",
    "Fear of success": "If I succeed, expectations will rise",
    "Rebellion": "Don't want to be told what to do",
    "Fatigue": "Too tired to start",
}

print("PROCRASTINATION TRIGGERS:")
for trigger, reason in triggers.items():
    print(f"  {trigger}: {reason}")

# ANTI-PROCRASTINATION TECHNIQUES:

techniques = """
1. 5-SECOND RULE (Mel Robbins):
   Count down: 5-4-3-2-1 → GO (before brain talks you out of it)
   The counting interrupts the hesitation loop

2. POMODORO (25 min + 5 min break):
   "Just 25 minutes" → brain agrees (low commitment)
   Starting is the hardest part → once started, momentum carries

3. EAT THE FROG (Brian Tracy):
   Do the HARDEST/most important task FIRST thing in morning
   Willpower is highest in morning (ego depletion theory)
   Everything after feels easier

4. IMPLEMENTATION INTENTION:
   Bad: "I'll study tomorrow"
   Good: "I will study Python chapter 5 at 3 PM at my desk"
   Specific → when, where, what → 2-3x more likely to do it

5. TEMPTATION BUNDLING:
   Pair something you NEED to do with something you WANT to do
   → Listen to favorite podcast ONLY while exercising
   → Watch favorite show ONLY while folding laundry

6. ENVIRONMENT DESIGN:
   → Remove friction for good habits (gym bag packed night before)
   → Add friction for bad habits (phone in another room, delete apps)
   → Your environment shapes your behavior more than willpower

7. SELF-COMPASSION (not self-criticism):
   → Beat yourself up → MORE procrastination (negative cycle)
   → Forgive yourself → LESS procrastination (positive cycle)
   → "I messed up today. Tomorrow is a fresh start."
"""

print(techniques)</div>

<div class="code-block"># ── STEP 5: Digital wellness and attention management ──
# Taking back control of your mind.

# THE ATTENTION ECONOMY:
# Your attention = the product tech companies sell to advertisers
# → Every notification = attention extraction attempt
# → Infinite scroll = engineered for addiction
# → Social media uses SLOT MACHINE mechanics (variable reward)

# DIGITAL WELLNESS PROTOCOL:

protocol = """
1. NOTIFICATIONS:
   → Turn off ALL push notifications (except calls from family)
   → Check messages on YOUR schedule, not when device buzzes
   → Email: check 2-3x per day at set times (not constantly)

2. PHONE-FREE ZONES:
   → Bedroom: no phone (buy an alarm clock)
   → Dining table: no phone during meals
   → Bathroom: no phone (seriously)

3. MORNING ROUTINE:
   → DON'T look at phone for first 30 minutes after waking
   → Morning brain is impressionable → don't fill with others' content
   → Instead: read, meditate, exercise, plan your day

4. GRAYSCALE MODE:
   → Set phone display to grayscale (Settings > Accessibility)
   → Removes dopamine trigger of colorful app icons
   → Makes phone less interesting → reduces unconscious checking

5. APP FRICTION:
   → Delete social media from phone (use browser only)
   → Log out after each use (adds friction to re-open)
   → Use screen time limits with a friend's passcode

6. DEEP WORK ENVIRONMENT:
   → Dedicated workspace (not bed, not couch)
   → Clean desk (visual clutter = cognitive clutter)
   → "Do Not Disturb" mode during focus blocks
   → Website blockers during deep work (Cold Turkey, Freedom)
"""

print(protocol)

# ATTENTION AS A SKILL:
# → Attention is like a muscle (use it or lose it)
# → Constant multitasking WEAKENS attention
# → Meditation (mindfulness) TRAINS attention (like gym for brain)
# → Even 10 min/day of mindfulness measurably improves focus

# THE COST OF CONTEXT SWITCHING:
# → Switching tasks costs 23 minutes of refocus time (Mark, 2008)
# → Check email → return to code → 23 min to get back to flow
# → 10 interruptions/day = 4 hours wasted
# → Batch similar tasks: all email at 11am, all calls at 2pm</div>

<div class="code-block"># ── STEP 6: Mental health and best practices ──
# Maintaining a healthy mind for peak performance.

best_practices = [
    "Sleep 7-9 hours (non-negotiable for cognitive performance)",
    "Exercise 30 min/day (BDNF = brain fertilizer)",
    "Meditate 10 min/day (trains attention, reduces anxiety)",
    "Eat whole foods (gut-brain axis: what you eat = how you think)",
    "Sunlight in morning (circadian rhythm, serotonin)",
    "Social connection (strongest predictor of happiness)",
    "Limit alcohol (depressant, destroys sleep quality)",
    "Journal (writing = thinking, externalizes emotions)",
    "Practice gratitude (3 things daily = proven happiness boost)",
    "Seek therapy when needed (strength, not weakness)",
    "Take breaks (pomodoro: 25 on, 5 off)",
    "Spend time in nature (reduces stress, restores attention)",
    "Limit news consumption (doomscrolling = anxiety)",
    "Read books (not just articles — depth > breadth)",
    "Build routines (reduce decision fatigue, automate good habits)",
]

print("MENTAL HEALTH BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# THE FORMULA FOR A PRODUCTIVE MIND:
# Sleep + Exercise + Nutrition + Meditation + Deep Work + Relationships
# = Peak cognitive performance

# REMEMBER:
# → Your brain is your most important tool — maintain it
# → Burnout is real (and preventable)
# → Rest is not laziness (it's when consolidation happens)
# → Comparison is the thief of joy (run your own race)
# → Small daily improvements compound over time (1% better daily = 37x/year)</div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>কেন কাজ করে — The Science (brief):</strong> BJ Fogg (Stanford, ২০০৯, পরে ২০১৯ Tiny Habits-এ আপডেট) প্রমাণ করেছেন — আচরণ ঘটে যখন Motivation * Ability * Prompt একসাথে মেলে (B=MAP, মূল ২০০৯-এ B=MAT ছিল)। কাজ যত ছোট, Ability তত বেশি — মানে Motivation কম থাকলেও কাজ হয়ে যায়। Stephen Guise (২০১৩) একটা পুশআপ দিয়ে শুরু করেছিলেন — এখন প্রতিদিন ৩০ মিনিট ব্যায়াম করেন। James Clear (২০১৮) একে বলেন '2-Minute Rule।' আর ২১ দিনে অভ্যাস হয় — সেটা ভুল। Lally et al. (UCL, ২০১০) দেখিয়েছেন মধ্যমা ৬৬ দিন (সীমা ১৮-২৫৪ দিন)।</div></div>
  <div class="verse">"আমি একে ধীরে ধীরে অবতীর্ণ করেছি, যাতে তুমি মানুষের কাছে ক্রমে ক্রমে পড়ে শোনাতে পারো।" — কুরআন ১৭:১০৬</div>
  <div class="verse en">"And We revealed it in portions, so that you may recite it to the people over a long period." — Quran 17:106</div>
  <div class="callout info"><span class="co-icon">🧠</span><div><strong>পবিত্র সমতুল্য — Sacred Analogue:</strong> কুরআন ২৩ বছরে নাজিল হয়েছে — একবারে নয়। আল্লাহ চাইলে এক রাতে দিতে পারতেন। কিন্তু মানুষের মস্তিষ্ক ধীরে ধীরে গ্রহণ করে, ধীরে ধীরে অভ্যাস গড়ে। নবী ﷺ বলেছেন: <em>'সবচেয়ে প্রিয় আমল হলো যেটা নিয়মিত হয়, যদিও ছোট।'</em> — বুখারি। এটাই তাদাররুজ — gradualness। তোমার মস্তিষ্কও এই নিয়মে চলে।</div></div>
  <div class="checklist">
    <li>একটা অভ্যাস বেছে নাও (শুধু একটা!)</li>
    <li>সেটাকে ২ মিনিটের সংস্করণে নামিয়ে আনো</li>
    <li>একটা দৈনিক অ্যাংকর খোঁজো (চা ঢালা, দাঁত মাজা, ফজরের নামাজ)</li>
    <li>'আমি [X] করার পর, আমি [Y] করবো' — বাক্যটা লেখো</li>
    <li>৭ দিন শুধু ছোট সংস্করণটাই করো — বড় করবে না</li>
    <li>প্রতিদিন একটা ক্যালেন্ডারে দাগ দাও (✓)</li>
  </div>
  <div class="diagram">
    <div class="diag-title">২-মিনিট নিয়ম · The First Thread</div>
    <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowD1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#c4b5fd"/></marker>
      </defs>
      <text class="lbl-hot" x="50" y="30" text-anchor="middle">ভুল</text>
      <rect class="cell-hot" x="10" y="40" width="160" height="50" rx="8"/>
      <text class="lbl-sm" x="90" y="62" text-anchor="middle">পুরো অধ্যায়</text>
      <text class="lbl-sm" x="90" y="78" text-anchor="middle">৪০ পৃষ্ঠা · ২ ঘণ্টা</text>
      <text class="lbl-sm" x="90" y="115" text-anchor="middle" style="fill:#ff6b35">মস্তিষ্ক ভয় পায় → বলে "পরে"</text>
      <text class="lbl-cyan" x="390" y="30" text-anchor="middle">সঠিক</text>
      <rect class="cell-cyan" x="310" y="40" width="160" height="50" rx="8"/>
      <text class="lbl-sm" x="390" y="62" text-anchor="middle">১ পৃষ্ঠা</text>
      <text class="lbl-sm" x="390" y="78" text-anchor="middle">২ মিনিট</text>
      <text class="lbl-sm" x="390" y="115" text-anchor="middle" style="fill:#3dd6c4">মস্তিষ্ক হাসে → শুরু করে</text>
      <line class="edge" x1="170" y1="65" x2="305" y2="65" marker-end="url(#arrowD1)" stroke-dasharray="4,4"/>
      <text class="lbl-amber" x="237" y="58" text-anchor="middle" style="font-size:10px">ছোট করো</text>
      <rect class="cell-good" x="120" y="150" width="320" height="60" rx="8"/>
      <text class="lbl" x="280" y="175" text-anchor="middle">আজ ১ সুতো · কাল ১ সুতো</text>
      <text class="lbl-sm" x="280" y="195" text-anchor="middle">৬৬ দিন = ৬৬ সুতো → কার্পেট (Lally 2010)</text>
    </svg>
    <div class="diag-cap">বড় কাজ মস্তিষ্ককে ভয় দেখায়; ছোট কাজ হাসায়। হাসলেই শুরু।</div>
  </div>
  <div class="secret-box">
    <div class="secret-icon">🧵</div>
    <div class="secret-line">একটা সুতো বোনো — কার্পেট নিজে হয়ে যাবে।</div>
    <div class="secret-why">কারণ মস্তিষ্ক বড় কাজকে ভয় পায়, ছোট কাজকে হাসে। হাসলেই শুরু হয়। শুরু হলেই চলতে থাকে।</div>
  </div>`,
  senior: {
    title: "আজ রাতে করো — Do This Tonight",
    body: "<p>আজ রাতে ঘুমানোর আগে একটা কাগজে লেখো:<br><strong>'আমি [দাঁত মাজা]-র পর, আমি [বই খুলে ১ পৃষ্ঠা পড়া] করবো।'</strong><br>বইটা বিছানার পাশে রেখো। দাঁত মাজার পর শুধু বইটা খোলো। ১ পৃষ্ঠা পড়ো। হয়ে গেলে দাগ দাও। শেষ। আগামিকাল আবার। এটাই প্রথম সুতো।</p>"
  }
});

// ═══ DOOR 2 ═══
doors.push({
  num: 2,
  icon: "🏠",
  color: "#c084fc",
  name: "পরিবেশই মস্তিষ্ক",
  subtitle: "Environment is Brain",
  tech: "চয়েস আর্কিটেকচার · Choice Architecture & Friction Design",
  spirit: "ফিতনা থেকে বিচ্ছিন্নতা — পরিবেশ থেকে দূরে সরে যাওয়া",
  secret: "ইচ্ছাশক্তি নয় — ফ্রিকশন। ভালো কাজের সামনে বাধা কমাও, খারাপ কাজের সামনে বাধা বাড়াও। তাহলে মস্তিষ্ক নিজে থেকেই সঠিক পথে চলে।",
  recall: {
    q: "ইচ্ছাশক্তি কেন ব্যর্থ হয়, আর পরিবেশ কেন জেতে?",
    qen: "Why does willpower fail, and why does environment win?",
    a: "কারণ দৈনন্দিন আচরণের ~৪৩% স্বয়ংক্রিয় — চেতনার অংশ নয় (Wood, Quinn & Kashy, ২০০২, USC)। যখন তুমি পরিবেশ বদলাও, তুমি স্বয়ংক্রিয় আচরণটাকেই বদলাও — ইচ্ছাশক্তি লাগে না।",
    aen: "Because ~43% of daily behavior is automatic (Wood et al., 2002). When you change the environment, you change automatic behavior — no willpower needed."
  },
  story: `<p class="scene-setting">তুমি বলো — 'আজ থেকে ফোন কম দেখবো।' দশ মিনিট পর হাত নিজে চলে যায় পকেটে। ফোন হাতে। ইনস্টাগ্রাম খোলা। তুমি বলো — 'আজ থেকে ভাজা খাবো না।' রাস্তায় বেরোলে চোখ পড়ে ফাস্ট ফুডের সাইনবোর্ডে। তুমি বলো — 'আজ থেকে পড়ার টেবিলে বসবো।' টেবিলে বসে দেখো ল্যাপটপে ইউটিউব খোলা।</p>
  <p class="scene-setting en">You say 'less phone.' Ten minutes later, your hand is in your pocket. You say 'no fried food.' The billboard catches your eye. You say 'study at the desk.' YouTube is open.</p>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুল ধারণা:</strong> 'আমার ইচ্ছাশক্তি কম।' <strong>সত্য:</strong> ইচ্ছাশক্তি একটা ক্লান্তিশীল সম্পদ — দিনে সীমিত পরিমাণে থাকে। এটাকে ভরসা করলে তুমি দিন শেষে হারাবে।</div></div>
  <p class="scene-setting">এখন শোনো <strong>কারিগর নাফিসার</strong> গল্প। নাফিসা একটা ছোট রান্নাঘরে কাজ করে। তার হাতের কাছেই মসলা, তেল, চামচ — সব সাজানো। সে রান্না করতে গেলে কিছুই খুঁজতে হয় না। সব হাতের নাগালে।</p>
  <p class="scene-setting en">Now hear <strong>Nafisa the Cook.</strong> Her tiny kitchen is perfectly arranged — spices, oil, spoons all within arm's reach. She cooks without searching for anything.</p>
  <div class="dialogue">
    <p><strong>নাফিসা (নতুন শিক্ষাকে বলছে):</strong> দেখ, আমি রোজ মসলার কাঁটা সরাই না। আমি মসলার শিশিটাকেই এমন জায়গায় রাখি যেখানে আমার হাত প্রথমে যায়।</p>
    <p><strong>শিক্ষা:</strong> মানে আপনি ইচ্ছা করে মসলা বেশি দেন না?</p>
    <p><strong>নাফিসা:</strong> ঠিক ধরেছিস। আমি পরিবেশটাই এমন করে রেখেছি যে আমার হাত নিজে থেকেই সঠিক মসলায় যায়। আমি নিয়ন্ত্রণ করি না — পরিবেশ নিয়ন্ত্রণ করে।</p>
  </div>
  <div class="dialogue en">
    <p><strong>Nafisa (to her apprentice):</strong> Look — I don't resist the spice rack. I place the jars where my hand reaches first.</p>
    <p><strong>Nafisa:</strong> I don't control myself. I control the environment, and the environment controls me.</p>
  </div>
  <p class="scene-setting">তোমার মস্তিষ্কও নাফিসার রান্নাঘরের মতো। ফোন যদি টেবিলে থাকে, হাত সেদিকে যাবে। বই যদি বালিশের নিচে থাকে, চোখ সেদিকে যাবে। তুমি নিয়ন্ত্রণ করতে গেলে হারাবে। কিন্তু পরিবেশটা সাজিয়ে রাখলে — মস্তিষ্ক নিজে থেকেই সঠিক দিকে চলে।</p>
  <div class="code-block">
    <h4>🔧 সিস্টেম — The Environment Protocol</h4>
    <p><strong>নিয়ম ১ — ফ্রিকশন কমাও (Reduce Friction for Good):</strong> যে কাজটা তুমি করতে চাও, সেটা করতে যত কম ধাপ লাগে, তত ভালো।</p>
    <table class="kv-table">
      <tr><th>ভালো অভ্যাস</th><th>ফ্রিকশন কমাও</th></tr>
      <tr><td class="hl">পড়া</td><td class="hl">বইটা বালিশের পাশে রাখো (ধাপ: ০)</td></tr>
      <tr><td class="hl">ব্যায়াম</td><td class="hl">জামাকাপড় রাতে বিছানার পাশে রাখো</td></tr>
      <tr><td class="hl">পানি খাওয়া</td><td class="hl">বোতল টেবিলে রাখো, ঢাকনা খোলা</td></tr>
      <tr><td class="hl">ফজরের নামাজ</td><td class="hl">মুসাল্লা বিছানো, জায়নামাজ পাশে</td></tr>
    </table>
    <p><strong>নিয়ম ২ — ফ্রিকশন বাড়াও (Increase Friction for Bad):</strong> যে কাজটা তুমি এড়াতে চাও, সেটা করতে যত বেশি ধাপ লাগাও।</p>
    <table class="kv-table">
      <tr><th>খারাপ অভ্যাস</th><th>ফ্রিকশন বাড়াও</th></tr>
      <tr><td class="hl">ফোন স্ক্রল</td><td class="hl">ফোন অন্য ঘরে রাখো, সাইলেন্ট মুডে</td></tr>
      <tr><td class="hl">জাঙ্ক ফুড</td><td class="hl">বাসা থেকে বের করে ফেলো</td></tr>
      <tr><td class="hl">সোশ্যাল মিডিয়া</td><td class="hl">অ্যাপ ডিলিট, লগআউট, পাসওয়ার্ড মুছো</td></tr>
      <tr><td class="hl">ঘুমে অতিরিক্ত দেরি</td><td class="hl">অ্যালার্ম অন্য ঘরে রাখো</td></tr>
    </table>
    <p><strong>নিয়ম ৩ — ডিফল্ট বদলাও (Change Defaults):</strong> Thaler ও Sunstein (২০০৮, Nudge) দেখিয়েছেন — মানুষ বেশিরভাগ সময় ডিফল্ট অপশনেই থাকে।</p>
    <p>উদাহরণ: ফোনের হোম স্ক্রিন থেকে সব সোশ্যাল অ্যাপ সরাও। শুধু পড়ার অ্যাপ, কাজের অ্যাপ রাখো। সাবস্ক্রিপশন অটো-রিনিউ বন্ধ করো।</p>
  </div>
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল উপায়</div>ফোন হাতে নিয়ে বলো — 'এবার পড়তে হবে, ফোন দেখবো না।' দশ মিনিট পর ফোনে ইউটিউব।</div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক উপায়</div>ফোন অন্য ঘরে রাখো। বইটা টেবিলে খোলা রাখো। যখন পড়তে বসো, ফোন নাগালের বাইরে। মস্তিষ্কের কাছে ফোন দেখার চেয়ে পড়াই সহজ মনে হয়।</div>
  </div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>কেন কাজ করে — The Science:</strong> Wendy Wood (USC, ২০১৯, Good Habits Bad Habits) দেখিয়েছেন — দৈনন্দিন আচরণের <strong>~৪৩% স্বয়ংক্রিয়</strong> (Wood, Quinn & Kashy, ২০০২)। এই আচরণগুলো ইচ্ছাশক্তি দিয়ে হয় না — পরিবেশের কিউ দিয়ে ট্রিগার হয়। Richard Thaler ও Cass Sunstein (২০০৮, Nudge) একে বলেন <em>choice architecture</em> — অপশনগুলো কীভাবে সাজানো আছে, সেটাই মানুষের পছন্দ নির্ধারণ করে। BJ Fogg (Stanford, ২০০৯) তাঁর B=MAP মডেলে দেখিয়েছেন — Ability (সহজতা) বাড়ালে Motivation কম থাকলেও আচরণ হয়।</div></div>
  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">৪৩%</div><div class="sc-label">দৈনন্দিন আচরণ স্বয়ংক্রিয়<br>Wood et al. (2002)</div></div>
    <div class="stat-card"><div class="sc-num">২০ সেকেন্ড</div><div class="sc-label">ফ্রিকশনের নিয়ম — ২০ সেকেন্ড বেশি লাগলে মস্তিষ্ক ছাড়ে</div></div>
  </div>
  <div class="callout info"><span class="co-icon">🧠</span><div><strong>পবিত্র সমতুল্য — Sacred Analogue:</strong> মক্কা বিজয়ের পর নবী ﷺ ৩৬০টা মূর্তি ভাঙলেন কাবা থেকে। তিনি মানুষকে বললেন না — 'মূর্তি পূজা করবে না।' তিনি পরিবেশটাই বদলে দিলেন। মূর্তি নেই, তাই পূজাও নেই। মদের দোকান ভাঙলেন — মদ নেই, তাই পানও নেই। এটাই ফিতনা থেকে বিচ্ছিন্নতা — খারাপ কাজের উৎসটাকেই পরিবেশ থেকে সরিয়ে ফেলো। নবী ﷺ বলেছেন: <em>'পাঁচটার আগে পাঁচটাকে গনিমত (সুযোগ) মনে করো — বার্ধক্যের আগে যৌবন, রোগের আগে সুস্থতা, দারিদ্র্যের আগে সচ্ছলতা, ব্যস্ততার আগে অবসর, আর মৃত্যুর আগে জীবন।'</em> — হাকিম, আলবানি কর্তৃক সহিহ। পরিবেশ ও সময় — দুটোই বদলে যায়। যখন সুযোগ আছে, তখনই কাজে লাগাও।</div></div>
  <div class="verse">"হে মুমিনগণ, তোমরা আল্লাহকে ভয় করো, আর প্রত্যেকে খেয়াল করো আগামীকালের জন্য কী প্রেরণ করেছ।" — কুরআন ৫৯:১৮</div>
  <div class="verse en">"O you who believe, fear Allah, and let every soul look to what it has sent forth for tomorrow." — Quran 59:18</div>
  <div class="checklist">
    <li>আজ রাতে ফোনটা অন্য ঘরে রাখো ঘুমানোর আগে</li>
    <li>পড়ার বইটা বালিশের পাশে রাখো, খোলা অবস্থায়</li>
    <li>ফোনের হোম স্ক্রিন থেকে ২টা সোশ্যাল অ্যাপ সরাও</li>
    <li>বাসা থেকে একটা জাঙ্ক ফুড বের করে ফেলো</li>
    <li>ব্যায়ামের জামা রাতে বিছানার পাশে তৈরি রাখো</li>
    <li>অ্যালার্ম ঘড়ি অন্য ঘরে রাখো (ফোন নয়)</li>
  </div>
  <div class="diagram">
    <div class="diag-title">ফ্রিকশন ইঞ্জিনিয়ারিং · Choice Architecture</div>
    <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowD2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#52c41a"/></marker>
        <marker id="arrowD2b" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#ff6b35"/></marker>
      </defs>
      <text class="lbl-leaf" x="140" y="30" text-anchor="middle">ভালো কাজ → ফ্রিকশন কমাও</text>
      <rect class="cell-good" x="20" y="45" width="100" height="40" rx="6"/>
      <text class="lbl-sm" x="70" y="70" text-anchor="middle">বই টেবিলে খোলা</text>
      <line class="edge" x1="120" y1="65" x2="160" y2="65" marker-end="url(#arrowD2)"/>
      <text class="lbl-sm" x="190" y="60" text-anchor="middle">০ ধাপ</text>
      <rect class="cell-good" x="20" y="100" width="100" height="40" rx="6"/>
      <text class="lbl-sm" x="70" y="125" text-anchor="middle">জামা বিছানায় তৈরি</text>
      <line class="edge" x1="120" y1="120" x2="160" y2="120" marker-end="url(#arrowD2)"/>
      <text class="lbl-sm" x="190" y="115" text-anchor="middle">০ ধাপ</text>
      <line class="edge" x1="280" y1="135" x2="280" y2="160" marker-end="url(#arrowD2)"/>
      <text class="lbl-hot" x="420" y="30" text-anchor="middle">খারাপ কাজ → ফ্রিকশন বাড়াও</text>
      <rect class="cell-hot" x="440" y="45" width="100" height="40" rx="6"/>
      <text class="lbl-sm" x="490" y="70" text-anchor="middle">ফোন অন্য ঘরে</text>
      <line class="edge" x1="440" y1="65" x2="400" y2="65" marker-end="url(#arrowD2b)"/>
      <text class="lbl-sm" x="370" y="60" text-anchor="middle">২০ সেকেন্ড+</text>
      <rect class="cell-hot" x="440" y="100" width="100" height="40" rx="6"/>
      <text class="lbl-sm" x="490" y="125" text-anchor="middle">জাঙ্ক ফুড বের করো</text>
      <line class="edge" x1="440" y1="120" x2="400" y2="120" marker-end="url(#arrowD2b)"/>
      <text class="lbl-sm" x="370" y="115" text-anchor="middle">অসম্ভব</text>
      <rect class="cell-purple" x="120" y="165" width="320" height="70" rx="8"/>
      <text class="lbl" x="280" y="192" text-anchor="middle">ডিফল্ট অপশন বদলাও</text>
      <text class="lbl-sm" x="280" y="215" text-anchor="middle">হোম স্ক্রিন খালি · সাবস্ক্রিপশন বন্ধ</text>
    </svg>
    <div class="diag-cap">ইচ্ছাশক্তি লড়াই করো না — পথ সাজাও, মস্তিষ্ক নিজে চলে।</div>
  </div>
  <div class="secret-box">
    <div class="secret-icon">🏠</div>
    <div class="secret-line">পরিবেশ সাজাও — মস্তিষ্ক নিজে থেকে সঠিক পথে চলবে।</div>
    <div class="secret-why">কারণ ~৪৩% আচরণ স্বয়ংক্রিয়। ইচ্ছাশক্তি দিয়ে লড়াই করে হারবে। পরিবেশ বদলালে জিতবে — কোনো লড়াই ছাড়াই।</div>
  </div>`,
  senior: {
    title: "আজই করো — The 20-Second Rule",
    body: "<p>Shawn Achor এর 20-Second Rule: যে কাজটা তুমি করতে চাও, সেটা শুরু করতে ২০ সেকেন্ডের বেশি না লাগে। যে কাজটা এড়াতে চাও, সেটা করতে ২০ সেকেন্ডের বেশি লাগাও।<br><br><strong>আজ একটা পরীক্ষা:</strong> গিটার বাজাতে চাও? গিটারটা কভারের বাইরে, সোফার পাশে রাখো। টিভির রিমোট দশা সেকেন্ডের দূরে, ড্রয়ারের ভেতরে। দেখবে গিটার বাজছো, টিভি দেখছো না।</p>"
  }
});

// ═══ DOOR 3 ═══
doors.push({
  num: 3,
  icon: "⚡",
  color: "#818cf8",
  name: "তাৎক্ষণিক আত্মবিশ্বাস",
  subtitle: "Instant Confidence",
  tech: "এম্বডিমেন্ট · Embodiment, Mastery Recall & Honest Posture",
  spirit: "ইয়াকিন — দৃঢ় বিশ্বাস, অন্তর্দৃষ্টি থেকে উঠা নিশ্চয়তা",
  secret: "আত্মবিশ্বাস একটা অনুভূতি — সেটা নিজেকে বড় করে দেখালে আসে, সত্যিকারের হরমোন পরিবর্তন থেকে নয়। এবং অতীত জয় স্মরণ করলে মস্তিষ্ক আবার সেই অবস্থায় ফিরে যায়।",
  recall: {
    q: "Power posing এর কোন অংশটা সত্যি, কোন অংশটা ভুল প্রমাণিত?",
    qen: "Which part of power posing is true, which part is debunked?",
    a: "হরমোনাল দাবি (টেস্টোস্টেরন +১৯%, কর্টিসল -২৫%) ভুল — ২০১৫ সালে Ranehill et al. রেপ্লিকেট করতে পারেননি, প্রধান লেখক Carney নিজেই দাবি প্রত্যাখ্যান করেছেন। কিন্তু 'নিজেকে শক্তিশালী মনে হওয়া' — এই বিষয়টি সত্যি এবং রেপ্লিকেট হয়েছে।",
    aen: "The hormonal claim (+19% testosterone, -25% cortisol) was debunked by Ranehill et al. (2015) and disavowed by Carney herself. But the subjective 'feel more powerful' effect replicates and is real."
  },
  story: `<p class="scene-setting">তুমি একটা ইন্টারভিউ রুমের সামনে দাঁড়িয়ে আছো। হাত কাঁপছে। পেটে মোড়া ফেলছে। মুখ শুকনো। মস্তিষ্ক বলছে — 'তুমি পারবে না।' তুমি ভাবো — 'যদি একটু আত্মবিশ্বাস থাকতো...' কিন্তু আত্মবিশ্বাস কোথা থেকে আসে? কি সে জাদু যা এক সেকেন্ডে তোমাকে বদলে দেবে?</p>
  <p class="scene-setting en">You stand outside an interview room. Hands shaking. Stomach in knots. Brain says 'you can't.' You wish for confidence. But where does it come from?</p>
  <p class="scene-setting">এখন শোনো <strong>কারিগর জাফরের</strong> গল্প। জাফর একজন বারিস্তা — কিন্তু তার ডান হাতের কনুইয়ের বাইরে একটা পুরোনো পোড়া দাগ। সে একসময় রান্নাঘরে কাজ করতো, তেল ছিটকে পুড়ে গিয়েছিল। এখন সে প্রতিদিন শত শত কাপ কফি বানায় — হাত একদম স্থির।</p>
  <div class="dialogue">
    <p><strong>শিক্ষা (নতুন বয়নি, কাঁপা হাতে):</strong> জাফর ভাই, আমার হাত কাঁপছে। ল্যাটে আর্ট হবে না। আমি পারবো না।</p>
    <p><strong>জাফর (শান্ত গলায়):</strong> হাত কাঁপছে কারণ তুই ভাবছিস তুই পারবি না। আগে শরীরটা থামা। পিঠ সোজা কর। দুই হাত নিজের কোমরে রাখ। এটাকে আমি বলি 'প্রস্তুতির ভঙ্গি।'</p>
    <p><strong>শিক্ষা (পিঠ সোজা করে):</strong> একটু... একটু ভালো লাগছে। কিন্তু হাত তো এখনো কাঁপছে।</p>
    <p><strong>জাফর:</strong> এবার চোখ বন্ধ কর। মনে কর — গত সপ্তাহে তুই প্রথম এসপ্রেসো বানালি। স্বাদ একদম ঠিক ছিল। আমি বলেছিলাম — 'এটা ভালো।' মনে আছে?</p>
    <p><strong>শিক্ষা (চোখ বন্ধ, হাসছে):</strong> হ্যাঁ... মনে আছে। সেদিন আমি ভালো করেছিলাম।</p>
    <p><strong>জাফর:</strong> হাত কাঁপছে এখন?</p>
    <p><strong>শিক্ষা (চোখ খুলে, অবাক):</strong> ...না! হাত থেমে গেছে!</p>
    <p><strong>জাফর:</strong> তুই নিজের শরীরকে বলে দিলি — 'আমি পারি।' শরীর বিশ্বাস করলো। এটাই আত্মবিশ্বাস। কোনো জাদু নেই — শুধু ভঙ্গি আর স্মৃতি।</p>
  </div>
  <p class="scene-setting">জাফর যা শিখালো, সেটা বিজ্ঞান দুইভাবে নিশ্চিত করেছে — একটা সত্যি, একটা ভুল। চলো দুটোই দেখি, সততার সাথে।</p>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>গুরুত্বপূর্ণ সততা — The Honest Truth:</strong> Amy Cuddy এর ২০১০ সালের গবেষণায় দাবি করা হয়েছিল — শক্তির ভঙ্গি (power pose) করলে টেস্টোস্টেরন ১৯% বাড়ে, কর্টিসল ২৫% কমে। <strong>এই হরমোনাল দাবি ভুল প্রমাণিত।</strong> Ranehill et al. (২০১৫) বড় স্যাম্পলে রেপ্লিকেট করতে পারেননি। প্রধান লেখক Dana Carney নিজেই ২০১৬-এ বলেছেন: <em>'আমি বিশ্বাস করি না যে power pose effects সত্যি।'</em> কিন্তু — <strong>'নিজেকে শক্তিশালী মনে হওয়া' এই বিষয়টি রেপ্লিকেট হয়েছে এবং সত্যি।</strong> শরীর মনকে প্রভাবিত করে — কিন্তু হরমোনের জাদু নয়, অনুভূতির মাধ্যমে।</div></div>
  <div class="code-block">
    <h4>🔧 সিস্টেম — The Confidence Protocol (৩টি সুইচ)</h4>
    <p><strong>সুইচ ১ — ভঙ্গি (Posture):</strong> পিঠ সোজা করো, কাঁধ পিছনে, চিবুক সামান্য উপরে। ৩০ সেকেন্ড।</p>
    <p>এটা হরমোন বদলায় না (এই দাবি ভুল) — কিন্তু <em>নিজেকে শক্তিশালী মনে হয়</em> (এটা সত্যি)। মস্তিষ্ক শরীরের ভাষা পড়ে — সোজা পিঠ = 'আমি প্রস্তুত।'</p>
    <p><strong>সুইচ ২ — অতীত জয়ের স্মৃতি (Mastery Recall):</strong> চোখ বন্ধ করো। একটা সময় মনে করো যখন তুমি সফল ছিলে — একটা পরীক্ষায় ভালো নম্বর, একটা প্রজেক্ট শেষ, একটা কঠিন কাজ পারা।</p>
    <p>৩০ সেকেন্ড সেই মুহূর্তটা পুনরায় অনুভব করো। মস্তিষ্ক আবার সেই অবস্থায় ফিরে যায় — একে বলে state-dependent memory।</p>
    <p><strong>সুইচ ৩ — শ্বাস থামানো (Physiological Sigh):</strong> দুইবার দ্রুত নাক দিয়ে শ্বাস নাও (ছোট ছোট), তারপর একবার লম্বা করে মুখ দিয়ে ছাড়ো।</p>
    <p>Balban et al. (Stanford, ২০২৩) দেখিয়েছেন — এই 'cyclic sighing' মনোভাব উন্নত করে এবং physiological arousal কমায়, mindfulness meditation-এর চেয়েও বেশি। এটা প্যারাসিম্প্যাথেটিক নার্ভাস সিস্টেম চালু করে — 'বিশ্রাম ও পুনরুদ্ধার' মোড।</p>
  </div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>কেন কাজ করে — The Science:</strong> Carney, Cuddy & Yap (২০১০) প্রথম দাবি করেছিলেন শক্তির ভঙ্গি হরমোন বদলায়। কিন্তু Ranehill et al. (২০১৫, Psychological Science) বড় স্যাম্পলে (N=২০০+) দেখান — <strong>হরমোনে কোনো পরিবর্তন নেই</strong>, কিন্তু 'নিজেকে শক্তিশালী মনে হওয়া' এই ফলাফলটি রেপ্লিকেট হয়েছে। Smith & Apicella (২০১৭, Hormones and Behavior) আরও বড় স্যাম্পলে (N=247) এই ফলাফলটিও রেপ্লিকেট করতে পারেননি — power posing-এর বিষয়টি সম্পূর্ণভাবে বিতর্কিত। শরীর→মন সংযোগ সত্যি, কিন্তু জাদু নয়। আর Balban et al. (২০২৩, Cell Reports Medicine) প্রমাণ করেছেন cyclic sighing (double inhale, long exhale) mindfulness-এর চেয়ে ভালো কাজ করে।</div></div>
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ যা ভুল প্রমাণিত</div>Power pose করলে টেস্টোস্টেরন ১৯% বাড়বে, কর্টিসল ২৫% কমবে। — Carney/Cuddy/Yap ২০১০ দাবি, Ranehill ২০১৫-এ রেপ্লিকেশন ব্যর্থ। Carney নিজে প্রত্যাখ্যান করেছেন।</div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ যা সত্যি</div>সোজা পিঠ, উন্মুক্ত ভঙ্গি, অতীত জয়ের স্মৃতি, এবং physiological sigh — এগুলো নিজেকে শক্তিশালী অনুভব করায়, শরীর শান্ত করে, এবং ফোকাস বাড়ায়। হরমোন জাদু নয় — অনুভূতির বাস্তবতা।</div>
  </div>
  <div class="callout info"><span class="co-icon">🧠</span><div><strong>পবিত্র সমতুল্য — Sacred Analogue:</strong> মক্কা বিজয়ের দিন নবী ﷺ ছিলেন ইতিহাসের সবচেয়ে বড় বিজয়ীদের একজন — কিন্তু তাঁর ভঙ্গি ছিল উল্টো যা তুমি ভাবছো। বর্ণনায় আছে, তিনি এতটাই মাথা নত করে উটে বসেছিলেন যে তাঁর দাড়ি প্রায় জিনের সাথে লেগে যাচ্ছিল — বিনয়ে, আল্লাহর প্রতি কৃতজ্ঞতায়। বাইরে থেকে সেটা 'দুর্বল ভঙ্গি' মনে হতে পারে। কিন্তু ভেতরে ছিল সবচেয়ে দৃঢ় ইয়াকিন — এমন নিশ্চয়তা যার বাইরের প্রদর্শনীর দরকার নেই। এটাই আসল শিক্ষা: আত্মবিশ্বাস আর অহংকার এক জিনিস নয়। ভঙ্গি (posture) সোজা রাখা সহায়ক টুল, কিন্তু আসল বিশ্বাস ভেতরে — সেটা মাথা নত থাকলেও কাঁপে না। নবী ﷺ বলেছেন: <em>'শক্ত মুমিন দুর্বল মুমিনের চেয়ে উত্তম ও আল্লাহর কাছে প্রিয়।'</em> — মুসলিম। শক্তি মানে জাহির করা নয় — ভেতরের অবিচল বিশ্বাস।</div></div>
  <div class="verse">"নিশ্চয়ই আমাদের সৈন্যরাই বিজয়ী।" — কুরআন ৩৭:১৭৩</div>
  <div class="verse en">"And indeed, Our soldiers — it is they who overcome." — Quran 37:173</div>
  <div class="checklist">
    <li>পরবর্তী কঠিন কাজের আগে ৩০ সেকেন্ড সোজা পিঠে দাঁড়াও</li>
    <li>চোখ বন্ধ করে একটা সফল মুহূর্ত মনে করো (৩০ সেকেন্ড)</li>
    <li>দুইবার নাকে শ্বাস, একবার লম্বা মুখে ছাড়ো (physiological sigh)</li>
    <li>এই তিনটি সুইচ একসাথে করো — ৯০ সেকেন্ড, সম্পূর্ণ প্রস্তুতি</li>
    <li>মনে রাখো: এটা হরমোন জাদু নয় — শরীর মনকে বলছে 'আমি প্রস্তুত'</li>
  </div>
  <div class="diagram">
    <div class="diag-title">৯০-সেকেন্ড কনফিডেন্স রিচুয়াল · 3 Switches</div>
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowD3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#c4b5fd"/></marker>
      </defs>
      <circle class="node-hot" cx="90" cy="60" r="30"/>
      <text class="lbl-hot" x="90" y="56" text-anchor="middle">০-৩০s</text>
      <text class="lbl-hot" x="90" y="72" text-anchor="middle" style="font-size:9px">পিঠ সোজা</text>
      <text class="lbl-sm" x="90" y="110" text-anchor="middle">শরীর বলে</text>
      <text class="lbl-sm" x="90" y="124" text-anchor="middle">"আমি প্রস্তুত"</text>
      <circle class="node-cyan" cx="280" cy="60" r="30"/>
      <text class="lbl-cyan" x="280" y="56" text-anchor="middle">৩০-৬০s</text>
      <text class="lbl-cyan" x="280" y="72" text-anchor="middle" style="font-size:9px">অতীত জয়</text>
      <text class="lbl-sm" x="280" y="110" text-anchor="middle">state-dependent</text>
      <text class="lbl-sm" x="280" y="124" text-anchor="middle">memory</text>
      <circle class="node-moon" cx="470" cy="60" r="30"/>
      <text class="lbl-sm" x="470" y="56" text-anchor="middle" style="fill:#5b9eff;font-weight:700">৬০-৯০s</text>
      <text class="lbl-sm" x="470" y="72" text-anchor="middle" style="fill:#5b9eff">শ্বাস *৩</text>
      <text class="lbl-sm" x="470" y="110" text-anchor="middle">ভাগাস নার্ভ চালু</text>
      <text class="lbl-sm" x="470" y="124" text-anchor="middle">parasympathetic</text>
      <line class="edge" x1="120" y1="60" x2="250" y2="60" marker-end="url(#arrowD3)"/>
      <line class="edge" x1="310" y1="60" x2="440" y2="60" marker-end="url(#arrowD3)"/>
      <rect class="cell-good" x="120" y="160" width="320" height="40" rx="8"/>
      <text class="lbl-amber" x="280" y="185" text-anchor="middle">হরমোন জাদু নয় — অনুভূতির সত্যতা (Ranehill 2015)</text>
    </svg>
    <div class="diag-cap">তিন সুইচ · ৯০ সেকেন্ড · শরীর মনকে বলে কে তুমি।</div>
  </div>
  <div class="secret-box">
    <div class="secret-icon">⚡</div>
    <div class="secret-line">পিঠ সোজা, অতীত জয় স্মরণ, শ্বাস ছাড়ো — আত্মবিশ্বাস আসবে।</div>
    <div class="secret-why">কারণ শরীর মনকে বলে কে তুমি। ভঙ্গি বদলালে অনুভূতি বদলায়। অতীত সফলতা মস্তিষ্ককে সেই state-এ ফিরিয়ে নিয়ে যায়। এটা হরমোন নয় — এটা তোমার নিজের স্মৃতির শক্তি।</div>
  </div>`,
  senior: {
    title: "৯০-সেকেন্ড কনফিডেন্স রিচুয়াল",
    body: "<p>পরবর্তী কঠিন কাজের ঠিক আগে (ইন্টারভিউ, পরীক্ষা, প্রেজেন্টেশন) এই ৯০ সেকেন্ড:<br><strong>০-৩০s:</strong> সোজা পিঠে দাঁড়াও, কাঁধ পিছনে, চিবুক সামান্য উপরে।<br><strong>৩০-৬০s:</strong> চোখ বন্ধ, একটা সফল মুহূর্ত পুরোপুরি অনুভব করো।<br><strong>৬০-৯০s:</strong> দুইবার নাকে ছোট শ্বাস, একবার মুখে লম্বা ছাড়ো (x৩)।<br>মনে রাখো — এটা Cuddy-র হরমোন জাদু নয় (সেটা ভুল)। এটা তোমার নিজের শরীর ও স্মৃতির সাথে কথা বলা।</p>"
  }
});

// ═══ DOOR 4 ═══
doors.push({
  num: 4,
  icon: "🧪",
  color: "#a78bfa",
  name: "ডোপামিনের চুক্তি",
  subtitle: "The Dopamine Contract",
  tech: "রিওয়ার্ড ইঞ্জিনিয়ারিং · Temptation Bundling & Reward Prediction Error",
  spirit: "নিয়ামত — আনন্দকে কাজে লাগানো, উপাসনা নয়",
  secret: "ডোপামিন পুরস্কারে আসে না — প্রত্যাশায় আসে। তুমি যদি আনন্দদায়ক কাজটাকে কষ্টের কাজের সাথে বেঁধে দাও, মস্তিষ্ক কষ্টের কাজটাও চাইতে শুরু করে।",
  recall: {
    q: "ডোপামিন কখন সবচেয়ে বেশি ক্ষরণ হয় — পুরস্কার পাওয়ার সময়, নাকি প্রত্যাশার সময়?",
    qen: "When is dopamine highest — at reward delivery, or during anticipation?",
    a: "প্রত্যাশায়। Schultz et al. (১৯৯৭, Science) দেখিয়েছেন ডোপামিন নিউরন তখন সবচেয়ে বেশি ফায়ার করে যখন পুরস্কারের সংকেত (cue) আসে — পুরস্কার পাওয়ার আগে। পুরস্কার নিশ্চিত হলে ডোপামিন কমে যায়। এ কারণে নতুন জিনিস আনন্দদায়ক, পুরোনো জিনিস বোরিং।",
    aen: "During anticipation. Schultz et al. (1997) showed dopamine neurons fire most at the cue predicting reward — before delivery. Once reward is certain, dopamine drops. This is why novelty excites, familiarity bores."
  },
  story: `<p class="scene-setting">তুমি একটা ভালো সিরিজ দেখতে চাও। কিন্তু পড়তেও হবে। মস্তিষ্ক বলে — 'সিরিজটা একটু দেখে নাও, তারপর পড়বো।' তুমি জানো — 'তারপর' কখনো আসে না। সিরিজ শেষ হয়, রাত শেষ হয়, পড়া হয় না। প্রতিদিন একই।</p>
  <p class="scene-setting en">You want to watch a show. But you also need to study. Brain says 'just one episode first.' You know 'later' never comes. The show ends, the night ends, studying doesn't happen.</p>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুল কৌশল:</strong> 'আমি পড়ার পর সিরিজ দেখবো।' কেন ভুল? কারণ ডোপামিন প্রত্যাশায় কাজ করে — তুমি সিরিজের প্রত্যাশায় পড়তে বসলে ভালো লাগে। কিন্তু পড়ার প্রত্যাশায় সিরিজ দেখলে — সিরিজটাই প্রিয় হয়ে যায়, পড়াটা শাস্তির মতো মনে হয়।</div></div>
  <p class="scene-setting">এখন শোনো <strong>কারিগর ফারহানের</strong> গল্প। ফারহান একজন চা-বিক্রেতা — তার দোকানে সবসময় ভিড়। কারণ সে একটা বুদ্ধি বের করেছে যা অন্য চা-বিক্রেতারা বোঝে না।</p>
  <div class="dialogue">
    <p><strong>প্রতিবেশী দোকানদার:</strong> ফারহান, তোর চায়ের স্বাদ আর আমার চায়ের স্বাদ একই। দামও একই। কিন্তু তোর দোকানে লাইন, আমার দোকানে কেউ নেই। কেন?</p>
    <p><strong>ফারহান (হেসে):</strong> কারণ তুমি চা বিক্রি করো। আমি প্রত্যাশা বিক্রি করি।</p>
    <p><strong>প্রতিবেশী:</strong> মানে?</p>
    <p><strong>ফারহান:</strong> দেখ — আমি প্রতিদিন সকালে একটা নতুন নাস্তা রাখি চায়ের সাথে। মানুষ জানে না আজ কী থাকবে। তারা আসে — কী আছে সেটা দেখতে। চা খাওয়া তো আছেই। আমি চায়ের সাথে একটা রহস্য জুড়ে দিয়েছি। মানুষ রহস্যের জন্য আসে।</p>
    <p><strong>প্রতিবেশী:</strong> তুমি চা বিক্রি করো না?</p>
    <p><strong>ফারহান:</strong> চা বিক্রি হয়েই যায়। কারণ রহস্যের জন্য এসে মানুষ চা-ও খায়। আমি দুটো জিনিস একসাথে বেঁধে দিয়েছি।</p>
  </div>
  <p class="scene-setting">ফারহান যা করলো, সেটাকে বিজ্ঞান বলে <strong>temptation bundling</strong> — একটা আনন্দদায়ক কাজকে একটা কষ্টের কাজের সাথে বেঁধে দেওয়া। Katy Milkman (Wharton, ২০১৪) এটা প্রমাণ করেছেন।</p>
  <div class="code-block">
    <h4>🔧 সিস্টেম — The Dopamine Contract (৩টি নিয়ম)</h4>
    <p><strong>নিয়ম ১ — Temptation Bundling (আনন্দ-বাঁধাই):</strong> একটা কাজ যেটা তুমি <em>করতে চাও</em> (অডিওবুক, পডকাস্ট, ভালো গান), সেটা শুধু তখনই করবে যখন একটা কাজ করছো যেটা <em>করতে হবে কিন্তু ইচ্ছা নেই</em> (ব্যায়াম, পড়া, কাজ)।</p>
    <table class="kv-table">
      <tr><th>করতে হবে (Want-to-do)</th><th>করতে চাও (Need-to-do)</th><th>বাঁধাই (Bundle)</th></tr>
      <tr><td class="hl">অডিওবুক শোনা</td><td class="hl">ব্যায়াম</td><td class="hl">অডিওবুক শুধু জিমে</td></tr>
      <tr><td class="hl">প্রিয় পডকাস্ট</td><td class="hl">ডিশ ধোয়া</td><td class="hl">পডকাস্ট শুধু ডিশ ধোওয়ার সময়</td></tr>
      <tr><td class="hl">ভালো গান</td><td class="hl">যাত্রা</td><td class="hl">প্রিয় গান শুধু হাঁটার সময়</td></tr>
      <tr><td class="hl">সিরিজ দেখা</td><td class="hl">কাপড় কাঁচা</td><td class="hl">সিরিজ শুধু কাপড় ভাঁজের সময়</td></tr>
    </table>
    <p><strong>নিয়ম ২ — প্রত্যাশা তৈরি করো (Engineer Anticipation):</strong> ডোপামিন পুরস্কারে আসে না — <em>প্রত্যাশায়</em> আসে। তাই পুরস্কারটা নিশ্চিত করো না — অনিশ্চিত রাখো।</p>
    <p>উদাহরণ: পড়ার পর 'কিছু একটা ভালো' হবে — কিন্তু কী হবে সেটা আগে থেকে ঠিক করো না। মাঝে মাঝে চকলেট, মাঝে মাঝে হাঁটা, মাঝে মাঝে কিছু না। অনিশ্চয়তা ডোপামিন বাড়ায়।</p>
    <p><strong>নিয়ম ৩ — ছোট পুরস্কার, ঘন ঘন (Small, Frequent Rewards):</strong> একটা বড় পুরস্কার দূরে রাখলে ডোপামিন মরে যায়। ছোট ছোট পুরস্কার কাছে রাখলে ডোপামিন বেঁচে থাকে।</p>
    <p>প্রতি ২৫ মিনিট পড়ার পর ৫ মিনিট বিরতি — Pomodoro। প্রতি অধ্যায় শেষে একটা দাগ। প্রতি দিন একটা checklist পূরণ।</p>
  </div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>কেন কাজ করে — The Science:</strong> <strong>Wolfram Schultz</strong> (Cambridge, ১৯৯৭, <em>Science</em>) মাকাক বানরের ডোপামিন নিউরন রেকর্ড করে দেখিয়েছেন — ডোপামিন পুরস্কারে ফায়ার করে না, <strong>পুরস্কারের সংকেতে (cue)</strong> ফায়ার করে। যখন বাতি জ্বলে যে খাবার আসবে — তখনই ডোপামিন বাড়ে। খাবার মুখে পৌঁছালে ডোপামিন স্থির হয়ে যায়। আর যদি বাতি জ্বলে কিন্তু খাবার না আসে — ডোপামিন <em>বেসলাইনের নিচে</em> নেমে যায়। এটাই <strong>Reward Prediction Error (RPE)</strong>। Robert Sapolsky (Stanford, ২০১৭, <em>Behave</em>) এটা ব্যাখ্যা করেছেন: ডোপামিন প্রত্যাশায় সবচেয়ে বেশি, নিশ্চয়তায় কম, হতাশায় নিচে। Katy Milkman (Wharton, ২০১৪, <em>Management Science</em>) দেখিয়েছেন — অডিওবুক শুধু জিমে শুনলে <strong>ব্যায়াম ৫১% বেশি</strong> হয়।</div></div>
  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">৫১%</div><div class="sc-label">ব্যায়াম বেড়েছে temptation bundling-এ<br>Milkman et al. (2014)</div></div>
    <div class="stat-card"><div class="sc-num">RPE</div><div class="sc-label">Reward Prediction Error — ডোপামিনের আসল সূত্র<br>Schultz et al. (1997)</div></div>
  </div>
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল উপায়</div>'পড়ার পর সিরিজ দেখবো।' ডোপামিন সিরিজের প্রত্যাশায় পড়াকে কষ্টের মতো করে তোলে। সিরিজ পুরস্কার, পড়া শাস্তি।</div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক উপায়</div>'অডিওবুক শুধু জিমে শুনবো।' ডোপামিন অডিওবুকের প্রত্যাশায় ব্যায়ামকে আনন্দদায়ক করে তোলে। অডিওবুক বাঁধাই, ব্যায়াম স্বয়ংক্রিয়।</div>
  </div>
  <div class="callout info"><span class="co-icon">🧠</span><div><strong>পবিত্র সমতুল্য — Sacred Analogue:</strong> রমজানের রোজা কী? একটা temptation bundle। পানাহার — যা মানুষ সবচেয়ে বেশি ভালোবাসে — সেটা শুধু সূর্যাস্তের পরে। সারা দিন প্রত্যাশা তৈরি হয় — ডোপামিন বাড়ে। আর ইফতারির সময় যখন খেজুর মুখে যায় — সেই তৃপ্তি অন্য কোনো সময় নেই। কারণ প্রত্যাশা দীর্ঘ ছিল। এটাই নিয়ামত — আনন্দকে উপাসনা না করে, কাজে লাগানো। ডোপামিন যদি তোমাকে নিয়ন্ত্রণ করে, তুমি তার দাস। কিন্তু তুমি যদি ডোপামিনকে নিয়ন্ত্রণ করো — সে তোমার কারিগর।</div></div>
  <div class="verse">"তোমাদের জন্য রোজা নির্ধারিত হলো — যেন তোমরা ধর্মপরায়ণ হও।" — কুরআন ২:১৮৩</div>
  <div class="verse en">"Fasting is prescribed for you, so that you may become righteous." — Quran 2:183</div>
  <div class="checklist">
    <li>একটা কাজ বেছে নাও যেটা তুমি ভালোবাসো (অডিওবুক, পডকাস্ট, গান)</li>
    <li>সেটা শুধু একটা কঠিন কাজের সময় শুনতে পারবে — অন্য সময় নয়</li>
    <li>পুরস্কার নিশ্চিত করো না — অনিশ্চিত রাখো (মাঝে মাঝে কিছু না)</li>
    <li>ছোট পুরস্কার ঘন ঘন দাও (প্রতি ২৫ মিনিটে একটা দাগ)</li>
    <li>'পড়ার পর সিরিজ' বন্ধ করো — সিরিজকে পড়ার সাথে বাঁধো</li>
  </div>
  <div class="diagram">
    <div class="diag-title">ডোপামিন কার্ভ · Reward Prediction Error</div>
    <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowD4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#c4b5fd"/></marker>
      </defs>
      <line class="axis" x1="50" y1="200" x2="520" y2="200"/>
      <line class="axis" x1="50" y1="40" x2="50" y2="200"/>
      <text class="axis-label" x="285" y="222" text-anchor="middle">সময়</text>
      <text class="axis-label" x="30" y="120" text-anchor="end" transform="rotate(-90,30,120)">ডোপামিন</text>
      <path d="M 80 180 Q 140 180 170 90 Q 200 90 230 150 Q 260 180 320 180" fill="none" stroke="#52c41a" stroke-width="2.5"/>
      <text class="lbl-leaf" x="170" y="80" text-anchor="middle">প্রত্যাশায় চরম ↑</text>
      <text class="lbl-sm" x="170" y="68" text-anchor="middle" style="fill:#52c41a">cue আসে</text>
      <circle cx="170" cy="90" r="4" fill="#52c41a"/>
      <text class="lbl-sm" x="230" y="142" text-anchor="middle" style="fill:#52c41a">পুরস্কার আসে</text>
      <circle cx="230" cy="150" r="4" fill="#52c41a"/>
      <rect class="cell-hot" x="380" y="50" width="140" height="70" rx="8"/>
      <text class="lbl-hot" x="450" y="72" text-anchor="middle">ভুল বাঁধাই</text>
      <text class="lbl-sm" x="450" y="90" text-anchor="middle">"পড়ার পর সিরিজ"</text>
      <text class="lbl-sm" x="450" y="105" text-anchor="middle">→ পড়া = শাস্তি</text>
      <rect class="cell-good" x="380" y="130" width="140" height="70" rx="8"/>
      <text class="lbl-leaf" x="450" y="152" text-anchor="middle">সঠিক বাঁধাই</text>
      <text class="lbl-sm" x="450" y="170" text-anchor="middle">"অডিওবুক শুধু জিমে"</text>
      <text class="lbl-sm" x="450" y="185" text-anchor="middle">→ ব্যায়াম ৫১% ↑</text>
    </svg>
    <div class="diag-cap">ডোপামিন পুরস্কারে আসে না — প্রত্যাশায় আসে (Schultz 1997)।</div>
  </div>
  <div class="secret-box">
    <div class="secret-icon">🧪</div>
    <div class="secret-line">আনন্দকে কাজের সাথে বাঁধো — মস্তিষ্ক নিজে থেকে কাজ চাইবে।</div>
    <div class="secret-why">কারণ ডোপামিন প্রত্যাশায় আসে, পুরস্কারে নয়। তুমি প্রত্যাশা তৈরি করো — মস্তিষ্ক কাজটাকে আনন্দ ভেবে শুরু করে দেয়। তুমি জোর করো না — ডোপামিন তোমাকে টানে।</div>
  </div>`,
  senior: {
    title: "আজই চুক্তি করো — Make the Contract",
    body: "<p>আজ একটা চুক্তি করো:<br><strong>'আমি [প্রিয় অডিওবুক/পডকাস্ট] শুধু [ব্যায়াম/পড়া/কাজ]-এর সময় শুনবো। অন্য সময় নয়।'</strong><br><br>অডিওবুকটা শুধু কঠিন কাজের জন্য রেখো। দেখবে — কয়েক দিনের মধ্যে মস্তিষ্ক কঠিন কাজটাই খুঁজতে শুরু করবে, কারণ কঠিন কাজ = অডিওবুকের সুযোগ। এটাই temptation bundling।</p>"
  }
});

// ═══ DOOR 5 ═══
doors.push({
  num: 5,
  icon: "🌬️",
  color: "#6366f1",
  name: "শ্বাস-সুইচ",
  subtitle: "The Breath Switch",
  tech: "ফিজিওলজিক্যাল সাই · Physiological Sigh & NSDR",
  spirit: "নাফস — শ্বাস হলো মনের দোর খোলার চাবি",
  secret: "তোমার শরীরে একটা সুইচ আছে যা তুমি চাইলেই চালাতে পারো — শ্বাস। দুইবার ভরো, একবার ছাড়ো। তখনই স্নায়ুতন্ত্র শান্ত মোডে চলে যায়। কোনো ওষুধ নেই, কোনো খরচ নেই — শুধু শ্বাস।",
  recall: {
    q: "Physiological Sigh কী এবং এটা কীভাবে স্নায়ুতন্ত্রকে শান্ত করে?",
    qen: "What is the Physiological Sigh and how does it calm the nervous system?",
    a: "দুইবার দ্রুত নাক দিয়ে শ্বাস নেওয়া (ছোট ছোট), তারপর একবার লম্বা করে মুখ দিয়ে ছাড়া। দ্বিতীয় শ্বাসটা ধসে যাওয়া অ্যালভিওলাই (ফুসফুসের থলি) খোলে। লম্বা নিঃশ্বাস ভাগাস নার্ভ (parasympathetic) সক্রিয় করে — হৃদস্পন্দন কমে, শরীর শান্ত হয়। Balban et al. (২০২৩) দেখিয়েছেন এটা মেডিটেশনের চেয়েও দ্রুত কাজ করে।",
    aen: "Two quick nasal inhales, one long mouth exhale. The second breath reopens collapsed alveoli. The long exhale activates the vagus nerve (parasympathetic) — heart rate drops, body calms. Balban et al. (2023) showed it works faster than meditation."
  },
  story: `<p class="scene-setting">পরীক্ষার হলে বসে আছো। প্রশ্নটা পড়তে পারছো না — চোখের সামনে অক্ষরগুলো ঘুরছে। হাত ঠান্ডা, বুক ধুকপুক করছে। মস্তিষ্ক বলছে — 'ভয় পেয়ো না, শান্ত হও।' কিন্তু শান্ত হওয়া যায় কীভাবে? মস্তিষ্ককে বললে শোনে না — সে তো নিজেই ভয়ে আছে।</p>
  <p class="scene-setting en">You sit in the exam hall. Letters blur. Hands cold, heart pounding. Brain says 'calm down' — but it can't hear itself. It IS the panic.</p>
  <div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সমস্যা:</strong> তুমি মস্তিষ্ককে বলে শান্ত করতে পারবে না — কারণ মস্তিষ্কই তো ভয়ে আছে। তোমাকে <strong>শরীরের</strong> ভাষায় কথা বলতে হবে। আর শরীরের ভাষা হলো — শ্বাস।</div></div>
  <p class="scene-setting">এখন শোনো <strong>কারিগর সুমাইয়ার</strong> গল্প। সুমাইয়া একজন ধাতব-কর্মী — সে রূপালি গহনা তৈরি করে। তার কাজের জায়গায় সবসময় আগুন জ্বলে — গরম তাপ, ধাতব গন্ধ, প্রখর আলো। অন্য কারিগররা দুপুরে ক্লান্ত হয়ে পড়ে, মাথা ধরে, কাজ বন্ধ করে দেয়। কিন্তু সুমাইয়া সারাদিন কাজ করে — শান্ত, ফোকাসড, একদম স্থির হাতে।</p>
  <div class="dialogue">
    <p><strong>সহকারী (ক্লান্ত, ঘর্মাক্ত):</strong> আপা, আমি আর পারছি না। মাথা ঘুরছে। হাত কাঁপছে। আপনি কীভাবে সারাদিন কাজ করেন?</p>
    <p><strong>সুমাইয়া (কাজ থামিয়ে, চোখ বন্ধ করে):</strong> দাঁড়া। একটা জিনিস দেখাই।</p>
    <p><strong>সুমাইয়া (ধীর গলায়):</strong> নাক দিয়ে দুইবার শ্বাস নাও — ছোট ছোট। এক, দুই। এবার মুখ দিয়ে লম্বা করে ছাড়ো...</p>
    <p><strong>সহকারী (অনুসরণ করে):</strong> ...ও।</p>
    <p><strong>সুমাইয়া:</strong> আবার করো।</p>
    <p><strong>সহকারী (তিনবার করার পর, অবাক):</strong> আপা... মাথা ঘোরা থেমে গেছে। হাতও থামলো।</p>
    <p><strong>সুমাইয়া (হেসে):</strong> এটাই শ্বাস-সুইচ। আমি প্রতি ঘণ্টায় একবার করি। আগুনের পাশে কাজ করলে শরীর গরম হয়, মন উত্তেজিত হয়। শ্বাস দিয়ে সেই উত্তেজনা নিভিয়ে দিই। কোনো খরচ নেই, কোনো যন্ত্র নেই — শুধু তোমার নিজের শ্বাস।</p>
  </div>
  <p class="scene-setting">সুমাইয়া যা করলো, সেটাকে বিজ্ঞান বলে <strong>Physiological Sigh</strong>। এটা শুধু অনুভূতি নয় — এটা মস্তিষ্কের ভেতরে একটা আসল সার্কিট যা বিজ্ঞানীরা খুঁজে পেয়েছেন।</p>
  <div class="code-block">
    <h4>🔧 সিস্টেম — The Breath Switch (২টি প্রোটোকল)</h4>
    <p><strong>প্রোটোকল ১ — Physiological Sigh (তাৎক্ষণিক শান্তি):</strong></p>
    <div class="checklist">
      <li>নাক দিয়ে দ্রুত শ্বাস নাও (ছোট) — পেট ভরো</li>
      <li>আরেকটু বেশি নাক দিয়ে শ্বাস নাও (ছোট) — বুক ভরো</li>
      <li>মুখ দিয়ে লম্বা করে ছাড়ো — ধীরে, সম্পূর্ণ শূন্য না হওয়া পর্যন্ত</li>
      <li>৩-৫ বার করো — ৩০ সেকেন্ডের কাজ</li>
    </div>
    <p><em>কখন করবে:</em> পরীক্ষায়, ইন্টারভিউতে, রাগের সময়, ঘুমানোর আগে, পড়া শুরুর আগে।</p>
    <p><strong>প্রোটোকল ২ — NSDR / Yoga Nidra (গভীর বিশ্রাম):</strong></p>
    <p>১০-২০ মিনিটের একটা গাইডেড রিলাক্সেশন। তুমি শুয়ে থাকো, একজন কণ্ঠ তোমার শরীরের অংশে অংশে মনোযোগ নিয়ে যায়। এটা ঘুম নয় — কিন্তু ঘুমের মতো গভীর বিশ্রাম।</p>
    <p><em>কখন করবে:</em> দুপুরে এনার্জি কমে গেলে, ডিপ ওয়ার্কের পর মস্তিষ্ক রিসেট করতে, রাতে ঘুমের আগে।</p>
    <p>Huberman এটাকে বলেন <strong>Non-Sleep Deep Rest (NSDR)</strong> — এটা দুপুরের ঘুমের চেয়ে কম সময়ে বেশি রিফ্রেশ করে।</p>
  </div>
  <div class="callout tip"><span class="co-icon">🎯</span><div><strong>কেন কাজ করে — The Science:</strong> <strong>Jack Feldman</strong> (UCLA) এবং <strong>Mark Krasnow</strong> (Stanford) ২০১৬ সালে <em>Nature</em>-এ আবিষ্কার করেছেন — মস্তিষ্কের ভেতরে মাত্র ~২০০টি নিউরন আছে যারা শুধু 'দীর্ঘশ্বাস' (sigh) নিয়ন্ত্রণ করে। এই নিউরনগুলো দুটি নিউরোপেপটাইড (Nmb ও Grp) ব্যবহার করে। এগুলো বন্ধ করলে ইদুর আর দীর্ঘশ্বাস নেয় না — কিন্তু সাধারণ শ্বাস ঠিক থাকে। <strong>Balban, Huberman et al.</strong> (Stanford, ২০২৩, <em>Cell Reports Medicine</em>) ১১৪ জনের উপর এক মাসের RCT করেছেন — <strong>cyclic sighing</strong> (দীর্ঘ নিঃশ্বাসে জোর) mindfulness meditation-এর চেয়ে উল্লেখযোগ্যভাবে বেশি মনোভাব উন্নত করেছে এবং physiological arousal কমিয়েছে (p&lt;০.০৫)। Kjaer et al. (২০০২, <em>Cognitive Brain Research</em>) PET স্ক্যানে দেখিয়েছিলেন meditation-induced deep relaxation-এর সময় ventral striatum-এ ডোপামিন নিঃসরণ বাড়ে (মূল গবেষণায় N=৮, ছোট স্যাম্পল) — এই ফলাফলকে বড় স্যাম্পলে পুনরায় যাচাই করা এখনো বাকি, তাই একে ইঙ্গিত হিসেবে নাও, চূড়ান্ত সত্য হিসেবে নয়।</div></div>
  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">~২০০</div><div class="sc-label">নিউরন যারা শুধু sigh নিয়ন্ত্রণ করে<br>Li/Feldman/Krasnow (2016)</div></div>
    <div class="stat-card"><div class="sc-num">৩০ সে</div><div class="sc-label">Physiological Sigh — মাত্র ৩০ সেকেন্ডে শান্তি<br>Balban et al. (2023)</div></div>
  </div>
  <div class="compare">
    <div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভুল উপায়</div>ভয়ের সময় নিজেকে বলো — 'ভয় পেয়ো না, শান্ত হও।' মস্তিষ্ক নিজেই ভয়ে আছে — সে নিজের কথা শোনে না।</div>
    <div class="cmp-card cmp-good"><div class="cmp-label">✅ সঠিক উপায়</div>দুইবার নাকে ভরো, একবার লম্বা মুখে ছাড়ো। শরীরের ভাষায় বলো — 'নিরাপদ।' স্নায়ুতন্ত্র শোনে, হৃদস্পন্দন কমে, মন শান্ত হয়।</div>
  </div>
  <div class="callout info"><span class="co-icon">🧠</span><div><strong>পবিত্র সমতুল্য — Sacred Analogue:</strong> কুরআনে আল্লাহকে বলা হয়েছে <em>'যিনি প্রতিটি নাফস (শ্বাস/প্রাণ) সুন্দর করে গড়েছেন'</em> (৯১:৭)। নাফস — শ্বাস ও প্রাণ — একই শবদ। আল্লাহ বলেছেন: <em>'যে ব্যক্তি নিজের নাফসকে পবিত্র রাখে, সে সফল হয়। যে নাফসকে কলুষিত করে, সে ব্যর্থ।'</em> (৯১:৯-১০)। এই শব্দটা — নাফস — শুধু আধ্যাত্মিক নয়। এটা শ্বাস। তুমি যখন শ্বাস নিয়ন্ত্রণ করো, তুমি তোমার নাফস নিয়ন্ত্রণ করো। নবী ﷺ বলেছেন: <em>'তোমার প্রভুর স্মরণে নিমগ্ন থাকো... সকালে ও সন্ধ্যায়।'</em> — এই স্মরণ (জিকির) শ্বাসের সাথে যুক্ত। প্রতিটা শ্বাসে 'আলহামদুলিল্লাহ' — এটাও একটা physiological practice, শুধু আধ্যাত্মিক নয়।</div></div>
  <div class="verse">"শপথ সেই আত্মার এবং যিনি তাকে সুবিন্যস্ত করেছেন। তারপর তাকে তার অশুভতা ও তার পবিত্রতা অনুপ্রাণিত করেছেন।" — কুরআন ৯১:৭-৮</div>
  <div class="verse en">"By the soul and He who proportioned it, and inspired it with its wickedness and its righteousness." — Quran 91:7-8</div>
  <div class="checklist">
    <li>আজ ৩বার physiological sigh করো — সকালে, দুপুরে, রাতে</li>
    <li>প্রতিবার ৩-৫ চক্র: দুই নাকে শ্বাস, এক মুখে লম্বা নিঃশ্বাস</li>
    <li>একটা NSDR অডিও খুঁজে নাও (YouTube-এ "NSDR Huberman" লিখো)</li>
    <li>দুপুরে বা ডিপ ওয়ার্কের পর ১০ মিনিট NSDR করো</li>
    <li>ভয়/রাগ/ক্লান্তি আসলে শ্বাস দিয়ে শুরু করো — কথা দিয়ে নয়</li>
  </div>
  <div class="diagram">
    <div class="diag-title">শ্বাস-সুইচ · Physiological Sigh</div>
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowD5" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#5b9eff"/></marker>
      </defs>
      <line class="axis" x1="60" y1="180" x2="520" y2="180"/>
      <text class="lbl-sm" x="60" y="30" text-anchor="middle" style="fill:#3dd6c4">নাক</text>
      <text class="lbl-sm" x="160" y="30" text-anchor="middle" style="fill:#3dd6c4">নাক</text>
      <text class="lbl-sm" x="320" y="30" text-anchor="middle" style="fill:#ff6b35">মুখ (লম্বা)</text>
      <text class="lbl-sm" x="460" y="30" text-anchor="middle">ফলাফল</text>
      <circle class="node-cyan" cx="60" cy="90" r="22"/>
      <text class="lbl-cyan" x="60" y="86" text-anchor="middle" style="font-size:10px">ভরো</text>
      <text class="lbl-sm" x="60" y="100" text-anchor="middle">পেট</text>
      <circle class="node-cyan" cx="160" cy="90" r="22"/>
      <text class="lbl-cyan" x="160" y="86" text-anchor="middle" style="font-size:10px">ভরো</text>
      <text class="lbl-sm" x="160" y="100" text-anchor="middle">বুক</text>
      <circle class="node-hot" cx="320" cy="90" r="22"/>
      <text class="lbl-hot" x="320" y="86" text-anchor="middle" style="font-size:10px">ছাড়ো</text>
      <text class="lbl-sm" x="320" y="100" text-anchor="middle">ধীরে</text>
      <line class="edge" x1="82" y1="90" x2="138" y2="90" marker-end="url(#arrowD5)"/>
      <line class="edge" x1="182" y1="90" x2="298" y2="90" marker-end="url(#arrowD5)"/>
      <line class="edge" x1="342" y1="90" x2="430" y2="90" marker-end="url(#arrowD5)"/>
      <rect class="cell-good" x="430" y="65" width="100" height="50" rx="8"/>
      <text class="lbl-leaf" x="480" y="85" text-anchor="middle" style="font-size:10px">হৃদস্পন্দন ↓</text>
      <text class="lbl-sm" x="480" y="102" text-anchor="middle">ভাগাস চালু</text>
      <text class="lbl-amber" x="280" y="160" text-anchor="middle">*৩-৫ চক্র · ৩০ সেকেন্ড · মেডিটেশনের চেয়ে দ্রুত (Balban 2023)</text>
    </svg>
    <div class="diag-cap">দুই ভরো, এক ছাড়ো — স্নায়ুতন্ত্র শান্ত মোডে যায়।</div>
  </div>
  <div class="secret-box">
    <div class="secret-icon">🌬️</div>
    <div class="secret-line">শ্বাস হলো শরীরের রিমোট কন্ট্রোল — দুই ভরো, এক ছাড়ো।</div>
    <div class="secret-why">কারণ শ্বাস একমাত্র স্বয়ংক্রিয় সিস্টেম যা তুমি চাইলে ম্যানুয়ালি নিয়ন্ত্রণ করতে পারো। লম্বা নিঃশ্বাস ভাগাস নার্ভ চালু করে — শরীরের শান্তি মোড। কোনো খরচ নেই, কোনো পার্শ্বপ্রতিক্রিয়া নেই — শুধু তোমার নিজের শ্বাস।</div>
  </div>`,
  senior: {
    title: "এখনই করো — The 30-Second Reset",
    body: "<p>এই মুহূর্তে বসে আছো? এক মিনিট সময় নাও:<br><strong>১.</strong> নাক দিয়ে দ্রুত শ্বাস নাও (ছোট)<br><strong>২.</strong> আরেকটু বেশি নাক দিয়ে নাও (ছোট)<br><strong>৩.</strong> মুখ দিয়ে লম্বা করে ছাড়ো<br><strong>৪.</strong> ৩-৫ বার করো<br><br>কেমন লাগলো? এটাই physiological sigh। প্রতিদিন ৩বার করো — সকালে, দুপুরে, রাতে। এক সপ্তাহে তুমি পার্থক্য টের পাবে।</p>"
  }
});
