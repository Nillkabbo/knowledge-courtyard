// ════════════════════════════════════════
// জ্ঞানের কারিগর — DOORS 1-5
// Reading/Thinking/Writing: Why Reading Fails → How Great Minds Read
// All claims backed by named researchers and biographical sources
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: WHY MOST READING FAILS ══
doors.push({
  num:1, icon:"📖", color:"#f59e0b", name:"ছিদ্র বালতির কক্ষ",
  subtitle:"The Leaking Bucket", tech:"Why 90% of Reading Is Forgotten (Ebbinghaus, 1885)",
  spirit:"যাওয়া পানি — বহন কিন্তু ধরে রাখা নয়",
  secret:"Ebbinghaus (১৮৮৫) প্রমাণ করেছিলেন — পড়ার ২ সপ্তাহ পর ৯০% ভুলে যাই। চোখ দিয়ে দেখা = পানি বহন করা ছিদ্র বালতিতে। কিন্তু সমাধান আছে — active reading, note-taking, spaced repetition। পড়া শেষ নয় — ধরে রাখাই শুরু। যে ধরে রাখে, সে জানে। যে শুধু পড়ে, সে বহন করে।",
  recall:{
    q:"Ebbinghaus-র ভুলে যাওয়ার বক্ররেখা কী বলে?",
    qen:"What does Ebbinghaus forgetting curve say?",
    a:"২ সপ্তাহে ৯০% ভুলে যাই। Ebbinghaus (১৮৮৫)। চোখ দিয়ে পড়া = ছিদ্র বালতিতে পানি। সমাধান: active reading, note-taking, spaced repetition। ধরে রাখাই আসল কাজ।",
    aen:"90% forgotten in 2 weeks. Ebbinghaus (1885). Reading with eyes = water in leaking bucket. Fix: active reading, notes, spaced repetition. Retention is the real work."
  },
  story:`<p class="scene-setting">১৮৮৫ সাল। জার্মানি। মনোবিজ্ঞানী হারমান এবিংহাউস (Hermann Ebbinghaus) একটা অদ্ভুত পরীক্ষা করলেন। তিনি অর্থহীন শব্দের তালিকা মুখস্থ করে সময় ধরে কতটা ভুলে যান তা গণনা করলেন। ফলাফল স্তম্ভিত করা — ১ ঘণ্টায় ৫০% ভুলে গেলেন। ১ দিনে ৭০%। ১ সপ্তাহে ৮০%। ২ সপ্তাহে ৯০%। এটাই Ebbinghaus Forgetting Curve — মানুষের স্মৃতির সবচেয়ে নির্মম সত্য।</p>
<p class="scene-setting en">1885. Germany. Psychologist Hermann Ebbinghaus did a strange experiment. He memorized lists of meaningless syllables and tracked how much he forgot over time. The results were staggering — in 1 hour: 50% forgotten. In 1 day: 70%. In 1 week: 80%. In 2 weeks: 90%. This is the Ebbinghaus Forgetting Curve — the most brutal truth about human memory.</p>

<div class="dialogue">তুমি ভাবো — আমি তো বই পড়েছি! কিন্তু ২ সপ্তাহ পর কতটা মনে আছে? Ebbinghaus বলেন — ১০%। ৯০% গেছে। তুমি বই পড়েছ কিন্তু জ্ঞান ধরে রাখোনি। পানি বহন করেছ — ছিদ্র বালতিতে। এটাই প্যাসিভ রিডিং — চোখ চলে, মস্তিষ্ক ধরে না। কিন্তু সমাধান আছে। ছিদ্র বন্ধ করা যায়।</div>
<div class="dialogue en">"You think — I read the book! But how much remains after 2 weeks? Ebbinghaus says — 10%. 90% is gone. You read but didn't retain knowledge. You carried water — in a leaking bucket. This is passive reading — eyes move, brain doesn't hold. But there's a fix. The holes can be plugged."</div>

<table class="kv-table"><tr><th>সময় (Ebbinghaus, 1885)</th><th>মনে থাকে</th><th>ভুলে যাই</th></tr>
<tr><td class="hl">এখন</td><td>১০০%</td><td>০%</td></tr>
<tr><td class="hl">১ ঘণ্টা</td><td>~৪৪%</td><td>~৫৬%</td></tr>
<tr><td class="hl">১ দিন</td><td>~৩৩%</td><td>~৬৭%</td></tr>
<tr><td class="hl">৬ দিন</td><td>~২৫%</td><td>~৭৫%</td></tr>
<tr><td class="hl">৩১ দিন</td><td>~২১%</td><td>~৭৯%</td></tr></table>
<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>সতর্ক পাঠ:</strong> এই সঠিক শতাংশ প্রচলিত কিন্তু পুরোপুরি নির্ভরযোগ্য নয় — Ebbinghaus-এর গবেষণা ছিল N=১ (নিজের উপর), nonsense syllables দিয়ে। বাস্তব তথ্যে curve-এর আকৃতি ভিন্ন। তবে মূল নীতি — "ব্যবধানে না-পুনরাবৃত্তি করলে দ্রুত ভুলে যাই" — সুপ্রতিষ্ঠিত। "গত বছর একটা বই পড়েছি" = কার্যত নতুন করে পড়া, যদি না retention-কৌশল ব্যবহার করো।</div></div>

<table class="kv-table"><tr><th>Passive reading (ভুলে যাওয়া)</th><th>Active reading (ধরে রাখা)</th></tr>
<tr><td>চোখ শব্দ scan করে</td><td>মন শব্দ প্রশ্ন করে</td></tr>
<tr><td>নোট নেই, আর ফিরে দেখে না</td><td>প্রতি section-এ নোট, spaced re-read</td></tr>
<tr><td>যা জানে তার সাথে সংযোগ নেই</td><td>যা জানে তার সাথে যুক্ত করে</td></tr>
<tr><td>retention: ~১০%</td><td>retention: ~৭০-৯০%</td></tr></table>

<div class="callout tip"><span class="co-icon">🔌</span><div><strong>ছিদ্র বন্ধের ৩ উপায়:</strong> ① <strong>Active engagement</strong> (Maryanne Wolf, 2018 — deep reading আলাদা brain network জাগায়): প্রশ্ন করো, সংযোগ করো, মূল্যায়ন করো। ② <strong>Spaced repetition</strong>: Day 1 → 2 → 7 → 30 → 90 review, প্রতিবার forgetting curve সমতল হয়। ③ <strong>Testing effect</strong> (Roediger & Karpicke, 2006): re-read ৩ বার = ৪২% retention; একবার পড়ে test = ৫৬%। নিজেকে test করা re-read-কে হারায়।</div></div>

<div class="callout info"><span class="co-icon">🎯</span><div><strong>Retention = Comprehension * Engagement * Repetition</strong> — যেকোনো factor শূন্য হলে retention শূন্য। বেশিরভাগ পাঠকের comprehension ✓ কিন্তু engagement ✗ ও repetition ✗ → retention ০। লক্ষ্য "এ বছর ৫০ বই" নয়, "এ বছর ৫ বই থেকে গভীর শেখা।" (Naval: "কম বই পড়ো, বেশি যত্নে; ভালোগুলো ৫-১০ বার পুনরায় পড়ো।")</div></div>

<div class="diagram">
  <div class="diag-title">ছিদ্র বালতি — Passive Reading যা ধরে রাখে না</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <!-- bucket -->
    <path d="M 180 70 L 200 200 L 360 200 L 380 70 Z" class="cell" style="fill:rgba(245,158,11,.08);stroke:#f59e0b;stroke-width:2"/>
    <!-- water level dropping -->
    <path d="M 196 100 L 364 100 L 358 195 L 202 195 Z" fill="rgba(91,158,255,.18)" stroke="#5b9eff" stroke-width="1"/>
    <!-- holes leaking -->
    ${[220,280,340].map((x,i)=>`<circle cx="${x}" cy="${140+i*15}" r="4" fill="#ff6b35"/><path d="M ${x} ${144+i*15} q 8 8 4 18" fill="none" stroke="#5b9eff" stroke-width="1.5" opacity=".6"/>`).join('')}
    <!-- labels -->
    <text class="lbl-sm" x="280" y="60" fill="#f59e0b" style="font-weight:700">পড়া হয়েছে (১০০%)</text>
    <text class="lbl-sm" x="280" y="115" fill="#5b9eff">ধরে রাখা (~১০%)</text>
    <text class="lbl-hot" x="395" y="155">ছিদ্র = passive</text>
    <text class="lbl-sm" x="395" y="170" fill="#9290a8" style="font-size:9px">no notes, no recall</text>
    <text class="lbl-sm" x="280" y="220" fill="#5e5c74">৯০% পড়ার ২ সপ্তাহ পর ফোটা ফোটা গলে যায় — যাওয়া পানি</text>
  </svg>
  <div class="diag-cap">চোখ দিয়ে পড়া = ছিদ্র বালতিতে পানি ঢালা। ৯০% গলে যায়। সমাধান বালতি বদলানো নয় — ছিদ্র বন্ধ করা: active engagement, note-taking, spaced repetition, testing effect।</div>
</div>

<div class="code-block"># ── STEP 1: How to read so you remember ──
# Evidence-based reading retention techniques.

# THREE WAYS TO PLUG THE FORGETTING LEAK:

# 1. ACTIVE ENGAGEMENT (Maryanne Wolf, 2018)
#    → Deep reading activates different brain networks than skimming
#    → Ask questions while reading: "Why is this true?"
#    → Connect to what you already know
#    → Evaluate: "Do I agree? What's the evidence?"

# 2. SPACED REPETITION
#    → Day 1 → 2 → 7 → 30 → 90 review intervals
#    → Each review flattens the forgetting curve
#    → Tools: Anki, RemNote, Quizlet

# 3. TESTING EFFECT (Roediger & Karpicke, 2006)
#    → Re-read 3 times = 42% retention after 1 week
#    → Read once + test = 56% retention after 1 week
#    → Testing yourself BEATS re-reading every time

# NAVAL RAVIKANT: "Read fewer books, more carefully.
#   Re-read the good ones 5-10 times."

# PYTHON (reading retention tracker):
import datetime

class ReadingTracker:
    """Track books and schedule spaced reviews."""
    def __init__(self):
        self.books = {}  # title → {first_read, reviews, understanding}

    def add_book(self, title):
        self.books[title] = {
            "first_read": datetime.date.today(),
            "reviews": [],
            "understanding": 0,  # 1-5 self-rated
        }

    def schedule_review(self, title):
        """Spaced repetition schedule based on Ebbinghaus."""
        intervals = [1, 2, 7, 30, 90]  # days
        first = self.books[title]["first_read"]
        schedule = []
        for interval in intervals:
            review_date = first + datetime.timedelta(days=interval)
            schedule.append(review_date.strftime("%Y-%m-%d"))
        return schedule

    def review(self, title, understanding_level):
        """Log a review and update understanding."""
        self.books[title]["reviews"].append(datetime.date.today())
        self.books[title]["understanding"] = understanding_level

tracker = ReadingTracker()
tracker.add_book("Designing Data-Intensive Applications")
schedule = tracker.schedule_review("Designing Data-Intensive Applications")
print("Spaced review schedule:")
for i, date in enumerate(schedule, 1):
    print(f"  Review {i}: {date}")

# THE NUMBERS:
# → 90% of what you read is forgotten in 2 weeks (Ebbinghaus, 1885)
# → Without spaced repetition: 10% retention
# → With spaced repetition: 80-90% retention
# → Active reading + testing + spaced repetition = near-perfect retention</div>

<div class="code-block"># ── STEP 2: Adler's 4 levels of reading ──
# From elementary to syntopical.

# MORTIMER ADLER: "How to Read a Book" (1940, revised 1972)

adler_levels = {
    "1. ELEMENTARY (basic literacy)": {
        "question": "What does the sentence say?",
        "skill": "Basic reading comprehension",
        "when": "Everyone can do this",
    },
    "2. INSPECTIONAL (skimming)": {
        "question": "What is this book about? Is it worth reading?",
        "skill": "Title, table of contents, preface, index, first/last chapters",
        "when": "Before committing to deep read",
    },
    "3. ANALYTICAL (deep reading)": {
        "question": "What is the author's thesis? Is it true?",
        "skill": "Outline the argument, define key terms, evaluate evidence",
        "when": "Important books that change your thinking",
    },
    "4. SYNTOPICAL (comparative reading)": {
        "question": "How do multiple authors address the same topic?",
        "skill": "Read 5+ books on same topic, compare arguments, synthesize",
        "when": "Mastery of a subject area",
    },
}

for level, details in adler_levels.items():
    print(f"\n{level}")
    print(f"  Question: {details['question']}")
    print(f"  Skill: {details['skill']}")
    print(f"  When: {details['when']}")

# THE INSPECTIONAL READING PROTOCOL (15 minutes):
# 1. Read the title + subtitle (what does the author promise?)
# 2. Read the table of contents (structure of the argument)
# 3. Read the preface/introduction (author's purpose)
# 4. Read the first and last chapters (thesis + conclusion)
# 5. Skim 2-3 middle chapters (depth and style)
# → Then decide: deep read, skim, or skip?

# ANALYTICAL READING QUESTIONS (while reading):
# 1. What is the book about as a whole? (theme)
# 2. What is being said in detail? (key arguments)
# 3. Is the book true, in whole or part? (evaluate evidence)
# 4. What of it? (so what? how does this change my thinking?)

# SYNTOPICAL READING (mastery level):
# → Read 5-10 books on the same topic
# → Create a bibliography
# → Identify the controversies (where authors disagree)
# → Define the issues (what are the key questions?)
# → Analyze the arguments (each author's position)
# → Synthesize your own view (informed by all sources)
# → This is how PhD-level expertise is built</div>

<div class="code-block"># ── STEP 3: Zettelkasten note-taking system ──
# Building a second brain that connects ideas.

# ZETTELKASTEN (Niklas Luhmann, 70+ books, 400+ articles):

# THREE TYPES OF NOTES:

note_types = {
    "FLEETING NOTES": {
        "purpose": "Quick ideas, anytime, anywhere",
        "format": "Scratch pad, phone, napkin",
        "action": "Review daily, convert or discard within 48h",
        "example": "Idea: 'Attention is all you need' applies to learning too",
    },
    "LITERATURE NOTES": {
        "purpose": "What the author said (in your words)",
        "format": "Short, own words, with source reference",
        "action": "Write while reading, not after",
        "example": "Newport (2016): Deep work requires distraction-free focus. 90-min blocks optimal. (p. 64)",
    },
    "PERMANENT NOTES": {
        "purpose": "YOUR ideas, connecting to existing knowledge",
        "format": "One idea per note, 1-3 sentences, linked to others",
        "action": "Write daily, link to related notes",
        "example": "Deep work + spaced repetition = compound learning. Focused study blocks with spaced review maximize retention beyond either technique alone.",
    },
}

for note_type, details in note_types.items():
    print(f"\n{note_type}:")
    for key, value in details.items():
        print(f"  {key}: {value}")

# THE ZETTELKASTEN WORKFLOW:
# 1. CAPTURE: Fleeting notes throughout the day
# 2. PROCESS: Convert fleeting → literature notes (when reading)
# 3. CONNECT: Create permanent notes that LINK to existing notes
# 4. REVIEW: Read linked notes, discover new connections
# 5. SYNTHESIZE: Cluster related notes → articles, chapters, books

# LINKING IS THE KEY:
# → Each permanent note links to 1-3 other notes
# → Notes form a GRAPH of interconnected ideas
# → New ideas emerge from connections you didn't plan
# → Luhmann produced 58,000 notes → 70+ books from this system

# TOOLS:
# → Obsidian (most popular, local markdown files)
# → Roam Research (web-based, graph view)
# → Notion (database-style)
# → Analog: index cards (Luhmann's original method)

# PYTHON (simple Zettelkasten concept):
class Zettelkasten:
    def __init__(self):
        self.notes = {}  # id → {content, links}

    def add_note(self, note_id, content, links=None):
        self.notes[note_id] = {
            "content": content,
            "links": links or [],
        }
        # Add backlinks:
        for link_id in (links or []):
            if link_id in self.notes:
                self.notes[link_id]["links"].append(note_id)

    def find_connections(self, note_id, depth=2):
        """Find all notes connected to this one (graph traversal)."""
        visited = set()
        to_visit = [(note_id, 0)]
        while to_visit:
            current, d = to_visit.pop(0)
            if current in visited or d > depth:
                continue
            visited.add(current)
            for link in self.notes.get(current, {}).get("links", []):
                to_visit.append((link, d + 1))
        return visited

zk = Zettelkasten()
zk.add_note("001", "Deep work requires 90-min focus blocks")
zk.add_note("002", "Spaced repetition flattens forgetting curve", ["001"])
zk.add_note("003", "Active recall > re-reading for retention", ["002", "001"])
print("Connected to note 003:", zk.find_connections("003"))</div>

<div class="code-block"># ── STEP 4: Feynman technique and great books ──
# Learn by teaching. Read the best.

# FEYNMAN TECHNIQUE (4 steps):
# 1. CHOOSE: Pick a concept you want to learn
# 2. EXPLAIN: Write an explanation as if teaching a 12-year-old
# 3. IDENTIFY GAPS: Where did you struggle? What couldn't you explain?
# 4. SIMPLIFY + ANALOGIZE: Refine using simpler language and analogies

feynman_example = """
CONCEPT: Gradient Descent

STEP 2 (Explain simply):
"Imagine you're blindfolded on a mountain and want to reach the
bottom (lowest point = minimum error). You feel the slope under
your feet and take a step downhill. You repeat: feel slope, step
downhill. Eventually you reach the bottom. That's gradient descent.
The 'slope' is the gradient, 'step size' is learning rate."

STEP 3 (Identify gaps):
- Could I explain why learning rate matters? (too high = overshoot)
- Could I explain local vs global minimum? (might get stuck in valley)
- Could I explain stochastic gradient descent? (sample subset of data)

STEP 4 (Simplify):
"Learning rate = how big your steps are. Too big: you step over
the valley. Too small: it takes forever. Just right: smooth descent."
"""

print(feynman_example)

# GREAT MINDS STARTER KIT (books worth re-reading 5+ times):

great_books = {
    "Thinking": [
        "Thinking, Fast and Slow (Kahneman)",
        "Poor Charlie's Almanack (Munger)",
        "The Beginning of Infinity (Deutsch)",
    ],
    "Systems": [
        "Thinking in Systems (Meadows)",
        "Designing Data-Intensive Applications (Kleppmann)",
        "The Pragmatic Programmer (Hunt & Thomas)",
    ],
    "Learning": [
        "How to Read a Book (Adler)",
        "Make It Stick (Brown et al.)",
        "A Mind for Numbers (Oakley)",
    ],
    "Life": [
        "Meditations (Marcus Aurelius)",
        "Man's Search for Meaning (Frankl)",
        "Atomic Habits (Clear)",
    ],
}

print("GREAT BOOKS STARTER KIT:")
for category, books in great_books.items():
    print(f"\n  {category}:")
    for book in books:
        print(f"    • {book}")

# READING STRATEGY:
# → 3 books at a time: 1 technical, 1 non-fiction, 1 fiction
# → Re-read great books (compounding: each re-read reveals new layers)
# → Take notes (literature notes → permanent notes)
# → Discuss with others (solidifies understanding)
# → Apply: turn knowledge into action within 1 week</div>

<div class="code-block"># ── STEP 5: Learning how to learn ──
# Meta-learning: the skill that multiplies all others.

# BARBARA OAKLEY: "A Mind for Numbers" + "Learning How to Learn" (Coursera)

# TWO MODES OF THINKING:
# FOCUSED MODE: concentrated, analytical, step-by-step
#   → Good for: practicing known techniques, deep work
#   → Brain: prefrontal cortex, tight neural pathways

# DIFFUSE MODE: relaxed, creative, big-picture
#   → Good for: insight, creativity, connecting ideas
#   → Brain: widespread neural networks
#   → Triggered by: walking, showering, sleeping, daydreaming

# THE POMODORO-CYCLE:
# 25 min focused → 5 min diffuse (walk, stretch) → repeat
# Alternating modes → better learning than pure focus

# CHUNKING: break complex skills into small "chunks"
# → Don't try to learn "Python" all at once
# → Learn: variables → loops → functions → classes → decorators
# → Each chunk: practice until automatic, then move on
# → Automatic chunks free up working memory for higher-level thinking

# ILLUSION OF COMPETENCE:
# → Reading code and understanding ≠ being able to write it
# → Watching tutorial ≠ being able to do it yourself
# → Solution: ACTIVE practice (close the tutorial, build from memory)

# INTERLEAVING (mix practice types):
# → Don't do 50 sorting problems in a row
# → Mix: sorting + graph + DP + string problems
# → Forces your brain to SELECT the right approach (not just apply one)
# → Better transfer to real problems (which don't announce their type)

# DELIBERATE PRACTICE (Ericsson):
# → Not just repetition — TARGETED practice at your weak points
# → Identify weakness → design practice that targets it → feedback → repeat
# → Example: bad at dynamic programming? Do 20 DP problems, analyze patterns

# PYTHON (learning tracker):
class LearningTracker:
    def __init__(self):
        self.skills = {}  # skill → {level, hours, last_practiced}

    def practice(self, skill, hours, difficulty):
        if skill not in self.skills:
            self.skills[skill] = {"level": 0, "hours": 0, "sessions": 0}
        s = self.skills[skill]
        s["hours"] += hours
        s["sessions"] += 1
        s["last_practiced"] = datetime.date.today()

        # Level up based on deliberate practice:
        if difficulty == "challenging" and s["hours"] % 10 == 0:
            s["level"] += 1
            print(f"  🎉 {skill} leveled up to {s['level']}!")

    def status(self):
        for skill, data in self.skills.items():
            print(f"  {skill}: Level {data['level']}, "
                  f"{data['hours']}h, {data['sessions']} sessions")

tracker = LearningTracker()
for _ in range(5):
    tracker.practice("System Design", 2, "challenging")
tracker.practice("Dynamic Programming", 3, "challenging")
tracker.status()</div>

<div class="code-block"># ── STEP 6: Knowledge craftsmanship best practices ──
# Building a second brain that lasts.

best_practices = [
    "Read actively (ask questions, take notes while reading)",
    "Use spaced repetition (Anki for permanent retention)",
    "Test yourself (active recall > re-reading)",
    "Build a Zettelkasten (interconnected permanent notes)",
    "Apply the Feynman technique (explain to a 12-year-old)",
    "Re-read great books (5-10x for compounding insight)",
    "Alternate focused and diffuse modes (pomodoro)",
    "Chunk skills (master one piece before moving on)",
    "Interleave practice (mix problem types for better transfer)",
    "Deliberate practice (target weaknesses, not just repeat)",
    "Teach others (the best way to learn is to teach)",
    "Write about what you learn (blog, docs, notes)",
    "Connect new knowledge to existing (link notes)",
    "Apply within 1 week (knowledge → action → feedback)",
    "Build in public (share learning, get feedback, compound reputation)",
]

print("KNOWLEDGE CRAFTSMANSHIP BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# THE COMPOUNDING KNOWLEDGE FORMULA:
# ┌──────────────────┬──────────────────────────────────┐
# │ Input            │ Processing                    │
# ├──────────────────┼──────────────────────────────────┤
# │ Read great books │ Adler's analytical reading    │
# │ Take literature  │ Convert to permanent notes    │
# │   notes          │   (Zettelkasten)              │
# │ Review on spaced │ Anki / RemNote (retention)    │
# │   schedule       │                              │
# │ Test yourself    │ Active recall (not re-read)   │
# │ Explain to others│ Feynman technique             │
# │ Apply knowledge  │ Real projects → feedback loop │
# └──────────────────┴──────────────────────────────────┘
#
# → Each step compounds: 1.01^365 = 37x improvement per year
# → Knowledge is the ONE investment that never depreciates
# → Your second brain works while you sleep, play, rest</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৯০%</div><div class="sc-label">২ সপ্তাহে ভুলে যাওয়া (Ebbinghaus)</div></div>
<div class="stat-card"><div class="sc-num">১৮৮৫</div><div class="sc-label">Ebbinghaus-এর মূল পরীক্ষা</div></div>
<div class="stat-card"><div class="sc-num">৪২% → ৫৬%</div><div class="sc-label">re-read বনাম test (Roediger 2006)</div></div>
<div class="stat-card"><div class="sc-num">~৭০-৯০%</div><div class="sc-label">active reading-এ retention</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Passive reading (ছিদ্র বালতি)</div>চোখ শব্দ scan করে, নোট নেই, ফিরে দেখে না, যা জানে তার সাথে সংযোগ নেই। retention ~১০%। "এ বছর ৫০ বই পড়েছি" — কিন্তু ২ সপ্তাহ পর প্রায় কিছুই মনে নেই। বই পড়া হলো, জ্ঞান ধরে রাখা হলো না।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Active reading (ছিদ্র বন্ধ)</div>প্রতি section-এ নোট, প্রশ্ন করো, যা জানে তার সাথে যুক্ত করো, spaced re-read, নিজেকে test করো। retention ~৭০-৯০%। "এ বছর ৫ বই গভীর পড়েছি" — প্রতিটি থেকে স্থায়ী জ্ঞান। কম পড়ো, বেশি ধরো।</div>
</div>

<div class="dialogue">যাওয়া পানি — pouring water, like water that flows through and leaves nothing। কুরআনে আল্লাহ বলেন — "তাদের উপমা এমন যেন তারা বৃষ্টিতে আচ্ছাদিত — কিন্তু কিছু নেই।" পড়াও তেমনি — চোখ দিয়ে পড়ে, মস্তিষ্কে কিছু থাকে না। যাওয়া পানি। কিন্তু কুরআন আরও বলে — "যারা জ্ঞান দেওয়া হয়েছে, তাদের অন্তর সত্যের জন্য পিপাসার্ত।" পিপাসা = গভীর পড়া। যে গভীর পড়ে, সে ধরে রাখে। যে শুধু চোখ চালায়, সে যাওয়া পানি। প্রথম দরজার সত্য — পড়া শেষ নয়, ধরে রাখাই শুরু।</div>
<div class="dialogue en">"Jaoa pani — pouring water, like water that flows through leaving nothing. Allah says — 'Their example is as if they were covered by rain — but have nothing.' Reading too — eyes read, brain holds nothing. Jaoa pani. But the Quran also says — 'Those given knowledge, their hearts thirst for truth.' Thirst = deep reading. One who reads deeply, retains. One who merely moves eyes, is jaoa pani. The first door's truth — reading is not the end, retention is the beginning."</div>`,
  senior:{
    title:"Stop Leaking — 3 Habits Today",
    body:`<p><strong>Right now, for the last book/article you read:</strong></p><p>১. Write ৩ things you remember WITHOUT looking. (Testing effect — this is harder than you think.)</p><p>২. If you can't remember ৩ — you were passive reading. That's the leaking bucket.</p><p><strong>Starting today:</strong></p><p>১. After every chapter: write ২-৩ sentences summarizing what you learned. (Active engagement)</p><p>২. Review those notes ২৪ hours later. Then ৭ days later. (Spaced repetition)</p><p>৩. Explain what you read to someone. If you can't explain it simply, you didn't understand it. (Feynman technique — Door ৪)</p><p><strong>Naval's rule:</strong> "Read fewer books, more carefully. Re-read the great ones 5-10 times."</p>`
  }
});

// ══ DOOR 2: ADLER'S FOUR LEVELS ══
doors.push({
  num:2, icon:"🔍", color:"#fcd34d", name:"চার স্তরের কক্ষ",
  subtitle:"The Four Levels", tech:"Adler's How to Read a Book (1940/1972)",
  spirit:"তারাবি — ধাপে ধাপে গভীরে যাওয়া",
  secret:"Mortimer Adler (১৯৪০) দেখালেন — পড়ার ৪ স্তর আছে। Elementary (শব্দ চেনা), Inspectional (৫ মিনিটে সারাংশ), Analytical (গভীর বিশ্লেষণ), Syntopical (একাধিক বইয়ের সংশ্লেষণ)। অধিকাংশ মানুষ শুধু ১ম স্তরে আটকে। সফল পাঠক ৪র্থ স্তরে পৌঁছায়। তারাবি — ধাপে ধাপে গভীরে।",
  recall:{
    q:"Adler-এর ৪ স্তর কী কী?",
    qen:"What are Adler's 4 levels?",
    a:"Elementary (শব্দ চেনা), Inspectional (৫ মিনিট সারাংশ), Analytical (গভীর বিশ্লেষণ), Syntopical (বহু বইয়ের সংশ্লেষণ)। Adler (১৯৪০)। অধিকাংশ ১ম স্তরে আটকে। সফল পাঠক ৪র্থে। তারাবি — ধাপে ধাপে।",
    aen:"Elementary (word recognition), Inspectional (5-min skim), Analytical (deep analysis), Syntopical (multi-book synthesis). Adler (1940). Most stuck at level 1. Successful readers reach level 4."
  },
  story:`<p class="scene-setting">১৯৪০ সাল। শিকাগো বিশ্ববিদ্যালয়। দার্শনিক মর্টিমার অ্যাডলার (Mortimer Adler) একটা বই প্রকাশ করলেন — How to Read a Book। সবাই হাসল — পড়তে শেখায় কে? কিন্তু Adler বললেন — তুমি যা করছ তা আসলে পড়া নয়। শব্দ চেনা। প্রকৃত পড়া ৪টা স্তরে। তুমি প্রথম স্তরে আটকে। ১৯৭২ সালে তিনি বইটা আপডেট করলেন — Charles Van Doren-এর সাথে। আজও এটা পড়ার পদ্ধতির বাইবেল।</p>
<p class="scene-setting en">1940. University of Chicago. Philosopher Mortimer Adler published a book — How to Read a Book. Everyone laughed — who needs to learn reading? But Adler said — what you're doing isn't reading. It's word recognition. True reading has 4 levels. You're stuck at the first. In 1972, he updated it with Charles Van Doren. It remains the bible of reading methodology today.</p>

<div class="dialogue">Ebbinghaus বলেছিলেন — কেন ভুলে যাই। Adler বলেন — কারণ তুমি আসলে পড়ছই না। তুমি শব্দ দেখছ। পড়ার ৪টা স্তর আছে — প্রতিটা আগেরটার চেয়ে গভীর। যে প্রথম স্তরে আটকে, সে বলে — আমি বই পড়েছি। কিন্তু সে শুধু শব্দ দেখেছে। যে চতুর্থ স্তরে পৌঁছায়, সে বইয়ের সাথে কথা বলে, প্রশ্ন করে, সংযুক্ত করে।</div>
<div class="dialogue en">"Ebbinghaus said — why we forget. Adler says — because you're not actually reading. You're seeing words. Reading has 4 levels — each deeper than the last. One stuck at level 1 says — I read the book. But they just saw words. One who reaches level 4 talks WITH the book, questions it, connects it."</div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">Level ১ · মাস</div><div class="tl-title">📗 Elementary</div><div class="tl-body">"শব্দ পড়তে পারো?" — অক্ষর/শব্দ চেনা, আক্ষরিক অর্থ। এটা decoding, reading নয়। বেশিরভাগ মানুষ এখানেই আটকে থাকে।</div></div>
<div class="tl-step"><div class="tl-when">Level ২ · ৫-১৫ মিনিট/বই</div><div class="tl-title">🔍 Inspectional (skim)</div><div class="tl-body">"বইটা কী নিয়ে?" — title/subtitle, preface, TOC, index, key অধ্যায়ের প্রথম-শেষ প্যারা, শেষ ২-৩ পাতা। উদ্দেশ্য: পুরো পড়ার যোগ্য কিনা ঠিক করা। <em>১০টা skim করে ১টা গভীর পড়ার মতো খোঁজো।</em></div></div>
<div class="tl-step"><div class="tl-when">Level ৩ · বছর</div><div class="tl-title">🧠 Analytical (গভীর)</div><div class="tl-body">"বইটার মানে কী?" — Structure (মূল থিম ১ বাক্যে) → Interpretation (key term ও proposition) → Criticism (বোঝার পরই দ্বিমত) → Synthesis। Adler-এর দ্বিমতের ৪ উপায়: uninformed / misinformed / illogical / incomplete — অনুভূতি নয়, নির্দিষ্ট প্রমাণ লাগে।</div></div>
<div class="tl-step"><div class="tl-when">Level ৪ · দশক</div><div class="tl-title">🕸️ Syntopical</div><div class="tl-body">"একাধিক বই কীভাবে সম্পর্কিত?" — সর্বোচ্চ স্তর। একই বিষয়ে বহু বই পড়ে সংশ্লেষণ (bibliography → skim সব → key প্রশ্ন → মতভেদ ম্যাপ → নিজের মত)। PhD/গবেষক/বড় লেখকরা যা করেন।</div></div>
</div>
<div class="callout tip"><span class="co-icon">📖</span><div><strong>আজই শুরু করতে পারো Level ২ থেকে</strong> — পড়ার আগে skim করো; বেশিরভাগ বই Level ৩-এর যোগ্য নয়, তাই গভীর পড়া রাখো সেই বইগুলোর জন্য যেগুলো সত্যিই গুরুত্বপূর্ণ। <strong>Adler-এর সোনালি নিয়ম:</strong> "'একমত/দ্বিমত' বোলো না যতক্ষণ না বলতে পারো 'আমি বুঝেছি।'"</div></div>

<div class="diagram">
  <div class="diag-title">Adler-এর ৪ স্তর — পিরামিড, যত উপরে তত গভীর</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <!-- pyramid layers (bottom widest = most common) -->
    <polygon points="120,200 440,200 400,160 160,160" class="cell-hot" style="stroke:#ff6b35"/>
    <text class="lbl-sm" x="280" y="185" fill="#ff6b35" style="font-weight:700">১ · Elementary (শব্দ চেনা)</text>
    <text class="lbl-sm" x="280" y="225" fill="#5e5c74" style="font-size:9px">অধিকাংশ মানুষ এখানেই আটকে — decoding, reading নয়</text>

    <polygon points="160,160 400,160 360,120 200,120" class="cell-cyan" style="stroke:#3dd6c4"/>
    <text class="lbl-sm" x="280" y="145" fill="#3dd6c4" style="font-weight:700">২ · Inspectional (skim, ৫-১৫ মিনিট)</text>

    <polygon points="200,120 360,120 320,80 240,80" class="cell-good" style="stroke:#52c41a"/>
    <text class="lbl-sm" x="280" y="105" fill="#52c41a" style="font-weight:700">৩ · Analytical (গভীর)</text>

    <polygon points="240,80 320,80 280,45" class="node-purple" style="fill:rgba(179,127,235,.25);stroke:#b37feb"/>
    <text class="lbl-sm" x="280" y="68" fill="#b37feb" style="font-weight:700">৪ · Syntopical</text>
    <text class="lbl-sm" x="280" y="35" fill="#b37feb" style="font-size:9px">বহু বইয়ের সংশ্লেষণ</text>
  </svg>
  <div class="diag-cap">নিচের স্তর সবচেয়ে বেশি মানুষ, উপরের স্তর সবচেয়ে কম। যে চতুর্থ স্তরে পৌঁছায় — PhD/গবেষক/বড় লেখক — সে বইয়ের সাথে কথা বলে, প্রশ্ন করে, সংযুক্ত করে। তারাবি — ধাপে ধাপে গভীরে।</div>
</div>

<div class="code-block">Adler-এর ৪ স্তর — কখন কোনটা:

  Level ১ · Elementary — শব্দ চেনা (decoding)
    বেশিরভাগ মানুষ এখানেই আটকে। এটা reading নয়।

  Level ২ · Inspectional — skim (৫-১৫ মিনিট/বই)
    title/subtitle, preface, TOC, index, key অধ্যায়ের
    প্রথম-শেষ প্যারা, শেষ ২-৩ পাতা।
    উদ্দেশ্য: পুরো পড়ার যোগ্য কিনা ঠিক করা।
    → ১০টা skim করে ১টা গভীর পড়ার মতো খোঁজো।

  Level ৩ · Analytical — গভীর বিশ্লেষণ
    Structure (মূল থিম ১ বাক্যে) → Interpretation (key term/proposition)
    → Criticism → Synthesis।
    Adler-এর দ্বিমতের ৪ উপায়: uninformed / misinformed /
    illogical / incomplete — অনুভূতি নয়, নির্দিষ্ট প্রমাণ লাগে।

  Level ৪ · Syntopical — বহু বইয়ের সংশ্লেষণ
    bibliography → skim সব → key প্রশ্ন → মতভেদ ম্যাপ →
    নিজের মত। PhD/গবেষকরা যা করেন।

  সোনালি নিয়ম: "একমত/দ্বিমত" বোলো না যতক্ষণ না
  বলতে পারো "আমি বুঝেছি।"</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">১৯৪০</div><div class="sc-label">"How to Read a Book" প্রথম প্রকাশ</div></div>
<div class="stat-card"><div class="sc-num">১৯৭২</div><div class="sc-label">Van Doren-এর সাথে updated edition</div></div>
<div class="stat-card"><div class="sc-num">৪ স্তর</div><div class="sc-label">Elementary → Inspectional → Analytical → Syntopical</div></div>
<div class="stat-card"><div class="sc-num">Level ৪</div><div class="sc-label">PhD/গবেষক/বড় লেখকদের স্তর</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ Level ১-এ আটকে</div>"আমি বই পড়েছি" — কিন্তু শুধু শব্দ দেখেছ। decoding, reading নয়। বইয়ের সাথে কথা বলো না, প্রশ্ন করো না, সংযুক্ত করো না। ফল: ২ সপ্তাহ পর ৯০% ভুল (Door 1)। "পড়েছি" মনে হয়, জানো না।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Level ৩-৪-এ পৌঁছাও</div>skim করে যোগ্য বই বেছে নাও (Level ২), গভীর পড়ো (Level ৩), একাধিক বই সংশ্লেষণ করো (Level ৪)। বইয়ের সাথে কথা বলো — প্রশ্ন, দ্বিমত, সংযোগ। তারাবি — ধাপে ধাপে গভীরে। যে এখানে পৌঁছায়, সে জ্ঞান গড়ে।</div>
</div>

<div class="dialogue">তারাবি — gradual progression, like the tarawih prayer built in layers। রমজানে তারাবি ধীরে ধীরে গড়ে — প্রতিদিন একটু বেশি। পড়াও তেমনি — প্রতিটা স্তর ধীরে আসে। প্রথম স্তর = শিশু। দ্বিতীয় = কিশোর। তৃতীয় = প্রাপ্তবয়স্ক। চতুর্থ = প্রবীণ। কেউ রাতারাতি চতুর্থ স্তরে পৌঁছায় না। কিন্তু প্রতিটা ধাপে গভীরতা বাড়ে। Adler দেখালেন — পড়া একটা শিল্প, শিল্পে সময় লাগে। তারাবি — ধাপে ধাপে গভীরে।</div>
<div class="dialogue en">"Tarawi — gradual progression, like the tarawih prayer built in layers. In Ramadan, tarawih grows slowly — a bit more each day. Reading too — each level comes slowly. Level 1 = child. Level 2 = adolescent. Level 3 = adult. Level 4 = elder. Nobody reaches level 4 overnight. But depth grows at each step. Adler showed — reading is an art, art takes time. Tarawi — step by step deeper."</div>`,
  senior:{
    title:"Adler's Method — Try This Weekend",
    body:`<p><strong>Pick a book you've been meaning to read. Do this:</strong></p><p><strong>Step ১ (Level ২ — ১৫ min):</strong> Read title, subtitle, preface, TOC, index. Read first and last paragraph of each chapter. Read the final ৩ pages. Now answer: "What is this book about?" in ১ sentence.</p><p><strong>Step ২ (Decision):</strong> Based on your skim — is this book worth Level ৩ (full analytical reading)? If NO — you just saved ১০ hours. If YES — proceed.</p><p><strong>Step ৩ (Level ৩):</strong> Read slowly. After each chapter: (a) what's the main point in ১ sentence? (b) what are the key terms? (c) do I agree or disagree — and WHY (specifically)?</p><p><strong>Adler's golden rule:</strong> "Do not say 'I agree' or 'I disagree' until you can say 'I understand.'" Most disagreements come from misunderstanding, not genuine critique.</p>`
  }
});

// ══ DOOR 3: ZETTELKASTEN ══
doors.push({
  num:3, icon:"📝", color:"#f59e0b", name:"নোটের ভাণ্ডার",
  subtitle:"The Note Vault", tech:"Zettelkasten (Luhmann, 1952-1998)",
  spirit:"হিফজ — সংরক্ষণ, ধরে রাখা",
  secret:"Niklas Luhmann — জার্মান সমাজবিজ্ঞানী। ৪৬ বছরে ৯০,০০০ নোট কার্ড। ফল? ~৫০ বই, ~৫৫০ প্রবন্ধ। কীভাবে? Zettelkasten — slip-box পদ্ধতি। প্রতিটা নোট atomic, সংযুক্ত, স্থায়ী। নোট = শুধু লেখা নয় — চিন্তার সংযোগ। যে সংযুক্ত করে, সে জ্ঞান গড়ে। যে শুধু পড়ে, সে ভুলে।",
  recall:{
    q:"Luhmann-এর Zettelkasten কেন এত শক্তিশালী?",
    qen:"Why is Luhmann's Zettelkasten so powerful?",
    a:"৯০,০০০ নোট → ~৫০ বই, ~৫৫০ প্রবন্ধ। কারণ নোট atomic, সংযুক্ত, স্থায়ী। নোট = চিন্তার সংযোগ। যে সংযুক্ত করে, সে জ্ঞান গড়ে। হিফজ — সংরক্ষণ।",
    aen:"90,000 notes → ~50 books, ~550 articles. Because notes are atomic, linked, permanent. Notes = connections of thought. One who connects, builds knowledge. Hifz — preservation."
  },
  story:`<p class="scene-setting">১৯৫২ সাল। জার্মানি। একজন সরকারি কর্মচারী — নিকলাস লুহমান (Niklas Luhmann)। সন্ধ্যায় সমাজবিজ্ঞান পড়তেন। নোট নিতেন — কিন্তু সাধারণ নোট নয়। প্রতিটা নোট একটা ছোট কার্ডে। প্রতিটা কার্ডে একটা ধারণা। প্রতিটা কার্ড অন্য কার্ডের সাথে সংযুক্ত। ৪৬ বছর ধরে এই কাজ চলল। শেষে? ৯০,০০০ কার্ড। এই কার্ড থেকে ~৫০ বই, ~৫৫০ প্রবন্ধ। তিনি অসাধারণ প্রায়োগিক সমাজবিজ্ঞানী হলেন — শুধু নোট কার্ড দিয়ে।</p>
<p class="scene-setting en">1952. Germany. A civil servant — Niklas Luhmann. In the evenings, he read sociology. He took notes — but not ordinary notes. Each note on a small card. Each card had ONE idea. Each card linked to other cards. This continued for 46 years. Result? 90,000 cards. From these cards: ~50 books, ~550 articles. He became one of the most productive sociologists ever — just from note cards.</p>

<div class="dialogue">Adler বলেছিলেন — ৪ স্তরে পড়ো। কিন্তু আমি বলি — পড়ে যা শিখলে, তা কোথায় রাখবে? মস্তিষ্কে? Ebbinghaus বলেন — ৯০% ভুলে যাবে। খাতায়? খাতা হারিয়ে যায়। Luhmann দেখালেন একটা সিস্টেম — Zettelkasten। নোট শুধু লেখা নয় — চিন্তার জাল। প্রতিটা নোট একটা নোড, প্রতিটা সংযোগ একটা সেতু। জাল বড় হয়, জ্ঞান গভীর হয়।</div>
<div class="dialogue en">"Adler said — read at 4 levels. But I say — once you learn, where do you store it? Brain? Ebbinghaus says — 90% forgotten. Notebook? Notebooks get lost. Luhmann showed a system — Zettelkasten. Notes aren't just writing — they're a web of thought. Each note a node, each connection a bridge. The web grows, knowledge deepens."</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৪৬ বছর</div><div class="sc-label">Luhmann-এর slip-box (1952-98)</div></div>
<div class="stat-card"><div class="sc-num">~৯০,০০০</div><div class="sc-label">নোট কার্ড</div></div>
<div class="stat-card"><div class="sc-num">~৫০</div><div class="sc-label">বই</div></div>
<div class="stat-card"><div class="sc-num">~৫৫০</div><div class="sc-label">প্রবন্ধ</div></div>
</div>
<div class="callout info"><span class="co-icon">🗃️</span><div>Luhmann: "আমি নিজেকে creative মনে করি না — আমি শুধু machine-এর সামনে দাঁড়িয়ে হাতল ঘোরাই।" সৃজনশীলতা এসেছে <strong>সিস্টেম</strong> থেকে, ব্যক্তি থেকে নয়। দিনে ~৫-৬ card।</div></div>

<table class="kv-table"><tr><th>নোটের ৩ ধরন (Ahrens, 2017)</th><th>কী</th></tr>
<tr><td class="hl">Fleeting</td><td>পড়া/জীবনের সময় দ্রুত idea; ১-২ দিনে permanent-এ রূপান্তর বা বাদ</td></tr>
<tr><td class="hl">Literature</td><td>উৎস পড়ার সময় সংক্ষিপ্ত সারাংশ — <em>নিজের ভাষায়</em>, source-সহ</td></tr>
<tr><td class="hl">Permanent</td><td>এক নোটে এক idea (atomic), প্রকাশযোগ্য ভাষায়, বিদ্যমান নোটের সাথে link, dated</td></tr></table>

<table class="kv-table"><tr><th>সাধারণ নোট</th><th>Zettelkasten</th></tr>
<tr><td>খাতায় লেখা, আর দেখা হয় না</td><td>প্রতিটা নোট atomic (এক idea)</td></tr>
<tr><td>নোটের মধ্যে সংযোগ নেই</td><td>নোট পরস্পর linked, cross-referenced</td></tr>
<tr><td>topic-ভিত্তিক, linear (তথ্যের তালিকা)</td><td>idea-ভিত্তিক, network (সংযোগের জাল)</td></tr>
<tr><td>output: কিছুই না</td><td>output: বই, পেপার, insight</td></tr></table>

<div class="callout tip"><span class="co-icon">🔗</span><div><strong>মূল পার্থক্য = CONNECTIONS।</strong> একটা নোট = একটা fact; নোটের network = emergent idea। Luhmann-এর অন্তর্দৃষ্টি: সৃজনশীলতা আসে নোটের মধ্যে <em>অপ্রত্যাশিত</em> সংযোগ থেকে (biology-র নোট economics-এর নোটের সাথে জোড়া → নতুন insight)।</div></div>

<div class="diagram">
  <div class="diag-title">Zettelkasten — নোটের জাল, linear তালিকা নয়</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <!-- LEFT: linear notes (dead) -->
    <text class="lbl-sm" x="120" y="30" fill="#ff6b35">সাধারণ নোট (linear)</text>
    ${[0,1,2,3,4].map(i=>`<rect class="cell-hot" x="60" y="${50+i*30}" width="120" height="22" rx="4"/>`).join('')}
    <text class="lbl-sm" x="120" y="205" fill="#9290a8" style="font-size:9px">খাতায় লেখা, আর দেখা হয় না</text>
    <!-- RIGHT: network (alive) -->
    <text class="lbl-sm" x="400" y="30" fill="#52c41a">Zettelkasten (network)</text>
    ${[ ['A',300,80],['B',400,60],['C',480,100],['D',380,130],['E',300,150],['F',440,160] ].map(n=>`<rect class="cell-good" x="${n[1]-20}" y="${n[2]-15}" width="40" height="30" rx="5"/><text class="lbl-sm" x="${n[1]}" y="${n[2]+4}" fill="#52c41a">${n[0]}</text>`).join('')}
    <line class="edge-cyan" x1="320" y1="80" x2="380" y2="60" style="stroke:#52c41a"/>
    <line class="edge-cyan" x1="420" y1="65" x2="465" y2="100" style="stroke:#52c41a"/>
    <line class="edge-cyan" x1="395" y1="115" x2="400" y2="135" style="stroke:#52c41a"/>
    <line class="edge-cyan" x1="365" y1="145" x2="320" y2="150" style="stroke:#52c41a"/>
    <line class="edge-cyan" x1="300" y1="135" x2="300" y2="95" style="stroke:#52c41a"/>
    <line class="edge-cyan" x1="420" y1="170" x2="460" y2="165" style="stroke:#52c41a"/>
    <line class="edge-cyan" x1="465" y1="115" x2="430" y2="155" style="stroke:#52c41a;opacity:.5"/>
    <text class="lbl-sm" x="400" y="205" fill="#9290a8" style="font-size:9px">প্রতিটা নোট atomic + linked → emergent idea</text>
    <text class="lbl-sm" x="280" y="222" fill="#5e5c74">প্রতিটা নতুন নোট অন্তত ১টা বিদ্যমান নোটের সাথে link করো — এখানেই insight</text>
  </svg>
  <div class="diag-cap">সাধারণ নোট = linear তালিকা, মরা। Zettelkasten = network, জীবন্ত। সৃজনশীলতা আসে অপ্রত্যাশিত সংযোগ থেকে — biology-র নোট economics-এর সাথে জোড়া হলে নতুন insight জন্মায়।</div>
</div>

<div class="code-block">Zettelkasten — ৩ ধরনের নোট (Ahrens, 2017):

  FLEETING (ক্ষণস্থায়ী)
    পড়া/জীবনের সময় দ্রুত idea।
    ১-২ দিনে permanent-এ রূপান্তর বা বাদ।

  LITERATURE (সাহিত্যিক)
    উৎস পড়ার সময় সংক্ষিপ্ত সারাংশ।
    নিজের ভাষায়, source-সহ।

  PERMANENT (স্থায়ী) — মূল ইউনিট
    এক নোটে এক idea (atomic)।
    প্রকাশযোগ্য ভাষায়।
    বিদ্যমান নোটের সাথে link। dated।

  সোনালি নিয়ম: প্রতিটা নতুন নোট অন্তত ১টা
  বিদ্যমান নোটের সাথে link করো।
  এখানেই insight লুকায়।

  Luhmann-এর হার: দিনে ৫-৬ permanent note।
  দিনে ১টা হলেও = বছরে ৩৬৫ = একটা বইয়ের মতো।</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ সাধারণ নোট (মরা)</div>খাতায় লেখা, আর কখনো দেখা হয় না। topic-ভিত্তিক, linear। নোটের মধ্যে সংযোগ নেই। output: কিছুই না। বছরে ১০টা খাতা ভর্তি হয়, কিন্তু কোনো idea জন্ম নেয় না। তথ্যের কবরখানা।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ Zettelkasten (জীবন্ত)</div>প্রতিটা নোট atomic (এক idea), পরস্পর linked, cross-referenced। idea-ভিত্তিক network। output: বই, পেপার, insight। অপ্রত্যাশিত সংযোগে নতুন idea জন্মায়। Luhmann: ৯০,০০০ নোট → ~৫০ বই। হিফজ — সংযুক্ত সংরক্ষণ।</div>
</div>

<div class="callout info"><span class="co-icon">🛠️</span><div><strong>আধুনিক টুল:</strong> Obsidian (free, local, সবচেয়ে জনপ্রিয়), Logseq, Notion, Heptabase, Capacities/Tana। AI-PKM (2024-26): Obsidian Smart Connections/Copilot, Notion AI, NotebookLM (multi-doc synthesis)। ⚠️ AI ভুল সংযোগ বা অস্তিত্বহীন citation বানাতে পারে — verify করো। <strong>শুরু:</strong> প্রতিটা নতুন নোট অন্তত ১টা বিদ্যমান নোটের সাথে link করো — এখানেই insight।</div></div>

<div class="dialogue">হিফজ — preservation, memorization, the act of keeping। কুরআনে আল্লাহ বলেন — "নিশ্চয় আমরা কুরআন নাজিল করেছি এবং নিশ্চয় আমরাই এর সংরক্ষক।" (১৫:৯)। সংরক্ষণ = হিফজ। Zettelkasten-ও হিফজ — জ্ঞান সংরক্ষণ করা। কিন্তু শুধু সংরক্ষণ নয় — সংযুক্ত করা। যে হিফজ করে, সে ধরে রাখে। যে সংযুক্ত করে, সে গড়ে। Luhmann শুধু পড়েননি — তিনি হিফজ করেছেন, সংযুক্ত করেছেন, গড়েছেন। ৯০,০০০ নোট = একটা সংরক্ষিত জ্ঞানের মস্তিষ্ক। হিফজ — শুধু মুখস্থ নয়, সংযুক্ত সংরক্ষণ।</div>
<div class="dialogue en">"Hifz — preservation, memorization, the act of keeping. Allah says — 'We sent down the Quran and We are its preserver.' (15:9). Preservation = hifz. Zettelkasten too — preserving knowledge. But not just preserving — connecting. One who does hifz, retains. One who connects, builds. Luhmann didn't just read — he preserved, connected, built. 90,000 notes = a preserved knowledge brain. Hifz — not just memorization, connected preservation."</div>`,
  senior:{
    title:"Start Your Zettelkasten — Today",
    body:`<p><strong>Tool:</strong> Obsidian (free, obsidian.md) or analog index cards.</p><p><strong>Start with ৩ note types:</strong></p><p>১. <strong>Fleeting:</strong> Quick ideas while reading. Review within ২৪ hours.</p><p>২. <strong>Literature:</strong> Notes from what you read, in YOUR words, with source.</p><p>৩. <strong>Permanent:</strong> One atomic idea per note. Link to existing notes. Written as if for publication.</p><p><strong>The golden rule:</strong> Every new note MUST link to at least ১ existing note. This forces you to find connections — that's where insight lives.</p><p><strong>Luhmann's rate:</strong> ৫-৬ permanent notes per day. Even ১ per day = ৩৬৫ per year = a book's worth of ideas.</p>`
  }
});

// ══ DOOR 4: FEYNMAN TECHNIQUE ══
doors.push({
  num:4, icon:"🧠", color:"#fcd34d", name:"ফাইনম্যান কক্ষ",
  subtitle:"The Feynman Chamber", tech:"The Feynman Learning Technique",
  spirit:"বায়ান — স্পষ্ট বাক্য, প্রকাশ",
  secret:"রিচার্ড ফাইনম্যান (Richard Feynman) — নোবেলজয়ী পদার্থবিজ্ঞানী। তার শেখার পদ্ধতি: সহজ ভাষায় ব্যাখ্যা করো। যেখানে আটকাও — সেখানে তোমার ঘাটতি। ফিরে যাও, শেখো, আবার ব্যাখ্যা করো। যতক্ষণ না ১২ বছরের শিশু বুঝবে। এটাই ফাইনম্যান টেকনিক — বুঝতে না পারার অস্ত্র। বায়ান — স্পষ্ট বাক্যের নূর।",
  recall:{
    q:"ফাইনম্যান টেকনিকের ৪ ধাপ কী?",
    qen:"What are the 4 steps of the Feynman technique?",
    a:"১. সহজ ভাষায় ব্যাখ্যা করো (যেন শিশু বুঝবে)। ২. যেখানে আটকাও — সেই ঘাটতি। ৩. ফিরে যাও, শেখো। ৪. আবার ব্যাখ্যা করো, সরল করো। বায়ান — স্পষ্ট বাক্য।",
    aen:"1. Explain simply (as if to a child). 2. Where you get stuck — that's the gap. 3. Go back, learn. 4. Explain again, simplify. Bayan — clear speech."
  },
  story:`<p class="scene-setting">রিচার্ড ফাইনম্যান (Richard Feynman, 1918-1988) — নোবেলজয়ী পদার্থবিজ্ঞানী। কিন্তু তার আসল প্রতিভা শেখা নয় — শেখানো। Caltech-এ তার ছাত্ররা বলত — ফাইনম্যান যেকোনো জটিল ধারণা এত সহজ করে ব্যাখ্যা করত যে মনে হতো সেটা সহজই। কিন্তু ফাইনম্যান বলতেন — সহজ নয়। আমি নিজে বুঝি বলে সহজ করতে পারি। যে বোঝে না, সে জটিল করে। যে বোঝে, সে সহজ করে।</p>
<p class="scene-setting en">Richard Feynman (1918-1988) — Nobel Prize-winning physicist. But his real genius wasn't learning — it was teaching. At Caltech, students said — Feynman could explain any complex idea so simply it seemed easy. But Feynman said — it's not easy. I can make it simple because I understand it myself. One who doesn't understand, complicates. One who understands, simplifies.</p>

<div class="dialogue">Zettelkasten বলেছিলেন — নোট নাও, সংযুক্ত করো। কিন্তু আমি বলি — নোট নিলেও বুঝতে না পারলে কিছু হবে না। কীভাবে জানবে বুঝেছ কি না? ফাইনম্যান দেখালেন একটা পরীক্ষা — সহজ ভাষায় ব্যাখ্যা করো। যেখানে আটকাও, সেখানে তুমি বুঝতে পারোনি। এটাই ফাইনম্যান টেকনিক — বোঝার আসল পরীক্ষা।</div>
<div class="dialogue en">"Zettelkasten said — take notes, connect them. But I say — even with notes, if you don't understand, nothing happens. How do you know if you understand? Feynman showed a test — explain it simply. Where you get stuck, you don't understand. This is the Feynman technique — the real test of comprehension."</div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">ধাপ ১</div><div class="tl-title">✏️ Concept বাছো</div><div class="tl-body">যা "জানো" তা খালি পাতায় লেখো।</div></div>
<div class="tl-step"><div class="tl-when">ধাপ ২</div><div class="tl-title">🧒 সহজ করে ব্যাখ্যা</div><div class="tl-body">১২ বছরের শিশুকে বোঝাচ্ছ যেন — jargon নয়, analogy। যেমন quantum entanglement: "দুটো জাদুর কয়েন — একটা New York-এ heads হলে Tokyo-রটা তৎক্ষণাৎ tails।"</div></div>
<div class="tl-step"><div class="tl-when">ধাপ ৩</div><div class="tl-title">🕳️ গ্যাপ চিহ্নিত করো</div><div class="tl-body">যেখানে সহজে বলতে পারলে না, jargon দিয়ে লুকালে, আটকে গেলে — সেটাই তোমার ঘাটতি। "জানি কিন্তু বলতে পারি না" = জানো না।</div></div>
<div class="tl-step"><div class="tl-when">ধাপ ৪</div><div class="tl-title">🔁 ফিরে গিয়ে শেখো</div><div class="tl-body">উৎসে ফিরে সেই গ্যাপ শেখো, আবার ব্যাখ্যা করো — যতক্ষণ না পুরোটা সহজে বয়ে যায়।</div></div>
</div>
<div class="callout info"><span class="co-icon">🔬</span><div><strong>কেন কাজ করে:</strong> Illusion of competence (Koriat & Bjork, 2005) — সাবলীল পড়া বোঝার বিভ্রম দেয়। Testing effect (Roediger & Karpicke, 2006) — শূন্য থেকে ব্যাখ্যা তৈরি re-reading-ের চেয়ে ~৩৩% ভালো retention। Metacognition (Flavell, 1979) — নিজের জানা যাচাই; Feynman technique = বাধ্যতামূলক metacognition।</div></div>

<div class="diagram">
  <div class="diag-title">Feynman Loop — বোঝার আসল পরীক্ষা</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowAmberD4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L6,4 L0,8" fill="#fcd34d"/></marker>
    </defs>
    ${[ ['১ · বাছো','concept খালি পাতায়',120,60,'#fcd34d'], ['২ · ব্যাখ্যা','১২ বছরের শিশুকে',290,60,'#52c41a'], ['৩ · গ্যাপ','যেখানে আটকাও',440,60,'#ff6b35'], ['৪ · ফিরে যাও','শেখো, আবার ব্যাখ্যা',290,160,'#5b9eff'] ].map(s=>`<rect x="${s[2]-65}" y="${s[3]-22}" width="130" height="44" rx="8" style="fill:${s[4]}22;stroke:${s[4]}"/><text class="lbl-sm" x="${s[2]}" y="${s[3]-3}" fill="${s[4]}" style="font-weight:700">${s[0]}</text><text class="lbl-sm" x="${s[2]}" y="${s[3]+13}" fill="#9290a8" style="font-size:9px">${s[1]}</text>`).join('')}
    <line class="edge-amber" x1="185" y1="60" x2="225" y2="60" marker-end="url(#arrowAmberD4)"/>
    <line class="edge-amber" x1="355" y1="60" x2="375" y2="60" marker-end="url(#arrowAmberD4)"/>
    <line class="edge-amber" x1="420" y1="82" x2="330" y2="138" marker-end="url(#arrowAmberD4)"/>
    <line class="edge-amber" x1="250" y1="155" x2="170" y2="92" marker-end="url(#arrowAmberD4)"/>
    <text class="lbl-sm" x="290" y="118" fill="#fcd34d">যতক্ষণ না সহজে বয়</text>
    <text class="lbl-sm" x="280" y="210" fill="#5e5c74">"জানি কিন্তু বলতে পারি না" = জানো না। সহজে ব্যাখ্যা করতে পারলেই বুঝেছ।</text>
  </svg>
  <div class="diag-cap">Feynman টেকনিক একটা লুপ — বাছো → সহজে ব্যাখ্যা → গ্যাপ ধরা → ফিরে গিয়ে শেখা → আবার ব্যাখ্যা। যতক্ষণ না পুরোটা সহজে বয়ে যায়। এটাই বোঝার আসল পরীক্ষা — বায়ান, স্পষ্ট প্রকাশ।</div>
</div>

<div class="code-block">Feynman Technique — ৪ ধাপ (এখনই করো):

  একটা কনসেপ্ট বাছো যা তুমি "জানো":
    ১. খালি পাতার উপরে concept-টা লেখো।
    ২. ১২ বছরের শিশুকে বোঝাচ্ছ যেন — jargon নয়, analogy।
       (quantum entanglement: "দুটো জাদুর কয়েন — একটা
        NY-এ heads হলে Tokyo-রটা তৎক্ষণাৎ tails।")
    ৩. যেখানে আটকাও, jargon দিয়ে লুকাও, বলতে না পারো —
       সেটাই তোমার ঘাটতি। চিহ্নিত করো।
    ৪. উৎসে ফিরে সেই গ্যাপ শেখো, আবার ব্যাখ্যা করো —
       যতক্ষণ না পুরোটা সহজে বয়ে যায়।

  Zettelkasten-এর সাথে মিল: permanent note = Feynman explanation।
  এক idea, সহজ ভাষায়, নিজের কথায়। সেটাই বোঝার পরীক্ষা।</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">~৩৩%</div><div class="sc-label">বেশি retention re-reading-এর চেয়ে (Roediger 2006)</div></div>
<div class="stat-card"><div class="sc-num">১২ বছর</div><div class="sc-label">শিশুর বয়স — target audience</div></div>
<div class="stat-card"><div class="sc-num">১৯৬৪</div><div class="sc-label">Feynman-এর Cornell lecture (Gates "Project Tuva")</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ বিভ্রমের বোঝা</div>"জানি কিন্তু বলতে পারি না" — এটা জানা নয়, শুধু চেনা। সাবলীল পড়া বোঝার বিভ্রম দেয় (Koriat & Bjork 2005)। jargon দিয়ে ঘাটতি লুকানো যায় — কিন্তু শিশুকে বোঝানো যায় না। যে ভান করে, সে পরীক্ষায় বা প্রয়োগে ধরা পড়ে।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ বায়ান — স্পষ্ট প্রকাশ</div>সহজ ভাষায় ব্যাখ্যা করো। যেখানে আটকাও, সে তোমার ঘাটতি — ফিরে যাও, শেখো, আবার ব্যাখ্যা। যতক্ষণ না ১২ বছরের শিশু বুঝবে। যে বায়ান করতে পারে, সে-ই জানে। Feynman: "যে বোঝে না, সে জটিল করে। যে বোঝে, সে সহজ করে।"</div>
</div>
<div class="callout tip"><span class="co-icon">💬</span><div><strong>জীবনী-প্রমাণ:</strong> Gleick-এর "Genius" (1992) — Feynman ঘণ্টার পর ঘণ্টা ফলাফল নিজে নতুন করে derive করতেন ("তাদের জ্ঞান এত ভঙ্গুর!")। Bill Gates: Feynman-এর 1964 Cornell lecture-এর distribution-স্বত্ব কিনে "Project Tuva" নাম দেন — "the best teacher I never had।" <em>("সহজে ব্যাখ্যা করতে না পারলে যথেষ্ট বোঝোনি" — প্রায়ই Einstein-কে দায়ী করা হয়, কিন্তু তার প্রমাণ নেই; নীতিটি তবু সঠিক, আর এটাই Feynman করতেন।)</em></div></div>

<div class="dialogue">বায়ান — clear speech, expression। কুরআনে আল্লাহ বলেন — "তিনি মানুষকে শিখিয়েছেন বায়ান — স্পষ্ট বাক্য।" (৫৫:৩-৪)। বায়ান হলো স্পষ্ট করে প্রকাশ করার ক্ষমতা — জটিলকে সহজ করা। ফাইনম্যান টেকনিক-ও বায়ান — যা বুঝেছ, তা স্পষ্ট করে প্রকাশ করো। যেখানে আটকাও, সেখানে ঘাটতি। যে বায়ান করতে পারে, সে বোঝে। যে পারে না, সে ভান করে। বায়ান — বোঝার আসল পরীক্ষা। কুরআনে বায়ান আল্লাহর নিয়ামত — কথা স্পষ্ট করার ক্ষমতা। ফাইনম্যান দেখালেন — যে স্পষ্ট করতে পারে, সে-ই জানে।</div>
<div class="dialogue en">"Bayan — clear speech, expression. Allah says — 'He taught man bayan — clear speech.' (55:3-4). Bayan is the ability to express clearly — making complex simple. The Feynman technique too is bayan — express clearly what you understand. Where you get stuck, there's the gap. One who can do bayan, understands. One who can't, pretends. Bayan — the real test of understanding. In the Quran, bayan is Allah's gift — the power to speak clearly. Feynman showed — one who can speak clearly, truly knows."</div>`,
  senior:{
    title:"Feynman Technique — Right Now",
    body:`<p><strong>Pick one thing you "know" from your field. Do this:</strong></p><p>১. Write the concept at the top of a blank page.</p><p>২. Explain it as if to a 12-year-old. No jargon. Use analogies.</p><p>৩. When you get stuck — STOP. That's your knowledge gap. Mark it.</p><p>৪. Go back to the source. Learn the gap. Come back.</p><p>৫. Repeat until the whole concept flows without hesitation.</p><p><strong>Combine with Zettelkasten:</strong> The permanent note you write IS a Feynman explanation. One idea, explained simply, in your own words. That's a permanent note that's also a test of understanding.</p><p><strong>The Feynman test for books:</strong> After finishing a book, write a 1-paragraph explanation of the WHOLE book as if explaining to a friend. If you can't — you didn't understand the book. Go back.</p>`
  }
});

// ══ DOOR 5: HOW GREAT MINDS READ ══
doors.push({
  num:5, icon:"⚡", color:"#f59e0b", name:"মহামানুষের পাঠ",
  subtitle:"How Great Minds Read", tech:"Reading Habits of Buffett, Musk, Gates, Munger, Naval, Holiday",
  spirit:"আকল — প্রথম সূত্র, মৌলিক চিন্তা",
  secret:"Buffett: দিনে ৫০০ পৃষ্ঠা — \"জ্ঞান compound interest-এর মতো জমে।\" Musk: প্রথম সূত্রের জন্য পড়েন। Gates: Think Week — বছরে ২ বার একা কুটিরে পড়েন। Munger: দৈনিক ৫+ ঘণ্টা, mental models গড়েন। Naval: যা ভালোবাসেন তা-ই পড়েন, ৫-১০ বার পুনরায়। Holiday: প্রতিটা বই থেকে নোট কার্ড। সবার একটা মিল — পড়া তাদের জীবনের অবিচ্ছেদ্য অংশ, বিনোদন নয়। কারণ তাদের আসল কাজ সিদ্ধান্ত নেওয়া — আর পড়াই সিদ্ধান্তের সবচেয়ে বড় কাঁচামাল।",
  recall:{
    q:"Buffett, Musk, Gates, Munger, Naval — তাদের পড়ার পদ্ধতিতে মিল কী? কেন সব billionaire পড়েন?",
    qen:"What's common about how Buffett, Musk, Gates, Munger, Naval read? Why do all billionaires read?",
    a:"Buffett: দিনে ৫০০ পৃষ্ঠা (compound interest)। Musk: প্রথম সূত্রের জন্য। Gates: Think Week। Munger: দৈনিক ৫+ ঘণ্টা। Naval: যা ভালোবাসেন, ৫-১০ বার। Holiday: নোট কার্ড। কেন — জ্ঞান compound হয়, তাদের কাজ সিদ্ধান্ত, পড়া active (নোট+প্রয়োগ)। আকল — প্রথম সূত্র।",
    aen:"Buffett: 500 pages/day (compound interest). Musk: for first principles. Gates: Think Week. Munger: daily 5+ hours. Naval: what he loves, 5-10 times. Holiday: note cards. Why — knowledge compounds, their job is decisions, reading is active (notes+apply)."
  },
  story:`<p class="scene-setting">ওমাহা, নেব্রাস্কা। পৃথিবীর অন্যতম ধনী মানুষ Warren Buffett একদল ছাত্রের সামনে দাঁড়িয়ে এক গাদা রিপোর্ট তুলে ধরলেন — "প্রতিদিন এরকম ৫০০ পৃষ্ঠা পড়ো। জ্ঞান এভাবেই কাজ করে — compound interest-এর মতো জমে। তোমরা সবাই এটা পারবে, কিন্তু কথা দিচ্ছি — তোমাদের খুব কম জনই করবে।" তিনি একা নন। Elon Musk — বলেন, আমি মূলত পড়ে শিখেছি; রকেট বানানো শিখেছেন textbook থেকে। Bill Gates — বছরে ৫০+ বই। Charlie Munger — "আমি পাগলের মতো পড়ি।" Naval Ravikant — "পড়াই ultimate meta-skill।" Ryan Holiday — প্রতিটা বই থেকে নোট কার্ড। ভিন্ন ক্ষেত্র, ভিন্ন সাম্রাজ্য — কিন্তু একই অভ্যাস। কাকতালীয়? না।</p>
<p class="scene-setting en">Omaha, Nebraska. Warren Buffett, one of the world's richest people, held up a stack of reports before a group of students — "Read 500 pages like this every day. That's how knowledge works — it builds up, like compound interest. All of you can do it, but I guarantee not many of you will." He's not alone. Elon Musk — says, I learned mainly through reading; learned rocketry from textbooks. Bill Gates — 50+ books a year. Charlie Munger — "I read obsessively." Naval Ravikant — "reading is the ultimate meta-skill." Ryan Holiday — note cards from every book. Different fields, different empires — same habit. Coincidence? No.</p>

<div class="dialogue">ফাইনম্যান বলেছিলেন — সহজ করে ব্যাখ্যা করো। কিন্তু আমি বলি — সহজ করার জন্য প্রথমে গভীরে যেতে হবে। গভীরে যাওয়ার উপায়? পড়া। কিন্তু কীভাবে? মহামানুষরা কীভাবে পড়েন? তাদের পদ্ধতি আমাদের শেখায় — পড়া শুধু সময় কাটানো নয়। পড়া জীবন গড়ার হাতিয়ার।</div>
<div class="dialogue en">"Feynman said — explain simply. But I say — to simplify, you must first go deep. How to go deep? Reading. But how? How do great minds read? Their methods teach us — reading isn't passing time. Reading is a tool for building a life."</div>

<table class="kv-table"><tr><th>মহামানুষ</th><th>পদ্ধতি</th><th>সূত্র</th></tr>
<tr><td class="hl">Warren Buffett</td><td>দিনে ~৫০০ পৃষ্ঠা (report, filing, বই); কর্মদিবসের ~৮০% পড়া ও চিন্তা; ক্যালেন্ডার প্রায় ফাঁকা রাখেন — পড়ার সময় রক্ষা করতে</td><td>Snowball (Schroeder, 2008), HBO doc (2017)</td></tr>
<tr><td class="hl">Elon Musk</td><td>First-principles reading — মৌলিক বিজ্ঞান/textbook; মতামত নয়, fundamentals; নতুন domain-এ mental model প্রয়োগ</td><td>Vance (2015), Isaacson (2023)</td></tr>
<tr><td class="hl">Bill Gates</td><td>~৫০ বই/বছর; বছরে ২ বার "Think Week" — কুটিরে একা, ১৫-২০ বই + নোট; margin note, gatesnotes-এ review</td><td>gatesnotes.com</td></tr>
<tr><td class="hl">Charlie Munger</td><td>দিনে ৫+ ঘণ্টা, বহু-শাস্ত্র; ~১০০ mental model-এর latticework (physics, biology, psychology, economics)</td><td>Poor Charlie's Almanack (2005)</td></tr>
<tr><td class="hl">Naval Ravikant</td><td>যা ভালোবাসো পড়ো; ভালো বই ৫-১০ বার পুনরায়; জোর করে শেষ কোরো না; foundational বই</td><td>Almanack of Naval (2020)</td></tr>
<tr><td class="hl">Ryan Holiday</td><td>ভৌত index-card system (Robert Greene থেকে) — key passage + নিজের ভাবনা, topic-অনুযায়ী box; কার্ডই বইয়ের outline</td><td>Holiday-র blog</td></tr></table>
<div class="callout info"><span class="co-icon">⚡</span><div><strong>সবার এক মিল:</strong> পড়া তাদের জীবনের অবিচ্ছেদ্য অংশ — বিনোদন নয়। তারা <em>আকল দিয়ে</em> পড়ে (তথ্য সংগ্রহ নয়, mental model গড়া) — Munger: "সব বড় শাস্ত্রের বড় idea জানো ও নিয়মিত ব্যবহার করো; বেশিরভাগ মানুষ এক model দিয়ে সব করতে চায়।"</div></div>
<div class="callout tip"><span class="co-icon">🎒</span><div><strong>Starter kit:</strong> Naval দিয়ে শুরু করো (যা ভালোবাসো পড়ো) → Munger-ের শৃঙ্খলা যোগ করো (দৈনিক পড়া) → Holiday-র নোট-টেকিং যোগ করো (topic-ভিত্তিক কার্ড)।</div></div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">গোপন সূত্র ১</div><div class="tl-title">📈 জ্ঞান compound হয়</div><div class="tl-body">Buffett: "জ্ঞান compound interest-এর মতো জমে।" আজকের পড়া কালকের পড়াকে সহজ করে — model-এ model জোড়ে। ১০ বছরের দৈনিক পাঠক আর অ-পাঠকের ব্যবধান রৈখিক নয় — সূচকীয়। তাই তারা তাড়াতাড়ি শুরু করে, কখনো থামে না।<br><span style="opacity:.7">Buffett: "Knowledge builds up like compound interest." Today's reading makes tomorrow's easier — models stack on models. After 10 years, the gap between daily reader and non-reader isn't linear — it's exponential. So they start early and never stop.</span></div></div>
<div class="tl-step"><div class="tl-when">গোপন সূত্র ২</div><div class="tl-title">🎯 তাদের কাজ = সিদ্ধান্ত, ঘণ্টা নয়</div><div class="tl-body">CEO/investor-এর leverage আসে ভালো সিদ্ধান্ত থেকে, বেশি ঘণ্টা কাজ থেকে নয়। বছরে ২-৩টা সঠিক বড় সিদ্ধান্ত = বিলিয়ন ডলার। পড়া হলো সিদ্ধান্তের কাঁচামাল। তাই Buffett দিনের ৮০% পড়েন — এটা কাজ ফাঁকি নয়, এটাই কাজ।<br><span style="opacity:.7">A CEO/investor's leverage comes from better decisions, not more hours. 2-3 right big calls a year = billions. Reading is the raw material of decisions. Buffett reads 80% of his day — that's not avoiding work, that IS the work.</span></div></div>
<div class="tl-step"><div class="tl-when">গোপন সূত্র ৩</div><div class="tl-title">🕸️ বহু-শাস্ত্র mental model</div><div class="tl-body">Munger-এর latticework — physics, biology, psychology, economics থেকে ~১০০ model। এক শাস্ত্রের মানুষ hammer হাতে সব কিছুকে পেরেক দেখে। বহু-শাস্ত্রের পাঠক সমস্যাকে ৫ দিক থেকে দেখে — এটাই তাদের "অলৌকিক" বিচারবুদ্ধির উৎস।<br><span style="opacity:.7">Munger's latticework — ~100 models from physics, biology, psychology, economics. A one-discipline person with a hammer sees only nails. The multi-disciplinary reader sees a problem from 5 angles — that's the source of their "uncanny" judgment.</span></div></div>
<div class="tl-step"><div class="tl-when">গোপন সূত্র ৪</div><div class="tl-title">✍️ Active পড়া — নোট, পুনরায়, প্রয়োগ</div><div class="tl-body">তারা কেউ scroll করার মতো পড়ে না। Gates: margin note + review লেখা। Holiday: index card। Naval: ৫-১০ বার re-read। Musk: পড়ে rocket বানানো — চূড়ান্ত প্রয়োগ। Book 26-এর ভাষায় — তারা ছিদ্র বালতি (Door ১) মেরামত করেছে।<br><span style="opacity:.7">None of them read like scrolling. Gates: margin notes + written reviews. Holiday: index cards. Naval: re-reads 5-10 times. Musk: reads then builds rockets — ultimate application. In Book 26's language — they fixed the leaking bucket (Door 1).</span></div></div>
<div class="tl-step"><div class="tl-when">গোপন সূত্র ৫</div><div class="tl-title">🛡️ সময় রক্ষা করা</div><div class="tl-body">Buffett-এর ক্যালেন্ডার প্রায় ফাঁকা। Gates বছরে ২ সপ্তাহ জঙ্গলের কুটিরে অদৃশ্য। পড়ার সময় তাদের কাছে meeting-এর চেয়ে দামি — তারা এটা schedule করে ও পাহারা দেয়। যে জিনিস ক্যালেন্ডারে নেই, তা ঘটে না।<br><span style="opacity:.7">Buffett's calendar is nearly empty. Gates disappears to a forest cabin 2 weeks a year. Reading time is worth more to them than meetings — they schedule it and guard it. What's not on the calendar doesn't happen.</span></div></div>
</div>
<div class="callout info"><span class="co-icon">💰</span><div><strong>কেন এটা billionaire-দের মধ্যে common?</strong> কারণ যত উপরে ওঠো, কাজ তত কম "করা" আর তত বেশি "জানা ও সিদ্ধান্ত নেওয়া" হয়ে যায়। শ্রমিকের leverage পেশি, engineer-এর leverage কোড, আর capital allocator-এর leverage বিচারবুদ্ধি — যা শুধু পড়া+চিন্তা দিয়েই ধারালো হয়। Munger: "আমার সারা জীবনে এমন কোনো জ্ঞানী মানুষ দেখিনি যে সব সময় পড়ে না — একজনও না।" <em>("In my whole life, I have known no wise people who didn't read all the time — none, zero.")</em></div></div>

<div class="diagram">
  <div class="diag-title">মহামানুষ — ভিন্ন পদ্ধতি, এক মিল</div>
  <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    ${[ ['Buffett','৫০০ পৃষ্ঠা/দিন','জ্ঞান compound হয়','#fcd34d',58], ['Musk','first principles','fundamentals, textbook','#ff6b35',169], ['Gates','Think Week','বছরে ২* কুটিরে একা','#5b9eff',280], ['Munger','৫+ ঘণ্টা/দিন','বহু-শাস্ত্র model','#52c41a',391], ['Naval','যা ভালোবাসো','৫-১০ বার পুনরায়','#b37feb',502] ].map(s=>`<rect class="cell" x="${s[4]-52}" y="50" width="104" height="70" rx="8" style="stroke:${s[3]}"/><text class="lbl-sm" x="${s[4]}" y="73" fill="${s[3]}" style="font-weight:700">${s[0]}</text><text class="lbl-sm" x="${s[4]}" y="92" fill="#e8e6f0" style="font-size:9px">${s[1]}</text><text class="lbl-sm" x="${s[4]}" y="107" fill="#9290a8" style="font-size:8px">${s[2]}</text>`).join('')}
    <!-- convergence: all → আকল -->
    ${[58,169,280,391,502].map(x=>`<line class="edge" x1="${x}" y1="125" x2="280" y2="170" style="stroke:#fcd34d"/>`).join('')}
    <rect class="cell-good" x="200" y="160" width="160" height="34" rx="8"/>
    <text class="lbl" x="280" y="182" fill="#52c41a">আকল দিয়ে পড়া</text>
    <text class="lbl-sm" x="280" y="218" fill="#5e5c74">মিল — পড়া জীবনের অবিচ্ছেদ্য অংশ, বিনোদন নয়। আকল দিয়ে, mental model গড়তে।</text>
  </svg>
  <div class="diag-cap">ভিন্ন মানুষ, ভিন্ন পদ্ধতি — কিন্তু এক মিল: পড়া জীবনের অংশ, বিনোদন নয়। আকল দিয়ে পড়া — তথ্য সংগ্রহ নয়, mental model গড়া। Munger: "বেশিরভাগ মানুষ এক model দিয়ে সব করতে চায়।"</div>
</div>

<div class="code-block">Great Minds Reading — স্টার্টার কিট:

  Naval (শুরু করো এখান থেকে):
    যা ভালোবাসো পড়ো। জোর করে শেষ কোরো না।
    ভালো বই ৫-১০ বার পুনরায় পড়ো।

  + Munger (শৃঙ্খলা যোগ করো):
    দৈনিক ৫+ ঘণ্টা, বহু-শাস্ত্র।
    ~১০০ mental model-এর latticework।

  + Holiday (নোট-টেকিং যোগ করো):
    প্রতিটা বই থেকে index-card।
    topic-ভিত্তিক box। কার্ডই outline।

  + Gates (গভীরতা যোগ করো):
    বছরে ২ বার "Think Week" — কুটিরে একা।
    ১৫-২০ বই + নোট। margin note।

  + Musk (প্রয়োগ যোগ করো):
    fundamentals/textbook, মতামত নয়।
    first-principles → নতুন domain-এ model।

  + Buffett (দীর্ঘমেয়াদ যোগ করো):
    প্রতিদিন পড়ো — volume matters।
    জ্ঞান compound interest-এর মতো জমে।
    ক্যালেন্ডারে পড়ার সময় রক্ষা করো।</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৫০০</div><div class="sc-label">পৃষ্ঠা/দিন — Buffett</div></div>
<div class="stat-card"><div class="sc-num">~৮০%</div><div class="sc-label">কর্মদিবস পড়া+চিন্তা — Buffett</div></div>
<div class="stat-card"><div class="sc-num">~৫০</div><div class="sc-label">বই/বছর — Gates</div></div>
<div class="stat-card"><div class="sc-num">৫+ ঘণ্টা</div><div class="sc-label">দৈনিক পড়া — Munger</div></div>
<div class="stat-card"><div class="sc-num">৫-১০*</div><div class="sc-label">ভালো বই পুনরায় — Naval</div></div>
<div class="stat-card"><div class="sc-num">Think Week</div><div class="sc-label">বছরে ২* কুটিরে একা — Gates</div></div>
</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ ভোক্তা পাঠক</div>পড়া = বিনোদন, সময় কাটানো। যা ইজি পড়ো, মতামত/summary। একবার পড়ে পরের বই। "এ বছর ৫০ বই" — কিন্তু প্রতিটি থেকে কিছু গভীর নয়। mental model গড়ে না। পড়া জীবনকে বদলায় না।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ আকল পাঠক (মহামানুষ)</div>পড়া = জীবনের অবিচ্ছেদ্য অংশ। fundamentals, বহু-শাস্ত্র, নোট, পুনরায়। আকল দিয়ে — mental model গড়া। কম বই, গভীর। Munger: "সব বড় শাস্ত্রের বড় idea জানো ও নিয়মিত ব্যবহার করো।" পড়া জীবন গড়ে।</div>
</div>

<div class="dialogue">আকল — intellect, reason, the faculty of understanding fundamentals। কুরআনে আল্লাহ বলেন — "তারা কি চিন্তা করে না?" আকল হলো মৌলিক সত্য বোঝার ক্ষমতা। মহামানুষরা আকল দিয়ে পড়েন — শুধু তথ্য সংগ্রহ নয়। Buffett: দিনে ৫০০ পৃষ্ঠা — জ্ঞান compound হতে দেন। Musk: মৌলিক বিজ্ঞান থেকে শিখেন। Gates: Think Week-এ গভীরে যান। Munger: mental models গড়েন প্রতিটা ক্ষেত্র থেকে। Naval: যা ভালোবাসেন তা-ই পড়েন, বারবার। Holiday: প্রতিটা বই থেকে নোট কার্ড। সবার মিল — আকল দিয়ে পড়া, শুধু চোখ দিয়ে নয়। আর এটাই আসল গোপন কথা — billionaire হওয়ার পর তারা পড়া শুরু করেননি; পড়তেন বলেই সেই বিচারবুদ্ধি গড়ে উঠেছে যা তাদের সেখানে নিয়ে গেছে।</div>
<div class="dialogue en">"Aql — intellect, reason, the faculty of understanding fundamentals. Allah says — 'Do they not reflect?' Aql is the ability to grasp fundamental truths. Great minds read with aql — not just gathering information. Buffett: 500 pages a day — lets knowledge compound. Musk: learns from fundamental science. Gates: goes deep in Think Week. Munger: builds mental models from every field. Naval: reads what he loves, repeatedly. Holiday: note cards from every book. All share — reading with intellect, not just with eyes. And that's the real secret — they didn't start reading after becoming billionaires; they read their way into the judgment that got them there."</div>`,
  senior:{
    title:"Choose Your Reading Archetype",
    body:`<p><strong>Which great reader are you most like? Which do you want to become?</strong></p><p><strong>Buffett style:</strong> Read high volume daily (reports, filings, primary sources). Protect reading time on your calendar. Play the long game — knowledge compounds like interest. → Best for: investors, strategists, anyone building 10-year advantage.</p><p><strong>Musk style:</strong> Read fundamentals and textbooks. Build mental models. Apply to new domains. → Best for: builders, engineers, entrepreneurs.</p><p><strong>Gates style:</strong> Read broadly. Schedule dedicated deep-reading time (even half a day). Take notes. Synthesize. → Best for: polymaths, leaders, investors.</p><p><strong>Munger style:</strong> Read across disciplines. Extract mental models. Read daily, 5+ hours. → Best for: decision-makers, analysts.</p><p><strong>Naval style:</strong> Read what you love. Re-read the greats 5-10 times. Don't force books. → Best for: self-directed learners, philosophers.</p><p><strong>Holiday style:</strong> Take physical note cards from every book. File by topic. Build a physical knowledge base. → Best for: writers, researchers.</p><p><strong>Mine recommendation:</strong> Start with Naval's approach (read what you love). Add Munger's discipline (daily reading). Add Holiday's note-taking. This is the starter kit.</p>`
  }
});
