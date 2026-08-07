// ════════════════════════════════════════════════════════════
// THE CODE CRAFTSMAN'S CODE — DOORS 16-17
// 16. Mythical Man-Month: Conceptual Integrity
// 17. Synthesis: The Complete Craftsman
// ════════════════════════════════════════════════════════════

// ── DOOR 16: MYTHICAL MAN-MONTH — CONCEPTUAL INTEGRITY ──
doors.push({
  num:16, icon:"👑", color:"#6366f1", name:"এক দৃষ্টির ঐক্য",
  subtitle:"Unity of Vision", tech:"The Mythical Man-Month (Brooks, 1975/1995) — Conceptual Integrity",
  spirit:"ওয়াহদানিয়্যাহ — unity, from Quran 21:92 (Indeed this, your religion, is one religion)",
  secret:"Conceptual integrity = এক দৃষ্টি। Brooks: একজন architect বা ছোট দল — পুরো system-এর design decision এক দৃষ্টিতে। ৫ জনের আলাদা স্টাইল নয়। ঐক্যই সৌন্দর্য।",
  recall:{
    q:"Brooks-এর 'conceptual integrity' কী? কেন দরকার?",
    qen:"What is Brooks' 'conceptual integrity'? Why is it needed?",
    a:"পুরো system-এ এক ধারণাগত ঐক্য। প্রতিটা design decision এক দৃষ্টিতে — একজন architect বা ছোট দল। Brooks: ঐক্যই system-এর সবচেয়ে গুরুত্বপূর্ণ বিষয়। ৫ জনের আলাদা স্টাইল = বিশৃঙ্খলা।",
    aen:"One conceptual unity across the entire system. Every design decision from one vision — one architect or small team. Brooks: unity is the most important quality. 5 different styles = chaos."
  },
  story:`
<p class="scene-setting">ষোড়শ দিন। উস্তাদ রাহিলা ফিরে এলেন — প্রথম দরজার কারিগর। এবার তার হাতে ফ্রেডেরিক ব্রুকসের The Mythical Man-Month (১৯৭৫) — সফটওয়্যার ইঞ্জিনিয়ারিংয়ের সবচেয়ে প্রভাবশালী বই। তিনি তোমার পুরো কোডবেস দেখলেন — ১৭ দিনের কাজ। এক সময় ছোট ছিল, এখন বড়। কিন্তু এক দৃষ্টি আছে — প্রতিটা দরজার কারিগর তাদের জ্ঞান যোগ করেছেন, কিন্তু পুরো কাঠামো ঐক্যপূর্ণ। রাহিলা বললেন — এটাই conceptual integrity।</p>
<p class="scene-setting en">Day sixteen. Master Rahila returned — the craftsman of the first door. This time with Frederick Brooks's The Mythical Man-Month (1975) — the most influential book in software engineering. She examined your entire codebase — 17 days of work. It started small, now it is large. But it has one vision — each door's craftsman added their knowledge, but the whole structure is unified. Rahila said — this is conceptual integrity.</p>

<div class="dialogue">Brooks (The Mythical Man-Month, ১৯৭৫) বলেন — সবচেয়ে গুরুত্বপূর্ণ বিষয় conceptual integrity। পুরো system-এ এক ধারণাগত ঐক্য। Brooks-এর বিখ্যাত উক্তি: "Adding human resources to a late software project makes it later" — মানুষ যোগ করলে দেরি আরও বাড়ে, কারণ communication overhead বাড়ে। কিন্তু conceptual integrity থাকলে — মানুষ যোগ করলেও ঐক্য থাকে।</div>
<div class="dialogue en">Brooks (The Mythical Man-Month, 1975) says — the most important consideration is conceptual integrity. One conceptual unity across the whole system. Brooks's famous quote: "Adding human resources to a late software project makes it later" — adding people increases delay, because communication overhead grows. But with conceptual integrity — even when adding people, unity remains.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> রাহিলা বললেন — OS/360 project (Brooks নিজে lead করেছেন)। ৫০০০ মানুষ, কিন্তু কোনো architect ছিলেন না যিনি এক দৃষ্টি ধরে রাখবেন। ফলাফল: system-এ ৫০০০ জনের আলাদা স্টাইল — API inconsistent, feature overlap, বিশৃঙ্খলা। Brooks-এর উপলব্ধি: মানুষ বেশি নয় — ঐক্য দরকার। Brooks-এর Law: "Nine women can't make a baby in one month।"</div></div>

<div class="code-block"># task_manager.py — Day 16: Conceptual Integrity (Brooks, 1975)
# Brooks: "The conceptual integrity of a system is the most
#  important factor in its success."
# "Nine women can't make a baby in one month."

# ── ❌ BAD: No integrity — 5 developers, 5 styles ──
# Developer A: camelCase, returns dicts
def createTask(taskData):
    return {"id": 1, "task": taskData}

# Developer B: snake_case, returns tuples
def create_task(task_data):
    return (1, task_data)

# Developer C: uses exceptions for control flow
def new_task(data):
    try:
        save_to_db(data)
    except:
        return None  # silent failure

# Developer D: uses status codes as ints
task.status = 2  # what does 2 mean? completed? cancelled?

# Developer E: uses objects for everything
class TaskCreator:
    def execute(self, context):
        ...

# 5 styles = chaos. Nobody knows which convention to follow.
# Adding a 6th developer makes it worse, not better.

# ── ✅ GOOD: Conceptual integrity — ONE vision ──
# Style guide: snake_case, return dataclass, raise on error

class TaskStatus(Enum):
    PENDING = "pending"
    DONE = "done"
    CANCELLED = "cancelled"

@dataclass
class Result:
    """Standard return type — ALL functions return Result."""
    data: object = None
    error: str = None

    @property
    def is_success(self):
        return self.error is None

# EVERY function follows the same pattern:
def create_task(title: str) -&gt; Result:
    """ALL functions: snake_case, return Result, type hints."""
    if not title.strip():
        return Result(error="Title required")
    task = Task(title=title, status=TaskStatus.PENDING)
    repo.save(task)
    return Result(data=task)

def complete_task(task_id: int) -&gt; Result:
    """Same pattern — consistency = integrity."""
    task = repo.find(task_id)
    if not task:
        return Result(error="Not found")
    task.status = TaskStatus.DONE
    repo.save(task)
    return Result(data=task)

# Now 5 developers can work together:
# - All functions look the same (familiar = readable)
# - All return Result (predictable = safe)
# - All use Enum (type-safe = no magic numbers)
# - All have type hints (self-documenting)
# This is conceptual integrity. One vision.</div>

<div class="diagram">
  <div class="diag-title">Conceptual Integrity — ৫ স্টাইল vs ১ দৃষ্টি</div>
  <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
    <!-- Chaos -->
    <text x="120" y="20" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">❌ No Integrity: 5 styles</text>
    <rect x="30" y="30" width="180" height="30" rx="5" fill="rgba(239,68,68,0.06)" stroke="#ef4444" stroke-width="1"/>
    <text x="120" y="49" text-anchor="middle" fill="#ef4444" font-size="8" font-family="monospace">createTask() → dict</text>
    <rect x="30" y="65" width="180" height="30" rx="5" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1"/>
    <text x="120" y="84" text-anchor="middle" fill="#fbbf24" font-size="8" font-family="monospace">create_task() → tuple</text>
    <rect x="30" y="100" width="180" height="30" rx="5" fill="rgba(167,139,250,0.06)" stroke="#a78bfa" stroke-width="1"/>
    <text x="120" y="119" text-anchor="middle" fill="#a78bfa" font-size="8" font-family="monospace">new_task() → None/error</text>
    <rect x="30" y="135" width="180" height="30" rx="5" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1"/>
    <text x="120" y="154" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">TaskCreator.execute()</text>
    <text x="120" y="185" text-anchor="middle" fill="#ef4444" font-size="8">৫ জন, ৫ স্টাইল = বিশৃঙ্খলা</text>
    <!-- Arrow -->
    <line x1="220" y1="95" x2="280" y2="95" stroke="#a5b4fc" stroke-width="2"/>
    <text x="250" y="88" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Brooks</text>
    <!-- Integrity -->
    <text x="420" y="20" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">✅ Integrity: 1 vision</text>
    <rect x="310" y="30" width="220" height="30" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="420" y="49" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">create_task() → Result</text>
    <rect x="310" y="65" width="220" height="30" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="420" y="84" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">complete_task() → Result</text>
    <rect x="310" y="100" width="220" height="30" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="420" y="119" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">delete_task() → Result</text>
    <rect x="310" y="135" width="220" height="30" rx="5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="420" y="154" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">ALL: snake_case, Result, Enum</text>
    <text x="420" y="185" text-anchor="middle" fill="#a5b4fc" font-size="8">৫ জন, ১ স্টাইল = ঐক্য</text>
    <text x="420" y="200" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">Predictable ✅</text>
    <!-- Brooks' Law -->
    <rect x="20" y="215" width="680" height="35" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="360" y="232" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Brooks' Law: "Adding people to a late project makes it later"</text>
    <text x="360" y="244" text-anchor="middle" fill="#9a93b8" font-size="8">Nine women can't make a baby in one month</text>
  </svg>
  <div class="diag-cap">৫ স্টাইল = বিশৃঙ্খলা। ১ স্টাইল = ঐক্য। Conceptual integrity — সবচেয়ে গুরুত্বপূর্ণ।</div>
</div>

<div class="dialogue">ওয়াহদানিয়্যাহ — একত্ববোধ, ঐক্য। কুরআনে আল্লাহ বলেন — নিশ্চয় এই তোমাদের ধর্ম এক ধর্ম (২১:৯২)। ঐক্য আল্লাহর নিয়ামত। Code-এর ঐক্যও নিয়ামত — ৫ জনের আলাদা স্টাইল নয়, এক দৃষ্টি। Brooks একে বলেন conceptual integrity — সিস্টেমের সবচেয়ে গুরুত্বপূর্ণ গুণ।</div>
<div class="dialogue en">Wahdaniyyah — unity, oneness. Allah says — indeed this, your religion, is one religion (21:92). Unity is Allah's gift. Code's unity is also a gift — not 5 different styles, but one vision. Brooks calls this conceptual integrity — the most important quality of a system.</div>

<div class="secret-box">👑 Conceptual integrity = এক দৃষ্টি। ৫ জন, ১ স্টাইল। Brooks: ঐক্যই সিস্টেমের সবচেয়ে গুরুত্বপূর্ণ গুণ।</div>
`,
  senior:{
    title:"Mythical Man-Month — Brooks (1975/1995)",
    body:`<p><strong>Frederick Brooks-এর মূল নীতি:</strong></p>
<table class="kv-table">
<tr><th>নীতি</th><th>অর্থ</th></tr>
<tr><td class="hl">Conceptual Integrity</td><td>পুরো system-এ এক দৃষ্টি — সবচেয়ে গুরুত্বপূর্ণ</td></tr>
<tr><td class="hl">Brooks' Law</td><td>লোক যোগ করলে দেরি বাড়ে — communication overhead</td></tr>
<tr><td class="hl">Surgical Team</td><td>১ জন chief surgeon + support, সবাই কোড লেখে না</td></tr>
<tr><td class="hl">Second-System Effect</td><td>২য় system over-engineered হয় — সাবধান</td></tr>
</table>
<p><strong>The Surgical Team: </strong> Brooks proposes: 1 chief programmer (surgeon) who writes ALL critical code, supported by copilot, toolsmith, tester, editor. NOT 5 equal programmers. This preserves conceptual integrity.</p>
<p><strong>Cross-ref:</strong> Book 40 (Software Engineering) Door 1-এ team structures দেখবে। Book 3 (Grand Muhandis) পুরো বই engineering mindset নিয়ে। Book 23 (Irreplaceable Craftsman)-এ career growth দেখবে।</p>`
  }
});

// ── DOOR 20: SYNTHESIS — THE COMPLETE CRAFTSMAN ──
doors.push({
  num:20, icon:"💎", color:"#a5b4fc", name:"সম্পূর্ণ কারিগর",
  subtitle:"The Complete Craftsman", tech:"Synthesis — All 10 Books United",
  spirit:"ইহসান — excellence, from the Hadith: 'To worship Allah as if you see Him'",
  secret:"১৭ দরজা, ১০টি বই, ১টি প্রজেক্ট। প্রতিটা দরজায় এক গুণ যোগ হয়েছে। এখন পুরো কোড এক দৃষ্টিতে — সত্য নাম (Clean Code), ছোট ফাংশন, DRY (Pragmatic), রিফ্যাক্টরড (Fowler), Strategy+Observer (GoF), defensive (Code Complete), ubiquitous (DDD), tested (TDD), seam (Legacy), layered (SICP), ঐক্যপূর্ণ (Brooks)। এটাই কারিগর।",
  recall:{
    q:"একজন কারিগরের কোডে কোন ১৩টি গুণ থাকে?",
    qen:"What 13 qualities are in a craftsman's code?",
    a:"১) সত্য নাম, ২) ছোট ফাংশন, ৩) পরিচ্ছন্ন কমেন্ট, ৪) DRY, ৫) রিফ্যাক্টরড, ৬) pattern-driven, ৭) defensive, ৮) domain-driven, ৯) tested, ১০) ভালো error handling, ১১) decorator, ১২) higher-order functions, ১৩) layered + ঐক্যপূর্ণ।",
    aen:"1) Truthful names, 2) Small functions, 3) Clean comments, 4) DRY, 5) Refactored, 6) Pattern-driven, 7) Defensive, 8) Domain-driven, 9) Tested, 10) Error handling, 11) Decorators, 12) Higher-order functions, 13) Layered + unified."
  },
  story:`
<p class="scene-setting">বিংশ দিন। শেষ দিন। উস্তাদ রাহিলা আবার ফিরে এলেন — এবার একা নয়, উনিশ জন কারিগর সঙ্গে নিয়ে। ইমরান (নাম), সালমান (DRY), নাফিসা (রিফ্যাক্টর), রিয়াদ (প্যাটার্ন), আদম (defensive), সাকিনা (DDD), বেলাল (TDD), তারিক (legacy), ইউনুস (SICP) — এবং নতুন তিনজন: জাকির (error handling), নাদিম (decorator), কামরান (higher-order)। সবাই এক কারখানায় দাঁড়িয়ে। রাহিলা বললেন — এখন দেখো। বিশটি দরজায় এক একটা গুণ যোগ হয়েছে। এখন পুরো কোড এক দৃষ্টিতে। এটাই সম্পূর্ণ কারিগর।</p>
<p class="scene-setting en">Day twenty. The final day. Master Rahila returned again — this time not alone, bringing all nineteen craftsmen. Imran (naming), Salman (DRY), Nafisa (refactoring), Riyad (patterns), Adam (defensive), Sakina (DDD), Belal (TDD), Tariq (legacy), Yunus (SICP) — and three new ones: Zakir (error handling), Nadim (decorator), Kamran (higher-order). All standing in one workshop. Rahila said — now look. Twenty doors, each adding one quality. Now the entire code is one vision. This is the complete craftsman.</p>

<div class="dialogue">রাহিলা বললেন — তুমি এখন একজন কোড কারিগর। তোমার কোডে আছে: সিদক (সত্য নাম), কিসম (ছোট ফাংশন), তাওহীদ (DRY), তাদবির (রিফ্যাক্টর), হিকমাহ (প্যাটার্ন), আমানত (defensive + tested), বায়ান (domain language), ইসলাহ (legacy seam), জালাল (abstraction), ওয়াহদানিয়্যাহ (conceptual integrity)। দশটি গুণ, এক কোড। এটাই ইহসান।</div>
<div class="dialogue en">Rahila said — you are now a code craftsman. Your code has: sidq (truthful names), qism (small functions), tawhid (DRY), tadbir (refactoring), hikmah (patterns), amanah (defensive + tested), bayan (domain language), islah (legacy seam), jalal (abstraction), wahdaniyyah (conceptual integrity). Ten qualities, one code. This is ihsan.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>শেষ কথা:</strong> কোড কারিগর হওয়া যায় না একদিনে। এটা জীবনব্যাপী যাত্রা। প্রতিটা commit-এ ভাবো — নাম সত্য? ফাংশন ছোট? ডুপ্লিকেশন আছে? টেস্ট আছে? এই দশটি প্রশ্ন কোড কারিগর বানায়। Uncle Bob বলেন: "Clean code always looks like it was written by someone who cares।"</div></div>

<div class="code-block"># ═══════════════════════════════════════════════════════════
# task_manager.py — Day 17: THE COMPLETE CRAFTSMAN
# All 10 books distilled into one Python codebase
# ═══════════════════════════════════════════════════════════

from abc import ABC, abstractmethod
from dataclasses import dataclass
from datetime import datetime, timedelta
from enum import Enum

# ═══ DDD (Evans): Ubiquitous Language ═══
class TaskStatus(Enum):
    """Business says: 'Pending, In Progress, Done, Cancelled'."""
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    DONE = "done"
    CANCELLED = "cancelled"

@dataclass
class Task:
    """Business says: 'A Task has title, assignee, due date'."""
    id: int
    title: str
    assignee_id: int
    due_date: datetime
    status: TaskStatus = TaskStatus.PENDING

# ═══ SICP (Abelson): Abstraction Barrier — Repository ═══
class TaskRepository(ABC):
    """Data access. Implementation hidden behind barrier."""
    @abstractmethod
    def save(self, task: Task) -&gt; Task: ...
    @abstractmethod
    def find_by_id(self, task_id: int) -&gt; Task: ...
    @abstractmethod
    def find_pending(self) -&gt; list[Task]: ...

class InMemoryTaskRepository(TaskRepository):
    """Simple implementation — swap for SQL/Mongo without breaking."""
    def __init__(self):
        self._tasks: dict[int, Task] = {}
        self._next_id = 1

    def save(self, task: Task) -&gt; Task:
        if task.id == 0:
            task.id = self._next_id
            self._next_id += 1
        self._tasks[task.id] = task
        return task

    def find_by_id(self, task_id: int) -&gt; Task:
        return self._tasks.get(task_id)

    def find_pending(self) -&gt; list[Task]:
        return [t for t in self._tasks.values()
                if t.status == TaskStatus.PENDING]

# ═══ GoF (Gamma): Observer Pattern ═══
class TaskObserver(ABC):
    """Loose coupling — Task doesn't know who listens."""
    @abstractmethod
    def on_task_completed(self, task: Task): ...

class EmailObserver(TaskObserver):
    def on_task_completed(self, task):
        print(f"  Email: Task '{task.title}' done")

class AnalyticsObserver(TaskObserver):
    def on_task_completed(self, task):
        print(f"  Analytics: tracked completion")

# ═══ Legacy (Feathers): Seam — Clock ═══
class Clock(ABC):
    @abstractmethod
    def now(self) -&gt; datetime: ...

class SystemClock(Clock):
    def now(self): return datetime.now()

# ═══ Clean Code + Pragmatic + Brooks: The Service ═══
class TaskService:
    """One vision: all methods follow same pattern.
    Clean names, small functions, DRY, defensive."""
    def __init__(self, repo: TaskRepository,
                 clock: Clock = None):
        self._repo = repo
        self._clock = clock or SystemClock()
        self._observers: list[TaskObserver] = []

    def add_observer(self, observer: TaskObserver):
        """Observer pattern — loose coupling."""
        self._observers.append(observer)

    def create_task(self, title: str,
                    assignee_id: int,
                    due_date: datetime) -&gt; Task:
        """Clean Code: small, defensive, one job."""
        # Defensive (McConnell): validate input
        if not title.strip():
            raise ValueError("Title required")
        if len(title) &gt; 200:
            raise ValueError("Title too long")

        task = Task(
            id=0,
            title=title.strip(),
            assignee_id=assignee_id,
            due_date=due_date
        )
        return self._repo.save(task)

    def complete_task(self, task_id: int) -&gt; Task:
        """Guard clauses (Clean Code) + Observer (GoF)."""
        task = self._repo.find_by_id(task_id)
        if task is None:           # Guard clause
            raise ValueError("Task not found")
        if task.status == TaskStatus.DONE:
            raise ValueError("Already done")

        task.status = TaskStatus.DONE
        self._repo.save(task)

        # Observer: notify all, Task knows nobody
        for observer in self._observers:
            observer.on_task_completed(task)

        return task

    def overdue_tasks(self) -&gt; list[Task]:
        """Feathers seam: clock injected, testable."""
        now = self._clock.now()
        pending = self._repo.find_pending()
        return [t for t in pending if t.due_date &lt; now]

# ═══ TDD (Beck): Tests prove it works ═══
def test_complete_lifecycle():
    """Red-Green-Refactor proof."""
    repo = InMemoryTaskRepository()
    service = TaskService(repo)

    # Create
    task = service.create_task(
        "Buy groceries", 1, datetime(2024, 12, 31))
    assert task.status == TaskStatus.PENDING
    assert task.id &gt; 0

    # Complete
    done = service.complete_task(task.id)
    assert done.status == TaskStatus.DONE

    # Double-complete fails (defensive)
    try:
        service.complete_task(task.id)
        assert False, "Should have raised"
    except ValueError:
        pass  # Expected

    print("All tests passed!")

# ═══ RUN IT ═══
if __name__ == "__main__":
    test_complete_lifecycle()

    # Demo with observers
    repo = InMemoryTaskRepository()
    service = TaskService(repo)
    service.add_observer(EmailObserver())
    service.add_observer(AnalyticsObserver())

    task = service.create_task(
        "Write blog post", 42, datetime(2024, 12, 31))
    print(f"Created: {task.title} (id={task.id})")

    service.complete_task(task.id)
    # Output:
    #   Email: Task 'Write blog post' done
    #   Analytics: tracked completion

# ═══ WHAT THIS CODE HAS (10 books): ═══
# 1. Clean Code: truthful names, small functions
# 2. Pragmatic: DRY, orthogonality, ETC
# 3. Refactoring: extracted methods, no smells
# 4. Design Patterns: Observer, Repository, Factory
# 5. Code Complete: defensive, guard clauses
# 6. DDD: ubiquitous language (Task, TaskStatus)
# 7. TDD: tests prove correctness
# 8. Legacy: Clock seam for testability
# 9. SICP: abstraction barriers (3 layers)
# 10. Mythical Man-Month: conceptual integrity (one style)</div>

<div class="diagram">
  <div class="diag-title">The Complete Craftsman — ১০টি বই, ১টি কোড</div>
  <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
    <!-- Center diamond -->
    <polygon points="280,40 340,100 280,160 220,100" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2.5"/>
    <text x="360" y="95" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">💎 Craftsman</text>
    <text x="360" y="110" text-anchor="middle" fill="#a5b4fc" font-size="9">Code</text>
    <text x="360" y="125" text-anchor="middle" fill="#9a93b8" font-size="7">10 books</text>
    <text x="360" y="138" text-anchor="middle" fill="#9a93b8" font-size="7">united</text>
    <!-- 10 books radiating -->
    <!-- Book 1: Clean Code -->
    <line x1="250" y1="55" x2="150" y2="20" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
    <rect x="80" y="10" width="120" height="22" rx="4" fill="rgba(99,102,241,0.06)" stroke="#6366f1" stroke-width="1"/>
    <text x="140" y="25" text-anchor="middle" fill="#a5b4fc" font-size="7" font-weight="bold">Clean Code — Names</text>
    <!-- Book 2: Pragmatic -->
    <line x1="310" y1="55" x2="410" y2="20" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
    <rect x="360" y="10" width="120" height="22" rx="4" fill="rgba(99,102,241,0.06)" stroke="#6366f1" stroke-width="1"/>
    <text x="420" y="25" text-anchor="middle" fill="#a5b4fc" font-size="7" font-weight="bold">Pragmatic — DRY</text>
    <!-- Book 3: Refactoring -->
    <line x1="330" y1="100" x2="450" y2="60" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
    <rect x="430" y="48" width="110" height="22" rx="4" fill="rgba(99,102,241,0.06)" stroke="#6366f1" stroke-width="1"/>
    <text x="485" y="63" text-anchor="middle" fill="#a5b4fc" font-size="7" font-weight="bold">Refactoring</text>
    <!-- Book 4: GoF -->
    <line x1="330" y1="120" x2="450" y2="130" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
    <rect x="430" y="118" width="110" height="22" rx="4" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1"/>
    <text x="485" y="133" text-anchor="middle" fill="#52c41a" font-size="7" font-weight="bold">GoF Patterns</text>
    <!-- Book 5: Code Complete -->
    <line x1="310" y1="145" x2="410" y2="175" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
    <rect x="370" y="163" width="110" height="22" rx="4" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1"/>
    <text x="425" y="178" text-anchor="middle" fill="#fbbf24" font-size="7" font-weight="bold">Code Complete</text>
    <!-- Book 6: DDD -->
    <line x1="280" y1="160" x2="280" y2="200" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
    <rect x="225" y="200" width="110" height="22" rx="4" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1"/>
    <text x="360" y="215" text-anchor="middle" fill="#52c41a" font-size="7" font-weight="bold">DDD — Language</text>
    <!-- Book 7: TDD -->
    <line x1="250" y1="145" x2="150" y2="175" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
    <rect x="80" y="163" width="110" height="22" rx="4" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1"/>
    <text x="135" y="178" text-anchor="middle" fill="#52c41a" font-size="7" font-weight="bold">TDD — Tests</text>
    <!-- Book 8: Legacy -->
    <line x1="230" y1="120" x2="110" y2="130" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
    <rect x="20" y="118" width="110" height="22" rx="4" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1"/>
    <text x="75" y="133" text-anchor="middle" fill="#fbbf24" font-size="7" font-weight="bold">Legacy — Seams</text>
    <!-- Book 9: SICP -->
    <line x1="230" y1="100" x2="110" y2="60" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
    <rect x="20" y="48" width="110" height="22" rx="4" fill="rgba(167,139,250,0.06)" stroke="#a78bfa" stroke-width="1"/>
    <text x="75" y="63" text-anchor="middle" fill="#a78bfa" font-size="7" font-weight="bold">SICP — Layers</text>
    <!-- Book 10: Brooks -->
    <line x1="280" y1="40" x2="280" y2="10" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
    <rect x="225" y="-5" width="110" height="22" rx="4" fill="rgba(99,102,241,0.06)" stroke="#6366f1" stroke-width="1"/>
    <text x="360" y="10" text-anchor="middle" fill="#a5b4fc" font-size="7" font-weight="bold">Brooks — Integrity</text>
    <!-- Qualities list -->
    <rect x="20" y="240" width="680" height="65" rx="8" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="360" y="258" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">১০টি গুণ (10 Qualities of a Craftsman's Code):</text>
    <text x="35" y="275" fill="#9a93b8" font-size="7">সিদক (truthful names) · কিসম (small functions) · তাওহীদ (DRY) · তাদবির (refactored)</text>
    <text x="35" y="288" fill="#9a93b8" font-size="7">হিকমাহ (patterns) · আমানত (defensive+tested) · বায়ান (domain language)</text>
    <text x="35" y="301" fill="#9a93b8" font-size="7">ইসলাহ (seams) · জালাল (abstraction) · ওয়াহদানিয়্যাহ (conceptual integrity)</text>
  </svg>
  <div class="diag-cap">১০টি বই, ১০টি গুণ, ১টি কোড। এটাই সম্পূর্ণ কারিগর। ইহসান — যেন আল্লাহ দেখছেন তেমন কোড লেখো।</div>
</div>

<div class="dialogue">ইহসান — উৎকর্ষ, সৌন্দর্য। হাদিসে এসেছে — ইহসান হলো আল্লাহকে দেখছো এমনভাবে ইবাদত করা। কোডে ইহসান হলো — আল্লাহ দেখছেন এমনভাবে কোড লেখা। প্রতিটা নাম সত্য, প্রতিটা ফাংশন ছোট, প্রতিটা test পাস। কারিগর বলেন — এটাই সৌন্দর্য।</div>
<div class="dialogue en">Ihsan — excellence, beauty. Hadith: ihsan is to worship Allah as if you see Him. Ihsan in code is — to code as if Allah is watching. Every name truthful, every function small, every test passing. The craftsman says — this is beauty.</div>

<div class="secret-box">💎 ১০টি বই, ১০টি গুণ, ১টি কোড। কারিগর = সিদক + তাওহীদ + হিকমাহ + আমানত + ইহসান। জীবনব্যাপী যাত্রা।</div>
`,
  senior:{
    title:"The Complete Craftsman — 10 Books Synthesized",
    body:`<p><strong>১৭ দরজায় তুমি যা শিখেছো:</strong></p>
<table class="kv-table">
<tr><th>দরজা</th><th>বই</th><th>গুণ</th></tr>
<tr><td class="hl">1-3</td><td>Clean Code</td><td>সত্য নাম, ছোট ফাংশন, পরিচ্ছন্ন কমেন্ট</td></tr>
<tr><td class="hl">4-5</td><td>Pragmatic Programmer</td><td>DRY, orthogonality, tracer bullets</td></tr>
<tr><td class="hl">6-7</td><td>Refactoring</td><td>Smell চেনা, extract করা</td></tr>
<tr><td class="hl">8-9</td><td>Design Patterns</td><td>Strategy, Observer, Factory</td></tr>
<tr><td class="hl">10-11</td><td>Code Complete</td><td>Defensive, control flow সরল</td></tr>
<tr><td class="hl">12</td><td>Domain-Driven Design</td><td>Ubiquitous language</td></tr>
<tr><td class="hl">13</td><td>TDD</td><td>Red-Green-Refactor</td></tr>
<tr><td class="hl">14</td><td>Legacy Code</td><td>Seam identification</td></tr>
<tr><td class="hl">15</td><td>SICP</td><td>Abstraction barriers</td></tr>
<tr><td class="hl">16</td><td>Mythical Man-Month</td><td>Conceptual integrity</td></tr>
<tr><td class="hl">17</td><td>Clean Code</td><td>Error handling done right</td></tr>
<tr><td class="hl">18</td><td>Design Patterns</td><td>Decorator pattern</td></tr>
<tr><td class="hl">19</td><td>SICP</td><td>Higher-order functions</td></tr>
<tr><td class="hl">20</td><td>Synthesis</td><td>All books united</td></tr>
<tr><td class="hl">21</td><td>Martin (SOLID)</td><td>S·O·L·I·D — 5 pillars</td></tr>
</table>
<p><strong>পরবর্তী যাত্রা: </strong> এই গুণগুলো প্রতিদিন প্রয়োগ করো। প্রতিটা commit-এ দশটি প্রশ্ন করো। Clean code always looks like it was written by someone who cares। তুমি এখন সেই কারিগর।</p>
<div class="callout warn"><span class="co-icon">⚖️</span><div><strong>কখন নিয়ম ভাঙবে:</strong> Clean Code বলে ছোট ফাংশন — কিন্তু একটা সরল algorithm ২০ লাইনে চলে, ভাঙলে ৫টা এক-লাইন ফাংশন = ঝামেলা। SOLID বলে abstraction — কিন্তু ৫০ লাইনের script-এ SOLID = over-engineering। TDD বলে test আগে — কিন্তু exploratory prototype-এ test পরে। <strong>নিয়ম:</strong> নিয়ম শেখো, তারপর কখন ভাঙবে শেখো। ভাঙা = অজ্ঞতা নয়, প্রজ্ঞা। Uncle Bob বলেন: "The rules are the training wheels. Once you can ride, you'll know when to remove them।"</div></div>
<p><strong>Cross-ref: </strong> Book 40 (Software Engineering) পুরো বই। Book 47 (Testing & QA)। Book 23 (Irreplaceable Craftsman)। Book 3 (Grand Muhandis)। পুরো Knowledge Courtyard তোমার সহায়।</p>`
  }
});
