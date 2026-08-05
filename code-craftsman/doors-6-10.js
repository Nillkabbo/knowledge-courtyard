// ════════════════════════════════════════════════════════════
// THE CODE CRAFTSMAN'S CODE — DOORS 6-10
// 6. Refactoring: Code Smells      7. Refactoring: Extract Method
// 8. Design Patterns: Strategy     9. Design Patterns: Observer+Factory
// 10. Code Complete: Defensive Programming
// ════════════════════════════════════════════════════════════

// ── DOOR 6: REFACTORING — CODE SMELLS ──
doors.push({
  num:6, icon:"👃", color:"#6366f1", name:"গন্ধের চেনা",
  subtitle:"Knowing the Smell", tech:"Refactoring Ch.6 (Fowler, 1999/2018) — Code Smells",
  spirit:"নাজা'আত — purification, from Quran 87:14-15 (whoever purifies himself has succeeded)",
  secret:"Code smell = রোগের লক্ষণ, রোগ নয়। ২২টি smell Fowler চিহ্নিত করেছেন। প্রতিটার নিরাময় আছে। শিখবে: Long Method, Large Class, Feature Envy, Primitive Obsession — চারটা প্রধান।",
  recall:{
    q:"Feature Envy কী? কীভাবে চেনো?",
    qen:"What is Feature Envy? How do you spot it?",
    a:"যখন একটা method অন্য class-এর data-তে বেশি আগ্রহী নিজের data-এর চেয়ে। get_customer_email() যদি task-এ থাকে কিন্তু customer-এর সব field অ্যাক্সেস করে — সে ভুল জায়গায়। Move Method করো।",
    aen:"When a method is more interested in another class's data than its own. If get_customer_email() lives in Task but accesses all Customer fields — it is in the wrong place. Use Move Method."
  },
  story:`
<p class="scene-setting">ষষ্ঠ দিন। নতুন কারিগর — স্থপতি নাফিসা। তার হাতে একটা স্ক্রল, স্ক্রলে ২২টি প্রতীক। প্রতিটি প্রতীক একটি code smell — এমন গন্ধ যা রোগের ইঙ্গিত দেয়। নাফিসা তোমার কোড দেখলেন। তার নাক কুঁকড়ে গেলো। এই কোডে কয়েকটি গন্ধ আছে — long method (দরজা ২-তে দেখা), feature envy, primitive obsession।</p>
<p class="scene-setting en">Day six. A new craftsman — architect Nafisa. In her hand: a scroll with 22 symbols. Each symbol is a code smell — a scent that hints at disease. Nafisa examined your code. Her nose wrinkled. This code has several smells — long method (seen in Door 2), feature envy, primitive obsession.</p>

<div class="dialogue">Fowler (1999, ২য় সংস্করণ ২০১৮) বলেন — code smell হলো রোগের লক্ষণ, রোগ নয়। ঠিক ডাক্তারের মতো: জ্বর লক্ষণ, রোগ নয়। জ্বর থেকে ডাক্তার বোঝেন — সংক্রমণ। Code smell থেকে কারিগর বোঝেন — কোথায় রিফ্যাক্টর দরকার। ২২টি smell, প্রতিটির নিরাময় আছে।</div>
<div class="dialogue en">Fowler (1999, 2nd edition 2018) says — a code smell is a symptom of disease, not the disease itself. Like a doctor: fever is a symptom, not the disease. From fever, the doctor understands — infection. From code smell, the craftsman understands — where to refactor. 22 smells, each has a cure.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> নাফিসা একটা গল্প বললেন। একটা TaskManager class ছিল ৫০টি method নিয়ে — Large Class smell। সব এক জায়গায়: task logic, notification, persistence, validation। কেউ একটা feature যোগ করতে গেলো — ৫০টি method পড়তে হলো। ৩ দিন লাগলো একটা ছোট পরিবর্তনে। নিরাময়: Extract Class। ৪টা আলাদা class — TaskManager, Notifier, TaskRepository, TaskValidator।</div></div>

<div class="code-block"># task_manager.py — Day 6: Code Smells (Fowler Ch.6)
# "Any fool can write code that a computer can understand.
#  Good programmers write code that humans can understand."
#  — Fowler, Refactoring

# ── SMELL 1: Long Method (cure: Extract Method) ──
# (Already fixed in Door 2 — but let's name it properly)

# ── SMELL 2: Large Class (cure: Extract Class) ──
# ❌ BAD: One class does everything
class TaskManagerGod:
    def create_task(self, title): ...
    def validate_title(self, title): ...
    def send_email(self, to, subject): ...
    def send_slack(self, channel, msg): ...
    def save_to_db(self, task): ...
    def query_from_db(self, query): ...
    def format_response(self, task): ...
    def parse_request(self, request): ...
    # 50+ methods... God class!

# ✅ GOOD: Extract Class — each class ONE responsibility
class TaskManager:           # business logic only
    def create_task(self, title): ...
    def update_task(self, id, title): ...

class TaskValidator:         # validation only
    def validate_title(self, title): ...

class TaskRepository:        # persistence only
    def save(self, task): ...
    def find_by_id(self, id): ...

class NotificationService:   # notifications only
    def send_email(self, to, subject): ...
    def send_slack(self, channel, msg): ...

# ── SMELL 3: Feature Envy (cure: Move Method) ──
# ❌ BAD: Task method envies Customer data
class Task:
    def get_assignee_email(self):
        customer = self.assignee
        return (customer.first_name + "@"
                + customer.domain)  # ← envies Customer!

# ✅ GOOD: Move to where the data lives
class Customer:
    def get_email(self):           # ← lives with its data
        return f"{self.first_name}@{self.domain}"

class Task:
    def get_assignee_email(self):
        return self.assignee.get_email()  # ← delegates

# ── SMELL 4: Primitive Obsession (cure: Replace Data Value with Object) ──
# ❌ BAD: status as string — typos possible
task.status = "pendng"  # ← typo, no error!

# ✅ GOOD: status as Enum — compiler catches mistakes
from enum import Enum
class TaskStatus(Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    CANCELLED = "cancelled"

task.status = TaskStatus.PENDING  # type-safe</div>

<div class="diagram">
  <div class="diag-title">৪ প্রধান Code Smell — লক্ষণ ও নিরাময়</div>
  <svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
    <text x="280" y="20" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">Fowler's 22 Smells — শীর্ষ ৪টি (Refactoring Ch.6)</text>
    <!-- Long Method -->
    <rect x="20" y="35" width="250" height="50" rx="6" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="35" y="53" fill="#ef4444" font-size="10" font-weight="bold">👃 Long Method</text>
    <text x="35" y="68" fill="#9a93b8" font-size="8">লক্ষণ: ২০+ লাইন, একাধিক কাজ</text>
    <text x="35" y="80" fill="#a5b4fc" font-size="8">নিরাময়: Extract Method (Door 7)</text>
    <!-- Large Class -->
    <rect x="290" y="35" width="250" height="50" rx="6" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="305" y="53" fill="#ef4444" font-size="10" font-weight="bold">👃 Large Class (God Class)</text>
    <text x="305" y="68" fill="#9a93b8" font-size="8">লক্ষণ: ৫০+ method, সব এক জায়গায়</text>
    <text x="305" y="80" fill="#a5b4fc" font-size="8">নিরাময়: Extract Class</text>
    <!-- Feature Envy -->
    <rect x="20" y="95" width="250" height="50" rx="6" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="35" y="113" fill="#ef4444" font-size="10" font-weight="bold">👃 Feature Envy</text>
    <text x="35" y="128" fill="#9a93b8" font-size="8">লক্ষণ: অন্য class-এর data বেশি ব্যবহার</text>
    <text x="35" y="140" fill="#a5b4fc" font-size="8">নিরাময়: Move Method</text>
    <!-- Primitive Obsession -->
    <rect x="290" y="95" width="250" height="50" rx="6" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="305" y="113" fill="#ef4444" font-size="10" font-weight="bold">👃 Primitive Obsession</text>
    <text x="305" y="128" fill="#9a93b8" font-size="8">লক্ষণ: string/int দিয়ে সব, কোনো object নয়</text>
    <text x="305" y="140" fill="#a5b4fc" font-size="8">নিরাময়: Replace with Object/Enum</text>
    <!-- Other smells -->
    <rect x="20" y="160" width="520" height="50" rx="6" fill="rgba(99,102,241,0.04)" stroke="rgba(99,102,241,0.15)" stroke-width="1"/>
    <text x="30" y="178" fill="#a5b4fc" font-size="9" font-weight="bold">আরও ১৮টি smell (Fowler Ch.6):</text>
    <text x="30" y="193" fill="#9a93b8" font-size="8">Long Parameter List · Divergent Change · Shotgun Surgery</text>
    <text x="30" y="205" fill="#9a93b8" font-size="8">Data Clumps · Speculative Generality · Temporary Field · Message Chains</text>
    <!-- Rule -->
    <rect x="20" y="220" width="520" height="40" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="238" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Fowler: "Smells are heuristic, not rules."</text>
    <text x="280" y="252" text-anchor="middle" fill="#9a93b8" font-size="8">অনুভব করো → নাম দাও → নিরাময় প্রয়োগ করো</text>
  </svg>
  <div class="diag-cap">Code smell = রোগের লক্ষণ। ৪ প্রধান: Long Method, Large Class, Feature Envy, Primitive Obsession। প্রতিটার নিরাময় আছে।</div>
</div>

<div class="dialogue">নাজা'আত — পরিশুদ্ধি। কুরআনে আল্লাহ বলেন — যে নিজেকে পবিত্র করেছে সে সফল হয়েছে (৮৭:১৪)। কোডেরও পরিশুদ্ধি আছে — smell চেনো, নিরাময় করো, পবিত্র করো। পরিশুদ্ধ কোড সহজে পড়া যায়, সহজে বদলানো যায়।</div>
<div class="dialogue en">Tazkiyah — purification. Allah says — whoever purifies himself has succeeded (87:14). Code has purification too — recognize the smell, apply the cure, purify. Clean code reads easily, changes easily.</div>

<div class="secret-box">👃 Code smell = লক্ষণ। শীর্ষ ৪: Long Method, Large Class, Feature Envy, Primitive Obsession। প্রতিটার নিরাময় আছে।</div>
`,
  senior:{
    title:"Fowler's 22 Code Smells — Quick Reference",
    body:`<p><strong>Fowler (Refactoring, 1999/2018) Ch.6:</strong></p>
<table class="kv-table">
<tr><th>Smell</th><th>নিরাময়</th></tr>
<tr><td class="hl">Long Method</td><td>Extract Method (Door 7)</td></tr>
<tr><td class="hl">Large Class</td><td>Extract Class, Extract Subclass</td></tr>
<tr><td class="hl">Feature Envy</td><td>Move Method, Move Field</td></tr>
<tr><td class="hl">Primitive Obsession</td><td>Replace Data Value with Object</td></tr>
<tr><td class="hl">Long Parameter List</td><td>Introduce Parameter Object</td></tr>
<tr><td class="hl">Divergent Change</td><td>Extract Class (one change = one place)</td></tr>
<tr><td class="hl">Shotgun Surgery</td><td>Inline Class (move together)</td></tr>
<tr><td class="hl">Data Clumps</td><td>Extract Class (same params together)</td></tr>
</table>
<p>Cross-ref: Book 40 (Software Engineering) Door 5, Book 38 (Operating Systems) Door 6.</p>`
  }
});

// ── DOOR 7: REFACTORING — EXTRACT METHOD ──
doors.push({
  num:7, icon:"♻️", color:"#6366f1", name:"বড় থেকে ছোট",
  subtitle:"From Large to Small", tech:"Refactoring Ch.9 (Fowler, 1999/2018) — Extract Method & Rename",
  spirit:"তাদবির — systematic improvement, from Quran 8:60 (prepare against them all you can)",
  secret:"Extract Method: বড় ফাংশন দেখলে একটা অংশ আলাদা করো, নাম দাও, কল করো। প্রতিটা extraction নাম পায় — কোড পড়া যায়। Rename: ভুল নাম ধরে রাখা মিথ্যা বলার মতো।",
  recall:{
    q:"Extract Method করার ৩টি ধাপ কী?",
    qen:"What are the 3 steps of Extract Method?",
    a:"১) একটা অংশ চিহ্নিত করো যা এক কাজ করে, ২) সেটাকে আলাদা ফাংশনে কপি করো, ৩) নাম দাও ও কল করো। IDE-এর refactor tool ব্যবহার করো — নিরাপদ।",
    aen:"1) Identify a section that does one job, 2) Copy it to a new function, 3) Name it and call it. Use your IDE's refactor tool — it is safe."
  },
  story:`
<p class="scene-setting">সপ্তম দিন। নাফিসা ফিরে এলেন — এবার হাতে একটা ছুরি, কাগজের কারিগরের ছুরি। গতকাল তিনি গন্ধ চিনিয়েছেন। আজ তিনি নিরাময় করবেন। প্রথম নিরাময়: Extract Method। দ্বিতীয়: Rename। তিনি তোমার ৪০-লাইনের calculate_priority ফাংশন ছুরি দিয়ে ভাগ করলেন — প্রতিটা অংশ একটা ছোট ফাংশন হলো।</p>
<p class="scene-setting en">Day seven. Nafisa returned — this time with a paper crafter's knife. Yesterday she identified smells. Today she applies cures. First cure: Extract Method. Second: Rename. She took your 40-line calculate_priority function and sliced it — each section became a small function.</p>

<div class="dialogue">Fowler বলেন — Extract Method হলো সবচেয়ে ব্যবহৃত refactoring। একটা কাজ করে এমন কোড অংশ বের করো, আলাদা ফাংশন বানাও, নাম দাও। নাম বলে কী করছে। কল করো। বড় ফাংশন ছোট ছোট টুকরো হয়ে যায় — প্রতিটা নাম পায়।</div>
<div class="dialogue en">Fowler says — Extract Method is the most used refactoring. Take code that does one job, make it a separate function, name it. The name says what it does. Call it. The big function becomes small pieces — each with a name.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> নাফিসা বললেন — একজন ডেভেলপার হাতে হাতে extract করতেন, কিন্তু নাম দিতেন না। helper1, helper2, do_stuff। ফলাফল: নাম পড়ে কেউ কিছু বোঝে না। Fowler বলেন — নাম যদি বলতে না পারো কী করছে, তাহলে extract করার দরকার নেই। নাম হলো আত্মা। খারাপ নাম = খারাপ extraction।</div></div>

<div class="code-block"># task_manager.py — Day 7: Extract Method + Rename
# Fowler: "Extract Method is the most common refactoring I use.
#  When you extract, you name the extracted code, and the name
#  tells you what it does."

# ── ❌ BAD: 40-line monster doing 5 things ──
def calculate_priority(task, user, deadline):
    # Get overdue status
    days_overdue = (deadline - task.created_at).days
    if days_overdue &gt; 0:
        overdue_penalty = days_overdue * 10
    else:
        overdue_penalty = 0

    # Get user importance
    if user.role == 'manager':
        importance = 100
    elif user.role == 'senior':
        importance = 70
    else:
        importance = 30

    # Get task weight
    if task.category == 'bug':
        weight = 80
    elif task.category == 'feature':
        weight = 60
    else:
        weight = 20

    # Combine
    base = weight + importance
    final = base - overdue_penalty
    return max(0, final)

# ── ✅ GOOD: Extracted — each function has a name ──
def calculate_priority(task, user, deadline):
    """Calculate task priority. Reads like English now."""
    weight = get_task_weight(task.category)
    importance = get_user_importance(user.role)
    penalty = get_overdue_penalty(task.created_at, deadline)
    return max(0, weight + importance - penalty)

def get_task_weight(category):
    """Task category → weight."""
    weights = {'bug': 80, 'feature': 60, 'maintenance': 20}
    return weights.get(category, 20)

def get_user_importance(role):
    """User role → importance score."""
    scores = {'manager': 100, 'senior': 70, 'junior': 30}
    return scores.get(role, 30)

def get_overdue_penalty(created_at, deadline):
    """Days overdue → penalty."""
    days_overdue = (deadline - created_at).days
    return days_overdue * 10 if days_overdue &gt; 0 else 0

# ── RENAME: when the name lies, change it ──
# ❌ def proc_data(d) → ✅ def process_task_batch(tasks)
# ❌ def check(x) → ✅ def is_task_valid(task)
# ❌ def get_info(id) → ✅ def get_task_summary(task_id)
# Fowler: "Names are the smallest unit of documentation.
#  Rename freely — IDE makes it safe."</div>

<div class="diagram">
  <div class="diag-title">Extract Method — বড় ফাংশন নামযুক্ত ছোট টুকরোতে</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrE" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#a5b4fc"/></marker></defs>
    <!-- Before -->
    <text x="100" y="20" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">❌ Before: 40 lines</text>
    <rect x="20" y="28" width="180" height="190" rx="8" fill="rgba(239,68,68,0.04)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="110" y="45" text-anchor="middle" fill="#ef4444" font-size="9" font-family="monospace">calculate_priority()</text>
    <rect x="30" y="55" width="160" height="35" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="110" y="76" text-anchor="middle" fill="#9a93b8" font-size="8">overdue calc (10 lines)</text>
    <rect x="30" y="95" width="160" height="35" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="110" y="116" text-anchor="middle" fill="#9a93b8" font-size="8">importance calc (8 lines)</text>
    <rect x="30" y="135" width="160" height="35" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="110" y="156" text-anchor="middle" fill="#9a93b8" font-size="8">weight calc (8 lines)</text>
    <rect x="30" y="175" width="160" height="30" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="110" y="194" text-anchor="middle" fill="#9a93b8" font-size="8">combine (4 lines)</text>
    <!-- Arrows -->
    <line x1="205" y1="72" x2="255" y2="50" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrE)"/>
    <line x1="205" y1="112" x2="255" y2="95" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrE)"/>
    <line x1="205" y1="152" x2="255" y2="140" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrE)"/>
    <!-- After -->
    <text x="400" y="20" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">✅ After: 4 small functions</text>
    <rect x="260" y="28" width="180" height="35" rx="6" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
    <text x="350" y="50" text-anchor="middle" fill="#a5b4fc" font-size="9" font-family="monospace" font-weight="bold">calculate_priority() — 5 lines</text>
    <rect x="260" y="73" width="180" height="25" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="350" y="89" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">get_overdue_penalty()</text>
    <rect x="260" y="103" width="180" height="25" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="350" y="119" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">get_user_importance()</text>
    <rect x="260" y="133" width="180" height="25" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="350" y="149" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">get_task_weight()</text>
    <text x="350" y="180" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Names tell the story</text>
    <text x="350" y="195" text-anchor="middle" fill="#9a93b8" font-size="8">পড়লে ইংরেজির মতো</text>
    <text x="350" y="210" text-anchor="middle" fill="#9a93b8" font-size="8">bug খুঁজতে সেকেন্ড</text>
    <!-- Rename note -->
    <rect x="455" y="28" width="90" height="80" rx="6" fill="rgba(99,102,241,0.04)" stroke="rgba(99,102,241,0.15)" stroke-width="1"/>
    <text x="500" y="45" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Rename</text>
    <text x="500" y="60" text-anchor="middle" fill="#9a93b8" font-size="7">proc_data →</text>
    <text x="500" y="72" text-anchor="middle" fill="#52c41a" font-size="7">process_batch</text>
    <text x="500" y="88" text-anchor="middle" fill="#9a93b8" font-size="7">check →</text>
    <text x="500" y="100" text-anchor="middle" fill="#52c41a" font-size="7">is_valid</text>
  </svg>
  <div class="diag-cap">৪০-লাইন monster → ৪টি নামযুক্ত ফাংশন। প্রতিটা নাম বলে কী করে। পড়লে ইংরেজির মতো মনে হয়।</div>
</div>

<div class="dialogue">তাদবির — প্রস্তুতি, পরিকল্পিত উন্নতি। কুরআনে আল্লাহ বলেন — তোমাদের সাধ্যমতো শক্তি প্রস্তুত করো (৮:৬০)। Refactoring হলো তাদবির — কোডের জন্য শক্তি প্রস্তুত করা। ছোট ফাংশন শক্তি — bug খুঁজতে সহজ, feature যোগ করতে সহজ।</div>
<div class="dialogue en">Tadbir — preparation, systematic improvement. Allah says — prepare against them all you can (8:60). Refactoring is tadbir — preparing strength for the code. Small functions are strength — bugs are easy to find, features are easy to add.</div>

<div class="secret-box">♻️ Extract Method: বড় ফাংশন → নামযুক্ত ছোট ফাংশন। প্রতিটা নাম বলে কী করে। IDE-এর refactor tool ব্যবহার করো।</div>
`,
  senior:{
    title:"Extract Method + Rename — Fowler's Technique",
    body:`<p><strong>Fowler (Refactoring Ch.9) — সবচেয়ে ব্যবহৃত refactoring:</strong></p>
<table class="kv-table">
<tr><th>Technique</th><th>কখন ব্যবহার</th></tr>
<tr><td class="hl">Extract Method</td><td>ফাংশন ২০+ লাইন বা একাধিক কাজ করে</td></tr>
<tr><td class="hl">Rename Method</td><td>নাম মিথ্যা বলে বা অস্পষ্ট</td></tr>
<tr><td class="hl">Inline Method</td><td>ফাংশন অপ্রয়োজনীয় — কল সাইটে পুনরায় যোগ করো</td></tr>
<tr><td class="hl">Move Method</td><td>Feature Envy — ফাংশন ভুল class-এ</td></tr>
<tr><td class="hl">Extract Class</td><td>Large Class — এক class একাধিক দায়িত্ব</td></tr>
</table>
<p><strong>নিয়ম:</strong> প্রতিটা refactoring-এর পরে test চালাও। Fowler: "Refactoring without tests is like dancing in the dark." Door 13 (TDD)-এ শিখবে কীভাবে।</p>`
  }
});

// ── DOOR 8: DESIGN PATTERNS — STRATEGY ──
doors.push({
  num:8, icon:"🏗️", color:"#818cf8", name:"শাখার শৃঙ্খল ভাঙা",
  subtitle:"Breaking the Branch Chain", tech:"Design Patterns (GoF, 1994) — Strategy Pattern",
  spirit:"হিকমাহ — wisdom/method, from Quran 2:269 (whoever is given wisdom has been given much good)",
  secret:"if/elif chain ৬টা branch? Strategy pattern। প্রতিটা branch একটা class, polymorphism দিয়ে স্বয়ংক্রিয় নির্বাচন। GoF: অ্যালগরিদম পরিবার আলাদা করো, পরস্পর বিনিময়যোগ্য করো।",
  recall:{
    q:"Strategy pattern কখন ব্যবহার করবে? একটা উদাহরণ দাও।",
    qen:"When to use Strategy pattern? Give an example.",
    a:"যখন একই কাজে একাধিক অ্যালগরিদম আছে — যেমন sort: bubble, merge, quick। if/elif চেইন নয় — প্রতিটা অ্যালগরিদম একটা class। runtime-এ যেকোনো বিনিময় করো।",
    aen:"When one task has multiple algorithms — e.g. sort: bubble, merge, quick. Not if/elif chain — each algorithm is a class. Swap at runtime."
  },
  story:`
<p class="scene-setting">অষ্টম দিন। নতুন কারিগর — নকশাবিদ রিয়াদ। তার হাতে একটা বই — ১৯৯৪ সালের Design Patterns, "Gang of Four" (Gamma, Helm, Johnson, Vlissides)। তিনি তোমার কোড দেখলেন — notification পাঠানোর ৬-branch if/elif চেইন। email, sms, slack, push, teams, webhooks। প্রতিটা এক if। নতুন channel যোগ করতে হলে if আরও বড়। রিয়াদ মাথা নাড়লেন — এটাকে ভাঙতে হবে।</p>
<p class="scene-setting en">Day eight. A new craftsman — designer Riyad. In his hand: the 1994 Design Patterns book, "Gang of Four." He examined your code — a 6-branch if/elif chain for sending notifications. email, sms, slack, push, teams, webhooks. Each a branch. Adding a new channel means more ifs. Riyad shook his head — this must be broken.</p>

<div class="dialogue">GoF (Gamma et al., ১৯৯৪) বলেন — Strategy pattern। প্রতিটা notification channel একটা Strategy। সব Strategy একই interface implement করে — send()। runtime-এ যেকোনো Strategy বসাও। নতুন channel? নতুন class। if/elif ছোঁয়ো না। এটাই Open/Closed Principle — খোলা সম্প্রসারণের জন্য, বন্ধ পরিবর্তনের জন্য।</div>
<div class="dialogue en">GoF (Gamma et al., 1994) say — Strategy pattern. Each notification channel is a Strategy. All implement the same interface — send(). Swap any Strategy at runtime. New channel? New class. No if/elif needed. This is the Open/Closed Principle — open for extension, closed for modification.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> রিয়াদ বললেন — একটা payment system-এ ৪টা if ছিল: credit, paypal, stripe, cash। ৫ম যোগ করতে গিয়ে কেউ process_payment স্পর্শ করতে ভয় পেলো। কেউ একটা if ভুল করলো — paypal লেখকে কপি করে stripe-এ পেস্ট করে paypal এর লজিক চালালো। Strategy দিলে প্রতিটা payment আলাদা class। ভুল অসম্ভব।</div></div>

<div class="code-block"># task_manager.py — Day 8: Strategy Pattern (GoF, 1994)
# Gamma, Helm, Johnson, Vlissides:
# "Define a family of algorithms, encapsulate each one,
#  and make them interchangeable."

from abc import ABC, abstractmethod

# ── ❌ BAD: if/elif chain — new channel = modify function ──
def send_notification(channel, message, recipient):
    if channel == 'email':
        smtp.send(recipient.email, message)
        log(f"Email to {recipient.email}")
    elif channel == 'sms':
        twilio.send(recipient.phone, message)
        log(f"SMS to {recipient.phone}")
    elif channel == 'slack':
        slack.post(recipient.slack_id, message)
        log(f"Slack to {recipient.slack_id}")
    elif channel == 'push':
        fcm.send(recipient.device_token, message)
        log(f"Push to {recipient.device_token}")
    # 5th channel? 6th? More if/elif...

# ── ✅ GOOD: Strategy Pattern — each channel = Strategy class ──

class NotificationStrategy(ABC):
    """Common interface — all strategies implement send()."""
    @abstractmethod
    def send(self, recipient, message):
        pass

class EmailNotification(NotificationStrategy):
    def send(self, recipient, message):
        smtp.send(recipient.email, message)
        return f"Email to {recipient.email}"

class SMSNotification(NotificationStrategy):
    def send(self, recipient, message):
        twilio.send(recipient.phone, message)
        return f"SMS to {recipient.phone}"

class SlackNotification(NotificationStrategy):
    def send(self, recipient, message):
        slack.post(recipient.slack_id, message)
        return f"Slack to {recipient.slack_id}"

class PushNotification(NotificationStrategy):
    def send(self, recipient, message):
        fcm.send(recipient.device_token, message)
        return f"Push to {recipient.device_token}"

# ── Context: uses whatever strategy is given ──
class NotificationService:
    def __init__(self):
        self._strategies = {
            'email': EmailNotification(),
            'sms': SMSNotification(),
            'slack': SlackNotification(),
            'push': PushNotification(),
        }

    def notify(self, channel, recipient, message):
        strategy = self._strategies.get(channel)
        if not strategy:
            raise ValueError(f"Unknown: {channel}")
        result = strategy.send(recipient, message)
        log(result)
        return result

    def register(self, channel_name, strategy):
        """Register a new channel — public API, no private access."""
        self._strategies[channel_name] = strategy

# New channel? Just add a class + register. No if/elif!
class TeamsNotification(NotificationStrategy):
    def send(self, recipient, message):
        teams.send(recipient.teams_id, message)
        return f"Teams to {recipient.teams_id}"

# Register via public method:
service = NotificationService()
service.register('teams', TeamsNotification())
# Done. No existing code changed. Open/Closed!</div>

<div class="diagram">
  <div class="diag-title">Strategy Pattern — if/elif চেইন → Polymorphic Dispatch</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <!-- Before: if chain -->
    <text x="100" y="20" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">❌ Before: if/elif chain</text>
    <rect x="20" y="28" width="180" height="160" rx="8" fill="rgba(239,68,68,0.04)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="110" y="45" text-anchor="middle" fill="#ef4444" font-size="8" font-family="monospace">send_notification()</text>
    <rect x="30" y="55" width="160" height="20" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="110" y="69" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">if email: smtp.send()</text>
    <rect x="30" y="80" width="160" height="20" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="110" y="94" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">elif sms: twilio.send()</text>
    <rect x="30" y="105" width="160" height="20" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="110" y="119" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">elif slack: slack.post()</text>
    <rect x="30" y="130" width="160" height="20" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="110" y="144" text-anchor="middle" fill="#9a93b8" font-size="7" font-family="monospace">elif push: fcm.send()</text>
    <text x="110" y="165" text-anchor="middle" fill="#ef4444" font-size="8">৫ম? ফাংশন খোলো!</text>
    <text x="110" y="178" text-anchor="middle" fill="#9a93b8" font-size="7">Closed for extension ❌</text>
    <!-- Arrow -->
    <line x1="205" y1="100" x2="255" y2="100" stroke="#a5b4fc" stroke-width="2"/>
    <text x="230" y="93" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">GoF</text>
    <!-- After: Strategy -->
    <text x="390" y="20" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">✅ After: Strategy Pattern</text>
    <rect x="260" y="28" width="280" height="35" rx="6" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
    <text x="400" y="50" text-anchor="middle" fill="#a5b4fc" font-size="9" font-family="monospace" font-weight="bold">NotificationService.notify()</text>
    <text x="400" y="75" text-anchor="middle" fill="#9a93b8" font-size="7">↓ delegates to ↓</text>
    <!-- Interface -->
    <rect x="320" y="85" width="160" height="25" rx="5" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="400" y="102" text-anchor="middle" fill="#a78bfa" font-size="8" font-family="monospace">NotificationStrategy (ABC)</text>
    <text x="400" y="125" text-anchor="middle" fill="#9a93b8" font-size="7">↓ implements ↓</text>
    <!-- Strategy classes -->
    <rect x="260" y="135" width="60" height="30" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="290" y="154" text-anchor="middle" fill="#52c41a" font-size="7">Email</text>
    <rect x="325" y="135" width="60" height="30" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="355" y="154" text-anchor="middle" fill="#52c41a" font-size="7">SMS</text>
    <rect x="390" y="135" width="60" height="30" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="420" y="154" text-anchor="middle" fill="#52c41a" font-size="7">Slack</text>
    <rect x="455" y="135" width="60" height="30" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="485" y="154" text-anchor="middle" fill="#52c41a" font-size="7">Push</text>
    <rect x="390" y="135" width="70" height="30" rx="5" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="525" y="154" text-anchor="middle" fill="#fbbf24" font-size="7">+Teams</text>
    <text x="400" y="190" text-anchor="middle" fill="#a5b4fc" font-size="8">নতুন channel? নতুন class।</text>
    <text x="400" y="205" text-anchor="middle" fill="#a5b4fc" font-size="8">if/elif ছোঁয়ো না!</text>
    <text x="400" y="222" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">Open for extension ✅</text>
    <text x="400" y="237" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">Closed for modification ✅</text>
    <!-- Bottom -->
    <rect x="20" y="250" width="530" height="22" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="265" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">GoF (1994): "Encapsulate what varies. Favor composition over inheritance."</text>
  </svg>
  <div class="diag-cap">if/elif চেইন → Strategy class পরিবার। নতুন channel = নতুন class, কোনো পুরোনো কোড স্পর্শ নয়। Open/Closed Principle।</div>
</div>

<div class="dialogue">হিকমাহ — প্রজ্ঞা। কুরআনে আল্লাহ বলেন — যাকে প্রজ্ঞা দেওয়া হয়েছে তাকে অনেক কল্যাণ দেওয়া হয়েছে (২:২৬৯)। Design Pattern হলো প্রজ্ঞা — আগের কারিগরদের অভিজ্ঞতা থেকে বোঝা সমাধান। Strategy হলো সেই প্রজ্ঞার একটি রূপ।</div>
<div class="dialogue en">Hikmah — wisdom. Allah says — whoever is given wisdom has been given much good (2:269). A design pattern is wisdom — a solution understood from the experience of earlier craftsmen. Strategy is one form of that wisdom.</div>

<div class="secret-box">🏗️ Strategy = if/elif চেইন ভাঙো। প্রতিটা branch একটা class। নতুন = নতুন class। Open/Closed Principle।</div>
`,
  senior:{
    title:"Design Patterns (GoF) — Strategy + When to Use",
    body:`<p><strong>Gang of Four (Gamma et al., 1994):</strong></p>
<table class="kv-table">
<tr><th>Pattern</th><th>কখন</th><th>বিকল্প</th></tr>
<tr><td class="hl">Strategy</td><td>একাধিক অ্যালগরিদম, runtime-এ বিনিময়</td><td>if/elif চেইন</td></tr>
<tr><td class="hl">Observer</td><td>এক পরিবর্তনে অনেককে জানানো</td><td>সরাসরি কল</td></tr>
<tr><td class="hl">Factory</td><td>object তৈরি centralize</td><td>সরাসরি constructor</td></tr>
<tr><td class="hl">Decorator</td><td>behavior যোগ করা, subclass ছাড়া</td><td>inheritance চেইন</td></tr>
</table>
<p><strong>Strategy এর ৩টি উপাদান:</strong> ১) Strategy interface (send), ২) Concrete strategies (Email, SMS), ৩) Context (NotificationService)। GoF: "Favor composition over inheritance" — ফাংশন বা object বিনিময় করো, subclass বানাবে না।</p>
<p><strong>Cross-ref:</strong> Book 40 (Software Engineering) Door 6-এ SOLID দেখবে — Strategy = Open/Closed Principle। Book 8 (LLM Anatomy)-এ different decoding strategies দেখবে — একই pattern।</p>`
  }
});

// ── DOOR 9: DESIGN PATTERNS — OBSERVER + FACTORY ──
doors.push({
  num:9, icon:"📡", color:"#818cf8", name:"দূত ও নির্মাতা",
  subtitle:"Heralds and Makers", tech:"Design Patterns (GoF, 1994) — Observer & Factory Patterns",
  spirit:"তাবলিগ — conveying/message, from the Islamic tradition of conveying truth faithfully",
  secret:"Observer: এক subject বদলায়, অনেক listener স্বয়ংক্রিয় জানে। Factory: object তৈরি centralize — কল সাইট জানে না কীভাবে। GoF-এর দুটি সবচেয়ে ব্যবহৃত pattern।",
  recall:{
    q:"Observer ও Factory pattern-এর পার্থক্য কী? প্রতিটার একটা উদাহরণ দাও।",
    qen:"What is the difference between Observer and Factory? Give one example each.",
    a:"Observer = এক থেকে অনেকে বার্তা। উদাহরণ: task complete হলে email, analytics, audit-log সব স্বয়ংক্রিয় জানে। Factory = object তৈরি centralize। TaskFactory.create() দেখে কোন type-এর task — caller জানে না।",
    aen:"Observer = one-to-many notification. Factory = centralized creation."
  },
  story:`
<p class="scene-setting">নবম দিন। রিয়াদ ফিরে এলেন — এবার দুটি নকশা নিয়ে। প্রথম: একজন দূত (Observer) — যে এক খবর অনেকের কাছে পৌঁছে দেয়। দ্বিতীয়: একটি নির্মাণ কেন্দ্র (Factory) — যেখানে object তৈরি হয়, কিন্তু কল সাইট জানে না কীভাবে। তিনি তোমার কোড দেখলেন — task complete হলে email, analytics, audit-log আলাদা আলাদা কল করা। টাইট কাপলিং। Task class তিনটি service জানে।</p>
<p class="scene-setting en">Day nine. Riyad returned — with two designs. First: a herald (Observer) — who delivers one message to many. Second: a construction center (Factory) — where objects are created, but the caller does not know how. He examined your code — task complete calls email, analytics, audit-log separately. Tight coupling.</p>

<div class="dialogue">GoF (১৯৯৪) বলেন — Observer pattern: subject ও observer। Subject বদলালে observer স্বয়ংক্রিয় জানে। Task complete হলে Task subject-এর notify() কল হয় — email, analytics, audit-log সব observer স্বয়ংক্রিয় react করে। Task class কাউকে জানে না — loose coupling।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> রিয়াদ বললেন — একটা system-এ Task class সরাসরি EmailService, AnalyticsService কল করতো। একদিন AnalyticsService down হলো — ফলে Task complete-ও crash। কেন? tight coupling। Observer দিলে: Task শুধু notify করে, AnalyticsService down হলে Task জানেই না।</div></div>

<div class="code-block"># task_manager.py — Day 9: Observer + Factory (GoF, 1994)
from abc import ABC, abstractmethod

# ══════════════════════════════════════
# OBSERVER PATTERN
# ══════════════════════════════════════

class TaskObserver(ABC):
    """Observer interface."""
    @abstractmethod
    def on_task_completed(self, task):
        pass

class EmailObserver(TaskObserver):
    def on_task_completed(self, task):
        send_email(task.assignee.email,
                   f"Task done: {task.title}")

class AnalyticsObserver(TaskObserver):
    def on_task_completed(self, task):
        track_event('task_completed',
                    {'category': task.category})

class AuditLogObserver(TaskObserver):
    def on_task_completed(self, task):
        log_audit(f"Task {task.id} completed")

# Subject: knows observers, notifies them
class Task:
    def __init__(self, title, assignee):
        self.title = title
        self.assignee = assignee
        self._observers = []

    def add_observer(self, observer):
        self._observers.append(observer)

    def complete(self):
        self.status = 'completed'
        for observer in self._observers:
            observer.on_task_completed(self)

# Wire it up:
task = Task("Fix login bug", user)
task.add_observer(EmailObserver())
task.add_observer(AnalyticsObserver())
task.add_observer(AuditLogObserver())
task.complete()  # all 3 notified automatically
# Task doesn't know WHO receives. Loose coupling!

# ══════════════════════════════════════
# FACTORY PATTERN
# ══════════════════════════════════════

class TaskFactory:
    """Centralizes task creation."""
    @staticmethod
    def create(task_type, title, assignee):
        if task_type == 'bug':
            return BugTask(title, assignee)
        elif task_type == 'feature':
            return FeatureTask(title, assignee)
        elif task_type == 'maintenance':
            return MaintenanceTask(title, assignee)
        raise ValueError(f"Unknown type: {task_type}")

# Caller doesn't know about BugTask, FeatureTask:
task = TaskFactory.create('bug', 'Fix crash', user)
# Factory decides which class. Caller just says 'bug'.</div>

<div class="diagram">
  <div class="diag-title">Observer — এক থেকে অনেকে, স্বয়ংক্রিয়</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrO" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#a5b4fc"/></marker></defs>
    <rect x="200" y="20" width="160" height="50" rx="8" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
    <text x="280" y="42" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">Task (Subject)</text>
    <text x="280" y="58" text-anchor="middle" fill="#9a93b8" font-size="8">complete() → notify()</text>
    <line x1="250" y1="70" x2="100" y2="120" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrO)"/>
    <line x1="280" y1="70" x2="280" y2="120" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrO)"/>
    <line x1="310" y1="70" x2="460" y2="120" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrO)"/>
    <text x="160" y="95" text-anchor="middle" fill="#9a93b8" font-size="7">notify()</text>
    <text x="280" y="95" text-anchor="middle" fill="#9a93b8" font-size="7">notify()</text>
    <text x="400" y="95" text-anchor="middle" fill="#9a93b8" font-size="7">notify()</text>
    <rect x="30" y="125" width="140" height="40" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="100" y="145" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">EmailObserver</text>
    <text x="100" y="158" text-anchor="middle" fill="#9a93b8" font-size="7">send_email()</text>
    <rect x="210" y="125" width="140" height="40" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="280" y="145" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">AnalyticsObserver</text>
    <text x="280" y="158" text-anchor="middle" fill="#9a93b8" font-size="7">track_event()</text>
    <rect x="390" y="125" width="140" height="40" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="460" y="145" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">AuditLogObserver</text>
    <text x="460" y="158" text-anchor="middle" fill="#9a93b8" font-size="7">log_audit()</text>
    <rect x="20" y="180" width="520" height="55" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="200" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Loose Coupling: Task doesn't know WHO receives</text>
    <text x="280" y="215" text-anchor="middle" fill="#9a93b8" font-size="8">নতুন observer? add_observer() — Task class ছোঁয়ো না</text>
    <text x="280" y="228" text-anchor="middle" fill="#9a93b8" font-size="8">এক observer crash → অন্যের ক্ষতি নেই</text>
  </svg>
  <div class="diag-cap">Observer: Task complete() → সব observer স্বয়ংক্রিয় জানে। Task কাউকে জানে না। Loose coupling।</div>
</div>

<div class="dialogue">তাবলিগ — বার্তা পৌঁছে দেওয়া। Observer pattern সেই কাজ করে — এক ঘটনা অনেক শ্রোতার কাছে স্বয়ংক্রিয় পৌঁছায়। বার্তাবাহক জানে না কে শুনছে — loose coupling।</div>
<div class="dialogue en">Tabligh — conveying the message. Observer pattern does this — one event automatically reaches many listeners. The sender does not know who is listening.</div>

<div class="secret-box">📡 Observer = এক → অনেক, স্বয়ংক্রিয়। Factory = object তৈরি centralize। দুটোই coupling কমায়।</div>
`,
  senior:{
    title:"Observer + Factory — GoF Patterns",
    body:`<p><strong>Gang of Four (Gamma et al., 1994):</strong></p>
<table class="kv-table">
<tr><th>Pattern</th><th>সমস্যা</th><th>সমাধান</th></tr>
<tr><td class="hl">Observer</td><td>এক পরিবর্তনে অনেককে জানানো</td><td>Subject → notify → Observers</td></tr>
<tr><td class="hl">Factory</td><td>object তৈরির লজিক ছড়িয়ে আছে</td><td>Centralize in Factory class</td></tr>
<tr><td class="hl">Decorator</td><td>behavior যোগ, subclass ছাড়া</td><td>Wrap object at runtime</td></tr>
</table>
<p><strong>Real-world: </strong> Django signals, addEventListener, React useEffect — সব Observer pattern।</p>`
  }
});

// ── DOOR 10: CODE COMPLETE — DEFENSIVE PROGRAMMING ──
doors.push({
  num:10, icon:"🛡️", color:"#6366f1", name:"দুর্গের প্রহরী",
  subtitle:"The Fortress Guard", tech:"Code Complete Ch.8 (McConnell, 2004) — Defensive Programming",
  spirit:"আমানত — trust/stewardship, from Quran 4:58 (deliver trusts to whom they are due)",
  secret:"Defensive = সব input সন্দেহ করো। Assert, validate, guard clause, fail fast। McConnell: যে ভাঙবে না — সে দুর্গ নয়, কাগজের ঘর।",
  recall:{
    q:"Defensive programming-এর ৩টি হাতিয়ার কী?",
    qen:"What are 3 tools of defensive programming?",
    a:"১) Assertion — ধরে নেওয়া সত্য যাচাই, ২) Input validation — বাইরের data trust করো না, ৩) Guard clause — bad case শুরুতেই ফেরাও।",
    aen:"1) Assertion, 2) Input validation, 3) Guard clause."
  },
  story:`
<p class="scene-setting">দশম দিন। নতুন কারিগর — দুর্গরক্ষক আদম। বর্শ হাতে, চোখে সতর্কতা। তিনি তোমার কোড দেখলেন — কোথাও assertion নেই, validation নেই, guard clause নেই। সব input trust করা। আদম বললেন — এটা দুর্গ নয়। খোলা দরজা।</p>
<p class="scene-setting en">Day ten. A new craftsman — fortress guard Adam. Spear in hand, vigilance in eyes. He examined your code — no assertions, no validation, no guard clauses. All input trusted. Adam said — this is not a fortress. An open door.</p>

<div class="dialogue">McConnell (Code Complete, ২০০৪) বলেন — defensive programming। কোড লেখার সময় ভাবো — কেউ ভুল দিলে কী হবে? null? empty string? negative? বিশাল list? সব ক্ষেত্রে কোড যেন স্পষ্ট error দেবে, ভাঙবে না।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> আদম বললেন — একটা function process_payment(amount)। কেউ negative amount পাঠালো: -1000। function সেটা process করে refund দিলো! গ্রাহকের অ্যাকাউন্টে $১০০০ যোগ। $৫০,০০০ ক্ষতি। সমাধান: assert amount &gt; 0 — সহজ, কিন্তু না থাকলে বিপদ।</div></div>

<div class="code-block"># task_manager.py — Day 10: Defensive Programming
# McConnell: "Defensive programming ensures continuing function
#  under unforeseen circumstances."

# ── ❌ BAD: Trust all input ──
def create_task(title, priority, due_date):
    task = Task(title=title, priority=priority, due_date=due_date)
    task.save()
    return task
# What if title=None? priority=-999? due_date="banana"?

# ── ✅ GOOD: Three layers of defense ──

# Layer 1: ASSERTIONS — verify YOUR assumptions
def calculate_priority(score, weight):
    """Internal — assert your assumptions."""
    assert isinstance(score, (int, float)), "score must be number"
    assert score &gt;= 0, f"score must be positive, got {score}"
    assert 0 &lt;= weight &lt;= 100, "weight must be 0-100"
    return score * weight / 100

# Layer 2: INPUT VALIDATION — never trust external data
def create_task(title, priority, due_date):
    """Public — validate ALL external input."""
    if not title or not title.strip():
        raise ValueError("Title required")
    if len(title) &gt; 200:
        raise ValueError("Title too long")
    if not isinstance(priority, int):
        raise TypeError("Priority must be integer")
    if priority &lt; 1 or priority &gt; 5:
        raise ValueError("Priority must be 1-5")
    return Task(title=title.strip(), priority=priority)

# Layer 3: GUARD CLAUSES — return bad cases early
def process_task(task):
    if task is None:
        return None
    if task.status == 'completed':
        return task  # no-op
    if task.assignee is None:
        raise ValueError("No assignee")
    # Main logic — clean, no nesting
    task.status = 'in_progress'
    notify_assignee(task)
    return task

# FAIL FAST: errors caught early = easier to debug
# SILENT FAILURE: errors hidden = ticking time bombs</div>

<div class="diagram">
  <div class="diag-title">Defensive Programming — তিন স্তরের দেয়াল</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="20" width="500" height="55" rx="8" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="50" y="40" fill="#52c41a" font-size="10" font-weight="bold">Layer 1: Assertions</text>
    <text x="50" y="56" fill="#9a93b8" font-size="8">verify YOUR assumptions — assert x &gt; 0</text>
    <text x="50" y="68" fill="#9a93b8" font-size="8">internal function-এ — ভুল দ্রুত ধরা যায়</text>
    <text x="500" y="45" fill="#52c41a" font-size="9" font-family="monospace" text-anchor="end">assert x &gt; 0</text>
    <rect x="30" y="85" width="500" height="55" rx="8" fill="rgba(99,102,241,0.06)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="50" y="105" fill="#a5b4fc" font-size="10" font-weight="bold">Layer 2: Input Validation</text>
    <text x="50" y="121" fill="#9a93b8" font-size="8">never trust external data — validate title, priority</text>
    <text x="50" y="133" fill="#9a93b8" font-size="8">public API-তে — বাইরের input সবসময় সন্দেহজনক</text>
    <text x="500" y="110" fill="#a5b4fc" font-size="9" font-family="monospace" text-anchor="end">if not title: raise</text>
    <rect x="30" y="150" width="500" height="55" rx="8" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="50" y="170" fill="#fbbf24" font-size="10" font-weight="bold">Layer 3: Guard Clauses</text>
    <text x="50" y="186" fill="#9a93b8" font-size="8">bad cases first — return early, rest clean</text>
    <text x="50" y="198" fill="#9a93b8" font-size="8">if task is None: return — মূল লজিক সরল</text>
    <text x="500" y="175" fill="#fbbf24" font-size="9" font-family="monospace" text-anchor="end">if None: return</text>
    <rect x="30" y="215" width="500" height="35" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="232" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">McConnell: "Fail fast, fail clearly"</text>
    <text x="280" y="244" text-anchor="middle" fill="#9a93b8" font-size="8">error যত দ্রুত ধরা — debug তত সহজ</text>
  </svg>
  <div class="diag-cap">৩ স্তর: Assertion (internal), Validation (external), Guard clause (flow)। সব input সন্দেহ করো।</div>
</div>

<div class="dialogue">আমানত — আস্থা, বিশ্বস্ততা। কুরআন: আল্লাহ আদেশ করেন আমানত অধিকারীর কাছে দিতে (৪:৫৮)। Defensive programming হলো আমানত রক্ষা — ইউজারের data, সিস্টেমের অখণ্ডতা। যে আমানত রক্ষা করে না সে কারিগর নয়।</div>
<div class="dialogue en">Amanah — trust, stewardship. Quran: deliver trusts to whom they are due (4:58). Defensive programming is protecting the amanah — user data, system integrity.</div>

<div class="secret-box">🛡️ Defensive = সব input সন্দেহ করো। Assert (internal), Validate (external), Guard clause (flow)। Fail fast, fail clearly।</div>
`,
  senior:{
    title:"Code Complete — Defensive Programming (McConnell, 2004)",
    body:`<p><strong>McConnell (Code Complete Ch.8):</strong></p>
<table class="kv-table">
<tr><th>নিয়ম</th><th>উদাহরণ</th></tr>
<tr><td class="hl">Assert assumptions</td><td>assert x &gt;= 0 — internal logic verify</td></tr>
<tr><td class="hl">Validate external input</td><td>if not title: raise ValueError</td></tr>
<tr><td class="hl">Guard clauses</td><td>if task is None: return — early exit</td></tr>
<tr><td class="hl">Error handling</td><td>try/except — caught, not swallowed</td></tr>
<tr><td class="hl">Fail fast</td><td>error যত দ্রুত ধরা, debug তত সহজ</td></tr>
</table>
<p><strong>Assertion vs Validation:</strong> Assertion = internal (programmer bug). Validation = external (user error). Assertions removed in production; validation stays.</p>
<p><strong>Cross-ref:</strong> Book 47 (Testing & QA) boundary testing। Book 13 (LLM Security) input sanitization।</p>`
  }
});
