// ════════════════════════════════════════════════════════════
// THE CODE CRAFTSMAN'S CODE — DOORS 1-5
// 1. Clean Code: Meaningful Names    2. Clean Code: Small Functions
// 3. Clean Code: Comments & Format   4. Pragmatic Programmer: DRY
// 5. Pragmatic Programmer: Tracer Bullets
// ════════════════════════════════════════════════════════════
const doors = [];

// ── DOOR 1: CLEAN CODE — MEANINGFUL NAMES ──
doors.push({
  num:1, icon:"✏️", color:"#6366f1", name:"সত্যের নামকরণ",
  subtitle:"The Truth in Names", tech:"Clean Code Ch.2 (Martin, 2008) — Meaningful Names",
  spirit:"সিদক — truthfulness, from Quran 33:35 (those who are truthful)",
  secret:"নাম হলো সত্য। d1 বা lst নয় — task_id, pending_tasks। নাম বলবে কেন সে আছে, কী করে, কীভাবে ব্যবহার করবে। মিথ্যা নাম = মিথ্যা কোড।",
  recall:{
    q:"Clean Code-এর মতে ভালো নামের ৩টি বৈশিষ্ট্য কী?",
    qen:"What are 3 qualities of a good name according to Clean Code?",
    a:"১) উদ্দেশ্য প্রকাশ করে (what it does), ২) প্রসঙ্গ দেয় (context), ৩) উচ্চারণযোগ্য/খোঁজা যায়। d = খারাপ, days_since_creation = ভালো।",
    aen:"1) Reveals intent (what it does), 2) Provides context, 3) Pronounceable/searchable. d = bad, days_since_creation = good."
  },
  story:`
<p class="scene-setting">প্রথম দিন। কারখানায় ঢুকে দেখলে — একটা বিশাল কোড স্ক্রিন। স্ক্রিনে অদ্ভুত নাম: d1, lst, fn, x2, tmp_val। লেখক ইমরান দাঁড়িয়ে আছেন — হাতে লাল কলম, চোখে তীক্ষ্ণতা। তার কাজ: প্রতিটা নাম যাচাই করা। সে বলেন — নাম মিথ্যা বললে কোড মিথ্যা বলে। তার লাল কলম প্রতিটা খারাপ নামে দাগ দেয়। d1? কী সেটা? কেউ জানে না।</p>
<p class="scene-setting en">Day one. You enter the workshop — a massive code screen. Strange names: d1, lst, fn, x2, tmp_val. Writer Imran stands — red pen in hand, sharp eyes. His job: verify every name. He says — if the name lies, the code lies. His red pen marks every bad name. d1? What is that? Nobody knows.</p>

<div class="dialogue">তুমি কোড লেখো। কিন্তু তোমার কোড কি পড়া যায়? ইমরান লাল কলম তুললেন। এই দেখো — d1। এটা কী? data_1? document_1? date_1? কেউ জানে না। এটা মিথ্যা নাম। মিথ্যা নাম মিথ্যা কথার মতো — ভুল বোঝায়, ভুল করায়।</div>
<div class="dialogue en">You write code. But can anyone read it? Imran raised his red pen. Look — d1. What is it? data_1? document_1? date_1? Nobody knows. This is a lying name. A lying name is like a lie — it misleads, it causes errors.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> ইমরান একটা production bug-এর গল্প বললেন। একজন ডেভেলপার d নামে একটা variable রেখেছিলেন — distance বোঝাতে। কিন্তু অন্য একজন d কে duration ভেবে ঘণ্টায় ভাগ করে দিলেন। ফলাফল: একটা navigation system ১০০ গুণ ভুল দূরত্ব দেখালো। ২ মিনিটে $৫০,০০০ ক্ষতি। সব কারণ একটা মিথ্যা নাম।</div></div>

<div class="code-block"># task_manager.py — Day 1: Meaningful Names
# Robert C. Martin: "The name of a variable, function, or class
# should tell you why it exists, what it does, and how it is used."

# ── ❌ BAD NAMES (Uncle Bob would cry) ──
def proc(d):
    # Process the data
    l = []
    for i in d:
        if i[2] == 1:  # What does 1 mean??
            l.append(i)
    return l

d = [
    [1, "Buy groceries", 1],
    [2, "Call mom", 0],
    [3, "Finish report", 1],
]
result = proc(d)  # What is result?

# ── ✅ GOOD NAMES (Clean Code approved) ──
def get_pending_tasks(tasks):
    """Return only tasks with status PENDING."""
    return [task for task in tasks if task.is_pending()]

tasks = [
    Task(id=1, title="Buy groceries", status="pending"),
    Task(id=2, title="Call mom", status="completed"),
    Task(id=3, title="Finish report", status="pending"),
]
pending_tasks = get_pending_tasks(tasks)
# NOW you can read it like English:
# "get pending tasks from tasks"</div>

<div class="dialogue">Clean Code (Martin, 2008, Chapter 2)-এর ৬টি নিয়ম ইমরান খাতায় লিখলেন: ১) উদ্দেশ্য প্রকাশ করো, ২) মিথ্যা নাম দিও না, ৩) অর্থপূর্ণ পার্থক্য করো, ৪) উচ্চারণযোগ্য নাম দাও, ৫) খোঁজা যায় এমন নাম দাও, ৬) মানসিক ম্যাপিং এড়াও — a, b, i শুধু ছোট loop-এ।</div>

<div class="diagram">
  <div class="diag-title">নামের সত্য স্কেল — Bad Name vs Good Name</div>
  <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrN" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6" fill="#6366f1"/></marker></defs>
    <!-- Bad names -->
    <text x="20" y="25" fill="#ef4444" font-size="11" font-weight="bold">❌ খারাপ নাম (Lying Names)</text>
    <rect x="20" y="35" width="250" height="28" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="30" y="53" fill="#ef4444" font-size="10" font-family="monospace">d = [...]</text>
    <rect x="20" y="68" width="250" height="28" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="30" y="86" fill="#ef4444" font-size="10" font-family="monospace">def proc(d):</text>
    <rect x="20" y="101" width="250" height="28" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="30" y="119" fill="#ef4444" font-size="10" font-family="monospace">if i[2] == 1:</text>
    <rect x="20" y="134" width="250" height="28" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="30" y="152" fill="#ef4444" font-size="10" font-family="monospace">l.append(i)</text>
    <text x="20" y="180" fill="#9a93b8" font-size="9">d = কী? proc = কী? l = কী? i[2] = কী?</text>
    <text x="20" y="195" fill="#ef4444" font-size="9">পড়লে কিছু বোঝা যায় না।</text>
    <!-- Arrow -->
    <line x1="285" y1="100" x2="315" y2="100" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrN)"/>
    <text x="300" y="93" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">fix</text>
    <!-- Good names -->
    <text x="330" y="25" fill="#a5b4fc" font-size="11" font-weight="bold">✅ ভালো নাম (Truthful Names)</text>
    <rect x="330" y="35" width="220" height="28" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="340" y="53" fill="#a5b4fc" font-size="10" font-family="monospace">tasks = [...]</text>
    <rect x="330" y="68" width="220" height="28" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="340" y="86" fill="#a5b4fc" font-size="10" font-family="monospace">def get_pending(tasks):</text>
    <rect x="330" y="101" width="220" height="28" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="340" y="119" fill="#a5b4fc" font-size="10" font-family="monospace">if task.is_pending():</text>
    <rect x="330" y="134" width="220" height="28" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="340" y="152" fill="#a5b4fc" font-size="10" font-family="monospace">result.append(task)</text>
    <text x="330" y="180" fill="#9a93b8" font-size="9">tasks = কাজের তালিকা। get_pending = বোঝা যায়।</text>
    <text x="330" y="195" fill="#a5b4fc" font-size="9">পড়লে ইংরেজির মতো মনে হয়।</text>
    <!-- Bottom rule -->
    <rect x="20" y="210" width="530" height="40" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="360" y="228" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Martin's Rule: "A name should tell you WHY it exists"</text>
    <text x="360" y="242" text-anchor="middle" fill="#9a93b8" font-size="9">Clean Code Ch.2: নাম বলবে কেন, কী, কীভাবে</text>
  </svg>
  <div class="diag-cap">খারাপ নাম = মিথ্যা। ভালো নাম = সত্য। কোড পড়া যায় ইংরেজির মতো — proc(d) নয়, get_pending_tasks(tasks)।</div>
</div>

<div class="dialogue">সিদক — সত্য। কুরআনে আল্লাহ সিদককে মোমিনের গুণ বলেছেন (৩৩:৩৫)। নাম সত্য বললে কোড সত্য বলে। ইমরান লাল কলম নামিয়ে রাখলেন। আগামীকাল আমরা ফাংশন নিয়ে কথা বলব — Clean Code-এর পরের অধ্যায়।</div>
<div class="dialogue en">Sidq — truthfulness. Allah names sidq as a quality of the believer (33:35). When names speak truth, code speaks truth. Imran lowered his red pen. Tomorrow we talk about functions — the next chapter of Clean Code.</div>

<div class="secret-box">✏️ নাম = সত্য। d নয়, task_id। proc নয়, get_pending_tasks। মিথ্যা নাম = মিথ্যা কোড।</div>
`,
  senior:{
    title:"Clean Code Naming — 6 Rules",
    body:`<p><strong>Martin-এর ৬টি নিয়ম (Clean Code Ch.2):</strong></p>
<table class="kv-table">
<tr><th>নিয়ম</th><th>খারাপ</th><th>ভালো</th></tr>
<tr><td class="hl">উদ্দেশ্য প্রকাশ করো</td><td>d</td><td>days_since_creation</td></tr>
<tr><td class="hl">মিথ্যা নাম দিও না</td><td>account_list (যদি set হয়)</td><td>accounts</td></tr>
<tr><td class="hl">অর্থপূর্ণ পার্থক্য</td><td>a1, a2</td><td>source, destination</td></tr>
<tr><td class="hl">উচ্চারণযোগ্য</td><td>gen_ymdhms</td><td>generation_timestamp</td></tr>
<tr><td class="hl">খোঁজা যায়</td><td>e (খুঁজলে হাজার মিল)</td><td>error_count</td></tr>
<tr><td class="hl">মানসিক ম্যাপিং এড়াও</td><td>a = b = c</td><td>পুরো নাম</td></tr>
</table>
<p>Cross-ref: Book 40 (Software Engineering) Door 3, Book 45 (Compilers) Door 2.</p>`
  }
});

// ── DOOR 2: CLEAN CODE — SMALL FUNCTIONS ──
doors.push({
  num:2, icon:"🔧", color:"#6366f1", name:"ছোট ছোট কাজ",
  subtitle:"Small Jobs, Small Functions", tech:"Clean Code Ch.3 (Martin, 2008) — Functions Should Be Small",
  spirit:"কিসম — portion/measure, from Quran 42:27 (provision in due measure)",
  secret:"ফাংশন ছোট হবে। আরও ছোট। Martin বলেন: ২০ লাইনের বেশি নয়। একটা কাজ, একটা ফাংশন। extract করো, নাম দাও, পরের কাজ।",
  recall:{
    q:"Clean Code অনুযায়ী একটা ফাংশনের আদর্শ লাইন সংখ্যা কত?",
    qen:"What is the ideal function length according to Clean Code?",
    a:"Martin বলেন: ২০ লাইনের বেশি নয়। কিছু কিছু ক্ষেত্রে ৪ লাইন। একটা কাজ, একটা ফাংশন। বড় ফাংশন = extract করার সময় এসেছে।",
    aen:"Martin says: no more than 20 lines. Sometimes 4. One job, one function. Big function = time to extract."
  },
  story:`
<p class="scene-setting">দ্বিতীয় দিন। কারখানায় ঢুকে দেখলে — ইমরান একটা বিশাল স্ক্রল খুলে বসেছেন। স্ক্রলে একটা ১৫০-লাইনের ফাংশন — create_task_and_validate_and_save_and_notify। একটা ফাংশনে সব কাজ। ইমরান তার ছুরি বের করলেন — কাগজের কারিগরের ছুরি, যা দিয়ে বড় কাগজ ছোট ছোট টুকরো করেন।</p>
<p class="scene-setting en">Day two. You enter — Imran has opened a massive scroll. On it: a 150-line function — create_task_and_validate_and_save_and_notify. One function doing everything. Imran drew his knife — a paper crafter knife, used to cut large sheets into smaller pieces.</p>

<div class="dialogue">এই ফাংশনটা কত বড়? ইমরান গুনলেন। ১৫০ লাইন। Martin বলেন — ২০ লাইনের বেশি নয়। এটা ৭.৫ গুণ বড়। একটা ফাংশন একটা কাজ করবে। এটা করছে: validation, database save, notification, error handling — চারটা কাজ। চারটা ফাংশন বানাও।</div>
<div class="dialogue en">How big is this function? Imran counted. 150 lines. Martin says — no more than 20. This is 7.5x too big. One function does one thing. This does: validation, save, notification, error handling — four jobs. Make four functions.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> ইমরান একটা গল্প বললেন। একটা ৩০০-লাইনের process_order ফাংশন ছিল। কেউ স্পর্শ করতে ভয় পেতো। একদিন একটা bug এলো — কিন্তু কোথায়? ৩০০ লাইন খুঁজতে ২ দিন। সমাধান: ছুরি দিয়ে ভাগ করো। ১২টা ছোট ফাংশন। এখন bug খুঁজতে ৫ মিনিট।</div></div>

<div class="code-block"># task_manager.py — Day 2: Small Functions
# Robert C. Martin: "The first rule of functions is that they
# should be small. The second rule is that they should be smaller."

# ── ❌ BAD: One giant function doing everything ──
def handle_task(request):
    data = request.json
    if not data.get('title'):
        return {'error': 'Title required'}, 400
    if len(data.get('title', '')) &gt; 200:
        return {'error': 'Title too long'}, 400
    if not data.get('due_date'):
        return {'error': 'Due date required'}, 400
    task = Task(
        title=data['title'],
        due_date=data['due_date'],
        status='pending'
    )
    db.session.add(task)
    db.session.commit()
    if task.assignee_id:
        assignee = User.query.get(task.assignee_id)
        send_email(assignee.email, 'New task assigned',
                   f'You have a new task: {task.title}')
        if assignee.slack_id:
            send_slack(assignee.slack_id,
                       f'New task: {task.title}')
    log_activity('task_created', task.id)
    return {'id': task.id}, 201

# ── ✅ GOOD: Small functions, one job each ──

class Result:
    """Simple result wrapper — carries data OR error, not both."""
    def __init__(self, data=None, error=None):
        self.data = data
        self.error = error
    @property
    def is_success(self):
        return self.error is None
    @property
    def error_response(self):
        """Returns HTTP-style error tuple: ({'error': msg}, status)."""
        msg, status = self.error if self.error else ("Unknown", 500)
        return {'error': msg}, status

def handle_task(request):
    """Entry point — orchestrates the workflow."""
    validated = validate_task_data(request.json)
    if validated.error:
        return validated.error_response
    task = create_task(validated.data)
    notify_assignee(task)
    log_activity('task_created', task.id)
    return {'id': task.id}, 201

def validate_task_data(data):
    """Returns validation result."""
    if not data.get('title'):
        return Result(error=('Title required', 400))
    if len(data['title']) &gt; 200:
        return Result(error=('Title too long', 400))
    return Result(data=data)

def create_task(validated_data):
    """Creates and saves task to database."""
    task = Task(
        title=validated_data['title'],
        due_date=validated_data['due_date'],
        status='pending'
    )
    db.session.add(task)
    db.session.commit()
    return task

def notify_assignee(task):
    """Sends email and Slack notification."""
    if not task.assignee_id:
        return
    assignee = User.query.get(task.assignee_id)
    send_email(assignee.email, 'New task',
               f'Task: {task.title}')
    if assignee.slack_id:
        send_slack(assignee.slack_id,
                   f'New task: {task.title}')

# Count: 4 small functions, each under 10 lines.
# Each does ONE thing.</div>

<div class="dialogue">Clean Code (Ch.3)-এর ৩টি নিয়ম ইমরান খাতায় লিখলেন: ১) ছোট হও, ২) একটা কাজ করো, ৩) একই স্তরের কাজ করো — create_task ও notify_assignee একই স্তরে, কিন্তু db.session.commit নিচের স্তরে।</div>

<div class="diagram">
  <div class="diag-title">Function Decomposition — বড় ফাংশন ছোট ছোট টুকরো</div>
  <svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrD2" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#6366f1"/></marker></defs>
    <!-- Giant function -->
    <rect x="20" y="20" width="200" height="180" rx="8" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="2"/>
    <text x="120" y="40" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="bold">handle_task()</text>
    <text x="120" y="58" text-anchor="middle" fill="#ef4444" font-size="9">150 lines!</text>
    <text x="30" y="80" fill="#9a93b8" font-size="9" font-family="monospace">validate</text>
    <text x="30" y="100" fill="#9a93b8" font-size="9" font-family="monospace">create</text>
    <text x="30" y="120" fill="#9a93b8" font-size="9" font-family="monospace">save db</text>
    <text x="30" y="140" fill="#9a93b8" font-size="9" font-family="monospace">email</text>
    <text x="30" y="160" fill="#9a93b8" font-size="9" font-family="monospace">slack</text>
    <text x="30" y="180" fill="#9a93b8" font-size="9" font-family="monospace">log</text>
    <text x="120" y="195" text-anchor="middle" fill="#ef4444" font-size="9">7 jobs in 1 function</text>
    <!-- Arrows -->
    <line x1="225" y1="50" x2="280" y2="40" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrD2)"/>
    <line x1="225" y1="80" x2="280" y2="80" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrD2)"/>
    <line x1="225" y1="110" x2="280" y2="120" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrD2)"/>
    <line x1="225" y1="140" x2="280" y2="160" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrD2)"/>
    <!-- Small functions -->
    <rect x="285" y="25" width="140" height="28" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="355" y="43" text-anchor="middle" fill="#a5b4fc" font-size="9" font-family="monospace" font-weight="bold">handle_task() — 6 lines</text>
    <rect x="285" y="65" width="140" height="28" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="355" y="83" text-anchor="middle" fill="#52c41a" font-size="9" font-family="monospace">validate_task() — 8 lines</text>
    <rect x="285" y="105" width="140" height="28" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="355" y="123" text-anchor="middle" fill="#52c41a" font-size="9" font-family="monospace">create_task() — 8 lines</text>
    <rect x="285" y="145" width="140" height="28" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="355" y="163" text-anchor="middle" fill="#52c41a" font-size="9" font-family="monospace">notify_assignee() — 7 lines</text>
    <text x="355" y="195" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">4 small functions, 1 job each</text>
    <!-- Rule -->
    <rect x="440" y="65" width="100" height="100" rx="8" fill="rgba(99,102,241,0.04)" stroke="rgba(99,102,241,0.15)" stroke-width="1"/>
    <text x="570" y="85" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Martin's Rule</text>
    <text x="570" y="105" text-anchor="middle" fill="#9a93b8" font-size="9">≤ 20 lines</text>
    <text x="570" y="122" text-anchor="middle" fill="#9a93b8" font-size="9">1 job</text>
    <text x="570" y="139" text-anchor="middle" fill="#9a93b8" font-size="9">1 level</text>
    <text x="570" y="156" text-anchor="middle" fill="#9a93b8" font-size="9">of abstraction</text>
  </svg>
  <div class="diag-cap">১৫০-লাইন মনস্টার → ৪টা ছোট ফাংশন। প্রতিটা এক কাজ। পড়লে বোঝা যায়। Bug খুঁজতে সেকেন্ড লাগে।</div>
</div>

<div class="dialogue">কিসম — পরিমিত ভাগ। কুরআনে আল্লাহ বলেন — আমি প্রত্যেককে তার কিসম অনুযায়ী দিয়েছি (৪২:২৭)। কাজেরও কিসম আছে — এক ফাংশনে সব নয়, প্রতিটায় তার পরিমিত ভাগ।</div>
<div class="dialogue en">Qism — measured portion. Allah says — He provides for whom He wills in due measure (42:27). Work has a portion too — not everything in one function, but each with its measured share.</div>

<div class="secret-box">🔧 ফাংশন ছোট হবে। ২০ লাইনের বেশি নয়। একটা কাজ, একটা ফাংশন। বড় = ভাঙো।</div>
`,
  senior:{
    title:"Clean Code Functions — 3 Rules",
    body:`<p><strong>Martin-এর নিয়ম (Clean Code Ch.3):</strong></p>
<table class="kv-table">
<tr><th>নিয়ম</th><th>ব্যাখ্যা</th></tr>
<tr><td class="hl">১. ছোট হও</td><td>২০ লাইনের বেশি নয়। সেরা: ৪-১০ লাইন।</td></tr>
<tr><td class="hl">২. একটা কাজ</td><td>একটা ফাংশন একটা কাজ করবে — শুধু validation, বা শুধু save।</td></tr>
<tr><td class="hl">৩. একই স্তর</td><td>একটা ফাংশনে সব কাজ একই abstraction level-এ। db.commit ও email.send একসাথে নয়।</td></tr>
</table>
<p><strong>Extract Method:</strong> বড় ফাংশন দেখলে extract করো। Door 7 (Refactoring)-এ Fowler-এর extract technique দেখবে।</p>`
  }
});

// ── DOOR 3: CLEAN CODE — COMMENTS & FORMATTING ──
doors.push({
  num:3, icon:"📝", color:"#6366f1", name:"মৌনের শক্তি",
  subtitle:"The Power of Silence", tech:"Clean Code Ch.4 & Ch.5 (Martin, 2008) — Comments & Formatting",
  spirit:"খুশু — reverent silence, from Quran 17:110 (speak moderately, invoke with reverence)",
  secret:"ভালো কোড নিজে বলে — কমেন্ট নয়। খারাপ কমেন্ট মিথ্যা বলে, পুরোনো হয়, বিভ্রান্ত করে। Martin: কমেন্ট হলো ভালো কোড লিখতে না পারার ক্ষমাপ্রার্থনা।",
  recall:{
    q:"Clean Code অনুযায়ী কোন কমেন্টটি ভালো এবং কোনটি খারাপ?",
    qen:"Which comment is good and which is bad according to Clean Code?",
    a:"খারাপ: মিথ্যা কমেন্ট, পুরোনো কমেন্ট, অপ্রয়োজনীয় কমেন্ট (যা কোড পড়লেই বোঝা যায়)। ভালো: আইনি কমেন্ট, TODO, সতর্কতামূলক কমেন্ট। নিয়ম: কমেন্ট লেখার আগে কোড ঠিক করার চেষ্টা করো।",
    aen:"Bad: misleading comments, outdated comments, redundant comments (obvious from code). Good: legal comments, TODO, warning comments. Rule: before writing a comment, try to fix the code instead."
  },
  story:`
<p class="scene-setting">তৃতীয় দিন। কারখানায় একটা শব্দ পরিবর্তন হয়েছে — শান্তি। ইমরান একটা কোড স্ক্রিনের সামনে দাঁড়িয়ে। স্ক্রিনে কমেন্টে ভরা — প্রতিটা লাইনে একটা কমেন্ট। কিন্তু ইমরান হাসছেন। একটা কমেন্ট পড়লেন: # This returns the task list। কিন্তু নিচের ফাংশনের নাম: get_task_list। তাহলে কমেন্ট কেন? কোড নিজেই তো বলছে।</p>
<p class="scene-setting en">Day three. The workshop has changed — silence. Imran stands before a code screen full of comments — every line has one. But Imran is laughing. He reads a comment: # This returns the task list. But the function below is named: get_task_list. Why the comment? The code already says it.</p>

<div class="dialogue">Martin বলেন — কমেন্ট হলো failure। তুমি কোড দিয়ে নিজের মত প্রকাশ করতে পারলে না, তাই কমেন্ট দিলে। কিন্তু কমেন্ট মিথ্যা বলে — কোড বদলায়, কমেন্ট বদলায় না। এক সপ্তাহ পরে কমেন্ট বলছে এক কথা, কোড করছে অন্য কথা। এটাই বিপদ।</div>
<div class="dialogue en">Martin says — a comment is a failure. You could not express yourself in code, so you added a comment. But comments lie — code changes, comments do not. A week later the comment says one thing, the code does another. This is danger.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> ইমরান একটা bug-এর গল্প বললেন। একটা কমেন্ট লেখা ছিল: # increments by 1। কিন্তু কেউ কোড বদলে 2 করে increment করেছেন। কমেন্ট পড়ে একজন ডেভেলপার ১ ধরে হিসাব করলেন। ফলাফল: একটা banking system-এ সব balance ২ গুণ বেশি দেখালো। ৪ ঘণ্টা ধরে debug। কমেন্ট মিথ্যা বললো।</div></div>

<div class="code-block"># task_manager.py — Day 3: Comments &amp; Formatting
# Martin: "Comments are, at best, a necessary evil."

# ── ❌ BAD COMMENTS (noise, lies, redundancy) ──
# This function creates a task
def create_task(title, due_date):
    # Check if title is valid
    if len(title) == 0:  # if title is empty
        return None      # return None if empty
    t = Task(title=title)  # create task object t
    return t             # return the task object t

# ── ✅ GOOD COMMENTS (only when code cannot speak) ──
def create_task(title, due_date):
    """Factory: creates a Task with pending status."""
    if not title.strip():
        raise ValueError("Title cannot be empty")
    return Task(title=title, status="pending", due_date=due_date)

# Legal: MIT License (c) 2023 — required, not noise
# TODO: Add support for recurring tasks (next sprint)
# WARNING: Changing status flow breaks mobile app sync
# HACK: Workaround for Python 3.9 bug #12345

# ── VERTICAL FORMATTING: Newspaper Metaphor ──
# Top of file: high-level (class declaration, imports)
# Middle: details (methods)
# Bottom: helpers (private utilities)
class TaskManager:
    """Public API — like the front page."""
    def create_task(self, title):
        task = self._build_task(title)
        self._save(task)
        return task
    def _build_task(self, title):
        return Task(title=title, id=self._next_id())
    def _next_id(self):
        self._counter += 1
        return self._counter</div>

<div class="diagram">
  <div class="diag-title">Comment Quality Matrix — কখন বলবে, কখন চুপ থাকবে</div>
  <svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg">
    <text x="20" y="25" fill="#ef4444" font-size="11" font-weight="bold">❌ খারাপ কমেন্ট (lies &amp; noise)</text>
    <rect x="20" y="35" width="250" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="30" y="54" fill="#ef4444" font-size="9" font-family="monospace"># This returns the list</text>
    <rect x="20" y="70" width="250" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="30" y="89" fill="#ef4444" font-size="9" font-family="monospace"># increment by 1 (code does 2)</text>
    <rect x="20" y="105" width="250" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="30" y="124" fill="#ef4444" font-size="9" font-family="monospace"># ====================================</text>
    <rect x="20" y="140" width="250" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="30" y="159" fill="#ef4444" font-size="9" font-family="monospace"># Author: John / Date: 2023</text>
    <text x="20" y="190" fill="#9a93b8" font-size="9">কোড বলে যা কমেন্ট আবার বলছে — noise।</text>
    <text x="20" y="205" fill="#ef4444" font-size="9">কোড বদলেছে, কমেন্ট পুরোনো — lie।</text>
    <text x="310" y="25" fill="#a5b4fc" font-size="11" font-weight="bold">✅ ভালো কমেন্ট (only when needed)</text>
    <rect x="310" y="35" width="230" height="30" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="360" y="54" fill="#a5b4fc" font-size="9" font-family="monospace"># TODO: recurring tasks next sprint</text>
    <rect x="310" y="70" width="230" height="30" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="360" y="89" fill="#a5b4fc" font-size="9" font-family="monospace"># WARNING: breaks mobile sync</text>
    <rect x="310" y="105" width="230" height="30" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="360" y="124" fill="#a5b4fc" font-size="9" font-family="monospace"># HACK: Python 3.9 bug #12345</text>
    <rect x="310" y="140" width="230" height="30" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="360" y="159" fill="#a5b4fc" font-size="9" font-family="monospace">"""Factory: creates Task."""</text>
    <text x="310" y="190" fill="#9a93b8" font-size="9">কোড বলতে না পারলে কমেন্ট।</text>
    <text x="310" y="205" fill="#a5b4fc" font-size="9">সতর্কতা, TODO, আইনি — মাত্র এই ৩ ধরন।</text>
    <rect x="20" y="220" width="530" height="25" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="360" y="237" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Martin: Before writing a comment, try to express in code.</text>
  </svg>
  <div class="diag-cap">খারাপ কমেন্ট = noise + lies। ভালো কমেন্ট = শুধু TODO, WARNING, HACK, docstring।</div>
</div>

<div class="dialogue">খুশু — শ্রদ্ধায় নীরবতা। কুরআনে আল্লাহ বলেন — তোমার প্রভুকে ডাকো বিনয়ে ও গোপনে (১৭:১১০)। ভালো কোডও গোপনে কথা বলে — শব্দ নয়, সত্য দিয়ে।</div>
<div class="dialogue en">Khushu — reverent silence. Allah says — call upon your Lord with humility and in secret (17:110). Good code speaks quietly — not with noise, but with truth.</div>

<div class="secret-box">📝 কমেন্ট = failure। ভালো কোড নিজে বলে। শুধু TODO, WARNING, HACK, docstring — বাকি সব মুছো।</div>
`,
  senior:{
    title:"Clean Code Comments & Formatting — Rules",
    body:`<p><strong>Martin-এর কমেন্ট নিয়ম (Clean Code Ch.4):</strong></p>
<table class="kv-table">
<tr><th>খারাপ কমেন্ট</th><th>কেন খারাপ</th></tr>
<tr><td class="hl">Mumbling</td><td>অস্পষ্ট — কেউ বোঝে না</td></tr>
<tr><td class="hl">Redundant</td><td>কোড পড়লেই বোঝা যায়</td></tr>
<tr><td class="hl">Misleading</td><td>কোড বদলেছে, কমেন্ট পুরোনো</td></tr>
<tr><td class="hl">Commented-out code</td><td>Git আছে — মুছো</td></tr>
</table>
<p><strong>Vertical Formatting (Ch.5):</strong> Newspaper metaphor — high-level উপরে, details নিচে।</p>`
  }
});

// ── DOOR 4: PRAGMATIC PROGRAMMER — DRY ──
doors.push({
  num:4, icon:"🎯", color:"#818cf8", name:"এক সত্যের সন্ধান",
  subtitle:"The Single Source of Truth", tech:"The Pragmatic Programmer (Hunt &amp; Thomas, 1999/2019) — DRY &amp; Orthogonality",
  spirit:"তাওহীদ — oneness, from Quran 112:1 (Say: He is One)",
  secret:"DRY = Don't Repeat Yourself। প্রতিটা জ্ঞানের একটাই সত্য উৎস। কপি-পেস্ট নয়, abstraction। Hunt &amp; Thomas: ডুপ্লিকেশন হলো maintainability-র শত্রু।",
  recall:{
    q:"DRY নীতি কী বলে? একটা উদাহরণ দাও।",
    qen:"What does the DRY principle say? Give an example.",
    a:"Every piece of knowledge must have a single, unambiguous, authoritative representation. উদাহরণ: validation rule যদি ৩ জায়গায় কপি থাকে — এক জায়গায় বদলালে ২ জায়গায় bug। DRY: একটা validate() ফাংশন।",
    aen:"Every piece of knowledge must have a single, unambiguous, authoritative representation. Example: if validation is copied in 3 places — change one, 2 bugs. DRY: one validate() function."
  },
  story:`
<p class="scene-setting">চতুর্থ দিন। নতুন কারিগর — ব্যবসায়ী সালমান। তিনি দেখলেন — তোমার কোডে একই যাচাই নিয়ম তিন জায়গায় কপি করা। title যাচাই create_task-এ, update_task-এ, import_tasks-এ। তিনটি আলাদা। একটা বদলালে দুটো পুরোনো থাকে।</p>
<p class="scene-setting en">Day four. A new craftsman — merchant Salman. He sees — your code has the same validation rule in three places. Title validation in create_task, update_task, and import_tasks. Three separate copies. Change one, two stay stale.</p>

<div class="dialogue">Hunt &amp; Thomas বলেন — Don't Repeat Yourself। কিন্তু DRY শুধু code duplication নয় — knowledge duplication। যদি title-এর সর্বোচ্চ দৈর্ঘ্য ২০০ হয় — সেটা এক জায়গায় defined হবে: MAX_TITLE_LENGTH = 200। তিন জায়গায় 200, 200, 250 নয়।</div>
<div class="dialogue en">Hunt &amp; Thomas say — Don't Repeat Yourself. But DRY is not just code duplication — it is knowledge duplication. If max title length is 200 — it is defined in one place: MAX_TITLE_LENGTH = 200.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> সালমান একটা গল্প বললেন। একটা e-commerce system-এ tax rate ৩ জায়গায় hardcoded ছিল: 0.08, 0.08, 0.075। একজন 0.08 বদলে 0.09 করলেন — কিন্তু এক জায়গায়। ফলাফল: কিছু invoice এ ৮% tax, কিছুতে ৯%। $২০,০০০ audit discrepancy। সব কারণ DRY ছিল না।</div></div>

<div class="code-block"># task_manager.py — Day 4: DRY (Don't Repeat Yourself)
# Hunt &amp; Thomas: "Every piece of knowledge must have a single,
# unambiguous, authoritative representation within a system."

# ── ❌ BAD: Knowledge duplicated in 3 places ──
def create_task(title):
    if len(title) &gt; 200:          # knowledge #1
        raise ValueError("Too long")

def update_task(task_id, title):
    if len(title) &gt; 200:          # knowledge #2 (same!)
        raise ValueError("Too long")

def import_tasks(csv_data):
    for row in csv_data:
        if len(row['title']) &gt; 250:  # knowledge #3 (WRONG!)
            raise ValueError("Too long")

# Bug: import allows 250, others 200. Inconsistent!

# ── ✅ GOOD: DRY — single source of truth ──
MAX_TITLE_LENGTH = 200  # ONE place. Period.

def validate_title(title):
    """Single authority for title validation."""
    if not title or not title.strip():
        raise ValueError("Title required")
    if len(title) &gt; MAX_TITLE_LENGTH:
        raise ValueError(f"Title exceeds {MAX_TITLE_LENGTH}")

def create_task(title):
    validate_title(title)  # calls the authority
    return Task(title=title)

def update_task(task_id, title):
    validate_title(title)  # same authority
    task = get_task(task_id)
    task.title = title

def import_tasks(csv_data):
    for row in csv_data:
        validate_title(row['title'])  # same authority

# Change MAX_TITLE_LENGTH once → all 3 update.
# This is DRY: Don't Repeat Your knowledge.

# ORTHOGONALITY: change one without breaking others
# Database layer ≠ Business logic ≠ UI layer
# Each can change independently.</div>

<div class="diagram">
  <div class="diag-title">DRY: এক সত্য — তিন মিথ্যার বিরুদ্ধে</div>
  <svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg">
    <text x="20" y="20" fill="#ef4444" font-size="10" font-weight="bold">❌ WET — Knowledge in 3 places</text>
    <rect x="20" y="28" width="150" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="95" y="47" text-anchor="middle" fill="#ef4444" font-size="9" font-family="monospace">create: len &gt; 200</text>
    <rect x="20" y="63" width="150" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="95" y="82" text-anchor="middle" fill="#ef4444" font-size="9" font-family="monospace">update: len &gt; 200</text>
    <rect x="20" y="98" width="150" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="95" y="117" text-anchor="middle" fill="#ef4444" font-size="9" font-family="monospace">import: len &gt; 250 ⚠️</text>
    <text x="95" y="145" text-anchor="middle" fill="#ef4444" font-size="9">৩টা আলাদা — ১টা ভুল</text>
    <text x="200" y="75" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">DRY</text>
    <line x1="175" y1="75" x2="215" y2="75" stroke="#a5b4fc" stroke-width="2"/>
    <text x="360" y="20" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">✅ DRY — One source</text>
    <rect x="240" y="28" width="240" height="30" rx="5" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
    <text x="360" y="47" text-anchor="middle" fill="#a5b4fc" font-size="9" font-family="monospace" font-weight="bold">MAX_TITLE_LENGTH = 200</text>
    <text x="360" y="72" text-anchor="middle" fill="#9a93b8" font-size="9">↓ used by ↓</text>
    <rect x="240" y="80" width="70" height="22" rx="4" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="275" y="95" text-anchor="middle" fill="#52c41a" font-size="9">create</text>
    <rect x="320" y="80" width="70" height="22" rx="4" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="355" y="95" text-anchor="middle" fill="#52c41a" font-size="9">update</text>
    <rect x="400" y="80" width="70" height="22" rx="4" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="435" y="95" text-anchor="middle" fill="#52c41a" font-size="9">import</text>
    <text x="360" y="120" text-anchor="middle" fill="#a5b4fc" font-size="9">১টা সত্য — ৩ জায়গায় ব্যবহার</text>
    <rect x="20" y="160" width="530" height="60" rx="6" fill="rgba(99,102,241,0.04)" stroke="rgba(99,102,241,0.15)" stroke-width="1"/>
    <text x="360" y="180" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Orthogonality (Hunt &amp; Thomas)</text>
    <text x="360" y="197" text-anchor="middle" fill="#9a93b8" font-size="9">Database ≠ Business logic ≠ UI — একটা বদলাও, অন্যটা ভাঙবে না</text>
  </svg>
  <div class="diag-cap">WET = ৩ কপি, ১ ভুল। DRY = ১ সত্য, ৩ ব্যবহার। Change once → all update।</div>
</div>

<div class="dialogue">তাওহীদ — একত্ববোধ। কুরআন: আল্লাহ এক। জ্ঞানেরও তাওহীদ — প্রতিটা নিয়মের একটাই উৎস। DRY হলো কোডে তাওহীদ।</div>
<div class="dialogue en">Tawhid — oneness. Quran: Allah is One. Knowledge has tawhid too — each rule has one source. DRY is tawhid in code.</div>

<div class="secret-box">🎯 DRY = Don't Repeat Yourself। প্রতিটা জ্ঞানের এক উৎস। কপি-পেস্ট নয়, abstraction। এটাই কোডে তাওহীদ।</div>
`,
  senior:{
    title:"Pragmatic Programmer — DRY & Orthogonality",
    body:`<p><strong>Hunt &amp; Thomas (1999/2019) এর মূল নীতি:</strong></p>
<table class="kv-table">
<tr><th>নীতি</th><th>অর্থ</th></tr>
<tr><td class="hl">DRY</td><td>Every piece of knowledge has ONE authoritative source</td></tr>
<tr><td class="hl">Orthogonality</td><td>Components change independently — no side effects</td></tr>
<tr><td class="hl">ETC</td><td>Easy to Change — design for change</td></tr>
</table>`
  }
});

// ── DOOR 5: PRAGMATIC PROGRAMMER — TRACER BULLETS & ETC ──
doors.push({
  num:5, icon:"🚀", color:"#818cf8", name:"প্রথম আলো",
  subtitle:"The First Light", tech:"The Pragmatic Programmer (Hunt &amp; Thomas, 1999/2019) — Tracer Bullets &amp; ETC",
  spirit:"নূর — light/guidance, from Quran 24:35 (Allah is the Light of heavens and earth)",
  secret:"Tracer bullet = প্রথমে end-to-end thin slice বানাও। UI → logic → database — সব connected, কিন্তু ছোট। কাজ করলে নিশ্চিত — architecture ঠিক। ETC: Easy to Change।",
  recall:{
    q:"Tracer bullet approach কী? কেন আগে architecture guess করা খারাপ?",
    qen:"What is the tracer bullet approach? Why is guessing architecture first bad?",
    a:"Tracer bullet = একটা feature সম্পূর্ণ বানাও — input থেকে output পর্যন্ত। পাতলা, কিন্তু সম্পূর্ণ। কাজ করলে architecture সঠিক। Guess করলে হয়তো ৩ মাস পরে দেখবে — সব ভুল।",
    aen:"Tracer bullet = build one feature completely — input to output. Thin, but complete. If it works, architecture is right. Guessing means maybe 3 months later you discover everything is wrong."
  },
  story:`
<p class="scene-setting">পঞ্চম দিন। সালমান একটা মানচিত্র খুললেন। তিনি বললেন — যাত্রা শুরুর আগে পুরো রাস্তা বানাও না। প্রথমে একটা সরু পথ — শুরু থেকে শেষ। যদি সেই পথে হাঁটা যায়, দিক ঠিক। তারপর চওড়া করো। এটাই tracer bullet — সামরিক ভাষায় এমন গুলি যা আলো ছড়ায়, লক্ষ্য দেখায়।</p>
<p class="scene-setting en">Day five. Salman opened a map. He said — you do not build the entire road before starting. First a narrow path — start to end. If you can walk it, direction is right. Then widen. This is a tracer bullet — military term for a bullet that emits light, showing the target.</p>

<div class="dialogue">Hunt &amp; Thomas একে বলেন Tracer Code: প্রতিটা layer connected — end to end — কিন্তু পাতলা। UI আছে, logic আছে, database আছে। কিন্তু শুধু একটা task create করা যায়। কাজ করলে? Architecture ঠিক। তারপর মোটা করো।</div>
<div class="dialogue en">Hunt &amp; Thomas call this Tracer Code: every layer connected — end to end — but thin. UI, logic, database exist. But just one feature: create a task. If it works? Architecture is right. Then thicken.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> সালমান বললেন — একটা টিম ৩ মাস ধরে database বানালো। তারপর ২ মাস business logic। তারপর UI বানাতে গিয়ে দেখলো — database-এর design UI-এর সাথে মেলে না! ৫ মাস নষ্ট। Tracer bullet দিলে প্রথম সপ্তাহেই বোঝা যেতো।</div></div>

<div class="code-block"># task_manager.py — Day 5: Tracer Bullet
# Hunt &amp; Thomas: "Tracer code is not disposable: you write it
# for keeps. It contains all the structure — it just is not
# fully functional."

# ── ❌ BAD: Build layers in isolation, hope they connect ──
# Sprint 1: Database schema (3 weeks)
# Sprint 2: Business logic (3 weeks)
# Sprint 3: UI → schema doesn't fit → redo

# ── ✅ GOOD: Tracer bullet — thin end-to-end ──
import sqlite3

class TaskDatabase:  # Layer 1: minimal
    def __init__(self):
        self.conn = sqlite3.connect(':memory:')
        self.conn.execute('''
            CREATE TABLE tasks (
                id INTEGER PRIMARY KEY,
                title TEXT NOT NULL
            )''')

    def save(self, title):
        cur = self.conn.execute(
            'INSERT INTO tasks (title) VALUES (?)', (title,))
        self.conn.commit()
        return cur.lastrowid

class TaskService:  # Layer 2: minimal
    def __init__(self, db):
        self.db = db

    def create_task(self, title):
        if not title.strip():
            raise ValueError("Title required")
        return self.db.save(title)

class TaskAPI:  # Layer 3: minimal
    def __init__(self, service):
        self.service = service

    def handle_create(self, request):
        try:
            task_id = self.service.create_task(
                request.get('title', ''))
            return {'id': task_id}, 201
        except ValueError as e:
            return {'error': str(e)}, 400

# Wire it up — end-to-end test
db = TaskDatabase()
service = TaskService(db)
api = TaskAPI(service)
response = api.handle_create({'title': 'Buy groceries'})
print(response)  # {'id': 1}, 201

# Tracer proves: DB → Service → API → Response
# All connected. Architecture works.
# Now THICKEN: add update, delete, search...

# ETC: "Easy to Change" — good design = easy to change
# Decoupled → change DB without touching API</div>

<div class="diagram">
  <div class="diag-title">Tracer Bullet — পাতলা কিন্তু সম্পূর্ণ সংযোগ</div>
  <svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrT" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#a5b4fc"/></marker></defs>
    <text x="360" y="20" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">Tracer Bullet: One feature, all layers</text>
    <rect x="30" y="35" width="140" height="35" rx="6" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
    <text x="100" y="57" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">API Layer</text>
    <line x1="100" y1="70" x2="100" y2="90" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrT)"/>
    <rect x="30" y="95" width="140" height="35" rx="6" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
    <text x="100" y="117" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">Service Layer</text>
    <line x1="100" y1="130" x2="100" y2="150" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrT)"/>
    <rect x="30" y="155" width="140" height="35" rx="6" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
    <text x="100" y="177" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">Database</text>
    <text x="100" y="210" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">✅ Works end-to-end!</text>
    <line x1="190" y1="110" x2="240" y2="110" stroke="#6b6588" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="215" y="103" text-anchor="middle" fill="#6b6588" font-size="9">vs</text>
    <text x="380" y="20" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">❌ Isolated: Hope they connect</text>
    <rect x="250" y="35" width="140" height="30" rx="5" fill="rgba(239,68,68,0.04)" stroke="#ef4444" stroke-width="1" opacity="0.5"/>
    <text x="360" y="54" text-anchor="middle" fill="#ef4444" font-size="9">DB (3 weeks)</text>
    <rect x="250" y="75" width="140" height="30" rx="5" fill="rgba(239,68,68,0.04)" stroke="#ef4444" stroke-width="1" opacity="0.5"/>
    <text x="360" y="94" text-anchor="middle" fill="#ef4444" font-size="9">Logic (3 weeks)</text>
    <rect x="250" y="115" width="140" height="30" rx="5" fill="rgba(239,68,68,0.04)" stroke="#ef4444" stroke-width="1" opacity="0.5"/>
    <text x="360" y="134" text-anchor="middle" fill="#ef4444" font-size="9">UI → mismatch!</text>
    <text x="360" y="155" text-anchor="middle" fill="#ef4444" font-size="9">৫ মাস পরে: দিক ভুল</text>
    <rect x="420" y="35" width="120" height="120" rx="8" fill="rgba(82,196,26,0.04)" stroke="rgba(82,196,26,0.2)" stroke-width="1"/>
    <text x="480" y="55" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">ETC Principle</text>
    <text x="480" y="75" text-anchor="middle" fill="#9a93b8" font-size="9">Easy to</text>
    <text x="480" y="90" text-anchor="middle" fill="#9a93b8" font-size="9">Change</text>
    <text x="480" y="115" text-anchor="middle" fill="#9a93b8" font-size="10">Decoupled</text>
    <text x="480" y="130" text-anchor="middle" fill="#9a93b8" font-size="10">DRY</text>
    <text x="480" y="145" text-anchor="middle" fill="#9a93b8" font-size="10">Orthogonal</text>
    <rect x="20" y="195" width="530" height="35" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="360" y="213" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Tracer Bullet = prove architecture before investing in features</text>
    <text x="360" y="225" text-anchor="middle" fill="#9a93b8" font-size="9">Thin slice → test → thicken → iterate</text>
  </svg>
  <div class="diag-cap">Tracer bullet: এক feature, সব layer, পাতলা। কাজ করলে architecture ঠিক। তারপর মোটা করো।</div>
</div>

<div class="dialogue">নূর — আলো। কুরআন: আল্লাহ আসমান ও জমিনের নূর (২৪:৩৫)। নূর দিক দেখায়। Tracer bullet সেই নূর — শুরুতে দিক দেখায়, ভুল পথে যাওয়া আটকায়।</div>
<div class="dialogue en">Nur — light. Quran: Allah is the Light (24:35). Light shows direction. A tracer bullet is that light — it shows direction early.</div>

<div class="secret-box">🚀 Tracer bullet = এক feature, সব layer, পাতলা। কাজ করলে নিশ্চিত — architecture ঠিক। ETC: Easy to Change।</div>
`,
  senior:{
    title:"Pragmatic Programmer — Tracer Bullets & ETC",
    body:`<p><strong>Hunt &amp; Thomas এর নীতি:</strong></p>
<table class="kv-table">
<tr><th>নীতি</th><th>প্রয়োগ</th></tr>
<tr><td class="hl">Tracer Bullet</td><td>One feature end-to-end, thin. Prove architecture.</td></tr>
<tr><td class="hl">ETC</td><td>Easy to Change — design for flexibility.</td></tr>
<tr><td class="hl">Prototypes</td><td>Disposable experiments — throw away after learning.</td></tr>
</table>
<p><strong>Tracer bullet ≠ prototype:</strong> Prototype = throw away. Tracer = keep forever (just thin). This matters!</p>`
  }
});
