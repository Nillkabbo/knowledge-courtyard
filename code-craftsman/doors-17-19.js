// ════════════════════════════════════════════════════════════
// THE CODE CRAFTSMAN'S CODE — DOORS 17-19
// 17. Clean Code: Error Handling    18. Design Patterns: Decorator
// 19. SICP: Higher-Order Functions  21. SOLID Principles
// ════════════════════════════════════════════════════════════

// ── DOOR 17: CLEAN CODE — ERROR HANDLING ──
doors.push({
  num:17, icon:"🚨", color:"#6366f1", name:"ভুলের সুন্দর মোকাবিলা",
  subtitle:"Graceful Handling of Errors", tech:"Clean Code Ch.7 (Martin, 2008) — Error Handling",
  spirit:"সাবর — patience/perseverance, from Quran 2:153 (Allah is with the patient)",
  secret:"Error handling আলাদা নয় — এটা main logic-এর অংশ। Exceptions দিয়ে flow control কোরো না। Catch করো যেখানে handle করতে পারবে। Martin: try block ছোট রাখো — শুধু যে লাইনে exception হতে পারে।",
  recall:{
    q:"Clean Code-এর মতে error handling-এর ৩টি নিয়ম কী?",
    qen:"What are 3 rules for error handling according to Clean Code?",
    a:"১) Exception দিয়ে flow control কোরো না — শুধু অস্বাভাবিক অবস্থার জন্য, ২) try block ছোট রাখো — শুধু risky লাইন, ৩) কোথায় catch করবে ভেবে রাখো — যেখানে প্রকৃতপক্ষে handle করতে পারবে।",
    aen:"1) Don't use exceptions for flow control — only for truly exceptional cases, 2) Keep try blocks small — only the risky line, 3) Know where to catch — where you can actually handle it."
  },
  story:`
<p class="scene-setting">সপ্তদশ দিন। নতুন কারিগর — পাহারাদার জাকির। তার হাতে একটা ঢাল ও একটা কুঠার। ঢাল = exception handler, কুঠার = error। তিনি তোমার কোড দেখলেন — সবকিছু একটা বিশাল try-except-এ ঢাকা। জাকির মাথা নাড়লেন। তিনি বললেন — এটা ঢাল নয়। এটা কালো কাপড়। সব ঢেকে রেখেছে — সত্য দেখা যায় না।</p>
<p class="scene-setting en">Day seventeen. A new craftsman — guard Zakir. A shield and an axe in his hands. Shield = exception handler, axe = error. He examined your code — everything wrapped in one massive try-except. Zakir shook his head. He said — this is not a shield. This is a black cloth. It covers everything — the truth cannot be seen.</p>

<div class="dialogue">Martin (Clean Code, ২০০৮, Ch.7) বলেন — error handling হলো আলাদা বিষয় নয়। এটা main logic। কিন্তু অনেকে ভাবে — exception হলো দ্বিতীয় শ্রেণির কোড। ভুল। Error handling প্রথম শ্রেণির। ভালো কোড = ভালো error handling। কিন্তু বিশাল try-except নয়। ছোট try, নির্দিষ্ট catch, পরিষ্কার recovery।</div>
<div class="dialogue en">Martin (Clean Code, 2008, Ch.7) says — error handling is not a separate concern. It is the main logic. But many think exceptions are second-class code. Wrong. Error handling is first-class. Good code = good error handling. But not a massive try-except. Small try, specific catch, clear recovery.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> জাকির বললেন — একটা function একটা bare except ধরেছিল। সব exception গিলে ফেলতো — KeyError, TypeError, ValueError, ConnectionError। একদিন database connection down হলো। Bare except সেটাও গিলে ফেললো। app চুপ করে রইলো — কোনো error নাই, কিন্তু কাজ হচ্ছে না। ৩ দিন ধরে debug। কারণ error লুকানো ছিল। বিশাল try-except = silent failure।</div></div>

<div class="code-block"># task_manager.py — Day 17: Error Handling (Clean Code Ch.7)
# Martin: "Error handling is important, but it should not
#  obscure the logic of the code."

import json

# ── ❌ BAD: One giant try-except — swallows everything ──
def create_task(request):
    try:
        data = json.loads(request.body)        # JSON parse
        title = data['title']                   # KeyError possible
        user = db.find_user(data['user_id'])    # DB error possible
        task = Task(title=title, assignee=user)
        db.save(task)
        send_email(user.email, "New task")
        return task
    except:
        return None  # ← swallows EVERYTHING silently
    # KeyError? ValueError? DBError? NetworkError?
    # You will NEVER know. Silent failure.

# ── ✅ GOOD: Small try, specific catch, clear recovery ──

class TaskCreationError(Exception):
    """Custom exception — caller knows exactly what failed."""
    pass

def create_task(request):
    """Each failure has a specific, meaningful exception."""
    # Step 1: Parse (specific error for bad JSON)
    try:
        data = json.loads(request.body)
    except json.JSONDecodeError as e:
        raise TaskCreationError(f"Invalid JSON: {e}")

    # Step 2: Validate (no try needed — validation raises)
    title = validate_title(data.get('title', ''))
    user_id = data.get('user_id')
    if not user_id:
        raise TaskCreationError("user_id required")

    # Step 3: Fetch user (specific DB error)
    try:
        user = db.find_user(user_id)
    except db.ConnectionError:
        raise TaskCreationError("Database unavailable")
    if user is None:
        raise TaskCreationError(f"User {user_id} not found")

    # Step 4: Save (specific DB error)
    task = Task(title=title, assignee=user)
    try:
        db.save(task)
    except db.IntegrityError:
        raise TaskCreationError("Duplicate task")

    # Step 5: Notify (notification failure is NOT fatal)
    try:
        send_email(user.email, "New task assigned")
    except SMTPError as e:
        # Log but don't fail — task is already saved
        logger.warning(f"Email failed: {e}")
        # Task creation succeeded, email is secondary

    return task

# ── RULES:
# 1. Exceptions for EXCEPTIONAL cases, not flow control
# 2. Try blocks small — only the risky line
# 3. Catch where you can HANDLE — not just to silence
# 4. Custom exceptions = self-documenting errors
# 5. Don't return None on error — raise or return Result</div>

<div class="diagram">
  <div class="diag-title">Error Handling — Giant Catch vs Specific Catches</div>
  <svg viewBox="0 0 720 270" xmlns="http://www.w3.org/2000/svg">
    <!-- Giant catch -->
    <text x="120" y="20" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">❌ Giant try-except</text>
    <rect x="20" y="30" width="200" height="180" rx="8" fill="rgba(239,68,68,0.04)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="120" y="48" text-anchor="middle" fill="#ef4444" font-size="9" font-family="monospace">try:</text>
    <text x="30" y="65" fill="#9a93b8" font-size="7" font-family="monospace">parse json</text>
    <text x="30" y="80" fill="#9a93b8" font-size="7" font-family="monospace">find user</text>
    <text x="30" y="95" fill="#9a93b8" font-size="7" font-family="monospace">save task</text>
    <text x="30" y="110" fill="#9a93b8" font-size="7" font-family="monospace">send email</text>
    <text x="30" y="125" fill="#9a93b8" font-size="7" font-family="monospace">log activity</text>
    <text x="120" y="150" text-anchor="middle" fill="#ef4444" font-size="9" font-family="monospace">except:</text>
    <text x="120" y="168" text-anchor="middle" fill="#ef4444" font-size="8" font-family="monospace">return None</text>
    <text x="120" y="195" text-anchor="middle" fill="#ef4444" font-size="7">৫ ধরনের error → ১ catch</text>
    <text x="120" y="207" text-anchor="middle" fill="#ef4444" font-size="7">silent failure</text>
    <!-- Arrow -->
    <line x1="225" y1="100" x2="275" y2="100" stroke="#a5b4fc" stroke-width="2"/>
    <text x="250" y="93" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">fix</text>
    <!-- Specific catches -->
    <text x="410" y="20" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">✅ Specific catches</text>
    <rect x="290" y="30" width="240" height="22" rx="4" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1"/>
    <text x="410" y="45" text-anchor="middle" fill="#52c41a" font-size="7" font-family="monospace">try: json.loads() → JSONDecodeError</text>
    <rect x="290" y="57" width="240" height="22" rx="4" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1"/>
    <text x="410" y="72" text-anchor="middle" fill="#52c41a" font-size="7" font-family="monospace">validate_title() → ValueError</text>
    <rect x="290" y="84" width="240" height="22" rx="4" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1"/>
    <text x="410" y="99" text-anchor="middle" fill="#52c41a" font-size="7" font-family="monospace">try: db.find() → ConnectionError</text>
    <rect x="290" y="111" width="240" height="22" rx="4" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1"/>
    <text x="410" y="126" text-anchor="middle" fill="#52c41a" font-size="7" font-family="monospace">try: db.save() → IntegrityError</text>
    <rect x="290" y="138" width="240" height="22" rx="4" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1"/>
    <text x="410" y="153" text-anchor="middle" fill="#fbbf24" font-size="7" font-family="monospace">try: send_email() → SMTPError (log)</text>
    <text x="410" y="180" text-anchor="middle" fill="#a5b4fc" font-size="7">৫ ধরনের error → ৫ নির্দিষ্ট catch</text>
    <text x="410" y="195" text-anchor="middle" fill="#52c41a" font-size="7" font-weight="bold">Each error is visible</text>
    <!-- Bottom rules -->
    <rect x="20" y="225" width="680" height="38" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="360" y="242" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">Martin's Rules: Small try · Specific catch · Custom exceptions</text>
    <text x="360" y="255" text-anchor="middle" fill="#9a93b8" font-size="7">Exception শুধু অস্বাভাবিক অবস্থায় — flow control নয়</text>
  </svg>
  <div class="diag-cap">বিশাল try-except → নির্দিষ্ট catch। প্রতিটা error দৃশ্যমান। Silent failure = নীরব মৃত্যু।</div>
</div>

<div class="dialogue">সাবর — ধৈর্য, সহনশীলতা। কুরআনে আল্লাহ বলেন — ধৈর্য ধারণ করো, আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন (২:১৫৩)। Error handling হলো সাবর — ভুল আসবে, কিন্তু ধৈর্য ধরে মোকাবিলা করো। ভুল লুকাও না, ভুল গিলে ফেলো না — ভুলকে দেখো, নাম দাও, মোকাবিলা করো।</div>
<div class="dialogue en">Sabr — patience, perseverance. Allah says — seek help through patience, Allah is with the patient (2:153). Error handling is sabr — errors will come, but handle them with patience. Do not hide errors, do not swallow them — see them, name them, handle them.</div>

<div class="secret-box">🚨 Error = সাবর। Exception শুধু অস্বাভাবিক অবস্থায়। ছোট try, নির্দিষ্ট catch, custom exception। Silent failure নয়।</div>
`,
  senior:{
    title:"Clean Code — Error Handling (Martin, Ch.7)",
    body:`<p><strong>Martin-এর ৫টি নিয়ম:</strong></p>
<table class="kv-table">
<tr><th>নিয়ম</th><th>উদাহরণ</th></tr>
<tr><td class="hl">Exception ≠ flow control</td><td>if এর বদলে except ব্যবহার কোরো না</td></tr>
<tr><td class="hl">Small try</td><td>শুধু risky লাইন, পুরো function নয়</td></tr>
<tr><td class="hl">Specific catch</td><td>except Exception নয়, except ValueError</td></tr>
<tr><td class="hl">Custom exceptions</td><td>class TaskError(Exception) — self-documenting</td></tr>
<tr><td class="hl">Don't return None</td><td>raise করো বা Result object ফেরত দাও</td></tr>
</table>
<p><strong>Python exception hierarchy:</strong> BaseException → Exception → ValueError/TypeError/KeyError → Your custom exception। নিজের exception বানাও — তাহলে caller নির্দিষ্টভাবে catch করতে পারে।</p>
<p><strong>Cross-ref:</strong> Book 47 (Testing & QA) Door 3-এ test-এ exception testing দেখবে (pytest.raises)। Book 40 (Software Engineering) Door 7-এ error handling patterns দেখবে।</p>`
  }
});

// ── DOOR 18: DESIGN PATTERNS — DECORATOR ──
doors.push({
  num:18, icon:"🎁", color:"#818cf8", name:"মোড়কের শক্তি",
  subtitle:"The Power of Wrapping", tech:"Design Patterns (GoF, 1994) — Decorator Pattern",
  spirit:"লিবাস — garment/wrapping, from Quran 7:26 (We have given you garments to cover you)",
  secret:"Decorator = বিদ্যমান object wrap করো, behavior যোগ করো — subclass ছাড়া। Python-এ @decorator syntax। GoF: কম্পোজিশন দিয়ে behavior বাড়াও, inheritance দিয়ে নয়।",
  recall:{
    q:"Decorator pattern কী? Python-এ কীভাবে লেখে?",
    qen:"What is the decorator pattern? How do you write it in Python?",
    a:"বিদ্যমান object wrap করে behavior যোগ। Python-এ @decorator — একটা function যা অন্য function wrap করে। উদাহরণ: @log, @cache, @retry — subclass ছাড়া behavior বাড়ায়।",
    aen:"Wraps an existing object to add behavior. In Python: @decorator — a function that wraps another. Example: @log, @cache, @retry."
  },
  story:`
<p class="scene-setting">অষ্টাদশ দিন। নতুন কারিগর — দর্জি নাদিম। তার হাতে কাপড় ও সেলাই যন্ত্র। তিনি একটা সাধারণ চাদর ধরলেন — তারপর একটা কাপড় দিয়ে মোড়ালেন। চাদরটা এখন সুন্দর, কিন্তু ভেতরের চাদর একই। তারপর আরেকটা কাপড় — এখন গরম। ভেতরের চাদর বদলায়নি। নাদিম বললেন — এটাই decorator। আচ্ছাদন যোগ করো, মূল বদলাও না।</p>
<p class="scene-setting en">Day eighteen. A new craftsman — tailor Nadim. Cloth and sewing machine in his hands. He picked up a plain shawl — then wrapped it with fabric. The shawl is now beautiful, but the inner shawl is the same. Then another cloth — now it is warm. The inner shawl did not change. Nadim said — this is the decorator. Add a layer, do not change the core.</p>

<div class="dialogue">GoF (১৯৯৪) বলেন — Decorator pattern। একটা object ধরো, মোড়াও, behavior যোগ করো। মূল object বদলাও না। Python-এ এটা এত গুরুত্বপূর্ণ যে আলাদা syntax আছে: @decorator। @log দিলে ফাংশনের আগে-পরে log যোগ। @cache দিলে ফলাফল মনে রাখে। @retry দিলে ব্যর্থ হলে আবার চেষ্টা করে।</div>
<div class="dialogue en">GoF (1994) say — Decorator pattern. Take an object, wrap it, add behavior. Do not change the original object. In Python this is so important it has special syntax: @decorator. @log adds logging before/after. @cache remembers results. @retry retries on failure.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> নাদিম বললেন — একটা team-এ logging দরকার ছিল ৩০টা function-এ। প্রতিটায় হাতে print("calling X") যোগ করা হলো। কিন্তু log format বদলাতে হলে ৩০ জায়গায় বদলাতে হবে। ছয় মাস পরে একজন @log decorator বানালেন — এক জায়গায়, সব function-এ। format বদলানো? এক জায়গায়। ৩০ নয়। DRY + Decorator = ক্ষমতা।</div></div>

<div class="code-block"># task_manager.py — Day 18: Decorator Pattern (GoF, 1994)
# GoF: "Attach additional responsibilities to an object
#  dynamically. Decorators provide a flexible alternative
#  to subclassing for extending functionality."

import functools
import time
from datetime import datetime

# ══════════════════════════════════════
# DECORATOR 1: @log — logs function calls
# ══════════════════════════════════════

def log(func):
    """Wraps any function — logs entry/exit."""
    @functools.wraps(func)  # preserves original name/docstring
    def wrapper(*args, **kwargs):
        print(f"[LOG] Calling {func.__name__}(...)")
        result = func(*args, **kwargs)
        print(f"[LOG] {func.__name__} returned {result}")
        return result
    return wrapper

# Apply: just add @log above any function
@log
def create_task(title):
    """Creates a task."""
    return Task(title=title)

# create_task("Buy groceries")
# Output: [LOG] Calling create_task(...)
#         [LOG] create_task returned Task(title='Buy groceries')

# ══════════════════════════════════════
# DECORATOR 2: @timer — measures execution time
# ══════════════════════════════════════

def timer(func):
    """Wraps any function — measures execution time."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"[TIMER] {func.__name__}: {elapsed:.4f}s")
        return result
    return wrapper

@timer
def find_pending_tasks():
    """Find all pending tasks."""
    return repo.find_pending()

# ══════════════════════════════════════
# DECORATOR 3: @retry — retries on failure
# ══════════════════════════════════════

def retry(max_attempts=3, base_delay=1.0):
    """Factory decorator — retries failing calls with exponential backoff."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    delay = base_delay * (2 ** attempt)  # exponential
                    print(f"[RETRY] {func.__name__} "
                          f"attempt {attempt+1} failed: {e}")
                    time.sleep(delay)
        return wrapper
    return decorator

@retry(max_attempts=3)
def fetch_from_api(url):
    """Network call — retries 3 times if it fails."""
    return requests.get(url).json()

# ══════════════════════════════════════
# DECORATOR 4: @cache — memoizes results
# ══════════════════════════════════════

def cache(func):
    """Wraps — remembers results for same inputs."""
    _cache = {}

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Create a hashable key from both args and kwargs
        key = (args, tuple(sorted(kwargs.items())))
        if key not in _cache:
            _cache[key] = func(*args, **kwargs)
        return _cache[key]
    return wrapper

@cache
def expensive_calculation(n):
    """Only runs once per unique n — then uses cache."""
    time.sleep(2)  # simulate expensive op
    return n * n

# ══════════════════════════════════════
# STACKING: multiple decorators on one function
# ══════════════════════════════════════

@log                    # applied LAST (outermost)
@timer                  # applied SECOND
@retry(max_attempts=3)  # applied FIRST (innermost)
def process_task(task_id):
    """Logged, timed, and retried — 3 behaviors, 1 function."""
    task = repo.find(task_id)
    task.process()
    return task

# Each decorator wraps the next:
# log(timer(retry(process_task)))
# No subclass needed. No code duplication. Pure wrapping.</div>

<div class="diagram">
  <div class="diag-title">Decorator — মোড়কে মোড়কে behavior যোগ</div>
  <svg viewBox="0 0 720 270" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrDec" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#a5b4fc"/></marker></defs>
    <!-- Core function -->
    <rect x="190" y="20" width="180" height="35" rx="6" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
    <text x="360" y="38" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">process_task()</text>
    <text x="360" y="50" text-anchor="middle" fill="#9a93b8" font-size="7">Core function — just logic</text>
    <!-- Layer 1: retry -->
    <rect x="140" y="65" width="280" height="35" rx="6" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="360" y="83" text-anchor="middle" fill="#a78bfa" font-size="9" font-weight="bold">@retry(max_attempts=3)</text>
    <text x="360" y="95" text-anchor="middle" fill="#9a93b8" font-size="7">+ retries on failure</text>
    <!-- Layer 2: timer -->
    <rect x="90" y="110" width="380" height="35" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="360" y="128" text-anchor="middle" fill="#52c41a" font-size="9" font-weight="bold">@timer</text>
    <text x="360" y="140" text-anchor="middle" fill="#9a93b8" font-size="7">+ measures execution time</text>
    <!-- Layer 3: log -->
    <rect x="40" y="155" width="480" height="35" rx="6" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="360" y="173" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="bold">@log</text>
    <text x="360" y="185" text-anchor="middle" fill="#9a93b8" font-size="7">+ logs entry/exit</text>
    <!-- Result -->
    <rect x="40" y="200" width="480" height="30" rx="6" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="2"/>
    <text x="360" y="219" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">1 function, 4 behaviors — no subclassing!</text>
    <!-- Bottom -->
    <rect x="40" y="240" width="480" height="22" rx="4" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="360" y="255" text-anchor="middle" fill="#a5b4fc" font-size="8" font-weight="bold">GoF: "Favor composition over inheritance"</text>
  </svg>
  <div class="diag-cap">@log + @timer + @retry — ৩টা behavior যোগ, মূল ফাংশন বদলায়নি। প্রতিটা মোড়ক একটা গুণ।</div>
</div>

<div class="dialogue">লিবাস — আচ্ছাদন, বস্ত্র। কুরআনে আল্লাহ বলেন — আমি তোমাদের পোশাক দিয়েছি যা তোমাদের আবৃত করে (৭:২৬)। পোশাক মূল মানুষকে বদলায় না — শুধু আচ্ছাদন যোগ করে। Decorator সেই রকম — মূল ফাংশন বদলায় না, শুধু আচ্ছাদন যোগ করে। কিন্তু পোশাক শক্তি দেয় — decoratorও শক্তি দেয়।</div>
<div class="dialogue en">Libas — garment, covering. Allah says — We have given you garments to cover you (7:26). A garment does not change the core person — it adds a layer. A decorator is the same — it does not change the core function, it adds a layer. But a garment gives strength — a decorator gives strength too.</div>

<div class="secret-box">🎁 Decorator = মোড়ক যোগ করো, মূল বদলাও না। @log, @cache, @retry — subclass ছাড়া behavior বাড়াও।</div>
`,
  senior:{
    title:"Design Patterns — Decorator (GoF, 1994)",
    body:`<p><strong>Decorator এর ৩টি উপাদান:</strong></p>
<table class="kv-table">
<tr><th>উপাদান</th><th>উদাহরণ</th></tr>
<tr><td class="hl">Component</td><td>মূল function: process_task()</td></tr>
<tr><td class="hl">Concrete Decorator</td><td>@log, @timer, @retry, @cache</td></tr>
<tr><td class="hl">Stacking</td><td>@log(@timer(@retry(func))) — একাধিক মোড়ক</td></tr>
</table>
<p><strong>Python built-in decorators:</strong> @property (getter/setter), @staticmethod, @classmethod, @dataclass, @functools.wraps — Python-এ decorator সর্বব্যাপী।</p>
<p><strong>Real-world:</strong> Flask: @app.route('/'), Django: @login_required, pytest: @pytest.mark.parametrize — সব decorator pattern।</p>
<div class="callout warn"><span class="co-icon">⚖️</span><div><strong>Decorator-এর মূল্য:</strong> প্রতিটা decorator একটা function call wrapper — stack trace দীর্ঘ হয়। ৫টা decorator stack করলে debug করা কঠিন — কোন decorator কোন behavior যোগ করছে বোঝা যায় না। <strong>নিয়ম:</strong> ১-৩ decorator = ভালো। @functools.wraps বাধ্যতামূলক — নাহলে function-এর __name__, __doc__ হারিয়ে যায়। Side effect বিপজ্জনক — decorator যদি বাইরের state বদলায়, পরীক্ষা করা কঠিন।</div></div>
<p><strong>Cross-ref:</strong> Book 40 (Software Engineering) Door 6-এ SOLID-এর Open/Closed দেখবে। Book 45 (Compilers) Door 3-এ AST transformation দেখবে — decorator-এর compiler-level সংস্করণ।</p>`
  }
});

// ── DOOR 19: SICP — HIGHER-ORDER FUNCTIONS ──
doors.push({
  num:19, icon:"⚙️", color:"#6366f1", name:"ফাংশনের ফাংশন",
  subtitle:"Functions That Take Functions", tech:"SICP Ch.1 (Abelson &amp; Sussman, 1985) — Higher-Order Functions",
  spirit:"তাফাক্কুর — deep reflection, from Quran 3:191 (those who reflect on the creation of the heavens and earth)",
  secret:"Higher-order function = ফাংশন যা ফাংশন গ্রহণ করে বা ফেরত দেয়। map, filter, reduce — এগুলো শুধু loop নয়, abstraction। SICP: ভালো কোড functions দিয়ে চিন্তা করে, নিদের্শ সংখ্যা দিয়ে নয়।",
  recall:{
    q:"Higher-order function কী? map/filter/reduce কী করে?",
    qen:"What is a higher-order function? What do map/filter/reduce do?",
    a:"ফাংশন যা ফাংশন গ্রহণ করে বা ফেরত দেয়। map(f, list) = প্রতিটা element-এ f প্রয়োগ। filter(f, list) = শর্ত মেলে এমন element। reduce(f, list) = সব element একটা ফলাফলে একত্রিত। এগুলো loop-এর abstraction।",
    aen:"A function that takes or returns functions. map(f, list) = apply f to each. filter(f, list) = keep elements matching f. reduce(f, list) = combine all into one."
  },
  story:`
<p class="scene-setting">উনিশতম দিন। নতুন কারিগর — দার্শনিক কামরান। ইউনুসের শিষ্য, SICP-এর পরবর্তী অধ্যায় নিয়ে এসেছেন। তিনি তোমার কোড দেখলেন — প্রতিটা list-এ for loop। একই pattern বারবার: "প্রতিটা element-এ একটা কাজ করো"। কামরান বললেন — তুমি একই কথা বারবার বলছো। map একবার বলে, সব জায়গায়। এটাই higher-order function।</p>
<p class="scene-setting en">Day nineteen. A new craftsman — philosopher Kamran. Yunus's student, bringing the next chapter of SICP. He examined your code — for loop on every list. The same pattern repeatedly: "do something to each element." Kamran said — you are repeating yourself. map says it once, everywhere. This is the higher-order function.</p>

<div class="dialogue">Abelson &amp; Sussman (SICP, ১৯৮৫) বলেন — higher-order function হলো abstraction-এর শীর্ষ রূপ। একটা function যা অন্য function গ্রহণ করে। map = "প্রতিটায় একটা কাজ করো"। filter = "শর্ত মেলে এমন রাখো"। reduce = "সব একত্রিত করো"। এই তিনটি নিয়ম দিয়ে ৯০% loop বদলানো যায়। কোড ছোট, পরিষ্কার, abstraction-এ পূর্ণ।</div>
<div class="dialogue en">Abelson &amp; Sussman (SICP, 1985) say — higher-order functions are the highest form of abstraction. A function that takes other functions. map = "do something to each." filter = "keep matching ones." reduce = "combine all." These three rules replace 90% of loops. Code is shorter, cleaner, full of abstraction.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> কামরান বললেন — একটা codebase-এ ৫০টা for loop ছিল একই pattern: list থেকে একটা field বের করো। ৫০ জায়গায় ৫০টা loop। তারপর field-এর নাম বদলানো হলো — ৫০ জায়গায় বদলাতে হলো। map দিলে: map(lambda t: t.title, tasks) — এক জায়গায়, পরিষ্কার। ৫০টা loop → ৫০টা map call, সব একই pattern, কম্পোজেবল।</div></div>

<div class="code-block"># task_manager.py — Day 19: Higher-Order Functions (SICP)
# Abelson &amp; Sussman: "Procedures that manipulate procedures
#  are called higher-order procedures."

from functools import reduce

# ══════════════════════════════════════
# THE PROBLEM: Repeated loop patterns
# ══════════════════════════════════════

tasks = [
    Task(id=1, title="Buy groceries", priority=3, status="pending"),
    Task(id=2, title="Call mom", priority=5, status="done"),
    Task(id=3, title="Pay bills", priority=4, status="pending"),
    Task(id=4, title="Write report", priority=2, status="pending"),
]

# ── ❌ BAD: Explicit for-loop for every operation ──

# Get all titles
titles = []
for t in tasks:
    titles.append(t.title)

# Get pending tasks
pending = []
for t in tasks:
    if t.status == "pending":
        pending.append(t)

# Count high-priority
high_count = 0
for t in tasks:
    if t.priority &gt;= 4:
        high_count += 1

# Same pattern, 3 times. Verbose. Error-prone.

# ── ✅ GOOD: map, filter, reduce — higher-order abstractions ──

# map: "apply this function to EACH element"
titles = list(map(lambda t: t.title, tasks))
# Or with list comprehension (Pythonic map):
titles = [t.title for t in tasks]

# filter: "keep elements where this function is True"
pending = list(filter(lambda t: t.status == "pending", tasks))
# Or:
pending = [t for t in tasks if t.status == "pending"]

# reduce: "combine ALL elements into ONE value"
total_priority = reduce(
    lambda acc, t: acc + t.priority,
    tasks,
    0  # initial value
)
# = 3 + 5 + 4 + 2 = 14

high_count = reduce(
    lambda acc, t: acc + (1 if t.priority &gt;= 4 else 0),
    tasks,
    0
)
# = 2

# ══════════════════════════════════════
# WRITING YOUR OWN higher-order functions
# ══════════════════════════════════════

def apply_to_tasks(tasks, operation):
    """Higher-order: takes a function as argument."""
    return [operation(t) for t in tasks]

# Usage — pass different operations
titles = apply_to_tasks(tasks, lambda t: t.title)
ids = apply_to_tasks(tasks, lambda t: t.id)
summaries = apply_to_tasks(tasks,
    lambda t: f"#{t.id}: {t.title} ({t.status})")

def group_by(tasks, key_func):
    """Higher-order: groups tasks by any key function."""
    groups = {}
    for t in tasks:
        key = key_func(t)
        groups.setdefault(key, []).append(t)
    return groups

# Group by status
by_status = group_by(tasks, lambda t: t.status)
# {'pending': [...], 'done': [...]}

# Group by priority range
by_priority = group_by(tasks,
    lambda t: "high" if t.priority &gt;= 4 else "low")
# {'high': [...], 'low': [...]}

# ══════════════════════════════════════
# FUNCTION COMPOSITION: pipe operations
# ══════════════════════════════════════

# Chain: filter → map → sort (reads like a pipeline)
urgent_titles = sorted(
    [t.title for t in tasks          # map: extract title
     if t.status == "pending"        # filter: only pending
     and t.priority &gt;= 3],           # filter: high priority
    key=len                          # sort: by title length
)
# ["Pay bills", "Buy groceries", "Write report"]

# This is SICP's vision: think in transformations,
# not in step-by-step instructions.</div>

<div class="diagram">
  <div class="diag-title">Higher-Order Functions — map · filter · reduce</div>
  <svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arrHOF" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L4,3 L0,6" fill="#a5b4fc"/></marker></defs>
    <!-- map -->
    <rect x="20" y="20" width="160" height="85" rx="8" fill="rgba(99,102,241,0.06)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="100" y="38" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">map(f, list)</text>
    <text x="100" y="55" text-anchor="middle" fill="#9a93b8" font-size="7">প্রতিটা element-এ f</text>
    <text x="100" y="75" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">[1, 2, 3]</text>
    <text x="100" y="87" text-anchor="middle" fill="#9a93b8" font-size="7">↓ ×2</text>
    <text x="100" y="100" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">[2, 4, 6]</text>
    <!-- filter -->
    <rect x="200" y="20" width="160" height="85" rx="8" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="360" y="38" text-anchor="middle" fill="#52c41a" font-size="10" font-weight="bold">filter(f, list)</text>
    <text x="360" y="55" text-anchor="middle" fill="#9a93b8" font-size="7">শর্ত মেলে এমন রাখো</text>
    <text x="360" y="75" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">[1, 2, 3, 4]</text>
    <text x="360" y="87" text-anchor="middle" fill="#9a93b8" font-size="7">↓ even?</text>
    <text x="360" y="100" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">[2, 4]</text>
    <!-- reduce -->
    <rect x="380" y="20" width="160" height="85" rx="8" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="460" y="38" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">reduce(f, list)</text>
    <text x="460" y="55" text-anchor="middle" fill="#9a93b8" font-size="7">সব একত্রিত করো</text>
    <text x="460" y="75" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">[1, 2, 3, 4]</text>
    <text x="460" y="87" text-anchor="middle" fill="#9a93b8" font-size="7">↓ sum</text>
    <text x="460" y="100" text-anchor="middle" fill="#fbbf24" font-size="8" font-family="monospace">10</text>
    <!-- Pipeline -->
    <text x="360" y="135" text-anchor="middle" fill="#a5b4fc" font-size="10" font-weight="bold">Composition Pipeline</text>
    <rect x="20" y="145" width="120" height="25" rx="4" fill="rgba(82,196,26,0.06)" stroke="#52c41a" stroke-width="1"/>
    <text x="80" y="162" text-anchor="middle" fill="#52c41a" font-size="8" font-family="monospace">filter: pending</text>
    <line x1="145" y1="158" x2="165" y2="158" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrHOF)"/>
    <rect x="170" y="145" width="120" height="25" rx="4" fill="rgba(99,102,241,0.06)" stroke="#6366f1" stroke-width="1"/>
    <text x="230" y="162" text-anchor="middle" fill="#a5b4fc" font-size="8" font-family="monospace">map: title</text>
    <line x1="295" y1="158" x2="315" y2="158" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#arrHOF)"/>
    <rect x="320" y="145" width="120" height="25" rx="4" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1"/>
    <text x="380" y="162" text-anchor="middle" fill="#fbbf24" font-size="8" font-family="monospace">sort: by length</text>
    <text x="470" y="162" fill="#a5b4fc" font-size="7">→ result</text>
    <!-- Rule -->
    <rect x="20" y="190" width="600" height="80" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="360" y="210" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">SICP: "Think in transformations, not instructions"</text>
    <text x="360" y="227" text-anchor="middle" fill="#9a93b8" font-size="8">for-loop = "কীভাবে করবে" (how)</text>
    <text x="360" y="242" text-anchor="middle" fill="#9a93b8" font-size="8">map/filter/reduce = "কী করবে" (what)</text>
    <text x="360" y="257" text-anchor="middle" fill="#52c41a" font-size="8" font-weight="bold">Declarative &gt; Imperative</text>
  </svg>
  <div class="diag-cap">map (প্রতিটায়) · filter (শর্ত মেলে) · reduce (একত্রিত)। এই তিনটি দিয়ে ৯০% loop বদলানো যায়।</div>
</div>

<div class="dialogue">তাফাক্কুর — গভীর চিন্তা। কুরআনে আল্লাহ বলেন — যারা আসমান ও জমিনের সৃষ্টি নিয়ে চিন্তা করে (৩:১৯১)। তাফাক্কুর হলো প্রতিটা বস্তুর পেছনের pattern দেখা। Higher-order function হলো তাফাক্কুরের হাতিয়ার — loop-এর পেছনের pattern দেখো: "প্রতিটায় কাজ করো"। সেই pattern-এর নাম map। গভীর চিন্তা = গভীর abstraction।</div>
<div class="dialogue en">Tafakkur — deep reflection. Allah says — those who reflect on the creation of the heavens and earth (3:191). Tafakkur is seeing the pattern behind each thing. A higher-order function is a tool for tafakkur — see the pattern behind the loop: "do something to each." That pattern's name is map. Deep reflection = deep abstraction.</div>

<div class="secret-box">⚙️ map (প্রতিটায়) · filter (শর্ত) · reduce (একত্রিত)। এই তিনটি = abstraction। loop-এর pattern দেখো, নাম দাও, ব্যবহার করো।</div>
`,
  senior:{
    title:"SICP — Higher-Order Functions (Abelson &amp; Sussman)",
    body:`<p><strong>SICP Ch.1 — মূল ধারণা:</strong></p>
<table class="kv-table">
<tr><th>Function</th><th>কী করে</th><th>Python</th></tr>
<tr><td class="hl">map</td><td>প্রতিটা element-এ function প্রয়োগ</td><td>map(f, list) বা [f(x) for x in list]</td></tr>
<tr><td class="hl">filter</td><td>শর্ত মেলে এমন element রাখে</td><td>filter(f, list) বা [x for x in list if f(x)]</td></tr>
<tr><td class="hl">reduce</td><td>সব element একটা ফলাফলে একত্রিত</td><td>functools.reduce(f, list, init)</td></tr>
<tr><td class="hl">compose</td><td>একাধিক function চেইন</td><td>sorted(filter(f, map(g, list)))</td></tr>
</table>
<p><strong>Declarative vs Imperative: </strong> Imperative = "কীভাবে" (for loop, step-by-step)। Declarative = "কী" (map, filter, reduce)। SICP বলেন: declarative বেশি powerful কারণ এটা abstraction-এ কথা বলে।</p>
<p><strong>Real-world:</strong> Spark RDD (map/filter/reduce), React (map rendering), pandas (apply/filter/agg) — সব higher-order function।</p>
<p><strong>Cross-ref:</strong> Book 30 (Math for ML) Door 4-এ function composition দেখবে। Book 8 (LLM Anatomy)-এ tensor operations (map-এর batch version) দেখবে। Book 2 (DSA Bazaar) Door ৩-এ array operations দেখবে।</p>`
  }
});

// ── DOOR 21: SOLID PRINCIPLES ──
doors.push({
  num:21, icon:"🏛️", color:"#6366f1", name:"পাঁচ স্তম্ভের নিয়ম",
  subtitle:"The Five Pillars", tech:"SOLID Principles (Martin, 2000) — S·O·L·I·D",
  spirit:"মিযান — balance/measure, from Quran 55:7-9 (establish balance with justice, do not exceed)",
  secret:"SOLID = ৫টি নীতি যা ভালো OOP কোডের ভিত্তি। Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion। প্রতিটা প্রশ্ন করো: এক class কি এক কারণে বদলায়?",
  recall:{
    q:"SOLID-এর ৫টি অক্ষর কী কী? প্রতিটার এক লাইনে অর্থ বলো।",
    qen:"What are the 5 letters of SOLID? Explain each in one line.",
    a:"S = Single Responsibility (এক class, এক কারণ বদলায়)। O = Open/Closed (সম্প্রসারণে খোলা, পরিবর্তনে বন্ধ)। L = Liskov Substitution (subclass বসালে কোড ভাঙবে না)। I = Interface Segregation (অনেক ছোট interface, এক বড় নয়)। D = Dependency Inversion (high-level module low-level-এর উপর নির্ভর নয়, abstraction-এ নির্ভর)।",
    aen:"S = Single Responsibility (one class, one reason to change). O = Open/Closed (open for extension, closed for modification). L = Liskov Substitution (subclass should work wherever parent works). I = Interface Segregation (many small interfaces, not one big). D = Dependency Inversion (depend on abstractions, not concretions)."
  },
  story:`
<p class="scene-setting">একবিংশ দিন। রাহিলা ফিরে এলেন — এবার হাতে একটা স্কেল ও পাঁচটা স্তম্ভের মডেল। তিনি বললেন — কারিগরের কোডের পাঁচটা স্তম্ভ আছে। এগুলো না থাকলে কোড দাঁড়ায় না — পড়ে যায়। এই পাঁচটাকে একসাথে বলে SOLID। Robert C. Martin (Uncle Bob) ২০০০ সালে এই নীতিগুলো সংগঠিত করেন — কিন্তু ধারণাগুলো পুরোনো।</p>
<p class="scene-setting en">Day twenty-one. Rahila returned — with a scale and a model of five pillars. She said — a craftsman's code rests on five pillars. Without them, code does not stand — it falls. Together these are called SOLID. Robert C. Martin (Uncle Bob) organized these principles in 2000 — but the ideas are older.</p>

<div class="dialogue">SOLID মানে পাঁচটা নীতি — প্রতিটা একটা অক্ষর। S, O, L, I, D। প্রতিটা নীতি একটা প্রশ্ন। সেই প্রশ্ন কোড পর্যালোচনায় বারবার করবে। এগুলো শিখলে তোমার কোড শুধু চলবে না — সে স্থায়ী হবে। বদলানো সহজ হবে। পরীক্ষা করা সহজ হবে।</div>
<div class="dialogue en">SOLID means five principles — each a letter. S, O, L, I, D. Each principle is a question. That question you will ask again and again in code review. Learn these and your code will not just run — it will last. It will be easy to change. Easy to test.</div>

<div class="callout warn"><span class="co-icon">⚠️</span><div><strong>ব্যর্থতার গল্প:</strong> রাহিলা বললেন — একটা God Class ছিল ২০০০ লাইনের। UserManager — login, registration, email, password reset, profile, avatar upload, friends list, privacy settings। SOLID-এর S লঙ্ঘন: এক class, অনেক কারণে বদলায়। প্রতিটা feature যোগ করতে গেলে ৫ জন ডেভেলপার conflict। ৩ মাসে codebase নশ্বর। সমাধান: ভাঙো — AuthManager, ProfileManager, SocialManager, PrivacyManager। প্রতিটা এক কাজ।</div></div>

<div class="code-block"># task_manager.py — Day 21: SOLID Principles (Martin, 2000)
# Each principle = one question to ask in every code review.

# ══════════════════════════════════════
# S — SINGLE RESPONSIBILITY (SRP)
# "A class should have one, and only one, reason to change."
# ══════════════════════════════════════

# ❌ BAD: TaskManager does EVERYTHING
class TaskManager:
    def create_task(self, title): ...      # business logic
    def validate_title(self, title): ...   # validation
    def send_email(self, to, subject): ... # notification
    def save_to_db(self, task): ...        # persistence
    def format_json(self, task): ...       # serialization
    # 5 reasons to change → violates SRP

# ✅ GOOD: Each class has ONE responsibility
class TaskService:          # business logic only
    def create_task(self, title): ...
class TaskValidator:        # validation only
    def validate_title(self, title): ...
class EmailNotifier:        # notification only
    def send_email(self, to, subject): ...
class TaskRepository:       # persistence only
    def save(self, task): ...

# ══════════════════════════════════════
# O — OPEN/CLOSED (OCP)
# "Open for extension, closed for modification."
# ══════════════════════════════════════
# Already covered in Door 8 (Strategy) — adding
# new behavior WITHOUT modifying existing code.

# ══════════════════════════════════════
# L — LISKOV SUBSTITUTION (LSP)
# "Subtypes must be substitutable for base types."
# ══════════════════════════════════════

class Bird:
    def fly(self): pass

class Penguin(Bird):
    def fly(self):
        raise Exception("Penguins can't fly!")
        # ❌ LSP violation: Penguin can't replace Bird
        # Code that expects Bird.fly() will break.

# ✅ FIX: Separate hierarchy
class FlyingBird(Bird):
    def fly(self): pass
class FlightlessBird(Bird):
    pass  # no fly() — honest

# ══════════════════════════════════════
# I — INTERFACE SEGREGATION (ISP)
# "Clients shouldn't depend on methods they don't use."
# ══════════════════════════════════════

# ❌ BAD: One fat interface
class WorkerInterface(ABC):
    @abstractmethod
    def work(self): ...
    @abstractmethod
    def eat(self): ...     # Robot doesn't eat!
    @abstractmethod
    def sleep(self): ...   # Robot doesn't sleep!

# ✅ GOOD: Split into small interfaces
class Workable(ABC):
    @abstractmethod
    def work(self): ...
class Eatable(ABC):
    @abstractmethod
    def eat(self): ...
class Sleepable(ABC):
    @abstractmethod
    def sleep(self): ...

class Human(Workable, Eatable, Sleepable): ...
class Robot(Workable): ...  # only work — honest

# ══════════════════════════════════════
# D — DEPENDENCY INVERSION (DIP)
# "Depend on abstractions, not concretions."
# ══════════════════════════════════════

# ❌ BAD: High-level depends on low-level
class TaskService:
    def __init__(self):
        self.db = MySQLDatabase()  # ← hard dependency
        # Switching to PostgreSQL = rewrite TaskService

# ✅ GOOD: Both depend on abstraction
class Database(ABC):
    @abstractmethod
    def save(self, task): ...
class MySQLDatabase(Database): ...
class TaskService:
    def __init__(self, db: Database):  # ← abstraction
        self.db = db
    # Swap MySQL → PostgreSQL → MongoDB — no change here!</div>

<div class="diagram">
  <div class="diag-title">SOLID — ৫ স্তম্ভের ভিত্তি</div>
  <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
    <text x="280" y="20" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">SOLID — The Five Pillars of Clean Code</text>
    <!-- S -->
    <rect x="20" y="40" width="100" height="110" rx="6" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="70" y="60" text-anchor="middle" fill="#a5b4fc" font-size="20" font-weight="bold">S</text>
    <text x="70" y="78" text-anchor="middle" fill="#9a93b8" font-size="7" font-weight="bold">Single</text>
    <text x="70" y="88" text-anchor="middle" fill="#9a93b8" font-size="7" font-weight="bold">Responsibility</text>
    <text x="70" y="105" text-anchor="middle" fill="#9a93b8" font-size="6">এক class</text>
    <text x="70" y="115" text-anchor="middle" fill="#9a93b8" font-size="6">এক কারণ</text>
    <text x="70" y="130" text-anchor="middle" fill="#9a93b8" font-size="6">বদলায়</text>
    <text x="70" y="143" text-anchor="middle" fill="#a5b4fc" font-size="6" font-weight="bold">SRP</text>
    <!-- O -->
    <rect x="130" y="40" width="100" height="110" rx="6" fill="rgba(82,196,26,0.08)" stroke="#52c41a" stroke-width="1.5"/>
    <text x="180" y="60" text-anchor="middle" fill="#52c41a" font-size="20" font-weight="bold">O</text>
    <text x="180" y="78" text-anchor="middle" fill="#9a93b8" font-size="7" font-weight="bold">Open/Closed</text>
    <text x="180" y="98" text-anchor="middle" fill="#9a93b8" font-size="6">সম্প্রসারণে খোলা</text>
    <text x="180" y="108" text-anchor="middle" fill="#9a93b8" font-size="6">পরিবর্তনে বন্ধ</text>
    <text x="180" y="125" text-anchor="middle" fill="#9a93b8" font-size="6">(Door 8: Strategy)</text>
    <text x="180" y="143" text-anchor="middle" fill="#52c41a" font-size="6" font-weight="bold">OCP</text>
    <!-- L -->
    <rect x="240" y="40" width="100" height="110" rx="6" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="290" y="60" text-anchor="middle" fill="#fbbf24" font-size="20" font-weight="bold">L</text>
    <text x="290" y="78" text-anchor="middle" fill="#9a93b8" font-size="7" font-weight="bold">Liskov</text>
    <text x="290" y="88" text-anchor="middle" fill="#9a93b8" font-size="7" font-weight="bold">Substitution</text>
    <text x="290" y="105" text-anchor="middle" fill="#9a93b8" font-size="6">subclass বসালে</text>
    <text x="290" y="115" text-anchor="middle" fill="#9a93b8" font-size="6">কোড ভাঙবে না</text>
    <text x="290" y="130" text-anchor="middle" fill="#9a93b8" font-size="6">Penguin ✗</text>
    <text x="290" y="143" text-anchor="middle" fill="#fbbf24" font-size="6" font-weight="bold">LSP</text>
    <!-- I -->
    <rect x="350" y="40" width="100" height="110" rx="6" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="400" y="60" text-anchor="middle" fill="#a78bfa" font-size="20" font-weight="bold">I</text>
    <text x="400" y="78" text-anchor="middle" fill="#9a93b8" font-size="7" font-weight="bold">Interface</text>
    <text x="400" y="88" text-anchor="middle" fill="#9a93b8" font-size="7" font-weight="bold">Segregation</text>
    <text x="400" y="105" text-anchor="middle" fill="#9a93b8" font-size="6">অনেক ছোট</text>
    <text x="400" y="115" text-anchor="middle" fill="#9a93b8" font-size="6">interface</text>
    <text x="400" y="130" text-anchor="middle" fill="#9a93b8" font-size="6">এক বড় নয়</text>
    <text x="400" y="143" text-anchor="middle" fill="#a78bfa" font-size="6" font-weight="bold">ISP</text>
    <!-- D -->
    <rect x="460" y="40" width="100" height="110" rx="6" fill="rgba(240,98,146,0.08)" stroke="#f06292" stroke-width="1.5"/>
    <text x="510" y="60" text-anchor="middle" fill="#f06292" font-size="20" font-weight="bold">D</text>
    <text x="510" y="78" text-anchor="middle" fill="#9a93b8" font-size="7" font-weight="bold">Dependency</text>
    <text x="510" y="88" text-anchor="middle" fill="#9a93b8" font-size="7" font-weight="bold">Inversion</text>
    <text x="510" y="105" text-anchor="middle" fill="#9a93b8" font-size="6">abstraction-এ</text>
    <text x="510" y="115" text-anchor="middle" fill="#9a93b8" font-size="6">নির্ভর করো</text>
    <text x="510" y="130" text-anchor="middle" fill="#9a93b8" font-size="6">concrete নয়</text>
    <text x="510" y="143" text-anchor="middle" fill="#f06292" font-size="6" font-weight="bold">DIP</text>
    <!-- Question -->
    <rect x="20" y="165" width="540" height="50" rx="8" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="185" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Code Review-এ পাঁচটা প্রশ্ন:</text>
    <text x="280" y="200" text-anchor="middle" fill="#9a93b8" font-size="7">এক class কি এক কারণে বদলায়? · সম্প্রসারণে খোলা? · subclass বসানো যায়?</text>
    <text x="280" y="210" text-anchor="middle" fill="#9a93b8" font-size="7">unused method কি আছে? · high-level abstraction-এ নির্ভর?</text>
    <!-- Bottom -->
    <rect x="20" y="230" width="540" height="40" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
    <text x="280" y="248" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Martin: "SOLID is not a destination. It is a direction."</text>
    <text x="280" y="262" text-anchor="middle" fill="#9a93b8" font-size="7">১০০% SOLID অসম্ভব — কিন্তু প্রতিটা প্রশ্ন কোড উন্নত করে</text>
  </svg>
  <div class="diag-cap">SOLID = ৫ প্রশ্ন: এক কারণ? খোলা/বন্ধ? বদলানো যায়? ছোট interface? abstraction? প্রতিটা প্রশ্ন কোড উন্নত করে।</div>
</div>

<div class="dialogue">মিযান — ভারসাম্য, ন্যায়বিচার। কুরআনে আল্লাহ বলেন — তোমরা ন্যায়ের সাথে ওজন প্রতিষ্ঠা করো, ওজনে কম দিও না (৫৫:৭-৯)। SOLID হলো মিযান — কোডের ভারসাম্য। এক দিকে ঝুঁকলে কোড পড়ে। Single responsibility বেশি ঝুঁকলে over-engineering, কম ঝুঁকলে God Class। Balance হলো কারিগরের লক্ষ্য।</div>
<div class="dialogue en">Mizan — balance, justice. Allah says — establish weight with justice, do not fall short in the balance (55:7-9). SOLID is mizan — the balance of code. Lean too far and code falls. Too much single responsibility → over-engineering. Too little → God Class. Balance is the craftsman's goal.</div>

<div class="secret-box">🏛️ SOLID = ৫ প্রশ্ন: S (এক কারণ), O (খোলা/বন্ধ), L (বদলানো যায়), I (ছোট interface), D (abstraction)। কোড review-এ প্রতিটা প্রশ্ন করো।</div>
`,
  senior:{
    title:"SOLID — Quick Reference (Martin, 2000)",
    body:`<p><strong>Robert C. Martin-এর ৫ নীতি:</strong></p>
<table class="kv-table">
<tr><th>অক্ষর</th><th>নীতি</th><th>প্রশ্ন</th><th>লঙ্ঘনের লক্ষণ</th></tr>
<tr><td class="hl"><strong>S</strong></td><td>Single Responsibility</td><td>এক class কি এক কারণে বদলায়?</td><td>God Class (২০০০+ লাইন)</td></tr>
<tr><td class="hl"><strong>O</strong></td><td>Open/Closed</td><td>নতুন feature যোগ করতে পুরোনো কোড ছোঁয়?</td><td>if/elif চেইন (Door 8)</td></tr>
<tr><td class="hl"><strong>L</strong></td><td>Liskov Substitution</td><td>subclass বসালে কোড ভাঙবে না?</td><td>Penguin.fly() raises</td></tr>
<tr><td class="hl"><strong>I</strong></td><td>Interface Segregation</td><td>client কি unused method-এ নির্ভর করছে?</td><td>Robot কে eat() দাও</td></tr>
<tr><td class="hl"><strong>D</strong></td><td>Dependency Inversion</td><td>high-level কি low-level-এ নির্ভর?</td><td>hardcoded MySQLDatabase</td></tr>
</table>
<div class="callout warn"><span class="co-icon">⚖️</span><div><strong>SOLID-এর সত্য:</strong> ১০০% SOLID অসম্ভব। Martin নিজে বলেন — "SOLID is a direction, not a destination।" কোড review-এ এই ৫ প্রশ্ন বারবার করো। কিছু প্রশ্নের উত্তর "না" হবে — সেটাই জীবন। কিন্তু প্রশ্ন না করলেই বিপদ। <strong>Over-engineering সতর্কতা:</strong> ৫০ লাইনের script-এ SOLID করলে = অযথা complexity। কোড বড় হলে (৫০০+ লাইন) SOLID প্রাসঙ্গিক। ছোট কোডে YAGNI (You Aren't Gonna Need It) বেশি গুরুত্বপূর্ণ।</div></div>
<p><strong>Cross-ref:</strong> Door 8 (Strategy = O), Door 9 (Observer = D), Door 14 (Seam = D), Door 15 (Abstraction = D), Door 20 (Synthesis)। Book 40 (Software Engineering) পুরো বই SOLID নিয়ে।</p>`
  }
});
