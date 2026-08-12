// ════════════════════════════════════════
// গবেষণার তীর্থযাত্রা — DOORS 6-10
// PhD Journey: Networking → Scholar's Path
// ════════════════════════════════════════

// ══ DOOR 6: COLD EMAILING & NETWORKING ══
doors.push({
  num:6, icon:"🤝", color:"#5b9eff", name:"দরোয়ানের পরীক্ষা",
  subtitle:"The Gatekeeper's Test", tech:"Cold Emailing & Networking",
  spirit:"সুহবত — সঙ্গ খোঁজা",
  secret:"অ্যাডমিশন কমিটি নয় — প্রফেসরই সিদ্ধান্ত নেন। তাঁকে ইমেইল করো — কিন্তু ভালোভাবে। ৯০% ইমেইলের উত্তর আসে না। যেগুলোর আসে — সেগুলো নির্দিষ্ট, সংক্ষিপ্ত, প্রফেসরের কাজে আগ্রহ দেখায়।",
  recall:{
    q:"দরোয়ান কেন সবাইকে ঢুকতে দেন না, কেউ কেউ কে তাঁরা চেনেন?",
    qen:"Why does the gatekeeper not let everyone in, but recognizes certain people?",
    a:"কারণ যে আগে যোগাযোগ করেছে, প্রফেসরের কাজ জানে, নির্দিষ্ট প্রশ্ন করে — তাকে দরোয়ান চেনে। কোল্ড ইমেইল = আগে থেকে পরিচিত হওয়া। যে শুধু আবেদন পাঠায়, তাকে কেউ চেনে না।",
    aen:"Because one who contacted before, knows the professor's work, asks specific questions — the gatekeeper recognizes them. Cold email = getting known beforehand. One who only applies is unknown."
  },
  story:`
<p class="scene-setting">ষষ্ঠ স্থান। একটা দুর্গের ফটক। সামনে একজন কঠোর দরোয়ান — দীর্ঘ দাড়ি, লোহার দণ্ড, চোখে তীক্ষ্ণতা। ভিড় — শত শত আবেদনকারী। কিন্তু দরোয়ান সবাইকে ঢুকতে দেয় না। কিছু মানুষ আসে — দরোয়ান তাদের দেখে হাসেন, দরজা খোলেন। তারা আগে থেকে পরিচিত।</p>
<p class="scene-setting en">The sixth station. A fortress gate. Before it: a stern gatekeeper — long beard, iron staff, sharp eyes. A crowd — hundreds of applicants. But the gatekeeper doesn't let everyone in. Some people come — the gatekeeper smiles, opens the door. They're already known.</p>

<div class="dialogue">পণ্ডিত বলেছিলেন — SOP লেখো। কিন্তু আমি বলি — SOP লেখার অনেক আগে শুরু। কারণ PhD অ্যাডমিশন কমিটি সিদ্ধান্ত নেয় না — প্রফেসর নেন। যদি কোনো প্রফেসর তোমাকে চান, তিনি কমিটিকে বলেন "এই ছাত্র নাও।" কিন্তু তিনি তোমাকে চিনবেন কীভাবে? কোল্ড ইমেইল।</div>
<div class="dialogue en">"The scholar said — write your SOP. But I say — start long before the SOP. Because the PhD admissions committee doesn't decide — the professor does. If a professor wants you, they tell the committee 'take this student.' But how will they know you? Cold email."</div>

<div class="code-block"># ── STEP 1: Cold email to professors ──
# The #1 strategy for PhD admission.

# WHY COLD EMAIL?
# → PhD admission = professor's decision (not just committee)
# → If a professor WANTS you → they bring funding, advocate for you
# → Without cold email → lost among 1000+ applications

# WHO TO EMAIL:
# → Professors in YOUR research area
# → CSRankings.org → your area → department → professor
# → Read their recent papers (Google Scholar)

# EMAIL STRUCTURE (150-200 words MAX):

email_template = """
Subject: Prospective PhD Student — [Your Research Area]

Dear Professor [Last Name],

I'm [Your Name], [MS/BS] from [University]. I read your recent
paper "[Paper Title]" and was fascinated by [specific aspect
that impressed you — show you actually read it].

My background: [1-2 sentences about your relevant experience].
I've worked on [project/research] which connects to your work
on [specific connection — show overlap].

Are you accepting PhD students for Fall [Year]? I'd love to
discuss whether my background fits your lab. My CV is attached.

Thank you for your time,
[Your Name]
[Link to GitHub/website]
"""

print(email_template)

# PYTHON (cold email campaign tracker):
class EmailCampaign:
    """Track PhD cold emails and responses."""
    def __init__(self):
        self.emails = {}  # professor → {date, status, response}

    def send(self, professor, university, area, date):
        self.emails[professor] = {
            "university": university,
            "area": area,
            "date": date,
            "status": "sent",
            "response": None,
        }
        print(f"  → Email sent to Prof. {professor} ({university})")

    def log_response(self, professor, response_type, notes=""):
        statuses = {
            "positive": "Interested! Schedule a meeting",
            "neutral": "No funding / Not accepting students",
            "negative": "Not a good fit",
            "no_response": "No reply after 2 weeks",
        }
        self.emails[professor]["status"] = response_type
        self.emails[professor]["response"] = notes
        print(f"  ← {professor}: {statuses.get(response_type, 'unknown')}")

    def stats(self):
        total = len(self.emails)
        positive = sum(1 for e in self.emails.values()
                       if e["status"] == "positive")
        print(f"\nCampaign stats:")
        print(f"  Total sent: {total}")
        print(f"  Positive: {positive} ({positive/max(total,1)*100:.0f}%)")
        print(f"  Response rate: {sum(1 for e in self.emails.values() if e['status'] != 'sent')}/{total}")

# EXPECTED RESPONSE RATES:
# → Send 30-50 emails → expect 5-10 responses → 2-3 positive
# → This is NORMAL — don't be discouraged
# → Professors are busy — no response ≠ rejection

# COLD EMAIL RULES:
# → Research the professor FIRST (read 1-2 papers)
# → Show SPECIFIC interest (not generic "I like your work")
# → Be CONCISE (professors skim — 150 words max)
# → Attach CV (PDF, 1-2 pages)
# → Follow up after 1 week if no response (ONE follow-up only)
# → Don't send same email to multiple professors at same university</div>

<div class="code-block"># ── STEP 2: PhD application strategy ──
# Building a competitive application.

# PHD APPLICATION COMPONENTS:
components = {
    "1. RESEARCH STATEMENT (MOST IMPORTANT)": {
        "what": "2-3 page document describing your research interests",
        "key": "Show you understand the field, have specific ideas, fit the professor",
        "tip": "Mention 2-3 professors by name and how your interests align",
    },
    "2. LETTERS OF RECOMMENDATION": {
        "what": "3 letters from people who know your research/work",
        "key": "Strong letters > generic letters. A 'top 5%' letter is gold.",
        "tip": "Ask researchers you've worked with, not just course instructors",
    },
    "3. GPA AND TRANSCRIPTS": {
        "what": "Undergraduate + graduate transcripts",
        "key": "Most CS PhD programs want 3.5+ GPA (3.7+ for top-10)",
        "tip": "Upward trend matters more than overall GPA",
    },
    "4. GRE (increasingly optional)": {
        "what": "Standardized test (many programs waived this requirement)",
        "key": "Check each program — many CS programs no longer require GRE",
        "tip": "If required: 90th+ percentile quantitative",
    },
    "5. PUBLICATIONS (huge advantage)": {
        "what": "Peer-reviewed papers (workshop, conference, journal)",
        "key": "Even 1 publication puts you ahead of 80% of applicants",
        "tip": "Quality > quantity. 1 good conference paper > 5 low-tier papers",
    },
    "6. CV / RESUME": {
        "what": "Academic CV (different from industry resume)",
        "key": "Research experience, publications, skills, education",
        "tip": "Include GitHub, personal website, Google Scholar profile",
    },
    "7. TOEFL/IELTS (international)": {
        "what": "English proficiency test",
        "key": "Most programs: TOEFL 100+ or IELTS 7.0+",
        "tip": "Some programs waive this if you studied in English",
    },
}

for component, details in components.items():
    print(f"\n{component}")
    for key, value in details.items():
        print(f"  {key}: {value}")

# WHAT MAKES A STANDOUT APPLICATION:
# 1. RESEARCH FIT: Your interests align with a specific professor
# 2. EVIDENCE OF RESEARCH ABILITY: Papers, projects, thesis
# 3. STRONG LETTERS: From known researchers, saying specific things
# 4. CLEAR NARRATIVE: Your application tells a coherent story
# 5. PROFESSOR ADVOCACY: A professor says "I want this student"</div>

<div class="code-block"># ── STEP 3: Choosing programs and funding ──
# Where to apply and how to fund your PhD.

# HOW TO CHOOSE PROGRAMS:

selection_criteria = {
    "RESEARCH FIT": {
        "weight": "CRITICAL (40%)",
        "check": "Do 2+ professors work in your area?",
        "action": "Read their recent papers, check if accepting students",
    },
    "FUNDING": {
        "weight": "CRITICAL (30%)",
        "check": "Is PhD fully funded? (tuition + stipend $25K-40K)",
        "action": "Most US PhD programs are fully funded. Ask if unsure.",
    },
    "RANKING": {
        "weight": "IMPORTANT (15%)",
        "check": "Top-10? Top-50? Doesn't matter as much as advisor fit",
        "action": "Use CSRankings.org for area-specific rankings",
    },
    "LOCATION": {
        "weight": "MODERATE (10%)",
        "check": "Cost of living, climate, proximity to industry",
        "action": "Bay Area = high COL but near tech; Midwest = low COL",
    },
    "CULTURE": {
        "weight": "MODERATE (5%)",
        "check": "Collaborative vs competitive? Work-life balance?",
        "action": "Email current students to ask about culture",
    },
}

for criterion, info in selection_criteria.items():
    print(f"\n{criterion} ({info['weight']})")
    print(f"  Check: {info['check']}")
    print(f"  Action: {info['action']}")

# FUNDING TYPES:
funding = """
1. RESEARCH ASSISTANTSHIP (RA):
   → Professor pays you from their grant
   → You work on their research (your dissertation)
   → Most common for PhD students
   → Typically: tuition + $25K-40K/year stipend

2. TEACHING ASSISTANTSHIP (TA):
   → Department pays you to teach/grade courses
   → 20 hours/week commitment
   → Same compensation as RA, but teaching instead of research

3. FELLOWSHIPS (BEST):
   → NSF GRFP, NDSEG, Hertz Foundation
   → No work requirement — pure research time
   → Prestigious (looks great on CV)
   → NSF GRFP: $37K/year for 3 years

4. INDUSTRY FELLOWSHIPS:
   → Google PhD Fellowship, Microsoft Research Fellowship
   → Very competitive, very prestigious
   → Often includes internship opportunity
"""

print(funding)

# APPLICATION TIMELINE (for Fall admission):
timeline = [
    ("May-Aug", "Research programs, read papers, cold email professors"),
    ("Sep-Oct", "Take GRE/TOEFL, draft research statement"),
    ("Oct-Nov", "Request recommendation letters (give 6+ weeks notice)"),
    ("Nov-Dec", "Submit applications (deadlines Dec 1 - Jan 15)"),
    ("Jan-Feb", "Interviews, campus visits"),
    ("Feb-Apr", "Acceptances/rejections, decide by Apr 15"),
    ("May-Aug", "Prepare: read papers, learn tools, move to campus"),
]

print("PHD APPLICATION TIMELINE:")
for month, task in timeline:
    print(f"  {month}: {task}")</div>

<div class="code-block"># ── STEP 4: Research statement writing ──
# The most important document in your application.

# RESEARCH STATEMENT STRUCTURE (2-3 pages):

statement_template = """
RESEARCH STATEMENT STRUCTURE:

1. RESEARCH VISION (1 paragraph):
   What broad problem do you want to solve? Why does it matter?
   "I want to develop efficient inference methods for large language
    models, enabling deployment on edge devices."

2. PRIOR RESEARCH (1-2 paragraphs):
   What have you ALREADY done? Show you can do research.
   "In my MS thesis, I implemented a quantization-aware training
    pipeline that reduced model size by 4x with <1% accuracy loss."

3. PROPOSED RESEARCH (2-3 paragraphs):
   What do you want to do in your PhD? Be specific but flexible.
   "During my PhD, I plan to explore:
    (a) Hardware-aware neural architecture search
    (b) Sparse attention mechanisms for long-context models
    (c) Energy-efficient inference on mobile devices"

4. FIT (1 paragraph):
   Why THIS university? Which professors? How do you align?
   "I'm particularly interested in working with Prof. X on [topic]
    and Prof. Y on [topic]. [University]'s strengths in [area]
    make it ideal for this research."

5. BROADER IMPACT (1 paragraph, optional):
   How will your research help society/industry?
"""

print(statement_template)

# RESEARCH STATEMENT TIPS:
tips = [
    "Show you KNOW the field (cite recent work)",
    "Be SPECIFIC about what you want to research (not vague)",
    "Show CAPABILITY (evidence you can do the work)",
    "Mention professors BY NAME at the target university",
    "Be CONCISE (2-3 pages, no longer)",
    "Tell a STORY (your research journey has a narrative)",
    "Be HONEST (don't overclaim — professors see through hype)",
    "Proofread (typos signal carelessness about research)",
    "Get feedback from your advisor/mentors",
    "Customize for EACH university (different professors = different fit)",
]

print("RESEARCH STATEMENT TIPS:")
for tip in tips:
    print(f"  ☐ {tip}")

# COMMON MISTAKES:
mistakes = [
    "Too vague: 'I want to do AI research' (everyone says this)",
    "Too ambitious: 'I will solve general intelligence' (unrealistic)",
    "No prior evidence: claims interest but no research experience",
    "Generic: same statement for all universities (no professor names)",
    "Too long: 5+ pages (professors won't read it all)",
    "No narrative: just a list of topics (show the STORY)",
]
print("\nCOMMON MISTAKES:")
for mistake in mistakes:
    print(f"  ❌ {mistake}")</div>

<div class="code-block"># ── STEP 5: Interview preparation ──
# What happens when a professor says "let's talk".

# PHD INTERVIEW TYPES:
interview_types = {
    "INFORMAL CHAT (15-30 min)": {
        "purpose": "Professor wants to gauge your interest and fit",
        "questions": "Why PhD? Why this lab? What are your interests?",
        "tip": "Be enthusiastic, specific about their research",
    },
    "TECHNICAL INTERVIEW (30-60 min)": {
        "purpose": "Assess your technical depth",
        "questions": "Explain your previous research. How would you approach X?",
        "tip": "Know your own work deeply. Think out loud.",
    },
    "FORMAL INTERVIEW (multiple faculty)": {
        "purpose": "Department-level evaluation",
        "questions": "Research interests, future plans, why this program",
        "tip": "Connect with each faculty member's research area",
    },
    "CAMPUS VISIT (full day)": {
        "purpose": "Mutual evaluation — is this the right fit?",
        "questions": "Meet current students, tour labs, 1-on-1 with faculty",
        "tip": "Ask current students about culture, advisor style, funding",
    },
}

for itype, details in interview_types.items():
    print(f"\n{itype}")
    for key, value in details.items():
        print(f"  {key}: {value}")

# COMMON PHD INTERVIEW QUESTIONS:
common_questions = [
    "Tell me about your research interests.",
    "Why do you want to do a PhD?",
    "Why this university? Why my lab specifically?",
    "Describe your previous research. What was your contribution?",
    "What's a recent paper you enjoyed? Why?",
    "What are your strengths and weaknesses as a researcher?",
    "Where do you see yourself in 5 years?",
    "How do you handle failure in research?",
    "What would you work on if you joined my lab?",
    "Do you have questions for me?",
]

print("\nCOMMON QUESTIONS:")
for q in common_questions:
    print(f"  ? {q}")

# PREPARATION CHECKLIST:
prep = [
    "Read 2-3 recent papers from each interviewer",
    "Prepare a 2-minute elevator pitch of your research interests",
    "Review your own research — know it cold",
    "Prepare 3-5 questions to ask them",
    "Test your tech (Zoom/Meet camera, mic, screen sharing)",
    "Dress one level above casual (no t-shirts, no suits)",
    "Follow up with thank-you email within 24 hours",
]
print("\nPREPARATION CHECKLIST:")
for item in prep:
    print(f"  ☐ {item}")

# QUESTIONS TO ASK (shows interest + helps YOU decide):
ask = [
    "What's the typical timeline to graduation in your lab?",
    "How do you mentor students? (Hands-on or hands-off?)",
    "What's the funding situation for new students?",
    "What does a typical week look like for your PhD students?",
    "What are the biggest recent successes from your lab?",
    "How do students collaborate within the lab?",
    "What conferences does the lab typically attend?",
    "What's your view on work-life balance?",
]
print("\nQUESTIONS TO ASK:")
for q in ask:
    print(f"  ❓ {q}")</div>

<div class="code-block"># ── STEP 6: PhD journey and best practices ──
# What to expect in a PhD program.

best_practices = [
    "Choose your advisor carefully (they make or break your PhD)",
    "Read 3-5 papers per week (consistent reading = deep knowledge)",
    "Write daily (research notes, blog posts, paper drafts)",
    "Publish early (workshop paper in year 1-2, conference by year 3)",
    "Network at conferences (meet future collaborators/employers)",
    "Learn to take rejection (papers get rejected — it's normal)",
    "Find a support group (PhD is isolating — connect with peers)",
    "Maintain work-life balance (burnout is the #1 PhD killer)",
    "Talk to your advisor regularly (weekly 1-on-1 minimum)",
    "Manage your time (treat research like a job, not a lifestyle)",
    "Learn to code well (reproducible experiments, clean code)",
    "Present often (lab meetings, reading groups, conferences)",
    "Mentor undergrads (teaching deepens your own understanding)",
    "Plan your career early (academia vs industry — both need prep)",
    "Enjoy the journey (PhD is a privilege — pursue questions you love)",
]

print("PHD BEST PRACTICES:")
for practice in best_practices:
    print(f"  ☐ {practice}")

# THE PHD JOURNEY (5-6 years):
# ┌──────────────┬────────────────────────────────────────┐
# │ Year         │ Focus                                  │
# ├──────────────┼────────────────────────────────────────┤
# │ Year 1       │ Coursework, read papers, find advisor  │
# │              → Lab rotations, identify research area    │
# ├──────────────┼────────────────────────────────────────┤
# │ Year 2       │ Start research, first experiments      │
# │              → Workshop paper, qualify exam prep        │
# ├──────────────┼────────────────────────────────────────┤
# │ Year 3       │ Deepen research, first conference paper│
# │              → Qualifying/comprehensive exam             │
# ├──────────────┼────────────────────────────────────────┤
# │ Year 4       │ Lead research projects, multiple pubs  │
# │              → Mentor juniors, attend top conferences   │
# ├──────────────┼────────────────────────────────────────┤
# │ Year 5       │ Dissertation writing, job market       │
# │              → Faculty applications / industry search   │
# ├──────────────┼────────────────────────────────────────┤
# │ Year 6 (opt) │ Postdoc or transition to career        │
# │              → If academia: postdoc at another lab      │
# └──────────────┴────────────────────────────────────────┘
#
# "A PhD is a training in how to think, not just what to know."
#  The goal is to become an independent researcher who can
#  identify important problems and solve them.
#
# It's hard. It's worth it. Pursue questions you genuinely care about.</div> 
   your group."

   # Signature: Attach CV (PDF, 1-2 pages)</div>

<div class="stat-grid">
<div class="stat-card"><div class="sc-num">৩০-৫০</div><div class="sc-label">প্রফেসরকে ইমেইল করো</div></div>
<div class="stat-card"><div class="sc-num">~৯০%</div><div class="sc-label">কোনো উত্তরই আসবে না</div></div>
<div class="stat-card"><div class="sc-num">৩-৫</div><div class="sc-label">আগ্রহী, ফলো-আপ কথোপকথন</div></div>
<div class="stat-card"><div class="sc-num">১-২</div><div class="sc-label">"Yes, apply to my lab"</div></div>
</div>

<div class="svg-fig">
<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cold email funnel">
<polygon points="70,30 570,30 470,80 170,80" fill="rgba(91,158,255,.2)" stroke="#5b9eff"/>
<text x="320" y="60" fill="#e8e6f0" font-size="13" text-anchor="middle">৩০-৫০টা নির্দিষ্ট, ব্যক্তিগত ইমেইল</text>
<polygon points="170,90 470,90 400,140 240,140" fill="rgba(94,234,212,.18)" stroke="#5eead4"/>
<text x="320" y="120" fill="#e8e6f0" font-size="12" text-anchor="middle">~১০-২০% উত্তর দেয় (৫-১০ জন)</text>
<polygon points="240,150 400,150 370,195 270,195" fill="rgba(240,199,94,.2)" stroke="#f0c75e"/>
<text x="320" y="177" fill="#e8e6f0" font-size="12" text-anchor="middle">৩-৫ কথোপকথন</text>
<polygon points="270,205 370,205 350,235 290,235" fill="rgba(82,196,26,.25)" stroke="#52c41a"/>
<text x="320" y="226" fill="#52c41a" font-size="12" text-anchor="middle" font-weight="bold">১-২ "apply to my lab"</text>
</svg>
<div class="fig-cap">চিত্র: ভালো লেখা ইমেইলেও ১০-২০% উত্তর — স্বাভাবিক। এটা ব্যর্থতা নয়, সংখ্যার খেলা। ডেডলাইনের অন্তত ৩ মাস আগে প্রথম ব্যাচ পাঠাও।</div>
</div>

<div class="src-box"><div class="src-label">যাচাইকৃত উৎস / Verified Sources</div>Cold-email প্রতিক্রিয়ার হার: ভালো personalized ইমেইলে ১০-২০% reply স্বাভাবিক; ১৫০-২০০ শব্দ, ৩ প্যারা — একাধিক admission-guide-এর ঐকমত্য (academiatoindustry.com; riseglobaleducation.com) · টাইমিং: ডেডলাইনের ≥৩ মাস আগে প্রথম ব্যাচ · প্রফেসর খোঁজা: csrankings.org + Google Scholar সাম্প্রতিক পেপার।</div>

<div class="callout tip"><span class="co-icon">📨</span><div><strong>Funnel বাস্তবতা:</strong> নীরবতা ব্যর্থতা নয় — সংখ্যার খেলা। ১-২ জন সত্যিকারের আগ্রহী প্রফেসরই একটা অ্যাডমিশন এনে দিতে যথেষ্ট। তাই কম মানের ৫টা নয়, বেশি মানের ৩০-৫০টা নির্দিষ্ট ইমেইল পাঠাও।</div></div>

<div class="dialogue">সুহবত — সঙ্গ, সাথী খোঁজা। ইসলামে সঙ্গের গুরুত্ব অনেক — নবীজি (সা) বলেছেন, "মানুষ তার বন্ধুর দ্বীনে থাকে।" PhD-তেও সঙ্গ গুরুত্বপূর্ণ — কোন প্রফেসরের সাথে, কোন ল্যাবে। কোল্ড ইমেইল হলো সেই সঙ্গ খোঁজা — আগে থেকে, নিয়ত সহকারে। যে সঙ্গ খোঁজে, সে পায়। যে অপেক্ষা করে, সে হারায়।</div>
<div class="dialogue en">"Suhbat — companionship, seeking associates. In Islam, companionship is vital — the Prophet (pbuh) said, 'A person follows the religion of their friend.' In PhD too, companionship matters — which professor, which lab. Cold email is seeking that companionship — early, with intention. One who seeks, finds. One who waits, loses."</div>`,
  senior:{
    title:"ইমেইল কৌশল — ৩০-৫০ প্রফেসরকে করো",
    body:`<p><strong>শুরু করো আগস্ট-সেপ্টেম্বরে:</strong> Fall 2027 অ্যাডমিশনের জন্য জুন-আগস্ট ইমেইল শুরু করো।</p><p><strong>প্রতিটা ইমেইল আলাদা:</strong> টেমপ্লেট নয়। প্রতিটা প্রফেসরের কাজ পড়ে, নির্দিষ্ট সংযোগ খোঁজো।</p><p><strong>২০২৬ reality:</strong> অনেক প্রফেসর এখন AI-assisted inbox triage ব্যবহার করেন — জেনেরিক মেইল আরও বেশি ফিল্টার হয়। প্রথম লাইনেই তাঁর নির্দিষ্ট পেপার + তোমার নির্দিষ্ট কন্ট্রিবিউশন লেখো।</p><p><strong>ফলো-আপ:</strong> ২ সপ্তাহ পর উত্তর না এলে একবার রিমাইন্ডার। তারপর ছেড়ে দাও।</p><p><strong>সবচেয়ে গুরুত্বপূর্ণ:</strong> প্রফেসরের সাম্প্রতিক পেপারের একটি নির্দিষ্ট অংশ উল্লেখ করো। এটাই প্রমাণ করে তুমি আসলেই পড়েছ।</p>`
  }
});

// ══ DOOR 7: PROFILE STRATEGY ══
doors.push({
  num:7, icon:"⚖️", color:"#f06292", name:"তিন স্কেলের মিযান",
  subtitle:"The Three Scales of Measure", tech:"Low/Mid/High Profile Strategy",
  spirit:"মিযান — নিজের মাপ জানা",
  secret:"তোমার প্রোফাইল জানো, তার উপর কৌশল বানাও। High = R1 reach। Mid = R1+R2 mix। Low = R2+R3 বা bridge year। অহংকার নয় — বাস্তববোধ। নিজের মাপ জানাই প্রথম পদক্ষেপ।",
  recall:{
    q:"মিযান রক্ষক কেন তিনটি স্কেল আলাদা রাখেন?",
    qen:"Why does the scale keeper keep three scales separate?",
    a:"কারণ প্রতিটা প্রোফাইলের কৌশল আলাদা। High = সরাসরি R1। Mid = R1+R2 মিশ্রণ। Low = bridge year বা R2। নিজের মাপ না জানলে ভুল কৌশল = সব জায়গায় রিজেক্ট। সততার সাথে নিজেকে যাচাই করো।",
    aen:"Because each profile's strategy differs. High = direct R1. Mid = R1+R2 mix. Low = bridge year or R2. Wrong strategy = all rejections. Honestly assess yourself."
  },
  story:`
<p class="scene-setting">সপ্তম স্থান। একটা কক্ষে তিনটি বড় স্কেল — স্বর্ণ, রৌপ্য, ব্রোঞ্জ। মিযান রক্ষক হাজেরা পাশে দাঁড়িয়ে আছেন — ক্যালিপার হাতে, চোখে নিপুণতা। "তিন ধরনের আবেদনকারী," তিনি বললেন। "স্বর্ণ — উচ্চ প্রোফাইল। রৌপ্য — মাঝারি। ব্রোঞ্জ — নিম্ন। প্রতেকের জন্য আলাদা পথ। নিজের মাপ জানো আগে।"</p>
<p class="scene-setting en">The seventh station. A room with three large scales — gold, silver, bronze. Scale keeper Hazeera stands beside — calipers in hand, precision in eyes. "Three types of applicants," she said. "Gold — high profile. Silver — mid. Bronze — low. Each has a different path. Know your measure first."</p>

<div class="dialogue">দরোয়ান বলেছিলেন — প্রফেসরকে ইমেইল করো। কিন্তু আমি বলি — কোন প্রফেসরকে? কোন বিশ্ববিদ্যালয়ে? এটা নির্ভর করে তোমার প্রোফাইলের উপর। নিজের মাপ না জানলে ভুল জায়গায় আবেদন = সব জায়গায় রিজেক্ট। মিযান — নিজেকে সততার সাথে মাপা।</div>
<div class="dialogue en">"The gatekeeper said — email professors. But I say — which professors? Which universities? This depends on your profile. Not knowing your measure = applying to wrong places = all rejections. Mizan — measuring yourself honestly."</div>

<table class="kv-table"><tr><th>প্রোফাইল</th><th>সংকেত</th><th>কোথায় আবেদন</th><th>সম্ভাবনা</th></tr>
<tr><td class="hl">🥇 High</td><td>GPA ৩.৮+, ১-২+ পাবলিকেশন, thesis/RA, একাডেমিক LOR</td><td>Top-20 reach + Top-50 match, ১০-১৫টি</td><td>২০-৪০% (অন্তত একটি top-20)</td></tr>
<tr><td class="hl">🥈 Mid</td><td>GPA ৩.৩-৩.৭, ০-১ পাবলিকেশন, শক্ত প্রজেক্ট, প্রফেশনাল LOR</td><td>Top-50→100 reach + 100→150 match, ১৫-২০টি</td><td>১৫-৩০% (bridge সহ ~৪০%)</td></tr>
<tr><td class="hl">🥉 Low</td><td>GPA &lt;৩.৩, রিসার্চ নেই, সাধারণ LOR</td><td>Bridge year বা MS আগে; 150→250 match, ২০+টি</td><td>৫-১৫% (bridge ছাড়া)</td></tr></table>

<div class="svg-fig">
<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Profile strategy ladder">
<text x="320" y="20" fill="#e8e6f0" font-size="13" text-anchor="middle" font-weight="bold">প্রোফাইল → কৌশল → একই গন্তব্য</text>
<rect x="40" y="40" width="170" height="120" rx="12" fill="rgba(240,199,94,.12)" stroke="#f0c75e"/>
<text x="125" y="66" fill="#f0c75e" font-size="13" text-anchor="middle" font-weight="bold">🥇 High</text>
<text x="125" y="90" fill="#e8e6f0" font-size="10.5" text-anchor="middle">GPA ৩.৮+, পাবলিকেশন</text>
<text x="125" y="110" fill="#9290a8" font-size="10.5" text-anchor="middle">সরাসরি Top-20 reach</text>
<text x="125" y="130" fill="#9290a8" font-size="10.5" text-anchor="middle">১০-১৫ আবেদন</text>
<rect x="235" y="40" width="170" height="120" rx="12" fill="rgba(240,98,146,.1)" stroke="#f06292"/>
<text x="320" y="66" fill="#f06292" font-size="13" text-anchor="middle" font-weight="bold">🥈 Mid</text>
<text x="320" y="90" fill="#e8e6f0" font-size="10.5" text-anchor="middle">GPA ৩.৩-৩.৭, প্রজেক্ট</text>
<text x="320" y="110" fill="#9290a8" font-size="10.5" text-anchor="middle">Mix + কোল্ড ইমেইল</text>
<text x="320" y="130" fill="#9290a8" font-size="10.5" text-anchor="middle">+ ঐচ্ছিক bridge → mid+</text>
<rect x="430" y="40" width="170" height="120" rx="12" fill="rgba(179,127,235,.12)" stroke="#b37feb"/>
<text x="515" y="66" fill="#b37feb" font-size="13" text-anchor="middle" font-weight="bold">🥉 Low</text>
<text x="515" y="90" fill="#e8e6f0" font-size="10.5" text-anchor="middle">রিসার্চ এখনো নেই</text>
<text x="515" y="110" fill="#9290a8" font-size="10.5" text-anchor="middle">Bridge year / MS আগে</text>
<text x="515" y="130" fill="#9290a8" font-size="10.5" text-anchor="middle">তারপর আবেদন</text>
<path d="M125 165 C 200 200, 440 200, 515 165" fill="none" stroke="#5eead4" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="320" y="215" fill="#5eead4" font-size="12" text-anchor="middle">সব পথই PhD-তে পৌঁছায় — গতি আলাদা, গন্তব্য এক 🎓</text>
</svg>
<div class="fig-cap">চিত্র: প্রোফাইল কোনো রায় নয় — শুধু শুরুর বিন্দু। bridge year একটা low/mid প্রোফাইলকে ৬-১২ মাসে বদলে দিতে পারে।</div>
</div>

<div class="callout info"><span class="co-icon">🥈</span><div><strong>Mid-profile = সবচেয়ে সাধারণ জায়গা।</strong> এখানে কোল্ড ইমেইল আর একটা bridge (নিচে) তোমার সম্ভাবনা প্রায় দ্বিগুণ করতে পারে — কারণ কমিটি "potential researcher" খোঁজে, নিখুঁত অতীত নয়।</div></div>

<div class="callout tip"><span class="co-icon">🌉</span><div><strong>Mid-profile bridge (৬-১২ মাস):</strong></div></div>
<ul class="checklist">
<li>আন্ডারগ্র্যাড/মাস্টার্সের কোনো প্রফেসরকে ইমেইল করো — volunteer RA হিসেবে।</li>
<li>একটা ওপেন-সোর্স রিসার্চ প্রজেক্টে কন্ট্রিবিউট করো (PapersWithCode)।</li>
<li>একটা workshop paper লেখো — যেকোনো পাবলিকেশন কমিটির চোখে ওজন যোগায়।</li>
<li>কনফারেন্সে poster প্রেজেন্ট করো — প্রমাণ তুমি রিসার্চ কমিউনিটিতে আছো।</li>
<li>৬-১২ মাস পরে আবেদন করো — এখন তোমার প্রোফাইল "mid+"।</li>
</ul>

<div class="dialogue">মিযান — দাঁড়িপাল্লা, ভারসাম্য, ন্যায্যতা। কুরআনে আল্লাহ বলেন — "আমরা সত্যের সাথে মিযান স্থাপন করেছি।" (২১:৪৭)। নিজের মাপ জানা — অহংকার নয়, বিনয়। "আমি সব পারি" নয়, "আমি এটুকু পারি" — এই সততাই মিযান। PhD-তে আবেদন করার আগে নিজের স্কেলে দাঁড় করাও — সততার সাথে। তারপর কৌশল বানাও।</div>
<div class="dialogue en">"Mizan — scale, balance, fairness. Allah says — 'We established the scale with justice.' (21:47). Knowing your measure isn't arrogance — it's humility. Not 'I can do everything' but 'I can do this much' — this honesty is mizan. Before applying to PhD, stand on your scale — honestly. Then build your strategy."</div>`,
  senior:{
    title:"তোমার MSIS থেকে PhD — গ্যাপ ব্রিজ করো",
    body:`<p><strong>MSIS একটা প্রফেশনাল ডিগ্রি। PhD কমিটি রিসার্চ অভিজ্ঞতা খোঁজেন। এই গ্যাপ ব্রিজ করতে হবে:</strong></p><p><strong>১. আন্ডারগ্র্যাড বা মাস্টার্সের কোনো প্রফেসরকে ইমেইল করো:</strong> "আমি আপনার রিসার্চে volunteer হিসেবে কাজ করতে চাই।" বিনা পারিশ্রমিকে।</p><p><strong>২. ওপেন-সোর্স রিসার্চ রিপোজিটরি:</strong> PapersWithCode-এ কোনো রিপোজিটরিতে কন্ট্রিবিউট করো।</p><p><strong>৩. একটি টেকনিক্যাল ব্লগ:</strong> প্রতিটা পেপার পড়ে সারাংশ লেখো। এটাই তোমার "রিসার্চ পোর্টফোলিও।"</p><p><strong>৪. LedgerPilot-এ কাজ:</strong> AI/ML প্রজেক্ট করে একটি industry paper বা technical report লেখো।</p>`
  }
});

// ══ DOOR 8: GETTING RESEARCH EXPERIENCE ══
doors.push({
  num:8, icon:"📚", color:"#b37feb", name:"প্রথম পেপারের কারিগর",
  subtitle:"The First Paper's Craftsman", tech:"Getting Research Experience",
  spirit:"বিদায় — প্রথম ত্যাগ",
  secret:"রিসার্চ অভিজ্ঞতা ছাড়া PhD অ্যাডমিশন = অপ্রত্যাশিত। কিন্তু কীভাবে? Volunteer RA, open-source, workshop paper, poster presentation। একটা পেপার — এমনকি workshop — যেকোনো পাবলিকেশন থেকে ভালো।",
  recall:{
    q:"কারিগর কেন প্রথম পেপার নিজে না বানিয়ে শিখিয়ে দেন?",
    qen:"Why does the craftsman teach you to make your first paper, not make it for you?",
    a:"কারণ রিসার্চ শেখা = কাজ করা। কেউ তোমার হয়ে পেপার লিখবে না। তোমাকে শিখতে হবে — literature review, hypothesis, experiment, writing। প্রথম পেপার কঠিন — কিন্তু এটাই তোমার প্রমাণ যে তুমি গবেষক হতে পারবে।",
    aen:"Because learning research = doing it. No one writes your paper for you. You must learn — literature review, hypothesis, experiment, writing. First paper is hard — but it proves you can be a researcher."
  },
  story:`
<p class="scene-setting">অষ্টম স্থান। একটা কারিগরের কর্মশালা। সামনে কাঁচা পাপিরাস — ফাঁকা। কারিগর ইব্রাহিম একটা হাতে কলম, অন্য হাতে প্রজেক্ট। "প্রথম পেপার," তিনি বললেন। "সবচেয়ে কঠিন। কিন্তু এটাই প্রমাণ — তুমি শুধু পড়তে পারো না, তৈরি করতে পারো।"</p>
<p class="scene-setting en">The eighth station. A craftsman's workshop. Before: blank papyrus. Craftsman Ibrahim holds pen in one hand, project in other. "First paper," he said. "Hardest. But this is proof — you don't just read, you create."</p>

<div class="dialogue">মিযান রক্ষক বলেছিলেন — নিজের মাপ জানো। কিন্তু আমি বলি — মাপ জানার পর সেই মাপ বাড়াও। কীভাবে? রিসার্চ করে। একটা পেপার লিখে। এটাই সবচেয়ে শক্তিশালী প্রমাণ — তুমি গবেষক হতে পারবে। কোনো প্রফেসর তোমার কাজ দেখলে, তিনি বুঝবেন তুমি প্রস্তুত।</div>
<div class="dialogue en">"The scale keeper said — know your measure. But I say — after knowing, increase it. How? By doing research. Writing a paper. This is the strongest proof — you can be a researcher. When a professor sees your work, they'll know you're ready."</div>

<table class="kv-table"><tr><th>পথ</th><th>কীভাবে</th><th>প্রভাব</th></tr>
<tr><td class="hl">Volunteer RA</td><td>প্রফেসরকে ইমেইল, ১০-১৫ ঘ/সপ্তাহ বিনা বেতনে, লক্ষ্য co-author</td><td>সর্বোচ্চ (কিন্তু কঠিন)</td></tr>
<tr><td class="hl">Industry research</td><td>কাজে রিসার্চ কম্পোনেন্ট → technical report / patent</td><td>মাঝারি</td></tr>
<tr><td class="hl">Open-source</td><td>PapersWithCode/HuggingFace রিপো, arXiv preprint</td><td>মাঝারি (প্রফেসর জড়িত নন)</td></tr>
<tr><td class="hl">Workshop paper</td><td>ছোট, নির্দিষ্ট টপিক; review হয় ও প্রকাশ পায়</td><td>উচ্চ — প্রথম পাবলিকেশনের সেরা জায়গা</td></tr>
<tr><td class="hl">Poster / abstract</td><td>কনফারেন্সে ছোট abstract + poster</td><td>নিম্ন-মাঝারি (তুমি রিসার্চে আছো তার প্রমাণ)</td></tr></table>

<div class="svg-fig">
<svg viewBox="0 0 660 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paper pipeline">
<text x="330" y="20" fill="#e8e6f0" font-size="13" text-anchor="middle" font-weight="bold">প্রথম পেপারের পাইপলাইন (৬ মাসের সংস্করণ)</text>
<rect x="20" y="45" width="140" height="44" rx="10" fill="rgba(179,127,235,.15)" stroke="#b37feb"/><text x="90" y="63" fill="#b37feb" font-size="11" text-anchor="middle">মাস ১-২</text><text x="90" y="80" fill="#e8e6f0" font-size="10.5" text-anchor="middle">২০ পেপার → গ্যাপ খোঁজা</text>
<rect x="180" y="45" width="140" height="44" rx="10" fill="rgba(94,234,212,.15)" stroke="#5eead4"/><text x="250" y="63" fill="#5eead4" font-size="11" text-anchor="middle">মাস ৩-৪</text><text x="250" y="80" fill="#e8e6f0" font-size="10.5" text-anchor="middle">এক্সপেরিমেন্ট + ডেটা</text>
<rect x="340" y="45" width="140" height="44" rx="10" fill="rgba(240,199,94,.15)" stroke="#f0c75e"/><text x="410" y="63" fill="#f0c75e" font-size="11" text-anchor="middle">মাস ৫</text><text x="410" y="80" fill="#e8e6f0" font-size="10.5" text-anchor="middle">লেখা → arXiv preprint</text>
<rect x="500" y="45" width="140" height="44" rx="10" fill="rgba(82,196,26,.18)" stroke="#52c41a"/><text x="570" y="63" fill="#52c41a" font-size="11" text-anchor="middle">মাস ৬</text><text x="570" y="80" fill="#e8e6f0" font-size="10.5" text-anchor="middle">Workshop submit 🎉</text>
<path d="M160 67 L178 67 M320 67 L338 67 M480 67 L498 67" stroke="#5e5c74" stroke-width="2" marker-end="none"/>
<path d="M570 95 C 570 125, 300 130, 250 95" fill="none" stroke="#ff6b35" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="410" y="135" fill="#ff6b35" font-size="10.5" text-anchor="middle">Review → revision → আবার এক্সপেরিমেন্ট (স্বাভাবিক লুপ!)</text>
</svg>
<div class="fig-cap">চিত্র: রিজেক্ট হলে লুপে ফেরো — এটাই রিসার্চ। প্রথমবার সবচেয়ে ধীর; দ্বিতীয় পেপার দ্বিগুণ দ্রুত হয়।</div>
</div>

<div class="callout info"><span class="co-icon">🔬</span><div><strong>The paper pipeline (৬-১৮ মাস):</strong> Idea → Literature Review → Hypothesis → Experiment → Analysis → Writing → Submission → Review → Revision → Publication। প্রতিটা ধাপ ছোট মনে হলেও শেখার — প্রথমবার সবচেয়ে ধীর, পরেরবার দ্বিগুণ দ্রুত।</div></div>

<div class="callout tip"><span class="co-icon">💡</span><div><strong>প্রথম পেপারের idea কোথায়:</strong> তোমার কাজের সময় যে সমস্যায় আটকেছ, বা যে AI টুল ভালো ফল দিয়েছে — সেটাই। একটা case study + একটা technique = একটা workshop paper (যেমন: "LLM-based structured output with retrieval constraints")।</div></div>

<div class="dialogue">বিদায় — ত্যাগ। হজ্জে পশু কুরবানি — সম্পদের ত্যাগ। PhD-এর প্রস্তুতিতেও ত্যাগ — সময়ের, শ্রমের। Volunteer RA = বিনা পারিশ্রমিকে কাজ। সন্ধ্যায় পেপার লেখা = বিশ্রামের ত্যাগ। কিন্তু এই ত্যাগই তোমার পথ তৈরি করে। প্রথম পেপার = প্রথম কুরবানি — তোমার গবেষক হওয়ার প্রমাণ।</div>
<div class="dialogue en">"Biday — sacrifice. In Hajj, animal sacrifice — giving wealth. In PhD preparation, sacrifice too — of time, labor. Volunteer RA = unpaid work. Evening paper writing = sacrificing rest. But this sacrifice builds your path. First paper = first sacrifice — proof you can be a researcher."</div>`,
  senior:{
    title:"৬ মাসে প্রথম পাবলিকেশন — ক্রম",
    body:`<p><strong>মাস ১-২:</strong> একটি এরিয়া বেছে নাও। ২০টি পেপার পড়ো। একটি সমস্যা খোঁজো যা unsolved।</p><p><strong>মাস ৩-৪:</strong> এক্সপেরিমেন্ট করো। কোড লেখো, ডেটা সংগ্রহ করো, ফলাফল বিশ্লেষণ করো।</p><p><strong>মাস ৫:</strong> লেখো। ৬-৮ পৃষ্ঠার পেপার। arXiv-এ preprint পোস্ট করো।</p><p><strong>মাস ৬:</strong> একটি workshop-এ submit করো (NeurIPS workshop, ACL workshop)। Review পাও। সংশোধন করো।</p><p>একটি workshop paper = যেকোনো পাবলিকেশন থেকে ভালো। কমিটি দেখেন তুমি পেপার লিখতে পারো।</p>`
  }
});

// ══ DOOR 9: INTERVIEW & ADMISSIONS ══
doors.push({
  num:9, icon:"🧭", color:"#36d6e7", name:"কমিটির কক্ষ",
  subtitle:"The Committee's Chamber", tech:"PhD Interview & Admissions",
  spirit:"বাইআত — আনুগত্যের শপথ",
  secret:"PhD ইন্টারভিউ = কোডিং নয়। রিসার্চ আলোচনা। তোমার আগ্রহ, তোমার চিন্তা, তোমার প্রশ্ন। প্রফেসর দেখতে চান — তুমি কি তাঁর সাথে কাজ করতে পারবে? কারিগরের কাজের ধরন কি তোমার সাথে মেলে?",
  recall:{
    q:"কমিটির কক্ষে কেন কোডিং পরীক্ষা নেওয়া হয় না, কথোপকথন হয়?",
    qen:"Why is the committee interview a conversation, not a coding test?",
    a:"কারণ PhD = কোডিং নয়, গবেষণা। প্রফেসর জানতে চান — তুমি কি চিন্তা করতে পারো? তোমার কৌতূহল আছে? তাঁর কাজে আগ্রহ আছে? এটা কথোপকথনে বোঝা যায়, পরীক্ষায় নয়।",
    aen:"Because PhD = research, not coding. The professor wants to know — can you think? Are you curious? Are you interested in their work? This shows in conversation, not tests."
  },
  story:`
<p class="scene-setting">নবম স্থান। একটা গোলাকার কক্ষ। মাঝখানে একটা বড় টেবিল — তিন-চারজন প্রফেসর বসে আছেন। তুমি সামনে। কোনো হাতুড়ি-পেরেক নেই, কোনো কোডিং স্ক্রিন নেই। শুধু কথোপকথন। প্রফেসর মাহমুদ হাসান হাসিমুখে বললেন — "বলো, তোমার কী ভাবনা?"</p>
<p class="scene-setting en">The ninth station. A circular room. A large table in center — three-four professors seated. You before them. No hammer-nails, no coding screen. Just conversation. Professor Mahmud Hasan smiles — "Tell me, what are you thinking about?"</p>

<div class="dialogue">কারিগর বলেছিলেন — পেপার লেখো। কিন্তু আমি বলি — পেপার লেখার পর আসে শেষ পরীক্ষা। PhD ইন্টারভিউ। কিন্তু এটা কোডিং ইন্টারভিউ নয় — রিসার্চ কথোপকথন। প্রফেসর দেখতে চান — তুমি কি তাঁর সাথে ৫ বছর কাজ করতে পারবে?</div>
<div class="dialogue en">"The craftsman said — write a paper. But I say — after the paper comes the final test. PhD interview. But this isn't a coding interview — it's a research conversation. The professor wants to see — can you work with them for 5 years?"</div>

<table class="kv-table"><tr><th>ধরন</th><th>কী হয়</th><th>তারা যা দেখে</th></tr>
<tr><td class="hl">Zoom/Video<br><small>সবচেয়ে সাধারণ</small></td><td>৩০-৬০ মিনিট, ১-৩ জন প্রফেসর; SOP/পেপার/প্রজেক্ট নিয়ে আলোচনা</td><td>আগ্রহ ও ফিট</td></tr>
<tr><td class="hl">Campus visit<br><small>recruitment weekend</small></td><td>১-২ দিন; ১:১ মিটিং, বর্তমান শিক্ষার্থীদের সাথে কথা, ল্যাব ট্যুর</td><td>সংস্কৃতি ও পারস্পরিক ফিট</td></tr>
<tr><td class="hl">Technical<br><small>discussion</small></td><td>একটা পেপার নিয়ে: "এই method-এ সমস্যা কী? কীভাবে উন্নত করবে?"</td><td>চিন্তার প্রক্রিয়া</td></tr></table>

<div class="callout info"><span class="co-icon">❓</span><div><strong>যে প্রশ্ন প্রায় সবসময় আসে:</strong></div></div>
<ul class="checklist">
<li>"কেন PhD? কেন এখন?"</li>
<li>"কোন সমস্যা নিয়ে কাজ করতে চাও?"</li>
<li>"কেন আমার ল্যাব?" — নির্দিষ্ট পেপার উল্লেখ করো।</li>
<li>"৫ বছর পর কোথায় দেখতে চাও?"</li>
<li>"তোমার কোনো প্রশ্ন?" — সবসময় প্রস্তুত রাখো (নিচের সিনিয়র ইনসাইট দেখো)।</li>
</ul>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খারাপ উত্তর</div>"আমি সব পারি।" "আমি ভালো ছাত্র।" "আপনার ল্যাব বিখ্যাত।" — জেনেরিক, নির্দিষ্ট নয়। প্রফেসর বিরক্ত।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ভালো উত্তর</div>"আমি আপনার ২০২৩ paper on constrained decoding পড়েছি। আমি LedgerPilot-এ RAG নিয়ে কাজ করেছি — একই সমস্যা। আমি জানতে চাই — constrained generation কি retrieval-augmented settings-এ কাজ করে?" — নির্দিষ্ট, পেপারের উল্লেখ, প্রশ্ন।</div>
</div>

<div class="svg-fig">
<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-way interview evaluation">
<rect x="40" y="45" width="200" height="80" rx="14" fill="rgba(54,214,231,.12)" stroke="#36d6e7"/>
<text x="140" y="75" fill="#36d6e7" font-size="13" text-anchor="middle" font-weight="bold">প্রফেসর যাচাই করেন</text>
<text x="140" y="97" fill="#9290a8" font-size="10.5" text-anchor="middle">কৌতূহল · চিন্তার প্রক্রিয়া</text>
<text x="140" y="113" fill="#9290a8" font-size="10.5" text-anchor="middle">৫ বছর একসাথে কাজের ফিট</text>
<rect x="400" y="45" width="200" height="80" rx="14" fill="rgba(94,234,212,.12)" stroke="#5eead4"/>
<text x="500" y="75" fill="#5eead4" font-size="13" text-anchor="middle" font-weight="bold">তুমিও যাচাই করো</text>
<text x="500" y="97" fill="#9290a8" font-size="10.5" text-anchor="middle">advising style · ফান্ডিং</text>
<text x="500" y="113" fill="#9290a8" font-size="10.5" text-anchor="middle">ল্যাব সংস্কৃতি · প্রাক্তনরা কোথায়</text>
<path d="M245 70 L395 70" stroke="#36d6e7" stroke-width="2"/><polygon points="395,70 383,64 383,76" fill="#36d6e7"/>
<path d="M395 100 L245 100" stroke="#5eead4" stroke-width="2"/><polygon points="245,100 257,94 257,106" fill="#5eead4"/>
<text x="320" y="155" fill="#e8e6f0" font-size="12" text-anchor="middle">ইন্টারভিউ = দ্বিমুখী যাচাই। খারাপ advisor-fit-ই ঝরে পড়ার ১ নম্বর কারণ।</text>
</svg>
<div class="fig-cap">চিত্র: প্রশ্ন করা দুর্বলতা নয় — ভালো প্রশ্ন করাই সবচেয়ে শক্ত সিগন্যাল যে তুমি গবেষকের মতো ভাবছ।</div>
</div>

<div class="dialogue">বাইআত — আনুগত্যের শপথ। বাইআতে দুই পক্ষ — এক হাত বাড়ায়, অন্য গ্রহণ করে। PhD ইন্টারভিউও তেমনি — প্রফেসর দেখছেন তুমি তাঁর সাথে কাজ করতে প্রস্তুত কি না। তুমি দেখছ তাঁর ল্যাব তোমার জন্য ঠিক কি না। বাইআত একপাক্ষিক নয় — উভয়ের সম্মতি। ইন্টারভিউও — তুমিও প্রশ্ন করো, শুধু উত্তর দাও না।</div>
<div class="dialogue en">"Bai'at — pledge of allegiance. In bai'at, two parties — one extends hand, other accepts. PhD interview too — the professor sees if you're ready to work with them. You see if their lab is right for you. Bai'at isn't one-sided — mutual consent. Interview too — you also ask questions, don't just answer."</div>`,
  senior:{
    title:"ইন্টারভিউতে যে ৫টি প্রশ্ন তুমি করবে",
    body:`<p><strong>ইন্টারভিউর শেষে "তোমার কোনো প্রশ্ন?" — এখানে তোমার প্রশ্ন:</strong></p><p><strong>১.</strong> "আপনার বর্তমান PhD শিক্ষার্থীরা কী নিয়ে কাজ করছেন?"</p><p><strong>২.</strong> "আপনার ল্যাবে নতুন শিক্ষার্থীদের কীভাবে onboard করা হয়?"</p><p><strong>৩.</strong> "প্রথম দুই বছরে কোন কোর্স বা প্রজেক্ট সুপারিশ করবেন?"</p><p><strong>৪.</strong> "আপনার গ্রুপে funding সাধারণত কীভাবে হয় — RA বা TA?"</p><p><strong>৫.</strong> "আপনার প্রাক্তন শিক্ষার্থীরা এখন কোথায় আছেন?"</p><p>এই প্রশ্নগুলো প্রমাণ করে — তুমি গবেষণা করেছ, গুরুত্ব দিয়ে ভাবছ।</p>`
  }
});

// ══ DOOR 10: LIFE AS A PHD STUDENT ══
doors.push({
  num:10, icon:"🎓", color:"#a78bfa", name:"স্কলারের মুকুট",
  subtitle:"The Scholar's Crown", tech:"Life as a PhD Student",
  spirit:"ইলম — জ্ঞান ইবাদত",
  secret:"PhD জীবন = স্বাধীনতা + একাকীত্ব। কেউ তোমাকে বলবে না কী করতে। নিজে খুঁজতে হবে। উত্তর নেই — তুমিই উত্তর বানাও। ৫-৭ বছরের সবচেয়ে গভীর যাত্রা — শুধু পেশাগত নয়, ব্যক্তিগত।",
  recall:{
    q:"স্কলার কেন মুকুট পরার পরেও শেখা চালিয়ে যান?",
    qen:"Why does the scholar keep learning even after wearing the crown?",
    a:"কারণ PhD শেষ নয় — শুরু। স্কলার হওয়া মানে শেখা শেষ নয়, শেখা শুরু। ইলম — জ্ঞান — একটা জীবনের ইবাদত। PhD-এর পরে প্রফেসর, রিসার্চার — কিন্তু শেখা কখনো শেষ হয় না।",
    aen:"Because PhD isn't the end — it's the beginning. Becoming a scholar doesn't mean learning is done, it means learning starts. Ilm — knowledge — is a lifelong worship. After PhD: professor, researcher — but learning never ends."
  },
  story:`
<p class="scene-setting">দশম স্থান। শেষ স্থান। একটা শান্ত গ্রন্থাগার — কিন্তু সাধারণ নয়। এই গ্রন্থাগারে কোনো বই পূর্ণ নয় — প্রতিটা খোলা, প্রতিটা লেখা হচ্ছে। কারণ জ্ঞান শেষ হয় না। স্কলার সাঈদ দাঁড়িয়ে আছেন — বয়স্ক, কিন্তু চোখে তরুণের কৌতূহল। "মুকুট?" তিনি হাসলেন। "মুকুট নয়। চাবি। জ্ঞানের দরজা খোলার চাবি।"</p>
<p class="scene-setting en">The tenth station. The last. A quiet library — but not ordinary. No book here is complete — each open, each being written. Because knowledge never ends. Scholar Saeed stands — elderly, yet with a youth's curiosity. "Crown?" he laughed. "Not a crown. A key. A key to open the doors of knowledge."</p>

<div class="dialogue">নয়টি স্থান পেরিয়েছ। তীর্থযাত্রী বলেছিলেন — কেন। মানচিত্রকার বলেছিলেন — কী। বণিক বলেছিলেন — ফান্ডিং। দিকনির্দেশক বলেছিলেন — কোথায়। পণ্ডিত বলেছিলেন — SOP। দরোয়ান বলেছিলেন — ইমেইল করো। মিযান রক্ষক বলেছিলেন — নিজের মাপ জানো। কারিগর বলেছিলেন — পেপার লেখো। কমিটির কক্ষ বলেছিলেন — কথোপকথন। আর আমি বলি — এই সবের পরে আসল জীবন। PhD জীবন।</div>
<div class="dialogue en">"You've passed nine stations. The pilgrim said — why. The cartographer said — what. The merchant said — funding. The guide said — where. The scholar said — SOP. The gatekeeper said — email. The scale keeper said — know your measure. The craftsman said — write a paper. The committee said — conversation. And I say — after all this comes real life. PhD life."</div>

<div class="callout info"><span class="co-icon">🕊️</span><div><strong>স্বাধীনতা:</strong> কেউ বলবে না কী করতে — তুমিই তোমার সময়, প্রশ্ন আর সময়সূচীর মালিক। দারুণ, কিন্তু স্বাধীনতা = দায়িত্ব।</div></div>
<div class="callout info"><span class="co-icon">🌑</span><div><strong>একাকীত্ব:</strong> তোমার সমস্যা শুধু তোমার; বন্ধুরা ইন্ডাস্ট্রিতে চলে গেছে। কিন্তু ল্যাবের সহকর্মীরাই হয়ে ওঠে নতুন পরিবার।</div></div>
<div class="callout warn"><span class="co-icon">💥</span><div><strong>ব্যর্থতা:</strong> রিসার্চ = ব্যর্থতার আরেক নাম। এক্সপেরিমেন্ট ভাঙবে, পেপার বারবার রিজেক্ট হবে — কিন্তু "negative result"-ও ফলাফল, প্রতিটা ব্যর্থতা শেখা।</div></div>
<div class="callout warn"><span class="co-icon">🧠</span><div><strong>মানসিক স্বাস্থ্য:</strong> PhD-তে depression/anxiety-র হার উচ্চ; imposter syndrome ("আমি যথেষ্ট ভালো না") প্রায় সবার হয়। এটা দুর্বলতা নয় — সিস্টেমের চাপ। থেরাপি, কমিউনিটি, ঘুম ও ব্যায়ামকে "luxury" নয়, রিসার্চের অংশ ভাবো। প্রয়োজনে সাহায্য চাওয়াই শক্তি।</div></div>

<div class="svg-fig">
<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Post PhD career branches">
<circle cx="90" cy="110" r="38" fill="rgba(167,139,250,.18)" stroke="#a78bfa" stroke-width="2"/>
<text x="90" y="106" fill="#a78bfa" font-size="13" text-anchor="middle" font-weight="bold">PhD</text>
<text x="90" y="124" fill="#9290a8" font-size="10" text-anchor="middle">🎓 চাবি</text>
<path d="M128 92 C 220 40, 320 35, 430 35" fill="none" stroke="#7dd3fc" stroke-width="2"/>
<path d="M128 103 C 230 85, 330 82, 430 82" fill="none" stroke="#5eead4" stroke-width="2"/>
<path d="M128 120 C 230 135, 330 138, 430 138" fill="none" stroke="#f0c75e" stroke-width="2"/>
<path d="M128 131 C 220 180, 320 185, 430 185" fill="none" stroke="#ff6b35" stroke-width="2"/>
<text x="440" y="40" fill="#7dd3fc" font-size="12">🏛️ একাডেমিয়া — নিজের ল্যাব, শিক্ষার্থী</text>
<text x="440" y="87" fill="#5eead4" font-size="12">🔬 ইন্ডাস্ট্রি রিসার্চ — DeepMind, MSR, FAIR</text>
<text x="440" y="143" fill="#f0c75e" font-size="12">🚀 স্টার্টআপ — রিসার্চ → প্রোডাক্ট</text>
<text x="440" y="190" fill="#ff6b35" font-size="12">🏦 সরকারি / জাতীয় ল্যাব</text>
</svg>
<div class="fig-cap">চিত্র: মুকুট নয় — চাবি। একই PhD থেকে চারটা দরজা খোলে, আর মাঝপথে দরজা বদলানোও যায়।</div>
</div>

<table class="kv-table"><tr><th>PhD-এর পরে</th><th>কী</th><th>আয় (আনুমানিক)</th></tr>
<tr><td class="hl">একাডেমিয়া</td><td>প্রফেসর → নিজের ল্যাব, রিসার্চ, শিক্ষার্থী</td><td>$৮০-১৫০K+ (tenure-track)</td></tr>
<tr><td class="hl">ইন্ডাস্ট্রি রিসার্চ</td><td>Google DeepMind, MS Research, Meta FAIR, Anthropic</td><td>$২০০-৪০০K+</td></tr>
<tr><td class="hl">স্টার্টআপ</td><td>নিজের রিসার্চ → প্রোডাক্ট → কোম্পানি</td><td>পরিবর্তনশীল (equity)</td></tr>
<tr><td class="hl">সরকারি/জাতীয় ল্যাব</td><td>NSF, DARPA, NASA, national labs</td><td>$১০০-১৮০K</td></tr></table>

<div class="src-box"><div class="src-label">যাচাইকৃত উৎস / Verified Sources</div>মানসিক স্বাস্থ্য: Evans et al., <em>Nature Biotechnology</em> 36, 282–284 (2018) — ৪১% মাঝারি-গুরুতর anxiety, ৩৯% depression; ভালো mentor-সম্পর্ক ও work-life balance কম উপসর্গের সাথে যুক্ত · ক্যারিয়ার ও আয়ের রেঞ্জ আনুমানিক — বর্তমান সংখ্যার জন্য NSF SED "postgraduation plans" টেবিল (ncses.nsf.gov) ও levels.fyi (self-reported) দেখো।</div>

<div class="dialogue">ইলম — জ্ঞান। নবীজি (সা) বলেছেন — "জ্ঞান অর্জন প্রতিটি মুসলিমের উপর ফরজ।" PhD হলো জ্ঞানের সবচেয়ে গভীর পথ — শুধু জ্ঞান গ্রহণ নয়, জ্ঞান সৃষ্টি। এটা শুধু পেশাগত নয় — আধ্যাত্মিক। প্রতিটি নতুন আবিষ্কার আল্লাহর সৃষ্টির একটি নতুন দিক উন্মোচন। PhD-র মাধ্যমে তুমি আল্লাহর কালামের আরেকটি আয়াত পড়ো — "সবকিছু আমরা গণনা করেছি একটি সুরক্ষিত গ্রন্থে।" (৭৮:২৯)</div>
<div class="dialogue en">"Ilm — knowledge. The Prophet (pbuh) said — 'Seeking knowledge is obligatory upon every Muslim.' PhD is the deepest path of knowledge — not just receiving knowledge, but creating it. This isn't just professional — it's spiritual. Each new discovery reveals a new aspect of Allah's creation. Through PhD you read another ayah of Allah's word — 'We have enumerated all things in a secure register.' (78:29)"</div>

<div class="verse">"মানুষের জন্য সে ছাড়া কিছু নেই যা সে চেষ্টা করে।"<br>— কুরআন ৫৩:৩৯<br><br>PhD একটা চেষ্টা — দীর্ঘ, কঠিন, কিন্তু গভীর। প্রতিটা চেষ্টা আল্লাহর কাছে গৃহীত। প্রতিটা পরীক্ষা একটি সুযোগ। প্রতিটা ব্যর্থতা একটি শেখা। যারা জ্ঞানের পথে চলে, আল্লাহ তাদের জন্য সহজ করে দেন জান্নাতের পথ।</div>

<div class="secret-box"><div class="label">দশম স্থান — রহস্য</div><div class="text">🎓 PhD = মুকুট নয়, চাবি। জ্ঞানের চাবি।<br><small>স্বাধীনতা + একাকীত্ব + ব্যর্থতা = সৃষ্টি। ইলম ইবাদত — জ্ঞান সৃষ্টি সবচেয়ে গভীর ইবাদত।</small></div></div>`
});
