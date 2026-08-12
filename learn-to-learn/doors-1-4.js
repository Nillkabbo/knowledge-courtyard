// ════════════════════════════════════════
// শিক্ষার বীজ — DOORS 1-4
// How to Learn: Mindset → Practice
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: GROWTH MINDSET ══
doors.push({
  num:1, icon:"🌱", color:"#52c41a", name:"বীজ সংরক্ষকের কুঠি",
  subtitle:"The Seed Keeper's Hut", tech:"Growth Mindset & Neuroplasticity",
  spirit:"নিয়্যাত — বাড়ার নিয়ত",
  secret:"মস্তিষ্ক স্থির নয় — বদলায়। প্রতিটা চ্যালেঞ্জ নতুন সংযোগ তৈরি করে। Fixed mindset = আটকে যাওয়া। Growth mindset = বাড়তে থাকা।",
  recall:{
    q:"কেন কিছু বীজ মাটিতে পড়লেও বাড়ে না?",
    qen:"Why do some seeds not grow even when planted?",
    a:"কারণ বীজের ভেতরে বাড়ার ইচ্ছা থাকতে হয় — নিয়ত। 'আমি পারি না' ভাবলে মস্তিষ্ক নতুন সংযোগ তৈরি করে না। 'আমি এখনও শিখিনি' ভাবলে — বাড়ে। Neuroplasticity: মস্তিষ্ক পেশির মতো — ব্যবহার করলে শক্ত হয়।",
    aen:"Because the seed must have the will to grow — intention. 'I can't' stops the brain from making new connections. 'I haven't learned yet' — grows. Neuroplasticity: the brain is like a muscle — use strengthens it."
  },
  story:`
<p class="scene-setting">প্রথম বাগান। একটা ছোট কুঠি, চারদিকে মাটির বসতি, বীজের থলি ঝুলছে। মাটির গন্ধ, ভেজা পাতার সুবাস। মালি আমিনা বসে আছেন — বয়স্ক, হাত মাটিতে দাগযুক্ত, চোখে উষ্ণতা। হাতে একটা ছোট বীজ। শুকনো, মৃত দেখায়। কিন্তু তিনি বলেন — "ভেতরে একটা গাছ লুকানো আছে।"</p>
<p class="scene-setting en">The first garden. A small hut, surrounded by earthen plots, seed pouches hanging. Smell of soil, scent of wet leaves. Mali Amina sits — elderly, hands earth-stained, warmth in her eyes. A small seed in her hand. Dry, looks dead. But she says — "Inside hides a tree."</p>

<div class="dialogue">দেখো এই বীজ। ছোট, শুকনো, মৃত মনে হয়। কিন্তু সঠিক মাটি, সঠিক পানি, সঠিক আলো পেলে — একটা বিশাল গাছ হয়। তোমার মস্তিষ্কও এমন। এখন ছোট মনে হয়। কিন্তু চ্যালেঞ্জ পেলে — বাড়ে।</div>
<div class="dialogue en">"Look at this seed. Small, dry, seems dead. But given the right soil, water, light — it becomes a vast tree. Your brain too. It seems small now. But challenged — it grows."</div>

<div class="dialogue">কিন্তু একটা শর্ত আছে। বীজ যদি বিশ্বাস করে — "আমি বাড়তে পারি না" — সে বাড়ে না। তুমি যদি বিশ্বাস করো — "আমি পারি না" — তোমার মস্তিষ্ক বাড়ে না। কিন্তু যদি বিশ্বাস করো — "আমি এখনও শিখিনি, কিন্তু শিখব" — মস্তিষ্ক নতুন সংযোগ তৈরি করে। একে বলে growth mindset।</div>
<div class="dialogue en">"But there's one condition. If the seed believes — 'I can't grow' — it doesn't. If you believe — 'I can't' — your brain doesn't grow. But if you believe — 'I haven't learned yet, but I will' — the brain creates new connections. This is called growth mindset."</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">🔒 Fixed Mindset</div>"আমি পারি না।" → মস্তিষ্ক বন্ধ। চ্যালেঞ্জ = হুমকি। ভুল = ব্যর্থতা। অন্যের সাফল্য = হুমকি। "আমি গণিতে খারাপ" — চিরস্থায়ী।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">🌱 Growth Mindset</div>"আমি এখনও শিখিনি।" → মস্তিষ্ক খোলা। চ্যালেঞ্জ = সুযোগ। ভুল = শেখার পথ। অন্যের সাফল্য = অনুপ্রেরণা। "আমি গণিত শিখছি" — প্রক্রিয়া।</div>
</div>

<table class="kv-table"><tr><th>বিজ্ঞান</th><th>কী বলে</th></tr>
<tr><td class="hl">Neuroplasticity</td><td>প্রতিটা নতুন শেখা মস্তিষ্কে নতুন synapse তৈরি করে; বয়স বাধা নয়, মস্তিষ্ক সারাজীবন বদলায়</td></tr>
<tr><td class="hl">Myelin</td><td>অনুশীলনে স্নায়ুর উপর myelin জমে → সংকেত দ্রুত যায় (পেশির মতো — ব্যবহারে শক্ত)</td></tr>
<tr><td class="hl">BDNF</td><td>মস্তিষ্কের "সার" — ব্যায়াম ও শেখা বাড়ায়; চ্যালেঞ্জ = সার</td></tr></table>
<div class="callout tip"><span class="co-icon">🌱</span><div><strong>Carol Dweck (Stanford):</strong> growth-mindset শিক্ষার্থীরা কঠিন কাজে বেশি সফল — কারণ তারা ভুলকে শেখার অংশ মনে করে। "আমি পারি না" নয়, "আমি এখনো শিখিনি।"</div></div>

<div class="svg-diagram"><svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
<text x="130" y="24" text-anchor="middle" fill="#ff6b35" font-size="13" font-weight="700" font-family="Cinzel,serif">🔒 FIXED</text>
<text x="430" y="24" text-anchor="middle" fill="#95de64" font-size="13" font-weight="700" font-family="Cinzel,serif">🌱 GROWTH</text>
<line x1="280" y1="10" x2="280" y2="205" stroke="rgba(255,255,255,.08)" stroke-width="1"/>
<polygon points="130,50 185,85 165,145 95,145 75,85" fill="none" stroke="rgba(255,107,53,.5)" stroke-width="1.5"/>
<g fill="#ff6b35" opacity=".8"><circle cx="130" cy="50" r="5"/><circle cx="185" cy="85" r="5"/><circle cx="165" cy="145" r="5"/><circle cx="95" cy="145" r="5"/><circle cx="75" cy="85" r="5"/></g>
<text x="130" y="188" text-anchor="middle" fill="#9290a8" font-size="9">বন্ধ ঘের — নতুন সংযোগ নেই</text>
<g stroke="rgba(149,222,100,.55)" stroke-width="1.3">
<line x1="420" y1="42" x2="470" y2="62"/><line x1="470" y1="62" x2="500" y2="110"/><line x1="500" y1="110" x2="470" y2="158"/>
<line x1="470" y1="158" x2="415" y2="172"/><line x1="415" y1="172" x2="360" y2="158"/><line x1="360" y1="158" x2="335" y2="110"/>
<line x1="335" y1="110" x2="360" y2="62"/><line x1="360" y1="62" x2="420" y2="42"/><line x1="420" y1="42" x2="500" y2="110"/>
<line x1="360" y1="62" x2="470" y2="158"/><line x1="335" y1="110" x2="415" y2="172"/><line x1="420" y1="42" x2="415" y2="172"/>
<line x1="420" y1="105" x2="470" y2="62"/><line x1="420" y1="105" x2="335" y2="110"/><line x1="420" y1="105" x2="415" y2="172"/><line x1="420" y1="105" x2="500" y2="110"/>
</g>
<g fill="#95de64"><circle cx="420" cy="42" r="5"/><circle cx="470" cy="62" r="5"/><circle cx="500" cy="110" r="5"/><circle cx="470" cy="158" r="5"/><circle cx="415" cy="172" r="5"/><circle cx="360" cy="158" r="5"/><circle cx="335" cy="110" r="5"/><circle cx="360" cy="62" r="5"/><circle cx="420" cy="105" r="6"/></g>
<text x="420" y="192" text-anchor="middle" fill="#9290a8" font-size="9">প্রতিটা চ্যালেঞ্জে নতুন synapse</text>
</svg><div class="svg-caption">নিউরাল নেটওয়ার্ক: fixed mindset বন্ধ ঘেরে আটকে থাকে (dendritic growth নেই); growth mindset চ্যালেঞ্জে নতুন সংযোগ (synaptogenesis) তৈরি করে। / Fixed mindset stays in a closed loop; growth mindset grows new synaptic connections with every challenge.</div></div>

<div class="source-box"><span class="src-label">📚 যাচাইকৃত উৎস — Verified Source</span><strong>Mueller & Dweck (1998)</strong>, <em>Journal of Personality and Social Psychology</em> — ৫ম শ্রেণির শিক্ষার্থীদের বুদ্ধির প্রশংসা ("তুমি স্মার্ট") করা হলে তারা সহজ কাজ বেছে নেয় ও ব্যর্থতার পর দুর্বল হয়; প্রচেষ্টার প্রশংসা ("তুমি ভালো চেষ্টা করেছ") করা হলে তারা কঠিন কাজ বেছে নেয় ও ব্যর্থতার পরও উন্নতি করে। সম্পূর্ণ তত্ত্ব: <strong>Carol S. Dweck, "Mindset: The New Psychology of Success"</strong> (Random House, 2006) — ২০+ বছরের গবেষণার সারাংশ, মিলিয়ন কপি বেস্টসেলার।</div>

<div class="code-block"># ── STEP 1: Growth mindset vs fixed mindset ──
# Your brain grows with challenge — neuroplasticity.

# CAROL DWECK (Stanford, 2006):
# Fixed: "I can't" → brain closes → challenge = threat
# Growth: "I haven't learned YET" → brain opens → challenge = growth

# PYTHON (mindset reframer):
fixed_phrases = {
    "I can't do this": "I can't do this YET",
    "I'm bad at math": "I'm still learning math",
    "This is too hard": "This will take more effort",
    "I'm not smart enough": "What strategy haven't I tried?",
    "I give up": "What can I try differently?",
    "I made a mistake": "Mistakes help me learn",
}

print("MINDSET REFRAMING:")
for fixed, growth in fixed_phrases.items():
    print(f"  FIXED:  '{fixed}'")
    print(f"  GROWTH: '{growth}'")
    print()

# THE SCIENCE:
# → Neuroplasticity: brain forms new synapses with every challenge
# → Myelin: practice wraps nerve fibers → signals speed up
# → BDNF: exercise + learning increases brain "fertilizer"
# → Mueller & Dweck (1998): praise EFFORT, not intelligence
#   "You worked hard" → growth mindset
#   "You're smart" → fixed mindset (fear of failure)

# PROCESS PRAISE (not person praise):
# ❌ "You're so smart!" (fixed — they'll avoid hard tasks)
# ✅ "Great strategy! You worked hard on that." (growth — they seek challenges)</div>

<div class="code-block"># ── STEP 2: The science of learning ──
# Evidence-based techniques that actually work.

# TOP 5 EVIDENCE-BASED LEARNING TECHNIQUES:

techniques = {
    "1. ACTIVE RECALL (strongest)": {
        "how": "Close the book, write everything you remember",
        "why": "Retrieval strengthens memory more than re-reading",
        "evidence": "Roediger & Karpicke (2006): testing > re-reading by 33%",
        "tool": "Anki flashcards, self-quizzing",
    },
    "2. SPACED REPETITION": {
        "how": "Review at increasing intervals: 1d → 2d → 4d → 8d → 16d",
        "why": "Flattens the forgetting curve (Ebbinghaus, 1885)",
        "evidence": "90% retention with spaced review vs 10% without",
        "tool": "Anki, RemNote, Quizlet",
    },
    "3. INTERLEAVING": {
        "how": "Mix different problem types in one session",
        "why": "Forces brain to SELECT the right approach (discrimination)",
        "evidence": "Rohrer & Taylor (2007): 43% improvement vs blocking",
        "tool": "Mixed problem sets, varied practice",
    },
    "4. ELABORATION": {
        "how": "Explain WHY and HOW, connect to what you know",
        "why": "Deep processing creates richer memory traces",
        "evidence": "Self-explanation effect (Chi, 2000)",
        "tool": "Feynman technique, teaching others",
    },
    "5. DUAL CODING": {
        "how": "Combine words + visuals (diagrams, charts)",
        "why": "Two memory systems (verbal + visual) > one",
        "evidence": "Paivio (1971): dual coding doubles recall",
        "tool": "Mind maps, sketchnotes, diagrams",
    },
}

for technique, details in techniques.items():
    print(f"\n{technique}")
    for key, value in details.items():
        print(f"  {key}: {value}")

# WHAT DOESN'T WORK (despite feeling productive):
ineffective = [
    "Re-reading (feels productive, barely helps)",
    "Highlighting (passive, creates illusion of learning)",
    "Summarizing (helps a little, but not as much as recall)",
    "Cramming (works short-term, terrible long-term retention)",
    "Listening to lectures without taking notes (passive)",
]
print("\nINEFFECTIVE TECHNIQUES (avoid!):")
for technique in ineffective:
    print(f"  ❌ {technique}")</div>

<div class="code-block"># ── STEP 3: Building a learning system ──
# A repeatable process for learning anything.

# THE LEARNING SYSTEM (daily + weekly):

system = """
DAILY (30-60 min):
  1. REVIEW (5 min): Spaced repetition (Anki flashcards)
  2. LEARN (20-30 min): New material (video, reading, tutorial)
  3. PRACTICE (15-20 min): Active recall (solve problems, code)
  4. REFLECT (5 min): What did I learn? What's unclear?

WEEKLY:
  1. INTERLEAVE (Saturday): Mix topics from the week
  2. PROJECT (Sunday): Apply what you learned to a real project
  3. TEACH (any day): Explain to someone (or write a blog post)
  4. PLAN (Sunday): What to learn next week?
"""

print(system)

# PYTHON (learning tracker):
import datetime

class StudySystem:
    """Track what you learn and schedule reviews."""
    def __init__(self):
        self.topics = {}  # topic → {learned, reviews, mastery}

    def learn(self, topic):
        self.topics[topic] = {
            "learned": datetime.date.today(),
            "reviews": [],
            "mastery": 1,  # 1-5 scale
        }
        print(f"  Learned: {topic}")

    def review(self, topic, mastery_level):
        if topic in self.topics:
            self.topics[topic]["reviews"].append(datetime.date.today())
            self.topics[topic]["mastery"] = mastery_level
            print(f"  Reviewed: {topic} (mastery: {mastery_level}/5)")

    def due_for_review(self):
        """Spaced repetition: what needs review today?"""
        intervals = [1, 2, 4, 8, 16, 32]  # days
        due = []
        today = datetime.date.today()
        for topic, data in self.topics.items():
            review_count = len(data["reviews"])
            if review_count < len(intervals):
                days_since = (today - data["learned"]).days
                expected_interval = intervals[review_count]
                if days_since >= expected_interval:
                    due.append(topic)
        return due

tracker = StudySystem()
tracker.learn("Python decorators")
tracker.learn("Big-O notation")
tracker.review("Python decorators", 3)
print(f"Due for review today: {tracker.due_for_review()}")</div>

<div class="code-block"># ── STEP 4: Overcoming learning barriers ──
# What stops you from learning and how to push through.

# COMMON LEARNING BARRIERS:

barriers = {
    "I don't have time": {
        "truth": "You have the same 24 hours as everyone else",
        "fix": "Start with 15 min/day. Consistency > intensity.",
    },
    "I'm too old to learn": {
        "truth": "Neuroplasticity continues throughout life",
        "fix": "Adults actually learn FASTER (better metacognition)",
    },
    "I'm not smart enough": {
        "truth": "Intelligence is malleable (growth mindset)",
        "fix": "Effort + strategy > raw talent. Practice works.",
    },
    "I keep forgetting": {
        "truth": "Forgetting is natural (Ebbinghaus curve)",
        "fix": "Spaced repetition makes retention 80%+",
    },
    "I don't know where to start": {
        "truth": "Analysis paralysis is a form of procrastination",
        "fix": "Pick ONE resource. Start TODAY. Adjust later.",
    },
    "I learn but can't apply": {
        "truth": "Passive learning ≠ skill (illusion of competence)",
        "fix": "Build projects. Apply within 48 hours of learning.",
    },
    "I lose motivation": {
        "truth": "Motivation follows action, not the other way around",
        "fix": "Use 2-minute rule: just start. Motivation follows.",
    },
}

for barrier, info in barriers.items():
    print(f"\n'{barrier}'")
    print(f"  Truth: {info['truth']}")
    print(f"  Fix: {info['fix']}")

# THE LEARNING VALLEY OF DESPAIR:
# When learning something new, you go through phases:
# 1. EXCITEMENT: "This is cool!" (high motivation, low skill)
# 2. VALLEY OF DESPAIR: "This is too hard" (low motivation, low skill)
# 3. SLOPE OF ENLIGHTENMENT: "Oh, I get it now" (growing skill)
# 4. PLATEAU OF PRODUCTIVITY: "I can do this" (high skill)

# Most people quit in the Valley of Despair.
# Push through — the slope of enlightenment is on the other side.</div>

<div class="code-block"># ── STEP 5: Deep practice and mastery ──
# How experts build world-class skills.

# DELIBERATE PRACTICE (Anders Ericsson):

deliberate_practice = """
DELIBERATE PRACTICE ≠ REGULAR PRACTICE:

Regular practice: repeating what you already know
Deliberate practice: targeting what you CAN'T do yet

4 KEY ELEMENTS:
1. SPECIFIC GOAL: Not 'practice guitar' but 'master barre chords'
2. FULL CONCENTRATION: No autopilot, no distraction
3. IMMEDIATE FEEDBACK: Know if you're doing it right
4. PROGRESSIVE OVERLOAD: Slightly harder than current ability

THE 10,000 HOUR RULE (Ericsson):
→ ~10,000 hours of DELIBERATE practice → world-class expertise
→ BUT: quality of practice matters more than raw hours
→ 1 hour deliberate > 3 hours mindless repetition
→ Key: constant feedback + coaching + pushing limits
"""

print(deliberate_practice)

# PYTHON (skill tracker with deliberate practice):
class SkillTracker:
    """Track skill development with deliberate practice."""
    def __init__(self):
        self.skills = {}  # skill → {level, weaknesses, sessions}

    def add_skill(self, name):
        self.skills[name] = {
            "level": 1,
            "weaknesses": [],
            "sessions": 0,
            "hours": 0,
        }

    def practice_session(self, skill, hours, target_weakness, improved):
        s = self.skills[skill]
        s["sessions"] += 1
        s["hours"] += hours

        if target_weakness not in s["weaknesses"]:
            s["weaknesses"].append(target_weakness)

        if improved:
            s["weaknesses"].remove(target_weakness)
            print(f"  ✅ Overcame weakness: {target_weakness}")
            # Level up every 10 hours of deliberate practice:
            if s["hours"] % 10 < hours:
                s["level"] += 1
                print(f"  🎉 {skill} leveled up to {s['level']}!")

    def status(self):
        for skill, data in self.skills.items():
            print(f"\n  {skill}: Level {data['level']}")
            print(f"    Hours: {data['hours']}, Sessions: {data['sessions']}")
            if data["weaknesses"]:
                print(f"    Current weaknesses: {data['weaknesses']}")

tracker = SkillTracker()
tracker.add_skill("System Design")
tracker.practice_session("System Design", 2, "sharding strategy", True)
tracker.practice_session("System Design", 2, "eventual consistency", False)
tracker.status()</div>

<div class="code-block"># ── STEP 6: Lifelong learning best practices ──
# Learning is not a phase — it's a lifestyle.

best_practices = [
    "Learn in public (blog, tweet, share — accountability + feedback)",
    "Teach what you learn (teaching is the best way to learn)",
    "Embrace the beginner's mind (empty cup, no assumptions)",
    "Follow your curiosity (passion > obligation for learning)",
    "Build projects (knowledge without application is trivia)",
    "Find mentors (accelerate learning with guidance)",
    "Join communities (surround yourself with learners)",
    "Read books (deeper than articles, videos, podcasts)",
    "Take notes (Zettelkasten — interconnected knowledge)",
    "Sleep well (consolidation happens during sleep)",
    "Exercise (BDNF = brain fertilizer, boosts learning)",
    "Limit passive consumption (scrolling ≠ learning)",
    "Set learning goals (what will you master this year?)",
    "Celebrate progress (track how far you've come)",
    "Never stop (the day you stop learning, you start dying)",
]

print("LIFELONG LEARNING BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# THE COMPOUND EFFECT OF LEARNING:
# 1% better daily = 37x better in a year (1.01^365 = 37.78)
# 1% worse daily = 0.03x in a year (0.99^365 = 0.025)
# → Small daily learning COMPOUNDS massively over time
# → The best time to start learning was 10 years ago
# → The second best time is TODAY</div>

<div class="dialogue">কুরআনে আল্লাহ বলেন — "আল্লাহ এক জাতির অবস্থা বদলান না, যতক্ষণ না তারা নিজেদের অবস্থা বদলায়।" (১৩:১১)। বীজকে বাড়তে হবে — কেউ জোর করে বাড়াতে পারে না। নিয়ত লাগে — বাড়ার ইচ্ছা। "আমি পারি না" একটা নিয়ত — বন্ধ হওয়ার নিয়ত। "আমি শিখব" আরেকটা নিয়ত — বাড়ার নিয়ত। মস্তিষ্ক তোমার নিয়ত অনুসরণ করে।</div>
<div class="dialogue en">"Allah says — 'Allah does not change a people until they change themselves.' (13:11). The seed must grow — no one can force it. Intention is needed — the will to grow. 'I can't' is an intention — to stay closed. 'I will learn' is another — to grow. The brain follows your intention."</div>`,
  senior:{
    title:"Fixed vs Growth — প্রতিদিন নিজেকে প্রশ্ন করো",
    body:`<p><strong>"আমি এখনও পারি না"</strong> বলো না — <strong>"আমি এখনও শিখিনি"</strong> বলো (the power of "yet")। একটা শব্দের পার্থক্য — কিন্তু মস্তিষ্কে বিশাল প্রভাব।</p><p><strong>Process praise:</strong> "তুমি প্রতিভাবান" নয় — "তুমি ভালো চেষ্টা করেছ, ভালো কৌশল বেছেছ" বলো। প্রশংসা প্রক্রিয়ায় (effort, strategy, focus), ব্যক্তিতে নয় — Mueller & Dweck (1998)-এর মূল ফলাফল।</p><p><strong>Challenge = growth signal:</strong> কঠিন কিছু পেলে থামো না। মস্তিষ্ক বলছে — "এখানে নতুন সংযোগ দরকার।"</p><p><strong>সপ্তাহিক অনুশীলন:</strong> প্রতি রবিবার লেখো — এই সপ্তাহে কোন ব্যর্থতা থেকে সবচেয়ে বেশি শিখেছ? Fixed mindset ব্যর্থতা লুকায়; growth mindset ব্যর্থতা নথিভুক্ত করে।</p>`
  }
});

// ══ DOOR 2: SPACED REPETITION ══
doors.push({
  num:2, icon:"🧠", color:"#5b9eff", name:"স্মৃতি তাঁতির তক্তা",
  subtitle:"The Memory Weaver's Loom", tech:"Spaced Repetition & Forgetting Curve",
  spirit:"হাফসা — সংরক্ষণের শিল্প",
  secret:"একবার পড়ে মনে থাকে না। বারবার পড়লেও মনে থাকে না। কিন্তু সঠিক সময়ে পুনরাবৃত্তি করলে — স্থায়ী হয়। ভুলে যাওয়া শিখতে সাহায্য করে।",
  recall:{
    q:"তাঁতি কেন একদিনে পুরো কাপড় বুনে না, বিরতি দেন?",
    qen:"Why does the weaver not weave the entire cloth in one day, but takes breaks?",
    a:"কারণ একদিনে করলে সুতো শিথিল হয়। বিরতি দিলে সুতো শক্ত হয়। মেমরিও তেমনি — একবারে পড়লে ভুলে যায়। সঠিক বিরতিতে পুনরাবৃত্তি = স্থায়ী। Ebbinghaus-এর ভুলে যাওয়ার রেখা।",
    aen:"Because doing it all at once loosens threads. Breaks tighten them. Memory too — reading once means forgetting. Spaced repetition at right intervals = permanent. Ebbinghaus's forgetting curve."
  },
  story:`
<p class="scene-setting">দ্বিতীয় বাগান। একটা তাঁতের তক্তা। সুতোর খসখস, রঙের বালতি, কাপড়ের গন্ধ। তাঁতি রহিমা কাজ করছেন — মধ্যবয়সী, দক্ষ হাত, চোখ সুতোর দিকে। তিনি একটা কাপড় বুনছেন। কিন্তু একদিনে নয় — আজ কিছু, তিন দিন পর কিছু, এক সপ্তাহ পর কিছু। কেন?</p>
<p class="scene-setting en">The second garden. A weaver's loom. Rustle of thread, dye buckets, smell of cloth. Weaver Rahima works — middle-aged, skilled hands, eyes on the thread. She weaves a cloth. But not in one day — some today, some in three days, some in a week. Why?</p>

<div class="dialogue">বীজ সংরক্ষক বলেছিলেন — মস্তিষ্ক বাড়তে পারে। কিন্তু আমি বলি — বাড়ানো মানে সারাজীবন থাকা নয়। একবার শিখে মনে থাকে না। বারবার পড়লেও মনে থাকে না। কিন্তু সঠিক সময়ে ফিরে এলে — স্থায়ী হয়।</div>
<div class="dialogue en">"The seed keeper said — the brain can grow. But I say — growing doesn't mean staying forever. Learned once doesn't mean remembered. Read repeatedly doesn't mean remembered either. But returning at the right time — makes it permanent."</div>

<div class="dialogue">হার্মান এবিংহাউস — একজন জার্মান মনোবিজ্ঞানী। তিনি নিজের উপর পরীক্ষা করলেন — অর্থহীন শব্দ মুখস্থ করলেন, তারপর দেখলেন কখন ভুলে যান। ফলাফল ভয়ংকর — ২৪ ঘণ্টায় প্রায় ৬৫% ভুলে গেলেন! এটাই ভুলে যাওয়ার রেখা — forgetting curve।</div>
<div class="dialogue en">"Hermann Ebbinghaus — a German psychologist. He experimented on himself — memorized nonsense syllables, then tracked when he forgot. The result was terrifying — nearly 65% forgotten within 24 hours! This is the forgetting curve."</div>

<div class="callout warn"><span class="co-icon">📉</span><div><strong>Ebbinghaus forgetting curve (নির্ভুল সংখ্যা):</strong> অর্থহীন শব্দ মুখস্থ করার পর ২০ মিনিটে ~৫৮% মনে থাকে, ১ ঘণ্টায় ~৪৪%, ১ দিনে ~৩৩-৩৬%, ১ সপ্তাহে ~২৫%। অর্থবহ তথ্যে (গল্প, কনসেপ্ট) রেখা কম খাড়া — কারণ অর্থ স্মৃতিকে সহায়তা করে।</div></div>
<div class="svg-diagram"><svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="210" x2="540" y2="210" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
<line x1="30" y1="10" x2="30" y2="215" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
<text x="12" y="24" fill="#9290a8" font-size="9">100%</text><text x="16" y="119" fill="#9290a8" font-size="9">50%</text><text x="20" y="214" fill="#9290a8" font-size="9">0%</text>
<text x="40" y="228" fill="#9290a8" font-size="9">Day 0</text><text x="115" y="228" fill="#9290a8" font-size="9">Day 1</text><text x="205" y="228" fill="#9290a8" font-size="9">Day 3</text><text x="295" y="228" fill="#9290a8" font-size="9">Day 7</text><text x="385" y="228" fill="#9290a8" font-size="9">Day 16</text><text x="470" y="228" fill="#9290a8" font-size="9">Day 35</text>
<polyline points="40,20 130,147 220,172 310,187 400,195 490,200 530,202" fill="none" stroke="#ff6b35" stroke-width="2" stroke-dasharray="5,4" opacity=".85"/>
<polyline points="40,20 130,147 135,20 220,95 225,20 310,72 315,18 400,55 405,16 490,40 495,12 530,15" fill="none" stroke="#5b9eff" stroke-width="2.4"/>
<g fill="#5b9eff"><circle cx="135" cy="20" r="4"/><circle cx="225" cy="20" r="4"/><circle cx="315" cy="18" r="4"/><circle cx="405" cy="16" r="4"/><circle cx="495" cy="12" r="4"/></g>
<text x="490" y="8" fill="#5b9eff" font-size="9" text-anchor="end">স্থায়ী স্মৃতি</text>
<rect x="330" y="235" width="10" height="4" fill="#5b9eff"/><text x="345" y="240" fill="#9290a8" font-size="8.5">Spaced review</text>
<rect x="450" y="235" width="10" height="4" fill="#ff6b35"/><text x="465" y="240" fill="#9290a8" font-size="8.5">No review</text>
</svg><div class="svg-caption">লাল ড্যাশড রেখা = review ছাড়া ভুলে যাওয়া (Ebbinghaus, ১৮৮৫)। নীল রেখা = ঠিক ভুলে-যাওয়ার-আগে review দিলে রেখা প্রতিবার উঁচুতে ওঠে, ধীরে ধীরে সমতল হয়ে "স্থায়ী" হয়। / Red dashed = decay without review. Blue = each well-timed review resets retention higher, until it flattens into long-term memory.</div></div>
<div class="timeline">
<div class="tl-step"><div class="tl-when">Day 1</div><div class="tl-title">প্রথম শেখা</div><div class="tl-body">ভুলে যাওয়া শুরু।</div></div>
<div class="tl-step"><div class="tl-when">Day 3</div><div class="tl-title">১ম review</div><div class="tl-body">রেখা উপরে ওঠে।</div></div>
<div class="tl-step"><div class="tl-when">Day 7</div><div class="tl-title">২য় review</div><div class="tl-body">আরও উপরে।</div></div>
<div class="tl-step"><div class="tl-when">Day 16</div><div class="tl-title">৩য় review</div><div class="tl-body">প্রায় সমতল।</div></div>
<div class="tl-step"><div class="tl-when">Day 35</div><div class="tl-title">৪র্থ review</div><div class="tl-body">স্থায়ী!</div></div>
</div>
<div class="callout tip"><span class="co-icon">🧵</span><div>প্রতিটা review তোমার ভুলে যাওয়ার <em>ঠিক আগে</em> হতে হবে — ব্যর্থ-হওয়ার-দ্বারপ্রান্তে মনে করাই memory-কে শক্তিশালী করে (desirable difficulty, Bjork)। টুল: Anki (free, SM-2/FSRS algorithm), SuperMemo, Quizlet।</div></div>

<div class="source-box"><span class="src-label">📚 যাচাইকৃত উৎস — Verified Source</span><strong>Hermann Ebbinghaus, "Über das Gedächtnis"</strong> (1885) — মূল গবেষণা, নিজের উপর পরীক্ষা। আধুনিক পুনরাবৃত্তি: <strong>Murre & Dros (2015)</strong>, <em>PLOS ONE</em> — ১০০+ বছর পর curve-এর আকৃতি পুনঃনিশ্চিত। অ্যালগরিদমের জনক: <strong>Piotr Woźniak</strong> — SuperMemo (1985), যার SM-2 অ্যালগরিদম আজকের Anki-র ভিত্তি।</div>

<div class="dialogue">হাফসা (রা) — নবীজির (সা) স্ত্রী। তিনি কুরআনের প্রথম সম্পূর্ণ সংকলন সংরক্ষণ করেছিলেন। সংরক্ষণ মানে একবার রাখা নয় — যত্ন নেওয়া, সময় সময় পড়া, নিশ্চিত করা যে এটা আছে। Spaced repetition-ও তেমনি — একবার শেখা নয়, সময় সময় ফিরে আসা। হাফসা (রা) যেমন কুরআন সংরক্ষণ করেছিলেন যত্ন নিয়ে, তুমিও তেমনি জ্ঞান সংরক্ষণ করো — সময় নিয়ে, বিরতি দিয়ে।</div>
<div class="dialogue en">"Hafsa (RA) — the Prophet's wife. She preserved the first complete compilation of the Quran. Preservation isn't storing once — it's caring, reading periodically, ensuring it remains. Spaced repetition too — not learning once, returning periodically. As Hafsa preserved the Quran with care, you preserve knowledge — with time, with intervals."</div>`,
  senior:{
    title:"Spaced Repetition Tools — আজই শুরু করো",
    body:`<p><strong>Anki</strong> — ফ্রি, শক্তিশালী। প্রতিটা card: সামনে প্রশ্ন, পেছনে উত্তর। অ্যালগরিদম তোমার ভুলে যাওয়ার রেখা মাপে — ঠিক সময়ে দেখায়।</p><p><strong>Card বানানো IS শেখা:</strong> একটা ভালো card বানাতে গেলে তোমাকে কনসেপ্ট বুঝতে হবে। কপি করা নয় — নিজের ভাষায়।</p><p><strong>২০ নিয়ম (Wozniak):</strong> এক card-এ এক ধারণা। সহজ, স্পষ্ট, চিত্র সহ। প্রতিটা card ছোট।</p><p><strong>FSRS (2023+):</strong> Anki-র নতুন অ্যালগরিদম — প্রতিটা কার্ডের জন্য প্রায় ৯০% মনে-থাকার-সম্ভাবনায় review নির্ধারণ করে, পুরনো fixed-interval SM-2-এর চেয়ে বেশি নির্ভুল।</p>`
  }
});

// ══ DOOR 3: FEYNMAN TECHNIQUE ══
doors.push({
  num:3, icon:"🗣️", color:"#ffc857", name:"গল্পকারের গাছ",
  subtitle:"The Storyteller's Tree", tech:"Feynman Technique",
  spirit:"হাদিস শিক্ষা — শেখাও, তাহলে শিখবে",
  secret:"যদি সহজ ভাষায় বোঝাতে না পারো, তুমি নিজে বোঝো না। শেখানো শেখার সবচেয়ে শক্তিশালী উপায়।",
  recall:{
    q:"গল্পকার কেন শিশুদের গল্প পুনরায় বলতে বলেন?",
    qen:"Why does the storyteller ask children to retell the story?",
    a:"কারণ পুনরায় বললে যা বুঝিনি তা ধরা পড়ে। Feynman Technique: সহজ ভাষায় বোঝাও — যেখানে আটকাবে, সেখানে তোমার গ্যাপ। শেখানো = গ্যাপ খোঁজা = সত্যিকারের শেখা।",
    aen:"Because retelling reveals what wasn't understood. Feynman Technique: explain in simple words — where you stumble, that's your gap. Teaching = finding gaps = real learning."
  },
  story:`
<p class="scene-setting">তৃতীয় বাগান। একটা বিশাল বটগাছের নিচে। ছায়া, পাখির ডাক, বাতাসে পাতার শব্দ। দাদি সালেহা বসে আছেন — বয়স্ক, মুখে হাসি, চারদিকে শিশুরা। তিনি একটা গল্প বলছেন। শেষ হলে একটা শিশুকে বললেন — "এবার তুই বল।"</p>
<p class="scene-setting en">The third garden. Under a vast banyan tree. Shade, birdsong, rustle of leaves. Dadi Saleha sits — elderly, smiling, surrounded by children. She tells a story. When done, she says to a child — "Now you tell it."</p>

<div class="dialogue">স্মৃতি তাঁতি বলেছিলেন — সঠিক সময়ে পুনরাবৃত্তি। কিন্তু আমি বলি — কেবল পড়া বা পুনরাবৃত্তি যথেষ্ট নয়। তুমি যা শিখেছ, তা অন্যকে বোঝাতে পারলেই প্রমাণ হয় তুমি সত্যিই শিখেছ।</div>
<div class="dialogue en">"The memory weaver said — review at the right time. But I say — just reading or reviewing isn't enough. Only when you can explain what you learned to someone else does it prove you truly learned."</div>

<p>শিশুটি গল্প বলতে শুরু করল। কিন্তু মাঝখানে আটকে গেল — একটা অংশ মিস করল, একটা নাম ভুলে গেল, ক্রম গোলমাল করল। দাদি সালেহা হাসলেন।</p>
<p class="en">The child began retelling. But stumbled — missed a part, forgot a name, jumbled the order. Dadi Saleha smiled.</p>

<div class="dialogue">এই যে তুই আটকে গেলি — এখানেই তোর বোঝা হয়নি। বাকিটা ঠিক আছে। কিন্তু এই জায়গাটা — আবার শোন।</div>
<div class="dialogue en">"This is where you stumbled — this is where you didn't understand. The rest is fine. But this part — listen again."</div>

<div class="dialogue">রিচার্ড ফাইনম্যান — নোবেলজয়ী পদার্থবিজ্ঞানী। তাঁর নামে একটা শেখার পদ্ধতি — Feynman Technique। সহজ: একটা কনসেপ্ট নাও, একটা ১২ বছরের শিশুকে বোঝানোর মতো করে লেখো। যেখানে আটকাবে — সেখানে তোমার গ্যাপ। ফিরে যাও, শেখো, আবার সহজ করে বোঝাও। যতক্ষণ না সহজ হয়।</div>
<div class="dialogue en">"Richard Feynman — Nobel-winning physicist. A learning method named after him — the Feynman Technique. Simple: take a concept, write it as if explaining to a 12-year-old. Where you stumble — that's your gap. Go back, learn, simplify again. Until it's simple."</div>

<div class="timeline">
<div class="tl-step"><div class="tl-when">ধাপ ১</div><div class="tl-title">কনসেপ্ট বাছো</div><div class="tl-body">নাম লেখো।</div></div>
<div class="tl-step"><div class="tl-when">ধাপ ২</div><div class="tl-title">শিশুর মতো ব্যাখ্যা</div><div class="tl-body">সহজ শব্দ, কোনো jargon নয়।</div></div>
<div class="tl-step"><div class="tl-when">ধাপ ৩</div><div class="tl-title">গ্যাপ খোঁজো</div><div class="tl-body">কোথায় আটকালে? সেখানে ফিরে গিয়ে আবার শেখো।</div></div>
<div class="tl-step"><div class="tl-when">ধাপ ৪</div><div class="tl-title">সরল করো</div><div class="tl-body">উপমা দাও ("এটা ঠিক যেমন...")।</div></div>
<div class="tl-step"><div class="tl-when">ধাপ ৫</div><div class="tl-title">পুনরাবৃত্তি</div><div class="tl-body">যতক্ষণ না সাবলীল।</div></div>
</div>
<div class="svg-diagram"><svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
<circle cx="280" cy="110" r="88" fill="none" stroke="rgba(255,200,87,.25)" stroke-width="1.5"/>
<g font-size="9.5" fill="#e8e6f0" text-anchor="middle" font-weight="700">
<circle cx="280" cy="24" r="26" fill="rgba(255,200,87,.14)" stroke="#ffc857" stroke-width="1.6"/><text x="280" y="20">১. কনসেপ্ট</text><text x="280" y="31">বাছো</text>
<circle cx="452" cy="110" r="26" fill="rgba(255,200,87,.14)" stroke="#ffc857" stroke-width="1.6"/><text x="452" y="106">২. শিশুর মতো</text><text x="452" y="117">ব্যাখ্যা</text>
<circle cx="280" cy="196" r="26" fill="rgba(255,200,87,.14)" stroke="#ffc857" stroke-width="1.6"/><text x="280" y="192">৩. গ্যাপ</text><text x="280" y="203">খুঁজে বের করো</text>
<circle cx="108" cy="110" r="26" fill="rgba(255,200,87,.14)" stroke="#ffc857" stroke-width="1.6"/><text x="108" y="106">৪. সরল করো</text><text x="108" y="117">উপমা দাও</text>
</g>
<g fill="none" stroke="#ffc857" stroke-width="1.8" marker-end="url(#arrowY)">
<path d="M303,38 A100,100 0 0,1 432,88"/><path d="M432,132 A100,100 0 0,1 303,182"/><path d="M257,182 A100,100 0 0,1 128,132"/><path d="M128,88 A100,100 0 0,1 257,38"/>
</g>
<defs><marker id="arrowY" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ffc857"/></marker></defs>
</svg><div class="svg-caption">চক্রাকার — গ্যাপ পেলে আবার ধাপ ১-এ ফিরে যাও, যতক্ষণ না ১২ বছরের শিশুও বুঝবে। / A loop — hit a gap, return to step 1, until a 12-year-old would understand.</div></div>

<div class="callout tip"><span class="co-icon">🗣️</span><div><strong>পরীক্ষা:</strong> কনসেপ্টের নাম ছাড়া সহজভাবে ব্যাখ্যা করতে পারলে — তুমি বুঝেছ।</div></div>

<div class="source-box"><span class="src-label">📚 যাচাইকৃত উৎস — Verified Source</span>ফাইনম্যান নিজে কখনো "৪-ধাপ পদ্ধতি" লেখেননি — তাঁর শিক্ষকতার দর্শন থেকে ব্লগার <strong>Scott Young (2011)</strong> এই ফর্মটি সাজিয়েছেন। মূল অনুপ্রেরণা: ফাইনম্যানের ক্যালটেক "নোটবুক অফ থিংস আই ডোন্ট নো", বর্ণিত <em>"Surely You're Joking, Mr. Feynman!"</em> (1985)। প্রমাণ: <strong>Fiorella & Mayer (2013)</strong>-এর "protégé effect" গবেষণা — যারা শেখানোর প্রস্তুতি নেয় (আসলে না শিখিয়েও), তারা শুধু পড়াদের চেয়ে গভীরভাবে শেখে।</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">📖 নিষ্ক্রিয় পড়া</div>পড়ো, আন্ডারলাইন করো, মনে হয় "বুঝেছি।" কিন্তু অন্যকে বোঝাতে গেলে — ফাঁকা। ভ্রম। পড়া = চেনা, বোঝা নয়।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">🗣️ Feynman পদ্ধতি</div>পড়ো, তারপর বন্ধ করে নিজের ভাষায় লেখো। কোথায় আটকালে — সেখানে গ্যাপ। আবার পড়ো। আবার লেখো। শেখানো = সত্যিকারের শেখা।</div>
</div>

<div class="dialogue">নবীজি (সা) বলেছেন — "তোমাদের মধ্যে সেরা সে যে কুরআন শেখে আর শেখায়।" (বুখারি)। শেখা আর শেখানো — এক সিক্কার দুই পিঠ। তুমি যা শেখাও, সেটা নিজে শেখা হয় আরও গভীরভাবে। কারণ শেখানোর সময় তোমাকে সরল করতে হয়, গ্যাপ খুঁজতে হয়, নিশ্চিত করতে হয়। শেখানো = সবচেয়ে গভীর শেখা।</div>
<div class="dialogue en">"The Prophet (pbuh) said — 'The best of you are those who learn the Quran and teach it.' (Bukhari). Learning and teaching — two sides of one coin. What you teach, you learn more deeply. Because teaching forces you to simplify, find gaps, verify. Teaching = the deepest learning."</div>`,
  senior:{
    title:"Feynman in Practice — প্রতিটা কনসেপ্ট শেখার পর",
    body:`<p><strong>নিজের ভাষায় লেখো:</strong> বই বন্ধ করে, একটা খালি পাতায়, যা শিখলে তা নিজের ভাষায় লেখো — যেন কাউকে বোঝাচ্ছ।</p><p><strong>রাবার ডাক:</strong> কোড ডিবাগ করার সময় একটা রাবারের হাঁসকে বোঝাও — কেন ভুল হচ্ছে। বোঝাতে গিয়ে উত্তর আসে।</p><p><strong>ব্লগ লেখা:</strong> যা শিখলে তা একটা ছোট পোস্ট লেখো। প্রকাশ্যে শেখানো = সবচেয়ে গভীর শেখা।</p><p><strong>Notebook of things I don't know:</strong> ফাইনম্যান নিজে ক্যালটেকে একটা খাতা রাখতেন — যা জানেন না তা লিখে রাখতেন, একটা একটা করে সমাধান করতেন। "প্রস্তুতি নেওয়া" নিজেই শেখায় — শেখানো লাগে না, শেখানোর জন্য প্রস্তুত হওয়াই যথেষ্ট (protégé effect)।</p>`
  }
});

// ══ DOOR 4: DELIBERATE PRACTICE ══
doors.push({
  num:4, icon:"⚡", color:"#ff6b35", name:"কারিগরের কামারশালা",
  subtitle:"The Blacksmith's Forge", tech:"Deliberate Practice",
  spirit:"তাযকিয়া — কষ্টে পরিশীলন",
  secret:"১০,০০০ ঘণ্টা নয় — ১০,০০০ ঘণ্টা সঠিক অনুশীলন। চ্যালেঞ্জিং, ফিডব্যাক সহ, ভুল থেকে শেখা। কেবল করলে নয় — ভেবে করলে।",
  recall:{
    q:"কারিগর কেন ব্লেডের সব জায়গায় নয়, শুধু দুর্বল জায়গায় হাতুড়ি মারেন?",
    qen:"Why does the blacksmith hammer only the weak spots, not the whole blade?",
    a:"কারণ শক্ত জায়গায় হাতুড়ি মারলে সময় নষ্ট। দুর্বল জায়গায় মারলে সেটা শক্ত হয়। Deliberate practice-ও তেমনি — যা পারো না, সেখানে মন দাও। যা পারো, সেটা বাদ দাও।",
    aen:"Because hammering strong spots wastes time. Hammering weak spots strengthens them. Deliberate practice too — focus on what you can't do. Skip what you can."
  },
  story:`
<p class="scene-setting">চতুর্থ বাগান। একটা কামারশালা। আগুনের তাপ, ধাতু গলার ঝনঝন, হাতুড়ির শব্দ। কারিগর বদর দাঁড়িয়ে আছেন — বিশাল দেহ, পেশিশ্বলী বাহু, মাথায় চামড়ার টুপি। সামনে একটা তরবারি। কিন্তু তিনি সব জায়গায় হাতুড়ি মারছেন না — একটা নির্দিষ্ট জায়গায়, বারবার। সেই জায়গায় একটা ফাটল ছিল।</p>
<p class="scene-setting en">The fourth garden. A blacksmith's forge. Heat of fire, clang of metal, rhythm of hammers. Blacksmith Badr stands — massive frame, muscular arms, leather cap. A blade before him. But he doesn't hammer everywhere — one spot, repeatedly. That spot had a crack.</p>

<div class="dialogue">গল্পকার বলেছিলেন — শেখাও যাতে শিখতে পারো। কিন্তু আমি বলি — শেখার পরে আসে অনুশীলন। আর সব অনুশীলন সমান নয়। একজন কারিগর ১০ বছর ধরে হাতুড়ি মারছে — কিন্তু সে উন্নতি করছে না। কেন? কারণ সে মন দিয়ে মারছে না। সে শুধু মারছে।</div>
<div class="dialogue en">"The storyteller said — teach to learn. But I say — after learning comes practice. And not all practice is equal. A blacksmith hammers for 10 years — but doesn't improve. Why? Because he's not paying attention. He's just hammering."</div>

<div class="dialogue">অ্যান্ডার্স এরিকসন — মনোবিজ্ঞানী। তিনি বিশেষজ্ঞদের পড়েশনা করেছেন। তাঁর আবিষ্কার: "১০,০০০ ঘণ্টা" একটা মিথ। গুরুত্বপূর্ণ নয় কত ঘণ্টা — গুরুত্বপূর্ণ কীভাবে। সঠিক অনুশীলন — deliberate practice। পাঁচটা চিহ্ন: নির্দিষ্ট লক্ষ্য, পূর্ণ মনোযোগ, তাৎক্ষণিক ফিডব্যাক, আরামের বাইরে, দুর্বলতায় ফোকাস।</div>
<div class="dialogue en">"Anders Ericsson — psychologist. He studied experts. His discovery: '10,000 hours' is a myth. What matters isn't how many hours — but how. Correct practice — deliberate practice. Five marks: specific goal, full attention, immediate feedback, beyond comfort, focus on weakness."</div>

<div class="source-box"><span class="src-label">📚 যাচাইকৃত উৎস — Verified Source</span><strong>Ericsson, Krampe & Tesch-Römer (1993)</strong>, <em>Psychological Review</em> — বার্লিনের ভায়োলিন-শিক্ষার্থীদের উপর মূল গবেষণা। ১০,০০০ ঘণ্টা ছিল ২০ বছর বয়সে <em>সেরা দলের গড়</em> — কোনো নিয়ম নয়, আর অর্ধেক সেরা শিক্ষার্থীও ১০,০০০ ঘণ্টায় পৌঁছাননি। "The 10,000-Hour Rule" নামটি Malcolm Gladwell-এর <em>Outliers</em> (2008)-এ সরলীকৃত হয়েছিল — এরিকসন নিজেই পরে লিখেছেন এই "নিয়ম" ভুল। বিস্তারিত: <strong>Ericsson & Pool, "Peak: Secrets from the New Science of Expertise"</strong> (2016)।</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">🔄 অচিন্তিত পুনরাবৃত্তি</div>একই জিনিস বারবার — যা পারো তা। মন নেই। ফিডব্যাক নেই। আরামে। ১০ ঘণ্টা = কিছুই শেখা হয়নি। "আমি তো অনুশীলন করেছি!" — হ্যাঁ, কিন্তু উন্নতি নেই।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">⚡ সচেতন অনুশীলন</div>যা পারো না তা করো — বারবার। মন দাও। ফিডব্যাক নাও। কঠিন হোক। ভুল থেকে শেখো। ১ ঘণ্টা deliberate = ৮ ঘণ্টা passive। উন্নতি দৃশ্যমান।</div>
</div>

<div class="svg-diagram"><svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="195" x2="530" y2="195" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
<line x1="30" y1="10" x2="30" y2="195" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
<text x="6" y="18" fill="#9290a8" font-size="9">দক্ষতা</text><text x="490" y="210" fill="#9290a8" font-size="9">ঘণ্টা →</text>
<polyline points="30,180 90,120 150,95 210,85 280,80 350,78 420,77 500,76" fill="none" stroke="#9290a8" stroke-width="2" stroke-dasharray="5,4"/>
<text x="505" y="80" fill="#9290a8" font-size="9">নিষ্ক্রিয় পুনরাবৃত্তি (plateau)</text>
<polyline points="30,180 90,140 100,150 150,105 165,118 210,72 225,85 280,50 295,62 350,32 365,42 420,20 500,16" fill="none" stroke="#ff6b35" stroke-width="2.4"/>
<text x="505" y="20" fill="#ff6b35" font-size="9" text-anchor="end">deliberate practice</text>
</svg><div class="svg-caption">ছোট "ডুব" গুলো = ভুল থেকে শেখা মুহূর্ত (ফিডব্যাক নিয়ে সংশোধন)। এভাবেই deliberate practice প্লাটোতে না থেমে বাড়তে থাকে। / Small dips = feedback-driven corrections. This is how deliberate practice keeps climbing instead of plateauing.</div></div>

<div class="callout info"><span class="co-icon">⚡</span><div><strong>প্রতিটা সেশনে নিজেকে প্রশ্ন করো:</strong></div></div>
<ul class="checklist">
<li><strong>নির্দিষ্ট কী শিখব?</strong> "Python decorators" — ঠিক; "Python" — অস্পষ্ট।</li>
<li><strong>কঠিন কি?</strong> সহজ = সময় নষ্ট; কঠিন = বৃদ্ধি। কঠিন অংশে থামো।</li>
<li><strong>ফিডব্যাক কোথায়?</strong> test, coach, review — ফিডব্যাক ছাড়া = অন্ধ অনুশীলন।</li>
<li><strong>কী ভুল হলো?</strong> ভুল = শেখার সংকেত; একই ভুল দুইবার নয়।</li>
<li><strong>পরের সেশন?</strong> এবারের দুর্বলতা → পরের ফোকাস।</li>
</ul>

<div class="dialogue">তাযকিয়া — আত্মশুদ্ধি, পরিশীলন। নফস আরাম চায়। কিন্তু আরামে নফস উন্নতি করে না। কঠোর অনুশীলনে উন্নতি করে। কুরআনে আল্লাহ শপথ করেছেন নফসের — "যে শুদ্ধ করে সে সফল, যে নষ্ট করে সে ব্যর্থ।" (৯১:৯-১০)। শুদ্ধি আরামে নয় — সচেতন সংগ্রামে। প্রতিটা দুর্বলতায় হাতুড়ি — বারবার, যতক্ষণ না শক্ত হয়।</div>
<div class="dialogue en">"Tazkiyah — purification, refinement. The nafs wants comfort. But comfort doesn't improve the nafs. Rigorous practice does. Allah swears by the nafs — 'Whoever purifies it succeeds, whoever corrupts it fails.' (91:9-10). Purification isn't comfort — it's conscious struggle. Hammer every weakness — repeatedly, until it's strong."</div>`,
  senior:{
    title:"The Feedback Loop — প্রতিটা প্র্যাকটিসে চার প্রশ্ন",
    body:`<p>প্রতিটা অনুশীলন সেশনের শেষে নিজেকে চারটি প্রশ্ন করো:</p><p><strong>১. কী ভালো করলাম?</strong> (What did I do well?)</p><p><strong>২. কী খারাপ করলাম?</strong> (What did I do poorly?)</p><p><strong>৩. কী বদলাব?</strong> (What will I change?)</p><p><strong>৪. পরের লক্ষ্য কী?</strong> (What's the next target?)</p><p>এই চার প্রশ্ন = ফিডব্যাক লুপ। প্রতিটা সেশনে উন্নতি — পরিমাপযোগ্য, সচেতন।</p><p><strong>কোচ/মেন্টর:</strong> এরিকসনের গবেষণায় প্রতিটা এলিট ভায়োলিনিস্টের একজন শিক্ষক ছিল যিনি রিয়েল-টাইম সংশোধন দিতেন। একা ফিডব্যাক তৈরি করা কঠিন — মেন্টর, কোড রিভিউ, বা রেকর্ডিং দেখাও এক ধরনের বাহ্যিক চোখ।</p>`
  }
});
