// ════════════════════════════════════════
// পরীক্ষার ময়দান — DOORS 1-4
// Interview Prep: Resume → Coding Patterns
// ════════════════════════════════════════
const doors = [];

// ══ DOOR 1: RESUME & FIRST IMPRESSION ══
doors.push({
  num:1, icon:"📜", color:"#7c8aff", name:"নথিপত্রকারের ডেস্ক",
  subtitle:"The Scribe's Desk", tech:"Resume & First Impression",
  spirit:"সিদ্ক — সততা, স্বচ্ছতা",
  secret:"রিজিউমি একটা গল্প — নিজের। প্রতিটা লাইনে প্রভাব দেখাও, দায়িত্ব নয়। সত্য বলো, কিন্তু সত্যিকারের গল্প বলো।",
  recall:{
    q:"নথিপত্রকার কেন সব বিবরণ লেখেন না, শুধু প্রভাব?",
    qen:"Why does the scribe write only impact, not all details?",
    a:"কারণ ইন্টারভিউয়ার ৬ সেকেন্ডে রিজিউমি দেখেন। বিবরণ = নৈর্ব্যক্তিক। প্রভাব = গল্প। 'উন্নতি করেছি 40%' — প্রভাব। 'দায়িত্ব ছিল কোড লেখা' — বিবরণ।",
    aen:"Because interviewers scan resumes in 6 seconds. Details = generic. Impact = story. 'Improved performance 40%' — impact. 'Responsible for coding' — generic."
  },
  story:`
<p class="scene-setting">প্রথম পরীক্ষা। একটা সুসজ্জিত ডেস্ক। পালকের কলম, পার্চমেন্ট, সিলের মোহর। নথিপত্রকার ইউসুফ বসে আছেন — মধ্যবয়সী, নিখুঁত হাত, চোখে বিশ্লেষণ। সামনে একটা খালি পার্চমেন্ট। "তোমার গল্প লেখো," তিনি বললেন। "কিন্তু সব নয়। শুধু যা গুরুত্বপূর্ণ।"</p>
<p class="scene-setting en">The first trial. A well-organized desk. Quill pen, parchment, seal stamp. Scribe Yusuf sits — middle-aged, precise hands, analytical eyes. A blank parchment before him. "Write your story," he said. "But not everything. Only what matters."</p>

<div class="dialogue">তোমার রিজিউমি হলো তোমার গল্প। কিন্তু একটা নির্দিষ্ট গল্প — যেটা ৬ সেকেন্ডে পড়া যায়। ইন্টারভিউয়ার প্রতিটা রিজিউমিতে গড়ে ৬ সেকেন্ড দেন। সেই ৬ সেকেন্ডে তোমাকে আলাদা করতে হবে।</div>
<div class="dialogue en">"Your resume is your story. But a specific story — readable in 6 seconds. Interviewers spend on average 6 seconds per resume. In those 6 seconds, you must stand out."</div>

<div class="diagram"><svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="8" fill="rgba(240,98,146,.06)" stroke="#f06292" stroke-width="2"/><text x="100" y="50" text-anchor="middle" fill="#f06292" font-size="11" font-weight="bold">RESUME</text><text x="100" y="75" text-anchor="middle" fill="#9a93b8" font-size="9">6 seconds</text><text x="100" y="100" text-anchor="middle" fill="#9a93b8" font-size="9">to make impression</text><text x="100" y="135" text-anchor="middle" fill="#f06292" font-size="9" font-weight="bold">ATS scan first</text><text x="100" y="155" text-anchor="middle" fill="#9a93b8" font-size="8">keywords matter</text><line x1="180" y1="100" x2="220" y2="100" stroke="#34d399" stroke-width="2" marker-end="url(#a)"/><defs><marker id="a" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#34d399"/></marker></defs><rect x="225" y="50" width="160" height="100" rx="8" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="2"/><text x="305" y="80" text-anchor="middle" fill="#2dd4bf" font-size="11" font-weight="bold">RECRUITER</text><text x="305" y="105" text-anchor="middle" fill="#9a93b8" font-size="9">30 sec scan</text><text x="305" y="125" text-anchor="middle" fill="#9a93b8" font-size="9">impact > duties</text><line x1="385" y1="100" x2="425" y2="100" stroke="#34d399" stroke-width="2" marker-end="url(#a)"/><rect x="430" y="50" width="110" height="100" rx="8" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="2"/><text x="485" y="80" text-anchor="middle" fill="#52c41a" font-size="11" font-weight="bold">INTERVIEW</text><text x="485" y="105" text-anchor="middle" fill="#9a93b8" font-size="9">your chance</text><text x="485" y="125" text-anchor="middle" fill="#9a93b8" font-size="9">to shine</text></svg></div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ দায়িত্ব লেখা</div>"Backend API ডেভেলপমেন্ট।" "ডেটাবেস মেইনটেন্যান্স।" "কোড রিভিউ।" — সবাই এটা লেখে। কোনো প্রভাব নেই। কোনো সংখ্যা নেই। বোরিং।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ প্রভাব লেখা</div>"API রেসপন্স টাইম ৪০% কমিয়েছি — ২০০ms থেকে ১২০ms।" "৩০০০+ ব্যবহারকারীর জন্য ক্যাশিং সিস্টেম ডিজাইন করেছি।" — সংখ্যা, প্রভাব, গল্প।</div>
</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Whiteboard Practice:</strong> Knew the algorithm but froze at whiteboard. Fix: practice talking out loud while coding.</div></div>


<div class="code-block"># ── STEP 1: Resume formula — impact over responsibility ──
# Writing bullet points that get interviews.

# GOOD BULLET POINT = Action + Context + Result (with numbers)

# ❌ BAD: "Responsible for API development"
# ✅ GOOD: "Built REST API handling 10K req/day, reducing response time 40% via Redis caching"

# ❌ BAD: "Worked on database optimization"
# ✅ GOOD: "Optimized PostgreSQL queries, cutting page load from 3s to 0.8s for 50K users"

# ❌ BAD: "Team lead for web project"
# ✅ GOOD: "Led 5-engineer team to deliver fintech dashboard 2 weeks ahead of schedule"

# RESUME RULES:
# → Numbers in EVERY bullet point (quantify your impact)
# → Start with action verbs: Built, Led, Reduced, Architected, Launched
# → 1 page max (2 pages for senior roles)
# → ATS-friendly: no images, no columns, simple text format
# → Match keywords from job description exactly

# PYTHON (resume bullet generator):
def generate_bullet(action, what, metric, impact):
    """Generate ATS-optimized resume bullet."""
    templates = [
        f"{action} {what} {metric}, {impact}",
        f"{action} {what}, {impact} {metric}",
        f"{impact}: {action} {what} {metric}",
    ]
    return templates[0]

bullets = [
    generate_bullet("Built", "Django REST API", "serving 10K req/day",
                    "reducing response time 40% via Redis caching"),
    generate_bullet("Led", "migration to microservices", "for 200K users",
                    "reducing deployment time from 30min to 5min"),
    generate_bullet("Architected", "real-time analytics pipeline",
                    "processing 1M events/day", "enabling sub-second dashboards"),
]
for b in bullets:
    print(f"  • {b}")

# ATS (APPLICANT TRACKING SYSTEM):
# 75% of resumes rejected by ATS before a human sees them!
# → Use standard section headers: Experience, Education, Skills
# → Use exact keywords from job posting ("Python", not "পাইথন")
# → Save as PDF or .docx (never .pages, .odt)
# → No tables, text boxes, headers/footers (ATS can't parse)
# → Test with free ATS scanners (JobScan, ResumeWorded)

# PROJECT PORTFOLIO (for software engineers):
# → GitHub: clean, pinned repos, README with screenshots
# → Live demos: deploy projects (Heroku, Vercel, Railway)
# → Diversity: show range (web, ML, systems, mobile)
# → Depth: one impressive project > 10 basic ones
# → Write: blog posts about what you learned</div>

<div class="code-block"># ── STEP 2: "Tell me about yourself" — Present-Past-Future ──
# The most important 90 seconds of the interview.

# FORMULA: Present → Past → Future

tell_me = """
"TELL ME ABOUT YOURSELF" — STRUCTURE:

1. PRESENT (who you are now):
   "I'm a backend engineer at LedgerPilot, building Django REST APIs
    for financial services handling 50K daily transactions."

2. PAST (relevant experience):
   "Previously, I built real-time analytics at Ipractus using Django
    and PostgreSQL. I also led the migration to Docker containers,
    reducing deployment time by 80%."

3. FUTURE (why this role):
   "I'm now looking to bring my API design and cloud infrastructure
    experience to a team building at larger scale, which is why
    I'm excited about this role at [company]."

KEEP IT:
  → 60-90 seconds (not 5 minutes)
  → Relevant to the role (not your life story)
  → Enthusiastic and confident
  → End with why THIS company

DON'T:
  → Recite your resume (they already read it)
  → Talk about personal/family details
  → Be vague ("I do computer stuff")
  → Ramble without structure
"""

print(tell_me)

# BEHAVIORAL INTERVIEW BASICS:
# → Every answer tells a STORY (not just facts)
# → Stories prove you HAVE the skill, not just claim it
# → Hiring managers hire STORYTELLERS, not just coders
# → Practice out loud (not just in your head)</div>

<div class="code-block"># ── STEP 3: STAR method for behavioral questions ──
# Structuring answers that impress.

star = """
STAR METHOD — FOR EVERY BEHAVIORAL QUESTION:

S - Situation: Set the scene (brief context)
T - Task: What was YOUR responsibility?
A - Action: What did YOU do? (most detail here)
R - Result: What was the outcome? (with numbers!)

EXAMPLE QUESTION: "Tell me about a time you faced a difficult technical challenge."

BAD ANSWER (no structure, no impact):
  "Yeah, once our server crashed and I fixed it. It was stressful
   but I managed to get it working again."

GOOD ANSWER (STAR):
  S: "At LedgerPilot, our payment API started timing out during
     peak hours, affecting 5K users during tax season."

  T: "As the backend lead, I was responsible for diagnosing and
     fixing the issue within 24 hours."

  A: "I set up real-time monitoring with Datadog to identify the
     bottleneck. Found N+1 queries in our Django ORM were causing
     3-second delays. I refactored to use select_related(),
     added Redis caching for hot paths, and implemented database
     connection pooling."

  R: "API response time dropped from 3s to 200ms. Zero timeouts
     during the next peak period. The fix served 50K requests
     without issues. I also added load tests to CI/CD to prevent
     regression."

COMMON BEHAVIORAL QUESTIONS:
  → "Tell me about a challenging project"
  → "Describe a conflict with a teammate"
  → "When did you fail and what did you learn?"
  → "Tell me about a time you showed leadership"
  → "How do you handle tight deadlines?"
  → "Describe a time you improved a process"

PREPARE 5-7 STORIES:
  → Technical challenge solved
  → Leadership/initiative taken
  → Conflict resolved
  → Failure and learning
  → Collaboration success
  → Process improvement
  → Mentorship/helping others

  Each story can answer multiple questions!
"""

print(star)</div>

<div class="code-block"># ── STEP 4: Coding interview patterns ──
# The patterns behind 90% of coding questions.

patterns = """
CODING INTERVIEW PATTERNS (from Blind 75 / NeetCode 150):

1. TWO POINTERS:
   → Used for: arrays, strings, linked lists
   → Pattern: one pointer from start, one from end

   def two_sum_sorted(arr, target):
       left, right = 0, len(arr) - 1
       while left < right:
           s = arr[left] + arr[right]
           if s == target: return [left, right]
           elif s < target: left += 1
           else: right -= 1

2. SLIDING WINDOW:
   → Used for: subarray/substring problems
   → Pattern: maintain window, expand/contract

   def max_subarray_sum(arr, k):
       window_sum = sum(arr[:k])
       max_sum = window_sum
       for i in range(k, len(arr)):
           window_sum += arr[i] - arr[i - k]  # slide window
           max_sum = max(max_sum, window_sum)
       return max_sum

3. BINARY SEARCH:
   → Used for: sorted arrays, finding optimal value

   def binary_search(arr, target):
       lo, hi = 0, len(arr) - 1
       while lo <= hi:
           mid = (lo + hi) // 2
           if arr[mid] == target: return mid
           elif arr[mid] < target: lo = mid + 1
           else: hi = mid - 1
       return -1

4. BFS / DFS:
   → Used for: trees, graphs, matrices

   from collections import deque
   def bfs(root):
       queue = deque([root])
       while queue:
           node = queue.popleft()
           print(node.val)
           for child in node.children:
               queue.append(child)

5. DYNAMIC PROGRAMMING:
   → Used for: optimization, counting problems
   → Pattern: break into subproblems, memoize

   def fibonacci(n, memo={}):
       if n in memo: return memo[n]
       if n <= 1: return n
       memo[n] = fibonacci(n-1) + fibonacci(n-2)
       return memo[n]

6. HASH MAP:
   → Used for: lookup, counting, grouping

   def group_anagrams(strs):
       groups = {}
       for s in strs:
           key = ''.join(sorted(s))
           groups.setdefault(key, []).append(s)
       return list(groups.values())

INTERVIEW APPROACH (45 minutes):
  1. CLARIFY (5 min): Ask questions, understand problem
  2. PLAN (5 min): Discuss approach, complexity
  3. CODE (20 min): Write clean code
  4. TEST (10 min): Trace through examples, edge cases
  5. OPTIMIZE (5 min): Can you improve time/space?

PRACTICE RESOURCES:
  → LeetCode (Blind 75, NeetCode 150)
  → "Cracking the Coding Interview" (CTCI)
  → AlgoExpert, Structy
  → Practice DAILY (1-2 problems)
  → Mock interviews (pramp.com, interviewing.io)
"""

print(patterns)</div>

<div class="code-block"># ── STEP 5: System design interview + salary negotiation ──
# Two critical interview skills.

system_design = """
SYSTEM DESIGN INTERVIEW — 5 STEPS:

1. CLARIFY REQUIREMENTS (3 min):
   → What's the scale? (users, QPS, data size)
   → Read-heavy or write-heavy?
   → Consistency vs availability tradeoff?
   → "Design Twitter" → How many users? Real-time? Search?

2. ESTIMATE SCALE (3 min):
   → Daily active users: 100M
   → QPS: 10K reads, 100 writes
   → Storage: 500M tweets/day × 200 bytes = 100GB/day
   → Bandwidth: 10GB/s

3. HIGH-LEVEL DESIGN (10 min):
   → Client → Load Balancer → API Gateway → Services → DB
   → Draw the architecture diagram
   → Identify components: CDN, cache, queue, database

4. DEEP DIVE (15 min):
   → Database schema (SQL vs NoSQL?)
   → API design (REST endpoints)
   → Caching strategy (Redis, CDN)
   → Scaling (sharding, replication)
   → Async processing (message queue)

5. BOTTLENECKS & TRADE-OFFS (5 min):
   → Single point of failure?
   → What if DB goes down?
   → How to handle hot content (celebrity tweet)?
   → CAP theorem tradeoffs
"""

salary = """
SALARY NEGOTIATION — STEP BY STEP:

1. NEVER GIVE A NUMBER FIRST:
   → "What's your expected compensation?"
   → YOU: "I'd like to understand the full compensation package first.
     Could you share the range for this role?"
   → If pressed: "Based on my research, market rate is [X-Y].
     I'm flexible depending on total package."

2. KNOW YOUR MARKET VALUE:
   → levels.fyi (tech salaries by company/level)
   → Glassdoor, Payscale (general)
   → Talk to peers in similar roles
   → Know your MINIMUM (walk-away number)

3. TOTAL COMPENSATION:
   Base salary + Bonus + Equity/RSU + Sign-on + Benefits
   → Equity can be 30-50% of total comp at tech companies
   → Negotiate ALL components, not just base

4. WHEN YOU GET AN OFFER:
   → "Thank you! I'm excited about this opportunity."
   → "I need a few days to review the full package."
   → Then negotiate: "Based on my experience with [X],
     I was hoping for [Y]. Is there flexibility?"

5. LEVERAGE MULTIPLE OFFERS:
   → "I'm in final rounds with [company] and expecting an offer."
   → Companies will often match or beat competing offers

6. DON'T:
   → Accept on the spot
   → Negotiate against yourself (give range, they take low end)
   → Forget to get everything in writing
   → Burn bridges (be professional throughout)
"""

print(system_design)
print(salary)</div>

<div class="code-block"># ── STEP 6: Questions to ask and interview best practices ──
# Evaluating the company while they evaluate you.

questions = """
QUESTIONS TO ASK (you're interviewing THEM too):

1. TEAM & CULTURE:
   → "What does a typical day look like on the team?"
   → "How does the team handle disagreements?"
   → "What's the ratio of senior to junior engineers?"
   → "How often do you do code reviews?"

2. TECHNICAL:
   → "What's your tech stack and why?"
   → "How do you handle deployments? (CI/CD?)"
   → "What's your testing philosophy?"
   → "How do you handle technical debt?"

3. GROWTH:
   → "What does career growth look like here?"
   → "How do you support learning? (conferences, courses)"
   → "What's the promotion process?"
   → "What would success look like in the first 90 days?"

4. RED FLAGS (watch for):
   → "We're like a family" (→ no work-life balance)
   → "We work hard, play hard" (→ burnout culture)
   → Vague answers about turnover (people leaving)
   → No clear technical direction
   → "We don't really do code reviews"

INTERVIEW BEST PRACTICES:
  → Research the company deeply (product, recent news, values)
  → Prepare 3-5 questions (shows interest)
  → Send thank-you email within 24 hours
  → Follow up if no response in 1 week
  → Practice mock interviews regularly
  → Track applications in a spreadsheet
  → Build relationships with recruiters (LinkedIn)
  → Never badmouth previous employers
  → Dress one level above company culture
  → Bring copies of resume (in-person)

TECHNICAL PORTFOLIO CHECKLIST:
  ☐ GitHub with pinned projects + READMEs
  ☐ At least one deployed full-stack app
  ☐ One ML/data project (if applicable)
  ☐ Blog posts explaining your work
  ☐ Clean LinkedIn profile
  ☐ Updated resume (ATS-optimized)
  ☐ 2-3 references ready
"""

print(questions)

# INTERVIEW SUCCESS FORMULA:
# Preparation × Practice × Presentation = Offer
# → Preparation: study patterns, research company
# → Practice: mock interviews, LeetCode daily
# → Presentation: clear communication, confident body language
# → Luck (apply to MANY companies — increase odds!)</div>

<div class="dialogue">সিদ্ক — সততা। নবীজি (সা) বলেছেন — "সততা পথ দেখায় কল্যাণে।" রিজিউমিতে সততা জরুরি — কিন্তু সততা মানে বিনয় নয়। তোমার অর্জন বলো, গর্বে নয় — সত্যে। "আমি এটা করেছি" বলো, লুকিয়ো না। কিন্তু মিথ্যা বলো না — কারণ ইন্টারভিউতে ধরা পড়বে। সিদ্ক = সত্য বলা, স্বচ্ছতায়।</div>
<div class="dialogue en">"Sidq — truthfulness. The Prophet (pbuh) said — 'Truthfulness leads to righteousness.' Honesty in resumes is essential — but honesty doesn't mean timidity. State your achievements, not in arrogance — in truth. Say 'I did this,' don't hide. But don't lie — because the interview will expose it. Sidq = speaking truth, in transparency."</div>`,
  senior:{
    title:"ATS (Applicant Tracking System) — রোবট প্রথমে পড়ে",
    body:`<p><strong>৭৫% রিজিউমি ATS দ্বারা বাদ যায়</strong> — মানুষ দেখার আগেই। রোবট স্ক্যান করে।</p><p><strong>ATS-friendly করো:</strong> সহজ ফরম্যাট, কোনো ছবি নয়, কোনো কলাম নয়, স্ট্যান্ডার্ড ফন্ট। PDF ঠিক আছে।</p><p><strong>কীওয়ার্ড মেলাও:</strong> জব ডেসক্রিপশনের কীওয়ার্ড রিজিউমিতে রাখো। যদি "Python, Django, REST API" চায় — তুমি "Python, Django, REST API" লেখো, "পাইথন, ডিজাঙ্গো" নয়।</p>`
  }
});

// ══ DOOR 2: TELL ME ABOUT YOURSELF ══
doors.push({
  num:2, icon:"🗣️", color:"#52c41a", name:"ঘোষকের মঞ্চ",
  subtitle:"The Herald's Platform", tech:"Tell Me About Yourself",
  spirit:"কাহিনী — নিজের গল্প সুসজ্জিতভাবে",
  secret:"'নিজে সম্পর্কে বলো' — এটা প্রথম প্রশ্ন, সবচেয়ে গুরুত্বপূর্ণ। ৯০ সেকেন্ডে তুমি সিদ্ধান্ত নির্ধারণ করো — আগ্রহী না বিরক্ত।",
  recall:{
    q:"ঘোষক কেন সব ইতিহাস নয়, শুধু প্রাসঙ্গিক অংশ বলেন?",
    qen:"Why does the herald tell only relevant parts, not the entire history?",
    a:"কারণ শ্রোতার সময় সীমিত। ৯০ সেকেন্ডে প্রাসঙ্গিক গল্প বলো — অতীত (কে তুমি), বর্তমান (কী করছ), ভবিষ্যৎ (কেন এখানে)। সব ইতিহাস নয় — সংক্ষিপ্ত, প্রাসঙ্গিক, আকর্ষণীয়।",
    aen:"Because listeners have limited time. In 90 seconds tell the relevant story — past (who you are), present (what you do), future (why here). Not all history — brief, relevant, engaging."
  },
  story:`
<p class="scene-setting">দ্বিতীয় পরীক্ষা। একটা উঁচু মঞ্চ। নিচে জনতা, উপরে ঘোষক হাসান দাঁড়িয়ে আছেন — গম্ভীর কণ্ঠ, স্পষ্ট উচ্চারণ, আত্মবিশ্বাসী ভঙ্গি। "নিজে সম্পর্কে বলো," তিনি তোমাকে মঞ্চে ডাকলেন। তুমি দাঁড়ালে। মুখ খুললে... এবং থেমে গেলে। কী বলবে?</p>
<p class="scene-setting en">The second trial. A raised platform. Below: a crowd, above: Herald Hasan stands — powerful voice, clear articulation, confident posture. "Tell me about yourself," he called you up. You stood. Opened your mouth... and froze. What to say?</p>

<div class="dialogue">নথিপত্রকার বলেছিলেন — রিজিউমি একটা গল্প। কিন্তু আমি বলি — মুখে বলা গল্প আলাদা। রিজিউমি পড়া যায় — কিন্তু "নিজে সম্পর্কে বলো" শোনা হয়। ৯০ সেকেন্ডে তুমি নির্ধারণ করো — ইন্টারভিউয়ার আগ্রহী হবেন না ক্লান্ত।</div>
<div class="dialogue en">"The scribe said — a resume is a story. But I say — a spoken story is different. A resume is read — but 'tell me about yourself' is heard. In 90 seconds you determine — will the interviewer be interested or tired."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Memorized Solutions:</strong> Memorized 200 LeetCode answers — got a variation and panicked. Fix: understand patterns.</div></div>


<div class="diagram"><svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg"><text x="280" y="25" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">90-Second Pitch Structure</text><rect x="20" y="45" width="160" height="50" rx="6" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="100" y="65" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">PRESENT</text><text x="100" y="82" text-anchor="middle" fill="#9a93b8" font-size="9">Who you are now</text><rect x="200" y="45" width="160" height="50" rx="6" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="280" y="65" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">PAST</text><text x="280" y="82" text-anchor="middle" fill="#9a93b8" font-size="9">Key achievements</text><rect x="380" y="45" width="160" height="50" rx="6" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="460" y="65" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">FUTURE</text><text x="460" y="82" text-anchor="middle" fill="#9a93b8" font-size="9">Why this role</text><text x="280" y="125" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">Formula: Present + Past + Future = Story</text><text x="280" y="145" text-anchor="middle" fill="#9a93b8" font-size="9">Keep it authentic, not rehearsed-sounding</text><text x="280" y="165" text-anchor="middle" fill="#f06292" font-size="9">Don't recite your resume — tell a story</text></svg></div>

<div class="code-block">"Tell Me About Yourself" — Present-Past-Future:

STRUCTURE (৯০ সেকেন্ড):

১. PRESENT (২০ সেকেন্ড) — এখন কী করছ
  "আমি একজন mid-level software engineer, 
   LedgerPilot-এ কাজ করি — একটি fintech 
   প্ল্যাটফর্ম। মূলত backend, কিছু frontend।"

২. PAST (৪০ সেকেন্ড) — কীভাবে এখানে এলে
  "আগে আমি full-stack ডেভেলপার ছিলাম 
   X কোম্পানিতে। Python/Django, React। 
   সবচেয়ে বড় অর্জন — পেমেন্ট সিস্টেম 
   নির্মাণ যা ১০K+ লেনদেন পরিচালনা করে।"

৩. FUTURE (৩০ সেকেন্ড) — কেন এই কোম্পানি
  "এখন আমি AI engineering-এ সরে যেতে চাই। 
   আপনাদের টিম LLM-powered products নিয়ে 
   কাজ করে — সেটাই আমার পরবর্তী লক্ষ্য।"

নিয়ম:
  • সংক্ষিপ্ত — ৯০ সেকেন্ড সর্বোচ্চ
  • প্রাসঙ্গিক — জব ডেসক্রিপশনের সাথে মেলাও
  • সংখ্যা — অর্জন নির্দিষ্ট করো
  • শেষে হুক — কেন এখানে যেতে চাও</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ খারাপ উত্তর</div>"আমি ঢাকায় জন্মেছি। স্কুলে পড়েছি... তারপর কলেজ... তারপর বিশ্ববিদ্যালয়... আমার কুকুর আছে..." — ব্যক্তিগত ইতিহাস। প্রাসঙ্গিক নয়। সময় নষ্ট।</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ ভালো উত্তর</div>"আমি ৩ বছরের backend engineer। LedgerPilot-এ কাজ করি। সবচেয়ে বড় কাজ — পেমেন্ট API যা ১০K লেনদেন পরিচালনা করে। এখন AI engineering-এ যেতে চাই — তাই আপনাদের কাছে।" — প্রাসঙ্গিক, সংক্ষিপ্ত, পেশাদার।</div>
</div>

<div class="dialogue">কুরআনে আল্লাহ নবীদের কাহিনী বলেছেন — কিন্তু সব নয়। প্রাসঙ্গিক অংশ। মূসা (আ)-এর গল্প এক জায়গায় শুরু হয়, অন্য জায়গায় অন্য কোণ থেকে। প্রতিটা বর্ণনা প্রাসঙ্গিক। তোমার গল্পও তেমনি — প্রতিটা ইন্টারভিউতে প্রাসঙ্গিক অংশ বলো। সব নয়। যা এই কোম্পানির জন্য গুরুত্বপূর্ণ।</div>
<div class="dialogue en">"In the Quran, Allah tells prophets' stories — but not everything. Relevant parts. Musa's (AS) story starts in one place, from another angle elsewhere. Each narration is relevant. Your story too — in each interview, tell the relevant part. Not everything. What matters for this company."</div>`,
  senior:{
    title:"Practice Protocol — আয়নার সামনে ১০ বার",
    body:`<p><strong>লিখে মুখস্থ করো না:</strong> কাঠামো মনে রাখো (Present-Past-Future), কিন্তু প্রতিবার স্বাভাবিক ভাষায় বলো।</p><p><strong>আয়নার সামনে:</strong> ১০ বার অন্তত বলো। টাইমার ধরো — ৯০ সেকেন্ডের নিচে।</p><p><strong>ফোনে রেকর্ড করো:</strong> নিজেকে শোনো। কোথায় আটকাও? কোথায় একঘেয়ে? ঠিক করো।</p><p><strong>বন্ধুকে বলো:</strong> বন্ধুকে বলে ফিডব্যাক নাও — "বিরক্ত হয়েছিলে?"</p>`
  }
});

// ══ DOOR 3: STAR METHOD ══
doors.push({
  num:3, icon:"⭐", color:"#ffc857", name:"বিচারকের খাতা",
  subtitle:"The Judge's Ledger", tech:"STAR Method (Behavioral)",
  spirit:"শাহাদাত — সাক্ষ্য দাও, প্রমাণ দাও",
  secret:"আচরণগত প্রশ্নে অনুভূতি নয়, প্রমাণ দাও। STAR: Situation, Task, Action, Result। গল্প বলো — কিন্তু কাঠামো সহ।",
  recall:{
    q:"বিচারক কেন শুধু দাবি নয়, প্রমাণ চান?",
    qen:"Why does the judge demand evidence, not just claims?",
    a:"কারণ দাবি সস্তা, প্রমাণ মূল্যবান। 'আমি টিম প্লেয়ার' — দাবি। '৩ জনের টিমে আমি কমিউনিকেশন সংস্কার করেছি, ফলে ডেলিভারি ৩০% দ্রুত' — প্রমাণ। STAR পদ্ধতিতে প্রমাণ দাও।",
    aen:"Because claims are cheap, evidence is valuable. 'I'm a team player' — claim. 'In a 3-person team I fixed communication, delivery 30% faster' — evidence. STAR gives evidence."
  },
  story:`
<p class="scene-setting">তৃতীয় পরীক্ষা। একটা বিচারকের কক্ষ। কাঠের বেঞ্চ, খোলা খাতা, কলমের শব্দ। বিচারক আমিনা বসে আছেন — তীক্ষ্ণ চোখ, ধৈর্যশীল, কিন্তু কঠোর। তিনি জিজ্ঞেস করলেন — "এমন সময় বলো যখন তুমি একটা কঠিন পরিস্থিতিতে ছিলে। কী করেছিলে?" তুমি শুরু করলে — "আমি একবার..." আর তিনি থামিয়ে দিলেন। "প্রমাণ দাও। কেবল দাবি নয়।"</p>
<p class="scene-setting en">The third trial. A judge's chamber. Wooden bench, open ledger, scratch of pen. Judge Amina sits — sharp eyes, patient, but firm. She asks — "Tell me about a time you faced a difficult situation. What did you do?" You begin — "Once I..." and she stops you. "Give evidence. Not just claims."</p>

<div class="dialogue">ঘোষক বলেছিলেন — নিজের গল্প সুসজ্জিতভাবে বলো। কিন্তু আমি বলি — গল্প কেবল সুসজ্জিত হলে হয় না। গল্প সত্য হতে হবে, এবং কাঠামো থাকতে হবে। ইন্টারভিউয়ার "টিম প্লেয়ার?" জিজ্ঞেস করলে — "হ্যাঁ" বললে হবে না। প্রমাণ দাও।</div>
<div class="dialogue en">"The herald said — tell your story well. But I say — a story isn't just well-organized. It must be true, and it must have structure. If the interviewer asks 'Team player?' — saying 'yes' isn't enough. Give evidence."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — Didn't Ask Clarifying Questions:</strong> Started coding immediately — solved wrong problem. Fix: clarify requirements first.</div></div>


<div class="diagram"><svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="110" height="60" rx="8" fill="rgba(45,212,191,.1)" stroke="#2dd4bf" stroke-width="2"/><text x="85" y="45" text-anchor="middle" fill="#2dd4bf" font-size="14" font-weight="bold">S</text><text x="85" y="62" text-anchor="middle" fill="#9a93b8" font-size="9">Situation</text><text x="85" y="75" text-anchor="middle" fill="#9a93b8" font-size="9">context</text><rect x="160" y="20" width="110" height="60" rx="8" fill="rgba(82,196,26,.1)" stroke="#52c41a" stroke-width="2"/><text x="215" y="45" text-anchor="middle" fill="#52c41a" font-size="14" font-weight="bold">T</text><text x="215" y="62" text-anchor="middle" fill="#9a93b8" font-size="9">Task</text><text x="215" y="75" text-anchor="middle" fill="#9a93b8" font-size="9">your role</text><rect x="290" y="20" width="110" height="60" rx="8" fill="rgba(251,191,36,.1)" stroke="#fbbf24" stroke-width="2"/><text x="345" y="45" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold">A</text><text x="345" y="62" text-anchor="middle" fill="#9a93b8" font-size="9">Action</text><text x="345" y="75" text-anchor="middle" fill="#9a93b8" font-size="9">what YOU did</text><rect x="420" y="20" width="110" height="60" rx="8" fill="rgba(240,98,146,.1)" stroke="#f06292" stroke-width="2"/><text x="475" y="45" text-anchor="middle" fill="#f06292" font-size="14" font-weight="bold">R</text><text x="475" y="62" text-anchor="middle" fill="#9a93b8" font-size="9">Result</text><text x="475" y="75" text-anchor="middle" fill="#9a93b8" font-size="9">quantified</text><text x="280" y="115" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">Spend 70% on Action, 20% on Result</text><text x="280" y="140" text-anchor="middle" fill="#9a93b8" font-size="9">Bad: "We launched the product" (no detail)</text><text x="280" y="160" text-anchor="middle" fill="#52c41a" font-size="9">Good: "I led a team of 4, cut latency 40%, serving 10K users"</text><text x="280" y="190" text-anchor="middle" fill="#f06292" font-size="9">Use "I" not "We" — interviewer wants YOUR contribution</text></svg></div>

<div class="code-block">STAR Method — প্রতিটা আচরণগত প্রশ্নে:

S — Situation (পরিস্থিতি)
  প্রসঙ্গ দাও — কবে, কোথায়, কে।
  "আমাদের টিমে একটা পেমেন্ট বাগ 
   production-এ গেছে। গ্রাহক রাগান্বিত।"

T — Task (কাজ)
  তোমার দায়িত্ব কী ছিল?
  "আমাকে বাগ খুঁজে বের করতে হবে, 
   ফিক্স করতে হবে, আর গ্রাহককে 
   শান্ত করতে হবে — সব ২৪ ঘণ্টায়।"

A — Action (কর্ম)
  তুমি কী করলে? নির্দিষ্ট।
  "১. লগ বিশ্লেষণ করে race condition খুঁজে পেলাম
   ২. Database lock যোগ করলাম
   ৩. টেস্ট লিখলাম যাতে আবার না হয়
   ৪. গ্রাহককে ফোন করে ব্যাখ্যা করলাম"

R — Result (ফলাফল)
  কী হলো? সংখ্যা দাও।
  "বাগ ঠিক হলো ১২ ঘণ্টায়। 
   গ্রাহক শান্ত হলো। 
   একই ধরনের বাগ ৬ মাসে শূন্য।"</div>

<div class="dialogue">শাহাদাত — সাক্ষ্য দেওয়া। ইসলামে সাক্ষ্য গুরুত্বপূর্ণ — "সাক্ষী হিসেবে দাঁড়াও ন্যায়ের জন্য।" ইন্টারভিউতেও — তুমি নিজের সাক্ষী। কিন্তু শুধু "ভালো" বললে হয় না — প্রমাণ দাও। STAR হলো সেই সাক্ষ্যের কাঠামো — Situation, Task, Action, Result। প্রতিটা উত্তরে এই চার স্তম্ভ দাঁড় করাও।</div>
<div class="dialogue en">"Shahadat — giving testimony. In Islam, testimony is crucial — 'Stand as witnesses for justice.' In interviews too — you are your own witness. But just saying 'good' isn't enough — give evidence. STAR is the structure of that testimony — Situation, Task, Action, Result. In every answer, raise these four pillars."</div>`,
  senior:{
    title:"প্রস্তুতি — ৫টা গল্প প্রস্তুত রাখো",
    body:`<p>এই ৫টা বিষয়ে আগে থেকে গল্প প্রস্তুত রাখো:</p><p><strong>১. একটা কঠিন বাগ/সমস্যা</strong> — কীভাবে সমাধান করেছ</p><p><strong>২. টিমে মতবিরোধ</strong> — কীভাবে মীমাংসা করেছ</p><p><strong>৩. ব্যর্থতা</strong> — কী শিখেছ</p><p><strong>৪. নেতৃত্ব</strong> — কখন নেতৃত্ব নিয়েছ</p><p><strong>৫. সময়ের চাপ</strong> — কীভাবে সামলেছ</p><p>প্রতিটা STAR-এ লিখে রাখো। মুখস্থ নয় — বুঝে রাখো।</p>`
  }
});

// ══ DOOR 4: CODING PATTERNS ══
doors.push({
  num:4, icon:"🧩", color:"#ff6b35", name:"ধাঁধা নিপুণের টেবিল",
  subtitle:"The Puzzle Master's Table", tech:"Coding Interview Patterns",
  spirit:"মূলনীতি — মুখস্থ নয়, প্যাটার্ন শেখো",
  secret:"৫০০ সমস্যা মুখস্থ নয় — ১৫টা প্যাটার্ন বুঝো। প্যাটার্ন চিনলে যেকোনো নতুন সমস্যা সমাধানযোগ্য।",
  recall:{
    q:"ধাঁধা নিপুণ কেন প্রতিটা ধাঁধা আলাদা মনে করেন না, প্যাটার্ন খোঁজেন?",
    qen:"Why doesn't the puzzle master treat each puzzle as unique, but seeks patterns?",
    a:"কারণ ৯০% কোডিং সমস্যা ১৫টা প্যাটার্নের ভিন্নতা। Two pointers, sliding window, BFS/DFS, binary search, DP — এই প্যাটার্নগুলো চিনলে নতুন সমস্যাও সমাধানযোগ্য। মুখস্থ নয়, চেনা।",
    aen:"Because 90% of coding problems are variations of 15 patterns. Two pointers, sliding window, BFS/DFS, binary search, DP — recognizing these makes any new problem solvable. Not memorization — recognition."
  },
  story:`
<p class="scene-setting">চতুর্থ পরীক্ষা। একটা বিশাল টেবিল। ছড়ানো ধাঁধা, দাবা বোর্ড, গাণিতিক সমস্যা। ধাঁধা নিপুণ কামরান বসে আছেন — চশমা নাকে, হাতে একটা ঘড়ির কাঁটা, ঠোঁটে ক্রীড়ার হাসি। "সমাধান করো," তিনি বললেন। কিন্তু তুমি আটকে গেলে। তিনি বললেন — "প্রতিটা ধাঁধা এক নয়। কিন্তু প্যাটার্ন কয়টা? মাত্র কয়েকটা।"</p>
<p class="scene-setting en">The fourth trial. A vast table. Scattered puzzles, chess boards, math problems. Puzzle Master Kamran sits — spectacles on nose, a timer hand, playful smile. "Solve it," he said. But you got stuck. He said — "Each puzzle isn't unique. But how many patterns? Just a few."</p>

<div class="dialogue">বিচারক বলেছিলেন — প্রমাণ দাও। কিন্তু আমি বলি — কোডিং ইন্টারভিউতে প্রমাণ হলো সমাধান। কিন্তু সমাধান মুখস্থ নয় — প্যাটার্ন চেনা। ৫০০টা LeetCode সমস্যা মুখস্থ করলে কী হবে? ৫০১তম আলাদা। কিন্তু ১৫টা প্যাটার্ন বুঝলে — ৫০০তমও সমাধানযোগ্য।</div>
<div class="dialogue en">"The judge said — give evidence. But I say — in coding interviews, evidence is the solution. But solution isn't memorization — it's pattern recognition. What good is memorizing 500 LeetCode problems? The 501st is different. But understand 15 patterns — and even the 500th is solvable."</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ভুলের গল্প — No Complexity Analysis:</strong> Solved it but couldn't state Big-O. Fix: always analyze time/space complexity.</div></div>


<div class="diagram"><svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg"><text x="280" y="25" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">5 Core Patterns (not 200 problems)</text><rect x="20" y="45" width="100" height="55" rx="6" fill="rgba(45,212,191,.08)" stroke="#2dd4bf" stroke-width="1.5"/><text x="70" y="65" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="bold">Two Ptrs</text><text x="70" y="85" text-anchor="middle" fill="#9a93b8" font-size="9">sorted arrays</text><rect x="130" y="45" width="100" height="55" rx="6" fill="rgba(82,196,26,.08)" stroke="#52c41a" stroke-width="1.5"/><text x="180" y="65" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">Sliding Wnd</text><text x="180" y="85" text-anchor="middle" fill="#9a93b8" font-size="9">subarrays</text><rect x="240" y="45" width="100" height="55" rx="6" fill="rgba(251,191,36,.08)" stroke="#fbbf24" stroke-width="1.5"/><text x="290" y="65" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">BFS/DFS</text><text x="290" y="85" text-anchor="middle" fill="#9a93b8" font-size="9">trees/graphs</text><rect x="350" y="45" width="100" height="55" rx="6" fill="rgba(167,139,250,.08)" stroke="#a78bfa" stroke-width="1.5"/><text x="400" y="65" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">DP</text><text x="400" y="85" text-anchor="middle" fill="#9a93b8" font-size="9">optimize</text><rect x="460" y="45" width="80" height="55" rx="6" fill="rgba(240,98,146,.08)" stroke="#f06292" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" fill="#f06292" font-size="10" font-weight="bold">Binary Srch</text><text x="500" y="85" text-anchor="middle" fill="#9a93b8" font-size="9">sorted data</text><text x="280" y="130" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">30-min Rule: stuck 30 min? Ask for hint.</text><text x="280" y="155" text-anchor="middle" fill="#9a93b8" font-size="9">Clarify → Brute force → Optimize → Code → Test</text><text x="280" y="180" text-anchor="middle" fill="#f06292" font-size="9">Always state Big-O before coding</text></svg></div>

<div class="code-block">Top Coding Interview Patterns (Blind 75 থেকে):

১. Two Pointers
   → sorted array, palindrome, pair sum
   লক্ষণ: "sorted" + "pair/triplet"

২. Sliding Window  
   → substring, subarray, contiguous
   লক্ষণ: "longest/shortest" + "contiguous"

৩. Fast & Slow Pointers
   → cycle detection, middle of list
   লক্ষণ: linked list + cycle

৪. Merge Intervals
   → overlapping ranges
   লক্ষণ: intervals + overlap

৫. Binary Search
   → sorted, search space
   লক্ষণ: "sorted" + "find"

৬. BFS/DFS
   → tree, graph, matrix traversal
   লক্ষণ: "shortest path" / "all paths"

৭. Topological Sort
   → dependency, ordering
   লক্ষণ: "prerequisite" + "order"

৮. Dynamic Programming
   → overlapping subproblems
   লক্ষণ: "count ways" + "optimize"

প্যাটার্ন চেনার উপায়:
  ১. সমস্যা পড়ো
  ২. কোন ডেটা স্ট্রাকচার?
  ৩. কোন কীওয়ার্ড? (sorted, contiguous...)
  ৪. প্যাটার্ন মেলাও
  ৫. সমাধান শুরু</div>

<div class="compare">
<div class="cmp-card cmp-bad"><div class="cmp-label">❌ মুখস্থ</div>৫০০টা সমস্যা মুখস্থ করেছ। নতুন সমস্যা এলে — ফাঁকা। সময় শেষ। প্যানিক। "এটা তো করিনি!"</div>
<div class="cmp-card cmp-good"><div class="cmp-label">✅ প্যাটার্ন</div>১৫টা প্যাটার্ন বুঝেছ। নতুন সমস্যা এলে — "এটা two pointers লাগছে।" সমাধান শুরু। শান্ত। আত্মবিশ্বাসী।</div>
</div>

<div class="dialogue">কুরআনে আল্লাহ বলেন — "এই উদাহরণগুলো আমি মানুষের জন্য দিই, কিন্তু কেবল জ্ঞানীরাই বোঝে।" প্যাটার্ন হলো সেই জ্ঞান — পৃষ্ঠের নিচে নিয়ম। যে প্যাটার্ন দেখে, সে প্রতিটা নতুন সমস্যায় পুরনো নিয়ম চেনে। মুখস্থ করা = বোকা। প্যাটার্ন বোঝা = জ্ঞানী। ইন্টারভিউতে প্যাটার্ন চেনো, সমাধান মুখস্থ করো না।</div>
<div class="dialogue en">"Allah says — 'We present these examples for people, but only the wise understand them.' Patterns are that wisdom — rules beneath the surface. One who sees patterns recognizes old rules in new problems. Memorizing = foolish. Understanding patterns = wise. In interviews, recognize patterns, don't memorize solutions."</div>`,
  senior:{
    title:"ইন্টারভিউতে কোডিং — ৬ ধাপ + আধুনিক ফরম্যাট",
    body:`<p><strong>১. প্রশ্ন বুঝো:</strong> নিজের ভাষায় বলো। উদাহরণ চাও। Edge case জিজ্ঞেস করো।</p><p><strong>২. ব্রুট ফোর্স:</strong> প্রথম সমাধান — ভালো না হলেও। বলো।</p><p><strong>৩. অপ্টিমাইজ:</strong> "এটা কি আরও ভালো করা যায়?" প্যাটার্ন চিনো।</p><p><strong>৪. কোড লেখো:</strong> মুখে বলতে বলতে লেখো। চুপ করে নয়।</p><p><strong>৫. টেস্ট:</strong> নিজের কোড টেস্ট করো — edge case সহ।</p><p><strong>৬. জটিলতা:</strong> Time/Space complexity বলো।</p><p><strong>২০২০s ফরম্যাট (জানো):</strong> Live shared-doc (CoderPad, CodeSignal) — উপরের ৬ ধাপ। Take-home (HackerRank, timed) — একা, কিন্তু clean code + tests লেখো। Async video (HireVue) — ক্যামেরায় উত্তর রেকর্ড করো, মুখে স্পষ্ট বলো। AI-proctored — screen + camera recorded, cheating-ফ্রি থাকো।</p>`
  }
});
