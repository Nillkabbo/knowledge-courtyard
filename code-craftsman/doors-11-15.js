// ════════════════════════════════════════════════════════════
// THE CODE CRAFTSMAN'S CODE — DOORS 11-15
// 11. Code Complete: Control Flow   12. DDD: Ubiquitous Language
// 13. TDD: Red-Green-Refactor       14. Legacy Code: Seams
// 15. SICP: Abstraction Barriers
// ════════════════════════════════════════════════════════════

// ── DOOR 11: CODE COMPLETE — CONTROL FLOW ──
doors.push({
  num:11, icon:"🔀", color:"#6366f1", name:"সরল পথের সন্ধান",
  subtitle:"The Simple Path", tech:"Code Complete Ch.15-19 (McConnell, 2004) — Control Flow & Loops",
  spirit:"ইয়াসির — ease/simplicity, from the Hadith: 'The best of religion is that which is easiest'",
  secret:"Control flow সরল হবে। Nested loop ও complex condition এড়াও। Guard clause দিয়ে early return। McConnell: প্রতিটা if-else মানুষের মস্তিষ্কে বোঝা — সেই বোঝা কমাও।",
  recall:{
    q:"Deep nesting কেন খারাপ? কীভাবে কমাও?",
    qen:"Why is deep nesting bad? How to reduce it?",
    a:"প্রতিটা nesting level মানুষের মস্তিষ্কে বোঝা বাড়ায় — ৩+ level = কেউ বোঝে না। Guard clause দিয়ে early return। Complex condition? Named variable বানাও: is_valid = x &gt; 0 and x &lt; 100।",
    aen:"Each nesting level adds mental load — 3+ levels = nobody understands. Guard clause for early return. Complex condition? Named variable: is_valid = x > 0 and x < 100."
  },
  story:`
<p class="scene-setting">একাদশ দিন। আদম ফিরে এলেন — এবার হাতে একটা সরু সরু পথের মানচিত্র। তিনি তোমার কোড দেখলেন — nested if, if-এর ভেতরে if, তার ভেতরে loop, তার ভেতরে আবার if। পিরামিড — ৫ স্তর গভীর। আদম বললেন — মানুষের মস্তিষ্ক ৩ স্তরের বেশি nesting বোঝে না। এটা কোড নয়, ব্রেইন টিজার।</p>
<p class="scene-setting en">Day eleven. Adam returned — this time with a map of narrow paths. He examined your code — nested if, if inside if, loop inside that, if inside the loop. A pyramid — 5 levels deep. Adam said — the human brain cannot understand more than 3 levels of nesting. This is not code, it is a brain teaser.</p>

<div class="dialogue">McConnell (Code Complete, ২০০৪, Ch.15-19) বলেন — control flow সরল হবে। প্রতিটা if-else মস্তিষ্কে একটা শাখা তৈরি করে। ৫টা শাখা = ৫টা বিকল্প মনে রাখতে হবে। সমাধান: guard clause (early return), boolean variable (named condition), এবং loop ছোট রাখা।</div>
<div class="dialogue en">McConnell (Code Complete, 2004, Ch.15-19) says — keep control flow simple. Each if-else creates a mental branch. 5 branches = 5 alternatives to hold in mind. Solution: guard clause (early return), boolean variable (named condition), and small loops.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> আদম বললেন — একটা function-এ ৬ স্তরের nesting ছিল। একজন senior dev-ও বুঝতে পারলেন না। একটা bug এলো — debug-এ ৩ দিন। কারণ কোন branch-এ error সেটা খুঁজে পাওয়া যাচ্ছিল না। Refactor করে guard clause দিলেন — ৬ স্তর থেকে ২ স্তরে নামলো। bug ১০ মিনিটে ধরা গেলো।</div></div>

<div class="code-block"># task_manager.py — Day 11: Control Flow (McConnell, Code Complete)
# McConnell: "Simplify your control flow. The human brain
#  cannot hold more than 3 levels of nesting."

# ── ❌ BAD: Deep nesting — 5 levels, nobody understands ──
def process_tasks(tasks, user, settings):
    for task in tasks:
        if task.assignee == user:
            if task.status == 'pending':
                if settings.auto_assign:
                    if task.priority &gt; 3:
                        if task.created_at &gt; yesterday:
                            assign_task(task, user)
                            notify(task)
    # 5 levels of nesting. Nobody can read this.

# ── ✅ GOOD: Guard clauses flatten the pyramid ──
def process_tasks(tasks, user, settings):
    for task in tasks:
        # Guard: skip cases that don't apply — flat, not nested
        if task.assignee != user:
            continue
        if task.status != 'pending':
            continue
        if not settings.auto_assign:
            continue

        # Main logic — only 1 level of nesting
        if is_high_priority_and_recent(task):
            assign_task(task, user)
            notify(task)

def is_high_priority_and_recent(task):
    """Named boolean — reads like English."""
    return (task.priority &gt; 3
            and task.created_at &gt; yesterday)

# ── NESTED LOOPS → Extract Method ──
# ❌ BAD
def find_duplicates(matrix):
    for i, row in enumerate(matrix):
        for j, val in enumerate(row):
            for k, other in enumerate(matrix):
                if val == other and (i, j) != (k, j):
                    mark_duplicate(i, j, k)
    # 3 nested loops — O(n³)

# ✅ GOOD: extract the inner loop
def find_duplicates(matrix):
    for i, row in enumerate(matrix):
        check_row_against_matrix(i, row, matrix)

def check_row_against_matrix(i, row, matrix):
    for j, val in enumerate(row):
        for k, other in enumerate(matrix):
            if val == other and (i, j) != (k, j):
                mark_duplicate(i, j, k)

# ── BOOLEAN EXPRESSION: name complex conditions ──
# ❌ if task.status == 'pending' and task.priority &gt; 3 and user.role == 'manager' and not task.blocked:
# ✅ is_actionable = (task.status == 'pending' and not task.blocked)
#    is_urgent = (task.priority &gt; 3 and user.role == 'manager')
#    if is_actionable and is_urgent:</div>

<div class="diagram">
  <div class="diag-title">Control Flow — Deep Nesting vs Guard Clauses</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <!-- Before: nesting pyramid -->
    <text x="120" y="20" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">❌ Deep Nesting (5 levels)</text>
    <rect x="30" y="30" width="180" height="25" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="120" y="47" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">for task in tasks:</text>
    <rect x="45" y="60" width="165" height="25" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="127" y="77" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">if assignee == user:</text>
    <rect x="60" y="90" width="150" height="25" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="135" y="107" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">if status == 'pending':</text>
    <rect x="75" y="120" width="135" height="25" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="142" y="137" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">if auto_assign:</text>
    <rect x="90" y="150" width="120" height="25" rx="4" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="0.5"/>
    <text x="150" y="167" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">if priority &gt; 3:</text>
    <text x="120" y="195" text-anchor="middle" fill="#ef4444" font-size="8">৫ স্তর — কেউ বোঝে না</text>
    <!-- Arrow -->
    <line x1="220" y1="100" x2="270" y2="100" stroke="#a5b4fc" stroke-width="2"/>
    <text x="245" y="93" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">fix</text>
    <!-- After: guard clauses -->
    <text x="410" y="20" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">✅ Guard Clauses (flat)</text>
    <rect x="290" y="30" width="240" height="22" rx="4" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1"/>
    <text x="410" y="45" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">for task in tasks:</text>
    <rect x="305" y="57" width="220" height="22" rx="4" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="415" y="72" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">if not assignee: continue</text>
    <rect x="305" y="84" width="220" height="22" rx="4" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="415" y="99" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">if not pending: continue</text>
    <rect x="305" y="111" width="220" height="22" rx="4" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="415" y="126" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">if not auto: continue</text>
    <rect x="290" y="138" width="240" height="22" rx="4" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="410" y="153" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace" font-weight="bold">if is_urgent: assign(task)</text>
    <text x="410" y="175" text-anchor="middle" fill="#a5b4fc" font-size="8">১ স্তর — সবাই বোঝে</text>
    <text x="410" y="190" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">Bug? সরাসরি দেখা যায়</text>
    <!-- Bottom -->
    <rect x="20" y="210" width="520" height="30" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="228" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">McConnell: "Max 3 levels. Use guard clauses, named booleans."</text>
  </svg>
  <div class="diag-cap">৫-স্তর nesting → guard clause দিয়ে flat। মস্তিষ্কে বোঝা কমে, bug ধরা সহজ হয়।</div>
</div>

<div class="dialogue">ইয়াসির — সহজতা। হাদিসে এসেছে — দ্বীনের সেরটা সহজটা। কোডেরও ইয়াসির আছে — সরল control flow, সরল path, সরল চিন্তা। যে কোড সহজে বোঝা যায়, সে কোড সহজে বদলানো যায়।</div>
<div class="dialogue en">Yasir — ease, simplicity. Hadith: the best of religion is that which is easiest. Code has yasir too — simple control flow, simple path, simple thought. Code that is easy to understand is easy to change.</div>

<div class="secret-box">🔀 Control flow সরল রাখো। Guard clause, named boolean, max 3 nesting। পিরামিড নয়, flat path।</div>
`,
  senior:{
    title:"Code Complete — Control Flow Rules (McConnell, 2004)",
    body:`<p><strong>McConnell (Ch.15-19) নিয়ম:</strong></p>
<table class="kv-table">
<tr><th>নিয়ম</th><th>প্রয়োগ</th></tr>
<tr><td class="hl">Max 3 nesting</td><td>৩-এর বেশি = extract করো বা guard clause দাও</td></tr>
<tr><td class="hl">Guard clauses</td><td>bad case → continue/return early</td></tr>
<tr><td class="hl">Named booleans</td><td>complex condition → named variable</td></tr>
<tr><td class="hl">Loop simplification</td><td>নেস্টেড loop → extract method</td></tr>
<tr><td class="hl">Single exit</td><td>McConnell: multiple return ঠিক যদি ছোট ফাংশন হয়</td></tr>
</table>
<p>Cross-ref: Book 40 (Software Engineering) Door 8, Book 45 (Compilers) Door 6.</p>`
  }
});

// ── DOOR 12: DDD — UBIQUITOUS LANGUAGE ──
doors.push({
  num:12, icon:"🗣️", color:"#818cf8", name:"এক ভাষা, এক অর্থ",
  subtitle:"One Language, One Meaning", tech:"Domain-Driven Design (Evans, 2003) — Ubiquitous Language",
  spirit:"বায়ান — clear speech, from Quran 55:3-4 (He taught clear speech)",
  secret:"Code ও business এক ভাষায় কথা বলবে। Item নয়, Task। status=1 নয়, TaskStatus.PENDING। Evans: ubiquitous language — ডেভেলপার ও domain expert এক শব্দ ব্যবহার করে, code-এ, conversation-এ, সবখানে।",
  recall:{
    q:"Ubiquitous language কী? কেন দরকার?",
    qen:"What is ubiquitous language? Why is it needed?",
    a:"Code-এর ভাষা ও business-এর ভাষা এক। যেমন: business-এ 'Task Complete' বলে → code-এ task.complete()। অনুবাদ স্তর নেই — ডেভেলপার ও domain expert এক ভাষায় কথা বলে। ভুল বোঝার সুযোগ কমে।",
    aen:"Code and business speak the same language. E.g. business says 'Task Complete' → code has task.complete(). No translation layer."
  },
  story:`
<p class="scene-setting">দ্বাদশ দিন। নতুন কারিগর — ভাষাবিদ সাকিনা। তার হাতে একটা অভিধান। তিনি বসে আছেন domain expert (একজন project manager) ও তোমার মাঝে। PM বলছেন: "task complete করো"। কিন্তু কোডে লেখা: set_status_to_2(task_id)। সাকিনা বললেন — এই অনুবাদ ভুলের জন্য অপেক্ষা করছে।</p>
<p class="scene-setting en">Day twelve. A new craftsman — linguist Sakina. She holds a dictionary. She sits between the domain expert (a project manager) and you. The PM says: "complete the task." But the code says: set_status_to_2(task_id). Sakina said — this translation is waiting for a mistake.</p>

<div class="dialogue">Evans (Domain-Driven Design, ২০০৩) বলেন — ubiquitous language। Code-এর প্রতিটা শব্দ business-এর ভাষায় হবে। Task, User, Project — যে শব্দ PM ব্যবহার করেন, সেই শব্দ code-এ। complete() নাম, CompleteTask নাম — অনুবাদ স্তর নেই। যখন ভাষা মেলে, ভুল বোঝার সুযোগ থাকে না।</div>
<div class="dialogue en">Evans (Domain-Driven Design, 2003) says — ubiquitous language. Every word in code matches the business language. Task, User, Project — the words the PM uses are the words in code. No translation layer. When language matches, misunderstandings vanish.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> সাকিনা বললেন — একটা system-এ code বলতো Entity, business বলতো Item। একজন junior dev-কে বলা হলো "mark this Item as done"। সে Entity-র সাথে Item মিলিয়ে ভুল টেবিলে update করলো। এক শব্দের অমিল — এক ঘণ্টার bug। Ubiquitous language দিলে: Item-ই Item, Entity-ই Entity — কোনো অনুবাদ নেই।</div></div>

<div class="code-block"># task_manager.py — Day 12: Ubiquitous Language (DDD, Evans 2003)
# Evans: "Use the model-based language rigorously in all
#  communication — conversations, diagrams, and code."

from enum import Enum
from dataclasses import dataclass
from datetime import datetime

# ── ❌ BAD: Developer language ≠ Business language ──
class EntityModel:  # ← business calls this 'Task', not 'Entity'
    def __init__(self, field1, field2, flag):  # cryptic names
        self.field1 = field1   # ← what is field1? Title? Name?
        self.field2 = field2   # ← Date? Priority?
        self.flag = flag       # ← What flag? Status?

    def update_flag(self, id, new_flag):  # business says 'complete'
        self.flag = new_flag   # business: 'mark as done'

# Business says: "Create a Task with a title and due date"
# Code says:   "Instantiate EntityModel with field1 and field2"
# → Translation layer. Misunderstanding. Bugs.

# ── ✅ GOOD: Ubiquitous language — code speaks business ──

class TaskStatus(Enum):
    """Business: 'A task can be Pending, In Progress, or Done'."""
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    DONE = "done"

@dataclass
class Task:
    """Business: 'A Task has a title, assignee, and due date'."""
    id: int
    title: str           # business word: 'title'
    assignee: 'User'     # business word: 'assignee'
    due_date: datetime   # business word: 'due date'
    status: TaskStatus = TaskStatus.PENDING

    def complete(self):
        """Business: 'Complete this task' → code: task.complete()"""
        self.status = TaskStatus.DONE

    def reopen(self):
        """Business: 'Reopen this task' → code: task.reopen()"""
        if self.status != TaskStatus.DONE:
            raise ValueError("Only done tasks can be reopened")
        self.status = TaskStatus.PENDING

class TaskList:
    """Business: 'A user has a list of tasks'."""
    def __init__(self):
        self._tasks: list[Task] = []

    def add(self, task: Task):
        """Business: 'Add a task to the list'."""
        self._tasks.append(task)

    def pending(self) -&gt; list[Task]:
        """Business: 'Show me my pending tasks'."""
        return [t for t in self._tasks
                if t.status == TaskStatus.PENDING]

    def overdue(self) -&gt; list[Task]:
        """Business: 'Which tasks are overdue?'."""
        now = datetime.now()
        return [t for t in self._tasks
                if t.due_date &lt; now
                and t.status != TaskStatus.DONE]

# Now: business person reads code and UNDERSTANDS it.
# "task.complete()" — they know what this means.
# No translation layer. One language.</div>

<div class="diagram">
  <div class="diag-title">Ubiquitous Language — অনুবাদ স্তর মুছো</div>
  <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
    <!-- Before: translation -->
    <text x="120" y="20" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">❌ Translation Layer</text>
    <rect x="30" y="30" width="180" height="35" rx="6" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="120" y="48" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="bold">Business says:</text>
    <text x="120" y="60" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">"Complete this task"</text>
    <rect x="30" y="80" width="180" height="25" rx="5" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1"/>
    <text x="120" y="97" text-anchor="middle" fill="#fbbf24" font-size="8">↓ translate ↓</text>
    <rect x="30" y="115" width="180" height="35" rx="6" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="120" y="133" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="bold">Code says:</text>
    <text x="120" y="145" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">set_status_to_2(id)</text>
    <text x="120" y="175" text-anchor="middle" fill="#ef4444" font-size="8">ভুল অনুবাদ = bug</text>
    <text x="120" y="190" text-anchor="middle" fill="#9a93b8" font-size="7">EntityModel.field1 ← ??</text>
    <!-- Arrow -->
    <line x1="220" y1="90" x2="280" y2="90" stroke="#a5b4fc" stroke-width="2"/>
    <text x="250" y="83" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">DDD</text>
    <!-- After: one language -->
    <text x="410" y="20" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">✅ Ubiquitous Language</text>
    <rect x="300" y="30" width="220" height="35" rx="6" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="410" y="48" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Both say:</text>
    <text x="410" y="60" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">task.complete()</text>
    <rect x="300" y="80" width="220" height="25" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="410" y="97" text-anchor="middle" fill="#52c41a" font-size="8">= (no translation)</text>
    <rect x="300" y="115" width="220" height="35" rx="6" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="410" y="133" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">Business reads code:</text>
    <text x="410" y="145" text-anchor="middle" fill="#9a93b8" font-size="8">"Yes, that's what I meant!"</text>
    <text x="410" y="175" text-anchor="middle" fill="#a5b4fc" font-size="8">এক ভাষা, এক অর্থ</text>
    <text x="410" y="190" text-anchor="middle" fill="#52c41a" font-size="7" font-weight="bold">No bugs from mismatch</text>
    <!-- Bottom -->
    <rect x="20" y="205" width="520" height="25" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="222" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Evans: "The code IS the model. The model IS the language."</text>
  </svg>
  <div class="diag-cap">অনুবাদ স্তর মুছো। Business ও code এক ভাষায় কথা বলবে। task.complete() — সবাই বোঝে।</div>
</div>

<div class="dialogue">বায়ান — স্পষ্ট ভাষা। কুরআনে আল্লাহ বলেন — তিনি মানুষকে বায়ান (স্পষ্ট ভাষা) শিখিয়েছেন (৫৫:৩-৪)। স্পষ্ট ভাষা হলো আল্লাহর নিয়ামত। Code-এর ভাষা স্পষ্ট হলে — ডেভেলপার, business, সবাই বোঝে। অস্পষ্ট ভাষা বিভ্রান্তি ছড়ায়।</div>
<div class="dialogue en">Bayan — clear speech. Allah says — He taught mankind clear speech (55:3-4). Clear language is a gift from Allah. When code's language is clear — developers, business, everyone understands. Unclear language spreads confusion.</div>

<div class="secret-box">🗣️ Ubiquitous language = code ও business এক ভাষায়। task.complete() — সবাই বোঝে। অনুবাদ স্তর মুছো।</div>
`,
  senior:{
    title:"DDD — Ubiquitous Language (Evans, 2003)",
    body:`<p><strong>Evans-এর নীতি (Domain-Driven Design Ch.1-3):</strong></p>
<table class="kv-table">
<tr><th>নীতি</th><th>প্রয়োগ</th></tr>
<tr><td class="hl">Ubiquitous Language</td><td>code-এর শব্দ = business-এর শব্দ</td></tr>
<tr><td class="hl">Bounded Context</td><td>এক domain-এর শব্দ অন্য domain-এ আলাদা</td></tr>
<tr><td class="hl">Domain Model</td><td>code = model — একই জিনিস</td></tr>
<tr><td class="hl">Context Map</td><td>domain-এর সীমানা ও সম্পর্ক স্পষ্ট</td></tr>
</table>
<p><strong>Example: </strong> "Task" in a TODO app vs "Task" in Celery (async job queue) — same word, different bounded context. DDD says: respect the boundary.</p>
<p><strong>Cross-ref:</strong> Book 40 (Software Engineering) Door 3-এ domain modeling দেখবে। Book 22 (CS Ocean) Door 8-এ software architecture দেখবে।</p>`
  }
});

// ── DOOR 13: TDD — RED-GREEN-REFACTOR ──
doors.push({
  num:13, icon:"🧪", color:"#6366f1", name:"প্রথমে প্রমাণ",
  subtitle:"Proof First", tech:"Test-Driven Development (Beck, 2002) — Red-Green-Refactor",
  spirit:"আমানত — trust/verification, from Quran 49:6 (verify before believing)",
  secret:"TDD: প্রথমে test লেখো (Red — fail), তারপর কোড (Green — pass), তারপর refactor। Beck: test হলো প্রমাণ। প্রমাণ ছাড়া কোড = বিশ্বাস ছাড়া কথা।",
  recall:{
    q:"TDD-এর ৩টি ধাপ কী? কেন test আগে?",
    qen:"What are the 3 steps of TDD? Why test first?",
    a:"১) Red: test লেখো, fail করবে (কোড নেই), ২) Green: সবচেয়ে কম কোড লেখো যাতে test pass করে, ৩) Refactor: পরিষ্কার করো। Test আগে কারণ — test-ই design চালায়, শুধু কোড নয়।",
    aen:"1) Red: write test, it fails (no code), 2) Green: minimal code to pass, 3) Refactor: clean up. Test first because the test drives the design."
  },
  story:`
<p class="scene-setting">ত্রয়োদশ দিন। নতুন কারিগর — কারিগর বেলাল। তার হাতে একটা স্কেল ও একটা হাতুড়ি। স্কেল = test, হাতুড়ি = কোড। তিনি বললেন — কাঠামো বানাও, তারপর স্কেলে মাপো নয়। উল্টো — স্কেলে মাপো, তারপর কাঠামো বানাও। Test first, code second। এটাই TDD।</p>
<p class="scene-setting en">Day thirteen. A new craftsman — craftsman Belal. In his hands: a scale and a hammer. Scale = test, hammer = code. He said — do not build a structure, then measure it. Reverse it — measure first, then build. Test first, code second. This is TDD.</p>

<div class="dialogue">Kent Beck (TDD, ২০০২) বলেন — তিনটি ধাপ। Red: test লেখো, fail করবে (কোড নেই)। Green: সবচেয়ে কম কোড লেখো যাতে test pass করে। Refactor: পরিষ্কার করো, test পাস রেখে। Beck-এর সবচেয়ে বড় উপলব্ধি: test শুধু verify করে না — test design চালায়। কোন API সহজ test হবে, সেটাই ভালো API।</div>
<div class="dialogue en">Kent Beck (TDD, 2002) says — three steps. Red: write test, it fails (no code). Green: minimal code to pass. Refactor: clean up, keeping test green. Beck's biggest insight: tests don't just verify — tests drive design. The API that is easy to test is the good API.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> বেলাল বললেন — একটা টিম ৬ মাস ধরে কোড লিখলো, কোনো test নেই। Release-এর আগে "test যোগ করি"। কিন্তু কোড test-friendly নয় — সব hardcoded dependency। test লেখা অসম্ভব। ফলাফল: release এলো, bug এলো, fix করতে গিয়ে আরও bug। Test আগে হলে — কোড প্রথম থেকেই test-friendly হতো।</div></div>

<div class="code-block"># task_manager.py — Day 13: TDD (Beck, 2002)
# Kent Beck: "Write a test that fails, then write code
#  to make it pass. That is all."

import pytest

# ══════════════════════════════════════
# RED: Write the test FIRST — it must FAIL
# ══════════════════════════════════════

class TestTaskManager:
    """Tests written BEFORE implementation."""

    def test_create_task(self):
        """RED: TaskManager doesn't exist yet → fails."""
        manager = TaskManager()
        task = manager.create_task("Buy groceries")

        assert task.title == "Buy groceries"
        assert task.status == TaskStatus.PENDING
        assert task.id is not None

    def test_complete_task(self):
        """RED: complete() doesn't exist yet → fails."""
        manager = TaskManager()
        task = manager.create_task("Call mom")
        task.complete()

        assert task.status == TaskStatus.DONE

    def test_cannot_complete_twice(self):
        """RED: must raise error if already done."""
        manager = TaskManager()
        task = manager.create_task("Pay bills")
        task.complete()

        with pytest.raises(ValueError, match="already done"):
            task.complete()

    def test_empty_title_raises(self):
        """RED: empty title must be rejected."""
        manager = TaskManager()

        with pytest.raises(ValueError, match="required"):
            manager.create_task("")

    def test_list_pending(self):
        """RED: pending() must filter correctly."""
        manager = TaskManager()
        t1 = manager.create_task("Task A")
        t2 = manager.create_task("Task B")
        t2.complete()

        pending = manager.pending()
        assert len(pending) == 1
        assert pending[0].title == "Task A"

# ══════════════════════════════════════
# GREEN: Write MINIMAL code to pass tests
# ══════════════════════════════════════

class TaskManager:
    """Minimal implementation — just enough to pass tests."""
    def __init__(self):
        self._tasks = []
        self._next_id = 1

    def create_task(self, title):
        if not title.strip():
            raise ValueError("Title required")
        task = Task(
            id=self._next_id,
            title=title,
            status=TaskStatus.PENDING
        )
        self._tasks.append(task)
        self._next_id += 1
        return task

    def pending(self):
        return [t for t in self._tasks
                if t.status == TaskStatus.PENDING]

# ══════════════════════════════════════
# REFACTOR: Clean up — tests stay GREEN
# ══════════════════════════════════════
# (extract methods, rename, restructure —
#  tests protect you from breaking anything)

# THE TDD CYCLE:
# Red   → write failing test
# Green → write minimal code to pass
# Refactor → clean up, keep green
# Repeat</div>

<div class="diagram">
  <div class="diag-title">TDD Cycle — Red → Green → Refactor</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrR" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#a5b4fc"/></marker></defs>
    <!-- Red -->
    <circle cx="100" cy="120" r="50" fill="rgba(239,68,68,0.08)" stroke="#ef4444" stroke-width="2.5"/>
    <text x="100" y="115" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">🔴 RED</text>
    <text x="100" y="132" text-anchor="middle" fill="#9a93b8" font-size="8">Write test</text>
    <text x="100" y="144" text-anchor="middle" fill="#9a93b8" font-size="8">MUST fail</text>
    <text x="100" y="185" text-anchor="middle" fill="#ef4444" font-size="7">test_create()</text>
    <text x="100" y="197" text-anchor="middle" fill="#ef4444" font-size="7">→ FAIL (no code)</text>
    <!-- Arrow Red→Green -->
    <path d="M 155 110 Q 195 90, 230 120" fill="none" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrR)"/>
    <!-- Green -->
    <circle cx="280" cy="120" r="50" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="2.5"/>
    <text x="280" y="115" text-anchor="middle" fill="#52c41a" font-size="14" font-weight="bold">🟢 GREEN</text>
    <text x="280" y="132" text-anchor="middle" fill="#9a93b8" font-size="8">Minimal code</text>
    <text x="280" y="144" text-anchor="middle" fill="#9a93b8" font-size="8">MUST pass</text>
    <text x="280" y="185" text-anchor="middle" fill="#52c41a" font-size="7">create_task()</text>
    <text x="280" y="197" text-anchor="middle" fill="#52c41a" font-size="7">→ PASS ✅</text>
    <!-- Arrow Green→Refactor -->
    <path d="M 335 110 Q 375 90, 410 120" fill="none" stroke="#a5b4fc" stroke-width="2" marker-end="url(#arrR)"/>
    <!-- Refactor -->
    <circle cx="460" cy="120" r="50" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="2.5"/>
    <text x="460" y="115" text-anchor="middle" fill="#a5b4fc" font-size="14" font-weight="bold">♻️ REFACTOR</text>
    <text x="460" y="132" text-anchor="middle" fill="#9a93b8" font-size="8">Clean up</text>
    <text x="460" y="144" text-anchor="middle" fill="#9a93b8" font-size="8">Stay GREEN</text>
    <text x="460" y="185" text-anchor="middle" fill="#a5b4fc" font-size="7">rename, extract</text>
    <text x="460" y="197" text-anchor="middle" fill="#a5b4fc" font-size="7">→ still PASS ✅</text>
    <!-- Loop arrow -->
    <path d="M 460 70 Q 280 20, 100 70" fill="none" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrR)"/>
    <text x="280" y="35" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">REPEAT</text>
    <!-- Bottom -->
    <rect x="20" y="215" width="520" height="25" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="232" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Beck: "Test drives design. Easy to test = good API."</text>
  </svg>
  <div class="diag-cap">Red (test fail) → Green (code pass) → Refactor (clean) → repeat। Test আগে — design আগে।</div>
</div>

<div class="dialogue">আমানত — যাচাই। কুরআনে আল্লাহ বলেন — খবর যাচাই না করে বিশ্বাস কোরো না (৪৯:৬)। TDD সেই যাচাই — কোড লেখার আগে test, যাচাই আগে। যাচাই ছাড়া কোড = যাচাই ছাড়া খবর। ভুল হতে পারে, কেউ জানবে না।</div>
<div class="dialogue en">Amanah — verification. Allah says — do not believe news without verification (49:6). TDD is that verification — test before code, verify first. Code without tests is news without verification. It could be wrong, nobody would know.</div>

<div class="secret-box">🧪 TDD: Red (test fail) → Green (code pass) → Refactor (clean)। Test আগে — design আগে।</div>
`,
  senior:{
    title:"TDD — Red-Green-Refactor (Beck, 2002)",
    body:`<p><strong>Kent Beck-এর ৩ ধাপ:</strong></p>
<table class="kv-table">
<tr><th>ধাপ</th><th>কী করো</th></tr>
<tr><td class="hl">🔴 Red</td><td>test লেখো — অবশ্যই fail করবে (কোড নেই)</td></tr>
<tr><td class="hl">🟢 Green</td><td>সবচেয়ে কম কোড লেখো — test pass করবে</td></tr>
<tr><td class="hl">♻️ Refactor</td><td>পরিষ্কার করো — test সবুজ রাখো</td></tr>
</table>
<p><strong>Beck-এর উপলব্ধি:</strong> Test শুধু verification নয় — design tool। কোন API test-friendly, সেটাই ভালো API। Hard-to-test API = খারাপ design।</p>
<p><strong>Test pyramid: </strong> Unit tests (বেশি, দ্রুত) → Integration tests (কম) → E2E tests (কম, ধীর)। উল্টো নয়।</p>
<p><strong>Cross-ref:</strong> Book 47 (Testing & QA) পুরো বই test নিয়ে। Book 13 (LLM Security)-এ fuzzing দেখবে — random input test।</p>`
  }
});

// ── DOOR 14: LEGACY CODE — SEAMS ──
doors.push({
  num:14, icon:"⛏️", color:"#818cf8", name:"পুরো কাঠামোর সেলাই",
  subtitle:"Stitching Old Structure", tech:"Working Effectively with Legacy Code (Feathers, 2004) — Seam Identification",
  spirit:"ইসলাহ — mending/restoring, from the Hadith on mercy and gentleness",
  secret:"Seam = এমন জায়গা যেখানে কোড আলাদা করা যায়, test করা যায়। Feathers: legacy code = test ছাড়া কোড। Seam খাও → test দাও → refactor করো।",
  recall:{
    q:"Feathers-এর সংজ্ঞায় legacy code কী? Seam কী?",
    qen:"What is legacy code per Feathers? What is a seam?",
    a:"Legacy code = test ছাড়া কোড। Seam = এমন জায়গা যেখানে behavior বদলানো যায় পুরো কোড না ছুঁয়ে — dependency injection, interface।",
    aen:"Legacy code = code without tests. Seam = a place where you can alter behavior without touching the whole code."
  },
  story:`
<p class="scene-setting">চতুর্দশ দিন। নতুন কারিগর — পুরাতত্ত্ববিদ তারিক। বুরুশ ও সূক্ষ্ম যন্ত্র হাতে। তিনি পুরোনো কাঠামো খোঁড়েন — সাবধানে, ধীরে। তোমার ৫ বছরের পুরোনো কোড — কোনো test নেই, সব hardcoded dependency। তারিক বললেন — এটাই legacy code। কিন্তু ভয়ের কিছু নেই — seam খাও।</p>
<p class="scene-setting en">Day fourteen. A new craftsman — archaeologist Tariq. Brush and fine instruments in hand. He excavates old structures — carefully, slowly. Your 5-year-old code — no tests, all hardcoded dependencies. Tariq said — this is legacy code. No need to fear — find the seams.</p>

<div class="dialogue">Feathers (Working Effectively with Legacy Code, ২০০৪) বলেন — legacy code মানে পুরোনো কোড নয়। Legacy = test ছাড়া কোড। ১ সপ্তাহের কোডও test না থাকলে legacy। Seam হলো জায়গা যেখানে কোড আলাদা করা যায় — test বা পরিবর্তনের জন্য। Dependency injection দিয়ে seam তৈরি করো, তারপর test দাও।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> তারিক বললেন — একটা payment system-এ datetime.now() সরাসরি কল হতো। Test লেখা গেল না — আজকের date-এর উপর নির্ভর। Seam দিলে: inject করো clock object। test-এ mock clock। এখন যেকোনো date-এ test চালানো যায়।</div></div>

<div class="code-block"># task_manager.py — Day 14: Legacy Code Seams (Feathers, 2004)
# Feathers: "Legacy code is simply code without tests."
#           "A seam is a place where you can alter behavior
#           in your program without editing in that place."

from abc import ABC, abstractmethod
from datetime import datetime, timedelta

# ── ❌ BAD: Hardcoded dependency — untestable ──
class TaskManager:
    """Legacy: datetime.now() hardcoded — can't test."""
    def is_overdue(self, task):
        return datetime.now() &gt; task.due_date  # ← can't control

# ── ✅ GOOD: Create a SEAM via dependency injection ──

class Clock(ABC):
    """Abstract clock — seam for testing."""
    @abstractmethod
    def now(self):
        pass

class SystemClock(Clock):
    """Production: real system clock."""
    def now(self):
        return datetime.now()

class FakeClock(Clock):
    """Testing: you control the time."""
    def __init__(self, fixed_time):
        self._time = fixed_time
    def now(self):
        return self._time
    def advance(self, days=0):
        self._time += timedelta(days=days)

class TaskManager:
    def __init__(self, clock=None):
        # SEAM: clock injected, not hardcoded
        self.clock = clock or SystemClock()

    def is_overdue(self, task):
        return self.clock.now() &gt; task.due_date

# ── NOW TESTABLE ──
clock = FakeClock(datetime(2024, 6, 15))
task = Task(due_date=datetime(2024, 6, 14))
manager = TaskManager(clock=clock)
assert manager.is_overdue(task) is True  # ← predictable!</div>

<div class="diagram">
  <div class="diag-title">Seam — Legacy কোডে Test-Point তৈরি</div>
  <svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg">
    <text x="120" y="20" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">❌ Legacy: Hardcoded</text>
    <rect x="30" y="30" width="180" height="40" rx="6" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="120" y="48" text-anchor="middle" fill="#ef4444" font-size="9" font-family="monospace">TaskManager</text>
    <text x="120" y="62" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">is_overdue(task)</text>
    <rect x="60" y="85" width="120" height="30" rx="5" fill="rgba(239,68,68,0.04)" stroke="#ef4444" stroke-width="1"/>
    <text x="120" y="104" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">datetime.now()</text>
    <text x="120" y="135" text-anchor="middle" fill="#ef4444" font-size="8">test অসম্ভব</text>
    <line x1="220" y1="75" x2="270" y2="75" stroke="#a5b4fc" stroke-width="2"/>
    <text x="245" y="68" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">seam</text>
    <text x="420" y="20" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">✅ Seam: Injected</text>
    <rect x="310" y="30" width="220" height="40" rx="6" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="420" y="48" text-anchor="middle" fill="#a5b4fc" font-size="9" font-family="monospace">TaskManager(clock)</text>
    <text x="420" y="62" text-anchor="middle" fill="#9a93b8" font-size="8" font-family="monospace">is_overdue(task)</text>
    <text x="420" y="85" text-anchor="middle" fill="#9a93b8" font-size="7">↓ inject ↓</text>
    <rect x="320" y="95" width="90" height="30" rx="5" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1"/>
    <text x="365" y="114" text-anchor="middle" fill="#52c41a" font-size="8">SystemClock</text>
    <rect x="420" y="95" width="90" height="30" rx="5" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="1"/>
    <text x="465" y="114" text-anchor="middle" fill="#a78bfa" font-size="8">FakeClock</text>
    <text x="365" y="140" text-anchor="middle" fill="#9a93b8" font-size="7">production</text>
    <text x="465" y="140" text-anchor="middle" fill="#9a93b8" font-size="7">test</text>
    <text x="420" y="170" text-anchor="middle" fill="#a5b4fc" font-size="8">test সম্ভব — now নিয়ন্ত্রণে</text>
    <text x="420" y="185" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">Predictable ✅</text>
    <rect x="20" y="205" width="520" height="35" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="222" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Feathers: "Seam = alter behavior without editing in that place."</text>
    <text x="280" y="234" text-anchor="middle" fill="#9a93b8" font-size="8">Inject dependency → create test point → add test → refactor</text>
  </svg>
  <div class="diag-cap">Hardcoded datetime.now() → Clock seam inject করো। test সম্ভব — now তোমার নিয়ন্ত্রণে।</div>
</div>

<div class="dialogue">ইসলাহ — মেরামত। ইসলামি ঐতিয়ত্বে ইসলাহ হলো ভাঙা জিনিস ঠিক করা। Legacy code-ও ইসলাহ করা যায় — seam দিয়ে ধীরে ধীরে।</div>
<div class="dialogue en">Islah — mending, restoring. Legacy code can also be mended — through seams, slowly, carefully.</div>

<div class="secret-box">⛏️ Seam = legacy কোডে test-point। Dependency inject → test দাও → ধীরে refactor। Legacy = test ছাড়া কোড।</div>
`,
  senior:{
    title:"Legacy Code — Seam Techniques (Feathers, 2004)",
    body:`<p><strong>Feathers-এর seam types:</strong></p>
<table class="kv-table">
<tr><th>Seam Type</th><th>কীভাবে</th></tr>
<tr><td class="hl">Dependency Injection</td><td>clock, database বাইরে থেকে দাও</td></tr>
<tr><td class="hl">Interface</td><td>ABC বানাও, implementation inject</td></tr>
<tr><td class="hl">Wrapper</td><td>পুরোনো কোড wrap করো</td></tr>
<tr><td class="hl">Link Seam</td><td>library swap করো</td></tr>
</table>
<p><strong>Characterization test:</strong> legacy কোডে বর্তমান behavior capture করো প্রথমে — সঠিক না ভুল, যা আছে। তারপর refactor।</p>
<p>Cross-ref: Book 47 (Testing & QA) Door 4, Book 14 (LLMOps).</p>`
  }
});

// ── DOOR 15: SICP — ABSTRACTION BARRIERS ──
doors.push({
  num:15, icon:"🔮", color:"#6366f1", name:"দেয়ালের আড়াল",
  subtitle:"Behind the Wall", tech:"SICP Ch.1 (Abelson &amp; Sussman, 1985) — Abstraction Barriers",
  spirit:"জালাল — majesty/the hidden, from Quran 55:27 (your Lord possesses majesty and honor)",
  secret:"Abstraction barrier = স্তর। উপরে কাজ করো, নিচে কীভাবে কাজ করে ভেবো না। Abelson &amp; Sussman: ভালো কোড স্তরে স্তরে — প্রতিটা স্তর নিচের implementation লুকায়।",
  recall:{
    q:"Abstraction barrier কী? কেন দরকার?",
    qen:"What is an abstraction barrier? Why is it needed?",
    a:"স্তর যা implementation লুকায়। list.append() — তুমি ভাবো না list ভেতরে কীভাবে মেমরি ব্যবহার করে। implementation পরিবর্তন করলেও উপরের কোড ভাঙবে না।",
    aen:"A layer that hides implementation. list.append() — you don't think about memory. Change implementation, code above won't break."
  },
  story:`
<p class="scene-setting">পঞ্চদশ দিন। নতুন কারিগর — দার্শনিক ইউনুস। হাতে SICP (Abelson &amp; Sussman, ১৯৮৫) — MIT-এর কিংবদন্তি। তোমার কোড দেখলেন — সব এক স্তরে, কোনো abstraction নেই। Database SQL, business logic, UI — সব মিশে। ইউনুস বললেন — এটা কোড নয়, soup। স্তর দাও।</p>
<p class="scene-setting en">Day fifteen. A new craftsman — philosopher Yunus. SICP (Abelson &amp; Sussman, 1985) in hand — the MIT legend. He examined your code — everything in one layer, no abstraction. SQL, logic, UI mixed. Yunus said — this is not code, this is soup. Add layers.</p>

<div class="dialogue">Abelson &amp; Sussman (SICP, ১৯৮৫) বলেন — abstraction barrier। প্রতিটা স্তর নিচের বিস্তারিত লুকায়। উপরের স্তর শুধু interface দেখে — নিচে কী আছে জানে না। list = উপরে append/pop কল করো। নিচে C-তে memory allocate হয় — তুমি জানো না। এটাই barrier।</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> ইউনুস বললেন — একটা project-এ SQL query সরাসরি UI template-এ ছিল। PostgreSQL → MySQL সরাতে গিয়ে UI-তেও পরিবর্তন! কারণ কোনো barrier নেই। Barrier দিলে: DB স্তর, business স্তর, UI স্তর — আলাদা।</div></div>

<div class="code-block"># task_manager.py — Day 15: Abstraction Barriers (SICP)
# Abelson &amp; Sussman: "We can use the procedure without
#  knowing how it is implemented. The procedure acts as
#  an abstraction barrier."

# ── ❌ BAD: No barriers — everything mixed ──
def create_task_page():
    conn = psycopg2.connect("host=localhost")
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO tasks (title, status) "
        "VALUES (%s, %s) RETURNING id",
        (title, 'pending'))
    task_id = cursor.fetchone()[0]
    conn.commit()
    return f"&lt;h1&gt;Task {task_id} created&lt;/h1&gt;"
# Change DB? Edit THIS. Change UI? Edit THIS. Fragile.

# ── ✅ GOOD: Three abstraction barriers ──

# Barrier 1: REPOSITORY LAYER
class TaskRepository:
    """Database operations. SQL lives here, nowhere else."""
    def save(self, task):
        cursor = self.conn.cursor()
        cursor.execute(
            "INSERT INTO tasks (title) VALUES (%s)",
            (task.title,))
        self.conn.commit()

# Barrier 2: SERVICE LAYER
class TaskService:
    """Business rules. No SQL, no HTML."""
    def create_task(self, title):
        task = Task(title=title)
        self.repo.save(task)
        return task

# Barrier 3: PRESENTATION LAYER
class TaskAPI:
    """HTTP responses. No SQL, no business rules."""
    def handle_create(self, request):
        task = self.service.create_task(
            request.json['title'])
        return {'id': task.id}, 201

# Change database? Only TaskRepository changes.
# Change UI? Only TaskAPI changes.
# Each barrier protects the others. This is SICP.</div>

<div class="diagram">
  <div class="diag-title">Abstraction Barriers — তিন স্তরের দেয়াল</div>
  <svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="20" width="500" height="45" rx="8" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
    <text x="50" y="40" fill="#a5b4fc" font-size="10" font-weight="bold">Presentation Layer (TaskAPI)</text>
    <text x="50" y="56" fill="#9a93b8" font-size="8">handle_create() → JSON — SQL জানে না, business জানে না</text>
    <text x="510" y="40" fill="#a5b4fc" font-size="8" text-anchor="end">HTTP / API</text>
    <rect x="30" y="68" width="500" height="15" fill="rgba(167,139,250,0.12)"/>
    <text x="280" y="79" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="bold">⚡ ABSTRACTION BARRIER</text>
    <rect x="30" y="86" width="500" height="45" rx="8" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="2"/>
    <text x="50" y="106" fill="#52c41a" font-size="10" font-weight="bold">Service Layer (TaskService)</text>
    <text x="50" y="122" fill="#9a93b8" font-size="8">create_task() → business rules — SQL জানে না, HTTP জানে না</text>
    <text x="510" y="106" fill="#52c41a" font-size="8" text-anchor="end">Business Logic</text>
    <rect x="30" y="134" width="500" height="15" fill="rgba(167,139,250,0.12)"/>
    <text x="280" y="145" text-anchor="middle" fill="#a78bfa" font-size="8" font-weight="bold">⚡ ABSTRACTION BARRIER</text>
    <rect x="30" y="152" width="500" height="45" rx="8" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="2"/>
    <text x="50" y="172" fill="#fbbf24" font-size="10" font-weight="bold">Repository Layer (TaskRepository)</text>
    <text x="50" y="188" fill="#9a93b8" font-size="8">save() → SQL — business জানে না, API জানে না</text>
    <text x="510" y="172" fill="#fbbf24" font-size="8" text-anchor="end">Database / SQL</text>
    <rect x="30" y="210" width="500" height="40" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="228" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Each barrier protects the others</text>
    <text x="280" y="242" text-anchor="middle" fill="#9a93b8" font-size="8">Change DB? Only repository। Change UI? Only API।</text>
  </svg>
  <div class="diag-cap">৩ স্তর: API → Service → Repository। প্রতিটা barrier নিচের implementation লুকায়।</div>
</div>

<div class="dialogue">জালাল — মহিমা, গোপন শক্তি। কুরআন: তোমার রব মহিমা ও সম্মানের অধিকারী (৫৫:২৭)। আল্লাহর কাজ আমরা দেখি না — শুধু ফল দেখি। Abstraction barrier সেই রকম — নিচের কাজ লুকায়, শুধু ফল দেখায়।</div>
<div class="dialogue en">Jalal — majesty, hidden power. Quran: your Lord possesses majesty (55:27). We do not see Allah's work — only results. An abstraction barrier hides work below, shows only the result.</div>

<div class="secret-box">🔮 Abstraction barrier = স্তর। API → Service → Repository। প্রতিটা স্তর নিচের বিস্তারিত লুকায়।</div>
`,
  senior:{
    title:"SICP — Abstraction Barriers (Abelson &amp; Sussman, 1985)",
    body:`<p><strong>SICP Ch.1 মূল ধারণা:</strong></p>
<table class="kv-table">
<tr><th>ধারণা</th><th>প্রয়োগ</th></tr>
<tr><td class="hl">Abstraction Barrier</td><td>স্তর — interface দেখায়, implementation লুকায়</td></tr>
<tr><td class="hl">Data Abstraction</td><td>data ও representation আলাদা</td></tr>
<tr><td class="hl">Higher-Order Functions</td><td>map, filter, reduce</td></tr>
<tr><td class="hl">Metalinguistic</td><td>নিজের ভাষা বানাও — DSL</td></tr>
</table>
<p>Cross-ref: Book 45 (Compilers) abstraction। Book 8 (LLM Anatomy) Door 3 layer abstraction। Book 30 (Math) Door 4 function composition।</p>`
  }
});
